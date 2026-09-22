/**
 * @file スマートファルコン - 育成
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} train トレーニングの基礎能力（i18n 済み）
   */
  get_ts_content(falcon, train) {
    era.print([
      falcon.get_colored_name(),
      ' の ',
      train,
      ' トレーニングが無事に終わった',
    ]);
  },
  ts_add: (() => {
    const title = '追加の自主トレ';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`予定のメニューが全部終わったあと`);
      await falcon.say_and_wait(`${callname}！ キラキラしてるファル子、見た？`);
      await era.printAndWait(
        `ダートで汗を流し、土まみれの${falcon.name}の目だけが、きらきら輝いていた。`,
      );
      await you.say_and_wait(`予定どおり全部できたね。ファル子、お疲れ。`);
      await falcon.say_and_wait(
        `${callname}も、ファル子が輝いてるって思う？ やった⭐`,
      );
      await era.printAndWait(
        `${you.name}の手から洗ったタオルを受け取り、顔の泥を拭うと、データを整理している${you.name}へゆっくり近づいた。`,
      );
      await falcon.say_and_wait(`ん、あのね、${callname}、`);
      await era.printAndWait(
        `微風が路傍の草を揺らし、${falcon.name}の表情は夕日に隠れた。`,
      );
      await falcon.say_and_wait(
        `もう少しだけ練習していい？ ファル子、まだやりたい目標があるんだよ！`,
      );
      await falcon.say_and_wait(
        `それに、${falcon.uma_sex_title}アイドルなら、目標はちょっと～高めでもいいよね？`,
      );
      await falcon.say_and_wait(`じゃあ、${callname}はどう思う？`);
      era.printButton(`それなら`, 1);
      await era.input();
      await era.printAndWait(
        `今のファル子は調子が良く、追加トレもできそうだ。だが量を急に増やしたら、翌日のトレーニングに響かないか。`,
      );
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(`路傍の小さな草でさえ、強く育ちたいと願うのか。`);
      era.printButton(
        `「それじゃあ頑張れ、未来の${falcon.uma_sex_title}アイドル」`,
        1,
      );
      era.printButton('「……今日のトレーニングはここまでだ」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(`うん！ 追加トレもよろしくね、${callname}！`);
        era.printButton(
          `ファル子がトップアイドルへ一歩ずつ進むのを見ていられるの、僕も嬉しいよ。`,
          1,
        );
        await era.input();
        await you.say_and_wait(`じゃあ次は`);
        await era.printAndWait(
          `門限ぎりぎりまでトレーニングし、${callname}は走れなくなったファル子を抱えて寮の前まで送った。`,
        );
      } else {
        await falcon.say_and_wait(`でも……`);
        await you.say_and_wait(
          `${falcon.uma_sex_title}アイドルへの道は一足飛びじゃない。やりすぎは逆効果だ！`,
        );
        await falcon.say_and_wait('え？');
        await you.say_and_wait(
          `過度なトレーニングのあとは疲れでフォームが乱れ、脚を傷めて骨折することもある。`,
        );
        await you.say_and_wait(
          `だからファル子のトレーナーとして、そんな危険は犯せない。`,
        );
        await falcon.say_and_wait(
          `ファル子、バカだったね。こんな簡単なこと、思いつかなかった。`,
        );
        await era.printAndWait(
          `${callname}を直視できないファル子を見て、${callname}は溜息をつき、${falcon.sex}の頭を撫でた。`,
        );
        await you.say_and_wait(`このあとはトレーナー室で、少し休もう。`);
        await falcon.say_and_wait(`うん！`);
        await era.printAndWait(
          `そのあと${you.name}はトレーナー室で、ファル子の脚をマッサージしながら最近の流行を話した。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '体を大事に！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     * @param {number} fail_again 頑張るを選んだ場合、再び失敗するか
     */
    const f = async (falcon, you, callname, fail_again) => {
      await falcon.say_and_wait(`……${callname}`);
      await you.say_and_wait(`ファル子……`);
      await era.printAndWait(
        `校医「あなたが${falcon.sex}のトレーナーですか。なぜ${falcon.sex}がこれほど疲弊しているのに、こんな危険を冒したのです」`,
      );
      await era.printAndWait(
        `返す言葉がなく、${you.name}は黙って${falcon.sex}の叱責を聞くしかなかった。`,
      );
      await falcon.say_and_wait(`ちがう、ファル子が自分からお願いしたんだよ。`);
      await era.printAndWait(
        `校医「怪我をすれば後遺症が残る可能性もあると、ご存じないのですか」`,
      );
      await era.printAndWait(
        `トレーナー手帳にも、普段のトレーニングの怪我が後遺症になり、引退を余儀なくされた例が載っている。`,
      );
      await era.printAndWait(`それでも。`);
      await you.say_and_wait(`すみません。次から気をつけます。`);
      await era.printAndWait(`校医「患者の休養を妨げないでください」`);
      await era.printAndWait(
        `校医は溜息をつき、ついでに扉を閉めた。保健室で、黙った二人が視線を交わす。`,
      );
      era.printButton('「大丈夫だ。ファル子は、こうしてちゃんと休んで」', 1);
      era.printButton('「……」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(`……うん。ファル子、すぐ元気になるよ。`);
        await falcon.say_and_wait(
          `ファル子、ときどき急ぎすぎるから、全部${callname}のせいじゃないよ。`,
        );
        era.printButton('「ありがとう、ファル子」', 1);
        await era.input();
        await falcon.say_and_wait(
          `うん、${callname}。トレーナー室の雑誌、持ってきてくれる？`,
        );
        await you.say_and_wait(`いいよ。ファル子も、ちゃんと休んで。`);
        await falcon.say_and_wait(`うん。`);
        await era.printAndWait(
          `保健室の扉をそっと閉めると、ファル子はもう眠ったようだった。`,
        );
      } else if (fail_again) {
        await falcon.say_and_wait(`${callname}。`);
        await era.printAndWait(`ファル子が${callname}より先に沈黙を破った。`);
        await falcon.say_and_wait(`手、握ってくれる？`);
        await era.printAndWait(
          `ファル子の視線が、天井からゆっくり窓の外へ移る。`,
        );
        await falcon.say_and_wait(`友達と別れたのも、この夕日のときだった。`);
        await falcon.say_and_wait('痛い！');
        await you.say_and_wait(`ファル子！`);
        await falcon.say_and_wait(`${callname}、もう少し近くに来てくれる？`);
        await falcon.say_and_wait(
          `もうこんなに友達と別れてきたのに、${callname}まで失いたくない。`,
        );
        await era.printAndWait(
          `咽び泣くファル子を強く抱きしめ、${you.name}は巨大な金色の塊が地平線に呑まれていくのを見た。`,
        );
        await era.printAndWait(`長い夜が来る。`);
      } else {
        await falcon.say_and_wait(`${callname}`);
        await era.printAndWait(`ファル子が${callname}の名を呼ぶ。`);
        await era.printAndWait(
          `なぜか、${callname}は${falcon.sex}の手を強く握った。`,
        );
        await falcon.say_and_wait(`わかるよ、${callname}の温かい大きな手`);
        await falcon.say_and_wait(`ちょっと楽になった。`);
        await you.say_and_wait(`僕はここにいる。どこにも行かない！`);
        await falcon.say_and_wait(`${callname}、優しいね。`);
        await era.printAndWait(`ファル子は大きな手を自分の頬へ当てた`);
        await falcon.say_and_wait(`このまま、少し休もう。`);
        await era.printAndWait(`間もなく、ファル子はそのまま眠った。`);
        await era.printAndWait(`そっと扉を閉めて、${callname}は保健室を出た。`);
        await era.printAndWait(`ファル子はすぐに元気を取り戻した。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '無理は禁止！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     * @param {number} fail_again 頑張るを選んだ場合、再び失敗するか
     */
    const f = async (falcon, you, callname, fail_again) => {
      await falcon.say_and_wait(`${callname}……`);
      await era.printAndWait(
        `ファル子はトレーニング中、不覚にも足首をひねった`,
      );
      await falcon.say_and_wait(`ごめん、ファル子、疲れすぎて……`);
      await era.printAndWait(
        `立て続けのゲリラライブで、ファル子の体力が大きく削られていたのかもしれない`,
      );
      era.printButton('「この先の街角ライブは、しばらく止めよう。」', 1);
      era.printButton('「街角ライブ、試してみる？」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await falcon.say_and_wait(
          `うぅ～ファル子を待ってるファンのみんな、どうしよう。`,
        );
        era.printButton(
          '「怪我した足で無理して演ったら、ファンも心配するだろ？」',
          1,
        );
        await era.input();
        await falcon.say_and_wait('……じゃあ、少しだけお休みするしかないね');
        await falcon.say_and_wait(
          'それなら元気出すために、トレーナー室で有馬記念のウィンナーズステージ見よ！',
        );
        era.printButton('「怪我したところに力を入れないで。」', 1);
        await era.input();
        await falcon.say_and_wait(`わかった！ ${callname}、抱っこしてくれる？`);
        era.printButton(`「よいしょ！」`, 1);
        await era.input();
        await falcon.say_and_wait(`うわ、本当に抱っこされた`, true);
        await falcon.say_and_wait(`いい匂いするし、すごく近い`, true);
        await era.printAndWait(
          `脚の休養が必要なので、調子を戻すには少し時間がかかる。`,
        );
      } else {
        await era.printAndWait(
          `音楽のリズムに乗れたら、ファル子の治りも早くなるかもしれない。`,
        );
        await era.printAndWait('少し考えて、試してみることにした。');
        era.printButton(
          '「気分が上がれば傷も早く治る。だからライブしよう！」',
          1,
        );
        await era.input();
        await falcon.say_and_wait(
          `え、そんな方法もあるんだ。ファル子、頑張る！`,
        );
        if (fail_again) {
          await era.printAndWait(
            `いつものように、緑の悪魔が${callname}に絡まれている隙に、ファル子の定例ライブが始まった。`,
          );
          await falcon.say_and_wait(
            `みんな！ こっち見て！ ファル子のライブ、今から始まるよ！`,
          );
          await era.printAndWait(
            `こちらでリズムに合わせて踊り続けるファル子は、怪我などしていないみたいだった。`,
          );
          await falcon.say_and_wait(
            `やった！ やっとファンが何人か来てくれた！`,
            true,
          );
          await era.printAndWait(
            `頭で考えているあいだに反応が一拍遅れ、うっかり転んでしまった。`,
          );
          await falcon.say_and_wait(`う、ファル子は大丈夫だよ⭐`);
          await era.printAndWait(
            `${callname}がたづなさんからようやく逃れたころ、ファル子の傷は悪化していた。`,
          );
        } else {
          await era.printAndWait(`ライブの出来は、意外なほど良かった`);
          await falcon.say_and_wait('みんな！ こっち！ 見て見て！');
          await era.printAndWait(
            `平地をステージに、携帯マイクを取り出せば、ファル子の小さな舞台ができあがる。`,
          );
          await falcon.say_and_wait(`♪`);
          await era.printAndWait(
            `誰もいないところから、まばらな人だかり、やがて人が集まっていく。`,
          );
          await era.printAndWait(`河岸の芝は、人でいっぱいになった。`);
          era.printButton('「効果は抜群だな」', 1);
          await era.input();
          await era.printAndWait(
            `${callname}も時おり喝采する人の輪の中に立ち、静かにファル子のライブを見ていた。`,
          );
          await era.printAndWait(
            `ライブ作戦は大成功に見え、${falcon.name}の傷の治りも早かった。`,
          );
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  beginning: (() => {
    const title = '喊声とどろくダートレース';
    // アイドル活動には熱心だが、レースには自分を無理に乗せている。失敗した未来への恐れかもしれない
    // 主題：力を尽くして前へ、逆流を上る。ファル子とトレーナーが旅先で雑談して得た結論
    // 人は寂しがりだ。曲が終わり人が散ったあと、高揚はゆっくり退き、残るのは疲れだけ
    // 世間の楽観は、拾い集めた瓦を寄せて継ぎはぎした楽観にすぎず、大きな危険の前では四散する
    // つまり、楽観を装った悲観者にすぎない
    // だが悲観は、自分が積み上げた成果を見落とすことでもある。未来への視野を自分の五メートル以内の操作可能域へ戻せば、続ける力が得られる
    // 大きすぎる期待は足を止め、言い訳に埋もれ、良心は塵を被り、嘘の負債を重ねていく
    // トレーナーは約束どおり、ファル子をダートレースへ連れて行った
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname_37 エイシンフラッシュのプレイヤーへの呼び方
     */
    const f = async (falcon, flash, you, callname_37) => {
      await era.printAndWait(`どこかのダートレース`);
      era.println();
      await you.say_as_passer_by_and_wait(
        `実況`,
        `レースは最終局面！ 二番と四番が馬群から抜け出し、最後の一騎打ちだ！`,
      );
      await you.say_as_passer_by_and_wait(`観客`, `うおおおおおおおお！`);
      await era.printAndWait(
        `雪が肩へそっと落ち、湿った水気になる。スタンドの観客は厚いマフラーとコートに身を包み、旗とテープを振り、波のように続く声援が冬の静けさを破っていた。`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}`,
        `はああああ！`,
      );
      await era.printAndWait(
        `二人の${falcon.uma_sex_title}は前半ずっと先頭集団にいたが、馬群との差はまだ開いていなかった。最後のスパートで急加速し、馬群を後ろへ置いていく。`,
      );
      await era.printAndWait(
        `スタンドで整っていた声援は、劇的な展開に掻き乱され、雑然となる。`,
      );
      await you.say_as_passer_by_and_wait(
        `実況`,
        `二人は一歩も譲らない！ 残り200メートル！ 100メートル！ 50メートル！ 勝者は——`,
      );
      await era.printAndWait(`時間が、ここで凍りついた。`);
      await era.printAndWait(
        `追う${falcon.uma_sex_title}と、前の${falcon.uma_sex_title}が並び、抜きにかかる——`,
      );
      await falcon.say_and_wait(
        `これが、トレーナーの${you.adult_sex_title}が見せてくれたかった絵なの？`,
      );
      await era.printAndWait(`凍った時間が、また動き出す。`);
      await era.printAndWait(
        `勝った${falcon.uma_sex_title}は、砂にまみれたまま、汗と涙の混ざった笑顔を観客へ捧げた。\n\n`,
      );
      await era.printAndWait(
        `場内のスポットライトが勝者へ集中し、他の${falcon.uma_sex_title}は衆星が月を囲むように、勝利の実を甘く際立たせる。`,
      );
      await era.printAndWait(
        `高揚の喜びも、負けた口惜しさも、喉から絞り出す叫び。声が枯れても届こうとする、あの空へ。`,
      );
      await era.printAndWait(
        `寒い夜でも、この熱は場にいる一人ひとりの胸へ、確かに届いた。`,
      );
      await falcon.say_and_wait(
        `わぁ——ダートレース、思ったよりずっと賑やかだね。`,
      );
      await falcon.say_and_wait(
        `ステージのど真ん中の${falcon.uma_sex_title}に、観客の目が全部集まって……`,
        true,
      );
      await falcon.say_and_wait(`ファル子も、あそこに立てたら。`, true);
      await falcon.say_and_wait(`ファル子……ファル子、感動で泣きそう！`);
      await era.printAndWait(`出口から出た${falcon.name}が、胸の内を語る。`);
      await falcon.say_and_wait(
        `ダートレース、思ったよりずっと凄かった。観客の熱も、${falcon.uma_sex_title}たちが注いだ愛も、芝を選んだ${falcon.uma_sex_title}たちと同じだよ！`,
      );
      await falcon.say_and_wait(`ファル子、決めた！`);
      await era.printAndWait(
        `熱に火をつけられた${falcon.teen_sex_title}が、真剣な目で${you.name}を見る。`,
      );
      await falcon.say_and_wait(
        `ファル子はダートレースを起点に、このコースを一気に、トップ${falcon.uma_sex_title}ドルのゴールまで真っ直ぐ走るよ！`,
      );
      await era.printAndWait(
        `騒がしさに周囲の客がちらちら見る。${falcon.name}のダートアイドルの道は、いま始まったばかりだ。`,
      );
      era.drawLine();
      await falcon.say_and_wait(`門限近いよ！ じゃあまた明日⭐`);
      await era.printAndWait(
        `${falcon.name}を乗せた電車を見送ったあと、ふと見慣れた影を見つけた。`,
      );
      await you.say_and_wait(
        `エイシンフラッシュ……フラッシュさんですね。今夜は風もなく、いい晩です。`,
      );
      await era.printAndWait(
        `生徒のほうから声をかけるのは少し気後れするが、相手を知りたい気持ちもあり、${you.name}から挨拶した。`,
      );
      await flash.say_and_wait(`ええ、こんばんは、${callname_37}。`);
      await you.say_and_wait(
        `${falcon.actual_name_with_title}の帰りを待っていたのですか。ご安心を。もう寮へ無事戻っています。`,
      );
      await you.say_and_wait(
        `道中、ファルコンさんが予定表どおりに動けるルームメイトがいると聞いていました。来る途中から期待していましたが、本人はお話以上に頼もしいですね。`,
      );
      await era.printAndWait(
        `道中、${falcon.name}が時間を守るルームメイトの話をしていた。相手と関係を築いておくのは大切だ。`,
      );
      await flash.say_and_wait(
        `ふふ、お褒めいただき恐縮です。予定を滞りなく進めるためにすべきことをしているだけです。大したことでは。`,
      );
      await flash.say_and_wait(
        `ただ、ファルコンさんのお話が出たので。奇遇ですが、このところ${falcon.sex}があなた様のことを何度も口にされていました。`,
      );
      await era.printAndWait(
        `エイシンフラッシュは軽く笑い、話題を${you.name}へ向けた。`,
      );
      await you.say_and_wait(
        `ファルコン${falcon.adult_sex_title}にそう思っていただけるのは光栄です。`,
      );
      await you.say_and_wait(
        `でしたら、この先の三年も楽しみになってきました。`,
      );
      await flash.say_and_wait(`三年、ですか……`);
      await era.printAndWait(
        `${you.name}がその言葉を出すと、エイシンフラッシュはしばし黙った。`,
      );
      await flash.say_and_wait(
        `${callname_37}。今この場でお訊きするのは失礼かつ唐突かもしれませんが、どうか一句だけ。`,
      );
      await flash.say_and_wait(
        `担当トレーナーとして、その覚悟はおありですか。ファルコンさんと${falcon.sex}一心同体で、責任を背負う覚悟です。`,
      );
      await era.printAndWait(`来た、この一言だ！`);
      await era.printAndWait(
        `想像どおり、フラッシュはこの友情を大事にしている。`,
      );
      await era.printAndWait(
        `${falcon.sex}の試験を通るなら、こちらも同じ誠意を見せなければ。`,
      );
      era.printButton(
        '「園芸に心を奪われた庭師のように、埋めた種を大切に育て、祝福と希望を込めて${falcon.sex}が咲くことを祈ります。」',
        1,
      );
      await era.input();
      await flash.say_and_wait(
        `ずいぶん感性的なお答えですね。でしたら、安心いたしました。`,
      );
      await era.printAndWait(
        `エイシンフラッシュは${you.name}へ小さく一礼し、礼を示す。`,
      );
      await flash.say_and_wait(
        `ファルコンさん${falcon.sex}のことは、お願いいたします。${falcon.sex}の友人として、ご入用があれば私も力を尽くします。`,
      );
      await flash.say_and_wait(`。`);
      await era.printAndWait(`ならば。`);
    };
    f.title = title;
    return f;
  })(),
  next_beginning: (() => {
    const title = 'First！ アイドルの第一歩';
    /**
     * 震える両手 イメージ 夢の中の物語 人物 交渉 細かな仕草 顔 空の変化 色彩 草原
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait('トレーニング場');
      era.printButton(`踏ん張れ！ 最後の一周！`, 1);
      await era.input();
      await falcon.say_and_wait(`……はあああ！`);
      await era.printAndWait(
        `${falcon.name}は体を前へ傾け、地面の抵抗に抗う。足元の大地が鈍い振動を伝える。`,
      );
      await falcon.say_and_wait(`……`);
      await era.printAndWait(
        `歯を食いしばり、速度を保った${falcon.name}が、ダートの鮮やかな白線を駆け抜けた。`,
      );
      await you.say_and_wait(`お疲れ！`);
      await era.printAndWait(
        `${you.name}は用意したタオルを${falcon.name}へ渡し、${falcon.sex}は額の汗を丁寧に拭う。`,
      );
      await era.printAndWait(
        `砂利と汗の混じったものが、${falcon.sex}の体操服にびっしり張りついていた。`,
      );
      await era.printAndWait(
        `激しい運動のあと、いきなり座ると体に負担がかかる。${you.name}と${falcon.name}はトレーニング場をゆっくり回りながら雑談した。`,
      );
      await falcon.say_and_wait(`${callname}⭐ 今回、前より良くなった？`);
      await era.printAndWait(
        `${you.name}はタイマーを出し、タイムを確認し、最後のスパートで残った深い跡を見て、小さく頷いた。肯定された${falcon.teen_sex_title}は興奮を抑えきれず、${callname}の前を歩いた。`,
      );
      await falcon.say_and_wait(
        `やった⭐ これで${falcon.uma_sex_title}アイドルの道、進めるよ！`,
      );
      await you.say_and_wait(`${falcon.uma_sex_title}アイドル？`);
      await era.printAndWait(
        `${falcon.name}は以前も${falcon.uma_sex_title}アイドルという言葉を出していた。だが、それが何なのか、自分ではまだはっきりしない。`,
      );
      await falcon.say_and_wait(
        `${falcon.uma_sex_title}アイドルはファル子が作った言葉だよ。キラキラして親しみやすいアイドルで、ファンと一緒に育ち、見届けて、愛と希望を贈り合う存在！`,
      );
      await you.say_and_wait(
        `個人の魅力を前面に出すアイドル芸能人みたいなものか？`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}アイドルの概念は、芸能界の新人アイドルに近い。`,
      );
      await you.say_and_wait(
        `${falcon.uma_sex_title}アイドルならではのところは、どこなんだ？`,
        true,
      );
      await era.printAndWait(
        `${you.name}はミネラルウォーターを${falcon.sex}へ渡した。`,
      );
      await you.say_and_wait(`この概念、先にノートへ書いておこう。`, true);
      await falcon.say_and_wait(
        `観客席のみんなに、ファル子が輝いてるところをずっと見てほしいんだ！`,
      );
      await era.printAndWait(
        `逃げの戦略は、${falcon.name}の望みにぴったりだ。`,
      );
      await you.say_and_wait(`脚質の中では、逃げがいちばん合うだろう。`, true);
      await you.say_and_wait(`たしかに、ファル子らしいな。`);
      await era.printAndWait(
        `レースでもステージでも、誰より輝く存在。${falcon.sex}はそっちを選んだのだ。`,
      );
      await falcon.say_and_wait(
        `だってファル子は、キラキラの${falcon.uma_sex_title}アイドルだよ⭐`,
      );
      await falcon.say_and_wait(
        `昔から今も、この先の未来も、ずっと輝き続ける${falcon.uma_sex_title}アイドル！`,
      );
      await you.say_and_wait(
        `${falcon.name}がたどり着く場所は、どんな景色なんだろう。僕も楽しみになってきた。`,
      );
      await falcon.say_and_wait(`絶対、最高の景色だよ！`);
      await falcon.say_and_wait(
        `ああ。${falcon.name}が${falcon.uma_sex_title}アイドルでいるところを思うだけで、ファル子、こ～んなに力が湧いてくる！`,
      );
      await falcon.say_and_wait(`${callname}、次の目標は！`);
      await era.printAndWait(
        `${falcon.name}は力を取り戻したらしい。${you.name}は、無理をしていないか少し心配だ。`,
      );
      await you.say_and_wait(`たしかに、ファル子らしいな。`, true);
      era.printButton(`じゃあ、もう一度計ろう`, 1);
      await era.input();
      await falcon.say_and_wait(`${callname}！ ファル子、準備できたよ！`);
      await you.say_and_wait(`用意！`);
      await era.printAndWait(
        `${falcon.name}の体が張り、目は前方のコースをじっと捉える。`,
      );
      await era.printAndWait(
        `号砲とともに舞い上がる土埃が、ダートのアイドルが踏み出した第一歩を見届けた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_9: (() => {
    const title = 'これからもよろしくね⭐';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, minoru, you, callname) => {
      await era.printAndWait(`二月は、一年でいちばん寒い。`);
      await era.printAndWait(
        `街の空は厚い雲に覆われ、不意の大雪が街を真っ白に塗った。`,
      );
      await era.printAndWait(
        `寒い日は焦りも催す。休みでも${you.name}は早めにトレーナー室へ来た。`,
      );
      await era.printAndWait(
        `${falcon.name}のトレーニングは軌道に乗っている。次のメイクデビューも問題ないはずだ。`,
      );
      await era.printAndWait(
        `気になるのは、${falcon.name}の足音が重いことだ。`,
      );
      await era.printAndWait(
        `そのおかげで、${falcon.sex}向けのダートのスピードとパワーのメニューは進みが早い。`,
      );
      await era.printAndWait(
        `長い${falcon.uma_sex_title}アイドル活動でも元気が続くのは、たぶんこの重さのおかげだろう。`,
      );
      await minoru.say_and_wait(`あら、今日は早いのですね？`);
      await era.printAndWait(
        `考えていると時間はすぐ過ぎる。たづなさんは当然のようにトレセンの校門に現れ、微笑んで${you.name}を見ていた。`,
      );
      era.printButton(
        `可愛い${falcon.uma_sex_title}たちを一日でも早く送り出したいから、早起きしてトレセンへ来たんです。それにしても、今日のたづなさんも綺麗ですね。`,
        1,
      );
      await era.input();
      await minoru.say_and_wait(`ふふ、もう。褒めても何も出ませんよ？`);
      await era.printAndWait(
        `軽く笑うたづなさんの顔は、揺れない。ある意味、${falcon.sex}のほうが理想の大人だ。`,
      );
      await era.printAndWait(`互いに一礼して別れ、礼儀という儀式は終わった。`);
      await era.printAndWait(
        `${you.name}が肩の雪を払い、エアコンを三十度にしたとき——`,
      );
      await falcon.say_and_wait(`お邪魔します⭐`);
      await era.printAndWait(
        `${falcon.name}がトレーナー室の扉を勢いよく開けた。`,
      );
      era.printButton(`おはよう！`, 1);
      await era.input();
      await era.printAndWait(
        `入口の音は無視して、${falcon.teen_sex_title}の吐く白い息は冷たい空気にすぐ消える。${falcon.name}の熱だけは減らない。`,
      );
      await falcon.say_and_wait(`${callname}、おはよう！ 今日も元気そうだね！`);
      await era.printAndWait(`すぐ、${falcon.name}の元気な返事が返ってきた。`);
      await era.printAndWait(
        `${falcon.name}の笑顔から目を下ろすと、${you.name}の視線は${falcon.sex}が提げた小さなバケツと箒に集まる。`,
      );
      await falcon.say_and_wait(
        `いつもお世話になってるから、ファル子、今日はボランティアするよ！`,
      );
      await era.printAndWait(
        `${falcon.name}は手のバケツを振る。中が水なら、今にもこぼれそうだ。`,
      );
      await you.say_and_wait(`具体的には？`);
      await falcon.say_and_wait(
        `ん——みんな起きる前に、高架下から芝へ流れてきたゴミを分別して、ゴミ捨て場へ運ぶよ⭐`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}アイドルとは何か（哲学）。`,
      );
      await falcon.say_and_wait(`そういえば、${callname}も一緒に来る？`);
      era.printButton(`僕も手伝いたい`, 1);
      era.printButton(`行きたいけど、こっちに仕事が残ってる`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(`やった！`);
        await falcon.say_and_wait(`じゃあ今すぐ出発！`);
        await era.printAndWait(
          `${you.name}が頷くと、${falcon.name}の笑顔はもっと明るくなった。`,
        );
        era.drawLine();
        await falcon.say_and_wait(`逃がさないよ⭐`);
        await era.printAndWait(
          `${falcon.name}は最後のゴミをまとめ、用意した黒い袋へ入れた。`,
        );
        await falcon.say_and_wait(`あとはこれを全部捨てたら終わり！`);
        await falcon.say_and_wait(`${callname}、お疲れ！`);
        await era.printAndWait(
          `${falcon.sex}は黒い袋に、丁寧に綺麗な蝶結びをした。`,
        );
        await era.printAndWait(
          `普段から環境保護は言っていたが、自分の手でゴミを拾って、${you.name}は初めて深く理解した。`,
        );
        await era.printAndWait(
          `ファル子にとっては、支えてくれるファンへの、自分なりの返事なのだろう。`,
        );
        await era.printAndWait(
          `……こういうところで、意外と${falcon.teen_sex_title}らしいこだわりを見せるのか。`,
        );
        await falcon.say_and_wait(
          `${callname}がいなかったら、ライブ前に終わらせるの、ファル子にはちょっと厳しかった……`,
        );
        await falcon.say_and_wait(
          `ファル子、${callname}にどうお礼したらいいかわからない。`,
        );
        await era.printAndWait(
          `ゴミの大半は${falcon.name}が処理した。「助かった」は謙遜にすぎない。`,
        );
        era.print(`なんて返そう。`);
        era.printButton(`ファル子のライブ、先に見てもいい？`, 1);
        era.printButton(`次の中間テスト、全部合格！`, 2);
        if ((await era.input()) === 1) {
          await falcon.say_and_wait(
            `え？ それでいいの？ ${callname}のお願いなら。`,
          );
          await you.say_and_wait(`ファル子のファン1号のお願いだ！`);
          await falcon.say_and_wait(`え？ ファン1号……ファル子、閃いた！`);
          await era.printAndWait(
            `ファン1号という言葉がインスピレーションに触れたのか、${falcon.name}の尻尾がさっと立った。`,
          );
          await falcon.say_and_wait(`ん……こうして……違う……こっちのほうがいい。`);
          await era.printAndWait(
            `${falcon.name}は黒い袋をステージ裏（ステージといっても高架下の五平方メートルの空き地）へ置き、制服のポケットからマイクを取り出した。`,
          );
          await falcon.say_and_wait(
            `次に登場するのは、ファル子が今思いついた曲♪ ファン1号の${you.adult_sex_title}のリクエストで作ったベータ版だよ♪`,
          );
          await falcon.say_and_wait(`じゃあ、さん、に、いち！`);
          await era.printAndWait(
            `まだ残る白い息、白んだ空、小さな空き地で、ライブが始まる。`,
          );
        } else {
          await falcon.say_and_wait(`えええ？ そのお願い？`);
          await you.say_and_wait(
            `わからないところは僕も見る。だからファル子、逃げるのはなしだ。`,
          );
          await era.printAndWait(`${falcon.name}は少し困った顔をした。`);
          await falcon.say_and_wait(
            `でもファル子、頑張る！ ファル子！ 頑張る！`,
          );
          await era.printAndWait(
            `元気な声に近くの公園の鳥が驚き、木の周りを長く旋回してから巣へ戻った。`,
          );
          await era.printAndWait(
            `トレセンへ戻る道、${falcon.name}の機嫌は前より良さそうだった。`,
          );
          await falcon.say_and_wait(`そういえば、${callname}。`);
          await falcon.say_and_wait(`${callname}にも、推してるアイドルいる？`);
          await era.printAndWait(
            `なぜ${falcon.name}が急にそれを訊くのか、わからない。`,
          );
          await falcon.say_and_wait(`あ、答えなくていい。違う、答えないで。`);
          await era.printAndWait(
            `${you.name}が答えようとしたとき、${falcon.name}は落ち着かない。`,
          );
          await era.printAndWait(
            `${you.name}は空を見た。藍色の空が地平の金色に少しずつ取って代わられ、間もなく喧騒が戻る。`,
          );
        }
      } else {
        await falcon.say_and_wait(`${callname}、やっぱり大変だね。`);
        await falcon.say_and_wait(
          `ファル子が勝手にお願いしただけだよ。${callname}は大丈夫！`,
        );
        await era.printAndWait(
          `${falcon.name}は少し残念そうな顔をしたが、すぐいつもの表情に戻った。`,
        );
        await you.say_and_wait(`気をつけて！`);
        await falcon.say_and_wait(
          `うん！ ファル子、${callname}の分まで頑張る！`,
        );
        await era.printAndWait(
          `${you.name}は${falcon.name}の耳が動くのを見て、トレーナー室の扉をそっと閉めた。`,
        );
        await era.printAndWait(
          `ファル子の働きで、川辺に浮かんでいたゴミは全部消えた。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_18: (() => {
    const title = '空っぽの頭に残った、ただ一つの想い';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`五月中旬のある日。`);
      await era.printAndWait(
        `トレーニング計画は着実に進み、${falcon.name}の宣伝のおかげで、川辺の街角ライブにも忠実なファンが何人か付いた。`,
      );
      await era.printAndWait(
        `現実は予想より明るい。答えは、やってみないとわからないこともある。`,
      );
      await era.printAndWait(
        `満足して溜息をついたあと、${you.name}は背中が汗ばんでいるのに気づいた。`,
      );
      await era.printAndWait(`春と夏の境目は、去年より明らかに暑い。`);
      await you.say_and_wait(
        `メイクデビューも近い。次はトレーニングの成果を試す番だ！`,
      );
      await falcon.say_and_wait(`${callname}、大変！`);
      await era.printAndWait(
        `そう思っていた${you.name}は、トレーナー室に飛び込んできた影に驚いた。`,
      );
      await you.say_and_wait(`またテスト不合格か？`, true);
      await era.printAndWait(
        `予想外ではあるが、想定していなかったわけでもない。`,
      );
      await falcon.say_and_wait(
        `それも大事だけど、ファル子が遭ったのはそれじゃない！`,
      );
      await era.printAndWait(
        `${you.name}はようやく気づいた。${falcon.teen_sex_title}は肩で息をし、汗が額から首筋へ流れている。`,
      );
      await era.printAndWait(`ここまで、走ってきたのだ。`);
      await you.say_and_wait(`どうしたの？`);
      await falcon.say_and_wait(
        `はぁ、はぁ……あのね、ファル子、トレセンのまわりの人たちに${falcon.uma_sex_title}アイドルって概念を広めようと思って、手作りのポスターを配ってるんだけど、おまけにちょっとしたプレゼントも付けてるの。`,
      );
      await falcon.say_and_wait(
        `ずっと安く売ってくれてた雑貨屋さんが急に引っ越ちゃって、新しく探したお店はどれもお値段がすっごく高いの。`,
      );
      await falcon.say_and_wait(
        `それだけならまだ頑張れたんだけど、最近行ってた雑貨屋さんも原材料が値上がりしたから、値段を上げるって……。`,
      );
      await falcon.say_and_wait(`このままじゃ、ファル子、大ピンチだよ！`);
      await era.printAndWait(
        `事情はだいたいわかった。安定した仕入れ先が突然消えて、${falcon.name}は慌てている。`,
      );
      await era.printAndWait(`少し考えたあと、${you.name}は——\n`);
      era.printButton(`他のお店を当たってみない？`, 1);
      era.printButton(`大事なのは、ファル子のアイドルの心だ！`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(`${falcon.name}が積み上げてきた人気を思えば。`);
        await you.say_and_wait(
          `${falcon.uma_sex_title}アイドルとして、商店街のお店でイベントして経費を集めるのはどう？`,
        );
        await you.say_and_wait(
          `ファル子は場を盛り上げるのが得意だろ。お店にお客を呼びつつ、着実に人気も積んでいける。`,
        );
        await you.say_and_wait(`お店から得た資金で、この時期を乗り切ろう！`);
        await falcon.say_and_wait(`でも、誰にお願いすればいいの？`);
        await era.printAndWait(`${falcon.name}が積み上げてきた人気を思えば。`);
        await you.say_and_wait(`隣で、ファル子の手伝いもするよ。`);
        await falcon.say_and_wait(`ふぅ～助かった……よかった。`);
        await era.printAndWait(
          `${falcon.name}は興奮して${you.name}の手を引き、くるくると回り始めた。`,
        );
        await era.printAndWait(`そういえば——`);
        await era.printAndWait(
          `ファンを分け隔てなく扱うファル子と、担当の${falcon.uma_sex_title}としての${falcon.name}。`,
        );
        await era.printAndWait(
          `${falcon.name}にとって、どちらが大事なのだろう。`,
        );
        await era.printAndWait(
          `目が回るほどの充足の中で、${you.name}はその問いを、ぼんやりと思い出した。`,
        );
        await you.say_and_wait(`……まずは目の前のことを片付けよう。`, true);
        await era.printAndWait(
          `その後${you.name}は、別々の店でバイトしている${falcon.uma_sex_title}たちから、宣伝不足に悩む店主の話を聞いた。`,
        );
        await era.printAndWait(
          `結果、コラボで見物客をたくさん呼び込み、正当な報酬とボーナスのほか、${falcon.name}はウマスタでも新しいファンを得た。`,
        );
      } else {
        await you.say_and_wait(
          `いちばん大事なのは、ファル子のアイドルの心だ！`,
        );
        await falcon.say_and_wait(`え？`);
        await you.say_and_wait(
          `見た目や格式を重んじるモデルより、青くてかわいくて、モデルよりファンに近いことこそが${falcon.uma_sex_title}アイドルの売りだ！`,
        );
        await era.printAndWait(
          `熱が入るほど${you.name}は机を強く叩き、その反動で手が痛くなった。`,
        );
        await falcon.say_and_wait(
          `え？ ${callname}の言いたいのは、ファル子が宣伝に頼りすぎて、${falcon.uma_sex_title}アイドルの芯を見失ってるってこと？`,
        );
        await you.say_and_wait(
          `そう！ ${falcon.uma_sex_title}アイドルとして活躍する${falcon.name}を、みんなに見せよう！`,
        );
        await falcon.say_and_wait(
          `わかった！ ファル子、${falcon.uma_sex_title}アイドルとして頑張るよ！`,
        );
        await era.printAndWait(`そういえば——`);
        await era.printAndWait(
          `ファンを分け隔てなく扱うファル子と、担当の${falcon.uma_sex_title}としての${falcon.name}。`,
        );
        await era.printAndWait(
          `${falcon.name}にとって、どちらが大事なのだろう。`,
        );
        await you.say_and_wait(`悔しいけど、ファル子にとっては、たぶん`, true);
        await era.printAndWait(
          `その考えはすぐ、${falcon.name}が興奮して並べたたくさんの案に飲み込まれた。`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}アイドルの心をつかんだ${falcon.name}は、その繊細さで多くのファンを惹きつけた。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_24: (() => {
    const title = 'ラベンダー';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`川辺の草地。\n`);
      await falcon.say_and_wait(
        `ずっとファル子を応援してくれてるみんな！ ファル子、いまやっと`,
      );
      await era.printAndWait(
        `計画どおり着実にトレーニングを積んだ${falcon.name}は、もう十分に成果が出ている。`,
      );
      await era.printAndWait(
        `次のメイクデビューに、${falcon.name}は万全の準備ができた。`,
      );
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(
        `いつものように${falcon.name}と並んでトレセンへ戻る道で、${falcon.name}が突然${you.name}を見た。`,
      );
      await era.printAndWait(`レースが近くなれば、不安が出るのも無理はない。`);
      await era.printAndWait(`それも、ごく自然なことだ。`);
      await falcon.say_and_wait(`そういえば、ファル子の初お披露目だね。`);
      await era.printAndWait(
        `${falcon.name}は${falcon.uma_sex_title}アイドルを目指して、まっすぐに走り出している。`,
      );
      await falcon.say_and_wait(
        `${falcon.uma_sex_title}アイドルの道に進むって決めたときは興奮して一晩眠れなかったけど、カレンダーをめくるたびに、ファル子、いまはちょっと……`,
      );
      era.printButton(`メイクデビューだから、怖い？`, 1);
      await era.input();
      await falcon.say_and_wait(`ちがう、ただ気持ちが……ちょっと複雑かな。`);
      await era.printAndWait(
        `自分のしっぽを追いかけてぐるぐる回った子猫が、段ボールにぶつかってぱたん、と音を立てたような。`,
      );
      era.printButton(`そういうことか。`, 1);
      await era.input();
      await falcon.say_and_wait(`でも、ファル子の気分は最高潮だよ！`);
      await falcon.say_and_wait(
        `アイドルの道への初お披露目なんて、小説の主人公みたい！`,
      );
      await falcon.say_and_wait(`これから、ファル子が輝く番だよ！`);
      await era.printAndWait(`${falcon.name}は${you.name}に微笑んだ。`);
      await falcon.say_and_wait(
        `……${callname}も、この先ずっとファル子のそばで応援してくれるよね？`,
      );
      era.printButton(`もちろん。`, 1);
      await era.input();
      await falcon.say_and_wait(
        `ん——${callname}、ほかの${falcon.uma_sex_title}にもそう言うの？`,
      );
      await era.printAndWait(
        `${you.name}は${falcon.name}の独り言を、聞こえなかったふりをした。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '初めてのオーディション！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`川辺の草地\n`);
      await falcon.say_and_wait(
        `目指すは！ トップアイドルの${falcon.uma_sex_title}アイドル——${falcon.name}、いま正式にデビューするよ⭐`,
      );
      await you.say_as_passer_by_and_wait(
        `ファン`,
        `ファル子、ついにデビューなの！`,
      );
      await falcon.say_and_wait(
        `そう！ この日のためにファル子、ずっと頑張ってきた！ みんなにもちょっと我慢してもらおうかと思ったけど……`,
      );
      await falcon.say_and_wait(
        `だってファル子もみんなと同じで、興奮が空まで届いちゃってるから♪`,
      );
      await you.say_as_passer_by_and_wait(
        `ファン`,
        `その勢いで、ずっと突き進んで！`,
      );
      await falcon.say_and_wait(
        `ファル子、レース開始からおしまいまでキラキラし続けるよ⭐……わあ、ドキドキする！ 不思議な感じ、心臓がずっとdokidokiって応えてる……`,
      );
      await falcon.say_and_wait(
        `約束だよ、みんなは観客席でファル子のステージを見ててね⭐`,
      );
      await you.say_as_passer_by_and_wait(`ファン`, `ファル子！ ファル子！`);
      await era.printAndWait(`\n控え室\n`);
      await falcon.say_and_wait(
        `リボン……オッケー！ 背中のゼッケン……間違いなし！`,
      );
      await era.printAndWait(
        `姿見の前に立つ${falcon.name}は、何度も自分の様子を確かめた。`,
      );
      await falcon.say_and_wait(
        `ずっと応援してくれるみんなのために……ファル子、絶対勝つ！`,
        true,
      );
      await falcon.say_and_wait(`ファル子！ ファイト！`);
      await era.printAndWait(`${falcon.name}は握った拳を高く掲げた。`);
      era.printButton(`レース場をステージだと思えばいい`, 1);
      await era.input();
      await era.printAndWait(
        `傍らで待つ${you.name}は、初めてメイクデビューに臨む${falcon.name}を見ていた。`,
      );
      await you.say_and_wait(`ファル子なら、きっと勝てる！`);
      await falcon.say_and_wait(`${callname}も！`);
      await era.printAndWait(
        `${you.name}は${falcon.name}の両手の、かすかな震えを感じた。`,
      );
      await falcon.say_and_wait(
        `ファンのみんなは、どこでファル子を待ってるのかな♪ 輝くファル子が、勝利をみんなに届けるよ⭐`,
      );
      await era.printAndWait(
        `慰めではない。この期間のトレーニング成果への、${falcon.name}の確信だ。`,
      );
      await falcon.say_and_wait(
        `${callname}は観客席で、ファル子のすごいところをちゃんと見ててね♪`,
      );
      await falcon.say_and_wait(
        `……それに、ファル子には、負けられない理由がもう一つある！`,
        true,
      );
      // トレーナーとは無関係。ただ恐れに耐えきれない結果
      await falcon.say_and_wait(
        `沈んだ考えはここまで！ ファル子のトップアイドルへの道は、ここから始まる！`,
        true,
      );
      await falcon.say_and_wait(
        `輝く${falcon.uma_sex_title}アイドル——${falcon.name}！ これから観客席のみんなに、まばたきする暇もないくらいファル子を見つめさせるよ！`,
      );
      await era.printAndWait(`${falcon.name}はレース場へ向かった。`);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'メイクデビュー後・昇る新星';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await you.say_as_passer_by_and_wait(`実況`, `勝者は——${falcon.name}！`);
      await era.printAndWait(
        `${falcon.name}がファンに宣言したとおり、レースの最初から観客の視線をしっかり掴んだ。`,
      );
      await era.printAndWait(
        `そのまま他の${falcon.uma_sex_title}との差を保ったまま、最後まで走り切った。`,
      );
      await falcon.say_and_wait(
        `${callname}！ ${callname}！ ファル子のレース、見てた？`,
      );
      era.printButton(`つい見入っちゃった！`, 1);
      await era.input();
      await falcon.say_and_wait(`ほんと？ やった⭐`);
      await era.printAndWait(
        `コースを下りた${falcon.name}は、少し休むと再び元気を取り戻した。`,
      );
      await era.printAndWait(
        `しびれた脚の筋肉をマッサージしていると、${you.name}の顔から笑顔がこぼれ落ちない。`,
      );
      await falcon.say_and_wait(
        `——もうダメかなってとき、観客席の応援が聞こえて、そしたらどこからか力が湧いて、そのまま一気にゴールまで！`,
      );
      await era.printAndWait(
        `コースを下りた${falcon.name}は、ステージ前の隙間で毎日のゲリラライブを観客席に売り込みかけたが、結局${you.name}に止められた。`,
      );
      await falcon.say_and_wait(`ファル子の次のステージ、楽しみにしててね！`);
      await era.printAndWait(
        `最後のマッサージが終わると、${falcon.name}は新しい感触を確かめるようにつま先立ちした。`,
      );
      era.printButton(`ダートアイドルの気概、ちゃんと見せてこい！`, 1);
      await era.input();
      await falcon.say_and_wait(
        `こうして観客の心を、ファル子のホームでぜ～んぶ奪っちゃう♪ だってファル子は、世界でいちばん輝く${falcon.uma_sex_title}アイドルだもん⭐`,
      );
      era.drawLine({ content: 'ウィンナーズステージ' });
      await falcon.say_and_wait(`これがウィンナーズステージ……？`, true);
      await era.printAndWait(
        `スタッフの案内に従い、決めておいた隊形のまま昇降機に乗った。`,
      );
      await era.printAndWait(
        `並んでいるうちはまだまばらな声が聞こえたが、定位置に着くと、残ったのはか細い息づかいだけだった。`,
      );
      await falcon.say_and_wait(`${falcon.name}の夢は、ここから始まる！`, true);
      await era.printAndWait(
        `強い揺れのあと、${falcon.name}は下方向の力を感じた。これから本番だ。`,
      );
      await era.printAndWait(
        `怖くない、と心の中で言い聞かせても、額と掌は汗で濡れていた。`,
      );
      await era.printAndWait(
        `スポットライトが着順どおりにステージを照らし、時間は${falcon.teen_sex_title}たちを待って、ゆっくり止まっていく。`,
      );
      await era.printAndWait(
        `待ち焦がれたステージが目の前にある。稽古したステップが頭の中を何度も駆け、緊張で頭は真っ白になりかけた。それでも止まった時間は回り始め、いまが、進むときだ。`,
      );
      await era.printAndWait(
        `こうして${falcon.name}は、初めてのウィンナーズステージを終えた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_30: (() => {
    const title = 'ずっと続いてほしい日常';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(
        `${callname}、ファル子、最近いいライブ場所見つけたの。いっしょに見に行っていい？`,
      );
      await era.printAndWait(
        `${you.name}はフォルダから顔を上げ、${falcon.name}と目が合った。`,
      );
      await you.say_and_wait(`うわっ。`);
      await era.printAndWait(
        `ぐっと近づいてきた${falcon.name}は、悪戯が成功したような笑顔を浮かべた。`,
      );
      await you.say_and_wait(`近い！`, true);
      await era.printAndWait(
        `よく考えれば、${falcon.sex}も多感な時期だ。こういうことをしてもおかしくない。`,
      );
      await you.say_and_wait(
        `ファル子の努力を否定するわけじゃないけど、最近アイドル活動、ちょっと多すぎない？`,
      );
      await you.say_and_wait(
        `理想の未来へ進むのは正しい。でもテストで落ちたら、その歩みが遅くなる。`,
      );
      await falcon.say_and_wait(
        `ひゃっ！……その……ファル子、反省してるよ。アイドル活動も時間と場所はちゃんと考えてるから。`,
      );
      await era.printAndWait(
        `${falcon.name}はどこか上の空だった。${you.name}がわざと咳払いして、ようやく慌てて説明した。`,
      );
      await you.say_and_wait(`嘘をつく人は、目を合わせられないんだよ。`);
      await era.printAndWait(
        `それを聞いて慌てて${you.name}の目を見た${falcon.name}を見て、${you.name}は一事を確信した。`,
      );
      await you.say_and_wait(
        `やっぱりね……次の中間、ちゃんと復習するって約束してくれたら、ファル子のお願いも聞くよ。`,
      );
      await falcon.say_and_wait(`えええ？ ${callname}、なんでわかったの。`);
      await era.printAndWait(
        `${falcon.name}の表情は作りものではなさそうだが、胸の奥がわずかに落ち着かない。`,
      );
      await you.say_and_wait(
        `このままじゃ、${falcon.name}は大丈夫かな。`,
        true,
      );
      await era.printAndWait(
        `これからの計画は、少し直したほうがいいかもしれない。`,
      );
      await you.say_and_wait(`この期間は、ゲリラライブを少し休もうか？`);
      await falcon.say_and_wait(`やだ！`);
      await era.printAndWait(`${falcon.name}の反応は、想像より激しかった。`);
      await falcon.say_and_wait(
        `ちがう！ そういう意味じゃない！ ファル子、ちゃんと復習する！ だから、やらなきゃいけないライブがあるの！`,
      );
      await era.printAndWait(
        `とりあえず${falcon.name}の約束は取れた。アイドル活動を大事にするファル子なら、少なくともこれから担任と鬼ごっこする心配はなさそうだ。`,
      );
      await falcon.say_and_wait(
        `ん——ファル子、何言おうとしたっけ……あ！ ${callname}？`,
      );
      await era.printAndWait(`${falcon.name}は${you.name}の目をまっすぐ見た。`);
      await falcon.say_and_wait(
        `ファル子、${callname}といっしょに見たい場所があるの。\n\n\n`,
      );
      await era.printAndWait(
        `${falcon.name}に手を引かれた${you.name}は、広い草地へ出た。`,
      );
      await era.printAndWait(
        `まわりに高い建物がないせいか、空がいつもより近く感じる。`,
      );
      await era.printAndWait(
        `夏が近いせいか、空気もいつもより湿っている。雲を抜ける陽射しが、草地に薄い霞をつくっていた。`,
      );
      await falcon.say_and_wait(`${callname}、ここどう思う？`);
      await era.printAndWait(
        `${falcon.name}は${you.name}の手首を揺らし、抑えきれない興奮で意見を求めた。`,
      );
      await era.printAndWait(
        `賑やかな都市圏でこんな草地を見つけるのに、${falcon.name}もずいぶん時間をかけたのだろう。`,
      );
      await era.printAndWait(
        `いや、よく考えれば、もともと大型モールにする予定の土地が、事情で放置されたのかもしれない。それから植物たちの楽園になった。`,
      );
      await falcon.say_and_wait(
        `んー、リハーサルの一環として、${callname}、ファル子のアシスタントやってくれる？`,
      );
      await you.say_and_wait(`ん？`);
      await era.printAndWait(
        `${falcon.name}の表情は太陽を背にしてよく見えない。だが小刻みに揺れる耳から察するに、${falcon.sex}はかなりの勇気を出して決めたのだろう。`,
      );
      await era.printAndWait(
        `言い訳なら、もっとうまくできたはずだ。だが${falcon.sex}のこの気持ちは、正直扱いにくい。`,
      );
      era.printButton(`これから、頼んでいいかな？ ファル子`, 1);
      await era.input();
      await falcon.say_and_wait(`${callname}が嫌なら仕方ないけど……え？`);
      await era.printAndWait(
        `${you.name}があっさり承諾するとは思っていなかったのか、${falcon.name}は一瞬固まり、それからそっと${you.name}の手を取った。`,
      );
      await falcon.say_and_wait(`光栄です⭐`);
      await era.printAndWait(
        `${falcon.sex}は妙に軽やかな声で${you.name}に答えた。`,
      );
      await era.printAndWait(
        `空はいつより地面に近く、青草と土の混ざった息に溶けていく。最初は${falcon.name}のリズムについていこうとしたが、一度大きくぶつかったあと、ついに耐えきれなくなった${you.name}は草地にどかりと座り込んだ。`,
      );
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(
        `目眩が残っていても、${falcon.name}の興奮と喜びははっきり伝わってきた。`,
      );
      await falcon.say_and_wait(`ごめん、ファル子、はしゃぎすぎた。`);
      await era.printAndWait(`細い腕に、そっと引き起こされた。`);
      era.printButton(`アイドルって、こんなに身近な存在なんだな。`, 1);
      await era.input();
      await era.printAndWait(`どくん。`);
      await era.printAndWait(
        `独り言のような満足とともに、幼いころ芝生を全力で走ったあと、そのまま寝転んだときのように芝生へ身を預けた。`,
      );
      await era.printAndWait(`恍惚のうちに、心配のない子ども時代へ戻る。`);
      await era.printAndWait(
        `激しく打つ心拍が、自分の存在を力強く証明している。`,
      );
      await era.printAndWait(`そうだ、この幸せを、このまま永遠に——`);
      await falcon.say_and_wait(
        `えっ！ ${callname}、激しい運動のあと芝生に寝ちゃダメ！`,
      );
      await era.printAndWait(`細い腕から伝わる強い力で、引き起こされた。`);
      await era.printAndWait(`ん、なんだか懐かしい。`);
      await era.printAndWait(
        `悲しみ、懐かしさ、そして釈然としたものが混ざった複雑な感情が胸に湧く。`,
      );
      await you.say_and_wait(
        `でも、いまの僕には、不幸せなところなんてない。`,
        true,
      );
      await era.printAndWait(`こんな日常が、ずっと続いてくれたら。`);
      await era.printAndWait(
        `無意識に空を見上げると、紺碧の空に積乱雲がいくつか、気ままに流れていた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_34: (() => {
    const title = '輝く大ステージへ、止まらず進め！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await falcon.say_and_wait(`……ふぅ⭐ありがとう、みんな！`);
      await era.printAndWait(
        `即興のメドレーが終わると、次々と湧く拍手が${falcon.name}への認めになった。`,
      );
      await era.printAndWait(
        `メイクデビュー後、レースでもステージでも輝いたファル子は、大きな注目を集めた。`,
      );
      await era.printAndWait(
        `ウマスタでは「${falcon.uma_sex_title}アイドル？！${falcon.name}⭐」が盛んに語られている。`,
      );
      await era.printAndWait(
        `それに続く川辺ライブの動画も、ウマスタでたくさんのファンを得た。`,
      );
      await you.say_and_wait(`このまま、進み続けよう！`, true);
      await era.printAndWait(
        `噂を聞いて集まった観客に囲まれ、川辺の草地で真剣に歌う${falcon.name}は、深夜まで一気に歌い続けた。`,
      );
      await you.say_and_wait(`お疲れ！`);
      await era.printAndWait(
        `最後のファンが満足して帰ったあと、${you.name}は${falcon.name}のほうへ歩いた。`,
      );
      await era.printAndWait(
        `こうなると見越して、寮長には外泊許可を申請してあった。`,
      );
      await era.printAndWait(
        `${you.name}が用意したタオルを${falcon.sex}に渡すと、汗に濡れた感触と妙な香りが神経を揺する。`,
      );
      await falcon.say_and_wait(`ありがとう⭐`);
      await era.printAndWait(
        `${you.name}は${falcon.name}と組んだステージを片付けながら、${falcon.name}の表情を見た。`,
      );
      await falcon.say_and_wait(`～～～♪`);
      await era.printAndWait(
        `ご機嫌な${falcon.name}は、まだステージの余韻に浸っている。`,
      );
      await you.say_and_wait(`お疲れ！ あとは僕が片付けるよ。`);
      await era.printAndWait(
        `後始末を全部引き受けようとした${you.name}は、しっぽで何度も叩かれた。`,
      );
      await falcon.say_and_wait(
        `こんなに応援してくれるファンがいると、動力が満タンになったみたいで、翌朝まで一気に歌えそう！`,
      );
      await falcon.say_and_wait(
        `片付けてるときでも、心臓がぱくぱく跳ねてるよ。`,
      );
      await falcon.say_and_wait(`……それに。`);
      await era.printAndWait(
        `ステージから抜け出せない${falcon.name}が、袖をそっと引っ張り、${you.name}の返事を待っている。`,
      );
      await you.say_and_wait(
        `ファル子のステージ、すごくよかった。ずっと見てるファンとして、本当に感動した！`,
      );
      await falcon.say_and_wait(`……ほんと！`);
      await era.printAndWait(
        `${falcon.name}は${you.name}の手をきゅっと握った。`,
      );
      await falcon.say_and_wait(`よかった！`);
      await era.printAndWait(
        `突然のぐぅ、という音がなければ、すべてがこんなに美しいままだった。`,
      );
      await falcon.say_and_wait(`……あはは、ファンがいなくてよかった。`);
      await era.printAndWait(
        `少し気まずい${falcon.name}は、恥ずかしそうに俯いた。`,
      );
      await you.say_and_wait(
        `そういえば、最近すごい人気のラーメン屋があるんだ。行ってみない？`,
      );
      await era.printAndWait(`${you.name}は時計を見た。いま急げば間に合う。`);
      await falcon.say_and_wait(`——いいね⭐ じゃあ今から行こ！`);
      await era.printAndWait(
        `${falcon.name}が${you.name}の手を掴んだ瞬間、${you.name}は嫌な予感がした。`,
      );
      await falcon.say_and_wait(`——3、1！ スタート！`);
      era.drawLine({ content: 'ラーメン店内' });
      await falcon.say_and_wait(
        `わ——あぁ！ 想像以上に美味しい！ ファル子、エネルギー満タン⭐`,
      );
      await era.printAndWait(
        `${you.name}は、${falcon.name}がウマスタに上げた、${you.name}の手を引き丁寧に並べたラーメン二杯との自撮りを見ていた。`,
      );
      await you.say_and_wait(`すごいな。`);
      await era.printAndWait(
        `配置の角度も、シャッターの間も、文句のつけようがない。`,
      );
      await you.say_and_wait(`ファル子、カメラマンの才能もあるんじゃない？`);
      await era.printAndWait(
        `画面の上を指がすばやく走る${falcon.name}が、ときどき微笑む。いまは邪魔しないほうがいい、と思った。`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}アイドルとは何か。たぶん、まだ答えは出ていない。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_40: (() => {
    const title = '夜来香';
    /**
     * 夜は光合成を止め、廃気を出す。自分がもう時代遅れで、埋められそうだという恐れから逃れるため。新しい潮流を追い、生存の恐怖を追い払おうとする。
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `ダートで${falcon.name}の名を広げるため、これから出走するレースの計画を立て始めた。`,
      );
      await era.printAndWait(`深夜 トレーナー寮\n`);
      await era.printAndWait(
        `メイクデビューで集めたデータを整理し直し、翌日の予定をメモに残した。`,
      );
      await era.printAndWait(`このまま休もうとした、そのとき——`);
      await era.printAndWait(`——ぶるぶるぶる`);
      await era.printAndWait(`携帯が震えた`);
      await era.printAndWait(`もう深夜だ。こんな時間に、出るべきか。`);
      era.printButton(`出る`, 1);
      era.printButton(`出ない`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `深夜のメッセージなら、出ない理由はないだろう。`,
        );
        await era.printAndWait(`そう思って${you.name}は携帯を開いた。`);
        await falcon.say_and_wait(`こんばんは！ ${callname}、寝てた？`);
        await era.printAndWait(
          `時刻はもう翌日の真夜中だと気づく。眠気に押されて、思わず欠伸が出た。`,
        );
        await era.printAndWait(
          `${falcon.name}がこんな時間に返す理由は何か。急ぎなら、なぜルームメイトに聞かず自分のところへ来るのか。`,
        );
        await era.printAndWait(`それとも、自分にしか解けないことなのか。`);
        await era.printAndWait(
          `言葉の調子を測りながら、${falcon.name}の動機を考えた。`,
        );
        await era.printAndWait(
          `メッセージを送って間もなく、携帯がまた震えた。`,
        );
        await falcon.say_and_wait(
          `たいしたことじゃないんだけど、ファル子、やっぱり${callname}に相談したほうがいいなって。`,
        );
        await era.printAndWait(
          `${falcon.name}は${you.name}を、頼れる大人だと思っているのだろうか。`,
        );
        await era.printAndWait(
          `光栄ではあるが……どう応えていいか、一瞬わからない。`,
        );
        era.printButton(`何があったか、教えて。`, 1);
        era.printButton(`用事なら、明日でいい`, 2);
        if ((await era.input()) === 1) {
          await you.say_and_wait(
            `ファル子が困ってるなら、いつでもどこでも相談していいよ。`,
          );
          await era.printAndWait(
            `返信を待つ時間は思ったより長かった。${you.name}が眠りに落ちそうになった直前、一気に十通以上のメッセージが届いた。`,
          );
          await falcon.say_and_wait(
            `……${callname}なら、たまにくよくよしてもいいよね？`,
          );
          await falcon.say_and_wait(
            `メイクデビューのあと、ファル子は新しいダートアイドルとしてファンが増えたの。`,
          );
          await falcon.say_and_wait(
            `おかげで毎朝のライブも、お客さんがぎっしり集まるようになった。`,
          );
          await falcon.say_and_wait(
            `でも昨日のライブ、顔見知りの人が何人かいなくなってた。`,
          );
          await falcon.say_and_wait(
            `ファンとのアンコールでも、「リアルアイドルよりバーチャルアイドルのほうがいい」って評価をもらっちゃって。`,
          );
          await falcon.say_and_wait(
            `ファル子、そんなに気にしてないよ⭐ でも、なんだかスースーするんだ。`,
          );
          await era.printAndWait(
            `${you.name}には、相手が何度も文面を直して、ようやく胸の高ぶりを押さえ込んだ様子が目に浮かんだ。`,
          );
          await era.printAndWait(
            `今の生徒の打鍵の速さは、昔の自分より速い、と感嘆しつつ、言葉を慎重に選んだ。`,
          );
          await era.printAndWait(
            `伝統的なアイドルには、バーチャルアイドルより確かな手触りがある。バーチャルアイドルの登場は大きな熱を呼んだ。`,
          );
          await era.printAndWait(
            `それでもバーチャルアイドルには、弱点がある。`,
          );
          await era.printAndWait(
            `いちばん具体的なのは、${falcon.sex}は選手としてステージに立てないことだ。`,
          );
          await era.printAndWait(
            `競走${falcon.uma_sex_title}の${falcon.name}は、レースでの活躍で、まだ観戦している観客に自分の物語を語れる。`,
          );
          await era.printAndWait(
            `技術が日進月歩のいまも、それだけで伝統アイドルの席は残せる。`,
          );
          await era.printAndWait(
            `適切な論点を選びながら、伝統アイドルの強みを考えた。`,
          );
          await falcon.say_and_wait(
            `ありがとう！ ${callname}！ ファル子、アイドルの道、もっと頑張るよ！`,
          );
          await era.printAndWait(
            `すぐにファル子は、嬉しそうなスタンプを返してきた。`,
          );
          await falcon.say_and_wait(
            `ファル子、早くトップアイドルになりたいな！`,
          );
          await era.printAndWait(
            `翌日、元気いっぱいの${falcon.name}は、応援してくれるファンに最高のステージを届けた。`,
          );
        }
      } else {
        await era.printAndWait(`もうこんな時間だ。用事なら明日にしよう。`);
        await era.printAndWait(
          `携帯をサイレントにして、${you.name}は再び眠りに落ちた。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の気配！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${you.name} と ${falcon.name} は、新しい一年を迎えた。`,
      );
      await era.printAndWait(`トレーナー室\n`);
      await falcon.say_and_wait(`あけましておめでとう！`);
      await era.printAndWait(
        `${you.name}がトレーナー室の扉を開けると、こたつのそばに${falcon.name}が座っていた。`,
      );
      era.printButton(`ファル子、あけましておめでとう！`, 1);
      await era.input();
      await era.printAndWait(`挨拶を返して、${you.name}も潜り込んだ。`);
      await era.printAndWait(
        `暖かいこたつが外の寒さを払う。新しい一年が何をもたらすか思い描いていると、${you.name}は${falcon.name}の目と出会い、${falcon.sex}は${you.name}に微笑んだ。`,
      );
      await you.say_and_wait(`年越しのニューイヤーライブ、どうだった？`);
      await era.printAndWait(
        `冷えた両手に少しずつ感覚が戻る。${you.name}はみかんを手に取り、皮を剥いた。`,
      );
      await falcon.say_and_wait(
        `昨日のステージ、想像以上にすごくて、ファル子、歌もダンスもたくさん学べたよ！`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}は話しながら、興奮ではみ出したしっぽを再びこたつの中へ押し込んだ。`,
      );
      await falcon.say_and_wait(`忘れるとこだった！`);
      await era.printAndWait(
        `${falcon.name}は制服のポケットをさらさらと探っている。`,
      );
      await falcon.say_and_wait(
        `プレゼント、何がいいか迷ったんだけど、大事な人には自分で作ったものを渡すのが正解だって、ふと思ったの。`,
      );
      await falcon.say_and_wait(
        `${callname}、この一年お疲れさま。新しい一年も、よろしくね！`,
      );
      await era.printAndWait(`ファル子は笑顔で年賀状を${you.name}に渡した。`);
      await you.say_and_wait(`じゃあ、ありがたくいただくよ。`);
      await era.printAndWait(
        `こたつの中から手を伸ばし、余熱の残る年賀状を受け取った。${falcon.name}が摘まんでいた角に、小さなふくらみがある。`,
      );
      await you.say_and_wait(`今年の予定は？`);
      await falcon.say_and_wait(
        `今年もファル子、かわいいところをファンのみんなに届けるよ！`,
      );
      await era.printAndWait(
        `言い終わるか終わらないかのうちに、${falcon.name}はものすごい速さで${you.name}の問いに答えた。`,
      );
      await you.say_and_wait(
        `いつも頑張ってるファル子は、いまは少し休んでもいいよ。`,
      );
      await era.printAndWait(
        `${you.name}は${falcon.name}の丸い頭を撫でた。${falcon.sex}は逆らわず、気持ちよさそうな顔をした。`,
      );
      await falcon.say_and_wait(`え？ ん——ファル子、もう子どもじゃないよ。`);
      await era.printAndWait(
        `口では抗議していても、こたつからまた逃げ出したしっぽは、興奮して上下に揺れていた。`,
      );
      await you.say_and_wait(`ファル子が少し疲れてるなら\n`);
      era.printButton(`アイドルの道は、続ける練習にある（全能力+10）`, 1);
      era.printButton(`どこか遊びに行く？（スキルPt+100）`, 2);
      era.printButton(`いっしょに映画、見る？（体力+600）`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `続けるトレーニングこそ卓越への鍵だ。${falcon.name}のアイドルの道に、気の緩みは許されない。`,
          );
          await you.say_and_wait(`今日はスピードを練習しよう。`);
          await era.printAndWait(
            `こたつの暖かさは名残惜しいが、それでも脚を引き抜いた。`,
          );
          await falcon.say_and_wait(`${callname}？`);
          await era.printAndWait(
            `いつの間にか${falcon.name}は運動着に着替えていた。`,
          );
          await era.printAndWait(
            `${falcon.name} が想像以上に元気なのは、${you.name} にとって安心だった。`,
          );
          await era.printAndWait(
            `それから、${you.name} と ${falcon.name} はいっしょにトレーニング場へ向かった。`,
          );
          break;
        case 2:
          await falcon.say_and_wait(`ん、どこがいいかな？`);
          await era.printAndWait(
            `${falcon.name}はポケットから携帯を出し、小さな声でつぶやきながら画面をすばやく滑らせた。`,
          );
          await era.printAndWait(
            `輝くファル子に比べて、こうして考え込むファル子はとても珍しい。`,
          );
          await falcon.say_and_wait(`お昼はここ行こ！`);
          await era.printAndWait(
            `${falcon.name} は画面を回して ${you.name} に見せた。近くで話題の人気タピオカ店だ。`,
          );
          await you.say_and_wait(
            `無意識に笑ってるファル子、いつもよりかわいいよ。`,
          );
          await era.printAndWait(
            `いつの間にか笑顔になっている${falcon.name}。`,
          );
          await falcon.say_and_wait(`あ……`);
          await era.printAndWait(`${falcon.name}の顔が急に赤くなった。`);
          await falcon.say_and_wait(`心臓、速い……`, true);
          await falcon.say_and_wait(
            `えええ？ ファル子、変な顔してなかったよね？`,
          );
          await era.printAndWait(
            `慌てて表情を整えるファル子は、右往左往しながらしっぽをこたつへ押し込んだ。`,
          );
          await falcon.say_and_wait(`${callname}！`);
          await era.printAndWait(
            `${you.name} の表情に気づいたのか、${falcon.name} はいつもの顔に戻った。`,
          );
          await era.printAndWait(
            `しばらくして二人は、お茶の店で楽しい一日を過ごした。`,
          );
          break;
        case 3:
          await falcon.say_and_wait(
            `${falcon.uma_sex_title}とトレーナーがいっしょに見る映画は——`,
          );
          await falcon.say_and_wait(`ファル子も、いい案ないかも？`);
          await era.printAndWait(`${you.name} にも、いい案はなかった。`);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '恋心！ ファル子の贈り物！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`——おはよう⭐！`);
      await falcon.say_and_wait(
        `そういえば今日はバレンタインだね——みんな、チョコもらった？`,
      );
      await falcon.say_and_wait(
        `もらってなくても大丈夫。だってこれから登場するのは、ファル子が用意したチョコ——。`,
      );
      await you.say_as_passer_by_and_wait(`ファン`, `ファル子！ ファル子！`);
      await falcon.say_and_wait(`これからもずっと、ファル子を応援してね♪`);
      await you.say_as_passer_by_and_wait(
        `ファンA`,
        `それ、ファル子の本命チョコ？`,
      );
      await falcon.say_and_wait(
        `ちがうよ～ ファル子はファンみんなを平等に大好きだから、チョコ屋さんでまとめて買ったやつだよ。`,
      );
      await falcon.say_and_wait(
        `それに箱の中には、ファル子特製のポストカードとサインも入ってる⭐！`,
      );
      await you.say_as_passer_by_and_wait(
        `ファンB`,
        `ファル子のバレンタイン記念に来られて、ほんとによかった！`,
      );
      await you.say_as_passer_by_and_wait(`ファン`, `ファル子！ ファル子！`);
      await era.printAndWait(`会場の空気が、さらに熱を帯びた。`);
      await falcon.say_and_wait(`これからも、たくさん応援してね♪`);
      await you.say_as_passer_by_and_wait(`ファン`, `おおおお！！！`);
      await falcon.say_and_wait(
        `そういうこと♪ 恥ずかしさと愛をのせた、ファル子のステージを見てね！`,
      );
      await era.printAndWait(
        `ファンの歓声の中、${falcon.name}のバレンタイン記念ライブは、いま始まったばかりだった。`,
      );
      await falcon.say_and_wait(
        `お疲れさま！ これからもずっとファル子を応援してね？`,
      );
      await era.printAndWait(
        `最後のファンを送り出したあと、少し離れたところで待っていた${you.name}が前へ出た。`,
      );
      await falcon.say_and_wait(`ファル子の歌、${callname}の心に届いた？`);
      era.printButton(`ちゃんと感じたよ。`, 1);
      await era.input();
      await falcon.say_and_wait(
        `……そういえば、${callname}に渡すものもあるの。`,
      );
      await era.printAndWait(
        `${falcon.name}は目立たない隅の段ボールから、きれいに包まれたギフトボックスを取り出した。`,
      );
      await falcon.say_and_wait(
        `これは${falcon.name}が担当の${falcon.uma_sex_title}として${callname}に贈る、本命……義理チョコ、だよ？`,
      );
      await era.printAndWait(
        `箱を開けると、ハート型のチョコと、隣にカードが入っていた。`,
      );
      await falcon.say_and_wait(`これからもずっと、ファル子を応援してね！`);
      await era.printAndWait(`${falcon.name}は甘い笑顔を見せた。`);
      era.printButton(`会場を片付けたら、いっしょにご飯行かない？`, 1);
      await era.input();
      await falcon.say_and_wait(
        `近くに、トレーナーと${falcon.uma_sex_title}のペアに割引があるお店があるんだって。行ってみよ！`,
      );
      await era.printAndWait(`${falcon.name}は${you.name}の手を引いた。`);
      await falcon.say_and_wait(
        `ファンがファル子に勧めてくれたお店なの。あっちにもファル子のファン、いるかな？ 楽しみ！`,
      );
      era.printButton(`きっといるよ。`, 1);
      await era.input();
      await falcon.say_and_wait(
        `そういえば、ファル子……ううん、ファル子、なんにも言ってないよ⭐。`,
      );
      await era.printAndWait(`二人は近くの人気店で、バレンタインを過ごした。`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_9: (() => {
    const title = '目標は皐月賞！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, suzuka, you, callname) => {
      await era.printAndWait(
        `枝に乗っていた厚い雪がようやく解け、静かなトレセンに再び鳴き声が訪れた。`,
      );
      await era.printAndWait(
        `${you.name}が暖かいトレーナー室で、これからのレースを考えていると。`,
      );
      await falcon.say_and_wait(`${callname}、ただいま！`);
      await suzuka.say_and_wait(`失礼します。`);
      await era.printAndWait(`トレーナー室に、二人の来客が来た。`);
      await you.say_and_wait(`今日のファル子も、元気いっぱいだね。`);
      await falcon.say_and_wait(
        `うん！ だって元気とかわいさこそ、${falcon.uma_sex_title}アイドルの違いだもん。`,
      );
      await era.printAndWait(
        `${falcon.name}はトレーナー室を一周したあとソファに飛び込み、サイレンススズカはソファの端に静かに座って、室内を何度も見回していた。`,
      );
      await falcon.say_and_wait(`ソファに寝ると、ほんと気持ちいい。`);
      await you.say_and_wait(`今日のアイドル活動は？`);
      await era.printAndWait(
        `${you.name}はプラスチックカップを二つ出し、コンビニで買った紅茶を淹れた。`,
      );
      await falcon.say_and_wait(`ん——ファル子、皐月賞に出たいの。`);
      await you.say_and_wait(`えっ？`);
      await suzuka.say_and_wait(`え？`);
      await era.printAndWait(`傍らのサイレンススズカは、そっと口を覆った。`);
      await falcon.say_and_wait(`ファル子、皐月賞に出たい！`);
      await era.printAndWait(
        `${falcon.name}はかなりの気勢で、トレーナー室の人たちに宣言した。`,
      );
      await suzuka.say_and_wait(
        `ファルコンさんが私を連れてきたのは、その件だったのですね。`,
      );
      await suzuka.say_and_wait(
        `でも、ファルコンさんはダートで活躍しているはずです。どうして芝に出たいのですか？`,
      );
      await era.printAndWait(
        `${you.name}も同じ疑問を持って、${falcon.sex}を見た。`,
      );
      await falcon.say_and_wait(
        `ファル子はずっとダートで走ってるから、ダートのファンはファル子のこと知ってるの⭐`,
      );
      await falcon.say_and_wait(
        `でも芝のほうのお客さんは、まだファル子を知らないみたい。だから芝に出て、芝を見てるファンにもファル子を応援してもらいたいの！`,
      );
      era.printButton(`それなら、僕も賛成だ。`, 1);
      await era.input();
      await era.printAndWait(
        `芝側の観客にも、こんなにかわいい${falcon.uma_sex_title}を知ってもらえれば、ファル子のアイドルの道にも大きな力になる。`,
      );
      await suzuka.say_and_wait(
        `なるほど。それで、芝のコツを教えてほしい、ということでしょうか。`,
      );
      await falcon.say_and_wait(`だから『異次元の逃亡者』を貸して！`);
      await suzuka.say_and_wait(`……え？`);
      await falcon.say_and_wait(
        `いっそ皐月賞のときはファル子が異次元の逃亡者って名乗って、スズカちゃんから力をもらう！`,
      );
      await era.printAndWait(
        `サイレンススズカだけでなく、${you.name}も${falcon.name}の脱線に頭を抱えた。`,
      );
      await suzuka.say_and_wait(
        `ファルコンさん、他人の称号をかぶって変なことはしないでください！`,
      );
      await era.printAndWait(`サイレンススズカが怒った。\n`);
      era.printButton(`すまない。あとでファル子によく言っておく。`, 1);
      era.printButton(`芝のコツを、教えてもらえますか？`, 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `どんな理由であれ、他人の名をかぶるのはよくない。`,
        );
        await era.printAndWait(`このままでは、いらない争いを呼びかねない。`);
        await suzuka.say_and_wait(`いえ、ご心配には及びません。`);
        await suzuka.say_and_wait(
          `ファルコンさんは元気で飛び跳ねるタイプのようですが、他人の評判を悪用する人ではありません。`,
        );
        await suzuka.say_and_wait(
          `逃げウマ姉妹の活動でファルコンさんのペースについていくのは、それでも大変ですけれど。`,
        );
        await suzuka.say_and_wait(
          `ですが、自分の身分で道を歩いてください。心から認めていない称号は、理想の結末をもたらしません。`,
        );
        await falcon.say_and_wait(`ええ？ スズカちゃん、怒ると怖い！`);
        await you.say_and_wait(`そういうことか。`);
        await era.printAndWait(`${you.name}は再び席に座った。`);
        await suzuka.say_and_wait(
          `称号は貸せませんが、芝のコツはちゃんと教えます。`,
        );
        await era.printAndWait(
          `その後の三時間、サイレンススズカから芝の知識を教わった。`,
        );
      } else {
        await suzuka.say_and_wait(`それだけなら、もちろん構いません。`);
        await era.printAndWait(`サイレンススズカは、もう怒っていないようだ？`);
        await suzuka.say_and_wait(
          `心から認めていない称号は、理想の結末をもたらしません。脱線しがちなファルコンさん、そこは覚えておいてください。`,
        );
        await suzuka.say_and_wait(`それに\n`);
        await suzuka.say_and_wait(
          `でも、前方の景色は他の人には譲りません！ そこはファルコンさん、胸に刻んでください。`,
        );
        await falcon.say_and_wait(`ええ？ スズカちゃん、怒ると怖い！`);
        await era.printAndWait(`……それが本題だったのか。`);
        await you.say_and_wait(
          `これから${falcon.name}は、かなり大変そうだ。`,
          true,
        );
        await era.printAndWait(
          `${falcon.name}は助けを求める目で${you.name}を見た。`,
        );
        await you.say_and_wait(`（目をそらす）`, true);
        era.drawLine();
        await suzuka.say_and_wait(
          `もう八時間練習していますが、ファルコンさん、まだこんなに元気なのですか。`,
        );
        await falcon.say_and_wait(`耐久ライブなら、まだ限界じゃないよ！`);
        await suzuka.say_and_wait(`それなら、続けましょう。`);
        await era.printAndWait(`その後の芝特訓は、門限まで続いた。`);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_47_15: (() => {
    const title = '目指せ！ 皐月賞！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`トレーニング場\n`);
      await falcon.say_and_wait(`はぁ、はぁ……`);
      await you.say_and_wait(`お疲れ。`);
      await falcon.say_and_wait(`${callname}、ファル子、前より速くなった？`);
      await era.printAndWait(`${you.name} はストップウォッチを見た。`);
      await you.say_and_wait(`……勝つには、まだ距離がある。`);
      await era.printAndWait(
        `サイレンススズカに教わった走りのコツはあるが、ダートに慣れた${falcon.name}には、それでもきつい。`,
      );
      await falcon.say_and_wait(`……${callname}？`);
      await era.printAndWait(
        `${falcon.name}は${you.name}の表情から何かを読み取ったようで、水を飲みながら${you.name}の反応を伺っている。`,
      );
      await you.say_and_wait(`少し大変だけど、練習を重ねれば乗り越えられる。`);
      await era.printAndWait(
        `${you.name}はフォルダを置き、真剣に${falcon.sex}を見た。`,
      );
      await falcon.say_and_wait(`${callname}、その顔、怪しいよ？`);
      await falcon.say_and_wait(`もしかして、もう好きな人がいるの？`);
      await era.printAndWait(
        `なぜその結論になったのかはわからないが、なぜか安心する。`,
      );
      await you.say_and_wait(`ちょっと疲れただけ。少し休めば大丈夫。`);
      await falcon.say_and_wait(`……ほんと？`);
      await era.printAndWait(
        `その疑いはもう払えないらしい。ますます首を傾げる${falcon.name}を見て、${you.name}は新しい話題を探した。`,
      );
      await you.say_and_wait(
        `それより、ファル子、新曲を作るって決めたこと、応援してくれてるみんなに伝えるんじゃなかった？`,
      );
      await you.say_and_wait(`急がないと、みんな待ちくたびれるよ。`);
      await falcon.say_and_wait(`え？ それなら急がなきゃ。`);
      await era.printAndWait(
        `口ではそう言いながら、${falcon.sex}は動かない。しっぽだけがぱたぱたと座席を叩いている。`,
      );
      await you.say_and_wait(`急がないと、みんな待ちくたびれるよ。`);
      await falcon.say_and_wait(`わかった～`);
      await era.printAndWait(
        `聞こえなかったのかと思って繰り返したが、${falcon.name}はまだ座っている。`,
      );
      await era.printAndWait(
        `何を言おうか考えていると、${falcon.name}が立ち上がった。`,
      );
      await falcon.say_and_wait(`じゃあ、行ってくるね～`);
      await falcon.say_and_wait(`ざんねん。`, true);
      await era.printAndWait(
        `それから${falcon.name}は夕日を浴びて、更衣室へ走っていった。`,
      );
      era.drawLine({ content: 'ライブ終了後' });
      await falcon.say_and_wait(`ありがとう⭐ 今日のライブも大好評だったね⭐`);
      await you.say_as_passer_by_and_wait(`ファン`, `ファル子！ ファル子！`);
      await era.printAndWait(`まわりから、まばらな拍手が聞こえた。`);
      await falcon.say_and_wait(
        `じゃあファル子、もう一曲歌うね♪——ずっと応援してくれる、あなたへ⭐`,
      );
      await era.printAndWait(`今日のステージも大成功だった。`);
      await era.printAndWait(
        `見物の人波がゆっくり散ったあと、遠くから見ていた${you.name}が${falcon.name}のほうへ歩いた。`,
      );
      await you.say_and_wait(
        `お疲れ。今日のステージも、すごく受けがよかった。`,
      );
      await era.printAndWait(
        `いつでもステージを気にかける${falcon.teen_sex_title}は、本当にかわいい。`,
      );
      await falcon.say_and_wait(
        `そんなことないよ！ ${callname}が発掘してくれなかったら、ファル子、いまごろステージで悩んでたよ。`,
      );
      await era.printAndWait(
        `自分は果たすべき義務をしただけだ……そう言いたかったが、${you.name}は口を閉じた。`,
      );
      await falcon.say_and_wait(
        `今日のライブも終わったし、次は皐月賞に全力で向かおう！`,
      );
      await era.printAndWait(
        `${falcon.name}の紙袋を受け取ると、トレセンへ戻る道を黙って歩いた。`,
      );
      await falcon.print_and_wait(`手の中の紙袋は、なぜこんなに重いのだろう。`);
      await falcon.print_and_wait(
        `興奮しすぎた頭は、紙コップの中でぐるぐる回る黒い塊のようだった。`,
      );
      await you.say_as_passer_by_and_wait(`幼い声`, `すみません！`);
      await era.printAndWait(
        `声は後ろから来た。${you.name}と${falcon.name}は目を合わせ、いっしょに振り返った。`,
      );
      await you.say_as_passer_by_and_wait(
        `幼い声`,
        `${falcon.name}お姉さんのステージ、すごくよかった！ わたしもファル子お姉さんみたいなアイドルになりたい！`,
      );
      await era.printAndWait(
        `中等部くらいの小さな${falcon.uma_sex_title}で、${falcon.name}のファンらしい。`,
      );
      await falcon.say_and_wait(
        `ありがとう！ 明日もファル子を応援してね、またこの場所で⭐`,
      );
      await era.printAndWait(
        `アイドルモードに戻った${falcon.name}は、嬉しそうに両手を振った。`,
      );
      await you.say_as_passer_by_and_wait(
        `幼い声`,
        `どうしたら、ファル子お姉さんみたいな大アイドルになれますか？`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}は、二人についてもっと知りたいらしい。`,
      );
      await falcon.say_and_wait(
        `トップの${falcon.uma_sex_title}アイドルになる目標を持って、その目標をしっかり覚えて、それから動き出せばいいよ！`,
      );
      await era.printAndWait(
        `なるほど、と小さな${falcon.uma_sex_title}はうなずいた。`,
      );
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `となりの人は、ファル子お姉さんにとって大事な人ですよね？`,
      );
      await falcon.say_and_wait(`すっごく大事な人だよ？`);
      await era.printAndWait(
        `${falcon.name}は抑えきれない上機嫌で、${falcon.sex}の疑問に答えた。`,
      );
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `ファンのみんなより大事なんですか？`,
      );
      await falcon.say_and_wait(`え？ それは。`);
      await era.printAndWait(`${falcon.name}は珍しく止まり、それから。`);
      era.printButton(`ファンより大事な人だよ`, 1);
      era.printButton(`ファンとは違う意味で、同じくらい大事な人`, 2);
      if ((await era.input()) === 1) {
        await you.say_as_passer_by_and_wait(
          `小さな${falcon.uma_sex_title}`,
          `ファンより大事って、どういうこと？`,
        );
        await era.printAndWait(
          `トレーニングでも日常でも、指導してくれる人だ。`,
        );
      } else {
        await you.say_as_passer_by_and_wait(
          `小さな${falcon.uma_sex_title}`,
          `違う意味って、どういうこと？`,
        );
        await era.printAndWait(
          `トレーニングでも日常でも、指導してくれる人だ。`,
        );
      }
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `トレーナーさんだったんだ！`,
      );
      await era.printAndWait(
        `嬉しそうにまわりを回っていた小さな${falcon.uma_sex_title}が、突然手を掴んだ。`,
      );
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `わたしが入ったら、お兄さんはわたしの専属トレーナーになってくれますか？`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}を育てるには理事長への申請が要り、それから丸三年のトレーニングを担う。`,
      );
      await era.printAndWait(`正直、かなりきつい。`);
      await you.say_and_wait(
        `トレセンに入ったら、僕より優秀なトレーナーに出会えるよ。`,
      );
      await era.printAndWait(`なぜか、背中がひやりとする。`);
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `わかりました！`,
      );
      await era.printAndWait(
        `礼を述べると、小さな${falcon.uma_sex_title}はすばやく去っていった。`,
      );
      await you.say_and_wait(`ファル子——`);
      await falcon.say_and_wait(`なんにもないよ⭐`);
      await era.printAndWait(
        `${falcon.name}は、何もなかったようにこちらを見つめていた。`,
      );
      await you.say_and_wait(`これは、ややこしい`, true);
      await era.printAndWait(
        `その後の埋め合わせに、次の休日は${falcon.name}と出かけると約束した。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_sats_sho: (() => {
    const title = '皐月賞で輝くファル子';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`記者会見で皐月賞への出走を発表したあと。`);
      await era.printAndWait(
        `${falcon.name}が適性外の舞台で勝てるのか、という疑いはある。だがそれ以上に、ダートで活躍する${falcon.name}がどんな元気を見せるかへの期待が大きい。`,
      );
      await era.printAndWait(`控え室`);
      await falcon.say_and_wait(`ふんふん♪ これでファル子、準備かんりょう！`);
      await era.printAndWait(
        `${falcon.name}は姿見の前で、勝負服をもう一度確かめた。`,
      );
      await falcon.say_and_wait(`${callname}、どう？`);
      era.printButton(`まぶしいよ！`, 1);
      await era.input();
      await falcon.say_and_wait(`こうしてファンの視線を、全部——奪っちゃう！`);
      await falcon.say_and_wait(
        `……そういえば、ファル子がこの勝負服を着るのも初めてだね……`,
      );
      await era.printAndWait(
        `${falcon.name}は急に照れくさそうに、${you.name} と合わせていた目をそらした。`,
      );
      await falcon.say_and_wait(`……なんでもない⭐`);
      await era.printAndWait(`それから何か隠すように、口を覆って笑った。`);
      await falcon.say_and_wait(`今度こそ、出発だよ！`);
      await era.printAndWait(
        `${falcon.name}はドアノブを握り、開けようとした。`,
      );
      era.printButton(
        `僕の視線を奪ったみたいに、レース場のみんなの視線も全部奪ってこい！`,
        1,
      );
      await era.input();
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `${falcon.name}はまばたきして、控え室の扉を閉めた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '皐月賞後・輝く大ステージ';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, suzuka, you, callname) => {
      await falcon.say_and_wait(`ほんと……`);
      await falcon.say_and_wait(
        `${falcon.name}……ファル子、ほんとに勝った！ Lucky！ Victory⭐`,
      );
      await era.printAndWait(
        `${you.name}も掲示板の文字をじっと見つめた。目の前の事実が夢のように壊れ、この非現実のまま目が覚めるのではないかと恐れる。だが覚めても、それはいい夢だろう。`,
      );
      await era.printAndWait(
        `それでも${falcon.name}の着順は、${you.name}がどう動いても変わらない。木からリンゴを落とす重力のように、安心できる。`,
      );
      await falcon.say_and_wait(`夢じゃないよね！ ${callname}！`);
      await era.printAndWait(`${falcon.name}も、この歓喜からまだ戻れていない`);
      era.printButton(`次は${falcon.name}が夢見た……芝のステージだ！`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は、自分で聞いても驚くほど鋭く震える声を出した。`,
      );
      await falcon.say_and_wait(`はい！`);
      await era.printAndWait(
        `${falcon.name}はやっと気づき、ウィンナーズステージの準備を急いだ。`,
      );
      await era.printAndWait(
        `${you.name}は席に寄りかかり、長いあいだ我に返らなかった。`,
      );
      era.drawLine({ content: 'ウィンナーズステージ終了後' });
      await you.say_and_wait(`お疲れ。`);
      await era.printAndWait(
        `${you.name}は用意したタオルを、湯気を立てている${falcon.name}に渡した。`,
      );
      await era.printAndWait(
        `びしょ濡れの${falcon.name}は疲れ切っているのに、${falcon.sex}の目は光っていた。`,
      );
      await you.say_and_wait(`皐月賞のステージ、どうだった？`);
      await falcon.say_and_wait(`想像より広くて、想像よりキラキラしてた！`);
      await falcon.say_and_wait(
        `それに、ファル子、こんなに人がいるステージで歌ったことなかった。走ったステージの倍もある場所に立つなんて。`,
      );
      await era.printAndWait(
        `タオルで髪についた汗を拭きながら、${falcon.name}は${you.name}を見ていた。`,
      );
      await falcon.say_and_wait(
        `あんなにたくさんのお客さんの視線の中だと、ファル子、力で満たされるみたい……${callname}も、みんなに見られるあの感じがわかったら、ファル子の言いたいことがわかると思う。`,
      );
      await era.printAndWait(
        `${falcon.name}は少し名残惜しそうに手を止め、何かを見ているようで、いいことを思い出すときのように無意識にタオルを擦っていた。`,
      );
      await suzuka.say_and_wait(`失礼します。`);
      await era.printAndWait(`サイレンススズカが控え室の扉を開けた。`);
      await suzuka.say_and_wait(`え？ あとで来たほうがよかったでしょうか。`);
      await era.printAndWait(
        `${falcon.name}は無意識に動きを止め、サイレンススズカは${you.name}を見て、次の言葉を待っているようだった。`,
      );
      await you.say_and_wait(
        `いいえ、むしろちょうどいい。ありがとう、スズカさん。`,
      );
      await you.say_and_wait(`前の芝特訓、本当に助かった。`);
      await era.printAndWait(`${you.name}は心から${falcon.sex}に礼を言った。`);
      await falcon.say_and_wait(
        `ありがとう、スズカちゃん。ファル子が勝てたのは、あなたのおかげだよ⭐`,
      );
      await suzuka.say_and_wait(`ス……スズカちゃん？`);
      await era.printAndWait(
        `いつの間にか、${falcon.name}はいつものモードに戻っていた。`,
      );
      await you.say_and_wait(
        `今回の勝利の功労者として、スズカ${suzuka.adult_sex_title}、いっしょに勝利を祝いませんか？`,
      );
      await era.printAndWait(
        `さっきの曖昧な空気は横に置き、${you.name}はサイレンススズカに提案した。`,
      );
      await suzuka.say_and_wait(
        `……${callname}がそこまで言うなら。ありがとうございます。`,
      );
      await era.printAndWait(
        `それから一行は、近くの有名な洋食店で勝利の味を味わった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_lose: (() => {
    const title = '皐月賞後・憧れたステージの真ん中';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`控え室`);
      era.printButton(`ステージお疲れ、ファル子。`, 1);
      await era.input();
      await era.printAndWait(
        `皐月賞では勝てなかったが、${falcon.name}は満足そうだった。`,
      );
      await falcon.say_and_wait(`皐月賞のステージ、想像より大きかった……`);
      await falcon.say_and_wait(
        `いつものステージの倍もあるし、まぶしいフラッシュ、目に入るのは全部こちらを見てるお客さん。`,
      );
      await falcon.say_and_wait(
        `でも、いちばん輝いてるのはステージの真ん中だよね……次は、ファル子が絶対に立つ！`,
      );
      await falcon.say_and_wait(`ファル子、ファイト！`);
      await you.say_and_wait(
        `バカ、皐月賞はクラシック級の競走${falcon.uma_sex_title}しか出られないレースだよ！`,
      );
      await era.printAndWait(
        `${you.name}は${falcon.name}の小さな頭を、軽く叩いた。`,
      );
      await falcon.say_and_wait(`えへ⭐`);
      await era.printAndWait(`舌を出した${falcon.name}は、意外とかわいい。`);
      await you.say_and_wait(`かわいいな。`, true);
      await you.say_and_wait(
        `コホン！ 次はファル子、ジャパンダートダービーをしっかり準備しよう。`,
      );
      await falcon.say_and_wait(`うん⭐`);
      await you.say_and_wait(`でもアイドルのステージも、気を抜くなよ！`);
      await falcon.say_and_wait(`はい⭐`);
      await you.say_and_wait(`この勢いのまま、前へ進もう！`);
      await falcon.say_and_wait(
        `最強の${falcon.uma_sex_title}アイドル——${
          falcon.name
        }⭐ 次は絶対、キラキラしてるところをみんなに見せる！`,
      );
      await era.printAndWait(`${falcon.name}は元気な声で答えた。`);
      await era.printAndWait(`${you.name}は、次のレースが楽しみになってきた。`);
    };
    f.title = title;
    return f;
  })(),
  we_47_15: (() => {
    const title = 'とっくに気づいていた恋心';
    /**
     * 既定では皐月賞終了後
     * ライブのあと学校へ戻るとリボンが一本足りない。急いで探すが門限が近い。選択
     * 落とした場所へ行っても見つからない。絶望していると、駆けつけてきた小さなウマ娘が拾っていた。トレーナーとの関係を聞かれる
     * スマートファルコンは、トレーナーへの気持ちがアイドル活動を大きく傷つけるかもしれないと気づく
     * 不安に落ちる
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`寮\n`);
      await falcon.say_and_wait(`${callname}、寮まで送ってくれてありがとう！`);
      await falcon.print_and_wait(
        `${you.name}が角で消えていくのを見送り、微笑んだ${falcon.name}も踵を返した。`,
      );
      await falcon.print_and_wait(
        `レースに出つつ、ずっと応援してくれる人の願いも叶えたい。その均衡を保つため、${you.name}は${falcon.name}を説得して、出走する週はゲリラライブの時間を減らした。`,
      );
      await falcon.print_and_wait(
        `貴重なステージ時間を大切にするため、${falcon.name}はいつにも増して輝いていた。`,
      );
      await falcon.say_and_wait(`……トレーナー${falcon.uma_sex_title}。`);
      await falcon.print_and_wait(
        `起床——授業——トレーニング——ライブ——寮。流れのように静かな日常。`,
      );
      await falcon.print_and_wait(
        `${callname}が道の角で消えるのを見送るのも、もう日常の一部だ。`,
      );
      await falcon.print_and_wait(
        `もっとたくさんの人を笑顔にするため、倒れるまでアイドル活動を続ける。だから毎日は充実している。`,
      );
      await falcon.print_and_wait(
        `ああ、でもライブが終わると、脚が動かなくなることが増えてきた。`,
      );
      await falcon.print_and_wait(
        `アイドル修行がまだ浅いせいかな、と自分に聞いてみる。`,
      );
      await falcon.print_and_wait(
        `もう一人の自分は首を振り、「ファンにファル子の弱いところは見せられない」と言って、後ろ向きな考えを捨てた。`,
      );
      await falcon.print_and_wait(
        `前はメイド服を試したし、今度は勝負服でライブしてみようかな。`,
      );
      await falcon.print_and_wait(
        `だってファル子のファンも、いろいろあってレース場に入れないことが多いから。`,
      );
      await falcon.print_and_wait(
        `レース開始が平日だから見に来られなかったのか……そう思いたいけど、やっぱり芝のほうのレースのほうが人目を集めるよね。`,
      );
      await falcon.print_and_wait(
        `皐月賞のステージはもっと大きく、出る${falcon.uma_sex_title}も強い。ファル子が出るダートよりずっと広い観客席で見るファンも、もっと多い。`,
      );
      await falcon.print_and_wait(`そういえば、ちょっと悔しいな——`);
      await falcon.print_and_wait(
        `決めた！ ファル子はいちばん輝く姿で、みんなに幸せを届ける！`,
      );
      await falcon.print_and_wait(
        `安心させるポーズ！ 視線を奪うステップ！ それからダイヤみたいにキラキラの勝負服！`,
      );
      await falcon.print_and_wait(
        `ああ——そういえば髪型も直したほうがいいかも。`,
      );
      era.printButton(`え？`, 1);
      await era.input();
      await falcon.print_and_wait(
        `シニヨンで留めていた髪が、やっと解放されたみたいに、ポニーテールのゴムが切れた。`,
      );
      await falcon.say_and_wait(`やっと限界だったんだね。`);
      await falcon.print_and_wait(
        `独り言のように呟く${falcon.name}は、無意識に前髪のリボンを撫でた。`,
      );
      await falcon.print_and_wait(
        `経費を抑えるために中古で買ったゴムは、こんな激しい動きには耐えられなかった。`,
      );
      await falcon.print_and_wait(`いち、に……さん？`);
      await falcon.print_and_wait(
        `胸に不安が走る。リボンを外して、何度も無駄に数えた。`,
      );
      await falcon.say_and_wait(`急いで、帰ってきた道を探さなきゃ。`, true);
      await falcon.print_and_wait(
        `あれはいちばん大事な、優しいお母さんが手作りしてくれた、最初の勝負服。`,
      );
      await falcon.say_and_wait(`でも、時間。`, true);
      await falcon.print_and_wait(
        `時針と分針のあいだは、パフェのイチゴすら挟めなさそうだ。`,
      );
      await falcon.print_and_wait(
        `門限を破ったら、あとでたづなさんに怒られるだろうな。`,
      );
      await falcon.print_and_wait(
        `先にキセキさんに言っておけば、少し融通は利くかな？`,
      );
      await falcon.say_and_wait(`ファル子！ ファイト！`);
      await falcon.print_and_wait(`気づいたときには、もう走っていた。`);
      await falcon.print_and_wait(`ああ、いつもこう。`);
      await falcon.print_and_wait(
        `光の輪をぱたぱたさせる天使ファル子は溜息をつき、横の悪魔ファル子は嬉しそうに応援していた。`,
      );
      await falcon.say_and_wait(
        `いまのピンチに全力で向かう！ あとのことは明日のファル子に任せる！ それがファル子のアイドル道！`,
      );
      await falcon.print_and_wait(
        `進む方向を決めた${falcon.name}は、隅も見逃さず全速力で走った。`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `トレセンの門、商店街の小道、目的地の川辺の草地まで。どこにもリボンはない。`,
      );
      await falcon.print_and_wait(
        `リボンが羽根を生やして、ぱたぱた飛んでいったみたい。`,
      );
      await falcon.print_and_wait(
        `ああ、親愛なるリボンさん、エデンでの暮らしがうまくいきますように。`,
      );
      await falcon.print_and_wait(
        `散らかった考えを振り払い、ファル子はもう一つ気づいた。`,
      );
      await falcon.say_and_wait(`門限から、もう三十分経ってる！ どうしよう！`);
      await falcon.print_and_wait(
        `事情を知ったトレセンは、いまごろファル子を焦って探しているだろう。`,
      );
      await falcon.print_and_wait(`悔しい。空手で帰るなんて、ほんとに悔しい。`);
      await falcon.say_and_wait(
        `ちがう、前向きに考えれば、明朝までリボンを探す時間はたっぷりある！`,
        true,
      );
      await falcon.print_and_wait(
        `焦る心もようやく落ち着き、落としたかもしれない場所を思い出した。`,
      );
      await falcon.print_and_wait(`ライブ前、リボンは額にちゃんとあった。`);
      await falcon.print_and_wait(
        `アンコールで左端と右端の客を両方見ようとして、前に見た人気アイドルのカッコいい回転を真似たら、視線がひっくり返った。`,
      );
      await falcon.print_and_wait(`たぶん、あのとき落ちたんだ。`);
      await falcon.print_and_wait(
        `誰かが拾っていたら、ファル子が見つける見込みは薄い。`,
      );
      await falcon.print_and_wait(`ん——普段、数学の授業で居眠りしてなければ。`);
      await you.say_as_passer_by_and_wait(
        `？？？`,
        `そっち、ファル子お姉さん？`,
      );
      await falcon.say_and_wait(`ええええ？`);
      await falcon.print_and_wait(
        `突然の声に${falcon.name}の心臓が一拍止まり、しっぽの毛まで硬くなった。`,
      );
      await falcon.print_and_wait(
        `深夜の小径から聞こえる幼い声と、川辺へゆっくり近づく黒い影。`,
      );
      await falcon.say_and_wait(
        `これって、トレーナーが言ってた、言うこと聞かない${falcon.uma_sex_title}を食べる${falcon.uma_sex_title}キラー？`,
        true,
      );
      await falcon.say_and_wait(
        `ファ——ファル子、ファル子は美味しくないよあああ！`,
      );
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `え？`,
      );
      await falcon.print_and_wait(`どん！`);
      await falcon.print_and_wait(`影の横の植え込みが、どさりと倒れた。`);
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `やっぱりファル子お姉さんだ！`,
      );
      await falcon.print_and_wait(
        `ちっとも怯えていない小さな${falcon.uma_sex_title}が、興奮して寄ってきた。`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `リボンをそっとポケットへしまい、目の前で、リボンを返すためにこっそり出てきた${falcon.teen_sex_title}を見た。`,
      );
      await falcon.print_and_wait(`取り戻した安心は、すぐ自責に覆われた。`);
      await falcon.print_and_wait(
        `リボンのために門限を破らなかったら、ファル子はきっと自分を責めていただろう。`,
      );
      await falcon.print_and_wait(
        `褒められたい顔の${falcon.teen_sex_title}を見て、少なくともファル子は責任を持って送り届ける。`,
      );
      await falcon.print_and_wait(
        `${falcon.name}はしゃがみ、${falcon.teen_sex_title}と目線を揃えようとした。`,
      );
      await falcon.say_and_wait(
        `ありがとう。ファル子、みんなのために${falcon.uma_sex_title}アイドルになれるよう頑張るよ。`,
      );
      await falcon.print_and_wait(
        `トレーナー${falcon.uma_sex_title}の撫で方を真似て、できるだけ優しく笑った。`,
      );
      await falcon.say_and_wait(`ごめん、ファル子、まだ未熟だね。`, true);
      await falcon.print_and_wait(
        `心の中の${callname}に謝ると、相手は苦笑して首を振った。`,
      );
      await falcon.say_and_wait(`ファル子お姉さんが送っていくね。`);
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `え？ ほんと！ ファル子お姉さんが送ってくれるの！`,
      );
      await falcon.print_and_wait(
        `目の前の${falcon.teen_sex_title}は、誰かの役に立てたことが嬉しくて跳ねている。ファル子がしてきたことと同じだ。`,
      );
      await falcon.print_and_wait(
        `${callname}にどれだけ迷惑をかけたか、急に気づいたとき、背中が熱くなった。`,
      );
      await falcon.say_and_wait(`いっしょに、いちばん輝くステージへ行こう！`);
      await falcon.print_and_wait(
        `傷んだリボンを大切にしまい、${falcon.teen_sex_title}の小さな手をそっと握った。`,
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `送ってくれてありがとう！`,
      );
      await falcon.print_and_wait(
        `マンションの玄関で、小さな${falcon.uma_sex_title}が${falcon.name}にお礼を言った。`,
      );
      await falcon.say_and_wait(`ううん、こっちこそ。`);
      await falcon.print_and_wait(`苦笑して、礼を返した。`);
      await falcon.print_and_wait(
        `小さな${falcon.uma_sex_title}の両親はよく出張で、毎日${falcon.sex}は一人で登下校している。`,
      );
      await falcon.print_and_wait(
        `毎日迎えに行こうかと聞いたが、人に迷惑はかけられない、と断られた。`,
      );
      await falcon.print_and_wait(
        `その意地は、小さいころのファル子に似ている。`,
      );
      await falcon.say_and_wait(
        `道で約束したとおり、もうこんな危ないことはしないで！ ファル子との約束だよ？`,
      );
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `わかった！`,
      );
      await falcon.print_and_wait(
        `門をくぐろうとした${falcon.uma_sex_title}は何かを思い出したように振り返り、${falcon.name}を見た。`,
      );
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `そういえば、ファル子お姉さん、なんで顔赤いの？`,
      );
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `${callname}のこと、考えてた？`,
      );
      await falcon.print_and_wait(`ちがう、そういう関係じゃない。`);
      await falcon.print_and_wait(
        `そう言い返そうとして、どうしても口から出ない。`,
      );
      await falcon.print_and_wait(
        `卵を丸ごと飲み込んだみたいに、言葉が喉で止まっていた。`,
      );
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}`,
        `明日も、ファル子お姉さんのステージ見に行くね！`,
      );
      await falcon.print_and_wait(`扉が目の前で、ゆっくり閉まった。`);
      await falcon.print_and_wait(
        `小さな${falcon.uma_sex_title}にまで、もう見抜かれてる？`,
      );
      await falcon.print_and_wait(
        `${falcon.uma_sex_title}アイドルの理想を叶えるまでは、人前では少し距離を置いたほうがいいかな。`,
      );
      await falcon.print_and_wait(`でも\n`);
      await falcon.say_and_wait(
        `ファル子、${callname} にこんなに迷惑かけてたの？`,
      );
      await falcon.print_and_wait(
        `翌日、小さな${falcon.uma_sex_title}の一家がトレセンへ、${falcon.name}が送り届けてくれた礼を伝えた。そのせいで${you.name}はたづなさんにきつく叱られた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_21: (() => {
    const title = 'トレーナー室の花';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      era.printButton(`やっと終わった。`, 1);
      await era.input();
      await era.printAndWait(
        `最後の書類を片付けて、${you.name}は肩の荷が下りたように息をついた。`,
      );
      await you.say_and_wait(`トレーナーって、本当に大変だな`, true);
      await era.printAndWait(
        `いつの間にかトレーナー室へ金色の夕日がそっと訪れていた。窓の外の熱いトレーニングの声が、${you.name}にトレーナー養成学校の日々を思い出させる。`,
      );
      await era.printAndWait(
        `ダートを駆ける${falcon.uma_sex_title}アイドル——${falcon.name}。まだ実感はないが、いまやダートの新星だ。`,
      );
      await era.printAndWait(
        `だが、${falcon.name}のファン層が日増しに大きくなり、予定表の進みもどんどん遅くなっていくのを見ると。`,
      );
      await era.printAndWait(`なぜか、心の隅が空いてしまう。`);
      await you.say_and_wait(
        `……トレーナーとしての役目は、ちゃんと果たせているだろうか。`,
        true,
      );
      await era.printAndWait(
        `一日の注意力は限られている。気づける範囲にしか、意識は置けない。`,
      );
      await era.printAndWait(
        `すべてに行き届かせるのはほぼ不可能だ。事故を防ぐために注意を増やせば、かえって不確かさが増える。`,
      );
      await era.printAndWait(
        `がらんとしたトレーナー室にいると、後ろ向きな考えが記憶の隅から溢れてくる。`,
      );
      await falcon.say_and_wait(`${callname}、ただいま⭐`);
      await era.printAndWait(
        `${falcon.name}の丸い頭が、開いた扉の隙間から飛び出した。`,
      );
      await you.say_and_wait(`お疲れ。今日のトレーニングの前に、少し休もう。`);
      await era.printAndWait(
        `気を持ち直すため、${you.name}は席を立ち、${falcon.name}に紅茶を淹れた。`,
      );
      await era.printAndWait(
        `それから、きちんと座っている${falcon.name}を見た。`,
      );
      await era.printAndWait(
        `いつもの${falcon.name}と違い、手には誰かからもらった種が入っている。`,
      );
      await era.printAndWait(
        `${falcon.name}は${you.name}の視線に気づき、耳を動かして、手の小さな袋を振った。`,
      );
      await era.printAndWait(
        `${you.name}と${falcon.name}の努力で、${falcon.uma_sex_title}アイドルという概念は、やっと広がった。`,
      );
      await era.printAndWait(
        `いま${falcon.uma_sex_title}アイドルと言えば、ダートを見る観客は${falcon.name}を思い浮かべる。`,
      );
      await era.printAndWait(
        `そのおかげで、${falcon.name}にもかなりのファン団体がついた。`,
      );
      await falcon.say_and_wait(`うん、商店街のお姉さんがくれたの。`);
      await era.printAndWait(
        `多くのファンは${falcon.name}を自分の理想の投影にしている。だから助けてくれるのも当然なのか。`,
      );
      await era.printAndWait(
        `手紙ならトレーナーの${you.name}が選んでから${falcon.name}に見せる。包装された贈り物も同じだ。`,
      );
      await era.printAndWait(
        `${falcon.name}は意外とこの点では素直で、ファン側の自律もある。だからいま${falcon.sex}の小さな頭は、落ち込む言葉に沈んではいない。`,
      );
      era.printButton(`ちゃんと育てよう。`, 1);
      await era.input();
      await era.printAndWait(
        `まずは窓際の日陰に種を植え、芽が出たら陽の当たる場所へ移そう。`,
      );
      await era.printAndWait(
        `${falcon.name}が鉢を置いたあと、ぱたぱたと${you.name}の隣に座った。`,
      );
      await falcon.say_and_wait(`あ、${callname}`);
      await you.say_and_wait(`ん？ ファル子、どうした？`);
      await falcon.say_and_wait(`……ううん、なんでもない⭐`);
      await era.printAndWait(
        `${falcon.name}の耳がぱたぱたと揺れ、しっぽもソファを叩き続けている。`,
      );
      await falcon.say_and_wait(`そういえば、これからのトレーニング方針は——`);
      await era.printAndWait(`時間は雑談とトレーニングの中で過ぎていった。`);
    };
    f.title = title;
    return f;
  })(),
  before_japa_dir: (() => {
    const title = 'わけのわからない焦り';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, minoru, you, callname) => {
      await falcon.say_and_wait(`……ん——`);
      await era.printAndWait(
        `${you.name} が控え室に入ると、少し沈んだ${falcon.name}がいた。`,
      );
      await falcon.say_and_wait(
        `${callname}、今度のレース、お客さんたくさん来る？`,
      );
      await you.say_and_wait(
        `ファル子が皐月賞に出たおかげで、芝の観客も、ダートで輝いてる${falcon.name}を知ってるよ。`,
      );
      await falcon.say_and_wait(`芝のコースに比べると……`);
      await you.say_and_wait(
        `まだ足りないけど、ファル子の努力で、ダートにも少しずつ人気がついてきた。`,
      );
      await falcon.say_and_wait(`そうなんだ。`);
      await falcon.say_and_wait(`ファル子、ダートのレースを動かせるかも！`);
      await era.printAndWait(`努力は、いつか結果になる。`);
      era.printButton(`それに、みんなファル子の登場を待ってる！`, 1);
      await era.input();
      await falcon.say_and_wait(
        `……そうだ！ 観客席で応援してくれるファンのために、ファル子、一気にゴールまで！`,
      );
      await falcon.say_and_wait(`……${callname}、発走まであとどれくらい？`);
      await era.printAndWait(
        `${you.name} は携帯を${falcon.name}に渡した。画面の時刻は、発走まで三十分を示している。`,
      );
      await falcon.say_and_wait(`それなら！`);
      await era.printAndWait(
        `${falcon.name}は持ってきた荷物から、分厚いポスターの束を取り出した。`,
      );
      await falcon.say_and_wait(
        `発走前に、近所のみんなにファル子を知ってもらおう！`,
      );
      await era.printAndWait(
        `${you.name} が口を開く前に、${falcon.name}は${you.name} の手首を掴んで外へ走った。`,
      );
      await falcon.say_and_wait(`ファル子！ ファイト！`);
      await era.printAndWait(
        `その後、出走する${falcon.uma_sex_title}が発走前までライブしていた件は、少し話題になった。`,
      );
      await era.printAndWait(
        `まもなく、${minoru.name} の怖い笑顔と来月の給料が、${you.name} に二度としないと誓わせた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  japa_dir_win: (() => {
    const title = 'ジャパンダートダービー後・満ち足りた熱';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`控え室\n`);
      await falcon.say_and_wait(`${callname}、ファル子のステージ、見てた？⭐`);
      await you.say_and_wait(`会場の熱、想像以上だった！`);
      await era.printAndWait(
        `ステージ上のファル子は、レースより、むしろステージが${falcon.sex}のホームだ。`,
      );
      await era.printAndWait(
        `何度も練習したステップと、ファンとの掛け合いが、会場を熱くした。`,
      );
      await you.say_and_wait(`ファル子、アイドルとしてプロ級だよ。`);
      await era.printAndWait(
        `競走${falcon.uma_sex_title}より、${falcon.sex}はアイドルのほうへ進むべきなのか。`,
      );
      await falcon.say_and_wait(
        `ファル子はトップアイドルを目指して進むんだから、アイドルの基礎中の基礎も、ちゃんとやらなきゃ！`,
      );
      await you.say_and_wait(`いま、脚の感覚はある？`);
      await era.printAndWait(
        `スパイクを脱がせると、ファル子の脚をマッサージし始めた。`,
      );
      await falcon.say_and_wait(`前よりは、ちょっと感じるよ！`);
      await you.say_and_wait(
        `ファル子の熱は炎みたいに熱いけど、体を無視したら怪我しやすい！`,
      );
      await falcon.say_and_wait(
        `わかった。これから先も、${callname}にお願いね。`,
      );
      await era.printAndWait(
        `ステージを下りたファル子はほとんど立てず、${you.name}が抱えて控え室まで戻った。`,
      );
      await you.say_and_wait(`ファル子、蝶みたいにきれいだね。`);
      await era.printAndWait(
        `自分を燃やして世界を照らす。脆くて、壊れやすい。`,
      );
      await falcon.say_and_wait(
        `え？ 蝶……蝶なら、${callname}も花の中にいるの？`,
      );
      await you.say_and_wait(`ファル子に出会えたのは、僕の光栄だよ！`);
      await falcon.say_and_wait(`やあ——ファル子、捕まっちゃう！`);
      await you.say_and_wait(`これでファル子は逃げられない！`);
      await era.printAndWait(
        `${falcon.name} はジャパンダートダービーを制した。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '合宿、スタート！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `夏季合宿が始まり、${you.name}とファル子は夏の特訓のため、理事長の私有ビーチへ来た。`,
      );
      era.printButton('「すごい広い砂浜！」', 1);
      await era.input();
      await era.printAndWait(`長い揺れの旅も、やっと報われた。`);
      await falcon.say_and_wait(`想像よりきれい！`);
      await falcon.say_and_wait(`……ん、まずはファンに写真を——`);
      await era.printAndWait(
        `車を降りるなり、待ちきれずにカシャカシャ撮り続けた。`,
      );
      era.printButton(`トレーニングも忘れるなよ！`, 1);
      await era.input();
      await falcon.say_and_wait(
        `はい！ ${callname}はファル子の活躍を見ててね！`,
      );
      await falcon.say_and_wait(
        `アイドルのファル子も、${falcon.uma_sex_title}の${
          falcon.name
        }も、ぜんぶやりきる！`,
      );
      era.printButton(`その意気だ！`, 1);
      await era.input();
      era.println();
      await falcon.say_and_wait(
        `——以上！ ファル子の最初の目標は！ 近くの町の人たちにファル子を知ってもらうこと！`,
      );
      era.printButton(`ファル子、ファイト！`, 1);
      await era.input();
      await falcon.say_and_wait(
        `${falcon.uma_sex_title}アイドル、涼夏ライブ作戦。この砂浜からスタート！`,
      );
      await era.printAndWait(
        `${you.name}と${falcon.name}がライブ場所を決めたあと、夏季合宿は歌声の中で始まった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = 'お祭り';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`ファル子、ちゃんと準備してくるね！`);
      await era.printAndWait(
        `${falcon.name}はそう言って、急いで寮へ駆け込んだ。`,
      );
      await era.printAndWait(
        `夏のライブのあと、空気が最高だったせいでアンコールを足し、終了が一時間遅れた。`,
      );
      await era.printAndWait(
        `いっしょに花火大会を見る予定は、一気にきつくなった。`,
      );
      await era.printAndWait(
        `寮の中の騒ぎが静まっていく。花火大会開始まで、一時間を切っている。`,
      );
      await era.printAndWait(
        `今年の花火大会は町の中心だ。近くのいちばんいい見物場所は、町から少し離れた山の上。`,
      );
      await era.printAndWait(
        `いつもの脚なら山麓まで三十分、登りにさらに十五分。それを思うと、焦りが出る。`,
      );
      await falcon.say_and_wait(`お待たせ！`);
      await era.printAndWait(`やっと来た。`);
      await era.printAndWait(
        `そう言おうとしたが、浴衣に着替えた${falcon.name}は、いつもよりかわいかった。`,
      );
      await era.printAndWait(
        `唇が焦り、心臓が急に速くなり、額にも汗が浮かぶ。`,
      );
      await falcon.say_and_wait(`この格好、似合ってない？`);
      await era.printAndWait(
        `ピンクの浴衣の${falcon.name}はしなやかな体を惜しみなく見せ、遠くから見ると一輪の花のように愛らしい。`,
      );
      await you.say_and_wait(
        `ファル子がいちばん輝く${falcon.uma_sex_title}じゃなかったら、その称号を名乗れる人は世界にいないよ。`,
      );
      await falcon.say_and_wait(
        `${callname}にそう言われると、ファル子、ちょっと照れる。`,
      );
      await era.printAndWait(`${falcon.name}は恥ずかしそうに俯いた。`);
      await you.say_and_wait(
        `最初の波には間に合わないけど、二番目ならまだ間に合う。`,
        true,
      );
      await falcon.say_and_wait(`${callname}、ファル子の手、握っていい？`);
      era.printButton(`ファル子の手を握る`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は小さな手を掌に収めた。ファンの前で輝くいつもの姿より、少し艶がある。`,
      );
      await falcon.say_and_wait(`ファル子、しっかり掴んでてね？`);
      await era.printAndWait(`ん？`);
      await falcon.say_and_wait(`なんでもない⭐`);
      await era.printAndWait(
        `${falcon.name}はこっそり口を覆って笑い、それから${you.name}の歩調に合わせた。`,
      );
      era.drawLine();
      await era.printAndWait(
        `祭りの会場がいくつかある中で、いちばん眺めがいいのは町から離れた神社だ。`,
      );
      await era.printAndWait(
        `神社へは長い石段を上がる必要がある。だから他の場所より、人は少しまばらだ。`,
      );
      await falcon.say_and_wait(`${callname}、急がないと始まっちゃう！`);
      await era.printAndWait(
        `${you.name}より一段高い石段に立ち、${falcon.name}は少し先の山腹を見た。`,
      );
      await you.say_and_wait(`ファル子、待って。速すぎて、ちょっと休ませて。`);
      await era.printAndWait(
        `${falcon.name}には尽きない元気があるらしい。最初は${you.name}が${falcon.sex}の手を引いていたが、少し歩くとすぐ${falcon.sex}が${you.name}を引っ張り、石段を進み続けた。`,
      );
      await falcon.say_and_wait(`${callname}の体力、想像より弱いね！`);
      await era.printAndWait(
        `${falcon.uma_sex_title}は三女神の寵児だ、と言うべきか。`,
      );
      await era.printAndWait(
        `人間なら体力を使い切る道のりも、${falcon.uma_sex_title}には準備運動にもならないのだろう。`,
      );
      await era.printAndWait(
        `息を整えながら左右を見ると、神社へ向かう道に人影はほとんどない。祭りの音楽も終わりに近づき、花火大会はもうすぐ始まる。`,
      );
      await you.say_and_wait(
        `ファル子といっしょに、花火大会の開会を見られないのは少し惜しいな。`,
      );
      await era.printAndWait(
        `${you.name}は少し残念そうに${falcon.name}へ言った。`,
      );
      await falcon.say_and_wait(
        `${callname}、そんなにファル子といっしょに花火見たいの？`,
      );
      await era.printAndWait(
        `${falcon.name}の声には、うまく言えない妙な響きがあった。`,
      );
      era.printButton(`ファル子といっしょに、あの瞬間を残したい`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は考えたあと、素直に${falcon.sex}に伝えた。`,
      );
      await falcon.say_and_wait(`じゃあファル子、しっかり掴まって！`);
      await era.printAndWait(
        `細い${falcon.teen_sex_title}が${you.name}を引き寄せた。`,
      );
      await falcon.say_and_wait(`このまま一気に石段を駆け上がるよ！ \n\n`);
      await era.printAndWait(
        `あの感覚はうまく言えない。町で売っている辛いスープを顔に全部浴びせられたみたいで、風に切られる痛みと心臓への強い圧迫で、${you.name}はほとんど恐怖に落ちた。`,
      );
      await era.printAndWait(
        `それでも地獄のような経験は想像より早く退いた。${falcon.name}が${you.name}の肩をそっと揺するまで、山腹に着いたことに気づかなかった。`,
      );
      await era.printAndWait(
        `なぜ道で${falcon.uma_sex_title}を乗り物にして通勤する人がいないのか、急にわかった。`,
      );
      await falcon.say_and_wait(`${callname}、花火大会始まったよ！`);
      await era.printAndWait(
        `ぱん、ぱん、火のような花が夜空を照らし、花火大会は本番に入った。`,
      );
      await era.printAndWait(
        `空に咲く花火は、この祭りのステージのアンコールでもあるだろう。`,
      );
      await era.printAndWait(
        `ふと、${you.name}はダートを走る${falcon.name}を思い出した。`,
      );
      await era.printAndWait(`花火みたいに、すぐ消えてしまうのかもしれない。`);
      await era.printAndWait(`そう思うと、少し寂しい。`);
      await falcon.say_and_wait(
        `きれい！ ファル子がトップアイドルになった瞬間には、これ以上ぴったりなものはないよね！`,
      );
      await era.printAndWait(
        `${you.name}の隣の${falcon.name}は、花火に炎のような橙を染められていた。`,
      );
      era.printButton(`来年もいっしょに花火見よう`, 1);
      await era.input();
      await era.printAndWait(
        `空の花が一列ずつ咲き、花火大会も終わりに近づく。`,
      );
      await you.say_and_wait(`そのときは、いまよりずっと輝いてるよ！`);
      await era.printAndWait(`${falcon.name}は${you.name}を見た。`);
      await falcon.say_and_wait(`はい！ そのときはよろしくね！`);
      await era.printAndWait(
        `いちばん美しい花火が、${you.name}の目の前で咲いた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏合宿終了・もっと大きなステージへ';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`はぁ！ はぁ！ はぁ！`);
      await you.say_and_wait(`ファル子、ファイト！`);
      await falcon.say_and_wait(`はあああああ！`);
      await era.printAndWait(
        `疲れ切った体を駆ってゴールへ向かったファル子は、やっとゆっくり止まった。`,
      );
      await you.say_and_wait(`お疲れ。`);
      await era.printAndWait(
        `用意したタオルをファル子に渡し、紙に最後の一行を記した。`,
      );
      await falcon.say_and_wait(
        `夏季合宿で覚えたコツを活かして、レースでもっとたくさんのファンにファル子のキラキラを見せるよ⭐`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}でも、トレーニングと町のライブを両立するのはもう限界だろう。だが${falcon.uma_sex_title}は少し休んだだけで、ライブの準備に取りかかった。`,
      );
      era.printButton(`それ、きつすぎないか？`, 1);
      await era.input();
      await falcon.say_and_wait(
        `ほかの${falcon.uma_sex_title}に比べたら、ファル子の特徴は元気なところかもね。`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}アイドルの${falcon.name}は、町のさよならライブに招かれた。`,
      );
      await era.printAndWait(
        `この町で新しくできたファンと友達のためにも、疲れ切っていても全力で向かわなければならない。`,
      );
      await you.say_and_wait(
        `今夜のライブは、ファンにとって一生に一度のステージだ！`,
      );
      await era.printAndWait(`少なくとも、トレーナーとしての役目は果たそう。`);
      await falcon.say_and_wait(
        `${callname}にとっても、そうなの……ファル子、いま元気満タン！`,
      );
      era.drawLine({ content: 'ライブ終了後' });
      await falcon.say_and_wait(`～～～～♪ ありがとう、みんな！`);
      await you.say_as_passer_by_and_wait(`ファン`, `ファル子！ ファル子！`);
      await era.printAndWait(
        `近くの町で開いたライブは意外な人気で、ファル子がライブすると聞いて三時間も車を飛ばしてきたファンまでいた。`,
      );
      await era.printAndWait(
        `多くの人にとって、ステージそのものより、ダートアイドルの${falcon.name}をこの目で見ることが本当の目的なのだろう。`,
      );
      await falcon.say_and_wait(
        `うんうん！ みんなの声、ファル子の耳に届いたよ！ ファル子、嬉しい！`,
      );
      await you.say_as_passer_by_and_wait(
        `ファン`,
        `もう一曲！ ファル子！ もう一曲！`,
      );
      await falcon.say_and_wait(`じゃあもう一曲……`);
      await era.printAndWait(`${falcon.name}は${you.name}の視線に気づいた。`);
      await falcon.say_and_wait(
        `あはは……もう遅いし、遠くからファル子のライブを見に来てくれたファンもいる……${falcon.uma_sex_title}アイドルとして、ファル子は一人ひとりを考えなきゃ。だから、ごめんね！`,
      );
      await falcon.say_and_wait(
        `でも、いいお知らせ！ 今回のライブはファル子のトレーナーにお願いして、ウマスタと動画サイトに上げてあるよ！`,
      );
      await falcon.say_and_wait(`ファル子のキラキラ、いつでも再生してね❤`);
      await falcon.say_and_wait(`それじゃ！ 合言葉、いくよ！`);
      await falcon.say_and_wait(`ファル子が逃げたら？`);
      await you.say_as_passer_by_and_wait(`ファン`, `追いかけるしかない！`);
      await falcon.say_and_wait(`ずっと追うの？`);
      await you.say_as_passer_by_and_wait(`ファン`, `地平線の大ステージまで！`);
      await falcon.say_and_wait(`ありがとう⭐`);
      await era.printAndWait(
        `会場のファンが散っていくと、ステージには${you.name}と${falcon.name}だけが残った。`,
      );
      era.printButton(`すごくよかった。`, 1);
      await era.input();
      await era.printAndWait(`${falcon.name}は満足そうな顔をした。`);
      await era.printAndWait(
        `ステージで跳ねていた両脚は、${you.name}が${falcon.sex}をそっと抱いた瞬間、壊れた人形みたいに地面へ崩れた。`,
      );
      await falcon.say_and_wait(`……毎日が、いまみたいだったらいいのに。`);
      await era.printAndWait(`それでも${falcon.sex}の目は、まだ輝いていた。`);
      await falcon.say_and_wait(
        `この調子なら、ファル子もあの壁、越えられるかも！`,
      );
      await era.printAndWait(
        `${falcon.name}がいるおかげで、芝ばかり見ていた観客も、少しずつこちらへ視線を向け始めている。`,
      );
      await you.say_and_wait(`絶対できる！`);
      await era.printAndWait(
        `${you.name}の言葉を聞くと、${falcon.name}は観客席を見た。`,
      );
      await falcon.say_and_wait(`こうして一歩ずつ、いちばん高いステージへ。`);
    };
    f.title = title;
    return f;
  })(),
  we_47_39: (() => {
    const title = '忘れ草';
    /**
     * 萱草＝忘れ草。悩みを忘れる意
     * 過剰摂取は中毒の恐れ
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`商店街のゲリラライブ\n`);
      await falcon.say_and_wait(`～～～♪ みんな、お疲れさま！`);
      await era.printAndWait(
        `ダートを戦線に、いちばん前で輝き続ける${falcon.uma_sex_title}アイドル——${falcon.name}は、いまや話題の中心だ。`,
      );
      await era.printAndWait(
        `${falcon.name}の活躍をこの目で見ようと、わざわざ切符を買って来る人も多い。`,
      );
      await era.printAndWait(
        `大げさに言えば、ダート＝${falcon.name}は、もう実現しかかっている。`,
      );
      await you.say_as_passer_by_and_wait(`ファン`, `ファル子！ ファル子！`);
      await era.printAndWait(
        `……名声が大きいほど試練も大きい。${falcon.name}が望んで広告を駆け回っているとはいえ、忙しいときはトレーニングまで止まるのは、${you.name}にとって笑えない。`,
      );
      await you.say_and_wait(
        `……いまの契約が終わったら、ファル子とちゃんと話さないと。`,
      );
      await era.printAndWait(
        `${falcon.name}の意志を尊重しているつもりでも、それを自由と呼べるのか。`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファンA`,
        `毎日の仕事は疲れるけど！ ファル子のステージを見ると、疲れが消えるんだ！`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファンB`,
        `ファル子が宣伝したグッズは全部集めてる！ 行動で応援するなら、ファル子への愛は俺がいちばん深い！`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファンC`,
        `冗談言うな！ 俺はファル子がデビューする前から応援してる古参だ！ いまは懐が寒いけど……ファル子への愛はお前らより強い！`,
      );
      await era.printAndWait(
        `ファンに「アイドルプロデューサー」と呼ばれるあなた。本職はほとんど忘れられている。熱を増すファン層を見て、胸の心配は深くなる。`,
      );
      await you.say_and_wait(
        `……いまの人は、心の拠り所を探すのが、ますます強くなっているのかもしれない。`,
      );
      await era.printAndWait(`とりあえず、その理由で自分を慰めた。`);
      await era.printAndWait(
        `少し離れたステージでファンと触れ合う${falcon.teen_sex_title}を見る。精神も、もう限界だろう。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_40: (() => {
    const title = 'ファル子の決断';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`商店街の広場\n`);
      await falcon.say_and_wait(
        `いつもファル子を黙って応援してくれて、ありがとう⭐`,
      );
      await falcon.say_and_wait(
        `これ、ファル子が昨日一晩かけて作った小さな贈り物。ファル子の気持ち、受け取ってね❤`,
      );
      await era.printAndWait(
        `${you.name} と${falcon.name}の宣伝が続いて、慕って来る人が増えた。小さな芝生は、いま大勢に囲まれている。`,
      );
      await you.say_as_passer_by_and_wait(`ファン`, `ファル子！ ファル子！`);
      await era.printAndWait(
        `人に囲まれているのは、${falcon.uma_sex_title}アイドルの道を歩く${falcon.name}だ。`,
      );
      await era.printAndWait(
        `人気は芝のスターアイドルにはまだ届かない。だがダートのファンがライブを見に来る熱は、芝のファンをはるかに超える。`,
      );
      await era.printAndWait(
        `理由は簡単だ。芝を見るファンには、同時期に選べる有名な競走${falcon.uma_sex_title}が何人もいる。ダート専門の${falcon.uma_sex_title}アイドルで、人気と実力を兼ねる${falcon.name}は${falcon.sex}だけだ。`,
      );
      await era.printAndWait(`${falcon.name}の圧力がどれほどか、想像はつく。`);
      await era.printAndWait(`顕微鏡の下で集めた太陽光のようだ。`);
      await you.say_and_wait(
        `${falcon.name}、最近の睡眠、どんどん短くなってる。本当に大丈夫？`,
      );
      await era.printAndWait(
        `最近、トレーナー室は${falcon.name}の仮眠場所になった。それも、あなたの強制があってのことだ。`,
      );
      await era.printAndWait(
        `トレーニング、アイドル活動、ファンレターへの返事（あなたの確認を経て）、次のゲリラライブの準備。`,
      );
      await era.printAndWait(
        `煩雑な予定が、${falcon.sex}の心力を大量に奪っている。`,
      );
      await falcon.say_and_wait(`……それと！ ファル子、いいお知らせがあるよ！`);
      await falcon.say_and_wait(
        `ファル子、次のJBCクラシックと東京大賞典に出るって決めた！`,
      );
      await you.say_as_passer_by_and_wait(
        `ファン`,
        `この先もファル子の活躍が見られる！ 最高だ！`,
      );
      await falcon.say_and_wait(
        `次のレースも、ファル子はずっと輝くよ！ みんな、絶対に現地で見てね！`,
      );
      await you.say_as_passer_by_and_wait(`ファン`, `絶対行く！`);
      await falcon.say_and_wait(`ありがとう⭐`);
      await era.printAndWait(
        `最後のファンが去ったあと、あなたは少し離れた場所から${falcon.name}へ歩いた。`,
      );
      era.printButton(`お疲れ。`, 1);
      await era.input();
      await era.printAndWait(
        `いわゆる後始末とは、見物客が残したゴミを全部掃くことだ。`,
      );
      await era.printAndWait(
        `最初${falcon.name}は自分で掃除すると言ったが、もう限界だろう、とあなたが強引に止めた。`,
      );
      await falcon.say_and_wait(`……${callname}？`);
      await era.printAndWait(
        `木陰でうたた寝する、いつもの疲れ切った${falcon.name}とは違う。${falcon.sex}の、渇いた目がまっすぐあなたを見ている。`,
      );
      await falcon.say_and_wait(
        `ファル子、合格の${falcon.uma_sex_title}アイドルになれた？`,
      );
      await you.say_and_wait(
        `${falcon.uma_sex_title}アイドルとしては、世界にひとりしかいない存在だよ。`,
      );
      await falcon.say_and_wait(
        `……もう少し頑張ればいいだけ。だから${callname}、安心して！`,
      );
      await era.printAndWait(
        `……${falcon.sex}の目はあなたではなく、後ろの何かを見ていた。`,
      );
      await falcon.say_and_wait(
        `ファル子、ひとりは嫌いなんだ。だから、どんなことがあってもいちばん大きなステージで輝きたい。`,
      );
      await falcon.say_and_wait(`……花火みたいに、嫌な夜を裂いて。`);
      await falcon.say_and_wait(`ファル子みたいな人にもっと、答えを届けたい。`);
      await era.printAndWait(
        `そう言っているうちに、${falcon.sex}の目から涙が落ちた。`,
      );
      await falcon.say_and_wait(`ファル子が頑張れる方向は、ダートだけなのに。`);
      await falcon.say_and_wait(
        `……皐月賞みたいな大ステージに、もう一度立ちたい。`,
      );
      await era.printAndWait(
        `それから疲れ切った${falcon.teen_sex_title}は、目を閉じた。`,
      );
      await era.printAndWait(
        `トレーナーである自分が、担当の${falcon.uma_sex_title}をこんなところまで追い込めば、もう役目を果たしていない。`,
      );
      await era.printAndWait(
        `担当の意見を尊重する、と言っても、自分から逃げるための言葉にすぎない。`,
      );
      await era.printAndWait(`いつにも増して、自分の弱さが憎い。`);
      await you.say_and_wait(`……このままじゃ、ダメだ。`);
      await era.printAndWait(
        `大切な${falcon.teen_sex_title}をそっと抱き上げる。腕の重さが、トレーナーの役目の重さだ。`,
      );
      await you.say_and_wait(`……少なくとも、トレーナーの責任は果たす。`);
      await era.printAndWait(
        `覚悟を決めたあと、腕の筋肉は痛むのに、心はほどけていた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_41: (() => {
    const title = '決断の代償';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `十一月の気候とは逆に、${falcon.name}のアイドル活動休止の報道が熱を帯びている。`,
      );
      await era.printAndWait(
        `レースでもステージでも一瞬も輝きを止めないことで知られた${falcon.name}が、ついに限界に達した。`,
      );
      await era.printAndWait(`少なくとも、対外的にはそう説明されている。`);
      await era.printAndWait(
        `突然の出来事で、当事者は口を閉ざしている。そのせいで、この件はますます現実離れしていった。`,
      );
      await era.printAndWait(
        `あまりに突飛な噂を除くと、いま主流なのは二つだ。`,
      );
      await era.printAndWait(`${falcon.name}に恋人ができ、まもなく引退する。`);
      await era.printAndWait(
        `${falcon.name}は脚にかなり重い怪我を負い、いま病院で療養中で、完治の見込みは低く、将来は表舞台から消えるかもしれない。`,
      );
      await era.printAndWait(`どちらも、アイドル活動には壊滅的な打撃だ。`);
      await you.say_and_wait(`決めた以上、引き返せない。`);
      await era.printAndWait(
        `しばらくアイドル活動を止めると告げたあと、予想した喧嘩は起きなかった。${falcon.sex}はその事実を、静かに受け止めた`,
      );
      await era.printAndWait(
        `……とはいえ、自分の独断で、${falcon.sex}の成長の機会を奪ったのかもしれない。`,
      );
      await era.printAndWait(
        `自分の主張で、こんな重い結果を招いたなら。振り返って、この決断は正しかったのか。`,
      );
      await you.say_and_wait(
        `……最後に正しかったかはわからない。僕は、正しいと思ったことをしただけだ。`,
      );
      await era.printAndWait(`その代償を払うとしても。`);
      await you.say_as_passer_by_and_wait(
        `${falcon.name}のファン`,
        `ああ、こんにちは。${falcon.name}の${callname}ですか？`,
      );
      await era.printAndWait(
        `いつの間にか廊下にいた男が、ようやく獲物を見つけたように目を輝かせ、早足で近づいてくる。おかしい。今回の行程は、誰にも知らせていないはずだ。`,
      );
      await you.say_and_wait(
        `そうです。ご用件は？ ファル子のサインなら、すみません、${falcon.sex}はいま降りたところです。`,
      );
      await era.printAndWait(
        `……そういえば、この個室はいちばん奥だ。${falcon.name}を探すなら、途中で会うはずだ。`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.name}のファン`,
        `ああ……すみません。個人的な好奇心です。`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.name}のファン`,
        `ファル子より、${falcon.sex}のトレーナーのほうに興味がありまして。`,
      );
      await era.printAndWait(`何かを隠すように、マスクも手袋もしている。？`);
      await you.say_and_wait(`……いや、違う。何かがおかしい。`);
      await you.say_as_passer_by_and_wait(
        `${falcon.name}のファン`,
        `そのままで、地獄へ落ちろ！`,
      );
      await era.printAndWait(`白い光が、予兆もなく走った。`);
      await you.say_and_wait(`うっ。`);
      await era.printAndWait(
        `ファンの報復は考えていた。だが、ここまで過激だとは思わなかった。`,
      );
      await era.printAndWait(
        `脳は、目の前の現実離れした出来事をまだ処理している。`,
      );
      await era.printAndWait(
        `だからあなたは、その場で呆然と、小刀が腹に刺さるのを見ていた。`,
      );
      await era.printAndWait(`そのまま、なすすべなく終わりを迎える。`);
      await you.say_and_wait(`うっ！`);
      await era.printAndWait(`——無意識にビジネスバッグを緩衝にしなければ。`);
      await era.printAndWait(`小刀は革のバッグに、深い傷を残した。`);
      await you.say_as_passer_by_and_wait(`熱狂的ファン`, `くそ。`);
      await era.printAndWait(
        `それでも突然の衝撃で、無意識に顔を上げ、尻餅をつきかけた。`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファン`,
        `ファル子はあんなに完璧なのに、なぜお前なんか好きになる？`,
      );
      await era.printAndWait(
        `感触が違うと気づいた暴徒は、目の前の失敗に激昂した。`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファン`,
        `泣き叫びながら、そのまま地獄へ落ちろ！`,
      );
      await era.printAndWait(
        `小刀は抜かず、その勢いで壁まで追い詰めようとする。`,
      );
      await you.say_and_wait(`くそ、退路がない。`);
      await era.printAndWait(
        `小刀は抜かず、踏み場を失ったあなたを、そのまま壁へ追い詰める。`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファン`,
        `あの青くて繊細なファル子が、なぜ急に活動休止を——`,
      );
      await era.printAndWait(
        `理性が怒りに溶けたのか、熱を増すファンは小刀をさらに前へ押し込んだ。`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファン`,
        `——なるほど、わかった。`,
      );
      await era.printAndWait(`一瞬迷った顔の熱狂者は、悟ったように頷いた。`);
      await you.say_as_passer_by_and_wait(
        `熱狂的ファン`,
        `お前がいるから、僕らのファル子はこうなった。`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファン`,
        `お前がいなくなれば、ファル子は元に戻るんだろ？`,
      );
      await era.printAndWait(
        `アドレナリンが上がったあなたは、目の前の絶望を見ていた。`,
      );
      await era.printAndWait(
        `下腹に薄い痺れが走る。誰かが氷を腹へ押し込んだようだ。盾にしたフォルダの下から滑った小刀は、確かに標的へ当たった。`,
      );
      await you.say_as_passer_by_and_wait(`熱狂的ファン`, `ちっ。`);
      await era.printAndWait(
        `本来は心臓を狙った一刺しだ。バッグに阻まれ、次善として腹を狙った。`,
      );
      await you.say_and_wait(
        `教えてください。なぜ${falcon.name}は、まだ戻らないのですか。`,
      );
      await era.printAndWait(`圧倒的に不利な局面で、かえって冷静になった。`);
      await era.printAndWait(
        `激しい心拍、雪のように消える体力、ほとんど麻痺した体。あなたはかつてない集中で、突破の道を探した。`,
      );
      await you.say_as_passer_by_and_wait(
        `熱狂的ファン`,
        `……お前みたいな許されざる者に、説明する必要はない。`,
      );
      await you.say_and_wait(`今だ！`, true);
      await era.printAndWait(
        `さっきまでの会話は、相手を麻痺させるためだ。対話を考えさせ、体の守りを疎かにさせる。`,
      );
      await era.printAndWait(
        `逆に徹底的に怒らせる可能性もある。だが、いまは当たるほうだけを賭ける。`,
      );
      await era.printAndWait(
        `不意打ちが成功して一瞬緩んだ相手の股間へ、あなたは思いきり蹴り込んだ。`,
      );
      await you.say_as_passer_by_and_wait(`熱狂的ファン`, `あああああああ！`);
      await era.printAndWait(
        `痛みが麻痺を上回ったのか、相手の手がふっと緩んだ。`,
      );
      await you.say_and_wait(`今だ！`, true);
      await era.printAndWait(
        `相手が苦しんで屈む隙に、ビジネスバッグを思いきり叩きつけた。`,
      );
      await you.say_as_passer_by_and_wait(`熱狂的ファン`, `うっ——`);
      await era.printAndWait(`手に残る痺れからして、この一打はかなり重い。`);
      await you.say_as_passer_by_and_wait(
        `熱狂的ファン`,
        `……あと一歩だったのに！`,
      );
      await era.printAndWait(
        `退路がなく、かろうじて立つ悪魔は、いつ倒れてもおかしくない。`,
      );
      await era.printAndWait(`だが、あなたの状態はもっと悪い。`);
      await you.say_and_wait(`これで、終わりか？`, true);
      await era.printAndWait(`目眩が雪のように降ってくる。`);
      await era.printAndWait(
        `舌先を噛み、激痛で失神を一時追い払い、全力でバッグを投げた。`,
      );
      await era.printAndWait(
        `第一撃は相手が顔をそらして避けた。すぐ ${you.name} は体を武器にして、正面からぶつかった。`,
      );
      await era.printAndWait(
        `相手の後頭部がガラスの机に強く当たり、それから完全に気を失った。`,
      );
      await you.say_and_wait(`救急車を呼ばないと`, true);
      await era.printAndWait(
        `全力で電話を終えたあと、${you.name} も気を失った。`,
      );
      await era.printAndWait(`${you.name} の視界は、ゆっくり霞んでいく。`);
      await era.printAndWait(`遠ざかる意識が、最後に見たのは——`);
      await era.printAndWait(`新しい時代の船に、間に合わなかった乗客だった。`);
    };
    f.title = title;
    return f;
  })(),
  before_jbc_cls_c: (() => {
    const title = '焦りの始まり';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`JBCクラシックは、例年なら観客は二万人を超えない`);
      await era.printAndWait(`だが`);
      await falcon.say_and_wait(
        `${callname}、発走前にこのチラシ、配りきらないと！`,
      );
      await era.printAndWait(
        `ファル子の努力で、行き来するファンが途切れない？！`,
      );
      await you.say_and_wait(`ファル子なら、本当にいけるかも？`);
      await era.printAndWait(
        `ファル子の体をずっと心配してきた${you.name}の胸にも、現実離れした期待が芽生え始めていた。`,
      );
      await you.say_as_passer_by_and_wait(
        `通行人A`,
        `え？ このへん、レースあるの？`,
      );
      await you.say_as_passer_by_and_wait(
        `通行人B`,
        `ダートのレース？ 興味な……${falcon.name}が出るの？`,
      );
      await you.say_as_passer_by_and_wait(
        `通行人C`,
        `${falcon.name}？ ウマスタで話題になってる子？`,
      );
      await you.say_as_passer_by_and_wait(`通行人A`, `待って。`);
      await era.printAndWait(
        `いつの間にか、チラシは奪い合うように無くなった。`,
      );
      await falcon.say_and_wait(`ファル子、想像より人気あるかも……`);
      await falcon.say_and_wait(
        `前はこんなに配るのに、午前いっぱい必要だったよ。`,
      );
      await era.printAndWait(
        `そう言いながらも、${falcon.name}の笑顔は止まらない。`,
      );
      await falcon.say_and_wait(
        `ファル子、もう想像以上に人気者になっちゃったのかも。`,
      );
      await you.say_and_wait(`みんな、ファル子を見てるよ。`);
      await falcon.say_and_wait(`うん。ずっと応援してくれるみんなのために。`);
      await falcon.say_and_wait(`ファル子、2000%の努力で優勝する！`);
      await era.printAndWait(`見えない気の波が${falcon.name}を包んだ。`);
      await falcon.say_and_wait(`じっとしてられない、今から行こ！`);
      await you.say_and_wait(`まだ発走してないよ。`);
      await era.printAndWait(`言い終わる前に、${falcon.name}は通話を切った。`);
      await falcon.say_and_wait(`これから、${callname}をびっくりさせる！`);
      await era.printAndWait(
        `${falcon.name}は決意して、競馬場へ走っていった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_win_c: (() => {
    const title = 'JBCクラシック後・オーバーロード';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`ファル子は圧倒的な差で勝利した。`);
      await era.printAndWait(`逃げのファル子が、レース全体のリズムを握った。`);
      await era.printAndWait(
        `続くウィンナーズステージでも、${falcon.sex}は持てる力を出し切った。`,
      );
      await era.printAndWait(`だが——`);
      await you.say_as_passer_by_and_wait(
        '医師',
        '大きな異常はない。ただ疲れすぎて気を失っただけだ。',
      );
      await you.say_as_passer_by_and_wait(
        '医師',
        `あなたが ${falcon.name} のトレーナーですね？ なぜ${falcon.sex}をちゃんと休ませなかった。`,
      );
      await you.say_and_wait(`すみません。全部、僕のせいです。`);
      await you.say_as_passer_by_and_wait(
        '医師',
        'これ以上、無理はさせないでください。',
      );
      await you.say_and_wait(`ありがとうございます。`);
      await era.printAndWait(
        `病床の${falcon.name}を見て、座った${you.name}は拳を握った`,
      );
      era.drawLine();
      await you.say_and_wait(`ファル子！ しっかり、ファル子！`);
      await era.printAndWait(
        `${falcon.uma_sex_title}「さっきまでステージでは元気だったのに、昇降機を下りたら——」`,
      );
      await you.say_and_wait(`救急車！ 救急車はどこだ？`);
      await you.say_as_passer_by_and_wait('担当者', 'もう救急車は呼びました。');
      await you.say_as_passer_by_and_wait(
        '担当者',
        'とりあえず医務室へ運んでください。',
      );
      await falcon.say_and_wait([
        { content: `${callname}？`, fontSize: '0.5rem' },
      ]);
      await era.printAndWait(
        `ファル子をそっと背負い、担当者の指示どおり医務室へ走った。`,
      );
      era.printButton(`お前に何かあったら、僕も`, 1);
      await era.input();
      await falcon.say_and_wait([
        { content: `${callname}、だよね？`, fontSize: '0.5rem' },
      ]);
      await era.printAndWait(`ファル子が何か言っているようだ。`);
      await era.printAndWait(
        `医務室へ走ったあとのことは、よく覚えていない。ファル子が救急車に運ばれるところ以外は。`,
      );
      await falcon.say_and_wait(`${you.actual_name}！`);
      era.drawLine();
      await era.printAndWait(
        `目の前の${falcon.teen_sex_title}は、大きな目で ${you.name} を見ていた。`,
      );
      await era.printAndWait(
        `汗のついた小さな手が、${you.name} の袖を離さない。`,
      );
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(`視界が、いつの間にか霞んでいた。`);
      await you.say_and_wait(`ファル子……よかった。`);
      await era.printAndWait(`${falcon.name} が無事なら、それでいい。`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_42: (() => {
    const title = '水仙';
    /**
     * 好きになればなるほど、「耐えられないやり方」の定義は厳しくなる。何かをする動力も強くなる。
     * 何もしないことは、自分にとって苦痛だ。奥底には二重の裏切りがある——好きな相手を裏切った感覚と、自分の好きそのものを裏切った感覚。
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`ファンによる襲撃から、一週間が過ぎた。`);
      await era.printAndWait(
        `事件の中心にいた、あなたと${falcon.name}の身の安全を考え。`,
      );
      await era.printAndWait(`学園はしばらく、外出を制限すると決めた。`);
      await era.printAndWait(`……ある意味では、救いでもある。`);
      await era.printAndWait(
        `忘れようと心の中で繰り返しても、あの空虚な顔が勝手に浮かぶ`,
      );
      await you.say_and_wait(`存在の不安、か。`, true);
      await era.printAndWait(
        `どの角度から見てもゼロだ。技能も経歴も空白だから、最初から入場の資格がない。`,
      );
      await era.printAndWait(
        `最初は、この道に向いていないのかもしれない、と別の方面へ逃げられた。`,
      );
      await era.printAndWait(
        `新しい業界でも、まったく同じ窮地にぶつかるまで。`,
      );
      await era.printAndWait(`振り返れば、ただ数年を無駄にしただけだった。`);
      await era.printAndWait(
        `熱い血で何かしたかったのかもしれない。現実の前で、自分は何もできないと認めさせられた。`,
      );
      await era.printAndWait(
        `現状に屈しない人にとって、自分の存在を証明することは、命より大事だ。`,
      );
      await era.printAndWait(
        `存在がなければ、命は表示も出力もなく、エネルギーだけを消費する過程にすぎない。`,
      );
      await era.printAndWait(
        `そのとき、スポットライトの下に立つ機会があったら。`,
      );
      await era.printAndWait(`それが、あなたたちに大きな傷を与えるとしても。`);
      await era.printAndWait(`すまない。だが、僕は存在しなければならない。`);
      await era.printAndWait(
        `迷いながら自分の存在を証明するものを探し、自ら色を塗って、同じ色の群れに入り、迷っていないふりをする。`,
      );
      await era.printAndWait(
        `自分の結論が間違っているかもしれないと知りつつ、いまは仮にこの見方で自分を納得させるしかない。`,
      );
      await era.printAndWait(
        `その角度から見れば、先週の襲撃は、存在を証明したい絶望した人が、いちばん話題になる題材を見つけただけだ。`,
      );
      await era.printAndWait(
        `相手がたまたま${falcon.name}のファンだっただけだ。`,
      );
      await era.printAndWait(
        `${falcon.name}がトレーナー室の扉をそっと開け、無理に微笑んだとき。`,
      );
      await era.printAndWait(
        `あなたは${falcon.name}への視線を下げ、トレーニング計画を眺めてぼんやりした。`,
      );
      await era.printAndWait(
        `先週の襲撃は危うかったが、実際の傷は下腹に一本の切り傷があるだけだった。`,
      );
      await era.printAndWait(
        `トレセンは、トレーナーが担当の${falcon.uma_sex_title}と衝突したときの暴力を想定し、制服の一部にケブラーを使っている。`,
      );
      await era.printAndWait(
        `怒った${falcon.uma_sex_title}の蹴りで重傷を防ぐためのものだが、防刃でも意外と効いた。`,
      );
      await era.printAndWait(`なんと言うか。災い転じて福、か。`);
      await you.say_and_wait(`ファル子……いや、${falcon.name}。`);
      await era.printAndWait(
        `散った思考を、目の前の${falcon.teen_sex_title}へ戻す。その芸名で${falcon.sex}を呼んでいいか、迷った。`,
      );
      await falcon.say_and_wait(`${callname}、ファル子は大丈夫だよ。`);
      await era.printAndWait(
        `想像より強い${falcon.teen_sex_title}は、嬉しいと同時に、少し悲しい。`,
      );
      await era.printAndWait(
        `影に覆われた${falcon.teen_sex_title}は、頭を下げた。`,
      );
      await falcon.say_and_wait(
        `ファル子は${falcon.uma_sex_title}アイドルとして、こういう不安は薄々あった。むしろ、いつか来るものだと思ってた。`,
      );
      await falcon.say_and_wait(
        `だから、${callname}が謝るんじゃなくて、謝るべきなのはファル子のほうだよ。`,
      );
      await era.printAndWait(
        `${falcon.name}の視線は上下に揺れ、こういう話は苦手らしい。`,
      );
      await era.printAndWait(`あなたは深く息を吸い、続けようとした——`);
      await falcon.say_and_wait(`ファル子、わかってる。`);
      await era.printAndWait(
        `鏡のような湖より静かな${falcon.name}が顔を上げ、あなたの目を見た。`,
      );
      await falcon.say_and_wait(
        `ファンは希望をファル子に預けてる。だからファル子には、汚れがあっちゃいけない。`,
      );
      await falcon.say_and_wait(
        `でも、ファル子はそうは思わない。アイドルになるための汗と、ほんの少しの運があれば。`,
      );
      await falcon.say_and_wait(
        `ファル子みたいな${falcon.uma_sex_title}でも、ステージの真ん中で輝ける……でも……こんなことするの、おかしくない？`,
      );
      await era.printAndWait(`その悲しい目から逃げたいのに、視線を外せない。`);
      era.printButton(`ファル子は、なぜアイドルになりたいの？`, 1);
      await era.input();
      await era.printAndWait(`逃げるほうが、逃げないより重いことになる。`);
      await falcon.say_and_wait(
        `……ファル子みたいに寂しい人も、孤独の痛みをしばらく忘れられるように。`,
      );
      await era.printAndWait(`そうだ。そのためだ。`);
      await era.printAndWait(`自分の不幸をどれだけ嘆いても、責任は同じだ。`);
      await era.printAndWait(
        `${falcon.uma_sex_title}アイドルとしてここまで順調に来られたこと自体、想像しにくい奇跡の幸運だ。`,
      );
      await you.say_and_wait(
        `わかってる。心臓を刳り抜かれたみたいな、暗い傷が、いつでも血を流してる。`,
      );
      await you.say_and_wait(
        `花と拍手がいくらその判断を否定しても、ライブが終わってステージを下りたとき、傷口から出る血が自分を問う。`,
      );
      era.printButton(
        `罪悪感を軽くするための涙より、アイドルにはやるべきことがある`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `ファル子が考えるべきは、次のレースの勝ち方と、シニア級のダートだ。`,
      );
      await you.say_and_wait(
        `ファンの期待に応えるだけじゃない。ダートの${falcon.uma_sex_title}アイドルを目指す後輩のためでもある。`,
      );
      await you.say_and_wait(
        `方向が見えなくてもいい、間違っていてもいい！ その傷を抱えたまま前へ進め！ レースでもステージの真ん中でも、輝き続けろ！`,
      );
      await you.say_and_wait(
        `${falcon.couple_title}に見せてやれ。初代の${falcon.uma_sex_title}アイドル、${falcon.name}がどこまで行けるか！`,
      );
      await era.printAndWait(
        `正しい方向と正しい目標が同時に揃って生まれる成功なんて、この世にはない。`,
      );
      await era.printAndWait(
        `真面目に考えれば、正しい方向も正しい目標も、存在しない。`,
      );
      await era.printAndWait(
        `それでも方向も目標も間違っていても、僕たちは無数の成功を作ってきた。そうだろう？`,
      );
      await era.printAndWait(
        `前半の旅の成功は全部そうやって来た。後半の成功だけが、間違った方向と間違った目標から生まれない理由があるか。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_48: (() => {
    const title = 'クリスマスの願い';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`中山競馬場・有馬記念`);
      await era.printAndWait(
        `観客席の吐息が薄い白い霧になり、冬の競馬場に漂っている。`,
      );
      await era.printAndWait(`今年の有馬記念も、相変わらず熱い。`);
      await era.printAndWait(
        `あなたと${falcon.name}は観客席に座り、実況が有馬記念へ向かうスターの競走${falcon.uma_sex_title}たちを紹介するのを聞いた。`,
      );
      await you.say_and_wait(
        `今年の有馬記念でいちばん注目の出走${falcon.uma_sex_title}は、ダイワスカーレットだね。`,
      );
      await falcon.say_and_wait(`スカーレットさん？`);
      await era.printAndWait(
        `騒がしい声の中では、${falcon.uma_sex_title}の自慢の聴力も枷になる。`,
      );
      await you.say_and_wait(`耳、ちゃんと守ってる？`);
      await falcon.say_and_wait(`ファル子、イヤーマフちゃんと付けてるよ！`);
      await era.printAndWait(
        `リボン付きのかわいいイヤーマフが、激しすぎる歓声でファル子が一時的に聞こえなくなるのを防いでいる。`,
      );
      await you.say_and_wait(`じゃあ、席を探しに行こう。`);
      await falcon.say_and_wait(`うん！ あの……${callname}`);
      await falcon.say_and_wait(`今日だけ、名前で呼んでいい？`);
      await era.printAndWait(
        `意外だった。${falcon.name}は、アイドルとしての肩の荷にこだわらなくなっていた。`,
      );
      await you.say_and_wait(`${falcon.name}、いっしょに行こう。`);
      await falcon.say_and_wait(`うん！`);
      await era.printAndWait(
        `観客がだいたい着席してから、二人は自分の席を見つけた。`,
      );
      await you.say_and_wait(`今年の有馬記念も、盛況だね。`);
      await falcon.say_and_wait(`スカーレットさんも出るんだって！`);
      await era.printAndWait(
        `青と白の勝負服の競走${falcon.uma_sex_title}が、コースへ入った。`,
      );
      await era.printAndWait(
        `いちばん目を引くのは、${falcon.sex}の長い茶色いツインテールだ。`,
      );
      await falcon.say_and_wait(
        `スカーレットさんの勝負服、テレビで見るよりきれい！`,
      );
      await you.say_and_wait(`今度は${falcon.sex}、どんな走りをするのかな。`);
      era.drawLine({ content: 'ウィンナーズステージ後' });
      await era.printAndWait(`ダイワスカーレットは、きれいに一着を取った。`);
      await era.printAndWait(`ステージの演技も、胸を熱くさせた。`);
      await era.printAndWait(`それが終わってから、`);
      await falcon.say_and_wait(`有馬記念のステージ、すごく広いね。`);
      await falcon.say_and_wait(
        `ファル子も、こんなステージに立てたらいいのに。`,
      );
      await era.printAndWait(
        `携帯の知らせでは、今年の観客は十一万人を超えた。`,
      );
      await era.printAndWait(`それに比べて、東京大賞典は二、三万人だ。`);
      await falcon.say_and_wait(
        `でも、それでもファル子はトップアイドルとして、ダートも人気にするんだ！`,
      );
      await era.printAndWait(`正統派アイドル、ということか。`);
      await you.say_and_wait(
        `じゃあまず東京大賞典から、その目標へ少しずつ進もう！`,
      );
      await falcon.say_and_wait(`うん！`);
      await era.printAndWait(`携帯を出して時刻を見ると、もう門限が近い。`);
      await you.say_and_wait(`いま帰っても間に合わない。近くで一泊しよう。`);
      await falcon.say_and_wait(
        `ん——${callname}、部屋はもう取ってあるんでしょ？`,
      );
      await you.say_and_wait(`部屋？`);
      await era.printAndWait(
        `慌てて携帯を開くと、近所のホテルはもう満室だった。`,
      );
      await era.printAndWait(
        `そのあいだに時間も過ぎ、いま駅まで走っても、トレセンへ戻る最終列車には間に合わない。`,
      );
      await falcon.say_and_wait(`……だ、大丈夫だよ、${callname}。`);
      await era.printAndWait(
        `力なく落ちたあなたの肩を見て、${falcon.name}は少し間を置き、身につけた小さな袋からカードを一枚取り出した。`,
      );
      await falcon.say_and_wait(`忘れるとこだった！ これ、${callname}に。`);
      await era.printAndWait(
        `あなたは${falcon.name}のサンタ衣装が刷られた小さなカードを受け取った。`,
      );
      await falcon.say_and_wait(`忘れるとこだった！ これ、${callname}に。`);
      await falcon.say_and_wait(
        `${callname}が急に言ってくれなかったら、ファル子、忘れるとこだった……あはは。`,
      );
      await era.printAndWait(
        `ファル子の照れた笑顔を見て、${falcon.sex}の期待する視線を追うと、裏面にも字があった。`,
      );
      era.printButton(`「ありがとう。」`, 1);
      await era.input();
      await era.printAndWait(
        `少し雑なアートサインと、「今日もファイト」と書いたファル子のデフォルメ顔。`,
      );
      await falcon.say_and_wait(`気分が沈んだら、ファル子を見れば元気出るよ！`);
      await era.printAndWait(`ありがたい。それなら——`);
      await you.say_and_wait(`近くの宿に、空きがないか聞いてみよう。`);
      await era.printAndWait(
        `近所のホテルは先に予約で埋まっている。だが事情で来られなくなった客もいる。その隙をつかめれば。`,
      );
      await era.printAndWait(
        `それに気づいて、二人は足を速めた。三軒のフロントを回ると、急用でキャンセルされた空き部屋が一つあった。`,
      );
      await falcon.say_and_wait(`これで、いいの？`);
      await era.printAndWait(
        `髪飾りを外して髪をほどいた${falcon.name}が、つぶやいた。`,
      );
      await era.printAndWait(
        `仕方ないことだ。あなたは${falcon.name}の小さな頭を撫でた。`,
      );
      await falcon.say_and_wait(`……`);
      await era.printAndWait(
        `電車に間に合わなかったことが、まだ落ち込ませているのだろう。あとで埋め合わせを考えよう。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_toky_dai_c: (() => {
    const title = 'スマートファルコン';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `立て直した${falcon.name}は、歩幅を少し緩めて進むと決めた。`,
      );
      await era.printAndWait(`ずっと自分を探してくれていたファンを、待つ。`);
      await era.printAndWait(`トレーナー室`);
      await you.say_and_wait(`これから先は、ファル子の頑張りを信じるよ。`);
      await falcon.say_and_wait(
        `${callname}も、観客席でファル子の成長を見ててね。`,
      );
      await era.printAndWait(
        `実際、この${falcon.teen_sex_title}は意外と強い。`,
      );
      await era.printAndWait(
        `考え直したあと、大半の予定を切り、少数のことに集中した。`,
      );
      await era.printAndWait(
        `方向を見つけ直し、着実に進み始めてから、まだ一ヶ月ほどだ。`,
      );
      await falcon.say_and_wait(`${callname}、左の髪飾り、直してくれる？`);
      await era.printAndWait(
        `姿見の中の${falcon.teen_sex_title}がいつもの顔に戻ると、言いようのない嬉しさが湧いた。`,
      );
      await falcon.say_and_wait(
        `東京大賞典は、有馬にはいつまでも届かないけど——`,
      );
      await era.printAndWait(`見物の客は、もう例年をはるかに超えている。`);
      await falcon.say_and_wait(
        `少なくとも、タンポポとしては、ファル子は幸せだよ♪`,
      );
      await era.printAndWait(`${falcon.name}は控え室の扉をそっと閉めた。`);
    };
    f.title = title;
    return f;
  })(),
  toky_dai_win_c: (() => {
    const title = '東京大賞典後・「スマートファルコン」というダートアイドル';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`${falcon.name}は今年の優勝を取った。`);
      await era.printAndWait(
        `ステージ上の${falcon.sex}は、もう一度一皮むけたようだった。`,
      );
      await era.printAndWait(
        `明るい笑顔とリズムの掴み方が、会場をうまく熱くした。`,
      );
      await you.say_and_wait(`ファル子……お疲れ`);
      await era.printAndWait(
        `ステージを下りた${falcon.name}は肩で息をし、全身の汗がアイドルとしての努力を示していた。`,
      );
      await era.printAndWait(
        `楽屋でも、ファンの声が潮のように長く続いて聞こえる。`,
      );
      await you.say_and_wait(`想像以上だったよ`);
      await era.printAndWait(`アイドルとしては、最高の栄誉だ。`);
      await falcon.say_and_wait(
        `${callname}がいなかったら、ファル子、これを見られなかったよ。`,
      );
      await falcon.say_and_wait(`全部ファル子の手柄っていうより`);
      await you.say_and_wait(`いっしょに頑張った結果だね。`);
      await era.printAndWait(
        `体はわずかに震えているのに、${you.name}へ輝く笑顔を向けたファル子が、手を伸ばした。`,
      );
      await falcon.say_and_wait(
        `これからの道も、${callname}といっしょに歩きたい。`,
      );
      await era.printAndWait(
        `汗で湿った小さな手を握った${you.name}も、微笑んで${falcon.name}を見た。`,
      );
      await you.say_and_wait(
        `僕もファル子からたくさん学んだ。これからもよろしく。`,
      );
      await era.printAndWait(
        `見つめ合う二人は、胸の恐れを全部吐き出すように笑った。知っているからだ——`,
      );
      await era.printAndWait(
        `——この世に、ここまで心が通う相手は、もう一人いない。`,
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '神社で祈願';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await falcon.say_and_wait(`何度来ても、ここはこんなに静かだね⭐`);
      await falcon.say_and_wait(
        `ん——いっそ神様にも、ファル子のライブ見てもらおっか！`,
      );
      era.printButton(`バカもほどほどに！`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name} は ${falcon.name} の頭を軽く叩いた。うぅん、という声のあと、波紋の水面は再び静まった。`,
      );
      await era.printAndWait(
        `頭を上げて長い列の参拝客を見ると、無力感が全身を襲う。`,
      );
      era.printButton(`参拝の人、想像より多いな。`, 1);
      await era.input();
      await falcon.say_and_wait(
        `みんな、時間をかけても叶えたい願いがあるからね。`,
      );
      await falcon.say_and_wait(
        `でもファル子は、ファン（予定）のみんなのために頑張るよ！`,
      );
      await era.printAndWait(
        `大勢が同じ場所へ進むのを見て、本能になったアイドル意識が${falcon.name}を一瞬で熱くした。`,
      );
      await you.say_and_wait(`……まずは参拝を終えよう。`);
      await era.printAndWait(
        `隣で元気が尽きない${falcon.teen_sex_title}を見て、${you.name} は少し頭を抱えた。`,
      );
      await era.printAndWait(
        `勝手なゲリラライブの迷惑でも、これから先のダートG1全勝という厳しい目標でもない。`,
      );
      await you.say_and_wait(`あの笑顔は、どう見ても作りものだ。`, true);
      era.drawLine();
      await era.printAndWait(`長い待ちのあと、二人は奉納箱の前に立った。`);
      await era.printAndWait(
        `目の前の三女神像を見て、三女神に繁栄を祈った河の神の話が頭に浮かぶ。`,
      );
      await era.printAndWait(`……繁栄を祈る河の神、か。`);
      await era.printAndWait(`思考が時間の前を行ったり来たりする。`);
      await falcon.say_and_wait(`三女神さま——`);
      await era.printAndWait(`体は隣の動きを真似た。`);
      await era.printAndWait(`その一瞬、${you.name} が出した答えは`);
      era.printButton(`河の神は、土地の人の健康を祈る（体力+600）`, 1);
      era.printButton(`河の神は、土地の人の勇気を祈る（全能力+10）`, 2);
      era.printButton(
        `河の神は、土地の人の知恵を祈る（パワー+10、スキルPt+100）`,
        3,
      );
      const ret = await era.input();
      await era.printAndWait(
        `そのあと、${you.name} の耳に三女神の囁きが届いた。`,
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'ファル子とバレンタイン♪';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`今年のバレンタインは、専用の会場で開かれた。`);
      await era.printAndWait(
        `ファル子はいつもの場所でやりたいと言い張ったが、来るファンと、好奇で来る観光客を考えると。`,
      );
      await era.printAndWait(`……あるいは、安全のためだったのかもしれない。`);
      await falcon.say_and_wait(`ファル子の感謝祭に来てくれて、ありがとう♪`);
      await falcon.say_and_wait(
        `いつもアイドルのファル子を黙って応援してくれるお礼に、昨日一日かけて作った贈り物だよ！`,
      );
      await era.printAndWait(
        `ファル子は会場のファンに、包装したチョコの箱を見せた。`,
      );
      await you.say_as_passer_by_and_wait(`ファン`, `ファル子！ ファル子！`);
      await falcon.say_and_wait(`うんうん！ みんなの熱、ファル子に届いたよ！`);
      await falcon.say_and_wait(
        `この勢いで、ファル子の気持ちが入ったチョコも味わってね！`,
      );
      await you.say_as_passer_by_and_wait(
        `ファン`,
        `おおおお！ ファル子！ ファル子！`,
      );
      era.drawLine();
      await falcon.say_and_wait(`これからもずっと、ファル子を応援してね！`);
      await era.printAndWait(
        `最後のファンがチョコを持って満足して去ると、会場には${you.name}と${falcon.name}だけが残った。`,
      );
      await era.printAndWait(
        `${falcon.name}の後ろに積まれたチョコの山も、配り切った。`,
      );
      await falcon.say_and_wait(`あ、待って、まだ一部ある！`);
      await era.printAndWait(
        `${falcon.sex}は隅からきれいに包んだギフトボックスを取り出した。会場を設えるときから用意してあったのだろう。`,
      );
      await falcon.say_and_wait(
        `これは競走${falcon.uma_sex_title}の${falcon.name}から、${callname}への日ごろの感謝。`,
      );
      await era.printAndWait(
        `${falcon.name}の声は想像より平坦で、変化は読めない。`,
      );
      await era.printAndWait(
        `考えすぎだろう。最近は、ちゃんと休んだほうがいい。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_febr_sta: (() => {
    const title = '先輩と後輩（一）';
    /** @param {CharaTalk} falcon スマートファルコン */
    const f = async (falcon) => {
      await falcon.say_and_wait(
        `トップアイドルへ進むファル子の走り、みんなレース場で見てね♪`,
      );
      await falcon.say_and_wait(`ファル子なら、いちばんいいレースを届けるよ⭐`);
      await era.printAndWait(
        `発走前にチラシを配るのは、もう二人の阿吽になっている。`,
      );
      await era.printAndWait(`${falcon.uma_sex_title}「あ、ファル子さん？」`);
      await era.printAndWait(
        `地方トレセンから来たらしき${falcon.uma_sex_title}が、${falcon.name}に気づいた。`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「ファル子先輩！ わたしもアイドルとしてダートでデビューしたいです！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「東京大賞典の走りを見て勇気をもらいました。わたしも、人に希望を届けるアイドルになりたいです！」`,
      );
      await era.printAndWait(
        `憧れの目で${falcon.name}を見る${falcon.uma_sex_title}。`,
      );
      await falcon.say_and_wait(`……ファル子`, true);
      await falcon.say_and_wait(
        `アイドルになりたかった、いちばん最初の気持ち、ファル子がちゃんと届ける！`,
      );
      await era.printAndWait(`複雑な顔のファル子は、レース場へ向かった。`);
    };
    f.title = title;
    return f;
  })(),
  febr_sta_win: (() => {
    const title = 'フェブラリーステークス後・後輩';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait('ウィンナーズステージ後');
      await falcon.say_and_wait(`応援、ありがとう！`);
      await era.printAndWait(
        `ウィンナーズステージをきれいに終えたファル子は、控え室へ戻った。`,
      );
      await you.say_and_wait(`ファル子、お疲れ！`);
      await era.printAndWait(
        `ミネラルウォーターとタオルを受け取ると、高ぶった気持ちをゆっくり落ち着ける。`,
      );
      await falcon.say_and_wait(`トップアイドルまで、また一歩近づいたね！`);
      await you.say_and_wait(`ファル子なら、絶対できる！`);
      await falcon.say_and_wait(`あのね、${callname}、ファル子……`);
      await era.printAndWait(`こんこんこん`);
      await era.printAndWait(`場違いなノックが聞こえた`);
      await you.say_and_wait(`ファル子のファンかも。`);
      await era.printAndWait(`控え室の扉をそっと開けた。`);
      await you.say_and_wait(
        `すみません、ファル子は休んでいます……どちらですか？`,
      );
      await era.printAndWait(
        `チラシを配っていたとき会った、後輩だと名乗った${falcon.uma_sex_title}だ。`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「ファル子先輩！ 優勝おめでとうございます！」`,
      );
      await falcon.say_and_wait(`え？`);
      await era.printAndWait(
        `${falcon.uma_sex_title}「ファル子先輩、知らないんですか？ ダートの${falcon.uma_sex_title}たちにとって、ファル子先輩は眩しい光なんです！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「芝に適性がなくてダートへ来たみんなは、もう退けないところまで来てるんです……でも、ファル子先輩が前へ進む希望を見せてくれました！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「だから、ファル子先輩はずっと輝き続けてください！」`,
      );
      await era.printAndWait(
        `熱を増す${falcon.uma_sex_title}は、${falcon.name}の手をきゅっと握った。`,
      );
      await falcon.say_and_wait(`あの、ファル子は`);
      await you.say_and_wait(
        `僕は${falcon.name}のトレーナーです。いまの${falcon.sex}は休みが必要です。話があるなら、僕にどうぞ。`,
      );
      await era.printAndWait(`ここでは、引いてはいけない。`);
      await era.printAndWait(
        `${falcon.uma_sex_title}「ファル子先輩のトレーナーさん？ すみません！ 興奮して忘れてました！」`,
      );
      await era.printAndWait(
        `${falcon.uma_sex_title}「お二人の時間を邪魔してすみません、失礼します！」`,
      );
      await era.printAndWait(
        `気まずい顔の${falcon.uma_sex_title}は、作り笑いのまま控え室を出ていった。`,
      );
      await you.say_and_wait(`やっと帰ったね。ファル子？`);
      await falcon.say_and_wait(
        `ファル子もつまずきながら進んでるのに、なんだか実感ないよ。`,
      );
      await era.printAndWait(`何か思いついたのか、ファル子は迷った顔をした。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_9: (() => {
    const title = 'スマートファルコン';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        '火のような空が紺に裂かれ、それから満天の星屑へ散る。',
      );
      await era.printAndWait('いつものと変わらないライブ。');
      await era.printAndWait(
        'シニア級に入って注目は少し落ちたが、ダートのファンの熱は減っていない。',
      );
      await era.printAndWait(
        '個性がこれほどはっきりしたダートアイドルが、珍しいせいだろう。',
      );
      await era.printAndWait([
        'ファンに囲まれた ',
        falcon.get_colored_name(),
        ' は、クリスタルにんじんのような引力を持っている。',
      ]);
      await falcon.say_and_wait(`ふぅ——みんな！ ありがとう！`);
      await era.printAndWait(
        `少し先のメドレーが終わりに入り、ファンは喜びをステージのアイドルへ渡している。`,
      );
      await you.say_as_passer_by_and_wait(
        `新しいファンA`,
        `CDで聞いただけだけど、やっぱり現場のほうが気持ちいいな。`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンB`,
        `ファル子が${falcon.uma_sex_title}アイドルの愛をみんなに平等に分けてるから、こんな引力があるんだよ。`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンC`,
        `空気読めないこと言うけど、ファル子、ちょっとおかしくない？`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンC`,
        `前のファル子は跳ねる元気があったのに、いまは変な感じがする。`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンD`,
        `次のレースのせいだろ。ファン発表会で、シニア級のダートを全部勝つって言ったし。`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンD`,
        `でも、そんな難しい目標でも、ファル子は笑えてる。`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンD`,
        `『これが${falcon.uma_sex_title}アイドルなんだ』って、いつも思う。`,
      );
      await you.say_as_passer_by_and_wait(
        `新しいファンE`,
        `そういえば去年、ファンの襲——`,
      );
      await you.say_as_passer_by_and_wait(
        `古参ファンB`,
        `ストップ！ それは話してはいけない禁忌だ！`,
      );
      await era.printAndWait(
        `盛り上がっていたファンの輪は、その冷水で途切れ、みんな話を続ける気をなくした。\n\n\n`,
      );
      await falcon.say_and_wait(`${callname}。`);
      await era.printAndWait(
        `最後に来ていたファンが去ったあと、${you.name}は少し離れた場所から${falcon.name}を迎えた。`,
      );
      await era.printAndWait(
        `笑顔の${falcon.teen_sex_title}は${you.name}と、今日のライブの成功と足りないところを洗い、肯定やより良い結論が出るたび、トレセンへ戻る小径に明るい笑い声が乗った。`,
      );
      await falcon.say_and_wait(`${callname}。`);
      await you.say_and_wait(`え？`);
      await falcon.say_and_wait(`残念だけど。`);
      await era.printAndWait(`${falcon.name}の声は、静かに満ちている。`);
      await falcon.say_and_wait(
        `ううん、なんでもない。こうして距離を置くのが、ファル子にも、${callname}にもいちばんいい。`,
      );
      await era.printAndWait(
        `いつもの無謀さとは違い、${falcon.name}は${you.name}に微笑んだ。`,
      );
      await falcon.say_and_wait(
        `ファル子も考えたの。${callname}との距離、近すぎたのかも。`,
      );
      await era.printAndWait(`うまく言えない隔たりが、二人のあいだに広がる。`);
      await falcon.say_and_wait(
        `${falcon.uma_sex_title}アイドルとして、ファンみんなを不平等に好きになっちゃダメだよ。`,
      );
      await you.say_and_wait(`いや、そこまでじゃ——`);
      await era.printAndWait(`${you.name}が次の言葉を探していると。`);
      await falcon.say_and_wait(`${callname}、これはしばらく預かって。`);
      await era.printAndWait(`${falcon.name}は額の髪飾りを、そっと外した。`);
      await you.say_and_wait(`……なぜ？`);
      await era.printAndWait(
        `驚きで思考が止まり、胸の疑問がそのまま口に出た。`,
      );
      await era.printAndWait(
        `${falcon.teen_sex_title}は笑って、水で湿ったリボンを渡した。`,
      );
      await you.say_and_wait(`ファル子にとって、大事なものだろう？`);
      await falcon.say_and_wait(`うん。ファル子には、比べられない宝物。`);
      await falcon.say_and_wait(
        `でも、自分のところに置くより、しばらく${callname}に借りてもらったほうが、いちばん役に立つと思う。`,
      );
      await you.say_and_wait(`いや、違う。どこか間違ってる。`);
      await era.printAndWait(
        `ジェットコースターが欠けたレールへ向かうのを、目の前で見るようだ。`,
      );
      await era.printAndWait(
        `握りしめた右拳を、万力のような細い掌が無理に開いた。`,
      );
      await falcon.say_and_wait(`${callname}、本当に木頭だね`);
      await era.printAndWait(
        `少し残念そうで、淀んだ水のような静けさで答えた。`,
      );
      await falcon.say_and_wait(
        `これからファル子は、${falcon.uma_sex_title}アイドルとして立つ。だから——`,
      );
      await era.printAndWait(`深淵まで。`);
      await falcon.say_and_wait(
        `これからよろしく、${you.actual_name}トレーナー。`,
      );
      await era.printAndWait(`なるほど。過去の自分と訣別するためのもの、か。`);
      await era.printAndWait(
        `わかりやすいな、ははは。答えは絶対にそれじゃないだろ。`,
      );
      await you.say_and_wait(`はは、そうだよな、違う、いや、たぶん。`);
      await you.say_and_wait(`${falcon.name}。`);
      await era.printAndWait(
        `教室に吊った蛍光灯が外れて、胸のところで割れたときの悲鳴のようだ。`,
      );
      await falcon.say_and_wait(`だから、${callname}、これでいいの。`);
      await era.printAndWait(`${falcon.name}は表情を変えず、一歩下がった。`);
      await you.say_and_wait(`ふざけるな！`);
      await era.printAndWait(
        `${falcon.name}といっしょに過ごした時間を、否定するのか。`,
      );
      await era.printAndWait(`なぜ、ここまで頑張って、この結果になる。`);
      await era.printAndWait(
        `怒りで乱れた体は、悔しさと憎しみを吐き出したいのに、空虚な破片の言葉しか出せない。`,
      );
      await era.printAndWait(
        `視界は霞み、口は自分でもわからない会話を繰り返し、目の前の事実を無意識に拒む。`,
      );
      await era.printAndWait(
        `${you.name}が目眩から戻ったとき、隣の${falcon.teen_sex_title}はもういなかった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_10: (() => {
    const title = '目眩';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`トレーナー室\n`);
      await falcon.print_and_wait(`気が乗らない。`);
      await falcon.print_and_wait(
        `${falcon.name}の決然とした態度のせいか、どこから手をつけていいかわからない。`,
      );
      await falcon.print_and_wait(
        `${falcon.name}に嫌われたのか。ライブを見に行きたいと言っても、${falcon.name}は理由をつけて断る。`,
      );
      await falcon.print_and_wait(`でも——`);
      await falcon.print_and_wait(`断られるほど、パニックは増す。`);
      await you.say_and_wait(`くそ！`);
      await falcon.print_and_wait(`机を強く叩いて、胸の熱を吐く。`);
      await falcon.print_and_wait(
        `${falcon.sex}に伝えたい。アイドルとして自分の幸せを追うことは、何も間違っていない、と。`,
      );
      era.drawLine();
      await falcon.print_and_wait(`ありがとう、みんな！`);
      await falcon.print_and_wait(
        `いつもの二時間ライブのあと、さらに三曲を一気に歌った。`,
      );
      await falcon.print_and_wait(`少し休めば、そのまま三時間は歌える。`);
      await falcon.print_and_wait(`でも、どうしても気が乗らない。`);
      await falcon.print_and_wait(`ファンに、この気の乗らない顔を見られたら。`);
      await falcon.print_and_wait(`自分でも、自分を許さないだろう。`);
      await falcon.print_and_wait(`${callname}に悩みを話せば——`);
      await falcon.print_and_wait(`疲れた体が、弱い言葉を出す。`);
      await falcon.say_and_wait(
        `ファル子は、大事な${callname}を、もう危険に遭わせられない。`,
        true,
      );
      await falcon.print_and_wait(`傷を押さえて、血の中に立つ${callname}。`);
      await falcon.print_and_wait(`ダメだ。これ以上、考えちゃいけない。`);
      await falcon.print_and_wait(
        `${falcon.name}は${falcon.uma_sex_title}アイドルとして、もう失格だ。`,
      );
      await falcon.print_and_wait(`でも——`);
      await falcon.print_and_wait(
        `胸の疑問を無理に押し込む。完璧な${falcon.uma_sex_title}アイドルに、傷は一つも許されない。`,
      );
      await falcon.say_and_wait(`ファル子、ファイト！`);
      await falcon.print_and_wait(
        `もう一度自分を鼓舞して、${falcon.uma_sex_title}アイドルの${falcon.name}は楽屋からステージへ戻った。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = 'ファン感謝祭♪';
    /**
     * シニア級、スマートファルコンはダートのウマ娘アイドルとしてダートの人気を上げた
     * ウマ娘A・Bはダートを選んだ。Aは外向、Bは内向
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(
        `ファンへの日ごろの礼として開く感謝イベントが、また始まった。`,
      );
      await era.printAndWait(`だが、以前とは違う。`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `${falcon.name}先輩、いっしょに写真撮っていいですか？`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}B`,
        `わたしもファル子と撮りたい！`,
      );
      await era.printAndWait(
        `入学したばかりの小さな${falcon.uma_sex_title}たちに囲まれた${falcon.name}。`,
      );
      await falcon.say_and_wait(`ファル子、こんなに人気なんて……`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `ファル子先輩は、いまダートの人気スターですよ！`,
      );
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `ダートのレースって言ったら、みんな${falcon.name}を思い浮かべます！`,
      );
      await falcon.say_and_wait(`わあ——トップアイドルまで、また一歩！`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `それにそれに、ファル子先輩がダートで活躍して注目が集まって、目立たなかったダートの${falcon.uma_sex_title}たちも、やっと見られるようになりました！`,
      );
      await falcon.say_and_wait(
        `全部ファル子の手柄じゃないよ。ずっと応援してくれた——みんなのおかげ。`,
      );
      await falcon.say_and_wait(
        `というわけで、応援してくれるみんなへのお礼に、十時から第二ステージでファンへのお返しライブをするよ。`,
      );
      await falcon.say_and_wait(`みんな、絶対来てね？`);
      await you.say_as_passer_by_and_wait(
        `${falcon.uma_sex_title}A`,
        `ファル子！ ファル子！`,
      );
      era.drawLine();
      await falcon.say_and_wait(`～～～♪ ありがとう、みんな！`);
      await you.say_as_passer_by_and_wait(`ファン`, `ファル子！ ファル子！`);
      await falcon.say_and_wait(
        `次のレースも、輝くファル子を見ててね？ それじゃ、いち、に`,
      );
      await falcon.say_and_wait(`ファル子が逃げたら？`);
      await you.say_as_passer_by_and_wait(`ファン`, `追いかけるしかない！`);
      await falcon.say_and_wait(`地平線の果てまで追うの～？`);
      await you.say_as_passer_by_and_wait(
        `ファン`,
        `そこがファル子の大ステージ！`,
      );
      await falcon.say_and_wait(
        `道がなければファル子が見つける！ 目標を見つけたら、すぐつかまえて！`,
      );
      await you.say_as_passer_by_and_wait(`ファン`, `——大きな愛をつかみ取れ！`);
      await falcon.say_and_wait(
        `最強の${falcon.uma_sex_title}アイドル、${falcon.name}♪ 今日も届いたよ⭐`,
      );
      await you.say_as_passer_by_and_wait(
        `ファン`,
        `おおおおおおおお！ ファル子！ ファル子！`,
      );
      await era.printAndWait(`ファル子のステージは大成功だった。`);
      era.drawLine();
      await you.say_and_wait(`少し、あたりを歩いてみよう`, true);
      await era.printAndWait(
        `もともと人通りの少なかった小道も、来場者で混み合っている。`,
      );
      await era.printAndWait(
        `近道から抜けたかった${you.name}には少し迷惑だったが、びっしりと詰まった人混みには、どこか虚ろな安心があった。`,
      );
      await era.printAndWait(
        `ある学者の言葉を思い出す。人が安定した付き合いを保てるのは百五十人、さらに深く関われるのは二十人ほど、親友になれるのはわずか五〜七人だという。`,
      );
      await era.printAndWait(
        `彼らにとって自分は、その世界の取るに足らない脇役か、七十億分の一の背景板にすぎないのだろう。`,
      );
      await era.printAndWait(
        `そう考えると、たとえ通りで突然${falcon.uma_sex_title}になっても、大多数にとっては一ヶ月も持たないニュースでしかない。`,
      );
      await era.printAndWait(
        `海流に乗る魚群のように、気づいたらサブステージのほうへ来ていた。`,
      );
      await era.printAndWait(
        `一日限りのスターである${falcon.uma_sex_title}たちが輝く瞬間を見る。`,
      );
      await you.say_and_wait(`……${falcon.name}`, true);
      await era.printAndWait(
        `トップの${falcon.uma_sex_title}アイドルを目指し、果てまで輝き続ける、負けず嫌いの${falcon.teen_sex_title}。`,
      );
      await era.printAndWait(
        `${falcon.name}があわててふたりの間に線を引いたのは、自分が思っていたほど単純な話ではなかった気がする。`,
      );
      await you.say_and_wait(`${falcon.name}にも、事情があるんだ。`);
      await era.printAndWait(`それに気づくだけでも、深い慰めになった。`);
      await era.printAndWait(
        `——たとえその安心が本物でなくても、本物でない安心も、安心ではある。`,
      );
      await era.printAndWait(`無理にでも、そう認める。`);
      await you.say_and_wait(
        `機会を見て、${falcon.name}とちゃんと話そう。`,
        true,
      );
      await era.printAndWait(
        `${you.name}は、意識をふたたびトレーニング計画へ戻した。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_17: (() => {
    const title = 'もし涙が瞼へ戻るなら';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `決心した${you.name}は、無理にでも${falcon.name}の手を引いた。`,
      );
      await you.say_and_wait(
        `ごめん。失礼なのは分かってる。でも、変えられるとしたら、これしかない。`,
      );
      await era.printAndWait(
        `問答無用で${falcon.sex}の手首を引き、目的地へ向かう。`,
      );
      await era.printAndWait(
        `最初は驚いて力が入ったが、すぐにその力は弱まった。`,
      );
      await era.printAndWait(
        `${you.name}の胸は、もうすぐ叶うはずの憧憬でいっぱいだった。`,
      );
      await era.printAndWait(
        `${falcon.sex}に伝えたい。アイドルとして、自分の幸せを追いかけていいのだと。`,
      );
      await era.printAndWait(
        `${you.name}と${falcon.name}は、その広い芝生へ出た。`,
      );
      await era.printAndWait(
        `耐えがたい気まずい空気が、ふたりのあいだに広がる。`,
      );
      await era.printAndWait(
        `ひとりでこんな重いものを背負わなくていい。あれはただの事故だ。あとは意識を——`,
      );
      await era.printAndWait(
        `もし${you.name}が${falcon.name}だったら。そんな言葉で、自分を説得できるだろうか。`,
      );
      await you.say_and_wait(`……もう少し、信じてほしい。`);
      await era.printAndWait(`ファル子は、もう限界だった。`);
      await falcon.say_and_wait(`……え？`);
      await era.printAndWait(`${falcon.name}の声には、戸惑いが混じっていた。`);
      await falcon.say_and_wait(`${callname}のこと、ずっと信じてるよ？`);
      await era.printAndWait(`違う、と${you.name}は首を横に振る。`);
      await you.say_and_wait(
        `トレーナーと${falcon.uma_sex_title}だけでも、ファンとアイドルだけでもなく、いちばん信頼できる相手として${falcon.name}に扱われたいんだ。`,
      );
      await falcon.say_and_wait(
        `……ファル子のせいでも、${callname}が傷つくの？`,
      );
      era.printButton(`${falcon.name}への愛は、このくらいでは揺れない。`, 1);
      era.printButton(`ファル子への愛は、このくらいでは揺れない。`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(`……え？`);
        await era.printAndWait(
          `信じられない言葉を聞いたように、${falcon.name}の瞳が一瞬、大きく開いた。`,
        );
        await falcon.say_and_wait(
          `……ひどい……大好き……${callname}、そんなこと言っちゃだめ……`,
        );
        await falcon.say_and_wait(`このままじゃ、ファル子……どう……ごめん。`);
        await era.printAndWait(
          `錯覚のように、顎に鋭い痛みが走って、${you.name}は闇に落ちた。`,
        );
        await era.printAndWait(`そのまま、深く眠る。`);
      } else {
        await falcon.say_and_wait(`……ファル子、なの？`);
        await era.printAndWait(`${falcon.name}の表情が硬くなる。`);
        await falcon.say_and_wait(
          `ファル子……やっぱりファル子だよね……${callname}。`,
        );
        await era.printAndWait(`懐かしむように、目を細めた。`);
        await falcon.say_and_wait(
          `ねえ……ファル子を見て。${callname}のためなら、ファル子は何でも……`,
        );
        await era.printAndWait(`くすぶっていた目が、一瞬で死んだようになる。`);
        await falcon.say_and_wait(
          `ちがう！ こんなファル子は、${callname}が好きな、ファンみんなを包む${falcon.uma_sex_title}アイドルじゃない！`,
        );
        await era.printAndWait(`罪悪感が、針のように胸に刺さる。`);
        await falcon.say_and_wait(
          `ステージの上のファル子はみんなのもの。こんな……こんなこと、許されないよ。`,
        );
        await falcon.say_and_wait(
          `ファル子が${falcon.uma_sex_title}アイドルの原則を捨てたせいで、${callname}はぼろぼろのぬいぐるみみたいに、血の海に捨てられた`,
        );
        await falcon.say_and_wait(
          `なのに、愛は平等に分けるって誓ったのに……${callname}を見ると、もっと注ぎたくなっちゃう。`,
        );
        await falcon.say_and_wait(
          `ファル子は${callname}に全部を注げない。注いだ瞬間、ファル子はファル子じゃなくなる。`,
        );
        await era.printAndWait(
          `ただの失敗より、全力でぶつかった末の二択のほうが、悲しい。`,
        );
        await falcon.say_and_wait(`……それなら。`);
        await era.printAndWait(
          `錯覚のように、顎に鋭い痛みが走って、${you.name}は闇に落ちた。`,
        );
        await era.printAndWait(`そのまま、深く眠る。`);
      }
      era.drawLine();
      await era.printAndWait(`${you.name}は、またあの草地に立っていた。`);
      await era.printAndWait(
        `廃墟の隙間の草地。遠くの空から来る積乱雲。懐かしい、きれいな時間。`,
      );
      await era.printAndWait(`そして隣の${falcon.teen_sex_title}。`);
      await era.printAndWait(
        `そうだ。こういう場所こそ、ちゃんと話すのに向いている。`,
      );
      await you.say_and_wait(`ファル子——`);
      await era.printAndWait(`ファル子は、何も答えない。`);
      await you.say_and_wait(`ファル子？`);
      await era.printAndWait(
        `${you.name}は、試しに隣の${falcon.teen_sex_title}に触れた。`,
      );
      await era.printAndWait(`体温は普通で、指に伝わる肌の感触も変わらない。`);
      await you.say_and_wait(
        `よく見ると、細い銀の糸が${falcon.sex}を操っているみたいだ。`,
      );
      await era.printAndWait(`人形みたいに。`);
      await you.say_and_wait(`糸をたどれば、操っている相手が見つかるかも。`);
      await era.printAndWait(`親指と人差し指で細い糸をつまみ、源へ——`);
      await era.printAndWait(`激しい光が${you.name}の目を塞いだ。`);
      await era.printAndWait(`眼前の草地が、ステージに変わる。`);
      await era.printAndWait(
        `自分がステージの中央に立っている。いや、正確には${falcon.name}が立っている。`,
      );
      await era.printAndWait(
        `びっしりの観客が、${you.name}の知っている曲に合わせて揺れている。`,
      );
      await you.say_and_wait(`ライブ？ なのに、違和感がひどい。`);
      await era.printAndWait(`さっきから、空気にかすかな生臭い匂いがある。`);
      await era.printAndWait(
        `それが何を意味するか気づいた瞬間、毛穴が立った。`,
      );
      await you.say_and_wait(`ファル子？`);
      await era.printAndWait(
        `ファル子と呼ばれた人形が${you.name}のほうを向き、そして——`,
      );
      await era.printAndWait(`左目右目左耳右耳左鼻右鼻、口の中の暗い赤い液体`);
      await era.printAndWait(
        `視覚触覚嗅覚味覚聴覚理性感性が、ねばつく一塊になって混ざる\n\n`,
      );
      await you.say_and_wait(`はぁはぁはぁ。`);
      await era.printAndWait(
        `悪夢から跳ね起きる。額の汗、湿ったシャツ。さっきのすべては夢だったと、どれもが告げている。`,
      );
      await you.say_and_wait(`今のは？`);
      await era.printAndWait(`液体を強く咳き出すと、口に苦い生臭さが残る。`);
      await era.printAndWait(
        `前に何があったか思い出したかったが、少し考えるだけで頭が割れそうになる。`,
      );
      await era.printAndWait(`いったん諦めて、まわりを見る。`);
      await era.printAndWait(
        `自分を載せているソファ。右側の執務机。その奥の壁に、額縁入りの写真。`,
      );
      await you.say_and_wait(`トレーナー室に戻った？`);
      await era.printAndWait(
        `記憶が消える直前、何をしていたのか。倒れたあと、誰が運んでくれたのか。`,
      );
      await era.printAndWait(
        `無意識にズボンのポケットへ手を入れ、携帯を確かめる。`,
      );
      await era.printAndWait(`もっと柔らかいものに触れた。`);
      await you.say_and_wait(`これは？`);
      await era.printAndWait(`髪を留めるための、丁寧に手入れされたリボン。`);
      await era.printAndWait(`ファル子が逃げたら？`);
      await you.say_and_wait(`……なるほど。`);
      await era.printAndWait(`答えは、もう明らかだった。`);
      await era.printAndWait(`大切にしまっていたリボンを、手首に結ぶ。`);
      await era.printAndWait(`${you.name}は決めた\n`);
      era.printButton(`${falcon.name}を追う`, 1);
      await era.input();
      era.drawLine();
      await era.printAndWait(
        `どれだけ経ったかも分からない。商店街、百貨店、川辺の草地。`,
      );
      await era.printAndWait(
        `親しいファンや友人に聞いても、答えはどれも否定だった。`,
      );
      await you.say_and_wait(`はぁ……はぁ……はぁ……`);
      await era.printAndWait(
        `ここで諦めて、ファル子のそばから逃げるのは、やっぱり悔しい。`,
      );
      await era.printAndWait(`君子危うきに近寄らず、という。`);
      await era.printAndWait(
        `東京のような大都市でも、深夜の徘徊はかなり危ない。`,
      );
      await era.printAndWait(
        `こんなことになったのは、自分にも責任があるのだろう。`,
      );
      await era.printAndWait(
        `だが、それで自分を責める理由にはならない。自分は想像ほど賢くもなく、想像ほど勇気もない。`,
      );
      await era.printAndWait(
        `知恵もこの程度、勇気もこの程度。それは、理想どおりでない現実が証明している。`,
      );
      await era.printAndWait(
        `それが分かっているなら、後悔するのは、知恵も勇気もあるのに失敗した自分を後悔することになる。`,
      );
      await era.printAndWait(`認知的不協和へ落ちる危険は、かなり高い。\n`);
      await era.printAndWait(`気づいたら、見慣れた草地に戻っていた。`);
      await era.printAndWait(
        `春から夏への端境。深夜の草地は、思ったより寒い。`,
      );
      await era.printAndWait(`${you.name}は思わず身震いした。`);
      await era.printAndWait(
        `春から夏への端境。深夜の草地は、思ったより寒い。`,
      );
      await era.printAndWait(
        `湿った空気に土の香りが混じり、月明かりの廃墟が草地を囲んでいる。`,
      );
      await era.printAndWait(`幕が下りたみたいに。`);
      await era.printAndWait(
        `そして待っていた${falcon.teen_sex_title}——${falcon.name}が、その草地にいた。\n`,
      );
      await era.printAndWait(
        `${falcon.sex}に謝って、ちゃんと話せば、誤解は解ける。`,
      );
      await falcon.say_and_wait(`え？ ${callname}、もう……`);
      await era.printAndWait(`ステージの主役が、驚いた顔で${you.name}を見る。`);
      await era.printAndWait(
        `昨日の午後から何も食べていないからか。今にも崩れそうな${falcon.sex}は、青白い人形のように脆かった。`,
      );
      await falcon.say_and_wait(
        `……ううん、大丈夫だよ？ ファル子はちょっと悩んでるだけ。明日になれば、またいつもの——`,
      );
      await era.printAndWait(
        `両脚を揃えたまま地面に崩れ、苦しそうに咳き込む。`,
      );
      era.printButton(`ファル子！`, 1);
      await era.input();
      await era.printAndWait(
        `用意していた言葉は全部飛び、${you.name}は${falcon.teen_sex_title}のもとへ走った。`,
      );
      await you.say_and_wait(`我慢して。すぐ終わる。`);
      await era.printAndWait(`${falcon.name}が${you.name}をつかんだ。`);
      await era.printAndWait(
        `両手に伝わる冷たさより、明るい両目のほうが${you.name}を引きつけた。`,
      );
      await falcon.say_and_wait(
        `ファル子……${callname}を責めるつもりは……ただ。`,
      );
      await falcon.say_and_wait(
        `ファル子の幸せより……${callname}がもっと幸せなら……`,
      );
      await falcon.say_and_wait(
        `ごめん……ファン1号の幸せも守れないなんて、アイドル失格だね……`,
      );
      await falcon.say_and_wait(`……ごめんなさい。`);
      await era.printAndWait(
        `胸に溜まっていた苦しみを吐き出したあと、${falcon.name}はそのまま倒れ込んだ。`,
      );
      await era.printAndWait(
        `心の中では見当がついていた。${falcon.sex}の口から聞くまで確認できなかった、${falcon.name}が本当に望んでいたこと。`,
      );
      await era.printAndWait(`ごめん。こんなことになって。`);
      era.printButton(`${falcon.name}をそっと背負う`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name}は${falcon.teen_sex_title}をそっと背負い、${falcon.sex}と歩く重さを確かめた。`,
      );
      await era.printAndWait(`来た道は、思ったより長かった。`);
      await era.printAndWait(
        `——だが${falcon.name}にとっては、人生でいちばん大事な成人の儀だったのかもしれない。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_18: (() => {
    const title = '日常';
    /**
     * 頭の中に、トレーナーとの過去が閃く
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`大きな揺れで目が覚めた。`);
      await era.printAndWait(
        `まだぼやけた視界の奥で、橙色の色塊が動いている。`,
      );
      await era.printAndWait(`腫れた両目をこすり、意識を集めようとする。`);
      await era.printAndWait(
        `同じように迷っている${falcon.teen_sex_title}と目が合った。`,
      );
      await falcon.say_and_wait(`あ……`);
      await era.printAndWait(
        `${falcon.teen_sex_title}も今起きたらしく、未知の天井に首を傾げている。`,
      );
      await you.say_and_wait(`こんにちは、${falcon.name}。`);
      await era.printAndWait(
        `何かに気づいたのか、瞳が一気に開き、耳がぴんと立つ。`,
      );
      await falcon.say_and_wait(
        `——え？ ええ！ なんで${callname}の部屋にいるの？`,
      );
      await era.printAndWait(
        `ふたりの絆のおかげで、${falcon.name}は襲いかからず、声を上げて聞いただけだった。`,
      );
      await you.say_and_wait(
        `ごめん、勝手だったけど。外泊許可は寮長に確認してもらってある。`,
      );
      await falcon.say_and_wait(`それって……${callname}がファル子を……`);
      await you.say_and_wait(
        `ちがう！ ファル子の飛びすぎる思考、もうついていけない。`,
      );
      await you.say_and_wait(
        `許可なしにトレセンを出て病院へ行って、週刊誌に撮られたら、そのままゴシップの一面だ。`,
      );
      await you.say_and_wait(`僕もファル子も、名誉がかなり傷つく。`);
      await you.say_and_wait(
        `だから、医者から大事はない、しっかり休めと言われたあと、${falcon.name}が巡回の過労で倒れた、という理由で理事長に外泊許可を出した。`,
      );
      await you.say_and_wait(
        `深夜だったのに、たづなさんがすぐ返信してくれて助かった。`,
      );
      await you.say_and_wait(`ところで、ファル子、いまの調子は？`);
      await era.printAndWait(
        `${you.name}の話を黙って聞いていた${falcon.name}が、ベッドから立ち上がる。`,
      );
      await falcon.say_and_wait(`ごめん。${callname}に、こんなに迷惑かけて。`);
      await era.printAndWait(
        `それから${you.name}のほうへ向き直り、深く頭を下げた。`,
      );
      await you.say_and_wait(
        `ごめん。${falcon.name}をもっと信頼できていれば、ファル子をこんな目に遭わせずに済んだ。`,
      );
      await era.printAndWait(`頭の中に、${falcon.name}の悲しい笑顔がよぎる。`);
      await you.say_and_wait(
        `焦りを抑えられていれば、ファル子をこんなに苦しめなかった。`,
      );
      await era.printAndWait(`${you.name}も、深く頭を下げた。`);
      await falcon.say_and_wait(
        `えっ！ 間違えたのはファル子なのに、${callname}がそんなことしなくていいよ。`,
      );
      await era.printAndWait(
        `頭を上げて止めようとした${falcon.name}と、${you.name}の頭がぶつかった。`,
      );
      await era.printAndWait(`${you.name}の鼻に、強い衝撃のしびれが走る。`);
      await falcon.say_and_wait(`あ、${callname}。`);
      await you.say_and_wait(`ん？ どうした？`);
      await era.printAndWait(
        `${you.name}が無意識に鼻を触ると、真っ赤な液体が鼻腔から口へ流れ込む。`,
      );
      await era.printAndWait(
        `……なぜか、苦い鉄の味が${you.name}に安心をくれた。`,
      );
      await falcon.say_and_wait(`${callname}、座って！`);
      await era.printAndWait(
        `${falcon.name}は問答無用で${you.name}をベッドに座らせ、${you.name}はナプキンを半分に裂いて折り、出血している鼻を塞いだ。`,
      );
      await you.say_and_wait(`……ははは。`);
      await era.printAndWait(
        `患者と看病する側が入れ替わった光景に、笑いが止まらなかった。`,
      );
      await era.printAndWait(
        `まだ定着していないナプキンが揺れで空に赤い糸を描き、次の瞬間、${you.name}のトレーナー外套を濡らした。`,
      );
      await falcon.say_and_wait(`えええっ！`);
      await era.printAndWait(
        `いつものように、てんてこ舞いの日常がまた始まる。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_23: (() => {
    const title = '休日';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     * @param {string} callname_4 マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (falcon, maru, you, callname, callname_4) => {
      await era.printAndWait(
        `春と夏が入り混じる季節。空からの光にも、熱が混ざり始めている。`,
      );
      await era.printAndWait(
        `だが今の${you.name}には、寒くもなく暑くもない、ちょうどいい温度だった。`,
      );
      await era.printAndWait(
        `……事件の波にもがいて、一段落ついて、やっと生き残った。`,
      );
      await era.printAndWait(
        `商店街を行き交う人たちを見ていると、どこか現実離れした気分になる。`,
      );
      await era.printAndWait(
        `彼らも${you.name}と同じように、苦難にもがいて、なんとか生き残った仲間なのだろうか。`,
      );
      await era.printAndWait(`前回は生き延びた。次で失敗したら、どうなる。`);
      await era.printAndWait(
        `一度失敗すれば、すべてがゼロに戻る。あの場所（エデン）へ持っていけるものは、何ひとつない。`,
      );
      await era.printAndWait(`人は、なぜ恐れないのだろう。`);
      await era.printAndWait(
        `いや。死の前に立ってこそ、生きている幸福が与えられた特権だと分かる。`,
      );
      await era.printAndWait(
        `いつかは何も持たずに世界を去る。だからこそ、生き残った一日一日を、余計に大事にする。`,
      );
      await falcon.say_and_wait(`${callname}、お待たせ♪`);
      await era.printAndWait(
        `私服に着替えた${falcon.name}が、小走りで${you.name}の前に現れた。`,
      );
      await era.printAndWait(
        `髪を自然に下ろしている。独特の声でなければ、往来の小さな${falcon.uma_sex_title}と見分けがつかない。`,
      );
      await era.printAndWait(
        `${you.name}は預かっていたリボンを返そうとしたが、「${callname}のところに置いといたほうがいいよ。ママも賛成」と断られた。`,
      );
      await era.printAndWait(
        `……小さな${falcon.uma_sex_title}に興味があるタイプではないつもりだが、相手を見るたび、胸に言いようのない感情が湧く。`,
      );
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `相手は${you.name}の複雑な気持ちに気づかず、相変わらず眩しい笑顔で${you.name}を見ている。`,
      );
      await era.printAndWait(
        `休日のせいで、交差点に立つふたりは、ときどき変な視線を向けられる。`,
      );
      await you.say_and_wait(`とりあえず、近くの百貨店を見て回ろう！`);
      await era.printAndWait(
        `迷っていると貴重な休みが消える。${you.name}は巨大な看板のあるビルを指した。`,
      );
      await falcon.say_and_wait(
        `えっ！ あそこに有名なスイーツ店が新しくできたんだよね！`,
      );
      await falcon.say_and_wait(`急ごう、今すぐ行こう！`);
      await era.printAndWait(
        `${falcon.name}が${you.name}の手を引いてスイーツ店へ向かう。`,
      );
      era.drawLine();
      await era.printAndWait(
        `店員からメニューを受け取り、びっしりのスイーツ写真を見て、${you.name}は迷った。`,
      );
      await falcon.say_and_wait(`${callname}は、なにが好き？`);
      era.printButton(`フルーツパフェがいいかも！`, 1);
      era.printButton(`チョコの新作も気になる！`, 2);
      if ((await era.input()) === 1) {
        await falcon.say_and_wait(
          `ファル子も、あの甘酸っぱさのパフェ好きだよ。`,
        );
        await falcon.say_and_wait(
          `口の中に広がる冷たさと甘さ、${callname}と初めて会ったときみたい♪`,
        );
      } else {
        await falcon.say_and_wait(`ファル子も、この味のチョコ食べてみたいな♪`);
        await falcon.say_and_wait(`……⭐`);
        await era.printAndWait(
          `……なぜか${falcon.sex}が、こっそり口を覆って笑っている。`,
        );
        await era.printAndWait(`思考が、知らない次元へ飛んだのか。`);
      }
      await maru.say_and_wait(
        `ハーイ！ こんにちは！ ここでファル子に会うなんて。`,
      );
      await falcon.say_and_wait(`こんにちは⭐ マルゼン先輩！`);
      await era.printAndWait(
        `少し離れた席でひとりスイーツを味わっていたマルゼンスキーが声をかけてきた。`,
      );
      await maru.say_and_wait(
        `最近ね、ダートのレースが流行ってるってアタシ聞いたの。`,
      );
      await maru.say_and_wait(
        `だから流行を追って、ダートで大活躍してるファル子のレースを観に行ったわ。`,
      );
      await maru.say_and_wait(
        `ダートを選んだ後輩たちに走り方を訊かれたから、ちゃんと観に行ったのよ。`,
      );
      await maru.say_and_wait(
        `でもファル子みたいに全力で輝くアイドルを見てると、後輩がいつ先輩を追い越すかって、複雑な気持ちになるわね。`,
      );
      await you.say_and_wait(
        `ファル子だからね。${falcon.sex}がいれば、ダートはもっと人気になる。`,
      );
      await falcon.say_and_wait(`……！`);
      await maru.say_and_wait(
        `ところで、次は帝王賞に出るんでしょ？ アタシも会場まで応援に行くわ！`,
      );
      await falcon.say_and_wait(
        `そのときはマルゼン先輩に、後輩のいいところを見せるから！`,
      );
      await era.printAndWait(
        `笑顔のマルゼンスキーが、視線を${you.name}へ向けた。`,
      );
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('love:4') > 90
      ) {
        await you.say_and_wait(`奇遇だね、マルゼンスキー。`);
        await era.printAndWait(
          `マルゼンスキーは微笑んだまま、手のコーヒーをかき混ぜている。`,
        );
        await you.say_and_wait(`……あ。`);
        await maru.say_and_wait(
          `あら、トレーナー君？ 今日はトレーニング場をスイーツ店にしたの。賢さ特訓？`,
        );
        await maru.say_and_wait(
          `ふふ～お姉さんも、フルーツパフェを食べながら賢さを一気に上げたいわ。`,
        );
        await era.printAndWait(
          `遠回しに、トレーナーの仕事じゃないでしょう、と刺してくる。`,
        );
        await era.printAndWait(
          `${falcon.name}との関係はほんの少し近づいたつもりだが、まだ順調なはずだ。`,
        );
        await falcon.say_and_wait(
          `お待たせ⭐ ${callname}……あとマルゼンスキー先輩。`,
        );
        await era.printAndWait(
          `ふたりの微妙な空気に気づいたのか、長い列から走ってきた${falcon.name}の足が、だんだん遅くなる。`,
        );
        await maru.say_and_wait(`ファル子ちゃん、こんにちは♪`);
        await era.printAndWait(
          `修羅場から逃げようとした${you.name}は、マルゼンスキーの気勢でその場に釘付けになった。`,
        );
        if (era.get('love:46') > 90) {
          await falcon.say_and_wait(
            `マルゼン先輩でも？ このチョコは譲れないよ♪`,
          );
          await maru.say_and_wait(`今の後輩、思ってたより可愛いわね♪`);
          await maru.say_and_wait(
            `得意なコースが違わなければ、ファル子ちゃんと一戦やりたいわ♪`,
          );
          await falcon.say_and_wait(`マルゼン先輩でも、ファル子は負けないよ♪`);
          await maru.say_and_wait(`ちょっと失礼だと思わない？`);
          await falcon.say_and_wait(`ううん？ ファル子、悪気はないよ？`);
          await falcon.say_and_wait(
            `ただ、マルゼン先輩もそろそろ結婚する年なのに、なんでまだここにいるのかなって。`,
          );
          await maru.say_and_wait(
            `ファル子はアイドルでしょ？ ${callname}と並んで座ってて、スキャンダル平気？`,
          );
          await maru.say_and_wait(`${callname_4}、あなたはどう思う？`);
          await falcon.say_and_wait(
            `大丈夫だよ？ 出たら、${callname}と結婚するって発表すればいい♪ ね、${callname}？`,
          );
          await era.printAndWait(
            `余裕のマルゼンスキーが、本気になった${falcon.name}を見る。見えない気圧に、まわりの人が離れ始める。`,
          );
          era.printButton(`何も見たくない`, 1);
          await era.input();
          await era.printAndWait(
            `戦場になった真ん中で、ぼんやりふたりを見る${you.name}は、砂に頭を埋めたダチョウそのものだった。`,
          );
        } else {
          await falcon.say_and_wait(
            `マルゼンスキー先輩もいるし、ここでゲリラライブしちゃお⭐`,
          );
          await era.printAndWait(
            `いきなりの展開でも、${falcon.name}はその場に踏み込んだ。`,
          );
          await maru.say_and_wait(
            `最近は、なんでもステージにするのが流行りなの？`,
          );
          await falcon.say_and_wait(`ファル子流だよ⭐`);
          await falcon.say_and_wait(
            `スズカちゃん、ブルボンちゃん、フウジンがいないのはちょっと残念……でも、逃げウマ姉妹の活動ってことにしよ！`,
          );
          await maru.say_and_wait(`レースでもライブでも、お姉さんは全開よ！`);
          await era.printAndWait(
            `マルゼンスキーは${you.name}にウィンクすると、${falcon.name}と仮設ステージの準備を始めた。`,
          );
          await era.printAndWait(`ひと騒動は、それで消えた。`);
        }
      }
    };
    f.title = title;
    return f;
  })(),
  before_teio_sho: (() => {
    const title = '帝王賞前の準備';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${falcon.name}が帝王賞に挑むという知らせが、ウマスタ中に広がった。`,
      );
      await era.printAndWait(
        `ファル子の走りと歌に惹かれた人たちは、発売と同時にチケットを買い尽くした。`,
      );
      await era.printAndWait(
        `ダートが${falcon.name}を選んだというより、${falcon.name}がダートを形にした。`,
      );
      await era.printAndWait(`控え室で`);
      await falcon.say_and_wait(`……ファル子、ちょっと緊張してる`);
      await era.printAndWait(
        `いつもの${falcon.name}と違い、もうすぐ始まるレースの前で迷っている。`,
      );
      await falcon.say_and_wait(
        `ミスしたら、応援してくれてるファンと後輩、がっかりしないかな。`,
      );
      await you.say_and_wait(
        `ファル子のファンで、${falcon.name}のトレーナーとして、僕は信じてる`,
      );
      await you.say_and_wait(`ファル子なら大丈夫！`);
      await falcon.say_and_wait(`${callname}が言うなら、ファル子、頑張る！`);
      await era.printAndWait(`${you.name}は時計を見る。もう出発の時間だ。`);
      await you.say_and_wait(`じゃあ、いい知らせを待ってるよ、ファル子！`);
      await falcon.say_and_wait(
        `うん！ 後輩の${falcon.uma_sex_title}に、先輩アイドルのやり方を見せてくる！`,
      );
      await era.printAndWait(`先輩アイドルのファル子が、コースへ向かった。`);
    };
    f.title = title;
    return f;
  })(),
  teio_sho_win: (() => {
    const title = '帝王賞後・輝くアイドル';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, maru, you, callname) => {
      await era.printAndWait(`${falcon.name}はきれいに一着を取った。`);
      await era.printAndWait(`ウィンナーズステージでも、見せ切った。`);
      await era.printAndWait(
        `ファル子にとって、トップアイドルまでの道は、もうかなり近い。`,
      );
      await falcon.say_and_wait(
        `${callname}、ファル子のステージ、どうだった？`,
      );
      await you.say_and_wait(`プロのアイドルと、もう大差ないよ。`);
      await you.say_and_wait(
        `でも比べるなら、うちのファル子がいちばん可愛い。`,
      );
      await falcon.say_and_wait(`うん！ ファル子も自分、可愛いと思う！`);
      await maru.say_and_wait(`ファル子、すごいわね！`);
      await era.printAndWait(
        `いつの間にか、マルゼンスキーが控え室の入り口に立っていた。`,
      );
      await falcon.say_and_wait(`えっ？ マルゼン先輩、なんでここに？`);
      await maru.say_and_wait(
        `うん！ ファル子が一生懸命走る姿、アタシ超～感動したわ！`,
      );
      await maru.say_and_wait(
        `輝きたいって夢を抱いて芝を駆けて、ウィンナーズステージでいちばんきれいな自分を見せる。`,
      );
      await maru.say_and_wait(
        `${maru.elder_sibling_sex_title}も、その熱に火がついたわ！`,
      );
      await falcon.say_and_wait(
        `そ、そんなにマルゼン先輩が言うほどじゃないよ……`,
      );
      await maru.say_and_wait(`ふーん——機会があったら、いっしょに練習しない？`);
      await falcon.say_and_wait(`あの、ファル子`);
      await maru.say_and_wait(
        `ダートなら、${maru.elder_sibling_sex_title}がその弱点、なんとかするわ♪`,
      );
      await maru.say_and_wait(`じゃあ、また今度ね♪`);
      await falcon.say_and_wait(
        `……うん！ マルゼン先輩といっしょなら、ファル子ももっと学べるかも！`,
      );
      await era.printAndWait(`こうして、帝王賞はきれいに終わった。`);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '合宿、スタート！';
    /**
     * 拍子、場面、順序、幕、物語
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await you.say_and_wait(`やっと着いた。`);
      await era.printAndWait(
        `${falcon.name}がウマスタに出したライブ告知で、ファンが一気に殺到した。`,
      );
      await era.printAndWait(
        `いいねを押し、質問に丁寧に答え、意地の悪いコメントは消す。`,
      );
      await era.printAndWait(
        `揺れるバスの中でずっと携帯を見ていたせいで、目的地までまだ四分の一というところで吐き気に襲われた。`,
      );
      await era.printAndWait(`ようやく着くと、すぐ真っ青になるまで吐いた。`);
      await era.printAndWait(`おかげで、自分が生きている実感ははっきりした。`);
      await era.printAndWait(
        `だが${falcon.name}にとっては、走り続けた日々からやっと休める貴重な一日でもある。`,
      );
      await you.say_and_wait(`まるで休暇だ。`, true);
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(`${falcon.name}が${you.name}を探している。`);
      await you.say_and_wait(`こっち！`);
      await era.printAndWait(`できるだけ大きな声で応える。`);
      await era.printAndWait(
        `返事を聞いた${falcon.name}が、ぱたぱたと砂を踏んで${you.name}のほうへ走ってきた。`,
      );
      await falcon.say_and_wait(`${callname}⭐ これからのトレーニングもよろ——`);
      await falcon.say_and_wait(`ええ？ ${callname}、大丈夫？`);
      await era.printAndWait(`具合が悪くて青白い${you.name}の顔を見る。`);
      await you.say_and_wait(
        `ファンの返信を長くやってて、ちょっと車酔いしただけ。大したことない。`,
      );
      await falcon.say_and_wait(`ちがう！`);
      await era.printAndWait(
        `${falcon.uma_sex_title}アイドルらしくない声で、${falcon.name}が強く言い返す。`,
      );
      await falcon.say_and_wait(
        `${callname}は、ファル子が${falcon.uma_sex_title}アイドルの道を歩く仲間だよ！ ${callname}が倒れたら、ファル子のトレーニングも大きく落ちる。`,
      );
      await era.printAndWait(
        `そばを通る${falcon.uma_sex_title}とトレーナーが、ちらちら見る。`,
      );
      await you.say_and_wait(`ごめん。次からは気をつける。`);
      await era.printAndWait(
        `視線が増えたからか、${you.name}が謝ったからか、${falcon.name}の態度が和らいだ。`,
      );
      await falcon.say_and_wait(`ファル子も言いすぎた。ごめん。`);
      await falcon.say_and_wait(
        `——${callname}が、ファル子の見えないところまで走っちゃったら`,
      );
      await era.printAndWait(`${falcon.name}はうつむいて、何か考えている。`);
      await you.say_and_wait(`ファル子？`);
      await falcon.say_and_wait(
        `なんでもないよ⭐ ファル子の夏合宿の計画は——ビーチのお客さん、全員ファル子のファンにすること！`,
      );
      await falcon.say_and_wait(
        `そのために、次のお祭りで、見に来てくれた人の心をつかむ！`,
      );
      await you.say_and_wait(`トレーニングは忘れないで！`);
      await era.printAndWait(
        `その目標から力をもらったのか、${falcon.name}が輝いている。`,
      );
      await falcon.say_and_wait(`もう～それも落とさないから⭐`);
      await era.printAndWait(
        `目の前の${falcon.name}がいつもの顔に戻って、${you.name}も安心した。`,
      );
      era.printButton(`うん——じゃあまずビーチを十周して体を温めよう！`, 1);
      await era.input();
      await falcon.say_and_wait(`はい♪`);
      await era.printAndWait(
        `${you.name}とファル子の、シニア級の夏合宿が始まった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_30: (() => {
    const title = 'お祭り';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`ビーチから近い小さな町で\n`);
      await era.printAndWait(
        `海に近い地の利を活かして、年に一度の夏祭りが開かれている。`,
      );
      await era.printAndWait(
        `最近のダートの星として招かれた${falcon.name}が、ステージの中央に立っている。`,
      );
      await falcon.say_and_wait(`～～～♪ ふぅ——ありがとう、みんな⭐`);
      await era.printAndWait(
        `ステージ下の観客が、上のアイドルへ拍手と歓声を贈る。`,
      );
      await you.say_and_wait(`やっぱり客席で見るのがいちばんいい。`, true);
      await era.printAndWait(
        `${you.name}が客席から${falcon.name}を見たいと言うと、${falcon.name}は何か言いたそうだったが、聞こうとすると流されてしまった。`,
      );
      await era.printAndWait(
        `それでも曲の終わり、ファンとの視線のやりとりの中で、かすかな視線がずっと${you.name}を見ている。`,
      );
      await you.say_and_wait(`……`, true);
      await era.printAndWait(`少し、寂しい。`);
      await era.printAndWait(
        `${falcon.name}のステージが凡庸なわけではない。青い原石が、研がれてダイヤモンドの光を見せ始めている。`,
      );
      await era.printAndWait(
        `ただ少し、出会ったころの純粋な${falcon.name}を懐かしく思う。`,
      );
      await era.printAndWait(`今の${falcon.sex}は、もう立派なアイドルだ。`);
      await era.printAndWait(`もう十分だ。`);
      await you.say_and_wait(`……`, true);
      await era.printAndWait(`胸の不安は、それでも消えなかった。`);
      await era.printAndWait(`何か、見逃しているみたいだ。`);
      await era.printAndWait(`あの、悲しい目。`);
      await you.say_as_passer_by_and_wait(`観光客A`, `うわあっ！`);
      await era.printAndWait(
        `悲鳴とともに、暗い赤い液体が${you.name}に飛び散った。`,
      );
      await you.say_and_wait(`うわあああ`);
      await era.printAndWait(
        `不幸中の幸い、暗い赤い液体は時間が経って熱がほとんど落ち、ほんのり温かいだけだった。`,
      );
      await era.printAndWait(
        `残る悩みは、汁だらけのシャツをどう洗うか、それと`,
      );
      await you.say_and_wait(`うわああ！`, true);
      await era.printAndWait(
        `まぶたの縁を、無数の蟻が角膜のまわりを這うみたいだ。`,
      );
      await you.say_and_wait(`ナプキン、水、なんでも——`);
      await era.printAndWait(
        `あたりを掻き回した両手は、やっと濡れたタオルをつかんだ。`,
      );
      await you.say_and_wait(`ごめん、あとで埋め合わせする！`);
      await era.printAndWait(
        `自分でも言いすぎだと思う言葉を吐き、とにかく顔へ当てる。`,
      );
      await era.printAndWait(`まわりが、大きくざわついている。`);
      await you.say_and_wait(
        `……あの人の服を、タオル代わりに引き裂いたんじゃ……`,
        true,
      );
      await era.printAndWait(`刺すような感触が消えて、目を見開く。`);
      await you.say_and_wait(`ごめん、なんとかするから……${falcon.name}。`);
      await era.printAndWait(
        `目に入ったのは、右腕の生地が欠けたアイドル衣装だった。`,
      );
      await era.printAndWait(
        `ステージの上にいた${falcon.teen_sex_title}が、ステージの下まで来ていた。`,
      );
      era.drawLine();
      await era.printAndWait(
        `なんとか騒ぎを収めたあと、${you.name}と${falcon.name}は寮へ戻る道を歩いていた。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`何から話せばいいか、分からない。`);
      await era.printAndWait(
        `こんなに慌てた${falcon.name}は初めてだ。${falcon.name}と永遠に分かれると知ったみたいに。`,
      );
      await falcon.say_and_wait(`……`);
      await falcon.say_and_wait(`ファル子、台無しにしちゃった……`);
      await falcon.say_and_wait(
        `みんな、遠いところからファル子を応援しに来てくれたのに。`,
      );
      await era.printAndWait(`衝動のあと、後悔し始める${falcon.name}。`);
      await you.say_and_wait(
        `そんなことない。ファンのみんなも、焦ってるファル子を見て、同じように焦ったはずだ。`,
      );
      await you.say_and_wait(
        `ファル子が安心した顔を見せたら、みんなも安心する。`,
      );
      await era.printAndWait(
        `${falcon.name}は何か言いたそうだったが、結局黙ったまま。`,
      );
      await era.printAndWait(
        `祭りに浸る人波と逆方向へ歩き、人通りの少ない場所まで来て、${falcon.name}がやっと口を開いた。`,
      );
      await falcon.say_and_wait(`${callname}、ファル子って、わがままかな。`);
      await falcon.say_and_wait(
        `ファンみんなを平等に愛するって言ってるのに、天秤はいつも片方に傾く。`,
      );
      await falcon.say_and_wait(
        `ファル子、結局約束を破った……自分の責任（アイドルの責任）にも、また背いた。`,
      );
      await era.printAndWait(
        `何度も考えて、${falcon.name}は胸の言葉を出した。`,
      );
      await era.printAndWait(
        `${you.name}には分かる。それが${falcon.sex}を苦しめる迷いだ。`,
      );
      await you.say_and_wait(`ファル子、トレーナーって仕事、知ってる？`);
      await era.printAndWait(
        `少し考えてから、${you.name}はできるだけ平静に口を開く。`,
      );
      await falcon.say_and_wait(
        `——トレーナーは担当の${falcon.uma_sex_title}の可能性を引き出し、体と心を守る。いちばん大事なのは、${falcon.uma_sex_title}が${falcon.uma_sex_title}の道を、できるだけ遠くまで歩けるようにすること。`,
      );
      await you.say_and_wait(
        `そう。ファル子が言ったそれができれば、合格のトレーナーだ。`,
      );
      await you.say_and_wait(
        `……でも、もっと輝くトレーナーまでは、まだ距離がある。`,
      );
      await falcon.say_and_wait(`……ファル子が目指すアイドルと同じだね。`);
      await you.say_and_wait(
        `その責任に気づく以外に、僕らが気にするのは、失敗したときどうするかだ。`,
      );
      await you.say_and_wait(
        `実力も才能も見上げるほど高い伝説のトレーナーか、他人が妬むほど運のいい選ばれし者以外、凡人はみんなこの重い問いに当たる。`,
      );
      await you.say_and_wait(
        `成功したときは、勝ったという事実で約束を守れた気になれる。失敗したとき、${falcon.couple_title}に大口を叩いた自分を、どう見る。`,
      );
      await you.say_and_wait(
        `精一杯やったのに、運が悪かっただけ、と言っても。`,
      );
      await falcon.say_and_wait(`そうなんだ……`);
      await you.say_and_wait(
        `残念だけど、失敗の結果は引き受けなきゃいけない。`,
      );
      await you.say_and_wait(
        `いちばん軽くて、見込んでいた成果が落ちて外から疑われる。重ければ辞職を迫られ、命の危険すらある。`,
      );
      await you.say_and_wait(
        `この問いに、優れたトレーナーは違う答えを出す。僕の答えは`,
      );
      await you.say_and_wait(
        `自分では選べない事故の裏には、結局自分への好意がある。事故が起きて、その場では失敗しても、最後はその失敗のほうが成功よりいい。`,
      );
      await you.say_and_wait(`だから、この責任を引き受ける。`);
      await you.say_and_wait(
        `選択には、自分で責任を持つ。アイドルもトレーナーも、行き着く先は同じだ。`,
      );
      await you.say_and_wait(
        `だから、自分の責任が分かったら、自分の考えどおりにやっていい。`,
      );
      await era.printAndWait(
        `この先の道で、${falcon.name}の歩幅はかなり軽くなった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏合宿終了';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`${falcon.name}のシニア級夏合宿が終わった。`);
      await falcon.say_and_wait(`トップアイドルへの道、止まらず進むよ♪`);
      await era.printAndWait(
        `夏合宿終了の宴会で、飲みすぎたと言って抜けた${you.name}は、同じく席を外した${falcon.teen_sex_title}と出会った。`,
      );
      await you.say_and_wait(
        `有名アイドルのファル子が、宴会を抜けるなんて珍しいね。`,
      );
      await falcon.say_and_wait(
        `ファン1号がいないと、アイドル活動も急に暗くなるからね。`,
      );
      await era.printAndWait(`なるほど。`);
      await you.say_and_wait(`ファル子は、もう孤独が怖くない？`);
      await falcon.say_and_wait(`……正直、まだ怖い。でも前ほどじゃない。`);
      await falcon.say_and_wait(`${callname}が、ずっとそばにいるから。`);
      await you.say_and_wait(`……それが、ファル子の答えなんだ。`, true);
      await era.printAndWait(
        `${falcon.name}が少し前に傾き、右手の人差し指を唇の真ん中に立てて、右目を閉じる。`,
      );
      await falcon.say_and_wait(
        `それに、${falcon.name}は大好きな${callname}と、世界でいちばん大きなステージに立ちたい！`,
      );
      await falcon.say_and_wait(
        `そのときは……ファル子……ちがう、${falcon.name}は何も言ってないよ⭐`,
      );
      await era.printAndWait(
        `${falcon.sex}の隠しきれない笑顔を見ると、幸せなことを思い浮かべたのだろう。`,
      );
      await era.printAndWait(
        `そのために頑張る一日一日が、この夢を叶えるための時間だ。`,
      );
      await falcon.say_and_wait(
        `歩いてきた道のまわりに、見渡す限りの草原が見えてきた。`,
      );
      await you.say_and_wait(
        `トップアイドルになるなら、次のレースも気を抜かない！`,
      );
      await falcon.say_and_wait(`ちがう！`);
      await era.printAndWait(`${falcon.name}の言葉に、${you.name}は驚いた。`);
      await you.say_and_wait(`ファル子の言う意味は？`);
      await falcon.say_and_wait(
        `${callname}が前に言ったとおり、選択には自分で責任を持つ。`,
      );
      await falcon.say_and_wait(
        `ファル子は心の天秤を${callname}に傾けたけど、${falcon.uma_sex_title}アイドルとしての責任は変わらない。`,
      );
      await falcon.say_and_wait(
        `どれだけ経っても、約束を聞いた人が忘れても、それは変わらない。`,
      );
      await falcon.say_and_wait(
        `だから、過労で倒れるまで、引退するまで、ファル子は${falcon.uma_sex_title}アイドルの責任を担う。`,
      );
      await falcon.say_and_wait(`それが、ファル子の出した答え。`);
      await era.printAndWait(
        `隣の${falcon.teen_sex_title}は、すっとした顔をしている。${falcon.sex}は覚悟した。`,
      );
      era.printButton(`いちばん近いところで、それを見届けさせて。`, 1);
      await era.input();
      await falcon.say_and_wait(`ふふふ。`);
      await era.printAndWait(
        `${falcon.name}が突然笑い出し、涙が出るまで笑った。`,
      );
      era.printButton(`ファル子？`, 1);
      await era.input();
      await era.printAndWait(`それから${you.name}をきつく抱きしめた。`);
      await falcon.say_and_wait(`ありがとう、${callname}。`);
      await era.printAndWait(`${falcon.name}は、もうひとりじゃない。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_37: (() => {
    const title = '先輩と後輩';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, minoru, you, callname) => {
      await era.printAndWait(
        `よく考えて、${you.name}はJBCクラシック、チャンピオンズカップ、東京大賞典の三戦をシニア級後半の計画に入れた。`,
      );
      await era.printAndWait(
        `後半の三戦を全部勝つ。プレッシャーは言うまでもない。`,
      );
      await era.printAndWait(
        `トップアイドルとは、そういう厳しい場でみんなに希望を渡すことだ。`,
      );
      await era.printAndWait(`トントントン。`);
      await you.say_and_wait(`誰かを呼んだ覚えはない。`);
      await era.printAndWait(
        `${falcon.name}ならそのまま入ってくる。${minoru.name}なら先に携帯で連絡する。ほかの${falcon.uma_sex_title}なら、だいたい自分から連絡する。`,
      );
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `久しぶり、${callname}！`,
      );
      await era.printAndWait(
        `栗色の${falcon.uma_sex_title}が扉を押し、興奮しすぎてドアノブを外してしまった。`,
      );
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `あ、ごめん！ 興奮しちゃって！`,
      );
      await era.printAndWait(`どこかで見た顔だ。`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `${callname}、わたしのこと、覚えてる？`,
      );
      await era.printAndWait(
        `頭の中で浮かんだ名前を、また消す作業を繰り返す。`,
      );
      await era.printAndWait(
        `${falcon.name}がここにいれば、一目で分かるだろう。`,
      );
      await era.printAndWait(
        `${falcon.sex}は、ライブを見に来たファンの顔を一人残らず覚えている。`,
      );
      await you.say_and_wait(
        `ライブ？ ${falcon.uma_sex_title}、川辺の草地。`,
        true,
      );
      await you.say_and_wait(`そういえば、一人、会ったことがあった。`, true);
      await you.say_and_wait(
        `去年、アイドルになると決めた、あの${falcon.uma_sex_title}だね。`,
      );
      await era.printAndWait(
        `体格も身長もほとんど変わって見えないが、昔の気配は残っている。`,
      );
      await you.say_and_wait(`君も本格化を迎えたんだね。`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `さすが${callname}！ 最初、覚えてないかもって心配したけど、考えすぎだった。`,
      );
      await era.printAndWait(
        `見当は当たっていた。欲しい答えを得た${falcon.uma_sex_title}が、得意げに耳を立てる。`,
      );
      await you.say_and_wait(
        `挫折、迷い、分からないこと。汗と涙は基本で、信念が命より重いこともある。`,
      );
      await you.say_and_wait(
        `アイドルの道は僕も詳しくないけど、力になれたら嬉しい。`,
      );
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `ト、${callname}、なにを経験したんですか？`,
      );
      await era.printAndWait(
        `${you.name}の平凡な経歴に怯えて、ソファの隅で震える${falcon.uma_sex_title}。`,
      );
      await era.printAndWait(
        `失礼な話だ。自分の経験を飾らず話しただけなのに。`,
      );
      await falcon.say_and_wait(`${callname}！`);
      await you.say_as_passer_by_and_wait(
        falcon.uma_sex_title,
        `ファル子先輩！`,
      );
      await era.printAndWait(`さっきの一幕を説明したあと。`);
      await falcon.say_and_wait(`アイドルの日常だよ。`);
      await era.printAndWait(
        `笑顔の${falcon.name}の声は、何も変わっていなかった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_38: (() => {
    const title = '心に刻む鏡';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await you.used_to_say_and_wait(`${falcon.uma_sex_title}アイドル？`);
      await you.used_to_say_and_wait(
        `${falcon.uma_sex_title}アイドルって、少しざっくりしてるな。`,
      );
      await you.used_to_say_and_wait(
        `レースに出て、輝いていれば、コースを走る${falcon.uma_sex_title}はみんな同じだ。`,
      );
      await you.used_to_say_and_wait(
        `${falcon.uma_sex_title}アイドルの特別さは、どこにあるんだろう。`,
      );
      era.drawLine();
      await falcon.print_and_wait(
        `初めてのトレーニングのとき、${callname}がこの問いを出した。`,
      );
      await falcon.print_and_wait(`……あのときは、どう答えた？`);
      await falcon.print_and_wait(`その場しのぎで流しただけだよね。`);
      await falcon.say_and_wait(`……`);
      await falcon.print_and_wait(`今でも、正しい答えは出せない。`);
      await falcon.print_and_wait(
        `思春期だけの繊細さが織りなす可愛さを、売りにしたい。`,
      );
      await falcon.print_and_wait(
        `そうしてファンといっしょに育ち、最後は見る側と見られる側として、トップアイドルの殿堂入りの扉を叩く。`,
      );
      await falcon.print_and_wait(
        `川岸でボランティアのゴミ拾いをしても、きついゲリラライブでも。`,
      );
      await falcon.print_and_wait(
        `生活に近いアイドルという考えを貫いて、ファンに自分の成長を渡す。`,
      );
      await falcon.print_and_wait(
        `痛みと失意は隠して、期待されるアイドルという仮面を着ける。`,
      );
      await falcon.print_and_wait(`……過程は、思ったほど辛くなかった。`);
      await falcon.print_and_wait(
        `草地の上のステージも、ひとつのトレーニングだ。`,
      );
      await falcon.print_and_wait(
        `テレビ、ダンスの先生、インタビュー誌で覚えた経験を思い出す。`,
      );
      await falcon.print_and_wait(
        `拍子から拍子へ、動きから動きへ、一瞬から一瞬へ。`,
      );
      await falcon.print_and_wait(
        `生まれ持った才能みたいになるまで、磨き続ける。`,
      );
      await falcon.print_and_wait(`一曲、終わり。`);
      await falcon.print_and_wait(`目を開けて、誰もいない草地を迎える。`);
      await falcon.print_and_wait(`目を開けて、一人の草地を迎える。`);
      await falcon.print_and_wait(`目を開けて、数人の草地を迎える。`);
      await falcon.print_and_wait(`目を開けて、大きなステージを迎える。\n`);
      await falcon.print_and_wait(
        `知識だったものが本能に溶け、本能がまた新しい知識を固める。`,
      );
      await falcon.print_and_wait(
        `溶けて固まって、命の果てまで続くその川は、外から見るとダイヤモンドみたいだ。`,
      );
      era.drawLine();
      await falcon.say_and_wait(`JBCクラシック、もうすぐだね。`);
      await falcon.say_and_wait(`……${callname}。`);
      await falcon.say_and_wait(
        `ファル子にもう少し時間があれば、もっと早く気づけた。`,
      );
      await falcon.say_and_wait(
        `ちがう！ ${callname}は今のファル子、好きじゃないはず！`,
      );
      await falcon.say_and_wait(
        `${callname}が期待してるファル子は、ずっと元気で、前へ進む完璧なアイドルだよ！`,
      );
      await falcon.say_and_wait(
        `だからコースでもステージでも、ファル子は輝き続ける。みんなの目を奪うまで！`,
      );
      era.drawLine();
      await falcon.print_and_wait(`罪の意識という高い壁に隔てられていても。`);
      await falcon.print_and_wait(
        `ファンに襲われた源は、天秤の傾き。ファンの願いを無視したアイドルの末路。`,
      );
      await falcon.print_and_wait(`アイドルが育つほど、圧をかけてくる悪意。`);
      await falcon.print_and_wait(
        `このまま行けば、いつかその巨大な圧に耐えきれず、熱せられた岩みたいに、小さなきっかけで弾ける。`,
      );
      await falcon.print_and_wait(
        `間違いばかり選んできた私が、ひとつだけ正しいと分かっていること。`,
      );
      await falcon.print_and_wait(`——ああ、時間がもう少しあれば。`);
      await falcon.print_and_wait(`もっと時間があれば、このもつれをほどけた。`);
      await falcon.print_and_wait(`でも、それは無理だ。`);
      await falcon.print_and_wait(
        `やらなきゃいけない義務から逃げている限り、未来は来ない。`,
      );
      await falcon.print_and_wait(
        `アイドルの道を選んだ以上、ファンの頼りと祈りには、どうしても応える。`,
      );
      await falcon.print_and_wait(`アイドルとして、最後まで務めを果たす。`);
      await falcon.print_and_wait(`だから、もう逃げない。`);
      await falcon.print_and_wait(`初めてダートのレースを見たとき、覚えてる`);
      era.printButton(
        `追う${falcon.uma_sex_title}が、先頭の${falcon.uma_sex_title}を越えた`,
        1,
      ); //恋慕が責任を越える
      era.printButton(`先頭の${falcon.uma_sex_title}が、大事な一歩を踏んだ`, 2); //責任が恋慕を押さえる
      // teは2、geは1
      const ret = await era.input();
      if (ret === 1) {
        await falcon.print_and_wait(
          `——そう。追う${falcon.uma_sex_title}が、先頭の${falcon.uma_sex_title}を越えた。`,
        );
        await falcon.print_and_wait(
          `ダートの${falcon.uma_sex_title}が向き合う環境は、もっと厳しい。`,
        );
        await falcon.print_and_wait(
          `全力で、頭を空にして、前の目標を越えるために。`,
        );
        await falcon.print_and_wait(`それでも、足りない。`);
        await falcon.print_and_wait(
          `最初にいい位置を取れなければ、敗者は砂の試練を受ける。`,
        );
        await falcon.print_and_wait(
          `勝負服はダートに汚れ、きれいな顔は砂に覆われる。どの角度から見ても、輝く姿とは言えない。`,
        );
        await falcon.print_and_wait(
          `目に入った砂が深く刺し、速い呼吸が砂で乱れる。`,
        );
        await falcon.print_and_wait(
          `考える余裕もなく、自分の存在すら忘れて、相手を越える。`,
        );
        await falcon.print_and_wait(`それが、競う意味だ。`);
      } else {
        await falcon.print_and_wait(
          `先頭の${falcon.uma_sex_title}が、大事な一歩を踏んだ。`,
        );
        await falcon.print_and_wait(
          `去年、スズカちゃんが芝のレースを教えてくれたとき、ほかの人には渡さない景色……これだったっけ。`,
        );
        await falcon.print_and_wait(`先頭の景色……懐かしいな。`);
        await falcon.print_and_wait(
          `全国ツアーのとき、地方の${falcon.uma_sex_title}とのレース。`,
        );
        await falcon.print_and_wait(
          `芝のレースより、ダートの印象のほうが強い。`,
        );
        await falcon.print_and_wait(`……`);
        await falcon.print_and_wait(`皐月賞以外は。`);
        await falcon.print_and_wait(
          `曲のリズムで変わる光。客席のサイリウムがリズムに合わせて海になる。遠くから見ると、層のはっきりした潮のよう。`,
        );
      }
      await falcon.print_and_wait(`……ああ……また${callname}の顔が浮かぶ。`);
      await falcon.print_and_wait(`逃げちゃいけないのに。`);
      await falcon.print_and_wait(`涙が止まらなくても。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_40: (() => {
    const title = '空と大地と、ここで生きる私たち';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`公園\n`);
      await era.printAndWait(`ファル子の提案で、公園の芝生へ来た。`);
      await era.printAndWait(
        `秋はもう半分過ぎ、道行く人もコートを着始めている。`,
      );
      await you.say_and_wait(`ファル子、寒くない？`);
      await era.printAndWait(
        `薄着のファル子を見て、つい${falcon.sex}に聞きたくなった。`,
      );
      await falcon.say_and_wait(`ファル子、寒くないよ？`);
      await era.printAndWait(
        `そうだ。${falcon.uma_sex_title}は人間より体温が少し高い。`,
      );
      await you.say_and_wait(`ちょっと、ファル子が羨ましいな。`);
      await falcon.say_and_wait(`${callname}、急になに？`);
      await you.say_and_wait(
        `ファル子みたいに明るくて可愛い${falcon.uma_sex_title}アイドルのトレーナーで、運がいい。`,
      );
      await falcon.say_and_wait(
        `えっ～～？ もう！ ${callname}が急にそんなこと、ファル子。`,
      );
      await you.say_and_wait(`あ、着いた。`);
      await era.printAndWait(
        `公園の湖に近い芝生。旅人と遊ぶ子どもが、そこかしこにいる。`,
      );
      await you.say_and_wait(`湖のほう、思ったより人が多いな。`);
      await era.printAndWait(
        `持ってきたバッグから手作り弁当を取り出しながら、つい口に出す。`,
      );
      await falcon.say_and_wait(`湖に来る人、カップルが多いね。`);
      await era.printAndWait(
        `ファル子は敷いたブランケットに行儀よく座って、こちらを見ている。`,
      );
      await you.say_and_wait(
        `ウマスタで有名なカップルの聖地になったのかも。はい。`,
      );
      await falcon.say_and_wait(`カップルは休日しか遊びに出られないもんね——`);
      await era.printAndWait(
        `ファル子は用意したニンジンはちみつ特製ドリンクを受け取る。`,
      );
      await falcon.say_and_wait(`……カップル、か`, true);
      await you.say_and_wait(`ファル子はどう思う？`);
      await falcon.say_and_wait(`え？`);
      await era.printAndWait(
        `${you.name}に見抜かれたファル子が力を入れすぎて、蓋がきれいな弧を描いて、少し先の幹にしっかり嵌まった。`,
      );
      await falcon.say_and_wait(`……${callname}、見てて！ やあ！`);
      await era.printAndWait(
        `${you.name}が反応する前に、ファル子は蓋のある大木へ走った。`,
      );
      await falcon.say_and_wait(`カップル？ ファル子と${callname}`, true);
      await era.printAndWait(
        `まだ反応できないうちに、ファル子は蓋のある大木へ走った\n\n。`,
      );
      await era.printAndWait(`小さな挿話のあと、ふたりはまた座った。`);
      await era.printAndWait(
        `${you.name}はファル子の手作り弁当を味わい、隣から渡された飲み物を受け取る。`,
      );
      await era.printAndWait(
        `冷たい流れが喉を通り、満足したようにげっぷが出た。`,
      );
      await you.say_and_wait(`うん——ちょっと甘いね。`);
      await falcon.say_and_wait(`いちごジュースを弁当にかけたからね。`);
      await falcon.say_and_wait(
        `そういえば、フラッシュさんも試食のとき、同じようなこと言ってた。`,
      );
      await era.printAndWait(
        `エイシンフラッシュが隣で指導していたなら、甘いのも分かる。`,
      );
      await you.say_and_wait(`そういうことね。ケーキみたいな——`);
      await falcon.say_and_wait(`ちがう！ これはファル子が自分で考えたの！`);
      await era.printAndWait(
        `ファル子の急に大きい声に、通行人がちらちら見る。`,
      );
      await falcon.say_and_wait(`あ、ごめん。急に興奮しちゃった。`);
      await falcon.say_and_wait(`これじゃファル子らしくないね⭐ ははは。`);
      await era.printAndWait(
        `何かに気づいて、ファル子は俯き、顔が赤くて今にも水が落ちそうだ。`,
      );
      era.printButton(`ありがとう、ファル子`, 1);
      await era.input();
      await era.printAndWait(`ファル子の小さな頭を、そっと撫でる。`);
      await falcon.say_and_wait(`ファル子、もう子どもじゃないよ。`);
      await era.printAndWait(
        `口では抗議しても、激しくは拒まず、そのまま撫でさせてくれる。`,
      );
      await you.say_and_wait(`ファル子、こういう場は苦手？`);
      await falcon.say_and_wait(
        `人の目は、そこまで気にしないけど、ちょっとだけね。`,
      );
      await falcon.say_and_wait(`……${callname}の評価は、少し気になる。`);
      await era.printAndWait(`最後の声は、だんだん聞こえなくなる。`);
      await you.say_and_wait(
        `ステージの上のファル子より、こういうファル子も可愛いね。`,
      );
      await you.say_and_wait(`ファル子が輝いてるところも可愛い。`);
      await falcon.say_and_wait(`ファル子、思ってるほど輝いてないよ。`);
      await falcon.say_and_wait(
        `${callname}に会う前、ファル子は毎日アイドル活動と、期限ギリギリの単位で走り回ってた。`,
      );
      await falcon.say_and_wait(`やっと休めるとき、つい考えちゃう。`);
      await falcon.say_and_wait(`ファル子の道、間違ってるのかも。`);
      await era.printAndWait(`手の茶杯を見つめるファル子。慰めようとした`);
      await falcon.say_and_wait(`でもこのあいだで、もうすっとした。`);
      await falcon.say_and_wait(
        `こんなふうに、間違った道をずっと走ってきたのが、ファル子だよ！`,
      );
      await falcon.say_and_wait(`アイドルって、そういうものでしょ？`);
      era.printButton(`ほかの人に希望を渡して、もっと多くの人を導く？`, 1);
      await era.input();
      await falcon.say_and_wait(
        `ちがう！ この道を歩きたい人の心に、勇気をあげること！`,
      );
      await falcon.say_and_wait(
        `この道を歩く人は、ファル子より賢くて、もっと頑張って、だからもっと輝く！`,
      );
      era.printButton(`足りないのは、その勇気だけ？`, 1);
      await era.input();
      await falcon.say_and_wait(
        `それが、ファル子が${falcon.uma_sex_title}アイドルでいる理由！`,
      );
      await falcon.say_and_wait(
        `ファル子はあまり賢くないから、勇気を出して、もっと多くの人を助ける！`,
      );
      await falcon.say_and_wait(
        `ファル子のダンスに触れた${falcon.uma_sex_title}たちが、ファル子の歩いた道に乗ったのを見て。`,
      );
      await falcon.say_and_wait(`ファル子は、心から嬉しい。`);
      await falcon.say_and_wait(
        `テレビのアイドルに励まされた、あのときの私みたい。`,
      );
      await era.printAndWait(
        `一心に話していたファル子は、持っていたお茶が冷めたことに、やっと気づく。`,
      );
      era.printButton(`ファル子はすごいね。`, 1);
      await era.input();
      await falcon.say_and_wait(
        `そんなことない！ ファル子は普通の${falcon.uma_sex_title}アイドルだよ。`,
      );
      await falcon.say_and_wait(
        `これをやったら嬉しいからやる、普通の小さな${falcon.uma_sex_title}だよ。`,
      );
      await falcon.say_and_wait(`それに`);
      await falcon.say_and_wait(
        `告白すらできない、いちばんダメな${falcon.uma_sex_title}アイドルだし。`,
        true,
      );
      era.printButton(`それに？`, 1);
      await era.input();
      await falcon.say_and_wait(`えへへ⭐`);
      await era.printAndWait(
        `そのあとの話は、湖に最初の金色が乗ったところで終わった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_jbc_cls_s: (() => {
    const title = 'JBCクラシック・アイドルの第一歩';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(
        `アイドルの道のひとつの試練、JBCクラシックが始まった。`,
      );
      await era.printAndWait(
        `${falcon.name}が出走するという知らせで、クラシックの観客が一気に増えた。`,
      );
      await era.printAndWait(`マイナーな芝のG1と比べられるくらいになった。`);
      await era.printAndWait(`そしてファル子にとっては。`);
      await falcon.say_and_wait(
        `ファル子みたいな普通の${falcon.uma_sex_title}にとって、ここまでの勝ちは全部、奇跡みたいなもの。`,
      );
      await falcon.say_and_wait(`それでも、ファル子は輝き続けたい。`);
      await you.say_and_wait(
        `なら、あとはやっていい。ファル子、自分の考えでこの絵を描いて！`,
      );
      await you.say_and_wait(
        `トップの${falcon.uma_sex_title}アイドルは、自分で決めるものだ！`,
      );
      await era.printAndWait(
        `控え室の中でも、外の耳を潰すような声が、かすかに入ってくる。`,
      );
      await falcon.say_and_wait(`それでも、ファル子は輝き続けたい。`);
      await falcon.say_and_wait(
        `これから、ファル子が輝くところ、ちゃんと見てて！`,
      );
      await era.printAndWait(`まだ若いアイドルが、コースへ向かった。`);
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_win_s: (() => {
    const title = 'JBCクラシック後・もう一度スタート！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await you.say_as_passer_by_and_wait(
        `ファン`,
        `ファル子！ ファル子！ うおおおおおおおお！`,
      );
      await era.printAndWait(
        `ゴールを切った瞬間、場内の観客がダートに上がってきたスターへ歓声を送る。`,
      );
      await you.say_and_wait(`ファル子、思ったより輝いてるね。`);
      await falcon.say_and_wait(
        `応援ありがとう。これからも、ファル子をよろしくね！`,
      );
      await you.say_and_wait(`うん——次はウィンナーズステージだね。`);
      await era.printAndWait(
        `${you.name}は今年のJBCで作ったディスクを、録画機に入れる。`,
      );
      await era.printAndWait(
        `現場で${falcon.name}のゴールを見られなかったが、本人の生き生きした説明で、いくらか埋め合わせになる。`,
      );
      await falcon.say_and_wait(
        `次はファル子おすすめのウィンナーズステージ時間⭐`,
      );
      await era.printAndWait(
        `映像の中の${falcon.name}が、ひとりウィンナーズステージへ向かう。`,
      );
      era.drawLine({ content: 'ウィンナーズステージのあと' });
      await falcon.say_and_wait(`今年の目標は、もう東京大賞典だけ。`);
      await era.printAndWait(
        `ファル子のステージは想像以上で、ファンの気勢がステージをひっくり返しそうだった。`,
      );
      await era.printAndWait(
        `現場より臨場感は薄いが、${you.name}も十分だった。`,
      );
      await you.say_and_wait(`トップアイドルまで、もう一歩だよ？`);
      await falcon.say_and_wait(`トップまでは、まだ遠いよ。`);
      await you.say_and_wait(`そうは言っても。`);
      await era.printAndWait(
        `${you.name}は録画を止めて、また${falcon.name}を見る。`,
      );
      await you.say_and_wait(`ファル子、思ったより強いね。`);
      await falcon.say_and_wait(`……ファル子、思ってるほど強くないよ？`);
      await you.say_and_wait(`今年の締めの東京大賞典のために、今は休もう。`);
      await you.say_and_wait(`だってファル子。`);
      await era.printAndWait(`隣の${falcon.name}から、整った呼吸が聞こえる。`);
      await era.printAndWait(
        `このあいだの準備を${falcon.name}ひとりでこなしてきた疲れが、やっと限界に来たのだろう。`,
      );
      await you.say_and_wait(`今は、${falcon.sex}に少し寝てもらおう。`, true);
      await you.say_and_wait(`ありがとう、${falcon.name}。`);
      await era.printAndWait(
        `${falcon.name}を柔らかいソファへそっと寝かせ、トレーナーの上着を${falcon.sex}にかける。`,
      );
      await era.printAndWait(
        `揺らしすぎたのか、${falcon.name}の耳が動き、体がもっと楽な姿勢に変わる。`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_cham_cup_s: (() => {
    const title = 'チャンピオンズカップ・ダートのトップアイドル！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`その二、チャンピオンズカップが始まった。`);
      await era.printAndWait(
        `クラシックの準備を経て、次はチャンピオンズカップだ。`,
      );
      await era.printAndWait(
        `前のようにチラシを配り歩く必要はなく、${falcon.name}が出ると知ったファンが、自分で席を買った。`,
      );
      await falcon.say_and_wait(`ファル子、思ってたより人気だね。`);
      await era.printAndWait(
        `外の騒ぎが、むしろ大きな圧になって聞こえてくる。`,
      );
      await you.say_and_wait(`無理して出てきたの？`);
      await era.printAndWait(
        `微かに震える両手。見えない圧の前で、ファル子は。`,
      );
      await falcon.say_and_wait(`次のレースも、ファル子、頑張る！`);
      await you.say_and_wait(`武運を祈る……具合が悪かったら、僕のところへ。`);
      await era.printAndWait(
        `少し止まってから、${falcon.name}は控え室の扉を開けた。`,
      );
      await era.printAndWait(
        `耳を潰す歓声の中、${falcon.name}はコースへ上がった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  cham_cup_win_s: (() => {
    const title = 'チャンピオンズカップ後・目標——東京大賞典';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${falcon.name}は楽にチャンピオンズカップを取った。`,
      );
      await era.printAndWait(
        `ステージの上の${falcon.name}は、さらに輝いている。`,
      );
      await era.printAndWait(`控え室で`);
      await falcon.say_and_wait(`${callname}——あとは東京大賞典だけ。`);
      await you.say_and_wait(`ファル子なら、できる。`);
      await era.printAndWait(`静かに、自分の気持ちを言った。`);
      await era.printAndWait(`励ましというより、確かな確信を述べている。`);
      await falcon.say_and_wait(`——今のファル子、ちょっと緊張してる。`);
      await era.printAndWait(
        `そうだ。最後の一歩の前、結果が来るまでの時間が、いちばん緊張する。`,
      );
      await you.say_and_wait(
        `${
          falcon.name
        }は僕が見た中でいちばん強い${falcon.uma_sex_title}だ。だから、君の夢が叶ってほしい。`,
      );
      await era.printAndWait(
        `${falcon.name}の小さな頭を撫でる。最初は拒んでいた${falcon.sex}が、今は落ち着いて見える。`,
      );
      await falcon.say_and_wait(`気持ち、ちょっと落ち着いた。ありがとう。`);
      await you.say_and_wait(`落ち着いたなら、どこかで食べて祝おうか。`);
      await falcon.say_and_wait(`焼肉が食べたいな。いっしょに行こ⭐`);
      await era.printAndWait(
        `食事を楽しんだあと、門限前に${falcon.name}を寮まで送った。`,
      );
      await falcon.say_and_wait(`${callname}。`);
      await era.printAndWait(`何か言おうとした${falcon.name}が、少し迷う。`);
      await you.say_and_wait(`どうした？`);
      await falcon.say_and_wait(`なんでもないよ⭐`);
      await era.printAndWait(
        `${falcon.teen_sex_title}は口を覆って忍び笑いし、走って行った。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_45: (() => {
    const title = 'モアッサナイト';
    /**
     * 約束を破っても、心が狂っても、
     * アイドルである以上、ファンの期待には真剣に応える
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(
        `${callname}を見送ったあと、スマートファルコンはひとり、トレーナー室のソファに座っていた。`,
      );
      await falcon.print_and_wait(`無邪気な仮面を外して、静かな一瞬を味わう。`);
      await falcon.say_and_wait(`……`);
      await falcon.print_and_wait(`トレセンの夜は、思ったより静かだ。`);
      await falcon.say_and_wait(`そういえば`);
      await falcon.print_and_wait(
        `東京大賞典が終わったら、${callname}との契約も終わる。`,
      );
      await falcon.print_and_wait(
        `状況次第で理事長に延長を出せるけど、なぜか、やる気が起きない。`,
      );
      await falcon.print_and_wait(
        `何か足りない。まだ気づいていないところがある。`,
      );
      await falcon.print_and_wait(`胸の痛みが、その答えを探させる。`);
      await falcon.say_and_wait(`今日の月、思ったよりきれい。`);
      await falcon.print_and_wait(
        `トレーナー室の窓から入る、触れれば裂けそうな、かすんだ月の光。`,
      );
      await falcon.print_and_wait(
        `白い絹が伸びるほうへ視線が落ち、幻想の果てに冷たい黒い固体がある。`,
      );
      await falcon.print_and_wait(
        `……使いすぎて、役目を早く終えたマイク${you.adult_sex_title}かな。`,
      );
      await falcon.say_and_wait(`あなたも、役目を果たしたね。`);
      await falcon.print_and_wait(`黒い固体は、黙ったまま自分を見ている。`);
      await falcon.say_and_wait(`ああ、もう。`);
      await falcon.print_and_wait(`なんでそんな悲しい目で見るの。`);
      await falcon.say_and_wait(`……そうだね。ファル子には、もう何もない。`);
      await falcon.say_and_wait(
        `相容れないふたつを握ろうとして、最後は全部失った。`,
      );
      await falcon.say_and_wait(
        `ファンとの距離を整えるために、${callname}への恋心を、深く埋めた。`,
      );
      await falcon.say_and_wait(
        `それでも、ファル子を応援してくれたファンのみんなには、ひびの入ったダイヤは、昔の光には届かない。`,
      );
      await falcon.print_and_wait(
        `マイク${you.adult_sex_title}の問いに、真剣に答える。`,
      );
      await falcon.print_and_wait(
        `願いが耐えられない代価で叶っても、ステージに立って、その瞬間の誕生をこの目で見たい。`,
      );
      await falcon.say_and_wait(
        `ファル子はずっと、輝く瞬間を求めてアイドルの道に乗った。`,
      );
      await falcon.print_and_wait(`最初の渇望は、もう大半が。`);
      await falcon.print_and_wait(
        `誰かのためじゃない。自分の願いを叶えるためだけ。`,
      );
      await falcon.print_and_wait(
        `${falcon.uma_sex_title}アイドルとして、応援してくれたファンに、いちばん満足できる絵を捧げる。`,
      );
      await falcon.print_and_wait(`だから、出発しよう！`);
      await falcon.print_and_wait(
        `ダートの大レースの支持が、芝の十分の一でも。`,
      );
      await falcon.print_and_wait(
        `ファル子はダイヤより輝かせて、火彩をもっと鮮やかにする！`,
      );
      await falcon.print_and_wait(
        `ファル子が${falcon.uma_sex_title}アイドルである覚悟を賭ける！`,
      );
      await falcon.print_and_wait(`そのまま一気に、ゴールまで輝く！`);
    };
    f.title = title;
    return f;
  })(),
  we_95_47: (() => {
    const title = 'スマートファルコンの決断';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${you.name}と${falcon.name}は、来週の東京大賞典に向けて、張りつめて準備している。`,
      );
      await era.printAndWait(`${falcon.name}との契約は、もう三年に近い。`);
      await you.say_and_wait(`次は卒業式か。`);
      await era.printAndWait(
        `トレセンを卒業して、もっと上へ進むか。正式にアイドルの道へ出るか。`,
      );
      await era.printAndWait(`${falcon.name}なら、そのふたつだろう。`);
      await era.printAndWait(
        `未来へ向かう同じ乗客として、${falcon.name}といっしょに積んだ経験は、静かな夜に、昨日のことみたいに浮かぶのだろう。`,
      );
      await era.printAndWait(`チリンチリン。`);
      await era.printAndWait(
        `煩い音が${you.name}の思考を切る。もう下校の時間だ。`,
      );
      await era.printAndWait(
        `いつもは書類を整えてから、川辺の草地で${falcon.name}を待つ。`,
      );
      await you.say_and_wait(`ここで少し、${falcon.name}を待とう。`);
      await era.printAndWait(
        `どうしても動けないときは、${falcon.name}のほうから来て待ってくれる。`,
      );
      await era.printAndWait(
        `わざわざ約束したわけではないが、ふたりのあいだにはその黙契がある。`,
      );
      await era.printAndWait(
        `——だが、淹れたコーヒーの湯気が消えるまで、いつものノックは起きなかった。`,
      );
      await you.say_and_wait(`急な用事に引っ張られて、動けないのかも。`);
      await era.printAndWait(
        `今の${falcon.uma_sex_title}アイドルには、突然の仕事も増えている。`,
      );
      await era.printAndWait(
        `長い心のしこりが解けたせいか、${falcon.name}の動きはいつもより積極的だ。`,
      );
      await you.say_and_wait(`なら携帯で、ウマスタの新着を待とう。`, true);
      await you.say_and_wait(`明日の朝、${falcon.sex}の面白い話を聞けばいい。`);
      await era.printAndWait(
        `書類を扱っているときに倒した額縁を起こし、いちばん目立つ位置へ戻す。`,
      );
      era.drawLine();
      await era.printAndWait(`冬の夜は、思ったより長い。`);
      await era.printAndWait(`ひとりの時間に、思考は世界の果てまで伸びる。`);
      await era.printAndWait(`底の見えない感情も、伸びるうちに無限に膨らむ。`);
      await era.printAndWait(`黙った海のようで、底のない井戸のようでもある。`);
      await era.printAndWait(`トントントン。`);
      await era.printAndWait(
        `鍵をそっと開けると、髪を下ろした栗色の${falcon.uma_sex_title}がいた。`,
      );
      await falcon.say_and_wait(`……${callname}。`);
      await you.say_and_wait(`まず入って。`);
      await era.printAndWait(
        `フックからタオルを取って${falcon.name}に渡し、扉を閉めた。`,
      );
      await era.printAndWait(
        `変な噂より、${you.name}が心配なのはファル子の様子だ。`,
      );
      await falcon.say_and_wait(`お邪魔します。`);
      await you.say_and_wait(
        `何がいい？ 紅茶？ ジュース？ コーヒー？ いや、コーヒーはやめよう。`,
      );
      await era.printAndWait(
        `入ると居間のソファに端座し、両目が周囲を見回している。`,
      );
      await era.printAndWait(
        `そういえば、${falcon.name}がここを知るのは初めてだ。`,
      );
      await era.printAndWait(`……${falcon.sex}は、どうして知った？`);
      await falcon.say_and_wait(`${callname}、どこか上の空だね？`);
      await era.printAndWait(
        `考えすぎて、${falcon.name}の好奇心が起きていた。`,
      );
      await you.say_and_wait(`いや、何を出せばいいか考えてただけ。`);
      await falcon.say_and_wait(`ファル子、ビール飲みたい！`);
      await you.say_and_wait(`決めた。紅茶にしよう。`);
      await era.printAndWait(`頭で決めたら、動きに目的が乗る。`);
      await era.printAndWait(
        `やかんをできるだけゆっくり傾け、一滴も机に逃がさない。`,
      );
      await you.say_and_wait(`沸かしたてで熱いから、気をつけて。`);
      await falcon.say_and_wait(`うん！`);
      await era.printAndWait(
        `今年の合宿パーティーで、${falcon.name}がトレーナー側の飲み物を間違えて飲んでから、ずっと忘れられないらしい。`,
      );
      await era.printAndWait(
        `${falcon.sex}の言う、雲を踏むみたいなふわふわは……いや、ただの風味飲料の飲みすぎだ。`,
      );
      await era.printAndWait(
        `だが${falcon.name}を寮へ送り、たづなさんへの言い訳を考えるのは、かなりの苦行だった。`,
      );
      await era.printAndWait(
        `今から地下鉄の入り口まで行っても、終電には間に合わない。`,
      );
      await era.printAndWait(
        `カップを抱えて茶葉を見つめ、何か考えている${falcon.name}。`,
      );
      await era.printAndWait(`プシュッ。`);
      await you.say_and_wait(`どうしたか、言える？`);
      await era.printAndWait(
        `少し考えてから缶を開ける。口から溢れる茶色い泡は、荒い洪水を思わせる。`,
      );
      await era.printAndWait(
        `外泊許可は明日出せばいい——そんな考えも、アルコールといっしょに血へ混じって、無意識から上がってくる。`,
      );
      await you.say_and_wait(`曇りひとつない空。`);
      await you.say_and_wait(`明日も、いい天気だ。`, true);
      await falcon.say_and_wait(`……`);
      await falcon.say_and_wait(``);
      await you.say_and_wait(`いっそ、ここで一晩泊まっていく？`);
      await you.say_and_wait(`……だってファル子だ。`);
      await you.say_and_wait(`幸せでいて`);
      await era.printAndWait(`口にした瞬間、${you.name}は後悔した。`);
      await era.printAndWait(
        `万の感情が胸に湧いて、最後に出たのがこれだった。`,
      );
      // 前文の恋心と責任の選択でここは変わる。変わるのは重心だけで、スマートファルコンのトレーナーへの恋心は抑えても消えない。暗火のように
      // 恋慕が責任より大きい
      await you.say_and_wait(`これで嫌われるな。`, true);
      await falcon.say_and_wait(`${callname}、好き。`);
      await you.say_and_wait(`やっぱり……ん？`);
      await era.printAndWait(
        `想像より凛とした顔。見たことのない、${falcon.name}である${falcon.teen_sex_title}の、隠していた一面。`,
      );
      await falcon.say_and_wait(
        `ファンより、ファンのみんなより、${callname}が好き！`,
      );
      await era.printAndWait(`突然の告白に、言葉が出ない。`);
      await you.say_and_wait(`え？ ファル子、どうして？`);
      await falcon.say_and_wait(
        `ずっとカレンちゃんが羨ましかった……清純派アイドルより、自分から行ってトレーナーの好感を掌に掴むほうが正しい……よね。`,
      );
      await falcon.say_and_wait(
        `あ、ファル子が${falcon.uma_sex_title}アイドルに憧れてたとき、好きな人のために、ここまで育てたファンを手放す日が来るなんて、思わなかった。`,
      );
      await falcon.say_and_wait(
        `でも、ファル子は後悔しない。${callname}と出会ったあの草地から、ファル子はずっと気持ちを抑えてた。`,
      );
      await falcon.say_and_wait(
        `だからファル子は悪い子。ファンのためって言いながら、本当は自分を満たしてた。だからこそ決めた——アイドルとしてじゃなく、${falcon.name}として${callname}を好きでいる。`,
      );
      await era.printAndWait(
        `${falcon.name}の告白というより、${falcon.name}である${falcon.teen_sex_title}が、胸の奥を見せた。`,
      );
      await you.say_and_wait(`ああ……そうか……`);
      await era.printAndWait(
        `予感はあった。未知から来た不安にも、意味がついた。`,
      );
      await you.say_and_wait(`これからの道も、よろしく。`);
      await era.printAndWait(`${falcon.name}の手を、そっと取る。`);
      await falcon.say_and_wait(`え？`);
      await you.say_and_wait(`今度は、僕の勝ちだ。`);
      await era.printAndWait(
        `汗で湿った右手は微かに震えているが、掌の中ではずっと安定している。`,
      );
      await falcon.say_and_wait(
        `……うん、${callname}の勝ち！ これからよろしく！`,
      );
      await you.say_and_wait(
        `これからのアイドルの道は、波が少し増える。頭が痛いね。`,
      );
      await falcon.say_and_wait(`そうだね……次のファン騒動、しばらく大変かも。`);
      await era.printAndWait(`目が合って、ふたりは声を上げて笑った。`);
      await era.printAndWait(
        `喜びと安堵の混ざった涙が出るまで笑い、この先も笑顔のまま行く。`,
      );
      await falcon.say_and_wait(
        `やっぱりファル子は、トレーナーの胸に飛び込むのが好きだな⭐`,
      );
      await falcon.say_and_wait(`ねえ……${callname}。`);
      await era.printAndWait(`この場に、考える必要はない。`);
      await era.printAndWait(`${falcon.name}の唇に、そっとキスをする。`);
      await you.say_and_wait(`しょっぱい。`, true);
      await era.printAndWait(`想像より、少し甘い。`);
      // いっしょに頑張ろう。スマートファルコンとプレイヤーが手を取る。砂の城が崩れても、握った手が離れなければ、また建て直せる
      // 責任が恋慕を越える
      await falcon.say_and_wait(`ん。`);
      await era.printAndWait(
        `爪先立ちした${falcon.teen_sex_title}に、唇を覆われた。`,
      );
      await era.printAndWait(
        `微かな痛みと、苦い塩気……これが${falcon.name}のキスか。なるほど。`,
      );
      await falcon.say_and_wait(`好き。`);
      await era.printAndWait(
        `突然の告白なのに、片足が崖の縁に乗った錯覚がある。だから、次の言葉を待つ`,
      );
      await falcon.say_and_wait(
        `——でも、ファル子は、ずっと応援してくれたファンに責任を持たなきゃ。`,
      );
      await you.say_and_wait(`やっぱり。`);
      await falcon.say_and_wait(`ファル子、迷った。彷徨った。逃げた。`);
      await falcon.say_and_wait(`罪の意識に包まれた日々は、死より苦しかった。`);
      await falcon.say_and_wait(
        `——全身に傷をぶら下げて、どう見ても輝いてない。嫌になる。`,
      );
      await falcon.say_and_wait(`でも、ファル子は自分のために動く。`);
      await falcon.say_and_wait(
        `ファンの応援がなかったら、ファル子はファル子じゃない。`,
      );
      await era.printAndWait(
        `${falcon.sex}の顔は笑っているというより、極度の痛みで大きく歪んだ筋肉に近い。`,
      );
      await falcon.say_and_wait(
        `……でも……でもファル子の中は空っぽで、どうしても縫えない傷があるみたい。`,
      );
      await era.printAndWait(
        `さっきからずっと震えていた携帯を、壁へ強く叩きつけた。`,
      );
      await era.printAndWait(`もっと早く${falcon.name}の内側に触れていれば。`);
      await falcon.say_and_wait(`だから、`);
      await era.printAndWait(`生徒が学外で泊まるなら、寮長に事前申請が必要。`);
      await era.printAndWait(`生徒が学外で泊まるなら、寮長に事前申請が必要。`);
      await era.printAndWait(`生徒が学外で泊まるなら、寮長に事前申請が必要。`);
      await era.printAndWait(
        `ああ、遠い向こうから来る声みたいに、後半は無理やりな思考に全部覆われる。`,
      );
      await era.printAndWait(`覚悟はできていたのに、なぜこんなに悲しい。`);
      await falcon.say_and_wait(
        `……そういうこと。約束を破っても、心が狂っても、アイドルならファンの期待には真剣に応える`,
      );
      await you.say_and_wait(
        `分かった……ファル子の決断は、どうなっても支える。`,
      );
      await era.printAndWait(
        `視野が自分の範囲を抜け、目の前の${falcon.teen_sex_title}から画面全体を俯瞰する位置へ移り、機械のように決まった規則で会話している。`,
      );
      await era.printAndWait(`それでも、${falcon.sex}の決断は尊重する。`);
      await you.say_and_wait(`おやすみ`);
      await falcon.say_and_wait(`${callname}、おやすみ。`);
      await era.printAndWait(
        `途切れた思考が戻ったとき、自分はもうそこにいた。`,
      );
      await era.printAndWait(`遠いところから来る、弱い声。`);
      await you.say_and_wait(`いや、そんなはずは。`);
      await you.say_and_wait(
        `ファル子が成功しても、失敗しても、最後までいっしょに見る。`,
      );
      await you.say_and_wait(`そのときは、今夜の話を笑って話すはずだ。`);
      await you.say_and_wait(`だから、ファル子、怖がらなくていい。`);
      era.printButton(`決めるとき、僕が押す`, 1);
      await era.input();
      await falcon.say_and_wait(`……${callname}。`);
      await era.printAndWait(
        `${you.name}は${falcon.name}の差し出した手を、きつく握った`,
      );
      await falcon.say_and_wait(`${callname}、今日の言葉、絶対覚えててね？`);
      await you.say_and_wait(`うん、もう覚えた。`);
      await era.printAndWait(
        `翌朝、隣で寝ている${falcon.name}に気づくのは、その先の話だ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = 'クリスマス♪';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `${you.name}と${falcon.name}の、三度目のクリスマス。`,
      );
      await falcon.say_and_wait(`みんな、ありがとう！`);
      await era.printAndWait(
        `クリスマス当日もライブを開いて、ファンのみんなに礼をしていた。`,
      );
      await era.printAndWait(`ファン「ファル子！ ファル子！」`);
      await falcon.say_and_wait(
        `ずっと応援してくれたお礼に、ファル子の気持ちを中に入れたよ！`,
      );
      await era.printAndWait(`ファンA「ありがとうございます！」`);
      await era.printAndWait(`ファンB「これからもずっと応援するよ！」`);
      await era.printAndWait(`ファンC「どのレースも見に行くから！」`);
      await era.printAndWait(
        `贈り物がなくなったあと、受け取れなかったファンがいくつか、肩を落としている。`,
      );
      await falcon.say_and_wait(
        `ファル子の感謝祭に来てくれたみんな、あとはファル子の笑顔で温まるよ！`,
      );
      await era.printAndWait(
        `残ったファンは、握手と笑顔の贈り物を受け取った。`,
      );
      await era.printAndWait(
        `ファンD「遅れて贈り物はもらえなかったけど、これからもファル子を応援する！」`,
      );
      await era.printAndWait(
        `ファンが散ったあと、現場に残ったのは${you.name}とファル子だけ。`,
      );
      await falcon.say_and_wait(`やっと終わった！`);
      era.printButton(`贈り物をもらったファン、きっと嬉しいよ`, 1);
      await era.input();
      await falcon.say_and_wait(`うん！`);
      await falcon.say_and_wait(
        `最初はファンひとりもいなかったのに、輝くアイドルになれた。${callname}がいなかったら、ファル子はここまで来られなかった！`,
      );
      await era.printAndWait(
        `${you.name}に頭を下げるファル子に、${you.name}は少し驚いた。`,
      );
      era.printButton(
        `いや、どれだけ言ってもファル子の手柄だ。僕は分内のことだけ`,
        1,
      );
      await era.input();
      await falcon.say_and_wait(
        `そんなことない！ ${callname}がいなかったら、ファル子は出走の機会すらなかった！`,
      );
      await falcon.say_and_wait(`それに、${callname}のことが……あ、ごめん。`);
      await falcon.say_and_wait(`これから、どこか見て回らない？`);
      await falcon.say_and_wait(`外泊許可も、もう出してあるよ！`);
      await era.printAndWait(
        `${you.name}の手をそっと取った${falcon.name}が、${you.name}を引いて進む。`,
      );
      await you.say_and_wait(`こっちの道具は？`);
      await falcon.say_and_wait(`大丈夫！`);
      await era.printAndWait(`暖房の効いた部屋を出ると、すぐ寒さが来る。`);
      await falcon.say_and_wait(`外、思ったより寒いね。`);
      await era.printAndWait(
        `保温の手袋をしていても、擦れた隙間から冷気が入ってくる。`,
      );
      await you.say_and_wait(`サイゼリヤで、しっかり食べようか。`);
      await era.printAndWait(
        `安くてしっかりしたサイゼリヤは、腹を空かせたふたりにかなり魅力的だ。`,
      );
      await falcon.say_and_wait(
        `${
          falcon.name
        }もそう思ってた。${callname}といっしょに食べるなら、急にテンション上がる⭐`,
      );
      await you.say_and_wait(`じゃあ、足を速めよう！`);
      era.drawLine();
      await era.printAndWait([
        falcon.get_colored_name(),
        '/',
        you.get_colored_name(),
        '「',
        { content: 'かん', color: falcon.color },
        'ぱい！」',
      ]);
      await era.printAndWait(
        `暖色の灯りの下、店のざわめきと食器のぶつかる音が、独特の響きになる。`,
      );
      await falcon.say_and_wait(`サイゼリヤのご飯、思ったよりおいしい`);
      await you.say_and_wait(`祭りのせいかな。ここの人、みんな楽しそうだ。`);
      await falcon.say_and_wait(
        `それもあるけど、もっと普通の${falcon.uma_sex_title}として、祭りを味わってる。`,
      );
      await you.say_and_wait(`ファル子、アイドルに疲れた？`);
      await falcon.say_and_wait(`ううん？ むしろ楽しんでるよ！`);
      await era.printAndWait(`目を見開いたファル子が、首を傾げる。`);
      await you.say_and_wait(`これからの道も、ファル子は頑張らないと。`);
      await falcon.say_and_wait(`夢の杯？`);
      await you.say_and_wait(
        `レース以外にも、予定を見て、過労しないようにね！`,
      );
      await era.printAndWait(`気づいたら、いつもの説教口調に戻っていた。`);
      await falcon.say_and_wait(
        `ぐ～こういう雰囲気で、${callname}って本当に木だね。`,
      );
      await era.printAndWait(
        `残り半分のジュースをぐるぐる混ぜて、不満そうなファル子が${you.name}を見る。`,
      );
      await falcon.say_and_wait(
        `でも、そういう${callname}だから、${falcon.name}がいちばん好きなんだ！`,
      );
      await era.printAndWait(`急に笑うファル子は、余計に可愛い。`);
      await falcon.say_and_wait(`ん——ちょっと寄ってもいい？`);
      await era.printAndWait(`そう言って、${you.name}の席へ体を寄せる。`);
      await you.say_and_wait(`……`);
      await falcon.say_and_wait(`それじゃ！ いち、に、さん！`);
      await era.printAndWait(`キスの瞬間を携帯で撮った${falcon.name}。`);
      await era.printAndWait(`アイドルとしては、絶対NGだよね。`);
      await falcon.say_and_wait(
        `アイドルのファル子は、平等な愛をファンひとりひとりに渡す。でも今の私は、どこにでもいる普通の${falcon.uma_sex_title}だよ！`,
      );
    };
    f.title = title;
    return f;
  })(),
  before_toky_dai_s: (() => {
    const title = '東京大賞典・the biggest stage';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await falcon.print_and_wait(`この日の到来は、思ったより早かった。`);
      await falcon.print_and_wait(
        `辛い汗も、頑張った値打ちも、この瞬間に現れる。`,
      );
      await falcon.print_and_wait(
        `トップアイドルを追うために、応援してくれたファンのために、ここまで来た。`,
      );
      await falcon.print_and_wait(`なのに、自分を説得できない。`);
      await falcon.print_and_wait(
        `奥から来る声が、ずっと聞いてくる。これでいいの？`,
      );
      await falcon.print_and_wait(`胸が痛い。心臓を掴まれたみたい。`);
      await falcon.print_and_wait(`答えは分からない。`);
      await falcon.print_and_wait(
        `でも、かすかに分かる。最後の答えは、ここで出る。`,
      );
      era.printButton(`もう出発だ、ファル子。`, 1);
      await era.input();
      await falcon.say_and_wait(`……出発しよう。その答えを追うために。`);
      await era.printAndWait(
        `砂混じりの風で目が開けない${you.name}は、ふと、コースへ向かう${falcon.name}と、初めて会ったときの${falcon.teen_sex_title}が重なった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  toky_dai_win_s: (() => {
    const title = '東京大賞典後・ウィンナーズステージ前の決断';
    /**
     * （恋慕が責任より大きい）東京大賞典のあと、ウィンナーズステージまでの隙間で、スマートファルコンは自分を見直す（決めたことに後悔はない。もう一度選んでも、この道を選ぶ）
     * （責任が恋慕より大きい）東京大賞典のあと、ウィンナーズステージまでの隙間で、スマートファルコンは自分を見直す（決めたことに後悔はない。もう一度選んでも、この道を選ぶ）
     * 渇望は満たされ、心はもう孤独ではない。恐れは信仰の固さとともに消え、強さは覚悟へ変わった
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.print_and_wait(`この瞬間が、やっと来た。`);
      await falcon.print_and_wait(
        `三年前の自分が憧れた、何千ものファンの目が集まるいちばん輝くステージ。想像した軌道とはもう交わらないのに。`,
      );
      await falcon.print_and_wait(`結局、叶った。`);
      await falcon.print_and_wait(
        `難しい目標が叶った瞬間、普通なら言葉にならないほど興奮するか、息を止めて、終わったあと安堵で息を吐くまで待つ。`,
      );
      await falcon.print_and_wait(`なのに今の自分は、意外なほど静かだ。`);
      await falcon.print_and_wait(
        `この瞬間のために整えた顔、手、姿勢、発音は、いちばん自然な形。`,
      );
      await falcon.print_and_wait(
        `それでも胸の中には、言いようのない感情がある。`,
      );
      await falcon.print_and_wait(
        `例えるなら、まだテレビの前で有名アイドルに憧れ、わざとステップを真似していた、あの小さな${falcon.uma_sex_title}のよう。`,
      );
      await falcon.print_and_wait(
        `——さっきまで頭の中を歩いていた雑音が、気づいたら消えていた。`,
      );
      // 恋慕が責任より大きい
      await falcon.print_and_wait(
        `決めたことに後悔はない。もう一度選んでも、この道を選ぶ`,
      );
      await falcon.print_and_wait(`本当に言うことがあるなら、`);
      await falcon.print_and_wait(
        `${callname}といっしょの日々は、満足している。`,
      );
      await falcon.print_and_wait(`ありがとう、${callname}、`);
      //責任が恋慕より大きい
      await falcon.print_and_wait(
        `責任から逃げて自分を麻痺させても、内側の自分が一歩ずつ問い詰めてくる。千倍に増幅した敏感さの中で、烈火と寒さの二重の痛みに落ちる`,
      );
      await falcon.print_and_wait(
        `その増幅の下では、羽根ほどの圧でも、人を壊せる。`,
      );
      await falcon.print_and_wait(
        `与えられた責任に向き合うのは圧だ。だがその責任から逃げるのは、別の痛みに落ちるだけ。`,
      );
      await falcon.print_and_wait(`それが、私の悟り。`);
      await falcon.print_and_wait(`だから。`);
      await falcon.say_and_wait(
        `ファンのみんなのために、ファル子は悔いなく、最後の一曲を捧げる！`,
      );
      era.drawLine();
      await era.printAndWait(
        `誰も見向きしなかった路上アイドルから、ダートのトップアイドルへ。三年の幅にしては、早すぎる。`,
      );
      await era.printAndWait(
        `${falcon.sex}と初めて会ったとき、窓から飛び下りた姿みたいに。`,
      );
      await era.printAndWait(
        `あの瞬間の${falcon.sex}は、大地より空に近かった。`,
      );
      await era.printAndWait(
        `それが、${falcon.sex}と契約すると決めた理由なのかもしれない。`,
      );
      await era.printAndWait(
        `フラッシュが集まる焦点が、${falcon.name}という名のトップアイドルだ。`,
      );
    };
    f.title = title;
    return f;
  })(),
  deadline_fight: (() => {
    const title = '期末大作戦！';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`う———むずかしい`);
      await falcon.print_and_wait(
        `単位を落としそうな答案を見て、ファル子は黙り込んだ。`,
      );
      await falcon.say_and_wait(
        `このままじゃ放課後の居残りじゃ済まない。単位、落とすかも。`,
      );
      await falcon.print_and_wait(
        `ファル子は慌てて回り始め、ふと ${callname} を思い出す。`,
      );
      await falcon.say_and_wait(`${callname} に聞いてみよ。`);
      era.drawLine({ content: 'トレーナー室' });
      await era.printAndWait(
        `目の前の点数を見て、${you.name} もファル子と同じように黙った。`,
      );
      await you.say_and_wait(`……ファル子？`);
      await era.printAndWait(
        `俯いて申し訳なさそうなファル子を見て、${you.name} は長く息を吐いた。`,
      );
      await you.say_and_wait(`じゃあ、いっしょに間違えた問題を見よう`);
      await era.printAndWait(
        `ファル子を${you.name} の席に座らせ、${you.name} は別の椅子を${falcon.sex} の隣へ運んだ。`,
      );
      await you.say_and_wait(
        `合格に必要なのは枝葉じゃなく、「幹」の考え方を掴むことだ`,
      );
      await you.say_and_wait(
        `どれを先にやるか、どれは後でいいか、冷静に判断する。`,
      );
      await you.say_and_wait(`じゃあ、この部分は……`);
      await era.printAndWait(`午後いっぱい、間違いと戦った。`);
      era.drawLine({ content: '黄昏のあと' });
      await you.say_and_wait(`だいたいこんなところだ……ファル子？`);
      await falcon.say_and_wait(`……あ、はい。`);
      await era.printAndWait(
        `いつの間にか、ファル子の意識は別のところへ行っていた。`,
      );
      await you.say_and_wait(`……まあ、今日はここまで。`);
      await era.printAndWait(
        `長く息を吐いて、${you.name} はファル子の答案を自分のファイルへ収めた。`,
      );
      await you.say_and_wait(`次からは、追試に受かるまでライブ禁止。`);
      await falcon.say_and_wait(`え？`);
      await falcon.say_and_wait(`${callname}、やめて！！！`);
      await era.printAndWait(`ファル子の悲鳴が、校舎中に響いた。`);
    };
    f.title = title;
    return f;
  })(),
  idol_ice_cream: (() => {
    const title = 'ファル子・デート大作戦';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(`入る前から、ファル子の元気な声が聞こえる。`);
      await you.say_and_wait(`名より先に声が届く、ってやつか。`, true);
      await era.printAndWait(`もちろん違う。`);
      await falcon.say_and_wait(
        `ファル子、応援してくれてるファンにコスパいいスイーツを薦めたいんだけど、${callname}、どこか知ってる？`,
      );
      await era.printAndWait(
        `アイドルは、応援してくれるファンに礼を伝える必要もある。`,
      );
      await you.say_and_wait(`スイーツなら、近くのモールを見てみない？`);
      await you.say_and_wait(
        `ウマスタで生活系の人が薦めてる店を見るのもいい。`,
      );
      await era.printAndWait(`ファル子も考え込む`);
      await falcon.say_and_wait(
        `ん……ファル子は、見に行かないと決められないかな。`,
      );
      await falcon.say_and_wait(`だから ${callname}……`);
      await era.printAndWait(`${you.name} の反応を、こっそり見るファル子。`);
      await falcon.say_and_wait(`……やっぱりファル子ひとりで行くね⭐`);
      await you.say_and_wait(`ああ、いいよ。`);
      await era.printAndWait(`わざと聞き取れなかったふりをする。`);
      await falcon.say_and_wait(`え？！ そんなのダメ！`);
      await era.printAndWait(
        `自分で自分の足を撃ったファル子が慌てて、やっと本音を出した。`,
      );
      await you.say_and_wait(
        `ごめん、さっき聞き取れなかった。もう一度言って？`,
      );
      await falcon.say_and_wait(`ファル子、${callname} といっしょに行きたい。`);
      await you.say_and_wait(`可愛いファル子のお願いなら、もちろん。`);
      await falcon.say_and_wait(`やった⭐`);
      await era.printAndWait(`そのあとふたりは、近くのスイーツ店を味わった。`);
    };
    f.title = title;
    return f;
  })(),
  loneliness_girl: (() => {
    const title = '河岸のアイドル';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`岸の草地で`);
      await falcon.say_and_wait(`${callname}、ここの空気、すっごくきれい`);
      await falcon.say_and_wait(
        `岸の草地、きれいな空気は、人が休むのに向いてるね。`,
      );
      await falcon.say_and_wait(
        `！そうだ、ここでライブしてウマスタに上げたら、ファンも一気に増えるかも。`,
      );
      await falcon.say_and_wait(`${callname} はどう思う？`);
      await era.printAndWait(`深呼吸して未来を憧れるファル子を見る`);
      await you.say_and_wait(
        `そうだね。きれいな空気を吸えば、ファンも嬉しいだろう。`,
      );
      await falcon.say_and_wait(`……${callname} も嬉しい？`);
      await you.say_and_wait(`？うん。`);
      await falcon.say_and_wait(`ファル子も嬉しいよ⭐`);
      await era.printAndWait(
        `口を覆って忍び笑いするファル子と河岸を歩く。水面から陸へ吹く風。水際の草も、風に体を揺らしている。`,
      );
      await era.printAndWait(`植物たちも、風と水の潤いを待っている。`);
      await falcon.say_and_wait(`${callname}、こっち見て！`);
      await era.printAndWait(
        `新しいものを見つけたファル子が川へ走って、しゃがむ。`,
      );
      await era.printAndWait(
        `ファル子について岸へ行き、${you.name} もファル子の視線の先を見る。`,
      );
      await era.printAndWait(
        `川際に根を張った白い小さな花が、風に揺れている。`,
      );
      await falcon.say_and_wait(`この花、ファル子みたい。`);
      await era.printAndWait(
        `そっと触りたいが、力で折りそうで、白い花弁に守られた黄色い芯を、ただ見る。`,
      );
      era.printButton(`カモミール、だったかな`, 1);
      await era.input();
      await you.say_and_wait(
        `古代エジプトでは${falcon.sex} を月の薬草と呼んで、涼しくて心を鎮める効き目がある。`,
      );
      await you.say_and_wait(`花言葉は……`);
      await era.printAndWait(`こっそり携帯でカモミールと入れる`);
      await you.say_and_wait(`苦難の中の力。`);
      await falcon.say_and_wait(`ファル子も、カモミールみたいに咲きたい。`);
      await era.printAndWait(`ときどき川に洗われる、湿った土を見る。`);
      await falcon.say_and_wait(
        `根を土に深く下ろして、咲いた花をみんなに捧げる。`,
      );
      await falcon.say_and_wait(`だから、ファル子も頑張らないと。`);
      await era.printAndWait(
        `ファル子の頭を撫でようと手を伸ばすと、うまくかわされた。`,
      );
      await falcon.say_and_wait(`逃げるファル子をつかみたいなら、追ってきて！`);
      await you.say_and_wait(`ファル子、捕まえるぞ！`);
      await falcon.say_and_wait(
        `${callname} は、ずっとファル子を捕まえられないよ⭐`,
      );
      await era.printAndWait(
        `騒がしかった草地が静かに戻る。揺れる花の音だけが、風の耳元をゆっくり流れていく。`,
      );
    };
    f.title = title;
    return f;
  })(),
  shine_girl: (() => {
    const title = '駅前宣伝';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} maru マルゼンスキー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname_4 マルゼンスキーのプレイヤーへの呼び方
     */
    const f = async (falcon, maru, you, callname_4) => {
      await era.printAndWait(`休日のある日`);
      await falcon.say_and_wait(`トップアイドルを目指す${falcon.name} です！`);
      await falcon.say_and_wait(
        `アイドルのファル子を、よろしくお願いしまーす♪`,
      );
      await era.printAndWait(
        `休日、${you.name}は${falcon.name} に引かれて駅へ来た`,
      );
      await you.say_and_wait(`駅の人通りを狙って、ファン宣伝？`);
      await you.say_and_wait(`この熱を勉強に回せたらな。`);
      await era.printAndWait(`だが大半は、変な目で見て、去っていく。`);
      era.drawLine({ content: '昼になる' });
      await falcon.say_and_wait(`う～昼になっても、新しいファンが増えない。`);
      await era.printAndWait(
        `みんな用事がある。ファンでいられる余裕があるのは、学生くらいだ。`,
      );
      await era.printAndWait(`それに`);
      await maru.say_and_wait(`ファル子じゃない。`);
      await era.printAndWait(`意外な人が現れた。`);
      await falcon.say_and_wait(`え？ マルゼン先輩、なんでこっちに？`);
      await era.printAndWait(
        `トレセンの制服のマルゼンスキーが、余裕の笑顔であなたたちを見ている。`,
      );
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('cflag:4:育成回合计时') >= 47
      ) {
        await maru.say_and_wait(
          `どこ探しても ${callname_4} がいないと思ったら、ここにいたの？`,
        );
        await era.printAndWait(
          `${you.name} はもちろん、この親しみやすい${maru.elder_sibling_sex_title}を覚えている`,
        );
        await maru.say_and_wait(
          `しばらく ${callname_4} が見えないと、${maru.elder_sibling_sex_title}、寂しいわ？`,
        );
        era.printButton(`いっしょにやる？`, 1);
        await era.input();
        await maru.say_and_wait(
          `可愛い後輩を助けるのは光栄よ。で、アタシは何をすればいい？`,
        );
        await era.printAndWait(
          `走る喜びを味わい、もっと多くの${maru.uma_sex_title}に背中を追わせるために、`,
        );
      }
      await falcon.say_and_wait(`ファル子は、駅でファンを誘い始めるところ⭐`);
      await falcon.say_and_wait(`だからマルゼン先輩にも、宣伝手伝ってほしい。`);
      await maru.say_and_wait(
        `こんな可愛い後輩なら${maru.elder_sibling_sex_title}が手伝うわ。${maru.elder_sibling_sex_title}の宣伝、見せてあげる`,
      );
      await era.printAndWait(`次の列車が着くとき`);
      await maru.say_and_wait(
        `ハーイ！ハンサムもビューティもこっち見て！こんな可愛いお嬢さん、一番乗りしないわけ？`,
      );
      await maru.say_and_wait(
        `プレッシャー山ほどでも大丈夫。神馬はすべて浮き雲よ～`,
      );
      await falcon.say_and_wait(`……懐かしい言い方。`);
      await era.printAndWait(
        `${you.name}は中学のころ、ネットでそう呼び合っていた空気を思い出した。`,
      );
      await era.printAndWait(
        `それが出た瞬間、みんな足を速めた。両手で顔を覆って、雷に打たれたような人も多い。`,
      );
      await maru.say_and_wait(`ん～一番乗り、ひとりもいないわ`);
      await era.printAndWait(
        `残念そうなマルゼンスキーを見て、ファル子が前に出て慰める。`,
      );
      await falcon.say_and_wait(`だ、大丈夫。もうファル子の助けになったよ。`);
      await falcon.say_and_wait(`とにかく、ありがとう。`);
      await maru.say_and_wait(
        `それなら……アタシもファル子のファンになっていい？`,
      );
      await falcon.say_and_wait(
        `え？ マルゼン先輩がファン……ありがとうございます！`,
      );
      await era.printAndWait(
        `ファンを得たファル子を見て、${you.name} も嬉しい。`,
      );
      if (
        era.get('cflag:4:招募状态') === recruit_flags.yes &&
        era.get('cflag:4:育成回合计时') >= 96
      ) {
        await maru.say_and_wait(`ファル子、ひとつお願いしていいかしら。`);
        await era.printAndWait(
          `余裕の顔のマルゼンスキーが、${you.name} と${falcon.name} のやりとりを見ている。`,
        );
        await falcon.say_and_wait(`ファル子が力になれるなら、嬉しい！`);
        maru.say(
          `よかった！近くのモールで、最近流行のココアパフェを買ってきてくれない？`,
        );
        await era.printAndWait('チョコとアイスが混ざった飲み物', {
          fontSize: '0.5rem',
        });
        await falcon.say_and_wait(
          `もちろん。でもファル子、まだファンを誘ってるところ。`,
        );
        await maru.say_and_wait(
          `アタシも手伝うわ？だからお願い、いまできたてのファンの願い、聞いてちょうだい！`,
        );
        await falcon.say_and_wait(
          `ん——うん！マルゼン先輩のお願いなら、ファル子、頑張る！`,
        );
        await falcon.say_and_wait(`それじゃ、ファル子、行ってくる！`);
        await era.printAndWait(
          `遠ざかるファル子を見て、駅に残ったのは${you.name} とマルゼンスキーだけ。`,
        );
        await maru.say_and_wait(
          `用事がないなら、${callname_4} を少し独占させて♪`,
        );
        await era.printAndWait(
          `${you.name} を抱き寄せて優しく撫でるマルゼンスキーは、嬉しそうだった。`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  curiosity_girl: (() => {
    const title = '黄金菊';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`休日のある日`);
      await falcon.say_and_wait(`${callname}、ちょっと来てくれる？`);
      await era.printAndWait(
        `ファル子はトレーナー室の姿見の前で、身だしなみを整えている。`,
      );
      await falcon.say_and_wait(
        `あの、ファル子、髪を下ろしてポニーテールにして、リボンを留めたいんだ。`,
      );
      await era.printAndWait(
        `後ろが見えないから、${you.name} の手を借りたいらしい`,
      );
      await you.say_and_wait(`——これでいい？`);
      await falcon.say_and_wait(`ん——もう少し上。`);
      await era.printAndWait(`慎重に、蝶のクリップを少し高い位置へ置く。`);
      await you.say_and_wait(`——これなら？`);
      await falcon.say_and_wait(`ん——だいたい。`);
      await era.printAndWait(`髪型を変えたファル子は、前と少し違う。`);
      await falcon.say_and_wait(`でも、どこか足りない気がする。`);
      await era.printAndWait(`また気になり始める。`);
      await falcon.say_and_wait(
        `${callname}！このあと商店街、いっしょに行かない？`,
      );
      await falcon.say_and_wait(`小さな飾りを買いたいの。`);
      await era.printAndWait(`自分の魅力の限界を、見たいのだろうか。`);
      await you.say_and_wait(`いいよ！`);
      era.drawLine({ content: '商店街' });
      await era.printAndWait(
        `週末のせいで、商店街の人通りは平日よりかなり多い`,
      );
      await falcon.say_and_wait(`じゃあ、この店を見てみよ！`);
      await era.printAndWait(
        `最近話題の店らしい。小物を眺めるカップルの割合が、意外と高い。`,
      );
      await you.say_and_wait(`カップル多いな。`);
      await falcon.say_and_wait(
        `ファル子と${callname}が混ざっても、違和感ないね。`,
      );
      await era.printAndWait(
        `${you.name} の腕を引いたファル子が一周して、ヘアゴムのところで止まる。`,
      );
      await falcon.say_and_wait(`どれも可愛い。でも、どれがいい？`);
      await era.printAndWait(`ファル子は、このヘアゴムが気に入ったらしい。`);
      await you.say_and_wait(`そんなに迷うなら、欲しいの全部買おうか。`);
      await era.printAndWait(
        `給料が出たばかりの ${you.name} は、口に力がある（たぶん？）。`,
      );
      await falcon.say_and_wait(`本当にいいの？${callname}、優しいね！`);
      await falcon.say_and_wait(`でも、${callname}はどれが好き？`);
      era.printButton(`緑のリボンの白いヘアゴム`, 1);
      era.printButton(`白いウサギ飾りのある緑のヘアゴム`, 2);
      era.printButton(`白いバラ飾りの黒いヘアゴム`, 3);
      switch (await era.input()) {
        case 1:
          await falcon.say_and_wait(
            `ん——ファル子も、このさっぱりした感じ好き。`,
          );
          await falcon.say_and_wait(`緑の野原を歩くみたいで、元気⭐`);
          break;
        case 2:
          await falcon.say_and_wait(`可愛い系？ ファル子もそう思ってた！`);
          await falcon.say_and_wait(
            `ウサギには、恋を欲しがる隠語もあるらしいよ。`,
          );
          await falcon.say_and_wait(`ファル子は何も言ってないよ⭐`);
          break;
        case 3:
          await falcon.say_and_wait(
            `ほほほ！ ファル子も小悪魔系アイドルだよ！`,
          );
          await era.printAndWait(`どう見ても、あまり似ていない`);
          await falcon.say_and_wait(
            `トレーナーが選んだなら、ちゃんと考えるね。`,
          );
          await era.printAndWait(
            `${falcon.sex} の小さな頭を軽く叩くと、悲鳴が飛ぶ。`,
          );
          await falcon.say_and_wait(`ごめん、次からそんな話し方しない！`);
      }
      await era.printAndWait(`選んだヘアゴムを袋へ入れて、買い物を続ける。`);
    };
    f.title = title;
    return f;
  })(),
  rooftop_idol: (() => {
    const title = '屋上のアイドル';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      await era.printAndWait(`放課後のある日`);
      await era.printAndWait(
        `${falcon.name} の最近のデータを整えたあと、肩の力を抜いた ${you.name} が、長く息を吐く。`,
      );
      era.printButton(`このあと屋上を歩こう`, 1);
      await era.input();
      await era.printAndWait(
        `いつの間にか ${you.name} も、鏡に向かってひとりごとを言う癖がついていた。`,
      );
      await you.say_and_wait(
        `ふたりでいると、相手の癖を継ぐ、ってやつか。`,
        true,
      );
      await era.printAndWait(
        `その考えを感情のいちばん奥へ埋めたいのに、${you.name} を相手に調子に乗ったみたいに、浮かび続ける。`,
      );
      await era.printAndWait(`最後の結論は——`);
      await you.say_and_wait(
        `僕は、ファル子としての${falcon.name}が好きだ。`,
        true,
      );
      await era.printAndWait(
        `明るく、前向きで、目標を見て進む${falcon.sex} が、${you.name} とファンに希望を渡してきた。`,
      );
      await you.say_and_wait(
        `こんな${falcon.uma_sex_title}、本当にいるのか。`,
        true,
      );
      await era.printAndWait(`${you.name} の内側は、ずっとそれを疑っている。`);
      await era.printAndWait(`アイドルでい続ける痛みと、心の責め。`);
      await you.say_and_wait(
        `${falcon.sex} は、暗い面を見せたくないだけなんだろう`,
        true,
      );
      await era.printAndWait(`気づいたら屋上にいた。`);
      await era.printAndWait(
        `夕日がゆっくり地平へ落ち、涼しい息がまわりから来て、温度がまた一段下がる。`,
      );
      await you.say_and_wait(`もう戻ろうか`);
      await era.printAndWait(`戻りかけたとき、見慣れた影が見えた。`);
      await falcon.say_and_wait(`仰げば望める、手を伸ばせば虚空。`);
      await falcon.say_and_wait(`月中の桂のよう、青海原の上にあり。`);
      await era.printAndWait(
        `憂いのある歌声が風に乗って届き、憂いのある目が、夕日の去るほうを見ている。`,
      );
      await you.say_and_wait(`ファル子？`, true);
      await era.printAndWait(`声に引かれて、源を見る。`);
      await era.printAndWait(
        `風に吹かれた${falcon.name} は長い髪を任せ、憂いの目で虚空を見ている。`,
      );
      await era.printAndWait(`声をかけようとして、その場で止まる。`);
      await era.printAndWait(`${falcon.name} は、結局屋上を離れた。`);
    };
    f.title = title;
    return f;
  })(),
  petrichor_girl: (() => {
    const title = (falcon) => `青草の匂いの${falcon.uma_sex_title}たち`;
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`今日は学園開放日。`);
      await falcon.say_and_wait(
        `${falcon.name} ${falcon.elder_sibling_sex_title}です。これからトレセンを案内するね♪`,
      );
      await era.printAndWait(
        `近くの小学校の小さな${falcon.uma_sex_title}たちが、トレセンを見学に来た。`,
      );
      era.printButton(
        `この小さな${falcon.uma_sex_title}たちの中から、あとで担当が生まれるかも`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}A「ここがトレセン？」`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}B「わあ！学園、大きい！」`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}C「${
          falcon.name
        } お姉ちゃん、トレセンの歴史、教えて？」`,
      );
      await falcon.say_and_wait(
        `アイドルのファル子なら、ファンにちゃんと説明するよ♪ まず……`,
      );
      await era.printAndWait(
        `元気な${falcon.name} が、トレセンのことを丁寧に話す。`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}A「あっちの人影は？」`,
      );
      await era.printAndWait(
        `${
          falcon.name
        } のまわりで跳ねていた小さな${falcon.uma_sex_title}が${you.name}を見つけた。`,
      );
      await falcon.say_and_wait(
        `トレセンの${falcon.uma_sex_title}でも、G1を取るのは大変だよ……え？ ちょっと待って`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}A「あっちのトレーナー、かっこいい？」`,
      );
      await era.printAndWait(
        `さっきまで${
          falcon.name
        } のそばにいた${falcon.uma_sex_title}たちが、どっと${you.name} のまわりへ来る。`,
      );
      await falcon.say_and_wait(`ト、${callname}！`);
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}B「トレセンに入ったら、わたしの担当トレーナーになってくれる？」`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}A「ダメ！先に見たのはわたし！」`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}B「先に言ったのはわたし。だからいっしょ！」`,
      );
      await era.printAndWait(
        `小さな${falcon.uma_sex_title}たちが、大事な玩具を奪い合うみたいに${you.name} の両手を引く`,
      );
      era.printButton(`い、痛い！`, 1);
      await era.input();
      await era.printAndWait(
        `周知のとおり、${falcon.uma_sex_title}の力は大人の人間の三倍だ。`,
      );
      await era.printAndWait(
        `力を制御できずに危なくなるのを防ぐため、${falcon.uma_sex_title}には必修がある。`,
      );
      await era.printAndWait(`自分の力を制御すること。`);
      await era.printAndWait(
        `大半の${falcon.uma_sex_title}は、中学から意識して力を抑える。`,
      );
      await era.printAndWait(
        `だが心もまだ育っている小さな${falcon.uma_sex_title}たちには。`,
      );
      await era.printAndWait(
        `${you.name} は、筋肉質の大人ふたりに玩具にされたみたいに、引っ張られる。`,
      );
      await falcon.say_and_wait(`${callname}！`);
      await era.printAndWait(`幸い、${falcon.name} が間に合った。`);
      await falcon.say_and_wait(`ふたりとも、どういうことか説明して！`);
      await era.printAndWait(
        `二人の小さな${falcon.uma_sex_title}が巨大な力で空へ持ち上げられ、何が起きたか見ようとした瞬間、${
          falcon.name
        } の修羅のような顔が来る。`,
      );
      await era.printAndWait(`小さな${falcon.uma_sex_title}A「うわああ！」`);
      await era.printAndWait(`小さな${falcon.uma_sex_title}B「食べないで！」`);
      await era.printAndWait(
        `さっきまで争っていたふたりが、いまは縮こまって、${falcon.name} の叱りを震えて聞く。`,
      );
      await falcon.say_and_wait(`${callname}！ ${callname}、大丈夫？`);
      await era.printAndWait(
        `説教のあと、${falcon.name} が心配そうに${you.name} へ聞く。`,
      );
      era.printButton(`大丈夫。子どもたちが少しはしゃいだだけ。`, 1);
      await era.input();
      await era.printAndWait(`痛みをこらえて、子どものそばへ行く。`);
      await era.printAndWait(`小さな${falcon.uma_sex_title}A「う——」`);
      await era.printAndWait(`小さな${falcon.uma_sex_title}B「ん？」`);
      era.printButton(
        `人間は${falcon.uma_sex_title}よりずっと脆い。次は力を抑えてね。`,
        1,
      );
      await era.input();
      era.printButton(
        `できれば、トレセンでも、君たちの元気なところを見たい。`,
        1,
      );
      await era.input();
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}A`,
        'うんうん。',
      );
      await you.say_as_passer_by_and_wait(
        `小さな${falcon.uma_sex_title}B`,
        '分かった。',
      );
      await era.printAndWait(
        '引率の先生が遅れて来て、事情を聞いてから謝罪した。',
      );
      era.drawLine({ content: '終了後' });
      await falcon.say_and_wait(
        `自分より他人の気持ちを先に見る人は、すぐ傷つくよ！`,
      );
      await era.printAndWait([
        'ファル子の説教を素直に聞く ',
        you.get_colored_name(),
        ' が、両手を動かす。',
      ]);
      await you.say_and_wait(`ファル子、そんなに心配してくれた？`);
      await falcon.say_and_wait(`アイドルなら、ファンを心配するのが当たり前！`);
      await falcon.say_and_wait(`まして${callname} は、ファル子の……`);
      await era.printAndWait(`何かに気づいたように、ファル子の顔が赤くなる。`);
      await falcon.say_and_wait(`やあ！ ${callname}、いじめっ子！`);
      await era.printAndWait(`じゃれ合いの中で、今日の日常は終わった。`);
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = 'Freesia';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(`ごく普通の朝`);
      await falcon.say_and_wait(`${callname}、今日も頑張ろうね⭐`);
      await era.printAndWait(
        `連敗でファンからの疑いは多いが、ファル子の励ましで、${you.name}はトレーニング計画を続けている。`,
      );
      await you.say_and_wait(`今日のファル子、よろしくね？`);
      await falcon.say_and_wait(
        `——！${callname} のお願いなら、ファル子も頑張る⭐`,
      );
      await era.printAndWait(
        `大勢の競争者から抜けて、毎日の汗がやっと報われた。`,
      );
      await era.printAndWait(
        `この仕事でファル子の名を広げられれば、この先のダートも`,
      );
      await falcon.say_and_wait(`ファル子が逃げたら？`);
      await era.printAndWait(
        `何かを待つ${falcon.name}が、焦った目で${you.name}を見る。`,
      );
      era.printButton(`追いかけるしかない！`, 1);
      await era.input();
      await falcon.say_and_wait(`地平線の果てまで追うの？`);
      await era.printAndWait(`刺すような光がステージに落ちる。`);
      await you.say_and_wait(`そこがファル子の大ステージ！`);
      await era.printAndWait(
        `役者たちが自分の台詞を小さく唱え、撮影班がカメラの動作を最後に確認する。`,
      );
      await falcon.say_and_wait(
        `道がなければファル子が見つける！ 目標を見つけたら、すぐつかまえて！`,
      );
      await era.printAndWait(`監督が最前列に座る。`);
      await you.say_and_wait(`——大きな愛をつかみ取れ！`);
      await era.printAndWait(`位置につけ！ みんな、主役の登場を待っている。`);
      await falcon.say_and_wait(
        `最強の${falcon.uma_sex_title}アイドル、${falcon.name}♪ 今日も届いたよ⭐`,
      );
      await era.printAndWait(`可愛い衣装のファル子が登場した。`);
      era.printButton(`少し、あたりを歩いてみよう`, 1);
      era.printButton(`席を取ってファル子のステージを見る`, 2, {
        disabled: true,
      });
      if ((await era.input()) === 1) {
        await era.printAndWait(`誰もいないバックステージの控え室へ戻る。`);
        await era.printAndWait(`なぜか気分も上がっている。`);
        await you.say_and_wait(
          `空気は少し濁ってるけど、ここでも${falcon.name}のきれいな歌が聞こえる。`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「こんにちは。${falcon.name}のトレーナーですか？」`,
        );
        await era.printAndWait(
          `いつの間に控え室にいた${falcon.uma_sex_title}。`,
        );
        await you.say_and_wait(`はい、僕は——`);
        await era.printAndWait(`反応する前に、鋭い痛みが胸に来る。`);
        await era.printAndWait(
          `${falcon.uma_sex_title}「はじめまして、トレーナー${you.adult_sex_title}。それから、さようなら。」`,
        );
        await era.printAndWait(
          `二太刀目を出そうとした${falcon.uma_sex_title}に、${you.name} が手近な化粧品を投げて当てた。`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「ん——調子に乗るな！うわあ！！！」`,
        );
        await era.printAndWait(
          `肩掛けから${falcon.uma_sex_title}対策スプレーを出した${you.name}が、震えながら立つ。`,
        );
        await era.printAndWait(
          `悲鳴を上げる${falcon.uma_sex_title}を無視して、スプレーを底まで押し切る。`,
        );
        await you.say_and_wait(`このことは、ファル子に伝えなきゃ。`);
        await era.printAndWait(
          `無意識にバッグを上げた${you.name}は、即死だけは避けられた。`,
        );
        await era.printAndWait(
          `だがアドレナリンの下でも、止まらない血が流れ続ける。`,
        );
        await you.say_and_wait(`ここは危ない。ここで巻けない。`);
        await era.printAndWait(`ここを出なきゃ。`);
        await era.printAndWait(
          `そう思って出ようとした${you.name}のバッグを、${falcon.uma_sex_title}がでたらめに伸ばした両手で掴む。`,
        );
        await you.say_and_wait(`まずい。`, true);
        await era.printAndWait(
          `巨大な力が来る。命を救ったバッグが、いまは死神になる。`,
        );
        await era.printAndWait(
          `首を引かれた${you.name}は、空中で両手を振り回すしかない。`,
        );
        await era.printAndWait(
          `${falcon.uma_sex_title}「お前は地獄で罪を悔いろ！ははははははは！！！」`,
        );
        await falcon.say_and_wait(`${callname}、ファル子、入るよ？`);
        await era.printAndWait(`意識が霞む${you.name}に、幻聴が聞こえる。`);
        await you.say_and_wait(`こうして、ファル子の声が聞こえる`, true);
        await you.say_and_wait(`僕は`, true);
        await era.printAndWait(
          `力なく床に倒れた${you.name}は、痛みすら感じない。`,
        );
      }
      era.drawLine();
      await falcon.say_and_wait(`${callname}？`);
      await era.printAndWait(`優しい呼び声。どこかで聞いた声だ。`);
      await you.say_and_wait(`天国か。もう少し寝かせて。`, true);
      await era.printAndWait(`いつの間にか、安心して深く眠る。`);
      era.drawLine();
      await falcon.say_and_wait(`${callname}。`);
      await era.printAndWait(`優しくて硬い声が、遠いところから来る。`);
      await era.printAndWait(`よく知っている声だ。`);
      await era.printAndWait(
        `どこで聞いた？ 教室？ 屋上？ あの${falcon.teen_sex_title}——`,
      );
      await you.say_and_wait(`僕は誰だ。ここはどこだ。`, true);
      await era.printAndWait(`真っ黒な世界を見回して、また深く眠る。`);
      await falcon.say_and_wait(
        `${callname}、また ${callname} に会いに来たよ。`,
      );
      await falcon.say_and_wait(
        `ファル子、業界でもちょっと立てるようになった。`,
      );
      await falcon.say_and_wait(
        `前に ${callname} にも言ったけど。${callname}、覚えてないよね。`,
      );
      await era.printAndWait(`明るい声が、だんだん沈む。`);
      await falcon.say_and_wait(
        `でも、でもファル子は ${callname} の期待を持って、ずっと頑張る！${callname}、また今度！`,
      );
      await you.say_and_wait(`ファル子`);
      await era.printAndWait(
        `起き上がろうとして痺れで失敗し、体が病床へ重く沈む。`,
      );
      await falcon.say_and_wait(`え？！`);
      await era.printAndWait([
        '——最後に一目、と思った ',
        falcon.get_colored_name(),
        ' が、その全部を見た。',
      ]);
      await falcon.say_and_wait(`${callname}……おかえり！`);
      await you.say_and_wait(`どれくらい経った？`);
      await era.printAndWait(
        `かなり経っているはずだ。${you.name} は最悪も覚悟していた。`,
      );
      await falcon.say_and_wait(`ん——あの事件から、もう三年。`);
      await you.say_and_wait(`……そうか。`);
      await era.printAndWait(`もうそんなに経ったのか。`);
      await you.say_and_wait(`前より、輝いて見える。`);
      await era.printAndWait(
        `孤独な${falcon.teen_sex_title}が、どうこのアイドルの道を歩いたのか、想像しにくい。`,
      );
      await falcon.say_and_wait(
        `うん！${callname} が退院したら、輝くファル子も見られるよ！`,
      );
      await you.say_and_wait(`……ごめん。`);
      await you.say_and_wait(`トレーナーなら、君のそばにいるべきだった。`);
      await falcon.say_and_wait(
        `ううん。${callname} が目を覚ましたのを見られたら、ファル子はもう十分幸せ。`,
      );
      await falcon.say_and_wait(`それ以上欲しがったら、ファル子、欲張りすぎ。`);
      await era.printAndWait(`冷たい小さな手が、粗い大きな手と重なる。`);
      await falcon.say_and_wait(`だから ${callname}、早くよくなって。`);
      await era.printAndWait(
        `大きな手を自分の頬へそっと当て、${falcon.name}は目を閉じて、久しぶりの温もりを味わう。`,
      );
      await you.say_and_wait(
        `……うん、必ず。ファル子のライブも、ファル子のこれから全部も。`,
      );
      await era.printAndWait(`唇に湿りが来て、次の言葉が止まる。`);
      await you.say_and_wait(`いや、もう十分だ`, true);
      await era.printAndWait(`キスの味は、しょっぱい。`);
    };
    f.title = title;
    return f;
  })(),
};
