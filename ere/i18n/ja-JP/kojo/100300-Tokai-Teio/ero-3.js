/**
 * @file トウカイテイオー - 調教
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} call_t プレイヤーがトウカイテイオーを呼ぶ名
   */
  async talk_with_hurt(teio, you, call_t) {
    await teio.say_and_wait('……');
    await you.say_and_wait('……');
    await you.print_and_wait(
      '欲が灯っても、言葉はいらない。抱き合い、耳に触れ、唇と吐息だけで通じ合う。',
    );
    await you.print_and_wait([
      teio.sex,
      'の肌に触れるたび、',
      call_t,
      ' の体がすっと緊張し、自分を留め、密着の時間を伸ばそうとする。',
    ]);
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} success 誘惑が成功したか
   */
  async lure(teio, you, success) {
    await you.print_and_wait([
      '眼前の愛らしい生き物を見ていると、自然と',
      teio.sex,
      'を懐へ抱き、髪を弄り、頭を撫でていた。',
    ]);
    await teio.say_and_wait('なに……また子供扱い……');
    if (success || era.get(`tcvar:${teio.id}:发情`) > 0) {
      await you.print_and_wait('そう言いながら……尻尾は揺れている。');
      await you.print_and_wait('続けてほしい、という顔だ。');
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async switch(teio, you, callname) {
    await teio.say_and_wait([callname, '！またイジワルした——']);
    await you.print_and_wait([
      '頬を膨らませた小さなウマを見て笑い、両手で',
      teio.sex,
      'の柔らかい肩を掴み、くるりと持ち上げる……',
    ]);
    await teio.say_and_wait('え？');
    await you.print_and_wait('天地が逆になる……');
    await you.say_and_wait('今から、キミの番だ。');
    await you.print_and_wait('まだ呆けている担当へ、意地悪く告げる。');
    await you.say_and_wait([
      'テイオー先生、',
      you.actual_name,
      ' くんは、教えてもらう準備ができてます。',
    ]);
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async pet_anal(teio, you, callname) {
    if (Math.random() >= 0.5) {
      await you.print_and_wait([
        '毎日の手入れと、事前の念入りな洗浄のあと、愛らしく清潔な小さな扉が眼前に現れる。',
      ]);
      await you.print_and_wait([
        '悪戯心が湧き、指を伸ばしてこの秘所を撫で回し、ときどき鍵をこじ開けようとする。',
      ]);
      await teio.say_and_wait(['やっ……んぅ、', callname, '！']);
      await you.print_and_wait(
        '……拒みというより、悦びと急かしが混じっている。',
      );
      await you.print_and_wait([
        'まさか、この格好いい小さな',
        teio.sex_code === 1 ? '王子' : '姫',
        '……そこが敏感なのか？',
      ]);
    } else {
      await teio.say_and_wait(['うう……']);
      await you.print_and_wait([
        teio.sex,
        'にとって、これは少し卑怯な扱いだ。',
      ]);
      await you.print_and_wait('だが、今はそんなことは構っていられない……');
      await you.print_and_wait('むしろ、こうでなければイジる甲斐がない。');
      await you.print_and_wait('プロテクトを着け、そっと扉を叩く……');
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async prepare_anal(teio, you) {
    await teio.say_and_wait(['……']);
    await you.print_and_wait([
      '顔を真っ赤にした',
      teio.teen_sex_title,
      'は普段と違い、一言も発さない。',
    ]);
    await you.print_and_wait(['尻尾を持ち上げ、その秘所をじっくり眺める。']);
    await you.print_and_wait(['愛らしい臀が震え、淡く清潔な穴が開いている……']);
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname トウカイテイオーがプレイヤーを呼ぶ名
   */
  async ask_foot_job_with_hurt(teio, you, callname) {
    await teio.say_and_wait([
      'ごめんね……',
      callname,
      '、こっちじゃ力になれないや。',
    ]);
    await you.print_and_wait([
      '自責と苛立ちの混じった溜息が耳に届き、何か間違えた気がする。',
    ]);
    await you.say_and_wait(['なら、埋め合わせしよう。']);
    await you.print_and_wait([
      teio.sex,
      'が反応するより先に、踵をそっと支え、滑らかな肌を指で撫で、顔を寄せる。',
    ]);
    await teio.say_and_wait(['——！']);
    await you.print_and_wait([
      '手入れと洗浄を済ませた',
      teio.uma_sex_title,
      'の小さな足が、すぐに熱を帯びる。',
    ]);
    await you.print_and_wait([
      '密かに笑い、片手を下へ伸ばし、担当の目をまっすぐ見ながら、',
      teio.sex,
      'の前でそこを弄り始める。',
    ]);
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} is_first 連続行動の初回か
   */
  async ask_tail_job(teio, you, is_first) {
    if (is_first) {
      await teio.say_and_wait(['くっ……こんなの……']);
      await you.print_and_wait([
        '少し逸脱した頼みかもしれない。だが',
        teio.sex,
        'は顔を赤らめただけで、結局は応じた……',
      ]);
      await you.print_and_wait(['しかも、興味津々の様子だ。']);
      await you.print_and_wait([
        '滑らかで瑞々しい尻尾が、立ち上がった性器へ一瞬で絡み、突然の刺激で危うく果てそうになる。',
      ]);
      await teio.say_and_wait(['えへへ……']);
      await you.print_and_wait([
        teio.sex,
        'の目が輝き、全力で尻尾を振り回し、いちばん敏感な場所を嬲る。',
      ]);
    } else {
      await you.print_and_wait([
        '動きが荒くなってきた……いや、上手くなった、と言うべきか。',
      ]);
      await teio.say_and_wait(['わあ……濡れちゃった……']);
      await you.print_and_wait([
        '淫らな汁でべとべとになった尻尾は、毛並みを輝かせるその手入れ剤から、何かを学んでしまうものだ。',
      ]);
      await you.print_and_wait(['それに……それだけではない……']);
      await you.print_and_wait([
        '尻尾が一弾み、一巻き。上に垂れた髪の束まで巻き込み、二重螺旋でそこを絞る。',
      ]);
      await you.print_and_wait([
        '小さな',
        teio.uma_sex_title,
        'はまだ気づいていない——尾腺から発情の麝香まで分泌し、場にいる生き物の欲をさらに煽っていることに。',
      ]);
      await you.print_and_wait(['呼吸が、知らず知らず粗くなる……']);
    }
  },
  /**
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   */
  async preg_report(teio, you) {
    if (era.get('status:3:腿伤') > 0) {
      await era.printAndWait([
        you.get_colored_name(),
        ' は手元の報告を見下ろし、そこに書かれた事実を受け入れ、窓際に座る担当へ顔を上げる。',
      ]);
      await era.printAndWait([
        '夕陽が斜めに室内へ入り、',
        teio.sex,
        'が下腹を撫でる手に当たり、力なく揺れるふくらはぎにも落ちる。',
      ]);
      await teio.say_and_wait(['トレーナー……トレーナー。']);
      await era.printAndWait([
        teio.sex,
        'は微笑み、自分の腹を指さして、',
        you.get_colored_name(),
        ' に手招きする。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は覚悟を決め、影を踏んで歩み寄る。',
      ]);
      await era.printAndWait('ふたりは、家族だ。');
    } else {
      await teio.say_and_wait(['トレーナー、トレーナー——']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は何が起きたか判る前に、慌てて駆け寄る担当を無意識に両腕で受け止め、しばらくしてから',
        teio.sex,
        'が両手に持つ書類の意味を理解する。',
      ]);
      await era.printAndWait(['そういうことか……']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は視線を下げ、',
        teio.sex,
        'の下腹を見る。',
      ]);
      await you.say_and_wait(['そこが、', teio.sex, 'と自分の……'], true);
      await era.printAndWait([
        you.get_colored_name(),
        ' の懐のものが一度震え、',
        you.get_colored_name(),
        ' は我に返り、担当の両目と向き合う。',
        teio.sex,
        'も ',
        you.get_colored_name(),
        ' を見つめ返し、表情が徐々に穏やかで大人びていく。',
      ]);
      await era.printAndWait([
        'よし、と ',
        you.get_colored_name(),
        ' は思う。これから立てる計画は、トレーニングだけじゃ済まない。',
      ]);
    }
  },
};
