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
      '눈앞의 사랑스러운 모습을 보고 있자니, 저절로 ',
      teio.sex,
      '을(를) 품에 안고 머리카락을 만지작거리며 머리를 쓰다듬고 있었다.',
    ]);
    await teio.say_and_wait('뭐야…… 또 어린애 취급이야……');
    if (success || era.get(`tcvar:${teio.id}:发情`) > 0) {
      await you.print_and_wait('그렇게 말하면서도…… 꼬리는 살랑거리고 있다.');
      await you.print_and_wait('계속해 줬으면 하는 표정이다.');
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
        '은(는) 손에 든 보고서를 내려다보며 거기에 적힌 사실을 받아들였다. 그러고는 창가에 앉은 담당을 향해 고개를 들었다.',
      ]);
      await era.printAndWait([
        '석양이 방 안으로 비스듬히 들어와 ',
        teio.sex,
        '가 아랫배를 쓰다듬는 손과 힘없이 흔들리는 종아리를 비추었다.',
      ]);
      await teio.say_and_wait(['트레이너…… 트레이너.']);
      await era.printAndWait([
        teio.sex,
        '는 미소를 지으며 자기 배를 가리키고 ',
        you.get_colored_name(),
        '에게 손짓했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 마음을 다잡고 그림자를 밟으며 다가갔다.',
      ]);
      await era.printAndWait('두 사람은 가족이다.');
    } else {
      await teio.say_and_wait(['트레이너, 트레이너──']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 무슨 일인지 알기도 전에 다급히 달려오는 담당을 무의식중에 두 팔로 받아 냈다. 잠시 뒤에야 ',
        teio.sex,
        '가 두 손에 쥔 서류의 의미를 이해했다.',
      ]);
      await era.printAndWait(['그런 거였구나……']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 시선을 내려 ',
        teio.sex,
        '의 아랫배를 보았다.',
      ]);
      await you.say_and_wait(['저 안에 ', teio.sex, '와 나의……'], true);
      await era.printAndWait([
        you.get_colored_name(),
        '의 품에 안긴 존재가 한 번 몸을 떨자 ',
        you.get_colored_name(),
        '은(는) 정신을 차리고 담당의 두 눈을 마주했다. ',
        teio.sex,
        '도 ',
        you.get_colored_name(),
        '을(를) 마주 보았다. 그 표정이 점점 차분하고 어른스러워졌다.',
      ]);
      await era.printAndWait([
        '좋아, 하고 ',
        you.get_colored_name(),
        '은(는) 생각했다. 앞으로 세울 계획은 트레이닝만으로 끝나지 않을 것이다.',
      ]);
    }
  },
};
