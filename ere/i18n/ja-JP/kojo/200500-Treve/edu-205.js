/**
 * @file トレヴ - 育成
 * @author 梦露
 * @author 黑奴队长（改编）
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  race_start: (() => {
    const title = 'レースの前';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      const buffer = [
        () =>
          treve.say_and_wait(
            '今日の勝利は、私が取る。フランスの皆さんのために',
          ),
        () => treve.say_and_wait('栄光は、もう私の手の中。'),
        () => treve.say_and_wait('胸の躍る争いをしましょう！'),
      ];
      if (era.get('love:205') >= 50) {
        buffer.push(() =>
          treve.say_and_wait(
            `今日の勝利は、私が取る。${you.actual_name} のために！`,
          ),
        );
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_win: (() => {
    const title = 'レース勝利';
    /** @param {CharaTalk} treve トレヴ */
    const f = async (treve) => {
      const buffer = [
        () => treve.say_and_wait('ゴール！勝ったわ～'),
        () => treve.say_and_wait('Merci beaucoup！（皆さん、ありがとう）'),
        () => treve.say_and_wait('皆さん、祝福をありがとう！'),
        () =>
          treve.say_and_wait(
            'これも、私がこの栄誉を得られた理由。皆さんへ、最上の贈り物を。',
          ),
      ];
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  ws_47_24: (() => {
    const title = '青空の上を翔ける';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} prix_prb ブルーインコ賞（色付き名）
     * @param {PrintedSpan} prix_dia ディアヌ賞（色付き名）
     */
    const f = async (treve, you, prix_prb, prix_dia) => {
      await era.printAndWait([
        treve.name,
        ' は年明け後、春の過ぎた五月、メイクデビューと同じく 1600 メートルの ',
        prix_prb,
        ' を大勝した。',
      ]);
      await era.printAndWait([
        '本人の強い希望もあり、',
        treve.sex,
        'は距離を 500 メートルほど延ばした ',
        prix_dia,
        ' にも出走した。',
      ]);
      await era.printAndWait(
        `${you.name} を含む多くの観客の予想に反し、三冠級のレースで圧倒的な勝利を収めた。`,
      );
      await era.printAndWait(`${treve.name} は着実に実力を上げている。`);
      await era.printAndWait(
        `その過程で、${you.name} が教えられることは減っていった。`,
      );
      await era.printAndWait(
        `一を聞いて十を知る ${treve.name} は、教えなくても正しい答えに自然と辿り着くことがある。`,
      );
      await era.printAndWait(
        'シニアのトレーナーでも気づかない点を、自分で直してしまう。',
      );
      await era.printAndWait(
        `放任主義だと他のトレーナーに責められることもあるが、${you.name} は${treve.sex}にはこれが正しいと思っている。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_33: (() => {
    const title = '家貧しければ他郷へ';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(
        `夏も終わりに近づき、海辺の合宿から戻った ${you.name} は、またG1の出走登録書を書いている。`,
      );
      await era.printAndWait(
        `フランスオークスを制してから、まだそう経っていないのに、気づくとまたG1だ。`,
      );
      await era.printAndWait(`次に出るのは、${treve.sex}が待ち望む凱旋門賞。`);
      await era.printAndWait(
        `すでに示した強さだけを見れば、${treve.name} がその栄誉を得るのも不思議ではない。`,
      );
      await era.printAndWait(
        `${you.name} は出走登録にサインし、トレーナー室のソファに寝そべる ${treve.name} へ渡す。`,
      );
      era.printButton(`「出走登録だ。サインを。」`, 1);
      await era.input();
      await treve.say_and_wait(`うん。`);
      await era.printAndWait(
        `いつの間にか${treve.sex}は、ここが自分の個室であるかのようにトレーナー室へ入り込んでいる。`,
      );
      await era.printAndWait(`契約した以上、文句も言えない。`);
      await era.printAndWait(
        `それより ${you.name} は、${treve.sex}の私生活のだらしなさのほうをなんとかしてほしいと思っている。`,
      );
      await era.printAndWait(
        `${treve.name} はソファから転げ落ちて立ち上がり、渡されたボールペンを叩きながら ${you.name} を一瞥する。`,
      );
      await treve.say_and_wait(`そういえば、今度の日曜日、空いてる？`);
      era.printButton(`「昼は空いてる。」（恋慕+1）`, 1);
      era.printButton(`「追加の練習か？」（好感+5）`, 2);
      const ret = await era.input();
      await era.printAndWait(`${treve.name} はサインしながら沈思する。`);
      await treve.say_and_wait(
        `師匠が会いたいって。${treve.sex}、夏合宿が終わったらでいいって。そろそろ一度、帰りましょう。`,
      );
      era.printButton(`「師匠？」`, 1);
      await era.input();
      await treve.say_and_wait(`ええ、走りを教えてくれた人。`);
      await era.printAndWait(`${treve.sex}の走りを育てた人物。`);
      await era.printAndWait(
        `完成度の高い ${treve.name} を別の角度から見る人に会えれば、${treve.sex}を知る良い機会にもなるだろう。`,
      );
      await era.printAndWait(
        `${you.name} は出走登録を入れた封筒を糊で閉じながら、${treve.sex}の誘いを受ける。`,
      );
      await era.printAndWait(
        `それなら手土産も要る。${you.name} は茶筒の並ぶ棚へ目をやる。`,
      );
      await era.printAndWait(
        `秋の収穫期はまだ遠い。秋らしい茶葉はどこにもない。`,
      );
      await era.printAndWait(`それなら、収穫期の長いアッサムがいい。`);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_33: (() => {
    const title = '遠きへ';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(
        `鼻歌を歌い、秋の陽が薄い暖かさを残す日、賑やかな茶葉店へ来る。`,
      );
      await era.printAndWait(
        `相手は ${treve.name} の師匠だ。空手で訪ねるわけにもいかない。`,
      );
      await era.printAndWait(`籠には、自分用に買う予定の茶筒が入っている。`);
      await era.printAndWait(
        `少し視線を上げると、オーバーサイズのコートを着た ${treve.name} が品を丁寧に眺めている。`,
      );
      await era.printAndWait(
        `いくつかの茶の香りを確かめている${treve.sex}へ、${you.name} は少し寄る。`,
      );
      era.printButton(`「……トレーナー室の花茶が少ない。補充を頼む。」`, 1);
      await era.input();
      await era.printAndWait(
        `${treve.name} は耳を立て、嬉しそうに尻尾を振って品評を始める。`,
      );
      await era.printAndWait(
        `刺激の弱い茶がいいと思い、入口の缶を籠へ入れると、中にはすでにレモン香のものが入っていた。`,
      );
      await era.printAndWait(
        `${treve.name} は特に気に入ったらしく、にこにこと ${you.name} を見る。`,
      );
      era.printButton(`「レモンか？」`, 1);
      await era.input();
      await era.printAndWait(
        `不満を出すつもりはなかったが、${treve.name} は急に頬を膨らませて抗議する。`,
      );
      await treve.say_and_wait(`${callname}、何か不満？`);
      era.printButton(`「不満じゃない……前にも買った。好きな味だ。」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name} が茶筒三つ入った籠をレジに置くと、顔見知りの店主が驚いた顔をする。`,
      );
      await era.printAndWait(`彼はレジを指で叩きながら眉を上げる。`);
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        `久しぶり。その${treve.child_sex_title}は新しい担当か？`,
      );
      await era.printAndWait(`店主は ${you.name} の肩越しに後ろを見る。`);
      await era.printAndWait(
        `いまも紅茶を愛でている ${treve.name} は依然として無敗の金身で、オークスも勝った。ファンも相応に増えている。`,
      );
      await era.printAndWait(
        `だが大衆の視線を集める人気選手かといえば、そこまではいかない。`,
      );
      await era.printAndWait(`知る人ぞ知る、その程度だ。`);
      await era.printAndWait(
        `紅茶を包むとき、店主は何か気づいたように顔を上げる。`,
      );
      era.printButton(`「どうした？」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        `${treve.sex}、けっこう人気だろう？`,
      );
      await era.printAndWait(
        `${you.name} が振り返ると、若い女性二人が ${treve.name} と握手している。`,
      );
      await era.printAndWait(
        `二人とも${
          treve.sex
        }のファンらしく、明るく応対する憧れの${treve.uma_sex_title}にすっかり見入っている。`,
      );
      await era.printAndWait(
        `G1を勝つ前から感じていたが、${treve.name} には独特の魅力がある。`,
      );
      await era.printAndWait(
        `透き通るかわいさを放つ${treve.sex}に惹かれる人は、トレセンの中でも少なくない。`,
      );
      await era.printAndWait(
        `ファンがまだ少なかったころも、熱狂的に${treve.sex}を支える人はいた。`,
      );
      await era.printAndWait(`そう思ううちに、紙袋が二つレジに並ぶ。`);
      await era.printAndWait(
        `財布から紙幣を二、三枚出して渡すころ、${treve.name} は ${you.name} のそばへ戻る。`,
      );
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        'お釣りです。これからもよろしくお願いします。',
      );
      await era.printAndWait(
        `${you.name} は私用の茶葉の袋を${treve.sex}に渡し、店を出る。`,
      );
      await era.printAndWait(
        `等間隔の並木は少しずつ葉を落とすが、金色の秋景はまだ楽しめる。`,
      );
      await era.printAndWait(
        `大通りを歩くと、隣の${treve.teen_sex_title}が振り返る。`,
      );
      await era.printAndWait(`その向こうに、さっきの女性二人の背が見える。`);
      era.printButton(`「さっきのファンか？」`, 1);
      await era.input();
      await treve.say_and_wait(
        `ええ……${treve.couple_title}、ずっと私のレースを見てくれてるんですって。`,
      );
      await treve.say_and_wait(`嬉しい。`);
      await era.printAndWait(`${treve.name} は照れて言う。`);
      await era.printAndWait(
        `それでも${treve.sex}は真剣な目で、自分の走りを期待する二人のファンに感嘆している。`,
      );
      await treve.say_and_wait(
        `ここに来る前、たくさんの人に助けてもらった。師匠もその一人。家族と友のためにがんばりたい気持ちは、今も変わらない。`,
      );
      await treve.say_and_wait(
        `私の走りを期待してくれる人が増えると思うと、もっと走りたくなる。もっと勝ちたくなる。`,
      );
      await era.printAndWait(
        `多くの${treve.uma_sex_title}は、衆目に晒されることを重荷に感じる。`,
      );
      await era.printAndWait(
        `${
          you.name
        } の担当の中にも、G1のような目立つ舞台で実力を出せず悩む${treve.uma_sex_title}はいた。`,
      );
      await era.printAndWait(
        `だが ${treve.name} は、活躍するほど増える期待に迷わない。`,
      );
      await era.printAndWait(`そのすべてを力に変え、夢へ進む。`);
      await era.printAndWait(
        `そして${treve.sex}のいまの目標は、シャンゼリゼ通りの先にある巨大な建造物が象徴するあのレースだ。`,
      );
      await era.printAndWait(
        `ナポレオンが築いた凱旋門。高く聳える勝利の象徴。`,
      );
      await era.printAndWait(
        `${treve.sex}は必ずその向こうに現れ、その名を冠した世界最高峰の舞台で輝くだろう。`,
      );
      era.printButton(`「……君は必ず勝つ。」（好感+5）`, 1);
      await era.input();
      await era.printAndWait(`${treve.name} がふと振り返る。`);
      await era.printAndWait(
        `いつものように稚い笑顔を咲かせるのとは違い、${treve.sex}は優しく——だが、何かを訴えるように、静かな海のような微笑を浮かべ、小さく言う。`,
      );
      await treve.say_and_wait(`必ず。`);
      await era.printAndWait(
        `${you.name} は思う。あれは自分だけに言った言葉ではないのかもしれない、と。`,
      );
    };
    f.title = title;
    return f;
  })(),
  foreign_travel: (() => {
    const title = 'ヴェルサイユのばら';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `テュイルリー庭園はパリの中心にある。シャンゼリゼを抜け、コンコルド広場とルーヴル美術館を隔てた都心でも大きな庭園で、観光名所であるだけでなく、市民の憩いの場としても広く愛されている。`,
      );
      await era.printAndWait(
        `休日の昼になると家族連れも多く、子どもが走り回る姿があちこちで見える。`,
      );
      await era.printAndWait(`突然、${treve.name} がすっかり縮こまる。`);
      await era.printAndWait(
        `${you.name} が顔を上げると、挨拶する声が聞こえた。`,
      );
      await montjeu.say_and_wait('来たのね。ただ、私の話は主にあの人へよ。');
      await era.printAndWait(
        `慎重さと知恵の滲む${montjeu.adult_sex_title}の声。`,
      );
      await era.printAndWait(
        `だが最初に反射で思い出したのは、何度も聴いた${treve.sex}の勝利ライブの声だ。`,
      );
      await era.printAndWait(
        `振り返ると、すらりと高い${treve.uma_sex_title}が腕を組み、こちらを見つめている。`,
      );
      await era.printAndWait(`——伝説。`);
      await treve.say_and_wait(`師匠！`);
      await era.printAndWait(`${treve.name} は目を輝かせて、その人を呼ぶ。`);
      await era.printAndWait(`${you.name} は全身が硬直し、一歩も動けない。`);
      await era.printAndWait(`速い心拍が警鐘のように頭を満たす。`);
      await montjeu.say_and_wait(`では。`);
      await era.printAndWait(
        `${montjeu.sex}は ${you.name} の左手の紙袋を見る。`,
      );
      await era.printAndWait(
        `${you.name} を木陰のベンチへ招き、苦笑しながら土産を受ける。`,
      );
      await era.printAndWait(
        `${
          montjeu.name
        }。フランスの伝説的な${treve.uma_sex_title}、凱旋門賞の覇者の一人。`,
      );
      await montjeu.say_and_wait(
        `トレセンに入ってからも、休日は${treve.sex}に個人指導をしていたわ。素養に技術が乗れば教える、と簡単に伝えただけ。瞬く間にレースの心得を掴んだ。`,
      );
      era.printButton(`「私に不満ですか？」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name} は答えず、風に揺れる木をじっと見ている。`,
      );
      await era.printAndWait(`その向こうに、陽を受けたセーヌの青が見える。`);
      await era.printAndWait(`秋になれば、もう暑さは感じないはずだ。`);
      await era.printAndWait(
        `だが ${you.name} のこめかみから頬へ、一滴の汗がゆっくり、その存在を刻むように流れる。`,
      );
      await era.printAndWait(
        `無言の時間は、${you.name} が自分の横顔を見つめる ${montjeu.name} に気づいたとき終わる。`,
      );
      await montjeu.say_and_wait(
        `不満かどうかは、自分の目で決めたかった。実際に相手を見なければ分からない。だから、いま答えを出す。`,
      );
      await era.printAndWait(
        `${montjeu.name} はその鋭い双眸を ${you.name} へ向け、眉間に皺を寄せ、言葉で追い打ちする。`,
      );
      await montjeu.say_and_wait(`不満よ。`);
      era.printButton(`「……」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name} は続ける。`);
      await montjeu.say_and_wait(
        `これまでの実績には一定の説得力がある。良いところはそのまま、悪いところは直せる。${treve.uma_sex_title}の素質を最大限に引き出すやり方が放任に見えても、育成の手段だと理解はできる。完成度の高い ${
          treve.name
        } を任されていれば、なお説得力が増す。`,
      );
      await era.printAndWait(`そう見えるだろう。`);
      await montjeu.say_and_wait(
        `だが、いまのあなたのやり方は、ただの放置よ。自分にできることを捨て、${treve.name} の完全を目指す努力を捨て、傍観者になっている。`,
      );
      await era.printAndWait(`では、どうすればいい。`);
      await era.printAndWait(
        `これまで自分の技術を信じ、担当の${treve.uma_sex_title}を信頼してきた。では、完璧な${treve.uma_sex_title}に、欠けた自分はどう触れる。`,
      );
      await era.printAndWait(`${you.name} は${treve.sex}をどう思えばいい。`);
      await era.printAndWait(`${montjeu.name} は続ける。`);
      await montjeu.say_and_wait(
        `凱旋門賞は高い壁よ。フランスの天才でも、そう簡単には取れない。`,
      );
      era.printButton(`「いまのままでは勝てない、ということですか？」`, 1);
      await era.input();
      await montjeu.say_and_wait(`ええ。`);
      await era.printAndWait(
        `遠くで ${treve.name} が野原を走る。後ろを追うように、いつの間にか増えた少年少女も走る。`,
      );
      await era.printAndWait(
        `${treve.sex}がそうすれば、誰もが魅了されるだろう。`,
      );
      await era.printAndWait(
        `そしてそれを難なく力に変え、天才の能力でレースにも勝つだろう。`,
      );
      await era.printAndWait(
        `心の中の呟きを肯定するように、かつての伝説が口を開く。`,
      );
      await montjeu.say_and_wait(
        `${treve.sex}は勝つわ。あなたがいなくても勝てる、強い芽よ。`,
      );
      era.printButton(`「分かっています。」`, 1);
      await era.input();
      await montjeu.say_and_wait(`だからこそ、問わなければならない。`);
      await era.printAndWait(
        `${montjeu.name} は立ち上がり、${you.name} を睨む目は少し冷たいが、見下しているわけではない。`,
      );
      await era.printAndWait(
        `欠点を正面から指摘する公平な場が、${you.name} の心をきつく握る。`,
      );
      await era.printAndWait(
        `これまで避けてきたものを、目の前へ押し出された感じだ。`,
      );
      await montjeu.say_and_wait(
        `一人でも勝てる ${treve.name} の隣に、あなたがいる理由。`,
      );
      await era.printAndWait(`${treve.name} が遠くから手を振る。`);
      await era.printAndWait(
        `${montjeu.name} は優しく微笑んで${treve.sex}に手を振り、${you.name} はベンチで肩を落とし、${treve.sex}から目を離せない。`,
      );
      await montjeu.say_and_wait(
        `答えは凱旋門の前で出しなさい、${you.actual_name}。さもなくば、あなたは${treve.sex}の将来を奪う。`,
      );
      await era.printAndWait(
        `また走り出した ${treve.name} の背を、多くの子どもが追う。`,
      );
      await era.printAndWait(`それが朧になり、森の中へ消える。`);
    };
    f.title = title;
    return f;
  })(),
  before_prix_lat_classical: (() => {
    const title = '『暴君』すら砕く……';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(
        `${you.name} は、${treve.name} が勝負服の意匠を決めたときのことをはっきり覚えている。`,
      );
      await era.printAndWait(
        `${treve.sex}のG1出走は他の${treve.uma_sex_title}より早く、勝負服もすぐ仕立てることになったが、一点だけ${treve.sex}は絶対に譲らなかった。`,
      );
      era.printButton(`「本当に、これでいいのか？」`, 1);
      await era.input();
      await treve.say_and_wait(`これでいい！`);
      await era.printAndWait(
        `胸を張る${treve.sex}の前で、${you.name} は書類から目を離せない。`,
      );
      await era.printAndWait(
        `${treve.sex}の言葉は、デザイナーの案のいくつかを力強く消させる。`,
      );
      await era.printAndWait(`青、白、赤の三色。`);
      await era.printAndWait(`周知の、フランス国旗の三色だ。`);
      await era.printAndWait(`それを勝負服の地色にする。`);
      await era.printAndWait(`その提案に頷いたのは、まさに……`);
      await era.printAndWait(`${treve.sex}なら、何を背負ってもいけるだろう。`);
      await era.printAndWait(
        `控え室で最後の確認をする ${treve.name} は、一点の綻びもない勝負服を確かめ、鏡の前で自分の姿を真剣に見ている。`,
      );
      await era.printAndWait(
        `今日の凱旋門賞には英独だけでなく、日本の${treve.uma_sex_title}も出走している。`,
      );
      await era.printAndWait(
        `国際の注目を集めるこのレースで、${treve.sex}は国旗のような色の勝負服を着る。だが${treve.sex}に緊張はない。`,
      );
      await era.printAndWait(
        `椅子に座り、${treve.sex}の支度を見つめる ${you.name} へ、${treve.name} が振り返る。`,
      );
      await era.printAndWait(
        `あの日と同じコートを着た ${you.name} には、勝負服の ${treve.name} は当時想像もできなかった。`,
      );
      await treve.say_and_wait(`${callname}。`);
      era.printButton(`「うん。」`, 1);
      await era.input();
      await treve.say_and_wait(
        `ここまで連れてきてくれてありがとう。いくつもG1に出させて、誰より真剣に見てくれた。こんな大きな目標、凱旋門賞の前でも。`,
      );
      era.printButton(`「終わってから言ってくれ。」`, 1);
      await era.input();
      await era.printAndWait(
        `「そうね」と笑う ${treve.name} に、窮した色はない。`,
      );
      await era.printAndWait(
        `この凱旋門賞の舞台の前で、${you.name} は${treve.sex}の特異な才能を理解した。`,
      );
      await era.printAndWait(`それは身体の能力でも、精神の安定でもない。`);
      await era.printAndWait(`調教のあとで掴めるものとは違う、天与の才だ。`);
      await era.printAndWait(`他人の期待を背負うことに、まったく圧がない。`);
      await era.printAndWait(
        `巨大な器のように、人の信頼と希望を無限に力へ変えられる。`,
      );
      await era.printAndWait(
        `稀な完成度と高さから生まれたそれが、あらゆる消極を断ち、${treve.name} を前へ進ませる。`,
      );
      await era.printAndWait(
        `${you.name} は、もう一度自分に問わねばならない。`,
      );
      await era.printAndWait(`なぜ自分は${treve.sex}のトレーナーなのか。`);
      await era.printAndWait(
        `ドアノブに手を置いた${treve.sex}が、もう一度 ${you.name} を振り返り、あの言葉を言う。`,
      );
      await era.printAndWait(`願いか、呪いか。`);
      await era.printAndWait(`すべてが躍動するように。`);
      await treve.say_and_wait(`勝つわ。あなたの ${treve.name} として。`);
      era.printButton(`黙って見送る（好感+5）`, 1);
      era.printButton(`「君は勝つ。」（好感+15）`, 2);
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  prix_lat_win_classical: (() => {
    const title = '最強';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `これまでなかったほどの自信に満ちた言葉なのに、${you.name} にはどう聴いても空虚だった。`,
      );
      await era.printAndWait(
        `聞こえる歓声は遠雷のようで、距離があっても耳を潰す。`,
      );
      await era.printAndWait(
        `${treve.name} の走りに、${you.name} が直すべき箇所はほとんどない。`,
      );
      await era.printAndWait(
        `この稀な才能を開花させたのは、おそらく ${montjeu.name} だ。`,
      );
      await era.printAndWait(
        `そして、あの ${montjeu.name} の走りを追憶させるように。`,
      );
      await era.printAndWait(
        `先行策のある一瞬、集団の前方を走る ${treve.name} が、最後の直線を待つとき。`,
      );
      await era.printAndWait(`ロンシャンの熱が最高潮に達したとき。`);
      await era.printAndWait(
        `あれほど憧れた、日本が数十年取れなかった凱旋門賞の前で、${you.name} の胸には二つの感情が絡む。`,
      );
      await era.printAndWait(`一つは、勝利の確信。`);
      await era.printAndWait(
        `${treve.name} はこれまでのレースでも巧みな位置取りで勝ち、${treve.sex}がいちばん得意なのは先行、とりわけ集団の先頭にいるときだ。`,
      );
      await era.printAndWait(
        `そこからの末脚があれば、無敗の${treve.teen_sex_title}に追いつける${treve.uma_sex_title}はいない。`,
      );
      await era.printAndWait(
        `はっきり言えば、この局面まで来れば${treve.sex}の勝利は確定している、それほどの確信だ。`,
      );
      await era.printAndWait(`もう一つは、敗北の恐怖。`);
      await era.printAndWait(
        `だがそれは、いま眼前を走る ${treve.name} が負けるという意味ではない。`,
      );
      await era.printAndWait(
        `数年前、あの日本の怪鳥の前に ${montjeu.name} が好位へ現れたとき、全身が凍った恐怖。`,
      );
      await era.printAndWait(
        `${treve.sex}に勝てない絶望のフラッシュバックが、まったく同じ姿を見せる ${treve.name} に重なる。`,
      );
      await era.printAndWait(`歓声は、まだ遠い。`);
      await era.printAndWait(
        `最後の直線で先頭の ${
          treve.name
        } が、後ろの${treve.uma_sex_title}を徐々に引き離す。`,
      );
      await era.printAndWait(`ロンシャンを埋める声援に支えられるように。`);
      await era.printAndWait(`あの英姿に、自分の寄与した部分はあるのか。`);
      await era.printAndWait(
        `${you.name} は柵を掴み、震える体を少し乗り出し、${treve.sex}の横顔をはっきり捉える。`,
      );
      await era.printAndWait(
        `汗を流しながら重馬場の最後100メートルを走る${treve.sex}に、${you.name} に何ができる。`,
      );
      await you.say_and_wait(`……`);
      await era.printAndWait(`声が出ない。`);
      await era.printAndWait(
        `${treve.sex}の勝利はもう決まっている。${you.name} がすべきことは、もうない。`,
      );
      await era.printAndWait(
        `興奮した歓声が耳を潰し、その響きを通して ${you.name} は、${treve.name} が凱旋門賞のゴールを踏んだ瞬間をはっきり理解する。`,
      );
      era.println();
      await era.printAndWait(`${you.name} は、その瞬間を見ていなかった。`);
      era.println();
      await era.printAndWait(
        `凱旋門賞を取った感想を訊かれ、携帯の通知に怒涛のように来る短信、場内から戻った ${treve.name} に何を言ったかさえ、もう覚えていない。`,
      );
      await era.printAndWait(
        `だが一事だけが、${you.name} の頭に深く刻まれた。`,
      );
      await era.printAndWait(
        `凱旋門賞後の会見で、ワインレッドのボードを背にトロフィーを抱えた ${treve.name} が、誰かの問いに答えた言葉。`,
      );
      await era.printAndWait(
        `何かを訊かれた瞬間、恍惚の ${you.name} の右手が、いきなり掴まれる。`,
      );
      await treve.say_and_wait(`来年も${you.sex}といっしょに勝つ！`);
      await era.printAndWait(`なぜ。`);
      await era.printAndWait(`なぜ自分なのか。`);
      await era.printAndWait(
        `何が、空虚な自分を ${treve.name} の隣に立たせるのか。`,
      );
      await era.printAndWait(
        `フラッシュの白い光は眩しい。疲労の溜まった目には、何も入ってこない。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_25: (() => {
    const title = '別れ道。';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(`凱旋門賞から、半年以上が過ぎた。`);
      await era.printAndWait(
        `${treve.name} の態度は今も変わらず、${you.name} の指導を素直に受ける。`,
      );
      await era.printAndWait(
        `成長した面は多いが、練習へのやる気も落ちていない。`,
      );
      await era.printAndWait(
        `${treve.sex}のかわいさはより多くの人に知られ、レースが増えるにつれファンも増えた。`,
      );
      await era.printAndWait(
        `凱旋門賞の戦果も含め、いまの${
          treve.sex
        }はフランスを背負う${treve.teen_sex_title}として名高い。`,
      );
      await era.printAndWait(`だが、レースの結果はそれで変わらない。`);
      await era.printAndWait(
        `${treve.name} の私物が去年よりずっと増えたトレーナー室。暑気に侵される熱の中で。`,
      );
      await era.printAndWait(
        `疲れた体を休ませるべきでも、ここにいなければならないと ${you.name} に思わせる理由は一つだけだ。`,
      );
      await era.printAndWait(`今年に入ってからの ${treve.name} の戦績。`);
      await era.printAndWait(
        `眼前のパソコンでは、春と初夏に走った二つのG1の映像がループしている。`,
      );
      await era.printAndWait(`距離も去年と同じ、馬場も特に悪くない。`);
      await era.printAndWait(`それでも前者は二着、後者は三着。`);
      await era.printAndWait(
        `${treve.name} は練習を続けているが、明確な解決がないまま連覇を賭ける次のヴェルメイユ賞にも不安が残る。`,
      );
      await era.printAndWait(
        `繰り返す映像と${treve.sex}の状況を見て、何時間経っただろう。`,
      );
      await era.printAndWait(
        `鴉の声で ${you.name} ははっとする。振り返ると、窓の外は夕焼けで橙に染まっていた。`,
      );
      await you.say_and_wait(`……まずい。`, true);
      await era.printAndWait(`今日はトレーニングの予定があった。`);
      await era.printAndWait(
        `自分のことばかりで${treve.sex}を忘れ、慌てて携帯を出すと、メッセージの通知が一つある。`,
      );
      await era.printAndWait(
        `省略された通知でも、およそ一時間前のそれが ${treve.name} からだと分かる。`,
      );
      await treve.say_and_wait(
        `ごめんなさい、今日は体の調子が悪くて、休ませてください。`,
      );
      await era.printAndWait(`トレーニングの予定は、その前からあった。`);
      await era.printAndWait(
        `つまり、一定の時間を置いてからその連絡を送ったのだ。`,
      );
      await era.printAndWait(
        `${you.name} は頭を抱えながら、${treve.sex}へ返信しようとする`,
      );
      await era.printAndWait(
        `だが、どんな言い訳もここでは徒労だ。簡潔な文だけ送るほうがいい。`,
      );
      era.printButton(`「分かった。」`, 1);
      await era.input();
      await era.printAndWait(
        `最近成果の出ていない ${treve.name} に、${you.name} 自身も${treve.sex}と向き合わねばならないと十分分かっている。`,
      );
      await era.printAndWait(
        `原因の分からないトレーナーに、${treve.sex}の何ができる。`,
      );
      await era.printAndWait(
        `${you.name} は立ち上がって、ようやく腹が減ったと気づく。`,
      );
      await era.printAndWait(`（……紅茶でいいか？）`);
      await era.printAndWait(`茶筒の棚。軽く爽やかな香りが脳の奥を刺激する。`);
      await era.printAndWait(
        `頭が空になるような滑らかさで、${you.name} は一つの缶を取る。`,
      );
      await era.printAndWait(
        `中にはほとんど何もなく、残った茶葉と缶に残る香りだけ。レモンの香りだ。`,
      );
      await era.printAndWait(
        `あの日から、${treve.name} はこの茶が好きだった。`,
      );
      await era.printAndWait(
        `ときどきトレーナー室へ来ると、この茶を淹れることも多い。`,
      );
      await era.printAndWait(`秋になれば、寒い日も増える。`);
      await era.printAndWait(`${you.name} は黙って缶を閉じる。`);
      await you.say_and_wait('一人で買いに行くか……', true);
    };
    f.title = title;
    return f;
  })(),
  o_s_95_25: (() => {
    const title = '使い果たして';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, you) => {
      await era.printAndWait(
        `澄んだ過去と、滲むこれからを思いながら、すぐに目的地へ着く。`,
      );
      await era.printAndWait(
        `あの茶店に入ると、店主は ${you.name} を見てまた眉を上げる。`,
      );
      await you.say_as_passer_by_and_wait('茶葉店の店主', 'ん？今度は一人か？');
      era.printButton(`「気にしないでくれ。」`, 1);
      await era.input();
      await era.printAndWait(
        `店内を一瞥したあと、${you.name} は${treve.sex}が味わい深く見つめていた花茶の棚へ足を向ける。`,
      );
      await era.printAndWait(
        `あの日と同じ豊富な並び。林檎、杏、クランベリーなど華やかな果実の絵が並ぶ。`,
      );
      await era.printAndWait(
        `その順で L（lemon）まで来ると、${you.name} の指は空の棚を指す。`,
      );
      await era.printAndWait(`曲がりくねった棚から出て、店主へ目を向ける。`);
      era.printButton(`「……レモン香のはないのか？」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        'ああ、この季節は生産が良くないんだ。フランスのブランドだから、もともと流通が少ない。手付金を入れた分が少しあるくらいで。',
      );
      await era.printAndWait(
        `そのとおりだ。この品は、この男の店以外で見つけたことがない。`,
      );
      era.printButton(`「入荷の見込みは？」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        '当分ない。卸にも在庫がないらしい。',
      );
      era.printButton(`「そうか——いや、ありがとう。」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name} はそのまま店を出ようとして、一言で引き止められる。`,
      );
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        `${treve.sex}は元気か？`,
      );
      await era.printAndWait(`肯定も否定もできない。`);
      await era.printAndWait(
        `${treve.name} がG1の惜敗を本当はどう思っているか、${you.name} にはあまり分からない。`,
      );
      await you.say_and_wait('役に立てないトレーナーだ。', true);
      await era.printAndWait(`男はレジでそわそわする。`);
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        'お前はまだいい。こっちは、あの子の様子のほうが心配だ。同業に、その茶があるか聞いておくよ。',
      );
      era.printButton(`「覚えてるのか？」`, 1);
      await era.input();
      await era.printAndWait(
        `その茶が ${treve.name} の好みだとメディアに出した覚えはない。だが男は苦笑して言う。`,
      );
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        'よく来てる客が連れてきたお客様だぞ。忘れられるわけがない。',
      );
      era.printButton(`「まったく……」`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '茶葉店の店主',
        `まあ、俺が${treve.sex}のファンだってのもあるが……`,
      );
      await era.printAndWait(`男は携帯の画面を叩きながら、妙な顔で呟く。`);
      await era.printAndWait(
        `${treve.name} は多くの人の期待を背負っている。できることをしようと労する人もいる。`,
      );
      await era.printAndWait(`もう一度、${you.name} は問わねばならない。`);
      await era.printAndWait(`なぜ自分は ${treve.name} のトレーナーなのか。`);
      await era.printAndWait(`${you.name} には、どう進めばいいか分からない。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_28: (() => {
    const title = '頂の下で';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `気づくと、${you.name} はシャンゼリゼ通りを歩いていた。`,
      );
      await era.printAndWait(`月が東の空に昇り、闇の増した通りに街灯が点く。`);
      await montjeu.say_and_wait('答えは、見つかった？');
      await era.printAndWait(
        `首を振る。だが ${montjeu.name} はそれを予見していたらしく、責めはせず、続ける。`,
      );
      await montjeu.say_and_wait('では——');
      era.printButton(`「ただ。」`, 1);
      await era.input();
      await era.printAndWait(`${you.name} は${montjeu.sex}の目を見る。`);
      await era.printAndWait(
        `数年前も半年前も、正面から対せなかった${montjeu.sex}の目。`,
      );
      await era.printAndWait(
        `${you.name} は、これが一人で解ける問題ではないと知っている。`,
      );
      await era.printAndWait(
        `${you.name} は、誰かと向き合うのを恐れ、自分の限界を晒すのを恐れてきたと、徐々に感じる。`,
      );
      era.printButton(`「昔の話を、聴いてほしい。」`, 1);
      await era.input();
      await era.printAndWait(
        `${montjeu.name} はしばらく ${you.name} の顔を見る。`,
      );
      await era.printAndWait(
        `体を切り裂きそうな視線に逃げたくなるが、ここに立てなければ何も始まらない。`,
      );
      await era.printAndWait(
        `${montjeu.sex}は二、三歩歩き、${you.name} を招いてベンチに座る。`,
      );
      await era.printAndWait(`隣に座り、${montjeu.name} が口火を切る。`);
      await montjeu.say_and_wait('私の前で綺麗事を並べても……');
      era.printButton(
        `「そんな日が来たら、${treve.name} にも同じことを言う。」`,
        1,
      );
      await era.input();
      await montjeu.say_and_wait('……分かったわ。');
      await era.printAndWait(
        `${you.name} がこうするのは、自分と向き合うためだ。`,
      );
      await era.printAndWait(
        `誰もがどうしようもない、その未熟を解剖するようなものだ。`,
      );
      era.printButton(`苦しい過去を思い出す`, 1);
      await era.input();
      await you.say_and_wait(
        `数年前の凱旋門賞を最前列で見た。あなたと怪鳥がここで全力で戦い、怪鳥が越えられたとき、私は何もできない無力感に襲われた。`,
      );
      await era.printAndWait(
        `率直に言えば、${montjeu.sex}は日本の多くのトレーナーにとってトラウマだ。`,
      );
      await era.printAndWait(`手の届かない壁。絶対の伝説。`);
      await era.printAndWait(`${montjeu.name} は何も訊かない。`);
      await montjeu.say_and_wait(`でも————あなたには ${treve.name} がいる。`);
      await era.printAndWait(
        `${montjeu.name} はしばらく、夜のセーヌへ目をやる。`,
      );
      await era.printAndWait(
        `黒い揺れる水面に星はなく、捉えられない風の立てる波の音だけが静かに響く。`,
      );
      await era.printAndWait(
        `だが ${treve.name} は強い${treve.uma_sex_title}だ。${treve.sex}は一人でも勝てる。`,
      );
      await montjeu.say_and_wait(
        `……${treve.sex}が、人の期待を背負える器だと言ったのを覚えている？`,
      );
      era.printButton(`「ええ。」`, 1);
      await era.input();
      await era.printAndWait(`無限の強度。人ならざる才能。`);
      await era.printAndWait(`それがあるから、いまの ${treve.name} は強い。`);
      await montjeu.say_and_wait(
        `${treve.sex}の、圧力への強さは相当なものよ。これからも無限に人の期待を背負うことに、${treve.sex}は迷わない。`,
      );
      await montjeu.say_and_wait(
        `ただ、その生まれついた性質が${treve.sex}の価値観を作っているとしたら、あなたはどう思う？`,
      );
      await era.printAndWait(`${montjeu.name} は視線を ${you.name} へ向ける。`);
      await era.printAndWait(
        `期待は本来、稀なものだ。絶えぬ努力と優れた成果があって初めて人から得られる。当たり前ではない。`,
      );
      await era.printAndWait(
        `だが ${treve.name} にとっては、それが当たり前だ。`,
      );
      await era.printAndWait(
        `${
          treve.sex
        }が当然のようにすることを、無限の期待の過程で、${treve.teen_sex_title}はこの世界で何を見出したのか。`,
      );
      await era.printAndWait(`可能性と現状が、頭の中でつながる。`);
      era.printButton(`「……期待されないことへの恐怖？」`, 1);
      await era.input();
      await montjeu.say_and_wait('Exactement。');
      await era.printAndWait(
        `かつて伝説となり、すべての人に期待された${treve.uma_sex_title}が続ける。`,
      );
      await montjeu.say_and_wait(
        `期待には応える必要がある。応えるほど、新しい期待が増える。${treve.sex}がその循環の中にいれば、期待こそが自分の価値だと誤解する可能性がある。それが${treve.sex}の根本を成す考えなら、安易に否定すべきではない。`,
      );
      era.printButton(`「${treve.sex}に期待するしかない。」`, 1);
      await era.input();
      await era.printAndWait(`${montjeu.name} は肯く。`);
      await montjeu.say_and_wait(
        `そのためには、あなたという人物に期待できなければならない。価値がなければ、${treve.sex}を他人に託せないから。`,
      );
      await era.printAndWait(`${you.name} は知っている。`);
      await era.printAndWait(`だが、どうすればいい。`);
      await era.printAndWait(
        `${montjeu.name} は立ち上がり、長い髪を揺らし、${you.name} を見下ろす。`,
      );
      await era.printAndWait(
        `罪人を裁く神のような目とは違い、そこにはある程度の同情が混じっている。`,
      );
      await era.printAndWait(
        `これから先も『苦しみ』に苛まれる者への憐れみか。`,
      );
      await montjeu.say_and_wait('私の役目は、ここまでよ。');
      era.printButton(`「……すみません。」`, 1);
      await era.input();
      await era.printAndWait(
        `${you.name} に良い夜を、とだけ言い、${montjeu.name} は去る。`,
      );
      await era.printAndWait(
        `空を仰ぐ。満月が ${you.name} を見下ろし、静かにそこに浮かんでいる。`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = 'Fly Away';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(
        `${you.name} はトレーナー室で、約束の ${treve.name} を待っている。`,
      );
      await era.printAndWait(
        `${treve.sex}が来るまでのあいだ、これまでのレース映像を見直す。`,
      );
      await era.printAndWait(
        `${treve.name} がうまくいかない理由を一つずつ並べる。だが、ほかにも問題がある。`,
      );
      await era.printAndWait(`${you.name} は最近のレースの最終直線を見直す。`);
      await era.printAndWait(
        `${treve.name} は以前と同じく、第一集団から前方へ抜け出そうと躍起になっている。`,
      );
      await era.printAndWait(
        `だがこのレースでは包囲網を破れず、得意の末脚は何も残さず終わった。`,
      );
      await era.printAndWait(
        `もともと ${treve.name} は、高い部類とは言えない${treve.uma_sex_title}だ。`,
      );
      await era.printAndWait(
        `それに戦術が知られれば、${treve.sex}を前へ出さないよう結託する集団が出ても不思議ではない。`,
      );
      await era.printAndWait(
        `何より、${treve.sex}のやり方は読みやすい——${treve.name} の走りは ${montjeu.name} に似ている。`,
      );
      await era.printAndWait(
        `あのときトレーナーたちは ${montjeu.name} への対策に力を入れた。それが ${treve.name} にも、そのまま通ってしまう。`,
      );
      await era.printAndWait(
        `${you.name} は伝説の後継に勝ち続けさせねばならない。何を与えられる。`,
      );
      await era.printAndWait(
        `そう悩むうち、約束の時間は一時間ほど過ぎていた。だが ${treve.name} は来る気配がない。`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_33: (() => {
    const title = 'ただ、唯一';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, montjeu, you, callname) => {
      await era.printAndWait(
        `あの日から、${treve.name} が ${you.name} のそばへ来ない日が増えた。`,
      );
      await era.printAndWait(`連絡も途切れ、最近は手紙の通知すら来ない。`);
      await era.printAndWait(`この状況に、${you.name} は……`);
      era.printButton(`強く責める資格など、ないだろう。`, 1);
      era.printButton(`放置する理由はない。`, 2);
      const ret = await era.input();
      if (ret === 2) {
        await era.printAndWait(
          `ふと、${you.name} は ${treve.name} と出会ったときの場面を思い出す。`,
        );
        await era.printAndWait(`動かなければ。`);
        await era.printAndWait(
          `……夕方、遊覧船がゆっくり ${you.name} の真下のセーヌを通り、対岸にテュイルリー庭園が見える。`,
        );
        await era.printAndWait(`初秋の風がコートの裾を撫でる。`);
        await era.printAndWait(
          `その部分に手を触れ、${you.name} は思い出すべき過去を考える。`,
        );
        await era.printAndWait(`トレーナーになった理由。`);
        await era.printAndWait(
          `勝利も敗北も、きっと後から来たものだ。トレセンの門を叩いたときの頭の中は、もっと単純な希望だったはずだ。`,
        );
        await era.printAndWait(`それは……`);
        await treve.say_and_wait(`……${callname}？`);
        await era.printAndWait(`何度も聴いた声。`);
        await era.printAndWait(
          `振り返ると、あのときと同じコートの ${treve.name} が立っている。`,
        );
        await treve.say_and_wait(`どうして、ここに？`);
        era.printButton(`「それは——」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.sex}はすぐ、${you.name} から目を逸らす。`,
        );
        await era.printAndWait(`山のように動かない断絶。`);
        await era.printAndWait(
          `${treve.sex}と向き合えず、${treve.sex}を一人にしたこと。それが ${you.name} が向き合わねばならない過去だ。`,
        );
        await era.printAndWait(
          `${you.name} が後悔する余地は、どこにも挟まっていない。`,
        );
        await treve.say_and_wait(`……ごめんなさい。`);
        await era.printAndWait(
          `すれ違って走り出そうとする${treve.sex}を、${you.name} は声で引き止める。`,
        );
        era.printButton(`「${treve.name}。」`, 1);
        await era.input();
        await era.printAndWait(`${you.name} の前で、${treve.name} は止まる。`);
        await era.printAndWait(
          `だが${treve.sex}は ${you.name} へ顔を向けず、ずっと背を向けている。`,
        );
        await era.printAndWait(
          `沈黙の喧騒の中で、${you.name} はゆっくり口を開く。`,
        );
        await era.printAndWait(`痛みはまだ、遊走している。`);
        era.printButton(`「君が私を選んだとき、言った言葉を覚えてるか？」`, 1);
        await era.input();
        await treve.say_and_wait(`……たくさん話した気がする。`);
        await you.say_and_wait(
          `『凱旋門賞を連覇できる${treve.uma_sex_title}を担当したら、社会人としての評価も上がるでしょう』って、言った。`,
        );
        await treve.say_and_wait(
          `あれ……恥ずかしすぎる。できればなかったことにしてほしい、${you.actual_name}。`,
        );
        await era.printAndWait(`${treve.sex}はわずかにうつむく。`);
        era.printButton(`「ずっと分からなかった。」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name} は強い。これまでの ${you.name} にとって、${treve.sex}は優秀すぎる担当だった。`,
        );
        await era.printAndWait(
          `心のどこかで、その不均衡が意識の背離を生んでいた。`,
        );
        await era.printAndWait(
          `${treve.sex}がどれほど優れた戦績を取っても、${treve.sex}のために喜べなかった。`,
        );
        era.printButton(
          `「君は、ずっと私を唯一のトレーナーとして見てくれていたんだな。」`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `その技術は ${montjeu.name} が与えたものかもしれない。`,
        );
        await era.printAndWait(
          `それでも、いま${treve.sex}の隣にいるのは ${you.name} だ。`,
        );
        await era.printAndWait(
          `${treve.sex}の脚質を確かめ、${treve.sex}の特性を理解し、${treve.sex}のレースを見続けたのは ${you.name} だ。`,
        );
        await era.printAndWait(`この立場にこそ、意味がある。`);
        await era.printAndWait(
          `この世界で唯一の ${treve.name} のトレーナーとして、${you.name} には${treve.sex}へ託すべきものがある。`,
        );
        await era.printAndWait(`この世界に入った日から。`);
        await era.printAndWait(
          `世界最高峰と呼ばれる凱旋門賞が生まれた日から。`,
        );
        await era.printAndWait(
          `『私たち』にはない可能性を持って生まれた『${treve.couple_title}』に触れた日から。`,
        );
        await era.printAndWait(`一人の人間として、${you.name} は望む。`);
        era.printButton(
          `「${treve.name}、私の魂を焦がしてくれ。」（恋慕+5）`,
          1,
        );
        await era.input();
        await era.printAndWait(
          `人はいつか、自分のすべてを変える存在に出会う。`,
        );
        await era.printAndWait(
          `${you.name} は、この願いのためにすべての偶然がここで結びついたのだと思う。`,
        );
        await era.printAndWait(
          `いま分かった。自分は${treve.sex}の専属トレーナーだ。`,
        );
        await era.printAndWait(`${treve.sex}に、期待を預ける。`);
        await era.printAndWait(`${treve.name} が、わずかに肩を震わせる。`);
        await era.printAndWait(
          `振り返った${treve.sex}は浅く笑う。だがその目には、きらめく何かがある。`,
        );
        await era.printAndWait(
          `${treve.sex}は嬉しそうで、困ったように動き、手を胸に置く。`,
        );
        await era.printAndWait(
          `セーヌの上を吹く風が、${treve.sex}の赤いリボンを撫でる。`,
        );
        await treve.say_and_wait(`あなたは、私に期待してる？`);
        await era.printAndWait(
          `短いその言葉に、${treve.sex}が閉じていた不安が微かに震えて現れる。`,
        );
        await era.printAndWait(
          `${treve.sex}に賭け忘れていた自分は、その真意を確かに受けるため、強く頷く。`,
        );
        await era.printAndWait(
          `${treve.name} は ${you.name} の動きに目を細める。`,
        );
        await treve.say_and_wait("D'accord!");
        await era.printAndWait(
          `最後に残った一滴の涙が、夕焼けの光に反射する。`,
        );
        await era.printAndWait(
          `いまここで、あなたたちのあいだに、ようやく願いが一つだけある。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  prix_lat_win_senior: (() => {
    const title = '頂へ、そしてまた勝つ';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait(`秋高く澄んだ空が、ロンシャンの真上に広がる。`);
      await era.printAndWait(
        `世界最高峰の${treve.uma_sex_title}たちを迎えるこのレースにふさわしい気候だろう。`,
      );
      await era.printAndWait(`いつものコートで来たが、少し暑い。`);
      await era.printAndWait(`客席最前列で柵を握るのも、二度目だ。`);
      await era.printAndWait(
        `時間は瞬く間に過ぎた気がするが、もう一度ここに立つまでに起きたことは、あなたたちにすべて必要だった。`,
      );
      await era.printAndWait(`それらの重みは、かつてなかったほどだ。`);
      await era.printAndWait(
        `それが ${you.name} がここにいる理由となり、この瞬間を支えている。`,
      );
      await montjeu.say_and_wait(`こんなに早く来るとはね。`);
      await era.printAndWait(`馬丁の隣に立つ人物が ${you.name} へ微笑む。`);
      await era.printAndWait(
        `${you.name} は、ようやく ${montjeu.name} にあのときの答えを見せられると思う。`,
      );
      await era.printAndWait(
        `あなたたちはいっしょに、ゲートへ入る ${treve.name} を見つめる。`,
      );
      await montjeu.say_and_wait(`戦術は？`);
      era.printButton(`「目新しいものはない。」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `……気が触れたの？いちばん分かっているのはあなたでしょう。${treve.sex}の特性を理解し、妨害を破ってきたはずよ。そのうえで、使うべき対策を取らなくていいの？`,
      );
      await era.printAndWait(
        `${montjeu.name} を真似た${treve.sex}の走りは、変えにくい。`,
      );
      await era.printAndWait(
        `すでに、${
          treve.name
        } への適応は世界中の${treve.uma_sex_title}によって進んでいると気づいている。`,
      );
      await era.printAndWait(
        `それでも、${treve.sex}へ与えられるものはほかにない。`,
      );
      era.printButton(`「それでも、${treve.sex}を勝たせる。」`, 1);
      await era.input();
      await montjeu.say_and_wait(`……`);
      await era.printAndWait(
        `二度目の凱旋門賞。複雑な坂と深い芝、2400 メートルの舞台。`,
      );
      await era.printAndWait(
        `轟音とともに走る${treve.couple_title}と観客の熱い声援。その中には、これからフランスそのものを背負う ${treve.name} への期待も少なくない。`,
      );
      await era.printAndWait(
        `今年に入って勝っていない。${treve.sex}の衰えに気づいた人も多い。`,
      );
      await era.printAndWait(
        `だが、それに気づいても、祈る人々のために止まることはない。`,
      );
      await era.printAndWait(
        `${treve.name} は、この世界でいちばん長い二分半の道へ踏み出す。`,
      );
      await era.printAndWait(
        `ブローニュの森を抜ける${treve.couple_title}を見ながら、腕を組む。${montjeu.name} は腰を伸ばして注視する。`,
      );
      await montjeu.say_and_wait(
        `……戦術が破られているのは分かっている。それでも先行策を取らなければ、${treve.sex}の勝負は始まらない。`,
      );
      era.printButton(`「力で押し開けるなら？」`, 1);
      await era.input();
      await montjeu.say_and_wait(
        `無理よ。もともと争いが激しいうえ、今年は前年覇者の名も背負っている。いまの ${treve.name} は、完全にマークされているわ。`,
      );
      await era.printAndWait(
        `実際、先頭集団へ混ざるところまでは ${treve.name} は成功したが、前へ出る路はすべて封じられている。`,
      );
      await era.printAndWait(`確かに封鎖された——最終直線に入る前までは`);
      await era.printAndWait(`コーナーを回り、レースは中盤へ来る。`);
      await era.printAndWait(
        `普段は先頭集団の前で歩調を作るが、${treve.name} は後方へ押し出された形で集団を追う。`,
      );
      era.printButton(`「${montjeu.name}。」`, 1);
      await era.input();
      await montjeu.say_and_wait(`何？`);
      era.printButton(`「あなたは、なぜ先行策が得意なんですか？」`, 1);
      await era.input();
      await era.printAndWait(
        `視線の先で、${treve.sex}は集団がいったん固まったまま進むレースを眺め、低く言う。`,
      );
      await montjeu.say_and_wait(
        `体力配分と脚力が私に合う、というのはある————ええ、いちばん大きいのは、自分に合う位置に立てたことね。私は忍耐強いタイプじゃない。最後の直線まで待たねばならない決着とは、あまり相性が良くない。`,
      );
      await era.printAndWait(`${montjeu.name} は坦然と前方を凝視する。`);
      era.printButton(`説明する`, 1);
      await era.input();
      await you.say_and_wait(
        `レースでは心理的な圧が相当大きい。${treve.name} にもある程度の強さはあるが、忍耐強いとは言い切れない。だから${treve.sex}は、ずっと先行策を取ってきた。`,
      );
      await montjeu.say_and_wait(`……ずっと、なるほど。`);
      await era.printAndWait(`${montjeu.name} は何かに気づいたらしい。`);
      await era.printAndWait(
        `その機会は、いつもあった。だが最後まで、確かな理由で決心できなかった。`,
      );
      await era.printAndWait(
        `だから初の凱旋門賞でも提案せず、今年のG1でもその戦術は取らなかった。`,
      );
      await era.printAndWait(`だが、いまなら。いまこそ決心すべきときだ。`);
      await era.printAndWait(`偽りの最終コーナーを抜け、最終直線へ向かう。`);
      await era.printAndWait(
        `${treve.name} は標的にされたまま、いまも包囲網を受け続けている。`,
      );
      await era.printAndWait(`柵から身を乗り出す。`);
      era.printButton(`「${treve.name}！！」`, 1);
      await era.input();
      await era.printAndWait(`${treve.name} が ${you.name} のほうを少し見る。`);
      await era.printAndWait(
        `控え室の記憶。${you.name} の作戦は、すでに伝わっている。`,
      );
      await era.printAndWait(
        `だが${treve.sex}が躊躇しないよう、正面から${treve.sex}の目を見て伝える。`,
      );
      await era.printAndWait(
        `勝ち負けの前に、${you.name} は ${
          treve.name
        } という${treve.uma_sex_title}に、自分の夢を叶えてほしい。`,
      );
      era.printButton(`「見せてくれ。」`, 1);
      await era.input();
      await era.printAndWait(
        `つま先で地面を叩く${treve.sex}、三色の勝負服の${treve.sex}が、${you.name} へ指を伸ばす。`,
      );
      await treve.say_and_wait(`——${you.actual_name} のために。`);
      await era.printAndWait(
        `${treve.sex}は、${you.name} がようやく託した期待を背負い、どこまでも走る。`,
      );
      await era.printAndWait(
        `不安が一つでも残れば${treve.sex}に圧がかかると、${you.name} は知っている。`,
      );
      await era.printAndWait(
        `だからこそ、完璧な状態で${treve.sex}を送り出した。`,
      );
      await era.printAndWait(
        `先行策は ${treve.name} 自身が望んだものだが、隣の ${you.name} は知っている。${treve.sex}の脚そのものは、どんな攻めにも効く強さだと。`,
      );
      await era.printAndWait(
        `だから ${you.name} は、これを${treve.sex}に託した。`,
      );
      await era.printAndWait(
        `${
          treve.name
        } は包囲網の前方の${treve.uma_sex_title}のところで、一瞬だけ速度を落として下がる。最終直線という最後の攻め場で起きた予想外の行動に、相手は後方を振り返る。`,
      );
      await era.printAndWait(
        `だが ${
          treve.name
        } は、もうそこにいない。ほかの${treve.uma_sex_title}を避けるため、いちばん外側へ走っている。`,
      );
      await era.printAndWait(
        `そして、封鎖されて温存された体力が、一瞬で爆ぜる。`,
      );
      await era.printAndWait(
        `土壇場の集中は、研いだ刀の先のように先頭を掴む。`,
      );
      await era.printAndWait(`${treve.name} は大外から一気に駆け上がる。`);
      await era.printAndWait(
        `これまでの走りとまったく違う戦術に、観客のざわめきが巨大になる。`,
      );
      await montjeu.say_and_wait(`差し……！？`);
      await era.printAndWait(
        `これは ${treve.name} が柔軟さでいつでもできた戦法だ。`,
      );
      await era.printAndWait(
        `だが封鎖網を避けるなら、いったん下がってから再始動する迂回しかない。`,
      );
      await era.printAndWait(`相手が最終直線で隙への恐怖を晒すのを使う。`);
      await era.printAndWait(`${treve.name} は一瞬で先行集団を超える。`);
      await era.printAndWait(
        `まったく読めない、${treve.sex}の先行策以外の奇襲が、逃げようとする相手を揺らす。`,
      );
      await era.printAndWait(
        `完全に封鎖したはずの相手が、最後の最後に襲来する。`,
      );
      await era.printAndWait(
        `${treve.sex}は ${montjeu.name} の影すら超え、走路を前方へ走る。`,
      );
      await era.printAndWait(
        `青いマントが翻り、${you.name} は${treve.sex}の背を凝視する。`,
      );
      await era.printAndWait(
        `${treve.name} はすべての予想を超え、すべての過去を捨てる。`,
      );
      await era.printAndWait(
        `そして、生まれたすべての希望を背負い、人の届かないところへ走る。`,
      );
      await era.printAndWait(`いくつ願いを忘れても、どこかで必ず覚えている。`);
      await era.printAndWait(`この世界を変える輝きを、ずっと求めていた誰か。`);
      await era.printAndWait(`そして最後に、${treve.sex}と出会った。`);
      await era.printAndWait(`${treve.name} の叫びが聞こえる。`);
      await era.printAndWait(
        `${
          treve.sex
        }は最後の力を尽くし、残り100メートルを切った最後の一瞬で先頭の${treve.uma_sex_title}を超える。時間が止まったようにさえ感じる。`,
      );
      await era.printAndWait(
        `${you.name} は、これまであなたたちのすべてが熟したと思う。`,
      );
      await era.printAndWait(
        `掲示板を越える最後の蹄音が、何よりも大きく、この舞台に響く。`,
      );
      await era.printAndWait(
        `フランス競馬史上、三十六年ぶりの偉業。凱旋門賞連覇を果たしたのは、誰も拾わなかった${treve.uma_sex_title}と、誰も拾わなかった異国のトレーナーだ。`,
      );
      await era.printAndWait(
        `軽く吸って、吐く。芝の匂いがいっぱいで、心を潤すようだ。`,
      );
      await era.printAndWait(
        `ここにいなければ、確かに見えなかったものがある。`,
      );
      await era.printAndWait(
        `そのために、この仕事をずっと続けていて本当によかったと、${you.name} は思う。`,
      );
      await era.printAndWait(`万雷の喝采と祝福の中で。`);
      await montjeu.say_and_wait(`顔を上げなさい。`);
      await era.printAndWait(
        `${montjeu.name} の言うとおり上を見ると、いつの間にかそこに立つ ${treve.name} と目が合う。`,
      );
      await era.printAndWait(
        `${treve.sex}は荒い息をつき、汗を流し————少し呼吸を整え、それから ${you.name} へ右手を伸ばす。`,
      );
      await era.printAndWait(
        `${you.name} が${treve.sex}の意図が分からず戸惑っても、${treve.name} は構わず柵から身を乗り出す。`,
      );
      await era.printAndWait(
        `茫然とする ${you.name} の前で、${treve.name} は悪戯っ子のように微笑み、${you.name} の手を握って柵の向こうへ引き上げる。`,
      );
      await treve.say_and_wait(`さあ、早く！`);
      era.printButton(`「老人には少し優しくしてくれ。」`, 1);
      await era.input();
      await treve.say_and_wait(
        `次は三連覇よ、時間がない！あと、私と付き合って！`,
      );
      await era.printAndWait(
        `${you.name} は散った過去を後ろへ置き、目に深く焼き付いた${treve.sex}の姿を思い出す。`,
      );
      await era.printAndWait(`最後の直線。すべてを振り切るような輝き。`);
      await era.printAndWait(
        `いつか${treve.sex}は、それすら塗り替えていく走りを人に見せるだろう。`,
      );
      await era.printAndWait(
        `必ず ${you.name} を、想像もできないところへ連れていく。`,
      );
      await era.printAndWait(
        `${treve.sex}の微笑を見て、${you.name} は思う。これが、いまの自分の全部だと。`,
      );
      await era.printAndWait(`秋の空は、どこまでも爽やかだ。`);
    };
    f.title = title;
    return f;
  })(),
  we_95_42: (() => {
    const title = '永遠に、あなたのもの';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `休日の朝、突然内線が鳴り、${you.name} は玄関へ向かう。`,
      );
      await treve.say_and_wait(`Salut！トレーナー、来たわ！`);
      era.print(`${you.name} は決める。`);
      era.printButton(`扉を閉める`, 1);
      era.printButton(`……見間違いか？（好感-10、恋慕+1）`, 2);
      ret.push(await era.input());
      await treve.say_and_wait(`ちょっと、私よ！`);
      era.printButton(`詐欺か？`, 1);
      era.printButton(`「帰ってくれ、金はない！」（好感-10、恋慕+1）`, 2);
      ret.push(await era.input());
      await era.printAndWait(
        `${you.name} は扉を閉めようとするが、残念ながら人間の腕力では${treve.uma_sex_title}に勝てない。`,
      );
      await era.printAndWait(`扉はこじ開けられる。`);
      await era.printAndWait(
        `${treve.child_sex_title}はうっかり玄関で尻餅をつく。`,
      );
      await era.printAndWait(
        `フランスの姫、天才の${treve.teen_sex_title}なのに、${
          you.name
        } の前で髪を直す様子は吹き出しそうになる。`,
      );
      await era.printAndWait(
        `服装は相変わらず短パンにTシャツだが、身長は出会ったころよりかなり伸びている。`,
      );
      await era.printAndWait(
        `欧米人特有の肌は透き通るように見え、顔にはまだ少し幼さが残る。`,
      );
      await era.printAndWait(
        `あなたたちは凱旋門賞で勝った。それからテレビや雑誌に頻繁に出て、ブランドと組み、一躍時の人になった。`,
      );
      await treve.say_and_wait(`どこにいるかは、私が決めるわ。トレーナー。`);
      await era.printAndWait(
        `視線がぶつかる。主張については、${treve.sex}にも一理ある。${treve.name} は誇らしげな顔をする。`,
      );
      await era.printAndWait(
        `${treve.name} は世界最強の${treve.uma_sex_title}だ。${
          you.name
        } はあのときの情景を忘れない。`,
      );
      await era.printAndWait(`青い調子の勝負服でゴールを切った瞬間。`);
      await era.printAndWait(
        `中学生らしい率直さと正直さ、歳相応の負けず嫌い、活力に満ちた${treve.uma_sex_title}の感触。`,
      );
      await era.printAndWait(
        `あのときの子は大きくなった。背が伸び、徐々に細いモデル体型になっている。`,
      );
      await era.printAndWait(`髪は先まで整い、人形のように揃っている。`);
      await era.printAndWait(`正真正銘の美人。`);
      await treve.say_and_wait(`${callname}。`);
      await treve.say_and_wait(`帰りたくない。`);
      await treve.say_and_wait(`でも、あなたが嫌なら、すぐに行く。`);
      await era.printAndWait(
        `${treve.sex}の目に映るのは ${you.name} のひどい顔だ。もともと起きてすぐだから。`,
      );
      era.print(`${you.name} の返事は……`);
      era.printButton(`「……やることをやってくれ。」`, 1);
      era.printButton(`「外を歩こう。」（好感+15）`, 2, {
        disabled: era.get('love:205') < 50,
      });
      ret.push(await era.input());
      if (ret[2] === 1) {
        await treve.say_and_wait(`……分かった。`);
        await era.printAndWait(
          `それが標準の答えかもしれない。だが最善ではないかもしれない。`,
        );
        await era.printAndWait(
          `${treve.name} は単刀直入に応え、来た道を戻る。`,
        );
        await era.printAndWait(
          `${you.name} の言ったとおり帰り、${treve.sex}の背が遠ざかる。`,
        );
        await era.printAndWait(
          `それが ${you.name} の望んだ姿なのに、なぜか見ていられない。`,
        );
        await era.printAndWait(`なぜか。いや、理由は明らかだ。`);
        await era.printAndWait(`——身心を貫く虚脱が、ゆっくり内側を灼く。`);
        await era.printAndWait(
          `手を伸ばさなくていいのか。どこからか、そんな声がする。`,
        );
        await era.printAndWait(
          `伸ばしたいのに、${you.name} 自身が躊躇する。結局 ${you.name} は何もしなかった。`,
        );
        await era.printAndWait(`${you.name} は気を逸らすように家へ戻る。`);
      } else {
        era.drawLine();
        await era.printAndWait(
          `${treve.name} は相変わらず短パンと黒いTシャツ、サングラスをかけている。`,
        );
        await era.printAndWait(
          `ファンに見つけられたくないのか、特徴的な栗毛を整えすぎて、かえって周囲の目を引く。`,
        );
        await era.printAndWait(
          `${treve.uma_sex_title}の美貌の大半は毛色で決まる、と言われている。`,
        );
        await era.printAndWait(
          `もちろん容貌も見るが、総じて毛の比重のほうが重い。`,
        );
        await era.printAndWait(
          `${treve.name} の髪と尻尾は、このあたりの${treve.uma_sex_title}とまったく違う。`,
        );
        await era.printAndWait(`変装に、意味がない……`);
        await era.printAndWait(`${treve.name} は車窓から外の景色を眺める。`);
        await era.printAndWait(
          `揺られながらしばらく乗り、乗り換えで降り、人混みではぐれないよう ${you.name} は ${treve.name} の手を引いて案内する。`,
        );
        await era.printAndWait(
          `ふと振り返ると、人波に紛れた${treve.sex}の顔に、泥の中で咲く花のような美しい笑みがある。`,
        );
        await era.printAndWait(`休みなので通行人も多い。家族連れも多い。`);
        await era.printAndWait(
          `母親に手を引かれた子がきょろきょろ周囲を見ている。${treve.name} はその子から少し目が離せない。`,
        );
        await era.printAndWait(
          `${treve.sex}は潤んだ目で、懇願するように真剣に言う。`,
        );
        await treve.say_and_wait(`もう少し、もう少しだけでいい。`);
        await era.printAndWait(
          `結局、行く先は競馬場だけで、大井のレースを見に来た。`,
        );
        await treve.say_and_wait(`やっぱりレースね！`);
        era.printButton(`「……」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name} は興味深そうにレースを見ている。`,
        );
        await era.printAndWait(`面白い。いま行われているのはG3だ。`);
        era.printButton(`「少し意外だ。」`, 1);
        await era.input();
        await treve.say_and_wait(`何が？`);
        era.printButton(
          `「凱旋門の${treve.uma_sex_title}がG3に興味を持つとは。」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`……そうかもしれないわね。`);
        await treve.say_and_wait(
          `あなたもトレーナーなら分かるはず。${treve.couple_title}から見れば、これも凱旋門と同じよ。`,
        );
        era.printButton(`「言いすぎじゃないか？」`, 1);
        await era.input();
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `${treve.name} の言葉は、いつの間にか重みを増している。`,
        );
        await era.printAndWait(
          `数年前の ${you.name} には、${treve.sex}を語る資格がなかった。`,
        );
        await treve.say_and_wait(
          `${treve.couple_title}にとって大舞台。そのために調整し、ここに来る。自分の魂を賭ける。だから——`,
        );
        await you.say_and_wait('ゴールだ。', true);
        era.printButton(`「……そうか？」`, 1);
        await era.input();
        await era.printAndWait(
          `${you.name} にとって、これは何の違いもないG3だった。`,
        );
        await era.printAndWait(
          `普通の準備、普通の努力、少しだけ光るところ。そんなレース。`,
        );
        await era.printAndWait(
          `${you.name} がトレーナーの立場で多くのレースを見てきたせいで、大事なものを見落としていたのかもしれない。`,
        );
        await treve.say_and_wait(`……はは。`);
        await era.printAndWait(`乾いた笑い。`);
        await treve.say_and_wait(`……`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `競馬場は閑散としている。レースは終わった。だが ${you.name} はまったく立てず、鉛のような重い膝を曲げ、客席に座っている。`,
        );
        await era.printAndWait(`風が冷たい。`);
        era.drawLine();
        await era.printAndWait(
          `深夜、${you.name} と ${treve.name} は東京の通りを歩く。`,
        );
        await treve.say_and_wait(`……ジャパンカップに出たい。`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `${treve.name} がこれから大事な話をしようとしているのは、${you.name} にも分かる。`,
        );
        await treve.say_and_wait(`あなたを忘れられない。トレーナー。`);
        await treve.say_and_wait(
          `国も人種も、分からない。でもトレーナーなら、楽しいと思う。`,
        );
        await era.printAndWait(`これは ${you.name} の罪状だ。`);
        await era.printAndWait(`胸がかすかに痛み、${you.name} は平気を装う。`);
        await treve.say_and_wait(`愛してる。`);
        await treve.say_and_wait(`ずっと愛してる。`);
        await era.printAndWait(`言葉は滑らかだ。`);
        await era.printAndWait(
          `何度も練習したに違いない。${you.name} のために、わざわざ。`,
        );
        await era.printAndWait(`頭が真っ白になる。動悸。呼吸が粗くなったか。`);
        await era.printAndWait(
          `${treve.sex}が胸の内を見せるたび、${you.name} の心も晒される。`,
        );
        await era.printAndWait(
          `糸を解くように、${treve.name} の言葉はヴェールを一枚ずつ剥ぎ、${you.name} の心も裸にする。`,
        );
        await era.printAndWait(`${you.name} はどうしようもない遺憾を感じる。`);
        await era.printAndWait(`${treve.name} は何度も言葉を重ねる。`);
        await treve.say_and_wait(
          `……ねえ、${
            you.actual_name
          }。私たちがトレーナーと${treve.uma_sex_title}じゃなかったら、出会えたかしら。`,
        );
        era.printButton(`「……出会えない。」`, 1);
        await era.input();
        await treve.say_and_wait(`そうね。`);
        await treve.say_and_wait(`……`);
        await era.printAndWait(
          `立っているこの場所から空を仰ぐと、一等星が数個光っているだけだ。`,
        );
        await era.printAndWait(`都心から見る、安い星空。`);
        await era.printAndWait(
          `この低い星空の下に生まれ、おそらくここで死ぬ ${you.name} と、満点の星空のような未来を抱えた${treve.sex}。`,
        );
        await era.printAndWait(`不均衡なのは、明らかだ。`);
        await era.printAndWait(
          `${you.name} は、今にも泣きそうな ${treve.name} に告げる。`,
        );
        await era.printAndWait(`夜風が吹き、日没は近い。`);
        await era.printAndWait(
          `${treve.name} の目は、出会ったときとほとんど変わっていない。`,
        );
        await era.printAndWait(
          `これまで何度も回想した記憶の中の${treve.sex}と同じだ。`,
        );
        await era.printAndWait(
          `だが変わったこともある。${treve.sex}はレース以外への興味を芽生えさせた。`,
        );
        await era.printAndWait(`時間は、すべてを変える。`);
        await era.printAndWait(
          `${you.name} は${treve.sex}と違い、${treve.sex}の足を引っ張るだけだ。`,
        );
        await era.printAndWait(
          `${you.name} は${treve.uma_sex_title}の足を引っ張りたくない。`,
        );
        await era.printAndWait(`だから——`);
        era.printButton(`「別れよう。」`, 1);
        await era.input();
        await treve.say_and_wait(`ん……！`);
        await you.say_and_wait(
          `もう私の前に現れないでくれ。仕事以外なら、日本にも来るな。消えてくれ。`,
        );
        await treve.say_and_wait(`なぜ、なぜそんなことを！`);
        await you.say_and_wait(`……`);
        await treve.say_and_wait(
          `記憶の中のトレーナーは優しかった。ずっとそう思って——`,
        );
        await you.say_and_wait(`それは間違いだ。`);
        await treve.say_and_wait(`ん……！`);
        await you.say_and_wait(
          `……もうすぐ夜だ。寝れば朝になる。そうすれば明日だ。さよなら——`,
        );
        await treve.say_and_wait(`待って！`);
        await you.say_and_wait(`……`);
        await treve.say_and_wait(
          `せめて、せめて気持ち…せめてトレーナーの気持ちは——`,
        );
        era.printButton(`「知らない。」`, 1);
        await era.input();
        await treve.say_and_wait(`あっ……！`);
        await era.printAndWait(
          `${you.name} は、最低の人生に似合う言葉を言った。`,
        );
        await treve.say_and_wait(`嘘つき！`);
        await you.say_and_wait(`……`);
        await era.printAndWait(
          `${you.name} は、${treve.name} が後ろへ去る足音を聞く。`,
        );
        await era.printAndWait(`${you.name} はふらふらと東京競馬場へ来る。`);
        await era.printAndWait(
          `競馬場は冷たい。周囲の喧騒が蘇る気がする。走る車の音と、葉の揺れる音。`,
        );
        await era.printAndWait(`十一月だ。ジャパンカップが近い。`);
        await era.printAndWait(
          `${you.name} はしばらくそこに立ち、秋の競馬場に一人で立つ。`,
        );
        await era.printAndWait(`${you.name} の隣に、誰もいない。`);
        await era.printAndWait(`それでいい。だから——`);
        era.printButton(`「忘れてくれ……」`, 1);
        await era.input();
        await era.printAndWait(`——何分過ぎただろう。`);
        await era.printAndWait(`空はすでに暗い。夜が東京競馬場へ降りる。`);
        await era.printAndWait(`放送では、まもなく閉門の時間らしい。`);
        await era.printAndWait(`胸に穴が開いたようだ。`);
        await era.printAndWait(
          `${you.name} が去ろうとするとき……出入口に ${treve.name} が立っている。`,
        );
        era.printButton(`「なぜここに……」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name} は凄い脚力で ${you.name} へ突進する。${treve.sex}の頭が槍のように ${you.name} の腹へ刺さり、肺が潰れるようだ。`,
        );
        await era.printAndWait(`痛い。かなり痛い。`);
        await era.printAndWait(`骨まで届く痛みが神経を刺激する。`);
        await era.printAndWait(
          `${treve.name} は ${you.name} の腹に抱きつき、${treve.sex}は——`,
        );
        await era.printAndWait(`泣いた。`);
        await era.printAndWait(
          `サファイアのような美しい目が歪み、裂けそうに眉を寄せる。`,
        );
        await treve.say_and_wait(
          `トレーナーのばか！Stupide idiot.Pourquoi dis-tu des choses aussi horribles！（大ばか！どうしてそんなひどいことを！）`,
        );
        era.printButton(`「待って！何を言ってるか分からない！——」`, 1);
        await era.input();
        await era.printAndWait(
          `${treve.name} はそのまま ${you.name} の腕の中で泣く。`,
        );
        await era.printAndWait(
          `勝手に飛びかかって傷ついたのは ${you.name} なのに、${treve.sex}が泣いている。`,
        );
        await era.printAndWait(
          `当然だ。${you.name} が${treve.sex}の心を傷つけた。`,
        );
        await era.printAndWait(
          `場内を片付けようとする職員が来る。驚いてこちらを一目見る。`,
        );
        await era.printAndWait(
          `きっと狂った娘と悪い男、カップルの喧嘩だと思ったのだろう。`,
        );
        await era.printAndWait(`その人はすぐ視線を逸らし、仕事へ戻る。`);
        await era.printAndWait(
          `イルミネーションが競馬場を飾り、そんな場所であなたたちはしゃがむ。`,
        );
        await treve.say_and_wait(
          `私がどんな気持ちでここに立ってるか分かってるの！迎えに来るなら早く来て！`,
        );
        era.printButton(`「え！？待ち伏せしたのは君のほう——」`, 1);
        await era.input();
        await treve.say_and_wait(
          `うるさい、うるさい！言い訳は聞きたくない、ばか！`,
        );
        era.printButton(`「えええ？」`, 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' は本当に',
          treve.uma_sex_title,
          '特有の怪力で抱き潰されそうになり、',
          treve.get_colored_name(),
          ' の背を軽く叩く。',
        ]);
        await era.printAndWait(
          `『abandonne』（諦めろ）と言ったのに、${treve.name} は少しも離れようとしない。痛哭する${treve.sex}は、かえって力を強める。`,
        );
        await era.printAndWait(
          `自作自受なのかもしれない…………だが肋骨が本当に折れそうだ。`,
        );
        await treve.say_and_wait(`どうなの？`);
        era.printButton(`「？」`, 1);
        await era.input();
        await treve.say_and_wait(`私を愛してるの！？愛してないの！？`);
        era.printButton(`「そういう問題じゃない——」`, 1);
        await era.input();
        await treve.say_and_wait(`そういう問題よ！`);
        era.printButton(`「愛していなければ、こんなに困らない。」`, 1);
        era.printButton(`「好きだから、困ってるんだ！」`, 2);
        await era.input();
        await era.printAndWait(`${treve.name} は水を得た魚のようだ。`);
        await treve.say_and_wait(
          `じゃあ早く結婚式を！婚約して、指輪も買って……『師匠』もきっと祝福してくれる！`,
        );
        await treve.say_and_wait(
          `フランスなら教会でしょう？日本でもいい。真っ白な服で寺の前で愛を誓うわ！`,
        );
        era.printButton(`「寺じゃない、神社だ。」`, 1);
        await era.input();
        await era.printAndWait(
          `${you.name} は独り盛り上がる ${treve.name} を止めるため、${treve.sex}の肩を掴む。`,
        );
        await treve.say_and_wait(`大胆ね……`);
        await treve.say_and_wait(`外でなんて……でもあなたなら——`);
        era.printButton(`「変なことを言うな！結婚の話などしていない！」`, 1);
        await era.input();
        await treve.say_and_wait(`つまり先に恋人になるってことね。感動した！`);
        await treve.say_and_wait(
          `周りの人もきっと理解して受け入れてくれる！さもなくば、子どもが本当に苦しむわ！`,
        );
        era.printButton(`「私はヨーロッパ人じゃない。」`, 1);
        await era.input();
        await treve.say_and_wait(`人種がそんなに大事なの！？`);
        era.printButton(`「大事だろう！？」`, 1);
        await era.input();
        await treve.say_and_wait(
          `私はあなたの人種や容貌を見て恋したんじゃない。心に恋したの！`,
        );
        await treve.say_and_wait(
          `アジア人？だから何？騒ぐ人には『うるさい』と大声で言うわ！誰も私たちを邪魔できない！`,
        );
        await treve.say_and_wait(`勝手に私の価値を決めないで！`);
        await treve.say_and_wait(
          `私の価値は私が決める。将来も！自惚れてくれない？あなたと結婚しても、私は何も変わらない。鬱陶しいことを言う人がいたら、頭を捻じ切る！`,
        );
        era.printButton(`「それは少し……」`, 1);
        era.printButton(`「そこまでは……」`, 2);
        await era.input();
        await era.printAndWait(
          `そうして、泣き腫らした顔のまま、それでも ${treve.name} は気高く立つ。`,
        );
        await era.printAndWait(
          `化粧を落としても、${treve.sex}は美しい。夜を聖く照らす月のようだ。`,
        );
        await treve.say_and_wait(
          `私は天才の${treve.uma_sex_title}よ！大抵のことは fermez-la で済む！`,
        );
        era.printButton(`「君を煩わせたくない。」（好感+10、恋慕+1）`, 1);
        era.printButton(`「分かってくれ……」`, 2);
        ret.push(await era.input());
        await treve.say_and_wait(
          `分からない、まったく分からない！好きなら、私を喜ばせて！いっしょにいるって言ったのよ！私を幸せにできるのはあなただけだって！`,
        );
        era.printButton(
          `「『幸せにできるのはあなただけ』……それが求婚だろう！」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`さっきのは違う！いまのが求婚よ！`);
        era.printButton(`「わけが分からない！」`, 1);
        await era.input();
        await treve.say_and_wait(`わけが分からないくらい、好きなの！`);
        await era.printAndWait(
          `互いの叫びが東京の夜の一角に響く。どちらも息が上がっているが、目は逸らさない。`,
        );
        await treve.say_and_wait(
          `心のどこかで、ずっとあなたを追ってた！考えないようにしても、できなかった！トレーナーと話した日々、あの記憶が録画みたいにループするの！`,
        );
        era.print(`${you.name} も……`);
        era.printButton(`「ずっと君を想っていた。」`, 1);
        era.printButton(`「ずっと忘れられなかった……」`, 2);
        await era.input();
        await treve.say_and_wait(`なら！`);
        await era.printAndWait(
          `${treve.name} は膝から ${you.name} へ寄り、${you.name} の胸倉を掴む。`,
        );
        await era.printAndWait(
          `美女に驚かされると怖いというのは、本当らしい。`,
        );
        await era.printAndWait(
          `${treve.sex}のフランス系の端正な貌が至近まで迫る。${treve.name} は ${you.name} に口を開く。${treve.sex}の怒号が大井競馬場の前に響く。`,
        );
        await treve.say_and_wait(`あなた、ばか。`);
        era.printButton(`「ばかじゃない」`, 1);
        await era.input();
        await treve.say_and_wait(
          `いいえ、ばか！弱くてもいい……情けなければ手を携えて支えればいい。あなたが責任を捨てないなら、私はなおさら捨てられない。`,
        );
        await treve.say_and_wait(
          `トレーナーと${treve.uma_sex_title}の関係は対等よ。私たちは全力で走り、トレーナーは導く。欠けてはならない夫婦みたいなもの。`,
        );
        await treve.say_and_wait(
          `だから……くっ、しっ、私たちは引き合うのよ、違う？`,
        );
        await era.printAndWait(
          `${you.name} は自分より十歳若い${treve.child_sex_title}を泣かせてしまった。`,
        );
        await era.printAndWait(`夜は少し冷たい。昼が暑かったので、薄着だ。`);
        await era.printAndWait(
          `それでも二人寄り添い、虫のように体温で温め合えば、寒くはない。`,
        );
        await era.printAndWait(
          `${treve.name} は依然として心配そうな顔で、${you.name} は${treve.sex}の頭を撫でる。`,
        );
        era.printButton(`「少し寒いか？」`, 1);
        await era.input();
        await treve.say_and_wait(`……うん。`);
        era.printButton(
          `「先に君の泊まってるホテルへ行こう。このままじゃ風邪を引く。」`,
          1,
        );
        await era.input();
        await treve.say_and_wait(`ええ。`);
        await era.printAndWait(
          `${treve.sex}は ${you.name} の言うとおり、いっしょに歩く。`,
        );
        await era.printAndWait(
          `イルミネーションの光が、あなたたちの背を照らす。`,
        );
        era.drawLine();
        era.printButton(`「${treve.name}、これはどういう……！？」`, 1);
        await era.input();
        await treve.say_and_wait(
          `${treve.child_sex_title}を部屋に入れたら、することは一つだけだと思わない？`,
        );
        await era.printAndWait(
          `肌をかろうじて隠す布が解け、${treve.name} の海のような青い目が妙な光を放つ。`,
        );
        await treve.say_and_wait(
          `Bonne soirée（良い夜を），ma cheri（愛しい人）。`,
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {CharaTalk} you プレイヤー
   */
  async we_95_42_end(treve, you) {
    await era.printAndWait(
      `部屋で落ち着くつもりだったのに、待っているとバスタオル姿の ${treve.name} が現れる。`,
    );
    await era.printAndWait(`未成年の淫行が始まる。`);
    await era.printAndWait(
      `要するに、法という後ろ盾を完全に失った ${you.name} が世界最強の${treve.sex}を止められるはずもなく、そのまま完全に一線を越えた。`,
    );
    await era.printAndWait(`${you.name} と担当は、夜を楽しんだ。`);
    await treve.say_and_wait(`おはよう、愛しい人`);
    await treve.say_and_wait(`……`);
    await era.printAndWait(
      `隣には裸の ${treve.name} がいる。${you.name} はこの状況に安心する。`,
    );
    era.printButton(`「……おはよう、私の姫。」`, 1);
    await era.input();
    await treve.say_and_wait(`あら、認めたの？`);
    await treve.say_and_wait(`……そう。最初からこうすればよかったのね。`);
    era.printButton(`「怖いことを言わないでくれ。」`, 1);
    await era.input();
    await era.printAndWait(
      `窓から射す朝日を浴びた ${treve.name} は、絵の聖母のように美しい。`,
    );
    await era.printAndWait(
      `純白のベールに包まれ、うつ伏せで ${you.name} を見る${treve.sex}は、突出した部分だけを隠し、背を無防備に晒している。`,
    );
    await era.printAndWait(
      `${you.name} は衝動的に、芸術品のような ${treve.name} の頭を撫でる。${treve.sex}の流麗な髪が指を抜ける。`,
    );
    await treve.say_and_wait(`……♪`);
    await treve.say_and_wait(`……`);
    await era.printAndWait(
      `${treve.sex}の微笑む顔を見て、${you.name} は決心する。`,
    );
    await treve.say_and_wait(
      `大好き。これまでずっと、あなたを想っていた。こうして話すのを夢見てた。`,
    );
    era.printButton(`「私もだ、${treve.name}」`, 1);
    await era.input();
    await era.printAndWait(`微笑む${treve.sex}は、やはりきれいだ。`);
    await treve.say_and_wait(`愛してる、トレーナー。`);
    era.printButton(`「ああ、愛してる。私だけの ${treve.name}。」`, 1);
    await era.input();
    await era.printAndWait(
      `${treve.sex}がかわいく ${you.name} の手を握る様子は、誰が見ても聖女だ。`,
    );
    await era.printAndWait(
      `${you.name} の眼前の愛馬は、美しい顔に彩りを増し、笑みを輝かせる。`,
    );
  },
  palace: (() => {
    const title = (treve) => `${treve.sex}は叶った美しい夢`;
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait(`${you.name} は、何かの音を聞いた。`);
      await era.printAndWait(
        `闇の中で目を開けると、眼前は見知らぬ（まったく見知らぬわけではない）天井だ。`,
      );
      await era.printAndWait(`頭がふわふわして、状況が理解できない。`);
      await era.printAndWait(
        `いつもの場所とはまったく違うところにいる気がする。`,
      );
      await era.printAndWait(
        `ぼんやりした頭で虚空を見つめていると、ふわりとした香りが鼻を打つ。`,
      );
      await era.printAndWait(
        `次いで、一人の${treve.teen_sex_title}が突然目に入る。`,
      );
      await era.printAndWait(`柔らかい栗色の髪。澄んだ蒼い双眸。`);
      await era.printAndWait(
        `そして${treve.sex}の顔には、赤ん坊を見るような慈しみの笑みがある。`,
      );
      await treve.say_and_wait(`Bonjour、よく眠れた？`);
      await era.printAndWait(`撫でるような優しい声色が、微かな睡気を誘う。`);
      await era.printAndWait(
        `相手の顔を見て、${you.name} はようやく状況を理解し、意識を起こそうとする。`,
      );
      await era.printAndWait(`だが、温かい掌がそっと目を覆う。`);
      await treve.say_and_wait(`もう少し寝て？まだ早いの。`);
      era.printButton(`「……いや、起きないと。」`, 1);
      era.printButton(`「君といっしょの朝を楽しみたい。」（恋慕+1）`, 2);
      const ret = await era.input();
      await treve.say_and_wait(`ふふ、そう。嬉しい。`);
      await era.printAndWait(`掌の眼帯が外れ、光が視野へ入る。`);
      await era.printAndWait(
        `起き上がると、${treve.name} は ${you.name} の寝床に座って微笑んでいる。`,
      );
      await era.printAndWait(
        `何か名残惜しい気がして少し考えたが、これで十分かもしれない。まずすべきことをしなければ。`,
      );
      era.printButton(`「おはよう、${treve.name}。」`, 1);
      await era.input();
      await treve.say_and_wait(`ええ、${you.actual_name}！`);
      await era.printAndWait(`${treve.name} は歌うように返す。`);
      era.drawLine();
      await era.printAndWait(
        `凱旋門賞以来、あなたたちは海外のレースを主にしてきた。`,
      );
      await era.printAndWait(
        `正確には、普段以上の実力を示した結果、海外を主戦場にすると決まった。`,
      );
      await era.printAndWait(
        `張り付く ${treve.name} をなんとか追い、着替えて居間へ行く。`,
      );
      await era.printAndWait(
        `卓には佳肴が並び、${treve.name} が ${you.name} を待っている。`,
      );
      await era.printAndWait(`正直驚く。${treve.name} は料理も上手い。`);
      await era.printAndWait(`席に座り、さまざまな料理を眺める。`);
      await era.printAndWait(
        `マグロ、アンチョビ、オリーブなどで作った分量のあるサラダ。`,
      );
      await era.printAndWait(`暖かな濃いスープが、美しい香りを放つ。`);
      await era.printAndWait(`どれも目を奪う品だが、一つだけ特に目立つ。`);
      await era.printAndWait(`厚いハムと大量のチーズを入れたホットサンド。`);
      await era.printAndWait(
        `${treve.name} に「いただきます」と告げてから、がつがつ食べ始める。`,
      );
      await era.printAndWait(
        `濃厚なチーズソースにハムの風味。高級店で食べる味と同じだ。`,
      );
      await era.printAndWait(`——味がまったく同じだ。いま思い出した。`);
      era.printButton(`「……これ、買ってきたのか？」`, 1);
      await era.input();
      await treve.say_and_wait(`私が作ったのよ？`);
      await treve.say_and_wait(`あなたがおいしそうに食べるから、研究したの！`);
      await era.printAndWait(`……この子が天才だと、忘れかけていた。`);
      await era.printAndWait(
        `だが、ここまで再現できるのは、やはり${treve.sex}だ。`,
      );
      await treve.say_and_wait(`……${callname}、ご褒美をくれるでしょう？`);
      await era.printAndWait(
        `一瞬、微笑む ${treve.name} が次の瞬間に口を開く。`,
      );
      await era.printAndWait(
        `${you.name} は鮮やかな赤い口腔と舌を見て、なぜか心臓が止まる。`,
      );
      await era.printAndWait(
        `見るべきでないものを見ているような背徳感がある。`,
      );
      await treve.say_and_wait(`あ……♪`);
      await era.printAndWait(
        `そうして ${treve.name} は耳と尻尾を動かし、期待して ${you.name} を見る。`,
      );
      await era.printAndWait(`……つまり、あれをしろ、ということだ。`);
      await era.printAndWait(
        `少し躊躇するが、しなければ${treve.sex}が口を開けたままになるのは確かだ。`,
      );
      await era.printAndWait(
        `とにかくサンドを小さく裂き、ゆっくり${treve.sex}の口へ入れる。`,
      );
      await treve.say_and_wait(`ん……`);
      await era.printAndWait(
        `${treve.name} は唇を閉じ、${you.name} の指先をわずかに巻き込む。`,
      );
      await era.printAndWait(`生々しい感触と温かさが、指先から脳へ伝わる。`);
      await era.printAndWait(
        `それから${treve.sex}は何かを考えながら口を動かし、一口ずつ飲み下す。`,
      );
      await treve.say_and_wait(`……ん。`);
      await era.printAndWait(`目を閉じ、また口を開ける。`);
      await era.printAndWait(`もう一度、とは思わなかった。`);
      await era.printAndWait(
        `背徳と保護欲と内側の刺激。${you.name} はまたサンドを裂く。`,
      );
      await era.printAndWait(
        `二度、三度、四度、${treve.sex}の口へ入れ、指先が徐々に湿る。`,
      );
      await era.printAndWait(
        `やがて皿のフランス風サンドは消え、すぐ終わりが来る。`,
      );
      await treve.say_and_wait(`あ、あなたの分まで食べちゃった。`);
      era.printButton(`「大丈夫、大丈夫だ、ね！？」`, 1);
      await era.input();
      await treve.say_and_wait(`ええ♪ありがとう♪`);
      await era.printAndWait(
        `${treve.name} は満面の笑みで礼を言い、舌で唇を一周舐める。`,
      );
      await era.printAndWait(`${you.name} は湿った指を意識せざるを得ない。`);
      await era.printAndWait(`${treve.name} はそれを見ながら、小さく呟く。`);
      await treve.say_and_wait(`……癖になりそう。`);
      await era.printAndWait(`聞かなかったことにしよう。`);
      era.drawLine();
      await treve.say_and_wait(`……また夜まで仕事。`);
      await era.printAndWait(`両肩に温かい手が置かれ、上から声がする。`);
      await era.printAndWait(
        `見上げると、風呂上がりの熱を残した ${treve.name} が、真剣な目で ${you.name} を見下ろしている。`,
      );
      await era.printAndWait(`では、時間だ。部屋へ戻ろう。`);
      era.printButton('「今日は寝る。おやすみ、トレヴ。」', 1);
      await era.input();
      await treve.say_and_wait(`あっ……`);
      await era.printAndWait(`服を引かれる。`);
      await era.printAndWait(
        `振り返ると、${treve.name} は寂しそうに ${you.name} の裾を掴んでいる。`,
      );
      await era.printAndWait(
        `その様子が、${you.name} に小さな動物を思い出させる。`,
      );
      era.printButton(`「すぐには眠れなさそうだ。夜風に当たるか？」`, 1);
      await era.input();
      await treve.say_and_wait(`……いい！`);
      await era.printAndWait(`${treve.name} は目を輝かせ、尻尾を振る。`);
      await era.printAndWait(
        `この反応にも慣れたな、と ${you.name} は思いながら${treve.sex}の手を引く。`,
      );
      await era.printAndWait(
        `走りは美しく、きれいだ。誰にとっても理想の走り。`,
      );
      await era.printAndWait(`聖女のような清らかな${treve.sex}。`);
      await era.printAndWait(`女神のような気高い${treve.sex}。`);
      await era.printAndWait(
        `少しだらしなく、意外と親しみやすい${treve.sex}。`,
      );
      await era.printAndWait(`そして、人より寂しがりな${treve.sex}。`);
      era.printButton(`「君がそばにいるだけで——」`, 1);
      await era.input();
      await era.printAndWait(`簡潔に、きちんと伝える。`);
      await era.printAndWait(`${treve.name} に似合う言葉で。`);
      era.printButton(`「何度でも、愛を君へ届ける。」`, 1);
      await era.input();
      await era.printAndWait(`とんでもないことを言った気がする。`);
      await era.printAndWait(
        `${you.name} は冷や汗が次々と出るのに気づくが、言葉はもう出てしまっている。`,
      );
      await era.printAndWait(
        `${treve.name} は耳と尻尾を限界まで立て、目をいっぱいに見開き、顔を真っ赤にする。`,
      );
      await era.printAndWait(
        `やがて呆れたように、諦めたように、大きなため息をつく。`,
      );
      await treve.say_and_wait(
        `……あなたも意外と欲深いのね。ずいぶん勝手なことを言うわ。`,
      );
      era.printButton(`「知らないのか。トレーナーはみんなこうだ。」`, 1);
      await era.input();
      await era.printAndWait(
        `誰もが、担当の${treve.uma_sex_title}を英雄にしたい。`,
      );
      await era.printAndWait(
        `栄冠を取った翌日には、もう新しいトロフィーを探す。`,
      );
      await era.printAndWait(
        `トレーナーという生き物は、実際には${treve.uma_sex_title}より貪欲だ。`,
      );
      await era.printAndWait(
        `それを聴き、${treve.name} は先より大きなため息をつき、両手を伸ばす。`,
      );
      await era.printAndWait(
        `そっと手を ${you.name} の両頬に置き、じっと ${you.name} を見る。`,
      );
      await treve.say_and_wait(`仕方ない。分かったわ。あなたのそばに立つ。`);
      await era.printAndWait(`そう言い、${treve.name} はさらに顔を近づける。`);
      await era.printAndWait(
        `眼前は${treve.sex}の端正な貌。甘い香りが、肌に熱を感じる距離にある。`,
      );
      await era.printAndWait(
        `そしてそのままで、${treve.sex}の目が急に鋭くなる。`,
      );
      await treve.say_and_wait(
        `でも勘違いしないで。あなたの理想は満たさない。`,
      );
      await era.printAndWait(
        `${you.name} への宣戦だ。蒼い視線が ${you.name} を射抜く。`,
      );
      await treve.say_and_wait(
        `誰にも譲らない。ずっとあなたの前に立ち、いつかあなたが私だけを見るようにする。`,
      );
      await era.printAndWait(`言い終えると、${treve.name} はにこりと笑う。`);
      await era.printAndWait(
        `${treve.sex}がもともと持つ、無邪気で周囲まで楽しくする笑顔だ。`,
      );
      await era.printAndWait(
        `${treve.sex}の顔に再び笑みが戻ると、『ぱっ』と瞬きする。`,
      );
      await treve.say_and_wait(`——私の愛しい人。`);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  crazy_fan_end: (() => {
    const title = '慣れない異国の姫';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} montjeu モンジュー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (treve, montjeu, you) => {
      await era.printAndWait([
        'ついにある瞬間を境に、',
        you.get_colored_name(),
        ' と ',
        treve.get_colored_name(),
        ' のつながりは完全に切れた。',
      ]);
      await era.printAndWait(
        '担当はトレーナーに会いたがらず、トレーナーは担当に会う勇気がない。',
      );
      await era.printAndWait([
        'だが各方面の影響を考えたのか、',
        you.get_colored_name(),
        ' と ',
        treve.get_colored_name(),
        ' の契約を打ち切れと求める者は現れなかった。',
      ]);
      await era.printAndWait([
        montjeu.get_colored_name(),
        ' が、もう一度フランスの姫を世話する重荷を背負ったらしい。',
      ]);
      era.println();
      await era.printAndWait([
        '公事で偶然 ',
        montjeu.get_colored_name(),
        ' と会ったとき、',
        you.get_colored_name(),
        ' が受けたのは非難ではなく、',
      ]);
      await era.printAndWait('——同情の目だった。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は慌てて挨拶だけして去るしかなかった。',
      ]);
      await era.printAndWait(
        '見当のつかない同情に不安だったのか、恐れていたのか……',
      );
      await era.printAndWait('ある記者と姫の結末に似て、まったく違う。');
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        treve.get_colored_name(),
        ' は、もう会わなかった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
