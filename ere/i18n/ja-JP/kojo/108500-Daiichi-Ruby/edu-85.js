/**
 * @file ダイイチルビー - 育成
 * @author 梦露
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  before_begin_race: (() => {
    const title = 'メイクデビュー前';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      const ret = [];
      await ruby.say_and_wait('控え室へ参りましょう。');
      era.drawLine();
      await you.say_as_passer_by_and_wait('議員A', [
        ruby.get_colored_name(),
        ' の華麗な初レースに、拍手を！！',
      ]);
      await era.printAndWait('（ぱちぱちぱち……！）');
      era.printButton('（……え、誰だこれは？）', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は頭の中をしばらく検索した。突然現れた中年男の顔は、近頃急に勢いづいた政治家と重なった。',
      ]);
      await you.say_as_passer_by_and_wait(
        '議員A',
        'やあ、光栄です。あの『華麗一族』のデビューを見届けられるとは。',
      );
      await ruby.say_and_wait('ご祝辞、ありがとうございますわ。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は議員風の男を余裕で応対している。だが大事なメイクデビュー前だ。',
        you.get_colored_name(),
        ' は、すぐに帰ってほしいと思っていた……',
      ]);
      await you.say_as_passer_by_and_wait(
        '議員A',
        'お祝いの花も持ってまいりました。お気に召せば幸いです。',
      );
      await ruby.say_and_wait(
        'お心遣い、痛み入りますわ。どうぞ、お引き取りを。',
      );
      await you.say_as_passer_by_and_wait('議員A', 'え、待——');
      await ruby.say_and_wait(
        '申し訳ございません、時間ですわ。ご声援、胸に染みましたわ。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は手を振りながら、',
        you.get_colored_name(),
        ' をちらりと見た。',
      ]);
      await ruby.say_and_wait(
        '次回は事前にお知らせくださいまし。必ず、正門からおいでください。',
      );
      await ruby.say_and_wait(
        'わたくしのトレーナーと同じく、一族に評価される自負がおありでしたら。',
      );
      await you.say_as_passer_by_and_wait(
        '議員A',
        'なるほど。失礼いたしました。お邪魔しました。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は男を見送り、体を ',
        you.get_colored_name(),
        ' の方へ向けた。',
      ]);
      await you.say_as_passer_by_and_wait('記者A', [
        'ルビー',
        ruby.adult_sex_title,
        '、トレーナー',
        you.adult_sex_title,
        '、大変申し訳ございません。あの方の訪問はお断りするよう、スタッフへ伝えていたのですが。',
      ]);
      era.printButton('「断りきれなかったなら、仕方ない。」', 1);
      era.printButton('「噂どおり、圧のある方だな。」', 2);
      ret.push(await era.input());
      await you.say_and_wait('ルビーは、あの人を知っているのか？');
      await ruby.say_and_wait('ええ。');
      await ruby.say_and_wait(
        'わたくしを通して、一族との繋がりを誇示したいのでしょう。',
      );
      await you.say_and_wait(
        '近頃勢いづいただけに、後ろ盾が欲しいんだろう。',
        true,
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は傍らの見舞い品へ目をやった。先の議員以外にも、各方面から花束が届いている。',
      ]);
      await ruby.say_and_wait('入口のスタンド花。');
      await ruby.say_and_wait(
        'あの企業は今、融資が厳しい様子ですわ。一族の助けを求めているのでしょう。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は、また別の方を見た。',
      ]);
      await ruby.say_and_wait(
        '百合を中心にした花は、今、政治の中枢にいる人物からのものですわ。',
      );
      await ruby.say_and_wait(
        '手紙付きの分は意図が露骨ですわ。わたくしを目当てに、子の将来の勢力の礎になりたい、と。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の声色に感動は微塵もない。自分と無関係な話をするように、',
        you.get_colored_name(),
        ' へ各花束の由来を告げた。',
      ]);
      era.printButton('「少し持ち帰って、トレーナー室を飾ってもいいか？」', 1);
      era.printButton('「少し、風情が分かっていないかな。」', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait(
          'ご随意に。持てない分は、執事に申しつけてくださいまし。',
        );
      } else {
        await ruby.say_and_wait(
          'あなたの祝いの品は、確かに受け取っていますわ。',
        );
        await ruby.say_and_wait(
          'あなたが育てたこの体の初舞台を、どうか心ゆくまでご覧くださいまし。',
        );
      }
      await era.printAndWait('時間ですわ。コースへ参ります。');
      await you.say_and_wait('やはり、この花がいちばん美しいな。', true);
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        ruby.get_colored_name(),
        ' は地下通路にいても、会場の熱を感じ取れた。',
      ]);
      await era.printAndWait(
        '観客の声の多くは、「華麗一族」の登場を期待していた。',
      );
      await era.printAndWait([
        '圧力は大きい。だが ',
        ruby.get_colored_name(),
        ' の坦々とした様子に、',
        you.get_colored_name(),
        ' はかえって、わずかな不安を覚えた。',
      ]);
      era.printButton(
        `「${
          ruby.sex_code === 1 ? 'お坊ちゃま' : 'お嬢さま'
        }だけあって、こういう場には慣れているんだな。」`,
        1,
      );
      era.printButton('「大丈夫か？」', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 2) {
        await ruby.say_and_wait(
          '準備は十分ですわ。不安の種など、ひとつもありませんわ。',
        );
        era.printButton('「ああ、ひとつもないな。」', 1);
        era.printButton('「では、聞かせてくれないか？」', 2);
        ret.push(await era.input());
        if (ret.at(-1) === 2) {
          await ruby.say_and_wait('……');
          await ruby.say_and_wait('あなたという方は。');
          await ruby.say_and_wait(
            '期待される状況はありがたいですわ。ですが、重荷でもありますわ。',
          );
          await ruby.say_and_wait(
            'それでも、それらに乱されることは、絶対にありませんわ。',
          );
          await era.printAndWait([
            'そう断言する ',
            ruby.get_colored_name(),
            ' の目に、',
            you.get_colored_name(),
            ' はたしかに、揺れを見なかった。',
          ]);
        }
      }
      await ruby.say_and_wait('では、行ってまいりますわ。');
      era.printButton('「いってらっしゃい。」', 1);
      await era.input();
      await era.printAndWait([
        'すべてを一身に背負う',
        ruby.sex,
        'へ、今の ',
        you.get_colored_name(),
        ' が言えるのは、その言葉だけだった。',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '機を待つ';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} hoch_rev 報知杯クイーンC（色付き名前）
     * @param {CharaTalk} oka_sho 桜花賞（色付き名前）
     * @param {CharaTalk} takz_kin 宝塚記念（色付き名前）
     * @param {CharaTalk} arim_kin 有馬記念（色付き名前）
     */
    const f = async (ruby, you, hoch_rev, oka_sho, takz_kin, arim_kin) => {
      const ret = [];
      await ruby.say_and_wait('ただいま戻りましたわ。');
      era.printButton('「お疲れ。」', 1);
      era.printButton('うわ、白いタイツがひどく汚れてる。', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await ruby.say_and_wait('ありがとう。');
      } else {
        await ruby.say_and_wait('じーっ', true);
      }
      era.println();
      await era.printAndWait(
        'とにかく、華麗一族の名に恥じない、見事なメイクデビューだった。',
      );
      await ruby.say_and_wait('このあと面会がありますわ。着替えたら参ります。');
      era.printButton('「分かった。」', 1);
      era.printButton('「手を貸そうか？」', 2);
      ret.push(await era.input());
      era.drawLine();
      await you.say_as_passer_by_and_wait('記者A', [
        '少し早いですが、三宝冠こそ ',
        ruby.actual_name_with_title,
        ' の本命路線だ、という声もあります。',
      ]);
      await you.say_as_passer_by_and_wait(
        '記者B',
        '今日のレースを見て、わたくしもそう感じました。',
      );
      await you.say_as_passer_by_and_wait(
        '記者B',
        'お母様と同じ、あるいはそれ以上の輝きを。',
      );
      await you.say_as_passer_by_and_wait('記者C', [
        'ええ、そのあとは ',
        takz_kin,
        ' や ',
        arim_kin,
        ' などのレースにも出てほしいですね。',
      ]);
      await era.printAndWait('興奮、期待……');
      await ruby.say_and_wait('皆様、ありがとうございますわ。');
      await ruby.say_and_wait(
        '必ず、皆様が期待なさる活躍をお見せいたしますわ。',
      );
      await era.printAndWait([
        'そのとき、',
        you.get_colored_name(),
        ' の頭に閃いた。メイクデビュー前——',
      ]);
      await ruby.used_to_say_and_wait(
        '期待される状況はありがたいですわ。ですが、重荷でもありますわ。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' にとっては、普通であり、当然のことだ。',
      ]);
      await era.printAndWait('だが……');
      era.printButton(`「私はルビーのトレーナーだ。」`, 1);
      await era.input();
      await era.printAndWait([
        ruby.get_colored_name(),
        ' がジュニア級でG1を取れる素質を思えば、三宝冠すら旅の中継地にすぎないだろう。',
      ]);
      await era.printAndWait([
        '記者たちの興を削ぐのは避け、',
        you.get_colored_name(),
        ' はその話は口にしないことにした。',
      ]);
      era.drawLine({ content: '記者会見のあと' });
      await ruby.say_and_wait('年内は、トレーニングに集中したいですわ。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' のトレーナーになってから ',
        you.get_colored_name(),
        ' が知ったとおりだ。',
      ]);
      await ruby.say_and_wait(
        '三宝冠戦線は、【華麗一族】が最も重んじることですわ。',
      );
      await era.printAndWait(
        'そこで頂点に立つには、トレーニングの蓄積が要る。',
      );
      await era.printAndWait(
        '量は質へ変わる。もちろん、レースに出て経験を積む選択肢もある。',
      );
      era.printButton(`「ルビー。」`, 1);
      await era.input();
      await ruby.say_and_wait('おっしゃることは、分かっていますわ。');
      await ruby.say_and_wait('もちろん、レースへの出走も考えますわ。');
      await ruby.say_and_wait(
        'ですが現状、体の本格化が済んだとは言えませんわ。',
      );
      await ruby.say_and_wait(
        'ですから方針は、トレーニングを中心にしていただきたいですわ。',
      );
      await era.printAndWait('議論の余地は、もうなさそうだった。');
      await era.printAndWait([
        you.get_colored_name(),
        ' も、',
        ruby.get_colored_name(),
        ' には体をしっかり鍛え続けてほしかった。本人が同じ考えなら、それに越したことはない——',
      ]);
      era.printButton('「分かった。」', 1);
      await era.input();
      await ruby.say_and_wait('ありがとうございますわ。');
      await era.printAndWait([
        'トレーニングの成果を確かめる場として、',
        you.get_colored_name(),
        ' と ',
        ruby.get_colored_name(),
        ' は ',
        hoch_rev,
        '——',
        oka_sho,
        ' の前哨を、年明け最初の重賞に選んだ。',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_35: (() => {
    const title = '華麗なる最高傑作';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} mother ダイイチルビーの母（劇情 NPC）
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, mother, you, callname) => {
      await era.printAndWait([
        'トレーニングを重ねたある日、【華麗一族】の書簡を拝読した ',
        you.get_colored_name(),
        ' は、',
        ruby.get_colored_name(),
        ' と共にダイイチ家の旧宅を訪ねるつもりでいた。',
      ]);
      await era.printAndWait([
        ruby.sex,
        'との信頼を築くには、まず',
        ruby.sex,
        'が重んじるものを知るべきだ。',
      ]);
      await era.printAndWait(['ところが、出発前に……']);
      await ruby.say_and_wait(
        '申し訳ございません、行程を臨時に変更いたしますわ。',
      );
      await era.printAndWait([
        '事情を告げられないまま、',
        you.get_colored_name(),
        ' が連れていかれたのは、某ホテルの一室だった。',
        you.get_colored_name(),
        ' は、部屋に用意されたスーツへ着替えた。',
      ]);
      await ruby.say_and_wait('もう少し華麗なネクタイをご用意いただけます？');
      await you.say_as_passer_by_and_wait('執事', [
        'かしこまりました、',
        ruby.sex_code === 1 ? '坊ちゃま' : 'お嬢さま',
        '。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を上から下まで眺め、目を閉じて顔を背けた。',
      ]);
      era.printButton(`「ルビー？」`, 1);
      await era.input();
      await ruby.say_and_wait('失礼いたしました。言い遅れましたわ。');
      await ruby.say_and_wait(
        'お母様が、わたくしのトレーナーが実家へ参ると聞き、わざわざお越しになりましたわ。',
      );
      await you.say_and_wait('はぁ？', true);
      era.drawLine();
      await era.printAndWait([
        ruby.uma_sex_title,
        '界で知らぬ者はなく、華麗な一戦をいくつも残した',
        '……',
      ]);
      await mother.say_and_wait([
        '初めてお目にかかります、',
        callname,
        '。わたくしはダイイチルビーの',
        ruby.sex_code === 1 ? '父' : '母',
        'です。',
      ]);
      await era.printAndWait([
        '眼前のこの',
        ruby.uma_sex_title,
        'は、恐ろしいほどの美しさも、',
        ruby.sex,
        'の容貌も気場も、姿はまるで——',
      ]);
      era.printButton('（大きくなったダイイチルビーだ）', 1);
      await era.input();
      await mother.say_and_wait([
        '空港で ',
        callname,
        ' がいらっしゃると聞きまして。突然で申し訳ありません。',
      ]);

      era.printButton('「そんなことは」', 1);
      await era.input();
      await mother.say_and_wait([
        'このところ、',
        ruby.sex_code === 1 ? '息子' : '娘',
        ' がたいそうお世話になっております。',
      ]);
      era.printButton(`「こちらこそ、${ruby.sex}には世話になっています。」`, 1);
      await era.input();
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? 'お父' : 'お母',
        '様、このあともご予定がございますわよね？ わたくしもご一緒に。',
      ]);
      await mother.say_and_wait('ええ～、ありましたかしら……');
      await you.say_and_wait('！', true);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' のお母様に見つめられた。華麗一族の極みとして、',
        you.get_colored_name(),
        ' という人間を見極めようとする目だった。',
      ]);
      await era.printAndWait('人心を貫くほどの迫力が籠もっている。');
      await era.printAndWait([
        'そのとき、',
        you.get_colored_name(),
        ' の頭に、試験の日のことが蘇った。',
      ]);
      await ruby.used_to_say_and_wait(
        'そうですわ。この姿を忘れないでくださいまし。狙う先があるのなら、それに見合う振る舞いをせねばなりませんわ。',
      );
      await ruby.say_and_wait(
        'そうして初めて、いつかなりたい姿になれるのですわ',
        true,
      );
      await era.printAndWait('そして、あの微笑み。');
      await era.printAndWait([
        ruby.sex,
        'のトレーナーである以上、',
        ruby.sex,
        'と並ぶときは、胸を張るのが当然だ。',
      ]);
      await mother.say_and_wait('————');
      await mother.say_and_wait('わたくしの走りを、ご存知ですわね。');
      era.printButton('頷く', 1);
      await era.input();
      await mother.say_and_wait('そう。');
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? 'お父' : 'お母',
        '様、まだ……',
      ]);
      await mother.say_and_wait('いいえ、もう終わりですわ。');
      await mother.say_and_wait([callname, '、この先はあなたにお任せします。']);
      await mother.say_and_wait([
        ruby.sex,
        'がどのような子か、忘れないでくださいまし。',
      ]);
      await ruby.say_and_wait('————!', true);
      await mother.say_and_wait(
        '大変申し訳ございません。駅へ参ります。次の予定がございますので。',
      );
      await mother.say_and_wait(
        'わたくしたちの家の歴史は、あの書物で……そしてルビーの口から、ゆっくり知ってくださいまし。',
      );
      await mother.say_and_wait([
        callname,
        '、うちの',
        ruby.sex_code === 1 ? '息子' : '娘',
        'を、どうかよろしくお願いいたしますわ。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の',
        ruby.sex_code === 1 ? '父' : '母',
        'を見送り、',
        you.get_colored_name(),
        ' は蔵書を多く見てから、トレセンへ戻った。',
      ]);
      era.printButton(
        `「${ruby.sex_code === 1 ? 'お父' : 'お母'}様は、すごい方だな。」`,
        1,
      );
      era.printButton(
        `「ルビーの${ruby.sex_code === 1 ? 'パパ' : 'ママ'}は、ルビーよりすごいな。」`,
        2,
      );
      const ret = await era.input();
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? 'お父' : 'お母',
        '様は華麗一族の『結晶』。今も一族の表の象徴ですわ。',
      ]);
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? 'お父' : 'お母',
        ruby.sex,
        '、あなたに……',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('いいえ、何でもありませんわ。');
      await ruby.say_and_wait([
        '先ほどお尋ねでしたわね。『あなたの目に、',
        ruby.sex_code === 1 ? 'お父' : 'お母',
        '様はどのような',
        ruby.uma_sex_title,
        'か』と。',
      ]);
      await ruby.say_and_wait('答えは、最も華麗、ですわ。');
      await ruby.say_and_wait(
        '現役時代のレース映像をご覧になれば、誰もがそう思うはずですわ。',
      );
      await era.printAndWait([ruby.get_colored_name(), ' は服を着替えた。']);
      era.printButton(
        `「${ruby.sex_code === 1 ? 'お父' : 'お母'}様を、かなり敬っているんだな。」`,
        1,
      );
      await era.input();
      await ruby.say_and_wait([
        'ええ。わたくしが進む道の、最も専門的で、最も輝かしい典範として、敬っていますわ。',
      ]);
      await ruby.say_and_wait([
        ruby.sex_code === 1 ? 'お父' : 'お母',
        '様の偉大な軌跡……一族の今後の繁栄のため、わたくしが倣わねばならないものですわ。',
      ]);
      await era.printAndWait([
        'なぜ三宝冠路線を選ぶのか……',
        you.get_colored_name(),
        ' は、',
        ruby.get_colored_name(),
        ' の、家の歴史を超えた、決して単純ではない意図を感じ取った。',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47: (() => {
    const title = 'だから、怠れない';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait('トレーニング場');
      await ruby.say_and_wait([callname, '、改めて始めましょう。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' から、',
        ruby.sex,
        'の脚に生まれつきの問題があると知らされた。',
      ]);
      await era.printAndWait(
        '正確には【脚の形に問題があるが、当面レースに支障はない】。',
      );
      await era.printAndWait([
        'だから当初は、特に ',
        you.get_colored_name(),
        ' へ報告していなかった。',
      ]);
      await era.printAndWait([
        'だが、',
        you.get_colored_name(),
        ' に問われたときは、隠さなかった。',
      ]);
      await era.printAndWait([
        '走るときに負荷の大きい部位だ。',
        you.get_colored_name(),
        ' は、そう簡単に片付く問題ではないと思った。',
      ]);
      era.printButton('「本当に、大丈夫なのか？」', 1);
      await era.input();
      await ruby.say_and_wait('もちろん問題ありませんわ。それに、両親が……');
      await ruby.say_and_wait(
        '両親、そして周囲の皆様が、たくさんの助けをくださいましたわ。',
      );
      await era.printAndWait([
        '一瞬、',
        ruby.get_colored_name(),
        ' の表情が、かなり……苦しげになった。',
      ]);
      era.printButton('「生まれつき、か？」', 1);
      await era.input();
      await ruby.say_and_wait(
        'ええ。生まれたとき、医師から走れないかもしれないと告げられましたわ。',
      );
      await ruby.say_and_wait(
        'ですが両親はわたくしのために、あらゆる手段を尽くし、献身的に向き合ってくださいましたわ。',
      );
      era.printButton('「だから、あれほどの熱望があるんだな。」', 1);
      await era.input();
      await ruby.say_and_wait('そうせずにはいられませんわ？');
      await ruby.say_and_wait([
        '——『華麗一族』の',
        ruby.uma_sex_title,
        'として生まれ、命を享受しているのですから。',
      ]);
      await ruby.say_and_wait(
        'その結果、脚の使い方を最適化した走りを身につけ、今も変わっていますわ。',
      );
      await ruby.say_and_wait(
        '医師も、今の体なら激しいレースに耐えられる、と。',
      );
      await ruby.say_and_wait('もし、万一……');
      era.printButton('「今はトレーニングに集中しよう。」', 1);
      era.printButton('「脚を見せてもらえるか？」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait(
          'ええ。自分が問題ないと確信できるまで、体を鍛えますわ。',
        );
        await ruby.say_and_wait('果たすべき使命は、もう決まっていますわ。');
        await ruby.say_and_wait('少し話しすぎましたわ。コースへ参ります。');
        await era.printAndWait('トレーニングは滞りなく終わった。');
      } else {
        await ruby.say_and_wait('動機不純——という顔でもありませんわね。');
        await ruby.say_and_wait(
          '公共の場でそんなことをする意味、ご存知ですの？',
        );
        era.printButton('しゃがむ。', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('せめて、あちらの椅子へ……');
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の両脚を、隅々まで確かめた。',
        ]);
        await era.printAndWait([
          '何に憑かれたか、',
          you.get_colored_name(),
          ' はタイツの一箇所を引き上げ、「ぱん」と手を離した。',
        ]);
        await era.printAndWait([
          '驚きと羞恥で、',
          ruby.sex_code === 1 ? '小さな坊ちゃま' : 'お嬢さま',
          'は下唇を噛み、',
          you.get_colored_name(),
          ' を睨んだ。叱られる覚悟をした、そのとき。',
        ]);
        await ruby.say_and_wait('靴を履かせてくださいまし。');
        await era.printAndWait(['そのあと、トレーニングは滞りなく終わった。']);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  oc_47_1: (() => {
    const title = '初詣';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait('あけましておめでとうございますわ。');
      era.printButton('「あけましておめでとう。」', 1);
      await era.input();
      await ruby.say_and_wait(
        'トレーナーであるあなたのおかげで、無事に新しい年を迎えられましたわ。',
      );
      await ruby.say_and_wait(
        'この先、お母様が勝たれたレースと、勝てなかったレースの双方で、満足のいく結果を残し……',
      );
      await you.say_and_wait('お母様の雪辱、ということか。', true);
      await ruby.say_and_wait('今は、脚の不安は完全に消えたと断言できますわ。');
      await ruby.say_and_wait(
        '桜花賞の前哨戦へ出て、あなたにお示ししたいですわ。',
      );
      await era.printAndWait(
        'やりたいことを先に言われた……だが、担当と目標が同じなのは良いことだ。',
      );
      await ruby.say_and_wait('今年も、よろしくお願いいたしますわ。');
      era.printButton('「任せてくれ。」', 1);
      await era.input();
      await ruby.say_and_wait('ええ。');
      era.printButton(
        `「ただ、ルビーはこのあと他の方へも挨拶に行くんだろう？」`,
        1,
      );
      await era.input();
      await era.printAndWait(
        '財界に名の通った一族の末裔として、年始が忙しいのは想像に難くない。',
      );
      await ruby.say_and_wait('いいえ。');
      await ruby.say_and_wait('ご一族の皆様は、すでに手配済みですわ。');
      await ruby.say_and_wait('本当に必要があれば、また連絡がまいりますわ。');
      await era.printAndWait('つまり、今は暇だ。');
      await ruby.say_and_wait('では、自主練習に参りますわ。');
      await ruby.say_and_wait('ご挨拶は済みましたので、先に失礼いたしますわ。');
      await era.printAndWait('待て——');
      await era.printAndWait([
        '年の始めくらいは担当に少し休んでほしい。',
        you.get_colored_name(),
        ' が思い浮かべたのは……',
      ]);
      era.printButton('「書初め。」（スピード+20）', 1);
      era.printButton('「おせちは食べたか？」（スタミナ+20）', 2);
      era.printButton('「パーティーの時間だ！」（スキルPt+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            '突然書初めを切り出したのは、',
            you.get_colored_name(),
            ' が正月の筆始めを好んでいるからだ。',
          ]);
          await ruby.say_and_wait('意外ですわ……');
          await era.printAndWait([
            ruby.get_colored_name(),
            ' の字は清楚で、美しいと言える。',
          ]);
          await era.printAndWait([
            'だが、書を少しかじった ',
            you.get_colored_name(),
            ' の筆跡と比べると、まだ見劣りする。',
          ]);
          await ruby.say_and_wait([callname, '、ご指導くださいまし。']);
          await era.printAndWait([
            ruby.uma_sex_title,
            '生まれの負けず嫌いが、どこにでも顔を出す。',
          ]);
          await era.printAndWait([
            'そう感慨を抱きつつ、',
            you.get_colored_name(),
            ' はまず握りを正しに、後ろから ',
            ruby.get_colored_name(),
            ' の小さな手を包んだ。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' と ',
            ruby.get_colored_name(),
            ' は、文化交流たっぷりの快い午後を過ごした。',
          ]);
          break;
        case 2:
          await ruby.say_and_wait('……');
          await ruby.say_and_wait('夜、当主がダイイチ家の邸で宴を開きますわ。');
          await ruby.say_and_wait(
            'ご出席いただければ、これに過ぎるものはありませんわ。',
          );
          await ruby.say_and_wait('ご安心を。華麗一族の内輪の晩餐ですわ。');
          await ruby.say_and_wait('お母様へ、ご挨拶に参りましょう？');
          await era.printAndWait([
            you.get_colored_name(),
            ' の予想と違い、気の楽な宴の時間を楽しめた。',
          ]);
          break;
        case 3:
          await ruby.say_and_wait('ふ、ふふ。');
          await ruby.say_and_wait(
            'わたくしたち二人だけでも、パーティーですの？',
          );
          await era.printAndWait([
            'なぜか、',
            ruby.get_colored_name(),
            ' はとても嬉しそうに笑った。',
          ]);
          await ruby.say_and_wait(
            'よろしいですわ。残念ながら『太陽』とは違い、わたくしはこの方面には疎いのですわ。',
          );
          await ruby.say_and_wait('どうか、楽しませてくださいまし？');
          await era.printAndWait([
            you.get_colored_name(),
            ' と ',
            ruby.get_colored_name(),
            ' は、愉快な一日を過ごした。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  hoch_rev_win: (() => {
    const title = '今こそ華麗の時';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} oka_sho 桜花賞（色付き名前）
     */
    const f = async (ruby, callname, oka_sho) => {
      await ruby.say_and_wait('ようやく、果たせましたわ……');
      await ruby.say_and_wait('……');
      era.drawLine({ content: '控え室' });
      await ruby.say_and_wait('今日のレースを、ご評価くださいまし。');
      era.printButton('「まず、ゲートから。」', 1);
      await era.input();
      await era.printAndWait('反省会は、しばらく続いた……');
      await ruby.say_and_wait([callname, '、ここまででよろしいですわ。']);
      await ruby.say_and_wait(
        'では、反省点に沿ってトレーニング計画を調整いたしますわ。',
      );
      await era.printAndWait([
        '目標は ',
        oka_sho,
        '。',
        ruby.get_colored_name(),
        ' の',
        ruby.sex_code === 1 ? '父' : '母',
        'も勝った、三宝冠の第一戦だ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  oka_sho_win: (() => {
    const title = '期待は、深まる';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {PrintedSpan} yush_him オークス（色付き名前）
     */
    const f = async (ruby, yush_him) => {
      await era.printAndWait([
        'レース後、',
        ruby.get_colored_name(),
        ' は意味深い勝利を手にしたのに、顔は相変わらず爽やかだった。',
      ]);
      era.printButton('「おめでとう。」', 1);
      await era.input();
      await ruby.say_and_wait('ありがとう。ですが、まだ遠いですわ。');
      await era.printAndWait([
        yush_him,
        '、宝冠路線の第二戦。',
        ruby.get_colored_name(),
        ' のお母様も、ここで折れた。',
      ]);
      await era.printAndWait([
        '中距離以上では、',
        ruby.get_colored_name(),
        ' の実力に、まだ未知の部分がある。',
      ]);
      await ruby.say_and_wait('わたくしの問題は、おそらく……');
      await ruby.say_and_wait(
        'いいえ。何か問題があっても、速やかに解決すればいいのですわ。',
      );
      await ruby.say_and_wait('どうか、徹底してご指導くださいまし。');
      await era.printAndWait([
        'こうして、次の目標レース ',
        yush_him,
        ' のため、トレーニングの日々が再び始まった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_19: (() => {
    const title = 'ただ前方を見つめて';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} yush_him オークス（色付き名前）
     */
    const f = async (ruby, you, callname, yush_him) => {
      await era.printAndWait([
        '二千四百メートルの ',
        yush_him,
        ' に向け、',
        ruby.get_colored_name(),
        ' はスタミナのトレーニングをしていた。',
      ]);
      era.printButton('「感触はどうだ？」', 1);
      await era.input();
      await ruby.say_and_wait('問題ありませんわ。');
      era.printButton('「本当に大丈夫か？」', 1);
      await era.input();
      await ruby.say_and_wait('ええ。');
      await ruby.say_and_wait('単純に、体力不足ですわ。');
      await ruby.say_and_wait(
        '体力を伸ばすメニューを、もっとご提案いただきたいですわ。',
      );
      await ruby.say_and_wait('では、もう一周走ってまいりますわ。');
      await you.say_and_wait('スタミナ不足、か……', true);
      await era.printAndWait('たしかに、その理由もある。');
      await era.printAndWait([
        'だが、もっとどうにもならないものが、',
        ruby.sex,
        'の前に立ち塞がっているように見えた。それは——',
      ]);
      era.printButton('走り方。', 1);
      era.printButton('適性。', 2);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' から見れば、「適性」そのものに善悪はない。',
      ]);
      await era.printAndWait('……ただ、狙う方向によっては、障壁になる。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' の目標レースは中長距離が多い。',
        ruby.sex,
        'がこの道を踏めば、必ず多くの妨げに遭う。',
      ]);
      await era.printAndWait(
        'この段階ではまだ断言できない。まずはスタミナのトレーニングを繰り返すしかない。',
      );
      await era.printAndWait('成果が出たら、それを土台に新しい計画を立てる。');
      era.drawLine();
      await ruby.print_and_wait('あっという間に、放課後になった。');
      await ruby.say_and_wait(
        '二千四百メートルは、わたくしには少し過酷かもしれませんわ。適性の外ですわ。',
        true,
      );
      await ruby.say_and_wait(
        [
          callname,
          ' はそう推測なさっているはずですわ。わたくしも、感じていますわ。',
        ],
        true,
      );
      await ruby.say_and_wait('不甲斐ない……', true);
      await ruby.say_and_wait(
        [
          '必ず ',
          yush_him,
          ' に挑み、お母様が果たせなかった勝利を手にしますわ。',
        ],
        true,
      );
      await ruby.say_and_wait(
        '一族の存在とは、こうして一歩ずつ積むものですわ。',
        true,
      );
      await you.say_as_passer_by_and_wait('執事', [
        ruby.sex_code === 1 ? '坊ちゃま' : 'お嬢さま',
        '、お迎えに参りました。',
      ]);
      await ruby.say_and_wait('すみません、予定を変更いたしますわ。');
      await ruby.say_and_wait(
        '自主練習をしますので、このあとはお任せしますわ。',
      );
      await you.say_as_passer_by_and_wait(
        '執事',
        'かしこまりました。こちらは気になさらず、トレーニングに集中なさってください。',
      );
      await ruby.say_and_wait('ええ。');
      await ruby.say_and_wait('進まねばなりませんわ。');
    };
    f.title = title;
    return f;
  })(),
  yush_him_win: (() => {
    const title = 'ピジョンブラッド';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait('違和感、ですわ。');
      await ruby.say_and_wait(
        '策もなく、機を見る必要すらなく、身体能力だけで……',
      );
      await ruby.say_and_wait('わたくしが、自分以外の者に、掌握されていた？');
      await ruby.say_and_wait([callname, '、あなたは一体……']);
      era.printButton('（気づかれたか）', 1);
      era.printButton('「悪くないだろう？」', 2);
      const ret = await era.input();
      await ruby.say_and_wait('わたくしの体に、何をなさいましたの？');
      await ruby.say_and_wait('……');
      await ruby.say_and_wait(
        'いいえ、失言ですわ。この先も、心のままに進めてくださいまし。',
      );
      await ruby.say_and_wait(
        '一族のためなら、わたくしはいつでも、すべてを捧げられますわ。',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  yush_him_lose: (() => {
    const title = 'オークの葉は広い';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} rose_sta ローズステークス（色付き名前）
     * @param {PrintedSpan} shuk_sho 秋華賞（色付き名前）
     */
    const f = async (ruby, you, callname, rose_sta, shuk_sho) => {
      await ruby.say_and_wait('そう、ですわね。やはり、わたくしは……', true);
      await ruby.say_and_wait(
        '大変申し訳ございません。見苦しいところをお見せしましたわ。',
      );
      await ruby.say_and_wait([
        callname,
        ' も、今日のため、トレーニング以外でもたくさんの助けをくださいましたわ。',
      ]);
      await ruby.say_and_wait('そのご尽力に報いられず、深く恥じ入りますわ。');
      era.printButton('「こちらこそ、すまない……」', 1);
      era.printButton('「他の報い方もある。」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('……え？');
        await era.printAndWait([
          '内心を見せない、表面上の平静が、',
          you.get_colored_name(),
          ' にはひどく悔しかった。',
        ]);
        era.printButton('「次は……必ず……」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('……本当に、ありがとうございますわ。');
        await ruby.say_and_wait([
          '次の目標は ',
          shuk_sho,
          '。その前に、提案がございますわ。',
        ]);
        await ruby.say_and_wait([
          '前哨戦として ',
          rose_sta,
          ' に出たいですわ。',
        ]);
        await ruby.say_and_wait(
          '夏の合宿も厳しいですが、本命のレースのため、最良の状態を保たねばなりませんわ。',
        );
        await era.printAndWait(
          'たしかに、一レースを挟んだ方が、大舞台への状態は馴染みやすい。',
        );
        era.printButton('「分かった。」', 1);
        await era.input();
        await ruby.say_and_wait('お願いいたしますわ。');
        era.printButton('「では、入口で待っている。」', 1);
        await era.input();
        await ruby.say_and_wait('ええ。');
      } else {
        await ruby.say_and_wait('そのような冗談、二度と聞きたくありませんわ。');
        era.printButton('「レースは楽しめたか？」', 1);
        await era.input();
        await ruby.say_and_wait('え？');
        era.printButton('「レースを楽しんでみろ。」', 1);
        await era.input();
        era.printButton('「どう勝たせるかは、私が考えることだ。」', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は俯いて何かを考え、',
          you.get_colored_name(),
          ' は先にその場を離れた。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿（クラシック級）';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} yush_him オークス（色付き名前）
     * @param {PrintedSpan} shuk_sho 秋華賞（色付き名前）
     */
    const f = async (ruby, you, yush_him, shuk_sho) => {
      await era.printAndWait([
        '軽いジョギングの最中、',
        ruby.get_colored_name(),
        ' が転んだ。',
      ]);
      era.printButton('「大丈夫か！？」', 1);
      await era.input();
      await ruby.say_and_wait('砂に躓いただけですわ。問題ありませんわ。');
      era.printButton('「怪我は？」', 1);
      await era.input();
      await ruby.say_and_wait('ございませんわ。');
      await era.printAndWait('本当に問題はなさそうだ。だが……');
      await era.printAndWait([
        '夏季合宿が始まってから、',
        ruby.get_colored_name(),
        ' は毎日自分を追い詰めていた。',
      ]);
      await era.printAndWait([
        'ただ、この先の ',
        shuk_sho,
        ' で成果を出すために。',
      ]);
      await era.printAndWait([
        'せっかく海辺へ来たのだ。',
        you.get_colored_name(),
        ' は思った……',
      ]);
      era.printButton('「アゲハを捕まえる」（パワー+10）', 1);
      era.printButton('「では、耐久を鍛えよう」（根性+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('理解できませんわ。');
        era.printButton('「ここ特有の種類だ。華麗で、お前に似合う。」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait(
          '繭を破って蝶になる——わたくしは、それに見合わないのかもしれませんわ。',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' がアゲハを捕まえるあいだ、日傘は ',
          you.get_colored_name(),
          ' が代わりに差した。',
        ]);
        await era.printAndWait([
          '影の下でアゲハに微笑む',
          ruby.teen_sex_title,
          'は、ようやくこの年頃の',
          ruby.child_sex_title,
          'らしい顔を見せた。',
        ]);
      } else {
        await ruby.say_and_wait([
          yush_him,
          ' での、わたくしの見苦しい走りのせいですわね。',
        ]);
        await era.printAndWait([
          'やはり、',
          ruby.get_colored_name(),
          ' の中距離適性は、短距離とマイルには遠く及ばない。',
        ]);
        await era.printAndWait([
          'スピードは強みであり、同時に',
          ruby.sex,
          '最大の弱点でもある。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はスタミナを中心に、',
          ruby.get_colored_name(),
          ' に厳しい練習を続けさせた。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '得た啓示';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await ruby.say_and_wait([callname, '。']);
      await ruby.say_and_wait(
        'あなたは、わたくしのスピードの中に、輝きを見つけましたの？',
      );
      era.printButton('「ああ。」', 1);
      await era.input();
      await ruby.say_and_wait('この武器を活かせば、わたくしも近づけ……');
      await ruby.say_and_wait('この両脚で、最も眩い輝きを示せるのなら……');
      await ruby.say_and_wait(
        '選んだ路線に冠がなくとも、その血は、この体に流れていますわ。',
      );
      await ruby.say_and_wait(
        '王道路線でしか輝きは咲かないと信じた、わたくしも、その程度でしたわ。',
      );
      await ruby.say_and_wait(
        'ですがあなたは、その道の外で、わたくしに使命を果たさせてくださる。',
      );
      await ruby.say_and_wait('わたくしに最もふさわしいやり方で。');
      await ruby.say_and_wait('今月は、お疲れさまでした。');
      await ruby.say_and_wait(
        'あなたがいなければ進めないことを、十分に悟りましたわ。',
      );
      await ruby.say_and_wait('まず、家へ決断を伝えねばなりませんわ。');
      await ruby.say_and_wait('この先も、よろしくお願いいたしますわ。');
    };
    f.title = title;
    return f;
  })(),
  rose_sta_win: (() => {
    const title = '華麗なる立場の転変';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} shuk_sho 秋華賞（色付き名前）
     * @param {PrintedSpan} takm_kin 高松宮記念（色付き名前）
     * @param {PrintedSpan} eliz_cup エリザベス女王杯（色付き名前）
     */
    const f = async (ruby, you, callname, shuk_sho, takm_kin, eliz_cup) => {
      const ret = [];
      await ruby.say_and_wait('——ん？');
      await ruby.say_and_wait('右脚……一瞬、違和感が……', true);
      await ruby.say_and_wait('少し様子を見ましょう。まだ気になるなら……', true);
      await era.printAndWait([
        '——数日後、',
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' から「脚の周りに少し違和感がある」との報告を受けた……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はすぐ ',
        ruby.get_colored_name(),
        ' を、かかりつけの医師のもとへ連れていった。',
      ]);
      await you.say_as_passer_by_and_wait('医師', [
        ruby.get_colored_name(),
        ' の右脚は、急性化膿性疾患です。',
      ]);
      await you.say_as_passer_by_and_wait('医師', 'いわゆる【蜂窩織炎】です。');
      await you.say_and_wait('！', true);
      await you.say_as_passer_by_and_wait(
        '医師',
        'ご安心を。重症ではありません。',
      );
      await you.say_as_passer_by_and_wait(
        '医師',
        '違和感の段階で受診できたのが幸いでした。',
      );
      await you.say_as_passer_by_and_wait('医師', [
        '次の目標 ',
        shuk_sho,
        ' までには、治ります。',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait(
        '決めましたわ。年内に予定していた目標レースは、いったん取り下げます。',
      );
      await ruby.say_and_wait(
        'わたくしの脚は生まれつき問題があります。仕方のないことですわ。',
      );
      await ruby.say_and_wait(
        '脚の問題は、程度を問わず、慎重に向き合うべきですわ。',
      );
      await ruby.say_and_wait('……');
      await ruby.say_and_wait([callname, '。']);
      await ruby.say_and_wait(
        'レースへの出走可否、すべての判断は、あなたにお任せしますわ。',
      );
      era.printButton('「ああ。」', 1);
      era.printButton('「任せてくれ。」', 2);
      ret.push(await era.input());
      await you.say_as_passer_by_and_wait(
        '医師',
        'ですが、本当によろしいのですか？',
      );
      await you.say_as_passer_by_and_wait('医師', [
        shuk_sho,
        ' と ',
        eliz_cup,
        ' は、あなたの夢でしょう。',
      ]);
      await ruby.say_and_wait('……夢。');
      await ruby.say_and_wait('お心遣い、ありがとうございます。ですが……');
      await ruby.say_and_wait(
        'ですが、わたくしには、もう新しい使命がありますわ。',
      );
      await you.say_as_passer_by_and_wait('執事', 'ご面談中、失礼いたします。');
      await you.say_as_passer_by_and_wait('執事', [
        ruby.sex_code === 1 ? '坊ちゃま' : 'お嬢さま',
        '、すぐに面会をお手配いたしましょうか？',
      ]);
      await ruby.say_and_wait('ええ、そのように。');
      await ruby.say_and_wait(
        '前倒しになりますが……目標レースの変更と合わせて、今日発表いたしますわ。',
      );
      era.drawLine({ content: '記者会見' });
      await you.say_as_passer_by_and_wait('記者A', [
        'トレーナー',
        you.adult_sex_title,
        '、こちらで間違いないですね。',
      ]);
      era.printButton('はい、問題ありません。', 1);
      await era.input();
      await ruby.say_and_wait(
        'もう一事、皆様へご報告がございますわ。次の目標レースについて。',
      );
      await ruby.say_and_wait(['春の ', takm_kin, ' へ、出走を決めましたわ。']);
      await ruby.say_and_wait(
        '即日より、わたくしダイイチルビーは、短距離戦線へ参戦すると宣言いたしますわ。',
      );
      await you.say_and_wait('えええええ？', true);
      era.drawLine();
      await era.printAndWait('短い面会は、滞りなく終わった——');
      await ruby.say_and_wait('本日はお疲れさまでした。');
      era.printButton('「今日は本当に大変だったな。」', 1);
      era.printButton('「こんな苦労に、ご褒美はあるのか？」', 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await ruby.say_and_wait('お気遣いには及びませんわ。想定内ですわ。');
        await ruby.say_and_wait(
          '来年は、おそらく違う形で努力を求められる一年になるでしょう。',
        );
        await ruby.say_and_wait([
          callname,
          '、来年も精進を続けてくださいまし。',
        ]);
        await ruby.say_and_wait('では……');
        await ruby.say_and_wait('……');
        era.printButton(`「ルビー？」`, 1);
        await era.input();
        await ruby.say_and_wait(
          '来年に限らず、この先もよろしくお願いいたしますわ。',
        );
      } else {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('目を閉じてくださいまし。');
        await ruby.say_and_wait('ちゅ。', true);
        await era.printAndWait([
          '実は ',
          you.get_colored_name(),
          ' はたまたま目を閉じ、',
          ruby.get_colored_name(),
          ' が何をするつもりか聞こうとしていただけだった。',
        ]);
        await era.printAndWait([
          '頬の際に伝わった水音に、',
          you.get_colored_name(),
          ' は言葉を失い、しばらく目を開けられなかった。',
        ]);
        await era.printAndWait([
          'その柔らかく湿った感触を十分に味わったころ、',
          ruby.get_colored_name(),
          ' はもうその場を離れていた。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '初詣';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} helios ダイタクヘリオス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, helios, you, callname) => {
      const ret = [];
      await ruby.say_and_wait('注目されること自体に、問題はございませんわ。');
      await era.printAndWait([
        '正月早々、',
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' のトレーナー室へ来た。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        ruby.sex,
        'はもっと忙しいと思っていた。それでも、嬉しかった。',
      ]);
      await era.printAndWait([
        '挨拶のあと、',
        ruby.sex,
        'の言葉は、やはり凛としていた。',
      ]);
      await ruby.say_and_wait(
        'この期間は、なすべきことをなすだけでよろしいのですわ。',
      );
      await ruby.say_and_wait([callname, '、どうお考えですの？']);
      era.printButton('「スピードを掴む……だろうな。」', 1);
      await era.input();
      await era.printAndWait([
        ruby.sex,
        'にとっては、生まれつきスピードに愛されている。',
      ]);
      await era.printAndWait([
        ruby.sex,
        'の脚を研げば、輝きを咲かせ、一族で最も眩い存在になれるはずだ。',
      ]);
      await ruby.say_and_wait(
        'ええ。わたくしは、もうあなたの期待に背きませんわ。',
      );
      await era.printAndWait([
        '年始からまた神経が張り詰めている。',
        you.get_colored_name(),
        ' は、',
        ruby.get_colored_name(),
        ' を少し緩めさせたいと思った……',
      ]);
      era.printButton('「新しい正月料理を探す」（スタミナ+20）', 1);
      era.printButton('「近くの神社で成長を祈る」（全能力+8）', 2);
      era.printButton('「パーティーの時間だ！ Lv2！」（スキルPt+35）', 3);
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await ruby.say_and_wait('はぁ……');
          await ruby.say_and_wait(
            '覚悟はしておりましたわ。それにしても、意味不明ですわね。',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' と ',
            ruby.get_colored_name(),
            ' はトレーナー室でさまざまな料理を試し、充実した一日を過ごした。',
          ]);
          break;
        case 2:
          await ruby.say_and_wait([callname, '……']);
          era.printButton('「誤解するな。小さいのが好きなだけだ。」', 1);
          era.printButton('「誤解するな。身体能力の成長の話だ。」', 2);
          ret.push(await era.input());
          await ruby.say_and_wait('……');
          await ruby.say_and_wait(
            'このあと正門で落ち合いましょう。着替えてまいりますわ。',
          );
          await era.printAndWait(
            '着物は貧乳に似合う、というのは、どうやら本当らしい。',
          );
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' は確信した。この華麗な装いを着こなしているのは、',
            ruby.get_colored_name(),
            ' の方だと。',
          ]);
          await era.printAndWait([
            '頭の椿は美しい。だが',
            ruby.teen_sex_title,
            '自身には及ばない。',
          ]);
          await era.printAndWait('着物の柄は……朝顔か。');
          await you.say_and_wait('愛情、そして、あなたと寄り添う、か', true);
          break;
        case 3:
          await era.printAndWait('なぜ Lv2 なのか。');
          await era.printAndWait([
            '担当を失望させないため、',
            you.get_colored_name(),
            ' はわざわざ ',
            helios.get_colored_name(),
            ' にパーティーのコツを教わった。',
          ]);
          await ruby.say_and_wait('騒がしすぎですわ。');
          await era.printAndWait([
            ruby.sex_code === 1 ? '坊ちゃま' : 'お嬢さま',
            'が笑って下した、容赦ない評価だった。',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  takm_kin_win: (() => {
    const title = '三代制覇';
    /** @param {CharaTalk} ruby ダイイチルビー */
    const f = async (ruby) => {
      await ruby.say_and_wait('勝ちましたわ……');
      await ruby.say_and_wait('ふふ……');
      await era.printAndWait([ruby.get_colored_name(), ' は軽く頭を振った。']);
      await ruby.say_and_wait(
        '皆様の声援、ありがとうございますわ。一族の願いを、果たしましたわ。',
      );
      await ruby.say_and_wait(
        '次の出走では、さらに素晴らしい走りを献上いたしますわ。',
      );
      era.drawLine({ content: '地下通路' });
      await ruby.say_and_wait(
        '以前、あなたがなさったことは、どれも正しかったようですわ。',
      );
      await ruby.say_and_wait(
        '人間でありながら、ある面ではとても強い生き物ですわね。',
      );
      await ruby.say_and_wait('この先も、壁に当たることはあるでしょう。');
      await ruby.say_and_wait('どうか、わたくしの手を放さないでくださいまし。');
    };
    f.title = title;
    return f;
  })(),
  yasu_kin_win_s: (() => {
    const title = '深紅は熱情の色';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} sprt_sta スプリンターズステークス（色付き名前）
     */
    const f = async (ruby, you, callname, sprt_sta) => {
      await era.printAndWait([
        'レース後、',
        ruby.get_colored_name(),
        ' の表情は、かつてないほど明るかった。',
      ]);
      await era.printAndWait([
        '氷のように鋭い輝き——それが、これまでの',
        ruby.sex,
        'の印象だった。',
      ]);
      await era.printAndWait(
        'だが今は、血肉の中から光るように、内から外へ輝いている。',
      );
      await ruby.say_and_wait(callname);
      await ruby.say_and_wait('次の目標について、提案がございますわ。');
      await era.printAndWait([
        '最も速い',
        ruby.uma_sex_title,
        'を決める——',
        sprt_sta,
        '。',
      ]);
      await ruby.say_and_wait('ええ。');
      await ruby.say_and_wait(
        'あそこなら、より高い頂に触れられると、わたくしは思いますわ。',
      );
      await ruby.say_and_wait(
        '優れた出走者と相手たちが、わたくしたちを狙うでしょう。',
      );
      await ruby.say_and_wait('ですが、無視できない義務感を、感じていますわ。');
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '夏季合宿（シニア級）';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} miracle ケイエスミラクル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
     * @param {PrintedSpan} m_call_r ケイエスミラクルがダイイチルビーを呼ぶ呼称
     */
    const f = async (ruby, miracle, you, callname, call_93, m_call_r) => {
      await era.printAndWait([
        '夏季合宿が始まった。レースに出る',
        ruby.uma_sex_title,
        'にとって、とても大切な季節だ。',
      ]);
      await era.printAndWait([
        '貴重な時間を無駄にしないよう、',
        you.get_colored_name(),
        ' はすでに万全の備えをしていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は中身の詰まった高負荷のメニューを組み、その強度に合わせて冷却とマッサージの準備も整えた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' には、なすべきことを事前に伝えてある。だから過程は淡白に見えた。だが——',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、はっきりした成果を見て、ほくそ笑んだ。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' のトレーナーとして、任務をきちんと果たせたことが、',
        you.get_colored_name(),
        ' の誇りだった。',
      ]);
      await ruby.say_and_wait(
        '本日も、最後までお傍で補佐いただき、ありがとうございますわ。では、着替えてまいります。失礼いたしますわ。',
      );
      await era.printAndWait([
        ruby.sex,
        'の、まだ熟しきらない白い体は、水に映る月のようで、青春の魅力を放っていた。理性を捨て、罪へ堕ちさせる危険な誘いでもあった。',
      ]);
      era.printButton('矜持を捨て、この深淵へ身を投げる。', 1, {
        disabled:
          era.get('love:85') < 75 ||
          era.get('cflag:0:性别') !== 1 ||
          era.get('cflag:85:性别') !== 0,
      });
      era.printButton('トレーニングが終わっても、まだできることがある。', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は両手を回し、後ろから ',
          ruby.get_colored_name(),
          ' の細い腰を抱いた。',
          ruby.get_colored_name(),
          ' は小さく声を上げ、頭を羞恥で伏せた。',
        ]);
        await era.printAndWait([
          'その顔の赤さが可愛すぎて、',
          you.get_colored_name(),
          ' は',
          ruby.sex,
          'の頭をこちらへ向け、小さな口へ唇を重ねた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は驚き、',
          you.get_colored_name(),
          ' から跳ね上がろうとした。抱きが強かったおかげで、お嬢さまの逃げは叶わなかった。',
        ]);
        await era.printAndWait([
          '軽い口づけが、',
          you.get_colored_name(),
          ' が数日堪えていた欲に、火をつけた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の右手はもともと腰に添えていた。今はもう、無意識に水着の中へ入り、わずかに膨らんだ胸へ進んでいた。',
        ]);
        await era.printAndWait([
          'すぐに、清楚な乳房へ手が届き、人差し指と中指で先端の乳頭を軽く挟んで揉んだ。',
        ]);
        await ruby.say_and_wait(['きゃっ！ ', callname, '……']);
        await era.printAndWait([
          '深い口づけのあと、',
          you.get_colored_name(),
          ' の舌は、薄い桜色の唇からゆっくり離れた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は息を乱し、赤い顔で ',
          you.get_colored_name(),
          ' を見上げた。透明に光る銀糸だけが、',
          you.get_colored_name(),
          ' と',
          ruby.sex,
          'を繋いでいた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の手は止まらなかった。',
          ruby.get_colored_name(),
          ' が気づく前に、左手が水着の裾へ滑り、',
          ruby.sex,
          'の股を辿った。',
        ]);
        await ruby.say_and_wait(
          '今はいけませんわ！ 声を出して誰かに見られたら、大事になりますわ！',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は肘で ',
          you.get_colored_name(),
          ' の下腹を軽く押した。',
          ruby.uma_sex_title,
          'の力に、',
          you.get_colored_name(),
          ' はむせて咳き込んだ。',
        ]);
        era.printButton('「ああああ！ 痛い、死ぬほど痛い！」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' は無実の被害者を装い、わざと体を縮めて ',
          ruby.get_colored_name(),
          ' を懐へ抱き込んだ。指は、さらに深く入っていた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' が体を震わせて抵抗をやめたのを見て、',
          you.get_colored_name(),
          ' は薄く笑い、',
          ruby.sex,
          'を傍らの小さな林へ引いた。',
        ]);
        await era.printAndWait([
          'また口づけを重ねたあと、',
          ruby.sex,
          'の水着を脱がせようとした。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の目は明るく、この魅惑的な幼い体を、一瞬たりとも見逃したくなかった。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' を押し倒し、雪白の肌の上を泳ぐように、薄紅を透かす白い凝脂を一枚また一枚滑った。',
        ]);
        await ruby.say_and_wait('ん……あっ！');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の、普段の凛とした表情はもう跡形もない。代わりに、薔薇のように鮮やかな柔情だけが残っていた。',
        ]);
        await era.printAndWait([
          'その心を揺さぶる姿に、',
          you.get_colored_name(),
          ' は惑い、',
          ruby.sex,
          'の胸の、清楚で小さな乳房に口づけし、歯で先端の柔らかい実を軽く咥えた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は唇を強く噛み、',
          you.get_colored_name(),
          ' が与える刺激に耐えていた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が小さな乳頭を吸い、最終段階へ進もうとしたとき、傍らから ',
          miracle.get_colored_name(),
          ' の声がした。',
        ]);
        await miracle.say_and_wait([m_call_r, '、トレーニングしてるの？']);
        await era.printAndWait([
          'その瞬間、',
          you.get_colored_name(),
          ' と ',
          ruby.get_colored_name(),
          ' の魂は飛びそうになった。',
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' に、適当な理由で',
          ruby.sex,
          'を帰すよう急かした。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は仕方なく、そう言った。',
        ]);
        await ruby.say_and_wait([
          call_93,
          '、休んでいますわ。お話は明日にいたしましょう。',
        ]);
        await era.printAndWait([
          '言い終えると、薄く眉を寄せ、',
          you.get_colored_name(),
          ' を一目睨んだ。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の上で苦笑し、',
          miracle.get_colored_name(),
          ' が去るまで静かに待った。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_30: (() => {
    const title = '夏季合宿（シニア級）途中';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait(
        '合宿は半分を過ぎた。今日、この辺りで夏祭りがある。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        ruby.get_colored_name(),
        ' なら合宿所に残るだろう、と思っていた。そのとき。',
      ]);
      await ruby.say_and_wait([callname, '？']);
      era.printButton('「勉強の準備、整えておいたぞ？」', 1);
      await era.input();
      await ruby.say_and_wait(
        '合宿所にも、こんな静かな場所があるのですね。机も照明も、整えてくださって。',
      );
      await ruby.say_and_wait(
        'そこまでお考えいただき、ありがとうございますわ。',
      );
      await era.printAndWait(
        'ヒューッ——ドン！ 遠くから花火の音がした。祭りも、そろそろ終わりだろう。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' が一区切りついた様子を見て、',
        you.get_colored_name(),
        ' は、とうに用意していた言葉を口にした。',
      ]);
      era.printButton('少し、散歩しないか？', 1);
      await era.input();
      await ruby.say_and_wait('……分かりましたわ。');
      era.drawLine({ content: '海辺' });
      await ruby.say_and_wait('静謐、ですわ……');
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        ruby.get_colored_name(),
        ' は無人の砂浜で、肩を並べて満天の星を見上げた。さらさらと鳴る潮風が、耳に快かった。',
      ]);
      era.printButton('ここの星が綺麗だと聞いて来たんだ。', 1);
      await era.input();
      await ruby.say_and_wait(
        'たしかに、景色はとても秀麗ですわ。夏の星座が、夜空で瞬いていますわ。',
      );
      await era.printAndWait(
        '独特の赤い光を放つのは、さそりの心臓——アンタレス。',
      );
      await ruby.say_and_wait('……ああ、やはり。');
      await ruby.say_and_wait('さそり火');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、傍らで何か声がした気がした。確かめようとしたとき、',
        ruby.get_colored_name(),
        ' はもう、いつもの顔に戻っていた。',
      ]);
      era.printButton('「戻るか？」', 1);
      era.printButton(`「昼の、ミラクルの……」`, 2, {
        disabled:
          era.get('love:85') < 75 ||
          era.get('cflag:0:性别') !== 1 ||
          era.get('cflag:85:性别') !== 0,
      });
      const ret = await era.input();
      if (ret === 1) {
        await ruby.say_and_wait('ええ。');
        await ruby.say_and_wait(
          '夜風で、頭はかなり澄みましたわ。戻ったら、明日のトレーニングの備えをいたしますわ。',
        );
        await era.printAndWait([
          '言い終えると、',
          ruby.get_colored_name(),
          ' は踵を返した。この散歩は、',
          ruby.sex,
          'にとっては不要だったのかもしれない。',
        ]);
        await era.printAndWait([
          '余計な提案で',
          ruby.sex,
          'に迷惑をかけたのではないかと、',
          you.get_colored_name(),
          ' が一人で案じていたとき——',
        ]);
        await ruby.say_and_wait('わたくしも、ああいう存在になりたいですわ。');
        await era.printAndWait('小さな背中から、その言葉が届いた。');
        await era.printAndWait([
          '互いの気持ちが、少し通じた。',
          you.get_colored_name(),
          ' は一人、この夜にその喜びを味わった。',
        ]);
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          ' はそれを聞くと身を屈め、踵に指を入れて靴を脱ぎ……それから一蹴りで ',
          you.get_colored_name(),
          ' を砂の上へ倒した。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は眉を寄せ、あまり愉快ではなかった。だが顔を上げる。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の小さな足首は滑らかで、',
          you.get_colored_name(),
          ' の掌とだいたい同じ大きさだった。',
        ]);
        await era.printAndWait([
          '腹を立てた ',
          you.get_colored_name(),
          ' は、選んだ……',
        ]);
        era.printButton('歯で軽く齧る。', 1);
        era.printButton('唇で掌を吻する。', 2);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' はくすぐったそうだった。',
          you.get_colored_name(),
          ' が舌を',
          ruby.sex,
          'の軽い腰まで伸ばしたとき、',
          ruby.sex,
          'は危うく声を上げかけた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は意地悪く、指で『静かに』の仕草を示した。',
          ruby.get_colored_name(),
          ' はすぐ両手で唇を押さえた。',
        ]);
        await era.printAndWait(
          '夜の月明かりは明るいとは言えない。だが、その桃源の秘所を見分けるには十分だった。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' の両脚を開き、',
          ruby.get_colored_name(),
          ' の息に合わせて開閉する、妖しい入口へ進んだ。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の下腹は、',
          you.get_colored_name(),
          ' が一寸ずつ進むたびに激しく震え、深く入ったあと、全身へ広がる震えへ変わった。',
        ]);
        await era.printAndWait([you.get_colored_name(), ' は優しく抽送した。']);
        await ruby.say_and_wait('うっ——');
        await era.printAndWait([
          '突然、',
          ruby.get_colored_name(),
          ' は口を押さえたまま、悲鳴に近い声を上げ、体をアーチに反らせた。',
        ]);
        await era.printAndWait([
          ruby.sex,
          'の膣は丸ごと締まり、輪になって ',
          you.get_colored_name(),
          ' の肉棒を箍した。',
        ]);
        era.printButton('射精する。', 1);
        await era.input();
        await era.printAndWait([
          ruby.get_colored_name(),
          ' はもう全身が熱く、汗に濡れていた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の射精と同時に、',
          ruby.get_colored_name(),
          ' の下からも、透明な潮が迸った。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の体は、天に愛された優れた体だ。',
          ruby.sex,
          'に、たやすく交わりの愉悦を味わわせる。',
        ]);
        await era.printAndWait([
          '本人は疲れ果てていても、',
          ruby.sex,
          'の雌の道は本能で痙攣し、蠕動し始めた。',
        ]);
        await era.printAndWait([
          'その感触は、無数の細く柔らかい触手が、同時に ',
          you.get_colored_name(),
          ' の小さなトレーナーを撫でているようだった。',
        ]);
        await era.printAndWait([
          'しばらく弄ばれたあと、',
          you.get_colored_name(),
          ' は再び勢いを取り戻した。',
        ]);
        era.drawLine();
        await era.printAndWait([
          '最後の交わりが終わりかけたとき、',
          you.get_colored_name(),
          ' はもう、',
          ruby.get_colored_name(),
          ' の中に留まる勇気がなくなっていた。',
        ]);
        await era.printAndWait(
          'この柔い体は、魂まで吸い尽くすまで止まらないらしい。',
        );
        await era.printAndWait([
          ruby.get_colored_name(),
          ' の下腹が、わずかに膨らんでいた。',
        ]);
        era.printButton('手で軽く押す。', 1);
        await era.input();
        await era.printAndWait('腹の中の濃い精が溢れ、砂浜を散らして汚した。');
        await era.printAndWait([
          ruby.get_colored_name(),
          ' が口を押さえていた手は、もう頭の上で力なく垂れていた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          ruby.get_colored_name(),
          ' を合宿所へ連れ帰ろうとした。だが両脚が震え続けた。',
        ]);
        await era.printAndWait('結局、二人は這って部屋へ戻った。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '夏季合宿終了（シニア級）';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
     */
    const f = async (ruby, you, call_93) => {
      await ruby.say_and_wait('使命のためには、自身を捧げる覚悟が要りますわ。');
      era.printButton('「捧げる？」', 1);
      await era.input();
      await ruby.say_and_wait([call_93, ' の言うとおりですわ。わたくしは……']);
      era.printButton('「本当に、正しいのか？」', 1);
      await era.input();
      await ruby.say_and_wait('え？');
      era.printButton(`「ルビー、ケイエスミラクルがそれでいいと思うか？」`, 1);
      await era.input();
      await ruby.say_and_wait('！');
      await ruby.say_and_wait('……');
      await era.printAndWait([ruby.get_colored_name(), ' は沈思に落ちた。']);
      era.drawLine();
      await era.printAndWait([
        '夜、ルームメイトより先に寝室へ戻った ',
        ruby.get_colored_name(),
        ' は、独り言を呟いていた。',
      ]);
      await ruby.say_and_wait('わたくしたちは、よく似ていますわ……');
      await ruby.say_and_wait(
        '血脈、『奇跡』。使命と、目に見える才能を、わたくしたちに与えましたわ。',
      );
      await ruby.say_and_wait('ですが、確かな違いがありますわ。それは……');
      await ruby.say_and_wait([call_93, '、あなたの前路は……']);
      await ruby.say_and_wait('あの足取りで進めば、未来はただ……');
      await ruby.say_and_wait([
        call_93,
        ' ',
        ruby.sex,
        'ご自身は、それでよいとお思いなのでしょう？',
      ]);
      await you.used_to_say_and_wait('本当に、正しいのか？');
      await you.used_to_say_and_wait('ケイエスミラクルがそれでいいと思うか？');
      await ruby.say_and_wait('よいはずがありませんわ。');
      await ruby.say_and_wait('わたくしは、許せませんわ……');
      await era.printAndWait('夏の合宿は、不安の中で終わった。');
    };
    f.title = title;
    return f;
  })(),
  before_sprt_sta_s: (() => {
    const title = 'いわゆる奇跡';
    /**
     @param {CharaTalk} ruby ダイイチルビー
     @param {CharaTalk} miracle ケイエスミラクル
     @param {CharaTalk} you プレイヤー
     @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
     @param {PrintedSpan} m_call_r ケイエスミラクルがダイイチルビーを呼ぶ呼称
     */
    const f = async (ruby, miracle, you, call_93, m_call_r) => {
      await miracle.say_and_wait('……——');
      await ruby.say_and_wait([call_93, '。']);
      await miracle.say_and_wait('……');
      await ruby.say_and_wait([miracle.get_colored_name(), ' さん。']);
      await miracle.say_and_wait('あ。');
      await miracle.say_and_wait([m_call_r, '？']);
      await ruby.say_and_wait('時間ですわ。参りましょう。');
      await miracle.say_and_wait('あっ、もうこんな時間。');
      await ruby.say_and_wait('……');
      await miracle.say_and_wait(
        'ごめんね、大丈夫。ただ、いろいろ考えてただけ。',
      );
      await miracle.say_and_wait('お互い、悔いのない勝負にしよう。');
      await ruby.say_and_wait('……ええ。');
      era.drawLine({ content: '選手通路' });
      await miracle.say_and_wait('……勝つ。');
      await miracle.say_and_wait(
        '誰より速く……今日は……この走りを、みんなに捧げる……',
      );
      await ruby.say_and_wait([call_93, '。']);
      await miracle.say_and_wait([m_call_r, '……']);
      await miracle.say_and_wait('今日はよろしく。遠慮は、いらないから。');
      await miracle.say_and_wait('お互い、一歩も譲らずに競おう……');
      await ruby.say_and_wait('あなたの望みは、すべて空しくいたしますわ。');
      await miracle.say_and_wait('！');
      await ruby.say_and_wait('今のあなたに、最速の輝きは渡しませんわ。');
      await ruby.say_and_wait(
        'かつてあなたがわたくしに語ったもの——わたくしが、見せて差し上げますわ。',
      );
      await miracle.say_and_wait([m_call_r, '？']);
      await ruby.say_and_wait('……——');
      await ruby.say_and_wait(
        '先導する者として、より高い場所へお連れしますわ。',
      );
      await ruby.say_and_wait(
        '『華麗一族』の新たな象徴を、しっかりとご覧なさい。',
      );
      era.drawLine({ content: '控室' });
      await ruby.say_and_wait('今日のレースは、必ず勝ちますわ。');
      await era.printAndWait([
        'レースの前、',
        ruby.get_colored_name(),
        ' は突然そう ',
        you.get_colored_name(),
        ' に宣言した。',
      ]);
      await era.printAndWait('友情というのは、まぶしいものだ。');
    };
    f.title = title;
    return f;
  })(),
  sprt_sta_win_s: (() => {
    const title = '未来は……';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} miracle ケイエスミラクル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
     * @param {PrintedSpan} m_call_r ケイエスミラクルがダイイチルビーを呼ぶ呼称
     * @param {PrintedSpan} swan_sta スワンステークス（着色名）
     */
    const f = async (
      ruby,
      miracle,
      you,
      callname,
      call_93,
      m_call_r,
      swan_sta,
    ) => {
      await miracle.say_and_wait('スパート……誰より速く、誰より先に——ゴール！');
      await miracle.say_and_wait('脚が……痛い、踏ん張れない……');
      await miracle.say_and_wait('だめ！ みんなのために、絶対に勝利を……');
      await ruby.say_and_wait('行かせませんわ。あなたを待つ絶望が訪れる前に……');
      await ruby.say_and_wait('未来を拓きますわ！');
      await miracle.say_and_wait(['え、', m_call_r, '？']);
      era.drawLine({ content: 'レース前' });
      await ruby.used_to_say_and_wait(
        'すべてを賭して、今この時に恩を返す。それも、立派な選択ですわ。',
      );
      await ruby.used_to_say_and_wait(
        'ですが、あなたにとって、それが本当に最善なのでしょう？',
      );
      await ruby.used_to_say_and_wait(
        'あなたがすべてを捧げたあと、あの人たちは報いを得られるのでしょう？',
      );
      await miracle.used_to_say_and_wait('こんな時に……');
      await ruby.used_to_say_and_wait(
        '限界が近い『今』だけを考えるのは、わたくしは好みませんわ。',
      );
      await ruby.used_to_say_and_wait([
        'わたくしは……',
        callname,
        ' のおかげで。',
      ]);
      await ruby.used_to_say_and_wait(
        '違う道を見つけましたわ。新たな使命と、さらに先の未来を。',
      );
      await ruby.used_to_say_and_wait(
        'その道を成し遂げることこそが、与えられたものへの報いですわ。',
      );
      await ruby.used_to_say_and_wait('わたくしの、愛情ですわ。');
      era.drawLine({ content: '再びレースへ' });
      await ruby.say_and_wait('はあっ——！');
      await miracle.say_and_wait('！');
      await miracle.say_and_wait('どうして、そんな走り……');
      await miracle.say_and_wait('わたしも、みんなのために……');
      await you.say_as_passer_by_and_wait('実況', [
        miracle.get_colored_name(),
        '、失速！ いま先頭は——',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        ruby.get_colored_name(),
        '！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        ruby.get_colored_name(),
        '、なんという絢爛で凄絶な末脚！',
      ]);
      era.printButton(`「行け、ルビー。」`, 1);
      await era.input();
      await ruby.say_and_wait('……——');
      await you.say_as_passer_by_and_wait('実況', [
        '勝者は ',
        ruby.get_colored_name(),
        '！ 圧倒的な速さで示した、華麗一族の、',
        ruby.get_colored_name(),
        '！',
      ]);
      era.drawLine({ content: '選手通路' });
      await miracle.say_and_wait(['……', m_call_r, '。']);
      await ruby.say_and_wait([call_93, '。']);
      await miracle.say_and_wait('おめでとう。本当に、すごくかっこよかった。');
      await miracle.say_and_wait(
        'わたし、今日で終わりでもいいって、本気で思ってた。',
      );
      await miracle.say_and_wait(
        '長くは走れないって分かってたから、今だけなら……全部賭けるって。',
      );
      await ruby.say_and_wait('……');
      await miracle.say_and_wait('でも。');
      await miracle.say_and_wait(
        'あなたの走りが、まぶしすぎた。わたしにも、まだできることがある気がした。',
      );
      await miracle.say_and_wait(
        'レースを続けて、みんなに未来を見せる。あなたの優しさに応える。',
      );
      await ruby.say_and_wait('……！');
      await miracle.say_and_wait('悔しいよ。');
      await miracle.say_and_wait('でも、意外と、すっきりしてる。');
      await miracle.say_and_wait('もっと強くなる。');
      await miracle.say_and_wait(
        'この速さに体を合わせて鍛え直して、最初からやり直す。',
      );
      await miracle.say_and_wait('もう、自分を壊したりしない。');
      await ruby.say_and_wait([call_93, '……']);
      await miracle.say_and_wait(['たぶん、', swan_sta, ' を選ぶと思う。']);
      await ruby.say_and_wait(['……', callname, ' と相談いたしますわ。']);
    };
    f.title = title;
    return f;
  })(),
  before_swan_sta_s: (() => {
    const title = 'スワンステークス前';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} miracle ケイエスミラクル
     * @param {PrintedSpan} m_call_r ケイエスミラクルがダイイチルビーを呼ぶ呼称
     * @param {PrintedSpan} swan_sta スワンステークス（着色名）
     */
    const f = async (ruby, miracle, m_call_r, swan_sta) => {
      await miracle.say_and_wait([m_call_r, '……来てくれたんだ。']);
      await ruby.say_and_wait(
        'ご指名いただきましたので、考えてまいりましたわ。',
      );
      await era.printAndWait([
        swan_sta,
        '……',
        miracle.get_colored_name(),
        ' の誘いを受け、',
        ruby.get_colored_name(),
        ' はこのレースへ出走を決めた。',
      ]);
      await miracle.say_and_wait(
        'ありがとう。こんなに早く、また一緒に走れるなんて。',
      );
      await ruby.say_and_wait('……お体は、差し支えありませんわね？');
      await miracle.say_and_wait('うん、もう大丈夫。');
      await miracle.say_and_wait(
        '前は速さだけを考えて、ずっと自分を無理させてた……',
      );
      await miracle.say_and_wait(
        '今のわたしは、今の自分で出せる最良の状態を目指して、方針を変えたの。',
      );
      await miracle.say_and_wait(
        '——それでも、今のわたしは、前より速く走れる自信がある。',
      );
      await miracle.say_and_wait('あなたより速く。');
      await ruby.say_and_wait('！');
      await miracle.say_and_wait('宣言どおり、強くなったよ。——勝負して。');
      await era.printAndWait([
        miracle.get_colored_name(),
        ' は微笑んだ。柔らかな笑みだが、',
        ruby.sex,
        'の気配と姿勢からは、確かな自信が伝わってきた。',
      ]);
      await ruby.say_and_wait('ご機嫌、大変よろしいようですわ。', true);
      await miracle.say_and_wait('こちらこそ、よろしく。');
    };
    f.title = title;
    return f;
  })(),
  swan_sta_win_s: (() => {
    const title = '点火';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} miracle ケイエスミラクル
     * @param {PrintedSpan} call_93 ダイイチルビーがケイエスミラクルを呼ぶ呼称
     * @param {PrintedSpan} mile_cha マイルチャンピオンシップ（着色名）
     */
    const f = async (ruby, miracle, call_93, mile_cha) => {
      await ruby.say_and_wait('やはり、皆様は手強いですわ。それに——');
      await ruby.say_and_wait([
        call_93,
        '……たしかに、以前より強くなりましたわ。',
      ]);
      await ruby.say_and_wait([
        mile_cha,
        ' で圧倒的な勝利を収めるには、わたくしも今より強くならねばなりませんわ。',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('ふ〜ん');
      await era.printAndWait([
        '傍らで ',
        miracle.get_colored_name(),
        ' を引き留め、わいわいしている ',
        miracle.get_colored_name(),
        ' を見て、',
        ruby.get_colored_name(),
        ' は会心の微笑を浮かべた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_43: (() => {
    const title = '「華麗一族」のトレーナー';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        'トレーニング場の傍ら、休憩中の ',
        ruby.get_colored_name(),
        ' が突然 ',
        you.get_colored_name(),
        ' に声をかけた。',
      ]);
      await ruby.say_and_wait(
        'あなたは、いったいなぜ……『トレーナー』としての本分は……',
      );
      era.printButton('「違う。これは『わたし』の使命だ。」', 1);
      await era.input();
      await era.printAndWait([
        '「華麗」一族として、最もまぶしい輝きを示すこと。それが ',
        ruby.get_colored_name(),
        ' の夢だ。',
      ]);
      await era.printAndWait([
        ruby.uma_sex_title,
        'の夢を叶える——トレーナーの仕事の本質は、あるいはそれなのだろう。',
      ]);
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('そう、ですわね。分かりましたわ。');
      await era.printAndWait(
        '担当の浮かべた微笑は、どこか……含みのあるものだった。',
      );
    };
    f.title = title;
    return f;
  })(),
  mile_cha_win_s: (() => {
    const title = '最もまぶしい輝き';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} mother ダイイチルビーのお母様（劇情 NPC）
     */
    const f = async (ruby, mother) => {
      await era.printAndWait(
        'レース場に、いつもの喧騒はない。誰もが敬意を込めて、今日の勝者を迎えていた。',
      );
      await era.printAndWait('（パチパチパチパチ……！！）');
      await era.printAndWait(['誰もが立ち上がり、', ruby.sex, 'を称えた。']);
      await ruby.say_and_wait('皆様……');
      await era.printAndWait('（パチパチパチパチ……！！）');
      await era.printAndWait('……');
      await mother.say_and_wait('——');
      await ruby.say_and_wait('……！ お母様……', true);
      await ruby.say_and_wait(
        'お母様も、拍手を……わたくしを認めてくださいましたわ。',
      );
      await ruby.say_and_wait('ようやく……');
      era.printButton(`「おめでとう、ルビー。」`, 1);
      await era.input();
      await ruby.say_and_wait('……');
      await era.printAndWait([
        '一瞬、視線が ',
        ruby.get_colored_name(),
        ' と交わった。',
        ruby.sex,
        'はすぐ、満場の観客へ向き直った。',
      ]);
      await ruby.say_and_wait('皆様、ありがとうございますわ。');
      await ruby.say_and_wait('先ほどの走りをもって、宣言いたしますわ。');
      await ruby.say_and_wait(
        '今後は、この脚で、より大きな輝きを探してまいりますわ。',
      );
      await ruby.say_and_wait('華麗一族の、新たな象徴として……');
      await ruby.say_and_wait('わたくしのトレーナーと、ともに。');
      await era.printAndWait(
        'この日のことを、人々は後にこう語った。華麗一族の新たな象徴が、生まれたと。',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_rose_master: (() => {
    const title = '華麗なる歴史の偉業';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     */
    const f = async (ruby, you, callname) => {
      await era.printAndWait('ダイイチ家の邸宅');
      await era.printAndWait([
        '「華麗一族」。その名を聞けば、人は某かの',
        ruby.uma_sex_title,
        'を思い浮かべる……',
      ]);
      await era.printAndWait([
        '歴史に輝かしい功績を刻んだ、稀代の名',
        ruby.uma_sex_title,
        'たち……',
      ]);
      await era.printAndWait([
        ruby.couple_title,
        'の血脈を継ぎ、それをより大きな花へと咲かせた——',
      ]);
      await era.printAndWait([ruby.get_colored_name(), '。']);
      await era.printAndWait([
        ruby.sex,
        'こそ、いま「華麗一族」の象徴たる',
        ruby.uma_sex_title,
        'である。',
      ]);
      await ruby.say_and_wait('お待たせいたしましたわ。');
      await ruby.say_and_wait('すべての報告が、終わりましたわ。');
      era.printButton('「ご一族の、お気持ちは？」', 1);
      await era.input();
      await ruby.say_and_wait(
        '『その脚で、進み続けなさい』……あの方と、ともに、と。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は、三年の競走を終えた。',
      ]);
      await era.printAndWait([
        'この先のつもりを報告するため、',
        you.get_colored_name(),
        ' と ',
        ruby.get_colored_name(),
        ' は華麗一族の本家を訪れた。',
      ]);
      await era.printAndWait([
        '「己の脚で、最もまぶしい輝きを咲かせる」——',
        ruby.sex,
        'の言葉は、受け入れられたらしい。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に首を傾げた。',
      ]);
      await ruby.say_and_wait('何をなさっていますの？');
      era.printButton('「肖像画を見ていた。」（好感+5）', 1);
      era.printButton('「君を見ていた。」（恋慕+2）', 2, {
        disabled: era.get('love:85') < 75,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '初めてこの邸を訪れたとき、重圧で ',
          you.get_colored_name(),
          ' の膝は折れかけた。',
        ]);
        await era.printAndWait('今では、茶を味わうように絵を眺められる。');
        await era.printAndWait([
          'なにしろ ',
          you.get_colored_name(),
          ' も、少なからぬ貢献をした身だ。',
        ]);
        await ruby.say_and_wait([callname, '……']);
        await ruby.say_and_wait('改めて、申し述べさせていただきますわ。');
        await ruby.say_and_wait([
          'この三年、',
          you.get_colored_name(),
          ' は指導者の務めを、見事に果たされましたわ。',
        ]);
        await ruby.say_and_wait(
          'わたくしのトレーナーになるということは、絶え間ない艱難辛苦に向き合うことでしょう。',
        );
        await ruby.say_and_wait(
          'ですが、あなたは本当によく努め、成長なさいましたわ。',
        );
        await ruby.say_and_wait(
          '素晴らしいですわ。わたくしは、心から誇りに思いますわ。',
        );
        era.printButton('「こちらこそ、ありがとう。」', 1);
        await era.input();
        await ruby.say_and_wait('……');
        await ruby.say_and_wait(
          'これからわたくしは、『華麗一族』の象徴として、常に輝く存在でいねばなりませんわ。',
        );
        await ruby.say_and_wait('では、今後のつもりを相談いたしましょう？');
        era.printButton('「……」', 1);
        await era.input();
        await ruby.say_and_wait('どうなさいましたの？');
        era.printButton('「わたしで、いいのか？」', 1);
        await era.input();
        await ruby.say_and_wait('！');
        await ruby.say_and_wait('理解に苦しみますわ。');
        await ruby.say_and_wait([
          'わたくしのことは、',
          callname,
          ' の務めではございませんの？',
        ]);
        await ruby.say_and_wait('でしたら、早く。時間は限りがありますわ。');
        await ruby.say_and_wait('それに……');
        await ruby.say_and_wait(
          'わたくしの肖像の隣に、あなたがいらっしゃらなければ、困りますわ……',
        );
        await era.printAndWait(
          'この先も、多くの課題が待っている。どうか、忘れないでほしい。',
        );
      } else {
        await ruby.say_and_wait('……');
        await ruby.say_and_wait('抱いて。');
        await era.printAndWait([
          you.get_colored_name(),
          ' は言われるまま、',
          ruby.get_colored_name(),
          ' の小さな体を抱き上げた。',
        ]);
        await ruby.say_and_wait('……ええ。');
        await ruby.say_and_wait('そのときは、こうして写真を撮りましょう。');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_rest_day: (() => {
    const title = '優雅な空気は、変わらない';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        'レース場にいなくても、',
        ruby.get_colored_name(),
        ' の優雅な空気は変わらない',
      ]);
      era.printButton(`「ルビー、今日はご一族の用事はないのか？」`, 1);
      await era.input();
      await ruby.say_and_wait('ええ、せっかくの休日ですわ。');
      await ruby.say_and_wait(
        '何もせず時間を浪費するのは愚かですわ。ですから、勉学に励んでおりますわ。',
      );
      await era.printAndWait([
        'さすがは',
        ruby.sex,
        '……だが、',
        you.get_colored_name(),
        ' は違和感を覚えた。',
      ]);
      await era.printAndWait(
        '机に積み上がっているのは雑誌のようなもので、とても学習用の書物とは思えなかった。',
      );
      await ruby.say_and_wait('気になりますのね。');
      await era.printAndWait([
        'それから ',
        ruby.get_colored_name(),
        ' は本を閉じ、表紙を ',
        you.get_colored_name(),
        ' に見せた。',
      ]);
      await era.printAndWait('『奥さまクラブ』');
      await era.printAndWait(
        '大々しくこう書いてある。「出産の備えを始めるなら、必読！」',
      );
      await ruby.say_and_wait(
        'これ以外にも、『母の友』、『マミーベイビー』……情報誌はすべて揃えてありますわ。',
      );
      await era.printAndWait([ruby.sex, 'の表情は、やや得意げだった。']);
      await era.printAndWait('しかも、何冊もの頁に付箋がびっしりだ。');
      await ruby.say_and_wait(
        '遠からず、あなたにもこの知識が要る日が来るでしょう。',
      );
      await ruby.say_and_wait(
        'でしたら、早めに身につけておくのも悪くありませんわ？',
      );
      await ruby.say_and_wait(
        'わたくしが肝要と思う箇所を選んでありますわ。まずはそこからご覧なさい。',
      );
      era.printButton('……仰せのままに。', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  os_wait_station: (() => {
    const title = '待ち合わせ';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait([
        '駅前で、',
        you.get_colored_name(),
        ' は私服姿の',
        ruby.teen_sex_title,
        'に微笑んで挨拶した。',
      ]);
      await era.printAndWait([
        '約束の時刻まで十数分ある。どうやら ',
        ruby.get_colored_name(),
        ' は、すでにしばらく待っていたらしい。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はざっと目を走らせた。',
      ]);
      await era.printAndWait([
        ruby.get_colored_name(),
        ' のラウンドネックは、精緻で誘う鎖骨を大方に見せていた。',
      ]);
      await era.printAndWait(
        '下はロングスカートで、ウエストは上衣の中。全体の気配が、ゆったりとしていた。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' が自分を眺めているのに気づき、耳元の髪をすくった。',
      ]);
      await ruby.say_and_wait('おかしいですの？');
      era.printButton('「もちろん、可愛い。」', 1);
      era.printButton('「清々しくて、綺麗だ。」', 2);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        ruby.get_colored_name(),
        ' は、周囲の人目をいくつか集めた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、「成金が未成年の',
        ruby.teen_sex_title,
        'を囲っている」ような視線に、少々閉口した。幸い、',
        ruby.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' の手を引き、車内へ入った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_station: (() => {
    const title = '赤ちゃん本舗';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await you.say_and_wait('それで、ここはどういう店だ？');
      await ruby.say_and_wait('ええ、赤ちゃん本舗ですわ。');
      await era.printAndWait(
        '周囲には、腹がわずかに張った女性や、子どもを抱いて歩く夫婦などがいた。',
      );
      await era.printAndWait([
        'こちらの店には、そちらの方が似つかわしい客だ。',
      ]);
      await era.printAndWait([
        'ここで、',
        you.get_colored_name(),
        ' と ',
        ruby.get_colored_name(),
        ' の存在は、明らかに異質だった。',
      ]);
      await ruby.say_and_wait('書物から得られる知識には、限りがありますわ。');
      await ruby.say_and_wait('実地に見て、知識を深めたく思いますわ。');
      await you.say_as_passer_by_and_wait('通行人A', [
        'ねえ、あれって ',
        ruby.get_colored_name(),
        ' じゃない？',
      ]);
      await you.say_as_passer_by_and_wait(
        '通行人B',
        'マジか……あの華麗一族が、なんでこんなとこに？',
      );
      await you.say_as_passer_by_and_wait(
        '通行人C',
        '隣はトレーナーだろ。二人であの店って、まさかそういう関係？',
      );
      await era.printAndWait([
        'やはり目立つ。言うまでもなく、',
        you.get_colored_name(),
        ' と担当の身分はバレていた。',
      ]);
      await ruby.say_and_wait(
        'ただ訪れただけでも場違いですわ。お力をお貸しくださいまし。',
      );
      era.printButton('手を差し出す。', 1);
      await era.input();
      await era.printAndWait([
        'そうして ',
        ruby.get_colored_name(),
        ' は、その手をしっかり抱きしめた。',
      ]);
      await era.printAndWait(
        'こうしていれば、ここにいても違和感はないはずだ。',
      );
      await you.say_as_passer_by_and_wait(
        '通行人A',
        'やっぱり二人は、そういう関係だったんだ……',
      );
      await you.say_as_passer_by_and_wait('通行人B', [
        '本当？ じゃあ、',
        ruby.get_colored_name(),
        ' のお腹はもう！？',
      ]);
      await you.say_as_passer_by_and_wait('通行人C', 'それ、犯罪じゃない！？');
      await era.printAndWait([
        'その後、',
        you.get_colored_name(),
        ' と ',
        ruby.get_colored_name(),
        ' は周囲のさまざまな声に包まれながら、母子用品店をしばらく回った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_shopping_together: (() => {
    const title = '一緒に商店へ';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ruby, you) => {
      await era.printAndWait(
        '商店の看板は屋根の上に並び、人々が蜂のように出入りしていた。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        ruby.get_colored_name(),
        ' の手を引き、賑やかな通りを歩きながら、学園へ戻るかホテルへ行くか考えていた。',
      ]);
      await era.printAndWait(
        '自分では答えが出ない。ならば、愛馬の意思を見よう。',
      );
      if (era.get('relation:85:0') > 150) {
        era.printButton('「抱くか、おぶるか？」', 1);
        await era.input();
        await ruby.say_and_wait('……おんぶして。');
        await era.printAndWait([you.get_colored_name(), ' は喜んで応じた。']);
        await era.printAndWait([
          'まだ未成年で、小柄な ',
          ruby.get_colored_name(),
          ' は、容易におぶえた。',
        ]);
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の背に寄り、首を傾げて ',
          you.get_colored_name(),
          ' の横顔を見た。',
        ]);
        await era.printAndWait('言葉はない。');
        await era.printAndWait('表情さえ、変わらない。');
        await era.printAndWait(
          'ただ、その美しい瞳に、限りない柔情が満ちていた。',
        );
      } else {
        await era.printAndWait([
          ruby.get_colored_name(),
          ' は少し心を動かされたが、最後は学園へ戻ると言った。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  os_hot_spring_event: (() => {
    const title = '温泉旅行';
    /**
     * @param {CharaTalk} ruby ダイイチルビー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ダイイチルビーがプレイヤーを呼ぶ呼称
     * @param {boolean} has_ticket 温泉旅行券を引いたか
     * @param {number} ticket_date 温泉旅行券を引いた時期
     */
    const f = async (ruby, you, callname, has_ticket, ticket_date) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        ruby.get_colored_name(),
        ' がさまざまなレースを勝ち抜いた、ある日のこと——',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が手帳を開いて用事を確かめていたとき、見覚えのあるものが床へ落ちた。',
      ]);
      await era.printAndWait('拾ってみると、温泉旅行券だった。');
      if (has_ticket) {
        await ruby.say_and_wait([
          ticket_date < 2
            ? 'シニア級に入ったばかりの頃'
            : ticket_date < 5
              ? '去年の春'
              : ticket_date < 9
                ? '去年の夏'
                : ticket_date < 11
                  ? '去年の秋'
                  : '先月',
          '、商店街の抽選で当たったものですわね。',
        ]);
        await era.printAndWait([
          'あのとき ',
          you.get_colored_name(),
          ' は「自分が ',
          ruby.get_colored_name(),
          ' と同じくらい立派な存在になってから、一緒に使おう」と言った。',
        ]);
        await ruby.say_and_wait(
          '今、再びわたくしたちの前に現れたということは、その時ですわ。',
        );
        await ruby.say_and_wait(
          '近頃、大きなレースもありませんわ。旅行に参りましょう？',
        );
        era.printButton('「約束は、まだ果たしていない。」', 1);
        await era.input();
      } else {
        await ruby.say_and_wait([
          callname,
          ' は、温泉旅行券をお持ちでしたの？',
        ]);
        await you.say_and_wait('まあ……縁があってな。');
        await you.say_and_wait('近頃、大きなレースもない。旅行に行かないか？');
      }
      await ruby.say_and_wait('……');
      await ruby.say_and_wait('少々、失礼いたしますわ。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は振り返り、携帯を取り出した。',
      ]);
      await ruby.say_and_wait(
        'ええ、わたくしですわ。今すぐ、車を学園まで回してくださいまし。',
      );
      era.printButton(`「ルビー？？？」`, 1);
      await era.input();
      await ruby.say_and_wait('では——いらしてくださいまし。');
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を、その温泉旅行券が使える宿へ連れていった。',
      ]);
      await ruby.say_and_wait(
        '近頃、あなたはずっとお仕事で、休んでいらっしゃいませんわ。わたくし、すべて見ておりますわ。',
      );
      await ruby.say_and_wait(
        'この機会に気分を切り替え、英気を養っていただきたいですわ。',
      );
      await ruby.say_and_wait('では、わたくしは先に失礼いたしますわ。');
      era.printButton('ずっと頑張ってくれた君にこそ、休みが必要だ。', 1);
      era.printButton('君の方が、休むべきだ。', 2);
      await era.input();
      await ruby.say_and_wait('ふう……');
      await ruby.say_and_wait('今回は、あなたの仰るとおりにいたしますわ。');
      era.drawLine({ content: '温泉のあと' });
      era.printButton('ところで、なぜ残ると言ってくれたんだ？', 1);
      await era.input();
      await ruby.say_and_wait('気まぐれですわ。');
      era.printButton('本当か？', 1);
      await era.input();
      await ruby.say_and_wait(
        'わたくしが気まぐれで決めたことが、それほど不思議ですの？',
      );
      era.printButton('そうだ。', 1);
      await era.input();
      await ruby.say_and_wait(
        'そのときは、あまり考えておりませんでしたわ。ですが、あなたの言葉を聞いて……',
      );
      await ruby.say_and_wait(
        '残ってお傍にいた方がよいと思い、お受けした……それだけですわ。',
      );
      await era.printAndWait([
        ruby.get_colored_name(),
        ' は、それ以上は言わなかった。言うつもりもないらしい。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' には、それで十分だった。',
      ]);
      era.printButton(`「ありがとう、ルビー。」`, 1);
      await era.input();
      await ruby.say_and_wait('感謝されるほどのことは、しておりませんわ。');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' の部屋で、',
        ruby.get_colored_name(),
        ' とのかけがえのない絆を味わうことにした……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ...require('#/i18n/ja-JP/kojo/108500-Daiichi-Ruby/edu-85-be-ntr'),
};
