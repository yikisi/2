/**
 * @file シンボリルドルフ - 募集
 * @author 露娜俘虏
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_start(luna, you) {
    await era.printAndWait(
      `${you.name} は頭を掻き、浴室に溜まった水をしばらく見てから、両手を広げた。`,
    );
    await era.printAndWait(
      `朝早くから、浴室の設備がすべて止まっている。${you.name} はわかっていた。時間と手間をかけても、素直に動くとは限らない。`,
    );
    era.printButton('「仕事に行ったほうがマシだ。」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name} はさっぱりと扉を閉め、鞄を提げてトレセンへ向かった。`,
    );
    era.println();

    await era.printAndWait(
      `また新しい学期だ。${you.name} は思う。とにかく、トレセンは去年の憂鬱から抜け出すべきだ。`,
    );
    await era.printAndWait('新しい学期、新しい希望、新しい物語。');
    await era.printAndWait(
      `駅で電車を待つあいだ、${you.name} はホームに置かれた新聞を手に取った。颯爽としたウマ娘が描かれ、大きな四文字が並んでいる。`,
    );
    await era.printAndWait('シンボリルドルフ！');
    await era.printAndWait(
      `${you.name} は口笛を吹き、新聞を脇に挟んで電車に乗った。`,
    );
    await era.printAndWait(
      '——あのシンボリルドルフが出走する。すでに近頃の話題を独占している。',
    );
    await era.printAndWait(
      '仕事でも、日常の暇つぶしでも、人が集まる場所ならどこでも、熱を帯びた議論が聞こえる。',
    );
    await era.printAndWait('？？？「生徒会長、【皇帝】シンボリルドルフ！」');
    await era.printAndWait(
      '？？？「誰が、あの皇帝のトレーナーになれるのかしら？」',
    );
    await era.printAndWait(
      `？？？「そもそも${luna.sex}に、トレーナーは必要なのか？」`,
    );
    await era.printAndWait(
      '？？？「シンボリ家の最高傑作だぞ。デビュー前から万人に注目されるスターだ。はあ、とんでもない大人物だな！」',
    );
    await era.printAndWait(
      `そこまで聞くたび、${you.name} の胸は誇りで満ちた。あの皇帝の威名が、${you.name} と深く関わっているような気がする。`,
    );
    await era.printAndWait(
      `実際、${you.name} はシンボリ家に勤めたことがある。もっと言えば、シンボリ家でしばらく助手トレーナーをしていた。`,
    );
    await era.printAndWait(
      `偉い人の後ろで雑用をするだけで、名を上げる機会などなかった。だがその日々で、${you.name} はシンボリ家の若いウマ娘たちと打ち解けた。`,
    );
    await era.printAndWait(
      `なかでもルナという子は、${you.name} と影のように一緒にいた。`,
    );
    await era.printAndWait(
      `もう長いあいだシンボリ家へは行っていない。だがその経歴があるせいで、${you.name} も、トレセンにいるシンボリの面々も、互いに浅からぬ親しさを残している。`,
    );
    if (era.get('flag:当前声望') < 500) {
      await era.printAndWait(
        `あの頃を思い返すと、${you.name} は気分が晴れた。いつか、これほど強いウマ娘と肩を並べ、中央で名を上げたい。`,
      );
    } else {
      await era.printAndWait(
        `あの荒唐な日々を思い出すのはやめて、${you.name} は空へ長く息を吐き、誇りの下に隠れた不安を出した。新学期が始まる。この周回の担当は避けがたくシンボリルドルフと競うことになり、先々はあちこちで縛られるだろう。挫折しても、坦々と進んでほしい。`,
      );
    }
    era.println();

    await era.printAndWait(
      `学園へ入ると、人通りが極端に少ない——というより、門が閉まっていた。`,
    );
    await era.printAndWait(
      `${you.name} は、来るのが少し早すぎたことに気づく……いや、早すぎた。浴室と格闘すべきだった。`,
    );
    await era.printAndWait(
      `だがせっかく時間がある。少し歩こう。${you.name} は塀を越え、学園へ飛び込んだ。`,
    );
    await era.printAndWait('学園は静かだった。');
    await era.printAndWait(
      `${you.name} は好奇心から顔を上げ、あたりを見回す。普段、この時間に校舎へ入る者はいない。通常の時間なら、トレセンはいつも賑やかだ。`,
    );
    await era.printAndWait(
      `だがどこかおかしい。${you.name} は、誰かが泣いている声を聞いた気がした。`,
    );
    await era.printAndWait(`なぜか、${you.name} はこれまでになく焦り始めた。`);
    await era.printAndWait(`${you.name} は無意識に身体を動かす。`);
    await era.printAndWait('魂の何かが、あなたを動かしている。');
    await you.say_and_wait('急がないと！', true);
    await you.say_and_wait('あの子を見つけないと！', true);
    await era.printAndWait(
      `${you.name} は人目のない場所へ走り、息が切れてようやく気づいた。ここは私設のトレーニング場だ。`,
    );
    await era.printAndWait('そんなことはどうでもいい——！');
    await era.printAndWait(`${you.name} は駆け込み、半開きの扉を押した。`);
    era.println();
    await era.printAndWait(
      `ひとりのウマ娘が身体を丸めて倒れている。${luna.sex}は頭を押さえ、激しい痛みに襲われているようだ。`,
    );
    await era.printAndWait(
      `${you.name} は問いかけようとしたが、脚が釘のように地面に刺さった。`,
    );
    await era.printAndWait(
      `確かにシンボリルドルフだ——${you.name} は口を開き、喉が渇いた。`,
    );
    await era.printAndWait(
      `偉大な名と盛名の下で、${
        luna.sex
      }はまだ花ざかりの${luna.teen_sex_title}にすぎない。`,
    );
    await era.printAndWait(`同時に、${you.name} は激しく動揺した。`);
    await era.printAndWait('誰も信じないだろう。比類なき「皇帝」が——');
    await era.printAndWait('隙がないと伝えられるシンボリが——');
    await era.printAndWait(
      'すべてのウマ娘が「エデン」で走れることを願う存在が——',
    );
    await era.printAndWait(
      `人のいない場所で泣き、嘔吐しているなど。だが${you.name} をより動揺させたのは……`,
    );
    era.printButton('「君は——」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name} は、自分が狂ったのだと思った。だが${you.name} は知っている。あの子を忘れることなど、絶対にできない。`,
    );
    await era.printAndWait('——気が短く、子獅子のように牙を剥いていた子。');
    await era.printAndWait(
      '——絶対に負けず、得意げにあなたを山へ海へ連れていった子。',
    );
    await era.printAndWait(
      '——横暴で、それでも可愛く、永遠に忘れないと宣言した子。',
    );
    await era.printAndWait(
      `${you.name} の魂には、${luna.sex}の名が刻まれている。`,
    );
    await era.printAndWait(`${you.name} は、${luna.sex}の名を決して忘れない。`);
    era.printButton('「ルナ！」', 1);
    await era.input();

    await era.printAndWait(
      `弱った${luna.teen_sex_title}が、顔を上げてあなたを見た。`,
    );
    await luna.say_and_wait(`……${you.actual_name}……？`);
    await era.printAndWait(
      `言い終えると、${luna.sex}はついに支えきれず、よろよろと地面へ倒れた。`,
    );
    await era.printAndWait(
      `${you.name} は自分でも驚く速さで駆け寄り、${luna.sex}を抱きとめた。`,
    );
    await luna.say_and_wait('本当に、あなたなの……');
    await era.printAndWait(`そう言って、${luna.sex}は昏々と眠った。`);

    era.drawLine();
    await era.printAndWait(
      `シンボリルドルフ——そう呼ばれる前、${luna.teen_sex_title}の名はルナだった。`,
    );
    await era.printAndWait(
      `${luna.sex}は走るのが好きで、甘いものが好きで、だらけて過ごすのが好きだった。`,
    );
    await era.printAndWait(
      `家から期待される前、${luna.sex}はシンボリ家を困らせ、同時に溺愛される若様だった。`,
    );
    await era.printAndWait(
      'だが歳を重ねるにつれ、ルナの絶対的な実力、息苦しいほどの鋭さに、シンボリ家は驚喜した。',
    );
    await era.printAndWait(
      `${luna.sex}は、それほど強かった。あらゆる欲望を満たせるほどに。`,
    );
    await era.printAndWait('ルナは覚えている。ある日から、生活が変わった。');
    await era.printAndWait(
      `${luna.sex}はもうルナではない。これからは、${luna.sex}はシンボリルドルフだ。`,
    );
    await era.printAndWait('ひとりの人間が、どう空から別の人間になれるのか。');
    await era.printAndWait(`ルナは日夜悩み、ある日、${luna.sex}は——`);
    era.printButton('「ルナ……ルナ……！」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name} の呼びかけが、ようやく届いたのか。ルナは悠々と目を覚ました。`,
    );
    await era.printAndWait(
      `${luna.sex}は苦く笑い、自分は壊れてしまったのか、と思う。どうして ${
        you.actual_name_with_title
      } の声が聞こえるのか。`,
    );
    await era.printAndWait(
      `${you.sex}はトレセンにいる。だがあのときから、自分はもう${you.sex}を巻き込むまいと決めていた。`,
    );
    await era.printAndWait(
      `だがすぐ、${luna.sex}は鋭く悟る。ここは夢ではない。`,
    );
    era.drawLine();
    era.printButton('「ルナ、本当に君なのか？」', 1);
    era.printButton('「ルナが、シンボリルドルフなのか！？」', 2);
    await era.input();
    await era.printAndWait(`懐のルナを見て、${you.name} は思わず尋ねた。`);
    await luna.say_and_wait('やっと、私の傍へ来てくれた。');
    await era.printAndWait(
      `ルナは諦めたように、苦い微笑を浮かべた。それから、嬉し泣きをした。`,
    );
    await luna.say_and_wait(
      'もう少し早く来てくれていたら、私は……行って。今日のことは外へ漏らさないで。皇帝は、弱くあってはならない。',
    );
    await era.printAndWait(
      `${you.name} はルナの話を聞き終えないうちに、${luna.sex}はこの場所からあなたを追い出した。`,
    );
    await era.printAndWait(
      `${you.name} にははっきりわかっていた。${luna.sex}も、あなたを認めたのだ。`,
    );
  },
  /**
   * @param {CharaTalk} luna
   * @param {CharaTalk} you
   */
  async rec_end(luna, you) {
    await era.printAndWait(
      `それから数日、${you.name} は魂の抜けたような日々を送った。`,
    );
    await era.printAndWait(
      `ルナに会いたくないなら、${luna.sex}には会いに行かない。`,
    );
    await era.printAndWait(
      `これまで、${you.name} は${luna.sex}の意思に逆らえなかった。大人になり、トレーナーになっても、${luna.sex}が一言いえば、何であれ素直に従う。`,
    );
    await era.printAndWait(
      `${you.name} が落ち着かないなか、生徒会の幹事が勢いよくトレーナー事務室へ飛び込んできた。`,
    );
    await era.printAndWait(
      `${luna.sex}は ${you.name} を探しに来た。というより、${luna.sex} はあなた宛の手紙を持ってきた。`,
    );
    await era.printAndWait(
      '幹事「生徒会長、シンボリルドルフからの直接の指名です。」',
    );
    await era.printAndWait(
      `${luna.sex}は明らかに興奮しており、手紙をそのまま ${you.name} の手へ渡した。`,
    );
    await era.printAndWait(
      `${you.name} は作り笑いをして、この『厄介な荷物』を受け取った。`,
    );
    await era.printAndWait(
      `任務を終えた幹事は風のように走り去る。${you.name} は適当に笑って早退した。`,
    );
    await era.printAndWait(
      `それから ${you.name} は、できるだけ早く、数日戻っていなかった家へ帰り、扉をきつく閉めた。`,
    );
    await era.printAndWait(
      `${you.name} は家のいちばん奥の浴室へ走り、背で扉を死ぬほど押さえた。`,
    );
    await era.printAndWait(
      `${you.name} は手が震え続け、かなりの力を使って、やっと封筒を破った。`,
    );
    await era.printAndWait(
      `${you.name} が便箋を取り出す——真っ白な紙に、大きな二字だけが書かれていた。`,
    );
    await era.printAndWait('「救って」', {
      align: 'center',
      color: luna.color,
      fontSize: '3rem',
      fontWeight: 'bold',
      isParagraph: true,
    });
    await era.printAndWait(
      `${you.name} は力なく床に座り込んだ。浴室を掃除していなかったせいで、つい買ったばかりのズボンが溜まり水に浸かっている。`,
    );
    await era.printAndWait(`${you.name} はわかっていた。拒む権利はない。`);
    await era.printAndWait(
      `${you.name} にはわからない。シンボリルドルフ——ルナに、何が起きたのか。`,
    );
    await era.printAndWait(
      `${you.name} もわかっている。ルナの頼みを、自分は永遠に拒まない。`,
    );
    await era.printAndWait('前方に、どのような地獄が待っていようとも。');

    era.drawLine();
    await era.printAndWait([
      ' ',
      luna.get_colored_actual_name(),
      ' との契約に成功した。',
    ]);
  },
};
