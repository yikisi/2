/**
 * @file トウカイテイオー - 地下室
 * @author 天马闪光蹄
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} another
   * @param {CharaTalk} you
   */
  first_time(another, you) {
    era.print([
      '寮の外で、',
      you.get_colored_name(),
      ' はちょうど ',
      another.get_colored_name(),
      ' と出会い、',
      another.sex,
      'と楽しげにしばらく話す。',
    ]);
    era.print([
      'だが ',
      you.get_colored_name(),
      ' は気づかない。遠くない場所で一対の目がずっとこちらを見ており、',
      you.get_colored_name(),
      ' と',
      another.sex,
      'のやり取りが長くなり、話題が私生活へ寄り、笑い声が大きくなるにつれ、その瞳も震えて、徐々に暗くなっていく……',
    ]);
    era.println();

    era.print(['その主の両手は周囲の物を強く握り、指の節が白くなる。']);
    era.println();

    era.print([
      you.get_colored_name(),
      ' は振り返り、それからぱっと目を開く。',
    ]);
    era.print(['現実か？ 夢か？']);
    era.print([
      you.get_colored_name(),
      ' は、少し子供っぽい装飾のダブルベッドに横たわっていることに気づく……',
    ]);
    era.print(['眼前は見知らぬ天井……']);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async flatter(teio, you, callname) {
    if (era.get('status:3:腿伤')) {
      await teio.say_and_wait([
        'ごめん、',
        callname,
        '。でも、どうしても、離れてほしくないんだ……',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' はいつもの調子で担当をなだめようとするが、明らかに通じない。',
      ]);
      era.println();

      await teio.say_and_wait([callname, '……今は、テイオーさまの番だよ。']);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async ask_release_agree(teio, you, callname) {
    era.printButton('「もう充分遊んだだろ、テイオー。出してくれ」', 1);
    era.printButton('「テイオーさま……わかった。出してください」', 2);
    await era.input();

    await teio.say_and_wait('……はあ。');
    await era.printAndWait([
      '向かいの椅子にまたがる小さな',
      teio.uma_sex_title,
      'が体を前へ傾け、全身をこちらへ寄せ、青黒い両目を瞬きもせず ',
      you.get_colored_name(),
      ' へ据える。墨色の扉のように、入り込もうとする光をすべて飲み込む。',
    ]);
    await teio.say_and_wait('そんなこと言うなんて……ボクのトレーナーが。');
    await era.printAndWait([
      you.get_colored_name(),
      ' は頭皮が粟立つが、今は弱気を見せたくなく、',
      teio.sex,
      'を睨み返す。ゆがんだ虹彩の向こうに、自分が大切にしてきたあの子を見つけたいという希望を、わずかに抱いたまま。',
    ]);
    await era.printAndWait([
      '半世紀ほども続いたような睨み合いのあと、',
      teio.get_colored_name(),
      ' は頭を垂れた。',
    ]);
    await teio.say_and_wait(['ごめん……', callname, '、ボクが悪かった。']);
    await teio.say_and_wait('扉……今は開いてる。好きにして。');
    await era.printAndWait([
      '言い終えると、',
      teio.sex,
      'は自分の脚を抱えて身をひるがえし、横向きに ',
      you.get_colored_name(),
      ' へ道を開ける。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は出口へ歩きながら、余光で、かつて ',
      you.get_colored_name(),
      ' が知っていた',
      teio.child_sex_title,
      'が体を震わせているのを見る——',
    ]);
    era.printButton('放っておく', 1);
    era.printButton(`${teio.sex}を連れていく`, 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        you.get_colored_name(),
        ' は一瞬も無駄にせず、自由な世界へ踏み出す——',
        teio.sex,
        'は？ 少し懲らしめてやるべきだ。',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' は迷わず、丸くなった影へ歩み、手を伸ばして',
        teio.sex,
        'の頭をそっと撫で、髪の根元から背を通り、尾の先まで辿る。小さな',
        teio.uma_sex_title,
        'の体は最初さらに震え、やがて落ち着いていく。',
      ]);
      await era.printAndWait([
        'さらに近づき、両手で',
        teio.sex,
        'のこめかみに触れ、指を曲げて振り返るよう示す。ゆっくりと、見慣れた顔が現れる。',
        you.get_colored_name(),
        ' は、涙で洗われた空色の瞳を見て、思わず笑った。',
      ]);
      await you.say_and_wait('帰ろう、一緒に。');
      await teio.say_and_wait('うっ……');
      await era.printAndWait([
        teio.sex,
        'は顔を拭き、片手で慎重に、だが強く ',
        you.get_colored_name(),
        ' の袖口を掴み、床へ滑り降り、よろよろと先を歩いて ',
        you.get_colored_name(),
        ' を外へ導く。',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async ask_release_reject(teio, you) {
    era.printButton('「もう充分遊んだだろ、テイオー。出してくれ」', 1);
    era.printButton('「テイオーさま……わかった。出してください」', 2);
    await era.input();

    await teio.say_and_wait('……はあ。');
    await era.printAndWait([
      '向かいの椅子にまたがる小さな',
      teio.uma_sex_title,
      'が体を前へ傾け、全身をこちらへ寄せ、青黒い両目を瞬きもせず ',
      you.get_colored_name(),
      ' へ据える。墨色の扉のように、入り込もうとする光をすべて飲み込む。',
    ]);
    await teio.say_and_wait('そんなこと言うなんて……ボクのトレーナーが。');
    await era.printAndWait([
      you.get_colored_name(),
      ' は頭皮が粟立つが、今は弱気を見せたくなく、',
      teio.sex,
      'を睨み返す。ゆがんだ虹彩の向こうに、自分が大切にしてきたあの子を見つけたいという希望を、わずかに抱いたまま。',
    ]);
    await teio.say_and_wait('トレーナー……');
    await era.printAndWait([
      teio.sex,
      'は首をかしげて微笑む——',
      you.get_colored_name(),
      ' はこの仕草を何度も見てきたのに、眼前のこの',
      teio.sex_code === 1 ? '雄獣' : '雌獣',
      'を初めて見る気がした。',
    ]);
    await teio.say_and_wait(
      '教えてくれたよね……現実に、幻想を抱きすぎちゃだめだって。',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' が何を期待していたかは自分でもわからないが、現状は明白だ。',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   * @param {number} security_level
   * @param {string} cur_time
   */
  async ask_time(teio, you, callname, security_level, cur_time) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は ',
      teio.get_colored_name(),
      ' に今の時刻を尋ねる……',
    ]);
    const buffer = [];
    if (security_level > 3 - era.get('status:3:腿伤')) {
      buffer.push(() =>
        teio.say_and_wait(
          '知らないほうがいいこともあるよ……えへへ、ボクを子供扱いしてたころ、よくそう言ってたよね。',
        ),
      );
    } else {
      buffer.push(
        () => teio.say_and_wait('一緒にいる時間……一生だよ❤️'),
        () =>
          teio.say_and_wait([
            cur_time,
            '～ふぅ……ふふ、焦らないで。',
            callname,
            ' は我慢できる大人でしょ',
          ]),
      );
      if (era.get('status:3:腿伤') > 0) {
        buffer.push(() =>
          teio.say_and_wait([
            cur_time,
            '……まだそんなに経ってないのに、もうボクに耐えられないの、',
            callname,
            '？',
          ]),
        );
      }
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_success(teio, you) {
    await era.printAndWait('どうすれば……だめだ……');
    await era.printAndWait([
      you.get_colored_name(),
      'は今の状況をあれこれ考え、頭のなかで様々な状況と計画をシミュレートするが、どれも無理か、すでに無効だと証明されている。',
      you.get_colored_name(),
      ' は目を開き、いちばん単純で直接な方法を選ぶ——自分をここに閉じ込めた',
      { color: teio.color, content: 'テイオー' },
      'を、正面から倒す。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      'はトレーナーとして担当へ伝えてきた、筋肉の使い方を思い出し、深く息を吸って、今度は自ら実践する覚悟を決める。',
    ]);
    era.println();
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_escape(teio, you) {
    await teio.say_and_wait(['なにこれ、冗談でしょ……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' の利き手が',
      teio.sex,
      'の後頸へ入る。',
    ]);
    await era.printAndWait([
      teio.sex,
      'は片手を上げ、',
      you.get_colored_name(),
      ' の肩へ置き、唇を開いて何か言おうとするが、体が緩み、倒れる。',
    ]);
    await era.printAndWait([
      '勝者となった ',
      you.get_colored_name(),
      ' は慎重に',
      teio.sex,
      'の体を支え、壁にもたせて座らせ、向きを変えて施錠された扉と向き合う。',
    ]);
    await era.printAndWait([
      'そろそろだ……長い監禁、沈思、戦いには、決着が必要だ。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は肌着から、粘土でこっそり取った ',
      teio.get_colored_name(),
      ' の指紋を取り出し、記憶にある錠の位置へ手を伸ばす。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' の計算が正しければ……これで出られる。',
    ]);
    era.println();
    await era.printAndWait([
      '合図音が突然鳴り、',
      you.get_colored_name(),
      ' は思わず驚く——幸い、解錠の自動音だった。',
      you.get_colored_name(),
      ' は長く息を吐き、明るい外へ歩み出す……',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  async battle_prison(teio, you) {
    await teio.say_and_wait(['なにこれ、冗談でしょ……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' の利き手が',
      teio.sex,
      'の後頸へ入る。',
    ]);
    await era.printAndWait([
      teio.sex,
      'は片手を上げ、',
      you.get_colored_name(),
      ' の肩へ置き、唇を開いて何か言おうとするが、体が緩み、倒れる。',
    ]);
    await era.printAndWait([
      '勝者となった ',
      you.get_colored_name(),
      ' は慎重に',
      teio.sex,
      'の体を支え、壁にもたせて座らせ、向きを変えて施錠された扉と向き合う。',
    ]);
    await era.printAndWait([
      'そろそろだ……長い監禁、沈思、戦いには、決着が必要だ。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は肌着から、粘土でこっそり取った ',
      teio.get_colored_name(),
      ' の指紋を取り出し、記憶にある錠の位置へ手を伸ばす。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' の計算が正しければ……これで出られる。',
    ]);
    era.println();
    await era.printAndWait([
      '合図音が鳴り、カチリと、扉は再び施錠される。',
      you.get_colored_name(),
      ' はまずいと悟り、数歩下がり、息を吐き、膝を曲げて力を溜め、生涯の力を尽くし、全身の重量を扉へ叩き込む。',
    ]);
    era.println();

    await era.printAndWait([
      '大きな音が地下の空間に響き、',
      you.get_colored_name(),
      ' は弾き返されて目が回り、さっき',
      teio.uma_sex_title,
      'とやり合った傷まで同時に疼く。',
      you.get_colored_name(),
      ' は荒い息をつき、重心が沈んで座り込む。視線はちょうど、担当の眠った顔と向き合う。',
    ]);
    era.println();

    await era.printAndWait([
      teio.sex,
      'の顔は、',
      you.get_colored_name(),
      ' がよく知る',
      teio.uma_sex_title,
      'のままに見える。',
    ]);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      ' は苦笑し、手を伸ばして',
      teio.sex,
      'の睫毛の雫を拭い、もう逆らわず、今の運命を受け入れた。',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async battle_fail(teio, you, callname) {
    await era.printAndWait('どうすれば……だめだ……');
    await era.printAndWait([
      you.get_colored_name(),
      'は今の状況をあれこれ考え、頭のなかで様々な状況と計画をシミュレートするが、どれも無理か、すでに無効だと証明されている。',
      you.get_colored_name(),
      ' は目を開き、いちばん単純で直接な方法を選ぶ——自分をここに閉じ込めた',
      { color: teio.color, content: 'テイオー' },
      'を、正面から倒す。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      'はトレーナーとして担当へ伝えてきた、筋肉の使い方を思い出し、深く息を吸って、今度は自ら実践する覚悟を決める。',
    ]);
    era.println();
    if (era.get('status:3:腿伤') > 0) {
      await teio.say_and_wait([
        callname,
        '？ご、ごめん！でも、もう離れないで……',
      ]);
    } else {
      await teio.say_and_wait([
        callname,
        '？！大丈夫……そんな方法、考えるなんて……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        teio.teen_sex_title,
        'にあっさり抑えられ、',
        teio.sex,
        'の驚きは怒りより大きいようだ。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async strike_success(teio, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は目を閉じ、眠ったふりをしながら、今の状況を集中して考える。',
    ]);
    await era.printAndWait([
      '明らかに、救援は期待しにくい。自分を頼るしかない。そして ',
      you.get_colored_name(),
      ' の担当の今の精神状態では……',
      you.get_colored_name(),
      ' に、',
      teio.sex,
      'を説得して出してもらう自信はない。正面からやり合うのも、いい選択ではない。',
    ]);
    await era.printAndWait(['なら、方法はひとつだ。']);
    await era.printAndWait([
      you.get_colored_name(),
      ' はトレーナーの頭で戦術を組み、自ら駒になり、時機を待つ。',
    ]);
    await era.printAndWait([
      '細かな足音が近づき、気配が過ぎ、衣を脱ぐかすかな音がする……',
    ]);
    await era.printAndWait([
      '今だ！',
      you.get_colored_name(),
      ' は静から動へ転じ、ベッドから跳び上がり、両手を開いて',
      teio.sex,
      'の髪と尻尾を掴む——',
    ]);
    era.println();
    if (era.get('status:3:腿伤')) {
      await teio.say_and_wait(['あっ——']);
      era.println();

      await era.printAndWait([
        teio.sex,
        'の反応は速いが、体が一瞬遅れ、',
        you.get_colored_name(),
        ' は勢い余って',
        teio.sex,
        'のふくらはぎへ飛びつき、抱きついたまま、ふたりとも柔らかい寝具へ倒れ込む……',
      ]);
      era.println();

      await teio.say_and_wait([callname, '……離れないで……']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        teio.sex,
        'を見て、何か言おうとするが、口は開かない。',
      ]);
      await era.printAndWait([
        'トレーナーと、',
        you.sex,
        'の担当',
        teio.uma_sex_title,
        'は長く見つめ合い、黙契のうちに双方が顔を逸らす。',
      ]);
      era.println();

      await teio.say_and_wait(['……出すよ。']);
      era.println();

      await era.printAndWait([
        teio.sex,
        'は ',
        you.get_colored_name(),
        ' の手を引き、外へ向かう。極細だがはっきりした言葉が ',
        you.get_colored_name(),
        ' の耳へ届く。',
      ]);
      era.println();

      await teio.say_and_wait(['ごめん。']);
    } else {
      await teio.say_and_wait(['やっ！']);
      era.println();

      await era.printAndWait([
        '久しぶりに聞く',
        teio.teen_sex_title,
        '本来の悲鳴が上がり、',
        teio.sex,
        'は ',
        you.get_colored_name(),
        ' に抑えられ、立場が再び逆転する。',
      ]);
      era.println();

      await teio.say_and_wait(['……', callname, '。']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' は、慣れたマッサージと情愛の挑発を混ぜた手つきで',
        teio.sex,
        'に応える。',
        teio.sex,
        'は徐々に力を失い、声は吐息へ変わる……',
      ]);
      era.println();

      await teio.say_and_wait(['鍵は……ない……ボク、持って……']);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        teio.sex,
        'の意味を察し、',
        teio.sex,
        'を押したまま扉の前へ行き、勢いで押す。',
      ]);
      era.println();

      await era.printAndWait(['あっさりと、扉は開いた……']);
    }
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async strike_fail(teio, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      ' は目を閉じ、眠ったふりをしながら、今の状況を集中して考える。',
    ]);
    await era.printAndWait([
      '明らかに、救援は期待しにくい。自分を頼るしかない。そして ',
      you.get_colored_name(),
      ' の担当の今の精神状態では……',
      you.get_colored_name(),
      ' に、',
      teio.sex,
      'を説得して出してもらう自信はない。正面からやり合うのも、いい選択ではない。',
    ]);
    await era.printAndWait(['なら、方法はひとつだ。']);
    await era.printAndWait([
      you.get_colored_name(),
      ' はトレーナーの頭で戦術を組み、自ら駒になり、時機を待つ。',
    ]);
    await era.printAndWait([
      '細かな足音が近づき、気配が過ぎ、衣を脱ぐかすかな音がする……',
    ]);
    await era.printAndWait([
      '今だ！',
      you.get_colored_name(),
      ' は静から動へ転じ、ベッドから跳び上がり、両手を開いて',
      teio.sex,
      'の髪と尻尾を掴む——',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' は滑稽な姿勢でベッドへ倒れる。',
    ]);
    era.println();

    await teio.say_and_wait([callname, '……なにやってるの。']);
    era.println();

    await era.printAndWait([
      '結果は、担当を笑わせかけただけで、',
      teio.sex,
      'の警戒を強めたようだ。',
    ]);
  },
  /**
   * @param {CharaTalk} teio
   * @param {CharaTalk} you
   */
  find_escape(teio, you) {
    era.print([
      'なぜか、',
      teio.get_colored_name(),
      ' はもうしばらく離れている。',
    ]);
    era.print([
      '授業か？ トレーニングか？ 催しか？ あるいは——ここまで考えると ',
      you.get_colored_name(),
      ' の頭はさらに痛む——学園の管理側へ、自分の失踪を説明する嘘を編んでいるのか？',
    ]);
    era.print([
      'これ以上先延ばしはできない、と ',
      you.get_colored_name(),
      ' は思う。救援を待つより、自分で機会を掴んで逃げるべきだ。',
    ]);
    era.println();
    era.print([
      you.get_colored_name(),
      ' は扉を軽く押す——今度は鍵がかかっていない！',
      you.get_colored_name(),
      ' は喜び、敷居を跨ぎ、同時に胸を撫でて、跳ねる心臓を静めようとする。闇を驚かせないために……',
    ]);
    teio.say('ああ……');
    era.print(['その瞬間、さっきまで奔っていた血が固まる。']);
    era.print([
      '温かく、清らかな香りの体が寄り、細くて力のある両腕が ',
      you.get_colored_name(),
      ' の腰を抱き、',
      you.get_colored_name(),
      ' は動けなくなる。',
    ]);
    teio.say(
      '前は、自主トレでサボってないか確かめるのに、この手を使ってたのに……大人の手管、ふふ。',
    );
    era.print([
      '立場が逆転した今、',
      you.get_colored_name(),
      ' は',
      teio.sex,
      'に抱えられて室内へ戻り、「罰」を待つしかない……',
    ]);
  },
};
