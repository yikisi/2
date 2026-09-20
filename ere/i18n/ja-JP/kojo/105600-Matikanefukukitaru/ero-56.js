/**
 * @file マチカネフクキタル - 調教
 * @author ALEX
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { location_enum } = require('#/data/locations');

module.exports = {
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async kiss(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.say_and_wait('んっ……');
      await you.print_and_wait(
        'すぐ近くで、向かいの星の瞳に水気がかかっているのが見える。',
      );
      await kitaru.say_and_wait([callname, '……']);
      await you.print_and_wait([
        '無意識に腕を回して ',
        y_call_k,
        ' を抱き、口のなかへ入ってきた舌に、精一杯応える。',
      ]);
      await you.print_and_wait([
        '唇が離れると、二人の舌のあいだに銀の橋がかかり、吐息の熱で落ちる。',
      ]);
      await kitaru.say_and_wait('んはっ……ちゅはっ……❤️');
      await you.print_and_wait([
        'やっと一息ついた ',
        y_call_k,
        ' が、またキスを求めてくる。',
      ]);
    } else {
      await kitaru.say_and_wait('ちゅる……んっ……ぷはっ……ちゅる……ぐっん');
      await kitaru.print_and_wait([
        '長距離を走る',
        kitaru.uma_sex_title,
        'なんだから、主導するのは自分のほうであるはずなのに……',
      ]);
      await kitaru.print_and_wait([
        '運命の人の、大人の安心する匂いが、交わした涎と息といっしょに体へ流れ込んでくると……',
      ]);
      await kitaru.print_and_wait(['……と……溶けてしまいそうです……']);
      await you.print_and_wait([
        'たまに唇が離れる休みのあいだ、満面の紅潮の ',
        y_call_k,
        ' は小さく口を開けて熱い息を吐き、目尻に涙を一点宿している。',
      ]);
      await kitaru.say_and_wait([callname, '……好き、です……']);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async french_kiss(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait('浅く味わっただけでは、足りない。');
      await you.print_and_wait([
        'だからさらに舌を深く入れ、',
        y_call_k,
        ' の口腔を思うままに蹂躙する。',
      ]);
      await you.print_and_wait('ぱちゃぱちゃと、動く舌が下品な水音を立てる。');
      await kitaru.say_and_wait('んっ！❤️');
      await you.print_and_wait([
        '二人の舌が絡むと、腕のなかの栗毛の',
        kitaru.uma_sex_title,
        'が喉から、ねっとりした返事を漏らす。',
      ]);
      await you.print_and_wait([
        '体もぴったり張りつき、舌と舌、粘膜、歯の接触で快感が相手へ伝わり、応えようとする ',
        y_call_k,
        ' の体が震え止まない。',
      ]);
      await you.print_and_wait([
        callname,
        ' の、侵略的なキスを受けるしかない。',
      ]);
    } else {
      await kitaru.say_and_wait('んっ……ちゅる……ぐっん……');
      if (!you.race) {
        await kitaru.print_and_wait([
          callname,
          ' は人間なのに……肺活量、反則ですよ……',
        ]);
      }
      await kitaru.print_and_wait([
        '舌が儀式のように歯を一枚ずつ舐め、自分の舌に絡み、舌の根を擦る……',
      ]);
      await kitaru.print_and_wait([
        '口のなかへ流れ込んでくる、',
        callname,
        ' のねっとりした涎……',
      ]);
      await kitaru.say_and_wait('ぐるっ……んはっ……❤️');
      await kitaru.print_and_wait([
        'キスの余韻で、自分は短い吐息をつき、',
        callname,
        ' のホルモンの匂いを全身に巡らせる。',
      ]);
      await kitaru.say_and_wait('あの、まだ、続けたいです……❤️', true);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async talk(kitaru, you, callname, y_call_k) {
    if (Math.random() < 0.5) {
      await you.say_and_wait('フクキタルは犬系か、猫系か。');
      await kitaru.say_and_wait('えっ！ それですか！');
      await you.say_and_wait('……むしろ狐系、か？');
      you.print(['本性を突かれた ', y_call_k, ' の顔が、さらに赤くなる。']);
    } else {
      await you.say_and_wait('白興様から人を奪ってるみたいだな……');
      await you.print_and_wait([
        '桜色を帯びた ',
        y_call_k,
        ' を見て、ついそう言った。',
      ]);
      await you.print_and_wait('……蹴られない。……返事もない。');
      you.print('……でも、顔はすごく赤い。');
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_success 色仕掛けが成功したか
   */
  async lure(kitaru, you, callname, y_call_k, is_success) {
    await you.say_and_wait([y_call_k, '。']);
    await you.print_and_wait(
      'そっと、細い耳に向けて、目の前の担当の名前を呼ぶ。',
    );
    if (is_success || era.get(`tcvar:${kitaru.id}:发情`) > 0) {
      await kitaru.say_and_wait(['あ……あの、', callname, '。']);
      await you.print_and_wait([
        y_call_k,
        ' は服の裾を掴み、狐のように胸に張りつき、期待の目で応える。',
      ]);
      await you.print_and_wait(['何か言うべきとき、だろうか。']);
      if (kitaru.sex_code !== 1) {
        await you.print_and_wait([
          'それでも、',
          y_call_k,
          ' の柔らかい体を抱いている今は、かなり心地いい。大きな手が占い少女の体を歩き、安産型の尻肉も、普段は服に閉じ込められた大きな胸も、ちょうどいい脚も。',
        ]);
      }
      await you.print_and_wait([
        y_call_k,
        ' の星の瞳が、自分の動きに合わせて瞬くのが見える。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async pet_ear(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '罰で、',
        y_call_k,
        ' の耳には何度も触ってきた。',
      ]);
      await you.print_and_wait([
        'でも今のように、',
        kitaru.uma_sex_title,
        'のなかでも長い部類のその耳を、性の意味を込めて好きに揉み、弄るのは、別だ。',
      ]);
      await kitaru.say_and_wait(['んやっ❤️……']);
      await you.print_and_wait([
        '栗色の尻尾がいきなり真直ぐに張り、舌先まで出て、上下に震えている。',
      ]);
      await you.print_and_wait(['右の耳のほうが、敏感らしい。']);
    } else {
      await kitaru.print_and_wait([
        '最初は耳の縁を軽く摘み、それから ',
        callname,
        ' が指を中へ入れた。',
      ]);
      await kitaru.say_and_wait(['ひゃっ❤️！']);
      await kitaru.print_and_wait([
        '撫でが揉みへ変わり、指がいたずらに産毛を擦り、耳からぽかぽかが伝わってくる。',
      ]);
      await kitaru.print_and_wait([
        '逃げたいのに、裏切った耳は自ら真っ直ぐ伸び、',
        callname,
        ' に隅々まで弄ばれた。',
      ]);
      await kitaru.print_and_wait([
        '刺激が強すぎて、視界が……だんだん霞んできます……',
      ]);
      await kitaru.print_and_wait([
        '揃えた両脚のあいだも、ぬるぬるしてきました。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async pull_ear(kitaru, you, y_call_k) {
    await you.print_and_wait(['少し引っ張ったら……']);
    await you.print_and_wait([
      '仕草だけのつもりだった。だが ',
      y_call_k,
      ' も同じように期待する目と合ったあと、想像が現実になった。',
    ]);
    await you.print_and_wait([
      '乱暴に、養殖場の兎を扱うように、',
      kitaru.sex,
      'に顎を上げさせる。',
    ]);
    await you.print_and_wait([
      '敏感な耳の根が ',
      you.get_colored_name(),
      ' に摘まれたとき、',
      y_call_k,
      ' の脳へ、快感と取り違えられた痛みが送られる。',
    ]);
    await kitaru.say_and_wait(['んうっ❤️……うっ❤️……']);
    await you.print_and_wait(['やりすぎた、だろうか。']);
    await you.print_and_wait([
      '手を離すと、引っ張られてさくらんぼ色になった栗色の耳が嬉しそうに揺れ、主の機嫌がいいことを語る。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async pet_breast_from_back(kitaru, you, y_call_k) {
    await you.print_and_wait([
      '普段は服の下に隠れた豊かな胸を、ほとんど乱暴に揉む。汗で滑らかで弾力のある胸を、自分の思う形に変え、指がときどき苺のような乳首を掠める。',
    ]);
    await kitaru.say_and_wait(['うっ……！❤️ここ……！❤️❤️']);
    await you.print_and_wait([
      '急所を握られた ',
      y_call_k,
      ' は甘い呻きとともに体を反らし、最後は吐息を漏らして腕のなかへ崩れ落ちた。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async pet_breast(kitaru, you, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        y_call_k,
        ' の胸の、重いそれが、いま掌に落ちる。',
      ]);
      await you.print_and_wait([
        '普段、服越しにはそれほど大きく見えない。だが掌へ絶えず伝わるふくらみが、担当は隠れた巨乳の下品なウマ娘だと、さらに確信させる。',
      ]);
      await kitaru.say_and_wait(['んんっ……❤️']);
      await you.print_and_wait([
        'ぷにぷにと揉み、掌のあいだの温かく潤んだ肉の波を味わう。',
      ]);
      await you.print_and_wait([
        '指が柔らかさへ沈むたび、興奮した ',
        y_call_k,
        ' がびくびく反応し、喉から甘い声が漏れる。',
      ]);
    } else {
      await you.print_and_wait([
        'ほとんど濡れた黄玉色の瞳と、鼻から漏れる誘う声。',
        y_call_k,
        ' の胸は、かなり敏感らしい。',
      ]);
      await you.print_and_wait(['止めるか。手の動きを、少し遅くした。']);
      await kitaru.say_and_wait(['はあっ❤️……え……']);
      await kitaru.say_and_wait(['あの、続けて、いいです……']);
      await you.print_and_wait(['欲情を込めて、懇願してきた。']);
      await you.print_and_wait([
        'だからさらに、ほとんど形の定まらない柔らかい胸を、自分の好みの形へ引き伸ばし、白い乳肉に掌の赤い跡を残す……終わったあと、痕は残るだろうか。',
      ]);
      await kitaru.say_and_wait(['んはっ……❤️']);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async kitaru_pet_breast_first(kitaru, callname) {
    await kitaru.print_and_wait([
      '自分に何をすればいいかわからず、人差し指で ',
      callname,
      ' の胸に円を描く。',
    ]);
    await kitaru.print_and_wait(['気づかれましたか？']);
    await kitaru.print_and_wait([
      'だから思い切って顔を男の胸に預け、甘えるように擦りつけた。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async pet_nipple(kitaru, you, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '胸に触れただけでこれほど敏感な ',
        y_call_k,
        ' は、乳首を弄られたらどうなるだろう。',
      ]);
      await you.print_and_wait([
        '腫れて形が崩れたような乳首を直接摘み、祓いの豆を弄ぶように碾す。',
      ]);
      await kitaru.say_and_wait(['あっ～！……はあっ❤️、はあっ、んっ～❤️']);
      await you.print_and_wait([
        '担当の声がだんだん高くなり、快感で溢れた痴態が顔に出る。',
      ]);
      await you.print_and_wait(['では、少し引っ張ったら。']);
      await you.print_and_wait([
        'すると ',
        y_call_k,
        ' は電撃のように顎を上げ、もごもごと自分に凭れた。',
      ]);
    } else {
      await kitaru.say_and_wait(['……やぁっ～❤️']);
      await you.print_and_wait(['いたずらに、担当の敏感な乳首だけを弄る。']);
      await you.print_and_wait([
        'もじもじした乳首を親指と人差し指で摘み、',
        y_call_k,
        ' の勝負服の念珠を弄ぶように左右へ捻り、硬く弾む感触を味わう。',
      ]);
      await kitaru.say_and_wait(['……あっ❤️～んっ、うっ～やぁ❤️']);
      await you.print_and_wait([
        y_call_k,
        ' は ',
        you.get_colored_name(),
        ' の動きに合わせて体をよじり、祈りを唱えるように、リズムのある甘い声を口から出す。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   */
  async finger_fuck(kitaru, you) {
    await you.print_and_wait([
      '指が少し掠めただけで、目の前の ',
      kitaru.get_colored_name(),
      ' の穴口はすぐさらに濡れた。',
    ]);
    await kitaru.say_and_wait(['やぁっ……']);
    await you.print_and_wait(['自家の巫女の、潤んだ艶やかな声が耳を巡る。']);
    await you.print_and_wait([
      'まず人差し指、それから中指。ときどき指先を曲げ、襞のある肉壁を刺激する。',
    ]);
    await kitaru.say_and_wait(['ふっ、ふふっ、あっ……運命の人……指、すごいです']);
    await you.print_and_wait([
      'ぬるぬるの穴のなかで、もう ',
      you.get_colored_name(),
      ' の指が肉を掻き回しているのか、刺激を求める蜜肉が自ら指を吸っているのか、わからない。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        '巫女は雑多な儀式を覚えなくてはいけません。類推の学習は必要な力です。でも……こんなところで使うとは、思いませんでした。',
      ]);
      await kitaru.print_and_wait([
        '人参だと思って、舌先で肉の根に軽く触れ、それから絡めて舐め、',
        callname,
        ' の雄のホルモンの味を味わう。',
      ]);
      await kitaru.say_and_wait(['はっ、うっ、ちゅる……']);
      await kitaru.print_and_wait([
        '口が肉棒を呑み舐めながら、淫らで放埒な吸う音を漏らす。',
      ]);
    } else {
      await you.say_and_wait(['覚えが早いな。']);
      await kitaru.print_and_wait([
        callname,
        ' は、しゃぶりしゃぶりと硬いそれを侍っている自分を見て、頭を撫でて褒めてくれた。',
      ]);
      await kitaru.print_and_wait(['ん……ふふ、気持ちいい、ですよね。']);
      await kitaru.print_and_wait([
        '淫らな舌を伸ばして馬口を少しずつ舐め、あるいは亀頭を口に含んで舌面で軽く押し、小悪魔のように歯で ',
        you.get_colored_name(),
        ' の敏感帯を軽く擦る。',
      ]);
      await kitaru.print_and_wait([
        callname,
        ' が反応するたび、自分は嬉しそうに笑ってしまう。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.say_and_wait(['口、ですか？']);
      await kitaru.say_and_wait(['うん、精一杯やります。']);
      await kitaru.print_and_wait([
        '床に跪いて頭を寄せ、吐息を肉棒に当てる。また大きくなった気がします。',
      ]);
      await kitaru.print_and_wait(['それから……']);
      await kitaru.say_and_wait(['ぐっ！']);
      await kitaru.print_and_wait([
        '一息にペニスを口へ呑み、参拝で祈りを唱える小さな口が肉棒でいっぱいになる。ぐちゅぐちゅという音とともに、自分の ',
        callname,
        ' に口で奉仕する。',
      ]);
      await kitaru.print_and_wait([
        '巫女は雑多な儀式を覚えなくてはいけません。類推の学習は必要な力です。でも……こんなところで使うとは、思いませんでした。',
      ]);
      await kitaru.print_and_wait([
        '人参だと思って、舌先で肉の根に軽く触れ、それから絡めて舐め、',
        callname,
        ' の雄のホルモンの味を味わう。',
      ]);
      await kitaru.say_and_wait(['はっ、うっ、ちゅる……']);
      await kitaru.print_and_wait([
        '口が肉棒を呑み舐めながら、淫らで放埒な吸う音を漏らす。',
      ]);
    } else {
      await kitaru.say_and_wait(['わかりました、わかりました。']);
      await you.print_and_wait(['少し上の空で、肉棒を呑み込んだ。']);
      await kitaru.say_and_wait(['……ぐわっ、ぐるっ、ちゅ、うっ！']);
      await you.print_and_wait([
        '準備ができていなかったらしい。吐き出そうとする ',
        y_call_k,
        ' は鼻から息を吐き、少しずつ硬いそれを口から離した。',
      ]);
      await you.print_and_wait([
        'それでも動く鼻翼と揺れる尻尾を見ると、かなり楽しんでいるようだ。',
      ]);
      await you.say_and_wait(['覚えが早いな。']);
      await kitaru.print_and_wait([
        callname,
        ' は、しゃぶりしゃぶりと硬いそれを侍っている自分を見て、頭を撫でて褒めてくれた。',
      ]);
      await kitaru.print_and_wait(['ん……ふふ、気持ちいい、ですよね。']);
      await kitaru.print_and_wait([
        '淫らな舌を伸ばして馬口を少しずつ舐め、あるいは亀頭を口に含んで舌面で軽く押し、小悪魔のように歯で ',
        you.get_colored_name(),
        ' の敏感帯を軽く擦る。',
      ]);
      await kitaru.print_and_wait([
        callname,
        ' が反応するたび、自分は嬉しそうに笑ってしまう。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async force_blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await you.say_and_wait('口を開けろ。');
      await kitaru.print_and_wait(
        '抵抗すれば、効くかもしれない……そう思ったのに、体は少しずつ、その手に押し下げられていく……',
      );
      await kitaru.say_and_wait('んっ……');
      await kitaru.print_and_wait([
        '巫女は雑多な儀式を覚えなくてはいけません。類推の学習は必要な力です。でも……こんなところで使うとは、思いませんでした。',
      ]);
      await kitaru.print_and_wait([
        '人参だと思って、舌先で肉の根に軽く触れ、それから絡めて舐め、',
        callname,
        ' の雄のホルモンの味を味わう。',
      ]);
      await kitaru.say_and_wait(['はっ、うっ、ちゅる……']);
      await kitaru.print_and_wait([
        '口が肉棒を呑み舐めながら、淫らで放埒な吸う音を漏らす。',
      ]);
    } else {
      await kitaru.say_and_wait('はっ……', true);
      await kitaru.say_and_wait('まだ……続けるんですか……', true);
      await you.say_and_wait(['覚えが早いな。']);
      await kitaru.print_and_wait([
        callname,
        ' は、しゃぶりしゃぶりと硬いそれを侍っている自分を見て、頭を撫でて褒めてくれた。',
      ]);
      await kitaru.print_and_wait(['ん……ふふ、気持ちいい、ですよね。']);
      await kitaru.print_and_wait([
        '淫らな舌を伸ばして馬口を少しずつ舐め、あるいは亀頭を口に含んで舌面で軽く押し、小悪魔のように歯で ',
        you.get_colored_name(),
        ' の敏感帯を軽く擦る。',
      ]);
      await kitaru.print_and_wait([
        callname,
        ' が反応するたび、自分は嬉しそうに笑ってしまう。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async deep_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.print_and_wait(['ふっ……こう息をすると、少し大変です。']);
      await kitaru.print_and_wait([
        '頭をさらに後ろへ反らし、小さな舌を力を込めて縮め、肉棒が口のなかへ押し込まれる余地を作る。',
      ]);
      await kitaru.print_and_wait(['まだ、先、ですか？']);
      await kitaru.print_and_wait([
        '目を閉じた自分が、乱れた毛が鼻を突く痒さと、ますますはっきりした、わけもなく酔うような臭いを感じるまで。',
      ]);
      await kitaru.print_and_wait([
        '頭が真っ白です。こうして、もっと深くても、いいですよね？',
      ]);
      await kitaru.print_and_wait([
        '頭を撫でられる感触。',
        callname,
        ' の大きな手がふわふわのオレンジ髪に優しく乗り、励ますように撫で、自分の動きに合わせて、もう力なく垂れた両耳にときどき触れる。',
      ]);
      await kitaru.print_and_wait([
        'まるで……うっ、違います……この姿勢、明らかに ',
        callname,
        ' のペットです。小さな狐、にされてますか？',
      ]);
      await kitaru.print_and_wait([
        'だから、肉棒の匂いで調えられた自分は、主の合図を一つ残らず理解している。',
      ]);
      await kitaru.print_and_wait([
        '左耳を引かれたときは唇を閉じて肉棒を圧し、濡れたピンクの舌で敏感な亀頭を包む。',
      ]);
      await kitaru.print_and_wait([
        '右耳を引かれたときは頭を左右に揺らし、頬の内側の柔らかい肉と舌で肉棒を侍る。',
      ]);
      await kitaru.print_and_wait([
        callname,
        ' が短く頭を撫でたときは、先端を強く吸って頬を淫らに凹ませ、舌先で鈴口を擦る。',
      ]);
      await kitaru.say_and_wait(['うっぐ――']);
      await kitaru.print_and_wait([
        '脚が力を失って震え、小さな頭がぼんやりしたまま、肉棒を呑み吐く動きを速めた。',
      ]);
    } else {
      await kitaru.say_and_wait(['ぐっん—！']);
      await kitaru.print_and_wait([
        '星の瞳はすでに少し白目を剥いているのに、喉は休みなく開いて閉じ、普段は空気以外に触れたことのない喉肉で締め、亀頭を刺激する。',
      ]);
      await kitaru.say_and_wait(['んっ～ちるっ～んっ—！']);
      await kitaru.print_and_wait([
        '陰毛に張りついたピンクの唇と肉棒の隙間から、色情の吐息が漏れ、跳ねた栗色の尻尾が手柄を見せるように揺れる。',
      ]);
      await kitaru.say_and_wait(['うっぐ――']);
      await you.print_and_wait([
        '両脚が力を失って震え、長距離を走れる体も支えきれないように前へ傾き、かわいい顔が肉棒の根へどんどん近づく。',
      ]);
      await you.print_and_wait([
        '肉棒の匂いで開けない星の瞳を細め、呼吸のたびに口の端から薄い肉棒の臭いの涎が漏れ、真っ直ぐな白い首を伝い、胸にかかる。',
      ]);
      await you.say_and_wait([y_call_k, '？']);
      await kitaru.say_and_wait(['んっ……んんんん……']);
      await you.print_and_wait([
        '下の者の様子を試しに尋ねても、もごもごした返事しか返らず、小さな顔はすっかり ',
        you.get_colored_name(),
        ' の股の陰毛に埋まった。',
      ]);
      await you.print_and_wait([
        'まあ、無事なら続ける。担当の頭を股下にしっかり押さえ、腰を前後に動かし、本当に ',
        y_call_k,
        ' の口穴を突いているように、肉棒で担当の小さな口と喉を犯す快感を味わう。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_deep_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait('もっと、深く……');
      await kitaru.print_and_wait([
        '欲張って呟き、快感に支配された ',
        callname,
        ' が腰を突き上げる。',
      ]);
      await kitaru.print_and_wait('もっと深く、含みました……');
      await kitaru.print_and_wait('奥まで、届きました……');
      await kitaru.print_and_wait(['ふっ……こう息をすると、少し大変です。']);
      await kitaru.print_and_wait([
        '頭をさらに後ろへ反らし、小さな舌を力を込めて縮め、肉棒が口のなかへ押し込まれる余地を作る。',
      ]);
      await kitaru.print_and_wait(['まだ、先、ですか？']);
      await kitaru.print_and_wait([
        '目を閉じた自分が、乱れた毛が鼻を突く痒さと、ますますはっきりした、わけもなく酔うような臭いを感じるまで。',
      ]);
      await kitaru.print_and_wait([
        '頭が真っ白です。こうして、もっと深くても、いいですよね？',
      ]);
      await kitaru.print_and_wait([
        '頭を撫でられる感触。',
        callname,
        ' の大きな手がふわふわのオレンジ髪に優しく乗り、励ますように撫で、自分の動きに合わせて、もう力なく垂れた両耳にときどき触れる。',
      ]);
      await kitaru.print_and_wait([
        'まるで……うっ、違います……この姿勢、明らかに ',
        callname,
        ' のペットです。小さな狐、にされてますか？',
      ]);
      await kitaru.print_and_wait([
        'だから、肉棒の匂いで調えられた自分は、主の合図を一つ残らず理解している。',
      ]);
      await kitaru.print_and_wait([
        '左耳を引かれたときは唇を閉じて肉棒を圧し、濡れたピンクの舌で敏感な亀頭を包む。',
      ]);
      await kitaru.print_and_wait([
        '右耳を引かれたときは頭を左右に揺らし、頬の内側の柔らかい肉と舌で肉棒を侍る。',
      ]);
      await kitaru.print_and_wait([
        callname,
        ' が短く頭を撫でたときは、先端を強く吸って頬を淫らに凹ませ、舌先で鈴口を擦る。',
      ]);
      await kitaru.say_and_wait(['うっぐ――']);
      await kitaru.print_and_wait([
        '脚が力を失って震え、小さな頭がぼんやりしたまま、肉棒を呑み吐く動きを速めた。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '喉でぐるぐると肉棒を侍りながら尻尾を揺らせる余裕も、少しずつ増えてきた。',
        kitaru.get_colored_name(),
        ' はこの方面、',
        you.phy_sex_title,
        'の予想より才能がある。',
      ]);
      await kitaru.print_and_wait([
        '余光で ',
        callname,
        ' が息を吸って顎を上げる姿を見、歌う暇のない ',
        kitaru.get_colored_name(),
        ' はわかりやすく耳を震わせる。',
      ]);
      await kitaru.print_and_wait('どう、ですか～');
      await kitaru.print_and_wait([
        '小さな口に今は言葉の余裕はない。だが担当と負の距離で接している ',
        callname,
        ' は、舌先が亀頭に描いた手柄の言葉を、完全に理解した。',
      ]);
      await kitaru.say_and_wait(['ぐっん—！']);
      await kitaru.print_and_wait([
        '星の瞳はすでに少し白目を剥いているのに、喉は休みなく開いて閉じ、普段は空気以外に触れたことのない喉肉で締め、亀頭を刺激する。',
      ]);
      await kitaru.say_and_wait(['んっ～ちるっ～んっ—！']);
      await kitaru.print_and_wait([
        '陰毛に張りついたピンクの唇と肉棒の隙間から、色情の吐息が漏れ、跳ねた栗色の尻尾が手柄を見せるように揺れる。',
      ]);
      await kitaru.say_and_wait(['うっぐ――']);
      await you.print_and_wait([
        '両脚が力を失って震え、長距離を走れる体も支えきれないように前へ傾き、かわいい顔が肉棒の根へどんどん近づく。',
      ]);
      await you.print_and_wait([
        '肉棒の匂いで開けない星の瞳を細め、呼吸のたびに口の端から薄い肉棒の臭いの涎が漏れ、真っ直ぐな白い首を伝い、胸にかかる。',
      ]);
      await you.say_and_wait([y_call_k, '？']);
      await kitaru.say_and_wait(['んっ……んんんん……']);
      await you.print_and_wait([
        '下の者の様子を試しに尋ねても、もごもごした返事しか返らず、小さな顔はすっかり ',
        you.get_colored_name(),
        ' の股の陰毛に埋まった。',
      ]);
      await you.print_and_wait([
        'まあ、無事なら続ける。担当の頭を股下にしっかり押さえ、腰を前後に動かし、本当に ',
        y_call_k,
        ' の口穴を突いているように、肉棒で担当の小さな口と喉を犯す快感を味わう。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async force_deep_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait('顔を上げろ。');
      await kitaru.print_and_wait('もっと深く、含みました……');
      await kitaru.print_and_wait('相変わらず、温情の聞こえない短い命令だ。');
      await kitaru.print_and_wait([
        'なのに ',
        kitaru.get_colored_name(),
        ' の体は、抗いがたくそれに支配されている。',
      ]);
      await kitaru.print_and_wait(['ふっ……こう息をすると、少し大変です。']);
      await kitaru.print_and_wait([
        '頭をさらに後ろへ反らし、小さな舌を力を込めて縮め、肉棒が口のなかへ押し込まれる余地を作る。',
      ]);
      await kitaru.print_and_wait(['まだ、先、ですか？']);
      await kitaru.print_and_wait([
        '目を閉じた自分が、乱れた毛が鼻を突く痒さと、ますますはっきりした、わけもなく酔うような臭いを感じるまで。',
      ]);
      await kitaru.print_and_wait([
        '頭が真っ白です。こうして、もっと深くても、いいですよね？',
      ]);
      await kitaru.print_and_wait([
        '頭を撫でられる感触。',
        callname,
        ' の大きな手がふわふわのオレンジ髪に優しく乗り、励ますように撫で、自分の動きに合わせて、もう力なく垂れた両耳にときどき触れる。',
      ]);
      await kitaru.print_and_wait([
        'まるで……うっ、違います……この姿勢、明らかに ',
        callname,
        ' のペットです。小さな狐、にされてますか？',
      ]);
      await kitaru.print_and_wait([
        'だから、肉棒の匂いで調えられた自分は、主の合図を一つ残らず理解している。',
      ]);
      await kitaru.print_and_wait([
        '左耳を引かれたときは唇を閉じて肉棒を圧し、濡れたピンクの舌で敏感な亀頭を包む。',
      ]);
      await kitaru.print_and_wait([
        '右耳を引かれたときは頭を左右に揺らし、頬の内側の柔らかい肉と舌で肉棒を侍る。',
      ]);
      await kitaru.print_and_wait([
        callname,
        ' が短く頭を撫でたときは、先端を強く吸って頬を淫らに凹ませ、舌先で鈴口を擦る。',
      ]);
      await kitaru.say_and_wait(['うっぐ――']);
      await kitaru.print_and_wait([
        '脚が力を失って震え、小さな頭がぼんやりしたまま、肉棒を呑み吐く動きを速めた。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '無言で急かし、',
        you.phy_sex_title,
        'はまた強く手で、目の前の',
        kitaru.teen_sex_title,
        'を股間に固定した。自分が満足するまで。',
      ]);
      await kitaru.say_and_wait(['ぐっん—！']);
      await kitaru.print_and_wait([
        '星の瞳はすでに少し白目を剥いているのに、喉は休みなく開いて閉じ、普段は空気以外に触れたことのない喉肉で締め、亀頭を刺激する。',
      ]);
      await kitaru.say_and_wait(['んっ～ちるっ～んっ—！']);
      await kitaru.print_and_wait([
        '陰毛に張りついたピンクの唇と肉棒の隙間から、色情の吐息が漏れ、跳ねた栗色の尻尾が手柄を見せるように揺れる。',
      ]);
      await kitaru.say_and_wait(['うっぐ――']);
      await you.print_and_wait([
        '両脚が力を失って震え、長距離を走れる体も支えきれないように前へ傾き、かわいい顔が肉棒の根へどんどん近づく。',
      ]);
      await you.print_and_wait([
        '肉棒の匂いで開けない星の瞳を細め、呼吸のたびに口の端から薄い肉棒の臭いの涎が漏れ、真っ直ぐな白い首を伝い、胸にかかる。',
      ]);
      await you.say_and_wait([y_call_k, '？']);
      await kitaru.say_and_wait(['んっ……んんんん……']);
      await you.print_and_wait([
        '下の者の様子を試しに尋ねても、もごもごした返事しか返らず、小さな顔はすっかり ',
        you.get_colored_name(),
        ' の股の陰毛に埋まった。',
      ]);
      await you.print_and_wait([
        'まあ、無事なら続ける。担当の頭を股下にしっかり押さえ、腰を前後に動かし、本当に ',
        y_call_k,
        ' の口穴を突いているように、肉棒で担当の小さな口と喉を犯す快感を味わう。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async hand_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.say_and_wait([
        'あの、',
        callname,
        '……私、うまくできてますか？',
      ]);
      await kitaru.print_and_wait([
        '返事は聞こえません。でも、',
        callname,
        ' の腰が少し上がったのは見えました。',
      ]);
      await kitaru.say_and_wait(['では、続けます……']);
      await kitaru.print_and_wait([
        '右手の小指と人差し指で軽く肉棒を輪にし、ゆっくり扱く。ときどきもう一方の指腹で亀頭の溝を擦り、二人の体が震える湿った摩擦音を立てる。真っ赤な亀頭から落ちる透明な先走りで、両手はもうぬるぬるだ。',
      ]);
      await kitaru.say_and_wait(['ん……こうすると、参拝前の手水みたいです。']);
      await kitaru.print_and_wait([
        '巫女に心を込めて侍られた肉棒も、さらに多くの先走りを滴らせて応える。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '左手で、さらに膨らんだ竿をそっと支え、先の奉仕ですでにぬるぬるの右手を、輝く亀頭に直接被せる。',
      ]);
      await kitaru.print_and_wait([
        'タロットを切るとき無比に器用な細い五指が、屈服したように力なく垂れ、白い柔らかい掌を獰猛な肉冠にしっかり固定する。',
      ]);
      await kitaru.print_and_wait([
        '手のなかの扱きを速めると、目の前の男の腰が、勝手にさらに上がる。',
      ]);
      await kitaru.print_and_wait(['はっ……', callname, ' も、嬉しそうです……']);
      await kitaru.print_and_wait([
        '自分の下腹もぴくぴくしているので、早く、出してください……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_hand_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        '見ただけで下腹がぴくぴくする ',
        callname,
        ' のそれを見つめ、十指は普段、神の啓示を受けたときのように律動し始める。',
      ]);
      await kitaru.say_and_wait(['あの、手で、しますか？']);
      await kitaru.print_and_wait([
        '言わなくても占えます。手を伸ばして青筋の跳ねる肉棒を慰め、自分の穴を下品な形に押し広げる怪物になるまで。',
      ]);
      await kitaru.say_and_wait([
        'あの、',
        callname,
        '……私、うまくできてますか？',
      ]);
      await kitaru.print_and_wait([
        '返事は聞こえません。でも、',
        callname,
        ' の腰が少し上がったのは見えました。',
      ]);
      await kitaru.say_and_wait(['では、続けます……']);
      await kitaru.print_and_wait([
        '右手の小指と人差し指で軽く肉棒を輪にし、ゆっくり扱く。ときどきもう一方の指腹で亀頭の溝を擦り、二人の体が震える湿った摩擦音を立てる。真っ赤な亀頭から落ちる透明な先走りで、両手はもうぬるぬるだ。',
      ]);
      await kitaru.say_and_wait(['ん……こうすると、参拝前の手水みたいです。']);
      await kitaru.print_and_wait([
        '巫女に心を込めて侍られた肉棒も、さらに多くの先走りを滴らせて応える。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '左手で、さらに膨らんだ竿をそっと支え、先の奉仕ですでにぬるぬるの右手を、輝く亀頭に直接被せる。',
      ]);
      await kitaru.print_and_wait([
        'タロットを切るとき無比に器用な細い五指が、屈服したように力なく垂れ、白い柔らかい掌を獰猛な肉冠にしっかり固定する。',
      ]);
      await kitaru.print_and_wait([
        '手のなかの扱きを速めると、目の前の男の腰が、勝手にさらに上がる。',
      ]);
      await kitaru.print_and_wait(['はっ……', callname, ' も、嬉しそうです……']);
      await kitaru.print_and_wait([
        '自分の下腹もぴくぴくしているので、早く、出してください……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async force_hand_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait([y_call_k, '、手を開け']);
      await kitaru.print_and_wait([
        callname,
        ' はかなり強引に、開いた両手のあいだへ肉棒を差し出した。濃い匂いを嗅いだだけで頭が熱い。',
      ]);
      await kitaru.print_and_wait([
        '嫌そうな顔、したほうがいいですよね？ こんなに強く命令されて。',
      ]);
      await kitaru.print_and_wait([
        'なのに右手は、かなり敬虔に肉冠の敏感な溝を撫で始め、左手は膨らんだ袋ごと、',
        callname,
        ' の肉棒を柔らかい掌に載せている。',
      ]);
      await kitaru.say_and_wait([
        'あの、',
        callname,
        '……私、うまくできてますか？',
      ]);
      await kitaru.print_and_wait([
        '返事は聞こえません。でも、',
        callname,
        ' の腰が少し上がったのは見えました。',
      ]);
      await kitaru.say_and_wait(['では、続けます……']);
      await kitaru.print_and_wait([
        '右手の小指と人差し指で軽く肉棒を輪にし、ゆっくり扱く。ときどきもう一方の指腹で亀頭の溝を擦り、二人の体が震える湿った摩擦音を立てる。真っ赤な亀頭から落ちる透明な先走りで、両手はもうぬるぬるだ。',
      ]);
      await kitaru.say_and_wait(['ん……こうすると、参拝前の手水みたいです。']);
      await kitaru.print_and_wait([
        '巫女に心を込めて侍られた肉棒も、さらに多くの先走りを滴らせて応える。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '左手で、さらに膨らんだ竿をそっと支え、先の奉仕ですでにぬるぬるの右手を、輝く亀頭に直接被せる。',
      ]);
      await kitaru.print_and_wait([
        'タロットを切るとき無比に器用な細い五指が、屈服したように力なく垂れ、白い柔らかい掌を獰猛な肉冠にしっかり固定する。',
      ]);
      await kitaru.print_and_wait([
        '手のなかの扱きを速めると、目の前の男の腰が、勝手にさらに上がる。',
      ]);
      await kitaru.print_and_wait(['はっ……', callname, ' も、嬉しそうです……']);
      await kitaru.print_and_wait([
        '自分の下腹もぴくぴくしているので、早く、出してください……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async hand_and_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.print_and_wait(['肉棒、また大きくなりました……']);
      await kitaru.print_and_wait(['自分を乱雑にする、中毒になる匂いも……']);
      await kitaru.print_and_wait([
        '竿を握る両手を少し後ろへずらし、硬い亀頭を出して、唇でそっと銜え、舌先の熱を、自分の体温の息といっしょに ',
        callname,
        ' の肉の根へ送る。',
      ]);
      await kitaru.say_and_wait(['ちゅ～']);
      await kitaru.print_and_wait([callname, '、こういうの、好きみたいです。']);
    } else {
      await kitaru.say_and_wait(['ちるちる――']);
      await you.print_and_wait([
        '下の ',
        y_call_k,
        ' は頬を少し上げ、肉の根の横を舐め、舌先に力を込めて冠状溝と鈴口を軽く突く。',
      ]);
      await you.print_and_wait([
        'たまに唇が離れざるを得ないとき、待っていた両手が空いた場所を埋め、細い指が精一杯肉の根を撫で、快感を交代で運ぶ。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_hand_and_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait(['舐めてみろ。']);
      await kitaru.print_and_wait([
        callname,
        ' からそんな指示を受け、疑いもなく舌先を出し、馬口から落ちる液体を巻いて腹へ送る。',
      ]);
      await kitaru.print_and_wait([
        'はっ、いいですよね、舌までぬるぬるです……えっ！ もっと大胆に、ですか？',
      ]);
      await kitaru.print_and_wait([
        '手で角度を直し、宝飾のように舌先で亀頭と冠状溝を舐め続ける。',
      ]);
      await kitaru.print_and_wait(['肉棒、また大きくなりました……']);
      await kitaru.print_and_wait(['自分を乱雑にする、中毒になる匂いも……']);
      await kitaru.print_and_wait([
        '竿を握る両手を少し後ろへずらし、硬い亀頭を出して、唇でそっと銜え、舌先の熱を、自分の体温の息といっしょに ',
        callname,
        ' の肉の根へ送る。',
      ]);
      await kitaru.say_and_wait(['ちゅ～']);
      await kitaru.print_and_wait([callname, '、こういうの、好きみたいです。']);
    } else {
      await kitaru.say_and_wait(['ちるちる――']);
      await you.print_and_wait([
        '下の ',
        y_call_k,
        ' は頬を少し上げ、肉の根の横を舐め、舌先に力を込めて冠状溝と鈴口を軽く突く。',
      ]);
      await you.print_and_wait([
        'たまに唇が離れざるを得ないとき、待っていた両手が空いた場所を埋め、細い指が精一杯肉の根を撫で、快感を交代で運ぶ。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async force_hand_and_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait(['手と口、同時にやれ。できるだろ？']);
      await kitaru.print_and_wait([
        '見下ろす ',
        callname,
        ' の視点に合わせて、両脚が勝手にM字に大きく開き、肉棒は舌先を出せば届く位置にある。',
      ]);
      await kitaru.print_and_wait([
        'うっ、態度が悪すぎます。腹のなかで毒づきながら、ドMの自分はすでに肉棒の膨らんだ筋を慎重に撫で、舌先で鈴口を軽く突いている。',
      ]);
      await kitaru.print_and_wait(['ぐっ……もちろん、できます。']);
      await kitaru.print_and_wait(['肉棒、また大きくなりました……']);
      await kitaru.print_and_wait(['自分を乱雑にする、中毒になる匂いも……']);
      await kitaru.print_and_wait([
        '竿を握る両手を少し後ろへずらし、硬い亀頭を出して、唇でそっと銜え、舌先の熱を、自分の体温の息といっしょに ',
        callname,
        ' の肉の根へ送る。',
      ]);
      await kitaru.say_and_wait(['ちゅ～']);
      await kitaru.print_and_wait([callname, '、こういうの、好きみたいです。']);
    } else {
      await kitaru.say_and_wait(['ちるちる――']);
      await you.print_and_wait([
        '下の ',
        y_call_k,
        ' は頬を少し上げ、肉の根の横を舐め、舌先に力を込めて冠状溝と鈴口を軽く突く。',
      ]);
      await you.print_and_wait([
        'たまに唇が離れざるを得ないとき、待っていた両手が空いた場所を埋め、細い指が精一杯肉の根を撫で、快感を交代で運ぶ。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async tit_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '目の前の担当が肉棒を谷間へ根元まで押し込み、普段は制服の下に隠れた大きくておてんばな白い兎を、精一杯押し潰している。',
      ]);
      await kitaru.say_and_wait([
        'ん～んっ、ふっ、ん～',
        callname,
        '、感触……だいじょうぶ、ですか？',
      ]);
      await you.print_and_wait([
        'だから親しく、侍っている少女の頭を撫で、掌を鮮やかなオレンジ髪で往復させた。',
      ]);
      await you.print_and_wait(['しっ……さらに力が入ったな。']);
    } else {
      await kitaru.print_and_wait([
        '肉棒がぴくぴくしています。奉仕は効いているようです。でも、',
        callname,
        ' が気持ち悪くないか、いつも心配です。',
      ]);
      await kitaru.print_and_wait([
        'だからすでに硬く立った二つのさくらんぼを肉棒に当て、硬い乳粒でパイズリに違う感触を足してみる。',
      ]);
      await kitaru.print_and_wait([
        '乳先がさらに熱い肉棒に当たると、電流が頭を麻痺させ、股間がぬるぬるしてきました。',
      ]);
      await kitaru.print_and_wait([
        'はっ……はあっ、こう見ると、自分も楽しんでいますね。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_tit_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        '自家の占い師の胸の、動きに合わせて揺れる丸い乳肉を見つめる。立った乳先の周りは健康なピンクだ。',
      ]);
      await you.print_and_wait(['あの乳に肉棒を包まれたら。']);
      await kitaru.say_and_wait(['いいですよ～！']);
      await you.print_and_wait([
        '口にする前に、担当の聞き慣れた返事が聞こえた。',
        y_call_k,
        ' は、そういう気の利くウマ娘だ。',
      ]);
      await you.print_and_wait([
        '目の前の担当が肉棒を谷間へ根元まで押し込み、普段は制服の下に隠れた大きくておてんばな白い兎を、精一杯押し潰している。',
      ]);
      await kitaru.say_and_wait([
        'ん～んっ、ふっ、ん～',
        callname,
        '、感触……だいじょうぶ、ですか？',
      ]);
      await you.print_and_wait([
        'だから親しく、侍っている少女の頭を撫で、掌を鮮やかなオレンジ髪で往復させた。',
      ]);
      await you.print_and_wait(['しっ……さらに力が入ったな。']);
    } else {
      await kitaru.print_and_wait([
        '肉棒がぴくぴくしています。奉仕は効いているようです。でも、',
        callname,
        ' が気持ち悪くないか、いつも心配です。',
      ]);
      await kitaru.print_and_wait([
        'だからすでに硬く立った二つのさくらんぼを肉棒に当て、硬い乳粒でパイズリに違う感触を足してみる。',
      ]);
      await kitaru.print_and_wait([
        '乳先がさらに熱い肉棒に当たると、電流が頭を麻痺させ、股間がぬるぬるしてきました。',
      ]);
      await kitaru.print_and_wait([
        'はっ……はあっ、こう見ると、自分も楽しんでいますね。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async tit_and_blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        '腰を上下に動かし、輝く先走りを、肉棒を挟む柔らかい溝へ均一に塗り、谷間と肉棒の重なった熱で蒸発して、頭もぼんやりする。',
      ]);
      await kitaru.print_and_wait(['匂い……普段より濃い気がします。']);
      await kitaru.print_and_wait([
        '慎重に位置を直し、先走りを滴らせ続ける亀頭だけを口の前に出し、体を少し前へ傾けて含み、舌がちょうど冠状溝の位置に来る。',
      ]);
      await kitaru.print_and_wait([
        'あっ……美味しいとはとても言えません。でも……もう少し、呑みます。',
      ]);
    } else {
      await kitaru.say_and_wait(['ずるずる……']);
      await kitaru.print_and_wait([
        '落ちる塩辛い液体は一滴も無駄にせず腹へ送る。たまに亀頭が口から離れると、ピンクの舌も追い、すでにぬるぬる輝くおっぱいへ落ちる前に受け止める。',
      ]);
      await kitaru.print_and_wait([
        '頭のなかが、この下品な匂いでいっぱいになるまで。',
      ]);
      await kitaru.print_and_wait([
        'だって……',
        callname,
        ' が自分を認めてくれたご褒美、ですから',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_tit_and_blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        '乳肉から顔を出した ',
        callname,
        ' の亀頭が、少し元気なさそうに見える。',
      ]);
      await kitaru.print_and_wait(
        '本人もわかりやすく、掌を合わせて頼んでいる。',
      );
      await kitaru.print_and_wait([
        '腰を上下に動かし、輝く先走りを、肉棒を挟む柔らかい溝へ均一に塗り、谷間と肉棒の重なった熱で蒸発して、頭もぼんやりする。',
      ]);
      await kitaru.print_and_wait(['匂い……普段より濃い気がします。']);
      await kitaru.print_and_wait([
        '慎重に位置を直し、先走りを滴らせ続ける亀頭だけを口の前に出し、体を少し前へ傾けて含み、舌がちょうど冠状溝の位置に来る。',
      ]);
      await kitaru.print_and_wait([
        'あっ……美味しいとはとても言えません。でも……もう少し、呑みます。',
      ]);
    } else {
      await kitaru.say_and_wait(['ずるずる……']);
      await kitaru.print_and_wait([
        '落ちる塩辛い液体は一滴も無駄にせず腹へ送る。たまに亀頭が口から離れると、ピンクの舌も追い、すでにぬるぬる輝くおっぱいへ落ちる前に受け止める。',
      ]);
      await kitaru.print_and_wait([
        '頭のなかが、この下品な匂いでいっぱいになるまで。',
      ]);
      await kitaru.print_and_wait([
        'だって……',
        callname,
        ' が自分を認めてくれたご褒美、ですから',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async foot_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.say_and_wait([callname, '～こう……だいじょうぶ、ですか？']);
      await you.print_and_wait([
        '細めたオレンジの瞳に少し悪戯が光り、優秀な末脚を出せる両足が ',
        you.get_colored_name(),
        ' の肉棒に乗った。',
      ]);
      await you.print_and_wait([
        '一方で亀頭を撫で、一方で竿を支え、さらさらとした足裏の摩擦で亀頭が温まったあと、赤く脹れた肉棒の太い筋に沿い、感覚の鈍い末端へ探っていく。',
      ]);
      await kitaru.say_and_wait(['……すごく熱い……溶けそうです……']);
      await you.print_and_wait([
        'ウマ娘が大切にする両足が、情事の遊びのために軽々と使われ、亀頭の先の粘る先走りが、より多く、より速く作られていく。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '差しが得意な自分は、レースでも周りを気にしなければならないから、でしょうか。',
      ]);
      await kitaru.print_and_wait([
        'だから、両足で一心に ',
        callname,
        ' の肉棒を世話しながらも、',
        callname,
        ' の様子を見る余裕がある。',
      ]);
      await kitaru.print_and_wait([
        '最初は足裏で肉棒を挟んで扱き、',
        callname,
        ' の息がだんだん荒くなると、姿勢を変えて敏感な場所を刺激し続ける。',
      ]);
      await kitaru.print_and_wait([
        '柔らかい足心で亀頭を踏み、肉棒が震え始めたら意地悪に摩擦を止め、つま先を曲げて亀頭を押さえる。',
      ]);
      await kitaru.say_and_wait(
        [
          'はっ……',
          callname,
          ' の硬い肉棒を足元に踏んでいる、わけのわからない優越感。',
        ],
        true,
      );
      await kitaru.say_and_wait(
        ['……変です。脚でしているだけなのに、心臓が速くて、体も熱い。'],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async missionary(kitaru, you, callname, y_call_k) {
    await kitaru.say_and_wait('んっ……いい、です。');
    await you.print_and_wait([
      '両手を ',
      callname,
      ' の背に回し、赤い頬を見られたくないように、頭を ',
      callname,
      ' の肩に預けた。',
    ]);
    await you.print_and_wait([
      '肉棒が淫らな水音とともに ',
      y_call_k,
      ' の穴へ入ると、背に回した手が無意識に締まり、揃った両脚も背後で急に張り、肉棒がさらに奥へ突き入る。',
    ]);
    await kitaru.say_and_wait('ううっ！ 熱い……❤️');
    await you.print_and_wait([
      '頭を横に向けても無駄だ。耳元の ',
      y_call_k,
      ' の漏れるかわいい息を聞くだけで、熱い肉棒の急な快感に白目を剥いた栗毛のウマ娘の姿が、頭にはっきり浮かぶ。',
    ]);
    await kitaru.say_and_wait('……はあん❤️');
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async doggy_style(kitaru, you, callname) {
    await kitaru.say_and_wait(['……こう、伏せるんですか？']);
    await kitaru.print_and_wait([
      callname,
      ' の指示どおり、子犬のように地面に伏せる。',
    ]);
    await kitaru.print_and_wait([
      'ん……特に練習した覚えはないのに、謎の神啓のように、丸い尻をちょうどいい高さまで上げ、濡れた尻尾を脇へやって、下の飢えた穴を出すことまでわかってしまう。',
    ]);
    await kitaru.print_and_wait([callname, ' の顔が、見えません']);
    await kitaru.print_and_wait(['なのに……ぐっ……興奮してきました。']);
    await kitaru.say_and_wait('うっあ……');
    await kitaru.print_and_wait([
      '肉棒が長駆直入し、下の腫れと充足が神経どおり脳へ伝わり、口の端に幸せでとろけた笑みがかかる。',
    ]);
    await kitaru.print_and_wait(['も、もう子犬そのものです。']);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async sitting(kitaru, you, callname, y_call_k) {
    await you.print_and_wait([
      y_call_k,
      ' の尻肉が太ももに乗る、綿菓子のような感触がわかる。',
    ]);
    await you.print_and_wait([
      '胸の二つの白い兎も、',
      callname,
      ' の抽送に合わせて跳ね、硬い乳先も同じだ。',
    ]);
    await you.print_and_wait([
      'それだけではない。この体位の利点は、星の瞳がどうハートへ変わっていくかも、はっきり見えることだ。',
    ]);
    await kitaru.say_and_wait(['ぐはっ……', callname, ' ❤️']);
    await you.print_and_wait([
      '下腹に肉棒の輪郭がはっきり浮いた ',
      y_call_k,
      ' が、少しぼんやりしたかわいい顔をする。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async hug_sitting(kitaru, you, callname) {
    await kitaru.print_and_wait([
      '合わせてゆっくり沈み、充血した亀頭が尻のあいだへ入り、尻肉を押し開いて……',
    ]);
    await kitaru.say_and_wait(['はっ❤️ああ～']);
    await kitaru.print_and_wait([
      '肉棒は知らせもなく突き上げ、発情で濡れた穴が一気に突き抜けられそうになる。',
    ]);
    await kitaru.say_and_wait('ぐっ……うっ❤️……はあっ……はあっ……❤️');
    await kitaru.print_and_wait([
      '自棄のように頭を後ろの ',
      callname,
      ' の胸に預け、後ろの腰の動きに合わせる。',
    ]);
    await kitaru.print_and_wait([
      'でも、この姿勢なら、自分のひどい顔を ',
      callname,
      ' に見られる心配は……',
    ]);
    await kitaru.print_and_wait([
      '口から漏れる淫らな声、快感で張りつめた耳、トレーナーの腰に絡む素直な尻尾。',
    ]);
    await kitaru.print_and_wait([
      '後ろの人がどれほど鈍くても、自分がいまどんな惨状かは、わかるでしょう。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async standing(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        y_call_k,
        ' の右足首を握って脚を上げると、少女はすぐにバランスを失い、胸の重いそれが揺れる。',
      ]);
      await kitaru.say_and_wait(['うわ……この姿勢で、するんですか？']);
      await you.print_and_wait([
        '神楽の鍛錬で、かろうじて片脚の平衡を保つ ',
        y_call_k,
        ' が、',
        callname,
        ' の立った股下を見る。',
      ]);
      await kitaru.print_and_wait(['ちょっと……待って、えっ❤️！']);
      await you.print_and_wait([
        'ウマ娘の柔軟さで、',
        callname,
        ' は揃った太ももを穴の横まで楽に押し、それから肉棒がぐちゅぐちゅと ',
        y_call_k,
        ' のぬかるんだ穴へ入った。',
      ]);
      await you.print_and_wait([
        '淫らで軽いぱちゃという水音とともに、',
        callname,
        ' は ',
        y_call_k,
        ' に、片脚平衡の舞の技術をトレーニングし始めた。',
      ]);
    } else if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait(['はっ～んはっ～❤️']);
      await you.print_and_wait([
        '焦点の合わない ',
        y_call_k,
        ' が ',
        callname,
        ' の首に腕を回し、栗色の両耳が頭皮で巻き、腕に乗せた脚も震えている。',
      ]);
      await you.print_and_wait([
        'この体位なら肉棒はより奥へ届く。穴が許しを乞うように肉棒にキスし、抽送のたび、肩に頭を預けた ',
        y_call_k,
        ' がリズムに合わせて耳元へ柔らかい声を吐く。',
      ]);
      await kitaru.say_and_wait('は……速いです❤運命の人……こんなに速くて❤');
      await you.print_and_wait([
        '少し慌てた顔の ',
        y_call_k,
        ' が、かえって ',
        callname,
        ' の加虐欲を煽る。尻を支えて許しを乞うウマ娘を少し浮かせ、また腰を突き、最奥の重なった膣肉を破り、巫女の聖なる子宮口に当てて擦り、回す。',
      ]);
      await kitaru.say_and_wait('いく～いきます～❤️');
    } else {
      await you.print_and_wait([
        '身長差のおかげで、',
        callname,
        ' に脚を支えられて突かれる ',
        y_call_k,
        ' は、つま先がやっと地面に触れるだけだ。',
      ]);
      await kitaru.say_and_wait(['だ、抱きしめて❤️。']);
      await you.print_and_wait([
        '頼まれて ',
        y_call_k,
        ' の腰をきつく抱き、力を込めて送る。最奥へ入るたび、',
        y_call_k,
        ' は腹の底の衝撃で、艶やかに喘ぐ。',
      ]);
      await kitaru.say_and_wait('んあっ……はあああっ……');
      await you.print_and_wait([
        '普段は元気いっぱいのかわいい顔が、いまは淫らさでいっぱいだ。',
      ]);
      await you.print_and_wait([
        callname,
        ' の腕に乗せた脚が震え止まらず、粘る愛液が結合部から絶えず落ちる。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async hug_standing(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        'こんな難しい姿勢にされて、',
        callname,
        ' の次は、どうするんでしょう。',
      ]);
      await kitaru.print_and_wait([
        '敏感な耳先？ 跳ねた尻？ 自分でも下品だと思う胸？ それとも……',
      ]);
      await kitaru.print_and_wait([
        '次の一秒で脚の力のない自分が倒れそうな今、後ろの運命の人の行動は、まったく占えません……',
      ]);
      await kitaru.say_and_wait(['ひぃぃ——やぁ❤️！']);
      await kitaru.print_and_wait([
        callname,
        ' の熱い肉棒が、ぷちゅぷちゅと根元まで自分の穴へ入ってきた。',
      ]);
      await kitaru.print_and_wait([
        '許しを乞う声すら出ない。現実を認めた体が本能で腰を曲げ、尻をさらに ',
        callname,
        ' のほうへ寄せる。',
      ]);
    } else if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait(['ひぃぃ——やぁ❤️！']);
      await you.print_and_wait([
        '担当の両腕を握り、休みなく腰を動かす。抽送のたび、揺れる腰と蜜桃のような尻肉が激しくぶつかる。',
      ]);
      await you.print_and_wait([
        '優秀な末脚を出せる肉の脚も立てないほど痙攣し、十本の柔らかい足指も丸まる。肉棒が離れるたび、愛液が激しい結合のあいだに下品な銀糸を引く。',
      ]);
      await kitaru.say_and_wait('ぐっ……んはっ……❤️');
      await you.print_and_wait([
        '残念ながら……',
        y_call_k,
        ' の顔は見えない。でも口から漏れる声を聞くだけで、あと一歩で絶頂だとわかる。',
      ]);
    } else {
      await kitaru.print_and_wait([
        'ふか……深い、体のなか……',
        callname,
        ' の感触……すごいです',
      ]);
      await kitaru.print_and_wait([
        '少し丸まった耳のなかに、湿った液体が腰と尻のゆっくりした衝突でさらさら鳴る音が絶えず入る。',
      ]);
      await kitaru.print_and_wait([
        '蹂躙された下腹から、安心する充実が伝わってくる。',
      ]);
      await kitaru.print_and_wait(['少し速くても、いいです……']);
      await kitaru.print_and_wait([
        'だから運命の人の腰に絡んだ尻尾が、少し力を入れた。',
      ]);
      await kitaru.say_and_wait('んえっ？！！❤️おお……！❤️');
      await kitaru.print_and_wait([
        '快感が堤を切ったように頭へ流れ込み、止まれと叫ぼうとしてもできない。自業自得の自分は、後ろの人の腕のなかで激しく突かれるしかない。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async suspended_congress(kitaru, you, callname, y_call_k) {
    await kitaru.say_and_wait(['んやっ！']);
    await you.print_and_wait([
      'まだ幻想に浸っていた痺れた体を、',
      callname,
      ' が一気に抱き上げる。急なバランスの崩れで、彼女は前へ ',
      callname,
      ' の胴を抱き、肉感のある輝く両脚もついでに ',
      callname,
      ' の腰へロックした。',
    ]);
    await kitaru.say_and_wait(['うっおおお❤️！']);
    await you.print_and_wait([
      '重力を借りて担当の体を振り、硬い肉棒を一息に濡れた肉穴へ根元まで沈め、子宮口に強く当てる。溝と肉棒がぴったり貼りつき、',
      y_call_k,
      ' の下腹に浅い隆起が見える。',
    ]);
    await you.print_and_wait([
      '肉棒が離れそうになるたび、',
      callname,
      ' の腰にロックした両脚が名残惜しそうに少し伸び、次の激しい挿入でまた元の輪に戻る。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async hug_suspended_congress(kitaru, you, callname) {
    await kitaru.print_and_wait([
      callname,
      ' に開かれて支えられた両脚と、すごく不自然な姿勢で彼の首に回した両手。',
    ]);
    await kitaru.print_and_wait([
      'こんな……子供のおむつ替えみたいで、次の瞬間にも重心を失って落ちそうな、恥ずかしい姿勢……',
    ]);
    await kitaru.say_and_wait(['ぐちゅ——❤️']);
    await kitaru.print_and_wait([
      '肉棒が入った瞬間、自分は飛びそうに体を反らす。だが重力で、ふらふらと、',
      callname,
      ' の肉棒を支点にした宙の椅子へ落ち戻る。',
    ]);
    await kitaru.print_and_wait(['はっ❤️……はっ❤️こうなると。']);
    await kitaru.print_and_wait([
      callname,
      ' の表情は見えない。でも無重力と快感の二重の作用のなかで、体はあのすごい肉棒の形を、もうはっきり覚えている。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async ask_cowgirl(kitaru, you, callname, y_call_k) {
    await kitaru.say_and_wait(['私が、自分でするんですか？']);
    await kitaru.say_and_wait(['んっ……']);
    await kitaru.print_and_wait([
      callname,
      ' が上を向いた雄々しいそれを見ただけで、顔が赤くなり、息も速くなる。',
    ]);
    await kitaru.print_and_wait(['この上に、もうすぐ自分が跨ると思うと……']);
    await you.say_and_wait([y_call_k, '？']);
    await kitaru.say_and_wait(['じゅ——ん？']);
    await kitaru.print_and_wait([
      callname,
      ' に急かされて、やっと自分の口の端から涎が落ちているのに気づく。',
    ]);
    await kitaru.print_and_wait([
      '自分がこんなに淫らだなんて、思いませんでした。',
    ]);
    await kitaru.print_and_wait([
      '一秒も待てず、震える腰が「どん」と落ちる。下の ',
      callname,
      ' を微笑んで見下ろし、察して腰で祭りの動きをし、ぬるぬるの穴肉が肉棒を案内して穴を隅々まで探る。',
    ]);
    await kitaru.print_and_wait([
      'ついでに、物覚えのいい自分の穴が、また肉棒の形を徹底的に復習する。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async ask_stimulate_glans_by_virgin(kitaru, you, callname) {
    await kitaru.print_and_wait(['体のなかの肉棒は、まだあんなに硬いのに……']);
    await kitaru.print_and_wait([
      callname,
      ' は意地悪く笑って止まり、私の太ももを叩いた。',
    ]);
    await kitaru.print_and_wait([
      'うっ、トレーナーさんは、そんなに私をいじめたいんですか？',
    ]);
    await kitaru.print_and_wait([
      '怒って抜いて……体のなかの悪い子を、少し冷静にさせる、とか？',
    ]);
    await you.say_and_wait(['ぐちゅぐちゅ～']);
    await kitaru.print_and_wait([
      '腰が……自分の腰、もう揺れてます？ はっ……はあっ……',
    ]);
    await kitaru.print_and_wait(['ほしい……']);
    await kitaru.print_and_wait([
      '力のない筋肉を急かして動かし、',
      callname,
      ' の肉棒に奉仕させる。だって、怒って抜くなんて、絶対絶対の大凶ですから！',
    ]);
    await kitaru.print_and_wait('白い尻が、濡れた尻尾の伴奏で舞い踊る。');
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async stimulate_g_spot(kitaru, you, y_call_k) {
    await you.print_and_wait([
      'さらに腰を突き、股下の肉棒を蜜穴の奥へ碾す。亀頭が少しざらついた柔らかい肉を掠めるたび、',
      y_call_k,
      ' がもごもごと震える。',
    ]);
    await kitaru.say_and_wait(['ぐあっ❤️～ああ']);
    await you.print_and_wait([
      'ウマ娘のなかを横行する肉棒の妖怪は、こうして ',
      kitaru.get_colored_name(),
      ' という巫女の弱点を見つけた。',
    ]);
    await kitaru.say_and_wait(['ひあああ❤️～']);
    await you.print_and_wait([
      '痙攣が止まらない、淫水で輝く豊かな両脚。快感で張りつめた尻尾と両耳。瞳の星も、ピンクに光るハートに押し出される。',
    ]);
    await you.print_and_wait([
      '言うまでもない。目の前の、現人神とも言える相手は、いまや涎を垂らす発情した牝馬に堕ちた。',
    ]);
    await you.print_and_wait([
      '肉棒が ',
      y_call_k,
      ' の柔らかい子宮に当たるたび、香る舌を半ば出した彼女は、自分の動きに合わせて尻を上げ、声を放って喘ぐ。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async ask_fuck(kitaru, you, callname) {
    await kitaru.say_and_wait(['ほしい……']);
    await kitaru.say_and_wait(['えっ！']);
    await kitaru.print_and_wait([
      'すぐに口を押さえた。神社の巫女である自分がこんな言葉を口にするなんて、信じられない。まるで……何か別のものに憑かれたみたいです。',
    ]);
    await kitaru.print_and_wait([
      '気がつくと、豊かな柔らかい両脚は自ら開き、粘る穴の瓣のあいだに濃い銀糸がかかり、入り口が寂しそうに開閉している。',
    ]);
    await kitaru.print_and_wait([
      'ん……すごくエロいです、自分の体。でも、すごい肉棒を持った ',
      callname,
      ' なら、わかってくれますよね……',
    ]);
    await kitaru.say_and_wait(['入れてください……']);
    await kitaru.print_and_wait([
      '右手の人差し指と中指で、輝く陰唇を少し力を入れて開き、中で渇いたピンクの穴肉を ',
      callname,
      ' に見せ、挿入を乞う動作の最後の欠片を埋める。',
    ]);
    await kitaru.say_and_wait(['今日の大吉のために……入れてください。']);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async cowgirl(kitaru, you, callname) {
    await kitaru.print_and_wait([
      '両手を ',
      callname,
      ' の胸に置き、上から彼の顔を見つめる。',
    ]);
    await kitaru.print_and_wait(['自分が優勢な気がします。']);
    await kitaru.print_and_wait([
      'では、いつも自分をいじめるこの人を、どうやって素直に許しを乞わせましょう。',
    ]);
    await kitaru.print_and_wait([
      '左右？ 上下？ 円を描くように腰を捻る？ それとも……',
    ]);
    await kitaru.say_and_wait(['ひゃっ！～❤️']);
    await kitaru.print_and_wait([
      '人が考えている最中に急に動くなんて、反則ですよ！',
    ]);
    await kitaru.print_and_wait([
      '動かないで！ うっ❤️！ なのに……❤️ひゃっ～❤️私が上なのに❤️！',
    ]);
    await kitaru.say_and_wait(['んうっ～すごい❤️！']);
    await kitaru.print_and_wait(['失態の喘ぎが、開いた口から絶えず漏れる。']);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async stimulate_glans_by_virgin(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        'いつも ',
        callname,
        ' に一方的に頑張ってもらうのは、少し申し訳ない気がします。',
      ]);
      await kitaru.print_and_wait([
        'だって二人三脚の法則は、現役のウマ娘とトレーナーには背徳であるこの行為でも、同じはずですから。',
      ]);
      await kitaru.say_and_wait(['はっ……❤️']);
      await kitaru.print_and_wait([
        '充血して硬い肉棒が次に入ってきたとき、深く息を吸い、「ちゅ」と纏わりつく穴で、子宮口に当たった充血の亀頭を吸う。',
      ]);
      await kitaru.say_and_wait(['うっああああ……']);
      await kitaru.print_and_wait([
        '熱い肉棒を締めている穴の中から、一瞬で気を失いそうな快感が来る。',
      ]);
      await kitaru.print_and_wait([
        '肉棒の跳ねがさらに強くなりました。だから、私も手伝えた、ですよね、',
        callname,
        '。',
      ]);
    } else if (era.get(`tcvar:${you.id}:接近高潮`)) {
      await kitaru.print_and_wait(['だめだめだめ……']);
      await kitaru.print_and_wait([
        callname,
        ' のリズムに合わせるつもりが、奥の穴肉がどれほど敏感かを、情けなく忘れていました。',
      ]);
      await kitaru.print_and_wait([
        '締めが緩んだと察したのか、子宮口の前に当たった亀頭が、前方の柔らかい肉を狙って無礼な衝進を始めた。',
      ]);
      await kitaru.print_and_wait([
        'さっきまでときどき肉棒に反撃できていた穴肉が、太く熱い肉棒に完全に碾され、大きな亀頭が自分の子宮口に強く当たる。',
      ]);
      await kitaru.print_and_wait(['いきます……いきます……']);
    } else {
      await kitaru.print_and_wait(['深呼吸……深呼吸……']);
      await kitaru.print_and_wait([
        '精一杯合わせたいのに、一度でも動作を完走できたかわからない。体のなかの肉棒が少し動くだけで、快感でいっぱいの頭が真っ白になり、口からひゃあひゃあと下品な声が出る。',
      ]);
      await kitaru.print_and_wait([
        'でも、ぷちゅぷちゅという下品な音を聞くと、ぬるぬるの穴はちゃんと ',
        callname,
        ' の肉棒を侍っているはずです。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_stimulate_g_spot(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait(
        '穴のなかの性感帯を肉棒が掠めるたび、中毒になるような快感が来るのがわかる。',
      );
      await kitaru.say_and_wait('だから……');
      await kitaru.say_and_wait('お願い……');
      await kitaru.print_and_wait(
        `${kitaru.uma_sex_title}として、こんなにみっともない……`,
      );
      await kitaru.print_and_wait([
        'でも耐えられない——涎を垂らして ',
        callname,
        ' の耳元で、快感を乞う。',
      ]);
      await kitaru.print_and_wait('だって、ほしいんです——');
      await kitaru.print_and_wait(
        '子宮の中を、すごい肉棒で、すごく、乱暴に、力を込めて……',
      );
      await kitaru.print_and_wait('「ちゅ」と一番奥まで突かれて❤️');
      await kitaru.print_and_wait('体が「しゅっ」と丸まって——');
      await kitaru.print_and_wait('世界でいちばん気持ちいい穴になって——');
      await kitaru.print_and_wait(
        `だからお願い……そのあと、白興様に咎められても、もういいです`,
      );
    } else if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait('はっ❤️ああ～');
      await kitaru.print_and_wait([
        kitaru.get_colored_name(),
        ' の体が破廉恥に ',
        callname,
        ' の前で痙攣するように激しくよじれ、濡れた体に付いた温かい輝く水滴を四方へ振る。',
      ]);
      await kitaru.print_and_wait(
        '普段は元気いっぱいの顔に、いまは情欲に完全に支配されたアヘ顔だけが残る。ピンクの唇も驚くほどO字に開き、ちぎれた告白が口から絶えず溢れる。',
      );
      if (era.get('love:56') > 75) {
        await kitaru.say_and_wait([
          '好き、',
          callname,
          '……いちばん好き、',
          you.get_colored_actual_name(),
          '❤️',
        ]);
      } else {
        await kitaru.say_and_wait(['肉棒……好き……壊れ、壊れます❤️']);
      }
      await kitaru.print_and_wait([
        '白興様への羞恥はまだ少しあるかもしれない。だがその羞恥はすぐ燃料になり、体をさらに下品に捻って肉棒に合わせる。',
      ]);
      await kitaru.say_and_wait(
        ['もっと乱暴になりましたね、', callname, '。'],
        true,
      );
      await kitaru.say_and_wait(
        '占い師と巫女という二重の神秘な身分を持つ自分を、発情した牝馬に堕とす、泉のように重なる快感。',
        true,
      );
      await kitaru.say_and_wait(
        'いいえ……簡単な予言なら、まだできるかもしれません。自分がもうすぐ絶頂するという事実、とか。',
        true,
      );
      await kitaru.say_and_wait('いきます……もうすぐ……いきます……');
      await kitaru.say_and_wait('んうっんんんんん❤️❤️❤️……');
    } else {
      await kitaru.say_and_wait('おそ、あっは❤️、遅くして❤️～！');
      await kitaru.print_and_wait(
        'こう乞うても、肉棒は短く正確に弱点を撃ち続ける。濁った瞳が、敏感帯の快感でオレンジをほとんど追い出したピンクに霞む。',
      );
      await kitaru.print_and_wait([
        callname,
        ' の形に調えられた蜜穴は、恩返しのように柔らかい収縮で、自分の体に尽きない快感をもたらす熱い肉竿を悦ばせる。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async common_continue_fucking(kitaru, you, callname) {
    if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait('はっ❤️ああ～');
      await kitaru.print_and_wait([
        kitaru.get_colored_name(),
        ' の体が破廉恥に ',
        callname,
        ' の前で痙攣するように激しくよじれ、濡れた体に付いた温かい輝く水滴を四方へ振る。',
      ]);
      await kitaru.print_and_wait(
        '普段は元気いっぱいの顔に、いまは情欲に完全に支配されたアヘ顔だけが残る。ピンクの唇も驚くほどO字に開き、ちぎれた告白が口から絶えず溢れる。',
      );
      if (era.get('love:56') > 75) {
        await kitaru.say_and_wait([
          '好き、',
          callname,
          '……いちばん好き、',
          you.get_colored_actual_name(),
          '❤️',
        ]);
      } else {
        await kitaru.say_and_wait(['肉棒……好き……壊れ、壊れます❤️']);
      }
      await kitaru.print_and_wait([
        '白興様への羞恥はまだ少しあるかもしれない。だがその羞恥はすぐ燃料になり、体をさらに下品に捻って肉棒に合わせる。',
      ]);
      await kitaru.say_and_wait(
        ['もっと乱暴になりましたね、', callname, '。'],
        true,
      );
      await kitaru.say_and_wait(
        '占い師と巫女という二重の神秘な身分を持つ自分を、発情した牝馬に堕とす、泉のように重なる快感。',
        true,
      );
      await kitaru.say_and_wait(
        'いいえ……簡単な予言なら、まだできるかもしれません。自分がもうすぐ絶頂するという事実、とか。',
        true,
      );
      await kitaru.say_and_wait('いきます……もうすぐ……いきます……');
      await kitaru.say_and_wait('んうっんんんんん❤️❤️❤️……');
    } else {
      await kitaru.print_and_wait([
        '少しドMの自分は、とっくにトレーナーにこう支配されることを望んでいたのかもしれない。',
      ]);
      await kitaru.say_and_wait(['あっは……❤️はふはっ……']);
      await kitaru.print_and_wait([
        '締めた穴肉がまた容赦なく押し開かれ、続く快感で、普段は複雑な祈りを覚えられる頭が真っ白になる。',
      ]);
      await kitaru.say_and_wait(['はっ……はっ……はっ❤️']);
      await kitaru.print_and_wait([
        '巫女の清らかなかわいい顔が、肉棒様の攻めの下で、また媚びる笑みを見せる。',
      ]);
      await kitaru.say_and_wait(['肉棒……様？'], true);
      await kitaru.say_and_wait(
        ['こんな呼び方……白興様、きっとお怒りになりますよね？'],
        true,
      );
      await kitaru.print_and_wait([
        'それでも発情した栗毛のウマ娘巫女は、下品な匂いの濡れて熱い体を、',
        callname,
        ' へさらに寄せる。',
      ]);
      await kitaru.say_and_wait(['オナホとして使われても、いいです……']);
      await kitaru.print_and_wait([
        '破廉恥にそう口にする。いつ降るかわからない神罰より、いま頭をぼんやりさせる快感のほうが、やっぱり大事だから。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_insult(kitaru, you, callname, is_first) {
    if (is_first) {
      await you.say_and_wait('罵られたい、のか？');
      await you.print_and_wait([
        '清らかな',
        kitaru.uma_sex_title,
        '巫女から、そんな妙な頼みを受けた。',
      ]);
      await kitaru.say_and_wait([
        '私、あの……',
        callname,
        ' に乱暴に扱われる感じ、すごくいいんです……',
      ]);
      await you.print_and_wait([
        '担当はやはりドMらしい。だから淫らな巫女、便器、オナホ占い師といった痛くもない侮辱を、目の前の栗毛の',
        kitaru.uma_sex_title,
        'へ浴びせる。',
      ]);
      await you.print_and_wait([
        kitaru.get_colored_actual_name(),
        ' はかなり効いている様子だ。あとで、もっとひどい言い回しを試すか。',
      ]);
    } else {
      await kitaru.print_and_wait([
        '耳元で、ますますひどい罵りが響く。だがもっと後怖いのは、ますます敏感になり、こういう行為から快楽を感じる自分だ。',
      ]);
      await kitaru.say_and_wait(['この感じ、止めたく、止めたくない……'], true);
      await kitaru.say_and_wait(
        [
          'はっ、自分はたしかに、救いようのないドMの',
          kitaru.uma_sex_title,
          'です……',
        ],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_hit_anal(kitaru, you, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait(['そんなにいじめられたいなら……']);
      await you.print_and_wait([
        '掌で ',
        y_call_k,
        ' の丸い尻を軽く二度撫でると、',
        kitaru.sex,
        'の体が腕のなかで小さく震える。恐れか、興奮か、わからない。',
      ]);
      await you.print_and_wait(['ぱん！']);
      await you.print_and_wait([
        'だんだん熱くなった尻峰が、痺れからまだ戻らない ',
        you.get_colored_name(),
        ' の掌に軽く擦れる。好きらしい。',
      ]);
    } else {
      await kitaru.say_and_wait(['痛い……でも、好き……'], true);
      await kitaru.say_and_wait(['ぱんぱんと、自分の尻を叩く。'], true);
      await kitaru.say_and_wait(['たまに、軽く何度か揉む。'], true);
      await kitaru.say_and_wait(
        [
          '痛みと快楽の区別がつかなくなってきた自分にとって、どちらもいちばんのご褒美です……',
        ],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async stimulate_sleep_glans_by_virgin(kitaru, you, callname) {
    await kitaru.print_and_wait(['はあっ……はっ……']);
    await kitaru.print_and_wait([
      'なんとか慣れます。だって、',
      callname,
      ' の肉棒は、まだ眠っているみたいですから。',
    ]);
    await kitaru.print_and_wait(['こういうときは、私が手伝わないと。']);
    await kitaru.print_and_wait([
      '深呼吸して、下腹を少し張り、蠕動する穴で ',
      callname,
      ' の肉棒を起こす。',
    ]);
    await kitaru.say_and_wait(['んっ！！！ひゃっ！！！']);
    await kitaru.print_and_wait([
      '起こされた怪物の肉棒が、まだ ',
      callname,
      ' のリズムについていけていた自分に、意識を失いそうな快感をもたらした。',
    ]);
  },
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async ero_start(kitaru, you, callname) {
    const relation = era.get('relation:56:0');
    if (era.get('status:56:马跳Z') || era.get('status:56:超马跳Z')) {
      await kitaru.say_and_wait(['体が……熱い……']);
      await era.printAndWait([
        '自制しようと必死な ',
        kitaru.get_colored_name(),
        ' が膝を抱えて隅に縮こまり、ピンクの鎖骨が発情の紅を帯びている。',
      ]);
      await kitaru.say_and_wait(['はあっ❤️～はっ❤️']);
      await era.printAndWait([
        '開いた唇が香る舌を空へ晒し、動く鼻先が絶えず ',
        you.get_colored_name(),
        ' の匂いを吸う。',
      ]);
      await kitaru.say_and_wait(['ほしい❤️ほしい❤️ほしい❤️ほしい❤️']);
      await era.printAndWait([
        'ついに薬に抗えなくなった ',
        kitaru.get_colored_name(),
        ' がふらふらと立ち、服が一枚また一枚、床へ落ちる。',
      ]);
      if (kitaru.sex_code - 1) {
        await era.printAndWait([
          '乳白色の団子が ',
          you.get_colored_name(),
          ' に圧し、服越しでも ',
          kitaru.get_colored_name(),
          ' の硬い乳先がわかる。熱い吐息が耳元から来る。',
        ]);
      }
      await kitaru.say_and_wait([
        'もう……限界です、',
        callname,
        '、食べてください。',
      ]);
    } else if (era.get('status:56:发情')) {
      await kitaru.say_and_wait(['しましょう？']);
      await kitaru.say_and_wait(['なのに……はっ❤️熱い……']);
      await era.printAndWait([
        '発情期で積極的になった ',
        kitaru.get_colored_name(),
        ' が、勝手に汗で濡れた服を脱ぎ始める。',
      ]);
      await era.printAndWait([
        '紅い唇が休みなく半開きになり、白い霧のような吐息を出し、催情のホルモンが部屋を満たす。',
      ]);
      await kitaru.say_and_wait(['熱い……']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は自ら服を脱ぎ、甘い体液が絶えず流れ、ぱたぱたと木の床に落ちる。',
      ]);
      await era.printAndWait([
        'それから視線の定まらないまま ',
        you.get_colored_name(),
        ' の腕へ崩れ、栗色の尻尾も ',
        you.get_colored_name(),
        ' の太ももに絡む。',
      ]);
      await kitaru.say_and_wait(['助けてください……', callname, '。']);
    } else if (era.get('flag:当前位置') === location_enum.restroom) {
      if (relation < 400) {
        await kitaru.say_and_wait(['ん……あの、', callname, '？']);
        await era.printAndWait([
          you.get_colored_name(),
          ' に強く抱かれた ',
          kitaru.get_colored_name(),
          ' が小さく震えている。耳はわかりやすく、ひらひらと揺れている。',
        ]);
        await kitaru.say_and_wait([
          'ここでするんですか……風紀委員の',
          kitaru.couple_title,
          'に見つかったら？',
        ]);
        await kitaru.say_and_wait(['ぐっん！ ちゅ❤️……ちゅあ❤️']);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' への答えは、',
          you.get_colored_name(),
          ' の唇だった。',
        ]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '手も落ち着かず担当のスカートへ入り、両脚のあいだの柔らかい肉を揉み、',
            kitaru.sex,
            'のパンツまで濡らす。',
          ]);
        }
        await era.printAndWait([
          '情欲を煽られた ',
          kitaru.get_colored_name(),
          ' が、目尻に涙を溜めて ',
          you.get_colored_name(),
          ' の腕に凭れる。',
        ]);
        await kitaru.say_and_wait(['早く始めて……', callname, ' ❤️']);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' の視線と合った ',
          kitaru.get_colored_name(),
          ' は、急に何かわかったように、栗色の尻尾の揺れを止めた。',
        ]);
        await kitaru.say_and_wait(['……したいんですか？']);
        await kitaru.say_and_wait(['その目、占わなくてもわかりますよ！']);
        await kitaru.say_and_wait(['ん、まだ学園のなかなのに、見つかったら……']);
        await era.printAndWait(['どん！']);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '口では文句を言いながら、制服のスカートが床へ落ち、次いで上着が脱がされた鈍い音……最後にスポーツブラが外れ、包まれていた胸が一気に跳ね出る。',
          ]);
          await era.printAndWait([
            'ピンクを増した豊かな胸の上で、乳先が期待に充血して立っている。',
          ]);
        }
        await kitaru.say_and_wait(['はあっ❤️～はっ❤️……']);
        await era.printAndWait([
          '両腕が軽く ',
          you.get_colored_name(),
          ' の首に回り、',
          kitaru.get_colored_name(),
          ' は潤んだ星の瞳で ',
          you.get_colored_name(),
          ' を見る。',
        ]);
        await kitaru.say_and_wait([callname, '……気持ちよくしてください']);
      }
    } else if (era.get('flag:当前位置') === location_enum.home) {
      if (relation < 400) {
        await era.printAndWait([
          you.get_colored_name(),
          ' の家で開運の置き方を考えていた ',
          kitaru.get_colored_name(),
          ' に、後ろから近づく。',
        ]);
        await kitaru.say_and_wait(['やぁっ……']);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '両手を ',
            kitaru.get_colored_name(),
            ' の服の中へ入れ、豊かな乳肉を掠めると、オレンジ髪の少女が小さな声で抗議する。',
          ]);
          await kitaru.say_and_wait(['せめて、先にこれを置かせてください……']);
          await era.printAndWait([
            '落ち着かない手はさらに下へ行き、腹越しに、もっと刺激を欲しがる ',
            kitaru.get_colored_name(),
            ' の子宮を軽く押す。',
          ]);
        }
        await era.printAndWait([
          'すると ',
          kitaru.get_colored_name(),
          ' は無意識に下がり、尻の割れ目をズボン越しに自ら ',
          you.get_colored_name(),
          ' の肉棒へ押し当てる。',
        ]);
        await kitaru.say_and_wait(['……硬いです。']);
        await kitaru.say_and_wait(['いま、しますか？']);
        await kitaru.say_and_wait([callname, ' も、かなり我慢してますよね……']);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' の家で開運の置き方を考えていた ',
          kitaru.get_colored_name(),
          ' を、後ろから抱く。',
        ]);
        await kitaru.say_and_wait(['んふふ！！！']);
        await kitaru.say_and_wait([
          callname,
          ' は私に、何をするつもりですか……ん～❤️ちゅ～❤️',
        ]);
        await era.printAndWait([
          '察したように横を向き、顎を上げて ',
          you.get_colored_name(),
          ' の唇を塞いだ。',
        ]);
        await era.printAndWait([
          '二人の唇と歯と舌がすぐ激しく絡み、空気が見ていられない淫らな水音を立てる。',
        ]);
        await kitaru.say_and_wait(['ん～❤️……ちゅあ❤️～ちゅ……ん❤️']);
        await era.printAndWait([
          '突然、',
          kitaru.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' の手を掴み、',
          you.get_colored_name(),
          ' を',
          kitaru.sex,
          'の両脚のあいだへ導き、ついでにパンツを下ろした。',
        ]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            '太ももまで光る水跡があり、目に見えてびしょ濡れだ。',
          ]);
        }
        await kitaru.say_and_wait(['ん……どうせ外泊届は出したので、だから～❤️']);
        await kitaru.say_and_wait(['もっと……気持ちよくしてください～❤️']);
      }
    } else if (
      era.get('love:56') >= 50 &&
      era.get('flag:当前位置') !== location_enum.home
    ) {
      await kitaru.say_and_wait([callname, '、するんですか？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' に抱かれた ',
        kitaru.get_colored_name(),
        ' が頬を赤らめて言う。耳がひらひらと顔に当たる。',
      ]);
      await you.say_and_wait(['嫌か？']);
      await kitaru.say_and_wait([
        'えっ！ そんなことありません！！！ 絶対、絶対に ',
        you.get_colored_name(),
        ' を嫌ったりしません！',
      ]);
      await era.printAndWait([
        kitaru.sex,
        'の顔を軽く撫で、髪を叩くと、',
        you.get_colored_name(),
        ' に捨てられるのを恐れていた ',
        kitaru.get_colored_name(),
        ' が落ち着いた。',
      ]);
      await you.say_and_wait(['……食べていいぞ']);
      await era.printAndWait([
        you.get_colored_name(),
        ' の腕へ崩れた ',
        kitaru.get_colored_name(),
        ' が、潤んだ目で ',
        you.get_colored_name(),
        ' を見る。',
      ]);
      await kitaru.say_and_wait(['うん……']);
      await kitaru.say_and_wait(['……', callname, ' の好きにしてください。']);
    }
  },
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   */
  async orgasm_standing(kitaru, you) {
    if (era.get('nowex:0:阴茎高潮') > 0 && era.get('nowex:56:膣内精液') > 0) {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は、体のなかを暴れ回る肉棒もぴくぴくと発射の準備をしたのがわかる。',
      ]);
      await era.printAndWait([
        '白目を剥いた ',
        kitaru.get_colored_name(),
        ' の腰と尻を締め、発情で下がった子宮に肉棒を当てて精液を注ぐ。腔内の穴肉も吸うように亀頭を刺激する。',
      ]);
      await kitaru.say_and_wait('～んうっんんんんん！！！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の普段は元気な顔が白目を剥き、唇が大きく開き、柔らかい香る舌を出す。',
      ]);
      await era.printAndWait(['濃い白精が結合部からぽたぽたと床へ落ちる。']);
    } else {
      await kitaru.print_and_wait(['ぐっほほほほ～！！！']);
      await era.printAndWait([
        '絶頂した ',
        kitaru.get_colored_name(),
        ' は、痙攣する足先で平衡すら保てない。',
      ]);
      await era.printAndWait([
        '肉棒を送り続ける ',
        you.get_colored_name(),
        ' をさらに抱き、喉から許しを乞うような嗚咽を漏らす。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   */
  async orgasm_hug_standing(kitaru, you) {
    if (era.get('nowex:0:阴茎高潮') > 0 && era.get('nowex:56:膣内精液') > 0) {
      await era.printAndWait([
        '発射寸前の肉棒を完全に抜き、それから肉の尻を少し上げて角度を直す。',
      ]);
      await era.printAndWait([
        '肉棒が長駆直入で襞だらけの穴壁を碾し、',
        kitaru.get_colored_name(),
        ' の子宮口に当てて精液を吐く。',
      ]);
      await kitaru.say_and_wait('～～んぐっお、熱い……すご……い……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の柔らかな体が、ほとんど ',
        you.get_colored_name(),
        ' に弓なりに引っ張られ、頭が高く上がり、それから ',
        you.get_colored_name(),
        ' の腕に凭れる。押し出された精液が太ももを伝い、垂れた栗色の尻尾にもかなり付く。',
      ]);
    } else {
      await kitaru.print_and_wait(['や……やぁっ❤️']);
      await era.printAndWait([
        '制御できず体を反らし、白鳥のような白い首を上げ、後ろへあなたの腕に凭れる。',
      ]);
      await era.printAndWait([
        '押し出された愛液が太ももを伝い、栗色の尻尾にも濡れた濃い跡が増える。',
      ]);
    }
  },
  /**
   * 快楽刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {number} level 刻印の等級
   */
  async mark_pleasure(kitaru, you, level) {
    const love = era.get('love:56');
    switch (level) {
      case 1:
        if (love >= 75) {
          await kitaru.say_and_wait('やぁっ！！！');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' は視線を逸らし、',
            you.get_colored_name(),
            ' が続けていいか尋ねると、小さく頷いた。',
          ]);
          await era.printAndWait(
            '合わせて腰を捻り、一人では味わえない快感を味わう。',
          );
        } else {
          await kitaru.say_and_wait('んんっ！ はあっはあっ……');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' は首を傾げて、しばらく考えた。',
          ]);
          await kitaru.say_and_wait('どうして……気持ちいい。');
        }
        break;
      case 2:
        if (love >= 75) {
          await kitaru.say_and_wait([
            'はあああっ！！！',
            you.get_colored_actual_name(),
          ]);
          await era.printAndWait([
            '絶頂のなかで ',
            you.get_colored_name(),
            ' の名前を大声で呼ぶ。普段、ときどき ',
            kitaru.get_colored_name(),
            ' から感じられた、巫女としての清らかさは、',
          ]);
          await era.printAndWait('いまは跡形もない。');
        } else {
          await kitaru.say_and_wait('はっ……早く！ 早く！');
          await era.printAndWait([
            '激しい絶頂で震え止まらないのに、快感に支配され始めた ',
            kitaru.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' に、続けて襲ってほしいと頼む。',
          ]);
        }
        break;
      case 3:
        if (love >= 75 && era.get('tcvar:0:阴茎接触部位')?.owner === 56) {
          await kitaru.say_and_wait('肉棒……もっと激しく……肉棒様！！！');
          await era.printAndWait([
            '性愛の快感が、少しずつ ',
            kitaru.get_colored_name(),
            ' の意識を上書きしていく。',
          ]);
          await era.printAndWait([
            kitaru.uma_sex_title,
            'の口から溢れる淫語が、白興様の完全な敗北を物語っている。',
          ]);
        } else {
          await kitaru.say_and_wait('んあああっ！！！');
          await era.printAndWait([
            '快感に支配された ',
            kitaru.get_colored_name(),
            ' が、どこにいるとも知れない神を失神した目で見る。',
          ]);
          await era.printAndWait([
            '口のなかのもごもごした懇願からすると、体が完全に屈服した',
            kitaru.sex,
            'の祈りの対象は、もうこの快感をもたらした ',
            you.get_colored_name(),
            ' になっている。',
          ]);
        }
    }
  },
  /**
   * 同心刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {number} level 刻印の等級
   */
  async mark_meek(kitaru, you, level) {
    switch (level) {
      case 1:
        await kitaru.say_and_wait('ひあっ～！');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' に凭れ、されるがままになった。',
        ]);
        await era.printAndWait(
          '春の色を帯びた顔で、柔らかい体がびくびく跳ねる。',
        );
        break;
      case 2:
        era.println();
        await kitaru.say_and_wait('やぁ！！！');
        await kitaru.say_and_wait(
          'い、いえ、だいじょうぶです～運命の人、続けてください！',
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の、水気を帯びたオレンジの瞳が ',
          you.get_colored_name(),
          ' を見つめる。',
        ]);
        await era.printAndWait([
          'たまに',
          kitaru.sex,
          'の敏感帯に触れると、',
          kitaru.sex,
          'は合わせてかわいい声を上げる。',
        ]);
        break;
      case 3:
        await era.printAndWait([
          '目を閉じた ',
          kitaru.get_colored_name(),
          ' が腕を ',
          you.get_colored_name(),
          ' の首に回し、少しつま先立ちして、唇を ',
          you.get_colored_name(),
          ' の耳に当てる。',
        ]);
        await kitaru.say_and_wait('ご主人様……');
        await kitaru.say_and_wait('えへへ、運命の人、この呼び方、好きですか？');
        await kitaru.say_and_wait(
          'では、ご主人様がこれから小福を壊しても、だいじょうぶですよ！',
        );
    }
  },
  /**
   * 苦痛刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {number} level 刻印の等級
   */
  async mark_pain(kitaru, you, level) {
    const love = era.get('love:56');
    switch (level) {
      case 1:
        if (love >= 75) {
          await kitaru.say_and_wait('はあっ！ 痛い！！！');
          await kitaru.say_and_wait('だいじょうぶです……');
          await kitaru.say_and_wait('ただ、もう少し優しくしてほしい、だけ……');
        } else {
          await kitaru.say_and_wait('うっ……');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の表情が痛みで歪む。それでも',
            kitaru.sex,
            'は歯を食いしばり、わずかな悲鳴だけを漏らす。',
          ]);
        }
        break;
      case 2:
        if (love >= 75) {
          era.println();
          await kitaru.say_and_wait('ひあっ～！？');
          await kitaru.say_and_wait(
            '私、少しドMですけど……これはさすがに、ひどすぎませんか！？',
          );
        } else {
          await kitaru.say_and_wait('ひあっ～！？');
          await kitaru.say_and_wait('白興様……助けて……');
        }
        break;
      case 3:
        if (love >= 75) {
          await kitaru.say_and_wait('やめて！ やめてください！！！');
          await kitaru.say_and_wait('こんな……運命の人がこんなになるなんて……');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の体が痛みで震え止まらず、涙がぽたぽたと落ちる。',
          ]);
        } else {
          await kitaru.say_and_wait('……');
          await era.printAndWait([
            '人形のように ',
            you.get_colored_name(),
            ' のされるがままになり、',
            kitaru.get_colored_name(),
            ' という',
            kitaru.uma_sex_title,
            'は、また自分の記憶を閉ざそうとしている。',
          ]);
        }
    }
  },
  /**
   * 恥辱刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {number} level 刻印の等級
   */
  async mark_shame(kitaru, you, level) {
    switch (level) {
      case 1:
        await kitaru.say_and_wait('うっ……ど、どうぞ、続けて……');
        await era.printAndWait([
          '情事の最中の ',
          kitaru.get_colored_name(),
          ' は手で目を覆おうとする。こういう行為は、まだ少し恥ずかしいらしい。',
        ]);
        break;
      case 2:
        await kitaru.say_and_wait('ん……まだ、ちょっと恥ずかしい……');
        await kitaru.say_and_wait('白興様に見られたら。');
        break;
      case 3:
        await kitaru.say_and_wait('あああっ、もう、なんでもいいです……');
        await era.printAndWait([
          '自棄のようにそう言い、',
          kitaru.get_colored_name(),
          ' はむしろ ',
          you.get_colored_name(),
          ' のますます大胆な動きに合わせ始めた。',
        ]);
        await kitaru.say_and_wait('私……本当に破廉恥なことを……');
    }
  },
  /**
   * 反抗刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {number} level 刻印の等級
   */
  async mark_hate(kitaru, you, callname, level) {
    const love = era.get('love:56');
    switch (level) {
      case 1:
        if (love >= 75) {
          await kitaru.say_and_wait([
            'こ、これが ',
            callname,
            ' の好きなこと、ですか？',
          ]);
          await kitaru.say_and_wait('ちょっと、過ぎてますよ……');
        } else {
          await kitaru.say_and_wait('あっ……断ってもいいですか？');
          await kitaru.say_and_wait([callname, '、私もときどきは怒りますよ！']);
        }
        break;
      case 2:
        if (love >= 75) {
          await kitaru.say_and_wait([
            'あの……',
            callname,
            '、私のこと、嫌いになりましたか？',
          ]);
          await kitaru.say_and_wait([
            '私、ちゃんと聞きます……教えてください、',
            callname,
            ' をどう悦ばせるか……',
          ]);
        } else {
          await kitaru.say_and_wait('そういうこと、ですか？');
          await era.printAndWait([
            '琥珀のように温かかった瞳が冷たくなり、鋭い十字星が ',
            you.get_colored_name(),
            ' を見据える。',
          ]);
        }
        break;
      case 3:
        if (love >= 75) {
          await kitaru.say_and_wait('運命の人……');
          await kitaru.say_and_wait([
            '……',
            kitaru.elder_sibling_sex_title,
            '、私……',
          ]);
          await kitaru.say_and_wait('どうすればいい……');
          await era.printAndWait(
            '星を嵌めた琥珀色の瞳が、いまは光を失っている。',
          );
        } else {
          await kitaru.say_and_wait(
            'どうしても、こうしなければならないんですか？',
          );
          await era.printAndWait([
            '一瞬、神に見つめられたような圧が ',
            you.get_colored_name(),
            ' に降りた。',
          ]);
          await kitaru.say_and_wait(
            '運命の人……いまは、この呼び方も少し気持ち悪いです。',
          );
          await kitaru.say_and_wait(
            'でも占いの結果ではあります……だから、これから、こんなことはしないでくれませんか？',
          );
        }
    }
  },
  /**
   * 淫紋刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {number} level 刻印の等級
   */
  async mark_ero(kitaru, you, callname, level) {
    switch (level) {
      case 1:
        await era.printAndWait('下腹の複雑な紋様が、卵子の軌跡を示している……');
        await era.printAndWait(
          'ピンクに光る線が、主の身分を示すように、神道の鳥居に似た透かしを描いている。',
        );
        await kitaru.say_and_wait([callname, ' がこんなこともできるなんて……']);
        break;
      case 2:
        await kitaru.say_and_wait('ん……紋様、もっと複雑になりましたね……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は黙って、子宮の位置にある鳥居の周りの飾りを見ている……',
        ]);
        await kitaru.say_and_wait('白興様は、どう思われるでしょう。');
        break;
      case 3:
        await era.printAndWait(
          'さらに複雑な形になり、妊娠率と受胎を示す機能まで足された……',
        );
        await era.printAndWait([
          '神に選ばれた巫女が臍の下を撫で、自ら ',
          you.get_colored_name(),
          ' に両脚を開く。',
        ]);
        await era.printAndWait(
          '糸を引ける穴が、呼吸とともに点滅する淫紋のリズムで開閉している。',
        );
        await kitaru.say_and_wait('はっ……はっ……');
        await era.printAndWait([
          'ピンクに光る瞳が、呆けて ',
          you.get_colored_name(),
          ' を見ている。',
        ]);
    }
  },
};
