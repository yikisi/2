/**
 * @file ハルウララ - 募集
 * @author 99
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} urara
   * @param {CharaTalk} inner_urara
   * @param {CharaTalk} you
   * @param {string} callname
   * @param {number} rec_mark
   */
  async recruit(urara, inner_urara, you, callname, rec_mark) {
    const ret = [];
    if (era.get('cflag:52:育成次数') > 0) {
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'また来たのね。同じ話をもう一度聞きたい？ それとも、まだ終わっていない心残り？',
      );
      await inner_urara.say_as_unknown_and_wait(
        'あなたが選ぶなら、最初からやり直しましょう。新しい物語で、答えに辿り着けることを願って。',
      );
      await inner_urara.say_as_unknown_and_wait(
        `いつもの通り、これはあまりにも小さくて、これ以上小さくはなれない小${urara.uma_sex_title}の物語——`,
      );
    } else if (rec_mark) {
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '今度のあなたは、覚悟できている？ 今度こそ、物語を最後まで連れていくつもりでいてほしい……期待しているわ。',
      );
      await inner_urara.say_as_unknown_and_wait(
        `では、これはあまりにも小さくて、これ以上小さくはなれない小${urara.uma_sex_title}の物語——`,
      );
    } else {
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'ねえ、聞こえる？ 聞いているなら、そろそろこの話を始めましょう。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ありふれた話かもしれないし、少し長いかもしれない。それでも選んだ以上、最後まで聞いて。',
      );
      await inner_urara.say_as_unknown_and_wait(
        `これはあまりにも小さくて、これ以上小さくはなれない小${urara.uma_sex_title}の物語——`,
      );
    }
    era.drawLine();
    await era.printAndWait(
      `トレーニング場の隅で、刺さるような日差しを避けて座っていた ${you.name} は、ふらりとめまいを覚えた。`,
    );
    await era.printAndWait(
      `ここ数日も同じ感覚はあったが、今日は一段とはっきりしている。`,
    );
    await era.printAndWait(
      `理由はまだわからない。ただ ${you.name} は、胸の奥から何かが急速にこぼれ落ちていくのを感じていた……`,
    );
    await era.printAndWait(`……`);
    await era.printAndWait(
      `エリートが集う中央トレセンで、いちばん不足しないのは人材と天才だ。`,
    );
    await era.printAndWait(
      `新人であれ、すでに伝説になった者であれ、必ずもっと優れた誰かが、もっと高い頂に立っている。${you.name} は、そこまであと一歩のまま届かない気がしていた。`,
    );
    await era.printAndWait(
      `これまでの積み重ねを積み上げ、全力で自分を高く持ち上げても、『一握り』と呼ばれる場所は、まだ遠い——`,
    );
    await era.printAndWait(
      `先人の経験は、最後の一歩がこれほど遠いとは教えてくれなかった。${you.name} は、少し挫けていた。`,
    );
    await era.printAndWait(
      `才能に恵まれ、天才とまで呼ばれる同業者の前で、${you.name} が頼れるのは、もう『踏みとどまること』だけだった。`,
    );
    await era.printAndWait(
      `自分を納得させようとはした。それでも、完全に心を平らにはできなかった。`,
    );
    await era.printAndWait(
      `${urara.uma_sex_title}への理解が見劣りすることを、簡単に受け入れてしまってはトレーナーは務まらない。${
        you.name
      } には、まだ先へ進みたい気持ちが残っていた。`,
    );
    await era.printAndWait(
      `追い求め、前へ進みたい。できることといえば、いまの圧力をとりあえず受け止めることだけ。`,
    );
    await era.printAndWait(
      `ただ今の ${you.name} は思い出せていない。無理に気を張るより、重い荷を一度下ろして、ほんの小さな『希望』を自分に注ぐことの方が必要だったことを。`,
    );
    await era.printAndWait(
      `もっとも、空は人の願い通りには晴れない。この段差の越え方を考える前に、もっと大きな問題が降りてきた。`,
    );
    await era.printAndWait(
      `プレッシャーに追われて止まれなくなった ${you.name} は、ここ最近、自分を残業に追い込み続けた。その果てに、精神がここで限界を迎えた。`,
    );
    await era.printAndWait(
      `今にも倒れそうな ${you.name} は、糸の切れた人形のように横へ傾く。地面に着く寸前、桜色の一筋が、かすむ視界へ割り込んできた。`,
    );
    await era.printAndWait(
      `そして ${
        you.name
      } の傍らに広がったのは、無邪気な${urara.teen_sex_title}からこぼれる香りだった。`,
    );
    await era.printAndWait(
      `桜の香り、だろうか？ 冗談じゃない。水のように淡い桜が、こんなに安心できる匂いを放つはずがない。`,
    );
    await era.printAndWait(
      `では……脳が過負荷になった幻覚？ どうやら、本当に疲れ果てていたらしい……`,
    );
    await era.printAndWait(
      `離れていく意識を引き留められず、${you.name} は途切れる思考の中で、ゆっくりと目を閉じた。`,
    );
    await era.printAndWait(
      `意識が消える直前、${you.name} は確かに感じた。誰かが倒れた体に寄り添い、優しく抱きとめてくれているのを。`,
    );
    await era.printAndWait(
      `触れた瞬間、${urara.teen_sex_title}の柔らかな香りが ${
        you.name
      } の心身を包んだ。体操服に残る、運動のあとの体温まで混ざっているようだった。`,
    );
    await urara.say_as_unknown_and_wait(
      `このトレーナーさん？ 大丈夫？ ちょっと待ってて！ すぐ保健室に連れてくよ！`,
    );
    await era.printAndWait(
      `言葉にできない安心の中で体が限界を迎え、${
        you.name
      } は助けに来てくれた${urara.uma_sex_title}への感謝を抱いたまま、意識を手放した。`,
    );

    era.drawLine();
    inner_urara.say_as_unknown(
      `意識の狭間で、${callname}はこう思った（言った）——`,
    );
    era.printButton(`「幻覚じゃなかったんだ……」`, 1);
    era.printButton(`「……ごめん……」`, 2);
    era.printButton(`「て、天使……？」`, 3);
    ret.push((ret['love'] = await era.input()));
    await inner_urara.say_as_unknown_and_wait(
      `ボーイ・ミーツ・ガール、かしら？ ふふっ、立場の差を考えれば、どちらにせよそれはないでしょうね。`,
    );
    await inner_urara.say_as_unknown_and_wait(
      `でも、こういう出会い、意外と悪くない？`,
    );

    era.drawLine();
    await era.printAndWait(
      `馴染みのある薬品の匂いが鼻に入り、飛び去っていた意識は、トレセンの保健室に横たわる体を探し当てた。`,
    );
    await era.printAndWait(
      `ゆっくり目を覚ました ${you.name} は、朦朧としたまま傍らの柔らかさを味わっていた。硬いシーツのことではない。隣で眠っている少女の、その感触だ。`,
    );
    await era.printAndWait(
      `目を開けなくても、${
        you.name
      } は傍らの甘い気配でだいたい察しがついた。いま枕を並べているのは、倒れた ${
        you.name
      } を保健室まで運んでくれた小${urara.uma_sex_title}だ。`,
    );
    era.println();

    await inner_urara.say_as_unknown_and_wait(
      `さて、目を覚ました${callname}はどうする——`,
    );
    era.printButton(
      `起きて、礼を言う。${
        you.name
      } は目を開け、まず${urara.teen_sex_title}の様子を見ることにした。`,
      1,
    );
    era.printButton(
      `まだ、疲れてる。${you.name} は目を閉じたまま、得がたい温柔郷に浸ることにした。`,
      2,
      { disabled: urara.sex_code === 1 },
    );

    if ((await era.input()) === 2) {
      await era.printAndWait(
        `こんなに安心できたのは、もうずいぶん久しぶりだった。`,
      );
      await era.printAndWait(
        `目を閉じたまま、${you.name} はその温もりの源へさらに身を寄せ、ほとんど${urara.sex}を抱き寄せそうになる。`,
      );
      await era.printAndWait(
        `眠りの中の、柔らかくて健康な肉感。素朴な花のような体の匂い。どちらも ${you.name} の心をほどいていく。`,
      );
      await era.printAndWait(
        `${urara.teen_sex_title}の吐息がすぐ近くで、無邪気に ${
          you.name
        } の首筋をくすぐる。距離感を失った接触に、${you.name} の意識は沈んでいった。`,
      );
      await era.printAndWait(
        `助けてくれた生徒にこんなことをするのは、とてもよろしくない。大人として、下品すぎる——${you.name} にもそれはわかっている。`,
      );
      await era.printAndWait(
        `それでも今の ${you.name} の頭は、心の飢えに従い、体へ『もう一歩』と命じ続けていた。`,
      );
      await era.printAndWait(
        `恍惚の中、${you.name} の指が小${urara.uma_sex_title}の体へ這い上がる。`,
      );
      await era.printAndWait(
        `指先から掌へ。${you.name} は触覚で、思いのほか小さな輪郭と、つぼみのような曲線を測っていく。`,
      );
      await era.printAndWait(
        `片手は${urara.teen_sex_title}の胸の丘を撫で、柔らかい頬と唇をかすめ、さらさらの髪を伝う。`,
      );
      await era.printAndWait(
        `指は耳カバーの内側を探り、小さな耳の柔らかさを味わう。`,
      );
      await era.printAndWait(
        `もう一方の手は柔らかい後頸と背筋を下り、毛に隠れた${urara.teen_sex_title}の尾の根元へ滑り込む。`,
      );
      await era.printAndWait(
        `敏感な根元だけでなく、指をひと曲げすれば、ブルマの穴からさらに奥へも届く。`,
      );
      await era.printAndWait(
        `衣を一枚めくれば、もっと深い秘密の『花園』にまで……`,
      );
      await era.printAndWait(
        `だが ${
          you.name
        } がさらに深く入ろうとしたとき、眠りの中の小${urara.uma_sex_title}が耳と尻尾を震わせ始めた。`,
      );
      await era.printAndWait(
        `体が小さく震え、喉から可愛い吐息が漏れる。夢から覚める前触れだ。`,
      );
      await era.printAndWait(
        `もう欲張りすぎてはいけない。半睡の ${you.name} はようやく理性を取り戻し、目を開けるべきだと気づいた——`,
      );
      era.printButton('目を開ける', 1);
      await era.input();
    }

    await era.printAndWait(
      `目を開けた瞬間、桜色が一気に視界を埋めた。咲き開いた桜の瞳が ${you.name} と重なり、無邪気だけれど何もわかっていないわけではない、小さな光を湛えている。`,
    );
    await era.printAndWait(
      `その澄んだ瞳は、先入観も疑いもなく ${you.name} を見つめ、それから悪意のない笑顔を向けてきた。`,
    );
    await era.printAndWait(
      `桜色の馬尾と赤いリボンを揺らし、子供のように無邪気な小${urara.uma_sex_title}が、${
        you.name
      } より先に保健室のベッドから上体を起こす。`,
    );
    await era.printAndWait(
      `肌に沿う体操服の下に、幼いのに意外と整った体つきが透ける。正座した太腿と尻は、幼い印象に似合わないほど豊かに丸い。`,
    );
    await era.printAndWait(
      `溢れんばかりの肉感が三角の下着を満たし、密着した布が腰と尻に生々しい食い込みを残している。`,
    );
    await era.printAndWait(
      `それに、距離の測れないドールのような顔。まだ未熟でも、${urara.sex}はもう自分だけの『女』の魅力を見せ始めていた。`,
    );
    await era.printAndWait(
      `不可抗力を言い訳にしても、その愛らしい顔の傷ひとつない笑顔は、先ほど${urara.sex}と枕を並べて甘えた ${you.name} に、逃れられない罪悪感を残した。`,
    );
    await urara.say_as_unknown_and_wait(
      'トレーナーだよね？ お体はどう？ トレーナーって大変だね！ でも無理しなくていいんだよ！',
    );
    await era.printAndWait(
      `可愛い笑顔と、隔たりのない気遣いを乗せて、桜色の小さな${urara.uma_sex_title}は無防備に ${
        you.name
      } へ寄りかかってきた。`,
    );
    await era.printAndWait(
      `ここで ${you.name} はようやく気づく。助けてくれた${urara.uma_sex_title}の名前を、まだ知らない。`,
    );
    era.println();

    era.printButton(`「ありがとう。君は……？」`, 1);
    await era.input();

    await urara.say_and_wait(
      `ウララだよ！ トレーナーが倒れそうになってて、みんなも近くにいなかったから、保健室まで運んだんだ！`,
    );
    await urara.say_and_wait(
      `待ってるあいだに、隣でうっかり寝ちゃったんだ。えへへ～`,
    );
    await era.printAndWait(
      `確かに、優しく世話をしてもらったらしい。ますます${urara.sex}に申し訳なくなった。`,
    );
    await urara.say_and_wait(
      `あ、そうだ！ トレーナーさん！ 次、ウララの選抜レース、見に来てくれる？`,
    );
    era.println();

    era.printButton(`「選抜レース？ 君の？」`, 1);
    await era.input();

    await era.printAndWait(
      `${you.name} は少し戸惑いながらウララを見た。覚悟が足りないとか、鍛錬を怠っているとか、そういう疑いではない。ただ……`,
    );
    await era.printAndWait(
      `一目でわかる。ハルウララという${urara.uma_sex_title}には、きらきらした資質がある。それでも今の${
        urara.sex
      }は、あまり速く走れそうに見えなかった。`,
    );
    await era.printAndWait(`少なくとも今なら、結果は空振りに終わるだろう。`);
    await urara.say_and_wait(
      `うん！ 1着、取るよ！ だって、そう感じたから！ だから……`,
    );
    await era.printAndWait(
      `小さな${urara.uma_sex_title}は興奮して何か言いかけ、ふと壁の時計を目にする。`,
    );
    await urara.say_and_wait(
      `あっ！ もうこんな時間！ トレーナーも体に気をつけてね！ じゃあ、また！`,
    );
    await era.printAndWait(
      `急に時間に気づいたせいで、ウララとの会話は、なんだか中途半端に途切れてしまった。`,
    );
    await era.printAndWait(
      `感覚で決まる話じゃない——${you.name} はそう言いたかった。だが、${urara.sex}の走りを見てみたいという気持ちが胸に芽生え、口は開かなかった。`,
    );
    await era.printAndWait(
      `次は、本当に見に行った方がいいのかもしれない。跳ねるように保健室を出ていくウララを見送り、${you.name} は再び目を閉じた。`,
    );
    await era.printAndWait(`やっぱり、まだ疲れてる。`);
    era.drawLine();
    await inner_urara.say_as_unknown_and_wait(
      `見届けたいのか、自分でも気づいていない何かなのか。${callname}（${you.name}）は、それでもトレーニング場へ足を運んだ。`,
    );
    era.drawLine();
    await you.say_as_passer_by_and_wait(
      'トレーナーA',
      'あの子、感染力はあるけど、やっぱり……',
    );
    await you.say_as_passer_by_and_wait(
      'トレーナーB',
      `ああ。ああいう子を育てるのがどれだけ大変か、想像できるよ。${urara.sex}は、ここ向きじゃないんじゃないか。`,
    );
    await you.say_as_passer_by_and_wait(
      'トレーナーC',
      '雰囲気はいい。でも、それだけじゃ意味がないだろう。',
    );
    await era.printAndWait(
      `周囲の囁きに導かれるように、${you.name} はコースへ目をやる。案の定、${you.name} の直感は正しかった。`,
    );
    await era.printAndWait(
      `ウララのレースはもう始まっていた。いちばん基本的な選抜レースですら、${urara.sex}は最後尾に取り残されている。`,
    );
    await era.printAndWait(
      `周りのトレーナーが${
        urara.sex
      }に長く視線を置くはずもない。たまに目が戻っても、すぐに別の${urara.uma_sex_title}へ移っていく。`,
    );
    await era.printAndWait(
      `ほんの短い関心を向けるつもりだった ${you.name} だけが、いま${urara.sex}の姿に引き込まれていた。`,
    );
    await era.printAndWait(
      `決して走ることを諦めないその背中を見て、か弱い鼓動が ${you.name} の胸に集まり始める……`,
    );
    era.drawLine();
    await inner_urara.say_as_unknown_and_wait(
      `さて、今の${callname}、あるいは、今の ${you.name} は……？`,
    );
    era.printButton(
      `「まだよくわからないけど、意外と見ていたい。」（募集を試す）`,
      1,
    );
    era.printButton(
      `「${urara.sex}はいい子だ。でもまだ弱すぎるし、才能もなさそうだ。もっと向いた人がいるかもしれない。」（募集を諦める）`,
      2,
    );
    ret.push((ret['rec'] = await era.input()));
    if (ret['rec'] === 1) {
      era.drawLine();
      await era.printAndWait(
        `胸の鼓動に従い、${you.name} はその小さな影を見続けることにした。`,
      );

      await era.printAndWait(
        `\n最後尾でも、ハルウララは全力で走っている。歯を食いしばった顔なのに、読めるのは楽しさばかりだ。`,
      );
      await era.printAndWait(
        `${
          urara.sex
        }は前方の誰かを追っているわけでも、誰かを追い抜こうと必死なわけでもない。『ハルウララ』という${urara.uma_sex_title}は、ただ全力で走ることを楽しんでいる。それだけだ。`,
      );
      await era.printAndWait(
        `魂が鼓動する理由が、だんだんはっきりしてくる。まだ最後尾でも、${urara.sex}に声をかけたい気持ちが ${you.name} の内側を満たしていく。`,
      );
      await era.printAndWait(
        `いつ自分が出したのかわからない声援とともに、高ぶった想いが思考より先に、行動となって現実になった。`,
      );
      await era.printAndWait(
        `だがこれは、一日に何回も回る、ごく普通の選抜レースだ。そんな最下位に声を枯らすのは、理解しがたい。`,
      );
      await era.printAndWait(
        `それでも、そんな凡庸な考えは ${you.name} を止められなかった。少なくとも今の ${you.name} は、気にしていなかった。`,
      );
      await era.printAndWait(
        `${you.name} は、奇妙がられ、見下される覚悟もしていた。届かない最後の距離を登るとき、傍らから向けられる目と同じように。`,
      );
      await era.printAndWait(
        `だが ${you.name} は驚いた。${
          you.name
        } の声に続いて、もっと多くの${urara.uma_sex_title}が声援を始め、トレーナーたちまでその影に応援を送り始めたのだ。`,
      );
      await era.printAndWait(
        `小さな波紋が広がり、最後の距離が呼声の中で縮まっていく。きっかけを作った ${you.name} は、その声援の波の只中で、胸を打たれた——`,
      );
      await era.printAndWait(
        `全力を尽くす桜色の背中には、職業上の相性で選んだ「${you.name}」だけでなく、情熱と勇気でトレーナーになった「${you.name}」もいた。`,
      );
      await era.printAndWait(
        `最初の自分は、金や名声のため、あるいは強い${urara.uma_sex_title}を育てた実績のためだけに、ここに来たのだろうか。`,
      );
      await era.printAndWait(`それだけじゃ、なかったはずだ。`);
      era.drawLine();

      await inner_urara.say_as_unknown_and_wait(
        `空想家の机上の空論みたいだけれど……`,
      );
      await inner_urara.say_as_unknown_and_wait(`……`);
      await inner_urara.say_as_unknown_and_wait(
        `……結果だけでは、夢も情熱も測れない。`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `実績がなければ振り切られるかもしれない。結果がすべてを代表するのかもしれない——`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `それでも今この瞬間、あなたは『うっかり』思い出してしまった。自分が結果のためだけに来たのではないこと。失っても、恐れてはいけないことを。`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `川砂に埋もれた細かな金屑は、大した価値はないかもしれない。誰かが拾えば、それでもきらきら光る。`,
      );
      era.drawLine();

      await era.printAndWait(
        `走り終えた出走者たちがコースを出ると、先頭を走った${urara.uma_sex_title}を募集しようと、同業者はすぐに散っていった。`,
      );
      await era.printAndWait(
        `集まった${urara.uma_sex_title}たちも、次のレース——あるいは自分の番——の準備に走り出す。残ったのは、まだ立ち去らない ${
          you.name
        } と、向かい合うウララだけだった。`,
      );
      await era.printAndWait(
        `ゴール前の最初の声援で ${
          you.name
        } に気づいていた小${urara.uma_sex_title}が、傷ひとつない笑顔で手を振りながら、こちらへ走ってくる。`,
      );
      await era.printAndWait(
        `いつもの、清らかな笑顔。早春の朝日が、ここに差しているようだった。`,
      );
      await urara.say_and_wait(
        `あっ！ この前のトレーナーだ！ 本当に見に来てくれたんだね！`,
      );
      await era.printAndWait(
        `${
          you.name
        } のそばまで来た小${urara.uma_sex_title}は、嬉しさのうえに、少し驚いてもいるらしい。`,
      );
      await urara.say_and_wait(
        `えへへ～ また負けちゃったね！ でも最後まで走れたよ。走るの、本当に楽しいんだ！ だからトレーナー、次も……`,
      );
      await era.printAndWait(
        `ウララが少し照れくさそうに話すのを聞きながら、${you.name} は決心した。`,
      );

      era.printButton(`「ウララ、聞いて。」`, 1);
      await era.input();

      await era.printAndWait(
        `咲き開いた桜の瞳と見つめ合い、心の準備をした ${you.name} は、自分から${urara.sex}へ一歩踏み出す。`,
      );
      await you.say_and_wait(
        `難しいかもしれない。でも今の自分なら、${urara.sex}の純粋な期待に応えられるはずだ——`,
        true,
      );

      await inner_urara.say_as_unknown_and_wait(
        `かつてなら抱かなかった想いを乗せて、いま信念を抱いた${callname}（あなた）は、ウララへ誘いを出した。`,
      );
      era.printButton(`「次は勝つために、一緒にトレーニングしよう。」`, 1);
      era.printButton(
        `「もっと君の走りを見ていたい。だから……僕の担当になってくれる？」`,
        2,
      );
      ret.push((ret['reward'] = await era.input()));

      await era.printAndWait(
        `${
          you.name
        } の誘いを聞いて、小さな${urara.uma_sex_title}は潤んだ目を見開き、桜の瞳が突然の言葉に小さく震える。`,
      );
      await era.printAndWait(
        `そのあと純真な羞恥が少し顔を出しても、ウララははっきり ${you.name} の願いに応えた。`,
      );
      await urara.say_and_wait(
        `今までひとりでトレーニングしてたから、どうしたらいいかよくわかんないんだ！`,
      );
      await urara.say_and_wait(
        `でもトレーナーが一緒なら、もっと速く走れるよね！ だから……`,
      );
      await era.printAndWait(
        `${
          you.name
        } の真似をして、ウララも一歩前へ出る。見慣れた、純粋な笑顔のまま、小さな${urara.uma_sex_title}は ${
          you.name
        } の両手を握った。`,
      );
      await urara.say_and_wait(
        `だから嬉しいよ！ これから一緒に頑張ろうね、トレーナー！`,
      );
      await era.printAndWait(
        `燃え始めた星火は、そう簡単には消えない。自分を真正面から見つめられれば、走る道はまだ先へ伸びていける。`,
      );
      await era.printAndWait(
        `ウララの輝く笑顔を見つめ、${you.name} は胸の内で、もう一度決心を固めた。`,
      );
      await era.printAndWait(
        `結果がどうであれ、${you.name} は${urara.sex}の最後まで付き添い、${urara.sex}が走っていける未来を見届ける。`,
      );

      era.printButton(`「だから、止まらないで……」`, 1);
      await era.input();

      await era.printAndWait(
        `そしてウララの驚きの声の中で、胸のもう一段の段差を越えたばかりの ${you.name} は、また倒れた——`,
      );
      await era.printAndWait(
        `力を抜きすぎて急に足元が消えた ${you.name} は、『止まれない』姿勢のまま、安心して地面へ倒れた。`,
      );
      await era.printAndWait(
        `目を覚ましたら、またウララと枕を並べていた——それはまた別の話だ。`,
      );
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        ' のトレーナーになった！',
      ]);
    } else {
      await era.printAndWait(
        `${you.name} は胸の弱い鼓動を振り払い、トレーニング場を後にした。`,
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        `こうして${callname}は、振り返りもせずトレーニング場を出ていった——`,
      );
      await inner_urara.say_as_unknown_and_wait(`……はあ……`);
      await inner_urara.say_as_unknown_and_wait(
        `今のあなたは、気まぐれだったみたいね。なら物語も、ここで雑に閉じましょう。`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `でもここは、いつでも出会いの席を空けておく。だから……`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `次に、あの桜色にほんの少しでも心が動いたなら、もう一度試してみて。`,
      );
    }
    return ret;
  },
};
