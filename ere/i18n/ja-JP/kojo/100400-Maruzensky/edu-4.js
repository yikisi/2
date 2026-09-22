/**
 * @file マルゼンスキー - 育成
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} train トレーニングの基礎能力（すでに i18n 済み）
   */
  get_ts_content(maru, train) {
    era.print([
      maru.get_colored_name(),
      ' の ',
      train,
      ' トレーニングが無事に終わった',
    ]);
  },
  ts_add: (() => {
    const title = '追加の自主トレ';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name}のトレーニングが終わったあと。`);
      await maru.say_and_wait(`ハロー？${callname}、あとで空いてる？`);
      await maru.say_and_wait('この天気で走るの、きっと楽しいわよね？');
      await maru.say_and_wait(
        '跳ねる水しぶき、雨にかすむ視界……こういうときは、一味違う風が感じられる気がするの。',
      );
      await maru.say_and_wait(
        '今日、すごくやる気よく走れたでしょ！ このまま練習を終わるのはもったいないわ♪',
      );
      await maru.say_and_wait(`雨の中を走るのも、悪くないわよ♪`);
      await maru.say_and_wait(
        `このくらいの雨、朝のシャワーと同じくらいでしょ。`,
      );
      await maru.say_and_wait('でも今は夕方のシャワー、かな……？');
      await maru.say_and_wait('私の体、まだ熱いままよ。');
      await maru.say_and_wait(`今こそ私の出番かも？ ${callname} はどう思う？`);
      era.printButton('「わかった、走ろう。」', 1);
      era.printButton('「今は走らないほうがいいかも！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `そうこなくっちゃ！ 今日は一晩中走るわよ。ふふ、空も喜んでるみたい。`,
        );
        await maru.say_and_wait(`じゃあ出発よ。風の世界へ。`);
        await era.printAndWait(
          'こうして追加トレーニングは、雨の中で続き続けた。',
        );
      } else {
        await maru.say_and_wait('あら、残念。');
        await maru.say_and_wait('せっかくの機会なのに……！');
        await maru.say_and_wait('でも仕方ないわね。体力の温存も大事だもの……！');
        await maru.say_and_wait('それにトレーナーを風邪させたら、困るわ。');
        await maru.say_and_wait(
          '値切り交渉もよくないけど、雨の中をドライブに付き合って。二人きりよ♪',
        );
        era.println();
        await era.printAndWait(
          `雨のドライブで二人とも疲れたけれど、${maru.name} はとても楽しそうだった。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '体を大事に';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`うーん、足首を捻ったみたい`);
      await era.printAndWait(
        `${maru.name}は先のトレーニングで足首を捻ってしまった`,
      );
      await maru.say_and_wait(`大丈夫よ♪ このくらいならすぐ治るわ。`);
      era.println();
      era.printButton('「小さな傷でもちゃんと休むこと！」', 1);
      era.printButton('「これぞ青春だ、トレーニングに戻ろう！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `Ok♪ ${callname}がこんなに気にかけてくれるなんて、実は私のこと、気になってる？`,
        );
        await maru.say_and_wait(
          `でも怪我なんて、${
            maru.elder_sibling_sex_title
          }らしくないわね。これじゃテイオー${maru.couple_title}に……`,
        );
        era.printButton('「そんなことない！」', 1);
        await era.input();
        await maru.say_and_wait(
          `うん……そのとおり。${
            maru.elder_sibling_sex_title
          }、しっかり反省したわ。ちゃんと休んだら、もう一度${
            maru.elder_sibling_sex_title
          }らしいところを見せる！`,
        );
        await era.printAndWait(`${maru.name}は素直に保健室で休んだ`);
      } else if (fail_again) {
        await maru.say_and_wait(`あら、${callname}はお上手ね♪`);
        await maru.say_and_wait('もっと褒めてくれてもいいのよ。');
        era.printButton(
          `「${
            maru.name
          }、美しくて強い${maru.uma_sex_title}、紅い炎みたいにクールで派手な${
            maru.elder_sibling_sex_title
          }さま！」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(
          'あら、そう言われると照れるわ♪ じゃあ休みも十分、トレーニングに戻りましょう！',
        );
        era.printButton('「その意気だ！」', 1);
        await era.input();
        await maru.say_and_wait('痛い！');
        await era.printAndWait(
          'トレーニング中に傷が悪化し、また病室で休むことになった。',
        );
      } else {
        await maru.say_and_wait('いち、に、さん、し、余裕余裕♪');
        await maru.say_and_wait('ご、ろく、なな、はち、全然大丈夫♪');
        await maru.say_and_wait(`${you.name}、私の跳び、どう？`);

        era.printButton('「……まぶしい！」', 1);
        await era.input();
        await maru.say_and_wait(
          'ふふ♪ このまま後輩たちに、クールで派手なところを見せましょう！',
        );

        era.printButton(`「${maru.name}、${maru.name}！」`, 1);
        await era.input();
        await era.printAndWait(
          `奇跡のように${maru.name}は調子を取り戻し、またトレーニングに戻った。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '無理は厳禁';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張るを選んだ場合に再失敗するか
     */
    const f = async (maru, you, callname, fail_again) => {
      await maru.say_and_wait(`ん、痛い`);
      await era.printAndWait(
        `${maru.name}は先のトレーニングで足首を捻ってしまった`,
      );
      await maru.say_and_wait(`私でも、もう限界よ`);
      await maru.say_and_wait(
        'でも、次のレースも近いし……早く元気にならないと！',
      );
      era.println();

      era.printButton('「焦らないで、ゆっくり治そう。」', 1);
      era.printButton('「時には強い薬も必要だ！」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`そう？ ちょっと休めば戻ると思ってたけど！`);
        era.printButton('「傷が悪化したら大変だ。」', 1);
        await era.input();
        await maru.say_and_wait(
          '……わかった。治すと決めたなら、完治を目指さないと！',
        );
        await maru.say_and_wait(
          'じゃあ、元気を出すためにジェラートを買いに行きましょう。',
        );
        era.printButton('「ああ、脚をまた怪我しないように。」', 1);
        await era.input();
        await maru.say_and_wait(
          `あら、${callname}は優しいのね。${
            maru.elder_sibling_sex_title
          }じゃなくて後輩たちだったら、一瞬で落とされちゃうわよ～`,
        );

        era.printButton(`「${maru.name}、また冗談を。」`, 1);
        await era.input();
        await maru.say_and_wait('ふんふん♪');
        await era.printAndWait(
          `${maru.name}がしっかり治るまで、トレーニングは一旦お休みにした`,
        );
      } else {
        await era.printAndWait(
          `レースが近づいているのに、${maru.name} はかなり重い傷を負った。早く治すなら、奇策に出るしかない`,
        );
        await era.printAndWait(
          `${you.name} は考えに考え、強い薬を打つことにした`,
        );
        era.printButton(
          '「気分がよければ傷も早く治る。意志の力で乗り切ろう！」',
          1,
        );
        await era.input();
        await maru.say_and_wait(
          '私の考えと同じね。気分転換するなら、都心でいちばんの流行を追いかけましょう',
        );
        if (fail_again) {
          await era.printAndWait(
            `こうして ${you.name} はファッション誌で今季の最先端を確かめたあと、${maru.name}を連れて百貨店へ行った。`,
          );
          await era.printAndWait(
            `平日でも人出はかなり多く、${you.name}は誰かが${maru.name}の怪我した脚にぶつからないよう、気を配った。`,
          );
          await era.printAndWait(`二人は館内で目が回りそうになった。`);
          await maru.say_and_wait(
            `え？ 今の流行、聞いたこともないわ。${
              maru.elder_sibling_sex_title
            }、アウトなのかしら？`,
          );
          era.printButton(
            `「最先端に打ちのめされた${maru.name}の気分は落ち、回復の効果も大きく下がった」`,
            1,
          );
          await era.input();
        } else {
          await era.printAndWait(
            `${you.name} は ${maru.name} の案内で愛車をあちこちに走らせ、年代を感じるCDショップに着いた。`,
          );
          await maru.say_and_wait(
            '見た目は地味だけど、中の音楽はなかなか流行ってるのよ♪',
          );
          await era.printAndWait(
            `${you.name}は適当に一枚CDを手に取った。高校のころ繰り返し聴いた曲かどうか、はっきりしない。`,
          );
          await maru.say_and_wait(
            'ふふ～、やっぱりいい曲♪ 踊りたくなっちゃう。',
          );
          era.printButton(
            `（${maru.sex}が喜んでくれるなら、それでいいか？）`,
            1,
          );
          await era.input();
          await era.printAndWait(
            `音楽のおかげか、${maru.name} の傷も早く治っていった。`,
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = 'レース開始';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`地下通路`);
      await maru.say_and_wait(
        `今日のレースも、後輩たちに私のクールな背中を見せなきゃ`,
      );
      era.printButton(`「${maru.name}、頑張れ」`, 1);
      await era.input();
      await maru.say_and_wait(`ふふ、ありがとう ${callname}`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}の背中に惚れちゃだめよ～`,
      );
      await era.printAndWait(
        `${you.name} は${maru.name}がコースへ向かうのを見送った`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'レース勝利';
    /** @param {CharaTalk} maru マルゼンスキー */
    const f = async (maru) => {
      await maru.say_and_wait(
        `victory!victory！勝ったわよ、トレーナー♪ 1着は違うものね、心の興奮が全然止まらない`,
      );
      await maru.say_and_wait(`トレーナー、私の走る姿、見てくれた？`);
      era.printButton(`「君がいちばんすごい！」`, 1);
      era.printButton(`「まだまだ上を目指せるぞ！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `でしょでしょ♪ 今日は喫茶店でレモンティーとティラミスにしましょう。`,
        );
        await maru.say_and_wait(`トレーナーも一緒に来るわよね？ ふふ♪`);
      } else {
        await maru.say_and_wait(`あら、トレーナーはストレートね！`);
        await maru.say_and_wait(`でも、これで満足してちゃだめ！`);
        await era.printAndWait(
          ` ${maru.name} は ${maru.sex} の大好きなナタデココドリンクを一気に飲み干した！`,
        );
        await maru.say_and_wait(
          `——ぷはっ！ 涼しい！ よし、この先もやる気満々で頑張るわ！`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'レース入着';
    /** @param {CharaTalk} maru マルゼンスキー */
    const f = async (maru) => {
      await maru.say_and_wait(
        `見に来てくれた後輩たちのために1着を取りたかったけど、まだ実力が足りないわ……`,
      );
      era.printButton(`「走りは悪くなかった！」`, 1);
      era.printButton(`「次は1着だ！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `ふふ、トレーナーは慰めてくれてるのね。ありがとう。`,
        );
        await maru.say_and_wait(
          `でも……あら、トレーナーに心配までかけちゃって、${maru.elder_sibling_sex_title} ったらだめね。`,
        );
        await maru.say_and_wait(
          'よし、次はみんなにスーパーカーの走りを見せて、きっぱり1着を取る！',
        );
      } else {
        await maru.say_and_wait('そうね、いつまでもため息じゃ私らしくない。');
        await maru.say_and_wait(
          `次は後輩たちに、${maru.elder_sibling_sex_title} が本気を出したところを見せなきゃ！`,
        );
        await maru.say_and_wait('愛車と一緒に海へドライブしましょう♪');
        await era.printAndWait(
          `そのあと ${maru.name} と海へドライブに行き、${maru.sex} が満足するまで帰らなかった。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = 'レース敗北';
    /** @param {CharaTalk} maru マルゼンスキー */
    const f = async (maru) => {
      await maru.say_and_wait('悲しい……');
      await maru.say_and_wait(
        `ごめんね……トレーナー。クールなところ、見せられなかった……`,
      );
      era.printButton(`「次の走りに期待してる！」`, 1);
      era.printButton(`「うつむいてても仕方ない！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`……優しいのね、トレーナー。`);
        await maru.say_and_wait(
          `……よし、早くトレーニングに戻らないと！ 次は必ず、クールなところを見せる！`,
        );
      } else {
        await maru.say_and_wait('……そうね。うつむいてても速くは走れない。');
        await maru.say_and_wait(
          'だからこれ以上落ち込めない。凹んでもすぐ直せる愛車みたいに！',
        );
        await maru.say_and_wait(
          'よし！ 修理はここまで。早く満タンにして突っ走る！',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = '序章・マルゼンスキー登場';
    // マルゼンスキー登場から風数値は1。最終結末と風数値 例：TE=20 GE=17-19 それ以外はNE
    // 競争は大きな消耗を生む。それでも、あそこの景色を見たくはないか？
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`芝の上`);
      await maru.say_and_wait(
        `${callname}、このあとどこか一緒にぶらつかない？`,
      );
      await era.printAndWait(
        `${you.name} の隣に座った${maru.uma_sex_title}が声をかけてきた。`,
      );
      era.printButton(
        '「悪い、トレーニング室に戻って資料を整理しないと。」',
        1,
      );
      await era.input();
      await era.printAndWait(`空は夕日に金色に染まっていた。`);
      await maru.say_and_wait(
        `私の負けね。${callname} がそんなに頑張ってるなら、${maru.elder_sibling_sex_title}ももう一周走りたくなるわ♪`,
      );
      await era.printAndWait(
        `${you.name} のすぐ隣に座っていた ${maru.uma_sex_title} は水分を補って立ち上がった。残陽に照らされた波打つ長い髪は、燃える炎のようだ。`,
      );
      await you.say_and_wait(`走りすぎないように。`);
      await maru.say_and_wait(`わかったわ♪`);
      await era.printAndWait(
        `${you.name} の許可を得た ${maru.sex} は、またスタート地点へ戻った。`,
      );
      await era.printAndWait(`号砲が鳴り、炎が芝の上でもう一度燃え上がった。`);
      await era.printAndWait(
        `炎の主も、走るときに吹き付ける強い風に、心からの笑顔を見せている。`,
      );
      era.drawLine();
      await era.printAndWait(
        `トレーニング室に戻った${you.name}は、最後の陽射しが消える前に、持っていたフォルダを元の場所へ戻した。`,
      );
      await era.printAndWait(
        `${maru.name}の走行データを整理するつもりだった${you.name}は、このとき一通の手紙に目を奪われた。`,
      );
      await you.say_and_wait(`これは何だ？`, true);
      await era.printAndWait(`周囲とそぐわない、青春の匂いがする封筒だ。`);
      await era.printAndWait(
        `郵便番号は空欄、宛先は自分の執務室、宛名にはちゃんと${you.actual_name}と書いてある。ただ最後の差出人が。`,
      );
      await you.say_and_wait(`${maru.name}？`, true);
      await era.printAndWait(`疑問だらけのまま、封筒を開けた。`);
      await maru.say_and_wait(
        `じゃーん！ この手紙を読んでる ${callname}、こうしてるの、クールだと思わない？`,
      );
      await maru.say_and_wait(
        `最初はトレーニング室に戻るころに、いきなりメールするつもりだったんだけど、キーが全然打てなくて焦ったわ><`,
      );
      await maru.say_and_wait(
        `結局手紙で妥協……でも！ ${
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
        }な私、手紙で気持ちを伝えるのも流行り始めてるって気づいちゃった！ やっぱり、${
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
        }な私は、ずっと流行の先頭を走ってるわね♪`,
      );
      await maru.say_and_wait(
        `勢いで書いたのはいいけど、結局何をすればいいのかしら？`,
      );
      await maru.say_and_wait(
        `——うん、漫画の展開で考えるなら、屋上なんてよさそう？`,
      );
      await maru.say_and_wait(
        `だから今夜7時半、屋上で会いましょう！ じゃあ ${callname}、またあとで！`,
      );
      await era.printAndWait(
        `便箋を封筒から出し、広げ、${you.name} はその場に立ったまま読んだ。`,
      );
      await you.say_and_wait(`本当に今どきだな。`, true);
      await you.say_and_wait(
        `これから三年、朝夕を共にする仲間だ。会うときは相手をもっと知らないと。`,
        true,
      );
      era.printButton(`「それに」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `通りすがりの${maru.uma_sex_title}`,
        `え？ マルゼン${maru.sex_code !== 1 ? '先輩' : '先輩'}があんな人を三年の担当に認めるなんて？`,
      );
      await you.say_as_passer_by_and_wait(
        `通りすがりのトレーナー`,
        `そもそも、${you.actual_name}は怪物みたいな${maru.name}に気まぐれで気に入られた幸運児なだけだ。運がいい奴だよ`,
      );
      await you.say_and_wait(`怪物に気まぐれで気に入られた幸運児、か？`);
      await era.printAndWait(
        `言われたとおり、${maru.name}を募集しようとしたトレーナーの中には、生涯で優れた成績を残したベテランも少なくない。`,
      );
      await era.printAndWait(
        `自分と彼らを比べれば、よく見ても経験の差がある。${maru.name}に選ばれたのは、たまたま心の弦に触れただけだ。`,
      );
      await era.printAndWait(`次も、こんなに幸運でいられるのか？`);
      await era.printAndWait(`無理に注意を仕事へ戻した。`);
      await era.printAndWait(`スマホをちらりと見る。ロック画面の時刻は6:05`);
      await you.say_and_wait(`これから、もっと頑張らないと。`);
      await era.printAndWait(
        `封筒を引き出しにしまい、${you.actual_name}はまた仕事へ逃げ込んだ。`,
      );
      era.drawLine();
      await era.printAndWait(`そろそろ出発の時間だ。`);
      await era.printAndWait(
        `トレーニング室から校舎の屋上までおよそ10分。礼儀を考えると、10分ほど早めがちょうどいい。`,
      );
      await era.printAndWait(`このときロック画面の時刻は7時ちょうど。`);
      era.printButton(`「出発！」`, 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `夜の風は昼より優しい。よく感じると、ほのかに甘い匂いが鼻へ入ってくる。`,
      );
      await you.say_and_wait(`明日もいい天気になりそうだ。`);
      await maru.say_and_wait(`ええ、毎日が今日みたいないい天気だといいわね。`);
      await you.say_and_wait(`ああ。え？`);
      await era.printAndWait(
        `相槌を打とうとして、後ろから聞こえた馴染みの声に気づいた。`,
      );
      await era.printAndWait(
        `${maru.sex} と話すために急いで振り返ると、後ろには誰もいなかった。`,
      );
      await maru.say_and_wait(
        `そういうこと？ ${callname}、本当にかわいいのね。`,
      );
      await era.printAndWait(`突然、後ろから抱きしめられた。`);
      await you.say_and_wait(`！！！`);
      await era.printAndWait(`夜は微風に戯れて、より静かだ。`);
      await era.printAndWait(
        `後ろから抱きしめられても、それ以上は近づかず、その場で止まっている。`,
      );
      await maru.say_and_wait(
        `ごめんね、${callname} を見たら、ついこうしちゃった。`,
      );
      await era.printAndWait(
        `後ろから軽く ${you.name} を抱いていた腕が腰から離れた。`,
      );
      await era.printAndWait(
        `やっと離れた ${you.name} は、改めてこの${maru.teen_sex_title}のほうを向いた。`,
      );
      await era.printAndWait(
        `芝の上の真っ赤な姿と違い、月明かりの下に黙って立つ${maru.name}が、${you.name} に笑顔を見せた。`,
      );
      era.printButton(`「……${maru.name}」`, 1);
      await era.input();
      await era.printAndWait(
        `口を開こうとしても、何を言えばいいかわからない。`,
      );
      await era.printAndWait(`ただ、黙って見つめ合うだけ。`);
      await era.printAndWait(`……なぜか、怖かった。`);
      await era.printAndWait(`どうすれば炎と共に踊れるのか？`);
      await era.printAndWait(
        `どうすれば${maru.name}に自分を見てもらえるのか？`,
      );
      era.printButton(`「……」`, 1);
      await era.input();
      await maru.say_and_wait(
        `^_^ そんなに緊張しなくていいのよ。普通に話せばいいわ。`,
      );
      await era.printAndWait(
        `緊張しすぎた様子が、${maru.sex}を笑わせたようだ。`,
      );
      await maru.say_and_wait(
        `人の気持ちを気にかけるのはいいこと。でも自分の気持ちをちゃんと出さないと。`,
      );
      await maru.say_and_wait(
        `交流したくても、難しくなるでしょ。だから、何もかも浮き雲、くらいの気持ちでちょうどいい！`,
      );
      await era.printAndWait(`心の中を見抜かれたようだ。`);
      await you.say_and_wait(
        `そうだな。そこに立っているのは、これから三年の相棒になる ${maru.actual_name_with_title} だ。`,
      );
      await era.printAndWait(
        `——翠の澄んだ両目に励まされて、考えずに言ってしまった。`,
      );
      await maru.say_and_wait(
        `そうよ。${maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'}な私よ。`,
      );
      await you.say_and_wait(`${maru.name}の目は、きれいだな。`);
      await you.say_and_wait(`この目に魅せられた人は、きっと多いだろう。`);
      await you.say_and_wait(
        `それに、こうして誰かを励ます${maru.name}に惚れる人も、少なくないはずだ。`,
      );
      await maru.say_and_wait(
        `ん——思ったより話せるのね？ 先輩として、迷ってる${maru.uma_sex_title}や人を導くのは普通のことよ♪`,
      );
      await maru.say_and_wait(
        `まして、これから仲間になる ${callname} ならね。`,
      );
      await maru.say_and_wait(
        `うん——この先も、このリズムでちゃんと楽しむのよ。`,
      );
      await maru.say_and_wait(
        `じゃあ、もう一度。${maru.name}、これから三年の仲間で担当${maru.uma_sex_title}として、よろしくね♪`,
      );
      era.printButton(`「よろしく、${maru.name}」`, 1);
      await era.input();
      await era.printAndWait(
        `柔らかな肌と、その中に潜む力を十分感じてから、${you.actual_name}はその両手をしっかり握った。`,
      );
      await era.printAndWait(
        `${you.name}と${maru.name}が契約したあとの、最初の正式な対面は、こうして終わった。`,
      );
      //風属性は1
    };
    f.title = title;
    return f;
  })(),
  ws_5: (() => {
    const title = (maru) => `${maru.elder_sibling_sex_title}からの贈り物`;
    /**
     * マルゼンスキーがプレイヤーをドライブに誘う
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`トレーニング室`);
      era.println();
      await era.printAndWait(`トントントン`);
      await maru.say_and_wait(`ハロー${callname}！`);
      await era.printAndWait(
        `チョコレートの山を抱えた${maru.name}が ${you.name} のトレーニング室に入ってきた。`,
      );
      era.printButton(`「手伝おうか？」`, 1);
      await era.input();
      await era.printAndWait(
        `目の錯覚かと疑うほど、${maru.name}はチョコレートの山を抱えてトレーニング室へ来た。`,
      );
      await maru.say_and_wait(`後輩たちが思ったより熱くて、たまんないわ。`);
      await maru.say_and_wait(
        `日ごろのマルゼン先輩へのお礼だとか言って、このチョコを押し込んできて——あ、ここに置いていい？`,
      );
      era.printButton(`「後輩たち、${you.name}に好かれてるな」`, 1);
      await era.input();
      await era.printAndWait(
        `小テーブルの菓子と漫画を床に下ろし、${maru.name}の手からチョコの一部を受け取った。`,
      );
      await maru.say_and_wait(`すごっ——後輩の期待、重いわね。`);
      await era.printAndWait(
        `崩れそうなチョコの塔から解放された${maru.name}は、少し困った笑顔でソファに座った。`,
      );
      await maru.say_and_wait(`${callname}、サンキュー♪`);
      await you.say_and_wait(
        `お礼に、かわいい後輩たちの話を聞かせてくれないか？`,
      );
      await era.printAndWait(
        `${you.name} もそのままソファに座り、${maru.name}の目を正面から見た。`,
      );
      await maru.say_and_wait(
        `うん——${callname}の頼みなら。あ、そういえばこの前、すごく沈んでる子がいたわ。`,
      );
      await maru.say_and_wait(
        `——選抜で負けただけなのに、泣きながら相談に来て。${
          maru.sex
        }の話をちゃんと聞いたあと、自分の走りの心得を少し話しただけなのに、${
          maru.sex
        }はすごく真剣に聞いてくれたの。`,
      );
      await maru.say_and_wait(
        `微妙なところにも自分の考えを出して、ノートはびっしり一ページ。おかげで私の収穫も少なくなかったわ。`,
      );
      await maru.say_and_wait(
        `帰る前にきちんと礼を言って、そのあとも無事にトレーナーと契約できたそうよ♪`,
      );
      await maru.say_and_wait(`思い出すたびに、この感じが好きなの⭐`);
      await you.say_and_wait(`いい経験だな。`);
      await maru.say_and_wait(`^_^私もそう思う`);
      await maru.say_and_wait(`そういえば、${callname}はチョコもらった？`);
      await era.printAndWait(`${maru.name}は視線を ${you.name} の机へ向けた。`);
      await you.say_and_wait(
        `残念ながら。チームにいたころは${maru.uma_sex_title}からチョコをもらえたけど、独立してからは義理チョコすら見当たらない。`,
      );
      await maru.say_and_wait(`それは残念ね。`);
      await maru.say_and_wait(`……うん`);
      await maru.say_and_wait(`なら、一緒にチョコを選びに行きましょう♪`);
      await era.printAndWait(
        `いい方法を思いついたらしい${maru.name}の耳がぴんと立ち、目を輝かせて ${you.name} を見た。`,
      );
      await maru.say_and_wait(`ちょっとの間よ、今すぐ出発！`);
      await you.say_and_wait(`やめておこう。`, true);
      await era.printAndWait(
        `そう言いたかったが、店を真剣に考えている${maru.name}を見て、${you.name} は口を閉じた。`,
      );
      await you.say_and_wait(`これくらいなら、出ても大丈夫だろう。`, true);
      era.drawLine();
      await maru.say_and_wait(`今日も元気そうね。愛車！`);
      era.printButton(`「愛車か？ ${you.name}、よろしく！」`, 1);
      await era.input();
      await maru.say_and_wait(`じゃあ${callname}は助手席ね。`);
      await maru.say_and_wait(
        `愛車も、${callname}みたいな新しい友達に会えて喜んでるわ。`,
      );
      await you.say_and_wait(`ちょっと興奮するな。`, true);
      await maru.say_and_wait(`ふふ、愛車も嬉しそう♪`);
      await maru.say_and_wait("準備はいい？Let's go！");
      await you.say_and_wait(`え？ これがスポーツカーカーカーなのかああああ。`);
      era.drawLine();
      await maru.say_and_wait(
        `ふう——久しぶりに暴れたら、たまんないわ！ ${callname}も感じた……${
          callname
        }？`,
      );
      era.printButton(
        '「ここはエデンじゃなかったのか？ 三女神さま、初めまして」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `返事する勇気すら失い、尻尾を巻いて逃げる ${you.name} は、${maru.uma_sex_title}に追われるニンジンそのものだった。`,
      );
      await maru.say_and_wait(
        `ん、刺激が強すぎたかしら。${callname}、生きる気力がなさそう。`,
      );
      await era.printAndWait(
        `その場に残された ${maru.name} は、ひとりでつぶやいていた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_24: (() => {
    const title = 'トレーニング終わりの普通の一日';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await you.say_and_wait(`今日のトレーニングはここまで、お疲れさま。`);
      await maru.say_and_wait(`${callname}もお疲れさま。`);
      await era.printAndWait(
        `${maru.name}は ${you.name} からタオルを受け取り、額の汗を少し拭いて${you.name}に返した。`,
      );
      await you.say_and_wait(
        `このリズムで進めば、この先の朝日杯も優勝が見えてくる。`,
      );
      await maru.say_and_wait(
        `G1のレースでは、どんな盛況が見られるのかしら？ 楽しみね～`,
      );
      await you.say_and_wait(`${maru.name}は、走るのは楽しいか？`);
      await era.printAndWait(
        `タオルをまた絞ってから、そばのリュックから予備のタオルを取り、${maru.uma_sex_title}の乱れた長い髪を丁寧に拭いた。`,
      );
      await maru.say_and_wait(
        `散らばった髪をピンで留めないと、走ってるときに目に当たって痛いの。ついハメを外しちゃった。`,
      );
      await maru.say_and_wait(
        `やっぱり髪型を変えて気分転換したほうがいいかしら、${callname}はどう思う？`,
      );
      await you.say_and_wait(`俺もそう思う。`);
      await you.say_and_wait(
        `髪を結んで長いポニーテールでしっかり固定すれば、走りにも影響しないだろう。`,
      );
      await you.say_and_wait(
        `それに、みんなに${maru.name}の違う一面を見せられるのも、悪くない。`,
      );
      await maru.say_and_wait(
        `うん——どうするのがいいかしら？ ${callname}の提案もいいけど`,
      );
      await maru.say_and_wait(`あ、痛い。`);
      await you.say_and_wait(`悪い、このあたりの髪が絡まってた。`);
      await maru.say_and_wait(`サンキュー。`);
      await maru.say_and_wait(`今日は愛車と海風を楽しんで気分転換しましょう♪`);
      await maru.say_and_wait(`${callname}、門まで送ってくれる？`);
      era.printButton(`「一緒に行こう」`, 1);
      await era.input();
      await era.printAndWait(
        `\n${you.name}と${maru.name}は黄昏の小道を並んで歩いた。`,
      );
      await you.say_and_wait(
        `そういえば${maru.name}、一人でアパートから通学するのは不便じゃないか。`,
      );
      await era.printAndWait(
        `寮に住む他の${maru.uma_sex_title}と違い、${maru.name}はずっと学園の外のアパートに住んでいる。`,
      );
      await era.printAndWait(
        `その特別さに好奇心を持った${you.name}は、${maru.name}に答えを求めた。`,
      );
      await maru.say_and_wait(
        `学園内の門限より、校外に住む私のほうが自由かもね。`,
      );
      await maru.say_and_wait(
        `でも毎日、他の生徒より早く起きなきゃいけないのも、自由の代償よ。`,
      );
      await you.say_and_wait(
        `機会があれば${maru.name}のアパートにしばらく住んでみたいな。${maru.name}はどう思う？`,
      );
      await maru.say_and_wait(
        `なに？ ${callname}なら、面白いかもしれないわね。`,
      );
      await maru.say_and_wait(
        `${callname}、言ったことは忘れないでね？ 言ったことは、いつか返ってくるわよ。`,
      );
      era.printButton(`「もちろん。」`, 1);
      await era.input();
      await maru.say_and_wait(`ふふ～、私も楽しみ。`);
      await era.printAndWait(
        `雑談しているうちに、気づいたら学園の門に着いていた。`,
      );
      await maru.say_and_wait(
        `${callname}といる時間は、いつもこんなに短いのね。`,
      );
      await you.say_and_wait(
        `短いからこそ、この幸せな時間を倍にして大切にする。${maru.name}にとっても、いい思い出になるだろ？`,
      );
      await maru.say_and_wait(`楽しい思い出よ。また明日、さよなら～`);
      await era.printAndWait(
        `エンジンの始動音とともに、${maru.name}の背中は視界の端から消えた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'メイクデビュー前・すべての起点';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, callname) => {
      await era.printAndWait(`地下通路`);
      await maru.say_and_wait(
        `まだ少し緊張してるけど、今はもう完全にリラックスできたわ。`,
      );
      era.printButton(
        `「このまま後輩たちに${maru.name}のクールなところを見せよう！」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `うんうん、${callname} も${maru.name}のクールなところ、ちゃんと見ててね。`,
      );
      await maru.say_and_wait(
        `それに、後ろで支えてくれる後輩たちだけじゃなく、疾走の中で限界を破る風も感じられる！`,
      );
      await maru.say_and_wait(`こう話してると、体も興奮してきたわ！`);
      await maru.say_and_wait(
        `そろそろ私の出番ね。じゃあ、${callname}、またあとで！`,
      );
      era.printButton(`「武運を祈る」`, 1);
      await era.input();
      await era.printAndWait(`頷いたあと、${maru.name}はレース場へ向かった`);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'メイクデビュー後・旅立ちの風';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `ジュニア級のメイクデビューにすぎないのに、${maru.name} の初走りを見に来た人たちで競馬場は埋まった。`,
      );
      await you.say_and_wait(
        `よく考えると、${maru.name} の人気は本当に恐ろしいな。`,
      );
      await era.printAndWait(
        `日ごろ後輩を助けてきたおかげで、観衆の大部分は助けられた後輩たちだ。`,
      );
      await era.printAndWait(
        `馬群の中に座る ${you.name} は、場違いな圧を感じている。`,
      );
      await you.say_and_wait(
        `手のひらが汗ばむ前に、もう少し人が少ない場所で観戦しよう。`,
      );
      await you.say_as_passer_by_and_wait(
        `実況`,
        `続いては注目の新星、圧倒的な実力と人気を持つ ${maru.name}。これからどんな素晴らしい絵を見せてくれるのか！`,
      );
      await you.say_and_wait(`まずいな。`);
      await era.printAndWait(
        `実況の力強い煽りで、熱した油に水が一滴落ちたように、歓声が競馬場をひっくり返しそうだ。`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title} A`,
        `マルゼン${maru.sex_code !== 1 ? '先輩' : '先輩'}、頑張れ！`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title} B`,
        `もう一度、先輩のクールな走りを見せて！`,
      );
      await era.printAndWait(`おおおおお！`);
      await era.printAndWait(`観客の歓声が競馬場全体に響いた`);
      await you.say_and_wait(
        `みんな興奮してるな。やっぱり ${maru.name} のせいだな。`,
      );
      await era.printAndWait(
        `人混みと一緒に立ち上がった ${you.name} は、馬耳の隙間から ${maru.name} の姿を探している。`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `あ、ごめん。`);
      await era.printAndWait(
        `うっかり当たっただけなのに、衝撃が大きくて、思わず声を上げそうになった。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `本当にごめん……力が抑えきれなくて。怪我はない？`,
      );
      await you.say_and_wait(`いや、大丈夫だ。`);
      await era.printAndWait(
        `相手に悪気はない。ここにこだわる必要はないと、${you.name} はそのまま許した。`,
      );
      await you.say_and_wait(`君も ${maru.name} の走りを見に来たのか？`);
      await era.printAndWait(`言った瞬間、自分の質問に深く後悔した。`);
      await you.say_and_wait(`君も ${maru.name} の走りを見に来たのか？`);
      await era.printAndWait(
        `当たり前だ。${maru.name} を見に来たのでなければ、何しに来た？ 脚の生えたニンジンが走るのを見るためか？`,
      );
      await era.printAndWait(`でも、脚の生えたニンジンはちょっと見てみたい。`);
      await you.say_and_wait(
        `君たちも、脚の生えたニンジンが走るのを見に来たのか？`,
      );
      await era.printAndWait(
        `いけない、頭の中の言葉と、言うべき会話が混ざった。`,
      );
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `ぷっ。`);
      await you.say_and_wait(`案の定、笑われた。`, true);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `このトレーナー${you.adult_sex_title}、思ったより面白いのね。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `マルゼン先輩が君を選んだ理由、ちょっとわかったかも。`,
      );
      await you.say_and_wait(`え？`);
      await you.say_and_wait(`もうそんなに有名なのか？`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `というより、君がマルゼン先輩と契約した翌日には、トレセン中が知ってたわ。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `みんな、${maru.name} のトレーナーがどんな人か、気になってるのよ。`,
      );
      await era.printAndWait(`だから一路、好奇の視線が多かったのか。`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `マルゼン先輩のトレーナー${maru.adult_sex_title}、この先の道、頑張ってね！ 私もずっと、君とマルゼン先輩を応援するから！`,
      );
      await era.printAndWait(
        `この ${maru.uma_sex_title} は、とても嬉しそうだ。`,
      );
      await era.printAndWait(
        `みんなの注意が再び ${maru.name} に戻ったすきに、${you.name} は元の席をそっと離れた。`,
      );
      era.drawLine();
      await era.printAndWait(
        `${maru.name} の走る姿を正面から見られる東側に比べ、背中しか見えない西側の席は人がまばらだ。`,
      );
      await era.printAndWait(
        `まして、自分の席に座らず人混みの中に立つ ${maru.uma_sex_title} も少なくない。`,
      );
      await era.printAndWait(
        `だから${maru.uma_sex_title}たちは、単純な生き物だな。`,
      );
      await era.printAndWait(`でも、だからこそ ${maru.sex} たちが好きなんだ。`);
      await era.printAndWait(
        `観客席に歓声が爆発した。${maru.name} の初戦勝利を祝う ${maru.uma_sex_title} たちの悲鳴だ。`,
      );
      era.printButton(`「そろそろ ${maru.name} を迎えに行こう」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname} ♪、さっきの素晴らしい演技、見てくれた？`,
      );
      era.printButton(`「想像以上に素晴らしいステージだった！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `うんうん、じゃあウイニングライブの準備に行くわ。${callname} は ${maru.elder_sibling_sex_title} をちゃんと見ててね⭐`,
      );
      await era.printAndWait(
        `ウイニングライブの ${maru.name} は、普段よりさらに輝いている。掘り出された原石が、本来の姿を見せたようだ。`,
      );
      await era.printAndWait(
        `でも考えてみれば、トレーナーとはそういう仕事だ。`,
      );
      era.drawLine({ content: 'ウイニングライブのあと' });
      await maru.say_and_wait(
        `ふう～、汗かいちゃった。でも前のダンス練習が本当に役立ったわ⭐`,
      );
      era.printButton(`さすがは ${maru.elder_sibling_sex_title} さま`, 1);
      await era.input();
      await maru.say_and_wait(
        `あら、${callname}、普段よりお上手ね。他の子たちにもそんな態度なの？`,
      );
      era.printButton(
        `${maru.name} という ${maru.elder_sibling_sex_title} は一人しかいない。他の子に同じことなんて言えないだろ？`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `ふふふ、${callname} にそう言われると、気分もますます上がるわ。うん——今夜はテイオーたちとパーティーで祝いましょうか！`,
      );
      era.printButton(`「${maru.name}、普段より興奮してるな」`, 1);
      await era.input();
      await you.say_and_wait(
        `炎みたいに芝を席巻した ${maru.name} は、本当にクールだった。`,
      );
      await maru.say_and_wait(
        `担当の ${callname} にそう言われると、安心するわ。`,
      );
      await maru.say_and_wait(`でも褒め続ける前に、次の目標は？`);
      era.printButton(`「朝日杯はどうだ？」`, 1);
      await era.input();
      await maru.say_and_wait(`朝日杯？`);
      await maru.say_and_wait(
        `もっと強い ${maru.uma_sex_title} と競えれば、もっと美しい景色が見られるかも。${callname}、その答えは満点よ。`,
      );
      await maru.say_and_wait(`じゃあ、次は朝日杯へ進みましょう！`);
      await era.printAndWait(`${you.name} と ${maru.name} は次の目標を決めた.`);
    };
    f.title = title;
    return f;
  })(),
  begin_race_lose: (() => {
    const title = 'メイクデビュー後・もう一度努力';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await maru.say_and_wait(`あ、負けた……`);
      await era.printAndWait(
        `意外か、トレーニング不足か。${maru.name} はメイクデビューで敗れた。`,
      );
      era.printButton(`戻って反省会をしよう。`, 1);
      await era.input();
      await maru.say_and_wait(`うん！ 次は絶対勝つ！`);
      await era.printAndWait(
        `${you.name} と ${maru.name} は次の目標を決めた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_30: (() => {
    const title = '三女神の子どもたち';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, emperor, you, callname) => {
      emperor.name = '皇帝';
      await era.printAndWait(`中庭 三女神像の前`);
      await era.printAndWait(
        `一日中騒がしい芝と校舎から離れたここは、${maru.uma_sex_title}たちの心の拠り所である聖地だ。`,
      );
      await era.printAndWait(
        `ここには三女神の像が祀られている。名はダーレーアラビアン、ゴドルフィンアラビアン、バイアリーターク。`,
      );
      await era.printAndWait(
        `澄んだ水が、女神たちが支える水瓶から池へ流れ込む。`,
      );
      await era.printAndWait(`そしてここへ、また新しい客が来た。`);
      await emperor.say_and_wait(`……`);
      await era.printAndWait(`皇帝は三女神像を見つめている。`);
      await emperor.say_and_wait(`まだ来ないのか？`, true);
      await era.printAndWait(
        `私名義で、最近目をかけている${maru.uma_sex_title}を招いた。だが相手の態度は、まだ曖昧だ。`,
      );
      await era.printAndWait(
        `皇帝の威圧を恐れてか。まあいい、そんな弱い${maru.uma_sex_title}に背中は預けられない。`,
      );
      await era.printAndWait(`我らが創ったエデンで、自由に生きるがいい。`);
      await emperor.say_and_wait(`では、そろそろ戻るか`);
      await era.printAndWait(`皇帝の言葉は、中庭へ向かう足音に遮られた。`);
      era.drawLine();
      era.printButton(`「えっと、場所を間違えたか。」`, 1);
      await era.input();
      await era.printAndWait(
        `話題を続けられず混乱する。耳に入るのは、女神像が支える瓶の水が池へ落ちて弾ける音だけだ。`,
      );
      await era.printAndWait(
        `幸い皇帝は ${you.name} の到来を気にせず、視線を女神像へ向けていた。`,
      );
      era.printButton(`「よかった」`, 1);
      await era.input();
      await you.say_and_wait(`そういえば`);
      await era.printAndWait(
        `ずっと前、まだ子どもだったころ、一人で神社に来たときも、こんなことがあった気がする。`,
      );
      await era.printAndWait(
        `三女神の像を見つめ、周囲の音を無視して、思い出に沈む。`,
      );
      await era.printAndWait(
        `友達と隠れんぼをして、鬼から逃れるために、わざわざ僻地の隅に隠れた。`,
      );
      await era.printAndWait(`待っているうちに、うっかり眠ってしまった。`);
      await era.printAndWait(`そうして三女神さまに出会った。`);
      await era.printAndWait(
        `美しい赤い長い髪は燃える炎を思わせ、優しい${
          maru.sex
        }は慌てる ${you.name} をなだめようとした`,
      );
      await era.printAndWait(
        `当時の慰めの言葉はもう覚えていない。だがその優しさの感触は、色褪せないアルバムの文字のように、${you.name} の記憶に残っている。`,
      );
      await emperor.say_and_wait(
        `——ゆえに吾は認可も賛同も要らぬ。王とは、自ら先頭に立つ者だ。`,
      );
      await era.printAndWait(
        `騒がしい声が${you.name}の思考を遮り、脚の痺れが${you.name}の意識を現実へ引き戻した。`,
      );
      await you.say_and_wait(`は～あ。`);
      await era.printAndWait(
        `思わずあくびをし、この温かい余韻を味わいながら、視線を女神像から中庭の反対側へ移した。`,
      );
      await era.printAndWait(
        `わざと ${you.name} から離れて、何か話しているようだ。`,
      );
      await you.say_and_wait(`戻るか。`, true);
      await maru.say_and_wait(
        `${callname}？ 後輩たちがニンジンを少し送ってくれたの。今日は。`,
      );
      await era.printAndWait(
        `${maru.name} は中庭を出るいちばん近い道を塞いでいた。しかも。`,
      );
      await emperor.say_and_wait(`${maru.name}、久しぶりだ。`);
      await maru.say_and_wait(`ルドルフちゃん、今日も元気そうね。`);
      await maru.say_and_wait(
        `後輩たちがニンジンを少しくれたの。君も食べてみる？`,
      );
      await emperor.say_and_wait(`結構だ。`);
      await maru.say_and_wait(`そう？ 残念ね。`);
      await emperor.say_and_wait(`あとで少し届けてもらえるか？`);
      await maru.say_and_wait(`もちろん！`);
      await maru.say_and_wait(
        `${maru.uma_sex_title}たちの幸せのために必死に頑張ってるルドルフちゃん、すごいと思うわ。`,
      );
      await maru.say_and_wait(
        `挑戦者として一路努力して、レース場に皇帝の名を残した。`,
      );
      await maru.say_and_wait(
        `こうして${maru.uma_sex_title}には無理だとされた予言を次々破るのは、人生としても幸せでしょうね。`,
      );
      await emperor.say_and_wait(`では${maru.name}は、幸せか？`);
      await maru.say_and_wait(
        `幸せと言うなら、こうしてレース場でかわいい後輩たちに追いかける希望を残すのも、幸せじゃない？`,
      );
      await maru.say_and_wait(
        `芝の上を自由に走って、後輩たちの悩みを聞いて助言する。悪くない選択だと思うわ？`,
      );
      await emperor.say_and_wait(
        `${maru.uma_sex_title}たちの期待は、思っているより重いものだ。`,
      );
      await emperor.say_and_wait(
        `途中で桃色の泡を割るならまだいい。ずっと桃色の夢を見続けていると。`,
      );
      await emperor.say_and_wait(`いつか、自分では処理できないことに出会う。`);
      await emperor.say_and_wait(
        `そのとき、${maru.name}、貴公がどんなやり方で、その障害を越えるのか、楽しみにしている。`,
      );
      await era.printAndWait(
        `ベルが鳴り、午後のトレーニングがまもなく始まる。${maru.name} は考え、それでも黙った。`,
      );
      await emperor.say_and_wait(
        `もう少し話したかったが、執務室に積もった仕事が残っている。失礼する。`,
      );
      await era.printAndWait(`そう言って、皇帝は中庭を離れた。`);
      await maru.say_and_wait(`……それでも、私はわかってる。`);
      await maru.say_and_wait(
        `……ごめん、${callname}、思い出したことがあって。`,
      );
      await era.printAndWait(`${maru.name} は憂鬱な顔で中庭を離れた。`);
      await you.say_and_wait(`それで、誰もいなくなったのか？`);
      await you.say_and_wait(
        `${maru.name}、何か悩みがありそうだ。機会を見て話そう。`,
      );
      await era.printAndWait(`${you.name} は中庭を離れた。`);
      await era.printAndWait(
        `こうして旅人たちは、違う思いを抱えて、違う目的へ進む。`,
      );
      await era.printAndWait(`三女神は、すべてを黙って包み込んだ。`);
    };
    f.title = title;
    return f;
  })(),
  ws_34: (() => {
    const title = '贈り物';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(
        `ある日、${you.name}が執務室で資料を整理していると。`,
      );
      await era.printAndWait(`トントントン`);
      era.printButton(`「どうぞ」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `失礼します。`);
      await era.printAndWait(
        `ドアノブが回り、高校部らしい${maru.uma_sex_title}が入ってきた。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `こんにちは、トレーナー${you.adult_sex_title}。`,
      );
      era.printButton(`「こんにちは」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `私はトレセン学園のどこにでもいる普通の${maru.uma_sex_title}の一人です`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `マルゼン先輩みたいにレース場で勝ち続けたいです。よろしくお願いします。`,
      );
      era.printButton(`「よろしく」`, 1);
      await era.input();
      await era.printAndWait(`二人の手が握られた。\n`);
      era.printButton(
        `こちらにコーヒーが……いや、やめよう。紅茶とココナッツジュース、どっちがいい？`,
        1,
      );
      await era.input();
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `ありがとうございます。でも、贈り物を届けに来ただけなので。`,
      );
      await era.printAndWait(`${maru.sex}はポケットから小さな箱を取り出した`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `私たちみたいな普通の${maru.uma_sex_title}がトレーナーに目をかけてもらえて、キャリアでG3を勝つだけでも、すごくすごいことなんです。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `みんな、入着を目標に必死に頑張ってます。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `それでも入着できる${maru.uma_sex_title}はごくわずかで、ほとんどの${maru.uma_sex_title}はメイクデビューを勝ったあと、一勝もできないまま三年のキャリアを終えます。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `卒業までに、専属契約できるトレーナーに出会えない子もいます`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `マルゼン先輩はそういうことにこだわらず、ずっと私たちの前進を励ましてくれます。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `困ったときは、そばで助言してくれます。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `だから、私たちはずっとマルゼン先輩に感謝してます。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `それで、友達と一緒にこの贈り物を作って、マルゼン先輩に渡したくて。`,
      );
      era.printButton(
        `「${maru.name}はきっと喜ぶ。${you.name}たち、ありがとう」`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `相手の手から、リボン付きの小さな箱を受け取った。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `ありがとう${you.name}、トレーナー${you.adult_sex_title}。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `この先の選抜では、みんなをびっくりさせなきゃ！`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `じゃあね、${maru.name}のトレーナー${you.adult_sex_title}！`,
      );
      await era.printAndWait(
        `お辞儀したあと、${maru.sex}はドアのところで首を出して待っていた仲間のそばへ急いだ`,
      );
      await you.say_and_wait(
        `この先、${maru.sex}にも合うトレーナーが見つかるといいな`,
        true,
      );
      await era.printAndWait(
        `そっと扉を閉めてから、${you.name}は小さな箱を開けた。`,
      );
      await era.printAndWait(
        `中に入っていたのは、水晶でできたブレスレットだ。`,
      );
      await you.say_and_wait(
        `${maru.name}が戻ったら、直接${maru.sex}に渡そう`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  we_39: (() => {
    const title = 'ハロウィン';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `最後のデータを整理してから、${you.name}は長い息を吐いた。`,
      );
      era.printButton(`「やっと終わった。」`, 1);
      await era.input();
      await era.printAndWait(`ほぼ痺れた両脚を動かす。冬の夜は夏より長い。`);
      await you.say_and_wait(`外を歩こう`, true);
      await era.printAndWait(
        `仕事を全部終えた達成感で、${you.name}の足取りは軽くなった。`,
      );
      await era.printAndWait(
        `トレーニング室を出ると、学園のホールはパンプキンライトや紫のリボンで、神秘的な古城のように飾られていた。`,
      );
      await you.say_and_wait(`そういえば今日は何の日だったっけ？`, true);
      await you.say_as_passer_by_and_wait(
        `元気な${maru.uma_sex_title}たち`,
        `お菓子くれなきゃいたずらしちゃうよ！`,
      );
      await era.printAndWait(
        `幽霊や人狼、吸血鬼に扮した${maru.uma_sex_title}たちに絡まれた！`,
      );
      await you.say_and_wait(`うわ！`);
      await era.printAndWait(
        `角に隠れていた${maru.uma_sex_title}たちに不意打ちで驚かされ、${
          you.actual_name
        }は地面に倒れた。`,
      );
      await you.say_as_passer_by_and_wait(
        `元気な${maru.uma_sex_title}たち`,
        `いたずら大成功！`,
      );
      await era.printAndWait(
        `通行人を驚かせた${maru.uma_sex_title}たちは笑いながら走り去り、現場には被害者の${
          you.actual_name
        }だけが残った。`,
      );
      await you.say_and_wait(`こんな格好……何の祭りだっけ？`);
      await era.printAndWait(
        `頭を整理しようとしながら、${you.name}は尻の埃を払って立ち上がった。`,
      );
      await you.say_and_wait(`学園の外を見てみよう`);
      await era.printAndWait(`決めたあと、${you.name}はホールを離れた。`);
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `ミイラに扮した${maru.uma_sex_title}たち`,
        `お菓子くれなきゃいたずらしちゃうよ!`,
      );
      await era.printAndWait(
        `西洋のハロウィンを真似て、トレセン学園の${maru.uma_sex_title}たちも商店街の近くで一軒一軒戸を叩いている。`,
      );
      await era.printAndWait(`店主たちも用意した飴を出してもてなす。`);
      await you.say_and_wait(`今日はクリスマスなのか？`);
      await era.printAndWait(
        `巨大なコウモリとパンプキンライトの看板の入口を見て、${you.name}は考え込んだ。`,
      );
      await maru.say_and_wait(`HAPPY HALLOWEEN!`);
      await era.printAndWait(`入口で声をかけられた。`);
      await you.say_and_wait(`${maru.name}？`);
      await maru.say_and_wait(`${callname}、ハロウィンおめでとう♪`);
      await era.printAndWait(
        `深い紫の魔女服でコスプレした${maru.name}が、笑顔で${you.name}を見ている。`,
      );
      await you.say_and_wait(`ここで${maru.name}に会うとは。楽しんでる？`);
      await era.printAndWait(
        `揺れる耳、いたずらな妖精みたいに活発な尻尾。もう答えは明らかだ。`,
      );
      await maru.say_and_wait(
        `この感じ、好き。${callname} も一緒に遊んだら、もっとかわいいわ♪`,
      );
      await you.say_and_wait(`うん……`);
      await era.printAndWait(
        `化け物に扮した${maru.uma_sex_title}たちは未成年の${
          maru.teen_sex_title
        }だ。大人がこれをやるのは、やはり。`,
      );
      await you.say_and_wait(`むしろ光栄だ。`);
      await era.printAndWait(
        `こうして溜まったストレスを緩め、全身でこの喜びの海に沈む。`,
      );
      await maru.say_and_wait(`ふふ♪ じゃあ約束よ？`);
      await you.say_and_wait(`約束だ。`);
      await you.say_and_wait(`息抜きだと思って。`, true);
      await you.say_as_passer_by_and_wait(
        `リッチに扮した${maru.uma_sex_title}`,
        `先輩！ こっち、手が回りません！`,
      );
      await era.printAndWait(
        `飴を配る屋台が、${maru.uma_sex_title}たちに取り囲まれて身動きできないようだ。`,
      );
      await maru.say_and_wait(`あちゃー、じゃあ先に行くわ。`);
      era.printButton(`「俺も手伝う」`, 1);
      await era.input();
      await era.printAndWait(
        `飴を麻袋三つ分配ったあと、力尽きた二人はトレーニング室のソファに倒れ込んだ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_41: (() => {
    const title = (maru) => `トレーナーと担当${maru.uma_sex_title}`;
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`これは十一月のある日。`);
      await era.printAndWait(
        `${you.name}は去年の朝日杯の映像を見ながら、その技術をどう使えば${maru.name}の能力を上げられるか考えている。`,
      );
      await you.say_and_wait(`さすがスーパーカー、と言うべきか。`);
      await era.printAndWait(
        `走るために生まれた両脚。優美な肢体の下に隠れた大きな力。`,
      );
      await you.say_and_wait(`俺がいなくても、軽く勝てそうだな`);
      await era.printAndWait(
        `一時停止を押し、コーヒーを一口すする。冷たい苦みが口の中でゆっくり溶ける。`,
      );
      era.println();
      await era.printAndWait(`きしっ。`);
      await maru.say_and_wait(`ハロー！ ${callname}、入るわよ。`);
      await you.say_and_wait(`機嫌がよさそうだ。何かいいことでもあったか？`);
      await maru.say_and_wait(`はぁ、${callname}にもわかっちゃう？`);
      await maru.say_and_wait(
        `今日の選抜で、ずっと見てた後輩がやっと障害を越えて、同じように走る楽しさを知ったのよ？\n`,
      );
      await you.say_and_wait(
        `${maru.name}がそこまで言うなら、俺も${maru.name}が目をかけてる後輩を見てみたくなった。\n`,
      );
      await maru.say_and_wait(
        `でしょでしょ？ 後輩たち、そういうふうに一気に成長するの！ 私もびっくりしちゃった。`,
      );
      await maru.say_and_wait(
        `いつか私も後輩に軽く追い越されて、そのまま遠くへ置いていかれるかもね。プレッシャー、プレッシャー。\n`,
      );
      era.printButton(`「この先のトレーニングも頑張らないと！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `そうよ！ ${
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
        }な私も、この先のトレーニングはスパルタじゃないと！`,
      );
      era.println();
      await maru.say_and_wait(`そういえば。`);
      await era.printAndWait(
        `${maru.name}は何かを思い出したように、両手を軽く叩いた。\n`,
      );
      await maru.say_and_wait(
        `そうだ、${callname}、トレーニングが終わったら一緒にドライブしない？`,
      );
      await maru.say_and_wait(
        `他の季節と違って、秋の風はいつも気持ちを軽くしてくれるの。`,
      );
      await maru.say_and_wait(
        `でも、言葉だけで話しても ${callname} には伝わらないでしょうね。だから ${callname} には、体で感じてもらうほうがいいと思う。`,
      );
      era.printButton(
        `${maru.name}がそこまで言うなら、俺も秋風を感じてみたくなった。`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `${maru.name}の言う秋風って、どんな感じなんだろう？`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `ふあ、風に吹かれて、やっと何もかも浮き雲だってわかるわ。`,
      );
      era.printButton(`「${maru.name}、もう少しゆっくり走れるか？」`, 1);
      await era.input();
      await era.printAndWait(
        `初めて助手席で気絶しそうになったころと違い、今の${you.name}もこの速度に少し慣れてきた。`,
      );
      await you.say_and_wait(`人間は思ったより頑丈だな。`, true);
      await you.say_and_wait(
        `高速で動く気流の中、風の轟と、後ろへ急速に退いていく景色以外は。`,
        true,
      );
      await era.printAndWait(
        `夏のように空気に熱波の名残が混ざるわけでもなく、冬のように寒流の欠片が混ざるわけでもない。`,
      );
      await era.printAndWait(`秋の風には、強い解放感がある。`);
      await era.printAndWait(
        `学生時代、最後の課題を終えてペンを置き、息をついたときのようだ。`,
      );
      await era.printAndWait(
        `あるいは、何かにもう長いこと苛まれて、ある日やっと終わったときのようだ。`,
      );
      await era.printAndWait(
        `風に吹かれた頬から始まり、一本一本の髪、髪につながる脳、最後に心まで届く。`,
      );
      await era.printAndWait(`余分な爽快感を、遠慮なく解き放ちたくなる。`);
      await you.say_and_wait(`${maru.name}、もしかして、俺は。`);
      await maru.say_and_wait(`そろそろ海ね。`);
      await era.printAndWait(`口から出そうになった言葉は、結局沈黙になった。`);
      await you.say_and_wait(`……そうだな。`);
      era.drawLine();
      await era.printAndWait(
        `${maru.name}の助手席から降りたあと、${you.name}は遠くを懸命に眺めた。視界にはごま粒ほどの人影しかない。`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}という種族が生まれつき持つ優位か、まだ海水に流されていない足跡から読み取った状況か。`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `この深い青の空間で、${maru.name}は起伏する波を見つめ——`,
      );
      await era.printAndWait(`それから、寂しそうな顔をした。`);
      await you.say_and_wait(`${maru.name}？`);
      await maru.say_and_wait(`え？`);
      await maru.say_and_wait(
        `こうして休みの日に ${callname} と一緒に海を見るのは、初めてね。`,
      );
      await era.printAndWait(
        `湿った海風が真正面から吹き、ほとんど目を開けていられない。`,
      );
      await maru.say_and_wait(`あら、今日の風はこんなに強いのね。`);
      await you.say_and_wait(`そうか。`);
      await you.say_and_wait(`海風って、こういう少し苦い塩の匂いなんだな。`);
      await maru.say_and_wait(
        `うん、少し生臭い風。同時に、海で生きる生き物たちの道標でもある。`,
      );
      await maru.say_and_wait(
        `あの子たちは、この特別な匂いに頼って餌を探すの。`,
      );
      await maru.say_and_wait(
        `だからそういう意味では、この匂いが、あの子たちの命綱になってるのかもね。`,
      );
      await you.say_and_wait(
        `${maru.name}はいつも、優しいお${maru.elder_sibling_sex_title}だな。`,
      );
      await maru.say_and_wait(
        `参ったわ、${callname} にだけはそう言われたくない♪`,
      );
      await maru.say_and_wait(
        `${callname} にそう言われると、${maru.elder_sibling_sex_title}、ちょっと照れる。`,
      );
      await era.printAndWait(
        `${you.name}に褒められた${maru.name}は、珍しいかわいい顔をした。`,
      );
      await you.say_and_wait(
        `三女神さまの恵みに感謝。もう食べきれない。`,
        true,
      );
      await era.printAndWait(
        `こうして${maru.name}のかわいい姿を、遠慮なく味わい尽くした。`,
      );
      await era.printAndWait(
        `トレーナーの数十年のキャリアに比べれば、たった三年は泡のように短い。`,
      );
      await era.printAndWait(
        `だからキャリアで初めて出会った${maru.uma_sex_title}を、練習台にしていいのか？`,
      );
      await era.printAndWait(
        `いや、トレーナーとしては能力が足りないのが運命で、賭けてくれた${maru.uma_sex_title}たちを失望させるかもしれない。`,
      );
      await era.printAndWait(`それでも、私たちは契約を選ぶ。`);
      await era.printAndWait(
        `${maru.uma_sex_title}たちが、それを必要とするから。`,
      );
      await era.printAndWait(
        `だからこそ、トレーナーにいちばん大事なのは、誠実な心だ`,
      );
      await era.printAndWait(
        `「身を滅ぼす可能性があっても、トレーナーとして担当と一緒に輝く。」その誠実な心で、トレーニングの醜さや足りなさを贖う。`,
      );
      await maru.say_and_wait(`そろそろ帰ってご飯にしましょう、${callname} ——`);
      await era.printAndWait(`月が昇った。`);
    };
    f.title = title;
    return f;
  })(),
  before_asah_sta: (() => {
    const title = '朝日杯前・5速加速';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`控え室`);
      await maru.say_and_wait(`ふんふんふん～`);
      await era.printAndWait(
        `${maru.name}は機嫌よく控え室で勝負服を点検している。`,
      );
      await you.say_and_wait(`${maru.name}、準備はどうだ？`);
      await maru.say_and_wait(`あら、${callname} ね。`);
      await maru.say_and_wait(`見てのとおり、今は全開よ。`);
      era.printButton(`「この先もレースを楽しもうな！」`, 1);
      await era.input();
      await you.say_and_wait(
        `だって、未来へ走る${maru.name}のクールなところを、ずっと見たかったから。`,
      );
      await maru.say_and_wait(`うん、${callname}はちゃんと見てて。`);
      await maru.say_and_wait(`レース場を走る${maru.name}の姿を。`);
      await maru.say_and_wait(`じゃあ、行ってくるわ。`);
      era.printButton(`「${maru.name}、頑張れ！」`, 1);
      await era.input();
      await era.printAndWait(`準備を終えた${maru.name}はレース場へ向かった。`);
      await you.say_and_wait(`このあと観客席で${maru.sex}を応援しよう`, true);
    };
    f.title = title;
    return f;
  })(),
  asah_sta_win: (() => {
    const title = '朝日杯後・フィーバー抜群';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`阪神競馬場\n`);
      await era.printAndWait(
        `鋭い空気が肺を刺激し、寒さが脳をいっそうはっきりさせる。`,
      );
      await you.say_and_wait(` ${maru.name}、必ず勝ってくれ。`);
      await you.say_and_wait(`……いや、${maru.name} なら。`);
      await you.say_and_wait(
        `勝利より、${maru.uma_sex_title} たちと一緒に走ることを感じるほうが楽しいんだろう`,
        true,
      );
      await era.printAndWait(
        `${you.name} はレース開始の瞬間をじっと見つめた。`,
      );
      era.drawLine({ content: '観客席の反対側' });
      await era.printAndWait(
        `手に入れた馬券を固く握り、${maru.uma_sex_title} は ${maru.name} の姿をじっと見つめている。`,
      );
      await era.printAndWait(`だが、`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `だから私の存在意義は……`,
      );
      await era.printAndWait(`うっかり、自分と ${maru.sex} を比べてしまった。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `あ！ 心の中の言葉が出ちゃった。`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `でもどうして、心がこんなに痛いの？`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `私とあなたの距離は、全力でも届かないほど。`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `どうして……`);
      await era.printAndWait(`悔しそうに唇を噛み、握っていた馬券を丸めた。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `どうして、あなたの脚から希望が見えないの`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `ちがう！ 私、何考えてるの。`,
      );
      await era.printAndWait(
        `何か貴重なものが砕けて、もう戻らないようだ。${maru.uma_sex_title} は再び ${maru.name} の姿を見た。`,
      );
    };
    f.title = title;
    return f;
  })(),
  asah_sta_5: (() => {
    const title = '朝日杯後・高揚の感覚';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name} 入着。`);
      await maru.say_and_wait(
        `はい！ ${callname}、${
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
        }な私のクールなところ、見てくれた？`,
      );
      era.printButton(`お疲れさま。`, 1);
      await era.input();
      era.printButton(`G1で入着するだけでもすごいぞ。`, 1);
      await era.input();
      await maru.say_and_wait(
        `走ってる ${maru.uma_sex_title} たちはみんな、勝ちたい気迫に満ちてるわ。${maru.elder_sibling_sex_title}、ちょっとプレッシャーね。`,
      );
      await you.say_and_wait(` ${maru.name} は楽しんでるみたいだが。`);
      await maru.say_and_wait(`だってG1だもの。相手は普段より一段上。`);
      await maru.say_and_wait(`その分、芝で得られる楽しさも、前より一段上よ♪`);
      await you.say_and_wait(`このあと、どこかで祝おうか？`);
      await maru.say_and_wait(
        `そういうことなら、${maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'}な私、人気のスイーツ店を知ってるわ。`,
      );
      era.drawLine({ content: '観客席の反対側' });
      await era.printAndWait(
        `手に入れた馬券を固く握り、${maru.uma_sex_title} は ${maru.name} の姿をじっと見つめている。`,
      );
      await era.printAndWait(`だが、`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `だから私の存在意義は……`,
      );
      await era.printAndWait(`うっかり、自分と ${maru.sex} を比べてしまった。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `あ！ 心の中の言葉が出ちゃった。`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `でもどうして、心がこんなに痛いの？`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `私とあなたの距離は、全力でも届かないほど。`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `どうして……`);
      await era.printAndWait(`悔しそうに唇を噛み、握っていた馬券を丸めた。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `どうして、あなたの脚から希望が見えないの`,
        true,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `ちがう！ 私、何考えてるの。`,
      );
      await era.printAndWait(
        `何か貴重なものが砕けて、もう戻らないようだ。${maru.uma_sex_title} は再び ${maru.name} の姿を見た。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47: (() => {
    const title = 'クリスマスと、ときめく思い出';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`Merry Christmas！`);
      await era.printAndWait(
        `厚い服を着た${maru.name}がトレーニング室に現れた。`,
      );
      era.printButton(
        `「メリークリスマス! 暖を取るなら、ここに囲炉裏とみかんがある。」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `疲れた目をこすり、${maru.name}と話す機会に少し頭を空にする。`,
      );
      await maru.say_and_wait(`外は思ったより寒くて、たまんないわ。`);
      await era.printAndWait(
        `柔らかいソファに身を預け、${maru.name}は丁寧にみかんの皮を剥いて果肉を口に入れた。`,
      );
      await you.say_and_wait(
        `今日の気温はマイナス1度だ。予報では今夜雪が降るらしい。`,
      );
      await era.printAndWait(
        `『雪か』とつぶやきながら、${maru.name}はまたみかんを剥いた。`,
      );
      await era.printAndWait(
        `しばらくトレーニング室は静かに戻り、紙をめくる音だけが響いている。`,
      );
      await era.printAndWait(
        `体をソファの懐に沈め、今週のファッション誌を開き直した${maru.name}は、オレンジ色の暖炉に囲まれて嬉しそうな顔をしている。`,
      );
      era.drawLine();
      await you.say_and_wait(`これが最後だ。`, true);
      await era.printAndWait(`書類をフォルダにまとめ、痺れた両脚を動かす。`);
      await maru.say_and_wait(`${callname}お疲れさま。次の予定は何？`);
      await era.printAndWait(
        `緩んだ筋肉を一瞬で引き締め、いつもの状態に戻った${maru.name}が、立ち上がった ${you.name} を見ている。`,
      );
      await you.say_and_wait(`予定か？`);
      await era.printAndWait(
        `以前のクリスマスは、一人でトレーニング室でメモを整理していた ${you.name}。`,
      );
      await you.say_and_wait(`うん——そうだな、`);
      await maru.say_and_wait(`一緒に外で祝わない？`);
      await you.say_and_wait(`トレーニング室で休む`, true);
      await era.printAndWait(
        `期待した顔の${maru.name}を見て、${you.name} は後半を飲み込んだ。`,
      );
      await maru.say_and_wait(`今すぐ出発！`);
      await era.printAndWait(`${maru.name}の熱い誘いで、二人は合意した。`);
      era.drawLine();
      await era.printAndWait(`震えるエンジン音の中、愛車が始動した。`);
      await era.printAndWait(
        `黒い空。時折吹く寒風が、行き交う生き物を容赦なく刈り取る。`,
      );
      await you.say_and_wait(`はっくしょん！`);
      await era.printAndWait(`強い風が服と肌の隙間から入り込んだ。`);
      await you.say_and_wait(`寒いな。でもこのあと雪も降る。`);
      await era.printAndWait(`この先の予定に、思わず絶望する。`);
      await maru.say_and_wait(
        `——そういえば、テイオー${
          maru.couple_title
        }の成長、予想より早いのね。後輩がそんなに頑張ってると、${maru.elder_sibling_sex_title}も興奮してくるわ。`,
      );
      await era.printAndWait(
        `何か口実をつけて${maru.uma_sex_title}に抱きついて暖を取りたいと思いながら、体を縮めて寒さに耐える。`,
      );
      await you.say_and_wait(`マフラーを持ってくるんだった。`, true);
      await maru.say_and_wait(
        `……百貨店であのクリスマスのキャンドルディナーを出してるわ。一緒に行ってみない？`,
      );
      await era.printAndWait(
        `吹き荒れる寒風の中、${maru.name}の言葉は遠い空のようだ。`,
      );
      await you.say_and_wait(`寒い。`, true);
      await maru.say_and_wait(`……それより私は、あ、着いた！`);
      await era.printAndWait(`少し先が百貨店だ。`);
      era.drawLine();
      await era.printAndWait([
        maru.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        { content: 'かん', color: maru.color },
        'ぱい！」',
      ]);
      await era.printAndWait(
        `${maru.name}の言う特価レストランで、二人は杯を上げて祝日を祝った。`,
      );
      await maru.say_and_wait(
        `今はまだお酒は飲めないけど……ジュースの味も悪くないわ♪`,
      );
      era.printButton(`「もうすぐ、${maru.name}も飲めるようになる。」`, 1);
      await era.input();
      await maru.say_and_wait(
        `その日が来たら、${callname}は徹夜まで付き合ってね。`,
      );
      await era.printAndWait(
        `窓の外の空から雪が一枚落ち、それから無数の雪がその足跡を追って地面へ降りた。`,
      );
      await you.say_and_wait(
        `その日のために、この先のトレーニングも頑張らないと！`,
      );
      await era.printAndWait(
        `冷たく美しいそれらは自然の精霊のようで、気ままに空から地上へ遊びに来る。`,
      );
      await maru.say_and_wait(`雪ね。かわいい。`);
      await era.printAndWait(
        `何かを思い出したようで、${maru.name}は外の雪を物思いにふけって見つめている。`,
      );
      await you.say_and_wait(`${maru.name}は雪が好きか？`);
      await era.printAndWait(
        `飲み干したグラスを揺らし、${maru.teen_sex_title}の思考は遠い過去へ戻ったようだ。`,
      );
      await maru.say_and_wait(`……あ！ ごめん、ついよそ見してたわ。`);
      await era.printAndWait(
        `${you.name}の存在に今気づいたように、慌てて応える${maru.name}はかわいい隙を見せた。`,
      );
      era.printButton(`「いや、何でもない」`, 1);
      era.printButton(`「${maru.name}は雪が好きか？」`, 2, { disabled: true });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `同じ質問を繰り返すのは、${maru.name}にも気まずいだろう。`,
        );
        await era.printAndWait(`${you.name}は別の話題で流すことにした。`);
        await era.printAndWait(`夕食は、そんなよい空気の中で終わった。`);
      } else {
        await maru.say_and_wait(`ん？ 雪？`);
        await era.printAndWait(
          `少し悩んだあと、${maru.name}はそれでも口にした。`,
        );
        await maru.say_and_wait(`実は、すごく好きよ？`);
        await maru.say_and_wait(
          `むしろ朝起きてカーテンを開けたら、窓に雪が乗ってる景色が見たいの！`,
        );
        await you.say_and_wait(`どうしてそんな物憂げな顔をするんだ？`);
        await maru.say_and_wait(`${callname}も、そうじゃない？`);
        await era.printAndWait(`質問を受けず、別の問いを投げてきた。`);
        await maru.say_and_wait(`悩んだ顔をして、答えを探す探検者みたい。`);
        await era.printAndWait(
          `再びリズムを掴んだ${maru.name}は、いたずらっぽい笑顔を見せた。`,
        );
        await maru.say_and_wait(`でも、答えは実は簡単よ？`);
        await you.say_and_wait(`じゃあ答えは？`);
        await maru.say_and_wait(`教・え・な・い・${you.name}⭐`);
        await you.say_and_wait(
          `だめだ、急ぎすぎて${maru.sex}を警戒させたか。`,
          true,
        );
        await you.say_and_wait(`次の機会だ。`, true);
        await era.printAndWait(
          `そのあとトレーニングの話も少しして、楽しい夕食は一段落した。`,
        );
      }
      era.drawLine({ content: 'トレーナー寮の前' });
      await maru.say_and_wait(`バイバイ！`);
      await maru.say_and_wait(
        `はぁ、忘れるところだった！ ${callname}、これ、${you.name}に。`,
      );
      await era.printAndWait(
        `荷物たっぷりの後部座席から、きれいなリボンで包んだギフトボックスを取り出した。`,
      );
      await you.say_and_wait(`${maru.name}、これは？`);
      await maru.say_and_wait(`これで本当に、また明日！`);
      await era.printAndWait([
        you.get_colored_name(),
        ' の言葉はエンジンの轟にかき消され、箱を抱えたまま愛車が点になっていくのを見るだけだった。',
      ]);
      await you.say_and_wait(`とにかく、先に戻ろう。`);
      await era.printAndWait(
        `${maru.name}の気持ちであるギフトボックスを大切に抱え、ゆっくり部屋へ戻った。`,
      );
      await era.printAndWait(
        `金色のリボンを外し、箱の上をそっと開けると、幼いころ年長者から贈り物をもらったときみたいだ。`,
      );
      await era.printAndWait(`作りのきれいなマフラーと`);
      await maru.say_and_wait(
        `ごめんね、${callname}にもっといいものを用意したかったけど、今はこのブランドしかなくて。気にしないでね。メリークリスマス！`,
      );
      await era.printAndWait(`繊細で美しい字は、本人と話しているようだ。`);
      await you.say_and_wait(`サンキュー、${maru.name}。`);
      await era.printAndWait(`いつの間にか${you.name}も同化していた。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の思い';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`時間は早く、あっという間にまた新しい年だ。`);
      await era.printAndWait(
        `${maru.name}と一緒に味わった酸いも甘いも、今はすべてよい思い出になった。`,
      );
      await era.printAndWait(
        `今日は法定の休日だ。トレーナー寮でだらけて過ごすのも、あまりに退屈だ。`,
      );
      await era.printAndWait(
        `『適当にぶらつこう』と思ったのに、足は気づかないうちにまたトレセンへ向かっていた。`,
      );
      await you.say_and_wait(`来たからには、トレーニング室を見ていこう`);
      await era.printAndWait(
        `決めたあと、${you.name} はトレーニング室へ向かった。`,
      );
      era.drawLine({ content: 'トレーニング室' });
      await era.printAndWait(
        `いつものトレーニング室なら、「また仕事か」という苛立ちが消えない。`,
      );
      await era.printAndWait(
        `だが休日に『ちょっと見ていこう』という気持ちで戻ってくると。`,
      );
      await era.printAndWait(
        `${maru.name}と次の方針を話し、おいしいケーキを一緒に味わい、ソファにくっついて重賞の映像に夢中になる。`,
      );
      await era.printAndWait(`そのすべてが、昨日のことのようだ。`);
      await you.say_and_wait(`時間は本当に早いな。`);
      await era.printAndWait(
        `いつものトレーニング室を眺めているのに、場違いな錯覚がある。`,
      );
      await you.say_and_wait(`疲れすぎたか？`);
      await you.say_and_wait(`よし、屋上で風に当たって頭を冷やそう`, true);
      await you.say_and_wait(
        `……${maru.name}は今どこにいるんだろう。今頃どこかで騒いで過ごしてるのかもな。`,
      );
      await era.printAndWait(
        `トレーニング室の扉をそっと閉め、気分転換に屋上へ向かった。`,
      );
      era.drawLine({ content: '屋上' });
      await era.printAndWait(
        `多くの${maru.uma_sex_title}は新年を仲間や自分のトレーナーと過ごし、休みのあいだに去年の悩みを振り払う`,
      );
      await era.printAndWait(
        `いつも騒がしい学園が、今は静かな一面を見せている。`,
      );
      await era.printAndWait(
        `屋上から見下ろすと、トレセン学園全体が視界の下にある`,
      );
      await you.say_and_wait(
        `ここで「俺は三冠を取る${maru.uma_sex_title}にふさわしい男になる」と叫ぶのが雰囲気に合うんだろうな`,
        true,
      );
      await you.say_and_wait(`誰もいないけど、さすがに恥ずかしい`, true);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `「俺は${maru.name}にふさわしい${you.phy_sex_title}になる！！！」`,
        {
          align: 'center',
          color: you.color,
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
      await era.printAndWait(
        `トレーナーの身分も、大人の矜持も全部後ろに放り、勢いで自分でも驚く声を出した。`,
      );
      await era.printAndWait(`禁忌を破った興奮で ${you.name} は顔が真っ赤だ。`);
      await you.say_and_wait(`さっぱりした。`);
      await you.say_and_wait(`誰も屋上に気づいてないうちに、早く離れよう。\n`);
      await maru.say_and_wait(`あら？ ${callname}？`);
      await era.printAndWait(`野生の${maru.name}が現れた！`);
      await you.say_and_wait(`えええ？ ${maru.name}がどうしてここに？`, true);
      await you.say_and_wait(`はは、人生終わった`, true);
      await you.say_and_wait(`人のいない島で余生を過ごそう。`, true);
      era.printButton(`「悪い、${you.name}は人違いだ。」`, 1);
      await era.input();
      era.printButton(`「今の俺は、ごく普通のトレーナーだ。」`, 1);
      await era.input();
      await maru.say_and_wait(
        `……あら、この……ごく普通のトレーナー${you.adult_sex_title}。`,
      );
      await maru.say_and_wait(
        `さっきの叫び、勢いがあったわ。階段でも、その熱い声が聞こえたもの。`,
      );
      await maru.say_and_wait(`青春は素敵ね。`);
      await maru.say_and_wait(
        `でも、そういう言葉は、やはり当人の前でちゃんと言わないとね？`,
      );
      await maru.say_and_wait(
        `うちのトレーナーなら、満腔の気持ちをちゃんと述べるでしょうね。`,
      );
      await era.printAndWait(
        `強い羞恥で体が熱くなった ${you.name} は膝が折れ、倒れそうになった。`,
      );
      await you.say_and_wait(`本当にごめん。`, true);

      await era.printAndWait(`${maru.name}は静かに空を仰いでいる。`);
      era.printButton(
        `……テイオー${maru.couple_title}と遊びに行かないのか？`,
        1,
      );
      era.printButton(`「${you.name}の考えを教えてくれないか？」`, 1, {
        disabled: true,
      });
      await era.input();
      await era.printAndWait(
        `${maru.name}は機嫌よく懐かしい曲を口ずさんでいる。`,
      );
      await you.say_and_wait(`寂しいのか？`, true);
      era.printButton(`「こんな寒い日に、どうして屋上なんだ？」`, 1);
      era.printButton(`「${you.name}は何を考えてるんだ？」`, 1, {
        disabled: true,
      });
      await era.input();
      await era.printAndWait(
        `本当の気持ちを知るため、${you.name} はそのまま一緒に欄干に寄りかかって話し始めた`,
      );
      await maru.say_and_wait(
        `去年はテイオー${
          maru.couple_title
        }と新年パーティーをしたのに、今年は自分のトレーナーのところへ行けって押し出されたの`,
      );
      era.printButton(
        `テイオー${maru.couple_title}は${you.name}を気にかけてるんだな`,
        1,
      );
      await era.input();
      await era.printAndWait(`${maru.name}から芳しい匂いが漂ってきた、`);
      await you.say_and_wait(
        `シャンプーか？ 今日はどうしてこんなにいい匂いなんだ`,
        true,
      );
      await maru.say_and_wait(
        `${callname}もそう思う？ ${maru.couple_title}は希望に満ちた苗よ`,
      );
      await maru.say_and_wait(`いつか風と雨の縛りを破って、大樹になる`);
      await era.printAndWait(
        `${maru.name}の期待に満ちた言葉に比べ、空を見る${maru.sex}の様子は思いに沈んでいる。`,
      );
      era.printButton(`「${maru.name}は大樹になりたくないのか？」`, 1);
      await era.input();
      await maru.say_and_wait(`大樹より、私は優しい風になりたいの。`);
      era.printButton(`「風？」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}、空を自由に吹く風に気づいてないの`);
      await maru.say_and_wait(`空を吹く風になれたら、後輩たちが悩んでるときに`);
      await maru.say_and_wait(
        `あと一歩で成功しそうなとき、ため息のときに${maru.couple_title}を励ますことができる`,
      );
      await you.say_and_wait(`${maru.name}は、今でも十分やってる。`);
      await you.say_and_wait(`今は新年を思い切り楽しもう`);
      await maru.say_and_wait(`あちゃー、このままじゃ私らしくないわ。`);
      await maru.say_and_wait(`${callname}、何か予定ある？`);
      era.printButton('「今日は芝で練習しよう」（スピード+20）', 1);
      era.printButton(
        '「一緒に出かけて、嫌なことを全部払おう」（体力+200）',
        2,
      );
      era.printButton(
        '「今日はトレーニング室でゆっくり休もう」（スキルPt+100）',
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait('うんうん、芝を駆けたら何もかも浮き雲よ！');
          await maru.say_and_wait(`さすが${callname}、私の心がわかってる。`);
          await era.printAndWait(`${maru.name}はまた元気を出した`);
          await maru.say_and_wait('OK! じゃあ今すぐ出発');
          await era.printAndWait(
            `芝で一日トレーニングしたあと、トレーニング室で小さく祝った`,
          );
          break;
        case 2:
          await maru.say_and_wait(
            `なに？ ${callname}は${maru.elder_sibling_sex_title}とデートしたいの？`,
          );
          await maru.say_and_wait(
            '気が早いのね。デートのルートはちゃんと計画しないと',
          );
          await maru.say_and_wait('じゃあ愛車で');
          era.printButton(`「デートなら、歩いて行こう」`, 1);
          await era.input();
          await maru.say_and_wait(`うん——`);
          era.printButton(
            `「カップルなら、歩いて行ったほうが雰囲気出るだろ」`,
            1,
          );
          await era.input();
          await maru.say_and_wait(`${callname}がそこまで言うなら`);
          await maru.say_and_wait(`たまの散歩も、違う感じが味わえるわね⭐`);
          await era.printAndWait(`じゃあ今すぐ出発`);
          await era.printAndWait(
            `トレーニング室に戻ったころ、二人とも力尽きてソファに寄りかかっていた`,
          );
          break;
        case 3:
          await maru.say_and_wait(
            `そうね、こんな寒い日は暖かいトレーニング室にいるのが正解ね`,
          );
          era.printButton(`「トレーニング室のおやつとみかんを出そう」`, 1);
          await era.input();
          await maru.say_and_wait(`ふふ、じゃあ私がみかんを剥くわ。`);
          await era.printAndWait(
            `こうしてこの日は囲炉裏に当たりながら、よい空気で過ごした。`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_5: (() => {
    const title = '冬と春の境';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`トレーニング場`);
      await era.printAndWait(
        `${maru.uma_sex_title}たちはここで汗を流し、希望の未来へ進む。`,
      );
      await era.printAndWait(
        `朝日杯を経て、${you.name}たちは目を皐月賞の前哨戦——スプリングステークスに向けた。`,
      );
      await maru.say_and_wait(
        `予定どおり、第三コーナーを回ったら、今がスパートのとき！`,
      );
      await maru.say_and_wait(`このままアクセルを一気に踏み込むわ!`);
      await era.printAndWait(
        `逃げを取る${maru.uma_sex_title}は、他の走法の${maru.uma_sex_title}に比べ、序盤と中盤に注意の大半を置く。`,
      );
      await era.printAndWait(
        `序盤と中盤で作った優位をしっかり固定して、そのまま優位を取る考えだろう。`,
      );
      await era.printAndWait(
        `レースでは、同じ逃げを取る複数頭が、序盤と中盤で死闘を繰り広げることが多い。`,
      );
      await era.printAndWait(
        `こうしてレースをハイペースに持ち込み、差しと追込の${maru.uma_sex_title}のリズムを崩す。`,
      );
      await era.printAndWait(
        `だが、まだ触れていない先行は、逃げ同士の戦いで終盤に速度を保てなくなったところで、温存した体力を一気に爆発させて優位を取る。`,
      );
      await era.printAndWait(`螳螂捕蝉、黄雀在後、か？`);
      await era.printAndWait(
        `しかし、${maru.name}が逃げを選んだからではない。そうではなく`,
      );
      await you.say_and_wait(
        `怪物と呼ばれるだけの${maru.uma_sex_title}だ`,
        true,
      );
      await era.printAndWait(
        `走ることを楽しむうちに、常人には届かない速度を、気づかないうちに手に入れた。`,
      );
      era.printButton(`「お疲れさま、少し休もう。」`, 1);
      await era.input();
      await maru.say_and_wait(`は……はあ……ふ～`);
      await era.printAndWait(`周りの芝は台風が通ったみたいに荒れている。`);
      await maru.say_and_wait(`ありがとう♪`);
      await era.printAndWait(
        `${you.name}が渡したタオルを受け取り、${maru.name}は額の汗を拭いた。濡れた長い髪からバニラの匂いが ${you.name} の鼻に入る。`,
      );
      await era.printAndWait(
        `走ったあとに心からの満足を見せる、それが${maru.name}の本当の姿なのかもしれない。`,
      );
      era.printButton(`「懐かしい匂いだな。」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}の濡れた髪をタオルで乾かしながら、話題を探す。`,
      );
      await maru.say_and_wait(`${callname}、匂いに興味があるの？`);
      await you.say_and_wait(`うん、いい体の匂いだ。`);
      await maru.say_and_wait(`ふふ～、体の匂いみたいだけど、これは香水よ。`);
      await maru.say_and_wait(`気分転換に、この香りを選んだの。`);
      await maru.say_and_wait(`でも${callname}の反応を見る限り。`);
      await maru.say_and_wait(`なかなか受けがいいみたい。`);
      await maru.say_and_wait(
        `うん、${maru.elder_sibling_sex_title}もずっと流行の最前線に立ってるみたいね。`,
      );
      await era.printAndWait(`${maru.sex}の機嫌は、さらによくなったようだ。`);
      await you.say_and_wait(
        `流行にはあまり詳しくないけど、${maru.name}はいつもすごく魅力的だ。`,
      );
      await maru.say_and_wait(
        `${callname}がそう言っても、ご褒美は出ないわよ？`,
      );
      era.printButton(`「本当にいらない」`, 1);
      era.printButton(`「もう、すごくいい思い出をもらった」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`え——`);
        await maru.say_and_wait(
          `${callname}がそんな言い方すると、ちょっとかわいいわ～`,
        );
        await era.printAndWait(`${maru.name}は${you.name}の頭を軽くなでた。`);
        await maru.say_and_wait(
          `ふんふんふん～、やっぱりこういう${callname}がいちばんかわいい♪`,
        );
      } else {
        await maru.say_and_wait(`え——`);
        await era.printAndWait(
          `${maru.name}は不思議そうな顔で${you.name}を見た。`,
        );
        await maru.say_and_wait(
          `トレーナー……${callname}、そういう言い方はずるいわ。`,
        );
        await maru.say_and_wait(
          `……${callname}、他の子にも同じこと言ってるの？`,
        );
        await era.printAndWait(
          `困ったことに出会ったみたいに、${maru.name}は${you.name}をじっと見つめた。`,
        );
        await maru.say_and_wait(
          `${callname} がそんな奔放な人になったら、${maru.elder_sibling_sex_title}も傷つくわよ？`,
        );
        await you.say_and_wait(`本当にごめん。次はない。`);
        await maru.say_and_wait(
          `はぁ、とにかく、他の子には絶対言わないで。今回の相手が私ならまだいい。いや、私でもだめ。`,
        );
      }
      await you.say_and_wait(`そういえば、${maru.name}。`);
      await you.say_and_wait(`急だけど、ずっと気になってることがある。`);
      await maru.say_and_wait(
        `あら、${callname}にも${maru.elder_sibling_sex_title}に尋ねるときがあるの？`,
      );
      await maru.say_and_wait(
        `安心して。知ってる部分は、ちゃんと${you.name}に教えるわ。`,
      );
      await era.printAndWait(
        `${you.name}は汗を拭いたタオルの水を絞り、畳んでバッグに戻した。`,
      );
      await you.say_and_wait(
        `${maru.name}はいつも後輩に人気だ。だから思うんだけど。`,
      );
      await you.say_and_wait(
        `もしかして、あくまでもしかしだ。${maru.name}、${you.name}`,
      );
      await you.say_and_wait(`${maru.name}の願いは、何なんだ？`);
      await maru.say_and_wait(
        `うん——庭の庭師みたいに、雑草だらけの土に種を埋める。`,
      );
      await maru.say_and_wait(
        `水をやり、土をほぐし、肥料をやる。外がどう変わっても、ただ期待する。`,
      );
      await maru.say_and_wait(
        `時には嵐に遭い、土をほぐすときに厄介な雑草にも会う。でも、自分の執念で芽を出した花たちを見て。`,
      );
      await maru.say_and_wait(
        `美しい花がやっと咲く瞬間、万感胸に迫って流す喜びの涙。それが、私の存在する意味だと思う。`,
      );
      await you.say_and_wait(
        `だから、${maru.name}はずっと黙って頑張ってたんだな。`,
      );
      await maru.say_and_wait(
        `もちろん。こうしてまだ若い後輩たちをゆっくり進ませて、${
          maru.couple_title
        }が実を結ぶときを待つ。`,
      );
      await maru.say_and_wait(`すべての苦労は、相応の報いを得る。`);
      await era.printAndWait(
        `昂ぶった感情もなく、${maru.name}は穏やかに自分の夢を話した。`,
      );
      await you.say_and_wait(`……きれいだな、${maru.name}。`);
      await you.say_and_wait(`ありがとう。この先もよろしく。`);
      await maru.say_and_wait(`こちらこそ、よろしくね。`);
      await era.printAndWait(
        `冬の寒さはまだ残っている。だが ${maru.name} の笑顔は、${you.name}に温かさを感じさせた。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru ハヤカワタヅナ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, falcon, minoru, you, callname) => {
      await era.printAndWait(
        `住んでいるトレーナーアパートからトレセンへ来ると、今日の空気はいつより甘い。`,
      );
      await era.printAndWait(
        `トレセンの生徒たちが、朝からいつもの生気のない顔ではなく、二人組で贈り物をもらう人の表情を興奮して話している。`,
      );
      await era.printAndWait(`バレンタインがまた来たと気づいた。`);
      await era.printAndWait(
        `${maru.uma_sex_title}からチョコをもらったらどう返すか考えながらトレーニング室の前まで来たが、声をかけてくる人はいなかった。`,
      );
      await you.say_and_wait(
        `リア充は爆発しろ。FFF団の聖火が${you.name}たちを焼き尽くせ。`,
        true,
      );
      await era.printAndWait(
        `呪いながらも、空気に糸を引く甘さから逃げるように、当て所なく走った。`,
      );
      await era.printAndWait(`それから、誰かにしっかりぶつかった。`);
      era.printButton(`「悪い」`, 1);
      await era.input();
      await era.printAndWait(`軽い衝突なのに、この匂いは意外と馴染みがある。`);
      await maru.say_and_wait(`ハロー、${callname}？`);
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `目の前の${maru.teen_sex_title}と大きな袋のチョコを見て、${you.name}は考え込んだ。`,
      );
      await you.say_and_wait(`今年もこんなに多いのか？`);
      await maru.say_and_wait(
        `去年入学した後輩と、トレセンを出たばかりの${maru.uma_sex_title}たち。気づいたらこんなに溜まってたわ。`,
      );
      await era.printAndWait(
        `このままじゃどうしようもない。二人でチョコを主食にしても……いや、一人じゃ食べきれない。`,
      );
      await you.say_and_wait(`受け取るのも受け取らないのも、進退窮まったな。`);
      await era.printAndWait(`このチョコを処理する方法はないか？`);
      await you.say_and_wait(
        `まあ、ずっと支えてくれたファンへの贈り物にしよう。`,
      );
      await you.say_and_wait(`この数なら、ファンサービスとしては十分すぎる！`);
      await maru.say_and_wait(`でも会場はどこがいい？`);
      await era.printAndWait(`俺は`);
      era.printButton(`「スタジオを借りて臨時会場にしよう！」`, 1);
      era.printButton(`「商店街でストリートライブにしよう！」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`いい感じね。じゃあそれで。`);
        await era.printAndWait(
          `${you.name}は以前連絡した有名な監督に空き部屋を尋ね、すぐ返事が来た。`,
        );
        await era.printAndWait(
          `ウマ推しで夕方にファン感謝会を開くと告知すると、すぐ大量に拡散された。`,
        );
        await era.printAndWait(
          `ファン感謝会が無事終わったのはさておき、チョコがなくても${maru.name}と握手したがるファンが多かった。`,
        );
        await era.printAndWait(
          `${maru.name}が笑顔のまま3時間立ち続けたのを見て、${you.name}はアイドルという言葉に深い畏敬を持った。`,
        );
        await era.printAndWait(
          `翌日のファッション誌に、${maru.name}潮流という見出しが載った。`,
        );
      } else {
        await maru.say_and_wait(
          `ストリートライブ？ ファルコンがやりそうなことね。`,
        );
        await maru.say_and_wait(`意外と面白いかも！`);
        await era.printAndWait(
          `${falcon.name}にゲリラライブのやり方と、${
            minoru.name
          }の追跡から逃げるコツを教わった。`,
        );
        await era.printAndWait(
          `ウマ推しで夕方に商店街でゲリラライブすると告知すると、すぐ大量に拡散された。`,
        );
        await era.printAndWait(
          `ファン感謝会が無事終わったのはさておき、チョコがなくても${maru.name}と握手したがるファンが多かった。`,
        );
        await era.printAndWait(
          `${maru.name}が笑顔のまま3時間立ち続けたのを見て、${you.name}はアイドルという言葉に深い畏敬を持った。`,
        );
        await era.printAndWait(
          `そのあと、熱心な店主たちから日用品をたくさん無料でもらった。`,
        );
      }
      await you.say_and_wait(`やっと終わった。`);
      await era.printAndWait(
        `熱心なファンに一人ひとり応えたあと、荒れ果てた現場に残ったのは${you.name}たち二人だけだった。`,
      );
      await you.say_and_wait(`お疲れさま。本当にお疲れさま。`);
      await era.printAndWait(
        `${you.name}は絶対の敬意を込めて${maru.name}を見た。`,
      );
      await era.printAndWait(`夕日の下では、神のように侵しがたい。`);
      await maru.say_and_wait(
        `アイドル活動を支えてくださる皆さま、${maru.name}です。これからもよろしく——あ、${
          callname
        }。`,
      );
      await era.printAndWait(`一瞬、何と返していいかわからない。`);
      await maru.say_and_wait(`そういえば、これもあるわ♪`);
      await era.printAndWait(
        `${maru.name}は裏から、きれいに包んだチョコの箱を出した。`,
      );
      await maru.say_and_wait(`ハッピーバレンタイン、${callname}♪`);
      await era.printAndWait(
        `${you.name}は${maru.name}からチョコを受け取った。`,
      );
      await maru.say_and_wait(
        `この先も${maru.name}と一緒に進んでね、${callname}♪`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_7: (() => {
    const title = 'アイドル';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`トレーニング室`);
      await era.printAndWait(`スプリングステークスまで、あと二週間。`);
      await era.printAndWait(
        `最後の書類を処理したあと、${you.name} はペンを置き、長い息を吐いた。`,
      );
      await you.say_and_wait(`やっと終わった。`);
      await you.say_and_wait(`でも。`);
      await era.printAndWait(`ずっと抱えていた疑問。`);
      await era.printAndWait(`強く押さえつけてきた。いや、思い出したくない。`);
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(`庭師。`);
      await you.say_and_wait(`いつも強者として問題に向き合う。`);
      await era.printAndWait(
        `教育者として、自分の経験でかわいい小さな${maru.uma_sex_title}をできるだけ助けたい。`,
      );
      await you.say_and_wait(`だが、庭師の道は、そんな理想の世界ではない。`);
      await maru.say_as_passer_by_and_wait(maru.uma_sex_title, `失礼します。`);
      await era.printAndWait(`痩せた小さな${maru.uma_sex_title}が入ってきた。`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `あの、マルゼン先輩はこちらですか？`,
      );
      await you.say_and_wait(
        `${maru.name}は用事で少し席を外してる。${you.name}、ここで座って休んでいってくれ。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `そうですか……あ、ありがとうございます！`,
      );
      await era.printAndWait(
        `${you.name}はニンジンジュースを缶一本、ソファのテーブルに置いた。`,
      );
      await era.printAndWait(
        `${you.name}は途中まで見ていた、${maru.name}の朝日杯の映像を開いた。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `え、これマルゼン先輩の！`,
      );
      await you.say_and_wait(`${you.name}も映像は好きか？`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `はい！ マルゼン先輩のゴールのクローズアップ、五六回は繰り返し見ました！`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `というか、マルゼン先輩の振り方を真似たら、私もG3で勝てるかも！`,
      );
      await you.say_and_wait(`……そうなのか？`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `え……うん。本格化が早かったので、中学のころから${maru.uma_sex_title}として出てました。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `でも三年経っても、メイクデビュー以外は、いちばんいい成績でもG3の5着です。`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}は手のニンジンジュースを抱え、中のオレンジ色の液体を見つめた。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `たくさん努力もしたんです。でも、ほとんど成長がありませんでした。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `同じことを繰り返して、繰り返して、ぼんやり過ごしてきました。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `方法がおかしいのかも、と思ったこともあります。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `でも、頭の中で少し考えただけで、そのまま置きました。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `たぶん、私は${maru.uma_sex_title}に向いてない。別の道を探す時期なのかも。`,
      );
      await era.printAndWait(
        `言い終えると、${maru.uma_sex_title}は黙って${you.name}と${maru.name}が取ったトロフィーを見つめた。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `${maru.uma_sex_title}の世界は、払えば返ってくる優しい世界ではない。`,
      );
      await era.printAndWait(`それでも。`);
      era.printButton(`「払ったものは、いつか返ってくる」`, 1);
      era.printButton(`「早く退くのも、一つの選択だ」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`払ったものは、いつか返ってくる。`);
      } else {
        await you.say_and_wait(`早く退くのも、一つの選択だ。`);
      }
      await era.printAndWait(
        `心が乱れている。この${maru.uma_sex_title}も、そう思っているのだろう。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `……ありがとう。`,
      );
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `あ、すみません、長く居すぎました。マルゼン先輩がまだ来ないなら、先に失礼します。`,
      );
      await era.printAndWait(
        `飲み終わった缶をゴミ箱に入れ、${maru.uma_sex_title}は${you.name}に別れを告げた。`,
      );
      await you.say_and_wait(`${you.name}の武運を祈る。`);
      await maru.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `うん、さようなら。`,
      );
      await era.printAndWait(
        `苦い笑顔の${maru.uma_sex_title}は、トレーニング室の扉をそっと閉めた。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_9: (() => {
    const title = '殿堂入り週（因子継承）';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`講堂\n`);
      await era.printAndWait(
        `殿堂入り週は、トレセンでもっとも大事な行事のひとつだ。`,
      );
      await era.printAndWait(
        `この日、多くの殿堂入り${maru.uma_sex_title}がトレセンで講演する。`,
      );
      await era.printAndWait(
        `先輩たちの経験は、デビューしたばかり／まだデビューしていない${maru.uma_sex_title}たちにとって貴重だ。`,
      );
      await era.printAndWait(
        `その重要性から、${you.name}と${maru.name}は早く講堂へ来て講演の始まりを待っていた。`,
      );
      await maru.say_and_wait(
        `レース場で先輩たちと競えたら、意外と面白いかも♪`,
      );
      await era.printAndWait(
        `講演台の殿堂入り${maru.uma_sex_title}たちを見て、${maru.name}は期待した顔をした。`,
      );
      await era.printAndWait(
        `${you.name}は横でキーワードを素早く拾い、パソコンに記している。`,
      );
      await maru.say_as_passer_by_and_wait(
        `殿堂入り${maru.uma_sex_title}A`,
        `……皆さんご存じのとおり、この世界は三女神さまが創られた……`,
      );
      await era.printAndWait(
        `台上で講演する殿堂入り${maru.uma_sex_title}が、突然三女神さまに触れた。`,
      );
      await maru.say_and_wait(`そういえば、${callname}は知ってる？`);
      await era.printAndWait(
        `横に座った${maru.name}が視線を${you.name}へ向けた。`,
      );
      await maru.say_and_wait(
        `中庭の三女神像に祈ると、他の世界からの祝福がもらえるらしいの。`,
      );
      await maru.say_and_wait(`不思議な力まで起きることもあるって。`);
      await era.printAndWait(
        `周りに雷のような拍手が起き、講演した${maru.uma_sex_title}が台を下り、行事は次の段階へ入った。`,
      );
      await era.printAndWait(
        `その隙間に、${you.name}は振り返って${maru.name}を見た。`,
      );
      await era.printAndWait(
        `周年記念の服に着替えた${maru.sex}が、${you.name}の返事を待っている。`,
      );
      era.printButton(
        `「${maru.name}が壇上に立つ瞬間を、楽しみにしてる。」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`なに？ ${callname}、私をそんなに高く見てるの？`);
      era.printButton(
        `こんなに優しくて大人な大${maru.elder_sibling_sex_title}は、かなり珍しいよ。`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`この先、ちゃんとトレーニングしないとね！`);
      await you.say_and_wait(`一緒に頑張ろう！`);
      await era.printAndWait(
        `トレーニング室に戻ったあと、${you.name}たちは並んで映像を見て、深夜まで過ごした。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_sprg_sta: (() => {
    const title = 'スプリングS前・火の蘭';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`控え室`);
      await era.printAndWait(
        `スプリングステークス。皐月賞の前哨戦として、多くの${maru.uma_sex_title}が全力を尽くす場。`,
      );
      await era.printAndWait(`だがこのとき。`);
      await you.say_as_passer_by_and_wait(
        `スタッフ`,
        `三度確認しました。${maru.name}を含めて、出走は五頭だけです。`,
      );
      await you.say_and_wait(`あ……ありがとう。`);
      await era.printAndWait(
        `${maru.name}にとって、レース場で得られる楽しさは、レースの格と出走する${maru.uma_sex_title}に比例する。`,
      );
      await era.printAndWait(
        `つまり格が上がるほど、出られる${maru.uma_sex_title}の数と質も上がり、${maru.name}はより楽しむ。`,
      );
      await era.printAndWait(`それだけならまだいい。`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `ああ、わかるよ。このレースは絶対${maru.name}の勝ちだ。`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}B`,
        `考える余地ある？ ${maru.name}以外が勝つなんて、${
          maru.sex
        }をどうやって負かすか想像もつかない。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走する${maru.uma_sex_title}A`,
        `もうどうでもいい。どうせ次は${maru.name}の勝ちだ。体力を残して次のレースに備えるよ。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走する${maru.uma_sex_title}A`,
        `そもそも、あの怪物に勝てる者はいない。`,
      );
      await maru.say_and_wait(`${callname}、準備できたわ`);
      await era.printAndWait(`場違いな声が ${you.name} の回想を遮った。`);
      await you.say_and_wait(`うん、今回もレースを楽しもう。`);
      await maru.say_and_wait(
        `ええ、でも今回の出走頭数は、最低要件を満たしただけらしいわ。`,
      );
      await maru.say_and_wait(`みんな、もう少し前向きならいいのに。`);
      await era.printAndWait(
        `${maru.name}の機嫌はあまりよくないようで、耳も下がっている。`,
      );
      era.printButton(
        `${maru.name}、これまでのトレーニングの成果を、会場の観客にしっかり見せよう`,
        1,
      );
      era.printButton(
        `${maru.name}の走りが見られれば、${maru.couple_title}はきっと考えを変える`,
        2,
      );
      if ((await era.input()) === 1) {
        await maru.say_and_wait(
          `うん、${callname}は観客席で私の走りを見てて！`,
        );
        await maru.say_and_wait(`この真っ赤な姿を、心にしっかり刻んで！`);
      } else {
        await maru.say_and_wait(`……`);
        await you.say_and_wait(
          `${maru.name}の背中で、気落ちしたみんなに希望を取り戻させよう`,
        );
        await you.say_and_wait(`いつものトレーニングみたいに。`);
        await maru.say_and_wait(`そうよ！`);
        await era.printAndWait(
          `${maru.name}の下がっていた耳が、またまっすぐ立った。`,
        );
      }
      await era.printAndWait(
        `まだ話したかったが、スタッフがマイクを調整する音が控え室まで届いた。`,
      );
      await maru.say_and_wait(`そろそろ私の出番ね。${callname}、またあとで！`);
      await you.say_and_wait(`どうして不安が走るんだ`, true);
      await era.printAndWait(
        `${you.name}はその不安を深くしまい、愛馬がレース場へ向かうのを見た`,
      );
    };
    f.title = title;
    return f;
  })(),
  sprg_sta_win: (() => {
    const title = 'スプリングS後・迷いの始まり';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `何の意外もなく、このレースは ${maru.name} の圧倒的な勝利だった。`,
      );
      await era.printAndWait(
        `同世代の ${maru.uma_sex_title} が次々に回避したせいだ。`,
      );
      await era.printAndWait(
        `相手の ${maru.uma_sex_title} たちのうち、いちばん強い一頭でも、無名のG3を一つ勝った程度だった。`,
      );
      await era.printAndWait(`この勝利で、本当に楽しさを感じられたのか？`);
      await you.say_as_passer_by_and_wait(
        `実況`,
        ` ${maru.name} ！ ${maru.name} がゴール！`,
      );
      await you.say_as_passer_by_and_wait(
        `実況`,
        `大差！ ${maru.name} の圧倒的な勝利！`,
      );
      await maru.say_and_wait(`……`);
      maru.print(`この勝利で、本当に楽しさを感じられたのか？`);
      await you.say_and_wait(`${maru.name}？`);
      await you.say_as_passer_by_and_wait(
        `ファンA`,
        `${maru.name}！ ${maru.name}！`,
      );
      await you.say_as_passer_by_and_wait(
        `ファンB`,
        `やっぱり ${maru.name} の勝ちだと思ってた！`,
      );
      await you.say_as_passer_by_and_wait(
        `ファンA`,
        `さすがスーパーカーと呼ばれる ${maru.uma_sex_title} ！ 見る目は間違ってなかった！`,
      );
      maru.print(`少し疲れたわ。`);
      await you.say_as_passer_by_and_wait(
        `ファンA`,
        `このまま圧倒的な実力で、弱い者を全部消しちゃえ！`,
      );
      maru.print(`控え室で勝負服を着替えていたときも。`);
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} A`,
        `どうせ勝てないのに、そんなに力を入れることある？`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} A`,
        `${maru.uma_sex_title}が走りをアイドルにする伝統なんて、配信者に淘汰されて当然よ。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} A`,
        `いっそ潮流に乗って配信者に転向して、引退すればいい。`,
      );
      maru.print(
        `ステージのあと、ひそひそ話す ${maru.uma_sex_title} たちのそばを通った。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `${maru.uma_sex_title}という仕事は、結局才能ある者の狩場なのよ。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `私たちみたいな普通の子にとって、レースは何度も引き立て役になる笑い話でしかない。気持ち悪い。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `だからね、芝で楽しさを感じられる人のことが、まったく理解できない。`,
      );
      await you.say_as_passer_by_and_wait(
        `出走 ${maru.uma_sex_title} B`,
        `ふあ、当時の自分は${maru.uma_sex_title}に憧れてたなんて、今思うと恥ずかしい。`,
      );
      era.drawLine();
      await you.say_and_wait(` ${maru.name}？`);
      await era.printAndWait(` ${maru.name} は絶対的な余裕で連勝を取った。`);
      await era.printAndWait(
        `皐月賞の前哨戦にすぎないが、この先の皐月賞も問題はないだろう。`,
      );
      await era.printAndWait(`そう思いながら、扉を押した。`);
      await maru.say_and_wait(`あ、${callname}、迎えに来てくれたの？`);
      await era.printAndWait(
        ` ${maru.name} は、見た目は普段とほとんど変わらない。`,
      );
      await maru.say_and_wait(
        ` ${maru.elder_sibling_sex_title} の走り、どうだった？`,
      );
      era.printButton(`「……かもな」`, 1); //be1
      era.printButton(`「……${maru.name}。」`, 2);
      era.print(
        '【警告。慎重に選ぶこと。さもなくば、すべてが取り返しがつかなくなる！】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`なに？`);
        era.printButton(`あ、悪い、今ぼんやりしてた。`, 1);
        await era.input();
        await you.say_and_wait(
          `さすが ${maru.elder_sibling_sex_title}、すごくよかった！`,
        );
        await maru.say_and_wait(`うんうん、私もそう思うわ。`);
        await maru.say_and_wait(`うん——このあと、どこで食べる？`);
        await maru.say_and_wait(`${callname}、おすすめある？`);
        await you.say_and_wait(`サイゼリヤに行こう。あそこは美味しい。`);
        await maru.say_and_wait(`うん！ じゃあ一緒に行ってみましょう。`);
      } else {
        await maru.say_and_wait(`おや、${callname}、どうしたの？`);
        await you.say_and_wait(`明日の夜、空いてるか？`);
        await you.say_and_wait(`話したいことがある。屋上で。`);
        await maru.say_and_wait(`ここで話せないことなの？`);
        await you.say_and_wait(`悪い、一度だけ任せてくれ。お願いだ。`);
        await maru.say_and_wait(`え？ ${callname}？`);
        await you.say_and_wait(`お願いだ。`);
        await era.printAndWait(`${you.name} は深く頭を下げた。`);
        await maru.say_and_wait(`そこまでするなんて……`, true);
        await maru.say_and_wait(` ${callname} がそこまで言うなら。`);
        await maru.say_and_wait(`わかったわ。`);
        await era.printAndWait(` ${maru.name} は少し憂えた顔であなたを見た。`);
        await you.say_and_wait(`では、明日の夜9時、学園の屋上で。`);
        await era.printAndWait(
          `背中はすでに汗で濡れていた。最悪の覚悟はしていたが、${maru.name} の同意が取れて、${you.name} は長い息を吐いた。`,
        );
        await maru.say_and_wait(
          `${maru.elder_sibling_sex_title}は、${callname} を傷つけることをした？`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_12: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `ファン感謝祭は、レース場の${maru.uma_sex_title}たちを支えてきたファンへの感謝のために開かれる祭りだ。`,
      );
      await era.printAndWait(
        `この日、トレセンは門を開き、在学生は生徒会が組んだメインステージと副ステージで公演する。`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}の道を進む${maru.uma_sex_title}たちは、より多くの注目を集めがちだ。`,
      );
      await era.printAndWait(`ダンス室\n`);
      await maru.say_and_wait('いち、に、さん、し、余裕余裕♪');
      await maru.say_and_wait('ご、ろく、なな、はち、全然大丈夫♪');
      await era.printAndWait(
        `${you.name}は${maru.name}の最後の通しを見ている。`,
      );
      await maru.say_and_wait(`${callname}${you.name}、どう？`);
      era.printButton(`「懐かしい曲だ」`, 1);
      await era.input();
      await era.printAndWait(
        `世紀初頭のマイナー曲が耳に流れ、激しいドラムと明るいリズム、拍に合わせて歩幅を揺らす${maru.name}。`,
      );
      await era.printAndWait(
        `ふと学生時代に戻った気がする。放課後、少人数で最新のCDを話し合っていたあのころ。`,
      );
      await maru.say_and_wait(
        `${callname}、これは今いちばん新しい流行曲よ？ このままだと時代に置いていかれるわ。`,
      );
      await maru.say_and_wait(`そろそろ私の出番。`);
      await maru.say_and_wait(`${callname}は下でしっかり見てて。`);
      await era.printAndWait(`一部の来場者は、こういうレトロな音楽が好きだ。`);
      await era.printAndWait(
        `${maru.name}は、その来場者たちを過去の幻へ連れていった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sister_annoyance: (() => {
    const title = (maru) => `${maru.elder_sibling_sex_title}の悩み`;
    /**
     * トレーナーがマルゼンスキーを励まし、信じられたとき立て直す
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`屋上`);
      era.println();
      await era.printAndWait(`今日処理する資料を整理したあと、屋上へ来た。`);
      await era.printAndWait(
        `レース後の${maru.name}は少しおかしく、話すときも上の空だった。`,
      );
      await era.printAndWait(
        `錯覚かもしれない。だが友人として、${maru.sex} の問題をもっと深く知りたい。`,
      );
      await you.say_and_wait(
        `一気に全部解決できれば、それに越したことはない。`,
      );
      await era.printAndWait(
        `${maru.name}の力なら、どんな挫折も軽く越えられるはずだ。\n`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `${maru.name}の脛骨に損傷があります。`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `続けると、歩行と走行の能力が制限される可能性があります。`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `トレーニングは止めて、しばらくしっかり休んだほうがいいです。`,
      );
      await you.say_and_wait(`わかった。`);
      await era.printAndWait(
        `診断書をかばんに入れ、出ようとしたところで呼び止められた。`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `あなたが${maru.name}のトレーナーですね。`,
      );
      await you.say_and_wait(`そうです。`);
      await you.say_as_passer_by_and_wait(
        `医師`,
        `${maru.name}の脚は、思ったより脆いです。`,
      );
      await you.say_as_passer_by_and_wait(
        `医師`,
        `そのせいか、あなたも長くよく眠れていないようですね。`,
      );
      await you.say_and_wait(`そうです。`);
      await you.say_as_passer_by_and_wait(
        `医師`,
        `注目される${maru.uma_sex_title}を指導するトレーナーの圧力は、想像以上です。`,
      );
      await you.say_as_passer_by_and_wait(`医師`, '体を大事にしてください。');
      await you.say_and_wait(`……ありがとう。`);
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `思考は ${maru.name} の声に遮られた。約束の時間まで、まだ十分ほど余裕がある。`,
      );
      await you.say_and_wait(`え？ あ、ちょうど着いたばかりだ。`);
      await era.printAndWait(
        `白いワンピースの${maru.uma_sex_title}が屋上に現れた。`,
      );
      await maru.say_and_wait(` ${callname}、思ったより焦ってるみたいね。`);
      await you.say_and_wait(
        `ああ、今日はいい天気だとわかってたから、${maru.name}と過ごしたかった。`,
      );
      await you.say_and_wait(
        `よく見ると、${maru.name}は普段より美しいな。それに、ジャスミンの匂いがする。`,
      );
      await maru.say_and_wait(
        `${callname} が珍しく自分から誘ってくれたんだもの。きちんと着飾らないと出られないわ。`,
      );
      await you.say_and_wait(`そう言われると、こっちが失礼だったな。`);
      await era.printAndWait(
        `どこから切り出せばいいかわからず黙った。最後は${maru.name}のほうから話題を出した。`,
      );
      await maru.say_and_wait(
        ` ${callname} が普段頑張ってる姿、${maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'}な私、すごく感動してるわ。`,
      );
      await maru.say_and_wait(
        `どうやって ${callname} を休めさせようかずっと考えてたのに、${callname} からこのお願いが出るなんて。`,
      );
      await maru.say_and_wait(
        `実はね、ずっと神経を張り詰めなくていいの。もっと ${maru.elder_sibling_sex_title} に頼って。`,
      );
      await era.printAndWait(`${maru.name}に励まされ、神経もゆっくり緩んだ。`);
      await you.say_and_wait(
        `わかった。この先も${maru.name} ${maru.elder_sibling_sex_title}、よろしく。`,
      );
      await you.say_and_wait(`じゃあ、本題だ。`);
      await era.printAndWait(
        `緊張しすぎて真っ白だった頭も、ゆっくり整理できた。`,
      );
      await you.say_and_wait(`君のことを、もっと教えてほしい。`);
      await maru.say_and_wait(
        `私、${callname} といつも一緒にいるじゃない。何を今更？`,
      );
      await you.say_and_wait(`いや、そういうことじゃない。`);
      await era.printAndWait(
        `きっぱり首を振り、${maru.sex} の目を正面から見た。`,
      );
      await you.say_and_wait(
        `他人のプライバシーを探るのはよくないと、わかってる。`,
      );
      await you.say_and_wait(
        `でも、トレーニング室で休んでるとき、ふと見た${maru.name}の沈んだ顔。`,
      );
      await you.say_and_wait(
        `つらかった。重い石が胸に乗ったみたいで、そのとき気づいた。実は${maru.name}のことを、まだあまり知らない。`,
      );
      await you.say_and_wait(`だからこれは願いじゃない。宣告だ。`);
      era.printButton(`「${maru.name}のことを、もっと知りたい」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}の瞳が一気に開き、すばやく瞬きして、逃げたい視線をすぐ戻した。`,
      );
      await maru.say_and_wait(`同じ態度で返さないとね。`);
      await maru.say_and_wait(` ${callname} は、何を知りたいの？`);
      await you.say_and_wait(
        `知りたいのは、${maru.name}が最近どうしてこんなに沈んでるかだ。`,
      );
      await you.say_and_wait(
        `楽しさを感じられなくなったのか？ それとも、走ってる${maru.uma_sex_title}たちの自暴自棄を感じたからか？`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `${maru.name}はためらっている。${maru.sex} は、本当の気持ちを話すべきか考えている。`,
      );
      await maru.say_and_wait(`……ごめん。`);
      await era.printAndWait(`${maru.name}の声は、沈んでいるようだ。`);
      era.printButton(`「いや、こっちこそ。」`, 1);
      await era.input();
      await you.say_and_wait(`謝るべきなのは俺だ。急ぎすぎた。`);
      await you.say_and_wait(`ずっと待つ。君から話してくれる日が来るまで。`);
      await you.say_and_wait(
        `だから、胸を張って。君は俺が見たなかでいちばん美しい${maru.uma_sex_title}だ。`,
      );
      await maru.say_and_wait(`サンキュー、${callname}。`);
      await era.printAndWait(`${maru.name}はいつもの状態に戻った。`);
      await maru.say_and_wait(`さすが、頼れる大人ね。`);
      await maru.say_and_wait(
        `今の感じ、ずっと世話してた${you.sex_code !== 1 ? '妹' : '弟'}が急に自分を世話すると言い出したみたい。`,
      );
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}としては、気持ちが複雑ね——`,
      );
      await era.printAndWait(
        `${maru.name}は、一緒に育った${you.sex_code !== 1 ? '妹' : '弟'}を見るような慈愛の目をした。`,
      );
      await maru.say_and_wait(`じゃあ、約束よ——`);
      await maru.say_and_wait(
        `何があっても、${maru.elder_sibling_sex_title}に相談するのよ？`,
      );
      era.printButton(`「何があっても、${maru.name}にはちゃんと話す。」`, 1);
      await era.input();
      await you.say_and_wait(
        `頼れる大${maru.elder_sibling_sex_title}なら、どんな問題も軽く解決するだろ。`,
      );
      await maru.say_and_wait(`じゃあ、そう決めましょう。`);
      await you.say_and_wait(`こっちもだ`);
      await maru.say_and_wait(
        `そういえば今日はいい天気。愛車でドライブしましょう——`,
      );
      await you.say_and_wait(`いいな。`);
      await you.say_and_wait(`何か忘れてないか。`, true);
      await era.printAndWait(
        `談笑しながら愛車へ向かった。そのあと、悲鳴がトレセンに響いた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_16: (() => {
    const title = (maru) => `こんばんは、${maru.name} よ`;
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} minoru ハヤカワタヅナ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, minoru, you, callname) => {
      await era.printAndWait(`アパート。`);
      await you.say_and_wait(
        `この先のトレーニング計画は、一旦ここまでにしよう`,
        true,
      );
      await era.printAndWait(
        `柔らかい明かりの下、${you.name} はパソコンの前で休日に溜まった事務を処理している。昼のトレセンの熱い声援と違い、夜のトレーナー寮はひときわ静かだ。`,
      );
      await you.say_and_wait(`もう12時近いか`, true);
      await era.printAndWait(
        `最後の書類を理事長へ送ったあと、${you.name}は疲れた目をこすり、ソファに全身を預けた。`,
      );
      await you.say_and_wait(`風呂に入って、しっかり寝よう`, true);
      await era.printAndWait(
        `目を固く閉じ、一日の疲れを消化しようとする。それから大きく息を吸い、一日の苛立ちを体から出す。`,
      );
      await era.printAndWait(`ぶるぶるぶる`);
      await you.say_and_wait(`こんな時間に営業電話は来ないだろ`, true);
      await era.printAndWait(
        `体は動きたくないが、社畜の本能でスマホを開いた。`,
      );
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `担当の${maru.uma_sex_title}が深夜にかけてくる理由はわからない。それでも迷わず出た。`,
      );
      await maru.say_and_wait(`はい～ ${callname}、今夜の空、すごくいいわよ～`);
      await you.say_and_wait(`こっちは見慣れた景色以外、特別なものは何もない`);
      await you.say_and_wait(`それに、`);
      await era.printAndWait(
        `大きく息を吸い、まだ残る苛立ちがうっかり出ないようにした。`,
      );
      era.printButton(`「夜更かしすると肌がしわになる。早く寝ろ！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `たまんないわ><！ ${callname}、プレッシャーなことばかり。このままじゃさよならしかない。`,
      );
      await era.printAndWait(
        `スマホの顔文字を見て、使い方を思い出すのにまる十秒かかった。`,
      );
      await you.say_and_wait(
        `そういえば、${maru.name}はどうして急に電話してきた？`,
      );
      await maru.say_and_wait(
        `一回寝て起きたら、もう眠れなくなって。だから ${callname} を探しに来たの。`,
      );
      await you.say_and_wait(`そうか？`);
      await era.printAndWait(
        `とんでもない言葉が出た気がしたが、それでも聞き続けた。`,
      );
      await maru.say_and_wait(
        `最初は眠れなくて生気がなくなったけど、外の月を見てたら、ソファを取ったみたいな気分。特にトレセンを通るときの夜風の涼しさ、心が弾むわ⭐`,
      );
      era.printButton(`「まさか——」`, 1);
      await era.input();
      await era.printAndWait(
        `トレーナー制服に着替える前に、仮住まいの扉が開いた。`,
      );
      await maru.say_and_wait(`こんばんは、${callname} `);
      await you.say_and_wait(`え？`);
      await era.printAndWait(
        `${maru.sex}の笑みの中に、驚愕した自分が映っていた`,
      );
      await maru.say_and_wait(` ${callname}？`);
      era.drawLine();
      await era.printAndWait(
        `一通り説教したあと、${maru.name}はソファの上でおとなしく正座している。`,
      );
      await maru.say_and_wait(`ありがとう♪`);
      await era.printAndWait(
        `それから、気まぐれな客と一緒に机の上の雑物を片付け、インスタントの紅茶を ${maru.sex} に渡した。`,
      );
      await era.printAndWait(
        `紅茶をちびちび吸う${maru.name}を見て、思わずため息をついた。`,
      );
      await era.printAndWait(
        `こんな遅い時間に${maru.sex}を一人で帰すのも危ない。だが生徒を勝手に泊まらせるわけにもいかない。`,
      );
      await you.say_and_wait(`どうすればいい？`, true);
      await maru.say_and_wait(`あの、${callname}？`);
      await era.printAndWait(`${maru.name}が返事を待っている。ここは\n`);
      era.printButton(`今夜は${maru.sex}を泊める`, 1);
      era.printButton(`「送って${maru.sex}を帰す」`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`${callname}、顔色がよくないわ。`);
        await you.say_and_wait(
          `来週のトレーニング案で直すところを悩んでたから、顔色が悪い。`,
          true,
        );
        await maru.say_and_wait(`${callname}、お疲れさま。`);
        await era.printAndWait(
          `${maru.name}に習慣で頭をなでられる。最初は強く抵抗したが、長く続くと、トレーナーとしての矜持は鼻で笑う二声だけになった。`,
        );
        await maru.say_and_wait(`ごめんね。もうしない。`);
        await era.printAndWait(
          `前より儀礼的なごまかしではなく、今回の謝罪には、心配させたことへの後ろめたさが多い。`,
        );
        await era.printAndWait(
          `${maru.sex}のかわいそうな様子を見て、心を鬼にできず、またため息をついた。`,
        );
        await you.say_and_wait(
          `こんな時間に帰すのも心配だ。今夜はここに泊まれ。`,
        );
        await era.printAndWait(
          `パパラッチも、翌日のゴシップも、${
            minoru.name
          }の冷たい目と叱責と一か月分の給料も、もうどうでもいい。`,
        );
        await you.say_and_wait(
          `君は俺のベッドで寝てくれ。俺はソファで一晩だ。`,
        );
        await maru.say_and_wait(`ん——それは少し惜しいわね。`);
        await you.say_and_wait(`深夜の主犯は要求が多いな！`);
        await maru.say_and_wait(`ほ・ん・と・う・に・ご・め・ん！`);
        await you.say_and_wait(`そんな紛らわしい言い方をするな。`);
        await era.printAndWait(
          `galgameに出てきそうな恋愛喜劇が現実で起きた。喜ぶべきことなのに。`,
        );
        await era.printAndWait(
          `だが、完全武装のパパラッチが深夜に${maru.name}を招き入れたところを撮って、翌日の見出しになり、${
            minoru.name
          }に冷たい目で見られ、いちばん大事な給料が飛ぶ姿を思うと。`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`${you.name}は、かなり苦しむ一夜を過ごした。`);
      } else {
        await you.say_and_wait(`……${maru.name}、送っていく。`);
        await maru.say_and_wait(`え？ 本当に？`);
        await era.printAndWait(
          `激しく引っ張り合った末、${maru.name}を自分のアパートへ戻すよう説得した。`,
        );
        await era.printAndWait(
          `この行動が、${maru.sex}の想定のうちだったとは知らなかった。`,
        );
        await maru.say_and_wait(
          `こんな時間だし、${
            callname
          }もこっちに泊まって。こっちのパパラッチ、意外と多いのよ。`,
        );
        await maru.say_and_wait(
          `さっきの言い争いで、あの人たちも起きたでしょう？`,
        );
        await era.printAndWait(
          `こっちの${callname}も、翌日娯楽誌の見出しにはなりたくないでしょう？`,
        );
        await era.printAndWait(`これが本当の罠だと、突然気づいた。`);
        await maru.say_and_wait(`じゃあ、${callname}。おやすみ！`);
        await era.printAndWait(
          `${maru.name}の予備の毛布をかぶって、ソファで一晩を過ごした。`,
        );
        await era.printAndWait(
          `翌日、大ニュースの匂いを嗅いだパパラッチと知恵比べした話は、また別の冒険だ。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '皐月賞前・もう一度';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`レース前・会見`);
      await you.say_as_passer_by_and_wait(
        `記者A`,
        `${maru.actual_name_with_title}にお話を伺えて光栄です。`,
      );
      await you.say_as_passer_by_and_wait(
        `記者A`,
        `今回の目標も、皐月賞の勝利ですか？`,
      );
      await maru.say_and_wait(`ええ。担当トレーナーと相談した結果よ。`);
      await you.say_as_passer_by_and_wait(
        `記者B`,
        `失礼します。前回のスプリングステークスは、出走した${maru.uma_sex_title}が最低条件の5頭だけだったと聞いています。`,
      );
      await you.say_as_passer_by_and_wait(
        `記者B`,
        `${maru.uma_sex_title}たちは${maru.name}に勝てないと考えて、次々回避したと考えてよいのでしょうか？`,
      );
      await maru.say_and_wait(
        `スプリングステークスについては担当トレーナーへ。ここではコメントしません。`,
      );
      await you.say_as_passer_by_and_wait(
        `記者C`,
        `私からです。スーパーカーと呼ばれるあなたは、このあと無敗三冠を目指してダービーに出ますか？`,
      );
      await maru.say_and_wait(`それが、今のところの目標よ。`);
      await you.say_as_passer_by_and_wait(
        `記者C`,
        `わかりました。ありがとうございます。`,
      );
      await maru.say_and_wait(`どういたしまして。`);
      era.drawLine({ content: '会見のあと' });
      await era.printAndWait(`控え室\n`);
      await you.say_and_wait(`${maru.name}、準備できたか。次は君の出番だ。`);
      await maru.say_and_wait(`もうできてるわ。`);
      await you.say_and_wait(
        `いつものように、君の考えどおり自由に走ってくれ。`,
      );
      await maru.say_and_wait(
        `ふんふん、今回の${callname}は、私の走りに虜になるわよ。`,
      );
      await maru.say_and_wait(`その瞬間が楽しみね——`);
      await maru.say_and_wait(`あ、そろそろ出発。じゃあまたあとで！`);
      await you.say_and_wait(`うまくいきますように。`, true);
      await maru.say_and_wait(`うん。`);
      await era.printAndWait(`${maru.name}はレース場へ向かった。`);
      await you.say_and_wait(`……${maru.name}、ずっと見てる。`, true);
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '皐月賞後・炎のような美しい走り';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`ウイニングライブ\n`);
      await era.printAndWait(
        `スタッフがウイニングライブの装置を確認して忙しそうだ。`,
      );
      await you.say_as_passer_by_and_wait(
        `スタッフA`,
        `ウイニングライブはもうすぐです。最後の調整！`,
      );
      await you.say_as_passer_by_and_wait(
        `スタッフB`,
        `気柱機の位置、もう一度！ やっぱり、${maru.name} が勝つと思ってたわ。`,
      );
      await you.say_as_passer_by_and_wait(
        `スタッフB`,
        `メイクデビューのときから ${maru.sex} を見てたの。`,
      );
      await you.say_as_passer_by_and_wait(
        `スタッフC`,
        `ライトをもう少し左！ あ、私はホープフルSから見てたわ。`,
      );
      await you.say_as_passer_by_and_wait(
        `スタッフC`,
        `すごく速い ${maru.uma_sex_title} がいるとは聞いてたけど、現地で見ないとわからないわね。`,
      );
      await you.say_as_passer_by_and_wait(
        `スタッフB`,
        `準備完了！ 次の東京優駿の勝ちも、絶対 ${maru.sex} よ！`,
      );
      await you.say_as_passer_by_and_wait(
        `スタッフA`,
        `全員！ 位置について！ 用意！`,
      );
      await era.printAndWait(`予想どおり、${maru.name} は勝った。`);
      await era.printAndWait(
        `最後のゴールの刹那も、ウイニングライブ中央のステージも、多くのファンを虜にした ${maru.name}。`,
      );
      await era.printAndWait(`満足した笑顔で控え室へ戻った。`);
      era.printButton(`「お疲れさま。ステージ、すばらしかった。」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name} のロングブーツをそっと脱がせ、足首から太ももまで、マッサージの力を慎重に調整する。`,
      );
      await you.say_and_wait(
        `王道路線の第一戦は違うな。記者会見も、そのあとのレースもウイニングライブも、同じG1の朝日杯とは比べものにならない。`,
      );
      await you.say_and_wait(
        `この先、もっと盛大なレースもある。${maru.name} ——`,
      );
      await era.printAndWait(
        `およそ五分マッサージし、十指で太ももの内側を軽く押し、${maru.name} の反応を見ながら話を続けた。`,
      );
      await maru.say_and_wait(
        `うん～、${callname} がこんなに気にかけてくれてありがとう。動けないほど疲れたというより、${maru.elder_sibling_sex_title} は心も体も満たされてるわ。`,
      );
      await era.printAndWait(
        `笑顔の ${maru.name} から、時おり小さな吐息が漏れる。`,
      );
      await maru.say_and_wait(
        `こうしてもっと多くの ${maru.uma_sex_title} に私の背中を見せれば、${maru.couple_title}もレース場で走る姿に憧れるでしょうね。`,
      );
      await maru.say_and_wait(
        `それから、頑張るトレーニングの中で、走る楽しさをゆっくり見つける。`,
      );
      await maru.say_and_wait(
        `そうしたら、後輩が私の背中を追って頑張ってるのを見て、嬉しくなれる。`,
      );
      await era.printAndWait(
        `弱い痛みと少しの痺れで、いつもより明るい ${maru.name} の目が、まっすぐこちらを見ている。`,
      );
      await you.say_and_wait(
        `うん。一か月後の東京優駿のため、この先はスタミナを上げないといけない。`,
      );
      await maru.say_and_wait(`うん——このあと、どこで祝う？`);
      await era.printAndWait(
        `マッサージが終わると、名残惜しそうな ${maru.name} が席で満足の声を出した。`,
      );
      await maru.say_and_wait(
        `高級レストラン？ 親しみやすいサイゼリヤ？ それとも`,
      );
      era.printButton(`「いっそトレーニング室で祝おう！」`, 1);
      await era.input();
      await you.say_and_wait(`ピザと飲み物を足して、後輩たちも呼んで祝おう。`);
      await maru.say_and_wait(
        `${callname} の言うとおりに。夜のパーティー、楽しみね♪`,
      );
      await era.printAndWait(
        `ブーツを履き、歩き方に慣れ直す${maru.teen_sex_title}が、このあとの祝いを期待している。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_5: (() => {
    const title = '皐月賞後・ギアチェンジ';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`控え室\n`);
      await maru.say_and_wait(`はい！ ${callname} ！`);
      await era.printAndWait(
        `ウイニングライブから下りた ${maru.name} が控え室に戻った`,
      );
      await you.say_and_wait(`どんな感じだった？`);
      await era.printAndWait(
        `${maru.name} のブーツをそっと脱がせ、足首から太ももまで、マッサージの力を慎重に調整する。`,
      );
      await maru.say_and_wait(
        `この感じ、すごく好き！ さすがクラシック三冠の皐月賞。三冠を争いに集まった ${maru.uma_sex_title} たちは強者揃いね。`,
      );
      await maru.say_and_wait(
        `このあとダービーでもっと大きなレースを体験できるなんて、${maru.elder_sibling_sex_title}、ちょっと生きる気力がなくなりそう。`,
      );
      await era.printAndWait(
        `およそ五分マッサージし、十指で太ももの内側を軽く押し、${maru.name} の反応を見ながら話を続けた。`,
      );
      await you.say_and_wait(`その勢いでダービーに挑もう！`);
      await maru.say_and_wait(`そうよ！ この感じ！`);
      await era.printAndWait(
        `マッサージのあと、${you.name} はそっと ${maru.name} にブーツを履かせた。立ち上がった${maru.name}は気勢高く、次の目標を決めた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_17: (() => {
    const title = '憧れ';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      const ret = [];
      await era.printAndWait(`トレーニング室`);
      era.println();
      await era.printAndWait(
        `厚いクマと消えないコーヒーの匂い。${you.name}は手の書類を何度も読み返している。`,
      );
      await you.say_and_wait(`今の状態でダービーに挑むなら`);
      await era.printAndWait(`この先、重点的に伸ばすのはどの能力だ？`);
      era.printButton(`「スタミナと根性！」`, 1);
      era.printButton(`「スピードとパワー！」`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await you.say_and_wait(
          `夏季合宿で、これまで疎かにしてたスタミナを引き上げよう。`,
        );
      } else {
        await you.say_and_wait(`やっぱりスピードとパワーのほうがいいな。`);
      }
      await you.say_and_wait(`はっくしゅん！`);
      await era.printAndWait(
        `集中がくしゃみで途切れた。${you.name}は右手のナプキンを一枚取り、満杯のゴミ箱へ捨てた。`,
      );
      await you.say_and_wait(`この書類を片付けたら。`, true);
      await era.printAndWait(
        `体が冷たい。全身を氷に埋めたみたいで、視界もぼやけてきた。`,
      );
      await era.printAndWait(
        `若くて丈夫だから一週間くらい夜更かししても平気だと思っていた。体のほうが先に折れた。`,
      );
      await you.say_and_wait(`この体め。風邪薬、風邪薬はどこだ？`);
      await era.printAndWait(
        `引き出しを開け、解熱剤と書かれた紙箱を抜いた。中の薬はとっくに空だった。`,
      );
      await you.say_and_wait(`……そうか。少なくとも頭が回るうちに。`);
      await era.printAndWait(
        `これ以上悪い状況はないはずなのに、気持ちはかえって軽くなった。`,
      );
      await era.printAndWait(
        `給水器からぬるま湯を一杯注ぎ、一気に飲んだ${you.name}は再び席に座った。`,
      );
      await you.say_and_wait(`急がないと。`);
      await era.printAndWait(
        `寒さで歯が勝手に上下し、「カタカタカタ」と鳴る。喉も飲み込みづらい。`,
      );
      await era.printAndWait(
        `「早くこの仕事を終えたい」「ここで倒れられない」その気持ちのためだけに、${you.name}は歯を食いしばった。`,
      );
      await you.say_and_wait(`終わった！`);
      await era.printAndWait(
        `最後の文字を打ったあと、達成の満足で緩んだ精神がもう持たない。視界が回り始めた。たぶん、もう限界だ。`,
      );
      await era.printAndWait(`こうして${you.name}は、満足して倒れた。`);
      await maru.say_and_wait(
        `${callname}、ちょっと様子見に来たわ♪ ${callname}？`,
      );
      await era.printAndWait(
        `意識が消える直前、${you.name}は${maru.name}の声を聞いた。`,
      );
      era.drawLine();
      await era.printAndWait(
        `ちゃんと見てて。${maru.uma_sex_title}としての先輩として。`,
      );
      await era.printAndWait(
        `ちゃんと見つめて。このまま永遠に置いていかれて。`,
      );
      await era.printAndWait(
        `ちゃんと祝福して。今は、${you.name}が私に声援を送る番よ。`,
      );
      await you.say_and_wait(`そうか。`);
      await era.printAndWait(
        `たぶん、名もない${maru.uma_sex_title}の心の声が、うっかり漏れたのだろう。`,
      );
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(`誰かが${you.name}を呼んでいるようだ。`);
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(`どんどん大きな声で呼ばれている。`);
      await era.printAndWait(`起きないと。起きたくない自分をなだめる。`);
      await era.printAndWait(`こうして${you.name}は、しぶしぶ目を開けた。`);
      await maru.say_and_wait(`やっと起きた？ ${callname}。`);
      await you.say_and_wait(`ここは？`);
      await era.printAndWait(
        `周りを見回すと、${you.name}の住んでいる場所のようだ。`,
      );
      await maru.say_and_wait(`ちょっと待って。`);
      await era.printAndWait(
        `${maru.name}は厨房へ入り、おかゆを一椀出してきた。`,
      );
      await maru.say_and_wait(`少し前に炊いてあるわ。まだ熱いなら、言ってね。`);
      await era.printAndWait(
        `温かい液体が${you.name}の口に入る。ぼんやりした頭は本能だけで、これは自分にいいものだと判断した。`,
      );
      era.printButton(`「ありがとう。」`, 1);
      era.printButton(`「いい、自分でやる。」`, 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await era.printAndWait(
          `目の前の姿に薄い霧がかかったようで、${you.name}は${maru.sex}の動きがよく見えない。`,
        );
        await era.printAndWait(`なら、いっそ目を閉じよう。`);
        await era.printAndWait(
          `そう決めて、${you.name}は目を閉じ、相手の動きに合わせた。`,
        );
        await era.printAndWait(
          `スプーンと磁器の椀が当たるたび、温かい液体が口に入る。`,
        );
        await era.printAndWait(
          `温かい感触と、慣れた正確な動き。いちばん大事なのは、懐かしい感じだ。いつの間にか、母の面影と重なっていく。`,
        );
      } else {
        await you.say_and_wait(`いい、自分でやる。`);
        await era.printAndWait(
          `そのまま起き上がろうとして、さらに力強い両手に止められた。`,
        );
        await maru.say_and_wait(
          `今は無理するときじゃない。病人はベッドでおとなしく休むものよ。`,
        );
        await you.say_and_wait(`${maru.name}……`);
        await era.printAndWait(
          `最後の力も尽き、ベッドに横たわるしかなかった。口に運ばれたものを、なんとか飲み込んだ。`,
        );
      }
      await you.say_and_wait(`……温かい。`);
      await era.printAndWait(
        `懐かしい気配に${you.name}は目を閉じ、深い眠りに落ちた。`,
      );
      await era.printAndWait(`恐怖で走り続けていた体が、ようやく安心した。`);
      era.drawLine();
      await you.say_and_wait(`……いつからだ？`);
      await era.printAndWait(
        `目を開け、起き上がろうとしたとき、椅子で休んでいた${maru.teen_sex_title}がベッドにうつ伏せで眠っていた。`,
      );
      await era.printAndWait(
        `震えが出ないようカーテンの端を開けた。一条の光が${you.name}の顔に当たる。夜が明けた。`,
      );
      await maru.say_and_wait(`んうん。今の流行、そういうの？`);
      await era.printAndWait(
        `幸い、体を起こした微かな揺れは ${
          maru.sex
        } に無意識で姿勢を変えさせただけ。均一な呼吸は途切れなかった。`,
      );
      await you.say_and_wait(`${maru.sex}が起きるまで、このまま待とう。`, true);
      await era.printAndWait(
        `そう思い、${you.name}は目を閉じて夜明けを待った。`,
      );

      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = (maru) => `日本ダービー前・${maru.name}`;
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.name}がもっと大きな舞台で違う感触を味わいたいと言ったので、日本ダービーに出ることにした。`,
      );
      await era.printAndWait(`トレーニング室内`);
      await maru.say_and_wait(
        `さすがダービー。出てくる${maru.uma_sex_title}たちの水準、すごく高いわ`,
      );
      await era.printAndWait(
        `クラシック三冠の第二冠、東京優駿（日本ダービー）には、いちばん幸運な${maru.uma_sex_title}だけが勝つという俗説がある。`,
      );
      await era.printAndWait(
        `実力のある${maru.uma_sex_title}でも、ここで転ぶ例は数え切れない。だが${
          maru.name
        }にとっては`,
      );
      await era.printAndWait(`${maru.name}の様子は普段と変わらない。`);
      await era.printAndWait(`純粋にレースを楽しむために来たのだろう。`);
      await maru.say_and_wait(
        `${callname}、このあとは私の姿をちゃんと見ててね。`,
      );
      await era.printAndWait(`${maru.name}は準備を終え、地下通路へ向かった。`);
      await you.say_and_wait(`俺も観客席へ行くか。`);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '日本ダービー後・選択の始まり';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `何の意外もなく、${maru.name} はきれいにダービーを制した。`,
      );
      await era.printAndWait(
        `${maru.sex} がゴールした瞬間、雷のような歓声が観客席から上がった。`,
      );
      await era.printAndWait(`控え室\n`);
      await maru.say_and_wait(
        `ふう～、さすがクラシック三冠でいちばん注目されるレースね。`,
      );
      await maru.say_and_wait(
        `ダービーに出た ${maru.uma_sex_title} たちは、みんな ${maru.uma_sex_title} の精鋭ね。`,
      );
      era.printButton(
        `「コースはダービーのいちばん外側だったけど、その不利でも。」`,
        1,
      );
      await era.input();
      era.printButton(
        `「きれいにダービーを取った ${maru.name} がいちばんすごい。」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `そんなにすごくないわよ⭐ いつものとおり、ううん、前よりちょっと速く走っただけ。`,
      );
      await maru.say_and_wait(`ダービーより盛大なレースなんて、たぶんもう——`);
      era.printButton(`「凱旋門賞に行かないか？」`, 1);
      era.printButton(`「やっぱり有馬記念か？」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`え？ 凱旋門賞？`);
        await maru.say_and_wait(
          `すごっ！ ${callname}と一緒だと、毎回サプライズがあるわね～`,
        );
        await maru.say_and_wait(
          `凱旋門賞なら、世界級の ${maru.uma_sex_title} に会えるかもしれない。`,
        );
        await maru.say_and_wait(`うん——どうしようかしら？`);
        era.printButton(`どうすればいい？`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`でしょ？ やっぱり有馬記念。`);
        era.printButton(
          `「${maru.name} が有馬記念で楽しむのを、俺も楽しみにしてる。」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}はちゃんと見てて。`);
      }
      await maru.say_and_wait(`あ、そろそろウイニングライブね。`);
      await maru.say_and_wait(
        `${callname} と一緒だと、時間はいつも早く過ぎるわ。`,
      );
      await you.say_and_wait(
        `ステージの上でも、${maru.name} を応援してくれたファンにこの気持ちを伝えてくれ！`,
      );
      await maru.say_and_wait(
        `うん。応援してくれたファンに、ちゃんと見てもらわないと。`,
      );
      await maru.say_and_wait(`そろそろ出発ね。`);
      await era.printAndWait(` ${maru.name} は控え室を出た。`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `控え室の扉を閉じると、部屋には自分だけになった。`,
      );
      await you.say_and_wait(`そろそろ決断しないとな。`, true);
      await era.printAndWait(`出ようとしたとき。`);
      await era.printAndWait(`トントン`);
      await era.printAndWait(`まったく、また新しい流行を思いついたのか？`);
      await era.printAndWait(`苦笑いしながら控え室の扉を開けた。`);
      await you.say_and_wait(`マルゼン——`);
      await era.printAndWait(`扉の前に一枚の紙切れが残されていた。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `マルゼン先輩、聞きたいことがあります。よければ、明日の夜、空き教室で会えますか？`,
      );
      await era.printAndWait(`決める`);
      era.printButton(`「${maru.name} に伝える」`, 1); //NE
      era.printButton(`「${maru.name} の代わりに行く」`, 2);
      era.print(
        '【警告。慎重に選んでください。さもなければ、すべては取り返しがつきません！】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`ちょっと頭が痛いな。${maru.name} 宛てだ。`);
        await you.say_and_wait(
          `自分で見に行きたい気もするが、${maru.sex} に任せたほうがいいだろ？`,
        );
        await era.printAndWait(
          `${maru.name} が戻ってから、この紙切れのことを ${maru.sex} に伝えた。`,
        );
      } else {
        await era.printAndWait(
          `周りに誰もいないのを確かめて、紙切れを拾い、ポケットに入れた。`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`なぜ拾ったのか、自分でもわからない。だが——`);
        await era.printAndWait(`このまま逃したら。`);
        await era.printAndWait(`何かを失う気がする。`);
        await you.say_and_wait(`……ごめん、${maru.name}。`);
        await you.say_and_wait(`どうしても、一度行かないと。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  toky_yus_lose: (() => {
    const title = '日本ダービー後・選択の始まり';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `何の意外もなく、${maru.name} はきれいにダービーを制した。`,
      );
      await era.printAndWait(
        `${maru.sex} がゴールした瞬間、雷のような歓声が観客席から上がった。`,
      );
      await era.printAndWait(`控え室\n`);
      await maru.say_and_wait(
        `ふう～、さすがクラシック三冠でいちばん注目されるレースね。`,
      );
      await maru.say_and_wait(
        `ダービーに出た ${maru.uma_sex_title} たちは、みんな ${maru.uma_sex_title} の精鋭ね。`,
      );
      await maru.say_and_wait(`ダービーより盛大なレースなんて、たぶんもう`);
      era.printButton(`「凱旋門賞に行かないか？」`, 1);
      era.printButton(`「やっぱり有馬記念だな！」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`え？ 凱旋門賞？`);
        await maru.say_and_wait(
          `すごっ！ ${callname}と一緒だと、毎回サプライズがあるわね～`,
        );
        await maru.say_and_wait(
          `凱旋門賞なら、世界級の ${maru.uma_sex_title} に会えるかもしれない。`,
        );
        await maru.say_and_wait(`うん——どうしようかしら？`);
        era.printButton(`どうすればいい？`, 1);
        await era.input();
      } else {
        await maru.say_and_wait(`でしょ？ やっぱり有馬記念。`);
        era.printButton(
          `「${maru.name} が有馬記念で楽しむのを、俺も楽しみにしてる。」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(`${callname}はちゃんと見てて。`);
      }
      await maru.say_and_wait(`あ、そろそろウイニングライブね。`);
      await maru.say_and_wait(
        `${callname} と一緒だと、時間はいつも早く過ぎるわ。`,
      );
      await you.say_and_wait(
        `ステージの上でも、${maru.name} を応援してくれたファンにこの気持ちを伝えてくれ！`,
      );
      await maru.say_and_wait(
        `うん。応援してくれたファンに、ちゃんと見てもらわないと。`,
      );
      await maru.say_and_wait(`そろそろ出発ね。`);
      await era.printAndWait(` ${maru.name} は控え室を出た。`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `控え室の扉を閉じると、部屋には自分だけになった。`,
      );
      await you.say_and_wait(`そろそろ決断しないとな。`, true);
      await era.printAndWait(`出ようとしたとき。`);
      await era.printAndWait(`トントン`);
      await era.printAndWait(`まったく、また新しい流行を思いついたのか？`);
      await era.printAndWait(`苦笑いしながら控え室の扉を開けた。`);
      await you.say_and_wait(`マルゼン——`);
      await era.printAndWait(`扉の前に一枚の紙切れが残されていた。`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `マルゼン先輩、聞きたいことがあります。よければ、二週間後、空き教室で会えますか？`,
      );
      await era.printAndWait(`決める`);
      era.printButton(`「${maru.name} に伝える」`, 1); //NE
      era.printButton(`「${maru.name} の代わりに行く」`, 2);
      era.print(
        '【警告。慎重に選んでください。さもなければ、すべては取り返しがつきません！】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait(`ちょっと頭が痛いな。${maru.name} 宛てだ。`);
        await you.say_and_wait(
          `自分で見に行きたい気もするが、${maru.sex} に任せたほうがいいだろ？`,
        );
        await era.printAndWait(
          `${maru.name} が戻ってから、この紙切れのことを ${maru.sex} に伝えた。`,
        );
      } else {
        await era.printAndWait(
          `周りに誰もいないのを確かめて、紙切れを拾い、ポケットに入れた。`,
        );
        await you.say_and_wait(`……`);
        await era.printAndWait(`なぜ拾ったのか、自分でもわからない。だが——`);
        await era.printAndWait(`このまま逃したら。`);
        await era.printAndWait(`何かを失う気がする。`);
        await you.say_and_wait(`……ごめん、${maru.name}。`);
        await you.say_and_wait(`どうしても、一度行かないと。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  girls_blue_1: (() => {
    const title = (maru) => `${maru.teen_sex_title}の憂鬱`;
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`空き教室`);
      await era.printAndWait(
        `${maru.name}に隠れて、紙切れに書かれた約束の場所へ向かった。`,
      );
      await era.printAndWait(`約束より5分ほど遅れ、教室の扉を押した。`);
      await era.printAndWait(`長年使われていない空き教室だというのに。`);
      await era.printAndWait(`空気に想像していたような閉塞感はない。`);
      await era.printAndWait(`さっき雨が止んだせいかもしれない。`);
      await era.printAndWait(
        `薄い靄が、遠くのトレーニング場にまだ残っている。`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `やっと来た？ マルゼン先——`,
      );
      await era.printAndWait(
        `目に入ったのは、かつて観客席で礼を言ってきた姿だった。`,
      );
      await you.say_and_wait(
        `すまない。${maru.name}は用事で来られなくなった。`,
      );
      await you.say_as_passer_by_and_wait(maru.uma_sex_title, `……そんな、絶対`);
      await era.printAndWait(`${maru.uma_sex_title}はまっすぐこちらを睨んだ——`);
      await era.printAndWait(
        `奇妙なことに、怒りというより、何かを求めているように見えた。`,
      );
      await you.say_and_wait(`すまない。`, true);
      await era.printAndWait(
        `結局、最初から最後まで、個人の欲望を満たすために犯した過ちだ。`,
      );
      await you.say_and_wait(
        `落ち着いてくれ。俺もさっき知ったんだ。${maru.name}が少し前に紙切れを拾って——\n`,
      );
      await maru.say_and_wait(
        `何があっても、${maru.elder_sibling_sex_title}に相談するのよ？`,
      );
      await era.printAndWait(
        `頭は自然に、${maru.name}と交わした誓いを思い出した。`,
      );
      await era.printAndWait(`自己嫌悪に苛まれる。`);
      await you.say_and_wait(
        `それから少し悩んで、もう一人の${maru.uma_sex_title}が ${maru.sex} と屋上で会う約束をした、と。`,
      );
      await you.say_and_wait(`だから、すまない。`);
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `相手が次に何をするかわからない。逃げたいが、${maru.sex} がこのまま戻って${maru.name}に話したら——`,
      );
      await era.printAndWait(`好奇心に誘われ、闇の奥へ入っていく。`);
      await you.say_and_wait(`覚悟を決めて続けるしかない。`);
      await era.printAndWait(
        `最初は押し寄せる感情にほとんど溺れそうだった。だが最高潮に達したとき、内心はかえって静まった。`,
      );
      await you.say_and_wait(
        `すまない。俺が自分から頼んだんだ。${maru.name}のトレーナーとして、担当の悩みは解決しないと。`,
      );
      await you.say_and_wait(
        `${maru.name}には及ばないが、トレーナーとして——。`,
      );
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `${maru.name}のことを、どう思っていますか？`,
      );
      await you.say_and_wait(`え？`);
      await you.say_as_passer_by_and_wait(
        maru.uma_sex_title,
        `${maru.name}の印象は？`,
      );
      await era.printAndWait(`胸の奥から、一つの感覚が静かに湧いた。`);
      await era.printAndWait(`焦燥と苦悶の悔いが、胸に襲いかかる。`);
      await you.say_and_wait(`俺は`);
      era.printButton(`「頼れて、信じられる、という角度から」`, 1);
      era.printButton(`「優しくて、預けられる、という角度から」`, 2);
      era.printButton(`「先輩と後輩の関係から」`, 3);
      era.print(
        '【警告。慎重に選んでください。さもなければ、すべては取り返しがつきません！】',
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait(`マルゼン先輩は、頼れる——`);
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `すみません。欲しいのは、その答えではありません。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `前回助けていただいたお返しに、マルゼン先輩には言いません。トレーナーの${you.adult_sex_title}。`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}は軽く一礼して空き教室を出た。また一人になった。`,
          );
          break;
        case 2:
          await you.say_and_wait(`マルゼン先輩は、とても優しい——`);
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `すみません。欲しいのは、その答えではありません。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `前回助けていただいたお返しに、マルゼン先輩には言いません。トレーナーの${you.adult_sex_title}。`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}は軽く一礼して空き教室を出た。また一人になった。`,
          );
          break;
        case 3:
          await era.printAndWait(
            `頼れるも、優しいも、たぶん${maru.name}が俺の前で見せている表層にすぎない。`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}の視点で考えるなら、いや、${
              maru.sex
            }が望む、${maru.name}という名のアイドルだ。`,
          );
          await you.say_and_wait(
            `${maru.name}は後輩をよく気にかけ、できる限り助けを差し出す……アイドルだと思う。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `なぜ、アイドルなんですか？`,
          );
          await you.say_and_wait(
            `${maru.name}は自分を超える背中を欲しがっている。${maru.sex}は後輩が${
              maru.sex
            }の走りを見て、青春の活力を迸らせることを望んでいる。`,
          );
          await you.say_and_wait(
            `${maru.sex}の背中に追いつき、${maru.sex}を超え、レース場で${
              maru.sex
            }を打ち負かし、そして最後に——清新な空気を自由に楽しむこと。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `……そうですね。マルゼン先輩はそういう人です。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `マルゼン先輩のトレーナーですし、前にレース場でも助けていただきました。だから、`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `もしかしたら、マルゼン先輩に話すより、あなたに話したほうがいいのかもしれません。`,
          );
          await era.printAndWait(
            `${maru.uma_sex_title}は窓際に立ち、右手で窓枠を支え、視線は芝のコースと中庭のあいだを迷う。答えを追っているようでも、何かを避けているようでもある。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `私、${maru.uma_sex_title}を辞めるつもりです。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `ずっと前から、自分は${maru.uma_sex_title}に向いていないとわかっていました。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `でも、${maru.name}に励まされて。その励ましだけで、ここまで続いてきました。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `でも、${maru.uma_sex_title}は努力すれば成功するおとぎ話の場所ではありません。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `G1どころか、G2でさえ私には越えられない崖です。どれだけ頑張っても、相手にはもっと優れた、もっと才能のある者がいる。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `ウイニングライブの中央で花と称賛を楽しむ一番を見て、敗者である私たちは、入着できなければ、敗者の努力は意味がない。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `晴れの日も雨の日も、誰より早く起きて、ほとんど知覚がなくなるまで頑張ったのに、私は負けました。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `ときどき、ほんの少しだけ、かつて励ましてくれたマルゼン先輩に暗い感情を抱きます。${
              maru.sex
            }の襟を掴んで地面に押しつけ、大声で問い詰めたい。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `もしあのとき励ましてくれなかったら、ここまで続けて、傷だらけになることもなかったかもしれません。`,
          );
          await era.printAndWait(
            `長く抑えていた鬱屈を徹底的に出すように、${maru.uma_sex_title}は異常な高揚で胸の苦悶を吐き出した。`,
          );
          await era.printAndWait(
            `夜は墨のようで、${maru.sex}の表情はほとんど見えない。だが白い月は鏡のようで、${
              maru.sex
            }の涙を玉盤に落ちる真珠のように、ポツポツと音を立てさせた。`,
          );
          await you.say_as_passer_by_and_wait(
            maru.uma_sex_title,
            `すみません。興奮しすぎました。聞いてくださってありがとう。それでは、トレーナー。`,
          );
          await era.printAndWait(
            `言い終えると、もう感情を抑えられない${maru.uma_sex_title}は空き教室を出た。`,
          );
          await you.say_and_wait(`君も、巻き込まれた。`);
          await era.printAndWait(`${you.name} は長く沈思した。`);
      }
      await maru.used_to_say_and_wait(
        `${callname} に悩みがあるなら、${maru.elder_sibling_sex_title}にはっきり話すのよ？`,
      );
      await era.printAndWait(
        `遠いどこかから聞こえるようで、この空虚な教室に反響しているようでもある。`,
      );
      await era.printAndWait(`${you.name} は胸の不安を振り払えなかった。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  girls_blue_2: (() => {
    const title = (maru) => `${maru.teen_sex_title}の憂鬱`;
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.uma_sex_title}は普通の${maru.uma_sex_title}として引退した。`,
      );
      await era.printAndWait(
        `ようやく言葉から解放されたのか、ここまで支えてくれたファンへの感謝なのか。${maru.sex}はG1勝利のときウイニングライブ中央に立つつもりで自分でデザインした勝負服に着替えた——`,
      );
      await era.printAndWait(
        `かつての高慢な${maru.sex}がG1勝利のとき自分デザインの勝負服で颯爽と登場するつもりだったのに、`,
      );
      await era.printAndWait(
        `のちにG2勝利まで妥協し、そのあと涙を含んで入着でいいと改めた。そんな経験があるせいか、今の${maru.sex}は彗星のように美しい`,
      );
      await era.printAndWait(
        `事情を知る一人として、この別れのステージにも参加した。`,
      );
      await maru.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `みんな、ありがとう！`,
      );
      await era.printAndWait(
        `涙を含んだ${maru.uma_sex_title}は笑顔で、このステージに来たファンを見た——`,
      );
      await era.printAndWait(
        `なぜか、何かをこっそり見ているようでも、わざと無視しているようでもある。`,
      );
      await era.printAndWait(`その不快な違和感。`);
      await era.printAndWait(
        `${you.name} は${maru.uma_sex_title}がわざと無視する方向を逆に見た——`,
      );
      await era.printAndWait(
        `そちらに、黙ってステージを見ている${maru.name}がいた。`,
      );
      await era.printAndWait(`こういうとき、${maru.sex}に話すべきか？`);
      era.printButton(`いくらなんでも空気は読むべきだ`, 1);
      era.printButton(`……違う`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(`今話しかけるのは、空気が読めなさすぎる。`);
        await era.printAndWait(`そうして、そっとその場を離れた。`);
      } else {
        await you.say_and_wait(`すまない、通してくれ。`);
        await era.printAndWait(
          `周囲の人込みを押し分け、${you.name} は ${maru.name} の近くまで行った。`,
        );
        await you.say_and_wait(`……${maru.name}。`);
        await era.printAndWait(
          `最初から${maru.sex}に聞くつもりだった質問なのに、肝心なとき何を言えばいいかわからなくなった。`,
        );
        await maru.say_and_wait(`え？`);
        await era.printAndWait(`${maru.name}は信じられない顔でこちらを見た。`);
        await maru.say_and_wait(
          `${you.actual_name}がどうして……ごめん、今は頭が少し混乱してる。`,
        );
        await era.printAndWait(
          `口調は前より軽快なのに、その耳障りな作為が${you.name}を悲しませた。`,
        );
        era.printButton(`……${maru.name}。`, 1);
        era.printButton(`聞きたいことがある`, 2);
        if ((await era.input()) === 1) {
          await maru.say_and_wait(`${callname}、肩を貸してくれる？`);
          await era.printAndWait(
            `${you.name} は無言で肩を貸した。${maru.name}は腕をきつく抱いた。`,
          );
          await era.printAndWait(
            `歓声と笑いの裏には、やっと解けた枷と、それに続く迷いがある。二人は黙って、起きているすべてを見ていた。`,
          );
        } else {
          await you.say_and_wait(`待ってくれ、${maru.name}。`);
          await maru.say_and_wait(`ごめん、${callname}。`);
          await maru.say_and_wait(`ここの音が大きすぎて、質問が聞き取れない。`);
          await maru.say_and_wait(`何かあれば、戻ってからでもいい？`);
          await era.printAndWait(
            `${maru.name} は嵐の只中にいるようで、質問には耳を貸さない。`,
          );
          await era.printAndWait(
            `ふと、急いで去る ${maru.name} と目が合った。失神したような瞳を見て、どうすればいいかわからず、ただ見送った。`,
          );
        }
      }
    };
    f.title = title;
    return f;
  })(),
  before_radi_shi: (() => {
    const title = 'ラジオNIKKEI賞前・誰のための走り';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`トレーニング室`);
      await era.printAndWait(
        `ダービーのあと、${maru.name}は後輩たちへの熱情と愛をすべてこちらに向けた`,
      );
      await era.printAndWait(`そのおかげで、胃はさらに苦しくなった`);
      await you.say_and_wait(
        `やっと${maru.name}をこのレースに説得できた`,
        true,
      );
      await era.printAndWait(
        `試しに${
          maru.name
        }へ七夕賞への出走を持ちかけたとき、手のナタデココ飲料をトレーニング室に置いたまま黙って扉を閉めて出ていった${
          maru.sex
        }に、良心が自分を責め始めた。`,
      );
      await era.printAndWait(
        `何度電話しても出ず、ようやく${maru.name}の承諾が届いた。`,
      );
      await era.printAndWait(
        `目の前の${maru.name}が全身鏡で状態を整えている。`,
      );
      await you.say_and_wait(
        `今の${maru.sex}も揺れているだろう。もう一度、軽い打撃を受けたら、${
          maru.sex
        }の理想は揺らいでしまう`,
        true,
      );
      await you.say_and_wait(`本当に……いや、きっと、きっとこれが最善だ`, true);
      await maru.say_and_wait(`懐かしい服ね……ううん、なんでもない`);
      await era.printAndWait(`${maru.name}は少しきつめの勝負服を着た。`);
      await maru.say_and_wait(
        `このあとは、大好きな${callname}に勝利を持っていくわよ♪`,
      );
      await era.printAndWait(
        `もうどんな考えもどうでもいい。${maru.name}はレース場へ向かった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  radi_shi_win: (() => {
    const title = 'ラジオNIKKEI賞後・迷いの道';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait('控え室');
      era.println();
      await you.say_and_wait(`お疲れさま、${maru.name}。`);
      await era.printAndWait(
        `中盤は馬群に追いつかれそうになったが、${maru.name} はぎりぎりレースを制した。`,
      );
      await you.say_and_wait(
        `普段の ${maru.elder_sibling_sex_title} らしい ${maru.sex} とは違う。`,
        true,
      );
      await you.say_and_wait(`まだ疑いの影に囚われているんだろう。`, true);
      await maru.say_and_wait(` ${callname} ！`);
      await era.printAndWait(
        `こちらに気づいた瞬間、${maru.name} は明るい笑顔を見せた。`,
      );
      await era.printAndWait(`だが、その暗い表情は深く脳裏に刻まれた。`);
      await maru.say_and_wait(`もっと褒めてくれる？`);
      era.printButton(
        `お疲れさま。美しくて強い ${maru.elder_sibling_sex_title} さま、今回はとてもすばらしかった！`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `ふんふん～、当たり前よ。負けたほうがおかしいでしょ？`,
      );
      era.printButton(`「太ももはどうだ？」`, 1);
      await era.input();
      await maru.say_and_wait(`思ったよりずっといいわ。`);
      era.printButton(`「太ももはどうだ？」`, 1);
      await era.input();
      await maru.say_and_wait(`……`);
      era.printButton(
        `君のトレーナーとして、愛するウマが圧力を積み重ねて沈んで退場するのを、黙って見てはいられない。`,
        1,
      );
      await era.input();
      await you.say_and_wait(`前の ${maru.uma_sex_title} と同じように。`);
      await you.say_and_wait(`許してくれ。ごめん。`);
      await era.printAndWait(
        `ウイニングライブのあと、${you.name} は秋の菊花賞を諦め、有馬記念の準備に切り替えると決めた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`砂浜`);
      await era.printAndWait(`理事長の私有ビーチだというのに。`);
      await era.printAndWait(`空気には涼しさがある。`);
      await era.printAndWait(`海が近いせいかもしれない。`);
      await era.printAndWait(
        `海風が、遠くで寄せては返す波の音と湿った気配を運んでくる。`,
      );
      await era.printAndWait(
        `愛車から降りると、${maru.name}は満足そうに目を細め、休暇の気配を楽しんでいる——`,
      );
      await you.say_and_wait(
        `ところで、どうしてスクールバスに乗らなかったんだ。`,
      );
      await era.printAndWait(
        `${maru.name}の強い希望で、${you.name}たちは愛車の助けを借りて理事長の私有ビーチへ来た。`,
      );
      await maru.say_and_wait(
        `せっかくこのきれいな砂浜に来たのに、後輩たちとバスで来るなんて、ちょっと惜しいわ。`,
      );
      await you.say_and_wait(
        `は？ ${maru.name}、${you.name}も夏季合宿が能力を一気に上げる近道だってわかってるだろ？`,
      );
      await you.say_and_wait(`だから普段より真剣にやろう。`);
      await maru.say_and_wait(
        `参ったわ。${callname}がそこまで言うなら、${maru.elder_sibling_sex_title}も本気出さないとね⭐`,
      );
      era.printButton(`「当たり前だろ？」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}も海水と日光浴、そこら中の水着を期待してはいた。`,
      );
      await you.say_and_wait(`なら、この先は青春をしっかり楽しもう。`);
      await era.printAndWait(`体の感覚に従って歩くほうが正しい道の人もいる。`);
      await era.printAndWait(`だから、あまり干渉しないほうがいい。`);
      await maru.say_and_wait(
        `こうして海風に吹かれてると、気持ちも雲の上まで飛んでいきそうね、ですわ。`,
      );
      await you.say_and_wait(
        `そんな古い流行語まで復活してる。${maru.name}、本当に機嫌がいいな。`,
        true,
      );
      await maru.say_and_wait(`ふふ～、${callname}、かわいいわね♪`);
      await era.printAndWait(
        `どこからともなく寄ってきた${maru.name}が、ずっと${you.name}を見ている。`,
      );
      await maru.say_and_wait(`いくら褒めてもサービスはないわよ～`);
      await era.printAndWait(
        `${you.name}が次に言うことを読んで、${maru.name}は悪賢く笑った。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = '縁日';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await you.say_and_wait(`すごい賑わいだな。`);
      await era.printAndWait(
        `${maru.name}と一緒に、とても盛大だという縁日へ行く約束をした。だが${you.name}は入口で長く待っても${
          maru.sex
        }の姿が見えない。`,
      );
      await era.printAndWait(
        `「人混みで迷ったんだろう」と${you.name}は頭を空にし、提灯で飾られた縁日へ流れ込む人波を眺め、目を細めてあくびをしたとき。`,
      );
      await you.say_and_wait(`すごい賑わいだな。`);
      await era.printAndWait(
        `店が数軒しかないと思っていた予想とはまったく違い、四方から集まる観光客と屋台が通りの端から端まで続いている。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `そこでぼーっとしてる少年、新鮮な果物はどうだい？`,
      );
      await you.say_and_wait(`え？`);
      await era.printAndWait(
        `流れる人波に押され、いつの間にか果物屋の前に立っていた。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `その様子だと、縁日は初めてかい？`,
      );
      await era.printAndWait(
        `売れ行きがよくて機嫌がいいのか、おじさんは滔々と話し始めた。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `まあそうだろうな。ここは観光で必ず寄る縁日の一つに選ばれてるからね。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `このきれいな砂浜の近くにあるせいで、この町はかなりの観光客を呼んでるんだ。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `昔は交通の便も悪い、どこにでもある田舎だったんだが、こっちの砂浜が有名になってから観光客も増えた。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `そのあと鉄道が通って、人がワッと押し寄せて、今の町になったんだよ。`,
      );
      await you.say_and_wait(`あの？ すみません`);
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `おっと。忘れるところだった。${you.name}は迷ってここに立ってるんだろ？`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `そうだよな。この縁日には同じ入口が四つあるからね。芸術はよくわからんが、毎年、入口で待ち合わせして相手が見つからない人を見て楽しんでるよ。`,
      );
      await era.printAndWait(
        `話が乗ってきたのか、この町の住民であることを誇るおじさんは大きな声で紹介を続けた。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `ついでに言うと、縁日を全部回りたければ、ここからまっすぐ行くと、こっちの名物の演目が見える。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `今夜は祭りを見る人混みで一儲けできるかもな。ははは。`,
      );
      await era.printAndWait(
        `最後の一言を言い終えて、唾を飛ばしていたおじさんはようやく話を止めた。`,
      );
      await maru.say_as_passer_by_and_wait(`スマホ`, `ぶるぶるぶる`);
      await era.printAndWait(
        `ポケットのスマホが震えた。演目へ向かう人がほとんどになった今、かけてくる相手は言うまでもない。`,
      );
      await maru.say_and_wait(`${callname}${you.name}はどこ？`);
      await era.printAndWait(
        `ポケットのスマホが震えた。演目へ向かう人がほとんどになった今、かけてくる相手は言うまでもない。`,
      );
      await maru.say_and_wait(
        `はあ、せっかく気合を入れて準備したのに、スマホの写真を見て入口に着いたら、${
          callname
        }の姿がどうしても見えないの。`,
      );
      await maru.say_and_wait(
        `${callname}の姿を見逃すつもりはないつもりだったけど、右を見ても左を見ても見つからない。${maru.elder_sibling_sex_title}、ちょっと生きる気力がなくなりそう><。`,
      );
      await era.printAndWait(
        `入口を間違えたんだろう。いや、${you.name}のほうも間違えたのかもしれない？`,
      );
      era.printButton(`「すみません、ちょっと。」`, 1);
      await era.input();
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `ん？ 入口の見分け方を聞きたいんだな？`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `そうだよな。毎年誰かがそれを聞く。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `普段はすぐわかる場所も、人が増えるとどれも同じに見えるんだよ。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `${you.name}、その友人に入口から五軒目の屋台まで歩いてもらえ。あそこに案内のボランティアがいる。`,
      );
      await era.printAndWait(
        `おじさんは話しながら自然に地図を出し、${you.name}に指し示した。`,
      );
      await maru.say_as_passer_by_and_wait(
        `店主`,
        `演目に間に合わせたいなら、この道だ。今ならまだ間に合う。`,
      );
      await era.printAndWait(`熱すぎて少し変だが、とても親切なおじさんだ。`);
      await era.printAndWait(
        `礼を言ったあと、${you.name}はそのまま${maru.name}に伝え、急いで向かった。`,
      );
      era.drawLine();
      await era.printAndWait(`おいで、おいで。すぐ先が盛大なステージだ。`);
      await era.printAndWait(
        `この悩みは忘れて。この熱い舞いの中で、一緒に踊ろう。`,
      );
      await era.printAndWait(
        `この盛大な祭りに溶けて。このまま一緒に、${maru.sex}が終わらないことを祈ろう。`,
      );
      await era.printAndWait(
        `涙と汗が混ざった喜びを携えて。迷いと痛みの果てに、やっと釈然としよう。`,
      );
      await era.printAndWait(
        `砂浜のきらきらした砂のように、${you.name}たちの喜びと解放は、いつか歴史に残る。\n`,
      );
      await you.say_and_wait(`やっと目的地だ。`);
      await era.printAndWait(
        `演目を見に来る人波は途切れない。立ったり座ったり、飲み物やカメラを掲げてステージの上の熱演を見ている。`,
      );
      await era.printAndWait(
        `人々の吐息が薄い網を織ったようだ。子どもたちは叫びながら人混みを興奮して走り回る。`,
      );
      await you.say_and_wait(`人が多いな。`);
      await era.printAndWait(
        `足元にはかなり気をつけていたが、それでも走り回る子どもに何度かぶつかりそうになった。`,
      );
      await you.say_and_wait(`暑い。だが今はまず${maru.name}を探さないと——`);
      await era.printAndWait(
        `${
          maru.sex
        }に位置を送りたかったが、こんな人混みではスマホの電波さえ途切れ途切れだ。`,
      );
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `夜が落ち、ステージの明かりが一つずつ点く。場にいる観光客は注意をステージへ集めた——`,
      );
      await era.printAndWait(
        `${maru.name}を見ている${you.name}と、${you.name}の視線に気づいて手を振りながら小走りで来る${maru.name}以外は。`,
      );
      era.printButton(`「${maru.name}に会えてよかった」`, 1);
      await era.input();
      await era.printAndWait(
        `胸の大石がやっと落ちたように、${you.name}は長く息を吐いた。`,
      );
      await maru.say_and_wait(
        `やっと${you.name}を見つけた。${maru.elder_sibling_sex_title}もほっとしたわ。`,
      );
      await you.say_and_wait(`ごめん。早く${maru.name}と合流したかったが——`);
      await maru.say_and_wait(
        `うん～、謝るより、このあと${
          callname
        }と一緒に演目を見るのが、いちばんの補償でしょ。`,
      );
      await you.say_and_wait(
        `……ステージが終わるまで、${maru.name}のそばを離れない。`,
      );
      await you.say_and_wait(
        `だから、${you.name}と一緒にこの素敵な思い出を作らせてくれ。頼む！`,
      );
      await maru.say_and_wait(`あら、新しい告白の仕方？`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}も、ちょ～っと心が動いたわ。`,
      );
      await maru.say_and_wait(`なら、${callname}は私から離れないでね？`);
      await era.printAndWait(
        `招かれて出演する${maru.uma_sex_title}が光る衣装を着て軽やかにステージへ跳ねた。ライトが一気に${
          maru.sex
        }へ集まる。今の${maru.sex}は、この砂浜でいちばん眩しい存在のようだ。`,
      );
      await you.say_and_wait(`${maru.name}？`);
      await era.printAndWait(
        `${
          maru.sex
        }の動きは滑らかで美しい。すぐそばでなお荒れる波を思い出させる。リズムに乗って現れた民族風の伴奏が、深い青の衣装の${maru.uma_sex_title}を、海の底から陸地へ静かに来て舞う精霊のように引き立てた。`,
      );
      await you.say_and_wait(`${maru.name}！`);
      await maru.say_and_wait(`ん？ ${callname}、どうしたの？`);
      await era.printAndWait(
        `少し大きな声の${you.name}に驚いた${maru.teen_sex_title}が、問う目で${you.name}を見た。`,
      );
      await era.printAndWait(`${you.name}の決断は`);
      era.printButton(
        `「${maru.name}、${you.name}の痛みと悲しみを教えてくれ。」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `ステージの上の${maru.teen_sex_title}は全力を尽くし、流した汗が一波また一波のうねりになった。`,
      );
      await era.printAndWait(
        `観客は期待の目で、ステージで輝くそのアイドルを見つめている。`,
      );
      await era.printAndWait(
        `そして最初から最後まで、${maru.name}はその不安な沈黙を保っていた。`,
      );
      await you.say_and_wait(`今が肝心なときだろう。`, true);
      await you.say_and_wait(`どうしても、忍耐を保たないと。`, true);
      await era.printAndWait(
        `台上の${maru.teen_sex_title}の、一回の回転、一つの跳躍が、観客の心をしっかり掴む。`,
      );
      await era.printAndWait(`観客は息を殺して、その瞬間を待っている。`);
      await maru.say_and_wait(`やっぱり、${callname}には隠せないわね？`);
      await era.printAndWait(
        `突然、平地に雷が落ちたように、観客から熱い拍手と歓声が爆発した。`,
      );
      await era.printAndWait(
        `笑みの仮面を外し、${maru.name}は悲しみと、やっと解放された釈然とした顔で${you.name}を見た。`,
      );
      await era.printAndWait(
        `その痛みさえもう消え、地面に崩れそうな麻痺感の中で、${maru.teen_sex_title}は汗か涙かわからない塩気を味わった。`,
      );
      await maru.say_and_wait(
        `……この先は、場所を変えて話す？ ${you.actual_name}？`,
      );
      await era.printAndWait(
        `誘う香りを放つ果実に惹かれた無数の観光客が、この盛況に流れ込む。今夜は、まだ高潮に入ったばかりだ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_31: (() => {
    const title = '選択';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `トレーニングのあと、${you.name}は${maru.name}の紙切れを受け取った。`,
      );
      await maru.say_and_wait(
        `${callname}、近くの神社に来て。${you.name}に話があるの。`,
      );
      await era.printAndWait(
        `定番の告白シーンか？ 荷物を片付けて${you.name}は急いで出発した。`,
      );
      await era.printAndWait(
        `歓びと忘却を期待する人波に逆らい、${you.name}たちは散歩するように近くの神社へ来た。`,
      );
      await era.printAndWait(
        `祭りの余韻はまだ散らず、観光客の目は町の中心のステージに集まっている。`,
      );
      await era.printAndWait(`辺鄙だと言えば、ここより辺鄙な場所もある。`);
      await era.printAndWait(
        `だがここは、静かすぎて怖いわけでも、騒がしすぎて不安になるわけでもない。`,
      );
      await maru.say_and_wait(`三女神さま、聞いてください。`);
      await era.printAndWait(
        `賽銭箱に入れたウマコインがぶつかる澄んだ音と同時に、${maru.name}の祈りが起きた。`,
      );
      era.printButton(`「ウマコインを入れる」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は${maru.name}の動きを真似て、目を閉じ三女神に祈った。`,
      );
      era.printButton(`「三女神さま、苦しむ者を導いてください」`, 1);
      era.printButton(`「三女神さま、迷う者を導いてください」`, 2);
      await era.input();
      await era.printAndWait(
        `願いをかけたあと、${you.name}は隣の${maru.teen_sex_title}を見た。`,
      );
      await era.printAndWait(
        `${maru.sex}は賽銭箱をじっと見つめている——いや、${
          maru.sex
        }は未知の、遠いどこかを見ている。`,
      );
      await you.say_and_wait(`${maru.name}は泣いているのか？`, true);
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `本当にすみません。今日の縁結びのお守りはもう配り終わりました。`,
      );
      await era.printAndWait(
        `しばらくして、目をこすりあくびをする巫女が、演目を見る人混みから遅れてやって来た。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `……よければ、お二人でこちらをお受け取りください。`,
      );
      await era.printAndWait(
        `何かに気づいたのか、巫女は長袖の縫い付けた小さなポケットからお守りを出した。`,
      );
      await you.say_and_wait(`ありがとうございます。`);
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `感謝の言葉は、美しい女神へ。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `祝福の言葉は、慈悲深い女神へ。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `解脱の言葉は、慈愛の女神へ。`,
      );
      await you.say_and_wait(`解脱か？`, true);
      await maru.say_and_wait(`祝福か……三女神さま、ありがとう。`, true);
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `三女神たちよ、この世界に美しさと希望を。`,
      );
      await maru.say_as_passer_by_and_wait(
        `巫女`,
        `愛すべき人たちよ、三女神が${you.name}たちと共にありますように。`,
      );
      await era.printAndWait(
        `巫女は祝福の言葉を言いながら、お守りを${you.name}たちに渡した。`,
      );
      await era.printAndWait(
        `巫女の手から素早くお守りを受け取り礼をした${you.name}と違い、${maru.name}はお守りを受け取ると、持ち歩いている小さな袋に入れた。`,
      );
      await era.printAndWait(`それから——`);
      await maru.say_and_wait(`やっぱり、${callname}には隠せないわね。`);
      await era.printAndWait(
        `空気の変化に気づいたのか、巫女は右手で静かな小道を指して、その場を離れた。`,
      );
      await era.printAndWait(
        `下駄と地面が当たるカタカタという澄んだ音がだんだん小さくなり、やがてここには遠くの太鼓と観客の歓声だけが残った。`,
      );
      await you.say_and_wait(
        `ここには二人だけだ。この先の言葉は三女神さま以外、誰にも聞こえない。`,
      );
      await era.printAndWait(
        `${you.name}は${maru.name}の顔を見た。相手は、やっと悩みから解放されて体が微かに震えている。`,
      );
      await maru.say_and_wait(
        `どこから話せばいいかしら。実は、あの夜、私も現場にいたわ。`,
      );
      await you.say_and_wait(`なに？！`);
      await era.printAndWait(
        `${you.name}の背中に寒気が走り、両脚が震える。そのまま振り返って逃げたい。だが残った理性が、人は${maru.uma_sex_title}に勝てないと教えてくれた。`,
      );
      await era.printAndWait(
        `まして、${maru.uma_sex_title}の中でも抜きん出た${maru.name}だ。`,
      );
      await maru.say_and_wait(
        `${you.name}が思ったとおり、あの日の${
          callname
        }は顔色がおかしくて、視線が無意識に腕時計へ行ってたわ。`,
      );
      await maru.say_and_wait(`そのとき、嫌な直感が動いたの。`);
      await era.printAndWait(
        `${maru.name}は${you.name}が見たことのない仮面をつけ、無表情で語り続けた。`,
      );
      await maru.say_and_wait(
        `夕飯のあと、アパートに戻ったと言ったけど、実際は愛車を近くの駐車場に仮置きして、脚力でトレセンに戻ったの。`,
      );
      await era.printAndWait(
        `裏切り者、畜生、罪人。頭の中に、${maru.name}と交わした約束が浮かぶ。`,
      );
      await you.say_and_wait(`${maru.sex}に会う顔があるか？`, true);
      await era.printAndWait(
        `それを思うと頭が真っ白になり、唇を無意識に噛み、胃がひっくり返るような吐き気が出た。`,
      );
      await maru.say_and_wait(
        `${
          callname
        }は逆探知の意識は強いけど、警戒した${maru.uma_sex_title}は、いちばん小さな音も逃さないわ。`,
      );
      await maru.say_and_wait(
        `遠くで${
          callname
        }が慌てて校舎に入るのを見て、一階で話し声が上がるまで待って、すぐ位置を特定できた。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`${you.name}は口を開けたが、何も言えなかった。`);
      await era.printAndWait(
        `一日が一年のような感覚。逃げたいのに、鉛を流し込まれた脚が原地に釘付けになる。`,
      );
      await maru.say_and_wait(
        `本当は、${
          callname
        }が縁日に一緒に行かないって言ってたら、終わるまでとぼけるつもりだったの。`,
      );
      await era.printAndWait(
        `言葉には軽さがあるのに、笑顔ひとつ出さない${maru.name}が${you.name}をじっと見ている。`,
      );
      await maru.say_and_wait(
        `でも、${callname}が覚悟を決めたなら、私も相応の敬意を返さないと。`,
      );
      await maru.say_and_wait(`じゃあ、${callname}。今は${you.name}の番よ。`);
      await era.printAndWait(
        `人類が太古から受け継いだ恐怖で${you.name}の頭は全速で回る。${you.name}の決断は。`,
      );
      era.printButton('「譲らない」', 1);
      era.printButton('「ごめん」', 2);
      era.print(
        [
          '【警告。この選択肢を選ぶと、',
          maru.get_colored_name(),
          ' との関係は取り返しがつきません！】',
        ],
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`……`);
        await era.printAndWait(
          `${you.name}は迷わず${maru.name}の両目を受け止めた。`,
        );
        await maru.say_and_wait(
          `${you.actual_name}、満足できる答えを出しなさい。`,
        );
        await era.printAndWait(
          `${maru.name}の耳がゆっくり後ろへ倒れ、口調も焦り始める。`,
        );
        await you.say_and_wait(`一歩踏み違えたら、万丈の淵だ。`);
        await era.printAndWait(
          `どんどん激しく跳ねる心臓を無理に沈め、冷静なのは自分ではないかのようだ。`,
        );
        await era.printAndWait(
          `自分でもよくわからない。なぜ無意識に拒んだのか。`,
        );
        await era.printAndWait(
          `だが${you.name}は知っている。今は絶対に妥協できない。${you.name}は${maru.name}とままごとをしに来たのではない。その意志を見せないと。`,
        );
        await era.printAndWait(
          `本題に戻る。${maru.name}が気にしているのは何か。${
            maru.sex
          }を苦しめるのは、誓いを破ったこと以外に何がある？`,
        );
        await you.say_and_wait(
          `俺は${you.name}をアイドルの神座から引き下ろしに来たんだ、${maru.name}。`,
        );
        await era.printAndWait(
          `${maru.name}は意図的に少し領域を解放した。${you.name}はレース場の${maru.uma_sex_title}たちが感じる恐怖を味わった。`,
        );
        await you.say_and_wait(
          `アイドルとは何か。崇拝され、運命を預けられる。他人に自分の背中を見せて前へ進ませるためだと言いながら、実際の${you.name}は、こんなにも傲慢だ。`,
        );
        await you.say_and_wait(
          `${you.name}は、無数の人が託した希望の千鈞の重みに耐えられるのか？`,
        );
        await you.say_and_wait(`俺だって知ってる。世界に完璧な人間はいない。`);
        await you.say_and_wait(
          `人である以上、必ず過ちを犯す。必ず間違いを出す。`,
        );
        await you.say_and_wait(
          `過ちは避けられない。悲しみと痛みのあとで、大切さがわかる。`,
        );
        await you.say_and_wait(`だが${you.name}は`);
        await you.say_and_wait(
          `頼れる大${maru.elder_sibling_sex_title}として、悩む${maru.uma_sex_title}たちを助けてもいる。`,
        );
        await you.say_and_wait(
          `だが後始末をしていない。${maru.uma_sex_title}たちが${you.name}を、あらゆる問題から逃げる避難所にしていることに気づいていない。`,
        );
        await you.say_and_wait(
          `こうして、${maru.uma_sex_title}に勝手に希望を預けられ、勝手に裏切ったと思われ、${maru.uma_sex_title}に憎まれる。`,
        );
        await you.say_and_wait(
          `${maru.uma_sex_title}たちは口では${you.name}の背中をアイドルだと言いながら、実際の行動では${you.name}を神のように崇拝している。`,
        );
        await you.say_and_wait(
          `${you.name}にそのつもりはなく、そんな考えもなかった。だが悲劇は、そうして生まれた。`,
        );
        await you.say_and_wait(
          `だから、その神座から降りてくれ。自分のためじゃない。地獄行きの片道列車が見えたから、${you.name}を引き止めてるんだ。`,
        );
        await era.printAndWait(
          `${maru.name}の気持ちはまったく構わず、胸に溜まっていた考えを一気に吐き出した。\n`,
        );
        await maru.say_and_wait(
          `じゃあ${you.name}の解決策はどこにあるの？ 世界に問題を見つける人はいくらでもいる。足りないのは、一歩進んで解決できる人よ。`,
        );
        await maru.say_and_wait(
          `それに、結局は${you.name}の一方的な言い分でしょ？`,
        );
        await maru.say_and_wait(
          `それが${you.name}が恐怖ででっち上げたものじゃないと、誰がわかるの？`,
        );
        era.printButton(
          `${maru.name}に嫌われる危険を冒したように、${you.name}も、なぜ、誰のために危険を冒したか知ってるはずだ！`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `続けようとした${maru.name}は、${you.name}の言葉に遮られた。`,
        );
        await you.say_and_wait(
          `後輩たちに大量の希望と期待を預けられた経験はない。だが知ってる。${maru.name}は愛で${
            maru.couple_title
          }を助けている。`,
        );
        await you.say_and_wait(
          `粉々になっても、二度と戻れなくても${
            maru.couple_title
          }を助ける、その愛というものだ！`,
        );
        await you.say_and_wait(
          `だから、${maru.name}が自分の道を歩くのを止めない。`,
        );
        await era.printAndWait(
          `${you.name}が領域に真正面から向き合うのは初めてだ。だが胸に言い難い温もりと情熱があり、${you.name}は${
            maru.sex
          }の両目を見つめた。`,
        );
        await you.say_and_wait(
          `心の悲しみ、未来への迷い、少し分けてもいいか？`,
        );
        await you.say_and_wait(
          `一人で五指も見えない闇の中を進むなら、前方を照らす明かりがあればいい。`,
        );
        await you.say_and_wait(
          `俺に任せてくれ。トレーナーとしてはまあまあだが、明かりとしては自信がある。`,
        );
        await you.say_and_wait(`一歩ずつ、少しずつ、他人のために死ぬ。`);
        await era.printAndWait(
          `それから${you.name}は、${maru.sex}の気勢がゆっくり消え、だんだん小さくなるのを見た。`,
        );
        await era.printAndWait(
          `最後に${maru.name}は、自責するようにため息をついた。`,
        );
      } else {
        await maru.say_and_wait(`……`);
        await era.printAndWait(
          `一年を過ごしたように長く、${you.name} は ${maru.name} に犯人を見る目でじっと見られた。最後に${
            maru.sex
          }は視線を引いた。`,
        );
        await maru.say_and_wait(`じゃあ、これからの日々も、よろしくね♪`);
        await era.printAndWait(
          `何も起きなかったかのように、${maru.sex}は笑顔で${you.name}に手を差し出した。`,
        );
        await you.say_and_wait(`よろしく`);
        await era.printAndWait(
          `${maru.sex}は相変わらず柔らかい口調だが、${you.name} は知っている——`,
        );
        await era.printAndWait(`何か温かいものが、闇の中へ、自分の魂ごと\n`);
        await era.printAndWait(`そして、やっと 終わった。`);
        await era.printAndWait(`残ったのは静寂だけ。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏季合宿終了';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.print(`合宿は思ったより早く過ぎたわね。`);
      maru.print(
        `テイオー ${maru.couple_title}が砂浜で青春の魂を燃やし、必死に走る姿。`,
      );
      maru.print(`深夜ひとりで潮の満ち引きを見るのとは、また違う感じね。`);
      await maru.say_and_wait(`…… ${callname}。`);
      maru.print(`意外と、${callname} の裏切りにそこまで怒らなかった。`);
      maru.print(`まるで、まるで。`);
      era.drawLine();
      await maru.say_and_wait(`合宿は思ったより早く過ぎたわね。`);
      era.printButton(`「ああ。」`, 1);
      await era.input();
      await you.say_and_wait(`本気になると、時間はいつも足りないな。`);
      await maru.say_and_wait(`でも、時は戻らないでしょう？`);
      await you.say_and_wait(`少なくとも、楽しい思い出は残しただろ？`);
      await maru.say_and_wait(
        `ふふ、そうね。テイオー ${maru.couple_title}との昨夜の打ち上げ、その前は ${callname} と海岸で水遊び、もっと前は ${callname} と過ごした町の祭り。`,
      );
      await maru.say_and_wait(`そう数えると、実際はとても充実してたわ。`);
      await maru.say_and_wait(`八月の頭に戻って、もう一度始めたいわね～`);
      era.printButton(`「たぶん、時間が意味で固定されたんだろ？」`, 1);
      await era.input();
      await you.say_and_wait(
        `意味を与えられたから、最後に何かをもたらしたんだろ？`,
      );
      await maru.say_and_wait(`ふふ、面白い考えね。`);
      await maru.say_and_wait(
        `なら、${callname}、最後の夏季合宿を一緒に楽しんでくれる？`,
      );
      await you.say_and_wait(`？`);
      await era.printAndWait(
        `ほどなく、助手席の ${you.name} は運転に心理的な影を持ち始めた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_33: (() => {
    const title = '水と砂';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `幸いこの期間、${maru.name}はもともとのトレーニングを落としていなかった。`,
      );
      await era.printAndWait(`その慰めの下で、心は少し軽くなった。`);
      await era.printAndWait(`仕事から目を外し、立ち上がってあくびをした。`);
      await era.printAndWait(
        `砂浜は神秘の薄い紗に包まれたようだ。すぐ先では、${maru.uma_sex_title}たちが気勢高く砂浜を回って体力トレーニングをしている。`,
      );
      await you.say_and_wait(`もうこんな時間か。`);
      await era.printAndWait(
        `あの縁日のあと、${maru.name}との関係は一歩近づいたようだ。`,
      );
      await era.printAndWait(
        `${maru.sex} の心の奥へ入る許可を、やっと得たみたいだ。`,
      );
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(
        `どうしても ${maru.sex} と一度ちゃんと話すべきだ。機会は一度だけかもしれない。`,
      );
      await era.printAndWait(`だから、決めた`);
      era.printButton(`「${maru.name}を探す」`, 1);
      era.printButton(`「${maru.name}を探す」`, 2);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `夕陽の残りが砂浜に降り、金色の光と細かい砂が交わり、砂浜全体が金に鍍金されたようだ。`,
      );
      await era.printAndWait(`なぜか、焦燥がだんだん消えた。`);
      await era.printAndWait(
        `つま先と砂の摩擦がもたらす痺れは、すぐに快感に変わり、気持ちも高ぶってきた。`,
      );
      await era.printAndWait(
        `すぐ先、橙と深い青の境に立つ人影が、${maru.uma_sex_title}たちが教えてくれた${maru.name}だろう。`,
      );
      await era.printAndWait(
        `見つめている人影も、こちらの到来に気づいたようだ。それから——`,
      );
      await era.printAndWait(`声は波に静かに溶けた。`);
      await era.printAndWait(
        `波が岸を軽く叩き、寄せては返す音が、一日の物語を語っているようだ。`,
      );
      era.drawLine();
      await maru.say_and_wait(`${callname}！ こっちの水、冷たいわよ！`);
      await era.printAndWait(`${maru.name}は嬉しそうに手を振った。`);
      await you.say_and_wait(`${maru.name}。`);
      await era.printAndWait(
        `少し複雑な目で${maru.name}を見てから、靴を脱ぎ、裸足で海へ向かった。`,
      );
      await era.printAndWait(`冷たい感触より先に、かすかな抵抗を感じた。`);
      await era.printAndWait(
        `だが意識して近づくにつれ、その不快感もゆっくり消えた。`,
      );
      era.printButton(`「夏の感じはどうだ？」`, 1);
      era.printButton(`「海水の感じ、ベリークールか？」`, 2);
      await era.input();
      await maru.say_and_wait(
        `体が涼しくなっただけじゃない。熱い心まで、一気に静かになったわ。`,
      );
      await you.say_and_wait(
        `${maru.name}が楽しそうに遊ぶ姿を見てると、明日が待ち遠しくなるな。`,
      );
      await maru.say_and_wait(`明日も、晴れのいい天気でしょうね。`);
      await era.printAndWait(
        `${maru.teen_sex_title}は浜の上を見た。夕方になっても練習を続ける${maru.uma_sex_title}たちだ。`,
      );
      await you.say_and_wait(
        `何かを失って、痛みの中で輾転反側して、はじめて自分がどれほど傲慢にすべてを浪費していたか、骨に刻まれるんだろう。`,
      );
      await maru.say_and_wait(
        `……そうして初めて、痛みと迷いのあと、心血を注いだものが本当の輝きを放つんでしょうね。`,
      );
      await maru.say_and_wait(
        `迷いと痛みが覚悟に変わるその瞬間を、ずっと待っていたわ。`,
      );
      await era.printAndWait(
        `言い終えると、二人は沈黙した。それから、こちらが先に口を開いた`,
      );
      await you.say_and_wait(`${maru.name}、聞いてくれるか？`);
      await maru.say_and_wait(
        `もう ${callname} に女神の宝座から下ろされたのに、今度は ${callname}、エッチなことするつもり？`,
      );
      await era.printAndWait(
        `怖がって微かに震える（？）${maru.name}を見て、さっきの過激な発言で思わず顔が熱くなった`,
      );
      era.printButton(`「ごほん。実は、伝えたいことがある。」`, 1);
      await era.input();
      await era.printAndWait(
        `トレーナーとしての矜持を保つため（今さらそんなものがあるのか）、姿勢を整えてから`,
      );
      era.printButton(`「もう一度、輝く背中を見せてくれ！」`, 1);
      era.printButton(
        `「どうしても、あの背中、あの風を、もう一度吹かせてくれ」`,
        2,
      );
      await era.input();
      await maru.say_and_wait(`！ え？ ${callname} のお願いでも、それは`);
      await you.say_and_wait(
        `いや、わかってる。違う、俺だけじゃない。知ってる人も、知らない人も、みんなその瞬間を待ってる。`,
      );
      await maru.say_and_wait(`${callname} がそう言っても`);
      era.printButton(`「その先に${maru.name}が見えたのか？」`, 1);
      await era.input();
      await maru.say_and_wait(
        `努力すれば必ず成功するという幻想は、いつだって現実に壊されるんじゃないの？`,
      );
      await you.say_and_wait(
        `いや。最終結果より、人は痛みから逃げようとして、最後の瞬間に気づく。夢を追う過程でいちばん貴重なのは意味だ。`,
      );
      await you.say_and_wait(
        `それに、そうであっても、そんな自分を嫌悪するより、迷いと痛みのあと、疲れ果てた人たちは、世に美と呼ばれるものを見る。`,
      );
      await you.say_and_wait(
        ` こうして、期待し、願い、迷いがやっと明らかになる時を祈る。`,
      );
      await you.say_and_wait(
        ` それから、美に気づいた瞬間。そのまばゆい美に完全に虜になる一瞬。`,
      );
      await you.say_and_wait(` 人生は苦難に満ちていても。`);
      await you.say_and_wait(` 出会ったことのない物事に慌てても。`);
      await you.say_and_wait(` その痛みを他人に話せなくて、深く抑えた心でも。`);
      era.printButton(`「俺も、あの美しい背中を見たい。」`, 1);
      await era.input();
      await you.say_and_wait(
        ` だが裏から見れば、それは人を生まれ変わらせる、いちばん強い風（助け）だ。`,
      );
      await you.say_and_wait(`きっと、きっとあの美しい背中を追って思い出す！`);
      await you.say_and_wait(`だから、力を貸してくれ。`);
      await era.printAndWait(`${maru.sex}の両目を、そのまま見つめた。`);
      await maru.say_and_wait(` ${callname} は、私に何をさせるつもり？`);
      await you.say_and_wait(`学園の芝で、いちばん忘れられない一幕を見せる。`);
      await maru.say_and_wait(`期待してるわよ？`);
      await era.printAndWait(
        `その笑顔は春に初めて咲く花のようだ。${maru.name}はその瞬間を待っている。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_34: (() => {
    const title = '無風帯';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, emperor, you) => {
      emperor.name = '皇帝';
      await era.printAndWait(`手の中の計算用紙を見てぼんやりした。`);
      await you.say_and_wait(
        `違う。これでは${maru.sex}の心の結びは解けない。`,
        true,
      );
      await era.printAndWait(`目の前の計算用紙を丸め、適当に傍へ捨てた。`);
      await era.printAndWait(
        `飛んだ紙団子は放物線を描き、他の紙団子に当たった。`,
      );
      await era.printAndWait(`逃げたい気持ち、できない落胆が、こうして広がる`);
      await era.printAndWait(`トントン。`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `${you.actual_name_with_title}ですか？`,
      );
      era.printButton(`「そうです。何か？」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `あ、トレーナーの${you.adult_sex_title}、ええ。会長がトレーナーの${
          you.adult_sex_title
        }へ一言預かっています。`,
      );
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}A`,
        `『欲しい答えは、こちらにある。』`,
      );
      await you.say_and_wait(`……わかった。今から行く。`);
      await you.say_and_wait(
        `いつから。いや、最初から傍で見ていたのか？`,
        true,
      );
      era.drawLine();
      await era.printAndWait(`${maru.uma_sex_title}の後ろについて行った。`);
      await you.say_and_wait(
        `シンボリルドルフは、どこまで把握している？`,
        true,
      );
      await era.printAndWait(`わけのわからない苛立ちが内心を占めた。`);
      await you.say_as_passer_by_and_wait(
        `${maru.uma_sex_title}`,
        `失礼します `,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}に案内され、夜の生徒会室へ来た。`,
      );
      await era.printAndWait(`eclipse first，the rest nowhere。`);
      await era.printAndWait(
        `巨大な扁額と、書類に没頭する皇帝に、冷や汗が落ちた。`,
      );
      await emperor.say_and_wait(`来たか？`);
      await era.printAndWait(
        `今気づいたかのようだ。手元の仕事を止めた皇帝が、余裕のある微笑でこちらを見る。`,
      );
      await emperor.say_and_wait(`今夜の月は、どう思う？`);
      await you.say_and_wait(
        `今夜の月は昨日と大差ない。それに、皇帝陛下、また会いましたね。`,
      );
      await era.printAndWait(
        `${maru.sex} を怒らせてはいけない。さもなければ恐ろしいことになる。`,
      );
      await era.printAndWait(
        `過度に媚びてもいけない。${maru.sex} の興味が消える。`,
      );
      await emperor.say_and_wait(
        `これほど優秀なトレーナーに出会えて、トレセンの生徒会長としても光栄だ。`,
      );
      await you.say_and_wait(
        `相手が度量を見せたときは、拒まないほうがいい。`,
        true,
      );
      await emperor.say_and_wait(`それから`);
      await era.printAndWait(
        `その答えには可否を示さず、皇帝はすぐに二つ目の問いを出した。`,
      );
      await emperor.say_and_wait(
        `トレーナーと${maru.uma_sex_title}の関係は、どうあるべきだと思う？ ${maru.name}のトレーナー。`,
      );
      await era.printAndWait(
        `最後の呼びかけだけ、わざと強くした。おそらくヒントだ。`,
      );
      await you.say_and_wait(
        `${maru.uma_sex_title}とトレーナーは、支え合う関係だと思う。`,
      );
      await emperor.say_and_wait(`……それから？`);
      await era.printAndWait(`皇帝は戯れるような顔でこちらを見た。`);
      await you.say_and_wait(`たとえば二人三脚のような`);
      await emperor.say_and_wait(`その程度なら。なぜ今の境遇に落ちた？`);
      await emperor.say_and_wait(
        `トレーナー、つまり${maru.uma_sex_title}の指導者として。`,
      );
      await emperor.say_and_wait(
        `道のないところに道を開き、通った道に新しい道を出し、他人を未知の地へ導く者だ。`,
      );
      await emperor.say_and_wait(
        `${maru.uma_sex_title}が未来の迷いと不安に直面したとき、${maru.uma_sex_title}の展望と自信を適切に管理する者だ。`,
      );
      await emperor.say_and_wait(`どれを果たした？`);
      await you.say_and_wait(`……`);
      await you.say_and_wait(
        `皇帝は、トレーナーに必要なリーダーシップを語っている。`,
        true,
      );
      await you.say_and_wait(
        `ここで${maru.sex} が求めているのは、${maru.name}のトレーナーとしての資格を証明することだ。`,
        true,
      );
      await you.say_and_wait(`なら`, true);
      await you.say_and_wait(
        `……行く先は ${maru.sex} と同じ道だ。船に乗る条件は、水夫になること。`,
      );
      await you.say_and_wait(
        `刻一刻、自分の目標へ進んでいるかを見ている。刻一刻、船長への協力が自発であり、自分の選択だと知っている。`,
      );
      await you.say_and_wait(
        `これは自分で選んだ条件で、自分の場所で、自分の意志で出した選択だ。`,
      );
      await you.say_and_wait(
        `要らない重荷、誤解される危険、ひとりの孤独に耐える。`,
      );
      await you.say_and_wait(`……ある意味では、理想へ捧げた供物だ。`);
      await you.say_and_wait(`だが、理想の道に代価がないはずがない。`);

      await you.say_and_wait(
        `だから、従っているのは船長の命令というより、自分の選択だ。`,
      );
      await emperor.say_and_wait(
        `服従は、結局のところ屈服を美しく言い換えただけだ。`,
      );
      await emperor.say_and_wait(`恐怖の中で適当に引き剥がした嘘だろう？`);
      await you.say_and_wait(
        `……皇帝陛下は、ドジョウという生き物をご存知ですか。`,
      );
      await emperor.say_and_wait(
        `水田や池にいるありふれた生き物だな。それが？`,
      );
      await you.say_and_wait(
        `なら皇帝もご存知でしょう。ドジョウは捕まえにくい。`,
      );
      await you.say_and_wait(
        `水田の底を滑り回り、捕まえにくい。運よく触れても、すぐ手から滑り落ちる。`,
      );
      await you.say_and_wait(
        `逃げ続けてきた私たちは、狡猾なドジョウと何が違うのか。`,
      );
      await you.say_and_wait(
        `負うべき責任の前を滑り抜けて生きるのは、痛みを引き受けるより本当に幸福なのか。`,
      );
      await you.say_and_wait(`屈服の根源は弱さだ。`);
      await you.say_and_wait(
        `失敗に慣れ、失敗を受け入れ、最終的に失敗に適応した人間は、失敗の仕方しか知らず、成功するかもしれないと夢見ることも、夢見る勇気もない敗者だ。`,
      );
      await you.say_and_wait(`……失敗から次の失敗へ進む者に、成功は来ない。`);
      await you.say_and_wait(
        `泣き叫びながら裸で生まれ、泣き叫びとともに裸で去る。何かしてこの世界に跡を残さず、未練を抱えたまま去るのは、少し惜しいだろう。`,
      );
      await you.say_and_wait(`だから、一つの決定に従う。`);
      await you.say_and_wait(
        `……トレーナーになると決めた以上、いちばん力を発揮できる場所は当然トレセンだ。`,
      );
      await you.say_and_wait(
        `進む方向が${maru.name}の祈るものと完全に同じかは確定できないが、`,
      );
      await you.say_and_wait(
        `${maru.name}の信頼と愛は十分に頼れると確信している。だから疑いは行動に替える。`,
      );
      await emperor.say_and_wait(`……指揮者としては、かろうじて合格だ。`);
      await emperor.say_and_wait(
        `世界観はまだ幼稚で、価値観も凡庸にすぎない。`,
      );
      await emperor.say_and_wait(
        `唯一、線を踏んでいるのは、確固たる展望だけだ。`,
      );
      await emperor.say_and_wait(`……だが、今夜の要点はそこではない。`);
      await era.printAndWait(`皇帝は微笑という仮面をつけてこちらを見た。`);
      await emperor.say_and_wait(`映画は好きか？`);
      await era.printAndWait(`突然その問いを投げた皇帝に、少し戸惑った。`);
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `体裁よく答えることを考えていると、皇帝は勝手に話し続けた。`,
      );
      await emperor.say_and_wait(
        `こんな場面を想像してみろ。二人のトレーナーが同じ西部劇を選び、こんな一幕を見た。保安官とカウボーイが決闘し、銃声のあと、一人が死に、一人が生きた。観客である二人の態度はそれぞれ違う——`,
      );
      await era.printAndWait(`皇帝はわざと末尾を引き延ばし、返事を待った。`);
      await you.say_and_wait(
        `映画の違う役に入り込んで、役と同じ悲喜を味わっているのでしょう。`,
      );
      await emperor.say_and_wait(
        `死んだのはカウボーイを追った高潔な警官で、生きたのは指名手配の罪犯だとしてもか？`,
      );
      await you.say_and_wait(
        `……罪犯に入り込んだトレーナーは、自分の美的快楽を壊さないため、潜在意識ですべての瑕疵を消したのでしょう。`,
      );
      await you.say_and_wait(
        `……もう一人は主役の罪犯を認めず、カウボーイの欠陥に耐えられない。`,
      );
      await emperor.say_and_wait(`見事な論述だ。想像以上に優秀だな。`);
      await era.printAndWait(`皇帝は拍手した。`);
      await emperor.say_and_wait(
        `では、本当の  ${maru.name}を、どれほど理解している？`,
      );
      await emperor.say_and_wait(
        `自分がカウボーイに入り込んだ……いわゆる観客ではないと、どうわかる？`,
      );
      await emperor.say_and_wait(`ご苦労だった。`);
      await era.printAndWait(`皇帝は立ち上がり、遠くのトレーニング場を見た。`);
      await era.printAndWait(
        `芝で懸命に練習する${maru.uma_sex_title}たちの声が、トレセンに響いている。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_37: (() => {
    const title = '思い';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`ふんふん～、もう恋人同士の関係じゃない？`);
      await era.printAndWait(
        `雑談で冗談に${maru.name}の家にしばらく泊まると言ったら、相手はあっさり同意した。`,
      );
      await era.printAndWait(
        `手を引いてショッピングモールで用品を選び回り、最後は愛車にも載りきれない量になった。`,
      );
      await era.printAndWait(
        `${maru.name}と相談した結果、物流会社で全部送ってもらうことにした。`,
      );
      await era.printAndWait(
        `同じ釜の飯を食うせいで、二人の絆はますます深まった。`,
      );
      await you.say_and_wait(
        `そろそろだ。今こそ${maru.name}にあの一歩を踏ませないと。`,
        true,
      );
      await era.printAndWait(
        `失敗への恐れで、ちょうどいい機会が手元から滑り落ちる。`,
      );
      await era.printAndWait(`何かを追い求めたいのに、手が出せない。`);
      await you.say_and_wait(
        `……${maru.name}に踏ませるというより、俺がこの一歩を踏み出すんだ。`,
        true,
      );
      await era.printAndWait(
        `買った家具を確認しながら、どう動くか考えている。`,
      );
      era.drawLine({ content: '夕飯のあと' });
      era.printButton(`「明日、一緒に秋を見ないか？」`, 1);
      await era.input();
      await era.printAndWait(
        `空気がいちばんいいときに、来週の計画を${maru.name}に伝えるつもりだ。`,
      );
      await maru.say_and_wait(`そういえば、秋を楽しむ季節になったわね。`);
      await maru.say_and_wait(`なら、明日は一緒に遠出しましょう？`);
      await era.printAndWait(
        `${maru.name}は箸を置き、両手を合わせて笑顔でこちらを見た。`,
      );
      await you.say_and_wait(`よかった！`, true);
      await you.say_and_wait(`いいな。芸術の秋、読書の秋って言うだろ？`);
      await you.say_and_wait(
        `夏の暑さや冬の寒さより、秋のこの爽やかな季節がいちばん芸術の感情を吐き出すのに向いてる。`,
      );
      await you.say_and_wait(
        `それに、秋に${maru.name}との素敵な思い出を残したい。`,
      );
      await maru.say_and_wait(
        `あら、${callname}、そんなに私を気にかけてるの？`,
      );
      await maru.say_and_wait(
        `${maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'}な私も、${callname} と素敵な思い出を残したいわ……`,
      );
      await maru.say_and_wait(`ふふ～、明日の予定、もう楽しみね♪`);
      await era.printAndWait(`${maru.name}の機嫌はとてもよさそうだ。`);
      era.drawLine({ content: '翌朝' });
      await maru.say_and_wait(` ${callname}？ 起きた？`);
      await era.printAndWait(
        `まだスイッチが入っていない目をこすり、もがいて起きた。`,
      );
      era.printButton(`「約束の起床時間より少し早いな」`, 1);
      await era.input();
      await era.printAndWait(
        `朝早くから${maru.name}の久しぶりに活気ある声を聞いて、この先に希望が湧いた。`,
      );
      await maru.say_and_wait(
        `そういえば最近、美術の展覧会があるみたい。そこを最初の目的地にしましょう。`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `もう昼近いわ。${callname}、私の作った弁当、食べてみる？`,
      );
      era.drawLine();
      await you.say_and_wait(`クレーンゲームは本当に難しいな。`);
      await era.printAndWait(
        `${maru.name}のぬいぐるみを抱いた${maru.teen_sex_title}が、幸せそうに微笑んでいる。`,
      );
      await you.say_and_wait(`十分だ。`);
      era.drawLine();
      await era.printAndWait(`最後の一駅は学園の屋上に戻った。`);
      await maru.say_and_wait(`風も、成長するんでしょうね。`);
      await era.printAndWait(
        `${maru.name}の視線に沿って学園全体を見た。金色のイチョウの葉が風に乗って舞い散る。`,
      );
      await maru.say_and_wait(
        `新しく生まれた風は、いつも憂いなく空へ飛んでいく。`,
      );
      await maru.say_and_wait(
        `でも、枯葉の悲しみに触れたあと、${maru.sex}の足取りは重くなる。`,
      );
      await maru.say_and_wait(
        `${maru.sex}も、枯葉に空の自由を感じさせたい。だから優しく抱き、一緒に憂いのない空へ連れていこうとする。`,
      );
      await maru.say_and_wait(
        `だが枯葉を縛る大地が、結局は風の抱擁に勝つ。枯葉は空へ飛ぶ途中で翼を折る。`,
      );
      await maru.say_and_wait(`最後、枯葉は大地に還る。`);
      await era.printAndWait(
        `${maru.teen_sex_title}の聖域へ、足を踏み入れ始めた。`,
      );
      await you.say_and_wait(`それでも、枯葉は風の導きで自分の決定を出した。`);
      await you.say_and_wait(`この過程ほど、枯葉の生命力を示すものはない。`);
      era.printButton(`「${maru.name}……話がある。」`, 1);
      await era.input();
      await maru.say_and_wait(`ん？`);
      await era.printAndWait(
        `夕陽の残りが${maru.name}の長い髪に降り、${maru.sex} に金色の輝きをかけた。`,
      );
      era.printButton(`「来週を、ちゃんと楽しみにしていてくれ！」`, 1);
      era.printButton(`${maru.sex}に、そのとき直接見せる。`, 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `じゃあ、しっかり期待してるわ。${callname} がどれだけのサプライズをくれるか。`,
        );
        await era.printAndWait(
          `何かに薄く気づいたのか、${maru.name} は瞬きした。`,
        );
      } else {
        await you.say_and_wait(`この先、絶対びっくりさせる！`, true);
        await era.printAndWait(`${you.name} は息をつき、来週を待った。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_38: (() => {
    const title = '無風';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} minoru ハヤカワタヅナ
     * @param {CharaTalk} taste アキカワヤヨイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, minoru, taste, you, callname) => {
      maru.print(`そろそろ終わりにしないと。`);
      maru.print(
        `走ることが喜びを生まないなら、どれだけ頑張っても一つの問いに答えられない。`,
      );
      maru.print(`なぜ私は、この痛みに耐えなければならないの？`);
      maru.print(
        `だから、後輩たちがレース場で活躍する姿を、こうして見ていればいい！`,
      );
      maru.print(`今の私は、特にそれが得意よ！`);
      await maru.say_and_wait(`……`);
      maru.print(`でも、どうして胸はまだ少し空っぽなの？`);
      maru.print(`何か、探さなきゃいけない答えが待っているみたい？`);
      await maru.say_and_wait(`答え、か？`);
      maru.print(
        `まあ、いいか。気持ちを立て直して、大好きな ${callname} を探しに行きましょう！`,
      );
      maru.print(
        `この先どの道を選んでも、${callname} は優しく励ましてくれるでしょうね。`,
      );
      maru.print(`そういえば、${callname} が贈り物をくれるみたい。`);
      await maru.say_and_wait(`期待して待ってるわよ？ ${callname}？`);
      era.drawLine({ content: '理事長室' });
      await era.printAndWait(
        `皇帝と、ずっと${maru.name}を支えてきた${maru.uma_sex_title}たちの助けで、今日までに署名の90%を集めた。`,
      );
      await era.printAndWait(
        `理事長室の扉を軽く叩き、お入りくださいの声を聞いて扉を押した。`,
      );
      await taste.say_and_wait(
        `質問！ このトレーナーは夜のトレーニング場を借りて何をするつもり？`,
      );
      await era.printAndWait(`簡単な挨拶のあと、単刀直入に構想を出した。`);
      await you.say_and_wait(
        `担当の${maru.uma_sex_title}${maru.name}に、もう一度希望を燃やしてほしい。`,
      );
      await taste.say_and_wait(
        `驚き！ なぜトレセンのトレーニング場でなければだめなの？`,
      );
      await you.say_and_wait(
        `このトレーニング場は、ここで汗を流した無数の${maru.uma_sex_title}を載せている。${maru.uma_sex_title}たちが懸命に挑む姿こそ、${maru.name}が望むものだ。`,
      );
      await you.say_and_wait(
        `これが、${maru.uma_sex_title}たち連名の請願書です。`,
      );
      await era.printAndWait(
        `腰を曲げ、びっしりした署名を目の前の${maru.teen_sex_title}に渡した。`,
      );
      await era.printAndWait(
        `相手は一つ一つの署名を確かめる。${maru.teen_sex_title}の頭の子猫は見知らぬこちらに興味があるらしく、にゃ～にゃ～と回り続けた。`,
      );
      await era.printAndWait(
        `${maru.teen_sex_title}はつま先立ちでこちらと目を合わせなければならないが、今は息ひとつ大きくできない。最終の宣告を待っている。`,
      );
      await taste.say_and_wait(
        `感動！ トレセンの${maru.uma_sex_title}たちは、想像以上に団結しているわ。`,
      );
      await taste.say_and_wait(`このトレーナー。`);
      era.printButton(`「はい！」`, 1);
      await era.input();
      await taste.say_and_wait(`同意！ この活動、私も参加する！`);
      await era.printAndWait(
        `${maru.teen_sex_title}は万年筆を取り、丁寧にアキカワヤヨイの名を紙に書いて返してくれた。`,
      );
      era.printButton(`「理事長、ありがとう！」`, 1);
      await era.input();
      await era.printAndWait(
        `微笑む${maru.teen_sex_title}が「愉！悦！」の扇を開く。傍らの ${
          minoru.name
        } は苦悩と喜びが交じった複雑な顔で ${taste.name} と${you.name}を見ている。`,
      );
      await era.printAndWait(`紙を慎重にしまい、理事長室を出た。`);
      era.drawLine();
      maru.print(
        ` ${callname} は一緒に商店街へ行こうと言いながら、用意したクーポンを出した。`,
      );
      maru.print(
        `言動はかなり怪しいけど、${callname} から誘われるデートは珍しい。`,
      );
      maru.print(`餌としても、豪華すぎるわ。`);
      maru.print(
        `笑顔でこの贈り物を受け取ったあと、${callname} とサイゼリヤで簡単に昼を食べ、一緒に映画を見た。`,
      );
      maru.print(
        `平日のせいか、この回の観客は意外と少なく、二人で隣の席を取るのは簡単だった。`,
      );
      maru.print(
        `${maru.uma_sex_title}が脆さからゆっくり成熟していく励まし映画のようだ。${maru.uma_sex_title}が無数の苦難の中でも歯を食いしばって進む姿を見て、思わず ${maru.sex} に拍手したくなった。`,
      );
      await you.say_and_wait(
        `何度こんな場面を見ても、胸に自然と感動と力が湧くよな。`,
      );
      maru.print(`深く同感。`);
      maru.print(
        `映画のあと、近くでいちばん難しいというクレーンゲームに挑んで、予想どおり失敗した。`,
      );
      maru.print(
        `慰めようとした ${callname} が逆に熱くなって、どうしてもぬいぐるみを取ると言い出した。`,
      );
      maru.print(`慰められる側が慰め役になる。これも運命の醍醐味でしょうね。`);
      era.printButton(`「今夜、一緒にトレセンを見に行かないか？」`, 1);
      await era.input();
      maru.print(
        `百貨店の高級レストランで食事をしながら、そう言う ${callname}。`,
      );
      await maru.say_and_wait(
        `あら、${callname}、やっとこの贈り物の正体を明かすの？`,
      );
      await you.say_and_wait(`というか、興奮しすぎてフォークが握れない。`);
      await maru.say_and_wait(`そんなに興奮してるの？`);
      await you.say_and_wait(`ああ。この程度の贈り物だ。絶対に印象に残る。`);
      maru.print(` ${callname} が冗談に真摯に返すので、思わず期待し始めた。`);
      await maru.say_and_wait(`じゃあ、この先はしっかり楽しまないと！`);
      maru.print(`法定の飲酒年齢は来年だけど、このくらいなら大丈夫でしょう？`);
      maru.print(
        `酒を飲んだせいで、話しながら ${callname} とゆっくりトレセンへ向かった。`,
      );
      maru.print(
        `話しているうちに、話題が以前引退した${maru.uma_sex_title}へ急に曲がった。胸が突然痛んだ。`,
      );
      await you.say_and_wait(
        `そういえば、前に引退した${maru.uma_sex_title}は、今はトレーナーの方向で頑張ってる。`,
      );
      await maru.say_and_wait(`トレーナーを目指すのも、一つの道ね。`);
      maru.print(`${maru.sex}は、やっと自分の目標を見つけたみたい。`);
      maru.print(`……胸が突然痛んだ。`);
      await you.say_and_wait(
        `生まれつきある領域に向かない人もいる。でも手元の資源を考え直して別の方向へ進めば、大きなサプライズが待ってるかもしれない！`,
      );
      maru.print(`何を言えばいいかわからず、沈黙を保った。`);
      maru.print(
        `トレセン学園まであと一条。何か行事があるみたいで、笑い声が耳に届いた。`,
      );
      maru.print(`おかしい。普段のトレセン、こんなに騒がしい？`);
      maru.print(`これが ${callname} の用意した贈り物。`);
      maru.print(`まったく、ずいぶん遠回りしたわね。`);
      await maru.say_and_wait(`一緒に見に行きましょう？`);
      maru.print(`そうして ${callname} の手を引き、トレセンへ走った。`);
      maru.print(`こんな楽しい走り、懐かしいわ。`);
      maru.print(
        `声の振幅の方向に沿い、トレーニング場の位置へゆっくり向かった。`,
      );
      maru.print(
        `祭りのようだ。トレーナーと${maru.uma_sex_title}たちが談笑し、芝の上で汗を流したり、観客席で話し、歓声を上げたりしている。`,
      );
      maru.print(
        `理事長とハヤカワ${
          maru.adult_sex_title
        }が来たことに気づいた。前者は「愉！悦！」と書いた扇を開き、後者は微笑んでくれる。ついでに、理事長の頭の子猫が気持ちよさそうに尻尾を振っている。`,
      );
      maru.print(`誰もが、満足した笑顔を浮かべている。`);
      maru.print(`祭りを楽しんでいるみたい。`);
      await maru.say_and_wait(`懐かしいわ。`);
      maru.print(`私の世界は、かつて色に満ちていた。`);
      maru.print(
        `幼いころ目にした真っ赤なスーパーカー。かっこいい外観に、当時の私は深く惹かれた。`,
      );
      maru.print(
        `あの子の囁きが聞こえた。私と同じように、自由に走ることを欲しがっていた。`,
      );
      maru.print(
        `だから幼い私は密かに誓った。将来車を買うなら、この車を選ぶ、と。`,
      );
      maru.print(
        `共鳴する日を迎えるため、カタログの写真を見ながら、運転技術を懸命に練習した。`,
      );
      maru.print(`免許を取った日、自分の免許を自分の手で受け取った。`);
      maru.print(`夢のような非現実感。現実の存在を何度も確かめた。`);
      maru.print(
        `トレーニングで味わった酸いも甘いも。得た喜び以外に、迷いも静かに来た。`,
      );
      maru.print(
        `こんな私は、いちばん幸福な状態だったのかも？ いや、今の毎日もとても楽しいけど。`,
      );
      maru.print(
        `勝利のあとの栄誉より、レース前に最近の話を分け合い、芝の上で汗を流して走り、急な呼吸が両脚にもっと強い力を爆発させる。`,
      );
      maru.print(`あの————三女神だけが知る世界に達するまで。`);
      maru.print(
        `みんなが走る喜びを感じられたら、私の理想の世界も遠くないでしょう。`,
      );
      maru.print(`だが、理想と現実は永遠に矛盾するのかもしれない。`);
      maru.print(
        `多くの${maru.uma_sex_title}は、その喜びを感じる前に、幾重もの茨に服を掴まれ、歩みを止められる。`,
      );
      maru.print(`叫び、誰かが${maru.couple_title}を助けてくれるよう祈る。`);
      maru.print(
        `だが唯一の解決は、${maru.couple_title}自身が悟って初めて抜け出せる。`,
      );
      maru.print(
        `祈る。才能のない自分を${maru.couple_title}が許して、その重い荷（昼夜、無能な自分を呪う荷）を下ろしてくれるよう祈る。`,
      );
      maru.print(`こうして、言い難い悲しみは悲しみの白黒二色になった。`);
      maru.print(`私の世界に黙って立ち、緘黙の城壁、灰色の幽霊。`);
      maru.print(`幽霊のように反響し、徘徊し、叫ぶ。`);
      maru.print(
        `迷う${maru.uma_sex_title}たちのためであり、自分のためでもある。`,
      );
      maru.print(`後輩からの崇拝、芝で感じた風、懐かしい過去。`);
      maru.print(
        `だが過去の思い出にばかり沈み、悔恨という快感を搾るのは、正しくない。`,
      );
      maru.print(`だから、未来へ進んでみることにした。`);
      maru.print(`選んだ道が正しいかどうか、自分でもわからない。`);
      maru.print(
        `……もしかしたら、過去の子守唄の中で機会を待つほうが正しかったのかもしれない。`,
      );
      maru.print(`こんな自分は準備不足で、覚悟も情熱の産物にすぎない。`);
      maru.print(`僻地の小道で、エンストの悩みに会うかもしれない。`);
      maru.print(`何が、これを救えるのか？\n`);
      maru.print(`意味。それが私の見つけた答え`);
      maru.print(
        `『未来のある瞬間、私は何をした』。その意味が、この先受けるかもしれない恐ろしいことを救うに足りる。`,
      );
      maru.print(
        `自分の角度から見ない。人間はもともと、時間を載せてどこかへ流れる輸送手段だから。`,
      );
      maru.print(`世界よ、あなたはこんなにも美しい。`);
      maru.print(
        `自分の欲望のためでも、他人のためでもなく進む。風の視点で、目の前の${maru.uma_sex_title}を見る。`,
      );
      maru.print(
        `微風になりたい。いや、私（微風）は時間の上に自分の意味を刻んだ。`,
      );
      maru.print(`結末がどうあれ、風は永遠に私と共にある。`);
      maru.print(`早くトレーナーのそばに戻らないと。`);
      await maru.say_and_wait(
        `トレーナーに、生まれ変わった自分を見せないとね♪`,
      );
      maru.print(`本当に、それでいいの？`);
      await maru.say_and_wait(`自分の心を裏切りたくない。だから、もう十分よ。`);
      await maru.say_and_wait(
        `もがいて、最後の力でもう一度試す。今度は、胸を吹く風のためだけに。`,
      );
      maru.print(`それがあなたの美学？`);
      await era.printAndWait(
        `ため息の${maru.name}はそこで消え、新生の自我が周囲の空気を再び掻き混ぜた。`,
      );
      await era.printAndWait(
        `柔らかい風のように、温かい笑顔のあの人のそばへ早く行きたい。`,
      );
      await era.printAndWait(`その日、優しい風が生まれた。`);
      era.drawLine();
      await era.printAndWait(`${maru.name}の反応を、落ち着かず待っている。`);
      await era.printAndWait(
        `悲しみ？ 痛み？ 釈然？ 貧しい語彙では、目の前の${maru.teen_sex_title}の胸の内を言い表せない。`,
      );
      await era.printAndWait(
        `時間は蝸牛の這った跡のようでもあり、飛行機の残した航跡雲のようでもある。`,
      );
      await era.printAndWait(`だが今は待つしかない。胸の恐れに、そう言った。`);
      await era.printAndWait(
        `運命の歯車は、過ちを犯した瞬間に終わらない。過ちのあと、自分が次に何をするかが、いちばん大事だ。`,
      );
      await era.printAndWait(
        `いつまでもひそかに痛む教訓を得たからこそ、世界への理解は深くなった。`,
      );
      await era.printAndWait(`${maru.name} なら、きっと似たことを思う。`);
      await era.printAndWait(
        `そうしてすべてを片付け、この先の物事に向き合う。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_40: (() => {
    const title = 'ハロウィン';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `深海で目覚めた私の目の前は、闇以外何も見えない。`,
      );
      await era.printAndWait(
        `意外なことに、まだ自由に呼吸でき、自分の心拍も感じられる。`,
      );
      await era.printAndWait(`出口はどこ？ どうすればいい？ 死ぬのか？`);
      await era.printAndWait(
        `そんな問いが頭の中を徘徊し、意識をほとんど飲み込みそうになる。`,
      );
      await era.printAndWait(`だが袖口に、冷たい摩擦が伝わった。`);
      await era.printAndWait(
        `前へ進めと強制するように、風に深海から連れ出され、空へ飛んだ。`,
      );
      era.printButton(`「ん、また悪夢か。」`, 1);
      await era.input();
      await era.printAndWait(
        `悪夢から飛び起きて、背中がもうびしょ濡れだと気づいた。`,
      );
      await you.say_and_wait(`なぜ？`, true);
      await era.printAndWait(
        `朝の陽がカーテンを通して枕に落ちる。光の作用で、普段見過ごす埃まで輝いて見える。`,
      );
      await you.say_and_wait(
        `黒い海、いつ吹いたかわからない風、誰かの存在。`,
        true,
      );
      await era.printAndWait(
        `ばらばらの断片を思い出そうとすると、いつからかこれが大事だと感じ、わけのわからない不安が底から上がってきた。`,
      );
      await you.say_and_wait(`次はあんなB級映画、もう見ない。`, true);
      await era.printAndWait(
        `こんな奇妙なことに妙に真剣な自分が急に可笑しくなり、首を振って服を着ようとした。`,
      );
      await maru.say_and_wait(`トントン。`);
      await era.printAndWait(`扉の向こうからノックが聞こえた。`);
      if (era.get('love:4') >= 75) {
        await maru.say_and_wait(`はい～${callname}、起きた？`);
        await you.say_and_wait(`すぐ行く。`);
        await you.say_and_wait(
          `もう${maru.name}の家に泊まるのに慣れたのか。`,
          true,
        );
        await era.printAndWait(`布団を畳み、服を着て仕事の準備を始めた。`);
      } else {
        await maru.say_and_wait(`はい～${callname}、おはよう？`);
        await era.printAndWait(
          `${maru.name}はいつものようにトレーニング室へ来た。`,
        );
      }
      await era.printAndWait(`新しい一日が始まった。`);
      era.drawLine();
      await era.printAndWait(
        `最後の書類をフォルダに収め、今日の日程は一段落した。`,
      );
      await maru.say_and_wait(`お疲れさま。`);
      await era.printAndWait(`隣に座る${maru.name}がコーヒーを机に置いた。`);
      await you.say_and_wait(`ありがとう。`);
      await era.printAndWait(
        `高級ブランドではない。店でよく売るインスタントコーヒーだ。`,
      );
      await era.printAndWait(
        `もっと良いコーヒーや紅茶も飲んだことはあるが、どうしても慣れない。`,
      );
      await era.printAndWait(
        `結局、コンビニのコーヒーは三女神が人類に与えた宝物だ、と自分を慰めるしかない。`,
      );
      await maru.say_and_wait(`${callname}、今夜の予定は？`);
      await era.printAndWait(
        `伸びをしながら${maru.name}がソファから立ち上がった。`,
      );
      await you.say_and_wait(`予定？`);
      await era.printAndWait(`頭の中をすばやく振り返る。漏れはなさそうだ。`);
      await you.say_and_wait(`この先は、スタミナを上げるトレーニングかな？`);
      await era.printAndWait(`長距離レースに出るなら、スタミナも大事だ。`);
      await maru.say_and_wait(
        `たまんないわ。スタミナトレーニングも大事だけど、${callname}、何か忘れてない？`,
      );
      await you.say_and_wait(`……？`);
      await maru.say_and_wait(
        `去年、一緒にハロウィンパレードへ行くって約束したでしょ。${callname}、覚えてる？`,
      );
      await era.printAndWait(
        `困惑した顔の ${you.name} を見て、${maru.name}は結局言い返した。`,
      );
      await you.say_and_wait(`確か、そんな話をした気がする。`, true);
      await era.printAndWait(
        `スマホのメモを開き、下に少し滑らせて、去年のハロウィン当夜に記録したその件を見つけた。`,
      );
      await you.say_and_wait(`本当に忘れっぽいな。`);
      await era.printAndWait(
        `もっと大事なことに出会ったから、優先度の低いことは一旦脇に置いたのか。`,
      );
      await maru.say_and_wait(`${callname}？`);
      await you.say_and_wait(`一緒に出発しよう。`);
      await era.printAndWait(
        `${you.name}は${maru.name}の右手をそっと取り、先頭に立ってトレーニング室を出た。`,
      );
      await maru.say_and_wait(
        `そういう感じで、ハロウィンの集まりにちょっと顔を出しましょう♪`,
      );
      await era.printAndWait(
        `${maru.name}の澄んだ笑い声が、風に吹かれる髪に乗り、喜びをトレーニング室へ伝えた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_48: (() => {
    const title = 'クリスマス';
    /**
     * 結末分岐：お姉さん的悩み＋少女的憂鬱を全部トリガー、風値=15→GE、15>風値>=10→TE
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `もう12月か。${you.name} は手のペンを止め、窓の外の雪を見た.`,
      );
      await era.printAndWait(`トレセンは毎年この時期、余計に寒いな.`);
      await era.printAndWait(
        `${you.name}は首を振り,手の書類に注意を戻そうとしたとき.`,
      );
      await maru.say_and_wait(`ふんふんふん♪`);
      await maru.say_and_wait(`はい————${callname}。`);
      await era.printAndWait(
        `ドアノブが回り、${you.name} を魅了するその${maru.teen_sex_title}が扉を開けた.`,
      );
      await maru.say_and_wait(
        `${callname}、祝日も緩まないのね。${
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
        }な私、そういう頑張り屋さん、好きよ♪`,
      );
      await era.printAndWait(
        `突然入ってきた ${maru.name}に驚いてペンを落とし、慌てて拾った${you.name}はむっと言い返した。`,
      );
      era.printButton(`「${maru.name}は、俺とデートするつもりか？」`, 1);
      await era.input();
      await era.printAndWait(`ところが、${maru.name}はもっと嬉しそうだった。`);
      await maru.say_and_wait(
        `ふふ～、${callname}はそんなに私とデートしたいの？ あら♪${
          maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'
        }な私の魅力、すごいじゃない⭐`,
      );
      await maru.say_and_wait(
        `${callname}が誘ってくれたんだから、今すぐ出発しましょう！`,
      );
      era.drawLine();
      await maru.say_and_wait(
        `参ったわ、${callname}とこうして歩道を歩くのも悪くないわね。`,
      );
      era.printButton(`「ああ……眩しい」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}と冬服に着替えた${maru.name}が大通りを歩く.もともと美しい${
          maru.sex
        }が丹念に選んだ服を着たあとの独特の気質が、${you.name}の心を深く掴んだ.`,
      );
      await era.printAndWait(
        `観光客A:この方は${maru.name}ですよね?テレビで${maru.sex}の走りを見ました.`,
      );
      await era.printAndWait(
        `観光客B:${maru.name}だ！ 私は${you.name}のファンです！ どうかサインを！`,
      );
      await maru.say_and_wait(`あら,もうそんなに有名なの？`);
      await era.printAndWait(
        `まずい,${maru.sex}の到来に気づく人がどんどん増えてきた`,
      );
      await era.printAndWait(
        `${maru.name}の魅力が、無関係の人まで巻き込んでいる,`,
      );
      era.printButton(`(${maru.name}と過ごす時間を邪魔させない)`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は${maru.name}のだんだん温かくなる小さな手を握り、歩幅を上げて追星のファンを振り切ろうとした`,
      );
      await maru.say_and_wait(`……ふふ♪`);
      await era.printAndWait(
        `後ろをぴったり追うファンの群れをやっと振り切ってから,市中心公園に着いたことに気づいた`,
      );
      await era.printAndWait(
        `息が上がる${you.name}に比べ,${maru.uma_sex_title}である${
          maru.sex
        }は呼吸のリズムさえ乱していない.`,
      );
      await era.printAndWait(
        `————普段のトレーニングに比べれば,前菜にもならない.`,
      );
      await you.say_and_wait(`ふう……ふう……ふあ,やっと振り切れたな`, true);
      await maru.say_and_wait(`${callname},ここ、静かみたいね.`);
      await era.printAndWait(
        `交錯するLEDが道の両側の木に絡み,後ろから前方へ無限に伸びている.`,
      );
      await era.printAndWait(
        `彩灯がクリスマスの夜を照らし,12月の寒風にも一筋の温もりと光をもたらした.`,
      );
      era.printButton(`「ああ,ここはデートにいい場所だな」`, 1);
      await era.input();
      await maru.say_and_wait(
        `聖夜なら、トレーナーの${you.adult_sex_title}♪……いちばん好きな人と、ゆっくり流れる時間を分け合いたくない？`,
      );
      await you.say_and_wait(
        `そこまで言われて、この一歩を踏まないのは失礼すぎる！`,
      );
      await maru.say_and_wait(`ふんふん～、じゃあ${callname}の答えは？`);
      era.printButton(
        `${maru.actual_name_with_title}、俺とデートしてくれ！`,
        1,
      );
      await era.input();

      await maru.say_and_wait(
        `あら～${callname}、勇気があるわね。この勢いでそのまま受けたいけど、でも————`,
      );
      await era.printAndWait(
        `さっきの走りで ${you.name} の髪はぼさぼさになった`,
      );
      await maru.say_and_wait(
        `${callname}の様子、かわいいわね。デートより先に髪をとかしたほうがいいわ`,
      );
      era.printButton(`「ああ、はい」`, 1);
      await era.input();

      await era.printAndWait(
        `${you.name}が返事する前に${maru.name}は自分のショルダーバッグから櫛を出した`,
      );
      await maru.say_and_wait(`${callname}、頭を下げて`);
      await era.printAndWait(
        `${you.name}はおとなしく${maru.name}の意図に従い、頭を下げた.`,
      );
      await maru.say_and_wait(
        `うん……${you.name}の髪、少し乾いてるわ。${callname}、お疲れさま.`,
      );
      await era.printAndWait(
        `${maru.sex}はできるだけ力を抑えて優しく${
          you.name
        }の髪をとかす.その温かく懐かしい気配に${
          you.name
        }は、子どものころ芝で日向ぼっこした気配を思い出した.`,
      );
      await maru.say_and_wait(
        `……これでだいたいね♪ じゃあ、${callname}、今日のデートもよろしく.`,
      );
      era.printButton(`「こっちもよろしく」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は ${maru.name} の左手をきつく握り,この束の間の甘い時間をゆっくり味わった.`,
      );
      await maru.say_and_wait(
        `ところで,ここは今週いちばん人気のカップル聖地みたいね.`,
      );
      era.printButton(`「だから一路、ペアのカップルばかりなんだな」`, 1);
      await era.input();

      await maru.say_and_wait(
        `ふふ♪ 次のクリスマスも、ここで景色を見ましょう.`,
      );
      await maru.say_and_wait(
        `${callname},そのときは、景色は今よりずっと美しいわ。`,
      );
      await era.printAndWait(
        `12月の寒風が、${you.name}と${maru.name}の親密さを見届けたかのようだ.`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '有馬記念前・いちばん盛大な舞台';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `有馬記念は日本のレースでいちばん盛大な一戦だ。多くの${maru.uma_sex_title}が投票で出走許可を得る。`,
      );
      await era.printAndWait(
        `「Super Car」と呼ばれ人気の多い${maru.name}も、当然出走の許可に達した。`,
      );
      era.drawLine({ content: '控え室' });
      await maru.say_and_wait(
        `${callname}、これで後輩たちに私の背中をちゃんと見せないと`,
      );
      era.printButton(`「ん」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}が影から抜けたあと、国内最大の舞台——有馬記念を目標に、練習を始めた。`,
      );
      await era.printAndWait(
        `クラシック級ですでに領域を掴んだ数少ない${maru.uma_sex_title}として、クラシック限定のレースなら一頭分は圧せるかもしれない。だが強敵揃いの有馬記念では`,
      );
      await you.say_and_wait(`${maru.name}が嬉しければいい`, true);
      await era.printAndWait(`そう思い、漏れがないか最後に確認したあと。`);
      await era.printAndWait(`唇に湿った感触が伝わった。`);
      await maru.say_and_wait(`これでアクセルも全開ね`);
      await maru.say_and_wait(`じゃあ、${callname}、行ってくるわ。`);
      await era.printAndWait(
        `${maru.name}独自の活力を帯びて、${maru.sex}はレース場へ上がった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '有馬記念後・希望の輝き';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `有馬記念で茨を切り、多くの強敵を破ったあと、${maru.name} は有馬記念を制した`,
      );
      await you.say_as_passer_by_and_wait(
        `記者A`,
        `おめでとうございます。${maru.actual_name_with_title}の有馬記念優勝、戦況は本当に激しかったですね。`,
      );
      await maru.say_and_wait(
        `ええ、選手たちはみんな実力派よ。おかげで私もとても楽しく走れたわ`,
      );
      await you.say_as_passer_by_and_wait(`記者A`, ` ${maru.name} の感想は？`);
      await maru.say_and_wait(
        `もっと多くの ${maru.uma_sex_title} に私の背中を見せて、追う気持ちが生まれればいいわ`,
      );
      await you.say_as_passer_by_and_wait(`記者A`, `とても遠大な理想ですね。`);
      await maru.say_and_wait(` ${callname} はこっち`);
      await era.printAndWait(
        ` ${maru.name} は来たのを見て、記者の前へ引っ張った。」`,
      );
      await you.say_as_passer_by_and_wait(
        `記者A`,
        `トレーナーの${you.adult_sex_title}は、${maru.name} の優勝について何か感謝はありますか？`,
      );
      era.printButton(
        `「勝ち負けより、${maru.name} が嬉しいことがいちばん大事だ」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        ` ${callname}、話が上手ね～。でも、${callname} の励ましがなければ、私も勝てなかったでしょうね。`,
      );
      await you.say_as_passer_by_and_wait(
        `記者A`,
        `感動的な絆ですね。お二人、取材を受けてくださりありがとうございました。`,
      );
      await maru.say_and_wait(`今日はどこかでがっつり食べて祝いましょう`);
      await you.say_and_wait(
        `やっぱり笑顔の ${maru.name} がいちばんいい`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_lose_c: (() => {
    const title = '有馬記念後・最大の舞台！';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`控え室\n`);
      await you.say_and_wait(`どんな感じだった？`);
      await maru.say_and_wait(
        `一緒に走った ${maru.uma_sex_title} は、みんな最強の${maru.uma_sex_title} を目指す${maru.uma_sex_title}よ。${maru.couple_title}と走れて嬉しかったわ。`,
      );
      await you.say_and_wait(`満足したか？`);
      await maru.say_and_wait(
        `なに？ これより大きなレースは凱旋門賞くらいでしょう。この感じ、好きよ？`,
      );
      await you.say_and_wait(
        `シニア級が終わったら、翌年の夏にフランスでレースに出るか？`,
      );
      await maru.say_and_wait(
        `${maru.sex_code !== 1 ? 'お嬢さん' : 'ハンサム'}な私も、そう思ってたわ。`,
      );
      await maru.say_and_wait(`この先も、一緒に頑張ろう！`);
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '新年参拝';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `新年を迎えるため、${you.name} と ${maru.name} は一緒に新年参拝へ行った.`,
      );
      await era.printAndWait(
        `実際は伝統に従うためではない。ただ運を求めたいだけだ。`,
      );
      await maru.say_and_wait(
        `やっぱり新年は神社で祈願でしょ？ そのほうが新年らしいわ～！`,
      );
      await maru.say_and_wait(
        `一年の計は春にあり。三女神さまに、一年分の汗と努力を捧げましょう！`,
      );
      era.printButton(`「この先の目標は？」`, 1);
      await era.input();
      await maru.say_and_wait(
        `ふふ～、私の目標は——今年もたくさんの面白いレースに出ること！`,
      );
      await maru.say_and_wait(
        `それに、みんなに私の背中を追わせるために、前よりず～っと目立たないと！`,
      );
      era.printButton(`「${you.name}をしっかり手伝う！」`, 1);
      await era.input();
      await maru.say_and_wait(
        `${callname}、頼もしいわね～。${maru.elder_sibling_sex_title}、この感じ好きよ？`,
      );
      await era.printAndWait(`ところで、この先頑張る方向は？`);
      era.println();
      era.printButton(`「基本の健康管理！」（体力+600）`, 1);
      era.printButton(
        `「各方面が均衡したトレーニングだろう！」（全能力+10）`,
        2,
      );
      era.printButton(`「自分の長所を磨くべきだ！」（スキルPt+100）`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maru.say_and_wait(
            'ことわざにも『居は気を移し、養は体を移す』と言うでしょう。体の健康に気をつけるのは大事ね.',
          );
          await maru.say_and_wait('決めた！ この先の目標は健康管理！');
          await maru.say_and_wait('さあ、早く入りましょう！');
          break;
        case 2:
          await maru.say_and_wait(
            'なるほど！ 各方面を平均して鍛えれば、前より一段上がれるわね！',
          );
          await maru.say_and_wait(
            'うん、任せて！ トレーニングのときも、そこを意識するわ！',
          );
          await maru.say_and_wait('じゃあ、決まったなら、早く入りましょう！');
          break;
        case 3:
          await maru.say_and_wait('私の長所といえば、やっぱり運転技術かしら？');
          await maru.say_and_wait(
            'なわけない～、冗談よ！ 走りのスキルを磨くんでしょ？',
          );
          await maru.say_and_wait(
            'OK！ トレーニングのときも、そこを意識するわ.',
          );
          await maru.say_and_wait(
            'うん、少し手間取っちゃった。早く入りましょう！',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'バレンタイン';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`はい、これが${callname}の分。`);
      await era.printAndWait(
        `${you.name}の提案で、今年のバレンタインはトレーニング室で二人きりパーティーを開くことにした。`,
      );
      era.printButton(`「ありがとう」`, 1);
      await era.input();
      await era.printAndWait(
        `飾りのかリボンをそっと解き、ハンドバッグ型のチョコレート箱を開けた。`,
      );
      await era.printAndWait(
        `液体チョコを満たしたチューリップカップ。クリームを挟み、上は厚いイチゴシロップ。飾りはチェリー、ミント、マルベリー。`,
      );
      await era.printAndWait(
        `杯の胴に結んだ黒い蝶結びが、かすかなピンクの背景を放っている。`,
      );
      await maru.say_and_wait(
        `これまで、何のために走るかを探してきた。今は、走る意味がもう一つ増えたわ。`,
      );
      await maru.say_and_wait(`この先も、ずっと支えてね？ ${callname}`);
      era.printButton(
        `「じゃあありがたくいただく。ありがとう${you.name}${maru.name}」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `あ、そうだ！ テイオー${maru.couple_title}が言ってたの。百貨店のある店はバレンタインにカップルなら写真を撮ると6割引きだって.`,
      );
      await era.printAndWait(`${callname}、興味ある？`);
      era.printButton(`「問題ない」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}と${maru.name}は百貨店へ行き,少し探してその店を見つけた.`,
      );
      await era.printAndWait(
        `今週の聖地なのかもしれない.入口に長い列ができ,様子からみんなカップルらしい.`,
      );
      await maru.say_and_wait(
        `人が多いわね.テイオー${maru.couple_title}の言うとおり,ここでしょう`,
      );
      await era.printAndWait(`じゃあ、私たちも並びましょう.`);
      await era.printAndWait(
        `${maru.name}は${you.name}の腕を取り、カップルの中に混ざった。`,
      );
      await era.printAndWait(`店員:お二人はカップル特典セットをご購入ですか？`);
      await era.printAndWait(
        `店員:ただ、割引があると聞いてお得を狙うお客様が多くて、本当に欲しいカップルが買えなくなっているんです`,
      );
      await era.printAndWait(
        `店員:こちらも困っていまして、最後に店主がいい案を思いつきました.`,
      );
      await era.printAndWait(`店員:お二人、ロマンチックなキスをお願いします.`);
      era.printButton(`「き……キス?!」`, 1);
      await era.input();

      await era.printAndWait(
        `店員:キスはロマンチックなことではありませんか？ 伴侶への愛も伝えられますし、お得狙いの人はキスと聞いて逃げていきました.`,
      );
      await era.printAndWait(
        `店員:カップルなら、恥ずかしがることはないでしょう.`,
      );
      await era.printAndWait(
        `店員の鋭い視線で${you.name}の圧力はどんどん増す.${you.name}は${
          maru.name
        }を見た.${maru.sex}は落ち着いているふりをしているが,激しく揺れる尻尾が${maru.sex}を裏切っている.`,
      );
      era.printButton(`「こうするしかない」`, 1);
      await era.input();
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `${you.name}は${maru.name}の腰を抱き,${
          maru.sex
        }の顔を軽くなで,覚悟を決めてキスした.`,
      );
      await era.printAndWait(
        `まず探るように軽く触れ,空気が高まるにつれ${you.name}も速くなり,熱い想いが最後は深く重なるキスになった.`,
      );
      await era.printAndWait(
        `${maru.sex}の唇はリンゴの香りを放つようで,摘む者を誘う.${
          you.name
        }は舌を${maru.sex}の口へ入れ,一寸ずつ探った`,
      );
      await era.printAndWait(
        `${you.name}が${maru.sex}の舌に触れようとするたび,${
          maru.sex
        }が恥ずかしそうに退く様子が、かえって${you.name}の欲を刺激した.`,
      );
      await era.printAndWait(
        `これ以上続けてはいけない.だが${you.name}の動きは止まらない.`,
      );
      await era.printAndWait(
        `激しい刺激で頭が真っ白なとき,${you.name}はこの瞬間を永遠にしたかった.${you.name}は幸福を感じた.`,
      );
      await maru.say_and_wait(`……${callname}`);
      await era.printAndWait(
        `店員:うわあ、本当に熱いキスですね。ではどうぞお入りください。後ろのお客様がお待ちです.`,
      );
      await era.printAndWait(
        `後ろの客を構う余裕もなく,${you.name}は${
          maru.sex
        }の頬をそっと支え,世に唯一の至宝のようだった.`,
      );
      await era.printAndWait(
        `${maru.sex}の頬は完全に赤くなり,激しい心拍が二人の近さから${
          you.name
        }へ伝わった.`,
      );
      await era.printAndWait(
        `${you.name}は${maru.sex}の手を握り,空いた席へ向かった.`,
      );
      await maru.say_and_wait(`……`);
      await era.printAndWait(
        `二人は黙って同じパフェを味わう.震える腕が、主人の平静のなさを示している`,
      );
      await era.printAndWait(
        `このあとどう謝る？${
          maru.sex
        }はこれで関係を切るのか？ 恐れと喜びが${you.name}の頭で交わり,最後に残ったのは`,
      );
      era.printButton(
        `「${maru.name}が俺を好きかどうかは関係ない。だが俺は${maru.sex}が好きだ」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `長い責めのあと,このパフェはやっと底を見せた.黙って店を出て大通りを歩き，堤を過ぎ，最後にトレーニング室へ戻った.`,
      );
      await maru.say_and_wait(`ねえ,${callname}。`);
      await era.printAndWait(
        `突然足を止めた${maru.name}が、${you.name}を抱いた。`,
      );
      await era.printAndWait(`唇に伝わった湿りが、波紋のように広がる。`);
      await maru.say_and_wait(`この先も、よろしく❤`);
      await era.printAndWait(
        `最初の愕きから戻った${you.name}は、大人の余裕を必死に保つ${maru.name}を見た。`,
      );
      await era.printAndWait(
        `その様子の${maru.name}が可笑しくて、でもそんな${maru.sex}は本当にかわいく、絹の糸で織ったシルクが胸にそっと敷かれたようだ。`,
      );
      era.printButton(`「気持ちは複雑だな。」`, 1);
      await era.input();
      await era.printAndWait(
        `星空とネオンの下で、二人の手はきつく握り合った。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_9: (() => {
    const title = '炎炎';
    /**
     * 皇帝とマルゼンスキーが会い、違う景色を見せたい
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, emperor, you, callname) => {
      emperor.name = '皇帝';
      await era.printAndWait(`長い冬がやっと過ぎ、春風が再びトレセンを吹く。`);
      await era.printAndWait(
        `苦痛と迷いを経て、自分で選んだ方向へ再び走るあなたたち——`,
      );
      await era.printAndWait(`そして、長く待っていたシンボリルドルフ。`);
      await emperor.say_and_wait(`やっとこの瞬間を待てた。`);
      await era.printAndWait(`軽い足取りで、皇帝はトレーニング場へ来た。`);
      await emperor.say_and_wait(
        `どうやら、以前の論争の結果は、最後は私の勝ちだな。`,
      );
      await emperor.say_and_wait(
        `地獄の底から這い上がった感触は？ ${maru.name}。`,
      );
      await era.printAndWait(
        `周囲のすべてを無視し、皇帝は真っ直ぐ${maru.name}へ向かった。`,
      );
      await maru.say_and_wait(
        `険しい時を過ごしたけど、刻苦の快感は味わえたわ。`,
      );
      await emperor.say_and_wait(
        `ほう？ 地獄の烈火は、お前を焼き尽くさなかったか？`,
      );
      await maru.say_and_wait(`地獄を通る道が、エデンにいちばん近いのよ♪`);
      await emperor.say_and_wait(`……ますます期待してきた。`);
      await maru.say_and_wait(`褒め言葉と思っていい？ サンキュー`);
      await emperor.say_and_wait(`……サンキューか？ Thank you ふふ。`);
      await emperor.say_and_wait(
        `本題に戻る。${maru.uma_sex_title}たちの心のアイドルになると覚悟したなら、粉々になる準備もできているだろう。`,
      );
      await emperor.say_and_wait(`お前は、愛ゆえにその行いをしたのか？`);
      await maru.say_and_wait(
        `自分がしていることが必ず正しいとは言い切れない。でも一つだけ、はっきりしている`,
      );
      await maru.say_and_wait(`そのために奮闘する毎日、私はとても幸福よ⭐`);
      await emperor.say_and_wait(
        `自分の道を見つけたなら、そのときまた会おう。`,
      );
      await era.printAndWait(`皇帝は言い終えるとトレーニング場を出た。`);
      era.printButton(`「ついに皇帝と対決か？」`, 1);
      await era.input();
      await maru.say_and_wait(
        `会長と対決できるなんて、とても面白い展開かもしれないわね。`,
      );
      await maru.say_and_wait(
        `このいちばん盛大な舞台の上で、歯が震えるほどの興奮が待っているかもしれない。`,
      );
      await maru.say_and_wait(`一緒に頑張ろう、${callname} ♪`);
      await era.printAndWait(`そのために、次の目標はもう決まった。`);
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = '大阪杯前・柔和な風';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`皇帝との対決は、大阪杯で始まろうとしている`);
      await era.printAndWait(`メディアはこれを王道と覇道の対決として煽った。`);
      await era.printAndWait(
        `大阪杯の注目は、去年の有馬記念をはるかに超えている。`,
      );
      await era.printAndWait(
        `スタンドは伝説の一戦を見るファンで埋まり、通路まで人が埋まっている。`,
      );
      era.drawLine({ content: '控え室' });
      await maru.say_and_wait(`ふんふんふん～`);
      await era.printAndWait(
        `これほど緊迫した時でも${maru.name}はかなり余裕だ。`,
      );
      era.printButton(`「${maru.name}、今回はとても楽しく走れる」`, 1);
      await era.input();
      await era.printAndWait(
        `皇帝の登場ほど、${maru.name}をレースに興奮させることはない。`,
      );
      await maru.say_and_wait(`じゃあ、準備はすべてOKよ。`);
      await maru.say_and_wait(`今から、もっと盛大なレースを楽しむわ。`);
      await era.printAndWait(
        `${maru.name} の扉を開けようとした ${you.name} が、同じ細い手に触れた`,
      );
      await era.printAndWait(
        `唇に湿った気配が伝わり、柔らかい舌が交わり、名残惜しそうに離れた。`,
      );
      await maru.say_and_wait(`いちばん大事なことを忘れるところだったわ。`);
      await maru.say_and_wait(`${callname}は、ちゃんと私を見ててね。`);
      await era.printAndWait(`${maru.name}はレース場へ向かった`);
    };
    f.title = title;
    return f;
  })(),
  sank_hai_win: (() => {
    const title = '大阪杯後・風が残雲を巻く';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} emperor 皇帝（シンボリルドルフ）
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, emperor, you) => {
      emperor.name = '皇帝';
      await maru.say_and_wait(`はあ、はあ、はあ。`);
      await maru.say_and_wait(`勝った？`, true);
      await era.printAndWait(
        `皇帝との対決は、最終的に ${maru.name} の勝利で一段落した。`,
      );
      await you.say_and_wait(
        `すばらしいレースだった。冷や汗が知らないうちに流れていた。`,
      );
      await era.printAndWait(
        `奔騰する馬群の中でいちばん合う位置を見つけ、スパートのときは当然先頭にいるべき——。`,
      );
      await era.printAndWait(`だがもう少しで、${maru.name} を超えていた。`);
      await era.printAndWait(`……それでも、`);
      await maru.say_and_wait(
        `興奮と言うべきか、恐れと言うべきか？ 怪物の影を踏めた ${maru.uma_sex_title}は、あなたが初めてよ、小ルドルフ♪`,
      );
      await era.printAndWait(
        `やっと ${maru.sex} の歩みに追いつける相手に出会えて満足したのか、${maru.name} は笑顔を見せた。`,
      );
      era.drawLine();
      await emperor.say_and_wait(`……よかった。`);
      await era.printAndWait(
        `皇帝はまっすぐ遠ざかる背中を見ている。${maru.sex} は歯を舐め、一種の狂喜が自然に湧く。`,
      );
      await era.printAndWait(
        `皇帝の未完の事業は多い。ゆえになお自分を証明する必要がある——${maru.sex} が唯一無二であること。同世代に無敵なだけでなく、過ぎた栄光を打ち砕き、未来の栄光を鎮圧できることを。`,
      );
      era.println();
      await emperor.say_and_wait(
        `マルゼン、お前は本当に、その理念を一貫して貫けるといい。`,
      );
      await emperor.say_and_wait(
        `それから——王道を自任するな。開拓者は苦難だけを受けるべきだ。お前が偉大なら倒れ、後進が上る階段になれ。`,
      );
      await emperor.say_and_wait(
        `日本の ${maru.uma_sex_title} の未来のために——より強い皇帝のために。`,
      );
      await era.printAndWait(
        `そのために……皇帝は頭を上げ、見下ろすように ${maru.name} を見た。`,
      );
      era.println();
      await emperor.say_and_wait(
        `教養を脱げ、文明の包装を裂け！ あらゆる手段を使え。卑賤でも、粗野でもいい。できれば手段を選ぶな！！！`,
      );
      await emperor.say_and_wait(
        `どれほど見苦しくても許される。すべての準備をして……天皇賞（秋）で、吾（皇帝）の復讐を迎えよ。\n`,
      );
      await era.printAndWait(
        `言い終えると、和やかな顔の皇帝は軽い足取りでレース場を出た。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sank_hai_lose: (() => {
    const title = '大阪杯後・鬱蒼';
    /** @param {CharaTalk} maru マルゼンスキー */
    const f = async (maru) => {
      await maru.say_and_wait(`まさか小ルドルフに負けるなんてうう——`);
      await era.printAndWait(
        `だが ${maru.name} は想像していたほど沈んではいない。`,
      );
      era.printButton(`戻って反省会でリベンジ戦を相談しよう`, 1);
      await era.input();
      await era.printAndWait(`皇帝との対決は、一旦一段落した。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `今日はファン感謝祭。${maru.uma_sex_title}たちがファンの支援に感謝してステージをする日だ.`,
      );
      await era.printAndWait(
        `トレセン学園のあちこちに、${maru.uma_sex_title}が用意した催しがある.`,
      );
      await era.printAndWait(
        `珍しく空いた ${you.name} もこの機会に歩き回り,溜まった圧力を十分にほぐした.`,
      );
      await era.printAndWait(
        `${maru.name}は${
          you.name
        }の担当${maru.uma_sex_title}として,今は後輩たちのステージを見ている.`,
      );
      await era.printAndWait(
        `来た者の足音を聞き,無意識に振り返り,${you.name}へ優しい微笑を見せた.`,
      );
      await maru.say_and_wait(
        `${callname}も、${maru.uma_sex_title}たちのステージを見に来たの？`,
      );
      era.printButton(`「うなずく」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は${
          maru.name
        }のそばに立ち,目の前のステージで${maru.uma_sex_title}たちが懸命にいちばん美しい一面を見せているのを見た.`,
      );
      await maru.say_and_wait(
        `後輩たち、みんな活気があるわね。${callname}もそう思う？`,
      );
      era.printButton(
        `「${maru.couple_title}はみんな${maru.name}に憧れて,${
          maru.sex
        }の背中を超えたいから必死に頑張ってる」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `あら♪ ${callname}は毎回、意外なサプライズをくれるわね.`,
      );
      await maru.say_and_wait(
        `じゃあ,${callname},私がステージに上がるのを見たい？`,
      );
      await era.printAndWait(
        `${maru.name}の尻尾がいつの間にか${you.name}の太ももに絡みついた.幸い周囲の観客はステージの空気に燃えていて、こちらの小さな動きには気づいていない.`,
      );
      await era.printAndWait(
        `${maru.name}は${you.name}の急所を察したようで,さらに遠慮なく全身を${you.name}の腕に寄せた.`,
      );
      era.printButton(`「${maru.name}」`, 1);
      await era.input();
      await era.printAndWait(
        `二人のあいだに悪い噂が立ち${
          maru.sex
        }の前途と${you.name}の解雇に響くのが怖く,${you.name}の体は一瞬硬直した.`,
      );
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? 'ト・レ・ー・ナ・ー・ちゃん' : 'ト・レ・ー・ナ・ー・くん'}♪`,
      );
      await era.printAndWait(
        `${you.name}は周囲の視線が全部${you.name}を見ている気がして,口が渇き始めた.`,
      );
      await maru.say_and_wait(
        `${
          callname
        }のその反応もかわいいわね.残念だけど,そろそろ私の出番よ.視線は私から外さないでね.`,
      );
      await era.printAndWait(`気がつくと${maru.sex}はもうステージの上にいた.`);
      await era.printAndWait(
        `${you.name}は急いで周囲の観光客からサイリウムを借り,ファンの波に乗って舞い始めた.`,
      );
      await maru.say_and_wait(
        `風を楽しみ,風を追う${maru.uma_sex_title},${
          maru.name
        }.今からファンと後輩たちに、私の歌を捧げるわ.`,
      );
      await era.printAndWait(`古い曲を歌う、今日のスター。`);
    };
    f.title = title;
    return f;
  })(),
  before_yasu_kin_s: (() => {
    const title = '安田記念前・生気勃発';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`${maru.name}は自由の風を追い、東京競馬場へ来た`);
      await maru.say_and_wait(`今日の調子、とてもいいわ。`);
      await era.printAndWait(
        `${maru.name}の服の突起した皺を撫で伸ばしたあと、スーパーカーは準備完了`,
      );
      await maru.say_and_wait(
        `後輩たちも今、私の背中を追って超えたいと思ってるわね。`,
      );
      await era.printAndWait(
        `レースの勝利より、${maru.name}は大切な後輩たちが自分と旧時代の栄光を超えることを望んでいる`,
      );
      await maru.say_and_wait(`だから今の私も、燃えてるわ。`);
      await maru.say_and_wait(`じゃあ定番の、${callname}。`);
      await era.printAndWait(
        `${maru.name}の細い腰を軽く抱き、幸福の瞬間に沈んだ`,
      );
      await maru.say_and_wait(`${callname}、ずっとずっと私の背中を見ててね。`);
      await maru.say_and_wait(
        `他の${maru.uma_sex_title}を見てたら、${
          maru.elder_sibling_sex_title
        }でも嫉妬するわよ。`,
      );
      era.printButton(`「ずっと見てる」`, 1);
      await era.input();
      await maru.say_and_wait(`じゃあ、最後にもう一度♪`);
      await era.printAndWait(
        `名残惜しそうに別れたあと、${maru.name} はレース場へ向かった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  yasu_kin_win_s: (() => {
    const title = '安田記念後・走りたくなるレース';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait('控え室');
      await maru.say_and_wait(` ${callname}、私のきれいな背中、見えた？`);
      await era.printAndWait(
        `安田記念で、後輩の ${maru.uma_sex_title}たちは ${maru.name} の背中に励まされ、${maru.sex} を目標に前へ走り続けた`,
      );
      await maru.say_and_wait(
        `後輩たちもすごくなったわね。いつか ${maru.elder_sibling_sex_title} も後輩に超えられて、ハンカチを噛みながら表彰台の ${maru.couple_title}を嫉妬の顔で睨むかも`,
      );
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title} の傷ついた心をなだめるため、${callname}、今夜は一緒に寝ましょう`,
      );
      await you.say_and_wait(
        `それより ${maru.name} は走る喜びを楽しんでるみたいだな`,
      );
      await maru.say_and_wait(
        `え、話題をそらすの。${callname} の態度も、こんなに冷たくなったのね。`,
      );
      await maru.say_and_wait(
        `もう魅力がなくなったのかしら。このままじゃ ${maru.elder_sibling_sex_title}、薄情者に捨てられるわ。`,
      );
      await maru.say_and_wait(` ${maru.elder_sibling_sex_title}、かわいそう`);
      await era.printAndWait(` ${maru.name} は今、甘えてくることも覚えた`);
      await you.say_and_wait(`こういうときは`, true);
      await era.printAndWait(
        `右手で ${maru.name} の腰をそっと抱き、深く一吻を注ぎ、左手で耳の際の敏感なところを撫でる`,
      );
      await era.printAndWait(
        `キャットニップを吸った子猫のように、${maru.name} は今、完全に緩んだ。`,
      );
      await maru.say_and_wait(
        `帰りに ${maru.elder_sibling_sex_title} の愛情弁当を食べさせてあげる♪`,
      );
      await era.printAndWait(
        ` ${you.name} は、ふわふわのチーズと蜂蜜をかけたパンの甘い香りと、晴れの空の下で ${maru.name} が見せた笑顔を思い出した。`,
      );
      era.printButton(`「${maru.name} の料理はいつも上手だな」`, 1);
      await era.input();
      await era.printAndWait(
        `何かを思い出したように、微笑の中に悪賢い顔を見せた ${maru.name} が尻尾を軽く揺らす。`,
      );
      await maru.say_and_wait(`${callname}、この先もずっと私の試食係ね。`);
      await you.say_and_wait(`そういえば、明日は中華料理を食べてみたい。`);
      await maru.say_and_wait(`ふふ♪ ${callname}は目を拭いて待ってて。`);
      era.drawLine();
      await era.printAndWait(
        `夜、${maru.name} が厨房から出来たばかりのキャベツ炒め肉を出すと、箸を動かす前にその鮮やかな匂いが鼻腔へ急いで入り、胃の虫を引きずり出した。`,
      );
      await era.printAndWait(
        `箸を動かして豚肉を一塊挟むと、柔らかい感触は豆腐を挟んだようだ。口に入れると、野菜の汁を含んだ豚肉が口の中で弾け、舌まで食べたくなる。`,
      );
      await maru.say_and_wait(`味はどう？`);
      await era.printAndWait(
        `がつがつ食べる ${you.name} を見て、${maru.name} は満足の笑顔を見せた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏季合宿開始';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `三年目の夏季合宿が今、正式に始まる。去年とはまったく違う心持ちで、${you.name}と${maru.name}は一緒に砂浜へ向かった.`,
      );
      await maru.say_and_wait(
        `ふふ♪ 今年もみんなを後ろに置いたわね,${callname}.`,
      );
      await era.printAndWait(
        `そばの愛馬は相変わらず、他の${maru.uma_sex_title}より先に砂浜へ着くのが好きだ。`,
      );
      await you.say_and_wait(`${maru.name}、機嫌がいいな`);
      await maru.say_and_wait(
        `あら,当たり前でしょ。去年ちゃんと楽しめなかった青春を、今年全部取り戻さないと.`,
      );
      await era.printAndWait(
        `${maru.name}は黒い水着を用意したらしい.${
          maru.sex
        }の体に合わせて、余計に魅力が溢れている.`,
      );
      await you.say_and_wait(
        `普段の${maru.name}は朝寝坊が好きなのに、今日は逆に${maru.sex}が起こしに来た.`,
      );
      await maru.say_and_wait(
        `とにかく今は合宿の時間をしっかり楽しむときよ！ でも、日焼け止めを塗るのが先ね？`,
      );
      await maru.say_and_wait(
        `${callname}、${
          you.name
        }に日焼け止めを塗ってもらえる？ 今年の夏は予想より暑いの。`,
      );
      era.printButton(`「すぐ行く」`, 1);
      await era.input();
      await era.printAndWait(`夏季合宿は、そんな軽い空気の中で始まった。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_30: (() => {
    const title = '縁日';
    /**
     * 三年目の縁日。もっと軽い感覚で町を歩く
     * 故地再訪、万感胸に迫る
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `去年のこのとき、初めてこの町の熱情を知った。同じここで、運命の軌跡が変わった。`,
      );
      await era.printAndWait(
        `青臭い自我と、指の隙間から静かに流れた時間が、一路前へ進んだ跡になった。`,
      );
      await era.printAndWait(
        `再び訪れた町を見て、胸に湧く感情は初訪より複雑だ。`,
      );
      await era.printAndWait(
        `入口を間違えて方位を確かめ直したこと、親切な店主がくれた地図、盛大な祭りの演目。`,
      );
      await era.printAndWait(
        `人波に乗って記憶の場所へ進むと、往時の記憶が細く緩やかな流れのように湧く。`,
      );
      await maru.say_and_wait(`${callname}。`);
      await era.printAndWait(`見慣れた姿が入口に立っている。`);
      era.printButton(`「${you.name}を待たせてごめん。」`, 1);
      await era.input();
      await maru.say_and_wait(`私も、つい今しがた着いたところよ。`);
      await maru.say_and_wait(
        `金魚すくい、りんご飴、縁結びのお守り、最後はステージの上の演目。今度は思い切り楽しんでこそ、来た甲斐があるわ！`,
      );
      era.printButton(`「一緒に出発しよう」`, 1);
      await era.input();
      await era.printAndWait(`二人の手はきつく繋がった。`);
      await maru.say_and_wait(`これから先も、こうしてずっとそばにいてね？`);
      await era.printAndWait(` ${maru.name}は${you.name}を一目見た。`);
      await era.printAndWait(
        `${you.name}は手を繋いだ姿勢から、少し強引に相手を引いて進んだ。`,
      );
      await era.printAndWait(
        `予想していた不満はない。${you.name}は掌から伝わる力がどんどん大きくなるのを感じた。万力にきつく挟まれたようだ。`,
      );
      await era.printAndWait(
        `痛みを感じた${you.name}は無意識にその源を見た。${maru.name}は悪賢い笑顔を見せた。`,
      );
      await era.printAndWait(
        `大人の矜持を徹底的に捨て、子どもみたいにふざけて遊ぶ。`,
      );
      await era.printAndWait(
        `このままでは負けると気づいた${you.name}は、歩幅を上げた。`,
      );
      await era.printAndWait(
        ` ${maru.name}の目が吐く「現役の${maru.uma_sex_title}と走り比べるなんて、${you.name}はまだ百年早い」と、そのせいで余裕を装って${you.name}の手を放し、優雅な歩みで${you.name}を超えようとする。`,
      );
      await era.printAndWait(
        `——だが${you.name}は${maru.sex}の腰をそっと環し、愛情に満ちた目で相手を真っ直ぐ見た。`,
      );
      await maru.say_and_wait(
        `え？ トレーナー……${callname}、隣にまだ人がいるわ。`,
      );
      await era.printAndWait(
        `周囲は${you.name}たちの親密な仕草に気づいても、熱恋中のカップルの戯れだとしか思わない。たまに双方を認めた観光客も、何かに気づくと歩幅を上げて去る。`,
      );
      await era.printAndWait(`一時、周囲には${you.name}たち二人だけになった。`);
      await maru.say_and_wait(
        `あらあら、少女漫画から飛び出してきた話みたいね。${callname}はもう、16、17歳の思春期の子どもじゃないでしょ？`,
      );
      await era.printAndWait(
        `この曖昧な空気で劣勢の ${maru.name}が、主導権を取り戻そうとしている。`,
      );
      era.printButton(`「子どもで、何が悪い？」`, 1);
      await era.input();
      await era.printAndWait(
        `そこで${you.name}は${maru.sex}の額に軽く触れ、言い表せない爽快感で相手を見た。玩具を取ったような得意げな顔だ。`,
      );
      await maru.say_and_wait(
        `——そうね。${callname}がそんなことを言うなら、覚悟はできてるでしょうね。`,
      );
      await era.printAndWait(
        `得をして、そのまま身を引こうとした${you.name}が突然重心を失い、${maru.name}を囲んでいた手も緩んだ。`,
      );
      await era.printAndWait(
        `それから左耳に甘い吐息と、全身へ伝わる電流を感じた。`,
      );
      await maru.say_and_wait(`——`);
      await era.printAndWait(
        `普段の見慣れた感触なのに、${you.name}には一筋の苛立ちと得意が混じって聞こえた。`,
      );
      await era.printAndWait(
        ` ${maru.name}の指が${you.name}の胸をそっと滑る。長い爪は肌を破らず、ちょうどいい。${you.name}の体は恐れと興奮で微かに震える。`,
      );
      era.printButton(`「この先、花火大会もあるだろ？ 急がないと、」`, 1);
      await era.input();
      await era.printAndWait(
        `「まだ足りない」。${maru.name}の指はまだ止まらない。`,
      );
      era.printButton(
        `「去年の遺憾を埋めるため、${maru.name}と一緒にこの素敵な思い出を持ちたい！」`,
        1,
      );
      await era.input();
      await era.printAndWait(` ${maru.name}はやっと、それ以上の動きを止めた。`);
      await maru.say_and_wait(`——ごめんね。お姉さんも、少し失態ね。`);
      await era.printAndWait(
        `口調に懺悔は一筋もない。顔には、レースを十分楽しんだあとだけの満足がある。`,
      );
      await maru.say_and_wait(
        `${callname}とこれから一緒に作る思い出と、その上でもっと強い満足を思うと、お姉さん、少し欲張りかしら？`,
      );
      await maru.say_and_wait(
        `うん——消極的な気持ちはNGよ！ この先の一分一秒に深い思い出を残さないのは、生命への恥ずべき浪費！`,
      );
      await era.printAndWait(
        `祭りの音楽が風の媒体に乗って${you.name}たちの耳へ届いた。`,
      );
      await era.printAndWait(
        `空に咲く鮮やかな赤い花が、祭りの最後の始まりを示す。`,
      );
      await era.printAndWait(
        `それから ${maru.name}は${you.name}の腕を取った。`,
      );
      await era.printAndWait(`それから二人は歩幅を上げた。`);
      await era.printAndWait(
        `最後に${you.name}と ${maru.name}は、恋人だけが持つ、測れない空気を楽しんだ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏季合宿終了・忘れられない宴';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`今年の夏季合宿は、とても充実していた。`);
      await era.printAndWait(
        `砂浜でバレーやスイカ割りといった日常の運動以外に、後輩${maru.uma_sex_title}たちの悩みを聞いて的確な助言を出すのも、楽しみの一つだった。`,
      );
      await era.printAndWait(`夏季合宿の最終日,寮のパーティーに参加した。`);
      await era.printAndWait(
        `スペシャルウィーク、サクラチヨノオーが崇拝の顔で${maru.name}のこの二年の経験を聞き、サイレンススズカも${maru.name}に挑戦を申し込んだ。`,
      );
      await era.printAndWait(`深夜近くになって、みんな満足して解散した。`);
      await you.say_and_wait(
        `夏季合宿ももうすぐ終わりだ。この先は天皇賞（秋）か。`,
        true,
      );
      await you.say_and_wait(
        `レースより、やっぱり${maru.name}の笑顔がいちばんいい。`,
        true,
      );
      era.printButton(`「よし！ トレセンに戻っても全力で行く。」`, 1);
      await era.input();
      await era.printAndWait(`独り言を言いながら扉を開けると、`);
      await you.say_and_wait(`おかしい、鍵がかかってない？`);
      await maru.say_and_wait(` ${callname} ♪`);
      await era.printAndWait(
        `扉の向こうに現れた${maru.name}が飛びかかってきた。`,
      );
      await maru.say_and_wait(`今夜は、一緒に寝る？`);
      await you.say_and_wait(`合宿中に一緒に寝るのは、いくらなんでも……`);
      await maru.say_and_wait(
        `理事長の${maru.adult_sex_title}にも言ってあるわ`,
      );
      await era.printAndWait([
        maru.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の知らないところで理事長と何かの協議をしたようだ。',
      ]);
      await maru.say_and_wait(
        `理事長も、私たちが青春をしっかり楽しむことを望んでるの。だから ${callname} `,
      );
      await era.printAndWait(`${maru.name}は顔を真っ赤にしてこちらを見た。`);
      era.printButton(`「やる」`, 1);
      era.printButton(`「やめておこう」`, 2);
      if ((await era.input()) === 1) {
        await maru.say_and_wait(`この先、よろしくね♪`);
      } else {
        await maru.say_and_wait(
          `なに？ ${callname}、こんな美しい${maru.teen_sex_title}でも興味が湧かないの？ ${
            maru.elder_sibling_sex_title
          }、自分の魅力を疑うわね。`,
        );
        await era.printAndWait(
          `耳を伏せた${maru.name}と、普段の強い落差が、かえって加虐心を煽った。`,
        );
        await era.printAndWait(`無理に抑えた欲が、また持ち上がった。`);
        await maru.say_and_wait(`じゃあこの先、よろしくね、${callname}♪`);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_40: (() => {
    const title = 'お菓子をくれなきゃ悪戯するわよ！';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await maru.say_and_wait(`${callname}、起きて！`);
      await era.printAndWait(`耳元に、見慣れた声が聞こえた気がする.`);
      era.printButton(`「ん、もう少し寝る」`, 1);
      await era.input();
      await maru.say_and_wait(`もうすぐ9時よ！`);
      era.printButton(`「9時って？ ん！」`, 1);
      await era.input();
      await era.printAndWait(
        `これから起きることを突然悟った ${you.name} はベッドから弾き上がり、慌てて服を着た。`,
      );
      await you.say_and_wait(
        `これでタヅナ${you.adult_sex_title}に説教される。`,
      );
      await maru.say_and_wait(`ふふ～`);
      await era.printAndWait(
        `${you.name}が慌てて起きる様子を見て、${maru.name}はそっと笑った。`,
      );
      await you.say_and_wait(`アラームが鳴らなかった？ え？`);
      await era.printAndWait(`スマホの表示は7時。出勤まであと1時間。`);
      await you.say_and_wait(`${maru.name}！`);
      await maru.say_and_wait(`お菓子をくれなきゃ悪戯するわよ！`);
      await you.say_and_wait(`ん——ハロウィンはエイプリルフールじゃない！`);
      await maru.say_and_wait(`${callname}からお菓子が欲しいの～`);
      await you.say_and_wait(`あとで一緒にキャンディ屋を見に行こう。`);
      await era.printAndWait(`いつの間にか、二人の唇がまた重なった。`);
      await maru.say_and_wait(`うん——じゃあこれで、少し我慢しましょう♪`);
      await era.printAndWait(
        `二人の朝食を食卓に出した${maru.name}が、かわいい笑顔を見せた。`,
      );
      era.drawLine({ content: 'トレーニング室' });
      await you.say_and_wait(`これが最後の一枚だ。`);
      await maru.say_and_wait(`お疲れさま！`);
      await era.printAndWait(
        `傍で待っていた${maru.name}が、慣れた手つきで書類をフォルダへ収めた。`,
      );
      await you.say_and_wait(`この先は。`);
      await maru.say_and_wait(`この先は？`);
      await you.say_and_wait(`何か……大事なことをしなきゃ？`);
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? 'ト・レ・ー・ナ・ー・ちゃん' : 'ト・レ・ー・ナ・ー・くん'}？`,
      );
      await era.printAndWait(
        `耳が後ろへ倒れた${maru.name}に気づき、${you.name} は胸がざわついた。`,
      );
      await you.say_and_wait(`考えろ、何を忘れた？ あ、そうだ！`, true);
      await maru.say_and_wait(
        `${you.sex_code !== 1 ? 'ト・レ・ー・ナ・ー・ちゃん' : 'ト・レ・ー・ナ・ー・くん'}?`,
      );
      await era.printAndWait(
        `${maru.name}の口調はだんだん重くなるが、顔の表情は微塵も変わらない。`,
      );
      await you.say_and_wait(`一緒にキャンディ屋へ行かないか？`);
      await era.printAndWait(`平静な口調に、自分でも怖くなった。`);
      await maru.say_and_wait(
        `そうね。あら～${maru.elder_sibling_sex_title}も忘れそうだったわ。本当に${callname}のおかげ♪`,
      );
      await era.printAndWait(
        `さっきの圧迫感は何も起きなかったように消えた。${
          maru.sex
        }はいつから領域を自在に出し入れできるようになったんだ？`,
      );
      await maru.say_and_wait(`一緒に出発する？`);
      await you.say_and_wait(`でも出発前に、もう一つある。`);
      await maru.say_and_wait(`ん？`);
      await era.printAndWait(`唇が重なった。`);
      await maru.say_and_wait(`ん——は、えええ？`);
      await era.printAndWait(`十五秒に及ぶ深いキス。`);
      await you.say_and_wait(
        `ハッピーハロウィン！ お菓子をくれなきゃ悪戯するぞ！`,
      );
      await maru.say_and_wait(
        `え？ ${callname}、わ・た・し・気・が・変・わ・っ・た！`,
      );
      await era.printAndWait(
        `柔らかい感触より、${you.name} は${maru.name}がこれから口にする言葉のほうが気になった。`,
      );
      await maru.say_and_wait(`今夜は${you.name}を寝かせないわよ❤`);
      await era.printAndWait(
        `全身の力が一瞬で消えたように、${maru.name}の抱擁の中でぐったりした。`,
      );
      await maru.say_and_wait(
        `ふふふ——今はまだ足が緩むときじゃないわよ、${callname}。`,
      );
      await era.printAndWait(
        `いつの間にか潤んだ目尻を、${maru.name}がそっと拭った。`,
      );
      await maru.say_and_wait(`夜も、よろしくね、${callname}♪`);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '天皇賞（秋）前・エデンの夢';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`皇帝との二度目の対決が、始まろうとしている。`);
      await era.printAndWait(
        `${maru.name} と皇帝の二度目の対決として、観客にとっては空前の盛況だ。`,
      );
      era.drawLine({ content: '控え室' });
      era.printButton(`「いちばんすばらしい背中を見せてくれ」`, 1);
      await era.input();
      await maru.say_and_wait(
        `小ルドルフと同じ舞台で競えるなんて、間違いなくいちばんの舞台よ♪`,
      );
      era.printButton(`「成功の見込みはあるか？」`, 1);
      await era.input();
      await you.say_and_wait(
        `名高い${maru.uma_sex_title}たちに挑み、${
          maru.sex
        }たちと交わり、対抗し、勝敗を決める。`,
      );
      await you.say_and_wait(`成功の見込みはあるか？`);
      await era.printAndWait(
        `${maru.name}はしばらく沈黙したあと、答えを出した。`,
      );
      await maru.say_and_wait(
        `${callname}は、レース場で走る${maru.uma_sex_title}たちをどう見てる？`,
      );
      await you.say_and_wait(`レース場で勝つために、裏で汗と努力を払った。`);
      await you.say_and_wait(`でも。`);
      await maru.say_and_wait(
        `そうね。勝てる${maru.uma_sex_title}は一頭だけ。`,
      );
      await era.printAndWait(
        `目の前に再び、生徒会室の中央にあるあの名言が浮かんだ。`,
      );
      await you.say_and_wait(`一頭が先んじ、万頭は沈黙。`);
      await maru.say_and_wait(
        `初めて見たとき、どう理解すればいいか、長く考えてもわからなかった。`,
      );
      await maru.say_and_wait(
        `黙々と頑張る${maru.uma_sex_title}たちは、負けただけで、努力がすべて否定される。`,
      );
      await maru.say_and_wait(
        `一頭の${maru.uma_sex_title}しか勝てないなら、他の${maru.uma_sex_title}の努力は全部無駄になるんじゃない？`,
      );
      await maru.say_and_wait(
        `失敗が決まっている結末なら、最初から諦めて別の方向へ行くほうが賢いんじゃない？`,
      );
      await maru.say_and_wait(
        `——でも、走ることこそ${maru.uma_sex_title}の天性でしょう？`,
      );
      await maru.say_and_wait(`スタート前、発走の合図を緊張して待つ。`);
      await maru.say_and_wait(
        `走りの中で、未知の世界と孤独に向き合う。でも想像ほど怖くはない。`,
      );
      await maru.say_and_wait(`スパートのとき、後方から届く踏み込みの音。`);
      await maru.say_and_wait(
        `前方の背中を超えたい。もっと速く走りたい。${maru.sex}より遠くまで踏み出したい。`,
      );
      await maru.say_and_wait(
        `最後にゴールした瞬間は、かえってそれほど大事じゃなくなる。`,
      );
      await maru.say_and_wait(
        `そんな思いを抱いて成功を取る。そうして後輩が前方の道が見えないとき、この道に従う。`,
      );
      await maru.say_and_wait(
        `歩けると証明された道を、試してみたら行けるかもしれないという態度で。`,
      );
      await maru.say_and_wait(
        `だから私の答えは——成否にかかわらず、この冒険にはやる価値がある。`,
      );
      await era.printAndWait(`レース開始を告げる放送が鳴った。`);
      await maru.say_and_wait(`ごめん、うっかり話しすぎたわ。`);
      await era.printAndWait(`少し照れた${maru.name}が顔を赤らめた。`);
      await era.printAndWait(
        `${maru.name}を募集してから、こんなに多くの出来事を経た。`,
      );
      await era.printAndWait(
        `泣きも、笑いも、慟哭も、喜びも、信頼も、裏切りも。`,
      );
      await era.printAndWait(`もう、全部一度は経験した。`);
      await era.printAndWait(`${maru.name}にとって————`);
      era.printButton(`「一緒に出発しよう。」`, 1);
      await era.input();
      era.printButton(`「自分たちの物語を書こう。」`, 1);
      await era.input();
      await maru.say_and_wait(`……ふふ♪`);
      await era.printAndWait(`${maru.name}は笑顔を見せた。`);
      await maru.say_and_wait(`この先何が起きても。ずっとそばにいてね？`);
      await maru.say_and_wait(`笑いでも、泣きでも。一緒に向き合うのよ？`);
      await era.printAndWait(
        `${you.name} の記憶の中で、いちばん美しい笑顔だろう。`,
      );
      await era.printAndWait(`${maru.name} はレース場へ向かった。`);
      await era.printAndWait(`すぐ先で、皇帝が挑戦者を待っている。`);
      await era.printAndWait(`${you.name} は ${maru.name} の勝利を祈った。`);
      await era.printAndWait(`時間は、ここで流れる。`);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '天皇賞（秋）後・金色の秋、黄金の夢';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} darley ダレアラビア
     * @param {CharaTalk} godolphin ゴドルフィンアラブ
     * @param {CharaTalk} byerley バイアリーターク
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, darley, godolphin, byerley, you, callname) => {
      darley.name = '叡智の女神';
      godolphin.name = '優しい女神';
      byerley.name = '厳粛な女神';
      await maru.say_and_wait(`はあ、はあ、はあ。`);
      await maru.say_and_wait(`もう少しだった。`);
      await era.printAndWait(`最後のコーナーで一気に加速した。`);
      await era.printAndWait(`この瞬間、競馬場は二人の角逐場になった。`);
      await era.printAndWait(`あと10馬身、8馬身、6馬身。`);
      await era.printAndWait(`ゴールまであと15mもない。`);
      await era.printAndWait(`後方から来る雷鳴がどんどん近い。`);
      await maru.say_and_wait(`やっぱり最後は、少し足りなかった？`, true);
      await era.printAndWait(
        `先に積んだ優位は、炎に溶かされる積雪のように速く消える。`,
      );
      await era.printAndWait(`最後のスパートの瞬間。`);
      await era.printAndWait(`皇帝が ${maru.name} の背中に追いついた。`);
      await era.printAndWait(`だが ${maru.name} は一歩を踏み出した。`);
      await era.printAndWait(`皇帝：まさかこうなるとは。面白い。`);
      await you.say_as_passer_by_and_wait(
        `実況`,
        `最後の勝者は—— ${maru.name} ！`,
      );
      await maru.say_and_wait(`もう勝った。`);
      await maru.say_and_wait(`……どうして、こんなに疲れた。`);
      era.drawLine();
      maru.print(
        `再び目を開けたとき、大きな夢から覚めたようだった。目の前は朦朧として神秘の草原。`,
      );
      maru.print(
        `陽が疎らな雲を通り、細い糸のようにそっと降り、限りない緑に温かく柔和な金をかけた。`,
      );
      maru.print(
        `起き上がろうとすると、体の細胞一つひとつが活力に満ちている。`,
      );
      maru.print(
        `そのまま立ち上がった。周りを見ると、青空と白い雲の下、巨大な翡翠のように大地に嵌められた一望の草原が、柔和で神秘の気配を放っている。`,
      );
      maru.print(
        `微風が過ぎ、草の波が海のうねりのように転がり、清新な草の香りを運ぶ。`,
      );
      await maru.say_and_wait(`ここはどこ？`);
      maru.print(
        `誰も答えない。だが内心は、答えられる場所があることを、無比に確信している。`,
      );
      await maru.say_and_wait(`いつものように、馬力全開！`);
      await maru.say_and_wait(`さん！`);
      await era.printAndWait(`上半身を伸ばし、肩を緩めて沈める。`);
      await maru.say_and_wait(`に！`);
      await era.printAndWait(`すべての力を脚に注ぐ。`);
      await maru.say_and_wait(`いち！`);
      await era.printAndWait(
        `大きく息を吸い、空気に満ちる清新な草の味を感じる。`,
      );
      await era.printAndWait(
        `それから答えを追い、${maru.name} は芝の抱擁の中を疾走した。`,
      );
      era.drawLine();
      await era.printAndWait(` ${maru.name} は金色の草原へ来た。`);
      await era.printAndWait(
        `懐かしい、${maru.uma_sex_title} の魂の揺りかごだ。`,
      );
      await maru.say_and_wait(`ここは？`);
      await godolphin.say_and_wait(`やっと来たわね、優しい子。`);
      await era.printAndWait(
        `突然目の前に現れたのは、優しさと愛護の心ですべてを包む女神。`,
      );
      await darley.say_and_wait(`この一路の苦労は、私たちも見ていた。`);
      await era.printAndWait(
        `続いて、それぞれの ${maru.uma_sex_title} が生まれ持った個性を尊重し祝福する、冷静で和やかな女神が現れた。`,
      );
      await byerley.say_and_wait(`時間に意味を与え、そこから得る強い力を追う`);
      await byerley.say_and_wait(`凡人としては、それも一種の強い示しだろう。`);
      await era.printAndWait(
        `強さこそ未来を拓くと信じる、厳粛で強い女神が現れた。`,
      );
      await maru.say_and_wait(`どうして私はここにいるの？`);
      await byerley.say_and_wait(
        `……ここは、領域を悟ったすべての ${maru.uma_sex_title} が才能を極限まで発揮したあと、たどり着く競技場だ。`,
      );
      await godolphin.say_and_wait(
        `すばらしい一生を過ごしたあと、すべての ${maru.uma_sex_title} が最後にたどり着く優しい郷でもあるわ。`,
      );
      await darley.say_and_wait(`エデンに到達した ${maru.uma_sex_title} よ。`);
      await darley.say_and_wait(
        `わかっているはずだ。私たちが創ったこの世界は、異なる理念の永遠の対立が、多くの悲しみと痛みを生んだ。`,
      );
      await darley.say_and_wait(
        `だがそれは同時に、この世界に永遠に存在する、異なる、拮抗した他の選択を保証している。`,
      );
      await godolphin.say_and_wait(
        `誰にも認められず、時宜に合わないと思われた夢にも、永遠に憧れる彼方がある。`,
      );
      await godolphin.say_and_wait(
        `どんな信念を抱いても、この世界には必ず、心の奥の帰宿になる場所がある。`,
      );
      await byerley.say_and_wait(
        `人間と ${maru.uma_sex_title} には長い学習の時間が要る。平和に、敬意を持って争うことを学ぶために。`,
      );
      await byerley.say_and_wait(
        `すべての争いの最後には一つの意味が出る。その意味が、勝利のために代価を払った各方の ${maru.uma_sex_title} を救う。`,
      );
      await darley.say_and_wait(
        ` ${maru.name}、エデンに来た千万の ${maru.uma_sex_title} たちと同じく、聞きたいことはあるか？`,
      );
      await maru.say_and_wait(`聞きたいこと？`);
      maru.print(`一瞬、聞きたいことが多すぎて、言葉が喉に詰まった。`);
      maru.print(`でも、。`);
      await maru.say_and_wait(`いいわ。`);
      await maru.say_and_wait(`旅でいちばん大事なのは、道端の景色よ。`);
      await maru.say_and_wait(
        `最初から終点の答えがわかっていたら、道端の景色は存在する意味を失う。`,
      );
      await maru.say_and_wait(
        `どうしてもと言うなら、この楽しい旅が終わったあと、また会ったときに出す問いのほうが賢明でしょう？`,
      );
      await darley.say_and_wait(
        `真相より世俗を気にするか。面白い道を選んだな。`,
      );
      await godolphin.say_and_wait(`この先の道は、今より険しいわ。`);
      await byerley.say_and_wait(
        `どんな困難も越えられるだろう。お前にはその資格がある。`,
      );
      await darley.say_and_wait(`この先の道に、追い風を。`);
      await era.printAndWait(
        `柔和な風が ${maru.name} をそっと持ち上げ、遠い世界へ加速して進む。`,
      );
      await era.printAndWait(
        `意識が消える直前の刹那、${maru.name} はこの黄金のような故郷を深く胸に刻んだ。`,
      );
      era.drawLine();
      era.printButton(`「${maru.name}？」`, 1);
      await era.input();
      await era.printAndWait(
        `不幸中の幸いと言うべきか。レース終了後はずっと朦朧としていた ${maru.name} は、ウイニングライブでも自分の舞いを、支援する一人ひとりの胸に届けた。`,
      );
      await era.printAndWait(
        `トレーナーとして、今の ${maru.name} は休みが必要だと称してすべての面会と取材を断り、${maru.name} が既存の科学では説明できない不動の状態だと確認したあと、慎重に ${maru.name} を背負い、愛車で ${maru.sex} を住んでいるアパートへ送った。`,
      );
      era.printButton(`「お邪魔します。」`, 1);
      await era.input();
      await era.printAndWait(
        `愛車を近くの駐車場に止めながら、慎重に ${maru.name} を抱いた。`,
      );
      await era.printAndWait(
        `${maru.sex} をベッドに安置したあと、椅子を一脚抜いて ${maru.sex} のそばに座った。`,
      );
      await you.say_and_wait(
        `どうか何事もありませんように、${maru.name}。`,
        true,
      );
      await era.printAndWait(
        `自分の最大限を尽くしたあと、自分の眠りが ${maru.name} の目覚めと引き換えになるよう祈った。`,
      );
      await era.printAndWait(`落ち着かないまま過ごした。`);
      await era.printAndWait(`一分、一時、一夜、言葉はない。`);
      await maru.say_and_wait(`ん。`);
      await era.printAndWait(
        `陽が雲を通り、斑の光と影を ${maru.name} の体に落とすまで。`,
      );
      await maru.say_and_wait(`ここは？`);
      await era.printAndWait(
        `目覚めた${maru.teen_sex_title}は見慣れた天井を不思議そうに見てから、その見知らぬようで見慣れた姿に視線を止めた。`,
      );
      await maru.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `一日一夜溜まった疲れが ${you.name} を徹底的に押し潰したのか、${you.name} はいつの間にか眠っていた。`,
      );
      await maru.say_and_wait(
        `この角度から見ると、${callname}、かっこいいわね♪`,
      );
      await maru.say_and_wait(`何度見ても飽きないわ♪`);
      await maru.say_and_wait(`……一路、お疲れさま、${callname}。`);
      await maru.say_and_wait(`何があっても、私たちは一緒よ？`);
      await era.printAndWait(` ${maru.name} は ${you.name} をきつく抱いた。`);
      await era.printAndWait(`三女神は優しく子どもたちを見守っている。`);
      await darley.say_and_wait(`……優しい子よ。お前の願いは、きっと叶う。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_43: (() => {
    const title = '優しい風';
    /** @param {CharaTalk} maru マルゼンスキー */
    const f = async (maru) => {
      maru.print(`意外な早起き。`);
      maru.print(`眠い目をこすっても、寝返っても眠れない。`);
      maru.print(`煩悶に耐えきれず、そのまま起きた。`);
      maru.print(`眠い目をこすってから、窓を開けた。`);
      maru.print(`爽やかな空気が、このアパートを訪れた`);
      maru.print(
        `屋外の金色の葉も母樹の抱擁を離れ、金風の導きでここを訪れた。`,
      );
      await maru.say_and_wait(`はい！`);
      maru.print(`小さな客人に笑顔を見せて迎える`);
      maru.print(`主人の招待を受けた小さな客人は、机の上にしっかり落ちた`);
      await maru.say_and_wait(
        `……そういえば今、落ち葉で作ったしおりが流行ってるわね`,
      );
      maru.print(`葉を丁寧に洗ったあと、辞書で平らに押した`);
      maru.print(`爽やかな空気が、このアパートを訪れた`);
      await maru.say_and_wait(`この先は、太陽が出るのを待てばいい`, true);
      maru.print(
        `朝の薄い霧はまだ散らず、月は空にかかり、星が点々としている。`,
      );
      await maru.say_and_wait(`ほどなく冬ね`, true);
      maru.print(`春に芽吹いた葉は夏に繁り、秋に凋み、最後は冬の抱擁に還る`);
      await maru.say_and_wait(`私も、懸命に咲いたかしら？`, true);
      maru.print(
        `突然の強風で目がほとんど開けられない。金色の落ち葉は名残惜しそうに枝の抱擁を離れ、熱情の風に従い最後の旅へ向かう。`,
      );
      maru.print(
        `小川のように奔る無数の落ち葉が、風の導きで大地の海へ楽しく流れ込む。`,
      );
      await maru.say_and_wait(
        `かわいい後輩たちが、最後にどこまで達するか、楽しみね。ん、そう思うとプレッシャー。`,
      );
      maru.print(`落ち葉に言うようでもあり、自分に語るようでもある。`);
      await maru.say_and_wait(`後輩たちが私を超える日を待つ`, true);
      maru.print(`後輩が背中に追いつく日まで、${maru.name}は待ち続ける。`);
    };
    f.title = title;
    return f;
  })(),

  ws_95_48: (() => {
    const title = 'クリスマス';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        ' との約束を果たすため、',
        you.get_colored_name(),
        ' は最後の仕事を終えると急いで約束の場所へ向かった。',
      ]);
      await era.printAndWait(
        `約束のケヤキ並木の近くに着き、${you.name} はスマホを見た.約束より30分早い。`,
      );
      era.printButton(`「時間はまだ十分あるな」`, 1);
      await era.input();
      await era.printAndWait(`心が落ち着いた${you.name}は、急ぎ足を緩めた。`);
      await era.printAndWait(
        `去年、${maru.name}とファンの包囲を避けるため慌てて逃げ、偶然この小径を見つけた.`,
      );
      await era.printAndWait(
        `当時の${
          maru.sex
        }はとても嬉しそうだった……違う,レース場のときとは違う、別種の楽しさだ.`,
      );
      await era.printAndWait(
        `一緒に走る喜びを味わわせるため、わざと歩幅を落としたらしい.当時の私は頭が真っ白だった.`,
      );
      await era.printAndWait(
        `バレンタインのあのキス、ファン感謝祭の親密な接触……`,
      );
      await era.printAndWait(`過去の思い出が、煙る炉火のようにゆっくり上がる`);
      await era.printAndWait(`実際は……`);
      await maru.say_and_wait(`びっくり！`);
      await era.printAndWait(
        `${you.name}を驚かせるためか,${maru.name}が${you.name}の左手のケヤキの後ろから突然現れた.その赤い姿が白雪の中で格別に眩しい.`,
      );
      era.printButton(`「うわあああ」`, 1);
      await era.input();
      await era.printAndWait(
        `視界に突然飛び出した${maru.teen_sex_title}(?)に,${you.name}は見事に驚いた.`,
      );
      await maru.say_and_wait(`はい♪${callname}`);
      era.printButton(`「${maru.name}、そう突然飛び出すと怖い」`, 1);
      await era.input();
      await era.printAndWait(
        `去年、${maru.name}とこのケヤキ並木で会う約束をした.だが${
          maru.sex
        }がこんなに活発だとは思わなかった.`,
      );
      await era.printAndWait(
        `いつも成熟した${maru.elder_sibling_sex_title}を自称しているが,${you.name}の前では${maru.sex}の別の面も見せ始めた.`,
      );
      await maru.say_and_wait(
        `興奮を抑えきれず一時間早く着いて、退屈で気まぐれになったのもあるわ.`,
      );
      await maru.say_and_wait(`でも${callname}がそんなに驚くの、かわいいわね♪`);
      era.printButton(`「${maru.name}!!!」`, 1);
      await era.input();
      await maru.say_and_wait(`ふふ♪${callname}、捕まえてみて.`);
      era.printButton(`「逃げるな！」`, 1);
      await era.input();
      await era.printAndWait(
        `子どもみたいに追いかけっこをして、うっとりと、憂いのない幼いころへ戻った。`,
      );
      era.printButton(`「楽しいな」`, 1);
      await era.input();
      await era.printAndWait(
        `幸いこの小径の往来は少なく、しかもみんなあなたたちのようなカップルだ`,
      );
      await era.printAndWait(
        `${maru.name}はともかく,${
          you.name
        }にもう子どもの活力はない.荒い息で幹に掴まり${maru.sex}を見るしかない.`,
      );
      await maru.say_and_wait(`ふんふん♪ このゲームは私の勝ち.`);
      await maru.say_and_wait(
        `勝者として,${callname}に一つ条件を受けてもらうわ.`,
      );
      era.printButton(`「ちょっと、そんな話あったか」`, 1);
      await era.input();

      await maru.say_and_wait(`今夜、私とデートしましょう.`);
      await maru.say_and_wait(
        `こんな潮流の美しい${maru.teen_sex_title}とデートできるのは、千載一遇の機会よ.`,
      );
      await maru.say_and_wait(`${callname}の気持ちは？`);
      era.printButton(`「……」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}が答えようとしたとき,腹が情けなく鳴った.`,
      );
      await maru.say_and_wait(
        `ふふ,${callname}、お腹が空いたみたい.じゃあ先に少し食べてから出発しましょう.`,
      );
      await era.printAndWait(
        `${you.name}は再び助手席に座った.見慣れた感触が${you.name}をこの上なく安心させる.`,
      );
      await era.printAndWait(
        `${maru.sex}は鍵を挿してエンジンをかけ,低音の轟きが静かな公園に響いた.`,
      );
      await era.printAndWait(`サイゼリヤで、少し豪華な夕飯を一緒に食べた.`);
      await era.printAndWait(
        `一人で黙々と噛むより,${maru.name}がいると食べ物はもっと美味しく見える.`,
      );
      await maru.say_and_wait(`OK,愛車で${you.name}を待ってるわ.`);
      await era.printAndWait(
        `${you.name}は${maru.name}を先に愛車へ戻して待たせ,自分は先にレジへ行った.`,
      );
      await era.printAndWait(`エンジンが再び轟き,今日最後の目的地へ出発した.`);
      await era.printAndWait(
        `${you.name}は車内パネルの再生に慣れた手で触れ,座席に寄り音楽を楽しんだ.`,
      );
      await era.printAndWait(`信号が変わると,愛車は坂を登った.`);
      await era.printAndWait(
        `高速に乗ると車は一気に加速し、両側を飛ぶ街灯で${you.name}はタイムトンネルにいるかのようだった。`,
      );
      await era.printAndWait(
        `最初の不快を経て,${you.name}は${maru.name}の速度にゆっくり慣れた.`,
      );
      await era.printAndWait(
        `音楽は${you.name}を時間から誘い,呼吸は${you.name}に時間を解放させる.`,
      );
      await era.printAndWait(
        `${you.name}が振り返って${maru.name}を見ると,ちょうど${maru.sex}が視線を戻す一瞬を覗いた.`,
      );
      await era.printAndWait(
        `そのあとスピーカーの柔和な音楽以外,沈黙が降りた.`,
      );
      await maru.say_and_wait(`${callname},もう山頂よ.`);
      await era.printAndWait(
        `この街の近くでいちばん高い山だ.山頂から下を見ると,街全体が目に収まる.`,
      );
      await era.printAndWait(
        `冷たい空気が肺に残る温もりを奪い,心臓の激しい鼓動を刺激する.`,
      );
      await era.printAndWait(
        `${you.name}は傍らの${
          maru.sex
        }を見た.その軽い,明るい瞳が,きらきらと祭りの街を見ている.`,
      );
      era.printButton(`「${you.name}の目、本当に美しいな」`, 1);
      await era.input();
      await maru.say_and_wait(`ふふ♪ ${callname}、私と戯れるつもり？`);
      await maru.say_and_wait(
        `あら、この歳になってまだ若い人にからかわれるなんて。魅力はまだ減ってないみたいね。`,
      );
      await era.printAndWait(
        `${maru.name}は視線を戻し,それから再び${you.name}を見た.`,
      );
      await maru.say_and_wait(
        `よく、目は心の窓と言うでしょう。${callname}から見て、私はどんな感じ？`,
      );
      await you.say_and_wait(`少し感傷的で、優しくて美しい目`);
      await maru.say_and_wait(`${callname}は、何を思ってその感慨を出したの？`);
      await you.say_and_wait(`その優しい目は、ずっと後輩たちを見ている`);
      await you.say_and_wait(`楽しい時間がずっと続かないことを感傷しながら」`);
      await you.say_and_wait(
        `でも後輩がもっと眩しい光をもたらすと信じて、嬉しい`,
      );
      await you.say_and_wait(`夏の万里無雲の晴れ空みたいだ`);
      await maru.say_and_wait(
        `${callname}、私を買い被りすぎじゃない？ それに今は冬よ.`,
      );
      await you.say_and_wait(
        `あの優しい力を小さく見る人はいない。根は愛だと言えるから.`,
      );
      await you.say_and_wait(`優しい愛だけが、人の心の傷を癒せる.`);
      await you.say_and_wait(
        `その愛に応えて背中を追う子どもたちが放つ炎は、冬でも夏と同じ温もりを感じさせる`,
      );
      await maru.say_and_wait(
        `子どもたちの背中を見ていれば、明日も温かい晴れでしょうね.`,
      );
      await maru.say_and_wait(`${callname}に出会えて、本当によかった♪`);
      await maru.say_and_wait(
        `……${callname}、一度だけわがままを言ってもいい？`,
      );
      era.printButton(`「${you.name}の願いなら、言ってくれ」`, 1);
      await era.input();
      await maru.say_and_wait(`キスしてもいい？`);
      await era.printAndWait(
        `${you.name}は${maru.name}の腰を抱き,髪先を軽く弄った.`,
      );
      await era.printAndWait(`10秒のキスが、一生忘れられない思い出になった.`);
      await era.printAndWait(
        `それから二人は離れ,${maru.name}の涙が頬をゆっくり滑った.`,
      );
      await maru.say_and_wait(`${callname},私は${you.name}を愛してる.`);
      era.printButton(`「俺も${you.name}を愛してる」`, 1);
      await era.input();
      await era.printAndWait(
        `時計が12時を指すと,花火の中で二人はきつく抱き合った.`,
      );
    };
    f.title = title;
    return f;
  })(),
  current_trend: (() => {
    const title = '街の潮流を推す人';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`ある日、中庭で起きたこと————`);
      await maru.say_and_wait(
        `${callname}、${you.name}に相談したいことがあるの。${you.name}、今大丈夫？`,
      );
      era.printButton('「どうした？」', 1);
      await era.input();
      await maru.say_and_wait(
        `あの……後輩たちに誘われて、おしゃれな市街へ買い物に行くつもりなの。${you.name}も、ファッションの最先端を歩く感じ、わかるでしょう？`,
      );
      await maru.say_and_wait(
        `……でも、わかるでしょう。ファッションの変化はとても速いの。私も最新の知識を勉強してるつもりだけど、後輩たちと話すとき、どうも通じないことがあるの。`,
      );
      await maru.say_and_wait(
        `そうすると空気がとても気まずいの。みんなをがっかりさせないために、${you.name}、いい案を考えてくれない？`,
      );
      era.printButton(
        '「自分のセンスを上げる特訓をしよう！」（スピード+10）',
        1,
      );
      era.printButton(`「自分に自信を持て！」（パワー+10）`, 1);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `なるほど、今いちばん流行のトレンドを確認するのね！`,
        );
        await maru.say_and_wait(
          `じゃあ${callname}、${you.name}と一緒に潮流を確認しに行ってもいい？`,
        );
        era.printButton('「もちろん！」', 1);
        await era.input();
        await era.printAndWait(
          `こうして${you.name}と${maru.name}は市街へ行った。`,
        );
        await maru.say_and_wait(
          `早速、あの通りの潮流から確認しましょう。あちらのCD店なら最新の潮流がわかるかも♪`,
        );
        await era.printAndWait(
          `${maru.name}が指したのは年代を感じるCD店だった。いくらなんでも、そこで最新の潮流を見つけるのは……`,
        );
        await maru.say_and_wait(`${callname}、どこか具合悪いの？`);
        await era.printAndWait(
          `心の中ではそう突っ込みつつ、${you.name}は黙って${
            maru.sex
          }と一緒に流行(二十年前)のCD店を探った`,
        );
        await era.printAndWait(
          `しばらくして、${you.name}と${maru.name}はこの通りの店をすべて確認した.`,
        );
        await maru.say_and_wait(
          `最新潮流を追うのは本当に難しいわ。ママはコツさえつかめば大丈夫って言ってたのに……`,
        );
        era.printButton(
          `「ママが${you.name}に教えたことを、話してみないか？」`,
          1,
        );
        await era.input();
        await maru.say_and_wait(
          `後輩たちに話すの……なるほど、それも一つの手ね。流行を追うより、自分から広げるほうが楽しいはず！`,
        );
        await maru.say_and_wait(
          `じゃあ明日は後輩たちに潮流を広げるわ,${callname}、${you.name}ありがとう⭐`,
        );
        await era.printAndWait(
          `翌日、${maru.name}は興奮して${you.name}に、後輩たちが${
            maru.sex
          }の新しい潮流を受け入れたと教えてくれた.`,
        );
      } else {
        await maru.say_and_wait(`自分のセンスに自信を持て、か……？`);
        await maru.say_and_wait(
          `少し臆病になってたのかも。躊躇して不安な様子、私らしくないわね。`,
        );
        await maru.say_and_wait(
          `それに、みんな私のセンスは知ってる。誰よりファッションをわかってる、どうしても時代の先端を走る${maru.uma_sex_title}よ。`,
        );
        await maru.say_and_wait(
          `よし！ 後輩たちとのお出かけ、思い切り楽しむわ！`,
        );
        await era.printAndWait(
          `のちに${you.name}が${maru.name}に前回のお出かけを聞くと、${
            maru.sex
          }は後輩たちと潮流の情報をかなり交わしたようだ。`,
        );
        await era.printAndWait(
          `これが、独特のセンスで魅力に満ちた${maru.name}.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  feel_speed: (() => {
    const title = 'スーパーカーでドライブ';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `ある日、${you.name} が校門を出て散歩しようとしたとき、ちょうど——`,
      );
      await era.printAndWait(
        `機嫌のいい${maru.name} が校外へ向かって歩いていた。`,
      );
      era.println();

      await maru.say_and_wait(
        `あら、${callname}？ 今日はいい天気ね。一緒にドライブしない？`,
      );
      era.printButton('「いいよ。」', 1);
      await era.input();
      await maru.say_and_wait(
        `${
          maru.name
        } の誘いを断る理由はない。校外に仮置きした赤い車へ、一緒に向かった.`,
      );
      await maru.say_and_wait('じゃあ、出発よ！');
      await era.printAndWait(
        `紅蓮色のスーパーカーが始動したとき、${you.name} は突然悪寒を感じた。たぶん錯覚だ。${you.name}は自分を慰めた。`,
      );
      era.println();
      await era.printAndWait(`十秒後`);
      era.printButton('「ちょっと速すぎないか！」', 1);
      await era.input();
      await maru.say_and_wait('この車速、まだ大丈夫よ！');
      await maru.say_and_wait('そろそろ高速よ！ 本気を出すわよ！');
      await maru.say_and_wait(
        '愛車が加速した！ 愛車がドリフトした！ 愛車の速度がもっと速くなった！！！',
      );
      await maru.say_and_wait('ふお！ この感じ、たまんないわ♪');
      await maru.say_and_wait(
        `あれ？ ${era.get('callname:0:-1')}！ ${you.name}、どうしたの？`,
      );
      await maru.say_and_wait('ふお！ この感じ、たまんないわ♪');
      await maru.say_and_wait('ねえ？ ねえ？');
      await maru.say_and_wait(`${you.name}、大丈夫？ 私がスパートしすぎた？`);
      era.printButton('「限界まで挑戦しよう！」（スピード+10）', 1);
      era.printButton('「少し休んでもいいか？」（賢さ+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `${callname}がそこまで言うなら、${
            maru.elder_sibling_sex_title
          }も本気出すわ！`,
        );
        await maru.say_and_wait('一緒に限界を突破しましょう！');
        await maru.say_and_wait('さあ！ 音速を超えて！');
        await maru.say_and_wait(
          `私と${you.name}が一緒なら、どこへでも着けるわ！`,
        );
        era.println();
        await maru.say_and_wait('これが、風に化けるってこと？');
        await era.printAndWait(
          `${you.name} の意識が闇に落ちる直前、マルゼンの陶酔した独り言が聞こえた。`,
        );
      } else {
        await maru.say_and_wait(`わかったわ。無理はだめよ！`);
        era.println();
        await maru.say_and_wait(`前のサービスエリアへ行きましょう！`);
        await era.printAndWait(
          `こうして${maru.name}は車をサービスエリアに停めた。`,
        );
        era.println();
        await maru.say_and_wait(`大丈夫、トレーナー？`);
        await maru.say_and_wait(`飲み物を買ってくるわ。`);
        await era.printAndWait(
          `${maru.name}はすぐに冷たい飲み物を二本持ってきた。`,
        );
        await maru.say_and_wait(`${callname}、${you.name} は今大丈夫？`);
        await era.printAndWait(
          `飲み物を飲んだあと、${maru.name}の眩暈はゆっくり消えた。`,
        );
        await maru.say_and_wait(
          `このまま${maru.elder_sibling_sex_title}の太ももで休みなさい。`,
        );
        await era.printAndWait(
          `${maru.name}はそっと${you.name}の頭を自分の太ももに置いた。`,
        );
        await era.printAndWait(
          `${maru.sex}の指が${you.name}の肌に触れ、一筋の冷たい感触を残す.`,
        );
        await maru.say_and_wait(
          `これが『膝枕』？ 私も初めてよ.気持ち悪かったら${
            maru.elder_sibling_sex_title
          }に言ってね.`,
        );
        await era.printAndWait(
          `女性特有の香りが頭を刺激し、${you.name}はいつの間にかふわふわした想像に沈んだ.`,
        );
        await maru.say_and_wait(
          `三女神よ、${you.name}に願う。一瞬でもいい、ここに沈ませて。意識が消える直前、${you.name}は祈った.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  favourite_things: (() => {
    const title = 'マルゼンスキー、「好き」を語る';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`今日の${maru.name}は取材を受けている.`);
      await you.say_as_passer_by_and_wait(
        '記者',
        `では、次は勝負服についてお聞かせください。この勝負服でいちばん気に入っているところはどこですか？`,
      );
      await maru.say_and_wait(
        `燃えるような赤がいちばん好きだから、愛車も赤なのよ♪`,
      );
      await you.say_as_passer_by_and_wait('記者', `愛車？`);
      era.printButton(`${maru.name}の愛車の呼び名です.`, 1);
      await maru.say_and_wait(`あ、ごめん、話し込んじゃった♪`);
      await maru.say_and_wait(
        `実は子どものころ車展に連れていかれて、真っ赤なスーパーカーを見たの。あのかっこいい外観、目が離せなかったわ.`,
      );
      await maru.say_and_wait(
        `当時の私は、将来車を買うならこれだと誓って、カタログの写真を見ながら運転する姿を想像して頑張ったの.`,
      );
      await maru.say_and_wait(`今はその夢も叶ったわ。毎日愛車で走り回ってる♪`);
      await era.printAndWait(`取材は順調に進んでいる……`);
      await you.say_as_passer_by_and_wait(
        '記者',
        `ありがとうございます。では最後に、写真もお願いできますか`,
      );
      await maru.say_and_wait(`了解！ できるだけ魅力を出すわ.`);
      await maru.say_and_wait(
        `そうだ！ いちばん私を知ってるのは${callname}でしょ？`,
      );
      await maru.say_and_wait(
        `${you.name}は今日の撮影で、私のどこを推したほうがいいと思う？`,
      );
      era.printButton('「誰も及ばないスピード」（パワー+20）', 1);
      era.printButton('「いつでも余裕のある笑顔」（スタミナ+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(
          `なるほど、いちばん眩しいのは走る瞬間を楽しんでるときよね.`,
        );
        await maru.say_and_wait(
          `なら、いっそ愛車の上で写真を撮ってもらいましょう`,
        );
        await era.printAndWait(
          `そのあと記者まで巻き込むドライブで、${maru.name}の顔はきらきらした表情を見せた。`,
        );
      } else {
        await maru.say_and_wait(
          `うん、そうね。何をするにもいちばん大事なのは楽しむこと.`,
        );
        era.printButton('「楽しみにしてるよ」', 1);
        await era.input();
        await maru.say_and_wait(
          `任せて！ ${you.name}の期待に応えて、すごくかわいい笑顔を見せるわ！`,
        );
        await era.printAndWait(`記者:いい！ すばらしい写真が撮れました！`);
        await era.printAndWait(
          `数日後、${maru.name}と一緒に取材記事を確認しているとき.`,
        );
        await maru.say_and_wait(
          `すごくいい笑顔が撮れてるわね♪ それにここ……${you.name}の名前も出てるわ.`,
        );
        await maru.say_and_wait(
          `うん……『トレーナーとの絆から生まれた、印象的な笑顔』って書いてあるわ！`,
        );
        era.printButton('「ちょっと恥ずかしい」', 1);
        await era.input();
        await maru.say_and_wait(
          `そんなことないわ。${you.name}の支えがなければ、こんなかわいい笑顔も出せないもの`,
        );
        await era.printAndWait(
          `写真でも目の前でも、${you.name}は${maru.name}の眩しい笑顔を感じた.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  beautiful_winner: (() => {
    const title = 'クールで派手な必勝法！';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, rice, you) => {
      await era.printAndWait(
        `ある日、${you.name}と${maru.name}がランチ会議のため屋上で食事をしていると——`,
      );
      await era.printAndWait(`微かな泣き声が聞こえた。`);
      await maru.say_and_wait(`あれ——この声は？`);
      await maru.say_and_wait(`ここで何してるの、ライス？`);
      await rice.say_and_wait('ライス……ライスは、だめな子です。');
      await rice.say_and_wait('せっかくライスを鬼ごっこに誘ってくれたのに.');
      await rice.say_and_wait(
        'ライスだけ、まだ捕まってない……お友達がライスをかばって捕まってしまったのに、ライスはどうすれば……',
      );
      await era.printAndWait(
        `ライスの話を聞いたあと、${maru.name}と${you.name}は揃って下を見た。中庭の中央に、牢獄のような場所がある。`,
      );
      await era.printAndWait(
        `${you.name}は${maru.name}を見た。${maru.sex}には案があるようだ.`,
      );
      await maru.say_and_wait(`じゃあ、${you.name}に必勝法を教えましょう♪？`);
      await maru.say_and_wait(
        `体力で決めるA計画と、知恵で勝つB計画。${you.name}はどっちがいいと思う？`,
      );
      await rice.say_and_wait('ライス……ライスにも、わかりません,');
      await era.printAndWait(
        `ライスの目が${you.name}の存在を捉えた。救いを見たように${you.name}を見る.`,
      );
      await era.printAndWait(`${maru.name}は${you.name}の答えを待っている`);
      era.printButton('「体力で決める A 計画」（スタミナ+10）', 1);
      era.printButton('「知恵で勝つ B 計画」（賢さ+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maru.say_and_wait(`OK！ じゃあA計画よ！`);
        await maru.say_and_wait(
          `ライス${you.name}は我慢が得意でしょ？ なら${you.name}が歩いて向こうに${
            you.name
          }の存在を気づかせて、${you.name}と${
            maru.sex
          }は相対的に安定した距離を保つ。向こうの体力が尽きたら、止まらざるを得ないわ.`,
        );
        await rice.say_and_wait('そ、そんなこと……ライスにできますか？');
        await maru.say_and_wait(
          `絶対できる！ ライスちゃんは真面目で頑張るし、意志も強い。私の自慢の後輩よ！`,
        );
        await maru.say_and_wait(`絶対だいじょうぶよ♪`);
        await rice.say_and_wait(
          `マルゼン${
            maru.elder_sibling_sex_title
          }の保証なら、ラ、ライス……あの、や、やってみます……!`,
        );
        await maru.say_and_wait(
          `ふふ♪ ${you.name}のおかげで、スタミナを伸ばすトレーニングも思いついたわ`,
        );
        await era.printAndWait(
          `ほどなく、${you.name}と${maru.name}はライスが仲間を救う小さな姿を見た。`,
        );
      } else {
        await maru.say_and_wait(`OK！ じゃあB計画よ！`);
        await maru.say_and_wait(
          `簡単に言えば、向こうを地勢の複雑なところへ誘うの。校舎とか。それから分岐で振り切る！`,
        );
        await rice.say_and_wait('ラ、ライス、そんなこと、できますか……!');
        await rice.say_and_wait('できるわ！ ライスは考えるのが得意でしょ？');
        await era.printAndWait(
          `${maru.name}はそう言い、ライスの手をきつく握った。`,
        );
        await maru.say_and_wait(
          `落ち着いてしっかり考えれば、ライスは絶対だいじょうぶ！ ね？`,
        );
        await rice.say_and_wait('ん ……ライス……やってみます……！');
        await maru.say_and_wait(
          `……ふふ、後輩にそこまで言ったからには、${
            maru.elder_sibling_sex_title
          }もちゃんとやらないとね。`,
        );
        await era.printAndWait(
          `ほどなく、${you.name}と${maru.name}はライスが仲間を救う小さな姿を見た.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  memory: (() => {
    const title = 'おはよう、マルゼンスキー';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.print(`直射の陽が顔に当たり、しぶしぶ目覚めた。`);
      maru.print(`昨夜遊びすぎて潰れた？`);
      await maru.say_and_wait(`うう——`);
      await era.printAndWait(`${maru.name}はベッドで目を開けた。`);
      await maru.say_and_wait(`ふああ——`);
      await maru.say_and_wait(
        `ベッドから起き上がりたくなくて、片手を伸ばしてアラームを探る。`,
      );
      maru.print(
        `意外なことに、普段うっかり寝坊すると${
          callname
        }に真っ直ぐ睨まれるような怖いアラームが、今は理事長が学園に植えた人参みたいに静かだ。`,
      );
      maru.print(`……違う、どう考えてもおかしいでしょう？`);
      maru.print(`やっぱり昨日力を入れすぎて、うっかり壊した？`);
      maru.print(`それとも——`);
      await maru.say_and_wait(`今日は休日？`, true);
      maru.print(`その吉報を得て、満足してまた眠る——違う！`);
      maru.print(`アラームが壊れてたら？ 今日は曜日……何曜日だっけ？`);
      maru.print(`遅刻して${callname}に見つかったら……`);
      await maru.say_and_wait(`プレッシャー！`, true);
      maru.print(`そうして起き上がると、眠気がまだ消えない体から痺れが走る。`);
      await maru.say_and_wait(`は——あ。`);
      maru.print(`体が自動で反応した。`);
      await era.printAndWait(
        `${maru.name}はぼさぼさの髪を被り、どこへ消えたかわからないスリッパを探り、視界をぼやかしてベッドを下りた。`,
      );
      era.drawLine();
      maru.print(
        `半夢半醒の自分は、冷たい水流に三女神のエデンから生きたまま引きずり出された。`,
      );
      maru.print(
        `ドライヤーで簡単に髪を吹いたあと、まだ水を垂らす髪をタオルで包み、洗面所を出た。`,
      );
      maru.print(`ごくごく、はあ～`);
      maru.print(`コーヒー牛乳を一本一気に飲んだあと、気持ちも弾んできた♪`);
      await maru.say_and_wait(`この先、何をしよう？`);
      maru.print(`休日の今日、後輩たちも羽を伸ばしに行ったはず。`);
      maru.print(`休日のトレセンは、少し寂しいわね。`);
      await maru.say_and_wait(`${callname}——`);
      maru.print(`胸の奥から、一つの感覚が静かに湧いた。`);
      maru.print(`見知らぬようで妙に懐かしい甘い感触が、胸に襲いかかる。`);
      maru.print(
        `${callname}がこの世界から消えても、この胸の動きは忘れないでしょうね。`,
      );
      await maru.say_and_wait(`なら、今日はトレーニング室へ行きましょう。`);
      await era.printAndWait(`卑下しつつ誰より勝ち気な${callname}なら。`);
      await era.printAndWait(
        `今この瞬間も、トレーニング室で次のレースに悩み、濃い苦コーヒーを飲んでいるはずだ。`,
      );
      await maru.say_and_wait(
        `なら、あちゃーな${maru.sex}をこのつらい悩みから引っ張り出さないとね。`,
      );
      await era.printAndWait(`${maru.name}はトレーニング室の扉前に来た。`);
      await era.printAndWait(
        `最近知った「突然扉を押して驚かす」潮流を帯び、扉を押して大きな声で到来を宣言した。`,
      );
      await era.printAndWait(
        `${
          callname
        }が慌てた顔で、さっきの驚きでソファの下へ飛んだリモコンを手探りしている。`,
      );
      await era.printAndWait(
        `${maru.name}は小さな袋の中の、${
          callname
        }とカラオケで撮った写真を思い出した。飲みすぎた${
          callname
        }のかわいい酒窩を、ベッドの上で何度ひっくり返して見たかわからない。`,
      );
      await era.printAndWait(`晴れのせいかもしれない。`);
      await era.printAndWait(
        `${maru.name}は、水をたっぷり吸ったきらきらの人参のようだ。`,
      );
      await era.printAndWait(
        `明日の${maru.sex}もいつものように、この独特の感触でみんなを励ますだろう。`,
      );
      await era.printAndWait(
        `その未来への憧れを帯びて、${maru.name}は新しい一日を迎えた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  teacher_sister: (() => {
    const title = '指導してください、マルゼンスキー先生！';
    /**
     * トレーナーが学びたいものに興味が湧かず、マルゼンスキーが指導する
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`ある休日の朝。`);
      await era.printAndWait(`${you.name} は事務机に這い、何もしたくない。`);
      await era.printAndWait(
        `トレセンに入れたあと、なぜか学生時代の動力が一気に消えた。`,
      );
      await era.printAndWait(
        ` ${maru.name}との交流で以前の感覚はゆっくり戻ってきたが、その無理さはまだ少し悩ましい。`,
      );
      await you.say_and_wait(
        `普段こんなに苦労してるんだ。今日はしっかり休もう。`,
      );
      await maru.say_and_wait(` ${callname}、入るわよ♪`);
      await era.printAndWait(
        `そんな言い訳でサボろうとしたとき、${maru.name}が扉を押して入った。`,
      );
      await era.printAndWait(
        `偶然と言うべきか、${maru.name}はちょうど機嫌がよさそうだ。`,
      );
      await maru.say_and_wait(`なら、${callname}にちゃんと説明しないとね。`);
      await you.say_and_wait(
        ` ${maru.name}に相談すれば、新しい見方が出るかもしれない。`,
        true,
      );
      await era.printAndWait(
        `試してみるつもりで、${you.name}は ${maru.name}に胸の悩みを話した。`,
      );
      await maru.say_and_wait(`ん——そういうことね。`);
      await era.printAndWait(
        ` ${maru.name}はそっと笑いながら、隅の小さな黒板を引き出した。`,
      );
      await maru.say_and_wait(`なら、お姉さんが私の見方を分けましょう。`);
      await era.printAndWait(
        ` ${maru.name}は黒板の左側にデフォルメの自分を描いた。`,
      );
      await maru.say_and_wait(
        `しないと後悔する物事に向き合うとき、どうしてもやる気が起きない状態、ない？`,
      );
      await era.printAndWait(
        `黒板の右側に、悩みの宿題、順位、ダンスを丸で囲んだ。`,
      );
      await maru.say_and_wait(
        `大事だとわかってる。しないと親しい人に、焦りと恐れを感じる。`,
      );
      await era.printAndWait(
        `${maru.sex}は説明しながら、小人に雲を足してくれた。`,
      );
      await maru.say_and_wait(
        `後悔と焦りの中で過ごす。でも、それで維持できてるみたい？！`,
      );
      await era.printAndWait(
        `両者の下で、デフォルメの小人がトレーナーに謝り始める。`,
      );
      await maru.say_and_wait(
        `次に同じことが起きたとき、後悔した顔を見せれば周囲も何も言わず、最後はみんなちょうどいい状態で止まる。`,
      );
      await era.printAndWait(
        `三つの絵を矢印で順に繋ぐと、一つの循環が生まれた。`,
      );
      await maru.say_and_wait(` ${callname}はどう思う?`);
      era.printButton(`事態は解決してないだろ？`, 1);
      await era.input();
      await you.say_and_wait(
        `事態が悪化し、周囲が${you.name}に圧力をかけ、自分が後悔した顔をし、周囲が仕方なく諦める。この循環の中で、解決されていないのは物事だけだろ？`,
      );
      await you.say_and_wait(
        `本来は動力を燃やす燃料になるはずのものが、後悔の顔をした自分で消されて、事態はもっと悪い方向へ進む。`,
      );
      await you.say_and_wait(
        `事態が深刻になるほど、この後悔循環は自己維持するだけでなく、強化される。`,
      );
      await era.printAndWait(
        `8分ほど考えたあと、${you.name}はためらって答えを出した。`,
      );
      await maru.say_and_wait(
        `そう。この循環自体は問題を解決しない。解決した感じだけを解決する。当事者にとっては、来週試験だとわかってても、まだ時間があるからゲーセンへ行く学生と同じ。`,
      );
      await maru.say_and_wait(`本質は、痛みが怖くて鎮痛剤で麻痺させてるだけ。`);
      await maru.say_and_wait(`だから、行動の動機を見つけないと。`);
      await era.printAndWait(
        `正しい答えだったらしい。花のような笑顔が${maru.sex}の顔に咲いた。`,
      );
      await maru.say_and_wait(
        `円周率を小数第七位まで正確にするのに、人類文明は少なくとも二千年かけたわ。`,
      );
      await maru.say_and_wait(`無理数を認識するのに、千年。`);
      await maru.say_and_wait(
        `二元方程式、三角関数、対数、階乗。どれも人類が数千年かけて集団で探り、少しずつ達した学術の成果よ。`,
      );
      await era.printAndWait(
        `ホワイトボード消しで前の絵を消したあと、巨大な水晶人参を描いた。`,
      );
      await maru.say_and_wait(
        `たった八年の学習で、その成果を自在に使えるのは、華麗な成果と言っていい。`,
      );
      await maru.say_and_wait(
        `とても賢くて運もある人は、順位と周囲の称賛を燃料にして、${maru.sex}はもっと速くそれを掴んだ。`,
      );
      await era.printAndWait(
        `デフォルメの小人はドリルですぐ水晶人参を見つけた。`,
      );
      await you.say_and_wait(`長くかかってもわからなかったら、どうする？`);
      await maru.say_and_wait(`それがどうしたの？`);
      await era.printAndWait(` ${maru.name}は瞬きした。`);
      await maru.say_and_wait(
        `${callname}の目標は、この文明の遺産を十分に受け取ること。どれだけかかっても、最終的に学べば大勝ちよ。`,
      );
      await you.say_and_wait(`わからない公式に出会ったら、どう処理する？`);
      await maru.say_and_wait(
        `いちばんいいのは、それに関わる背景知識と歴史を読むこと。その思想の成果が、当時どう歴史から洗い出されたかを遡ること。`,
      );
      await era.printAndWait(
        `ホワイトボードのデフォルメ小人は鉱物知識を調べ、経験豊かな先輩に訊く。`,
      );
      await maru.say_and_wait(
        `そうすれば認知の敷居が下がるだけじゃない。正しい歴史感が、${you.name}が社会への歪んだ想像から得た偽の価値評価を洗い落とす。`,
      );
      await maru.say_and_wait(
        `動力がない根本原因は、いつだって値段を見誤ることだから。`,
      );
      await era.printAndWait(`水晶人参がきらきら輝き始めた。`);
      await maru.say_and_wait(
        `歴史上、大事で貴重なものの周りには、当然巨大な産業と生態が生まれる。`,
      );
      await era.printAndWait(
        `デフォルメの小人たちが女神の祭壇を囲み、水晶人参を載せた。`,
      );
      await maru.say_and_wait(
        `その巨大な産業と生態は、当然それらの知識の値段を担保し、熟知する人に機会と厚い報酬を与える。`,
      );
      await era.printAndWait(
        `物語の最後、三女神がデフォルメ小人に人参の山を贈った。`,
      );
      await maru.say_and_wait(`だから学習は、利益のとても高い収益機会よ。`);
      await you.say_and_wait(`なるほど。ありがとう、${maru.name}先生！`);
      await maru.say_and_wait(
        `あら～${callname}、遠慮しすぎよ。${callname}の助けになれたなら、${maru.elder_sibling_sex_title}がいちばん嬉しい側よ。`,
      );
      await era.printAndWait(
        `${you.name}の助けになれたことを心から喜ぶ ${maru.name}の周りに、虹が浮かんだようだ。`,
      );
      await era.printAndWait(`意味のある一日を過ごした。`);
    };
    f.title = title;
    return f;
  })(),
  find_love: (() => {
    const title = 'マルゼンスキーと黄昏の海辺で日没を見る';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(`ある日、トレーニングのあと.`);
      era.printButton(
        '「よし、今日のトレーニング計画は全部達成した。お疲れさま。」',
        1,
      );
      await maru.say_and_wait(
        `ふふ、風の気配と芝の香りを感じられて、私も気分が上がるわ♪`,
      );
      await era.printAndWait(
        `${maru.name}が体を伸ばす。完璧な体の曲線が${you.name}の脳裏に深く刻まれた.`,
      );
      await maru.say_and_wait(
        `ふう——トレーニングのあとは少し疲れたわ。${
          callname
        }、${maru.elder_sibling_sex_title}と一緒に喫茶店へ行ける？`,
      );
      era.printButton('「もちろん」', 1);
      await era.printAndWait(
        `紳士として（変態ではあるが）成熟した淑女の頼みを断る道理はない。二人は${maru.name}がいちばん好きな喫茶店の近くへ来た.`,
      );
      await era.printAndWait(
        `黄昏の光に剪られた樹陰を歩き、雑草の生えた庭を抜けて二階へ上がって、やっと喫茶店の入口を見つけた.`,
      );
      await era.printAndWait(
        `店主は口数の少ない老人らしい.ブラインドを通る光の下で、さらに佝僂に見える.歳月は取り返しのつかない傷を残したが、その大きな手は以前と同じく器用で力強い.`,
      );
      await era.printAndWait(
        `${maru.name}は慣れた様子で注文し、雑談のあと話題を転じて${you.name}を紹介した.`,
      );
      await era.printAndWait(
        `店主は手元の仕事を止め、${you.name}を細かく見た.${you.name}の体は思わず真っ直ぐなった.`,
      );
      await era.printAndWait(
        `老人はうなずき、${you.name}を認めたように、少し古いがまだきれいなメニューを${you.name}に渡した.`,
      );
      await era.printAndWait(
        `${you.name}が何を頼むか考えていると、${maru.name}が${you.name}に話しかけた.`,
      );
      await maru.say_and_wait(`${callname}、こういう店は初めてでしょう？`);
      await maru.say_and_wait(
        `店主は少し偏屈だけど、人はいいのよ！ 腕前は言うまでもない.ここでフルーツサンデーを味わわないのは惜しいわ♪`,
      );
      era.printButton('「フルーツサンデーを一つください」', 1);
      await era.printAndWait(
        `古い蓄音機が前世紀流行のジャズを流し、黄昏の中で時が交差するような美しい空気を作っている.`,
      );
      era.printButton('「(ここの時間は、他よりゆっくり流れてる気がする)」', 1);
      await maru.say_and_wait(`${callname}、フルーツサンデー、できたわ.`);
      await era.printAndWait(
        `${maru.name}の言葉が${you.name}を現実へ戻した.木の盆の上の精巧なサンデーに、スプーンが二本刺さっている.`,
      );
      era.printButton('（店主がわざとこう置いたのか）', 1);
      await maru.say_and_wait(
        `${callname}、私が${you.name}に食べさせてあげる？`,
      );
      await era.printAndWait(
        `${maru.name}の背に斜めに当たる光が${
          maru.sex
        }の表情を隠す.耳が止まらず揺れるのは、${maru.sex}の内心が静かでない予兆らしい.`,
      );
      await era.printAndWait(`${maru.name}は${you.name}の返事を待っている.`);
      era.printButton('（無言で口を開ける）（賢さ+20）', 1);
      era.printButton('「すまない、まだ仕事が残ってる」（根性+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${maru.name}が一杯のサンデーを${you.name}の口へ運んだ.冷たい感触が一瞬頭を占め、続いて柔らかさと綿密さが来る.`,
        );
        await era.printAndWait(
          `${you.name}が口を開いて褒めようとしたとき、青さと甘さが${you.name}の口に満ちて広がった.`,
        );
        await maru.say_and_wait(`${callname}、味はどう？`);
        era.printButton('「すごく美味しい」', 1);
        await era.input();
        await maru.say_and_wait(`本当！ じゃあ${you.name}も私に食べさせて？`);
        await maru.say_and_wait(`あ～ん`);
        await era.printAndWait(
          `${maru.name}が${you.name}の行動を急かし,両耳がもっと激しく揺れる.`,
        );
        era.printButton('「やるしかない！」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name}は胸の興奮を鎮めようとし、サンデーから大きな一杯をすくい、震える手で${maru.sex}のさくらんぼのような小さな口へ入れた.`,
        );
        await era.printAndWait(
          `${maru.sex}の明るく整った琺瑯質の歯にも、一筋の深い情があるようだ.`,
        );
        await maru.say_and_wait(
          `味、すごくいい⭐ ${callname},次は私が${you.name}に食べさせてあげる♪`,
        );
        await era.printAndWait(
          `口角が少し窪んだ${maru.sex}に、かすかな笑みが宿る.`,
        );
        await era.printAndWait(
          `そのあと${you.name}と${maru.sex}は黙ったまま,${you.name}が一杯、私が一杯と、互いのスプーンのサンデーを食べさせた.`,
        );
        await era.printAndWait(
          `黄昏が運ぶ淡い憂いは、${maru.sex}の姿に薄められたようだ.`,
        );
        await maru.say_and_wait(
          `一緒に海辺へドライブしない？ 愛車も意気込んでるみたい♪`,
        );
        await era.printAndWait(`${maru.sex}は期待の目で${you.name}を見た.`);
        era.printButton('「出発しよう」', 1);
        await era.input();
        await era.printAndWait(`ふふ♪ ${callname}はそう言うと思ってたわ。`);
        await maru.say_and_wait(`じゃあ、今すぐ出発！`);
        await era.printAndWait(
          `黙った店主が食事と飲み物を片付けたあと,${you.name}を細かく見た`,
        );
        await era.printAndWait(
          `しばらくして、${you.name}にうなずいた。認めたようだ。`,
        );
        await maru.say_and_wait(`${callname},出発よ！`);
        await era.printAndWait(
          `${maru.name}が入口でそっと${you.name}を急かす.`,
        );
        await era.printAndWait(
          `${you.name}が財布からウマコインを抜いて払おうとすると,店主は軽く首を振り、脚付きグラスを拭き続けた.`,
        );
        era.printButton('「……ありがとう」', 1);
        await era.input();
        await era.printAndWait(`それから${you.name}が出ようとしたとき`);
        await era.printAndWait(
          `店主:お客様、${you.name}のお嬢さんと、しっかり過ごしてください.`,
        );
        await era.printAndWait(
          `磁性のある厚い声が${you.name}の左から届き,${you.name}は愕然と振り返った.店主は厳粛の中にかすかな笑みを帯びて${you.name}を見ている.`,
        );
        await era.printAndWait(`店主:当店も閉店です.他にご用は？`);
        await era.printAndWait(
          `こうして${you.name}は振り返らずここを出て、${maru.name}のいる入口へ向かった.`,
        );
        await maru.say_and_wait(
          `${callname},どうしてそんなに長いの。${you.name}を連れて出るわ.ここは慣れた案内がないと迷いやすいのよ！`,
        );
        await era.printAndWait(
          `七曲がり八曲がりのあと商店街の雑踏から飛び出したのは、${you.name}には意外だった.ほどなく愛車に乗ると,${you.name}は${maru.name}と雑談を始めた.`,
        );
        await maru.say_and_wait(
          `ふんふん♪ ${maru.elder_sibling_sex_title}のセンス、悪くないでしょう.ママが勧めた店よ！`,
        );
        era.printButton('「あの店主、ずいぶん年を召して見える」', 1);
        await era.input();
        await maru.say_and_wait(
          `この店を三十年やってるから.子どものころから両親とここに来て、コーヒーとデザートを食べてたわ.`,
        );
        await maru.say_and_wait(`店主は厳しく見えるけど、本当はいい人なの！`);
        await era.printAndWait(
          `そう一問一答しながら環山の高速に入ると、車流はだんだん疎らになった`,
        );
        await maru.say_and_wait(
          `こうしてトレーナーと愛車とドライブする感じ、本当に気持ちいいわ.激しいビートに乗ると、気持ちも一気に上がる！`,
        );
        await era.printAndWait(
          `${maru.name}の耳が激しいリズムに合わせて拍を打ち,${you.name}は${maru.sex}のリズムに少しついていけなくなった.`,
        );
        await era.printAndWait(
          `一世紀を経たようにやっと緩んだ激しいリズムのあと、愛車が高速を出ると、${you.name}はやっと息をついた。`,
        );
        await maru.say_and_wait(
          `ふふ♪ 風の気配が顔を撫でる感じ、心が湧き立つわ。愛車も嬉しいみたい♪`,
        );
        await maru.say_and_wait(`……${callname}、${you.name}は大丈夫？`);
        await era.printAndWait(
          `${maru.name}が速度を落とし、${you.name}の魂はやっと三女神のもとから自分の体へ戻った`,
        );
        await maru.say_and_wait(
          `ごめん、トレーナーの状態を考えなかった。${maru.elder_sibling_sex_title}として失策ね.`,
        );
        await era.printAndWait(
          `${maru.name}の両耳が伏せ、後ろめたさと心配の複雑な目が${you.name}へ射る`,
        );
        era.printButton(
          '「そんなことない。風の気配を感じられて、俺も嬉しい」',
          1,
        );
        await era.input();
        await era.printAndWait(
          `${maru.name}の耳はすぐ立ち、車載音響の shoreline に合わせてピクピクと拍を打つ`,
        );
        await maru.say_and_wait(
          `トレーナーは本当に優しい人ね。${maru.elder_sibling_sex_title}も、${you.name}を好きになったのは正しい決断だと思うわ♪`,
        );
        await maru.say_and_wait(
          `ところで、${callname}は毎日こんなに多くの子を担当して、体は大丈夫？`,
        );
        era.printButton('「首を振る」', 1);
        await era.input();
        await maru.say_and_wait(
          `うんうん、それがいちばんいいわ。トレーナーも本当に大変な職業ね.`,
        );
        await maru.say_and_wait(
          `でも子どもたちが少しずつ青臭い殻を脱いで成熟し、自分の夢を追うのを見てると、言い表せない感動と愉悦があるの.`,
        );
        await maru.say_and_wait(
          `トレーナーと${maru.uma_sex_title}の関係は、師匠と弟子みたいなものかもしれませんね.`,
        );
        await maru.say_and_wait(
          `子どもたちが最初のよそよそしさと品定めから親密と信頼へ向かい、三年の目標が終わったあと.`,
        );
        await maru.say_and_wait(
          `師匠であるトレーナーと弟子である${maru.uma_sex_title}はとても深い絆を積み、その絆が力になって奇跡を運び,二人はもっと大きな目標へ進む.`,
        );
        era.printButton(
          `「トレーナーとして、担当の${maru.uma_sex_title}が目標を追う道で順調であることを心から願う」`,
          1,
        );
        await era.input();
        era.printButton('「それ以上一歩進めば、三女神の寵愛だ」', 1);
        await era.input();
        await maru.say_and_wait(
          `ふふ♪ トレーナー、面白い答えをくれたわ。${maru.uma_sex_title}としても、この三年で${callname}ともっと素敵な思い出を積みたい.`,
        );
        await maru.say_and_wait(
          `じゃあこの先もよろしくね,${you.sex_code !== 1 ? 'ト・レ・ー・ナ・ー・ちゃん' : 'ト・レ・ー・ナ・ー・くん'}♪`,
        );
        await era.printAndWait(
          `空は東が太陽に橙赤に染まるが、頭上はまだ深い青だ。太陽と星が交わるそのグラデーションは、何度見ても足りない`,
        );
        await era.printAndWait(`${you.name}は思わずあくびをした.`);
        await maru.say_and_wait(
          `トレーナー、眠いなら助手席で少し寝ていいわ。海辺に着いたら、私と愛車が${you.name}を起こす。`,
        );
        await era.printAndWait(
          `もともと疲れた体は、安心する言葉を聞いて重荷を下ろしたように目を閉じ、微風の柔和な吹きとマルゼンから伝わるかすかな香りを楽しんだ`,
        );
        await era.printAndWait(
          `もともと疲れた体は、安心する言葉を聞いて重荷を下ろしたように目を閉じ、微風の柔和な吹きとマルゼンから伝わるかすかな香りを楽しんだ`,
        );
        era.println();
        era.println();
        era.println();
        await era.printAndWait(`十分後`);
        await maru.say_and_wait(`着いたわよ、${callname}、起きて.`);
        await era.printAndWait(
          `まだ眠い目をこすり、無意識に満足のあくびをし,${you.name}は失神したような感触から急いで戻ろうとした`,
        );
        await era.printAndWait(
          `波が礁に砕かれてささやく飛沫になる.満潮が海の贈り物を運び、ヒトデと貝殻は引き潮に静かに消える.`,
        );
        await era.printAndWait(`月が輝く星たちに囲まれ、高いところへ登る.`);
        await era.printAndWait(`今の海は、波の音の中でより静かだ.`);
        await era.printAndWait(
          `二人は車の扉を閉めて浜へ向かう.海は恋人たちに、自分の優しい一面を見せている.`,
        );
        await era.printAndWait(`静かだね、${callname}もそう思うでしょう。`);
        await maru.say_and_wait(`静かだわ、${callname}もそう思うでしょう。`);
        await era.printAndWait(
          `${maru.name}は足のハイヒールを脱ぎ、裸足で波の中へ向かった.`,
        );
        await maru.say_and_wait(`${callname}も、海水のキスを感じてみて.`);
        await era.printAndWait(
          `${you.name}は${maru.name}の誘いで同じく靴を脱ぎ、ゆっくり波へ向かった`,
        );
        await era.printAndWait(
          `海水が一つ一つの飛沫を巻き,その飛沫は子どもみたいに戯れて岸へ押し寄せ、柔らかい砂浜を細かく撫で、名残惜しそうに退く`,
        );
        await era.printAndWait(
          `永遠の撫での下で,砂浜に銀色の岸が一本一本描かれ,月光の下で海にきらきらの銀枠が嵌められたようだ`,
        );
        await era.printAndWait(`自然がいちばんの画家. `);
        await era.printAndWait(
          `${maru.name}は左手でスカートをつまみ上げ、体は自然に半ば${you.name}へ向く.月光が${
            maru.sex
          }に侵せない聖なる外衣をかけ,波が礁を叩いて上げる水気が朦朧とした誘惑をもたらし,止まない波は少女の内心のうねりを喩えるようだ.`,
        );
        await era.printAndWait(
          `${
            maru.sex
          }自身も気づいていないかもしれない.自然の見えない筆の下で、自分がこの銀の額縁の油彩の主役になった.`,
        );
        await maru.say_and_wait(`月がきれいね、${callname}.`);
        era.printButton('「風も優しいな」', 1);
        await era.input();
        await maru.say_and_wait(`ふふ♪ ${callname}、話が上手ね.`);
        await era.printAndWait(
          `話しているあいだに${you.name}は${maru.name}の腰をそっと抱いた.${
            maru.sex
          }は感電したように一度震えたが、${you.name}の行為に抵抗は見せなかった.`,
        );
        await maru.say_and_wait(
          `${callname}、同意なく淑女を突然抱いたら、どんな罰を受けるか考えた？`,
        );
        await era.printAndWait(
          `その青い瞳には一種の引力がある。${maru.sex}が${you.name}を見つめると、${you.name}の視線は離れにくい。だが圧迫はしない。`,
        );
        await era.printAndWait(
          `変幻する風の妖姫のように,${maru.sex}は空の光線、音、海あるいは陸の匂いだ.`,
        );
        era.printButton('「!?」', 1);
        await era.input();
        await era.printAndWait(`${you.name}の唇に、優しい感触が伝わった.`);
        await maru.say_and_wait(
          `まったく,${
            callname
          }は少しも素直じゃないわ.こういうとき、自分から動かないと焦るのよ.`,
        );
        await era.printAndWait(
          `最初は探るように軽く触れ,のちにリズムが速くなり,最後は深いキスで終わった.${you.name}が息ができなくなるまで、名残惜しそうに離れた.`,
        );
        await era.printAndWait(
          `二人の唇のあいだに銀の糸が伸びた.${
            maru.sex
          }は限りない愛と優しい顔で${you.name}を見た.`,
        );
        await era.printAndWait(
          `${you.name}は無意識に${maru.sex}をきつく抱き,${
            maru.sex
          }も${you.name}の頬をそっと撫でて応えた.`,
        );
        await era.printAndWait(
          `冷たい海水の中で、灯台のような温もりだけが、長く残った.`,
        );
      } else {
        era.printButton('「すまない、まだ仕事が残ってる」', 1);
        await era.input();
        await maru.say_and_wait(
          `あら、なら早く処理してきて。${callname}、ちゃんと働いてこそ最後の報酬よ.`,
        );
        await era.printAndWait(
          `${you.name}は黙ってかばんを取り、振り返らず喫茶店を出た。だがすぐに七曲がり八曲がりの小道で迷った.`,
        );
        await era.printAndWait(
          `最後は親切なおじさんの便乗で、${you.name}は門限前にどうにか寮へ戻った.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  dream: (() => {
    const title = '蕉鹿の夢';
    /**
     * 虚ろで迷離、得失は定まらず、夢のようにぼんやりした状態の喩え。
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.print(
        `目覚めたとき、芝の上に横たわっていた。周りは花畑で、そばの芝から地平線の果てまで続いている。`,
      );
      maru.print(`普段なら、愉悦の気持ちで花畑を歩くかもしれない。`);
      maru.print(`だがなぜか、出口を見つけたい気持ちが優勢を占めた。`);
      await maru.say_and_wait(`でも、どの方向へ出発すればいいの？`);
      era.printButton(`「茨の生えたバラの叢」`, 1);
      era.printButton(`「高い灌木の迷宮」`, 2);
      if ((await era.input()) === 1) {
        maru.print(`私がしたことは、全部あなたを苦しめるため？`);
        maru.print(`茨を払った瞬間、耳元にため息が聞こえた気がした。`);
        maru.print(`前へ進むほど、前方の茨は密になり、払う力が要る。`);
        maru.print(`しかも後ろの道は、いつの間にか塞がれている。`);
        await maru.say_and_wait(`退路はないわ。`);
        maru.print(`体も危機を感じたように、微かに震えている。`);
        maru.print(
          `普通の人間、あるいは少し弱い${maru.uma_sex_title}なら、一筋の陽も見えないこの檻で迷うかもしれない。`,
        );
        maru.print(
          `だんだん腕に力が入らなくなる。汗が肌を伝って地面に落ち、灌木に汲まれる。`,
        );
        maru.print(`だがどこを見ても、出口ではない。`);
        await you.say_as_passer_by_and_wait(`バラたち`, `それでも諦めないの？`);
        maru.print(`灌木の中からひそひそ声が聞こえた。`);
        await maru.say_and_wait(
          `外の世界は想像より豊かで美しいわよ？ こんなところで衣の端を引っかけたら、惜しくない？`,
        );
        await you.say_as_passer_by_and_wait(
          `バラたち`,
          `なるほど、わかったわ。絶境に陥ったから、楽観で向き合うのね。`,
        );
        maru.print(`ひそひそ声がだんだん大きくなる。`);
        await you.say_as_passer_by_and_wait(
          `幻影の声`,
          `もう力がない。あなたはもう力がない。`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影の声`,
          `あなたの呼吸、必死に抑えてるけど、私はもう気づいたわよ？`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影の声`,
          `その急ぎ、その不安、口調とは全然違うわよ？`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影の声`,
          `実際、あなたは想像ほどあのトレーナーを許してないでしょう？`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影の声`,
          `一時は意識で無理に抑えても、疑いの種はもう埋まってるわよ？`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影の声`,
          `だから、許していない必`,
        );
        await maru.say_and_wait(`ああ……わかってるわ。`);
        await maru.say_and_wait(
          `${callname}の裏切りは、確かにとても悲しかった。`,
        );
        await maru.say_and_wait(
          `でも、そんな${callname}でも、私はずっと愛してるわよ？`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影の声`,
          `なぜ？ なぜ？ 愛情なんて、いつか破れる幻覚にすぎない。`,
        );
        await maru.say_and_wait(`愛は、そんな浅いものじゃないわ！`);
        await maru.say_and_wait(
          `恋人のあいだに泡のように散る情熱しかなければ、いつか来る別れに深い恐れを感じて、幸福にはなれない。`,
        );
        await maru.say_and_wait(`その恐れは、いつか幸福の甘さを押し潰す。`);
        await maru.say_and_wait(
          `怖いの。いつか${callname}を失う痛みが、このまま私を押し潰すのが。`,
        );
        await maru.say_and_wait(`でも、私は${callname}を信じてる。`);
        await you.say_as_passer_by_and_wait(`幻影の声`, `もう裏切ったのに？`);
        await maru.say_and_wait(`自分の知恵だけで絶望するわけにはいかないわ？`);
        await maru.say_and_wait(
          `世界中の人間が口を揃えて不可能だと言っても、私は絶望しない。`,
        );
        await maru.say_and_wait(
          `人間は自分の未来を予測できないから、何が起きてもあり得ることよ？`,
        );
        await you.say_as_passer_by_and_wait(
          `幻影の声`,
          `その楽観は自分さえ守れないのに？`,
        );
        await maru.say_and_wait(
          `過去十数年、こうして無事に過ごしてきたでしょう？`,
        );
        await you.say_as_passer_by_and_wait(`幻影の声`, `え？`);
        maru.print(
          `風通しのない茨の壁に一筋の裂け目が出た。機会を掴んだ${maru.name}はそのまま檻を突き抜けた。`,
        );
        maru.print(`その茨の地を離れたあと、全身の力もゆっくり戻ってきた。`);
        await you.say_as_passer_by_and_wait(
          `幻影の声`,
          `……生命は可能性の総和だから？`,
        );
        maru.print(`言葉を思索する幻影は、了解した刹那に散った。`);
      } else {
        era.drawLine();
        maru.print(`どれだけ経ったかわからない。まだ出る気配はない。`);
        maru.print(`左手の法則に従っても、壁を倒しても、最終の結果は同じ。`);
        maru.print(
          `さらに悪いことに、以前の軌跡で出発点に戻ると、そちらも壁の延長になっていた。`,
        );
        await maru.say_and_wait(`ん——少し頭が痛いわね。`);
        maru.print(`一旦、中心と呼べる小さな空き地へ戻るしかない。`);
        maru.print(
          `空き地と呼ぶのは、あそこの強風がとても激しく、その狂風の下では芝が生きられないからだ。`,
        );
        maru.print(`だが奇妙なことに、その強風は人を壁の上へ押す。`);
        maru.print(
          `これまで側面にすばやく滑って、粉々になる末路を避けてきた。`,
        );
        maru.print(`だが、試せる方法はもう全部試した。`);
        await maru.say_and_wait(`可能なものを全部除いたなら、なら。`);
        await era.printAndWait(`${maru.name}はその空き地へ入った。`);
        await era.printAndWait(
          `狂風が咆哮して${maru.sex}をほとんどひっくり返そうとしたが、${
            maru.sex
          }は最終的に足を踏ん張った。`,
        );
        await era.printAndWait(`それから。`);
        await era.printAndWait(`風の力を借りて、それらの壁へ衝いた。`);
        await era.printAndWait(
          `それから壁は、この強い力の前で少しずつ裂けた。`,
        );
        await era.printAndWait(`新しい道が目の前に開いた。`);
      }
      await maru.say_and_wait(
        `途中、困難はたくさんあったけど、全部無事に越えたわ。`,
      );
      await maru.say_and_wait(`この先、何が前方で待ってるのかしら？`);
      await maru.say_and_wait(
        `過去の灰の影を遠く後ろに捨て、花で敷いた絨毯の上を歩く。`,
      );
      await maru.say_and_wait(`……直感が教えてる。`);
      era.printButton(`「目覚めたときの向きへ、走り続ける」`, 1);
      await era.input();
      await maru.say_and_wait(`用意！`);
      maru.print(
        `発走の合図とともに、${maru.name}は自分で定めたゴールへ衝いた。`,
      );
      maru.print(`美しい花が後ろへ飛び退き、だんだん自分の形を保てなくなる。`);
      maru.print(`五彩のリボンのように、だんだん一つに溶け合う。`);
      maru.print(
        `呼吸の妨げもなく、こうして速く、速く、花畑の一部に溶けそうなほど速い。`,
      );
      await maru.say_and_wait(`……なら。`);
      era.printButton(`「このまま一気に加速！」`, 1);
      await era.input();
      await maru.say_and_wait(`${maru.name}の本当の実力を見せてあげる！`);
      await era.printAndWait(
        `耳元にエンジンの轟きが聞こえた。間違いない、愛車の声だ。`,
      );
      maru.print(`愛車が自分の力を貸してくれたみたい。`);
      maru.print(`こうして、これでいいの？`);
      maru.print(`いや、これでいい。`);
      maru.print(`幼いころ初めてカウンタックを見たときの憧れを帯びて。`);
      maru.print(`地平線の彼方、あの輝く光。`);
      maru.print(`ゴールでしょう。もうゴールが見える。`);
      await maru.say_and_wait(`なぜか、少し感傷的ね。`);
      maru.print(`太陽が昇れば、この朦朧とした感触は散る。`);
      maru.print(`これが夢の終わりなのかもしれない。`);
      await maru.say_and_wait(`あら、これじゃ私らしくないわね。`);
      maru.print(
        `世界に散らない宴はない。この甘い思い出は、たぶん永遠に眠る。`,
      );
      maru.print(`現実でも楽しく生きてね？ 約束よ。`);
      maru.print(`おはよう、${maru.name}。`);
      await era.printAndWait(`${maru.name}は目を開けた。`);
      await era.printAndWait(`温かい陽が${maru.sex}の長い髪をそっと撫でる。`);
      await era.printAndWait(`その余韻を味わい、${maru.name}は起き上がった。`);
      await era.printAndWait(`新しい一日が始まった。`);
    };
    f.title = title;
    return f;
  })(),
  fall_heaven: (() => {
    const title = 'GOOD END · 楽園に迷い込んだ旅人';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} taste アキカワヤヨイ
     * @param {CharaTalk} darley ダレアラビア
     * @param {CharaTalk} godolphin ゴドルフィンバルブ
     * @param {CharaTalk} byerley バイアリーターク
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (
      maru,
      taste,
      darley,
      godolphin,
      byerley,
      you,
      callname,
    ) => {
      darley.name = '優しい女神';
      godolphin.name = '叡智の女神';
      byerley.name = '厳粛な女神';
      await era.printAndWait(`平凡な休日。`);
      await era.printAndWait(`皇帝を打ち、きれいに二連勝を取った。`);
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        ' と過ごしたこの三年は、たぶん永遠に忘れられない日々だ。',
      ]);
      await era.printAndWait([' ', maru.get_colored_name(), ' と一旦別れる。']);
      await taste.say_and_wait(`祝！賀！URA優勝！`);
      await era.printAndWait([
        '小柄な理事長が、',
        maru.sex,
        'の半分ほどの高さのトロフィーを運んで ',
        maru.get_colored_name(),
        ' に渡した。',
      ]);
      await maru.say_and_wait(`ありがとうございます！`);
      await era.printAndWait([
        maru.get_colored_name(),
        ' はトロフィーを受け取り、カメラと傍で長く待っていた記者たちの取材に向き合う。',
      ]);
      await maru.say_as_passer_by_and_wait('記者A', [
        maru.actual_name_with_title,
        '、トロフィーを手にした感想は？',
      ]);
      await maru.say_and_wait(
        '普通ならすごく興奮するでしょう？ こんな盛大なレースだもの。',
      );
      await maru.say_and_wait(
        'でも本当に手にした瞬間、胸の底はとても静かだったわ。',
      );
      await maru.say_as_passer_by_and_wait(
        '記者A',
        '画面の前の観客に、詳しく教えていただけますか？',
      );
      await maru.say_and_wait([
        'はい！',
        maru.uma_sex_title,
        'たちが一番を争うために人知れず汗を流し、レース場で懸命に挑む朝気が、『ああ、私はこれのためにレースに出てる』と思わせてくれたの。ふふ～',
      ]);
      await maru.say_as_passer_by_and_wait('記者A', [
        maru.actual_name_with_title,
        ' は',
        maru.uma_sex_title,
        'たちをとても深く理解されていますね。',
      ]);
      await maru.say_and_wait([
        'ええ！ レースの前、出走する',
        maru.uma_sex_title,
        'たちと話すの。それから面白い話をたくさん聞いたわ～',
      ]);
      await maru.say_as_passer_by_and_wait(
        '記者A',
        '画面の前の観客に、教えていただけますか？',
      );
      await maru.say_and_wait([
        'ん、最近の一戦で言うと、ある',
        maru.uma_sex_title,
        'が——',
      ]);
      await maru.say_and_wait([
        '——最後',
        maru.sex,
        'はずっと、自分のトレーナーが石頭だってこぼしてたわ。',
      ]);
      await maru.say_as_passer_by_and_wait(
        '記者A',
        '面白いですね。ありがとうございます。',
      );
      await era.printAndWait(
        '取材の記者が一歩離れる間もなく、別の記者が待ちきれず前へ衝いた。',
      );
      await maru.say_as_passer_by_and_wait('記者B', [
        'すみません、',
        maru.actual_name_with_title,
        ' のこの先の目標は？',
      ]);
      await maru.say_and_wait('ん、ちょっと難しい質問ね——');
      await maru.say_and_wait('トレーナーと相談した結果は、しばらく休戦よ。');
      await maru.say_as_passer_by_and_wait(
        '記者B',
        'たぶん担当トレーナーとハネムーンでしょう。こういうのは何度も見てきた。',
        true,
      );
      await maru.say_as_passer_by_and_wait('記者B', '屈腱炎ですか？');
      await maru.say_and_wait(
        'ええ。決勝の前に一度医者へ行ったわ。軽症だけど、続けて出るには一定のリスクがある。',
      );
      await maru.say_and_wait([
        'トレーナーの',
        you.adult_sex_title,
        'は休めと主張したけど、私は最後までやりたかった……幸い最後はぎりぎり勝てた。本当に ',
        callname,
        ' のおかげね⭐',
      ]);
      await maru.say_as_passer_by_and_wait(
        '記者B',
        [
          callname,
          '？ やっぱり勝った',
          maru.uma_sex_title,
          'は最後、同じ結末だ。',
        ],
        true,
      );
      await maru.say_as_passer_by_and_wait(
        '記者B',
        'トレーナーは裏でとても頑張ったのでしょう。トレーナーについても聞かせていただけますか？',
      );
      await maru.say_and_wait(
        'こんな機会、トレーナー自身に話してもらいましょう！',
      );
      await era.printAndWait([
        '傍で見ていた ',
        you.get_colored_name(),
        ' が ',
        maru.get_colored_name(),
        ' に引っ張られた。',
      ]);
      era.printButton('「え？ 俺か？」', 1);
      await era.input();
      await era.printAndWait([
        '突然興奮した記者の群れと各種の専門撮影機材に向き合い、準備のない ',
        you.get_colored_name(),
        ' は冷や汗を一滴残した。',
      ]);
      await maru.say_and_wait([
        'トレーナーの',
        you.adult_sex_title,
        '、恥ずかしがらず感想も言って！',
      ]);
      era.printButton(
        `とととにかく、トレセンの信頼に感謝します。担当${maru.uma_sex_title}が懸命に合わせて……`,
        1,
      );
      await era.input();
      await maru.say_as_passer_by_and_wait('カメラマン', 'こっちを見て！');
      await era.printAndWait('三年の笑いと涙を両手に、幕が下りた。');
      era.drawLine();
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        ' と一旦別れ、',
        you.get_colored_name(),
        ' はトレーニング室に座っている。',
      ]);
      await era.printAndWait(
        '収蔵室に並ぶトロフィーが錨になり、この三年が夢幻ではなかったことを記している。',
      );
      await era.printAndWait(
        'ただ、突然目標がなくなり、一気に安らいだようだ。',
      );
      await era.printAndWait('頭がぼんやりし、瞼も喧嘩している。');
      await you.say_and_wait([
        maru.get_colored_name(),
        ' が戻るまで、こうして少し眠ろう。',
      ]);
      await era.printAndWait([
        'ちょうどいい理由を見つけ、心安らかに目を閉じた ',
        you.get_colored_name(),
        ' は、こうして眠りに落ちた。',
      ]);
      await era.printAndWait([
        '再び目覚めたとき、',
        you.get_colored_name(),
        ' は限りなく広い草原にいた。',
      ]);
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        ' と談笑しているとき、',
        maru.sex,
        'は半ば冗談に「エデンへ行ったわよ」と言った。',
      ]);
      await era.printAndWait([
        'この、人界に絶対存在しない美景から見ると、',
        maru.sex,
        'の言葉はおそらく本当だ。',
      ]);
      await you.say_and_wait('この先、どの方向へ行く？');
      await era.printAndWait([
        'それから、急いで解決すべき問題がある。',
        you.get_colored_name(),
        ' は',
        maru.uma_sex_title,
        'ではない。',
      ]);
      await era.printAndWait([
        maru.get_colored_name(),
        ' の方法は、ほとんど役に立たない。',
      ]);
      await era.printAndWait([
        maru.get_colored_name(),
        ' はもうすぐ戻る。残された選択の時間は少ない。',
      ]);
      await you.say_and_wait('出発するしかない。');
      await era.printAndWait(
        '迷うほど状況は悪化するだけだ。選択しないより、選択したほうがいい。',
      );
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        ' が言った曖昧な方向を思い出し、',
        you.get_colored_name(),
        ' はそちらへ出発した。',
      ]);
      era.println();
      await era.printAndWait([
        'どれだけ歩いたかわからない。時間もこの旅の中で曖昧になった。幸いここは飢えも渇きも感じず、',
        you.get_colored_name(),
        ' の内心は少し慰む。',
      ]);
      await era.printAndWait('変わらない草原。永遠に着けない彼方のようだ。');
      await era.printAndWait([
        maru.get_colored_name(),
        ' が言ったあの金色の草原……',
      ]);
      await you.say_and_wait('本当にあるのか？');
      await era.printAndWait('あの美しい世界。');
      await maru.say_as_unknown_and_wait([maru.sex, 'は、あそこにいるわよ？']);
      await you.say_and_wait([maru.get_colored_name(), '！？']);
      await era.printAndWait([
        'すぐ先のあの人は、紛れもなく ',
        maru.get_colored_name(),
        '！',
      ]);
      await you.say_and_wait('ここにいたのか！！');
      await era.printAndWait([
        '喜びの中、',
        you.get_colored_name(),
        ' はその幻影へ飛びかかった。',
      ]);
      await you.say_and_wait('え？');
      await era.printAndWait(['抱擁の両腕は', maru.sex, 'の体を通り抜けた。']);
      await maru.say_and_wait('……');
      await era.printAndWait('幻影は一言もなく、どこかへ歩き出す。');
      await you.say_and_wait('？');
      await era.printAndWait(
        '最初はゆっくり歩き、それから速度が上がり、最後はいっそ走り始めた。',
      );
      await you.say_and_wait('待ってくれ！');
      await era.printAndWait([
        '生まれた目的は ',
        you.get_colored_name(),
        ' を導くことらしい。走れなくなって座って息を整えると、すぐ先で動かない。',
      ]);
      await era.printAndWait([
        '全力で走るとき、永遠にあと少しで',
        maru.sex,
        'に届かない。',
      ]);
      await era.printAndWait([
        'どうすれば？ どうすればまた',
        maru.sex,
        'に触れる？',
      ]);
      await era.printAndWait(['悔しい。', maru.sex, 'に追いつきたい。']);
      await era.printAndWait([
        maru.sex,
        'を超えたい。',
        maru.sex,
        'の知る世界を見たい。',
      ]);
      await you.say_and_wait(
        'きっときれいなんだ！ でなければ、こうまで執着して進まない。',
      );
      await you.say_and_wait('持ちたい。占めたい。あの美しい世界を見たい。');
      await era.printAndWait(
        'かすかに、自分をずっと縛っていた桎梏に触れた気がする。',
      );
      await era.printAndWait(
        'このまま走り続ければ、生きたまま疲れ死ぬかもしれない。',
      );
      await you.say_and_wait('長く考えた。契約の日から、URAが終わる瞬間まで。');
      await you.say_and_wait('本当に欲しいのは、実は美の一瞬だ。');
      await you.say_and_wait(
        '一瞬、感触が最高潮に達するその時。俺はその一刻のために今まで生きてきた。',
      );
      await you.say_and_wait(
        '今この瞬間こそ、三女神がくれた唯一の機会じゃないか？',
      );
      await you.say_and_wait('なら、答えは最初から決まっている。');
      await era.printAndWait([
        '体が上げる悲鳴を構わず、',
        you.get_colored_name(),
        ' は再び前へ加速した。',
      ]);
      await era.printAndWait(
        '……前方のあの曙光と、遥かに届かない夢幻の距離を保った。',
      );
      await era.printAndWait([
        '人間と',
        maru.uma_sex_title,
        'のあいだ、越え難い崖。',
      ]);
      await you.say_and_wait('うわああああ！', true);
      await era.printAndWait('全身の最後の力を絞り、懸命に跳んだ。');
      await era.printAndWait(
        '幻影でさえ、この最後の一押しは予想していなかったらしく、反応する暇もない。',
      );
      await era.printAndWait([
        '最終的に、',
        you.get_colored_name(),
        '  はその姿に触れた。',
      ]);
      await you.say_and_wait('できた！', true);
      await era.printAndWait('それから、かすかな感触はすぐ消えた。');
      await era.printAndWait([
        '最後の力を使い切った  ',
        you.get_colored_name(),
        'は、すぐ先で立ち止まった幻影を見るしかない。',
      ]);
      await you.say_and_wait(
        [maru.get_colored_name(), '、やっと君の感触がわかった！'],
        true,
      );
      await era.printAndWait(
        '極限の運動の下、突然転んだ。骨折しているだろう。',
      );
      await era.printAndWait(
        '激しい呼吸の下、肺は小刀で肉を少しずつ削るような痛みだ。',
      );
      await era.printAndWait([
        '巨大な代価の下で、',
        you.get_colored_name(),
        ' は何を得た？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の内心はその美に占領され、涙が制御できず流れ落ちる。',
      ]);
      await you.say_and_wait('死ぬのか？', true);
      await era.printAndWait([
        '幻影は以前のように目標へ歩かず、かえって ',
        you.get_colored_name(),
        ' のほうへ歩いてきた。',
      ]);
      await era.printAndWait([
        '凋む者へ臨終の介護を与えるように、そっと ',
        you.get_colored_name(),
        ' を膝のあいだに置いた。',
      ]);
      await you.say_and_wait([maru.get_colored_name(), '。'], true);
      await era.printAndWait(
        '落木は根に還る。見る人は思う人ではない。心の湖は初春、風に舞う最初の花弁に覆われ、すべての喧騒は静寂に帰す。',
      );
      await you.say_and_wait('これは、君に会うために捧げた贈り物だ。', true);
      await you.say_and_wait('俺は……もう逃げない。', true);
      await era.printAndWait('絶えず湧く涙が視界を曇らせる。');
      await you.say_and_wait('君は……もう永遠に孤独じゃない。', true);
      await era.printAndWait([
        '最後の画面は、',
        maru.get_colored_name(),
        ' が見たあの海に定格した。',
      ]);
      await era.printAndWait(
        '鏡面のように静かな海が、過ぎた雲煙を映している。',
      );
      era.drawLine();
      await you.say_and_wait('ここは？');
      await era.printAndWait('再び目覚めたとき、目の前は金色の草原だった。');
      await era.printAndWait([
        'まさに ',
        maru.get_colored_name(),
        ' が口にした、すべての人間の揺りかご。',
      ]);
      await godolphin.say_and_wait('もう泣く必要はない。');
      await godolphin.say_and_wait('この楽園に、悲しみはもう存在しない。');
      await era.printAndWait([
        '包容を象徴する女神ゴドルフィンバルブが、慈愛の顔で ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      await godolphin.say_and_wait(
        'お前はすでに、自分の勇気を我々に証明した。',
      );
      await godolphin.say_and_wait(
        '再び会うまで、自分の考えに従い、この道を歩き切れ。',
      );
      await era.printAndWait([
        '勇気を象徴する女神ダレアラビアが、期待の目で ',
        you.get_colored_name(),
        ' を励ました。',
      ]);
      await darley.say_and_wait([
        '人間の身で、全力を尽くしてやっと',
        maru.uma_sex_title,
        'の縁に触れた。',
      ]);
      await darley.say_and_wait(
        '強大という言葉は、お前と縁がない。これまで、臆病者のように嘘で編んだ紙の城に潜り、城が破れないと妄想していた。',
      );
      await darley.say_and_wait(
        '……だが最後の瀬戸際で、お前は我々に深く懺悔した。もう逃げず、全力の最後の一押しこそ、懺悔の証明だ。',
      );
      await era.printAndWait([
        '力と強大を象徴する女神バイアリータークが、ため息の顔で ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      era.printButton('「三女神さま！？」', 1);
      await era.input();
      await byerley.say_and_wait(
        '見てのとおり、我々がこのエデンを創り、守る女神だ。',
      );
      await byerley.say_and_wait([
        '臨終に来る普通人は数え切れない。',
        maru.uma_sex_title,
        'でなく生きた身で来た者は、おそらくお前一人だ。',
      ]);
      await darley.say_and_wait('願いはあるか？');
      await darley.say_and_wait(
        '人類社会の運行に影響しない限り、我々は満たせる。',
      );
      await era.printAndWait('願いか？');
      await era.printAndWait(
        'ここまでの険しさを細かく味わい、最後に出た答えは',
      );
      era.printButton(`「現実世界へ戻し、${maru.name} のそばへ」`, 1);
      await era.input();
      await byerley.say_and_wait(
        '願いをかけた瞬間、お前は人類社会へ戻る。それとも、願いがそれか？',
      );
      era.printButton(
        `「尊敬する女神さま、見てのとおり、それが私の願いです。」`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        '私が追う美は、普通人の基準では良くも悪くもない運の下、大きな代価を払ったあとにしか咲かない花だ。',
      );
      await you.say_and_wait(
        '喩えるなら、汗と時間で美術展の抽選券を一枚換えたようなものだ。',
      );
      await you.say_and_wait(
        'この美術展に入るには、その美術展の切符を引かなければならない。',
      );
      await you.say_and_wait(
        'だがどんな願いも、自分の運が良くなることを願うことさえ、私が追う美を大きく割り引く。',
      );
      await you.say_and_wait(
        '願った結果、かえって目標から遠ざかる。空虚の産物にすぎない。',
      );
      await darley.say_and_wait('……心が決まったなら、送らせてくれ。');
      await godolphin.say_and_wait(
        'かわいい子。一生を経たあと、再びここに来るとき、安息を得られますように。',
      );
      await byerley.say_and_wait(
        '……鼠は弱い。脆いのは体だけだ。弱い体に宿る勇気は、肉体に限られず、心を動かされるに値する。',
      );
      await byerley.say_and_wait('おそらく、私はお前を小さく見ていた。');
      await era.printAndWait([
        you.get_colored_name(),
        ' の体がだんだん地面を離れ、三女神の見送りの下、高く、速く、意識が途切れる瞬間まで、あの金色の草原。',
      ]);
      await era.printAndWait([
        '……そして、幻影である',
        maru.sex,
        'が ',
        you.get_colored_name(),
        ' に手を振って別れた。',
      ]);
      era.drawLine();
      await maru.say_and_wait([callname, '？']);
      await era.printAndWait(
        '長く経ったようでもあり、あまり経っていないようでもある。',
      );
      await era.printAndWait([
        ' ',
        maru.get_colored_name(),
        ' の目には、自分が疲れすぎて眠りに落ちたように見えたらしい。',
      ]);
      era.printButton(`「ただいま、${maru.name}。」`, 1);
      await era.input();
      await era.printAndWait([
        '夢の幻影のように、',
        maru.get_colored_name(),
        ' は笑顔を見せた。',
      ]);
      await maru.say_and_wait('おかえり。');
    };
    f.title = title;
    return f;
  })(),
  async fall_heaven_end() {
    await era.printAndWait(`Thank you for your playing!`);
  },
  gentle_wind: (() => {
    const title = 'TRUE END 優しい風が世界を吹く';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `${maru.name}と忘れ難い三年を経たあと、URAのトロフィーを取った`,
      );
      await era.printAndWait(`この先挑むのは、まったく新しい輝きシリーズだ`);
      await era.printAndWait(`だがその前に。`);
      await you.say_and_wait(`この先は${maru.name}に会いに行くのか？`);
      await you.say_and_wait(`少し緊張するな。`);
      era.drawLine({ content: '屋上' });
      await era.printAndWait(`屋上の扉を引いた。`);
      await you.say_and_wait(`${maru.name}はいない？`);
      await era.printAndWait(`一陣の微風が過ぎる以外、屋上に人影はない。`);
      await maru.say_and_wait(`誰だと思う？`);
      await era.printAndWait(
        `${you.name}の視界が両手で覆われた。見慣れた匂いですぐ来者の身分がわかった。`,
      );
      await you.say_and_wait(`${maru.name}`);
      await era.printAndWait(
        `興奮して大声を出すと思っていたが、今の声は自分でも疑うほど平稳だ。`,
      );
      await maru.say_and_wait(`さすが${callname}ね。すぐに私が誰か当てたわ。`);
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}、こんなに誰かを好きになったことないわ♪`,
      );
      await maru.say_and_wait(`これが愛ってこと？♪`);
      era.printButton(`「${maru.name}、${you.name}に話がある。だから」`, 1);
      await era.input();
      await maru.say_and_wait(
        `ふんふん～、${callname}は${maru.elder_sibling_sex_title}に甘えたいの？`,
      );
      await maru.say_and_wait(`どんな悪でも……`);
      era.printButton(`「永遠に一緒に生きてくれ」`, 1);
      await era.input();
      await era.printAndWait(
        `${maru.name}の信じられない顔の中で、${
          you.name
        }は誓いの指輪を${maru.sex}に渡した。`,
      );
      era.printButton(
        `「理想より、競走より、本当に気にかけてるのは${you.name}だ」`,
        1,
      );
      await era.input();
      era.printButton(`「だから、俺の愛を受けてくれ」`, 1);
      await era.input();
      await maru.say_and_wait(
        `これでは、同じ愛で応えないと、三女神に会わせる顔がないわ。`,
      );
      await maru.say_and_wait(
        `${callname}、競走だけじゃない。これからの生活も、よろしくね。`,
      );
      era.printButton(`「こっちも、これからもよろしく」`, 1);
      await era.input();

      await era.printAndWait(
        `誓いのキスはどんな味？ 塩？ それとも一筋の甘さ？ 今は、目の前の心酔する${maru.teen_sex_title}のほうが大事だ。`,
      );
      await era.printAndWait(
        `${you.name}と${maru.name}の運命は、錯綜の末、やっと贈りものを得た。`,
      );
      await era.printAndWait(
        `${maru.name}の走りは、${maru.uma_sex_title}たちに勇気と希望を与えた。`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}たちはこの先も、${
          maru.name
        }の背中を追って${maru.sex}を超えるだろう。`,
      );
      await maru.say_and_wait(
        `勝つことより、もっと多くの${maru.uma_sex_title}に希望の存在を感じさせるのが、私の理想よ♪`,
      );
      await maru.say_and_wait(
        `これからの日々、芝の一端で黙って${maru.uma_sex_title}たちを見守り、${
          maru.couple_title
        }をエデンへ導くのが、私の新しい使命よ。`,
      );
      await maru.say_and_wait(
        `でも今は、${
          callname
        }と甘く一緒に生きることが、いちばん幸福な TRUE END ね♪`,
      );
      await era.printAndWait(
        `迷いの時期の ${maru.name} を導いた ${
          you.name
        } と、迷う${maru.uma_sex_title}を導く ${
          maru.name
        } は、最終的に優しい風となり、${maru.uma_sex_title}の世界を吹く。`,
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async gentle_wind_end(maru, callname) {
    await era.printAndWait(
      `こうして、二人の物語は一旦結末を迎えた。めでたしめでたし。`,
    );
    await era.printAndWait(`ヒントを見ますか？`);
    era.printButton(`はい`, 1);
    era.printButton(`いいえ`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `GOOD END を達成するには、生涯レースを全部勝つ必要がある。`,
      );
      await era.printAndWait(`祝日関連の選択肢は結末に影響しない。`);
      await era.printAndWait(
        `物語関連は二年目の選択肢に注意。セーブは二年目1月第三週から検討できる。イベント名：春と冬の境。`,
      );
      await era.printAndWait(
        `GE条件を満たしたあと、クリスマスイベント後にチーム一覧を空にして${maru.name}を選び直すと、特殊な台詞が出る。`,
      );
      await era.printAndWait(
        `また、三年目第一週は、先に新年参拝を選んでから神社へ行くと、口上の総合収益が高い。`,
      );
      await era.printAndWait(`最後に、早くGEを達成できますように。`);
    } else {
      await maru.say_as_unknown_and_wait(
        `自分で探したいの？ 攻略の神の素質があるわね。${callname}、頑張って！`,
      );
    }
  },
  ne_happiness_day: (() => {
    const title = 'NORMAL END · 淡い毎日';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(
        `このあと何が起きたかはわからない。だが${maru.name}は、特に変わっていない。`,
      );
      await era.printAndWait(
        `そのあと、定めた計画どおり、一歩ずつ着実に終わった。`,
      );
      await era.printAndWait(`ほどなく——`);
      await era.printAndWait(`空港`);
      era.println();
      await maru.say_and_wait(`${you.actual_name}、ここまででいいわ。`);
      await you.say_and_wait(`パリに着いたら、メッセージをくれよ？`);
      await maru.say_and_wait(
        `ふふ～、もちろん。二か月の旅だけど、やっとエッフェル塔を見に行けるわ。`,
      );
      await maru.say_and_wait(
        `${you.actual_name}も、私がいないあいだに他のウマ娘に手を出すんじゃないわよ？`,
      );
      await you.say_and_wait(`あははは`);
      await maru.say_and_wait(`この人`);
      await era.printAndWait(`人差し指で、きつく一つ叩かれた。`);
      await you.say_and_wait(`痛い！`);
      await maru.say_and_wait(`自業自得——本当に心配のいらない人ね。`);
      await maru.say_and_wait(`じゃあ、出発するわ。`);
      await you.say_and_wait(`いってらっしゃい！`);
      await maru.say_and_wait(
        `${you.actual_name}も、帰るとき道中お気をつけて！`,
      );
      await era.printAndWait(`なぜか、${maru.name}は寂しい顔を見せた。`);
      await maru.say_and_wait(`${you.actual_name}……ううん、なんでもない。`);
      await maru.say_and_wait(`そろそろ出発ね。`);
      await era.printAndWait(`${maru.name}の姿が人混みの中に消えるのを見た。`);
      era.drawLine();
      await era.printAndWait(
        `三年、支え合った担当として、互いに好感はある。だが一歩近づけなかった。`,
      );
      await era.printAndWait(`何が足りなかったのか？`);
      await era.printAndWait(
        `だが、こうして穏やかに終わるのも、一種の幸福だろう。`,
      );
      await you.say_and_wait(`今日はいい天気だな。`, true);
      await era.printAndWait(
        `${you.name} は目を細め、飛行機が空の薄い雲を裂き、白い細い線を残すのを見た。`,
      );
      await era.printAndWait(
        `いつか、${you.name} もこんな天気の下で ${maru.name} が屋上の欄干に寄り、目を細めてそっと歌を口ずさむ姿を見た。その歌声が漂う先へ。`,
      );
      await era.printAndWait(`あれが飛行機雲だろう、と心で思った。`);
      await era.printAndWait(`今日も、こうして無事に過ぎた。`);
      await era.printAndWait(
        `${maru.name}も、毎日こうして無病無災で過ごせますように。`,
      );
      await era.printAndWait(
        `そういえば、新しいウマ娘の入学も近い。早く新しい原石を掘り起こさないと。`,
      );
      await era.printAndWait(
        `——あの憂鬱な日々でも、${maru.name}は一度も諦めなかったように。`,
      );
      await era.printAndWait(
        `もう二度と戻らない。最後に彼女が進んだ方向を一目見て、それから振り返らず去った。`,
      );
    };
    f.title = title;
    return f;
  })(),
  girls_dream: (() => {
    const title = 'NORMAL END · 夢の未来';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      await era.printAndWait(
        `三年、${you.name}と${maru.name}は同じ目標へ走り、そのあとのURAで優勝した。`,
      );
      await era.printAndWait(`そのあと————`);
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}A`,
        `${maru.name}${
          maru.sex_code !== 1 ? '先輩' : '先輩'
        }、今回のGIII、${you.name}が教えてくれた方法で本当に勝てました！`,
      );
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}B`,
        `そんな解決もあるんですか？ さすがマルゼン${
          maru.sex_code !== 1 ? '先輩' : '先輩'
        }`,
      );
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}C`,
        `マルゼン${
          maru.sex_code !== 1 ? '先輩' : '先輩'
        }のコツのおかげで、今はトレーナーの${you.adult_sex_title}ともうまくやってます。`,
      );
      await maru.say_and_wait(`後輩たちの助けになれて、よかった！`);
      await era.printAndWait(
        `今日の${maru.name}も、後輩たちに助言を与えている。`,
      );
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}A`,
        `${maru.name}${
          maru.sex_code !== 1 ? '先輩' : '先輩'
        }のトレーナーの${you.adult_sex_title}が来た！`,
      );
      await era.printAndWait(
        `${maru.uma_sex_title}たちに囲まれた${
          maru.name
        }が${you.name}の存在に気づいた。`,
      );
      await maru.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `${maru.name}は豊かな胸をまるごと${you.name}の肩に預けた。`,
      );
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}B`,
        `うわ、これは？`,
      );
      await maru.say_as_passer_by_and_wait(
        `通行人${maru.uma_sex_title}C`,
        `マルゼン${maru.sex_code !== 1 ? '先輩' : '先輩'}と${
          maru.sex
        }のトレーナー、今日もすごく仲いいですね。`,
      );
      era.printButton(`「遅くなってごめん」`, 1);
      await era.input();
      await maru.say_and_wait(
        `うんうん、もう二時間も${
          callname
        }を見てないの。${maru.elder_sibling_sex_title}、本当に寂しいわ～`,
      );
      await maru.say_and_wait(
        `埋め合わせに、今日の午後は一緒にデートしましょう♪`,
      );
      era.printButton(
        `「実は俺も、ず～っと${maru.name}を見てなくて不安だった」`,
        1,
      );
      await era.input();
      await maru.say_and_wait(
        `${callname}は、やっぱりずっと私を想ってるのね。じゃあ定番の——`,
      );
      await era.printAndWait(`二人はトレーニング場できつく抱き合った。`);
      await maru.say_and_wait(`やっぱり、${callname}がいちばん好きよ⭐`);
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async girls_dream_end(maru, callname) {
    await era.printAndWait(`ヒントを見ますか？`);
    era.printButton(`はい`, 1);
    era.printButton(`いいえ`, 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `GOOD END を達成するには、生涯レースを全部勝つ必要がある。`,
      );
      await era.printAndWait(`祝日関連の選択肢は結末に影響しない。`);
      await era.printAndWait(
        `物語関連は二年目の選択肢に注意。セーブは二年目1月第三週から検討できる。イベント名：春と冬の境。`,
      );
      await era.printAndWait(
        `TE/GE条件を満たしたあと、クリスマスイベント後にチーム一覧を空にして${maru.name}を選び直すと、特殊な台詞が出る。`,
      );
      await era.printAndWait(
        `また、三年目第一週は、先に新年参拝を選んでから神社へ行くと、総合収益が高い。`,
      );
      await era.printAndWait(`最後に、早くGEを達成できますように。`);
    } else {
      await maru.say_as_unknown_and_wait(
        `自分で探したいの？ 攻略の神の素質があるわね。${callname}、頑張って！`,
      );
    }
  },
  be_Self_contempt: (() => {
    const title = 'BAD END · 木旺じて土潰ゆ';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (maru, you) => {
      await era.printAndWait(`トレーニング室`);
      era.println();
      await maru.say_and_wait(`${you.actual_name}、先に帰るわ。また明日！`);
      await era.printAndWait(`${maru.name} はトレーニング室を出た。`);
      await era.printAndWait(
        `空は昏い。昨日と変わらない平日。黄昏と夜の境が示す青い光線がトレーニング室に射す。`,
      );
      await era.printAndWait(
        `${you.name} はぼんやりと、トレーニング室の見慣れた席に座っている。`,
      );
      await era.printAndWait(
        `追加トレーニングのためでも、計画を立てるためでもない。`,
      );
      await you.say_and_wait(`たぶん、ここで退いたほうがいい。`);
      await era.printAndWait(
        `${maru.name}の能力が足りないからではない。反対に、彼女はすべての計画を見事に終え、実際の経験から逆にこちらへ助言さえした。`,
      );
      await era.printAndWait(`本当の問題は`);
      era.println();
      await you.say_and_wait(
        `${maru.name}という質量の極めて高い原石は、もっと良い彫琢の匠が磨くべきだ。`,
      );
      await you.say_and_wait(`俺の能力が足りない。それだけだ。`);
      await you.say_and_wait(
        `${maru.name}のためにも、これ以上装ってはいけない。機会を見て正直に話さないと。`,
        true,
      );
      await era.printAndWait(
        `海辺で撮った${maru.name}との写真を優しく撫でてから、二つに裂き、破片を重ねて、また二つに裂いた。`,
      );
      await you.say_and_wait(
        `いちばんいい原石は、いちばんいい工匠が磨く。俺は正しいことをしている。`,
      );
      await era.printAndWait(
        `無表情のまま、もう分けられないところまで裂いた。`,
      );
      await era.printAndWait(
        `慎重に、丁寧に、微小な破片ひとつ掌から逃げないように。`,
      );
      await era.printAndWait(
        `窓を開け、反応する時間を自分に与えず、手の破片を空へ強く投げた。`,
      );
      await era.printAndWait(
        `空へ飛ぼうとした余燼が、最後は仕方なく大地へ墜ちるのを見て、心もそれに従った。`,
      );
      await you.say_and_wait(
        `そろそろ${maru.name}にすべてを話さないと。`,
        true,
      );
      await era.printAndWait(
        `トレーニング室を出た。涙と汗を流したこの場所を。`,
      );
      await era.printAndWait(`それから扉を強く閉じた。`);
      era.setToBottom();
      await era.printAndWait(`——事務机に貼った一枚の付箋`);
      await era.printAndWait(
        `担当${maru.uma_sex_title} ${maru.name} と屋上で会う。`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `メイクデビューのあと、${maru.name} と予約した店で祝う。`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `皐月賞のあと、${maru.name} に運転と料理を教わる（注：${maru.name} の料理はすごく美味しい！）。`,
      );
      await era.printAndWait(`……`);
      await era.printAndWait(
        `ずっと一緒にいてくれてありがとう。圧力に耐えられなかった。ごめん。`,
      );
      await era.printAndWait(`ほどなく、一方的に理事長へ辞職願を出した。`);
      await era.printAndWait(
        `それから、栄養を失ったその土に、新しい芽はもう頭を出さない。`,
      );
    };
    f.title = title;
    return f;
  })(),
  be_broken_tears: (() => {
    const title = 'BAD END · マルゼンスキーの手紙';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      maru.say(
        ` ${callname}、この手紙を見るころ、私はパリへ向かう便に乗っているでしょう。`,
      );
      maru.say(`断りもなく去ったことを、許して。`);
      maru.say(
        `率直に言えば、${callname}と出会った日々は、毎日とても幸福だった。`,
      );
      maru.say(`だから、${callname}を責めるつもりはない。`);
      maru.say(`ただ、この先の道にどう向き合えばいいか、わからないの。`);
      maru.say(
        `理事長に三か月の休学を申請したわ。この期間、フランスで旅をして気持ちを切り替えようと思う。`,
      );
      maru.say(
        `このあいだに、${callname}と後輩たちへの向き合い方がわかるかもしれない♪`,
      );
      maru.say(
        `……${callname}が思うとおり、私は尻尾を巻いて逃げる、臆病なウマ娘にすぎない。`,
      );
      maru.say(`……考えても考えても、たぶんこの道しかないのね。`);
      maru.say(
        `こっちの後輩たちを置いていくのは、内心多少の罪の意識がある……ううん、あの子たちは自分の努力で私を超える！`,
      );
      maru.say(
        `心から信じてる。あの子たちはもっと勇敢に、もっと懸命に、もっと高い頂へ走る。`,
      );
      maru.say(
        `あ、少し消極的すぎたわね。これじゃ${
          maru.elder_sibling_sex_title
        }さまらしくない。`,
      );
      maru.say(`フランスに着いたら、こっちの風土を写真と動画で送るわ。`);
      maru.say(
        `そのときは以前と同じ、${callname}にウマッターへ上げてもらうね？`,
      );
      maru.say(`後輩たちもびっくりするでしょう！`);
      await maru.print_and_wait(`そう決めましょう！`);
      era.setToBottom();
      maru.say(`ごめんね。`);
      await era.printAndWait(
        `手紙の最後の一行は涙に濡れ、四方へ広がる筆跡がぼやけている。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(
        `だが ${maru.name} はもう戻らない。${you.name} の心は、誰よりはっきりしている。`,
      );
      await era.printAndWait(`どうしようもない。`);
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = '雨の日（別れ）';
    /**
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (maru, you, callname) => {
      //節拍1 行動：マルゼンスキーが到着を告げる 反応：プレイヤーのスーツケースを受け取る 価値負荷正または負？親密/孤独(-)
      await era.printAndWait(`空港`);
      await maru.say_and_wait(`ここまででいいわ。`);
      await era.printAndWait(
        `${maru.name} は ${you.name} がきつく握るスーツケースを受け取った。`,
      );
      //節拍2 行動：プレイヤーがマルゼンスキーの出発を名残惜しむ 反応：マルゼンスキーがトレーナーを慰める 親密/孤独(-)
      await you.say_and_wait(`パリに着いたら、メッセージをくれ。`);
      await maru.say_and_wait(
        `そんなに心配しなくていいわ⭐ パリへしばらく旅するだけよ。`,
      );
      //節拍3 行動：マルゼンスキーが頭を撫でる 反応：プレイヤーが失うことを恐れる 失/得(-)
      await era.printAndWait(
        `${maru.name} は笑って ${you.name} の頭を撫でた。`,
      );
      await era.printAndWait(
        `いつより優しい撫でなのに、${you.name} は恐れを感じた。`,
      );
      await you.say_and_wait(`道中気をつけて……どうしても口に出せない`, true);
      //節拍4 行動：マルゼンスキーがトレーナーを励ます 反応：プレイヤーは笑ってその励ましを受け入れる 失/得(+)
      await maru.say_and_wait(`異国にいても、私たちの絆は切れないわ。`);
      await maru.say_and_wait(
        `だから、勇敢になって。いちばん好きな ${callname}。`,
      );
      await you.say_and_wait(`……ああ、この温もりが胸の中で湧くのがわかる。`);
      //節拍5 行動：マルゼンスキーが出発しようとする 反応：プレイヤーはマルゼンスキーを見送る 失/得(-)
      await you.say_and_wait(`じゃあ、出発だ——`);
      await maru.say_and_wait(`——そうね、今は別れのときよ。`);
      await era.printAndWait(`きつく握った両手は離れた。`);
      await era.printAndWait(
        `${you.name} は ${maru.name} がスーツケースを提げて出ようとするのを見た。`,
      );
      //節拍5 行動：プレイヤーがマルゼンスキーをきつく抱く 反応：マルゼンスキーは抜け出そうとする 親密/孤独(--)
      await you.say_and_wait(`${maru.name}！`);
      await era.printAndWait(`${you.name} は行動を取った。`);
      await maru.say_and_wait(`！`);
      await era.printAndWait(
        `${you.name} は${
          maru.sex
        }をきつく抱いた。周囲の旅客は足を止め、あなたたちを見ている。`,
      );
      await maru.say_and_wait(`${you.actual_name}、離して。`);
      await era.printAndWait(`聞いたことのない ${maru.name} の焦った声。`);
      //節拍6 行動：プレイヤーが追撃する 反応：マルゼンスキーは黙って涙を流す 失/得(-)
      await you.say_and_wait(
        `これでいい。もう一度、君の温度を感じさせてくれ。`,
      );
      await you.say_and_wait(`まだ自分を説得できない。`);
      await you.say_and_wait(
        `あの風、あの優しい風が、目の前で消えようとしている。`,
      );
      await maru.say_and_wait(`——${callname}`);
      await era.printAndWait(`悲しみを必死に抑える${maru.teen_sex_title}。`);
      //節拍7 行動：マルゼンスキーが逆にプレイヤーをきつく抱く 反応：プレイヤーはマルゼンスキーの孤独を感じる 失/得(++)
      await era.printAndWait(`それから————`);
      await you.say_and_wait(`${maru.name}`, true);
      await era.printAndWait(`${you.name} をきつく抱いた`);
      await maru.say_and_wait(`私も怖い。${callname}を失うのが`);
      await maru.say_and_wait(`痛みも、悲しみも、もう一人で背負いたくない。`);
      await maru.say_and_wait(`一緒に、風が吹くのを感じ、朝の到来を感じたい`);
      await maru.say_and_wait(
        `ねえ、${callname}、このまま一緒に出ましょう。この悲しい場所を。`,
      );
      //節拍7 行動：プレイヤーが堅く拒む 反応:より大きな悲しみ 親密/孤独(---)
      await you.say_and_wait(`ごめん`);
      await era.printAndWait(`${you.name} の心は血を滴らせている`);
      await you.say_and_wait(`犯した罪は、今ここで償う。`);
      await era.printAndWait(
        `悲しみで歪む ${maru.name} の顔を直視し、続けた。`,
      );
      await you.say_and_wait(
        `このまま逃げたら、トレーナーとしての俺はもう死んでいる。`,
      );
      await you.say_and_wait(
        `トレーナーという身分を失えば、トレーナーとして${maru.uma_sex_title}を育てる理想も存在しなくなる。`,
      );
      await you.say_and_wait(
        `理想を失った俺は、もっと深い地獄へ堕ちるだけだ。`,
      );
      await you.say_and_wait(`だから、行け。俺のそばから、これで行け。`);
      //節拍8 行動：二人がキスする 反応:必ずまた会うと誓う 親密/孤独(++++) 失/得(++)
      await era.printAndWait(
        `${you.name} は逆に ${maru.name} の柔らかい髪を撫で、${
          maru.sex
        }の心拍を感じた。`,
      );
      await you.say_and_wait(`だから ${maru.name}————`);
      await era.printAndWait(
        `一筋の鉄錆の味の舌が、強引に ${you.name} の口へ入った。`,
      );
      await era.printAndWait(`短い接触のあと、名残惜しそうに離れた。`);
      await maru.say_and_wait(`こんな簡単には諦めないわ。だから、${callname}`);
      await era.printAndWait([
        maru.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        {
          content: 'どこにいても、',
          color: maru.color,
        },
        '私たちの心は永遠に一緒。」',
      ]);
      await maru.say_and_wait(`じゃあ、もう一度。`);
      await era.printAndWait(`言葉は要らない。すぐ消える幸福を楽しむ。`);
      await era.printAndWait(`————二人が分かれるまで`);
    };
    f.title = title;
    return f;
  })(),
};
