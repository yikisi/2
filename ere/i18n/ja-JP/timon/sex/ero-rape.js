/**
 * @file 調教の地の文 - 強姦
 * @author ALEX
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { stain_enum } = require('#/data/ero/stain-const');

module.exports = {
  /** コミュニケーション系 */
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼び方
   */
  async kiss(attacker, defender, is_first, d_call_a) {
    if (is_first) {
      await defender.print_and_wait([
        '美しい瞳が恐怖で見開かれ、',
        d_call_a,
        ' の両腕に封じられた体が震えている。',
      ]);
      await defender.say_and_wait('うぅ……');
      await defender.print_and_wait(
        '濃い吐息を纏った舌が口腔へ入り、阻もうとした白い歯を押し分け、歯茎の根元を侵すように舐め上げる。',
      );
      await defender.print_and_wait([
        '相手に押さえ込まれた今、唇のあいだから洩れる淫らな音と涎を、自分は止めることすらできない。',
      ]);
    } else {
      await defender.say_and_wait(['ぐぅ……']);
      await defender.print_and_wait([
        '情けない声を漏らした口は、すぐまた ',
        d_call_a,
        ' の唇に塞がれる。',
      ]);
      await defender.print_and_wait([
        '自分はただ目を閉じ、体に乗った腕を握りしめることしかできない。',
      ]);
      await defender.print_and_wait([
        '口のなかを奪われるまま、唇と舌が擦れ合う低い音をさらに重ねていく。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async french_kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait('はぁ……');
      await defender.print_and_wait([
        '容赦なく食いしばった歯をこじ開けられ、乱れた頭はすぐには抗えず、相手の好き放題を許してしまう。',
      ]);
      await defender.print_and_wait([
        '口腔の隅々まで舐められ、力の抜けた舌をいつまで吸われていたのか……',
      ]);
      await defender.print_and_wait([
        '我に返って逆らおうとしたとき、口のなかに残る痺れが、無意識に唾を飲む自分を甘い声で裏切りそうになる。',
      ]);
    } else {
      await defender.say_and_wait('くそ……やめ……なさい……ぷちゅ……');
      await attacker.print_and_wait([
        '舌が ',
        a_call_d,
        ' の口腔を求め続け、無理に抗うほど、絡み合う舌から粘る水音が増えるばかりだ。',
      ]);
      await attacker.print_and_wait([
        '濃い匂いの唾液を強引に流し込まれ、呼吸のために飲み込む喉は、そのすべてを受け取ってしまう。',
      ]);
      await attacker.print_and_wait([
        '長い深い口づけが続き、',
        a_call_d,
        ' の涙と、口角から溢れる透き通った涎が床へ落ちていく。',
      ]);
    }
  },
  /** 愛撫系 */
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '断りもなく ',
        a_call_d,
        ' の耳へ手を伸ばす。細かな産毛と熱を帯びた耳殻が、目の前で赤らむ顔と呼応する。',
      ]);
      await attacker.print_and_wait([
        '軽く摘まむと、頭は瞬間に反対側へ弾かれ、口からは拒絶の嗚咽が漏れる。',
      ]);
      await attacker.print_and_wait([
        'だが、どれほど暴れ、眉を寄せても、耳先から続く強い刺激は数秒のうちに ',
        a_call_d,
        ' の力を奪っていく。',
      ]);
    } else {
      await defender.print_and_wait([
        '震えながら頭を下げ、耳を性器のように弄ばれている。',
      ]);
      await defender.say_and_wait(['もう……終わって……'], true);
      await defender.say_and_wait(['うっ！']);
      await defender.print_and_wait([
        '敏感な根元と内側を指先で突かれ、耳は驚いて思わずピンと立つ。',
      ]);
      await defender.print_and_wait([
        '立ち上がったウマ耳を相手の頬へ「ぱん」と叩きつけたが、返ってきたのは笑い声だけだった。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pull_ear(attacker, defender) {
    await attacker.print_and_wait(
      '先の愛撫で十分に熱を持ったウマ耳は、これ以上触られたくないと髪に張り付いて逃げようとしている。',
    );
    await attacker.print_and_wait([
      'それでも造作なく掴まれ、容赦なく引っ張られ、目の前の',
      defender.uma_sex_title,
      'は口ごもりながら許しを乞う。',
    ]);
    await attacker.print_and_wait([
      '乱暴な扱いに本能で痙攣する耳先が、充血した愛らしい桃色に染まっている。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_breast(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'プリンのように弾む胸の肉を掌で受け、軽く押し、目の前の',
        defender.race > 0 ? '牝馬' : '雌',
        'が侵犯されるたびに速まる鼓動を感じ取る。',
      ]);
      await defender.say_and_wait(['絶対！ 絶対に許さない……']);
      await defender.say_and_wait(['んっ！！！']);
      await attacker.print_and_wait([
        '乳房を無造作に形を変えるまで揉み、吐こうとした脅しは胸の熱い感触に押し潰される。',
      ]);
      await attacker.print_and_wait(['次は、どんな形にしてやろうか。']);
    } else {
      await attacker.print_and_wait([
        '温かな胸の肉が掌の下で潰れ、指の隙間に挟まった乳首まで、はっきりと勃起している。',
      ]);
      await attacker.print_and_wait(['触感を味わうように、何度も撫で回す。']);
      await defender.say_and_wait(['くそったれ！！！']);
      await attacker.print_and_wait([
        '胸を好き放題に弄ばれる ',
        a_call_d,
        ' は、自分の上で為すままの相手を呪う……それしかできない。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'すでに自ら硬くなった、苺のような乳首を丁寧に擦り、ラジオのつまみを回すように摘まむ。',
      ]);
      await attacker.print_and_wait([
        '充血して赤くなった乳首が、存在を主張するように熱を放っている。',
      ]);
      await attacker.print_and_wait([
        '目の前の ',
        a_call_d,
        ' は刺激に歯を食いしばり、閉じきれない唇に耐えの色が滲む。',
      ]);
      await attacker.print_and_wait(['……もう少し、力を入れてやろう。']);
    } else {
      await attacker.print_and_wait([
        '立ち上がった乳首へ遠慮なく手を伸ばし、指先で素早く先を弄り、硬い突起を何度も押し込む。',
      ]);
      await attacker.print_and_wait([
        '米粒のように硬くなった乳首を引っ張り、桃色の体が微かに震える……それでも唇は意地を張って閉じたまま。',
      ]);
      await attacker.print_and_wait(['簡単だ。爪で軽く摘まむだけで——']);
      await defender.say_and_wait(['ん——❤️！']);
      await attacker.print_and_wait([
        a_call_d,
        ' の短く高い淫声が返り、口角から出た舌先に、透き通った涎が光る。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '二本の指で割り、皮を剥かれた陰核が、恥ずかしげに微かに震えている。',
      ]);
      await defender.say_and_wait(['ちょっと……何を……']);
      await attacker.print_and_wait([
        '爪を陰核の肉へ軽く引っ掛けて引き上げると、',
        a_call_d,
        ' は本能で腰を反らし、体がだらしなく震え出す。',
      ]);
    } else {
      await attacker.print_and_wait([
        '陰核を覆う皮を乱暴に剥き、人差し指で陰核を押し固定し、中指と薬指で陰唇を押さえる。',
      ]);
      await attacker.print_and_wait([
        '擦りと震えで刺激を重ね、充血して勃起した陰核は、揉み引きされるたび敏感になっていく。',
      ]);
      await attacker.print_and_wait([
        '絶え間ない快感が脊髄を伝い、',
        a_call_d,
        ' の頭へ流れ込む。どれほど硬い意志でも、こう弄ばれれば綻びは入るだろう。',
      ]);
      await defender.say_and_wait(['んひぃ……❤️陰核、壊れちゃう……あぁあぁ❤️']);
      await attacker.print_and_wait(['そうだな……少し、赤く腫れてきた。']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {PrintedSpan} d_hair 受動側の毛並みの形容（色付き）
   */
  async finger_fuck(attacker, defender, is_first, a_call_d, d_hair) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = '淡く可憐な';
        break;
      case 1:
        vagina_desc = '赤みを帯び紫がかった';
        break;
      case 2:
        vagina_desc = '深く色づいた大人びた';
    }
    if (is_first) {
      await attacker.print_and_wait([
        '人差し指と中指を揃えて見せ、',
        a_call_d,
        ' が気づくより先に、二本を揃えたまま',
        vagina_desc,
        '秘部へ挿し入れる。',
      ]);
      await defender.say_and_wait(['ひっ……や……やめろ……最低！']);
      await attacker.print_and_wait([
        '首が後ろへ反り、',
        d_hair,
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        'は射られた白鳥のように、苦痛と悦びの混じった甘い悲鳴を上げる。',
      ]);
    } else {
      await attacker.print_and_wait([
        '柔らかく湿った膣のなかを指先が乱暴に出入りし、奥で叩く、揉む、擦るを変え、空いたもう一方の手は下腹の上から押し返す。',
      ]);
      await defender.say_and_wait(['うぅ……']);
      await attacker.print_and_wait([
        a_call_d,
        ' は両手で唇を必死に押さえ、美しい瞳が潤んで揺れている。',
      ]);
      await attacker.say_and_wait(['効果は十分だな、', a_call_d, '。']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(['入口ばかり弄って、何が面白い。']);
      await attacker.print_and_wait([
        '指をさらに進め、',
        a_call_d,
        ' が普段の自慰では滅多に触れない場所を探り、指先が肉壁の小さな隆起を撫でる。',
      ]);
      await defender.say_and_wait(['はぁ……お願い……']);
      await defender.say_and_wait(['——ひゃっ～！']);
      await attacker.print_and_wait([
        '軽く押し潰しただけで、',
        a_call_d,
        ' の懇願は快楽の喘ぎへ変わる。',
      ]);
      await attacker.print_and_wait([
        'アダルト映像にしか出ないような、だらしのないアヘ顔が浮かぶ。',
      ]);
    } else {
      await defender.say_and_wait(['はぁ～……これ……なに……']);
      await attacker.print_and_wait([
        '不安そうに腰をよじるほど、柔らかくなった膣肉が、体内の指へいっそう絡みつく。',
      ]);
      await attacker.print_and_wait([
        '弱点を見抜かれたあと、初めは異物を押し出そうとしていた秘部は、隆起で指腹の粗い紋様を自ら擦り始める。',
      ]);
      await attacker.print_and_wait([
        '汗が滑らかな頬を伝い、わずかに開いた口角へ落ち、少し出した舌先の涎と一緒に滴る。',
      ]);
      await defender.say_and_wait(['うぅ……']);
      await attacker.print_and_wait([
        '両目は半開きで、瞳は白く返り、今にも気を失いそうだ。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {string} d_skin_color 受動側の肌色
   */
  async pet_leg(attacker, defender, is_first, a_call_d, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = '象牙色';
        break;
      case 0:
        skin_desc = '白い';
        break;
      case 1:
        skin_desc = '血色のよい';
        break;
      case 2:
        skin_desc = '浅褐色';
    }
    if (is_first) {
      await attacker.print_and_wait([
        '触診でも恋人の資格でもなく、相手の意思に反して、目の前の',
        defender.race > 0 ? defender.uma_sex_title : defender.phy_sex_title,
        'の太腿を弄ぶ。',
      ]);
      await attacker.print_and_wait([
        { color: d_skin_color, content: skin_desc },
        '肌と、ほどよい肉の感触。',
      ]);
      await attacker.print_and_wait([
        '美しい脚の線を辿り、',
        a_call_d,
        ' が鍛え上げた成果を味わう。手を離せばすぐ戻る弾力は、指先にとって最上の快楽だ。',
      ]);
      await attacker.print_and_wait(['トレーニングの成果は、十分だな……']);
    } else {
      await attacker.print_and_wait([
        a_call_d,
        ' の肉感と曲線を兼ねた太腿は、掌で往復されるうち、下品な桃色と脂ぎった汗の光を帯びる。',
      ]);
      await attacker.print_and_wait([
        '太腿を閉じて逃げようとすれば、より敏感な付け根まで掌へ送り出すことになる。',
      ]);
      await attacker.print_and_wait([
        '脚の肉に包まれた掌全体が、引き締まった摩擦を楽しむ。',
      ]);
      await attacker.print_and_wait([
        '潮紅のなかに嫌悪を残した ',
        a_call_d,
        ' の顔を見ていると、断りもなく性器に触れているような気分になる。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {PrintedSpan} d_hair 受動側の毛並みの形容（色付き）
   */
  async pet_tail(attacker, defender, is_first, a_call_d, d_hair) {
    if (is_first) {
      await attacker.print_and_wait([
        '空いた手を背中から下ろし、尻尾の根元へ触れた瞬間、体を強張らせていた ',
        a_call_d,
        ' は電流が走ったように震える。',
      ]);
      await defender.say_and_wait(['おまえ！ 最低！ やめろ！']);
      await attacker.print_and_wait([
        '勢いよく顔を上げ、自分を睨むウマ娘の瞳には、いじらしい涙が光っている。',
      ]);
    } else {
      await attacker.print_and_wait([
        '挑発するように尻尾の根を撫で続け、刺激に耐えながらも哀れに顔を歪める ',
        a_call_d,
        ' を眺める。',
      ]);
      await defender.say_and_wait(['は、は～は～……人……でなし……']);
      await attacker.print_and_wait([
        '歯を軽く食いしばり、体まで微かに震えている姿が、かえって加虐心を煽る。',
      ]);
      await attacker.print_and_wait([
        'さらに悪く、',
        d_hair,
        '尻尾を絡めて軽く引く。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async pull_tail(attacker, defender) {
    await defender.say_and_wait('ひゃ～❤️');
    await defender.print_and_wait([
      '尾先から根元へ、そして全身を覆う妙な感覚。',
    ]);
    await defender.print_and_wait([
      '長く使っていなかった線が急に繋がったように、痛む尻尾の根から頭へ、頭から疼く秘部へと返ってくる。',
    ]);
    await defender.print_and_wait([
      '体を後ろへ反らすと同時に、尻尾は無意識に許しを乞うように揺れる。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '目を細め、',
        a_call_d,
        ' が自ら硬くなった、赤く腫れた陰核を間近に見る。',
      ]);
      await attacker.print_and_wait([
        'そのあいだ、吐息をわざと当てると、刺激された陰核はさらに立ち上がる。',
      ]);
      await defender.say_and_wait(['見ないで、見ないで……']);
      await attacker.print_and_wait([
        '舌を陰核へ落として強く舐めれば、さっきまでの厳しい声は、いくらか許しを乞う色を帯びる。',
      ]);
      await attacker.print_and_wait([
        '痙攣しながら愛液を吐く秘部が、自分の唇まで濡らしていく。',
      ]);
    } else {
      await defender.print_and_wait([
        '敏感な陰核を舌先で弄ばれ、食いしばった歯の隙間から、目の前の最低な相手の動きに合わせて甘い声が洩れる。',
      ]);
      await defender.print_and_wait(['それでも、そう簡単には屈しない！']);
      await defender.say_and_wait(['ひゃっ！！！']);
      await defender.print_and_wait([
        '突然の痛みと、電撃のような快感で体が一気に強張り、口角まで勝手に引きつる。',
      ]);
      await defender.say_and_wait(['だめ！ 歯でそこを噛むな！']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async suck_virgin(attacker, defender, is_first, a_call_d) {
    let vagina_desc;
    switch (era.get(`talent:${defender.id}:茎核类型`)) {
      case 0:
        vagina_desc = '淡く可憐な';
        break;
      case 1:
        vagina_desc = '赤みを帯び紫がかった';
        break;
      case 2:
        vagina_desc = '深く色づいた大人びた';
    }
    if (is_first) {
      await defender.say_and_wait(['や……やめ……離れろ……']);
      await attacker.print_and_wait([
        '威嚇にもならない、震えた脅しなど構わず、',
        a_call_d,
        ' の',
        vagina_desc,
        '秘部へ自ら口づける。',
      ]);
      await attacker.print_and_wait(['軽く吸い、温かく柔らかい舌が膣へ入る。']);
      await attacker.print_and_wait([
        '柔らかい襞を往復して擦ると、時おり収縮する膣が、自分の舌を押し出そうとする。',
      ]);
    } else {
      await defender.say_and_wait(['やめて……うふふ……']);
      await defender.print_and_wait([
        '浅いところの襞は、入り込んだ異物に残らず押し潰されている。',
      ]);
      await defender.print_and_wait([
        '低い呪詛のあいだに、',
        defender.race > 0 ? '走るための' : '',
        '両脚は震え、力なく、脚のあいだに埋まった頭を挟んでしまう。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.print_and_wait([
        '口元まで伸びた、生臭い亀頭を含み、迷いながらゆっくり舌を棒へ寄せる。',
      ]);
      await attacker.say_and_wait(['もっと本気でやれ。']);
      await defender.say_and_wait(['つけあがるな……'], true);
      await defender.say_and_wait(['うぅ……']);
      await defender.print_and_wait([
        'それでも今の自分は屈し、口腔を狭めて上下に滑らせ、湿った唾を肉棒へ均一に塗っていく。',
      ]);
      await defender.print_and_wait([
        '舌面は気が進まないまま表面の筋を舐め、自分の涎で肉棒を艶やかに光らせる。',
      ]);
      await defender.say_and_wait(['ん……また、少し大きく……'], true);
    } else {
      await defender.print_and_wait([
        '目を閉じる。見えなければ、気にならないと思いたくて。',
      ]);
      await defender.print_and_wait([
        'だが頼れる嗅覚は、いま自分が何をしているかを忠実に伝える。',
      ]);
      await defender.print_and_wait([
        '柔らかい唇がゆっくり陰茎を包み、歌声を鍛えた舌先が亀頭を巡る。本来ならトロフィーを抱く手が、陰茎を支えている。',
      ]);
      await defender.print_and_wait(['口づけ……呼吸……匂い……']);
      await defender.say_and_wait(['臭い……'], true);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async force_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '極限まで膨らんだ肉棒で、いきなり ',
        a_call_d,
        ' の唇を押し開く。',
      ]);
      await attacker.print_and_wait([
        '柔らかい唇が輪のように肉棒を縛って前後し、頬の内側まで突き上げられる。',
      ]);
      await attacker.print_and_wait([
        '無意識に窄まる唇と頬の粘膜が、肉茎のための極狭い口穴を作る。',
      ]);
      await attacker.print_and_wait([
        'だが何より好ましいのは、自分を見る、軽蔑を含んだ潤んだ瞳だ。',
      ]);
    } else {
      await defender.say_and_wait(['はぁ……❤️']);
      await attacker.print_and_wait([
        'さっきまで自分だけを睨んでいた目は、いま焦点を失い、肉棒が口腔から抜ける息の合間にだけ揺れる。',
      ]);
      await attacker.print_and_wait([
        defender.get_colored_name(),
        ' という名の',
        defender.race > 0 ? defender.sex_slave_title : defender.phy_sex_title,
        'は、無意識に出した舌で肉棒を軽く支える。',
      ]);
      await attacker.print_and_wait([
        '口のなかの涎が先走りと混ざって滴るあいだ、濃い肉棒の匂いの混じった空気を大きく吸う。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      await defender.say_and_wait(['はぁあぁ～～～ん～～ぐっ～～']);
      await attacker.print_and_wait([
        '精巧な',
        defender.race > 0 ? 'ウマ耳の' : '',
        '性人形のように、股下で好きに扱われている。',
      ]);
      await attacker.print_and_wait([
        '口のなかの空間はすべて奪われ、ほとんど真空の口穴になる。',
      ]);
      await defender.say_and_wait(['ぐえっ～']);
      await attacker.print_and_wait([
        'さっきまで文句ばかりだった小さな口は、いま吸うことしかできない。',
      ]);
      await defender.say_and_wait(['ぅ～熱い～息が……'], true);
      await defender.print_and_wait(['耳元には、速く粗い水音しか聞こえない。']);
      await defender.print_and_wait([
        '自分が保とうとした、嫌悪に満ちた軽蔑の視線も、ただ上へ反る美しい瞳へ変わる。',
      ]);
      await defender.print_and_wait([
        '肉棒が乱暴に入るたび喉の穴は押し潰され、広がった食道が気管を圧し、呼吸できないのに喉肉はこの最低な相手の肉棒を締め上げる。',
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          '口腔でわざと止まり、残った精の汚れを自分の舌苔と桜色の唇へ塗りつけてから、名残惜しそうに抜く。',
        ]);
        await defender.print_and_wait([
          '粗く汚れた亀頭と薄い唇のあいだに、濁った白い糸が引く。',
        ]);
      }
      await defender.print_and_wait([
        '余分な喉の液と涎も、奥へ押し込まれていく。',
      ]);
      await defender.print_and_wait([
        '目の前の強姦犯の袋に溜まった濃い精を、自分が飲み込めるように整えているだけだ。',
      ]);
    } else {
      await defender.say_and_wait(['——ぐっ！？']);
      await defender.print_and_wait([
        '喉の奥に埋まった肉棒が、自分の頭を下げさせない。',
      ]);
      await defender.print_and_wait([
        '体を反らせるしかなく、口腔で先走りと混ざった涎まで、絶えず飲み込まされる。',
      ]);
      await defender.print_and_wait([
        '異物に侵される吐き気と、生臭いもので喉を塞がれる窒息。',
      ]);
      await defender.print_and_wait([
        'それ以上に、目の前の人でなしを根元まで喉奥で満たすために、尻を高く上げねばならない屈辱。',
      ]);
      await defender.say_and_wait(['早く抜け……！！！'], true);
      await defender.print_and_wait([
        '吸い込む空気は、この最低な相手の乱暴な動きに追いつけなくなっていく。',
      ]);
      await defender.print_and_wait([
        'わずかに紫がかった頬。抗おうとした両手も、力を失って柔らかくなる。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async force_deep_blow_job(attacker, defender, is_first) {
    if (is_first) {
      if (defender.race > 0) {
        await defender.print_and_wait([
          '聞こえないふりをして、亀頭を銜えて吸う動作だけを続ける。',
        ]);
        await defender.print_and_wait([
          'ここまでさせられて、さらに深く銜えろなど、あまりに酷すぎる。',
        ]);
        await defender.say_and_wait(['ん？']);
        await defender.print_and_wait([
          '尻尾に撫でられる感触。また触りたいのか。もう一方の手は自分の耳を掻いている。',
        ]);
        await defender.say_and_wait(['んっ？！']);
        await defender.print_and_wait([
          '予期せぬ尻尾の引きで全身の力が抜け、頭頂の手が容赦なく押し下げる。',
        ]);
        await defender.print_and_wait([
          '唇と舌のあいだに留まっていた亀頭が、喉の奥まで一気に押し込まれる。',
        ]);
        await defender.say_and_wait(['ぐっ！！']);
        await defender.print_and_wait([
          '生臭い匂いに満たされた味蕾と鼻腔と頭が、敏感な体を痙攣させる。',
        ]);
      } else {
        await defender.say_and_wait(['はぁあぁ～～～ん～～ぐっ～～']);
        await attacker.print_and_wait(
          '精巧な性人形のように、股下で好きに扱われている。',
        );
        await attacker.print_and_wait([
          '口のなかの空間はすべて奪われ、ほとんど真空の口穴になる。',
        ]);
        await defender.say_and_wait(['ぐえっ～']);
        await attacker.print_and_wait([
          'さっきまで文句ばかりだった小さな口は、いま吸うことしかできない。',
        ]);
      }
      await defender.say_and_wait(['ぅ～熱い～息が……'], true);
      await defender.print_and_wait(['耳元には、速く粗い水音しか聞こえない。']);
      await defender.print_and_wait([
        '自分が保とうとした、嫌悪に満ちた軽蔑の視線も、ただ上へ反る美しい瞳へ変わる。',
      ]);
      await defender.print_and_wait([
        '肉棒が乱暴に入るたび喉の穴は押し潰され、広がった食道が気管を圧し、呼吸できないのに喉肉はこの最低な相手の肉棒を締め上げる。',
      ]);
      if (
        (era.get(`stain:${defender.id}:口腔`) & (1 << stain_enum.semen)) >
        0
      ) {
        await defender.print_and_wait([
          '口腔でわざと止まり、残った精の汚れを自分の舌苔と桜色の唇へ塗りつけてから、名残惜しそうに抜く。',
        ]);
        await defender.print_and_wait([
          '粗く汚れた亀頭と薄い唇のあいだに、濁った白い糸が引く。',
        ]);
      }
      await defender.print_and_wait([
        '余分な喉の液と涎も、奥へ押し込まれていく。',
      ]);
      await defender.print_and_wait([
        '目の前の強姦犯の袋に溜まった濃い精を、自分が飲み込めるように整えているだけだ。',
      ]);
    } else {
      await defender.say_and_wait(['——ぐっ！？']);
      await defender.print_and_wait([
        '喉の奥に埋まった肉棒が、自分の頭を下げさせない。',
      ]);
      await defender.print_and_wait([
        '体を反らせるしかなく、口腔で先走りと混ざった涎まで、絶えず飲み込まされる。',
      ]);
      await defender.print_and_wait([
        '異物に侵される吐き気と、生臭いもので喉を塞がれる窒息。',
      ]);
      await defender.print_and_wait([
        'それ以上に、目の前の人でなしを根元まで喉奥で満たすために、尻を高く上げねばならない屈辱。',
      ]);
      await defender.say_and_wait(['早く抜け……！！！'], true);
      await defender.print_and_wait([
        '吸い込む空気は、この最低な相手の乱暴な動きに追いつけなくなっていく。',
      ]);
      await defender.print_and_wait([
        'わずかに紫がかった頬。抗おうとした両手も、力を失って柔らかくなる。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_or_force_hand_job(attacker, defender, is_first) {
    if (is_first) {
      await attacker.print_and_wait([
        '権力であれ武力であれ、とにかく ',
        defender.get_colored_actual_name(),
        ' という名の',
        defender.race > 0 ? 'ウマ耳の' : '',
        defender.phy_sex_title,
        'に、いまは従うしかないと分からせる。',
      ]);
      await attacker.print_and_wait([
        '先走りを垂らす亀頭を、気が進まないまま差し出された小さな手へ挿し入れる。',
      ]);
      await attacker.print_and_wait([
        '肉柱の脇を囲む指はごく軽く、それがかえって羽根が掠めるような感触になる。',
      ]);
      await attacker.print_and_wait(['美しいものを汚す、癖になる興奮もある。']);
    } else {
      await attacker.say_and_wait(['力を入れろ。握っているだけじゃ足りない。']);
      await defender.print_and_wait([
        '目の前の人でなしは、さらに酷い要求を急かし、自分は両手を肉棒へ密着させるほかない。',
      ]);
      await defender.print_and_wait([
        '先走りで粘つく指も、その下で脈打つ興奮した筋も、すべて感じ取ってしまう。',
      ]);
      await defender.say_and_wait(['気持ち悪い……']);
      await defender.print_and_wait([
        '仕返しのように扱く速度を上げ、わざと指先で鈴口を突く。',
      ]);
      await defender.say_and_wait(['ふ……少しは、苦しそうな顔をした……'], true);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async ask_tit_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '膝をついて呆けている ',
        a_call_d,
        ' の両胸を支え、肉棒を乳肉のあいだへ真っ直ぐ挿し入れる。',
      ]);
      await defender.say_and_wait(['肉棒が、ん、胸のなかに……❤️']);
      await attacker.print_and_wait([
        '無意識に心を奪う淫語を吐いたあと、胸の熱さに焼かれたのか、呆けていた ',
        a_call_d,
        ' はようやく我に返り、両手で肉棒を押しのけようとする。',
      ]);
      await attacker.print_and_wait([
        'だからその手を握り、自分の胸の肉を支えさせる。',
      ]);
      await attacker.print_and_wait([
        '胸を揉む動きで、完全に昂ぶった肉根へどう奉仕するかを、ついでに教える。',
      ]);
      await defender.say_and_wait(['ん……❤️脈打ってる……❤️']);
    } else {
      await defender.print_and_wait([
        attacker.race > 0
          ? '谷間に収まった肉根の熱さも、呼吸に混じる生臭さも、乱れた熱い息に吹かれるウマ耳も、どれも無視できない。'
          : '谷間に収まった肉根の熱さも、呼吸に混じる生臭さも、どれも無視できない。',
      ]);
      await defender.print_and_wait([
        'やけになって柔らかさを強く摘まみ、未熟なまま胸で肉棒を擦る力を増し、意識を逸らそうとする。',
      ]);
      await defender.print_and_wait([
        '乳肉を肉根へ密着させ、機械のように押し離す。気づかぬうち、胸を潰す動きは随分と粗くなっていた。',
      ]);
      await defender.say_and_wait(['……ふん。']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async ask_or_force_tit_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        'わざと腰を突き、乳肉から覗く亀頭を唇へ当て、いまは口を開ける番だと ',
        a_call_d,
        ' に示す。',
      ]);
      await defender.say_and_wait(['ん……']);
      await attacker.print_and_wait([
        a_call_d,
        ' は眉を寄せ、唇を結び、わずかに歯を見せて、どうしても口を開けない。',
      ]);
      await attacker.print_and_wait([
        'だから亀頭を頬と唇へ何度も突き、涙を含んだ瞳が次第に見開き、やがて焦点を失うまで続ける。',
      ]);
      await attacker.print_and_wait([
        'ようやく、',
        a_call_d,
        ' が口を開き、淡く誘う唇を見せる。',
      ]);
      await defender.say_and_wait(['——あ——ん。']);
    } else {
      await defender.say_and_wait(['ぐちゅ～ぐちゅ～ぐちゅ～']);
      await defender.print_and_wait([
        '亀頭から冠状溝までを完全に咥え込み、時おり舌先で竿まで舐めさせられる。',
      ]);
      await defender.print_and_wait([
        '両腕で胸の肉を支えながら、空いた手でも肉棒を摘まむよう命じられる。',
      ]);
      await defender.print_and_wait([
        '屈辱だ。頭を下げ切った、服従と敗北そのものの姿勢。',
      ]);
      await defender.say_and_wait(['ぅ——']);
      await defender.print_and_wait([
        '不満の嗚咽を漏らしても、目の前の強姦犯は、次に自分が飲み込むときに頭を撫でるだけだ。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async bite_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await defender.say_and_wait(['だめ～だめ～～離れなさい！']);
      await attacker.print_and_wait([
        '涎に濡れた、',
        a_call_d,
        ' の赤い苺を歯で銜え、強く噛む。溜まっていた強い痒みと欲が一気に破裂する。',
      ]);
      await defender.say_and_wait(['んあっ！！！❤️']);
      await attacker.print_and_wait([
        a_call_d,
        ' は耐えきれず甘い声を漏らす。',
      ]);
      await attacker.print_and_wait([
        'すぐ我に返ったように首を引き、顔を真っ赤にして舌を取り戻し、涎の銀糸が乳肉へ落ちる。',
      ]);
    } else {
      await attacker.print_and_wait([
        '歯先で噛んで赤い腫れを残し、時おり強く噛み、自分を押しのけようとする ',
        a_call_d,
        ' を力なく崩れさせる。',
      ]);
      await defender.say_and_wait(['ん……最低❤️！ 人……でなし！ 強姦犯❤️！']);
      await attacker.print_and_wait([
        'その罵りさえ、粘り気のある甘い響きになっていく。',
      ]);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} d_body_hair 受動側の毛色
   */
  async missionary(attacker, defender, d_body_hair) {
    await defender.say_and_wait('人でなし！ 離れろ、消えろ！');
    await defender.print_and_wait([
      '脚を上げて蹴ろうとするが、足首を造作なく掴まれ、上へ引き上げられる。',
    ]);
    if (defender.race > 0) {
      await defender.print_and_wait([
        d_body_hair,
        '尻尾に隠れていた雌の秘部を、自分は晒させられる。',
      ]);
    } else {
      await defender.print_and_wait('下品な雌の秘部を、自分は晒させられる。');
    }
    await defender.print_and_wait([
      '揃えた手首まで目の前の相手に押さえられ、もう抗えないと悟る。',
    ]);
    await defender.say_and_wait('ほおおおおお！！❤️');
    await defender.print_and_wait(
      '本来なら続くはずの罵りも抵抗も叱責も、灼熱の肉棒が挿さった瞬間、ひどく媚びた淫声へ変わる。',
    );
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {PrintedSpan} d_hair 受動側の髪色
   */
  async doggy_style(attacker, defender, a_call_d, d_hair) {
    await attacker.print_and_wait([
      a_call_d,
      ' の両腕を引き、少し力を入れただけで',
      defender.sex,
      'は牝犬のように尻を上げ、地面に跪かされる。',
    ]);
    await attacker.print_and_wait([
      '抗おうとする',
      defender.race > 0 ? '牝馬' : '雌',
      'は耐えきれず尻をよじって逃げようとするが、それがかえって誘いのように見える。',
    ]);
    await attacker.print_and_wait([
      '腰を前へ打ち、肉棒は遮るものなく ',
      a_call_d,
      ' の秘部へ収まる。',
    ]);
    await defender.say_and_wait(['ひぁぁ❤️！']);
    await attacker.print_and_wait([
      '電流が走ったように腰が反り、',
      d_hair,
      'の髪が揺れる。',
    ]);
    if (defender.race > 0) {
      await attacker.print_and_wait(['尻尾まで、真っ直ぐに強張る……']);
    }
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async sitting(attacker, defender, a_call_d) {
    await attacker.say_and_wait('逃げるつもりか？');
    await attacker.print_and_wait([
      'よろよろと立ち上がり、逃げようとする ',
      a_call_d,
      ' の脛を掴み、引けばすぐ懐へ落ちる。',
    ]);
    await attacker.print_and_wait([
      '肉棒が平坦な腹へ重く当たり、恐怖で下腹まで凹むのが分かる。',
    ]);
    await attacker.print_and_wait([
      '言うことを聞かない悪い子には、罰が必要だ。',
    ]);
    await defender.say_and_wait(['うわぁ……抜け……！']);
    await attacker.print_and_wait([
      defender.race > 0
        ? '腰が勢いよく反り、レースで鍛えられた両脚が自分の腰へ強く絡む。'
        : '腰が勢いよく反り、両脚が自分の腰へ強く絡む。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async hug_sitting(attacker, defender, a_call_d) {
    await attacker.say_and_wait('気持ちいいか？');
    await attacker.print_and_wait([
      '後ろから ',
      a_call_d,
      ' に密着し、',
      defender.race > 0 ? '立ったウマ耳' : '耳',
      'へ問う。',
    ]);
    await defender.say_and_wait('人でなし！ 変態！');
    await defender.say_and_wait('んあぁ❤️……');
    await attacker.print_and_wait([
      '途切れ途切れの反論は甘い淫声に遮られ、',
      a_call_d,
      ' の垂れた頭はさらに低くなる。',
    ]);
    await attacker.print_and_wait([
      '抽挿のたび秘部が強く締まる',
      defender.race > 0 ? '牝馬' : '雌',
      'が、いまどんな顔をしているか、自分に見せたくないのだろう。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async standing(attacker, defender, a_call_d) {
    if (defender.race > 0) {
      await attacker.print_and_wait([
        'やはり、',
        defender.uma_sex_title,
        'は柔軟さもバランスも優れている。',
      ]);
    }
    await attacker.print_and_wait([
      'つま先だけを床に残し、太腿の内側を伸ばし、右脚をゆっくり水平まで上げる。',
    ]);

    await attacker.print_and_wait([
      '必死に側方へ脚を上げた ',
      a_call_d,
      ' は、細い腰と誘う側の尻を自分の目の前へ晒す。',
    ]);
    await attacker.print_and_wait([
      era.get(`cflag:${defender.id}:阴毛`) >= 1
        ? '陰毛に隠れた'
        : '滑らかで愛らしい',
      '秘部が、張り詰めた動きに合わせて開閉する。',
    ]);
    await defender.say_and_wait('満足したでしょう……人でなし！');
    await attacker.print_and_wait([
      'まだ限界ではない。自ら手を伸ばして姿勢を正し、水平に保たれた右脚をさらに上げ、左脚と一直線になるまで垂直へ導く。',
    ]);
    await defender.say_and_wait('さ、触らないで……');
    await attacker.print_and_wait([
      '肉茎が真っ直ぐ入り、狭く柔らかい膣は無理に押し開かれ、熱い亀頭は幾重にも蠢く肉を無視して花芯へ当たる。',
    ]);
    await defender.say_and_wait('……おぐっ❤️！！');
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} d_body_hair 受動側の毛色
   */
  async hug_standing(attacker, defender, d_body_hair) {
    await defender.print_and_wait([
      '両手を壁につき、尻を高く上げ、感情を殺して尋ねようとする。',
    ]);
    await defender.say_and_wait(['これでいいでしょう？']);
    await defender.print_and_wait([
      '後ろから来るのは分かっている……それでも床に押さえられるよりはマシだ……',
    ]);
    await defender.print_and_wait([
      'そう自分に言い聞かせているうち、腰へ突然撫でる感触が来て、揉みへ変わり、尻をさらに高く上げさせられる。',
    ]);
    await defender.say_and_wait(['ぐっ❤️！']);
    if (defender.race > 0) {
      await defender.print_and_wait([
        'この姿勢は、肉茎が自分の秘部を根元まで貫ける姿勢で、ウマ娘にとってあまりに反則だ！ ',
        d_body_hair,
        'ウマの尻尾まで鞭のように掴まれ、自分の尻へ叩きつける。',
      ]);
    } else {
      await defender.print_and_wait(
        'この姿勢は、肉茎が自分の秘部を根元まで貫ける姿勢で、あまりに反則だ！',
      );
    }
    await defender.print_and_wait([
      '上半身は衝撃ですぐに崩れ、引っ張られた両手だけで辛うじて支えている。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async suspended_congress(attacker, defender) {
    await defender.say_and_wait('いや……うわぁ！？');
    await defender.print_and_wait([
      '逃げようとしても、後ろの相手に膝裏から抱き上げられる。',
    ]);
    await defender.print_and_wait([
      '柔軟な体はほとんど折り畳まれ、膝は肩まで押し付けられ、肩に乗った両脚は肉棒の出入りに合わせて大きく上下する。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {PrintedSpan} d_hair 受動側の毛色または髪色
   */
  async hug_suspended_congress(attacker, defender, a_call_d, d_hair) {
    await attacker.print_and_wait([
      'この姿勢なら、',
      a_call_d,
      ' は自分にぶら下がるようになる。',
    ]);
    if (defender.race > 0) {
      await attacker.print_and_wait([
        '利点は、重力に乗った肉棒が真っ直ぐ',
        d_hair,
        'ウマ娘の奥へ届き、互いの性器を密着させられることだ。',
      ]);
    } else {
      await attacker.print_and_wait([
        '利点は、重力に乗った肉棒が真っ直ぐ',
        d_hair,
        '女性の奥へ届き、互いの性器を密着させられることだ。',
      ]);
    }
    await defender.say_and_wait('落ちる！……絶対に落ちる！');
    await attacker.print_and_wait([
      '無重力と下半身の強い快感に打たれ、判断を失いかけた ',
      a_call_d,
      ' は、無意識に腕を後ろへ回して自分の首へ絡める。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async ask_cowgirl(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '腰に跨った',
      era.get(`cflag:${defender.id}:成长阶段`) < 5
        ? defender.teen_sex_title
        : defender.phy_sex_title,
      'は体を支えたまま、尻を小さく動かすだけで、手で唇まで覆い、何事もない顔を作ろうとする。',
    ]);
    await attacker.print_and_wait([
      '秘部へ吞み込ませたときは、声を上げていたのに。',
    ]);
    await attacker.print_and_wait(['ならば、こちらから動くとしよう。']);
    await attacker.print_and_wait([
      '両尻をわずかに支え、',
      a_call_d,
      ' の驚きの声のなか、腰を上へ強く突き上げる。',
    ]);
    await defender.say_and_wait(['んあっ❤️！！！']);
    await attacker.print_and_wait([
      a_call_d,
      ' の悲鳴のなかで同じことを繰り返す。腰を突き、上げ下ろし、擦り回す。香る汗が雨のように胸へ落ち、規則正しい肉体の衝突音が空気に残る。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async stimulate_g_spot(attacker, defender) {
    await defender.say_and_wait(['ちょっと❤️！ だめ……❤️そこは……❤️！']);
    await attacker.print_and_wait(['ここが急所だな？']);
    await attacker.print_and_wait([
      '肉茎の膨らんだ筋で擦るか、亀頭で叩くか。刺激を続けるうち、神経の詰まった膣肉は喜んで震え、収縮する。',
    ]);
    await defender.say_and_wait('ぐおおおほおおお————❤️❤️❤️');
    await attacker.print_and_wait([
      '予想を確かめるように、',
      defender.get_colored_name(),
      ' という名の女性は自ら頭を上げて高い嬌声を上げ、尻も抽挿に合わせて反り、肉棒が急所へより多く当たるようにする。',
    ]);
    await attacker.print_and_wait([
      '美しい瞳は半開きで、残った理性と自尊心は愛液と一緒に体外へ流れ出す。',
    ]);
  },
  /**
   * @author ALEX
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {PrintedSpan} d_call_a 受動側から主動側への呼び方
   * @param {string} d_skin_color 受動側の肌色
   */
  async continue_fucking(attacker, defender, a_call_d, d_call_a, d_skin_color) {
    let skin_desc;
    switch (era.get(`cflag:${defender.id}:肤色深度`)) {
      case -1:
        skin_desc = '象牙色';
        break;
      case 0:
        skin_desc = '白い';
        break;
      case 1:
        skin_desc = '血色のよい';
        break;
      case 2:
        skin_desc = '浅褐色';
    }
    if (era.get(`tcvar:${defender.id}:接近高潮`)) {
      await defender.say_and_wait('はやく……はぁ❤️……止めて……');
      await defender.print_and_wait([
        '膨らんだ肉茎が礼節もなく自分の体内を出入りし、襞に密着して脈打つ充血した筋まで、はっきり分かる。',
      ]);
      await defender.say_and_wait('うはぁ……ん❤️');
      await defender.say_and_wait('だめ……このままじゃ……', true);
      await defender.print_and_wait([
        '精巧な肉の玩具を乱暴に弄ばれるように、熱い亀頭と硬い肉棒が膣の襞を残らず擦る。',
      ]);

      await defender.print_and_wait(
        '来るはずだった激しい痛みではなく、脳髄まで痺れさせる快感が、波のように重なる。',
      );

      await defender.say_and_wait('これ以上❤️は……このままじゃ……', true);
      await defender.say_and_wait('このままじゃ、イっ……❤️', true);
      await defender.print_and_wait([
        '抗いたい。だが制御を失った顔も、甘い吐息も、ピンと伸びた細い足指も、体に余裕がないことを示している。',
      ]);
    } else {
      const message = [
        async () => {
          await defender.say_and_wait('おぐぅ！！');
          await attacker.print_and_wait([
            '太い肉茎が容赦なく ',
            a_call_d,
            ' の雌の秘部を出入りさせ、淫声を上げさせると同時に、美しい瞳を何度も白く返す。',
          ]);
          await attacker.print_and_wait([
            '熱く太い肉棒が秘部のなかを掻き回し、亀頭を膣壁へ当て、反った冠状溝で媚肉を擦り上げて花芯へ真っ直ぐ当たる……',
          ]);
          await attacker.print_and_wait([
            '全力で衝く亀頭は愛液に濡れ、柔らかい子宮口へ重く口づけ、平坦な下腹にさえ亀頭の輪郭がぼんやり浮かぶ。',
          ]);
          await defender.say_and_wait(['お！ ま……待っ……少し……お願い……']);
          await attacker.print_and_wait([
            '快感で満たされた頭からは砕けた言葉しか生まれず、一緒に溢れるのは口角から落ちる透き通った雫だ。',
          ]);
        },
        async () => {
          await defender.print_and_wait([
            '人形のように扱われ、従順な性の機械のように触れられれば淫声を出す。',
          ]);
          await defender.print_and_wait([
            {
              color: d_skin_color,
              content: skin_desc,
            },
            '体が震え、よじれる。',
          ]);
          await defender.say_and_wait(['ぅ、うわぁ……']);
          await defender.print_and_wait([
            '体がいま最も欲しているのは ',
            d_call_a,
            ' から逃れる力なのに、快感に駆られ、残った力は足指を丸めることに使われる。',
          ]);
          await defender.print_and_wait([
            '乱暴に犯される感覚と、愛撫され弄ばれる快感が、自分の両脚も両足も全身も、快楽を求める一塊の雌肉の水準まで引き下げていく。',
          ]);
          await defender.say_and_wait(['はぁ！']);
          await defender.print_and_wait([
            '恥知らずな喘ぎが、自分の口から聞こえる。',
          ]);
        },
      ];
      if (defender.race > 0) {
        message.push(async () => {
          await defender.say_and_wait('んあぁ……やめ……止めて……お願い……ぅ……');
          await defender.print_and_wait([
            '口ではやめろと甘く叫んでも、張り詰めた膣肉はすでに柔らかく侵入者を抱き、肉棒をより深く迎え入れる。',
          ]);
          await defender.print_and_wait([
            '熱い子宮口が肉茎に何度も叩かれ、冠状溝が子宮口の輪へ深く口づけ、閉じようとする子宮口まで上へ凹まされる。',
          ]);
          await defender.print_and_wait(
            '快感でピンと伸びたウマ耳に聞こえるのは、肉茎が膣内の体液を押し出す「ぷちゅぷちゅ」という単調な音だけだ。',
          );
          await defender.print_and_wait([
            a_call_d,
            ' は悟る。レースのために鍛えられた柔軟な体が、いま交わるときの最上の砲架になっている。',
          ]);
        });
      }
      await get_random_entry(message)();
    }
  },
};
