/**
 * @file 売店 - システム提示
 * @author 幽白書
 */
const {
  get,
  input,
  print,
  printAndWait,
  printButton,
} = require('#/era-electron');

module.exports = {
  /**
   * タキオンがチームにいる、熱恋＆良好以上、初めて売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   */
  async start_first_love(tachyon, you, callname) {
    await tachyon.say_and_wait([
      'おや、',
      callname,
      '……こんなところまで来るとは。ずいぶん……気が早いのね……',
    ]);
    await printAndWait([
      'ぶらついていた ',
      you.get_colored_name(),
      ' は、白衣を着て、頬を赤らめた栗毛の',
      tachyon.uma_sex_title,
      'を見かけた',
    ]);
    await printAndWait([
      tachyon.sex,
      'の、ブラインドのような深紅の瞳には狂気と神秘が宿り、少し大きめの白衣は、内側にぶら下げた品々でパンパンに張っている。',
    ]);
    await printAndWait([
      '挙動の怪しいその',
      tachyon.sex,
      'は、',
      you.get_colored_name(),
      ' の担当',
      tachyon.uma_sex_title,
      'であり恋人の ',
      tachyon.get_colored_name(),
    ]);
    if (get('exp:32:性爱次数') > get('exp:32:睡奸次数')) {
      await tachyon.say_and_wait(
        '……まさか、やりすぎて薬が要る、ということかしら……い、いえ……相性の実験には必要だから、仕方ないわよね……',
      );
      await tachyon.say_and_wait(
        'それと、その……気持ちよかったから……多めに買っておいて。帰ってから使うのに便利でしょう❤️',
      );
    } else if (get('exp:0:性爱次数') > get('exp:0:睡奸次数')) {
      await tachyon.say_and_wait(
        'ちょ、ちょっと、誰かとするつもりじゃないでしょうね？……い、いえ、そんなはずは……これは……私とするために買うのよね？',
      );
      await tachyon.say_and_wait(
        '本当？ 嘘じゃない？……わかったわ。夜は期待しているから❤️',
      );
    } else {
      await tachyon.say_and_wait([
        callname,
        '……ええ、わかっているわ。付き合い始めた以上、その覚悟はできている……',
      ]);
      if (you.sex_code === 1) {
        await tachyon.say_and_wait(
          '聞いたところ、ヒトの男性の性欲はかなり強いそうね……正直、今まで我慢して来なかったことに驚いているくらい……',
        );
      }
      await tachyon.say_and_wait([
        '先に確認するわ。そんなことはしないと思っているけれど……この薬は、私とするために買うのでしょう？……',
        callname,
        '？',
      ]);
    }
    await tachyon.say_and_wait('とにかく、今日の品を見ていきましょう');
  },
  /**
   * タキオンがチームにいる、愛欲＆良好以上
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   * @param {boolean} is_first 初めて売店へ来たか
   */
  async start_lust(tachyon, you, callname, is_first) {
    if (is_first) {
      await tachyon.say_and_wait([callname, '？ ここで何をしているの？']);
    } else if (!get('exp:32:性爱次数')) {
      tachyon.say('……また来たの？ 今度は誰と……');
    } else {
      tachyon.say([
        'あれだけして、まだ足りないの……性豪ね、',
        callname,
        '。中身を解剖して研究したくなるわ',
      ]);
    }
    print([
      'ぶらついていた ',
      you.get_colored_name(),
      ' は、白衣を着て、怪しげな栗毛の',
      tachyon.uma_sex_title,
      'を見かけた。',
    ]);
    print([
      tachyon.sex,
      'の、ブラインドのような深紅の瞳には狂気と神秘が宿り、少し大きめの白衣は、内側にぶら下げた品々でパンパンに張っている。',
    ]);
    print([
      '挙動の怪しいその',
      tachyon.sex,
      'は、',
      you.get_colored_name(),
      ' の担当',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait([
        callname,
        '……ここが何を売っているか、わかっているのでしょう……つまり……あ、あなたには、そういう相手がいるの？',
      ]);
      await printAndWait([
        tachyon.get_colored_name(),
        ' は、なぜか緊張した顔で尋ねた',
      ]);
      printButton('もちろんいる', 1);
      printButton('いない', 2);
      if ((await input()) === 1) {
        await tachyon.say_and_wait([
          'ほう？ 相手は誰？ 全身が光っているような怪しいあなたを気に入る人がいるの？ ヒト？ それとも',
          tachyon.uma_sex_title,
          '？',
        ]);
        await tachyon.say_and_wait(
          'いえ、これは生物多様性の考察よ。好きな相手の情報を出すのは、モルモットとしての最低限の情報共有……',
        );
        await tachyon.say_and_wait(
          'まあいいわ。いつか聞き出す機会はあるでしょう',
        );
      } else {
        await tachyon.say_and_wait(
          '……ふふ、予想どおりね。全身が光っているような怪しいあなたを好きになる人がいたら、むしろ観察研究したいくらい。',
        );
        await tachyon.say_and_wait([
          'ただ、そうなると薬を求める理由が不可解ね。ねえ、',
          callname,
          '。犯罪まがいのことはしないでしょうね',
        ]);
        await tachyon.say_and_wait(
          'それにしても、薬の反応のフィードバックがしばらく来ていない気がする……',
        );
        await tachyon.say_and_wait(
          'まあいいわ。好きに使いなさい。研究のためなら、どんな代償も試す価値がある……私自身であってもね',
        );
        await tachyon.say_and_wait(
          '何を示唆しているか、ですって？ ふふ、さあね。鈍感な誰かに、この意味が通るかは知らないけれど',
        );
      }
    }
    tachyon.say('とにかく、今日の品を見ていきましょう');
  },
  /**
   * タキオンがチームにいる、低恋慕＆冷淡以上、初めて売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   */
  async start_first(tachyon, you, callname) {
    await tachyon.say_and_wait(['おや、', callname, ' じゃない']);
    await printAndWait([
      'ぶらついていた ',
      you.get_colored_name(),
      ' は、白衣を着て、怪しげな栗毛の',
      tachyon.uma_sex_title,
      'を見かけた。',
    ]);
    await printAndWait([
      tachyon.sex,
      'の、ブラインドのような深紅の瞳には狂気と神秘が宿り、少し大きめの白衣は、内側にぶら下げた品々でパンパンに張っている',
    ]);
    await printAndWait([
      '挙動の怪しいその',
      tachyon.sex,
      'は、',
      you.get_colored_name(),
      ' の担当',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    await tachyon.say_and_wait(
      'まさか、そういう人だったとは……まあいいわ。食色性なり、ね。わざわざ薬まで買いに来るとは、',
    );
    await tachyon.say_and_wait([
      '普段の薬量は倍にしたほうがいいかしら……とにかく言いなさい。どの',
      tachyon.uma_sex_title,
      'に目をつけたの？',
    ]);
    printButton('答える', 1);
    printButton('首を振って拒む', 2);
    if ((await input()) === 1) {
      print('相手の名前を入力：');
      let _default = false;
      switch (await input()) {
        case '爱丽速子':
        case '速子':
        case 'アグネスタキオン':
        case 'タキオン':
        case '你':
        case '妳':
        case 'あなた':
        case '君':
          if (get('relation:32:0') <= 150) {
            await tachyon.say_and_wait([
              '……',
              callname,
              '。そういう冗談は、口にしないほうがいいわ',
            ]);
            await printAndWait([
              tachyon.sex,
              'は作り笑いを浮かべたが、瞳ははっきりと警告していた',
            ]);
            await printAndWait([
              'この質問は ',
              tachyon.get_colored_name(),
              ' を怒らせたようだ。言わないほうがいい……',
            ]);
          } else {
            await tachyon.say_and_wait(
              'そんなに私を気に入っているなら、明日この薬を試してみなさい。',
            );
            await tachyon.say_and_wait([
              'なぜか、これを飲んだ人はみな、美しい',
              tachyon.teen_sex_title,
              'の姿が見えると言うわ。その美しい',
              tachyon.teen_sex_title,
              '以外は、世界が肉塊に見えるらしい……',
            ]);
            await tachyon.say_and_wait(
              'おかしいわね。視力を上げる薬のはずなのに、どうしてそうなるのかしら',
            );
            await printAndWait([
              tachyon.sex,
              'は ',
              you.get_colored_name(),
              ' の言葉を軽く流した。本気にはしていないらしい',
            ]);
          }
          break;
        case '曼城茶座':
        case '茶座':
        case 'マンハッタンカフェ':
        case 'カフェ':
          // カフェとして開始した場合は発火しない
          if (get('cflag:0:模版角色') !== 25) {
            await tachyon.say_and_wait('カフェだと……！');
            await printAndWait([
              tachyon.get_colored_name(),
              ' は、なぜか感心した顔をした',
            ]);
            await tachyon.say_and_wait(
              '欲しいものは好きに取りなさい！ 八割……いや七割よ！ ただし、一部始終を記録すること！',
            );
            await tachyon.say_and_wait(
              '実験報告の書式で書いて……やめ、全部録画しなさい！',
            );
            await tachyon.say_and_wait(
              'ククク……実験以外に、あの子が情欲に溺れるところまで見られるなんて……面白すぎる！',
            );
            await printAndWait([
              you.get_colored_name(),
              ' は ',
              tachyon.get_colored_name(),
              ' の連射に驚き、急いで',
              tachyon.sex,
              'の提案を断った',
            ]);
            await tachyon.say_and_wait('くっ……拒否？ まあいいわ');
            await printAndWait([
              tachyon.get_colored_name(),
              ' はがっかりしてため息をつき、白衣の内側を探り始めた',
            ]);
            await tachyon.say_and_wait([
              'それなら……これをあげるわ、',
              callname,
              '。',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' は ',
              tachyon.get_colored_name(),
              ' から臓器提供同意書を受け取った。提供先は ',
              tachyon.get_colored_name(),
              ' の研究室だった',
            ]);
            printButton('……', 1);
            await input();
            await tachyon.say_and_wait([
              'カフェなら、死体を弄ぶ趣味はないはず。八割くらいは研究用に残してくれるでしょう。あとで',
              tachyon.sex,
              'と話して、きれいに切ってもらうとして……',
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' は冷や汗をかき、ニコニコとそれを口にする ',
              tachyon.get_colored_name(),
              ' を見た',
            ]);
            await tachyon.say_and_wait(
              'ハハハ、冗談よ……でも、念のためサインしておく？',
            );
          } else {
            _default = true;
          }
          break;
        case '大和赤骥':
        case '大和':
        case '赤骥':
        case 'ダイワスカーレット':
        case 'ダイワ':
        case 'スカーレット':
          // ダイワとして開始した場合は発火しない
          if (get('cflag:0:模版角色') !== 9) {
            await tachyon.say_and_wait([
              '……',
              callname,
              '。念のため聞くわ。明日が人生最後の日なら、何色の薬が飲みたい？',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              ' は、ほとんど冷酷な目で ',
              you.get_colored_name(),
              ' を見た',
            ]);
            printButton('「……！？」', 1);
            printButton('「命だけは！」', 2);
            tachyon.sex_code - 1 &&
              printButton('「せめてダイワの胸の中で死なせて！」', 3);
            await input();
            await tachyon.say_and_wait([
              'ふふ……冗談よ……でも ',
              callname,
              '、山と海、どちらが好き？',
            ]);
            await tachyon.say_and_wait(
              'いいえ、そんな愚問を聞く私はどうかしているわ。やはり研究室のホルマリンがお気に入りでしょう？',
            );
            await printAndWait([
              tachyon.get_colored_name(),
              ' の目は、冗談には見えなかった……',
            ]);
          } else {
            _default = true;
          }
          break;
        case '森林宝穴':
        case '宝穴':
        case 'ジャングルポケット':
        case 'ポケット':
          // ポケットとして開始した場合は発火しない
          if (get('cflag:0:模版角色') !== 94) {
            await tachyon.say_and_wait([
              '……',
              callname,
              '。馬鹿を犯すのは違法よ？',
            ]);
            await printAndWait([
              tachyon.get_colored_name(),
              ' は、屑を見るような目で ',
              you.get_colored_name(),
              ' を見た',
            ]);
            await tachyon.say_and_wait([
              '商人であり狂科学者としては、余計な口は出すまいと思っていたけれど、通報したくなってきたわ、',
              callname,
            ]);
            await printAndWait([
              you.get_colored_name(),
              ' は苦笑いするしかなかった',
            ]);
          } else {
            _default = true;
          }
          break;
        default:
          _default = true;
      }
      if (_default) {
        await tachyon.say_and_wait(
          'ほう……面白い。なら、使用後のデータと情緒の変化を、報告の体裁で提出しなさい',
        );
        await printAndWait([
          tachyon.get_colored_name(),
          ' は興味深そうに見えたが、',
          you.get_colored_name(),
          ' には、それが実験データへの興味だけだとわかった',
        ]);
      }
    } else {
      await tachyon.say_and_wait(
        'そんなに恥ずかしがらなくても。他人には言わないわ',
      );
      await printAndWait([tachyon.get_colored_name(), ' は興ざめした顔をした']);
    }
    await tachyon.say_and_wait('とにかく、今日の品を見ていきましょう');
  },
  /**
   * タキオンがチームにいる、疑念、売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   */
  start_doubt(tachyon, you) {
    tachyon.say('……来たわね。今度は誰を害するつもり？');
    print([
      'ぶらついていた ',
      you.get_colored_name(),
      ' は、白衣を着て、頬を赤らめた栗毛の',
      tachyon.uma_sex_title,
      'を見かけた',
    ]);
    print([
      tachyon.sex,
      'の、ブラインドのような深紅の瞳には狂気と神秘が宿っていたが、',
      you.get_colored_name(),
      ' を見た瞬間、汚物を見る目に変わった。少し大きめの白衣は、内側にぶら下げた品々でパンパンに張っている。',
    ]);
    tachyon.say(
      'ちっ……本気で言うけれど、あなたのような相手に薬を売っていいのかしら。同じことを何十回も考えているわ',
    );
    tachyon.say('まあいい。今日の品は自分で見なさい');
  },
  /**
   * タキオンがチームにいる、失望、売店へ
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   */
  start_hate(tachyon, you) {
    tachyon.say('……ちっ');
    print([
      'ぶらついていた ',
      you.get_colored_name(),
      ' は、白衣を着て、怪しげな栗毛の',
      tachyon.uma_sex_title,
      'を見かけた。',
      tachyon.sex,
      'の、ブラインドのような深紅の瞳には狂気と神秘が宿っていたが、',
    ]);
    print([
      you.get_colored_name(),
      ' を見た瞬間、憎しみの色に変わった。少し大きめの白衣は、内側にぶら下げた品々でパンパンに張っている。',
    ]);
    print([
      '憎しみの目で ',
      you.get_colored_name(),
      ' を見るその',
      tachyon.sex,
      'は、',
      you.get_colored_name(),
      ' の担当',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      'もっと使いやすい実験動物がいれば、これらの薬に、生きているのが苦痛になるようなものを混ぜたくなるわ',
    );
    print([tachyon.sex, 'は平気で危ういことを口にした']);
    tachyon.say('自分で見なさい。金を置いたら、さっさと消えなさい');
  },
  /**
   * タキオンがチームにいる、汎用
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname タキオンからプレイヤーへの呼び名
   */
  async start(tachyon, you, callname) {
    tachyon.say(['おや、', callname, ' じゃない']);
    print([
      'ぶらついていた ',
      you.get_colored_name(),
      ' は、白衣を着て、怪しげな栗毛の',
      tachyon.uma_sex_title,
      'を見かけた。',
    ]);
    print([
      tachyon.sex,
      'の、ブラインドのような深紅の瞳には狂気と神秘が宿り、少し大きめの白衣は、内側にぶら下げた品々でパンパンに張っている。',
    ]);
    print([
      '挙動の怪しいその',
      tachyon.sex,
      'は、',
      you.get_colored_name(),
      ' の担当',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    tachyon.say(
      'もう雛鳥ではないでしょう。何をする場所かわかっているわよね？ 欲しい薬は言いなさい。飲んだ翌日には、実験結果を忘れずに提出すること',
    );
    printButton('「もう実験だと言い切るのか……」', 1);
    printButton('「実験薬なら、金は取らないだろう」', 2);
    await input();
    tachyon.say([
      'ふーん～～ 買う薬に、生殖器が光る、全身の肌が透ける、出す精が強酸性、といった実験用を混ぜても構わないなら、タダでもいいわよ',
    ]);
    print([you.get_colored_name(), ' は素直に財布を出した']);
    tachyon.say('それでいいのよ。では、今日の品を見ていきましょう');
  },
  /**
   * タキオンがチームにいる場合の売店導入の締め。どの分岐も最後はこの一文
   * @param {CharaTalk} tachyon タキオン
   */
  async start_final_welcome(tachyon) {
    await printAndWait([
      tachyon.get_colored_name(),
      ' は',
      tachyon.sex,
      'の白衣を開いた……',
    ]);
  },
  /**
   * タキオンがチームにいない、純粋な初見
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   */
  async start_first_out_of_team(tachyon, you) {
    await tachyon.say_as_unknown_and_wait(
      'おや、新しい肥えた羊……いえ、モルモット……つまり、お客様ね',
    );
    await printAndWait([
      'ぶらついていた ',
      you.get_colored_name(),
      ' は、白衣を着て、怪しげな栗毛の',
      tachyon.uma_sex_title,
      'に出会った',
    ]);
    await printAndWait([
      tachyon.sex,
      'の、ブラインドのような深紅の瞳には狂気と神秘が宿り、',
    ]);
    await printAndWait(
      '少し大きめの白衣は、内側にぶら下げた品々でパンパンに張っている。',
    );
    await tachyon.say_as_unknown_and_wait(
      'ハハハ。ここまで来た以上、ここが何をする場所か、わかっているでしょう。',
    );
    printButton('「わからない」', 1);
    printButton('「……わからない」', 2);
    printButton('「わかっている」', 3);
    switch (await input()) {
      case 1:
        await tachyon.say_as_unknown_and_wait(
          'おや、純真な子羊君？ 構わないわ。見ればわかる。',
        );
        break;
      case 2:
        await tachyon.say_as_unknown_and_wait(
          'ふふ。誰も信じない嘘をつく必要はないでしょう。不誠実ね。',
        );
        break;
      case 3:
        await tachyon.say_as_unknown_and_wait(
          '正直ないい子……いえ、この場合は悪い子、かしら？',
        );
    }
    await tachyon.say_as_unknown_and_wait('では、今日の品を見せましょう。');
    await printAndWait([
      '栗毛の',
      tachyon.uma_sex_title,
      'は',
      tachyon.sex,
      'の白衣を開いた……',
    ]);
  },
  /**
   * タキオンがチームにいないが、募集の第一環は済んでいる
   * @param {CharaTalk} tachyon タキオン
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} is_first 初めて売店へ来たか
   */
  async start_out_of_team(tachyon, you, is_first) {
    if (is_first) {
      await tachyon.say_as_unknown_and_wait(
        'おや、新しい肥えた羊……いえ、モルモット……つまり、お客様ね',
      );
    } else {
      tachyon.say(
        'おや、またあなたね、お客様君。トレーナーとは、そんなに乱れた職業なの？ ちっちっ',
      );
    }
    print([
      'ぶらついていた ',
      you.get_colored_name(),
      ' は、白衣を着て、怪しげな栗毛の',
      tachyon.uma_sex_title,
      'を見かけた。',
    ]);
    print([
      tachyon.sex,
      'の、ブラインドのような深紅の瞳には狂気と神秘が宿り、少し大きめの白衣は、内側にぶら下げた品々でパンパンに張っている。',
    ]);
    print([
      'そんな',
      tachyon.sex,
      'は、学園でも名高い問題児、',
      tachyon.get_colored_name(),
    ]);
    if (is_first) {
      await tachyon.say_and_wait(
        'おや？ どこかで見た顔ね……ええ、間違っていなければ、あなたはトレーナーでしょう',
      );
      printButton('「違う」', 1);
      printButton('「……違う」', 2);
      printButton('「そうだ」', 3);
      switch (await input()) {
        case 1:
          await tachyon.say_and_wait(
            'ん？ 覚え違いかしら？……それとも、闇市で会った……',
          );
          await printAndWait([
            tachyon.get_colored_name(),
            ' は、ぞっとする単語をつぶやいた',
          ]);
          break;
        case 2:
          await tachyon.say_and_wait([
            'ハハハ、安心しなさい！ この件では口は堅いわ。担当の',
            tachyon.uma_sex_title,
            'には言わない',
          ]);
          await printAndWait([
            tachyon.get_colored_name(),
            ' は「わかっている」という謎めいた微笑を浮かべた',
          ]);
          break;
        case 3:
          await tachyon.say_and_wait([
            '……そんなに素直に認めるのね。担当の',
            tachyon.uma_sex_title,
            'が哀れになってきたわ',
          ]);
          await printAndWait([tachyon.get_colored_name(), ' は呆れた顔をした']);
      }
    }
    tachyon.say('とにかく、今日の品から見ましょう。');
    await printAndWait([
      tachyon.get_colored_name(),
      ' は',
      tachyon.sex,
      'の白衣を開いた……',
    ]);
  },
  /**
   * 売店を離れる、愛欲＆良好以上、購入が3点未満
   * @param {CharaTalk} tachyon タキオン
   */
  end_love_buy_few(tachyon) {
    tachyon.say(
      'ええ……そんなに少なくて足りるの？ 何？ 能力を疑っている、ですって？ いいえ、そういう意味ではないわ……たっぷり罰してくれる？ ふふ、なら夜を楽しみにしているわね❤️',
    );
  },
  /**
   * 売店を離れる、愛欲＆良好以上、購入が10点超
   * @param {CharaTalk} tachyon タキオン
   */
  end_love_buy_many(tachyon) {
    tachyon.say(
      '！？ こんなに買うなんて……持たないんじゃないかしら……ふふ、楽しみね。しかも終わったあと、薬の変化をいちばん直接感じられる……',
    );
    tachyon.say('今夜は、たっぷり楽しませてもらうわ❤️……');
  },
  /**
   * 売店を離れる、購入が3点未満
   * @param {CharaTalk} tachyon タキオン
   * @param {boolean} is_first 初めて売店へ来たか
   */
  end_buy_few(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown('おや、そんなに少なくて足りるの？');
      tachyon.say_as_unknown(
        'いいえ、好奇よ。こういうものは個体差もあるでしょう。できれば実験数は多いほうが……なんでもないわ',
      );
    } else {
      tachyon.say('おや、そんなに少なくて足りるの？');
      tachyon.say(
        'いいえ、好奇よ。こういうものは個体差もあるでしょう。できれば実験数は多いほうが……なんでもないわ',
      );
    }
  },
  /**
   * 売店を離れる、購入が10点超
   * @param {CharaTalk} tachyon タキオン
   * @param {boolean} is_first 初めて売店へ来たか
   */
  end_buy_many(tachyon, is_first) {
    if (is_first) {
      tachyon.say_as_unknown(
        'おや、こんなに買うの？ いいえ、好奇よ。こういうものは個体差もあるのでしょう？……',
      );
      tachyon.say_as_unknown(
        'ついでに個人的な希望だけど、次回は使用評価も添えてほしいわ。正規の実験報告の書式なら、なおいい',
      );
    } else {
      tachyon.say(
        'おや、こんなに買うの？ いいえ、好奇よ。こういうものは個体差もあるのでしょう？……',
      );
      tachyon.say(
        'ついでに個人的な希望だけど、次回は使用評価も添えてほしいわ。正規の実験報告の書式なら、なおいい',
      );
    }
  },
};
