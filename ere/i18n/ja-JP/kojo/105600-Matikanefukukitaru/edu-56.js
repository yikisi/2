/**
 * @file マチカネフクキタル - 育成
 * @author ALEX
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

const { buff_colors, motivation_colors } = require('#/data/color-const');

const { typing } = require('#/i18n/zh-CN/snippets');

module.exports = {
  async train_success(kitaru, lucky_train) {
    era.print([
      kitaru.get_colored_name(),
      ' のトレーニングは、無事に終わった！',
    ]);
    era.println();
    if (lucky_train) {
      await kitaru.say_and_wait('運勢に合った選択でしたね！ 福来たる！');
    }
  },
  train_fail: (() => {
    const title = '体を大切に';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} fail_again 頑張るを選んだ場合、再び失敗するか
     */
    const f = async (kitaru, you, callname, fail_again) => {
      await era.printAndWait([
        'またしても、トレーニング中に怪我をした ',
        kitaru.get_colored_name(),
        ' を保健室へ連れてきた。',
      ]);
      await kitaru.say_and_wait('あっ！ まったく予想外でした！');
      await kitaru.say_and_wait('神籤には今日は大吉って書いてあったのに！');
      era.printButton('「しっかり休め！」（失敗を受け、結果を負う）', 1);
      era.printButton(
        '「占いばかり頼るな！」（挽回を試す。より重い結果になることも）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await kitaru.say_and_wait('んっ！');
        await era.printAndWait([
          '白い布団にすっぽり潜り込み、',
          kitaru.get_colored_name(),
          ' はそのままぐっすり眠ってしまった。',
        ]);
      } else {
        await kitaru.say_and_wait(['あっ！ ', callname, ' の言うとおりです！']);
        if (fail_again) {
          await era.printAndWait([
            '翌日、保健室へ様子を見に行くと、',
            you.get_colored_name(),
            ' は',
            kitaru.sex,
            'がまた新しい占いのやり方を口にしているのを聞いた。',
          ]);
          await era.printAndWait([
            'どうやら ',
            kitaru.get_colored_name(),
            ' は、あまり教訓にしていないらしい。',
          ]);
        } else {
          era.drawLine({ content: '翌日' });
          await kitaru.say_and_wait([
            'おお！ ',
            callname,
            '、原因がわかりました！',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は少し意外そうに、',
            kitaru.get_colored_name(),
            ' が ',
            you.get_colored_name(),
            ' へ、その日のトレーニングで',
            kitaru.sex,
            'がどこを間違えたのかを振り返り始めるのを見ていた。',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '無理は厳禁！';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} fail_again 頑張るを選んだ場合、再び失敗するか
     */
    const f = async (kitaru, you, callname, fail_again) => {
      await era.printAndWait([
        'トレーニング中に怪我をした ',
        kitaru.get_colored_name(),
        ' を保健室へ連れてきた。',
      ]);
      await kitaru.say_and_wait(
        'っ……今日の運勢、思ったほど順調じゃなかったですね！',
      );
      await kitaru.say_and_wait('大凶の前触れ、だったりしませんか？');
      await era.printAndWait([
        '保健室のベッドに座った ',
        kitaru.get_colored_name(),
        ' は、腫れた患部をさすりながら、まるで大敵に相対するような顔をしている。',
      ]);
      era.printButton('「考えすぎだ！」（失敗を受け、結果を負う）', 1);
      era.printButton(
        '「休みのうちに開運の儀式でもする？」（挽回を試す。より重い結果になることも）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          'そう言いながら、フクキタルのボサボサ髪を撫でる。',
          you.get_colored_name(),
          ' の少し荒っぽい手つきで、',
          kitaru.teen_sex_title,
          'はそれ以上の妄想を止めた。',
        ]);
        await kitaru.say_and_wait([
          'えっ！ そうですよね、ん、',
          callname,
          '！',
        ]);
        await kitaru.say_and_wait('このあとは、しっかり休みます！');
        await era.printAndWait([
          '真っ白なベッドにひとり残された ',
          kitaru.get_colored_name(),
          ' は、名残惜しそうに ',
          you.get_colored_name(),
          ' が保健室を出ていくのを見送った。',
        ]);
      } else {
        await era.printAndWait([
          'その提案を聞くと、ぐったりベッドに横たわっていた ',
          kitaru.get_colored_name(),
          ' の目が、また輝きを取り戻した。',
        ]);
        await era.printAndWait([
          'そのあと、',
          kitaru.get_colored_name(),
          ' の指示で儀式の場を整え始めた。気がつけば保健室は、何かをお祀りする神棚のようになっていた。',
        ]);
        if (fail_again) {
          await era.printAndWait(
            '儀式の準備で、傷口を悪化させてしまったらしい。',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' は ',
            kitaru.get_colored_name(),
            ' と並んで、校医に叱られた。',
          ]);
        } else {
          await era.printAndWait('意外なことに、本当に効いた！');
          await era.printAndWait([
            you.get_colored_name(),
            ' は、保健室に新しく来た患者へ、得意げに白興様を説いている ',
            kitaru.get_colored_name(),
            ' の声を聞いた。',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  first_train_fail: (() => {
    const title = '触診';
    /**
     * 男トレーナー＋ウマ娘＋熱恋以上、初回のトレーニング失敗で必ず発生するイベント
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await era.printAndWait([
        'お姫様抱っこで、トレーニングに失敗した ',
        kitaru.get_colored_name(),
        ' を保健室へ運んだ。幸い',
        kitaru.sex,
        'に怪我はなかったが、念のための検査は必要だ。',
      ]);
      await era.printAndWait([
        'その途中、',
        you.get_colored_name(),
        ' の手が肩甲骨と膝裏に触れているのに気づいた ',
        kitaru.get_colored_name(),
        ' の顔が、ほんのり赤らむ。',
      ]);
      await era.printAndWait([
        '保健室の白いベッドの縁に座り、',
        you.get_colored_name(),
        ' に迷惑をかけたと自覚している',
        kitaru.teen_sex_title,
        'は、落ち着かなさそうに床を見つめ、耐えがたい沈黙のなかで校医を待っていた。',
      ]);
      await kitaru.say_and_wait(['あの、', callname, '……']);
      await era.printAndWait([
        '校医は、たぶん手のかかる患者の対応で忙しい。トレセンでは毎日、トレーニングに失敗する',
        kitaru.uma_sex_title,
        'が数え切れないほどいる。だから足の予備検査、つまり触診は、',
        you.get_colored_name(),
        ' がやるしかなかった。',
      ]);
      era.printButton('「脱いで」', 1);
      await era.input();
      await kitaru.say_and_wait(['えっ！ ', callname, ' は、まさか！']);
      await era.printAndWait([
        'やかましい反応をこらえて、',
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'の足に履いたスニーカーを指差した。',
      ]);
      era.printButton('靴を脱ぐ', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は腰を屈めて靴紐をほどき、',
        kitaru.sex,
        'のスニーカーをゆっくり脱がせた。白いニーソックスに包まれ、ほんのり肉色が透ける足が、',
        you.get_colored_name(),
        ' の前でつま先をピンと伸ばす。',
      ]);
      era.printButton('「靴下も脱いで」', 1);
      await era.input();
      await kitaru.say_and_wait(['あの！ ', callname, '……']);
      await kitaru.say_and_wait('これくらいなら、自分でやります！');
      await era.printAndWait([
        '頬を赤らめた ',
        kitaru.get_colored_name(),
        ' はベッドの縁に座り、まず左足を曲げてベッドに乗せた。隠そうとはしたのに、プリーツスカートの下は見えてしまう。',
      ]);
      await era.printAndWait([
        '裾の隙間から、青白のパンツに包まれた小さな尻が、座っているせいで少し潰れて丸く見える。',
      ]);
      await era.printAndWait([
        '太ももに跡を残したストッキングの縁を摘み、外側へ引っ張り、きれいな筋肉の線に沿ってふくらはぎまで下ろしていく。白く丸い太ももが現れ、一寸ずつ巻き下ろすたび、脚の肉が小さく震える。両脚のストッキングが、小さな塊になるまで。',
      ]);
      await kitaru.say_and_wait(['じゃあ、', callname, '……つ、次は？']);
      await era.printAndWait([
        'はっきり照れた ',
        kitaru.get_colored_name(),
        ' はうつむき、両足を勝手に重ねてこすり合わせ、ピンクのつま先まで互いにいじって揺れている。',
      ]);
      era.printButton('手を伸ばす', 1);
      await era.input();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の、恥ずかしさで少し丸まった足——正確には右足が、',
        you.get_colored_name(),
        ' の掌に収まった。',
      ]);
      await kitaru.say_and_wait('あっ……');
      await era.printAndWait([
        'きれいなアーチ、柔らかな足指、運動のあとの赤み。',
        you.get_colored_name(),
        ' は指で足裏から足首まで撫でながら、見た目は普通の人間と変わらない足が、走るときはあれほどの加速を支えているのかと感嘆する。',
      ]);
      await kitaru.say_and_wait('ひゃっ……ふ……');
      await era.printAndWait([
        '短い息が、',
        kitaru.get_colored_name(),
        ' の口から漏れる。',
      ]);
      await era.printAndWait([
        'ここまで来れば、',
        kitaru.get_colored_name(),
        ' に異常はないとわかっている。それでも……',
      ]);
      await era.printAndWait('まだ続ける？');
      era.printButton('終わる', 1);
      era.printButton('続ける', 2);
      if ((await era.input()) === 2) {
        await era.printAndWait([
          'さらに上へ。指腹が、弾力のあるふくらはぎ、膝の腱、その上の太ももをなぞる。',
        ]);
        await kitaru.say_and_wait('んっ……');
        await era.printAndWait([
          '太ももは、男の肌に触れて一度こわばり、それから ',
          kitaru.get_colored_name(),
          ' は自分の運命の人が撫でているのだと気づいて、ふっと力を抜いた。',
        ]);
        await kitaru.say_and_wait('はぁっ！');
        await era.printAndWait([
          '指腹で筋の状態を確かめ、マッサージのように揉む。もう触診の線は越えている。',
          kitaru.get_colored_name(),
          ' の息も、桃色の湿りと揺らぎを帯びてきた。',
        ]);
        await kitaru.say_and_wait('ん……はぁっ！');
        await era.printAndWait([
          you.get_colored_name(),
          ' が、うっかりかどうか、',
          kitaru.sex,
          'の脚の付け根に触れたとき、',
          kitaru.get_colored_name(),
          ' が短い声を上げた。そこで ',
          you.get_colored_name(),
          ' はやっと顔を上げ、',
          kitaru.sex,
          'と目が合った。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の視線に気づいた ',
          kitaru.get_colored_name(),
          ' は、驚いたように横髪で真っ赤な頬を隠そうとして、いつものボサボサ髪では失敗する。',
        ]);
        await kitaru.say_and_wait([callname, '……']);
        await era.printAndWait([
          '最初は薄紅だった頬が、いまは真っ赤に染まっている。',
          you.get_colored_name(),
          ' の触診に合わせていたのか、ベッドに端座していた ',
          kitaru.get_colored_name(),
          ' の体はもうくずれ、シャツから覗く肌まで赤くなっている。',
        ]);
        await kitaru.say_and_wait(['ん……はぁっ！ ん……あの、', callname, '？']);
        era.printButton('「……ん？ フク、大丈夫か？」', 1);
        await era.input();
        await kitaru.say_and_wait('は、はい……あの、だいじょうぶです……');
        await kitaru.say_and_wait([
          'だから、',
          callname,
          '……問題、ないですよね？',
        ]);
        await era.printAndWait([
          'ゆっくり左足にニーソックスを履き直していた ',
          kitaru.get_colored_name(),
          ' が顔を上げて ',
          you.get_colored_name(),
          ' を見る。錯覚かもしれないが、その顔には、あるかなきかの期待が浮かんでいた。',
        ]);
        await era.printAndWait('まだ続ける？');
        era.printButton('終わる', 1);
        era.printButton('フクキタルの足を握る', 2, {
          disabled: era.get('love:56') < 75,
        });
        era.printButton('フクキタルを押し倒す', 3, {
          disabled: era.get('love:56') < 75,
        });
        ret.push(await era.input());
        if (ret[0] === 2) {
          await kitaru.say_and_wait([callname, '……ん❤️！？']);
          await era.printAndWait([
            '目の前の',
            kitaru.uma_sex_title,
            'の短い悲鳴のなか、',
            kitaru.sex,
            'の左足首を掴んで高く上げる。',
            kitaru.get_colored_name(),
            ' が ',
            you.get_colored_name(),
            ' の突然の動きに表情管理を完全に諦め、真っ赤になったところで、薄い白ストッキングに包まれた足裏を、ズボン越しに ',
            you.get_colored_name(),
            ' の張り詰めたテントへ押し当てた。',
          ]);
          await kitaru.say_and_wait(['あっ、', callname, '、まさかここで……']);
          await kitaru.say_and_wait('……足で、するんですか？');
          await era.printAndWait([
            '意図に気づいたらしい。病床の栗毛の',
            kitaru.uma_sex_title,
            'が顔を上げ、',
            you.get_colored_name(),
            ' のつもりを確かめる。',
          ]);
          await kitaru.say_and_wait([
            'あ……わかりました。じゃあ ',
            callname,
            '、入り口を見ていてください。',
          ]);
          await kitaru.say_and_wait([
            'だって、このあと自分にその余裕があるか、心配なので。',
          ]);
          await era.printAndWait([
            '許可が出たあと、さっきの触診のあとニーソックスを履き直していない右足が、剥き出しのつま先で ',
            you.get_colored_name(),
            ' のファスナーを下ろした。',
          ]);
          await era.printAndWait(['じりっ……']);
          await kitaru.say_and_wait('おっきい……');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' が小さく口の形でそう言ったように見えた。',
          ]);
          await era.printAndWait([
            'それから、白いニーソックスの左足と、感触のまったく違う裸足で、足の穴をつくる。',
          ]);
          await era.printAndWait([
            '太い肉竿の上をゆっくり上下させ、棒に浮いた青筋を一筋ずつ擦る。',
          ]);
          await era.printAndWait([
            '開いた足指のあいだから、透明で粘る糸が引けるまで。',
          ]);
          await kitaru.say_and_wait('ん……はぁっ！');
          await era.printAndWait([
            'それでも遅すぎる。このままでは、いつ射精できるかわからない。',
          ]);
          era.printButton('両足を握る', 1);
          await era.input();
          await kitaru.say_and_wait('んんっ！……');
          await era.printAndWait([
            'ベッドを支えていた ',
            kitaru.get_colored_name(),
            ' が突然バランスを失って後ろへ倒れる。代わりに残ったのは、左脚だけ先走りでべたべたになった白いニーソックスを履いた一対の足。',
            you.get_colored_name(),
            ' が足首を支えて高く上げ、肉棒へ乗せた。',
          ]);
          await kitaru.say_and_wait([callname, '、す、急すぎます！']);
          await era.printAndWait([
            '声を潜めて ',
            you.get_colored_name(),
            ' を叱るが、ほとんど理性を失った ',
            you.get_colored_name(),
            ' は気にしない。',
          ]);
          await era.printAndWait([
            '使い捨てのカップのように、遠慮なく ',
            kitaru.get_colored_name(),
            ' の両足を使う。',
          ]);
          await era.printAndWait([
            '太い茎の上で色の違う円をつくり、',
            you.get_colored_name(),
            ' の両手は先ほどの比ではない速さで肉棒を扱き、淫らな摩擦の水音を立てる。',
          ]);
          await kitaru.say_and_wait('おちんぽ様……熱いです～！');
          await era.printAndWait([
            '敏感な足裏から来る熱と、濃い精液の匂い。',
            you.get_colored_name(),
            ' に両足を握られた ',
            kitaru.get_colored_name(),
            ' は、猟師の罠に落ちた栗毛の狐のようだ。上半身は保健室のマットに沈み、',
            kitaru.uma_sex_title,
            'の柔らかさでベッドとさらに高い仰角をつくる。',
          ]);
          await kitaru.say_and_wait(
            '運命の人❤️ こんなに激しくて、足、熱いです～！',
          );
          await era.printAndWait(['声量が、少し危うくなってきた。']);
          era.printButton('叱る', 1);
          await era.input();
          await you.say_and_wait([
            '声を抑えろ！ さっきの触診のときから、この下品な蹄、反応してただろう！',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' の叱責を聞き、',
            kitaru.get_colored_name(),
            ' はだらしなく崩れた顔で、我慢できずにむうっと低い声を漏らす。',
          ]);
          await kitaru.say_and_wait('えへへ……乱暴な運命の人も、好きです～！');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の震えそうな足首を摘み、軽く力を入れて、発散するようにこの足穴オナホを使う。',
          ]);
          await kitaru.say_and_wait(['はっ～はっ～はっ！']);
          await kitaru.say_and_wait(['いっく❤️ いっく❤️ ぐ……']);
          await era.printAndWait([
            '濃く粘る精液が、',
            you.get_colored_name(),
            ' に握られたしびれて力のない両足を起点に、間に合って閉じた足のアーチへ射たれた。それでも数滴は、',
            kitaru.get_colored_name(),
            ' の顔と服に白い飾りになった。',
          ]);
          await era.printAndWait([
            '濃い白濁で左脚のニーソックスは色が一段深くなり、右脚に落ちた分は、',
            you.get_colored_name(),
            ' が ',
            kitaru.get_colored_name(),
            ' の足首を握ったまま、まだ余力のある ',
            kitaru.get_colored_name(),
            ' に、脱いだ自分の上着へ擦りつけさせた。',
          ]);
          await era.printAndWait([
            '急いで片付けないと。このあと校医に見つかったら面倒だ。',
          ]);
          if (!era.get('talent:56:神之足')) {
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' は ',
              {
                color: buff_colors[2],
                content: '[神の足]',
              },
              ' を得た！',
            ]);
          }
        } else if (ret[0] === 3) {
          era.printButton('「脚を開け。」', 1);
          await era.input();
          await kitaru.say_and_wait('えっ！？');
          await era.printAndWait([
            you.get_colored_name(),
            ' の命令で、',
            kitaru.get_colored_name(),
            ' は素直に両手を太ももの両側へ置いた。',
          ]);
          await era.printAndWait([
            '震えながら両手で脚を開き、さっきの触診で ',
            you.get_colored_name(),
            ' に濡らされたパンツを見せる。',
          ]);
        }
      }
      if (!ret[0] || ret[0] === 1) {
        await era.printAndWait([
          '異常がないのを確かめたあと、',
          kitaru.get_colored_name(),
          ' にしっかり休むよう言いつけた。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = 'レースの前に';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} edu_prog 育成進行。シニア級宝塚記念以前は8未満
     */
    const f = async (kitaru, you, callname, edu_prog) => {
      const buffer = [];
      if (era.get('mark:56:淫纹') > 1) {
        buffer.push(async () => {
          await kitaru.say_and_wait(
            '……勝負服がお腹を出すタイプじゃなくて、よかったです。',
          );
          await era.printAndWait(
            'それでも、レース前の興奮で一緒に効いてしまった淫紋の、ピンクの光はほのかに見える。',
          );
        });
      }
      if (era.get('mark:56:欢愉') > 1) {
        buffer.push(async () => {
          await kitaru.say_and_wait(
            'ん……すごく、すごく、レースのあとのご褒美が楽しみです！',
          );
          await era.printAndWait([
            'レースのためにしばらく禁欲していた ',
            kitaru.get_colored_name(),
            ' は、それだけ思い浮かべただけで体が小さく震え始める。',
          ]);
        });
      }
      if (era.get('mark:56:同心') > 1) {
        buffer.push(async () => {
          await kitaru.say_and_wait('あとで……運命の人、わかってますよね！');
          await kitaru.say_and_wait('んっ！');
          await era.printAndWait([
            'つま先立ちで ',
            you.get_colored_name(),
            ' の頬に軽くキスすると、',
            kitaru.get_colored_name(),
            ' はコースへ向かった。',
          ]);
        });
      }
      if (edu_prog < 8) {
        buffer.push(
          async () => {
            await kitaru.say_and_wait(
              '……白興様をお招きします。その御力なら、きっと私に道を開いてくださいます！',
            );
            await era.printAndWait([
              'どこで覚えたのかわからない祈りを唱え、',
              kitaru.get_colored_name(),
              ' の姿はコースの入口へ消えた。',
            ]);
          },
          async () => {
            await kitaru.say_and_wait('……星が、正しい位置へ動きましたね！');
            await era.printAndWait([
              '水晶球を招き猫のリュックへしまい、',
              kitaru.get_colored_name(),
              ' の姿はコースの入口へ消えた。',
            ]);
          },
        );
      } else {
        buffer.push(async () => {
          await kitaru.say_and_wait([
            'どうか ',
            callname,
            ' は、待って、希望を持っていてください！',
          ]);
          await kitaru.say_and_wait('全力で、勝ちを取りにいきます！');
        });
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_start_sex: (() => {
    const title = '場違いな発情';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('ん……');
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        '下腹を押さえた ',
        kitaru.get_colored_name(),
        ' が背を丸めて ',
        you.get_colored_name(),
        ' の前に立つ。赤い頬には、発情じみた恍惚が浮かんでいる。',
      ]);
      await kitaru.say_and_wait([callname, '……ほしい……ほしいです……']);
      await era.printAndWait([
        'どうして急にこうなったのか、',
        you.get_colored_name(),
        ' は慌てずにはいられない。',
      ]);
      await era.printAndWait([
        'だが考える暇もなく、',
        kitaru.get_colored_name(),
        ' は半ば跪くように床へ崩れ落ちた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.sex,
        'が服の裾をたくし上げるのを見た。すでに紅潮した下腹で、',
        you.get_colored_name(),
        ' が描いた淫紋が、場違いにピンクの微光を放っている。',
      ]);
      await era.printAndWait([
        '間違いない。いま ',
        kitaru.get_colored_name(),
        ' の体も心も、完全に交わる準備へ入らせている元凶だ。',
      ]);
      await kitaru.say_and_wait([callname, '……ごめんなさい……']);
      await era.printAndWait([
        'ベンチに座る ',
        you.get_colored_name(),
        ' の目の前で、',
        kitaru.get_colored_name(),
        ' は膝で進んで ',
        you.get_colored_name(),
        ' の両脚のあいだへ入り、発情した牝馬のように、自分から ',
        you.get_colored_name(),
        ' の股間へ顔を寄せた。',
      ]);
      await era.printAndWait([
        '布越しに漂う匂いだけで、占い師さんの下腹に重い一撃が落ちる。',
      ]);
      await era.printAndWait([
        '淫紋に催された ',
        kitaru.get_colored_name(),
        ' の体は甘いホルモンを放ち、その艶めいた顔つきが ',
        you.get_colored_name(),
        ' の股間をさらに膨らませる。',
      ]);
      await kitaru.say_and_wait('んふっ！');
      await era.printAndWait([
        '薄い赤の唇を開き、白い歯で ',
        you.get_colored_name(),
        ' のズボンのファスナーを咥えてゆっくり下ろす。拘束を解かれた太く赤い茎が、スラックスから跳ね出た。',
      ]);
      await kitaru.say_and_wait('おちんぽさん……こんにちは……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は貪欲に ',
        you.get_colored_name(),
        ' の股間の匂いを嗅ぎ、待ちきれずに舌先で肉棒の先へキスする。',
      ]);
      await kitaru.say_and_wait('ぐちゅっ！');
      await era.printAndWait([
        '鈴口から溢れた粘液を ',
        kitaru.get_colored_name(),
        ' の舌先が舐め取り、茎を丸ごと口へ含む。透き通った涎が、肉棒の出入りに合わせて',
        kitaru.uma_sex_title,
        'の口角から落ち、ピンクの唇に釉薬を塗る。',
      ]);
      await era.printAndWait([
        '肉棒の形に膨らんだ頬と、ぐちゅぐちゅという粘る吸啜。ドア越しでも聞こえるかもしれない。',
      ]);
      await kitaru.say_and_wait('んっ！');
      await era.printAndWait([
        'パンツの生地はちゃんと役目を果たしているらしい。',
        kitaru.get_colored_name(),
        ' の下半身の服に目立った乱れはない。だが、だんだん力の抜けた両脚が、',
        kitaru.get_colored_name(),
        ' の下腹が',
        kitaru.sex,
        'へ出している催促を物語っている。',
      ]);
      await kitaru.say_and_wait('っ……！');
      await era.printAndWait([
        '餌をねだる金魚が餌を飲み込むように、深いキスのように亀頭を喉の柔らかい肉へ押し当てる。きれいな頬は冠状溝の侵入で左右へ膨らみ、喉は餌を飲むようなごくごくを立てる。',
      ]);
      await kitaru.say_and_wait('ぐぇ……！');
      await era.printAndWait([
        'きれいな鼻が ',
        you.get_colored_name(),
        ' の陰毛に埋まり、これからコースへ立つ ',
        kitaru.get_colored_name(),
        ' の肺を、',
        you.get_colored_name(),
        ' の匂いで満たす。',
      ]);
      await era.printAndWait('ぴゅっ！');
      await era.printAndWait([
        '窒息で涙が目尻から溢れるのに、',
        you.get_colored_name(),
        ' に淫紋を刻まれた ',
        kitaru.get_colored_name(),
        ' はそれでも ',
        you.get_colored_name(),
        ' の股間に食い下がり、生臭さを',
        kitaru.uma_sex_title,
        'の鋭い味蕾と鼻腔がさらに増幅する。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の小さな舌は、さらに膨らむ肉棒に潰されて扁平になり、喉の柔らかい肉まで亀頭のマッサージに加わる。',
      ]);
      await kitaru.say_and_wait('はっ……はっ……');
      await era.printAndWait([
        '熱く締まった口の穴を肉棒が進退し、激しい吸力とともに、',
        you.get_colored_name(),
        ' は射精の終点へ着いた。',
      ]);
      await kitaru.say_and_wait('ぐはっ！');
      await era.printAndWait([
        '口角から溢れた精液を、先を読む占い師さんが掌に受け、待ちきれずにまた口へ運ぶ。',
      ]);
      await kitaru.say_and_wait('ごくっ！');
      await era.printAndWait([
        'ときどき湧く残りも、喉の蠕動する嚥下音といっしょに腹へ落ちる。',
      ]);
      await era.printAndWait([
        'ちょうど、出走を知らせる声が響いた。',
        kitaru.sex,
        'はやっと ',
        you.get_colored_name(),
        ' の股間から立ち上がり、人差し指で口角の精液と数本の陰毛を払うと、舌先でそれらを口へ巻き込む。',
      ]);
      await era.printAndWait([
        'そのときになって、',
        kitaru.get_colored_name(),
        ' の瞳が少しだけ清明を取り戻す。',
      ]);
      await kitaru.say_and_wait('ふ……');
      await kitaru.say_and_wait('だいぶ、楽になりました……');
      await kitaru.say_and_wait([
        'もう！ ',
        callname,
        ' の淫紋の扱い、ぜんぜん未熟です！',
      ]);
      await era.printAndWait([
        '少し叱るような口調で、',
        kitaru.get_colored_name(),
        ' はゆっくり床から立ち上がる。白いニーソックスの上端には、パンツが止めきれなかった汁が少し染みている。',
      ]);
      await kitaru.say_and_wait([
        'でも、',
        callname,
        ' の精液を飲み込んだら、なんだか元気が出てきました！',
      ]);
      await kitaru.say_and_wait('もっと力を出せるかもしれません！');
      await era.printAndWait([
        '見た目を丁寧に整え、他人に異常を悟られないよう確かめてから、',
        kitaru.get_colored_name(),
        ' はレース前の控え室を出た。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = 'レース勝利';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('Happy come come！ 福来たる！');
      await kitaru.say_and_wait([
        'いやあ！ ',
        callname,
        ' のおかげです！ 白興様のおかげです！ 神様に見守られている私のおかげです！',
      ]);
      era.printButton('「そのとおりだ！」', 1);
      era.printButton('「浮かれるな！」', 2);
      if ((await era.input()) === 1) {
        if (era.get('love:56') < 75) {
          await kitaru.say_and_wait('わあっ！ じゃあ、どう祝いましょう？');
          await kitaru.say_and_wait('アップルパイ、どうですか？');
          await era.printAndWait([
            'というわけで夜は、',
            kitaru.get_colored_name(),
            ' といっしょに、シナモンと粉砂糖をかけたアップルパイを食べた。',
          ]);
        } else {
          await kitaru.say_and_wait([
            'あの、',
            callname,
            '、もう少し近づいてもいいですか？',
          ]);
          await kitaru.say_and_wait('えいっ！');
          await era.printAndWait([
            'オレンジの団子が自分から ',
            you.get_colored_name(),
            ' の胸へ飛び込み、それから',
            kitaru.sex,
            'は遠慮なく ',
            you.get_colored_name(),
            ' の服に',
            kitaru.sex,
            'の匂いを残した。',
          ]);
          await kitaru.say_and_wait('えへへ、運命の人の匂いです！');
        }
      } else {
        await kitaru.say_and_wait('んっ！ そうですよね！');
        await kitaru.say_and_wait([
          'じゃあ、',
          callname,
          '、これを受け取ってください！',
        ]);
        await era.printAndWait(
          '背負っている招き猫のリュックから、お守りを一つ取り出した。',
        );
        await kitaru.say_and_wait(
          'これは！ 勝者の好運を凝らしたお守りですよ！',
        );
        await kitaru.say_and_wait([
          'このあと ',
          callname,
          ' は、もっとたくさんもらえますから！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '入着';
    /** @param {CharaTalk} kitaru マチカネフクキタル */
    const f = async (kitaru) => {
      await kitaru.say_and_wait('うぅ……勝てると思ってました。');
      await kitaru.say_and_wait('次は！ 次は絶対だいじょうぶです！');
      await era.printAndWait([
        'レースに敗れた ',
        kitaru.get_colored_name(),
        ' は、少し落ち込むとすぐ、',
        kitaru.sex,
        'の楽天家に戻った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '敗北';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kitaru, you) => {
      await kitaru.say_and_wait('ま……負けた、ですか？');
      await era.printAndWait([
        '控え室まで歩く余裕もなく、',
        kitaru.get_colored_name(),
        ' はもう ',
        you.get_colored_name(),
        ' の胸のなかで大声で泣き始めていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の胸に貼りついた両耳、',
        you.get_colored_name(),
        ' の左脚に絡んだ尻尾。',
        kitaru.sex,
        'は自分ごと ',
        you.get_colored_name(),
        ' の胸へ溶け込むように、きつく ',
        you.get_colored_name(),
        ' を抱きしめる。',
      ]);
      await era.printAndWait(
        'なぜか、こんなにみっともない光景なのに、勝者まで羨む目を向けていた。',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_sex: (() => {
    const title = '準備完了';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        'きれいに一着を取った ',
        kitaru.get_colored_name(),
        ' は、観客の視線から外れた瞬間、ほっとしたように ',
        you.get_colored_name(),
        ' の胸へ崩れ込んだ。',
      ]);
      await kitaru.say_and_wait('お……終わりました……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の匂いを嗅いでから、張り詰めていた体をやっと緩めた。',
      ]);
      await kitaru.say_and_wait([callname, '……', callname, '……']);
      await you.say_and_wait('熱い！');
      await era.printAndWait([
        '運動の熱、発情の熱、運命の人の匂いを嗅いだ興奮の熱。そのきつい抱擁が、全部 ',
        you.get_colored_name(),
        ' へ分け与えられる。',
      ]);
      await era.printAndWait([
        '白いストッキングの狐さんが、',
        you.get_colored_name(),
        ' の胸に甘えるように擦り寄る。',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        'A「あの二人、何してるの？」',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        'B「勝者のお祝い、じゃない？」',
      ]);
      await era.printAndWait([
        '薄暗い地下通路で、',
        you.get_colored_name(),
        ' は ',
        kitaru.get_colored_name(),
        ' の下腹の服から、ほのかなピンクの微光が透けているのを見た。',
      ]);
      await era.printAndWait([
        '一秒も留まっていられない。',
        you.get_colored_name(),
        ' は ',
        kitaru.get_colored_name(),
        ' を抱えて選手控え室へ向かった。',
      ]);
      await kitaru.say_and_wait(['……もう、我慢できません！']);
      await era.printAndWait([
        '情欲に頭をやられ、もう言葉を組み立てられない。',
      ]);
      await era.printAndWait([
        '腹のなかの精液、口に残る ',
        you.get_colored_name(),
        ' の精液の味がまだ消えないレースの途中から、濡れ、ぞわぞわした痒さ、かすかな鈍痛がずっと ',
        kitaru.get_colored_name(),
        ' を苛んでいた。',
      ]);
      await era.printAndWait(['ばん！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は後ろ手にドアを閉め、',
        kitaru.get_colored_name(),
        ' を壁に押しつける。',
      ]);
      await era.printAndWait([
        '汗で湿った服は脱ぎにくい。立ち上る湿った白い湯気に乗った ',
        kitaru.get_colored_name(),
        ' のいい匂いが、どんどん ',
        you.get_colored_name(),
        ' の鼻へ入ってくる。',
      ]);
      await kitaru.say_and_wait('ん……');
      await era.printAndWait([
        'オレンジの尻尾が、そっと ',
        you.get_colored_name(),
        ' の腰に巻きつく。',
      ]);
      await kitaru.say_and_wait('早く……運命の人……');
    };
    f.title = title;
    return f;
  })(),
  ws_beginning: (() => {
    const title = (kitaru) => ['運命を覗く', kitaru.teen_sex_title];
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([callname, '！ 終わりましたよ！']);
      await era.printAndWait([
        '少し離れたところで、ひとセットのトレーニングを終えた ',
        kitaru.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' に手を振っている。その熱すぎる声に、ほかの',
        kitaru.uma_sex_title,
        'がちらちら目を向けた。',
      ]);
      await era.printAndWait([
        'この数日の付き合いでは、開運グッズに頼りすぎる点を除けば、',
        kitaru.sex,
        'は明るくて外向的だ。要するに、元気系の前向きな言葉なら、だいたい',
        kitaru.sex,
        'に当てはまる。',
      ]);
      await era.printAndWait('だが……');
      await era.printAndWait([
        you.get_colored_name(),
        ' にはわかる。',
        kitaru.get_colored_name(),
        ' の、占い、運命、運への偏執は、あまりにもはっきりしている。',
      ]);
      await era.printAndWait(
        'いわゆる占いを、ほとんどの人は茶飲み話か笑い話程度にしか思っていない。',
      );
      await era.printAndWait([
        'だが ',
        kitaru.get_colored_name(),
        ' はそう思わない。平日のトレーニングから、休みの行き先まで、',
        kitaru.sex,
        'は、運を込めた占いのあと、',
        kitaru.sex,
        'にしか読めない答えで決めてしまう。',
      ]);
      await era.printAndWait([
        'だからこそ、ある占いで',
        kitaru.sex,
        'が',
        kitaru.sex,
        'の運命の人と認めた ',
        you.get_colored_name(),
        ' なのだろう。',
      ]);
      await era.printAndWait([
        kitaru.sex,
        'の ',
        you.get_colored_name(),
        ' への信頼は、まだ擦り合わせ中の担当コンビとはまるで違う。',
      ]);
      await era.printAndWait([
        'どうやら',
        kitaru.sex,
        'は、',
        you.get_colored_name(),
        ' こそ、口に出す白興様が遣わした使者だと決めつけている。',
      ]);
      await era.printAndWait('次に、大事なことを一つ決める必要がある。');
      era.printButton('「マチカネフクキタルさん、将来の目標だけど……」', 1);
      await era.input();
      await era.printAndWait([
        '目標。言い換えれば、',
        kitaru.uma_sex_title,
        'が走る理由、願い。',
      ]);
      await era.printAndWait(
        '具体的にはクラシック三冠、春秋連覇、あるいは凱旋門賞。',
      );
      await era.printAndWait(
        'もう少し広いなら、ただ勝つため、あるいは誰かの偶像の道を追うため。',
      );
      await era.printAndWait(
        'さらに抽象的なら、自分の存在や価値を証明するため。',
      );
      await kitaru.say_and_wait('目標、ですか……');
      era.printButton(
        `「将来どのレースを走るかとか、どんな${kitaru.uma_sex_title}になりたいか、とか。」`,
        1,
      );
      await era.input();
      await kitaru.say_and_wait('えっ！ 私、特別な目標はないですよ！');
      await kitaru.say_and_wait('いまの幸運が、ずっと続けばそれでいいんです！');
      await kitaru.say_and_wait('でも……');
      await kitaru.say_and_wait(
        'どうしても言うなら……菊花賞、いいかもしれませんね？',
      );
      await era.printAndWait([
        '目の前の ',
        kitaru.get_colored_name(),
        ' の口調は冗談に聞こえるが、表情は本気だ。',
      ]);
      era.printButton('「理由はあるのか？」', 1);
      await era.input();
      await kitaru.say_and_wait('ん……');
      await kitaru.say_and_wait([
        kitaru.get_colored_name(),
        ' という名の',
        kitaru.teen_sex_title,
        '！ 幸せを叶えるため！ 神になるため！ 運命の必経の道です！',
      ]);
      await era.printAndWait([
        '少し考えたあと、',
        kitaru.teen_sex_title,
        'はいつもの大げさすぎる言い回しで ',
        you.get_colored_name(),
        ' に答えた。だが',
        kitaru.sex,
        'の目は、とても誠実だった。',
      ]);
      await era.printAndWait('それにしても、3000メートルの菊花賞で勝つのか。');
      await era.printAndWait('いちばん強い馬が、菊花賞を獲る。');
      await era.printAndWait([
        'この目標は、',
        kitaru.sex,
        'には遠すぎるのではないか。',
      ]);
      await era.printAndWait(
        'まずは一歩ずつ、メイクデビューの勝利を目標にしよう！',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_fortune_week: (() => {
    const title = '吉凶占い';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {number} luck 占い結果。0＝小吉、1＝中吉、2＝大吉、3＝凶
     */
    const f = async (kitaru, luck) => {
      // 占いの道具
      const luck_ways = [
        'タロット',
        '振り子',
        '卦象',
        '星象',
        '数秘術',
        'サイコロ',
      ];
      const luck_result = ['小吉', '中吉', '大吉', '凶'];
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は ',
        { color: kitaru.color, content: get_random_entry(luck_ways) },
        ' で占ってみた。結果は ',
        {
          color: motivation_colors[luck === 3 ? 1 : luck + 2],
          content: luck_result[luck],
        },
        '！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_14: (() => {
    const title = '局に入る';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は、ほとんど',
        kitaru.sex,
        'を知らないまま、',
        kitaru.get_colored_name(),
        ' と契約を結んだ。',
      ]);
      await era.printAndWait([
        '幸い、時間が経つにつれ、',
        you.get_colored_name(),
        ' の',
        kitaru.sex,
        'への理解は、走る以外のところまで少しずつ広がってきた。',
      ]);
      await era.printAndWait([
        'たとえば、',
        you.get_colored_name(),
        ' と ',
        kitaru.get_colored_name(),
        ' が出会ったあの神社は、ちょうど',
        kitaru.couple_title,
        'の家が守っている。',
      ]);
      await kitaru.say_and_wait(['えっ！ ', callname, '、興味ありますか？']);
      await kitaru.say_and_wait('今日、ちょうど私もお仕事なんです！');
      await era.printAndWait([
        '今日はトレーニングの予定もない。',
        you.get_colored_name(),
        ' は思い切って ',
        kitaru.get_colored_name(),
        ' の誘いに乗り、',
        kitaru.sex,
        'と神社の用事を片付けることにした。',
      ]);
      await era.printAndWait([
        '休みの日でも、この神社は、初めて ',
        kitaru.get_colored_name(),
        ' と会ったときと同じくらい閑散としている。',
      ]);
      await era.printAndWait([
        'それでも ',
        kitaru.get_colored_name(),
        ' の熱はまったく落ちない。巫女装束に着替えた',
        kitaru.sex,
        'は、簡単な掃除から御幣を折るところまで、きちんと仕事をこなしていた。',
      ]);
      await era.printAndWait([
        'もう黄昏なのに、今日も参拝客は来ない。それでも ',
        you.get_colored_name(),
        ' の担当は、参拝客が必ず通る鳥居を、まだ期待の顔で見ている。',
      ]);
      await era.printAndWait('それに……今日一日、見かけた神職は、どうやら——');
      era.printButton('「マチカネフクキタル？」', 1);
      await era.input();
      await kitaru.say_and_wait(['えっ！ ', callname, '？']);
      era.printButton('「普段、ここはお前ひとりか？」', 1);
      await era.input();
      await kitaru.say_and_wait('はい！');
      await kitaru.say_and_wait(
        'もちろんお正月とか、特別な日は、人を雇って手伝ってもらいますよ！',
      );
      await kitaru.say_and_wait('たまに、お母さんも来ます……');
      await era.printAndWait([
        'そこまで言って、',
        kitaru.uma_sex_title,
        'の細長い両耳がしょんぼりと下がった。',
      ]);
      await kitaru.say_and_wait('だって、私の記憶のなかでは……');
      await kitaru.say_and_wait('ここ、あまり人が来ないんです。');
      await era.printAndWait([
        '少し困ったように ',
        you.get_colored_name(),
        ' へ肩をすくめる。どうやら',
        kitaru.sex,
        'は、このことで ',
        you.get_colored_name(),
        ' に同情されたくないらしい。',
      ]);
      await kitaru.say_and_wait([
        '大丈夫です！ ',
        callname,
        '、慰めなくていいですから！',
      ]);
      await kitaru.say_and_wait('んやっ！');
      await era.printAndWait([
        '急に何か思いついたらしい。',
        kitaru.get_colored_name(),
        ' は毛を逆立てた子猫のように跳ね上がり、喜びの顔に戻った。',
      ]);
      await kitaru.say_and_wait([
        'そうです！ だからこそ、あのときここまで来られた ',
        callname,
        ' はすごいんです！',
      ]);
      await era.printAndWait([
        kitaru.sex,
        'がまた運勢の話をいくつかした後、もう帰る時間になった。',
      ]);
      await kitaru.say_and_wait(
        'じゃあ！ 裏で着替えてきます！ あとでいっしょにトレセンへ戻りましょう！',
      );
      await era.printAndWait([
        'そう言いながら、',
        kitaru.get_colored_name(),
        ' は本殿横の小部屋へ向かった。',
      ]);
      era.drawLine({ content: '数分後' });
      await era.printAndWait('がん！');
      await era.printAndWait([
        you.get_colored_name(),
        ' は参拝を知らせる鐘を聞いた。客が来たということだ。',
      ]);
      await era.printAndWait([
        'だが ',
        kitaru.get_colored_name(),
        ' はまだ戻っていない。',
      ]);
      await era.printAndWait([
        'こうなっては、',
        you.get_colored_name(),
        ' が出て応対するしかない。',
      ]);
      await era.printAndWait(
        'あたりを見渡しても、まだ揺れている銅鐘以外に人影はない。',
      );
      await era.printAndWait('賽銭箱の投入口に、何かが挟まっている。');
      era.printButton('賽銭箱を調べる', 1);
      await era.input();
      await you.say_and_wait('おかしいな、なぜ……');
      await era.printAndWait(
        '賽銭箱の上に、なぜか黄ばんだ新聞の切れ端が置いてある。',
      );
      await era.printAndWait(
        '中身は、地元紙がこの神社の日常を撮った何枚かの写真らしい。',
      );
      await era.printAndWait([
        '人で溢れる参拝客、神職の笑顔、そしてその真ん中に囲まれている……',
        kitaru.get_colored_name(),
        ' が、二匹？',
      ]);
      era.printButton('違う、年齢が合わない', 1);
      await era.input();
      await era.printAndWait([
        'どうやら一対の',
        kitaru.siblings_sex_title,
        'だ。年長の',
        kitaru.elder_sibling_sex_title,
        'が、幼い',
        kitaru.younger_sibling_sex_title,
        'の手を握っている。',
      ]);
      await era.printAndWait([
        '年下のほうは、耳飾りから見て ',
        kitaru.get_colored_name(),
        ' で間違いない。だが',
        kitaru.sex,
        'の隣のあの人は……？',
      ]);
      era.printButton(`（${kitaru.elder_sibling_sex_title}か？）`, 1);
      await era.input();
      await era.printAndWait([
        'だがこれまで、',
        kitaru.get_colored_name(),
        ' から',
        kitaru.sex,
        'に',
        kitaru.elder_sibling_sex_title,
        'がいる話は聞いたことがない。',
      ]);
      await kitaru.say_and_wait([
        'えっ！ ',
        callname,
        '、そこで何してるんですか？',
      ]);
      await era.printAndWait([
        '制服に着替えた ',
        kitaru.get_colored_name(),
        ' が、',
        you.get_colored_name(),
        ' の後ろに現れた。',
      ]);
      era.printButton('フクキタルに見せる', 1);
      era.printButton('見せない', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          'だが、ちょうど ',
          you.get_colored_name(),
          ' が拾った新聞の切れ端を',
          kitaru.sex,
          'に見せようとしたとき。',
        ]);
      } else {
        await era.printAndWait([
          'だが、ちょうど ',
          you.get_colored_name(),
          ' が拾った新聞の切れ端を隠そうとしたとき。',
        ]);
      }
      await era.printAndWait(['突然の風が巻き、紙の裂ける音がした。']);
      await era.printAndWait([
        '切れ端は ',
        you.get_colored_name(),
        ' の手にごく小さな一片だけを残し、残りは風に巻き上げられ、',
        you.get_colored_name(),
        ' と ',
        kitaru.get_colored_name(),
        ' の前でさらに細かい欠片になり、遠くへ散っていった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = 'メイクデビューを迎えて';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' がメイクデビューに臨む日が、やっと来た。',
      ]);
      await era.printAndWait([
        '普段のトレーニングの数字を見る限り、',
        kitaru.get_colored_name(),
        ' という名の',
        kitaru.uma_sex_title,
        'は、逃げに対して焦りやすい点を除けば、ほかの能力は同期のなかでも中の上だ。',
      ]);
      await era.printAndWait([
        '身分証を見せたあと、',
        you.get_colored_name(),
        ' は ',
        kitaru.get_colored_name(),
        ' のレース前控え室へ入ることを許された。',
      ]);
      await kitaru.say_and_wait([callname, '！！！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' が部屋に入ったのを見ると、',
        kitaru.get_colored_name(),
        ' は興奮して ',
        you.get_colored_name(),
        ' へ駆け寄ってきた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' にとっては、予想外だった。',
      ]);
      if (era.get('flag:当前声望') >= 500) {
        await era.printAndWait([
          '印象では、このとき大半の',
          kitaru.uma_sex_title,
          'は緊張でどうにもならない。だが ',
          kitaru.get_colored_name(),
          ' は、興奮しきった顔をしている。',
        ]);
      } else {
        await era.printAndWait([
          '先輩たちによれば、このとき大半の',
          kitaru.uma_sex_title,
          'は緊張でどうにもならない。だが ',
          kitaru.get_colored_name(),
          ' は、興奮しきった顔をしている。',
        ]);
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' はフクキタルを上から下まで見た。',
        kitaru.sex,
        'は興奮しきっていて、かつて',
        kitaru.sex,
        'が言っていた、全身に霊力が満ちたときの様子そのものだ。',
      ]);
      era.printButton('「運勢はいいのか？」', 1);
      await era.input();
      if (era.get('status:56:凶') === 1) {
        await kitaru.say_and_wait(
          'まあまあ、ですか……でもメイクデビューは、たぶん大丈夫です！',
        );
      } else {
        await kitaru.say_and_wait(
          'はい！ いまは白興様が憑いてくださってますから！',
        );
      }
      await kitaru.say_and_wait(
        'それに、あの方が遣わした神使もそばにいます。あのときとは違います！',
      );
      era.printButton('「あのとき？」', 1);
      await era.input();
      await era.printAndWait(
        '自分がうっかり口を滑らせたとは、思っていなかったらしい。',
      );
      await era.printAndWait([
        '満面の笑みだった ',
        kitaru.get_colored_name(),
        ' が急に止まり、表情が少し複雑になる。',
      ]);
      await kitaru.say_and_wait([
        '私の',
        kitaru.elder_sibling_sex_title,
        'が……とにかく……',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は何度か深く息を吸い、それから話し続けた。',
      ]);
      await kitaru.say_and_wait(
        '生まれて初めておみくじを引きたかった日です！ 小銭がなくて、諦めたあの日！',
      );
      await kitaru.say_and_wait(
        'でもあのときとは違います！ いまは頼れる仲間がいますから！',
      );
      await era.printAndWait([
        '言い終えると、',
        you.get_colored_name(),
        ' の見知った、',
        kitaru.get_colored_name(),
        ' の笑顔が、また',
        kitaru.sex,
        'の顔に戻った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '参拝の始まり';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('よかった！ 走りきれましたよ！');
      await era.printAndWait([
        'いちばんにゴールを駆け抜けると、',
        kitaru.get_colored_name(),
        ' はコースの上で祝い、両手を空へ掲げるポーズをとった。',
      ]);
      await kitaru.say_and_wait([
        callname,
        '！ 霊験あらたか！ レース順調です！',
      ]);
      if (era.get('status:56:凶') === 1) {
        await kitaru.say_and_wait(
          '凶でも、白興様のご加護がある私は、ちゃんと勝ちましたよ！',
        );
      } else {
        await kitaru.say_and_wait(
          'やっぱり大吉です！ 白興様まで、私に憑いてくださいました！',
        );
      }
      await kitaru.say_and_wait('あっという間に終わりましたね！');
      await era.printAndWait([
        you.get_colored_name(),
        ' はさっきの ',
        kitaru.get_colored_name(),
        ' の走りを思い返す。',
        kitaru.sex,
        'の状態はよかった。',
      ]);
      await era.printAndWait([
        '普段教えてきたことは、',
        kitaru.sex,
        'がちゃんと使っていた。',
      ]);
      await era.printAndWait(
        '選抜レースのときのぎこちなさとは、まったく違う。',
      );
      await era.printAndWait(
        'この伸び方なら、菊花賞での勝利も、まったく不可能ではない。',
      );
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait(
        '状態、すごくいいです！ 将来の菊花賞も絶対だいじょうぶです！ 次のレースは何ですか？',
      );
      await kitaru.say_and_wait('占いで決めますか？');
      await kitaru.say_and_wait('うっ！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は今日も、',
        you.get_colored_name(),
        ' のアイアンクローを食らった。',
      ]);
      era.printButton('「青葉賞だ！」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ！ 青葉賞！');
      await kitaru.say_and_wait('それ、ずいぶん先じゃないですか？');
      await era.printAndWait('たしかにそうだ。');
      await era.printAndWait([
        'だが ',
        kitaru.get_colored_name(),
        ' の距離適性と、',
        kitaru.sex,
        'の目標がクラシック三冠の一つ、菊花賞であることを考えると。',
      ]);
      await era.printAndWait([
        'それに ',
        you.get_colored_name(),
        ' も、この調子の定まらない',
        kitaru.uma_sex_title,
        'をもっと知る時間が要る。',
      ]);
      await era.printAndWait('青葉賞は、悪くない選択だ。');
    };
    f.title = title;
    return f;
  })(),
  ws_28: (() => {
    const title = 'ショーウィンドウの既視感';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        'メイクデビューはこれで終わりだ。',
        you.get_colored_name(),
        ' と ',
        kitaru.get_colored_name(),
        ' の二人三脚は、ようやく本格的に歩き出した。',
      ]);
      await era.printAndWait([
        '勝利のご褒美として、',
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'と商店街へ新しい開運グッズを買いに行く約束をした。',
      ]);
      await era.printAndWait([
        '何回目かわからない呼びかけに応えて ',
        kitaru.get_colored_name(),
        ' のもとへ走る。リュックのなかの高価な水晶球だけでも、息が上がる。',
      ]);
      await era.printAndWait([
        '大きな荷物を抱えた ',
        you.get_colored_name(),
        ' が壁に手をつき、汗だくになったとき、',
        kitaru.get_colored_name(),
        ' の次の声が、なかなか来ないのに気づいた。',
      ]);
      era.printButton('顔を上げる', 1);
      await era.input();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は入定したようにスポーツ用品店のショーウィンドウの前に立っている。たまに揺れる尻尾だけが、',
        kitaru.sex,
        'が彫像ではない証拠だ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'の視線を追った。',
      ]);
      await era.printAndWait(
        'スポーツ用品店のショーウィンドウだ。中のテレビが映像を流している。',
      );
      await era.printAndWait([
        'トレーナーである ',
        you.get_colored_name(),
        ' はすぐわかった。映っているのは、史上有名な逃げの',
        kitaru.uma_sex_title,
        'の逃げ切り映像だ。',
      ]);
      era.printButton('「マチカネフクキタル？」', 1);
      await era.input();
      await kitaru.say_and_wait('……');
      era.printButton('「マチカネフクキタル！ 大丈夫か？」', 1);
      await era.input();
      await kitaru.say_and_wait(['あっ！ だいじょうぶです、', callname, '！']);
      await kitaru.say_and_wait('えへっ！ ちょっと見入っちゃいました！');
      await kitaru.say_and_wait('次の霊場へ行きましょう！');
      await era.printAndWait([
        '違う。',
        you.get_colored_name(),
        ' にはわかる。',
        kitaru.get_colored_name(),
        ' の話題そらしは、今回あまりにもわざとらしい。それに……',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の主な脚質が差しであることは一旦置くとしても、あの表情は、ほかの',
        kitaru.uma_sex_title,
        'が見せるような、人の走りに共感した嬉しさや興奮ではなかった。むしろ……',
      ]);
      // await era.printAndWait('笑顔を保とうとして、湧いてくる悲しみに打たれて呆然とする、あの顔。');
      await era.printAndWait(
        '呆然？ いや、むしろ、見本のように整いすぎた笑顔だ。',
      );
      era.printButton('「いま、何があった？」', 1);
      era.printButton('「どうした？」', 2);
      await era.input();
      await kitaru.say_and_wait('……あの');
      await kitaru.say_and_wait('ちょっと、既視感があっただけです！');
      era.printButton('「既視感？」', 1);
      await era.input();
      await kitaru.say_and_wait('つまり……つまり……');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.get_colored_name(),
        ' の目が少し彷徨い、何度か頭を振るのを見た。',
      ]);
      await kitaru.say_and_wait([
        '私の',
        kitaru.elder_sibling_sex_title,
        'を思い出しました！ 昔、',
        kitaru.sex,
        'といっしょに並走してたとき、',
        kitaru.sex,
        'はいつもテレビの逃げみたいに、私をすごくすごく遠くへ置いていったんです！',
      ]);
      era.printButton(
        `「聞くかぎり、お前の${kitaru.elder_sibling_sex_title}は優秀な${kitaru.uma_sex_title}だったんだな？」`,
        1,
      );
      await era.input();
      await kitaru.say_and_wait('はい……ただ……');
      await era.printAndWait([
        '喉から無理に絞り出したような返事。',
        kitaru.get_colored_name(),
        ' の後ろへ倒れた耳は、頭のなかへ刺さりそうだ。',
      ]); // 緊張
      await kitaru.say_and_wait('亡くなりました……');
      await kitaru.say_and_wait('そう……亡くなりました……');
      era.printButton('「すまない」', 1);
      await era.input();
      await kitaru.say_and_wait(
        'ええっ！ 謝るべきなのは私です、また変な話をしちゃって。',
      );
      await kitaru.say_and_wait([
        callname,
        ' といっしょだと、つい浮かれてしまいます！',
      ]);
      await kitaru.say_and_wait('ん……');
      await era.printAndWait([
        'そのあと ',
        kitaru.get_colored_name(),
        ' は適当な口実でこの祝いを切り上げ、',
        you.get_colored_name(),
        ' はひとりで、買い込んだ開運グッズの山を抱えて自室の事務所へ戻った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_35: (() => {
    const title = '旋風一掃';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} tannhauser マチカネタンホイザ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} callname_62 マチカネタンホイザのプレイヤーへの呼び方
     */
    const f = async (kitaru, tannhauser, you, callname, callname_62) => {
      await era.printAndWait([
        'いつものように、',
        you.get_colored_name(),
        ' は事務所へ向かう途中だった。',
      ]);
      await era.printAndWait('「ばん！！！」');
      await era.printAndWait([
        kitaru.uma_sex_title,
        '寮の前を通りかかったとき、大きな音がした。',
      ]);
      era.printButton('音の方角を確かめる', 1);
      era.printButton('無視する', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' の耳は',
          kitaru.uma_sex_title,
          'には及ばないが、静かな朝にこの唐突な音の出所を探すのは、',
          you.get_colored_name(),
          ' にも難しくない。',
        ]);
        await tannhauser.say_as_unknown_and_wait('うぅ……');
        await era.printAndWait(['誰かの', kitaru.uma_sex_title, 'の嘆き。']);
        await kitaru.say_as_unknown_and_wait('あああっ！ 本当にすみません！');
        await era.printAndWait([
          'そして、間違いなく ',
          kitaru.get_colored_name(),
          ' の声。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が',
          kitaru.sex,
          'に電話するか迷っていると、寮の入口から見慣れた姿が飛び出した。',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' にはだいたいわかった。世話の焼ける担当が、また何かやらかしたに違いない。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は足を速め、生徒会に見つかる前に逃げようとした。',
        ]);
        await era.printAndWait([
          'そのうち、',
          you.get_colored_name(),
          ' は後ろから服を掴まれた。',
        ]);
      }
      await kitaru.say_and_wait('あははっ！');
      await kitaru.say_and_wait('よかった！');
      await kitaru.say_and_wait([callname, ' です！']);
      await you.say_and_wait('はあ……');
      era.printButton('「手伝いか？」', 1);
      era.printButton('「またやらかしたな？」', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('おお！ 今日は大吉ですね！');
        await kitaru.say_and_wait([
          '人助けの好きな ',
          callname,
          ' が、災難のあとに突然現れました！',
        ]);
      } else {
        await kitaru.say_and_wait(
          'うえっ！ さすが私の運命の人です！ 一発で当たりました！',
        );
        await kitaru.say_and_wait([
          'でも ',
          callname,
          ' は手伝ってくれますよね！ 一蓮托生なんですから！',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' には勝てず、',
          you.get_colored_name(),
          ' は結局うなずいた。',
        ]);
      }
      await kitaru.say_and_wait('あの……とにかく、こっちへ来てください！');
      await era.printAndWait([
        '警備の怪訝な視線のなか、',
        kitaru.sex,
        'は問答無用で ',
        you.get_colored_name(),
        ' を寮へ引きずり込んだ！',
      ]);
      await era.printAndWait([
        'ドアを開けると、',
        you.get_colored_name(),
        ' の目に飛び込んできたのは、雑貨が積み上がった山だった。',
      ]);
      await tannhauser.say_and_wait('たす……');
      if (era.get('cflag:62:招募状态') === 1) {
        await tannhauser.say_and_wait([callname_62, '……助けて！']);
        await era.printAndWait([
          you.get_colored_name(),
          ' のもう一人の担当が、その下に埋まっていた。',
        ]);
      } else {
        await era.printAndWait([
          kitaru.sex,
          'のルームメイトが、下敷きになっている。',
        ]);
      }
      era.printButton('「このゴミ山は？」', 1);
      await era.input();
      await kitaru.say_and_wait('ゴミ山じゃありません！');
      await kitaru.say_and_wait('これは！ ずっと集めてきた開運グッズですよ！');
      await kitaru.say_and_wait(
        'この勢いで増え続けたら、いつかトレセン学園が飲み込まれてもおかしくないです！',
      );
      await kitaru.say_and_wait('あっ、今のは占いじゃなくて、私の予想です。');
      await kitaru.say_and_wait([
        'はいはい！ ',
        callname,
        '、どこに置くか考えてください！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が名前を知っているものも、知らないものも、小さな雑貨がこの山に混ざり、明らかに最近買ったお土産まで入っている。',
      ]);
      await era.printAndWait(
        'いま倒れただけでも、大吉のなかの大吉だったと言える。',
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' という名の',
        kitaru.uma_sex_title,
        'は、思いのほかひどい溜め込み癖がある。',
      ]);
      await era.printAndWait('やはり、答えは一つだ。');
      era.printButton('「捨てよう……」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ？');
      await kitaru.say_and_wait('えっ！！！！！！');
      era.drawLine({ content: 'トレセン学園 寮裏の焼却炉' });
      await era.printAndWait([
        '山のように積まれた開運グッズを前に、',
        you.get_colored_name(),
        ' はどれから手をつけるか決める。',
      ]);
      let a = true;
      let b = true;
      let c = true;
      do {
        era.printMultiColumns(
          [
            { c: '平凡な瓶の蓋', e: a },
            { c: 'ひどく傷んだ人形', e: b },
            { c: '【大願成就】と書いた御守', e: c },
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { disabled: !e.e },
            content: e.c,
            type: 'button',
          })),
        );
        switch (await era.input()) {
          case 1:
            a = false;
            await kitaru.say_and_wait(
              'これ、これは初めて一気に開けられた瓶の蓋です！',
            );
            await kitaru.say_and_wait('お願いです！ 絶対だめです！');
            break;
          case 2:
            b = false;
            await kitaru.say_and_wait(
              'うっ！ それは三輪車に轢かれそうになったとき、代わりに受難してくれた人形です！',
            );
            await kitaru.say_and_wait('捨てたら、大凶です！');
            break;
          case 3:
            c = false;
            await kitaru.say_and_wait(
              'あっ！ それは小学生のとき！ 球技で学園の八強まで連れていってくれた御守です！',
            );
            await kitaru.say_and_wait('これからは、絶対だめです！');
        }
      } while (a || b || c);
      await kitaru.say_and_wait('うぅ！ やっぱりどれもだめです！');
      await kitaru.say_and_wait([
        'お願いします！ ',
        callname,
        '、捨てないでください！ なんでもしますから！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、両手を必死に擦る ',
        kitaru.get_colored_name(),
        ' を焼却炉の前から引き離さざるを得なかった。',
      ]);
      await era.printAndWait(
        'この山の処遇は、ちゃんと考える必要がありそうだ。',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_38: (() => {
    const title = '収容！ 開運グッズ';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([callname, '、本当によかったです！']);
      await era.printAndWait([
        'いろいろ考えた末、',
        you.get_colored_name(),
        ' は、あるいは使える解決策を思いついた——',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の荷物を、しばらく ',
        you.get_colored_name(),
        ' の家に置く、という案だ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.get_colored_name(),
        ' が一つずつ、',
        kitaru.sex,
        'の形もまちまちな開運グッズで ',
        you.get_colored_name(),
        ' の家のあちこちを埋めていくのを見ていた。',
      ]);
      await era.printAndWait([
        'その異常なほど浮かれた様子は、',
        kitaru.uma_sex_title,
        'というより、縄張りに匂いをつけている小動物に近い。',
      ]);
      await kitaru.say_and_wait('えへへ！ ちょっとすみません！');
      await kitaru.say_and_wait(
        '開運グッズを集めるのは、私が……ずっと続けてきた習慣なんです！！！',
      );
      await kitaru.say_and_wait('神になるまで！ ずっと続けますから！');
      await era.printAndWait([
        kitaru.sex,
        'は少し言葉を選び、それからわざとらしく、',
        kitaru.sex,
        'が言いたかった時点を飛ばした。',
      ]);
      await era.printAndWait('……メイクデビューのときと同じだ。');
      await kitaru.say_and_wait([
        'あの、これからもしょっちゅう、',
        callname,
        ' の家に遊びに来てもいいですか？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の家の居間で飛び跳ねている ',
        kitaru.get_colored_name(),
        ' を見て、仕方なくうなずいた。',
      ]);
      await kitaru.say_and_wait('えー、そんな顔しないでくださいよ？');
      await kitaru.say_and_wait([
        'さあ！ じゃあ ',
        callname,
        '、フクに頼みたいことはありますか！ 全力でやりますから！',
      ]);
      await era.printAndWait([
        '自分の行いが ',
        you.get_colored_name(),
        ' にかなり迷惑をかけたとわかっているらしい。オレンジ髪の',
        kitaru.teen_sex_title,
        'は、',
        kitaru.sex,
        'の十八番のポーズをとった。白い両腕を天井へピンと伸ばし、',
        you.get_colored_name(),
        ' の返事を待っている。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' に頼めること、あるだろうか。',
      ]);
      await era.printAndWait([
        'うん……',
        kitaru.sex,
        'が迷惑をかけないこと自体が、いちばんの助けだ。',
      ]);
      await era.printAndWait([
        'だが、これは',
        kitaru.sex,
        'をもっと知る機会かもしれない。',
      ]);
      await era.printAndWait([
        'たとえば、',
        kitaru.sex,
        'がよく口にする白興様は、',
        kitaru.get_colored_name(),
        ' にとって、ただの信仰ではなさそうだ。',
      ]);
      await kitaru.say_and_wait(
        'えっ！ 白興様のことを、もっと知りたいんですか！',
      );
      await kitaru.say_and_wait('ん……');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.sex,
        'が何かを思い出したように眉を寄せ、息が少し早くなるのを見た。',
      ]);
      era.printButton('「どうしても嫌なら……」', 1);
      await era.input();
      await kitaru.say_and_wait('いえいえいえいえ！');
      await kitaru.say_and_wait(
        'ただ、今日はまだ大吉じゃないんです！ 準備が要ります！',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_42: (() => {
    const title = 'いわゆる白興様';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait('白興様。');
      await era.printAndWait([
        'この神様は、ほとんど一日中、',
        kitaru.get_colored_name(),
        ' の口に乗っている。',
      ]);
      await era.printAndWait([
        'トレーニングの良し悪し、天気の変わり、地球の自転まで、',
        kitaru.get_colored_name(),
        ' は何らかの形で、',
        kitaru.sex,
        'の言う白興様と結びつけてしまう。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は何度も尋ねたが、返ってくるのは',
        kitaru.sex,
        'のはっきりしない説明ばかりだった。',
      ]);
      await era.printAndWait('ある日のこと——');
      await you.say_and_wait('つまり、俺も開運グッズか？！');
      await kitaru.say_and_wait(
        'えっ！ でも、お世話になっている人は幸運を呼ぶって言いますから！',
      );
      await era.printAndWait([
        kitaru.sex,
        'のほとんど懇願する態度に、',
        you.get_colored_name(),
        ' は仕方なく、',
        kitaru.sex,
        'と開運に出かける約束をした。',
      ]);
      await kitaru.say_and_wait([
        'まずは駄菓子屋です！ ここで ',
        callname,
        ' の運勢を占いましょう！',
      ]);
      await kitaru.say_and_wait('大吉！');
      await kitaru.say_and_wait('いい始まりです！');
      await kitaru.say_and_wait('次はあの雑貨屋です！');
      await kitaru.say_and_wait('この達磨、すごくいい感じです！');
      await kitaru.say_and_wait('おお！ もう目が入ってるんですね？');
      await era.printAndWait('ほぼ一日動き回り、商店街の隅々まで見て回った。');
      await kitaru.say_and_wait(
        'えへっ、やっぱり締めは神社ですよね！ 手を合わせて祈って、今日一日の無事に感謝します！',
      );
      await kitaru.say_and_wait('……');
      await kitaru.say_and_wait('ん、やることは全部やりました！');
      await kitaru.say_and_wait([callname, '！ 準備できました！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.sex,
        'が急にうつむき、それから覚悟を決めたように ',
        you.get_colored_name(),
        ' を見るのを見た。',
      ]);
      await kitaru.say_and_wait([
        callname,
        '、ずっと白興様のことが気になってましたよね……？',
      ]);
      await kitaru.say_and_wait([
        '実は、あれは',
        kitaru.elder_sibling_sex_title,
        'が教えてくれた神様なんです！',
      ]);
      await era.printAndWait(
        '両手で頭を抱え、もともとボサボサのオレンジ髪をさらに乱す。自分に思い出させているみたいだ。',
      );
      await kitaru.say_and_wait([
        '小さいころ、何でもできる',
        kitaru.elder_sibling_sex_title,
        'とよく比べられてました。',
      ]);
      await kitaru.say_and_wait(
        'あのころの私は遅かったし、ゲートから出るのも怖かったです。',
      );
      await kitaru.say_and_wait([
        'でも',
        kitaru.elder_sibling_sex_title,
        'は違いました。',
        kitaru.sex,
        'はすごく優秀な逃げでした！ トレセンから招待まで来てたんですよ！',
      ]);
      await kitaru.say_and_wait([
        '私を慰めるために、',
        kitaru.elder_sibling_sex_title,
        'は毎回大吉の占いをしてくれました。開運グッズも、いろいろ！',
      ]);
      await kitaru.say_and_wait([
        '白興様のご加護も！ ',
        kitaru.elder_sibling_sex_title,
        'は言いました。白興様のご加護があれば、幸運になれるって！',
      ]);
      await kitaru.say_and_wait('だから、私はずっと白興様を信じてきました！');
      await kitaru.say_and_wait('それが……');
      await kitaru.say_and_wait(['そのあと', kitaru.sex, 'は亡くなりました。']);
      await kitaru.say_and_wait('それで……');
      await kitaru.say_and_wait([
        kitaru.sex,
        'はいつも、白興様が私を守ってくれるようにって言ってたのに……もしかして、白興様は',
        kitaru.sex,
        'を守らなかったのかもしれません。',
      ]);
      await kitaru.say_and_wait('ときどき思います。もしかして……もし私が……');
      await era.printAndWait([
        'まず目尻に光が浮かび、それから一滴、二滴。涙が途切れ途切れに、',
        kitaru.get_colored_name(),
        ' の足元の石畳を叩く。',
      ]);
      await kitaru.say_and_wait([
        'すみません……勝手にこんなに話して、',
        callname,
        ' は、きっと私を煩わしいと思ってますよね……',
      ]);
      era.printButton('ティッシュを渡す', 1);
      await era.input();
      await kitaru.say_and_wait('ん……');
      await kitaru.say_and_wait('ありがとう……');
      await era.printAndWait([
        '涙を拭いたあと、',
        kitaru.get_colored_name(),
        ' は何度も強く頭を振り、いつもの笑顔をまた出そうとする。',
      ]);
      await kitaru.say_and_wait('泣いちゃだめ……泣いちゃだめ……');
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        'は、私の笑顔がいちばん好きでした……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.get_colored_name(),
        ' が絶えず独り言を言い、それからほとんど自責と罪悪のように、自分の耳と尻尾を引っ張るのを聞いた。',
      ]);
      await era.printAndWait([
        kitaru.teen_sex_title,
        'はほとんど狂ったように、自分が泣いている現実から逃げようとしている。',
      ]);
      await kitaru.say_and_wait('んっ！');
      era.printButton('手を伸ばす', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'を胸に抱き、落ち着かせようとした。止まらない涙で、',
        you.get_colored_name(),
        ' の胸元まで大きく濡れた。',
      ]);
      era.println();
      await era.printAndWait([
        '人のいない神社で、',
        you.get_colored_name(),
        ' は黙って ',
        kitaru.get_colored_name(),
        ' の髪を撫で続けた。',
        kitaru.sex,
        'の震えが、少しずつ収まるまで。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '選ばれし者';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait('また初詣の季節になった。');
      if (era.get('flag:当前声望') >= 500) {
        await era.printAndWait([
          '慣例どおり、トレセン学園のトレーナーは担当の',
          kitaru.uma_sex_title,
          'とこの儀式をいっしょに行うことが多い。',
        ]);
      } else {
        await era.printAndWait([
          'トレセン内部の手引きには、はっきりこう書いてある。できるだけ担当の',
          kitaru.uma_sex_title,
          'といっしょに行うこと。',
        ]);
      }
      await era.printAndWait([
        'あらかじめ ',
        kitaru.get_colored_name(),
        ' と予定を決めたのに、',
        kitaru.sex,
        'はいつものように学園の正門で ',
        you.get_colored_name(),
        ' と落ち合うことはしなかった。',
      ]);
      await era.printAndWait([
        kitaru.sex,
        'が前に言っていたとおり、もともと閑散としていた神社に、いまは少し人気が戻っている。参拝客が二、三人ずつ集まり、談笑が絶えず聞こえる。',
      ]);
      await era.printAndWait(
        'この神社の巫女が、人々のために祈る舞が始まった。',
      );
      await era.printAndWait('「どん！」');
      await era.printAndWait([
        you.get_colored_name(),
        'は鼓の音を聞き、それから三味線が加わった。',
      ]);
      await era.printAndWait([
        '演目は始まったのに、',
        kitaru.get_colored_name(),
        ' の姿はまだない。',
      ]);
      await era.printAndWait('「じゃらっ！」');
      await era.printAndWait(
        'それから神楽鈴が鳴り、この神社の巫女の登場を告げる。',
      );
      await era.printAndWait([
        '舞台の',
        kitaru.uma_sex_title,
        'が、律動のある音楽に合わせて舞っている。',
      ]);
      await era.printAndWait(
        'こんなに寒い天気でも、周囲の歓声は少しも衰えない。',
      );
      await era.printAndWait([
        '一年分の疲れと労わりが、舞台のオレンジ髪に金の瞳の',
        kitaru.uma_sex_title,
        'の、静かに美しい請神の舞とともに、音もなく剥がれ落ちていく。',
      ]);
      await era.printAndWait([
        'そうだ。いわゆる',
        kitaru.uma_sex_title,
        'は、生きた現人神のような存在ではないか。',
      ]);
      await era.printAndWait([
        'ただし、',
        you.get_colored_name(),
        ' は、いま舞っている現人神の正体を知っている。',
      ]);
      await era.printAndWait([
        '遅れて姿を見せなかった ',
        kitaru.get_colored_name(),
        ' その人だ。',
        kitaru.sex,
        'の手の神楽鈴が揺れるたび、澄んだ鈴の音が周囲と祈る者の心を清める。',
      ]);
      await era.printAndWait([
        '普段はずっと抜けている',
        kitaru.sex,
        'が、こんなに厳かな顔をするとは、',
        you.get_colored_name(),
        ' にはかなり意外だった。',
      ]);
      era.drawLine({ content: 'マチカネフクキタル家の神社 神楽のあと' });
      await era.printAndWait([
        'もうほとんど明け方だ。家の神社のために奔走していた ',
        kitaru.get_colored_name(),
        ' が、やっと少し休めた。',
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        'あいつはほとんど止まらず ',
        you.get_colored_name(),
        ' の前まで走り、巫女装束の振袖を左右に揺らした。',
      ]);
      await kitaru.say_and_wait([
        '本当に本当にすみません！ せっかく神社に人がいる日だったので！ 先に ',
        callname,
        ' に言っておくべきでした！',
      ]);
      await kitaru.say_and_wait(
        '父はここの宮司ですから、私もちゃんと頑張らないと！',
      );
      await kitaru.say_and_wait('でも、お礼として……');
      await kitaru.say_and_wait('いまから、巫女の特別対応タイムですよ！');
      era.printButton('「フクがそう言うと、ほかの参拝客が嫉妬しないか？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        'ええっ！ ',
        callname,
        ' は白興様に選ばれた人なんですよ！',
      ]);
      await era.printAndWait(
        '二人の静かで単調な足音が神社に響き、最後は賽銭箱の前まで来た。',
      );
      await kitaru.say_and_wait(['さあ！ ', callname, ' の願いは何ですか！']);
      await kitaru.say_and_wait(
        'いまの私は霊力の頂点です！ どんな願いでも叶います！',
      );
      await kitaru.say_and_wait('白興様の声まで聞こえますよ！');
      await era.printAndWait([
        '蘭のように白い巫女装束の ',
        kitaru.get_colored_name(),
        ' が、',
        you.get_colored_name(),
        ' の手を握った。',
      ]);
      era.printButton('「なら当然、フクが次の青葉賞で勝つことだ」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ……');
      await kitaru.say_and_wait([callname, ' の願い、それですか？']);
      await kitaru.say_and_wait('わかりました！ 頑張ります！');
      await kitaru.say_and_wait([
        'じゃあ！ ',
        callname,
        '、さよなら！ よければ！ 明日も来てくださいね！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' を見送ったあと、',
        kitaru.get_colored_name(),
        ' は神社にある',
        kitaru.sex,
        'の住まいへ戻った。',
      ]);
      await era.printAndWait([
        'だが、',
        you.get_colored_name(),
        ' が神社の朱色の鳥居を出たとき、胸の奥に、わけのわからない声が響いた。',
      ]);
      await era.printAndWait('それから、周囲の世界はほとんど純白に吞まれた。');
      era.drawLine({ content: '？？？' });
      await typing(
        '選ばれし者／選ばれた者よ、お前／我らの願い／御意は何か？',
        kitaru.color,
      );
      era.println();
      era.printButton('高揚する空気（全ステータス+7）', 1);
      era.printButton('戦慄の気配（スピード+30）', 2);
      era.printButton('かすかな隙（スキルPt+40）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await kitaru.print_and_wait('五感が鋭くなる……');
          break;
        case 2:
          await kitaru.print_and_wait('つま先を軽くつくと、軽くて気持ちいい……');
          break;
        case 3:
          await kitaru.print_and_wait(
            '紐がほどける——窓が開く——鍵が油を差したように回る……',
          );
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が我に返ったときは、もうトレセンへ戻る終電に乗っていた。',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_5: (() => {
    const title = '儀式の理論';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        '青葉賞が近づくにつれ、トレーニングの強度も少しずつ落ちてきた。',
      );
      await era.printAndWait([
        '手すりに寄りかかり、トレーニング場で汗を流す',
        kitaru.uma_sex_title,
        'たちを眺めながら、',
        you.get_colored_name(),
        ' は考え込んでいた。',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        'がコースへ立つ理由は、いろいろある。',
      ]);
      await era.printAndWait(['では ', kitaru.get_colored_name(), ' は……']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.sex,
        'の言葉を覚えている。',
      ]);
      await kitaru.say_and_wait(
        [
          'マチカネフクキタルという名の',
          kitaru.teen_sex_title,
          '！ 幸せを叶えるため！ 神になるため！ 運命の必経の道です！',
        ],
        true,
      );
      await era.printAndWait(
        '菊花賞への、あのわけのわからない執着は、いったい何なのか。',
      );
      await era.printAndWait([
        '疑問を抱えた ',
        you.get_colored_name(),
        ' は、あいつの汗を拭いてから、もう一度 ',
        kitaru.get_colored_name(),
        ' にその問いを投げた。',
      ]);
      await kitaru.say_and_wait('えっ……私もあまり覚えてないです。');
      await kitaru.say_and_wait('たぶん、誰かとの約束だと思います。');
      await era.printAndWait([
        '神社で泣き崩れて以来、',
        you.get_colored_name(),
        ' はもう ',
        kitaru.get_colored_name(),
        ' と',
        kitaru.elder_sibling_sex_title,
        'の話はしていない。家庭の話題も、できるだけ避けてきた。',
      ]);
      await era.printAndWait([
        'だが',
        kitaru.uma_sex_title,
        'にとって、なぜ走るのかは肝心なことだ。',
        kitaru.get_colored_name(),
        ' の交友を考えると、',
        kitaru.sex,
        'と約束を交わせる相手は……？',
      ]);
      era.printButton(`「${kitaru.elder_sibling_sex_title}と、か？」`, 1);
      era.printButton('「白興様と、か？」', 2);
      await era.input();
      await kitaru.say_and_wait('かもしれません……ん。');
      await kitaru.say_and_wait(
        'わざと思い出さないかぎり、子どものころの記憶は、霧がかかったみたいなんです。',
      );
      await kitaru.say_and_wait([
        'そういえば、',
        callname,
        '、似た話を聞いたことありますか？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は汗を吸った熱いタオルを脇へ置き、起き上がろうとする ',
        kitaru.get_colored_name(),
        ' を押さえた。',
      ]);
      era.printButton('「何の話だ？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        kitaru.uma_sex_title,
        'が生贄になって神になる、とか？',
      ]);
      await era.printAndWait([
        kitaru.elder_sibling_sex_title,
        'の話で少し曇っていた顔が、急に明るくなる。',
      ]);
      await era.printAndWait([
        '話題の急な転回に、',
        you.get_colored_name(),
        ' はまったくついていけない。',
      ]);
      era.printButton('「生贄？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        '神様に贈り物を捧げる儀式ですよ！ ',
        kitaru.uma_sex_title,
        'にとっては、走ったあとの勝利にほかなりません！',
      ]);
      await kitaru.say_and_wait(
        '本にも、走ることはもともと三女神への舞だって書いてありますし！',
      );
      await kitaru.say_and_wait('前に家の屋根裏の蔵書で、ちらっと見ました……');
      await kitaru.say_and_wait(
        '少なくとも私にとって、儀式の道のなかに菊花賞があることだけは、間違いないです！',
      );
      await era.printAndWait([
        'そう言いながら、周囲に密やかな気配を足した ',
        kitaru.get_colored_name(),
        ' は、またトレーニングへ戻った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_aoba_sho: (() => {
    const title = '青葉賞を迎えて';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait('青葉賞は、日本ダービーのトライアルだ。');
      await era.printAndWait([
        'だから日本ダービーの出走権を取りたい',
        kitaru.uma_sex_title,
        'が、多くこのレースに出る。',
      ]);
      await era.printAndWait(
        'パドックの段階から、ほかの出走馬の気勢がメイクデビューとはまるで違う。',
      );
      if (era.get('flag:当前声望') >= 500) {
        await era.printAndWait([
          '百戦錬磨の ',
          you.get_colored_name(),
          ' にとっても、かなりの重圧だった。',
        ]);
      } else {
        await era.printAndWait([
          'トレーナーである ',
          you.get_colored_name(),
          ' にとっても、かなりの重圧だった。',
        ]);
      }
      era.drawLine({ content: '東京競馬場 控え室の前' });
      era.printButton('ドアを開ける', 1);
      await era.input();
      await era.printAndWait([
        'またレース前の控え室へ入る。前回のメイクデビューと同じ ',
        kitaru.get_colored_name(),
        ' に会えることを期待して……',
      ]);
      await kitaru.say_and_wait('ふ……はっ！ ふ……はっ！');
      await era.printAndWait([
        '期待は外れた。息ができないように、',
        kitaru.sex,
        'は大きく息をしている。',
      ]);
      era.printButton('「紙袋が要るか？」', 1);
      await era.input();
      await kitaru.say_and_wait(
        'あはは……だいじょうぶです！ だいじょうぶです！',
      );
      await kitaru.say_and_wait(
        'レース前の占いだって、いまは大吉だって言ってますし！',
      );
      await kitaru.say_and_wait([
        '白興様……',
        callname,
        '……それに',
        kitaru.elder_sibling_sex_title,
        '……',
      ]);
      await kitaru.say_and_wait('だいじょうぶです！ 絶対だいじょうぶです！');
      await era.printAndWait([
        'おかしい……',
        kitaru.get_colored_name(),
        ' の反応は過敏すぎる。ただのレース前の緊張では、まったく説明がつかない。',
      ]);
      await kitaru.say_and_wait(
        'はいはい！ だいじょうぶです、このあとの菊花賞でも勝ちますから！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の心配に気づいたらしい。',
        kitaru.get_colored_name(),
        ' は話題を逸らそうとする。',
      ]);
      await kitaru.say_and_wait(
        'そ……そうです、このあとの菊花賞のために、全力でやります！',
      );
      await era.printAndWait([
        'あまりにも露骨な自己暗示だ。',
        kitaru.get_colored_name(),
        ' に効いてくれればいいが。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  aoba_sho_end: (() => {
    const title = '影のなかの福';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} rank レース着順
     */
    const f = async (kitaru, you, callname, rank) => {
      await era.printAndWait([
        '序盤、',
        kitaru.get_colored_name(),
        ' のポジション取りと歩様はどちらも優秀だった。普段の',
        kitaru.sex,
        'は抜けているが、',
        you.get_colored_name(),
        ' の教えは、',
        kitaru.sex,
        'がちゃんと胸に刻んでいた。',
      ]);
      await era.printAndWait([
        'レースは終盤に入り、',
        kitaru.get_colored_name(),
        ' も加速を始めた。逃げの数頭との距離が、急に縮まる。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の末脚はかなり優秀で、数馬身の差があっという間に消える。',
      ]);
      await era.printAndWait('それが——');
      if (rank === 1) {
        await era.printAndWait([
          '実況「どうした！？ ',
          kitaru.get_colored_name(),
          ' のフォームが、はっきり崩れています！」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は放送でそう聞いた。',
        ]);
        await era.printAndWait([
          'たしかに……逃げの一頭に迫ったあと、',
          kitaru.get_colored_name(),
          ' の歩様はどんどん不安定になり、顔つきも険しくなっていく。',
        ]);
        await era.printAndWait([
          '地力で、',
          kitaru.get_colored_name(),
          ' はそれでも一着でゴールした。だが末脚のタイミングも、歩幅も、ポジション意識も、まったくない。さっきの ',
          kitaru.get_colored_name(),
          ' は、',
          kitaru.uma_sex_title,
          'としての本能だけで走っていたように見えた。',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' がほとんどよろける歩様でゴールを駆け抜けたあと、',
          you.get_colored_name(),
          ' は一歩も止まらずコースへ走り、待機していた医師に異常なしを確認してから、そのまま',
          kitaru.sex,
          'を抱えて控え室へ向かった。',
        ]);
      } else {
        await era.printAndWait([
          '実況「失速ですか！？ ',
          kitaru.get_colored_name(),
          ' のスピードが急に落ちました」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は放送でそう聞いた。',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' がほとんどよろける歩様でゴールを駆け抜けたあと、',
          you.get_colored_name(),
          ' は一歩も止まらずコースへ走り、待機していた医師に異常なしを確認してから、そのまま',
          kitaru.sex,
          'を抱えて控え室へ向かった。',
        ]);
      }

      era.drawLine({ content: '東京競馬場 控え室内' });
      await kitaru.say_and_wait('えへへ！ だいじょうぶだって言いましたよね！');
      await era.printAndWait([
        'レース後、控え室の椅子に座った ',
        kitaru.get_colored_name(),
        ' は、両足を裸にして座っている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は安心できず、やはり',
        kitaru.sex,
        'に靴と靴下を脱がせて詳しく見る——つまり触診だ。',
      ]);
      await era.printAndWait(
        '剥き出しの白い肌はレースのあとでほんのり赤く、足裏の線は滑らかで、足指は急に空気に触れて小さく震えている。',
      );
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' に、',
        kitaru.get_colored_name(),
        ' の両足を愛でる余裕はない。さっきの異変が骨折でも捻挫でもないことだけを、何度も確かめる。',
      ]);
      await era.printAndWait('では、肉体の問題ではないとしたら……');
      era.printButton('思い返す', 1);
      await era.input();
      await era.printAndWait([
        '似た場面があった。選抜レースのときも同じだった。ただ、',
        you.get_colored_name(),
        ' は当時、',
        kitaru.get_colored_name(),
        ' のスパートのタイミングが未熟なだけだと思っていた。',
      ]);
      era.printButton('「何が起きた？」', 1);
      await era.input();
      await kitaru.say_and_wait('あ……');
      era.printButton('「さっきの終盤のことだ。」', 1);
      await era.input();
      await era.printAndWait([
        'まだ明るかった',
        kitaru.sex,
        'が、また黙り込む。',
      ]);
      await kitaru.say_and_wait('ん……');
      await kitaru.say_and_wait('やめて……');
      await era.printAndWait([kitaru.sex, 'は唇をきつく結び、血が出そうだ。']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、この',
        kitaru.uma_sex_title,
        'の口から拒絶を聞くことがほとんどなかった。',
      ]);
      era.printButton('追及をやめ、いまある情報で分析する', 1);
      era.printButton('もっと柔らかい口調で聞き続ける', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          'そうだ。メイクデビューと違い、選抜レースと今回の青葉賞には共通点がある。',
        );
        await era.printAndWait([
          '逃げの',
          kitaru.uma_sex_title,
          'の数も強さも平均を上回り、',
          kitaru.get_colored_name(),
          ' はどちらも終盤、逃げとの対決でこうなった。',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の普段の様子と合わせると。',
        ]);
        await era.printAndWait('かなりまずい……');
        await era.printAndWait(
          '情景に触れて感情が動き、選択的な忘却。典型的なPTSDの症状だ。',
        );
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' はもっと柔らかい口調で聞き続けた。それが——',
        ]);
        await kitaru.say_and_wait('ちがう！ ちがう！ 私のせいじゃない！');
        await kitaru.say_and_wait('お願いです！');
        await era.printAndWait(
          '耳が後ろへ倒れ、頭のなかへ刺さりそうだ。もともと明るい両目が濁る。',
        );
        await era.printAndWait(
          [
            kitaru.get_colored_name(),
            '「',
            {
              color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
              content: 'あああああっ！！！！！',
            },
            '」',
          ],
          {
            align: 'center',
            fontSize: '1.5rem',
            fontWeight: 'bold',
          },
        );
        await era.printAndWait('ばん！', {
          align: 'center',
          color: 'red',
          fontSize: '2.25rem',
          fontWeight: 'bold',
        });
        await era.printAndWait([
          'まともに一発。過覚醒に落ちた ',
          kitaru.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' に拳を入れた。',
        ]);
        await era.printAndWait([
          '幸い、',
          you.get_colored_name(),
          ' が床に倒れるのを見た瞬間、',
          kitaru.uma_sex_title,
          'の濁った両目が、やっと清明を取り戻した。',
        ]);
        await kitaru.say_and_wait('あああっ！ 本当にすみません！');
        await kitaru.say_and_wait([
          callname,
          '！ だいじょうぶですか！ いま医者を呼びます！',
        ]);
        await era.printAndWait([
          '大事はない？ ',
          you.get_colored_name(),
          ' は、知りたかったことも確かに手に入れた。',
        ]);
        await era.printAndWait(
          '驚愕反応の増強と、攻撃的な行動。典型的な PTSD の症状だ。',
        );
      }
      await era.printAndWait([
        you.get_colored_name(),
        ' は沈思する。精神の欠陥は、肉体の問題よりずっと手がかかる。',
      ]);
      era.println();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は、走ることに PTSD を抱えているとわかった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_18: (() => {
    const title = '敷居の前';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} callname_2 サイレンススズカのプレイヤーへの呼び方
     * @param {PrintedSpan} s_call_k サイレンススズカのマチカネフクキタルへの呼び方
     * @param {number} teem_count 担当の人数
     */
    const f = async (
      kitaru,
      suzuka,
      you,
      callname,
      callname_2,
      s_call_k,
      teem_count,
    ) => {
      await era.printAndWait([
        '休みの日、',
        you.get_colored_name(),
        ' は事務所に座り、考え込んでいた。',
      ]);
      await era.printAndWait([
        '最初は、トレーナーとしての責任感だけで ',
        kitaru.get_colored_name(),
        ' と担当契約を結んだ。',
      ]);
      await era.printAndWait([
        'だがこの',
        kitaru.teen_sex_title,
        'は、',
        you.get_colored_name(),
        ' の想像よりずっと手がかかる。',
        you.get_colored_name(),
        ' はカリュブディスにぶつかった船長のようで、底の見えない厄介の渦に引き込まれている。',
      ]);
      await era.printAndWait([
        'とくに青葉賞のあと、',
        kitaru.sex,
        'の情緒はどんどん不安定になっていった。',
      ]);
      await era.printAndWait([
        'トレーニング中だけでなく、普段の ',
        kitaru.get_colored_name(),
        ' も、ますます落ち着かない。',
      ]);
      await era.printAndWait([
        '並走に呼んだ逃げの同級生を相手にしても、',
        kitaru.sex,
        'は終盤前に失速してしまう。',
      ]);
      // サイレンススズカの差分は要るか？
      if (era.get('cflag:2:招募状态') === 1) {
        await suzuka.say_and_wait([
          callname_2,
          '、',
          s_call_k,
          'はだいじょうぶ？',
        ]);
        await era.printAndWait([
          'チームのほかのメンバーも、',
          kitaru.get_colored_name(),
          ' のいまの様子に気づいている。',
        ]);
      }
      await era.printAndWait('では、いまはどうする。');
      era.printButton('（先へ進むしかない）', 1);
      await era.input();
      await era.printAndWait([
        'ほかの答えはないだろう。あいつは ',
        you.get_colored_name(),
        ' を運命の人と呼んでいるのだから。',
      ]);
      await era.printAndWait('仕事を始めるときだ……');
      await era.printAndWait(
        'PTSD、すなわち心的外傷後ストレス障害。よくある病因は、自分や他人の実際の死に関わる出来事を、体験し、目撃し、または遭遇することだ。',
      );
      await era.printAndWait(
        '防衛機制として、脳は事件当時の記憶を自動で遮断するか、虚構で置き換える。いわゆる選択的忘却で、外傷に関わる細部を思い出せなくなる。',
      );
      await era.printAndWait([
        '普段の ',
        kitaru.get_colored_name(),
        ' が',
        kitaru.teen_sex_title,
        'らしい明るさを保てて、',
        kitaru.sex,
        'の',
        kitaru.elder_sibling_sex_title,
        'に触れたときだけ悲しみが漏れるのも、そのためだ。',
      ]);
      await era.printAndWait([
        'そこから推測する。あのときのコースの情景に、走るときの緊張した高圧が重なり、',
        kitaru.get_colored_name(),
        ' の過覚醒を引いたに違いない。',
      ]);
      await era.printAndWait('つまり、外傷性の再体験症状だ。');
      await era.printAndWait([
        'では、子どものころの ',
        kitaru.get_colored_name(),
        ' は、いったい何を経験したのか。',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        'の事故なら、地元紙に報道があるはずだ。そして ',
        kitaru.get_colored_name(),
        ' は以前、',
        kitaru.elder_sibling_sex_title,
        'がトレセンから招待された事実も漏らしていた。',
      ]);
      await era.printAndWait([
        '調査開始。',
        you.get_colored_name(),
        ' は、まず……',
      ]);
      era.printButton('古い新聞を読む', 1);
      era.printButton('トレセンの過去の新入生資料を調べる', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait([
          '十年近く前の新聞が、ある',
          kitaru.uma_sex_title,
          'がトレーニング中の事故で亡くなったと伝えている。地元神社の宮司の娘だったため、当時はかなりの騒ぎになった。',
        ]);
        await era.printAndWait(
          '神社の参拝客がほかより少ない理由も、これでだいたいわかる。',
        );
        await era.printAndWait([
          'その事故現場の写真に、',
          you.get_colored_name(),
          ' は見慣れた姿を見つけた。',
        ]);
        await era.printAndWait([
          '事故のとき、',
          kitaru.get_colored_name(),
          ' もその場にいた。',
          kitaru.sex,
          'は自分の',
          kitaru.elder_sibling_sex_title,
          'が、逃げの終盤のスパート速度のまま柵にぶつかるのを、目の前で見ていた。',
        ]);
        await era.printAndWait([
          '脳の防衛機制が本当の記憶を下に埋めていても、全神経を集中した青葉賞のコースで、終盤前の逃げのスパートという既視感のある光景が、',
          kitaru.get_colored_name(),
          ' の病を引いてしまった。',
        ]);
      } else {
        await era.printAndWait([
          '写真には、',
          kitaru.get_colored_name(),
          ' にどこか似た長髪の',
          kitaru.uma_sex_title,
          'が写っている。',
        ]);
        await era.printAndWait([
          '優秀な逃げで、トレセンからも',
          kitaru.sex,
          'へ招待が来ていた。',
        ]);
        await era.printAndWait([
          'いま、トレセンの資料保管がまだまともなおかげで、その招待状のコピーと関連資料が ',
          you.get_colored_name(),
          ' の手にある。',
        ]);
        await era.printAndWait(
          '菊花賞を目標にした逃げ……だがそのあと、トレーニング中の事故で亡くなった。',
        );
        await era.printAndWait([
          '事故のとき、',
          kitaru.get_colored_name(),
          ' もその場にいた。',
          kitaru.sex,
          'は自分の',
          kitaru.elder_sibling_sex_title,
          'が、逃げの終盤のスパート速度のまま柵にぶつかるのを、目の前で見ていた。',
        ]);
        await era.printAndWait([
          '脳の防衛機制が本当の記憶を下に埋めていても、全神経を集中した青葉賞のコースで、終盤前の逃げのスパートという既視感のある光景が、',
          kitaru.get_colored_name(),
          ' の病を引いてしまった。',
        ]);
      }
      era.println();
      await era.printAndWait('「とん！ とん！ とん！」');
      await era.printAndWait([
        you.get_colored_name(),
        ' は事務所のドアが鳴るのを聞いた。',
      ]);
      era.printButton('「どうぞ！」', 1);
      await era.input();
      await era.printAndWait([
        'ドアが開く。',
        you.get_colored_name(),
        ' にずいぶん世話を焼かせてきた担当が、怯えたように入口に立っている。おびえた子狐のようだ。',
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait([
        'あの、これは ',
        callname,
        ' への開運グッズです！',
      ]);
      await era.printAndWait([
        'はっきりした謝罪の気持ちを乗せて、オレンジのお守りが ',
        you.get_colored_name(),
        ' の机に置かれた。',
      ]);
      await kitaru.say_and_wait('私……言いたくて……');
      await kitaru.say_and_wait(
        'とにかく！ 青葉賞のことは、本当にすみません！！！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は、こちらへ伏せた',
        kitaru.sex,
        'の頭を撫でた。',
        kitaru.sex,
        'の耳が、また嬉しそうに ',
        you.get_colored_name(),
        ' の手の甲を叩くまで。',
      ]);
      await era.printAndWait('空気は、またいつものように和らいだ。');
      await kitaru.say_and_wait([
        'じゃあ ',
        callname,
        '！ 次のレースのトレーニング予定は？',
      ]);
      await era.printAndWait([
        '予定では、このまま日本ダービーへ出走するはずだった。だが、いまの ',
        kitaru.get_colored_name(),
        ' では、まともに完走できるかどうかも怪しい。',
      ]);
      await kitaru.say_and_wait('取り消すんですか！？');
      await era.printAndWait([
        kitaru.sex,
        'は、黙り込んだ ',
        you.get_colored_name(),
        ' の顔から何かを読み取ったらしい。瞳に不安が揺れる。',
      ]);
      era.printButton('うなずく', 1);
      await era.input();
      await era.printAndWait([
        '「取り消すかもしれない」と、',
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'に伝えた。',
      ]);
      await kitaru.say_and_wait('えええっ！');
      await kitaru.say_and_wait('だいじょうぶです、絶対だいじょうぶです！');
      await kitaru.say_and_wait('私、レースに出られます！');
      await era.printAndWait([
        '媚びるように ',
        you.get_colored_name(),
        ' へ寄り、何度も ',
        you.get_colored_name(),
        ' へ懇願を重ねる。',
      ]);
      await era.printAndWait([
        'これが本当に ',
        kitaru.get_colored_name(),
        ' か。保護施設で、新しい飼い主の前で精一杯アピールするペットのほうに近い。',
      ]);
      era.printButton('「フク、何か怖いのか？」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ！');
      await kitaru.say_and_wait('ちがいます！');
      await kitaru.say_and_wait('ただ……あの……');
      await kitaru.say_and_wait('はあ……');
      await kitaru.say_and_wait([
        callname,
        ' は、きっと私を役立たずだと思ってますよね。いつもがやがやして、いまは、いまはもうレースも走れなくなりそうです。',
      ]);
      if (teem_count >= 2) {
        await kitaru.say_and_wait('ほかの担当より、こんなに劣ってて……');
      } else {
        await kitaru.say_and_wait([
          '最初の担当が私みたいな',
          kitaru.uma_sex_title,
          'なんて、大凶ですよね。',
        ]);
      }
      await kitaru.say_and_wait([
        callname,
        ' は、',
        kitaru.elder_sibling_sex_title,
        'の次に、私を認めてくれた人です……',
      ]);
      await kitaru.say_and_wait('なのに、こんなに役立たずで……');
      await kitaru.say_and_wait('私、私、本当に怖いんです……');
      await kitaru.say_and_wait([
        callname,
        ' も、',
        kitaru.elder_sibling_sex_title,
        'みたいに、私をひとり残して行っちゃうんですか？',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の声は、氷穴から聞こえてくるみたいだ。',
      ]);
      await era.printAndWait([
        'もう夏近いのに、いまの事務所の空気は ',
        you.get_colored_name(),
        ' の肌を凍らせる。ガラスに霜が降りたようだ。',
      ]);
      era.printButton('「フク、最初に会ったときの儀式、覚えてるか？」', 1);
      await era.input();
      await era.printAndWait([you.get_colored_name(), ' は手を伸ばした。']);
      await kitaru.say_and_wait('はい、指切りです！');
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        'が教えてくれました。あのとき、',
        kitaru.sex,
        'と約束して……',
      ]);
      await kitaru.say_and_wait('青葉賞の終盤で……全部、思い出しました……');
      await kitaru.say_and_wait([
        'いま菊花賞へ向かう目標も、',
        kitaru.sex,
        'との約束なんです。',
      ]);
      await era.printAndWait([
        kitaru.elder_sibling_sex_title,
        'との約束か。だから ',
        kitaru.get_colored_name(),
        ' は菊花賞を、あんなに大事にしていた。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の声はだんだん低くなり、泣くのを堪えてかすれた声になる。',
      ]);
      await era.printAndWait([
        '研究でも、高い圧力のなかにいる人ほど迷信的な行動を見せやすいとされる。物事を自分の手に戻そうとするからだ。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' にとっては、早く亡くなった',
        kitaru.elder_sibling_sex_title,
        '、娘を失って厳しくなった母、神社に満ちた神秘主義。',
      ]);
      await era.printAndWait([
        kitaru.elder_sibling_sex_title,
        'が日常の慰めに使っていた白興様が、間違いなく',
        kitaru.sex,
        'が握りしめた救命の藁になった。',
      ]);
      await era.printAndWait([
        'それでいて',
        kitaru.sex,
        'が普段、あの明るく楽観的な表を保てて、たまに ',
        you.get_colored_name(),
        ' とのあいだでだけ少しの違和を見せるだけなら、もう大吉と言っていい。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' はこちらを見つめている。涙で焦点の合わない瞳は、どこにいるかわからない白興様の返事を乞うているようでもある。',
      ]);
      await era.printAndWait([
        'だから、いまは間違いなく、',
        you.get_colored_name(),
        ' が担当を現実へ引き戻す番だ。',
      ]);
      era.printButton('「しない！」', 1);
      await era.input();
      era.printButton('「フク、俺はお前を捨てない！」', 1);
      await era.input();
      era.printButton('「最初と同じように、約束しよう！」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.get_colored_name(),
        ' に握られた右手をなんとか外し、それから拳をつくり、小指を出した。',
      ]);
      era.printButton(
        '「迷ったとき、苦しいときは俺を思い出せ。いっしょに担ぐ。俺も、お前が走る理由の一つにさせてくれ！」',
        1,
      );
      await era.input();
      await kitaru.say_and_wait('うっ……');
      await kitaru.say_and_wait([callname, '……']);
      await era.printAndWait([
        kitaru.sex,
        'は震えながら小指を出し、あのとき神社の前と変わらない指切りを終えた。',
      ]);
      await kitaru.say_and_wait('えへっ……');
      await era.printAndWait([
        '琥珀色の瞳が揺れ、',
        you.get_colored_name(),
        ' が',
        kitaru.sex,
        'を見ている目を映している。',
      ]);
      era.printButton('「どうした！」', 1);
      await era.input();
      await era.printAndWait([
        kitaru.sex,
        'は、あまりに真剣な ',
        you.get_colored_name(),
        ' の顔を見て、突然、涙のまま笑った。',
      ]);
      await kitaru.say_and_wait([
        'いえ……あの……ただ……あのとき占った運命の人が ',
        callname,
        ' で、本当によかったなって！',
      ]);
      await kitaru.say_and_wait(
        '運命の人がそこまで言ったのに、私が日本ダービーを取り消したら、参拝にお供えを持っていかないのと同じじゃないですか？',
      );
      await kitaru.say_and_wait([callname, '！ 私を信じてください！']);
    };
    f.title = title;
    return f;
  })(),
  before_toky_yus: (() => {
    const title = '日本ダービーを迎えて';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の強い要望で、予定どおり日本ダービーへ出走することになった。',
      ]);
      await era.printAndWait([
        '同期の優秀な',
        kitaru.uma_sex_title,
        'は、ほとんど全員が出走登録している。人気順で見れば、',
        kitaru.get_colored_name(),
        ' はメディアに「参加することが大事」と評される、目立たない一頭にすぎない。',
      ]);
      await era.printAndWait(
        '青葉賞での突然の失速を叩いたメディアも、一社だけではなかった。',
      );
      era.drawLine({ content: '東京競馬場 控え室の前' });
      era.printButton('ドアを開ける', 1);
      await era.input();
      await era.printAndWait([kitaru.sex, 'は部屋のなかに立っている。']);
      await era.printAndWait(
        '一見セーラー服に見える服だが、巫女装束のように両肩をわざと出す仕立てで、真紅の襟が、形のはっきりした胸のあいだに強調して落ちている。',
      );
      await era.printAndWait(
        '下は安産型の尻をかろうじて隠すプリーツスカートと、長い脚を描く白いストッキング。巫女であることを示す絵馬と念珠、背中には好運の招き猫。',
      );
      await era.printAndWait([
        'これが ',
        kitaru.get_colored_name(),
        ' という名の',
        kitaru.uma_sex_title,
        'の勝負服だ。可愛くて、元気で、色っぽくて、神秘。その全部が、この一着でうまく重なっている。',
      ]);
      era.printButton('「だいじょうぶか？」', 1);
      await era.input();
      await kitaru.say_and_wait('だいじょうぶって言いたいんですけど……でも……');
      await kitaru.say_and_wait(
        'パドックでファンの声援を聞いただけで、もう緊張してきました。',
      );
      await kitaru.say_and_wait(['でも……', callname, '！']);
      await era.printAndWait([
        'オレンジ髪の',
        kitaru.teen_sex_title,
        'は深く息を吸い、振り返って ',
        you.get_colored_name(),
        ' に、できるかぎりの笑顔を向けた。',
      ]);
      await kitaru.say_and_wait('いちばん幸運な馬が、ダービーを獲るんです！');
      await kitaru.say_and_wait([
        '幸運なら！ 白興様と ',
        callname,
        ' の二重のご加護がある私は、無敵です！',
      ]);
      await era.printAndWait([
        kitaru.sex,
        'は ',
        you.get_colored_name(),
        ' に親指を立てた。前回の約束のあと、',
        you.get_colored_name(),
        ' には、',
        kitaru.get_colored_name(),
        ' の態度がかなり変わったのがわかる。',
      ]);
      await era.printAndWait([
        '少なくとも ',
        you.get_colored_name(),
        ' といっしょのとき、顔の笑顔は、あのほど型どおりではなくなった。',
      ]);
      era.printButton('「燃え尽きてほしくないぞ」', 1);
      await era.input();
      era.printButton('「無事に帰ってこい！」', 1);
      await era.input();
      await kitaru.say_and_wait('はい！');
      await kitaru.say_and_wait(['私、', callname, ' に約束しましたから！']);
      if (era.get('love:56') >= 50) {
        await kitaru.say_and_wait([
          'でも ',
          callname,
          ' も、開運のエネルギーをください！',
        ]);
        await era.printAndWait([
          'そう言いながら、勝負服の ',
          kitaru.get_colored_name(),
          ' がいきなり前から ',
          you.get_colored_name(),
          ' の体を抱きしめた。',
        ]);
        await era.printAndWait([
          'ふわふわのオレンジ髪が、',
          you.get_colored_name(),
          ' の胸で擦れる。',
        ]);
        await era.printAndWait([
          'しばらくして、満足した ',
          kitaru.get_colored_name(),
          ' がやっと顔を上げ、',
          you.get_colored_name(),
          ' を見た。',
        ]);
      }
      await kitaru.say_and_wait([callname, '、知ってますか？']);
      await kitaru.say_and_wait(
        '儀式のなかでは、言葉の重みはとても大きいんです！',
      );
      await kitaru.say_and_wait('だから約束したことは！ 絶対やります！');
      await era.printAndWait([
        '言い終えると、招き猫のリュックの紐を直した ',
        kitaru.get_colored_name(),
        ' は、コースへ向かって振り返った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  toky_yus_end: (() => {
    const title = '曙光';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait(
        '終盤に入りました。みんなスパートを始めて、前の逃げも加速しています！',
      );
      await kitaru.print_and_wait('頭が、痛い……');
      await kitaru.say_and_wait('や……やめて！');
      await kitaru.print_and_wait([
        'あの日、オレンジの長髪の',
        kitaru.uma_sex_title,
        'がスパートを始めるのを見ました。',
      ]);
      await kitaru.say_and_wait('やめて！');
      await kitaru.print_and_wait('ばん！！！');
      await kitaru.print_and_wait('剥き出しの骨、歪んだ柵、赤く染まった芝。');
      await kitaru.say_and_wait('やめてええっ！');
      await kitaru.print_and_wait(
        '海底に落ちたみたい、氷穴に落ちたみたい。両足が泥に沈む。',
      );
      await you.say_as_passer_by_and_wait('実況', [
        kitaru.get_colored_name(),
        '、',
        kitaru.get_colored_name(),
        ' はまた失速しますか？',
      ]);
      await kitaru.say_and_wait([callname, '……がっかりさせるかもしれません。']);
      await kitaru.print_and_wait([
        '柵に寄りかかった',
        kitaru.uma_sex_title,
        'が口を開くのを見るまで。',
      ]);
      await kitaru.say_as_unknown_and_wait('フク……');
      await kitaru.say_as_unknown_and_wait('約束しよう。');
      await kitaru.say_as_unknown_and_wait(
        '将来、フクが菊花賞を走るところを見るからね！',
      );
      await kitaru.say_and_wait([kitaru.elder_sibling_sex_title, '？']);
      await kitaru.say_and_wait('ん……約束。');
      await kitaru.say_and_wait([
        'そう、約束……',
        callname,
        ' にも約束しました！',
      ]);
      await kitaru.say_and_wait('無事に帰る！');
      await kitaru.say_and_wait('いまは、神様へ走りを捧げるときです！');
      await you.say_as_passer_by_and_wait('実況', [
        'いや、速い！ 速いです！ ',
        kitaru.sex,
        'がスパートを始めました！',
      ]);
      await kitaru.say_and_wait([callname, ' がそばにいる私は、大吉です！']);
      era.drawLine({ content: '東京競馬場 控え室内' });
      await kitaru.say_and_wait(['ふ……', callname, '、突き抜けました！']);
      await kitaru.say_and_wait(
        'え！ 生きてます！ とにかくいま、超幸せ！ 超満たされてます！',
      );
      await kitaru.say_and_wait('福来たる！');
      era.printButton('「お疲れ。ありがとう！」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ、そこまで言わなくていいですよ！');
      await kitaru.say_and_wait('自分にできることをしただけです！');
      await kitaru.say_and_wait('影のなかから、出てこられました！');
      era.printButton('「じゃあ次は菊花賞か？」', 1);
      await era.input();
      await kitaru.say_and_wait('菊花賞を走ります！');
      await kitaru.say_and_wait('はい！ 菊花賞です！');
      await kitaru.say_and_wait('ちょっと難しいかもしれませんけど……');
      await kitaru.say_and_wait([
        'でも私と ',
        callname,
        ' なら、絶対だいじょうぶです！',
      ]);
      era.println();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の PTSD は、しばらく消えた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_21: (() => {
    const title = '開運の投射';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {boolean} join_toky_yus フクキタルが日本ダービーに出走したか
     */
    const f = async (kitaru, you, callname, join_toky_yus) => {
      await era.printAndWait([
        'トレーニングの休憩で、',
        you.get_colored_name(),
        ' と ',
        kitaru.get_colored_name(),
        ' は手すりに寄りかかり、とりとめなく話している。',
      ]);
      await kitaru.say_and_wait('えっと……菊花賞……どう考えても無理です。');
      await kitaru.say_and_wait('あんな長い距離、走ったことないです。');
      await kitaru.say_and_wait('でもその前に、神戸新聞杯も走らないと。');
      await kitaru.say_and_wait(
        'だって、これまでのファン数だと、菊花賞はちょっと厳しい……',
      );
      era.printButton('「不安そうだな？」', 1);
      await era.input();
      await kitaru.say_and_wait('はい……');
      await kitaru.say_and_wait('占いも、結果が出ないんです……');
      await kitaru.say_and_wait([
        'でもこれは、私の',
        kitaru.elder_sibling_sex_title,
        'との約束です！ 絶対果たします！',
      ]);
      await kitaru.say_and_wait([
        '指切りで、',
        kitaru.sex,
        'に約束しましたから！',
      ]);
      if (join_toky_yus) {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の日本ダービー終盤のスパートは、',
          you.get_colored_name(),
          ' の記憶に残っている。どうやら',
          kitaru.sex,
          'は、心の行き詰まりから完全に出られたらしい。',
        ]);
      }
      await era.printAndWait([
        'それに、この終盤の爆発力をうまく使えれば、',
        kitaru.sex,
        'の奇策の鍵になるはずだ。',
      ]);
      era.printButton('「トレーニング、続けられるか？」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ！');
      await kitaru.say_and_wait([
        'ん……だって ',
        callname,
        ' がそばにいますから！',
      ]);
      await kitaru.say_and_wait([
        callname,
        ' は、私の最強の開運グッズですよ！',
      ]);
      await kitaru.say_and_wait(
        '運命の人がそばにいれば！ 私は無敵のはずです！',
      );
      await era.printAndWait('冗談に聞こえる？');
      await era.printAndWait([
        'いや、',
        you.get_colored_name(),
        ' にはわかる。',
        kitaru.sex,
        'がこれを言ったとき、本気だった。',
      ]);
      await era.printAndWait('PTSD の療法の一つに、精神分析療法がある。');
      await era.printAndWait(
        'その理論枠の一つが愛着理論で、さまざまな感情の結びつきを説明する。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の推論が正しければ、',
        kitaru.get_colored_name(),
        ' は少しずつ、',
        you.get_colored_name(),
        ' を含む開運グッズを、',
        kitaru.sex,
        'がここまで来られた心の支柱、つまり自己意志の投射と見なし始めている。',
      ]);
      await era.printAndWait('これは……いいこと、なのだろうか。');
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '夏季合宿（クラシック級）';
    /**
     * クラシック級とシニア級の夏季合宿で共通の開始イベント
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kitaru, you) => {
      await era.printAndWait([
        '暑い夏、',
        kitaru.get_colored_name(),
        ' といっしょに、夏季合宿の会場へ向かう長距離バスに乗った。',
      ]);
      await era.printAndWait([
        '首筋に、耳の細かくて温かい感触が来る。',
        kitaru.get_colored_name(),
        ' は疲れて、',
        you.get_colored_name(),
        ' の肩に寄りかかっている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、このあとの',
        kitaru.sex,
        'のトレーニング計画を考え始めた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_32: (() => {
    const title = '地上に堕ちた星';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await era.printAndWait([
        '今日は、',
        you.get_colored_name(),
        ' が ',
        kitaru.get_colored_name(),
        ' と出かけると約束した日だ。',
      ]);
      await era.printAndWait([
        '船で着いたときから、',
        kitaru.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の手を引いて、さほど広くもない島を駆けまわっている。',
      ]);
      await era.printAndWait([
        '菊花賞を目指す',
        kitaru.sex,
        'のスタミナが足りないはずもなく、たった数時間で ',
        you.get_colored_name(),
        ' のほうはもうヘトヘトだ。',
      ]);
      await era.printAndWait('気づくと黄昏。そろそろ戻るころあいだ。');
      await era.printAndWait('だが……');
      await kitaru.say_and_wait([callname, '！ こっちこっち！']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の熱は、かえって増している。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' でも、朝からここまでずっとこの調子でいるのは珍しい。',
      ]);
      era.printButton('「いい加減、何がしたいのか言えよ」', 1);
      await era.input();
      await kitaru.say_and_wait(['えへへ！ さすが ', callname, '！']);
      await kitaru.say_and_wait('一発で見抜かれました！');
      await kitaru.say_and_wait('あの！ 今夜、流星群なんです！');
      await kitaru.say_and_wait([callname, ' と、いっしょに見たくて！']);
      era.printButton('「最初から言えばよかっただろ」', 1);
      await era.input();
      await kitaru.say_and_wait([
        'うぅ……',
        callname,
        ' に断られたら、今日一日が大凶になっちゃうじゃないですか！',
      ]);
      era.drawLine({ content: '無人島 数時間後' });
      await era.printAndWait([
        you.get_colored_name(),
        ' が急ごしらえした焚き火が、ぱちぱちと鳴っている。',
      ]);
      await kitaru.say_and_wait([
        'おおおっ！ ',
        callname,
        '、見てください！ 流星群ですよ！',
      ]);
      await kitaru.say_and_wait(
        '聞いた話だと、私がまだお母さんのお腹にいたころ、お父さんとお母さんもここで流星群を見たそうです！',
      );
      await kitaru.say_and_wait(
        'だから！ 今日の私はマチカネフクキタルじゃありません！ マチカネホシキタルです！',
      );
      await kitaru.say_and_wait(
        'えっと、そうです、流星群にはどんな儀式がいいんでしょう？',
      );
      era.printButton('「走る」（スピード+25）', 1);
      era.printButton('「願をかける」（スキルPt+20）', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await kitaru.say_and_wait('たしかにそうですね！');
        await kitaru.say_and_wait('星空の力だって、もらえるかもしれません。');
        await era.printAndWait([
          kitaru.sex,
          'は靴も靴下も脱いで走り出した。白い素足が水しぶきを立て、後ろで揺れる馬の尻尾がそれを払い、飛んだしずくが ',
          you.get_colored_name(),
          ' の裾まで届く。',
        ]);
      } else {
        await kitaru.say_and_wait('願い、ですか？');
        await kitaru.say_and_wait('ん……わかりました！');
        await kitaru.say_and_wait('特別な願い、ってほどはないんですけど。');
        await era.printAndWait([kitaru.sex, 'は目を閉じ、両手を合わせた。']);
        await era.printAndWait([
          'オレンジの髪の',
          kitaru.teen_sex_title,
          'は、焚き火の光のなかで、聖堂のステンドグラスに描かれた、聖光に守られる修道女のように清らかだった。',
        ]);
      }
      if (era.get('love:56') >= 49) {
        era.drawLine({ content: 'しばらくして' });
        if (ret[0] === 1) {
          await era.printAndWait([
            '走り終えて力の尽きた ',
            kitaru.get_colored_name(),
            ' が、',
            you.get_colored_name(),
            ' の胸に倒れ込んだ。今日のシャツは儀式ですっかり濡れ、激しい動きで赤らんだ胸のふくらみが透けて見える。',
          ]);
          await era.printAndWait([
            kitaru.sex,
            'が風邪をひかないよう、',
            you.get_colored_name(),
            ' は自分の上着を脱いで',
            kitaru.sex,
            'にかけた。',
          ]);
          await kitaru.say_and_wait(['えへへ、', callname, ' の匂いです。']);
          await era.printAndWait([
            kitaru.sex,
            'が ',
            you.get_colored_name(),
            ' の胸にすり寄ると、乱れた髪が胸を撫でる感触が伝わってくる。',
          ]);
        } else {
          await era.printAndWait([
            '祈りを終えた修道女が、',
            you.get_colored_name(),
            ' の胸に倒れ込んだ。乱れた髪が胸を撫でる感触が、はっきりわかる。',
          ]);
          await era.printAndWait([
            'それと、',
            kitaru.sex,
            'の胸の柔らかさが、ときどき ',
            you.get_colored_name(),
            ' に押し当たる感触。本人は、いまの自分がどれほど色っぽいか、まったく気づいていないらしい。',
          ]);
        }
        await kitaru.say_and_wait('あの、今日はもうひとつ、願いがあるんです。');
        await era.printAndWait([
          you.get_colored_name(),
          ' から見ると、',
          kitaru.get_colored_name(),
          ' の頬はほんのり赤い。今日の興奮のせいだろうか。',
        ]);
        await kitaru.say_and_wait('私……');
        era.printButton('「んっ！」', 1);
        await era.input();
        await era.printAndWait([
          '一日歩き疲れた ',
          you.get_colored_name(),
          ' は、反応が遅れた。',
        ]);
        await you.say_and_wait('くっ……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の柔らかい唇が、',
          you.get_colored_name(),
          ' の唇に重なった。',
        ]);
        await era.printAndWait([
          '唇のあいだから溢れる吐息と唾液に、',
          kitaru.sex,
          'の熱と味が乗っている。',
        ]);
        await kitaru.say_and_wait('はぁ……');
        await kitaru.say_and_wait([callname, ' と、キスしちゃいました！']);
        await kitaru.say_and_wait('ふう……');
        await era.printAndWait([
          '終わったあと、',
          kitaru.sex,
          'の吐息が ',
          you.get_colored_name(),
          ' の耳を撫でる。',
        ]);
        if (
          era.get('love:56') > 49 ||
          era.get('exp:56:性交次数') > era.get('exp:56:睡奸次数')
        ) {
          await era.printAndWait(['このまま、何かするべきか。']);
          era.printButton('フクキタルを押し倒す', 1);
          era.printButton('やめておく（全ステータス+1）', 2);
          ret.push(await era.input());
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_kobe_hai: (() => {
    const title = '神戸新聞杯を迎えて';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_5 マチカネフクキタルのフジキセキへの呼び方
     */
    const f = async (kitaru, you, callname, call_5) => {
      await era.printAndWait([
        '真剣すぎて、ほとんど無表情の ',
        kitaru.get_colored_name(),
        ' が、控え室の長椅子に座っている。',
      ]);
      await era.printAndWait([
        'あまりにきちんとした座り方のせいで、体操服に貼ったゼッケンの弧がいっそう目立つ。白いニーソックスの脚はぴったり揃い、付け根に一本、色っぽい線を刻んでいる。',
      ]);
      await era.printAndWait([
        'それに……普段の脱線ぶりを思い出すと、',
        you.get_colored_name(),
        ' は笑いを噛みきれなかった。',
      ]);
      await kitaru.say_and_wait([callname, '、何を笑ってるんですか？']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' はまだ真面目を装って ',
        you.get_colored_name(),
        ' に聞く。それでも口角は、はっきり一度、引きつった。',
      ]);
      era.printButton('「緊張してるのか？」', 1);
      await era.input();
      await kitaru.say_and_wait('いえ、夏季合宿であれだけ準備したので……');
      await era.printAndWait(
        '胸のゼッケンを二度ほど引っ張り、気を逸らそうとしている。',
      );
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' が隣に座ると、',
        kitaru.get_colored_name(),
        ' の真面目な顔は崩れた。',
      ]);
      await kitaru.say_and_wait('ん……少し、あります。');
      await kitaru.say_and_wait(
        '本当に難しいのはこれからだとわかってるのに、もう少し怖くなってしまって。',
      );
      await era.printAndWait([
        '身を傾けて ',
        you.get_colored_name(),
        ' の肩に寄りかかると、',
        kitaru.get_colored_name(),
        ' の呼吸は少し落ち着いた。これだけ近いと、神社のような冷たい体香まで届く。',
      ]);
      await kitaru.say_and_wait('くん……くん……');
      await kitaru.say_and_wait([
        call_5,
        ' が言ってました。お互いの匂いがいいと感じるのは、相性がいい証拠だって……',
      ]);
      await kitaru.say_and_wait('すこし、落ち着きました……');
      await kitaru.say_and_wait([
        'ところで、',
        callname,
        ' は、約束ってどう思いますか？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が答える前に、',
        kitaru.teen_sex_title,
        'はひとりで話し続けた。',
      ]);
      await kitaru.say_and_wait(
        '私から見ると、約束した二人は、自分の運命の一部を相手に結びつけてしまうんです。',
      );
      await kitaru.say_and_wait([
        'だから、',
        kitaru.elder_sibling_sex_title,
        'と約束した私は、本来',
        kitaru.sex,
        'の道を歩いている。だから、ちゃんと走らないと。',
      ]);
      await kitaru.say_and_wait('ふう……');
      era.printButton('「これから先は、フク自身の道も見たいな」', 1);
      await era.input();
      await kitaru.say_and_wait('あっ！');
      await kitaru.say_and_wait('そう、なんですか！？');
      await kitaru.say_and_wait('ふう……まずは目の前のことを、ですね。');
      await kitaru.say_and_wait('とにかく、もう出る時間です……');
      await kitaru.say_and_wait(['見ていてください、', callname, '！']);
      await kitaru.say_and_wait('菊花賞への扉を開くために、全力で走ります！');
    };
    f.title = title;
    return f;
  })(),
  kobe_hai_win: (() => {
    const title = '結び';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await you.say_as_passer_by_and_wait('実況', [
        kitaru.get_colored_name(),
        '、追いつけるか！',
      ]);
      await you.say_as_passer_by_and_wait('実況', '速い！ 速い！ 速すぎる！');
      await you.say_as_passer_by_and_wait('実況', '五馬身！ 三馬身！ 一馬身！');
      await you.say_as_passer_by_and_wait('実況', 'かわした！');
      await you.say_as_passer_by_and_wait('実況', [
        '勝ったのは ',
        kitaru.get_colored_name(),
        '！',
      ]);
      await kitaru.print_and_wait(
        '恐れも迷いもなく、日頃のトレーニングと積み重ねた努力を、終盤ですべて放った。',
      );
      await kitaru.print_and_wait('とても、いい。そうだろう？');
      era.drawLine({ content: '阪神競馬場 控え室' });
      await kitaru.say_and_wait('ふう！！！');
      era.printButton('「お疲れさま！」', 1);
      await era.input();
      await kitaru.say_and_wait('はい！');
      await kitaru.say_and_wait('これで、私も完全に慣れましたよね！？');
      await kitaru.say_and_wait('じゃあ、次は菊花賞ですね！');
      if (era.get('love:56') >= 50) {
        await era.printAndWait([
          you.get_colored_name(),
          ' が答える前に、',
          kitaru.get_colored_name(),
          ' はもう ',
          you.get_colored_name(),
          ' に飛びついていた。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の膝に座り、タオルで汗ばんだ髪を拭いてもらうのを待っている。',
        ]);
        await era.printAndWait([
          'やがて懐の',
          kitaru.uma_sex_title,
          'の尻が落ち着かなげに擦りはじめたとき、',
          you.get_colored_name(),
          ' は ',
          kitaru.get_colored_name(),
          ' の頭を軽く叩いて、静かにしろと合図した。',
        ]);
        await kitaru.say_and_wait('あいたっ！');
      }
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' のふわふわした尻尾をよけ、傍らの鞄から、',
        kitaru.get_colored_name(),
        ' 用に組んだ菊花賞のトレーニング計画を取り出した。',
      ]);
      await kitaru.say_and_wait([
        'おっ！ さすが、',
        callname,
        '、もう用意してたんですね！',
      ]);
      era.printButton('「怖いか？」', 1);
      era.printButton('「本番で足を引っ張るなよ！」', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('もちろんです！');
      } else {
        await kitaru.say_and_wait('そんなことしません！');
      }
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        'の参拝の道は、私が代わりに歩き切ります！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_39: (() => {
    const title = 'ふたつの世のあいだ';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '菊花賞まで、あと一週。',
        you.get_colored_name(),
        ' にはわかる。このところ ',
        kitaru.get_colored_name(),
        ' は、どんどん熱を帯びている。',
      ]);
      await era.printAndWait([
        'いつものメニューも真面目にこなす。だが今の',
        kitaru.sex,
        'は、弦を張りすぎた弓だ。',
      ]);
      await era.printAndWait([
        'レース前の過負荷は大凶だ。',
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'に二日、休みを出した。',
      ]);
      await kitaru.say_and_wait('でもでも！ 菊花賞、もう目の前なんですよ！');
      await kitaru.say_and_wait([
        'ん、じゃあ ',
        callname,
        '、いっしょに出かけましょう。',
      ]);
      await kitaru.say_and_wait([
        'ちょうど、ずっと ',
        callname,
        ' と行きたい場所があったんです。',
      ]);
      era.drawLine({ content: '郊外の墓地 奥へ続く小道' });
      await era.printAndWait('バスに乗り、郊外の墓地へ来た。');
      await era.printAndWait([
        '奥へ進むほど、いつも陽気な ',
        kitaru.get_colored_name(),
        ' も静まり、周囲と同じように粛然となる。',
      ]);
      await kitaru.say_and_wait('着きました。ここです。');
      await era.printAndWait(
        '柏の木の下、さほど小さくない墓碑の前で、フクキタルは足を止めた。',
      );
      await era.printAndWait([
        '碑の上の白黒写真の',
        kitaru.uma_sex_title,
        'は、',
        kitaru.get_colored_name(),
        ' にどこか似ている。ただし、より大人びた長い髪を残していた。',
      ]);
      await kitaru.say_and_wait([
        'ん……私の',
        kitaru.elder_sibling_sex_title,
        'です。',
      ]);
      await kitaru.say_and_wait(
        '前は、あまり来たくなくて。お母さんが頼んでも、断りがちでした。',
      );
      await kitaru.say_and_wait(
        '今思うと、無意識に怖がっていたんだと思います。',
      );
      await era.printAndWait([kitaru.sex, 'はひとりで話し続けた。']);
      era.printButton('「ひとりにしてほしいか？」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ！');
      await kitaru.say_and_wait('いいです！');
      await kitaru.say_and_wait([callname, ' が、ここにいてくれれば！']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の声には、わずかな震えがある。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は見た。',
        kitaru.sex,
        'の両手は固く握られ、爪が掌に食い込みそうだ。',
      ]);
      await era.printAndWait([
        'それから、',
        kitaru.sex,
        'はゆっくり前へ出た。',
      ]);
      await kitaru.say_and_wait([
        'あの、',
        kitaru.elder_sibling_sex_title,
        '。今の ',
        callname,
        ' を連れて、会いに来ました……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.get_colored_name(),
        ' がその墓へ語りかけるのを聞いた。荘厳というより、どこか気楽で、',
        kitaru.sex,
        'の',
        kitaru.elder_sibling_sex_title,
        'がまだ生きているような口ぶりだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' との出会いから、日本ダービー、神戸新聞杯の勝利まで。',
        you.get_colored_name(),
        ' は、',
        kitaru.get_colored_name(),
        ' が亡くなった',
        kitaru.elder_sibling_sex_title,
        'へ、二人の歩みを伝えているのを聞いた。',
      ]);
      era.drawLine({ content: 'しばらくして' });
      await kitaru.say_and_wait('来週は菊花賞です！');
      await kitaru.say_and_wait(
        'ちゃんと、全部思い出すのに、ずいぶん時間がかかりました……',
      );
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        '、約束どおり、勝ちます！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '菊花賞を迎えて';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('やっと……約束どおり……ここまで来ました！');
      await kitaru.say_and_wait('神社も仏閣も多い、京都で！');
      await kitaru.say_and_wait('菊を象徴とする、大事なレース！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' が 3,000 メートルに挑むのは初めてだ。煉獄のような長距離。',
      ]);
      await era.printAndWait(['当然、', kitaru.sex, 'は少し緊張している。']);
      await era.printAndWait([
        kitaru.sex,
        'と菊花賞を目標に据えたときから、',
        you.get_colored_name(),
        ' はその執念を感じてきた。',
        kitaru.elder_sibling_sex_title,
        'との約束、',
        you.get_colored_name(),
        ' との約束。それが、',
        kitaru.get_colored_name(),
        ' という名の',
        kitaru.teen_sex_title,
        'を、ここまで連れてきた。',
      ]);
      await era.printAndWait(['いま、', kitaru.sex, 'の目標は目の前にある。']);
      await kitaru.say_and_wait(['あの、', callname, '！']);
      era.printButton('「どうした」', 1);
      await era.input();
      await kitaru.say_and_wait('手、握ってもらえますか？');
      await era.printAndWait([
        kitaru.teen_sex_title,
        'は少し照れくさそうに、',
        you.get_colored_name(),
        ' を見た。',
      ]);
      await era.printAndWait([
        'いきなりの頼みだ。また ',
        kitaru.get_colored_name(),
        ' が、その場で思いついた儀式なのだろう。',
      ]);
      era.printButton('手を伸ばす', 1);
      await era.input();
      await era.printAndWait([
        kitaru.uma_sex_title,
        '特有の、少し高い体温が掌から伝わる。',
        you.get_colored_name(),
        ' は気づいた。',
        kitaru.get_colored_name(),
        ' の浅い呼吸が、かなり穏やかになった。',
      ]);
      await kitaru.say_and_wait(
        'あの……今、こんな話をするときじゃないかもしれません。',
      );
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        'が亡くなったあと、',
        kitaru.sex,
        'の代わりに菊花賞を走る、なんて約束は、私には高望みでした。',
      ]);
      await kitaru.say_and_wait([
        'それが、ここまで来られるなんて。',
        callname,
        ' は私にとって、本当に、本当に、天の使いと変わりません！',
      ]);
      await kitaru.say_and_wait('ふう……');
      await kitaru.say_and_wait('えへへ！');
      await kitaru.say_and_wait('やっぱり、口に出すと楽になります！');
      await kitaru.say_and_wait(['では、', callname, '、行ってきます！']);
      await kitaru.say_and_wait(
        '待っていてください……私たちで、神様たちに勝利を捧げますから！',
      );
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '運命の中途';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {boolean} win_kobe_hai マチカネフクキタルが神戸新聞杯に勝ったか
     */
    const f = async (kitaru, you, callname, win_kobe_hai) => {
      await era.printAndWait('馬群は第4コーナーへ。レースも終盤だ。');
      await era.printAndWait([
        'だが ',
        kitaru.get_colored_name(),
        ' の姿はまだ馬群に隠れ、',
        you.get_colored_name(),
        ' は、ちらりと見える明るいオレンジから、おおよその位置を推測するしかない。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の優れた爆発力を活かす差しは、そもそもタイミングが厳しい。勝ちと負けは、紙一重だ。',
      ]);
      await era.printAndWait([
        'このレースは、',
        kitaru.get_colored_name(),
        ' にとって、大凶になるのだろうか。',
      ]);
      await you.say_as_passer_by_and_wait(
        '実況',
        '第4コーナーを過ぎ、あとは最後の直線……',
      );
      await era.printAndWait(['塞がれたか。だが、ゴールはもう目の前だ。']);
      await era.printAndWait([
        '見て、整えて、決めて、動く。いまこの循環を完遂できるのは、渦の中心にいる ',
        kitaru.get_colored_name(),
        ' 本人だけだ。観客席の ',
        you.get_colored_name(),
        ' には、手の出しようがない。',
      ]);
      await era.printAndWait(['祈りたい。そんな考えが、ふと浮かぶ。']);
      await era.printAndWait([
        'あるいは、いまの ',
        you.get_colored_name(),
        ' の無力は、',
        kitaru.elder_sibling_sex_title,
        'が夭折した日の ',
        kitaru.get_colored_name(),
        ' と同じなのかもしれない。',
      ]);
      await you.say_and_wait(
        'いや……いま、トレーナーとしてできることがある。',
        true,
      );
      era.printButton('「フク！！！」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、声が枯れるまで叫んだ。',
      ]);
      await era.printAndWait([
        '高速で走る ',
        kitaru.get_colored_name(),
        ' に、',
        you.get_colored_name(),
        ' の声が届いたかはわからない。だが勝利の天秤は、たしかに',
        kitaru.sex,
        'の側へ傾いた。',
      ]);
      await era.printAndWait([
        '聖人が海を割ったように、あるいはアラビアの少年が呪文で扉を開いたように、あのオレンジの稲妻が馬群を裂いた。',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        '——マチカネ！ ',
        kitaru.get_colored_name(),
        '！ 福は、まだ来るのか！？！？',
      ]);
      if (win_kobe_hai) {
        await you.say_as_passer_by_and_wait(
          '実況',
          'ゴールイン！ 神戸に続き！！！ 福は、菊の舞台にも訪れた！！！',
        );
      } else {
        await you.say_as_passer_by_and_wait('実況', 'ゴールイン！');
      }
      era.drawLine({ content: '京都競馬場 菊花賞のあと' });
      await kitaru.say_and_wait([callname, '！！']);
      await kitaru.say_and_wait('私……勝ちました！ 勝ったんです……！');
      await era.printAndWait([
        '控え室で、幸せのあまり ',
        kitaru.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の胸に飛び込み、きつく抱きついた。',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        'が長距離を走ったあとの熱い体温と、胸の弾む柔らかさが、汗で湿ったセーラー服越しに、抱擁ごと ',
        you.get_colored_name(),
        ' へ伝わってくる。',
      ]);
      if (era.get('love:56') >= 50) {
        await kitaru.say_and_wait('これも全部、運命の人のおかげです！');
        await era.printAndWait([
          'そう言いながら、',
          kitaru.sex,
          'は顔を上げ、琥珀のような瞳で ',
          you.get_colored_name(),
          ' を見た。',
        ]);
        await kitaru.say_and_wait('そうです！');
        await kitaru.say_and_wait('運命の人にも、ご褒美をあげないと！');
        await era.printAndWait([
          'そして、',
          you.get_colored_name(),
          ' が目を見開くなか、',
          kitaru.sex,
          'は少しつま先立ち、二人の唇が重なった。',
        ]);
        await era.printAndWait([
          'オカルト系',
          kitaru.teen_sex_title,
          'の冷たい体香と、空気に散った微かな汗の匂いが、',
          you.get_colored_name(),
          ' の鼻を満たす。',
        ]);
        await era.printAndWait('舌先が触れ、また触れ合う。');
        await era.printAndWait([
          '唇が離れたあと、',
          you.get_colored_name(),
          ' は見た。',
          kitaru.teen_sex_title,
          'の小さな舌が唇の端を舐め、唾液をすっと吸い込んだ。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が ',
          kitaru.get_colored_name(),
          ' のこんな積極を見るのは、初めてだ。',
        ]);
      }
      await era.printAndWait([
        '菊花賞に勝った。',
        kitaru.get_colored_name(),
        ' という名の',
        kitaru.teen_sex_title,
        'は、自分の執念を果たし、幸福を追う運命の道で、大きく一歩を踏み出した。',
      ]);
      await era.printAndWait([
        'だが',
        kitaru.sex,
        'の次は、どこへ向かうのだろう。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_41: (() => {
    const title = '神化';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, suzuka, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        kitaru.get_colored_name(),
        ' は事務所で、菊花賞のあとの、貴重な休みを過ごしている。',
      ]);
      await era.printAndWait(
        '菊花賞が終わり、張り詰めた弦は、ようやく緩んだ。',
      );
      await kitaru.say_and_wait([callname, '、次のレースは何にしますか？']);
      era.printButton('「フクは、走りたいレースがあるか？」', 1);
      await era.input();
      await kitaru.say_and_wait('ん……');
      await era.printAndWait([
        kitaru.elder_sibling_sex_title,
        'の影から出て、菊花賞を走る願いも果たした。なのに今の ',
        kitaru.get_colored_name(),
        ' は、かえって迷っているように見える。',
      ]);
      await era.printAndWait([
        'ソファにぐったり寝ていた ',
        kitaru.get_colored_name(),
        ' が、よろよろと立ち上がった。',
      ]);
      await era.printAndWait([
        '事務所のソファの上を、',
        kitaru.uma_sex_title,
        'らしい優れたバランスで歩き、白い布に包まれた小さな足が交互にソファを踏む。',
      ]);
      if (era.get('cflag:2:招募状态') === 1) {
        await era.printAndWait('顎に手を当て、くるくると回っている。');
        await era.printAndWait([
          '考えるときのこの癖を見て、',
          you.get_colored_name(),
          ' はもう一人の担当、',
          suzuka.get_colored_name(),
          ' を思い出した。',
        ]);
      }
      await kitaru.say_and_wait(
        '強いて言えば、特に走りたいレースはない、かもです？',
      );
      await kitaru.say_and_wait(
        'このままジャパンカップと有馬記念、両方取ります？',
      );
      era.printButton('「それは盛りすぎだろ！」', 1);
      await era.input();
      await kitaru.say_and_wait(['じゃあ、', callname, ' の指示に従います？']);
      await era.printAndWait([
        'ずいぶん落ち着いて言う。レースが',
        kitaru.sex,
        'と無関係であるかのような口ぶりだ。',
      ]);
      await kitaru.say_and_wait('はぁ……');
      await era.printAndWait([
        'あくびをして、',
        kitaru.get_colored_name(),
        ' という名の',
        kitaru.uma_sex_title,
        'は、事務所の真ん中に山となった開運グッズへ、そのまま後ろへ倒れ込んだ。',
      ]);
      await era.printAndWait('がさっ！');
      await era.printAndWait([
        '中身のわからない紙箱がいくつか、寝転んだ ',
        kitaru.get_colored_name(),
        ' に押しのけられる。',
      ]);
      await era.printAndWait([
        '少し身を直し、レース後に自分で買い込んだ雑貨の山に気持ちよく収まると、',
        kitaru.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      await kitaru.say_and_wait(
        '運勢が極まった私なら、必ず勝利を捧げられます！',
      );
      await kitaru.say_and_wait(
        '早く指示をください！ 私に幸運をくれる運命の人！',
      );
      await era.printAndWait([
        '刀山火海でも、最強の開運グッズである ',
        you.get_colored_name(),
        ' が大吉だと言えば、',
        kitaru.get_colored_name(),
        ' は迷わず飛び込むのではないか。',
      ]);
      era.printButton('「来年の……金鯱賞？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        '来年の春、ですか。',
        callname,
        '、ずいぶん遠いレースを選びましたね。',
      ]);
      await era.printAndWait([
        '開運グッズの山に寝たまま、',
        kitaru.teen_sex_title,
        'は怠そうな声で答え、それから小さく鼾を立て、眠ってしまった。',
      ]);
      await era.printAndWait([
        'たしかに遠いレースだ。だが、今年これだけ過密日程だった ',
        kitaru.get_colored_name(),
        ' には、一度休んでからのほうがいい。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = '神楽';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {boolean} win_kiku_sho マチカネフクキタルが菊花賞に勝ったか
     */
    const f = async (kitaru, you, callname, win_kiku_sho) => {
      const ret = [];
      await era.printAndWait([
        '去年と違い、今年の ',
        you.get_colored_name(),
        ' は事前に ',
        kitaru.get_colored_name(),
        ' から招かれ、',
        kitaru.couple_title,
        'の家の神社へ向かった。',
      ]);
      await era.printAndWait([
        'この時間、神社の人はまだ多くない。',
        you.get_colored_name(),
        ' は石段を踏み、またあの朱色の鳥居をくぐった。',
      ]);
      await era.printAndWait([
        'そして前回と同じく、遠くから近くへ、',
        you.get_colored_name(),
        ' の世界は純白に包まれた。',
      ]);
      era.drawLine({ content: '？？？' });
      era.printButton('目を開ける', 1);
      await era.input();
      await era.printAndWait([
        '周囲には何もない。柔らかい白い光が、さまざまな角度から、見るように ',
        you.get_colored_name(),
        ' を照らしている。',
      ]);
      era.printButton('顔を上げる', 1);
      await era.input();
      await era.printAndWait(
        '真っ黒な逆ピラミッドが、虚空に突如として浮かんでいる。',
      );
      era.println();
      if (win_kiku_sho) {
        await typing(
          '良好／期待どおり。' +
            kitaru.sex +
            'の補助者／伴侶となる資格／能力あり',
          kitaru.color,
        );
        era.println();
        await typing('汝の旨意／願いは何か？', kitaru.color);
      } else {
        await typing('期待以下／応答未達。補助者／伴侶は想定外', kitaru.color);
        era.println();
        await typing(
          'パラメータ／選択肢はなお最適化／置換が必要',
          kitaru.color,
        );
      }
      era.println();
      era.printButton('高揚する気配（全ステータス+7）', 1);
      era.printButton('脈打つ気配（パワー+30）', 2);
      era.printButton('かすかな裂け目（スキルPt+30）', 3);
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await kitaru.print_and_wait('熱気が高まる……');
          break;
        case 2:
          await kitaru.print_and_wait('力が湧き、精神が鼓舞される……');
          break;
        case 3:
          await kitaru.print_and_wait('雲が裂ける——壁が軋む——古傷が痛む……');
      }
      if (
        era.get('love:56') >= 49 &&
        you.sex_code !== 0 &&
        kitaru.sex_code !== 1
      ) {
        await kitaru.say_and_wait('ねえ……');
        await kitaru.say_and_wait('ねえ……');
        await kitaru.say_and_wait([callname, '！']);
        era.printButton('目を開ける', 1);
        await era.input();
        await kitaru.say_and_wait('どうして鳥居に寄りかかって寝てるんですか？');
        await kitaru.say_and_wait('風邪ひきますよ！');
        era.printButton('顔を上げる', 1);
        await era.input();
        await era.printAndWait([
          '巫女装束の ',
          kitaru.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' の手を取り、微笑んでいる。黄昏の陽が、明るいオレンジの短い髪のあいだで踊っている。',
        ]);
        await era.printAndWait([
          '今年は暖冬なのだろう。',
          kitaru.uma_sex_title,
          '本来の高い体温もあって、この巫女装束は',
          kitaru.sex,
          'には少し厚いかもしれない。',
        ]);
        await era.printAndWait([
          '巫女の白い上衣に、下は鮮やかな緋の袴。白いニーソックスが、',
          kitaru.sex,
          'の柔らかい脚を描いている。',
        ]);
        await era.printAndWait(
          '分かれた広い振り袖が風に揺れ、覗く腋と白い胸の側面が、ときどき見える。',
        );
        await era.printAndWait([
          '衣をはっきりと丘のように持ち上げた胸が、',
          kitaru.sex,
          'が ',
          you.get_colored_name(),
          ' の腕を引くたび、遠慮なく揺れる。',
        ]);
        await era.printAndWait([
          kitaru.uma_sex_title,
          '自身の活力と、伝統衣装の荘厳が、',
          kitaru.get_colored_name(),
          ' という名の',
          kitaru.uma_sex_title,
          'の上で、きれいに溶け合っている。',
        ]);
        era.printButton('「きれいだ……」', 1);
        await era.input();
        await kitaru.say_and_wait('えっ！');
        await kitaru.say_and_wait(['うふふ！ ', callname, '、惚れました？']);
        await kitaru.say_and_wait('運命の人のために、わざわざ選んだんですよ！');
        await kitaru.say_and_wait(
          'では、今夜の神楽、楽しみにしていてください！',
        );
        era.drawLine({ content: 'フクキタル家の神社 拝殿の前' });
        await era.printAndWait([
          '新年の神社。',
          kitaru.get_colored_name(),
          ' の一年の活躍で、参拝客も増えている。',
        ]);
        await era.printAndWait(
          '十数年前の事故で忘れられかけていたこの神社が、いままた息を吹き返している。',
        );
        await era.printAndWait(
          '人々の喧騒は一度頂点に達し、それから潮が引くように、ゆっくり散っていく。',
        );
        await era.printAndWait(
          '万籟が静まったとき、タイミングを見計らったように遠くで太鼓が鳴り、神楽が始まった。',
        );
        await era.printAndWait('楽器の合わせは、ちょうどいい。');
        await era.printAndWait(
          '太鼓は関西の大男の咆哮のように、胸を熱くする。',
        );
        await era.printAndWait(
          '三味線は、月が東山に出でて斗牛のあいだを徘徊するように、軽く旋回する。',
        );
        await era.printAndWait(
          '巫女の振る神楽鈴が、そのあいだを飾る。澄んで、遠く、空霊だ。',
        );
        await era.printAndWait([
          'その音のなか、神殿の正中にいるのは ',
          kitaru.get_colored_name(),
          '。',
          you.get_colored_name(),
          ' の担当、',
          kitaru.get_colored_name(),
          ' だ。',
        ]);
        await era.printAndWait([
          '旋律に乗り、',
          kitaru.sex,
          'は荘厳で冷たい空間を舞う。月光が天井から落ち、淡く清らかな化粧の ',
          kitaru.get_colored_name(),
          ' の顔を照らす。',
        ]);
        await era.printAndWait([
          kitaru.sex,
          'は神楽鈴を振り、神を招いて共に舞う。',
        ]);
        await era.printAndWait(
          '一曲が終わり、台上の現人神は正中に立ち、四方の人々へ礼をした。',
        );
        era.drawLine({ content: 'しばらくして' });
        await kitaru.say_and_wait('ふう……やっと終わりました！');
        await kitaru.say_and_wait([
          '今日は手伝ってくれて、ありがとうございます、',
          callname,
          '！',
        ]);
        await era.printAndWait([
          '前回とだいたい同じで、',
          you.get_colored_name(),
          ' たちは明け方まで働き、神社がまた元の閑散に戻るまでいた。',
        ]);
        await era.printAndWait([
          'だが前回とは違う……疲れた ',
          kitaru.get_colored_name(),
          ' が、',
          you.get_colored_name(),
          ' の肩に寄りかかっている。',
        ]);
        await era.printAndWait([
          '布がやはり少し厚かったのだろう。',
          kitaru.get_colored_name(),
          ' の露出した白い肌は香る汗に濡れ、少し開いた唇からも熱い息が漏れる。',
        ]);
        await era.printAndWait([
          '巫女装束が',
          kitaru.sex,
          'のいい線を描き、覗く胸の側面は忙しさで赤らみ、呼吸に合わせて起伏する。',
          you.get_colored_name(),
          ' の手を、触ってみろと誘っているように見える。',
        ]);
        era.printButton('耐える（好感+5，恋慕+1）', 1);
        era.printButton('フクキタルの腰を抱く', 2, {
          disabled: era.get('love:56') < 75,
        });
        ret.push(await era.input());
        if (ret[1] === 1) {
          await era.printAndWait([
            '欲望を押さえ、',
            kitaru.get_colored_name(),
            ' に別れを告げると、',
            you.get_colored_name(),
            ' はトレセンへ戻る車に乗った。',
          ]);
        } else {
          await kitaru.say_and_wait(['えっ！ えっ！ ', callname, '……んっ……']);
          await era.printAndWait([
            '身をかがめ、',
            kitaru.sex,
            'の唇を奪う。',
            kitaru.get_colored_name(),
            ' の喉から、弱い呻きが漏れる。',
          ]);
          await kitaru.say_and_wait('くっ……くっ……');
          await kitaru.say_and_wait('ふはっ……');
          await era.printAndWait([
            '唇と舌が絡み、',
            you.get_colored_name(),
            ' に抱かれた ',
            kitaru.get_colored_name(),
            ' は耐えきれないように身をよじる。唾液が口角から神社の石畳へ落ちる。',
          ]);
          await era.printAndWait([
            'ついさっきまで人々に祝詞を捧げていた口へ、欲深く舌を入れる。迎えるのは、まだ拙い',
            kitaru.sex,
            'の応えだ。',
          ]);
          await kitaru.say_and_wait('ひゃっ……');
          await era.printAndWait('腕のなかの担当が、みだらな声を出した。');
          await era.printAndWait([
            '左手を巫女装束の内側へ入れ、',
            kitaru.sex,
            'の乳房の縁を軽く摘んで弄ぶ。',
          ]);
          await era.printAndWait([
            'それから掌全体を載せ、小さな乳肉が ',
            you.get_colored_name(),
            ' の揉みで形を変える感触を味わう。',
          ]);
          await kitaru.say_and_wait('はぁ……はあっ！');
          await era.printAndWait([
            '指先で柔らかい乳輪を円く撫で、ときどき軽く突くたび、',
            kitaru.get_colored_name(),
            ' はそれに合わせて可愛い声を出す。',
          ]);
          await kitaru.say_and_wait('やあ！');
          await era.printAndWait([
            '舌吻を続けたまま、右手を',
            kitaru.sex,
            'の太ももへ滑らせ、指腹がストッキングの布を擦り、小さな音を立てる。',
          ]);
          await era.printAndWait([
            '一歩ずつ、',
            kitaru.sex,
            'の太ももを撫で上げ、手は温かい裾の下へ入る。',
          ]);
          await era.printAndWait([
            '濡れている。',
            you.get_colored_name(),
            ' には、それがわかる。',
          ]);
          await era.printAndWait([
            '濡れた下着に沿った陰阜を撫でただけで、',
            kitaru.get_colored_name(),
            ' はさらにみだらな声を上げた。',
          ]);
          await era.printAndWait([
            '神社の石畳の真ん中で、こんなことをしている。背徳の刺激が、',
            you.get_colored_name(),
            ' の欲をさらに煽る。',
          ]);
          await kitaru.say_and_wait('や、だめ……ここで、は……');
          await era.printAndWait([
            kitaru.teen_sex_title,
            'の、拒否するようで誘う言葉だ。嫌だと言いながら、揃えていた脚は少し開き、',
            you.get_colored_name(),
            ' の手がさらに奥へ入るのを許している。',
          ]);
          await era.printAndWait(
            '指を入れると、肉が自ら吸い付いてくる。節が動くたび、ねっとりした音がする。',
          );
          await kitaru.say_and_wait('んっ！');
          await era.printAndWait([
            '強い刺激に、',
            kitaru.get_colored_name(),
            ' は浅い息を繰り返し、両脚で ',
            you.get_colored_name(),
            ' の腕を挟み、電流が走ったように震える。',
          ]);
          await kitaru.say_and_wait(['やあっ、', callname, '！']);
          era.printButton('「そんなに気持ちいいか？」', 1);
          await era.input();
          await kitaru.say_and_wait('わ、わかりません……んあっ、はあっ……');
          await era.printAndWait(
            '蜜液が溢れ、太ももの付け根を伝い、白いニーソックスにみだらな模様を描く。',
          );
          await kitaru.say_and_wait(['あっ、んん、やあ、', callname, '！']);
          await kitaru.say_and_wait('来ます！');
          await kitaru.say_and_wait([
            'イきます！ ',
            you.get_colored_actual_name(),
            '！',
          ]);
          await era.printAndWait(
            '痙攣のような震えのあと、愛液が下着を越えて溢れ、神社の石畳に明らかな水溜まりができた。',
          );
          era.printButton('「続けるか？」', 1);
          await era.input();
          await kitaru.say_and_wait('えっ……うん！');
          await era.printAndWait('次へ進むときだ。');
          await era.printAndWait([
            you.get_colored_name(),
            ' は',
            kitaru.sex,
            'を、道傍の太い注連縄が巻かれた大木へ押しつけた。そのあいだも',
            kitaru.sex,
            'を弄る手は止まらず、水跡が石畳の中央から木の前まで途切れ途切れに続く。',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の均整の取れた太ももを、折るように持ち上げ、濡れた隙間にペニスを当て、一気に入れた。',
          ]);
          await kitaru.say_and_wait('はあっ！');
          await era.printAndWait(
            '巫女の呻きははっきり聞こえ、無人の神社に響く。',
          );
          await era.printAndWait([
            '突くたび、',
            kitaru.get_colored_name(),
            ' の体が上下する。広い振り袖をつけた腕が翻り、さっきの神楽のような舞いになる。',
          ]);
          await era.printAndWait([
            'それから快感を求めて ',
            you.get_colored_name(),
            ' に抱きつき、肉棒がさらに奥の柔らかい肉まで届く。',
          ]);
          await kitaru.say_and_wait([
            'はぁ……',
            you.get_colored_actual_name(),
            '！',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' は力が抜け、自分を欲しがるトレーナーに、かろうじてしがみつく。',
          ]);
          await era.printAndWait('ぱん！ ぱん！ ぱん！');
          await era.printAndWait(
            '荘厳で清らかな神社のなかに、みだらな水音が響く。',
          );
          await era.printAndWait(
            'ぶつかるたび、体内の愛液が巫女の背にする古木へ注がれる。',
          );
          await era.printAndWait([
            'この淫祀にまだ遠慮のあった ',
            kitaru.get_colored_name(),
            ' も、',
            you.get_colored_name(),
            ' の攻めに、やがて腰を振って耽るようになった。',
          ]);
          await kitaru.say_and_wait('気持ちいいです！ んんんっ……！');
          await era.printAndWait([
            '露天の神社で、',
            you.get_colored_name(),
            ' と ',
            kitaru.get_colored_name(),
            ' は獣のように快感を求め合う。',
          ]);
          await era.printAndWait(
            '神聖な神社で、これほど穢れた一幕が演じられている。',
          );
          await era.printAndWait([
            'あるいは、この背徳のせいだろう。',
            kitaru.get_colored_name(),
            ' の内壁は、想像を超えて締まる。',
          ]);
          await kitaru.say_and_wait('おっ……！ い……いです……！');
          await era.printAndWait([
            '内側を擦るたび、',
            you.get_colored_name(),
            ' のペニスは強い刺激を受ける。',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' も同じらしい。腰を引こうとするたび、腔内の柔らかい肉が ',
            you.get_colored_name(),
            ' の肉棒に絡みつく。',
          ]);
          await kitaru.say_and_wait('んあっ……い、いきます……！');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の背が反り、蜜穴がいきなり締まり、',
            you.get_colored_name(),
            ' に大きな快感をもたらす。',
          ]);
          await era.printAndWait('ぐちゅ——ぐちゅ——');
          await era.printAndWait([
            you.get_colored_name(),
            ' の肉棒が',
            kitaru.sex,
            'の子宮口に当てて精を注ぎ、すでに絶頂していた ',
            kitaru.get_colored_name(),
            ' を、さらに震えさせる。',
          ]);
          await kitaru.say_and_wait('んぐうううっ！！！');
          await era.printAndWait('声を抑えず、みだらな巫女はそのまま叫んだ。');
          await era.printAndWait(
            '愛液が接合部から溢れ続け、神聖な古木の下に、背徳の欲でできた水溜まりを作る。',
          );
          await era.printAndWait(
            '焦点の合わない星の瞳が上を向き、香る舌が吐かれ、この神社の神へ、祭祀の終わりを告げる。',
          );
        }
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' が我に返ったとき、すでにトレセンへ戻る終電に乗っていた。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = 'バレンタインの余所者';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} teem_count 担当の人数
     */
    const f = async (kitaru, you, callname, teem_count) => {
      const ret = [];
      await era.printAndWait(
        'バレンタインのトレセン学園は、いつものように、微かな桃色に包まれている。',
      );
      await era.printAndWait([
        '空気は汁を含んだように甘く、チョコレートの濃い匂いと、',
        kitaru.uma_sex_title,
        'たちが無意識に放つホルモンの匂いが満ちている。',
      ]);
      await era.printAndWait(
        'バレンタインの主役は、もちろん各トレーナーだ。学内どころか、世間の暗黙にもなっている。',
      );
      era.printButton('「妙な話だ」', 1);
      await era.input();
      if (teem_count >= 2) {
        await era.printAndWait([
          '今日一日、担当たちから ',
          you.get_colored_name(),
          ' へ贈られたチョコレートを、かなり味わった。担当そのもの、という場合もあった。',
        ]);
        await era.printAndWait([
          'だが ',
          kitaru.get_colored_name(),
          ' は、現れなかった。',
        ]);
      } else {
        await era.printAndWait([
          'だが、',
          you.get_colored_name(),
          ' はその例外らしい。',
        ]);
        await era.printAndWait([
          '今日一日、',
          kitaru.get_colored_name(),
          ' の姿はなかった。',
        ]);
      }
      if (era.get('love:56') >= 75) {
        await era.printAndWait([
          '夜まで待っても、',
          kitaru.get_colored_name(),
          ' からの連絡はなかった。',
        ]);
        await era.printAndWait([
          'メール……なし。電話……出ない。',
          you.get_colored_name(),
          ' はルームメイトにも訊いたが、',
          kitaru.sex,
          'は今日の予定を誰にも話していなかった。',
        ]);
        await era.printAndWait('少し落ち込み、家へ戻った。');
        era.drawLine({ content: you.name + 'の自宅' });
        await era.printAndWait(
          'ソファに寄りかかり、電子時計の数字が0時へ近づくのを黙って見ている。',
        );
        await era.printAndWait([
          '少し、がっかりしている……ふと、',
          kitaru.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' に贈った開運グッズを目にしたとき、',
          you.get_colored_name(),
          ' はそう思った。',
        ]);
        era.printButton('聞き耳判定', 1);
        await era.input();
        era.println();
        const result = get_random_value(65, 90);
        if (result > 60) {
          await era.printAndWait([
            '出目：',
            result,
            '/??',
            { isDivider: true },
            you.get_colored_name(),
            ' の聞き耳判定: 失敗',
          ]);
          await era.printAndWait(
            '何も聞こえなかった。天気のせいばかりか、眠気が来る。',
          );
        }
        await era.printAndWait([
          you.get_colored_name(),
          ' がソファで眠りかけたとき、窓のほうで掛け金のような音がして、それから……',
        ]);
        await kitaru.say_and_wait('ふあっ！');
        await era.printAndWait('目の前に、見慣れた栗色の影が現れた。');
        await era.printAndWait([
          'いつのまにか、',
          kitaru.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' の前にいる。それ以上に ',
          you.get_colored_name(),
          ' をざわつかせたのは、',
          kitaru.sex,
          'のひどい姿勢だ。',
        ]);
        await era.printAndWait([
          'オレンジ髪の',
          kitaru.teen_sex_title,
          'が ',
          you.get_colored_name(),
          ' の腰に跨がり、スカートに隠れた尻が ',
          you.get_colored_name(),
          ' のズボンの布を擦る音まで聞こえる。',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' いつもの、距離感のない行動、なのだろう？',
        ]);
        await kitaru.say_and_wait([callname, '、ハッピーバレンタイン！']);
        await era.printAndWait(
          '声には激しい動きのあとの疲れがあり、今の言葉も息が上がっていた。一路、走ってきたらしい。',
        );
        await era.printAndWait([
          '制服にも、オレンジの髪にも、茶色い汚れがついている。',
          kitaru.sex,
          'から漂う濃い香りからして、作っている最中にこぼしたチョコレートだろう。',
        ]);
        await era.printAndWait([
          kitaru.sex,
          'は背中から、しわの寄った箱を出し、',
          you.get_colored_name(),
          ' の胸の上に置いた。',
        ]);
        await kitaru.say_and_wait('見てください！');
        await kitaru.say_and_wait(
          '一日かけて、あなたのために摘んできた星ですよ！',
        );
        await era.printAndWait(
          '箱を開けると、十二星座を象ったチョコレートがぎっしり。一人で食べるには、どう見ても多すぎる。',
        );
        era.printButton('「一人で全部食べるのか？」', 1);
        await era.input();
        await kitaru.say_and_wait(
          'だめですよ～ こういうのは、自分の星座だけ食べるから面白いんです！',
        );
        await kitaru.say_and_wait('見てください、私はふたご座です。');
        await kitaru.say_and_wait(
          '北河二と北河三を足すと、ほかのちょうど二倍なんです！',
        );
        await kitaru.say_and_wait('ん……やっぱり、初めてだから、量の加減が……');
        await kitaru.say_and_wait(
          '間に合ってよかったです。今日のバレンタイン、逃すところでした！',
        );
        era.printButton('「お疲れさま！」', 1);
        await era.input();
        await kitaru.say_and_wait('ですよね……なので！');
        await kitaru.say_and_wait('あの～ お願いがあるんです！');
        await kitaru.say_and_wait('よかったら、二人で食べませんか？');
        await kitaru.say_and_wait('つまり……仲のいい人が、半分ずつ、みたいな。');
        await era.printAndWait([
          '言葉が師弟関係から外れていくほど、',
          kitaru.get_colored_name(),
          ' の頬も赤くなっていく。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、胸の上に開かれたその箱を見て、欲が底から湧くのを感じた。',
        ]);
        era.printButton('「ご褒美がほしいか？」', 1, {
          disabled: era.get('love:56') < 75,
        });
        era.printButton('チョコレートだけ食べる（体力+300）', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await kitaru.say_and_wait('えっ！？');
          await era.printAndWait([
            'そう訊きながら、右手で',
            kitaru.sex,
            'の腰の柔らかい肉を摘んだ。',
          ]);
          await era.printAndWait([
            'いまの姿勢が騎乗位と大差ないと、遅れて気づいた',
            kitaru.teen_sex_title,
            'の顔はさらに赤く、尻尾がわざとらしく ',
            you.get_colored_name(),
            ' の脚を何度か叩く。',
          ]);
          await era.printAndWait('それから、蚊の鳴くような返事がした。');
          await kitaru.say_and_wait('……ほしいです');
          era.printButton('「もっと大きい声で！」', 1);
          await era.input();
          await kitaru.say_and_wait('ん……チョコ、まだ食べてないです……');
          await era.printAndWait([
            '答えを聞き、',
            you.get_colored_name(),
            ' は右手を離した。',
          ]);
          await era.printAndWait('ぱん！');
          await kitaru.say_and_wait('ひゃっ！');
          await era.printAndWait([
            you.get_colored_name(),
            ' は指を揃え、掌にして、軽からず重からず、すばやく',
            kitaru.teen_sex_title,
            'の上がった尻を叩いた。',
          ]);
          await era.printAndWait('白い尻肉が揺れ、痺れる快感が広がる。');
          await era.printAndWait([
            'それから、',
            kitaru.teen_sex_title,
            'が気を取られた隙に、',
            you.get_colored_name(),
            ' は両手を伸ばし、跨がる',
            kitaru.teen_sex_title,
            'の両手と組んだ。',
          ]);
          era.printButton('「じゃあ、食べさせてくれ」', 1);
          await era.input();
          await kitaru.say_and_wait('えっ！ でも……');
          await era.printAndWait([
            kitaru.teen_sex_title,
            'の骨のないような手が ',
            you.get_colored_name(),
            ' に握られている以上、手で ',
            you.get_colored_name(),
            ' に食べさせることはできない。',
          ]);
          await kitaru.say_and_wait('わかりました……');
          await era.printAndWait('占い師だけあって、察しはいい。');
          await era.printAndWait([
            kitaru.sex,
            'は可愛い子犬のように、ゆっくり身をかがめた。',
          ]);
          await era.printAndWait([
            'チョコレートを衔え、唇をすぼめて ',
            you.get_colored_name(),
            ' の口元へ運ぶ。',
          ]);
          await era.printAndWait('かちゃ。');
          await era.printAndWait(
            'チョコレートは真ん中で割れ、言ったとおり二人で一つずつになった。',
          );
          await era.printAndWait([
            '砕けた欠片が ',
            you.get_colored_name(),
            ' の体に落ち、',
            kitaru.teen_sex_title,
            'が舌先で丁寧に拭った。',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の顔は艶やかな赤に染まり、細い首を伝って、すらりとした鎖骨まで色を塗っている。',
          ]);
          await era.printAndWait([
            '半ば寝ていた ',
            you.get_colored_name(),
            ' は、',
            kitaru.teen_sex_title,
            'がチョコに気を取られた隙に、上体を起こした。',
          ]);
          await kitaru.say_and_wait('くっ！');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の口を開き、半溶けのチョコ液を舌といっしょに',
            kitaru.sex,
            'の口へ押し入れた。',
          ]);
          await kitaru.say_and_wait('んはっ……');
          await era.printAndWait([
            '舌が',
            kitaru.sex,
            'の口のなかを巡り、チョコの味と',
            kitaru.teen_sex_title,
            'の唾液を混ぜ、掻きまわすたび濃いみだらな音がする。',
          ]);
          await kitaru.say_and_wait('くっ……');
          await era.printAndWait([
            'まず北河二、それから北河三。',
            kitaru.get_colored_name(),
            ' を象った二粒は、二人の唾液と混ざった液体になって腹へ落ちた。',
          ]);
          await era.printAndWait([
            '目の前では、さっきのココア味の激しいキスで少し茫然とした ',
            kitaru.get_colored_name(),
            ' が、満足げに息をしている。',
          ]);
          await era.printAndWait(
            'ときどき吐かれる小さな舌に、溶けたチョコが残り、黒とピンクが重なっている。',
          );
          await kitaru.say_and_wait([callname, '……ほしいです！']);
        } else {
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の好意を、無駄にはできない。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は真面目にチョコレートを食べ始めた。',
          ]);
        }
      } else {
        await era.printAndWait([
          '夜になって、',
          kitaru.get_colored_name(),
          ' から電話がかかってきた。',
        ]);
        await kitaru.say_and_wait('あの、学園の近くの公園で、会えますか？');
        era.drawLine({ content: '公園' });
        await era.printAndWait([
          'しばらく待って、入口から慌てて走ってくる ',
          kitaru.get_colored_name(),
          ' が見えた。',
        ]);
        await kitaru.say_and_wait([
          'あっ！ ',
          callname,
          '、大変です！ 大変です！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、オレンジ髪の',
          kitaru.teen_sex_title,
          'が焦って駆け寄ってくるのを見た。',
        ]);
        await era.printAndWait([
          '制服に茶色い汚れがつき、近くで嗅ぐと、',
          kitaru.sex,
          'には濃いチョコレートの香りが染みついている。',
        ]);
        era.printButton('「どうした？」', 1);
        await era.input();
        await kitaru.say_and_wait(
          '星が多すぎて、星座が全部こぼれちゃいました！',
        );
        await kitaru.say_and_wait('見てください！');
        await era.printAndWait([
          kitaru.sex,
          'は背中に隠していた箱を、',
          you.get_colored_name(),
          ' へ差し出した。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は合わせて、驚いた顔を作った。',
        ]);
        era.printButton('箱を受け取る', 1);
        await era.input();
        await kitaru.say_and_wait('冗談ですよ！');
        await kitaru.say_and_wait(
          '一生懸命作った、十二星座のチョコレートです。',
        );
        await kitaru.say_and_wait('今日はバレンタインですから！');
        await kitaru.say_and_wait('占い好きなら、ちゃんとお祝いしないと！');
        await era.printAndWait([
          kitaru.sex,
          'の熱い視線の下で、',
          you.get_colored_name(),
          ' は箱を開けた。',
        ]);
        await era.printAndWait([
          '十二星座を象ったチョコレートがぎっしり。作りは少し粗いが、',
          kitaru.teen_sex_title,
          'の気持ちはたしかに入っている。ただ、一人で食べるにはどう見ても多すぎる。',
        ]);
        era.printButton('「一人で全部食べるのか？」', 1);
        await era.input();
        await kitaru.say_and_wait(
          'だめですよ～ こういうのは、自分の星座だけ食べるから面白いんです！',
        );
        await kitaru.say_and_wait('見てください、私はふたご座です。');
        await kitaru.say_and_wait(
          '北河二と北河三を足すと、ほかのちょうど二倍なんです！',
        );
        await kitaru.say_and_wait('ん……やっぱり、初めてだから、量の加減が……');
        await kitaru.say_and_wait(
          '間に合ってよかったです。今日のバレンタイン、逃すところでした！',
        );
        era.printButton('「お疲れさま！」', 1);
        await era.input();
        await kitaru.say_and_wait('ですよね……なので！');
        await kitaru.say_and_wait('あの～ お願いがあるんです！');
        await kitaru.say_and_wait('よかったら、二人で食べませんか？');
        await era.printAndWait([
          '箱のなかの、少し粗い手作りチョコを指し、',
          kitaru.teen_sex_title,
          'の頬には、かすかな赤みがある。',
        ]);
        await kitaru.say_and_wait('つまり……仲のいい人が、半分ずつ、みたいな。');
        await era.printAndWait([
          '師弟関係から外れた発言だと、本人は気づいていないらしい。',
          kitaru.get_colored_name(),
          ' は両手を合わせて ',
          you.get_colored_name(),
          ' を見ている。',
        ]);
        era.printButton('うなずく', 1);
        await era.input();
        await era.printAndWait([
          'そのあと、',
          kitaru.get_colored_name(),
          ' といっしょにチョコレートを食べた。',
        ]);
        await kitaru.say_and_wait('ふあっ！ 思ったより甘いです！');
        await kitaru.say_and_wait([callname, '、ハッピーバレンタイン！']);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_kink_sho: (() => {
    const title = '金鯱賞を迎えて';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('ふわぁ……本当に、久しぶりなレースです。');
      era.printButton('「準備はできたか？」', 1);
      await era.input();
      await kitaru.say_and_wait('まあまあ、です！');
      await kitaru.say_and_wait('ん！ 特別な感じは、ないですね……');
      await kitaru.say_and_wait(
        '幸運に憑かれた私なら、走れば勝ち続けるでしょう？',
      );
      await era.printAndWait([
        '体操服の ',
        kitaru.get_colored_name(),
        ' は、微笑んで ',
        you.get_colored_name(),
        ' を見ている。',
      ]);
      if (era.get('love:56') > 75) {
        await kitaru.say_and_wait('そうそう！');
        await kitaru.say_and_wait([
          callname,
          '！ もうひとつ、開運の儀式を付き合ってください！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が反応する前に、両手で ',
          you.get_colored_name(),
          ' の顔をそっと包んだ。',
        ]);
        await you.say_and_wait('んっ！');
        await era.printAndWait([
          '普段は歯の後ろに控えている小さな舌が、いつもと違い ',
          you.get_colored_name(),
          ' の口へ入り、',
          kitaru.get_colored_name(),
          ' の涎を送ってくる。',
        ]);
        await kitaru.say_and_wait('ちゅ～');
        await era.printAndWait(
          '出走の知らせが来るまで、途方もなく長い激しいキスは止まらなかった。',
        );
        await kitaru.say_and_wait(['よし！ ', callname, '！ 行ってきます！']);
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の頬は赤く、走ることにどれだけ気が残っているのか、',
          you.get_colored_name(),
          ' は疑わずにいられなかった。',
        ]);
      }
      era.printButton('「もっと真面目にやれよ」', 1);
      await era.input();
      await kitaru.say_and_wait(['えっ、', callname, '！']);
      await kitaru.say_and_wait('こんな幸運をくれるのが、あなただからですよ！');
      await kitaru.say_and_wait('そこに座って見てるだけでいいんです！');
      await kitaru.say_and_wait('大吉の私なら、適当に走っても勝ちます！');
      await era.printAndWait([
        '淡々として、冷たいほどだ。レースが',
        kitaru.sex,
        'とまったく無関係であるかのような態度。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の命令に従い、ただコースへ上がっているだけだ。',
      ]);
      await kitaru.say_and_wait('はいはい、もういいです！');
      await era.printAndWait([
        '菊花賞で、',
        kitaru.get_colored_name(),
        ' の執念といっしょに供えられてしまったのは、ほかにも何かあったのかもしれない。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kink_sho_win: (() => {
    const title = '憑かれた者';
    /**
     * 菊花賞勝利＋金鯱賞勝利
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        '楽に勝った。',
        callname,
        ' と約束したとおり。',
      ]);
      await kitaru.print_and_wait([
        kitaru.elder_sibling_sex_title,
        'に、今の私を報告したくなった。',
      ]);
      await kitaru.say_and_wait([
        '私、もう立派な',
        kitaru.uma_sex_title,
        'ですよ！',
      ]);
      await kitaru.print_and_wait([
        kitaru.elder_sibling_sex_title,
        'の墓の前で、私は',
        kitaru.sex,
        'の墓碑にそう言った。',
      ]);
      await kitaru.say_and_wait([
        callname,
        ' は、何か言いたいことありますか？',
      ]);
      await kitaru.print_and_wait([
        callname,
        ' が両手を合わせ、真面目な横顔からは動く唇しか見えなかった。',
      ]);
      await you.say_and_wait([
        'フクキタルの',
        kitaru.elder_sibling_sex_title,
        '、ありがとう。ずっと',
        kitaru.sex,
        'を見ていてくれて。',
      ]);
      await kitaru.print_and_wait([
        'うん、',
        kitaru.elder_sibling_sex_title,
        'は、きっと喜んでくれる。',
      ]);
      era.drawLine({ content: 'しばらくして トレセンの寮' });
      await kitaru.say_and_wait('……');
      await kitaru.print_and_wait('そう、なのか。');
      await kitaru.print_and_wait(
        '青葉賞、日本ダービー、神戸新聞杯、菊花賞、金鯱賞……',
      );
      await kitaru.print_and_wait(
        'ここまで私を走らせたものは、何だったんだろう。',
      );
      await kitaru.say_and_wait([kitaru.elder_sibling_sex_title, '……']);
      await kitaru.print_and_wait(
        'ふと見ると、窓が鏡になって、一人で立つ自分が映っていた。',
      );
      await kitaru.print_and_wait('背は前より高く、髪も長くなった。');
      await kitaru.print_and_wait([
        callname,
        ' に初めて会ったときより、ずっと大人びている。',
      ]);
      await kitaru.print_and_wait([
        '写真の',
        kitaru.elder_sibling_sex_title,
        'と、ほとんど変わらない。',
      ]);
      await kitaru.print_and_wait('じゃあ……私は？');
      await kitaru.say_and_wait([callname, '……']);
      await kitaru.say_and_wait('憑かれた、空の殻……');
      await kitaru.print_and_wait(
        'わけのわからない吐き気。胃と腸が、ひとつに縒れたみたいだ。',
      );
      era.drawLine({ content: '翌日 ' + you.name + ' の事務所' });
      era.printButton('「空の殻？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.get_colored_name(),
        ' が告げたその結論を呟いた。自分が',
        kitaru.elder_sibling_sex_title,
        'の魂に憑かれていると思っている',
        kitaru.teen_sex_title,
        'は、部屋の隅で落ち着かなげに立っている。',
      ]);
      await kitaru.say_and_wait('そうです。私、自分らしくない気がするんです。');
      await kitaru.say_and_wait(
        '体を貸しただけで、執念が乗ってきた、っていうか。',
      );
      await kitaru.say_and_wait('だって、私、何も考えてなかったんです。');
      await kitaru.say_and_wait('流れに乗っただけ、です。');
      await kitaru.say_and_wait('これで……私が勝った、って言えますか？');
      await kitaru.say_and_wait('……');
      await kitaru.say_and_wait('二年前なら、喜んでたかもしれません！');
      await kitaru.say_and_wait('でも、そう思うと……');
      await era.printAndWait([
        kitaru.teen_sex_title,
        'の震える声は、霧のようにぼやけていく。',
      ]);
      era.printButton('「フク？」', 1);
      await era.input();
      await kitaru.say_and_wait('すみません……');
      await kitaru.say_and_wait('少し、ひとりにさせてください。');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の PTSD が、また再発した。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kink_sho_lose: (() => {
    const title = '運の尽き';
    /**
     * 菊花賞勝利＋金鯱賞敗北
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('えっ……負けた……？');
      await kitaru.say_and_wait('私の運が、効かない……？');
      await kitaru.say_and_wait(
        '嘘ですよね！ こんなの、ありえません！ 私の運は……！',
      );
      await kitaru.say_and_wait([callname, '！ これは悪夢ですよね！']);
      await kitaru.say_and_wait('あなたのそばにいる私は、大吉のはずなんです！');
      era.printButton('「これが現実だ……」', 1);
      await era.input();
      await kitaru.say_and_wait('そんな、もう生まれ変われたと思ってたのに！');
      await kitaru.say_and_wait('神様に捨てられたら……私……私……！');
      await era.printAndWait([
        you.get_colored_name(),
        ' は黙って前へ出て、泣きそうな ',
        kitaru.get_colored_name(),
        ' を胸に抱き入れた。',
      ]);
      await kitaru.say_and_wait(['ううっ……', callname, '……']);
      era.drawLine({ content: '翌日 ' + you.name + ' の事務所' });
      era.printButton('「空の殻？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.get_colored_name(),
        ' が告げたその結論を呟いた。その',
        kitaru.teen_sex_title,
        'は、部屋の隅で落ち着かなげに立っている。',
      ]);
      await kitaru.say_and_wait('そうです。私、自分らしくない気がするんです。');
      await kitaru.say_and_wait(
        '体を貸しただけで、執念が乗ってきた、っていうか。',
      );
      await kitaru.say_and_wait('だって、私、何も考えてなかったんです。');
      await kitaru.say_and_wait('流れに乗っただけ、です。');
      await kitaru.say_and_wait('これで……私、ちゃんと走れたんでしょうか。');
      await kitaru.say_and_wait('……');
      await era.printAndWait([
        kitaru.teen_sex_title,
        'の震える声は、霧のようにぼやけていく。',
      ]);
      era.printButton('「フク？」', 1);
      await era.input();
      await kitaru.say_and_wait('すみません……');
      await kitaru.say_and_wait('少し、ひとりにさせてください。');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の PTSD が、また再発した。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_11: (() => {
    const title = '不安定な等級';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '連勝中の ',
        kitaru.get_colored_name(),
        ' は、金鯱賞のあと、テレビ局から取材の招待を受けた。',
      ]);
      await era.printAndWait([
        kitaru.uma_sex_title,
        'としては平凡な出自の ',
        kitaru.get_colored_name(),
        ' が、青葉賞の不振のあと、菊花賞を含む重賞を連取したことで、',
        kitaru.sex,
        'は人々の視界に入った。',
      ]);
      await era.printAndWait([
        '断れない。同期で早くから速度の限界に挑むと公言した栗毛の',
        kitaru.uma_sex_title,
        'や、メジロ家の長距離',
        kitaru.uma_sex_title,
        'に比べ、コースと勝利ライブ以外では、ときどき神社に姿を見せるだけの ',
        kitaru.get_colored_name(),
        ' は、神秘と呼べる。',
      ]);
      await era.printAndWait([
        kitaru.sex,
        'のトレーナーとして、同席するのは当然だ。それに……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、金鯱賞のあとの',
        kitaru.sex,
        'を思い出した。あのレースのあと、何かに気づいた ',
        kitaru.get_colored_name(),
        ' は、また不安定な精神へ戻っていた。',
      ]);
      era.drawLine({ content: 'スタジオ' });
      await kitaru.say_and_wait('はい、そうです');
      await kitaru.say_and_wait('たぶん、です');
      await kitaru.say_and_wait('……');
      await era.printAndWait([
        'レース後の取材で、',
        kitaru.get_colored_name(),
        ' の答えはかなり苦しい。',
        you.get_colored_name(),
        ' が場を回したおかげで、話題は ',
        kitaru.get_colored_name(),
        ' が冷静で口数の少ない',
        kitaru.uma_sex_title,
        'だ、という方向へ流れた。',
      ]);
      await era.printAndWait([
        '冷静、口数が少ない、が ',
        kitaru.get_colored_name(),
        ' と結びつく？ ',
        you.get_colored_name(),
        ' には想像もつかない。',
      ]);
      await era.printAndWait([
        '幸い、この試練も終わりが見えてきた。',
        you.get_colored_name(),
        ' はすでに、このあとの ',
        kitaru.get_colored_name(),
        ' への癒しの案を考え始めていた。',
      ]);
      await era.printAndWait('違う！');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の汗で濡れたオレンジの髪が額に張り、馬耳が驚いたように立っている。',
      ]);
      await era.printAndWait(
        '止めなければならない。だが、次の質問はもう投げられていた。',
      );
      await you.say_as_passer_by_and_wait(
        '女性司会',
        'では、伺いたいのですが……',
      );
      await you.say_as_passer_by_and_wait('女性司会', [
        kitaru.get_colored_name(),
        ' 選手は、いま何のために走っているのですか？',
      ]);
      await kitaru.say_and_wait('なぜ', true);
      await kitaru.say_and_wait('勝利？', true);
      await kitaru.say_and_wait('賞金？', true);
      await kitaru.say_and_wait('それとも、別の何か？', true);
      await kitaru.say_and_wait([kitaru.elder_sibling_sex_title, '？']);
      await you.say_as_passer_by_and_wait(
        '女性司会',
        'えっ？ すみません、もう一度お願いします。',
      );
      await kitaru.say_and_wait('でも……', true);
      await kitaru.say_and_wait('でも私、もう走り出したんですよ！！！！！');
      await era.printAndWait(
        [
          kitaru.get_colored_name(),
          '「',
          {
            color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
            content: 'いやいやいや！！！！！',
          },
          '」',
        ],
        {
          align: 'center',
          fontSize: '1.5rem',
          fontWeight: 'bold',
        },
      );
      await kitaru.say_and_wait('んっ！');
      await era.printAndWait([
        '気を失った ',
        kitaru.get_colored_name(),
        ' が後ろへ倒れる前に、',
        you.get_colored_name(),
        ' は飛び出し、間に合って',
        kitaru.sex,
        'を支えた。',
      ]);
      await era.printAndWait(['取材は中断した。']);
      era.drawLine({ content: '数日後' });
      await era.printAndWait(['検査に異常はない。休みが必要なだけだ。']);
      await kitaru.say_and_wait(['すみません、また ', callname, ' に迷惑を……']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、ソファで具合の悪そうな ',
        kitaru.get_colored_name(),
        ' が詫びるのを聞いた。',
      ]);
      await era.printAndWait(
        'そうだ。スタジオで倒れたことによる世論の爆発を処理するだけで、ここ数日は頭が割れそうだった。',
      );
      await era.printAndWait([
        'スタジオで倒れた ',
        kitaru.get_colored_name(),
        ' は、間違いなく ',
        you.get_colored_name(),
        ' を嵐の目へ押し上げた。',
      ]);
      await era.printAndWait([
        'だが、いまより大事なのは、ますます不安定になる ',
        kitaru.get_colored_name(),
        ' のほうだ。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_12: (() => {
    const title = '鯨の腹へ';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} suzuka サイレンススズカ
     * @param {CharaTalk} tannhauser マチカネタンホイザ
     * @param {CharaTalk} bright メジロブライト
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} callname_2 サイレンススズカのプレイヤーへの呼び方
     * @param {PrintedSpan} b_call_k メジロブライトのマチカネフクキタルへの呼び方
     */
    const f = async (
      kitaru,
      suzuka,
      tannhauser,
      bright,
      you,
      callname,
      callname_2,
      b_call_k,
    ) => {
      await era.printAndWait([
        'あの取材のあと、',
        kitaru.get_colored_name(),
        ' は沈んでいた。',
      ]);
      await era.printAndWait('今日はトレーニングまでサボった。');
      await era.printAndWait('放っておけない。');
      await era.printAndWait([
        kitaru.sex,
        'は ',
        you.get_colored_name(),
        ' に、心配しなくていいとメッセージを残していた。それでも不安は、',
        you.get_colored_name(),
        ' の胸から消えない。',
      ]);

      if (era.get('cflag:74:招募状态') === 1) {
        await bright.say_and_wait([b_call_k, ' ですか？……見てないです。']);
      }
      if (era.get('cflag:62:招募状态') === 1) {
        await tannhauser.say_and_wait([
          'えっ！ 今日、朝に寮を出てから、見てないです。',
        ]);
      }
      if (era.get('cflag:2:招募状态') === 1) {
        await suzuka.say_and_wait(['ごめん……', callname_2, '、私も見てない。']);
      }

      await era.printAndWait([
        '何人かのクラスメイトに訊いても、担当の行方はわからない。',
        kitaru.get_colored_name(),
        ' なら、いまどこへ行くだろう。',
      ]);
      await era.printAndWait([
        'いや、よく参拝する神社でもない。学園の生徒がよく行く枯れ木のうろでもない。',
      ]);
      era.drawLine({ content: '郊外の墓地' });
      await era.printAndWait([
        'オレンジの',
        kitaru.uma_sex_title,
        'が、亡き',
        kitaru.elder_sibling_sex_title,
        'を示すその墓碑を、ぼんやり見つめている。',
      ]);
      era.printButton('「マチカネフクキタル？」', 1);
      await era.input();
      await kitaru.say_and_wait(['……', callname, '！']);
      await kitaru.say_and_wait('やっぱり、見つかりましたか。');
      await kitaru.say_and_wait('えへへ……？');
      era.printButton('鉄爪を使う', 1);
      await era.input();
      await kitaru.say_and_wait('あうっ！');
      await era.printAndWait([
        you.get_colored_name(),
        ' に頭を叩かれた',
        kitaru.teen_sex_title,
        'が、悲鳴を上げた。',
      ]);
      era.printButton('「助けが要るか？」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ、いいです！');
      await kitaru.say_and_wait('見てください、もう大丈夫です！');
      era.printButton('「本当は？」', 1);
      era.printButton('「正直に言え」', 2);
      await era.input();
      await kitaru.say_and_wait('怖いです……');
      era.printButton('「怖い？」', 1);
      await era.input();
      await kitaru.say_and_wait('……はい。');
      await kitaru.say_and_wait(
        '占いも、吉日を選ぶのも、本当にいいんです。いつも後ろから支えてくれて……',
      );
      await kitaru.say_and_wait('あのときから、ずっとそうでした。');
      await era.printAndWait([
        '大理石の墓碑の表面を撫で、',
        kitaru.get_colored_name(),
        ' の星の瞳に、陰がかかる。',
      ]);
      await kitaru.say_and_wait('小さいころから、占いを信じてきました。');
      await kitaru.say_and_wait([
        'そうして、大吉の日に ',
        callname,
        ' に出会い、無理をしてでも',
        kitaru.elder_sibling_sex_title,
        'に約束した菊花賞まで走ってきました。',
      ]);
      await kitaru.say_and_wait(
        '菊花賞を取ったら、運命の人と開運グッズがいれば、私は幸せになれると思ってました。',
      );
      await kitaru.say_and_wait([
        'なのに金鯱賞のあと、自分はまだ、',
        kitaru.elder_sibling_sex_title,
        'の影に縮こまっている小さな',
        kitaru.uma_sex_title,
        'だと気づいたんです。',
      ]);
      await kitaru.say_and_wait([
        kitaru.uma_sex_title,
        'になった理由もわからず、運命の人の指示でコースに上がるだけ……',
      ]);
      await kitaru.say_and_wait(
        'このまま引退したほうが、いいんじゃないですか？',
      );
      era.printButton('「なぜだ？」', 1);
      await era.input();
      await kitaru.say_and_wait('そうですよ！');
      await era.printAndWait([
        kitaru.sex,
        'はうなずき、光を失った星の瞳で、墓地の池をぼんやり見ている。',
      ]);
      await kitaru.say_and_wait([
        '目標もなく、ファンも、',
        callname,
        ' の願いも裏切った、神に捨てられた私！',
      ]);
      await kitaru.say_and_wait(
        '池の砕けた藻になって、浮いて沈んで、最後は魚の腹に入るべきなんです！',
      );
      await kitaru.say_and_wait([
        'そういえば、',
        callname,
        ' は、なぜここまで私を支えてくれたんですか？',
      ]);
      await kitaru.say_and_wait('いつも失敗して、つけあがってばかりなのに……');
      era.printButton('「フクの走りが好きだから」', 1);
      era.printButton('「フクの願いを叶えたいから」', 2);
      await era.input();
      await kitaru.say_and_wait('えっ！！！！！！');
      era.printButton('「変なことを言ったか？」', 1);
      await era.input();
      await kitaru.say_and_wait(
        'いいえ！ ただ……私も、そんな格好いいことが言えたら、って。',
      );
      await kitaru.say_and_wait('次にどう歩くか決めるだけで、手一杯なのに。');
      era.printButton('「そうか？」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ？');
      era.printButton('「でも、フクはすごいと思うぞ」', 1);
      await era.input();
      await kitaru.say_and_wait('んっ！');
      era.printButton(
        '「人から受け取ったもののなかから、合う答えを見つけられる」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '目の前の',
        kitaru.uma_sex_title,
        'の両耳が、揺れた。',
      ]);
      era.printButton('「違うか？」', 1);
      await era.input();
      await kitaru.say_and_wait([callname, '……']);
      await kitaru.say_and_wait('ありがとうございます。慰めでも、嬉しいです。');
      await kitaru.say_and_wait([
        '……私、',
        callname,
        ' も、支えてくれたファンも、がっかりさせたのに。',
      ]);
      era.printButton('「なら宝塚記念で、みんなに詫びろ」', 1);
      await era.input();
      await kitaru.say_and_wait('はい！');
      await kitaru.say_and_wait('えっ？ あああ、だめ、絶対だめです！');
      await kitaru.say_and_wait(
        '宝塚記念——ファン投票がないと出られないレースじゃないですか？',
      );
      await era.printAndWait([
        '声を大きくする ',
        kitaru.get_colored_name(),
        ' を慰めながら、',
        you.get_colored_name(),
        ' はファン感謝祭での票集めを考え始めた。',
      ]);
      era.println();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の PTSD は、しばらく消えた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = (kitaru) => ['みんなの願いを背負う', kitaru.teen_sex_title];
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の前回の取材でのひどい受け答えは、多くのメディアの批判を呼んだ。',
      ]);
      await kitaru.say_and_wait([
        'うわぁ！ ',
        callname,
        '。本当に大丈夫ですか？',
      ]);
      await kitaru.say_and_wait('あの、新聞には私のこと……');
      await you.say_as_passer_by_and_wait('新聞', [
        '……',
        kitaru.get_colored_name(),
        ' の態度は、見ていられない……',
      ]);
      await you.say_as_passer_by_and_wait(
        '新聞',
        '……競技者としての誇りも、ファンに応える心もない……',
      );
      await you.say_as_passer_by_and_wait('新聞', '……レースを愛していない……');
      await kitaru.say_and_wait('あっ！ 言わなくてもいいじゃないですか！');
      await kitaru.say_and_wait('でも……いいです。私、そういう人間ですから。');
      await kitaru.say_and_wait('本当に、耳が痛い……耳が落ちそうなくらい。');
      await kitaru.say_and_wait('出たら、卵の雨を食らうんでしょうね……');
      era.printButton('「さあ、出番だ」', 1);
      await era.input();
      era.printButton('「俺を信じろ。問題ない」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は事前の調査で知っていた。SNSでは、',
        kitaru.get_colored_name(),
        ' のファンは、取材の受け答えで',
        kitaru.sex,
        'を捨ててはいなかった。',
      ]);
      await era.printAndWait([
        'むしろ',
        kitaru.sex,
        'のファンコミュニティでは、',
        you.get_colored_name(),
        ' の案内で、出走資格への投票を始めた人もいる。',
      ]);
      await kitaru.say_and_wait(['んっ！ ', callname, ' がそう言うなら……']);
      await kitaru.say_and_wait(
        'とにかく！ ファンの罵声のなかで天国へ行ったら、水晶球はあなたに預けます！',
      );
      await era.printAndWait([
        '処刑場へ向かうような悲壮を帯びて、',
        kitaru.get_colored_name(),
        ' は前へ歩いた。',
      ]);
      era.drawLine({ content: 'しばらくして' });
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は、URAの紋章が飾られた取材用の背景の前に立っている。',
      ]);
      await you.say_as_passer_by_and_wait('女性司会', [
        kitaru.get_colored_name(),
        ' ',
        kitaru.adult_sex_title,
        '、春季の目標を教えていただけますか？',
      ]);
      await kitaru.say_and_wait('ぐあっ！ いきなりそんな質問ですか？');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' がこう出るのはわかっていた。それでも ',
        you.get_colored_name(),
        ' は、仕方なく額を押さえた。',
      ]);
      await era.printAndWait([
        '自分で調べた範囲では、',
        kitaru.get_colored_name(),
        ' のファンは、取材の受け答えで',
        kitaru.sex,
        'を捨ててはいなかった。',
      ]);
      era.printButton('「みんなに、言ってやれ」', 1);
      await era.input();
      await era.printAndWait([
        kitaru.teen_sex_title,
        'の肩に手を置き、少し力を入れて、まだ拒み続ける',
        kitaru.sex,
        'を司会のマイクの前へ押し出した。',
      ]);
      await kitaru.say_and_wait('んっ！ 本当に……わかりました。');
      await kitaru.say_and_wait('みなさん、私のこの春の目標！');
      await kitaru.say_and_wait('目標というより、夢、ですね——！');
      await kitaru.say_and_wait('宝塚記念に出ることです！');
      await era.printAndWait([
        '自分でも、こんなにすんなり言えるとは思っていなかったらしい。',
        kitaru.get_colored_name(),
        ' の顔はまず驚き、それから裁きを待つようにうつむいた。',
      ]);
      await kitaru.say_and_wait('えっ？');
      era.printButton('拍手する', 1);
      await era.input();
      await era.printAndWait('客席から拍手が起こった。');
      await kitaru.say_and_wait('拍手？ なぜですか？');
      await you.say_as_passer_by_and_wait('ファンA', [
        '頑張れ！ ',
        kitaru.get_colored_name(),
        '！',
      ]);
      await you.say_as_passer_by_and_wait(
        'ファンB',
        '投票するから！ 絶対出てね！',
      );
      await kitaru.say_and_wait(
        'みなさん、どうしたんですか？ あの取材、あんなにひどかったのに……',
      );
      await you.say_as_passer_by_and_wait('ファンA', [
        'あー、本当に惨かったよね。でもそれが ',
        kitaru.get_colored_name(),
        ' だもん。',
      ]);
      await you.say_as_passer_by_and_wait(
        'ファンB',
        '人は迷うこともあるでしょ。親近感、ってやつ？',
      );
      await kitaru.say_and_wait(
        '親近感……じゃあ、まだ見捨てられてないんですか？',
      );
      await you.say_as_passer_by_and_wait(
        'ファンC',
        '見捨てるわけないでしょ！ 菊花賞の走り、あんなに必死で、忘れられないよ！',
      );
      await you.say_as_passer_by_and_wait(
        'ファンD',
        'そう！ 宝塚記念、頑張って！',
      );
      await kitaru.say_and_wait('はい……はい……！');
      await kitaru.say_and_wait('もう一度、挑戦してみます！');
      await era.printAndWait([
        '神に捨てられても、ファンが拾い上げる。投票結果の発表のあと、',
        kitaru.get_colored_name(),
        ' はかろうじて宝塚記念の出走資格を得た。',
      ]);
      era.println();
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は、もう運勢に頼らない……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = '宝塚記念を迎えて';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('栄光への参拝の道は、本来もう途切れていた！');
      await kitaru.say_and_wait(
        'でも、みんなの大小の願いが、ひとつずつ集まって！',
      );
      await kitaru.say_and_wait('私のために、またその道を開いてくれたんです！');
      await kitaru.say_and_wait('宝塚記念！');
      await kitaru.say_and_wait(['絶対に期待は裏切りません、', callname, '！']);
      await kitaru.say_and_wait('いちばんいいレースを、みんなに見せます！');
      era.printButton('「もう大丈夫か？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        'はい！ 前は',
        kitaru.elder_sibling_sex_title,
        'の願いだけを背負って、大小の開運グッズで歩いてました。',
      ]);
      await kitaru.say_and_wait(
        '今の私は、たくさんのファンの願いも背負ってます！ 前よりずっと強いです！',
      );
      await kitaru.say_and_wait('それにいちばん大事な、自分で勝ちたい気持ち！');
      await kitaru.say_and_wait('この儀式は……');
      await kitaru.say_and_wait(
        'いえ……レースは、運に頼らず、自分の意志で走ります！',
      );
      era.printButton('「ちょっと格好つけすぎじゃないか？」', 1);
      era.printButton('「その勢いで行け！」', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('い、言われてみれば～ 大げさです、大げさ……');
      } else {
        await kitaru.say_and_wait(
          'はい！ ……自分でも、ちょっと大げさだとは思うんですけど。',
        );
      }
      await kitaru.say_and_wait(
        'でも！ 気持ちは本物です！ 今度の籤筒から何が出るか！',
      );
      await kitaru.say_and_wait('決めるのは、私です！');
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '再起';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {boolean} kink_sho_kiss 金鯱賞の前にキスしたか
     */
    const f = async (kitaru, you, callname, kink_sho_kiss) => {
      const ret = [];
      await era.printAndWait([
        'スタンドでは、建御雷神でなければ出せないような大きな歓声が、',
        kitaru.get_colored_name(),
        ' の勝利を告げた。',
      ]);
      await era.printAndWait('人は事を為す。志ある者は、事を成す。');
      await era.printAndWait([
        '谷を出たあとの大復活。',
        kitaru.get_colored_name(),
        ' の今日の走りは、その言葉そのものだ。',
      ]);
      era.println();
      era.drawLine({ content: '阪神競馬場 控え室' });
      await kitaru.say_and_wait([callname, '！ 勝ちました！ 勝ちました！']);
      era.printButton('「ああ！ ファンも喜んでるぞ！」', 1);
      await era.input();
      await kitaru.say_and_wait('次のレースは、何にしますか？');
      await kitaru.say_and_wait('夏季合宿のあいだに、ゆっくり考えましょう。');
      await kitaru.say_and_wait(['そうです、', callname, '！']);
      era.printButton('「どうした？」', 1);
      await era.input();
      await kitaru.say_and_wait('自分の道の歩き方、少し見えてきた気がします！');
      await you.say_and_wait('教えてくれるか？');
      await kitaru.say_and_wait('ん……まだ、ぼんやりした予感だけです！');
      if (
        era.get('love:56') >= 75 &&
        kink_sho_kiss &&
        you.sex_code !== 0 &&
        kitaru.sex_code !== 1
      ) {
        await kitaru.say_and_wait([
          'でも、その道には ',
          callname,
          ' がいないと！',
        ]);
        await era.printAndWait([
          '言い終えると、運動のあとの赤い頬の ',
          kitaru.get_colored_name(),
          ' が、',
          you.get_colored_name(),
          ' の腰を抱いた。',
        ]);
        await era.printAndWait([
          'わざと緩めた勝負服が、',
          kitaru.sex,
          'の整った鎖骨と、呼吸に合わせて震える胸の肉を、半分隠して見せている。',
        ]);
        await era.printAndWait(
          'さらに下では、濡れた白いストッキングが擦り合い、青いプリーツスカートが脚のあいだへ巻き込まれていく。',
        );
        await kitaru.say_and_wait(['あの……', callname, '……']);
        await kitaru.say_and_wait([
          '金鯱賞のとき、本当にすみませんでした。',
          callname,
          ' にあんなことを言って……',
        ]);
        await kitaru.say_and_wait(
          'よかったら……わ、私を詫びの供え物にしてください……',
        );
        era.printButton('受ける', 1);
        era.printButton('拒む', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            '勝ち帰ってきた ',
            kitaru.get_colored_name(),
            ' を、壁際へ押し込んだ。',
          ]);
          await kitaru.say_and_wait([callname, '！']);
          await era.printAndWait(
            '濡れた白いストッキング、胸のあいだ、腋の甘い匂いを、大きく吸い込む。',
          );
          await era.printAndWait([
            '控え室の画面で解説者が評する声に合わせ、今日の優勝',
            kitaru.uma_sex_title,
            'の鍛えられた体を、いっしょに味わう。',
          ]);
          await era.printAndWait([
            '息のなかで ',
            kitaru.get_colored_name(),
            ' の右脚を担ぐ。小さいころから神楽を鍛えた',
            kitaru.sex,
            'は、柔軟がいい。',
          ]);
          await era.printAndWait([
            '脱いだ下着と糸を引く入口に肉棒を当てると、担当は反射で逃げようとして、今日の自分が供え物だと思い出して止めた。',
          ]);
          await era.printAndWait(
            '入れた。腰に下がった絵馬が、祈るように鳴る。',
          );
          await era.printAndWait([
            '容赦なく突き、欲に染まった声で ',
            kitaru.get_colored_name(),
            ' がどう詫びようと、聞かない。',
          ]);
          await era.printAndWait([
            'それから中で出し、いつも手のかかる担当の子宮を、',
            you.get_colored_name(),
            ' の精液で埋めるようにした。',
          ]);
          await era.printAndWait([
            kitaru.sex,
            'のセーラー服の下の平たい腹が少し膨らむまで続け、このあと勝利ライブがあるのを思い出して手を止めた。',
          ]);
          await era.printAndWait([
            'そのあとの LIVE で、めったにミスしない ',
            kitaru.get_colored_name(),
            ' が、立て続けにいくつか間違えた。',
          ]);
          await era.printAndWait(
            'LIVE はまだ半ばなのに、着替えたばかりのステージ衣装は汗に濡れ、胸と腹の布に水跡が透け、短いスカートのなかで震える脚から落ちる雫が、顎を伝う汗といっしょに舞台へ落ちた。',
          );
        } else {
          await era.printAndWait([
            '拒んだ。',
            you.get_colored_name(),
            ' は、わけもなく膨れた ',
            kitaru.get_colored_name(),
            ' が LIVE の控えへ向かうのを見た。',
          ]);
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_95_25: (() => {
    const title = '願いなき願い';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' はいつものように、神社の鈴の前に立っている。',
      ]);
      await kitaru.say_and_wait('ふふっ！ じゃあ、願いをかけます！');
      await kitaru.say_and_wait('未知の次のレースが……');
      await kitaru.say_and_wait(
        'えっ！ 何でもいいです。神様は見てるだけで。私、自分でやりますから！',
      );
      await kitaru.say_and_wait('別の願い、にします……');
      await era.printAndWait([
        'だが俯いてしばらく考えたあと、心を鎮めていた',
        kitaru.teen_sex_title,
        'が、いきなり',
        kitaru.sex,
        '特有の奇声を上げた。',
      ]);
      await kitaru.say_and_wait('えっ！ ええ～？ ありゃ？');
      await era.printAndWait('それから煙のように神社を飛び出した。');
      era.drawLine({ content: you.name + ' の事務所' });
      await era.printAndWait([
        'オレンジ髪の',
        kitaru.teen_sex_title,
        'が、慌てて ',
        you.get_colored_name(),
        ' の事務所の扉を開け、飛び込んできた。',
      ]);
      era.printButton('「どうした？」', 1);
      await era.input();
      await kitaru.say_and_wait([callname, '！ 一大事です！']);
      await kitaru.say_and_wait(
        '占いの子である私が！ かける願いがないんです！',
      );
      await kitaru.say_and_wait(
        'いい縁も、叶えたい願いも、もう全部叶ってます。',
      );
      await kitaru.say_and_wait('また、菊花賞が終わったときと同じ、ですかね。');
      era.printButton('「それは、今のフクが満ち足りてるってことだろ」', 2);
      await era.input();
      await kitaru.say_and_wait('満ち足りてる？');
      await kitaru.say_and_wait([
        'ん……たしかに。これから先の目標も少し見えて、',
        callname,
        ' もそばにいて、支えてくれるファンもいる。',
      ]);
      await kitaru.say_and_wait('ファン……');
      await kitaru.say_and_wait([
        'そうです！ ',
        callname,
        '、私、ここまで支えてくれたファンに、レースでちゃんと応えたいんです！',
      ]);
      await kitaru.say_and_wait([callname, '、何か案はありますか？']);
      era.printButton('「同じファン投票の、有馬記念は？」', 1);
      era.printButton('「ジャパンカップと有馬記念、連取は？」', 2);
      if ((await era.input()) === 2) {
        await kitaru.say_and_wait('あら、もうからかわないでください！');
        await kitaru.say_and_wait(
          'あのとき言いすぎたのはわかってます。でも、有馬記念だけなら、大丈夫です！',
        );
        await kitaru.say_and_wait('決めました！ 有馬記念です！');
      }
      era.drawLine({ content: 'フクキタル家の神社' });
      await kitaru.say_and_wait(
        '前回の宝塚記念は、信徒みたいなファンが慈悲をくださったから出られました。',
      );
      await kitaru.say_and_wait(
        '今度は、自分の力でちゃんと票を集めて、出たいんです。',
      );
      await kitaru.say_and_wait(
        'たくさんの願いを全部集めて、年末の中山で一度に叶えたい。',
      );
      await kitaru.say_and_wait(
        '自分の願いが叶ったあと、今度は私が、みんなに幸せを届ける番です！',
      );
      await kitaru.say_and_wait(
        '有馬記念で私が勝てば、みんなも幸せになれますよね？',
      );
      await era.printAndWait([
        '視線が ',
        you.get_colored_name(),
        ' へ向く。',
        kitaru.sex,
        'の表情はとても坦然としている。神仏に愛された',
        kitaru.uma_sex_title,
        'だと言っても、おかしくない。',
      ]);
      era.printButton('「ああ」', 1);
      era.printButton('「きっとな！」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' はうなずいて賛同した。',
      ]);
      await kitaru.say_and_wait(
        'よく考えると、神様の前では、願をかけるだけじゃないんですね！',
      );
      await era.printAndWait([
        'オレンジ髪の',
        kitaru.teen_sex_title,
        'が一歩前へ出た。まだ制服のままなのに、作法をする巫女と同じ荘厳が、だんだん顔に出る。',
      ]);
      await kitaru.say_and_wait(
        'ここに坐す神よ！ 私の誓約を受け取ってください！',
      );
      await kitaru.say_and_wait('私は絶対！ 有馬記念で勝ちます！');
      await kitaru.say_and_wait(
        '自分への自信を返してくれた人たちへ、幸せを届けるために！',
      );
      await era.printAndWait('厳しい凛とした声が、黄昏の逢魔が時に響く。');
      await era.printAndWait('なのに、意外なほど神聖に聞こえた。');
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: { title: '夏季合宿（シニア級）' },
  ws_95_31: (() => {
    const title = '林の中の参拝';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {number} teem_count 担当の人数
     */
    const f = async (kitaru, you, callname, teem_count) => {
      const ret = [];
      await era.printAndWait([
        '今日はお盆の最終日。習わしでは、紙の灯籠を川へ流し、亡くなった親族を黄泉へ送る日だ。',
      ]);
      await era.printAndWait([
        '夜、辛うじて道がわかる林のなか、浅緑の浴衣の ',
        kitaru.get_colored_name(),
        ' が邪魔な枝を払い、人の来ない河岸を見せた。',
      ]);
      await era.printAndWait([
        '合宿地のそばの川には、すでに暖かいオレンジの灯りが、いくつか浮かんでいる。',
      ]);
      await kitaru.say_and_wait([
        'では、最後の日の儀式は、ここでやりましょう！',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' が肩に担いでいた布袋を下ろすと、重いものが落ちる音がはっきりした。',
      ]);
      era.printButton('「今日の予定は？」', 1);
      era.printButton('「中身は？」', 2);
      await era.input();
      await kitaru.say_and_wait(['こういうことです！']);
      await kitaru.say_and_wait(['この機会に、昔の私とも、お別れしたくて！']);
      await era.printAndWait([
        kitaru.sex,
        'が袋を開けると、中はさまざまな開運グッズだった。',
      ]);
      await era.printAndWait([
        '以前 ',
        kitaru.get_colored_name(),
        ' の寮で見たもの、事務所に置いてあったもの、菊花賞のあとに買ったものが大部分を占める。',
      ]);
      await kitaru.say_and_wait([
        'ん……寮とトレーニング室には、いま百個ちょっと残ってるはずです！',
      ]);
      await kitaru.say_and_wait([
        callname,
        ' の家に置いてある分は、差し上げます！',
      ]);
      era.printButton('「まだ多いな……」', 1);
      era.printButton('「ありがたく受け取っておく！」', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait(['あっ！ 精選に精選を重ねたんですよ！']);
        await era.printAndWait([
          you.get_colored_name(),
          ' に欠点を指摘された',
          kitaru.teen_sex_title,
          'は、少し膨れて ',
          you.get_colored_name(),
          ' を睨んだ。',
        ]);
      } else {
        await kitaru.say_and_wait([
          '水晶球も ',
          callname,
          ' に渡そうと思ったんです！ でも、あとで使うかもしれないので！',
        ]);
      }
      era.println();
      await era.printAndWait([
        '小さな旗、折れ目のついたトランプ、木の人形が川へ投げられ、暖かいオレンジの灯りといっしょに下流へ流れていく。',
      ]);
      await kitaru.say_and_wait(['えっ！ これ、環境に悪くないですか！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' が ',
        kitaru.get_colored_name(),
        ' に、事前に担当者へ知らせてあり、下流で網に集めてまとめて焼くと伝えると、',
        kitaru.teen_sex_title,
        'は安心して',
        kitaru.sex,
        'の開運グッズを流し始めた。',
      ]);
      era.drawLine({ content: 'しばらくして' });
      await kitaru.say_and_wait([
        'では、この紙灯籠で、今日は終わりにしましょうか。',
      ]);
      await era.printAndWait([
        '火の光でオレンジに温まった四角い紙灯籠が水面に浮かぶ。だが灯は、釘で止められたように川のなかで動かない。',
      ]);
      await kitaru.say_and_wait(['はぁ……']);
      await era.printAndWait(['いずれにせよ、もう夜中だ。戻るころあいだ。']);
      await era.printAndWait([
        'ぼんやりした ',
        kitaru.get_colored_name(),
        ' は道をあまり覚えていないらしい。迷うほど焦る歩幅に、人間の ',
        you.get_colored_name(),
        ' はついていけない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の担当は、ほとんど狂ったように前の枝を払い、浅緑の浴衣が暗い森に見え隠れする。',
        you.get_colored_name(),
        ' は置いていかれそうだ。',
      ]);
      era.printButton('「マチカネフクキタル！」', 1);
      era.printButton('「待て！」', 2);
      await era.input();
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' がどれだけ呼んでも、先を走る',
        kitaru.uma_sex_title,
        'は聞こえないように、林の奥へ走り続ける。',
      ]);
      await era.printAndWait([
        '声が暗い林に響き、見える範囲には、いま ',
        you.get_colored_name(),
        ' 一人だけだ。',
      ]);
      await era.printAndWait([
        '傍らの幹に手をつき、',
        you.get_colored_name(),
        ' の喘ぐ肺はようやく休めた。だが……いま、どうする。',
      ]);
      await era.printAndWait(['がさっ！']);
      await era.printAndWait([
        '葉が払われる音が後ろからした。',
        kitaru.get_colored_name(),
        ' か。だが、このあたりには熊も出ると聞く……担当のいない ',
        you.get_colored_name(),
        ' は、隠れたほうがいいのではないか。',
      ]);
      await kitaru.say_as_unknown_and_wait('おい！');
      await kitaru.say_as_unknown_and_wait([
        you.get_colored_actual_name(),
        you.adult_sex_title,
        '！',
      ]);
      await kitaru.say_as_unknown_and_wait('ここだ！');
      await era.printAndWait([
        '振り返ると、微笑む ',
        kitaru.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' の後ろに立っていた。',
      ]);
      await kitaru.say_and_wait('では！ また置いていかれないように。');
      await kitaru.say_and_wait('私の手を、握ってください！');
      era.printButton('手を伸ばす', 1);
      era.printButton('もちろん手を伸ばす', 2);
      await era.input();
      era.drawLine({ content: 'しばらくして' });
      await era.printAndWait('どうやら、大通りへ戻されたらしい。');
      let direction = 0,
        temp;
      do {
        await era.printAndWait([
          you.get_colored_name(),
          ' と ',
          kitaru.get_colored_name(),
          ' が歩いていると、目の前に分岐が現れた。',
        ]);
        await kitaru.say_and_wait('では！ こっちは、どうでしょう？');
        await era.printAndWait([
          you.get_colored_name(),
          ' の隣の ',
          kitaru.get_colored_name(),
          ' が、左の道を指した。',
        ]);
        era.printButton('左へ行く', 1);
        era.printButton('右へ行く', 2);
        temp = await era.input();
        direction += temp === 2;
      } while (temp === 2 && direction < 3);
      if (direction < 3) {
        await era.printAndWait([
          '木が疎らになり、見える範囲が明るくなった。やがて ',
          you.get_colored_name(),
          ' の目の前に、廃墟が現れた。',
        ]);
        await era.printAndWait([
          '緑の蔓に覆われた鳥居が、この残骸の上に立っている。長く捨てられた神社らしい。',
        ]);
        await kitaru.say_and_wait('あらあら、本当に運がいいですね！');
        await kitaru.say_and_wait('こんな特別な霊地が、まだ残っていたなんて。');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の手を引き、倒れた拝殿の屋根を越えた。',
        ]);
        await kitaru.say_and_wait('んっ！ 霊力がとても豊かです！');
        await kitaru.say_and_wait([
          'では、',
          you.get_colored_actual_name(),
          you.adult_sex_title,
          '、何か占ってほしいことはありますか？',
        ]);
        era.printButton('「もう戻ろう」', 1);
        era.printButton('「訊いていいか？」', 2, {
          disabled: era.get('love:56') < 75,
        }); // 好感で解放
        ret.push(await era.input());
        if (ret[0] === 1) {
          await kitaru.say_and_wait('そうですか？');
          await kitaru.say_and_wait('じゃあ、帰りましょう！');
          await era.printAndWait([
            'そのあと、',
            kitaru.get_colored_name(),
            ' と ',
            you.get_colored_name(),
            ' は戻った。',
            kitaru.get_colored_name(),
            ' は疲れきっていたらしく、横になるとすぐ寝息を立てた。',
          ]);
        } else {
          await kitaru.say_and_wait('もちろんです、何でも！');
          await era.printAndWait([
            '目の前の',
            kitaru.uma_sex_title,
            'は、見た目だけなら ',
            you.get_colored_name(),
            ' の担当とまったく同じで、笑い方まで違わない。',
          ]);
          await era.printAndWait([
            'だが、音もなく ',
            you.get_colored_name(),
            ' の後ろに現れ、呼び方が急に変わり、ここへ導いたことまで、違和感は数えきれない。',
          ]);
          era.printButton('「お前は誰だ？」', 1);
          await era.input();
          kitaru.name = 'マチカネフクキタル？';
          await kitaru.say_and_wait([
            '……あはは。さすが、あの子の ',
            callname,
            '／導き手だ。',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の姿で現れた',
            kitaru.teen_sex_title,
            'は、小さく笑っている。',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' の目の前に立って口を開いているのに、',
            kitaru.sex,
            'の答えは、直接 ',
            you.get_colored_name(),
            ' の意識に現れるようだ。',
          ]);
          await kitaru.say_and_wait([
            'すまない、自家の巫女／あなたの担当の体を借りた。だが、',
            kitaru.sex,
            'が運命の人を見つけてから、暇を見て話がしたかったんだ。',
          ]);
          await kitaru.say_and_wait('ん……君は、あまり驚いていないな');
          era.printButton('（俺はマチカネフクキタルのトレーナーだからな）', 1);
          era.printButton(
            `（${kitaru.sex}に起きることなら、これくらい不思議でもない）`,
            2,
          ); // 好感で解放
          await era.input();
          await kitaru.say_and_wait('あら！');
          await kitaru.say_and_wait([
            'そうは言っても、',
            kitaru.sex,
            'の',
            kitaru.elder_sibling_sex_title,
            'が亡くなる前は、',
            kitaru.sex,
            'も占いや呪術に熱中してはいなかった。昔はいつも',
            kitaru.sex,
            'の',
            kitaru.elder_sibling_sex_title,
            'の後ろを追い、何かあるたびに',
            kitaru.sex,
            'を呼んでいた。',
          ]);
          await kitaru.say_and_wait('面倒だろう？');
          era.printButton('（うなずく）', 1);
          era.printButton('「たしかに、俺もよく呼び出される」', 2);
          await era.input();
          await era.printAndWait([
            kitaru.sex,
            'は ',
            you.get_colored_name(),
            ' を見ているのに、どこか遠い場所を見つめている瞳を見て、',
            you.get_colored_name(),
            ' は答えた。',
          ]);
          if (teem_count >= 2) {
            await kitaru.say_and_wait([
              kitaru.sex,
              'が菊花賞の約束を果たすのを助けた。本当にすごい。',
            ]);
          } else {
            await kitaru.say_and_wait(
              '最初の担当で菊花賞を取るなんて、本当にすごい。',
            );
          }
          await kitaru.say_and_wait([
            kitaru.sex,
            'に信仰される神として、私は失敗したと思う。こんなに霊力の優れた巫女がいるのに。',
          ]);
          await kitaru.say_and_wait([
            kitaru.sex,
            'がいちばん必要なときに現れられず、いちばん苦しいときにも導けず、ときどき',
            kitaru.sex,
            'の夢に出て、少しだけヒントを出せる程度だった。',
          ]);
          await kitaru.say_and_wait('ううう……信者も、まだ少ないからな。');
          await kitaru.say_and_wait([
            'ただ、人が増えれば、ずっと',
            kitaru.sex,
            'を見ていられなくなるだろう。いいことでも、ないか？',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' の担当に憑いた神は、ここまで言って無意識に髪を揉み始めた。',
            kitaru.get_colored_name(),
            ' と同じ型から生まれた、と言うべきか。',
          ]);
          await kitaru.say_and_wait(you.actual_name_with_title);
          era.printButton('「はい」', 1);
          era.printButton('「何だ？」', 2);
          await era.input();
          await kitaru.say_and_wait([
            you.get_colored_name(),
            ' が',
            kitaru.sex,
            'の ',
            callname,
            ' で、本当によかった！',
          ]);
          await era.printAndWait([
            '家の神に体を操られていた ',
            kitaru.get_colored_name(),
            ' は、何度か瞬きして、それから力なく ',
            you.get_colored_name(),
            ' の胸へ倒れた。',
          ]);
          await typing(
            'この子を頼む。' + kitaru.sex + 'の運命の人よ',
            kitaru.color,
          );
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の体が、少し熱い。',
          ]);
          kitaru.name = void 0;
        }
      } else {
        await era.printAndWait([
          '回り回って、やっと出られた。遠くに寮の灯りが、かすかに見える……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_95_37: (() => {
    const title = 'それぞれの天命';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は、オレンジ髪の担当が大理石の墓碑の表面を撫でるのを見た。',
      ]);
      await era.printAndWait([
        '菊花賞の前と同じく、しばらく低く呟いたあと、',
        kitaru.get_colored_name(),
        ' は振り返って ',
        you.get_colored_name(),
        ' にうなずいた。',
      ]);
      era.printButton('「戻るか？」', 1);
      await era.input();
      await kitaru.say_and_wait('……はい。');
      await era.printAndWait([
        '墓地を出ても、',
        kitaru.get_colored_name(),
        ' はいつもの陽気には戻らなかった。',
      ]);
      era.printButton('「どうした？」', 1);
      await era.input();
      await kitaru.say_and_wait([
        '菊花賞を取って、',
        kitaru.elder_sibling_sex_title,
        'の影から出て、トレーナーといっしょに過ごした日々。',
      ]);
      await kitaru.say_and_wait('この三年は、私には夢みたいでした。');
      await era.printAndWait([
        'そう言い終えた',
        kitaru.teen_sex_title,
        'はまた黙り、二人はそのまま帰り道を歩く。道の両側では、',
        kitaru.get_colored_name(),
        ' の髪色のような楓が、絶えず落ちている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が、',
        kitaru.sex,
        'に袖を引かれたと気づくまで。',
      ]);
      await kitaru.say_and_wait('そうです！');
      await kitaru.say_and_wait([callname, '！ 前に言った、これからの目標！']);
      await kitaru.say_and_wait(
        'これから先、いちばん強くていちばん大きな大吉級の幸せの取り方、完全に決まりました！',
      );
      era.printButton('「何だ？」', 1);
      era.printButton('「教えてくれるか？」', 2);
      if ((await era.input()) === 2) {
        await kitaru.say_and_wait('もちろんです！');
      }
      await kitaru.say_and_wait(
        'それは——このまま、運勢を追いかけて走ることです！',
      );
      await kitaru.say_and_wait(
        'でも前みたいに、ただ天を怨むだけじゃありません！',
      );
      await kitaru.say_and_wait(
        '運勢がどうであれ、向き合う、そういう走りです！',
      );
      await kitaru.say_and_wait(
        '言うなら、運命が用意した一品ずつを味わう、ですかね。',
      );
      era.printButton('「格好いいことを言ったな！」', 1);
      era.printButton('「聞こえはいいかもな！」', 2);
      await era.input();
      await kitaru.say_and_wait('えっ！');
      await kitaru.say_and_wait('そのとおりです！');
      await era.printAndWait([
        '興奮の頂点で、',
        kitaru.get_colored_name(),
        ' は走り出した。白い冬の日に、一筋の活気が染まる。',
      ]);
      if (era.get('love:56') >= 75) {
        await era.printAndWait([
          '何か思いついたらしい。視界から消えかけた ',
          kitaru.get_colored_name(),
          ' がまた駆け戻り、',
          you.get_colored_name(),
          ' の手を掴んだ。',
        ]);
        await kitaru.say_and_wait(['そうです！ ', callname, '！']);
        await kitaru.say_and_wait('あなたも、私のそばにいてくれないと！');
      }
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は跳ねるように ',
        you.get_colored_name(),
        ' の前を走り、笑顔がまた',
        kitaru.sex,
        'の顔に戻った。',
      ]);
      await era.printAndWait(
        '明るいオレンジの髪が、秋空を翻る落ち葉のなかに見え隠れし、金色に輝いている。',
      );
      await era.printAndWait([
        '有馬記念は目の前だ。',
        kitaru.get_colored_name(),
        ' も、このとき自分の道を見つけた。',
      ]);
      await era.printAndWait([
        'この先の籤筒に何が出ても、',
        kitaru.sex,
        'は坦然と受けられるだろう。',
      ]);
      if (era.get('talent:0:自信程度') === 1) {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' は、もう [卑屈] ではなくなった！',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  cl_before_arim_kin_s: (() => {
    const title = '勝利の星を摘む';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        '有馬記念まであと数日。だがその前に、同じく一年に一度のクリスマスが先に来た。',
      );
      await era.printAndWait(
        'クリスマスの気配は、すでにトレセン全体に広がっている。生徒たちの飾り付けが、どこにでもある。',
      );
      await era.printAndWait([
        'まだ有馬記念の戦術を考えている ',
        you.get_colored_name(),
        ' が、窓の音を聞いた。',
      ]);

      await kitaru.say_and_wait('へい！');
      await era.printAndWait([
        '声のほうを見た。',
        you.get_colored_name(),
        ' の手のかかる担当が、大きな布袋を背負い、窓から中へ入り込もうとしている。',
      ]);
      await era.printAndWait([
        '中身のわからないその袋が狭い窓に引っかかり、',
        kitaru.uma_sex_title,
        'の怪力でだんだん潰れていく。',
      ]);
      await kitaru.say_and_wait('ありゃ！');
      await era.printAndWait(
        '破ける音とともに、ステッキキャンディ、ライト、ジンジャーブレッドマン、贈り物の箱。クリスマスの象徴が袋から溢れ出した。',
      );
      await era.printAndWait(
        '平凡だった事務所が、一瞬でクリスマスの気配に満ちた。',
      );
      await kitaru.say_and_wait('じゃーん！ マチカネサンタキタル、です！');
      await kitaru.say_and_wait([callname, '、驚きましたか？']);
      era.printButton('「大丈夫か？」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ！ 大丈夫です！');
      await kitaru.say_and_wait([
        'あっ、そうそう、',
        callname,
        ' に渡したいものがあるんです！',
      ]);
      await era.printAndWait([
        '床に散らばった品を探して、',
        kitaru.get_colored_name(),
        ' は包装の意外にきれいな箱を取り上げた。',
      ]);
      await kitaru.say_and_wait(
        'たんたん！——箱のなかは、樹齢千年のクリスマスツリーです！',
      );
      await kitaru.say_and_wait('ミニチュアですけど。');
      await era.printAndWait(
        '残念ながら、開けてみると手作りのツリーはさっきの騒ぎで二つに折れ、先端の星まで落ちていた。',
      );
      await kitaru.say_and_wait('えっ！ そんな！');
      await kitaru.say_and_wait([
        'ふう……こうなったら、',
        callname,
        ' に外へ付き合ってもらうしか。',
      ]);
      era.drawLine({ content: 'トレセン学園 屋上' });
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' といつも行く屋上へ来た。冬の風に ',
        you.get_colored_name(),
        ' は少し震える。だが ',
        kitaru.get_colored_name(),
        ' は、まったく気にしていない。',
      ]);
      await kitaru.say_and_wait([
        'はい！ ',
        callname,
        '、手のツリーを空に向けて掲げてください！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はそのとおりにした。今夜の星空は絨毯のようで、星を散らした夜がツリーの枝のあいだから差し込む。',
      ]);
      await kitaru.say_and_wait(
        '見てください！ 天上の星を詰め込んだみたいじゃないですか！',
      );
      await kitaru.say_and_wait('ロマンチックです！');
      era.printButton('「実物の星のほうがいいな」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ！ 天上の星じゃ、だめですか？');
      await era.printAndWait([
        'その言葉を聞いたとたん、オレンジ髪の',
        kitaru.teen_sex_title,
        'はうつむいた。',
      ]);
      era.printButton('「有馬記念の勝利の星で飾ろう」', 1);
      await era.input();
      await kitaru.say_and_wait('おっ！ 有馬記念！');
      await kitaru.say_and_wait(
        'うわぁ！ そんな手があったんですね、参りました！',
      );
      era.printButton('「じゃあ、そうしよう？」', 1);
      await era.input();
      await kitaru.say_and_wait('はい！ ……は、はい……何でも従います！');
      await kitaru.say_and_wait([
        'あの、今日の ',
        callname,
        '、すごく迫力あります！',
      ]);
      await kitaru.say_and_wait('見てるだけで、胸がどきどき、っていうか……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の頬に可愛い赤みが差し、瞳が揺れている。大切にしたくなる顔だ。',
      ]);
      await era.printAndWait([
        'だが有馬記念は目前だ。',
        you.get_colored_name(),
        ' は膨らむ欲を、押さえた。',
      ]);
      await era.printAndWait([
        'ツリーの先端に載せる星は、まだない。',
        kitaru.get_colored_name(),
        ' といっしょに、最後の星を取りに行こう。',
      ]);
      await era.printAndWait(
        '有馬記念のあとで、クリスマスを祝ったほうがいいのかもしれない。',
      );
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '有馬記念を迎えて';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '珍しく、',
        kitaru.get_colored_name(),
        ' とコースへ続く地下通路までいっしょに歩いた。',
      ]);
      await era.printAndWait([
        '出口は、選ばれた者だけが通れる怪物の口のようだ。',
        kitaru.uma_sex_title,
        'が出口の陽に呑まれるたび。',
      ]);
      await era.printAndWait(
        'ファンの声援が遠くで鳴り、美味を食べた怪物が満足げに咆哮する声のように聞こえる。',
      );
      await era.printAndWait(
        '観客の歓声が重なり、地下通路の壁まで震えている。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は、先を歩く ',
        kitaru.get_colored_name(),
        ' が、夢から覚めたように一瞬立ち止まるのを見た。',
      ]);
      era.printButton('「大丈夫か？」', 1);
      await era.input();
      await kitaru.say_and_wait('んっ！');
      await kitaru.say_and_wait('……本当に、有馬記念まで来ました！');
      await kitaru.say_and_wait('ここまで、たくさん人に迷惑をかけて……');
      era.printButton('「なら、みんなのために、今日は勝とう」', 1);
      await era.input();
      await kitaru.say_and_wait('はい！');
      await era.printAndWait([
        'みんなはもう入場している。地下通路に残るのは ',
        you.get_colored_name(),
        ' と ',
        kitaru.get_colored_name(),
        ' だけだ。',
      ]);
      await kitaru.say_and_wait('そうです！');
      await kitaru.say_and_wait('あの……運の支援が、ほしいです！');
      if (era.get('love:56') < 50) {
        await era.printAndWait([
          '熱い体温のオレンジ髪の',
          kitaru.uma_sex_title,
          'が ',
          you.get_colored_name(),
          ' の胸に飛び込み、耳が動いて ',
          you.get_colored_name(),
          ' の顔を何度か叩いた。',
        ]);
      } else {
        await era.printAndWait([
          'しばらく見つめたあと、',
          you.get_colored_name(),
          ' の手は ',
          kitaru.get_colored_name(),
          ' の首の横を回り、後頭部を撫で、俯いて',
          kitaru.sex,
          'の口にキスした。',
        ]);
        await era.printAndWait(
          'ほかの出走馬に見られるかもしれない場所で、唾液を交わす。',
        );
        era.println();
        await you.say_as_passer_by_and_wait(
          `通りがかりの${kitaru.uma_sex_title}`,
          '甘ったるい……',
        );
        era.println();
      }
      await kitaru.say_and_wait(
        'ふう……これで、目から神籤が流れそうなくらいです！',
      );
      await era.printAndWait([
        'これだけ近いと、',
        you.get_colored_name(),
        ' は気づく。',
        kitaru.sex,
        'の瞳の星が、さらに明るくなっている。',
      ]);
      await kitaru.say_and_wait(['では行ってきます、', callname, '！']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        kitaru.get_colored_name(),
        ' が地下馬道を抜け、怪物の口を越え、空から降る白い光に包まれるのを見送った。',
      ]);
      await era.printAndWait('轟く喧騒のなか、ゲートへ入っていく。');
      era.drawLine({ content: '中山競馬場 ゲートの中' });
      await kitaru.print_and_wait(
        '前は、幸運が私の側にいれば、ここまで来られると思ってました！',
      );
      await kitaru.print_and_wait(
        'でも、幸運だけでは、ここには来られません！ たくさんの縁が、私を導いてくれたんです！',
      );
      await kitaru.print_and_wait('自分を私に重ねて、応援してくれたファン！');
      await kitaru.print_and_wait('同期の仲間！');
      await kitaru.print_and_wait([
        '亡くなった',
        kitaru.elder_sibling_sex_title,
        '！',
      ]);
      await kitaru.print_and_wait([
        'それに、ずっと必死に育ててくれた ',
        callname,
        '！',
      ]);
      await kitaru.print_and_wait('今日、私は神に祈りません。');
      await kitaru.print_and_wait('今日は——');
      await kitaru.print_and_wait('私が神になる——白興様になる！');
      await kitaru.print_and_wait('みんなに幸せを届ける、福娘になります！');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '福来たる、今';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.print_and_wait([
        'むかし、一人の',
        kitaru.uma_sex_title,
        'がいました。名は ',
        kitaru.get_colored_name(),
        '。',
      ]);
      await kitaru.print_and_wait([
        kitaru.sex,
        'には才能がなく、欲深く、幸運だけで上へ行こうとする',
        kitaru.child_sex_title,
        'でした。',
      ]);
      await kitaru.print_and_wait([
        'そんな',
        kitaru.sex,
        'が、有馬記念を制したんです！',
      ]);
      await kitaru.print_and_wait([
        'そうです……',
        kitaru.sex,
        'は、すべてを捧げました！',
      ]);
      await kitaru.print_and_wait([
        'その',
        kitaru.child_sex_title,
        'は神になり、馬の境を越え、神域へ入り、それから一道の白い光になりました……',
      ]);
      era.drawLine({ content: '中山競馬場 地下通路' });
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' はレース後、',
        you.get_colored_name(),
        ' にこう説いた。',
      ]);
      await kitaru.say_and_wait([callname, '！ 成功しましたよ！']);
      await kitaru.say_and_wait('幸せですか？');
      await kitaru.say_and_wait('担当が私で、よかったと思ってますよね？');
      era.printButton('「当たり前だ！」', 1);
      await era.input();
      await kitaru.say_and_wait('うわぁ！ それが聞きたかったんです！');
      await you.say_and_wait('んっ！？');
      await era.printAndWait([
        '興奮した ',
        kitaru.get_colored_name(),
        ' がそのまま ',
        you.get_colored_name(),
        ' の胸に飛び込み、遠慮なく汗を ',
        you.get_colored_name(),
        ' のシャツへこぼした。',
      ]);
      if (kitaru.sex_code !== 1) {
        await era.printAndWait([
          kitaru.uma_sex_title,
          'がレース後に持つ、湿った甘い体臭を ',
          you.get_colored_name(),
          ' は吸い、胸の柔らかい感触は運動後の体温で、いっそうはっきりする。',
        ]);
      }
      await era.printAndWait([
        'あまりに親密な動きに、ほかの出走馬とトレーナーが横目を送る。',
        you.get_colored_name(),
        ' はやむなく ',
        kitaru.get_colored_name(),
        ' の背を叩き、早く止まれと合図した。',
      ]);
      await kitaru.say_and_wait(
        'よし、この勢いで、勝者インタビューへ行きましょう！',
      );
      era.drawLine({ content: '有馬記念後の取材会場' });
      await kitaru.say_and_wait('今日！ ここで、これを言わないと！');
      await kitaru.say_and_wait('菊の舞台のあと！ 福は中山にも来ました！');
      await kitaru.say_and_wait('心から望めば、福は来ます！');
      await kitaru.say_and_wait('希望を持てば、幸運は必ず来ます！');
      await kitaru.say_and_wait('では！ みなさん、よいお年を！');
      await era.printAndWait([
        '無数のライトとカメラの前で、そう言った ',
        kitaru.get_colored_name(),
        ' は、',
        kitaru.sex,
        '特有の両手を空へ伸ばすポーズで締め、願いを預けたファンすべてへ幸せを届けた。',
      ]);
      await era.printAndWait([
        kitaru.sex,
        'の後ろでいっしょに取材を受けた ',
        you.get_colored_name(),
        ' も、あとで人々の願いを祈る ',
        kitaru.get_colored_name(),
        ' とともに、いくつものメディアの紙面に載った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_after_arim_kin_s: (() => {
    const title = 'マチカネフクキタルという名の星';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {boolean} accept_sex 性行為を受け入れるか
     */
    const f = async (kitaru, you, callname, accept_sex) => {
      const ret = [];
      await era.printAndWait([
        '有馬記念は終わった。だが ',
        kitaru.get_colored_name(),
        ' との契約が終わる前に、同じく一年に一度のクリスマスが先に来た。',
      ]);
      await era.printAndWait(
        'クリスマスの気配は、すでにトレセン全体に広がっている。生徒たちの飾り付けが、どこにでもある。',
      );
      await era.printAndWait([
        '事務所で年末報告に追われる ',
        you.get_colored_name(),
        ' が、窓の音を聞いた。',
      ]);

      await kitaru.say_and_wait('へい！');
      await era.printAndWait([
        '声のほうを見た。',
        you.get_colored_name(),
        ' の手のかかる担当が、大きな布袋を背負い、窓から中へ入り込もうとしている。',
      ]);
      await era.printAndWait([
        '中身のわからないその袋が狭い窓に引っかかり、',
        kitaru.uma_sex_title,
        'の怪力でだんだん潰れていく。',
      ]);
      await kitaru.say_and_wait('ありゃ！');
      await era.printAndWait(
        '破ける音とともに、ステッキキャンディ、ライト、ジンジャーブレッドマン、贈り物の箱。クリスマスの象徴が袋から溢れ出した。',
      );
      await era.printAndWait(
        '平凡だった事務所が、一瞬でクリスマスの気配に満ちた。',
      );
      await kitaru.say_and_wait('じゃーん！ マチカネサンタキタル、です！');
      await kitaru.say_and_wait([callname, '、驚きましたか？']);
      era.printButton('「大丈夫か？」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ！ 大丈夫です！');
      await kitaru.say_and_wait([
        'あっ、そうそう、',
        callname,
        ' に渡したいものがあるんです！',
      ]);
      await era.printAndWait([
        '床に散らばった品を探して、',
        kitaru.get_colored_name(),
        ' は包装の意外にきれいな箱を取り上げた。',
      ]);
      await kitaru.say_and_wait(
        'たんたん！——箱のなかは、樹齢千年のクリスマスツリーです！',
      );
      await kitaru.say_and_wait('ミニチュアですけど。');
      await era.printAndWait(
        '残念ながら、開けてみると手作りのツリーはさっきの騒ぎで二つに折れ、先端の星まで落ちていた。',
      );
      await kitaru.say_and_wait('えっ！ そんな！');
      await kitaru.say_and_wait([
        'ふう……こうなったら、',
        callname,
        ' に外へ付き合ってもらうしか。',
      ]);
      era.drawLine({ content: 'トレセン学園 屋上' });
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' といつも行く屋上へ来た。冬の風に ',
        you.get_colored_name(),
        ' は少し震える。だが ',
        kitaru.get_colored_name(),
        ' は、まったく気にしていない。',
      ]);
      await kitaru.say_and_wait([
        'はい！ ',
        callname,
        '、手のツリーを空に向けて掲げてください！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はそのとおりにした。今夜の星空は絨毯のようで、星を散らした夜がツリーの枝のあいだから差し込む。',
      ]);
      await kitaru.say_and_wait(
        '見てください！ 天上の星を詰め込んだみたいじゃないですか！',
      );
      await kitaru.say_and_wait('ロマンチックです！');
      if (
        era.get('love:56') >= 75 &&
        kitaru.sex_code !== 1 &&
        you.sex_code !== 0
      ) {
        era.printButton('「実物の星のほうがいいな」', 1);
        await era.input();
        await kitaru.say_and_wait('えっ！ 天上の星じゃ、だめですか？');
        await era.printAndWait([
          'その言葉を聞いたとたん、オレンジ髪の',
          kitaru.teen_sex_title,
          'はうつむいた。',
        ]);
        era.printButton(
          '「たとえば……マチカネフクキタルという名の星は、悪くない」',
          1,
        );
        await era.input();
        await kitaru.say_and_wait('えっ！ 私、ですか？');
        await era.printAndWait([
          '名を呼ばれた',
          kitaru.teen_sex_title,
          'が振り返って ',
          you.get_colored_name(),
          ' を見る。十字の星の瞳が、北極星のように明るい。',
        ]);
        await kitaru.say_and_wait(
          'うわぁ！ そんな手があったんですね、参りました！',
        );
        await kitaru.say_and_wait([
          'あの、今日の ',
          callname,
          '、すごく迫力あります！',
        ]);
        await kitaru.say_and_wait('見てるだけで、胸がどきどき、っていうか……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の頬に可愛い赤みが差し、瞳が揺れている。大切にしたくなる顔だ。',
        ]);
        await era.printAndWait([
          '無意識に手を伸ばし、',
          kitaru.get_colored_name(),
          ' に触れただけでも、',
          kitaru.sex,
          'の体を知り尽くした ',
          you.get_colored_name(),
          ' は気づく。',
          kitaru.uma_sex_title,
          'としても少し高い体温だ。',
        ]);
        await era.printAndWait('まず制服の上から、肩を撫でる。');
        await kitaru.say_and_wait('……えっ。');
        await kitaru.say_and_wait([callname, '！']);
        await era.printAndWait([
          'そのまま滑らせて乳房を二度軽く摘むと、',
          kitaru.get_colored_name(),
          ' は合わせて小さな呻きを漏らした。',
        ]);
        await kitaru.say_and_wait('うっ……');
        await kitaru.say_and_wait('そこ、敏感なんです……', true);
        await era.printAndWait([
          'さらに下へ、指腹が腰を撫でる。冬の厚い制服越しなのに、',
          kitaru.get_colored_name(),
          ' は電流が走ったように震えた。',
        ]);
        await kitaru.say_and_wait('……はぁ。');
        await kitaru.say_and_wait(
          '運命の人に、こんなふうに触られるの、久しぶりです……',
          true,
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の吐息が、さらに湿って蕩ける。',
        ]);
        await era.printAndWait([
          '目の前では、整った頬が真っ赤に染まり、瞳が揺れ、涙をためた ',
          kitaru.get_colored_name(),
          ' が、',
          you.get_colored_name(),
          ' に期待の視線を送っている。',
        ]);
        await kitaru.say_and_wait('ほしいです……', true);
        era.printButton('黙って戻る', 1);
        era.printButton('フクキタルを抱き上げる', 2, {
          disabled: kitaru.sex_code === 1 || you.sex_code === 0 || !accept_sex,
        });
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            '何を期待しているのかわからない ',
            kitaru.get_colored_name(),
            ' を相手にせず、',
            you.get_colored_name(),
            ' は振り返って屋上を出た。',
          ]);
        } else {
          await era.printAndWait([
            '有馬記念に備え、',
            kitaru.get_colored_name(),
            ' と ',
            you.get_colored_name(),
            ' は長く禁欲していた。',
          ]);
          await era.printAndWait(
            '思い切りのいいセックスで報いるなら、悪くない選択かもしれない。',
          );
          await kitaru.say_and_wait('えっあっ！');
          await era.printAndWait([
            '脚の力の抜けた ',
            kitaru.get_colored_name(),
            ' をお姫様抱っこで抱き、',
            kitaru.get_colored_name(),
            ' の細い腕が ',
            you.get_colored_name(),
            ' の首に回る。',
          ]);
          await kitaru.say_and_wait([callname, ' の匂い……'], true);
          await kitaru.say_and_wait('熱い……', true);
          await era.printAndWait([
            '屋上の入口まで歩くあいだだけで、',
            kitaru.get_colored_name(),
            ' は我慢できず、顔を ',
            you.get_colored_name(),
            ' の胸に埋め、重ねた脚の擦り方がどんどんひどくなり、裾の下のまずい匂いが ',
            you.get_colored_name(),
            ' の鼻へ届く。',
          ]);
          era.printButton('フクキタルを抱き上げる', 1);
          await era.input();
          await kitaru.say_and_wait('ん……', true);
          await era.printAndWait([
            '口は開いていない。それでも ',
            you.get_colored_name(),
            ' は、腕のなかの担当の意志を読み取った。',
          ]);
          await era.printAndWait('屋上への扉を閉め、寒風を外に閉じ込めた。');
          await era.printAndWait('階段口の空間は、広くない。');
          await era.printAndWait([
            '腕のなかの ',
            kitaru.get_colored_name(),
            ' に背を向けさせ、内側のコンクリート壁に手をつかせ、制服のスカートを巻き上げて下着を見せる。',
          ]);
          await kitaru.say_and_wait(
            ['ん、この体勢だと、', callname, ' が全然見えません……'],
            true,
          );
          await era.printAndWait(
            'その布は雫が落ちそうなほど濡れ、脚を交互に擦るうちに、ほとんど一本の紐にねじれている。',
          );
          era.printButton('脚を開かせる', 1);
          await era.input();
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' は言われたとおり脚を大きく開き、下着を下ろすと、小さな穴と離れた布のあいだに粘い糸が伸びた。',
          ]);
          await era.printAndWait(
            'それから指を入れる。柔らかい肉は、抵抗ひとつできない。',
          );
          await kitaru.say_and_wait('はぁ……はあっ');
          await era.printAndWait([
            '初めは慎重だった。',
            kitaru.get_colored_name(),
            ' の呻きがひどくなるにつれ、残りの指も容赦なくいっしょに入れた。',
          ]);
          await kitaru.say_and_wait('んうっ？！');
          await era.printAndWait([
            '包皮を剥き、腫れた陰核を弄ぶ。大きな快感が ',
            kitaru.get_colored_name(),
            ' の尾骨の先から起き、電流が背を伝って全身へ走る。',
          ]);
          await kitaru.say_and_wait('ひゃあああああ！');
          await era.printAndWait(
            '絶頂を示す水が溢れ、屋上入口のコンクリートへ散る。',
          );
          await era.printAndWait([
            '巻き上げた冬の制服スカートに半分隠れた白い尻が、',
            kitaru.get_colored_name(),
            ' の痙攣に合わせて震え続ける。',
          ]);
          era.printButton('手を伸ばす', 1);
          await era.input();
          await kitaru.say_and_wait('ひゃっ！');
          await era.printAndWait([
            'まず揉み、それから ',
            kitaru.get_colored_name(),
            ' のますます可愛い呻きのなかで、無機物を扱うように加減を忘れ、みだらな形へ変えていく。',
          ]);
          await era.printAndWait(
            '絶頂を示す水が溢れ、屋上入口のコンクリートへ散る。',
          );
          await kitaru.say_and_wait([callname, '……']);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' に急かされ、本番へ入るときだ。',
          ]);
          await era.printAndWait(
            'ズボンを下ろし、すでに勃起したペニスを出す。',
          );
          await kitaru.say_and_wait('ん……');
          await era.printAndWait([
            '近づく熱を察したのか、飢えた小さな穴が開閉して、',
            you.get_colored_name(),
            ' のペニスを招いている。',
          ]);
          await era.printAndWait('それから、太い肉棒が奥まで入った。');
          await era.printAndWait(
            '穴のなかの愛液と空気が、容赦なく押し出される。',
          );
          await era.printAndWait([
            '大人の男の肉棒が穴の空間を独占し、',
            kitaru.teen_sex_title,
            'の秘所をほしいままにする。',
          ]);
          await kitaru.say_and_wait(
            ['穴が縮んで、', callname, ' の肉棒を包んでます。'],
            true,
          );
          await era.printAndWait('どん！');
          await era.printAndWait([
            '鈍い打ちつけの音が、',
            kitaru.get_colored_name(),
            ' の穴の奥から聞こえる。',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' は大きな声を出そうとして、',
            you.get_colored_name(),
            ' の合図で声を殺した。',
          ]);
          await kitaru.say_and_wait(
            '自分の穴の『ちゅっちゅっ』というみだらな音まで聞こえます。',
            true,
          );
          await era.printAndWait([
            'そう思いながらも、',
            kitaru.get_colored_name(),
            ' の両脚はますます開き、立ったままの後背がいっそう形になる。',
          ]);
          await era.printAndWait(
            '環状のピンクの肉が肉棒の衝撃で、蜜を採られる花のように風に痙攣して揺れる。',
          );
          await kitaru.say_and_wait(
            'こんなに激しいと、い、いきます～～～',
            true,
          );
          await kitaru.say_and_wait('イくイくああ！！！');
          await era.printAndWait([
            '力の抜けた恋人を裏返すと、コンクリート壁の冷たさで、',
            kitaru.get_colored_name(),
            ' の焦点の合わない星の瞳が、また合う。',
          ]);
          await era.printAndWait([
            '今度は向かい合った立位だ。',
            you.get_colored_name(),
            ' は、普段は元気な',
            kitaru.uma_sex_title,
            'の、セックス中の顔を見ることができる。',
          ]);
          await kitaru.say_and_wait('どん～ どん～');
          await era.printAndWait(
            'みだらな交合の音が、屋上の階段口の狭い空間に響く。',
          );
          await kitaru.say_and_wait('激しすぎ！ 激しすぎます！', true);
          await kitaru.say_and_wait('い、いきます～');
          await era.printAndWait('抑えていた色っぽい声が、ついに漏れた。');
          await era.printAndWait([
            '言葉ではそうでも、オレンジの尻尾は意志があるように ',
            you.get_colored_name(),
            ' の脚に絡み、ますますきつく絡む穴といっしょに、主人が絶頂に近いことを裏切るように教えている。',
          ]);
          await kitaru.say_and_wait('いきますああ！！！');
          await era.printAndWait(
            '少し前へ傾き、亀頭が子宮口に当てて精を注ぐ。',
          );
          await era.printAndWait(
            '穴と肉棒の接合部から、白い濁りが少し漏れた。',
          );
          era.drawLine();
          await kitaru.print_and_wait('そのあと、どれだけ続いたでしょう。');
          await kitaru.print_and_wait([
            '翌日目が覚めたとき、私は ',
            callname,
            ' の家のベッドにいました。',
          ]);
        }
      } else {
        await era.printAndWait([
          'しばらく祝ったあと、',
          kitaru.get_colored_name(),
          ' といっしょに戻った。',
        ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_143_1: (() => {
    const title = 'さよなら、マチカネ……';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_58 マチカネフクキタルのメイショウドトウへの呼び方
     */
    const f = async (kitaru, doto, you, callname, call_58) => {
      await era.printAndWait([
        'あるいは最後になる。',
        kitaru.get_colored_name(),
        ' のトレーナーとして、',
        kitaru.sex,
        'の今回の初詣に付き合うのは。',
      ]);
      await era.printAndWait([
        'そんな気持ちで、',
        you.get_colored_name(),
        ' はまた、この辺鄙な神社の鳥居の前に立った。',
      ]);
      era.printButton('鳥居をくぐる', 1);

      await era.input();
      await era.printAndWait(
        'おかしい。以前のような、別の世界へ落ちるようなずれは、ない。',
      );
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        'だが、',
        you.get_colored_name(),
        ' が長く考える暇もなく、参道で先に待っていた ',
        kitaru.get_colored_name(),
        ' が、新年の参拝客を迎える準備中の神社へ ',
        you.get_colored_name(),
        ' を引き込んだ。',
      ]);
      era.drawLine();
      await kitaru.say_and_wait('そうそう！ もう少し左へ。');
      await kitaru.say_and_wait('あっ、お、えええっ！！！');
      await kitaru.say_and_wait(['あっ！ 危ないです、', call_58, '！']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' は手際よく、',
        doto.get_colored_name(),
        ' を含む手伝いに来たクラスメイトたちを指揮し、新年の神社を飾っている。',
      ]);
      await era.printAndWait(
        '傍らには、あらかじめ折った工芸品と、掛けるのを待つ灯籠が小山のように積まれ、これから仕事がどれだけあるかを物語っている。',
      );
      era.printButton('「一人前になったな！」', 1);
      await era.input();
      await era.printAndWait([
        '担当をほめると、傍らで人を動かしていた',
        kitaru.teen_sex_title,
        'の両耳が、ごくわずかに揺れた。',
      ]);
      await kitaru.say_and_wait('……はい。');
      await era.printAndWait([
        '高さを測り、',
        kitaru.get_colored_name(),
        ' は紙灯籠担当の茶色い',
        kitaru.uma_sex_title,
        'に、縄をもう少し高くするよう示した。',
      ]);
      await kitaru.say_and_wait([
        '小さいころ、',
        kitaru.elder_sibling_sex_title,
        'との初詣は、本当に人で溢れかえってました！',
      ]);
      await kitaru.say_and_wait(
        'だからずっと準備もしてました。今度こそ、使えるはずです。',
      );
      await era.printAndWait([
        '茶色い髪の',
        kitaru.uma_sex_title,
        'が道に渡した紙灯籠を繋ぎ終えると、暖かい髪色の',
        kitaru.uma_sex_title,
        'は振り返り、',
        you.get_colored_name(),
        ' の返事を待った。',
      ]);
      era.printButton('うなずく', 1);
      era.printButton('「きっと、な」', 2);
      await era.input();
      await era.printAndWait([
        'たしかにそうだ。有馬記念での ',
        kitaru.get_colored_name(),
        ' の走りと発言は、全国の観客を驚かせた。',
      ]);
      await era.printAndWait([
        'SNSではすでに、新年の参拝で、有馬記念を勝ったばかりのこの',
        kitaru.teen_sex_title,
        'から運をもらおうとする声が多い。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の裏の話も、詮索好きなメディアが掘り出した。これほど楽天的な',
        kitaru.teen_sex_title,
        'に、これほど重い過去があったことへの落差以上に、そこから生まれた感動のほうが大きい。',
      ]);
      await you.say_and_wait(['運命を背負って走る', kitaru.uma_sex_title]);
      await era.printAndWait([
        'そう思い、最近の',
        kitaru.uma_sex_title,
        '誌が ',
        kitaru.get_colored_name(),
        ' に冠した名を、無意識に口にした。',
      ]);
      await kitaru.say_and_wait('えっ！！！');
      await kitaru.say_and_wait('大げさです！');
      await kitaru.say_and_wait([
        'それに、',
        kitaru.teen_sex_title,
        'と',
        kitaru.sex,
        'の運命の人、みたいなゴシップまで……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が挙げたあまりに派手な称号のせいなのか、そのあとに浮かんだ真偽半ばの噂のせいなのか、落ち着いて人を指揮していた ',
        kitaru.get_colored_name(),
        ' の頬に、赤みが差した。',
      ]);
      await kitaru.say_and_wait(
        'でも、運命、ですか……本当に、長く困らされました！',
      );
      await kitaru.say_and_wait('それに、私……もう、準備できてると思います……');
      era.printButton('「何の準備だ？」', 1);

      await era.input();
      await kitaru.say_and_wait([
        'あの、',
        callname,
        '、明日、もう一度、郊外の墓地へ付き合ってください。',
      ]);
      await era.printAndWait([
        '好奇心はいったん抑え、',
        you.get_colored_name(),
        ' は ',
        kitaru.get_colored_name(),
        ' の指揮のもと、新年の神社の準備に加わった。',
      ]);
      era.drawLine({ content: '翌日 郊外の墓地' });
      await era.printAndWait([
        '同じ柏の木の下、墓碑の傍ら。',
        you.get_colored_actual_name(),
        ' という名のトレーナーの隣に、オレンジの',
        kitaru.uma_sex_title,
        'が立っている。',
      ]);
      await era.printAndWait([
        '前夜の祓禊は、',
        you.get_colored_name(),
        ' が予想したとおり、参拝客が袖を挙げれば雲になるほどだった。',
      ]);
      await era.printAndWait([
        '客が持ってきた御守や熊手などの開運グッズを焼くだけで、',
        kitaru.get_colored_name(),
        ' も、',
        kitaru.sex,
        'が呼んだ臨時の巫女も、夜中まで忙しかった。',
      ]);
      await era.printAndWait([
        '自分の約束を覚え、',
        kitaru.get_colored_name(),
        ' はそれでも早起きした。細い塵が冬の陽のなかで漂い、大理石の墓碑はガラスのように光っている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は気づいた。',
        kitaru.teen_sex_title,
        'は墓前に立ち尽くすだけで、一言も発していない。',
      ]);
      await you.say_and_wait('ひとりにしてほしいか？');
      await era.printAndWait([
        you.get_colored_name(),
        ' はまた、この問いを出した。初めて ',
        kitaru.get_colored_name(),
        ' にここへ連れてこられたときと同じだ。',
      ]);
      await kitaru.say_and_wait([
        'いえ、いいです、',
        you.actual_name[0],
        '……',
        you.get_colored_actual_name(),
        '、少し、そばにいてください……',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の声は詰まった。いつもの、何事もないような淡さではない。',
      ]);
      await kitaru.say_and_wait('……昨日言った、準備できた、覚えてますか。');
      await kitaru.say_and_wait([
        '笑顔、走る執念、最初の走り方、神社の切り盛り。',
        kitaru.elder_sibling_sex_title,
        'は、たくさん教えてくれました。',
      ]);
      await kitaru.say_and_wait([
        '魂があるなら、この殻を',
        kitaru.elder_sibling_sex_title,
        'に捧げても、いいと思ってました！',
      ]);
      await era.printAndWait([
        'ほとんど唸るようにそう言った ',
        kitaru.get_colored_name(),
        ' は、',
        kitaru.elder_sibling_sex_title,
        'の白黒写真を見る。三年で大人びた横顔は、写真の',
        kitaru.uma_sex_title,
        'とほとんど変わらない。',
      ]);
      await kitaru.say_and_wait([
        'でも、',
        kitaru.elder_sibling_sex_title,
        'は絶対嫌だと思うし……',
        callname,
        ' も、嫌ですよね。',
      ]);
      await kitaru.say_and_wait([
        '……準備できました。',
        kitaru.elder_sibling_sex_title,
        'を、送り出す準備が！',
      ]);
      await kitaru.say_and_wait(
        '忘れじゃありません。別れです……私、自分の運命を走る準備ができました！',
      );
      await kitaru.say_and_wait([
        'ここに立って、',
        callname,
        ' が傍らで見ていてくれる。陽が顔に落ちるみたいで……',
      ]);
      await kitaru.say_and_wait([
        kitaru.elder_sibling_sex_title,
        '、今の私、幸せです……',
      ]);
      await era.printAndWait([
        '一陣の風が吹き、葉のさらさらが遠く空霊に響く。昨夜 ',
        kitaru.get_colored_name(),
        ' が奏でた神楽のように……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_143_1: (() => {
    const title = '締めくくり';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' との、怪力乱神に満ちた三年は、やっと終わる。新しい担当を探す計画も、日程に載せないといけない。',
      ]);
      await era.printAndWait(['だが、その前に、まだ用事がある。']);
      await era.printAndWait([
        'この三年、事務所に置いた分、',
        you.get_colored_name(),
        ' の家に置いた分、',
        kitaru.get_colored_name(),
        ' が流したあとも残った開運グッズを、持ち主へ返さないといけない。階下で ',
        kitaru.get_colored_name(),
        ' の母親に簡単に挨拶し、',
        you.get_colored_name(),
        ' はフクキタル家の屋根裏へ入った。',
      ]);
      await kitaru.say_and_wait(['あっ！ ', callname, '、やっと来ました！']);
      await era.printAndWait([
        '木の床に胡坐をかいた ',
        kitaru.get_colored_name(),
        ' は、屋根裏の黄ばんだ古書とさまざまな古物に囲まれている。',
      ]);
      await era.printAndWait([
        'だが、',
        kitaru.sex,
        'が慣れた様子で出入りするのを見ると、ここは',
        kitaru.sex,
        'の領域だと言ったほうがいい。',
      ]);
      await kitaru.say_and_wait('このあとは、ここに置いておきましょう！');
      await era.printAndWait([
        kitaru.sex,
        'は選別した品を、空いた棚へ順に並べ、傍らのタコ顔の像や、蛍光の偏った立方八面体のような奇妙な品と並べる。',
      ]);
      await you.say_and_wait('ずいぶん多いな');
      await kitaru.say_and_wait('はい、私が集めたものだけじゃありません。');
      await kitaru.say_and_wait(
        '参拝客が神社に除災で置いて、あとで取りに来なかったものも、ここに流れ着くんですね。',
      );
      await kitaru.say_and_wait(
        'だから、前の世紀のものだって、なかに見つかるかもしれませんよ！',
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の溜め込み癖は、どうやら家の遺伝らしい。',
      ]);
      await era.printAndWait([
        '整理は続く。部屋は静かで、聞こえるのは ',
        kitaru.get_colored_name(),
        ' の足音だけだ。',
      ]);
      await kitaru.say_and_wait(
        'ところで、運命の人との契約は、もう終わりました。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' が傍らの古書の文字を読もうとして時間を潰していると、棚の向こうから突然 ',
        kitaru.get_colored_name(),
        ' の声がした。ずいぶん経ってから、',
        kitaru.sex,
        'は次の言葉を出した。',
      ]);
      await kitaru.say_and_wait(
        'あの、運命の人は、このあとどうするつもりですか？',
      );
      era.printButton('「このままトレーナーを続けるだろう？」', 1);
      era.printButton('「新しい担当を募集する計画は、もうある」', 2);
      if ((await era.input()) === 1) {
        await kitaru.say_and_wait('ん……意外じゃないです');
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' は棚の隙間から、',
          kitaru.get_colored_name(),
          ' の耳が一度、跳ねるのを見た。',
        ]);
      }
      await you.say_and_wait('フクキタルは？');
      await kitaru.say_and_wait('たぶん……家の神社を継ぐ、ですかね。');
      await kitaru.say_and_wait('この三年で、神社の火は前より盛んですから。');
      await kitaru.say_and_wait('大学へ行く、もあり得ます？');
      await kitaru.say_and_wait(
        'ミスカトニック大学の民俗学なら出願できると思います。トレセンの大学部に入るのも、難しくはないです。',
      );
      await era.printAndWait(
        'そうひとりで推論しつつ、馬の尻尾が何度も叩いている。',
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' はかなり真剣になり、普段のふざけた様子も消えた。',
      ]);
      await kitaru.say_and_wait('はぁ……');
      await kitaru.say_and_wait(
        'とにかく、殿堂入りの選考結果を見てから、ですね。',
      );
      await era.printAndWait([
        kitaru.sex,
        'は棚から水晶球を下ろし、布に包んだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は覚えている。これは',
        kitaru.sex,
        'がメイクデビューのあと、ずいぶん頼んで ',
        you.get_colored_name(),
        ' がやっと買ってやった褒美だ。',
      ]);
      await kitaru.say_and_wait('運命の人、これを事務所に置いてください。');
      await kitaru.say_and_wait([
        '卒業して、私が ',
        callname,
        ' のそばにいなくても、きっと幸運を運んでくれます！',
      ]);
      await era.printAndWait([
        'そのあと、',
        kitaru.get_colored_name(),
        ' が品の由来を一つずつ話すのを聞いた。',
      ]);
      await era.printAndWait([
        'こうしてのんびり、殿堂入りの結果を待つのも、悪くない。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_palace: (() => {
    const title = '二つの世界の主';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        '有馬記念の走りが神社にもたらした人気は、来るのも早いが、去るのも早い。',
      );
      await era.printAndWait([
        '神社はまた、',
        you.get_colored_name(),
        ' が初めて ',
        kitaru.get_colored_name(),
        ' に会ったときの、閑散とした姿に戻った。',
      ]);
      await era.printAndWait([
        '違うと言えば、参拝客に菊花賞を目指す',
        kitaru.uma_sex_title,
        'が増えたことくらいか。',
      ]);
      await era.printAndWait('それに……');
      await kitaru.say_and_wait(['お疲れさまです、', callname, '！']);
      await era.printAndWait([
        '巫女の装いの ',
        kitaru.get_colored_name(),
        ' が、',
        you.get_colored_name(),
        ' の腕を掴んだ。',
      ]);
      await kitaru.say_and_wait('雑務までさせて、すみません……');
      await era.printAndWait([
        'もともと有馬記念で急に増えた参拝客への対応だったが、神社を手伝うこの習慣は、',
        you.get_colored_name(),
        ' のほうに残ってしまった。',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' のトゥインクル・シリーズは、やっと終わったばかりだ。次に合う担当にいつ会えるかも、わからない。',
      ]);
      await kitaru.say_and_wait('少し休みましょう！');
      await era.printAndWait(
        '夕陽に照らされた神社を肩を並べて歩く。巫女の下駄が石畳で、たたたと鳴る。',
      );
      await era.printAndWait([
        '目の前の ',
        kitaru.get_colored_name(),
        ' が、足を止めるまで。',
      ]);
      await era.printAndWait([
        '目の前は見慣れた賽銭箱だ。最初、',
        you.get_colored_name(),
        ' はここで ',
        kitaru.get_colored_name(),
        ' と出会った。',
      ]);
      await kitaru.say_and_wait([
        'そういえば、',
        callname,
        ' は数ヶ月後、新しい担当を迎えますよね。',
      ]);
      await kitaru.say_and_wait('お祈り、しましょうか？');
      era.printButton('うなずく', 1);
      era.printButton('首を振る', 2);

      if ((await era.input()) === 1) {
        await era.printAndWait([
          kitaru.sex,
          'は御幣を振ろうとして、すぐ止め、眉を寄せた。',
        ]);
        await kitaru.say_and_wait(
          '……やっぱり、このための祈りだと、心を込めきれません。',
        );
      } else {
        await kitaru.say_and_wait('わかりました！');
        await kitaru.say_and_wait([
          'でも、',
          callname,
          ' がうんと言っても、たぶんやらなかったと思います。',
        ]);
      }
      await era.printAndWait([
        'また沈黙が落ち、落ち続ける残陽が ',
        kitaru.get_colored_name(),
        ' に金色のベールをかけた。',
      ]);
      await era.printAndWait([
        '御幣を傍らの賽銭箱に置き、',
        kitaru.get_colored_name(),
        ' が沈黙を破った。',
      ]);
      await kitaru.say_and_wait([callname, '、逢魔が時、知ってますか？']);
      era.printButton('うなずく', 1);
      era.printButton('首を振る', 2);
      await era.input();
      await kitaru.say_and_wait(
        'はい！ 黄昏のころです。二つの世が交わる時刻で、神も魔もいちばん人の世に干渉しやすい、と言われてます。',
      );
      await kitaru.say_and_wait('なら……');
      await kitaru.say_and_wait(
        '有馬記念の試しを越え、殿堂入りして、かろうじて神になった私。',
      );
      await kitaru.say_and_wait('これで、自分の願いを叶えられたりしませんか？');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の固く握った右手が ',
        you.get_colored_name(),
        ' の前に伸び、それから',
        kitaru.sex,
        'の小指を出した。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の見慣れた、指切りの誘いだ。',
      ]);
      await kitaru.say_and_wait('これから先も、ずっと付き合ってくれますよね？');
      await kitaru.say_and_wait(`私のトレーナー${you.adult_sex_title}……`);
      await kitaru.say_and_wait('私の運命の人……');
      await kitaru.say_and_wait('それに……');
      await era.printAndWait([
        kitaru.teen_sex_title,
        'の声はだんだん蚊の鳴くほど細くなり、赤みが温かい夕陽とともに',
        kitaru.sex,
        'の頬を染める。',
      ]);
      await era.printAndWait([kitaru.sex, 'は顔を上げ、瞳に星が揺れている。']);
      await kitaru.say_and_wait('私の、恋人。');
    };
    f.title = title;
    return f;
  })(),
  os_hot_line: (() => {
    const title = 'ホットライン';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await era.printAndWait([
        '勢いづいた ',
        kitaru.get_colored_name(),
        ' に引かれ、旧校舎をあちこち回っている。',
      ]);
      await kitaru.say_and_wait([callname, '！']);
      await kitaru.say_and_wait(
        '聞いたんです！ この番号に電話すれば！ 開運のエネルギーがもらえるそうです！',
      );
      await era.printAndWait([
        '細そうな腕なのに、抗えない力で ',
        you.get_colored_name(),
        ' の腕を鎖し、逃げる気を封じている。',
      ]);
      era.drawLine({ content: 'しばらくして' });
      await kitaru.say_and_wait('ふう……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' がよいと判断した時刻になった。空は暗く、窓から差す陽が廊下の黄ばんだ壁に光斑を作っている。',
      ]);
      await era.printAndWait([
        'だが……',
        you.get_colored_name(),
        ' の担当の瞳に、興奮で溢れそうな光彩には、とても敵わない。',
      ]);
      await kitaru.say_and_wait([
        'では、',
        callname,
        '！ 電話をかけましょう！',
      ]);
      await era.printAndWait([
        'あらかじめ選んだ儀式の場、つまり古い机と椅子に囲まれた教室の真ん中で、',
        kitaru.get_colored_name(),
        ' は受話器を取った。',
      ]);
      let a = true,
        b = true,
        c = true;
      do {
        era.printMultiColumns(
          [
            { c: '電話をかける', e: a },
            { c: '番号の詳細を訊く', e: b },
            { c: '周囲を見る', e: c },
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { disabled: !e.e, width: 8 },
            content: e.c,
            type: 'button',
          })),
        );
        switch (await era.input()) {
          case 1:
            a = b = c = false;
            await era.printAndWait('ツー……ツー……');
            era.drawLine({ content: '数秒後' });
            break;
          case 2:
            b = false;
            await kitaru.say_and_wait('ん……掲示板で見たんです。');
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' は首を傾げ、自分の行いを少しもおかしいと思っていないらしい。',
            ]);
            break;
          case 3:
            c = false;
            await era.printAndWait(
              '静かすぎる。窓の外から、たまに鳥の声が入るだけだ。',
            );
            await era.printAndWait('陽が沈もうとしている……');
        }
      } while (a || b || c);

      await era.printAndWait('チリンチリン……チリンチリン……');
      await kitaru.say_and_wait('えっ！？');
      await kitaru.say_and_wait(['あの……', callname, '、聞こえましたか？']);
      await era.printAndWait('据え置きのベルのように聞こえる。');
      await era.printAndWait(
        '隣の教室かららしい。がらんとした校舎のなかで、音が反響している。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        kitaru.get_colored_name(),
        ' は廊下へ出て、その教室を覗いた。',
      ]);
      await kitaru.say_and_wait('ほ、ほ、本当ですか！');
      await era.printAndWait(
        '埃だらけの教壇に、古い据え置き電話が、唐突に置いてある。',
      );
      await era.printAndWait(
        '赤い筐体が樹脂の光沢を帯び、本来はダイヤル盤がある場所は黒いつまみに代わっている。',
      );
      await era.printAndWait(
        'その電話は、そこに忽然と現れたように、線も繋がずに鳴っている。',
      );
      await kitaru.say_and_wait('い、いま……どうします？');
      if (era.get('love:56') >= 50) {
        await era.printAndWait([
          'オレンジ髪の',
          kitaru.teen_sex_title,
          'はナマケモノのように ',
          you.get_colored_name(),
          ' の腰に抱きつき、震えながら、まだ鳴り続けるその通信機を指した。',
        ]);
      } else {
        await era.printAndWait([
          'オレンジ髪の',
          kitaru.teen_sex_title,
          'は震えながら ',
          you.get_colored_name(),
          ' の裾を摘み、怯えて、まだ鳴り続けるその通信機を指した。',
        ]);
      }

      a = b = c = true;
      do {
        era.printMultiColumns(
          [
            { c: '電話を取る', e: a },
            { c: 'フクキタルに取らせる', e: b },
            { c: '離れる', e: c },
          ].map((e, i) => ({
            accelerator: i + 1,
            config: { disabled: !e.e, width: 8 },
            content: e.c,
            type: 'button',
          })),
        );
        switch (await era.input()) {
          case 1:
            a = b = c = false;
            era.printButton('「もしもし？」', 1);
            era.printButton('「こんにちは？」', 2);
            await era.input();
            await kitaru.say_as_unknown_and_wait('……#&A%……');
            await era.printAndWait([
              '応答らしい音はした。だが ',
              you.get_colored_name(),
              ' には、確かめようがない。',
            ]);
            era.printButton('「もしもし？」', 1);
            era.printButton('「こんにちは？」', 2);
            await era.input();
            await kitaru.say_as_unknown_and_wait('……@&*#……&&￥……');
            await era.printAndWait(
              '受話器は雑音と、テープを逆再生したような裂ける音で満ちている。',
            );
            era.printButton('切る', 1);
            era.printButton('「もしもし？」', 2);
            if ((await era.input()) === 1) {
              await era.printAndWait([
                you.get_colored_name(),
                ' が受話器を置こうとしたとき、コンピュータで合成したような声が、向こうからした……',
              ]);
            } else {
              await era.printAndWait(
                'コンピュータで合成したような声が、向こうからした……',
              );
            }
            era.println();
            await typing(
              `マチカネフクキタルを大切に ${you.actual_name}トレーナー`,
              kitaru.color,
            );
            era.println();
            await era.printAndWait('ツー……ツー……');
            await era.printAndWait('切られた……');
            ret.push(1);
            break;
          case 2:
            a = b = c = false;
            await kitaru.say_and_wait('えっ！ そうしますか！！！');
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' は震えながら受話器を握った。',
            ]);
            await kitaru.say_and_wait('……えっ！？');
            await era.printAndWait([
              '向こうに出た相手に、少し意外だったらしい。',
              kitaru.get_colored_name(),
              ' の顔に驚きが浮かぶ。',
            ]);
            await kitaru.say_and_wait('ん……はい……。');
            await kitaru.say_and_wait(
              '……はい、トレーナー、私のトレーナーもいます！',
            );
            await kitaru.say_and_wait('……わかりました。');
            await era.printAndWait([
              you.get_colored_name(),
              ' は、',
              kitaru.get_colored_name(),
              ' が電話を切るのを見た。目の周りが、少し赤い。',
            ]);
            await era.printAndWait([
              'そのあと、向こうが誰だったのかは聞けなかった。',
              kitaru.sex,
              'は、この件を完全に忘れたように振る舞った。',
            ]);
            ret.push(2);
            break;
          case 3:
            c = false;
            await kitaru.say_and_wait('は、はい……私も、これは少し……');
            era.drawLine({ content: 'しばらくして' });
            await era.printAndWait('チリンチリン……チリンチリン……');
            await kitaru.say_and_wait(
              'えっ！？ どうしてまた戻ってきてるんですか！！！！',
            );
            await era.printAndWait([
              kitaru.get_colored_name(),
              ' の悲鳴が、廊下に響く。',
            ]);
        }
      } while (a || b || c);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  os_god_study: (() => {
    const title = '神学の研究会';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '今日の予定は、',
        kitaru.get_colored_name(),
        ' と事務所で勉強することだ。がらんとした椅子……どうやら',
        kitaru.sex,
        'は今日、遅刻らしい。',
      ]);
      await kitaru.say_and_wait([callname, '！ ', callname, '！']);
      await kitaru.say_and_wait([callname, '！！！']);
      await kitaru.say_and_wait('前回の問題の答え、見つかりましたよ！');
      await era.printAndWait([
        you.get_colored_name(),
        ' が電話しようとしたとき、やかましい ',
        kitaru.get_colored_name(),
        ' が、どこから持ってきたのかわからない本を抱えて部屋へ飛び込んできた。',
      ]);
      await kitaru.say_and_wait('つまり、神社が祀ってる主神は誰か、です！');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、たしかに ',
        kitaru.get_colored_name(),
        ' にそれを訊いた覚えがある。',
      ]);
      await kitaru.say_and_wait(
        'ここ、見てください！ 三女神には複数の化身があるそうです！',
      );
      await kitaru.say_and_wait('白興様もいますよ！');
      await era.printAndWait([
        kitaru.sex,
        'は ',
        you.get_colored_name(),
        ' に、その黄ばんだ大きな本を掲げた。なかには、いかにもらしい筆致で、何柱かの女神のさまざまな化身と、あり得る推測が詳しく描かれている。',
      ]);
      await kitaru.say_and_wait(
        'それから、帰って前の神主たちの手記も見ました！',
      );
      await kitaru.say_and_wait(
        '私たちの神社が祀ってるのは、化身が多すぎるあの女神で、だから具体的な姿がないんだと思います！',
      );
      await kitaru.say_and_wait(
        '見てください！ ここには眷族、みたいな概念も出てます。',
      );
      await kitaru.say_and_wait('シャンタク鳥、とか！');
      era.printButton('「眷族？」', 1);
      await era.input();
      await kitaru.say_and_wait('はい！');
      await kitaru.say_and_wait('神に眷顧される、みたいな意味です！');
      await kitaru.say_and_wait([
        kitaru.uma_sex_title,
        'も、そのなかにいますよ！',
      ]);
      await era.printAndWait([
        '頭が急に痛くなり、目の前のオレンジの',
        kitaru.uma_sex_title,
        'が、かすかに現実味を失っていく……',
      ]);
      await kitaru.say_and_wait('あっ！ そうです！');
      await era.printAndWait([
        '何かを思い出したのか、',
        kitaru.sex,
        'は ',
        you.get_colored_name(),
        ' の手を握り、笑みをたたえて ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      await kitaru.say_and_wait('将来、私も神になったら！');
      await kitaru.say_and_wait([callname, ' への神眷は、絶対忘れませんよ！']);
      await era.printAndWait([
        '言ったことが法になったように、',
        you.get_colored_name(),
        ' の意識はまた澄んだ。持ち直した ',
        you.get_colored_name(),
        ' はすぐ、',
        kitaru.get_colored_name(),
        ' に今日の勉強を急かした。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_luck_name: (() => {
    const title = '幸運を呼ぶ名前';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '最近の座学の成績が芳しくないので、',
        kitaru.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の指示で、トレーニング室に残って自習している。',
      ]);
      await era.printAndWait('がらっ……');
      await era.printAndWait([
        '今日の監督である ',
        you.get_colored_name(),
        ' は、フクキタルの進み具合を見ようとした。だが入る前から、卓上でサイコロが転がる音が聞こえた。',
      ]);
      await era.printAndWait([
        '扉に背を向けた',
        kitaru.teen_sex_title,
        'は、何かを真剣に考えているように見える。',
      ]);
      await kitaru.say_and_wait('七福神……');
      await kitaru.say_and_wait('水晶……');
      await kitaru.say_and_wait('霊動……');
      await kitaru.say_and_wait('ん……『福来』は残したほうがいいですかね？');
      await era.printAndWait(
        'ときどき草稿に書き込んでいる。かなり大事なことなのだろう。',
      );
      era.printButton('「勉強は進んだか？」', 1);
      era.printButton('「何を考えてる？」', 2);
      await era.input();
      await kitaru.say_and_wait('あらあら！ ちょうどよかったです！');
      await kitaru.say_and_wait([callname, '！']);
      await era.printAndWait([
        '気が散っていたことを指摘されても、少しも悪びれず、',
        kitaru.get_colored_name(),
        ' は目を輝かせて入ってきた ',
        you.get_colored_name(),
        ' を見た。',
      ]);
      await kitaru.say_and_wait(
        'あの、最近成績が悪いのは、運の問題なんじゃないかと思って。',
      );
      await kitaru.say_and_wait('改名したら、よくなったりしませんか？');
      await kitaru.say_and_wait('見てください！');
      await era.printAndWait([
        kitaru.sex,
        'は、本来は計算の手順を書く草稿を ',
        you.get_colored_name(),
        ' に掲げた。びっしり、',
        kitaru.get_colored_name(),
        ' が思いついた名前が書いてある。',
      ]);
      await kitaru.say_and_wait('うっ……こんなに書いても、無駄骨みたいです！');
      await kitaru.say_and_wait([
        'やっぱり ',
        kitaru.get_colored_name(),
        ' がいいです！',
      ]);
      await era.printAndWait(
        'そう言うと、目の前のオレンジの団子は、目に見えてしぼんだ。',
      );
      era.printButton('慰める（スキルPt+10）', 1);
      era.printButton('離れる（全ステータス+3、だが……）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait('無駄骨、でもないだろ！');
        await kitaru.say_and_wait('えっ！ なぜですか？');
        await you.say_and_wait('ん……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' の詰問するような視線のなかで、',
          you.get_colored_name(),
          ' は、いつか使えるかもしれない場面を、つい口にした。',
        ]);
        await you.say_and_wait('たとえば、将来の子供の名前、とか？');
        await kitaru.say_and_wait('えっ……子供の名前、ですか？');
        await kitaru.say_and_wait('……');
        await kitaru.say_and_wait([callname, ' との、子供、ですか？']);
        if (era.get('love:56') >= 75) {
          await kitaru.say_and_wait([
            'あっ！ ',
            callname,
            '、もう子供のことまで考えてるんですか？',
          ]);
          await kitaru.say_and_wait('ありゃ！！！');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の頭を何度か叩くと、妄想していた',
            kitaru.sex,
            'も、やっと勉強に戻れた。',
          ]);
        } else {
          await kitaru.say_and_wait('あっ！！！');
          await era.printAndWait([
            '今何を言ったか、遅れて気づいた ',
            kitaru.get_colored_name(),
            ' が、後から悲鳴を上げた。',
          ]);
          await era.printAndWait([
            'そのあと、真っ赤な顔の ',
            kitaru.get_colored_name(),
            ' に部屋から押し出された。',
          ]);
        }
      } else {
        await era.printAndWait([
          kitaru.get_colored_name(),
          ' に、勉強を続けさせた。',
        ]);
        await era.printAndWait([
          'なぜか、',
          kitaru.get_colored_name(),
          ' の機嫌は下がった。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  oc_miso_fortune: (() => {
    const title = '味噌占い';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([
        'では！ ',
        callname,
        '！ 今日は味噌汁占いをしましょう！',
      ]);
      await era.printAndWait([
        '上機嫌の ',
        kitaru.get_colored_name(),
        ' が、味噌汁を一杯、',
        you.get_colored_name(),
        ' の前に置いた。',
      ]);
      era.printButton('飲む', 1);
      era.printButton('飲まない', 2);
      if ((await era.input()) === 2) {
        await kitaru.say_and_wait('えっ！？');
        await kitaru.say_and_wait([callname, '！']);
        await era.printAndWait([
          '両手を合わせた',
          kitaru.teen_sex_title,
          'が ',
          you.get_colored_name(),
          ' の前で、いじらしい顔をする。オレンジの尻尾も、小さくなって垂れた。',
        ]);
        await era.printAndWait('これでは、断れないだろう。');
        era.printButton('飲む', 1);
        await era.input();
      }
      await you.say_and_wait('ごく');
      await era.printAndWait([
        kitaru.uma_sex_title,
        '自身の味覚が鋭すぎるせいか、この汁の味付けは少し薄すぎる！',
      ]);
      await era.printAndWait([
        'だがそれを除けば、旨みのなかに甘さがあり、',
        kitaru.get_colored_name(),
        ' がかなり気を配ったのはわかる。',
      ]);
      await kitaru.say_and_wait([callname, '！ 味は、どうですか？']);
      await era.printAndWait([
        kitaru.teen_sex_title,
        'の黄水晶のような両目が、きらきらと ',
        you.get_colored_name(),
        ' を見ている。',
      ]);
      era.printButton('「少し薄いな」', 1);
      await era.input();
      await kitaru.say_and_wait('えっ！');
      await era.printAndWait(
        '飲み終えた椀の底を指先で少し掬い、ピンクの舌先を出して舐めた。',
      );
      await kitaru.say_and_wait([
        'んっ！ ',
        callname,
        ' の味は、濃いめなんですね……',
      ]);
      era.printButton('「占いのほうは？」', 1);
      await era.input();
      await kitaru.say_and_wait('あっ！ それですか！');
      await era.printAndWait([
        kitaru.sex,
        'は気軽に、',
        you.get_colored_name(),
        ' が置いた磁器の椀を取り上げ、底を眺めた。',
      ]);
      await kitaru.say_and_wait('味噌の滓の形からすると……この占いの結果は——');
      await kitaru.say_and_wait('凶！');
      await era.printAndWait('意外ではない、と言うべきか。');
      await kitaru.say_and_wait([
        'なので！ 厄を避けるために、',
        callname,
        '、フクのほかの料理も試してみますか？',
      ]);
      if (kitaru.sex_code !== 1) {
        await kitaru.say_and_wait('巫女の作る料理には、神力が籠もってますよ！');
      }
      await era.printAndWait(
        'そのあと、塩のきつい卵焼きと、少し焦げた焼き魚を続けて味わった。',
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' の料理の腕は、まだ伸びしろが大きいらしい。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  og_fortune_game_duel_1: (() => {
    const title = '占い師とのゲーム対決！ Ⅰ';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' のゲーム、とくに対抗性の強いジャンルでの才能は、意外なほど高い、と言うべきか。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が',
        kitaru.sex,
        'をテレビゲームの深みへ連れていって以来、初めは ',
        kitaru.get_colored_name(),
        ' の未熟で優勢を取れても、あとでは',
        kitaru.sex,
        'の、占いのように先を読む意識に一方的に潰される。',
      ]);
      await kitaru.say_and_wait([
        'はいはい！ ',
        callname,
        '、何を考えてるんですか？',
      ]);
      await era.printAndWait([
        'またゲームの暇な時間だ。機の前に座った担当が ',
        you.get_colored_name(),
        ' にコントローラを掲げ、尻尾で傍らのソファ、プレイヤー2の席を叩いた。',
      ]);
      await era.printAndWait([
        '健康で肉感のある両脚が交差してソファの肘に載り、露出したつま先が怠そうに揺れている。',
      ]);
      await era.printAndWait(['では ', you.get_colored_name(), ' は……']);
      era.printButton('二人用の格闘ゲーム', 1);
      era.printButton('レース寄りのレーシングゲーム', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          '互角にやり合ったが、最後は負けた……おかしい、なぜ負ける。',
        );
        await era.printAndWait([
          '最初に ',
          kitaru.get_colored_name(),
          ' にゲームを教えたのは ',
          you.get_colored_name(),
          ' だ。あの操作意識は、',
          kitaru.uma_sex_title,
          'の反応速度で説明しても、通じない。',
        ]);
      } else {
        await era.printAndWait('危ういところだった。');
        await era.printAndWait([
          'レーシングゲームをやった。幸い最終周、',
          kitaru.get_colored_name(),
          ' が反応する前に追い越せた。',
        ]);
        await era.printAndWait([
          'それにしても、',
          kitaru.sex,
          'はどうやってバックミラーを見ずに ',
          you.get_colored_name(),
          ' の車の位置を塞いだんだ。',
        ]);
      }
      await kitaru.say_and_wait('ん……たぶん、占い師の予感、です。');
      await you.say_and_wait('予感？');
      await kitaru.say_and_wait('はい！');
      await kitaru.say_and_wait([
        'そうです！ ',
        callname,
        ' がこのあと何をするか、だいたいわかるんです。',
      ]);
      await kitaru.say_and_wait(
        '残念ながら、画面の向こうのほかのプレイヤーには効きませんけど……',
      );
    };
    f.title = title;
    return f;
  })(),
  og_fortune_game_duel_2: (() => {
    const title = '占い師とのゲーム対決！ Ⅱ';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      const ret = [];
      await kitaru.say_and_wait('やったー！！！');
      await era.printAndWait([
        kitaru.sex,
        'とゲームをすると約束したあと、',
        kitaru.get_colored_name(),
        ' はやっと少し落ち着いた。',
      ]);
      await kitaru.say_and_wait([
        'そうです！ やっぱり ',
        callname,
        ' と遊ぶのが面白いんです！',
      ]);
      await era.printAndWait([
        'だが ',
        kitaru.get_colored_name(),
        ' の能力を考えると、',
        you.get_colored_name(),
        ' が付き合うのは、明らかに自分で苦を買うことだ。',
      ]);
      await kitaru.say_and_wait('えっ！？');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' に占いの力を使うなと言ったあと、',
        kitaru.sex,
        'は少し不満そうな顔をした。わずかな優位を手放したくないらしい。',
      ]);
      await kitaru.say_and_wait('もちろん大丈夫です！');
      await era.printAndWait([
        'おかしい。',
        kitaru.sex,
        'は少し考えただけで、あっさり ',
        you.get_colored_name(),
        ' の頼みを受けた。',
      ]);
      await era.printAndWait(['では ', you.get_colored_name(), ' は……']);
      era.printButton('二人用の格闘ゲーム', 1);
      era.printButton('レース寄りのレーシングゲーム', 2);
      const ret1 = await era.input();
      if (ret1 === 1) {
        await era.printAndWait([
          '前回の敗北は、やはり',
          kitaru.sex,
          'の得体の知れない能力のせいだったらしい。',
          kitaru.get_colored_name(),
          ' が操る錨を持ったキャラが、残りの体力がほとんどない状態で ',
          you.get_colored_name(),
          ' に画面端まで追い詰められるまで。',
        ]);
      } else {
        await era.printAndWait([
          '前回の敗北は、やはり',
          kitaru.sex,
          'の得体の知れない能力のせいだったらしい。適切な操作で、',
          you.get_colored_name(),
          ' の車はずっと ',
          kitaru.get_colored_name(),
          ' の車の前を走っている。',
        ]);
      }
      if (kitaru.sex_code !== 1 && you.sex_code !== 0) {
        await era.printAndWait('勝ち確定……か？');
        await you.say_and_wait('ん……');
        await era.printAndWait(
          'まだ眠っていた股間のものが、布越しに、かなりまずい感触を突然受けた。',
        );
        await kitaru.say_and_wait('へい！');
        await era.printAndWait('一度、二度、それから続けざまの軽い触れ。');
        await era.printAndWait([
          you.get_colored_name(),
          ' は無意識に俯いて見た。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の両脚のあいだで、',
          kitaru.get_colored_name(),
          ' の右足が布越しに乗っている。露出した丸いつま先が、',
          kitaru.sex,
          'がスティックを動かすリズムで、だんだん頭を上げる ',
          you.get_colored_name(),
          ' の肉棒を軽く突いている。',
        ]);
        await kitaru.say_and_wait('はっ！');
        await era.printAndWait([
          you.get_colored_name(),
          ' が気を取られた隙に、',
          kitaru.get_colored_name(),
          ' は機会を掴んだ。',
        ]);
        await era.printAndWait(
          '真珠のような可愛い足指を揃え、張った甲といっしょに前へ押し、布に阻まれてすでに苦しい肉棒へ、さらに強い刺激を一気に与えた。',
        );
        await you.say_and_wait('おい！ マチカネフクキタル！');
        await kitaru.say_and_wait(['あら、', callname, '、ミスしましたね！']);
        await you.say_and_wait('くっ……');
        await era.printAndWait([
          '注意されても ',
          kitaru.get_colored_name(),
          ' はつけあがり、',
          you.get_colored_name(),
          ' は背を反らさずにはいられない。手のスティックも股間の肉棒も、',
          kitaru.sex,
          'の動きに合わせて震える。',
        ]);
        if (ret1 === 1) {
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' が用意していた一連の技のあと、画面はちょうどよく、',
            you.get_colored_name(),
            ' が敗れたことを示す SLASH！ を出した。',
          ]);
        } else {
          await era.printAndWait([
            kitaru.uma_sex_title,
            'らしい塗装のレーシングカーがガードレールを突き破り、谷へ落ちた。',
          ]);
        }
        await kitaru.say_and_wait(['あら、', callname, '、負けましたね？']);
        await era.printAndWait([
          'さっきまで ',
          you.get_colored_name(),
          ' の下半身に触れていた足は、もう引っ込められている。',
        ]);
        await era.printAndWait([
          '布のなかで膨らんだ肉棒が ',
          you.get_colored_name(),
          ' を苦しめる。なのに原因の本人は、何事もないように ',
          you.get_colored_name(),
          ' を見ている。',
        ]);
        await kitaru.say_and_wait('もう一局、やりますか？');
        await era.printAndWait([
          '言葉に媚が混じった ',
          kitaru.get_colored_name(),
          ' はコントローラを置き、横を向いてこちらを見る。',
        ]);
        await era.printAndWait([
          'シャツの下の美しい背の線と、尻の割れから分かれた滑らかな裸脚が、遠慮なく ',
          you.get_colored_name(),
          ' の前に広がっている。',
        ]);
        await kitaru.say_and_wait('それとも……フクを、罰したい、ですか？');
        era.printButton('はい', 1);
        era.printButton('いいえ', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await era.printAndWait([
            you.get_colored_name(),
            ' は立ち上がった。動いたのを見た ',
            kitaru.get_colored_name(),
            ' は、罰を受ける慌てなどなく、むしろ……',
          ]);
          await era.printAndWait([
            '……',
            you.get_colored_name(),
            ' の見間違いでなければ、その瞳が ',
            you.get_colored_name(),
            ' の下半身にできたテントを掠めたとき、',
            kitaru.sex,
            'は唾を飲み込んだ。',
          ]);
          await era.printAndWait([
            'さっき悪さをした小さな足を掴み、こいつをソファへ押し倒し、ズボンを下ろして、さっきフクキタルに煽られて準備の整った肉棒を、フクキタルの裾の下へ入れた。',
          ]);
          await kitaru.say_and_wait('やっ！');
          await era.printAndWait(
            'これから何が来るかを知って、すでに水染みのついた下着を指でよけ、肉棒を熱い入口に二度擦ってから、奥まで入れた。',
          );
          await era.printAndWait('どん！');
          await kitaru.say_and_wait('んあっ！！！');
          await era.printAndWait([
            '体格差のせいもあり、',
            kitaru.get_colored_name(),
            ' の柔らかい宮口は、',
            you.get_colored_name(),
            ' の肉棒にとって、届かない場所ではない。',
          ]);
          await era.printAndWait(
            '一度目の打ちつけで、快感を味わったフクキタルは、もう声を抑えられなかった。',
          );
          await kitaru.say_and_wait('はあっ……');
          await era.printAndWait([
            you.get_colored_name(),
            ' の肉棒は穴のなかを容赦なく往復し、さっき足でこれを弄んだ',
            kitaru.uma_sex_title,
            'を罰する。',
          ]);
          await kitaru.say_and_wait('はぁ……はぁ……');
          await era.printAndWait([
            '下の恋人は荒い息だけをつき、赤い尻を高く上げて ',
            you.get_colored_name(),
            ' の動きに合わせる。',
          ]);
          await era.printAndWait([
            '両手はまず腰を支え、それから上へ移って乳房を弄び、やがてフクキタルの手首を掴み、',
            kitaru.sex,
            'を ',
            you.get_colored_name(),
            ' の突きに合わせて顔を上げさせた。',
          ]);
          await kitaru.say_and_wait('やあ！！！');
          await era.printAndWait([
            kitaru.get_colored_name(),
            ' の両足がまっすぐ張り、つま先も快感で痙攣する。',
          ]);
          await kitaru.say_and_wait('いきますやああっ！！！');
          await era.printAndWait(
            '精液が注がれると、占い師は高く頭を反らし、快感で口角から溢れた透明な涎が白い首を伝い、襟を濡らした。',
          );
        }
      } else {
        await era.printAndWait('勝った！');
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  be_force: (() => {
    const title = '現人神への供え物';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await you.say_and_wait('また負けたか？');
      await era.printAndWait([
        '敗れたあとの ',
        kitaru.get_colored_name(),
        ' を慰めるのが、もう何度目かわからない。',
        kitaru.sex,
        'にとって決定的だったあのレースに負けて以来、粉々になった自信は、二度と戻らなかった。',
      ]);
      await era.printAndWait([
        '卓上の書類を少しよけ、',
        kitaru.sex,
        'の涙が落ちないようにする。',
      ]);
      await you.say_and_wait(['……今度の理由は？']);
      await kitaru.say_and_wait(['運が、悪かったです。']);
      await era.printAndWait([
        'そうだろう。',
        you.get_colored_name(),
        ' が',
        kitaru.sex,
        'の口から聞ける答えは、ほかにない。',
      ]);
      await era.printAndWait([
        kitaru.sex,
        'に口を酸っぱくして運命の人と呼ばれている ',
        you.get_colored_name(),
        ' でさえ、いまは少しうんざりしている。',
      ]);
      await era.printAndWait(['どうする。']);
      await era.printAndWait(['自信……自信……自信……']);
      await era.printAndWait([
        '目の前のこいつは、本当は強い。なぜ、なぜ ',
        you.get_colored_name(),
        ' のような普通の人間に、養殖場の兎のように扱われて平気なのか。それを、',
        kitaru.sex,
        'に気づかせるときだ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'の前へ行き、腰を屈め、',
        kitaru.sex,
        'が逸らす視線のなかで、',
        kitaru.sex,
        'の両手を取り上げ、自分の首に置いた。',
      ]);
      await you.say_and_wait(['感じるか？ フクキタル。']);
      await kitaru.say_and_wait([
        'あの、あの、',
        callname,
        '、今度はどう私を罰するんですか？',
      ]);
      await era.printAndWait([
        'そこで、',
        you.get_colored_name(),
        ' は',
        kitaru.sex,
        'の、少し期待した目のなかで答えた。',
      ]);
      await you.say_and_wait(['俺を、つまんでみろ']);
      await era.printAndWait([
        'そういうことだ。',
        kitaru.uma_sex_title,
        'の底に埋もれた支配欲を、掻き立てる。',
      ]);
      await era.printAndWait([
        '自分をずっと抑えてきた ',
        kitaru.get_colored_name(),
        ' にとって、突然解放した結果と、それに続く快感は、いっそう強い。',
      ]);
      await era.printAndWait([
        'いちばん敬う ',
        callname,
        ' すら足元に置けるなら、当然のようにあった劣等感も、消える。',
      ]);
      await era.printAndWait([
        '窒息がだんだん来る。意識を失う前、最後に覚えているのは、目の前の ',
        kitaru.get_colored_name(),
        ' の、可愛い笑顔の顔だ。',
      ]);
      era.drawLine();
      await era.printAndWait('計画は成功した。');
      await era.printAndWait([
        kitaru.get_colored_name(),
        ' はたしかに強くなった。差しとして妨害スキルの使い方がますます巧みに、あるいは……容赦なくなった。',
      ]);
      await era.printAndWait([
        '家の扉を開ける前、',
        you.get_colored_name(),
        ' はそれを考えていた。',
      ]);
      await era.printAndWait([
        '家で ',
        you.get_colored_name(),
        ' を迎えたのは、遠慮のない一撃だった。頬を押さえ、朱に変わっていく口角から、血の混じった唾が少し落ちる。',
      ]);
      await era.printAndWait([
        '顔を上げると、前の ',
        kitaru.get_colored_name(),
        ' は唇を舐め、',
        you.get_colored_name(),
        ' の目には、まだ太陽のように明るい笑顔を見せている。',
      ]);
      era.setToBottom();
      await era.printAndWait([
        kitaru.sex,
        'の次の蹴りが ',
        you.get_colored_name(),
        ' の腹に入る前、',
        you.get_colored_name(),
        ' はふと、今日のセーフワードをまだ決めていなかったことを思い出した。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
