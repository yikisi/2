/**
 * @file キタサンブラック - 日常
 * @author 小黑（原作）
 * @author 黑奴一号 黑奴队长（改编）
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} daiya サトノダイヤモンド
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_3 キタサンのトウカイテイオーへの呼び方
   * @param {PrintedSpan} call_7 キタサンのゴールドシップへの呼び方
   * @param {PrintedSpan} call_44 キタサンのトランセンドへの呼び方
   * @param {PrintedSpan} call_67 キタサンのサトノダイヤモンドへの呼び方
   * @param {PrintedSpan} call_98 キタサンのコパノリッキーへの呼び方
   * @param {PrintedSpan} call_301 キタサンの駿川たづなへの呼び方
   */
  good_morning(
    kita,
    daiya,
    you,
    callname,
    call_3,
    call_7,
    call_44,
    call_67,
    call_98,
    call_301,
  ) {
    const buffer = [];
    buffer.push(
      () =>
        kita.say([
          '今日も体は異常なし、',
          callname,
          '、トレーニング始めよう！',
        ]),
      () =>
        kita.say([
          call_3,
          ' ほど強くはないけど、ボク、がんばって強くなって証明するから！',
        ]),
      () =>
        kita.say([
          'レースみたいな大事な日に向けて、',
          callname,
          '、遠慮なくボクを鍛えて、ボクだけの武器をください。',
        ]),
      () => {
        kita.say([
          '最近、',
          call_67,
          ' が',
          kita.sex,
          '、よくボクを変な料理に連れていくんだ。ほうれん草カレーとか、チョコ鍋とか……',
        ]);
        kita.say([
          '……どれも面白い料理だけど、',
          call_67,
          ' の連れてく店、ちょっと奇抜すぎない？',
        ]);
        era.print([
          kita.get_colored_name(),
          ' は少し膨らんだお腹を押さえ、不思議そうな顔をした。',
        ]);
      },
      () => {
        kita.say([call_44, '、最近錬金術まで覚えたみたい。すごいなあ～']);
        era.print([
          kita.get_colored_name(),
          ' はにこにこと、',
          you.get_colored_name(),
          ' に身の回りの出来事を話している。',
        ]);
      },
      () => {
        kita.say([
          callname,
          '、最近ちょっと運が悪いみたい？こういうときは、頼りになる ',
          call_98,
          ' に開運してもらわないと！',
        ]);
        era.print([
          'ひとりでそう言いながら、',
          kita.get_colored_name(),
          ' はスタスタと走っていった。',
        ]);
      },
      () => {
        kita.say([
          call_3,
          ' がボクのトレーニングを見てるみたい。よし、ボクも負けないようにがんばる！',
        ]);
        era.print([
          '信念に火がついた ',
          kita.get_colored_name(),
          ' は、今日のトレーニングを真剣に支度し始めた。',
        ]);
      },
      () => {
        kita.say([
          '最近、',
          call_301,
          ' が新しいヘアケアを買ってるみたいだよ、',
          callname,
          ' は髪、ちゃんと手入れしてる？',
        ]);
        era.print([
          you.get_colored_name(),
          ' の髪を揉みながら、',
          kita.get_colored_name(),
          ' は太陽みたいに熱い笑顔を見せた。',
        ]);
      },
    );
    if (era.get('love:68') >= 90) {
      buffer.push(
        () => {
          kita.say([
            '最近、',
            callname,
            ' が指導してくれる声、もう手放せない気がするんだ。',
          ]);
          kita.say(
            '指示が出るたびに心臓がドキドキして、命令を果たしたら褒めてほしくなる。お祭りみたいに興奮しちゃう。',
          );
          era.print([
            kita.get_colored_name(),
            ' は指を突き、頬をほんのり赤らめた。',
          ]);
        },
        () => {
          kita.say([
            '最近、尻尾でバーベルを上げられるか挑戦してるんだ。',
            callname,
            '、一緒に試してみてくれる？',
          ]);
          era.print([
            '尻尾で ',
            you.get_colored_name(),
            ' のふくらはぎを巻いた ',
            kita.get_colored_name(),
            ' は、冗談めかして ',
            you.get_colored_name(),
            ' に言った。',
          ]);
        },
        () => {
          kita.say('やあ～ウォーミングアップしたら全身くさい汗だよ～');
          kita.say(
            '今夜もぱっとお風呂の湯に飛び込んで、中も外もきれいにするね！',
          );
          era.print([
            kita.get_colored_name(),
            ' は腕を上げて脇の匂いを嗅ぎ、濡れ光る滑らかな脇を ',
            you.get_colored_name(),
            ' の前に晒した',
          ]);
        },
        () => {
          kita.say([
            callname,
            '、今週末いっしょに雪山でトレーニングしよう！',
            '大丈夫、時間に間に合わなかったらボクがトレーナーを抱えて走って帰るから！絶対遅れないよ！',
          ]);
          era.print([
            '乗り気の ',
            kita.get_colored_name(),
            ' は、',
            you.get_colored_name(),
            ' にべたべたと触り始めた。',
          ]);
        },
      );
    } else if (era.get('love:68') >= 75) {
      buffer.push(
        () => {
          kita.say([
            '深空の黒い花火！魔法少女ゲンイロ！こういう決め台詞、',
            call_44,
            ' は好きになってくれるかな？',
          ]);
          era.print([
            kita.get_colored_name(),
            ' はくるりと回り、今年のプリキュアの変身ポーズを決めた。',
          ]);
        },
        () => {
          kita.say(
            '次のレースに向けて、倍がんばって、ボクだけの武器を鍛える！',
          );
          era.print([
            '闘志を燃やした ',
            kita.get_colored_name(),
            ' は、今日のトレーニングの支度を整えた。',
          ]);
        },
        () => {
          kita.say(
            '最近、桐生院トレーナーが「鋼の意志」を誰も習いたがらないって悩んでるみたい。',
          );
          kita.say([
            'なんでか ',
            call_67,
            ' まで真剣な顔で賛同してて、なんでだろう？',
          ]);
        },
        () => {
          kita.say([
            callname,
            ' はボクの人助け大将だよ。だからずっとありがとう、',
            callname,
            '！えへへ！',
          ]);
          era.print([
            kita.get_colored_name(),
            ' は笑いながら寄ってきて、黒い馬耳がぱたぱたと ',
            you.get_colored_name(),
            ' の首筋を叩く。',
          ]);
        },
      );
    } else if (era.get('love:68') >= 50) {
      buffer.push(
        () => {
          kita.say([
            callname,
            ' の匂いを嗅いだだけで、胸が小鹿みたいに止まらなくなるんだ。',
          ]);
          kita.say('この気持ち、いったい何なんだろう？');
          era.print([
            kita.get_colored_name(),
            ' は尻尾で ',
            you.get_colored_name(),
            ' のふくらはぎを叩き、言いようのない顔をした。',
          ]);
        },
        () => {
          kita.say([
            'ん、昨日 ',
            call_7,
            ' と併走したあと、足がちょっと痛い……',
          ]);
          kita.say([callname, '、見てくれる？']);
          era.print([
            'ブーツを脱いだ ',
            kita.get_colored_name(),
            ' は、むっちり白い小さな足を ',
            you.get_colored_name(),
            ' の前へ持ち上げた。',
          ]);
        },
        () => {
          kita.say([
            'トレセン学園にいるあいだ、',
            callname,
            ' はずっとボクをよく見てくれた！',
          ]);
          kita.say(
            'でも卒業したら、この世話の時間も終わるよね。だから卒業まで、トレーナーにちゃんとお返ししないと！',
          );
          era.print([
            'ふとした拍子に感慨の顔を見せた ',
            kita.get_colored_name(),
            ' は、',
            you.get_colored_name(),
            ' のためにさらにがんばるようになった。',
          ]);
        },
      );
      if (kita.sex_code !== 1) {
        buffer.push(() => {
          kita.say([
            '最近、',
            call_67,
            '、毎晩布団を被ってベッドで変な声を出してるみたい',
          ]);
          kita.say(['胸もずいぶん大きくなったし、学校が寂しすぎるのかな？']);
          era.print([
            '純粋な顔の ',
            kita.get_colored_name(),
            ' は、',
            daiya.get_colored_name(),
            ' が来る前にスタスタと走っていった。',
          ]);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  select(kita, you, callname) {
    if (era.get('base:68:体力') < era.get('maxbase:68:体力') / 3) {
      kita.say('あれ……ボクの体力、まだいけるはずじゃ？');
      era.print([
        kita.get_colored_name(),
        ' は大きく息を切らし、もうトレーニングする力がなさそうだ。',
      ]);
    } else {
      const buffer = [];
      buffer.push(
        () => {
          kita.say([
            'ううう……ごめん ',
            callname,
            '！足を捻ったお相撲さんが助けを求めてて、遅れちゃった！',
          ]);
          era.print([
            kita.get_colored_name(),
            ' は両手を合わせたが、助けられた自分にはかなり誇らしそうだ。',
          ]);
        },
        () => {
          kita.say([
            '今日はちゃんと間に合ったね、',
            callname,
            '～じゃあ早速、トレーニング始めよう',
          ]);
          era.print([
            'もう汗だくの ',
            kita.get_colored_name(),
            ' は、にこにこと ',
            you.get_colored_name(),
            ' に言った。',
          ]);
        },
      );
      if (era.get('love:68') >= 75) {
        buffer.push(() => {
          kita.say('最近、トレーナーに命令されたあとの体がほてる……');
          kita.say([callname, '、もっとボクに要求してくれる？']);
          era.print([
            kita.get_colored_name(),
            ' の頬がほんのり赤くなり、',
            you.get_colored_name(),
            ' に指摘されて慌てて顔を覆って走っていった。',
          ]);
        });
      } else if (era.get('love:68') >= 50) {
        buffer.push(
          () => {
            kita.say([
              'よいしょよいしょ、へへ～今日の ',
              callname,
              ' のトレーニングもすごいね。でもボクは負けないよ！',
            ]);
            era.print([
              kita.get_colored_name(),
              ' は最近トレーニングにかなり真剣で、指示をもらうとすぐに次の指示が欲しくなる。',
            ]);
          },
          () => {
            kita.say(['最近、', callname, ' に一目惚れした気がする……']);
            kita.say([callname, ' も、キタのボクに、同じ気持ちだったりする？']);
            era.print([
              you.get_colored_name(),
              ' のそばで小さく何かを呟いていた ',
              kita.get_colored_name(),
              ' は、',
              you.get_colored_name(),
              ' が近づくと首を振って笑いながら走っていった。',
            ]);
          },
        );
      } else {
        buffer.push(() => {
          kita.say([
            callname,
            ' に褒めてほしい、',
            callname,
            ' に勝ったあと微笑んでほしい。',
          ]);
          kita.say([
            'だから ',
            callname,
            '、今日のトレーニングも手加減なしでお願いします！',
          ]);
          era.print([
            '笑顔の ',
            kita.get_colored_name(),
            ' は、いつものように変わらないように見える。',
          ]);
        });
      }
      get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} kita キタサンブラック */
  async office_study(kita) {
    const buffer = [
      () => kita.say_and_wait('文学を指導してくれるの？うん、倍がんばる！'),
      () =>
        kita.say_and_wait(
          'ううう……がんばっても数学は数学で、やっぱり分からない……',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async office_prepare(kita, teio, you, callname) {
    const buffer = [
      async () => {
        await kita.say_and_wait(
          '蜂蜜を小さじ一杯、パパイヤを切って入れて……よし！レース前の準備、ひとつできた！',
        );
        await era.printAndWait([
          'そう笑って ',
          you.get_colored_name(),
          ' に話す',
          kita.get_colored_name(),
          ' は、あとで食べ物を無駄にしないため蜂蜜水を全部 ',
          teio.get_colored_name(),
          ' に飲ませてしまった。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          ' が蹄鉄を打ってくれるの？えへへ～こんなの、ボクが自分でやるよ～',
        ]);
        await era.printAndWait([
          'そう言いながら ',
          kita.get_colored_name(),
          ' は、指で蹄鉄の釘を一本ずつ押し込んだ。',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '加速のときは重心を抑える、なるほど。できたら次は勝てるね。',
        );
        await era.printAndWait([
          'ホワイトボードの計画を真剣に見て、',
          kita.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の案どおり、すぐに外へ一周走っていった。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async talk(kita, callname) {
    const buffer = [];
    switch (era.get('cflag:68:干劲')) {
      case -2:
        buffer.push(
          () =>
            kita.say_and_wait('あれ？ボクの取り柄は根性が売り……だったよね？'),
          () =>
            kita.say_and_wait([
              'ごめん ',
              callname,
              '、いつものトレーニングの力……消えちゃったみたい……',
            ]),
        );
        break;
      case -1:
        buffer.push(
          () => kita.say_and_wait('うんうん……力が入らない、変だなあ……'),
          () => kita.say_and_wait('あの……なんだかふわふわする？'),
        );
        break;
      case 0:
        buffer.push(
          () =>
            kita.say_and_wait('どんなトレーニングでも、どんどん片付けちゃおう'),
          () =>
            kita.say_and_wait([
              callname,
              '、トレーニング始めよう！準備はできてるよ！',
            ]),
        );
        break;
      case 1:
        buffer.push(
          () =>
            kita.say_and_wait(
              'いつもよりすごいトレーニングでも、へっちゃらだよ',
            ),
          () =>
            kita.say_and_wait([
              'ボクは根性だけは負けないから、',
              callname,
              '、兵器みたいに鍛えてください！',
            ]),
        );
        break;
      case 2:
        buffer.push(
          () => kita.say_and_wait('ふふ、この勢いに乗れば、何でもできる！'),
          () => kita.say_and_wait('足が軽い、頭が速い、今日のキタはすごいよ！'),
        );
        break;
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async office_cook(kita, you, callname) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          callname,
          '、ちゃんと食べないでカップ麺で済ますのはダメだよ。食べるなら葉っぱくらいは入れて。',
        ]);
        await era.printAndWait([
          'お母さんみたいな ',
          kita.get_colored_name(),
          ' は、',
          you.get_colored_name(),
          ' の了解を得てほうれん草と白菜を小鍋に入れた。',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          'ええ？トレーナー室で鍋？さすが大人、大胆だなあ。',
        );
        await era.printAndWait([
          '畏まる目で発熱剤の鍋を見つめる ',
          kita.get_colored_name(),
          ' は、珍しいものを見た小黒猫のようだ。',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '商店街の皆さんが賞味期限間近のパンと牛乳をくれたんだ。いっしょにサンドイッチ作らない？',
        );
        await era.printAndWait([
          'そう言いながら、',
          kita.get_colored_name(),
          ' は期限間近のパンを箱ごと運び出した。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async office_rest(kita, you, callname) {
    const buffer = [
      async () => {
        await kita.say_and_wait('休むの？大丈夫大丈夫、キタの体は頑丈だよ。');
        await kita.say_and_wait([
          'それより ',
          callname,
          '、トレーニング続けよう！',
        ]);
        await era.printAndWait([
          'そう胸を叩いて笑顔の ',
          kita.get_colored_name(),
          ' も、',
          you.get_colored_name(),
          ' の命令ではおとなしく休んだ。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          '、本当に疲れてないよ……だから昼寝しなくてもいいんだよ……',
        ]);
        await era.printAndWait([
          '小さく呟いていた ',
          kita.get_colored_name(),
          ' は、横になってしばらくで眠ってしまった。',
        ]);
      },
      async () => {
        await kita.say_and_wait('ちゃらら～今日もちゃんとトレーニング～');
        await kita.say_and_wait('休みすぎてだらけちゃダメだよ～ちゃらら～');
        await era.printAndWait([
          'ソファに寝転んで油性ペンをマイクに握り、',
          kita.get_colored_name(),
          ' は小さく歌い出した。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_67 キタサンのサトノダイヤモンドへの呼び方
   */
  async office_game(kita, you, callname, call_67) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          'うう……',
          call_67,
          ' の家のゲームをやるんだ……',
        ]);
        await era.printAndWait([
          '乗り気だった ',
          kita.get_colored_name(),
          ' は、Ｓ〇ＧＡのゲーム機を見てすぐ耳を垂れた。',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          'うおおお～通常召喚、ドラゴンメイド・ラドリー！墓地へランダムに三枚！',
        );
        await era.printAndWait([
          'そう言いながら、',
          kita.get_colored_name(),
          ' はドラゴンメイド・ラドリーを場に伏せ、光の創造神を墓地へ送った。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          '',
          callname,
          '！サイコロやろう！面白いよ！',
        ]);
        await kita.say_and_wait(
          '実家にいたころ、東城会のお兄さんたちとよくやってたんだ。えへへ～',
        );
        await era.printAndWait([
          '指でサイコロを掴み、',
          kita.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の前で、',
          you.get_colored_name(),
          ' が見たことのない「掬い」サイコロを始めた。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async o_r_fishing(kita, you, callname) {
    await era.printAndWait([
      'と ',
      kita.get_colored_name(),
      ' は釣りに行く約束をした……',
    ]);
    const buffer = [
      async () => {
        await kita.say_and_wait('ソーランソーランソーラン！よっ～！');
        await era.printAndWait(
          'なぜか釣りが、マグロ船でマグロを獲る作業になっていた！？',
        );
        await era.printAndWait([
          '波頭で高低差六メートルにもなる漁船上、',
          kita.get_colored_name(),
          ' は桁外れの力で網をたぐっている。',
        ]);
        await era.printAndWait([
          '絶景と呼べるその姿と数ヶ月の仕事が、永遠に ',
          you.get_colored_name(),
          ' の頭に焼き付いた。',
        ]);
      },
      async () => {
        await kita.say_and_wait(['また一匹釣れた！', callname, '、見た？']);
        await era.printAndWait([
          'さすが黒',
          kita.elder_sibling_sex_title,
          '、すごい！幼い称賛の声が途切れない。',
        ]);
        await era.printAndWait([
          kita.get_colored_name(),
          ' は嬉しそうに尻尾を振り、ピンクの子供用竿を振ってウキを水へ投げた。',
        ]);
        await kita.say_and_wait('えへっころ～えいよっへ～ソーランソーラン！');
        await era.printAndWait([
          '漁の掛け声を歌い、',
          kita.get_colored_name(),
          ' の熱く眩しい姿が ',
          you.get_colored_name(),
          ' の目に深く焼き付いた。',
        ]);
      },
      async () => {
        await kita.say_and_wait('ふんふんふん～ふんふんふんふんふん～');
        await era.printAndWait([
          kita.get_colored_name(),
          ' は小さく鼻歌を歌い、静かに魚がかかるのを待っている',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async o_r_walking(kita, you, callname) {
    const buffer = [
      () =>
        kita.say_and_wait(
          '川辺の空気、澄んでて涼しい。こういう天気がいちばん走りやすいよ～',
        ),
      () =>
        kita.say_and_wait('川辺に葦原が生えてる！まるで実家に戻ったみたい。'),
      async () => {
        await kita.say_and_wait(
          '川沿いの散歩でも、転んだ格闘家に会うんだね。運びはボクに任せて！',
        );
        await kita.say_and_wait([
          'え？転んだんじゃなくて殴られたみたい？',
          callname,
          '、冗談上手だなあ～ただの捻挫だよ～',
        ]);
        await era.printAndWait([
          'はぐらかす ',
          kita.get_colored_name(),
          ' は、怪我した格闘家を背負い、数メートルの川を軽く飛び越えた。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_3 キタサンのトウカイテイオーへの呼び方
   * @param {PrintedSpan} call_13 キタサンのメジロマックイーンへの呼び方
   */
  async o_s_arcade(kita, you, callname, call_3, call_13) {
    const buffer = [
      async () => {
        await kita.say_and_wait([callname, '、いくよ！花鳥風月おおおお！']);
        await era.printAndWait([
          '軽快にボタンを叩き、',
          kita.get_colored_name(),
          ' の操る花の妖怪が一跳びし、黒曜の武道家の肋骨を折った。',
        ]);
      },
      async () => {
        await kita.say_and_wait('ううう、このクレーンの締め具合は……');
        await era.printAndWait([
          '数分もクレーンゲームに頬を貼り付けていた ',
          kita.get_colored_name(),
          ' は、やっと硬貨を出して投入した。',
        ]);
      },
      async () => {
        await era.printAndWait([
          'と ',
          kita.get_colored_name(),
          ' はゲームセンターへ行った……',
        ]);
        await kita.say_and_wait([
          call_3,
          ' と ',
          call_13,
          ' のぬいぐるみ！トレセン近くのクレーンにも、やっと入荷した！',
        ]);
        await era.printAndWait(
          'そうは言っても目当てはゲームセンターではなく、店内のクレーンゲームだった。',
        );
        await era.printAndWait([
          '長蛇の人波を乗り越えてもなお乗り気の ',
          kita.get_colored_name(),
          ' は、硬貨を何枚か投入口へ押し込んだ。',
        ]);
        await era.printAndWait([
          'だが少々粗い技術に ',
          you.get_colored_name(),
          ' は心配になる。',
          kita.get_colored_name(),
          ' はクレーン初心者に見える。本当に欲しいぬいぐるみは取れるのか…？',
        ]);
        await kita.say_and_wait(
          '今日のキタは、財布が空になっても取る気で来てる！取らないわけにはいかないよ！',
        );
        await era.printAndWait([
          kita.get_colored_name(),
          ' の気炎を見て、',
          you.get_colored_name(),
          ' はついため息をつき、',
          kita.teen_sex_title,
          'のそばへ行って',
          kita.sex,
          'の代わりにレバーを握った。',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_44 キタサンのトランセンドへの呼び方
   * @param {PrintedSpan} call_67 キタサンのサトノダイヤモンドへの呼び方
   * @param {boolean} hot_spring 温泉旅行券を引いたか
   */
  async o_s_drawing(kita, you, callname, call_44, call_67, hot_spring) {
    await era.printAndWait([
      'と ',
      kita.get_colored_name(),
      ' は商店街の抽選会に参加した……',
    ]);
    if (hot_spring) {
      await kita.say_and_wait(
        'うう、いつも商店街の皆さんを手伝って行ってきたから無料でもらった抽選……はずさない！',
      );
      await era.printAndWait('ぐるぐるぐるぐる……');
      await era.printAndWait('びゅ～');
      await era.printAndWait('商店街の景品を獲得：【温泉旅行券】！');
      await kita.say_and_wait('やった！特等！特等だよトレーナー！はははは！');
      await kita.say_and_wait(
        'あ、でもこれ、商店街の皆さんが好意でくれた抽選だよ……こんな良いもの、貰っていいのかな？',
      );
      await era.printAndWait([
        '商店街の皆さんの微笑みに慰められ、',
        kita.get_colored_name(),
        ' は少し照れながら温泉旅行券を受け取った。',
      ]);
    } else {
      const buffer = [
        async () => {
          await kita.say_and_wait(
            '通りがかりの花山組の兄貴がくれた抽選券……何が当たるかな？',
          );
          await era.printAndWait('ぐるぐるぐるぐる……');
          await era.printAndWait('びゅ～');
          await era.printAndWait('商店街の景品を獲得：【普通のティッシュ】！');
          await kita.say_and_wait(
            'あう、ティッシュか。景品としては悪くないけど……',
          );
          await kita.say_and_wait(
            'やっぱり盤を壊すくらい、変な机まで回す勢いで回さないと……',
          );
          await era.printAndWait([
            kita.get_colored_name(),
            ' はティッシュを受け取り、しょんぼりと項垂れた。',
          ]);
        },
        async () => {
          await kita.say_and_wait([
            call_67,
            ' が商店街で買い物したあとくれた抽選券、試してみる！',
          ]);
          await era.printAndWait('ぐるぐるぐるぐる……');
          await era.printAndWait('びゅ～');
          await era.printAndWait('商店街の景品を獲得：【ニンジン】！');
          await kita.say_and_wait(
            'う……ニンジン一本だけ？安すぎてちょっと悔しい……',
          );
          await kita.say_and_wait(
            'あ！でもニンジンでライブのマイクにもできる！えへへ～',
          );
          await era.printAndWait([
            'ニンジンを握って通りで嬉しそうに歌う ',
            kita.get_colored_name(),
            ' は、そのあとがりがりとそのニンジンを食べてしまった。',
          ]);
        },
        async () => {
          await kita.say_and_wait(
            'わあ、抽選だ～ちょうど町内会のおばさんがくれた券がある。トレーナー、やってみよう！',
          );
          await era.printAndWait('ぐるぐるぐるぐる……');
          await era.printAndWait('びゅ～');
          await era.printAndWait('商店街の景品を獲得：【ニンジン一籠】！');
          await kita.say_and_wait('すご、すごい！量、一二食分あるよ！');
          await era.printAndWait([
            'ニンジンの山のまわりを回り、みんなに分けると決めた',
            kita.get_colored_name(),
            ' を見て、',
            you.get_colored_name(),
            ' はこっそり一本抜き、',
            kita.teen_sex_title,
            'が自分の分を忘れないようにした。',
          ]);
        },
        async () => {
          await kita.say_and_wait([
            'えへへ、',
            call_44,
            ' がナプキンを買ったあとくれた抽選券。何が当たるかな？',
          ]);
          await era.printAndWait('ぐるぐるぐるぐる……');
          await era.printAndWait('びゅ～');
          await era.printAndWait(
            '商店街の景品を獲得：【特等ニンジンハンバーグ】！',
          );
          await kita.say_and_wait('豪快な料理！量もすごい！大鍋くらいあるよ！');
          await era.printAndWait([
            'こんな大きな肉はどこから来たんだ！',
            you.get_colored_name(),
            ' は突っ込みつつ、',
            kita.get_colored_name(),
            ' に煽られ、スマホでほかの子を呼んで肉を全滅させに行った。',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_44 キタサンのトランセンドへの呼び方
   */
  async o_s_ktv(kita, you, callname, call_44) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          'あああ～うん！発声は正常！',
          callname,
          '、ボク、歌のトレーニング始めるよ！',
        ]);
        await era.printAndWait([
          'マイクを握りしめ、',
          kita.get_colored_name(),
          ' はいつものように実家の演歌を歌い出した。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          '今日は歌だけじゃなくステップも鍛えるよ、',
          callname,
          '、見てて！しゃばたたたた～',
        ]);
        await era.printAndWait([
          'つま先立ちで回り、',
          kita.get_colored_name(),
          ' は跳ねながら帝王のステップを真似た。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          call_44,
          ' にブラックメタルを勧められたんだ。まだ聴いたことないけど、今日は歌ってみよう……',
          'え、ダメ？なんで ',
          callname,
          '？',
        ]);
        await era.printAndWait([
          '違う音楽に挑戦したかった ',
          kita.get_colored_name(),
          ' は、ぷうっと言った。',
        ]);
      },
    ];
    if (era.get('love:68') >= 75) {
      buffer.push(async () => {
        await kita.say_and_wait([
          'うわあああ……こ……この曲、ひどい！',
          callname,
          '、聴いちゃダメ！',
        ]);
        await era.printAndWait([
          '黄色っぽい歌詞を聴いたあと、',
          you.get_colored_name(),
          ' と ',
          kita.get_colored_name(),
          ' は慌てて曲を変えた。',
        ]);
      });
    } else if (era.get('love:68') >= 50) {
      buffer.push(
        async () => {
          await kita.say_and_wait([
            'どう ',
            callname,
            '、キタの歌声に震撼した？',
            'なんでそんな顔？ボク、何か間違えた？',
          ]);
          await era.printAndWait([
            kita.get_colored_name(),
            ' が何度も無自覚に ',
            you.get_colored_name(),
            ' へ恋歌を歌うのを聴いたあと、',
            you.get_colored_name(),
            ' は覚悟に近い顔になった。',
          ]);
        },
        async () => {
          await kita.say_and_wait([
            callname,
            '、ボクの歌、どうだった、えへへ……',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' の本気の称賛を受けたあと、尻尾で ',
            you.get_colored_name(),
            ' を叩く ',
            kita.get_colored_name(),
            ' は両脚を揃え、そっと擦り寄せた。',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_98 キタサンのコパノリッキーへの呼び方
   * @param {number} dice 祈祷の出目、0-1 の小数、小さいほど良い
   */
  async o_c_pray(kita, you, callname, call_98, dice) {
    await era.printAndWait([
      '今日、',
      you.get_colored_name(),
      ' は ',
      kita.get_colored_name(),
      ' と神社へ向かった。休みの日でも、',
      you.get_colored_name(),
      ' は担当に付き添って鳥居の前まで来た',
    ]);
    await era.printAndWait(
      '乗り気の担当のためでもあり、次のレースの祈願でもある。少し忙しくてもいい。',
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' はそう思い、鳥居をくぐって ',
      kita.get_colored_name(),
      ' が ',
      you.get_colored_name(),
      ' を連れてきたこの神社へ入った。',
    ]);
    era.println();
    era.printButton('「人が少ないな。」', 1);
    await era.input();
    await era.printAndWait(
      '古びて見えるこの神社は、いまかなり閑散としている。',
    );
    await era.printAndWait([
      '来ているのは ',
      you.get_colored_name(),
      ' と ',
      kita.get_colored_name(),
      ' の二人だけで、神職も巫女の姿もない。',
    ]);
    await era.printAndWait('ここ、本当に大丈夫なのか……？そんな疑問が浮かぶ。');
    await era.printAndWait([
      you.get_colored_name(),
      ' は、黙った担当が硬貨を何枚か出して賽銭箱へ投げ、手を叩いて合掌し、小さく何かを祈るのを見ていた。',
    ]);
    if (dice < 0.6) {
      await kita.say_and_wait('ふわあ、よかった～');
      await era.printAndWait([
        '黒髪の',
        kita.uma_sex_title,
        'はほっと息をつき、嬉しそうに胸を叩いて、陽だまりみたいな笑顔を見せた。',
      ]);
      await kita.say_and_wait([
        call_98,
        ' が勧めてくれた特別に霊験あらたかな神社だから、さっきまであまり喋れなかったんだ～',
      ]);
      await era.printAndWait('それが理由で黙ってたのか……');
      await era.printAndWait([
        you.get_colored_name(),
        ' はため息をつき、そばの担当の頭を軽く叩いた。',
      ]);
      await era.printAndWait([
        '気のせいか、',
        you.get_colored_name(),
        ' は体がかなり軽くなった気がした。',
      ]);
      await era.printAndWait([
        '次も参拝しよう、と ',
        you.get_colored_name(),
        ' は思わず考えた。',
      ]);
    } else {
      await kita.say_and_wait([
        'あまり良くないおみくじだった……でも大丈夫、',
        call_98,
        ' のところへ行って開運の儀式をしてもらおう！',
      ]);
      await era.printAndWait([
        'いつものように元気な ',
        kita.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' はほっとした気持ちが波のように来る。',
      ]);
      await era.printAndWait('……でも、少し苛立つ。');
    }
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_67 キタサンのサトノダイヤモンドへの呼び方
   * @param {PrintedSpan} call_98 キタサンのコパノリッキーへの呼び方
   */
  async o_s_restaurant(kita, you, callname, call_67, call_98) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          'ふああ～',
          call_67,
          ' が勧めてくれたラーメン屋、やっぱり量があるね。いただきます！',
        ]);
        await era.printAndWait([
          '牛肉ラーメンをがつがつ食べ、',
          kita.get_colored_name(),
          ' は幸せそうな顔をした。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          'あれが ',
          call_98,
          ' の勧めてくれた中華だよ、',
          callname,
          '、今日はここでチャーハンにしよう！',
        ]);
        await era.printAndWait([
          '無理やり古びた店へ引きずり込まれたあと、',
          you.get_colored_name(),
          ' と ',
          kita.get_colored_name(),
          ' は壁を伝って出てきた。',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          'えへへ、最近商店街を手伝って焼肉店のクーポンをもらったんだ。いっしょに行かない？',
        );
        await era.printAndWait([
          '油の乗った熱い焼肉丼を大盛りで食べたあと、',
          kita.get_colored_name(),
          ' の機嫌は目に見えて上がった。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          '！先週、隣の通りに新しいとんかつ屋ができたよ。',
        ]);
        await kita.say_and_wait(
          '量があるだけじゃなく、花山組の兄貴も拍手するらしい。行ってみよう！',
        );
        await era.printAndWait([
          '担当の推薦は確かに量のある良い店だった。だがその良い気分は、',
          kita.get_colored_name(),
          ' の膨らんだお腹を見た瞬間、跡形もなく消えた。',
        ]);
      },
    ];
    if (era.get('love:68') >= 90) {
      buffer.push(async () => {
        await kita.say_and_wait([
          '今日は、うなぎご飯だね……へへ、',
          callname,
          '、やる気出してね～',
        ]);
        await era.printAndWait([
          '隣に座った ',
          kita.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の肩に寄り、',
          you.get_colored_name(),
          ' の見えないところで照れた顔をした。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_3 キタサンのトウカイテイオーへの呼び方
   * @param {PrintedSpan} call_13 キタサンのメジロマックイーンへの呼び方
   * @param {PrintedSpan} call_67 キタサンのサトノダイヤモンドへの呼び方
   */
  async o_s_dating(kita, you, callname, call_3, call_13, call_67) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          'うわ～商店街、今日はボルダリング大会だよ～',
          callname,
          '、やってみる？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は遠くで準備運動する大相撲力士を見て、申し込みに行こうとする ',
          kita.get_colored_name(),
          ' をやっと止めた。',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          'あそこが ',
          call_67,
          ' のよく行く美容室だよ、へへ～ちょっと興味出てきた……',
        ]);
        await era.printAndWait([
          '入口で内装を覗いていた ',
          kita.get_colored_name(),
          ' は、結局美容室へ踏み込む決心はつかなかった',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          'きれいな土産物屋だね。',
          call_3,
          ' と ',
          call_13,
          ' の記念品、あるかな？',
        ]);
        await era.printAndWait([
          '店は少し古びて見えるが、',
          kita.get_colored_name(),
          ' が興味を持っているなら、いっしょに見て回ろう。',
        ]);
      },
    ];
    if (era.get('love:68') >= 90) {
      buffer.push(async () => {
        await kita.say_and_wait([
          callname,
          ' といっしょに通りを歩くだけで、すごく落ち着くよ～ふんふんふん～',
        ]);
        await kita.say_and_wait([callname, '、もっといっしょに歩いてくれる？']);
        await era.printAndWait([
          you.get_colored_name(),
          ' の腕にそっと絡み、',
          kita.get_colored_name(),
          ' は嬉しそうに ',
          you.get_colored_name(),
          ' の肩へ寄りかかった。',
        ]);
      });
    } else if (era.get('love:68') >= 75) {
      buffer.push(async () => {
        await kita.say_and_wait([
          'この時間の商店街は人通りが多いよ、',
          callname,
          '、はぐれないように気をつけてね。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の手をそっと握り、',
          kita.get_colored_name(),
          ' は耳を揺らし、黒い盲導犬のように ',
          you.get_colored_name(),
          ' の前を歩いた。',
        ]);
      });
    } else if (era.get('love:68') >= 50) {
      buffer.push(async () => {
        await kita.say_and_wait(
          'トレセンの近くに牧場があるなんて。次、いっしょに見に行こう～',
        );
        await era.printAndWait([
          'つま先立ちで柵の中を眺め、',
          kita.get_colored_name(),
          ' は興奮して鼻歌を歌い出した。',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  good_night_normal(kita, you, callname) {
    era.print([
      '忙しい一日が終わり、',
      you.get_colored_name(),
      ' は ',
      kita.get_colored_name(),
      ' を学生寮の入口まで送った……',
    ]);
    if (era.get('love:68') >= 50) {
      kita.say(['えへへ、', callname, '、また明日ね！']);
      era.print([
        'そう言いながら、',
        kita.get_colored_name(),
        ' は思いきり ',
        you.get_colored_name(),
        ' にすり寄り、それからたたたと走っていった。',
      ]);
    } else {
      kita.say([
        callname,
        '、今日は本当にお疲れさまでした。明日もボク、がんばるから。',
      ]);
      era.print([
        kita.get_colored_name(),
        ' は深く ',
        you.get_colored_name(),
        ' に一礼し、',
        you.get_colored_name(),
        ' は ',
        kita.get_colored_name(),
        ' の頭を撫で、',
        kita.sex,
        'が寮に入るのを見てから振り返って去った。',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {1|2} check おやすみ求愛判定、=2 は大成功で拒否不可
   */
  async good_night_sex(kita, you, check) {
    era.print([
      '忙しい一日が終わり、',
      you.get_colored_name(),
      ' は ',
      kita.get_colored_name(),
      ' を学生寮の入口まで送った……',
    ]);
    era.print([
      you.get_colored_name(),
      ' はいつものように別れようとしたが、',
      kita.get_colored_name(),
      ' はいつになく ',
      you.get_colored_name(),
      ' を帰さない',
    ]);
    era.printButton('合図を受け取る', 1);
    era.printButton('とぼける', 2, { disabled: check === 2 });
    return await era.input();
  },
  punishment_1: (() => {
    const title = 'お仕置きのあと';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await kita.say_and_wait(
        'うわあ～トレーナーがウマ娘になっちゃった！かわいい～',
      );
      if (kita.sex_code !== 1) {
        await kita.say_and_wait(
          'えへへ～同じウマ娘だと、前より恥ずかしさが減る気がするよ～',
        );
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' を抱えて親しげに跳ね回り、こっそり興奮した顔を見せる ',
        kita.get_colored_name(),
        ' は笑った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  punishment_3: (() => {
    const title = 'お仕置きのあと';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await kita.say_and_wait(
        'いじめられ好きなのはキタのほうなのに、ふんふん～でもトレーナーのほうが、ボクよりいじめられたいみたい。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の耳元でそっとそう言い、黒い',
        kita.uma_sex_title,
        'は獲物を見るような目をした。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_valentine: (() => {
    const title = 'バレンタインの澄んだ匂い';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        'バレンタイン、別名聖ヴァレンタインの日は、互いを好く男女が贈り物を交わす祭りだ。',
      );
      await era.printAndWait(
        '社会では、男女の恋人たちが互いに甘える、ねっとりした一日になる。',
      );
      await era.printAndWait(
        'だが学園では、菓子を見せ合い、分け隔てなくチョコレートを配る日でもある。皆が楽しそうに甘いものを食べ、先生への分も忘れない。',
      );
      await era.printAndWait([
        '世話をした生徒と同僚から届いたチョコレートを七八箱置いたあと、',
        you.get_colored_name(),
        ' は机の後ろに座り、仕事の支度をした。',
      ]);
      await kita.say_and_wait([callname, '、いる？']);
      await kita.say_and_wait([
        'へへへ～ハッピーバレンタイン ',
        callname,
        '！これ、キタから ',
        callname,
        ' へのプレゼントだよ！',
      ]);
      await era.printAndWait([
        'そう言いながら、',
        kita.get_colored_name(),
        'は手の贈り物を ',
        you.get_colored_name(),
        ' に渡し、',
        you.get_colored_name(),
        ' は包装を開け、中の黒いチョコレートを出した。',
      ]);
      await era.printAndWait([
        'なかなか良い贈り物だ。',
        kita.get_colored_name(),
        ' の期待する目の下で、',
        you.get_colored_name(),
        ' はチョコレートを一口噛み、',
        kita.teen_sex_title,
        'の小さな頭を軽く撫でた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = 'クリスマスの特別メニュー';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        'クリスマスのトレセンは、ここ十数年と同じようにやかましい。',
      );
      await era.printAndWait([
        'いま、',
        you.get_colored_name(),
        ' と ',
        kita.get_colored_name(),
        ' もほかの人と同じく、食堂で祭りを祝い、食堂の休日特別メニューを楽しんでいる。',
      ]);
      await kita.say_and_wait(
        'うむむ……フライドポテト大を二皿、チキンナゲットとチキンバーガーを四つ、コーラ二杯……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' のそばで、',
        you.get_colored_name(),
        ' の担当はつま先立ちでカウンター裏のメニューを見、カロリーの高い品を遠慮なく頼んでいる。',
      ]);
      await era.printAndWait([
        '今後のトレーニング、強度を上げないといけないな……',
        you.get_colored_name(),
        ' は心の手帳に、黙って一行記した。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  slave_end: (() => {
    const title = '地獄の演歌祭り';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait('たた、たた、たた。');
      await era.printAndWait([
        kita.get_colored_name(),
        ' の足音はいつもどおり時間どおりに門外で鳴り、いっしょに聞こえるのは',
        kita.uma_sex_title,
        'の明るい歌声だ。',
      ]);
      await kita.say_and_wait([
        callname,
        '、こんにちは。ちゃんとご飯食べてる？',
      ]);
      await era.printAndWait(
        '引き戸を左右に開けると、目に入るのはキタの、陽だまりみたいに温かい表情だ。',
      );
      await era.printAndWait([
        'だが同時にそれは、',
        you.get_colored_name(),
        ' 最大の債権者が見せる、あまりに愉快で、',
        you.get_colored_name(),
        ' に重圧をかける笑顔でもある。',
      ]);
      await kita.say_and_wait(
        'うへへ～あと数ヶ月で普通の生活に戻れて、トレセン学園に戻れると思う。',
      );
      await kita.say_and_wait(
        'このくらいの借金で済んでよかったね。まだキタがなんとかできる範囲だよ。',
      );
      await kita.say_and_wait(
        'でもこれから借りるなら、キタから借りればいいよ。ほかの借金、あんまりまともに見えないし。',
      );
      await era.printAndWait([
        '微笑みながらゆっくり ',
        you.get_colored_name(),
        ' の手を握る、『見返りを求めない』',
        kita.get_colored_name(),
        ' の顔は、',
        you.get_colored_name(),
        ' が何も払わずに迎えるハッピーエンドでは、決してなかった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
