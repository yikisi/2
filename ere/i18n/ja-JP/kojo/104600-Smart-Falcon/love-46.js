/**
 * @file スマートファルコン - 恋慕
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '一葉はお願い！';
    /**
     * 自分の恋心に気づいたスマートファルコンが、トレーナーをピクニックに誘う
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await era.printAndWait(
        `休みの日。${you.actual_name}がトレーナー室の扉を開けたとき、空はよく晴れていた。`,
      );
      await falcon.say_and_wait(`トレーナーの${you.adult_sex_title}♪`);
      await era.printAndWait(
        `意外なことに、${falcon.name}のほうが${you.actual_name}より先に来ていた。`,
      );
      await falcon.say_and_wait(`こんなにいい天気、一緒にピクニックしよ♪`);
      await era.printAndWait(`天気か。たしかに、ピクニック日和だ。`);
      era.printButton(`でも、材料が足りなさそうだ`, 1);
      await era.input();
      await era.printAndWait(`ピクニックなら、事前に一言あってほしかった。`);
      await falcon.say_and_wait(`じゃーん♪`);
      await era.printAndWait(
        `手品師みたいに、テーブルクロスで包んだピクニックボックスを開いた。`,
      );
      await falcon.say_and_wait(`もう全部準備できてるよ！`);
      await era.printAndWait(`ファル子は、とても楽しみにしている様子だ。`);
      await falcon.say_and_wait(
        `だから、トレーナーの${you.adult_sex_title}、ファル子と一緒に出発してくれる？`,
      );
      await era.printAndWait(`答えは、もちろん。`);
      era.printButton(`こっちも嬉しいよ。`, 1);
      await era.input();
      await falcon.say_and_wait(`やった⭐`);
      await era.printAndWait(
        `トレーナー室をそっと閉め、${falcon.name}の案内でトレセンを出た。`,
      );
      era.drawLine({ content: 'しばらくして' });
      await falcon.say_and_wait(`準備できたよ！`);
      await era.printAndWait(`近くの公園に着いた。`);
      era.printButton(`芝生でピクニックしてるお客さん、多いな。`, 1);
      await era.input();
      await era.printAndWait(
        `休憩所の芝生には、テーブルクロスを敷いた客がいたるところにいた。`,
      );
      await falcon.say_and_wait(
        `だって今日の天気、ピクニックにぴったりだもん♪`,
      );
      await you.say_and_wait(`ファル子、ピクニック楽しみにしてたんだね。`);
      await falcon.say_and_wait(
        `だってファル子、ずっと二人でピクニックしたかったんだよ。`,
      );
      await you.say_and_wait(
        `うん。エイシンフラッシュ${falcon.couple_title}とは、一緒にピクニックしたことないの？`,
      );
      await era.printAndWait(
        `籠から食べ物を取り出していた${falcon.name}の手が、ぴたりと止まった。`,
      );
      await falcon.say_and_wait(
        `ちがう、ちがうよ？ フラッシュ${
          falcon.couple_title
        }とのピクニックは友達同士。トレーナーの${you.adult_sex_title}とは`,
      );
      await you.say_and_wait(`僕と${falcon.couple_title}は違うのか？`);
      await falcon.say_and_wait(
        `そ……それは……あ、そうだ！ トレーナーと${falcon.uma_sex_title}の絆！ 絆だよ！`,
      );
      await era.printAndWait(`必死に取り繕うファル子は、余計に可愛い。`);
      await you.say_and_wait(`おお、な・る・ほ・ど？`);
      await falcon.say_and_wait(
        `え？ トレーナーの${you.adult_sex_title}、ファル子をからかわないで！`,
      );
      await falcon.say_and_wait(
        `こういうトレーナーの${you.adult_sex_title}、大嫌い！`,
      );
      await you.say_and_wait(`ファル子は僕のこと嫌いなの？`);
      await falcon.say_and_wait(`違う！ それは別の話！`);
      await you.say_and_wait(`悲しいな。じゃあこのお肉、僕のだ！`);
      await era.printAndWait(
        `${you.actual_name}は突然、ファル子の弁当から肉を一切れつまんだ。`,
      );
      await falcon.say_and_wait(
        `トレーナーの${you.adult_sex_title}、いじわる！`,
      );
      await falcon.say_and_wait(`じゃあファル子もお返し！`);
      await era.printAndWait(
        `${callname}の弁当から寿司を二貫つまんだ${falcon.name}は、得意げな顔をした。`,
      );
      await falcon.say_and_wait(
        `ふんふん♪ これでトレーナーの${you.adult_sex_title}も、ファル子のすごさがわかったでしょ！`,
      );
      era.printButton(`冗談じゃない、今がいちばん盛り上がってるところだ！`, 1);
      await era.input();
      await era.printAndWait(
        `一瞬で決闘の構えになった${you.actual_name}は興奮し、ファル子の弁当を狙った！`,
      );
      await falcon.say_and_wait(
        `アイドルの名にかけて！ ファル子は負けないよ！`,
      );
      await era.printAndWait(
        `二人の戦い（？）に、周囲の客が次々と目を向けた。`,
      );
      await era.printAndWait(`結局`);
      era.printButton(
        `ぐっ！ 人間は${falcon.uma_sex_title}に勝てないのか？`,
        1,
      );
      await era.input();
      await era.printAndWait(`${you.actual_name}の完敗で終わった。`);
      await falcon.say_and_wait(`この勝負、ファル子の勝ち！`);
      await falcon.say_and_wait(
        `え？ これって、お互いの弁当を食べさせてるだけ？`,
        true,
      );
      await era.printAndWait(`それに気づいたファル子の顔が、さっと赤くなる。`);
      await falcon.say_and_wait(`ちが！ 違う！ こんなの、まだ早すぎだよ！`);
      await falcon.say_and_wait(`${callname}、えっち！`);
      await era.printAndWait(
        `なぜか突然走り去ったファル子は、きょとんとする${callname}と、惨憺たる戦場を残していった。`,
      );
      await you.say_and_wait(`今日の空は、瑠璃みたいに綺麗だな。`);
      await era.printAndWait(
        `突然、空の白い雲に目を奪われた${callname}は、ある${falcon.uma_sex_title}の姿を忘れたらしい。`,
      );
      await era.printAndWait(`今日は、いい天気だ。`);
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = '二葉は希望⭐';
    /**
     * トレーナーに自分の心の声が届くことを願うスマートファルコンが、密かに期待している
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      const ret = [];
      await falcon.print_and_wait(
        `トレーナーの${you.adult_sex_title}、思ったより鈍感だね`,
      );
      await falcon.print_and_wait(
        `あんなにわかりやすく合図したのに、どうしてあの目はまだ動じないの？`,
      );
      await falcon.print_and_wait(
        `だめ！ あきらめない。トップアイドルの名誉にかけて、この石頭ファン1号を開眼させてみせる！`,
      );
      era.drawLine();
      await era.printAndWait(`また、雨の休みの日だった。`);
      await falcon.say_and_wait(`えー、今日は晴れの予定だったのに。`);
      await you.say_and_wait(
        `まあ、天気予報も絶対じゃない。確率の低いほうに当たった、ってことだ。`,
      );
      await era.printAndWait(
        `雨で足元が滑り、ファル子の街角ライブもお流れになった。`,
      );
      await era.printAndWait(
        `かなり気合を入れていたらしい。二週間前からリハーサルしていたダンスも、出番がなくなった。`,
      );
      await falcon.say_and_wait(`む——くやしい。`);
      await era.printAndWait(
        `窓の外を見つめる${falcon.name}は、ますます強く降る雨を見て、元気なく尻尾を振る。`,
      );
      await you.say_and_wait(
        `でも、ファル子、いいほうに考えてみたらどうだ。雨の日は屋外で交流する権利は失ったけど。`,
      );
      await you.say_and_wait(`室内なら、いいことが起きるかもしれないよ！`);
      await falcon.say_and_wait(
        `トレーナーの${you.adult_sex_title}がそう言うなら……あ、そうだ！`,
      );
      await era.printAndWait(`さっきまで伏せていた耳が、一瞬で元に戻った。`);
      await falcon.say_and_wait(`じゃあ、トレーナー室でライブしよ！`);
      await falcon.say_and_wait(
        `トレーナーの${you.adult_sex_title}、ちょっと待ってて♪`,
      );
      await era.printAndWait(`思いついたらすぐ動くのも、ファル子の持ち味だ。`);
      await you.say_and_wait(`それにしても、窓の外の雨か？`);
      await era.printAndWait(
        `揺れる木々のように、${you.actual_name}の内側も揺れ始めていた。`,
      );
      await falcon.say_and_wait(`ただいま♪`);
      await era.printAndWait(
        `勝負服に着替えた${falcon.name}が、トレーナー室へ戻ってきた。`,
      );
      await you.say_and_wait(`次のダンス、楽しみだ。`);
      await falcon.say_and_wait(
        `ファンのみんなのために、ファル子、ずっとリハーサルしてたんだよ♪`,
      );
      await you.say_and_wait(`おおお！ ファル子！ ファル子！`);
      await era.printAndWait(`街角ライブのときと、まったく同じだ。`);
      await falcon.say_and_wait(`じゃあ、ファル子、歌うよ♪`);
      era.drawLine();
      await falcon.say_and_wait(`～～～♪ みんな、ありがとう！`);
      era.printButton(
        `「ファル子、${callname}がいちばん好き！」（関係は据え置き）`,
        1,
        {
          buttonType: '',
          color: falcon.color,
        },
      );
      era.printButton(`「……」`, 2, {
        buttonType: '',
        color: falcon.color,
      });
      ret.push(await era.input());
      if (ret[0] === 1) {
        await falcon.say_and_wait(
          `うんうん、ファンのみんなのありがとうが届くと、ファル子も嬉しいよ！`,
        );
        await falcon.say_and_wait(`え？ なにしようとしたんだっけ？`, true);
        await falcon.say_and_wait(
          `アイドルがファンを立たせたままはだめだよ。今はいい！`,
          true,
        );
        await falcon.say_and_wait(`じゃあ、次、いち、に！`);
        era.printButton(`ファル子！`, 1);
        await era.input();
        await era.printAndWait(
          `心を揺さぶる歌声が、再びトレーナー室に響いた。`,
        );
      } else {
        await you.say_and_wait(`ファル子、思ったよりずっと可愛いな`);
        await falcon.say_and_wait(`……?`);
        await falcon.say_and_wait(
          `トレーナーの${you.adult_sex_title}、いつからバカになったの？ ファル子はいつも可愛いよ？`,
        );
        await you.say_and_wait(
          `いや、ファル子の${falcon.teen_sex_title}としての部分だ。`,
        );
        await you.say_and_wait(
          `多感な年頃で、無邪気でロマンチックで、まるで芸術品だ。`,
          true,
        );
        await era.printAndWait(`ファル子の顔が、ゆっくり赤くなっていく。`);
        await falcon.say_and_wait(
          `トレーナーの${you.adult_sex_title}、変態！ スケベ！ えっち！`,
        );
        await falcon.say_and_wait(`もう${callname}なんか知らない！`);
        await era.printAndWait(
          `飛び出した${falcon.name}は、${callname}が反応する暇もなくトレーナー室を出ていった。`,
        );
        await you.say_and_wait(`ああ、誤解されたな。`);
        await era.printAndWait(
          `${falcon.teen_sex_title}の気持ちは、外の大雨そのものらしい。`,
        );
        await you.say_and_wait(`それにしても、雨が余計に強いな。`);
        await you.say_and_wait(`……ファル子`);
        await era.printAndWait(
          `トレーナーである${you.actual_name}は、結局、決めた。`,
        );
        era.printButton(`追いかけるしかない！（関係を進める）`, 1);
        era.printButton(`……先に電話するか？（関係は据え置き）`, 2);
        ret.push(await era.input());
        if (ret[1] === 1) {
          await falcon.say_and_wait(`ファル子が逃げたら？`);
          await you.say_and_wait(`追いかけるしかない！`);
          await era.printAndWait(
            `朝夕をともにした${callname}なら、${falcon.name}がいちばん現れそうな場所はわかっている。`,
          );
          await you.say_and_wait(`……なんで、ここにいない？`);
          await era.printAndWait(`河岸に、${falcon.sex}の姿はなかった`);
          await era.printAndWait(
            `カモミールの茂みは、増水した川にほとんど沈んでいた。`,
          );
          await you.say_and_wait(`……ファル子、${callname}はどこだ？`);
          await era.printAndWait(
            `カモミールの茂みは、増水した川にほとんど沈んでいた。`,
          );
          await falcon.say_and_wait(
            `……トレーナーの${you.adult_sex_title}なら、ファル子の夢、叶えてくれるかも。`,
          );
          await you.say_and_wait(`……そうだ！ あそこだ！`);
          await era.printAndWait(
            `直感が稲妻みたいに、${you.actual_name}へ方向を示した。`,
          );
          await era.printAndWait(
            `考える暇すらなく、${you.actual_name}はすぐそちらへ走った。`,
          );
          era.drawLine({ content: '屋上' });
          await era.printAndWait(
            `雨の中に立つ像のように、${falcon.name}は微動だにしない。`,
          );
          await you.say_and_wait(`${falcon.name}！`);
          await falcon.say_and_wait(
            `……トレーナーの${you.adult_sex_title}、もう来ないで。`,
          );
          await era.printAndWait(
            `何かに気づいたように、${callname}から離れようとする${falcon.name}が、ゆっくり柵のほうへ下がる。`,
          );
          await falcon.say_and_wait(`ファル子に、これ以上近づかないで！`);
          await era.printAndWait(
            `前へ迫る${you.actual_name}と、一歩ずつ下がるファル子。`,
          );
          await falcon.say_and_wait(
            `ファル子……ファル子、本気出したらトレーナーの${you.adult_sex_title}を蹴っちゃうよ！`,
          );
          await era.printAndWait(
            `${
              you.actual_name
            }はわかっていた。人間は${falcon.uma_sex_title}に勝てない。`,
          );
          await era.printAndWait(`だが、今この瞬間、できることは一つだけだ。`);
          await falcon.say_and_wait(`……んっ！`);
          await era.printAndWait(
            `びしょ濡れの${falcon.name}を強く抱きしめ、唇を押しつける。`,
          );
          await falcon.say_and_wait(`……`);
          await era.printAndWait(
            `意外なことに、${falcon.name}は激しく拒まなかった。`,
          );
          await you.say_and_wait(
            `ごめん。今になって、${falcon.name}の気持ちがわかった。`,
          );
          await you.say_and_wait(
            `あんなに合図があったのに、もっと早く気づくべきだった。`,
          );
          await you.say_and_wait(
            `僕は臆病で、希望の道があるなんて、想像すらできなかった。`,
          );
          await you.say_and_wait(
            `だから、${falcon.name}をこんなに傷つけて、ごめん。`,
          );
          await you.say_and_wait(`でも、今この瞬間だけは、僕は`);
          await you.say_and_wait(`本当に、心から`);
          await you.say_and_wait(
            `${falcon.name}、${callname}は僕と付き合ってくれる？`,
          );
          await era.printAndWait(
            `${falcon.name}の両目をじっと見つめ、答えを迫る。`,
          );
          await falcon.say_and_wait(`……`);
          await falcon.say_and_wait(
            `……トレーナーの${you.adult_sex_title}、いじわるだね。`,
          );
          await falcon.say_and_wait(`答えなんて、一つしかないでしょ？`);
          await era.printAndWait(
            [
              falcon.get_colored_name(),
              `「${you.actual_name}がいちばん好き！」`,
            ],
            {
              align: 'center',
              color: falcon.color,
              fontSize: '1.375rem',
            },
          );
          await you.say_and_wait(`どれくらい好き！`);
          await era.printAndWait(
            [falcon.get_colored_name(), '「こんなに好き❤️」'],
            {
              align: 'center',
              color: falcon.color,
              fontSize: '1.875rem',
            },
          );
          await era.printAndWait(
            `雨の中、バカな恋人みたいに告白し合った二人は、ついに恋人のほうへ踏み出した。`,
          );
        } else {
          await era.printAndWait(
            `そのあと、ファル子が無事に寮へ戻ったと知り、${callname}は胸を撫で下ろした。`,
          );
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '三葉は愛情❤️';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, you, callname) => {
      await falcon.say_and_wait(`メイド${falcon.name}、参上⭐`);
      await falcon.say_and_wait(
        `トレーナーの${you.adult_sex_title}、ファル子のこの格好、どう？`,
      );
      await era.printAndWait(
        `可愛い系のメイド服に着替えた${falcon.name}は、ガーターストッキングを履いていた。`,
      );
      await you.say_and_wait(`ファル子、よく似合ってるよ。`);
      await falcon.say_and_wait(
        `今ここに立ってるのは${falcon.name}だよ、トレーナーの${you.adult_sex_title}♪`,
      );
      await you.say_and_wait(
        `相変わらず、${falcon.name}とファル子をはっきり分けてるな。`,
        true,
      );
      await era.printAndWait(
        `${falcon.name}は一瞬止まり、メイドの正式なお辞儀をした。`,
      );
      await falcon.say_and_wait(
        `ご主人様、いつもお世話になっております。メイドの${falcon.name}はまだ新米ですが、全力でお仕えいたします。`,
      );
      await era.printAndWait(`おお、もうノリに入ったのか。`);
      await you.say_and_wait(
        `お疲れ、${falcon.name}。今日の日程表、持ってきてくれる？`,
      );
      await falcon.say_and_wait(`はい、ご主人様。`);
      await era.printAndWait(
        `棚から資料を取った${falcon.name}が、ファイルを${callname}の手に渡す。`,
      );
      await you.say_and_wait(`ありがとう。`);
      await falcon.say_and_wait(
        `えへへ⭐ ご主人様、もっと${falcon.name}を褒めて♪`,
      );
      await you.say_and_wait(`まずい、可愛すぎる`, true);
      await you.say_and_wait(`お疲れ。あとはソファで休んでて`);
      await falcon.say_and_wait(`かしこまりました♪`);
      await era.printAndWait(
        `わけのわからない高揚を押し殺し、無理に資料へ意識を戻す。`,
      );
      era.drawLine();
      await falcon.say_and_wait(`本当に、ファル子が横で手伝わなくていいの？`);
      await era.printAndWait(
        `いつの間にか寄ってきた小さな頭が、${callname}と目を合わせる。`,
      );
      await you.say_and_wait(`くそっ、まだそのときじゃない。`, true);
      await you.say_and_wait(`いや、ファル子はそこに座っててくれればいい。`);
      era.drawLine();
      await falcon.say_and_wait(`ご主人様、お仕事お疲れさまです♪`);
      await era.printAndWait(
        `淹れた紅茶を執務机へ運んだ${falcon.name}が、期待の目で${you.actual_name}を見る。`,
      );
      await you.say_and_wait(`ありがとう。`);
      await era.printAndWait(`一口含むと、意外な甘さが広がった。`);
      era.printButton(`美味しいよ`, 1);
      await era.input();
      await falcon.say_and_wait(`本当！ ファル子の努力、報われた♪`);
      await you.say_and_wait(`何か入れた？`);
      await falcon.say_and_wait(`レモンと氷砂糖と紅茶の葉♪`);
      await you.say_and_wait(`ファル子も座って、一緒に飲もう？`);
      await falcon.say_and_wait(`じーーーー`);
      await era.printAndWait(`膨らんだ小さな口が、余計に可愛い。`);
      await you.say_and_wait(
        `コホン！ ご主人として特例だ。メイド${falcon.name}に、一緒に紅茶を味わう権利をやろう。`,
      );
      await falcon.say_and_wait(`ご主人様のお寵愛、${falcon.name}の光栄です！`);
      await era.printAndWait(
        `座って一緒に味わう${falcon.name}は、うっとりした顔だ。`,
      );
      await you.say_and_wait(`次のコスプレ、なんだったっけ？`, true);
      await era.printAndWait(
        `少し後ろめたく何口か多く飲み、余光で${falcon.name}をこっそり窺う。`,
      );
      await era.printAndWait(
        `${you.actual_name}をじっと見つめる${falcon.name}は可愛い笑みを浮かべ、手前の紅茶はまだ湯気を立てている。`,
      );
      await era.printAndWait(`微妙な空気のまま、時間は少しずつ流れていく。`);
      era.drawLine();
      await you.say_and_wait(
        `ふぅ——午前の仕事は一段落だ。食堂へ行こう、${falcon.name}。`,
      );
      await falcon.say_and_wait(`はい、ご主人様！`);
      await era.printAndWait(
        `食堂へ向かう途中、${callname}たちへ視線がたくさん集まっている気がした。`,
      );
      await you.say_and_wait(`？`, true);
      await era.printAndWait(
        `不思議に思った${callname}は、つい隣の${falcon.name}を見る。`,
      );
      await falcon.say_and_wait(`⭐`);
      await era.printAndWait(
        `メイド服の${falcon.name}が、笑顔で${callname}を見ている。`,
      );
      await you.say_and_wait(`罰ゲームかよ。`, true);
      await era.printAndWait(
        `${falcon.sex}に着替えさせるか迷っているうちに、食堂へ入ってしまった。`,
      );
      await falcon.say_and_wait(`ご主人様は、何がお召し上がりですか？`);
      await you.say_and_wait(`昨日と同じで`);
      await era.printAndWait(`つい、口に出てしまった。`);
      await falcon.say_and_wait(`では${falcon.name}、今から用意いたします♪`);
      await era.printAndWait(
        `パタパタと窓口の列へ向かう${falcon.name}は、制服の群れの中で一段と目立った。`,
      );
      await you.say_and_wait(
        `世界よ、滅びてくれ。なんでこんなに見られてるんだ。`,
        true,
      );
      await you.say_and_wait(`今日の空も、今にも雨が降りそうだな。`, true);
      await era.printAndWait(
        `灰色の空が、なぜか${you.actual_name}を心地よくさせた。`,
      );
      await falcon.say_and_wait(
        `お待たせしました、トレーナーの${you.adult_sex_title}♪`,
      );
      await era.printAndWait(
        `二人分の昼を机に置き、${falcon.name}は期待の目で${callname}を見る。`,
      );
      await you.say_and_wait(`お疲れ、ファル子。`);
      await falcon.say_and_wait(`む——`);
      await era.printAndWait(
        `${falcon.name}の頭を優しく撫でると、不満はすぐにうっとりした顔へ変わる。`,
      );
      await falcon.say_and_wait(
        `それなら、ファル子が${callname}に食べさせてあげる！`,
      );
      await era.printAndWait(
        `${falcon.name}は箸を${callname}の皿へ伸ばし、肉を一切れ${callname}の口元へ運んだ。`,
      );
      await falcon.say_and_wait(`あ～～～`);
      await era.printAndWait(
        `箸が口の中に触れる違和感は、すぐにたっぷりの幸福に取って代わられた。`,
      );
      era.printButton(`次は僕が${falcon.name}に食べさせる番だ`, 1);
      await era.input();
      await falcon.say_and_wait(`あ～～～ん！`);
      await era.printAndWait(
        `余韻を味わう${falcon.name}は、目を細めてこの瞬間を楽しんでいる。`,
      );
      await falcon.say_and_wait(`今度は私の番！`);
      era.drawLine();
      await you.say_and_wait(`ごちそうさま！`);
      await falcon.say_and_wait(`ファル子も！`);
      await era.printAndWait(
        `互いに食べさせているあいだ、周囲の人は${callname}たちから一段距離を取っていた。`,
      );
      await you.say_and_wait(
        `${callname}たちは、こんな可愛い恋人が見つからなくて嫉妬してるんだ`,
        true,
      );
      await era.printAndWait(`${you.actual_name}は心の中でむくれていた。`);
      await you.say_and_wait(`このあと、なにしようか？`);
      await falcon.say_and_wait(
        `それより、トレーナーの${you.adult_sex_title}、口元のソースが残ってるよ！`,
      );
      await era.printAndWait(
        `そう言って${falcon.name}は素早く${callname}のそばへ寄り、舌で綺麗に拭った。`,
      );
      await falcon.say_and_wait(`ごちそうさま！`);
      await era.printAndWait(
        `下がろうとした${falcon.name}の腰を、腕が抱いた。`,
      );
      await you.say_and_wait(`ファル子の口元にも、ソースが残ってるよ？`);
      await falcon.say_and_wait(`え〜トレーナーの${you.adult_sex_title}❤`);
      await era.printAndWait(
        `${falcon.name}の口元の美味を、もう一度味わったあと。`,
      );
      await you.say_and_wait(`${falcon.name}。`);
      await falcon.say_and_wait(`${you.actual_name}❤`);
      await era.printAndWait(
        `食堂の真ん中で、傍若無人に口づけする恋人たちは、甘い時間を楽しんでいた。`,
      );
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '四葉は幸せ♪';
    /**
     * 望みどおりトレーナーと結婚したスマートファルコンが、幸せを感じている
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (falcon, you) => {
      era.printButton(`それにしても、ちょっと緊張するな。`, 1);
      await era.input();
      await falcon.say_and_wait(
        `大丈夫だよ。だってファル子も、今すごく緊張してるんだから♪`,
      );
      await era.printAndWait(`相思相愛の二人は、ついに結婚の日取りを決めた。`);
      era.printButton(
        `ウマツイで発表したときは、ファンに報復されるか心配だったよ。`,
        1,
      );
      await era.input();
      await era.printAndWait(
        `ウマツイで結婚を発表したあと、受け入れられないファンも少数いたが、大半は祝福を送ってくれた。`,
      );
      await falcon.say_and_wait(`大丈夫だよ、だって？`);
      era.printButton(
        `でもファル子がそばにいると、どんな困難も乗り越えられる安心感があるんだ。`,
        1,
      );
      await era.input();
      await you.say_and_wait(
        `だから、${falcon.name}に出会えたことが、人生でいちばん幸せな瞬間だよ。`,
      );
      await falcon.say_and_wait(
        `今さらそんな変なこと言うと、ファル子、困っちゃうよ？`,
      );
      await you.say_and_wait(`ごめん。でも、ずっとファル子のそばにいるよ。`);
      await falcon.say_and_wait(
        `それなら、これからもファル子をいちばん大事な場所に置いてね？`,
      );
      await you.say_and_wait(
        `うん。二人とも動けなくなる歳まで、臨終のときにも今日のことを思い出すよ。`,
      );
      await falcon.say_and_wait(`ファル子も。`);
      await era.printAndWait(
        `固く手を握った二人は、今日の誓いを永遠に覚えると誓った。`,
      );
      await you.say_and_wait(`ごめん、空気が重くなりすぎた。話題を変えよう。`);
      era.printButton(`ファル子はどんなウェディングドレスが好き？`, 1);
      await era.input();
      await falcon.say_and_wait(
        `トレーナーはどんなウェディングドレスが好きなの？`,
      );
      await era.printAndWait(`話題が投げ返された。`);
      await you.say_and_wait(`考えさせてくれ。`);
      era.printButton(`ハート型のネックライン、甘さと色気があって好き`, 1);
      era.printButton(`ビスチェは色っぽくて上品で、鎖骨も見えて好き`, 2);
      era.printButton(`やっぱり宮廷風に超ロングトレーンがいい`, 3);
      switch (await era.input()) {
        case 1:
          await falcon.say_and_wait(`ファル子、そういう大胆すぎる服はNGだよ？`);
          await era.printAndWait(`掌から伝わる圧力が、どんどん強くなる。`);
          await you.say_and_wait(`ご、ごめん、本当にごめん！`);

          break;
        case 2:
          await falcon.say_and_wait(`先に着てみよっか？`);
          await you.say_and_wait(`いいよ。`);
          await falcon.say_and_wait(`……やっぱり別のにしよ⭐`);
          await you.say_and_wait(`胸が小さくて着られないのか？`, true);
          await era.printAndWait(
            `失礼なことは口に出さず、励ます目でファル子を見た。`,
          );
          break;
        case 3:
          await falcon.say_and_wait(`んぅ、ファル子の雰囲気とは合わないかも。`);
      }
      era.printButton(`他の種類も見てみよう`, 1);
      await era.input();
      await falcon.say_and_wait(`うん、これどう？`);
      await era.printAndWait(
        `パフスリーブのウェディングドレスに着替えたファル子が、得意げに一回転した。`,
      );
      await you.say_and_wait(`天使みたいに可愛い。`);
      await falcon.say_and_wait(
        `あ、そういえばトレーナーの${you.adult_sex_title}、スーツは決まった？`,
      );
      await you.say_and_wait(`うん、もう決めたよ。`);
      await falcon.say_and_wait(`時間があるなら、近くをぶらつこ！`);
      await falcon.say_and_wait(
        `こうしてトレーナーの${you.adult_sex_title}と過ごす時間、すごく幸せだよ！`,
      );
      await you.say_and_wait(`そういえば、ファル子はこの先どうするつもり？`);
      await falcon.say_and_wait(
        `ファル子はこれから、ダートのアイドルとして先輩になって、レースで後輩の${falcon.uma_sex_title}たちを励ますよ！`,
      );
      await falcon.say_and_wait(
        `ファル子はこれから、ダートのアイドルとして先輩になって、レースで後輩の${falcon.uma_sex_title}たちを励ますよ！`,
      );
      await falcon.say_and_wait(
        `それで大変になるかもしれないけど、トレーナーの${you.adult_sex_title}がそばにいれば、どんな困難も乗り越えられる！`,
      );
      await falcon.say_and_wait(
        `それにファル子は、今日より明日のほうが楽しみなんだ！`,
      );
      await you.say_and_wait(`僕も！`);
      await era.printAndWait(`そのあと二人は近くの公園で、デートを楽しんだ。`);
      era.drawLine({ content: '黄昏どき' });
      await falcon.say_and_wait(`ファル子、そろそろ戻らないと！`);
      await era.printAndWait(
        `名残惜しそうに繋いだ手を離した${falcon.name}が、赤い頬であなたを見る。`,
      );
      await you.say_and_wait(`じゃあ、帰る前に。`);
      await era.printAndWait(`黄昏の中、二人は幸せに口づけを交わした。`);
      await falcon.say_and_wait(`じゃあ、これでファル子、本当に帰るよ！`);
      await you.say_and_wait(`明日はきっと、幸せの匂いがする日だ。`);
      await falcon.say_and_wait(`ファル子もそう思う。`);
      await era.printAndWait(`黄昏の中、二人は幸せに口づけを交わした。`);
      await falcon.say_and_wait(`ファル子、明日が待ちきれないよ⭐`);
      await falcon.say_and_wait(
        `トレーナーの${you.adult_sex_title}、また明日⭐`,
      );
      era.drawLine({ content: '翌日' });
      await era.printAndWait(
        `緊張しすぎて眠れないはずが、${you.actual_name}は普段より深く眠っていた。`,
      );
      await era.printAndWait(
        `ぼんやりとアラームで起こされ、急いで着替えて教会へ向かう。`,
      );
      await you.say_and_wait(`一時間前って、早すぎないか？`);
      await era.printAndWait(
        `むしろ時間ちょうどだった。司式者の案内で控え室へ向かう。`,
      );
      await era.printAndWait(
        `教会には、見届けに来た${falcon.uma_sex_title}たちが座っていた。`,
      );
      era.printButton(`ちょっと緊張するな`, 1);
      await era.input();
      await era.printAndWait(`大人しく席で化粧を待つ。`);
      await falcon.say_and_wait(`トレーナーの${you.adult_sex_title}⭐`);
      await you.say_and_wait(`え？ ファル子、なんでここに？`);
      await falcon.say_and_wait(
        `トレーナーの${you.adult_sex_title}の顔、もっと早く見たかったんだよ！`,
      );
      await falcon.say_and_wait(
        `トレーナーの${you.adult_sex_title}の優しい笑顔を思うと、ファル子の心臓、すごく速く打つんだ。`,
      );
      await falcon.say_and_wait(
        `それから急に、ぽっかり穴が開いたみたいになる。もしトレーナーの${you.adult_sex_title}がここにいなかったら。`,
      );
      await falcon.say_and_wait(`ファル子、どうすればいいの？`);
      await falcon.say_and_wait(
        `待って待ってるうちに、ファル子の心がどんどん不安になる。`,
      );
      await falcon.say_and_wait(
        `トレーナーの${you.adult_sex_title}の姿、早く見たい！ あの優しい腕に、早く抱かれたい！`,
      );
      await falcon.say_and_wait(`だからファル子、もう待てないよ！`);
      await era.printAndWait(
        `ますます興奮する${falcon.name}に、${you.actual_name}は優しく${falcon.sex}の小さな頭を撫でた。`,
      );
      await you.say_and_wait(`大丈夫、僕はここにいる。絶対に離れない。`);
      await era.printAndWait(
        `少し落ち着いた${falcon.name}は、ようやく安心し、${you.actual_name}を見た。`,
      );
      await era.printAndWait(
        `女性メイク担当「すみません、……を見かけませんでしたか」`,
      );
      await era.printAndWait(
        `女性メイク担当「${falcon.actual_name_with_title}！ 早く来てください、もうすぐ始まります！」`,
      );
      await you.say_and_wait(
        `この先も、ずっとそばにいるから。だから、緊張しなくていい。`,
      );
      await falcon.say_and_wait(
        `うん！ トレーナーの${you.adult_sex_title}、またあとで♪`,
      );
      await era.printAndWait(
        `ウェディングドレスの裾をそっと持ち上げ、${falcon.name}は自分の控え室へ戻った。`,
      );
      await you.say_and_wait(`${falcon.name}`, true);
      await era.printAndWait(
        `頭の中に、さっき走ってきた${falcon.name}の可愛い姿が浮かぶ。`,
      );
      era.drawLine();
      await era.printAndWait(`同心の燭を灯したあと、`);
      await era.printAndWait(
        `三女神の見届けのもと、${you.actual_name}と${falcon.name}は教会へ進んだ。`,
      );
      await era.printAndWait(
        `神父「三女神の御心のもと、私はこの神聖な婚姻を見届けます。」`,
      );
      await era.printAndWait(
        `神父「${falcon.uma_sex_title}は、三女神が異界の魂を導き、母たる祝福を与えた存在です。」`,
      );
      await era.printAndWait(
        `神父「三女神の祝福のもと、美しく強く、走ることを愛する${falcon.uma_sex_title}が生まれました。」`,
      );
      await era.printAndWait(
        `神父「三女神は、人と${falcon.uma_sex_title}が一生涯、一心に結ばれることを望まれます。」`,
      );
      await era.printAndWait(
        `神父「生まれ来る子も三女神の祝福を受けます。捨ててはならず、育て上げねばなりません。」`,
      );
      await era.printAndWait(
        `神父「では、${you.actual_name}、あなたは${falcon.name}を妻とし、友として、伴侶として共に生きますか？」`,
      );
      await era.printAndWait(
        `神父「あなたは${falcon.sex}を愛し、敬いますか。喜びも、苦しみも、勝利も、迷いの中でも、平等に分かち合うことを誓いますか。」`,
      );
      era.printButton(`誓います。`, 1);
      await era.input();
      era.printButton(`あなた${falcon.name}を選び、私の妻とします。`, 1);
      await era.input();
      era.printButton(
        `今日からあなたを抱き、守り、良い日も悪い日も、富めるときも貧しきときも、病めるときも健やかなるときも愛し、大切にし、死が二人を分かつまで。`,
        1,
      );
      await era.input();
      era.printButton(`三女神の御心に従い、あなたへの愛と忠誠を誓います。`, 1);
      await era.input();
      await era.printAndWait(
        `神父「では、${falcon.name}、あなたは${you.actual_name}を夫とし、友として、伴侶として共に生きますか？」`,
      );
      await era.printAndWait(
        `神父「あなたは彼を愛し、敬いますか。喜びも、苦しみも、勝利も、迷いの中でも、平等に分かち合うことを誓いますか。」`,
      );
      await falcon.say_and_wait(`誓います。`);
      await falcon.say_and_wait(
        `あなた${you.actual_name}を選び、私の夫とします。`,
      );
      await falcon.say_and_wait(
        `今日からあなたを抱き、守り、良い日も悪い日も、富めるときも貧しきときも、病めるときも健やかなるときも愛し、大切にし、死が二人を分かつまで。`,
      );
      await era.printAndWait(
        `神父「結婚指輪は永遠のしるし。尽きせぬ愛を持つ二つの心と魂が、永遠に結ばれることの象徴です。今、あなたの愛と、心と魂が永遠に結ばれんとする切なる願いを、贈り物として${falcon.sex}へ。」`,
      );
      await era.printAndWait(`神父「花嫁に、この結婚指輪をおはめください。」`);
      await era.printAndWait(
        `許しを得て、指輪をケースから慎重に取り出し、${falcon.name}の薬指へはめた。`,
      );
      era.printButton(`${falcon.name}に指輪をはめる`, 1);
      await era.input();
      await era.printAndWait(
        `左手の薬指をじっと見つめる${falcon.name}の目尻から、幸せの涙が溢れた。`,
      );
      await era.printAndWait(
        `未来への恐れと迷いはまだ残っていても、今の${falcon.name}は疑いなくいちばん幸せだった。`,
      );
      await era.printAndWait(
        `神父「同じく、あなたの愛と、心と魂が永遠に結ばれんとする切なる願いを、贈り物として彼へ。」`,
      );
      await era.printAndWait(`神父「花婿に、この結婚指輪をおはめください。」`);
      await era.printAndWait(
        `同じように、${falcon.name}はケースからもう一方の指輪を取り出し、あなたの指にはめた。`,
      );
      await era.printAndWait(`${you.actual_name}の思いは`);
      era.printButton(`${falcon.name}に出会えたことが、人生最大の光栄です`, 1);
      await era.input();
      await era.printAndWait(
        `神父「この時より、互いのために考え、自分だけを顧みてはなりません。共通の理想を持ち、喜びと悲しみを分かち合うのです。」`,
      );
      await era.printAndWait(
        `神父「各自が一本の燭を手に中央の燭を灯すとき、自分を表す燭を消してください。」`,
      );
      await era.printAndWait(
        `神父「中央の燭を灯すことは、二人の新しい生活の始まりであり、永遠に共に生き、分かたれぬ一体となることの証です。」`,
      );
      await era.printAndWait(
        `神父「この燭の輝きが、お二人の結合を証しますように。」`,
      );
      await era.printAndWait(
        `神父「この世のいかなることでも、お二人を分かつことはできません。おめでとうございます。」`,
      );
      await era.printAndWait(`二人は祝福の中で口づけし、喝采を浴びた。`);
      await era.printAndWait(
        `神父「三女神がお二人を祝福し、その家庭が愛の鑑となりますように。」`,
      );
      await era.printAndWait(
        `花束を抱いた${falcon.name}は、いちばん幸せな笑顔を見せた。`,
      );
    };
    f.title = title;
    return f;
  })(),
};
