/**
 * @file エイシンフラッシュ - 恋慕
 * @author 爱放箭的袁本初
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  74: (() => {
    const title = '桑間の約';
    /**
     * @param {CharaTalk} flash エイシンフラッシュ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
     * @param {boolean} is_first 初回か
     */
    const f = async (flash, you, callname, is_first) => {
      const ret = [];
      if (is_first) {
        await era.printAndWait(
          `${you.name} とエイシンフラッシュの力を合わせ、天皇賞（秋）で、${flash.sex}は望んだ夢を果たした。`,
        );
        await era.printAndWait(
          'おかげで、詰めていたレース日程にも、いくらか余裕が生まれた。',
        );
        await flash.say_and_wait(
          `${callname}、今週の日曜日、ご予定はございますか？`,
        );
        await era.printAndWait(
          `その休みの合間に、エイシンフラッシュは突然 ${you.name} を誘った。`,
        );
        await flash.say_and_wait(
          '先日外出した折、係の方からイベントの入場券をいただきました。二枚ありますので、ご一緒できればと思っています。',
        );
      } else {
        await flash.say_and_wait(
          `${callname}、今週の日曜日、ご予定はございますか？`,
        );
        await era.printAndWait(
          `エイシンフラッシュは、再び ${you.name} を誘った。`,
        );
        await flash.say_and_wait(
          '以前いただいた入場券、今週ご一緒に行けますか？',
        );
      }
      era.printButton('「もちろん。」', 1);
      era.printButton('「すまない。その日は別件がある。」', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait(
          `${you.name} は、エイシンフラッシュの言葉の端に、かすかな期待を聞いた。`,
        );
        await era.printAndWait('それなら、断る理由はない。');
        await era.printAndWait(`だから ${you.name} は、快く引き受けた。`);
        await flash.say_and_wait('はい！');
        await era.printAndWait(
          `${you.name} の返事を聞き、${flash.sex}の顔に鮮やかな笑みが広がった。`,
        );
        await flash.say_and_wait('では、日曜日が楽しみです。ふふっ');
        await era.printAndWait(
          `ただ、気のせいかもしれない。${you.name} には、今のエイシンフラッシュの揺れが、普段より少し大きいように思えた。`,
        );
        era.drawLine({ content: '日曜日' });
        await era.printAndWait(
          `${you.name} は、エイシンフラッシュと約束した待ち合わせへ向かった。`,
        );
        await flash.say_and_wait(`こんにちは、${callname}。`);
        era.printButton('「こんにちは、フラッシュ。」', 1);
        await era.input();
        await era.printAndWait(
          `先に待っていたエイシンフラッシュは、微笑んで ${you.name} に挨拶した。`,
        );
        era.printButton('「気を入れて着飾ってきたな。」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name} は、今日の${flash.sex}が普段と違うことに、すぐに気づいた。`,
        );
        await era.printAndWait('唇に口紅、眉に薄い化粧。');
        await era.printAndWait(
          `${you.name} の見慣れた素顔ではない。だが作り物めいた印象はなく、もともと整った顔立ちに、さらに魅力が乗っている。`,
        );
        await era.printAndWait('錦上に花を添える、とはこういうことだろう。');
        era.printButton('「きれいだ。」', 1);
        await era.input();
        await era.printAndWait(`${you.name} は、惜しまず称えた。`);
        await flash.say_and_wait('ありがとうございます。');
        await era.printAndWait(
          `自分の細工に気づかれたと見て、エイシンフラッシュは口元を隠して小さく笑った。`,
        );
        await flash.say_and_wait('予定の時刻が近いです。では、参りましょう。');
        await era.printAndWait(
          `だが${flash.sex}は、なぜわざわざそうしたのかは説明せず、${you.name} を深く見てから手を取り、遊園地へ向かうよう促した。`,
        );
        era.drawLine();
        await era.printAndWait(
          `明らかに、エイシンフラッシュは今日の外出のために、極めて詳しく、正確で、完璧な計画を用意していた。`,
        );
        await era.printAndWait(
          '人通りから待ち時間を見積もって各アトラクションの順を決め、起きうる急変への予備案まで組んである。',
        );
        await era.printAndWait(
          `${flash.sex}はほとんど漏れなく考えており、その成果が ${you.name} に楽しい時間をもたらした。`,
        );
        await era.printAndWait(
          `メリーゴーラウンド、ジェットコースター、フリーフォール……${flash.sex}と乗ったどれもが、${you.name} の記憶に残った。`,
        );
        await flash.say_and_wait('最後の項目、観覧車です。');
        await era.printAndWait('気づくと、時刻は黄昏だった。');
        await era.printAndWait(
          '夕陽が沈み、空の霞が薄れ、落ち日の橙が、沈んだ薄紅へ変わっていく。',
        );
        await era.printAndWait(
          `${you.name} とエイシンフラッシュは、園内でいちばん高い目印——ゆらゆら観覧車の前に立った。`,
        );
        era.printButton('「壮観だ。」', 1);
        await era.input();
        await era.printAndWait(
          `冷たい鋼鉄で組まれた巨大な機械を前に、${you.name} はそう評した。`,
        );
        await flash.say_and_wait(
          'ええ。ゴンドラに座り、いちばん高いところで見下ろせば、忘れがたい体験になるでしょう。',
        );
        await era.printAndWait(
          `言い終えると、エイシンフラッシュは ${you.name} を深く見た。`,
        );
        era.printButton('「？」', 1);
        await era.input();
        await era.printAndWait(`${you.name} は、わずかに戸惑った。`);
        await era.printAndWait(
          `直感が教える。今日、${flash.sex}がそうするのは、一度や二度ではない。`,
        );
        era.printButton('「フラッシュ？」', 1);
        await era.input();
        await era.printAndWait(
          `それより、その視線に想いが乗っているのはわかる。だが ${you.name} は、その想いの中身までは、もう一歩踏み込めない。`,
        );
        await era.printAndWait(
          `だから ${you.name} は${flash.sex}に尋ね、理由を知りたかった。`,
        );
        await flash.say_and_wait(
          `次の組で、私たちの番のようです、${callname}。`,
        );
        await era.printAndWait(
          `だが${flash.sex}は何も言わず、首を振って、無言の微笑みを向けただけだった。`,
        );
        await flash.say_and_wait('準備をしましょう。');
        era.printButton('「……ああ。」', 1);
        await era.input();
        era.drawLine();
        await era.printAndWait('観覧車からの景色は、きれいだった。');
        await era.printAndWait('空は晴れ、視界は開けている。');
        await era.printAndWait(
          `${you.name} はゴンドラの中、ガラス越しに下を見た。地上の賑わいが、高度とともに小さくなっていく。`,
        );
        await era.printAndWait('ふと、衆生を見下ろすような気持ちになった。');
        await flash.say_and_wait(
          '……伝説では、観覧車が一周するたび、世界のどこかで恋人たちが口づけをするそうです。',
        );
        await era.printAndWait(
          'ゴンドラがいよいよ頂点へ届くそのとき、乗り込みからなぜか黙っていたエイシンフラッシュが、突然口を開いた。',
        );
        era.printButton('「なに？」', 1);
        await era.input();
        await era.printAndWait(
          `この場で急にそんな話をするのは、少し鋭すぎないか。${you.name} は戸惑いながら視線を窓から戻し、目の前の人を見た。`,
        );
        era.printButton('「！」', 1);
        await era.input();
        await era.printAndWait(
          `そして ${you.name} は驚いた。今のエイシンフラッシュは、熱を帯びた目で ${you.name} を見ている。`,
        );
        await era.printAndWait(
          `その想いの種類は、先ほど察した視線と同じだ。だが濃度は、比べものにならない。`,
        );
        await era.printAndWait(
          `だからこそ ${you.name} は、${flash.sex}の瞳で揺れ続けていた光の意味を、ようやく読めた。`,
        );
        await era.printAndWait('それは……愛だ。');
        era.printButton('「フラッシュ……」', 1);
        await era.input();
        await era.printAndWait(
          `自然と ${you.name} は、今日${flash.sex}が誘い出した本当の目的も見抜いた。`,
        );
        await flash.say_and_wait('しーっ。');
        await era.printAndWait(
          `心が通じたのだろう。${you.name} が腑に落ちたその瞬間、エイシンフラッシュは指を一本、唇に当て、${you.name} の言葉を押し戻した。`,
        );
        await flash.say_and_wait(
          '……実は、シニア級のあの天皇賞（秋）が終わってから、あなたとの関係をどう定義すべきか、ずっと考えていました。',
        );
        await era.printAndWait(
          `${flash.sex}自身はしばらく黙り、想いを整えてから続けた。`,
        );
        await flash.say_and_wait(
          '一方では、おっしゃるとおり、最初にあなたを探したのは夢を叶えるためでした。あなたは果たしてくださった。だから私たちは、ここで別れてもよいはずです。',
        );
        await flash.say_and_wait(
          'ですがもう一方で、本当にあなたと別れると悟ったとき、私は迷いました。あるいは……',
        );
        await era.printAndWait(
          `エイシンフラッシュは手を胸に当て、優しい微笑みで ${you.name} を見た。`,
        );
        await flash.say_and_wait('名残惜しさ、です。');
        era.printButton('「名残惜しさ……か……」', 1);
        await era.input();
        await era.printAndWait(
          `目の前の人がここまで本音を出す言葉に、${you.name} はわずかに間を置いた。`,
        );
        await era.printAndWait('（君が走り続けるところを、見ていたい。）');
        await era.printAndWait(
          `${you.name} は、天皇賞（秋）のあとで口にした言葉を思い出した。`,
        );
        await era.printAndWait(
          `互いに対する想いにおいて、${you.name} と${flash.sex}は、同じなのかもしれない。`,
        );
        await flash.say_and_wait(
          '最初、この名残惜しさの出所がわかりませんでした。突き詰めれば、私たちは生徒と先生の関係にすぎないのですから。',
        );
        await era.printAndWait(
          `${flash.sex}はそう言い、首を振り、小さく息を吐いた。`,
        );
        await flash.say_and_wait(
          '出会ってからの一つ一つを振り返って、ようやくわかりました。なぜ胸に、こんな想いが生まれたのか。',
        );
        await flash.say_and_wait(`『愛』だからです、${callname}。`);
        era.printButton('「！！！」', 1);
        await era.input();
        await era.printAndWait('簡にして直な言葉が、これほど胸に届く。');
        await flash.say_and_wait(
          'あなたを愛しています。だからこそ、離れたくない。ずっとそばにいたい。',
        );
        era.printButton('「……それが、僕に言いたかったことか。」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name} は深く息を吸い、${flash.sex}の告白で激しく揺れた胸を、強引に鎮めた。`,
        );
        await era.printAndWait(`しばらくして、${you.name} は静かに言った。`);
        await flash.say_and_wait('はい。');
        await era.printAndWait(`${flash.sex}はうなずき、坦々と認めた。`);
        await flash.say_and_wait(
          '覚えていらっしゃいますか。クラシック級の夏合宿が始まった日、あなたは私に、どんな選択をしても一緒に背負う、とおっしゃいました。',
        );
        await era.printAndWait(
          `続いて ${you.name} は、${flash.sex}が前方——つまり ${you.name} へ、ゆっくり左手を伸ばすのを見た。`,
        );
        await flash.say_and_wait('私も、同じです。');
        await era.printAndWait(`${flash.sex}は一字一句、確かめた。`);
        await flash.say_and_wait(
          'これから先の、一年一日、一分一秒も、あなたのそばにいたい。',
        );
        await flash.say_and_wait('この先を、あなたと一緒に背負いたい。');
        await era.printAndWait(
          `エイシンフラッシュは ${you.name} を見つめた。その目は、これまででいちばん硬い。`,
        );
        era.printButton('「………」', 1);
        await era.input();
        await era.printAndWait(
          `${you.name} も、${flash.sex}が自分に抱く深い想いを、完全に理解した。`,
        );
        await era.printAndWait(
          `成否にかかわらず、${you.name} は${flash.sex}に正確な返事を返さねばならない。`,
        );
        await era.printAndWait('慎重に決めたあとでなければ、出せない返事を。');
        era.printButton(`${flash.sex}の手を握る。（関係を進める）`, 1);
        era.printButton(`${flash.sex}の目を避ける。（まだ進めない）`, 2);
        ret.push(await era.input());
        if (ret.at(-1) === 1) {
          await era.printAndWait(`${you.name} は${flash.sex}を愛しているか。`);
          await era.printAndWait('それは、面白い問いだ。');
          await era.printAndWait(
            `最初は、エイシンフラッシュの言うとおり、${you.name} も${flash.sex}との関係を生徒と先生としか見ていなかったのかもしれない。`,
          );
          await era.printAndWait(
            'だが今は、何百日何千日と過ごすうち、好感は苗のように根を張り、大木になり、枠を破った。',
          );
          await era.printAndWait(
            `${you.name} は、${flash.sex}ともっと対等な関係が必要だと感じ始めていた。`,
          );
          await era.printAndWait(
            `そうだ。${you.name} は${flash.sex}を愛している。疑いようがない。`,
          );
          await flash.say_and_wait('！！');
          await era.printAndWait(
            `冷たいゴンドラの中、初恋の${flash.teen_sex_title}は目を見開いた。`,
          );
          await era.printAndWait(
            '温かい感触が前方から届き、宙に浮いていた手に、安定した支えができた。',
          );
          await flash.say_and_wait('そう、なのですね。');
          await era.printAndWait(
            '曖昧な空気が部屋に広がり、エイシンフラッシュの顔に鮮やかな紅が差した。',
          );
          await flash.say_and_wait('これが……あなたのお返事、ですか？');
          era.printButton('「愛してる、エイシンフラッシュ。」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name} は${flash.sex}を見つめ、声を沈めた。想いを、そのまま${flash.sex}の胸へ流し込みたいように。`,
          );
          await flash.say_and_wait('はい！！');
          await era.printAndWait(
            `${flash.sex}は ${you.name} の正確な返事を得て、強くうなずき、これまででいちばん甘い笑みを浮かべた。`,
          );
          await flash.say_and_wait('では、エイシンフラッシュです。これから……');
          await era.printAndWait(
            '言いかけて、エイシンフラッシュの言葉はわずかに止まった。永遠の誓いを立てるように。',
          );
          await flash.say_and_wait('よろしくお願いいたします。');
        } else {
          await era.printAndWait(`${you.name} は${flash.sex}を愛しているか。`);
          await era.printAndWait('それは、面白い問いだ。');
          await era.printAndWait(
            `よく考えれば、最初から今まで、${you.name} は${flash.sex}との関係を生徒と先生としか見てこなかった。`,
          );
          await era.printAndWait(
            `確かに ${you.name} は${flash.sex}に好感を抱き、その好感は何百日何千日のあいだに増え続けた。`,
          );
          await era.printAndWait(
            `だが、それは ${you.name} が${flash.sex}を愛している——『恋愛』している——ことにはならない。`,
          );
          await era.printAndWait('愛の形は、一つに限らない。そうだろう。');
          await era.printAndWait('友情も愛、親子の情も愛、師弟の情も愛だ。');
          await era.printAndWait(
            `${you.name} は、エイシンフラッシュへの想いが、その三つには跡を残していると思う。`,
          );
          await era.printAndWait('ただ、もっと対等な恋愛だけは、違う。');
          await flash.say_and_wait('………');
          await era.printAndWait(
            `冷たいゴンドラの中、初恋の${flash.teen_sex_title}は、ゆっくり眉を伏せた。`,
          );
          await era.printAndWait(
            '交わるはずだった視線が、この瞬間すれ違い、永遠に交わらない平行線のようになった。',
          );
          await flash.say_and_wait('そう、なのですね……');
          await era.printAndWait(
            `${flash.sex}は宙に浮いていた手をゆっくり引き、力なく膝の上へ落とした。`,
          );
          await flash.say_and_wait('これが……あなたのお返事、ですか？');
          era.printButton('「……すまない。」', 1);
          await era.input();
          await era.printAndWait(`${you.name} は口を開き、何か言おうとした。`);
          await era.printAndWait(
            `だが結局は小さく息を吐き、${flash.sex}の真心が報われなかったことへ詫びた。`,
          );
          await flash.say_and_wait('いいえ、謝らないでください。');
          await era.printAndWait(
            `エイシンフラッシュは首を振った。落寂が目に見えて顔に浮かんでいても、${flash.sex}は口角を上げ、${you.name} に柔らかい微笑みを向けた。`,
          );
          await flash.say_and_wait(
            '……あなたに誤りはありません。誤っていたのは私のほうです。双方の関係を正しく見ないまま、急に動いて、ご迷惑をおかけしました。',
          );
          await era.printAndWait(
            `そうは言っても、${you.name} には聞こえた。このときのエイシンフラッシュの声は、明らかに震えている。`,
          );
          era.printButton('「フラッシュ……」', 1);
          await era.input();
          await era.printAndWait(
            `それを見て ${you.name} は手を伸ばし、${flash.sex}を慰めようとした。`,
          );
          await flash.say_and_wait('………');
          await era.printAndWait(
            `だが相手は ${you.name} の手を静かに押し下げ、窓の外へ顔を向けた。`,
          );
          era.printButton('「………」', 1);
          await era.input();
          await era.printAndWait(
            '気まずい空気が部屋に広がり、場面は息苦しい沈黙に落ちた。',
          );
          await era.printAndWait(
            `こうして観覧車の後半、機械の唸り以外、${you.name} は何の声も聞かなかった。`,
          );
          await flash.say_and_wait('……まあ、とにかく。');
          era.printButton('「！」', 1);
          await era.input();
          await era.printAndWait(
            '終点が近づいて、ようやくその重さはほどけた。',
          );
          await flash.say_and_wait(
            'あなたと出会ったことを、後悔してはいません。今は生徒か友人としてそばにいることしかできなくても、私はそれでも満ち足りています。',
          );
          await era.printAndWait(
            `短い静けさのあいだに気持ちを整えたらしい。エイシンフラッシュは振り返って ${you.name} を見、顔に再びいつもの穏やかさが戻った。`,
          );
          era.printButton('「僕も、君と知り合えて嬉しい。」', 1);
          await era.input();
          await era.printAndWait(`${you.name} はうなずいて応えた。`);
          await era.printAndWait('「ピッ。」');
          await era.printAndWait(
            `ゴンドラ着地の合図が ${you.name} の耳に入り、次の瞬間、ロックされた扉が自動で開いた。`,
          );
          await flash.say_and_wait('ふふっ。');
          await era.printAndWait(
            'エイシンフラッシュは立ち上がり、甘い微笑みを見せた。',
          );
          await flash.say_and_wait([
            'では、帰りましょう、トレーナー',
            you.adult_sex_title,
            '。',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name} は、エイシンフラッシュの言葉の端に、かすかな期待を聞いた。`,
        );
        await era.printAndWait(
          `だが残念ながら、${flash.sex}との外出より、その日の ${you.name} には先に片付ける用事があった。`,
        );
        await era.printAndWait(`だから ${you.name} は、断った。`);
        await flash.say_and_wait('………');
        await era.printAndWait(
          `この展開は予想外だったらしい。${you.name} の言葉を聞き、エイシンフラッシュは一瞬動きを止めた。`,
        );
        await flash.say_and_wait('……わかりました。');
        await era.printAndWait(
          `我に返った${flash.sex}は首を振り、${you.name} に微笑みを向けた。`,
        );
        await flash.say_and_wait('では、次の機会を待ちましょう。');
        await era.printAndWait(
          `そうは言っても、${you.name} には${flash.sex}のその表情に、一筋の落寂が見えた気がした……`,
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
