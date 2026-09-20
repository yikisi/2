/**
 * @file アグネスデジタル - 日常
 * @author 片手虾好评发售中！
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  good_morning(digital, callname) {
    if (Math.random() < 0.5) {
      digital.say([
        'ハイ！ ',
        digital.name,
        '、登場！ 宇宙一尊い',
        digital.uma_sex_title,
        'の力を探しに行くよ！',
      ]);
    } else {
      digital.say([
        'うふふ、',
        callname,
        '！ 今日も推し活パワー、貯めに行こう！',
      ]);
    }
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   * @param {PrintedSpan} call_13 アグネスデジタルのメジロマックイーンへの呼び方
   */
  select(digital, callname, call_13) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say(['そう！ 何が起きても全力で推すんだよ！ ', callname, '！']),
      () => digital.say('うふふ、尊すぎて、もうだめ……'),
      () => digital.say('芝！ ダート！ どっちも私の戦場！'),
    );
    if (era.get('relation:19:0') > 375) {
      buffer.push(() =>
        digital.say([
          callname,
          '！ 一緒に',
          digital.uma_sex_title,
          'ちゃんを推せるなんて、本当によかった！',
        ]),
      );
    }
    switch (era.get('mark:19:欢愉')) {
      case 1:
        buffer.push(() =>
          digital.say(
            'あははは……え？ 脚が震えてるって？ 大丈夫大丈夫！ デジたん、至って正常だよ！',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            'ぐへへへ、まだ聞くの、',
            callname,
            ' がいちばんわかってるでしょ……ずるっ……',
          ]),
        );
    }
    switch (era.get('mark:19:同心')) {
      case 1:
        buffer.push(() =>
          digital.say([
            '一心同体……',
            call_13,
            ' が語ってた素敵な未来、だんだんわかってきた気がする……',
          ]),
        );
        break;
      case 2:
      case 3:
        buffer.push(() => digital.say('メジロ城、行く？ 行くよね！'));
    }
    switch (era.get('mark:19:苦痛')) {
      case 1:
        buffer.push(() =>
          digital.say(['え、あ、', callname, ' か……今日は何か用？']),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('ううう……ひっ！ いやいや、大丈夫大丈夫！'),
        );
    }
    switch (era.get('mark:19:羞耻')) {
      case 1:
        buffer.push(() =>
          digital.say('あのね、デジだって、こうなるとちょっと恥ずかしいよ。'),
        );
        break;
      case 2:
      case 3:
        buffer.push(() => digital.say('ひゃあ、さすがにこれはヤバくない?!'));
    }
    switch (era.get('mark:19:反抗')) {
      case 1:
        buffer.push(() =>
          digital.say(['ん？ ', callname, ' か、え、何するの？']),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            'えーと、',
            callname,
            '、最近ちょっと、同志らしくなくない？',
          ]),
        );
    }
    switch (era.get('mark:19:淫纹')) {
      case 1:
        buffer.push(() =>
          digital.say(
            '見慣れてるのに微妙なものが自分に出てくる……素材にはなる、よね？',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('カッコいいって言えばカッコいい……本当に進化するの?!'),
        );
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async office_study(digital) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say_and_wait(
          `え？ なんで${digital.uma_sex_title}ちゃん関連の知識に詳しいかって？ ファンなら当然でしょ！`,
        ),
      () =>
        digital.say_and_wait(
          '実はトレセン学園に入るために、当時いろんな方面で頑張ったから……勉強はあまり困らない。ちょっと自慢になっちゃうけど。',
        ),
      () =>
        digital.say_and_wait(
          `思うんだよね、勉強が苦手で補習に引っ張られる${digital.uma_sex_title}ちゃんもいるじゃん？ どうしたら${
            digital.couple_title
          }の助けになれるんだろう……`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async talk(digital) {
    if (era.get('base:19:体力') < era.get('maxbase:19:体力') / 3) {
      if (Math.random() < 0.5) {
        await digital.say_and_wait(`はぁ……燃え尽きた、力ない……推せない……`);
      } else {
        await digital.say_and_wait(
          `この状態、推しの${digital.uma_sex_title}ちゃんに申し訳ないよ`,
        );
      }
    } else {
      const buffer = [];

      switch (era.get('cflag:19:干劲')) {
        case -2:
          buffer.push(
            () =>
              digital.say_and_wait(
                'うおお、萌えパワー不足、今すぐ補給しないと……',
              ),
            () =>
              digital.say_and_wait(
                `この状態、絶対に推したちに見られたくない……`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              digital.say_and_wait(
                'あー……なんか力入らない。萌えパワー足りないのかな',
              ),
            () =>
              digital.say_and_wait(
                `いやー、さっき${digital.uma_sex_title}のこと考えてて……`,
              ),
          );
          break;
        case 0:
          buffer.push(
            () => digital.say_and_wait(`すー……はー……もっと、萌え萌えパワー！`),
            () =>
              digital.say_and_wait(
                `まだ足りない、全然足りない。もっと${digital.uma_sex_title}萌え萌えパワーを吸わないと！`,
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              digital.say_and_wait(
                `調子ちょうどいい！ 一緒に${digital.uma_sex_title}萌え萌えパワーを汲んで徳を積もう！`,
              ),
            () =>
              digital.say_and_wait(
                `愛だよ、${digital.uma_sex_title}ちゃんへの愛があるから、こんな力が出せるんだ！`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              digital.say_and_wait(
                `わあああ！ こっちもあっちも${digital.uma_sex_title}ちゃん！ 今なら何でもできそう！`,
              ),
            () => digital.say_and_wait(`はあっ！ 萌えパワー、天を突いた！`),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async office_gift(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait([
        'こんな贈り物選べるなんて、さすが ',
        callname,
        '！',
      ]);
    } else {
      const items = [
        '堕伯先生のサイン本',
        'カレンちゃん写真集',
        'ファル子握手券',
        'マヤちゃんぬいぐるみ',
        'メジロ家同款ティーカップ',
        'タキオン×カフェ印象マグ',
        digital.uma_sex_title + 'の走り靴モデル',
        digital.uma_sex_title + '限定コラボグッズ',
        digital.uma_sex_title + 'のイヤーカバー＆ストッキングのサイン本',
      ];
      const gift = get_random_entry(items);
      await digital.say_and_wait([
        'わっ、',
        gift,
        '！ ここから',
        digital.uma_sex_title,
        '萌え萌えパワー、しっかり汲むよ！',
      ]);
    }
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async office_cook(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `担当${digital.uma_sex_title}への愛を込めて作る……トレーナーにもそんな信条があるなんて。私も見習わなきゃ！`,
        ),
      () =>
        digital.say_and_wait(
          `普段は両親と外で野営することが多いからね。こう見えて、料理はちょっと得意なんだよ`,
        ),
      () =>
        digital.say_and_wait(
          `${digital.uma_sex_title}ちゃんたちの青い気持ち、直接言えなくて弁当に込めて渡すの！ 尊すぎる！`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async office_rest(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `ふー……可愛い${digital.uma_sex_title}ちゃんの癒し系ASMR聞いてると、全身溶けそう……`,
        ),
      () =>
        digital.say_and_wait(
          `こうして、あなたと目的もなく${digital.uma_sex_title}の話をするの、いいね。`,
        ),
    ];
    if (era.get(`relation:${this.id}:0`) > 375) {
      buffer.push(() =>
        digital.say_and_wait(
          `膝枕したい？ いやいや、こんな貧相な脚じゃ落ち着かないでしょ……でも、ちょっと恥ずかしい……`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async office_game(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait(
        `この『${digital.uma_sex_title}オールスター大乱闘』、やってみる？ キャラはランダムでいいよ、だって私DDだし！`,
      );
    } else {
      await digital.say_and_wait([
        'えへ！ ',
        callname,
        '、さすがにこのゲームにはちょっと自信あるよ。',
      ]);
    }
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async s_a_tree_hollow(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `ずっと${digital.uma_sex_title}からレースの冷酷さ、訓練の苦しさ、感情のもつれを打ち明けられてきたあなた！ なんで私は木の穴に嫉妬してるの！`,
        ),
      () =>
        digital.say_and_wait(
          `ねえ、なんでレースには勝者と敗者がいるんだろう……${digital.uma_sex_title}ちゃんたち、全員勝者だったらいいのに……`,
        ),
      () =>
        digital.say_and_wait(
          `私の覚悟、まだ足りない。ライバルとしての覚悟も、${digital.uma_sex_title}としての覚悟も……`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async s_a_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `……なんか${digital.uma_sex_title}ちゃんにたくさん見られてる。どこかに隠れたい……`,
        ),
      () =>
        digital.say_and_wait(
          `この大きなリボン？ 小さい頃からずっとつけてる感じ……え？ 目立つって？ ひゃあ、たしかに問題だね。`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          '、私、面倒くさいって思われてない……？ ずっと付き合って応援活動して……え？ ないの？',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async s_r_lunch(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'え？ ',
          callname,
          '、隠れた強者だったの？ この再現度、私だって感嘆しちゃう！',
        ]),
      () =>
        digital.say_and_wait(
          `ん、可愛い${digital.uma_sex_title}ちゃん、どうして口をつけられる……`,
        ),
      () =>
        digital.say_and_wait([
          '見て！ ',
          callname,
          '、このデザイン、私の心血だよ！ 特許、出願しよっか、うへ！',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   * @param {PrintedSpan} call_20 アグネスデジタルのセイウンスカイへの呼び方
   */
  async o_r_fishing(digital, callname, call_20) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'うわ、',
          call_20,
          '……あっちには行かないほうがいいよね……',
        ]),
      () =>
        digital.say_and_wait([
          'おおお、釣れた、釣れた！ 野営なら焼いて食べられるね、',
          callname,
          '！',
        ]),
      () =>
        digital.say_and_wait(
          `気にしないで！ 勝負は兵家の常、大侠もう一度どうぞ……ボウズもガチャで出ない確率と同じだよ！`,
        ),
    ];
    await get_random_entry(buffer);
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   * @param {PrintedSpan} call_8 アグネスデジタルのウオッカへの呼び方
   * @param {PrintedSpan} call_9 アグネスデジタルのダイワスカーレットへの呼び方
   * @param {PrintedSpan} call_46 アグネスデジタルのスマートファルコンへの呼び方
   * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
   */
  async o_r_walking(digital, callname, call_8, call_9, call_46, call_58) {
    const buffer = [
      () =>
        digital.say_and_wait([
          call_46,
          '、',
          call_46,
          ' だ！ 絶対あっち行かなきゃ！',
        ]),
      () =>
        digital.say_and_wait([
          call_9,
          ' と ',
          call_8,
          ' を発見！ ',
          digital.couple_title,
          '、あっちで何してる～の！',
        ]),
      () =>
        digital.say_and_wait([
          'わっ！ ',
          call_58,
          ' が転んだ、手を貸さなきゃ……立った！ うおっ、勤勉……',
        ]),
      async () => {
        await era.printAndWait([
          '川辺の散歩は ',
          digital.get_colored_name(),
          ' にとって巡礼みたいなもので、',
        ]);
        await era.printAndWait(
          `どの角にも、${digital.uma_sex_title}が見つかるからだ。`,
        );
        await era.printAndWait(
          `歌の練習をしている小さな${digital.uma_sex_title}アイドル、ダートに慣れようとしている小さな努力家。`,
        );
        await era.printAndWait(
          `幸い、今回${digital.sex}は尊さで魂を抜かれなかった。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} call_46 アグネスデジタルのスマートファルコンへの呼び方
   */
  async o_s_arcade(digital, call_46) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'うおおお、',
          call_46,
          ' の新曲出てる！ 手袋持ってきてよかった！',
        ]),
      () => digital.say_and_wait(`取った取った！ あの勝負服限定ぬいぐるみ！`),
      () =>
        digital.say_and_wait(
          `ポイント貯めて景品交換だ！ あの限定フィギュアにできるよ！`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} call_32 アグネスデジタルのアグネスタキオンへの呼び方
   */
  async o_s_drawing(digital, call_32) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'にんじん当たった！ ',
          call_32,
          ' に持って帰ろう。食事、普通にしてほしい。体壊すよ！ だめだめ！',
        ]),
      () => digital.say_and_wait(`くくく、ふふふ、当たった、あれだ！`),
      () => digital.say_and_wait(`ティッシュか……やっぱり単発じゃ出ないよね。`),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async o_s_ktv(digital, callname) {
    const buffer = [
      () => digital.say_and_wait(`今日の勝利の女神は、私だけに口づけを……`),
      () =>
        digital.say_and_wait(
          `勝者ステージは勝ち${digital.uma_sex_title}ちゃんへのご褒美だけじゃない、私たちファンへの褒美でもあるんだよ！`,
        ),
      () =>
        digital.say_and_wait([
          'んはっ、えはっ！ おーーはっーー！ ',
          callname,
          '！ ペンライト、遅い！',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async o_s_movie(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `尊すぎ！ 監督わかってる！ ${digital.uma_sex_title}ちゃんの尊いところ、全部出してる！`,
        ),
      () =>
        digital.say_and_wait(
          `うおおおお、感動した、この悔しさ、この奮闘、現実の${digital.uma_sex_title}ちゃんみたい！`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  o_c_pray: (() => {
    const title = '徳を積む……福を集める？';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_98 アグネスデジタルのコパノリッキーへの呼び方
     */
    const f = async (digital, you, callname, call_98) => {
      await era.printAndWait([
        '神社の前で二礼二拍手のあと、',
        you.get_colored_name(),
        ' と ',
        digital.get_colored_name(),
        ' は手を合わせて祈った',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はもちろん担当',
        digital.uma_sex_title,
        'の健康を願った。では ',
        digital.get_colored_name(),
        ' は何を願うのだろう？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はちらりと ',
        digital.get_colored_name(),
        ' を見た。',
        digital.sex,
        'はまだ目を閉じて、小さな手をもみ、耳を立て、口のなかでつぶやいている。普通の人が持つような誠実さか？',
      ]);
      await era.printAndWait([
        'しばらくして',
        digital.sex,
        'は振り返り、真面目な顔で言った：',
      ]);
      await digital.say_and_wait([
        '神さまがすべての',
        digital.uma_sex_title,
        'を守ってくれるように、私は最大限の誠実さで祈るべきなんだ',
      ]);
      await digital.say_and_wait(
        '虚実のはなしだけど、これで自分をまた理性的に見られる。ついでに徳も積めるしね！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は意外だったが、',
        digital.sex,
        'の言葉にも一理あると思った。だから ',
        you.get_colored_name(),
        ' も雑念を捨てて、もう一度祈ろうとした。',
      ]);
      if (Math.random() < 0.5) {
        await era.printAndWait([
          'ゆっくり、',
          you.get_colored_name(),
          ' は思考のなかを三筋の清水が流れるのを感じた。',
          you.get_colored_name(),
          ' は驚いて目を開けると、そよ風が葉を、社を渡り、',
          you.get_colored_name(),
          ' の心を静めていた。',
        ]);
        await digital.say_and_wait([
          call_98,
          ' が勧めた、すごく霊験あらたかな神社だから、さっきはずっとあまり話せなかったんだ～',
        ]);
        await era.printAndWait('これは本当にあることなのか？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は隣の ',
          digital.get_colored_name(),
          ' も同じ境地に浸っていることに気づいた。',
        ]);
        await digital.say_and_wait('これは三女神の恵みだよ！');
        await era.printAndWait([
          you.get_colored_name(),
          ' は突っ込みたかった。神社で願掛けして、授けるのが三女神なのはなぜだ、と。だが少なくとも心のうえでは効いているなら、まあいい。',
        ]);
      } else {
        await era.printAndWait([
          '意識を両目のあいだに集めて、どう誠実に祈るかを考えたが、このやり方自体が問題だ。どうやら ',
          you.get_colored_name(),
          ' はまだ雑念を払うのが下手らしい。',
        ]);
        await digital.say_and_wait(
          '大丈夫、私もかなり練習してこの域に達したんだ。同志、もっと練習しないとね！',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' はこの技能の実用地が気になった。レースのとき、注意を集めやすい、ということか？',
        ]);
        await era.printAndWait([
          'ただ ',
          you.get_colored_name(),
          ' も、ときには静心の練習が要ると気づいた。次に試すしかない。',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} digital アグネスデジタル */
  async o_s_restaurant(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `にんじんみたいな${digital.uma_sex_title}ちゃんが好む食べ物が好きなのは、${digital.uma_sex_title}ちゃんが好きだから？ それとも自分が${digital.uma_sex_title}だから……`,
        ),
      () =>
        digital.say_and_wait(
          `パフェ♪パフェ♪メロンパフェ♪はちみつ♪はちみつ♪特濃はちみつ♪それにいちご大福♪推したちの真似をすると運が来る気がする！`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async o_s_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'あははは、',
          callname,
          '、一緒に歩くと、かえってどこがいいか選べなくなる……',
        ]),
      () =>
        digital.say_and_wait(
          `え？ 場所は私が選ぶの？ どうせ${digital.uma_sex_title}関連の場所になっちゃう気がする……`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          '！ あっちで聖地巡礼、もう一回行こう！',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} call_25 アグネスデジタルのマンハッタンカフェへの呼び方
   * @param {PrintedSpan} call_33 アグネスデジタルのアドマイヤベガへの呼び方
   */
  async o_s_shopping(digital, call_25, call_33) {
    const buffer = [
      () =>
        digital.say_and_wait([
          'うぬぬ！ この ',
          call_25,
          ' 同款コーヒーカップ、あっちのメジロ紅茶カップ、どう選べっていうの?! もちろん全部だよ！',
        ]),
      () =>
        digital.say_and_wait([
          call_33,
          ' が宣伝してる乾燥機？ これは……ちょっと……だめ、買わなきゃ！',
        ]),
      () =>
        digital.say_and_wait(
          `え？ なんでグッズを三セット買うかって？ 当然、一本は常用、一本は保存、一本は布教だよ！`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  big_fish: (() => {
    const title = '大魚が釣れた。ただし魚はあまり友好的ではない';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} spe スペシャルウィーク
     * @param {CharaTalk} sky セイウンスカイ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_20 アグネスデジタルのセイウンスカイへの呼び方
     * @param {PrintedSpan} callname_20 セイウンスカイのプレイヤーへの呼び方
     * @param {PrintedSpan} s_call_s セイウンスカイのスペシャルウィークへの呼び方
     * @param {PrintedSpan} s_call_d セイウンスカイのアグネスデジタルへの呼び方
     */
    const f = async (
      digital,
      spe,
      sky,
      you,
      callname,
      call_20,
      callname_20,
      s_call_s,
      s_call_d,
    ) => {
      const ret = [];
      await era.printAndWait(
        `川辺で釣りをするのは、暇なときの${digital.uma_sex_title}の選択肢のひとつだ。`,
      );
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' の担当',
        digital.uma_sex_title,
        ' ',
        digital.get_colored_name(),
        ' は少し違う。自分で釣るより、',
        digital.sex,
        'は他人の釣りを見るのが好きで、',
      ]);
      await era.printAndWait(
        `いや……${digital.uma_sex_title}を見るのが好き、と言うべきだ。`,
      );
      await era.printAndWait(
        `だから、本当に${digital.sex}を小さな椅子に座らせ、竿を持たせて、川辺で静かに待つのは、かなり珍しい。`,
      );
      await digital.say_and_wait(
        `なるほど……釣りってこういうものなんだ。余暇のはずなのに、なんでこんなに気力を使うんだろう……`,
      );
      await digital.say_and_wait(
        `釣りしている他の${digital.uma_sex_title}は、いったい何を考えてるんだろう……`,
      );
      await you.say_and_wait(
        `${digital.couple_title}は、釣りという行為そのものを楽しんでるんじゃないか。周りを見てみろ？`,
      );
      await digital.say_and_wait('え？');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は周りを見回した。対岸にも、ちょうど${digital.uma_sex_title}が釣りをしていた。',
      ]);
      await era.printAndWait(`釣りというより、寝ている。`);
      await digital.say_and_wait(
        `たしかに、わかる。${digital.sex}は今、極度にリラックスしてる。`,
      );
      await digital.say_and_wait(
        `うわ、釣りの${digital.uma_sex_title}、無限の静けさに横たわって、魚がかかっても${
          digital.sex
        }を微塵も動かせない……`,
      );
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([
          'おやおや、',
          callname_20,
          ' が今日は暇を見つけて ',
          s_call_d,
          ' と釣りか。よほほ、私とじゃないんだ……泣く泣く',
        ]);
        await era.printAndWait([
          '後ろから聞き慣れた声。',
          sky.get_colored_name(),
          ' だ。',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ' は小さな手で目をこすり、かわいそうな目をする。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は認めざるを得ない。',
          sky.get_colored_name(),
          ' のこの演技はすごく上手い。もし ',
          you.get_colored_name(),
          ' が',
          digital.sex,
          'の悪巧みに慣れていなければ、本当に騙されていたかもしれない。',
        ]);
        await digital.say_and_wait('わわわ！ わざとじゃない、すぐどく！');
        await era.printAndWait([
          digital.get_colored_name(),
          ' はかなり慌てて、手を振りながら立ち上がろうとした。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はさりげなく ',
          sky.get_colored_name(),
          ' のそばへ寄り、陰で ',
          sky.get_colored_name(),
          ' の背中を強くつねった。柔らかい。',
        ]);
        await sky.say_and_wait('えっ！ 冗談だよ、冗談～');
      } else {
        await sky.say_and_wait([
          'おやおや、',
          s_call_d,
          ' か。岸で他の',
          digital.uma_sex_title,
          'の釣りを見てるんじゃないんだ？',
        ]);
        await sky.say_and_wait([
          'それに……',
          s_call_d,
          ' のトレーナー',
          you.adult_sex_title,
          '、有名な人だね～',
        ]);
        await era.printAndWait([
          '後ろから、だるそうな声。この声、',
          you.get_colored_name(),
          ' には少し覚えがある。',
        ]);
        await digital.say_and_wait([call_20, '?!']);
        await era.printAndWait([
          '驚いて ',
          digital.get_colored_name(),
          ' の手の竿が落ち、水しぶきが体にかかった。',
        ]);
        await sky.say_and_wait(
          'おや？ 竿まで落とすなんて、Sky、怒っちゃうよ！',
        );
        await digital.say_and_wait([
          'いやいや、私のせい、私のせい！ こっちに来て',
          digital.uma_sex_title,
          'ちゃんと一緒に釣るべきじゃなかった……',
        ]);
      }
      await sky.say_and_wait([
        'じゃあ、',
        s_call_d,
        '、私が手取り足取り教えてあげよっか、えへ！',
      ]);
      await digital.say_and_wait('ひっ！');
      await era.printAndWait([
        '数秒で、',
        sky.get_colored_name(),
        ' は逃げようとした ',
        digital.get_colored_name(),
        ' を掴んだ。',
        digital.get_colored_name(),
        ' は石化でも食らったみたいに、体が止まった。',
      ]);
      await sky.say_and_wait('ぐへ！');
      await era.printAndWait([
        '口角が上がる。',
        sky.get_colored_name(),
        ' の、本来なら小柄と言える両手は、まずさらに小さな ',
        digital.get_colored_name(),
        ' の左手を握った。',
      ]);
      await digital.say_and_wait('あばあば……');
      await sky.say_and_wait('ほらほら、椅子に座って～');
      await era.printAndWait([
        '一気に ',
        digital.get_colored_name(),
        ' を椅子のそばへ引っ張り、手を',
        digital.sex,
        'の肩に置いて……',
      ]);
      await era.printAndWait([
        'すると ',
        digital.get_colored_name(),
        ' は軟化でもかけられたみたいに、毛布みたいに椅子へ崩れ落ちた。',
      ]);
      await sky.say_and_wait('はい、この竿を握って、ウキをあっちへ……');
      await digital.say_and_wait('あばあば……');
      await era.printAndWait([
        'どう見ても、',
        digital.get_colored_name(),
        ' の魂はとうに灰になって風に散っている。',
      ]);
      era.drawLine({ content: 'しばらくして' });
      await digital.say_and_wait('……！');
      await digital.say_and_wait('うえぇ……だめ、本当にだめ……');
      await era.printAndWait([
        '土の上に力なく横たわる ',
        digital.get_colored_name(),
        '。今日の',
        digital.sex,
        'は、本当にもう限界らしい。',
      ]);
      await sky.say_and_wait('あは、面白い人');
      await era.printAndWait([
        digital.get_colored_name(),
        ' とは正反対に、',
        sky.get_colored_name(),
        ' は元気いっぱいだ。新型の精気吸い、だろうか。',
      ]);
      era.println();
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([callname_20, ' よ！']);
        await era.printAndWait([
          sky.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' のほうを向いた。さっきまで大笑いしていた顔がすぐに引き締まり、ただ ',
          you.get_colored_name(),
          ' を見ている。',
        ]);
        await sky.say_and_wait([
          'どんな気分？ あなたも',
          digital.sex,
          'も、私を置いていく感じだね～',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ' ',
          digital.sex,
          'は、ただ話を引き出したいだけ、か？',
        ]);
        await sky.say_and_wait([
          'おやおや、',
          callname_20,
          ' も焼き餅焼くんだ？ 焼くべきは私でしょ？',
        ]);
        era.printButton('折れる（セイウンスカイ好感+40）', 1);
        era.printButton('本題に入る（アグネスデジタル好感+40）', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait('はいはい、じゃあ次は君と釣りに来る。');
          await era.printAndWait('とりあえず、先に流しておこう。');
          await sky.say_and_wait(
            'えへ、じゃあ装備も新調してね～トレーナーの給料、少なくないでしょ？',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' は片手を頭の上に置き、ピンクの舌を出して、',
            you.get_colored_name(),
            ' にあるスタンプを思い出させた。',
          ]);
          await era.printAndWait(
            '腰を伸ばして、携帯のなかのウマコイン残高を思い出す。装備の更新なら……大丈夫、か？',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' も遠慮なく、小さな椅子を取り上げて ',
            you.get_colored_name(),
            ' のそばに座り、',
            you.get_colored_name(),
            ' の肩に寄りかかった。',
          ]);
          await era.printAndWait(
            '横目に、青い毛が汗で少し濡れ、滑らかな首に露がついている。',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            ' は携帯をいじり、商品が ',
            sky.get_colored_name(),
            ' の指から流れていく。数字を見て、',
            you.get_colored_name(),
            ' は急にまずいと思った。',
          ]);
          await you.say_and_wait('待て、止まれ、止まれ、ちょっと待て。');
          await sky.say_and_wait('え？ 言ったのはあなただよ～');
          await era.printAndWait(
            '値段を見ると、もう高級どころではなく、ほぼフラッグシップの価格だった。',
          );
          await era.printAndWait(
            'トレーナーの給料は低くないが、こんなものは気軽に買えない。',
          );
          await sky.say_and_wait('はいはい、冗談はここまで。雑談は終わり！');
          await era.printAndWait([
            '携帯をしまい、',
            sky.get_colored_name(),
            ' は本題に入る様子だった。',
          ]);
          await sky.say_and_wait([
            s_call_d,
            ' が走る理由を見つけてあげて！ おおお！',
          ]);
          await era.printAndWait([
            '本来はまともなのに、',
            sky.get_colored_name(),
            ' の口だと、まったく勢いのない大声になる……',
          ]);
          await era.printAndWait([
            digital.get_colored_name(),
            ' をちらりと見る。',
            digital.sex,
            'はまだ魂が戻っていない。',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            ' は冗談で、今 ',
            you.get_colored_name(),
            ' が急いでやるべきことを伝えている……竿も、たぶんそう。',
          ]);
          await era.printAndWait([
            '次は',
            digital.sex,
            'に贈り物を買おう。この竿は、やめておいたほうがいい……',
          ]);
        } else {
          await you.say_and_wait('本題にしよう。君のことはわかってる');
          await era.printAndWait([
            'どうせ ',
            sky.get_colored_name(),
            ' には',
            digital.sex,
            'の算段がある。',
          ]);
          await era.printAndWait([
            'くるりと向きを変えて、',
            sky.get_colored_name(),
            ' は夕日に向かい、背を向けた。',
          ]);
          await sky.say_and_wait(['まだ ', s_call_s, ' を覚えてる？']);
          await you.say_and_wait('その言い方、覚えてるも何も。');
          await era.printAndWait(
            'あのときだ。自分が何をすべきか、何を目指すか、どうやるかを忘れていた。',
          );
          await sky.say_and_wait([
            s_call_s,
            ' は見つけたよ。',
            digital.sex,
            'だけの温かい場所を。',
          ]);
          await era.printAndWait([
            'この話はかなり広まった。いい教材だ。幸い ',
            spe.get_colored_name(),
            ' 本人は気にしていない。',
          ]);
          await era.printAndWait(
            '憧れそのものは、永遠に進む目標にはならない。',
          );
          await era.printAndWait([
            digital.get_colored_name(),
            ' ',
            digital.sex,
            'はすぐに気づく。',
            digital.sex,
            'は他の誰より強くなる。',
            digital.sex,
            'は、かつての憧れの夢を砕く。',
          ]);
          await you.say_and_wait([
            '連れていく。',
            digital.sex,
            'だけの殿堂を、',
            digital.sex,
            'と見つける。',
          ]);
          await sky.say_and_wait('やっぱり私のトレーナーだ！');
          await you.say_and_wait('うん。');
        }
      } else {
        await sky.say_and_wait([s_call_d, ' のトレーナー——']);
        await era.printAndWait([
          sky.get_colored_name(),
          ' は頭を ',
          you.get_colored_name(),
          ' のほうへ向けた。',
        ]);
        await era.printAndWait([
          '悪巧みが多い。それが世の人……少なくとも',
          digital.sex,
          'の同級生が',
          digital.sex,
          'につけた評価だ。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は ',
          sky.get_colored_name(),
          ' を深くは知らないが、',
          digital.sex,
          'の評判は聞いている……レースのためなら手段を選ばない……か？',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          ' は、',
          digital.sex,
          'のレースと衝突はないはずだ。では',
          digital.sex,
          'はここで何をしたいのか？',
        ]);
        era.printButton('とりあえず話す（好感+40）', 1);
        era.printButton('できるだけ早くデジを連れて帰る（恋慕+5）', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait('セイウンスカイ……知ってる。');
          await sky.say_and_wait('にゃはは、私の知名度、なかなかみたいだね～');
          await era.printAndWait([
            '手を頭の後ろに回して、',
            sky.get_colored_name(),
            ' は自分の知名度を誇らしげにしている。',
          ]);
          await you.say_and_wait(
            '座って話そう。デジについて考えがあるんだろ。',
          );
          await sky.say_and_wait(
            'いやいや、私はHOMOじゃないよ。むしろBGタイプだよ～',
          );
          await era.printAndWait('話を逸らす。いつもの計略だ。');
          await you.say_and_wait('……');
          await sky.say_and_wait(
            '本気で聞きたい？ Sky、意外と純粋な考えかもしれないよ？',
          );
          await era.printAndWait([
            '隣の ',
            digital.get_colored_name(),
            ' を見る。',
            digital.sex,
            'はまだ岸に寝て、幸せな尊死状態だ。',
          ]);
          await you.say_and_wait([
            'デジ',
            digital.sex,
            'はまだ純粋すぎて、レース場の一厘一毫を争う空気を知らない。',
          ]);
          await sky.say_and_wait([
            'そう、',
            s_call_s,
            ' が一時期そうだったみたいに、',
            s_call_d,
            ' ',
            digital.sex,
            'には戦場へ出る理由が足りない。',
          ]);
          await era.printAndWait([
            '戦場へ……レースの理由。',
            digital.get_colored_name(),
            ' はこれまでずっと',
            digital.uma_sex_title,
            'だと言ってきた。',
            digital.sex,
            'は……少なくとも今は、',
            digital.uma_sex_title,
            'の走りを至近で見たいだけだ。',
          ]);
          await you.say_and_wait([
            digital.sex,
            'は見つける。その理由を、',
            digital.sex,
            'と一緒に見つける。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' がそう言うまで、',
            sky.get_colored_name(),
            ' は深い目で ',
            you.get_colored_name(),
            ' を見つめていた。その言葉を聞いて、',
            digital.sex,
            'は笑った。',
          ]);
          await sky.say_and_wait('あはは、面白い答え、聞けちゃった！');
          await era.printAndWait([
            you.get_colored_name(),
            ' の答えが',
            digital.sex,
            'を満足させたのか、もう言う必要がないと思ったのか。',
          ]);
          await sky.say_and_wait(
            'じゃあ邪魔しないよ？ Sky、まだ釣りしなきゃ。',
          );
          await era.printAndWait([
            '熱を落としすぎた太陽は白から赤へ変わり、',
            you.get_colored_name(),
            ' と ',
            digital.get_colored_name(),
            ' を川辺の泥地に残した。',
          ]);
          await era.printAndWait('デジを連れて帰ろう……');
          await you.say_and_wait('どうやって連れて……', true);
        } else {
          await you.say_and_wait('セイウンスカイ、もう少し話したいけど……');
          await you.say_and_wait([
            'デジはしばらく起きそうにない。遅くなったし、',
            digital.sex,
            'を連れて帰らないと。',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' を見て、あくびをした。',
          ]);
          await sky.say_and_wait(
            'それもそう。釣りできなかったのは残念だけど。',
          );
          await era.printAndWait([
            digital.sex,
            'に別れを告げ、',
            digital.get_colored_name(),
            ' を背負おうとしたとき、',
            you.get_colored_name(),
            ' は耳元に息を感じた……',
          ]);
          await sky.say_and_wait([
            digital.sex,
            'が走る理由を、見つけてあげて……',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は目を閉じ、ありがとうとしか言えなかった。',
          ]);
          era.println();
          await era.printAndWait([
            digital.get_colored_name(),
            ' は異常なほど小柄だが、',
            you.get_colored_name(),
            ' が',
            digital.sex,
            'を背負ってみて初めて、',
            digital.sex,
            'の体重はさらに小さく感じた。',
          ]);
          await era.printAndWait([
            '柔らかい体、吐息……あるのか。',
            you.get_colored_name(),
            ' の首にかかって、',
            you.get_colored_name(),
            ' は少しくすぐったかった。',
          ]);
          await era.printAndWait([
            '戻ったあと、',
            digital.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' に、とことん謝った。',
          ]);
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
