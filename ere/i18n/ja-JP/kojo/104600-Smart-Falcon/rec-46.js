/**
 * @file スマートファルコン - 募集
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async rec_start(falcon, you, minoru, callname) {
    await falcon.say_as_passer_by_and_wait(
      falcon.uma_sex_title,
      `トレーナーさんに声をかけていただいて、本当にありがとうございます。でもね、ファル子の実力、まだちょっと足りない気がするんだよ。`,
    );
    await falcon.say_as_passer_by_and_wait(
      falcon.uma_sex_title,
      `——あ、トレーナーさんは本当にすごいと思うよ。この先、もっと素敵な${falcon.uma_sex_title}に出会えるはずだよ。`,
    );
    era.printButton(
      `次は、${callname}に合うトレーナーさんが見つかりますように。`,
      1,
    );
    await era.input();
    await era.printAndWait(
      `声をかけた${falcon.uma_sex_title}とすれ違う。積み重ねてきた努力が、望んだ形に届かず、胸の奥がざわつく。`,
    );
    await era.printAndWait(`${you.actual_name}は、つい溜息をついた。`);
    await era.printAndWait(
      `今日はここまでにしておこう。${you.actual_name}は落ち込みを抑え、${callname}は取り出した契約書をフォルダへ押し戻す。連れ立って歩く${falcon.uma_sex_title}たちの脇を足早に抜け、トレーナー室へ戻った。`,
    );
    era.drawLine();
    await era.printAndWait(
      `トレーナー室の扉に鍵をかけ、帰ろうとした${callname}の目に、ちらちらと光が映った。`,
    );
    await era.printAndWait(
      `その光の元を確かめたくて、手持無沙汰な${callname}は窓辺へ歩み寄る。目に入ったのは、中庭の三女神像だった。`,
    );
    await era.printAndWait(
      `像は夕日を切り取り、その輝きを${callname}へ贈っていた。`,
    );
    await you.say_and_wait(
      `美しく、知恵深き三女神よ。どうか勇気をください。私に合う${falcon.uma_sex_title}を見つけられますように。`,
    );
    await era.printAndWait(
      `自棄の愚痴か、自嘲混じりの気晴らしか。あるいはその両方か。${you.actual_name}自身に訊いても、正確な答えは出そうにない。`,
    );
    era.println();
    await you.say_as_passer_by_and_wait(
      `怒りに燃える人間の教師`,
      `${falcon.name}！ 今週だけで、許可なしのコンサートはこれで三度目だぞ！`,
    );
    await era.printAndWait(`怒声が、${callname}の思考を切り裂いた。`);
    await you.say_and_wait(`何があった？`);
    await era.printAndWait(
      `${callname}が状況を飲み込もうとしている、そのとき。`,
    );
    await falcon.say_and_wait(`ごめん、通して——`);
    era.printButton(`待っ——`, 1);
    await era.input();
    await era.printAndWait(
      `${callname}はただ、脇を吹き抜ける疾風を感じ、危うく足元を崩しそうになった。`,
    );
    await falcon.say_and_wait(`ど、どうしよう？`);
    await era.printAndWait(
      `逃げようとした反抗が、見知らぬ人を巻き込んでしまった。`,
    );
    await era.printAndWait(
      `${falcon.teen_sex_title}にとっては、これもまた、虻蜂取らずというやつだろう。`,
    );
    await you.say_as_passer_by_and_wait(
      '怒りに燃える人間の教師',
      `${falcon.name}！`,
    );
    await falcon.say_and_wait(`ひっ——`);
    await era.printAndWait(`一方は無実の被害者、一方は執拗に追いすがる敵。`);
    await era.printAndWait(
      `一瞬の迷いすら許されない。追いかけてくる教師は、もう目前だ。`,
    );
    await falcon.say_and_wait(`……ファル子、こんなところで負けてられないよ！`);
    await era.printAndWait(
      `${falcon.uma_sex_title}なら、人間の手から逃げること——いや、逆にねじ伏せることすら難しくない。`,
    );
    await era.printAndWait(
      `人間は、${falcon.uma_sex_title}には勝てないのだから。`,
    );
    await falcon.say_and_wait(
      `ファル子のアイドルの夢のためなら、こうするしかないよ！`,
    );
    await era.printAndWait(
      `壁に手をついて立ち上がった${callname}は、混乱を整理しようとし、窓を開けようとしている${falcon.teen_sex_title}を見た。`,
    );
    await you.say_as_passer_by_and_wait(`人間の教師`, `！${falcon.name}！`);
    await era.printAndWait(
      `細い影は、本物の鷹のように窓から空へ飛び、地上の凡人をはるか後方へ置いていった。`,
    );
    await era.printAndWait(`だが\n`);
    await era.printAndWait(
      `——本物の鷹ではない。重力は容赦なく${falcon.sex}を捉え、そのまま強く地面へ押しつける。`,
    );
    await era.printAndWait(
      `${falcon.sex}は枝を二本折り、土まみれで起き上がると、あっという間に姿を消した。`,
    );
    await you.say_as_passer_by_and_wait(`人間の教師`, `まさか、あんなことを？`);
    await era.printAndWait(`${callname}も、深く頷いてしまう。`);
    await era.printAndWait(
      `なぜか、あの飛び跳ねる姿が、${callname}の胸の奥にしっかり残った。`,
    );
    era.printButton(`すみません、さっきの${falcon.uma_sex_title}は？`, 1);
    await era.input();
    await you.say_as_passer_by_and_wait(
      `人間の教師`,
      `え？ ${callname}が言っているのは${falcon.name}のことか？`,
    );
    await you.say_and_wait(
      `はい。担当の${falcon.uma_sex_title}を探していまして。`,
    );
    await era.printAndWait(
      `さっきの判断は少し無謀にも見える。だが、あれほど個性的なら、とっくにトレーナーから声がかかっていてもおかしくない。`,
    );
    await era.printAndWait(`疑問を察したのか、教師は苦笑して首を振った。`);
    await you.say_as_passer_by_and_wait(
      `人間の教師`,
      `${falcon.name}は芝のレースにこだわりがあるらしい。想像以上に頑固でね。`,
    );
    await you.say_as_passer_by_and_wait(
      `人間の教師`,
      `それに、レースで勝つことより、視線が自分に集まる感覚を楽しんでいるように見える。`,
    );
    await you.say_and_wait(`視線が自分に集まる……まるでアイドルみたいだ。`);
    await era.printAndWait(
      `ファンが望む理想そのものとして、衆目の舞台でいちばん美しい自分を見せる存在。アイドル。`,
    );
    await you.say_and_wait(
      `……でも、${falcon.uma_sex_title}として走るところから始めるほうが、他の道より成功の見込みは高く、時間も短い。`,
    );
    await you.say_and_wait(`現実的な案だ。`);
    await era.printAndWait(
      `教え子への期待か、それとも${falcon.name}に落ち着いてほしいのか。教師はまた首を振った。`,
    );
    await you.say_as_passer_by_and_wait(
      `人間の教師`,
      `だが${falcon.sex}がどれだけ頑張っても、重い鉄球を足首に繋いだみたいでね。`,
    );
    await you.say_as_passer_by_and_wait(
      `人間の教師`,
      `選抜レースを三連続で下位で終えたあと、芝では分が悪いことくらい、${falcon.sex}自身もわかっているはずだ。`,
    );
    await you.say_and_wait(
      `理想を追う${falcon.teen_sex_title}にとって、これ以上つらいことはない。……ダートを試してみては？`,
    );
    await era.printAndWait(
      `考えに沈んでいた${callname}は失言に気づき、自嘲して首を振る。気まずい記憶は、後ろへ押しやりたかった。`,
    );
    await you.say_as_passer_by_and_wait(
      `人間の教師`,
      `それは、直接${falcon.sex}に訊くしかないな。`,
    );
    await era.printAndWait(
      `教師は手を擦り合わせ、吐いた息は水蒸気になって寒風にさらわれる。`,
    );
    await you.say_and_wait(`${falcon.name}は、このあとどこへ？`);
    await era.printAndWait(
      `${callname}が${falcon.name}についてもっと尋ねようとしたところで、慌ただしいベルが会話を遮った。`,
    );
    await you.say_as_passer_by_and_wait(
      `人間の教師`,
      `このあとも、自分の夢を追っているだろうな。`,
    );
    await era.printAndWait(
      `教師は${callname}に手を振り、職員室へ向かう。${callname}は会話の中の使える情報を整理しつつ、廊下へ吹き込む寒風に首を縮めた。`,
    );
    era.drawLine({ content: '翌日' });
    await era.printAndWait(
      `${callname}はいつものようにトレーナー室の前へ来て、扉に何かが貼られているのに気づく。`,
    );
    await falcon.say_and_wait(
      `新人アイドル${falcon.name}！ 16:00、川辺でゲリラライブ予定！ 絶対見に来てね♪`,
    );
    await era.printAndWait(`少し迷ってから、ポスターをそっと剥がした。`);
    await era.printAndWait(`遠くから、かなりの騒ぎが聞こえる。`);
    era.printButton(`見に行ってみよう。`, 1);
    await era.input();
    await era.printAndWait(`${callname}は、騒ぎのするほうへ足を向けた。`);
    era.println();
    await falcon.say_and_wait(`すみません……`);
    await minoru.say_and_wait(
      `${falcon.actual_name_with_title}。正規のアイドル活動をしたいなら、選抜レースで結果を出し、合うトレーナーと契約してください。`,
    );
    await minoru.say_and_wait(
      `トレセン学園は、優れた${falcon.uma_sex_title}を育てるために創られた学校です。その目標を共有して歩みたいトレーナーは、少なくないはずです。`,
    );
    await minoru.say_and_wait(
      `努力の向きを整えて、合うトレーナーと一緒に進んでください。`,
    );
    await era.printAndWait(
      `たづなさんは、${falcon.name}の手元に残っていたポスターを没収しながら、丁寧に、しかしはっきりと戒めた。`,
    );
    await falcon.say_and_wait(`……`);
    await era.printAndWait(
      `伏せた耳を見るかぎり、${falcon.name}は板挟みになっているようだ。`,
    );
    await minoru.say_and_wait(
      `……${you.actual_name_with_title}、ご用件でしょうか？`,
    );
    await era.printAndWait(`たづなさんは、すぐに仕事モードへ切り替わる。`);
    era.printButton(`すみません。あとで${falcon.name}としっかり話します。`, 1);
    await era.input();
    await era.printAndWait(
      `なぜか、${you.name}は窓辺で輝いていた${falcon.teen_sex_title}を思い出していた。`,
    );
    await minoru.say_and_wait(
      `……でしたら、契約書のコピーを理事長室へ一部お預けください。ただし、その前に。`,
    );
    await minoru.say_and_wait(
      `${falcon.actual_name_with_title}と、正式に契約なさったほうがよろしいかと。`,
    );
    await era.printAndWait(
      `${callname}はたづなさんの視線を追い、廊下いちめんに貼られたポスターを見た。`,
    );
    await minoru.say_and_wait(
      `${falcon.uma_sex_title}たちの授業が始まる前に、廊下を元どおりにしてください。`,
    );
    await era.printAndWait(
      `笑顔のままなのに、たづなさんからは強い圧が伝わってくる。\n\n\n`,
    );
    await era.printAndWait(
      `必死に働いたおかげで、始業のベルが鳴る直前、ポスターを全部剥がし終えた。`,
    );
    await falcon.say_and_wait(
      `……ありがとう、${callname}！ ファル子のファン1号の${you.adult_sex_title}！`,
    );
    await era.printAndWait(`ファン1号？`);
    await falcon.say_and_wait(`ファル子、川辺でライブするよ。絶対見に来てね？`);
    await era.printAndWait(
      `アイドルを引き立てる存在——それがファン、ということか。`,
    );
    await era.printAndWait(
      `${callname}は、バッグにしまったポスターを思い出した。`,
    );
    era.printButton(`行くよ。`, 1);
    await era.input();
    await era.printAndWait(
      `目の前の${falcon.teen_sex_title}は、花がゆっくり開くような笑みを浮かべ、${callname}に一礼した。`,
    );
    await era.printAndWait(
      `${callname}は、次のステージを楽しみにし始めていた。`,
    );
  },
  /**
   * @param {CharaTalk} falcon
   * @param {CharaTalk} you
   * @param {string} callname
   */
  async rec_final(falcon, you, callname) {
    // 1は前向き、2は後ろ向き
    // 拍 1
    await era.printAndWait(`${callname}はポスターの案内どおり、河岸へ着いた。`);
    // 場面は前向きであるべき
    await era.printAndWait(
      `陽が西へ沈むにつれ、空の色は明るい群青から橙へゆっくり滲み、雲も夕日に金赤へ染められていく。`,
    );
    await falcon.say_and_wait(`～～～♪`);
    // 歩くことで午後から黄昏への時間経過を示す
    await era.printAndWait(
      `高架橋の影が橋下を覆い、広い暗がりをつくる。黄昏どきだけ、わずかな光が橋下の芝へ落ちる。`,
    );
    await era.printAndWait(
      `橙の空に染められた${falcon.teen_sex_title}が、川辺の芝——${falcon.sex}のステージで公演を続けていた。`,
    );
    // 拍 1
    await falcon.say_and_wait(`～～～♪ みんな、ありがとう！`);
    // 対比：誰もいない芝
    await era.printAndWait(
      `${falcon.teen_sex_title}は手慣れた様子で、空き地に向かってお辞儀する。`,
    );
    await era.printAndWait(
      `——それでも、${falcon.teen_sex_title}の顔には笑みが残っていた。`,
    );
    // 拍 2
    await era.printAndWait(`パチパチパチパチ。`);
    await era.printAndWait(`${falcon.teen_sex_title}は動じた様子がない。`);
    await era.printAndWait(
      `——だが、${callname}はどこか視線を感じずにはいられなかった。`,
    );
    await era.printAndWait(
      `それでも耳がかすかに震えるだけで、${falcon.teen_sex_title}は自分のパフォーマンスを続ける。`,
    );
    era.drawLine();
    await falcon.say_and_wait(`——ふぅ⭐ 今日のファル子、絶好調だよ！`);
    await era.printAndWait(
      `${falcon.teen_sex_title}は左右の街灯の光が交わる境界に立ち、スポットライトを浴びたステージを真似ているみたいだった。`,
    );
    await era.printAndWait(`たぶん、これが${falcon.sex}のステージなのだ。`);
    await era.printAndWait(`孤独なアイドル、か。`);
    await falcon.say_and_wait(`ファル子のファン1号の${you.adult_sex_title}⭐`);
    await era.printAndWait(`帰ろうとした${callname}が、呼び止められる。`);
    era.printButton(`……ファン1号？`, 1);
    await era.input();
    await era.printAndWait(
      `光を浴びた${falcon.teen_sex_title}は、はしゃぎすぎて興奮に近い声で${callname}に宣言した。`,
    );
    await falcon.say_and_wait(
      `だってファン1号の${you.adult_sex_title}は、ファル子のライブを最初から最後まで見てくれた、一番はじめの人だよ⭐`,
    );
    era.println();
    await era.printAndWait(
      `……${callname}は少し思い出す。途中、二、三人は足を止めたが、どれもラスト前に去っていった。`,
    );
    await era.printAndWait(
      `つまり、最初から終わりまで見続けた観客は、自分だけだった。`,
    );
    await era.printAndWait(
      `一月の寒風の中で二時間耐えたなら、ファンと呼ばれてもおかしくはない。`,
    );
    await falcon.say_and_wait(
      `ファン1号の${you.adult_sex_title}、お願いごとある？ ファル子にできることなら、なんでも叶えるよ⭐`,
    );
    await era.printAndWait(`${callname}は、少し考えた。`);
    era.printButton(`ダートの選抜レースで、ファル子に会えるかな？`, 1);
    await era.input();
    await era.printAndWait(
      `予想外の返事だったのか、${falcon.name}は気まずい顔になる。`,
    );
    await falcon.say_and_wait(
      `……ファル子、今ちょうど合うトレーナーさんを探してるんだよ？`,
    );
    era.printButton(`なら、僕と契約しないか。`, 1);
    await era.input();
    await falcon.say_and_wait(`え？`);
    await falcon.say_and_wait(`やった！`);
    await era.printAndWait(
      `${falcon.name}は、自分なりのやり方で祝っているようだ。`,
    );
    await falcon.say_and_wait(
      `ファル子のファン1号が、トレーナーさんでもあるんだね！`,
    );
    await falcon.say_and_wait(
      `なら、トレーナーの${you.adult_sex_title}に、芝でのファル子の可能性を見せちゃうよ！`,
    );
    await era.printAndWait(
      `話せば話すほど熱が入り、${falcon.name}はつい${callname}の手を握った。`,
    );
    era.printButton(`ダートで、${callname}の姿を見たいんだ。`, 1);
    await era.input();
    await falcon.say_and_wait(`え……`);
    await era.printAndWait(`${falcon.name}は、その場で固まる。`);
    era.printButton(`ダートで、${falcon.name}の姿を見たい。`, 1);
    await era.input();
    await era.printAndWait(
      `時間が凍ったみたいに、${callname}は逃げようとする${falcon.name}の瞳をじっと見つめる。`,
    );
    era.println();
    await falcon.say_and_wait(
      `……だって、ファル子の最初のファンのお願いだもんね。`,
    );
    await era.printAndWait(
      `一世紀が過ぎたような長い沈黙のあと、${falcon.name}はようやく答えた。`,
    );
    await era.printAndWait(
      `${callname}の視線から逃げず、真っ向から${callname}を見つめる${falcon.name}。`,
    );
    await falcon.say_and_wait(
      `ファル子は、芝を走ってこそ、いちばん大きくていちばん輝くステージに立てると思うんだ！`,
    );
    await falcon.say_and_wait(`それにダートと芝じゃ、人気が三四倍は違うよ！`);
    await falcon.say_and_wait(`芝は苦手だけど、努力すれば結果は出るはずだよ`);
    era.printButton(
      `ファル子は、ダートのアイドルとして自分たちの${falcon.teen_sex_title}アイドル時代を拓くって、考えたことない？`,
      1,
    );
    await era.input();
    await falcon.say_and_wait(`えええ——`);
    await you.say_and_wait(
      `ダートのファンだって、自分たちを導いてくれる${falcon.teen_sex_title}の誕生を待ってる。いや、ダートのみんなが望んでることなんだ。`,
    );
    await you.say_and_wait(
      `——ダートのみんなは、息を殺して、スター${falcon.teen_sex_title}の誕生を見たがってるんだよ！`,
    );
    await era.printAndWait(
      `大きく息を吸う。${falcon.name}を説得しきるまで、あと一歩だ。`,
    );
    era.printButton(
      `${falcon.name}は、いちばん輝くステージに立ちたくないのか。`,
      1,
    );
    await era.input();
    await falcon.say_and_wait(`……ファル子の……いちばん輝くステージ、か？`);
    await you.say_and_wait(
      `アイドルって、ファンの期待に応えて不可能を可能にする明日の星だろ？`,
    );
    await era.printAndWait(
      `跳ねた米粒を太刀筋で正確に二つに割るみたいに、${callname}は間合いを取り、${falcon.name}へ手を伸ばした。`,
    );
    await you.say_and_wait(`同じ理想のために、出発しよう。`);
    await falcon.say_and_wait(
      `これからよろしくね、トレーナーさん……違う！ ファル子のファン1号の${you.adult_sex_title}⭐`,
    );
    await era.printAndWait(`二人の手が、しっかりと握られた。\n`);
    await era.printAndWait(`${falcon.name}の募集に成功した！`);
  },
};
