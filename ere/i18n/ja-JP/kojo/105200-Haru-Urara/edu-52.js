/**
 * @file ハルウララ - 育成
 * @author 99
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { gacha, get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {string} callname ハルウララからプレイヤーへの呼び方
   */
  async train(urara, callname) {
    const buffer = [
      () => urara.say_and_wait('任せて！ いくよ！'),
      () => urara.say_and_wait(`おっ！ いくよ、${callname}！`),
      () => urara.say_and_wait('がんばるよ！'),
      () => urara.say_and_wait('今度はいける気がする！ はじめるよ！'),
      () => urara.say_and_wait('よーし！ ウララ、がんばるよ！'),
    ];
    await get_random_entry(buffer)();
  },
  ts_add: (() => {
    const title = '追加の自主トレ！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 ハルウララからテイエムオペラオーへの呼び方
     * @param {PrintedSpan} callname_15 テイエムオペラオーからプレイヤーへの呼び方
     */
    const f = async (urara, opera, you, callname, call_15, callname_15) => {
      await era.printAndWait([
        'きょうのトレーニングが終わると、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' と並んで、トレセンのコース脇でひと息ついた。',
      ]);
      await urara.say_and_wait([
        'きょうもいっぱい練習したね！',
        callname,
        '、あとで食堂、行こ……ん？ あそこにいるの、だれ？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' が耳をぴくぴくさせた先をたどると、',
        you.get_colored_name(),
        ' は、コースに立つもうひとりの姿を見つけた。',
      ]);
      await urara.say_and_wait([
        'あっ！ ',
        call_15,
        'だ！',
        call_15,
        ' も、もう休むの？',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'が相手の前で足を止めると、芝居がかった覇王も ',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' のほうへ向き直った。',
      ]);
      await opera.say_and_wait([
        'おお！ ウララと ',
        callname_15,
        ' ではないか！ 我はこれから走らん！ 黄昏の星と共に！',
      ]);
      await urara.say_and_wait([
        '黄昏の星と一緒に走るの？ すっごく ',
        call_15,
        ' らしい！ かっこいい！',
      ]);
      if (era.get('cflag:15:殿堂') > 0) {
        await opera.say_and_wait(
          'さて、いかに？ 星空の下で再び輝きを磨くためか？ 怠惰のあと、迷いを払うためか？',
        );
        await urara.say_and_wait(
          'なるほど！ ウララ、わかったよ！ おとなにも、おとなのたいへんなことがあるんだね～',
        );
      } else {
        await opera.say_and_wait(
          'そのとおり！ 星々の輝きで、この美貌と両脚を磨き上げる！ 明日の輝きのために！',
        );
        await urara.say_and_wait([
          'そうなんだ！ ウララ、わかった！ そんなにがんばる ',
          call_15,
          '、やっぱりすごい！',
        ]);
      }
      await urara.say_and_wait([
        'ん……じゃあ、',
        callname,
        '、まだ時間あるし、ウララたちもやってみる？',
      ]);
      era.printButton('「行こう。一緒にやってみよう」', 1);
      era.printButton('「しっかり休むのも大事だよ？」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' が ',
          urara.get_colored_name(),
          ' に答えたのを聞くと、',
          opera.get_colored_name(),
          ' はすぐさま空気を察して、指を鳴らした。',
        ]);
        await opera.say_and_wait([
          `歓迎しよう！ だが、最も輝く王座${era.get('love:15') >= 90 ? 'と最愛の眷属' : ''}は譲らんぞ——全力で奪いに来るがいい！`,
        ]);
        await urara.say_and_wait([
          'うん！ ',
          call_15,
          ' がそういうなら、ウララも全力で追いつくよ！',
        ]);
        await opera.say_and_wait([
          'ファ──ハハハ！ 今日の走り、相当おもしろそうだ！ そうだろう、',
          callname_15,
          '？',
        ]);
        await era.printAndWait([
          '案の定、',
          opera.get_colored_name(),
          ' のペースにはついていけなかったが、',
          urara.get_colored_name(),
          ' は最後まで踏ん張って、追加トレーニングを走り切った。',
        ]);
      } else {
        await urara.say_and_wait([
          'えっ？ そうなの？ ',
          callname,
          ' なら、ぜったいいいって言うと思ってた……',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' が首をかしげると、すぐさま ',
          opera.get_colored_name(),
          ' がわかったふうな口調で諭した。',
        ]);
        await opera.say_and_wait(
          'そのとおり！ 休まぬ者の輝きは陰る。我も同じだ、昨日は薔薇の花びら湯で悠々と寛いだぞ！',
        );
        await urara.say_and_wait(
          'おっ！ わかった！ 強くなるために、ちゃんと休む！ でも、薔薇の花びら湯……？',
        );
        await era.printAndWait([
          'さいごに ',
          opera.get_colored_name(),
          ' が、あとで薔薇を少し分けてやると約束すると、',
          urara.get_colored_name(),
          ' は ',
          opera.get_colored_name(),
          ' に手を振ってから、',
          you.get_colored_name(),
          ' の手を引いて食堂へ走っていった……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {string} callname ハルウララからプレイヤーへの呼び方
   * @param {number} train トレーニング種別。0-5 はスピード・スタミナ・パワー・根性・賢さ
   */
  tf_message(urara, callname, train) {
    switch (train) {
      case attr_enum.speed:
        urara.say('えっ？ なんでこんなとこに……？ 動けない……');
        break;
      case attr_enum.endurance:
        urara.say('……は、はあっ……あたま、くらくらする……');
        break;
      case attr_enum.strength:
        urara.say(['み、みて ', callname, '、お空にちっちゃい星が光ってる……']);
        break;
      case attr_enum.toughness:
        urara.say([callname, '……引っ張って～～']);
        break;
      case attr_enum.intelligence:
        urara.say('ねむい……ぐぅ……');
    }
  },
  train_fail: (() => {
    const title = '体を大切に！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        'トレーニングの途中で ',
        urara.get_colored_name(),
        ' の様子がおかしいのに気づき、',
        you.get_colored_name(),
        ' は',
        urara.sex,
        'を保健室へ連れていって診た。',
      ]);
      await era.printAndWait(
        '保健室は空いていたが、身体検査くらいならトレーナーでもなんとかなる。',
      );
      await era.printAndWait([
        'ただ、いつもは頑丈な小さな',
        urara.uma_sex_title,
        'は、',
        you.get_colored_name(),
        ' の心配をどこか他人事にしていた。',
      ]);
      await urara.say_and_wait([
        'ウララ、だいじょうぶだよ。こんなの、たいしたことない！',
        callname,
        ' って、心配性だね。',
      ]);

      await urara.say_and_wait(
        '心配しなくていいよ。ここ押されてもウララは……いたっ！',
      );
      era.printButton('「……けっこう痛そうじゃないか」', 1);
      era.printButton('「やっぱり、しっかり静養しよう？」', 2);
      const ret = await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' が、脚の腫れっぽいところをそっと押すと、小さな',
        urara.uma_sex_title,
        'はいきなり痛がって、涙目のまま動きを止めた。',
      ]);
      await urara.say_and_wait(
        'あうっ……な、なんでそんなに怒るの？ ほんと、ぜんぜん痛くないってば……',
      );
      await era.printAndWait([
        '急に厳しくなった ',
        you.get_colored_name(),
        ' を、しょんぼりした目で見上げる。',
        urara.get_colored_name(),
        ' の涙のたまった瞳は、まだきょとんとしていた。',
      ]);
      await urara.say_and_wait('ほら！ こうしても、なんともないよ……いたっ！');
      await era.printAndWait([
        urara.get_colored_name(),
        ' のばたつきでぶつけたつま先を押さえつつ、',
        you.get_colored_name(),
        ' は小さな',
        urara.uma_sex_title,
        'の額を軽く弾いた。',
      ]);

      era.printButton(
        '「それ以上動いたら、本当に怒るぞ？ 体を壊したら勝てない」',
        1,
      );
      await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '二度の痛みに、',
          you.get_colored_name(),
          ' の注意が重なって、小さな',
          urara.uma_sex_title,
          'の落ち着かない耳が、しょんぼりと垂れた。',
        ]);
        await urara.say_and_wait(
          '……うっ、わかった……気をつける！ ウララを傷つけるものなんてないよ！ いたいのないか……',
        );
        await urara.say_and_wait([
          'あっ……',
          callname,
          '、つま先のほう……さっきから、ちょっと痛い……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はすぐ、小さな',
          urara.uma_sex_title,
          'の足を持ち上げて確かめた。さっきぶつけたところが、やはり少し腫れている……',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' の新しい傷にも薬を塗って包むと、',
          you.get_colored_name(),
          ' は',
          urara.sex,
          'を、その日はしっかり休ませることにした。',
        ]);
      } else {
        await era.printAndWait([
          'そう言っても、小さな',
          urara.uma_sex_title,
          'の落ち着かない尻尾は、かえって激しく揺れた。',
        ]);
        await urara.say_and_wait(
          '……わかった！ 走ってるときも、お勉強のときも、ウララ、これから気をつける！',
        );
        await urara.say_and_wait(
          'だから……トレーニング、つづけていい？ かんたんなやつなら、もうけがしないよね！',
        );
        await urara.say_and_wait([
          'だってウララも、ちゃんと一着がほしいの！ だから ',
          callname,
          ' に、気をつけるって知っててほしい！',
        ]);
        await era.printAndWait([
          '……そこまで言うなら。',
          you.get_colored_name(),
          ' はため息をついて、',
          urara.get_colored_name(),
          ' の傷を手当てしてから、慎重にトレーニングを再開した。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '無理は禁止！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張るを選ぶと再び失敗するか
     */
    const f = async (urara, you, callname, fail_again) => {
      await era.printAndWait([
        urara.get_colored_name(),
        ' がトレーニング中に思いきり転んでしまったので、',
        you.get_colored_name(),
        ' はすぐ',
        urara.sex,
        'を抱きかかえて保健室へ運んだ。',
      ]);
      await era.printAndWait([
        'どきどきしながら診てもらった結果、大事はないと聞いて、',
        you.get_colored_name(),
        ' も ',
        urara.get_colored_name(),
        ' も肩を落として安堵した。',
      ]);
      await urara.say_and_wait(
        'ふぅ～、ただの軽いケガでよかった。お医者さんの顔、すっごくこわかったから、注射かと思った！',
      );
      await urara.say_and_wait(
        'えへへ～。注射のほうがよっぽど痛いし、こんな小さい傷ならだいじょうぶ！',
      );

      await urara.say_and_wait([callname, '、帰ったらトレーニングつづけて——']);
      era.printButton('「とにかく、今はしっかり休もう」', 1);
      era.printButton('「無理はだめだ。今日は帰って休め！」', 2);
      const ret = await era.input();
      await era.printAndWait([
        'まだ歩き方がぎこちない',
        urara.sex,
        'を見て、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' の言葉を最後まで聞かず、すぐその願いを断った。',
      ]);
      if (ret === 1) {
        await urara.say_and_wait(
          '休むの？ でもウララ、まだ元気だよ。トレーニング、だめ？',
        );

        era.printButton('「どうしたって、心配なんだよ」', 1);
        await era.input();

        await urara.say_and_wait(
          'ん……そっか。わかった！ ウララ、ちゃんと休む！',
        );
        await urara.say_and_wait([
          callname,
          ' がそんなにしょんぼりしてると、ウララも悲しいから。悲しまないで？',
        ]);
        await urara.say_and_wait(
          'ちゃんと休むだけなのに……みんなはトレーニングしてるし、ウララだけ置いていかれるみたい……',
        );
        await urara.say_and_wait(
          'そう思うと、体中がむずむずする。休むの、注射と同じくらい大変かも……',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' はつまんなそうだったが、そのあと',
          urara.sex,
          'の傷はたしかに良くなっていった。',
        ]);
      } else {
        await urara.say_and_wait([
          'えっ？',
          callname,
          '、な、なんで急に怒ったの？',
        ]);

        era.printButton('「……先生、傷がひどくなると注射より痛いって」', 1);
        await era.input();

        await urara.say_and_wait(
          'なーんだ。ウララ、もう子供じゃないよ。そんなに痛くてもへいきだよ！',
        );
        if (fail_again) {
          await urara.say_and_wait([
            'それに ',
            callname,
            '、見て！ こうしてもウララ、ぜんぜんだいじょうぶ——うわっ！',
          ]);
          await urara.say_and_wait(['……い、痛い……痛いよ……', callname, '……']);
          await era.printAndWait([
            'だから言ったのに。泣き始めた小さな',
            urara.uma_sex_title,
            'を引っ張り上げ、',
            you.get_colored_name(),
            ' は黙って',
            urara.sex,
            'をすぐそこの保健室へ運び直した。',
          ]);
          await era.printAndWait([
            '案の定、',
            urara.get_colored_name(),
            ' は無理をして動いたせいで傷が悪化し、治るまでの時間も長くなった。',
          ]);
        } else {
          await urara.say_and_wait([
            '……ん？',
            callname,
            '？ 急に黙っちゃった。ほ、ほんとそんなにひどいの……？',
          ]);

          era.printButton('「子供じゃないウララはどう思う？」', 1);
          await era.input();

          await urara.say_and_wait(
            'そんなのひどい！ 休むのはつまらないけど……注射より痛い……注射より……',
          );
          await urara.say_and_wait([
            urara.get_colored_name(),
            '、すぐ治すから！ だから走れるまで……',
            callname,
            '、ずっとそばにいてくれる……？',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            ' の傷が治るまでにはかなりかかったが、',
            urara.sex,
            'は無事に元気を取り戻した。',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = 'レース前の応援';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, callname) => {
      const buffer = [
        () => urara.say_and_wait('よーし！ 出るよ──！'),
        () => urara.say_and_wait('みんな、すごそう！ じゃあウララも負けない！'),
        () =>
          urara.say_and_wait(
            `${callname}！ 今度も、ウララの走り、ちゃんと見ててね！`,
          ),
        () =>
          urara.say_and_wait('いつものように走ればいいんだよね？ わかった！'),
        () =>
          urara.say_and_wait(
            `心配しないで ${callname}。必死で走れば、ぜったいできる！`,
          ),
      ];
      switch (era.get('cflag:52:干劲')) {
        case -1:
          buffer.push(() =>
            urara.say_and_wait(
              'たくさんレースに出るのは楽しいけど、いま体が重い……',
            ),
          );
          break;
        case -2:
          buffer.push(() => urara.say_and_wait('またレースだ……わ、がんばる……'));
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_start_high_moti: (() => {
    const title = '武者震い';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait([
        'おっ——！',
        callname,
        '！ きょう、力いっぱいだよ！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' のそばで、',
        urara.get_colored_name(),
        ' は目を輝かせて前方を見ていた。',
      ]);

      era.printButton('「じゃあ、あとで気合い入れていこう！」', 1);
      era.printButton('「ああ。成長したところを、みんなに見せてやれ」', 2);
      await era.input();

      await urara.say_and_wait('うん！ みんなの期待、ぜったい応えるよ！');
      await era.printAndWait([
        urara.get_colored_name(),
        ' は弾むように一歩跳び、そのままレースの場へ駆けていった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'レース勝利！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      let buffer = [
        () =>
          urara.say_and_wait(
            `ん？ えっ……やった！ 勝った！ ${callname}！ 見た？ 勝ったよ！`,
          ),
        () => urara.say_and_wait('わぁ……！ 一着とった！ ほんとにとったよ！'),
        () =>
          urara.say_and_wait(
            'できたよ！ 一着ってことは、みんなの期待が届いたってことだよね！',
          ),
        () =>
          urara.say_and_wait(
            `${callname}！ 見た？ いま、しゅーってゴールしたよ！`,
          ),
        () =>
          urara.say_and_wait(
            `やっぱりいつものままがいいんだ！ 今度も勝ったよ ${callname}！`,
          ),
        () => urara.say_and_wait('できた……できたよ！ ほんとうにできたよ！'),
      ];
      await get_random_entry(buffer)();
      era.drawLine();
      await era.printAndWait([
        '顔の汗を拭うと、',
        urara.get_colored_name(),
        ' はレースが終わるなり小走りで、',
        you.get_colored_name(),
        ' の待つ柵の前まで駆け寄った。',
      ]);
      await era.printAndWait([
        '歓声のなか、陽の光をいっぱい受けた小さな顔を上げて、小さな',
        urara.uma_sex_title,
        'はタオルと水を差し出す ',
        you.get_colored_name(),
        ' に、勝ち誇った笑顔を向けた。',
      ]);
      await urara.say_and_wait(
        'えへへ～。さっき、おじちゃんたちが万歳って言ってたみたい。ウララ、そんなにすごいの？',
      );

      await urara.say_and_wait([
        'ねえ、',
        callname,
        '！ いま見た？ ウララ、勝ったみたいだよ！',
      ]);
      era.printButton('「そうだ、ウララがやったんだ。今日は一着だ！」', 1);
      era.printButton(
        '「みんな喜んでるよ？ でも、次はもっと大事なことがある！」',
        2,
      );
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' に認めてもらえて、',
          urara.get_colored_name(),
          ' は嬉しそうに耳と尻尾を振り、かわいい笑顔をさらに輝かせた。',
        ]);
        await urara.say_and_wait(
          'やっぱり！ じゃ、みんなの笑顔のために、次もぜったい一着とる！',
        );
        await urara.say_and_wait([
          callname,
          ' もだよ！ だっていまの ',
          callname,
          ' の笑い顔、すっごくいいんだもん！',
        ]);
        await era.printAndWait(
          '勝ち誇って輝く桜色の瞳に、いま微笑んでいるみんなの顔が映っていた。',
        );
      } else {
        await era.printAndWait([
          '顔の汗をさっと拭うと、',
          urara.get_colored_name(),
          ' は耳をピンと立て、笑顔にも芯が通った。',
        ]);
        await urara.say_and_wait(
          'うん！ ウララもそう思う！ だって、まだ走り足りないもん！',
        );
        await urara.say_and_wait([
          callname,
          '、次はどんなレース？ ウララ、楽しみにしてていい？',
        ]);
        await era.printAndWait([
          '勝ち誇って輝く桜色の瞳に、',
          you.get_colored_name(),
          ' は、いつにもまして旺盛な火種を見た。',
        ]);
      }
      era.drawLine();
      buffer = [
        () =>
          urara.say_and_wait(
            `ライブ、はじまるよ！ ${callname}、楽しみ？ ウララも楽しみ！`,
          ),
        () =>
          urara.say_and_wait(
            'あとで、ちゃんと見ててね！ ダンスもがんばるから！',
          ),
        () =>
          urara.say_and_wait(
            'みんな、準備できてるみたい！ ウララもわくわくしてきた！',
          ),
      ];
      if (era.get('love:52') >= 75) {
        buffer.push(() =>
          urara.say_and_wait(
            `ウララもみんなに負けないよ！ ぜったい、ぜったい ${callname} を夢中にさせる！`,
          ),
        );
      }
      if (era.get('love:52') === 100) {
        buffer.push(() =>
          urara.say_and_wait(
            `${callname}！ ステージのうえでも、ずっとウララ見ててね！`,
          ),
        );
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '着順入り！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {number} rank 着順
     */
    const f = async (urara, you, callname, rank) => {
      const buffer = [
        () =>
          urara.say_and_wait('みんな、すごかった！ でも次はぜったい負けない！'),
        () =>
          urara.say_and_wait(
            '一着はとれなかったけど、やっぱり楽しかった！ また走ろうね！',
          ),
        () =>
          urara.say_and_wait(
            `えへへ～。今度は一着とれなかったけど、もっとがんばるから、${callname} も落ち込まないで！`,
          ),
      ];
      switch (rank) {
        case 2:
          buffer.push(() =>
            urara.say_and_wait(`見た ${callname}！ ウララ、二着だよ──！`),
          );
          break;
        case 3:
          buffer.push(() => urara.say_and_wait('三着だよ！ すごいでしょう！'));
      }
      await get_random_entry(buffer)();
      await era.printAndWait([
        '祝福の声のなか、',
        urara.get_colored_name(),
        ' は相変わらず笑顔のまま、',
        you.get_colored_name(),
        ' のいる柵まで小走りで寄ってきた。',
      ]);
      await urara.say_and_wait(
        'えへへ～。みんなとレースするの、やっぱり楽しい。それに、自分でも強くなったってわかるよ！',
      );
      await urara.say_and_wait(
        'いまのウララじゃ、一着にはまだ足りないけどね……',
      );

      await urara.say_and_wait([
        callname,
        ' はどう思う？ 今度、ちょっとだけだったよ！',
      ]);
      era.printButton('「お疲れ、ウララ。もう十分よくやった」', 1);
      era.printButton('「先に休もう。今度の感触はどうだった？」', 2);
      if ((await era.input()) === 1) {
        await urara.say_and_wait([
          'ありがとう、',
          callname,
          '！ でも今度、ちょっと悔しいな。どこが足りなかった？',
        ]);
        await urara.say_and_wait(
          'でも、このままがんばれば、次は一着とれるよね！',
        );
      } else {
        await urara.say_and_wait(
          '今度、すっごく楽しかった！ だんだん追いつけるようになったけど、まだちょっと！',
        );
        await urara.say_and_wait([
          'でもいま ',
          callname,
          ' に聞くのは早いよね。帰ってから？',
        ]);
      }
      era.printButton('「そうだな。帰ってから、次の対策を一緒に考えよう」', 1);
      await era.input();

      await urara.say_and_wait(
        'うん！ わかった！ ウララ、もっとがんばる。次の一着のために！',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = 'レース敗北！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      const buffer = [
        () =>
          urara.say_and_wait('みんな、すごかった！ でも次はぜったい負けない！'),
        () =>
          urara.say_and_wait(
            '一着はとれなかったけど、やっぱり楽しかった！ また走ろうね！',
          ),
        () =>
          urara.say_and_wait(
            `えへへ～。今度は一着とれなかったけど、もっとがんばるから、${callname} も落ち込まないで！`,
          ),
      ];
      await get_random_entry(buffer)();
      await era.printAndWait([
        'ふらふらと ',
        you.get_colored_name(),
        ' のそばへ来る。疲れのせいか、',
        urara.get_colored_name(),
        ' の汗まみれの笑顔は、どこか無理をしているようだった。',
      ]);
      await urara.say_and_wait('また負けちゃった。ちょっと、恥ずかしいな……');
      await urara.say_and_wait(
        '『きょうのみんな、はやーい』って思った次の瞬間、追い抜かれちゃった！',
      );
      await urara.say_and_wait(
        'でも聞こえたよ？ ウララへの応援、ずっと止まってなかった！',
      );

      await urara.say_and_wait(
        'ゴールまではがんばって走ったけど、ウララ、みんなの期待に応えられたかな……',
      );
      era.printButton('「落ち込むな。今度だって、ちゃんとやれている」', 1);
      era.printButton('「次は結果で、応えてやろう」', 2);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' に手伝ってもらい、タオルで顔の汗を拭くと、小さな',
        urara.uma_sex_title,
        'は ',
        you.get_colored_name(),
        ' の励ましに合わせて、力強くうなずいた。',
      ]);
      await urara.say_and_wait(
        'うん！ 一回負けただけだもん。まだ走れるならだいじょうぶ。次のレース、勝つためにがんばる！',
      );
      await era.printAndWait([
        '次に走るその日まで、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' は「次はぜったいにみんなを追い越す」と約束した。',
      ]);
      await urara.say_and_wait(
        'えへへ～。負け慣れはよくないってみんな言うけど、ウララはまだ走れるよ！',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '次は負けない！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait('走るの、楽しい。でも、ちょっと悔しいな……');

      await era.printAndWait([
        you.get_colored_name(),
        ' のそばにしょんぼりと寄り添う。きょうの ',
        urara.get_colored_name(),
        ' は、レースに負けていつもの笑顔をなくしていた。',
      ]);
      await urara.say_and_wait(
        'また負けちゃった……今度こそだいじょうぶだと思ってた……',
      );
      await urara.say_and_wait(
        'レースは楽しいけど、一着をとったときの気持ちは、やっぱりちがう！',
      );
      await urara.say_and_wait(
        '胸が熱くて、苦しくて。もう一回走れたらいいのに……',
      );

      urara.say([callname, '、こういうとき、どうしたら勝てるの？']);
      era.printButton('「気持ちを立て直して、次で悔しさを取り返すんだ」', 1);
      era.printButton('「焦るな。とにかく帰ってからトレーニングだ」', 2);
      if ((await era.input()) === 1) {
        await urara.say_and_wait(
          'うん！ 嫌な気持ちを闘志に変えればいいんだよね。みんなもそう言ってる！',
        );
        await urara.say_and_wait([
          '勝つまで、ぜったいゆるまない！',
          callname,
          ' も一緒に、悪いクセ直そう！',
        ]);
        await era.printAndWait([
          '帰り、お互いを見張るため、',
          you.get_colored_name(),
          ' のおやつまで ',
          urara.get_colored_name(),
          ' に削られてしまった。',
        ]);
      } else {
        await urara.say_and_wait(
          'そうだね。いまからがんばれば、次はぜったい勝てる！',
        );
        await urara.say_and_wait([
          'だから ',
          callname,
          '、いま帰ろう！ はやければ、きょうもトレーニングできるよね？',
        ]);
        await era.printAndWait([
          '帰り、',
          urara.get_colored_name(),
          ' は本当にすぐ ',
          you.get_colored_name(),
          ' を引っ張り、追加トレーニングを始めた。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  we_after_begin: (() => {
    const title = 'ウララとの接触';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await inner_urara.say_as_unknown_and_wait(
        '物語は、ここから本格的に始まる。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'これは、あなたと私たちが一緒に書く、あなたと私たちの物語。',
      );
      era.drawLine();
      await era.printAndWait([
        '身だしなみを整えて、高ぶる気持ちを抑え、',
        you.get_colored_name(),
        ' は平気を装ってトレーニング場へ上がった。',
      ]);
      await era.printAndWait('新しい担当との接触は、初期こそ慎重に。');
      await era.printAndWait(
        '大げさに聞こえるかもしれないが、トレーナー同士で口伝えされる大事な経験談だ。',
      );
      await era.printAndWait(
        '教科書には載らないが、お見合いと同じで、付き合い始めにいい印象を残すのが肝心、という話だ。',
      );
      await era.printAndWait(
        '部外者が「生徒との付き合いをお見合いに例えるのは危なくないか」と聞けば、答えは揃う。',
      );
      await era.printAndWait([
        '思春期真っ盛りの',
        urara.uma_sex_title,
        'との付き合いは、社会的には綱渡りも同然だからだ。',
      ]);
      await era.printAndWait([
        'だが、校庭へ踏み出す足取りの軽さどおり、今回の ',
        you.get_colored_name(),
        ' は心配いらないと思っていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が後になって問題に気づいて後悔するとしても、それはまだ先の話だ。',
      ]);
      await era.printAndWait([
        '「無邪気な小さな',
        urara.uma_sex_title,
        'が、純粋な夢を追っている」。そんな胸を熱くする構図に、何の危険があるというのか。',
      ]);
      await era.printAndWait([
        'それに ',
        urara.get_colored_name(),
        ' は「一着をとる」ことを心から望んでいる。',
        urara.sex,
        'ならやる気に満ちて、しっかり練習してくれるはずだ！',
      ]);
      await era.printAndWait([
        '「',
        urara.get_colored_actual_name(),
        '」という名の小さな',
        urara.uma_sex_title,
        'の願いを叶えたい気持ちを胸に、',
        you.get_colored_name(),
        ' は約束の場所へ向かった。',
      ]);
      await era.printAndWait('考えはよかったのだが……');
      await urara.say_and_wait([
        'あっ、',
        callname,
        'だ！ きょうからよろしくね！',
      ]);
      await era.printAndWait([
        '少し遅れて、元気いっぱいに、',
        urara.get_colored_name(),
        ' はかわいい笑顔で手を振りながら、',
        you.get_colored_name(),
        ' のそばで止まった。',
      ]);

      era.printButton('「今日から、一緒にがんばろう！」', 1);
      await era.input();

      await urara.say_and_wait('うん！ ウララ、いくよ！');
      await era.printAndWait([
        '準備運動を済ませ、',
        urara.get_colored_name(),
        ' はきょうのトレーニングを始めた。だが……',
      ]);
      await urara.say_and_wait([callname, '！ ここ、きれいな蝶々がいるよ！']);
      await you.say_and_wait('ああ、本当だ……ん？');
      await urara.say_and_wait([callname, '！ あの雲、なんか似てない？']);
      await you.say_and_wait('おっ！ 待て、そうじゃなくて……');
      await urara.say_and_wait([
        callname,
        '！ あっちの水、すごく大きな魚がいる！',
      ]);
      await you.say_and_wait('待て、話が全然つながっていないぞ？');
      await era.printAndWait([
        urara.get_colored_name(),
        ' に歩調をずらされた ',
        you.get_colored_name(),
        ' は、水面の自分の影を数秒見つめてから、ようやく我に返った。',
      ]);
      await era.printAndWait(
        'いまは……何周目だ？ いや、そもそもなぜ二人で川辺にいる？',
      );
      await era.printAndWait(
        '最初はトレセンのトレーニング場にいたはずだ。いったい何が……思い出せない？！',
      );
      await era.printAndWait([
        '西へ傾いた太陽をぼんやり見上げ、川へ飛び込んで魚を追う ',
        urara.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' は仕方なくため息をついた。',
      ]);
      await era.printAndWait([
        '一日中 ',
        urara.get_colored_name(),
        ' を追いかけてきた ',
        you.get_colored_name(),
        ' は考えるのをやめ、担当とのふざけ合いに加わった。',
      ]);
      await era.printAndWait([
        'どうせトレーニングの話はできない。なら、楽しんだほうがいい。',
        you.get_colored_name(),
        ' はそう諦めた。',
      ]);

      await era.printAndWait(
        'ふざけて一日の「貴重な時間」を使い果たし、トレーナーと担当は芝生に並んで倒れた。',
      );
      await urara.say_and_wait([
        'ん……大事なこと、忘れちゃったみたい！ ごめんね、',
        callname,
        '！',
      ]);
      await era.printAndWait([
        '芝生から起き上がり、',
        urara.get_colored_name(),
        ' はやっと何かを思い出した。小さな',
        urara.uma_sex_title,
        'の鈍い反応に、',
        you.get_colored_name(),
        ' は笑うしかなかった。',
      ]);
      await era.printAndWait(
        '急ぐこともない。正式に付き合い始めた初日だ。親睦を深める一環だと思えばいい。',
      );
      await era.printAndWait('ただ、本業は本業だ。');
      await era.printAndWait([
        urara.get_colored_name(),
        ' と並んで夕陽の芝生に座り、',
        you.get_colored_name(),
        ' は赤く染まる空を見る小さな',
        urara.uma_sex_title,
        'に尋ねた。',
      ]);

      era.printButton('「ウララ。一着がほしい、その根っこは何なんだ？」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' は口だけのかわいい',
        urara.child_sex_title,
        'ではない。',
        urara.sex,
        'のすることは、どれも本気だ。',
      ]);
      await era.printAndWait([
        '才能がないのはわかる。走りたい気持ちもはっきり見える。なのに今は、',
        urara.sex,
        'の「勝利」への執着が見えにくい。',
      ]);
      await era.printAndWait([
        '一着を',
        urara.uma_sex_title,
        'のすべてにするのは勧めないが、「勝つ」と決めた',
        urara.uma_sex_title,
        'は、たいてい一位に強いこだわりを持つ。',
      ]);
      await era.printAndWait([
        'だが ',
        urara.get_colored_name(),
        ' には、それが薄い。いや、',
        urara.sex,
        'の心には、一位より大事なものがあるのかもしれない。',
      ]);
      await era.printAndWait([
        'では、その大事なものとは？ ',
        urara.get_colored_name(),
        ' が自分をどこまで分かっているかはわからない。それでも試しに、',
        you.get_colored_name(),
        ' は正面から問いを投げた。',
      ]);
      era.printButton('「ウララは、一位が嫌いなのか？」', 1);
      await era.input();
      await era.printAndWait([
        '大人の問いには答えず、小さな',
        urara.uma_sex_title,
        'は逆に ',
        you.get_colored_name(),
        ' へ別の問いを返した。',
      ]);
      await urara.say_and_wait([callname, '、いま楽しい？']);
      await era.printAndWait([
        'ん？ 一緒に遊んだあとは、たしかに楽しい。だがこれは……？ ',
        you.get_colored_name(),
        ' が答える前に、小さな',
        urara.uma_sex_title,
        'は笑いながら続けた。',
      ]);
      await urara.say_and_wait(
        'ウララ、弱いのはわかってる。でも、走りたい！ だから、一着を目指すんだよ！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' のそばに軽く寄りかかり、',
        urara.get_colored_name(),
        ' は明るく笑う。',
        urara.teen_sex_title,
        'の桜色の瞳に、やさしい夕焼けが映っていた。',
      ]);
      await urara.say_and_wait(
        'いっぱい一位がほしいけど、大事なことを忘れちゃったら、何個とっても意味ないもん！',
      );

      era.printButton('「走る理由、か？」', 1);
      await era.input();

      await urara.say_and_wait('うん！ 走って、みんなを笑顔にしたいから！');
      await urara.say_and_wait(
        'でもウララ、トレーニングから逃げたいわけじゃないよ！ ちょっとよそ見したら、トレーニング中だって忘れちゃうだけ……',
      );
      await era.printAndWait([
        'なるほど。「',
        urara.get_colored_actual_name(),
        '」という',
        urara.uma_sex_title,
        'は、思ったより手がかかる。それでも',
        urara.sex,
        'は、自分が欲しいものをよく分かっている。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の一着への執着は、競技としての勝利そのものにはない。',
      ]);
      await era.printAndWait([
        '勝ちたくないわけではない。だが ',
        urara.get_colored_name(),
        ' にとって優勝は、走ることそのものほど大切ではない。それが',
        urara.sex,
        'のトレーニングを難しくしている理由のひとつだ。',
      ]);
      await era.printAndWait([
        '走るのは楽しいものであるべきだ。だから特別な才能がなくても、',
        urara.sex,
        'は安心して笑っていられる。',
      ]);
      await era.printAndWait([
        urara.sex,
        'は多くの者のように「自分を証明する」ためでも「流れに乗る」ためでもなく、場外の人たちにもっと気持ちを届けたいのだ。',
      ]);
      await era.printAndWait(
        '楽しさ、希望、悩んでいる見知らぬ人と初めて出会ったときの胸の高鳴り。',
      );
      await era.printAndWait(
        'だが外向きの感情だけに傾くのは「危ない」。トレーナーが担当を勝たせる役目すら、後回しになりかねない。',
      );
      await era.printAndWait(
        '考えは美しい。だが心が「強靭」でなければ、いつか他人の変化にも、自分の変化にも、意図の有無を問わず傷つくだろう。',
      );
      await era.printAndWait([
        'いまの ',
        urara.get_colored_name(),
        ' では、全力を出さなければ着順にも入れない。このままでは走り続けられない。',
      ]);
      await era.printAndWait([
        '気が散りやすいことと、三日坊主も一因だ。加えて、',
        urara.get_colored_name(),
        ' の競争心をきちんと起こす必要がある。',
      ]);
      await era.printAndWait('そうなると……');

      era.printButton(
        '「ウララの考えはわかった。ウララに合うトレーニング方針を立てる」',
        1,
      );
      await era.input();

      await era.printAndWait(
        'やはり堅実にいくなら、一から対策を組むのがいちばんだ。',
      );
      await urara.say_and_wait('漫画の主人公の、専用必殺技みたいな？');

      era.printButton('「そのとおり。漫画の主人公の専用必殺技みたいに！」', 1);
      await era.input();

      await urara.say_and_wait([
        'うん！ ウララも楽しみ！ ',
        callname,
        ' の話、ちゃんと聞くから！',
      ]);
      await era.printAndWait([
        callname,
        ' が真面目に親指を立てるのを見て、',
        urara.get_colored_name(),
        ' もまっすぐに笑って応えた。',
      ]);
      await era.printAndWait([
        'いいものだ、この隔たりのない純粋さ。だが',
        urara.sex,
        'は、知り合ったばかりの相手をここまで信じていいのか。',
      ]);
      await era.printAndWait([
        'これから',
        urara.sex,
        'の面倒を見るのも、日程の一部になりそうだ。',
      ]);
      await era.printAndWait([
        '計画の実行は、',
        urara.get_colored_name(),
        ' にまた引っ張られなければ大丈夫だろう。うまくいけばいいのだが——？',
      ]);
      await era.printAndWait([
        '思考の流れで視線が横へ寄る。濡れたジャージの上着を脱いだ小さな',
        urara.uma_sex_title,
        'が、安心して ',
        you.get_colored_name(),
        ' のそばに寄りかかっていた。',
      ]);
      await era.printAndWait([
        urara.sex,
        'の、水遊びで透けたシャツの下から、小柄ながら健康的な肉付きの体が、はっきり見えてしまう……',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'の温もりを感じるより先に、',
        you.get_colored_name(),
        ' はぞっとした。何かがおかしい。',
      ]);

      era.printButton('「ウララ、その……下着は？」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' の震える声に、',
        urara.get_colored_name(),
        ' はきょとんとして、服の下から色が見えている柔らかい胸元を見下ろした。',
      ]);
      await era.printAndWait([
        '首を傾げて考えたあと、小さな',
        urara.uma_sex_title,
        'はやっと何かを思い出したように目を見開き、黙り込んだ ',
        you.get_colored_name(),
        ' に、少し恥ずかしそうな笑顔を向けた。',
      ]);
      await urara.say_and_wait([
        'あっ！ ごめんね、',
        callname,
        '！ きょう出かけるとき、下着、忘れちゃった！',
      ]);
      await era.printAndWait('わ、忘れた？ それをそのまま言うのか？！');
      await urara.say_and_wait([
        'どっちも忘れちゃったみたい。えへへ……朝、キングが忘れ物しないでって言ってたのに。ごめんね！',
      ]);
      await era.printAndWait([
        'あまりに無防備な小さな',
        urara.uma_sex_title,
        'に、',
        you.get_colored_name(),
        ' は完全に言葉を失った。',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'の、どんどん密着してくる体と、少し困った笑顔を避けながら、',
        you.get_colored_name(),
        ' は夕陽を憂い顔で見つめ、',
        urara.get_colored_name(),
        ' への心配ばかりが目に浮かんだ。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' と歩むこれから先は、どの方面も道のりが長い……',
      ]);

      if (era.get('cflag:61:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          'それにしても、',
          urara.get_colored_name(),
          ' のルームメイトで「お母さん」役まで担うキングヘイローは、本当にお疲れさまだ……',
        ]);
        await era.printAndWait([
          'あるいは',
          urara.sex,
          'のところなら、',
          urara.get_colored_name(),
          ' のトレーニングに役立つ話が聞けるかもしれない。',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'ともあれ、小さな',
        urara.uma_sex_title,
        'と並んで進む時間は、ようやく動き出した。',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');

      await inner_urara.say_as_unknown_and_wait(
        'では、あなたは『ウララ』と本格的に付き合い始めて、どうでしたか？',
      );
      era.printButton(
        `「${urara.sex}に賭ける価値はある。それが、${urara.sex}に返したいことでもある」（好感+20）`,
        1,
      );
      era.printButton(
        '「まだよくわからないが、無防備な小動物みたいで、意外とかわいい」（恋慕+5）',
        2,
      );
      const ret = await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'そうですか。わかりました。私が言うことではないかもしれませんが、信じてください……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '何事も始めが大変です。これからも、',
        urara.sex,
        'への忍耐と信頼を、どうか保ってください。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '華やかではなくとも、真剣に育てば、隅の小さな花だって、春には咲けるはずです。',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_after_begin: (() => {
    const title = 'ウララ式トレーニング';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {CharaTalk} spe スペシャルウィーク
     * @param {PrintedSpan} sp_call_u スペシャルウィークからハルウララへの呼び方
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} sky セイウンスカイ
     * @param {PrintedSpan} callname_20 セイウンスカイからプレイヤーへの呼び方
     * @param {PrintedSpan} sk_call_u セイウンスカイからハルウララへの呼び方
     * @param {CharaTalk} rice ライスシャワー
     * @param {PrintedSpan} ri_call_u ライスシャワーからハルウララへの呼び方
     * @param {CharaTalk} doto メイショウドトウ
     * @param {PrintedSpan} d_call_u メイショウドトウからハルウララへの呼び方
     * @param {CharaTalk} halo キングヘイロー
     * @param {PrintedSpan} h_call_u キングヘイローからハルウララへの呼び方
     * @param {CharaTalk} road ナリタトップロード
     * @param {PrintedSpan} ro_call_u ナリタトップロードからハルウララへの呼び方
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      {
        spe,
        sp_call_u,
        opera,
        sky,
        callname_20,
        sk_call_u,
        rice,
        ri_call_u,
        doto,
        d_call_u,
        halo,
        h_call_u,
        road,
        ro_call_u,
      },
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        'ウララの走りを眺めながら、トレーナーの',
        you.adult_sex_title,
        '（あなた）は、まだ',
        urara.sex,
        '専用のトレーニング計画を考えている。',
      ]);
      era.drawLine();
      await urara.say_and_wait(['ねえねえ！', callname, '！ あっち見て——']);

      era.printButton('「いまはトレーニング中だよ？」', 1);
      await era.input();

      await urara.say_and_wait('ごめん！ じゃあもう一周走ってくる！');
      await era.printAndWait([
        '担当が再びトレーニングに戻るのを見ながら、',
        you.get_colored_name(),
        ' は小さな',
        urara.uma_sex_title,
        'の行動パターンを整理し続けた。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' のトレーニングに付き合い始めてしばらくして、',
        you.get_colored_name(),
        ' は',
        urara.sex,
        'の現状を形づくる事情を、少しずつ掴んできた。',
      ]);
      await era.printAndWait([
        'まず、',
        urara.sex,
        'は気が散りやすい。集中力のなさは',
        urara.sex,
        'の性格そのものでもある。だからこそ……',
      ]);
      await urara.say_and_wait([callname, '、こっちのみんなが——']);

      era.printButton('「コホン」', 1);
      await era.input();

      await urara.say_and_wait(
        'ごめんね！ こっちはまだトレーニングだから、またあとでね！',
      );
      await era.printAndWait([
        'こうして、声をかければ',
        urara.sex,
        'は反省する。だがすぐ気が散って、もっとおもしろいほうへ持っていかれる。',
      ]);
      await era.printAndWait(
        '毎日が途切れ途切れで、競争心も足りない。このままではトレーニングの効果は出ない。',
      );
      await era.printAndWait([
        '実際、',
        you.get_colored_name(),
        ' が ',
        urara.get_colored_name(),
        ' と親しい',
        urara.uma_sex_title,
        'たちに聞いてまわると、',
        urara.couple_title,
        'の答えも似たり寄ったりだった。',
      ]);
      era.println();

      const buffer = gacha(
        [
          () =>
            halo.say_and_wait([
              '一流を目指すのはいいことよ。でも ',
              h_call_u,
              ' がトレーニングを続けられないのは、',
              urara.sex,
              '自身のためにもよくないわ。',
            ]),
          () =>
            sky.say_and_wait([
              'あー、わかったわかった。',
              callname_20,
              '、最近 ',
              sk_call_u,
              ' の悪いクセで大変なんだろ？',
            ]),
          () =>
            spe.say_and_wait([
              sp_call_u,
              ' が持ってきてくれるにんじん、おいしいんだ！ ただ、どこまで配ったか忘れちゃうことが多くて。',
            ]),
          () =>
            rice.say_and_wait([
              'えっ？',
              ri_call_u,
              ' は、走るのは好きだけど……気持ちの粘りが、ちょっと足りないような……',
            ]),
          () =>
            road.say_and_wait([
              ro_call_u,
              ' はすごいです……とにかくすごいです！ ちょっとお勉強が苦手なだけです！',
            ]),
          () =>
            opera.say_and_wait(
              'ふむふむ～。花は養分を選り好みする。だが蕾のままは、迷いの一種かもしれんぞ？',
            ),
          () =>
            doto.say_and_wait([
              d_call_u,
              ' はいつも、私の面倒を片付けてくれるんです。ときどき、もっと面倒になるんですけど……',
            ]),
        ],
        3,
      );
      for (const talk of buffer) {
        await talk();
      }
      era.println();

      await era.printAndWait([
        '同級生のあいだでも、',
        urara.get_colored_name(),
        ' の細かい癖は有名だった。',
      ]);
      await era.printAndWait([
        '理屈のうえでは、',
        urara.get_colored_name(),
        ' の「おもしろい」を満たせばいい。だが、何を盛り込めばいいのか……',
      ]);
      await era.printAndWait([
        '想像力が足りない。対策を立てるには、まず自分がもっと ',
        urara.get_colored_name(),
        ' を知る必要がある。',
      ]);
      await era.printAndWait([
        '買い込んだ必需品を袋に詰めながら、',
        you.get_colored_name(),
        ' は考え込んだまま、商店街の次の店へ向かった。',
      ]);
      await urara.say_and_wait([
        'あっ、',
        callname,
        '！ いらっしゃいませ！ ここ、すごくおいしいりんごがあるよ！ 買う？',
      ]);

      era.printButton('「ん、ん？ ウララ？ ここで……手伝ってるのか？」', 1);
      await era.input();

      await urara.say_and_wait(
        'うん！ ひまさえあれば、こっちを手伝いに来るの！ 楽しいよ！',
      );
      await era.printAndWait([
        '制服のうえにエプロンをざっと結び、',
        urara.get_colored_name(),
        ' は満面の笑みで寄ってきた。',
      ]);

      const relation = era.get('relation:52:0');
      if (relation > 150) {
        await urara.say_and_wait([
          callname,
          '、食べてみる？ 大丈夫、店長のおじちゃんがいいって！',
        ]);
        await era.printAndWait([
          '一番大きいりんごを、問答無用で ',
          you.get_colored_name(),
          ' の手に押しつける。',
          urara.get_colored_name(),
          ' は、いま食べてみろと言っているらしい。',
        ]);
        await era.printAndWait([
          '洗ったばかりの実に水滴が光り、滑らかな皮に ',
          urara.get_colored_name(),
          ' のりんご以上にふっくらした小さな顔が映っていた。',
        ]);
        await urara.say_and_wait(
          'きょうのりんごは店長のおじちゃんのおすすめ！ ぜったい甘いよ、保証する！',
        );
      } else {
        await urara.say_and_wait([
          'こっちなら、',
          callname,
          ' に安くできるよ？ もちろん店長のおじちゃんもいいって！',
        ]);
        await era.printAndWait([
          '笑顔は本物だが、',
          urara.get_colored_name(),
          ' の言葉には、まだ少し距離があった。',
        ]);
        await era.printAndWait([
          'それでも',
          urara.sex,
          'は大きなりんごを取り出して、',
          you.get_colored_name(),
          ' の手に押しつけた。',
        ]);
        await urara.say_and_wait([
          '迷うなら、',
          callname,
          ' 先に食べてみていいよ？ おいしいから！',
        ]);
      }
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        'おっ、いらっしゃい！ ウララの友だちかい？ そんならおまけしなきゃな！',
      );
      await urara.say_and_wait([
        '友だちだけじゃないよ、おじちゃん！ こっちはウララのトレーナー！',
      ]);
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        'おお、トレーナーか……トレーナー？！ ウララの？',
      );
      await era.printAndWait([
        '声を聞いて出てきた店主のおじさんは、',
        urara.get_colored_name(),
        ' の答えに一瞬呆けてから、いきなり通りへ駆け出していった——',
      ]);
      await era.printAndWait([
        '前後五分も経たないうちに、商店街の近所の人たちが ',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' のまわりをびっしり取り囲んだ。',
      ]);
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        'おや、ウララにもやっと契約トレーナーがついたか！ めでたいねえ！',
      );
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        'これでデビューも安心だ。これからウララちゃんのレース、みんなで応援しに行くよ！',
      );
      await you.say_as_passer_by_and_wait('商店街の人', [
        'トレーナーの',
        you.adult_sex_title,
        '！ この子はちょっとおっちょこちょいだけど、',
        urara.sex,
        'はよくがんばってるよ！',
      ]);

      era.printButton('「うん！ あとは任せてください！」', 1);
      await era.input();

      await era.printAndWait([
        '潮のように押し寄せる祝福と期待に応えながら、',
        you.get_colored_name(),
        ' はそっと横の ',
        urara.get_colored_name(),
        ' を見た——',
      ]);

      if (relation > 150) {
        await you.say_as_passer_by_and_wait(
          '商店街の人',
          '先が保証されたのはいいけど、ウララ、騙されてたりしないだろうな？',
        );
        await you.say_as_passer_by_and_wait(
          '商店街の人',
          '縁起でもないこと言うなよ。だいたい、ウララは嬉しそうじゃないか。',
        );
        await you.say_as_passer_by_and_wait('商店街の人', [
          'でもよ、トレセンのトレーナーって、担当の',
          urara.uma_sex_title,
          'と……そういう話、聞くし……',
        ]);
        await you.say_as_passer_by_and_wait(
          '商店街の人',
          'お前が慌てることかよ。なんだ、ウララが好きな人できても気に入らねえのか？',
        );
        await era.printAndWait('うむ……こういうときは、何と言えばいいのか……');
      } else {
        await you.say_as_passer_by_and_wait(
          '商店街の人',
          'ウララのこれからが順調ならいいんだが、どうもそうでもなさそうで？',
        );
        await you.say_as_passer_by_and_wait(
          '商店街の人',
          '聞き苦しいこと言うな。ウララのトレーナーに、そんな言い方するか？',
        );
        await you.say_as_passer_by_and_wait(
          '商店街の人',
          'でもウララ、あんまり嬉しそうじゃないぞ……',
        );
        await you.say_as_passer_by_and_wait('商店街の人', [
          '何言ってんだ。お前が毎回ウララに仕事を山ほど押し付けて、',
          urara.sex,
          'を疲れさせてるんだろ？',
        ]);
        await era.printAndWait('……いまは余計なことは言わないほうがいいな……');
      }

      await era.printAndWait([
        'この通りの人たちは、本当に ',
        urara.get_colored_name(),
        ' が好きなのだな。',
        urara.get_colored_name(),
        ' の強みが、どこにあるのか少し見えてきた。',
      ]);
      await era.printAndWait([
        'そのあと商店街の店は、「',
        urara.get_colored_name(),
        ' が世話になってるから」と言いながら、それぞれ手土産を渡してきた。',
      ]);
      await you.say_and_wait('ただ、この差し入れ、多すぎないか……？', true);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、自分がそんな手柄を立てた覚えはない。むしろ最初に世話をしたのは ',
        urara.get_colored_name(),
        ' のほうだ。',
      ]);
      await era.printAndWait([
        'いくら申し訳なくても、',
        you.get_colored_name(),
        ' は、どさっと押しつけられた膨大な好意を、どう断ればいいか思いつかなかった。',
      ]);
      await urara.say_and_wait([
        callname,
        '、いっぱいもらったね！ 持つの、手伝うよ！',
      ]);
      await era.printAndWait([
        '相手が困っていると分かると、',
        urara.get_colored_name(),
        ' は手伝うと言いながら、',
        you.get_colored_name(),
        ' を囲む荷物を次々と自分の体に積み上げていった。',
      ]);

      era.printButton('「無理するな！ 手伝うなら、これだけでいい……」', 1);
      await era.input();

      await urara.say_and_wait([
        'だいじょうぶ、全部任せて！ ウララは',
        urara.uma_sex_title,
        'だよ……うえっ、重い！ でもがんばる！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の提案を笑って断り、',
        urara.get_colored_name(),
        ' は自分とほとんど同じ大きさの荷物を全力で背負った。次の一歩一歩が、やけに真剣に見える……',
      ]);
      await you.say_and_wait('ん？ 待て、集中してる？ こんなときに？', true);
      await era.printAndWait([
        'ようやく適切なトレーニングの着想を得た ',
        you.get_colored_name(),
        ' は、まだ周囲にいる商店街の人たちへ軽く声をかけた——',
      ]);
      era.println();
      await urara.say_and_wait(
        'うん！ この箱のりんごを向こうへ運ぶんでしょ。はやいほうがいいんだよね？ わかった！ でも……',
      );

      era.printButton('「で、でも？」', 1);
      await era.input();

      await urara.say_and_wait(
        '無理しなくていいよ？ 荷物運ぶなら、ウララひとりでだいじょうぶ！',
      );

      era.printButton(
        '「だ、だ、大丈夫だ。一緒に手伝うって言ったし、俺ならまだ——」',
        1,
      );
      await era.input();

      await you.say_as_passer_by_and_wait('商店街の子供たち', [
        'ウララ',
        urara.elder_sibling_sex_title,
        '！ 遅れたら間に合わないよ？',
      ]);
      await urara.say_and_wait('あっ！ みんな、ゆっくり走って！ 安全第一！');
      await era.printAndWait([
        you.get_colored_name(),
        ' の腰が折れそうになる直前、商店街近くの小さな',
        urara.uma_sex_title,
        'たちが ',
        you.get_colored_name(),
        ' のそばから、',
        you.get_colored_name(),
        ' の荷物を分けていった。',
      ]);
      await era.printAndWait([
        '荷箱を背負い、',
        urara.get_colored_name(),
        ' は小さな',
        urara.uma_sex_title,
        'たちの歩調を追って真剣に走り出した。',
        you.get_colored_name(),
        ' は段階の仕事を終えたところで、地面に座り込みそうになった。',
      ]);
      await era.printAndWait([
        '商店街の人たちの協力を得て、',
        urara.get_colored_name(),
        ' の主体性を引き出すトレーニングは、うまく回り始めた。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' のトレーニングが続かない問題は、だいたい片付いた。成果も、もうすぐ見えるはずだ。',
      ]);
      await era.printAndWait([
        '毎日のトレーニング後に体がもたない件は……',
        you.get_colored_name(),
        ' は、某人がまだ鍛えていない以外に問題はないと思った。',
      ]);
      await era.printAndWait(
        '——嘘だ。このまま続ければ、運よく入院せずに済んでも、某人は自分でレースに出られるようになるだろう。',
      );
      await era.printAndWait([
        'だが、',
        urara.get_colored_name(),
        ' の競争心をどう伸ばすかは、また別の長期課題だ。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'もちろん、あなたはまだ知りません。この心配は、未来のある出来事のあと、自然に解ける——',
      );
      await inner_urara.say_as_unknown_and_wait(
        'こんな種明かしは気に入らないでしょう。でも、少なくとも最初は安心していてほしいのです。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'あなたと私たちの物語に、特別な波瀾は少ないかもしれません。それでも、どうか辛抱強く前へ進んでください。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_begin_race_first: (() => {
    const title = 'メイクデビューへ！';
    /**
     * ジュニア級 6月4週 メイクデビュー
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '契約を結んだトレーナーと、長いあいだ手探りを続けたふたりは、ようやく本当の準備を整えた。',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.get_colored_actual_name(),
        ' という名の小さな',
        urara.uma_sex_title,
        'が、ついに『メイクデビュー』へ出走する——',
      ]);
      era.drawLine();
      await urara.say_and_wait(
        'やっとデビューだね？ じゃあきょうも、『ウララ』らしくいくよ！',
      );

      era.printButton('「ウララ、力を抜け。そんなに緊張するな」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' と並んでパドックの通路に立ち、',
        you.get_colored_name(),
        ' は、笑顔なのに体が震えている ',
        urara.get_colored_name(),
        ' をなだめた。',
      ]);
      await era.printAndWait([
        'トレーニングの成果を確かめるのは今日だ。',
        urara.get_colored_name(),
        ' も、デビューの「機会」は限られていると知っている。勝てるかどうかが、かなり肝心だ。',
      ]);
      await era.printAndWait(
        '競争心が芽生えるのはいい。だが興奮しすぎると力を発揮できないし、緊張で出走できない者も少なくない。',
      );
      await era.printAndWait([
        'だから、まだデビュー前の担当に講釈している周囲の同業より、',
        urara.sex,
        'に楽しく走ってもらうほうが上策だ。',
      ]);
      await urara.say_and_wait(
        'うん！ そうだね！ えへへ～。気づいたら緊張してた！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の注意を聞いて肩を落とす。まだぎこちないが、',
        urara.get_colored_name(),
        ' は耳を立てて、',
        you.get_colored_name(),
        ' に笑顔を向けた。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          'でも、やっとデビューできるんだよ！ いまデビューできるの、すごいことだと思う！',
        );
        await urara.say_and_wait([
          'デビューしたら、もっとレースに出られる！ 一位がいっぱいとれたら、',
          callname,
          ' もみんなも嬉しいよね！',
        ]);
        await era.printAndWait([
          '尻尾を力いっぱい振りながら、',
          urara.get_colored_name(),
          ' のまだ幼い声に、支えてくれる人のための闘志がはっきり乗っていた。',
        ]);
        await era.printAndWait([
          'ヒーローものの主人公みたいだ。',
          urara.get_colored_name(),
          ' は、とんでもない子だ……',
        ]);
      } else {
        await urara.say_and_wait(
          'でも、もうすぐデビューだよ！ ちょっと早い気もするけど、進むときだよね！',
        );
        await urara.say_and_wait(
          '元気出す！ 一位がとれたら、みんなも笑顔になれるよね！',
        );
        await era.printAndWait([
          '胸の闘志を自分で煽るように、',
          urara.get_colored_name(),
          ' は尻尾を力強く振り、顔にも真剣さが増した。',
        ]);
        await era.printAndWait([
          '自信は足りなくても、世話してくれるみんなのために全力を尽くす。',
          urara.get_colored_name(),
          ' は、本当にいい子だ……',
        ]);
      }
      era.println();
      await urara.say_and_wait([
        'それにね、前より強くなった気がする！',
        callname,
        ' のやり方、ほんとによく効くよ！',
      ]);
      await urara.say_and_wait([
        'まだよくわからないけど、',
        callname,
        ' の体も——',
      ]);

      era.printButton(
        `「大丈夫だ。何度も言っただろう？ ${callname} は平気だ！」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'えっ？ ほんと？ じゃあ ',
        callname,
        ' も、力抜いてね？',
      ]);

      era.printButton('「本当だ！ ウララは安心していい！」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' とのレース前の雑談を重ねるうち、',
        urara.get_colored_name(),
        ' の張りつめた表情が、少しずつ緩んでいった。',
      ]);
      await era.printAndWait([
        'これで大丈夫か。まだひどく震える両脚をそっと押さえ、',
        you.get_colored_name(),
        ' は、立っているだけでも辛い体の姿勢を変えた。',
      ]);
      await era.printAndWait(
        '今も体は死ぬほど痛い。だが努力が無駄ではなかったのなら、少しくらい辛くても元は取れる。',
      );
      await era.printAndWait([
        '呼吸を整え、体操服とゼッケンを直して、',
        urara.get_colored_name(),
        ' は場内放送の入場案内に合わせて一歩前へ出た。',
      ]);

      era.printButton('「初めてだ。準備はできたか？」', 1);
      await era.input();

      await urara.say_and_wait(
        'うん！ きょうはぜったい一着だと思う！ ちがう、ぜったい勝つ！',
      );
      await urara.say_and_wait([
        'じゃあ出発！ 質問！',
        callname,
        '、ウララはどう走ればいい——？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の、光を浴びた笑顔に、',
        you.get_colored_name(),
        ' は力強く応えた。',
      ]);

      era.printButton('「どうあれ、楽しくいけ——！」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '大丈夫か？';
    /**
     * 以降のメイクデビューと未勝利戦
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'ウララがここまで来るのは意外ではない。それでも気持ちのうえでは受け止めにくい。どの方面も。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'あなたも',
        urara.sex,
        'も、大丈夫ですか？ 物語がこんなに簡単に終わるのは、私は認めませんよ？',
      ]);
      era.drawLine();
      await era.printAndWait([
        'そばの担当を心配そうに見て、',
        you.get_colored_name(),
        ' は、どう切り出せばいいか迷っていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は分かっている。いまの ',
        urara.get_colored_name(),
        ' に、見た目ほどの余裕はないだろう。だがデビューを選んだ以上、前の障害は越えなければならない。',
      ]);
      await era.printAndWait([
        'このまま勝てなければ何が待つかを、',
        urara.sex,
        'に正面から言うべきか。やはり口に出せない。',
      ]);
      await era.printAndWait([
        'それに、いま言うには遅すぎる。',
        urara.get_colored_name(),
        ' がとっくに察していても、いまはっきり言えば圧が増えるだけだ。',
      ]);
      await era.printAndWait([
        '結局言えるのは、',
        urara.sex,
        'にいつものように楽しく走ってもらうことくらいだ。だがそれだと……',
      ]);
      await urara.say_and_wait([
        callname,
        '、ウララのことは心配しないで？ どう走るか、わかってるよ！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の迷いを見抜いたのか、',
        urara.get_colored_name(),
        ' はそばの ',
        you.get_colored_name(),
        ' にやさしく笑う。まるで',
        urara.sex,
        'のほうが、担当を送り出すトレーナーのようだった。',
      ]);
      await urara.say_and_wait([
        callname,
        ' はすごいから！ だからウララ、ぜったいだいじょうぶ！',
      ]);

      era.printButton('「……楽しく走る。だよな？」', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          'うん！ 結果がどうでも、ウララは走るのやめない！ だから ',
          callname,
          '、心配しないで！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の言葉に応えて、',
          urara.get_colored_name(),
          ' は安心するような笑顔を見せた。',
        ]);
        await urara.say_and_wait([
          'えへへ～。',
          callname,
          '、ウララの言ったこと覚えてるんだ。やっぱり ',
          callname,
          '、すごい！',
        ]);
        await era.printAndWait([
          'そうだ。いま心配しても意味はない。あとの走りは ',
          urara.get_colored_name(),
          ' に任せればいい。',
        ]);
      } else {
        await urara.say_and_wait(
          'うん！ だからまた負けても、ウララは走りつづけるよ！',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' のほうは見ていないが、',
          urara.get_colored_name(),
          ' の顔には、それでも笑みが浮かんでいた。',
        ]);
        await urara.say_and_wait('だからあとは、がんばって走るだけ！');
        await era.printAndWait([
          'ああ、',
          urara.get_colored_name(),
          ' はそんなに強い',
          urara.uma_sex_title,
          'だ。心配すべきは、',
          urara.sex,
          'を信じきれない自分のほうだろう……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '深呼吸で気持ちを落ち着けると、',
        you.get_colored_name(),
        ' も ',
        urara.get_colored_name(),
        ' と一緒に笑った。どちらかといえば自嘲に近い。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' のレースなのに、自分が走るみたいになっていた。さっきまで ',
        urara.get_colored_name(),
        ' をどう慰めるか考えていたのに、慰められたのは自分のほうだ。',
      ]);
      await era.printAndWait([
        'それでも ',
        you.get_colored_name(),
        ' は分かった。いま迷うことはない。',
        urara.get_colored_name(),
        ' は、必ず前へ進む。',
      ]);
      await era.printAndWait([
        '周囲のトレーナーと担当のように言葉を重ねず、',
        you.get_colored_name(),
        ' はそばに寄りかかる小さな',
        urara.uma_sex_title,
        'と静かに待ち、入場を知らせる放送が鳴るまでそこにいた。',
      ]);
      await urara.say_and_wait(['時間だよ、', callname, '！ いくよ！']);

      era.printButton('「今度こそ、大好きな一着をとれよ！」', 1);
      await era.input();

      await urara.say_and_wait('うん！ ぜったいとる！');
      await era.printAndWait([
        '短い力強い返事のあと、通路の外の陽を浴びて、',
        urara.get_colored_name(),
        ' はまた笑顔のまま、レースの場へ向かった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win_first: (() => {
    const title = '初めての勝利！';
    /**
     * ジュニア級 6月4週 メイクデビュー勝利
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        'まだデビューしたばかりなのに、大変だった。',
        urara.get_colored_actual_name(),
        ' という名の小さな',
        urara.uma_sex_title,
        'が、一位をとった——',
      ]);
      era.drawLine();
      await era.printAndWait([
        urara.get_colored_name(),
        ' がゴールした瞬間、',
        you.get_colored_name(),
        ' は体の損傷を無視して立ち上がり、観客席の最前列へ駆け寄った。',
      ]);
      await era.printAndWait(
        '胸の石が落ちる。筋肉痛も、一着が確かまるまでの緊張も、担当が近づくにつれて溶けていった。',
      );
      await era.printAndWait([
        '張りつめていた気が緩むと、',
        urara.get_colored_name(),
        ' を思いきり揉みくちゃにしたい気持ちも、抑えから解放された。',
      ]);
      await era.printAndWait([
        '周囲の目も構わず、祝福のついでに、',
        you.get_colored_name(),
        ' は手を伸ばして ',
        urara.get_colored_name(),
        ' の柔らかい頬と耳に触れた。',
      ]);
      await era.printAndWait([
        '汗で濡れた体操服から',
        urara.teen_sex_title,
        'の香りがする。初対面のときと違い、今日の香りには勝利の花の匂いも混じっていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' に揉まれながら、',
        urara.get_colored_name(),
        ' も小動物のように小さな手で ',
        you.get_colored_name(),
        ' をそっと掴む。汗に濡れた人形のような顔に、薄い赤みが差した。',
      ]);
      await era.printAndWait([
        'できれば今すぐこの柔らかい子を抱き上げて吸い付きたいくらいだ。だが残っていた理性が、間に合って ',
        you.get_colored_name(),
        ' を引き止めた。',
      ]);
      await you.say_and_wait(
        'やっぱり疲れが出たか。それにしても、頭が少しふらつく……',
        true,
      );
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          'えへへ～',
          callname,
          '、もう揉まないで！ くすぐったい！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の興奮しすぎた両手を恥ずかしそうに外し、',
          urara.get_colored_name(),
          ' は尻尾を激しく振り、心からの喜びに咲く笑顔を見せた。',
        ]);
        await urara.say_and_wait([
          'きょうのウララ、一位だよ！ 前にだれもいないの、初めて見た！ ウイナーズサークルに立つのも初めて！',
        ]);
      } else {
        await urara.say_and_wait([callname, '！ だめだよ！ みんな見てるよ！']);
        await era.printAndWait([
          '照れくさそうに口を尖らせ、まだ揉んでいる ',
          you.get_colored_name(),
          ' の手を払うと、',
          urara.get_colored_name(),
          ' の羞じた顔にようやく笑顔が咲いた。',
        ]);
        await urara.say_and_wait([
          'えへへ。でもありがとう、',
          callname,
          '！ きょうのウララ、ほんとに一位だよ～！',
        ]);
      }
      era.println();
      era.printButton('「一着の感触はどうだ？ 前の景色、きれいだろう？」', 1);
      await era.input();

      await urara.say_and_wait(
        'うん！ 想像よりずっと楽しい！ もっと一位がほしい！',
      );
      await urara.say_and_wait(
        'これから、もっとレースに出るんでしょ？ ウララ、もっとがんばる！',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' の勝負心は、もう目覚め始めている。このまま続ければ、いつか質が変わるきっかけに出会えるはずだ。',
      ]);
      await era.printAndWait([
        'そうなれば場外のみんなだけでなく、',
        urara.sex,
        '自身も、他者との競争のなかで、レースの内側で追いたい願いを見つけられるだろう。',
      ]);
      await era.printAndWait([
        'なぜか少し痺れるこめかみを揉みながら、',
        you.get_colored_name(),
        ' はトレーナーとしての思考を動かし続けた。',
      ]);
      await era.printAndWait(
        'これから力を伸ばすなら、まず出走経験を積むことを目標のひとつにするのも悪くない。',
      );

      era.printButton('「よし！ これからレースが増える。大丈夫か？」', 1);
      await era.input();

      await urara.say_and_wait(['よーし——！ ん？', callname, '、あっち！']);

      era.printButton('「どうした？」', 1);
      await era.input();

      await urara.say_and_wait('商店街のみんな、来てるよ！');
      await era.printAndWait([
        urara.get_colored_name(),
        ' が見つめる先を追うと、日頃から小さな',
        urara.uma_sex_title,
        'と親しい商店街の人たちが、全員揃っていた。',
      ]);
      await era.printAndWait(
        '商店街の人「ウララがこっちを見た！ みんな、用意——！」',
      );
      await era.printAndWait('商店街の人たち「ウララ！ デビューおめでとう！」');
      await era.printAndWait(
        '祝福の声が重なるなか、商店街の人たちは風を受けて「ウララ、デビューおめでとう」と書いた横断幕を掲げた。',
      );
      await era.printAndWait(
        '商店街の人「ウララ！ デビューも一位も、よくやったぞ！」',
      );
      await era.printAndWait(
        '商店街の人「これからも好きなだけ走れ！ おれたちも、ずっと応援するからな！」',
      );
      await era.printAndWait([
        'デビューを果たしただけなのに、祭りのようにはしゃいでいる。',
        urara.get_colored_name(),
        ' への気持ちは分かっていても、',
        you.get_colored_name(),
        ' はびっくりした。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は目に入りそうな「汗」をそっと拭い、笑顔でみんなへ全力で応えた。',
      ]);
      await urara.say_and_wait(
        'みんな、ありがとう！ これからのウララ、ずっと、ずっと走るよ！',
      );
      await era.printAndWait('商店街の人たち「おお！ がんばれ——！」');
      await era.printAndWait(
        '商店街の人「これからウララのことは任せた！ トレーナーもがんばれよ！」',
      );
      await era.printAndWait([
        'みんなからの祝福にいきなり包まれ、',
        you.get_colored_name(),
        ' は驚いたようにその場で固まった。',
      ]);
      await era.printAndWait(
        'いや、本当に驚いたのかもしれない。よく考えれば、以前こんな期待を向けられたことがあったか。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の戸惑いにすぐ気づいて、',
        urara.get_colored_name(),
        ' は笑いながら ',
        you.get_colored_name(),
        ' の手を握り、',
        you.get_colored_name(),
        ' を励まし始めた。',
      ]);
      await urara.say_and_wait([
        callname,
        '！ この機会に、みんなにも何か言おうよ！',
      ]);
      era.printButton('「え？ あ？ 俺か？ でも何を……」', 1);
      await era.input();

      await urara.say_and_wait(
        'だいじょうぶ！ 心のなかを、力いっぱい叫べばいいの！ がんばって！',
      );
      await era.printAndWait([
        'それなら、みんなの期待に応えないわけにはいかない。',
        urara.get_colored_name(),
        ' のきらきらした視線のなかで、',
        you.get_colored_name(),
        ' は深く息を吸った——',
      ]);
      await era.printAndWait([
        'だが最初の一語すら出ないうちに、力を入れすぎて頭のなかの最後の意識が切れ、',
        you.get_colored_name(),
        ' はうつ伏せにのけぞった。',
      ]);
      await urara.say_and_wait([
        'ん？',
        callname,
        '、どうしたの……えっ？ えっ！',
        callname,
        '！',
        callname,
        '——',
      ]);
      await era.printAndWait([
        '言えなかった感謝を抱えたまま、',
        urara.get_colored_name(),
        ' と周囲の悲鳴のなかで、体力を使い果たした ',
        you.get_colored_name(),
        ' はまた目を回して倒れた。',
      ]);
      await era.printAndWait([
        'くそっ、感動的な場面だったのに、なんでだ。自分でも笑いがこらえきれず、',
        you.get_colored_name(),
        ' は笑ったまま目を閉じた……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('すぅ……');
      await inner_urara.say_as_unknown_and_wait(
        '……ええと。メイクデビュー、お疲れさま？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '結局、体力だけではどうにもなりませんね。これから先も、体には気をつけてください……',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_lose_first: (() => {
    const title = '前へ進め！';
    /**
     * ジュニア級 6月4週 メイクデビュー敗北
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '予想どおりのことが、やはり起きました。落ちないでください。あなたなら、次は……',
      );
      era.drawLine();
      await era.printAndWait([
        urara.get_colored_name(),
        ' は一着こそとれなかったが、予想どおりの伸びはあった。',
        you.get_colored_name(),
        ' は少し肩の力を抜き、溜まっていた疲れも軽くなった。',
      ]);
      await era.printAndWait(
        'みんなの努力に成果が見える。始めは大変でも、悪くない開幕だ。',
      );
      await era.printAndWait([
        '長い緊張で頭はまだ痛いが、',
        urara.get_colored_name(),
        ' のデビューに比べれば、どうということはない。',
      ]);
      await era.printAndWait([
        'コース脇で汗を拭う ',
        urara.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' はゆっくり立ち上がり、人混みを避けて、前列の ',
        urara.get_colored_name(),
        ' にいちばん近い位置へ向かった。',
      ]);

      era.printButton('「お疲れ。デビューの初戦、感触はどうだった？」', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await era.printAndWait([
          you.get_colored_name(),
          ' が手を振る姿を見て、',
          urara.get_colored_name(),
          ' は気を取り直し、いつもどおり笑って駆け寄ってきた。',
        ]);
        await urara.say_and_wait([
          'ありがとう、',
          callname,
          '！ それに、そんなに大変じゃなかったよ！ 走るのは、やっぱり楽しいから！',
        ]);
        await urara.say_and_wait(
          'でも、一位はとれなかった……でも、ちゃんと最後まで走れたよ！',
        );
        await era.printAndWait([
          '声には寂しさが残る。それでも ',
          urara.get_colored_name(),
          ' は、次の一秒で自分の落ち込みを払った。',
        ]);
        await urara.say_and_wait([
          callname,
          '！ これから一位がとれたら、もっとレースに出られるよね？',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' の姿を見て、',
          urara.get_colored_name(),
          ' は顔の塩辛い水滴を拭き、',
          you.get_colored_name(),
          ' のそばまで走ってきた。',
        ]);
        await urara.say_and_wait([
          'ありがとう、',
          callname,
          '。でもそんなに大変じゃなかったよ。走るのは、やっぱり楽しい！',
        ]);
        await urara.say_and_wait(
          'ただ……一位はとれなかった……でも今度は、ちゃんと最後まで走れたよ！',
        );
        await era.printAndWait([
          '声には寂しさが残る。それでも ',
          urara.get_colored_name(),
          ' は、次の一秒で自分の笑顔を取り戻した。',
        ]);
        await urara.say_and_wait(
          'ずっと走りたいの！ だからデビューできたし、これから一着とれるよね？',
        );
      }
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        ' の勝負心は、もう目覚め始めている。このまま続ければ、いつか質が変わるきっかけに出会えるはずだ。',
      ]);
      await era.printAndWait([
        'そうなれば場外のみんなだけでなく、',
        urara.sex,
        '自身も、他者との競争のなかで、レースの内側で追いたい願いを見つけられるだろう。',
      ]);
      await era.printAndWait([
        'まだ鈍く痛むこめかみを揉みながら、',
        you.get_colored_name(),
        ' はトレーナーとしての思考を動かし続けた。',
      ]);
      await era.printAndWait(
        'ただ、これからもっとレースに出るためにも、まずは初勝利を早く確保したほうがいい。',
      );

      era.printButton('「よし！ 新しい特訓が始まる。大丈夫か？」', 1);
      await era.input();

      await urara.say_and_wait(['よーし——！ ん？', callname, '、あっち！']);

      era.printButton('「どうした？」', 1);
      await era.input();

      await urara.say_and_wait('商店街のみんな、来てるよ！');
      await era.printAndWait([
        urara.get_colored_name(),
        ' が見つめる先を追うと、日頃から小さな',
        urara.uma_sex_title,
        'と親しい商店街の人たちが、全員揃っていた。',
      ]);
      await era.printAndWait(
        '商店街の人「ウララ！ 一位じゃなくても、すごいぞ！」',
      );
      await era.printAndWait(
        '商店街の人「これからも好きなだけ走れ！ おれたちも、ずっと応援するからな！」',
      );
      await era.printAndWait(
        'デビューを果たしただけ、一着すらとれなくても、みんなは祭りのようにはしゃいでいる。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' は目に入りそうな「汗」をそっと拭い、笑顔でみんなへ全力で応えた。',
      ]);
      await urara.say_and_wait(
        'みんな、ありがとう！ 次はぜったい、はやく一着をとって見せる！',
      );
      await era.printAndWait('商店街の人たち「おお！ がんばれ——！」');
      await era.printAndWait(
        '商店街の人「トレーナーもお疲れさま！ ウララちゃんの世話、ありがとうな！」',
      );
      await era.printAndWait([
        'みんなからの祝福にいきなり包まれ、',
        you.get_colored_name(),
        ' は驚いたようにその場で固まった。',
      ]);
      await era.printAndWait(
        'いや、本当に驚いたのかもしれない。よく考えれば、以前こんな期待を向けられたことがあったか。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の戸惑いにすぐ気づいて、',
        urara.get_colored_name(),
        ' は笑いながら ',
        you.get_colored_name(),
        ' の手を握り、',
        you.get_colored_name(),
        ' を励まし始めた。',
      ]);
      await urara.say_and_wait([
        callname,
        '！ この機会に、みんなにも何か言おうよ！',
      ]);
      era.printButton('「あ？ 俺か？ でも俺も別に……」', 1);
      await era.input();

      await urara.say_and_wait([
        'だいじょうぶ！ 次はぜったいできるから、',
        callname,
        '、いま心のなかを叫んで！',
      ]);
      await era.printAndWait([
        'それなら、みんなの期待に応えないわけにはいかない。',
        urara.get_colored_name(),
        ' のきらきらした視線のなかで、',
        you.get_colored_name(),
        ' は深く息を吸った——',
      ]);
      await era.printAndWait([
        'だが最初の一語すら出ないうちに、力を入れすぎて頭のなかの最後の意識が切れ、',
        you.get_colored_name(),
        ' はうつ伏せにのけぞった。',
      ]);
      await urara.say_and_wait([
        'ん？',
        callname,
        '、どうしたの……えっ？ えっ！',
        callname,
        '！',
        callname,
        '——',
      ]);
      await era.printAndWait([
        '言えなかった感謝を抱えたまま、',
        urara.get_colored_name(),
        ' と周囲の悲鳴のなかで、体力を使い果たした ',
        you.get_colored_name(),
        ' は目を回して倒れた……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'ふう。ウララのデビューに付き合うのも、大変でしたね。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'どうか体には気をつけてください。ウララが一着をとる前に、トレーナーが先に潰れてしまっては……',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = 'やっと、初めての……';
    /**
     * 以降のメイクデビューと未勝利戦の勝利
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'どちらにせよ、吊られていた心は、初めての勝利で、ようやく少し休めます。',
      );
      era.drawLine();
      await era.printAndWait([
        urara.get_colored_name(),
        ' が最初にゴール板を駆け抜けたのを見て、',
        you.get_colored_name(),
        ' も硬い両肩を揉みながら立ち上がった。',
      ]);
      await era.printAndWait(
        '体はまだ重い。だが前回よりは軽い。担当が無事に一着をとったあとには、さらに身が軽くなった。',
      );
      await era.printAndWait([
        '少なくとも今度は、人前で簡単に倒れたりしない。遠くから走ってくる小さな影を見て、',
        you.get_colored_name(),
        ' はそのピンクへ手を上げた。',
      ]);
      await era.printAndWait([
        '汗に濡れた体操服から',
        urara.teen_sex_title,
        'の香りがする。',
        you.get_colored_name(),
        ' の呼びかけに気づき、反対側から走ってきた小さな',
        urara.uma_sex_title,
        'は、勝ち誇った笑顔のまま ',
        you.get_colored_name(),
        ' の前で止まった。',
      ]);
      await urara.say_and_wait([
        'うおっ——！ 一位！',
        callname,
        '！ 一位とったよ——！',
      ]);
      await urara.say_and_wait(
        'あっ、やばい！ ウイナーズサークルに入っちゃった。だいじょうぶかな……',
      );

      era.printButton('「いや、落ち着けウララ。お前が一着だ」', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'の頬を揉みながら、',
          you.get_colored_name(),
          ' は笑い、初勝利で興奮しすぎた担当をなだめた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の手を楽しんでいるのか、揉まれて少しずつ静かになった ',
          urara.get_colored_name(),
          ' も、心地よさそうな顔をした。',
        ]);
        await urara.say_and_wait(
          'あっ、ほんとだ！ ウララ、もう前のウララじゃないね～',
        );
        await urara.say_and_wait([
          callname,
          '、見た？ いま、ほんとに一番でゴール板を駆け抜けたよ！',
        ]);
      } else {
        await era.printAndWait([
          '息を切らす小さな',
          urara.uma_sex_title,
          'にタオルとスポーツドリンクを渡し、',
          you.get_colored_name(),
          ' はまだふらついている担当へ、静かに声をかけた。',
        ]);
        await era.printAndWait([
          '頬を叩いて水とタオルを受け取り、',
          urara.get_colored_name(),
          ' はやっと ',
          you.get_colored_name(),
          ' に、心の重荷が落ちた笑顔を見せた。',
        ]);
        await urara.say_and_wait(
          'あっ、ほんとだ！ 今度のウララ、ほんとに勝ったみたい！',
        );
        await urara.say_and_wait([
          'すごく疲れたけど、',
          callname,
          '、いま、ほんとに一番で駆け抜けたの？',
        ]);
      }

      era.printButton(
        '「もちろん！ 俺だけじゃない。見に来たみんなも見てるぞ！」',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' が指した先を見た。約束どおり、商店街の人たちがまた応援の横断幕を掲げている。',
      ]);
      await era.printAndWait([
        '「ウララ、一位おめでとう」。まだその日は来ていなかったのに、',
        urara.get_colored_name(),
        ' の勝利を信じて、みんなは先にこの幕を作っていた。',
      ]);
      await era.printAndWait([
        'ずっと支えてくれた人たちへ、力いっぱい手を振る。',
        urara.get_colored_name(),
        ' の笑顔は、いつにもまして輝いて見えた。',
      ]);
      await era.printAndWait([
        'デビュー後の初勝利にすぎなくても、',
        urara.get_colored_name(),
        ' と、',
        urara.sex,
        'を支えるみんなにとっては、記念すべき経験だ。',
      ]);
      await era.printAndWait([
        '目の前の光景を見て、ようやく軌道に乗ったと悟った ',
        you.get_colored_name(),
        ' も、やっと目を閉じて息を吐けた。',
      ]);
      await era.printAndWait([
        '選手通路へ戻っても、',
        urara.get_colored_name(),
        ' はまだ乗ったまま、',
        you.get_colored_name(),
        ' にいろいろな「初めて」を話していた。',
      ]);

      era.printButton(
        '「ウララ。一番前の『初めて』は、やっぱりすごかったか？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'うん！ 一番前を走ってるとき、見える景色、思ったよりきれい！',
      );
      await urara.say_and_wait(
        '先頭の風、すっごく強いよ！ でも前へ走れば、風が自分で道を開けるみたい！',
      );
      await urara.say_and_wait(
        'それに……一位をとるの、やっぱり楽しい！ みんなの笑顔も、楽しい！',
      );

      era.printButton('「じゃあ、次の勝利のために、もう一回だ」', 1);
      await era.input();

      await urara.say_and_wait('うん！ ぜったい、また一位とる！');
      await urara.say_and_wait([
        callname,
        '！ これからもこうして一緒なら、もっと遠くまで行けるよ！',
      ]);
      await era.printAndWait([
        '小さな担当が差し出した手を取る。',
        urara.get_colored_name(),
        ' と ',
        you.get_colored_name(),
        ' のこれからが、いま始まったばかりだ。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'そういうわけです。メイクデビュー、お疲れさまでした。私も、少し安心しました。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'あなたは、どうでしたか？ では、準備はいいですか。ウララと歩む日々に。',
      );
    };
    f.title = title;
    return f;
  })(),
  os_34: (() => {
    const title = 'みんな大好きな笑顔？';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '今日、ある催しのエキシビションに出たウララは、またしても意外でもあり当然でもある負け方をした。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'よくある展開です。ただ、トレーナーの',
        you.adult_sex_title,
        '（あなた）のほうは、相当頭を抱えています。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'なぜでしょう？ 帰り道、答えが出るまでぼんやりしてしまう人もいるでしょう。ですが……',
      );
      era.drawLine();
      await era.printAndWait([
        '本番では勝てるのに、なぜエキシビションだとまた最後尾なのか。',
        urara.get_colored_name(),
        ' は、いい加減に済ませる',
        urara.uma_sex_title,
        'ではない。',
      ]);
      await era.printAndWait([
        '相手が強すぎたのかもしれない。だが今の ',
        urara.get_colored_name(),
        ' なら、最後尾で大きく離されるほどではないはずだ。',
      ]);
      await era.printAndWait(
        '本番と集中の度合いが違う、という心理以外に、競争心がまだ低いのか。だとしたら……',
      );
      await era.printAndWait([
        '珍しくそばの担当の顔を見ず、',
        you.get_colored_name(),
        ' は視線と思考を、もっと遠い人混みへ投げた。',
      ]);
      await era.printAndWait([
        '何回負けても、',
        urara.get_colored_name(),
        ' は楽観を保てる。それが全部プラスとは限らない。むしろ別の危うさもある。',
      ]);
      await urara.say_and_wait('ずっとがんばれば、次はきっと取り返せるよ！');
      await era.printAndWait([
        'きょうのレースについて、',
        urara.sex,
        'は ',
        you.get_colored_name(),
        ' にそう言った。以前、',
        urara.sex,
        'の友だちから聞いた話でも、負けるたびいつもこうだったという。',
      ]);
      await era.printAndWait([
        '次はきっと勝つ。それは、だれを慰める言葉なのか。この考えは、',
        urara.get_colored_name(),
        ' を自分の偏見で測っているわけではない。',
      ]);
      await era.printAndWait([
        'レースへの見通しがより普通である ',
        you.get_colored_name(),
        ' の気持ちは落ち着いている。だが次は勝つと言う ',
        urara.get_colored_name(),
        ' は、本当に見た目どおり楽しいのか。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の小さな手を引いて人の流れを歩きながら、',
        you.get_colored_name(),
        ' は、いつか向き合わねばならない問いを考えていた。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' には、ずっと明るく前向きに、がんばって勝ち続けてほしい。だが',
        urara.sex,
        'との理解を、どうすればもっと速く深められるのか。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          '迷子にならないよ？ いつもこうやって手、つないでるでしょ？',
          callname,
          '、そんなに強く握らなくていいよ！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' のそばにぴったり寄り、',
          urara.get_colored_name(),
          ' は笑いながら、',
          you.get_colored_name(),
          ' の指をそっと握り返した。',
        ]);
        await urara.say_and_wait([
          'それにね、笑うほうが ',
          callname,
          ' に似合ってると思う。だから眉間しわめて考えないで！',
        ]);
        await era.printAndWait([
          '担当の笑顔のなかで、',
          you.get_colored_name(),
          ' は眉間と指の力を緩め、',
          urara.get_colored_name(),
          ' にも申し訳なさそうに笑った。',
        ]);
        await era.printAndWait([
          'そのとおりだ。うっかりしていた。自分が担うことばかり考えて、いちばん大事な',
          urara.sex,
          '本人がそばにいるのを忘れかけた。',
        ]);
        await era.printAndWait(
          'いつからだろう。二人きりで歩くときは、どこでも自然に、楽しそうに手をつなぐようになった。',
        );
      } else {
        await urara.say_and_wait([
          callname,
          '？ 力、入りすぎだよ？ ウララでも、手が痛くなるよ！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' に握られた手を引っ張り、',
          urara.get_colored_name(),
          ' の笑顔には、少し無理があるように見えた。',
        ]);
        await urara.say_and_wait(
          '道、人多いよ？ 気をつけないと危ない。楽しく帰ったほうがいいよね？',
        );
        await era.printAndWait([
          '担当の、文句みたいで優しい注意に、我に返った ',
          you.get_colored_name(),
          ' は慌てて体の力を抜いた。',
        ]);
        await era.printAndWait([
          'いつからだろう。気持ちは揺れても、',
          urara.get_colored_name(),
          ' はいつも自然に ',
          you.get_colored_name(),
          ' の手を取る。',
        ]);
        await era.printAndWait([
          'いまの',
          urara.sex,
          'は、',
          you.get_colored_name(),
          ' にどんな気持ちを持っているのか。それとも',
          urara.sex,
          'は、まだ異性としての認識が足りないのか……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '多くの目には、保護者が子供の手を引いているだけに見えるだろう。だが ',
        you.get_colored_name(),
        ' には、別の意味がある。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' に心を動かされ、惹かれて、',
        urara.sex,
        'のトレーナーになった。だが今は',
        urara.sex,
        'と触れるたび、',
        you.get_colored_name(),
        ' の理性が削れていくようだ。',
      ]);
      await era.printAndWait([
        urara.sex,
        'とは自然に甘え、自然に抱き合う。その一方で、',
        urara.sex,
        'の無邪気で幼い体へ、自然に「興味」が生まれつつある。',
      ]);
      await era.printAndWait(
        'このままでは、大人としての人生が終わる気がする。まさか本当に——',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'だがトレーナーの',
        you.adult_sex_title,
        '（あなた）が別の疑いに沈みかけたとき、すれ違う陰口が聞こえた。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '若い学生ふうの通行人ふたりが、',
        urara.get_colored_name(),
        ' の話をしていた。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '通行人A「あっちの',
        urara.child_sex_title,
        '、さっきのレースでビリだった子だろ？」',
      ]);
      await era.printAndWait([
        '通行人B「ハルウララだっけ？ どうせエキシビションだし、適当に走ってもいいんじゃない」',
      ]);
      await era.printAndWait([
        '通行人A「ちがうだろ。',
        urara.sex,
        'は勝てないんだよ。デビュー前から連敗してて、',
        urara.sex,
        'がどうデビューしたかもわからない」',
      ]);
      await era.printAndWait([
        '通行人B「すごいな。',
        urara.sex,
        '、中央トレセンにどうやって入ったんだ？」',
      ]);
      await era.printAndWait([
        '通行人A「たぶん',
        urara.sex,
        'のトレーナーが何かしたんだろ。あんなに仲良さそうだし、トレセンあるあるの……」',
      ]);
      await era.printAndWait(
        '通行人B「マジか。そのトレーナー、扱いやすそうな子を選んだわけだ……」',
      );
      await era.printAndWait([
        '無意味な陰口だと分かっていても、',
        you.get_colored_name(),
        ' は通行人の妄言が続くうち、少し焦れてきた。',
      ]);
      await era.printAndWait([
        '自分の評価はどうでもいい。だが',
        urara.get_colored_name(),
        'が弱くても、こんな陰口を言われる筋合いはない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が ',
        urara.get_colored_name(),
        ' をその場から遠ざけようとしたとき、小さな',
        urara.uma_sex_title,
        'は上を向いて ',
        you.get_colored_name(),
        ' の隠しきれない顔を見ると、自分から手を離した。',
      ]);

      era.printButton('「待て……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' の動きは一歩遅れた。気づいたとき、',
        urara.get_colored_name(),
        ' はもう、',
        urara.sex,
        'の陰口を言っていた人たちの前に立っていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が追いつくと、',
        urara.get_colored_name(),
        ' は、',
        urara.sex,
        'に萎縮した通行人ふたりの前に顔を寄せていた。幸い、その顔は優しい笑顔だった。',
      ]);
      await urara.say_and_wait(
        'ウララの話、してたよね！ いまのレース、見てくれたの？',
      );
      await era.printAndWait('通行人A「えっと、その、おれたち……」');
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'は耳を揺らし、澄んだ桜色の瞳に、戸惑うふたりの顔を映していた。',
      ]);
      await era.printAndWait([
        'さっきまで自分の陰口を言っていたふたりを前にしても、',
        urara.get_colored_name(),
        ' の表情は、いつもどおり春のように穏やかだった。',
      ]);
      await urara.say_and_wait([
        'えへへ～。うん！ ウララ、すごい',
        urara.uma_sex_title,
        'じゃないよ。そんなにはやくないし、だいたい毎回負けてる！',
      ]);
      await urara.say_and_wait(
        'でも、みんなの声が聞こえたら、ウララはまた力が出るよ！',
      );
      await era.printAndWait('通行人B「そ、そんなこと、本当に……」');
      await urara.say_and_wait(
        'うん！ 信じてるよ！ 走るのが大好きで、応援してくれるみんながいるから、次はぜったい勝つ！',
      );
      await era.printAndWait([
        'ほとんど言葉を失ったふたりを前に、',
        urara.get_colored_name(),
        ' は尻尾を振り続け、透き通った声に負の混じり気はなかった。',
      ]);
      await urara.say_and_wait(
        'だからよかったら、次もウララのレース、見に来てくれる？',
      );
      await era.printAndWait('通行人A&B「……うん、行く、行くよ。たぶん……」');
      era.println();
      if (high_relation) {
        await era.printAndWait([
          'ふたりのどもった約束を聞くと、',
          urara.get_colored_name(),
          ' はまず嬉しそうにうなずき、それから突然、熱い優しさを押しのけるように真面目な声になった。',
        ]);
        await urara.say_and_wait(
          'それからね。トレーナーは、ずっとウララを手伝ってくれる人。これからトレーナーの悪口、言わないでね……？',
        );
        await era.printAndWait('通行人A&B「……！」');
        await era.printAndWait([
          'かわいそうなふたりが、羞恥から癒やされ、さらに驚くまでを見て、小さな',
          urara.uma_sex_title,
          'はまたかわいい笑顔に戻った。',
        ]);
        await urara.say_and_wait([
          'えへへ～。怒ってないよ！ ただ、トレーナーがいつもそう言われると思うと、ちょっと熱くなっちゃうだけ！',
        ]);
        await era.printAndWait('通行人A&B「お……おお！」');
      }
      era.println();
      await urara.say_and_wait(
        'うん！ そういうこと！ 話聞いてくれてありがとう！ じゃあ帰るね！ 道、気をつけて！',
      );
      await era.printAndWait([
        '言葉を失った通行人ふたりに手を振って別れ、',
        urara.get_colored_name(),
        ' はまた ',
        you.get_colored_name(),
        ' のそばへ走ってきた。',
      ]);
      await era.printAndWait([
        urara.sex,
        'がさっき立っていた場所を見ると、',
        urara.get_colored_name(),
        ' と話した若いふたりは、ぼんやりした顔のままその場に立ち尽くしていた。',
      ]);
      await era.printAndWait(
        '長いあいだ顔を見合わせたあと、やっと我に返ったふたりは、またどもりながら背を向けて去った。',
      );
      await era.printAndWait([
        '通行人A「……あの子、応援することにする。なんだか',
        urara.sex,
        '、がんばってる気がする……」',
      ]);
      await era.printAndWait(
        '通行人B「お、おれも……あの子、おれのことまで心配して……」',
      );
      await era.printAndWait(
        '通行人A「何言ってんだ。あれは俺に言ったんだろ……」',
      );
      await era.printAndWait('通行人B「ちがう、おれにだ……」');
      await era.printAndWait('……今どきの若者は、みんなこうなのか。');
      await era.printAndWait([
        'おかしくなったふたりの背中を見送り、',
        you.get_colored_name(),
        ' は仕方なく首を振り、注意をまた ',
        urara.get_colored_name(),
        ' へ戻した。',
      ]);

      era.printButton('「ウララ、大丈夫か？」', 1);
      await era.input();

      await urara.say_and_wait([
        callname,
        '、心配してるの？ ウララ、だいじょうぶだよ！',
      ]);

      era.printButton(
        '「でも、もしウララが他人の言葉で傷ついたら、たまらない」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'うん！ だから何が起きても、ウララはほんとに ',
        callname,
        ' に感謝してるよ！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の心配に、小さな',
        urara.uma_sex_title,
        'はもう一度、',
        you.get_colored_name(),
        ' へまっさらな感謝を向けた。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の安心する笑顔をひとり占めしながら、さっきのふたりを思い出し、',
        you.get_colored_name(),
        ' は急に何かが分かった気がした。',
      ]);

      if (era.get('cflag:38:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '待て。さっきのふたりが ',
          urara.get_colored_name(),
          ' と話し終わったあとの顔、どこかで見たことがないか。',
        ]);
        await era.printAndWait([
          'カレンチャンにかわいさの伝道を受けたあと、そのかわいさに落ちた人たちも、ああいう顔をしていた。',
        ]);
      }
      era.println();
      await era.printAndWait('……なるほど。本当にそういうことか。');
      await era.printAndWait([
        urara.uma_sex_title,
        'にとってファンの支援は大事だ。そして ',
        urara.get_colored_name(),
        ' には、人が',
        urara.sex,
        'を応援したくなる珍しい性質がある。',
        you.get_colored_name(),
        ' もそのひとりだ。',
      ]);
      await era.printAndWait([
        'つまり',
        urara.sex,
        'は、無意識に自分の武器を使っているのか。',
        urara.get_colored_name(),
        ' も、とんでもない魅魔だったりするのか。',
      ]);
      await era.printAndWait([
        '気持ちは少し複雑だ。だが ',
        you.get_colored_name(),
        ' も分かっている。その性質がなくても、こんなに優しい子を拒める人は少ない。',
      ]);
      await era.printAndWait(
        'それでも、いまのふたりの理解の深さでは、最初に考えていた問いにはまだ答えが出ない。',
      );
      await era.printAndWait([
        '焦ってはいけない。いまの最優先は、まず',
        urara.sex,
        'がレースで安定して勝つことだ。',
      ]);
      await era.printAndWait([
        'そう思いながら、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' が差し出した小さな手を再び取った。伸びた影が、陽の下でもう一度重なる。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '大事にはなりませんでしたが、意外と不快でしたね。通行人のみなさん。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'それに、申し訳ありません。もう少しだけ、お時間をいただきます。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '今回の問題は軽かった。ですが、これからウララが解けない困難に出会ったら、あなたはどうしますか？',
      );
      era.printButton(
        '「担当の心と体も、トレーナーの仕事のうちだ」（好感+20）',
        1,
      );
      era.printButton(`「逃げない。${urara.sex}を守る」（恋慕+5）`, 2);
      const ret = await era.input();
      await inner_urara.say_as_unknown_and_wait([
        '理由が何であれ、『',
        urara.get_colored_actual_name(),
        '』を大切にしてくれるのですね。なるほど、『私』が信じたあなたは……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'わかりました。内側では、あなたに不満は言いません。だから外側では、どうか',
        urara.sex,
        'を、これからも見てあげてください。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '心から願っています。ウララが足を止めてしまう日が、未来に来ませんように。',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47: (() => {
    const title = '意外の年末相談！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {PrintedSpan} call_30
     * @param {PrintedSpan} call_61
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_30,
      call_61,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        'きょうのウララは、だれもいないトレーナー室へ早く来ていた。ひとりの',
        urara.sex,
        'は、何か悩みがあるのでしょうか。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'では、',
        urara.sex,
        'がトレーナーの',
        you.adult_sex_title,
        '（あなた）に何を相談したいかは、どうか自分の耳で聞いてください。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '祭りのあと、ひとりで通りを歩き、',
        you.get_colored_name(),
        ' はたまに止まって酸えた指の節を揉み、よろよろとトレセンへ戻る。',
      ]);
      await era.printAndWait(
        '残った祭りの空気と、まだ熱い商店街の人たちに押され、手にしたものはまた大幅に超過していた。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' がいればよかった。荷物は減らないどころか増えるだろうが、少なくとも帰りは気持ちが楽だったはずだ。',
      ]);
      await era.printAndWait([
        '仕方なく硬い手を擦り、',
        you.get_colored_name(),
        ' はトレーナー室の扉を開ける。だが想像していた無人の涼しさは来ない。',
      ]);
      await era.printAndWait(
        '先に来た人が室内の暖炉と照明をつけ、数日前にしまいそびれたクリスマス飾りも光っている。',
      );
      await era.printAndWait(
        'ふわふわの冬服を着た、ピンクの小さな生き物が、暖色の光の中で楽しそうに部屋を片付けている。',
      );
      await era.printAndWait([
        '扉を開けて入ってきた ',
        you.get_colored_name(),
        ' を見て、待ちかねていた小さな',
        urara.uma_sex_title,
        'はソファから悪戯っぽく起き上がり、',
        urara.sex,
        'のトレーナーに桜色の目を瞬く。',
      ]);
      await urara.say_and_wait([
        callname,
        '、商店街に行ってたんだね！ 早く入って、外まだ寒いよ！',
      ]);
      await era.printAndWait(
        '思いがけない驚き。さっきまで担当を気にしていたら、次の瞬間に本当に現れた。',
      );

      era.printButton('「お……おう！」', 1);
      await era.input();

      await era.printAndWait([
        '駆け寄って荷物を手伝ってくれる小さな',
        urara.uma_sex_title,
        'に応えながら、',
        you.get_colored_name(),
        ' はどこかおかしいと気づく。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' がトレーナー室を片付けに来るのは不思議ではない。だが待つより、',
        urara.sex,
        'は自分から動くほうが好きだ。',
      ]);
      await era.printAndWait([
        '入る前から机に置いてあった飲み物と、小山になったクッキーを見ても、今度の小さな',
        urara.uma_sex_title,
        'は明らかに ',
        you.get_colored_name(),
        ' を待っていた。',
      ]);
      await era.printAndWait([
        urara.sex,
        'も ',
        you.get_colored_name(),
        ' とクリスマスを過ごしたかったのか？ だが ',
        urara.get_colored_name(),
        ' がそう思うなら、当日に来ている。これは何の準備だ？',
      ]);
      await urara.say_and_wait([
        callname,
        '、ぼーっとしてるの！ 部屋は片付いたよ、早く座って！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の考えを遮り、小さな',
        urara.uma_sex_title,
        'はぼんやりした客を椅子に押し込み、机のクッキーの山を ',
        you.get_colored_name(),
        ' の前へ押す。',
      ]);
      await era.printAndWait([
        '目の前の形の妙なクッキーは、最低限の見分けがつくだけなのに、祭りの販促品にはない自然な香りがする。',
      ]);

      era.printButton('「ん……これは？」', 1);
      await era.input();

      await urara.say_and_wait([
        'うさぎさん！ これねこちゃん！ これにんじん！ これは……',
        call_61,
        ' と ',
        call_30,
        '？ まあ、そこは大事じゃないよ！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の、二つの意味がある問いを聞いて、',
        urara.get_colored_name(),
        ' は少し考えてから、先に具体的なほうに答える。',
      ]);
      await era.printAndWait([
        'とんでもないものも混ざっている気がするが、',
        urara.get_colored_name(),
        ' の言うとおり、そこは本題ではない。',
      ]);
      await era.printAndWait([
        '担当の桜瞳の期待する視線の下、',
        you.get_colored_name(),
        ' は皿の中から色のいい一枚を摘んで口へ入れる。',
      ]);
      await urara.say_and_wait([
        'えへへ～これ、全部ウララが作ったよ！ みんなのぶんはもう届けたから、これは全部 ',
        callname,
        ' の！',
      ]);
      await urara.say_and_wait([
        callname,
        '、ウララのクッキー、おいしい？ 感想ある？',
      ]);
      await era.printAndWait([
        '乳の甘い味が舌に広がるにつれ、思わず ',
        you.get_colored_name(),
        ' は皿の次の一枚へ手を伸ばす。',
      ]);
      await era.printAndWait([
        'これは相当おいしい。形が分からなくても、クッキーとしては、',
        you.get_colored_name(),
        ' が最近食べた手作りの贈り物のどれにも負けない。',
      ]);
      await era.printAndWait([
        '唯一の問題は、',
        urara.get_colored_name(),
        ' の熱量が商店街のみんなに負けないことだろう——量が多すぎる。',
      ]);
      await era.printAndWait([
        '二枚目をそっと飲み込み、',
        you.get_colored_name(),
        ' は真剣に待つ小さな',
        urara.uma_sex_title,
        'へ、半分冗談で最高の評価を出す。',
      ]);

      era.printButton(
        '「この味が出せるなら、ウララは将来いい奥さんになれるな。」',
        1,
      );
      await era.input();

      if (high_relation) {
        await urara.say_and_wait(
          'え？ あ、え？ うん！ ウララ、将来いい奥さんになるよ！',
        );
        await urara.say_and_wait([
          'だから ',
          callname,
          ' も、将来いい旦那さんになるの！ えへへ～えへへ……うぅ……',
        ]);
        await era.printAndWait([
          '恥ずかしさで耳を折り、だんだん小さくなる声とともに、',
          urara.get_colored_name(),
          ' のもともと小さな体が目に見えてもう一回り縮む。',
        ]);
        await urara.say_and_wait(
          'あんまり分かんないけど、お母さんが言ってた。こんな冗談は、相手が本気にするかもしれないって考えてね……？',
        );
        await era.printAndWait([
          'クッキーの山の後ろから、緊張して真っ赤な小さな顔の半分を出し、',
          urara.get_colored_name(),
          ' は三分あたふた、七分羞じらいで言う。',
        ]);
        await era.printAndWait('……本当に分かっていないのか？');
      } else {
        await urara.say_and_wait([
          'え？ ',
          callname,
          '！ そういう言い方、だめだよ！',
        ]);
        await urara.say_and_wait(
          'あんまり分かんないけど、お母さんが言ってた。こんな冗談、勝手に言っちゃだめ！',
        );
        await era.printAndWait([
          '口では分からないと言いながら、',
          urara.get_colored_name(),
          ' の体は正直に、赤らんだ顔をクッキーの山の裏へ隠す。',
        ]);
        await urara.say_and_wait([
          callname,
          '、たくさん人にそんなこと言ってないよね？ だめだよ！ みんなが本気にしたら困るよ!',
        ]);
        await era.printAndWait([
          'だらしない大人を叱るみたいに、隠れの後ろから出た一対のピンクのイヤーカバーが、慌てて ',
          you.get_colored_name(),
          ' を指さしている。',
        ]);
        await era.printAndWait('……分かっているではないか？');
      }
      era.println();
      await era.printAndWait([
        '待て、今のは言い過ぎでは……違う！ これは ',
        urara.get_colored_name(),
        ' に何を言っている？！',
      ]);
      await era.printAndWait([
        '担当の予想外の衝撃的な返事を受け、',
        you.get_colored_name(),
        ' は妙な喜びがわずかに湧く一方で、自分の発言に少しむかつく。',
      ]);
      await era.printAndWait([
        '今日の ',
        urara.get_colored_name(),
        ' だけでも十分おかしいのに、自分までこんな直球の変な冗談を飛ばして、話を殺したのではないか？',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' が軽率さを悩んでいるとき、向かいの ',
        urara.get_colored_name(),
        ' が自分から机のクッキーを一枚取る。',
      ]);
      await urara.say_and_wait([
        'そうだ、',
        callname,
        '、なんでトレーナーになったの？',
      ]);
      await era.printAndWait([
        '今の ',
        you.get_colored_name(),
        ' は、なぜこの話題か聞き返したくなる。だが聞くのが小さな ',
        urara.get_colored_name(),
        ' なら、急いで答えをひっくり返す必要もない。',
      ]);
      await era.printAndWait([
        '今はよく分からないことがあっても、あとで意図が分かるときが来る。',
        urara.get_colored_name(),
        ' との付き合いは、いつもそうだ。',
      ]);

      era.printButton(
        '「先に確認するけど、興味と情熱は、ウララが聞きたい答えじゃないよな？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        callname,
        ' の気持ちは疑わないよ。でも ',
        callname,
        ' が欲しいものは何か、知りたい！',
      ]);
      await era.printAndWait([
        '夢ではなく欲を聞くのか。',
        urara.get_colored_name(),
        ' はそんなに鋭いのか？ 今の小さな',
        urara.uma_sex_title,
        'は、侮れない。',
      ]);
      await era.printAndWait([
        '育ち盛りの青春の',
        urara.teen_sex_title,
        'に、大人の世俗的な欲の話をするのか。うん……',
      ]);
      await era.printAndWait([
        '考えを軽く整え、ため息みたいに深く息を吸い、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' の澄んだ視線の下で、ゆっくり最初の言葉を出す。',
      ]);

      era.drawLine({ content: 'お話の時間' });
      await era.printAndWait(
        '特別なことはない。最初に戻れば、その人が欲しかったものは単純で、安定した仕事、給料、つまり金？',
      );
      await era.printAndWait([
        you.sex,
        'はあとで選ぶとき、専門の道のなかで、いちばん安定して金になる職を取っただけだ。',
      ]);
      await era.printAndWait(
        '少なくとも当時は——今もそうか？ この職は世間ではとても優秀だとされ、その人には少し才能があった。',
      );
      await urara.say_and_wait('そっか、おうちがお金足りなかったの？');
      await era.printAndWait(
        '違うよ。その人は貧しい家の出でもなく、生活に追われても、大きな外圧があったわけでもない。ただ……',
      );
      await era.printAndWait(
        'きらきらのショーウィンドウの前を何度か通っても、欲しいものを一件も買えなかった。それだけだ。',
      );
      await era.printAndWait([
        'だから、うん……要するに安心と満足が足りなかったんだろう。',
        you.sex,
        'はたぶん、昔からまとわりつく不安を、それで払いたかっただけだ。',
      ]);
      await urara.say_and_wait('でもその人、最後は願い叶えたんでしょ？');
      await era.printAndWait([
        'でもその人、志が足りないんだよ。',
        you.sex,
        'は今まで来るのにずいぶん苦労して、途中で何度も諦めかけた。',
      ]);
      await era.printAndWait([
        '三女神の加護か？ それとも',
        you.sex,
        'が、自分を捨てるのが怖すぎたのか？',
      ]);
      await era.printAndWait(
        '結果、よろよろ進んだその人はそれでも中央に入れた。無事すぎるくらいだ。',
      );
      await urara.say_and_wait('じゃあ……その人、今はどう思ってるの？');
      await era.printAndWait(
        'この仕事はいいよ？ 住むところも食事もある。待遇も社会的な立場も悪くない。給料の入り方が少し変でも、満足はしている。',
      );
      await urara.say_and_wait('うんうん！ つまりその人も、1着取ったんだね！');
      await era.printAndWait([
        '以前なら、取っていないと言ったかもしれない。だが今は、',
        you.sex,
        'はもうすぐ、欲しい1着を見つけられそうだ——',
      ]);
      era.drawLine();

      await you.say_and_wait(
        'それも、その人に今、特別な担当がいるおかげだ。',
        true,
      );
      await era.printAndWait([
        '結びを口に出せず、',
        you.get_colored_name(),
        ' は苦笑して昔話を終える。顔を上げると、予想していた嫌悪、憐れみ、不可解……',
      ]);
      await era.printAndWait([
        'どれも出てこない。',
        urara.get_colored_name(),
        ' は普段の傾きを見せず、',
        urara.sex,
        'はただ真剣に ',
        you.get_colored_name(),
        ' の話を聞いている。',
      ]);
      await era.printAndWait([
        'だがこれはまずい。表情が読めなくても、',
        urara.sex,
        'は自分のトレーナーがこんなくどくて脂っこい大人だと考えているはずだ……',
      ]);
      await urara.say_and_wait([
        'うん！ ウララ、分かった！',
        callname,
        '、さわやかだね！ 地球を占領しても景色を見るためだけの悪役ボスみたい！',
      ]);
      await you.say_and_wait(
        '……は？ さわやか？！ 悪役ボスって何だ？ ウララ、担当トレーナーはあまり分かっていないし、あまり分かってもいないぞ——',
        true,
      );
      await era.printAndWait([
        '残念ながら、何度も固まっている ',
        you.get_colored_name(),
        ' に直接の答えは来ない。',
        urara.get_colored_name(),
        ' はただ嬉しそうに笑っている。',
      ]);
      await era.printAndWait([
        '過去で抽象になった大人への嫌悪も憐れみも不可解もなく、ただ大事な誰かのために嬉しい、純粋な笑顔だ。',
      ]);
      await urara.say_and_wait([
        'ふんふん～',
        callname,
        ' は『ウララ』を知ってウララを助けてくれた。今日ウララも、『',
        callname,
        '』をもっと知れたよ！',
      ]);
      await urara.say_and_wait([
        'これでウララも分かった。難しいことを、どう話せば ',
        callname,
        ' に伝わるか！',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'の嬉しそうな笑顔を見て、',
        you.get_colored_name(),
        ' はやっと分かる。なんだ、余計なことを考える大人は馬鹿だ。',
      ]);

      era.printButton(
        '「ウララ、次に知りたいことがあったら、直接聞いていい。担当は隠したりしない。」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'でも、こういう走りの歩調、すごくいいよ！ ',
        call_30,
        ' の物語みたい！',
      ]);
      await era.printAndWait([
        'この子は本当に天使か？ 小さな担当の、深そうな言葉を噛みしめながら、',
        you.get_colored_name(),
        ' は皿の次のクッキーへ手を伸ばす。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' と一緒に少し止まり、',
        urara.get_colored_name(),
        ' はやっと勇気を出したみたいに、また顔を上げて ',
        you.get_colored_name(),
        ' を見る。',
      ]);
      await urara.say_and_wait([
        callname,
        '、最近ウララ、ウララにとても似てるのに、すごくひとりぼっちの',
        urara.uma_sex_title,
        'の夢を見たの。',
      ]);
      await urara.say_and_wait([
        '夢の中の',
        urara.sex,
        'は走ってなくて、みんなとも少し離れてた。だからウララ、',
        urara.sex,
        'を誘おうとしたの。',
      ]);
      await urara.say_and_wait([
        'でも、',
        urara.sex,
        'の笑顔、本当に悲しそうで、何度もウララから離れて、最後は完全に消えちゃった。',
      ]);
      await urara.say_and_wait([
        '顔は同じなのに、ウララはつらいとき泣ける。',
        urara.sex,
        'は、ああやって黙ったまま笑うだけ。',
      ]);
      await era.printAndWait([
        '自分の両手を見下ろし、笑顔はまだ顔に残っているのに、',
        urara.get_colored_name(),
        ' の耳はもう力なく垂れている。',
      ]);
      await urara.say_and_wait([
        'ウララ、どうしても',
        urara.sex,
        'をひとりぼっちのままにしたくない。でも',
        urara.sex,
        'は、それでいいって思ってるみたい……',
      ]);
      await urara.say_and_wait([
        'どうしようもないって思うとき……',
        callname,
        ' なら、どうする？',
      ]);

      await inner_urara.say_as_unknown_and_wait([
        '……急で、肝心な相談です。ではトレーナー',
        you.adult_sex_title,
        '（あなた）の意見は？',
      ]);
      era.printButton(
        '「そうだな……どれだけ難しくても、自分が望むほうへ進もう。」（芝適性アップ）',
        1,
      );
      era.printButton(
        '「うん……今の困りごとを楽しめるようになるのも、幸せの一種だよ？」（中距離&長距離適性アップ）',
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1) {
        await urara.say_and_wait([
          'でもそうしたら、',
          urara.sex,
          'がもっと悲しくなったら……',
        ]);
        await you.say_and_wait(
          '今のウララにはまだ納得できないかもしれない。でもどこかで、人とぶつかり合うのは避けられないよ？',
        );
        await you.say_and_wait([
          'それにウララは、まだあの',
          urara.uma_sex_title,
          'に自分の気持ちを伝えてないだろ？ 始まってもいないなら、怖がる必要もない。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' の日常と同じだ。気持ちを整えたら、あとは大胆に進めばいい。',
        ]);
        await era.printAndWait([
          '皿から、微笑んでいるみたいな「',
          call_61,
          '」のクッキーを摘み、',
          you.get_colored_name(),
          ' は笑いながら ',
          urara.get_colored_name(),
          ' の小さな口へ押し込む。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の言葉をクッキーと一緒にゆっくり噛み、何かを思い出した ',
          urara.get_colored_name(),
          ' の目もだんだん明るくなる——',
        ]);
      } else {
        await urara.say_and_wait('今の困りごと……？');
        await you.say_and_wait(
          'ウララは友だちづくりで初めてつまずいた。でも困りごとを解いたあと、振り返れば成長以外にも嬉しさがあるはずだ。',
        );
        await you.say_and_wait(
          'それにウララは、このまま諦めたりしないだろ？ ウララの目標は、みんなが嬉しくなることだよな？',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' の進む歩調と同じだ。歯を食いしばれば、悩みも会心の笑みになる。',
        ]);
        await era.printAndWait([
          '皿から、頬がふくらんでいるみたいな「',
          call_30,
          '」のクッキーを摘み、',
          you.get_colored_name(),
          ' は笑いながら ',
          urara.get_colored_name(),
          ' の手のひらに乗せる。',
        ]);
        await era.printAndWait([
          '考え込むように手のひらのクッキーを見て、',
          urara.get_colored_name(),
          ' は何か分かったみたいに笑って口へ入れる——',
        ]);
      }
      era.println();
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'は、もう心の中で答えを決めているらしい。満足して ',
        urara.get_colored_name(),
        ' に頷き、',
        you.get_colored_name(),
        ' は視線をまた机へ戻す。',
      ]);
      await era.printAndWait(
        '時間が進むにつれ、あいだにあった心の隔たりみたいな菓子の山も、二人の打ち明けのなかで知らないうちに消えていた。',
      );
      await era.printAndWait([
        'だから今はもう遅く、',
        you.get_colored_name(),
        ' と同じくそれに気づいた ',
        urara.get_colored_name(),
        ' も、',
        you.get_colored_name(),
        ' の肩の後ろの壁時計へ目をやる。',
      ]);
      await urara.say_and_wait([callname, '、このあと……あ！ もうこんな時間！']);
      await era.printAndWait([
        '時計を見る。うん、もう「寮門限賞」の時間だ。',
        you.get_colored_name(),
        ' が背筋を伸ばすのを見て、',
        urara.get_colored_name(),
        ' も察して立ち上がる。',
      ]);
      await era.printAndWait([
        'だがトレーナー室を出て走り出す前に、',
        urara.get_colored_name(),
        ' は名残惜しそうに、別れ前の最後の問いを挟む。',
      ]);
      await urara.say_and_wait([
        'そうだ！ ',
        callname,
        '、これからお正月だよ！ 今夜みたいにしてもいい？',
      ]);
      await urara.say_and_wait([
        'お菓子、もっとたくさん用意するから！ そのとき、',
        callname,
        '、まだウララと遊べる？',
      ]);

      era.printButton('「ウララがそうしたいなら、いつでもいい！」', 1);
      await era.input();

      await era.printAndWait([
        '二人が賑やかに冷たい風へ飛び出す前、',
        you.get_colored_name(),
        ' は満足して ',
        urara.get_colored_name(),
        ' に笑いながら答える。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'ただ次回、ウララの用意するお菓子がもう少し適量なら、もっと完璧でしょう……',
      );
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'あなたをより知れた今日のウララは、とても満足しています。忍耐にも、改めて礼を。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ですがウララが安心した今、わたくしからも一つ、答えを続けていただきたいのです。',
      );

      await inner_urara.say_as_unknown_and_wait(
        '先ほどの、金だの何だのという発言は、あなたの本音、あるいは本当の話ですか？',
      );
      era.printButton(
        '「本当だ——そう言うと、俗っぽくて怒られるか。」（好感+20）',
        1,
      );
      era.printButton(
        '「少なくとも、自分が一番嫌な……大人？ にはならなかった。」（恋慕+5）',
        2,
      );
      ret.push(await era.input());
      await inner_urara.say_as_unknown_and_wait(
        'そうですか。では私たちの関係もここまでです——冗談です。わたくしは、そこまであなたを嫌ってはいません。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'ええ、『嫌い』です。わたくしはほとんどの人間と',
        urara.uma_sex_title,
        'が嫌いです。あなたを、そこまで嫌っていないだけ。少なくとも、あなたは誠実ですから。',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'はぁ……お気づきでしょう。今のウララの体には、不思議な力が現れています。',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.uma_sex_title,
        'の解けない謎は星のように多い。ウララの加護が何なのか、言えるのは三女神だけかもしれません。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'わたくしは根拠のない奇跡が好きではありません。来歴の分からない希望を信じるのも、人を傷つけるだけです。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '冷や水を浴びせるつもりではありません。わたくしもかつては……すみません。隠したいわけではなく、途方もない話をどこから話せばよいのか……',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ですがあなたは確かに担当の未来を導いています。どうか、自分の選択にできるだけ責任を持ってください。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'そしてあの孤独な',
        urara.uma_sex_title,
        '……ひねくれた',
        urara.sex,
        'は、ひとりでも大丈夫でしょう。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……慣れます。いつか慣れます。すべてが、すべて……',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '新年の抱負';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 ハルウララのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     * @param {PrintedSpan} call_77 ハルウララのナリタトップロードへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (
      urara,
      inner_urara,
      opera,
      you,
      callname,
      call_15,
      call_30,
      call_61,
      call_77,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait(
        '他人との付き合いは評価しません。ですがウララのところでは、あなたは意外と幸せな人になれるかもしれません。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'は？ ウララのお母さん……違いますよ。ウララの『お母さんたち』が怒ります。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'すみません、少し浮かれていました。せっかくの新年なので——',
      );
      era.drawLine();
      await urara.print_and_wait([
        'お菓子でいっぱいの袋を提げ、玄関に立つ ',
        urara.get_colored_name(),
        ' は考え込むように耳を揺らし、',
        callname,
        ' に会ったらどんな驚きを渡そうか考える。',
      ]);
      await urara.print_and_wait([
        call_61,
        ' は大事なお礼はきちんと、と言ってた。だから ',
        urara.get_colored_name(),
        ' は、このお正月に ',
        callname,
        ' へもう一度、ちゃんと気持ちを伝えたい。',
      ]);
      await urara.print_and_wait(
        '今度は適量のクッキーだけ。でも二人で足りるかな？ 同じことをもう一度したら、まだ驚きになる？',
      );
      await urara.print_and_wait([
        'でも前も褒められたし、',
        callname,
        ' が好きならいいよね！',
        call_30,
        ' と ',
        call_77,
        ' も、贈り物は気持ちが大事だって！',
      ]);
      await urara.print_and_wait([
        'そうだ！ プレゼントも準備できた、お礼の言葉も覚えた、大丈夫！ ',
        callname,
        ' 奇襲、準備OK、ウララGO！',
      ]);
      await urara.print_and_wait([
        '深く息を吸い、「ちゃんとお礼する」流れを心の中で予行し、小さな',
        urara.uma_sex_title,
        'はゆっくり手を ',
        callname,
        ' の住まいのインターホンへ伸ばす……',
      ]);
      era.drawLine();
      await era.printAndWait([
        'そのあと、小さな',
        urara.uma_sex_title,
        'が玄関に立ったまま動かないのを見つけた ',
        you.get_colored_name(),
        ' が先に扉を開ける。成功した奇襲は、相手もびっくりさせる。',
      ]);
      await urara.say_and_wait([
        'え？ ',
        callname,
        '……あけましておめでとう！ あの……それと！ 去年は ',
        callname,
        ' にお世話になったよ！ つ、次は……',
      ]);

      era.printButton(
        '「ありがとう！ とりあえず早く入って！ 外は寒いし、無理しなくていいよ？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '見破られて戸惑う',
        urara.teen_sex_title,
        'を暖かい室内へ通し、',
        you.get_colored_name(),
        ' は笑いながら温かい手で、凍えて赤い小さな',
        urara.uma_sex_title,
        'の顔を包む。',
      ]);
      await era.printAndWait([
        '冷たい頬が解けていくにつれ、',
        urara.get_colored_name(),
        ' の凍っていた笑顔も、いつもの温かく明るい弧を取り戻す。',
      ]);
      await urara.say_and_wait([
        'えへへ～ごめんね ',
        callname,
        '、続き、やっぱり出てこなかった……',
      ]);

      era.printButton(
        '「大丈夫、気持ちは受け取ったよ。それに『Simple is best』だし。」',
        1,
      );
      await era.input();

      if (era.get('abl:52:英语') < 2) {
        await urara.say_and_wait('Sim……？ ん……それ、どういう意味だっけ？');
        await era.printAndWait([
          '少なくとも ',
          urara.get_colored_name(),
          ' の英語が苦手なのは予想どおりだ。仕方なく',
          urara.teen_sex_title,
          'の髪を撫で、',
          you.get_colored_name(),
          ' は',
          urara.sex,
          'の手のお菓子袋を受け取る。',
        ]);
      }
      await era.printAndWait([
        '遊び心のある手作りクッキーと新鮮なみかんを机に並べ、そばの小さなトースターは餅を乗せる準備もできている。',
      ]);
      await era.printAndWait([
        '好奇心の目で ',
        callname,
        ' の住まいを見回し、小さな',
        urara.uma_sex_title,
        'もすぐ温かい空気のなかで、来たばかりの遠慮を脱ぐ。',
      ]);
      await era.printAndWait([
        '机を囲んでお菓子と果物を食べ、変わらない安心のなかで、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' は途切れ途切れにいろいろな話をする。',
      ]);
      await era.printAndWait([
        '年末に新年も一緒と約束したので、',
        urara.get_colored_name(),
        ' を自分の住まいへ呼んだ。悪くない判断だ。',
      ]);
      await era.printAndWait([
        '泡立つ餅を目を輝かせて見つめる ',
        urara.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' はまたかわいい小動物を見ている気がする。',
      ]);

      era.printButton(
        '「ウララ、新年に、これから先の日々への……抱負はある？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '焼けた餅を一枚 ',
        urara.get_colored_name(),
        ' の椀へ挟み、',
        you.get_colored_name(),
        ' は箸で餅を突く小さな ',
        urara.get_colored_name(),
        ' と、ゆっくり次の話を始める。',
      ]);
      await urara.say_and_wait(
        '『ほう』、『ふ』？ それなに……あ、もしかしてシュークリーム？',
      );
      await era.printAndWait([
        '長く伸びた餅を口に咥えたまま、',
        urara.get_colored_name(),
        ' は首を傾げて問いを投げ返す。',
      ]);

      era.printButton(
        '「……分かった、シュークリームが食べたいなら次買うよ。でも『抱負』は、今年の目標のことだよ？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '目標なんだ！ じゃあ、前に言ったのと同じだよ？ いっぱい走って、たくさん1着取る！',
      );
      await urara.say_and_wait([
        'ウララ、頑張って走るよ！',
        callname,
        ' も、これからもウララを手伝ってくれるよね！ みんなを嬉しくしようね！',
      ]);
      await era.printAndWait([
        'それは契約してからずっとやってきたことではないか？ ',
        urara.get_colored_name(),
        ' のかわいい笑顔を前に、',
        you.get_colored_name(),
        ' は少し手も足も出ない。',
      ]);
      await era.printAndWait([
        urara.sex,
        'の言い方は相変わらずあやふやだ。まだ童心なのか、考えてはいるのに省きすぎなのか。',
      ]);
      await era.printAndWait([
        'だが時間は待たない。担当が準備できたと言うなら、次の行動計画も立て始めなければ。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'では謎解きの得意なトレーナー',
        you.adult_sex_title,
        '（あなた）は、近いうちにウララへいちばん合う活動は——',
      ]);
      era.printButton(
        '「そういえば、この前の年末試験の成績はどうだ？ 伸びたか？」（根性+10）',
        1,
      );
      era.printButton(
        '「今は正月だ。せっかく暇があるなら、もっと休もうか？」（スタミナ+10）',
        2,
      );
      era.printButton(
        '「ところでウララ、最近休みに何の漫画やアニメを見てる？」（スキルPt+20）',
        3,
      );
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await urara.say_and_wait('えええええ～！？');
          await era.printAndWait(
            '正月に勉強の話とは、実に悪鬼の策！ 世界でいちばん嫌な大人も、これ以上はない！',
          );
          await era.printAndWait([
            callname,
            ' の何気ないように見える問いで、いつも明るい ',
            urara.get_colored_name(),
            ' まで大きく揺れる！',
          ]);
          await era.printAndWait([
            'もちろん ',
            you.get_colored_name(),
            ' は ',
            urara.get_colored_name(),
            ' の勉強の様子をとうに知っている。この問いは、「三日坊主の',
            urara.teen_sex_title,
            '」への小さな注意だ。',
          ]);
          if (era.get('abl:52:英语') < 2) {
            await era.printAndWait(
              'それに、そんな簡単な英語も分からないのは危うすぎる。教育者として放っておけない。',
            );
          }

          era.printButton(
            '「怖がるな。責めるつもりじゃない。とにかく頑張って乗り越えよう。やる気があれば良くなる。」',
            1,
          );
          await era.input();

          await urara.say_and_wait(
            'うぅ……でも走るのとレースのほうが楽しいよ！ でも、でも……分かった……',
          );
          await era.printAndWait([
            urara.get_colored_name(),
            '、',
            callname,
            ' を卑怯だと思わないでくれ。担当を落とすつもりではない。三日坊主より、続けるほうが速く走れるんだよ？',
          ]);
          await era.printAndWait([
            '小さな',
            urara.uma_sex_title,
            'の目の中の、かわいそうな桜二つと、餅でハムスターみたいに膨らんだ小さな顔を前に、',
            you.get_colored_name(),
            ' は後ろめたさを隠して視線を逸らす。',
          ]);
          await urara.say_and_wait([
            'ひどいよ……ウララ、',
            callname,
            ' のおうちに泊まりたかったのに……',
          ]);
          await you.say_and_wait('いや、だから……ん？！');
          break;
        case 2:
          await urara.say_and_wait(
            'ん？ もっと休むの？ でもウララ、いつもよく寝てるよ！',
          );

          era.printButton(
            '「せっかくの正月だ。元気に終わるのがいちばんいい。暇があるなら、焦らなくていい。」',
            1,
          );
          await era.input();

          await era.printAndWait([
            '優秀な競走',
            urara.uma_sex_title,
            'でいちばん大事なのは健康だ。休みに前向きでなければ、普段いくら積んでも、怪我のときには使えない。',
          ]);
          await era.printAndWait([
            'それにこれから先のトレーニングは強度も上がるだろう。健康を保つのはとても大事だ。特に ',
            urara.get_colored_name(),
            ' には。',
          ]);
          await urara.say_and_wait([
            'じゃあ……',
            callname,
            ' がそう言うなら、最近はもっと ',
            callname,
            ' のところに行くね？',
          ]);
          await era.printAndWait([
            '言いたかったのは、',
            urara.get_colored_name(),
            ' に最近もっと寝てほしい、ということだ。子供は体が伸びる。だが',
            urara.sex,
            'が来るなら、',
            you.get_colored_name(),
            ' も歓迎しないわけではない。',
          ]);
          await urara.say_and_wait([
            'だから今日も、ちょうど ',
            callname,
            ' のおうちに泊まる準備、してあるよ！',
          ]);
          await era.printAndWait([
            'それも悪くないかも……待て？',
            urara.sex,
            'の次の文は何だ？',
          ]);
          break;
        case 3:
          await urara.say_and_wait([
            'ん……最近は ',
            call_15,
            ' が勧めてくれたアニメ見てるよ！ レーシングもの！ それとそれと……',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            ' の興奮した説明を聞きながら携帯を出し、',
            you.get_colored_name(),
            ' はすぐそのレーシングSFを見つける。',
          ]);
          await era.printAndWait(
            'ライダーとAIの連携、AIが主導するのか全力で支えるのかという理念の衝突、全力を賭けた親友対決……',
          );
          await era.printAndWait([
            'トレーニングに使える着想があるかもしれない。これにしよう！ だが、',
            opera.get_colored_name(),
            ' がこの手のアニメを勧めるとは思わなかった。',
          ]);
          await urara.say_and_wait([
            'そうだ ',
            callname,
            '、ちょうど今夜泊まるから、夜に一緒に見よう！',
          ]);

          era.printButton(
            '「いい！ お菓子を食べ終わったら一緒に見よう……違う、何？」',
            1,
          );
          await era.input();
      }
      era.println();
      await urara.say_and_wait([
        'あ！ ',
        callname,
        ' に言うの忘れてた！ 大丈夫だよ、ウララ、みんなにも言ったし、外泊届も出したよ！',
      ]);
      await era.printAndWait([
        'はっと我に返って驚く ',
        you.get_colored_name(),
        ' の顔を見て、小さな',
        urara.uma_sex_title,
        'は ',
        you.get_colored_name(),
        ' が',
        urara.sex,
        'の準備不足を心配していると思い、急いで ',
        you.get_colored_name(),
        ' に説明する。',
      ]);

      era.printButton(
        '「いや、待て、そういう意味じゃない。その……もし担当トレーナーが悪人だったら？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'え？ じゃあ ',
        callname,
        ' は、自分が悪人だって思うの？',
      ]);
      era.println();
      if (high_relation) {
        await era.printAndWait([
          '本当は ',
          you.get_colored_name(),
          ' が言いたかったのは、',
          urara.get_colored_name(),
          ' は',
          urara.uma_sex_title,
          'でも自分を守って、知り合って半年の大人を簡単に信じないでほしい、ということだ。',
        ]);
        await era.printAndWait(
          'そういう事例は世間にいくらでもある。朝夕を共にするトレーナーでも、根まで知っている保証はない。',
        );
        await era.printAndWait([
          'だが自分が悪人かどうか……顔を上げて ',
          urara.get_colored_name(),
          ' の笑顔を見ると、そうでも',
          urara.sex,
          'の前では認めにくい。',
        ]);
        await era.printAndWait([
          'だが初めて出会ったとき、誰かがまだ見知らぬ小さな',
          urara.uma_sex_title,
          'に手を出そうとしていたのも確かだ……',
        ]);
      } else {
        await era.printAndWait([
          '本意は、',
          urara.get_colored_name(),
          ' に、知り合って半年の大人を簡単に信じるな、と言いたかった。だがその言葉が ',
          you.get_colored_name(),
          ' の口から出ると、少し場違いだ。',
        ]);
        await era.printAndWait([
          '自分は本当に悪人なのか？ とにかく ',
          urara.get_colored_name(),
          ' にそんな忠告を言うとき、',
          you.get_colored_name(),
          ' は自分のこれまでの言動と縁を切れない。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' は行動ではずっと親密だが、',
          you.get_colored_name(),
          ' には分かっている。',
          urara.sex,
          'は顔の笑顔ほど、嬉しくはない。',
        ]);
        await era.printAndWait([
          '今でも小さな',
          urara.uma_sex_title,
          'は沈んだ気持ちをこらえて、',
          urara.sex,
          'のトレーナーのそばに寄り添っているだけなのかもしれない。',
        ]);
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が黙り込んだ理由に気づいたのか、',
        urara.get_colored_name(),
        ' は笑って箸を置き、椅子を引いて ',
        you.get_colored_name(),
        ' のそばに並んで座る。',
      ]);
      await urara.say_and_wait([
        '悪人でもいいよ？ だってウララ、',
        callname,
        ' を信じたいから！',
      ]);

      era.printButton('「信じるだけで済む話じゃないんだ……」', 1);
      await era.input();

      await urara.say_and_wait([
        'でも気持ちだけで ',
        callname,
        ' を遠ざけたくない。',
        callname,
        ' が悪人でも、ウララは ',
        callname,
        ' のそばに寄りかかるよ！',
      ]);
      await urara.say_and_wait([
        'それにウララを手伝ってくれる ',
        callname,
        ' は、そんなに悪くないはず！ だから悪人でも、きっと良くなれるよ！',
      ]);
      await urara.say_and_wait([
        'だからウララと ',
        callname,
        '、一緒！ 二人なら二人三脚……？ みたいに続けられるよ！',
      ]);
      await era.printAndWait([
        '今の ',
        urara.get_colored_name(),
        ' は特撮のヒーローみたいに光っている。あるいは',
        urara.sex,
        'は、ずっとそんな姿なのかもしれない。',
      ]);
      await era.printAndWait([
        'だが、二人三脚？ ',
        urara.get_colored_name(),
        ' がこの言葉を知っているのか？ 誰が',
        urara.sex,
        'に教えたんだ？',
      ]);
      if (
        era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数') ||
        era.get('love:52') >= 50
      ) {
        await urara.say_and_wait([
          'それに知り合って半年だけど、',
          callname,
          '、もうウララにたくさんいろんなことしたよね？',
        ]);
        await urara.say_and_wait([
          'ウララは怖くなかったのに、',
          callname,
          ' のほうが引いてるよ！ ',
          callname,
          '、恥ずかしいの？',
        ]);
        await era.printAndWait([
          'はぁ、これは ',
          urara.get_colored_name(),
          ' に急所を突かれた。その事実の前では、',
          you.get_colored_name(),
          ' も一時の苦笑で返すしかない。',
        ]);
      }
      era.println();
      era.printButton(
        '「うん……でももう一つある。担当トレーナーが、ウララを食べたいだけのオオカミだったら？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '何かを思い出したのか、ただ話を続けたいだけなのか。より真剣な顔になって、',
        you.get_colored_name(),
        ' は問いを続ける。',
      ]);
      await urara.say_and_wait([
        'オオカミ、本当にこわいよ！',
        callname,
        '、本当にそんなことする？ ウララは赤ずきん？',
      ]);
      await urara.say_and_wait([
        'えへへ～',
        callname,
        ' がウララを食べるって言うなら、ウララ、期待していいの？',
      ]);
      if (era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数')) {
        await urara.say_and_wait(
          'あ、うっかり忘れてた！ オオカミ、もう赤ずきん食べちゃってるよ！',
        );
        await urara.say_and_wait([
          'じゃあオオカミ',
          you.adult_sex_title,
          '、ウララはおいしい？',
        ]);
      }
      era.println();
      await era.printAndWait([
        '思いのほか、すぐそばにいるのに、',
        urara.get_colored_name(),
        ' は無邪気に笑いながら、挑発みたいな切り返しをする。',
      ]);
      await era.printAndWait([
        'まったく信じていない無垢な顔で、',
        urara.get_colored_name(),
        ' は悪戯っぽく瞬き、「小さな',
        urara.sex_code - 1 ? '女の子' : '男の子',
        'の得意げ」でいっぱいだ。',
      ]);
      await era.printAndWait(
        '子供と言い負けるのはよくないが、ここは少し立場を取り戻さないとな。',
      );
      await era.printAndWait([
        '悪戯のつもりで立ち上がり、',
        urara.get_colored_name(),
        ' が反応する前に、',
        you.get_colored_name(),
        ' は手を伸ばして',
        urara.sex,
        'を抱き上げる。',
      ]);

      era.printButton(
        `「ウララがそう言うなら、トレーナーは今、${urara.sex}の味を見るぞ。」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(['え、え？ ', callname, '……？']);
      await era.printAndWait([
        urara.teen_sex_title,
        'の戸惑う反応を無視し、',
        you.get_colored_name(),
        ' はお姫さま抱っこで',
        urara.sex,
        'を持ち上げ、ベッドのある部屋へ軽く運ぶ。',
      ]);
      await era.printAndWait([
        '意外なほど軽い ',
        urara.get_colored_name(),
        ' を「ついで」にベッドへ投げ、',
        you.get_colored_name(),
        ' は後ろ手に「強く」寝室の扉を閉める。',
      ]);
      await era.printAndWait([
        '体がベッドに落ちた瞬間、',
        urara.teen_sex_title,
        'の顔は、さっきまでの羞じらい混じりの戸惑いから、恐怖の混ざった赤へ変わる。',
      ]);
      await era.printAndWait([
        '抵抗も忘れたみたいに、不埒な気配を前に、小さな',
        urara.uma_sex_title,
        'は耳を折り尻尾を挟み、ベッドの上で怖くて丸くなる。',
      ]);
      await urara.say_and_wait([
        callname,
        '？ 今ウララ、まだ寝たくないよ？ ',
        callname,
        '……？ うわあ～',
      ]);
      await era.printAndWait([
        'そのあと',
        urara.teen_sex_title,
        'の高い悲鳴のなか、慌ててどうしていいか分からない ',
        urara.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' に両腕を掴まれ、乱暴にベッドへ押さえつけられる。',
      ]);
      await era.printAndWait([
        '普段いちばん近い大人の下に押され、包まれていく体を感じ、',
        urara.teen_sex_title,
        'の見開いた桜瞳に涙が溜まる。',
      ]);
      era.println();
      if (
        era.get('talent:52:喜欢痛苦') ||
        era.get('exp:52:受虐高潮次数') >= 2
      ) {
        await urara.say_and_wait(
          '食べられちゃう、早く抵抗しなきゃ……でも、体がまた言うこと聞かない……',
          true,
        );
        await urara.say_and_wait([
          '怒った ',
          callname,
          ' は、ウララに何するの？ 前よりひどいことする？',
        ]);
        await urara.say_and_wait([
          '今度は ',
          callname,
          ' に閉じ込められるかも。次にみんなに会うとき、体も心も壊れちゃってるかも。',
        ]);
        await urara.say_and_wait(
          'でもそれを考えると、体が止まらず興奮する。もう壊れちゃってるのかも……',
        );
        await urara.say_and_wait('……もっと優しくしてくれたらいいのに……', true);
      } else if (era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数')) {
        await urara.say_and_wait(
          [
            callname,
            '、ここでそんなことするの？ ',
            callname,
            ' の今の顔、変……',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            '今はだめなのに、体が柔らかくなっちゃう。それに ',
            callname,
            ' は、するときはいつも優しかったから……',
          ],
          true,
        );
        await urara.say_and_wait(
          'ウララ、乱暴にされる？ 痛い？ こわいことが起きる？',
          true,
        );
        await urara.say_and_wait(
          'でもなんで、ああされたりこうされたりするって思うと、体がこんなに熱いの？',
          true,
        );
        await urara.say_and_wait(
          ['もし ', callname, ' がどうしてもって言うなら、ウララも……'],
          true,
        );
      } else {
        await urara.say_and_wait(
          [
            '今は早く抜け出さなきゃ。',
            callname,
            ' でもだめなのに、なんで ',
            callname,
            ' を見てると、手足に力が入らない……',
          ],
          true,
        );
        await urara.say_and_wait(
          '胸が痛いくらい跳ねるのに、体はふにゃふにゃ。この人に食べられてもいいみたい……',
          true,
        );
        await urara.say_and_wait(
          [
            'このあと服を剥がされて、無理にされる。',
            call_30,
            ' が隠してる漫画の女の子みたいに……',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            '大人の匂い、近い……',
            callname,
            ' の匂い、いい。気持ちよくて抵抗したくない。なんで……',
          ],
          true,
        );
        await urara.say_and_wait(
          ['これでいいの？ 体を ', callname, ' に預けるなんて……'],
          true,
        );
      }
      era.println();
      await era.printAndWait([
        '運命を受け入れたみたいに、',
        urara.teen_sex_title,
        'は ',
        you.get_colored_name(),
        ' の下で目を閉じる。',
      ]);
      await era.printAndWait([
        'だが小さな',
        urara.uma_sex_title,
        'が想像したひどい目は来ない。',
        urara.get_colored_name(),
        ' の手を放し、',
        you.get_colored_name(),
        ' は',
        urara.teen_sex_title,
        'の額を「ぱっ」と軽く弾く。',
      ]);
      await urara.say_and_wait('うえ？');
      await era.printAndWait([
        '涙の残る目を驚いて開け、',
        urara.get_colored_name(),
        ' が見るのは、いつもの顔に戻って苦笑しながらそばに立つ ',
        you.get_colored_name(),
        ' だ。',
      ]);

      era.printButton(
        `「だから、${urara.uma_sex_title}なら人間なんて簡単に押しのけられるだろ。今のは何だったんだ？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'でも……それは ',
        callname,
        ' が ',
        callname,
        ' だから……',
      ]);

      era.printButton(
        '「これから先、近くで付き合うほかの人が、オオカミだったら？」',
        1,
      );
      await era.input();

      await urara.say_and_wait('うぅ……それは……');
      await era.printAndWait([
        '本当に泣きそうな ',
        urara.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' は仕方なく',
        urara.sex,
        'のそばに座り、',
        urara.sex,
        'の髪をそっと撫でる。',
      ]);
      await era.printAndWait([
        'しばらくなだめたあと、やっと落ち着いた ',
        urara.get_colored_name(),
        ' は疲れたみたいに、',
        you.get_colored_name(),
        ' のそばへ体を預ける。',
      ]);
      await era.printAndWait([
        'いじめすぎたか？ だが ',
        you.get_colored_name(),
        ' に押し倒されたとき、',
        urara.get_colored_name(),
        ' の顔は「交尾を欲しがる',
        urara.phy_sex_title,
        '」のようだった……',
      ]);
      await era.printAndWait([
        '目を強く擦り、柔らかく ',
        you.get_colored_name(),
        ' のそばに寄り添う小さな',
        urara.uma_sex_title,
        'は、潤んだ目で ',
        you.get_colored_name(),
        ' を見ている。',
      ]);

      await urara.say_and_wait([
        'じゃあ……',
        callname,
        '、本当にもうしないの？',
      ]);
      era.printButton(
        '「……いい子は、もう顔を洗って寝る時間だよ。机を片付けて外で寝る。」（好感+20）',
        1,
      );
      era.printButton(
        '「……オオカミでも、こんな時に赤ずきんを食べたりしない。」（恋慕+5）',
        2,
      );
      ret.push(await era.input());

      await era.printAndWait([
        you.get_colored_name(),
        ' が去る背中を見て、',
        urara.get_colored_name(),
        ' は何か言いたそうに口を開くが、結局 ',
        you.get_colored_name(),
        ' について立ち上がるだけだ。',
      ]);
      await era.printAndWait([
        'もう一度 ',
        you.get_colored_name(),
        ' に部屋へ抱かれて戻っても、引き止める言葉は出せず、',
        you.get_colored_name(),
        ' が適当に電気を消して扉の向こうへ消えるのを見送る。',
      ]);
      await urara.say_and_wait([
        '頭、まだぐちゃぐちゃ……でもやっぱりウララ、',
        callname,
        ' と並んでいたい……',
      ]);
      await urara.say_and_wait([
        'でも今回も、',
        callname,
        ' にウララのことを話すタイミング、見つからなかった……',
      ]);
      await urara.say_and_wait(['うぅ……ここ、全部 ', callname, ' の匂い……']);
      await urara.say_and_wait(
        'でもここはほかの人のベッドだから、自分で気持ちいいことしちゃだめ……',
      );
      await era.printAndWait([
        '少し惜しそうに小さく呟き、暖かさと安心に抵抗するのをやめた小さな',
        urara.uma_sex_title,
        'は、',
        you.get_colored_name(),
        ' の布団のなかでこっそり眠る。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '今夜、ウララと心を通わせたあなたは、満足しましたか？',
      );
      await inner_urara.say_as_unknown_and_wait(
        '二人三脚。ロマンチックで、役に立たない言い方です。わたくしのいちばん嫌いな言葉の一つでもあります。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'ですが好みとは別です。これは必ず『あなた』と『',
        urara.get_colored_name(),
        '』が一緒に書く物語になるのですから。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'では物語が本格的に中盤へ入ったあなたは、『いいトレーナー』をしているのですか、それとも『悪いオオカミ』を？',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '奇襲の気持ち！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'バレンタインとチョコレートは、要するに販促と商品の関係です。ただ、意外と嫌ではありません。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '勘違いしないでください。祭りの空気に浸る馬鹿カップルを眺めるより、わたくしはチョコのほうに興味があります。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ん？ いいえ。チョコの味が、特別好きというわけではありません。',
      );
      era.drawLine();
      await era.printAndWait(
        '朝、起きて顔を洗い服を着て、朝食をがばっと食べ、ついでに玄関でカレンダーを軽く見る。',
      );
      await era.printAndWait([
        '今日はバレンタインだ。だが予定はある。服を軽く整え、',
        you.get_colored_name(),
        ' は住まいの扉を開ける。',
      ]);
      await era.printAndWait([
        'すると、思いがけない小さな生き物がすぐ外から耳を二本出し、早すぎる形で ',
        you.get_colored_name(),
        ' の今日の予定に割り込んでくる。',
      ]);
      await era.printAndWait([
        '足元を固め、まわりに袋をたくさん置いた ',
        urara.get_colored_name(),
        ' は、ノックしようとしていた指を下ろし、一歩前へ出て笑顔で ',
        you.get_colored_name(),
        ' を抱きしめる。',
      ]);
      await urara.say_and_wait([callname, '！ 朝だよ、おはよう——！']);

      era.printButton('「お！ おはよ……ウララ？！」', 1);
      await era.input();

      await urara.say_and_wait('えへへ～ごめんね、お邪魔しちゃった——！');
      await era.printAndWait([
        urara.get_colored_name(),
        ' に強く抱かれ、人間より少し高い体温の小さな',
        urara.uma_sex_title,
        'が冬服越しに、自分の ',
        callname,
        ' へ',
        urara.sex,
        'だけの暖かさを渡す。',
      ]);
      await era.printAndWait([
        '二月の空気はまだ春とは言えない。だが走ってきたせいで、今の小さな',
        urara.uma_sex_title,
        'の体は、温かくて元気な香りを放っている。',
      ]);
      await era.printAndWait([
        '今日の最初の親密のなかで、担当の少し幼い抱擁に包まれた ',
        you.get_colored_name(),
        ' は、いつものとは違う色っぽさも嗅ぎ取る。',
      ]);

      era.printButton('「待て、なんで急に来たんだ？」', 1);
      await era.input();

      if (high_relation) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait([
            'なんでだろうね？',
            callname,
            '、当ててみる？ 当てなくても分かるよ。今日は特別な日だから！',
          ]);
          await era.printAndWait([
            '抱擁を解き、穏やかな顔の小さな',
            urara.uma_sex_title,
            'はつま先立ちで悪戯っぽく、',
            you.get_colored_name(),
            ' の唇に小さく甘いキスを残す。',
          ]);
          await urara.say_and_wait([
            callname,
            ' のいちばん好きなちゅーだよ！ それとウララ特製の『本命チョコ』……こう言うんでしょ？',
          ]);
          await era.printAndWait([
            '服の下からきれいな包装の小さな箱を出し、',
            urara.get_colored_name(),
            ' はまだ体の余熱の残るチョコを ',
            you.get_colored_name(),
            ' の手に渡す。',
          ]);
        } else {
          await urara.say_and_wait([
            callname,
            ' なら分かるよね？ ウララだって、今日何するか覚えてるよ？',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' を離し、小さな',
            urara.uma_sex_title,
            'はコートのポケットを探って、きれいな包装の小さなギフト箱を出す。',
          ]);
          await urara.say_and_wait([
            'じゃーん——！',
            callname,
            '、中身分かる？ みんなを嬉しくするものだよ！',
          ]);
          await urara.say_and_wait([
            '今日は ',
            callname,
            ' に、ウララ印のチョコをあげる！ 今すぐ開けてみて！',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          'え？ ',
          callname,
          '、今日が何の日か忘れたの？ ん……じゃあウララが ',
          callname,
          ' に教えるね！',
        ]);
        await era.printAndWait([
          '少し恥ずかしそうに懐からきれいな小さな箱を出し、',
          urara.get_colored_name(),
          ' はまだ体の余熱の残るチョコを ',
          you.get_colored_name(),
          ' の手に渡す。',
        ]);
        await urara.say_and_wait([
          'バレンタインの『本命チョコ』……？ こう言うんでしょ？ とにかく ',
          callname,
          ' の！ それとこれ……',
        ]);
        await era.printAndWait([
          'チョコを押しつけると同時に、小さな',
          urara.uma_sex_title,
          'はこっそりつま先立ちし、隙を見て桜色の唇で ',
          you.get_colored_name(),
          ' の頬を軽く啄む。',
        ]);
      } else {
        await urara.say_and_wait(
          '今日はバレンタインだよ？ だからみんなにチョコ、いっぱい作ったの！ ちょっと待って……',
        );
        await era.printAndWait([
          'そばの袋を探したあと、',
          urara.get_colored_name(),
          ' はきれいな包装のチョコを一箱、',
          you.get_colored_name(),
          ' の手に渡す。',
        ]);
        await urara.say_and_wait(
          'ん……うん！ 義理だよ！ 義理チョコ……少なくともみんなは、そう言えって！',
        );
        await urara.say_and_wait([
          'でもウララ、',
          callname,
          ' にすごく感謝してるから、これも特製！ ',
          callname,
          '、今開ける？',
        ]);
      }
      await era.printAndWait([
        urara.get_colored_name(),
        ' の急かす視線のなかで包装を開けると、中から出てきたのは明らかなオレンジ……いや、濃いオレンジ色のチョコだ。',
      ]);
      await era.printAndWait(
        'これがチョコの色なのか？ それに、何を入れたらこんなに鮮やかになるんだ……',
      );

      era.printButton('「色が、すごいな……」', 1);
      await era.input();

      await urara.say_and_wait('どう？ おいしそうでしょ？');
      await urara.say_and_wait(
        'バレンタインは、いつもお世話になってる人にチョコをあげる日！ だから昨夜、頑張って作ったよ！',
      );
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'の気持ちを守るため、',
        you.get_colored_name(),
        ' は「毒のある動植物の警戒色みたいだ」という後半を、力ずくで飲み込む。',
      ]);

      era.printButton('「ありがとう。でもこれは……みかん味か？」', 1);
      await era.input();

      await urara.say_and_wait(
        'ちがう、にんじん味だよ！ うまくできたでしょ？ ウララ、大事にしてたにんじんも使ったの！',
      );

      era.printButton('「にんじん……？」', 1);
      await era.input();

      await urara.say_and_wait('うん、にんじん！ しかも特別に選んだやつ！');
      await urara.say_and_wait([
        callname,
        ' も、にんじん入りチョコ、好きだと思うから、試してみたの！',
      ]);
      await era.printAndWait([
        'どう言えばいい。予想外であり、筋は通っている答え。箱の中の、オレンジに光る板を見て、',
        you.get_colored_name(),
        ' は考え込む。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'がにんじん好きなのは分かる。だがこの物質の成り立ちは、錬金術の領域だろう……',
      ]);
      await era.printAndWait([
        'まあいい。',
        urara.get_colored_name(),
        ' に驚かされるのはとうに慣れたし、バレンタインにチョコをもらえること自体は嬉しい。',
      ]);

      era.printButton('「その、チョコ、今食べてみてもいいか？」', 1);
      await era.input();

      await urara.say_and_wait(
        'えへへ～どういたしまして！ 全部食べちゃってもいいよ！',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' の許可をもらい、',
        you.get_colored_name(),
        ' は箱の中の一角を慎重に折る。色の特別なチョコは、普通の脆い音を立てる。',
      ]);
      await era.printAndWait(
        '口に入れると、まずにんじん特有の「野菜の味」が来て、そのあと少し苦い清らかな甘さ。',
      );
      await era.printAndWait([
        'ただ ',
        urara.get_colored_name(),
        ' の手作りクッキーとは違い、このチョコはおいしいというより「抹茶味の麻婆豆腐」みたいな非主流だ……',
      ]);
      await era.printAndWait(
        'だが色も味も説明しにくいのに、それでも口に入れられる味にはなっている。',
      );
      await era.printAndWait([
        '……それにしても、論外の素材であっさり食べられる味を調えるとは、',
        urara.get_colored_name(),
        ' は本当に天才か……？',
      ]);

      await urara.say_and_wait([callname, '、ウララ特製チョコ、味どう？']);
      era.printButton(
        '「しっ……微妙だけど、このチョコ、意外といけるな……」（好感+20）',
        1,
      );
      era.printButton(
        '「うん……うん！ こんな味のチョコは初めてだ。新鮮だな……」（恋慕+5）',
        2,
      );
      const ret = await era.input();

      await urara.say_and_wait([
        'でしょ！ このあと商店街に配りに行くよ！',
        callname,
        ' も一緒に来る？ みんなも絶対喜ぶよ！',
      ]);

      era.printButton(
        '「行かない理由はないな。でもウララ、チョコ何個用意した？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'みんなにあげるチョコは、もう用意してあるよ！ 全部ウララが手で作ったの！',
      );
      await era.printAndWait([
        '準備済みとばかりに、後ろに隠していた大きな袋をいくつか提げ、',
        urara.get_colored_name(),
        ' は笑いながら ',
        you.get_colored_name(),
        ' に見せびらかす。',
      ]);
      await urara.say_and_wait(
        'それと！ みんなのチョコも、すごくうまくできたよ！ お店ごとに味が違うの！',
      );
      await era.printAndWait([
        'うん、違う味……待て？ ウララの無邪気な笑顔を見て、まずい予感が ',
        you.get_colored_name(),
        ' の胸で止まらず湧く。',
      ]);
      await urara.say_and_wait(
        'これだよ！ 八百屋さんには野菜、魚屋さんには魚、お肉屋さんにはお肉……',
      );
      await era.printAndWait([
        '震えながら ',
        urara.get_colored_name(),
        ' から、名状しがたいものが入っていそうな袋を受け取り、',
        you.get_colored_name(),
        ' は結局、中の箱を開けて確認する勇気が出せない。',
      ]);
      await era.printAndWait([
        '食べたのに ',
        urara.get_colored_name(),
        ' を信じたくないわけではない。だがその奇妙な素材とチョコの混合物は、聞けば聞くほどまずい。',
      ]);
      await era.printAndWait([
        'にんじんの味なら予想の内だ。だがあれらの味まで保証するなら……',
        urara.get_colored_name(),
        ' は本当に錬金術師だろう……',
      ]);
      await era.printAndWait([
        '結局、',
        you.get_colored_name(),
        ' は無意味な思考をやめる——とにかく ',
        urara.get_colored_name(),
        ' は天才、でいい！',
      ]);

      era.printButton('「ん、まあ、ああ、ウララ、ほ、本当にすごいな！」', 1);
      await era.input();

      await urara.say_and_wait('でしょ？ みんなの笑顔、楽しみだなあ——');
      await era.printAndWait([
        'きっと見られる。みんな ',
        urara.get_colored_name(),
        ' のために、笑顔を頑張るはずだ。だがそのあとは、胃に祈るしかない……',
      ]);
      await era.printAndWait([
        '迷いと覚悟を抱え、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' と商店街へ向かい、「にぎやかすぎる」バレンタインを過ごす準備をする。',
      ]);
      await era.printAndWait(
        '今日の本来の予定は……『計画は変化に追いつかない』いつものことにしておこう。',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'ん……各種の味のチョコですか。チョコ、チョコ……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '何ですか、その目は。お菓子なら、わたくしにウララほど幼稚な味覚はありませんよ？',
      );
      await inner_urara.say_as_unknown_and_wait(
        'え？ まだ聞いていません？ ああ……ちっ、あなたという人は……',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_47_12: (() => {
    const title = '商店街のアイドル！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     */
    const f = async (urara, nature, inner_urara, you, callname, call_61) => {
      await urara.say_and_wait([
        'えへん……みんなこんにちは！ この商店街の……『看板の競走',
        urara.uma_sex_title,
        '』？ になったウララだよ！',
      ]);
      await urara.say_and_wait(
        'まだあんまり分かってないけど、頑張るよ！ よろしくね——！',
      );
      await era.printAndWait([
        '商店街の特設ステージに立ち、',
        urara.get_colored_name(),
        ' はみんなに元気よく手を振り、台下の ',
        you.get_colored_name(),
        ' にもこっそり瞬きする。',
      ]);
      await era.printAndWait([
        '台下の人ごみに混じった ',
        you.get_colored_name(),
        ' は、',
        urara.get_colored_name(),
        ' の合図を受け、すぐこっそり ',
        urara.get_colored_name(),
        ' に親指を立てる。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'ことの始まりは、数日前にさかのぼります。',
      );
      era.drawLine();
      await era.printAndWait([
        '人望のある現役',
        urara.uma_sex_title,
        'を商業宣伝に呼ぶ催しは珍しくない。',
        urara.get_colored_name(),
        ' が招かれるのも、予想の内だった。',
      ]);
      await era.printAndWait([
        'ただ ',
        urara.get_colored_name(),
        ' への突然の依頼は場所こそ違うが、よく見ると同じ地区からだ。',
      ]);
      await era.printAndWait([
        '商店街のみんなは、本当に ',
        urara.get_colored_name(),
        ' を可愛がっている。そう思いながら、',
        you.get_colored_name(),
        ' は厚い依頼の束を机に揃える。',
      ]);
      await urara.say_and_wait('ん……つまり、みんなウララに手伝ってほしいの？');

      era.printButton(
        '「今度はちゃんとした仕事だ。でも大丈夫、ウララは普段どおりでいい。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' の問いに答え、',
        you.get_colored_name(),
        ' は手の依頼状を、寄ってきた小さな',
        urara.uma_sex_title,
        'に渡す。',
      ]);
      await era.printAndWait('今の二人に、引き受けない理由はない。');
      await era.printAndWait([
        urara.get_colored_name(),
        ' は生活で',
        urara.sex,
        'を世話してくれた人たちに返したい。本当の商店街の看板になれれば、',
        urara.sex,
        'はもっと具体的にみんなを助けられる。',
      ]);
      await era.printAndWait([
        'トレーナーとしては、仕事を受ければ知名度が上がる。今の ',
        urara.get_colored_name(),
        ' にとって、支持の重さはトレーニングに負けない。',
      ]);
      await era.printAndWait([
        'ただ選択は同じでも、',
        urara.get_colored_name(),
        ' は状況をよく分かっていないだろう。どうしよう……',
      ]);
      if (era.get('cflag:60:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '大丈夫だろう？ ',
          nature.get_colored_name(),
          ' の意見を聞いてみるか？ ',
          urara.sex,
          'も商店街に人気の',
          urara.uma_sex_title,
          'だ。',
        ]);
        await era.printAndWait([
          '行くか？ 今',
          urara.sex,
          'を煩わせるのは場違いだし、これは ',
          you.get_colored_name(),
          ' と ',
          urara.get_colored_name(),
          ' の仕事だ。だが失敗したら頭が痛い……',
        ]);
      }
      era.println();
      await era.printAndWait(
        'まあ、思い悩んでも無駄だ。船が橋に着けば自然に渡れる。',
      );
      await urara.say_and_wait([
        'でも ',
        call_61,
        ' が言ってた。『仕事なら礼儀に気をつけて！』だから、今はちゃんと真剣だよ？',
      ]);
      await urara.say_and_wait(
        '商店街のおじさんとおばさんたちは、普段どおりでいいって。でも気をつけるよ？',
      );
      await era.printAndWait([
        '商店街に戻ったいま、',
        you.get_colored_name(),
        ' のそばを歩きながら、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の隣で小さな声で言う。',
      ]);
      await era.printAndWait([
        '開会のあいさつは無事に終わり、いま ',
        urara.get_colored_name(),
        ' は依頼どおり、商店街の店を一軒ずつ回っている。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' がやるべきことをもう分かっているなら、心配はいらないはずだ。',
      ]);
      await urara.say_and_wait(
        'あ、おじさんこんにちは！ 今日の荷物も新鮮だね！ うん！ また手伝いに来るよ！',
      );
      await urara.say_and_wait(
        'おばさん、おはよう！ そうだよ、野菜を買って帰るの！ ウララはこれがいい！',
      );
      await urara.say_and_wait([
        '手伝うよ！ 大丈夫、',
        urara.uma_sex_title,
        'の力はすごいんだから。それじゃあいくよ——！',
      ]);
      await urara.say_and_wait(
        'ここは先にまっすぐ行って、右に曲がるよ！ どういたしまして！ お姉さんたちも気をつけて！',
      );
      await urara.say_and_wait(
        '泣かないで？ 男の子はしっかりして！ お母さんはまだ近くにいるはず……あ！ いた！ こっち——！',
      );
      await urara.say_and_wait([
        'ん？ ',
        urara.elder_sibling_sex_title,
        'は競走',
        urara.uma_sex_title,
        'だよ！ 今度応援してくれるの？ ありがとう！',
      ]);
      await era.printAndWait([
        '知り合いにも初対面にも親しげに声をかけ、',
        urara.get_colored_name(),
        ' の天然はどこへ行っても親しみの魅力になる。',
      ]);
      await era.printAndWait([
        '絵本の中の童話みたいに、',
        urara.get_colored_name(),
        ' の行く先には人が集まり、花が咲いたような賑わいになる。',
      ]);
      await era.printAndWait([
        'いいな。こんな温かい場面を見たのはいつだったか。距離を保って ',
        urara.get_colored_name(),
        ' の後ろを歩き、黙って',
        urara.sex,
        'を見守る ',
        you.get_colored_name(),
        ' は、そう思う。',
      ]);
      await era.printAndWait([
        'これだけの人望の上に、走る実力をもう一段上げられれば、いつか ',
        urara.get_colored_name(),
        ' の願いも届くのではないか。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' が言うとおり、',
        urara.sex,
        'が走り続ければ……',
      ]);
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        'あの、そちらの方、ウララのトレーナーさんですか？',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' が今を考えていると、隣を通った女性がそっと ',
        you.get_colored_name(),
        ' を呼び止める。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はその女性が商店街振興組織の一員だと気づく。',
        urara.get_colored_name(),
        ' の入学当初から',
        urara.sex,
        'を見守ってきた知り合いだという。',
      ]);

      era.printButton(
        '「ええ、ウララに依頼を出してくださってありがとう。」',
        1,
      );
      await era.input();

      await you.say_as_passer_by_and_wait(
        '商店街の人',
        `お礼を言うのはこちらのほうです。ウララがいてくれて、${urara.sex}には本当にたくさん助けられました。`,
      );
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        'ウララが来てから、この商店街も活気づきました。以前は本当に寂しかったんです。',
      );
      await era.printAndWait([
        'その感謝を聞きながら、',
        you.get_colored_name(),
        ' もこの通りについて思い出すことがある。',
      ]);
      await era.printAndWait(
        '総合商業地区の発展で、機能が足りない伝統商店街は、街での居場所をどんどん狭められている。',
      );
      await era.printAndWait([
        '人の流れが減れば閑散と寂れになる。だが ',
        urara.get_colored_name(),
        ' が来てからの熱心な行いが、この通りに新しい活力を入れた。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の熱には狙いがない。だが',
        urara.sex,
        'はもうずいぶん前から、気づかないうちにこの通りのみんなを助けていた。ただ……',
      ]);
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        '……ウララの実力は、あまり強くないですよね？ 前から聞いています。あの子はいつも勝てなくて……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の考えを遮り、目の前の女性は迷いのあと、もう一度口を開く。',
      ]);

      era.printButton('「でもウララも、少しずつ強くなっている。」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' は自分の結論に根拠はあるつもりだが、空気がどこかおかしい。',
      ]);
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        `ええ、${urara.sex}が頑張っているのは信じます。でも……${urara.sex}の才能は、ほかの子には及ばないでしょう？`,
      );
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        'だからゆっくりでもいいんです。ウララがずっと楽しそうに走ってくれれば、私たちも励まされます。',
      );
      await you.say_as_passer_by_and_wait(
        '商店街の人',
        '改めてありがとうございます。それだけで、私たちは十分嬉しいんです。',
      );
      await era.printAndWait([
        'そう言いながら、彼女は優しく ',
        urara.get_colored_name(),
        ' を見つめる。親が子を思うような、気遣いの目だ。',
      ]);
      await era.printAndWait([
        '親のような気持ちで小さな',
        urara.uma_sex_title,
        'を守る人たちは、本心から「',
        urara.sex,
        'が楽しそうに走ればそれでいい」と思っているのかもしれない。',
      ]);
      await era.printAndWait([
        'だが、本当にそれだけなら最適解にはならない。別れを告げて去る女性の背を見送り、',
        you.get_colored_name(),
        ' は複雑な気持ちで首を振る。',
      ]);
      await era.printAndWait([
        '人の善意を否定するわけではない。ただ ',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' の願いを知っているし、成長中の',
        urara.sex,
        'がそこに留まらないことも見えている。',
      ]);
      await era.printAndWait(
        'それでも先は長い。願いが花開くところを見せるには、進み続けるのが正解だ。',
      );
      await era.printAndWait([
        '買ったばかりの飲み物を手に、',
        you.get_colored_name(),
        ' は仕事を終えて人ごみの中で ',
        you.get_colored_name(),
        ' を探す ',
        urara.get_colored_name(),
        ' に、笑って手を振る。',
      ]);

      era.printButton('「ウララ、おつかれさま！」', 1);
      await era.input();

      await urara.say_and_wait([
        callname,
        '！ 今日、ウララはみんなの役に立てた？',
      ]);
      await era.printAndWait([
        '仕事のあと、ベンチで休む ',
        urara.get_colored_name(),
        ' は夕日を浴びて、',
        you.get_colored_name(),
        ' が渡したジュースを受け取る。',
      ]);
      await era.printAndWait([
        '一日忙しくして、ようやく落ち着いた ',
        urara.get_colored_name(),
        ' の隣で、',
        you.get_colored_name(),
        ' はあの「でも」を考え直す。',
      ]);
      await era.printAndWait(
        '……これは単純な成長の話ではない。時代の新旧交代にぶつかっている。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' にできることは長くは続かない。もっと大きな転機がなければ、個人だけでは持ちきれない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は裾をつかまれる。振り向くと、柔らかい夕日が ',
        urara.get_colored_name(),
        ' に当たり、',
        urara.sex,
        'の落ち着いた小さな顔を温かい光に浸している。',
      ]);
      await urara.say_and_wait([
        callname,
        '、分かってるよ？ 通りのみんなの大変なこととか、今のウララじゃ未来は変えにくいこととか。',
      ]);
      await urara.say_and_wait(
        'でも、いつか商店街がなくなって、みんなが散らばっても、ウララがしたいことは変わらないよ。',
      );
      await era.printAndWait([
        '遠くの赤い太陽を眺め、小さな',
        urara.uma_sex_title,
        'の真剣な笑顔には、必ずやり遂げる気がある。',
      ]);
      await urara.say_and_wait(
        'みんなに見せるよ。ウララはここのアイドルとして、商店街のみんなに笑顔と希望を運ぶんだ！',
      );
      await urara.say_and_wait(
        'それにトレセンのみんなもここが好きだよ。諦めなければいつか道はある。ウララがみんなに見せる！',
      );
      await era.printAndWait([
        '最後の迷いが ',
        urara.get_colored_name(),
        ' の答えで消える。気づかないうちに、太陽はまばゆい夕日を ',
        you.get_colored_name(),
        ' にも落としている。',
      ]);

      era.printButton('「一緒に帰ろう。」', 1);
      await era.input();

      await urara.say_and_wait('うん、帰るよ！');
      await era.printAndWait([
        '気持ちを整えて、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' に手を伸ばす。',
        urara.get_colored_name(),
        ' は笑って、',
        you.get_colored_name(),
        ' の手を取る。',
      ]);
      await era.printAndWait([
        '走り続ければいつか道はある。強くない ',
        urara.get_colored_name(),
        ' も、前向きに生きる周りの人も。',
      ]);
      await era.printAndWait([
        '夕日を浴びて、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' は帰り道に出る。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'ですが、それだけで、努力だけで、本当に誰かを救えるのでしょうか。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'すみません、また言うべきでないことを。では、あなたはどうお考えですか。',
      );
      era.printButton(
        '「去年の年末に、もう話しただろう？」（中距離&長距離適性上昇）',
        1,
      );
      era.printButton(
        '「時間はまだある。試さなきゃ分からない。」（芝適性上昇）',
        2,
      );
      era.printButton(
        '「選んだ以上、最後まで責任を持つ。」（全能力+2、トレーニング得意度上昇）',
        3,
      );
      const ret = await era.input();
      await inner_urara.say_as_unknown_and_wait(
        '……意外、なのでしょうか。あなたはそうお考えなのですね……じつは『ウララ』も、だいたい同じです。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'わたくしの見方は変わりません。ですが',
        urara.sex,
        'に傷は負わせたくありません。今の歩幅で',
        urara.sex,
        'を大切にしてください。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'ただ、軽くても重くても、背負いと覚悟を持って進まなければ強くはなれません。何度経っても、嫌いです……',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_47_27: (() => {
    const title = '応援会！？';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_61,
      high_relation,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '少し正確ではないかもしれませんが、トレーナー',
        you.adult_sex_title,
        '（あなた）とウララは、想像もしなかった過去を確かに越えてきました。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'うらやましいです。物語の主役はまだ強いとは言えませんが、路傍の人たちはもう後ろに置いてきました。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'では、置いていかれた人たちは……すみません、今言うべきことではありません。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'いまは、得がたい報いをゆっくり楽しんでください。',
      );
      era.drawLine();
      await era.printAndWait([
        '商店街の宣伝仕事が終わったある日、',
        urara.get_colored_name(),
        ' と外出した道での出来事だ。',
      ]);
      await urara.say_and_wait([
        'きょうのお散歩、楽しかった！ ',
        callname,
        '、あとで一緒にお菓子食べよ！',
      ]);

      era.printButton('「そのあとも、ちゃんとトレーニングするんだぞ？」', 1);
      await era.input();

      await urara.say_and_wait('は——い');
      await era.printAndWait([
        you.get_colored_name(),
        ' の頼みに迷わず答え、成長した小さな',
        urara.uma_sex_title,
        'には、最初のトレーニングへの戸惑いが見えない。',
      ]);
      await era.printAndWait([
        '互いの理解が深まるにつれ、',
        you.get_colored_name(),
        ' は小さな',
        urara.uma_sex_title,
        'が進化の道を歩いているのを感じる。',
      ]);
      await era.printAndWait([
        'それでも、どれだけ変わっても、',
        urara.get_colored_name(),
        ' はみんなのために走る ',
        urara.get_colored_name(),
        ' のままだ。',
      ]);
      await era.printAndWait([
        '振り返ると、青信号で向こうへ走り、おばあさんを支えている ',
        urara.get_colored_name(),
        ' がいる。',
        you.get_colored_name(),
        ' も見慣れた様子で、',
        urara.sex,
        'の熱心な足取りを追う。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' と一緒に人の急ぎの用を済ませたあと、',
        you.get_colored_name(),
        ' と小さな',
        urara.uma_sex_title,
        'は、また',
        urara.sex,
        'がつなぐ善意を受け取る。',
      ]);
      await era.printAndWait([
        'おばあさん「あなたが',
        urara.sex,
        'の保護者さんでしょう。この子、元気がいいわね。」',
      ]);
      await urara.say_and_wait([
        'うん、ウララのいいところは元気だよ！ でも ',
        callname,
        ' は保護者じゃなくて、',
        callname,
        ' だよ！',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の言葉を聞き、おばあさんはにこにこと ',
        you.get_colored_name(),
        ' を見てから、またやさしい目を隣の桜色に戻す。',
      ]);
      await era.printAndWait('おばあさん「そう……あなたはトレセンの生徒？」');
      await urara.say_and_wait(
        'うん！ ハルウララだよ。もうデビューしてずいぶん経つよ！',
      );
      await era.printAndWait(
        'おばあさん「ウララ……本当にウララだったのね。みんなの話どおり、すぐ分かるわ。」',
      );

      era.printButton(
        '「では、以前からウララのことはご存じだったんですか？」',
        1,
      );
      await era.input();

      await era.printAndWait(
        'おばあさん「ええ、あの商店街にはよく行くの。そこのマスコットは、もちろん知ってるわ。」',
      );
      await era.printAndWait(
        'おばあさん「最近、あちらのお店の人たちが『ウララ応援会』を作るって。通りの若い人たちまで動き出してるのよ。」',
      );

      era.printButton('「え？ 応援会？」', 1);
      await era.input();

      await era.printAndWait([
        'いきなり、',
        you.get_colored_name(),
        ' は思いがけない場所で思いがけない話を聞く。',
        urara.get_colored_name(),
        ' にも応援会ができるのか。',
      ]);
      await urara.say_and_wait([
        '応援会……？ ',
        callname,
        '、よく分かんない。応援会って、なにをするの？',
      ]);

      era.printButton(
        '「どう言えばいいか……特定の人を支える活動で、資金などいろいろな支援をする団体……かな。」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'そっか……うん！ ぜんぜん分かんない！ とにかく、みんながもっと応援したいってことだよね？',
      );
      await era.printAndWait([
        'まあ、無理に理解させなくていい。',
        urara.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' だ。',
        urara.sex,
        'の立場からすれば、その理解も間違いではないか。',
      ]);
      await era.printAndWait(
        'おばあさん「でもウララちゃんの言うとおりよ。不思議な子ね。わたしも応援会に入ろうかしら。」',
      );
      await urara.say_and_wait([
        'え？ ほんとに？ じゃあ……',
        callname,
        '、その応援会、ウララも入っていい？',
      ]);

      inner_urara.say_as_unknown([
        'えっ？ それは……トレーナー',
        you.adult_sex_title,
        '（あなた）はどうでしょう——',
      ]);
      era.printButton(
        '「いや、自分の加入はさておき、自分で自分を応援するのか？」（好感+10）',
        1,
      );
      era.printButton(
        '「入りたい気持ちはあるけど、ウララは自分を応援するつもり？」（恋慕+2）',
        2,
      );
      const ret = await era.input();

      await urara.say_and_wait([
        'うん！ そうだよ……あれ？ なんか違う？ ',
        callname,
        '、また笑われる？',
      ]);
      await era.printAndWait([
        '自分でもおかしいと気づくと、',
        urara.get_colored_name(),
        ' も少し照れくさそうになる。',
      ]);
      await era.printAndWait(
        'おばあさん「ふふふ、面白い子ね。みんなが噂するわけだわ……」',
      );
      await era.printAndWait([
        '老婦人の笑顔の変化を見て、',
        you.get_colored_name(),
        ' は担当が「どれだけ好かれるか」の理解をさらに深める。',
      ]);
      await era.printAndWait([
        { isBr: true },
        '助けた老婦人と別れ、',
        you.get_colored_name(),
        ' に寄りかかる ',
        urara.get_colored_name(),
        ' は、まだ「応援会」のことを考えているようだ。',
      ]);
      if (high_relation) {
        await urara.say_and_wait(
          '知らないところで、数えきれないみんなに好かれてるんだね。',
        );
        await urara.say_and_wait(
          'ちょっと重い気もする！ でも大丈夫。もっと頑張ればいいよね！',
        );
        await urara.say_and_wait([
          'あとね！ みんなの応援のなかだと、本当に速く走れてる気がする！ ',
          callname,
          ' はどう思う？',
        ]);
        await era.printAndWait([
          '本当にそうなのかもしれない。',
          urara.get_colored_name(),
          ' の笑顔を見て、',
          you.get_colored_name(),
          ' は',
          urara.uma_sex_title,
          'についての言い伝えを思い出す。',
        ]);
      } else {
        await urara.say_and_wait('みんな、すごく熱いね。でもちょっと重い！');
        await urara.say_and_wait([
          'でも大丈夫だよね！ ',
          call_61,
          ' も、圧力がないと力は出ないって言ってたし！',
        ]);
        await urara.say_and_wait(
          'それに、みんなが応援してくれるなら、ウララももっと速く走れるよね？',
        );
        await era.printAndWait([
          'そうだろう。',
          urara.get_colored_name(),
          ' を前に、',
          you.get_colored_name(),
          ' は都市伝説めいた話を思い出す。',
        ]);
      }
      era.println();
      await era.printAndWait([
        '「応援する人が多いほど、競走',
        urara.uma_sex_title,
        'の力は増す」、「他人の祝福を、自分の力に変えられる」。',
      ]);
      await era.printAndWait([
        '超能力漫画の設定みたいだが、精霊のような',
        urara.uma_sex_title,
        'なら、何でもあり得る。',
      ]);
      await era.printAndWait([
        '少なくとも、',
        urara.get_colored_name(),
        ' にはそれがはっきり出ている。',
      ]);

      era.printButton(
        '「ああ。この調子で、もっと多くの人にウララの走りを見せよう。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'この調子、つまりファンを増やし続けることだ。',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' のその力を疑ったことがない。',
      ]);
      await era.printAndWait(
        '出走を続けるか、重心をトレーニングに戻すか、どちらも組み立て直しが要るかもしれない。',
      );
      await era.printAndWait([
        'だが ',
        urara.get_colored_name(),
        ' はいつどこでも、最後は',
        urara.sex,
        'の ',
        callname,
        ' を信じ、励ます笑顔を向ける。',
      ]);
      await urara.say_and_wait([
        '分かった！ いつもどおり！ ウララは ',
        callname,
        ' と一緒に進むよ！',
      ]);
      if (era.get('love:52') >= 50) {
        era.println();
        await era.printAndWait([
          { isBr: true },
          'だが、ますます多くの人に好かれる ',
          urara.get_colored_name(),
          ' を前に、',
          you.get_colored_name(),
          ' の胸の奥の焦りは、気づかないうちに少し増す。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' は善意を平等に人へ向ける。なら',
          urara.sex,
          'がいつか、下心のある誰かに手元からさらわれてもおかしくない。',
        ]);
        await era.printAndWait([
          urara.sex,
          'に癒やされたトレーナーは、担当の成長を喜びながら、矛盾して',
          urara.sex,
          'が分ける「愛」に「嫉妬」する。',
        ]);
        await era.printAndWait(
          '考えが間違っていると分かっていても、負の感情は強くなくても、それでも独占したくなる。',
        );
        await era.printAndWait([
          'あの明るい笑顔を。あの小さく柔らかい体を。「',
          urara.get_colored_actual_name(),
          '」という名の春の光を。',
        ]);
        await era.printAndWait([
          '気づかないうちに、無邪気で幼い小さな',
          urara.uma_sex_title,
          'は、大切な人の心にもう一粒、「魔性」の種を植えたようだ……',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'その後、応援会の続きは分かりませんでしたが、ウララのファン数は静かに増えました。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'ただ、これまでの経験から、トレーナー',
        you.adult_sex_title,
        '（あなた）はあまり驚きませんでした。',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '大げさに言えば、誰もがウララを好きになるのは、いつか当たり前になるのでしょうか。',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        'がいつもどおりで、外の変化の圧力を気にしなければいいのでしょう……まあ、ウララですから……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '何を言っているのでしょう。新○アカネでもありませんのに。',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏合宿（クラシック級）開始';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '学校の遠足みたいですね。でも結局はトレーニングに行くのでしょう？',
      );
      await inner_urara.say_as_unknown_and_wait(
        'それでも楽しければいいのです。楽しければ……',
      );
      era.drawLine();
      await era.printAndWait([
        '中央トレセンは毎年、',
        urara.uma_sex_title,
        'たちの力を伸ばす夏合宿を開く。今回 ',
        you.get_colored_name(),
        ' も ',
        urara.get_colored_name(),
        ' を申し込んだ。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' にとって実力を伸ばす絶好の機会だ。ただ小さな',
        urara.uma_sex_title,
        'の気持ちでは、お出かけの興奮のほうが明らかに勝っている。',
      ]);
      await era.printAndWait([
        'それでも、',
        urara.get_colored_name(),
        ' がこの調子なのは悪くない。気力と体の健康は、無理なトレーニングよりずっと効く。',
      ]);
      await era.printAndWait([
        'それに',
        urara.sex,
        'はまだ、完全には大人になっていない子だ……',
      ]);
      await urara.say_and_wait([
        callname,
        '！ あっちの空、すごく遠い！ どこまで続いてるの？',
      ]);
      await urara.say_and_wait([
        'あ！ ちょっと海が見えた！ ',
        callname,
        '、海辺を走るの、気持ちいい？',
      ]);
      await era.printAndWait([
        '車窓の外を見ながら、',
        you.get_colored_name(),
        ' の隣に座る ',
        urara.get_colored_name(),
        ' は興奮を隠せず、次々と ',
        you.get_colored_name(),
        ' に尋ねる。',
      ]);
      if (high_relation) {
        await urara.say_and_wait(
          'えへへ～ みんなでお泊まり！ ウララ、ずっと楽しみにしてた！',
        );
        await urara.say_and_wait([
          callname,
          ' も楽しい？ ウララは ',
          callname,
          ' と毎日、海で遊びたい！',
        ]);
        await era.printAndWait([
          '柔らかい体を ',
          you.get_colored_name(),
          ' に寄せ、',
          urara.get_colored_name(),
          ' はピンクの小鳥のように ',
          you.get_colored_name(),
          ' の耳元で楽しそうに歌う。',
        ]);
      } else {
        await urara.say_and_wait('うん！ ウララ、みんなとお泊まりは初めて！');
        await urara.say_and_wait([
          callname,
          ' も、だれかとお泊まりしたことあるよね？ ',
          callname,
          ' は、そういうの楽しい？',
        ]);
        await era.printAndWait([
          '口ほどには楽しそうに見えないが、',
          urara.get_colored_name(),
          ' の体は正直に ',
          you.get_colored_name(),
          ' へ寄りかかる。',
        ]);
      }
      if (era.get('love:52') >= 50) {
        era.println();
        await urara.say_and_wait([
          'あとあと！ 使えるかは分からないけど、ウララ、',
          callname,
          ' といっぱいくっつける準備、してあるよ？',
        ]);
        await urara.say_and_wait([
          '砂浜でも、夜ふたりのときでも、ウララは大丈夫だよ～ ',
          callname,
          '、楽しみ？',
        ]);
        await era.printAndWait([
          callname,
          ' は、もう少し控えたほうがいいと思う。',
          urara.get_colored_name(),
          ' の無邪気で甘い笑顔に、向き合いたくない ',
          you.get_colored_name(),
          ' は黙って顔をそらす。',
        ]);
      }
      era.println();
      await era.printAndWait([
        'この年頃の小さな',
        urara.uma_sex_title,
        'に遊び心があるのはいい。だが ',
        urara.get_colored_name(),
        ' は興奮しすぎている。大丈夫か。',
      ]);
      await era.printAndWait([
        '不安でも、時間も小さな',
        urara.uma_sex_title,
        'も待ってはくれない。全力でいくしかない。',
      ]);
      await era.printAndWait('夏合宿、はじまる！');
    };
    f.title = title;
    return f;
  })(),
  we_47_29: (() => {
    const title = '夏合宿（クラシック級）途中';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     * @param {PrintedSpan} callname_30 ライスシャワーのプレイヤーへの呼び方
     * @param {PrintedSpan} r_call_u ライスシャワーのハルウララへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (
      urara,
      inner_urara,
      rice,
      you,
      callname,
      call_30,
      call_61,
      callname_30,
      r_call_u,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        '『',
        urara.sex,
        'が楽しければそれでいい』。だから',
        urara.sex,
        'は笑顔のまま走り続けます。それが『',
        urara.get_colored_actual_name(),
        '』です。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'ですが、その表の下には、',
        urara.sex,
        'がまだ触れたことのない自分もいるのかもしれません……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '夏合宿のある午後、気分転換に出た ',
        you.get_colored_name(),
        ' は海風を受け、',
        urara.uma_sex_title,
        'たちがトレーニングする浜辺へ来る。',
      ]);
      await era.printAndWait([
        'きょうのトレーニングは終わっている。誰もいないはずの砂浜で、',
        you.get_colored_name(),
        ' は孤独な小さな影を見る。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は水着のままひとり海辺に座り、ほどけたリボンを手にしている。濡れた桜色の髪が落日の光を返す。',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'は海へ沈む夕日をぼんやり見つめ、トレーニングでこわばった脚を両手で揉んでいる。',
      ]);
      await era.printAndWait([
        '昼の2500メートル併走で',
        urara.sex,
        'は惨敗した。',
        you.get_colored_name(),
        ' も、その距離が',
        urara.sex,
        'には長すぎると分かっている。体がつらいのも当然だ。',
      ]);
      await era.printAndWait([
        'だが体だけではない。ひとり遠くを見る ',
        urara.get_colored_name(),
        ' の顔は、何かの感情を押さえているようだ。',
      ]);
      era.printButton(
        '「きょうのウララ、あまり楽しそうじゃないな。なにかあった？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        urara.get_colored_name(),
        ' のそばへ行き、',
        you.get_colored_name(),
        ' は海水で濡れたイヤーカバーをそっと外し、小さな声で',
        urara.sex,
        'に尋ねる。',
      ]);
      await era.printAndWait([
        '近づく足音はもう聞こえていたらしく、小さな担当は ',
        you.get_colored_name(),
        ' の登場に驚きはしない。ただ急いで作った笑顔は、少し無理がある。',
      ]);
      await urara.say_and_wait([
        '大丈夫だよ ',
        callname,
        '。併走のあと、ウララ、ちょっと考えごとをしただけ……',
      ]);
      era.printButton(
        '「併走のこと？ 大丈夫、あの距離は長すぎた。つらいなら明日休んでもいい。」',
        1,
      );
      await era.input();
      await urara.say_and_wait([
        'ちがう！ ただ……',
        callname,
        '、ウララ、負けすぎだったかな？',
      ]);
      await era.printAndWait([
        'ん？ 負けすぎ……他人がそう言うなら筋は通る。だが ',
        urara.get_colored_name(),
        ' が？',
      ]);
      await era.printAndWait([
        'よく考えると、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' が負けて、特に落ち込んだ姿を見たことがない気がする。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' と海辺に並んで座り、',
        you.get_colored_name(),
        ' は担当が話し出すのを静かに待つ。',
      ]);
      await urara.say_and_wait([
        'じつは ',
        call_30,
        ' のことなの。でも ',
        call_30,
        ' は変なことは言ってないよ。ウララがよく分かんないだけ。',
      ]);

      era.printButton(`「${call_30.content}？ ライスシャワーか？」`, 1);
      await era.input();

      await urara.say_and_wait([
        'うん。その日、模擬戦で負けて落ち込んでた ',
        call_30,
        ' を慰めたら、',
        call_30,
        ' が、負けても悲しくならないコツを聞いてきたの。',
      ]);
      await urara.say_and_wait(
        'いつも言ってるけど、走らなきゃ一着は取れないよね？ ウララも、みんなに勝つところを見せたい。',
      );
      await urara.say_and_wait(
        'だから思ったの。勝ったら、みんなもっと喜ぶ。だから勝ちたい！',
      );
      await urara.say_and_wait([
        'でもそう言ったら、',
        call_30,
        ' が、今まで考えたこともない質問をたくさんしてきた……',
      ]);
      era.drawLine();
      await rice.say_and_wait([
        'じゃあ今の ',
        r_call_u,
        ' が追う勝ちは、人のためだけ……？ ',
        r_call_u,
        '、大事なことを見てないんじゃ……',
      ]);
      await rice.say_and_wait([
        r_call_u,
        ' が間違ってるって言うんじゃないよ。人のために勝ちたいのはすごいこと。ライスも、それはいいと思う。でも ',
        r_call_u,
        ' が自分のために思う分は？',
      ]);
      await rice.say_and_wait([
        'みんなは ',
        r_call_u,
        ' の走りに、それぞれ違う期待を重ねる。でも ',
        r_call_u,
        ' 自身がどう見るかも、大事だよ。',
      ]);
      await rice.say_and_wait([
        '自分は全力ならいい、ってだけだと、負けても落ち込まない ',
        r_call_u,
        ' は、',
        r_call_u,
        ' の本音じゃないのかも……',
      ]);
      if (era.get('love:30') >= 50) {
        await rice.say_and_wait([
          '勝ちたいのに、負けても受け入れられる、って思うのも、傲慢だよ？',
        ]);
        await rice.say_and_wait([
          r_call_u,
          ' が負けてもいいなら、',
          callname_30,
          ' をライスに譲ってくれてもいい……よね？',
        ]);
      }
      era.drawLine();
      await urara.say_and_wait([
        'それからずっと、',
        call_30,
        ' の質問を考えてた。きょうの併走で、みんなに置いていかれたときまで。',
      ]);
      await urara.say_and_wait(
        'またひとりになって、あの質問を思い出すと、胸がすごく痛いの。でも走るときの痛みとは違う……',
      );
      await urara.say_and_wait([
        callname,
        '、ウララはどうしてそんなにつらいの……まだ分からない……',
      ]);
      if (era.get('love:30') >= 50) {
        await era.printAndWait([
          urara.get_colored_name(),
          ' と同じく、',
          you.get_colored_name(),
          ' も一瞬ついていけない。普段やさしい ',
          rice.get_colored_name(),
          ' が、友だちにそんな強引な宣言をするとは。',
        ]);
        await era.printAndWait([
          'だが「',
          callname_30,
          ' を',
          rice.sex,
          'に譲れ」とは、',
          rice.get_colored_name(),
          ' はときどき、意外と格好いい。',
        ]);
        await era.printAndWait([
          rice.get_colored_name(),
          ' がそうなった理由は、たぶん当人がいちばん分かっている……話が逸れた。戻そう。',
        ]);
      }
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        ' が悩んではいても、問題の存在に気づいたのを見て、',
        you.get_colored_name(),
        ' はむしろ少し嬉しい。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' の友だちとしての指摘は、まさに急所だ。いまは ',
        rice.get_colored_name(),
        ' に感謝すべきだ。',
      ]);
      await era.printAndWait([
        '負けて悲しいのは普通で、むしろ大事な感情だ。だが ',
        urara.get_colored_name(),
        ' は気づかないうちに、そこを見落としていた。',
      ]);
      await era.printAndWait([
        urara.sex,
        'が「走ることは楽しいはず」と思っているから、「負けて悲しい面」を隠したのかもしれない。',
      ]);
      await era.printAndWait([
        '健全とは言いがたい。だがしっかりした子は多かれ少なかれ自分を無理させる。幸い、周りの人は',
        urara.sex,
        'にやさしくしてくれる。',
      ]);
      await era.printAndWait([
        'だが ',
        urara.get_colored_name(),
        ' が、見落としていた競争心に目を戻すと、溜まった圧力と一着への渇望は水面に浮かぶ。',
      ]);
      await era.printAndWait([
        '要するに、次の突破口は見えた。だが小さな',
        urara.uma_sex_title,
        'の心と体には、あまり優しくない気がする。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'そうは言っても、すべき導きはするのでしょう？ ならば、トレーナー',
        you.adult_sex_title,
        '（あなた）……',
      ]);
      era.printButton(
        '「ウララは本当に分からないのか。自分が『一位を欲しがっている』ことは、『負けてもいい』ことじゃない。」（賢さ+10）',
        1,
      );
      era.printButton(
        '「悔しさから伸びる圧力はそういうものだ。受け入れられれば、もっと速く走れる。」（スピード+10）',
        2,
      );
      ret.push(await era.input());
      if (high_relation) {
        await era.printAndWait([
          you.get_colored_name(),
          ' の返事の意味が分かったらしい。',
          urara.get_colored_name(),
          ' の目の落ちた花も、少しずつ明るくなる。',
        ]);
        await urara.say_and_wait([
          'うん！ 悲しみを力にする……ちょっと違う！ でもだいたいそういうこと？ ',
          call_61,
          ' も言ってた！',
        ]);
        await era.printAndWait([
          'そっと体と尻尾で ',
          you.get_colored_name(),
          ' に絡みつき、小さな',
          urara.uma_sex_title,
          'の薄い布一枚の体がすぐそこにある。',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          'の頬と肌は夕日で赤らんだように見え、塩気のある晩風のなかで ',
          you.get_colored_name(),
          ' へ湿った温もりを渡す。',
        ]);
        await urara.say_and_wait([
          'それに ',
          callname,
          ' もそばにいる！ つらくても、これからきっと乗り越えられる——',
        ]);
      } else {
        await era.printAndWait([
          '表情にはまだ迷いがあるが、小さな',
          urara.uma_sex_title,
          'の内側は、もう ',
          you.get_colored_name(),
          ' の答えを受け入れたようだ。',
        ]);
        await urara.say_and_wait(
          'きっとそうだよ。ウララの一位への気持ちも同じ。つらいけど、でも……',
        );
        await era.printAndWait([
          'そっと ',
          you.get_colored_name(),
          ' に寄りかかり、触れてもらいたそうな ',
          urara.get_colored_name(),
          ' は、頭と耳を ',
          you.get_colored_name(),
          ' の肩に預ける。',
        ]);
        await era.printAndWait([
          '細い小さな手が ',
          you.get_colored_name(),
          ' の指にそっとかかる。小さな',
          urara.uma_sex_title,
          'の、人より少し高い体温が手の甲から全身へ広がる。',
        ]);
        await urara.say_and_wait([
          'でも ',
          call_30,
          ' が言ったとおり、自分の欲しさを受け入れるのは、きっと間違ってない——',
        ]);
      }
      era.println();
      await era.printAndWait([
        'ほぐれ始めた脚を砂の上へ伸ばし、',
        urara.get_colored_name(),
        ' から ',
        you.get_colored_name(),
        ' へ、次の誘いが出る。',
      ]);

      await urara.say_and_wait([
        'だから ',
        callname,
        '、いまもう二周走りたい。一緒にトレーニングする？',
      ]);
      era.printButton(
        '「それなら、あそこに使えるタイヤがある。やってみる？」（パワー+10）',
        1,
      );
      era.printButton(
        '「いいよ。日が沈むまでまだ時間がある。走る？」（根性+10）',
        2,
      );
      ret.push(await era.input());

      await era.printAndWait([
        '砂を払い、',
        urara.get_colored_name(),
        ' と ',
        you.get_colored_name(),
        ' は夕日の砂浜から立ち上がる。',
      ]);
      await era.printAndWait([
        'いつもの姿と違い、金色の海を前に、',
        urara.get_colored_name(),
        ' の目に、小さな闘志が灯る。',
      ]);
      await era.printAndWait([
        urara.sex,
        'が自分の気持ちを完全に理解するには、まだ時間が要る。だから今、',
        urara.teen_sex_title,
        'はいちばん分かりやすいやり方で、最初の一歩を踏んだ。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'ウララに、自分の選択と向き合わせる……いえ、これもウララ自身の選択です。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'これでいいのでしょうか。わたくしはあなたより分かりません。あなたの考えは……聞かなくても見当はつきます。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'あなたの目には『敗北主義者』に見えるのでしょう。ですがいつでも、『急流勇退』は選択肢にありません。',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '夏合宿（クラシック級）終了';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} accept_sex 性愛を受け入れるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      accept_sex,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '……これでも、いいのでしょうか。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'そうです、合宿はもうすぐ終わります。この夜を、ゆっくり楽しんでください……',
      );
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' は沈黙と気まずい夜になると思っていた。だがいま ',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' のそばに縮こまり、笑顔に',
        urara.teen_sex_title,
        'の羞恥が混じる。',
      ]);
      await era.printAndWait([
        '……沈黙も気まずさも消えたわけではない。この部屋で、そばで途方に暮れているのは ',
        you.get_colored_name(),
        ' だけだ。',
      ]);
      await era.printAndWait([
        'では ',
        urara.get_colored_name(),
        ' は？ 理由もなくパジャマのまま ',
        you.get_colored_name(),
        ' の部屋へ入り込み、勝手に ',
        you.get_colored_name(),
        ' を引っ張り、就寝前まで遊んでいた。',
      ]);
      await era.printAndWait([
        'いま、追い出せない小さな',
        urara.uma_sex_title,
        'は自分で敷いた布団に横になり、',
        urara.sex,
        'の ',
        callname,
        ' と一夜を共にすると決めたようだ。',
      ]);
      await era.printAndWait([
        'ほかの人にこっそり電話して、小さな',
        urara.uma_sex_title,
        'を連れて帰ってもらう……そんなに簡単ならいいのだが。',
      ]);
      await era.printAndWait([
        '薄い布団の下から伸びた小さな手が引っ張る感触を受け、',
        you.get_colored_name(),
        ' は退路を ',
        urara.get_colored_name(),
        ' に塞がれたと分かる。',
      ]);
      await era.printAndWait([
        urara.sex,
        'が何を考えているかは分からない。だが携帯を取った瞬間、小さな',
        urara.uma_sex_title,
        'に遊びの名目で押し倒される事故が起きそうだ。',
      ]);
      await era.printAndWait([
        'それでも、このままでは済ませられない。「誰かが見つけるかもしれない」という最後の望みを抱え、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' に小さな声で確かめる。',
      ]);
      era.printButton('「あの……ウララ、みんなは、ここに来たの知ってる？」', 1);
      await era.input();
      await urara.say_and_wait(
        '知らないよ？ みんなが知ってたら、絶対ここには来させないもん。',
      );
      await urara.say_and_wait([
        'でも大丈夫！ みんなが知らないのは、ウララが ',
        callname,
        ' のところに行くことだけ！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の目的を察したらしい。',
        urara.get_colored_name(),
        ' は瞬きし、微笑む肉食獣のように言葉で ',
        you.get_colored_name(),
        ' の退路を塞ぐ。',
      ]);
      await urara.say_and_wait([
        'だから ',
        callname,
        '、どうして電気を消したあと、まだ座ってるの？ もう寝る時間だよ？',
      ]);
      await era.printAndWait([
        'やはり予想どおり、孤立無援だ。小さな',
        urara.uma_sex_title,
        'の催促に従い、',
        you.get_colored_name(),
        ' は諦めて並んだ布団へ倒れる。',
      ]);
      await era.printAndWait([
        'とっくに分かっていたはずだ。普段は素直で可愛くても、この子の',
        urara.uma_sex_title,
        'としての本能は、噛みついて離さない伏兵のままだ……',
      ]);
      await urara.say_and_wait(
        'いっぱい遊んだね。海でもたくさん泳いだし、みんなともいっぱい話した！',
      );
      await urara.say_and_wait([
        'えへへ～ 夏の思い出、たくさんできた。',
        callname,
        '、来年も来る？',
      ]);
      await era.printAndWait([
        '夏の思い出、か。最後が小さな',
        urara.uma_sex_title,
        'の強引な襲撃でなければ、もっとよかったのだが……',
        urara.get_colored_name(),
        ' は、そういう子ではないはずだ。',
      ]);
      era.printButton(
        '「たぶん大丈夫だ。それにトレーニングの思い出も……今は言わないほうがいいか……」',
        1,
      );
      await era.input();
      if (high_relation) {
        await urara.say_and_wait([
          'ちがうよ！ トレーニングの思い出も楽しい。',
          callname,
          ' と一緒なのも、楽しい思い出。',
        ]);
        await era.printAndWait([
          '二人の距離がもう少し近くなる。担当の小さな指が隣の布団へ入り、',
          you.get_colored_name(),
          ' の掌をくすぐる。',
        ]);
        await era.printAndWait([
          '小さな体が静かに ',
          you.get_colored_name(),
          ' の布団へ滑り込む。小さな',
          urara.uma_sex_title,
          'の柔らかい体を隔てて、どきどきがリズムのある温もりとして ',
          you.get_colored_name(),
          ' に届く。',
        ]);
        await era.printAndWait([
          '月がいい。視線を少しずらせば、月明かりに照らされた',
          urara.teen_sex_title,
          'の桜色の瞳と目が合うはずだ。',
        ]);
      } else {
        await urara.say_and_wait([
          '大丈夫！ トレーニングの思い出も大事。それに ',
          callname,
          ' も、ウララを助けてくれたよ？',
        ]);
        await era.printAndWait([
          'いつの間にかそっと寄り、',
          urara.get_colored_name(),
          ' の小さな手が隙間から入り、引っ込めようとした ',
          you.get_colored_name(),
          ' の手首をつかむ。',
        ]);
        await era.printAndWait([
          '静かに ',
          you.get_colored_name(),
          ' と同じ布団へもぐり込む。布の擦れる音のなか、',
          you.get_colored_name(),
          ' は',
          urara.teen_sex_title,
          'が徐々に ',
          you.get_colored_name(),
          ' の横顔へ向き直るのを感じる。',
        ]);
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'は部屋に差し込む月明かりで、複雑な目を ',
          you.get_colored_name(),
          ' の横顔へ向けている。',
        ]);
      }
      await era.printAndWait([
        '沈黙のなか、',
        urara.get_colored_name(),
        ' の手が徐々に ',
        you.get_colored_name(),
        ' の指に絡む。まだ夏なのに、',
        urara.get_colored_name(),
        ' の掌は冷たい。',
      ]);
      await era.printAndWait([
        '近づいていた視線が外れた瞬間、',
        you.get_colored_name(),
        ' に寄りかかる小さな',
        urara.uma_sex_title,
        'が、もう一度口を開く。',
      ]);
      await urara.say_and_wait(
        'ずっと考えてた。前はみんなに笑顔を見せるだけだったウララが、なんだか……なんだか……',
      );
      await urara.say_and_wait(
        'なんだか……『流れに身を任せる』？ この言葉だよね？ ウララ、言い間違えてない？',
      );

      era.printButton(
        '「……ウララは、前の自分が流れに身を任せていたと思うのか？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'どうしたらいいか、忘れそうだった……気持ちと願いはぶつかってないこととか、自分がほしいものとか。',
      );
      await urara.say_and_wait(
        'でも、前はいつも負けてたことを思い出すと、胸がざわざわして、普段まで緊張しちゃう……',
      );
      await era.printAndWait(
        '心の変化に敏感すぎて不安になり、頼れる大人に気持ちを整えてもらいたくなったのだな。なら……',
      );

      era.printButton('「分かった。つらいなら言ってくれ。それに——」', 1);
      await era.input();

      await urara.say_and_wait([
        'それに ',
        callname,
        ' は、ずっとウララと一緒にいてくれる？ えへへ～ 知ってるよ。もう約束したことだもん。',
      ]);
      await era.printAndWait([
        'とっくに分かっていた答えでも気にしないらしい。',
        you.get_colored_name(),
        ' の耳元に、',
        urara.teen_sex_title,
        'の満足げな小さな笑いが届く。',
      ]);
      await era.printAndWait([
        urara.sex,
        'に近い腕を横から抱き、小さな',
        urara.uma_sex_title,
        'のやさしい吐息が、くすぐるように ',
        you.get_colored_name(),
        ' の耳を撫でる。',
      ]);
      await urara.say_and_wait([
        callname,
        ' が大変なのは分かってる。だから、これでいいよ？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' を根拠なく疑いたくはない。だが、これではまた目的を疑わずにいられない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の心配を「確かめる」ように、硬直した沈黙のなか、腕の中の小さな',
        urara.uma_sex_title,
        'は、親しい内緒話を続ける。',
      ]);

      await urara.say_and_wait([
        'あの……',
        callname,
        ' は、ウララ、成長したと思う？',
      ]);
      era.printButton(
        '「日焼けしたか、と聞かれても、ウララには答えられないな。」（好感+10）',
        1,
      );
      era.printButton(
        '「前より大人になった、と言ったら、ウララは嬉しいか？」（恋慕+2）',
        2,
      );
      if (era.get('love:52') >= 50 && accept_sex && urara.sex_code - 1 !== 0) {
        era.printButton(
          '「『特別な思い出』を残すなら、ウララはいいと言うか？」（好感+10、恋慕+2）',
          3,
        );
      }
      const ret = await era.input();
      if (ret !== 3) {
        await era.printAndWait([
          you.get_colored_name(),
          ' がわざと',
          urara.teen_sex_title,
          'の心に寄り添わない答え方をすると、',
          urara.teen_sex_title,
          'は布団の下から少し不満げに ',
          you.get_colored_name(),
          ' の手首を軽くつねる。',
        ]);
        await era.printAndWait([
          'だが振り向くと、',
          urara.get_colored_name(),
          ' はもう腕の中にもぐり、頭を ',
          you.get_colored_name(),
          ' の肩に預け、静かに笑っている。',
        ]);
        await urara.say_and_wait([
          callname,
          '、明日は帰るんだよね？ ならきょうは、もう少し早く寝たほうがいいかも。',
        ]);
        await urara.say_and_wait([
          'えへへ～ 特別な夜だね。次は、',
          callname,
          ' に、違うウララを見せられたらいいな……',
        ]);
        await urara.say_and_wait('おやすみ、ね？');
        await era.printAndWait([
          '……疑いは、本当には確かめられずに済んだ。それだけでも幸いだ。',
          urara.get_colored_name(),
          ' が体を緩めると、',
          you.get_colored_name(),
          ' も少し息を吐く。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' の半分冗談の願いを聞くと、',
          urara.teen_sex_title,
          'はまず呆けたように目を見開き、それから羞恥が',
          urara.sex,
          'の頬を染める。',
        ]);
        await urara.say_and_wait([
          callname,
          ' は、いつも困らせることを言う。でも ',
          callname,
          ' が望むなら……',
        ]);
        await era.printAndWait([
          '薄い夏布団を体で持ち上げ、',
          urara.teen_sex_title,
          'の表情が潤む。',
          urara.sex,
          'は軽く ',
          you.get_colored_name(),
          ' の前に跨がり、自分のボタンへ手を伸ばす。',
        ]);
        await urara.say_and_wait([
          '夏合宿に青春は欠かせないって、みんな言うよね。ウララはよく分かんないけど、',
          callname,
          ' も期待してるんでしょ？',
        ]);
        await era.printAndWait([
          'パジャマが滑り落ち、',
          urara.teen_sex_title,
          'の香りが広がる。最後の隔たりを脱いだ小さな',
          urara.uma_sex_title,
          'の桜色の瞳に、',
          you.get_colored_name(),
          ' だけへ溢れる欲が映る。',
        ]);
        await era.printAndWait([
          '小さな声で純粋な欲を告げ、',
          urara.teen_sex_title,
          'は柔らかい光のなかで小さく息をつき、飾らない体を ',
          you.get_colored_name(),
          ' に見せる。',
        ]);
        await era.printAndWait(
          '敏感な乳首は恋人の前で遠慮なく立ち上がり、悦びに気絶するまで弄ばれる準備ができているようだ。',
        );
        if (era.get('talent:52:乳房尺寸') > 0) {
          await era.printAndWait([
            '大きな双丘がパジャマの束縛からようやく解放され、',
            urara.teen_sex_title,
            'の小さな体のうえで揺れ、',
          ]);
          await era.printAndWait(
            '母乳を搾るときに雌を屈服させる手順すら要らない。手にそっと乗せて舌先で少し弄れば、',
          );
          await era.printAndWait([
            '長く耐えた乳房は素直に、濃く粘る乳を、小さな',
            urara.uma_sex_title,
            'の失神した甘い嗚咽と一緒に押し出す。',
          ]);
        }
        await era.printAndWait(
          '背に回した十指が、性器として使う淫らな後穴へ落ち着きなく入り、恋人の前で我慢できずに激しく自らを慰める。',
        );
        await era.printAndWait([
          '普段の素直さも愛らしさも脱ぎ捨て、みんなのために走る小さなアイドルは、いまは ',
          callname,
          ' 専用の菊穴の奴隷でしかない。',
        ]);
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'が ',
          you.get_colored_name(),
          ' の下へ軽く押しつける幼い穴も、欲の汁を受け入れて吐き出すのを待ちきれないように微かに震え、',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          'の熱い体が淫らに踊り、求愛される者の腹へ温かい銀糸を落とし続ける。',
        ]);
        await urara.say_and_wait([
          'はぁ～ いま、ウララに教えて……ん～ ',
          callname,
          '～ なにを期待してるの～？',
        ]);
        if (era.get('flag:惩戒力度') >= 2) {
          await era.printAndWait([
            '眼前で淫らに体を見せる小さな牝馬は、',
            you.get_colored_name(),
            ' より',
            era.get('flag:惩戒力度') === 2 ? '性奴' : '孕み袋',
            'らしいのかもしれない。',
            urara.sex,
            'は ',
            you.get_colored_name(),
            ' に蹂躙されるほうを望んでいるのかもしれない。',
          ]);
          await era.printAndWait([
            'だが',
            urara.sex,
            'は結局、',
            you.get_colored_name(),
            ' の「',
            urara.uma_sex_title,
            '様」だ。陵辱は、下賤な ',
            you.get_colored_name(),
            ' が',
            urara.sex,
            'を満たせるものではない。',
          ]);
          await era.printAndWait([
            'それでも',
            era.get('flag:惩戒力度') === 2 ? '性奴' : '孕み袋',
            'としてなら、',
            you.get_colored_name(),
            ' はまだ',
            urara.sex,
            'に快楽を与えられる。',
          ]);
          await era.printAndWait([
            '胸の谷間から覗くふたなり',
            urara.uma_sex_title,
            'の先を、やさしく味わうように含み、',
            you.get_colored_name(),
            ' は舌で慎重に担当の肉棒に仕える。',
          ]);
          await era.printAndWait([
            '大丈夫。',
            urara.sex,
            'が嬉しければいい。',
            urara.get_colored_name(),
            ' が楽しければいい。以前だって、こうではなかったか……',
          ]);
          await era.printAndWait(
            '舌先で口の中の包皮を少しずつ開き、跡が残る強さで吸い、舐める。すべて、体に刻まれた本能のようだ。',
          );
          await era.printAndWait([
            'だが、こうして懸命に仕える奴隷',
            urara.uma_sex_title,
            'を見て、',
            urara.get_colored_name(),
            ' の目に、言いようのない悲しみが一瞬よぎる。',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            ' をどこかでつらくさせたのか。自分が間違えたのか。いや……もっと上手くやらなければ。こんなのは',
            urara.sex,
            'に似合わない……',
          ]);
          await era.printAndWait([
            '仕える相手の表情を見て、思考まで作り変えられた ',
            you.get_colored_name(),
            ' の頭に、便器失格の自己疑念がいくつも滑る。',
          ]);
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' が躊躇うと、',
            urara.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の口から肉棒をそっと抜き、逆にやさしく ',
            you.get_colored_name(),
            ' の体を押さえる。',
          ]);
          await urara.say_and_wait([
            '大丈夫。もう昔には戻れなくても……なら、ウララから、',
            callname,
            ' の期待に応えるね？',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32_after_sex: (() => {
    const title = '';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} do_sex 性愛したか
     */
    const f = async (urara, inner_urara, you, do_sex) => {
      if (do_sex) {
        await era.printAndWait([
          you.get_colored_name(),
          ' のそばに縮こまり、小さな声でおやすみを言う。満たされた ',
          urara.get_colored_name(),
          ' は、ようやく安心して眠る。',
        ]);
        await era.printAndWait([
          'あの小さな',
          urara.uma_sex_title,
          'は成長したのか。その問いは、',
          urara.sex,
          '自身が答えたほうがいいのかもしれない……',
        ]);
        await era.printAndWait([
          '体に寄り添う優しさをそっと抱き、',
          you.get_colored_name(),
          ' もゆっくり目を閉じる。',
        ]);
        await era.printAndWait(
          'いずれにせよ、今年の意外に騒がしい夏は、もう終わりに近い。',
        );
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '……いいえ、よくありません。今の発言は撤回します……やはり、だめです……',
      );
      await inner_urara.say_as_unknown_and_wait('……うっ……');
    };
    f.title = title;
    return f;
  })(),
  ws_47_43: (() => {
    const title = '「変わる」＆「選ぶ」';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} m_summer1 クラシック級夏合宿開始イベントを踏んだか
     * @param {number} fans ファン数
     * @param {number} best_mvp これまでの重賞最高着順。Infinity は未出走
     * @param {PrintedSpan} negi_sta 根岸ステークス（色付き名）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      m_summer1,
      fans,
      best_mvp,
      negi_sta,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        'ウララという競走',
        urara.uma_sex_title,
        'がいるそうです。何度負けても、それでも頑張っている、と。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '場内のあちこちで、その話が聞こえるある日——',
      );
      era.drawLine();
      await urara.say_and_wait(
        'ん—— 決めたのに、勝つのはまだ難しい！ みんな『シュッ』て前に行っちゃう——',
      );
      await era.printAndWait([
        '模擬戦の場内。また安心して最後になる ',
        urara.get_colored_name(),
        ' が、少しふくれっ面で ',
        you.get_colored_name(),
        ' の胸へ飛び込む。',
      ]);
      await era.printAndWait(
        '負けへの悔しさを出せるようになってから、この毛むくじゃらのピンクは、ますます小動物らしい。',
      );
      if (!m_summer1) {
        await era.printAndWait([
          urara.get_colored_name(),
          ' はいつから、こんなにやる気になったのか。夏合宿のあいだに、何かあったのか。',
        ]);
        await era.printAndWait([
          '幸い大きな問題はなかったらしい。',
          urara.get_colored_name(),
          ' はひとりでもちゃんと成長できる。いい子だ……',
        ]);
      }
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        ' の体を丁寧に揉み、癒やされた顔の ',
        you.get_colored_name(),
        ' と、腕の中でまだ拗ねている可愛い生き物は対照的だ。',
      ]);
      await era.printAndWait([
        'もちろん ',
        you.get_colored_name(),
        ' は、いま',
        urara.sex,
        'が普段最下位になりやすい理由も分かっている。もともと集中が続きにくく、日常のレースではなおさら力が出ない。',
      ]);
      await era.printAndWait([
        '無理に責めなくていい。',
        urara.uma_sex_title,
        'の体には限界がある。日常まで張り詰める必要はない。',
        urara.get_colored_name(),
        ' には、それが特に大事だ。',
      ]);
      await era.printAndWait(
        '最初は直すべき問題だと思うこともあった。だがいまは、小さな担当に合う伸び方をだいたい掴んでいる。',
      );
      await era.printAndWait([
        '本番の前に勝ちの条件を少しずつ積み、本番で結果を出せれば、',
        urara.get_colored_name(),
        ' にとっては成功だ。',
      ]);

      era.printButton(
        '「焦らなくていい。まず落ち着こう。ウララは、どうすれば勝てると思う？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'ウララひとりで出ればいいよ！ ウララだけが走ってたら、一位は絶対ウララだもん！',
      );
      await era.printAndWait([
        'え？ なに？ ',
        urara.get_colored_name(),
        ' が冗談かどうか一瞬分からず、',
        you.get_colored_name(),
        ' はトレーニング場の端で足を滑らせそうになる。',
      ]);

      await inner_urara.say_as_unknown_and_wait(
        'あなた、あは……とにかく、何か言ってください……',
      );
      era.printButton(
        '「その提案、副会長をしばらく寝かせそうだな。」（好感+15）',
        1,
      );
      era.printButton('「ま、まさかウララは本当に天才か？」（恋慕+3）', 2);
      ret.push(await era.input());

      await urara.say_and_wait([
        'えへへ～ ',
        callname,
        ' に笑われた！ でもそうだね。それじゃレースじゃないよ。',
      ]);
      await urara.say_and_wait(
        'でもやっぱり、自分にちょっと怒ってる。無理しなくていいのは分かってるけど、ウララ、まだ遅いよ……',
      );
      await urara.say_and_wait(
        'どれだけ負けても、変わらないみんなは責めない。だからウララが、自分で早く変わらないと。',
      );

      era.printButton(
        '「でも自分を認めてから、ウララは確かに強くなっただろう？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'うん。',
        callname,
        ' の言うとおり、ウララも強くなった。レースの応援も増えたよ。',
      ]);
      await urara.say_and_wait(
        '商店街のみんなが、応援会の人もどんどん増えてるって。新しいファンも、思いきり走っていいって励ましてくれる！',
      );
      await era.printAndWait([
        'たしかに、最近のレースでは知らない顔も ',
        urara.get_colored_name(),
        ' の応援に加わっている。日常の活動レースでも、',
        urara.sex,
        'を見に来る人がとても多い。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の調子が安定しないと分かっていても、応援する人たちは毎回、',
        urara.sex,
        'に必勝の祝福を送る。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の熱に動かされただけでなく、何度もの負けのなかから、いちばん大事な勝ちを掴むところを見たいのかもしれない。',
      ]);
      await urara.say_and_wait(
        'でも、全力で勝つって言ったら、商店街のおじさんとおばさん、たくさんが心配そうな顔をしたよ。',
      );
      await urara.say_and_wait(
        '世話してくれる人たちは、まだケガが心配みたい。でも今のウララは、もう迷ってない。だから……',
      );
      await era.printAndWait([
        'ああ、あの人たちか。',
        urara.get_colored_name(),
        ' の話を聞き、',
        you.get_colored_name(),
        ' は宣伝の午後に話しかけてきた女性をすぐ思い出す。',
      ]);
      await era.printAndWait([
        'だが ',
        urara.get_colored_name(),
        ' がもう迷わないなら、矛盾が解けるのも時間の問題だ。',
      ]);

      era.printButton(
        '「漫画みたいな台詞になるけど、次のレースでウララの決意を見せればいい。」',
        1,
      );
      await era.input();

      await urara.say_and_wait('うん！ そうだね！ ウララ、もっと頑張る——！');
      await era.printAndWait([
        'そうは言っても、まだきっかけが足りない。「決意の見せ方」を考え、',
        you.get_colored_name(),
        ' はまた沈思する。',
      ]);
      await era.printAndWait([
        'いつか ',
        urara.get_colored_name(),
        ' にも、自分から出たい大事なレースができるだろう。そのとき',
        urara.sex,
        'は、どんなレースを選ぶのか。',
      ]);
      await era.printAndWait([
        'それに、シニア級の日程も決めなければ。未来の構想に沿い、',
        you.get_colored_name(),
        ' はノートを下へ探す。',
      ]);
      await era.printAndWait([
        '年末に何をするかは考えにくい。だが来年の最初の段階目標……必須ではないが、まずは ',
        negi_sta,
        ' を試すか。',
      ]);
      era.println();
      if (best_mvp === Infinity) {
        await era.printAndWait([
          '一年以上の調整を経て、いまの ',
          urara.get_colored_name(),
          ' には重賞を争う実力があるはずだ。',
        ]);
        await era.printAndWait([
          '水温と深さを確かめる意味でも、似たレースを ',
          urara.get_colored_name(),
          ' の重賞の起点にしてもいい。',
        ]);
      } else if (best_mvp === 1) {
        await era.printAndWait([
          urara.uma_sex_title,
          'の体は変わり続ける。シニア級では ',
          urara.get_colored_name(),
          ' も、いつもの形の変化に合わせて調整が要るかもしれない。',
        ]);
        await era.printAndWait([
          'いまの ',
          urara.get_colored_name(),
          ' に重賞へ出る実力があるなら、重賞で新しい一年を探るのも悪くない。',
        ]);
      } else {
        await era.printAndWait([
          '以前も重賞には出ている。だが ',
          urara.get_colored_name(),
          ' は全力でも勝てなかった。あのときはまだ早かったのだろう。',
        ]);
        await era.printAndWait([
          'いまの ',
          urara.get_colored_name(),
          ' なら準備は足りているはずだ。ここから再挑戦しても問題ない。',
        ]);
      }
      if (fans >= 25000) {
        era.println();
        await era.printAndWait(
          'それに、これまでファンと名声を積んできた方針も、ここで効く。たとえばファン投票制だ。',
        );
        await era.printAndWait(
          '主催が認めるやり方なら、ファンの支持が十分高ければ、投票制で出走の幅を広げられる。',
        );
        await era.printAndWait([
          '以前も言ったとおり、レースで',
          urara.sex,
          'を応援する人が多ければ、',
          urara.get_colored_name(),
          ' は普段より速く走れる。',
        ]);
        await era.printAndWait([
          'ずるに聞こえるか。だがそれも ',
          urara.get_colored_name(),
          ' の実力の一部だ。少なくとも「三女神」が許している部分のはずだ。',
        ]);
        await era.printAndWait([
          'ところで、',
          urara.get_colored_name(),
          ' のファンはいま何人だ。あ、あった……ん？！',
        ]);
        await era.printAndWait(
          '重賞……いや、この支持なら、出られる重賞どころか、「有馬記念」まで……',
        );
        await era.printAndWait([
          '携帯の情報を少しずつめくり、',
          you.get_colored_name(),
          ' に大胆な想定が芽生える。',
        ]);
      }
      era.println();
      await era.printAndWait(
        'どんな計画を立てるにせよ、その前に本人の考えを聞かなければ。',
      );
      await era.printAndWait([
        'ノートと携帯を置き、',
        you.get_colored_name(),
        ' は、さっきからトレーニング場を走る同級生をぼんやり見ていた ',
        urara.get_colored_name(),
        ' を見る。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の視線に気づくと、小さな',
        urara.uma_sex_title,
        'は待ちかねたように、前向きな合図を送る。',
      ]);
      await urara.say_and_wait([
        callname,
        '、もう休めたよ！ いまならトレーニング、始めていい？',
      ]);

      era.printButton(
        '「いいよ。その前に、ウララ自身は来年の計画、どう考えてる？」',
        1,
      );
      await era.input();

      urara.say([
        '来年の計画？ えへへ～ ',
        callname,
        ' も、そろそろ聞くと思ってた！',
      ]);
      era.printButton('もっと遠い距離（中距離&長距離適性上昇）', 1);
      era.printButton('芝を試す（芝適性上昇）', 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await urara.say_and_wait(
          'もっと遠く走れたら、もっとたくさんの人に気づいてもらえるよね？',
        );
      } else {
        await urara.say_and_wait(
          '芝も走れたら、もっとたくさんのレースに挑戦できるよね？',
        );
      }

      await era.printAndWait('ん？ 答えが早い。いつ考えた？ 待て……');
      await era.printAndWait([
        urara.get_colored_name(),
        ' の迷いのない答えに、',
        you.get_colored_name(),
        ' は少し安堵し、すぐ違和感に気づく。「',
        callname,
        'も、そろそろ聞くと思ってた」とは、どういう意味だ。',
      ]);
      await era.printAndWait([
        '小さな ',
        urara.get_colored_name(),
        ' に心を読まれても、大したことでは……ない、はずだ。',
      ]);
      await era.printAndWait([
        '隣の小さな担当の笑顔に深い意味があるか、見る勇気がなかった。',
        you.get_colored_name(),
        ' は逃げるようにトレーナーモードへ入る。',
      ]);

      era.printButton(
        '「よし。あとで商店街へ行こう。いまはまず一周、走ってみよう！」',
        1,
      );
      await era.input();

      await urara.say_and_wait('おっ！ ウララGO——！');
      await era.printAndWait([
        you.get_colored_name(),
        ' の合図で、準備のできていた小さな',
        urara.uma_sex_title,
        'は、成長した姿のまま、トレーニング場を走る人ごみへ飛び込む。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '——未来は簡単には見えません。ですが今の',
        urara.sex,
        'の成長は、決して間違いではありません',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait([
        'ウララまで、時機を見て選ぶようになるとは。あなたは',
        urara.sex,
        'のトレーナーではないのですか。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        'をいつまでも守ってほしい、と言っているのではありません。ただ、わたくしはそれでいいと思っているだけです。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'いつか',
        urara.sex,
        'にも、自分から追いたい目標ができるのです……',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      if (fans >= 25000) {
        era.println();
        await inner_urara.say_as_unknown_and_wait(
          'すみません。去る前に、どうか……一言だけ。',
        );
        await inner_urara.say_as_unknown_and_wait([
          'ウララが重賞に挑んではいけない、とは言いません。ですが、きっかけひとつで',
          urara.sex,
          'に届かない期待を残す必要はありません。',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          'これまでウララに何度も勝たせてくださったことには感謝しています。',
          urara.sex,
          'が勝てたことも、うれしく思っています。',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          urara.sex,
          'を利用して利を得ようとしても、わたくしは目を閉じることができます。ですが……',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          '頂点に立とうとするなら、重さを背負う覚悟が要ります。',
          urara.sex,
          'は……あなたが思うほど強くありません。',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          'ずっと努力してきたあなたに余力があっても、',
          urara.sex,
          'から羽根一枚すら分けられません。',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          urara.sex,
          'に希望を与えすぎないでください。',
          urara.sex,
          'がほしいのは、みんなとその小さな幸せを分けることだけではないのですか。',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          'どうか、もう一度よく考えてください。お願いします……',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '前へ進む決心！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {number} best_mvp これまでの重賞最高着順。Infinity は未出走
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      best_mvp,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        'どうして……言ったのに……どうして、まだこうするのです……あなたという人は、本当に……',
      );
      era.drawLine();
      await era.printAndWait([
        '広い選手通路で、',
        urara.get_colored_name(),
        ' は周りの張り詰めた空気にそぐわず、きょろきょろしている。',
      ]);
      await era.printAndWait([
        '興奮しすぎた小さな',
        urara.uma_sex_title,
        'の隣に立つのは、少し頭を抱える',
        urara.sex,
        'の ',
        callname,
        ' だ。',
      ]);
      await urara.say_and_wait([
        callname,
        '！ ウララ、ほんとに ',
        arim_kin,
        ' に出るなんて！',
      ]);
      await era.printAndWait([
        '実際、多くの人の予想外だった。投票を組んだ ',
        you.get_colored_name(),
        ' 自身も、ファン投票制が本当に通るとは思っていなかった。',
      ]);
      await era.printAndWait([
        '大胆な考えは大胆な考えのままのはずだった。だが ',
        you.get_colored_name(),
        ' は、',
        urara.get_colored_name(),
        ' を好きな人たちの熱を、まだ低く見ていた。',
      ]);
      await era.printAndWait([
        '周りの',
        urara.uma_sex_title,
        'とトレーナーたちの殺気立った顔を一瞥すれば分かる。ここにいて緊張していないのは、たぶん ',
        urara.get_colored_name(),
        ' だけだ。',
      ]);
      await urara.say_and_wait([
        'えへへ～ みんなの顔、すごく緊張してる……ウララも、もっと緊張したほうがいい？',
      ]);
      await era.printAndWait([
        '周囲の出走者の空気に合わせて声を落とし、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の裾を軽く引く。',
      ]);

      era.printButton(
        '「だ、大丈夫。ウララは緊張しなくていい。未来の模擬だと思えば……」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'え？ ',
        callname,
        ' は、ウララが次も来られると思ってるの？ ',
        callname,
        ' もみんなも、ウララを信じてくれてるんだね！',
      ]);
      await urara.say_and_wait([
        'でもこれは ',
        arim_kin,
        ' だよ！ みんなも期待してる。だから勝てたら、勝てたら——！',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の勝ちたい気持ちを聞き、もともと痛い ',
        you.get_colored_name(),
        ' の頭は、罪悪感でさらに揺れる。',
      ]);
      if (best_mvp === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          ' は本当に勝つことを考えている。あり得るか。分からない。だが重賞を勝ったことがあるなら、少し希望を寄せても……',
        ]);
        await era.printAndWait(
          '寄せても、何だ。問題は大きい。同じはずがない。三女神に聞かなくても、これはまったく別だ。',
        );
      } else {
        await era.printAndWait([
          '勝てる望みは、かすかですらない。いま小さな',
          urara.uma_sex_title,
          'がこのレースを勝つには、奇跡が要るだろう。',
        ]);
        await era.printAndWait([
          '三女神が小さな',
          urara.uma_sex_title,
          'の努力を見ているとしても、いま',
          urara.sex,
          'に応えられるのは、',
          urara.sex,
          'を応援する人たちだけだ。',
        ]);
      }
      era.println();
      await era.printAndWait(
        'これはまずい。トレーナー失格だ。今の有馬参加は、やはり早すぎた。',
      );
      await era.printAndWait([
        '勝ちを狙っていたわけではない。だが少なくとも今回は、',
        urara.get_colored_name(),
        ' が十分な準備を整えてから来ていれば……',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          'ウララは大丈夫だよ？ ',
          callname,
          ' はいつもどおりでいい。この機会、無駄にしないから！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' のいつもの顔と違うのを察え、小さな',
          urara.uma_sex_title,
          'は遠慮なく ',
          you.get_colored_name(),
          ' を抱き、子供をなだめる母のような笑顔を見せる。',
        ]);
        await urara.say_and_wait([
          '一回目の惨敗なら、二回目に立て直せばいい。ウララは大丈夫！ じゃあ ',
          callname,
          '、またあとでね！',
        ]);
        await urara.say_and_wait('レースのあいだ、ずっとウララを見ててね！');
      } else {
        await urara.say_and_wait([
          callname,
          '、悩んでる？ いいじゃん。わたしたち、ずっとこんな無茶してきたでしょ？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の心を見抜いたように、',
          urara.get_colored_name(),
          ' が急に静かに抱きついてくる。笑顔はやさしく、仕方のない母のようだ。',
        ]);
        await urara.say_and_wait([
          'それに、もう出走の時間だよ？ ',
          callname,
          ' はいつもどおり、スタンドでみんなと待ってて！',
        ]);
        await urara.say_and_wait('前と同じ。目をそらさないでね？');
      }
      era.println();
      await era.printAndWait([
        '長い一瞬のあと、小さな',
        urara.uma_sex_title,
        'の抱擁は突然終わる。すぐ ',
        you.get_colored_name(),
        ' の耳に、出走の予告が届く。',
      ]);
      await urara.say_and_wait([
        '気持ち、少し落ち着いた？ えへへ～ ',
        callname,
        ' は、すぐ圧力を溜めちゃうね！',
      ]);
      await urara.say_and_wait([
        'でも、',
        callname,
        ' にしかできないこともあるよ。わたしたちは ',
        callname,
        ' と担当だから！',
      ]);
      await era.printAndWait([
        '出走前の決まった儀式のように、通路の外の光を背に、',
        urara.get_colored_name(),
        ' は笑って ',
        you.get_colored_name(),
        ' に最後の手を振る。',
      ]);
      await era.printAndWait([
        '同じく手を振り、',
        urara.get_colored_name(),
        ' が場へ走るのを見送る。ようやく ',
        you.get_colored_name(),
        ' もこめかみを強く押さえ、自分の行くべき場所へ向き直る。',
      ]);
      era.println();
      await era.printAndWait('だが。');
      await inner_urara.say_as_unknown_and_wait(
        '……去る前に、もう一つだけ、答えていただけますか。',
      );
      await era.printAndWait(
        '誰もいない選手通路。灰白に溶ける空間で、時間は止まったようだ。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' へまっすぐ来るのは、見慣れない暗い表情を載せた、いちばん見慣れた桜色だ。',
      ]);
      await era.printAndWait([
        'だが',
        urara.sex,
        'は ',
        urara.get_colored_name(),
        ' ではない。声は同じで、怒った小さな顔も同じでも、',
        urara.sex,
        'は絶対に ',
        urara.get_colored_name(),
        ' ではない。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は見知らぬほど礼儀正しくもないし、こんな陰った複雑な顔もしない。',
      ]);
      await era.printAndWait([
        urara.sex,
        'はもちろん ',
        urara.get_colored_name(),
        ' ではない。いま ',
        urara.get_colored_name(),
        ' はもう場へ出ている。後方から突然現れることも、まだ制服のままであることもない。',
      ]);
      await era.printAndWait([
        'だが',
        urara.sex,
        'は「',
        inner_urara.get_colored_actual_name(),
        '」なのかもしれない。',
        you.get_colored_name(),
        ' は',
        urara.sex,
        'と夢で何度も会っているのかもしれない。ただ、目が覚めるたびに、すべては消える——',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '言ったはずです。どうして、まだ',
        urara.sex,
        'を無理させるのです……',
      ]);
      await era.printAndWait([
        '理性まで凍りそうな空間で、厳しい問いが ',
        inner_urara.get_colored_name(),
        ' の姿のまま、',
        you.get_colored_name(),
        ' の胸元まで迫る。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '聞きます。なぜ今、',
        urara.sex,
        'を走らせるのです……なぜ今、ウララを有馬に出すのです！',
      ]);
      await era.printAndWait([
        'ぼんやりした躊躇が',
        urara.teen_sex_title,
        'の怒りに火をつけ、溜まった怒りが',
        urara.uma_sex_title,
        'の力で ',
        you.get_colored_name(),
        ' を通路の壁へ押しつける。',
      ]);
      await era.printAndWait([
        'ぶつかった痛みが背中から全身へ広がり、迷う ',
        you.get_colored_name(),
        ' に刺激で少し目を覚まさせる。',
      ]);
      await era.printAndWait([
        '凍った世界は夢ではない。目の前の「',
        inner_urara.get_colored_actual_name(),
        '」も、確かにそこにいる。',
      ]);
      await era.printAndWait([
        'だが体を掴む重圧は数秒しか続かない。小さな桜色の',
        urara.uma_sex_title,
        'は、泣くように力なく ',
        you.get_colored_name(),
        ' の襟を離す。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'だから、どちらも同じなのです。放っておいても、自分を害してまで、変わり続けて……',
      );
      await era.printAndWait([
        '嗚咽のような言葉は続かない。悲しみを抑えた微笑みを浮かべ、「',
        inner_urara.get_colored_actual_name(),
        '」は顔を上げ、',
        you.get_colored_name(),
        ' の裾を整える。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'すみません。わたくしの失態です。最初から、あなたが止まるなど、期待すべきではありませんでした……',
      );

      era.printButton(
        '「すまない。何が起きているかは分からないが、担当のレースを見に行かないと……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '目の前の異様さに対し、',
        you.get_colored_name(),
        ' は妙に冷静だ。目の前の',
        urara.uma_sex_title,
        'を避けて、',
        urara.get_colored_name(),
        ' のレースを見守ろうとするだけだ。',
      ]);
      await era.printAndWait([
        'いま向き合っているのは「異質な ',
        urara.get_colored_name(),
        '」だけでなく、名は知らないが、もう長い「面倒な友だち」でもある。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '『ウララ』が心配なのですか。大丈夫です。',
        urara.sex,
        'は、あなたがそこまで急ぐほどではありません。',
      ]);

      era.println();
      if (high_relation) {
        await inner_urara.say_as_unknown_and_wait(
          'ですが、お気持ちは分かります。あなたは本当にウララを大切にしています。ウララが頼るのも無理はありません。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' の前にやさしく立ち、名も知らぬ面倒な友だちは、心をなだめるように、小さな',
          urara.uma_sex_title,
          'と同じ笑顔を見せる。',
        ]);
      } else {
        await inner_urara.say_as_unknown_and_wait([
          '普段はウララに、それほど構っていないように見えますのに。なぜそんなに焦るのです。トレーナー',
          you.adult_sex_title,
          '（あなた）？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の道を執拗に塞ぎ、姓名すら不明の「友だち」は、理由もなく慌てる落第大人を嘲笑う。',
        ]);
      }
      era.println();
      await inner_urara.say_as_unknown_and_wait([
        'これこそ、あなたと',
        urara.sex,
        'が望んだ変化ではないのですか。だから今は、少しだけ待ってください。',
      ]);
      await era.printAndWait([
        urara.sex,
        'の言うとおりかもしれない……いや、',
        urara.sex,
        'は正しいのだろう。静かな空気のなか、',
        you.get_colored_name(),
        ' は無条件に信じる者のように足を止める。',
      ]);
      await era.printAndWait([
        '振り返ると、喜怒を消した「仮面」をつけた「',
        urara.sex,
        '」が、その場で「あなた」の注意を待っている。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'いまから、短いお話をします。時間は、ほとんど要りません……',
      );
      await era.printAndWait([
        '一歩前へ出て ',
        you.get_colored_name(),
        ' と並び、通路の外を見る。桜色の',
        urara.teen_sex_title,
        'は耳と尻尾を揺らし、晴れやらぬ空へ手を伸ばす。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'それは、これ以上ないほど小さな……',
        urara.uma_sex_title,
        'の物語です。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_end_c: (() => {
    const title = (inner_urara) => [
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      'の姿',
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      'の名前',
    ];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {number} rank 着順
     */
    const f = async (urara, inner_urara, you, callname, rank) => {
      await inner_urara.print_and_wait(
        'この物語は、どこから話せばいいのでしょう。',
      );
      await inner_urara.print_and_wait([
        'さほど遠くない昔、気ままな性格で、才能も平凡な小さな',
        inner_urara.uma_sex_title,
        'が、どこかの牧場で、ごく適当に生まれました。',
      ]);
      await inner_urara.print_and_wait([
        'そんな面倒で平凡な',
        inner_urara.child_sex_title,
        'に、最初に',
        inner_urara.sex,
        'を愛した人たちは、祝福のような可愛い名を授けました。',
      ]);
      await inner_urara.print_and_wait([
        inner_urara.sex,
        'の人生も、その可愛い名のように、偶然の幸運のあと、時代と三女神の寵愛を受けました。',
      ]);
      await inner_urara.print_and_wait([
        '走る日々では一度も勝てませんでしたが、',
        inner_urara.sex,
        'は何度も、みんなの憐れみと気遣いを受け取りました。',
      ]);
      await inner_urara.print_and_wait([
        'だから',
        inner_urara.sex,
        'は走ることを嫌い、',
        inner_urara.sex,
        'を拠り所にする人間を嫌い、命を軽々と賭ける同類たちを嫌い、どれも同じように嫌いました。',
      ]);
      await inner_urara.print_and_wait([
        'それでも、そんな臆病で奇妙な',
        inner_urara.sex,
        'は、自分で泥にした道のうえで、最後に残った二つの「小さな幸せ」を拾いました。',
      ]);
      await inner_urara.print_and_wait(
        'ひとつは、みんなの愛で築かれ、どこか欠けていても身を置ける静けさ。もうひとつは、三女神の小さな冗談です。',
      );
      await inner_urara.print_and_wait([
        '旅の途中、祝福された「',
        inner_urara.sex,
        '」は、同じく人に愛される「',
        urara.sex,
        '」と同じ列車に乗りました。',
      ]);
      await inner_urara.print_and_wait([
        '祝福された道を歩き、じつは何もできない「',
        inner_urara.sex,
        '」は、弱いのに希望になりたい「',
        urara.sex,
        '」と出会いました。',
      ]);
      await inner_urara.print_and_wait(
        '夢のような幸福な同行のなかで、違うはずの二人は、少しずつ互いの姿になっていきました。',
      );
      await inner_urara.print_and_wait([
        inner_urara.sex,
        'は、まぶしすぎる希望を同じように嫌いました。ですがその陽射しは、ひねくれた',
        inner_urara.sex,
        'の内側でいちばん柔らかい草地も照らしました。',
      ]);
      await inner_urara.print_and_wait([
        urara.sex,
        'がこのまま楽しく大きくなれたらいい。',
        urara.sex,
        'が、',
        urara.sex,
        'のほしい小さな幸せを得られたらいい……',
      ]);
      await inner_urara.print_and_wait([
        'ですが、これほど小さく、それでも走ることを選んだ桜色は、自分すら持たない「みんなの笑顔」を、どこで探すのでしょう。',
      ]);
      await inner_urara.print_and_wait([
        'それでも',
        inner_urara.sex,
        'は見つけました。小さな',
        urara.uma_sex_title,
        'が幸せを見つけ、一緒に物語を書き切れる「トレーナー」を。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '話が落ちると、耳を傾ける ',
        you.get_colored_name(),
        ' を見つめ、寄り添う',
        inner_urara.teen_sex_title,
        'の冷たい頬に、粘るような紅が満ちる。',
      ]);
      await era.printAndWait([
        'いつの間にか始まった肌の触れあいのなかで爪先立ち、',
        inner_urara.teen_sex_title,
        'は柔らかい湿った桜色の唇を ',
        you.get_colored_name(),
        ' の唇へ重ねる。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '『',
        urara.sex,
        '』の『あなた』への気持ちは、ご自身で感じてください……',
      ]);
      await era.printAndWait([
        '温かい柔らかさが、ねっとりした水音と一緒に沈む。',
        urara.get_colored_name(),
        ' に似た小さな',
        inner_urara.uma_sex_title,
        'は、',
        inner_urara.sex,
        'の表情で ',
        you.get_colored_name(),
        ' に求めてくる。',
      ]);
      await era.printAndWait([
        urara.sex,
        'と、こんなことをしてはいけない。時間がない。早く',
        urara.sex,
        'を離せ。',
        urara.sex,
        'は ',
        urara.get_colored_name(),
        ' ではない。',
        urara.sex,
        'と、こんなことは……',
      ]);
      await era.printAndWait(
        '意識ははっきり保とうとするのに、体はもう片方の腕のなかへ滑っていく。',
      );
      await era.printAndWait([
        '感情とは関係ない。迷う必要もない。',
        urara.sex,
        'からはいちばん大事な担当の気配がする。「',
        urara.get_colored_name(),
        '」は、ここにいる……',
      ]);
      await era.printAndWait([
        'そして、',
        urara.sex,
        'が始め、',
        urara.sex,
        'が主導する恍惚のキスのなかで、',
        urara.teen_sex_title,
        'は沈みかけるもう一方の唇を強く噛む。',
      ]);
      await era.printAndWait(
        '痛みは興奮した神経に抑えられるが、甘い生臭さは二人の口のなかへ広がる。',
      );
      await era.printAndWait([
        '目を細めて、血の混じった欲を吸い、溺れる',
        urara.sex,
        'は、まだ ',
        you.get_colored_name(),
        ' の体と心を侵し続ける。',
      ]);
      await era.printAndWait(
        '逃げられないキスに含まれるのは、重い欲か、混じった謝意か、歪んだ嫌悪か。あるいは、そのすべてか。',
      );
      await era.printAndWait([
        '確かなのは、「あなた」を選んだ「',
        urara.sex,
        '」が、',
        you.get_colored_name(),
        ' のすべてを欲しがっていることだ。肉体から魂まで……',
      ]);
      await era.printAndWait([
        '報復のような深いキスをゆっくり終え、まさに捕食者の',
        urara.teen_sex_title,
        'は名残惜しそうに、口元に残る銀糸を舐める。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'こういうことです。分かりましたか。分からなくても構いません。あなたと',
        urara.sex,
        'には、まだ長い時間があります……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の腕からそっと抜け、目の前の',
        urara.sex,
        'は目の熱を収め、外向きの冷たい距離感へ戻る。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'わたくしの話は終わりです。去る前に、ウララの今についても、少しだけ。',
      );
      if (rank === 1) {
        await inner_urara.say_as_unknown_and_wait(
          'みんなが願ったとおり、すぐに奇跡が見られます。ウララの『いちばん』の一着です。',
        );
        await inner_urara.say_as_unknown_and_wait(
          '因果はあるのでしょう。ですが、目を見開いた観客たちにとっては、これが奇跡です。',
        );
      } else if (rank <= 5) {
        await inner_urara.say_as_unknown_and_wait(
          '奇跡まで、あと一歩でした。ウララはよく頑張りました。あなたの勘も、ずっと正確でした。',
        );
        await inner_urara.say_as_unknown_and_wait(
          'ウララを可愛がるみんなにとっては、この結果でも十分、泣けるはずです。',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          '多くの人が思ったとおりです。ですがみんなは喜んでいます。ウララも満足しています。それで十分では？',
        );
        await inner_urara.say_as_unknown_and_wait(
          'ただ、わたくしから見れば、今回のあなたは少し急ぎすぎました。',
        );
      }
      await inner_urara.say_as_unknown_and_wait(
        '次にウララが傷つくなら、物語を続ける権利は、わたくしが握ります。',
      );
      await era.printAndWait([
        '短い間のあと、突然現れたときと同じように、目の前の「',
        inner_urara.get_colored_actual_name(),
        '」はまた勝手に背を向けて去る。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '温かな光を受けていればよかったのに、小さな二人は手を取って、陽を追おうとします。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'なら、わたくしにも見せてください。蝋の翼が溶ける前に、',
        urara.sex,
        'とあなたが、どこまで太陽へ近づけるかを——',
      ]);
      await era.printAndWait(
        '去り際の威嚇のあと、灰白の視界に色が戻る。流れ出した空気が、沸き立つ人声を通路へ流し込む。',
      );
      await era.printAndWait([
        '体がようやく動くと、',
        you.get_colored_name(),
        ' は光へ入ろうとする',
        urara.uma_sex_title,
        'を急いで止めようとする。だが手は',
        urara.sex,
        'の姿をすり抜ける。',
      ]);
      era.printButton(
        '「待て！ 謎かけはやめてくれ！ これはいったい何だ？ お前は……」',
        1,
      );
      await era.input();
      await inner_urara.say_as_unknown_and_wait([
        'よく考えてください、トレーナー',
        you.adult_sex_title,
        '（あなた）。わたくしの名前、分からないはずはありません。',
      ]);
      await era.printAndWait([
        '通路の出口に立ち、',
        urara.teen_sex_title,
        'は含みのある一言を残し、薄い霧のように陽の下へ消える。',
      ]);
      await era.printAndWait([
        'よろけて影の外へ出ると、つい出口を飛び出した ',
        you.get_colored_name(),
        ' は、もうひとりの ',
        inner_urara.get_colored_name(),
        ' が言ったとおりのレースの結末を見る。',
      ]);
      await era.printAndWait([
        'まだ歓声を上げる人たちと、舞う紙片の幕の外。雲の隙間から差す陽が、いまはまぶしすぎる。',
      ]);
      await you.say_and_wait('三女神よ……', true);
      era.drawLine();
      await era.printAndWait([
        'コースの外から奥の選手控え室へ。汗も拭かず、興奮した ',
        urara.get_colored_name(),
        ' はまだ ',
        you.get_colored_name(),
        ' に、レースの感想を話している。',
      ]);
      if (rank === 1) {
        await era.printAndWait([
          'いまなら誰でも、結果を熱く話すだろう。「きれいに一位を取った」のが「',
          urara.get_colored_actual_name(),
          '」なのだから。',
        ]);
        await urara.say_and_wait(
          'そうだよ！ でも勝った感じが、ちょっと嘘みたい。どこか変——',
        );
        await era.printAndWait([
          'その通りだ。',
          urara.get_colored_name(),
          ' のきょうの走りは見事どころか、普段と別人だった……そう言うと、',
          urara.sex,
          'が少し可哀想だが。',
        ]);

        era.printButton('「ウララ、もう一度やるか？ 来年の有馬記念。」', 1);
        await era.input();

        await urara.say_and_wait(
          'うん！ だってみんな、あんまり喜んでないみたいだし！',
        );
        await era.printAndWait([
          'それはたぶん、衝撃が大きすぎたからだ。苦笑しながらタオルで ',
          urara.get_colored_name(),
          ' の笑顔を拭き、',
          you.get_colored_name(),
          ' は仕方なくそう思う。',
        ]);
      } else if (rank <= 5) {
        await era.printAndWait([
          'いまなら誰でも、結果を熱く話すだろう。',
          urara.get_colored_name(),
          ' の走りが、あまりに予想外だったから。',
        ]);
        await urara.say_and_wait(
          'ん—— みんな黙ってるけど、あのときは本当にあと少しだったよ！',
        );
        await era.printAndWait([
          '入着でも十分すごい。あとで映像を見直せばいい。そう思い、',
          you.get_colored_name(),
          ' はタオルと水を ',
          urara.get_colored_name(),
          ' に渡す。',
        ]);

        era.printButton('「だからこそ、これで終わりにはできないだろう？」', 1);
        await era.input();

        await urara.say_and_wait('うん！ 分かったよ！ 次は自分で勝てる予感！');
        await era.printAndWait([
          '闘志の高い ',
          urara.get_colored_name(),
          ' と拳を合わせ、',
          you.get_colored_name(),
          ' は二人にしかない息の合いを、確かに感じる。',
        ]);
      } else {
        await era.printAndWait([
          '応援してくれるみんなの笑顔を見たのだろう。いまの ',
          urara.get_colored_name(),
          ' は、誕生日に贈り物をもらった子のようだ。',
        ]);
        await urara.say_and_wait(
          'でもね……えへへ～ 予想どおりの結果だよ？ いつもの感じが、また戻ってきた……',
        );
        await era.printAndWait([
          'そこまでではない。ただ有馬は ',
          urara.get_colored_name(),
          ' には、どの面でも負担が大きすぎた。そう思い、',
          you.get_colored_name(),
          ' は笑って小さな',
          urara.uma_sex_title,
          'の頬を揉む。',
        ]);

        era.printButton('「だから、シニア級の……」', 1);
        await era.input();

        await urara.say_and_wait(
          'うん！ 来年、もう一回やる！ ウララの成長、みんなに見せるから！',
        );
      }
      await era.printAndWait([
        '「あの',
        urara.sex,
        '」の言ったとおりだ。いま ',
        you.get_colored_name(),
        ' が止まっても、',
        urara.get_colored_name(),
        ' はこのレースを選ぶ……',
      ]);
      await era.printAndWait([
        '待て。そうだ、「あの',
        urara.sex,
        '」のこともある。だが……これをどう ',
        urara.get_colored_name(),
        ' に話せばいい。',
      ]);

      era.printButton(
        '「ああ、そうだウララ。さっき、なんか……会った気が……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' が、幻のような出来事をどう ',
        urara.get_colored_name(),
        ' に話すか考えていると、小さな',
        urara.uma_sex_title,
        'の短い悲鳴が聞こえる。',
      ]);
      await urara.say_and_wait([
        'あ、',
        callname,
        '！ 唇！ どこかで擦りむいたの？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の慌てた注意を聞き、',
        you.get_colored_name(),
        ' は遅れて来る痛みに、反射で指を唇へ当てる。',
      ]);
      await era.printAndWait(
        'これは……血？ 傷から付いた、固まりかけの赤を見つめ、半覚醒だったあの痛いキスが、ようやく頭ではっきりする。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' の心配と疑問の目のまえで、',
        you.get_colored_name(),
        ' は短い沈黙に落ちる——「',
        inner_urara.sex,
        '」は、確かに来ていた……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_48: (() => {
    const title = (inner_urara) => [
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      'の言葉、',
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      'の名前',
    ];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {number} fans ファン数
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_30,
      fans,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '自分から追う未来は、何色の夢なのでしょう。トレーナー',
        you.adult_sex_title,
        '（あなた）は、答えをご存じですか。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '……は。',
        urara.sex,
        'を守ると、言ったのに……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '気づかないうちに、',
        urara.get_colored_name(),
        ' がクラシック級に挑む日々も、もうすぐ終わる。出会ってからの二年、本当にいろいろあった……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' と手をつないで街を歩き、晴れた空を見る。冬の空気も、それほど寒くない気がする。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が胸のうちで思うあいだ、隣できょろきょろする ',
        urara.get_colored_name(),
        ' も、閑散とした通りへの新鮮な感想を口にする。',
      ]);
      await urara.say_and_wait(
        'きょうは静かだね。通りの人も少ない。想像とちょっと違うよ。',
      );

      era.printButton(
        '「有馬記念が終わったばかりだろう。寒さに出るより、家でレースの話をする人が多いのかも。」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'えへへ～ ',
        callname,
        '！ 今年が終わったら、ウララももっと大事なレースに出られるよね？',
      ]);

      era.printButton('「きょうのウララ、すごく嬉しそうだな。」', 1);
      await era.input();

      await urara.say_and_wait([
        '当たり前だよ！ みんなが応援してくれて、',
        callname,
        ' はずっと頑張ってる。来年、ウララもっと速く走るよ！',
      ]);
      await era.printAndWait([
        'そのとおりだ。',
        urara.get_colored_name(),
        ' と一緒にやってきたことは、どれも無駄ではない。これから止まらなければ——',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '待ってください。この嫌な予感は何でしょう。あなた、変なことを考えていませんね。',
      );
      await era.printAndWait([
        '背中に、どこからともない寒気が走る。同じように嫌な予感を察した ',
        you.get_colored_name(),
        ' は、急いで話を逸らす。',
      ]);

      era.printButton('「ところで、ウララはなぜ有馬記念に惹かれるんだ？」', 1);
      await era.input();

      await era.printAndWait([
        '担当と一緒に、街の大きな宣伝画面のレース映像を見る。',
        you.get_colored_name(),
        ' は、また画面に惹かれた ',
        urara.get_colored_name(),
        ' に、小さな声で尋ねる。',
      ]);
      await era.printAndWait([
        'そこに流れているのは、間違いなくきのうの「',
        arim_kin,
        '」だ。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' から、',
        you.get_colored_name(),
        ' と一緒に現地へ見に行きたいと頼まれたレースでもあり、',
        urara.get_colored_name(),
        ' がみんなの前で「出走宣言」を残したレースでもある。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の問いに、',
        urara.get_colored_name(),
        ' は視線を外さず、むしろ「的外れ」に口を開く。',
      ]);
      await urara.say_and_wait([
        'ん—— ',
        callname,
        ' は、最初にウララと会ったときから、すぐ圧力を溜めちゃうね！',
      ]);
      await urara.say_and_wait([
        'でも、',
        callname,
        ' にしかできないこともあるよ。ウララもみんなも、',
        callname,
        ' が必要だよ。それは変わらない！',
      ]);
      await urara.say_and_wait([
        'ウララはもう選んだよ。だから ',
        callname,
        ' も、元気出してね？',
      ]);

      era.printButton('「決めたのか。ウララは有馬に出る、と。」', 1);
      await era.input();

      await urara.say_and_wait(['決めたよ。ウララ、', arim_kin, ' に出る！']);
      await urara.say_and_wait(
        'トレセンのみんなが、投票制が使えるって教えてくれた。頑張れば、ウララにもできる！',
      );
      await urara.say_and_wait([
        'それに知りたいの。商店街のみんな、ウララを応援してくれる人、それから ',
        callname,
        '……',
      ]);
      await urara.say_and_wait(
        'みんなの希望に応えるために、ウララがどこまで飛べるか——',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' の目を逸らさない横顔に、',
        you.get_colored_name(),
        ' は',
        urara.sex,
        'の幼い顔に、今まで見たことのない鋭さを見る。',
      ]);
      await era.printAndWait([
        'ゲートを切る前の場に立つ、「歴戦の競走',
        urara.uma_sex_title,
        '」に似合う顔だ。',
      ]);
      await era.printAndWait([
        'いま多くの人が、',
        urara.get_colored_name(),
        ' の気紛れを疑うかもしれない。だがこの瞬間の ',
        you.get_colored_name(),
        ' は、',
        urara.sex,
        'が一時の思いつきではないと確かめている。',
      ]);
      await era.printAndWait([
        'もう多くは要らない。',
        you.get_colored_name(),
        ' は再び、画面のなかで疾走して輝く人たちへ目を向ける。',
      ]);

      era.printButton(
        '「この道は辛い。楽しいとも限らない。覚悟はできているか？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'うん！ いまのウララ、世界でいちばん大胆な人かも！',
      );
      await era.printAndWait([
        '目は合わなくても、担当の決意は余さず ',
        you.get_colored_name(),
        ' の胸へ届く。',
      ]);
      await era.printAndWait([
        'いまの ',
        urara.get_colored_name(),
        ' と、輝く人たちとの距離は、薄い画面一枚なのかもしれない。',
      ]);
      await era.printAndWait(
        'トレーナーとしては、目標レースを決められるのは嬉しい。届きにくい目標でも。',
      );
      await era.printAndWait([
        'それに ',
        urara.get_colored_name(),
        ' にも、自分から挑みたい目標ができた。',
        urara.sex,
        'の決断なら、本気で',
        urara.sex,
        'を支えなければならない。',
      ]);
      await era.printAndWait([
        '本気の ',
        urara.get_colored_name(),
        ' が奇跡を起こすと信じる？ それもいい。最初に会ったときから、',
        urara.sex,
        'はもう……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'そうです。何が起きても、あなたはウララを信じ続けるのでしょう。',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        'が、あなたの思うほど強くなくても、同じです。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' に似て、似ていない声がした瞬間、周りは一時停止のように固まる。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は驚くつもりだった。だが体も心も、もう慣れているように平常のままだ。',
      ]);
      await era.printAndWait([
        '朦朧のなかで何度も見た夢のように、',
        you.get_colored_name(),
        ' はゆっくり首を回し、隣の「',
        inner_urara.get_colored_actual_name(),
        '」と目が合う。',
      ]);
      await era.printAndWait(
        'まばらな通行人と空気は動きを止めた。だが画面の、少し歪んだ疾走の影は、結末の分かっている競争を続けている。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '運命のようです、ね。たとえばあなたとわたくしも、初めて会ったわけではありません。あなたが覚えていないだけです。',
      );
      await era.printAndWait([
        '同じ顔に、',
        urara.get_colored_name(),
        ' に似て、より大人で距離のある微笑みが浮かぶ。',
        urara.sex,
        'は同じ位置のまま、',
        you.get_colored_name(),
        ' と話し続ける。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'あなたと',
        urara.sex,
        'がそう望むなら、わたくしは記録を続けます。その前に、少しお話ししても？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の答えを待たず、あるいは ',
        urara.get_colored_name(),
        ' と同じく黙許を察して、',
        urara.sex,
        'は語り手のように「物語」を始める。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'あなたは、物語はお好きですか。それは、これ以上ないほど小さな……',
        urara.uma_sex_title,
        'の物語です——',
      ]);
      era.drawLine();
      await inner_urara.print_and_wait([
        'さほど遠くない昔、気ままな性格で、才能も平凡な小さな',
        inner_urara.uma_sex_title,
        'が、どこかの牧場で、ごく適当に生まれました。',
      ]);
      await inner_urara.print_and_wait([
        'そんな面倒で平凡な',
        inner_urara.child_sex_title,
        'に、最初に',
        inner_urara.sex,
        'を愛した人たちは、祝福のような可愛い名を授けました。',
      ]);
      await inner_urara.print_and_wait([
        inner_urara.sex,
        'の人生も、その可愛い名のように、偶然の幸運のあと、時代と三女神の寵愛を受けました。',
      ]);
      await inner_urara.print_and_wait([
        '走る日々では一度も勝てませんでしたが、',
        inner_urara.sex,
        'は何度も、みんなの憐れみと気遣いを受け取りました。',
      ]);
      await inner_urara.print_and_wait([
        'だから',
        inner_urara.sex,
        'は走ることを嫌い、',
        inner_urara.sex,
        'を拠り所にする人間を嫌い、命を軽々と賭ける同類たちを嫌い、どれも同じように嫌いました。',
      ]);
      await inner_urara.print_and_wait([
        'それでも、そんな臆病で奇妙な',
        inner_urara.sex,
        'は、自分で泥にした道のうえで、最後に残った二つの「小さな幸せ」を拾いました。',
      ]);
      await inner_urara.print_and_wait(
        'ひとつは、みんなの愛で築かれ、どこか欠けていても身を置ける静けさ。もうひとつは、三女神の小さな冗談です。',
      );
      await inner_urara.print_and_wait([
        '旅の途中、祝福された「',
        inner_urara.sex,
        '」は、同じく人に愛される「',
        urara.sex,
        '」と同じ列車に乗りました。',
      ]);
      await inner_urara.print_and_wait([
        '祝福された道を歩き、じつは何もできない「',
        inner_urara.sex,
        '」は、弱いのに希望になりたい「',
        urara.sex,
        '」と出会いました。',
      ]);
      await inner_urara.print_and_wait(
        '夢のような幸福な同行のなかで、違うはずの二人は、少しずつ互いの姿になっていきました。',
      );
      await inner_urara.print_and_wait([
        inner_urara.sex,
        'は、まぶしすぎる希望を同じように嫌いました。ですがその陽射しは、ひねくれた',
        inner_urara.sex,
        'の内側でいちばん柔らかい草地も照らしました。',
      ]);
      await inner_urara.print_and_wait([
        urara.sex,
        'がこのまま楽しく大きくなれたらいい。',
        urara.sex,
        'が、',
        urara.sex,
        'のほしい小さな幸せを得られたらいい……',
      ]);
      await inner_urara.print_and_wait([
        'ですが、これほど小さく、それでも走ることを選んだ桜色は、自分すら持たない「みんなの笑顔」を、どこで探すのでしょう。',
      ]);
      await inner_urara.print_and_wait([
        'それでも',
        inner_urara.sex,
        'は見つけました。小さな',
        urara.uma_sex_title,
        'が幸せを見つけ、一緒に物語を書き切れる「トレーナー」を。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '話が落ちると、耳を傾ける ',
        you.get_colored_name(),
        ' を見つめ、寄り添う',
        inner_urara.teen_sex_title,
        'の冷たい頬に、粘るような紅が満ちる。',
      ]);
      await era.printAndWait([
        'いつの間にか始まった肌の触れあいのなかで爪先立ち、',
        inner_urara.teen_sex_title,
        'は柔らかい湿った桜色の唇を ',
        you.get_colored_name(),
        ' の唇へ重ねる。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '『',
        urara.sex,
        '』の『あなた』への気持ちは、ご自身で感じてください……',
      ]);
      await era.printAndWait([
        '温かい柔らかさが、ねっとりした水音と一緒に沈む。',
        urara.get_colored_name(),
        ' に似た小さな',
        inner_urara.uma_sex_title,
        'は、',
        inner_urara.sex,
        'の表情で ',
        you.get_colored_name(),
        ' に求めてくる。',
      ]);
      await era.printAndWait([
        urara.sex,
        'と、こんなことをしてはいけない。時間がない。早く',
        urara.sex,
        'を離せ。',
        urara.sex,
        'は ',
        urara.get_colored_name(),
        ' ではない。',
        urara.sex,
        'と、こんなことは……',
      ]);
      await era.printAndWait(
        '意識ははっきり保とうとするのに、体はもう片方の腕のなかへ滑っていく。',
      );
      await era.printAndWait([
        '感情とは関係ない。迷う必要もない。',
        urara.sex,
        'からはいちばん大事な担当の気配がする。「',
        urara.get_colored_name(),
        '」は、ここにいる……',
      ]);
      await era.printAndWait([
        'そして、',
        urara.sex,
        'が始め、',
        urara.sex,
        'が主導する恍惚のキスのなかで、',
        urara.teen_sex_title,
        'は沈みかけるもう一方の唇を強く噛む。',
      ]);
      await era.printAndWait(
        '痛みは興奮した神経に抑えられるが、甘い生臭さは二人の口のなかへ広がる。',
      );
      await era.printAndWait([
        '目を細めて、血の混じった欲を吸い、溺れる',
        urara.sex,
        'は、まだ ',
        you.get_colored_name(),
        ' の体と心を侵し続ける。',
      ]);
      await era.printAndWait(
        '逃げられないキスに含まれるのは、重い欲か、混じった謝意か、歪んだ嫌悪か。あるいは、そのすべてか。',
      );
      await era.printAndWait([
        '確かなのは、「あなた」を選んだ「',
        urara.sex,
        '」が、',
        you.get_colored_name(),
        ' のすべてを欲しがっていることだ。肉体から魂まで……',
      ]);
      await era.printAndWait([
        '報復のような深いキスをゆっくり終え、まさに捕食者の',
        urara.teen_sex_title,
        'は名残惜しそうに、口元に残る銀糸を舐める。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'こういうことです。分かりましたか。分からなくても構いません。あなたと',
        urara.sex,
        'には、まだ長い時間があります……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の腕からそっと抜け、目の前の',
        urara.sex,
        'は目の熱を収め、外向きの冷たい距離感へ戻る。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'では最後に、ウララの今についても、もう少しだけ。',
      );
      if (fans < 25000) {
        await inner_urara.say_as_unknown_and_wait([
          'いまのウララが ',
          arim_kin,
          ' に出たいなら、先に重賞の支持成績を積まなければなりません。',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          'あなたには、ウララと勝ちへ向かう覚悟があります。ではウララに、場へ出る前に圧力に耐える覚悟はありますか。',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          'あのとき、あなたはわたくしの願いを聞いてくださいました。頼りになる方です。だからウララも、ずっと頼るのでしょう。',
        );
        await inner_urara.say_as_unknown_and_wait([
          'だから',
          urara.sex,
          'が ',
          arim_kin,
          ' に出たい件を、最初からあなたが止めるなど、期待すべきではありませんでした。',
        ]);
      }

      await inner_urara.say_as_unknown_and_wait(
        '次にウララが傷つくなら、物語を続ける権利は、わたくしが握ります。',
      );
      await era.printAndWait([
        '短い間のあと、突然現れたときと同じように、目の前の「',
        inner_urara.get_colored_actual_name(),
        '」はまた勝手に背を向けて去る。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '温かな光を受けていればよかったのに、小さな二人は手を取って、陽を追おうとします。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'なら、わたくしにも見せてください。蝋の翼が溶ける前に、',
        urara.sex,
        'とあなたが、どこまで太陽へ近づけるかを——',
      ]);
      await era.printAndWait(
        '威嚇が落ちると、灰白の視界に色が戻る。再び流れ出した冷たい風が、急ぐ人ごみへ流れ込む。',
      );
      era.printButton(
        '「待て！ 謎かけはやめてくれ！ これはいったい何だ？ お前は……」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '体がようやく動くと、',
        you.get_colored_name(),
        ' は振り返って続けて問おうとする。だが見えるのは、薄い霧のような笑顔だけだ。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'よく考えてください、トレーナー',
        you.adult_sex_title,
        '（あなた）。わたくしの名前、分からないはずはありません。',
      ]);
      await era.printAndWait([
        '含みのある最後の一言のあと、',
        urara.get_colored_name(),
        ' の顔に付いた薄い霧は、最初からなかったように空気へ溶ける。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' のそばに残るのは、相変わらず自分のトレーナーと未来を楽しそうに話す「',
        urara.get_colored_actual_name(),
        '」だ。',
      ]);
      await era.printAndWait('白昼の幽霊か。三女神よ——');
      await era.printAndWait([
        urara.sex,
        'の言うとおり、いまの ',
        urara.get_colored_name(),
        ' には未来への準備が足りないのかもしれない。だが、それこそ自分がいる理由ではないか。',
      ]);
      await era.printAndWait([
        '風で固くなった指を握り、',
        you.get_colored_name(),
        ' は再び隣の ',
        urara.get_colored_name(),
        ' の笑顔へ意識を戻す。',
      ]);
      await urara.say_and_wait(
        '……それにね、最初にこんなレースを見たとき、胸がすごく跳ねたの！',
      );
      await urara.say_and_wait([
        'えへへ～ でもこの話、',
        call_30,
        ' に『初恋みたいで誤解される』って、外で言っちゃだめって止められた。',
      ]);
      await urara.say_and_wait([
        'でもそれでも、',
        callname,
        ' には言わないと。だってウララ、初めてトレーニングを見たときも、胸がすごく跳ねたし……',
      ]);
      await era.printAndWait(
        '……少し変な話を聞いた気がする。だが今の要点ではない。',
      );
      await era.printAndWait([
        '「あの',
        urara.sex,
        '」の言ったとおりだ。いま ',
        you.get_colored_name(),
        ' が止まっても、',
        urara.get_colored_name(),
        ' はこのレースを選ぶ……',
      ]);
      await era.printAndWait([
        '待て。そうだ、「あの',
        urara.sex,
        '」のこともある。だが、これをどう ',
        urara.get_colored_name(),
        ' に話せばいい。',
      ]);

      era.printButton(
        '「ああ、そうだウララ。さっき、なんか……会った気が……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' が、幻のような出来事をどう ',
        urara.get_colored_name(),
        ' に話すか考えていると、小さな',
        urara.uma_sex_title,
        'の短い悲鳴が聞こえる。',
      ]);
      await urara.say_and_wait([
        'あ、',
        callname,
        '！ 唇！ どこかで擦りむいたの？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の慌てた注意を聞き、',
        you.get_colored_name(),
        ' は遅れて来る痛みに、反射で指を唇へ当てる。',
      ]);
      await era.printAndWait(
        'これは……血？ 傷から付いた、固まりかけの赤を見つめ、半覚醒だったあの痛いキスが、ようやく頭ではっきりする。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' の心配と疑問の目のまえで、',
        you.get_colored_name(),
        ' は短い沈黙に落ちる——「',
        inner_urara.sex,
        '」は、確かに来ていた……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  async we_47_48_or_else(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      '最後に、覚えていてください。トレーナー',
      you.adult_sex_title,
      '（あなた）',
    ]);
  },
  oc_95_1: (() => {
    const title = '初詣';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait(
        'ええ。特に言うこともありませんが、ウララと無事にシニア級へ進めましたこと、おめでとうございます。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '……どうなさいました？ 感じが変わった、などと仰るのはご錯覚ですよ。わたくしは何も変わっておりません。',
      );
      era.drawLine();
      await era.printAndWait([
        '正月の賑わう人波の中、',
        you.get_colored_name(),
        ' は神社の長い石段の下で、一緒に参拝する約束の相手を待っていた。',
      ]);
      await era.printAndWait([
        '今日の ',
        urara.get_colored_name(),
        ' は珍しく遅れている。約束の時刻を過ぎたのは数分だけだが、普段なら遊び心の強い',
        urara.sex,
        'は外出先でももっと早く着くはずだった。',
      ]);
      await era.printAndWait([
        '新年の人混みに飲み込まれたのだろうか。',
        urara.uma_sex_title,
        'が押し潰される心配はないが、',
        urara.get_colored_name(),
        ' が道に迷っていたら……',
      ]);
      await era.printAndWait([
        '担当を探しに引き返そうとしたそのとき、すぐ近くから',
        urara.teen_sex_title,
        'のよく知った、澄んだ呼び声が聞こえた。',
      ]);
      await urara.say_and_wait([callname, '！こっちだよ！ウララこっちだよ！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' が振り返る隙に、紅白の桜色の春風が、気温が上がるより先に ',
        you.get_colored_name(),
        ' の胸へ飛び込んできた。',
      ]);
      await era.printAndWait([
        '見下ろすと、紅とピンクの晴れ着を着た ',
        urara.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' に向かって嬉しそうに笑っている。桜の花を咲かせた瞳がきらきらと光っていた。',
      ]);

      urara.say([
        'えへへ～みんな、ちゃんと正装したほうがいいって言うから、今日は準備にちょっと時間かかっちゃった！',
        callname,
        '、どうかな？',
      ]);
      era.printButton('「うん、ウララは今日とても綺麗だよ！」（好感+20）', 1);
      era.printButton('「うん、またウララに見とれてしまった！」（恋慕+5）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await urara.say_and_wait([
          'えへへ～ほんと？みんなに手伝ってもらって、ずっと着付けしてたんだよ！',
          callname,
          ' も喜んでくれてよかった！',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' は嬉しそうにその場でくるりと回り、広い袖と長い裾が小鳥の翼のように揺れた。',
        ]);
        await urara.say_and_wait([
          'でも、かわいいじゃなくて綺麗なんだ？ もしかして ',
          callname,
          ' は、ウララがもう大人みたいって思った？',
        ]);

        era.printButton(
          '「違うよ。大人になったからじゃなくて、ウララはいつだって『大人たち』よりずっと綺麗だよ」',
          1,
        );
        await era.input();
      } else {
        await urara.say_and_wait(
          'でしょ！みんなに手伝ってもらって、ずっと着付けしてたんだよ……え？えええ——',
        );
        await era.printAndWait([
          '思いがけない返事に、',
          urara.get_colored_name(),
          ' は一瞬ぽかんとしてから、晴れ着の広い袖で赤くなった頬を急いで隠した。',
        ]);
        await urara.say_and_wait([
          callname.substring(0, 1),
          '、',
          callname,
          '、ウララがよくわからないこと言わないで……嬉しいけど！ウララ、もう子どもじゃないから……',
        ]);

        era.printButton(
          '「ごめん、これから気をつける。でも、ウララに冗談を言ったつもりはないよ？」',
          1,
        );
        await era.input();
      }
      await era.printAndWait([
        'それから、恥ずかしがる ',
        urara.get_colored_name(),
        ' の小さな手を引き、',
        you.get_colored_name(),
        ' は担当と一緒に、神社へ願をかける長い石段を登りはじめた。',
      ]);
      await era.printAndWait([
        'だが登るにつれ、',
        you.get_colored_name(),
        ' も ',
        urara.get_colored_name(),
        ' も周囲の変化に気づく——そもそも、神社の階段はこんなに長かっただろうか。',
      ]);
      await era.printAndWait(
        '神社の石段が高いのは知っている。だが普段の印象では、端が見えないほどではなかったはずだ。',
      );
      await era.printAndWait(
        'いつの間にか、まわりにいた参拝客は消えていき、周囲の木々はどんどん密になっていった。',
      );
      await era.printAndWait(
        '早い新緑をつけた木さえある。まだ寒風の残る季節には似つかわしくない景色だった。',
      );
      await era.printAndWait(
        '日常の祈りの場でも不思議なことは時々起きるが、今日の変化はあまりにはっきりしていた。',
      );
      await era.printAndWait(
        '悪意からではないのは確かで、登るときの疲れさえ消えてしまっている。',
      );
      await era.printAndWait([
        'それでも、この坂は長すぎる。先の、退屈なほど真っ直ぐに高い道を見上げ、',
        you.get_colored_name(),
        ' は深くため息をついた。',
      ]);
      await era.printAndWait(
        '今から引き返すか。戻っても延々と階段が続く気がする。どうしよう……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' が次を悩んでいると、隣の ',
        urara.get_colored_name(),
        ' が思いがけない話を切り出した。',
      ]);
      await urara.say_and_wait([
        callname,
        '、ウララ、実はわかってるよ？ 最初のウララのままじゃ、ひとりじゃトレセンに来られなかったって。',
      ]);
      await era.printAndWait([
        'いきなり後頭部を殴られたような気がして、',
        you.get_colored_name(),
        ' は危うく石段を踏み外しそうになった。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' が口を開いたとき、',
        you.get_colored_name(),
        ' は小さな',
        urara.uma_sex_title,
        'の話しかけ方を一万通り想像したが、真面目で重い話題だけは予想していなかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は緊張して隣の ',
        urara.get_colored_name(),
        ' を見る。だがそのとき',
        urara.sex,
        'は、視線の先よりさらに高いところを静かに見つめていた。',
      ]);
      await urara.say_and_wait(
        'お母さんが前に教えてくれたんだ。神社の階段があんなに高いのは、神様に近づくためなんだって！',
      );
      await urara.say_and_wait(
        '神様、やっぱりすごく高いところに住んでるね。でもお母さん、人を訪ねるときは気持ちが伝わる手土産を持っていったほうがいいって言ってたよ。',
      );
      await era.printAndWait([
        '上を向いていた視線を隣へ戻し、大人の手を素直に握ったまま、',
        urara.get_colored_name(),
        ' は静かでかわいい笑顔で ',
        you.get_colored_name(),
        ' を誘った。',
      ]);
      await urara.say_and_wait([
        'ウララ、ちょっと遅くなっちゃったかもだけど、',
        callname,
        '、今からウララの昔の話、聞いてくれる？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の考え込むような目と向き合い、何かを読み取った ',
        you.get_colored_name(),
        ' は、そっとうなずいた。',
      ]);
      era.drawLine();
      await urara.print_and_wait([
        '見えないお友だち、',
        callname,
        ' は知ってる？ そう、みんな、ひとりぼっちの子どもだけが出会うお友だちだって言うんだ。',
      ]);
      await urara.print_and_wait(
        'ふしぎだよね。みんな、見えないお友だちは空想だって言うけど、ウララは、たぶんそうじゃないと思うんだ。',
      );
      await urara.print_and_wait(
        'うん！ウララ、お友だちはずっとたくさんいたけど、見えないお友だちもひとりいるよ？ ウララとそっくりな！',
      );
      await urara.print_and_wait([
        'でも、みんなが言うみたいにいつも仲よし、ってわけじゃなくて、',
        urara.sex,
        'はいつも悲しい顔で、遠くからウララを見てるだけだったんだ。',
      ]);
      await urara.print_and_wait([
        'このまま',
        urara.sex,
        'を放っておけないって思って、ウララから会いに行ったんだ。それから',
        urara.sex,
        'を、いっぱいの場所に連れていったよ。',
      ]);
      await urara.print_and_wait([
        'それから、ずっと一緒のお友だちになった。',
        urara.sex,
        'はまだしょっちゅう沈んでたけど、だんだん笑顔も増えていったんだ。',
      ]);
      await urara.print_and_wait([
        'ある日、お友だちが突然ウララに聞いたんだ。ウララの願い、なに？ 言ってくれれば、',
        urara.sex,
        'が力いっぱい叶えるって。',
      ]);
      await urara.print_and_wait([
        'だからウララはお友だちに言ったんだ。いつも悲しい顔の',
        urara.sex,
        'が、いつかもう悲しくない幸せをもらえたらいいなって！',
      ]);
      await urara.print_and_wait(
        'でもウララの答えを聞いたお友だちは、今までよりさらに沈んだ顔をした……',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ごめんなさい。その願いだけは、わたくしひとりでは叶えられません。わたくしの幸せは、ウララが幸せであること、なのですから……',
      );
      await urara.say_and_wait(
        'うん……じゃあ、ウララをもっと幸せにしてみよっか！そしたら、あなたも嬉しくなれるでしょ？',
      );
      await inner_urara.say_as_unknown_and_wait(
        'では、ウララの望む幸せとは？ 人に愛されること？ 安心した暮らし？ それとも……',
      );
      await urara.say_and_wait(
        'みんな、ウララの走りを見ると笑ってくれるから、みんなに希望が見えて、それから嬉しい顔になってほしいんだよ！',
      );
      await urara.print_and_wait([
        'ウララの願いを聞いたお友だち、すごくびっくりしてたよ。でも',
        urara.sex,
        'は、それでもウララの願いを引き受けてくれた。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'わかりました。時間はまだたくさんあります。協力者を見つけ、『わたしたちの物語』をウララが書けるようにいたします。',
      );
      await urara.print_and_wait(
        'そのあとが、ウララがもう少し大きくなったとき、お母さんが急にトレセンへ通わせてくれた話だよ。',
      );
      await urara.print_and_wait([
        'その先はね……えへへ～ウララ、トレーニング場で倒れてた ',
        callname,
        ' に会ったんだよ！',
      ]);
      await urara.print_and_wait(
        'でもねでもね！トレセンに来てから、いつも負けちゃうけど、ウララ、たくさんのことが一気にわかったんだ！',
      );
      await urara.print_and_wait(
        'お母さんがウララをトレセンに連れてきたのはちょうど春だったから、ウララはわかったんだ。自分は運がいいんだって。',
      );
      await urara.print_and_wait(
        'ウララは運がいいから、春についてこられた。みんな春はいいものだと思ってるから、春はいつもみんなを笑顔にする。',
      );
      await urara.print_and_wait(
        'だからウララが悩んでた、見えないお友だちは空想なのかとか、ウララと同じ世界にいるのかとか、実は大事じゃないんだ！',
      );
      await urara.print_and_wait(
        'みんなに信じられる希望をあげられれば、全部意味があるはずだし、みんなも笑えるから。',
      );
      await urara.print_and_wait([
        'だから ',
        callname,
        ' が見てる通り、ウララは最後まで、走ることでお友だちとの約束を果たすことにしたんだよ！',
      ]);
      era.drawLine();
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'の笑顔で話が閉じ、いつの間にか ',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' は、いつもの何倍も長い石段の頂上に着いていた。',
      ]);
      await era.printAndWait([
        'なるほど、それが ',
        urara.get_colored_name(),
        ' と「',
        urara.sex,
        '」の関係か。',
        urara.get_colored_name(),
        ' は細かいところを省いているだろうが、だいたいわかった。',
      ]);
      await era.printAndWait([
        'ただ、',
        urara.get_colored_name(),
        ' の願いを叶えると引き受けたのに、',
        urara.sex,
        'は自分の幸せの定義を当てはめている。なんて支配欲の強い保護者だ。',
      ]);
      await era.printAndWait([
        '朱色の鳥居をくぐり、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' は、繁忙期なのに誰もいないのに、不気味ではない神社の境内へ入った。',
      ]);

      era.printButton(
        '「もう言うとくどいかもしれないけど……ウララは、中央トレセンに来られたのはあの『見えないお友だち』のおかげだと思ってる？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'あれは、お母さんが何かしたんじゃないかな。近所のみんなが、お母さんは若いころすごい中央のウマ娘だったって言ってたよ。',
      );
      await urara.say_and_wait(
        'それにウララをトレセンに連れてくる直前、お母さんも中央から戻ってきたし、あのときウララ、入学テストも受けてなかったし……',
      );
      await era.printAndWait(
        'ほう、迷いなく答えるな。しかもその答えは、思いのほか少し怖い……',
      );
      await urara.say_and_wait(
        'でも全部正解でもないよ。だってお母さん、ウララの見えないお友だちがいるって思ってくれた、たったひとりの人でもあるから。',
      );
      await urara.say_and_wait([
        'だから、お母さんもウララのお友だちが見えてて、',
        urara.sex,
        'と話したのかも！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' と一緒に賽銭箱へ硬貨を投げ、紐の鈴を鳴らして、',
        urara.get_colored_name(),
        ' は微笑んだまま小さな声で続けた。',
      ]);
      await urara.say_and_wait([
        'でも ',
        callname,
        '、ときどき……ほんとにくどいね！',
      ]);

      era.printButton('「ウララ？！」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' は一歩下がった拍子に危うく滑りそうになったが、神様と担当の前で大恥をかかずに済んだ。',
      ]);
      await era.printAndWait([
        'くそっ、今は ',
        urara.get_colored_name(),
        ' までそう思うのか。それに',
        you.phy_sex_title,
        'が少し細かいことに何の問題がある！',
      ]);
      await urara.say_and_wait([
        'えへへ～次は願いを書く番だね！',
        callname,
        '、大丈夫？',
      ]);

      era.printButton(
        '「だ、大丈夫だよ。ウララのトレーナーはもう大人だから……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'なんとか大人の体裁を保ち、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' が渡してくれたもう一本の筆を受け取った。',
      ]);
      urara.say(['じゃあ、', callname, ' はどんな願いを書くの？']);
      era.printButton(
        '「とりあえず、まわりの人の健康を祈ろうか？」（スタミナ+30）',
        1,
      );
      era.printButton(
        '「仕事がうまくいく……だいたいそんな感じ？」（全能力+5）',
        2,
      );
      era.printButton(
        '「新しい一年、困難を楽に乗り越えられますように？」（スキルPt+35）',
        3,
      );
      ret.push(await era.input());
      await era.printAndWait([
        '最初から決めていた内容を素早く書き終え、筆を置いて、',
        you.get_colored_name(),
        ' はまだ真剣に願いを書いている ',
        urara.get_colored_name(),
        ' のほうを向いた。',
      ]);

      era.printButton('「ウララは、どんな願いを書いてるの？」', 1);
      await era.input();

      urara.say(
        'うん！ウララ、書きたいことはいっぱいあるけど、ひとつだけならやっぱり——',
      );
      era.printButton('もっと遠い距離（中距離&長距離適性上昇）', 1);
      era.printButton('芝に挑戦（芝適性上昇）', 2);
      ret.push(await era.input());
      if (ret[2] === 1) {
        await urara.say_and_wait(
          '有馬は距離が長いから、『もっと遠くまで走れるようになりたい』！',
        );
      } else {
        await urara.say_and_wait(
          '有馬記念は芝だから、『芝でもっと速く走りたい』！',
        );
      }
      await era.printAndWait([
        urara.get_colored_name(),
        ' が一画ずつ、思いがけない願いを書いていくのを見守り、',
        you.get_colored_name(),
        ' は嬉しくもあり、少し複雑な気持ちにもなった。',
      ]);

      era.printButton(
        '「……意外と本気だね。目標が決まったから、やる気が出た？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'そうだよ！でも ',
        callname,
        '、今日帰ってすぐ、ウララをトレーニングに引きずったりはしないよね？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の、欲望のはっきりしたほのめかしを聞き、ふたりの願いを掛け終えた ',
        you.get_colored_name(),
        ' は振り返って、大人が悪戯するときの狡い笑顔を浮かべた。',
      ]);

      era.printButton(
        '「本来はしないよ。でもウララがそんなに張り切ってるなら……今の階段、かなり長くなってるよ？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '嘘だ。',
        urara.get_colored_name(),
        ' がそこまで張り切らなくても、地形を使ったトレーニングは勢いで始まってしまうのだ。',
      ]);
      await urara.say_and_wait([
        'えっ——今から始めないでよ ',
        callname,
        '！神様の親切をそんなふうに使わないで！',
      ]);
      await urara.say_and_wait(
        '下の屋台まで遊びに行けなくてもいいから、せめて神社の中をもうちょっと歩かせてよ——',
      );
      await era.printAndWait([
        '甘えてもだめだ！',
        urara.get_colored_name(),
        ' はいい子で、いい子の甘えは通らないのだ！',
      ]);

      era.printButton(
        '「よし！じゃあウララが屋台で遊びたい願いを叶えるために、走るよ！足元に気をつけてね？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'そんなのひどい！神様、怒るよ！帰って一緒にお餅とクッキー食べるつもりだったのに——',
      );
      await era.printAndWait([
        '涙ぐみながら言いつつも、',
        urara.get_colored_name(),
        ' は目尻を拭いて、少し拗ねたまま、先に石段を駆け下りた ',
        you.get_colored_name(),
        ' の後を追った。',
      ]);
      await era.printAndWait([
        'それは違うだろう。',
        urara.get_colored_name(),
        ' の未来の一着のためなら、神様だって黙認してくれるはずだ。',
      ]);
      await era.printAndWait([
        'それに、進み続ければ願いはきっと叶う。希望に満ちた',
        urara.sex,
        'の先は、明るいと言っていいだろう。',
      ]);
      await era.printAndWait([
        '後ろで、自分の横を追い抜こうとする紅とピンクの桜色を見て、',
        you.get_colored_name(),
        ' の笑顔はだんだん嬉しさに変わっていった。',
      ]);
      await era.printAndWait(
        'どの面でも一歩近づける。新年の参拝、悪くないではないか。',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'ウララ、おかしなことをたくさんお話ししましたね。ですが前回、わたくしも同じくらいやりすぎましたから、今回は許して差し上げます！',
      );
      await inner_urara.say_as_unknown_and_wait(
        'いかがです、たまに『ウララ』の話し方を真似してみては？ えっ、似ていません？ む……あなたという人は……',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ええ？ 態度が変わりました、ですって？ そんなことはありません。ご錯覚だと、何度も申し上げました——',
      );
      await inner_urara.say_as_unknown_and_wait(
        'こほん、失礼しました。せっかくの新年ですから、わたくしも少し浮かれてしまったようです。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ただ、『支配欲が強い』のは、あなたも同じではありませんか？ ウララの言い方なら、楽しいならそれでいい、ですよ？',
      );
      await inner_urara.say_as_unknown_and_wait(
        'それから、神社の件。あれもわたくしではございませんよ？',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_negi_sta: (() => {
    const title = '根岸ステークスへ！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} joined_g3 重賞出走済みか
     * @param {number|false} arim_kin_rank_c クラシック級有馬記念の着順。false は有馬記念未出走
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} negi_sta 根岸ステークス（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      joined_g3,
      arim_kin_rank_c,
      arim_kin,
      negi_sta,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '気合が入らないお気持ちはわかりますが……',
      );
      await inner_urara.say_as_unknown_and_wait(
        'まあ、いい加減にさえならなければ。',
      );
      era.drawLine();

      era.printButton('「ウララ、準備はできた？今日のレースだよ」', 1);
      await era.input();

      await urara.say_and_wait([
        'はあい！でも ',
        callname,
        '、今日は重賞なの？',
      ]);

      era.printButton(
        '「今日は重賞だよ。ほかの人の空気に飲まれないでね？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'うん！なんか今回 ',
        callname,
        ' が選んだレース、前と似てるところもあるし、違うところもある気がする……',
      ]);
      await urara.say_and_wait(
        'でもく、うき……？この言葉、今回はウララ、間違えなかったよ！えへへ～',
      );

      era.printButton(
        '「……意外なところで成長してるね。いつものペースで、前と同じように元気よく行こう」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '選手通路で落ち着いて立ち、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' はレース前に、切れ切れの雑談をしていた。',
      ]);
      await era.printAndWait(
        '通りすがりの人が首をかしげるかもしれない。「昼ごはんは何を食べた」みたいな会話が、本当に重賞の直前なのか、と。',
      );
      await era.printAndWait(
        'ふたりの様子は、あまり真面目ではない「はい」と答えているようだが、少なくとも気力が落ちているわけではない。ただ、緊張しきれないだけだ。',
      );
      await era.printAndWait(
        'ふたりは以前、重賞のときの可能性をいろいろ想像していた。だがシニア級で実際にコースへ立つと、大したことではなかった。',
      );
      await era.printAndWait([
        'だって',
        urara.sex,
        'は「',
        urara.get_colored_name(),
        '」で、',
        you.get_colored_name(),
        ' は',
        urara.sex,
        'の「トレーナー」だ。負けても勝っても、毎回全力で走れればそれでいい。',
      ]);
      await era.printAndWait([
        'ただ結果として、ここに来ることを選んだ。',
        negi_sta,
        '。',
      ]);
      if (joined_g3) {
        await era.printAndWait([
          '来た理由は、以前約束したとおり、',
          urara.get_colored_name(),
          ' を連れてシニア級の水深を測るためだ。',
        ]);
        await era.printAndWait([
          'それでも、これまでの重賞とは違い、今回は ',
          urara.get_colored_name(),
          ' が少しでも楽に走れることを願っている。',
        ]);
      } else {
        await era.printAndWait([
          'ここじゃなくてもよかったが、',
          urara.get_colored_name(),
          ' の初めての重賞だから、',
          urara.get_colored_name(),
          ' にとって少し簡単なものを選んだ。',
        ]);
        await era.printAndWait([
          'ただ、今の ',
          urara.get_colored_name(),
          ' の状態なら、負けても最初のころのようにわけがわからなくなることはないはずだ。',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await you.say_and_wait(
            'それに何より、有馬は……勝ったんだよな？今回本気が出なくても、誰も責めないだろう……？',
            true,
          );
        } else {
          await era.printAndWait([
            'すでに ',
            arim_kin,
            ' へ出走しているのだから、',
            urara.get_colored_name(),
            ' が緊張しきれないのも想定内だ。',
          ]);
          await era.printAndWait([
            'だから今のところ予想できるのは、最後がうまくいってもいかなくても、',
            urara.get_colored_name(),
            ' は今回、あまり大きく揺れないだろうということだ。',
          ]);
        }
      }
      era.println();
      await urara.say_and_wait(['じゃあ ', callname, '、行ってくるね──！']);
      await era.printAndWait([
        '登場の合図と一緒に響いた軽やかな声の中、',
        urara.get_colored_name(),
        ' は一歩前へ出て、',
        you.get_colored_name(),
        ' に向かって手を挙げた。',
      ]);

      era.printButton('「おう！楽しんで走ってこいよ？」', 1);
      await era.input();

      await era.printAndWait([
        'ふたりが一番よく知っている手振りの返事のあと、',
        urara.get_colored_name(),
        ' はまたコースへ走り出していった——',
      ]);
    };
    f.title = title;
    return f;
  })(),
  negi_sta_win: (() => {
    const title = '次は？';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {number} best_g1 現在の G1 最高着順。Infinity は G1 未出走
     * @param {number|false} arim_kin_rank_c クラシック級有馬記念の着順。false は有馬記念未出走
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      best_g1,
      arim_kin_rank_c,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '予想どおりの勝利、おめでとうございます？',
      );
      await inner_urara.say_as_unknown_and_wait(
        'うっかり負けても責めはしませんが、次はもう少し真剣にお願いしますね。',
      );
      era.drawLine();
      await era.printAndWait([
        '前列の端へ着いたとたん、コース内から駆け寄ってきた桜ピンクの小さな生き物が、ぴょんぴょんと ',
        you.get_colored_name(),
        ' とハイタッチした。',
      ]);
      await era.printAndWait(
        '柵越しに見下ろすと、そこにはまだ汗も拭いていない、明るい笑顔が待っていた。',
      );
      await urara.say_and_wait([callname, '！一着だよ、一着だよ──！']);
      await urara.say_and_wait(
        'えへへ～得意な短距離だから？ あっという間に終わっちゃった！',
      );
      await urara.say_and_wait(
        'でも一番前を走る感じは前と同じで、一番前の景色、すごくきれいだよ～',
      );

      era.printButton('「うん、今回はよくできたね。感想はある？」', 1);
      await era.input();

      await urara.say_and_wait(
        '感想はいっぱいあるよ。でも最後はやっぱり、力いっぱい前に飛び出すのがウララに一番合うと思う！',
      );
      await urara.say_and_wait(
        '今日のレースそのものは置いといて……ウララ、もっと上のレースにも出られる気がする！',
      );
      await era.printAndWait([
        'そうだな。今の ',
        urara.get_colored_name(),
        ' は、今でも戦術の実行力はかなり限られている。',
      ]);
      await era.printAndWait([
        'だがもう一方も正しい。今の',
        urara.sex,
        'なら、もっと上のレースへ挑戦する資格はある。',
      ]);

      era.printButton(
        `「それなら選択肢はいくつかあるけど……とりあえずフェブラリーステークスを勧めるよ。どう？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'フェブラリー……あ！教科書でやった！G1のレースだよね？',
      );
      await urara.say_and_wait([
        'じゃあ ',
        callname,
        ' は、次はG1に挑戦したほうがいいってこと？ 今年の有馬記念のための積み重ねだよね？',
      ]);

      era.printButton(
        '「うん……だいたいそんな感じ。とにかく次のレースの準備をしよう！」',
        1,
      );
      await era.input();

      await urara.say_and_wait('うん！');
      if (best_g1 === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          ' 自身が言うとおり、今の',
          urara.sex,
          'は G1 を取った実績を持つ強い',
          urara.uma_sex_title,
          'に成長していた。',
        ]);
        await era.printAndWait([
          '最初はぼんやりしていてトレーニングすら手こずっていた小さな',
          urara.uma_sex_title,
          'が、常勝の',
          urara.uma_sex_title,
          'になるなど、想像しづらい。',
        ]);
        await era.printAndWait([
          'みんなの見当が外れていて、',
          urara.get_colored_name(),
          ' は気づきにくい天才だったのだろうか。',
        ]);
      } else {
        await era.printAndWait([
          '最後のレースの準備だけではない。もっと大事なのは、',
          urara.get_colored_name(),
          ' がいつか必ず G1 という壁を越えることだ。',
        ]);
        await era.printAndWait([
          'シニア級に入ると、',
          urara.get_colored_name(),
          ' の時間はもうそれほど余裕がない。それでもこれは、',
          urara.sex,
          'が一度は通らなければならない試験だ。',
        ]);
        await era.printAndWait([
          '少なくとも、走れる時間のうちに',
          urara.sex,
          'に悔いを残させたくはない。',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await era.printAndWait([
            'ただ「',
            arim_kin,
            ' の準備」……本意はそうではなかったが、一度勝っている以上、確かに必要だ。',
          ]);
          await era.printAndWait([
            '大事なレースは一度勝てば同じ舞台の競争相手に狙われる。「',
            urara.get_colored_actual_name(),
            ' が有馬に勝てる」となると、なお恐ろしい化学反応だ。',
          ]);
          await era.printAndWait(
            '今回の有馬がどうなるかは想像しづらい。だからその前に、できることを尽くすしかない。',
          );
        } else {
          await era.printAndWait([
            '「',
            arim_kin,
            ' の準備」については、',
            urara.get_colored_name(),
            ' が強調しなくても、トレーナーの ',
            you.get_colored_name(),
            ' は必ず覚えておく。',
          ]);
          await era.printAndWait([
            'ただ、今の小さな',
            urara.uma_sex_title,
            'は、楽しんで走る以上に、今年は勝ちたい気持ちが強いはずだ。',
          ]);
          await era.printAndWait(
            'だが有馬を勝つのはやはり……とにかくトレーナーとして、できることを尽くすしかない。',
          );
        }
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'こうして、トレーナー',
        you.adult_sex_title,
        '（あなた）と ',
        urara.get_colored_name(),
        ' は、次の出走目標を決めました。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'ただ、',
        urara.sex,
        'がどこまで挑戦できるのかは、三女神しかご存じないのかもしれません。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '次にお会いするときは、こうはいかないでしょう……',
      );
    };
    f.title = title;
    return f;
  })(),
  negi_sta_lose: (() => {
    const title = '次は？';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {number} best_g1 現在の G1 最高着順。Infinity は G1 未出走
     * @param {number|false} arim_kin_rank_c クラシック級有馬記念の着順。false は有馬記念未出走
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      best_g1,
      arim_kin_rank_c,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        'まさか本当に負けるとは。ええ……わたくし、最初に何と申しましたっけ。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '……次はもう少し真剣にお願いしますね。',
      );
      era.drawLine();
      await era.printAndWait([
        '落ち着いてコースの端へ来ると、',
        you.get_colored_name(),
        ' は遠くで、顔の汗を拭いながら走ってくる ',
        urara.get_colored_name(),
        ' を見た。',
      ]);
      await urara.say_and_wait(
        'ふう——今回、すぐ終わっちゃったね！でもうっかり負けちゃった……',
      );
      await urara.say_and_wait(
        'でも今回、すごく楽しく走れたよ！ほかに気をつけることはある？',
      );

      era.printButton(
        '「大丈夫。ちょっと調子が悪かっただけだ。次は必ず勝とう」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '笑顔が少し無理のある ',
        urara.get_colored_name(),
        ' にタオルを渡し、',
        you.get_colored_name(),
        ' は笑いながら、下がった耳をそっと撫でた。',
      ]);
      await era.printAndWait([
        'どんなレースでも普段の自分でいられるのは ',
        urara.get_colored_name(),
        ' の強いところだが、今は明らかに調子を整えるほうが先だった。',
      ]);
      await era.printAndWait([
        '次は、みんなが本気で来るレースに出てみよう。そうすれば ',
        urara.get_colored_name(),
        ' も、新しい一年のリズムを早く掴めるかもしれない。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' が選んだ目標に備えるためにも、もっと上のレースへ挑戦する時期だ。',
      ]);

      era.printButton(
        `「ウララ、次はもっと上のレースに挑戦してみない？ちなみに、フェブラリーステークスを勧めるよ？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'フェブラリー……あ！教科書でやった！G1のレースだよね？',
      );
      await urara.say_and_wait(
        'でもウララ、今回負けちゃったよ。それでも大丈夫かな……',
      );

      era.printButton(
        '「大丈夫。出走資格はある。調子を整えれば問題ないよ」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'そう言いながら、',
        you.get_colored_name(),
        ' は落ち込む小さな',
        urara.uma_sex_title,
        'をなだめ続け、',
        urara.sex,
        'が少しいつもの笑顔を取り戻すまで寄り添った。',
      ]);
      if (best_g1 === 1) {
        await era.printAndWait([
          'もちろん ',
          you.get_colored_name(),
          ' の言葉は慰めだけではない。今の ',
          urara.get_colored_name(),
          ' には、G1 に挑戦して勝つ実力がある。',
        ]);
        await era.printAndWait([
          '最初とはもうまったく違う。一度の敗戦だけで、',
          urara.sex,
          'を「失敗」で語ることはできない。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' は、ある面では本当に天才なのかもしれない。',
        ]);
      } else {
        await era.printAndWait([
          '最後のレースの準備だけではない。もっと大事なのは、',
          urara.get_colored_name(),
          ' がいつか必ず G1 という壁を越えることだ。',
        ]);
        await era.printAndWait([
          'シニア級に入ると、',
          urara.get_colored_name(),
          ' の時間はもうそれほど余裕がない。それでもこれは、',
          urara.sex,
          'が一度は通らなければならない試験だ。',
        ]);
        await era.printAndWait([
          '少なくとも……走れる時間のうちに',
          urara.sex,
          'に悔いを残させたくはない。',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await era.printAndWait([
            'それにしても、普段の ',
            urara.get_colored_name(),
            ' は確かに波があるが、',
            urara.sex,
            'は今回いったいどうやって負けたのだ。',
          ]);
          await era.printAndWait([
            'そう考えると、',
            you.get_colored_name(),
            ' はまた額を押さえた。時間はジュニア級の初トレーニング、あの目の回る午後へ戻ったようだった。',
          ]);
          await era.printAndWait(
            'とにかく、次はこんな事故は起きないはずだ、な？',
          );
        } else {
          await era.printAndWait([
            '「',
            arim_kin,
            ' の準備」については、',
            urara.get_colored_name(),
            ' が強調しなくても、トレーナーの ',
            you.get_colored_name(),
            ' は必ず覚えておく。',
          ]);
          await era.printAndWait([
            'ただ、今の小さな',
            urara.uma_sex_title,
            'は、楽しんで走る以上に、今年は勝ちたい気持ちが強いはずだ。',
          ]);
          await era.printAndWait([
            'だが有馬を勝つのはやはり……とりあえず ',
            urara.get_colored_name(),
            ' の調子を整えることを最優先にしよう。',
          ]);
        }
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'こうして、トレーナー',
        you.adult_sex_title,
        '（あなた）と ',
        urara.get_colored_name(),
        ' は、次の出走目標を決めました。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'ただ、',
        urara.sex,
        'がどこまで挑戦できるのか……あなたがもう少し',
        urara.sex,
        'を鞭撻してくださるほかありません。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '次にお会いするときは、こうはいかないでしょう……',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '奇襲の気持ち！II！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait('……');
      era.drawLine();
      await era.printAndWait(
        '早朝。起きて顔を洗い、服を着て、朝食をがつがつ食べ、ついでに玄関先でカレンダーを何気なく見る。',
      );
      await era.printAndWait([
        '日付を確認した瞬間、',
        you.get_colored_name(),
        ' は真面目になった。今日はバレンタイン。いつでも気を張っておくべき特別な日だ。',
      ]);
      await era.printAndWait([
        '計画はいつも変化に追いつけない。今もそうだ。玄関前でため息をつき、',
        you.get_colored_name(),
        ' は、もうすぐノックされるだろう扉を開けた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の予想どおり、扉の向こうから覗いたのは「前回」と同じピンクの耳あてと、小さな生き物のかわいい笑顔だった。',
      ]);

      era.printButton('「今回もこんなに早いね。無理しないでいいよ？」', 1);
      await era.input();

      if (high_relation) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait(
            '無理してないよ！ウララ、今日のためにいっぱい準備したんだ。昨日のうちにみんなのチョコも渡しちゃったし！',
          );
          await urara.say_and_wait([
            callname,
            ' だから、今回はもっとちゃんとやりたかったんだ！せっかくのバレンタインだもん！',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' にいたずらっぽく笑い、小さな',
            urara.uma_sex_title,
            'は手の袋を揺らしながら ',
            you.get_colored_name(),
            ' に寄り添い、曖昧な空気はさらに濃くなった。',
          ]);
        } else {
          await urara.say_and_wait([
            'ウララ、無理してないよ！みんなのチョコは昨日のうちに配っちゃったから、今日は ',
            callname,
            ' だけ！',
          ]);
          await urara.say_and_wait([
            'みんなお祭り気分だし、今日は ',
            callname,
            ' とウララ、もうちょっと遊んでもいいよね？',
          ]);
          await era.printAndWait([
            '無邪気でかわいい笑顔を見せ、小さな',
            urara.uma_sex_title,
            'は ',
            you.get_colored_name(),
            ' の玄関前でぴょんぴょん跳ねながらお菓子の袋を掲げた。',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '無理してないよ？ウララ、昨日みんなのチョコは配り終わったけど、',
          callname,
          ' のは……特別なんだ！',
        ]);
        await urara.say_and_wait([
          'それにウララも ',
          callname,
          ' とバレンタインを過ごしたかったから……これ、',
          callname,
          ' の！',
        ]);
        await era.printAndWait([
          '懐の紙袋をそっと掲げ、小さな',
          urara.uma_sex_title,
          'は少し',
          urara.teen_sex_title,
          'らしい曖昧さを帯びて、ゆっくり ',
          you.get_colored_name(),
          ' に体を寄せた。',
        ]);
      } else {
        await urara.say_and_wait([
          '無理ってほどじゃないよ？昨日チョコを配ってるとき、',
          callname,
          ' を忘れちゃって……',
        ]);
        await urara.say_and_wait([
          'だから今日、',
          callname,
          ' のチョコを持ってきたんだ。でも……外、ちょっと寒いよ、',
          callname,
          '……？',
        ]);
        await era.printAndWait([
          '小さな手に息を吹きかけながら、小さな',
          urara.uma_sex_title,
          'は懐からチョコの入った袋を取り出した。',
        ]);

        if (
          era.getAddedCharacters().filter((e) => era.get(`love:${e}`) >= 75)
            .length > 2
        ) {
          await urara.say_and_wait([
            'それにウララ、わかったんだ。今日は人気者の ',
            callname,
            ' のところにたくさん人が来るから、ウララも先に取っとかないと！',
          ]);
          await era.printAndWait([
            'うん……え？ あ？ 突然 ',
            urara.get_colored_name(),
            ' の言葉で頭を殴られたような気がして、',
            you.get_colored_name(),
            ' は気まずいあまり、何と言えばいいかわからなくなった。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' の困った顔に気づいたのか、',
            urara.get_colored_name(),
            ' はいじわるな笑顔のまま、ちょうどよく話題を切り上げた。',
          ]);
          await urara.say_and_wait([
            'えへへ～なんでもないよ、ウララ、なんにも言ってないよ～',
            callname,
            '、聞き間違いだよ～',
          ]);
          await era.printAndWait([
            '……本当に話題を終わらせるつもりなのか。それに',
            urara.sex,
            'の、大人をからかうやり方はどこで覚えたのだ……',
          ]);
        }
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' の部屋へ軽やかに潜り込み、ふたりがテーブルに着くと、',
        urara.get_colored_name(),
        ' は笑いながら紙袋の中身を皿へどさっと広げた。',
      ]);
      await era.printAndWait([
        '去年の、創造力がありすぎた多味チョコに比べると、今年の小さな',
        urara.uma_sex_title,
        'の贈り物は、それほど子どもっぽくはなかった。',
      ]);
      await era.printAndWait([
        'だが目の前に山になったハートのチョコクッキーを見つめていると、',
        you.get_colored_name(),
        ' の記憶は、出会ったあとの最初の年末へゆっくり戻っていく……',
      ]);
      await urara.say_and_wait([
        callname,
        ' が好きなのは、やっぱりウララのクッキーでしょ？ だからまた作ったんだ！',
      ]);
      await urara.say_and_wait([
        callname,
        '、今すぐ一口食べてみて！今度は、舌まで溶けちゃうくらいおいしいって保証するよ！',
      ]);
      await era.printAndWait([
        '舌まで溶ける、とは物騒だ。クッキーの褒め言葉ではないだろう。それとも ',
        urara.get_colored_name(),
        ' はまた何か入れたのか。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の期待した催促の中、',
        you.get_colored_name(),
        ' は考え込みながら、まだ少し温かいクッキーへ手を伸ばした。',
      ]);
      await era.printAndWait(
        'たしかに……とてもおいしい。形は相変わらず崩れがちだが、味は前回の年末より繊細で甘い……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の顔に「舌が溶けた」衝撃を読み取り、',
        urara.get_colored_name(),
        ' もそっと ',
        you.get_colored_name(),
        ' の隣へ座った。',
      ]);
      await urara.say_and_wait(
        '実はね、おいしい秘密があるんだ。本当は内緒なんだけど、ウララ、特別に教えてあげる！',
      );
      await urara.say_and_wait([
        callname,
        '、知りたいなら、耳をこっちに近づけて……？',
      ]);
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          you.get_colored_name(),
          ' が耳を傾けようとした次の瞬間、',
          urara.get_colored_name(),
          ' の顔色が変わった。いきなり ',
          you.get_colored_name(),
          ' の腰に跨がり、小さな',
          urara.uma_sex_title,
          'は ',
          you.get_colored_name(),
          ' を下に押し倒した。',
        ]);
        await era.printAndWait([
          '小さく柔らかい体で ',
          you.get_colored_name(),
          ' に覆いかぶさり、',
          urara.teen_sex_title,
          'の赤い頬と桜色の瞳には、恋人の情欲が咲いていた。',
        ]);
        await urara.say_and_wait([
          callname,
          ' への祝福も、',
          callname,
          ' への愛も、ウララ、いっぱい入れたよ……',
        ]);
        await urara.say_and_wait([
          'せっかく作ったんだから、',
          callname,
          '、ウララと一緒に食べてね？',
        ]);
        if (era.get('talent:52:乳房尺寸') > 0) {
          await urara.say_and_wait([
            'それに、',
            callname,
            ' への『愛』以外にも、みんなの噂どおり、ほかのものも入れたんだ……',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' に跨がったまま上着をそっと開き、小さな',
            urara.uma_sex_title,
            'は、発情で震え、ねばついて濡れた胸帯を外した。',
          ]);
          await era.printAndWait(
            '揺れて目に入ったのは、尖った先端から乳白色をこぼし続ける、柔らかい胸だった。',
          );
          await era.printAndWait([
            '小さな体に似合わない二つの胸を腕で支え、',
            urara.get_colored_name(),
            ' の赤くなった小さな顔には、大人の色気が加わっていた。',
          ]);
          await urara.say_and_wait([
            '唾液だけじゃないよ。ウララがクッキーに使ったミルクも、自分のだよ？ だから……',
            callname,
            '、たくさん食べてね？',
          ]);
        }
        await era.printAndWait([
          'クッキーを唇に挟み、小さな',
          urara.uma_sex_title,
          'は身をかがめ、柔らかく繊細な唇と舌、甘い涎を溶かしながら ',
          you.get_colored_name(),
          ' の口へ送った。',
        ]);
        await era.printAndWait([
          '相手を押しのけようと落ち着かないところから、吸い合ううちに思考まで溶けて十指を組むまで、',
          you.get_colored_name(),
          ' に絡む',
          urara.teen_sex_title,
          'は体の力を抜いていった……',
        ]);
        await era.printAndWait([
          '攻守が入れ替わり、目がうつろな小さな',
          urara.uma_sex_title,
          'は、',
          callname,
          ' の強い抱擁と甘い深い口づけの中で、柔らかな声を漏らした。',
        ]);
        await era.printAndWait([
          'バレンタインの罠に完全に落ちた ',
          you.get_colored_name(),
          ' の前で、小さな',
          urara.uma_sex_title,
          'は体の使い方を、安心して恋人に預けた……',
        ]);

        await era.printAndWait('今なら、何をしても許される……');
        era.printButton('ここでウララを……（恋慕+5）', 1);
        era.printButton('今は何もしないでおこう……（好感+20）', 2);
        ret.push(await era.input());
        if (ret[0] === 2) {
          await era.printAndWait([
            '首を振り、',
            you.get_colored_name(),
            ' は服の乱れた ',
            urara.get_colored_name(),
            ' を離した。だが ',
            you.get_colored_name(),
            ' の予想に反して、今の小さな',
            urara.uma_sex_title,
            'は不満を見せなかった。',
          ]);
          await era.printAndWait([
            '半脱げの服を静かに直し、小さな',
            urara.uma_sex_title,
            'は紅潮した小さな顔のまま、悪戯に失敗したときのいたずらな笑顔を見せた。',
          ]);
          await urara.say_and_wait([
            callname,
            ' の判断は正しいよ。朝からこんなの、ちょっとやりすぎだもん。でもせっかくのバレンタインだし、一緒に全部食べよ……？',
          ]);
          await urara.say_and_wait(
            'ほら、まだたくさんあるよ？ お口、開けて。このあとはきっと楽しいよ！',
          );
          await era.printAndWait([
            '案の定、まだ諦めていない ',
            urara.get_colored_name(),
            ' は、「調味料」を入れすぎた次のクッキーを手に取り、甘い笑顔でお菓子を口に含んだ。',
          ]);
          await era.printAndWait(
            'このバレンタインは、苦労して過ごす運命らしい……',
          );
        }
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' の耳元でそっと息を吹きかけ、',
          urara.teen_sex_title,
          'の香りと祭りの祝福が一緒に ',
          you.get_colored_name(),
          ' の耳へ入った。',
        ]);
        await urara.say_and_wait([
          '実はね……ウララ、気持ちをいっぱい入れたんだ。',
          callname,
          ' に、毎日楽しくいてほしいから！',
        ]);
        await urara.say_and_wait(
          'それからみんなが言う、魔法の呪文を効かせる最後の一歩……ちゅっ～',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' のそばで内緒話の距離を保ったまま、',
          urara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の頬に、天使の祝福のような小さなキスを置いた。',
        ]);
        await era.printAndWait([
          'まだ恋人ですらないのに、小さな',
          urara.uma_sex_title,
          'はこんなに大事な贈り物を選んだ。みんなは',
          urara.sex,
          'にいったい何を教えたのだ……',
        ]);
        await era.printAndWait([
          '目尻で',
          urara.teen_sex_title,
          'の、春のままの笑顔を見て、',
          you.get_colored_name(),
          ' の鼓動も勝手に拍子を取りはじめる。',
        ]);

        await urara.say_and_wait([
          'えへへ～',
          callname,
          '、どうだった？ ウララの呪文、成功した？',
        ]);
        era.printButton('「嬉しくて、今日一日顔を洗えないよ！」（恋慕+5）', 1);
        era.printButton('「うん！ウララの魔法、大成功だよ！」（好感+20）', 2);
        ret.push(await era.input());
        await urara.say_and_wait([
          'でしょ？ ',
          callname,
          ' をドキドキさせて、嬉しくする魔法、やっぱり効くんだ！さすがみんなの昔からのやり方だね！',
        ]);
        await era.printAndWait([
          'この「魔法の呪文」、やっぱり友情向けではないだろう。はしゃぐ小さな',
          urara.uma_sex_title,
          'を見て、何かを察した ',
          you.get_colored_name(),
          ' は視線を外した。',
        ]);
        await urara.say_and_wait([
          'だからこれからずっと ',
          callname,
          ' をもっと嬉しくするために、ウララのクッキー、まだたくさんあるよ？',
        ]);
        await urara.say_and_wait([
          callname,
          '！ウララと一緒に、未来のいい気持ちを食べちゃおう！',
        ]);
        await era.printAndWait([
          '祝福を入れた次のバレンタインの贈り物を笑いながら手に取り、',
          urara.get_colored_name(),
          ' は鼓動を速める笑顔で、それを ',
          you.get_colored_name(),
          ' の口へ押し込んだ。',
        ]);
        await era.printAndWait([
          'いつの間にか曖昧になった「友情」の空気の中、',
          you.get_colored_name(),
          ' と ',
          urara.get_colored_name(),
          ' はチョコクッキーを分け合い、バレンタインの朝を過ごした。',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'わ、わたくしは大丈夫ですよ……？ ……',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_febr_sta: (() => {
    const title = 'フェブラリーステークスへ！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await inner_urara.say_as_unknown_and_wait(
        'ときには、わたくしでさえ、運や運命といったものに、本当に筋があるのではないかと疑いたくなります。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'あなたは、どうお考えです？ ですが',
        urara.uma_sex_title,
        'たちを運命の先へ導くのも、トレーナー',
        you.adult_sex_title,
        '（あなた）の使命でしょう。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'では、運命を超えられない',
        urara.uma_sex_title,
        'たちは、',
        urara.sex,
        'の願いどおり、一緒に幸せを見つけられるのでしょうか。',
      ]);
      era.drawLine();
      await era.printAndWait([
        urara.get_colored_name(),
        ' と、もう何度目かわからないほど違う選手通路に並び、',
        you.get_colored_name(),
        ' は',
        urara.sex,
        'と、習慣のようにレース前のやり取りをしていた。',
      ]);
      await era.printAndWait([
        'ただ今回は、周囲の空気に染まったのか、あまり緊張してはいないのに、小さな',
        urara.uma_sex_title,
        'にはいつもの笑顔がなかった。',
      ]);
      await urara.say_and_wait([
        callname,
        '、外、やっぱり人が多いね。ここのみんなの顔も、前回より真剣だよ。',
      ]);

      era.printButton(
        '「でもウララは前回と同じで、あんまり緊張してないんだよね？」',
        1,
      );
      await era.input();

      await urara.say_and_wait('うん。ウララが心配なのは、あっちだよ。');
      await era.printAndWait([
        '担当の視線を辿ると、',
        you.get_colored_name(),
        ' はトレーニング場で何度か顔を合わせたことのある',
        urara.uma_sex_title,
        'を見つけた。',
      ]);
      await era.printAndWait([
        '周囲の空気から切り離されたように、',
        urara.sex,
        'は通路の端でひとりでウォームアップをしており、表情は怖いほど張り詰めていた。',
      ]);
      await era.printAndWait([
        urara.sex,
        'は ',
        urara.get_colored_name(),
        ' の友達だろう。だがなぜひとりでここにいる。自分で出走してきたのか。',
        urara.sex,
        'のトレーナーは。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の顔から疑問を読み取り、',
        urara.get_colored_name(),
        ' はすぐ ',
        you.get_colored_name(),
        ' に経緯を話しはじめた。',
      ]);
      await urara.say_and_wait([
        urara.sex,
        'はウララの友だちだよ。よく併走してるうちに知り合ったんだ。距離が、すごく合うみたいで。',
      ]);
      await urara.say_and_wait([
        'でもウララと違って、',
        urara.sex,
        'は前からすごく強くて、トレーナーがいなくても、ずっとここまで走ってきたんだ。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' と適性が近いなら、トレーニングを一緒にするのは自然だ。ただコースで出会うのは、これが初めてだろう。',
      ]);
      await era.printAndWait([
        'それにしてもトレーナーがいない。デビューから、ひとりで練習して、ひとりで出走してきたのか。',
      ]);
      await urara.say_and_wait([
        urara.sex,
        'はすごく負けず嫌いな',
        urara.uma_sex_title,
        'で、ずっとG1が目標だから、今回のレースは',
        urara.sex,
        '、すごく大事にしてると思う。',
      ]);
      await urara.say_and_wait([
        'でもレースの準備のせいで、',
        urara.sex,
        'はもう長いこと楽しそうじゃなかった。このレースで',
        urara.sex,
        'が勝てたら、少し楽になれるかな……',
      ]);
      await era.printAndWait(
        'なるほど。だが今すぐ解ける問題ではない。あとでゆっくり話す機会を作れるかもしれないが、今は……',
      );

      era.printButton(
        '「でも今は、ウララは友達に一着を譲ったりしないよね」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'もちろん！',
        callname,
        ' の言いたいこと、わかるよ。ウララ、もう決めたんだ。がんばって勝つ！',
      ]);
      await urara.say_and_wait([
        'ただ、今の',
        urara.sex,
        'の様子は、ウララ、やっぱり心配……',
      ]);

      era.printButton(
        '「わかった。とりあえずレースに全力を出そう。残りはあとで考えよう？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'そうだね。心配してるだけじゃ何も解決しない。じゃあ ',
        callname,
        '、先に行くね！',
      ]);

      era.printButton('「うん！今日もがんばって！」', 1);
      await era.input();

      await era.printAndWait([
        '入場の合図と同時に ',
        you.get_colored_name(),
        ' へ小さく手を振り、笑顔を取り戻した ',
        urara.get_colored_name(),
        ' が先にコースへ飛び込んだ。',
      ]);
      await era.printAndWait([
        'だがそのすぐあと、',
        urara.get_colored_name(),
        ' の友人が後ろから ',
        you.get_colored_name(),
        ' とすれ違ったとき、空間は色を失いながら、誰かにスローモーションをかけられた。',
      ]);
      await era.printAndWait([
        'その姿は見えない。だが悪魔の登場に囁きがつきものなように、あのよく知った口調がまた ',
        you.get_colored_name(),
        ' の耳を囲んだ。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '心配なさらなくてよろしいですよ。ウララの勘どおり、ウララが負けるとしても、',
        urara.sex,
        'に次はないかもしれません。',
      ]);
      await era.printAndWait([
        '今日の「',
        inner_urara.sex,
        '」の言葉は少し耳に痛い。徳のない発言に、穏やかな返事が返るはずもなかった。',
      ]);

      era.printButton(
        '「それはどういう意味だ。せっかく出走なんだ、誰に対してももう少しマシなことを言え」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '誤解なさらないで。字義どおりですよ。あなたはトレーナーなのですから、この生徒の脚を見てくださいませんか。',
      );
      await era.printAndWait([
        'スローの時間の中、',
        you.get_colored_name(),
        ' は、希望に近づく',
        urara.teen_sex_title,
        'を支えるその脚を見た。そして、夢が砕けるのを先に見たように眉を寄せた。',
      ]);
      await era.printAndWait([
        'どう言えばいいか……あまりひどく言わなければ、',
        urara.sex,
        'が競走',
        urara.uma_sex_title,
        'としての「賞味期限」に近づいている、といったところだ。',
      ]);
      await era.printAndWait([
        'たしかに、トレーナーがいなくても',
        urara.sex,
        'は各方面をよくこなせる。だがひとりでデビューする勇気があっても、',
        urara.sex,
        'は三女神の寵愛を得られなかった。',
      ]);
      await era.printAndWait(
        'またしても逃げられない話だ。「凡庸の限界」、「資質の果て」、そして「願いどおりにならない大多数」。',
      );
      await era.printAndWait([
        'だが今はそれを論じるときではない。',
        you.get_colored_name(),
        ' も、もう',
        urara.sex,
        'のペースには乗らないつもりだった。',
      ]);
      await era.printAndWait(
        'それにいくら厳しくても、三女神にしか解けない問題を、一介のトレーナーが答えることなどできない。',
      );

      era.printButton(
        `「そもそも${urara.sex}の状態を、外の人間が主観で決めつけるものじゃない。それに${urara.sex}も、見た目どおりじゃないかもしれない……」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        'それから、',
        you.get_colored_name(),
        ' が主導権を取ろうとした弁解は、',
        inner_urara.get_colored_name(),
        ' の澄んだ笑い声でできた、中身は純粋な嘲笑に遮られた。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'あなたの思索は嫌いではありませんよ。ですが、わたくしの指している相手が、',
        urara.sex,
        'と同じ舞台で走る小さな努力家だと、おわかりでしょう？',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '勝ちを選んだ小さなウララは、ゴール前ですべてを失うかもしれない友だちを見る覚悟は、できていますか？',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        'は、もうすぐ落ちていく友だちに、あの『完璧な会長』でさえ衆生に与えられなかった笑顔を届けられるのでしょうか。',
      ]);
      await era.printAndWait(
        '体の中で何かが燃えた。いいだろう、そう聞くのか。どこの小鬼だ——',
      );

      era.printButton(
        '「なぞなぞには答えない。今はウララがレースだ。騒ぎ足りたら、早く出ていけ」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '怒りながらも最低限の礼儀は保ち、',
        you.get_colored_name(),
        ' はあの',
        { color: inner_urara.color, content: '「触れられないウララ」' },
        'に退去を命じた。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'ああ、そうですわね。ウララはまだ、',
        urara.sex,
        'の友だちがどうなるかすら知りませんもの。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        'が後悔する顔を見る前では、',
        urara.sex,
        'のトレーナー',
        you.adult_sex_title,
        'にも答えられませんわね。お怒りになるのも無理はありません。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'では、また。ウララを、しっかりお世話してくださいね？',
      );

      era.printButton(
        '「何度も言ってる、世話する！だから次会うときは、ちゃんと話せ！」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '流れを取り戻しはじめる空気の中、',
        you.get_colored_name(),
        ' は怒って振り返り、後ろから薄れていく声へ拳を振り抜いた。',
      ]);
      await era.printAndWait([
        'もちろん、',
        you.get_colored_name(),
        ' のいる選手通路にはもう誰もいない。何も起きない……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  febr_sta_win: (() => {
    const title = '悔しい？';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} join_arim_kin_c ウララがクラシック級有馬記念に出走したか
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} elm_sta エルムステークス（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
      elm_sta,
    ) => {
      await era.printAndWait([
        'レースが終わり、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' は選手控室へ向かう通路を一緒に歩いていた。',
      ]);
      await era.printAndWait([
        'まだレースの空気に浸っているのか、さっき現場にいたのに、',
        urara.get_colored_name(),
        ' は走りの経過を ',
        you.get_colored_name(),
        ' に話し続けていた。',
      ]);
      await urara.say_and_wait(
        'えへへ～みんな、ウララのためにすごく喜んでくれたよ！一着が取れて、ほんとによかった！',
      );
      await urara.say_and_wait([
        'ウララが走り続ければ、みんなも笑顔でいてくれるよね？',
        callname,
        '、次はどのレースに出るの？',
      ]);
      era.printButton('「そういえば……ウララ、次に走りたいレースはある？」', 1);
      await era.input();

      await urara.say_and_wait(
        'ん？勝てたらいいけど、走れるなら、どれでもいいよ——',
      );
      await era.printAndWait([
        '予想どおりの返事だ。',
        you.get_colored_name(),
        ' はもう ',
        urara.get_colored_name(),
        ' 自身にレースを選ばせてもいいと思っていたが、',
        urara.sex,
        'の性格では、結局はっきり選べそうにない。',
      ]);
      await era.printAndWait([
        'それに最終目標を「',
        arim_kin,
        '」にするなら、',
        urara.get_colored_name(),
        ' が選べる日程もかなり限られる。',
      ]);

      era.printButton(`「それなら……次は『エルムステークス』はどう？」`, 1);
      await era.input();

      await era.printAndWait(
        '最善の選択ではないかもしれないが、損得を量ったうえで、まずはこのレースを仮押さえするしかなかった。',
      );
      await urara.say_and_wait([
        'うん、わかった！商店街と応援会のみんなに、次は ',
        elm_sta,
        ' だって言ってくる——',
      ]);

      era.printButton(
        `「ちなみに、本当に走るならみんなの駆けつけは大変だよ。『エルムステークス』は北海道だから」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'え？そうなの！？遠すぎる！でも大丈夫かも。みんな、どこからでもウララ見られるでしょ！',
      );
      await urara.say_and_wait(
        'みんながウララのこと思っててくれれば全然平気。だから当日は、なんとか勝つだけでいいんだよ！',
      );

      era.printButton(
        '「その前に、あとでライブがあるよ。みんな、ウララのかっこいいところを待ってるよ？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'わかった！じゃあウララ、ライブの準備してくる！',
        callname,
        ' は用事があったら先に行ってて！',
      ]);

      era.printButton(
        '「おう！じゃあ先に舞台裏へ行く。何かあったらすぐ連絡してくれよ！」',
        1,
      );
      await era.input();

      await urara.say_and_wait('はあい——');
      era.drawLine();
      await urara.print_and_wait([
        callname,
        ' と別れて、',
        you.sex,
        'が視界から消えるまで見送ってから、控室へ入った。',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          callname,
          ' が三歩ごとに振り返るの、なんだかかわいい。',
          callname,
          ' が子どもで、ウララがお母さんみたい。',
        ]);
        await urara.print_and_wait([
          '毎日あんなふうに ',
          callname,
          ' に見てもらえたらいいな。でも、それってワガママかな？',
        ]);
      } else {
        await urara.print_and_wait([
          callname,
          '、いつものようにすぐ行っちゃった。もう一回振り返ってウララを見てくれたらいいのに……',
        ]);
        await urara.print_and_wait([
          'でも、ウララなんでそれが気になるんだろう。',
          callname,
          ' だって、ずっとウララを見てる暇はないよね？',
        ]);
      }
      await urara.print_and_wait([
        'やっぱり難しいな……ん？あそこの隅に、誰かが丸まってる。顔色も悪い……あ！',
        urara.sex,
        'だ……',
      ]);
      await urara.print_and_wait([
        'G1を取れなくて落ち込んでるのかな。負けず嫌いの',
        urara.sex,
        'がこんなに弱ってるの、ウララ、初めて見た……',
      ]);
      await urara.print_and_wait([
        'でもこうなったら、放っておけない。ウララは ',
        callname,
        ' みたいにはできないけど……とりあえず声かけてみよう！',
      ]);
      await urara.say_and_wait('あの、大丈夫？どこか具合悪いの？');
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……あ、ウララ……うん、心配しないで。大丈夫……」',
      ]);
      await urara.say_and_wait(
        'でも顔、つらそう！このあとライブだよ。本当に大丈夫？',
      );
      await urara.say_and_wait(
        '無理しないでね？ウララ、ついてるから、笑顔に戻るまで——',
      );
      await era.printAndWait([urara.uma_sex_title, 'A「今は触らないで！」']);
      await urara.say_and_wait('……えっ？痛い……！');
      await urara.print_and_wait([
        '伸ばした手が、',
        urara.uma_sex_title,
        'の力で払いのけられた。はじかれた手の甲に、じりじりとした熱が広がる。',
      ]);
      await urara.print_and_wait([
        '顔を上げると、いつもニコニコしている',
        urara.uma_sex_title,
        'なのに、今ウララに向けているのは、迷って悲しい顔だった。',
      ]);
      await urara.print_and_wait([
        'こんな顔に、どう向き合えばいいんだろう。でも今ここで離れたら、',
        urara.sex,
        'がもっと傷つくだけだ。',
      ]);
      await urara.print_and_wait([
        'やっぱり、離れちゃだめ。唇を噛んで、赤く腫れて痛い右手を隠し、',
        urara.sex,
        'のそばにしゃがみ込んで、',
        urara.sex,
        'の続きを待った。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「笑えるわけないでしょ……！」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「やっとG1に出られたのに、わたしも舞台の真ん中に立ちたかった！せっかくの機会なのに、こんなに弱いなんて……」',
      ]);
      await urara.print_and_wait(
        '人が悲しんでるときは、先に本音を聞き終わる。お母さんも、ずっとそう教えてくれた。',
      );
      await urara.print_and_wait([
        '今なら、',
        urara.sex,
        'も少し楽になれるかな。でもこの横顔、どこかで見た気がする。これ、どんな顔だっけ。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「ごめん……ウララ、わざとじゃない……でも、本当に笑えないんだ……」',
      ]);
      await urara.say_and_wait(
        'ううん、ウララ、全然痛くないよ！あなたは本当に大丈夫？',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……ウララのどこが痛くないの。顔、泣きそうになってるよ……」',
      ]);
      await urara.say_and_wait(
        'え？ほんと……ちがう！ウララ、本当に大丈夫だよ！',
      );
      await urara.print_and_wait([
        'たしかに痛い……でも、たぶんそんなに痛くない！でもウララの顔を見て、',
        urara.sex,
        'の震えていた口角が、少しずつ上がっていった。',
      ]);
      await urara.print_and_wait(
        'ウララの目的は果たせた。でも、泣き顔を笑いに変えるレベルだった？ウララの顔……',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「そういう意味じゃないよ……でも大丈夫。舞台に上がったら、ちゃんと笑顔になれるから」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「ウララはいつも話を聞いてくれるね。今回もありがとう。だから舞台に上がる前に、表情も整えてね！」',
      ]);
      await urara.say_and_wait('うん！大丈夫！何回でも、ウララ、話聞くよ！');
      await urara.print_and_wait([
        '礼を言ってから自分から立ち上がり、やっと落ち着いた',
        urara.sex,
        'が、ウララの手もそっと引いて立たせてくれた。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「そうだね。何回でも……次は絶対……真ん中に立つ！」',
      ]);
      await era.printAndWait([urara.uma_sex_title, 'A「絶対……次がある……！」']);
      await urara.print_and_wait([
        '「あとでね」と言ってから、',
        urara.sex,
        'は何かを隠すように踵を返して去っていった。',
      ]);
      await urara.print_and_wait([
        '表向きはいつもの顔に戻ったのに、',
        urara.sex,
        'の背中は、活力を抜かれたみたいに薄かった。',
      ]);
      await urara.print_and_wait([
        urara.sex,
        'の脚は、長くしゃがんでいたせいかしびれていて、よろよろした歩き方が余計に「抜け殻」に見えた。',
      ]);
      await urara.print_and_wait([
        'ウララ、',
        urara.sex,
        'のあんなのは初めて見た。さっきの悲しすぎる顔も、今の落ちた背中も。',
      ]);
      await urara.print_and_wait([
        'でもやっとわかった。今の',
        urara.sex,
        'は、人生で最後の機会を逃したあとも、平気を装っているみたいだった……',
      ]);
      await urara.print_and_wait(
        '取り返しのつかないことが起きた気がする。ウララが敏感すぎるだけ？',
      );
      await urara.print_and_wait([
        'でも',
        urara.sex,
        'の言うとおり、このあと舞台だ。残りは終わったあとの時間で考えよう！',
      ]);
      await urara.print_and_wait([
        '頬を叩いて気を入れ直し、ウララも振り返って',
        urara.sex,
        'の背中を追い、一緒にライブの舞台裏へ走った。',
      ]);
      await urara.print_and_wait([
        '力強い足音とともに、先を歩く',
        urara.sex,
        'は、また元気そうに見えた。',
      ]);
      await urara.print_and_wait(
        'ウララの見間違い？ きっと敏感すぎただけ……うん、きっとそう……',
      );
      era.drawLine();
      await era.printAndWait([
        '今日のライブは順調だった。舞台裏から商店街と応援会のみんながいる客席へ回り、',
        you.get_colored_name(),
        ' はほっとした。',
      ]);
      await era.printAndWait([
        'そうだ。何着でも、どの位置でも、',
        urara.get_colored_name(),
        ' は一番いい笑顔をみんなに見せられる。',
      ]);
      await era.printAndWait([
        'だからみんなは ',
        urara.get_colored_name(),
        ' が好きなのだ。負けても、勝てなくても、元気に笑う',
        urara.sex,
        'が好きなのだ。',
      ]);
      await era.printAndWait([
        '毎回うまくいくとは限らないが、今の',
        urara.sex,
        'には、レースに勝つ実力がある。',
      ]);
      await era.printAndWait([
        '商店街の人A「……ウララ',
        urara.sex,
        '、本当によくがんばってるね。前の心配も、もう置いていいみたいだ」',
      ]);
      await era.printAndWait([
        '商店街の人B「そうだな。',
        urara.sex,
        'が楽しければいい、と思ってても、その気持ちに足を取られるだけだよな」',
      ]);
      await era.printAndWait([
        '商店街の人C「今のウララちゃんはもう成長したよ。ちょうど ',
        arim_kin,
        ' でも',
        urara.sex,
        'の笑顔が見たいしな」',
      ]);
      await era.printAndWait([
        '後ろでそっと耳を傾けていると、',
        urara.get_colored_name(),
        ' を支える面々も、ライブを見ながら何か話していた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の方針は、だんだん当たってきているようだ。続ければ、',
        urara.get_colored_name(),
        ' を支える人たちは、',
        urara.sex,
        'の前進を認めていく。',
      ]);
      await era.printAndWait([
        '困りごとが、気づかないうちにほどけていく……とりあえずこれを覚えておいて、帰りにこっそり ',
        urara.get_colored_name(),
        ' に知らせよう。',
      ]);
      await era.printAndWait([
        '商店街の人A「でもウララの最後の目標は ',
        arim_kin,
        ' らしいな。あのレースの選出、けっこう厳しいんだろ」',
      ]);
      await era.printAndWait(
        '商店街の人C「でも、わたしたちに手伝えることはないのかな。ウララちゃんを見てるだけじゃ、落ち着かないよ」',
      );
      await era.printAndWait(
        '商店街の人D「実は、ひとつ案があるんだ。前に商店街を盛り上げたときみたいに……」',
      );

      if (join_arim_kin_c) {
        await era.printAndWait(
          '商店街の人C「人は多いほうが力になる、だろ？ でもウララは一度選ばれてるし、まだそれ必要？」',
        );
        await era.printAndWait(
          '商店街の人D「心配しすぎかもしれないが、事故は避けたいだろ。あの子だしな……」',
        );
      }
      await era.printAndWait(
        'ん？ これは何の話だ。みんな、自分に隠して何かしているのか。',
      );
      await era.printAndWait([
        '直感は ',
        you.get_colored_name(),
        ' に、大事な話だと告げた。だが耳を寄せようとしたとき、顔を上げるとライブも終わりかけていた。',
      ]);
      await era.printAndWait([
        'みんなの話は気になるが、',
        urara.get_colored_name(),
        ' の様子をすぐ見るため、',
        you.get_colored_name(),
        ' は控室へ急いだ。',
      ]);
      await era.printAndWait([
        '舞台上の ',
        urara.get_colored_name(),
        ' の、気づきにくい薄い笑顔も、「',
        urara.sex,
        '」の頻繁な出現も、レース前に見たあの沈んだ',
        urara.child_sex_title,
        'も。',
      ]);
      await era.printAndWait(
        '今はみんなの内緒話まで、落ち着かない感じがする。どうした。最近、なぜこんなに敏感なのだ。',
      );
      await era.printAndWait(
        'いつか何かが起きる気がする。気のせいであってほしい……',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '少し、お話ししてもよろしいですか？',
      );
      await inner_urara.say_as_unknown_and_wait([
        'ところで、トレーナー',
        you.adult_sex_title,
        '（あなた）はご存じでしょう。',
        urara.uma_sex_title,
        'が走りで積み重ねた損傷は、治りにくいのです。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '生まれつきの体のつくりと、一部の体質のせいでもあり、今はまだ説明できない現象のせいでもあります。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'それに職業の競技者は、しばしば体の負荷を超えます。それで起きる傷は、普通ではほとんど治せません。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'なぜ急にこの話を、ですって？ 別に。ただふと、ウララは昔から運がいいと思っただけです。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'これからも',
        urara.sex,
        'を、しっかりお世話してください。',
        urara.sex,
        'まで、道に迷うひとりにしないで……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  febr_sta_lose: (() => {
    const title = '';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} join_arim_kin_c ウララがクラシック級有馬記念に出走したか
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} elm_sta エルムステークス（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
      elm_sta,
    ) => {
      await era.printAndWait([
        'レースが終わり、うっかり勝利を逃したせいか、',
        urara.get_colored_name(),
        ' は少し沈んでいた。',
      ]);
      await era.printAndWait([
        'だがその状態は長く続かなかった。みんなのことを思い出した小さな',
        urara.uma_sex_title,
        'は、すぐ耳を立て直して笑顔を取り戻した。',
      ]);
      await urara.say_and_wait(
        'こうでも、みんなは喜んでくれてるよ！このあと舞台もあるし、今は落ち込むときじゃない！',
      );
      await urara.say_and_wait([
        'あ、そうだ！',
        callname,
        '、次はどのレースに出るの？',
      ]);
      era.printButton('「そういえば……ウララ、次に走りたいレースはある？」', 1);
      await era.input();

      await urara.say_and_wait(
        'ん？勝てたらいいけど、走れるなら、どれでもいいよ——',
      );
      await era.printAndWait([
        '予想どおりの返事だ。',
        you.get_colored_name(),
        ' はもう ',
        urara.get_colored_name(),
        ' 自身にレースを選ばせてもいいと思っていたが、',
        urara.sex,
        'の性格では、結局はっきり選べそうにない。',
      ]);
      await era.printAndWait([
        'それに最終目標を「',
        arim_kin,
        '」にするなら、',
        urara.get_colored_name(),
        ' が選べる日程もかなり限られる。',
      ]);

      era.printButton(`「それなら……次は『エルムステークス』はどう？」`, 1);
      await era.input();

      await era.printAndWait(
        '最善の選択ではないかもしれないが、損得を量ったうえで、まずはこのレースを仮押さえするしかなかった。',
      );
      await urara.say_and_wait([
        'うん、わかった！商店街と応援会のみんなに、次は ',
        elm_sta,
        ' だって言ってくる——',
      ]);

      era.printButton(
        `「ちなみに、本当に走るならみんなの駆けつけは大変だよ。『エルムステークス』は北海道だから」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'え？そうなの！？遠すぎる！でも大丈夫かも。みんな、どこからでもウララ見られるでしょ！',
      );
      await urara.say_and_wait(
        'みんながウララのこと思っててくれれば全然平気。だから当日は、なんとか勝つだけでいいんだよ！',
      );

      era.printButton(
        '「その前に、あとでライブがあるよ。みんな、ウララのかっこいいところを待ってるよ？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'わかった！じゃあウララ、ライブの準備してくる！',
        callname,
        ' は用事があったら先に行ってて！',
      ]);

      era.printButton(
        '「おう！じゃあ先に舞台裏へ行く。何かあったらすぐ連絡してくれよ！」',
        1,
      );
      await era.input();

      await urara.say_and_wait('はあい——');
      era.drawLine();
      await urara.print_and_wait([
        callname,
        ' と別れて、',
        you.sex,
        'が視界から消えるまで見送ってから、控室へ入った。',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          callname,
          ' が三歩ごとに振り返るの、なんだかかわいい。',
          callname,
          ' が子どもで、ウララがお母さんみたい。',
        ]);
        await urara.print_and_wait([
          '毎日あんなふうに ',
          callname,
          ' に見てもらえたらいいな。でも、それってワガママかな？',
        ]);
      } else {
        await urara.print_and_wait([
          callname,
          '、いつものようにすぐ行っちゃった。もう一回振り返ってウララを見てくれたらいいのに……',
        ]);
        await urara.print_and_wait([
          'でも、ウララなんでそれが気になるんだろう。',
          callname,
          ' だって、ずっとウララを見てる暇はないよね？',
        ]);
      }
      await urara.print_and_wait([
        'やっぱり難しいな……ん？あそこの隅に、誰かが丸まってる。顔色も悪い……あ！',
        urara.sex,
        'だ……',
      ]);
      await urara.print_and_wait([
        'G1を取れなくて落ち込んでるのかな。負けず嫌いの',
        urara.sex,
        'がこんなに弱ってるの、ウララ、初めて見た……',
      ]);
      await urara.print_and_wait([
        'でもこうなったら、放っておけない。ウララは ',
        callname,
        ' みたいにはできないけど……とりあえず声かけてみよう！',
      ]);
      await urara.say_and_wait('あの、大丈夫？どこか具合悪いの？');
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……あ、ウララ……うん、心配しないで。大丈夫……」',
      ]);
      await urara.say_and_wait(
        'でも顔、つらそう！このあとライブだよ。本当に大丈夫？',
      );
      await urara.say_and_wait(
        '無理しないでね？ウララ、ついてるから、笑顔に戻るまで——',
      );
      await era.printAndWait([urara.uma_sex_title, 'A「今は触らないで！」']);
      await urara.say_and_wait('……えっ？痛い……！');
      await urara.print_and_wait([
        '伸ばした手が、',
        urara.uma_sex_title,
        'の力で払いのけられた。はじかれた手の甲に、じりじりとした熱が広がる。',
      ]);
      await urara.print_and_wait([
        '顔を上げると、いつもニコニコしている',
        urara.uma_sex_title,
        'なのに、今ウララに向けているのは、迷って悲しい顔だった。',
      ]);
      await urara.print_and_wait([
        'こんな顔に、どう向き合えばいいんだろう。でも今ここで離れたら、',
        urara.sex,
        'がもっと傷つくだけだ。',
      ]);
      await urara.print_and_wait([
        'やっぱり、離れちゃだめ。唇を噛んで、赤く腫れて痛い右手を隠し、',
        urara.sex,
        'のそばにしゃがみ込んで、',
        urara.sex,
        'の続きを待った。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「笑えるわけないでしょ……！」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「やっとG1に出られたのに、わたしも舞台の真ん中に立ちたかった！せっかくの機会なのに、こんなに弱いなんて……」',
      ]);
      await urara.print_and_wait(
        '人が悲しんでるときは、先に本音を聞き終わる。お母さんも、ずっとそう教えてくれた。',
      );
      await urara.print_and_wait([
        '今なら、',
        urara.sex,
        'も少し楽になれるかな。でもこの横顔、どこかで見た気がする。これ、どんな顔だっけ。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「ごめん……ウララ、わざとじゃない……でも、本当に笑えないんだ……」',
      ]);
      await urara.say_and_wait(
        'ううん、ウララ、全然痛くないよ！あなたは本当に大丈夫？',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……ウララのどこが痛くないの。顔、泣きそうになってるよ……」',
      ]);
      await urara.say_and_wait(
        'え？ほんと……ちがう！ウララ、本当に大丈夫だよ！',
      );
      await urara.print_and_wait([
        'たしかに痛い……でも、たぶんそんなに痛くない！でもウララの顔を見て、',
        urara.sex,
        'の震えていた口角が、少しずつ上がっていった。',
      ]);
      await urara.print_and_wait(
        'ウララの目的は果たせた。でも、泣き顔を笑いに変えるレベルだった？ウララの顔……',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「そういう意味じゃないよ……でも大丈夫。舞台に上がったら、ちゃんと笑顔になれるから」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「ウララはいつも話を聞いてくれるね。今回もありがとう。だから舞台に上がる前に、表情も整えてね！」',
      ]);
      await urara.say_and_wait('うん！大丈夫！何回でも、ウララ、話聞くよ！');
      await urara.print_and_wait([
        '礼を言ってから自分から立ち上がり、やっと落ち着いた',
        urara.sex,
        'が、ウララの手もそっと引いて立たせてくれた。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「そうだね。何回でも……次は絶対……真ん中に立つ！」',
      ]);
      await era.printAndWait([urara.uma_sex_title, 'A「絶対……次がある……！」']);
      await urara.print_and_wait([
        '「あとでね」と言ってから、',
        urara.sex,
        'は何かを隠すように踵を返して去っていった。',
      ]);
      await urara.print_and_wait([
        '表向きはいつもの顔に戻ったのに、',
        urara.sex,
        'の背中は、活力を抜かれたみたいに薄かった。',
      ]);
      await urara.print_and_wait([
        urara.sex,
        'の脚は、長くしゃがんでいたせいかしびれていて、よろよろした歩き方が余計に「抜け殻」に見えた。',
      ]);
      await urara.print_and_wait([
        'ウララ、',
        urara.sex,
        'のあんなのは初めて見た。さっきの悲しすぎる顔も、今の落ちた背中も。',
      ]);
      await urara.print_and_wait([
        'でもやっとわかった。今の',
        urara.sex,
        'は、人生で最後の機会を逃したあとも、平気を装っているみたいだった……',
      ]);
      await urara.print_and_wait(
        '取り返しのつかないことが起きた気がする。ウララが敏感すぎるだけ？',
      );
      await urara.print_and_wait([
        'でも',
        urara.sex,
        'の言うとおり、このあと舞台だ。残りは終わったあとの時間で考えよう！',
      ]);
      await urara.print_and_wait([
        '頬を叩いて気を入れ直し、ウララも振り返って',
        urara.sex,
        'の背中を追い、一緒にライブの舞台裏へ走った。',
      ]);
      await urara.print_and_wait([
        '力強い足音とともに、先を歩く',
        urara.sex,
        'は、また元気そうに見えた。',
      ]);
      await urara.print_and_wait(
        'ウララの見間違い？ きっと敏感すぎただけ……うん、きっとそう……',
      );
      era.drawLine();
      await era.printAndWait([
        '今日のライブは順調だった。舞台裏から商店街と応援会のみんながいる客席へ回り、',
        you.get_colored_name(),
        ' はほっとした。',
      ]);
      await era.printAndWait([
        'そうだ。何着でも、どの位置でも、',
        urara.get_colored_name(),
        ' は一番いい笑顔をみんなに見せられる。',
      ]);
      await era.printAndWait([
        'だからみんなは ',
        urara.get_colored_name(),
        ' が好きなのだ。負けても、勝てなくても、元気に笑う',
        urara.sex,
        'が好きなのだ。',
      ]);
      await era.printAndWait([
        '毎回うまくいくとは限らないが、今の',
        urara.sex,
        'には、レースに勝つ実力がある。',
      ]);
      await era.printAndWait([
        '商店街の人A「……ウララ',
        urara.sex,
        '、本当によくがんばってるね。前の心配も、もう置いていいみたいだ」',
      ]);
      await era.printAndWait([
        '商店街の人B「そうだな。',
        urara.sex,
        'が楽しければいい、と思ってても、その気持ちに足を取られるだけだよな」',
      ]);
      await era.printAndWait([
        '商店街の人C「今のウララちゃんはもう成長したよ。ちょうど ',
        arim_kin,
        ' でも',
        urara.sex,
        'の笑顔が見たいしな」',
      ]);
      await era.printAndWait([
        '後ろでそっと耳を傾けていると、',
        urara.get_colored_name(),
        ' を支える面々も、ライブを見ながら何か話していた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の方針は、だんだん当たってきているようだ。続ければ、',
        urara.get_colored_name(),
        ' を支える人たちは、',
        urara.sex,
        'の前進を認めていく。',
      ]);
      await era.printAndWait([
        '困りごとが、気づかないうちにほどけていく……とりあえずこれを覚えておいて、帰りにこっそり ',
        urara.get_colored_name(),
        ' に知らせよう。',
      ]);
      await era.printAndWait([
        '商店街の人A「でもウララの最後の目標は ',
        arim_kin,
        ' らしいな。あのレースの選出、けっこう厳しいんだろ」',
      ]);
      await era.printAndWait(
        '商店街の人C「でも、わたしたちに手伝えることはないのかな。ウララちゃんを見てるだけじゃ、落ち着かないよ」',
      );
      await era.printAndWait(
        '商店街の人D「実は、ひとつ案があるんだ。前に商店街を盛り上げたときみたいに……」',
      );

      if (join_arim_kin_c) {
        await era.printAndWait(
          '商店街の人C「人は多いほうが力になる、だろ？ でもウララは一度選ばれてるし、まだそれ必要？」',
        );
        await era.printAndWait(
          '商店街の人D「心配しすぎかもしれないが、事故は避けたいだろ。あの子だしな……」',
        );
      }
      await era.printAndWait(
        'ん？ これは何の話だ。みんな、自分に隠して何かしているのか。',
      );
      await era.printAndWait([
        '直感は ',
        you.get_colored_name(),
        ' に、大事な話だと告げた。だが耳を寄せようとしたとき、顔を上げるとライブも終わりかけていた。',
      ]);
      await era.printAndWait([
        'みんなの話は気になるが、',
        urara.get_colored_name(),
        ' の様子をすぐ見るため、',
        you.get_colored_name(),
        ' は控室へ急いだ。',
      ]);
      await era.printAndWait([
        '舞台上の ',
        urara.get_colored_name(),
        ' の、気づきにくい薄い笑顔も、「',
        urara.sex,
        '」の頻繁な出現も、レース前に見たあの沈んだ',
        urara.child_sex_title,
        'も。',
      ]);
      await era.printAndWait(
        '今はみんなの内緒話まで、落ち着かない感じがする。どうした。最近、なぜこんなに敏感なのだ。',
      );
      await era.printAndWait(
        'いつか何かが起きる気がする。気のせいであってほしい……',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '少し、お話ししてもよろしいですか？',
      );
      await inner_urara.say_as_unknown_and_wait([
        'ところで、トレーナー',
        you.adult_sex_title,
        '（あなた）はご存じでしょう。',
        urara.uma_sex_title,
        'が走りで積み重ねた損傷は、治りにくいのです。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '生まれつきの体のつくりと、一部の体質のせいでもあり、今はまだ説明できない現象のせいでもあります。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'それに職業の競技者は、しばしば体の負荷を超えます。それで起きる傷は、普通ではほとんど治せません。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'なぜ急にこの話を、ですって？ 別に。ただふと、ウララは昔から運がいいと思っただけです。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'これからも',
        urara.sex,
        'を、しっかりお世話してください。',
        urara.sex,
        'まで、道に迷うひとりにしないで……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_95_14: (() => {
    const title = 'ファン感謝祭！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} join_arim_kin_c ウララがクラシック級有馬記念に出走したか
     */
    const f = async (urara, inner_urara, you, callname, join_arim_kin_c) => {
      await era.printAndWait([
        '客席の端に立ち、',
        you.get_colored_name(),
        ' はいつものように、グラウンドの向こうからふらふらと寄ってくる小さな',
        urara.uma_sex_title,
        'を待っていた。',
      ]);
      await era.printAndWait([
        '今日はファン感謝祭。',
        urara.get_colored_name(),
        ' は余った活力を活かし、みんなの声援の中でいろいろな競技に出ていた。',
      ]);
      await era.printAndWait([
        'だが考えはよくても、実行は考えどおりにはいかない。目の前の、もうすぐ倒れそうな小さな',
        urara.uma_sex_title,
        'が、その証拠だ。',
      ]);
      await urara.say_and_wait([
        'ふう、ふう……',
        callname,
        '！終わったよ……タイヤ引き！最下位だったけど——！',
      ]);
      await urara.say_and_wait(
        'あはは～トレーニングでも何度もやってるのに、大きいタイヤ、やっぱり重いよ！',
      );

      era.printButton('「うん、お疲れ。見てたよ」', 1);
      await era.input();

      await era.printAndWait([
        '実際、タイヤ引きだけではない。',
        urara.get_colored_name(),
        ' はこの一連で、ほとんど3着以内に入れていない。',
      ]);
      await era.printAndWait([
        '自分のファン感謝祭でも、小さな',
        urara.uma_sex_title,
        'は',
        urara.sex,
        'の「本番以外では勝てない」といういつもの法則を発揮していた。',
      ]);
      await urara.say_and_wait(
        'でも、まだ勝てなくても、みんなと走るの、やっぱり楽しいね！',
      );
      await era.printAndWait([
        '顔の汗を拭き、',
        urara.get_colored_name(),
        ' はさっき一緒に走った',
        urara.uma_sex_title,
        'ファンたちに手を振り、そのままヘアバンドとゼッケンを外した。',
      ]);
      await era.printAndWait([
        '四月の陽気はまだ暖かいとは言えないが、走り終えたばかりの ',
        urara.get_colored_name(),
        ' には、それでも少し蒸し暑かった。',
      ]);
      await era.printAndWait([
        '汗で濡れたピンクの長い髪がほどけると、小さな',
        urara.uma_sex_title,
        'からは、青春の匂いを含んだ不思議な香りが漂った。',
      ]);
      await era.printAndWait([
        '汗で張りついた体操服の端が、',
        urara.teen_sex_title,
        'のまだ蕾のような体に食い込み、',
        urara.sex,
        'の幼いのに肉感のある曲線を描いていた。',
      ]);
      await era.printAndWait([
        'ゼッケンを外すと、陽の光で水を吸って半透明になった生地が、',
        urara.teen_sex_title,
        'の少し色っぽい輪郭をぼんやり透かしていた……',
      ]);
      await era.printAndWait([
        '周囲の熱い視線と、動機の怪しいカメラを受けながら、',
        you.get_colored_name(),
        ' は黙って、無防備な小さな',
        urara.uma_sex_title,
        'に上着をかけた。',
      ]);

      urara.say([
        'え？ウララ、今全身汗だよ？ ',
        callname,
        ' の上着、汚れちゃう！',
      ]);
      era.printButton(
        '「大丈夫。まだそんなに暖かくないし、ウララが風邪をひいたら困るよ」（好感+10）',
        1,
      );
      era.printButton(
        '「それはだめだ。担当の体を、他人に勝手に見させるわけにはいかない」（恋慕+2）',
        2,
      );
      const ret = await era.input();
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          'そばで無意識に色気をこぼす「小さな大人」に、跳ねる心臓を押さえ、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' に首を振った。',
        ]);
        await era.printAndWait(
          'ファンに悪気がなくても、こんな人数の前で防備がゼロでは、ひとりになったときどうするつもりだ……',
        );
        await urara.say_and_wait([
          'え？ウララの体がほかの人に見えちゃうから、',
          callname,
          '、焦った……？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の返事を聞くと、わざと柔らかい体を預け、小さな',
          urara.uma_sex_title,
          'は赤い頬で、恥ずかしそうに、色っぽく上着の襟元を擦りつけた。',
        ]);
        await urara.say_and_wait([
          '大丈夫だよ。ウララ、大事な人にしか体見せないよ？ それに……ここ、全部 ',
          callname,
          ' の匂いだね～',
        ]);
        await era.printAndWait([
          '小さな恋人のかわいい笑顔を見ないようにし、今すぐ',
          urara.sex,
          'を舞台裏へ連れていく衝動をこらえ、',
          you.get_colored_name(),
          ' は固くなって話題をレースへ戻した。',
        ]);
      } else {
        await urara.say_and_wait([
          'そうなの？えへへ～全然気づかなかった！でもウララには ',
          callname,
          ' がいるから、心配いらないよ！',
        ]);
        await era.printAndWait([
          '乱れた鼓動をそっと抑え、',
          you.get_colored_name(),
          ' は小さな',
          urara.uma_sex_title,
          'の頭を軽く叩いた。危ない。自分が ',
          urara.get_colored_name(),
          ' を好きになりかけたと思った。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' を露骨な視線から守ること以前に、トレーナーまで担当の無防備な姿を好きになっては、最悪だ。',
        ]);
        await era.printAndWait([
          '今にも抱きついてきそうな ',
          urara.get_colored_name(),
          ' と距離を保ち、',
          you.get_colored_name(),
          ' は',
          urara.sex,
          'と、このあとの進行を話しはじめた。',
        ]);
      }
      era.printButton(
        '「そういえば、このあともまだ試合があるよね。大丈夫？ もう少し休む？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' の体がいくら丈夫でも、連戦の負担は大きい。だから ',
        you.get_colored_name(),
        ' は',
        urara.sex,
        'に、もう少し休むことを勧めた。',
      ]);
      await urara.say_and_wait(
        'いいよ。みんな待ってるし、今日はファン感謝祭だし。ウララ、いっぱい走らせて！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の心配はわかっていても、出る準備をした小さな',
        urara.uma_sex_title,
        'は笑いながら、上着をまた ',
        you.get_colored_name(),
        ' の手へ押し込んだ。',
      ]);
      await urara.say_and_wait(
        '次は『ダートの試合』だよ？ すごく汚れるけど、ウララ、絶対怪我しない！',
      );
      await urara.say_and_wait([
        'ダートだから、ウララが走り終わったら、',
        callname,
        '、もう上着をかけないでね？',
      ]);
      await era.printAndWait([
        'それから再びコースへ駆け出した ',
        urara.get_colored_name(),
        ' は、手を振るたびに',
        urara.sex,
        'を支えるみんなの歓声を呼んだ。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' が競技に出るたび、ファンは熱くなる。何度負けても諦めない',
        urara.sex,
        'の姿を、みんなは好いているらしい。',
      ]);
      await era.printAndWait([
        '今思うと、ことさらに言わなくても、',
        urara.sex,
        'は有馬記念に必要なファン支持を、自然にクリアするのかもしれない。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'まだ、ご心配なのですね。みんなのウララへの好意は熱を帯びていますが、',
        urara.sex,
        'はまだ何もわかっていない、と？',
      ]);
      await era.printAndWait([
        '突然遅くなった灰白い世界の中、',
        you.get_colored_name(),
        ' のそばに、もう「担当の保護者」と言ってもいいほど聞き慣れた声がまた届いた。',
      ]);

      era.printButton(
        '「心配しないわけがない。もともと泥だらけの道だ。それに、自信もある」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'ええ。今の真剣なウララを見ていると、わたくしまで余計な自信が湧いてしまいます。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'それに、',
        urara.sex,
        'はついに勝ちそうです。非公式戦で本気を出すのは、今日が初めてではありませんか。',
      ]);
      await era.printAndWait([
        'スローの中、泥水の跳ねる重い馬場で歯を食いしばって逃げを守る小さな',
        urara.uma_sex_title,
        'を見て、厳しい',
        urara.sex,
        'さえ、少し口角を上げた。',
      ]);
      await era.printAndWait([
        'だが考え込むようにスタンドを見回したあと、',
        urara.teen_sex_title,
        'の表情はまた真剣な雲に覆われ、踵を返して去っていった。',
      ]);

      era.printButton(
        '「今日はそんなに急いで、もう少し待たないのか。せめてウララが勝つところを見ていけ」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '申し上げることはありません。『誤った好意は、悪意より扱いにくい』。今日は、それだけをお伝えしに来ました。',
      );
      await era.printAndWait([
        '振り返らず、関係なさそうな言葉で ',
        you.get_colored_name(),
        ' に答え、ピンクに灰を混ぜた ',
        urara.get_colored_name(),
        ' は、前と同じように跡形もなく消えた。',
      ]);
      await era.printAndWait([
        '止まった時間が再生され、跳ねた泥が落ちるころ、',
        urara.get_colored_name(),
        ' が一着でゴール板を駆け抜けた。',
      ]);
      await era.printAndWait([
        'コースの熱い実況と観客の歓声が重なり、全力の小さな',
        urara.uma_sex_title,
        'は、また会場を盛り上げた。',
      ]);
      await urara.say_and_wait(
        'みんな——これからもがんばって走るよ、勝ち続けるよ——！',
      );
      await era.printAndWait('観客たち「おおおおお——！！」');
      if (join_arim_kin_c) {
        await era.printAndWait([
          'これでファンが増え続ければ、有馬を超える夢にも一歩近づく。',
          urara.get_colored_name(),
          ' が本気になったのは、たぶんそのためだ。',
        ]);
        await era.printAndWait([
          'だが「',
          urara.sex,
          '」が去る前に言ったとおり、観客の反応をよく見ると、',
          you.get_colored_name(),
          ' も今の空気の違和に気づいた。',
        ]);
        await era.printAndWait([
          '一部の観客「ウララ、相変わらずかわいいな……そういえば',
          urara.sex,
          '、有馬記念、もう一度出てるよな？」',
        ]);
        await era.printAndWait(
          '一部の観客「ファン投票のおかげだよな。でもウララに、二度目の有馬のチャンスなんてあるのか？」',
        );
        await era.printAndWait(
          '一部の観客「出られれば十分でしょ。ウララが楽しければいいんじゃない？」',
        );
        await era.printAndWait(
          '一部の観客「うん……それなら、ウララの商店街の応援団、何かやってるらしいよ。見に行かない……」',
        );
        await era.printAndWait(
          'ちっ。つまり今でも、かなりの支持者が「ウララも勝ちたい」を本気で見ていない、ということだ。',
        );
      } else {
        await era.printAndWait([
          'これでファンが増え続ければ、有馬に出る夢にも一歩近づく。',
          urara.get_colored_name(),
          ' が本気になったのは、たぶんそのためだ。',
        ]);
        await era.printAndWait([
          'だが「',
          urara.sex,
          '」が去る前に言ったとおり、観客の反応をよく見ると、',
          you.get_colored_name(),
          ' も今の空気の違和に気づいた。',
        ]);
        await era.printAndWait(
          '一部の観客「ウララ、人気だね。やっぱりかわいいからだよな——」',
        );
        await era.printAndWait([
          '一部の観客「',
          urara.sex,
          '、有馬記念に出たいって言ってたよな。こんなに人気なら、ファン投票を使えば出られるかもな」',
        ]);
        await era.printAndWait([
          '一部の観客「投票か……わたしも',
          urara.sex,
          'に入れると思う。だって',
          urara.sex,
          '、かわいいし、',
          urara.sex,
          'の有馬も見たいし」',
        ]);
        await era.printAndWait(
          '一部の観客「思ったとおりだな。それなら、ウララの商店街の応援団、何かやってるらしいよ。見に行かない……」',
        );
        await era.printAndWait([
          'なぜだろう。',
          you.get_colored_name(),
          ' は今でも、多くの支持者が好きだからこそ ',
          urara.get_colored_name(),
          ' を「叶えてあげている」ように感じる。',
        ]);
      }
      await era.printAndWait(
        'それに、この会話、どこかで聞いた気がする。みんな笑顔なのに、胸の不安だけが大きくなっていく……',
      );
      await urara.say_and_wait([
        callname,
        '、',
        callname,
        '！みんな、ウララと写真撮りたいって！三まで数えて一緒に撮るから、カメラお願い——！',
      ]);
      await era.printAndWait([
        '担当の呼び声が、',
        you.get_colored_name(),
        ' の思考を切った。嬉しすぎて顔の泥も拭かず、',
        urara.get_colored_name(),
        ' はカメラを持って興奮しながら ',
        you.get_colored_name(),
        ' へ走ってきた。',
      ]);

      era.printButton('「あ、うん、任せて！」', 1);
      await era.input();

      await era.printAndWait([
        '最後に数人の観客の背中をちらりと見て、',
        you.get_colored_name(),
        ' は仕方なく首を振り、それから笑いながら ',
        urara.get_colored_name(),
        ' のカメラを受け取った——',
      ]);
      await era.printAndWait([
        'とにかく、',
        urara.get_colored_name(),
        ' の真剣な活躍の中で、ファン感謝祭はこうして無事に幕を閉じた。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_95_15: (() => {
    const title = '応援会・暴走！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} join_arim_kin_c ウララがクラシック級有馬記念に出走したか
     * @param {number|false} febr_sta_rank フェブラリーステークスの着順。false は未出走
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} febr_sta フェブラリーステークス（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      join_arim_kin_c,
      febr_sta_rank,
      arim_kin,
      febr_sta,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        'あなたは、ウララを必ず守ると仰いましたね。ご心配なく。トレーナー',
        you.adult_sex_title,
        '（あなた）を疑っているわけではございません',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'ただ、ときには体を',
        urara.sex,
        'の前に置けても、傷ついた心を、あなたはどう直すのですか。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '商店街の面々から渡されたチラシを見て、',
        you.get_colored_name(),
        ' は目の前が真っ暗になった。',
      ]);

      era.printButton('「これが、みんなが思いついた方法なのか？」', 1);
      await era.input();

      await era.printAndWait([
        '商店街の人「ん？どうしたんだい、トレーナーの',
        you.sex_code === 1 ? 'お兄さん' : 'お姉さん',
        '。何か問題でも？ウララ自身も配ってるよ？」',
      ]);
      await era.printAndWait([
        '薄い紙を震える手で握り、',
        you.get_colored_name(),
        ' はその場で爆発しそうな気持ちを必死に抑えた。',
      ]);
      await era.printAndWait([
        'チラシに印刷されていたのは「',
        urara.get_colored_name(),
        ' の有馬に投票を」。トレーナーとしての ',
        you.get_colored_name(),
        ' の気持ちは、急な頭痛と同じように弾けた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、善意からの行動だとわかっているから口を挟みにくい。連れてこられた ',
        urara.get_colored_name(),
        ' も、たぶん状況をまったくわかっていない。',
      ]);
      await era.printAndWait([
        'だが結局、禁止ではないにせよ、ほかの',
        urara.uma_sex_title,
        'の努力を否定するに等しいやり方は、間違っている。',
      ]);

      if (join_arim_kin_c) {
        await era.printAndWait([
          '前回もこんなやり方だったのか。しかも今回は ',
          urara.get_colored_name(),
          ' まで呼んで、一緒にやらせている。',
        ]);
        await era.printAndWait([
          'おじさんおばさんたちよ。',
          urara.get_colored_name(),
          ' のトレーナーは、みんなの気持ちがわからないわけではない。だが、これは売り出しの販促ほど単純な話じゃない……',
        ]);
      }
      era.printButton('「……ウララは今、どこにいる？」', 1);
      await era.input();

      await era.printAndWait([
        '商店街の人「ん？通りを探せば見えると思うけど……ちょっと、',
        you.sex_code === 1 ? 'お兄さん' : 'お姉さん',
        '、どこへ急いでるんだい？」',
      ]);

      era.printButton(
        '「ごめん！急用を思い出した。荷物はここに置いておく、戻ったら取る！」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'さっき買った野菜と手のチラシを置き、',
        you.get_colored_name(),
        ' は店主に急いで挨拶して、商店街のイベント日の人波へ割り込んだ。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の走りが上向くにつれ、この通りも昔の寂れから抜け出した。だが今の賑わいは、',
        you.get_colored_name(),
        ' にとって思いがけない邪魔になった。',
      ]);
      await era.printAndWait([
        '一番人が厚い場所で、',
        you.get_colored_name(),
        ' は遠くに、行き交う人に囲まれた桜ピンクのかたまりを見つけた。',
      ]);
      await era.printAndWait([
        '安心は一瞬も続かなかった。人混みの中に近づいてくるもうひとりを見て、落ち着いたはずの心が谷底へ落ちた。',
      ]);
      await era.printAndWait([
        'あの子は、',
        urara.get_colored_name(),
        ' と「',
        febr_sta,
        '」で競った友だちだ。だが今の',
        urara.sex,
        'の両脚は、重い包帯で巻かれていた。',
      ]);
      await era.printAndWait([
        '誰からも忘れられたように、沈んだ顔の',
        urara.sex,
        'は傷だらけの脚を引きずりながら、驚くほど軽く人混みをすり抜けた。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の前に立ち止まった',
        urara.sex,
        'の、力なく下がった手には、しわくちゃのチラシが握られていた……',
      ]);
      await era.printAndWait([
        'これから起きることに気づいた ',
        you.get_colored_name(),
        ' は、',
        urara.get_colored_name(),
        ' を囲む人垣へ飛び込もうとした。だが冷たい人波に流され、かえって遠ざかった。',
      ]);
      await you.say_and_wait(
        '待て、先に話すな。こうなるべきじゃない。避けられないとしても、ちょっと待って——',
      );
      await urara.say_and_wait(
        '——あ、久しぶり！ウララ、学校であなた、ずっと見てなかったよ。最近、何してたの？',
      );
      await urara.say_and_wait('あ、それに脚……怪我したの？いつから……');
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……大丈夫。たいしたことないよ。でもウララ、これは何……『',
        arim_kin,
        '』に出るため？」',
      ]);
      await era.printAndWait([
        'ウララの熱を冷たく遮り、複雑な顔の友だちはチラシを小さな',
        urara.uma_sex_title,
        'の前に掲げた。',
      ]);
      await urara.say_and_wait([
        'ん？そうなの？みんな、ウララの ',
        arim_kin,
        ' に関係あるって言うから、手伝いに来たんだ！',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「',
        urara.get_colored_actual_name(),
        '、やっぱり自分が何をしてるかわかってないんだ。冗談じゃない……」',
      ]);
      await urara.say_and_wait(
        'えーと、ウララもよくわからないけど、みんなのチラシ配りを手伝ってる、だよね？',
      );
      await urara.say_and_wait(
        'え？どうしたの？本当に大丈夫？顔色、すごく悪いよ……',
      );
      await era.printAndWait([
        '失望から絶望、崩壊まで数秒だった。負の感情に任せた',
        urara.teen_sex_title,
        'は、近づこうとした友だちを強く押しのけた。',
      ]);
      await era.printAndWait(
        '次に来たのは、大きな平手の音と、ヒステリーのように制御を失った叱責だった。',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A「ふざけないで！お願いだから、もうそんな子どもみたいなことしないで！この紙、ちゃんと見て！自分が何してるかわかってるの？！」',
      ]);
      await era.printAndWait([
        '友だちの突然の暴力に、',
        urara.get_colored_name(),
        ' は手の中で散らかった紙と一緒に地面へ座り込んだ。',
      ]);
      await era.printAndWait([
        '信じられないように赤く熱い頬を押さえ、小さな',
        urara.uma_sex_title,
        'の目には、途方に暮れた涙がたまっていた。',
      ]);
      await era.printAndWait([
        '自分が何を間違えたかもまだわからないのに、決壊した感情は、言葉を失った',
        urara.sex,
        'に弁解の隙間さえ与えなかった。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「みんな、出たいレースのために……勝ちたいレースのためにがんばってる！全部を賭けてるんだよ！」',
      ]);
      await era.printAndWait([
        '泣きながら叫び、',
        urara.teen_sex_title,
        'の失意と悔しさが底から溢れた。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「なのに今、ウララは……人を使って、楽に夢を叶えようとしてる……」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「知らないって言えばいい。でもそれじゃあ……自分を燃やしてるみんなは、何なの！」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「ウララは自分のためなら詐欺師にだってなれるんでしょ……なら、もうレースになんか出なきゃいい！」',
      ]);
      await urara.say_and_wait('……ちがう……ウララ、ちがうよ……ごめん……でも……');
      await era.printAndWait([
        '抑えられた嗚咽は、友だちの糾弾の中で小さな啜り泣きになり、小さな',
        urara.uma_sex_title,
        'の無防備な心は、もう目尻の涙を止められなかった。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は弁解したかった。だが衝撃でかすれた喉は、まともな言葉を一つも出せなかった。',
      ]);
      await era.printAndWait([
        '絶望的な膠着の中、傷ついた',
        urara.teen_sex_title,
        'が先に涙を拭き、黙って ',
        urara.get_colored_name(),
        ' へ一歩踏み出した……',
      ]);
      await era.printAndWait([
        '突然すぎて誰も止められなかった見物人の輪をやっと抜け、',
        you.get_colored_name(),
        ' は小さな',
        urara.uma_sex_title,
        'へ伸びたその手首を掴んだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の急な動きに驚き、理性を取り戻しつつある',
        urara.uma_sex_title,
        'は罪悪感とともに手を引き、不器用な傷脚を元の位置へずらした。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「ごめんなさい。あなた、ウララのトレーナー？ わたしは',
        urara.sex,
        'を起こそうとしただけ……」',
      ]);

      era.printButton(
        '「落ち着いたらよく考えろ。今のあなたは、ウララにとって周囲の見物人と同じくらい怖い」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '怒りを必死に抑え、',
        you.get_colored_name(),
        ' は体でふたりの間に入り、震える ',
        urara.get_colored_name(),
        ' の前へ後ろ手を伸ばした。',
      ]);

      era.printButton(
        '「その気持ちがわからないわけじゃない。だが今、友だちを傷つけているあなたは何だと思う」',
        1,
      );
      await era.input();
      era.printButton(
        `「関係のない友だちに八つ当たりする資格はない。今すぐウララから離れてくれ！」（好感+20）`,
        1,
      );
      era.printButton(
        `「${urara.sex}が受け止めてくれるからといって、${urara.sex}にぶつけていいわけじゃない。騒ぎ足りたら、今すぐウララから離れろ！」（恋慕+5）`,
        2,
      );
      const ret = await era.input();

      await era.printAndWait(
        '目の前の大人の、抑えきれない怒りに圧倒されたのか、商店街の人たちの駆けつける足音を聞いたのか。',
      );
      await era.printAndWait([
        '自分の衝動で壊れ、もう戻せない友情を前に、落ち込む',
        urara.teen_sex_title,
        'はやっと、かすれた声で本来の目的を言った。',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「……ごめん。トレセンを出る前に、ウララに会いたかっただけなのに、こんなことになって……」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「楽しいことを言って、ちゃんと別れを告げるつもりだった。本当に、ごめん……」',
      ]);
      await era.printAndWait([
        'そう言い終え、',
        urara.teen_sex_title,
        'は重い体で踵を返し、びっこを引く背中は、少しずつ散らされていく人混みの中へ消えた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の腕に力なく寄りかかり、小さな',
        urara.uma_sex_title,
        'は今、背中を追うことも、引き止める言葉も見つからなかった。',
      ]);
      await urara.say_and_wait([
        callname,
        '、',
        urara.sex,
        '……',
        urara.sex,
        '、もしかして……',
      ]);
      await era.printAndWait([
        'まだまともな言葉にはならないが、',
        urara.get_colored_name(),
        ' はそれでも声を出し、友だちの去る前の言葉を ',
        you.get_colored_name(),
        ' に確かめた。',
      ]);

      era.printButton(
        `「……うん。${urara.sex}の脚は、もう走れない。${urara.sex}には……夢を叶える次はない」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '残念だが、今回の「もう会えない」は嫌な冗談ではない。真相が目の前にある以上、',
        you.get_colored_name(),
        ' も、ありもしない希望を作ることはできなかった。',
      ]);
      if (febr_sta_rank) {
        if (febr_sta_rank === 1) {
          await urara.say_and_wait([
            'じゃあ……',
            callname,
            '、ウララが……',
            urara.sex,
            'の……ウララが……',
          ]);
          await urara.say_and_wait([
            '友だちの笑顔を奪ったのは……ウララが自分の手で……',
            urara.sex,
            'の幸せを……',
          ]);
        } else {
          await urara.say_and_wait([
            callname,
            '……ウララなの……さっきはウララが……',
          ]);
          await urara.say_and_wait([
            'ウララが……友だちの笑顔を汚した……今まで、いったい……',
          ]);
        }
      }
      era.printButton('「ウララ、もう言わないで。あなたのせいじゃない！」', 1);
      await era.input();

      await urara.say_and_wait([
        'でも、それでも……',
        urara.sex,
        'の笑顔、',
        urara.sex,
        'の幸せ……なんで',
        urara.sex,
        'がこんな目に……',
      ]);
      await urara.say_and_wait(
        'ウララがしてきた全部……間違ってたの……どうしたら、みんなは……',
      );
      await urara.say_and_wait('それなら……ウララの走り……わたし……レースも……');
      await era.printAndWait([
        '血を吐くように、',
        urara.get_colored_name(),
        ' の今の一言一言は、自分を鞭打つ否定だった。',
      ]);
      await era.printAndWait([
        'それで血を流しているのは ',
        urara.get_colored_name(),
        ' だけではない。',
        you.get_colored_name(),
        ' も、',
        urara.get_colored_name(),
        ' のために来たその場の誰もが、小さな',
        urara.uma_sex_title,
        'の壊れた声の中で、ほとんど息ができなかった。',
      ]);
      await era.printAndWait([
        'みんな、これが',
        urara.sex,
        'のせいではないとわかっている。希望を届けたい春風が、誰かを傷つけたいはずもない。',
      ]);
      await era.printAndWait([
        'だが今の ',
        you.get_colored_name(),
        ' にできるのは、',
        urara.get_colored_name(),
        ' を胸に隠し、しばらく遠慮なく悲しみを出させることだけだった。',
      ]);
      await era.printAndWait([
        'この、他人から来た悲しみは、もともと優しい',
        urara.sex,
        'のものではない。いわゆる「善意」を勝手に',
        urara.sex,
        'へ押しつけた大人たちのものだ。',
      ]);
      await era.printAndWait([
        '商店街の人「',
        you.sex_code === 1 ? 'お兄さん' : 'お姉さん',
        '、今はどうしたらいい……」',
      ]);

      era.printButton(
        '「……とにかく、さっき何をしていたか、何をしたかに関係なく、今は全部止めよう……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '胸の中でまだ悲しんでいる担当を抱きしめ、',
        you.get_colored_name(),
        ' も自責の中で目を閉じた。',
      ]);
      await era.printAndWait([
        'もう少し早く着いていれば、',
        urara.get_colored_name(),
        ' は……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '商店街の ',
        urara.get_colored_name(),
        ' 有馬宣伝の催しは、その日のうちに中止になった。',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' を連れてトレセンへ戻った。',
      ]);
      await era.printAndWait([
        '全力で ',
        urara.get_colored_name(),
        ' をなだめても、小さな',
        urara.uma_sex_title,
        'の心の折れた顔は、みんなの胸に深く残った。',
      ]);
      await era.printAndWait([
        'それまでの ',
        you.get_colored_name(),
        ' は、',
        urara.get_colored_name(),
        ' を「危険」から遠ざける可能性をいくらも考えていた。だがこの身に覚えのない災いは、それでも',
        urara.sex,
        'に降りかかった。',
      ]);
      await era.printAndWait([
        'なぜ ',
        urara.get_colored_name(),
        ' でなければならなかった。',
        urara.get_colored_name(),
        ' の心に何が残る。',
        urara.sex,
        'は、何を間違えた……',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'の心の傷を埋める方法が見つかるまで、眠れない人は多いだろう……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '……ご覧なさい。またひとりの希望が壊れました。変えると決める前、ウララはこんなこと、考えていませんでしたね？',
      );
      await inner_urara.say_as_unknown_and_wait([
        'ですが',
        urara.sex,
        'はまた、無理をして普段どおりを装うのでしょう。',
        urara.sex,
        'はウララですから。',
        urara.sex,
        'は、人に負担をかけたくないのです。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'だから物語が終わるまで、',
        urara.sex,
        'の心を少しずつ直すほかありません。ほかに道はございません……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'ですが物語は、これで終わりません。どうか、最後まで耐えてください……',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_19: (() => {
    const title = '「深夜のチャット」';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     * @param {PrintedSpan} r_call_u ライスシャワーのハルウララへの呼び方
     * @param {PrintedSpan} callname_61 ハルウララのキングヘイローへの呼び方
     * @param {PrintedSpan} h_call_u キングヘイローのハルウララへの呼び方
     */
    const f = async (
      urara,
      inner_urara,
      rice,
      halo,
      you,
      callname,
      call_30,
      call_61,
      r_call_u,
      callname_61,
      h_call_u,
    ) => {
      const urara_say_in_lines = (content) =>
        era.printAndWait(
          [
            '「',
            ...(Array.isArray(content) ? content : [content]),
            '」',
            urara.get_colored_name(),
          ],
          { align: 'right', color: urara.color },
        );
      era.drawLine({
        content: '【5月XX日「ウララ」と「ライスシャワー」10：32】',
      });
      await rice.say_and_wait([
        r_call_u,
        ' のほう、まだオンラインになってるみたい……起きてる？',
      ]);
      era.println();
      await urara_say_in_lines(
        'うん！最近ちょっと眠れなくて、気づくといつもこの時間になっちゃう！',
      );
      await urara_say_in_lines([
        'でももうこんな時間だよ。',
        call_30,
        ' のほう、何かあった？',
      ]);
      era.println();
      await rice.say_and_wait(['この前のこと、', r_call_u, '、まだつらい？']);
      era.println();
      await urara_say_in_lines([
        'え？えっ？ウララ、そんなことないよ？',
        call_30,
        '、なんでそう思うの？',
      ]);
      era.println();
      await rice.say_and_wait([
        r_call_u,
        ' は、自分を隠すのが苦手だから……最近ずっと元気がなくて、ライスが毎日後ろについてても気づかなかったよ？',
      ]);
      era.println();
      await urara_say_in_lines(
        'えっ、後ろについてたの？そうだったの？全然気づかなかった！',
      );
      era.println();
      await rice.say_and_wait([
        'ごめんなさい！あの、',
        r_call_u,
        ' が最近元気ないみたいで、でも話しかけるタイミングが……',
      ]);
      era.println();
      await urara_say_in_lines([
        '大丈夫だよ！',
        call_30,
        ' は悪くないよ？でもウララもよくわからなくて、どうしたらいいかわからないんだ。',
      ]);
      await urara_say_in_lines(
        'このままじゃだめだって思う。でもあの日のことを思い出すと、また涙が出ちゃう……',
      );
      era.println();
      await rice.say_and_wait([
        'ごめんなさい！',
        r_call_u,
        '、つらすぎるなら、先に落ち着こう！',
      ]);
      await rice.say_and_wait([
        'それから……ライスもあまり頼りにならないけど、',
        r_call_u,
        ' がよければ、ライスの話、聞いてもらえる？',
      ]);
      era.println();
      await urara_say_in_lines([
        call_30,
        '、すごく落ち着いてるね。',
        call_30,
        '、こういうこと、よくあるの？',
      ]);
      era.println();
      await rice.say_and_wait([
        'よ、よくある、ってほどじゃないよ……状況は違うかもしれないけど、ライスも、すごくひどいことを言われたことがあるの。',
      ]);
      if (era.get('cflag:30:殿堂') > 0) {
        await rice.say_and_wait([
          r_call_u,
          ' も聞いたことあると思う。昔のライス、誰かにとってすごく大事なレースを、うっかり勝っちゃったの。',
        ]);
        await rice.say_and_wait(
          'そしたら周りはがっかりしたため息ばかりで、怒ってる人もたくさんいて……おかしいよね？',
        );
        era.println();
        await urara_say_in_lines([
          'うん。あのとき ',
          call_30,
          '、すごくつらい目にあったんだね……',
        ]);
        era.println();
        await rice.say_and_wait(
          '昔のライスは、たしかに迷ってた。でも、それでもライスは自分が間違ってるとは思わなかった。',
        );
        await rice.say_and_wait([
          r_call_u,
          '、びっくりするよね。でもライスの考えは、ずっと変わってないよ？',
        ]);
        await rice.say_and_wait(
          'ため息は怖いけど、走り続ければ、みんなもいつかあなたの全部を見てくれる。',
        );
        await rice.say_and_wait([
          'だからライスは、勝ったことを謝ったことはない。簡単に非難に屈したら、みんなの祝福を裏切ることになるから。',
        ]);
      } else {
        await rice.say_and_wait([
          r_call_u,
          ' も聞いたことあると思う。ライスが、誰かにとってすごく大事な勝ちを、うっかり奪っちゃったの。',
        ]);
        await rice.say_and_wait(
          'そしたら周りはがっかりしたため息ばかりで、怒ってる人もたくさんいて……おかしいよね……',
        );
        era.println();
        await urara_say_in_lines([
          'うん。あのとき ',
          call_30,
          '、すごくつらい目にあったんだね……',
        ]);
        era.println();
        await rice.say_and_wait(['でも、今のライスは、やっぱり勝者だよね……']);
        await rice.say_and_wait([
          r_call_u,
          '、変に聞こえるかも。でもライス、本当にそう思ってるよ？',
        ]);
        await rice.say_and_wait(
          'ため息に倒れそうになったけど、走り続けてたら、いつの間にかみんなの祝福も増えてきた。',
        );
        await rice.say_and_wait([
          'だからライスを祝福してくれるみんなのために、今のライスも勝ち続けるよ？',
        ]);
      }
      await rice.say_and_wait([
        'そういうこと。',
        r_call_u,
        '、あまり心配しなくていいよ。だからこのあとは、前と同じように走り続ければいい——',
      ]);

      era.drawLine({ content: '【5月XX日「ウララ」と「キング」11:01】' });
      await halo.say_and_wait([
        h_call_u,
        '、こんな時間まで起きてるの？ 明日寝坊したら ',
        callname_61,
        ' も困るでしょう？',
      ]);
      era.println();
      await urara_say_in_lines(['でも、', call_61, ' も起きてるよね？']);
      era.println();
      if (era.get('cflag:61:殿堂') > 0) {
        await halo.say_and_wait(
          '私はもう、そんなに重いレース予定はないわ。今は寮に仮住まいしてるようなものよ。',
        );
        await halo.say_and_wait([
          '問題はあなたよ、',
          h_call_u,
          '。向かいのベッド、布団の下から携帯の光が漏れてる。',
        ]);
        era.println();
        await urara_say_in_lines([call_61, '、怒ってる……？']);
        era.println();
        await halo.say_and_wait([
          '怒ってないわ。ただ最近、',
          h_call_u,
          ' がずっと上の空なの。あの日のことで、まだ沈んでるんでしょう？',
        ]);
      } else {
        await halo.say_and_wait(
          '本当はちゃんと寝てたのよ。でも漏れてるわ、布団の下の携帯の光が。',
        );
        await halo.say_and_wait(
          '言ったでしょう。夜に携帯を見るなら、輝度をそんなに上げないで。',
        );
        era.println();
        await urara_say_in_lines('ごめんね……');
        era.println();
        await halo.say_and_wait([
          '謝ってほしいわけじゃないわ。ただ最近の ',
          h_call_u,
          ' は体すら大事にしてない。まだつらいんでしょう？',
        ]);
      }
      era.println();
      await urara_say_in_lines('うん、実は——');
      await urara_say_in_lines('——');

      era.drawLine({ content: '【5月XX日「ウララ」と「キング」11:13】' });
      await urara_say_in_lines([
        'そういうわけで、',
        call_30,
        ' はそう言ってた……',
      ]);
      await urara_say_in_lines([
        call_61,
        '、ウララがもっとがんばれば、みんなは悲しまなくなるの？',
      ]);
      await urara_say_in_lines(
        'ウララが続けてたら、もう誰も『ウララはレースに出ちゃだめ』って思わなくなる？',
      );
      era.println();
      await halo.say_and_wait([
        '……ごめんなさい、',
        h_call_u,
        '。もっと早く言うべきだった。それにライスのやり方は、あなたの状況には完全には合わないわ。',
      ]);
      era.println();
      await urara_say_in_lines(['え？', call_61, '、どういう意味？']);
      era.println();
      await halo.say_and_wait([
        '……これから言うことは、',
        h_call_u,
        ' をもっとつらくするかもしれない。でも、最後まで聞いて。',
      ]);
      await halo.say_and_wait(
        '——みんなが悲しまない、なんてありえないわ。負けてなお、勝者に平気で『おめでとう』と言える人ばかりじゃない。',
      );
      await halo.say_and_wait([
        '今の ',
        h_call_u,
        ' はもう知ってるでしょう。ほとんどの',
        urara.uma_sex_title,
        'にとって、あるレースは一生に一度しかない。',
      ]);
      await halo.say_and_wait(
        '願いを追う途中で倒れること、目標すら見えないまま道を見失うこと。そんな話は数え切れない。',
      );
      await halo.say_and_wait(
        'ひどく聞こえるかもしれないけど、勝ちを取りに行くなら、全員を幸せにはできない。',
      );
      era.println();
      await urara_say_in_lines(['そんな……じゃあキングも？']);
      era.println();
      await halo.say_and_wait(
        'だから私は、他人からの呪いを受け止めて、胸を張って走る。それが公正じゃなくても。',
      );
      await halo.say_and_wait([
        '一流の',
        urara.uma_sex_title,
        'にとって、他人の非難や怨念は——腹立たしいけど——本当は重要じゃない。',
      ]);
      await halo.say_and_wait([
        '大事なのは、',
        urara.sex,
        'が自分の勝ちをどう見るか。答えられるのも',
        urara.sex,
        '自身だけ。',
      ]);
      await halo.say_and_wait([h_call_u, '、前に勝ちたいって言ったわね。']);
      era.println();
      await urara_say_in_lines(
        'うん。みんなのためだけじゃなくて、今のウララも勝ちたい。でも、あんなことが起きちゃった。',
      );
      era.println();
      await halo.say_and_wait(
        'なら、しばらくそのままでいい。胸を張って勝ち続ければ、答えは見つかる。',
      );
      await halo.say_and_wait([
        'だから、',
        h_call_u,
        ' も、ずっとこれで沈んでなくていい。',
      ]);
      era.println();
      await urara_say_in_lines([
        call_61,
        ' の話、いつも難しいね。でも ',
        call_61,
        ' がそう言うなら、ウララもやってみる！',
      ]);
      era.println();
      await halo.say_and_wait([
        'ええ、ありがとう……',
        h_call_u,
        '、あなたなら大丈夫。',
      ]);
      await halo.say_and_wait(['今のあなたも、『一流のウララ』なんだから——']);

      era.drawLine({ content: '【5月XX日「ウララ」と「ウララ？」??:??】' });
      await inner_urara.say_as_unknown_and_wait(
        'またですか。いわゆる友だちは、相変わらず心配だけの言葉ばかり。',
      );
      era.println();
      await urara_say_in_lines(
        'そんなこと言っちゃだめだよ？ あなたもウララの友だちでしょ。',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait([
        'わかっています。ですがウララもわかっているでしょう。',
        urara.couple_title,
        'では、本当のところ助けにはなれません。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '参考にはできても、他人の答えは写せません。ここまで歩いてきたのは、ウララとトレーナーでしょう？',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ですが苦しいなら、わたくしに寄りかかっても構いません。こちらには、ちょうど『解毒剤』がありますよ？',
      );
      era.println();
      await urara_say_in_lines(
        '……えへへ～また来たね。ずるいよ。友だちにあんなにひどい本音ばっかり。',
      );
      await urara_say_in_lines(
        'それに、ウララがお願いを聞いたら、あなたは本当に嬉しい顔になれるの？',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait(
        'もちろんです。何度も申し上げました。ウララの幸せは、わたくしの幸せ……',
      );
      era.println();
      await urara_say_in_lines(
        'でもウララが答えるなら、あなたのやり方は正しいとは思えないよ？',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        'あら、残念。またウララに断られてしまいました。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ですが、わたくしはウララを傷つけたいと思ったことは一度もありません。少なくともそれだけは、信じてください。',
      );
      era.println();
      await urara_say_in_lines(
        'うん。ずっと信じあってる。だからウララは、いつでもあなたのお願いを聞けないよ？',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait(
        'やはり、何もできずに終わり、ですか——',
      );

      era.drawLine();
      await urara.print_and_wait([
        'ふしぎな電流の音とともに、「',
        urara.sex,
        '」もいなくなった。暗さがまた小さな布団へ入り、冷たくて落ち着かない。',
      ]);
      await urara.print_and_wait(
        'しっぽを掴まれたみたい。今寝たら、ウララ、絶対悪夢を見る。',
      );
      await urara.print_and_wait([
        'でも早く寝ないと、心配される。今のウララは、もう ',
        callname,
        ' を心配させちゃだめ！',
      ]);
      await urara.say_and_wait([callname, '、', callname, '……'], true);
      await urara.print_and_wait(
        '目尻から落ちそうな雫を拭き、きつく巻いた布団の下で、置いたばかりの携帯はまだ温かい。',
      );
      await urara.print_and_wait(
        'こんなことしたら説教されるかも。明日は睡眠不足で走れなくなるかも。でも……',
      );
      await urara.print_and_wait(
        '今夜最後のワガママを抱えて、耳を畳み、闇の中で掌サイズの画面をまた点けた。',
      );
      await urara.print_and_wait([
        'チャットじゃない。ほかの何かでもない……こんな時間に電話したら ',
        callname,
        ' の邪魔になる。キングも怒るかもしれない。',
      ]);
      await urara.print_and_wait([
        'でもお願い。説教されてもいい——今すぐ ',
        callname,
        ' に会いたい。ウララ、今すぐ ',
        callname,
        ' の声が聞きたい！',
      ]);
      await urara.print_and_wait(['だから、', callname, '、出て——']);
      era.drawLine({ content: `【5月XX日「ウララ」と「${callname}」11:50】` });
      await urara_say_in_lines('——');
      await urara_say_in_lines([callname, '、まだいる？']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏合宿（シニア級）開始';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        '一度経験済みでも、小さな',
        urara.uma_sex_title,
        'は、いつか成長します。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '人は同じ川に二度は入れません。同じ浜辺に立つ',
        urara.sex,
        'も、同じではありませんよ？',
      ]);
      era.drawLine();
      await era.printAndWait([
        '今日から三年目の夏合宿だ。',
        you.get_colored_name(),
        ' と担当は、また合宿の海へ来た。',
      ]);
      await era.printAndWait([
        '広い海は旅人の悩みを連れていく。',
        urara.get_colored_name(),
        ' も、自分を無理に引っ張り続けることを、しばらく手放せた。',
      ]);
      await era.printAndWait([
        '初めて砂浜に立ったときの新鮮さはもうない。それでも小さな',
        urara.uma_sex_title,
        'は、太陽の下で遠くまで眺めるのが好きだった。',
      ]);
      await era.printAndWait([
        '半脱げの上着の下は濃い青の学校水着。水を吸って張りついた生地が、',
        urara.sex,
        'の柔らかく健康でふっくらした体の線を描いていた。',
      ]);
      if (era.get('talent:52:乳房尺寸') > 0) {
        await era.printAndWait([
          '水着に張られた胸が、',
          urara.sex,
          'の小さな体に重くかかり、育ちすぎた尻の肉と一緒に、誘うように揺れていた。',
        ]);
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'の豊かな体は、少し合わないタイトな生地の下で気が進まなそうに動き、柔らかい胸が、先に小さな突起を二つ浮かせていた。',
        ]);
      }
      await era.printAndWait([
        'ピンクの耳としっぽが陽の下で自然に揺れ、ほどけた髪が潮風に乗って',
        urara.sex,
        'の小さな肩を撫でた。',
      ]);
      await era.printAndWait([
        '陽に目をやられたのか、',
        you.get_colored_name(),
        ' は一瞬、その姿が自分の ',
        urara.get_colored_name(),
        ' だと確認できなかった。',
      ]);
      await urara.say_and_wait([callname, '、こっちだよ！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' の視線に気づき、小さな',
        urara.uma_sex_title,
        'は波と砂の境を水を踏んで走り寄ってきた。後ろには浅い足跡が残る。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の前で止まり、前に散った桜色の髪を肩へ払い、',
        urara.get_colored_name(),
        ' の瞳の花が陽の下で柔らかく光った。',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        'の少し大人びた気配と、まだ無邪気な顔が、茶とミルクのように混ざり、',
        you.get_colored_name(),
        ' の目の中で霞んで重なっていく。',
      ]);
      await era.printAndWait([urara.sex, 'は……小さな大人になったのだろうか。']);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          callname,
          '！今回、ちょっと遅いよ？ウララ、朝早くから荷物全部片づけてたんだから！',
        ]);
        await era.printAndWait([
          'やる気満々で ',
          you.get_colored_name(),
          ' のそばへ寄り、髪を肩へ払った小さな',
          urara.uma_sex_title,
          'は、笑いながら ',
          you.get_colored_name(),
          ' の手を引いた。',
        ]);
        await urara.say_and_wait(
          'このあと大事なレースもあるし、ちゃんとがんばらないと！だから今からトレーニングしよう！',
        );
      } else {
        await urara.say_and_wait([
          '今回サボりたいのが ',
          callname,
          ' のほうなんだ？ウララ、待たされちゃったよ！',
        ]);
        await era.printAndWait([
          '小走りで ',
          you.get_colored_name(),
          ' のそばに立ち、',
          urara.get_colored_name(),
          ' は笑いながら手首を掴み、トレーニング場へ歩き出した。',
        ]);
        await urara.say_and_wait(
          'この先も大事なレースがあるから、今回のトレーニング、ちょっと厳しくても大丈夫だよ？',
        );
      }
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        ' の今は、どれも本物だ。',
        urara.sex,
        'の心はまだ心配だが、担当の期待に応えるなら、',
        callname,
        ' としても気合いを入れるしかない。',
      ]);
      await era.printAndWait([
        'だが今、腕に触れている本物で柔らかい体を感じると、',
        you.get_colored_name(),
        ' の頭の中の何かが切れそうになる。',
      ]);
      await era.printAndWait([
        '幼かった',
        urara.sex,
        'は、いつからこんなに「誘う」ようになったのだ。少し感慨深い……',
      ]);

      if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          'ふたりきりのとき、ウララ、',
          callname,
          ' のところ、期待していい？',
        ]);
        await era.printAndWait('それは……保留にしておこう。');
        await era.printAndWait([
          urara.get_colored_name(),
          ' の熱い視線と色っぽい体を真正面から受ける勇気はなく、',
          you.get_colored_name(),
          ' は逸らした目を遠くの海へ向けた……',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_elm_sta_s: (() => {
    const title = 'エルムステークスへ！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await era.printAndWait([
        '人混みの向こう、観客席の最後列。',
        you.get_colored_name(),
        ' は暗い空の下、もうひとりの桜ピンクと黙って最上段に立っていた。',
      ]);
      await era.printAndWait([
        '目の景色は相変わらずスローの中で揺れる。だが「',
        urara.sex,
        '」に慣れた ',
        you.get_colored_name(),
        ' は、次の会話を静かに待っていた。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'あの夜、あなたは',
        urara.sex,
        'と、何をお話しになったのですか。',
      ]);
      await era.printAndWait([
        '話題のない苛立ちに耐えきれなくなったのか、沈んだ桜ピンクが ',
        you.get_colored_name(),
        ' に、思いがけない問いを投げた。',
      ]);

      era.printButton(
        `「三ヶ月も経ってまだ知らないのか。あなたは${urara.sex}の『いちばん近い』友だちじゃないのか」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '言い終わるやいなや、人を射抜く視線が ',
        you.get_colored_name(),
        ' へ刺さった。だが最後は気にしていないふりをして、',
        urara.sex,
        'は顔を横へ向けた。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……結構です。仰りたくなければ、わたくしも必ず知る必要はありません。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'ですが今回はウララと一緒ではないのですか。以前のように',
        urara.sex,
        'のところへ送りに行かないのですか。',
      ]);

      era.printButton(
        '「ウララがひとりでいたいって言ったんだ。それにこっちにも別の予定がある。最後まで見るか？」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '結構です。わたくしにその辛抱があると、まだお思いですか。',
      );

      era.printButton('「それは残念だな」', 1);
      await era.input();

      await era.printAndWait([
        '隣の声が振り返らず去っていく。色を取り戻した空を見て、',
        you.get_colored_name(),
        ' は仕方なく首を振った。',
      ]);
      await era.printAndWait([
        '天気は悪くないのに、もうひとりの ',
        inner_urara.get_colored_name(),
        ' がいると、全部が灰色になるのはなぜだ。',
      ]);
      await era.printAndWait([
        'いくら礼儀正しくても、',
        urara.sex,
        'の性格の悪さは変わらない。だからこのあとのことは、',
        urara.sex,
        'がいないほうがいいのかもしれない。',
      ]);
      await era.printAndWait([
        '選手入場の時刻を確認し、',
        you.get_colored_name(),
        ' は前列の「みんな」へ合図を送った——',
      ]);

      era.drawLine();
      await urara.print_and_wait(
        'もうすぐ入場。今の自分は、どんな調子なんだろう。',
      );
      await urara.print_and_wait(
        '体の調子はずっと問題ない。ウララも走りたい。でも出てくるんだ、友だちの悲しい顔……',
      );
      await urara.print_and_wait([
        '迷って通路の外の光へ踏み出し、いつものように振り返って手を振る。でも ',
        callname,
        ' はそばにいなかった。',
      ]);
      await urara.print_and_wait([
        'そうだ。ウララが今回はひとりでも大丈夫って言ったから、',
        callname,
        ' も追い払っちゃった。なのに落ち着いてない……',
      ]);
      await urara.print_and_wait(
        'みんなもいない。自分だけのレースは、何かが足りない気がする。でも今は考える時間もない。',
      );
      await urara.print_and_wait(
        'でもコースへ入って、外から差し込む陽を受けたとき、ウララはまた、聞き慣れた応援の声を聞いた。',
      );
      await urara.print_and_wait([
        '毎レース聞こえる、みんなと ',
        callname,
        ' の声だ。',
      ]);
      await era.printAndWait('応援のみんな「おーい——ウララ——！」');
      await urara.print_and_wait(
        '聞き間違いかな。でも声はすぐ近く。こんなにはっきりしてたら、幻覚じゃないはず。',
      );
      await urara.print_and_wait(
        'その方向を見たら、期待してなかった空想が、すぐ現実になった。',
      );
      await urara.print_and_wait(
        '掲げた応援横断幕の下、見知ったみんながいつもの笑顔で、いちばん近いところでウララを待っていた。',
      );
      await era.printAndWait('応援のみんな「おーい——ウララ——こっち——！」');
      await urara.say_and_wait(
        'え？みんな……待って、ここ北海道だよ！？どうやって——',
      );
      await urara.print_and_wait(
        '騒がしさの向こうにウララの疑問を読んだのか、ウララを支えるみんなが、それぞれの気持ちを話しはじめた。',
      );
      await era.printAndWait(
        '応援のみんな「北海道でもどこでも、ウララの役に立てるなら、飛んでくるよ！」',
      );
      await era.printAndWait(
        '商店街の人「それと——ウララ、ごめん！前は、ウララが走ってれば嬉しい、ってばかり言ってて……」',
      );
      await era.printAndWait(
        '商店街の人「あれはウララを信じてないのと同じだ。応援にもなってない！」',
      );
      await urara.print_and_wait(
        'いいのに。ウララが走り続ければ、そうしなくても、みんなはきっと……',
      );
      await era.printAndWait(
        '商店街の人「でも今は違う……！ウララ、勝つんだ。絶対勝つんだよ！」',
      );
      await urara.say_and_wait('……！');
      await era.printAndWait(
        '応援のみんな「がんばれよ、ウララ！お前は私たちの夢を背負ってるんだぞ！」',
      );
      await era.printAndWait(
        '応援のみんな「ウララが一着のために走るところ、見せてくれ！」',
      );
      await urara.print_and_wait(
        '今ウララを支えるひとりひとりが、あの出来事のあとあまり見せなかった笑顔で、走ることを選んだウララを本当に祝福していた。',
      );
      await urara.print_and_wait([
        'みんなの励ましの先では、',
        callname,
        ' が人混みの中で力いっぱい手を振っていた。',
      ]);

      era.printButton('「ウララ！笑顔！忘れてるよ！」', 1);
      await era.input();

      await urara.print_and_wait(
        '笑顔……やっぱり何か忘れてた。今日のウララ、笑顔を忘れてたの？',
      );
      await urara.print_and_wait(
        'そうだ！みんなはまだ待ってる。解けてないことがあっても、少なくとも今は、ウララは止まれない。',
      );
      await urara.say_and_wait('……うん！わかった。ウララ——勝ってみせる！');
      await urara.print_and_wait(
        'みんなの期待に応えるために、ウララもみんなのほうへ、叫ぶようなありがとうを送った。',
      );
      await urara.print_and_wait([
        'ウララ、笑顔を取り戻せた？自分では見えないけど、みんなと ',
        callname,
        ' のほっとした顔からすると——',
      ]);
      await urara.print_and_wait(
        '今のウララは、またみんなの期待を背負ってる顔だ！',
      );
    };
    f.title = title;
    return f;
  })(),
  elm_sta_win_s: (() => {
    const title = 'もっと強くなる！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'また勝ちましたね。ウララの調子も……わたくしまで、あなたに余計な自信が湧いてしまいました。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'ただ、',
        urara.sex,
        'の様子は……とりあえず祝福いたします。もともと責めるべきでもありませんでした。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '結末を円満に終えたいとお考えなら、',
        urara.sex,
        'と最後まで踏ん張ってみてください。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'その前に、',
        urara.sex,
        'の笑顔まで失わないで。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '選手通路へ入ったとたん、勝ち切った小さな',
        urara.uma_sex_title,
        'は、体の疲れも構わずすぐ ',
        you.get_colored_name(),
        ' のそばへ飛び込んできた。',
      ]);
      await era.printAndWait([
        'みんなを集めた計画は成功したらしい。',
        urara.get_colored_name(),
        ' の笑顔を迎える気持ちで、',
        you.get_colored_name(),
        ' も担当へ向かった。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' が ',
        urara.get_colored_name(),
        ' にレースのお疲れを言う前に、小さな',
        urara.uma_sex_title,
        'はすぐ手を引き、舞台裏のほうへ走り出した。',
      ]);
      await urara.say_and_wait([
        callname,
        '、用事が全部済んだら、今日のうちに帰ろう！',
      ]);

      era.printButton('「急がないで。せっかく一着だ。先に休まない？」', 1);
      await era.input();
      await era.printAndWait([
        urara.get_colored_name(),
        ' の異常に気づいた ',
        you.get_colored_name(),
        ' は慌てて足を止めたが、',
        urara.get_colored_name(),
        ' に引っ張られて危うくよろけた。',
      ]);
      await era.printAndWait([
        '驚いて顔を上げると、',
        you.get_colored_name(),
        ' はたしかに ',
        urara.get_colored_name(),
        ' の笑顔を見た。だが想像していた穏やかで癒されるものとは、まだ遠かった。',
      ]);
      await urara.say_and_wait(
        'でもトレーニングのほうが大事でしょ？ 年末まで、もう時間ないよ。ウララ、もっと強くならないと！',
      );
      await era.printAndWait([
        '今の ',
        urara.get_colored_name(),
        ' の笑顔は、いつもの楽しさより、主になっているのが……疲れた虚無だった。',
      ]);
      await urara.say_and_wait(
        '勝ち続ければ、みんなに認めてもらえるよね！認めてもらえたら、みんなもっと嬉しくなる！',
      );
      await urara.say_and_wait(
        'ウララがうっかり傷つけちゃった人も、きっと、きっと……',
      );
      era.printButton('「ウララ、落ち着いて。急がば回れだよ」', 1);
      await era.input();
      await urara.say_and_wait(
        'ん？ウララ、落ち着いてるよ！大丈夫！このまま帰ってトレーニング組もう？',
      );
      await era.printAndWait([
        '「それなら次も一着を」、',
        urara.get_colored_name(),
        ' の枯れかけた桜色の瞳を見て、そんな言葉は出せなかった。',
      ]);
      await era.printAndWait([
        'みんなで ',
        urara.get_colored_name(),
        ' を励ます計画は成功した。だが表の症状は和らいでも、残った病根は深すぎる。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は今までと違う。今の',
        urara.sex,
        'は目標のためだけに勝つ心を完全に持っている。だがそのぶん、自分を崖の縁に置いている。',
      ]);
      await era.printAndWait([
        '今 ',
        urara.get_colored_name(),
        ' を減速させられなければ、',
        urara.sex,
        'は帰ってから、見境なく突っ走るだろう。',
      ]);
      await era.printAndWait([
        'だが今',
        urara.sex,
        'の心を落ち着けるなら、小さな',
        urara.uma_sex_title,
        'が次にどう走りたいかを、先に聞き終わるしかない。',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          '大丈夫だよ、',
          callname,
          '、心配しないで。',
          callname,
          ' に勝ちを見せる！',
        ]);
        await urara.say_and_wait(
          '今のウララなら、G1だって楽に勝てるかも！だから次も、G1に挑戦させて！',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' の胸へ飛び込もうとしたあと、',
          urara.get_colored_name(),
          ' の生きたい気持ちはまだ迫ってくる。だが笑顔は、やっと普段に戻りはじめていた。',
        ]);
      } else {
        await urara.say_and_wait('大丈夫。次もみんなと一着のために走るよ！');
        await urara.say_and_wait(
          'だから次もG1に出させて！今のウララなら勝てる！',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' の腰をそっと抱え、',
          urara.get_colored_name(),
          ' の言葉はまだ張りつめているが、表情は少し柔らかくなった。',
        ]);
      }
      await era.printAndWait([
        '強い出走の意志を自分の口で言った。',
        urara.get_colored_name(),
        ' の成長は、想像よりずっと先に行っている。',
      ]);
      await era.printAndWait([
        'もちろん、',
        urara.sex,
        'が自分を搾り取る前提で言ったのでなければ、',
        you.get_colored_name(),
        ' はもっと喜べた。',
      ]);
      await era.printAndWait([
        'だが今の「熱狂」を思うと、',
        urara.sex,
        'の言葉が本当でも、',
        you.get_colored_name(),
        ' には重さしか残らない。',
      ]);

      era.printButton(
        '「『JBCスプリント』を勧めるよ。次まで時間もある。急いでも仕方ないよ？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'え？うん……',
        callname,
        ' がそう言うなら、ウララ、先に我慢する……',
      ]);
      await era.printAndWait([
        'ダート、短距離。今の ',
        urara.get_colored_name(),
        ' には一着のチャンスが大きいレースだ。同時に ',
        you.get_colored_name(),
        ' の時間稼ぎでもある。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は満足したか。少なくとも今の小さな',
        urara.uma_sex_title,
        'は落ち着き、無理に帰りたがることもなくなった。',
      ]);
      await era.printAndWait([
        'ただ今回は、',
        you.get_colored_name(),
        ' も少し心配だった。',
        urara.get_colored_name(),
        ' と三年目の最後の数ヶ月を、無事に渡れるかどうか。',
      ]);
      await era.printAndWait(
        '成否はここだ。踏ん張れば突破口は来る。全力でいこう。',
      );
    };
    f.title = title;
    return f;
  })(),
  elm_sta_lose_s: (() => {
    const title = 'もっとがんばる！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        'また負けましたか。ですがウララの調子は悪くない。わたくしまで、あなたに余計な自信が湧いてしまいました。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'ただ、',
        urara.sex,
        'の様子は……とりあえず祝福いたします。もともと責めるべきでもありませんでした。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '結末を円満に終えたいとお考えなら、',
        urara.sex,
        'と最後まで踏ん張ってみてください。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'その前に、',
        urara.sex,
        'の笑顔まで失わないで。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '選手通路へ入ったとたん、レースを終えた小さな',
        urara.uma_sex_title,
        'は、体の疲れも構わずすぐ ',
        you.get_colored_name(),
        ' のそばへ飛び込んできた。',
      ]);
      await era.printAndWait([
        'みんなを集めた計画は成功したはずだ。',
        urara.get_colored_name(),
        ' を慰める準備をして、',
        you.get_colored_name(),
        ' も担当へ急いだ。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' が',
        urara.sex,
        'に最初の慰めを言う前に、小さな',
        urara.uma_sex_title,
        'はすぐ手を引き、舞台裏のほうへ走り出した。',
      ]);

      era.printButton(
        '「どうした？せっかく走り終えたんだ。先に休まない？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        urara.get_colored_name(),
        ' の異常に気づいた ',
        you.get_colored_name(),
        ' は慌てて足を止めたが、',
        urara.get_colored_name(),
        ' に引っ張られて危うくよろけた。',
      ]);
      await era.printAndWait([
        '驚いて顔を上げると、',
        you.get_colored_name(),
        ' はたしかに ',
        urara.get_colored_name(),
        ' の笑顔を見た。だが想像していた穏やかで癒されるものとは、まだ遠かった。',
      ]);
      await urara.say_and_wait(
        'でもトレーニングのほうが大事でしょ？ 年末まで、もう時間ないよ。ウララ、もっと強くならないと！',
      );
      await era.printAndWait([
        '今の ',
        urara.get_colored_name(),
        ' の笑顔は、いつもの楽しさより、主になっているのが……疲れた虚無だった。',
      ]);
      await urara.say_and_wait(
        'みんなはウララに勝ってほしかった。なのに応えられなかった。だから今、もっとがんばらないと！',
      );
      await urara.say_and_wait([
        'それに、自分を証明できなかったら……',
        urara.sex,
        'も……',
        urara.sex,
        'も、ウララを許してくれないよね……',
      ]);
      era.printButton('「ウララ、落ち着いて」', 1);
      await era.input();
      await urara.say_and_wait(
        'ん？ウララ、落ち着いてるよ！大丈夫！このまま帰ってトレーニング組もう？',
      );
      await era.printAndWait([
        '「それなら次も一着を」、',
        urara.get_colored_name(),
        ' の枯れかけた桜色の瞳を見て、そんな言葉は出せなかった。',
      ]);
      await era.printAndWait([
        'みんなで ',
        urara.get_colored_name(),
        ' を励ます計画は成功した。だが表の症状は和らいでも、残った病根は深すぎる。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は今までと違う。今の',
        urara.sex,
        'は目標のためだけに勝つ心を完全に持っている。だがそのぶん、自分を崖の縁に置いている。',
      ]);
      await era.printAndWait([
        '今 ',
        urara.get_colored_name(),
        ' を減速させられなければ、',
        urara.sex,
        'は帰ってから、見境なく突っ走るだろう。',
      ]);
      await era.printAndWait([
        'だが今',
        urara.sex,
        'の心を落ち着けるなら、小さな',
        urara.uma_sex_title,
        'が次にどう走りたいかを、先に聞き終わるしかない。',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          '大丈夫だよ、',
          callname,
          '、心配しないで。次はウララが勝つ。',
        ]);
        await urara.say_and_wait(
          'それに今は、もっとたくさんの人にウララを認めてもらわないとでしょ？ だから次もG1に挑戦させて！',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' の胸へ飛び込もうとしたあと、',
          urara.get_colored_name(),
          ' の生きたい気持ちはまだ迫ってくる。だが笑顔は、やっと普段に戻りはじめていた。',
        ]);
      } else {
        await urara.say_and_wait(
          '大丈夫。次もあるよね！負けたら、余計に気は抜けないよね？',
        );
        await urara.say_and_wait(
          'だから次はG1に出させて！今、みんなに認めてもらえないとだめなんだ。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' の腰をそっと抱え、',
          urara.get_colored_name(),
          ' の言葉はまだ張りつめているが、表情は少し柔らかくなった。',
        ]);
      }
      await era.printAndWait([
        '強い出走の意志を自分の口で言った。',
        urara.get_colored_name(),
        ' の成長は、想像よりずっと先に行っている。',
      ]);
      await era.printAndWait([
        'もちろん、',
        urara.sex,
        'が自分を搾り取る前提で言ったのでなければ、',
        you.get_colored_name(),
        ' はもっと喜べた。',
      ]);
      await era.printAndWait([
        'だが今の「熱狂」を思うと、',
        urara.sex,
        'の言葉が本当でも、',
        you.get_colored_name(),
        ' には重さしか残らない。',
      ]);

      era.printButton(
        '「『JBCスプリント』を勧めるよ。次まで時間もある。急いでも仕方ないよ？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'え？うん……',
        callname,
        ' がそう言うなら、ウララ、先に我慢する……',
      ]);
      await era.printAndWait([
        'ダート、短距離。今の ',
        urara.get_colored_name(),
        ' には一着のチャンスが大きいレースだ。同時に ',
        you.get_colored_name(),
        ' の時間稼ぎでもある。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は満足したか。少なくとも今の小さな',
        urara.uma_sex_title,
        'は落ち着き、無理に帰りたがることもなくなった。',
      ]);
      await era.printAndWait([
        'ただ今回は、',
        you.get_colored_name(),
        ' も少し心配だった。',
        urara.get_colored_name(),
        ' と三年目の最後の数ヶ月を、無事に渡れるかどうか。',
      ]);
      await era.printAndWait(
        '成否はここだ。踏ん張れば突破口は来る。全力でいこう。',
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏合宿（シニア級）終了';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} accept_sex 性愛を受け入れるか
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      accept_sex,
      arim_kin,
    ) => {
      await urara.say_and_wait([
        callname,
        '、今のウララ、前よりまた強くなった？',
      ]);
      await era.printAndWait([
        'トレーニングの休憩で午後の砂浜に座り、',
        urara.get_colored_name(),
        ' は隣の ',
        you.get_colored_name(),
        ' と、落ちはじめた午後の陽を一緒に見ていた。',
      ]);

      era.printButton(
        '「もちろん、今のウララは強い。ただ、もっと大事なものが足りない」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '無理に強くなりすぎた小さな',
        urara.uma_sex_title,
        'に、',
        you.get_colored_name(),
        ' はそれでも本音を選んだ。',
      ]);
      await era.printAndWait([
        '今の ',
        urara.get_colored_name(),
        ' には、勝つ条件は揃っている。だが ',
        you.get_colored_name(),
        ' には、あの出来事が今も終わっていないこともわかっている。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は元の調子を取り戻した。だが戻ったのは、表の「走れる」状態だけだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' があの夜',
        urara.sex,
        'に渡した言葉は、',
        urara.get_colored_name(),
        ' が聞き取れなかったというより、答えがそんなに簡単だとは、まだ信じられないのだろう。',
      ]);
      await era.printAndWait([
        'この子は変なところで頑固になってきたな、と ',
        you.get_colored_name(),
        ' はぼやこうとした。だが、不器用に大きくなるのも成長の一部だと思い直した。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の率直な評価を聞き、',
        urara.get_colored_name(),
        ' は小さくうなずき、夏の潮風より細い声で聞いた。',
      ]);
      await urara.say_and_wait([
        callname,
        '、最近のあのこと、細かいところ、どれくらい覚えてる？',
      ]);

      era.printButton(
        '「忘れられるわけない。なんで聞く？ また何かあった？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '……ウララ、あとで',
        urara.sex,
        'をずっと探したよ。同級生の話だと、',
        urara.sex,
        '、やっぱり遠いところへ行ったんだって。',
      ]);
      await urara.say_and_wait([
        'でも同級生が言ってた。',
        arim_kin,
        ' のとき、',
        urara.sex,
        'もウララに一票入れるって。',
      ]);
      await urara.say_and_wait(
        '『あんなにひどいこと言ったから、許してほしいとは言わない。でも本当は、ウララに有馬へ出てほしい』。',
      );
      await urara.say_and_wait(
        'みんなはそう伝えてくれた。でも人がそう言っても、ウララは人の夢を軽く見てたよね……',
      );

      era.printButton(
        `「でもそれなら、${urara.sex}は最初から、ウララを責めるつもりじゃなかったんじゃないか」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'ウララはずっとそう思ってた。でも、うっかり傷つけちゃって、もう走らないでほしいって思う人も、もっといるはず……',
      );

      era.printButton(
        '「だからウララは最初から間違ってない。その負の気持ちは、自分で抱え込まないほうがいい——」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'でも否定されても、ウララはみんなの笑顔を背負いたい。ウララへの悪意だけでもいい。',
      );
      await urara.say_and_wait(
        'これ、前回のレースが終わってから考えたんだ……えへへ～言い方、嫌われそう？',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' も予想しなかった答えのあと、びしょ濡れの小さな',
        urara.uma_sex_title,
        'は、普段は減ってきたけど、まだ希望のある笑顔を見せた。',
      ]);

      era.printButton(
        '「……そんなかわいい『嫌われ役』のウララ、もっといてもいいよ」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '笑顔の下にまだ残る影を見据え、',
        you.get_colored_name(),
        ' は仕方なく、水滴のついた',
        urara.teen_sex_title,
        'の髪へタオルをかけた。',
      ]);

      era.printButton(
        '「でも、背負いすぎると壊れるよ。最初から準備できてなかったウララは、今どう？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'え？',
        callname,
        '、ウララの友だちみたいなこと言わないで！ウララ、大丈夫だよ——',
      ]);
      await era.printAndWait([
        'はいはい、',
        urara.get_colored_name(),
        ' は大丈夫。小さな',
        urara.uma_sex_title,
        'の柔らかい耳と小さな顔を揉み、',
        you.get_colored_name(),
        ' はそっとため息をついた。',
      ]);
      await era.printAndWait([
        'また予想どおりの否定だ。だがそうだ。',
        urara.get_colored_name(),
        ' 自身がこの壁を越えられなければ、人が何を言っても意味がない。',
      ]);
      await urara.say_and_wait([
        'うっ——',
        callname,
        ' がまだ信じないなら……',
        callname,
        '、あの夜の言葉、書いておいて！',
      ]);
      await era.printAndWait('は？ 急に何を……');
      await urara.say_and_wait([
        '今はまだよくわからないけど、ちょうどいいときに ',
        callname,
        ' の言葉を聞いたら、ウララ、きっと立て直せる！',
      ]);
      await you.say_and_wait(
        [
          '本当にわかってないのか。ちょうどいいときっていつだ。だが ',
          urara.get_colored_name(),
          ' がそう言うなら、',
          urara.sex,
          'なりの考えがあるはずだ。とりあえず書いておこう……',
        ],
        true,
      );
      await era.printAndWait(
        'いつの間にか今の話は終わり、沈黙がまたふたりを包んだ。だが少なくとも今は、この感じは悪くない。',
      );
      await era.printAndWait([
        'ただ、今の',
        urara.sex,
        'は、どんな先を考えているのだろう。',
      ]);
      era.drawLine();
      await urara.print_and_wait(
        'でも、今ウララが考えてることは、知った人に褒められるはずない。',
      );
      await urara.print_and_wait([
        '今のウララは、人の幸せを奪ってるだけなのかも。でもその考えは、',
        callname,
        ' には言えない。',
      ]);
      await urara.print_and_wait([
        callname,
        ' がウララのために沈む顔を思うと、ウララの中も憂鬱でいっぱいになって、自分じゃなくなっていく。',
      ]);
      await urara.print_and_wait([
        'ウララが ',
        callname,
        ' にどんな気持ちを持ってても、ウララは ',
        callname,
        ' から離れたくない。',
        callname,
        ' に悲しくなってほしくない。',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          callname,
          ' に体を寄せるだけで、思ったより温かい感じが、鼓動と一緒に少しずつ伝わってくる。',
        ]);
        await urara.print_and_wait(
          '安心する。今、自分の願いを置いて、ひとりの港にいれば、そのままずっと眠れそう。',
        );
        await urara.print_and_wait([
          '認めてもらう努力もいらない。責められることもない。',
          callname,
          ' と、みんなの愛に浸っていればいい……',
        ]);
      } else {
        await urara.print_and_wait([
          callname,
          ' のそばで体を丸めると、もうひとりの体温と鼓動がわかる。',
        ]);
        await urara.print_and_wait([
          callname,
          ' の胸の中は、きっと安心だよね。ウララの場所、ある？ウララが安心して眠れる場所。',
        ]);
        await urara.print_and_wait([
          '取捨をすれば、',
          callname,
          ' の愛がもらえる？気にしなければ、みんなもウララを支え続けてくれる……',
        ]);
      }
      await urara.print_and_wait([
        'でも、それは絶対ちがう。',
        callname,
        ' とみんなを裏切るし、自分も後悔する。',
      ]);
      await urara.print_and_wait([
        'ウララが ',
        callname,
        ' みたいに頼れる大人になれたらいいな。',
        callname,
        ' なら、ウララよりずっとうまくやるはず。',
      ]);
      await urara.print_and_wait(
        '疲れた。でもウララは止まれない。だから少しだけでいい。もっと頼らせて。だから……',
      );
      await urara.say_and_wait([
        callname,
        '、帰る前に……ウララ、『大人の抱擁』、もらっていい？',
      ]);
      if (era.get('love:52') >= 50) {
        await urara.print_and_wait([
          'ウララの突然のお願いを聞いて、',
          callname,
          ' は一瞬眉を寄せて、少し揺れた顔をした。ウララの要求、やりすぎだった？',
        ]);

        era.printButton('「ウララ、やっぱりお前は……」', 1);
        await era.input();

        await urara.print_and_wait([
          'ん？',
          callname,
          '、もうウララの考え、わかってた？でも、それはもういい——',
        ]);
        await urara.print_and_wait(
          'もう普通の関係じゃないし、今のウララは、昔みたいなただの子どもでもない。',
        );
        await urara.print_and_wait([
          callname,
          ' はまだ断りきれない。今のウララも、',
          callname,
          ' に簡単には断らせない。',
        ]);
      } else {
        await urara.print_and_wait([
          'ウララの突然のお願いを聞いて、',
          callname,
          ' は案の定びっくりした。本当の恋人でも、こんな唐突なお願いはしないよね。',
        ]);

        era.printButton('「ウララ、それでもそれは……！」', 1);
        await era.input();

        await urara.print_and_wait([
          'え？',
          callname,
          '、もうウララの考え、見抜いてた？でも、それはもういい——',
        ]);
        await urara.print_and_wait([
          callname,
          ' なら、こうしてもいいってウララは思う。だからウララは、絶対に ',
          callname,
          ' に断らせない。',
        ]);
        await urara.print_and_wait([
          '恋人じゃなくてもいい。ウララに教えて……',
          callname,
          ' が、自分の担当をどれだけ好きか。',
        ]);
      }
      await urara.print_and_wait(
        '大丈夫。これからウララは、みんなの幸せのために進む。だから少なくとも今は、ウララを抱きしめて……',
      );
      await urara.say_and_wait(
        'ウララ、よくなるよ？すぐよくなる……だから、まずは抱っこからでいい？',
      );
      await urara.print_and_wait([
        '指一本で、言いかけた ',
        callname,
        ' の唇をそっと押さえただけなのに、',
        callname,
        ' はすぐ抵抗をなくした。',
      ]);
      await urara.print_and_wait([
        callname,
        ' と担当の抱っこだけだから、みんなの前の砂浜でこうして抱き合っても、大丈夫だよ？',
      ]);
      await urara.print_and_wait([
        '正面から ',
        callname,
        ' の膝に跨がり、緊張で固い首をそっと抱いて、ウララは体を ',
        callname,
        ' にぴったり寄せた。',
      ]);
      await urara.print_and_wait([
        callname,
        '、すぐ焦るよね。薄い布の向こうが、担当の柔らかい全部だから。',
      ]);
      await urara.print_and_wait([
        'あ、大人の匂いに当てられたのかな。ウララ、胸のそっちまで、先が立っちゃった……',
      ]);
      await urara.print_and_wait(
        'でも、まだだめだよ？いつもの「抱っこ」を何度もしてるだけだから、はみ出したことはしちゃだめ？',
      );
      await urara.print_and_wait(
        'ウララ、体が熱くてくらくらしても我慢してるよ？キスもだめ！だって、見られるもん～',
      );
      if (era.get('talent:52:乳房尺寸') > 0) {
        await urara.print_and_wait([
          '豊かな柔らかい実を ',
          callname,
          ' にそっと押し当てると、しびれる快感が立った先から全身へ広がる。',
        ]);
        await urara.print_and_wait([
          callname,
          ' も、ここ好きでしょ？こんなに大きくなってから、',
          callname,
          ' の目、いつもウララのここ、長く止まるんだよ。',
        ]);
        await urara.print_and_wait(
          'だから触ってみて？何気なくウララの胸に手を置いて、周りに視線がないとき、そっと搾る……',
        );
        await urara.print_and_wait([
          'はっん～！母乳まで出ちゃった……もう、そんな力で、',
          callname,
          '、子どもじゃないのに！',
        ]);
      }
      if (you.sex_code > 0) {
        await urara.print_and_wait([
          'あ、なんか硬いのがウララのお腹に当たってる……みんなの言うとおり、',
          callname,
          '、えっちだね～',
        ]);
        await urara.print_and_wait(
          'ウララ、知ってるよ？手で軽く揉んだら、白いのでウララ、全身べたべたになる。',
        );
        await urara.print_and_wait([
          'でも人前で大人を挑発しちゃだめだから、今 ',
          callname,
          ' がお願いしても、ウララは触らないよ？',
        ]);
      }
      if (you.sex_code !== 1) {
        await urara.print_and_wait([
          '今は ',
          callname,
          ' の胸まで立ってる。くっついて ',
          callname,
          ' の首を噛むとき、ちょうど柔らかさがわかる。',
        ]);
        await urara.print_and_wait(
          '歯と唇で胸と首に印を残しても、人には見えにくい。でも声が大きすぎるとだめだよ？',
        );
        await urara.print_and_wait([
          'もしウララがこっそり ',
          callname,
          ' の胸の先、二粒を噛んだら、',
          callname,
          '、どんな可愛い声出すのかな？',
        ]);
      }
      await urara.print_and_wait([
        callname,
        ' のぼんやりした顔は、驚きのほうが多い？それとも怖さ？どっちでも、',
        callname,
        ' はもう口が利けない。',
      ]);
      await urara.print_and_wait([
        'それに ',
        callname,
        ' が話せないなら、ウララのお願いも断れない。えへへ～ウララ、天才だね～',
      ]);
      await urara.print_and_wait([
        'どれくらい経ったんだろう。ウララと ',
        callname,
        '、くっついてほとんど離れられない体が、やっと名残惜しそうに離れた。',
      ]);
      await urara.print_and_wait([
        'ねだるのをいったん止めても、',
        callname,
        ' の目に映る欲に濡れた桜色の瞳は、夕日の下でまだ燃えてる……',
      ]);
      await urara.print_and_wait([
        callname,
        ' が断りきれなかったなら、ウララも',
        urara.sex,
        'の ',
        callname,
        ' を、そんなに簡単には逃がさない。',
      ]);
      await urara.say_and_wait([
        callname,
        '、ウララ、本当におかしい。だから普通に戻るまで、ただの愛、ずっとちょうだい？',
      ]);
      await urara.say_and_wait(
        '初めて会ったときみたいに……ウララを、心配のないいい子で、満たして……？',
      );
      await urara.say_and_wait([
        callname,
        '、みんなに見えないところ、行く？でも今なら、',
        callname,
        ' が断ってもいいよ……？',
      ]);
      you.say('……');
      era.printButton(`${urara.sex}の願いを受けてもいい……（恋慕+5）`, 1, {
        disabled: !accept_sex,
      });
      era.printButton(
        `今ならまだ、${urara.sex}を押しのけられる……（好感+20）`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          'えへへ～',
          callname,
          '、やっぱり断れなかったね。じゃあウララと、おいで？',
        ]);
        await urara.print_and_wait([
          '断りきれなかった ',
          callname,
          ' を、人のいない隅へ引っ張って、ウララは薄い水着をそっと剥いだ。',
        ]);
        if (urara.sex_code !== 1) {
          if (era.get('exp:52:性爱次数') - era.get('exp:52:睡奸次数') >= 10) {
            await urara.print_and_wait([
              '気づいたら下、もうびしょびしょ。でもウララがどれだけえっちになっても、',
              callname,
              ' は断らないでしょ？',
            ]);
            await urara.print_and_wait([
              'そう。好きな人を悦ばせる技も、好きな人を見るとぼーっとなる頭も、全部 ',
              callname,
              ' が望んだ姿だよ？',
            ]);
            await urara.print_and_wait([
              '見て？見られるだけで服の上から立っちゃう乳首も、今もう止まらずに垂れてる幼い穴も、全部 ',
              callname,
              ' のせい……',
            ]);
          } else {
            await urara.print_and_wait([
              callname,
              ' に見られるだけで、下がこんなに濡れちゃう。',
              callname,
              '、ウララをどんな子にするの？',
            ]);
            await urara.print_and_wait([
              'でも ',
              callname,
              ' が好きなら、ウララのどこが欲しくても、',
              callname,
              ' の一番好きなおもちゃにしていいよ？',
            ]);
            await urara.print_and_wait(
              'ウララも決めたから。この体を、育ててくれた変態な大人に、あげたい……',
            );
          }
          await urara.print_and_wait([
            '裸のまま ',
            callname,
            ' に腕を開いて、ウララはママの真似で、注いでほしい子どもを抱きしめた。',
          ]);
          await urara.print_and_wait([
            'だから……',
            callname,
            ' が甘えたいなら、ウララが普通に戻る前に、早く抱いて？',
          ]);
          if (urara.sex_code !== 1) {
            await urara.print_and_wait([
              callname,
              ' にだけ喘ぐ唇も、',
              callname,
              ' にだけ弄ばせる二つの穴も、',
              callname,
              ' のためだけに孕む子宮も……',
            ]);
          }
          await urara.print_and_wait([
            callname,
            ' だけの体、全部の寸、いっぱいにしてね？',
          ]);
        }
      } else {
        await urara.say_and_wait([
          '……えへへ～',
          callname,
          '、断っちゃった？大人って、変なこだわりあるよね……',
        ]);
        await urara.say_and_wait(
          'じゃあその代わり、ウララの埋め合わせに、もっと抱き合おう？',
        );
        await urara.print_and_wait([
          callname,
          ' に意外と断られたけど、もっと驚いた顔が見られて、ウララは満足そうに笑った。',
        ]);
        await urara.print_and_wait([
          'ウララを断った ',
          callname,
          ' への仕返しに、のろまな太陽が沈むまで、ウララは離さない。',
        ]);
        await urara.print_and_wait('ウララが普通に戻るまで、離さないよ……');
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_jbc_cls_s: (() => {
    const title = '負けたくないから！';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} join_arim_kin_c ウララがクラシック年の有馬記念に出たか
     * @param {number} fans ファン数
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      join_arim_kin_c,
      fans,
    ) => {
      await urara.print_and_wait(
        'この長いトンネルを出れば、有馬記念までの最後の数駅のはず。',
      );
      await urara.print_and_wait([
        '笑顔だけで ',
        callname,
        ' を信じさせちゃった。ウララ、もう悪い子になっちゃったね。',
      ]);
      await urara.print_and_wait([
        'でも大丈夫。勝ったら ',
        callname,
        ' に謝って、それからぐっすり眠ればいい。このレースを乗り切れればいい。',
      ]);
      await urara.print_and_wait(
        'ウララ……ウララは誰にも負けない！今のウララは誰にも負けたくない。今のウララは誰にも負けられない！',
      );
      await urara.print_and_wait(
        '負けない……負けない……負けない……だってみんな、まだウララを待ってる。ウララ、まだ自分を証明しなきゃ……',
      );
      await urara.print_and_wait(
        'こうすればウララは許されるよね。こうすれば、みんなに認められて舞台に立てる……',
      );
      await urara.print_and_wait(
        '体が重い。でもウララは走れる。胸が痛い。でも笑顔をかければ、誰も心配しなくていい。',
      );
      await urara.print_and_wait(
        '怖い……自分、どうなっちゃうの？ウララは今、本当にみんなのためにここに立ってる？',
      );
      await urara.print_and_wait('でも、少なくとも今回は、絶対に勝たせて……');
      era.drawLine();
      await you.say_and_wait(
        ['ウララを出すべきじゃなかったのかもしれない。でも、もう遅いか。'],
        true,
      );
      await you.say_and_wait(
        [
          urara.uma_sex_title,
          'たちはもうゲートに入った。トレーナーは担当を見送るしかない。',
          urara.sex,
          'がこの難関を乗り切れますように。',
        ],
        true,
      );
      await you.say_and_wait(
        [
          'なぜウララに騙された？心のどこかで、ウララが見せた表層をまだ信じていたから、だろう……',
        ],
        true,
      );
      await you.say_and_wait(
        'ウララはまだ勇気を出せず、自分の選んだ道がずっと正しかったと信じられないのか。',
        true,
      );
      await you.say_and_wait(
        [
          '優しすぎる',
          urara.sex,
          'は、まだ外からの力がないと、閉じていく心をこじ開けられないのか。それとも、',
          urara.sex,
          'は自分の未来を恐れているのか……',
        ],
        true,
      );
      if (join_arim_kin_c && fans >= 25000) {
        await you.say_and_wait(
          [
            '自分のせいだろうか。兆しが出たときに',
            urara.sex,
            'を止めず、ウララを自分を傷つけることすら気にしない子にしてしまった。',
          ],
          true,
        );
        await you.say_and_wait(
          [
            'もう山頂の手前まで来ていたのに。自分も',
            urara.sex,
            'も、変わっていくうちに「笑顔」の意味を忘れたのか……',
          ],
          true,
        );
      } else {
        await you.say_and_wait(
          [
            '自分のせいだろうか。自分のミスで、',
            urara.sex,
            'をほとんど自壊まで追い詰める姿にしてしまった。',
          ],
          true,
        );
        await you.say_and_wait(
          [
            '出会ったとき、自分がもっと優れたトレーナーだったら。',
            urara.sex,
            'が、もっと優れたトレーナーに出会っていたら……',
          ],
          true,
        );
      }
      await you.say_and_wait(
        '今さら、こんな的外れな妄想を口にしても意味はない。',
        true,
      );
      await you.say_and_wait(
        [
          'ウララがもうコースに立った今は、',
          urara.sex,
          'が崩れかけの自分でこのレースを乗り切ると信じるしかない。',
        ],
        true,
      );
      await you.say_and_wait(
        [
          'ここまで来たら、トレーナーとして余計に冷静を失ってはいけない。状況がどれだけ悪くなっても、',
          urara.sex,
          'を助けられるのは自分だけ……',
        ],
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_win_s: (() => {
    const title = '前へ、前へ……';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.print_and_wait(
        'さっき横を過ぎたの、ゴール板だよね……ウララ、勝った？',
      );
      await urara.print_and_wait(
        'よかった。今日のウララも、誰にも負けてない。ウララ、みんなに認められた？みんな、きっと嬉しいよね？',
      );
      await urara.print_and_wait(
        '今日の調子、やっぱりいいね。体はちょっと鈍いけど、もう痛くない。全身の気持ち悪さも、消えた……',
      );
      await urara.print_and_wait(
        'でもみんなの目、なんで変なの？今のウララの顔、すごく悪いから？',
      );
      await urara.print_and_wait(
        '大丈夫。ウララ、ちょっとふらふらしてるだけ。すぐ笑うから、みんな心配しないで……',
      );
      await urara.print_and_wait([
        '……',
        callname,
        '！今日もウララ、1着だよ！怖かったし、嫌だったけど、ウララ勝ったよ！',
      ]);
      await urara.print_and_wait(
        'だからそんな怖い顔しないで。柵を飛び越えるの、危ないよ。みんなも、笑って……',
      );

      era.printButton('「ウララ！大丈夫か？俺の声、聞こえるか？——？！」', 1);
      await era.input();

      await urara.print_and_wait([
        callname,
        '、心配しすぎだよ？ウララ、ちょっと疲れただけ。そんなに急いで走ってこなくていいのに……',
      ]);
      await urara.print_and_wait([
        'でも、',
        callname,
        ' の声、だんだん小さくなってない？なんでウララ、',
        callname,
        ' の話がだんだん聞こえないの？',
      ]);
      await urara.print_and_wait(
        '変だよ。なんで手が上がらないの？なんで足が動かないの？なんで体が感じないの？',
      );
      await urara.print_and_wait(
        '変だよ。なんで視界が狭くなってくの？なんで空が暗くなってくの？',
      );
      await urara.print_and_wait('変だよ。なんで声が出ないの？');
      await urara.print_and_wait('……');
      await urara.print_and_wait(
        '……痛い、暗い……ウララ、転んだの？何が起きたの……',
      );
      await urara.print_and_wait(
        '……怖い……ウララ、みんなに置いていかれるの？やだ……',
      );
      await urara.print_and_wait('……ウララ、まだ走れるのに……');
      await urara.print_and_wait(['……', callname, '……']);

      era.drawLine();
      await inner_urara.print_and_wait('舞台の中央の主役へ：');
      await inner_urara.print_and_wait(
        '舞台の小道具で作った翼は、やはり脆すぎましたね。でも落ちても、構いませんでしょう？',
      );
      await inner_urara.print_and_wait(
        '怖いなら、自分の心に隠れてください。疲れたなら、疲れた花を枯らせばいいのです。',
      );
      await inner_urara.print_and_wait(
        '不安なら、頼れる人に庇護を求めてください。もう保てないなら、逃げても誰も責めませんよ？',
      );
      await inner_urara.print_and_wait(
        '大丈夫です。わたくしはいつでもウララを守ります。いつだって。とっくに約束したではありませんか？',
      );
      await inner_urara.print_and_wait('幕の向こうのトレーナーへ：');
      await inner_urara.print_and_wait([
        '残念ですね。もう少しだったのに。翼は溶けて、',
        urara.sex,
        'は結局、平凡な他人の姿になりました。',
      ]);
      await inner_urara.print_and_wait([
        'ですが、あなたのせいではありません。あなたと',
        urara.sex,
        'が、やりすぎただけです。養分を、使い果たしてしまったではありませんか？',
      ]);
      await inner_urara.print_and_wait(
        'それに、申しましたよね。物語を書き継ぐ権利は、わたくしが握ると。',
      );
      await inner_urara.print_and_wait(
        '責めはしません、と申しました。ただ、次にきちんとお話しするときは、心の準備をお願いします。',
      );
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_lose_s: (() => {
    const title = '前へ、前へ……';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.print_and_wait(
        'レース、もう終わった？それじゃあ……ウララ、また負けた？',
      );
      await urara.print_and_wait(
        'これじゃだめだよ。帰ったらちゃんと練習しなきゃ。次は、まだチャンスある……',
      );
      await urara.print_and_wait(
        'それに体の調子も戻った。もう痛くない。全身の気持ち悪さも、消えた……',
      );
      await urara.print_and_wait(
        'でもみんなの目、なんで変なの？今のウララの顔、すごく悪いから？',
      );
      await urara.print_and_wait(
        '大丈夫。ウララ、ちょっとふらふらしてるだけ。すぐ笑うから、みんな心配しないで……',
      );
      await urara.print_and_wait([
        '……',
        callname,
        '！今日もウララ、走り切ったよ！怖かったし、嫌だったけど、ウララ、レースを終えたよ！',
      ]);
      await urara.print_and_wait(
        'だからそんな怖い顔しないで。柵を飛び越えるの、危ないよ。みんなも、笑って……',
      );

      era.printButton('「ウララ！大丈夫か？俺の声、聞こえるか？——？！」', 1);
      await era.input();

      await urara.print_and_wait([
        callname,
        '、心配しすぎだよ？ウララ、ちょっと疲れただけ。そんなに急いで走ってこなくていいのに……',
      ]);
      await urara.print_and_wait([
        'でも、',
        callname,
        ' の声、だんだん小さくなってない？なんでウララ、',
        callname,
        ' の話がだんだん聞こえないの？',
      ]);
      await urara.print_and_wait(
        '変だよ。なんで手が上がらないの？なんで足が動かないの？なんで体が感じないの？',
      );
      await urara.print_and_wait(
        '変だよ。なんで視界が狭くなってくの？なんで空が暗くなってくの？',
      );
      await urara.print_and_wait('変だよ。なんで声が出ないの？');
      await urara.print_and_wait('……');
      await urara.print_and_wait(
        '……痛い、暗い……ウララ、転んだの？何が起きたの……',
      );
      await urara.print_and_wait(
        '……怖い……ウララ、みんなに置いていかれるの？やだ……',
      );
      await urara.print_and_wait('……ウララ、まだ走れるのに……');
      await urara.print_and_wait(['……', callname, '……']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_1: (() => {
    const title = (inner_urara) => [
      '「',
      inner_urara.get_colored_sex(),
      '」の願い',
    ];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await you.say_and_wait(
        'どういうことだ。夜は部屋で寝たはずなのに。ここは……学園の三女神像の前？なぜここで寝てる。',
        true,
      );
      await you.say_and_wait(
        '頭が痛い。昨夜、夢遊したのか。でも身なりは整っている。今の時刻は……もうこんな時間か。',
        true,
      );
      await you.say_and_wait(
        '何か忘れている気がする。でも今日はもっと大事なことがある。見逃したものは後でいい。',
        true,
      );
      await you.say_and_wait(
        '先にトレセンでウララと合流だ。今日は必ず……',
        true,
      );
      era.drawLine();
      era.printButton('「ウララ、月末は有馬記念だ。今の体は大丈夫か？」', 1);
      await era.input();

      await urara.say_and_wait(
        'だからもう大丈夫だよ！今のウララ、全然具合悪くない！',
      );
      await urara.say_and_wait([
        callname,
        '、今日は病院の再診、連れていかなくていいでしょ？あの日は調子が悪くて転んだだけだよ！',
      ]);

      era.printButton(
        '「それはよかった。だから今日は、ウララの体を診てもらいに来たわけじゃない。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'がらんと広い廊下に、二人分の足音だけが漂う。',
        you.get_colored_name(),
        ' とウララは、病院の静かで単調な白の中を歩いていく。',
      ]);
      await era.printAndWait([
        'ウララがコースで倒れて、奇跡的に異常なしになってから、定期の通院は二人の最近の日常になっていた。',
      ]);
      await era.printAndWait([
        '同年代の子が検査の手間と消毒液の匂いを嫌うように、ウララも毎回、小さな抗議を出す。',
      ]);
      await era.printAndWait([
        '……少なくとも最初は、そうだった。ある日、',
        you.get_colored_name(),
        ' は気づきにくい片隅で、誰かに捨てられた小動物を見つけた。',
      ]);
      await era.printAndWait([
        '忘れられたような部屋を開けて、',
        you.get_colored_name(),
        ' は隣の「ハルウララ」を、部屋の中央のベッドの前へ連れていった。',
      ]);
      await era.printAndWait([
        '白い病床で、体を丸めた桜色の',
        urara.teen_sex_title,
        'が耳と尻尾を小さく揺らし、健康で落ち着いた呼吸のまま静かに眠っている。',
      ]);
      await era.printAndWait([
        urara.sex,
        'のベッド脇に医療機器はない。通学でもするかのようにトレセンの制服を着て、ピンクのリボンも結びたてのように締まっている。',
      ]);
      await era.printAndWait([
        '平日に寝坊しただけの小さな',
        urara.uma_sex_title,
        'に見えるその子は、今 ',
        you.get_colored_name(),
        ' の隣で黙り込む「',
        urara.sex,
        '」と、寸分違わない。',
      ]);

      era.printButton(
        '「倒れる前は誰の目にも調子がおかしかった。なのに起きると、何もなかったみたいに心身とも健康だ。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '白いシーツに丸まったもう一つの桜色を見つめながら、',
        you.get_colored_name(),
        ' は顔を上げず、隣の「',
        urara.sex,
        '」と話を続ける。',
      ]);
      await era.printAndWait([
        '他人の顔を見なくても、',
        you.get_colored_name(),
        ' は最近ずっと傍にいた「',
        inner_urara.get_colored_actual_name(),
        '」が誰か、とっくに察していた。',
      ]);

      era.printButton(
        `「ウララは確かに丈夫な子だが、${urara.sex}がにんじんヒーローだった覚えはない。」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '気質と表情が反転し、病床の縁に座った、',
        urara.get_colored_name(),
        ' に似た「',
        urara.sex,
        '」は偽装を外し、憂いを帯びた素顔を見せた。',
      ]);
      await inner_urara.say_as_unknown_and_wait('……いつ、気づかれたのですか？');

      if (high_relation) {
        era.printButton(
          '「態度の変わり方が露骨すぎた。最初はウララが怒ってると思ったが、長く続きすぎた。」',
          1,
        );
        await era.input();
        await you.say_and_wait(
          [
            '付き合ってくれてありがとう。でも真似は、まだ少し足りない。ごめん、',
            urara.get_colored_name(),
            ' がこうなって、お前も辛いだろう……',
          ],
          true,
        );
        await era.printAndWait([
          '「',
          urara.get_colored_actual_name(),
          '」よりずっと暗い桜色の瞳を見上げて、',
          you.get_colored_name(),
          ' は',
          urara.sex,
          'と目を合わせた。',
        ]);
      } else {
        era.printButton(
          '「最初は気づけなかった。でも違和感はあった。最近のウララも、ずいぶん孤立して見えた。」',
          1,
        );
        await era.input();
        await you.say_and_wait(
          'それに、俺もたくさん間違えただろ。お前がここまでする必要はなかったはずだ。',
          true,
        );
        await era.printAndWait([
          '罪悪感で疲れた顔を揉んだあと、',
          you.get_colored_name(),
          ' はそれでも、その暗い桜色の瞳と向き合った。',
        ]);
      }
      await inner_urara.say_as_unknown_and_wait(
        'でも、こうするしかありませんでした。もう最後です。ウララが倒れたことを知られてはいけません。もっと厄介になります。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'それに、わたくしがしなければ、あなたが何をするかわかりません。ウララが目覚めたときにあなたが見えないと、困ります。',
      );
      await era.printAndWait([
        '傍らでまだ眠る ',
        urara.get_colored_name(),
        ' を撫でて、「',
        urara.sex,
        '」の表情も、子をなだめる母親のように柔らいだ。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        'も、そうですよ。',
        urara.sex,
        'はいつまで眠るつもりですか。まだ有馬に出るのでしょう。早く起きてください。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        callname,
        ' も、もうあなたを見つけましたよ？ このまま起きなければ、わたくしがいつ消えるかもわかりませんよ？',
      ]);

      era.printButton(
        `「……消える？お前は実在してるし、完全に${urara.sex}でもないだろ。それでも『見えない友だち』は消えるのか？」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' の低い疑問を聞いて、「',
        urara.sex,
        '」は再び目の前の ',
        you.get_colored_name(),
        ' へ向き直り、いつもの哀しみが読める笑顔を作り直した。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'そんな予感があるだけです。わたくしも本物ではなく、誰かの欠片、誰かの影かもしれません。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'だから最後にウララが心身とも健康に物語を終えられるなら、わたくしが消えても構いません。',
      );

      era.printButton(
        '「お前も落ち着け。世話焼きで支配欲が強いのは認めるが、自分をそう言い切るのはやりすぎだ。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '見た目は小さな',
        urara.uma_sex_title,
        'そのものなのに、悲観ばかり口にする。目の前の光景は、見ていて耐えがたい。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'そうでしょうか。くどい',
        urara.sex_code === 1 ? 'ショタ' : 'ロリ',
        'コンの',
        you.adult_sex_title,
        '（あなた）に、まだ突っ込まれたくはありませんよ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の返事を聞いて、',
        urara.sex,
        'の笑顔から自嘲の哀しみが少し減った。それでも自己否定の話題は、ほとんど動かさず飛ばした。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '先ほどの続きですが……',
        urara.sex,
        'が倒れたあと、ふと思い出したのです。わたくしがしばらく',
        urara.sex,
        'の体を借りて、',
        urara.sex,
        'の代わりに走り続けられるかもしれない、と。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'だから一時的に',
        urara.sex,
        'の精神を隠しました。見つかるはずはなかったのに、結局あなたに見つかってしまいました。',
      ]);
      await era.printAndWait([
        '「',
        urara.sex,
        '」が ',
        urara.get_colored_name(),
        ' を撫でる手が、小さな',
        urara.uma_sex_title,
        'の体へゆっくり沈む。映写機の投影を通り抜けるように。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'それに、これは問題を解決する方法でもありません。わたくしが有馬へ行けても、意味はありませんから……',
      );
      await inner_urara.say_as_unknown_and_wait([
        'それでも',
        urara.sex,
        'は眠ったまま、何もできないわたくしに走り方を教え続けてくれました。だから今まで演じられたのです。',
      ]);

      era.printButton(
        '「ウララがなぜこうなった……その問いは、自分で考えるべきかもしれない……」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        'でも正面から申し上げます。あなたの傍では、',
        urara.sex,
        'は自分が怖いことさえ忘れていました。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'だから完全に目覚めた',
        urara.sex,
        'が最初にしたことは、隠れることでした。',
        urara.sex,
        '自身もいつ目覚めるかわからない心の奥へ。',
      ]);
      await era.printAndWait([
        'だからこそ、「いい子は自分の心をいくらか見落とす」……だから「',
        urara.sex,
        '」はいつも、',
        urara.get_colored_name(),
        ' はそこまで強くない、と言っていた。',
      ]);
      await era.printAndWait(
        '優しすぎるから、人を傷つけるのが怖い。人の陰口が怖い。心の変化が怖い。ついには自分の勝利と願いまで怖い。',
      );
      await era.printAndWait(
        '人に迷惑をかけたくないから、誰にも吐き出さない。長く無視しすぎて、詰まった心はますます頑固になる。',
      );
      await era.printAndWait(
        '自己否定のあとの静けさを撫でたいあまり、理性をなくして傍の指導者に体の慰めまで求めてしまう……',
      );
      await era.printAndWait([
        '参ったな。そんな評価はしたくないが、この共感が高すぎて拗れたウマ娘は、一体',
        urara.sex,
        'の家の誰に似たんだ。',
      ]);

      era.printButton(
        `「それにしても早く気づけなかった。ウララの願いが重くなったのは${urara.sex}自身の選択でもある。だが俺も……」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        'あなたは十分です。それに、ウララに本当に冷酷になれますか。あなたが傍にいなければ、',
        urara.sex,
        'はとっくに折れていました。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'むしろあなたはずっと正しかったのです。結んだ人にしか解けません。ウララは自分で『目覚め』られず、他人も心の結びを解けません……',
      );

      era.printButton(
        `「つまり${era.get('love:52') >= 75 ? '恋人' : '友だち'}としても、トレーナーとしても、最後に本当の役には立てなかった、ということか？！」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' は傍のナイトテーブルを殴りたかった。だが ',
        urara.get_colored_name(),
        ' の穏やかな横顔を見て、震える手を下ろせなかった。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'あなたも、見た目ほど冷静ではありませんね。まあ今は、どちらも似たものです。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '能力がいつも少し足りず、世を拗らせることもできない凡人のトレーナー。何もできないのに他人へ幸福を押し込めようとする幻……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '……それに、黙って私たちを責めるような、目覚められない',
        urara.sex,
        '。何もかもぐちゃぐちゃです。',
      ]);

      era.printButton(
        `「何を言う。お前は${urara.sex}の哀れなトレーナーに、ずいぶん酷いこともしただろう？」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'だから今は、もうしません。物語の結末は自分の手に握る、と申しました。',
      );

      era.printButton(
        '「こうなったら余計にウララは諦めない。お前に追い出せはしない。」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'そんなに警戒しないでください。追い出しはしませんよ。むしろ、小さな眠り姫を起こす方法を知っています。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の七分警戒、三分困惑の視線に、「',
        urara.sex,
        '」はかえっていちばん穏やかな笑顔を見せた。その仕草が、余計に ',
        you.get_colored_name(),
        ' の警報を鳴らす。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'あなたも見ましたでしょう。倒れたウララは、自分の避難所のいちばん奥へ隠れました……',
      );
      await inner_urara.say_as_unknown_and_wait(
        'なら、その避難所の光景を現実にすれば、ウララは幸せに目覚めて、幸せに生きていけますよね？',
      );
      await inner_urara.say_as_unknown_and_wait([
        'それが今、わたくしが書く結末です。そしてそれが、ウララがあなたに',
        urara.sex,
        'を見つけさせた目的でもありますよ？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が後ろへ下がった瞬間、周囲の空間はすぐ見覚えのある灰白に染まり、滞る重圧がまた上から降りてきた。',
      ]);
      await era.printAndWait([
        'ずっとベッドの縁に座っていた「',
        urara.sex,
        '」が立ち上がり、',
        you.get_colored_name(),
        ' が引っ込めようとした手を掴み、',
        urara.uma_sex_title,
        'の力で簡単に病床へ引き倒した。',
      ]);
      await era.printAndWait([
        '視界がひっくり返るあいだに、',
        you.get_colored_name(),
        ' は二つの影がだんだん溶け合う ',
        urara.get_colored_name(),
        ' が、ゆっくり目を開けるのを見た——',
      ]);
      era.drawLine();
      await inner_urara.print_and_wait([
        '今の姿、あなたとウララが出会ったときによく似ていませんか。物忘れの激しい',
        urara.sex_code === 1 ? 'ショタ' : 'ロリ',
        'コンの',
        you.adult_sex_title,
        '（あなた）。',
      ]);
      await inner_urara.print_and_wait(
        'なぜそんなに重い目をするのです。ああ、すみません。今のあなたは話せませんでしたね。今のわたくしも同じです。',
      );
      await inner_urara.print_and_wait([
        'そうです。なぜ、あなたなのです。なぜ',
        urara.sex,
        'があんなに怖がっているのに、まだあなたと進もうとする、そのあなたなのです。',
      ]);
      await inner_urara.print_and_wait(
        'わたくしはなぜこの物語を書くのです。あなたはなぜこの物語を終えるのです。なぜこれは私たちの物語なのです。',
      );
      await inner_urara.print_and_wait(
        '自分の問題も山ほどあるのに、今のわたくしはあなたを見つめていたいだけです。最初にあなたに惹かれたのは、わたくしだったのかもしれません……',
      );
      await inner_urara.print_and_wait(
        'よかった。あなたの体は以前と同じように温かい。少し楽になってきましたか。',
      );
      await inner_urara.print_and_wait(
        '大丈夫です。触れても侵しても、あなたに惹かれた二人はもう離れません。だから、もう少し正直でもいいのですよ？',
      );
      await inner_urara.print_and_wait(
        'なぜ避けるのです。こんな幸福を受けたくないからですか。残念ですが、今のあなたに拒む権利はありません。',
      );
      await inner_urara.print_and_wait(
        '心配いりません。ウララも、あなたも、みんなも喜べる世界を作ります。',
      );
      await inner_urara.print_and_wait(
        '明日、あなたは何も覚えていません。でも次に目を開けたとき、ウララは幸せにあなたの傍へ戻っていますよ？',
      );
      await inner_urara.print_and_wait('では、ゆっくり眠ってください。');
      era.drawLine();
      await era.printAndWait([
        '悪夢から跳ね起きて、',
        you.get_colored_name(),
        ' は鈍く痛む額を押さえ、ぼやけた視界で周りを見渡した。',
      ]);
      await era.printAndWait(
        'ここは学園の三女神像の前のベンチらしい。なぜここで寝ていた。さっきは何をするつもりだった。',
      );
      await era.printAndWait([
        'かなり怖い夢を見たらしい。だが ',
        you.get_colored_name(),
        ' は、どうしても中身を一つも思い出せない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の前に立っているのは、どれだけ待っていたかわからないのに、まだ笑顔の ',
        urara.get_colored_name(),
        '。',
      ]);

      era.printButton(
        '「寝てしまってすまない。ウララ、今日は病院へ行ったか……」',
        1,
      );
      await era.input();

      await you.say_and_wait(
        [
          '病院……？ なぜ病院と言う。目の前の担当は健康そのものなのに、なぜ',
          urara.sex,
          'を病院へ連れていこうと思った。',
        ],
        true,
      );
      await era.printAndWait(
        'おかしい。どこかがおかしい。大事なことを忘れている。でも……何を……？',
      );
      await urara.say_and_wait([
        'え？病院？',
        callname,
        '、寝ぼけてる？ウララ、まだ健康診断いらないよ？',
      ]);
      await era.printAndWait([
        '現実味のないほど柔らかい日差しを背に、満面の笑顔の ',
        urara.get_colored_name(),
        ' が、影の中から半覚醒の ',
        you.get_colored_name(),
        ' へ助けの手を伸ばした。',
      ]);

      era.printButton(
        '「うん、ああ、そうだな。すまない。本当に寝ぼけていた——」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' が ',
        urara.get_colored_name(),
        ' の差し出した手を握ったとき、広い学園は草木まで音をなくしていた——',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_2: (() => {
    const title = '「虚無」の渇望';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        ' は思う？ウララの願い、みんなの走りに見合う？',
      ]);
      await urara.say_and_wait([
        callname,
        ' は思う？ウララの願い、みんなの助けに見合う？',
      ]);
      await urara.say_and_wait([
        callname,
        ' の手、ウララよりずっと大きいね。片手だけでウララの首、囲める。',
      ]);
      await urara.say_and_wait([
        callname,
        '、両手をウララの首に置いて、力を入れて押して？',
      ]);
      await urara.say_and_wait([
        callname,
        '、みんなの前に出るのが恥ずかしくて逃げたウララを、あなたの人形にして——',
      ]);
      era.drawLine();
      await era.printAndWait([
        '何度目かわからない悪夢から跳ね起きて、',
        you.get_colored_name(),
        ' は三女神像の前のベンチで、鈍く痛む額を押さえた。',
      ]);
      await era.printAndWait(
        '今日もわけのわからない場所で目が覚める。周りも相変わらず、怖いくらい静かだ。',
      );
      await era.printAndWait(
        '人が消えたわけではない。周囲の空間が静止したみたいに、環境の雑音だけが消えている。',
      );
      await era.printAndWait(
        'いちばんつらいのはそれではない。この週に入ってから、時間も文字どおり止まっている。',
      );
      await era.printAndWait(
        '道端の時計だけでなく、腕時計、携帯、パソコン。目に入る時刻の印は、どれも同じ瞬間で止まっている。',
      );
      await era.printAndWait(
        '他人に時刻を聞く手だけはまだ効く。だから当面、普通の生活は保てている。',
      );
      await era.printAndWait(
        'だからこそ、正常な時間も空間の感覚も失ったあとで普通に暮らす他人が、かえって異常に見える。',
      );
      await era.printAndWait([
        '常識から見れば、これは自分が狂った、ということだ。今の ',
        you.get_colored_name(),
        ' にとっては、世界と自分が一緒に狂った、というほうが近い。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の悪夢も、周囲の奇妙な変化も、どこもおかしい。なのに、なぜこうなったかを忘れている……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が重い頭を上げかけたとき、心の弱い違和が急に膨らんだ——',
      ]);
      await era.printAndWait([
        '違和と一緒に既視感も来た。',
        you.get_colored_name(),
        ' の前に立っているのは、どれだけ待っていたかわからないのに、まだ笑顔の ',
        urara.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        callname,
        '！今日は一緒に遊びに行く約束でしょ？なんでまたここで寝てるの。疲れた——',
      ]);

      era.printButton('「ウララ、今はどれくらい経った？」', 1);
      await era.input();

      await era.printAndWait([
        '急に顔を上げて ',
        urara.get_colored_name(),
        ' の挨拶を遮り、ようやく何が起きているかわかった ',
        you.get_colored_name(),
        ' は、真剣な目で ',
        urara.get_colored_name(),
        ' を見た。',
      ]);
      await urara.say_and_wait([
        'あ、',
        callname,
        '、最近いつも時間聞いてるね。でもそんなに長く寝てないよ？えーっと……',
      ]);

      era.printButton(
        `「今日の時刻じゃない。ウララ、お前の${callname}が聞いてるのは、『時間が止まってからどれだけ経ったか』だ。」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('——');
      await era.printAndWait([
        '静かな豪雨を経たように、長い沈黙のあと、',
        urara.get_colored_name(),
        ' はベンチの反対側へ静かに座った。',
      ]);
      await era.printAndWait([
        'ただ今回は、',
        urara.sex,
        'の小さな顔にいつもの笑顔はなく、悪いことをした子どものような申し訳なさだけがあった。',
      ]);
      await urara.say_and_wait(
        'ごめんね。ウララも、これが何週目か、わからない……',
      );
      await urara.say_and_wait([
        '『',
        urara.sex,
        '』が、ここはどれだけいてもいいって言ったから。でも……やっぱり ',
        callname,
        ' は思い出す……',
      ]);
      await urara.say_and_wait(
        'ウララ、これがだめだって知ってる。なのに、嘘の日々に浸っちゃってる……',
      );
      await era.printAndWait([
        urara.sex,
        'は今度こそ何か間違えたらしい。もっとも ',
        you.get_colored_name(),
        ' は、何かを思い出したから',
        urara.sex,
        'に聞いたわけではない。',
      ]);

      era.printButton(
        '「実は今も何も思い出していない。急にどこかがおかしいと気づいただけだ。最近、また何かあったか？」',
        1,
      );

      await urara.say_and_wait([
        'ないよ？ただ、',
        callname,
        ' が何か思い出すたびに、『',
        urara.sex,
        '』が出てきて ',
        callname,
        ' の記憶を持っていくから……',
      ]);
      await era.printAndWait(
        '考えれば当然だ。あの過保護な保護者が不安定要素を野放しにするはずがない。今は百の備えに一つの抜け、くらいだろう。',
      );
      await era.printAndWait([
        'それに ',
        you.get_colored_name(),
        ' も、この機会は絶対に逃さない。少なくとも今の ',
        urara.get_colored_name(),
        ' は「先月」よりずっと普通だ。今なら……',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' が口を開く前に、',
        urara.get_colored_name(),
        ' のほうが先に、いちばん近い大人へ懇願の目を向けた。',
      ]);
      await urara.say_and_wait([
        '逃げないで、って ',
        callname,
        ' は絶対言うよね。でも……ウララ、まだここにもう少しいたい……',
      ]);

      era.printButton(
        `「今の全部が、ウララの友だちの${urara.sex}のために作った紙の箱庭だと知っていても、か？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'でもここ、本当に安心する。',
        callname,
        ' もわかるでしょ？たとえ……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' が途中で止めた沈黙を受けて、',
        you.get_colored_name(),
        ' はため息をついて続きを引き取った。',
      ]);

      era.printButton(
        '「ウララ、俺が見る変な夢……中身は言わない。全部、本当に起きたことだな？」',
        1,
      );
      await era.input();

      await urara.say_and_wait('うん……');
      await era.printAndWait([
        '当たりではあった。だが ',
        urara.get_colored_name(),
        ' が認めた瞬間、かえって向き合いたくなくなった。',
        urara.get_colored_name(),
        ' は……そんなに倒錯した「趣味」の子だったのか。',
      ]);

      era.printButton(
        `「最後は毎回、自分の${callname}に傷つけられても構わないのか。自分をそんな目に遭わせるな。」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'だってウララ、怖いんだよ。いつかウララが失敗したら。いつか、もう立てなくなったら……',
      );
      await urara.say_and_wait([
        'だからいつか、みんなも ',
        callname,
        ' も、ウララの傍にいなくなったら……',
      ]);
      await urara.say_and_wait(
        '……違う。そんなこと起きないって、ウララは知ってる。それでも怖くて逃げた……',
      );
      await urara.say_and_wait('それは……');

      era.printButton(
        '「それはウララが、もともとどうでもよくなんてなかったからだろ。でも全部を重くしすぎた。もう少し加減したほうがいい。」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'でも、',
        callname,
        ' はウララとずっと一緒にいたくないの？',
        callname,
        ' 一人だけでも満たせたら……',
      ]);

      era.printButton(
        '「それじゃあ、ウララと、お前の後ろ向きな友だちのやりたいことと、何が違う。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '泣きそうな ',
        urara.get_colored_name(),
        ' の目を真正面から見て、',
        you.get_colored_name(),
        ' は心を折られる気持ちを押さえ、もう一度口を開いた。',
      ]);
      await era.printAndWait([
        '少なくとも今回は以前と違う。それに、',
        urara.get_colored_name(),
        ' の ',
        callname,
        ' はもう、',
        urara.get_colored_name(),
        ' が「',
        urara.sex,
        '」と同じ悲観の顔をするのを見たくない。',
      ]);

      era.printButton(
        `「今のウララは${callname}が預かる希望だけを見てるのかもしれない。でも俺の希望は、ウララの明日を見ることだ。」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '今度も日差しの下だ。ただし今度は、覚悟の決まった ',
        you.get_colored_name(),
        ' が、目を明るくしていく ',
        urara.get_colored_name(),
        ' へ手を伸ばした。ずっと、こうだったのではないか。',
      ]);
      await era.printAndWait(
        'どれだけ迷っても、未来は一緒に越えられる。終局が近くても。結果のない沈黙より、もう一度信じ合おう。',
      );

      era.printButton(
        '「結果はそれからだ。俺はいつもウララの後ろに立つ。だからみんなにも見せよう。ウララが有馬記念で走る姿を。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '自分のトレーナーを見て、',
        urara.get_colored_name(),
        ' はベンチから立つ勇気を少し取り戻し、指をそっと ',
        you.get_colored_name(),
        ' の手に重ねた。',
      ]);
      await urara.say_and_wait([
        'じゃあ……',
        callname,
        '、一緒に『',
        urara.sex,
        '』に謝りに行っていい？',
      ]);

      era.printButton(
        `「もちろんいい。それに${inner_urara.sex}には、こっちからも言いたいことが山ほどある。」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('うん！じゃあ、そうしよう……');
      await era.printAndWait([
        'そのあと視界が灰白の重圧に染まり、',
        you.get_colored_name(),
        ' の前の小さな',
        urara.uma_sex_title,
        'を「',
        urara.sex,
        '」が強引に入れ替わった。怒りで、',
        you.get_colored_name(),
        ' が ',
        urara.get_colored_name(),
        ' へ伸ばした手を叩いた。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '少し目を離すと出てくるんですね。ウララを追い詰めて、何の意味があります。',
        urara.sex,
        'の願いを守ればいいではありませんか。',
      ]);

      era.printButton(
        '「キノコみたいに言うな。それに、一緒に謝りに行く約束だっただろう。どれだけ狭量なんだ。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '狙いを定めた「',
        urara.sex,
        '」を前に、',
        you.get_colored_name(),
        ' は仕方なく、毛を逆立てたピンクの子猫から距離を取った。',
      ]);

      era.printButton(
        '「それに、よく考えろ。今いちばん現状に不安なのもウララではなく……」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        'そうです！だから嫌いなんです！あなたもウララも、',
        urara.sex,
        'の周りも、みんな同じです！',
      ]);
      await era.printAndWait([
        '堪忍袋の緒が切れた爆発だった。一歩踏み出し、',
        you.get_colored_name(),
        ' の服を強く掴む',
        urara.teen_sex_title,
        'が、泣きながら底に溜めた厭世を吐き出す。',
      ]);
      await era.printAndWait(
        'いつの間にか周囲から、ガラスを叩き割るような脆い音が無数に響く。涙が落ちるたび、背景のような世界もばらばらになっていく。',
      );
      await era.printAndWait([
        '異常の中心に立っていても、もう止めるには遅い。「',
        urara.sex,
        '」に引っ張られながら、',
        you.get_colored_name(),
        ' は冷静に話を続けた。',
      ]);

      era.printButton(
        '「……嫌いだからだろうに、お前はずっとウララを助けていただろう？」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        'そうです。なぜでしょう。',
        urara.sex,
        'が負けるのを見て、',
        urara.sex,
        'に願いを捨てさせればよかったのに！',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'そうすれば',
        urara.sex,
        'は家に戻って普通の暮らしができた……いいえ、最初から',
        urara.sex,
        'の声かけを拒めばよかったのです！',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '最初から、',
        urara.sex,
        'の笑顔に心を動かさなければよかった。でもそれは、わたくし自身の選択なのです……',
      ]);
      await era.printAndWait([
        '今の',
        urara.sex,
        'を、どう言えばいい。すべてを拒む悲しみと怒り、その先にあるのは……嫉妬なのか、無力さなのか。',
      ]);
      await era.printAndWait([
        '素直になれない',
        urara.sex,
        'は、周囲への嫌悪を抱きながら、何もできないせいで世間への未練まで抱えている。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'そうです。もう二度と助けません。一人も二人も、馬鹿ばかりで……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '『希望と閃き』という虚無にすべてを賭けて、あんなに奪い合う。失敗したら全部終わりではありませんか？！',
      );

      era.printButton(
        '「人生は一度きりだ。明日へ行かなければ過去にも固定できない。お前が今やってることと同じだ——」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'はっ！あなたもまだ足りないのですか。ウララはあなたのために、わたくしが夢にも見なかった1着を、いくつも、いくつも取ったのですよ！',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ここまで来て！無私の願いのために進めばまた人を傷つけるなら、少し欲張ったっていいではありませんか！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の言葉を荒く遮り、',
        urara.teen_sex_title,
        'が涙の中で無理に作った笑顔は、壊れた人形のようで痛々しい。',
      ]);
      await era.printAndWait([
        'すでに',
        urara.sex,
        'に締められて息が苦しくても、',
        you.get_colored_name(),
        ' はもう一度',
        urara.sex,
        'の「全部捨てる」意志に従うつもりはなかった。',
      ]);

      era.printButton(
        `「ウララが走るのは、もともと俺のためじゃない。今それを自分のために使うなら、${urara.sex}の努力は全部水の泡だ。」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        'ごまかさないでください！水の泡と言っているのはウララですか、それともあなたの事業ですか。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'わたくしは……最初からあなたを愛していたのに……結局あなたも、他の人と同じです……',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ウララに努力を続けさせて、また人と自分を傷つけるくらいなら、今すぐ、今すぐ……',
      );
      await era.printAndWait([
        '自分の涙に言葉を詰まらせ、力なく ',
        you.get_colored_name(),
        ' の服を放し、',
        urara.teen_sex_title,
        'は自棄になって後ろのベンチへ座り直した。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' を退けた、というより、今の小さな',
        urara.uma_sex_title,
        'は倒れかけの ',
        urara.get_colored_name(),
        ' と同じで、自分の歪みに押し潰されそうだった。',
      ]);

      era.printButton('「やっぱり、いちばん怖いのは、お前だな……」', 1);
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '……ごめんなさい……ずっとひどいことばかり……でも、本当に怖いのです……',
      );
      await inner_urara.say_as_unknown_and_wait(
        'あなたはいつも正しく、正しい答えをまっすぐに言います。嫌われるわたくしには、あなたの望む姿には絶対なれません……',
      );
      await era.printAndWait(
        '何も信じないのに、愛だけは拗らせて信じている。とんでもない世界級の難題だ。',
      );
      await era.printAndWait([
        'どう返せばいい。こんなに悲しく厭世的な人に愛されている自分は、',
        urara.sex,
        'が受け取れる約束を、何と置けばいい。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'やはり何も言わないのですね……最後くらい、わたくしの我がままに少し応えて、嘘でも残ると言ってくれると思ったのに……',
      );
      await urara.say_and_wait([
        '違うよ？あなたの気持ちが熱すぎて、もともと『さっぱり』してた ',
        callname,
        ' が『くどく』なっただけ！',
      ]);
      await era.printAndWait([
        '砕ける音が、静止と流動の境をぼやけさせる。今 ',
        you.get_colored_name(),
        ' の隣に立っているのは、いつの間に来たのかわからない桜色だ。',
      ]);
      await era.printAndWait([
        '英雄の登場か。少なくとも今回、',
        urara.get_colored_name(),
        ' はようやく ',
        you.get_colored_name(),
        ' と並んで「',
        urara.sex,
        '」の前に立った。',
      ]);
      await era.printAndWait(
        '惜しいのは、駆けつけてすぐ自分のトレーナーを「くどくなった」と言う英雄もいる、ということだ。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' を見て、目は泣き腫れていても、「',
        urara.sex,
        '」は妹の前で強がる姉のように涙を拭った。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'はぁ……結局ウララも、みんなの英雄になりたいのですね……あなたはね……一番前を走ることが、そんなに美しいですか。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '最初のみんなが言ったように、楽しく自分でいればよかったではありませんか。本当に彼らを救えると思っているのですか。',
      );
      await era.printAndWait([
        'もう一人の自分の詰め寄りに、',
        urara.get_colored_name(),
        ' はかえって、最初に ',
        you.get_colored_name(),
        ' と話していたときより覚悟を固めた。',
      ]);
      await urara.say_and_wait(
        'ウララ、そんなこと思ってないよ。だってみんな強いから。ウララはお返しがしたい。それに……',
      );
      await urara.say_and_wait(
        '今聞いたよ。あなたもずっと辛かったんだね。だから余計に、逃げちゃだめ。',
      );
      await urara.say_and_wait(
        'ごめんね。あなたの気持ち、ウララは初めて聞いた。だからこそ、もっと走らなきゃ！',
      );
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'は掌を握りしめる。揺れる桜色の瞳に、',
        urara.elder_sibling_sex_title,
        'のようなもう一人の自分が映る。',
      ]);
      await urara.say_and_wait(
        'だって、ここにもっとウララが必要な人がいるから。だから、もう一度ウララを信じて……？',
      );
      await inner_urara.say_as_unknown_and_wait(
        'はぁ……ウララまで、わたくしを憐れみたいのですか……',
      );
      await urara.say_and_wait(
        '違うよ。他の人には見えなくても、ウララと一緒に大きくなって、ずっと守ってくれたあなたも、ウララの英雄だから！',
      );
      await urara.say_and_wait([
        'だからウララも ',
        callname,
        ' もみんなも、どうでもいい。私たちと、一緒に来て……！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の前に立ち、心に隠れたもう一人の ',
        urara.get_colored_name(),
        ' と向き合う桜色の',
        urara.sex,
        'は、一瞬でかつての無邪気さを脱いだように見えた。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の変化を見て、ずっと努力してきた ',
        you.get_colored_name(),
        ' だけでなく、「',
        urara.sex,
        '」も腫れた目を見開いて、一瞬だけ喜びを見せた。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'はは……そうだったのですね。ウララが強くなる最後の部品は、わたくしだった……',
      );
      await era.printAndWait([
        'それでも意地っ張りな',
        urara.sex,
        'は、虚無の裂けた世界で ',
        urara.get_colored_name(),
        ' の誘いを受け取らなかった。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'あなたたちは理屈の通じない人たちです。でもわたくしは、簡単には終わらせません……',
      );
      await era.printAndWait([
        '言い終えると、ベンチの「',
        urara.sex,
        '」は我がままな宣言だけ残して消え、周囲の砕け続ける音も同時に止まった。',
      ]);
      await era.printAndWait([
        '時間がまた回り始め、鳥の声と風も二人の傍へ戻った。だが',
        urara.sex,
        'の言葉から見て、循環はまだ続いているだろう。',
      ]);
      await era.printAndWait(
        '問題はまだ解けていない。それでも今、残された二人は少し落ち着き、ようやく互いを気遣えた。',
      );
      await era.printAndWait([
        '隣へ視線を向けた瞬間、',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' が両手を出し、戸惑いながら頬から落ちる涙を受けているのを見た。',
      ]);
      await urara.say_and_wait([
        'え？',
        callname,
        '、ウララの顔のこれ……ウララ、泣いてる？急に、すごく悲しくなったの？',
      ]);
      await urara.say_and_wait([
        'これ、',
        urara.sex,
        'の気持ち？ウララがもっと早く気づけてたら……',
      ]);

      era.printButton(
        `「大丈夫だ。少なくとも今週は無事に終わるはずだ。そのあと、${inner_urara.sex}を探しに行こう……」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '……うん！でもウララ、',
        urara.sex,
        'が感じない。',
        urara.sex,
        '、どこへ行ったの？',
      ]);

      era.printButton(
        '「親愛なる女神さまに聞いてみるか。学園の女神像の前に、ベンチなんてなかった気がする。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'それから ',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' は同時に、すべてを見てきたように、ずっと静かに目を細めて微笑む三女神像を見た——',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_3: (() => {
    const title = (urara) => [
      '「みんな」の願い、',
      { color: urara.color, content: `「${urara.actual_name}」` },
      'の願い',
    ];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        '、先に行く準備できた？ウララ、すぐ追いつく！今日は絶対に',
        urara.sex,
        'を連れて帰るよ！',
      ]);
      era.drawLine();

      era.printButton(
        '「今日は天気がよくないな。ここに座って、何か悩んでいるのか？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '灰白の空間を歩き続け、',
        you.get_colored_name(),
        ' は広い草原で、その小さな姿を見つけた。',
      ]);
      await era.printAndWait(
        '自分でも初めて入れる場所だ。不思議だ。さっきまで女神像の前にいたのに……',
      );
      await era.printAndWait([
        'ただここの主は客を極端に拒む。的外れな挨拶を無視した',
        urara.sex,
        'は、',
        you.get_colored_name(),
        ' が近づいた瞬間、草地から跳ね起きた。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……どうやってここに来たのです。一人も二人も、なぜ残ろうとしないのです……',
      );
      await era.printAndWait([
        'ここにいるはずのない「侵入者」へ恨みの目を向け、目の前の小さな',
        urara.uma_sex_title,
        'は不安を帯びて ',
        you.get_colored_name(),
        ' に問い詰めた。',
      ]);

      era.printButton(
        '「ここはお前の世界だ。外の循環もお前が作った。だから少なくとも両側は繋がっている。道はあるだろ？」',
        1,
      );
      await era.input();

      await you.say_and_wait(
        'つまり客が来たいなら、主人が少しでも許す気持ちがあれば、客はお前の望むとおりここに現れる……',
      );
      await era.printAndWait([
        '子ども向けの知恵玩具を解くみたいな言い方で、',
        you.get_colored_name(),
        ' は仕方なく肩をすくめた。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '聞きたいのは、どうして知っているかなのです……',
      );

      era.printButton(
        '「ウララが三女神に少し聞いただけだ。それだけだ。だから少し準備して入ってきた……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' がどう聞いたかは本当にわからない。',
        urara.uma_sex_title,
        'のことも三女神のことも、そこまで解明しなくていいだろう。',
      ]);
      await era.printAndWait([
        '疑いの鋭い視線に耐えきれず、',
        you.get_colored_name(),
        ' は黙って目を逸らした。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '今度も他人の愛を、押し込み強盗のピッキングに使ったのですか。あなたは人の気持ちを消費する最低な人です……！',
      );

      era.printButton(
        '「まだ言ってもいないのに自分で……うわ！わかったわかった！殴るな、悪い。今回だけ、許してくれ。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '見知らぬ場所でウマ跳びを食らいかけ、限界の距離で',
        urara.uma_sex_title,
        'の襲撃をかわした ',
        you.get_colored_name(),
        ' は、魂が飛びそうだった。',
      ]);
      await era.printAndWait(
        '警察のいない世界でも、主人への早急な謝罪は役に立つ。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'またそうやって、人の心を強引にこじ開け、他人の意味を押しつける。卑劣ではありませんか。',
      );

      era.printButton(
        '「そうかもしれない。だがそれがどうした。ウララも俺に、ここに立てる『意味』をくれた。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '率直な ',
        you.get_colored_name(),
        ' を前に、「',
        urara.sex,
        '」も黙った。すべては言葉の外にある。最初の出会いが、そうだった。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' に出会っていなければ、',
        you.get_colored_name(),
        ' は今もあの日の迷いから答えを得られず、ここにも来なかっただろう。',
      ]);
      await era.printAndWait([
        '「',
        urara.sex,
        '」の選択がなければ、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に出会わず、三年の二人三脚の物語もここまでは書かれなかった。',
      ]);
      await era.printAndWait([
        'さらに遡れば、始まりはたぶん、',
        urara.get_colored_name(),
        ' が「強引に」孤独な人間を生活へ引き込んだ瞬間だ。',
      ]);
      await era.printAndWait([
        'ため息をついて、',
        you.get_colored_name(),
        ' は試しに、黙って灰白の草地に座り直した小さな',
        urara.uma_sex_title,
        'の隣へしゃがんだ。',
      ]);

      era.printButton(
        '「話を変えよう。お前に会う準備をしてた日々、時間は進まなかったが、ウララはわりと楽しそうだった。」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        'それで、ですか。休みが足りたら、また',
        urara.sex,
        'を押して進ませるのですか。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'ウララさえ知っているではありませんか。物語の完結は、わたくしが握ると。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の顔を見たくないらしい。「',
        urara.sex,
        '」は耳を伏せ、硬い動きで頭を ',
        you.get_colored_name(),
        ' と反対へねじった。',
      ]);

      era.printButton(
        '「今もこうして座っているのは、お前がこの物語を完結できないからだ。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '表情は見えない。だが今の',
        urara.sex,
        'の体は雷に打たれたように震えた。当たったらしい。',
      ]);
      await era.printAndWait([
        urara.sex,
        'がどうやったかはわからない。時間を循環させたのも、',
        urara.sex,
        'が本当に望む世界を作れなかったからだ。',
      ]);
      await era.printAndWait(
        '何かへの執着で三年の最後に時間を止められても、本当に停滞した世界は作れない。',
      );
      await era.printAndWait(
        '明日の到来は三女神にも止められない。日々隠れ続けても、何もできない。',
      );
      await era.printAndWait([
        'やりすぎた今の「',
        urara.sex,
        '」には、自分を黙って消す以外、循環を止める手がない。',
      ]);

      era.printButton('「——違うか？」', 1);
      await era.input();
      era.printButton('「『ハルウララ』。」', 1);
      era.printButton('「『ハルウララ』。」', 2);
      era.printButton('「『ハルウララ』。」', 3);
      await era.input();

      await era.printAndWait(
        'まったく、強がりにも限度がある。これでは誰も嬉しくならない。問題解決にもならない。',
      );
      await era.printAndWait([
        'とっくに察してはいたが、女神の冗談は大きい。一つの世界に、性格が正反対の二人の ',
        urara.get_colored_actual_name(),
        ' を詰め込んだ。',
      ]);
      await era.printAndWait([
        '何も信じられない小さな',
        urara.uma_sex_title,
        'を少しでも幸せにするためか。どうでもいい。今日の本題は',
        urara.sex,
        'を連れて帰ることだ。',
      ]);

      era.printButton(
        '「だから、事態をぐちゃぐちゃにしたとしても、こうする必要はないだろ。みんな、お前の帰りを待っている。」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '……は？ みんなが、わたくしを待つ？ あなたも頭がおかしくなったのですか。知っている人は——',
      );
      await era.printAndWait(
        '言い終わる前に、無数の声が空間の外側から流れ込んだ。灰白の草原が一気に、人が溢れる門前のようになる。',
      );
      await era.printAndWait([
        'ずっと ',
        urara.get_colored_name(),
        ' の陰に隠れていた「',
        urara.sex,
        '」でさえ何度も聞いた、いちばん馴染みの人たちの導きの声だ。',
      ]);
      await era.printAndWait(
        'トレセンの同級生、商店街のみんな、応援会の面々、それからあまり面識のない各地の応援の声……',
      );
      await era.printAndWait(
        '暗い天幕を剥がすように、誰かの走りを応援するように。優しく、しかし大きな声が草原全体を揺らす。',
      );

      era.printButton(
        '「お前もウララなら、ここの通じ方はいちばんわかるだろ。ここはお前一人の世界じゃないはずだ。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '衝撃で慌てて立ち上がった「',
        urara.sex,
        '」を前に、',
        you.get_colored_name(),
        ' は急がずポケットから携帯を取り出した。',
      ]);
      await era.printAndWait([
        'ここは「',
        urara.get_colored_name(),
        'の世界」。',
        urara.get_colored_name(),
        ' が受け取った祝福どおり、誰か一人でも ',
        urara.get_colored_name(),
        ' を想っていれば、',
        urara.sex,
        'はどこへでも行ける。',
      ]);
      await era.printAndWait([
        '今は小さな',
        urara.uma_sex_title,
        'を「勝利へ通す」より、',
        urara.get_colored_name(),
        ' が自分の手で「心の壁を破る」に近い。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は',
        urara.sex,
        'を支えるみんなで強くなる。だから',
        urara.sex,
        'を好きなみんなへ、',
        urara.sex,
        'にしか感じられないものを返せる。',
      ]);
      await era.printAndWait([
        '記憶がなくても、みんなは以前からおぼろげに気づいていた。「',
        urara.get_colored_actual_name(),
        '」という小さな',
        urara.uma_sex_title,
        'には、もう一面があるらしい、と。',
      ]);
      await era.printAndWait([
        'だから ',
        you.get_colored_name(),
        ' の支えで、',
        urara.get_colored_name(),
        ' はこの循環の中を走り回り、「',
        urara.sex,
        '」のことを、',
        urara.sex,
        'を助けたい人たちに分けた。',
      ]);
      await era.printAndWait([
        'だからもう一人の',
        urara.sex,
        'がどこに隠れても、',
        urara.get_colored_name(),
        ' は「みんなの願い」に乗って心のいちばん奥まで届く。',
      ]);
      await era.printAndWait([
        '時間さえあれば、変化は自然になる。',
        urara.get_colored_name(),
        ' と',
        urara.sex,
        'のトレーナーは、本当に運がいい。',
      ]);

      era.printButton(
        '「もちろん、みんなが『ウララ』を信じてくれるなら、トレーナーとしても場を盛り上げないとな。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'かつて何気なく揃えた、最後の質変の要素を取り出し、「',
        urara.sex,
        '」の前で ',
        you.get_colored_name(),
        ' は笑いながら通話録音の再生を押した。',
      ]);
      era.drawLine();
      await era.printAndWait([
        '準備運動を終え、勝負服を整えて、灰白の空間の入口の廊下に立ち、',
        urara.get_colored_name(),
        ' は今日の走りを始めた。',
      ]);
      await era.printAndWait([
        '先の道は有馬のコースよりずっと長い。',
        urara.get_colored_name(),
        ' の勘でしかない。だって',
        urara.sex,
        'はまだ怖い。',
      ]);
      await urara.say_and_wait(
        'でもあなたが怖いのは、傷つく『ウララ』？ それとも、何もできない『ウララ』？',
      );
      await era.printAndWait([
        '一人だけのレースで、',
        urara.get_colored_name(),
        ' は見えない友だちと話すように、前方の何もない灰白へ小さな問いを投げた。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' に答えを教える人はいない。なのに周りを導く残響は、',
        urara.get_colored_name(),
        ' の言葉に応えているみたいだった。',
      ]);
      await era.printAndWait(
        'みんなの願いの声。先が照らされるたび、レース場の両側に声が増えていく。',
      );
      await urara.say_and_wait(
        '努力しても結果が出ないこともある。変わる途中で全部失うこともある。ウララ、知ってるよ？',
      );
      await urara.say_and_wait(
        'でも傍観して足を止めたら、絶対に結果はない。道理がわかっても、それだけで大人にはなれない。',
      );
      await urara.say_and_wait(
        'もっと速く走る方法は、涙を拭いて、すりむいた膝に自分で絆創膏を貼ることだけ……',
      );
      await urara.say_and_wait(
        'だから唯一の機会を奪い合うとしても、怖がらないで。だって——',
      );
      await era.printAndWait([
        '両側を通り過ぎる影の中で、',
        urara.get_colored_name(),
        ' はレースのとき、いつも観客席のいちばん上で',
        urara.sex,
        'を見守るあの人を見た。',
      ]);
      await era.printAndWait([
        'そしてみんなの願いの声がそれぞれでも、',
        urara.get_colored_name(),
        ' の耳元にあるようにはっきり聞こえる「通話録音」。',
      ]);
      await era.printAndWait(
        'どれだけ進んだかわからない前方の灰白が光に剥がされ、無数の光点が道標のように空を舞う。',
      );
      await era.printAndWait([
        'どれだけ走ったかわからないのにまだ高い闘志の体を動かして、',
        urara.get_colored_name(),
        ' は1着の笑顔のまま、前方の割れた鏡面へ突っ込んだ——',
      ]);
      era.drawLine();
      await era.printAndWait([
        callname,
        ' の声「みんなはそこまで強くない。でもウララが心配するほど脆くもない。」',
      ]);
      await era.printAndWait([
        callname,
        ' の声「否定はしない。この道は残酷だ。家族のために進む人もいる。食べていくために走る人もいる。」',
      ]);
      await era.printAndWait([
        callname,
        ' の声「山より重い夢を背負う人もいる。大切な人との約束を守りたい人もいる……」',
      ]);
      await era.printAndWait([
        callname,
        ' の声「誰かが言ったとおり、コースに立って勝ったら、全員を笑顔にはできない。」',
      ]);
      await era.printAndWait([
        callname,
        ' の声「全員が『満足』できるのは、結局いちばん後ろを走ることだけだ。」',
      ]);
      await era.printAndWait([
        callname,
        ' の声「それでもみんなが願う『幸福と希望』は、他人が簡単に決められるものじゃない。」',
      ]);
      await era.printAndWait([
        callname,
        ' の声「何度転んでも、誰にも幸福を追う権利はある。希望の意味も、人それぞれだ。」',
      ]);
      await era.printAndWait([
        callname,
        ' の声「ウララがしているのは人を傷つけることじゃない。自分の理想を羽毛みたいに軽く思うな。」',
      ]);
      await era.printAndWait([
        callname,
        ' の声「『',
        urara.get_colored_actual_name(),
        '』がみんなの笑顔を預かる重さは、',
        urara.sex,
        'だけの重さだ。他の誰にも背負えない。」',
      ]);
      await era.printAndWait([
        callname,
        ' の声「負けてもいい、なんてことはない。他人を生かすために自分の夢を捨てもしない。」',
      ]);
      await era.printAndWait([
        callname,
        ' の声「だから思いきり走れ。みんなの希望を乗せて。ウララ自身が勝ちたいという信念も乗せて——」',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……！');
      await era.printAndWait(
        '灰をかぶった幻が瞬時に剥がれ、空間の破片が吹雪のように過ぎ、消えたあとに覆われていた原形が現れた。',
      );
      await era.printAndWait([
        '無数の色が「',
        urara.sex,
        '」の暗い瞳に反射を灯す。雲一つない青空の下、',
        urara.sex,
        'は不思議そうに周囲の変化を見回した。',
      ]);
      await era.printAndWait(
        '大事なレースの場ではない。それでもここはすべての原点だ——トレセンのトレーニング場。',
      );

      era.printButton(
        `「だから${urara.sex}は必ずここに来る。本当の翼が生えた、『無敵のハルウララ』が。」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' の言葉に合わせて、視界の果てからコースへ飛び込むのは、春風のような桜色だった。',
      ]);
      await era.printAndWait([
        'もう一人の自分の前に立ち、目に花を咲かせた小さな',
        urara.uma_sex_title,
        'が温かい笑顔を見せた。',
      ]);
      await urara.say_and_wait(
        'ごめんね、ちょっと遅れた！今日のウララ、やっとあなたを見つけたよ！',
      );
      await urara.say_and_wait(
        'ほら、無事に出る方法、もう話してあるよ？みんな待ってる。一緒に帰ろう！',
      );
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'の微笑みにどう向き合えばいいかわからないみたいに、「',
        urara.sex,
        '」は怯えて下がった。それでも目の前の人に両手を掴まれた。',
      ]);
      await era.printAndWait([
        '自分を強く掴む、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' それぞれの手を俯いて見て、孤独な「',
        urara.sex,
        '」の声が震え始めた。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……なぜ、またそこまでするのです。わたくしが消えれば、それで終わるのに……',
      );
      await urara.say_and_wait(
        '違うよ！黙って折れるだけじゃ、本当の終わりじゃない。みんなの心を閉じ込めるだけ！',
      );
      await urara.say_and_wait(
        'それにウララは、あなたを消させない！自分の友だちを助けるのは当たり前でしょ？',
      );
      await era.printAndWait([
        '手放さないいちばん大切な二人を見て、「',
        urara.sex,
        '」は物語の結末で覚悟を決めた主役のように唇を噛んだ。',
      ]);
      await era.printAndWait(
        '何を言いたくても、物語の主役はいつまでも幕の陰で沈んではいられない。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'やはりあなたたちは、放っておけない馬鹿たちです……',
      );
      await era.printAndWait([
        '掴まれた手を強く振り払い、「',
        urara.sex,
        '」は最後の意地を残して、目の前の二人から距離を取った。',
      ]);
      await era.printAndWait(
        '金属の軋みとともに、錆びて灰白だけになったゲートが、傍らのコースのスタートに現れた。',
      );
      await era.printAndWait([
        'ゲートの前で、黒い目が鋭くなる小さな',
        urara.uma_sex_title,
        'は、もう一人の自分と同じ形で、色だけひどく古い勝負服を引き締めた。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'そこまで言うなら、あなたと',
        urara.sex,
        'に、最後までわたくしの我がままを許してください——',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'だって、わたくしも『ハルウララ』なのですから！',
      );
      era.drawLine();
      await urara.say_and_wait(
        '自分とレースするなんて！うん！自分との戦いだから、ウララは負けない！',
      );
      await urara.say_and_wait([
        'ゲートに入るよ！大丈夫、',
        urara.sex,
        'を連れて帰る。ウララもちゃんと、自分の願いを立てたから！',
      ]);

      era.printButton(
        `「その調子だ。${inner_urara.sex}にも、お前の願いを聞かせてやれ！」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('お！ウララGO——！');
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} bourbon ミホノブルボン
   * @param {CharaTalk} rice ライスシャワー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   */
  async ws_95_46_3_win(urara, inner_urara, bourbon, rice, you, callname) {
    await inner_urara.print_and_wait(
      '無限に伸びるコースで、飛翔する桜色が暗い相手を後ろへ置いていく。勝負はもう決まった。',
    );
    await inner_urara.print_and_wait([
      'やはりわたくしは、戦場を重ねた',
      urara.sex,
      'には敵いません。どれだけ前へ手を伸ばしても、前方の',
      urara.sex,
      'にはもう届きません……',
    ]);
    await inner_urara.print_and_wait([
      '前方で、かつては幼く弱かった「もう一人の自分」が視界から消えるのを見て、',
      urara.teen_sex_title,
      'は速度の制御を失っていく。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '見えないところで……',
      urara.sex,
      'は、もうこんなに高く飛べていたのですね……',
    ]);
    await inner_urara.print_and_wait(
      '成長で壊れた心は、自分では塞がりません。「強くなる」という絆創膏で傷を覆うだけです——',
    );
    await inner_urara.print_and_wait(
      'それでも他人の視線を借りて、望まれる英雄へ自分を作り直せるなら、それも勇気です。',
    );
    await inner_urara.print_and_wait([
      urara.get_colored_name(),
      ' がいつも転び、絆創膏だらけでも、意地で走り続ける脚のように。',
    ]);
    await inner_urara.print_and_wait([
      urara.get_colored_actual_name(),
      ' という',
      urara.uma_sex_title,
      'は、本当は強くありません。',
      urara.sex,
      'は、自分で選んだ変化で、だんだん強くなっただけです。',
    ]);
    await inner_urara.print_and_wait([
      'だから今強くなった',
      urara.sex,
      'はそれを受け入れ、いちばん遠いそのコースへ、もう一度立ちました。',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '今の',
      urara.sex,
      'は、もう守られなくていい。わたくしも、もう必要とされていない……',
    ]);
    await inner_urara.say_as_unknown_and_wait(
      'やはりあなたは、いつも正しいのですね。わたくしは無力で、支配欲の強い、悪い保護者で、悪い友だちです……',
    );
    await inner_urara.print_and_wait([
      '勝負はついても、コースはまだ果てなく前へ伸びる。ゴールの代わりに、後ろから砕けが迫ってくる。',
    ]);
    await inner_urara.print_and_wait(
      '先に勝手に書き換えすぎた。最後に残るのは、黙って闇に呑まれる道だけです。',
    );
    await inner_urara.say_as_unknown_and_wait(
      '騙して、ごめんなさい。もう戻れません。でもこれで、大丈夫なはずです……',
    );
    await inner_urara.say_as_unknown_and_wait(
      'ちゃんとさよならを言うのは、次にしましょう……',
    );
    await inner_urara.print_and_wait([
      '後ろから迫る「結末」を前に、孤独な',
      urara.teen_sex_title,
      'は底を突いた根性を手放し、一人だけのレースを終えた——',
    ]);

    era.printButton(
      '「だから言っただろう！完結した物語なら、中身がどれだけ酷くても、結末には責任を取れ！」',
      1,
    );
    await era.input();
    era.printButton('「今だ！走れ！ハルウララ！」', 1);
    await era.input();
    await inner_urara.print_and_wait(
      'この声が誰への応援なのか、答えは要らないのかもしれません。',
    );
    await inner_urara.print_and_wait([
      you.get_colored_name(),
      ' の最後の全力の叫びと一緒に届いたのは、小さくても温かさと力をまた渡せる手でした。',
    ]);
    await inner_urara.print_and_wait([
      '前が一瞬で再び明るくなり、',
      urara.teen_sex_title,
      'の真正面から、もう聞けないと思っていた、もう一人の自分の呼び声が来ました。',
    ]);
    await inner_urara.print_and_wait(
      '手を伸ばしてきたのは、もう限界なのに、笑顔を捨てていない桜色でした。',
    );
    await urara.say_and_wait('諦めないで、あとちょっと！');
    await inner_urara.print_and_wait(
      'いわゆる絆でも、特別な言葉でもなく、もっと純粋で、心からの、春の花のような何か。',
    );
    await inner_urara.print_and_wait(
      '両側から人の声が起きる。いつの間にか後ろの崩壊は遠くなり、トレーニング場の簡素なスタンドは満席だった。',
    );
    await inner_urara.print_and_wait([
      '走りの中のすべてが遅くなったみたいに、',
      urara.get_colored_name(),
      ' に導かれた',
      urara.sex,
      'は、周囲の幻の全貌をやっと見た。',
    ]);
    await inner_urara.print_and_wait(
      'いつも一緒の「黄金世代」と「覇王世代」が、いつものように友だちのレースの傍にいる。',
    );
    await inner_urara.print_and_wait([
      bourbon.get_colored_name(),
      ' と大勢の同級生の隣に立つ ',
      rice.get_colored_name(),
      '。懐のまだ新しい絵本に、桜色の挿絵が刷られている。',
    ]);
    await inner_urara.print_and_wait(
      '商店街と応援会の面々、各地の見知らぬ人たちが、トレーナーに導かれてレースでいちばん見慣れた横断幕を掲げる。',
    );
    await inner_urara.print_and_wait([
      'それに、まだ足取りは重いのに、同じように笑顔で観客席の最前列に立ち、',
      urara.couple_title,
      'について前へ進む',
      urara.uma_sex_title,
      '……',
    ]);
    await inner_urara.print_and_wait([
      '無数の祝福の中で、',
      urara.sex,
      'は弱い助けの声の先、もう一人の自分が伸ばした手を強く掴んだ。',
    ]);
    await urara.say_and_wait(
      '離れたくないって声、聞こえたから。ウララ、やっと掴めた……',
    );
    await urara.say_and_wait('離れないよ……ウララと——一緒に来て！');
    await inner_urara.say_as_unknown_and_wait(
      'でも、応える必要はありません。あなたたちに、こんなものは……',
    );

    era.printButton(
      '「一度も否定していない。最初にウララを守ったのも、私たちを集めたのも、お前だろう？」',
      1,
    );
    await era.input();

    era.drawLine();
    await era.printAndWait([
      '一緒にゴール板を越えたあと、走りはコースの散策へ変わっていく。前方では ',
      you.get_colored_name(),
      ' がもう長く待っていた。',
    ]);
    await urara.say_and_wait([
      'うん！ウララと ',
      callname,
      '、ずっと本当にありがとうって思ってるよ？',
    ]);
    await urara.say_and_wait(
      'それに私たちも、ずっとそうだよ！一人だけじゃ、みんな何もできないよ？',
    );
    await era.printAndWait([
      '今日の「奇跡」のために、',
      urara.get_colored_name(),
      ' が何人を動かしたか。もう数える意味はない。',
    ]);
    await era.printAndWait(
      '誰もが誰かの道端の噂で、誰もが誰かの人生の通りすがりで、みんな何もできない星だ。',
    );
    await era.printAndWait(
      'だからこそ、繋がろうとすれば、短い火花でも夜空を照らし続けられる。',
    );
    await era.printAndWait([
      '今のみんなが「',
      urara.get_colored_actual_name(),
      '」という',
      urara.teen_sex_title,
      'で繋がり、まだ編み続けている物語が、闇を払う奇跡なのかもしれない。',
    ]);

    era.printButton(
      '「お前は最初から、傍観者じゃなくて変える側だった。それに……ここ、快晴だろ？」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      'うん！タイミングは変かもだけど、あなたはずっと、ありがとうを受け取っていいよ！',
    );
    await you.say_and_wait(
      '——この物語を開いてくれてありがとう。小さな者同士を出会わせてくれた。今、お前を家へ連れて帰る。',
    );
    await era.printAndWait(
      '体の震えから、鼻にかかった嗚咽へ、最後は隠さない涙になる。',
    );
    await inner_urara.say_as_unknown_and_wait(
      'あなたたち……あなたたち……本当に、みんな……',
    );
    await era.printAndWait([
      'みんなの前で不明瞭に呟きながら、灰白の小さな',
      urara.uma_sex_title,
      'はいちばんみっともなくて、いちばん嬉しい大声で泣いた。',
    ]);
    await era.printAndWait(
      '人の信頼を拒み、激しい厭世を抱くのは、結局、臆病で何の役にも立たない自分を許せないからだ。',
    );
    await era.printAndWait(
      '痛みを無理に剥がし、怖さで本当の自分を心の底へ隠して見なければ、残るのは虚無で重い空の荷物だけだ。',
    );
    await era.printAndWait(
      '何度も転んで痛みを知ったあとなら、傷だらけでも、もっと勇敢になれる。',
    );
    await era.printAndWait([
      'パズルの最後の欠片を置くか。これ以上ないほど小さな、「',
      urara.get_colored_actual_name(),
      '」という',
      urara.uma_sex_title,
      'の物語を。',
    ]);
    await era.printAndWait('もう、移り気な自分と和解する時だ。');
    await era.printAndWait([
      '泣く',
      urara.teen_sex_title,
      'が微笑む',
      urara.teen_sex_title,
      'の胸へ飛び込み、微笑む',
      urara.teen_sex_title,
      'は泣く',
      urara.teen_sex_title,
      'を優しく抱きしめた。',
    ]);
    await era.printAndWait([
      '二人の「',
      urara.get_colored_actual_name(),
      '」の影が重なり、新しい日差しの下で溶け合う。それから周囲も、また溶けていった。',
    ]);
    await era.printAndWait([
      '奇跡さえ実現する姿は、ああいうものなのかもしれない。光に包まれる前、',
      you.get_colored_name(),
      ' も知らず安心の笑みを浮かべた。',
    ]);
    era.drawLine();
    await era.printAndWait([
      'これは「',
      urara.get_colored_actual_name(),
      ' の願い」、そして「みんなの願い」——',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      ' の願いは——簡単には終わらない未来で、みんなの笑顔のために、走り続けること。',
    ]);
    era.drawLine();
    await era.printAndWait([
      urara.get_colored_name(),
      ' の腕に頭を預け、',
      you.get_colored_name(),
      ' は俯いて微笑む三女神像の前で目を覚ました。いつもどおり静かなトレセンで、傍の担当が笑顔で ',
      you.get_colored_name(),
      ' を待っている。',
    ]);
    await urara.say_and_wait(['次は何する？', callname, '！']);
  },
  we_95_47: (() => {
    const title = (urara, inner_urara) => [
      '「',
      { color: urara.color, content: urara.sex },
      { color: inner_urara.color, content: 'たち' },
      '」の贈り物',
    ];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} join_arim_kin_c ウララがクラシック年の有馬記念に出たか
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
    ) => {
      const ret = [];
      await era.printAndWait([
        '今日の ',
        you.get_colored_name(),
        ' は、いつの間にかまた「',
        inner_urara.get_colored_name(),
        '」の心の草原に立っていた。',
      ]);
      await era.printAndWait(
        'いつもの靄は消えている。夜空に雲はなく、夜紫の晴れ間に星が煌めく。星の下の人は、世界の中央に立っているようだった。',
      );
      await era.printAndWait([
        '走る音に振り返ると、明るい月光の下、顔立ちの似た二人の',
        urara.teen_sex_title,
        'が、もう長く待っていたらしい。',
      ]);
      era.drawLine();
      await urara.say_and_wait([
        callname,
        '！来てくれたね！えへへ～一緒に寝転がろう。草地、全然冷たくない。気持ちいいよ！',
      ]);
      await urara.say_and_wait(
        '今の私たちの中、きれいだよね？なんて言えばいい？あの……あの……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '飾り言葉も描写の修辞も要りませんよ。ただ以前は、ここがこんなにきれいだとは気づきませんでした……',
      );
      await urara.say_and_wait(
        'だってみんなの気分、いいでしょ？まるで……有馬のあとがクリスマス！楽しみだね～',
      );
      await inner_urara.say_as_unknown_and_wait([
        '楽しみではありますが、主役に緊張感がありませんね……勝てそうですか、',
        arim_kin,
        '。',
      ]);
      await urara.say_and_wait(
        'わからないよ。だってみんな強い！でも勝てなくても、ウララは走るよ！',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ええ、そうです。今でも全員が『ウララは勝てる』と期待しているわけではありません。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'でもこれは一人で走る物語ではありません。あなたとわたくしだけでなく、ウララが繋いだ全員が、この瞬間を待っています。',
      );

      inner_urara.say_as_unknown([
        'ですから……トレーナー',
        you.adult_sex_title,
        '、どうか何か言ってください。',
      ]);
      era.printButton(
        '「ずっとそうだっただろ。奇跡が降りるのを信じるより、ウララの成長のほうが確かだ。」（全ステータス+5）',
        1,
      );
      era.printButton(
        '「もうこのきれいな草原を持っているだろ。あとは、進み続ければいい。」（芝適性アップ）',
        2,
      );
      era.printButton(
        '「運も奇跡も実力のうちだ。足りない分は、勇気で補えばいい！」（中長距離適性アップ）',
        3,
      );
      ret.push(await era.input());
      await urara.say_and_wait([
        'そうなの？でも ',
        callname,
        ' の助言なら、ウララ、大丈夫！',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'そうです。交わったあとの道が楽しくてもなくても、頭上の繋がった星空は、もう進むための図になっています……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '……はぁ。わたくしももっと早くわかっていれば、ウララはもっと遠回りせずに済んだのでしょうか——',
      );
      await urara.say_and_wait(
        'はい！もう考えない！もう沈まないで。せっかくクリスマスなのに！',
      );
      if (join_arim_kin_c) {
        await urara.say_and_wait(
          'ふんふん～クリスマスの贈り物ね！もう一度あげたけど、ウララは大丈夫だと思う！',
        );
        await urara.say_and_wait(
          '今回1着取れるかはわからないけど、みんな喜ぶと思う——',
        );
      } else {
        await urara.say_and_wait(
          'だからクリスマス、ウララもみんなに贈り物、用意してあるよ？',
        );
        await urara.say_and_wait([
          '今は渡せないけど、',
          callname,
          '、明日きっと見られるよ——',
        ]);
      }
      await urara.say_and_wait([
        '『',
        arim_kin,
        'での走り』、この贈り物を ',
        callname,
        ' にも、みんなにもあげたい！',
      ]);
      if (era.get('love:52') >= 50) {
        await inner_urara.say_as_unknown_and_wait([
          'せっかくのクリスマスです。小さなウララは、自分のトレーナー',
          you.adult_sex_title,
          'にだけ特別な贈り物をするかと思いましたが？',
        ]);
        await urara.say_and_wait([
          'うん！ウララはもう ',
          callname,
          ' のものだから、『体以外』しか送れないよ？',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          'ぷっ……ごほっ！そ、その言い方？！知らないわけではありませんが、見て見ぬふりはできません！',
        );
        await urara.say_and_wait(
          'えへへ～こんなに経っても、『ウララ』は純情なんだね。どうなってるの～？',
        );
        await inner_urara.say_as_unknown_and_wait(
          'あなたに言われたくありません！小さなウララは、なぜこうなったのです？！',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait([
          'みんなへの共通の贈り物、ですか。せっかくのクリスマスです。',
          callname,
          ' だけに何かあげないのですか。',
        ]);
        await urara.say_and_wait([
          'え？うーん……何がいいかわからない！そうだ、ウララが自分を ',
          callname,
          ' にあげればいい！',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '待って待って待って！その贈り物はママが許しても、わたくしは許しません。ウララには早すぎます……',
        );
        await urara.say_and_wait(
          'でもウララ、もう子どもじゃないよ？何が早いの？『ウララ』、えっちなこと考えてる？',
        );
        await inner_urara.say_as_unknown_and_wait(
          'ごほっ……！な、何を言っているのです小さなウララ。わたくしはそんなことしません！',
        );
      }
      inner_urara.say_as_unknown([
        'トレーナー',
        you.adult_sex_title,
        '、あなたも何か言ってください——',
      ]);
      era.printButton('「……悪くないだろ？」（恋慕+2）', 1);
      era.printButton('「……仲がいいな？」（好感+10）', 2);
      ret.push(await era.input());
      await inner_urara.say_as_unknown_and_wait([
        'トレーナー',
        you.adult_sex_title,
        '（あなた）——！！',
      ]);
      era.drawLine();
      await era.printAndWait([
        '抑え込んでいた「',
        inner_urara.get_colored_name(),
        '」が本心を解放してから、二頭と一人のふざけ声は広い草原でずいぶん続いた。',
      ]);
      await era.printAndWait(
        '満足するまで三人は疲れ果て、変わらない夜空の下に並んで横になり、安心できる深い色へ沈んだ。',
      );
      await era.printAndWait([
        '時間さえ意味を失う星空と草原の中、桜と褐色の「',
        urara.couple_title,
        '」のあいだで、',
        you.get_colored_name(),
        ' は二人の',
        urara.teen_sex_title,
        'の穏やかな息を聞いていた。',
      ]);
      await era.printAndWait(
        '桜色の呼吸はだんだん平稳になる。だがもう一方、なかなか眠らない褐色から、小さな呼びかけが聞こえる気がした。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' がまた目を開けると、少し色の落ちた「',
        urara.sex,
        '」が、花はないのに明るさを取り戻した目で傍の人を見守っていた……',
      ]);
      era.println();

      await inner_urara.say_as_unknown_and_wait(
        'あは、すみません。わたくし、少し……眠れなくて？',
      );
      await inner_urara.say_as_unknown_and_wait(
        'ウララは眠っています。だからあなたとだけ話したくて……ああ、起きなくて大丈夫です。寝たまま聞いてください。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'もっとも、ずっと迷惑ばかりかけてきたわたくしと二人きりでは、気分はよくないでしょう……',
      );
      await inner_urara.say_as_unknown_and_wait(
        'それでも、わたくしはあなたに嘘をついたことはありません。最初からあなたを愛していたことも含めて。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'なぜかは……わかりません。愛というより、魂の本能に近いのかもしれません。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '滑稽でしょう。長く傍にいられない『ハルウララ』の愛に、何の意味があるのです。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '言ったあとであなたに応えられず、そのあとであなたの返事も得られない……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '祝日の贈り物すら用意できない。儚い傍観と虚無のやり取りでも、愛と呼べるのですか。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '……結局答えられません。今のわたくしは、最初に出会ったあなたより、たいして醒めていません。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'でも唯一わかっている答えは、意味がなくても、この恋慕は一つしかない、ということです。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'あなたの傍の小さなウララとも関係ありません。わたくしは主役ではありません。でもこれはわたくしだけのもので、あなたにしか向かない気持ちです。',
      );
      if (high_relation) {
        await inner_urara.say_as_unknown_and_wait(
          '最初にウララと出会ったあなた。ウララの走りを見守ったあなた。ウララと一緒にわたくしを救ったあなた……',
        );
        await inner_urara.say_as_unknown_and_wait(
          '奇跡は本当に起きました。夢のように美しい。いつか一人で目覚めるのが怖いほどに。',
        );
        await inner_urara.say_as_unknown_and_wait(
          'だから夢が覚める前に、気持ちをきちんと伝えたい。拒まれても構いません。',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          '勝手にあなたを選んでも、道中が間違いだらけでも、最後はあなたとウララがわたくしを救いました。',
        );
        await inner_urara.say_as_unknown_and_wait(
          '三年、なぜあなたを選んだのか何度も考えました。今なら、すべて愛される価値があったと思います。',
        );
        await inner_urara.say_as_unknown_and_wait(
          'だから気持ちをきちんと伝えられれば、いつか夢が覚めても、厭世には戻りません。',
        );
      }
      await inner_urara.say_as_unknown_and_wait(
        '魂の鼓動に唆されただけでも、あなたに嫌われる偽りの情でも構いません。もう一度言いたいのです。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '聖人の記念日なら、言葉にできないこの気持ちが偽りでも、特赦されてもいいのではないでしょうか。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'では、もう一度。聞いてください……',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait(
        '初めてではありません。たぶん最後でもありません。でも……',
      );
      await inner_urara.say_as_unknown_and_wait([
        'トレーナー',
        you.adult_sex_title,
        '、わたくしはあなたを愛しています。',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '結末へ——';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     */
    const f = async (urara, inner_urara) => {
      await inner_urara.say_as_unknown_and_wait(
        '……もしもし。聞こえますか。やはりずっと聞いていらしたのですね。では、ほどほどにこの物語を続けましょう。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '途中であなたを満足させられなかったかもしれません。結末まで欠けだらけかもしれません。別れ方まで学ばせるかもしれません。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'だからこそ、私たちと道を共にしてくださったことに感謝します。準備はよろしいですか。',
      );
      await inner_urara.say_as_unknown_and_wait([
        'これ以上ないほど小さくて、誰にも代わりのいない、『',
        urara.get_colored_actual_name(),
        '』という小さな',
        urara.uma_sex_title,
        'の物語です——',
      ]);
      era.drawLine();
      await era.printAndWait(
        `${era.get('flag:当前年')} 年 12 月第 4 週、中山競馬場。`,
      );
      await era.printAndWait('快晴の下、祝福に囲まれて、物語は結末を越える。');
      await era.printAndWait(
        '沸き立つ声の中、晩春の桜は厳冬に満開したいと願う。',
      );
      await era.printAndWait('これは「私たち」が一緒に書いた物語——');

      era.printButton('だから、走れ。ハルウララ。', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  ws_143_1: (() => {
    const title = '完結を越える物語——';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {number|false} arim_kin_rank_s シニア年有馬記念の着順。false は未出走
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      arim_kin_rank_s,
      arim_kin,
    ) => {
      await era.printAndWait([
        '選手通路で、',
        you.get_colored_name(),
        ' は準備運動中の ',
        urara.get_colored_name(),
        ' にいつもの声かけをしていた。',
      ]);

      era.printButton(
        '「ウララ、今日の調子はどうだ。言いたいことがあれば言え。」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'ないよ。前と同じように走ればいいでしょ！今日も『ウララ』で行くよ！',
      );
      await era.printAndWait([
        'そうだ。今はいつもどおりでいい……ただし ',
        you.get_colored_name(),
        ' の記憶では、その「前」は先月月末の ',
        arim_kin,
        ' だった。',
      ]);
      if (arim_kin_rank_s) {
        if (arim_kin_rank_s === 1) {
          await era.printAndWait([
            urara.get_colored_name(),
            ' の「奇跡の優勝」のおかげで、あのレースの熱は今も冷めていない。',
          ]);
          await era.printAndWait([
            '心を揺さぶった ',
            arim_kin,
            ' の1着の上に、',
            urara.get_colored_name(),
            ' はみんなの助けで、もっと大事な宝物も手に入れた。',
          ]);
          await era.printAndWait([
            'レースが終わると、みんなは笑っているのに、',
            urara.get_colored_name(),
            ' と ',
            you.get_colored_name(),
            ' だけは満員の観客の前で抱き合って泣き崩れた。',
          ]);
          await era.printAndWait(
            'そのみっともなくてまぶしい写真は、今も各所のネットで回っている……',
          );
        } else if (arim_kin_rank_s <= 5) {
          await era.printAndWait(
            '着順は少し名残惜しい位置で止まった。それでもみんなの心では、いちばんいい成績だった。',
          );
          await era.printAndWait([
            'その前に、',
            urara.get_colored_name(),
            ' はみんなの助けで、勝利より大事なものを受け取っていた。',
          ]);
          await era.printAndWait([
            '大したことない、と言っても、小さな',
            urara.uma_sex_title,
            'がゴール板を越えたとき、みんなは期せずして泣いた。',
          ]);
          await era.printAndWait([
            '涙の中の気持ちはいろいろある。ただ変わらないのは、',
            urara.get_colored_name(),
            ' の成長を見た感動だろう……',
          ]);
        } else {
          await era.printAndWait([
            '着順は想定どおりだった。それでも ',
            urara.get_colored_name(),
            ' は全員の祝福を受け取った。',
          ]);
          await era.printAndWait([
            'その前に、',
            urara.get_colored_name(),
            ' はみんなの助けで、勝利より大事なものを受け取っていた。',
          ]);
          await era.printAndWait([
            '大したことない、と口では言っても、小さな',
            urara.uma_sex_title,
            'がゴール板を越えたとき、みんなは期せずして泣いた。',
          ]);
          await era.printAndWait([
            '涙の中の気持ちはいろいろある。ただ変わらないのは、',
            urara.get_colored_name(),
            ' の成長を見た感動だろう……',
          ]);
        }
      }
      await era.printAndWait([
        'そのあとシニア級が終わり、今の ',
        urara.get_colored_name(),
        ' の検査結果はさらに驚かされた。',
      ]);
      await era.printAndWait([
        'もう三年走っているのに、',
        urara.sex,
        'の本格化は衰えるどころか、また新しい伸びしろが出ている。',
      ]);
      await era.printAndWait([
        '最近の出来事から、',
        urara.get_colored_name(),
        ' と親しい人なら、この現象の源は推測できるはずだ。',
      ]);
      await era.printAndWait([
        '「',
        urara.sex,
        '」はまだ人に会うのを恥ずかしがる。それでも以前の「閉じこもり」より、余光に別のピンクがちらつくことはある。',
      ]);
      await era.printAndWait([
        '今の「有馬の熱が冷めないうちに」……本当は ',
        urara.get_colored_name(),
        ' が走りたがって、',
        you.get_colored_name(),
        ' が',
        urara.sex,
        'に負けただけだ。',
      ]);

      era.printButton(
        '「今思うと、物語に句点を打つのは早すぎた、ということか……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' の決断に合わせて、',
        you.get_colored_name(),
        ' も最近の変化を思い出した。たった一か月でも、たくさん変わる。',
      ]);
      await era.printAndWait(
        'トレセンの友だちは言うまでもない。脚の怪我で引退した同級生も、立ち直って次の目標を見つけたらしい。',
      );
      await era.printAndWait([
        'トレーナーになる長い道は始まったばかりでも、',
        you.get_colored_name(),
        ' はいつかまた',
        urara.sex,
        'に会えると思っている。',
      ]);
      await era.printAndWait(
        '商店街の人たちは、現代的なスーパーをどう入れるか相談している。妥協ではなく、変化が生む可能性を探っている。',
      );
      await era.printAndWait([
        'かつての対立と復興より、今のみんなは ',
        urara.get_colored_name(),
        ' に触発されて、新しい時代の協力と、人への便宜を試し始めている。',
      ]);
      await urara.say_and_wait(
        'そうだよ！みんなが進んでるから、できる限りウララも走り続ける！',
      );
      await urara.say_and_wait([
        'それに、',
        urara.sex,
        'もずっとこっちを見てる。今は悲しいじゃなくて、嬉しいほうだよ！',
      ]);
      await urara.say_and_wait([
        'だから前に何があっても、今は ',
        callname,
        ' もちゃんとウララの走りを見ててね！',
      ]);

      era.printButton('「当たり前だ。今のウララは『無敵』だからな！」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' の肯定に合わせて呼吸を整え、勝負服を直した ',
        urara.get_colored_name(),
        ' は、アナウンスの入場合図で一歩前へ出た。',
      ]);

      era.printButton('「出番だ。ウララ自身は、勝てると思うか？」', 1);
      await era.input();

      await urara.say_and_wait(
        'うん！今日のウララは絶対勝つよ？軽く勝っちゃう！',
      );
      await era.printAndWait([
        '日差しを受けて、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に、起点へ戻ったような曇りのない笑顔を見せた。',
      ]);
      await urara.say_and_wait([
        'じゃあ行くよ！質問！',
        callname,
        '、ウララはどう走る——？',
      ]);
      await era.printAndWait([
        '光の中の ',
        urara.get_colored_name(),
        ' の笑顔に、',
        you.get_colored_name(),
        ' はもう一度強く',
        urara.sex,
        'に答えた。',
      ]);

      era.printButton('「どうあれ、楽しんでこい——！」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  ws_ticket: (() => {
    const title = '安心の雲と霧';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_child ウララとの子どもがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_child,
    ) => {
      await era.printAndWait([
        urara.get_colored_name(),
        ' と何度もレースを走ったある日、',
        you.get_colored_name(),
        ' はトレーナー室の引き出しから、見覚えのある賞券を掘り出した。',
      ]);
      await era.printAndWait([
        '同時に、トレーナー室の扉が「ドン」と開き、桜色の閃光が室内へ飛び込む。',
      ]);
      await urara.say_and_wait([
        callname,
        '！自主トレ終わったよ──！次は何する？',
      ]);
      await era.printAndWait([
        '笑顔に乗った水滴を拭って、汗で濡れた体操服の ',
        urara.get_colored_name(),
        ' は、今日もちゃんと輝いている。',
      ]);

      era.printButton('「おう！お疲れ。まずは休め！」', 1);
      await era.input();

      await urara.say_and_wait(['は──い！']);
      await era.printAndWait([
        '他の雑物を引き出しに戻し、',
        you.get_colored_name(),
        ' は立ち上がって、いつもより頑張った小さな',
        urara.uma_sex_title,
        'を迎えた。',
      ]);
      await era.printAndWait([
        '振り返って机の上の「小さなご褒美」を見て、閃いた ',
        you.get_colored_name(),
        ' は、自分の周りを回る小さな',
        urara.uma_sex_title,
        'に聞いた。',
      ]);

      era.printButton(
        '「ウララ、そろそろ息抜きの時間だろ。温泉券、覚えてるか？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '温泉券……あ！あのとき商店街で当たったやつ？ウララ、忘れかけてた！',
      ]);
      await urara.say_and_wait([
        'でも、なんで急に今行くの？',
        callname,
        ' も忘れてて、今思い出した？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' はどんどん鋭くなっている。券の使用期限が近いのを見て、',
        you.get_colored_name(),
        ' は仕方なく笑った。',
      ]);
      await era.printAndWait([
        '今の ',
        urara.get_colored_name(),
        ' の予定は以前より余裕がある。息抜きの機会はありがたい。賞券を寝かせる理由はない。',
      ]);

      era.printButton(
        '「とにかく……遅れてきたご褒美だ。ウララはどの友だちを誘う？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'ん？',
        callname,
        ' は行かないの？友だちより、ウララは ',
        callname,
        ' と温泉に行きたいよ？',
      ]);

      era.printButton('「大人と行くより、友だちのほうが自由だろ？」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' の「大人」側の疑問に、まだ「子ども」を代表できる ',
        urara.get_colored_name(),
        ' は当然のように答えた。',
      ]);

      if (high_relation) {
        await urara.say_and_wait([
          'でも ',
          callname,
          ' も休まないとでしょ？ウララだけご褒美はだめ！',
        ]);
        await urara.say_and_wait([
          '今 ',
          callname,
          ' が言ったみたいに、',
          callname,
          ' にとっても、遅れてきたご褒美だよ？',
        ]);
      } else {
        await urara.say_and_wait([
          'それにこれ、ウララと ',
          callname,
          ' で一緒に当たったやつ。最初からウララ一人のものじゃない！',
        ]);
        await urara.say_and_wait([
          'だからこの券には ',
          callname,
          ' の分もある。',
          callname,
          ' と一緒に行くべきだと思う！',
        ]);
      }
      if (era.get('love:52') >= 75) {
        await era.printAndWait([
          '言い終えて少し間を置いたあと、',
          urara.get_colored_name(),
          ' は「恋人」としての笑顔も見せた。',
        ]);
        await urara.say_and_wait([
          'それに、好きな人と温泉に入るのに、理由はそんなに要らないでしょ？',
        ]);
      }

      await era.printAndWait([
        '誘いがそこまで熱いなら、これ以上断る言葉は出しにくい。担当の期待の目を受けて、',
        you.get_colored_name(),
        ' は椅子の背の上着を取った。',
      ]);

      era.printButton('「先に何を用意するか考える。明日出発でいいか？」', 1);
      await era.input();

      await urara.say_and_wait(['うん！ウララも準備する。明日、正門でね——']);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'は ',
        you.get_colored_name(),
        ' の承諾でまた外へ飛んだ。事故がなければいい。',
        urara.get_colored_name(),
        ' がこんなに喜んでいるのだから。',
      ]);
      await era.printAndWait([
        'だが二人が荷物を提げて前のめりに宿のフロントへ着くと、想定どおりの想定外が待っていた。',
      ]);
      await you.say_as_passer_by_and_wait(
        '店員',
        '本当に申し訳ございません。当館のシングルは満室で……',
      );
      await you.say_as_passer_by_and_wait(
        '店員',
        '代わりに、小さな温泉付きのツインをご用意できます。いかがでしょう。',
      );

      if (you.sex_code === 1) {
        await era.printAndWait([
          '着いた直後から気まずい展開だ。旅の運が悪すぎる。だが来た以上、これでいい。',
        ]);
        await era.printAndWait([
          '隣でまだ期待でいっぱいの小さな ',
          urara.get_colored_name(),
          ' を見れば、',
          you.get_colored_name(),
          ' に引き返す選択肢もない。',
        ]);
        await era.printAndWait([
          'それにしても、この状況で夜の空間はどう分ける……',
        ]);
        await era.printAndWait([
          'フロントから鍵を受け取り、',
          you.get_colored_name(),
          ' は少し複雑な顔で荷物を提げ、',
          urara.get_colored_name(),
          ' と旅館の廊下へ折れた。',
        ]);
        era.drawLine();
        await era.printAndWait([
          urara.get_colored_name(),
          ' より先に部屋へ戻り、',
          you.get_colored_name(),
          ' は服を脱いでタオルを取り、温泉を隔てる引き戸を開けた。',
        ]);
        await era.printAndWait([
          '長い息で温かい湯に沈み、月が明るく星の少ない夜空を見上げて、',
          you.get_colored_name(),
          ' は目を閉じた。',
        ]);
        await era.printAndWait([
          'もう三年か。出会ったときは子どもみたいだった ',
          urara.get_colored_name(),
          ' も、だんだん大人の姿になってきた……',
        ]);
        await era.printAndWait([
          'その穏やかな空気の中、引き戸が',
          urara.teen_sex_title,
          'の嬉しそうな声とともに「暴走」して開いた。',
        ]);
        await urara.say_and_wait([
          'えへへ～',
          callname,
          ' がまだ戻ってないうちに、ウララ先に入る——！',
        ]);
        await era.printAndWait([
          '目を開ける暇もなく、空気を壊した小さな',
          urara.uma_sex_title,
          'が縁で跳ね、水しぶきの中へ飛び込んだ。',
        ]);
        await era.printAndWait([
          '前言撤回。全然大きくなってない。顔の水を拭いて、',
          you.get_colored_name(),
          ' は仕方なく、前でルール違反の入水をした ',
          urara.get_colored_name(),
          ' を見た……',
        ]);
        await era.printAndWait([
          '……待て、',
          urara.get_colored_name(),
          ' が入ってきた？！おかしいと気づいた ',
          you.get_colored_name(),
          ' はすぐ立ち上がり、入る前に縁へ置いたタオルを巻いた。',
        ]);
      } else {
        await era.printAndWait([
          'ん？券の特典より部屋が豪華で、温泉の時間も自由だ。運がいいではないか。',
        ]);
        await urara.say_and_wait([
          'え？賑やかさは足りないかもだけど、ウララと ',
          callname,
          ' だけなら、中で泳いでいい？',
        ]);
        era.printButton('「温泉で泳いじゃだめだよ？」', 1);
        await era.input();

        await era.printAndWait([
          '興奮しすぎた小さな',
          urara.uma_sex_title,
          'の頭を軽く撫でて、',
          you.get_colored_name(),
          ' は笑いながら荷物を提げ、',
          urara.get_colored_name(),
          ' と旅館の廊下へ入った。',
        ]);
        era.drawLine();
        await era.printAndWait([
          '明るい月の下で少し長く散歩したあと、',
          you.get_colored_name(),
          ' は部屋へ戻り、ゆっくり服を脱いで傍のタオルを取った。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' はもう入っているはずだ。いい子にしてるか。本当に湯船で暴れてないか。',
        ]);
        await era.printAndWait([
          '温泉を隔てる引き戸に手を置く。何を考えてる。三年だぞ。',
          urara.get_colored_name(),
          ' はもう大きい子になったはずなのに……',
        ]);
        await era.printAndWait([
          '引き戸を開けると、',
          you.get_colored_name(),
          ' はすぐ、',
          urara.get_colored_name(),
          ' が温泉をプールにして激しく跳ねる音を聞いた。',
        ]);
        await urara.say_and_wait(['えへへ～なんかすごく楽しい——！']);
        await era.printAndWait([
          '前言撤回。やっぱり全然大きくなってない。ゆっくり湯に入って、',
          you.get_colored_name(),
          ' は仕方なく、前でルール違反の水遊びをする ',
          urara.get_colored_name(),
          ' を見た。',
        ]);
      }
      await era.printAndWait([
        '立ちこめる湯気の向こうで、まだ他人に気づいていない小さな',
        urara.uma_sex_title,
        'は、健康で豊かな体を隠さず見せている。',
      ]);
      await era.printAndWait([
        '解けた桜色の髪が湿って',
        urara.teen_sex_title,
        'の滑らかな肌に寄り、落ちる露と一緒に',
        urara.sex,
        'の無邪気な笑顔へ、ぼんやりした色気をまとわせる。',
      ]);
      await era.printAndWait([
        '三年の鍛錬は柔らかさを硬くしなかった。むしろ小さな',
        urara.uma_sex_title,
        'のもともと肉感のある腰と尻と下腹を、さらに豊かにした。',
      ]);
      await era.printAndWait([
        '柔らかい曲線を上下へ辿ると、',
        urara.teen_sex_title,
        'の股の繊細な秘密の庭は、尻尾が揺らす波紋に水面で半分隠されている。',
      ]);
      await era.printAndWait([
        '水遊びでゆるく揺れる柔らかい双丘の上、愛らしい二つの蕊と実も霧の中で見え隠れする。',
      ]);
      await era.printAndWait([
        '無邪気で禁忌なこの景色に止めを刺すのは、灯火と水面と月が交わる照らしかただ。',
      ]);
      await era.printAndWait([
        '小さく可愛い耳を揺らし、',
        urara.teen_sex_title,
        'のいつもの桜の瞳は、色ガラスのように美しい色を放っている。',
      ]);
      await era.printAndWait([
        '惜しいのは、絵の中の爛漫で色っぽい小さな主役が、戸惑う ',
        you.get_colored_name(),
        ' へ視線を向け始めたことだ……',
      ]);

      if (you.sex_code === 1) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait([
            'ん？あ……',
            callname,
            ' だ。もう入ってた。いつ来たの？',
          ]);
          await era.printAndWait([
            '体を見られても恥ずかしがらず、抜け駆けしようとした罪悪感もなく、小さな',
            urara.uma_sex_title,
            'は霧の中からゆっくり ',
            you.get_colored_name(),
            ' へ寄ってきた。',
          ]);
          await urara.say_and_wait([
            'えへへ～さっき ',
            callname,
            '、ウララ見てた？',
            callname,
            '、本当にした？',
          ]);
          await era.printAndWait([
            '立ち上がったばかりの ',
            callname,
            ' を大胆に湯へ押し戻し、',
            urara.teen_sex_title,
            'は愛情の微笑みのまま、一糸まとわず軽く ',
            you.get_colored_name(),
            ' に跨がった。',
          ]);
          await era.printAndWait([
            'いつから ',
            urara.get_colored_name(),
            ' はこんなに大胆になった……',
          ]);
        } else {
          await urara.say_and_wait([
            'え？',
            callname,
            '？なんで ',
            callname,
            '……あ、違う、これは……',
          ]);
          await era.printAndWait([
            '他人の視線の中で慌てて裸の体を隠し、',
            urara.get_colored_name(),
            ' の小さな顔は熱気で珍しく真っ赤になった。',
          ]);
          await urara.say_and_wait([
            callname,
            '……えっち……見ないで、早く後ろ向いて……ウララ、恥ずかしい……',
          ]);
          await era.printAndWait([
            '湯からすくったタオルで慌てて隠したあと、出会ったときのように無邪気だったウマ娘は、恋する',
            urara.teen_sex_title,
            'だけの文句を小さく吐いた。',
          ]);
          await era.printAndWait([
            'どう言っても、',
            urara.get_colored_name(),
            ' はいくらか成長したらしい……',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          'ん？',
          callname,
          ' 来た！ウララ、もう試してあるよ？お湯、気持ちいい！',
        ]);
        await era.printAndWait([
          '抜け駆けの説明はしないまま、',
          urara.get_colored_name(),
          ' は霧の中で水を踏んで ',
          you.get_colored_name(),
          ' へゆっくり寄ってきた。',
        ]);
        await urara.say_and_wait([
          'でも、',
          callname,
          '、足元気をつけて。手、貸して！よいしょ～',
        ]);
        await era.printAndWait([
          '手を取って ',
          you.get_colored_name(),
          ' を湯へ導き、',
          urara.get_colored_name(),
          ' は色っぽい笑顔のまま、大好きな ',
          callname,
          ' を入った瞬間に水へ押し倒した。',
        ]);
        await era.printAndWait([
          '「',
          urara.get_colored_name(),
          ' に誘われた」みたいだ。でもこれは危険動作だろ……',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          ' 来た！どうしたの？なんでずっとウララ見てるの……え？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の視線の中で、',
          urara.get_colored_name(),
          ' は自分のタオルが体に巻かれておらず、底へ沈んでいるのに気づいた。',
        ]);
        await urara.say_and_wait([
          'いつ外れたの？でもここ、他の人いないよ！だから巻かなくても……え？だめ？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の助けでタオルと髪を包み終えた途端、',
          urara.get_colored_name(),
          ' はまた湯船へ飛び込んだ。',
        ]);
        await era.printAndWait([
          'はぁ。たまにまだ大きくなってない子どもだ。でもやっぱり可愛い……',
        ]);
      }

      await era.printAndWait([
        'そのあとのひと騒動……正確には、なだめすかしたあと、',
        you.get_colored_name(),
        ' はそれでも ',
        urara.get_colored_name(),
        ' を湯の中で落ち着かせた。',
      ]);
      await era.printAndWait([
        '共同の湯でも、湯船をぐちゃぐちゃにするのは絶対禁止だ。',
      ]);
      await era.printAndWait([
        '霧が寄り添う二人をまた包んでから、この一槽はようやく本来の使い方をできた。',
      ]);
      await era.printAndWait([
        '温かい湯気が冬から春への寒さを覆い、夜空の星もちょうどよく霧を透かして光る。',
      ]);
      await era.printAndWait([
        '暖流に包まれて体の大半を湯へ滑らせ、担当と一緒に安楽を味わえる ',
        you.get_colored_name(),
        ' は、温かさの中で完全に緩んだ。',
      ]);
      await era.printAndWait([
        '大丈夫。',
        urara.get_colored_name(),
        ' と鍛えた三年で体力はかなり良くなった。簡単にはのぼせない自信はある。',
      ]);
      await era.printAndWait([
        'それは同時に、まだ引退していなくても、',
        urara.get_colored_name(),
        ' が競走',
        urara.uma_sex_title,
        'としての最初の三年を終えた、ということでもある。',
      ]);
      await era.printAndWait([
        '今の',
        urara.sex,
        'は今後のレースとトレーニングを自分で決められる。トレーナーの ',
        you.get_colored_name(),
        ' も、もっと多くの',
        urara.uma_sex_title,
        'と知り合う。',
      ]);
      await era.printAndWait([
        '二人が疎遠になる心配ではない。良くも悪くも、無防備に春の景色を漏らす小さな',
        urara.uma_sex_title,
        'は、たぶんこの子だけだ。',
      ]);
      await era.printAndWait([
        'どうあれ、二人三脚でここまで来た以上、',
        you.get_colored_name(),
        ' に残る選択は、',
        urara.get_colored_name(),
        ' を傍に置き続けることだけだ。',
      ]);
      if (has_child) {
        await era.printAndWait([
          'それに、間違った時間と場所で禁断の実を摘んだ以上、今後が幸福でもなくても、',
          you.get_colored_name(),
          ' と ',
          urara.get_colored_name(),
          ' はもう戻れない……',
        ]);
      }
      await era.printAndWait([
        'はぁ、何を考えている。せっかく担当と温泉なのに、なぜ急に「湯中の奇想」で沈む。',
      ]);
      await era.printAndWait([
        '出会ってからのいいことは多いだろう。沈んだときに目を閉じれば、心は ',
        urara.get_colored_name(),
        ' の笑顔でいっぱいになる。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' と離れたくない。起きないことでも、そう呟きたくなる。',
      ]);
      await era.printAndWait([
        '今になって過去のいくつかをひっくり返せば、以前ほど焦りもない。',
      ]);
      await era.printAndWait([
        '安心と満ち足りか。温泉で思い巡らせば、温かい流れが心事を薄めてくれるのかもしれない。',
      ]);
      await era.printAndWait([
        '……それにしても、錯覚か。お湯、だんだん熱くないか。',
      ]);
      await urara.say_and_wait([
        'ん？',
        callname,
        '、顔赤いよ！温泉でのぼせるのは体力とあまり関係ないんだよ。無理しないで？',
      ]);
      await era.printAndWait([
        'どうした。体がふにゃふにゃだ。急に眠い。このまま寝てしまいそうだ……',
      ]);
      await urara.say_and_wait([
        'それに、もっと沈んだら鼻が浸かるよ？',
        callname,
        '、聞こえてる？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の声が遠い。だんだん遠くなる……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'もう鼻で泡を吹いている人に聞こえても、話せそうにありませんよ？！',
      ]);
      await era.printAndWait([
        'そのとおりだ。また自分の耐性を過大評価した。沈みそうだ……',
      ]);
      await urara.say_and_wait([
        'あ！来た。温泉気持ちいいよ！でも……今の ',
        callname,
        '、ちょっと変？',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '温泉は後です。とにかく早くトレーナー',
        you.adult_sex_title,
        ' を引き上げて！',
      ]);
      await era.printAndWait([
        '悪い。今日も「あなた」に手間をかけた。緩んだ空気の中で、自分があちこちの手に引き上げられていると気づいた ',
        you.get_colored_name(),
        ' は、安心して寝転がった。',
      ]);

      await era.printAndWait([
        '次に目が覚めたとき、頭上の光は星空から暖色の天井灯になっていた。',
      ]);
      await era.printAndWait([
        '幸い、目に入ったのは病院の見知らぬ白い壁ではなく、温泉宿の和の内装だった。',
      ]);
      await era.printAndWait([
        'どれだけ寝ていた。',
        urara.get_colored_name(),
        ' は。とにかく起きて……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が少しぼやけた視界で体を起こそうとしたとき、下からの抵抗が優しく頬を押さえた。',
      ]);
      await urara.say_and_wait([
        callname,
        '、まだ動かないで。休むときは無理しなくていいよ？',
      ]);
      await era.printAndWait([
        '優しい声に合わせて視界を上げると、小さな',
        urara.uma_sex_title,
        'が上から笑顔を見せていた。',
      ]);
      await era.printAndWait([
        'おとなしい座り方が枕の代わりになり、',
        urara.teen_sex_title,
        'がさっき湯に隠していた引き締まった脚が、今は柔らかく ',
        you.get_colored_name(),
        ' の後頭部を支えている。',
      ]);
      await era.printAndWait([
        'ゆるい和の衣を着た ',
        urara.get_colored_name(),
        ' は、子をなだめる母親のように ',
        you.get_colored_name(),
        ' の頬を撫でながら、手の耳かきを立てた。',
      ]);
      await urara.say_and_wait([
        'えへへ～',
        callname,
        '、今子どもみたい。ずっと大変だったから？',
      ]);
      await urara.say_and_wait([
        'みんなから聞いたよ。こうすると楽になるって。',
        callname,
        '、少し体を横にして。',
      ]);
      await urara.say_and_wait([
        '大丈夫。今日の ',
        callname,
        ' は甘えていいよ。落ち着かないなら、ウララの尻尾掴んでもいいよ？',
      ]);
      await era.printAndWait([
        '優しい促しで体が勝手に動き、',
        you.get_colored_name(),
        ' は母親に慰められる子どものように、目の前の柔らかい毛を握った。',
      ]);
      await urara.say_and_wait([
        'ウララも初めてだから、突かれて痛かったら言ってね？',
      ]);
      await era.printAndWait([
        '細い指が耳の輪郭を撫で、綿球で外耳の汚れを払ったあと、',
        urara.teen_sex_title,
        'は耳かきで耳の中を優しくこすり始めた。',
      ]);
      await era.printAndWait([
        'しびれる感触が全身へ広がり、',
        urara.teen_sex_title,
        'の甘く清らかな抱擁の中で、意識を浮かせる緩みへ変わっていく。',
      ]);
      await era.printAndWait([
        '子どもの膝に頭を預けて甘えるのは、大人のすることか。反論したくても、頭はもう考えるのを嫌っている。',
      ]);
      await urara.say_and_wait([
        '前に何があっても、これから何があっても、ウララは ',
        callname,
        ' に感謝したい。',
      ]);
      await urara.say_and_wait([
        callname,
        ' がこれからも安心した笑顔でいてほしい。それがウララからの贈り物。',
      ]);
      await urara.say_and_wait([
        'ウララの傍には、いつでも ',
        callname,
        ' が休める場所がある。だからまた不安になったら、ウララのところへ来て？',
      ]);
      await era.printAndWait([
        '柔らかい吐息とティッシュで耳の汚れを拭き、',
        urara.teen_sex_title,
        'は笑いながら、自分の懐へ沈んでいく大人をつついた。',
      ]);
      await urara.say_and_wait([
        callname,
        '、すぐ寝ないで？あと片方の耳もあるよ。',
      ]);
      await urara.say_and_wait(['今夜は、まだ時間あるよ？']);
      await era.printAndWait([
        urara.get_colored_name(),
        ' が作った優しさの中で、',
        you.get_colored_name(),
        ' は安心して目を閉じた。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        'ふふ～温泉はいいですね。特に一段落したあとは、わたくしの気持ちまで軽くなります。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '招かれざる客ではありますが、もう休まれたのですから、少し温泉を借りても構いませんよね。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'あ！あとこれ……『この時間の中で、あなたはウララとのかけがえのない情誼を深く感じました～』',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'こほん……聞こえ方がどんなに軽くても、かけがえのない情誼は、確かにここに降りています……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '少なくとも今この瞬間は、安心で幸福なのでしょう。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_teach: (() => {
    const title = '名指導';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '商店街の買い物を終えて帰る道で、傍で ',
        you.get_colored_name(),
        ' の荷物を持ってくれる ',
        urara.get_colored_name(),
        ' が嬉しそうに何か鼻歌を歌っている。',
      ]);

      era.printButton(
        '「ずいぶん機嫌がいいな。何かいいことでもあったか？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'えへへ～そうだよ！商店街のみんなが『頑張ってるね』って言って、プレゼントもくれた！すごいよね！',
      );
      await urara.say_and_wait(
        '前はみんな『無理しないで』って言ってたのに、今は『頑張ってるね』って言う人も増えた！',
      );
      await era.printAndWait([
        'ぴょんぴょん跳ねて手の袋をさらさら鳴らし、小さな',
        urara.uma_sex_title,
        'は ',
        you.get_colored_name(),
        ' に感謝の笑顔を見せた。',
      ]);
      await urara.say_and_wait(
        'きっと前より速く走れるようになったから、ウララを認めてくれる人も増えたんだよ！',
      );
      await urara.say_and_wait([
        'でも ',
        callname,
        ' がいなかったら、ウララここまで来られなかった！だから、ありがとう、',
        callname,
        '！',
      ]);

      era.printButton('「なら、次のレースも——」', 1);
      await era.input();

      await urara.say_and_wait('うん！次のレースもウララ、頑張るよ！');
      await era.printAndWait([
        urara.get_colored_name(),
        ' の日差しを受けた笑顔の中で、',
        you.get_colored_name(),
        ' は',
        urara.sex,
        'と一緒に、次へ向かうやる気を膨らませた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_dance: (() => {
    const title = 'ダンス練習';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' が忘れ物を取りにダンス室へ行くと、',
        urara.get_colored_name(),
        ' は今日も放課後、一人でダンス練習を続けていた。',
      ]);
      await urara.say_and_wait([
        '——よし、終わり！ふぅ～懐かしい……あ！',
        callname,
        '、来た！',
      ]);
      await era.printAndWait([
        '曲が終わって顔の汗を拭き、トレーナーが来るのを見た ',
        urara.get_colored_name(),
        ' も笑って ',
        you.get_colored_name(),
        ' を迎えた。',
      ]);

      era.printButton('「うん！ウララもお疲れ。でも、懐かしいって？」', 1);
      await era.input();

      await urara.say_and_wait(
        'あ、小さいころ家の作業小屋でよく踊ってたの。地元の友だちは木でマイクも作ってくれた！',
      );
      await urara.say_and_wait(
        'トレセンに来るとき、みんなウララと約束したんだ。いつか一緒にウララのライブを見に来るって！',
      );
      await urara.say_and_wait(
        'だからライブの演技もちゃんと練習しないと。がっかりさせられないよ！',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' の地元、高知の友だちか。だから',
        urara.sex,
        'はレース後のライブのために、こんなに頑張っている。',
      ]);

      era.printButton('「うん……ウララの成果、見せてくれるか？」', 1);
      await era.input();

      await urara.say_and_wait([
        'もちろん！じゃあ ',
        callname,
        '、ウララのテープ、押してくれる？',
      ]);
      await era.printAndWait([
        '馴染みの曲に合わせて、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の視線の下、隠さずこれまでのがんばりを見せ始めた。',
      ]);
      await era.printAndWait([
        '歌詞を間違えることもある。でも',
        urara.sex,
        'の身振りは気持ちを十分に伝えている。十分に立派な演技だ。',
      ]);

      await urara.say_and_wait([
        callname,
        '、ウララどう？みんな見たら嬉しい？',
      ]);
      era.printButton('「うん、みんなきっと喜ぶ。」（スピード+10）', 1);
      era.printButton('「歌詞を覚えきれば、もっとよくなる。」（賢さ+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait(
          'やっぱり！ウララもそう思う！本番ではもっと頑張るよ！',
        );
        await urara.say_and_wait(
          '今も昔も、応援してくれるみんなにウララの成長を見せるよ！',
        );
        await era.printAndWait([
          'やる気満々の ',
          urara.get_colored_name(),
          ' はまた自主練を始めた。こう頑張る',
          urara.sex,
          'なら、舞台では失敗しないだろう。',
        ]);
      } else {
        await urara.say_and_wait(
          'そうだね。歌詞、よく間違える！ちゃんと覚えれば、ライブもっと良くなるよね？',
        );
        await urara.say_and_wait('よし！じゃあウララ、これから歌詞覚える！');
        await era.printAndWait([
          '歌詞を覚えれば、',
          urara.sex,
          'の歌声はもっと正確に気持ちを届ける。舞台でも目を引くだろう。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  op_fans_letr: (() => {
    const title = 'ファンレター';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        urara.get_colored_name(),
        ' と ',
        you.get_colored_name(),
        ' はファンの贈り物を片付けていた。見覚えのある差出人がほとんどな中に、小さな封筒が挟まっていた。',
      ]);
      await era.printAndWait([
        'いつものように一通ずつ丁寧に扱う ',
        urara.get_colored_name(),
        ' は、目立たないそれも開いて、喜んで目を見開いた……',
      ]);
      await urara.say_and_wait([
        callname,
        '！これ、すごく遠いところに住んでる子からの手紙だよ！',
      ]);
      await urara.say_and_wait(
        '『諦めない姿を見て、勇気がもらえました』……こう書いてある。ちょっと恥ずかしい！',
      );
      await urara.say_and_wait(
        'だから次は絶対勝つ！そしたらこの子、もっと喜んでくれる？',
      );

      era.printButton('「もちろん。ウララの勝利を見たら、きっと喜ぶ。」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' の肯定に、',
        urara.get_colored_name(),
        ' は笑いながら返事を書き始めた。遠い場所からの励ましを受け取って、',
        urara.get_colored_name(),
        ' のやる気も増した。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_all_like: (() => {
    const title = '誰からも好かれる';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '今日の仕事を終えて、',
        you.get_colored_name(),
        ' は一人で学園の周りを歩いていた。小さな公園を通ると、見慣れた姿がいた。',
      ]);
      await era.printAndWait([
        '公園の芝生にきれいな敷物が広げられ、',
        urara.get_colored_name(),
        ' は弁当を出した母子と楽しそうに座って話している。',
      ]);
      await urara.say_and_wait(
        'え？名前？ハルウララ！ウララの名前はハルウララ！',
      );
      await era.printAndWait(
        'おばさんA「ウララ……？トレセン学園のハルウララさんですか。レース、見ていますよ！」',
      );
      await urara.say_and_wait(
        'え？ウララ、すごいの？えへへ～ちょっと恥ずかしい。でも……',
      );
      await urara.say_and_wait([
        'ウララの ',
        callname,
        ' はあそこにいるよ！だから——',
        callname,
        '！一緒にお弁当食べる？',
      ]);
      await era.printAndWait([
        'いつの間にか遠くの ',
        you.get_colored_name(),
        ' に気づいて、小さな',
        urara.uma_sex_title,
        'は耳を揺らしながら ',
        you.get_colored_name(),
        ' のほうへ手を振っている。',
      ]);

      era.printButton('「ん？待って、俺もいいか？」', 1);
      await era.input();

      await era.printAndWait([
        'おばさんA「遠慮しないでください、トレーナー',
        you.adult_sex_title,
        '。担当さんがうちの子と遊んでくれたお礼です！」',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' と通りすがりのおばさんの熱い誘いに、',
        you.get_colored_name(),
        ' は少し遠慮しながらも敷物の隅に座った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が座ると、',
        urara.get_colored_name(),
        ' はまた傍の小さな男の子に楽しそうに話しかけた。',
      ]);
      await urara.say_and_wait(
        'でも、じゃんけんの七試合目、まだ勝負ついてないよ！続ける？',
      );
      await era.printAndWait(
        '男の子A「え？食べ終わってから続きって約束でしょ。それに次も僕が勝つし！」',
      );
      await urara.say_and_wait(
        'よく言うね。でもウララも絶対負けない！ウララ、じゃんけん毎回勝つし、頭もすごく速く回るよ！',
      );
      await era.printAndWait([
        '男の子の母親は優しい目で二人のやり取りを見ている。だが傍の ',
        you.get_colored_name(),
        ' は、小さな男の子の顔から一筋の焦りを読んだ……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の明るく愛らしい性格は、一瞬で誰とでも友だちになる。だから',
        urara.sex,
        'は子どもたちにも人気だ。',
      ]);
      await era.printAndWait([
        'だからこそ、',
        urara.sex,
        'は思春期に入る子どもたちにも、他の「初恋キラー」に劣らない引力がある。だから……',
      ]);
      await era.printAndWait([
        '男の子A「あの……ウララ',
        urara.elder_sibling_sex_title,
        '、また……また会えますか？」',
      ]);
      await urara.say_and_wait([
        'ん？ウララ、またこの公園来るよ。だから会えるよ？ね、',
        callname,
        '？',
      ]);
      await era.printAndWait([
        '別れる前、母親の手を繋いだ男の子は、この',
        urara.uma_sex_title,
        urara.elder_sibling_sex_title,
        'へ、ぼんやりしていても勇敢な気持ちを投げた。',
      ]);
      await era.printAndWait([
        '勇気は立派だ。だが事情を知らない',
        urara.uma_sex_title,
        urara.elder_sibling_sex_title,
        'は当然の答えを返し、傍に寄り添う大人へ笑顔を向けた。',
      ]);
      await era.printAndWait([
        '届かないどころか、状況は悪化した？',
        urara.get_colored_name(),
        ' の笑顔の中で、男の子の目を直視できなかった ',
        you.get_colored_name(),
        ' は黙って頷いただけだった。',
      ]);
      await era.printAndWait([
        '競走',
        urara.uma_sex_title,
        'として人気があるのはいい。だが何かが知らないうちに悪化した気がする。あの男の子が無事でありますように……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の手を引いて言い淀む ',
        you.get_colored_name(),
        ' と、まだ笑って後ろへ手を振る ',
        urara.get_colored_name(),
        ' は、一緒に帰路へ就いた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_food: (() => {
    const title = 'たい焼きと好き嫌い対策';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        'ある日の外出トレーニングの合間、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' は、大敵に臨むようにたい焼き屋の前に立っていた。',
      ]);
      await urara.say_and_wait([
        callname,
        '、準備できた？今日は一緒に食べる約束だよ？',
      ]);

      era.printButton(
        '「俺は問題ない。問題はウララだ……すみません、ランダム味のたい焼きを二つ。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '傍で意気込む ',
        urara.get_colored_name(),
        ' を一目見て、',
        you.get_colored_name(),
        ' は仕方なく店員に「隠れメニュー」を二つ頼んだ。',
      ]);
      await urara.say_and_wait(
        '大丈夫！嫌いな味が出ても、ウララちゃんと食べ切る！',
      );
      await urara.say_and_wait([
        'じゃあ ',
        callname,
        '、一緒にかじるよ……うわ……わ、わさび……！',
      ]);
      await era.printAndWait([
        '下のベンチが温まる前に、小さな',
        urara.uma_sex_title,
        'は手の菓子に噛み返されたみたいに跳ねた。',
      ]);
      await era.printAndWait([
        '大人として、',
        you.get_colored_name(),
        ' は辛さで真っ赤な ',
        urara.get_colored_name(),
        ' を冷静に見ながら、自分のピーマン餡の変な菓子を食べた。',
      ]);

      era.printButton(
        '「ウララ、大丈夫か。無理ならそれは俺が片付けるぞ？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        'うぅ～大丈夫！ウララ、一人で食べ切る！行くよ……うわ……',
      );
      await era.printAndWait([
        '顔は真っ赤でもやる気満々の小さな担当を見て、',
        you.get_colored_name(),
        ' は黙って少し先で',
        urara.sex,
        'に甘い飲み物を二杯買った……',
      ]);
      await era.printAndWait([
        'とにかく、悪戯みたいな菓子を食べたのに、',
        you.get_colored_name(),
        ' の励ましで ',
        urara.get_colored_name(),
        ' のやる気はかえって上がった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_stair: (() => {
    const title = '階段トレーニングと生徒の噂';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '理事長室から戻る途中、',
        you.get_colored_name(),
        ' は校舎のある階段の口で、なぜか上り下りしている ',
        urara.get_colored_name(),
        ' にぶつかった。',
      ]);
      await urara.say_and_wait('ふ……ふ……また……十二段だけ……');

      era.printButton(
        '「ウララ、何してる。自主トレならトレーニング場のほうがいいぞ？」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'あ、',
        callname,
        '！みんな、ここの階段は夕方になると一段増えるって！魔法みたい！',
      ]);
      await urara.say_and_wait(
        '面白そうだから数えに来たの。今までもう一時間以上、往復して数えてる……',
      );
      await era.printAndWait([
        '学園怪談か。トレセンの',
        urara.uma_sex_title,
        'たちも思春期の',
        urara.teen_sex_title,
        'だ。興味を持つのは当然だ。',
      ]);
      await era.printAndWait([
        'トレーナーの ',
        you.get_colored_name(),
        ' にとっては、あやふやな心霊の噂より、今も謎だらけの',
        urara.uma_sex_title,
        'たちのほうが面白い。',
      ]);

      era.printButton('「しかし、一時間以上は長すぎないか？」', 1);
      await era.input();

      await urara.say_and_wait('うん！何回数えても……段はいつも十二段……');
      await urara.say_and_wait(
        'だからウララ、まだ諦めない。みんな本当だって言うから、もっと数える……',
      );
      await era.printAndWait(
        'いや、それはだめだろう。この噂の結末が不運に憑かれるのはさておき、心霊はたまたま出会えるものではない。',
      );
      await era.printAndWait([
        'ほら、五、十、十一、十二、十三……待て？！おかしいと気づいた ',
        you.get_colored_name(),
        ' は、冷えていく首筋を押さえた……',
      ]);
      await urara.say_and_wait(['……え？', callname, '、何するの……うわ——']);
      await era.printAndWait([
        'まずいと察した ',
        you.get_colored_name(),
        ' はすぐ小さな',
        urara.uma_sex_title,
        'を脇に抱え、人間最速でその場から逃げた。',
      ]);
      await era.printAndWait([
        '異常は避けた。だがあとで ',
        urara.get_colored_name(),
        ' は運動しすぎて活力を落とした。これも……不運の一種か。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_mother: (() => {
    const title = '「あの人」との出会い';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（特殊判定：熱意以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        'ああ～あの人です。トレーナー',
        you.adult_sex_title,
        '（あなた）、偶然の出会いではありますが、心の準備を。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'いいえ、あの人にとっては偶然ではないのかもしれません。',
      );
      era.drawLine();
      await era.printAndWait([
        '理事長室の扉の前で、',
        you.get_colored_name(),
        ' が目の前の黒衣のウマ娘を見るのと同時に、彼女も落ち着いて通りかかる ',
        you.get_colored_name(),
        ' を値踏みしている。',
      ]);
      await era.printAndWait(
        '見たことのない顔だ。かつての卒業生か。トレセン見学の保護者か。理事長の知人か。それとも……',
      );
      await era.printAndWait([
        'どう切り出せばいいかわからない ',
        you.get_colored_name(),
        ' を前に、端正な顔の大人のウマ娘はノックしかけた手を下ろし、振り返って友好の微笑みを見せた。',
      ]);
      await era.printAndWait(
        '大人のウマ娘「失礼しました。こちらのトレーナーさんですね。トレーニング場へ案内していただけますか。」',
      );

      era.printButton('「え？ああ、あなたは……？」', 1);
      await era.input();

      await era.printAndWait([
        '大人のウマ娘「一応、生徒の保護者です。わたくしの',
        urara.sex_code - 1 ? '娘' : '息子',
        'もここで学んでいて、もうデビューしています。」',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は彼女と会ったことがない。だがこの厳しい気配の女性の笑顔は、',
        you.get_colored_name(),
        ' に長く知り合いだったような親しさを感じさせた。',
      ]);

      era.printButton(
        '「……トレーニング場はあちらです。ついてきてください……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        'わけのわからない出会いのあと、わけのわからない頼みを受け、',
        you.get_colored_name(),
        ' はこの突然現れた謎の女性とトレーニング場へ向かった。',
      ]);
      await era.printAndWait([
        '硬い返事しかできない ',
        you.get_colored_name(),
        ' より、傍の彼女のほうが、初対面の ',
        you.get_colored_name(),
        ' に妙な興味を持っている。',
      ]);
      // 特殊な高好感判定
      if (high_relation) {
        await era.printAndWait([
          you.get_colored_name(),
          ' に',
          urara.uma_sex_title,
          'とトレセンのことをたくさん聞いたあと、彼女の親しみの微笑みに謝意が少し増えた。',
        ]);
        await era.printAndWait(
          '大人のウマ娘「あなたも大変なのですね。いつでも担当のためにいるのは、簡単なことではありません。」',
        );
        await era.printAndWait([
          '大人のウマ娘「実はわたくしの',
          urara.sex_code - 1 ? '娘' : '息子',
          'も運がよかったのです。',
          urara.sex,
          'は強くありませんが、あなたと同じく優れたトレーナーに出会えました。」',
        ]);
        await era.printAndWait([
          '同行の終わりに ',
          you.get_colored_name(),
          ' と一緒にトレーニング場の展望台へ立ち、すべてを知っているような彼女は走る',
          urara.teen_sex_title,
          'たちへ安堵の笑顔を向けた。',
        ]);
      } else {
        await era.printAndWait([
          '悪い生徒への抜き打ち試験のように、あれこれ聞いたあと、彼女は鋭くなった目をまた ',
          you.get_colored_name(),
          ' へ向けた。',
        ]);
        await era.printAndWait(
          '大人のウマ娘「中央に見合う専門性はあります。ですが担当の心の手入れが、足りないようです……」',
        );
        await era.printAndWait([
          '大人のウマ娘「そう思っても、もう遅いのです。コースに立った',
          urara.uma_sex_title,
          'は、走り出したら簡単には諦めません。」',
        ]);
        await era.printAndWait([
          '同行の終わりに ',
          you.get_colored_name(),
          ' と一緒にトレーニング場の展望台へ立ち、すべてを知っているような彼女の顔に憂いが少し増えた。',
        ]);
      }
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          '大人のウマ娘「ところで、あなたを慕うウマ娘は何人……急に聞いても、戸惑うだけでしょう。」',
        ]);
        await era.printAndWait(
          '大人のウマ娘「夢を走りに託す時代に、後ろでいつまでも支えてくれる大人を好きになる……」',
        );
        await era.printAndWait([
          '大人のウマ娘「正しいことではありません。ですが盛りの',
          urara.couple_title,
          'に、俗を免れる者が何人いるでしょう。当時のわたくしも例外ではありませんでした……」',
        ]);
      }
      era.printButton('「あの……話を遮ってすみません。あなたは一体……？」', 1);
      await era.input();

      await era.printAndWait(
        '大人のウマ娘「子どもを見に来た、ただの保護者ですよ？」',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の問いに直接は答えず、トレーニング場の向こうから走る桜色を見て、謎の女性は ',
        you.get_colored_name(),
        ' に最後の微笑みを残した。',
      ]);
      await era.printAndWait([
        '大人のウマ娘「あなたの担当ですね。可愛くてかっこいい子です。迎えに行かないのですか、',
        urara.sex,
        'を。」',
      ]);

      era.printButton('「あ、はい……え？」', 1);
      await era.input();

      await era.printAndWait(
        '瞬き一つで、黒衣の謎のウマ娘は十数メートル先の遠い背中だけになった。',
      );
      await era.printAndWait([
        '反対側では、展望台へ駆け上がった ',
        urara.get_colored_name(),
        ' が興奮して ',
        you.get_colored_name(),
        ' の胸へ飛び込み、',
        you.get_colored_name(),
        ' が何かを思い出しかけた思考をまたかき回した。',
      ]);
      await urara.say_and_wait([
        callname,
        '！今日のウララ、調子すごくいい！模擬レースも勝ったよ！どう？すごい？',
      ]);
      await era.printAndWait([
        '顔を上げて、まだぼんやりした ',
        you.get_colored_name(),
        ' の正面を見たとき、笑顔のまま、小さな',
        urara.uma_sex_title,
        'の表情に疑問が混じり始めた。',
      ]);
      await urara.say_and_wait([
        '……あれ？変だね。なんで ',
        callname,
        ' から、ママの匂いがするの——',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        'いかがでした。奇妙な出会いでしたね。でも本当に偶然ですか。それとも、すべて必然だったのですか。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'あなたとウララにも、あの人にもわたくしにも、トレセンに入ったとき、賽はすでに投げられていました。',
      );
    };
    f.title = title;
    return f;
  })(),
  sa_vs: (() => {
    const title = '腕相撲対決';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} spe スペシャルウィーク
     * @param {CharaTalk} sky セイウンスカイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_1 ハルウララのスペシャルウィークへの呼び方
     * @param {PrintedSpan} callname_20 セイウンスカイのプレイヤーへの呼び方
     */
    const f = async (urara, spe, sky, you, callname, call_1, callname_20) => {
      await era.printAndWait([
        '昼休み、',
        you.get_colored_name(),
        ' は中庭の騒ぎに引き寄せられた。近づくと、',
        urara.get_colored_name(),
        ' と同級生たちの腕相撲だった。',
      ]);
      await era.printAndWait([
        '見てわかるとおり、今の強い相手に対して、',
        urara.get_colored_name(),
        ' は劣勢だった……',
      ]);
      await spe.say_and_wait('ウ、ウララ！もう……降参していいよ！');
      await urara.say_and_wait([call_1, ' こそ！手、震えてるよ？お——！']);
      await era.printAndWait([
        urara.get_colored_name(),
        ' にはまだ言い返す余裕がある。だが',
        urara.sex,
        'の手がだんだん押し負け、傍の審判は結果を告げた。',
      ]);
      await sky.say_and_wait(
        'よし！終わり！すごいね、スペまた勝った。何回目？',
      );
      await spe.say_and_wait(
        '昔よくママの農作業を手伝ってたからかな。でもこんなに長く持ったウララもすごいよ！',
      );
      await urara.say_and_wait([
        'でもまた負けた！どうしたら勝てるの……あ、',
        callname,
        '！腕相撲、どうしたら勝てる？',
      ]);
      await era.printAndWait([
        'ん？見られた？いつから。遠くで見ていた ',
        you.get_colored_name(),
        ' に手を振る ',
        urara.get_colored_name(),
        ' を見て、通りかかっただけの ',
        you.get_colored_name(),
        ' も',
        urara.uma_sex_title,
        'たちへ寄るしかなかった。',
      ]);

      await era.printAndWait([
        urara.get_colored_name(),
        ' が気合いだけで ',
        spe.get_colored_name(),
        ' に勝つのは難しい。でも',
        urara.sex,
        'から聞かれたなら……',
      ]);
      era.printButton('「腕相撲に必要なのは技術だ。」（賢さ+10）', 1);
      era.printButton('「頑張ればいい……んじゃないか？」（パワー+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await sky.say_and_wait([
          'ああ～',
          callname_20,
          ' が言ってるのは支点、力点、作用点？いわゆる腕相撲の技術だね～',
        ]);
        await urara.say_and_wait(
          '支点、力点、作用点……？よくわからないけど、頑張る呪文？',
        );
        await urara.say_and_wait('よし！わかった！じゃあもう一回！スペ！');
        await era.printAndWait([
          '違う。そういう理解ではない。言うことはないが、',
          urara.get_colored_name(),
          ' も ',
          you.get_colored_name(),
          ' も、本当にわかっていてほしい……',
        ]);
        await spe.say_and_wait(
          'うん！じゃあ、じゃあ私も頑張る呪文！『勝ったら今夜はにんじんハンバーグ』！',
        );
        await era.printAndWait(
          'いや待て、こっちは何だ。にんじんハンバーグが好きなのはわかった……',
        );
        await sky.say_and_wait(
          '楽しければいいじゃん～よし、両者、用意……スタート！',
        );
        await era.printAndWait([
          '予想どおり、',
          urara.get_colored_name(),
          ' はまた負けた。でも',
          urara.sex,
          'の機嫌はいい。その「呪文」も気に入ったらしい。収穫はあるか。',
        ]);
      } else {
        await era.printAndWait([
          urara.get_colored_name(),
          ' が腕相撲の技術を知っているかはさておき、実力差が大きすぎるなら、試せるのはもっと力を入れることだけだ。',
        ]);
        await urara.say_and_wait(
          'おお、そういうこと！レースと同じだよね？すごく頑張れば絶対勝つ！',
        );
        await urara.say_and_wait(
          'よし！じゃあスペ、もう一回！今度は絶対勝つよ！',
        );
        await spe.say_and_wait(
          'ウララがそう言うなら、私もレースのやる気で行く！行くよ、ウララ！',
        );
        await era.printAndWait([
          spe.get_colored_name(),
          ' も全力なら、結果はまた見えたようなものだ……',
        ]);
        await sky.say_and_wait(
          'いやーでもウララ、あのとき押し返してきたよね～びっくりした。',
        );
        await spe.say_and_wait('私も一瞬焦った！ウララすごいね。またやろう！');
        await urara.say_and_wait([
          'えへへ！',
          callname,
          '、ウララ、やっぱりすごいよね？次は絶対負けない——',
        ]);
        await era.printAndWait([
          '結局また負けた。だが全力を出し切った ',
          urara.get_colored_name(),
          ' は満足そうだった。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_lost_found: (() => {
    const title = '大事な落とし物';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {PrintedSpan} callname_30 ライスシャワーのプレイヤーへの呼び方
     * @param {PrintedSpan} r_call_u ライスシャワーのハルウララへの呼び方
     */
    const f = async (
      urara,
      rice,
      you,
      callname,
      call_30,
      callname_30,
      r_call_u,
    ) => {
      await urara.say_and_wait([
        'ん？',
        call_30,
        ' のリボン、どこ行っちゃった？',
        callname,
        '、そっちにある？',
      ]);
      await era.printAndWait([
        '学園の植え込みから顔を出して、',
        urara.get_colored_name(),
        ' は頭の葉を取りながら ',
        you.get_colored_name(),
        ' に聞いた。',
      ]);

      era.printButton('「こっちにも何もない。もう少し先を見よう。」', 1);
      await era.input();

      await era.printAndWait([
        '道端のゴミ箱の蓋を閉めて、',
        you.get_colored_name(),
        ' は言いながら ',
        urara.get_colored_name(),
        ' を植え込みから抱き出した。',
      ]);
      await rice.say_and_wait(
        'だ、大丈夫です。リボン一条だけですから、ライスが新しいのを買えば……',
      );
      await urara.say_and_wait(
        'でも、大好きなリボンでしょ？大好きなら大事！大丈夫、絶対見つかる！',
      );
      await era.printAndWait([
        '諦めかけた ',
        rice.get_colored_name(),
        ' を何度目かわからず遮って、',
        urara.get_colored_name(),
        ' は頼もしい笑顔で傍の友だちにまた親指を立てた。',
      ]);
      await urara.say_and_wait([
        '大丈夫、絶対見つかる！あ、そうだ、',
        callname,
        '、今から分かれて探そう——',
      ]);
      await era.printAndWait([
        '三人で分かれようとしたとき、足元の水染みが広がり、雨が一斉に落ちてきた。',
      ]);
      await rice.say_and_wait([
        '雨ですか！？も、もしかしてライスのせい……！ご、ごめんなさい……！',
      ]);

      era.printButton(
        '「いや、自分をそう言うな。今日の天気予報はもともと雨だった。」',
        1,
      );
      await era.input();

      await rice.say_and_wait([
        callname_30,
        ' がそう言っても……',
        r_call_u,
        '、本当にもう探さなくていいです！ご迷惑をおかけして……！',
      ]);

      await urara.say_and_wait([
        '大丈夫。大事なものは早いほうがいい！ね、',
        callname,
        '？',
      ]);
      era.printButton(
        '「そうだ。もう少し頑張ろう。三人いる。」（体力-100 根性+20）',
        1,
      );
      era.printButton('「もう雨だ。とりあえず一度戻ろう。」（スタミナ+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          'うん、',
          callname,
          ' の言うとおり！今諦めるのは早い！一緒に探そう！',
        ]);
        await era.printAndWait([
          'そのあと強くなる雨の中、',
          you.get_colored_name(),
          ' と二人の小さな',
          urara.uma_sex_title,
          'は、びしょ濡れ寸前で ',
          rice.get_colored_name(),
          ' のリボンを取り戻した。',
        ]);
        await urara.say_and_wait(
          'えへへ～みんな、もう少しでびしょびしょだった。でもリボン見つかってよかった！',
        );
        await rice.say_and_wait([
          'ご、ごめんなさい。リボンをなくして、雨まで降らせて……ライス、またみんなに迷惑を……',
        ]);
        await urara.say_and_wait([
          'え？',
          call_30,
          ' の話だと……',
          call_30,
          '、空に雨を降らせられるの？',
          call_30,
          ' の力、すごい！',
        ]);
        await rice.say_and_wait([
          'ち、違います。ライスはそういう意味じゃありません、',
          r_call_u,
          '……',
        ]);
        await era.printAndWait([
          '二人の友だちはまた小さな難題に入ったらしい。だが ',
          rice.get_colored_name(),
          ' の硬い表情は、',
          urara.get_colored_name(),
          ' のおかげで完全に緩んだ。',
        ]);
        await era.printAndWait([
          'しばらくして、',
          you.get_colored_name(),
          ' の助けで服を乾かした ',
          urara.get_colored_name(),
          ' と ',
          rice.get_colored_name(),
          ' は、また笑顔を見せた——',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          '、ウララ大丈夫。雨も楽しいよ！それはいいから、早くリボン見つけなきゃ！',
        ]);
        await rice.say_and_wait([
          'でも、濡れたら風邪をひきます！ライスは ',
          r_call_u,
          ' にも風邪をひいてほしくないです……',
        ]);
        await urara.say_and_wait(
          'うーん……じゃあ雨が止んでからまた探そう。早くね！約束だよ？',
        );
        await era.printAndWait([
          '別れたあと、雨は翌日まで降り続いた。だが ',
          you.get_colored_name(),
          ' と ',
          rice.get_colored_name(),
          ' が場所へ着くと、',
          urara.get_colored_name(),
          ' はもうリボンを持って待っていた。',
        ]);
        await urara.say_and_wait([
          call_30,
          '！',
          callname,
          '！こっち！ウララ、リボン見つけたよ——！',
        ]);
        await rice.say_and_wait(['……', r_call_u, '……！']);
        await era.printAndWait([
          urara.get_colored_name(),
          ' が嬉しそうに走ってくる姿を見て、さっきまで心配顔だった ',
          rice.get_colored_name(),
          ' も笑顔になった。',
        ]);
        await era.printAndWait([
          'やっぱり',
          urara.sex,
          'は朝早く出て、リボンを探しに行ったのだ。見当が当たって、',
          you.get_colored_name(),
          ' は小さな',
          urara.uma_sex_title,
          'の寮監とルームメイトに連絡を送った……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  op_race_clothe: (() => {
    const title = '勝負服について';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '今日、',
        urara.get_colored_name(),
        ' は先日の事故で破れて修理に出していた勝負服を、やっと受け取った。',
      ]);
      await urara.say_and_wait(
        'えへへ～ウララの勝負服、やっと戻ってきた！勝負服着てレースするの、ずっとかっこいいと思ってた──！',
      );
      await era.printAndWait([
        '地味でも最初から',
        urara.sex,
        'に付き添ってきた一着目の勝負服を抱いて、',
        urara.get_colored_name(),
        ' の機嫌は明らかに上がった。',
      ]);
      await era.printAndWait([
        'そもそも勝負服のデザインは、だいたい',
        urara.uma_sex_title,
        '自身が関わって完成する。だから一着ごとに唯一だ。',
      ]);
      await era.printAndWait([
        '他人が美醜をどう評しても、この個性ある衣服は「',
        urara.teen_sex_title,
        'たちの夢を乗せる盛装」と呼ばれる資格がある。',
      ]);
      await era.printAndWait([
        'ただ ',
        urara.get_colored_name(),
        ' が自分で組み立てた「夢の最初の形」は、',
        urara.sex,
        'らしいのに、どこか「どこにでもある」気がする……',
      ]);

      era.printButton(
        '「……そういえば聞いていいか。ウララは最初、この服をどうデザインした？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' の探るような慎重な問いに、',
        urara.get_colored_name(),
        ' は大きな笑顔で返した。',
      ]);
      await urara.say_and_wait(
        'ん？そんなに大したことないよ？この服のデザイン、小さいころ初めて走ったときの体操服を参考にしただけ！',
      );
      await urara.say_and_wait(
        '全然勝てなかったけど、パパとママは褒めてくれた。だからこの服を着ると、ウララ強くなれる気がする！',
      );
      await urara.say_and_wait(
        '強くなったら、この服を着る気持ちで、みんなも楽しくしたい！',
      );
      await era.printAndWait([
        'そうか。',
        urara.get_colored_name(),
        ' の夢はずっとこんなに単純で地味だ。だから勝負服もそうなる。「強くなったら」、か……',
      ]);
      await era.printAndWait([
        '勝負服があることと、生涯で着る機会があることは別だ。',
        urara.get_colored_name(),
        ' もそれはわかっている。',
      ]);
      await era.printAndWait([
        'まだ未熟でも、',
        urara.get_colored_name(),
        ' は最初から心の準備をしていた——',
      ]);

      urara.say([
        'そうだ、',
        callname,
        '！せっかく直ったし……今日、着てトレしていい？',
      ]);
      era.printButton('「また壊したら困る。」（スピード+20）', 1);
      era.printButton('「ウララが嬉しいなら、いいだろう。」（パワー+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait(
          '——そうだね。また壊したらだめ。勝負服なんだから、大切にしなきゃ。',
        );
        await urara.say_and_wait([
          'ウララ、勝ち続けるよ！だから ',
          callname,
          '、着られる時間以外は、ウララの代わりに預かってくれる？',
        ]);
        await era.printAndWait([
          '勝負服を着る期待を抱いたまま、',
          urara.get_colored_name(),
          ' は自分の「夢」を畳んで、笑って ',
          you.get_colored_name(),
          ' の手に渡した。',
        ]);
      } else {
        await era.printAndWait([
          urara.get_colored_name(),
          ' の満面の期待を前に、',
          you.get_colored_name(),
          ' は小さな',
          urara.uma_sex_title,
          'のまぶしい笑顔に反対できなかった。',
        ]);
        await urara.say_and_wait([
          '本当？ありがとう、',
          callname,
          '！ちゃんと頑張る。これからのレースでも着られるように！',
        ]);
        await era.printAndWait([
          'だが ',
          urara.get_colored_name(),
          ' が満足したあと、',
          urara.sex,
          'は「次に着るまで大切にする！」と言って、勝負服の預かりを自分から ',
          you.get_colored_name(),
          ' に渡した。',
        ]);
      }
      await era.printAndWait([
        'そうだ。トレーナーは、走ることを選んだ「',
        urara.couple_title,
        '」の夢を掴むのを助ける仕事だ。',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' が「信頼」するトレーナーでもある——',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' を最後まで走らせる。小さな',
        urara.uma_sex_title,
        'と出会ったときと同じ鼓動を胸に、',
        you.get_colored_name(),
        ' は手の勝負服へ覚悟を固めた。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_interview: (() => {
    const title = '友だちと一緒に取材';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} etsuko 乙名史悦子
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {PrintedSpan} callname_30 ライスシャワーのプレイヤーへの呼び方
     * @param {PrintedSpan} r_call_u ライスシャワーのハルウララへの呼び方
     */
    const f = async (
      urara,
      rice,
      etsuko,
      you,
      callname,
      call_30,
      callname_30,
      r_call_u,
    ) => {
      await era.printAndWait([
        '今日、',
        urara.get_colored_name(),
        ' と ',
        rice.get_colored_name(),
        ' はネット媒体の特別取材を受けた。掲載予定は『仲良し競走',
        urara.uma_sex_title,
        '』の欄だ。',
      ]);
      await era.printAndWait([
        'だが学園によく出没する ',
        etsuko.get_colored_name(),
        ' とは違う見知らぬ人の取材に、二人の小さな',
        urara.uma_sex_title,
        'は調子が出ていない。',
      ]);
      await era.printAndWait(
        '記者A「では、お二人で過ごしていて印象に残っていることはありますか。」',
      );
      if (
        era.get('cflag:30:招募状态') === recruit_flags.yes &&
        era.get('love:30') >= 50 &&
        era.get('love:52') >= 52
      ) {
        await urara.say_and_wait([
          '印象に残ってる？',
          callname,
          ' と一緒のとき？',
        ]);
        await rice.say_and_wait([
          'はい、',
          callname_30,
          ' と一緒のときは確かに印象深いです。独り占めもいいのですが……',
        ]);
        await rice.say_and_wait([
          'ライスと ',
          r_call_u,
          ' が一緒に飛びついたとき、',
          callname_30,
          ' は意外と弱気になります。本当に可愛いです。',
        ]);
        await urara.say_and_wait(
          'でしょ！でもウララ、こっそりお菓子を持っていくのはだめだと思うよ？みんなに言わないと。',
        );
        await rice.say_and_wait([
          r_call_u,
          ' はまだ子どもですから。でもライスは高等部で、もう大人ですよ……？',
        ]);
        await urara.say_and_wait('え？そうなの～？');
        await era.printAndWait(
          '記者が聞きたかった方向かはさておき、二人の友だちの空気がおかしくないか……？',
        );
        await era.printAndWait([
          '同じ空気で震えている記者さんを横目に見て、',
          you.get_colored_name(),
          ' はすぐ、この切りは出せないと判断した——',
        ]);
      } else {
        await urara.say_and_wait(
          '印象に残ってる？どんなのが印象に残るの？ウララ、毎日そうだと思うよ？',
        );
        await rice.say_and_wait([
          'い、印象深い……！そ、その、ライスも……あの……！',
        ]);
        await rice.say_and_wait([
          '印象は深いのですが、ライスは毎日みんなに迷惑をかけてばかりで……すみません……',
        ]);
        await urara.say_and_wait([
          'え？',
          call_30,
          '、なんでまた沈むの？本当に大丈夫だよ——',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は仕方なく先頭の記者さんを見た。彼女もそっと、見慣れていても苦い目を返してきた。',
        ]);
        await era.printAndWait([
          '見てわかるとおり、',
          urara.get_colored_name(),
          ' ',
          urara.couple_title,
          'の今は、取材側が予想した方向とまったく違う。',
        ]);
      }
      await era.printAndWait([
        '取材が止まったすきに、窓口の保護者役である ',
        you.get_colored_name(),
        ' は取材班と次の段取りを話し始めた。',
      ]);
      await era.printAndWait([
        '記者A「申し訳ありません。',
        urara.couple_title,
        'をよりよく見せるため、取材の方向を組み直したくて……少しお時間をください。」',
      ]);

      era.printButton('「お疲れさま。こっちでも何か考えてみるよ。」', 1);
      await era.input();

      await era.printAndWait([
        '礼を言い続ける記者をいったん送り出したあと、',
        you.get_colored_name(),
        ' はまた、少し先で話しているライスと ',
        urara.get_colored_name(),
        ' に目を戻した。',
      ]);
      await rice.say_and_wait([
        '本当にすみません。さっきのライスは少し興奮しすぎて……こんなに思い出があるのに……',
      ]);
      await rice.say_and_wait([
        r_call_u,
        ' と一緒に取材を受けられるなんて、ライスはとても嬉しいんです……話せばよかっただけなのに……',
      ]);
      await urara.say_and_wait([
        'ウララもだよ！',
        call_30,
        ' と一緒に特別記事に載るなんて、夢みたいだもん！',
      ]);
      await urara.say_and_wait([
        'だから大丈夫。',
        call_30,
        ' は自分のままでいいよ。ウララ、',
        call_30,
        ' のそばにいるから！',
      ]);
      await rice.say_and_wait('で、でも……！');
      await era.printAndWait(
        '一目でわかる。片方は考えすぎて不安が先走り、もう片方はいつものようにテンションが高すぎる。',
      );

      era.print([
        '次のコーナーで',
        urara.couple_title,
        'の気持ちを和らげるには、何かいい手はないか……',
      ]);
      era.printButton(
        `${urara.couple_title}にお菓子を持っていく。（パワー+20）`,
        1,
      );
      era.printButton(
        `${urara.couple_title}を遊びに連れていく。（スタミナ+20）`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          'え？お菓子、食べていいの？ありがとう ',
          callname,
          '——',
          call_30,
          '！はい、あーん！',
        ]);
        await rice.say_and_wait([
          'えっ？',
          rice.get_colored_name(),
          ' も食べていいんですか……うっ！',
          r_call_u,
          '、熱すぎます！',
          rice.get_colored_name(),
          ' は自分で食べられます……！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が後押しすると、',
          urara.get_colored_name(),
          ' と ',
          rice.get_colored_name(),
          ' はにぎやかにお菓子を分け合い始めた。そばのスタッフもすぐカメラを据えた。',
        ]);
        await rice.say_and_wait(
          '……ええ。お菓子には特別な魔法を入れるから、食べると幸せになるんです……',
        );
        await urara.say_and_wait(
          'そうだよ！この前いっしょにクッキー作ったでしょ？みんなの魔法のレシピを入れたら、本当にもっとおいしくなった！',
        );
        await era.printAndWait(
          '記者A「その思い出、とても面白いですね。私も興味があります。もう少し詳しく教えていただけますか。」',
        );
        await urara.say_and_wait([
          '記者のお姉さんも興味あるの？じゃあちょっと待って……',
          call_30,
          '！ウララ、家政教室借りてきていい？',
        ]);
        await rice.say_and_wait([
          'え？今ですか？では ',
          rice.get_colored_name(),
          '、前回残った材料を探してきます！',
        ]);
        await era.printAndWait([
          '組み直した再取材で、特別番組はようやく二人の小さな',
          urara.uma_sex_title,
          'が生き生きと答える様子を撮り切った。',
        ]);
        await era.printAndWait(
          '後半がいきなりお菓子作り番組になった理由はわからないが、みんなが楽しければそれでいいだろう。',
        );
      } else {
        await urara.say_and_wait([
          'え？遊びに行っていいの？取材は大丈夫……あ！ウララ、わかった……',
          call_30,
          '！',
        ]);
        await rice.say_and_wait([
          'え、えっ！？今、何を……わあ！待、待ってください！',
          r_call_u,
          '、そんなのだめです～！',
        ]);
        await era.printAndWait([
          'だが、どこか噛み合っていない。ただの小さな',
          urara.child_sex_title,
          'の遊びなのに、なぜこんなに聞こえが悪い……',
        ]);
        await era.printAndWait(
          '記者A「でもこの画面はとてもいいです。少々お待ちを、すぐ撮ります！」',
        );
        await era.printAndWait(
          '追いかけっこする二人にすぐ気づき、そばの記者はカメラを構えて連写を始めた——',
        );
        await rice.say_and_wait([
          'うっ～',
          r_call_u,
          '！これ以上したら ',
          rice.get_colored_name(),
          ' も怒りますよ——よし！',
          rice.get_colored_name(),
          '、',
          r_call_u,
          ' に追いつきました！',
        ]);
        await urara.say_and_wait([
          '待って待って！',
          call_30,
          '、そんなのやめよ！ウララ、悪いってば！？',
        ]);
        await era.printAndWait('……やっぱり何か勘違いされている！');
        await era.printAndWait(
          '数日後、特別記事に二人が遊んでいる写真が載った。神ショットと呼ばれ、一時は話題にもなったらしい。',
        );
        await era.printAndWait([
          'なぜか場を壊すような',
          urara.sex_code === 1 ? 'ショタ' : 'ロリ',
          '好き成分が混ざってはいるが、結果としてはちゃんと着地した……はずだ。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_challenge: (() => {
    const title = '「レジェンド」への挑戦';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} spe スペシャルウィーク
     * @param {CharaTalk} grass グラスワンダー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_1 ハルウララのスペシャルウィークへの呼び方
     * @param {PrintedSpan} call_11 ハルウララのグラスワンダーへの呼び方
     * @param {PrintedSpan} callname_11 グラスワンダーのプレイヤーへの呼び方
     * @param {PrintedSpan} g_call_s グラスワンダーのスペシャルウィークへの呼び方
     * @param {PrintedSpan} g_call_u グラスワンダーのハルウララへの呼び方
     */
    const f = async (
      urara,
      spe,
      grass,
      you,
      callname,
      call_1,
      call_11,
      callname_11,
      g_call_s,
      g_call_u,
    ) => {
      await era.printAndWait([
        'ある午後、',
        you.get_colored_name(),
        ' がトレーナー室へ向かう途中、廊下で誰かと話している ',
        urara.get_colored_name(),
        ' を見かけた。',
      ]);
      await urara.say_and_wait([
        call_11,
        '！この機会にいっしょに ',
        call_1,
        ' を倒そうよ！',
      ]);
      await grass.say_and_wait(
        'お気持ちはわかります……でも、その……戦の格が違いすぎると申しますか……',
      );
      era.printButton(`「どうしたの？スペとレースするの？」`, 1);
      await era.input();

      await urara.say_and_wait(
        'そうなの！商店街で今度、すごい大会があるんだよ！名前は——',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        ' が手のポスターを広げた。素朴な組版で、',
        spe.get_colored_name(),
        ' が特大ラーメンに挑んだ「偉業」が載っている。',
      ]);
      await era.printAndWait([
        '大げさなポスターを見て、微笑みのなかに迷いもある ',
        grass.get_colored_name(),
        ' と目が合うと、',
        you.get_colored_name(),
        ' はだいたい次の展開を察した。',
      ]);
      await urara.say_and_wait(
        '『レジェンド☆スペシャルウィークに挑戦！超特大ラーメンを完食せよ！』どう？かっこいいでしょ！',
      );
      await urara.say_and_wait(
        'ラーメン屋さんにも聞いてきたよ。ちょうど出場者を二人募集してたんだ！',
      );
      await urara.say_and_wait([
        'だからさ、',
        call_11,
        '～いっしょに挑戦しようよ！ぜったい ',
        call_1,
        ' に勝てるよ～',
      ]);
      await era.printAndWait([
        'だが ',
        urara.get_colored_name(),
        ' の甘え攻めにも、鉄壁の大和撫子はまったく動じない。',
      ]);
      await grass.say_and_wait([
        'でも、',
        g_call_u,
        '……召し上がれますか？お昼はいつもわたくしより少なかったはずです……',
      ]);
      if (era.get('cflag:11:招募状态') === recruit_flags.yes) {
        await you.say_and_wait(
          [
            'でも、',
            grass.get_colored_name(),
            ' の食欲はかなり大きいほうだよね？一度に取る量は少なくても、こっそり何往復もしてるみたいだし……',
          ],
          true,
        );
        await you.say_and_wait(
          [
            'それに ',
            grass.get_colored_name(),
            '、本当は食べに行きたいんでしょ？',
            grass.teen_sex_title,
            'の矜持と体重管理で動けないだけで、こっそり唾を飲み込んでるよ？',
          ],
          true,
        );
        await era.printAndWait([
          'ただ……そんな言葉は心の中だけだ。',
          grass.get_colored_name(),
          ' のまだ優しい笑顔を見て、',
          you.get_colored_name(),
          ' は命に関わりそうな情報を飲み込んだ。',
        ]);
      }
      await urara.say_and_wait(
        '大丈夫だよ！試合の前、前の何食かを空けておけば問題ない！大食い大会のコツだよ！',
      );
      await grass.say_and_wait([
        'む……本当に大丈夫でしょうか？それだけで ',
        g_call_s,
        ' に勝てるとは思えませんが……？',
      ]);
      await urara.say_and_wait([
        'そうだね、',
        call_1,
        ' はレジェンドだもんね。でも……今この機会を捨てるの、もったいなくない？',
      ]);
      await grass.say_and_wait([g_call_u, '……']);
      era.print([
        'さっきから ',
        grass.get_colored_name(),
        ' の目配せを受け続けていた ',
        you.get_colored_name(),
        ' は、ようやく話に割り込める隙をつかんだ。',
      ]);

      era.printButton(
        `「やっぱりレースで${urara.sex}に勝とう。」（体力+100 スキルPt+5）`,
        1,
      );
      era.printButton(
        '「それじゃあ……挑戦してみる？」（体力+300 スキルPt+10 体重増加）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await grass.say_and_wait([
          callname_11,
          ' のおっしゃるとおりです。胃の大きさで競うより、レースのほうがきっと面白いでしょう。',
        ]);
        await urara.say_and_wait(
          'そこまで言うなら……うん！ウララ、わかった！これから先のレースで、もっとすごいレジェンドになるよ！',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' と ',
          grass.get_colored_name(),
          ' の助けで、今日の ',
          urara.get_colored_name(),
          ' は体重増加の危機をうまく避けた。',
        ]);
        await era.printAndWait(
          'ただ、「レースでレジェンドになる」か。それは悪くない響きだ……',
        );
      } else {
        await era.printAndWait([
          '勝てる見込みは薄いが、',
          urara.get_colored_name(),
          ' が何か学べるなら、それも悪くないかもしれない。だから……',
        ]);
        await urara.say_and_wait([
          'うん！',
          callname,
          ' がそう言うなら、ウララ、ぜったい行く——',
        ]);
        await grass.say_and_wait(
          'ふふ、その強いお気持ちは立派です。ではお二人とも、どうぞ頑張ってくださいね？',
        );

        era.printButton(
          '「ん？待って、どこかおかしくない？『お二人』って何？」',
          1,
        );
        await era.input();

        await grass.say_and_wait(
          'さきほど『わたしたちで挑戦してみよう』とおっしゃいましたもの。わたくしはお二人を精一杯応援いたします。',
        );
        await era.printAndWait([
          'さすが強い',
          urara.uma_sex_title,
          'だ。顔色一つ変えずに包囲網を抜けた……いや違う！',
          urara.sex,
          'は別の誰かを身代わりに入れた！',
        ]);
        await urara.say_and_wait([
          'え？',
          callname,
          ' が',
          urara.uma_sex_title,
          '級の大会に出るの？すごい！じゃあいっしょに頑張ろう、',
          callname,
          '！',
        ]);
        await era.printAndWait([
          '目を輝かせる小さな',
          urara.uma_sex_title,
          'と、「優しい目」でこちらを見つめる ',
          grass.get_colored_name(),
          '……',
        ]);
        await era.printAndWait([
          '冷や汗の ',
          you.get_colored_name(),
          ' は、言い逃れしようとした手を下ろし、表情だけでも「潰されそう」に見えないよう努めた。',
        ]);
        await era.printAndWait([
          'そして数日後……どう言えばいいか。レジェンドが本気を出すと本当に凄まじく、',
          you.get_colored_name(),
          ' は当分ラーメンを見たくないと思った……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_farthest: (() => {
    const title = '遠回りしようか？';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '外出の帰り道。遊びすぎたせいか、',
        urara.get_colored_name(),
        ' は少し疲れて見えたので、近くで休むことにした。',
      ]);
      await era.printAndWait([
        '近くの公園のベンチに座り、これから遊ぶ予定を少し立ててから、',
        you.get_colored_name(),
        ' は近くの自販機で缶飲料を二本買ってきた。',
      ]);
      await era.printAndWait([
        'だが温かい飲み物を持って公園へ戻ると、さっきまでまだ元気だった ',
        urara.get_colored_name(),
        ' は、もうベンチに寄りかかって眠っていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が差し出した腕を抱え、ベンチで丸くなる小さな',
        urara.uma_sex_title,
        'は、夢のなかで小さくつぶやきながら、だんだん ',
        you.get_colored_name(),
        ' の懐を占領していく。',
      ]);
      await urara.say_and_wait([
        'えへへ～',
        callname,
        '……いっしょに食べよ……これ、ウララの大好きなお菓子だよ……',
      ]);

      era.print([
        urara.get_colored_name(),
        ' はいい夢を見ているのだろうか。',
        you.get_colored_name(),
        ' は、すぐ起こすべきか少し迷った……',
      ]);
      era.printButton(
        '「じゃあ……ウララの分も食べちゃうよ？」（スキルPt+30）',
        1,
      );
      era.printButton(
        `ウララを起こさず、眠っている${urara.sex}を背負って帰る。（スタミナ+10）`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          ' の耳元にそっと寄り、',
          you.get_colored_name(),
          ' は小さな',
          urara.uma_sex_title,
          'の耳辺の産毛を撫でながら、小声で',
          urara.sex,
          'の夢を揺すった。',
        ]);
        await urara.say_and_wait([
          'え？だめ！独り占めはだめだよ ',
          callname,
          '！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' にお菓子を取られた夢で飛び起きた ',
          urara.get_colored_name(),
          ' は尻尾まで逆立ち、ベンチから飛び降りるほどだった。',
        ]);
        await era.printAndWait([
          'だが小さな',
          urara.uma_sex_title,
          'がぼんやりから覚めると、とまどう桜色の瞳のなかには、同じく驚いたトレーナーしかいない。',
        ]);
        await urara.say_and_wait('あれ？お、お菓子……あ、もしかして……？');

        era.printButton(
          '「そうだよ。ウララは夢のなかでも気合が入ってるね。」',
          1,
        );
        await era.input();

        await urara.say_and_wait([
          'そっか。',
          callname,
          ' はウララのお菓子、取らないもんね……でもいい夢だったから、大丈夫だよ！',
        ]);
        await urara.say_and_wait([
          'ねえ、',
          callname,
          '。次またいっしょにいられるとき、ウララとお菓子食べてくれる？',
        ]);

        era.printButton('「もちろん。」', 1);
        await era.input();

        await era.printAndWait([
          'まだ温かい飲み物を ',
          urara.get_colored_name(),
          ' に渡し、',
          you.get_colored_name(),
          ' は「約束だよ！」と言う ',
          urara.get_colored_name(),
          ' と、また一つ約束を交わした。',
        ]);
        await era.printAndWait([
          '飲み終わった缶をちゃんとゴミ箱へ入れてから、',
          you.get_colored_name(),
          ' と ',
          urara.get_colored_name(),
          ' は夕焼けを浴びて、また帰り道を歩き出した。',
        ]);
      } else {
        await era.printAndWait([
          urara.get_colored_name(),
          ' をゆっくり懐から背中へ移し、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' を起こさないよう、慎重に立ち上がった。',
        ]);
        await urara.say_and_wait([
          'んっ……？',
          callname,
          '……ウララ、さっきどうしたの？',
        ]);

        era.printButton('「起きた？早く帰って休もう。大丈夫？」', 1);
        await era.input();

        await era.printAndWait([
          urara.get_colored_name(),
          ' は歩く揺れで不意に目を覚ましたらしい。だが今の ',
          you.get_colored_name(),
          ' は、ここで',
          urara.sex,
          'を下ろすつもりはない。',
        ]);
        await urara.say_and_wait('え……？ウララ、寝てたんだ……ふぅ……');
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'を背負ったまま少し歩くと、',
          urara.sex,
          'はすぐまたさっきのいい夢へ戻った。',
        ]);
        await urara.say_and_wait([
          'えへへ……おいしいでしょ……まだたくさんあるよ……',
          callname,
          ' は大人だよ……もう恥ずかしがらないで……',
        ]);
        await era.printAndWait(
          '気にならないわけがない。いったいどんな内容の夢なんだ……',
        );
        await era.printAndWait([
          urara.sex,
          'を起こさないよう、',
          you.get_colored_name(),
          ' はゆっくり寮まで歩いた。寮に着いて当番の生徒へ',
          urara.sex,
          'を渡すまで、',
          urara.get_colored_name(),
          ' は目を覚まさなかった。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_park: (() => {
    const title = '屋上の「遊園地」';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        '、ウララとちょっと行ってほしいところがあるの。大丈夫、すぐ終わるよ！',
      ]);
      await era.printAndWait([
        '商店街での特訓の帰り道、そばの ',
        urara.get_colored_name(),
        ' は少し先の建物を見て、',
        you.get_colored_name(),
        ' の袖をつかんだ。',
      ]);
      await era.printAndWait([
        'それから ',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' について、近くに新しくできた複合モールへ行き、外側の展望エレベーターで屋上まで上がった。',
      ]);
      await era.printAndWait(
        '鉄の扉が澄んだベル音とともにゆっくり開き、ガラス屋根の屋上に、小さな遊園地が二人の前に現れた。',
      );
      await era.printAndWait(
        '平日だからか、この小さな遊園地は今は誰もいない。電子券売機と施設のイルミネーションだけが寂しげに点いている。',
      );
      await era.printAndWait([
        'だが、',
        urara.get_colored_name(),
        ' がいきなり遊園地で遊びたくなった、ということは……ないだろう。',
      ]);

      era.printButton('「何か思い出した？」', 1);
      await era.input();

      await era.printAndWait([
        '園内へいっしょに入ると、',
        urara.get_colored_name(),
        ' は中央のミニ回転カップを見つめて、小さく口を開いた。',
      ]);
      await urara.say_and_wait(
        '週末になると、商店街の子どもたちはみんなここに遊びに来るよ。近いし、大きい遊園地よりチケットも安いから。',
      );
      await urara.say_and_wait(
        'それに、商店街を復興したいおじさんやおばさんたちは嫌かもしれないけど、ここ、何をするにも便利なんだ。',
      );
      await urara.say_and_wait([
        'だからウララ、思ったの。商店街のみんなが必要なのは、みんなの言う復興じゃなくて、変わるきっかけなんだって……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' とかわいいカップたちは静かに',
        urara.teen_sex_title,
        'の考えを聞いた。交互に輝くイルミネーションが、',
        urara.teen_sex_title,
        'の桜色の瞳をさらに染めていく。',
      ]);
      await urara.say_and_wait(
        '環境は変えられるよ。問題はいっぱいあるかもしれないけど、頑張ってやれば、きっと大丈夫。',
      );
      await era.printAndWait([
        'そのとおりだ。たぶん、どれもぶつかり合わない。人がいて、',
        urara.get_colored_name(),
        ' が ',
        urara.get_colored_name(),
        ' であるかぎり、すべては元のままなのだ。',
      ]);
      await era.printAndWait([
        '意外でもある。幼く見えても、',
        urara.get_colored_name(),
        ' の考えはどんどん深くなっていて、',
        urara.sex,
        'の多くの同級生より先まで届いている……',
      ]);

      urara.say([
        'そうだ ',
        callname,
        '。来たんだし、ウララといっしょに乗る？',
      ]);
      era.printButton('「ウララが疲れなければ大丈夫だよ。」（スピード+10）', 1);
      era.printButton('「僕はいいよ。ウララだけで乗って。」（パワー+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          'うん！だから今日はちょっと遅れて帰ってもいいよね、',
          callname,
          '？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の返事を聞いて、小さな',
          urara.uma_sex_title,
          'は ',
          you.get_colored_name(),
          ' に会心の笑顔を見せ、それから ',
          you.get_colored_name(),
          ' といっしょに、小さくて精巧な遊具へ足を踏み入れた。',
        ]);
        await era.printAndWait([
          'カップは音楽に合わせてやさしく回り、夕日がガラス屋根を通して、遠くを見る小さな',
          urara.uma_sex_title,
          'の顔を照らした。',
        ]);
        await era.printAndWait([
          'この小さな思想家は今、何を考えているのだろう。あるいは、顔の微笑みと同じくらい、少し嬉しいだけなのか。',
        ]);
      } else {
        await urara.say_and_wait([
          'どうして？',
          callname,
          ' はもう大人だから？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の仕方ない返事を聞いて、',
          urara.teen_sex_title,
          'は少し寂しそうでも、笑ってそばの大人に冗談を飛ばした。',
        ]);

        era.printButton('「もう大人だからね。」', 1);
        await era.input();

        await urara.say_and_wait([
          'じゃあ、いっしょに帰ろう、',
          callname,
          '？ウララも早く大人にならなきゃ！',
        ]);
        await era.printAndWait([
          'それでよかったのか。笑顔の ',
          urara.get_colored_name(),
          ' の目を見て、',
          you.get_colored_name(),
          ' はその問いを口に出せなかった。',
        ]);
        await era.printAndWait([
          '夕日を背にエレベーターへ乗り、',
          you.get_colored_name(),
          ' と ',
          urara.get_colored_name(),
          ' はまた帰り道を歩き出した。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_forget: (() => {
    const title = '食べるの忘れた？';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '一日の外出特訓を終え、',
        you.get_colored_name(),
        ' が ',
        urara.get_colored_name(),
        ' を学園の門まで送ったとき──',
      ]);
      await urara.say_and_wait([
        'あ！',
        callname,
        '！大事なこと、忘れちゃったかも！',
      ]);

      era.printButton(
        '「どうした？！急に大声出して。大事なものを特訓の場所に忘れた？」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '違うよ！帰るときに買うの忘れたの！新しい味のたい焼きと、はちみつ特飲！',
      );
      await urara.say_and_wait([
        callname,
        ' も教えてくれなかったみたいだけど、今ならまだ閉まってないはず。片方だけなら……',
      ]);

      era.printButton('「え？あー……うん、ああ……」', 1);
      await era.input();

      await era.printAndWait([
        'もう慣れているはずなのに、',
        urara.get_colored_name(),
        ' の大げさな困りごとを聞くと、',
        you.get_colored_name(),
        ' はつい力の抜けた返事をしてしまった。',
      ]);
      await urara.say_and_wait([
        callname,
        '！その反応なに！ウララだって怒るよ！',
      ]);

      urara.say([
        'でも、今ならまだ間に合うよ！',
        callname,
        '、',
        you.get_colored_name(),
        ' の提案は……',
      ]);
      era.printButton(
        '「はちみつ特飲のほうが近い。今走れば間に合う！」（根性+10）',
        1,
      );
      era.printButton(
        '「たい焼きは少し遠いけど、店じまいはしないはず！」（スタミナ+10）',
        2,
      );
      const ret = await era.input();
      await urara.say_and_wait([
        'よし！',
        callname,
        ' がそう言うなら、ウララ、行ってすぐ戻るね！ちょっと待ってて——！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' を校門に残し、小さな',
        urara.uma_sex_title,
        'は見たこともない速さで商店街のほうへ駆け出した。',
      ]);

      era.printButton('「ゆっくり！道、気をつけて！」', 1);
      await era.input();

      await era.printAndWait([
        '自分の声より先に視界の端へ消える小さな後ろ姿を遠目に見て、',
        you.get_colored_name(),
        ' は仕方なく首を振った。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' がお菓子への集中を、いつものトレーニングと模擬レースにも少し分けてくれればいいのに。',
      ]);
      if (ret === 1) {
        await era.printAndWait([
          'だがしばらくして、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' が笑顔で押しつけてきたはちみつ特飲を見て、やっぱり丁寧に味わうことにした……',
        ]);
      } else {
        await era.printAndWait([
          'だがしばらくして、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' が笑顔で押しつけてきたたい焼きを見て、やっぱり丁寧に味わうことにした……',
        ]);
      }
      await era.printAndWait([
        '……ただ ',
        you.get_colored_name(),
        ' の舌にとっては、一度や二度ではないのに、相変わらず甘すぎる。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = '去りゆく春';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} has_begun ウララはすでにデビューしているか
     * @param {boolean} join_arim_kin_c ウララはクラシック年の有馬記念に出走したか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      has_begun,
      join_arim_kin_c,
    ) => {
      await era.printAndWait(
        'あまりに唐突に終わった旅が何を意味するか、今さら問い詰めても意味はないのかもしれない。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' も ',
        urara.get_colored_name(),
        ' もわかっている。二人が分かれる結末は、本来ここにあるべきではなかった。',
      ]);
      await era.printAndWait([
        'スーツケースの取っ手を握りしめ、',
        urara.get_colored_name(),
        ' は、',
        urara.sex,
        'のそばから出るはずのない小さなため息をついた。',
      ]);
      await era.printAndWait([
        '誰も ',
        urara.get_colored_name(),
        ' を責めてはいない。トレーナーもお疲れさま、とさえ言われる。だが ',
        you.get_colored_name(),
        ' も ',
        urara.get_colored_name(),
        ' も、物語はこうであるべきではなかったと知っている。',
      ]);
      await era.printAndWait([
        '転学の手続きはもう済んでいる。それでもこれは、みんなに隠した無断の別れだ。見送りに来たのも ',
        you.get_colored_name(),
        ' 一人だけ。',
      ]);
      await era.printAndWait([
        'それでもそばの小さな',
        urara.uma_sex_title,
        'は、気の滅入った ',
        you.get_colored_name(),
        ' を逆に慰めてくれる。',
      ]);
      if (has_begun) {
        await urara.say_and_wait([
          '大丈夫だよ。もう走れなくても、ウララはなんとかするから！それより ',
          callname,
          ' は大丈夫？',
        ]);
        await era.printAndWait([
          '人を慰める言葉なのに、',
          urara.get_colored_name(),
          ' の顔からも落ち込みは隠せない。',
        ]);
        await era.printAndWait([
          'あのレースで転んでから、体は問題ないのに、',
          urara.get_colored_name(),
          ' は早すぎる形で',
          urara.uma_sex_title,
          'としての力を失った。',
        ]);
        await era.printAndWait([
          'それを受け入れられない人たちは、最後に',
          urara.sex,
          'を守れなかった ',
          you.get_colored_name(),
          ' へ矛先を向けた。',
        ]);
        await era.printAndWait([
          'だが個人への感情は、時間が進めば散っていく。だから ',
          urara.get_colored_name(),
          ' の心配に、',
          you.get_colored_name(),
          ' は黙って首を振るだけだった。',
        ]);
        await urara.say_and_wait([
          '……',
          callname,
          ' が本当にそう思うなら、',
          urara.get_colored_name(),
          ' もそんなに心配しなくていいね。みんなも。もともと有馬には出られなかったし……',
        ]);
        if (join_arim_kin_c) {
          await urara.say_and_wait('でも、もう一回行けたら、よかったな……');
        } else {
          await urara.say_and_wait(
            'でも、一回でいいから、行けたらよかったな……',
          );
        }
      } else {
        await urara.say_and_wait([
          '大丈夫だよ ',
          callname,
          '。心配しないで。地元に戻るだけだよ。ウララ、これからも走るから！',
        ]);
        await era.printAndWait([
          'だが ',
          you.get_colored_name(),
          ' は知っている。人を慰める言葉がどれだけ明るくても、顔の落ち込みは隠せない。',
          urara.get_colored_name(),
          ' も同じだ。',
        ]);
        await era.printAndWait([
          'それでも寂しさを隠すため、そして ',
          you.get_colored_name(),
          ' を深く悲しませないため、小さな',
          urara.uma_sex_title,
          'は無理をして、途切れ途切れに話し続けた。',
        ]);
        await urara.say_and_wait([
          'たくさんの人が、',
          callname,
          ' はウララを騙しただけだって言う。でもウララは知ってる。',
          callname,
          ' は悪くない。ウララが遅すぎただけだよ。',
        ]);
        await urara.say_and_wait(
          'ただ、このまま帰ったら、お母さん、何て言うかな。お母さん、ウララに怒ったことないけど……',
        );
        await urara.say_and_wait(
          '離れる前に、ウララも一回、一番が取れたらよかったな……',
        );
      }
      era.println();
      await era.printAndWait([
        '遠くでホームに入ってくる電車を見て、',
        urara.get_colored_name(),
        ' は涙をこらえ、強がって ',
        you.get_colored_name(),
        ' の裾をつかんでいた小さな手を離した。',
      ]);
      await era.printAndWait([
        'そのあと、小さな',
        urara.uma_sex_title,
        'が最後までこらえていた涙は、それでも抑えきれず先にこぼれた。',
      ]);
      era.println();
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          '涙の塩気を帯びた軽いキスが ',
          you.get_colored_name(),
          ' の唇に落ちた。つま先立ちの ',
          urara.get_colored_name(),
          ' は、もう涙でぐしゃぐしゃだ。',
        ]);
        await urara.say_and_wait([
          'ごめんね、',
          callname,
          '。また会えるはずなのに……でも、ウララ、やっぱりこうしたかった……',
        ]);
        await urara.say_and_wait(
          'つらいよ……なのにウララ、ちゃんとさよならを言わなきゃなのに……',
        );
      } else {
        await urara.say_and_wait([
          '……ウララ、やっぱり ',
          callname,
          ' と……もっと先を、見たかった……',
        ]);
        await urara.say_and_wait([
          'でも、だめだよ……もう離れちゃうのに、こんなこと言っちゃだめだよね。ごめんね、',
          callname,
          '……',
        ]);
        await urara.say_and_wait([
          'だから、送ってくれてありがとう。さよならだよ、',
          callname,
          '……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '名残を断ち切るように別れを切り上げ、',
        urara.get_colored_name(),
        ' は泣き声を押さえ、振り返らず、待ってはくれない列車へ走った。',
      ]);
      await era.printAndWait([
        '集まっていた人波は列車の発車とともに散る。見知らぬ流れは感情の荷物を捨て、',
        you.get_colored_name(),
        ' だけが空のホームに取り残された。',
      ]);
      await era.printAndWait([
        '喧騒が尽きると、あたりは静かで、世界そのものがこの列車とともに ',
        you.get_colored_name(),
        ' から離れていったようだった。',
      ]);
      await era.printAndWait([
        '口では「さよなら」だった。根拠はないが、今の小さな',
        urara.uma_sex_title,
        'の去り方は、「もう二度と会えない」に等しいだろう。',
      ]);
      await era.printAndWait([
        '戻ったら、商店街のみんなにどう顔を合わせる。',
        urara.get_colored_name(),
        ' の友だちたちに、どう向き合う。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は最初、あんなに ',
        you.get_colored_name(),
        ' を信じていた。助けてくれる「頼れる大人」へ、小さな',
        urara.teen_sex_title,
        'の想いさえ抱いていた。',
      ]);
      await era.printAndWait([
        'なのに今、笑顔を失った',
        urara.sex,
        'の後ろ姿が車内に消えるのを見て、',
        you.get_colored_name(),
        ' は引き止める一言さえ出せなかった。',
      ]);
      await era.printAndWait([
        '今の ',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' をがっかりさせたのかもしれない。今の ',
        urara.get_colored_name(),
        ' はもう ',
        you.get_colored_name(),
        ' を好きではないのかもしれない。あるいは',
        urara.sex,
        'は……',
      ]);
      await era.printAndWait([
        'だが「かもしれない」が山ほどあっても、小さな',
        urara.uma_sex_title,
        'を留める欠片にはならない。',
        urara.sex,
        'が去った事実を覆すことなど、なおさらできない。',
      ]);
      await era.printAndWait([
        '遠ざかる列車を見まいとして、原点へ逃げ戻ったような ',
        you.get_colored_name(),
        ' は、やっと目を閉じた……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait([
        'でも申し訳ありませんわ、嫌味な',
        you.adult_sex_title,
        '（あなた）。わたくしは、物語をこのまま終わらせません。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        'あなたに怒るつもりはありません。ですが、ウララの今の結末は受け入れられませんわ。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'また会える機会があるなら、十二分に気合いを入れてくださいませ。',
      );
    };
    f.title = title;
    return f;
  })(),
};
