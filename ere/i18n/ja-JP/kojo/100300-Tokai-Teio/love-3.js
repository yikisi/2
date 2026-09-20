/**
 * @file トウカイテイオー - 恋慕
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      await teio.say_and_wait('……わかんない。');
      await teio.print_and_wait([
        callname,
        ' に会うと、わけもなく心臓が速くなる。レース前と同じ反応……',
        you.sex,
        'が他の',
        teio.phy_sex_title,
        'と話してるのを見ると落ち着かないし、走ったあと',
        you.sex,
        'が微笑んで近づいてくると、体がもっと熱くなる……',
      ]);
      await teio.say_and_wait('うっ——どういうことなの！');
      await teio.print_and_wait(
        `友だちを聞いても、${teio.couple_title}は顔を赤くして逃げたり、はぐらかしたり、笑ってばかりでまともに説明しない。半ば冗談、半ば本気で、自分のトレーナーを好きなんじゃないか、と聞いてくる人もいる。くっ、そんなの……`,
      );
      await teio.print_and_wait(
        'そんなの、トレーナーに聞けるわけないでしょおお！！',
      );
      await era.printAndWait(
        `ベッドのうえでばたばたしたあと、髪をほどいた${teio.uma_sex_title}はふくらはぎを揺らし、趾先でベッドの縁をトントンと叩く。`,
      );
      await teio.say_and_wait(
        'もういいや。恋だって、テイオーさまには負けない。',
      );
      await teio.print_and_wait(
        `${you.name} の担当は、いつのまにか赤くなった顔を上げ、ふたりのこれからを勝手に決めてしまう……`,
      );
      // TALENTNAME:0 = 感情因子
      if (era.get('talent:3:0') !== 1) {
        era.println();
        era.print([teio.get_colored_name(), ' は [感受性豊か] になった！']);
      }
    };
    f.title = 'ときめき';
    return f;
  })(),
  74: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname トウカイテイオーがプレイヤーを呼ぶ名
     */
    const f = async (teio, you, callname) => {
      const ret = [];
      await era.printAndWait(
        `今日もいつもの一日で、${you.name} はいつもどおりグラウンドに立ち、担当の走る姿を見ている。`,
      );
      await era.printAndWait(
        `どれくらい経っただろう。${you.name} は考えずにはいられない。公園で${teio.sex}と出会ってから今まで、あまり時が経っていないようでもあり、${teio.sex}と多くのことを一緒に越えてきたようでもある。`,
      );
      await era.printAndWait(
        `思い出が次々と浮かぶ。${teio.sex}が汗を飛ばして必死に鍛える姿、${teio.sex}が目を細めて笑う顔、${teio.sex}が歯を食いしばってゴールを切るクローズアップ、${teio.sex}の若々しく活力に満ちた姿……`,
      );
      await era.printAndWait(
        `当初、大勢の前で${teio.sex}との契約を奪うようにサインしたのは、どんな気持ちだったのか。${teio.sex}が自分のキャリアを頂点へ連れていけると思ったからか。それとも${teio.sex}の走る姿、自信に満ちた陽の態度に感染し、惹かれたからか。`,
      );
      await era.printAndWait(
        `あるいは……${teio.sex}本人を見た、ただそれだけか。一目で、自分と${teio.sex}を担当にしなければならない衝動が生まれたのか。`,
      );
      era.println();
      await teio.say_and_wait(`トレーナー？`);
      era.println();

      era.printButton('「なに？」', 1);
      await era.input();

      await era.printAndWait(
        `${you.name} 専属の担当${teio.uma_sex_title}は、走っているうちにほどけた髪を片手で無造作に掻き上げ、ヘアゴムで結び直しながら、もう一方の手で ${you.name} が開けておいた水筒を受け取り、小さな口で飲み始める。`,
      );
      await era.printAndWait(
        `汗か水かわからない液体が白い肌を伝い落ち、${you.name} は慌てて視線を外すが、${teio.uma_sex_title}が髪を上げて見せたうなじに目が行く。`,
      );
      await teio.say_and_wait(`トレーナー、${you.name} どうしたの？`);
      era.println();
      await era.printAndWait(
        `${you.name} は言葉がまとまらないまま、わけのわからないことを口にする。`,
      );
      era.printButton(
        '「ん？ああ！なんでもない。どう見てるか、考えてただけだ」',
        1,
      );
      await era.input();

      await teio.say_and_wait(`……？`);
      era.println();
      await era.printAndWait(
        `小さな${teio.uma_sex_title}は笑いをこらえきれず、水筒を置き、頬を少し赤らめて振り返り、${you.name} の視線と向き合う。`,
      );
      era.println();
      await teio.say_and_wait(`じゃあ、${callname}はボクをどう見てるの？`);
      era.println();
      await era.printAndWait(
        `${teio.sex}は ${you.name} をじっと見つめ、視線に羞恥とわずかな期待が混じる。`,
      );
      era.println();
      await era.printAndWait(`${you.name} は——`);
      era.printButton(
        `「……今の自分の立場じゃ、言えないかもしれない」（関係を進める）`,
        1,
      );
      era.printButton(
        `「優秀で元気で可愛い、でも悪戯な${teio.child_sex_title}……あるいは${teio.younger_sibling_sex_title}、かな」（まだ進めない）`,
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1) {
        await teio.say_and_wait('じゃあ、どんな立場になりたいの？');
        await era.printAndWait(
          `${teio.teen_sex_title}は目をくるりと動かし、くすくす笑って問いを足す。`,
        );
        await era.printAndWait('この小鬼！');
        await era.printAndWait(`${you.name} は頭が重くなり、思わずこぼす。`);
        await you.say_and_wait(
          'ああ……ずっとそんな調子だと、これから一緒に暮らすのが心配だ。',
        );
        await teio.say_and_wait('い、一緒？');
        await era.printAndWait(
          `${teio.teen_sex_title}は慌てて下半分の顔を覆う。${you.name} も勢いで覚悟を決めた。`,
        );
        await you.say_and_wait(
          '自分は……最初から、ずっとキミと走り続けたいと思ってた。その誘いを、受けてくれるか？',
        );
        await teio.say_and_wait(`/////`);
        await era.printAndWait(
          `${teio.teen_sex_title}は両目を閉じ、大きく息をし、深く吸い込んでから手を下ろし、${you.name} をまっすぐ見る。`,
        );
        await teio.say_and_wait(
          '後悔しちゃだめだよ。無敵のテイオーさまは、意外と狭いんだから！',
        );
        era.println();
      } else {
        await teio.say_and_wait(`そうなんだ……`);
        await era.printAndWait(
          `${teio.uma_sex_title}は思わず唇を尖らせる。${you.name} は慌てて咳払いし、今日のトレーニング内容を読み上げ始めた。`,
        );
      }
      return ret;
    };
    f.title = '変わらないで';
    return f;
  })(),
  '89-hurt': (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('トレーナールーム');
      await era.printAndWait('沈黙。');
      await era.printAndWait(
        `${you.name} は眼前で目を閉じ、顔に水滴を落とし、体をわずかに震わせている${teio.uma_sex_title}${teio.teen_sex_title}を見ている。`,
      );
      await era.printAndWait(
        `それから ${you.name} はいつものように、温めた柔らかいバスタオルを手に取り、${teio.sex}の体を拭き、櫛とドライヤーで毛並みを整える。`,
      );
      await era.printAndWait(
        `あのことがあってから、${teio.sex}はよく ${you.name} の部屋の浴室を借りに来る。浴後は ${you.name} が体を乾かし、ついでにケアをする。今ではもう習慣だ。`,
      );
      await era.printAndWait(
        `拭き終えると、${you.name} は道具をそばの小さな机へ置き、担当の脚のマッサージを始め、${teio.sex}のリハビリを手伝う。`,
      );
      await era.printAndWait(
        `${you.name} の繭のある、やや粗い手が、${teio.uma_sex_title}${teio.teen_sex_title}にとっていちばん大切な足とふくらはぎを上下に撫で、ときどき軽い力で押す。`,
      );
      await era.printAndWait(
        `滑らかで弾力のある肌の感触が ${you.name} の指先へ返る。外見は逞しく美しい両脚だが、内側には危うさが潜んでいる。それらが${teio.sex}を支え、走らせ、レース場を駆けさせた。そして今は……`,
      );
      era.println();
      await teio.say_and_wait('ねえ、トレーナー。');
      era.println();
      await era.printAndWait(
        `${you.name} は顔を上げる。${teio.sex}が何を言うかは薄々わかっているが、それでも返す。`,
      );
      await you.say_and_wait('どうした、テイオー？');
      era.println();
      await teio.say_and_wait('ボク……キミは……これから、どうすればいいの？');
      era.println();
      await era.printAndWait(
        `${teio.sex}は顎を軽く引き、両脚を見る。かつて${teio.sex}と並んで戦った、今は生気もなく、戻るかもわからない相棒を。同時に、${you.name} も見ている。`,
      );
      era.printButton(`「これが、自分の答えだ」（関係を進める）`, 1);
      era.printButton(`「……」（まだ進めない）`, 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は小さな箱を取り出し、',
          teio.uma_sex_title,
          teio.teen_sex_title,
          'が反応するより先に、左足をそっと支え、包装を開け、中の指輪を',
          teio.sex,
          'の薬趾へ通す。',
        ]);
        await era.printAndWait(
          `${you.name} が自ら選んだ趾環は寸法がちょうどよく、固定できて、装用者の趾の動きを妨げない。`,
        );
        await era.printAndWait(
          `両手の腹で、${teio.uma_sex_title}の足にある血行を促すツボを、習慣のように軽く摘む。`,
        );
        await era.printAndWait(
          `それから ${you.name} は顔を上げ、下から上へ視線を運び、担当の真っ赤な顔と、涙を含んだような両目と向き合う。`,
        );
        era.printButton('「いいか？」', 1);
        await era.input();
        await teio.say_and_wait('……いいよ！');
        era.println();
        await era.printAndWait(
          `${teio.teen_sex_title}は泣き笑い、両腕を開く。${you.name} は立ち上がり、${teio.sex}を強く抱き、もう離さない。`,
        );
        // TALENTNAME:53 = 神の足
        if (!era.get('talent:3:53')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            ' は ',
            {
              color: buff_colors[2],
              content: '[神の足]',
            },
            ' を得た！',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name} は何を言いたいのか。何を言うべきか。何が言えるのか。結局は、溜息ひとつだった。`,
        );
        await era.printAndWait(
          `${you.name} は黙って残りの手順を済ませ、静かな${teio.teen_sex_title}を抱き上げて下ろし、部屋の外まで送り出す。`,
        );
      }
      return ret;
    };
    f.title = '契約は結ばれた';
    return f;
  })(),
  89: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (teio, you) => {
      const ret = [];
      await era.printAndWait('トレーナールーム');

      await teio.say_and_wait(`ハチミツ～`);
      era.println();
      await era.printAndWait(
        `${you.name} はあいづちを打ち、小さな${teio.uma_sex_title}を懐へ座らせ（${teio.sex}がもぞもぞしてはしゃぐのを防ぐため）、手にしたタオルで慣れた様子で${teio.sex}の髪を乾かす。`,
      );
      await era.printAndWait(
        'もう一方の手も休まず、マウスでパソコンのトレーニング資料を見ている。',
      );
      era.println();
      await teio.say_and_wait('ん……');
      era.println();
      await era.printAndWait(
        `小さな${teio.uma_sex_title}は冷蔵庫から出したハチミツ特製ドリンクを飲みながら、${you.name} の画面の資料も見ている。`,
      );
      era.println();
      await you.say_and_wait('……');
      era.println();
      await era.printAndWait('我慢できなくなった。');
      await era.printAndWait(
        `湯上がりの${teio.teen_sex_title}の香り、太ももに触れる肌、ときどき自分の下腹を撫でる${teio.uma_sex_title}の毛並み……`,
      );
      await era.printAndWait(
        `${you.name} は、血の流れが生理的な方向へ傾いたのを感じる。`,
      );
      era.println();
      await teio.say_and_wait('トレーナー～このページ、ずっとだよ。');
      era.println();
      await you.say_and_wait('……');
      era.println();
      await era.printAndWait(
        `${you.name} の腿のうえに座る${teio.sex}は自然に後ろへ凭れかかり、${you.name} は体が強張る。`,
      );
      await era.printAndWait(
        `続いて${teio.sex}の頭が ${you.name} の胸へ寄り、小さなウマ耳がくるりと回り、${you.name} の胸元へ貼りつく。`,
      );
      era.println();
      await teio.say_and_wait(`心臓、ちょっと速いよ。`);
      await era.printAndWait(`${you.name}——`);
      era.printButton('顔を下げ、担当の耳を含む（関係を進める）', 1);
      era.printButton('無理に立ち上がる（まだ進めない）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await era.printAndWait(
          `憑かれたように、${you.name} は顔を下げ、テイオーのウマ耳の先端を軽く銜える。口腔越しに、${teio.sex}が不自然に一度震え、すぐに静まり、黙って受け入れ、${you.name} の次を待っているのがわかる。`,
        );
        era.println();
        await you.say_and_wait(
          'テイオー……この先も、もっと遠いところまで、一緒に行ってくれるか。',
        );
        era.println();
        await era.printAndWait(
          `${teio.sex}の顔はすでに真っ赤で、何か小さく言い、はっきりと頷いた。`,
        );
        // TALENTNAME:62 = 淫身
        if (!era.get('talent:3:62')) {
          era.println();
          era.print([
            teio.get_colored_name(),
            ' は ',
            {
              color: buff_colors[2],
              content: '[淫身]',
            },
            ' になった！',
          ]);
        }
      } else {
        await era.printAndWait(
          `${you.name} は胸に浮かんだ、ごく当たり前の衝動を押さえ、${teio.uma_sex_title}を支え、${teio.sex}を横へ下ろして立ち上がり、咳払いして何事もなかったふりをする。${teio.name} は少し不満そうだ。`,
        );
      }
      return ret;
    };
    f.title = 'ずっと、一緒に';
    return f;
  })(),
  99: (() => {
    /**
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} tname 得た特性名
     */
    const f = async (teio, you, tname) => {
      const ret = [];
      await era.printAndWait(
        `${you.name} は清んだ空気を吸い、陽を浴びて歩いている。`,
      );
      await era.printAndWait(
        `突然、背後にさらさらという音がし、柔らかく弾力のある感触が腰の後ろへ来る。純白の袖を着けた両手が ${you.name} の体を強く抱きしめた。`,
      );
      era.println();
      await you.say_and_wait(
        `白昼堂々、${teio.uma_sex_title}に抱かれてる年上のコーチを、周りはどう見ると思う。`,
      );
      era.println();
      await teio.say_and_wait(
        `すごく幸せでしょ。ボクがそんな扱いされて、しかも損した顔してる人を見たら、一発海へ蹴り飛ばすけど。`,
      );
      era.println();
      await you.say_and_wait('命だけは助けてくれ。');
      era.println();
      await teio.say_and_wait('大丈夫。今のボクは、もう他人じゃないし。');
      era.println();
      await era.printAndWait(
        `${you.name} は余光で、${teio.sex}の尻尾が嬉しそうに揺れるのを見る。`,
      );
      era.println();
      await teio.say_and_wait('それに……今は他人もいないよ。');
      era.println();
      await era.printAndWait('確かに。');
      await era.printAndWait(
        `なぜか、${you.name} と${teio.sex}が恋人になってから、学園の催しで妙な賞を当てた。`,
      );
      await era.printAndWait(
        '賞品は、二人用クルーズの無料一日見学と、婚礼衣装のレンタル付き。',
      );
      await era.printAndWait(
        `${you.name} は当時のスタッフたちの計画どおりという目と、曖昧な微笑みを思い出し、苦笑する。`,
      );
      era.println();
      await you.say_and_wait('……そんなに密着されると、問題が起きやすい。');
      era.println();
      await teio.say_and_wait('今は真っ昼間だよ、それに船のうえだよ？');
      era.println();
      await you.say_and_wait('だから困るんだ。どう収めろというんだ。');
      era.println();
      await era.printAndWait([
        teio.get_colored_name(),
        {
          content: `「……トレーナー${you.adult_sex_title}って、担当の生徒に反応する変態なんじゃないの？」`,
          color: teio.color,
        },
        '（笑）',
      ]);
      era.println();
      await you.say_and_wait('違う……いや、なんとも……いや、違うはずだ！');
      era.println();
      await teio.say_and_wait('ふふ……じゃあ、説明して？');
      era.println();
      await era.printAndWait(
        `担当${teio.uma_sex_title}の体がさらに近づき、${you.name} は喉が渇き、心拍がおかしくなり、慌てて言う。`,
      );
      era.println();
      await you.say_and_wait(
        '自分の自制心に、幻想は抱いてない、というだけだ。',
      );
      era.println();
      await teio.say_and_wait(
        'でもボクは……もう、そういうこともわかっちゃったし……',
      );
      era.println();
      await era.printAndWait(
        `顔を赤らめた${teio.uma_sex_title}${teio.teen_sex_title}はごにょごにょ呟いて ${you.name} から離れる。心地よかった体温が遠ざかる。`,
      );
      await era.printAndWait(
        `ところが${teio.sex}はすぐ戻ってくる。担当は ${you.name} の前へ回り、上着の内側へ潜り込もうとする。`,
      );
      era.println();
      await you.say_and_wait('ますます体裁が悪い。');
      era.println();
      await teio.say_and_wait('かもね。');
      era.println();
      await you.say_and_wait('欲を煽られたら、どうする。');
      era.println();
      await teio.say_and_wait('そのとき考える。');
      era.println();
      await you.say_and_wait('……無責任だな。');
      era.println();
      await teio.say_and_wait('ふふ。');
      era.println();
      await you.say_and_wait('寒いか？');
      era.println();
      await teio.say_and_wait('ん……');
      era.println();
      await era.printAndWait(
        `船足は遅く、潮風も心地よい。それでも耳元の寒風は鋭く、気温が下がったのか。${you.name} は無意識に上着の端を開き、${teio.name} を自分の懐へ包む。白いウェディングドレスを着た——`,
      );
      await era.printAndWait(
        `——花童に見える——小さな${teio.uma_sex_title}が ${you.name} の黒い襟元から顔を出し、全身で ${you.name} に凭れる。`,
      );
      await era.printAndWait('ああ……これで温かい。');
      era.println();
      await teio.say_and_wait('……');
      era.println();
      await you.say_and_wait('……');
      era.println();
      await teio.say_and_wait('大丈夫だよ。');
      era.println();
      await you.say_and_wait('……？');
      era.println();
      await era.printAndWait(
        `懐の${teio.teen_sex_title}が、突然そんな一言を落とす。`,
      );
      await era.printAndWait(
        `凝視。眼前は ${you.name} を励ます微笑みと、疑いというものを知らない澄んだ瞳。`,
      );
      era.println();
      await teio.say_and_wait('目が、ちょっと逃げてるよ。');
      era.println();
      await you.say_and_wait('……');
      await era.printAndWait(
        `認めざるを得ない。${you.name} は今、少し茫然としていた——これから始まるのは、ふたりの新しい生活だ。`,
      );
      await era.printAndWait(
        `自分の人生を${teio.sex}へ半分渡し、同じく${teio.sex}も ${you.name} の半分を持つ。自分に、この重さを担えるのか。`,
      );
      era.println();
      await teio.say_and_wait(`絶対できるよ、${you.actual_name}。`);
      era.println();
      await era.printAndWait(
        `——${teio.child_sex_title}にこう慰められると、かえって気まずいし慌てる。`,
      );
      await era.printAndWait(
        `${you.name} は微笑み、手を${teio.sex}の頭へ置き、適当に撫でる。${teio.sex}は目を細め、気持ちよさそうに鼻歌を歌う。`,
      );
      await era.printAndWait('懐の至宝は、これほど美しい。');
      await era.printAndWait(
        `この${teio.uma_sex_title}は、汚れのない信念を持ち、そのために体まで捧げた。${teio.sex}の魂は光り輝き、太陽のように眩しい。`,
      );
      await era.printAndWait(
        `この${teio.teen_sex_title}……こそ、${you.name} が一度諦めかけた夢の化身だ。`,
      );
      era.printButton(`「${teio.sex}を抱きしめ、共に進む」（関係を進める）`, 1);
      era.printButton('「手を放し、その場に止まる」（まだ進めない）', 2);
      ret.push(await era.input());
      if (ret[0] === 1 && tname) {
        era.println();
        era.print([
          teio.get_colored_name(),
          ' は ',
          {
            color: buff_colors[2],
            content: `[${tname}]`,
          },
          ' になった！',
        ]);
      }
      return ret;
    };
    f.title = 'また明日';
    return f;
  })(),
};
