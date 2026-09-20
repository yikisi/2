/**
 * @file 孕袋関連イベント
 * @author 幽白書
 * @author 黑奴队长
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
  println,
  setColor,
} = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { akuochi, buff_colors } = require('#/data/color-const');
const { pregnant_stage_enum } = require('#/data/ero/status-const');

const { degeneration_to_evil } = require('#/i18n/ja-JP/snippets');

module.exports = {
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async office_study(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' の学業を指導したあと、',
      chara.get_colored_name(),
      ' は頬を赤らめて ',
      you.get_colored_name(),
      ' を見つめた。次は、性教育の時間だ。',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' が指導する側なのに、',
      chara.get_colored_name(),
      ' のほうが ',
      you.get_colored_name(),
      ' の体をよく知っている。',
      chara.get_colored_name(),
      ' の手のなかで、',
      you.get_colored_name(),
      ' は自分の敏感な場所と、触れたときの恥ずかしい反応を、否応なく教え込まれた。',
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_tree_hollow(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' を枯れ木の洞のそばへ連れていった。',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ` は、${chara.sex}が最近のストレスを吐き出したいだけだと思った瞬間、切り株へ押し倒された。`,
    ]);
    await printAndWait([
      'それから ',
      you.get_colored_name(),
      ' の下半身の衣がゆっくり剥がれ、熱い肉柱が入り口に当たった。',
    ]);
    await printAndWait([
      '声を出せば、洞の反響で ',
      you.get_colored_name(),
      ' の声が学園中に響くだろう。',
    ]);
    await printAndWait([
      `担当の${chara.uma_sex_title}に枯れ木の洞で犯されたと知れれば、`,
      you.get_colored_name(),
      ' のトレーナーとしての名声は終わりだ……',
    ]);
    await printAndWait('もっとも、そんなものはとうに残っていない。');
    await printAndWait([
      you.get_colored_name(),
      ' は枯れ木の洞のそばで喘いだ。',
      get('flag:35') === 2 ? '性奴隷' : '孕袋',
      'である ',
      you.get_colored_name(),
      ' にとって、これもいつもの一日にすぎない。',
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async s_a_dating(chara, you) {
    await printAndWait([
      chara.get_colored_name(),
      ' は ',
      you.get_colored_name(),
      ' の手を引き、中庭へデートに出た。',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' は両脚を閉じ、太ももから白い液がゆっくり流れ落ちている。マスクは何かの液に濡れ、口と鼻に張りついていた。発情の匂いに、通りかかった',
      chara.uma_sex_title,
      'たちまで頬を赤らめて鼻を摘まんだ。',
    ]);
  },
  /**
   * @author 幽白書
   * @param {CharaTalk} chara
   * @param {CharaTalk} you
   */
  async school_rooftop(chara, you) {
    await printAndWait([
      '屋上での公開露出……このとき誰かが顔を上げれば、',
      you.get_colored_name(),
      ' は耐えきれないだろう。',
    ]);
    await printAndWait(
      `屋上の下、トレーニング場を走る${chara.uma_sex_title}たち。`,
    );
    await printAndWait(
      '見られたら、きっと果ててしまう。潮が雨のように下の者へ落ちる……',
    );
    await printAndWait([
      'だが、',
      chara.get_colored_name(),
      ' に片脚を上げられ、力の入れようのない体勢の ',
      you.get_colored_name(),
      ' は、屋上の防護ネットに頼るしかなく、鉄線が胸に赤い痕を残した。',
    ]);
    // TALENTNAME:32 = 泌乳
    if (get('talent:0:32') > 0) {
      await printAndWait('ああ、出てしまった……');
      await printAndWait([
        `秘部の潮が溢れるより先に、下の${chara.uma_sex_title}の頭へ落ちたのは、`,
        you.get_colored_name(),
        ' の乳首から細い流れとなって出た乳だった。',
      ]);
    }
  },
  race_start: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      await printAndWait([
        `ほかのトレーナーが担当${chara.uma_sex_title}へ最後の言葉をかけているあいだ、`,
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' の肉棒を口に含んでいた。',
      ]);
      await printAndWait([
        'レース前の熱に酔った ',
        chara.get_colored_name(),
        // FLAGNAME:35 = 惩戒力度
        ' の硬い下は当然処理が要る。それも',
        get('flag:35') === 2 ? '性奴隷' : '孕袋',
        'である ',
        you.get_colored_name(),
        ' に欠かせない務めだ。',
      ]);
      await printAndWait([
        '精をすべて飲み込んだあと、',
        you.get_colored_name(),
        ' は ',
        chara.get_colored_name(),
        ' の肉棒へ、レースの無事を祈る口づけを落とした。',
      ]);
    };
    f.title = 'レースの前に';
    return f;
  })(),
  oyakodon: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} child
     * @param {CharaTalk} father
     * @param {CharaTalk} you
     */
    const f = async (child, father, you) => {
      await printAndWait([
        you.get_colored_name(),
        ' は ',
        child.get_colored_name(),
        ' と ',
        father.get_colored_name(),
        ' に、ぴったり挟まれていた。',
      ]);
      await printAndWait([
        '二本の灼熱の肉棒が、',
        you.get_colored_name(),
        ' の前後を同時に攻め、突くたびに新しい快感が走る。',
      ]);
      await printAndWait([
        '朦朧のなか、',
        you.get_colored_name(),
        ' は ',
        child.get_colored_name(),
        ' が生まれたときのことを思い出した——',
      ]);
      await you.used_to_say_and_wait(
        'いつか子が大きくなったら……子と、子の父に一緒に使われ、挟まれて、雄の肉棒に溺れる……',
        true,
      );
      await printAndWait('あの妄想が、いま現実になっている……');
    };
    f.title = '親子丼';
    return f;
  })(),
  /**
   * 親子丼の睡姦で目覚める
   * @author 幽白書
   * @param {CharaTalk} chara 子の父
   * @param {CharaTalk} child 子
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname_c 子からプレイヤーへの呼び名
   */
  async be_awake_as_slave(chara, child, you, callname_c) {
    await printAndWait(['夜半、', you.get_colored_name(), ' は飛び起きた']);
    await printAndWait('孕袋である以上、眠りの時間も務めを忘れてはならない');
    await printAndWait('ただ、今夜の客が少し特殊なだけだ');
    println();
    await printAndWait([
      you.get_colored_name(),
      ' は、前と後ろで違うリズムの衝撃を受けていた',
    ]);
    await printAndWait([
      child.get_colored_name(),
      ' は ',
      callname_c,
      ' と低く呼びながら腰を揺らし、突くたびに ',
      you.get_colored_name(),
      ' のいちばん奥へ届く',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' はベッドに跪き、自分の子に獣のような姿勢で犯される感覚を、恥ずかしさとともに味わった',
    ]);
    await printAndWait(
      '母としての矜持——そんなものがあったとして——は、いま完全に消えた',
    );
    await printAndWait([
      '雌犬のように尻を揺らし、いじめられたい様子は、口で奉仕している ',
      chara.get_colored_name(),
      ' の笑いものにもなった',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' は口の肉棒をより深く含み、濃い匂いのなかへ顔を埋めて現実から逃れた',
    ]);
    println();
    await printAndWait([
      'ほどなく、',
      chara.get_colored_name(),
      ' と ',
      child.get_colored_name(),
      ' は濃い精を放った',
    ]);
    await printAndWait([
      you.get_colored_name(),
      ' は口の精を吐き、手に塗り、指を秘部へ入れてゆっくり掻き混ぜ、溢れた白濁をもう一方の手で掬って飲み込んだ',
    ]);
    if (get('cflag:0:妊娠阶段') === 1 << pregnant_stage_enum.no) {
      await printAndWait([
        chara.get_colored_name(),
        ' の精と ',
        child.get_colored_name(),
        ' の精が混ざる。どちらが先に孕ませるのだろう？',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' は想像に耽り、目の前の ',
        chara.get_colored_name(),
        ' と ',
        child.get_colored_name(),
        ' の肉棒が、その仕草で再び起き上がっているのに気づかなかった',
      ]);
    } else {
      await printAndWait([
        you.get_colored_name(),
        ' の仕草を見て、',
        chara.get_colored_name(),
        ' と ',
        child.get_colored_name(),
        ' の肉棒は再び起き上がった',
      ]);
    }
    await printAndWait('夜は、まだ続く……');
  },
  morning_duty: (() => {
    /**
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} you プレイヤー
     * @param {string} your_title 現在の肩書（XX性奴隷 / XX孕袋）
     * @param {string} penis_desc 陰茎の形容
     */
    const f = async (chara, you, your_title, penis_desc) => {
      const ret = [];
      await printAndWait([
        you.get_colored_name(),
        ' は、頬を叩く温もりで目を覚ました。',
      ]);
      if (chara.sex_code === 0) {
        await printAndWait([
          '一晩中 ',
          you.get_colored_name(),
          ' を苛んだ ',
          chara.get_colored_name(),
          ' は、また薬を飲み、わざわざ',
          chara.sex,
          'の高貴な',
          penis_desc,
          '肉棒を目覚ましにした。',
        ]);
      } else {
        await printAndWait([
          '一晩中 ',
          you.get_colored_name(),
          ' を苛んだ ',
          chara.get_colored_name(),
          ' は、またわざわざ',
          chara.sex,
          'の高貴な',
          penis_desc,
          '肉棒を目覚ましにした。',
        ]);
      }
      await printAndWait([
        '——',
        you.get_colored_name(),
        ' に、まだ果たしていない務めがあることを思い出させる。朝から夜まで、同じことの繰り返しだ。',
      ]);
      ret.push(
        await degeneration_to_evil('素直に含む', '嫌そうに顔をそむける'),
      );
      if (ret[0] === 1) {
        await printAndWait([
          '手間をかけるまでもなく、',
          you.get_colored_name(),
          ' が唇を少し開いた瞬間、肉棒は待ちきれずに入ってきた。',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          ' の好き放題のなか、',
          you.get_colored_name(),
          ' は従順に唇と舌で奉仕した。',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          ' は、今日も自分の務めを忘れない……',
        ]);
      } else {
        await printAndWait([
          'ここまで落ちても、',
          you.get_colored_name(),
          ' には矜持、少なくとも気位はある——',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' がわずかに顔をそらし、そう主張しようとしたとき、すでに我慢の切れた主人 ',
          chara.get_colored_name(),
          ' は平手打ちを食らわせ、いまの立場を思い出させた。',
        ]);
        await printAndWait([
          'それから ',
          chara.get_colored_name(),
          ' は、',
          you.get_colored_name(),
          ' の協力など期待せず、この朝食を独りで取り始めた。',
        ]);
        await printAndWait([
          your_title,
          ' ',
          you.get_colored_actual_name(),
          ' は、今日も務めを叩き込まれた……',
        ]);
      }
      setColor();
      return ret;
    };
    f.title = '翌朝の務め';
    return f;
  })(),
  /**
   * 性奴隷 / 孕袋の仕事イベント
   * @param {CharaTalk} you プレイヤー
   * @param {string} uma ウマ娘 or ウマ郎
   * @param {string} sex 彼女 or 彼
   * @param {string} they 彼女たち or 彼ら
   * @param {string} slave 性奴隷 or 孕袋
   */
  work(you, uma, sex, they, slave) {
    print([
      '【今日も ',
      you.get_colored_name(),
      ' は',
      slave,
      'の仕事を命じられた】',
    ]);
    const buffer = [
      () => {
        print([
          you.get_colored_name(),
          ' はレース場の選手控え室へ連れていかれ、敗れた',
          uma,
          'たちを慰めた。',
        ]);
        print([
          '扉が閉まると、',
          you.get_colored_name(),
          ' の形ばかりの服は完全に剥がされ、激しい肉棒に体を揺さぶられた。',
        ]);
        print([
          uma,
          'たちは敗北の憤りを吐き出し、',
          you.get_colored_name(),
          ' の体に爪痕と歯痕を残した……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' はレース場の選手控え室へ連れていかれ、見事な走りを見せた',
          uma,
          'たちを慰めた。',
        ]);
        print([
          'ほかの選手より先に、優勝した',
          uma,
          'が飛び込んできた。',
          you.get_colored_name(),
          ' を押し倒す前に、挨拶までした。',
        ]);
        print([
          sex,
          'は笑いながら腰をねじり、',
          you.get_colored_name(),
          ' の子宮へ、尿とともに精を放った……',
        ]);
      },
      () => {
        print([
          '仕事の前に、',
          you.get_colored_name(),
          ' はトイレへ行こうとした。',
        ]);
        print([
          '始める前に、五、六本の肉棒が ',
          you.get_colored_name(),
          ' の進路を塞いだ。',
        ]);
        print([
          you.get_colored_name(),
          ' は尿意を堪えながら',
          uma,
          'たちに奉仕し、すぐに白濁のなかで激しく失禁した……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' は、仲の良さそうな',
          uma,
          'の二人に指名された。',
        ]);
        print([
          they,
          'は肉棒を立て、前後から ',
          you.get_colored_name(),
          ' の下を犯した。',
        ]);
        print([
          '二重の強い刺激のなか、',
          you.get_colored_name(),
          ' は見慣れた中出しの感覚とともに大きく果て、意識を失った……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' は',
          uma,
          'の決起集会への参加を命じられた。',
        ]);
        print([
          '集会の一部として、',
          uma,
          'たちは列を作り、',
          you.get_colored_name(),
          ' の内外の穴を使った。',
        ]);
        print([
          '常に一から三本が体内を出入りし、完全に満たされる前に ',
          you.get_colored_name(),
          ' は快感で意識が飛んだ……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' は、トレーニング場で一緒に練習していた',
          uma,
          'を迎えた。',
        ]);
        print([
          sex,
          'は ',
          you.get_colored_name(),
          ' の服を剥ぎ、斑点だらけの下など気にせず、真っ直ぐ挿し入れた。',
        ]);
        print([
          uma,
          'は突きながら、からかうように尋ねた。毎日トレーニング前に、担当から一日分を中に出されているのか、と。',
        ]);
        print([
          '極度の快感と恥辱のなか、',
          you.get_colored_name(),
          ' は意識を失った……',
        ]);
      },
      () => {
        print([
          you.get_colored_name(),
          ' は仕事へ向かう途中、小学部の',
          uma,
          'に塞がれた。',
        ]);
        print([
          '拒む暇もなく、まだ幼い',
          uma,
          'は、年齢にそぐわない巨きな肉棒を出した。',
        ]);
        print([
          '改造された体の本能に屈し、',
          you.get_colored_name(),
          ' は半ば押し切られる形で地に押さえられ、秘部が巨物に出入りされる感覚を味わった……',
        ]);
      },
    ];
    if (
      get('talent:0:泌乳') > 0 &&
      get('cflag:0:胸围') - get('cflag:0:下胸围') >= 20
    ) {
      buffer.push(() => {
        print([
          you.get_colored_name(),
          ' は',
          uma,
          'たちに台へ縛られ、体を前へ傾け、穴の開いた板が頭と手と大きな胸を固定した。',
        ]);
        print([
          you.get_colored_name(),
          ' の体は',
          they,
          'に好き放題揉まれ、胸は強く搾られ、白い乳を噴いた。',
        ]);
        print([
          uma,
          'たちは組になって穴と搾乳を交代し、最後に揃って ',
          you.get_colored_name(),
          ' の胸と顔へ精を放った……',
        ]);
      });
    }
    get_random_entry(buffer)();
  },
  punish_first: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} taste 秋川やよい / キタサンブラック
     * @param {CharaTalk} minoru 駿川たづな / ライスシャワー
     */
    const f = async (you, taste, minoru) => {
      await you.say_and_wait(['ん……ぐっ……う……']);
      println();
      await printAndWait([
        'トレセン学園のなかに、普段は誰も寄りつかない場所がある。',
      ]);
      await printAndWait(['干し草が積まれ、柵に囲まれた片隅。']);
      await printAndWait([
        '何かの動物を飼う場所のように見えるが、生き物の気配は一度もない。',
      ]);
      await printAndWait(['ここは、何のためにあるのだろう？']);
      await printAndWait([you.get_colored_name(), ' も、かつて疑問に思った。']);
      println();
      await printAndWait([
        'いま、',
        you.get_colored_name(),
        ' は、この場所の用途を知った。',
      ]);
      println();
      await taste.say_as_unknown_and_wait([
        '処 罰！ 孕袋として務めを逃したのだ、厳しく責める！',
      ]);
      await minoru.say_as_unknown_and_wait([
        'もともと、孕袋であること自体が最も重い罰です……トレセンと',
        taste.uma_sex_title,
        'の未来に力を尽くすなかで、トレーナーさんはご自分の過ちを振り返ってくださるものと期待していました。ですが、どうやらまだ強い薬が必要なようです。',
      ]);
      println();
      await printAndWait(['二人の言葉が落ちると、']);
      await printAndWait([
        'すでに二人に使われ、白い液がまだ細く流れている、赤く腫れた ',
        you.get_colored_name(),
        ' の秘部へ、新しい客が来た。',
      ]);
      const ret = await degeneration_to_evil('服従する', '屈しない', false);
      await printAndWait([
        'アイマスクと口枷を着けられた ',
        you.get_colored_name(),
        ' には、来た者が誰かわからない。',
      ]);
      await printAndWait([
        '声で聞き分けようとしても、遮音のヘッドフォンに覆われた耳では、',
        taste.uma_sex_title,
        'の優れた聴力をもってしても、体内で鳴る音しか聞き取れない。',
      ]);
      println();
      await printAndWait(['ちゅぱ……ちゅぱ……']);
      println();
      await printAndWait(['ねっとりした肉体の打ち合う音。']);
      await printAndWait([
        'そして、後ろの肉棒を離したくないかのような、入り口からの口づけの音。',
      ]);
      if (ret === 1) {
        await printAndWait(
          [
            'そのちゅ、という音は大きく、',
            you.get_colored_name(),
            ' は、この肉棒こそ体の支配者だと思いかけた——不思議ではない。今夜、一本が入るたびに、',
            you.get_colored_name(),
            ' は同じことを考えていた。',
          ],
          { color: akuochi[1] },
        );
      } else {
        await printAndWait(
          [
            'そのちゅ、という音は大きく、',
            you.get_colored_name(),
            ' は、この肉棒こそ体の支配者だと思いかけた——',
            you.get_colored_name(),
            ' はそう思いたくなかったが、薬で昏い頭は、その事実を受け入れさせた。',
          ],
          { color: akuochi[0] },
        );
      }
      println();
      await printAndWait(['ぐぱ……ぐぱ……']);
      println();
      await printAndWait(['すべての守りは、いつか破られる日を迎える。']);
      await printAndWait([
        'ならば、守りは破られるために存在する、という等式はだいたい成り立つ。',
      ]);
      await printAndWait([
        'だから、気位を装った狭い道は、',
        taste.uma_sex_title,
        'さまの雄々しい肉棒に征服感を与えるため、冷たく装いながら、触れた瞬間に絡みつき、烈女から蕩けた雌への転換を完璧に果たす。絡みつく音もまた、体の主の態度を示している。',
      ]);
      await printAndWait([
        '孕みたい、たまらなく孕みたい。まともなトレーナーを装っていたのは、',
        taste.uma_sex_title,
        'さまが自分を味わうとき、感情の満足まで味わえるようにするためだった。',
      ]);
      await printAndWait([
        'そのせいで、',
        taste.uma_sex_title,
        'さまの精子に犯され、自分がどれほど卑しい雌かを教えられる機会を失った。なんと損なことか。',
      ]);
      println();
      await printAndWait([
        '幸い、慈悲深い',
        taste.uma_sex_title,
        'さまは、愚かな孕袋に機会をくださる。',
      ]);
      println();
      await printAndWait(['とん、とん……とん、とん……']);
      println();
      await printAndWait([
        '子宮口を礼儀正しく叩く肉棒は、関所の無血開城を待っている。',
      ]);
      await printAndWait([
        '全身の器官も、組織も、細胞も、すでに完全に服している。',
      ]);
      await printAndWait([
        'いまの打ち込みは、最後の防壁への衝撃というより、形式だけのノックだ。',
      ]);
      await printAndWait([
        '抵抗？ 孕袋の体が、',
        taste.uma_sex_title,
        'さまの侵犯に抵抗するはずがない。それは遺伝子の奥に刻まれた論理だ。',
      ]);
      println();
      await printAndWait(['そして、いちばん待ち望んだ音。']);
      await printAndWait([
        'ああ、',
        you.get_colored_name(),
        ' は脚をさらに開いた。',
      ]);
      await printAndWait([
        'いつのまにか、',
        you.get_colored_name(),
        ' を擬牝台に縛っていたベルトは緩んでいた。',
      ]);
      await printAndWait(['もともと、そのベルトに必要はなかった。']);
      await printAndWait([
        '孕袋が',
        taste.uma_sex_title,
        'さまの肉棒に逆らうはずがない。',
      ]);
      await printAndWait([
        '孕袋が',
        taste.uma_sex_title,
        'さまの賜り物を拒むはずがない。',
      ]);
      println();
      await printAndWait(['ついに、走るより胸を躍らせ、初恋より心を揺らす、']);
      await printAndWait([
        taste.uma_sex_title,
        'さまの侵犯が、終わりへ向かう。',
      ]);
      println();
      await printAndWait(['しゅ……しゅるるるる……']);
      println();
      await printAndWait(['来た。']);
      await printAndWait(['これだ。']);
      await printAndWait([you.get_colored_name(), ' は心のなかで確信した。']);
      await printAndWait(['これが、自分の子宮へ入り、']);
      await printAndWait(['もともとの主である卵子を徹底的に服従させ、']);
      await printAndWait([
        '土下座し、足を舐め、母体のすべてを差し出すほどに媚びねばならない、',
        taste.uma_sex_title,
        'さまの高貴な種付けの精だ。',
      ]);
      await printAndWait(['精子は絶え間なく噴き出し、']);
      await printAndWait([
        you.get_colored_name(),
        ' の体の隅々を蹂躙し、犯していく。',
      ]);
      await printAndWait(['これこそ、孕袋としての幸福だ。']);
      println();
      await printAndWait(['——————']);
      println();
      await printAndWait(['惜しいことに、楽しい時間は永遠には続かない。']);
      await printAndWait(['どんなに長い射精にも終わりはある。']);
      await printAndWait([
        '絶頂と受胎の喜びに浸る廃れた孕袋の脳より、肉棒さまに直に触れている膣のほうが焦って柱に絡みつき、残ってほしいと懇願する。',
      ]);
      await printAndWait(['あるいは少なくとも……相手の形を覚えておきたい。']);
      await printAndWait([
        '…………それが、五秒後に次の一本が入った瞬間に忘れる記憶だとしても。',
      ]);
      println();
      await printAndWait(
        '【精液に灌がれ、妖しいピンクの光を帯びた淫紋が、そっと形を変えた】',
        { color: buff_colors[2] },
      );
    };
    f.title = [{ color: buff_colors[2], content: '孕袋の務めへの懲戒' }];
    return f;
  })(),
  punish: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {string} uma_sex_title
     * @param {boolean} is_teammate
     */
    const f = async (you, uma_sex_title, is_teammate) => {
      await printAndWait(['ちゅぱ……ちゅぱ……']);
      println();
      await printAndWait(['また夜が来て、見慣れた場所へ戻った。']);
      await printAndWait([
        you.get_colored_name(),
        ' は再び覆面と口枷を着け、見慣れた夜がまた始まる。',
      ]);
      await printAndWait([
        '孕袋としての義務を果たさなければ、またここへ来るとわかっていた。',
      ]);
      await printAndWait([
        '担当も、学園の生徒も先生も、この「一手間」なら喜んで手伝ってくれるとわかっていた。',
      ]);
      await printAndWait([
        'そこで止まっていれば、子の父を自分で選べたとわかっていた。',
      ]);
      if ((await degeneration_to_evil('服従する', '屈しない')) === 1) {
        await printAndWait([
          'だから、わざとここまで来た ',
          you.get_colored_name(),
          ' の目的は、もう明らかだろう。',
        ]);
        await printAndWait([
          'あの日の交わりを忘れられない。すべてを他人に握られる快感を忘れられない。',
        ]);
        await printAndWait([
          '性処理の道具として扱われる感覚を、忘れられない。',
        ]);
      } else {
        await printAndWait([
          'だから、ここまで来た ',
          you.get_colored_name(),
          ' の末路も、明らかだろう——',
          you.get_colored_name(),
          ' はぼんやりと考えた。',
        ]);
        await printAndWait([
          'あの日の交わりを忘れられないのか。すべてを他人に握られる快感を忘れられないのか。',
        ]);
        await printAndWait(['それとも、性処理の道具として扱われる感覚か。']);
        await printAndWait(['——薬で熱を持った耳元に、そんな囁きが聞こえる。']);
      }
      setColor();
      println();
      await printAndWait(['ぐにっ']);
      await printAndWait([
        '強く押し潰す感触が、痛みとさらなる快感を乳首から ',
        you.get_colored_name(),
        ' の脳へ送る。いけない、奉仕の最中に気を散らしては。',
      ]);
      if (is_teammate) {
        await printAndWait([
          'だが、後ろの',
          uma_sex_title,
          'さまの肉棒には、どこか見覚えがある。',
        ]);
        await printAndWait([
          '普通なら問題ない。孕袋として、学園中の',
          uma_sex_title,
          'に使われてきたのだから。',
        ]);
        await printAndWait(['だが……この見覚えは。']);
        await printAndWait(['まさか、後ろの', uma_sex_title, 'は自分の担当？']);
        await printAndWait(['正体を隠したまま、担当に使われる。']);
        await printAndWait([
          'なぜか、',
          you.get_colored_name(),
          ' は、寝取られたような緊張……と興奮を覚えた。',
        ]);
        await printAndWait(['きっと怒っている。きっと憤っている。']);
        await printAndWait(['自分のトレーナー、自分の性奴隷、自分の孕袋が、']);
        await printAndWait([
          '自分の子を孕もうとせず、正体のわからない相手に輪にされるほうを選んだのだ。',
        ]);
      } else {
        await printAndWait([
          'だが、後ろの',
          uma_sex_title,
          'さまの肉棒は、なぜかとりわけ焦っている。',
        ]);
        await printAndWait([
          '普通なら問題ない。孕袋として、欲の処理道具として、どれほど乱暴に使われても当然なのだから。',
        ]);
        await printAndWait(['だが……これほど急き、怒りさえ帯びている。']);
        await printAndWait([
          'まさか、後ろの',
          uma_sex_title,
          'は自分のファン？',
        ]);
        await printAndWait(['正体を隠したまま、ファンに使われる。']);
        await printAndWait([
          'なぜか、',
          you.get_colored_name(),
          ' は、寝取られたような緊張……と興奮を覚えた。',
        ]);
        await printAndWait(['きっと怒っている。きっと憤っている。']);
        await printAndWait(['憧れのトレーナー、憧れていた相手が、']);
        await printAndWait([
          'こんな卑しい姿で、小さな',
          uma_sex_title,
          'の純な恋心を踏みにじっている。',
        ]);
      }
      println();
      await printAndWait(['怒っているだろう。憤っているだろう。']);
      await printAndWait([
        'だから、誰にでも股を開くこの雌豚の中へ、容赦なく種を播け。',
      ]);
      await printAndWait([
        'この淫らな穴を壊せ。孕ませろ、孕ませろ、孕ませろ。',
      ]);
      await printAndWait(['肉棒の隷属へ、徹底的に変えろ。']);
      println();
      if (is_teammate) {
        await printAndWait([
          'そう思うと、',
          you.get_colored_name(),
          ' の腰はさらに踊った。',
        ]);
        await printAndWait([
          'ほどなく、その肉棒は一瞬止まり、',
          you.get_colored_name(),
          ' がいちばん待ち望んだ白濁を放った。',
        ]);
        await printAndWait(['ああ……惜しい。']);
        await printAndWait([
          '何かが外れた予感が、',
          you.get_colored_name(),
          ' の胸に浮かぶ。',
        ]);
        await printAndWait([
          'だが、次の見慣れた肉棒の感触が、また ',
          you.get_colored_name(),
          ' を余分なことを考えられないほど突いた。',
        ]);
        println();
        await printAndWait([
          '次の子は、愛する担当の',
          uma_sex_title,
          'に、と思った。',
        ]);
        await printAndWait([
          '朦朧のなか、',
          you.get_colored_name(),
          ' は、守れるかわからない決意を固めた。',
        ]);
      } else {
        await printAndWait([
          'そう思うと、',
          you.get_colored_name(),
          ' の腰はさらに踊った。',
        ]);
        await printAndWait(['だが、攻めに急いで守りを疏かにしたのか、']);
        await printAndWait(['あるいは、ただ時間が重なっただけか。']);
        await printAndWait([
          '本気を出そうとしたとき、後ろが硬直し、穴のなかへ大量の白濁を漏らした。',
        ]);
        await printAndWait(['ああ……惜しい。']);
        await printAndWait([
          '空虚な喪失感が、',
          you.get_colored_name(),
          ' の胸に浮かぶ。',
        ]);
        await printAndWait([
          'だが、次の見慣れた肉棒の感触が、また ',
          you.get_colored_name(),
          ' を余分なことを考えられないほど突いた。',
        ]);
        println();
        await printAndWait(['次は、もっと頑張ってね。']);
        await printAndWait([
          '相手の精子が、より猛々しい肉棒に穴から掻き出される感覚を味わいながら、',
          you.get_colored_name(),
          ' は無言の祝福を送った。',
        ]);
      }
      println();
      await printAndWait(
        '【精液に灌がれ、妖しいピンクの光を帯びた淫紋が、そっと形を変えた】',
        { color: buff_colors[2] },
      );
    };
    f.title = [{ color: buff_colors[2], content: '孕袋の務めへの懲戒' }];
    return f;
  })(),
  report_preg_duty: (() => {
    const title = '務め';
    /**
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} edu_count
     * @param {number} children_count
     */
    const f = async (you, father, edu_count, children_count) => {
      await printAndWait([
        you.get_colored_name(),
        ' は下腹の淫紋に現れた妊娠の模様を見つめ、洗面所へ駆け込み、吐いた。',
      ]);
      await printAndWait([
        '歩調を乱すこの小さな命に、',
        you.get_colored_name(),
        ' は——',
      ]);
      const ret = await degeneration_to_evil(
        '喜んで到来を待つ',
        '仕方なく受け入れる',
      );
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), ' は嬉しそうに想像した']);
        await printAndWait('子ができたあとの未来、生まれてからの教育……');
        await printAndWait([
          'だが、',
          you.get_colored_name(),
          ' の胸でいちばん考えたいのは、やはり',
        ]);
        println();
        await printAndWait('子の父は、誰だろう？');
        await printAndWait(
          `先日負けて、全身に歯痕を残して憤りを晴らした${father.uma_sex_title}？`,
        );
        await printAndWait(
          `それとも勝って、嬉しさのあまり子宮のなかまで尿を出した${father.uma_sex_title}？`,
        );
        if (edu_count > 0) {
          await printAndWait(
            `あるいは、毎日のトレーニング前に秘部へ一日分を注ぎ、廊下に時おり滴る白濁を挟んだままトレーニング場へ向かわせる担当の${father.uma_sex_title}？`,
          );
        }
        if (children_count > 0) {
          await printAndWait(
            'あるいは、印象ではまだ子供なのに、母の腹から出てきた道を覚えているかのように、いつも役立たずの母をアヘ顔の雌豚にする、心優しい宝物？',
          );
        }
        println();
        await printAndWait('誰であれ、新しい命の誕生は喜ばしい');
        await printAndWait([
          'ただ、',
          you.get_colored_name(),
          ' がいちばん心配なのは、やはり……',
        ]);
        println();
        await printAndWait('（子が生まれるまで、孕袋としての務めは……）');
        println();
        await printAndWait([
          '一文を考え終える前に、後ろからの衝撃が ',
          you.get_colored_name(),
          ' の思考を断った',
        ]);
        await printAndWait(
          `相手は意向など気にせず、濡れているかの確認すらしない——改造された体なら確認の必要もない。二十四時間、${father.uma_sex_title}さまの使用を歓迎して濡れている——そのまま挿し入れた`,
        );
        await printAndWait([
          '激しい打ち込みで ',
          you.get_colored_name(),
          ' が意識を失いかけたあと、後ろの',
          father.uma_sex_title,
          'はやっと放ち、',
          you.get_colored_name(),
          ' の顔で肉棒を拭いてそのまま去った',
        ]);
        await printAndWait([
          'そのあいだ、',
          you.get_colored_name(),
          ' は相手の顔すら見ていない',
        ]);
        println();
        await printAndWait('自分が孕んでいることなど言わない');
        await printAndWait(
          `腹が大きくなっても、${father.uma_sex_title}の主人にとっては、弄べる部位が一つ増えただけだろう`,
        );
        await printAndWait([
          'それを悟った ',
          you.get_colored_name(),
          ' の下はまた痙攣し、止められない潮吹きが日差しのなかで虹を作り、妊娠を祝うかのようだった',
        ]);
      } else {
        await printAndWait('驚くことはない');
        await printAndWait(
          '——毎日、トイレへ行くだけで五、六本に門を塞がれ、最後は潮と精と失禁した尿の混ざった床を自分で丁寧に舐め取る生活で、妊娠が想像しにくいはずがない。',
        );
        println();
        await printAndWait('子の父は、誰だろう？');
        await printAndWait([
          you.get_colored_name(),
          ' はまた考えずにはいられなかった——',
        ]);
        await printAndWait(
          `昨日、仲が良さそうで、孕袋まで一緒に使った二人の${father.uma_sex_title}？`,
        );
        await printAndWait(
          'それとも、自分の前で決起した隊の誰か。内外の穴をすべて満たし、吐く息まで濃い精の匂いがした……最後は体の精を少しずつ口へ舐め、秘部へ押し込まねばならなかった——あるいはそのとき孕んだのかもしれない',
        );
        println();
        await printAndWait([
          'いつのまにか、',
          you.get_colored_name(),
          ' は子の未来に、理由のない恐怖を覚えていた',
        ]);
        if (children_count > 0) {
          await printAndWait(
            `あの子の幼い頃を思い出す。つい先日のようだったのに、${father.sex}は無垢な目の幼児から、自分が生まれた穴を欲の目で見る獣になっていた`,
          );
          await printAndWait([
            you.get_colored_name(),
            ' は、また子に弄ばれ、母とは呼べない恥ずかしい姿になるのではないかと心配した',
          ]);
        } else {
          await printAndWait(
            `これから生まれるこの子は、ほかの${father.uma_sex_title}たちと同じように、自分を孕袋として扱うのだろうか……`,
          );
          await printAndWait(
            '……だめだ。務めを果たさねば。少なくとも、この子はきちんと育て上げる',
          );
        }
        println();
        await printAndWait('孕袋が育てた子が、まともに大人になれるのか？');
        await printAndWait(
          `毎日、母がさまざまな${father.elder_sibling_sex_title}に犯され、涎を垂らし、尊厳なく許しを請う姿を見て`,
        );
        await printAndWait('そんな子が、屈せず健やかに育つはずがあるのか？');
        await printAndWait('だが、笑う資格もない');
        await printAndWait([
          'いま、トイレの前を通りかかった小学部の',
          father.uma_sex_title,
          'に地へ押さえられ、肉棒に奉仕している ',
          you.get_colored_name(),
          ' は、その薄い光に希望を託すしかなかった',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_in_sleep: (() => {
    const title = '新しい命';
    /**
     * 孕袋が睡姦で子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     * @param {number} children_count
     * @param {number} edu_count
     */
    const f = async (you, father, children_count, edu_count) => {
      await printAndWait([you.get_colored_name(), ' は子を抱き上げた——']);
      const ret = await degeneration_to_evil('慈しんで撫でる', '無言で抗う');
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' の胸は愛情でいっぱいだった',
        ]);
        await printAndWait('子の父が誰かは、もうどうでもいい');
        await printAndWait([
          'むしろ、孕袋のいつもの仕事をしているだけで、こんなに可愛い子が得られる……',
          you.get_colored_name(),
          ' は心のなかで、顔も知らない父へ礼を言った',
        ]);
        await printAndWait('これから、この子をきちんと育て上げよう……');
        await printAndWait([
          'いつのまにか、かつて ',
          you.get_colored_name(),
          ' の胸にあった、トレーナーとしての責任と誇りが、また芽を出した……',
        ]);
        printButton('「！」', 1);
        await input();
        await printAndWait([
          '突然の水が、',
          you.get_colored_name(),
          ' を幻想から叩き起こした',
        ]);
        await printAndWait('抱き上げた子が、母へ人生最初の尿をかけた');
        await printAndWait([
          '自分の子に便所にされたこと——たとえ偶然でも——に、',
          you.get_colored_name(),
          ' は言いようのない快感を覚えた。この子が自分を便所として使えるように生まれてきたのだ、とさえ思えた',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' は優しく子の秘部を舐め、体にかかった液を残らず口へ運び、満足げに指を舐めた',
        ]);
        println();
        await printAndWait('これほど卑しい姿は、最下等の孕袋でもこの程度だ');
        await printAndWait('こんな自分が、元の生活へ戻れるはずがない');
        await printAndWait('そんな生活へ戻ることなど、もう耐えられない');
        await printAndWait([
          you.get_colored_name(),
          ' は胸の子を優しく見ている。表情は変わらない',
        ]);
        await printAndWait('だが、胸のなかはもう違う');
        await printAndWait(
          '————どうすれば、この子を、自分を調教するのにいちばん向いた主人に育てられるだろう？',
        );
      } else {
        await printAndWait(
          'この子へ、理論上は母として持つべき感情が、薄れてしまっている',
        );
        await printAndWait(
          '生まれたばかりの子に罪はないと、わかっているのに……',
        );
        printButton('「！」', 1);
        await printAndWait(['突然、', you.get_colored_name(), ' は声を上げた']);
        await printAndWait([
          '子の最初の尿は、狙いを定めたように噴き、',
          you.get_colored_name(),
          ' の顔を濡らした',
        ]);
        await printAndWait(
          '看護師も善意の笑いをこぼした。子の健康を喜ぶかのように',
        );
        await printAndWait([
          'だが ',
          you.get_colored_name(),
          ' の胸に喜びはなく、頭のなかには過去が蘇る',
        ]);
        println();
        await printAndWait(
          `朝、両脚を開いて蹲り、眠気の残る${father.uma_sex_title}の朝勃ちを口で処理し、一日の初精と初尿を腹へ飲み込んだ経験`,
        );
        await printAndWait(
          `夕方、トレーニング場で練習を終えた${father.uma_sex_title}たちに欲の処理を懇願され、一日分の汗と垢のついた肉棒を口に含み、${father.couple_title}の疲れを口のなかへ吐き出させた経験`,
        );
        if (children_count > 0 || edu_count > 0) {
          await printAndWait([
            you.get_colored_name(),
            ' は悲しげに、数日前の夜を思い出した',
          ]);
          await printAndWait([
            '自分の',
            children_count > 0 ? '子' : `担当${father.uma_sex_title}`,
            'が夢遊で部屋へ入り、半睡のなかで秘部を満たしたあと、眠っている唇を無理に開いて掃除したときも、自分は目覚められなかった',
          ]);
          println();
          await printAndWait([
            you.get_colored_name(),
            ' は、この生活に慣れ始めているのではないかと疑い始めた……',
          ]);
          await printAndWait([
            'だめだ、そう思ってはいけない、と ',
            you.get_colored_name(),
            ' は我に返ったように首を振った',
          ]);
        }
        println();
        await printAndWait('……やはり、思い出すのは辛い記憶ばかり。だが……');
        await printAndWait(
          '胸のなかの、何も知らず、母の顔に尿をかけても気にせず、けらけら笑う子を見る',
        );
        await printAndWait('子の天性は、善悪とは無縁だ……');
        await printAndWait('あるいは、まだ機会はある……？');
        println();
        await printAndWait('子が周囲の行いを学ぶ力を、忘れている');
        await printAndWait(
          `孕袋が奉仕する相手が、身分を問わない「すべての${father.uma_sex_title}」であることも、忘れている`,
        );
        await printAndWait(
          '傍らの看護師が、もう孕袋の口奉仕を欲しがっていることにも気づかない',
        );
        await printAndWait(
          '無意識に、実の子がかけた尿を舐め取っていることにも気づかない',
        );
        await printAndWait([
          you.get_colored_name(),
          ' は子を抱き、看護師のスカートの下の太いものを吸わされても、瞳の光は消えなかった',
        ]);
        println();
        if (get('exp:0:生产次数') > 0) {
          await printAndWait([
            'また空虚な夢を抱き、',
            you.get_colored_name(),
            ' は今度こそこの子をきちんと育てると決意した',
          ]);
        } else {
          await printAndWait([
            '空虚な夢を抱き、',
            you.get_colored_name(),
            ' はこの子をきちんと育てると決意した',
          ]);
        }
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_after_raped: (() => {
    const title = '新しい命';
    /**
     * 孕袋が強姦で子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([you.get_colored_name(), ' は子を抱き上げた——']);
      const ret = await degeneration_to_evil(
        '子には父が要る',
        'いいえ、自分だけでも育てられる',
      );
      if (ret === 1) {
        await printAndWait(
          '……自分ひとりなら、どうにか生きていけるかもしれない',
        );
        await printAndWait('だが少なくとも、子には揃った家庭が欲しい');
        println();
        await printAndWait(`子の父を見て、腕の子を${father.sex}に見せた`);
        await printAndWait(`この子が、${father.sex}の責任感を刺激してくれれば`);
        await printAndWait([
          father.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' と子を強く抱き、これから大切にすると誓った',
        ]);
        await printAndWait('改心した父と、離れない母');
        await printAndWait(
          'さっきまで胸にあった一家三人の幻想が、そのまま現実になったようだった',
        );
        println();
        await printAndWait('だが……');
        await printAndWait([
          '孕袋としての職業本能が、',
          you.get_colored_name(),
          ' に見逃させなかった',
        ]);
        await printAndWait([
          '自分が乳をやるのを見て、',
          father.get_colored_name(),
          ' の股が震える様子を',
        ]);
        println();
        await printAndWait('家庭生活……いい口実だ');
        await printAndWait(
          'これなら、子に乳をやりながら肉棒を口へ入れられても、「栄養補給」で片づけられる',
        );
        await printAndWait([
          '夫である ',
          father.get_colored_name(),
          ' が、子を抱く自分を優しく抱きしめる絵は、家庭に疑問を持つ誰も疑念を捨てるだろう……下で濡れた秘部を太い肉棒が塞いでいることに気づかなければ',
        ]);
        await printAndWait(
          'いつか子が大きくなったら……子と、子の父に一緒に使われ、挟まれて、雄の肉棒に溺れる……',
        );
        println();
        await printAndWait([
          'そんな未来を思い、',
          you.get_colored_name(),
          ' は思わず唇を舐めた……',
        ]);
        await printAndWait('そんな明日を、待ち始める');
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' は、欲を吐き出すだけ吐き、責任など考えず中に出した ',
          father.get_colored_name(),
          ' を睨んだ',
        ]);
        await printAndWait(`こんな${father.sex}が、父の責任を負うはずがない`);
        await printAndWait(
          '必要なのは、辱めのなかで自分と子を支え、子を守る相手だ',
        );
        await printAndWait(
          '自分が欲の処理道具にされているとき、最後の声の出口まで肉棒で塞ぐ屑ではない',
        );
        println();
        await printAndWait('自分ひとりでも、この子を育てる');
        await printAndWait([
          'このとき ',
          you.get_colored_name(),
          ' は、いちばん険しい道を選んだ',
        ]);
        println();
        await printAndWait('突然、胸の子が泣き出した');
        await printAndWait('お腹が空いたのか？ 乳が欲しいのか？');
        await printAndWait('ならば……調教され尽くした今のこの体は');
        await printAndWait(
          `乳首を吸われた瞬間、自分の乳首を噛み、舐めた${father.uma_sex_title}たちを思い出すだろう`,
        );
        await printAndWait(
          '胸を含ませた瞬間、揉まれ搾られた夜を思い出して、すぐに果てるだろう',
        );
        await printAndWait(
          '子が乳を飲み終わり、胸に寄りかかったとき……赤ん坊の体温に近い肉棒が胸の前で主権を示し、最後に口へ濃い白濁を注いだ夜を、思い出さないだろうか？',
        );
        println();
        await printAndWait(
          'そして、それを乗り越え、ようやくこの子を育て上げたとして……',
        );
        await printAndWait(
          '愛が何かを知る前に、本能で性を理解した目を、子が自分へ向けたとき',
        );
        await printAndWait('自分はどうすればいい');
        println();
        await printAndWait('眼前の道は、真っ暗だった……');
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  have_baby_dedicate: (() => {
    const title = '新しい命';
    /**
     * 孕袋が自ら身を捧げて子を産む
     * @author 幽白書
     * @param {CharaTalk} you
     * @param {CharaTalk} father
     */
    const f = async (you, father) => {
      await printAndWait([you.get_colored_name(), ' は子を抱き上げた——']);
      const ret = await degeneration_to_evil('歓びを思い出す', '母性が湧く');
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' は子を抱き、胸に激しいものが湧いた',
        ]);
        await printAndWait([
          'これは ',
          you.get_colored_name(),
          ' と ',
          father.get_colored_name(),
          ' が結ばれて生まれた子だ',
        ]);
        await printAndWait('……違う。結ばれたのではない');
        await printAndWait([
          you.get_colored_name(),
          ' の遺伝子が自ら服し、',
          father.get_colored_name(),
          ' の遺伝子の下に跪いて生まれた産物だ',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' の体は、相性に抗えず、遺伝子の奥の渇望に抗えない',
        ]);
        await printAndWait([
          'この子の顔を見て、',
          you.get_colored_name(),
          ' の胸はさまざまな慈しみでいっぱいになる',
        ]);
        await printAndWait([
          'そこに見える ',
          father.get_colored_name(),
          ' の影の一つひとつが、強く容赦のない甘い侵犯を何度も思い出させる',
        ]);
        await printAndWait([
          'この子を連れて外へ出る絵を思うと、自分が ',
          father.get_colored_name(),
          ' の専属孕袋である証明を持ち歩いているようで……',
        ]);
        await printAndWait([you.get_colored_name(), ' の下は、思わず震えた']);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' は子を抱き、胸に波が立った',
        ]);
        await printAndWait([
          'これは ',
          you.get_colored_name(),
          ' と ',
          father.get_colored_name(),
          ' が結ばれて生まれた子だ',
        ]);
        await printAndWait('違う。結ばれたのではない');
        await printAndWait([
          father.get_colored_name(),
          ' の遺伝子が ',
          you.get_colored_name(),
          ' の遺伝子を侵して生まれた産物だ',
        ]);
        await printAndWait([
          'この体に生まれつきの奴隷性に抗いがたい。心底では受け入れられず、嫌悪していても、改造された体は子のための部屋を自ら開き、',
          father.get_colored_name(),
          ' に種を播かれる準備を整える',
        ]);
        await printAndWait([
          '胸の子を見て、',
          you.get_colored_name(),
          ' は恨むべきだった',
        ]);
        await printAndWait([
          'そこに見える ',
          father.get_colored_name(),
          ' の影の一つひとつが、強く容赦のない侵犯を何度も思い出させる',
        ]);
        await printAndWait([
          'この子を宿した夜、',
          father.get_colored_name(),
          ' の求めで、',
          you.get_colored_name(),
          ' は子犬のように四つん這いになり、精で満たされ、両手が体を支えられなくなるまで続き、',
          father.get_colored_name(),
          ' はやっと肉棒を抜き、',
          you.get_colored_name(),
          ' の口へ入れて終わりにした',
        ]);
        await printAndWait([
          'だが二人の遺伝子はそれほど相性がよかったのか、',
          you.get_colored_name(),
          ' は憎しみきれず、胸に湧いたのは母と呼ばれる感情だけだった',
        ]);
        await printAndWait([
          '——ただ、',
          you.get_colored_name(),
          ' はまだ知らない。この子が育ったあと、その感情は再び遺伝子上の屈服へと変わる……',
        ]);
      }
      setColor();
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
