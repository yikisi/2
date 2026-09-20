/**
 * @file ランダム小イベント
 * @author イーウィヤ
 * @author 雞雞
 * @author 幽白書
 * @author KUN
 * @author Mr.E.
 * @author 念来过倒要你
 * @author 牛蛙煲
 */
const {
  add,
  clear,
  drawLine,
  get,
  getLineCount,
  input,
  print,
  printAndWait,
  printButton,
  printInColRows,
  println,
  waitAnyKey,
} = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { get_chara_color } = require('#/data/chara-colors');

module.exports = {
  god_coin: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} _ 無意味な引数だが残す必要あり
     * @param {number} dice 祈りのダイス。0-1 の小数で、小さいほど良い
     * @param {number|undefined} god ランダムな女神の ID（その女神の好感が当たった場合）。全員が受肉済みなら undefined
     */
    const f = async (_, dice, god) => {
      await printAndWait('コインを投げて、願い事をしよう……');
      if (dice < 0.4 && god) {
        await printAndWait(
          '……幻聴だろうか。なぜか親しみと信頼が湧いてくる声が聞こえた……',
        );
        const color = get_chara_color(god);
        switch (god) {
          case 340:
            await printAndWait('情熱的な、赤い声……', {
              color,
            });
            break;
          case 341:
            await printAndWait('包容力のある、青い声……', {
              color,
            });
            break;
          case 342:
            await printAndWait('厳しい、黄色い声……', {
              color,
            });
        }
      } else if (dice < 0.7) {
        await printAndWait('ああ……これ、いけるかも……？');
        await printAndWait(
          'そうは言ったものの……何も思いつかない。だが、よく考えると何かが分かった気がする……',
        );
      } else if (dice < 0.9) {
        await printAndWait('やはり何も起きなかった……');
      } else {
        await printAndWait('拾い上げたら、二枚になっていた！');
      }
    };
    f.title = '三女神像の下の願いの池';
    return f;
  })(),
  all_round_meek: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} meek ハッピーミーク
     */
    const f = async (meek) => {
      await printAndWait(
        'どこからか、時代を感じさせる一枚の紙が飛んできた！？',
      );
      await printAndWait('……手を伸ばして掴んだ。');
      await printAndWait(
        '短距離、マイル、中距離、長距離の内容が、なんで同じ一ページに載ってるんだよ——',
      );
      await meek.say_and_wait('あの、それ、返していただけますか……');
      await printAndWait([
        '驚いているところへ、',
        meek.get_colored_name(),
        ' に声をかけられた。',
      ]);
      await printAndWait(
        '……他人の宝物を覗いてしまったような後ろめたさで、素直に返した。',
      );
      println();
      await printAndWait(
        '……あれ、もしかしてあのページ、桐生院家のトレーニング秘伝だった！？',
      );
      await printAndWait(
        'ずいぶん経ってから突然思い出し、手のひらを思いきり叩いた。',
      );
    };
    f.title = '何でも少しはできるミークさん';
    return f;
  })(),
  experiment: (() => {
    /**
     * @author イーウィヤ
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} ss サンデーサイレンス（正確にはカフェの「友人」）
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {boolean} is_endu_med スタミナ薬かどうか
     */
    const f = async (you, ss, coffee, is_endu_med) => {
      await you.say_and_wait('誰かいる……');
      println();
      await printAndWait('この教室、別用途で使われてるなんて聞いてないが……');
      await printAndWait([
        '突然の大雨、突然の雷。追い立てられるように、',
        you.get_colored_name(),
        ' はこの小さな宝庫へたどり着いた。',
      ]);
      println();
      await you.say_and_wait('たぶん、どれか一つ選べということか？');
      println();
      await printAndWait('革紐に収まったワインレッドの薬');
      await printAndWait('そして、少し古びた黒猫のぬいぐるみ');
      println();
      you.say('どっちにしよう……', true);
      printButton('薬（スタミナ+? または 体力+50）', 1);
      printButton('ぬいぐるみ（賢さ+8、スキルPt+?）', 2);
      const ret = await input();
      if (ret === 1) {
        if (is_endu_med) {
          await printAndWait('にがっ——');
        } else {
          await printAndWait('からっ——');
        }
      } else {
        await ss.say_as_unknown_and_wait('よしよしよしよし——');
        await coffee.say_as_unknown_and_wait('ん……？');
        await printAndWait([
          '窓の外を',
          coffee.uma_sex_title,
          'の影が掠めた気がした？ まさか～ここは一階じゃないぞ。',
        ]);
      }
      return [ret];
    };
    f.title = '廃れた理科室の探検';
    return f;
  })(),
  shadow_minoru: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} taiki タイキシャトル
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} know_minoru 駿川たづなの正体を知っているか
     */
    const f = async (minoru, taiki, you, know_minoru) => {
      if (know_minoru) {
        await printAndWait([
          you.get_colored_name(),
          ' は遠くに二つの緑の影が近づいてくるのを見た。どうやら ',
          taiki.get_colored_name(),
          ' が、わけのわからない理由で ',
          minoru.get_colored_name(),
          ' に追われているらしい……宝刀、いまだ衰えず！',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' は遠くに二つの緑の影が近づいてくるのを見た。どうやら ',
          taiki.get_colored_name(),
          ' が、わけのわからない理由で ',
          minoru.get_colored_name(),
          ' に追われているらしい……それにしても、なぜ人間が',
          taiki.uma_sex_title,
          'の速さに追いつけるんだ？',
        ]);
      }
      printButton('「スピードを落とせ！ 怪我するな！」', 1);
      await input();
      await printAndWait([
        '先頭を走っていた ',
        taiki.get_colored_name(),
        ' がゆっくり減速し、緑一色の秘書が ',
        you.get_colored_name(),
        ' に礼を述べた。また一つ、いいことをした！',
      ]);
    };
    f.title = '緑の幻影';
    return f;
  })(),
  chairman_annoyance1: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste 秋川やよい / ノーザンテースト
     */
    const f = async (taste) => {
      await printAndWait([
        '学園理事長 ',
        taste.get_colored_actual_name(),
        ' が頭を抱えている。正確には金の問題だ。トレセンの予算が、またしても超過した——！！',
      ]);
      await printAndWait(
        'いま、このオレンジ髪の小さな理事長は、緑の秘書に叱られてガタガタ震えている……だが、無視できない財政の穴を、どう埋める？',
      );
      printButton(
        '「収支を立て直せ。まずは率先して減給だ！」（借金+40、育成中のウマ娘のスキルPt+10）',
        1,
      );
      printButton('「そこは自分の担当じゃない……」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait('何かいいことが起きたようだ！');
        await printAndWait('……ただし今月はカップ麺生活だ！');
      } else {
        await printAndWait('特に何も起きなかった。');
      }
      return [ret];
    };
    f.title = '%TEEN%理事長の悩み・その一';
    return f;
  })(),
  chairman_annoyance2: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} taste 秋川やよい / ノーザンテースト
     */
    const f = async (taste) => {
      await printAndWait([
        '学園理事長 ',
        taste.get_colored_actual_name(),
        ' の猫が行方不明だ！ 猫がいなくて沈み込む理事長のせいで、トレセンの運営効率まで大きく落ちている！',
      ]);
      printButton(
        '「総動員だ。子猫を必ず見つけろ！」（気力-50、好感+40～60）',
        1,
      );
      printButton('「で？」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          '子猫を見つけたあと、',
          taste.get_colored_name(),
          ' は大喜びし、トレセンも元の軌道に戻った！',
        ]);
      } else {
        await printAndWait(
          '特に何も起きなかった……というか、理事長は普段何をしているんだ？',
        );
      }
      return [ret];
    };
    f.title = '%TEEN%理事長の悩み・その二';
    return f;
  })(),
  av_meteor: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} vega アドマイヤベガ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} good_event 予兆を吉とするか凶とするか
     * */
    const f = async (vega, you, good_event) => {
      await printAndWait([
        'ある夜、',
        you.get_colored_name(),
        ' は枯れ木の洞のそばで、星空を仰ぐ ',
        vega.get_colored_name(),
        ' を見かけた。',
      ]);
      await printAndWait('視線を辿ると、目の端に流星が一筋、かすめて消えた。');
      printButton(
        '「これは何かの予兆だ！」（育成中のウマ娘のやる気+1 または -1）',
        1,
      );
      printButton('「ただの流れ星だ。」（安定度+1）', 2);
      const ret = await input();
      if (ret === 1) {
        if (good_event) {
          await printAndWait('何かいいことが起きたようだ！');
        } else {
          await printAndWait('悪いことが……');
        }
      } else {
        await printAndWait('ごく平凡なことが起きたようだ！');
      }
      return [ret];
    };
    f.title = '彗星の観測';
    return f;
  })(),
  custom: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (you) => {
      await printAndWait([
        'ある午後、',
        you.get_colored_name(),
        ' は最近始めたスマホゲーム『キラめく優秀少女』で、また低確率のトレーニング失敗を踏んだ……慣れろ、慣れろ……',
      ]);
      printButton(
        '「……慣れるか！」（ウマコイン-50、育成中のウマ娘の体力+15%）',
        1,
        {
          disabled: get('flag:当前马币') < 50,
        },
      );
      printButton('「慣れろ！」', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' は大人の魔法・課金を放った！',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' はスマホを叩き壊す衝動を押しとどめた……',
        ]);
      }
      return [ret];
    };
    f.title = '慣れとは恐ろしい';
    return f;
  })(),
  mr_naked_apron: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     */
    const f = async (chara, you) => {
      const ret = [];
      await printAndWait([
        '朝目を覚ますと、',
        chara.get_colored_name(),
        ' はもうベッドにいなかった。',
      ]);
      await printAndWait([
        '起きて身支度を済ませ、台所で',
        chara.sex,
        'の姿を見つけた。朝食の支度をしているらしい。だが……',
      ]);
      await printAndWait([
        '一糸まとわぬまま、エプロンだけを着て真剣に朝食を作る ',
        chara.get_colored_name(),
        ' が、かわいい尻を振りながら料理している様子は、もはや——',
      ]);
      printButton('（くそっ、我慢できない！）', 1);
      printButton('（素数を数えて落ち着こう……）', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          you.get_colored_name(),
          ' は衝動を抑え、理性で ',
          chara.get_colored_name(),
          ' に挨拶した。',
        ]);
      }
      return ret;
    };
    f.title = '翌朝、裸エプロン';
    return f;
  })(),
  mr_blowjob: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        '朝目を覚ますと、',
        you.get_colored_name(),
        ' は下半身に異様な感触を覚えた。',
      ]);
      await printAndWait([
        '目を開けると、眼前には素っ裸の ',
        chara.get_colored_name(),
        ' が口で ',
        you.get_colored_name(),
        ' の',
        you.sex_code === 0 ? 'クリトリス' : 'ペニス',
        'を吸い上げている、淫らな光景があった。',
      ]);
      const skill = get(`abl:${chara.id}:口交技巧`);
      await printAndWait([
        chara.get_colored_name(),
        ' は',
        get(`talent:${chara.id}:饮精成瘾`) > 0 ||
        get(`talent:${chara.id}:淫口`) > 0
          ? '貪欲'
          : skill > 2
            ? '巧'
            : '拙',
        'に',
        you.sex_code === 0 ? 'クリトリスを舐め' : 'ペニスを咥え込み',
        '、',
        you.get_colored_name(),
        ' も思わず手で ',
        chara.get_colored_name(),
        ' の頭を押さえ、さらなる快感を求めた。',
      ]);
      printButton('（くそっ、我慢できない！）', 1);
      printButton('（イく……！）', 2);
      ret.push(await input());
      if (ret[0] === 2) {
        await printAndWait([
          chara.get_colored_name(),
          ' のおはようフェラで、',
          you.get_colored_name(),
          ' はすぐに絶頂し、',
          you.sex_code === 0 ? '愛液' : '精液',
          'を残らず ',
          chara.get_colored_name(),
          ' の小さな口へ注いだ。',
        ]);
        await chara.say_and_wait(['口の中、全部……', callname, ' の味……']);
        await printAndWait('欲を晴らしたあと、新しい一日が始まった……');
      }
      return ret;
    };
    f.title = '翌朝、おはようフェラ';
    return f;
  })(),
  ts_sex: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} chara
     */
    const f = async (chara) => {
      await printAndWait([
        '一日のトレーニングが終わると、',
        chara.get_colored_name(),
        ' の様子がどこかおかしい……',
      ]);
      await printAndWait(
        '顔は紅潮し、太ももの間を伝う得体の知れない液体が汗と混ざり、淫らな匂いを漂わせている。',
      );
      printButton('「これもトレーナーの務めだ……」', 1);
      printButton('「とりあえず保健室へ！」', 2);
      const ret = await input();
      return [ret];
    };
    f.title = 'トレ後の性欲';
    return f;
  })(),
  drug_notice: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {number} effect 効果 0-トレーニング上手バフ、1-健康茶、2-母乳薬、3-性欲上昇
     */
    const f = async (tachyon, you, effect) => {
      await printAndWait(
        [
          '【学園からのお知らせ——先ほど ',
          tachyon.get_colored_name(),
          ' が誤ってグラウンドに散布した薬品の正体は現時点で不明です。各トレーナーは、必要がなければグラウンドでのトレーニングを控えてください。】',
        ],
        { fontSize: '1.5rem' },
      );
      let ask_tachyon = false;
      while (true) {
        printButton('（大丈夫だろう）（ランダム効果）', 1);
        printButton('知らせがあるなら止めよう……（効果無効化）', 2);
        if (!ask_tachyon && get('cflag:32:招募状态') === 1) {
          printButton('「タキオン……お前な！」', 3);
        }
        switch (await input()) {
          case 1:
            switch (effect) {
              case 0:
                await printAndWait(
                  'チームメンバーのトレーニングがはかどった……',
                );
                break;
              case 1:
                await printAndWait(
                  'チームメンバーの今週の減量は、いつもより効きそうだ……',
                );
                break;
              case 2:
                await printAndWait('チームメンバーから母乳が流れ始めた……');
                break;
              case 3:
                await printAndWait('チームメンバーの性欲が上がった……');
            }
            return [1];
          case 2:
            return [2];
          case 3:
            await printAndWait([
              you.get_colored_name(),
              ' の追及に、',
              tachyon.get_colored_name(),
              ' は',
              tachyon.sex,
              'が撒いた薬の大まかな効果を白状した——',
            ]);
            switch (effect) {
              case 0:
                await tachyon.say_and_wait(
                  '簡単に言えば、トレーニング中に集中しやすくなる薬だよ……',
                );
                break;
              case 1:
                await tachyon.say_and_wait(
                  '簡単に言えば、カロリーを早く消費させる薬だよ……',
                );
                break;
              case 2:
                await tachyon.say_and_wait(
                  '簡単に言えば、ウマ娘から母乳が出るようになる薬だよ……',
                );
                break;
              case 3:
                await tachyon.say_and_wait(
                  '簡単に言えば、理性を少し弱める薬だよ……',
                );
            }
            ask_tachyon = true;
        }
      }
    };
    f.title = '学園からのお知らせ・薬剤散布';
    return f;
  })(),
  gs_carrot: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} gs ゴールドシップ
     */
    const f = async (gs) => {
      await printAndWait([
        '学園で、芦毛の得体の知れない',
        gs.uma_sex_title,
        'に呼び止められた。',
      ]);
      await gs.say_and_wait(
        'ヒッ！ そこのトレーナー！ ゴルシと海で大根引きしねえか！',
      );
      await printAndWait([
        '問題児の ',
        gs.get_colored_name(),
        ' だった……それに海に大根なんて生えてるのか？',
      ]);
      printButton('「引きたいなら引け！」（ウマコイン+20）', 1);
      printButton('「なんだか怪しい……」（体力+100）', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait(
          '砂浜から、虹色に輝き宝石みたいな大根が掘り出せた！？',
        );
      } else {
        await printAndWait(
          '普通の大根が手に入った……いや、海辺に生えてて普通か！？ とりあえず昼のおかずの足しだ。',
        );
      }
      return [ret];
    };
    f.title = '大根引きの鬼';
    return f;
  })(),
  trainer_race: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} aoi 桐生院葵
     */
    const f = async (you, aoi) => {
      await printAndWait([
        'トレセン学園へ向かう途中、ポスターが一枚、風に煽られて ',
        you.get_colored_name(),
        ' の顔にぺたりと張りついた。',
      ]);
      await printAndWait([
        '剥がして見ると、トレーナー限定の',
        get_random_entry(['短距離走', '水泳', '登山']),
        '大会らしい。体力に自信がなくても、当日は公式のサポートがある、と書いてある。出るか？',
      ]);
      printButton(
        '（試して損はなさそうだ）（体力＆気力-25%、賞品が手に入るかも）',
        1,
      );
      printButton('（忙しすぎて、出てる暇ない——！）', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait(
          '得体の知れない鍼灸を受けたあと、なぜかあっさり優勝し、主催側の賞品までもらった！',
        );
        await printAndWait(
          'だが、順調すぎて背筋が寒い……実験台にされたみたいだ……',
        );
      } else {
        await printAndWait([
          'あとで聞くと、サポートなしで ',
          aoi.get_colored_name(),
          ' が優勝したらしい。',
        ]);
        await printAndWait('やっぱり、あの人は鬼のように強い……');
      }
      return [ret];
    };
    f.title = '風に舞うポスター';
    return f;
  })(),
  bankruptcy: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (you) => {
      await printAndWait([
        '怠惰でまともに働かなかったせいだろうか。それとも運が ',
        you.get_colored_name(),
        ' の味方をしなかっただけか。ともかく ',
        you.get_colored_name(),
        ' は銀行口座の数字を底まで削ってしまった！',
      ]);
      await printAndWait([
        '情けないが、担当の',
        get('flag:角色性别') === 1 ? 'ウマ郎' : 'ウマ娘',
        'に頼み込むしかない……のか？',
      ]);
      printButton('「こんなことになるなんて……」', 1);
      await input();
    };
    f.title = '破産';
    return f;
  })(),
  reject: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (you) => {
      await printAndWait(
        'なぜか最近、学園を歩いているとひそひそ話がついてくる。',
      );
      await printAndWait([
        you.get_colored_name(),
        ' が探ってみると、いつの間にか薄情な',
        you.sex_code === 1 ? 'クズ男' : 'クズ女',
        '扱いされていた！？',
      ]);
      printButton('「違う、やってない！」', 1);
      await input();
    };
    f.title = '濡れ衣だ、濡れ衣！';
    return f;
  })(),
  work_over: (() => {
    /** @author 雞雞 */
    const f = async () => {
      await printAndWait('トレーナーは高給だが、楽な仕事ではない。');
      await printAndWait([
        '担当の',
        get('flag:角色性别') === 1 ? 'ウマ郎' : 'ウマ娘',
        'のトレーニング以外にも、学園事務、記者会見、財務、研究報告の執筆と、雑務は尽きない。',
      ]);
      println();
      await printAndWait(
        '今日もエナジードリンクで体を支え、執務室の机の下で眠る一日だ。',
      );
      printButton('「床が硬い……」', 1);
      await input();
    };
    f.title = '無常なる残業';
    return f;
  })(),
  sick: (() => {
    /**
     * @author 雞雞
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (you) => {
      await printAndWait([
        you.get_colored_name(),
        ' は起き抜けから頭が重く、眠気が取れず、とにかく全身がおかしい。',
      ]);
      printButton('「くそっ、気合いで乗り切る！」', 1);
      printButton('「電話で休みを取って、医者に行こう……」', 2);
      return [await input()];
    };
    f.title = '無常なる病';
    return f;
  })(),
  fishing: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} sky セイウンスカイ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (sky, you) => {
      sky.name = '笠をかぶった芦毛の' + sky.uma_sex_title;
      await printAndWait([
        you.get_colored_name(),
        ' は釣り竿を持って川辺へ行くと、一人の',
        sky.uma_sex_title,
        'に出会った。',
      ]);
      await printAndWait([
        sky.sex,
        'は振り返らず、',
        you.get_colored_name(),
        ' に背を向けたまま言った。',
      ]);
      println();
      await sky.say_and_wait(
        'にゃっはっは、奇遇だね。出会いは縁、好きなほうを持っていきなよ～',
      );
      println();
      await printAndWait([
        you.get_colored_name(),
        ' が見ると、相手のそばには古い釣り竿とルアーが置いてある。',
      ]);
      printButton('釣り竿を選ぶ（今回の漁獲が倍）', 1);
      printButton('ルアーを選ぶ（白因子 20）', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          you.get_colored_name(),
          ' は釣り竿を選んだ。すると何かの魔力でもかかったように、',
          you.get_colored_name(),
          ' の今日の手は恐ろしく良く、釣れた魚は普段の二倍以上だった！',
        ]);
      } else {
        await printAndWait('ん？ このルアーの流線型……');
        await printAndWait([
          'そのとき、',
          you.get_colored_name(),
          ' に閃きが走った！',
        ]);
      }
      return [ret];
    };
    f.title = '釣りの心得';
    return f;
  })(),
  ts_shower: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} want_sex 相手が性行為に同意するか
     */
    const f = async (chara, you, want_sex) => {
      const ret = [];
      await printAndWait(['ん？ ', chara.get_colored_name(), ' はまだか？']);
      await printAndWait('ついでに、先にシャワーを浴びておこう！');
      println();
      await printAndWait([
        '扉を開けると、一糸まとわぬ ',
        chara.get_colored_name(),
        ' が目に入った……',
      ]);
      printButton('「おお、一緒に入るか？」', 1);
      printButton('「悪い、邪魔した！」', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        if (want_sex) {
          await printAndWait('相手は乗り気で承諾した。');
          await printAndWait('互いに背中を流し合った。');
          await printAndWait([
            '洗い終えると、',
            chara.sex,
            'はまだ足りない目で ',
            you.get_colored_name(),
            ' を見た……',
          ]);
        } else {
          await chara.say_and_wait('バカ、何考えてるの！');
          await printAndWait([you.get_colored_name(), ' は追い出された……']);
        }
      } else {
        await you.say_and_wait('悪い、邪魔した！');
        await printAndWait([
          you.get_colored_name(),
          ' はそう叫んで飛び出した。',
        ]);
        await printAndWait([
          'ほどなく、シャワーを終えた ',
          chara.get_colored_name(),
          ' が顔を赤らめて出てきた。',
        ]);
      }
      return ret;
    };
    f.title = 'シャワー室内';
    return f;
  })(),
  sr_strange_lunch: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        '昼になり、',
        you.get_colored_name(),
        ' と ',
        chara.get_colored_name(),
        ' は期せずして屋上へ来ていた。',
      ]);
      await printAndWait([
        'なぜか今日、',
        chara.get_colored_name(),
        ' の弁当は格別に豪華だった',
      ]);
      println();
      await chara.say_and_wait([callname, '、味見してみて。']);
      await chara.say_and_wait('自慢の一品だよ～');
      println();
      await printAndWait([
        you.get_colored_name(),
        ' は目の前の弁当を受け取り、遠慮なく箸を取った。',
      ]);
      await printAndWait([
        '数口、美味しく味わったあと、体がじわじわ熱くなった……',
      ]);
      println();
      await printAndWait([
        you.get_colored_name(),
        ' はおかしいと思って隣の ',
        chara.get_colored_name(),
        ' を見ると、同じく頬を赤らめていた。',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' が何か聞こうとした瞬間、強引な口づけで言葉を封じられた。',
      ]);
      println();
      await printAndWait(['離れたとき、唇の端に長い糸が残っていた。']);
      printButton('「こうなったら、やるしかない……」', 1);
      printButton('「自分は君子だ！ 鋼の意志、発動！」', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          '屋上だというのに、',
          you.get_colored_name(),
          ' と ',
          chara.get_colored_name(),
          ' は互いを求め続けた。',
        ]);
        await printAndWait([
          'だがまだ昼休みだと気づくと、',
          you.get_colored_name(),
          ' は余計なことは考えず、',
          chara.get_colored_name(),
          ' の肩を掴んだ……',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' は強く首を振って意志を呼び覚まし、弁当をすぐしまった。',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          ' の前で立ち上がり、逃げるように屋上を離れた……',
        ]);
      }
      return ret;
    };
    f.title = 'おかしな昼ごはん';
    return f;
  })(),
  breakfast: (() => {
    /**
     * @author 幽白書
     * @param {CharaTalk} chara プレイヤーの乳を飲むキャラ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (chara, you) => {
      await printAndWait([
        'トレーナー室へ入ると、',
        you.get_colored_name(),
        ' は朝食を終えた ',
        chara.get_colored_name(),
        ' が牛乳を飲んでいるところを見た。',
      ]);
      await printAndWait('その瓶の包装……どこかで見た気がする……');
      await printAndWait([
        'それに、',
        chara.get_colored_name(),
        ' の目つきが、なぜか少しおかしい……',
      ]);
      await printAndWait('……気のせいだろう。');
    };
    f.title = '「朝食」';
    return f;
  })(),
  or_riverside_walk: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (chara, you) => {
      const ret = [];
      await printAndWait([
        '土手でしばらく過ごしたあと、',
        you.get_colored_name(),
        ' と ',
        chara.get_colored_name(),
        ' は帰路についた。',
      ]);
      await printAndWait('優しい風が二人の顔を撫で、心地よい。');
      printButton('「もう戻ろうか」', 1);
      printButton('「少し遅くなったな」', 2);
      await input();
      await printAndWait([
        you.get_colored_name(),
        ' が話すあいだ、隣の ',
        chara.get_colored_name(),
        ' はそっと視線をこちらへ向け、静かに肩を寄せてきた。',
      ]);
      println();
      await printAndWait('ゆっくり並んで歩く道は、ほとんど人通りがない。');
      await chara.say_and_wait('静かだね……');
      await printAndWait([
        '何かに気づいたのか、',
        chara.get_colored_name(),
        ' は歩幅を緩めた。',
      ]);
      println();
      await printAndWait([
        '隣の ',
        chara.get_colored_name(),
        ' が立ち止まったのに気づき、',
        you.get_colored_name(),
        ' も足を止めて振り返った。',
      ]);
      printButton('「どうした？」', 1);
      await input();
      await chara.say_and_wait('ちょっと、目を閉じてもらえる？');
      await printAndWait([
        '訳のわからない頼みに、',
        you.get_colored_name(),
        ' は少し戸惑ったが、それでも目を閉じた。',
      ]);
      println();
      await printAndWait('耳元を風が過ぎ、涼しさの中に一筋の熱が混じる。');
      await printAndWait([
        '目を開けずとも、',
        you.get_colored_name(),
        ' には何が起きたか分かった。',
      ]);
      await printAndWait('両腕が体を抱き、顔に温かく湿った感触が触れた。');
      println();
      await chara.say_and_wait('……はい、戻ろう。');
      await printAndWait([
        '再び目を開けると、',
        chara.get_colored_name(),
        ' は静かに ',
        you.get_colored_name(),
        ' の前に立っていた。',
      ]);
      await printAndWait(
        '頬にはまだ薄い赤が残っているが、微笑んで二歩下がった。',
      );
      printButton('「戻ろう。」（好感+10）', 1);
      printButton('「もしかして……もう少し遅く戻っても……」（恋慕+1）', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          chara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の温かい手を掴み、安心して歩いた。',
        ]);
        await you.say_and_wait('さっきの感触は、いったい何だったんだ……', true);
      } else {
        await chara.say_and_wait('もう少し……');
        await chara.say_and_wait('つまり……');
        await printAndWait([
          '顔を赤らめた ',
          chara.get_colored_name(),
          ' を前に、',
          you.get_colored_name(),
          ' はただ笑った。',
        ]);
        await printAndWait([
          '今日は、',
          chara.get_colored_name(),
          ' をもう少し遊ばせてやろう。',
        ]);
      }
      return ret;
    };
    f.title = '土手の散歩';
    return f;
  })(),
  os_is_movie_right: (() => {
    /**
     * @author KUN
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname キャラからプレイヤーへの呼び方
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        'もともと ',
        chara.get_colored_name(),
        ' と商店街をぶらつくつもりだったが、思いがけない宣伝を見かけた。',
      ]);
      println();
      await you.say_as_passer_by_and_wait('宣伝', [
        chara.uma_sex_title,
        'の成長を完璧に描いた最新作！',
      ]);
      println();
      await printAndWait([
        '聞いたことはなかったが、',
        you.get_colored_name(),
        ' と ',
        chara.get_colored_name(),
        ' は好奇心でチケットを買い、入った。',
      ]);
      await printAndWait(
        '座席に座り、明かりが落ちて物語が始まるのを、少し期待して待った。',
      );
      await printAndWait(
        '画面の出来は最新作らしい水準だったが、その「成長」の描き方は予想外だった。',
      );
      println();
      await you.say_as_passer_by_and_wait(
        '俳優',
        'トレーナー、あなたのおかげで……',
      );
      await you.say_as_passer_by_and_wait(
        '俳優',
        'トレーナーのおかげで、今の私は……',
      );
      println();
      await printAndWait([
        '画面は少し大袈裟で、',
        you.get_colored_name(),
        ' はどうも違う気がした。',
      ]);
      await printAndWait('これが本当に成長の過程なのか？');
      println();
      await printAndWait([
        '違和感に気づいた ',
        you.get_colored_name(),
        ' は、残りの分は見なくていいと ',
        chara.get_colored_name(),
        ' に言おうと振り返った。',
      ]);
      println();
      await chara.say_and_wait('……');
      println();
      await printAndWait('腕の上に、温かい感触が乗った。');
      await printAndWait([
        '隣の ',
        chara.get_colored_name(),
        ' が、そっと ',
        you.get_colored_name(),
        ' の手を握る。',
      ]);
      println();
      await chara.say_and_wait('……もう、行くの？');
      println();
      await printAndWait([
        '暗い映画館の中で、',
        chara.get_colored_name(),
        ' の顔だけがやけにはっきり見えた。',
      ]);
      await printAndWait([
        '重ねた手が ',
        you.get_colored_name(),
        ' の腕に乗り、肩に軽く凭れている。',
      ]);
      println();
      await printAndWait(
        '画面はもう二人の心に残らず、視線は互いへ固定されていた。',
      );
      await printAndWait('スクリーンの微光が互いの顔を照らし、瞳に光を返す。');
      println();
      await chara.say_and_wait([callname, '……']);
      await chara.say_and_wait('私……');
      await you.say_as_passer_by_and_wait('俳優', '好きです！');
      println();
      await printAndWait('映画が山場に入り、二人の動きを遮った。');
      await printAndWait([
        '声が ',
        you.get_colored_name(),
        ' と ',
        chara.get_colored_name(),
        ' のあいだを覆い、視線に少しの気まずさが混じる。',
      ]);
      printButton('「……落ち着こう」（やる気上昇、好感+10）', 1);
      printButton('「……一緒に出よう」（やる気大幅上昇、恋慕+1）', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait(
          '映画は終わりへ向かい、照明もタイミングよく点いた。',
        );
        await printAndWait([
          '明るい光が ',
          you.get_colored_name(),
          ' の気まずい顔を照らし、',
          you.get_colored_name(),
          ' は軽く咳払いした。',
        ]);
        println();
        await chara.say_and_wait('……うん。');
        println();
        await printAndWait([
          'まだ重なっていた手が、今度は ',
          you.get_colored_name(),
          ' を掴み、一緒に立ち上がる。',
        ]);
        await printAndWait([
          '名残はありつつも、素直に立ち上がり、',
          you.get_colored_name(),
          ' の後ろについてきた。',
        ]);
      } else {
        await printAndWait([
          '映画の山場のさなかでも、',
          you.get_colored_name(),
          ' はその隙間に声を通した。',
        ]);
        await printAndWait([
          '雰囲気に乗って声を出してしまった ',
          chara.get_colored_name(),
          ' は一瞬固まり、すぐ自ら後ずさった。',
        ]);
        await printAndWait([
          '対して ',
          you.get_colored_name(),
          ' の表情は和らぎ、ゆっくり前へ寄った。',
        ]);
        await printAndWait([
          '唇が重なり、',
          chara.get_colored_name(),
          ' の驚きと羞恥を胸の奥へ押し戻し、幸せを味わった。',
        ]);
        println();
        await printAndWait([
          you.get_colored_name(),
          ' は ',
          chara.get_colored_name(),
          ' の手を引き、そっと映画館を出た。',
        ]);
        await printAndWait([
          '顔を真っ赤にした ',
          chara.get_colored_name(),
          ' を連れて、目の前の旅館を見やり、ゆっくり',
          chara.sex,
          'の肩を抱いて中へ入った……',
        ]);
      }
      return ret;
    };
    f.title = 'この映画、合ってる？';
    return f;
  })(),
  privacy_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan|false} money 売れば得られる代金
     */
    const f = async (you, money) => {
      await printAndWait([
        '今日起きると、',
        you.get_colored_name(),
        ' の個人口座に連絡が来ていた。今後の荷物をすべて買い取りたい、という。',
      ]);
      printButton('（趣味が変な人がいるだけだろう……金になればいい）', 1);
      printButton('（指定住所まで送れだと……怪しい、やめよう）', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([you.get_colored_name(), ' は送金を受け取った。']);
        await printAndWait(
          '相手は、次回も同じ届け先で、入荷があれば優先的に連絡してほしいと言ってきた。',
        );
        if (money) {
          await printAndWait(['代金として ', money, ' ウマコインを得た……']);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' は相手の言葉に怪しさを感じた。届け先も、トレセン学園からそう遠くない。',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' は丁重に断った。だが相手は諦めず、入荷があれば連絡してくれ、もっと高く買う、と言ってきた。',
        ]);
      }
      return [ret];
    };
    f.title = '個人情報セキュリティ（その一？）';
    return f;
  })(),
  privacy_2_1: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 乳を買うキャラ
     */
    const f = async (you, chara) => {
      await printAndWait([
        'トレーナー室で、',
        chara.get_colored_name(),
        ' はスマホを弄っていたが、',
        you.get_colored_name(),
        ' を見るなりしまった。',
        you.get_colored_name(),
        ' から隠しているようだ。',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' のスマホも一度震え、メッセージの通知が来た。',
      ]);
      await printAndWait([
        chara.get_colored_name(),
        ' は鼻をひくつかせ、',
        you.get_colored_name(),
        ' の体に見慣れない匂いがすると言った。',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' は気にしなかった。',
        chara.uma_sex_title,
        'は敏感だ。',
      ]);
      await printAndWait('……');
      await printAndWait([
        'もちろん、',
        you.get_colored_name(),
        ' の目の届かないところで、',
        chara.get_colored_name(),
        ' の目つきがおかしくなったことにも気づかなかった。',
      ]);
    };
    f.title = '個人情報セキュリティ（その二？！）';
    return f;
  })(),
  privacy_2_2: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan|false} money 売れば得られる代金
     */
    const f = async (you, money) => {
      await printAndWait([
        '相手がまた連絡してきた。',
        you.get_colored_name(),
        ' に荷物を回してほしい、と。',
      ]);
      await printAndWait(
        'この手の品の愛好家らしく、まるで何かの用途があるかのように焦っている。',
      );
      printButton('（最近、懐が寒い……やっぱりやるか？）', 1);
      printButton('（……怪しい、やめよう）', 2);
      const ret = await input();
      if (ret === 1) {
        await printAndWait([
          '金がないと何もできない。今さら誰が ',
          you.get_colored_name(),
          ' を責められよう。',
        ]);
        await printAndWait([
          '隠すつもりで、',
          you.get_colored_name(),
          ' は相手に応じることにした。',
        ]);
        if (money) {
          await printAndWait(['代金として ', money, ' ウマコインを得た……']);
        }
      } else {
        await printAndWait(
          'こんなに近い届け先に、この焦りよう。やはり怪しい。相手にしなくていい。',
        );
        await printAndWait([
          'そう思い、',
          you.get_colored_name(),
          ' は相手をブロックした。',
        ]);
      }
      return [ret];
    };
    f.title = '個人情報セキュリティ（その二！？）';
    return f;
  })(),
  privacy_3: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 乳を買うキャラ
     * @param {PrintedSpan} callname キャラからプレイヤーへの呼び方
     */
    const f = async (you, chara, callname) => {
      const ret = [];
      await printAndWait([
        'トレーニングのあと、',
        chara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に暇があるか聞き、どこかへ行きたいと言った。',
      ]);
      printButton('「ちょうど予定もないし、行こう。」', 1);
      printButton('「やめとく。もう遅い」', 2);
      ret.push(await input());
      if (ret.at(-1) === 1) {
        await printAndWait([
          chara.get_colored_name(),
          ' の足取りはだんだん軽くなった。だが ',
          you.get_colored_name(),
          ' は見るほど見覚えがある。',
        ]);
        await printAndWait('以前の買い手の届け先そのものだ！');
        await chara.say_and_wait([
          callname,
          ' は個人情報に無頓着だね。何も漏らしてないつもりでも、IP は学園内だよ～',
        ]);
        await chara.say_and_wait([
          'でも大丈夫、',
          callname,
          ' の分はもう片付けておいた。ここの人が ',
          callname,
          ' にひどいことをしようとしてたみたい。',
        ]);
        await chara.say_and_wait([
          'ただし、',
          callname,
          ' に教訓を残すには、体でしっかり覚えてもらわないと——',
        ]);
        await chara.say_and_wait('——私たちは一心同体なんだから。');
        await printAndWait('……');
        printButton(
          `${chara.sex}をしっかり抱きしめ、感謝を示す。（好感+25）`,
          1,
        );
        printButton(`${chara.sex}を連れて帰り、ちゃんと礼をする。`, 2);
        ret.push(await input());
      } else if (get('talent:0:泌乳') === 3 || get('flag:惩戒力度') === 3) {
        await printAndWait('手首に、優しくて抗えない力がかかった。');
        await printAndWait([
          you.get_colored_name(),
          ' は ',
          chara.get_colored_name(),
          ' に引き戻され、まだ鍵のかかっていないトレーナー室へ押し込まれ、扉を内側から閉められた。',
        ]);
        if (get('flag:惩戒力度') === 3) {
          await chara.say_and_wait([
            'もう',
            chara.uma_sex_title,
            'の所有物なのに。',
          ]);
          await chara.say_and_wait('この体の処分権が自分にあると思ってるの？');
          await chara.say_and_wait(
            '立場を、はっきり教えてあげる必要があるね。',
          );
          await chara.say_and_wait('何を見てるの？ 服は自分で脱げないの！');
          await printAndWait([
            '訳のわからない視線の下で、',
            you.get_colored_name(),
            ' は少しずつ服を脱いだ。',
          ]);
          await printAndWait(
            'まずトレーナーの身分を示すバッジ、最後は個人のプライバシーである下着。',
          );
          await chara.say_and_wait('それだけ？ こんな過ちを犯して……');
          await printAndWait([
            chara.get_colored_name(),
            ' が言い終える前に、孕み袋の体は理解していた。',
          ]);
          await printAndWait([
            you.get_colored_name(),
            ' は服を傍らへ投げ捨て、最も正しい土下座で、秘部を隠さず相手に晒した。',
          ]);
          await printAndWait('体が熱い……');
          await printAndWait([chara.uma_sex_title, '様に叱られたからか……']);
          await printAndWait(
            'それとも、こう扱われるのを期待して、最初からこうしたのか？',
          );
          await printAndWait('頭も体も熱くなり、考えられない。');
          await printAndWait('今となっては、行動で詫びるしかない。');
          await printAndWait('押しつけられた馬耳まで、床に伏している。');
        } else {
          await chara.say_and_wait([
            callname,
            ' も毎日、体に困ってるでしょ。分かるよ～',
          ]);
          await chara.say_and_wait('もう、言ってくれれば手伝ったのに。');
          await printAndWait([
            you.get_colored_name(),
            ' は、',
            chara.get_colored_name(),
            ' がすでに焦って自分の服を剥ぎ始めているのを感じた。',
          ]);
          await chara.say_and_wait(
            '毎回ひとりで処理するの、面倒でしょ……大丈夫、そういうのはもう終わり。今日も、いや、これからも……',
          );
          await chara.say_and_wait('ちゃんと、私が処理してあげる。');
          await chara.say_and_wait(
            'ネットのプライバシーも守らず、母乳の販売リンクを堂々と貼るなんて。',
          );
          await chara.say_and_wait(
            'それって、トレーナーが欲求不満だって暗示でしょ？',
          );
          await chara.say_and_wait('体、力抜いていいよ？');
          await printAndWait([
            you.get_colored_name(),
            ' はまだ弁解したかったが、発情した',
            chara.uma_sex_title,
            'が ',
            you.get_colored_name(),
            ' の続きを聞くはずもなかった。',
          ]);
        }
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' は ',
          chara.get_colored_name(),
          ' にトレーナー寮へ引っ張られた。',
        ]);
        await chara.say_and_wait([
          callname,
          ' は大変だね。副業までしないと生活できないなんて。',
        ]);
        await printAndWait([
          chara.get_colored_name(),
          ' は耳を伏せ、',
          you.get_colored_name(),
          ' の「私生活」をいくらか知っているようだった。',
        ]);
        await chara.say_and_wait(
          '困ったら絶対に言って。私は必ずあなたの味方だから！',
        );
        await chara.say_and_wait([
          '前に ',
          callname,
          ' がネットで辿られて、誰かに絡まれそうになってたみたい。',
        ]);
        await chara.say_and_wait('でも安心して、もう私が片付けたから～');
        await chara.say_and_wait('困ったら、絶対に言ってね！');
        await printAndWait([
          chara.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' を抱きしめた。',
        ]);
        if (get('cflag:0:身高') - get(`cflag:${chara.id}:身高`) > 20) {
          await printAndWait([
            '舌までついでに ',
            you.get_colored_name(),
            ' の首を舐め、',
            you.get_colored_name(),
            ' はくすぐったくなった。',
          ]);
        } else {
          await printAndWait([
            chara.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の首筋に深く顔を埋め、それが',
            chara.sex,
            'が ',
            you.get_colored_name(),
            ' のために動いた報酬であるかのようだった。',
          ]);
        }
        await chara.say_and_wait([callname, '、来週ね。ちゃんと休んで！']);
        await printAndWait([
          chara.get_colored_name(),
          ' はそのまま ',
          you.get_colored_name(),
          ' を寮の入口まで送り、',
          you.get_colored_name(),
          ' と別れた。',
        ]);
      }
      return ret;
    };
    f.title = '個人情報セキュリティ（その三？）';
    return f;
  })(),
  strange_day: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 巻き込まれた担当。アグネスタキオンの場合あり
     * @param {CharaTalk|false} tachyon アグネスタキオン。chara がアグネスタキオンなら false
     * @param {CharaTalk|false} minoru 駿川たづな / ハーベストタイム。chara がその場合は false
     * @param {CharaTalk|false} doto メイショウドトウ。chara がその場合は false
     * @param {CharaTalk|false} maya マヤノトップガン。chara がその場合は false
     * @param {CharaTalk|false} sky セイウンスカイ。chara がその場合は false
     */
    const f = async (you, chara, tachyon, minoru, doto, maya, sky) => {
      await printAndWait([
        '朝、',
        you.get_colored_name(),
        ' はどこかおかしいと感じつつ、それでも満ち足りた一日を迎えるつもりだった。',
      ]);
      await you.say_and_wait('(ง •̀_•́)ง');
      await printAndWait([
        you.get_colored_name(),
        ' は深く気にせず、身支度を終えて出かけた。',
      ]);
      println();
      if (minoru) {
        await minoru.say_and_wait('Y(^_^)Y');
        await printAndWait([
          minoru.sex,
          'は相変わらず校門で一人ひとりを迎えている。',
        ]);
        println();
      }
      await you.say_and_wait('……？', true);
      await you.say_and_wait('눈_눈');
      await printAndWait([
        you.get_colored_name(),
        ' は気味悪さを感じたが、言葉にできなかった。',
      ]);
      println();
      if (doto) {
        await doto.say_and_wait('(๑•́ωก̀๑)');
        await printAndWait([doto.sex, 'は、また泣いているのか？']);
        println();
      }
      if (maya) {
        await maya.say_and_wait('(～0～)');
        await printAndWait('この子、また夜更かししたな。');
        println();
      }
      if (sky) {
        await sky.say_and_wait('<(*ΦωΦ*)>');
        await printAndWait('……その顔は何だ。');
        println();
      }
      await you.say_and_wait('……！', true);
      await you.say_and_wait('(#ﾟДﾟ)');
      await printAndWait([
        you.get_colored_name(),
        ' はやっと気づいた。この道中、一言も聞こえていない。代わりに顔文字が頭に浮かぶ。',
      ]);
      await you.say_and_wait('……', true);
      await you.say_and_wait('(#`皿´)');
      println();
      if (tachyon) {
        await printAndWait('脳裏に、毎日白衣を着たあの悪徳業者が浮かんだ。');
        await you.say_and_wait('(‡▼益▼)');
        await printAndWait([
          'また',
          tachyon.sex,
          'の実験か。',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'を探しに行くことにした。',
        ]);
        println();
        await chara.say_and_wait('(｢･ω･)｢ヘイ');
        printButton('「(｢･ω･)｢ヘイ」', 1);
        printButton('「ヾ(＾。^*)」', 2);
        await input();
        await chara.say_and_wait('( •᷄ὤ•᷅)？');
        await printAndWait([
          'どうやら ',
          you.get_colored_name(),
          ' が何をしているか分かっていない。',
        ]);
        await printAndWait([
          you.get_colored_name(),
          ' は ',
          chara.get_colored_name(),
          ' に手を伸ばした。',
        ]);
        await chara.say_and_wait('(⁄ ⁄•⁄ω⁄•⁄ ⁄)');
        printButton(`いまの状態を${chara.sex}に説明する。`, 1);
        await input();
        await you.say_and_wait('(´ﾟωﾟ｀)');
        await you.say_and_wait('⁽⁽◝( •௰• )◜⁾⁾');
        await you.say_and_wait('₍₍◞( •௰• )◟₎₎');
        await printAndWait('しばらく手足を動かして見せた。');
        await you.say_and_wait('╮（╯＿╰）╭');
        println();
        await chara.say_and_wait('【•】_【•】');
        await chara.say_and_wait('(ノ=Д=)ノ┻━┻');
        println();
        await printAndWait([
          'しばらくして、',
          chara.sex,
          'はやっと意味を理解し、',
          you.get_colored_name(),
          ' に付き合ってくれた。',
        ]);
        drawLine();
        await printAndWait(['すぐに', tachyon.sex, 'の研究室へ着いた。']);
        await tachyon.say_and_wait('(¦3[▓▓]');
        await you.say_and_wait('(ノಠ∩ಠ)ノ彡(o°o)');
        await tachyon.say_and_wait('Σ(っ °Д °;)っ');
        await chara.say_and_wait('(ಡωಡ)');
        drawLine({ content: 'しばらく説明した' });
        await tachyon.say_and_wait('(//▽//)');
        await tachyon.say_and_wait('～(￣▽￣～)～');
        await printAndWait([
          '最後に、',
          you.get_colored_name(),
          ' に感覚を記録させ、解毒剤と補償を渡した。',
        ]);
      } else {
        await printAndWait([
          you.get_colored_name(),
          ' は、毎日実験ばかりしている愛馬を思い出した。',
        ]);
        await you.say_and_wait('(๑•ี_เ•ี๑)');
        drawLine();
        await printAndWait([
          you.get_colored_name(),
          ' は慣れた足取りで',
          chara.sex,
          'の研究室を見つけた。',
        ]);
        await chara.say_and_wait('⊙▽⊙');
        await you.say_and_wait('(^_^)');
        await chara.say_and_wait('Σ(っ °Д °;)っ');
        await printAndWait('愛馬TV、堂々開幕！');
        await chara.say_as_unknown_and_wait('アウ(∩∀°╭アウ∀∀アウ∀∀°)アウアウ');
        drawLine({ content: '（トム先生のアフレコに感謝）' });
        await chara.say_and_wait('≥﹏≤');
        await you.say_and_wait('╮（﹀＿﹀）╭');
      }
    };
    f.title = 'おかしな一日';
    return f;
  })(),
  strange_day2: (() => {
    /**
     * @author 念来过倒要你
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara 巻き込まれたキャラ。アグネスタキオンにはならない
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {PrintedSpan} callname キャラからあなたへの呼び方
     * @param {PrintedSpan} callname_32 アグネスタキオンからあなたへの呼び方
     * @param {string[]} med_list 薬のリスト。「名称 × 数量」形式
     */
    const f = async (you, chara, tachyon, callname, callname_32, med_list) => {
      await printAndWait([
        you.get_colored_name(),
        ' はいつもどおり起き、また体がおかしいと気づいた。',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' は周囲を見渡したが、変化はない。',
      ]);
      await printAndWait('ただ……手がむずむずして、何かしたくなる……');
      let flag_a = true,
        horse_hair = false,
        flag_b = true,
        b_line;
      const check_times_in_a = new Array(6).fill(0),
        check_times_in_b = new Array(2).fill(true);
      const cur_line = getLineCount();
      while (flag_a) {
        printInColRows(
          [
            { content: 'では、何を調べる？', type: 'text' },
            { config: { width: 8 }, type: 'divider' },
          ],
          [
            {
              config: { width: 3 },
              content: '壁壁壁壁壁',
              type: 'text',
            },
            {
              accelerator: 1,
              config: { align: 'center', showAcc: false, width: 2 },
              content: '窓',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: '壁壁壁壁壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '壁', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '二二二',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '壁', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '人人人',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 5 }, content: '壁', type: 'text' },
            {
              accelerator: 2,
              config: {
                align: 'right',
                disableWarning: true,
                showAcc: false,
                width: 2,
              },
              content: '床床床',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 6 }, content: '壁', type: 'text' },
            {
              accelerator: 3,
              config: { align: 'right', showAcc: false, width: 1 },
              content: '棚',
              type: 'button',
            },
            {
              config: { align: 'right', width: 1 },
              content: '壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 1 }, content: '壁', type: 'text' },
            {
              accelerator: 4,
              config: { width: 1, showAcc: false },
              content: '鏡',
              type: 'button',
            },
            {
              config: { align: 'right', width: 6 },
              content: '壁',
              type: 'text',
            },
          ],
          [
            { config: { width: 7 }, content: '壁', type: 'text' },
            {
              accelerator: 5,
              config: { align: 'right', showAcc: false, width: 1 },
              content: '厠',
              type: 'button',
            },
          ],
          [
            { config: { width: 3 }, content: '壁壁壁壁', type: 'text' },
            {
              accelerator: 6,
              config: { align: 'center', showAcc: false, width: 2 },
              content: '玄 関',
              type: 'button',
            },
            {
              config: { align: 'right', width: 3 },
              content: '壁壁壁壁',
              type: 'text',
            },
          ],
          [{ config: { width: 8 }, type: 'divider' }],
        );
        switch (await input()) {
          case 1:
            switch (++check_times_in_a[0]) {
              case 1:
                await printAndWait([you.get_colored_name(), ' は窓を開けた。']);
                await printAndWait('外では鳥が歌い、花が咲いている。');
                await printAndWait([
                  you.get_colored_name(),
                  ' のようなトレーナーは……家で一日寝ていろ、という日だ。',
                ]);
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  ' は窓を閉め、外の音を遮断した。',
                ]);
                await printAndWait([
                  '惜しいが、',
                  you.get_colored_name(),
                  ' には仕事があり、まだ休めない。',
                ]);
                break;
              default:
                await printAndWait('窓の開け閉めは楽しいか？');
            }
            break;
          case 2:
            switch (++check_times_in_a[1]) {
              case 1:
                await printAndWait('大きくて柔らかいベッドだ。');
                await printAndWait('……だが、なぜダブルベッドを買った？');
                break;
              case 2:
                await printAndWait('……なぜここに馬の尻尾の毛が？');
                await printAndWait([you.get_colored_name(), ' は嗅いでみた。']);
                await printAndWait('……馴染みのある匂い。');
                await printAndWait('【馬尾毛】を入手した。');
                horse_hair = true;
                break;
              default:
                await printAndWait([
                  '大きくて気持ちのいいベッド……気持ちいいのは ',
                  you.get_colored_name(),
                  ' だけではなさそうだ。',
                ]);
            }
            break;
          case 3:
            switch (++check_times_in_a[2]) {
              case 1:
                await printAndWait(
                  'ベッドサイドの棚だ。大事な写真が何枚か並んでいる。',
                );
                break;
              case 2:
                await printAndWait([
                  you.get_colored_name(),
                  ' は引っ掻き回したが、何も見つからなかった。',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  ' は誰かの声を聞いた気がした。',
                ]);
                await you.say_as_unknown_and_wait(
                  '……なぜ家の中を引っ掻き回してるんだ？',
                );
                await printAndWait('……気のせいであってほしい。');
                break;
              case 3:
                await printAndWait([
                  you.get_colored_name(),
                  ' は念入りに調べ……隅で 10 ウマコインを見つけた。',
                ]);
                await printAndWait([
                  you.get_colored_name(),
                  ' は満足して離れた。',
                ]);
                await printAndWait('10 ウマコインを入手した。');
                // FLAGNAME:16 = 現在のウマコイン
                add('flag:16', 10);
                break;
              default:
                await printAndWait('大事な写真が一枚あるだけだ。');
            }
            break;
          case 4:
            switch (++check_times_in_a[3]) {
              case 1:
                await printAndWait([
                  'これが ',
                  you.get_colored_name(),
                  '。平凡な顔、質素なバッジ、地味な服。',
                ]);
                break;
              case 2:
                await printAndWait(
                  'かっこいい顔に上品な服、輝くバッジを付けたトレーナーだ。',
                );
                await printAndWait('……綺麗じゃないか。');
                break;
              case 3:
                await printAndWait([
                  '鏡の中の人物はもう褒めようもなく、無言で ',
                  you.get_colored_name(),
                  ' を見ている。',
                ]);
                await printAndWait('……どこかおかしくないか？');
                await printAndWait('瞬きすると、いつもどおりだった。');
                break;
              case 4:
                // 巻き込まれたのがマンハッタンカフェ、コパノリッキー、サンデーサイレンスの場合、超常現象が起きる
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait([
                    you.get_colored_name(),
                    ' は鏡に向かって笑った。',
                  ]);
                  await printAndWait([
                    '鏡の中の人物も突然、',
                    you.get_colored_name(),
                    ' に向かって笑い始めた……',
                  ]);
                  await printAndWait('……ただし口角が耳の後ろまで裂けている。');
                  await printAndWait([
                    you.sex,
                    'は鏡枠に手をかけ、力を込め始めた。',
                  ]);
                  await printAndWait([
                    you.get_colored_name(),
                    '……怖くて動けない？',
                  ]);
                  await printAndWait([
                    you.sex,
                    'の顔が大きくなり、すぐ目の前まで来る。',
                  ]);
                  await printAndWait([
                    '……',
                    you.sex,
                    'が ',
                    you.get_colored_name(),
                    ' の顔をはっきり見るまで。',
                  ]);
                  await printAndWait(['……', you.sex, 'は逃げた。']);
                  await printAndWait('いま鏡の中は空っぽだ。');
                  await printAndWait([
                    you.get_colored_name(),
                    ' は欠伸をした。',
                  ]);
                } else {
                  await printAndWait(['これが ', you.get_colored_name(), '。']);
                }
                break;
              default:
                if (chara.id === 25 || chara.id === 98 || chara.id === 400) {
                  await printAndWait(
                    '鏡の中には何もない……いつ戻るか分からない。',
                  );
                  await printAndWait([
                    you.get_colored_name(),
                    ' は身だしなみを整えたかったのに。',
                  ]);
                } else {
                  await printAndWait(['これが ', you.get_colored_name(), '。']);
                }
            }
            break;
          case 5:
            flag_b = true;
            await printAndWait([
              you.get_colored_name(),
              ' はトイレの扉を押し、中へ入った。',
            ]);
            b_line = getLineCount();
            while (flag_b) {
              printInColRows(
                [
                  {
                    content: [
                      you.get_colored_name(),
                      ' は周囲を見下ろす。どこから始める？',
                    ],
                    type: 'text',
                  },
                  { config: { width: 6 }, type: 'divider' },
                ],
                [
                  { config: { width: 3 }, content: '壁壁壁壁', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: '壁壁壁壁',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 1 }, content: '壁', type: 'text' },
                  {
                    accelerator: 1,
                    config: { width: 2, showAcc: false },
                    content: '便器',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: '壁',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: '壁', type: 'text' },
                  {
                    accelerator: 2,
                    config: { align: 'right', width: 2, showAcc: false },
                    content: '浴槽',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 1 },
                    content: '壁',
                    type: 'text',
                  },
                ],
                [
                  {
                    accelerator: 3,
                    config: { width: 3, showAcc: false },
                    content: '室',
                    type: 'button',
                  },
                  {
                    config: { align: 'right', width: 3 },
                    content: '壁',
                    type: 'text',
                  },
                ],
                [
                  { config: { width: 3 }, content: '壁壁壁壁', type: 'text' },
                  {
                    config: { align: 'right', width: 3 },
                    content: '壁壁壁壁',
                    type: 'text',
                  },
                ],
                [{ config: { width: 6 }, type: 'divider' }],
              );
              switch (await input()) {
                case 1:
                  if (check_times_in_b[0]) {
                    await printAndWait([
                      you.get_colored_name(),
                      ' は誰かに見られている気がした……見回しても誰もいない。',
                    ]);
                    print('尿意がある。するか？');
                    printButton('する', 1);
                    printButton('やめておく', 2);
                    if ((await input()) === 1) {
                      await printAndWait([
                        '……気のせいか？ ',
                        you.get_colored_name(),
                        ' は便器が話している気がした。',
                      ]);
                      await printAndWait('……');
                      await printAndWait('……');
                      await printAndWait([
                        you.get_colored_name(),
                        ' はかすかにこう聞こえた。',
                      ]);
                      await you.say_as_unknown_and_wait(
                        'ううう……きれいでなくなった……',
                      );
                      await you.say_and_wait('……気のせいだろう。', true);
                      check_times_in_b[0] = false;
                    }
                  } else {
                    await printAndWait(
                      '便器が泣いている気がする……あとで謝っておこう。',
                    );
                  }
                  break;
                case 2:
                  if (check_times_in_b[1]) {
                    await printAndWait('浴槽だ。入ると気持ちいい。');
                    check_times_in_b[1] = false;
                  } else {
                    await printAndWait([
                      you.get_colored_name(),
                      ' はかすかにこう聞こえた気がした。',
                    ]);
                    await you.say_as_unknown_and_wait(
                      '調べるな。トイレが寂しく見えないように置いてあるだけだ。',
                    );
                    await printAndWait('……実に奇妙だ。');
                  }
                  break;
                case 3:
                  flag_b = false;
              }
              await clear(getLineCount() - b_line);
            }
            break;
          case 6:
            flag_a = false;
        }
        await clear(getLineCount() - cur_line);
      }
      drawLine();
      await printAndWait('玄関を押すと、なぜか今日は出発がやけに遅い。');
      await printAndWait('時計を見ると、もう遅刻寸前だ。');
      if (horse_hair) {
        await printAndWait([
          you.get_colored_name(),
          ' は玄関を見て、取り替えたほうがいいかと考えた。',
        ]);
        await you.say_as_passer_by_and_wait('扉', '関係 ない。');
        await you.say_and_wait('……もう、とぼける気もないのか？', true);
      }
      println();
      await printAndWait([you.get_colored_name(), ' は通りへ出た。']);
      await printAndWait([
        you.get_colored_name(),
        ' は、また ',
        tachyon.get_colored_name(),
        ' に薬を盛られたと感じた。',
      ]);
      await printAndWait('今度の効果は何だ？');
      print(
        [
          { content: ' ', isDivider: true },
          '屋屋屋屋屋屋屋屋屋屋屋屋',
          { isBr: 2 },
          '君',
          { isBlank: 8 },
          'パン',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: 2 },
          { isBlank: 6 },
          '木',
          { isBlank: 6 },
          '木',
          { isBlank: 6 },
          '木',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        you.get_colored_name(),
        ' は、狙い澄ました ',
        chara.get_colored_name(),
        ' と遭遇した！',
      ]);
      print('距離は近い。どうする？');
      printButton('逃げる', 1);
      printButton('冷静に対応する', 2);
      await input();
      await printAndWait([
        '……',
        chara.sex,
        'はすでに ',
        you.get_colored_name(),
        ' を見据えており、何をしても無駄だ！',
      ]);
      print(
        [
          { content: ' ', isDivider: true },
          '屋屋屋屋屋屋屋屋屋屋屋屋',
          { isBr: 2 },
          '君',
          { isBlank: 2 },
          chara.get_colored_name(),
          { isBr: true },
          { isBlank: 4 },
          'パン',
          { isBr: true },
          { isBlank: 6 },
          '木',
          { isBlank: 6 },
          '木',
          { isBlank: 6 },
          '木',
          { content: ' ', isDivider: true },
        ],
        { width: 8 },
      );
      await printAndWait([
        chara.sex,
        'は ',
        you.get_colored_name(),
        ' に飛びついた。',
      ]);
      await chara.say_and_wait(['ごめん、', callname, '！ うっかりして！']);
      await chara.say_and_wait('遅刻しそうで、つい速く走っちゃって。');
      await chara.say_and_wait(
        'いい匂い……今すぐ……だめだめ、もう少し我慢……',
        true,
      );
      await printAndWait('口ではそう言いながら、体は動いていない。');
      await you.say_and_wait('大丈夫、気をつければいい。');
      await printAndWait([
        you.get_colored_name(),
        ' は、目の前で自分の匂いを嗅ぎ始めた',
        chara.uma_sex_title,
        'を見て、意地悪な気分になった。',
      ]);
      await printAndWait([
        you.get_colored_name(),
        ' は',
        chara.sex,
        'に、いまの状況を話した。',
      ]);
      await printAndWait([chara.sex, 'は顔を真っ赤にした。']);
      await chara.say_and_wait('……');
      await chara.say_and_wait('じゃあ、いま考えてることって……？', true);
      await chara.say_and_wait('……っ、遅刻する。先に行く……');
      await printAndWait([chara.sex, 'は振り返らずに走り去った。']);
      await you.say_and_wait('かわいいな。');
      if (horse_hair) {
        await you.say_as_passer_by_and_wait(
          '馬尾毛',
          'たしかにかわいい。これからもそう思ってくれるといいね。',
        );
        await you.say_and_wait('？？？');
      }
      drawLine();
      await printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の研究室へ着いた。',
      ]);
      if (get('cflag:32:招募状态') === 1) {
        await printAndWait([
          tachyon.sex,
          'は背を向け、白いプラスチックの椅子に座っている？',
        ]);
        await tachyon.say_and_wait('来るべきじゃなかった。');
        await you.say_and_wait('また何を飲ませた。解毒剤を出せ。');
        await tachyon.say_and_wait('オレたち、何回戦った？');
        await you.say_and_wait('……');
        await tachyon.say_and_wait('欲しいなら、自分で取れ。');
        await you.say_and_wait('ネタを続けるなら、昼飯なしだ。');
        await printAndWait([
          tachyon.get_colored_name(),
          ' は光速で膝をついた。',
        ]);
        await printAndWait([
          tachyon.sex,
          'は ',
          you.get_colored_name(),
          ' の太ももにすがり、心の中で期待している。',
        ]);
        await tachyon.say_and_wait(['うわーん、やめて、', callname_32, '。']);
        await printAndWait([
          you.get_colored_name(),
          ' は解毒剤へ向かい、うっかり足が',
          tachyon.sex,
          'に当たった。',
        ]);
        await printAndWait([tachyon.sex, 'の内心は、ひどく複雑だった。']);
        await tachyon.say_and_wait('痛い、うわーん。');
        await printAndWait([
          '……',
          you.get_colored_name(),
          ' は、この解毒剤は飲まざるを得ないと思った。',
        ]);
        await printAndWait([
          '一気に飲み干すと、世界は再び静かになり、',
          you.get_colored_name(),
          ' は周囲を調べたい欲求を失った。',
        ]);
        await tachyon.say_and_wait('……飲んだ？ ……私にも一本。');
        await printAndWait([
          'がっかりした',
          tachyon.sex,
          'の顔を見て、',
          you.get_colored_name(),
          ' は愛馬TVを再開すべきだと確信した。',
        ]);
        await you.say_and_wait('……');
        await tachyon.say_and_wait('え？⊙▽⊙');
        await tachyon.say_as_unknown_and_wait(
          'アウ(∩∀°╭アウ∀∀アウ∀∀°)アウアウ',
        );
        drawLine({ content: '（トム先生のアフレコに感謝）' });
      } else {
        await printAndWait([
          tachyon.sex,
          'は椅子に座り、',
          you.get_colored_name(),
          ' が来ると分かっていたかのようだった。',
        ]);
        await printAndWait('空気が一瞬、妙に静かになった。');
        await you.say_and_wait('黙ったまま、通ぶってるのか？');
        await tachyon.say_and_wait('話す必要はない、そうだろう？', true);
        await you.say_and_wait('？');
        await tachyon.say_and_wait('その顔なら、成功だな。', true);
        await tachyon.say_and_wait('最近の研究成果、異体同心の薬だ。', true);
        await tachyon.say_and_wait(
          '効果は上々だ。殴るのは後回し、ほら、これが解毒剤。',
        );
        await printAndWait([
          tachyon.sex,
          'は隣の記入表と、その横の薬を指した。',
        ]);
        await printAndWait([
          '一気に飲み干すと、世界は再び静かになり、',
          you.get_colored_name(),
          ' は周囲を調べたい欲求を失った。',
        ]);
        await printAndWait('そうは言っても、考えるほど腹が立ってくる。');
        println();
        print('高めの薬を何本か得た：');
        for (const med of med_list) {
          print(`· ${med}`);
        }
        await waitAnyKey();
      }
    };
    f.title = 'おかしな一日 2';
    return f;
  })(),
  wind_welcome: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} race_week 今週にレースがあり、未受肉の三女神がいるか
     */
    const f = async (you, race_week) => {
      await printAndWait([
        you.get_colored_name(),
        ' は微風が身を撫でるのを感じた。グラウンドの青草の香りが乗っている。',
      ]);
      printButton('「今日はいい天気だ」（担当のやる気+1）', 1);
      if (race_week) {
        printButton(
          '「今日のレースも順調でありますように」（？？？好感+50）',
          2,
        );
      }
      return [await input()];
    };
    f.title = '風の来訪';
    return f;
  })(),
  we_are_one: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (chara, you, callname) => {
      await printAndWait([
        'トレーナー室に戻ると、',
        chara.get_colored_name(),
        ' は頭にタオルをのせたままソファから立ち上がり、にこにこと ',
        you.get_colored_name(),
        ' を見ている。',
      ]);
      println();
      await chara.say_and_wait([
        '今日の私の動き、なかなかだったでしょ。',
        callname,
        ' は～ちゃんとご褒美をくれるよね？',
      ]);
      printButton('「今日はよく頑張った。休んで、出かけよう！」', 1);
      print('（やる気-1、好感+50）');
      printButton('「で、どんなご褒美がいい？」', 2);
      const ret = [await input()];
      if (ret[0] === 2) {
        await printAndWait([
          'つい冗談で聞き返したのに、予想外の答えが返ってきた。',
        ]);
        println();
        await chara.say_and_wait([
          callname,
          ' の『お嫁さん』になりたいんだけど、どう？',
        ]);
        println();
        await printAndWait([
          '目の前のウマ娘はにやにやし、そう言いながら ',
          you.get_colored_name(),
          ' の手を',
          chara.sex,
          'の体へ導く。',
        ]);
        println();
        await chara.say_and_wait([
          '私たちは一心同体でしょ？ こんなとき、同じこと考えてるはずだよね？ とにかく ',
          you.get_colored_name(),
          ' が何を言っても、もう我慢できない！！！',
        ]);
        println();
        await printAndWait([
          '尻尾で扉に鍵をかけ、',
          you.get_colored_name(),
          ' を抱きかかえて隣のソファへ飛び込んだ。',
        ]);
        println();
        await chara.say_and_wait(['「ベール」を剥いで、妻みたいに扱って～']);
        println();
        await printAndWait([
          you.get_colored_name(),
          ' が気づいたときには、もう遅かった。',
        ]);
        println();
        printButton('「落ち着いて。他にやることもあるだろ……」', 1);
        printButton(
          'ベール代わりのタオルを乱暴に引き剥がし、ベッドの主が誰かを教えてやる！',
          2,
        );
        ret.push(await input());
        if (ret[1] === 1) {
          await printAndWait([
            you.get_colored_name(),
            ' の拒絶を聞いても、抱きついたウマ娘の笑顔は変わらない。',
          ]);
          await chara.say_and_wait(
            'いらない？ まだ息が合ってないんだね。分かった、ずっとすれば、一心同体になるでしょ？',
          );
        }
      }
      return ret;
    };
    f.title = '「」心「」体';
    return f;
  })(),
  chocolate: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {number} max_lover エアシャカール、トランセンド、ドリームジャーニーのうち恋慕が最高の者
     * @param {number} max_love エアシャカール、トランセンド、ドリームジャーニーのうち最高の恋慕。未募集なら -1
     */
    const f = async (you, max_lover, max_love) => {
      await printAndWait('バレンタインだが、仕事に休みはない。');
      await printAndWait(
        'トレーナーという仕事は、ときどき「下心あり」の相手にも備えねばならない。タイムラインを開けば、恋の酸っぱさが漂いまくりだ。',
      );
      printButton(
        '「噂話など風の音。今日も担当のために体を燃やす一日だ」（体力＆気力+50）',
        1,
      );
      printButton('「暇なら、投稿して場を盛り上げるか」', 2);
      const ret = await input();
      if (ret === 2) {
        if (max_love === -1) {
          await printAndWait([
            '「冷蔵庫を開けて一番ロマンチックなのは、やはり濃縮コーヒー」',
          ]);
          await printAndWait('適当に一文を整え、サブ垢で投稿した。');
        } else if (max_love < 60) {
          await printAndWait(
            '「今日も仕事に励む一日。え、バレンタイン？ チョコを注文しようとしたら連絡先が空だった！」',
          );
          await printAndWait('適当に一文を整え、サブ垢で投稿した。');
          println();
          await printAndWait(
            '翌日、匿名の荷物が届いた。開けてみると、上質なチョコレートだった',
          );
          println();
          await printAndWait('妙だな、誰が送ったんだ……');
        } else {
          await printAndWait(
            '「本命チョコ迷子、N年目。コンビニで青汁味のポッキーを買い、自分を応援」',
          );
          await printAndWait('適当に一文を整え、サブ垢で投稿した。');
          println();
          switch (max_lover) {
            case 36:
              // エアシャカールの場合
              await printAndWait(
                '翌日、匿名の荷物が届いた。開けてみるとチョコレートで、小さく精巧な印象だった',
              );
              break;
            case 80:
              // トランセンドの場合
              await printAndWait(
                '翌日、匿名の荷物が届いた。開けてみるとチョコレートで、缶バッジに似た形だった',
              );
              break;
            case 119:
              // ドリームジャーニーの場合
              await printAndWait(
                '翌日、匿名の荷物が届いた。開けてみるとチョコレートで、ひどく華やかだった',
              );
          }
          println();
          await printAndWait(['妙だな、誰が送ったんだ……']);
        }
      }
      return [ret];
    };
    f.title = 'チョコレート！';
    return f;
  })(),
  sakura_regret: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara キャラ
     * @param {PrintedSpan} callname キャラからプレイヤーへの呼び方
     */
    const f = async (chara, callname) => {
      await printAndWait([
        '夜、ベッドの ',
        chara.get_colored_name(),
        ' は布団に自分を隠している',
      ]);
      println();
      await chara.say_and_wait([
        callname,
        '、どうして……私の愛を受けてくれないの……',
      ]);
      println();
      await chara.say_and_wait([
        'あの綺麗な記憶は、全部、私たちが一緒に作ったのに……',
      ]);
      println();
      await chara.say_and_wait(['本当に……寂しいよ……']);
      println();
      await printAndWait([
        chara.sex,
        'の気づかないところで、枕が静かに濡れた。',
      ]);
      println();
    };
    f.title = '桜の遺憾';
    return f;
  })(),
  nice_weekend: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} chara アグネスデジタルまたはメジロドーベル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname キャラからプレイヤーへの呼び方
     */
    const f = async (chara, you, callname) => {
      const ret = [];
      await printAndWait([
        chara.get_colored_name(),
        ' は同人の締切が迫り、',
        you.get_colored_name(),
        ' を週末、',
        chara.sex,
        'の作業部屋へ呼び、追い込みに付き合わせてきた',
      ]);
      printButton('トレーニングに響かないための必要経費だ（承諾）', 1);
      printButton('休みは休みだ。残業などあり得ない！（拒否）', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait(
          '社畜として、締切への嫌悪は骨に染みている。トレーナーとして、担当を助けるのも当然の務めだ！',
        );
        await printAndWait(
          'ついに日曜が終わろうとするころ、二人はこの一冊を完成させた。',
        );
        const love = get(`love:${chara.id}`),
          relation = get(`relation:${chara.id}:0`);
        if (love >= 50 && love * (get('flag:极端行为限制') || 1) >= relation) {
          await printAndWait([
            you.get_colored_name(),
            ' はいつ眠ったか覚えていない。担当に連れられて作業を始めたこと、',
            you.get_colored_name(),
            ' がこの手の作業に向かなかったのか、それとも単に疲れすぎたのか。ともかく目を覚ますと月曜の未明で、体には働きすぎの痛みが残っていた。',
          ]);
          println();
          await printAndWait([
            '突然、',
            you.get_colored_name(),
            ' は体がやけに重いと感じた',
          ]);
          println();
          printButton('疲れすぎか？ もう少し休もう（異変を見ない）', 1);
          printButton('痺れたのか？ 少し体を動かそう（異変を見る）', 2);
          ret.push(await input());
          if (ret.at(-1) === 1) {
            await printAndWait([
              you.get_colored_name(),
              ' はぼんやりと、',
              chara.get_colored_name(),
              ' の作業部屋で目を覚ました。相手はすでに ',
              you.get_colored_name(),
              ' へ夕食を用意していたが、それでも ',
              you.get_colored_name(),
              ' はやる気が出ない……',
            ]);
          } else {
            await printAndWait([
              you.get_colored_name(),
              ' が体を動かすと、',
              chara.get_colored_name(),
              ' が ',
              you.get_colored_name(),
              ' の脇に伏せていた。',
            ]);
            await printAndWait(['裸 で 伏 せ て い た']);
            await printAndWait([
              you.get_colored_name(),
              ' は何か言おうとしたが、目の前が暗くなり、腰に力が抜けた',
            ]);
            await chara.say_and_wait([
              callname,
              '、もう起きた？ じゃあ第二ラウンドね❤️～',
            ]);
          }
        } else {
          if (love >= 50) {
            await printAndWait([
              '内容はトレーナーと',
              chara.uma_sex_title,
              'の甘い日常で、大好評だった！ ただ、なぜかトレーナーの顔が ',
              you.get_colored_name(),
              ' に似ている気がする？（ウマコイン+150）',
            ]);
          }
          if (relation >= 550) {
            await printAndWait([
              '頒布のあと、',
              chara.get_colored_name(),
              ' は礼として ',
              you.get_colored_name(),
              ' にスイーツを奢りたがった。（【濃縮コーヒー】×5 を入手）',
            ]);
          }
        }
      }
      return ret;
    };
    f.title = '楽しい週末の始まり！';
    return f;
  })(),
  kamen_rider: (() => {
    /**
     * @author Mr.E.
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} no_ero_item 性玩具を持っていないか
     */
    const f = async (you, no_ero_item) => {
      const ret = [];
      await printAndWait(['商店街を通りかかると、店がイベントをしていた。']);
      await printAndWait(['「仮面ライダーに扮して、ぬくもりを届けよう～」']);
      await printAndWait([
        '店主によれば、子どもたちに温もりを届けるための企画だという。衣装は足りているが、人手が足りない。',
      ]);
      await printAndWait([
        '子どもたちの日常を、もう少し豊かにしたいのだそうだ。',
      ]);
      await printAndWait([
        '参加すれば、合う仮面ライダーのスーツを試着できる。',
      ]);
      printButton('「時間もあるし、出てみるか。」', 1);
      printButton('「やめよう。こういう賑やかなのは向かない。」', 2);
      ret.push(await input());
      if (ret[0] === 1) {
        await printAndWait([
          '店主は ',
          you.get_colored_name(),
          ' の協力に礼を言い、更衣室へ案内し、好きな一着を選ばせた——',
        ]);
        printButton('「ニンジンライダー！」（名声+15）', 1);
        printButton('「魔法少女（仮面怪人仕様）！」（ウマコイン+25）', 2);
        printButton(
          '「？？？ なんだか妙な小道具」（名声+20、一部担当のやる気+1）',
          3,
          { disabled: no_ero_item },
        );
        ret.push(await input());
        switch (ret[1]) {
          case 1:
            await printAndWait([
              '大好評だった！ 見覚えのある生徒までいた気がする！？',
            ]);
            break;
          case 2:
            await printAndWait([
              '大好評だった！ この服、着るのが大変だったが……',
            ]);
            break;
          case 3:
            await printAndWait([
              'タイツと妙な布を店員に手伝ってもらって着た。下着みたいな布が、顔を覆うだけだった！？',
            ]);
            await printAndWait([
              '店のマスコットとしては効果抜群だったが、何か大事なものを失った気がする……',
            ]);
        }
      }
      return ret;
    };
    f.title = '仮面（？）ライダー！';
    return f;
  })(),
  big_sale: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you プレイヤー
     * @param {string} uma ウマ娘 または ウマ郎
     * @param {boolean} disabled 育成中の担当がいない、または所持ウマコインが 10 未満
     */
    const f = async (you, uma, disabled) => {
      await printAndWait('外出の途中、商店街を通りかかった……');
      await printAndWait('何か様子が違う？');
      await you.say_as_passer_by_and_wait(
        '八百屋の店主',
        'いらっしゃいご覧あれ、新鮮な野菜果物が超特価だよ！',
      );
      await printAndWait([
        you.get_colored_name(),
        'は興味を引かれて覗き込んだ。',
      ]);
      await printAndWait(
        '店先には色とりどりの野菜と果物が並び、見た目も鮮度も申し分ない。',
      );
      await you.say_as_passer_by_and_wait(
        '八百屋の店主',
        'うちは安くて旨いよ。どうだい、少し買っていくかい？',
      );
      printButton(
        `ニンジンを買う（ウマコイン-10、育成中の${uma}のスピード+20）`,
        1,
        {
          disabled,
        },
      );
      printButton(
        `ニンニクを買う（ウマコイン-10、育成中の${uma}のスタミナ+20）`,
        2,
        {
          disabled,
        },
      );
      printButton(
        `ジャガイモを買う（ウマコイン-10、育成中の${uma}のパワー+20）`,
        3,
        {
          disabled,
        },
      );
      printButton(`唐辛子を買う（ウマコイン-10、育成中の${uma}の根性+20）`, 4, {
        disabled,
      });
      printButton(`イチゴを買う（ウマコイン-10、育成中の${uma}の賢さ+20）`, 5, {
        disabled,
      });
      printButton('懐が寒いので失礼する', 6);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            you.get_colored_name(),
            'は成長期の',
            uma,
            'の食事量を見込んで、新鮮なニンジンを買った。',
          ]);
          await printAndWait([
            '大きな袋を学園まで運び、',
            you.get_colored_name(),
            'は担当の',
            uma,
            'へ、スピードの象徴たるニンジンハンバーグとニンジンジュースを作った。',
          ]);
          await printAndWait('好評だった！');
          break;
        case 2:
          await printAndWait([
            you.get_colored_name(),
            'は成長期の',
            uma,
            'の食事量を見込んで、新鮮なニンニクを買った。',
          ]);
          await printAndWait([
            '大きな袋を学園まで運び、',
            you.get_colored_name(),
            'は担当の',
            uma,
            'へ、スタミナ抜群の特大ニンニクラーメンを作った。',
          ]);
          await printAndWait('好評だった！');
          break;
        case 3:
          await printAndWait([
            you.get_colored_name(),
            'は成長期の',
            uma,
            'の食事量を見込んで、新鮮なジャガイモを買った。',
          ]);
          await printAndWait([
            '大きな袋を学園まで運び、',
            you.get_colored_name(),
            'は担当の',
            uma,
            'へ、パワーを感じるマッシュポテト丼を作った。',
          ]);
          await printAndWait('好評だった！');
          break;
        case 4:
          await printAndWait([
            you.get_colored_name(),
            'は成長期の',
            uma,
            'の食事量を見込んで、新鮮な唐辛子を買った。',
          ]);
          await printAndWait([
            '唐辛子を学園へ持ち帰ると、',
            you.get_colored_name(),
            'は担当の',
            uma,
            'へ、見ただけで色を失う超辛麻婆豆腐を作った。',
          ]);
          await printAndWait('好評だった！');
          break;
        case 5:
          await printAndWait([
            you.get_colored_name(),
            'は成長期の',
            uma,
            'の食事量を見込んで、新鮮なイチゴを買った。',
          ]);
          await printAndWait([
            '大きな袋を学園まで運び、',
            you.get_colored_name(),
            'は担当の',
            uma,
            'へ、見た目からして賢そうなイチゴアイスを作った。',
          ]);
          await printAndWait('好評だった！');
          break;
        case 6:
          if (!disabled) {
            await printAndWait([
              you.get_colored_name(),
              'は担当の食事量を思い出し、そっと離れた。',
            ]);
          } else {
            await printAndWait(['あいにく、使う宛がなかった。']);
            await printAndWait([
              you.get_colored_name(),
              ' は首を振り、踵を返した。',
            ]);
          }
      }
      return [ret];
    };
    f.title = '商店街の大安売り';
    return f;
  })(),
  justice: (() => {
    /**
     * @author 牛蛙煲
     * @param {CharaTalk} you プレイヤー
     * @param {CharaTalk} chara キャラ
     * @param {CharaTalk} minoru 駿川たづな
     * @param {PrintedSpan} call_301 一般キャラから駿川たづなへの呼び方
     */
    const f = async (you, chara, minoru, call_301) => {
      chara.name = chara.sex_code === 1 ? '奇妙なウマ郎' : '奇妙なウマ娘';
      await printAndWait([
        you.get_colored_name(),
        'が道を歩いていると、前方で',
        chara.uma_sex_title,
        'に追われるトレーナーが見えた。',
      ]);
      await printAndWait([
        'そのトレーナーはすでに体力が尽きかけており、後ろの',
        chara.uma_sex_title,
        'にいつ追いつかれてもおかしくない。',
      ]);
      await printAndWait([
        'そのときトレーナーは',
        you.get_colored_name(),
        'を見つけ、一筋の希望にすがるように',
        you.get_colored_name(),
        'へ走ってきた。',
      ]);
      await you.say_as_passer_by_and_wait(
        '見知らぬトレーナー',
        '頼む、助けてくれ。あそこへは戻りたくない……あの地下室へは……',
      );
      await printAndWait([
        you.get_colored_name(),
        'は、目の前の絶望しきった見知らぬトレーナーと、急速に近づく赤い目の',
        chara.uma_sex_title,
        'を見て、',
      ]);
      printButton('見知らぬトレーナーを助ける', 1);
      printButton(`${chara.name}を助ける`, 2);
      printButton('見て見ぬふりをする', 3);
      const ret = await input();
      switch (ret) {
        case 1:
          await printAndWait([
            '何が起きたかは分からないが、同僚として助け合おうと、',
            you.get_colored_name(),
            'は迷いながらも頷いた。',
          ]);
          await chara.say_and_wait(
            '私のトレーナーを返してくれませんか？ まだ……話したいことがあるんです……',
          );
          await printAndWait([
            you.get_colored_name(),
            'は、危険の気配を濃く漂わせる',
            chara.uma_sex_title,
            'を見て、こっそり唾を飲み込んだ。',
          ]);
          await you.say_and_wait([
            'その、揉め事なら話して落ち着いて解決しよう。でないと',
            call_301,
            'に電話するぞ。',
          ]);
          await printAndWait([
            you.get_colored_name(),
            '自身も膝が笑っていたが、とっさにいちばん正しい手を選んだ——',
            minoru.get_colored_name(),
            'の名を出したのだ。',
          ]);
          await printAndWait([
            '案の定、',
            you.get_colored_name(),
            'の目の前で',
            chara.uma_sex_title,
            'は迷い始めた。',
          ]);
          await chara.say_and_wait(
            'トレーナー……逃げ切れないわ。次は、こんなにいい同僚には出会えないわよ……',
          );
          await printAndWait([
            '眼前の',
            chara.uma_sex_title,
            'の鋭い視線は、',
            you.get_colored_name(),
            'を貫きそうで、',
            you.get_colored_name(),
            'の体を通して後ろのトレーナーまで見ているかのようだった。',
          ]);
          await printAndWait([
            'それから、',
            chara.sex,
            'はくるりと踵を返して去った。',
          ]);
          await printAndWait([
            you.get_colored_name(),
            'と後ろのトレーナーは同時に息を吐いた。',
          ]);
          await you.say_as_passer_by_and_wait(
            '見知らぬトレーナー',
            '本当にありがとうございます。ほんの気持ちですが、受け取ってください……',
          );
          await printAndWait([
            '見知らぬトレーナーは財布を取り出し、',
            you.get_colored_name(),
            'の手に押し込み、反応する前に急いで遠ざかった。',
          ]);
          await printAndWait([
            you.get_colored_name(),
            'は何が起きたか聞きたかったが、もう機会はなさそうだ。',
          ]);
          println();
          await printAndWait('100 ウマコインを得た！');
          break;
        case 2:
          await chara.say_and_wait(
            '私のトレーナーを返してくれませんか？ まだ……話したいことがあるんです……',
          );
          await printAndWait([
            you.get_colored_name(),
            'は、危険の気配を濃く漂わせる',
            chara.uma_sex_title,
            'を見て、逆らう気力が湧かなかった。',
          ]);
          await you.say_and_wait('お二人でどうぞ。自分はこれで。');
          await printAndWait([
            'そう言い、',
            you.get_colored_name(),
            'は横へそっとずれ、後ろの見知らぬトレーナーを晒した。',
          ]);
          await printAndWait([
            '挙動のおかしい',
            chara.uma_sex_title,
            'はすぐ見知らぬトレーナーの腕を掴み、少し強引に引き寄せた。',
          ]);
          await chara.say_and_wait(
            'こっそり逃げるなんて……こんなに生意気なトレーナーは、ちゃんと『お世話』しないと……',
          );
          await printAndWait([
            you.get_colored_name(),
            'は息を殺して、',
            chara.uma_sex_title,
            'が親しげにトレーナーの腕へ頬をすり寄せながら、相手を引きずって去るのを見た。',
          ]);
          await printAndWait([
            '突然、その',
            chara.uma_sex_title,
            'は何か思い出したように品を取り出し、',
            you.get_colored_name(),
            'へ投げてきた。',
          ]);
          await printAndWait([you.get_colored_name(), 'は慌てて受け取った。']);
          await chara.say_and_wait(
            '親切なトレーナーさん、ご自分の担当を決して冷たくしないでね？ ふふ……',
          );
          await printAndWait([
            you.get_colored_name(),
            'は二人の姿が遠ざかるのを見送り、まだ心臓が落ち着かない。',
          ]);
          break;
        case 3:
          await printAndWait([
            you.get_colored_name(),
            'には、この異常すぎる状況と向き合う勇気がなかった。慌ててスマホを取り出し、電話中のふりをしてそっと離れた。',
          ]);
          await printAndWait([
            '奇妙な',
            chara.uma_sex_title,
            'と見知らぬトレーナーが',
            you.get_colored_name(),
            'の視界から消えるまで、',
            you.get_colored_name(),
            'はなかなか力が抜けなかった。',
          ]);
          await printAndWait([
            you.get_colored_name(),
            'も分かっている。どちらにも手を出さないのは、本質的には奇妙な',
            chara.uma_sex_title,
            'を助けることだ。',
          ]);
          await printAndWait([
            'それでも',
            you.get_colored_name(),
            'は一日中このことを考え、かえって普段より頭が冴えた気がした。',
          ]);
      }
      if (get('exp:0:监禁次数') === 0) {
        await printAndWait([
          'あとで、',
          you.get_colored_name(),
          'はふと思った。自分も同じ過ちを犯し、同じ結末へ向かうのではないか、と。',
        ]);
      }
      return [ret];
    };
    f.title = '見過ごせぬこと';
    return f;
  })(),
};
