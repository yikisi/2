/**
 * @file ゴールドシップ - 育成
 * @author 雞雞
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ts_add: (() => {
    const title = '追加の自主トレ';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, you, callname) => {
      await era.printAndWait([
        '今日、',
        gs.get_colored_name(),
        ' との訓練は、どうにか終わった。',
      ]);
      era.println();

      await gs.say_and_wait('お疲れ——！ ばいばーい、ばいばーい！');
      era.println();

      await era.printAndWait([
        gs.get_colored_name(),
        ' は伸びをして小走りに去る——そして戻ってきた。',
      ]);
      era.println();

      await gs.say_and_wait(
        'よし、追加トレだ！ いまアタシ、ハイって感じだぜ！',
      );
      await gs.say_and_wait([
        callname,
        '、追加トレって知らねえのか？ のび太みたいに情報弱者だなー',
      ]);
      await gs.say_and_wait(
        '追加トレは追加トレの略だ——全宇宙一千万人のゴルシ界隈で大流行してるやつ！',
      );
      await gs.say_and_wait(
        'アタシのトレーナーなら、もっと深く研究しろっての。',
      );

      era.printButton('「なら、流行に置いてかれちゃまずいな。」', 1);
      era.printButton('「違う、今の流行はCD（Cool Down）だ！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait([
          'よし！ 元気だ！',
          you.actual_name,
          ' 隊員、ついてこい——！',
        ]);
        era.println();
        await era.printAndWait('夕陽の下でも、二人は走り続けた。');
      } else {
        await gs.say_and_wait(
          'CD……？ なにそれ、流行ってんの？ トレーナー界隈で流行ってんの……？',
        );
        await gs.say_and_wait(
          'CDってクールダウンの意味か……へっ！ 簡単じゃねえか！',
        );
        await gs.say_and_wait(
          'カキ氷食いながらCDすればいい！ 略して『Cool Down CD』！',
        );
        era.println();
        await era.printAndWait('こうして、二人はちゃんと休んだ。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'レース勝利！';
    /** @param {CharaTalk} gs ゴールドシップ */
    const f = async (gs) => {
      await gs.say_and_wait(
        'どうだ！ トレーナー、アタシの熱い走り、頭に焼きついたか！？',
      );
      era.printButton('「最高だった！」', 1);
      era.printButton('「もっと上を目指そう！」', 2);
      if ((await era.input()) === 1) {
        await gs.say_and_wait('だろ？ 言われなくても分かってる。');
      } else {
        await gs.say_and_wait('いいぜ——！ 地核の中心になってやる！！');
      }
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '迷走';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `レース前に ${you.name} へ残した不安とは裏腹に、${gs.name} は力強く、見事なレースを見せた！`,
      );
      era.println();
      await era.printAndWait(
        'この先のレースも期待できる。いまが、進む先を見据えるときだ。',
      );
      era.println();

      era.printButton('「お疲れ！」', 1);
      await era.input();

      await era.printAndWait(
        `${gs.name} はすぐ両腕を高く掲げ、意味不明な大豆の呪文を唱え、今日があるのは大豆のタンパク質のおかげだと主張した。`,
      );
      era.println();
      await gs.say_and_wait('今日も真面目に豆乳を挽くぞ！ 豆だ豆だ豆だ豆——！');
    };
    f.title = title;
    return f;
  })(),
  hope_sta_win: (() => {
    const title = 'エデンへの道';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      const ret = [];
      await era.printAndWait('無事に完走した！');
      era.println();
      await era.printAndWait(
        'この調子なら、来年のクラシック級でもゴールドシップの活躍が見られそうだ。',
      );
      era.println();

      era.printButton('「お疲れ！」', 1);
      await era.input();

      await gs.say_and_wait(
        'これならエイヒレの蒲焼も嫉妬する香りだぜ——嗅いでみろ？',
      );
      era.println();
      await era.printAndWait(
        `汗だくの ${gs.name} が近づき、${you.name} に自分の汗の匂いを嗅がせる……`,
      );
      era.println();
      await gs.say_and_wait('どうだ？ 陸を制した次は海まで掌中に収めたぜ～');
      era.printButton('「たしかに、いい匂いだ……」（恋慕+2）', 1);
      era.printButton('「でもこれは陸上のレースだぞ……」（好感+10）', 2);
      ret.push(await era.input());
      await era.printAndWait([
        gs.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を選手通路の壁へ押し、自分も ',
        you.get_colored_name(),
        ' に背を預けた。',
        gs.sex,
        'は力を抜き、今にも倒れそうだ。',
        you.get_colored_name(),
        ' は仕方なく……',
      ]);
      era.println();
      era.printButton('（ゴールドシップの腰を抱えて支える）（恋慕+2）', 1);
      era.printButton('（肩を貸してゴールドシップを支える）（好感+10）', 2);
      ret.push(await era.input());
      await gs.say_and_wait(
        `そういえば、トゥインクルシリーズはこれで全部放送終了だよな。本${
          gs.sex_code === 1 ? '旦那' : 'お嬢'
        }の熱い勝ち気も、もう出番なしだ……`,
      );
      era.println();

      era.printButton(
        '「いやいや、何言ってんだ。ここからが本番のクラシック級だろ！」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `そんなやりとりの末、${you.name} と ${gs.name} はゆっくり控え室へ戻った——`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `新しい年、新しい始まり。${gs.name} の活躍が、さらに上へ届いてほしい。${you.name} はそう思っていた。`,
      );
      await era.printAndWait(
        `その当の本人は ${you.name} に向かって両手を合わせ、掌が当たってパシッと音を立てた。`,
      );
      await gs.say_and_wait(
        '新年ありがとな——新しい一年……去年のアタシが、今年のアタシになった。',
      );
      await era.printAndWait(
        `${you.name} はうなずき、技術的には正しい発言に同意した。`,
      );
      await gs.say_and_wait('でもよ、これって大奇跡だと思うんだよな。');
      await gs.say_and_wait(
        '地球がなかったら、宇宙がなかったら……アタシは存在しねえ。',
      );
      await era.printAndWait(
        `${gs.sex} はまた ${you.name} に向かって合掌する。${you.name} は、三度目は勘弁してほしいと思った。`,
      );
      await gs.say_and_wait(
        'だから今年一年は、いろんなものに感謝する年にする。',
      );
      await gs.say_and_wait('地球に感謝、宇宙に感謝、目の前のてめえに感謝。');
      await gs.say_and_wait(
        'それでは一曲、『恭賀新年～寒冬を越え、春へ行け～』',
      );
      await era.printAndWait(
        `${gs.name} は演歌調の謎の曲を歌い始め、${gs.sex} の悠々とした歌声がトレーナー室にいつまでも残った。`,
      );
      await era.printAndWait(
        `伴奏なしのアカペラでも、${you.name} には歌に満ちた本気の気持ちが伝わってきた。`,
      );
      await era.printAndWait(`一曲終わり、${you.name} は思わず拍手した。`);
      await gs.say_and_wait('サンキュー、サンキュー、山頂の友よこんにちは！');
      await era.printAndWait(
        'アイドル歌手は嬉しそうに、いない観客へ手を振っている。',
      );
      era.println();

      era.printButton('「そういえば……」', 1);
      await era.input();

      await gs.say_and_wait('ん？ どうした？ アタシにも何か伝えるか？');
      await era.printAndWait(
        `${gs.name} は期待の顔を作り、腰の尻尾も箒みたいに勢いよく左右へ振っている。`,
      );
      era.println();

      era.printButton('「今年のクラシック級、ちゃんと結果を出せよ。」', 1);
      await era.input();

      await gs.say_and_wait(
        'なんだよ？ クラシック？ 今年は激烈なギターソロを披露したかったんだけど、逆張りでバイオリンもありかもな。',
      );
      era.println();

      era.print('「何言ってるんだ、つまり……」');
      era.printButton('「長距離適性を鍛えよう！」（スタミナ+40）', 1);
      era.printButton('「いま考えよう！」（賢さ+40）', 2);
      era.printButton('「ドームツアーをやろう！」（スキルPt+50）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await gs.say_and_wait(
            'なるほど、長時間演奏に耐えるスタミナを鍛えるってことか！',
          );
          await era.printAndWait(
            `違う。${you.name} は首を振るが、彼女はもう自分の世界に沈んでいた。`,
          );
          await gs.say_and_wait(
            '分かった！ たしかにクラシックなら、長い曲は10時間にもなるもんな！',
          );
          await gs.say_and_wait(
            'よし！ 10時間でも20時間でも、ウマ娘をよこせー！',
          );
          await era.printAndWait(
            `違う。${you.name} がクラシック級とクラシック音楽の違いを説明する前に、${gs.sex} は一目散に楽器を取りに走った。`,
          );
          await era.printAndWait('いまさら、臨機応変に付き合うしかない。');
          break;
        case 2:
          await gs.say_and_wait(
            'なるほど、バンドメンバーの意見を尊重するか！ それはありだ。',
          );
          await gs.say_and_wait(
            'だって解散の原因、音楽路線の食い違いってやつ、多いからな。',
          );
          await gs.say_and_wait('分かった、付き合う……！ さあ、拳で語ろう！');
          await era.printAndWait(
            'そのあと二人は物理的に打ち解け、トレーナー室で川の字になって寝た。',
          );
          await era.printAndWait('よく眠れた。');
          break;
        case 3:
          await gs.say_and_wait('おいおい……ドームツアー！？');
          await gs.say_and_wait(
            'てめえの夢、遠大すぎる！！ アタシ……燃えてきた！！',
          );
          await gs.say_and_wait(
            'よし！！ 今すぐ開演だ！！ ライブやるなら一位を目指せ！！！',
          );
          await era.printAndWait('そのあと、二人はしばらく必死に練習した。');
          await era.printAndWait(
            '学園で開いた小さな野外ライブは、意外と評判が良かった。',
          );
          await era.printAndWait('で、レースは？');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_47_3: (() => {
    const title = '母は神より強い編';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} gs2 ゴールドシップ（第二配色、ふざけ状態）
     * @param {CharaTalk} creek スーパークリーク
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, gs2, creek, you) => {
      await gs2.say_as_unknown_and_wait('海底に眠る黄金の船よ……');
      await gs2.say_as_unknown_and_wait('いまこそ目覚めのとき……');
      await gs2.say_as_unknown_and_wait(
        'その力を発揮し、前人未到の境地へ至れ……',
      );
      era.println();

      await gs.say_and_wait('……ん？ いまの声、なんだ……？');
      era.println();

      era.printButton('「ついに幻聴か？」', 1);
      await era.input();

      await gs.say_and_wait(
        '神を自称する声が聞こえた。それともゴルシの体内の第二人格か？',
      );
      era.println();
      era.printButton('「心療の専門家、予約しておくか……」', 1);
      await era.input();

      await gs.say_and_wait('ちがう、あいつアタシを『エデン』へ行けって……');
      era.println();

      await era.printAndWait(
        `クラシック三冠の初戦、皐月賞はもう近い。プリンのことは考えないほうがいい……だが ${gs.name} は勝手に一目散に飛び出し、その「エデン」を探しに行った。`,
      );
      era.println();

      await gs.say_and_wait('I AM GODSHIP（アタシは神金船だ）——！');
      era.println();

      await era.printAndWait(
        `${you.name} は室内での切り返し旋回速度を全開にして、どうにか ${
          gs.name
        } の後ろを追う——すると${
          gs.sex
        }は別の${gs.uma_sex_title}に真正面からぶつかり、後ろから追いついた ${
          you.name
        } に挟まれた。`,
      );
      era.println();

      await gs.say_and_wait('アタシは……金星が見える……金星に公園が……');
      await gs.say_and_wait(
        'ちがう、てめえ誰だ！ 神金船の衝撃に耐えやがって……！',
      );
      await creek.say_and_wait(
        `あらあら、こんにちは、${gs.name} さん。今日も元気ですこと。`,
      );
      era.println();

      await era.printAndWait(
        `あれほどの衝撃に耐えるとは、実に乳……違う、実に耐久に優れた${creek.uma_sex_title}だ！`,
      );
      era.println();

      era.printButton('「神でも、お母さんには敵わないらしい……」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} は ${creek.name} に謝ってから、頭のクラクラした ${gs.name} を訓練室へ引きずって戻った。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '四月の仇';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await gs.say_and_wait('セイヤー！ 五月の仇、討ったぜ！');
      era.println();
      await era.printAndWait(
        `なぜかは分からないが、${gs.sex}は四月開催なのに皐月賞と呼ぶ皐月賞に不服らしく、こうして皐月賞と喧嘩を売っていた。`,
      );
      era.println();
      await gs.say_and_wait('来年も皐月賞に戻って、五月の仇をもう一回討つ！');
      era.println();

      era.printButton(
        '「皐月賞はクラシック級だ、一生に一度しか走れないぞ！」',
        1,
      );
      await era.input();

      await era.printAndWait(
        `だが ${you.name} の声が届く前に、${gs.name} はもう遠くまで走っていた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏合宿';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `夏合宿は、${gs.uma_sex_title}にとって学びと遊びが同居する時間だ。夏休みになれば、ほとんどのトレセンの生徒が海へ向かい、陽の光と砂浜、そして少しばかりの地獄の鍛錬を楽しむ。`,
      );
      await era.printAndWait(
        `当然ながら、そういう時期になると、${you.name} の一風変わった愛馬 ${gs.name} は特に調子がいい。`,
      );
      era.println();

      await gs.say_and_wait(
        'おおおおお！ 夏といえば海だ！ 一緒に海へ出発だ！！！',
      );
      await gs.say_and_wait('Zzzzzzz……');
      era.println();

      await era.printAndWait(
        `${you.name} はバスで死んだ豚みたいに眠る ${gs.name} を見ながら、このやつのやる気は ${gs.sex} 本人と同じで、来たと思えば消えると思った。`,
      );
      era.println();

      era.printButton('「起きろ！！！ 陽が尻を焼いてるぞ！！！」', 1);
      await era.input();

      await gs.say_and_wait(
        'うわ～びっくりした！ いまバスで海の合宿を待ってる夢見てたのに！ どう償うんだよ！',
      );
      era.println();

      await era.printAndWait(
        `${you.name} は不機嫌に親指で窓の外を示し、もう着いていることを教える。気づいた ${gs.name} はすぐ上機嫌に、ぴょんと跳ねてバスを降りた。`,
      );
      era.println();

      await era.printAndWait(
        `数日は悪くない休暇で、訓練も充実していた。だが今日はもう訓練の時間なのに、${gs.name} は姿を見せない。${gs.sex}を探すため、海辺へ来た。`,
      );
      era.println();

      await era.printAndWait('そして——');
      era.println();

      await gs.say_and_wait(
        'さあ通る人通る人、見逃すなよーおいしい焼きそば大安売りよー！！',
      );
      await gs.say_and_wait(
        '甘いも酸っぱいも苦いも辛いも～人生と同じだよー！！',
      );
      era.println();

      era.printButton('「なんでここで焼きそば売ってるんだ……！！」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} は腹を立てて屋台の前へ行き、サボっているこいつを問い詰めようとした。`,
      );
      era.println();

      await gs.say_and_wait('あー、トレーナーじゃねえか～特辛でいいんだよな？');
      era.println();

      era.printButton('「訓練に呼べって来たんだ。」', 1);
      await era.input();

      await gs.say_and_wait(
        'いやー、店主のおじちゃんの代わりに立ってるだけだって～腰が痛いらしいんだよ、真夏の陽の下で一日焼かせるの、忍びねえだろ？',
      );
      await gs.say_and_wait(
        'だから今日は、この麺を全部売り切る！ さもないとおじちゃんの腰が治らねえ！',
      );
      era.println();

      await era.printAndWait(
        `${you.name} は、${gs.sex}の一度決めたら聞かない性格では説得できないと悟り、仕方なく甘酢味の焼きそばを一皿頼み、隣のビーチチェアで食べながら ${gs.name} を監視し、また失踪されないようにした。`,
      );
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = 'エデンへのヒント';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `レース前に ${you.name} へ残した不安とは裏腹に、${gs.name} は力強く、見事なレースを見せた！`,
      );
      era.println();
      await era.printAndWait('この先のレースが、ますます楽しみだ！');
      era.println();
      await gs.say_and_wait('あー、走り終わった走り終わった～');
      era.println();
      await era.printAndWait(`${gs.name} は脱力した姿勢で、長く息を吐いた。`);
      era.println();
      await gs.say_and_wait(
        'よし、せっかく肩の力が抜けたし、これからウィナーズステージで野菜作るか。アタシの天才力なら、ウィナーズステージを超有機農園にできる。',
      );
      era.println();

      era.printButton('「ちょっと待て。」', 1);
      await era.input();

      await era.printAndWait(
        `だが ${gs.name} は一直線の勢いで ${you.name} の声を聞かず、どんどん遠ざかる——`,
      );
      era.println();
      await flash.say_and_wait(`——それは、まことに残念です、${gs.name} さん。`);
      era.println();
      await era.printAndWait(
        `${gs.name} の耳がぴくりと動き、こちらを振り返る。あの真面目で几帳面なウマ娘「${flash.name}」が選手通路の壁に寄りかかり、笑っているのかいないのか分からない顔をしていた。`,
      );
      era.println();
      await flash.say_and_wait('あなたの錨は、もう鈍くなったようですね。');
      era.println();

      if (era.get('cflag:37:招募状态') === recruit_flags.yes) {
        era.printButton(`「フラッシュか」`, 1);
      } else {
        era.printButton(`「あ、${flash.name} さん？」`, 1);
      }
      await era.input();

      await flash.say_and_wait(
        '私は『あのお方』に託され、口上をお伝えしに参りました。',
      );
      await flash.say_and_wait(
        'ですが急流を退くのでしたら、もはやその必要もないようですね。',
      );
      era.println();

      era.printButton('「どんな口上です？」', 1);
      await era.input();

      await flash.say_and_wait(
        'あなたがたが追っている『エデン』へ通じる、ヒントです。',
      );
      await gs.say_and_wait('なんだと——！ エデンだと！');
      await gs.say_and_wait('ところでエデンって何だ？');
      era.println();

      era.printButton('「どうせイオンとかじゃないよな。」', 1);
      await era.input();

      await flash.say_and_wait('……エデンとは、いわゆる、ウマ娘の理想郷です。');
      era.println();

      await era.printAndWait(
        `${you.name} は ${flash.name} が小さく「なんですかそれ」と呟くのを聞いたが、聞かなかったことにした。`,
      );
      era.println();

      await gs.say_and_wait('おお！ 夢に出てきたやつだ！');
      await gs.say_and_wait('フラッシュ、教えろ！');
      era.println();

      await era.printAndWait(`${flash.name} は小さく笑い、首を振った。`);
      era.println();

      await flash.say_and_wait(
        '引退して畑仕事、という人生から復帰なさるようですね。',
      );
      await flash.say_and_wait(
        'ただし、このような大切な情報は、そう簡単には得られません。',
      );
      await flash.say_and_wait(
        '知りたいのでしたら、『有馬記念』の舞台で、私と一戦交わしませんか？',
      );
      era.println();

      era.printButton('「有馬記念で、あなたと走ればいいのか？」', 1);
      await era.input();

      await flash.say_and_wait('その通りです。私に二言はありません。');
      era.println();

      await era.printAndWait(
        `『あのお方』が誰なのかは、まだ分からない——だが少なくともゴルシのレースへの原動力は戻ってきた！ ありがとう、フラッシュ！`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_41: (() => {
    const title = '目指せパリコレ編';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, opera, you) => {
      await era.printAndWait(
        'ゴールドシップは有馬記念でエイシンフラッシュとぶつかる——',
      );
      era.println();

      await era.printAndWait(
        'たしかに、エイシンフラッシュ自体が強敵だ……だが有馬記念の舞台では、どの選手も実力十分な強者ばかり！',
      );
      era.println();

      era.printButton('（ゴルシを捕まえて、ちゃんと鍛えねえと……）', 1);
      await era.input();

      await era.printAndWait(
        `そう、この大事な局面で、${
          you.name
        } のかわいくて魅力的な担当${gs.uma_sex_title}ゴールドシップは、またどこかへ消えていた。あいつは意気揚々と ${
          you.name
        } の目の前を大股で通り過ぎ、「おほほほほ！ ウマ娘の頂点に立つために必要なのは圧倒的な『美』……！！」などと言いながら、一目散に走り去った。`,
      );
      era.println();

      await era.printAndWait(
        `${
          you.name
        } は急いで追い、ふと、自身の美学を誇る${opera.uma_sex_title}と鉢合わせした……`,
      );
      era.println();

      await gs.say_and_wait('てめえは……！');
      await opera.say_and_wait(
        'その通り！ 我こそ美の化身！ 神に愛されし光の子！ テイエム——',
      );
      await gs.say_and_wait(
        'オペラオー——！！ ふん、ゴールドシップ様はパリコレに楽々立てる存在だ！',
      );
      await opera.say_and_wait(
        'ぐっ、台詞を奪うとは……！ さすがゴールドシップ、一瞬たりとも油断できぬ！ ではどちらがより美しいか、ここで決着をつけよう！',
      );
      era.println();
      await era.printAndWait(
        `それから二人の${opera.uma_sex_title}は、${
          you.name
        } の注視のもと、まる四時間のウォーキング対決を繰り広げた……！ 当人が楽しむのはまだいい。なぜ ${
          you.name
        } まで引きずり込むのか、なんという無慈悲！`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = 'キーワードを集めろ';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `レース前に ${you.name} へ残した不安とは裏腹に、${gs.name} は力強く、見事なレースを見せた！`,
      );
      era.println();
      await gs.say_and_wait('よし！ 収穫のときだ！');
      era.println();

      era.printButton('「よく走った！」', 1);
      await era.input();

      await era.printAndWait(
        `${flash.name} が傍らから歩み寄り、${gs.name} に拍手を送った。`,
      );
      era.println();
      await flash.say_and_wait(`さすがです、${gs.name} さん。`);
      await gs.say_and_wait('おっ！ フラッシュ！');
      await flash.say_and_wait('私たちの約束を、覚えていらっしゃいますね。');
      era.println();

      era.printButton('「イオンの件か？」', 1);
      await era.input();

      await flash.say_and_wait('……エデンです。');
      await flash.say_and_wait(
        'これが、あのお方があなたに用意した手がかりです。',
      );
      era.println();

      await era.printAndWait(
        `${flash.name} はポケットから、まだ余熱の残る手紙を取り出し、${
          gs.name
        } に渡すと去っていった。二人きりが残る。`,
      );
      era.println();
      await gs.say_and_wait('見せてもらうか！');
      era.println();
      await gs.say_and_wait('『エデンは、いちばん深い海底に……』');
      await gs.say_and_wait('『エデンを得るには、四つの手がかりが要る……』');
      await gs.say_and_wait(
        '『数多の強敵と戦い、彼女たちから手がかりを得よ by 秘伝の書。』',
      );
      era.println();

      era.printButton(
        '「ゲーム用スティックで操縦するミニ潜水艦で潜らなくて済むならいいけど……」',
        1,
      );
      await era.input();

      await gs.say_and_wait('ふんふん、どんどん血が騒いでくるぜ！');
      await gs.say_and_wait(
        'でもフラッシュがずっと言ってる『あのお方』って、誰なんだ……？',
      );
      era.println();

      await era.printAndWait(
        `なんにせよ、${gs.name} のレースへの熱がさらに上がった。それは悪いことじゃない！`,
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '初詣';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await gs.say_and_wait('トレ——！ また来たぜ！');
      await gs.say_and_wait('どうだ！？ どうだどうだどうだ！？');
      era.println();

      await era.printAndWait(
        `予想に反して、${gs.name} は普通の制服ではなく、黒い洒落た衣装を着ていた。`,
      );
      era.println();

      await gs.say_and_wait(
        'これはゴルシ自らデザインし、自ら縫った登壇衣装だぜ！',
      );
      await gs.say_and_wait('目標はパリコレのランウェイだ！');
      era.println();

      era.printButton('「美いかって、たしかに美しい……」', 1);
      await era.input();

      await era.printAndWait(
        `${gs.sex}はにやりと笑い、${you.name} の腕を取った。豊かな胸が ${you.name} に当たる。`,
      );
      era.println();

      await gs.say_and_wait('じゃあ～明日は盛装で神社へ年越しだ！');
      era.println();

      era.printButton('「……え？ 俺も着るのか？」', 1);
      await era.input();

      await era.printAndWait(
        `翌日、${you.name} は豪華な武者鎧を無理矢理着せられ、西洋貴婦人風のゴールドシップとともに、近所の神社で好奇の視線に囲まれた。`,
      );
      era.println();

      await era.printAndWait(
        `${gs.name} と過ごす二度目の新年も、まったく気が抜けない。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_3: (() => {
    const title = '目指せ社会人編';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} ticket ウイニングチケット
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, ticket, you) => {
      await era.printAndWait('年が明け、シニア級のレースが始まった。');
      await era.printAndWait(
        `まもなく天皇賞や宝塚記念といった大レースも迫ってくる。`,
      );
      era.println();

      await era.printAndWait(
        'ところが、ゴールドシップはトレーナー室に来ていない。',
      );
      era.println();

      await era.printAndWait(
        `${you.name} は怒りを押さえ、学園中を探し回った——`,
      );
      era.println();

      await gs.say_and_wait(
        `チケゾー、聞いてくれ。後輩の${gs.child_sex_title.substring(
          0,
          1,
        )}がなにより大事なんは、いわゆる社会人力なんだわ。`,
      );
      await ticket.say_and_wait('人材会社？');
      await ticket.say_and_wait(
        'いやいや、社会にうまく溶け込み、決まりどおり素早く動き、周りに迷惑をかけない『社会人・力』だ！',
      );
      await ticket.say_and_wait('『社会人点力』！ なんかすごそう……！！');
      era.println();

      era.printButton(
        '（てめえの『社会人点力』は完全に落第だゴールドシップ——！！）',
        1,
      );
      await era.input();

      await gs.say_and_wait(
        'なんで『社会人・力』を『社会人点力』って読むのか分からねえけど、じゃあ俺たちの『社会人点力』を試すか！',
      );
      await gs.say_and_wait('そこの覗き魔トレーナー、お前も来い！');
      era.println();

      await era.printAndWait(
        `言い終わるか終わらないかのうちに、ゴールドシップとウイニングチケットは勢いよく学園を飛び出し、${you.name} は息を切らして追いすがるしかなかった。`,
      );
      era.println();

      await era.printAndWait(
        'そのあと、ゴールドシップ二人組が電車内で静かにし『社会人点力』を誇示しようとする試みは、開始15秒で失敗に終わった。',
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = 'キーワード';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, flash, you) => {
      await era.printAndWait(
        `レース前に ${you.name} へ残した不安とは裏腹に、${gs.name} は力強く、見事なレースを見せた！`,
      );
      era.println();
      await gs.say_and_wait(
        'ほっ！ ほっ！ ほっ！ ほっ！ 今日もよく走れたかしら？',
      );
      await gs.say_and_wait(
        `本${
          era.get('cflag:7:性别') !== 1 ? 'お嬢' : '旦那'
        }の美は、素手で割ったウニのように新鮮、ほっ！ ほっ！ ほっ！ ほっ！`,
      );
      era.println();
      await era.printAndWait(
        `今日の ${gs.name} は作風を変え、まさにアニメ漫画のお嬢様ステレオタイプ総集編のようだった。`,
      );
      era.println();

      era.printButton('「その生臭さは、嗅ぎたくない。」', 1);
      await era.input();

      await flash.say_and_wait(`よくなさいました、${gs.name} さん。`);
      await flash.say_and_wait('では、約束の第一条の手がかりです。どうぞ。');
      await gs.say_and_wait('すぐ逃げるな、前回と全然違う。');
      era.println();

      era.printButton('「飽きたんじゃないか？ 何て書いてある。」', 1);
      await era.input();

      await gs.say_and_wait('字が一つしかねえ、『スイ』。');
      era.println();
      await era.printAndWait(
        `以前 ${
          flash.name
        } が渡した手紙には、エデンへ向かう四つの手がかりを集めろとあった。この『スイ』が第一条だろう。`,
      );
      era.println();
      await gs.say_and_wait(
        'いいぜ！ 面白え！ なら四つの手がかり、全部集めちまおう！',
      );
      era.println();
      await era.printAndWait(
        'ゴールドシップのレースへの熱が、さらに上がった！',
      );
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = 'キーワード';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} jordan トウカイジョーダン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     * @param {boolean} win_takz_kin_c ゴールドシップがクラシック年の宝塚記念に勝っているか
     * @param {boolean} bad_result 悪い結果か（「ゲート難」を習得）
     */
    const f = async (
      gs,
      flash,
      jordan,
      you,
      callname,
      win_takz_kin_c,
      bad_result,
    ) => {
      await era.printAndWait(
        `レース前に ${you.name} へ残した不安とは裏腹に、${gs.name} は力強く、見事なレースを見せた！`,
      );
      era.println();
      await gs.say_and_wait(`ははは！ ${jordan.name}！ 勝ったぜ、第三部完！`);
      era.println();
      await era.printAndWait(
        `レース後、${gs.name} は得意げに、敵であり友でもあるギャル・${jordan.name} へ勝ちを見せつけていた。`,
      );
      era.println();
      await jordan.say_and_wait('ぐ——覚えとけよ！');
      await jordan.say_and_wait('あと、これも覚えとけ！');
      era.println();
      await era.printAndWait(
        `${jordan.name} は紙切れを ${gs.name} の手にねじ込み、ぷんすかと去っていった。`,
      );
      era.println();

      era.printButton('「あ、またエデンの手がかりか？」', 1);
      await era.input();

      await gs.say_and_wait('ん……今度は『ゾ』だ。');
      await gs.say_and_wait('全然分かんねえ——！');
      era.println();
      await era.printAndWait(
        `${flash.name} だけでなく、${jordan.name} まで加わっている……裏で糸を引く人物は、いったい何者だ？`,
      );
      if (win_takz_kin_c) {
        await era.printAndWait(
          `帰ろうとしたとき、傍らの観客が ${gs.name} に手を振り、声を上げた。`,
        );
        era.println();
        await era.printAndWait('観客A「ゴールドシップ、すごすぎる！」');
        await era.printAndWait('観客B「連覇おめでとう！」');
        era.println();
        await era.printAndWait(`礼儀として、こちらも観客に応えた。`);
        era.println();
        await gs.say_and_wait('ありがとな！');
        era.println();

        era.printButton('「応援ありがとう～」', 1);
        await era.input();

        await era.printAndWait(
          `${gs.name} は振り返って ${you.name} に尋ねる。`,
        );
        era.println();
        await gs.say_and_wait(`${callname}、連覇って何だ？`);
        era.println();

        era.printButton('「……去年も、このレースで勝ってるだろ。」', 1);
        await era.input();

        await gs.say_and_wait('マジかよ？ じゃあアタシ、超すげえのか？');
        era.println();

        era.printButton('「たしかに超すごい。」', 1);
        era.print('（パワー+18、他ステータス+3）', { offset: 1, width: 23 });
        era.printButton('「歴史に名を残せるすごさだ！」', 2);
        era.print(
          [
            '（全ステータス+3、「ゲート難」習得、スキルPt+45 または 全ステータス+8、スキルPt+75）',
          ],
          { offset: 1, width: 23 },
        );
        const ret = await era.input();
        if (ret === 2 && !bad_result) {
          await gs.say_and_wait(
            'あーはっは～やっぱりゴルシは、褒められるとちゃんとする子なんだよな～',
          );
          await gs.say_and_wait('これからも、ちゃんと甘やかせよ～');
        }
        return [ret];
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏合宿';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, you, callname) => {
      await gs.say_and_wait('夏だ！ 海だ！ 水着だ！');
      era.println();

      await era.printAndWait('二人は砂浜を歩いていた……');
      await era.printAndWait(
        `${gs.name} は炎天下でも清々しく、${you.name} だけが汗だくだった。`,
      );
      era.println();

      era.printButton('「今年の夏、例年より暑いな……！」', 1);
      await era.input();

      await gs.say_and_wait('暑いなら脱げばいいだろ？');
      era.println();

      await era.printAndWait(
        `${you.name} はその言葉に、目を銅鈴より大きく見開き、水着以外何も着ていない自分を指差した。${you.name} はさらに二本の指を突き出し、まず自分の両目を指し、それから ${gs.name} の目を指した。`,
      );
      era.println();

      await era.printAndWait('「はいはい、冗談だよ——」');
      await era.printAndWait('「氷食べに行こう、氷！ 体温下げよう！」');

      era.printButton(
        '「分かった、買ってくる。」（ウマコイン-5、好感+10、恋慕+2）',
        1,
      );
      await era.input();

      await era.printAndWait(
        `${you.name} は ${gs.name} を砂浜に残し、早足で屋台へカキ氷を買いに行き、帰り際——`,
      );

      era.drawLine();
      await era.printAndWait(
        `通行人A「おや？ この${gs.sex_code !== 1 ? 'お嬢さん' : 'お兄ちゃん'}、お一人？ 」`,
      );
      await era.printAndWait(
        `通行人B「${gs.sex_code !== 1 ? '兄ちゃん' : '姉ちゃん'}と遊ばねえ？」`,
      );
      era.println();

      await gs.print_and_wait(
        `${gs.name} は元の場所に立ったままだが、花のような美貌は必ず蜂や蝶を呼ぶ。何人もの不逞な連中が${gs.sex}を囲み、しつこく絡んでいた。こういう場でも、${gs.name} はなんとかはぐらかそうとしていて、いつもの威勢は微塵もない……`,
      );
      era.println();

      await gs.print_and_wait(
        `そうか……あいつは名の知れた${gs.uma_sex_title}だ。ここでは簡単に切れない……`,
      );
      era.println();

      await gs.print_and_wait(
        `${gs.name} は表向きは自分勝手だが、実際は誰より「社会性」というものを分かっている。`,
      );
      era.println();

      era.printButton(
        `「おい、よその${gs.sex_code - 1 ? '女' : '男'}に何してんだ？」`,
        1,
      );
      await era.input();

      await era.printAndWait(
        `${you.actual_name} が言い終わるや、その場の数人が驚いて${you.sex}を見た。`,
      );
      era.println();

      await gs.say_and_wait('ダーリン～来てくれた～');
      era.println();

      if (era.get('love:7') >= 75) {
        await gs.print_and_wait(
          `${gs.name} は好機と見るやチンピラたちを掻き分け、両手を振って ${you.actual_name} へ走り寄り、抱きしめ、熱い口づけを捧げた。${you.actual_name} を含む全員が度肝を抜かれたが、${you.actual_name} はすぐ応えた——双方の舌が口の中で絡み、求め合い、熱を分け合う……チンピラたちは口説きに失敗したと見るや、悪態をついて去った。`,
        );
      } else {
        await gs.print_and_wait(
          `${gs.name} は好機と見るやチンピラたちを掻き分け、両手を振って ${you.actual_name} へ走り寄り、抱きしめ、それから ${you.actual_name} の頬に軽いキスをした——そのキスは顔にリップの冷たさを残し、${you.actual_name} の跳ねる胸には激情の刻印を残した。`,
        );
      }

      era.drawLine();
      await era.printAndWait(
        `一件落着し、${you.name} とゴールドシップは日傘の下でカキ氷の涼しさを味わった。`,
      );
      era.println();

      await gs.say_and_wait('ふぅ、危なかった～ゴルシ、さらわれそうだったぜ～');
      await gs.say_and_wait(`ありがとな、${callname}❤️`);
      await gs.say_and_wait(
        `ところで……アタシは『${gs.sex_code - 1 ? '女' : '男'}』扱いなのか？`,
      );

      await era.printAndWait(
        `${gs.name} は悪賢い顔で ${you.name} の肩に寄りかかり、${you.name} がどう説明しても聞かない……この件は、${gs.sex}に十年は吹聴されそうだ……`,
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = 'キーワード？';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} jordan トウカイジョーダン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, jordan, you) => {
      await era.printAndWait(
        `レース前に ${you.name} へ残した不安とは裏腹に、${gs.name} は力強く、見事なレースを見せた！`,
      );
      era.println();
      await gs.say_and_wait('ときに笑い、ときに涙……紆余曲折の旅……');
      await gs.say_and_wait(
        'この旅のすべては無駄じゃなかった！ だって勝利は、もうアタシの手の中だ！',
      );
      await jordan.say_and_wait('くそっ、またてめえに負けたか……！！ ぐ……！！');
      await jordan.say_and_wait(
        '今日はウマも足元すくう日だ、次は絶対取り返す！',
      );
      await gs.say_and_wait('いいぜ！ ゴールでマカロン食いながら待ってる！');
      await jordan.say_and_wait('ふん！');
      era.println();
      await era.printAndWait(
        `こうして ${jordan.name} はまたぷんすかと去っていった。だが……`,
      );
      era.println();
      await gs.say_and_wait('おっ？ なんか落としていきやがった。');
      era.println();
      await era.printAndWait('以前と同じ紙切れだ。また新しい手がかりらしい。');
      era.println();

      era.printButton('「素直じゃないやつだな。」', 1);
      await era.input();

      await gs.say_and_wait('今度は……『ク』。');
      await gs.say_and_wait('『スイ』、『ゾ』、『ク』……');
      await gs.say_and_wait('まだ分かんねえ——！');
      era.println();
      await era.printAndWait(
        'あのお方は今回もきちんと新しい手がかりを残した。生徒をこういうことに使えるとは、よほど位の高い人物なのか？',
      );
    };
    f.title = title;
    return f;
  })(),
  sa_95_41: (() => {
    const title = '真剣勝負編';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, festa, you) => {
      await era.printAndWait(
        `${you.name} とゴールドシップをエデンへ導く謎の人物……`,
      );
      era.println();

      await era.printAndWait(
        'その人物は、ゴールドシップに出走のやる気を出させるために、これほど手をかけているのだろう。なんにせよ、それがゴールドシップの原動力になるなら……三者とも得をする局面だ。',
      );
      era.println();

      era.printButton('（で、こいつらは何やってんだ……）', 1);
      await era.input();

      await era.printAndWait(
        `${
          you.name
        } の眼前には、生き写しの${gs.uma_sex_title}像が二つ立っている……生き写しというより、本人だ。`,
      );
      era.println();

      await gs.say_and_wait('……');
      await festa.say_and_wait('……');
      era.println();

      await era.printAndWait(
        '二人は人通りのある中庭に佇んでいる。微動だにしないのに、かえって目立つ。',
      );
      era.println();

      await festa.say_and_wait('……');
      await gs.say_and_wait('……');
      era.println();

      await era.printAndWait(
        `また訳の分からない対決をしているのだろう、動くなチャレンジとか。このとき ${you.name} は、面白いことを思いついた。`,
      );
      era.println();

      era.printButton('「うわ、いい年してだるまさんがころんだか。」', 1);
      await era.input();

      await gs.say_and_wait('……');
      await festa.say_and_wait('……！');
      era.println();

      era.printButton('「そうだ、この機会に悪戯でもするか～？」', 1);
      await era.input();

      await festa.say_and_wait('……むっ！');
      await gs.say_and_wait('……');
      era.println();

      era.printButton('「おや、ジャーニーさんじゃないですか！」', 1);
      era.printButton('二人の腰の敏感なところを愛撫する。', 2, {
        disabled:
          era.get('cflag:49:招募状态') !== recruit_flags.yes ||
          era.get('love:49') < 50,
      });
      const ret = await era.input();
      if (ret === 1) {
        await festa.say_and_wait('ちっ、見られたか！？ ……嘘だろ！');
        await gs.say_and_wait('よし、アタシの勝ち！！');
        await festa.say_and_wait(
          'くそ！ ゴールドシップの野郎！ いいだろう！ 次はアタシの得意分野で、正々堂々と倒してやる！',
        );
        await gs.say_and_wait('はっ！ ならゴール横で待ってるぜ！');
      } else {
        await festa.say_and_wait('……てめえ❤️！');
        await gs.say_and_wait('……❤️');
        era.println();

        await era.printAndWait(
          `${you.name} のわざとらしい愛撫に、二人の心は焦れに焦れ、呼吸は荒くなり、香しい唇から洩れる甘い声が、${you.name} の手が禁域へ進むにつれてさらに急になった。勝負の結果など、もうどうでもよくなっていた……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '最後のキーワード';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} jordan トウカイジョーダン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, flash, jordan, you, callname) => {
      await flash.say_and_wait('まことに……残念です。');
      await jordan.say_and_wait('くそ、今日こそ勝てると思ってたのに……！');
      await gs.say_and_wait(
        'ありがとうな。アタシの火山噴火ハートも、いちばん熱い温度まで上がったぜ！',
      );
      await flash.say_and_wait(`おめでとうございます、${gs.name} さん。`);
      await flash.say_and_wait('今回が、あなたとの最後の対決になりますね。');
      await flash.say_and_wait('どうぞ、お受け取りください。');
      era.println();
      await era.printAndWait(
        `${flash.name} が取り出した紙切れ、それがエデンへ通じる最後の手がかりだ！`,
      );
      era.println();
      await gs.say_and_wait('これは……！！');
      await flash.say_and_wait(
        'これが、あなたが追い求めたエデン……でしょうか。よくは分かりませんが、どうか頑張ってください。',
      );
      await gs.say_and_wait('ありがとな！');
      era.println();
      await era.printAndWait(
        `${flash.name}、${jordan.name}。ゴルシの生涯における宿敵たちの姿が、人ごみの中で遠ざかっていく……`,
      );
      era.println();
      await gs.say_and_wait(`${callname}、これが……！`);
      era.println();

      era.printButton('「これが最後だ！」', 1);
      await era.input();

      await era.printAndWait('さあ、最後の手がかりを明かそう！');
    };
    f.title = title;
    return f;
  })(),
  ws_eden: (() => {
    const title = 'エデンへの道';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} taste 秋川やよい / ホクホク味
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, taste, you, callname) => {
      await era.printAndWait(
        `晩冬の風が骨まで凍みる。午の刻、真相が道を現す……${you.name} とゴールドシップは四枚の手がかりを携え、最終地点へ向かった。`,
      );
      era.println();
      await gs.say_and_wait(
        '運命の邂逅の前に、右手まで漆黒の影に呪われて痛む……',
      );
      era.println();

      era.printButton('「だが避けられねえ運命だ。進め！」', 1);
      await era.input();

      await gs.say_and_wait(
        '当たり前だ、神でもアタシをあの場所から止められねえ！',
      );
      await gs.say_and_wait(
        `準備はいいか、${callname}？ あそこが俺たちのゴールだ！`,
      );
      era.println();

      era.printButton('「ふん、心配するな！ 行くぞ！」', 1);
      await era.input();

      await era.printAndWait(`薄暗い。それがこの場所への第一印象だった。`);
      await era.printAndWait(`冷たい。それがこの場所からの第一撃だった。`);
      era.println();
      await era.printAndWait(
        `ほとんど五指を見通せない洞窟の中、一点の光だけが二人を導いて先へ進ませる。`,
      );
      era.println();
      await era.printAndWait(
        '傍らの奇妙な生き物たちは二人を気にもせず、のんびりと過ごしている。',
      );
      era.println();
      await gs.say_and_wait('ここが……紙に書いてあった場所だ。');
      await gs.say_and_wait('『スイ』、『ゾ』、『ク』。');
      era.println();

      era.printButton('「最後は『カン』だ！」', 1);
      await era.input();

      await gs.say_and_wait(
        '答えはもう見え見えだ……『スイゾクカン』、つまり水族館だ！',
      );
      await gs.say_and_wait('まさか、エデンがこんなところにあるとは……');
      era.println();
      await era.printAndWait(
        'そのとき、一つの影が傍らから現れた！ 小さな影は拍手しながら、高い笑い声を上げている。',
      );
      era.println();
      await taste.say_and_wait(
        '素晴らしい！ 『エデン計画』を突破してここまで！',
      );
      await taste.say_and_wait(
        '感動！ トレーナーの支えも、決して欠かせません！',
      );
      await gs.say_and_wait(
        'てめえ、トレセンのゴッドファーザー！？ なんでここに！',
      );
      await gs.say_and_wait(`${callname}！ まさか分かってたのか！？`);
      era.println();

      era.printButton(
        '「三条目の時点で見当はついてた。場所も、裏の黒幕も。」',
        1,
      );
      await era.input();

      await gs.say_and_wait('は！？ なら言えよ！');
      await taste.say_and_wait('面白い！ それではつまらない！');
      await taste.say_and_wait('説明！ いわゆる『エデン計画』とは……！');
      era.println();
      await era.printAndWait(
        `もともと「エデン計画」は、情熱的だがしばしば心が他所へ飛ぶ ${gs.name} が、トゥインクルシリーズに集中して挑めるよう立てられた計画だった。`,
      );
      era.println();
      await era.printAndWait(
        '「エデン計画」では、さまざまな手がかりと秘伝の書でゴールドシップの好奇心を煽り、計画の目標へ導く。',
      );
      era.println();
      await era.printAndWait(
        `${taste.name} にとって、「エデン」とはウマ娘の生涯で最も大切な、トゥインクルシリーズそのものだった。`,
      );
      era.println();
      await taste.say_and_wait('以上です！');
      await gs.say_and_wait(
        'なるほど！ じゃあ夢に出てきた声も、てめえらがやったのか？',
      );
      await taste.say_and_wait('え？');
      await gs.say_and_wait('え？');
      era.println();

      era.printButton('「え？」', 1);
      await era.input();

      await taste.say_and_wait(
        '驚愕！ 生徒に紙切れと秘伝の書を用意してもらった以外、隠された禁断技術は使っていないはず！',
      );
      await taste.say_and_wait('あ、これは言ってはいけない。忘れてください。');
      await gs.say_and_wait(
        'まさか、本当にゴルシの体内に第二人格が生まれた！？',
      );
      era.println();

      era.printButton('「あんなものは一つで十分だ！」', 1);
      await era.input();

      await era.printAndWait(
        `こうして、三年の旅は笑いとふざけと、わけの分からなさの中で一段落した。`,
      );

      era.drawLine();
      await era.printAndWait(
        `夜、${you.name} と ${gs.name} は海辺の砂に横たわり、塩辛い潮風が顔を撫でる感触を味わっていた。`,
      );
      era.println();

      era.printButton('「……ありがとう、ゴールドシップ。」', 1);
      await era.input();

      await gs.say_and_wait('ん？ 急だな……あ、もう寝てる？');
      await gs.say_and_wait('まったく、頼れるようで頼れねえやつ。');
      await gs.say_and_wait(
        'この三年、アタシに散々振り回されたくせに、辞表ひとつ出さなかった。',
      );
      await gs.say_and_wait(
        'ときどきは真面目で、ときどきはアタシと一緒に馬鹿をやる。やりすぎたんじゃねえかって思うこともあるのに、てめえはわざわざ大人の顔して止めたりしなかった。',
      );
      await gs.say_and_wait(
        '知ってるか？ 理事長は『エデン』がトゥインクルシリーズだって言った。',
      );
      await gs.say_and_wait(
        'でもアタシの『エデン』は、トレセンでもトゥインクルシリーズでもねえ……',
      );
      await gs.say_and_wait('……');
      await gs.say_and_wait('ちゅ♡');
      era.println();

      if (era.get('love:7') >= 50) {
        era.printButton('「目を開ける。」', 1);
      }
      era.printButton('「寝たフリをする。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('うおっ、起きてた！？');
        await gs.say_and_wait(
          'いや、最初から寝てなかったのか！ シャア、ハメたな！',
        );
      } else {
        await gs.say_and_wait('これからも、逃がさねえからな❤️');
        era.println();
        await era.printAndWait(
          `どうやら ${you.name} がゴルシに使われる生活は、まだまだ長く続きそうだ……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  async ws_eden_sex_end(gs, you) {
    await gs.say_and_wait('はぁ……はぁ……騙しやがって……');
    await gs.say_and_wait('……てめぇ……くそ……');
    era.println();

    era.printButton('「ふふん、いじめられた気分はどうだ？」', 1);
    await era.input();

    await gs.say_and_wait('てめぇ……一つ、勘定が足りねえ……');
    await gs.say_and_wait('トレーナーは、ウマ娘には敵わねえ！');
    era.println();

    era.printButton('「なに！」', 1);
    await era.input();

    await gs.say_and_wait('これからも、逃がさねえからな♡');
    era.println();
    await era.printAndWait(
      `どうやら ${you.name} がゴルシに顔を騎乗される生活は、まだまだ長く続きそうだ……`,
    );
  },
  hoverboard: (() => {
    const title = 'ゴルシ号、爆誕！';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        '「ブンブンブン——ブンブンブン——」という騒音が近づいてくる。蚊の羽音ではない。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は、セグウェイが目の前を走り抜け、その上に見慣れた影が立っているのを見た。',
      ]);
      era.println();
      await gs.say_and_wait(
        '最高速度時速25キロ、出力250ワット！ これがゴルシ号だ！',
      );
      era.println();
      await era.printAndWait(
        'セグウェイはドリフトで止まり、車上の麗しい影が一躍して降り立つ。',
      );
      await era.printAndWait([
        gs.get_colored_name(),
        ' は得意げに ',
        you.get_colored_name(),
        ' へ親指を立てた。',
      ]);
      era.println();
      era.printButton('「ゴ、ゴルシ号？」', 1);
      await era.input();
      await gs.say_and_wait('まさにゴルシ号、それである！');
      await era.printAndWait([
        gs.sex,
        ' は軽くゴルシ号のハンドルを叩き、誇らしげに ',
        you.get_colored_name(),
        ' へ愛車の全貌を見せた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が寄って眺めると、形はちゃんとしている。上銀下黒、スポークは普通のセグウェイより一回り大きい。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' はセグウェイに詳しくなく、特注かどうかは判断できない。',
      ]);
      await era.printAndWait([
        'ただこのセグウェイは',
        gs.sex,
        '本人と同じで、金色の部分がほとんど見えない。',
      ]);
      era.println();
      era.printButton('「で、どこがゴールドなんだ？」', 1);
      await era.input();
      await gs.say_and_wait('値段。');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は金という字を聞いた瞬間、眉が直立した。',
      ]);
      era.println();
      era.printButton('「高くないよな？」', 1);
      await era.input();

      await era.printAndWait('プロの選手は金遣いが荒い、とよく聞く。');
      await era.printAndWait(
        '若い選手の多くは収入を得た途端、流行と豪華に身を包み、',
      );
      await era.printAndWait('不調が来たときには保障の資金すら残っていない。');
      await era.printAndWait('トレーナーとして、ちゃんと監督せねばならない。');
      era.println();
      await era.printAndWait('だが、その心配は余計だった。');
      era.println();
      await gs.say_and_wait(
        'ゴルシが手ずから改造したゴルシ号は値の付けようがねえ、そりゃ高い！',
      );
      era.println();
      await gs.say_and_wait(
        'だって中から外まで、めちゃくちゃ手間かけて直した愛車だぜ！',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は少し驚いた。ゴールドシップの思考の跳び方は、やはり凄まじい。',
      ]);
      era.println();
      era.printButton('「……俺が壊したらどうする？」', 1);
      await era.input();
      await gs.say_and_wait(
        '安心しろ！ ゴルシ号の売りは頑丈さだ！ ぶつけても壊れねえ！',
      );
      era.println();
      await era.printAndWait([
        'この知識は無数の実践から得たものらしい。ゴルシ号が中から外まで',
        gs.sex,
        'に改装された理由も、それで説明がつく。',
      ]);
      await era.printAndWait([
        'このあと、危険から遠ざける大切さをちゃんと教えねばならない。だが……',
      ]);
      await era.printAndWait([
        gs.get_colored_name(),
        ' が熱意満々で、今にも ',
        you.get_colored_name(),
        ' をゴルシ号に縛りつけて走り出しかねない様子を見て、',
        you.get_colored_name(),
        ' は',
        gs.sex,
        'の好意をありがたく受けることにした。',
      ]);
      era.println();
      await era.printAndWait('【ゴルシ号】の借用証を手に入れた！');
    };
    f.title = title;
    return f;
  })(),
  sa_heroine_red: (() => {
    const title = '主役の赤！';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(`ある日、${you.name} が中庭を歩いていると——`);
      await era.printAndWait(`勝負服を着た ${gs.name} がいた。`);
      era.println();

      await gs.say_and_wait(
        `あ、${you.actual_name} じゃねえか。今日も元気に鰓呼吸しろよ。`,
      );
      era.printButton('「……それより、なんで勝負服なんだ？」', 1);
      await era.input();
      await gs.say_and_wait('これは赤い主役の力を得るためだ。');
      await gs.say_and_wait(
        'その顔は何だ？ よく考えろ、子供のころ見た戦隊ヒーローも熱血漫画の主役も、みんな赤だろ？',
      );
      await gs.say_and_wait('赤を着てるやつが主役で、最後は必ず勝つんだ！');
      era.println();

      await era.printAndWait(
        `少しズレてはいるが、${gs.name} の言うことは間違っていない……この機会に、少し教えておくか？`,
      );
      era.printButton('「世の中には、いろんな赤がある。」（賢さ+20）', 1);
      era.printButton('「自分の信念を貫け！」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('色っぽい赤も、悪役の赤もあるって！？');
        await gs.say_and_wait('そっか、赤の力を甘く見てたな……');
        await gs.say_and_wait(
          'アタシは最初から、主役も悪役もこなせる力を得てたんだ！',
        );
        await gs.say_and_wait('しかも……色っぽさつきで魅力は無敵だぜ❤️');
        era.println();

        await era.printAndWait(
          `${gs.name} は妖艶な視線を残し、興奮して去っていった。`,
        );
      } else {
        await gs.say_and_wait(
          `その通りだ！ ${gs.sex_code !== 1 ? 'アタシ' : 'オレ'}、参上！`,
        );
        era.println();

        await era.printAndWait(`${gs.name} は元気よく去っていった。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_golden_ship_date: (() => {
    const title = 'ゴルシ流デート';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ゴールドシップのプレイヤーへの呼び方
     */
    const f = async (gs, you, callname) => {
      await era.printAndWait(
        `ある日、${you.name} と ${gs.name} は校門の近くで偶然鉢合わせした——`,
      );
      era.println();

      await gs.say_and_wait('がっ！ 腹立つ！');
      await gs.say_and_wait(
        `${callname}、ジョーダンのやつ、アタシがデート分かってねえとか言いやがったあああ！`,
      );
      await gs.say_and_wait(
        `どうせ暇だろ！？ いまから${
          gs.sex_code - 1 ? 'アタシ' : 'オレ'
        }とデートだ！`,
      );
      era.println();

      await era.printAndWait(
        `結局、${gs.sex}に無理矢理繁華街へ引きずり出された……`,
      );
      await era.printAndWait(
        '一日ふざけたあと、二人は帰路の公園で少し休んでいた。',
      );
      era.println();

      await gs.say_and_wait('ふぅ～アタシも少し疲れた。このあと何する？');
      era.printButton('「飲み物、買ってくる。」（スタミナ+20）', 1);
      era.printButton('「延長戦！ 勝つまでやる！」（パワー+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} は ${gs.sex} に飲み物を買い、二人はゆっくり寮へ歩いて戻った。`,
        );
      } else {
        await era.printAndWait(
          `${you.name} と ${gs.name} の奇妙なゲームは、まだ続く……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_sudden_look_back: (() => {
    const title = 'ゴルシの突然昔語り編！';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait(
        `腹が減った。食堂のラーメンが評判らしい。${you.name} はトレセン食堂へ向かい、腹の虫を鎮めることにした。`,
      );
      era.println();

      await era.printAndWait(
        `途中、${you.name} は遠くから中庭に座るゴールドシップを認めた。陽の光が揺れる枝葉の間から、黙った美人の上へ降り、きらめいている。`,
      );
      era.println();

      await gs.say_and_wait(`あ、${you.actual_name} か。`);
      era.println();

      era.printButton('ここで何してるんだ？ 飯は食わないのか？', 1);
      await era.input();

      await gs.say_and_wait('どう言えばいいか、昔を思い出してた。');
      await gs.say_and_wait(
        'ずっと前の吹雪の夜、幼いアタシは家のネジ工場の足しに、一人で街で金属バットを売っててな……',
      );
      era.println();

      era.printButton('ネジを打てよ。', 1);
      await era.input();

      await gs.say_and_wait(
        '途中で骨まで凍る風にやられて、もう人の形じゃなくなって、寒さで泣いちまった。',
      );
      await gs.say_and_wait(
        `それから……アタシの運命を変えた${gs.uma_sex_title}が現れた。`,
      );
      await gs.say_and_wait(
        `${gs.sex}はアタシの前に来て、温かいラーメンスープの雑炊を差し出した。`,
      );
      era.println();

      era.printButton('いま何の話をしてるか、自分で聞いてみろよ。', 1);
      await era.input();

      await gs.say_and_wait(
        `${
          gs.sex
        }はこう言った。『私も${gs.uma_sex_title}だけど走るのは苦手で、いまはラーメン屋をやってる。あなたも、人生の目標は自由に選んでいいのよ』ってな。`,
      );
      await gs.say_and_wait(
        `その${gs.uma_sex_title}の言葉で気づいた。アタシは実家のネジ工場を継がなくていいんだ、って！`,
      );
      era.println();

      await era.printAndWait(
        '他人に左右されず、自分の道を歩く……それは、いかにもゴールドシップだ。',
      );
      era.println();

      era.printButton(
        '「当時のスープを再現してみるか？」（スタミナ＆賢さ+10）',
        1,
      );
      era.printButton('「当時の場所を見に行こうか？」（スピード+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await gs.say_and_wait('スープの再現……アタシにできるか？');
        await gs.say_and_wait(
          '……ふん、鍛え上げたアタシにできねえわけがねえ。ニンニクを山ほど入れた味、覚えてる！',
        );
        await gs.say_and_wait(`ついてこい！`);
        era.println();

        await era.printAndWait(
          `${you.name} はゴールドシップに食堂の厨房へ連れて行かれ、衆人環視の中で一角を占領し、ラーメンスープの研究を始めた。`,
        );
        era.println();

        await gs.say_and_wait(
          'よし！ 完成だ！ ニンニクだらけのラーメン！ 一緒に味見しようぜ！',
        );
        era.println();

        era.printButton('「辛すぎる————！！ ニンニク入れすぎで食えねえ！」', 1);
        await era.input();

        await era.printAndWait(
          `${you.name} とゴールドシップはあとで反省し、あの日あれほど濃い雑炊を飲み込めたのは、極寒という極端な事例だったと結論した。`,
        );
      } else {
        await gs.say_and_wait('当時の場所……そうだ！ 堤防のそばだ！');
        await gs.say_and_wait(
          '何も変わってなきゃ、あのラーメン屋台はまだあるはずだ！',
        );
        era.println();

        await era.printAndWait(
          `${you.name} はゴールドシップに堤防へ連れて行かれ、謎のラーメン屋台を探したが、夜まで一粒も得られなかった……`,
        );
      }
      era.println();

      await era.printAndWait(
        `その後のある日、${you.name} はトレーナー室に夜まで残っていた。ゴールドシップのトレーナーとして、${gs.sex}のファンレターを管理するのも自分の務めだ。${you.name} は機械的にその一通を開き、意味深な文面を目にした……`,
      );
      era.println();

      await era.printAndWait(
        '？？？「どうやら、あなたは本当に自由に自分の道を選んでいるようね。私も、ずっと見守っているわ。」',
      );
      era.println();

      era.printButton('この手紙は、ゴルシに見せておこう……', 1);
      await era.input();

      await era.printAndWait(
        `手紙にはその文だけがあり、上書きも下書きもない。だが ${you.name} は、ゴールドシップの、ニンニクだらけの冬の物語を思わず思い出していた。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sr_shoubu: (() => {
    const title = '本気で勝負だ！';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} festa ナカヤマフェスタ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_49 ゴールドシップのナカヤマフェスタへの呼び方
     * @param {boolean} success 対決が成功したか
     */
    const f = async (gs, festa, you, call_49, success) => {
      const ret = [];
      await era.printAndWait(
        `${you.name} と ${gs.name} は屋上で小休止を楽しんでいた……本来なら波もなく過ぎる時間だった——だが ${you.name} は ${festa.name} を見た。`,
      );
      era.println();

      await festa.say_and_wait('……よう、今日もご機嫌だな。');
      await gs.say_and_wait([call_49, '……！！']);
      era.println();

      await era.printAndWait(
        `刹那！ 血が凍った！ ${festa.name} から漂う博徒の気迫に、あの ${gs.name} すら圧倒されてるァ……！！`,
      );
      era.println();

      await festa.say_and_wait(
        'ふんふん……そんな顔するなよ。そうされると、今すぐ勝負したくなる。',
      );
      await gs.say_and_wait('勝負……！？');

      era.printButton('「フェスタ、何を……！」', 1);
      await era.input();

      await festa.say_and_wait('もちろん……');
      era.println();
      era.printButton(`${festa.name}「限定じゃんけん……！」`, 1);
      era.printButton(`${festa.name}「エンペラー……！」`, 2);
      era.printButton(`${festa.name}「……えっち❤️」`, 3, {
        disabled:
          era.get('cflag:49:招募状态') !== recruit_flags.yes ||
          era.get('love:49') < 50,
      });
      ret.push(await era.input());
      if (ret[0] === 3) {
        await era.printAndWait(
          `${you.name} とゴールドシップは、突然の行為の誘いにはたと固まった。だがナカヤマフェスタの目の欲の炎は、もう待ちきれないと語っていた……`,
        );
        era.println();
        await festa.say_and_wait(
          'なあ、想像しただけで下、濡れてる……早く勝負しようぜ❤️❤️❤️',
        );
      } else {
        if (ret[0] === 1) {
          await era.printAndWait(
            '限定じゃんけん……！！ カードでじゃんけんし、相手の命を奪う恐ろしいゲーム……一歩間違えれば深淵へ落ちる！！',
          );
        } else {
          await era.printAndWait(
            'エンペラー……！！ カードの大小で生死を決める恐ろしいゲーム……一歩間違えれば深淵へ落ちる！！',
          );
        }
        era.println();
        await era.printAndWait(
          `まずい……${
            gs.couple_title
          }の性格じゃ、片付くころには昼飯が冷めてる！ どうする、止めるべきか……！？`,
        );
        era.printButton('「いや、俺が代わりに立つ！」（体力+100）', 1);
        era.printButton(
          '「頑張れ……！」（【非根幹距離○】習得、スキルPt+60 または スキルPt+15）',
          2,
        );
        ret.push(await era.input());
        if (ret[1] === 1) {
          await festa.say_and_wait(
            'は？ けっこう肝が据わってるじゃねえか……面白え！',
          );
          await festa.say_and_wait('よし！ 今日は付き合ってやる！');
          await gs.say_and_wait('おいおいマジかよ！？ アタシだけ外された！？');
          era.println();

          await era.printAndWait(
            `${you.name} はありったけを出し、どうにか絶体絶命を生き抜いた……`,
          );
          await era.printAndWait('だが昼休みは、気づかぬうちに過ぎていた！');
        } else if (success) {
          await era.printAndWait(
            `${gs.name} はありったけを出し、どうにか絶体絶命を生き抜いた……`,
          );
          await era.printAndWait('だが昼休みは、気づかぬうちに過ぎていた！');
        } else {
          await era.printAndWait(
            `${gs.name} はありったけを出したが、${festa.name} には勝てなかった……`,
          );
          await era.printAndWait('しかも昼休みは、気づかぬうちに過ぎていた！');
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  crazy_fan_end: (() => {
    const title = 'ファンの襲撃';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait('土砂降りの雨、長く鳴るサイレン。');
      await era.printAndWait([
        '果てしないように見える通りは好奇の通行人で満ち、',
        you.get_colored_name(),
        ' は担架に押さえられ、絶望を書いた両目を見開いたまま、',
        gs.sex,
        'がパトカーへ乗るのを見送った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は刺された劇痛をこらえ、声を振り絞って「これは',
        gs.sex,
        'のせいじゃない！」と叫ぶ。',
      ]);
      era.println();
      await era.printAndWait([
        gs.get_colored_name(),
        ' が血に全身を染めた姿は、まるで',
        gs.sex,
        'が誇りにしている勝負服を着ているようだった。',
      ]);
      era.println();
      await era.printAndWait('こうなるべきではなかった。');
      await era.printAndWait([
        'トレーナーの失敗を、',
        gs.uma_sex_title,
        'が背負うべきではない。',
      ]);
      await era.printAndWait([
        gs.uma_sex_title,
        'の常人離れした肉体は、こういう場所で使うものではない。',
        gs.couple_title,
        'はコースの上で、楽しく競い合えばよかった。',
      ]);
      await era.printAndWait([
        'たとえば ',
        gs.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' のために自制を失い、',
        you.get_colored_name(),
        ' を刺そうとした狂人を殴りつけて、路上に一条の、あまりにも美しい赤い絨毯を作るようなことは、あってはならなかった。',
      ]);
      era.println();
      await era.printAndWait('いったい……どこで、間違えたのか……');
      era.println();
      await era.printAndWait([
        '怒ったファンの報復を受け、',
        you.get_colored_name(),
        ' は結末を迎えた……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
