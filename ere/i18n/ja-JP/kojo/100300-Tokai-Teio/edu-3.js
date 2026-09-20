/**
 * @file トウカイテイオー - 育成
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  ...require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/edu-3-hurt'),
  ...require('#/i18n/ja-JP/kojo/100300-Tokai-Teio/edu-3-give-up'),
  async train_fail(teio, you) {
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait('あっ！んぅ……');
      await era.printAndWait(
        `普段は活力に満ち、どこか甘えた音色が、痛みで鋭い叫びへ歪み、${you.name} の鼓膜と胸を貫く。${you.name} は二歩を一歩にして駆け寄り、慎重に${teio.sex}を慰め、体を確かめ、患部を軽く揉む。`,
      );
    } else {
      await teio.say_and_wait('いっ——');
      await era.printAndWait([
        '長い声とともに、',
        you.get_colored_name(),
        ' の担当がつまずいて倒れる。',
        you.get_colored_name(),
        ' は慌てて駆け寄り、様子を見る。',
      ]);
    }
  },
  async train_fail_intel(teio, you) {
    await teio.say_and_wait('テイオー伝説は……ここで、ちょっと休憩かな……');
    await era.printAndWait([
      teio.get_colored_name(),
      ' は机に突っ伏し、学ぶ気を失っている。',
    ]);
    await you.say_and_wait('嘘はつけないな。できないものは、できない。', true);
  },
  race_end_win: (() => {
    const title = 'レース勝利';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${you.name} は興奮してスタンドを降り、凱旋したテイオーを迎える。`,
      );
      await era.printAndWait(
        `${teio.sex}も同様に上機嫌で、顔を赤くして ${you.name} へ駆け寄り、${you.name} とハイタッチする。ふたりで勝利の味をたっぷり味わった。`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = 'レース入着';
    /** @param {CharaTalk} teio トウカイテイオー */
    const f = async (teio) => {
      await era.printAndWait('悔しいが、悪くはない。');
      await era.printAndWait(
        `${teio.name} は少し不服そうに足を引きずって場外へ出るテイオーを見て、厳しくしようとした顔に、なぜか笑みが漏れる。`,
      );
      await era.printAndWait(`頑張ったほうだ。しっかり慰めてやろう。`);
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = 'レース敗北';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      if (era.get('status:3:腿伤') > 0) {
        await era.printAndWait(
          `${you.name} は、髪を乱し、落胆してゆっくり歩く担当を見て、胸が血を滴らせる気がする。`,
        );
        await era.printAndWait('くそ、あと一歩……脚さえ……');
        await era.printAndWait(`実況まで、台上でふたりを惜しんでいた。`);
        await era.printAndWait(
          `${you.name} は黙ってテイオーを迎え、自分の体で${teio.sex}を支える。`,
        );
        await era.printAndWait(
          `${teio.sex}は小さく震え、また無理に立ち直る。痛みか、それとも ${you.name} の前で弱さを見せたくないのか。`,
        );
        await era.printAndWait(
          `${you.name} はわからないし、今は構わない。こうしてふたりは支え合い、一緒に場を出る……`,
        );
      } else {
        await era.printAndWait(`${you.name} は眉を寄せる。なぜこうなった。`);
        await era.printAndWait(
          `黒板の刺さるような赤い着順は、${you.name} にこの惨敗が現実だと、一瞬たりとも忘れさせない。`,
        );
        await era.printAndWait(
          `${you.name} は、顔を土気色にし、耳も尻尾も力なく垂れ、体を引きずって ${you.name} へ向かう担当${teio.uma_sex_title}を見て、胸のなかが複雑だ。`,
        );
        await teio.say_and_wait(`……`);
        era.printButton(
          '「大丈夫だ。胸を張れ。もう一度気合いを入れて、成功は待っている」',
          1,
        );
        era.printButton(
          '「今回は……しっかり振り返ろう。テイオー、次はこうするな」',
          2,
        );
        await era.input();
      }
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'テイオー、出発！';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `伝えによれば、三女神はウマ魂を赤子へ授け、${teio.couple_title}に比類ない体を与えてレース場を駆けさせたという。`,
      );
      await era.printAndWait(
        `そして${teio.couple_title}の能力は、レースでの現れによって、おおよそ次のような走り方に分かれる。`,
      );
      era.println();
      await era.printAndWait(
        'まず逃げ。ゲートが開くと猛スピードで相手との差を広げ、スピードと爆発力を求める。欠点は長距離でスタミナ切れしやすいこと、歩幅と速度の都合で、怪我も他の走法より重いことが多い。',
      );
      await era.printAndWait(
        `橙がかった赤い髪で、走ると流線型の乗り物のように見える${teio.uma_sex_title}が、この道に通じていると聞く。`,
      );
      era.println();
      await era.printAndWait(
        `二番目は先行。スタート後すぐに差を広げず、高いスタミナとスピードで逃げの後ろに張りつき、逃げが一息ついた瞬間に抜き去る。欠点は抜き時の見極めが難しく、スタミナと爆発力の要求も高いこと。瞬間加速のため、足裏とふくらはぎはレース中に傷つきやすく、加速時の姿勢は${teio.uma_sex_title}自身の柔軟さもある程度問われる。`,
      );
      era.println();
      await era.printAndWait(
        `もうひとつは差し。ゲート後は馬群の中ほどに潜り、高い意志で逃げと先行の後ろに控え、機が熟せば爆発力と速度で一気に抜き、相手を虚を突く。欠点は気を長く持てること、時機の判断に経験がいること、爆発力の要求が非常に高いこと。田舎から来た芦毛の${teio.uma_sex_title}が、この道で名を成したと聞く。`,
      );
      era.println();
      await era.printAndWait(
        `最後は追込。ゲート後は馬群の最後方に潜り、高い自制とスタミナで機を待ち、来たら爆発力と速度で前方を一気に抜き去る。欠点は差し切りの成功率が高くないこと、${teio.uma_sex_title}自身の自制も強く問われること。界隈で噂される、小柄だが走ると稲妻のように風を追う${teio.uma_sex_title}が、その好例だ。`,
      );
      era.println();
      await era.printAndWait(
        `${you.name} は ${teio.name} の初めての正式なレースの姿を見、これまでのトレーニングと照らし、${teio.sex}の走法を心のなかで確かめ、仮の計画を立てる。皮下に見えるふくらはぎの腱は豊かで力強く、何度かの加速の歩幅は柔軟さがあり、発力の時機を掴む嗅覚は生まれつきのようだ——天才の先行${teio.uma_sex_title}。`,
      );
      await teio.say_and_wait('トレーナー？どうだった！');
      await era.printAndWait(
        `${teio.sex}は両脚を踏み鳴らしながら ${you.name} へ歩いてくる。${you.name} は頷きながら、さっきの観察と、トレーニングの方針を${teio.sex}に話す。`,
      );
      era.println();
      await teio.say_and_wait('うん……キミの言うとおりにするよ！');
      era.println();
      await era.printAndWait(
        `${you.name} は${teio.sex}の両脚を見て、思わず身を沈め、両手を素早くそのうえへ置く。`,
      );
      era.println();
      await teio.say_and_wait('えっ——えっ！');
      era.println();
      await era.printAndWait(
        `指が${teio.uma_sex_title}にとっていちばん大切な脚のうえを撫で、情報は触覚から返ってくる——トレーナーの技だ。案の定、ひとつの事実が確認できる。${you.name} の担当が「帝王舞歩」と呼ぶ特殊な走法は、${teio.sex}特有の脚の構造を最大限に活かせるが、好機と危険は同居し、${teio.sex}の脚は傷つきやすい。とくにこの走法を続けるなら……`,
      );
      era.println();
      await teio.say_and_wait('トレーナー？なにかあった？');
      await era.printAndWait(
        `${you.name} は考えに集中していたところを、耳へ届いた甘い声に刺激され、現実へ戻る。頬を少し赤らめ、首を傾けて ${you.name} を見る${teio.uma_sex_title}を見て、${you.name} はしばらく何と言えばいいかわからない。`,
      );
      era.printButton('「……大丈夫だ。キミの体はすごい」', 1);
      await era.input();
      await teio.say_and_wait(
        'ん？うん……ならよかった。じゃあトレーナー、契約だね。最後まで、ボクと走ってください！',
      );
      era.println();
      await era.printAndWait(
        `風が吹き、${teio.sex}は目を細めてにこにこ手を出す。${you.name} も手を伸ばし、${teio.sex}の小指と絡めて約束する。`,
      );
      await era.printAndWait(
        `脚の問題は……${you.name} は思う。生涯に響かないかもしれない。${teio.uma_sex_title}にこうした問題は珍しくなく、丁寧にケアし、適切なメニューを組めば、少なくとも現役中は問題を出さずに済むだろう。`,
      );
      await era.printAndWait(
        `今ここで${teio.sex}に習慣を変えさせたら……逆効果になるかもしれない。万一、これほどの天才が結果を出せなくなったら……ふたりにとってよくない。`,
      );
      await era.printAndWait(`結局、${you.name} は沈黙を選んだ。`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait(
        'トレーナートレーナー～今日はボクたちのコンビ、初めての年越しだよ！',
      );
      era.println();

      await era.printAndWait(
        `${you.name} は私服で部屋のなかを興奮して飛び回るテイオーを見て、目尻が何度か跳ねる。`,
      );
      await era.printAndWait(
        '活力がありすぎる……小さな暴君を選んでしまったか。',
      );
      era.println();

      await teio.say_and_wait('ねえねえ！トレーナー元気ないね、ボクと遊ぼ！');
      era.println();

      era.printButton('「飯にしよう。食べてからにしよう」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} が大鍋の煮込みを卓へ運ぶと、${teio.sex}は食事だと聞くや滑るように近寄り、椅子に端座し、ついでに ${you.name} の食器も分けてくれる。`,
      );
      await era.printAndWait(
        `ふたりで楽しく新年の晩餐を味わう。温かく賑やかな空気に、${you.name} は${teio.sex}といるのが小さな家のようだと感じずにはいられない。`,
      );
      era.println();

      await teio.say_and_wait(
        'トレーナー、ボクの新年の願いは前に言ったとおりだよ！無敗のクラシック三冠、伝説のテイオーになるんだ！',
      );
      era.println();

      await era.printAndWait(
        `${teio.teen_sex_title}の言葉はまだ子供っぽいが、${teio.sex}が本気なのはわかる。`,
      );
      era.println();

      era.print(`${you.name}——`);
      era.printButton('「その意気だ！その勢いを保て！」（根性+20）', 1);
      era.printButton(
        '「ああ、一緒に頑張って、勝利へ行こう」（スタミナ+20）',
        2,
      );
      era.printButton(
        '「ん……その目標なら、少し調整が要るな」（スキルPt+20）',
        3,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  waka_sta_win: (() => {
    const title = '三冠へ！';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('見事だ。');
      await era.printAndWait(`${you.name} は心のなかで喝采する。`);
      await era.printAndWait(
        `一騎当千の疾走、瞬間の加速、姿勢の整った体——さすが天才の${teio.uma_sex_title}だ。`,
      );
      await era.printAndWait(
        'デビューしたてでこの走り。潜在は充分、将来は明るい。',
      );
      await era.printAndWait(
        `${you.name} はスタンドを降り、出口で担当の登場を待ち、たっぷり褒めてやろうと思う。あるいは、ご褒美も必要か。`,
      );
      era.println();

      await teio.say_and_wait('トレーナー。');
      era.println();

      era.printButton('「へえ、よくやった」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} は${teio.sex}の肩を叩き、そのまま手を置き、ちょうどいい力で揉む——${teio.teen_sex_title}の体の疲れをほぐすためだ。`,
      );
      await era.printAndWait(
        `${teio.sex}は頬の赤みが残ったまま、興奮した顔で ${you.name} を見る。`,
      );
      era.println();

      await teio.say_and_wait('ボク、決めた！');
      era.println();

      era.printButton('「どうした？」', 1);
      await era.input();

      await teio.say_and_wait(
        'ボクの最初の目標——これから無敗で、クラシック三冠を取る！',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}の熱い発言に、${you.name} は口元が上がる。初生の犢が虎を恐れない、と言うべきか、競技への認識が足りない、と言うべきか。だが、若い者が志を持つことに、何が悪い。`,
      );
      era.println();

      await you.say_and_wait(
        `厳しい目標だ……かつて名を馳せたウマ${teio.uma_sex_title}も、今いる天才も、${teio.couple_title}は誰もがその達成を望む。実際に届くのは、ごくわずかだ。`,
      );
      await you.say_and_wait(
        'だが、自分がキミのトレーナーになった以上、全力で支え、その願いを叶える。',
      );

      await era.printAndWait(
        `${teio.teen_sex_title}は瞬きし、闘志は一ミリも消えていない。`,
      );
      await teio.say_and_wait('この夢、叶えてみせるよ！');
      era.printButton(`じゃあ、一緒に頑張ろう。`, 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  sa_47_5: (() => {
    const title = 'だから、服はどうなの！';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        'また雲ひとつない晴れの日——トレセンのこちらの空は、本当にいい。',
      );
      await era.printAndWait(
        `${you.name} は学園の中庭を歩き、早春の気候を味わう。`,
      );
      await era.printAndWait(
        `だが今日は、あのときのように ${you.name} ひとりで散歩しているわけではない。`,
      );
      era.println();

      await teio.say_and_wait('……');
      era.println();

      era.printButton('「……」', 1);
      await era.input();

      await era.printAndWait('空気が少し気まずい。');
      await era.printAndWait(
        `${you.name} は思わず余光で隣の小さな${teio.uma_sex_title}を見る。外に出た白い肌、私服の下に覗く桃色の肩紐……いけない。これ以上見ると師徳に傷がつく。`,
      );
      await era.printAndWait(
        `まして${teio.sex}のその格好は、色とりどりのビーチウェアのような子供服で、${you.name} の罪悪感をさらに増す。`,
      );
      await era.printAndWait(
        `これほど愛らしい${teio.uma_sex_title}が、${you.name} と担当契約を結んだ相手だ……`,
      );
      era.println();

      await teio.say_and_wait('トレーナー？');
      era.println();

      era.printButton('「なに？」', 1);
      await era.input();
      await era.printAndWait(
        `元気な${teio.teen_sex_title}の声が上がり、${you.name} は頭を空にして心を平らにし、いちばん普通の顔で返そうとする。`,
      );
      await era.printAndWait('そして視線はまっすぐ、前方の道へ置く。');
      era.println();

      await teio.say_and_wait('キミ……ボクの私服、どう思う？');
      era.println();

      era.print(`${you.name} はすぐ——`);
      era.printButton('「うん……かなり子供っぽいな」（体力+150）', 1);
      era.printButton('「可愛い……」（スピード+20）', 2);
      era.printButton('「かっこいいよ、テイオー！」（パワー+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await teio.say_and_wait('んぅ～ボク、もう子供じゃないもん！');
          era.println();

          await era.printAndWait(
            `${teio.sex}は唇を尖らせ、少し拗ねたようだが、かえって可愛い。`,
          );
          await era.printAndWait(
            `${you.name} と${teio.sex}は黙ってしばらく歩いた。`,
          );
          break;
        case 2:
          await teio.say_and_wait('えっ！');
          era.println();

          await era.printAndWait(
            `${you.name} の担当は小さく鳴き、顔が赤くなったようだ。${you.name} もこれ以上見るのが気恥ずかしくなり、ふたりは黙って歩き続けた。`,
          );
          break;
        case 3:
          await teio.say_and_wait(
            `あたりまえ！${you.name} はやっぱりテイオーさまのかっこよさがわかるね！`,
          );
          await era.printAndWait(
            `${teio.sex}は嬉しそうだ。${you.name} も思わず笑い、${teio.sex}と一緒にしばらく歩いた。`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_12: (() => {
    const title = '記者会見';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `照明とマイクに囲まれ、レンズの向こうの全員が好奇心と飢えの混じった目でこちらを見ている。${you.name} は隣の小さな${teio.uma_sex_title}を見る。${teio.sex}は明らかにこういう場に慣れていない——無敵のテイオーさまでも、場に呑まれることはある。`,
      );
      await era.printAndWait(
        `気づかれないように、${you.name} は${teio.sex}の手に軽く触れ、気持ちを落ち着かせようとする。ところが${teio.sex}は逆に握り返し、少し汗ばんだ小さな掌の感触が鮮やかだ。${you.name} は一瞬呆けて手を抜こうとするが、別のやり方を選ぶ。${you.name} は少し力を込めて${teio.sex}の手を握り、${teio.sex}の震えを止める。`,
      );
      era.println();
      await era.printAndWait(
        `カメラと記者の質問に対し、${you.name} は調子が良く、答えは完璧で洒落ている。${you.name} に引っ張られ、テイオーの気持ちも徐々にほぐれ、${teio.sex}も大方に、楽しそうに自分のことを、とくに理想を語る。`,
      );
      await era.printAndWait(
        `${you.name} も皆の前で、${teio.sex} の夢を現実にすると約束する。`,
      );
      await era.printAndWait('会見は拍手のなかで幕を閉じた。');
    };
    f.title = title;
    return f;
  })(),
  sats_sho_5: (() => {
    const title = '最初の冠';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('見事な走りだった。');
      await era.printAndWait(`${you.name} は思わず拍手し、声を上げる。`);
      await era.printAndWait(
        `この等級のレース——場で闘う${teio.uma_sex_title}${teio.teen_sex_title}たちが、汗と青春を飛ばして走る姿は、心を動かす。そして ${you.name} の担当は、そのなかで間違いなくいちばん輝いている。`,
      );
      await era.printAndWait('第一歩、幸先がいい。');
      await era.printAndWait(
        `${teio.sex}にハチミツ特製ドリンクを買ってやろう、と ${you.name} は思い、早足でワゴンへ行き、また場へ戻って、自分の${teio.uma_sex_title}の走りを見る。`,
      );
    };
    f.title = title;
    return f;
  })(),
  toky_yus_5: (() => {
    const title = '二冠目';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `これは ${you.name} の担当がこれまで出たなかで、いちばん規模の大きなレースだ。`,
      );
      await era.printAndWait(
        `だが ${you.name} の視線は……${teio.sex}の成績ではなく、${teio.sex}の脚にある。`,
      );
      await era.printAndWait(
        '正確には、ブーツに包まれた足首から、膝までの部分だ。',
      );
      await era.printAndWait('おかしい。');
      await era.printAndWait(
        'スタートのときから見えていた。あとのスパートと加速も、動作に明らかな微細なずれがある。',
      );
      await era.printAndWait(
        'どんな発力も、骨で立つことが基本だ。膝蓋軟骨か脛骨のあたりに、不具合があるはずだ。',
      );
      era.println();

      await era.printAndWait(
        `レースが終わり、${you.name} は担当を迎え、簡単な祝福のあとこの話をし、${teio.sex}がこれまで頼り、得意としてきた走法が原因かもしれないと婉曲に伝える。`,
      );
      await era.printAndWait(`${teio.sex}の答えは、速くて簡潔だった。`);
      era.println();

      await teio.say_and_wait('大丈夫だよ。');
      era.printButton('「なにを言ってる！」', 1);
      await era.input();

      await teio.say_and_wait(
        'なんでもないって！最近疲れすぎただけ……休めば治るよ。',
      );
      era.println();

      era.printButton('「だが……」', 1);
      await era.input();

      await teio.say_and_wait(
        'ボクたちの夢……まだ叶ってないでしょ！ボクは自分のやり方で走り続けたい。手伝ってくれるって、約束したよね。',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}は目を上げ、澄んで清らかで、執念も秘めた視線を ${you.name} へ据える。${you.name} は口を開くが、言葉が出ない。`,
      );
      await era.printAndWait(
        `${teio.sex}に任せても……大したことにはならないだろう、と頭のなかの声が折れる。それに ${you.name} にも、${teio.sex}が走り続けて結果を出す必要がある。そうだろう。`,
      );
      await era.printAndWait(`${you.name} は溜息をつき、うやむやにした。`);
    };
    f.title = title;
    return f;
  })(),
  or_47_25: (() => {
    const title = '定時更新の小さな獣';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('うわぁ。');
      era.println();
      await era.printAndWait(
        `${you.name} はゆっくり、ちょうどいい力で、${you.name} の腿のうえに丸くなっている担当${teio.uma_sex_title}を撫でる。`,
      );
      await era.printAndWait(
        `一度 ${you.name} がマッサージしてから、${teio.sex}はその味を覚え、毛並みを整えてほしいと頼むだけでなく（それは尤もだ）、${you.name} の執務室へこっそり入り、${you.name} が仕事中でも体に擦り寄り、疲れを取ってくれとせがむ。`,
      );
      await era.printAndWait(
        `${you.name} は上の空で${teio.sex}の顎を掻くと、${teio.sex}は満足そうに喉を鳴らし、目を細める。`,
      );
      await you.say_and_wait('猫か', true);
      await era.printAndWait(
        `${you.name} は心のなかで突っ込み、腿のうえの${teio.teen_sex_title}は本当にここを自分の巣にしている気がする。`,
      );
      era.println();

      era.print(`${you.name} は次に${teio.sex}をどうするか——`);
      era.printButton(
        'ゆっくり、髪の根元から優しく撫で下ろし、尾の先まで（スキルPt+30、体力+50～100、好感+5）',
        1,
      );
      era.printButton(
        `疲れすぎて……いつのまにか ${you.name} も${teio.sex}も眠ってしまう（スタミナ＆根性+20）`,
        2,
      );
      if (era.get('love:3') >= 50) {
        era.printButton('悪い悪戯（スピード＆パワー＆賢さ+20、恋慕+1）', 3);
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `${you.name} は五指を揃えて掌にし、ちょうどいい力で頭から尾まで毛並みを通し、掌にふわふわが伝わり、${you.name} の気分まで軽くなる。`,
          );
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            ' は悪戯心を起こし、まず',
            teio.sex,
            'の耳の根と尻の内側（尻尾を操る無毛の部分）を掻く。小さな',
            teio.uma_sex_title,
            'が全身を震わせたところで ',
            you.get_colored_name(),
            ' は方針を変え、マッサージの手つきで',
            teio.sex,
            'の全身を摘む……',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '終わりではない';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('短い終わりが、近づいている。');
      await era.printAndWait(
        `${you.name} はスタンドに立ち、この一年のあれこれを思う。${teio.teen_sex_title}がここまで来られたのは ${you.name} なしでは語れず、${you.name} も${teio.sex}の粘りと執着に惹かれ、自ら${teio.sex}を助けたいと思った。`,
      );
      await era.printAndWait('成功は目前だ。');
      await era.printAndWait(
        `このレースを取れば、${teio.name} は最終目標へまた一歩近づく。${teio.sex}の今の走りからすれば——${you.name} はトレーナーとしてシャンパンを開けるべきではないが——ほぼ確実だ。`,
      );
      await era.printAndWait(
        `頭のなかには、${you.name} と${teio.sex}が伝説になり、名が殿堂入りする幻まで浮かぶ……`,
      );
      await era.printAndWait('待て。');
      era.println();
      await era.printAndWait(`実況「${teio.name}——どうした——」`);
      era.println();
      await era.printAndWait('おかしい！');
      await era.printAndWait(
        `${you.name} は柵を掴んで勢いよく身を乗り出し、場で ${you.name} の${teio.uma_sex_title}を探す。いた、先頭——${teio.sex}の動きは？！`,
      );
      await era.printAndWait(
        `${you.name} はテイオーが、とても正常とは言えない姿勢で外側へ滑るのを見る——`,
      );
      era.println();
      await era.printAndWait('実況「——失速——」');
      era.println();
      await era.printAndWait(
        `ゴールはもう近いが、${you.name} は着順などもうどうでもよく、狂ったように降りて担当を受け止めようとする。警備が理性を失った ${you.name} を引き止め、${you.name} は${teio.sex}を見る。距離は近くないのに、痛みと無念が${teio.teen_sex_title}の顔に書き込まれているのがわかる……`,
      );
      era.println();
      era.printButton('「テイオー！」', 1);
      await era.input();
      await era.printAndWait(
        `レース後、${you.name} は一瞬も無駄にせず、${teio.sex}を抱えてトレセンへ戻り、医務室へ駆け込む。`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_famous_in_famous: (() => {
    const title = '名人のなかの名人';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('準備はいいか');
      era.println();

      await teio.say_and_wait('んうん。');
      era.println();

      await era.printAndWait(
        '耳は帽子へしまい、尻尾はズボンへ隠し、サングラスとマスクを着けて、変装完了。',
      );
      await era.printAndWait(
        `${you.name} も目立たない服を着、襟を立てて適当に顔を隠し、キャップを足す。よし。`,
      );
      await era.printAndWait(
        `ふたりは下手な工作員のように身分を隠し、街へ出る。`,
      );
      await era.printAndWait(
        `——クラシック三冠のあと、${teio.name} の知名度はどんどん上がり、もちろん ${you.name} の知名度も水嵩とともに上がった。今、隠さなければ人通りの多い場所ではファンに囲まれ、何もできなくなる。`,
      );
      await era.printAndWait(
        'だから、こうした前準備は必須だ。だが準備がすべての場面に効くわけではない。たとえば——',
      );
      era.println();

      await era.printAndWait(
        `タイヤとアスファルトが擦れる嫌な音が ${you.name} の鼓膜を刺す。`,
      );
      await era.printAndWait(
        `${you.name} が振り返ると、時間が一瞬遅くなるようだ。`,
      );
      await era.printAndWait(
        '子供が路上に転び、身長の都合で運転手に気づかれず、気づいて急ブレーキを踏んだときには——もう遅い。',
      );
      await era.printAndWait(
        `だが、${you.name} の隣で突然、勢いのある風が起きる。`,
      );
      await era.printAndWait(
        `${you.name} が内側に庇っていた${teio.actual_name_with_title}が、瞬間に力を出し、疾走する。`,
      );
      await era.printAndWait(
        '運転手は背を反らし、ブレーキを限界まで踏み、絶望して目を閉じる。',
      );
      await era.printAndWait('それから奇跡が起きる。');
      await era.printAndWait(
        'ふっ、という音とともに、手品のように子供が路上から消え、運転手は事なきを得て通りを越える。目を開けても、何が起きたかわかっていない。',
      );
      era.println();

      await teio.say_and_wait(
        'これから保護者と一緒にいて、ひとりで走っちゃだめだよ。',
      );
      era.println();

      await era.printAndWait(
        `子供「うん……ありがとう、${teio.uma_sex_title}${teio.elder_sibling_sex_title}？」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}${teio.elder_sibling_sex_title}？！`,
      );
      era.println();

      await era.printAndWait(
        `${teio.name} はここで、風に帽子が飛ばされ、激しい動きで尻尾も出てしまったことに気づく。${you.name} は慌てて${teio.sex}を偽装し直すが、もう遅い。`,
      );
      era.println();

      await era.printAndWait(`通行人A「${teio.name} だ！」`);
      era.println();

      await era.printAndWait('通行人B「わあ、伝説のテイオーさま！」');
      era.println();

      await era.printAndWait(
        `通行人C「見た！${teio.sex}が今、帝王舞歩であの子を助けた！」`,
      );
      era.println();

      await era.printAndWait(
        `人々の声は波のように高まり、知らせを聞いてこちらへ寄ってくる者も多い。ふたりは少し手も足も出ない。だが ${you.name} がテイオーを見ると、${teio.teen_sex_title}の顔は赤いが、明確な嫌悪は見せていない——名声は人を、あるいは${teio.uma_sex_title}を喜ばせるものなのだろう。`,
      );
      await era.printAndWait(
        `それから ${you.name} は${teio.sex}の耳が角度を変えるのに気づき、続いて ${you.name} も声を聞く。`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}A「うん、かっこいい！ボクもこんな${teio.uma_sex_title}になりたい！」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}B「${teio.sex}のトレーナーがすごいって聞くよ。今そばにいる人、それだよね」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}C「本当？私も${you.sex}を専属トレーナーにしたい。今すぐ契約する！」`,
      );
      era.println();

      await era.printAndWait(
        `${teio.uma_sex_title}D「${you.sex}の顔も雰囲気もいいなあ。ほんと……」`,
      );
      era.println();

      await era.printAndWait(
        `ええと……予想外の称賛だ。だが ${you.name} は素直に受け取る。`,
      );
      await era.printAndWait(
        `ただし後半の中身まで考える余裕はもうない。担当が、味わうような顔でこちらを見ているからだ。`,
      );
      era.println();

      await you.say_and_wait(
        `まずい……${teio.sex}はいつこんなものを覚えた`,
        true,
      );
      await era.printAndWait(
        `${you.name} は心のなかでまずいと思うが、${teio.sex}はすでに二歩を一歩にして ${you.name} の前へ来て、腕を取り、言う。`,
      );
      era.println();

      await teio.say_and_wait(
        `ごめんねみなさん、先約があるから。応援と厚意、ありがとう。またレース場で会おう。トレ～ナー～、テイオー${teio.adult_sex_title}と出発する？`,
      );
      era.println();

      era.print(`${you.name} は苦笑しつつ、返す——`);
      era.printButton(
        '「無敵のテイオーさまのそばに仕えるのが、拙者の使命です」（賢さ+30）',
        1,
      );
      era.printButton(
        `「できる限りを、我が${teio.adult_sex_title}」（ランダム3項目+15）`,
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  ws_95_5: (() => {
    const title = '放棄';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('テイオー、この話は真剣にしよう');
      era.println();

      await era.printAndWait(
        `${you.name} の手には医師からの資料と、自分で集めた材料がある。どれもトウカイテイオーの脚の現状を物語っている。`,
      );
      await era.printAndWait(
        `休養しなければ……次のレースを走り切ったとき、${teio.sex}の脚は一生の傷になるだろう。`,
      );
      era.println();

      await you.say_and_wait(
        `テイオー、キミの脚の構造は${teio.uma_sex_title}のなかでも特別だ。その構造が独自の走法を生むが、『帝王舞歩』は実際、自分の体を先食いしている。`,
      );
      await you.say_and_wait(
        '前回の失速も、その前のレース後の傷も、前兆にすぎない。キミにとっていちばん大切な両脚……完全に壊れる可能性がある',
      );
      era.printButton(
        '「医師も自分も同意している……しばらくレース場を離れ、休養してほしい」',
        1,
      );
      await era.input();
      await you.say_and_wait(
        'そのあいだ、全力で治療を助ける。学園側にもすでに話は通してある。これはキミの一生のためだ。',
      );

      await era.printAndWait(
        `${you.name} は唇を強く結び、頭を下げた担当を見て胸が痛むが、歯を食いしばる。これは${teio.sex}のためだ、と ${you.name} は心のなかで自分に言う。`,
      );
      era.println();
      await teio.say_and_wait('いや……');
      era.println();
      await era.printAndWait(
        `小さくて、だが確かな声が上がる。${you.name} は溜息をつく。こうなるのはわかっていた。`,
      );
      era.println();
      await era.printAndWait(
        `瞬くあいだに、${teio.teen_sex_title}は顔を上げている。${you.name} は液体が目尻に集まり、${teio.sex}のもともとサファイアのような目をさらに透き通らせるのを見る。`,
      );
      era.println();
      await teio.say_and_wait(
        '天皇賞（春）は諦められない……それって、ボクが自分でクラシック三冠の夢を捨てるのと同じだよ！じゃあ今までの努力……なんのためだったの？',
      );
      era.println();
      await teio.say_and_wait(
        'それに、こんな体で生まれたのは、これで走る夢を叶えるって証明なんじゃないの！他の結末は認めない……回避したくない！',
      );
      era.println();
      await era.printAndWait(
        `${teio.teen_sex_title}の意地を張った目が自分と向き合い、${teio.sex}の瞳に自分の姿が映る。${teio.sex}がいちばん親しい人が、今は${teio.sex}を「裏切った」……${you.name} は自分の像を見て、胸がざわつく。`,
      );
      era.println();
      await teio.say_and_wait('一生に一度のお願い……お願い');
      era.println();
      await era.printAndWait(`${you.name} は決める——`);
      era.printButton(`「トレーナーとして求める。次のレースは諦めろ」`, 1);
      era.print(
        '【これを選ぶと、トウカイテイオーは天皇賞（春）を強制回避する】',
        {
          offset: 1,
          width: 23,
        },
      );
      era.printButton(
        `「キミは自分の担当ウマ娘だ。夢を支えると、ずっと言ってきた」`,
        2,
      );
      era.print(
        `【これを選ぶと、テイオーの脚の怪我は不可逆になる。${teio.sex}と一緒に谷底へ落ち、支え合って登る覚悟はあるか？】`,
        { offset: 1, width: 23, color: buff_colors[3] },
      );
      let ret = await era.input();
      if (ret === 2) {
        era.print(
          `【警告。これを選ぶとテイオーの脚の怪我は不可逆になる。${teio.sex}と一緒に谷底へ落ち、支え合って登る覚悟はあるか？】`,
          { color: buff_colors[3] },
        );
        era.printButton('やめておく', 1);
        era.printButton('覚悟はできた！', 2);
        ret = await era.input();
      }
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title}は目に涙を含みながらも、結局は ${you.name} に押さえられた。${teio.sex}は黙って去り、夕陽が${teio.sex}の後ろに長い影を引く。`,
        );
      } else {
        await era.printAndWait(
          `${teio.teen_sex_title}は泣き笑い、${you.name} の手を握る。体温が触れた場所を温める。${you.name} は眉を寄せ、自分の選択が正しいのかわからない。`,
        );
        await era.printAndWait(
          `だが、トレーナーとは${teio.uma_sex_title}の夢を叶える仕事だ……そうだろう。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_95_25: (() => {
    const title = '春のテイオー';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('いいな……');
      era.println();
      await era.printAndWait(
        `トレーニングが終わったばかりで、${you.name} は担当とゆっくり寮へ戻る道を歩いている。${teio.uma_sex_title}${teio.adult_sex_title}は今、頭を振り、激しい運動でほどけた髪から汗が飛び、全身から湯気が立ち上っているのが見える。`,
      );
      await teio.say_and_wait('ん？トレーナー？なに言ったの？');
      era.println();

      await era.printAndWait(
        `${you.name} は、うっかり${teio.sex}を見入って心の声まで出してしまったことに気づき、慌てて取り繕う。`,
      );
      era.println();

      era.printButton('「最近の成績が、本当に素晴らしいと言ったんだ」', 1);
      await era.input();

      await teio.say_and_wait('ん～ふん？本当にそれだけ？');
      era.println();

      await era.printAndWait(
        `${you.name} は顔を逸らし、答えず、ついでにこっそり襟を立てて充血した顔を隠す。`,
      );
      era.println();

      await era.printAndWait(
        `小さな${teio.uma_sex_title}は ${you.name} を横目で見て、口を結んで笑い、それから突然、表情が沈む。`,
      );
      era.println();

      await teio.say_and_wait(
        'トレーナー……ボクたちの旅は、まだ終わってないよ。',
      );
      era.println();

      await era.printAndWait(
        `突然の問いかけに ${you.name} は振り返り、適当に冗談で返そうとして、${teio.sex}の真剣な顔を見て黙る。`,
      );
      await teio.say_and_wait(
        'ボクの過去の成績も、今の栄光も、これからの目標も、全部キミと分ける。だから一緒に、続けよう。',
      );
      await era.printAndWait(
        `${teio.teen_sex_title}は一字一句、${you.name} へこの本心を吐く。`,
      );
      era.println();

      era.printButton('「もちろん」', 1);
      await era.input();

      await era.printAndWait(`ふたりは揃って、目標の場所へ向かう——`);
    };
    f.title = title;
    return f;
  })(),
  os_lets_go_together: (() => {
    const title = '一緒に行こう！';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await teio.say_and_wait('ハチミツ🎶～');
      era.println();

      await era.printAndWait(
        `黄色いワンピースを着た小さな${teio.uma_sex_title}が陽を浴び、前方ではしゃぎながら歩き、余った活力を撒き散らしている。だが ${you.name} への気遣いからか、${teio.sex}は ${you.name} の視界から外れない。`,
      );
      await era.printAndWait(
        `${teio.sex}がこんなにのびのびしているのを見て、${you.name} も思わず笑い、${teio.sex}の歩幅に追いつく。`,
      );
      await era.printAndWait(
        'ほどなく人工の小川のそばへ着く。一般客向けの道ではなさそうだ——',
      );
      await era.printAndWait(
        `${you.name} がそう思ったところで、担当のサンダルはすでに水のなかの石のうえにある。${teio.sex}は ${you.name} へ片手を差し出す。`,
      );
      era.println();

      await teio.say_and_wait('一緒に来て、トレーナー！');
      await era.printAndWait(`${you.name} は決める——`);
      era.printButton('頷く（スタミナ+15）', 1);
      era.printButton('「いや、ルールは守ろう」（根性+15）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${you.name} も手を伸ばし、${teio.sex}を握る。体格に似合わない力で ${you.name} は引っ張られ、ふたりは水を踏んで歩き、楽しい体験だ。`,
        );
        await era.printAndWait(
          '——職員に見つかって注意されなければ、もっとよかった。',
        );
      } else {
        await era.printAndWait(
          `小さな${teio.uma_sex_title}は少し残念そうだが、${you.name} のそばへ戻り、${you.name} と並んで本道を歩いた。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_dance_or_kongfu: (() => {
    const title = 'ダンス……武道？これで帝王舞歩は鍛えられる？';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `木の硬い床にワックスがかかり、人影を映すその平面で、ひとりの${teio.uma_sex_title}が道着を着て、脚上げと発力を練習している。`,
      );
      era.println();

      await you.say_and_wait('止まれ、少し休め。もう充分だ。');
      era.println();

      await era.printAndWait(
        `${you.name} は自分で調合した、比率のちょうどいい生理食塩水の蓋を開け、${teio.sex}へ渡す。${teio.sex}は受け取り、小さな口で、一定の速度で飲み干す。`,
      );
      era.println();

      await you.say_and_wait('ああ……思ったより成果がある', true);
      era.println();

      await era.printAndWait(
        `${you.name} の担当は何か作品を見たのか、突然 ${you.name} に武を試したいと言い、功夫の技を走りへ通じさせ、とくに下半身の歩法を練って帝王舞歩を高めたい、と希望した。`,
      );
      era.println();

      await era.printAndWait(
        `${you.name} は${teio.sex}に負けて試させたが、思いのほか成果が出た。`,
      );
      era.println();

      await teio.say_and_wait('トレーナー、どう？');
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' はにこにこする担当を見て、こう返す——',
      ]);
      era.printButton('感覚に任せる（パワー＆根性+20、スキルPt+15）', 1);
      era.printButton('修業を先に（スピード+30、スキルPt+15、体力+200）', 2);
      era.printButton(
        `冷静に分析（スピード+15、スタミナ+20、賢さ+30、スキルPt+30）`,
        3,
      );
      const ret = await era.input();
      switch (ret) {
        case 1:
          await you.say_and_wait(
            'まずはハーッてやって、それからトォーッ、だな',
          );
          break;
        case 2:
          await you.say_and_wait('舞は武……極みへ至る修練だ！');
          break;
        case 3:
          await you.say_and_wait(
            'この訓練で体の協調を制御できると思う。重心の位置を変えて、ゴール直前の瞬間加速を作る、試してみるか？',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_honey_power: (() => {
    const title = 'ハチミツの力';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `${teio.sex}と外出すると何か起きる気がする、と ${you.name} は思いながら、隣で ${you.name} の腕を取る担当を見る。`,
      );
      await era.printAndWait(
        `いや、引っ張っている、と言うほうが正確だ。ときどき ${you.name} は、考えながら跳ね回る${teio.uma_sex_title}${teio.teen_sex_title}の歩幅についていけている自分が不思議になる。付き合っているうちに帝王舞歩の技が少し移ったのかもしれない。`,
      );
      await era.printAndWait(
        '付き合いは、多くのことを知らず知らず互いに移す……たとえば好みだ。',
      );
      era.println();

      await era.printAndWait(
        `${you.name} の担当は ${you.name} をベンチの下へ連れていき、一刻前に行きつけの屋台で買った特製ハチミツドリンクを大きな口で啜り始める。`,
      );
      await era.printAndWait(
        `濃い蜜が${teio.sex}の喉を通り、首に小さな曲線を描く。陽が${teio.sex}の片側を照らし、淡い白い肌に質感を足し、飲み込むときの筋肉の細かな動きまで浮き上がらせる……`,
      );
      await era.printAndWait(
        `買ったときは何も思わなかったのに、今は口が渇き、何か飲みたくなる。`,
      );
      era.println();

      await teio.say_and_wait('トレーナー？');
      era.println();

      await era.printAndWait(`${you.name} は慌てて返事する。`);
      era.println();

      await teio.say_and_wait(
        `トレーナー？${you.name} も渇いてるでしょ、飲む？`,
      );
      await era.printAndWait(
        `${teio.sex}はくすくす笑い、半分残ったハチミツドリンクを ${you.name} の眼前へ掲げ、誘うように見える。`,
      );

      await era.printAndWait(`${you.name} は——`);
      era.printButton('もう一杯買う（賢さ+20、好感+5）', 1);
      era.printButton(
        '「自分は無糖無味のお茶のほうが好きで……」（スタミナ＆根性+15）',
        2,
      );
      if (era.get('love:3') > 50) {
        era.printButton(
          `${teio.sex}の手のカップを受け取り、付いているストローで飲み干してから返す（スピード＆パワー+15、体力+150、恋慕+1）`,
          3,
        );
      }
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait(
            `${you.name} は笑って${teio.sex}の頭を撫で、自分の分を買いに行く。ハチミツドリンクを唇へ運び、指に残った${teio.uma_sex_title}の髪の香りと甘いハチミツが混ざり、陶然とする……`,
          );
          break;
        case 2:
          await era.printAndWait(
            `${you.name} は少し気まずい顔で咳払いし、担当の誘いを婉曲に断る。${teio.sex}は目を細め、さらに楽しそうに笑う。`,
          );
          break;
        case 3:
          await teio.say_and_wait('///////');
          era.println();

          await era.printAndWait(
            `${you.name} は悪戯心を起こし、${teio.sex}の手のカップを取り上げ、勢いよく一口飲み、何事もなかったようにフリーズした${teio.sex}の手へ戻す。`,
          );
          era.println();

          await teio.say_and_wait('んうんうん——');
          era.println();

          await era.printAndWait('……やりすぎた。');
          await era.printAndWait(
            `あと十分ほどきちんと謝り、顔を真っ赤にした${teio.sex}はようやく唸りを止め、立ち上がって ${you.name} の隣へ寄る。`,
          );
          await era.printAndWait(
            `歩き出す前、${you.name} は${teio.sex}が視線を避け、慎重にストローでもう数口飲むのに気づく……`,
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sr_wing_and_sky: (() => {
    const title = '双翼を負い、青天に触れる';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await you.say_and_wait('屋上か。少し久しぶりだ。', true);
      await era.printAndWait(`${you.name} は弁当を持ち、外へ出る。`);
      await era.printAndWait(
        `扉はすでに大きく開いており、${you.name} の眼前にいるのは ${you.name} の愛馬、${teio.name} だ。`,
      );
      era.println();

      await teio.say_and_wait(
        `やっぱりここが気持ちいいな～高いところは自由だよ。`,
      );
      era.println();

      await you.say_and_wait('キミが嬉しければいい。');
      era.println();

      await era.printAndWait(
        `そう言いながら、${you.name} は弁当を置き、整え始める。担当はまた何を思ったのか、${you.name} を屋上へ引っ張り、二人だけの午後茶会だと言う。${you.name} は菓子を持ち、自分でフルーツティーを淹れて、${teio.sex}についてきた。`,
      );
      era.println();

      await teio.say_and_wait('ねえ——');
      era.println();

      await era.printAndWait(
        `そよ風が吹き、${you.name} が顔を上げると、${teio.uma_sex_title}は足元をひねり、両手をわずかに上げて一回転し、目で ${you.name} と向き合い、言う。`,
      );
      era.println();

      await teio.say_and_wait(
        'トレーナーは知ってるよね、ボクが高いところへ登りたい夢。今、ボクたちの手で、幻だった念いはだんだん現実の階段になり、上へ送ってくれる。この先は……',
      );
      era.println();

      era.print(`${you.name} は返す——`);
      era.printButton(
        '「自分はずっと、キミの助力だ」（スピード＆スタミナ＆賢さ+20、体力+200、恋慕+1）',
        1,
      );
      era.printButton(
        '「成功を祈る。夢が叶ったら、またここで集まろう」（スピード+15、パワー＆根性+20、好感+5）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(
          `${teio.teen_sex_title}は身をかがめ、${you.name} へまぶしく笑う。`,
        );
      } else {
        await teio.say_and_wait('また約束だね、覚えててよ～');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_the_days_together: (() => {
    const title = 'キミと歩いた日々';
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait(
        `学園の中心に噴水があり、上に三女神の像が座っている。毎日、無数の${teio.uma_sex_title}や人がここで黙って祈り、願いを託す。`,
      );
      await era.printAndWait(
        `${you.name} は、担当に少し似た顔を見つめ、指でポケットの財布に触れる。願をかけるか……`,
      );
      era.println();

      await teio.say_and_wait('トレーナー！');
      era.println();

      await era.printAndWait(
        `${you.name} は振り返って担当に手を振るが、${teio.sex}は跳ねるように来て、人目も気にせず ${you.name} の手を取る。`,
      );
      await era.printAndWait(
        `${you.name} は${teio.sex}の顔を見る。正直……少し似ている。`,
      );
      era.println();

      await teio.say_and_wait(
        'んふん～ボクと一緒なのに、他の子のこと考えてる？',
      );
      era.println();

      await era.printAndWait(
        `——子供じゃない！${you.name} はそう言おうとして、担当の顔を見て、察して口を閉じる。`,
      );
      era.println();

      await teio.say_and_wait(
        `ふん……じゃあちょっと罰。${you.name} は今、願いをかけようとしてたでしょ。何を願うの？`,
      );
      era.println();

      era.printButton('「これからもよろしく」（好感+10、全能力+5）', 1);
      if (era.get('love:3') > 90) {
        era.printButton(
          '「想う、いや、ずっとキミのそばにいる」（恋慕+1、やる気上昇、ランダム2項目+10）',
          2,
        );
      }
      const ret = await era.input();
      if (ret === 1) {
        await teio.say_and_wait('願いじゃないじゃん……なにそれ。');
        era.println();

        await era.printAndWait(
          `だが ${you.name} は、願う内容を決めていなかった。`,
        );
      } else {
        await teio.say_and_wait('……許してあげる。次はないよ。');
        era.println();

        await era.printAndWait(
          `耳まで赤い小さな${teio.uma_sex_title}は ${you.name} の手を放す。`,
        );
        await era.printAndWait(
          `しばらくして ${teio.name} が去ったあと、${you.name} はここへ戻り、口を歪めて笑い、財布の硬貨をすべて池へ倒し、両手を合わせて、初めて本気で願をかける。`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_uma_shopping: (() => {
    const title = (teio) => `${teio.uma_sex_title}の……買い回り！`;
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      await era.printAndWait('女性の買い物に付き合うのは、大変だ。');
      await era.printAndWait('女性を商業施設へ連れていくのは、疲れる。');
      await era.printAndWait(
        `${teio.uma_sex_title}の買い物に付き合うのは、骨が髄まで疲れる。`,
      );
      await era.printAndWait(
        `不幸なことに、${you.name} は今、その第三階層にいる。`,
      );
      await era.printAndWait(
        `カートを押し——速度は${teio.sex}と比べ物にならない——リストと棚の品を照合する。それだけなら、一種ののんびりだ。`,
      );
      await era.printAndWait(
        `だが ${you.name} は、瞬くあいだにどこからともなく品で埋まるカートと、耳元を絶えず通り過ぎる気流の音を見て、思わず溜息をつく。`,
      );
      era.println();
      await teio.say_and_wait(
        'トレーナー、はやく！まだ買うものあるし、ボクひとりじゃ持てないから手伝って！来ないと、売り切れちゃうよ！',
      );
      await era.printAndWait(
        `${you.name} は空を仰いで叫び、運命を受け入れ、両脚を催して声のほうへ向かう——`,
      );
      era.printButton(
        '必死にテイオーのリズムについていく（スピード＆パワー＆根性+20、体力+200、好感+10）',
        1,
      );
      era.printButton(
        'あらかじめ決めたルートで先に目標へ着き、テイオーを待ち、詰めてから次へ（スタミナ+20、賢さ+30、好感+5）',
        2,
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
};
