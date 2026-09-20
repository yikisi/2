/**
 * @file シンボリルドルフ - 恋慕
 * @author 露娜俘虏
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    /**
     * @param {CharaTalk} luna ルナ/シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        '生まれたときから、生命の軌跡は決められていた。',
      );
      await luna.print_and_wait([
        'ルナ。シンボリ家の',
        luna.uma_sex_title,
        '。',
      ]);
      await luna.print_and_wait([
        '無数の同輩と同じく、',
        luna.sex,
        'はシンボリ家の悲願を果たさねばならない。',
      ]);
      await luna.print_and_wait([
        luna.couple_title,
        'は永遠に強く、永遠に人心を震わせねばならない。つまり、勝利を追い求めることだ。',
      ]);
      await luna.print_and_wait(
        'それ以外は、勝利のためなら、すべて任意で、不要で、捨てられる。',
      );
      await luna.print_and_wait([
        '言い換えれば、',
        luna.couple_title,
        'は好き勝手に振る舞ってもよい。',
      ]);
      await luna.print_and_wait('あの叔母は情欲に溺れた。');
      await luna.print_and_wait('あの伯母は酒に溺れた。');
      await luna.print_and_wait('あの姉は暴力に溺れた。');
      await luna.print_and_wait('勝利さえ得られれば、それらは許される。');
      await luna.print_and_wait(
        'だからルナが恐ろしいほどの潜在を見せたとき、家の大人物たちは和やかな顔をした。',
      );
      await luna.print_and_wait(
        'ある日、ルナは自ら彼らの傍へ行った。彼らは見慣れた顔だった。',
      );
      await luna.print_and_wait('大人物たちは和やかに尋ねた。何が欲しい？');
      await luna.print_and_wait([
        'ルナは答えた。',
        luna.sex,
        'は愛が欲しい、と。',
      ]);
      await luna.print_and_wait([
        'すぐにルナは無数の新しい玩具を得た。メジロ家の門は',
        luna.sex,
        'のために開かれ、美しく、あるいは麗しい人々が',
        luna.sex,
        'に愛想を尽くす……',
      ]);
      await luna.print_and_wait(
        '世の美しさに囲まれても、ルナは自分が愛されているとは思えなかった。',
      );
      await luna.print_and_wait([
        luna.sex,
        'が欲しかったのは、利害に縛られず、権力に目を曇らされず、ただ純粋に、心から、無償の愛だった。',
      ]);
      await luna.print_and_wait(
        '夜、ひとりベッドに座るとき、ルナは身体を丸め、わずかな温もりの痕跡を探した。',
      );
      await luna.print_and_wait([
        'だが月の光がルナに降り、',
        luna.sex,
        'は骨髄まで冷える寒さしか感じなかった。',
      ]);
      await luna.say_and_wait('……誰か……');
      await luna.print_and_wait([
        'ルナは恐ろしかった。すべてを投げ出して世界に求めても、',
        luna.sex,
        'は何も得られなかった。',
      ]);
      era.println();

      era.printButton('「シンボリ家の屋敷は、迷宮みたいだな……？」', 1);
      await era.input();
      await luna.print_and_wait('扉の外から、誰かの声がした気がした。');

      era.printButton('尋ねる', 1);
      await era.input();
      await you.say_and_wait('ここが、俺の部屋……？');
      await you.say_and_wait(
        'ごめん！？ 場所を間違えて——え？ なんで泣いてる！？',
      );
      await you.say_and_wait(
        '怖がらないで！！！ 悪い奴じゃない！！！ 本当に！！！',
      );
      await you.say_and_wait(
        'まずい、この子、泣くほどひどくなる。鼻水が……！ 服についた！',
      );
      await you.say_and_wait('はあ……');
      era.println();

      await luna.print_and_wait('ただの、ありふれた偶然の出会いだった。');
      await luna.print_and_wait(
        '発散が必要で、拠り所が必要で、温もりが必要な子供が、迷った人と出会った。',
      );
      await luna.print_and_wait(
        '一晩中、後者はみっともなく、泣く子供を慰めた。',
      );
      await luna.print_and_wait('それから二人は、少しずつ共通の話題を持った。');
      await luna.print_and_wait('それから二人は、次第に影のように一緒にいた。');
      await luna.print_and_wait(
        '失意の子供と、碌々としていた人間が、魂で共鳴した。',
      );
      await luna.say_and_wait(
        'きっとあのときから、私はあなたを忘れられなくなった……',
      );
    };
    f.title = '陰';
    return f;
  })(),
  74: (() => {
    /**
     * @param {CharaTalk} luna ルナ/シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await luna.print_and_wait(
        '年に一度の始業式。普通の学校なら、徳望ある校長が開幕の演説をする。',
      );
      await luna.print_and_wait(
        'だがトレセン学園で、その役目を果たす者は、ただひとりしかいない。',
      );
      await luna.print_and_wait([
        'シンボリルドルフ——生徒会長は、',
        luna.sex,
        'に頭を下げる人々を越え、演壇へ立った。',
      ]);
      await luna.print_and_wait(
        '生徒たちは期待に満ち、教職員たちは意気揚々としている。',
      );
      await luna.print_and_wait([
        '新しい学期だ。日本の',
        luna.uma_sex_title,
        'が敗戦を重ねていようとも、今日から人々は喪気を脱していく。',
      ]);
      await luna.print_and_wait(
        '生徒会長がいるからだ。シンボリルドルフ——シンボリ家の獅子——あの皇帝。皆がそれに歓喜する。',
      );
      await luna.print_and_wait([
        '熱い視線に晒され、ルナは胃をきつく掴まれたように感じ、',
        luna.sex,
        'は今にも吐きそうだった。',
      ]);
      await luna.print_and_wait(
        '無言の空虚と恐怖が、また身体を覆いそうになる……',
      );
      await luna.print_and_wait(
        'ルナは頼りなくあたりを見回し、ふとひとりが爪先立ちで、懸命に上を見ているのに気づいた。',
      );
      await you.say_and_wait('がんばれ！ ルナ！');
      await luna.print_and_wait([
        '遠くても、ルナは ',
        you.get_colored_actual_name(),
        ' の口の形から、',
        you.sex,
        ' が伝えたい意味を読み取った。',
      ]);
      await luna.say_and_wait('——ふぅ。');
      await luna.say_and_wait('諸君——');
      era.drawLine();
      await luna.print_and_wait('だが意外が重なれば、それは運命になる。');
      await luna.print_and_wait(
        '無数の人が覚えるこの始業式で、人々はシンボリルドルフが威厳を保ちつつ、それでも風趣を失わずに皆を鼓舞したことを覚えている。',
      );
      await luna.print_and_wait([
        '人々は',
        luna.sex,
        'の心からの笑顔を覚えている。',
      ]);
      await luna.print_and_wait(
        'だが人々は知らない。その笑顔は、本心からの……吹き出しそうな笑いだったことを。',
      );
      await luna.say_and_wait('爪先立ちで、あんなに緊張して……ふふ。');
      await luna.print_and_wait([
        you.get_colored_actual_name(),
        ' さえも知らない。この一幕が、高みに立つ',
        luna.uma_sex_title,
        'の記憶に、どれほど長く残るかを。',
      ]);
    };
    f.title = '陰';
    return f;
  })(),
  89: (() => {
    /**
     * @param {CharaTalk} luna ルナ/シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (luna, you) => {
      await luna.print_and_wait([
        luna.uma_sex_title,
        'とトレーナーが一緒にいる時間は、実は授業の教員より少し多い程度だ。',
      ]);
      await luna.print_and_wait(
        '訓練し、訓練を組む。レースを組み、レースを組む。それ以外に、特別に会う機会はない。',
      );
      await luna.print_and_wait(
        '多忙なルナは、なおさらそうだ。だからこそ、ルナはこれまでになく焦っていた。',
      );
      await luna.print_and_wait(
        '文書を終えたころには、空はすでに黒く沈んでいた。',
      );
      await luna.print_and_wait('疲れた身体を引きずり、ルナは学園を巡視する。');
      await luna.print_and_wait('一周、また一周。');
      await luna.print_and_wait([
        'ついに',
        luna.sex,
        'はチームの小屋へ着いた。中の明かりがついている。',
      ]);
      await luna.print_and_wait([
        luna.sex,
        'も一日顔を出せなかった。まだ',
        luna.sex_code === 1 ? '後輩の男子' : '後輩の女子',
        'がいるのだろうか。',
      ]);
      await luna.print_and_wait(
        'ルナは扉を押す。ここは自分の秘密の基地と違い、鍵はかからない。',
      );
      await luna.print_and_wait(
        'ルナは驚いた。自分のトレーナーがソファに横たわり、書籍と各種のデータが散らばっている。',
      );
      await luna.say_and_wait('あなただけ、ですか……');
      await luna.print_and_wait('私も同じように、今まで働いていたのですか。');
      await luna.print_and_wait(
        'ルナの口角がわずかに上がる。自分は学園のため。トレーナーがこう励むのは……おそらく自分のためだけだ。',
      );
      await luna.print_and_wait([
        'なぜか、ルナの鼓動は速い。',
        luna.sex,
        'の顔がわずかに熱い。',
      ]);
      await luna.print_and_wait([
        'まるで ',
        you.get_colored_actual_name(),
        ' のために騒いでいるようだ。',
      ]);
      await luna.print_and_wait([
        'ルナは少し恍惚とする。',
        luna.sex,
        'は胸元の衣をきつく掴み、',
        luna.sex,
        'はトレーナーへの感情が、どこか変わったことに気づく。',
      ]);
      await luna.print_and_wait([
        you.get_colored_actual_name(),
        ' はすでに深く眠っている。ここには',
        you.couple_title,
        'だけ。',
        you.couple_title,
        'だけ……',
      ]);
      await luna.print_and_wait(
        'ルナは息を止め、後ろへわずかに凭れると、半開きの扉がカチッと閉まった。',
      );
      await luna.print_and_wait([
        'それから',
        luna.sex,
        'は後ろ手で、部屋に鍵をかけた。',
      ]);
      await luna.print_and_wait('——こうしてはいけないと、わかっている。');
      await luna.print_and_wait([
        'ルナは重い足取りで、',
        you.get_colored_actual_name(),
        ' の前へ来た。',
      ]);
      await luna.print_and_wait([
        '——',
        luna.sex,
        'は生徒会長の務めと、シンボリ家の栄光を背負っている。',
      ]);
      await luna.print_and_wait([
        'ルナは靴を脱ぎ、',
        you.get_colored_actual_name(),
        ' の傍らに座った。',
      ]);
      await luna.print_and_wait('——見つかれば、すべてが崩れる。');
      await luna.print_and_wait([
        'ルナは身を屈め、',
        you.get_colored_actual_name(),
        ' の懐へ潜り込んだ。',
      ]);
      await luna.print_and_wait([
        'だが',
        luna.teen_sex_title,
        'は可能性を拒む。未来がどうあろうと、',
        luna.sex,
        'は今が欲しい。',
      ]);
      await luna.print_and_wait([
        you.get_colored_actual_name(),
        ' の腕の中で丸まり、ルナは貪欲に温もりを味わった。',
      ]);
      await luna.say_and_wait('何年経っても、あなたの気配は少しも変わらない。');
      await luna.print_and_wait(
        '自分を静かにし、自分を解かせる。まるで大海の中の一艘の小舟のように。',
      );
      await luna.say_and_wait('何があっても、私はあなたから離れません。');
      await luna.print_and_wait([
        'ルナは身を返し、',
        you.get_colored_actual_name(),
        ' をきつく抱いた。',
        luna.sex,
        'は顔を上げ、懐の人の唇に鼻を寄せる。',
      ]);
      await luna.say_and_wait('だから、あなたも私から離れないで……いいですか？');
      await luna.print_and_wait([
        you.get_colored_actual_name(),
        ' の腕の中で、ルナは深く眠った。',
      ]);
      await luna.print_and_wait([
        '稀なことに、',
        luna.sex,
        'は悪夢を見ず、朝まで穏やかに眠れた。',
      ]);
    };
    f.title = '円';
    return f;
  })(),
  99: (() => {
    /**
     * @param {CharaTalk} luna ルナ/シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ルナ/シンボリルドルフがプレイヤーを呼ぶ名
     */
    const f = async (luna, you, callname) => {
      await luna.print_and_wait('ルナはベッドの上で寝返りを打っていた。');
      await luna.print_and_wait(
        '久しぶりに家へ戻っても、何も変わっていないようだ。ただ、家の大人物たちまで自分に唯々諾々とし始めた。',
      );
      await luna.print_and_wait([
        'その理由は何か。自分がますます強くなったからか。シンボリ家の',
        luna.uma_sex_title,
        'なら、それで誇るべきだ。',
      ]);
      await luna.print_and_wait(
        'だがルナは少しも嬉しくなく、むしろ胸の何かが燃えているようにさえ感じた。',
      );
      await luna.print_and_wait([
        '慣例どおり家へ戻っただけなのに、',
        callname,
        ' は気ままに同行できない。',
      ]);
      await luna.print_and_wait(
        '馴染みの道を歩きながら、ルナは何度も壁にぶつかりそうになった。',
      );
      await luna.print_and_wait([
        luna.sex,
        'はふと気づく。傍に人がいて、自分の度を越した寄りかかりを許してくれることに、もう慣れてしまっていた。',
      ]);
      await luna.print_and_wait('いない……');
      await luna.print_and_wait('いない…………');
      await luna.print_and_wait('いない………………！');
      await luna.print_and_wait([
        'ルナは気づいた。ただ ',
        you.get_colored_actual_name(),
        ' が傍にいないだけで、',
        luna.sex,
        'は喪失感に沈む。',
      ]);
      await luna.print_and_wait(
        '夜が降り、月の光がまた寝室へ差し込む。何年も前と同じだ。',
      );
      await luna.print_and_wait(
        '冷たい感覚が再び身体を這い上がる。仕方なくルナは布団をかぶり、愛する人とのひとつひとつの記憶を思い出した。',
      );
      await luna.print_and_wait([
        'もし ',
        you.get_colored_actual_name(),
        ' がいて、同じベッドに横たわっていたら。ならば……',
      ]);
      await luna.print_and_wait('——二人の唇は離れがたく、吸い合い、寄り添う。');
      await luna.print_and_wait('——厚い吐息が、顔に何度も当たる。');
      await luna.print_and_wait('——肩と鎖骨に、痕が残る。');
      if (luna.sex_code - 1) {
        await luna.print_and_wait('——胸が、繰り返し揉まれる。');
      }
      await luna.print_and_wait('——長い脚が撫でられる。');
      await luna.print_and_wait('——互いが、求め続ける！');
      await luna.print_and_wait([
        'ルナの身体は震え、両耳が伏せ、',
        luna.sex,
        'の長い指が下へ触れ、',
        luna.sex,
        'を電撃のように痙攣させた。',
      ]);
      await luna.print_and_wait([
        'もし ',
        you.get_colored_actual_name(),
        ' が本当にここにいたら、',
        luna.sex,
        'は迎える。何が起きても。',
      ]);
      await luna.say_and_wait([
        you.get_colored_actual_name(),
        '、早く私の傍へ戻って……',
      ]);
      await luna.print_and_wait('愛する人の名を呟き、ルナは深く眠った。');
    };
    f.title = '欠';
    return f;
  })(),
};
