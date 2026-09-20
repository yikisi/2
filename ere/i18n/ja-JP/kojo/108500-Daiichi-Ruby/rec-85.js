/**
 * @file ダイイチルビー - 募集
 * @author 梦露
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_start(ruby, you) {
    const ret = [];
    era.print(
      '今日のトレーニング場は、いつにも増して賑やかだった。声援、歓声、感嘆……',
    );
    await era.printAndWait(
      `感情の乗った声が、場に立つ${ruby.sex}のためだけに編まれている。視線は、その一人へ集まっていた。`,
    );
    era.println();

    era.print('新人トレーナーA「おい、こっちだ！」');
    era.print('新人トレーナーA「もう始まってるぞ！」');
    era.printButton('「今すぐ行く！」', 1);
    await era.input();

    await era.printAndWait(
      '新人トレーナー同僚「先輩が、よく見ておけって言ってたウマ娘……ほら、あの子だ。」',
    );
    era.println();

    await era.printAndWait(`友人の視線を辿り、${you.name} は気づいた——`);
    era.printButton('（かなり後方を走っているな……）', 1);
    era.printButton('（白タイツに短いブルマ……）', 2);
    ret.push((ret['hentai1'] = await era.input()));
    if (ret['hentai1'] === 2) {
      era.println();
      era.print('上の頭は無事だが、下の頭はもう火を噴いている。まったく。');
      era.print(
        `自分が完全に勃起しているのを確認したあと、${you.name} の胸に嫌な予感が浮かんだ。まさか、ロリコンなのか？`,
      );
      era.print(
        `${you.name} は場に立つ茶髪のウマ娘を見た。鍛えられた鑑識眼が、少女の身長がわずか140cmそこそこだと一目で見抜く。`,
      );
      era.print(`一瞬で、${you.name} の視線は交差する両脚の間に止まった。`);
      era.print(
        `赤いスポーツショーツの下、白いタイツが少女の秘部を隠している。だが ${you.name} の目には、ふっくらとした薄い雪のような割れ目が、もうあらわだった。豆腐より滑らかそうで、一口含みたくなる。`,
      );
      era.print(
        `かすかに、ショーツの中央に陰阜が描く誘うような細い筋が見える……`,
      );
      await era.printAndWait(
        '白タイツの太ももは明るい光の下で可愛いピンクを透かし、丸い小さな尻が揺れるたび、異様な美しさがあった。',
      );
    }
    era.println();

    await era.printAndWait('新人トレーナーA「おいおい、見惚れるなよ。」');
    era.println();

    await era.printAndWait(
      `${you.name} は慌てて顔を向け直した。視線の名残は、それでも少女の桃を透かす白い脛を掠めた。`,
    );
    era.println();

    era.print(
      '新人トレーナーA「前が完全に塞がってる。差を取り戻すのは厳しいだろ。」',
    );
    era.printButton('「そうだな。」', 1);
    era.printButton('「いや、大外からなら……」', 2);
    await era.input();

    era.print('新人トレーナーA「え？ 嘘だろ！」');
    await era.printAndWait(
      `ベテラントレーナーA「大した末脚だ。あれが噂の……華麗一族の、${ruby.name}。」`,
    );
    era.println();

    era.print(
      '華麗一族。政界と商界、そしてウマ娘の競走の世界で名を轟かせた血統。正統の後継者たちは、今も各地で光を放っている。',
    );
    await era.printAndWait('この国で、その名を知らない者はいないだろう。');
    era.println();

    await era.printAndWait(
      `すでにデビューした先輩たちなど眼中にないかのように、${ruby.name} は誰よりも速くゴールを駆け抜けた。`,
    );
    era.println();

    era.print(
      `新人トレーナーA「すごい！——……あれが噂の華麗一族、${ruby.name} か。完全に本格化してるな。」`,
    );
    era.printButton('（じゃあ、もうあまり背は伸びないのか？）', 1);
    await era.input();

    await era.printAndWait(
      `どんなトレーナーが傍に就くのだろう。今、${ruby.name} の周りには、一刻も早く募集したいトレーナーがすでに群がっていた。`,
    );
    era.println();

    era.print(`${you.name} 自身は——`);
    era.printButton('そこまでの自信はない。（募集を諦める）', 1);
    era.printButton('（あの走りを見て、立ち止まっていられるか！）', 2);
    era.printButton('（白タイツのロリ、いい匂い……）', 3);
    ret.push((ret['hentai2'] = await era.input()));
    if (ret['hentai2'] > 1) {
      era.println();

      await ruby.say_and_wait(
        'トレーナーの皆様。本日はこの場をお借りして、一つお伝えしたいことがございますわ。',
      );
      era.println();

      era.print(
        `${you.name} は執事から配られた、${ruby.name} の専属トレーナーを決める【選抜試験】の詳細資料を受け取った。`,
      );
      era.print(
        '【選抜試験】の期限は三十日。各試験に評価がつき、総合点で合格を決める。',
      );
      await era.printAndWait(
        '同点が出た場合は、新たな試験項目を追加する、と執事が補足した。',
      );
      era.println();

      await era.printAndWait(
        `${you.name} は資料を見た。社交ダンス、テーブルマナー……ほかにも様々な項目。三十日で一般人が習得できる内容ではないことだけは確かだった。`,
      );
      era.println();

      await ruby.say_and_wait(
        'ご質問がなければ、以上ですわ。貴重なお時間をいただき、ありがとうございました。',
      );
      era.println();

      era.print(
        `言い終え、人々を一瞥した ${ruby.name} の視線が、${you.name} と重なった。`,
      );
      await era.printAndWait(
        '優しい表情は消え、紅い瞳に愉悦と侮蔑という、まったく異なる二つの色が宿った。',
      );
      era.println();

      era.print(
        '学園から最も近い校外の道場が第一会場だ。試験内容はトレーナーの仕事と無関係だが、先輩トレーナーはすでに着替えて出発している。参加するか？',
      );
      era.printButton('（やめよう。）（募集を諦める）', 1);
      era.printButton('（……これは、むしろ好機と言えるかもしれない。）', 2);
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        era.println();
        await era.printAndWait(
          '選抜試験を突破した自分を想像し、道場へ向かうことにした。',
        );
      }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out1(ruby, you) {
    era.print('学園を出て、いちばん近い道場へ……');
    ruby.say('はあああっ！');
    era.print(
      `${ruby.name} の動きは流れるようで、素人のあなたにも、${ruby.name} が幼い頃から護身術を積んできたのが一目で分かった。`,
    );
    era.print(
      '【護身術の訓練を受け、一通りの型を習得すること。】嘘ではなかったらしい。',
    );
    era.printButton('（待て待て待て、今のをやれだと？？）', 1);
    await era.input();

    await era.printAndWait(
      '疑問が浮かぶのと同時に、すでに数名の参加者が自信を失っていた。',
    );
    era.println();

    await era.printAndWait(
      '執事「この程度で臆しては、先へ進めません。百般の鍛錬を経て生まれる自信こそ、最も輝く品格へと昇華します。」',
    );
    era.println();

    await era.printAndWait(
      `執事「皆様がこれから献身する相手は、華麗一族の令嬢——${ruby.name}。覚悟と自覚をお持ちください。」`,
    );
    era.println();

    await ruby.say_and_wait(
      'お話はここまでですわ。最終判断はわたくしがいたします。皆様は選抜試験に専心してくださいまし。',
    );
    era.println();

    era.print('誰かに特別指導を頼もうと思っていたが、今はどうする？');
    era.printButton('やめよう。自分でやる。', 1);
    era.printButton('頼む！', 2);
    if ((await era.input()) === 2) {
      era.println();
      era.print('では、誰に頼む？');
      era.printButton('大学の期末試験前を思い出す。答えはもう見えている！', 1);
      await era.input();
      await you.say_and_wait(
        '——決めた。白タイツの、仏頂面のお嬢さまだ。',
        true,
      );
      era.get('cflag:85:招募状态').special++;
    }
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out2(ruby, you) {
    era.print('次の試験会場はレストラン');
    era.print(
      `${you.name} はトレーナー室から現場へ着き、顔が強張った。見えたのは`,
    );
    era.print('——席がほぼ埋まっている。一箇所を除いて。');
    era.print(
      `周囲の興味津々な視線の中、${you.name} は仕方なく ${ruby.name} のすぐ傍へ座った。`,
    );
    era.print(
      '黒いスカートの裾が最も美しい景色を隠しているが、椅子の背は卓より少し高い。',
    );
    era.print(
      `${you.name} の視界では、均整の取れた白い美脚が、わずかに傾きつつまっすぐな優美な斜線を描いていた。`,
    );
    era.print('完全に気が緩んだとき、「異臭」が鼻を突いた。');
    era.print(
      '吸い込めば脳髄が溶け、心身が弛緩する、甘美な毒のような匂いだった。',
    );
    era.print('新人トレーナーB「おい、どうした？ 顔色が変だぞ。」');
    era.print('新人トレーナーC「どこか具合が悪いのか？」');
    era.print(
      'あなたの異様な表情と寄った眉に気づき、近くのトレーナーがナイフとフォークを置いて心配した。',
    );
    era.print(
      `${ruby.name} は周囲に反応せず、手のナイフを料理へ滑らせる。食器は音一つ立てず、あなたには見事な無声劇に見えた。脚付きグラスを握る指先まで細く、ただの水が高級ワインに見える……`,
    );
    era.printButton('（すごいな……）', 1);
    era.printButton('（握っているのが俺の棒ならいいのに……）', 2);
    if ((await era.input()) === 2) {
      era.get('cflag:85:招募状态').special++;
    }
    era.println();

    era.print(`食事、あるいは試験が終わり、${ruby.name} は席を立った。`);
    era.print(
      `${ruby.sex} の今日の上は濃紺の長袖で、精緻な花の刺繍が施されている。`,
    );
    era.print(
      '下は脹脛までの黒スカート。可憐な白い小さな足には、柔らかい底の革靴。',
    );
    era.print('絢爛な茶色の長髪を、赤い蝶が後頭部でまとめている。');
    era.print(
      '東洋人の美点を余さず示した精緻な顔立ちに、貴族らしいピンクの瞳。',
    );
    era.print('ただそこに立っているだけで、絵の中の傾国の美人のようだった。');
    era.print(
      `上下紺と黒の生地は上等で、素人の ${you.name} にも安くないのが一目で分かった。`,
    );
    era.print(
      `目を奪われた ${you.name} を見て、${ruby.name} が何を思っているかは分からない。`,
    );
    era.print(
      `${ruby.sex}は裾を摘んで別れの礼をし、伸びやかに、美しい小さな顔を上げて、音もなく ${you.name} へ微笑んだ。`,
    );
    await era.printAndWait('歯は見せない。だが、甘くてたまらない。');
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out3(ruby, you) {
    const ret = [];
    await era.printAndWait(
      'その後数日、あなたは教養と知識を続けて学び、再び護身術の復習へ戻った。結果——',
    );
    era.println();

    era.print('ベテラントレーナーA「降参だ！ もう——だめだ！」');
    await era.printAndWait(
      '新人トレーナーA「私も降参。そもそもトレーナーに、こんなものが必要なのか？」',
    );
    era.println();

    era.print('試験が進むにつれ、自ら棄権する人数が、不合格の人数を上回った。');
    era.printButton('私も降参する。（募集を諦める）', 1);
    era.printButton('必要だから、やらせているんだ。', 2);
    ret.push((ret['select'] = await era.input()));
    if (ret['select'] === 2) {
      ruby.say('明日の社交ダンスの試験、皆様は参加なさいますか？');
      era.print(
        '「社交ダンス」の三文字を聞いたあと、傍に残っていた同僚も次々と去った。',
      );
      era.print(
        `${ruby.name} は皆の会話など気にも留めず、淡々と通告したあと、視線をあなたへ向けた。色に、わずかな意外がある。`,
      );
      era.print(
        `${ruby.name} からは、あの日のレース場にあった情熱は感じられなかった。`,
      );
      era.print(
        'トレーナー選抜試験に参加したのも、「もしかしたら」という期待からだった。',
      );
      era.print(
        `残念ながら現実は ${you.name} に教えた。自分と ${ruby.name} の溝が、どれほど遠く、越えがたいかを。`,
      );
      era.print(
        `${ruby.sex}は険しい崖の上に生まれ、誰も触れられない高嶺の花だ。`,
      );
      era.printButton('（自分は釣り合わない。やめよう。）（募集を諦める）', 1);
      era.printButton(
        '（……だが、あの優れた走り、あの姿は、生涯忘れられないだろう。）',
        2,
      );
      ret.push((ret['select'] = await era.input()));
      if (ret['select'] === 2) {
        ruby.say(
          '……ここに残られたということは、次の試験にも参加なさる。そう理解してよろしいですわね？',
        );
        era.print(`美しい深紅の瞳が、まっすぐ ${you.name} を見つめた。`);
        era.printButton('「はい！！！」', 1);
        await era.input();

        ruby.say('ん———！');
        await ruby.say_and_wait('ふぅん…………');

        ruby.say('分かりましたわ');
        era.print(
          `${ruby.child_sex_title}の頬に淡い赤が浮かんだ理由は、あなたには分からない。`,
        );
        ruby.say('試験の曲目などは、忘れずにご確認を……では、おやすみなさい。');
        era.print(`${ruby.name} はあなたに一礼した。`);
        era.printButton('体育館へ走る', 1);
        await era.input();
      }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_out4(ruby, you) {
    era.print(
      `${you.name} は一人、明日の試験で問われる社交ダンスを黙々と繰り返した。だが……`,
    );
    era.printButton('（難しい！）', 1);
    await era.input();

    era.print('当然だ。一日やそこらで覚えられるものではない。');
    era.printButton('（学べる分だけ学ぶしかない。）', 1);
    await era.input();

    era.print('たた、たた、たた……');
    ruby.say('まだ練習なさっているのですか？');
    await ruby.say_and_wait(
      '皆様はもうお帰りですわ。あなたも、そろそろお休みになった方がよろしいかと。',
    );
    era.println();

    era.print('社交ダンスの試験は明日だ。今は体面を気にしている場合ではない。');
    era.print(`${you.name} は覚悟を決めて——`);
    era.printButton('「社交ダンスの指導を、お願いできませんか？」', 1);
    await era.input();

    ruby.say('……');
    await ruby.say_and_wait('まずは姿勢を正してくださいまし。');
    era.println();

    await era.printAndWait(
      `${ruby.name} はあなたの前へ歩き、手取り足取り指導し始めた。`,
    );
    era.println();

    await ruby.say_and_wait(
      '舞の動きはもう覚えていらっしゃいますわね？ では始めましょう。',
    );
    era.println();

    era.print(
      `${ruby.sex}は溜息をつき、あなたの懐へ歩み入った。ふわふわした耳が、時折 ${you.name} の頬に触れる。`,
    );
    era.print(`${ruby.name} の指導は、疑いなく厳しい。`);
    era.print(
      `${you.name} は ${ruby.name} の言うとおり、音楽に合わせて${ruby.sex}と体を動かした。`,
    );
    await era.printAndWait(
      `臨時のパートナーを見下ろそうとしたとき、幼い小さな手が ${you.name} の頬にかかった。`,
    );
    era.println();

    ruby.say(
      '顔を上げてくださいまし。何かを成し遂げたいなら、常に威厳ある態度を保たねばなりませんわ。',
    );
    await ruby.say_and_wait(
      '恥じるようなことがおありですの？ なければ、ご自身のために視線を前方へ、胸を張って頭を上げるべきですわ。',
    );

    await era.printAndWait(
      `${ruby.sex}にそう言われ、あなたはこれまでの ${ruby.name} の振る舞いを思い出した。`,
    );
    era.println();

    ruby.say(
      'ええ。その姿を忘れないでくださいまし。狙うものがあるなら、それに見合う振る舞いをしなければなりませんわ。',
    );
    ruby.say('そうしてこそ、いつかなりたい自分になれるのですから。');
    await era.printAndWait(`${ruby.name} は言い終え、にこりと笑った。`);
    era.println();

    await era.printAndWait(
      `そのあと、会場設営の業者が来ても、${you.name} と ${ruby.name} は場所を屋外へ移して練習を続けた。`,
    );
    era.println();

    await era.printAndWait(
      `——そして翌日、${ruby.name} の「丁寧な指導」のおかげで、${you.name} は試験で皆の目を引く成果を出せた。`,
    );
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   * @param {string} breast_cup
   */
  async rec_out5(ruby, you, breast_cup) {
    era.print(`ほかのお嬢さまたちとの茶会で、${you.name} は愕然とした！`);
    era.print(`トレーナーは ${you.name} 一人だ。ほかに誰もいない。`);
    era.printButton('皆は別の場所か、別の日に試験を受けているに違いない！', 1);
    await era.input();

    era.print(`独特の空気も少女たちの体香も、${you.name} には慣れない。`);
    era.print(`緊張した ${you.name} は、カップの紅茶を一気に飲み干した。`);
    era.printButton('（もう一杯いただこう！ うん）', 1);
    await era.input();

    await ruby.say_and_wait('じっ……');
    era.println();

    era.print(`この茶会は ${ruby.name} が主催している。`);
    era.print('この場で、自分で注いだら……');
    era.printButton('（お茶を淹れる手つきが上手だ。）', 1);
    await era.input();

    await era.printAndWait(
      `……${you.name} は、その言い方が少し違う気がした。だが、自分から注いだのが作法破りであることは、より確かになった。`,
    );

    ruby.say('……お褒めにあずかり、光栄ですわ。');
    era.print(`言い終え、${ruby.name} が二杯目を注いでくれた。`);
    await era.printAndWait(`${you.name}がほっとした、そのとき——`);

    era.print(
      '執事「お嬢さま、皆様。お時間です。お迎えの車が用意できております。」',
    );
    era.printButton('「晩餐会？」', 1);
    await era.input();

    await ruby.say_and_wait(
      'ええ、次の試験会場でもありますわ。では参りましょう。',
    );
    era.println();

    era.print(
      `${ruby.name} は問答無用で、${you.name} を写真でしか見たことのない豪華客船へ連れていった。`,
    );
    await era.printAndWait(
      `${you.name} は度肝を抜かれた。だが——${ruby.name} は財界・政界の名士たちの前でも恐れず、${you.name} とはまったく違った。`,
    );
    era.println();

    await era.printAndWait(
      `周囲を見回せば、あの日のトレーニング場と同じく、多くの視線が${ruby.sex}の姿を追っている。大きな期待は、すべて華麗一族へ向けられていた。`,
    );
    era.println();

    ruby.print(
      '【狙うものがあるなら、それに見合う振る舞いをしなければなりませんわ。そうしてこそ、いつかなりたい自分になれるのですから。】',
    );
    era.print(`${you.name} の目標は——`);
    era.printButton(`${ruby.name} に釣り合うトレーナーになる`, 1);
    era.printButton(ruby.name, 2);
    if ((await era.input()) === 2) {
      era.print(
        `${ruby.name} の体は小さいと言っていいが、胸の実は${breast_cup}カップもある。滑らかな頬、可愛い衣装。トレーナーの ${
          you.name
        } も、淫らなことをたくさんしたくなる。`,
      );
      era.print('小学生のような体にキスされる');
      era.print('豊潤な唇が肌に触れる感触');
      era.print('ミルクのように滑らかな肌');
      await era.printAndWait('小さな舌を耳へねじ込み、囁かれる');
      era.get('cflag:85:招募状态').special++;
    }
    era.println();

    era.print('……そう、そういうことだ。');
    await era.printAndWait(
      `気づくと、視線はもう ${ruby.name} から離れられなかった。`,
    );
    era.println();

    await era.printAndWait('深夜の校門前。');
    ruby.say(
      'お疲れさまでした。では、このあとまだトレーニングがありますので、ここで失礼いたしますわ。',
    );
    era.printButton('「え？ 今からですか？」', 1);
    await era.input();

    ruby.say('ええ。お気遣いなく、先にお帰りくださいまし。明日の試験は——');
    era.printButton('「何かお手伝いできることはありませんか！」', 1);
    await era.input();

    ruby.say('特に必要はございませんわ。');
    era.printButton('「タイムを測るとか！」', 1);
    await era.input();

    ruby.say('……');
    era.printButton('「測りたいんです。とても。」', 1);
    await era.input();

    await ruby.say_and_wait('ご自由に。測ってくださいまし。');

    era.print(
      `この夜、${you.name} は内心の何かが変わった気がした。きっと ${ruby.name} の言葉が、自分を変えたのだろう。`,
    );
    await era.printAndWait(
      '（しばらくは、選抜試験で外出する必要はなさそうだ）',
    );
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_week_end(ruby, you) {
    era.print(
      `豪華客船の一件のあと、試験が終わってから ${ruby.name} のトレーニングに付き合うのが、${you.name} の日課になった。${you.name} は休日まで ${ruby.name} に使った。`,
    );
    era.print(
      'だが試験が終盤に入るということは、こうした手伝いもこれが最後だということだ。',
    );
    era.printButton('「お疲れさまでした。」', 1);
    await era.input();

    ruby.say('あなたも、ですわ。');
    era.printButton('「トレーナー選抜試験も、もうすぐ終わりですね。」', 1);
    await era.input();

    await ruby.say_and_wait(
      'おっしゃるとおりですわ。また視線が下がっています。胸を張り、顎を引いて立ちなさい。',
    );
    era.println();

    await era.printAndWait('危なかった。脚を少し見ただけで、バレかけた。');
    era.println();

    await ruby.say_and_wait(
      '意識は態度に現れますわ。今一度、胸に手を当ててお聞きなさい。ご自身の心は、どこにありますか？',
    );
    era.println();

    era.print(
      `まだ諦めないトレーナーは必ずいる。ずっと ${ruby.name} に知られ、${you.name} は自分が選ばれる確率がほとんどないのを分かっていた。`,
    );
    era.printButton('「これまで、本当にありがとうございました！」', 1);
    await era.input();

    await ruby.say_and_wait('ふ……');
    era.println();

    era.print(
      `${you.name} は ${ruby.name} に告げた。この試験を最後まで受けられたのは、光栄だと。`,
    );
    await era.printAndWait(
      `結果がどうであれ、${you.name} はこの一ヶ月で学んだものを、これから伸びる力に変えるつもりだ。`,
    );
    era.println();

    await ruby.say_and_wait('……ええ。お疲れさまでした。');
    era.println();

    era.print(
      `最初から最後まで、互いの間には距離があった。それが ${you.name} を少し寂しくさせたのは、また別の話だ。`,
    );
    era.print(
      `そのときトレーナーが誰であれ、どんな人であれ、${you.name} は相手を応援するつもりだった。`,
    );
    await era.printAndWait(
      `高貴で前向きな${ruby.sex}を支え、一緒に進んでほしい。`,
    );
  },
  /**
   * @param {CharaTalk} ruby
   * @param {CharaTalk} you
   */
  async rec_final(ruby, you) {
    await ruby.say_as_passer_by_and_wait(
      '手紙',
      'トレーナー選抜試験へのご参加、誠にありがとうございました。審査結果は以下のとおり——',
    );
    era.printButton('「……え？」', 1);
    await era.input();

    era.print(
      `${you.name} はその手紙を片手で握りしめ、トレーナー室から駆け出した。`,
    );
    await era.printAndWait(
      `トレーニング場で ${ruby.name} を見つけ、あなたは${ruby.sex}の名を大声で呼んだ`,
    );

    ruby.say('はぁ……そのお顔を見るに、お手紙は届いたようですわね。');
    era.printButton('「この結果は……」', 1);
    await era.input();

    era.print(`${ruby.name} は荘重にあなたへ礼をした。`);
    ruby.say(
      'これから、どうぞよろしくお願いいたしますわ。互いに励み、きちんと精進いたしましょう。',
    );
    ruby.say('それでは');
    era.printButton('「この【合格】は？」', 1);
    await era.input();

    await era.printAndWait(
      `${you.name} は紙面の【合格】が誤りでないと確かめた。だが、なぜ？ 自分の各試験の結果は、よくて平均、台に載せられるものではない。一部を除いて……`,
    );
    era.println();

    ruby.say('あなた以外、誰も残りませんでしたわ。');
    ruby.say('ほかの方は、みな棄権なさいました。');
    await ruby.say_and_wait(
      'ですから、あなたがわたくしのトレーナーに選ばれました。以上ですわ。',
    );
    era.println();

    era.print('つまり、たまたま残っただけ？');
    await era.printAndWait(
      `${
        you.name
      } は落胆して肩を落とし、${ruby.child_sex_title} の目の笑みに気づかなかった。`,
    );
    era.println();

    await era.printAndWait(
      `まあ、少なくとも ${ruby.name} のトレーナーにはなれたと思い、顔を上げた瞬間——`,
    );
    era.println();

    const temp = era.get('cflag:85:招募状态').special;
    if (temp) {
      era.add('relation:85:0', -temp * 10);
      era.add('love:85', temp);
      await ruby.say_and_wait(
        '最後まで残られましたわね。よくなさいました。未成年少女の下を覗く変態さん。',
      );
    } else {
      await ruby.say_and_wait('最後まで残られましたわね。よくなさいました。');
    }
    era.println();

    await era.printAndWait(
      `呆ける ${you.name} を構わず、${ruby.name} は続けた。`,
    );
    era.println();

    await ruby.say_and_wait(
      '契約の前に、いくつか課題をお願いしたいですわ。あそこに立つ執事から課題を受け取り、明日中にご提出くださいまし。',
    );
    era.println();

    await era.printAndWait([
      ruby.get_colored_name(),
      ' は軽く笑って駆けていった。',
    ]);
  },
};
