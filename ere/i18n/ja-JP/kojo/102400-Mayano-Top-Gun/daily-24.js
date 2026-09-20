/**
 * @file マヤノトップガン - 日常
 * @author 黑奴二号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

module.exports = {
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
   */
  good_morning(maya, callname, call_3) {
    const buffer = [];
    if (era.get('base:24:体力') === era.get('maxbase:24:体力')) {
      if (era.get('relation:24:0') > 75) {
        buffer.push(
          () => maya.say('チリンチリン──♪ 起こしにきたよ～🌟'),
          () =>
            maya.say([
              'おはよ！ えへへ～、朝から ',
              callname,
              ' に会いたくて、飛んできちゃった！',
            ]),
        );
      } else {
        buffer.push(
          () => maya.say('おはよー！ 今日もハイパーにテイクオフするよ！'),
          () =>
            maya.say([
              callname,
              '、おはよ！ もしかして～マヤのこと探してた？ えへへ、ここだよ～♪',
            ]),
        );
      }
    } else if (era.get('status:24:熬夜')) {
      if (era.get('relation:24:0') > 75) {
        buffer.push(() =>
          maya.say(
            'ふああ……今日お弁当作るから早起きした……えへへ、お昼、楽しみにしててね♪',
          ),
        );
      } else {
        buffer.push(() =>
          maya.say([
            'ふああ……昨日 ',
            call_3,
            ' と夜更かししちゃった～。眠いけど、ちょっと大人っぽい気がする……',
          ]),
        );
      }
    } else if (era.get('relation:24:0') > 75) {
      buffer.push(
        () =>
          maya.say(
            'ねえねえ！ トレーニングしよ？ マヤ、いつでもついてくよ🌟 末永く幸せな未来へ！',
          ),
        () =>
          maya.say([
            'ターゲット、ロックオン🌟 ',
            callname,
            ' の笑顔で今日の燃料チャージ～♪',
          ]),
      );
    } else {
      buffer.push(
        () =>
          maya.say([
            callname,
            '～！ 今日はどんなトレーニングする？ マヤ、いつでも緊急テイクオフできるよ！',
          ]),
        () =>
          maya.say([
            '行こ、',
            callname,
            '！ 今日もワクワクしてキラキラすること、探しにテイクオフだよ！',
          ]),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async talk(maya, callname) {
    const buffer = [];
    switch (era.get('cflag:24:干劲')) {
      case -2:
        buffer.push(
          () =>
            maya.say_and_wait(
              'へん……？ 身体が言うこと聞かない……？ マヤ、どうしちゃったの……？',
            ),
          () => maya.say_and_wait('んーん～？ やる気、急降下してる感じ……？'),
        );
        break;
      case -1:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait(
                'マヤ、頑張るから、あとでご褒美ちょうだい？ じゃないと、エンジンかからないかも……',
              ),
            () =>
              maya.say_and_wait(
                '心配しないで！ マヤ、急に調子戻ること多いから！ ちょっと悪いくらい、へっちゃらだよ！',
              ),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait('うぅ……なんか調子いまいち。マヤ、墜落しそう～'),
            () =>
              maya.say_and_wait(
                '今は頑張りたくないもん！ 誰がなんて言っても！ やりたくないことはやりたくないー！',
              ),
          );
        }
        break;
      case 0:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                callname,
                ' と一緒のトレーニング、楽しい！ だから頑張ろうってなるよ！',
              ]),
            () =>
              maya.say_and_wait([
                'マヤを飽きさせちゃダメだよ？ ',
                callname,
                ' といたら飽きないと思うけど。',
              ]),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait('準備OK！！ マヤ、いつでもテイクオフできるよ'),
            () =>
              maya.say_and_wait(
                '視界良好！ 指示待ち！ 指示、出せる？ マヤ、いつでも飛べるよ！',
              ),
          );
        }
        break;
      case 1:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                callname,
                '！ 今のマヤ、キラキラしてない？ えへへ♪',
              ]),
            () => maya.say_and_wait('マヤ、頑張るよ～！ できたら褒めてね🌟'),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait('なんかワクワクすること、見つからないかな～♪'),
            () =>
              maya.say_and_wait(
                'うんうんうん！ 身体軽いし柔らかい！ マヤ、遠くまで走れそう～！',
              ),
          );
        }
        break;
      case 2:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                callname,
                ' といっしょなら、なにやっても楽しそう！ こんなの初めて！',
              ]),
            () =>
              maya.say_and_wait([
                'マヤ、絶対キラキラした大人の',
                maya.uma_sex_title,
                'になる！ だから一番近くで見ててね！',
              ]),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait(
                'どんなトレーニングでも持ってきて！ シュッて終わらせるから！',
              ),
            () =>
              maya.say_and_wait(
                'マヤの調子、上昇中！ 超キラキラした走り、できそう！',
              ),
          );
        }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maya マヤノトップガン */
  async s_a_tree_hollow(maya) {
    await maya.say_and_wait([
      'マヤは大人の',
      maya.get_colored_name(),
      'だもん、な、泣かないんだから？',
    ]);
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async s_a_dating(maya, callname) {
    await maya.say_and_wait([
      'デートしよ！ マヤ、',
      callname,
      ' と学園一お似合いのカップルになるんだから！',
    ]);
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async s_r_lunch(maya, callname) {
    await maya.say_and_wait([
      'マヤ、',
      callname,
      ' にお弁当作ったよ、一緒に食べよ！',
    ]);
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {boolean|undefined} fish_success 釣り成功か。釣りのときだけ値がある
   */
  async out_river(maya, you, callname, fish_success) {
    if (fish_success !== void 0) {
      await era.printAndWait([
        maya.get_colored_name(),
        ' と川へ釣りに行った。',
      ]);
      await maya.say_and_wait([
        callname,
        ' と釣りデート……大人のすることみたい～、シューッ',
      ]);
      if (fish_success) {
        await maya.say_and_wait(
          'マヤ、わかった！ こうすれば……あっ！ かかった！',
        );
        await era.printAndWait([
          maya.get_colored_name(),
          ' は、すぐにコツを掴んだようだ。',
        ]);
      } else {
        await maya.say_and_wait(
          'ああ……つまんない……なんでこんなに魚かからないの？',
        );
        await era.printAndWait([
          '辛抱が足りず、',
          maya.get_colored_name(),
          ' はほとんど収穫がなかった。',
        ]);
      }
      return;
    }
    const buffer = [
      async () => {
        await maya.say_and_wait([
          callname,
          '、なににする～？ マヤはもっと熱め、ハチミツ生クリーム入りのカスタム特製で……',
        ]);
        era.printButton('なにの話？', 1);
        await era.input();
        await maya.say_and_wait(
          'ドリンクだよ！ もう、この道を歩くなら、手にコーヒー持ってなきゃ！',
        );
        await maya.say_and_wait([
          'この道歩き終わったら、マヤのコーヒー、',
          callname,
          ' にあげる♪',
        ]);
        await maya.say_and_wait([callname, '！ かっこいいポーズ！']);
        await maya.say_and_wait('さん、に、いち！');
        await maya.say_and_wait('……');
      },
      async () => {
        await maya.say_and_wait(
          '土手、飛行機の滑走路みたい……ここで走ったら、飛びそう～',
        );
        await maya.say_and_wait([callname, '、追いかけて🌟']);
        era.printButton('落ちないようにね', 1);
        await era.input();
        await maya.say_and_wait([
          '大丈夫、',
          callname,
          ' が受け止めてくれるって信じてるもん！',
        ]);
        await era.printAndWait([
          'そのあと ',
          you.get_colored_name(),
          ' は ',
          maya.get_colored_name(),
          ' とのデートを続けた……',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async out_shopping(maya, you, callname) {
    const ret = [];
    era.print('商店街のどこへ行く？');
    era.printButton('カラオケへ', 1);
    era.printButton('ゲームセンターへ', 2);
    era.printButton('買い物へ', 3);
    ret.push(await era.input());
    switch (ret[0]) {
      case 1:
        await era.printAndWait([
          maya.get_colored_name(),
          ' とカラオケへ行った……',
        ]);
        await maya.say_and_wait([
          '今日はマヤの歌声で、',
          callname,
          ' をメロメロにするんだから！',
        ]);
        await maya.say_and_wait('どう、マヤの魅力、伝わった？');
        era.printButton('「かわいい！」', 1);
        era.printButton('「セクシーだ！」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait([
            'む……！ ',
            callname,
            '、この曲、マヤにはまだ早いって思った！？',
          ]);
          era.printButton('「そういう意味じゃないよ。」', 1);
          await era.input();
          await maya.say_and_wait(
            'うんうん……つまりマヤの魅力、セクシーだけじゃないってこと！',
          );
          await era.printAndWait([
            'ちょっと食い違っていそうだが、',
            maya.get_colored_name(),
            ' の機嫌はよくなった。',
          ]);
        } else {
          await maya.say_and_wait([
            'やった～♪ ',
            callname,
            ' ならそう言うと思った！',
          ]);
          await maya.say_and_wait([callname, ' って、マヤのこと超好きだね～♪']);
        }
        await era.printAndWait([
          maya.get_colored_name(),
          ' と、楽しい時間を過ごした。',
        ]);
        break;
      case 2:
        await era.printAndWait([
          maya.get_colored_name(),
          ' とゲームセンターへ行った……',
        ]);
        await maya.say_and_wait(['わ～～～！ ', callname, '、見て見て！']);
        await maya.say_and_wait('ほら、あのぬいぐるみ──');
        await era.printAndWait([
          you.get_colored_name(),
          ' が ',
          maya.get_colored_name(),
          ' の指したほうを見ると、',
          maya.uma_sex_title,
          'モチーフのぬいぐるみが入ったクレーンゲームが置いてあった。',
        ]);
        await maya.say_and_wait(
          'あれ、ウマ娘ぬいだよね！ 超かわいい～、ほしい～！',
        );
        await maya.say_and_wait('でも、お小遣い、もうほとんどない……');
        await era.printAndWait([
          '目をキラキラさせていた ',
          maya.get_colored_name(),
          ' が、急にしゅんとなった。',
        ]);
        era.printButton('「取ってあげようか？」', 1);
        await era.input();
        await maya.say_and_wait('ほんと！？ じゃあマヤ、横で応援する！！');
        await maya.say_and_wait([
          'いけいけ、がんばれがんばれ！ ',
          callname,
          '♪',
        ]);
        ret.push(get_random_value(0, 2));
        switch (ret[1]) {
          case 0:
            await maya.say_and_wait(
              'うぅ、惜しい～、あとちょっとだったのに……！',
            );
            era.printButton('「ごめん……」', 1);
            await era.input();
            await maya.say_and_wait(['わっ、気にしないで、', callname, '！！']);
            await maya.say_and_wait(
              'マヤのために頑張ってくれた、それだけで嬉しいよ！',
            );
            await era.printAndWait([
              '何も取れなかったが、',
              maya.get_colored_name(),
              ' はそれでも楽しそうだった。',
            ]);
            break;
          case 1:
            await maya.say_and_wait(['やった！ ', callname, '、ありがとう！']);
            await maya.say_and_wait([
              callname,
              ' がクレーンしてる真剣な顔、ドキドキしちゃった……♪',
            ]);
            await maya.say_and_wait([
              'えへへ、どこに飾ろっか～？ マヤと ',
              callname,
              ' の思い出だよ、迷っちゃう！',
            ]);
            await era.printAndWait([
              maya.get_colored_name(),
              ' は嬉しそうだ。',
            ]);
            break;
          case 2:
            await maya.say_and_wait(
              'わ～かわいい～！ こんなにいっぱい！ すごい！！',
            );
            await maya.say_and_wait([
              'えへへ、ぜんぶ ',
              callname,
              ' がマヤのために頑張ってくれたおかげ。',
            ]);
            await maya.say_and_wait('マヤ、今、超……嬉しい！！');
            await maya.say_and_wait([
              'このぬいぐるみ、',
              callname,
              ' だと思って、毎日ぎゅってする！',
            ]);
            await era.printAndWait([
              maya.get_colored_name(),
              ' は、とても嬉しそうだ。',
            ]);
        }
        break;
      case 3:
        await era.printAndWait([
          maya.get_colored_name(),
          ' と店を見て回った……',
        ]);
        if (Math.random() < 0.5) {
          await maya.say_and_wait(
            'えっ～かわいい～♪ これ、大人すぎない？ でもちょっとギャップあったほうかわいくない？',
          );
          await maya.say_and_wait([
            'こういうとき……',
            callname,
            '！ マヤと一緒に悩んで～！',
          ]);
          await maya.say_and_wait('今セール中♪ かわいい服、いっぱい買うよ～♪');
          await maya.say_and_wait(
            'で、で、迷っちゃった～！ 今月のお小遣い、ちょっとカツカツ！',
          );
          await maya.say_and_wait(
            'こっちはポイントになるデザインに最新アクセを合わせてて、テクニカルコーデ！',
          );
          await maya.say_and_wait(
            'こっちはかわいくて機動性もあって、お店のお姉さんが実用性バツグンって！',
          );
          await maya.say_and_wait([
            'ねえ、',
            callname,
            '！ どっちがマヤに似合うと思う～？',
          ]);
          era.printButton('「最新テクのコーデ！」', 1);
          era.printButton('「機動性の実用コーデ！」', 2);
          if ((await era.input()) === 1) {
            await maya.say_and_wait(
              'だよね～！ マヤもそう思った！ 流行の先頭、走らなきゃね♪',
            );
            await maya.say_and_wait('店員さーん、すみません～！');
            await maya.say_and_wait([
              'マヤ、大人の',
              maya.phy_sex_title,
              'に、また一歩近づいた……！',
            ]);
          } else {
            await maya.say_and_wait(
              'わかる～！ 機動性高いと疲れにくいし、遊びに行ったときもっと楽しめるよね♪',
            );
            await maya.say_and_wait('これに決めた！ よーし、買お♪');
            await maya.say_and_wait([
              'はい、',
              callname,
              '、出発！ 今日のデート、まだ終わってないよ？',
            ]);
          }
        } else {
          await maya.say_and_wait(
            'えっ～お菓子屋さん！ マヤ、試してみたいおやついっぱいあるよ！',
          );
          era.printButton('「体重に気をつけて、一つだけだよ。」', 1);
          await era.input();
          await maya.say_and_wait('むぅ……わかった……どれにしよう～！？');
          await maya.say_and_wait(
            '季節限定！ 新味の『刺激中毒ニンジンチップス』にする～？',
          );
          await maya.say_and_wait(
            'それともマヤ個人的におすすめ必買の『超甘々チョコ』？',
          );
          await maya.say_and_wait([
            'うぅ～選べない～',
            callname,
            '、マヤの代わりに選んで！',
          ]);
          era.printButton('「新味に挑戦！」', 1);
          era.printButton('「必買が一番！」', 2);
          if ((await era.input()) === 1) {
            await maya.say_and_wait(
              'だよねだよね！ 刺激足りないとダメだよ♪ 辛いの苦手だけど、挑戦してみる！',
            );
            await era.printAndWait([
              '最後は ',
              maya.get_colored_name(),
              ' が辛さで真っ赤になりながらも、おやつを食べきった。',
            ]);
          } else {
            await maya.say_and_wait(
              'そっか～、おやつ選びは安定感が大事だよね。',
            );
            await maya.say_and_wait(
              '嫌いなの当たったら落ち込むし！ よーし、これに決めた！',
            );
            await maya.say_and_wait([
              '一緒に分けよ！ ',
              callname,
              '、あーん————',
            ]);
            await era.printAndWait([
              '名前どおり、',
              maya.get_colored_name(),
              ' の選んだチョコはとても甘かった。',
            ]);
          }
        }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {0|1|2} result おみくじの結果。数字が大きいほど好感の報酬が多い
   * @param {boolean} rm_debuff トレーニングdebuffを消すか
   */
  async out_church(maya, callname, result, rm_debuff) {
    await maya.say_and_wait([
      'ここ、縁結びのおみくじが有名なんだって♪',
      callname,
      '、マヤたちも引こ！——',
    ]);
    await maya.say_and_wait(
      '神頼みしなくても、マヤたちお似合いだけど🌟……でもドキドキしそう！',
    );
    await era.printAndWait([
      maya.get_colored_name(),
      ' の希望に応えて、「縁結びみくじ」を引くことにした。',
    ]);
    await maya.say_and_wait('引けた？ マヤに見せて見せて！');
    switch (result) {
      case 0:
        await maya.say_and_wait('未来……進展あり？');
        await maya.say_and_wait('え……マヤの頑張り、全然届いてないの？');
        break;
      case 1:
        await maya.say_and_wait('か……関係はまずまず……！？');
        await maya.say_and_wait(
          'まずまず……まずまず……まずまずって……どのくらい……？',
        );
        break;
      case 2:
        await maya.say_and_wait('……わっ！！ 『熱恋一直線』！！ 最高～♪');
        await maya.say_and_wait('えへへ～～神様も認めてくれたんだ～～～');
    }
    if (rm_debuff) {
      era.println();
      await era.printAndWait([
        maya.get_colored_name(),
        ' のトレーニングが、一段とうまく回り始めた……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async out_station(maya, you, callname) {
    const buffer = [];
    era.print('駅でなにをする？');
    era.printButton('食事', 1);
    era.printButton('デート', 2);
    era.printButton('映画', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        await maya.say_and_wait([
          'デート、デート🌟 ',
          callname,
          '、どこ行く🎵',
        ]);
        buffer.push(
          async () => {
            await maya.say_and_wait('あわわわわわ……');
            await maya.say_and_wait('マヤ……マヤは大人だから、食べきれるもん！');
            await era.printAndWait([
              maya.get_colored_name(),
              ' と中華料理を食べた。',
              maya.sex,
              'は辛いものが苦手だが、伝説の麻婆豆腐に挑戦した……',
            ]);
          },
          async () => {
            await maya.say_and_wait([callname, '、あーんして！ あ……']);
            await era.printAndWait([
              maya.get_colored_name(),
              ' とファミレスへ行き、素朴なメニューでも二人は楽しそうに食べた。',
            ]);
          },
          async () => {
            await maya.say_and_wait('こ……これが伝説のキャンドルディナー！');
            await maya.say_and_wait('マヤ、今日やっと大人の階段、登るの？');
            await era.printAndWait([
              maya.get_colored_name(),
              ' と洋食店へ行った。上品な空気に、',
              maya.sex,
              'の胸は小鹿のように跳ねている。',
            ]);
          },
        );
        await get_random_entry(buffer)();
        break;
      case 2:
        if (Math.random() < 0.5) {
          await era.printAndWait([
            maya.get_colored_name(),
            ' と駅で落ち合う約束をした。',
          ]);
          await maya.say_and_wait([
            callname,
            ' きたきた～！ じゃあ一緒にデートしよ♪',
          ]);
          await maya.say_and_wait(
            'ねえ、こうやって待ち合わせるの、なんか……カップルみたいじゃない？',
          );
          await maya.say_and_wait(
            '冗談だよ！ ドキドキした？ マヤのこと、気になっちゃったでしょ？',
          );
          await maya.say_and_wait('『大人の魅力で揺さぶる作戦』、大成功だね🌟');
          await era.printAndWait([
            '認めたくはないが、',
            you.get_colored_name(),
            ' は本当に ',
            maya.get_colored_name(),
            ' に惹かれているのかもしれない。',
          ]);
        } else {
          await era.printAndWait([
            maya.get_colored_name(),
            ' と駅前の大通りを歩いた。',
          ]);
          await maya.say_and_wait('わ……今日、街の人多い……');
          await maya.say_and_wait([callname, '、はぐれないように手つなご！']);
          await maya.say_and_wait(
            'えへへ……こうやって手つなんで歩くの、カップルみたい♪',
          );
          await era.printAndWait([
            '傍から見れば、大人が子供を連れて歩いているように見えるかもしれない……どちらにせよ、',
            maya.get_colored_name(),
            ' が楽しければそれでいい。',
          ]);
        }
        break;
      case 3:
        await era.printAndWait([
          maya.get_colored_name(),
          ' と、新作映画を見に行った。',
        ]);
        if (Math.random() < 0.5) {
          await maya.say_and_wait([callname, ' ', callname, '！ 今の見た！']);
          await maya.say_and_wait(
            '飛行機だよ！ マヤのお父さんが操縦してるの！',
          );
          await maya.say_and_wait('いつかマヤも、青い空を飛ぶんだ🌟');
          await maya.say_and_wait([
            'だから ',
            callname,
            '、ちゃんとついてきてね？',
          ]);
          await era.printAndWait([
            '偶然なのか、ちょうど ',
            maya.get_colored_name(),
            ' の父親が出演するアクション映画に当たり、',
            maya.get_colored_name(),
            ' はとても嬉しそうだった。',
          ]);
        } else {
          await maya.say_and_wait(
            '犯人、やっぱりあの人だ！ マヤ、最初からわかってた！',
          );
          await maya.say_and_wait([
            'どう、マヤ頭いいでしょ♪ ',
            callname,
            '、もっと褒めてもいいよ？',
          ]);
          await era.printAndWait([
            maya.get_colored_name(),
            ' は結末を当てていたが、ちゃんと楽しめていたようだ？',
          ]);
        }
    }
    return ret;
  },
};
