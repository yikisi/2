/**
 * @file マチカネフクキタル - 恋慕
 * @author ALEX
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  25: (() => {
    const title = 'ほのか';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        'ある休日、',
        kitaru.get_colored_name(),
        ' は、このところの出来事を考えていた。',
      ]);
      await kitaru.say_and_wait(
        [
          'ん、',
          callname,
          ' を思うと心臓が速くなるのは、どんな前兆なんでしょう？',
        ],
        true,
      );
      await kitaru.say_and_wait('ええ……きっと大吉のしるしですよね！', true);
      await kitaru.say_and_wait(
        ['そうです！ ', callname, ' は占いのとおり、私の運命の人なんです！'],
        true,
      );
      await kitaru.say_and_wait('ふふん、私の占いは外れませんから！', true);
      await kitaru.say_and_wait(
        'このまま従い続ければ、自分の幸せにたどり着ける、はず……？',
        true,
      );
      await kitaru.say_and_wait('……そう、ですよね？', true);
      await kitaru.say_and_wait(
        [
          'なのに ',
          callname,
          ' の指示は、ときどき占いとまったく違うのに、どうして私はまだ……',
        ],
        true,
      );
      era.printButton('「マチカネフクキタル？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        'あっ！ ',
        callname,
        '、こんなところで会えるなんて！',
      ]);
      await kitaru.say_and_wait('え！ 私、ですか？');
      await kitaru.say_and_wait(
        'ん……振り子占いをしたら、ここは考えるのにぴったりな場所だって出たんです！',
      );
      await kitaru.say_and_wait([
        callname,
        ' は、これからどこかへ行くんですか？',
      ]);
      era.printButton('答える', 1);
      await era.input();
      await kitaru.say_and_wait('おお！ ちょうどいい、一緒に行きましょう！');
      await kitaru.say_and_wait('え！ どうして、ですか？');
      await kitaru.say_and_wait('そ……それは……');
      await era.printAndWait([
        '自分でも、なぜ急にそんなことを言ったのかわからないらしい。焦った',
        kitaru.teen_sex_title,
        'は、無意識に耳を撫で始めた。',
      ]);
      era.printButton('「占いの結果、か？」', 1);
      await era.input();
      await kitaru.say_and_wait('そうですそうです！');
      await era.printAndWait([
        you.get_colored_name(),
        ' の、含みのある視線に気づいたのか、',
        kitaru.get_colored_name(),
        ' の頬がほんのり赤くなる。',
      ]);
      await kitaru.say_and_wait('とにかく、開運になるんです！');
      await era.printAndWait([
        'その後、',
        kitaru.sex,
        'の食い下がりに根負けして、日用品の買い出しに付き合うことになった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  49: (() => {
    const title = '愛欲';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        'ある夜、ベッドに横になった ',
        kitaru.get_colored_name(),
        ' は、今日も占いで同級生の悩みを解いてあげたことを、得意げに思い返していた。',
      ]);
      await kitaru.say_and_wait(
        'そういえば、最近のみんなの占い、恋愛が多い気がします。',
        true,
      );
      await kitaru.say_and_wait('えへへ、私って恋愛の達人、かも。', true);
      await kitaru.say_and_wait('……恋愛、ですか。', true);
      await kitaru.say_and_wait(
        '自分の恋愛運、まだ占ったことないんですよね……',
        true,
      );
      await kitaru.say_and_wait(['……', you.get_colored_actual_name()], true);
      await kitaru.print_and_wait(
        'その話題を思っただけで、担当トレーナーの姿が頭に浮かぶ。',
      );
      await kitaru.print_and_wait(
        'トレーニング中の顔。一緒に占ったときの顔。おみくじを解いてくれたときの顔。',
      );
      await kitaru.print_and_wait(
        '普段は特別に感じなかったはずなのに、いま思い返すと、一つひとつの細部がやけにはっきりしている。',
      );
      await kitaru.print_and_wait(
        '汗を拭くとき首筋を撫でた指。マッサージで足裏に触れた温かい掌。アイアンクローで耳の根を掠めた刺激まで。',
      );
      await kitaru.print_and_wait(
        'ルームメイトはもう眠っているはずだ。かすかな寝息まで聞こえる。',
      );
      await kitaru.print_and_wait(
        'なのに自分だけが寝返りを打ち、眠れない。下腹が、ほんのり熱い。',
      );
      await kitaru.print_and_wait(
        '布団をはねると、うっすら汗をかいた両脚が、ねっとりと揃っていて、膝の内側の柔らかい肉が擦れ合っている。',
      );
      await kitaru.say_and_wait('ふぅ……');
      await kitaru.say_and_wait('やっぱり、占いましょう。');
      await kitaru.print_and_wait('枕元のタロットを取り出した。');
      await kitaru.say_and_wait('一枚だけ、簡単に……');
      era.println();
      era.printButton('星・正位置（関係を進める）', 1);
      era.printButton('世界・逆位置（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.say_and_wait('心のままに、流れに乗る、ですか？');
        await kitaru.say_and_wait('えへへ、当然ですよね！');
        await kitaru.say_and_wait('だって、決めた運命の人なんですから！');
        await kitaru.say_and_wait('んっ……');
        await kitaru.print_and_wait('熱が、さらに募る。');
        await kitaru.print_and_wait(
          'もともと決まっていた答えを占いが肯定したあと、さっきまでタロットを摘んでいた右手は、いつの間にか寝間着の中へ入り、胸に触れていた。',
        );
        await kitaru.print_and_wait(
          '指先が胸の脇を撫で、もう一方の手が下腹をそっと押す。中指と人差し指を揃えて、すでに湿った下着の中へ。',
        );
        await kitaru.say_and_wait('あっ！');
        await kitaru.print_and_wait(
          '最初は不慣れさからくる短い鈍い痛み。それから、慣れてくるにつれて広がる、ぞくぞくした快感。',
        );
        await kitaru.print_and_wait(
          '寝ているルームメイトに気づかれないよう唇を噛む。それでも、快感に負けて深く入る指が、抑えきれない吐息を漏らさせる。',
        );
        await kitaru.say_and_wait([you.get_colored_actual_name(), '……っ……']);
        await kitaru.print_and_wait([
          callname,
          ' と握手したときの、少しざらついた人差し指を思い出す。あの指が自分の中に入ったら、どれほど容赦なく扱うだろうか、と想像する。',
        ]);
        await kitaru.print_and_wait([
          '掻いて、擦って、焦らして、最後の痙攣まで。トレーナーに発情してしまう、失格の',
          kitaru.uma_sex_title,
          'を、思いきり罰するように。',
        ]);
        await kitaru.say_and_wait([you.get_colored_actual_name(), '！']);
        await kitaru.say_and_wait('んっ！！！');
        await kitaru.print_and_wait(
          '全身が震え止まない。白い下着が、噴き出した愛液でぐしゃぐしゃになった。',
        );
        await kitaru.say_and_wait('えへへ……好き、です……');
      } else {
        await kitaru.say_and_wait('はあ……');
        await kitaru.say_and_wait('いったん、止まる、ですか……');
        await kitaru.print_and_wait([
          'ざわつく体をこらえ、',
          kitaru.get_colored_name(),
          ' は布団を頭まで被った。',
        ]);
        await kitaru.print_and_wait([
          'それでも翌朝、びしょ濡れの下着と、発情で立った乳首が、',
          kitaru.get_colored_name(),
          ' の夢が望んだほど穏やかではなかったことを物語っていた。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  '74-1': (() => {
    const title = '熱恋';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        'いつものトレーニングを終え、',
        callname,
        ' と一緒に事務所へ戻った。',
      ]);
      await kitaru.print_and_wait([
        callname,
        ' から受け取った水杯。がぶがぶ飲みたかったのに、',
        callname,
        ' に止められて、ちびちびと喉を通す。',
      ]);
      await kitaru.print_and_wait([
        callname,
        ' がタオルを取ったとき、合わせて頭を差し出し、さりげなくジャージのファスナーを下げて、汗で透けたシャツの下に見える大きな胸を ',
        callname,
        ' に見せた。',
      ]);
      await kitaru.print_and_wait([
        callname,
        ' がきまり悪そうに顔を背けると、わざと腕を掴んで、次のトレーニング計画を尋ねる。',
      ]);
      await kitaru.print_and_wait(
        '甘い空気が、事務所のなかにじわじわ広がっていく。',
      );
      await kitaru.print_and_wait([
        '最後は、距離感のない動きが過ぎて、',
        callname,
        ' のアイアンクローを食らうのがお決まりだ。',
      ]);
      await kitaru.print_and_wait('……');
      await kitaru.print_and_wait([
        '最初に ',
        callname,
        ' と出会ったとき、自分はどんな気持ちだったんだろう。',
      ]);
      await kitaru.print_and_wait(
        '死にかけの者が、唯一見える藁にすがったみたいに？',
      );
      await kitaru.print_and_wait('船の残骸に掴まったオデュッセウス？');
      await kitaru.print_and_wait('霊芝を食べて死を逃れた神農？');
      await kitaru.print_and_wait('あるいは、素戔嗚尊に出会った天照大神？');
      era.printButton('「フクキタル、書類を出してくる。少し休んでて……」', 1);
      await era.input();
      await kitaru.print_and_wait([
        '甘い空気から引き剥がされ、',
        kitaru.get_colored_name(),
        ' に残ったのは、ぽっかり空いた虚しさだけだった。',
      ]);
      await kitaru.print_and_wait([
        callname,
        ' の上着がかかった椅子にどかりと座り、誰もいない事務所をぼんやり見つめる。',
      ]);
      await kitaru.print_and_wait([
        '振り子、サイコロ、琥珀。いろいろな口実で ',
        callname,
        ' に渡した占い道具のなかに、タロットももちろんある。',
      ]);
      era.println();
      era.printButton('恋人・正位置（関係を進める）', 1);
      era.printButton('月・正位置（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.print_and_wait('予想どおり。');
        await kitaru.say_and_wait('好き……');
        await kitaru.say_and_wait(['好き、', callname, '……']);
        await kitaru.print_and_wait([
          '何度も繰り返したあとでも、まだ ',
          you.get_colored_actual_name(),
          ' の名前を呟いている。参拝の道に、この',
          you.phy_sex_title,
          'が踏み込んできた事実を、自分に言い聞かすように。',
        ]);
        await kitaru.print_and_wait(
          '好きな人の匂いにつつまれて、トレーニングを終えて冷めるはずの体が、かえって熱を帯びていく。',
        );
        await kitaru.say_and_wait('はあっ……ふふっ……');
        await kitaru.print_and_wait([
          '椅子の背の上着の袖口を鼻先に当て、片手を、汗かそれ以外かでまた濡れた下着の中へ入れる。',
        ]);
        await kitaru.say_and_wait([you.get_colored_actual_name(), '……']);
        await kitaru.print_and_wait([
          callname,
          ' の名前を呼びながら、指でぬるぬるの穴の中を掻き回す。',
        ]);
        await kitaru.say_and_wait([
          you.get_colored_actual_name(),
          '……',
          you.get_colored_actual_name(),
          '～❤️',
        ]);
        await kitaru.print_and_wait([
          you.get_colored_actual_name(),
          ' の匂いが染みた上着を銜え、短い息をつき、口の端から涎が落ちる。',
        ]);
        await kitaru.print_and_wait([
          '足りないように、指の掻き回しが激しくなる。ある抽送で、とろんとしたオレンジの瞳が微かに膨らみ、体を反らした。',
        ]);
        await kitaru.say_and_wait('んっ❤️……ひぃぃっ❤️！！！');
        await kitaru.print_and_wait(
          '吸水用ではないジャージのパンツは、溢れた愛液を止められず、事務所の椅子に濡れた跡を残した。',
        );
        await kitaru.print_and_wait([
          kitaru.get_colored_name(),
          ' という下品な',
          kitaru.uma_sex_title,
          'の、みっともない匂いが、事務所いっぱいに満ちる。',
        ]);
        await kitaru.print_and_wait([
          'どうしよう。',
          callname,
          ' は、きっと気づきますよね。',
        ]);
        era.drawLine();
        era.printButton('ドアを開ける', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' が見ると、',
          kitaru.get_colored_name(),
          ' は落ち着かなさそうに謝ってきた。',
        ]);
        await kitaru.say_and_wait([
          'あああっ！ ',
          callname,
          '！ 本当にすみません！',
        ]);
        await kitaru.say_and_wait('コーヒーを淹れようとしただけなんです！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の下半身はほとんどコーヒーまみれで、同じく濡れた椅子と上着も、',
          kitaru.uma_sex_title,
          'の体温で温められてコーヒーの香りを放っている。',
        ]);
        era.printButton('「大丈夫か？」', 1);
        await era.input();
        await kitaru.say_and_wait('……だ……大丈夫です。');
        await era.printAndWait([
          'あのときコーヒーはもう冷めていてよかった。',
          kitaru.get_colored_name(),
          ' が火傷していたら大変だ。',
        ]);
      } else {
        await kitaru.say_and_wait('はあ……');
        await kitaru.say_and_wait(
          '占いで月が出ると、不安や迷い、恐れを示すことが多いんです。未来への迷いだったり、知らない状況への不安だったり。',
        );
        await kitaru.print_and_wait('恐れを抱き、自信がなく、不安で感情的。');
        await kitaru.print_and_wait([
          'こんな自分に、',
          callname,
          ' の愛を受ける資格なんて、あるんでしょうか。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  '74-2': (() => {
    const title = '告白';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait('トントン、トントン');
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        'いつものように、',
        kitaru.get_colored_name(),
        ' という少女が、また ',
        you.get_colored_name(),
        ' の家の玄関を叩いた。',
      ]);
      await era.printAndWait([
        'そう、事務所でも、トレセンの寮のドアでもない。',
      ]);
      await era.printAndWait([
        '最初は、開運道具を預かってもらうついでに、',
        you.get_colored_name(),
        ' の住所を知っただけだった。',
      ]);
      await era.printAndWait([
        'それから開運道具だけでなく、トレーニング計画の相談、遊びに行こうという誘い、「今日は大吉です」という曖昧な理由まで、',
        you.get_colored_name(),
        ' を訪ねてくるようになった。',
      ]);
      await era.printAndWait(
        'スリッパを一足、コップを一つ、箸を一膳、余分に置いた。',
      );
      await era.printAndWait([
        you.get_colored_actual_name(),
        ' というトレーナーの生活は、もう ',
        kitaru.get_colored_name(),
        ' の痕跡でいっぱいだ。',
      ]);
      await era.printAndWait('トントン、トントン');
      await kitaru.say_and_wait([callname, '！ いますか？']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は、待ちきれなくなってきたらしい。',
      ]);
      era.printButton('ドアを開ける', 1);
      await era.input();
      await era.printAndWait([
        '仮に、',
        you.get_colored_name(),
        ' と血のつながりがない異性を想像してみる。',
      ]);
      await era.printAndWait([
        '毎日くっついてきて、',
        you.get_colored_name(),
        ' の家にも自由に出入りできる。平日は学園の寮に住んでいるのに、出かけるときはやけに儀式めいて外で待ち合わせる。その二人は、どんな関係だろう。',
      ]);
      await era.printAndWait([you.get_colored_name(), ' はドアを開けた。']);
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        '玄関にいたのは、勝負服を着た ',
        kitaru.get_colored_name(),
        ' だった。',
      ]);
      await era.printAndWait(
        '青と白のセーラー服が、整った体つきを引き立てている。',
      );
      await era.printAndWait(
        '走ってきたせいか、露出した両肩に細かい汗が並んでいる。',
      );
      await era.printAndWait(
        'その下はシールだけを貼った誘うような胸が、白い生地に形をはっきり浮かべ、呼吸に合わせて上下している。',
      );
      await era.printAndWait([
        'トレーナーである ',
        you.get_colored_name(),
        ' は知っている。',
        kitaru.uma_sex_title,
        'がこの服を着るのは、ごく大事な場だけだ。',
      ]);
      await kitaru.say_and_wait('あの……');
      await kitaru.say_and_wait('中に、入れてくれませんか？');
      await era.printAndWait([
        '彼女は顔を上げて ',
        you.get_colored_name(),
        ' を見た。オレンジの瞳が、湿った霧を帯びている。',
      ]);
      await era.printAndWait(
        '食事のときも、わざと顎を上げて飲み込む仕草で、引っ張られて張ったセーラー服の下の重い胸を、さらに目立たせた。',
      );
      await era.printAndWait(
        '食後の暇つぶしでは、ソファで白いストッキングの脚を重ねて擦り、腰の絵馬が当たって音を立てた。',
      );
      await era.printAndWait([
        'もう深夜だというのに、',
        kitaru.get_colored_name(),
        ' は帰る気配を見せず、部屋は気まずい沈黙に沈んだ。',
      ]);
      await kitaru.say_and_wait([you.get_colored_actual_name(), '……']);
      await era.printAndWait([
        you.get_colored_name(),
        ' の名前を呼んで、',
        kitaru.get_colored_name(),
        ' は傍へ来て座った。',
      ]);
      await kitaru.say_and_wait([
        'あの、',
        callname,
        ' には、わかりますよね……好き、です……',
      ]);
      await kitaru.say_and_wait(
        'こんなに迷惑をかけてるのに、それでも運勢を追いかけて走る私に、付き合ってくれる……',
      );
      await kitaru.say_and_wait('温かいんです……たくさん、好運をくれました。');
      await kitaru.say_and_wait(
        'だから、よければ、今度は私からもお返しさせてください……',
      );
      await kitaru.say_and_wait('小福を、あなた専用の開運道具にしてください。');
      await era.printAndWait([
        '傍らの ',
        kitaru.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' の手を握る。',
        kitaru.uma_sex_title,
        'の、少し高い体温が掌から伝わってくる。',
      ]);
      era.printButton('受け入れる（関係を進める）', 1);
      era.printButton('断る（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.say_and_wait('ちゅ……ちゅる……ぷちっ……ぐちゅ……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の顎を上げさせ、舌と舌が離れがたく絡み、涎の銀糸が空で切れた。',
        ]);
        await kitaru.say_and_wait('んっ……ぐ……');
        await era.printAndWait(
          '少し離れて、また情欲を煽る深いキス。担当の匂いを、好きなだけ吸い込む。',
        );
        await era.printAndWait([
          '十指を組み、',
          you.get_colored_name(),
          ' は ',
          kitaru.get_colored_name(),
          ' をソファへ押し倒した。',
        ]);
      } else {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' を、トレセン学園まで送った……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '良縁';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は聞いたことがある。耳の大きい',
        kitaru.uma_sex_title,
        'は性欲が強い、と。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は聞いたこともある。長距離を走る',
        kitaru.uma_sex_title,
        'は性欲が強い、と。',
      ]);
      await era.printAndWait('以前は、半信半疑だったかもしれない……');
      await era.printAndWait([
        'いまの ',
        kitaru.get_colored_name(),
        ' は、その言い伝えの見本と言っていい。',
      ]);
      await era.printAndWait(
        '体にはもう精液の跡がつき、使い終わったコンドームが飾りのようにぶら下がり、穴からは濃い精がまだ止まらず溢れている。',
      );
      await era.printAndWait([
        'それでもこの妖艶な栗毛は、ちぎれた言葉で、精一杯 ',
        you.get_colored_name(),
        ' に求愛している。',
      ]);
      await kitaru.say_and_wait('うっ……');
      await kitaru.say_and_wait('❤️大吉❤️');
      era.drawLine({ content: 'しばらくして' });
      await era.printAndWait(
        'している最中は、あと始末がどれほど大変かなど考えていなかった。体液でべたつく制服とトレーナーの服が、ガタガタ鳴る洗濯機に放り込まれる。',
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は、着替えを持ってきていただろうか……',
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait('気分……どうでした？');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は裸足で床を踏み、',
        you.get_colored_name(),
        ' のシャツを着ている。',
      ]);
      await era.printAndWait([
        '湯気をまとって、',
        you.get_colored_name(),
        ' の前で一回転した。',
      ]);
      await era.printAndWait(
        'サイズは合っていない。袖口を二、三回折ってやっと手が現れ、裾は太ももまで届く。普段は服の下に隠れていた美しい胸の谷間は、言うまでもない。',
      );
      await era.printAndWait(
        'だからこそ、尻尾が少し動くだけで、その下の大事な場所が見えてしまう。',
      );
      era.printButton('「風邪をひくなよ。」', 1);
      era.printButton('「よく似合ってる……」', 2);
      await era.input();
      await era.printAndWait([
        'そう言われた ',
        kitaru.get_colored_name(),
        ' は、尻尾をさらに激しく振る。',
        kitaru.uma_sex_title,
        '用ではない裾が、とうとう捲れ上がった。',
      ]);
      await era.printAndWait('さっきの激しい情事の跡が、はっきり残っている。');
      await era.printAndWait(
        'いつの間に、こんなことに慣れてしまったのだろう。',
      );
      await era.printAndWait(
        'セックスはどんどん激しくなり、さっきの最後など、フクキタルの気持ちなど構わず、オナホのように突いただけだった。',
      );
      era.printButton('「さっきの感触はどうだった？」', 1);
      era.printButton('「次は優しくしたほうがいいか？」', 2);
      await era.input();
      await kitaru.say_and_wait([
        'え……どうして ',
        callname,
        ' が、そんなことを？',
      ]);
      await kitaru.say_and_wait('ん、嫌い、じゃないです……');
      await kitaru.say_and_wait('むしろ、好き、です……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' にとっては、こうした乱暴で、強制が混じり、いくらか辱めさえ含む営みのほうが、より強い安心と充足を得られるのかもしれない。',
      ]);
      await kitaru.say_and_wait([
        'だから……',
        callname,
        '、これからも、小福を好きなだけ使ってください。',
      ]);
      era.println();
      if (era.get('talent:56:淫身') !== 2) {
        era.print([
          kitaru.get_colored_name(),
          ' は ',
          {
            color: buff_colors[2],
            content: '[淫身]',
          },
          ' になった！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '依存';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        '今日はほとんど一日中、',
        callname,
        ' と神社で忙しかった。',
      ]);
      await kitaru.print_and_wait([
        '普段は何でもできてしまう ',
        callname,
        ' が、初めてで不器用な顔をしていたのを思い出して、つい笑ってしまった。',
      ]);
      await kitaru.print_and_wait([
        'その笑い声が、当然のように ',
        callname,
        ' の視線を集めた。',
      ]);
      await kitaru.say_and_wait('ぐっ……');
      era.drawLine({ content: '数分後' });
      era.printButton('手を伸ばす', 1);
      await era.input();
      await kitaru.print_and_wait([
        callname,
        ' の手が腰、尻、そして膝の裏まで撫でていく。',
      ]);
      await kitaru.say_and_wait('はあっ……');
      await kitaru.print_and_wait([
        '両脚が緩み、',
        callname,
        ' の合図どおり、尻を突き出して本殿の壁に伏せた。',
      ]);
      era.printButton('衣服をほどく', 1);
      await era.input();
      await kitaru.print_and_wait(
        '巫女である自分を示す緋袴が床へ滑り落ちるのを、ただ見ている。尻に、熱いものが当たる。',
      );
      await kitaru.print_and_wait(
        '脚を閉じると、ぬるい液体が太ももを伝う。下腹の疼きは、ますます強くなる。',
      );
      era.printButton('挿入する', 1);
      await era.input();
      await kitaru.print_and_wait('二人の相性を占う、肉棒占いが始まった。');
      era.drawLine();
      await kitaru.say_and_wait('はあっ……');
      await era.printAndWait([
        '今日の ',
        kitaru.get_colored_name(),
        ' はいつもと違い、自分から ',
        you.get_colored_name(),
        ' に求めてきた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が入れただけで、担当の',
        kitaru.uma_sex_title,
        'の敏感な体はほとんど絶頂に届きそうだ。焦点の合わない瞳が、何を考えているのかわからない。',
      ]);
      era.println();
      await kitaru.say_and_wait(
        '占いには二通りあります。ひとつは局に入ること。もうひとつは、局の外にいること。',
        true,
      );
      era.println();
      await kitaru.say_and_wait('すごい……頭が、ぼんやり……');
      era.println();
      await kitaru.say_and_wait(
        '占いは運命を覗き、天道に手を出す遊びです。占う者も占われる者も、局に入らなくてはいけない。',
        true,
      );
      era.println();
      await era.printAndWait(
        'オレンジ髪の少女は、抑えもせずに甘い声を上げる。普段は澄んだ柔らかい声が、ここではひどく淫らに響く。',
      );
      await kitaru.say_and_wait('ひゃあっ……あっ……');
      era.println();
      await kitaru.say_and_wait(
        [
          '自分は優秀な占い師とは言えない。あのとき ',
          callname,
          ' にぶつかったのも、ただの運かもしれない。',
        ],
        true,
      );
      era.printButton('尻を叩く', 1);
      await era.input();
      await era.printAndWait(
        '片手を離し、フクキタルの尻を強く叩く。少し被虐の気がある巫女は、さらに誘うような声を上げた。',
      );
      await kitaru.say_and_wait('……んあっ～');
      era.println();
      await kitaru.say_and_wait(
        'でも当時、占う側でも占われる側でもあった私は、間違いなく局に入っていました。',
        true,
      );
      era.printButton('胸を弄る', 1);
      await era.input();
      era.println();
      await kitaru.say_and_wait(
        [
          'だから、そうです、',
          you.get_colored_actual_name(),
          ' が私の運命の人なんです！',
        ],
        true,
      );
      era.println();
      await era.printAndWait(
        '両手でフクキタルの胸に登り、好きな形に揉み潰す。',
      );
      await kitaru.say_and_wait('あっ……あっ……');
      era.printButton('尻尾を引く', 1);
      await era.input();
      await era.printAndWait(
        '柔らかい栗色の尻尾には、ピストンで引き出した体液が、もう少し付いている。',
      );
      await era.printAndWait([
        '尻尾の根の感触と、胸を揉まれる快感が重なり、',
        kitaru.get_colored_name(),
        ' は今日いちばん高い声を上げた。',
      ]);
      await era.printAndWait(
        '本殿の御神体である鏡が、巫女のいまの幸せな顔を、はっきり映している。',
      );
      await kitaru.say_and_wait('これ……私？', true);
      await kitaru.print_and_wait(
        '情欲で赤く染まった顔。途切れ途切れに嗚咽する桜色の唇。とろんと半眼の、狐のような瞳。',
      );
      await kitaru.print_and_wait([
        you.phy_sex_title,
        'に壁へ押し付けられ、半脱ぎの巫女装束の下、桜色を帯びた体が抽送に合わせて上下している。',
      ]);
      await kitaru.say_and_wait(
        'うっ……白興様の前で、自分がこんなになるなんて……',
        true,
      );
      await kitaru.say_and_wait(
        '運命の人……運命の人は、責任を取ってくださいね！',
        true,
      );
      await kitaru.say_and_wait('うひぃぃぃぃ！！！！！');
      await era.printAndWait('ぽんっ！');
      await era.printAndWait([
        '抜いた瞬間、濃く粘る精液が巫女の穴口から溢れ、淫らな匂いが本殿に広がった。',
      ]);
      era.drawLine({ content: 'しばらくして' });
      await kitaru.say_and_wait('激しすぎました……');
      await era.printAndWait([
        '落ち着いているつもりでも、巫女装束に乾いた液体の跡が、さっきの淫らな',
        kitaru.uma_sex_title,
        'が本人だと物語っている。',
      ]);
      era.printButton('「白興様は怒らないのか？」', 1);
      await era.input();
      await kitaru.say_and_wait('え……');
      await kitaru.say_and_wait(
        'あの、白興様も、私が幸せになったのを見たら、喜んでくださると思います。',
      );
      await kitaru.say_and_wait('……たぶん、です。');
      await kitaru.say_and_wait('うっ……頭が熱くなって、つい……');
      await kitaru.say_and_wait([
        'でも、',
        you.get_colored_actual_name(),
        ' に対してだけ、ですからね！',
      ]);
      await kitaru.say_and_wait([
        'だって、',
        you.get_colored_actual_name(),
        ' は、私の運命の人なんですから！',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
