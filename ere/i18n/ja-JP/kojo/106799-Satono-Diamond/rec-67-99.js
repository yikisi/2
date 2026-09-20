/**
 * @file サトノダイヤモンド - 募集
 * @author 某知名手游公司编剧
 * @author 黑奴二号（改编）
 * @author 黑奴队长（修订）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} daiya
   * @param {CharaTalk} kita
   * @param {CharaTalk} you
   */
  async rec_playground(daiya, kita, you) {
    const ret = [];
    await era.printAndWait(
      `中堅トレーナーA「ついに……『${daiya.sex}』が模擬レースへ出るんだ。年明け早々、間違いなく騒ぎになるぞ！」`,
    );
    await era.printAndWait(
      '──正月休み明け。体育館で開かれたトレーナー会議では、同僚たちがざわついていた。',
    );
    await era.printAndWait([
      'そう、明日はいよいよ『あの',
      daiya.sex_code === 1 ? '若様' : 'お嬢様',
      '』が模擬レースに出走する日だ。果たして誰が',
      daiya.sex,
      'のトレーナーになるのか……？',
    ]);
    await daiya.say_and_wait(
      '本日はよろしくお願いいたしますわ。それから……キタちゃんも、来てくださってありがとうございますわ♪',
    );
    await kita.say_and_wait(
      'へへへっ！ ダイヤの初お披露目だもんな、来ないわけないだろ！',
    );
    await kita.say_and_wait(
      '先にデビューした姉貴分として、なんでも聞いてくれよな！',
    );
    await daiya.say_and_wait(
      'ふふ、手加減してくださいませ……と言いたいところですけれど。キタちゃんはレースでは一度も手加減してくれませんでしたわよね？',
    );
    await kita.say_and_wait(
      'うん！ 走るときはいつも本気だよ！ 相手がダイヤなら、なおさらね！',
    );
    await era.printAndWait([
      '本日の主役は、名高いサトノグループの',
      daiya.sex_code === 1 ? '若様' : 'お嬢様',
      '、',
      daiya.get_colored_name(),
      '。そして最有力の相手は、',
      daiya.sex,
      'の面倒見のいい親友、',
      kita.get_colored_name(),
      '。',
    ]);
    await era.printAndWait(
      'サトノダイヤモンドの才能は、いかほどか。レースの幕が上がる。',
    );
    await kita.say_and_wait(
      'うおおおおおっ！ よし、火力全開のぶちかまし成功だ！ このまま先頭で押し切るぞ！',
      true,
    );
    await kita.say_and_wait(
      `でも……ダイヤ${daiya.sex}なら、追いついてくるはずだ。だって${daiya.sex}は、いつもアタシの後ろを追ってきてたんだから！`,
      true,
    );
    await daiya.say_and_wait(
      'こんなに離されてしまいましたわ！？ さすがキタちゃん……',
      true,
    );
    await daiya.say_and_wait(
      'それに、まわりの選手が寄ってきますわ……んっ、わざと詰ませてくるのですか！？ うぅ、左右も前方も塞がれて……でも……！',
      true,
    );
    await daiya.print_and_wait(
      '（幼いダイヤ「お父様、お母様。ダイヤ、約束いたしますわ。サトノ家の夢、必ず叶えてみせます！」）',
    );
    await daiya.say_and_wait(
      'この日のために、ずっと準備してきましたわ。たくさんの先生に学び、研究し、たくさんの──期待を背負って！',
      true,
    );
    await daiya.say_and_wait(
      'まだ、耐えますわ。時機はまだ……スパートしたい、前へ出たい……でも、冷静に流れを見極めて……',
      true,
    );
    await kita.say_and_wait(
      'よし、最後のカーブだ……！ ちょっと飛ばしすぎたかな？ 自分のペースでここまで来たし、ダイヤでも……',
      true,
    );
    await daiya.say_and_wait(
      `──！！ ${kita.sex}のスピードが落ちましたわ！ 今です──！！`,
      true,
    );
    await daiya.say_and_wait('やああああああああああああああ！！');
    await kita.say_and_wait('なにっ？ えええええええっ！？');
    await era.printAndWait('トレーナーたち「うおおおおおおおおおおお！！」');
    await era.printAndWait(
      `中堅トレーナーA「ハナ差で……キタサンブラックを差し切った！？ まだ正式デビュー前だぞ。${daiya.sex}、やっぱり大したもんだ！」`,
    );
    await era.printAndWait(
      '新人トレーナーA「まさにダイヤモンド級の逸材……！ ぜ、ぜひ契約を……！」',
    );
    await daiya.say_and_wait(
      'あら、ど、どうなさいましたの？ こんなに人が集まって……キタちゃん？',
    );
    await kita.say_and_wait(
      'どうしたもこうしたもないだろ、みんなダイヤのトレーナーになりたがってるんだよ！ はあ──主役の座、ぜんぶ持ってかれた。嬉しいのか悔しいのかわかんないよ～',
    );
    await daiya.say_and_wait(
      '私のトレーナーに、なりたい方々……！ そうでしたのね！ こんなにたくさんの方が、私のレースを見てくださっていたなんて。',
    );
    await daiya.say_and_wait(
      '──光栄ですわ。ありがとうございます。私、もっと精進しなくてはなりませんわね。',
    );
    await era.printAndWait(
      `${daiya.sex}の走りは、実に見事だった。攻め時を正確に掴み、爆発力という持ち味を正しく重ねて……`,
    );
    await era.printAndWait(
      '天賦と英才教育が結実した、と言っていい。エリート特有の脆さも見えたが……弱点すら、伸びしろに見える。',
    );
    await kita.say_and_wait(
      'あ、アンタもトレーナーだろ？ すごく食い入るように見てたけど、ダイヤ、すごかっただろ？',
    );
    await kita.say_and_wait(
      `小さい頃から足は速かったけど、最近はもっとキレが出てきたんだ！ アタシは${daiya.sex}、すごく推してるよ。`,
    );
    await kita.say_and_wait('どうだ、試しに声かけてみないか？');
    era.printButton('行ってみよう', 1);
    era.printButton('やめておこう', 2);
    ret.push(await era.input());
    if (ret[0] === 1) {
      await daiya.say_and_wait(
        'あら？ さっきキタちゃんとスタンドで楽しそうにお話しされていた方……？',
        true,
      );
      await daiya.say_and_wait(
        '何か、おっしゃりたいことがあるようですわ……',
        true,
      );
      await daiya.say_and_wait(
        'トレーナーさん、お願いいたしますわ。私の走りを、どうご覧になりましたか？',
      );
      await era.printAndWait(
        `${you.name} が答えを拒むのは、あまりに失礼だ。まず${daiya.sex}の才能をありのままに称え──次に、これから乗り越えるべき課題を伝えた。`,
      );
      era.printButton('「まず、本気で人と競った経験が足りない」', 1);
      await era.input();
      await daiya.say_and_wait('本気で競う……？ それは、どのような……？');
      await you.say_and_wait(
        'レース中、まわりからの圧に、戸惑っていたんじゃないか？',
      );
      await daiya.say_and_wait(
        'ああ、模擬レースのとき……確かに迷いがありましたわ。初めて味わう、マークされる焦り。思うように力を出せない感じがしました。',
      );
      await daiya.say_and_wait(
        'でも私、小さい頃から一緒にトレーニングする方々へ、『併走では絶対に手加減しないでください』とお願いしてきましたの。',
      );
      await you.say_and_wait('それでも、みんな遠慮していたはずだ');
      await daiya.say_and_wait(
        'そ、そうでしたの……！ 考えたこともありませんでしたわ……！ だから他の選手から圧を感じたのですね……！',
      );
      await you.say_and_wait('もうひとつ。君は、冷静さを失いやすい');
      await daiya.say_and_wait(
        'えっ……冷静さを？ そんなことを言われたのは初めてですわ……どういうことでしょう？',
      );
      await era.printAndWait(
        `${you.name} は、レースで見たことを${daiya.sex}に伝える。中盤、まだ耐えるべき場面で、隣の選手との競り合いでペースが上がっていた。`,
      );
      await era.printAndWait(
        `それが、冷静さを失った証だ。お嬢様の仮面の下に隠れた、${daiya.sex}のいちばん正直な気質。`,
      );
      await daiya.say_and_wait(
        '──！？ あのとき確かに、もっと前へ出たくて、脚がうずいていましたわ……',
      );
      await daiya.say_and_wait(
        'でも、すぐに堪えました。堪えたつもりでしたのに……ほんの一瞬のペースアップを、あなたは……',
      );
      await daiya.say_and_wait(
        'あなたは……一体、どなたですの？ たった一場のレースで、私の状態をそこまで……',
      );
      await you.say_and_wait('それだけ、君の走りに心を奪われたんだ');
      await era.printAndWait(
        `心を奪われたからこそ、長所も短所も一瞬で見えた。${you.name} は${daiya.sex}の家のことは知らない。それでも、${daiya.sex}の本質は見抜いていた。`,
      );
      await daiya.say_and_wait('──合格ですわ。');
      era.printButton('「……え？」', 1);
      await era.input();
      await daiya.say_and_wait(
        '合格ですわ！ あなたが……あなたが私のトレーナーです！ ずっと探していた、唯一の方。だから、合格ですわ！',
      );
      await kita.say_and_wait(
        'ちょ、ちょっと待って……ダイヤんちは、選考でトレーナーを決めるんだぞ？',
      );
      await daiya.say_and_wait(
        'いいえ、決めましたわ。キタちゃんに諭されても、このことだけは、絶対に変えません。',
      );
      await daiya.say_and_wait(
        `私のトレーナーは${you.sex}ですわ！ ${you.sex}にしか務まりません。本来なら慎重に相談すべきことですが──`,
      );
      await daiya.say_and_wait(
        '一族すべての同意が要る──それも呪いですわ。なら直感を信じて、この呪いを解きます！ 誰が何と言おうと、あなたが私のトレーナーですわ！',
      );
      await daiya.say_and_wait(
        '決まりですわ。もう決めてしまいましたの。引き受けてくださいますわよね？ そうですわよね？ ね？',
      );
      await era.printAndWait(
        `おしとやかなお嬢様の印象とは裏腹に、${daiya.sex}の態度は揺るがない。${you.name} が頷くまで、サトノダイヤモンドは ${you.name} の手を離そうとしなかった。`,
      );
      era.println();
      await era.printAndWait(
        'こうして、君とサトノダイヤモンドの三年が始まった！',
        {
          color: daiya.color,
          fontSize: '1.5rem',
        },
      );
    } else {
      await era.printAndWait(
        `${you.name} は遠くのサトノダイヤモンドを眺めながら、${daiya.sex}の親友キタサンの熱い推薦を聞く。最上の逸材。将来は無限に広がっている。だが……`,
      );
      await era.printAndWait(
        `──同時に、高嶺の花でもある。大財団の${daiya.sex_code === 1 ? '若様' : 'お嬢様'}だ。並のトレーナーが情熱だけで安易に近づける相手ではない。`,
      );
      await daiya.say_and_wait(
        `あら？ キタちゃんとスタンドで楽しそうにお話しされていた方、${you.sex}は……`,
        true,
      );
      await daiya.say_and_wait(
        `様子ですと……こちらへ来るおつもりはなさそう？ でも何かおっしゃりたいようで、それに${you.sex}の空気が、どこか違いますわ……`,
        true,
      );
      await era.printAndWait(
        '教官A「よし、ここまで！ 一旦切り上げるぞ、諸君。サトノダイヤモンドの契約トレーナーについては……」',
      );
      await era.printAndWait(
        '教官A「選抜のあと、サトノグループ自らがトレーナー選考を開く。関心のある者は、ぜひ参加するように。」',
      );
      await kita.say_and_wait(
        'そ、そうなんだ……ダイヤんちは、選考でトレーナーを決めるんだよ。トレーナー、アンタも出るよな？',
      );
      era.printButton('参加しよう', 1);
      era.printButton('やめておこう', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(
          `迷いすぎたせいか、${you.name} の番は最後に回されていた`,
        );
        await era.printAndWait(
          'サトノグループの審査員「次は申し込み番号No.29。最後の選考者、どうぞ。」',
        );
        await daiya.say_and_wait(
          'あら？ 以前キタちゃんとスタンドで楽しそうにお話しされていた方……？',
          true,
        );
        await daiya.say_and_wait(
          'トレーナーさん、お願いいたしますわ。私の走りを、どうご覧になりましたか？',
        );
        await era.printAndWait(
          `${you.name} はまず${daiya.sex}の才能をありのままに称え──次に、これから乗り越えるべき課題を伝えた。`,
        );
        era.printButton('「まず、本気で人と競った経験が足りない」', 1);
        await era.input();
        await daiya.say_and_wait('本気で競う……？ それは、どのような……？');
        await you.say_and_wait(
          'レース中、まわりからの圧に、戸惑っていたんじゃないか？',
        );
        await daiya.say_and_wait(
          'ああ、模擬レースのとき……確かに迷いがありましたわ。初めて味わう、マークされる焦り。思うように力を出せない感じがしました。',
        );
        await daiya.say_and_wait(
          'でも私、小さい頃から一緒にトレーニングする方々へ、『併走では絶対に手加減しないでください』とお願いしてきましたの。',
        );
        await you.say_and_wait('それでも、みんな遠慮していたはずだ');
        await daiya.say_and_wait(
          'そ、そうでしたの……！ 考えたこともありませんでしたわ……！ だから他の選手から圧を感じたのですね……！',
        );
        await you.say_and_wait('もうひとつ。君は、冷静さを失いやすい');
        await daiya.say_and_wait(
          'えっ……冷静さを？ そんなことを言われたのは初めてですわ……どういうことでしょう？',
        );
        await era.printAndWait(
          `${you.name} は、レースで見たことを${daiya.sex}に伝える。中盤、まだ耐えるべき場面で、隣の選手との競り合いでペースが上がっていた。`,
        );
        await era.printAndWait(
          `それが、冷静さを失った証だ。お嬢様の仮面の下に隠れた、${daiya.sex}のいちばん正直な気質。`,
        );
        await daiya.say_and_wait(
          '──！？ あのとき確かに、もっと前へ出たくて、脚がうずいていましたわ……',
        );
        await daiya.say_and_wait(
          'でも、すぐに堪えました。堪えたつもりでしたのに……ほんの一瞬のペースアップを、あなたは……',
        );
        await daiya.say_and_wait(
          'あなたは……一体、どなたですの？ たった一場のレースで、私の状態をそこまで……',
        );
        await you.say_and_wait('それだけ、君の走りに心を奪われたんだ');
        await era.printAndWait(
          `心を奪われたからこそ、長所も短所も一瞬で見えた。${you.name} は${daiya.sex}の家のことは知らない。それでも、${daiya.sex}の本質は見抜いていた。`,
        );
        await daiya.say_and_wait('──合格ですわ。');
        era.printButton('「……え？」', 1);
        await era.input();
        await daiya.say_and_wait(
          '合格ですわ！ あなたが……あなたが私のトレーナーです！ ずっと探していた、唯一の方。だから、合格ですわ！',
        );
        await daiya.say_and_wait(
          `私のトレーナーは${you.sex}ですわ！ ${you.sex}にしか務まりません。本来なら慎重に相談すべきことですが──`,
        );
        await daiya.say_and_wait(
          '一族すべての同意が要る──それも呪いですわ。なら直感を信じて、この呪いを解きます！ 誰が何と言おうと、あなたが私のトレーナーですわ！',
        );
        await daiya.say_and_wait(
          '決まりですわ。もう決めてしまいましたの。引き受けてくださいますわよね？ そうですわよね？ ね？',
        );
        await era.printAndWait(
          `おしとやかなお嬢様の印象とは裏腹に、${daiya.sex}の態度は揺るがない。${you.name} が頷くまで、サトノダイヤモンドは ${you.name} の手を離そうとしなかった。`,
        );
        era.println();
        await era.printAndWait(
          'こうして、君とサトノダイヤモンドの三年が始まった！',
          {
            color: daiya.color,
            fontSize: '1.5rem',
          },
        );
      } else {
        await kita.say_and_wait('えっ……？ トレーナー？');
        await era.printAndWait(
          'よく考えた末……選考には出ないことにした。──自分では、釣り合わない。',
        );
        await era.printAndWait(
          'サトノグループの審査員「次は申し込み番号No.28。最後の選考者、どうぞ。」',
        );
        await daiya.say_and_wait('ええ……この方が最後……つまり……', true);
        await daiya.say_and_wait(
          'あのときのトレーナーさんは、来られなかったのですね。何かおっしゃりたそうだった方……どうして……',
          true,
        );
      }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} daiya
   * @param {CharaTalk} you
   */
  async try_out(daiya, you) {
    era.setVerticalAlign('middle');
    era.printInColRows(
      {
        columns: [],
        config: { width: 2 },
      },
      {
        columns: [
          {
            config: {
              fontSize: '1.75rem',
              fontWeight: 'bold',
            },
            content: '？？？',
            type: 'text',
          },
          {
            config: { color: daiya.color, fontSize: '0.75rem' },
            content: '？？？',
            type: 'text',
          },
        ],
        config: { width: 16, verticalAlign: 'middle' },
      },
    );
    era.setVerticalAlign('top');
    era.println();
    await era.printAndWait(`${you.name} は、何か声を聞いた気がした…………`);
    await daiya.say_as_unknown_and_wait(
      'トレーナーさん、あなたは 絶 対 に 逃 げ ら れ ま せ ん わ？',
    );
  },
  rec_out: (() => {
    const title = '私服パーティー';
    /**
     * @param {CharaTalk} daiya
     * @param {CharaTalk} mcqueen
     * @param {CharaTalk} kita
     * @param {CharaTalk} you
     */
    const f = async (daiya, mcqueen, kita, you) => {
      const ret = [];
      await era.printAndWait(
        `ある日の体育館。メジロ家を代表する${mcqueen.uma_sex_title}のひとり──メジロマックイーンが、声明を述べていた。`,
      );
      await mcqueen.say_and_wait(
        '在校生の皆様、ならびに日頃お世話になっておりますトレーナーの皆様。本日、メジロ家よりご報告がございます。',
      );
      await mcqueen.say_and_wait(
        '近々、メジロ家にて親睦を深めるパーティーを開きます。私服で、お気軽にご参加くださいませ。',
      );
      await era.printAndWait(
        '新人トレーナーA「おお～、メジロ家主催の私服パーティーか。よくイベントを開いてくれるよな、ありがたい。お前も行くだろ？」',
      );
      era.printButton('「ええ、行くつもりだ……」', 1);
      era.printButton('「遠慮しておく」', 2);
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(
          '新人トレーナーA「じゃあ会場で会おう。あ、そうだ、知ってるか？ この前のサトノダイヤモンドのトレーナー選考の結果……」',
        );
        await era.printAndWait(
          '新人トレーナーA「──誰も選ばれなかったらしい。これからどうするつもりなんだろな。」',
        );
        await era.printAndWait(
          `パーティー当日。${you.name} は会場で、みんなで遊ぶのに夢中なサトノダイヤモンドとキタサンブラックを見かけた。`,
        );
        await kita.say_and_wait(
          'ええっ、オセロって四隅取られたら負けだろ？ なのにダイヤ、なんでそこ置くんだよ！？',
        );
        await daiya.say_and_wait(
          'ええ、四隅を取られたら負け、ですわね。みんながそう思うのなら──',
        );
        await daiya.say_and_wait(
          'この呪い、解いてみせますわ！ この言い伝えを破って、勝ち残ります！',
        );
        await kita.say_and_wait(
          'うわ、始まった！ ダイヤの呪い解きモード！ このモードに入ったら──',
        );
        await era.printAndWait(
          `対局の結果──サトノダイヤモンドの圧勝だった。${you.name} は、おしとやかなお嬢様とは違う${daiya.sex}の顔を見た。`,
        );
        await era.printAndWait(
          `呪い──迷信めいたものに出会うと、解きたくなるらしい。${you.name} が${daiya.sex}の気質を思案していると──`,
        );
        await daiya.say_and_wait(
          'あの……少しよろしいでしょうか。レース場で、お会いしましたわよね？',
        );
        era.printButton('「サトノダイヤモンド……？」', 1);
        await era.input();
        await daiya.say_and_wait(
          'あのとき、私の模擬レースを見てくださいましたわよね？ その……少し、伺いたいことがありまして～',
        );
        await daiya.say_and_wait(
          'トレーナー選考、どうしていらっしゃらなかったのですか？ ご関心がおありだと、思っておりましたのに……',
        );
        await daiya.say_and_wait(
          '私の、どこがご期待に沿わなかったのでしょう？ ……資質が足りないと、お感じになりましたの？',
        );
        await you.say_and_wait('そんなことはない。だって……！');
        await era.printAndWait(
          `${you.name} は、胸の内をこぼしてしまった。${daiya.sex}の資質は素晴らしい。だが自分は平凡なトレーナーで、分不相応だと思っていた。`,
        );
        await daiya.say_and_wait('分不相応……でも、それはただの……');
        await mcqueen.say_and_wait(
          'ふふ、勇気が出せないお気持ちはわかりますわ。ですが、そこまで畏れられるのは行き過ぎですわよ。',
        );
        await daiya.say_and_wait(
          'あ、マックイーン♪ こんにちは、お邪魔しております～！',
        );
        await mcqueen.say_and_wait(
          'こんにちは。サトノ、それに若いトレーナーさん、ようこそ。お話に加わってもよろしいかしら？',
        );
        await mcqueen.say_and_wait(
          'サトノグループは確かに名高く、規模も大きい。ですが、近寄りがたい相手では決してありませんわ。トレーナー選考を開いたのも──',
        );
        await mcqueen.say_and_wait(
          '『格別に慎重』だからですの。サトノ、違いますわよね？',
        );
        await daiya.say_and_wait(
          '……ええ、おっしゃる通りですわ。ふさわしいトレーナーを探すことは、私の夢とサトノ家の悲願を託せる方を探すことでもありますから。',
        );
        await daiya.say_and_wait(
          `サトノ家──まだ新興ではありますが、${daiya.uma_sex_title}競走の文化に深い想いを抱き、将来の発展にも力を尽くしたいと願っていますわ。`,
        );
        await daiya.say_and_wait(
          '運営への協力や慈善事業など、さまざまな方面で努力してまいりました。ですがメジロ家ほどの歴史はなく、『ある、いちばん大切な貢献』にはまだ至っておりません。',
        );
        await you.say_and_wait('いちばん大切な貢献？');
        await daiya.say_and_wait(
          `はい、すなわち──『一族から、G1を勝てる名だたる${daiya.uma_sex_title}を、数多く育てること』ですわ。`,
        );
        await mcqueen.say_and_wait(
          `それは${daiya.uma_sex_title}業界ならではの文化ですわ。名だたる${daiya.uma_sex_title}を多く育てられれば、何ものにも代えがたい、いちばん大切な貢献になりますもの。`,
        );
        await mcqueen.say_and_wait(
          `その大きな期待を自ら背負う新星が${daiya.sex}、このサトノダイヤモンドですわ。トレーナー選考会も、${daiya.sex}を支え、伴走できる方を探すために開かれたのです。`,
        );
        await mcqueen.say_and_wait(
          'サトノグループが上から目線でそうしているのではありません。本当に、その人が必要なのです。そうでしょう、サトノ。',
        );
        await daiya.say_and_wait(
          '……はい。すべては、家の悲願を果たすため。だから私、いろいろな方法で、この夢を共に背負ってくださる方を探していたのですわ。',
        );
        await daiya.say_and_wait(
          'トレーナーさん、お願いいたしますわ。私の走りを、どうご覧になりましたか？ あの日、何かおっしゃりたそうな目が、どうしても気になっておりまして。',
        );
        await era.printAndWait(
          `その表情は、とても真剣だった。まっすぐな瞳は、ただ目標のために答えを知りたいと語っている……`,
        );
        await era.printAndWait(
          `${you.name} が答えを拒むのは、あまりに失礼だ。まず才能をありのままに称え──次に、これから乗り越えるべき課題を伝えた。`,
        );
        era.printButton('「まず、本気で人と競った経験が足りない」', 1);
        await era.input();
        await daiya.say_and_wait('本気で競う……？ それは、どのような……？');
        await you.say_and_wait(
          'レース中、まわりからの圧に、戸惑っていたんじゃないか？',
        );
        await daiya.say_and_wait(
          'ああ、模擬レースのとき……確かに迷いがありましたわ。初めて味わう、マークされる焦り。思うように力を出せない感じがしました。',
        );
        await daiya.say_and_wait(
          'でも私、小さい頃から一緒にトレーニングする方々へ、『併走では絶対に手加減しないでください』とお願いしてきましたの。',
        );
        await you.say_and_wait('それでも、みんな遠慮していたはずだ');
        await daiya.say_and_wait(
          'そ、そうでしたの……！ 考えたこともありませんでしたわ……！ だから他の選手から圧を感じたのですね……！',
        );
        await you.say_and_wait('もうひとつ。君は、冷静さを失いやすい');
        await daiya.say_and_wait(
          'えっ……冷静さを？ そんなことを言われたのは初めてですわ……どういうことでしょう？',
        );
        await era.printAndWait(
          `${you.name} は、レースで見たことを${daiya.sex}に伝える。中盤、まだ耐えるべき場面で、隣の選手との競り合いでペースが上がっていた。`,
        );
        await era.printAndWait(
          `それが、冷静さを失った証だ。お嬢様の仮面の下に隠れた、${daiya.sex}のいちばん正直な気質。`,
        );
        await daiya.say_and_wait(
          '──！？ あのとき確かに、もっと前へ出たくて、脚がうずいていましたわ……',
        );
        await daiya.say_and_wait(
          'でも、すぐに堪えました。堪えたつもりでしたのに……ほんの一瞬のペースアップを、あなたは……',
        );
        await daiya.say_and_wait(
          'あなたは……一体、どなたですの？ たった一場のレースで、私の状態をそこまで……',
        );
        await you.say_and_wait('それだけ、君の走りに心を奪われたんだ');
        await era.printAndWait(
          `心を奪われたからこそ、長所も短所も一瞬で見えた。${you.name} は${daiya.sex}の家のことは知らない。それでも、${daiya.sex}の本質は見抜いていた。`,
        );
        await daiya.say_and_wait(
          '今まで……今まで、誰もそんなことを言ってくれませんでしたわ。選考にいらした方々でさえ……なのにあなたは──',
        );
        await mcqueen.say_and_wait(
          'ふふ、おめでとうございます。このパーティーで、よい方に出会えましたわね。',
        );
        await mcqueen.say_and_wait(
          'サトノ、選考にも参加してみては？ グループの他の方々が目に留めるかもしれませんわ──',
        );
        await daiya.say_and_wait('──合格ですわ。');
        era.printButton('「……え？」', 1);
        await era.input();
        await daiya.say_and_wait(
          '合格ですわ！ あなたが……あなたが私のトレーナーです！ ずっと探していた、唯一の方。だから、合格ですわ！',
        );
        await mcqueen.say_and_wait(
          'ええっ？ サトノ！？ わかっているのでしょう？ あなたのトレーナーがサトノグループにとって、どれほど慎重に決めるべきことか。',
        );
        await mcqueen.say_and_wait(
          '感覚だけで、そう急ぎ決めてはいけませんわ！ 一度戻って、皆様とよく相談を──',
        );
        await daiya.say_and_wait(
          'いいえ、決めましたわ。敬愛するマックイーンに諭されても、このことだけは、絶対に変えません。',
        );
        await daiya.say_and_wait(
          `私のトレーナーは${you.sex}ですわ！ ${you.sex}にしか務まりません。本来なら慎重に相談すべきことですが──`,
        );
        await daiya.say_and_wait(
          '一族すべての同意が要る──それも呪いですわ。なら直感を信じて、この呪いを解きます！ 誰が何と言おうと、あなたが私のトレーナーですわ！',
        );
        await daiya.say_and_wait(
          '決まりですわ。もう決めてしまいましたの。引き受けてくださいますわよね？ そうですわよね？ ね？',
        );
        await era.printAndWait(
          `おしとやかなお嬢様の印象とは裏腹に、${daiya.sex}の態度は揺るがない。${you.name} が頷くまで、サトノダイヤモンドは ${you.name} の手を離そうとしなかった。`,
        );
        era.println();
        await era.printAndWait(
          'こうして、君とサトノダイヤモンドの三年が始まった！',
          {
            color: daiya.color,
            fontSize: '1.5rem',
          },
        );
      } else {
        await era.printAndWait(
          '嫌な予感がする。やはり、行かないほうがいいだろう。',
        );
        await era.printAndWait(
          `だが、${you.name} が背を向けたとき、何か声を聞いた気がした…………`,
        );
        await daiya.say_as_unknown_and_wait(
          'トレーナーさん、あなたは 絶 対 に 逃 げ ら れ ま せ ん わ？',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
