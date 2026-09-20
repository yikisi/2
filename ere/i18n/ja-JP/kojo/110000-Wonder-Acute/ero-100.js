/**
 * @file ワンダーアキュート - 調教
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { vp_status_enum } = require('#/data/ero/status-const');

module.exports = {
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async kiss(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(
        '触れ合う鼻先。熱い吐息が、すべすべした首筋を撫でる。',
      );
      await you.print_and_wait('息が詰まりそうなほど、熱い愛情。');
      await acute.say_and_wait('ん……は、は……❤️');
      await you.print_and_wait(
        '両手は後頭部を囲み、赤い頬は欲の色で満ちている。',
      );
      await you.print_and_wait('……まだ、足りないらしい。');
    } else {
      await you.print_and_wait(
        'またキスを、また抱き合う。相手の唇に、自分の跡を残したい。',
      );
      await acute.say_and_wait(['……ねえ、知っていますか、', callname, '。']);
      await you.print_and_wait([
        '短い離れのあと、',
        y_call_a,
        ' が、ゆるく言う。',
      ]);
      await acute.say_and_wait('この程度では……わたしは、満足できませんよ❤️');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async french_kiss(acute, you, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait('自分の舌が、相手の口の中を探る。');
      await you.print_and_wait('もっと深く、もっと奥へ。');
      await you.print_and_wait(['だがすぐに、', y_call_a, ' の舌に見つかる。']);
      await you.print_and_wait(
        '舌は相手の口の中へ強く押し込まれ、ワンダーアキュートの小さな舌に下顎へ挟まれ、絡まれ続ける。',
      );
      await acute.say_and_wait('……❤️～');
      await you.print_and_wait([
        '目を開けると、見えるのは ',
        y_call_a,
        ' の目の中の笑い。',
      ]);
    } else {
      await you.print_and_wait([
        '歯の守りはすぐ、弄ぶ舌に破られ、',
        y_call_a,
        ' が自分の口へ深く入ってくる。',
      ]);
      await you.print_and_wait(
        '侵されるように、歯の奥に隠した舌が上下に弄ばれ、絡まれる。',
      );
      await you.print_and_wait(
        '口の中の唾液も戦利品のように奪われ、残るのは相手の唾液だけの強制的な交換。',
      );
      await you.print_and_wait([
        '目を開けると、',
        y_call_a,
        ' の媚びた目は変わらず、後頭部を囲む両手もますます力を入れる。',
      ]);
      await you.print_and_wait([
        '……舌で ',
        y_call_a,
        ' に勝てる自信は、まったくない。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async relax(acute, you, y_call_a, callname) {
    await acute.say_and_wait(['ふ……', callname, '、お水は、いかがですか？']);
    await you.print_and_wait([
      'つかの間の休み。',
      y_call_a,
      ' が優しく、水分を摂るか尋ねている。',
    ]);
    await you.print_and_wait([
      '額から小さな汗が落ち、',
      acute.sex,
      'の裸で白い体を見る。',
    ]);
    await you.print_and_wait('——心臓が左側で、どんどんと打つ。');
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async lure(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      if (Math.random() < 0.5) {
        await you.print_and_wait([
          '指先が ',
          y_call_a,
          ' の乳首を円に撫でる。耐えきれず零れる声を、',
          y_call_a,
          ' から聞きたい。',
        ]);
        await you.print_and_wait([
          'だが ',
          y_call_a,
          ' は自分の手を握り、下腹の子宮のあたりへ導く。',
        ]);
        await acute.say_and_wait([
          'ねえ……',
          callname,
          '。こちらは……だめ、ですか？',
        ]);
        await you.print_and_wait([
          y_call_a,
          ' が頭を預けて見上げる。赤い頬の下から、誘う低い声が——',
        ]);
      } else {
        await you.print_and_wait([
          y_call_a,
          ' を誘うために伸ばした指は、すぐ',
          acute.sex,
          'の唇と舌に呑まれる。',
        ]);
        await you.print_and_wait(
          '人差し指、親指、中指、薬指、小指、掌、甲——ひとつずつ舐め、ひとつずつ吸い、唾液の跡を残す。',
        );
        await you.print_and_wait([
          'それでも ',
          y_call_a,
          ' は足りないらしい。腕に密着し、舌で手首を弄ぶ',
          acute.sex,
          'は、発情した獣のように目を見開いている。',
        ]);
        await acute.say_and_wait([
          'は、は……脇の、',
          callname,
          ' の匂い……',
          callname,
          '、このまま、続けてもいいですか？',
        ]);
      }
    } else {
      await you.print_and_wait('あまり、効いていないようだ……');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async talk(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        'まさか、',
        callname,
        ' とここまで来るなんて……',
      ]);
      await you.print_and_wait([
        '十指を前で組み、裸を隠す気などない ',
        y_call_a,
        ' が、首を傾げる。',
      ]);
      await acute.say_and_wait('でも、するなら……しっかり、楽しむべきですよ');
      if (acute.sex_code !== 1) {
        await you.print_and_wait([
          acute.sex,
          'は優しく笑い、手を後ろへ回す。淡い乳首が、丸見えになる。',
        ]);
      }
    } else {
      await you.say_and_wait('優しくした方がいいか？');
      await you.print_and_wait(['……', y_call_a, ' は俯いたまま、反応しない。']);
      await you.say_and_wait('それとも、もっと強く？');
      await you.print_and_wait(['……', y_call_a, ' の尻尾が揺れ始める。']);
      await you.print_and_wait(
        '裸でも羞恥を見せないのに、こんな話題だけは正面から答えない。',
      );
      await you.print_and_wait(
        '珍しくて、豊かな尻を叩く。「ぱん」という響きが、答えになる——',
      );
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async switch(acute, you, callname, y_call_a) {
    await acute.say_and_wait('あら？ 主導を、わたしに？ ……ん——');
    await you.say_and_wait('だめか？');
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        'だめ、ではありませんよ……ただ、',
        callname,
        '……',
      ]);
      await acute.say_and_wait('これから何が起きても……耐えてくださいね～？');
      await you.print_and_wait([
        'そう言って、',
        acute.sex,
        'の両手は胸へ伸び、胸の前に伏せる。',
      ]);
      await you.print_and_wait(['……', y_call_a, ' の両目に、赤い光が宿る。']);
    } else {
      await acute.say_and_wait('だめ、ではありませんよ……');
      await you.print_and_wait([
        '一瞬、',
        y_call_a,
        ' の目に残念そうな色が過ぎる——',
      ]);
      await acute.say_and_wait([
        'では、',
        callname,
        '……痛いときは、言ってくださいね～？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} success 反抗に成功したか
   */
  async resist(acute, you, callname, y_call_a, success) {
    await acute.say_and_wait([
      'ねえ、',
      callname,
      '、……逆らわない方が、いいですよ？',
    ]);
    await you.print_and_wait([
      '目に妖しい光を宿した ',
      y_call_a,
      ' が、自分を地へ押し倒す。',
    ]);
    await acute.say_and_wait('さもなければ……怪我をしますよ');
    await you.print_and_wait([
      '両手を強く握られ、',
      acute.sex,
      'の唇と舌が首筋へ伸びる……',
    ]);
    era.println();
    if (success) {
      await you.print_and_wait('怪我？ そんなことは、どうでもいい。');
      await you.print_and_wait([
        '両手首が外れる覚悟で身を起こし、顔を上げ、',
        y_call_a,
        ' に口づける。',
      ]);
      await acute.say_and_wait('ん！……❤️');
      await acute.say_and_wait('❤️～');
      await acute.say_and_wait(['……', callname, '、ずるいです']);
    } else {
      await you.print_and_wait('力の限り足掻いても、すべて徒労になる。');
      await you.print_and_wait(
        '巨獣に狙われた獲物のように、足掻くほど、相手は昂る。',
      );
      await acute.say_and_wait(['は❤️～優しくしますからね、', callname, '。']);
      await you.print_and_wait([
        '熱い吐息とともに、',
        y_call_a,
        ' が自分の首筋へ跡を残す……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async gargle(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '洗面台の前。ざあざあと水がコップを満たしたところで、',
      y_call_a,
      ' が鏡に映る。',
    ]);
    await acute.say_and_wait(
      'きちんと、きれいにしてくださいね～ 虫歯になったら困ります……',
    );
    await you.print_and_wait([
      '言いながら、',
      acute.sex,
      'は慣れた手つきで洗面台から歯ブラシを「出す」。',
    ]);
    await acute.say_and_wait([
      'ねえ、わたしが ',
      callname,
      ' の歯を磨いてあげましょうか？ きれいにお掃除できますよ～',
    ]);
    await you.print_and_wait('……そこまでフルセットにする必要は、ないだろ？');
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async wipe_body(acute, you, callname, y_call_a) {
    await acute.say_and_wait('よいしょ、よいしょ……');
    await you.print_and_wait([
      '抹茶いろのタオルで、',
      y_call_a,
      ' が真面目に体を拭いている。',
    ]);
    await acute.say_and_wait([
      'ふ、ふ……これで綺麗ですね～ ねえ、',
      callname,
      '、他に掃くところはありますか？',
    ]);
    await you.print_and_wait('……裸なのに、掃除好きの本性が、ちゃんと見える。');
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_ear(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        y_call_a,
        ' の耳を撫でる……なんと言えばいいか、癖になる感触だ。',
      ]);
      await you.print_and_wait(
        'ふわふわの外耳から柔らかい内耳へ指を入れ、人差し指で中耳の小さな骨の並びを確かめる。',
      );
      await you.print_and_wait('……この掌半分ほどもある耳で、性器を包んだら——');
      await you.print_and_wait([
        '頭の中に下品な絵が閃いた瞬間、手の中の ',
        y_call_a,
        ' の耳が、警戒して「立つ」。',
      ]);
      await acute.say_and_wait([
        callname,
        '……いま、よくないことを考えていましたね？',
      ]);
      await you.print_and_wait('……あはは、ばれたか。');
    } else {
      await acute.say_and_wait(['ん❤️～', callname, ' の手つき、少し下品です']);
      await you.print_and_wait('下品か？ ふむ……');
      await you.say_and_wait('じゃあ、少し舐めてもいいか？ 耳を');
      await acute.say_and_wait('だめですよ～');
      await you.print_and_wait(
        '優しい声の下に、踏み込めない決意が隠れている。',
      );
      await you.print_and_wait('……しかも耳に手を叩かれ、少し痛い。');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async pull_ear(acute, you, callname, y_call_a) {
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await you.print_and_wait([
        acute.uma_sex_title,
        'にとって、耳は外に出た弱点だ。なぜ',
        acute.uma_sex_title,
        'は、生まれつきこんな弱点を持つのか。',
      ]);
      await you.print_and_wait(
        'トレーナーが耳を引き、鞭を執るため、に決まっている。',
      );
      await you.print_and_wait([
        '眼前、耳を引かれて涙を流す ',
        y_call_a,
        ' は、それでも微笑んで自分を見ている。',
      ]);
      await acute.say_and_wait([
        'ねえ、',
        callname,
        '、次は何をしますか？ ……尻尾を引っ張ります？ 平手を？ それとも、わたしを足元に？',
      ]);
      await acute.say_and_wait(
        '何でも、耐えられますよ～ あなたが喜んでくださるなら、それが何よりです❤️～',
      );
      await you.print_and_wait('……胸に、わけのわからない加虐心が涌く。');
    } else {
      await you.print_and_wait([y_call_a, ' の耳を、強く引っ張る。']);
      await you.print_and_wait([
        acute.uma_sex_title,
        'にとって外に出た弱点である耳を、こうして強く引かれれば、痛みに強い ',
        y_call_a,
        ' でも、さすがに堪える。',
      ]);
      await acute.say_and_wait([
        '優しく、もう少し優しく……',
        callname,
        '……こうされると、痛いのです……',
      ]);
      await you.print_and_wait([
        'いつもどおりに見えても、',
        y_call_a,
        ' の目尻は、耳を引く痛みで、知らず涙をにじませている……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   * @param {boolean} is_huge_tit ワンダーアキュートが巨乳か
   */
  async pet_breast(acute, you, callname, y_call_a, is_first, is_huge_tit) {
    if (is_first) {
      if (is_huge_tit) {
        await you.print_and_wait(
          '片手では包みきれず、指の隙間から乳が溢れる大きさ。',
        );
      } else {
        await you.print_and_wait(
          '小さくもなく、大きくもなく、ちょうど掌に収まる大きさ。',
        );
      }
      await you.print_and_wait(
        '柔らかい感触。左右に押せば、掌の中で水面のように揺れる。\n',
      );
      await acute.say_and_wait(['ねえ……', callname, '、摘んでみますか？❤️～']);
      await you.print_and_wait(
        '翡翠のような瞳の下に隠れるのは、掌中の自信か、底の見えない欲か。',
      );
      await you.print_and_wait(
        '……誰が知るだろう。ただ、掌の中で充血した乳首が熱い。',
      );
    } else {
      await you.print_and_wait('もみ、もみ……');
      await you.print_and_wait(
        '団子のような感触なのに、規格は団子を遥かに超える。',
      );
      await you.print_and_wait('生地より熱く、より弾む。');
      await you.print_and_wait('菓子ではないのに、食欲が開く。');
      await acute.say_and_wait('ねえ、その子の胸は、食べられませんよ？❤️～');
      await you.print_and_wait('……また、心を読まれた。');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_nipple(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait('こすれ、こすれ……');
      await you.print_and_wait('充血した乳首は、意外なほど熱い。');
      await you.print_and_wait('指先に、不思議な感触が伝わる。');
      await acute.say_and_wait('ん❤️');
      await you.print_and_wait([
        y_call_a,
        ' は歯を食いしばり、胸の痒みに耐えている。',
      ]);
      await you.print_and_wait(
        'このまま開発すれば、いつか乳首が咲く日が見られるだろう。',
      );
      await you.print_and_wait('……その前に、まだ擦り続けたい。');
    } else {
      await you.print_and_wait('乳首を摘み、上へ引き上げる。');
      await you.print_and_wait(
        '蛇口を握られたように、胸全体が引っ張られて上がる。',
      );
      await you.print_and_wait(
        '乳首を摘んだまま四方へ揺らせば、胸が指先の下で踊る。',
      );
      await acute.say_and_wait([
        'ん❤️～',
        callname,
        '、だめ……胸を、弄らないで❤️……痒いのです❤️～',
      ]);
      await you.print_and_wait([
        '乳首を弄られるまま、唇を噛み、手で上顔を隠す ',
        y_call_a,
        ' が、何度も声を零す。',
      ]);
      await you.print_and_wait([
        '……もっと先へ行き、',
        y_call_a,
        ' が肉欲に溺れる顔を見たい。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_clitoris(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['赤く、まっすぐに立っている。']);
      await you.print_and_wait(['少し弄れば、左右に長く揺れる。']);
      await acute.say_and_wait([
        'ん……ずっと見ないでくださいませんか？ 少し、恥ずかしいです……',
      ]);
      await you.print_and_wait([
        'そう言われても、指先はなお陰核を上下に滑らせる。',
      ]);
      await you.print_and_wait([
        '……奇妙な感触だ。もう少し、真面目に調べたい——',
      ]);
    } else {
      await you.print_and_wait([
        '強く押してみるが、すぐ、より赤く腫れて弾き返される。',
      ]);
      await you.print_and_wait(['淡くて、綺麗だ。写真に残したくなるほど……']);
      await acute.say_and_wait([callname, '、だめですよ～']);
      await you.print_and_wait(['心を読んだ ', y_call_a, ' が、拒む。']);
      await you.print_and_wait(['……なら、仕方なく、摘むしかない。']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async finger_fuck(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['指は、楽に呑み込まれる。']);
      await you.print_and_wait([
        '上下に掻き回せば、穴の中の蠕動がはっきり分かる。',
      ]);
      await acute.say_and_wait(['ん❤️～、ん❤️～。']);
      await you.print_and_wait([
        y_call_a,
        ' が小さな声を零し、両脚が勝手に閉じる。',
      ]);
      await you.print_and_wait(['……もう少し、大きく鳴いてもいいのに。']);
    } else {
      await you.print_and_wait(['中指を穴へ入れ、親指で陰核を弄る。']);
      await you.print_and_wait([
        '明らかに、',
        y_call_a,
        ' の声が大きくなった。',
      ]);
      await acute.say_and_wait(['あ❤️～、ん❤️～そこ❤️～すごい……']);
      await you.print_and_wait([
        '指先に温かい流れを感じる……まだ、先へ行けそうだ。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async prepare_virgin(acute, you, callname) {
    await acute.say_and_wait(['ん……', callname, ' の命令なら……']);
    await you.print_and_wait(['左右の手で、自分の下の細い割れ目を開く。']);
    await you.print_and_wait([
      '湿った粘液が、熱い吐息とともに、入り口を開いて溢れる。',
    ]);
    await acute.say_and_wait([
      'そうやって、じっと見られると……少し、恥ずかしいです～',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async stimulate_g_spot_by_finger(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await acute.say_and_wait(['ん❤️～～～～～～～']);
      await you.print_and_wait([
        y_call_a,
        ' のいちばん敏感な場所を見つけた。軽く引っかけるだけで、穴の中が蠢く。',
      ]);
      await you.print_and_wait([
        '舌が外へ出て、大きく息を吐き、Gスポットを弄ぶたび、腰が弓のように高く反る。',
      ]);
      await you.print_and_wait(['……もう、かなりだらしない顔だ。']);
    } else {
      await you.print_and_wait(['触れるだけで、熱波が指先に返ってくる。']);
      await you.print_and_wait([
        '引き抜くと、人差し指と中指のあいだの粘液が糸を引いている。',
      ]);
      await you.say_and_wait([
        'なあ……',
        y_call_a,
        '、女の子の体の中に、どうしてこんな場所があるんだ？',
      ]);
      await acute.say_and_wait(['は、は～❤️……', callname, '、上手すぎます']);
      await you.print_and_wait([
        '息を吐き、声を零す ',
        y_call_a,
        ' は、問いに答えず、別の返事をする——',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_anal(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '嫌な匂いはない。丁寧に洗われていて、かえってきれいだ。',
      ]);
      await you.print_and_wait([
        'それでも、軽く撫でただけで、尻尾が警戒して立つ。',
      ]);
      await acute.say_and_wait([
        'ねえ……',
        callname,
        '、ないとは思いますけれど、もしかして、そちらに興味が——ひ❤️～！',
      ]);
      await you.print_and_wait([
        '言い終わる前に人差し指が入り、',
        y_call_a,
        ' が刺激に高い声を上げる。',
      ]);
    } else {
      await acute.say_and_wait(['そちらは……洗ってありますから']);
      await you.print_and_wait([
        '何かを察したのか、俯いて視線を逸らす ',
        y_call_a,
        ' が、先に答える。',
      ]);
      await you.print_and_wait([
        'それは好都合だ。指は遮るものなく、',
        acute.sex,
        'の後ろへ伸びる。',
      ]);
      await you.print_and_wait([
        '指一本、二本。関節ひとつ、ふたつ……一歩進むたび、',
        y_call_a,
        ' の高い声が聞こえる。',
      ]);
      await acute.say_and_wait(['は……', callname, '、やっぱり、変態ですね']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async prepare_anal(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '左右の手で後ろを開き、淡い穴から時折「ぷ、ぷ」と音が漏れる。',
    ]);
    await you.print_and_wait([
      '熱い吐息を放つその穴へ、口の中の空気を吹き込んだら……',
    ]);
    await acute.say_and_wait([
      'そんなことをしたら、明日はカリカリ干しをあげません……',
    ]);
    await you.print_and_wait([
      'あの ',
      y_call_a,
      ' でも、自分から後ろを開いている状況では、そこまでは認めないらしい……',
    ]);
    await you.print_and_wait([
      '……だから余計に、その穴へ息を吹き込みたくなる。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_leg(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '細く滑らかな太ももに、調教で太くなった跡はまったく見えない。',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' の脚を上下に撫でながら、なぜか「win～win～」と音を出したくなる。',
      ]);
      await you.print_and_wait([
        'もう一歩進めようとしたとき、白い美脚が蟒のように腰へ絡む。',
      ]);
      await acute.say_and_wait([
        'ねえ、さっきからずっと ',
        callname,
        ' が撫でていますね……わたしも、触っていいですか？',
      ]);
      await you.print_and_wait([
        '……しまった。腰を巻かれたあと、',
        y_call_a,
        ' に勝てる自分は、想像できない。',
      ]);
    } else {
      await you.print_and_wait([
        '滑らかな趾と足裏に、長く走ってきた跡は見えない。不思議だ。',
      ]);
      await you.print_and_wait([
        '特別な癖があるわけではない。ただ、この足を口に入れたくなる。',
      ]);
      await acute.say_and_wait(['カビが生えますよ？']);
      await you.say_and_wait([
        '……',
        y_call_a,
        '、こんなに綺麗で匂いもない足が、なるわけないだろ。',
      ]);
      await acute.say_and_wait(['あら……そう、なのですか？']);
      await you.print_and_wait([
        'そう言うと反対側で、',
        y_call_a,
        ' は迷わず ',
        you.get_colored_name(),
        ' の足を抱え、口へ入れようとする。',
      ]);
      await you.say_and_wait(['……いやいや、それはやめよう']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async pet_tail(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['四本の指を尻尾の根元へ入れ、下へ梳く。']);
      await you.print_and_wait([
        '極上の感触だ。柔らかく、枝毛もない……ずっと手入れしているのが分かる。',
      ]);
      await you.print_and_wait([
        '……一部の',
        acute.uma_sex_title,
        'にとって尻尾は触れられてはいけない場所で、触れば襲われる、と聞く……本当かどうか。',
      ]);
      await acute.say_and_wait(['本当ですよ～']);
      await you.print_and_wait([
        '微笑んで疑問に答える一方、尻尾は口と違う返事をし、嬉しそうに左右へ揺れる。',
      ]);
    } else {
      await you.print_and_wait(['尻尾の先へ鼻を寄せ、匂いを軽く嗅ぐ。']);
      await you.print_and_wait([
        y_call_a,
        ' の尻尾には、春の雨のあとの土のような、澄んだ匂いがある。',
      ]);
      await you.print_and_wait([
        '顔ごと尻尾へ埋め、',
        y_call_a,
        ' の匂いを思う存分味わいたい。',
      ]);
      await acute.say_and_wait([
        'ねえ……',
        callname,
        ' の好み、変わっていますね～',
      ]);
      await you.print_and_wait([
        'そう言いながら、',
        y_call_a,
        ' の尻尾が上下に揺れ、頬を撫で、鼻先を払う……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async pull_tail(acute, you, callname, y_call_a) {
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await acute.print_and_wait([
        acute.uma_sex_title,
        'の尻尾は、トレーナー専用のスイッチではない。',
      ]);
      await acute.print_and_wait([
        'なのに今は、どこにいても、尻尾を引けば、自分の尻が勝手に上がる。',
      ]);
      if (acute.sex_code !== 1) {
        await acute.say_and_wait(
          ['ん、わたし、ずいぶん安い女になってしまいましたね——'],
          true,
        );
        await acute.print_and_wait([
          '尻尾の痛みとともに高く上がった尻が左右に揺れ、待ちきれない下はもう涎を垂らしている。',
        ]);
        await acute.print_and_wait([
          'もっと先へ行きたい。尻尾を引かれ、尻を叩かれ、秘部を弄ばれ、上から下まで徹底して弄ばれ、',
          callname,
          ' の匂いを纏い、頭が空っぽになるまで。',
        ]);
        await acute.print_and_wait([
          '……こんなことを考える',
          acute.uma_sex_title,
          'は、自分ひとりではあるまい。',
        ]);
      }
    } else {
      await you.print_and_wait([y_call_a, ' の尻尾を、力を入れて引く。']);
      await you.print_and_wait(['少し力を入れれば、尻が高く上がる。']);
      await you.print_and_wait([
        acute.uma_sex_title,
        'の禁区で、触れれば襲われる場所なのに、',
      ]);
      await you.print_and_wait([
        '灰色がかった栗毛の尻尾を強く引いても、',
        y_call_a,
        ' は逆らわない。',
      ]);
      await acute.say_and_wait(['ん……明日は、カリカリ干しをあげませんよ？']);
      await you.print_and_wait([
        '尖った口は小さく抗議していても、高く上がった尻はもう、ひとりでに揺れている。',
      ]);
      await you.print_and_wait(['……期待しているんだろ、', y_call_a, '？']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async cunnilingus(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '意外なほど淡く、',
      acute.child_sex_title,
      '特有の匂いを放っている。',
    ]);
    await you.print_and_wait([
      '小さな舌で上へひと舐め……それがどんな味か、うまく言えない。',
    ]);
    await acute.say_and_wait([callname, ' の舌……くすぐったいです']);
    await you.print_and_wait([
      '反対側で、',
      y_call_a,
      ' が手を伸ばし、頭を埋めている者の頭を優しく撫でる。',
    ]);
    await you.print_and_wait([
      '……調教する側なのに、かえって躾けられた安心を感じる。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async suck_virgin(acute, you, y_call_a) {
    await you.print_and_wait([
      '反射で閉じた両脚を強引に開き、この口を',
      acute.child_sex_title,
      '特有の器官へ寄せる。',
    ]);
    await you.print_and_wait([
      '大きく舐め、大きく息を吹きかける。湿った入り口に、すぐ粘る液が混じる。',
    ]);
    await acute.say_and_wait(['あ……そこ❤️、弱点……触れられました❤️～']);
    await you.print_and_wait([
      '頭が勝手に上がり、頭頂を撫でていた両手も最初ほど軽くはなく、後頭部を囲んでそっと押してくる。',
    ]);
    await you.print_and_wait([
      'あの ',
      y_call_a,
      ' でも、もっと上の快感を欲しがるのだ。',
    ]);
    await you.print_and_wait([
      '……そう思いながら、温かい流れが来る前に、またひと舐め。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async ask_blow_job(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait(['地に跪き、兎のように両脚を大きく開く。']);
      await you.print_and_wait(['顔を上げれば、眼前は逆光の「根」。']);
      await acute.say_and_wait(['あらあら……元気ですね']);
      await you.print_and_wait([
        '命じられるまま、',
        y_call_a,
        ' は赤い顔を肉棒へ寄せる。根元を舐めながら、鼻を上下に動かし、「元気」な匂いを貪欲に吸う。',
      ]);
      await acute.say_and_wait(['は❤️……新鮮な匂いです❤️～']);
      await you.print_and_wait([
        '袋へ情のこもったキスを落とすと、すぐ水滴の音が聞こえる……',
      ]);
    } else {
      await acute.say_and_wait([
        '『肉棒のお掃除』だなんて……',
        callname,
        ' の趣味、変わっていますね',
      ]);
      await you.print_and_wait([
        '肉棒の前に伏せ、鼻先で先端を突く。匂いを嗅ぎながら、返事をする。',
      ]);
      await you.print_and_wait([
        'すぐ、淡い唇から舌が出て、溝へ向かう。本当に掃除するように左右へ滑り、一周する。',
      ]);
      await you.print_and_wait([
        '垢が舌先に集まるが、',
        y_call_a,
        ' は嫌がらす、目を蕩かせてそれを口に含み、飲み下す。',
      ]);
      await acute.say_and_wait([
        'はい、『槍先』の手入れは済みました。これで ',
        callname,
        ' が誰を『開拓』しても、大丈夫ですよ～',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' は微笑んで言う。だが',
        acute.sex,
        'の鼻はまだ肉棒に当たり、離す気配がない……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async ask_deep_blow_job(acute, you, callname) {
    await acute.print_and_wait([
      '喉奥までの要求を聞くと、抗議のつもりで肉棒を浅く噛む。',
    ]);
    await acute.print_and_wait([
      '本気の抗議ではなく、すぐ自分から根元まで呑む。',
    ]);
    await acute.print_and_wait([
      '喉まで入った肉棒を上下に呑み、潜水の調教のようにリズムを保って息をする。',
    ]);
    await acute.print_and_wait([
      '鼻は肉棒から来る「陽の気」を吸い、口角には呑み込みで抜けた陰毛の残りが……',
    ]);
    await acute.say_and_wait(['あ……これ、調教に使えるかもしれません'], true);
    await acute.print_and_wait([
      '調教場で自分から ',
      callname,
      ' の肉棒を呑む絵が頭を過ぎ、すぐ酸欠のぼんやりで払われる。',
    ]);
    await acute.print_and_wait(['……もう、待ちきれない。']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async force_blow_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '「ぱん、ぱん」と、さほど大きくない音。',
      y_call_a,
      ' の頬に、肉棒の跡が残る。',
    ]);
    await you.print_and_wait([
      'まっすぐな肉棒が ',
      y_call_a,
      ' の鼻に当たり、目が回るほどの「陽の気」を放つ。',
    ]);
    await acute.say_and_wait([
      'ん……ひどいです、',
      callname,
      '。肉棒で',
      acute.child_sex_title,
      'の顔を叩くなんて……そんなこと、嫌われますよ？',
    ]);
    if (era.get('mark:100:同心') - era.get('mark:100:反抗') === 3) {
      await you.print_and_wait([
        '口ではそう言っても、',
        y_call_a,
        ' の、肉棒を見る目は、もう自分を売っている。',
      ]);
      await you.print_and_wait([
        acute.sex,
        'は自分から位置を直し、先を呑み、上下に舐める——',
      ]);
      await acute.say_and_wait([
        'ほかの❤️……',
        acute.child_sex_title,
        'には❤️、しないでくださいね？',
      ]);
      await you.print_and_wait([
        '尻尾が興奮して左右に揺れ、呑み込む動きも熱心になる。頬の肉棒の跡の下に、奥の渇望が隠れている。',
      ]);
    } else {
      await you.print_and_wait(['……いまのお前が、それを気にするか？']);
      await you.print_and_wait([
        y_call_a,
        ' の髪を掴み、肉棒を淡い唇へ突く。歯に遮られず、楽に口の中へ入る。',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' が何か呟いているが、聞き取れない。温かい口の中で、眠っていた舌が無理に起こされ、入ってきたものを侍る——それが感じられれば、それで足りる。',
      ]);
      await acute.say_and_wait(['ん❤️……ぐぷぷ❤️～']);
      await acute.say_and_wait([callname, ' に、使われました❤️～'], true);
    }
  },
  /** @param {CharaTalk} acute ワンダーアキュート */
  async force_deep_blow_job(acute) {
    await acute.print_and_wait([
      '自分の抗議など、快感の前ではもう重要ではない。',
    ]);
    await acute.print_and_wait(['髪を掴まれ、肉棒は造作なく喉へ突き入る。']);
    await acute.print_and_wait([
      '上下の動き、舌の弄り、時折根元から漏れる嗚嗚……人は昂るだろう。',
    ]);
    await acute.print_and_wait([
      '窒息しないよう、小さな口を精一杯開き、抽送のあいだに息の隙を探す。',
    ]);
    await acute.say_and_wait(
      ['使われた、使われた、使われた、使われた、使われた❤️～'],
      true,
    );
    await acute.print_and_wait(['嫌か？ 嫌ではない……おかしい。']);
    await acute.print_and_wait(['かえって……使われる快感がある。']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async ask_hand_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '指先が竿を滑り、先へ来るたび、赤い肉棒が跳ねる。',
    ]);
    await acute.say_and_wait(['ん……見ていると、なんだか可愛いです～']);
    await you.print_and_wait([
      'そう言って肉棒へそっと息を吹き、右手を伸ばし、優しく身を扱く……',
    ]);
    await acute.say_and_wait(['ねえ、', callname, '、これで、足りますか？']);
    await you.print_and_wait([
      '肉棒に話しかけるように、',
      y_call_a,
      ' は目を細め、',
    ]);
    await you.print_and_wait(['糸のような媚びた目で、手の中の「根」を見る……']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async ask_hand_and_blow_job(acute, you, callname) {
    await acute.print_and_wait(['先を呑めば、竿がふくらんでは戻る。']);
    await acute.print_and_wait([
      '膨らむ筋に沿って両手を互い違いに下へ滑らせると、匂いはますます濃くなる。',
    ]);
    await acute.say_and_wait([
      'ぐ❤️～',
      callname,
      ' の小さなトレーナーさん、もう待ちきれないみたいです——',
    ]);
    await acute.print_and_wait(['そう言って、先にキスを落とす。']);
    await acute.say_and_wait([
      'ちゅ❤️～～～頑張って。出せたら～わたし、できるだけ飲みますから❤️～',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async force_hand_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      ' の手を掴み、自分の肉棒の前へ置き、上下に動かす。',
    ]);
    await you.print_and_wait([
      y_call_a,
      ' は逆らわず、従うように両手で上下に滑らせる。だがいつも包み込む ',
      y_call_a,
      ' が、意味ありげに笑う。',
    ]);
    await acute.say_and_wait([callname, '……満足しやすいのですね❤️～']);
    await you.print_and_wait([
      '穏やかに微笑んで自分を見ているが、その微笑には挑む色が混じる。',
    ]);
    await you.print_and_wait([
      '……もっとひどいことを、',
      y_call_a,
      ' にしたくなる。',
    ]);
    await you.print_and_wait([
      'その思いは、指に撫でられる下とともに、だんだん膨らむ——',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async force_hand_and_blow_job(acute, you, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      ' の手はまだ竿を扱いているのに、反対の手で ',
      y_call_a,
      ' の髪を押さえ、先を口へ押し込む。',
    ]);
    await you.print_and_wait([
      '……全部、',
      y_call_a,
      ' が悪い。',
      y_call_a,
      ' が色っぽいせいだ。',
      y_call_a,
      ' が優しいせいだ。',
      y_call_a,
      ' が誘うせいだ——',
    ]);
    await you.print_and_wait([
      '耳がぴくぴく動き、そのまま力を入れて ',
      y_call_a,
      ' の頭を押す。',
    ]);
    await you.print_and_wait([
      '抵抗はない。むしろ口の中の先は舌に歓迎され、竿を扱う両手は使命を果たし続けている。',
    ]);
    await acute.say_and_wait(
      ['ん❤️～～～道具みたいに、使われています❤️～'],
      true,
    );
    await acute.say_and_wait(['この快楽、忘れられなくなります❤️～～～'], true);
    await you.print_and_wait([y_call_a, ' の翡翠の瞳に、桃色の蕩けが光る……']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {string} is_huge_tit ワンダーアキュートが巨乳か
   */
  async ask_tit_job(acute, you, callname, y_call_a, is_huge_tit) {
    if (is_huge_tit) {
      await you.print_and_wait([
        '豊かな胸が赤銅色の肉棒を包み、滑らかな先に ',
        y_call_a,
        ' の優しい顔が映る。',
      ]);
      await acute.say_and_wait([
        'まさか、わたしの胸が ',
        callname,
        ' の肉棒を包める日が来るなんて～',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' は優しく笑い、一本の指で先をそっと円に撫でる。',
      ]);
      await you.say_and_wait(['……そろそろ始めよう']);
      await acute.say_and_wait(['ええ～']);
      await you.print_and_wait([
        '小さく頷き、',
        y_call_a,
        ' は両手を胸の脇へ置き、量を寄せる。',
      ]);
      await acute.say_and_wait([
        'わたしの胸は、',
        callname,
        ' のおかげで大きくなったんです～ だから、どうぞ、思う存分❤️～',
      ]);
    } else {
      await acute.print_and_wait([
        '小さな胸で赤銅のような肉棒を包むのは、物理的に厳しい。',
      ]);
      await acute.print_and_wait([
        '無理をすれば、やすりのように痛みを与えそうだ。',
      ]);
      await acute.print_and_wait([
        '……それでも、パイズリが全くできないわけではない。',
      ]);
      await acute.print_and_wait([
        '胸を寄せ、淡い乳首を竿に当て、柔らかい胸のあいだで肉棒を上下に動かす。',
      ]);
      await acute.say_and_wait(['よいしょ、よいしょ～']);
      await acute.print_and_wait([
        '乳首に撫でられ、肉棒が少しずつ大きくなる……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   */
  async ask_tit_and_blow_job(acute, you) {
    await you.print_and_wait(['乳を寄せながら、舌を出す。']);
    await you.print_and_wait([
      '餌に釣られた魚のように、舌が先の上下に合わせて揺れる。',
    ]);
    await you.print_and_wait(['口元に当たるたび、舌は必ず溝へ入る。']);
    await acute.say_and_wait(['ん❤️……ぐぷぷ❤️～ぷは❤️～は❤️～']);
    await you.print_and_wait([
      '顔は淫らに見えないのに、',
      acute.child_sex_title,
      'が出すまじき下品な声を、何度も漏らす。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {string} is_huge_tit ワンダーアキュートが巨乳か
   */
  async fuck_tit(acute, you, callname, y_call_a, is_huge_tit) {
    if (is_huge_tit) {
      await you.print_and_wait([
        y_call_a,
        ' を荒く押し倒し、「調教」の末に豊かになった胸へ肉棒を入れる。',
      ]);
      await you.print_and_wait([
        '両手で淡い乳首を摘み、下を乳のあいだで通し続け、胸の柔らかさを味わう。',
      ]);
      await you.say_and_wait(
        [
          '……',
          y_call_a,
          ' の胸は俺のおかげで大きくなった。俺のものだ。思う存分使っていい——',
        ],
        true,
      );
      await acute.say_and_wait([
        'ええ、わたしの胸は、',
        callname,
        ' のものですよ……',
      ]);
      await you.print_and_wait([
        '顔を赤らめ、強制でパイズリされていることに気づいていないような ',
        y_call_a,
        ' は、なお微笑んでいる。',
      ]);
      await acute.say_and_wait([
        'ん❤️……だから、そんなに急がなくて。',
        callname,
        ' が望むなら、胸でお手伝いしますよ～。',
      ]);
      await you.print_and_wait([
        '乳首をまだ手に摘まれ、痛みで目尻に涙を浮かべながらも、',
        y_call_a,
        ' は右手を伸ばし、侵す者の額を撫でようとする。',
      ]);
      await you.print_and_wait(['……もっと先へ、', y_call_a, ' を犯したい。']);
    } else {
      await you.print_and_wait([y_call_a, ' の胸へ、荒く突き入れたい。']);
      await you.print_and_wait([
        '泣きたいのに涙が出ず、嫌なのに仕方なく、微笑みながら怯える ',
        y_call_a,
        ' の顔を見ながら、胸へ荒く突き入れる。',
      ]);
      await you.print_and_wait([
        'だが本当に ',
        y_call_a,
        ' を押し倒し、肉棒を胸の前に置いたとき、どうしてもできない。',
      ]);
      await you.print_and_wait([
        'ひとつは胸が小さすぎて挟めない。ひとつは ',
        y_call_a,
        ' がなお微笑み、恐れがない。',
      ]);
      await acute.say_and_wait([
        '挟めませんけれど、',
        callname,
        ' がパイズリを望むなら、こちらへどうぞ❤️～',
      ]);
      await you.print_and_wait([
        'そう言い、道を示すように。',
        y_call_a,
        ' は自分の乳首の前で、肉棒がちょうど通るハートを作る。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async fuck_tit_and_mouth(acute, you, y_call_a) {
    await you.print_and_wait(['乳首を摘み、胸を突く。それだけでは足りない。']);
    await you.print_and_wait([
      y_call_a,
      ' にも淫らな顔をさせたい。',
      y_call_a,
      ' の笑顔を壊したい。',
    ]);
    await you.print_and_wait([
      '太い肉棒が、荒く ',
      y_call_a,
      ' の微笑みへ向かう。',
    ]);
    await you.print_and_wait([
      '門を破り、口へ入る。想像した抵抗はなく、迎えるのは舌と唾液の奉仕だ。',
    ]);
    await you.print_and_wait([
      '成り行きに任せたようで、初めから分かっていたようで、',
      y_call_a,
      ' の目に笑みが広がる。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async suck_anal(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        'ん……',
        callname,
        ' に、こんな趣味があるなんて……',
      ]);
      await you.print_and_wait([
        'やはりこのプレイは、',
        y_call_a,
        ' でも受け入れられないのか……',
      ]);
      await you.print_and_wait([
        '……口では気が進まなくても、',
        y_call_a,
        ' は自分から後ろに跪く。',
      ]);
      await acute.say_and_wait([
        'ん……こんなことは、ほかの',
        acute.child_sex_title,
        'にしてはだめですよ？',
      ]);
      await you.print_and_wait([
        '文句を言いながら、',
        y_call_a,
        ' は舌を伸ばし、後ろを上下に弄る——',
      ]);
    } else {
      await you.say_and_wait(['ぐぷぷ……ん❤️～ちゅ～ぷぷ……']);
      await acute.print_and_wait([
        'わたしの尻を掴み、',
        callname,
        ' が後ろを一心に舐める。時折のキスとともに、快感が電流のように頭を走る。',
      ]);
      await acute.print_and_wait(['……待って、少し刺激が強すぎます。']);
      await you.say_and_wait([
        'ぐぷ……ねえ、',
        y_call_a,
        '、ここまでやらせたんだ。簡単には逃さないぞ？ ちゅ❤️～～～',
      ]);
      await acute.print_and_wait([
        '眼前のトレーナーが快感で声を失っていくのを見ると、',
        callname,
        ' も興奮で少し「湿って」くる。',
      ]);
      await acute.print_and_wait([
        'ぽたり、ぽたり。誰から落ちたのか分からない水音。',
      ]);
      await acute.print_and_wait([
        '……',
        callname,
        ' の「伸びしろ」を、少し見くびっていたらしい。',
      ]);

      await you.say_and_wait(['ん……うう、ぷるる、ぐ·～']);
      await acute.print_and_wait([
        'わたしの後ろに伏せ、',
        callname,
        ' が貪欲に唇と舌を動かす——',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async suck_nipple(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait([
        '乳首を吸いたいと言っただけで、',
        y_call_a,
        ' は自分から胸を差し出す。',
      ]);
      await acute.say_and_wait([
        '優しくしてくださいね、',
        callname,
        '。わたしにも、ほかの',
        acute.uma_sex_title,
        'にも～',
      ]);
      await you.print_and_wait([
        '含みのある台詞は気にせず、顔を寄せ、そっと一口吸う。',
      ]);
    } else {
      await you.print_and_wait([
        '赤い乳先は充血して立ち、もう唇と舌の虜になりたがっている。',
      ]);
      await acute.say_and_wait(['あらあら……そんなに、期待してはいませんよ']);
      await you.print_and_wait(['それでも顔を寄せ、そっと一口吸う。']);
      await acute.say_and_wait(['あ❤️～']);
      await you.print_and_wait(['電撃のような声が、それに続く。']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async bite_nipple(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '乳首へそっと歯を立てると、',
      y_call_a,
      ' が敏感に声を零す。',
    ]);
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        'ん❤️……',
        callname,
        '、そんなに強くしたら……ん～乳首、取れてしまいますよ？',
      ]);
      await you.print_and_wait([
        '敏感さと痛みに耐えながら、',
        y_call_a,
        ' はなお、胸元の自分を優しく撫でる。',
      ]);
    } else {
      await you.print_and_wait(['噛み方が少し過ぎたのか、声に痛みが混じる。']);
      await acute.say_and_wait([
        'ふ❤️……',
        callname,
        '、そう噛んでも、母乳は出ませんよ？',
      ]);
      await you.print_and_wait([
        '後頭部を軽く叩きながら、',
        y_call_a,
        ' はそれでも優しく、自分を胸へ迎える。',
      ]);
      await you.print_and_wait([
        '本当に痛いのか、拒みながらも恥じているのか、分からない。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async ask_milk_and_hand_job(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait([
        '胸を吸いながら、そちらも撫でるのですね……いいですよ～',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' の膝に枕し、眼前の胸を安心して吸い、反対では太い肉棒を ',
        y_call_a,
        ' が優しく撫でる。',
      ]);
      await acute.say_and_wait(['やあ……とても気持ちよさそうです～']);
      await you.print_and_wait([
        '優しい声の下、脇乳の隙間から見えるのは、赤い顔の ',
        y_call_a,
        ' と、充血して立つ肉棒へ時折流れる視線。',
      ]);
    } else {
      await you.print_and_wait([
        y_call_a,
        ' の膝に横になり、',
        y_call_a,
        ' の胸を左右に貪欲に吸い、自分の跡を残す。',
      ]);
      await you.print_and_wait([
        '胸の敏感さに耐え、精一杯微笑む ',
        y_call_a,
        ' が、反対の手を下へ伸ばす。',
      ]);
      await you.print_and_wait([
        '持つ、握る、被せる、輪にする、滑る——さまざまな型の重なりで、身はすぐ充血して立つ。',
      ]);
      await acute.say_and_wait([
        'ん～出そうです？ いいですよ～ 我慢しなくても、いいんですよ～',
      ]);
      await you.print_and_wait([
        '心も体も軽くなるが、安心しすぎて少し反抗したくなり、口の中の乳首を舐めながら、眼前の乳首へ少し力を入れる……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} callname プレイヤーのワンダーアキュートへの呼び方
   */
  async milk(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await you.print_and_wait([
        y_call_a,
        ' の膝に枕し、幼児のように、充血した淡い先から溢れる乳を吸う。',
      ]);
      await you.print_and_wait([
        '少し渋いが、乳の香りはある。長く飲めば、喉に甘ささえ残る。',
      ]);
      await acute.say_and_wait([
        'ん……',
        callname,
        ' がそんなに好きなら、毎朝の調教の前に、何本か汲んで保存しておきましょうか……',
      ]);
      await you.print_and_wait([
        '両手で胸を寄せて授乳しながら、首を傾げて悩む ',
        y_call_a,
        '。',
      ]);
    } else {
      await you.print_and_wait([
        '担当の',
        acute.uma_sex_title,
        'に授乳してもらうのは、恥ずかしいか。もちろん恥ずかしい。',
      ]);
      await acute.say_and_wait([
        '最近、胸から溢れる乳が多めで……よければ、',
        callname,
        '、処理を手伝ってくれませんか？',
      ]);
      await you.print_and_wait([
        'だが ',
        y_call_a,
        ' の頼みなら、トレーナーの務めでもある。だから安心して ',
        y_call_a,
        ' の膝に寝たまま、淡い先から溢れる乳を吸い続ける。',
      ]);
      await you.print_and_wait([
        '反対側で、',
        y_call_a,
        ' は膝の前の自分の頭を支え、慈しむような微笑みを浮かべる……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async ask_non_penetrative(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '立った竿が後ろから入り、',
        y_call_a,
        ' の両脚のあいだに挟まる。',
      ]);
      await you.print_and_wait([
        '竿に密着した唇が愛液を吐き、上下に動いて奉仕する。',
      ]);
      await acute.say_and_wait(['えへへ……', callname, '、とても元気ですね～']);
      await you.print_and_wait([
        '掌で先を撫でながら、腰と尻を捻って竿を上下に侍る……',
      ]);
      await you.print_and_wait(['……', y_call_a, ' は、相変わらず優しい。']);
    } else {
      await you.print_and_wait([
        '竿が唇に密着したまま往復し、眼前の',
        acute.teen_sex_title,
        'の体から時折、ぴちゃぴちゃと音がする。',
      ]);
      await acute.say_and_wait(['ん❤️……あ❤️～']);
      await you.print_and_wait([
        '弄ばれすぎたのか、',
        y_call_a,
        ' が声を零すたび、竿の脇に熱波が伝わる。',
      ]);
      await acute.say_and_wait(['ん❤️～子宮のあたり……少し、痒いです～']);
      await you.print_and_wait([
        '自分の下腹を撫で、待ちきれないように、',
        y_call_a,
        ' はさらに積極的に、肉棒へ腰と尻を寄せる。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async sixty_nine(acute, you, y_call_a) {
    await you.print_and_wait([
      '豊かな南国の果実を大きく舐め、下の ',
      y_call_a,
      ' も負けていない。',
    ]);
    await you.print_and_wait(['二つの体が重なり、それぞれ舌を出して競う。']);
    await acute.say_and_wait(['ぐぷぷ❤️～負けません……ぐぷ❤️～']);
    await you.print_and_wait([
      'もう氾濫しているのに、',
      y_call_a,
      ' は反対側でなお熱心に奉仕する。',
    ]);
    await you.print_and_wait([
      '負けたくないのか。ただ情欲に負けたのか。どちらでもいい——',
    ]);
    await you.print_and_wait([
      '……顔が白い汚れに覆われるまで、',
      y_call_a,
      ' は逃さない。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {PrintedSpan} call_minoru ワンダーアキュートの駿川への呼び方
   */
  async ask_hair_fuck(acute, you, y_call_a, call_minoru) {
    await you.print_and_wait([
      '首を傾けると、銀色の長い髪が肉棒へ落ちる。一房を掴み、肉棒に三周巻き、縛るようにする。',
    ]);
    await acute.say_and_wait([
      'ん……出したら、わたしの髪は洗っても落ちない肉棒の匂いがつきますね……',
    ]);
    await you.print_and_wait([
      y_call_a,
      ' はそう言いながら、髪を絡めて肉棒を扱う手を止めない。',
    ]);
    await acute.say_and_wait([
      call_minoru,
      '……ほかの',
      acute.uma_sex_title,
      'に、髪の匂いを見つけられたら……どうなるのでしょう？',
    ]);
    await you.print_and_wait([
      '……考えない。考えられない。',
      y_call_a,
      ' の指先に絡む髪が、肉棒の上で増えていく……',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async force_hair_fuck(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      ' の髪を掴み、乱れたまま竿に被せ、一度に握る。銀白の髪に沿って、強く扱う。',
    ]);
    await you.print_and_wait([
      'もう一方の手で ',
      y_call_a,
      ' の頭を肉棒へ押しつけ、',
      acute.sex,
      'に、自分の髪が「使われる」場面を見せる。',
    ]);
    await you.print_and_wait([
      '……',
      y_call_a,
      ' の体のあちこちに印を残したい……髪も例外ではない。',
    ]);
    await acute.say_and_wait([
      '髪まで、独占するのですか……',
      callname,
      '、欲張りですね～',
    ]);
    await you.print_and_wait([
      '微笑んで言い、誰の助けもなく、',
      y_call_a,
      ' は自分から肉棒へ頭頂を下げる。',
    ]);
    await you.print_and_wait([
      '嫁入りを待つ',
      acute.teen_sex_title,
      'のように、噴き出す肉棒を待ち、',
      acute.sex,
      'の髪に純白の無垢を被せる。',
    ]);
    await you.print_and_wait(['……もともと灰白の髪に、一生残る印を付ける。']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async ask_armpit_intercourse(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      ' は合わせて腕を高く上げ、滑らかな脇を見せる。',
    ]);
    await you.print_and_wait([
      '肉棒はすぐそちらへ伸び、脇のくぼみに沿って往復する。',
    ]);
    await you.print_and_wait([
      '嫌がらす、むしろ興味深そうに、脇の傍で擦れる肉棒を見ている。',
    ]);
    await acute.say_and_wait([
      'これが ',
      callname,
      ' の好きな遊びですか……少し、可愛いです～',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async force_armpit_intercourse(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      y_call_a,
      ' の右腕を強引に上げ、腫れた肉棒が脇の下でわざと動く。',
    ]);
    await you.print_and_wait([
      '匂いを残すように、肉棒が脇で勝手に捻れ、擦る。',
    ]);
    await you.print_and_wait([
      'だが ',
      y_call_a,
      ' はいつものように嫌がらす、むしろ鼻を寄せて、ひと嗅ぎ——',
    ]);
    await acute.say_and_wait(['ああ、この陽の気、絶対に落ちない匂いです❤️～']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async ask_foot_job(acute, you, callname) {
    await you.print_and_wait([
      '滑らかな足裏に、レースを走った跡はまったく見えない。',
    ]);
    await you.print_and_wait([
      '今は、足の裏が寄り合っている。器用な趾が、赤い身を上下に弄ぶ。',
    ]);
    await acute.say_and_wait([
      'よいしょ、よいしょ……上下に揺らせば、もっと気持ちいいですか？',
    ]);
    await you.print_and_wait([
      '趾先が竿を掴み、玩具のように上下に揺らす。趾だけなのに、肉棒を弄ぶ才能があるようだ。',
    ]);
    await acute.say_and_wait([
      '次の足コキは、タイツを履いて？ ん……本当に ',
      callname,
      ' には勝てませんね～',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async force_foot_job(acute, you, callname) {
    await you.print_and_wait([
      'タイツを履いた両足を掴み、無理に寄せて擦らせる。',
    ]);
    await you.print_and_wait([
      '交わるための器官ではない。次のレースで疾走する脚だ。黒いタイツ一枚隔てている。それでも抑えられない興奮が、両足のあいだの肉棒をますます膨らませる。',
    ]);
    await acute.say_and_wait([
      'あらあら……何を考えているか、分かりますよ、',
      callname,
      '。',
    ]);
    await you.print_and_wait([
      '反対の顔は、「あなたのために黒いタイツを履いた」とでも呟いていそうな微笑みだ。',
    ]);
    await acute.say_and_wait([
      '次のレース……このタイツのまま出走したいです。いいですか❤️～',
    ]);
    await you.print_and_wait([
      '……そんなことを言ったあと、タイツがどうなるか、誰にも分からないぞ？',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async ask_tail_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '自分から肉棒に絡む銀灰色の尻尾。ひと抽送で、すぐ粘る液が尻尾じゅうに付く。',
    ]);
    await acute.say_and_wait([
      'ねえ、',
      callname,
      '……そろそろ、ですよね？ 尻尾以外も……',
    ]);
    await you.print_and_wait([
      '……いや、まだ足りない。もっと……尻尾にもっと印を付けたい。',
    ]);
    await you.print_and_wait([
      y_call_a,
      ' の尻尾へ入れ、また掻き回す。',
      y_call_a,
      ' の尻尾を、さらに液へ漬ける。',
    ]);
    await you.print_and_wait([
      '……誰が見ても尻尾だけで分かるように、',
      y_call_a,
      ' は俺のものだ、と。',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async force_tail_job(acute, you, callname, y_call_a) {
    await you.print_and_wait([
      '手で ',
      y_call_a,
      ' の尻尾を肉棒に巻き、上下に動かし、',
      acute.sex,
      'の尻尾へまた白い液を残す。',
    ]);
    await you.print_and_wait([
      '見渡せば、銀灰色の尻尾一本が、白い液に浸っているようだ。',
    ]);
    await you.print_and_wait(['……だがまだ足りない。期待には、遠く及ばない。']);
    await acute.say_and_wait(['は……本当に ', callname, ' には勝てませんね']);
    await you.print_and_wait([
      '反対側で、',
      y_call_a,
      ' は息を吐き、体は素直に液を落とす。',
    ]);
    await acute.say_and_wait([
      '次のレースが終わるまで、尻尾は洗いません……ですから——',
    ]);
    await acute.say_and_wait(['尻尾以外も、見てくださいね❤️～？']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async missionary(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await acute.say_and_wait('ねえ、入ってください❤️～');
      await you.print_and_wait([
        '眼前の',
        acute.teen_sex_title,
        'が両腕を開き、目の前の人を懐へ入れる。',
      ]);
      await you.print_and_wait(
        '下の肉棒が、「あ」の一声とともに、楽に穴へ入る。',
      );
      await you.print_and_wait(
        '眼前の広い腕を感じながら、下腹の膨らみを撫でる。',
      );
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait('そして、処女を裂く痛みの波——');
        await acute.say_and_wait('これで、ようやく……');
        await acute.say_and_wait([
          '全身に、あなたの印を刻めましたね、',
          callname,
          '～',
        ]);
      } else {
        await acute.say_and_wait([
          'あ……これから、わたしは ',
          callname,
          ' に、徹底して犯されるのですね❤️～',
        ]);
      }
    } else {
      await you.print_and_wait('入れる、入れる、入れる……下を止めずに揺らす。');
      await you.print_and_wait(['もっと精を、', y_call_a, ' の体へ注ぎたい。']);
      await acute.say_and_wait('ぐ❤️……そこ❤️すごい❤️～');
      await you.print_and_wait([
        y_call_a,
        ' は舌を出して喘いでいるのに、だらしない要素はまったく感じない。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async missionary_anal_sex(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['こんな太い肉棒が、本当に後ろへ入るのか。']);
      await you.print_and_wait([
        '体の理に合うか悩んでいると、',
        y_call_a,
        ' は自分から両手で後ろを開く。',
      ]);
      await acute.say_and_wait(['ねえ……入ってください～？']);
      await you.print_and_wait([
        '赤い顔で嫣然と笑い、「異物」の侵入を自分から迎える。',
      ]);
    } else if (era.get('exp:100:性交次数') > 0) {
      await acute.say_and_wait(['犯されました❤️ 穴だけでなく、お尻まで❤️～']);
      await you.print_and_wait([
        '片手を顔の横でVにし、目を上へ向けて舌を出す ',
        y_call_a,
        ' は、鬼の顔でもするような表情だ。',
      ]);
      await acute.say_and_wait([
        'ん？ 何をしているか、ですか？ ん……この姿勢が、',
        callname,
        ' を興奮させると聞いたので～',
      ]);
      await you.print_and_wait([
        '言いながら、',
        y_call_a,
        ' は豊かな尻を捻る……',
      ]);
      await acute.say_and_wait([
        'あら、中で大きくなりましたね❤️～ 本当に効くようです～',
      ]);
    } else {
      await acute.say_and_wait(['あ❤️、ん❤️……ぷぷ、ん❤️……']);
      await you.print_and_wait([
        '後ろを開かれるたび、声が勝手に ',
        y_call_a,
        ' の口から溢れる。',
      ]);
      await you.print_and_wait([
        '後ろの遊びが好きなのか。ただ刺激に耐えているのか。どちらでもいい。大切なのは、後ろの中の肉棒がだんだん腫れていることだ——',
      ]);
      await acute.say_and_wait([
        'ん❤️……出ますか？ は❤️……後ろへ？ 穴へ？ それとも……',
      ]);
      await you.print_and_wait([
        '冗談のように、',
        y_call_a,
        ' が片手を口の横で「V」にする。',
      ]);
      await acute.say_and_wait(['それとも、わたしの口へ、出しますか？❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async doggy_style(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '銀灰色の髪が後ろへ垂れ、白い背と豊かな尻が丸見えだ。',
      ]);
      await acute.say_and_wait([
        'この体位だと、',
        callname,
        ' がまったく見えません……嫌ですよ～',
      ]);
      await you.print_and_wait([
        '顔を下へ埋めた ',
        y_call_a,
        ' が、小さな抗議をする。',
      ]);
      await you.print_and_wait([
        '抗議は通らない。腫れた肉棒は、もう尻の下の穴へ迫っている——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤い血が穴から流れ、下へ滴る。']);
        await you.print_and_wait([
          y_call_a,
          ' が低く鳴き、両手で強く掴み、下の痛みを紛らわす。',
        ]);
        await acute.say_and_wait([
          '十何年大切にしてきた処女が、見えないまま失われるなんて。',
        ]);
        await acute.say_and_wait([
          'ねえ……',
          callname,
          '、責任、取ってくださいね？',
        ]);
      }
    } else {
      await you.print_and_wait(['子犬のように、獣のような交わり。']);
      await you.print_and_wait([
        y_call_a,
        ' の尻を揉み、肉棒を穴へ送り続ける。',
      ]);
      await you.print_and_wait([
        '「ぱん！」尻を強く叩けば、穴の締め付けが一気に強くなる。',
      ]);
      await acute.say_and_wait([
        'ぷぐふ❤️……足りませんか？ 分かりました❤️……強く、締めます❤️～ぷぷ❤️……',
      ]);
      await you.print_and_wait([
        '言葉のやりとりはない。だが、こうして通じ合う。',
      ]);
      await you.print_and_wait([
        '……',
        y_call_a,
        ' は、やっぱり「こういう」のが好きなのか。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async doggy_style_anal_sex(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '「ぱん、ぱん」と乾いた音とともに、',
        y_call_a,
        ' の白い尻に赤い跡が二つ残る。',
      ]);
      await you.print_and_wait([
        '尻を叩く意味を理解したように、',
        y_call_a,
        ' の両手はすぐ後ろへ行き、穴を開く。',
      ]);
      await acute.say_and_wait(['あ❤️……ぷ❤️、は❤️～～～']);
      await you.print_and_wait([
        '肉棒が少しずつ深く入り、背を向けた ',
        y_call_a,
        ' が少しずつ甘い声を零す。',
      ]);
      await you.print_and_wait([
        '……正面では慎ましさを装っていたのに、背を向けると本性が出るのか。',
      ]);
    } else if (era.get('tcvar:100:接近高潮')) {
      await you.print_and_wait(['ぱん！ぱん！ぱん！ぱん！……']);
      await you.print_and_wait([
        'リズムに合わせて ',
        y_call_a,
        ' の尻を叩き、後ろの締め付けの中で歓びの絶頂を迎える。',
      ]);
      await you.print_and_wait([
        'もともと白い尻は今や赤く腫れ、軽く叩くだけで穴が溢れる。',
      ]);
      await acute.say_and_wait(['は❤️……だめ❤️だめ❤️……もう、だめです❤️']);
      await you.print_and_wait([
        '快感の波の中でだらしなくなった ',
        y_call_a,
        ' は、いつもの余裕を失い、許しを乞うように、溢れるたび似た言葉を繰り返す。',
      ]);
      await you.print_and_wait([
        '下で粘った指を ',
        y_call_a,
        ' の顔へ伸ばし、',
        acute.sex,
        'の口へ入れる。',
        y_call_a,
        ' が貪欲に吸い、飲み下す。',
      ]);
      await acute.say_and_wait([callname, ' の……指❤️～']);
      await acute.say_and_wait(['わたしはもう……', callname, ' のものです❤️']);
    } else {
      await you.print_and_wait(['抽送のたび、', y_call_a, ' の震えが分かる。']);
      await you.print_and_wait([
        '甘い声を我慢しているように、だらしのない喘ぎは聞こえず、「うう～」だけがかすかに聞こえる。',
      ]);
      await you.print_and_wait(['「ぱん！～」']);
      await acute.say_and_wait(['あ❤️']);
      await you.print_and_wait([
        'そのたび、',
        y_call_a,
        ' の尻を一度叩けば、後ろが一気に締まり、空いた穴まで目に見えて湿る。',
      ]);
      await you.say_and_wait(['なあ、', y_call_a, '……まだ始まりだぞ？']);
      await acute.say_and_wait(['……❤️']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async sitting(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '向かい合って、',
        y_call_a,
        ' が自分の太ももに座る。',
      ]);
      await you.print_and_wait(['両手は首を囲み、顔と顔がとても近い。']);
      await acute.say_and_wait(['えへへ……こうすると、とても恥ずかしいです']);
      await you.print_and_wait([
        '顔がだんだん赤く染まり、膝で体を立てた ',
        y_call_a,
        ' が、穴を突く肉棒の上へ、ゆっくり座る……',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤い血が穴から流れ、下へ滴る。']);
        await you.print_and_wait([
          y_call_a,
          ' が小さく眉を寄せ、口から勝手に「うう」と漏れる。',
        ]);
        await you.say_and_wait(['……痛いか？']);
        await acute.say_and_wait(['ええ、少しだけ……']);
        await acute.say_and_wait([
          'でも……',
          callname,
          ' を見ていられれば、どんな痛みも、きっと越えられます❤️～',
        ]);
        await you.print_and_wait([
          '自分の顔を支え、眼前の ',
          y_call_a,
          ' が優しい笑みを見せる。',
        ]);
      }
    } else {
      await you.print_and_wait([
        '自分の首を囲み、',
        y_call_a,
        ' が前で腰を捻る。',
      ]);
      await acute.say_and_wait([
        'ん❤️……もっと速くしますか？ このままで？ ……ん❤️～どちらが ',
        callname,
        ' は気持ちいいですか？',
      ]);
      await you.print_and_wait([
        '犯される側なのに、自分より積極的だ。穴に包まれた肉棒は、行き届いた「世話」を受ける。',
      ]);
      await you.print_and_wait([
        '……わざと ',
        y_call_a,
        ' の尻を持ち上げなくても、',
        acute.sex,
        'は自分で上下に動くだろう。',
      ]);
      await acute.say_and_wait(['❤️～']);
      await you.print_and_wait([
        '顔じゅう赤い ',
        y_call_a,
        ' が自分を見て、顔じゅう幸せだ。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async hug_sitting(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '自分の太ももに座り、',
        y_call_a,
        ' が懐へ凭れる。',
      ]);
      await you.print_and_wait([
        '銀灰色の髪に、古風で、それでいて淫らな匂い。',
      ]);
      await acute.say_and_wait([
        'ねえ、',
        callname,
        '、向かい合ってはだめですか？',
      ]);
      await you.print_and_wait([
        '立った肉棒が穴の入り口を突き、',
        y_call_a,
        ' の抗議を拒む。',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤い血が穴から流れ、下へ滴る。']);
        await you.print_and_wait([
          y_call_a,
          ' が低く鳴き、口から勝手に「うう」と漏れる。',
        ]);
        await you.say_and_wait(['……痛いか？']);
        await acute.say_and_wait(['……痛いですよ？']);
        await you.print_and_wait([y_call_a, ' が湿った目尻を触る。']);
        await acute.say_and_wait([
          'ですから……このあとは、向かい合いましょう？',
        ]);
      }
    } else {
      await acute.say_and_wait(['あ❤️……ぷ❤️、は❤️～～～']);
      await you.print_and_wait([
        '小さな声。',
        y_call_a,
        ' は膝を押さえ、上下に送り、体を軽く捻る。',
      ]);
      await you.print_and_wait([
        '向かい合えないことへの抗議か。尻尾が元気なく傍へ垂れている。',
      ]);
      await you.print_and_wait([
        'それは困る……手を伸ばし、監督のように ',
        y_call_a,
        ' の尻尾を引く。瞬く間に、穴の中へ熱波が来る。',
      ]);
      await acute.say_and_wait(['ん❤️！？', callname, '、尻尾はだめ——']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async standing(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['壁に密着し、下腹がほとんど隙間なく重なる。']);
      await you.print_and_wait([
        '隅へ追い詰められた ',
        y_call_a,
        '。肉棒が',
        acute.sex,
        'の柔らかい穴に当たり、左右に擦る。',
      ]);
      await acute.say_and_wait(['あはは……もう、逃げ場がありませんね']);
      await you.print_and_wait([
        'そう言いながら、無念の色などない ',
        y_call_a,
        ' が、微笑んで右脚を上げる——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤い血が穴から流れ、下へ滴る。']);
        await acute.say_and_wait([
          '処女を ',
          callname,
          ' に奪われましたね～ 仕方ありません～',
        ]);
        await you.print_and_wait([
          '痛みなど感じていないように、',
          y_call_a,
          ' は微笑んで言う。',
        ]);
        await you.say_and_wait(['……痛くないのか？']);
        await acute.say_and_wait(['ん……大丈夫ですよ～']);
        await you.print_and_wait([
          y_call_a,
          ' は優しく言い、言い終わるや、腰を動かし始める。',
        ]);
        await acute.say_and_wait([
          'それより ',
          callname,
          '……動かないのですか？',
        ]);
      }
    } else {
      await you.print_and_wait([
        '下腹がぴったり重なり、子宮口が何度も衝撃を受ける。',
      ]);
      await you.print_and_wait([
        'あの優しい ',
        y_call_a,
        ' でも、退けない状況では、だらしない顔を見せる。',
      ]);
      await acute.say_and_wait(['は❤️～ん❤️～こんな顔、見ないでください']);
      await you.print_and_wait([
        '顔を見られたくないと言いながら、覆っているのは自分の目だ。',
      ]);
      await you.print_and_wait(['この位置なら、肉棒は深く宮口へ当たる。']);
      await you.print_and_wait([
        '……逃げなければ、',
        y_call_a,
        ' の子宮は肉棒に落ちるぞ？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async hug_standing(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['壁に凭れ、肉棒が穴の上を出入りする。']);
      await you.print_and_wait([
        '隅へ追い詰められているのに、入り口はなお竿の上下に擦れている。',
      ]);
      await acute.say_and_wait([
        '後ろ、ですか……この姿勢、またいじめられますね～',
      ]);
      await you.print_and_wait([
        '……いじめられると言いながら、尻尾はもう嬉しそうに揺れている。',
      ]);
      await you.print_and_wait([
        '発情した',
        acute.uma_sex_title,
        'に遠慮は要らない。',
        y_call_a,
        ' の尻を押さえ、思う存分走れ——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤い血が穴から流れ、下へ滴る。']);
        await you.print_and_wait([
          y_call_a,
          ' が低く鳴き、口から勝手に「うう」と漏れる。',
        ]);
        await acute.say_and_wait([
          '初めての血が……',
          callname,
          ' に、印を残されました',
        ]);
        await you.print_and_wait([
          y_call_a,
          ' の顔は見えず、',
          acute.sex,
          'の耳が左右に揺れるだけだ。',
        ]);
        await acute.say_and_wait(['今回は、いじめられたので仕方ありません……']);
        await acute.say_and_wait([
          '次は、必ず向かい合って、甘えてくださいね？',
        ]);
      }
    } else {
      await acute.print_and_wait(['尻のあちこちが赤い跡だ。']);
      await acute.print_and_wait([
        '尻を叩かれるだけでなく、尻尾まで ',
        callname,
        ' に支えとして手に引かれている。',
      ]);
      await acute.print_and_wait([
        '穴の中で肉棒が子宮を押すたび、自分が「犯されている」事実がはっきり分かる。',
      ]);
      await acute.say_and_wait(['は……犯された、犯された、犯された❤️～']);
      await acute.print_and_wait([
        'いけないことなのに、',
        callname,
        ' に犯されている、尻を叩かれている、尻尾を引かれている、と思うと、胸が勝手にざわつく。',
      ]);
      await acute.say_and_wait(
        ['は、は……こんな顔、絶対に ', callname, ' には見せられません❤️～'],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async suspended_congress(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        'レースを駆ける',
        acute.uma_sex_title,
        'なのに、抱き上げると重くない。',
      ]);
      await you.print_and_wait([
        '指が豊かな尻へ簡単に沈む。尻ひとつで、ずいぶん貪欲だ。',
      ]);
      await acute.say_and_wait([
        'あらあら……また、まったく逃げられない姿勢ですね～',
      ]);
      await you.print_and_wait([
        '逃げると言いながら、両脚はもう腰に絡んでいる。',
      ]);
      await you.print_and_wait(['肉棒に正対した穴も、自分から呑み始める——']);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤い血が穴から流れ、下へ滴る。']);
        await you.print_and_wait([
          y_call_a,
          ' が低く鳴き、口から勝手に「うう」と漏れる。',
        ]);
        await you.say_and_wait(['……痛いか？']);
        await acute.say_and_wait(['痛くありませんよ']);
        await you.print_and_wait([y_call_a, ' が微笑んで答える。']);
        await acute.say_and_wait(['どうせ逃げられませんから、ね❤️～？']);
      }
    } else {
      await acute.print_and_wait([
        callname,
        ' に尻を抱かれて懐にいる。相手の腰に絡む以外、自分には何もできない。',
      ]);
      await acute.print_and_wait([
        '少し肉棒から体を抜いて楽にしようとしても、すぐ追いつかれ、また子宮の門を叩かれる。',
      ]);
      await acute.say_and_wait(['この姿勢……本当に、まずいです'], true);
      await acute.print_and_wait([
        '自慰の道具にされたように、尻を抱えたまま、穴を往復される。',
      ]);
      await acute.print_and_wait([
        '子宮がいっそう痒く、穴を突かれるたび出る舌に乗った声も大きくなる。',
      ]);
      await acute.print_and_wait([
        'このままでは、すぐ「だらしない',
        acute.child_sex_title,
        '」になる。',
      ]);
      await acute.say_and_wait(['あ❤️～', callname, '、顔を見ないでください']);
      await acute.say_and_wait(['もう……我慢できません❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async fucked_suspended_congress(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        y_call_a,
        ' に尻を抱かれ、向かい合って持ち上げられる。',
      ]);
      await you.print_and_wait([
        '交わっているのに、祖母が孫を抱くような絵に見える。',
      ]);
      await acute.say_and_wait([
        'いい子ですね、',
        callname,
        '❤️～ ゆっくり、入れてください',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' の助けで、自分の肉棒が穴に正対し、',
        y_call_a,
        ' の動きとともに、ゆっくり穴へ入る……',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤い血が穴から流れ、下へ滴る。']);
        await acute.say_and_wait([
          '処女を ',
          callname,
          ' に奪われましたね～ よくできました',
        ]);
        await you.print_and_wait([
          '何か大業を成し遂げたように、',
          y_call_a,
          ' は微笑んで言う。',
        ]);
        await you.print_and_wait(['……痛くないのか、と聞きたいが——']);
        await acute.say_and_wait([
          'これから動きます。苦しかったら、言ってくださいね？ 汽車がトンネルに入りますよ～',
        ]);
        await you.print_and_wait([y_call_a, ' は、完全に楽しんでいる顔だ。']);
      }
    } else {
      await you.print_and_wait([
        y_call_a,
        ' の乳首を掴み、寄生虫のように ',
        y_call_a,
        ' の腰に絡む。',
      ]);
      await you.print_and_wait([
        '肉棒は穴の中を出入りしているが、腰を動かしているのは自分ではない。尻を抱く ',
        y_call_a,
        ' が上下に振っている。',
      ]);
      await acute.say_and_wait([
        'ん❤️あ❤️……もっと速くてもいいですか？ 石炭を足さないと、汽車は速く走れません……ぐ❤️～～～',
      ]);
      await you.print_and_wait([
        '手の動きが速くなる。その優しい顔は、慈しみというより、ほとんど淫らだ。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   * @param {string} penis_color プレイヤーの陰茎の色
   */
  async hug_suspended_congress(
    acute,
    you,
    callname,
    y_call_a,
    is_first,
    penis_color,
  ) {
    if (is_first) {
      await you.print_and_wait([
        '尻を抱え、背を向けた ',
        y_call_a,
        ' を高く持ち上げる。',
      ]);
      await you.print_and_wait([
        '体ごと手の中にあり、赤い肉棒が秘部を擦り続ける。',
      ]);
      await acute.say_and_wait([
        'まったく逃げられません……せめて、せめて向かい合いなら……',
      ]);
      await you.print_and_wait([
        '懐の ',
        y_call_a,
        ' が、興奮か恐れか、震えている。',
      ]);
      await you.print_and_wait([
        penis_color,
        'の肉棒が、その瞬間、穴の奥へ入る——',
      ]);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait(['赤い血が穴から流れ、下へ滴る。']);
        await you.print_and_wait([
          y_call_a,
          ' が低く鳴き、口から勝手に「うう」と漏れる。',
        ]);
        await acute.say_and_wait(['痛いです、痛いです、', callname, '……？']);
        await acute.say_and_wait(['ですから……向かい合いましょう……']);
        await acute.say_and_wait(['いいですか？']);
      }
    } else {
      await acute.print_and_wait([
        '子宮が震えながら警告している。重力が穴を ',
        callname,
        ' の肉棒へ強く押し付ける。',
      ]);
      await acute.print_and_wait([
        '自慰の道具にされたように、抱かれたまま動けない。',
      ]);
      await acute.print_and_wait([
        'もし ',
        y_call_a,
        ' が支えている両手を離せば、足が地に届かない ',
        callname,
        ' は、肉棒に子宮を突かれたまま持ち上げられるだろう。',
      ]);
      await acute.print_and_wait(['そうなれば、間違いなく「壊れる」。']);
      await acute.say_and_wait([
        'は❤️……落ちる❤️、壊れる❤️、',
        callname,
        ' に、使い潰される❤️～',
      ]);
      await acute.print_and_wait([
        'トレーナーの首を囲み、抽送に声を失うのは、あの優しい ',
        y_call_a,
        ' ではなく、犯されて歓ぶひとりの',
        acute.teen_sex_title,
        'だ。',
      ]);
      await acute.say_and_wait(['壊れます❤️～～～～']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async ask_cowgirl(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '「自分で動いてくれ」と言ったあと、',
        y_call_a,
        ' は自分から体の上へ来る。',
      ]);
      await you.print_and_wait([
        '両脚は腰の脇を挟み、両手は十指を組み、湿った穴が天を突く赤い肉棒に当たっている。',
      ]);
      await you.print_and_wait([
        'あとは、',
        y_call_a,
        ' がゆっくり腰を下ろせばいい。',
      ]);
      await acute.say_and_wait([
        'わたしも',
        acute.uma_sex_title,
        'ですから、',
        callname,
        '。わたしが満足するまで、止まりませんよ',
      ]);
      await acute.say_and_wait(['ですから……準備は、いいですか？']);
      if (era.get('talent:100:处女') > vp_status_enum.no) {
        await you.print_and_wait([
          y_call_a,
          ' の腰が落ちると同時に、赤い血が穴から流れ、下へ滴る。',
        ]);
        await you.print_and_wait([
          y_call_a,
          ' が低く鳴き、口から勝手に「うう」と漏れる。',
        ]);
        await you.say_and_wait(['……痛いか？']);
        await acute.say_and_wait([
          'ん……いまもわたしを心配してくれる ',
          callname,
          ' は、好きですよ',
        ]);
        await acute.say_and_wait([
          'でも……わたしより、先に自分を心配した方がいいですよ',
        ]);
        await acute.say_and_wait([
          'わたしに初めての血を流させた責任、取る覚悟はありますか、',
          callname,
          '？',
        ]);
      }
    } else {
      await you.print_and_wait([
        'これまで交わりでは弱気だった ',
        y_call_a,
        ' が、人格が変わったように、体を動かし続ける。',
      ]);
      await you.print_and_wait([
        '揺れ、捻り、出入り。穴が何度も肉棒を呑み、肉棒が何度も穴圧で形を変える。',
      ]);
      await you.print_and_wait([
        '十指を組んだ両手は ',
        y_call_a,
        ' に強く握られ、下につながる腰は両足に深く挟まれる。逃げる余地はない。',
      ]);
      await acute.say_and_wait(['ねえ……知っていますか、', callname, '。']);
      await you.print_and_wait([
        y_call_a,
        ' の顔を見上げる。赤い頬に、危うい気配が混じる。',
      ]);
      await acute.say_and_wait([
        'わたしは……ずっと、このときを待っていましたよ？',
      ]);
      await you.print_and_wait([
        '心の鍵が外れる音とともに、腰の上の ',
        y_call_a,
        ' が体を舞い始める……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async stimulate_g_spot(acute, you, callname) {
    if (Math.random() < 0.5) {
      await acute.print_and_wait([
        '肉棒が何度も出入りし、子宮口が波のように突かれ、湿った穴が何度も潮の頂を迎える。',
      ]);
      await acute.print_and_wait([
        'Gスポットを打ち続けられ、自分でも舌を出し、甘い声を重ねる。',
      ]);
      await acute.say_and_wait(['ぐおおおほお❤️～～～～']);
      await acute.print_and_wait([
        acute.child_sex_title,
        'が出してはいけない、下品で体裁のない声なのに、Gスポットを嬲られて発情した雌にはよく似合う。',
      ]);
      await acute.say_and_wait(['ぐおほ❤️～いく、いく、いきます❤️～～～～']);
    } else {
      await acute.say_and_wait([
        'ぷぐ❤️～',
        acute.child_sex_title,
        'になります、雌になります❤️～',
      ]);
      await acute.say_and_wait([
        callname,
        ' の、臭いのきつい、調教のあと毎回立ち上がる肉棒で、雌にされます❤️～～～',
      ]);
      await you.say_and_wait(['……何を言ってる、雌畜！']);
      await acute.say_and_wait([
        'ぐほ❤️～中の肉棒がまた大きく……ばれた❤️ 毎回調教のあと、',
        callname,
        ' のテントが気になっていたこと、ばれた❤️',
      ]);
      await acute.say_and_wait([
        callname,
        ' の肉棒に、徹底して躾けられます❤️～～～',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async stimulate_large_intestine(acute, you, callname, y_call_a) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(['ん❤️～～～～お尻、気持ちいい……']);
      await you.print_and_wait(['肉棒を送るたび、熱い痛みと快感が来る。']);
      await you.print_and_wait([
        '……後ろは、気持ちよくなってはいけない器官のはずだ。',
      ]);
      await acute.say_and_wait([
        'お尻……',
        callname,
        ' 専用の後ろに、調教されてしまいます……',
      ]);
    } else {
      await you.print_and_wait([
        '後ろを突くたび、',
        y_call_a,
        ' の腰がよく合わせて上がる。',
      ]);
      await you.print_and_wait([
        'S状結腸を嬲ったあと引き抜こうとするたび、強い穴圧が名残惜しそうに肉棒を留めようとする。',
      ]);
      await you.say_and_wait([
        '……もしかして、',
        y_call_a,
        ' はこの遊びが好きなのか？',
      ]);
      await acute.say_and_wait(['ぐふ❤️～何のことか、分かりませんよ❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async stimulate_womb(acute, you, callname) {
    if (Math.random() < 0.5) {
      await acute.print_and_wait([
        '熱い子宮が、下腹一枚越しに掌に撫でられる。',
      ]);
      await acute.print_and_wait([
        '反対では、後ろの中で子宮を押し続ける肉棒。',
      ]);
      await acute.print_and_wait(['前後から挟まれ、逃げ場がない……']);
      await acute.print_and_wait([
        '物のように、すっかり ',
        callname,
        ' の掌中に置かれているのに、感じるのは雌としての幸せだ。',
      ]);
      await acute.say_and_wait(['は❤️ もう、まったく逃げられません～']);
    } else {
      await acute.print_and_wait([
        '一方は貪欲に肉棒を呑む後ろ、一方は湿って粘る穴。',
      ]);
      await acute.print_and_wait([
        '子宮を刺激し続けるうち、粘液が穴から落ち、銀河のように地へ垂れる。',
      ]);
      await acute.print_and_wait([
        '穴だけでなく、もう一つの小さな口から出る唾液も、喘ぐ唇から滑り落ちる。',
      ]);
      await acute.say_and_wait(['ほふ❤️……は、下腹が熱い、痒い。❤️']);
      await acute.say_and_wait([
        'ねえ、',
        callname,
        ' 後ろばかり見ないで……ほふ❤️……穴にも、入れてください？',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async insult(acute, you, callname, y_call_a) {
    const message = [
      async () => {
        await you.say_and_wait('罵られるのが好きな変態！');
        await acute.say_and_wait(
          '好き、ではありませんよ？ 少し、興奮するだけです～',
        );
        await you.print_and_wait([
          y_call_a,
          ' は穏やかに笑い、侮辱された様子がない。',
        ]);
        await you.print_and_wait('……それが好きってことだろ！');
      },
      async () => {
        await you.say_and_wait('戦闘力は高いのに、誘う側のドM！');
        await acute.say_and_wait('戦闘力が高い？ そんなこと、ありませんよ～');
        await you.print_and_wait([
          y_call_a,
          ' は穏やかに笑い、侮辱された様子がない。',
        ]);
        await you.print_and_wait([
          '……いつか ',
          y_call_a,
          ' がボクシングの王座戦に出るのを見る気がする。',
        ]);
      },
    ];
    if (you.sex_code > 0) {
      message.push(async () => {
        await you.say_and_wait('入れたら離さない、淫らな尻！');
        await acute.say_and_wait([
          'えへ～ こちら、淫らな尻の ',
          y_call_a,
          ' ですよ～',
        ]);
        await you.print_and_wait([
          y_call_a,
          ' は穏やかに笑い、侮辱された様子がない。',
        ]);
        await you.print_and_wait('……称号にするな！');
      });
    }
    if (acute.sex_code !== 1) {
      message.push(
        async () => {
          await you.say_and_wait('淫乱な雌豚め！');
          await acute.say_and_wait('豚ではありません。ただのウマ娘ですよ❤️～');
          await you.print_and_wait([
            y_call_a,
            ' は穏やかに笑い、侮辱された様子がない。',
          ]);
          await you.print_and_wait('……「淫乱」は否定しないのか。');
        },
        async () => {
          await you.say_and_wait('勝手に発情する雌畜！');
          await acute.say_and_wait(
            'ん……誰にでも発情するわけではありませんよ～',
          );
          await you.print_and_wait([
            y_call_a,
            ' は穏やかに笑い、侮辱された様子がない。',
          ]);
          await you.print_and_wait('……雌畜の方を、反論しろ。');
        },
        async () => {
          await you.say_and_wait(
            '落ち着いて見えるくせに、普段の調教でもえっちなこと考えてるダメなおばあちゃん！',
          );
          await acute.say_and_wait(
            'んむ……調教のときは、ちゃんと集中していますよ～ 枯れ木の洞にいるときだけ、たまにえっちなことを考えるくらいです～',
          );
          await you.print_and_wait([
            y_call_a,
            ' は穏やかに笑い、侮辱された様子がない。',
          ]);
          await you.print_and_wait([
            '……',
            y_call_a,
            ' の知られざる面が、ばれた！',
          ]);
        },
        async () => {
          await you.say_and_wait('使い勝手のいい出前まんこ！');
          await acute.say_and_wait(
            'ぐるむ……出前まんこ？ 出前ばかりだと、体に悪いですよ～',
          );
          await you.print_and_wait([
            y_call_a,
            ' は穏やかに笑い、侮辱された様子がない。',
          ]);
          await you.print_and_wait(
            '……少なくとも今回は、本当に「出前まんこ」の意味が分かっていない。',
          );
        },
        async () => {
          await you.say_and_wait('尻を叩けば締まる、ダメな穴！');
          await acute.say_and_wait(
            'まあ……気持ちよすぎるので、仕方ありませんよ～',
          );
          await you.print_and_wait([
            y_call_a,
            ' は穏やかに笑い、侮辱された様子がない。',
          ]);
          await you.print_and_wait('……仕方ないことか？');
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async hit_anal(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait(['掌が尻に当たり、豊かな尻が手の中で波打つ。']);
      await you.print_and_wait([
        'もともと白い尻は今や真っ赤で、触れるだけでも傍の穴が無意識に痙攣する。',
      ]);
      await you.print_and_wait([
        'ぱん！ また叩く音。滑らかな唇が痙攣し、澄んだ汁とだらしのない声が同時に零れる——',
      ]);
      await acute.say_and_wait([
        'ほふふ～❤️だめ❤️ 尻を叩かれるだけで絶頂する変態になります❤️ 弱点、ばれた❤️ 徹底して雌になります～❤️',
      ]);
    } else {
      await you.print_and_wait([
        'もう赤く腫れているのに、尻はなお高く上がっている。',
      ]);
      await you.print_and_wait([
        'まだ足りないように、豊かな尻がこちらへわざわざ左右に揺れる。',
      ]);
      await acute.say_and_wait([
        'ねえ❤️',
        callname,
        '、まだ、足りませんよね？',
      ]);
      await acute.say_and_wait([
        'わたし、分かります。普段、ずいぶん重荷を負っていますね……ですから、ここで、思う存分吐き出してください～❤️',
      ]);
      await acute.say_and_wait(['わたしの体は、あなたのものですから❤️～']);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async hit_anal_hard(acute, you, callname) {
    await acute.print_and_wait(['痛いほど、興奮する。']);
    await acute.print_and_wait([
      '尻の感覚はもうないのに、叩かれるたび、下に衝撃が走る。',
    ]);
    await acute.print_and_wait([
      '機械のように、豊かな尻を叩くたび、滑らかな穴から淫らな汁が落ちる。',
    ]);
    await acute.print_and_wait([
      '地に伏せた穏やかな顔も、今は快感に壊され、目を上へ向け、舌を出し、叩くリズムに合わせて声を出す。',
    ]);
    await acute.print_and_wait(['その声の中に、もう砕けた言葉が混じる——']);
    await acute.say_and_wait(['ほ～ふふ～', callname, '……幸せです❤️～']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async hit_face_by_penis(acute, you, callname, y_call_a, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '頬に当たっているのは、「陽の気」を放つ肉棒だ。',
      ]);
      await you.print_and_wait([
        y_call_a,
        ' は動かず、肉棒を見つめたまま、垢と汚れを自分の頬へ塗らせる。',
      ]);
      await acute.say_and_wait(['元気な匂い……これは、何を——']);
      await you.print_and_wait([
        y_call_a,
        ' が言い終わる前に、頬で拭き終えた肉棒が、そのまま ',
        y_call_a,
        ' の頬を叩く。',
      ]);
      await you.print_and_wait([
        '顔の痛みに、',
        acute.sex,
        'は少し驚いたらしい。だがすぐ、',
        y_call_a,
        ' は驚きから抜け、何かを悟ったように穏やかに微笑む。',
      ]);
      await acute.say_and_wait(['なるほど……とても『元気』な肉棒ですね❤️']);
    } else if (acute.sex_code !== 1) {
      await you.say_and_wait([
        'このあと肉棒で平手を、',
        y_call_a,
        ' が泣くまで続ける。',
      ]);
      await acute.print_and_wait(['自分へ向いた肉棒が、そう宣言する。']);
      await acute.say_and_wait(['泣くまで……ですか？']);
      await acute.print_and_wait(['それだけで、下腹に熱が走る。']);
      await acute.print_and_wait([
        'まして頬を肉棒に拭かれ、弄ばれ、叩かれ、嗅覚が陽の気に占領されている今は。',
      ]);
      await acute.say_and_wait(['泣くまで、ずっと肉棒で叩かれる……'], true);
      await acute.say_and_wait(
        ['いけません……まったく、泣けそうにありません❤️'],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} supporter 助手
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} call_s ワンダーアキュートの助手への呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {PrintedSpan} y_call_s プレイヤーの助手への呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async ask_double_blow_job(
    acute,
    you,
    supporter,
    callname,
    call_s,
    y_call_a,
    y_call_s,
    is_first,
  ) {
    const message = [];
    if (is_first) {
      message.push(
        async () => {
          await you.print_and_wait([
            '口で侍れと言われ、',
            y_call_a,
            ' はすぐ笑いながら、顔を肉棒へ寄せる。',
          ]);
          await acute.say_and_wait([
            'ん……本当に ',
            callname,
            ' には勝てませんね～ では ',
            call_s,
            '、一緒に『キス』しましょう～',
          ]);
          await you.print_and_wait([
            'そう言い、',
            y_call_a,
            ' の段取りで、',
            y_call_a,
            ' と ',
            y_call_s,
            ' の淡い唇が両側から竿に口づけ、キスしながら舌を出し、周囲を滑る——',
          ]);
        },
        async () => {
          await you.print_and_wait([
            '口で侍れと言われ、',
            y_call_s,
            ' が反応する前に、',
            y_call_a,
            ' が素早く先を自分の口へ呑む。',
          ]);
          await acute.say_and_wait([
            'えへへ……ごめんなさい、',
            call_s,
            '。わたしは、譲りませんよ？',
          ]);
          await you.print_and_wait([
            '言いながら、',
            y_call_a,
            ' の舌はもう溝へ伸び、下は驚いてくたりと緩む。',
          ]);
          await you.print_and_wait([
            '手遅れと見て、口では少し文句を言いながらも、',
            y_call_s,
            ' は片側で舌を出し、竿を侍る……',
          ]);
        },
        async () => {
          await acute.say_and_wait([
            callname,
            ' の急所は溝ですよ？ ……ええ、そうです、',
            call_s,
            '、上手ですよ～',
          ]);
          await you.print_and_wait([
            '舌を出して竿を上下に舐める ',
            y_call_a,
            ' が、反対で先を呑む ',
            y_call_s,
            ' を教える。',
          ]);
          await acute.say_and_wait([
            '頑張って、',
            call_s,
            '。',
            callname,
            ' は、もっと深く呑まれるのが好きですよ……',
          ]);
          await you.print_and_wait([
            '気持ちを落ち着けるように、',
            y_call_a,
            ' は ',
            y_call_s,
            ' の頭を撫でる。撫でながら、そっと力を入れ、できるだけ ',
            y_call_s,
            ' を奥まで呑ませる……',
          ]);
        },
      );
    } else {
      message.push(
        async () => {
          await acute.say_and_wait('んむんむ……くく……は……');
          await you.print_and_wait([
            '肉棒の両側で、',
            y_call_a,
            ' と ',
            y_call_s,
            ' が竿を舐め続ける。',
          ]);
          await you.print_and_wait([
            '侍られる自分だけでなく、時折触れる舌先が、侍る二人をさらに昂らせる。',
          ]);
          await acute.say_and_wait([
            'ねえ、',
            call_s,
            '、一緒に『休み』ますか？',
          ]);
          await you.print_and_wait([
            y_call_a,
            ' が瞬き、含みのある微笑みを見せ、',
            y_call_s,
            ' は顔を赤らめる。',
          ]);
          await you.print_and_wait(
            'すぐ、二人の舌先が溝を越え、先の半分を一緒に含む。肉棒を侍りながら、互いの舌先で唾液を交わす……',
          );
        },
        async () => {
          await acute.say_and_wait('ぐむむ……ぷ、ぱ……ぐは……');
          await you.print_and_wait([
            y_call_a,
            ' は猛獣が食うように、口の中の巨物を貪欲に呑み、何度も自分の唾液で肉棒に印を付ける。',
          ]);
          await you.print_and_wait([
            '呑み込むたび、',
            y_call_s,
            ' の縄張りが少しずつ侵される。袋の位置まで追いやられないよう、闘志を焚かれた ',
            y_call_s,
            ' も、肉棒を奪うために舐める速度を上げる。',
          ]);
          await you.print_and_wait('一時、火花が散る……');
        },
        async () => {
          await supporter.say_and_wait('ん……ん！！！');
          await you.print_and_wait([
            y_call_a,
            ' の助けで、',
            y_call_s,
            ' はもう自分の肉棒を根元まで呑んでいる。',
          ]);
          await you.print_and_wait([
            y_call_a,
            ' が優しく ',
            y_call_s,
            ' の頭を撫で、',
            supporter.sex,
            'が根元まで呑んだまま、喉でゆっくり侍るのを助ける。',
          ]);
          await you.print_and_wait([
            '反対で、',
            y_call_a,
            ' は身を伏せ、肉棒の根元へ来る。',
          ]);
          await acute.say_and_wait([
            'では……頑張ってくださいね、',
            callname,
            '～',
          ]);
          await you.print_and_wait([
            'そう言い、',
            y_call_a,
            ' は顔を寄せ、小さな口を開け、根元へそっと歯を立てる——',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} supporter 助手
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} call_s ワンダーアキュートの助手への呼び方
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   * @param {PrintedSpan} y_call_s プレイヤーの助手への呼び方
   * @param {boolean} is_first 連続動作の初回かどうか
   */
  async double_suck_nipple(
    acute,
    you,
    supporter,
    callname,
    call_s,
    y_call_a,
    y_call_s,
    is_first,
  ) {
    const message = [];
    if (is_first) {
      message.push(
        async () => {
          await acute.say_and_wait([
            'えへへ……',
            callname,
            ' と ',
            call_s,
            ' は、子供みたいですね～',
          ]);
          await you.print_and_wait([
            '染まった頬に、それでも穏やかな笑みが残る。',
          ]);
          await you.print_and_wait([
            callname,
            ' と ',
            call_s,
            ' の頭を撫で、',
            y_call_a,
            ' は慈しむ顔で、眼前の子供を見ている。',
          ]);
        },
        async () => {
          await you.print_and_wait([
            '……淡い乳首を吸いすぎたのか、',
            y_call_a,
            ' は口を尖らせ、自分の頭を三度、軽く叩く。',
          ]);
          await acute.say_and_wait([
            'ひとりで飲み切らないで……',
            call_s,
            ' にも、残してくださいね',
          ]);
          await you.print_and_wait('赤い頬に、桃色の愛情が満ちている。');
        },
      );
    } else {
      message.push(
        async () => {
          await acute.say_and_wait([
            'ん～そんなに急がなくていいですよ。わたしの胸は、ずっとここにありますから～',
          ]);
          await you.print_and_wait([
            '眼前で乳首を吸う二人を撫で、',
            y_call_a,
            ' の目に慈しみが一筋走る。',
          ]);
          await acute.say_and_wait([
            'でも、胸ばかり吸わないでくださいね？ 他にも、することがありますよ～',
          ]);
          await you.print_and_wait(
            'そう言い、指で弄ると、誰のものか分からない淡い下が、澄んだ水をきらめかせ始める——',
          );
        },
        async () => {
          await acute.say_and_wait([
            callname,
            ' は、とても美味しそうに飲んでいます。よかったですね、',
            call_s,
            '～',
          ]);
          await you.print_and_wait([
            '胸元の自分の頭を撫で、',
            y_call_a,
            ' が ',
            y_call_s,
            ' に嫣然と笑う。',
          ]);
        },
      );
    }
    await get_random_entry(message)();
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async sleep_kiss(acute, you, y_call_a) {
    await you.print_and_wait([
      '安らかに横たわる ',
      y_call_a,
      ' が、小さく息をしている。',
    ]);
    await you.print_and_wait('淡い唇が一開一閉し、何かを待っているようだ。');
    await you.print_and_wait('寄り、そっとその淡い唇に口づける——');
    await you.print_and_wait(
      '顔を上げると、なお開閉する淡い唇には、自分の跡が残っている。',
    );
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_a プレイヤーのワンダーアキュートへの呼び方
   */
  async sleep_french_kiss(acute, you, y_call_a) {
    await you.print_and_wait([
      '淡い唇を汚すだけでは足りない。',
      y_call_a,
      ' の舌にも触れたい。',
    ]);
    await you.print_and_wait(
      '口の中へ入った斥候は歯に遮られず、すんなり門を叩き、舌のところまで来る。',
    );
    await you.print_and_wait([
      y_call_a,
      ' がまだ眠っているうちに、往復して絡め、奥へ自分の跡を残す。',
    ]);
    await you.print_and_wait('離れると、唾液の糸が互いの舌先をつなぐ。');
    await you.print_and_wait(['——見ろ、', y_call_a, '、舌では俺の勝ちだ。']);
    await you.print_and_wait([
      '……そう大声で叫びたいが、これは ',
      y_call_a,
      ' に言えないことだ。',
    ]);
  },
};
