/**
 * @file アグネスタキオン - 育成 - Plan A
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { adaptability_colors } = require('#/data/color-const');
const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ws_a_advanced: (() => {
    const title = 'Advanced';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait([
        'もし本当に、',
        tachyon.get_colored_name(),
        ' の言う通り、',
        tachyon.sex,
        'に希望をもたらしたのが自分なのなら',
      ]);
      await era.printAndWait([
        'ならば、この夢の道を',
        tachyon.sex,
        'と歩むことも、自分の責任であり義務だろう',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の言葉どおり、この物語を開いたのが自分なら、どんな終わり方であれ、幕が下りるまで舞台に立ち続けるべきだ',
      ]);
      era.println();
      await era.printAndWait('だから……');
      era.printButton('「……違う」', 1);
      era.printButton('「そうじゃない」', 2);
      await era.input();
      await tachyon.say_and_wait(['……', callname, '？']);
      era.println();
      await era.printAndWait(['寄り添う、だけでは足りない']);
      await era.printAndWait(['舞台にいるだけ、でも足りない']);
      era.println();
      await era.printAndWait([
        '自分は、',
        tachyon.get_colored_name(),
        ' のトレーナーだ',
      ]);
      await era.printAndWait([tachyon.sex, 'と二人三脚で進むトレーナーだ']);
      await era.printAndWait([tachyon.sex, 'の後ろではなく、隣を歩く人間だ']);

      era.printButton('「……俺は Plan A を選ぶ」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……そう。でしたら、私のために身を尽くして、しっかり見ていてくださいませ……燃え尽きようと、枯れ落ちようと',
      );
      era.println();
      await era.printAndWait('違う。そうじゃない');
      await era.printAndWait([
        you.get_colored_name(),
        ' は首を振り、',
        tachyon.get_colored_name(),
        ' の言葉を遮った',
      ]);
      era.println();
      await you.say_and_wait('見る、じゃない');
      era.println();
      await tachyon.say_and_wait('……？');
      era.printButton('「俺はお前と『一緒』に、『俺たち』の夢を叶える」', 1);
      await era.input();
      await tachyon.say_and_wait('…………');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' は黙り込んだ']);
      await era.printAndWait([
        tachyon.sex,
        'の表情は怒りにも、わずかな喜びにも見えた',
      ]);
      await era.printAndWait('そして……');
      if (relation < 76) {
        era.println();
        await tachyon.say_and_wait(
          '……モルモットの分際で、ヒトと同等の地位を望むのですか？',
        );
        era.println();
        await era.printAndWait([
          'いつもの傲慢な一言が、',
          you.get_colored_name(),
          ' を谷底へ叩き落とす',
        ]);
        await era.printAndWait(
          '並んで歩くには、相手も同じ道を歩こうとしている必要がある',
        );
        await era.printAndWait(
          '二人三脚で、一方だけが結び目を守ろうとしても、前へ進めるはずがない',
        );
        await era.printAndWait('この口調では、きっと……');
        era.println();
        await tachyon.say_and_wait(
          'でしたら、私の歩幅に追いついてみせなさいな。私が無視できない輝きを見せて……あなたの可能性を証明するのですわ！',
        );
      } else if (love < 75) {
        await tachyon.say_and_wait('……ふふ、はっはっはっ！');
        era.println();
        await era.printAndWait([
          '突然、',
          tachyon.get_colored_name(),
          ' が満足げに笑った',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'そう、そう。並んで歩く仲間、共に戦う戦友……ふふ、面白いわね！',
        );
        era.println();
        await era.printAndWait([
          tachyon.sex,
          'は両腕を広げ、後ろの ',
          you.get_colored_name(),
          ' を首を傾げて見る',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'でしたらついてきなさい、',
          callname,
          '！ 私の上でも下でもない仲間。できる自信があるのなら、いらっしゃい',
        ]);
      } else {
        await tachyon.say_and_wait([
          'つまり……',
          callname,
          '、本気なのですわね？',
        ]);
        era.println();
        await era.printAndWait('本気……？');
        await era.printAndWait([
          '自分は本気で ',
          tachyon.get_colored_name(),
          ' と歩みたい。そういう意味だろうか',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は決意を込めて頷いた',
        ]);
        era.println();
        await tachyon.say_and_wait('……で、同行、つまり、同居……む……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は強く首を振った',
        ]);
        await era.printAndWait(
          '何が起きたのかわからないが、どこか噛み合っていない……？',
        );
        era.println();
        await tachyon.say_and_wait(
          '……こほん。わかりましたわ。では、私たちの目標に向けて、一緒に励みましょう',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は少し落ち着いて言い直した',
        ]);
        await era.printAndWait(
          '何が起きたのかは不明だが、ともかく認められた証拠だろう',
        );
        await era.printAndWait('これからも、気を引き締めないと！');
      }
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が月桂杯への出走を辞退したことは、学園中に広まった',
      ]);
      await era.printAndWait([
        'トレーナーである ',
        you.get_colored_name(),
        ' も、批判を免れることはできなかった',
      ]);
      await era.printAndWait([
        'それでも……これも、',
        tachyon.sex,
        'と歩むための代価なのだろう',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_29: (() => {
    const title = 'メディア対応';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait('夏合宿');
      await era.printAndWait([
        tachyon.uma_sex_title,
        'たちにとっては、休息と実力向上を兼ねた期間',
      ]);
      await era.printAndWait([
        '記者たちにとっては、普段はレース以外で人前に出にくい',
        tachyon.uma_sex_title,
        'たちに、ようやく取材できる日々',
      ]);
      await era.printAndWait(
        'だからこそ、パパラッチたちは合宿所の外に早くから集まっていた',
      );
      await you.say_as_passer_by_and_wait('記者A', '見えたか？');
      await you.say_as_passer_by_and_wait(
        '記者B',
        '焦るな、まだ完全に降りてない',
      );
      await you.say_as_passer_by_and_wait(
        '記者C',
        '来た来た！ あれだ、トレーナーが光ってるやつ！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' が車を降りた瞬間、記者たちに取り囲まれた',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はまずいと思い、慌てて体の輝きを落とす。だが、もう遅かった',
      ]);
      await you.say_as_passer_by_and_wait('記者A', [
        'お伺いします。',
        tachyon.get_colored_name(),
        ' が月桂杯を辞退した理由は？',
      ]);
      await you.say_as_passer_by_and_wait(
        '記者B',
        '何か事情があるのでしょうか？',
      );
      await you.say_as_passer_by_and_wait(
        '記者C',
        '生徒会長への不信、ということですか？',
      );
      await era.printAndWait(
        'うわ、厄介な質問ばかりだ。しかも最後の記者、発想が危うい。対立を煽りたいのか？',
      );
      await era.printAndWait([
        'これだけの記者を前に、',
        you.get_colored_name(),
        ' は——',
      ]);
      era.printButton('丁寧に説明する（やる気1段階ダウン）', 1);
      era.printButton('追い払う（名声ダウン）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          ' は辛抱強く、陣営の目標が年末の菊花賞だと説明した',
        ]);
        await era.printAndWait(
          'それまでは他の予定を後ろに回す必要があること、そして現会長への不満はないこと',
        );
        await era.printAndWait(
          '記者対応に時間を取られ、タキオンの機嫌もそわそわし始めた',
        );
        await era.printAndWait([
          'それを見た ',
          you.get_colored_name(),
          ' は適当な理由で取材を切り上げ、',
          tachyon.get_colored_name(),
          ' を連れて合宿寮へ入った',
        ]);
      } else {
        await era.printAndWait('ああ、うるさい');
        await era.printAndWait([
          you.get_colored_name(),
          ' と ',
          tachyon.get_colored_name(),
          ' は目を合わせた',
        ]);
        await era.printAndWait([
          '長い呼吸の合わせ方で、',
          tachyon.sex,
          'はすぐに ',
          you.get_colored_name(),
          ' の意図を察し、鞄からサングラスを取り出した',
        ]);
        await era.printAndWait('そして……');
        era.printButton('「本気で光る！」', 1);
        era.printButton('「太陽拳！」', 2);
        await era.input();
        await you.say_as_passer_by_and_wait('記者A', '目が！');
        await you.say_as_passer_by_and_wait('記者B', 'まぶしい！');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' の120%全力発光の前では、太陽すら霞んで見えた',
        ]);
        await era.printAndWait([
          '記者が目をこする隙に、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' を連れて合宿寮へ駆け込んだ',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_31: (() => {
    const title = '夏のデータ採取';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('はぁ……はぁ……はぁ……');
      era.println();
      await era.printAndWait([
        '合宿中、',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' は菊花賞に向けて特訓を重ねていた。労逸を組み合わせたメニューのおかげで、成果は着実に出ている',
      ]);
      era.println();
      await tachyon.say_and_wait('データ……どうです？');

      era.printButton(
        '「走り方を変える前のスピードまで戻った……この調子なら菊花賞は絶対大丈夫だ！」',
        1,
      );
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の脚への負荷を最小限にするよう改良した走りは、いまや大成しつつある。二人の努力があれば、菊花賞はきっと……',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が ',
        tachyon.get_colored_name(),
        ' の未来に思いを馳せていると、息を整えた ',
        tachyon.get_colored_name(),
        ' が口を開いた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'よろしい。私の分のトレーニングは終わりですわ。次はあなたです',
      );
      era.println();
      await era.printAndWait('…………来るものは、来る');
      await era.printAndWait([
        '労逸の実体はこうだ。',
        tachyon.get_colored_name(),
        ' がトレーニングしているあいだ ',
        you.get_colored_name(),
        ' は休み、',
        tachyon.get_colored_name(),
        ' が休むあいだ……当然、',
        you.get_colored_name(),
        ' の番になる',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の薬の助けで、いまの ',
        you.get_colored_name(),
        ' の瞬発力は、オープン級の',
        tachyon.uma_sex_title,
        'にも負けない、',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の薬物実験データを測ることも、',
        tachyon.get_colored_name(),
        ' が合宿中きちんとトレーニングするための前提のひとつだった',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '今日は慈悲をかけて、自分で選ばせてあげますわ、',
        callname,
        '……パワートレーニングとスタミナトレーニング、どちらにします？',
      ]);
      era.println();
      await era.printAndWait('む……どちらも大差ない気がするが');
      era.printButton('パワートレーニング（パワー＆根性+10）', 1);
      era.printButton('スタミナトレーニング（スタミナ＆パワー+10）', 2);
      era.printButton('スピードトレーニング（スピード＆賢さ+10）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait('かくかくしかじか');
          await era.printAndWait([
            'こうして ',
            you.get_colored_name(),
            ' は、人の三倍はある巨大タイヤを砂浜で引きずっている',
          ]);
          await era.printAndWait(
            'こんなタイヤ、何の車用だ。横に寝かせても人の三倍の高さがある',
          );
          await era.printAndWait([
            'そのあいだ、',
            tachyon.get_colored_name(),
            ' はずっとタイヤの上に座り、',
            you.get_colored_name(),
            ' に声援を……',
          ]);
          era.println();
          await tachyon.say_and_wait(['早く歩きなさい、', callname]);
          await tachyon.say_and_wait(
            '遅すぎますわ。スピード、スピードですわよ',
          );
          await tachyon.say_and_wait(
            'いっそ服を破いてハルクにでもなりなさいな',
          );
          era.println();
          await era.printAndWait('声援……？');
          era.println();
          await era.printAndWait([
            '応援というより耐圧試験の掛け声のなかで、',
            you.get_colored_name(),
            ' は今日のトレーニングを終えた',
          ]);
          break;
        case 2:
          era.println();
          await tachyon.say_and_wait('入りなさい');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は目を丸くして ',
            tachyon.get_colored_name(),
            ' を見た。厳しいメニューだからではない。むしろ……',
          ]);
          era.printButton('「……泳いでくるだけでいいのか？」', 1);
          await era.input();
          await tachyon.say_and_wait(
            'ええ。いつもどおりの周回を泳ぎ切ればよろしいですわ～～',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' の顔には明らかに企みがある。だが、何なのか思いつかない……',
          ]);
          await era.printAndWait([
            'いや、',
            tachyon.sex,
            'がやりそうなことは多すぎて、どれを使ったのか見当がつかないのだ',
          ]);
          await era.printAndWait([
            'ここで待っていても始まらない。',
            you.get_colored_name(),
            ' は先に水へ入った',
          ]);
          era.println();
          await era.printAndWait('冷たい！');
          await era.printAndWait(
            '海水の温度が、いつもの冷たさとは明らかに違う。例えるなら……',
          );
          await era.printAndWait([
            '以前、',
            tachyon.get_colored_name(),
            ' が耐寒の薬を試すために飛び込ませた、氷のプールそのものだ',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は慌てて周りを見回すが、他の生徒はいつもどおり海で遊んでいる',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'ふふっ、今は特別に冷たいでしょう。入水前に飲ませた薬の効果ですわ。知覚を高める薬——ええ、対〇忍に出てくる、あれですわよ！',
          );
          era.println();
          await era.printAndWait('対魔〇の話はするな！？');
          await era.printAndWait(
            '奇妙なのは、体感温度が冬の氷風呂並みになった以外、特別な感覚がないことだ。対魔〇なら今頃は……',
          );
          era.println();
          await tachyon.say_and_wait(
            'もちろん、まだ半製品ですわ。主に寒冷への神経感度を上げているだけ。では、指定の距離をきちんと泳ぎ切りなさい',
          );
          era.println();
          await era.printAndWait('寒い……');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' に指示されずとも、寒さに追い立てられた ',
            you.get_colored_name(),
            ' は熱を出そうと必死に体を動かし、ようやく泳ぎの目標を達成した',
          ]);
          era.drawLine({ content: '余談' });
          await tachyon.say_and_wait([
            '……神経の感度を上げただけなのに、どうして風邪まで引くのですか、',
            callname,
          ]);
          era.println();
          await you.say_and_wait('……それ、お前に聞くことだろ？');
          break;
        case 3:
          await era.printAndWait('どれも悪気ありありだ……');
          await era.printAndWait([
            '機転の利く ',
            you.get_colored_name(),
            ' は選ぶ',
          ]);
          era.printButton(
            '「……寮のガスコンロ、消し忘れた気がする！ 先に戻る！」',
            1,
          );
          await era.input();
          await era.printAndWait('逃げるが勝ち！');
          era.println();
          await tachyon.say_and_wait([
            'ほほう、私と競争するおつもり？ 最近の体力向上で少し増長したようですわね、',
            callname,
            '。',
          ]);
          await tachyon.say_and_wait(
            '構いませんわ。十秒あげます。追いつかれたら、今日の薬は倍ですのよ。',
          );
          await tachyon.say_and_wait(
            'さあ、私を楽しませなさい。あはははははは！',
          );
          era.println();
          await era.printAndWait([
            '十秒が切れた瞬間、',
            tachyon.get_colored_name(),
            ' の足音が耳元に迫った',
          ]);
          await era.printAndWait(
            '急げ、急げ。こんなとき、トレーナー養成校では何と教えた',
          );
          await you.say_and_wait(
            ['障害物を使って', tachyon.uma_sex_title, 'の動きを妨げろ！'],
            true,
          );
          await era.printAndWait(
            'よし、急いで………ここ砂浜だぞ、障害物なんかあるかああああ！！！',
          );
          era.println();
          era.println();
          await tachyon.say_and_wait([
            'ちっちっ、遅すぎますわ ',
            callname,
            '。では今日は二本……よろしい、もう一度。同じく十秒、また追いついたら四本ですわ……続きですわよ～～',
          ]);
          await you.say_and_wait('まだやるのか！？');
          await era.printAndWait([
            '結局、',
            you.get_colored_name(),
            ' は ',
            tachyon.get_colored_name(),
            ' に四度追われ四度放たれ、合計十六本の薬を飲まされた',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho_low_rel: (() => {
    const title = '別の可能性';
    /**
     * 菊花賞前 - 低好感
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        'あの夜、',
        you.get_colored_name(),
        ' は夢を見た',
      ]);
      await era.printAndWait([
        '超光速粒子と呼ばれる',
        tachyon.sex,
        'が、レース場で翼を折る夢',
      ]);
      await era.printAndWait([
        'ガラスの両脚が砕け、飛び散った瑠璃の破片が ',
        you.get_colored_name(),
        ' の両目に刺さる',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は夢から飛び起き、長いあいだ落ち着かなかった',
      ]);
      await era.printAndWait([
        'あまりに生々しく、',
        you.get_colored_name(),
        ' は余韻に縛られた',
      ]);
      await era.printAndWait([
        '残りの夜、',
        you.get_colored_name(),
        ' は寝返りを打ち続け、朝まで眠れなかった',
      ]);
      era.drawLine();
      await era.printAndWait([
        '空が白み始めるころ、',
        you.get_colored_name(),
        ' は急いでトレーナー寮を出た',
      ]);
      await era.printAndWait([
        'レース前、',
        tachyon.sex,
        'の体調は何度も確認している',
      ]);
      await era.printAndWait(
        '夢のように派手に砕けるはずもない。それでも心配で、怖くて',
      );
      await era.printAndWait([
        '自分の目で',
        tachyon.sex,
        'を見なければ、夢が現実でないと確信できない',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'おや、',
        callname,
        '？ 今日は随分早いですわね',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が研究室に飛び込んだとき、朝から悠然と紅茶を飲んでいる ',
        tachyon.get_colored_name(),
        ' がいた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'まあ、今日は三冠の最後ですもの……緊張するのも普通ですわ',
      );
      await era.printAndWait([
        '菊花賞。最強の',
        tachyon.uma_sex_title,
        'だけが勝ち取るレース',
      ]);
      await era.printAndWait([
        '不意に、',
        you.get_colored_name(),
        ' は言葉を失った',
      ]);
      await era.printAndWait('自分の選択は、本当に正しかったのか');
      await era.printAndWait([
        'もし',
        tachyon.sex,
        'が、夢のように砕けてしまったら',
      ]);
      await era.printAndWait('自分は、平然と向き合えるのか');
      era.println();
      await tachyon.say_and_wait([callname, '？ どうかしましたか？']);
      era.println();
      await era.printAndWait('衝動のまま研究室へ飛び込んだというのに');
      await era.printAndWait([tachyon.sex, 'を見た瞬間、何も言えなくなった']);
      era.printButton('「……なんでもない。菊花賞、絶対勝つ」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、自分を慰めるにも足りない言葉しか出せなかった',
      ]);
      era.println();
      await tachyon.say_and_wait('……ええ、必ず勝ちますわ');
      era.println();
      await era.printAndWait('無言');
      await era.printAndWait('今日の菊花賞、どうか無事でありますように');
      await era.printAndWait([
        you.get_colored_name(),
        ' は神に、仏に、光に祈った',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho_high_rel: (() => {
    const title = '勝てるかしら？';
    /**
     * 菊花賞前 - 高好感
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     */
    const f = async (tachyon, you, callname, call_25, coffee_kiku_sho) => {
      await era.printAndWait([
        '菊花賞。最強の',
        tachyon.uma_sex_title,
        'だけが勝ち取るレース',
      ]);
      await era.printAndWait('最強とは、全方位のことだ');
      await era.printAndWait('スピード、スタミナ、パワー、根性、賢さ');
      await era.printAndWait(
        'トレーナーが最も重んじる五つの能力を、均衡よく極限まで伸ばした者だけが勝てるレース',
      );
      await era.printAndWait([
        'だが……',
        tachyon.get_colored_name(),
        ' なら、問題ない',
      ]);
      era.println();
      await era.printAndWait('生まれながらの強者');
      await era.printAndWait([
        '鍛えずとも、',
        tachyon.sex,
        'ならそこまで届くだろう',
      ]);
      await era.printAndWait([
        'それが ',
        tachyon.get_colored_name(),
        '。絶対の強さ',
      ]);
      await era.printAndWait([
        '……というより、自分は本当に',
        tachyon.sex,
        'の役に立てているのか？',
      ]);
      if (
        new Array(5).fill(0).some((_, i) => era.get(`base:32:${5 + i}`) < 1200)
      ) {
        await era.printAndWait([
          'そもそも今の',
          tachyon.sex,
          'は、かつての',
          tachyon.sex,
          'の限界まで、まだ長い距離があるのではないか？',
        ]);
      } else {
        await era.printAndWait([
          'そもそも今の',
          tachyon.sex,
          'は、かつての水準に戻っただけではないのか？',
        ]);
      }
      era.println();
      await tachyon.say_and_wait([
        callname,
        '？ レース前に、また何をぼうっとしているのです？',
      ]);
      era.println();
      await era.printAndWait([
        '自己嫌悪に沈む ',
        you.get_colored_name(),
        ' を遮ったのは、蹄鉄を打ちつけていた ',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は ',
        you.get_colored_name(),
        ' の言葉を聞くと、予想どおり ',
        tachyon.get_colored_name(),
        ' は鼻で笑った',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '退屈ですわ。今の私の両脚は、私の研究とあなたのトレーニングの上に成り立っていますの',
      );
      era.println();
      await tachyon.say_and_wait(
        'あなたの尽力がなければ、今の私は走れなくなっていたかもしれません。そうなってほしい、というのですか？',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は慌てて、そういう意味ではないと謝った',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '遅いですわ。明日の薬は倍。この努力の重みがわからないなら、少し多めに味わってもらいましょう',
      );
      era.println();
      await era.printAndWait(
        'いや、もう一日三食、飯みたいに飲んでるのに、まだ増やせるのか',
      );
      await era.printAndWait([you.get_colored_name(), ' は心の中で突っ込む']);
      era.println();
      await era.printAndWait([
        '気負いのない雑談のうちに、発走の時刻が近づいた',
      ]);
      await era.printAndWait(['二人は歩きながらレース場へ向かう']);
      era.printButton('「今日のレース、勝てるよな？」', 1);
      await era.input();
      await tachyon.say_and_wait('それは……果たしてどうかしら～～');
      await tachyon.say_and_wait(
        'いいえ、真剣に聞かれても、正直に答えるのは難しいですわ……',
      );
      if (coffee_kiku_sho) {
        await tachyon.say_and_wait([
          'なにしろ ',
          call_25,
          ' は、他の',
          tachyon.uma_sex_title,
          'とは完全に格が違いますもの',
        ]);
        await tachyon.say_and_wait([
          '何しろ',
          tachyon.sex,
          'は、私が選んだ、同じく限界の先の世界に足を踏み入れられる者……',
        ]);
        await tachyon.say_and_wait([
          'それにこの距離の ',
          call_25,
          '……歴史上最強と呼んでも過言ではないかもしれませんわ',
        ]);
      }
      era.printButton('「じゃあ、負けるのか？」', 1);
      await era.input();
      await tachyon.say_and_wait('勝ちますわよ');
      era.println();
      await tachyon.say_and_wait('『私たち』は、必ず勝ちます');
      era.println();
      await era.printAndWait('見送るだけではない');
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' は、並んでレース場へ向かった',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '勝てるわよ';
    /**
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} c_call_y マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     * @param {boolean} win_triple_crowns アグネスタキオンが三冠を制したか
     * @param {boolean} invincible アグネスタキオンが無敗か
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      c_call_y,
      c_call_t,
      love,
      coffee_kiku_sho,
      win_triple_crowns,
      invincible,
    ) => {
      if (win_triple_crowns) {
        if (invincible) {
          await you.say_as_passer_by_and_wait('実況', [
            '無敗三冠の誕生！ 歴史の車輪が、またひとつ回った！',
            tachyon.get_colored_name(),
            '、無敗三冠達成！',
          ]);
        } else {
          await you.say_as_passer_by_and_wait('実況', [
            '三冠',
            tachyon.uma_sex_title,
            '誕生！ 同年最強！ 最も速く、最も幸運で、最も強い',
            tachyon.uma_sex_title,
            '、それが ',
            tachyon.get_colored_name(),
            '！',
          ]);
        }
      } else {
        await you.say_as_passer_by_and_wait('実況', [
          '強敵を退け、いち早くゴールを駆け抜けたのは、超光速の',
          tachyon.sex_code - 1 ? '姫' : '王子',
          '、',
          tachyon.get_colored_name(),
          '！ 菊花賞最強の',
          tachyon.uma_sex_title,
          'は、',
          tachyon.get_colored_name(),
          '！',
        ]);
      }
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が菊花賞を制した。疑いようのない勝利',
      ]);
      await era.printAndWait(
        'だが、祝杯を上げる間もなく、招かれざる客が訪れた',
      );
      era.println();
      await coffee.say_and_wait([c_call_t, '……今日の走り方は……']);
      await tachyon.say_and_wait(['おや、', call_25, '、どうかしましたか？']);
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の Plan B の後継者',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の Plan A の試金石',
      ]);
      if (coffee_kiku_sho) {
        await era.printAndWait([
          'この菊花賞における、',
          tachyon.get_colored_name(),
          ' 最大の敵',
        ]);
      }
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '同時に、',
          you.get_colored_name(),
          ' のもうひとりの担当',
          tachyon.uma_sex_title,
        ]);
      }
      era.println();
      await coffee.say_and_wait([c_call_t, '、あなたの走り方……以前と違う……']);
      await tachyon.say_and_wait(
        'ふふ、何か問題ですの？ 走り方は、もともと進化し続けるものでしょう？',
      );
      await coffee.say_and_wait(
        '……別に。ただ、おめでとう。もうひとりの自分を、越えたわ',
      );
      await tachyon.say_and_wait([
        '……もうひとりの自分？ 待ちなさい、',
        call_25,
        '！ どういう意味ですの！',
      ]);
      await coffee.say_and_wait(
        '……どういう意味なのかしら。私は、友人の言葉を伝えているだけ',
      );
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            'それと、担当',
            tachyon.uma_sex_title,
            'でも……他人の恋人を長く独占しないで、',
            c_call_t,
          ]);
          await era.printAndWait([
            '言い終えると、',
            coffee.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の頬にキスをし、所有を示した',
          ]);
        } else if (era.get('love:25') >= 50) {
          await coffee.say_and_wait([
            '今日は特別な日だから、',
            c_call_y,
            ' を少し貸してあげる……あとで返して',
          ]);
        } else {
          await coffee.say_and_wait([
            'それから……あとで ',
            c_call_y,
            ' を返してね',
          ]);
        }
      }
      era.println();
      await tachyon.say_and_wait([
        call_25,
        '！…………ちっ、行ってしまいましたわ……',
      ]);
      await era.printAndWait([
        '大丈夫かと、',
        you.get_colored_name(),
        ' は心配そうに ',
        tachyon.get_colored_name(),
        ' を見た',
      ]);
      if (era.get('love:25') >= 75) {
        if (love < 50) {
          await tachyon.say_and_wait([
            '別に……それにしても、',
            callname,
            '、随分とモテますわね',
          ]);
        } else if (love < 75) {
          await tachyon.say_and_wait([
            '別に……それにしても ',
            callname,
            '、色恋の借りが多すぎますわよ',
          ]);
        } else {
          await tachyon.say_and_wait([
            '別に……それより、',
            callname,
            '……色恋の借りが多すぎますわよ',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は歯噛みしながら振り返って言った',
          ]);
          era.println();
          await tachyon.say_and_wait([
            call_25,
            ' に汚された場所は、きちんと消毒しなければ！',
          ]);
          era.println();
          await era.printAndWait([
            'それを口実に、',
            tachyon.sex,
            'は ',
            you.get_colored_name(),
            ' の頬に何度もキスを重ね、',
            coffee.get_colored_name(),
            ' が先に残したキスを十倍百倍で塗り潰そうとした',
          ]);
        }
      }
      era.println();
      await era.printAndWait([
        'とにかく、何はともあれ、',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' の栄光の菊花賞は幕を閉じた',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_lose: (() => {
    const title = '火種が見える';
    /**
     * Plan A 専用（Plan B は菊花賞出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} c_call_y マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} coffee_kiku_sho マンハッタンカフェが菊花賞に出走するか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      c_call_y,
      c_call_t,
      love,
      coffee_kiku_sho,
    ) => {
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      await tachyon.say_and_wait('………');
      era.printButton('「……」', 1);
      await era.input();
      era.printButton('「……タキオン？」', 1);
      await era.input();
      await era.printAndWait([
        'レースは終わった。栄光の菊花賞、最強の',
        tachyon.uma_sex_title,
        'を決める戦い',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の担当',
        tachyon.uma_sex_title,
        ' ',
        tachyon.get_colored_name(),
        ' は、このレースで敗れた',
      ]);
      await era.printAndWait([
        'レース後、選手控室に入ってからも、二人はずっと沈黙していた',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はそっと',
        tachyon.sex,
        'の顔を見るが、',
        tachyon.sex,
        'の胸中は読めない',
      ]);
      await era.printAndWait('沈黙の圧が限界まで積み上がったとき……');
      era.println();
      await tachyon.say_and_wait('ふふ……');

      era.printButton('「タキオン……？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '負けないと思っていたのに……やれやれ、結局は越えられてしまいましたわ',
      );
      await tachyon.say_and_wait([
        'やはり、',
        tachyon.uma_sex_title,
        'の可能性は、レースのなかでしか探れませんわね',
      ]);
      await tachyon.say_and_wait('負けました、負けましたわ');
      era.println();
      await era.printAndWait([
        'タキオンの態度は、',
        you.get_colored_name(),
        ' の予想よりずっと軽い',
      ]);
      await era.printAndWait([
        'そうだ……',
        tachyon.sex,
        'にとって、レースはどうあれ実験にすぎない',
      ]);
      await era.printAndWait('実験には成功も失敗もある。レースも同じだ');
      await era.printAndWait('失敗したら、教訓を汲めばいい');
      era.println();
      await era.printAndWait([
        'この態度がレース向きかはさておき、少なくとも',
        tachyon.sex,
        'は、さほど揺れていないらしい',
      ]);
      era.println();
      await era.printAndWait('だが、安心する間もなく、招かれざる客が訪れた');
      era.println();
      await coffee.say_and_wait([c_call_t, '……今日の走り方は……']);
      await tachyon.say_and_wait(['おや、', call_25, '、どうかしましたか？']);
      era.println();
      await era.printAndWait([coffee.get_colored_name()]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の Plan B の後継者',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の Plan A の試金石',
      ]);
      if (coffee_kiku_sho) {
        await era.printAndWait([
          'この菊花賞における、',
          tachyon.get_colored_name(),
          ' 最大の敵',
        ]);
      }
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '同時に、',
          you.get_colored_name(),
          ' のもうひとりの担当',
          tachyon.uma_sex_title,
        ]);
      }
      era.println();
      await coffee.say_and_wait([c_call_t, '、あなたの走り方……以前と違う……']);
      await tachyon.say_and_wait(
        'ふふ、何か問題ですの？ 走り方は、もともと進化し続けるものでしょう？',
      );
      await coffee.say_and_wait(
        '……別に。ただ、おめでとう。もうひとりの自分を、越えたわ',
      );
      await tachyon.say_and_wait([
        '……もうひとりの自分？ 待ちなさい、',
        call_25,
        '！ どういう意味ですの！',
      ]);
      await coffee.say_and_wait(
        '……どういう意味なのかしら。私は、友人の言葉を伝えているだけ',
      );
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        if (era.get('love:25') >= 75) {
          await coffee.say_and_wait([
            'それと、担当',
            tachyon.uma_sex_title,
            'でも……他人の恋人を長く独占しないで、',
            c_call_t,
          ]);
          await era.printAndWait([
            '言い終えると、',
            coffee.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の頬にキスをし、所有を示した',
          ]);
        } else if (era.get('love:25') >= 50) {
          await coffee.say_and_wait([
            '今日は特別な日だから、',
            c_call_y,
            ' を少し貸してあげる……あとで返して',
          ]);
        } else {
          await coffee.say_and_wait([
            'それから……あとで ',
            c_call_y,
            ' を返してね',
          ]);
        }
      }
      era.println();
      await tachyon.say_and_wait([
        call_25,
        '！…………ちっ、行ってしまいましたわ……',
      ]);
      await era.printAndWait([
        '大丈夫かと、',
        you.get_colored_name(),
        ' は心配そうに ',
        tachyon.get_colored_name(),
        ' を見た',
      ]);
      if (era.get('love:25') >= 75) {
        if (love < 50) {
          await tachyon.say_and_wait([
            '別に……それにしても、',
            callname,
            '、随分とモテますわね',
          ]);
        } else if (love < 75) {
          await tachyon.say_and_wait([
            '別に……それにしても ',
            callname,
            '、色恋の借りが多すぎますわよ',
          ]);
        } else {
          await tachyon.say_and_wait([
            '別に……それより、',
            callname,
            '……色恋の借りが多すぎますわよ',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は歯噛みしながら振り返って言った',
          ]);
          era.println();
          await tachyon.say_and_wait([
            call_25,
            ' に汚された場所は、きちんと消毒しなければ！',
          ]);
          era.println();
          await era.printAndWait([
            'それを口実に、',
            tachyon.sex,
            'は ',
            you.get_colored_name(),
            ' の頬に何度もキスを重ね、',
            coffee.get_colored_name(),
            ' が先に残したキスを十倍百倍で塗り潰そうとした',
          ]);
        }
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' のクラシック戦線は、ここで終わった！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_triple_crowns: (() => {
    const title = '三冠の夢';
    /**
     * Plan A 専用（Plan B は菊花賞出走不可のため三冠不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} pocket ジャングルポケット
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} sats_sho 皐月賞（着色名）
     * @param {PrintedSpan} toky_yus 日本ダービー（着色名）
     */
    const f = async (
      tachyon,
      coffee,
      pocket,
      you,
      callname,
      call_25,
      relation,
      love,
      sats_sho,
      toky_yus,
    ) => {
      await tachyon.say_and_wait('……ここは');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' はふいに意識が遠のいた',
      ]);
      await tachyon.print_and_wait(
        '目の前にあるのは、緑の芝が広がり、誰もいないレース場',
      );
      era.println();
      await tachyon.say_and_wait('……夢、ですの？');
      era.println();
      await tachyon.print_and_wait([
        '覚えている。いまは菊花賞のあと、',
        callname,
        ' と別れて、疲れ果ててベッドに倒れ込んだはず',
      ]);
      await tachyon.print_and_wait(
        '菊花賞は、これまでの自分にとって最も過酷な戦いだった',
      );
      await tachyon.print_and_wait('それでも、勝った');
      await tachyon.print_and_wait(
        'だが目の前は、あれほど印象に残ったレース場ではない。ここは……',
      );
      era.println();
      await tachyon.print_and_wait('中山競馬場？');
      await tachyon.print_and_wait('中山なら、つまり……');
      era.println();
      await tachyon.print_and_wait(
        '案の定、振り返った先のスクリーンには皐月賞の意匠が映っている',
      );
      await tachyon.print_and_wait([
        'だが掲示板の成績は、すでにレースが終わったことを示していた。1着は ',
        tachyon.get_colored_name(),
        '。当然だ',
      ]);
      era.println();
      await tachyon.say_and_wait(['……皐月賞のときへ戻った、のですか？']);
      era.println();
      await tachyon.print_and_wait(
        '誰もいないレース場。出走馬もいないのに、すでに終わっている皐月賞',
      );
      await tachyon.print_and_wait(
        '理屈を捨てた夢だとしても、あまりに常軌を逸している',
      );
      era.println();
      await tachyon.print_and_wait('そこで……');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、いつの間にか現れていた光球を睨んだ',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'あなた……誰ですの？ 私をこの夢に引き込んだのは、あなた？',
      );
      era.println();
      await tachyon.print_and_wait([
        '夢に引き込む、など科学的な言い方ではない。だが……',
        call_25,
        ' の言葉に沿って考えるなら……',
      ]);
      await you.say_as_passer_by_and_wait('？？？', '…………');
      era.println();
      await tachyon.print_and_wait('光球は何も言わず、その場に浮かんでいる');
      era.println();
      await tachyon.say_and_wait('……話したくない、ですの？');
      await tachyon.say_and_wait('でしたら、私の推測を言いますわ……');
      await tachyon.say_and_wait([
        'あなた……「',
        tachyon.get_colored_name(),
        '」でしょう',
      ]);
      era.println();
      await tachyon.print_and_wait('この推測は、難しくない');
      await tachyon.print_and_wait([
        call_25,
        ' の言った「もうひとりの自分」を重ねればいい',
      ]);
      await tachyon.print_and_wait([
        '伝説では……',
        tachyon.uma_sex_title,
        'は、異世界の魂を宿した存在だという',
      ]);
      await tachyon.print_and_wait([
        '……もっとも、',
        tachyon.get_colored_name(),
        ' はそういう話より、生物の自然な進化の結果だと信じたいが',
      ]);
      await tachyon.print_and_wait('だが、もしその話が本当なら……');
      era.println();
      await tachyon.print_and_wait('「もうひとりの自分」とは、おそらくこれだ');
      await tachyon.print_and_wait(
        '異世界から来た魂、あるいは「Uma Soul」と呼ばれる存在',
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('………⬛⬛………⬛⬛⬛………');
      await tachyon.say_and_wait('何ですの？');
      era.println();
      await tachyon.print_and_wait(
        'ふいに光球に波紋が走り、全力を振り絞って、わずかな音を出したように見えた',
      );
      await tachyon.print_and_wait([
        '気づくと、',
        tachyon.get_colored_name(),
        ' は近づき、何を言っているのか聞き取ろうとしていた……',
      ]);
      era.println();
      await tachyon.say_and_wait('………！');
      era.println();
      await tachyon.print_and_wait('触れた');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' の頭に、存在しない記憶が一気に流れ込んだ',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'あの世界で、',
        tachyon.get_colored_name(),
        ' と呼ばれた生き物の記憶',
      ]);
      await tachyon.print_and_wait([
        '最初に予想した通り、「',
        tachyon.get_colored_name(),
        '」の両脚は皐月賞のあと負荷に耐えきれず、引退を強いられた',
      ]);
      await tachyon.print_and_wait([
        'あの世界で、',
        tachyon.get_colored_name(),
        ' は可能性の象徴とされ、「もしもの⬛」「幻の三冠⬛」と呼ばれた',
      ]);
      await tachyon.print_and_wait(
        '機会さえあれば、三冠を必ず取れると、誰も疑わなかった',
      );
      await tachyon.print_and_wait(
        '脚部不安がなければ、歴史に名を残す名⬛だったはず',
      );
      await tachyon.print_and_wait(
        '引退していなければ、同世代の他の⬛はその陰に霞んでいたはず',
      );
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、三冠に最も近い存在だった',
      ]);
      await tachyon.print_and_wait('だが、もしもは……所詮もしもだ');
      await tachyon.print_and_wait('果たされないもしもは、ただの紙切れ');
      await tachyon.print_and_wait('同期たちがそれぞれの領域で輝くにつれ');
      await tachyon.print_and_wait('その確信は、疑問に変わっていった');
      await tachyon.print_and_wait([
        '東京2400メートルで、あの ',
        pocket.get_colored_name(),
        ' に本当に勝てたのか？',
      ]);
      await tachyon.print_and_wait([
        '京都3000メートルで、あの ',
        coffee.get_colored_name(),
        ' に本当に勝てたのか',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、三冠……？',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '到此，',
        tachyon.get_colored_name(),
        ' は正気を取り戻した',
      ]);
      await tachyon.print_and_wait([
        'ふいに、',
        tachyon.sex,
        'は光球の言葉がわかるようになっていた',
      ]);
      await tachyon.say_as_unknown_and_wait('……ありがとう……ありがとう……');
      await tachyon.say_and_wait('…………');
      era.println();
      await tachyon.print_and_wait('もしもを、現実にした');
      await tachyon.print_and_wait('空虚な可能性を、確かな現実にした');
      era.println();
      await tachyon.print_and_wait([
        '異界の「',
        tachyon.get_colored_name(),
        '」は果たせなかった',
      ]);
      await tachyon.print_and_wait([
        'だが ',
        tachyon.get_colored_name(),
        ' は、やり遂げた',
      ]);
      await tachyon.print_and_wait('自分の可能性を、証明した');
      era.println();
      await tachyon.print_and_wait([tachyon.get_colored_name(), ' は、三冠⬛']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、三冠⬛？',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、三冠',
        tachyon.uma_sex_title,
      ]);
      era.println();
      await tachyon.say_and_wait('……そう、ですのね');
      era.println();
      await tachyon.print_and_wait('過去の自分を越えた');
      await tachyon.print_and_wait('もうひとつの世界の自分を越えた');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、新しい一歩を踏み出した',
      ]);
      era.println();
      await tachyon.say_and_wait('では、私は行きますわ');
      await tachyon.say_as_unknown_and_wait('…………？');
      era.println();
      await tachyon.print_and_wait([
        '言葉はない。それでも、',
        tachyon.get_colored_name(),
        ' は光球の戸惑いを感じ取れた',
      ]);
      await tachyon.print_and_wait('どこへ？');
      await tachyon.print_and_wait('夢は、もう叶ったのではないか');
      await tachyon.print_and_wait('目標は、もう達したのではないか');
      await tachyon.print_and_wait('この先、何をする？');
      era.println();
      await tachyon.say_and_wait([
        'ふん、『',
        tachyon.get_colored_name(),
        '』の可能性は、クラシックの終わりまでしか想像できないのですか？',
      ]);
      await tachyon.say_and_wait(
        '……いいえ、こう言うと自分を罵っているようですわね……こほん、やり直し',
      );
      await tachyon.say_and_wait([
        '『',
        tachyon.get_colored_name(),
        '』の可能性は、クラシックの終わりまで、かもしれません……',
      ]);
      await tachyon.say_and_wait([
        'いいえ、せいぜい皐月賞まででしょう。',
        tachyon.get_colored_name(),
        ' の可能性も……',
      ]);
      await tachyon.say_and_wait('あるいは、そうかもしれませんわ');
      era.println();
      await tachyon.print_and_wait('だが');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は思い出した。自分のために燃え尽きることを厭わず、瞳に狂気を宿したあの人を',
      ]);
      era.println();
      if (relation <= 0) {
        await tachyon.say_and_wait([
          'まあ……人格としては、',
          you.sex,
          'を滅ぼした方が世界のためになるかもしれない、ひどい人ですけれど',
        ]);
      } else if (love >= 75) {
        await tachyon.say_and_wait('私が最も愛する、私を最も愛する、私の恋人');
      } else if (relation <= 225) {
        await tachyon.say_and_wait('私と並んで歩く、志を同じくする仲間');
      } else {
        await tachyon.say_and_wait(
          '私のすべてを理解し、命を預けても一瞬たりとも迷わない、あの人',
        );
      }
      era.println();
      await tachyon.print_and_wait('もし……あの人がいなければ');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は ',
        sats_sho,
        ' のあと、完全に燃え尽きていたかもしれない',
      ]);
      era.println();
      await tachyon.print_and_wait('もし……あの人がいなければ');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は ',
        toky_yus,
        ' のあと、限界に気づいて自ら退いていたかもしれない',
      ]);
      era.println();
      await tachyon.print_and_wait('もし……あの人がいなければ');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、未来すら想像できなかったはず',
      ]);
      era.println();
      await tachyon.print_and_wait('だが……もしもに意味はない');
      await tachyon.print_and_wait('そしてこのもしもは、永遠に果たされない');
      await tachyon.print_and_wait('だから……');
      era.println();
      await tachyon.say_and_wait([
        '見ていなさい、『',
        tachyon.get_colored_name(),
        '』。『私たち』は過去を越え、今に立っています。次は、未来を拓くときですわ！',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、レース場の出口へ向かった',
      ]);
      await tachyon.print_and_wait([
        '扉を出る前、',
        tachyon.sex,
        'は一度振り返った',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '場内のスクリーンから、皐月賞の意匠は消えていた',
      );
      await tachyon.print_and_wait('画面は真っ白だ');
      await tachyon.print_and_wait('前のレースは、終わった');
      await tachyon.print_and_wait('この場に次に映るのは、どんなレースだろう');
      era.println();
      await tachyon.print_and_wait(
        'わからない。だが、約束した。一緒に行く、と',
      );
      await tachyon.print_and_wait('だから');
      era.println();
      await tachyon.say_and_wait(
        '実験を続けましょう……可能性が届く彼方を、見るために',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_a_47_41: (() => {
    const title = '二度目の年度審査';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait('では……真面目な話をしましょう');
      era.println();
      await era.printAndWait(['時は菊花賞のあと']);
      await era.printAndWait([
        '場所は ',
        tachyon.get_colored_name(),
        ' の研究室',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は厳かにカーテンを下ろし、照明をつけた',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は緊張して唾を飲み込んだ',
      ]);
      await era.printAndWait([
        'この緊迫した空気……',
        tachyon.get_colored_name(),
        ' の性格からして',
      ]);
      await era.printAndWait(
        '実験の失敗か？ 危険な実験動物が逃げたか？ 危険な薬を水源に撒いたか？ それとも……',
      );
      era.printButton('「わかった、俺が捕まえてくる」', 1);
      era.printButton('「わかった、罪は俺が被る」', 2);
      era.printButton('「わかった、自首しよう、タキオン」', 3);
      await era.input();
      await tachyon.say_and_wait(
        '……違いますわ。何を見当違いなことを。三冠も終わりましたし、今後の目標を話し合う頃合いですのよ',
      );
      await era.printAndWait('…………え！？');
      await era.printAndWait([
        '予想よりずっとまともな話題に、',
        you.get_colored_name(),
        ' は声のない驚愕に陥った',
      ]);
      era.printButton('「目標……」', 1);
      era.printButton('「ああ、研究の目標だな」', 2);
      await era.input();
      await era.printAndWait([
        'そうに違いない。実験のことだ。',
        tachyon.get_colored_name(),
        ' の両脚は菊花賞のあと以前より安定している。少なくとも今は、怪我を過度に心配せずに済む',
      ]);
      await era.printAndWait(
        'ならば次の段階へ進むのも当然だ。そうだ、そうでなければ、まるで……',
      );
      era.println();
      await tachyon.say_and_wait(
        '実験の目標……それもそうですわ。ですが今話し合うのは、スケジュールの目標です。当初の約束は三冠まででしたでしょう。三冠が終わった以上、次の段階へ進むべきですわ',
      );
      era.println();
      await era.printAndWait('ええええ！！！！？？？？');
      await era.printAndWait([
        '今度こそ ',
        you.get_colored_name(),
        ' は本気で驚愕し、ムンクの『叫び』のような姿勢になった',
      ]);
      await era.printAndWait([
        'それを見て、目の前の ',
        tachyon.get_colored_name(),
        ' もつい笑ってしまった',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'ふふ……私が自分からレースの話をすると、それほど驚くものですの？',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'の態度を見ながら、レースを実験の付属品としか見ていなかったかつての ',
        tachyon.get_colored_name(),
        ' を思い出す',
      ]);
      era.printButton('「……タキオン……変わったな」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '言ってしまえば、変わらないものなどありませんわ。研究において、現状に安住して殻に閉じこもることは最も忌むべきことです……',
      );
      await tachyon.say_and_wait(
        'もっとも、変化にも良し悪しがありますわ。少なくとも今の変化には満足しています。その点は、あなたに感謝しなければなりませんわね',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の珍しい率直な言葉に、',
        you.get_colored_name(),
        ' は一瞬たじろいだ',
      ]);
      await era.printAndWait([
        '今日は ',
        you.get_colored_name(),
        ' にとっても、',
        tachyon.get_colored_name(),
        ' にとっても、初めてが多すぎる',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '当時の熱だけで、ここまで来られるとは本当に思いませんでしたわ……',
      );
      await tachyon.say_and_wait(
        '私ですら少し怖いくらいです。可能性というのは毒のように、理性を忘れさせる……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は自分の両脚を見つめ、わずかに震えた',
      ]);
      await era.printAndWait([tachyon.sex, 'の真意はよくわからない。だが']);
      era.printButton('「タキオンは、まだ限界に挑みたいのか？」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '続ける？ いいえ、',
        callname,
        '。私はずっと、限界に挑む途上にいます。止まったことなどありませんわ。',
      ]);
      await tachyon.say_and_wait(
        '菊花賞は起点にすぎません。菊花賞のあとこそ、本当に限界へ向かう旅なのですわ！',
      );
      await tachyon.say_and_wait([
        '中距離最強の大阪杯、現役',
        tachyon.uma_sex_title,
        'のなかで上半期と下半期の頂点である宝塚記念と有馬記念……',
      ]);
      await tachyon.say_and_wait(
        '越えるべき目標、届くべき頂は、いくらでもありますでしょう？',
      );
      era.println();
      await era.printAndWait('だから');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の両目を真っすぐに見据えた',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '三冠のあとの世界も、もう一度私と歩きましょう、',
        callname,
      ]);
      await tachyon.say_and_wait(
        '報酬として、もっと広い世界を見せてあげますわ',
      );
      era.printButton('「ああ」', 1);
      era.printButton('「言うまでもない。喜んで」', 2);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' のクラシック戦線は終わった',
      ]);
      await era.printAndWait('シニア戦線が、始まろうとしている！');
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_1: (() => {
    const title = '二度目の年度審査報告';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_9 アグネスタキオンのダイワスカーレットへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {number} cook_times アグネスタキオンに料理を作った回数
     */
    const f = async (
      tachyon,
      you,
      callname,
      call_9,
      call_25,
      relation,
      love,
      cook_times,
    ) => {
      await era.printAndWait([
        '今年は、',
        tachyon.get_colored_name(),
        ' とのシニアだ',
      ]);
      await era.printAndWait(
        '今年の二人の目標……先には明言しなかったが、最強を狙うなら、あの二戦は欠かせない',
      );
      await era.printAndWait([
        '宝塚記念と有馬記念……それに、機会があれば大阪杯にも出たい',
      ]);
      era.println();
      await era.printAndWait([
        'この三戦を勝てば、いわゆる',
        tachyon.uma_sex_title,
        'の限界には届くだろう',
      ]);
      await era.printAndWait([
        'だが、',
        tachyon.get_colored_name(),
        ' の目標はそこではない。',
        tachyon.sex,
        'の目標は……限界を超えること',
      ]);
      await era.printAndWait(
        'だからレース以外にも、研究の手伝いを忘れてはならない……',
      );
      era.println();
      await tachyon.say_and_wait([callname, '、随分早いですわね？']);
      era.println();
      await era.printAndWait([
        '気づけば、今日一緒に参拝すると約束していた ',
        tachyon.get_colored_name(),
        ' も到着していた',
      ]);
      era.printButton(
        '「当たり前だ！ 今年のシニア戦線も、他のあれこれも……願うことが多すぎる！」',
        1,
      );
      await era.input();
      if (love >= 75) {
        await tachyon.say_and_wait(
          'そう……でしたら、私に叶えさせたい願いはありますの？❤',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は蠱惑的な目で、含みを持たせて ',
          you.get_colored_name(),
          ' に尋ねた',
        ]);
        era.print([
          'この一年、',
          tachyon.get_colored_name(),
          ' に対してしたいことは……',
        ]);
        era.printButton('「タキオンともっとセックスしたい」', 1);
        era.printButton('「タキオンの体をもっと敏感に」', 2);
        era.printButton('「タキオンに踏まれたい」', 3, {
          disabled: you.sex_code === 0,
        });
        era.printButton('「タキオンに真面目にトレーニングしてほしい」', 4);
        switch (await era.input()) {
          case 1:
            await tachyon.say_and_wait(
              '……色魔ですわね。したいなら、帰ってからにしましょう',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の耳元に寄り、小さく言った',
            ]);
            break;
          case 2:
            await tachyon.say_and_wait([
              'それは……薬なら簡単ですわ。でも、',
              callname,
              ' 自身の手で、私を好みの形にしてほしいですわね❤',
            ]);
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の肩に凭れ、心地よさそうに言った',
            ]);
            break;
          case 3:
            await tachyon.say_and_wait([
              'そんな願いを……やはり変態ですわね、',
              callname,
            ]);
            era.println();
            await era.printAndWait([
              '口ではそう言いながらも、',
              tachyon.get_colored_name(),
              ' はそっと靴を脱ぎ、黒ストに包まれた足裏を見せた',
            ]);
            await era.printAndWait('参拝で一日歩いた、十分に熟れた黒スト');
            era.println();
            await tachyon.say_and_wait('こんな両足に……踏まれたい、ですの？');
            await tachyon.say_and_wait(
              '顔に押し付けられて、私の足裏の汚い空気で肺を満たされたい、ですの？',
            );
            await tachyon.say_and_wait(
              '肉棒を踏まれて、私の足の匂いとあなたの先走り汁で、十メートル先まで臭いが届くほどに塗れたい、ですの？',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' は熱に浮かされた目で ',
              tachyon.get_colored_name(),
              ' を見た。答えは言うまでもない',
            ]);
            era.println();
            await tachyon.say_and_wait(
              '……色魔ですわね。したいなら、帰ってからにしましょう',
            );
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は ',
              you.get_colored_name(),
              ' の耳元に寄り、小さく言った',
            ]);
            break;
          case 4:
            await tachyon.say_and_wait('……色気のわからない方ですわね');
            era.println();
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' はつまらなそうに舌打ちした',
            ]);
        }
      } else if (love >= 50) {
        await tachyon.say_and_wait('他の願い……たとえば？');
        era.println();
        era.print([
          tachyon.get_colored_name(),
          ' は興味深げに ',
          you.get_colored_name(),
          ' を見た',
        ]);
        era.printButton('「タキオンとの関係が、もっと良くなりますように」', 1);
        era.printButton('「他の担当との関係が、もっと良くなりますように」', 2);
        era.printButton('「シルクソング、今年出ますように！」', 3);
        switch (await era.input()) {
          case 1:
            await tachyon.say_and_wait('ふふ、きっと、そうなりますわ❤');
            break;
          case 2:
            await tachyon.say_and_wait(
              '……他の担当を特に持ち出して、私を怒らせたいのですか？ 残念ですわ、そんな手には乗りません',
            );
            era.println();
            await era.printAndWait([
              'そう言いながらも、',
              tachyon.get_colored_name(),
              ' は不満げに頬を膨らませた',
            ]);
            break;
          case 3:
            await tachyon.say_and_wait([
              'え……それは何ですの……聖巣？ 空〇騎士？……',
              callname,
              ' は、そんなにゲームが好きでしたの？',
            ]);
        }
      } else if (relation <= 0) {
        await tachyon.say_and_wait(
          'ふん、怪力乱神を宝物のように。そんなことより、私の実験をどう助けるか考えなさい',
        );
      } else if (relation <= 225) {
        await tachyon.say_and_wait(
          'ふふ、そういう怪力乱神は信じませんが、好意だけは受け取っておきますわ',
        );
      } else {
        await tachyon.say_and_wait(
          'そう。でしたら、あなたの願いは必ず叶いますわ',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の口調に、',
          you.get_colored_name(),
          ' は少し意外だった',
        ]);
        await era.printAndWait([
          'こんな迷信に、',
          tachyon.sex,
          'は鼻で笑わずとも、真剣には付き合わないと思っていた',
        ]);
        await era.printAndWait([
          'なのに',
          tachyon.sex,
          'の口調は、心底からそう信じているように聞こえる',
        ]);
        era.printButton('「タキオン……？」', 1);
        era.printButton('「信じないんじゃなかったのか？」', 2);
        await era.input();
        await tachyon.say_and_wait(
          'もちろん、神より手元の研究を信じますわ……ですが、研究より信じているのは、あなたです',
        );
        era.println();
        await era.printAndWait([
          '正確には、',
          you.get_colored_name(),
          ' の尽力を、だ',
        ]);
        await era.printAndWait([tachyon.sex, 'は補足した']);
        era.println();
        await tachyon.say_and_wait(
          'あなたがこの一年注いだ努力は、必ず報われます。神が与えないなら、私が与えますわ',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は自信満々に言った。神の代わりですか、と。いかにも ',
          tachyon.get_colored_name(),
          ' らしい。だが……神社では、あまり言わない方がいいだろう',
        ]);
      }
      era.drawLine();
      await era.printAndWait(
        '正月の神社は賑わっているが、参拝そのものはすぐに終わった',
      );
      await era.printAndWait([
        '参拝のあと、',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' は今年度の計画を話し合った',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'ええ……十一月に話した通りですわ。問題ありません',
      );
      era.println();
      await era.printAndWait(
        'レースの話はあっさり終わった。ここからが、今日の本筋だ',
      );
      era.println();
      if (
        new Array(5)
          .fill(0)
          .every((_, i) => era.get(`base:32:${5 + i}`) >= 1200)
      ) {
        await tachyon.say_and_wait([
          '限界……私たちの尽力をもってすれば、今の私は限界に達したと、大胆に言えますわ……',
          tachyon.uma_sex_title,
          'の限界に',
        ]);
      } else {
        await tachyon.say_and_wait(
          '限界……まだ達してはいませんが、実験を続ければいずれ届きます。問題ではありませんわ',
        );
      }
      era.println();
      await tachyon.say_and_wait('唯一の問題は……限界を越えること');
      await tachyon.say_and_wait(
        'そしてそれについて……今の私には、手がかりがありませんわ',
      );
      era.println();
      await era.printAndWait([
        '手がかりなし、と言いながら、',
        tachyon.get_colored_name(),
        ' の瞳の誇りは、まるで',
        tachyon.sex,
        'がリーマン予想の解法を口にしたかのような顔だ',
      ]);
      era.printButton('「手がかりなし……それは困ったな」', 1);
      await era.input();
      await era.printAndWait('仕方ない');
      await era.printAndWait('本当に手がかりがないなら');
      era.println();
      await era.printAndWait('悩むべきはずなのに、不思議と気持ちは穏やかだ');
      await era.printAndWait('手がかりがないなら、探せばいい');
      era.printButton('「ならタキオン、力をレースに注いでみないか？」', 1);
      era.printButton(
        `${tachyon.uma_sex_title}の限界は、やはりレース場でしか突破できないだろう`,
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '……一理ありますわ。ですが、それは ',
        callname,
        ' の私欲を満たしているだけ、という気がしますわね',
      ]);
      era.printButton(
        '「タキオンが、もっと広い世界を見せると言ったんだろ？」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        'ふふ、そうですわね。では続けましょう、私たちの新しい一年の研究を！',
      );
      era.println();
      era.print('では、研究を始める前に……');
      era.printButton('「先に餅を食べよう」（体力+20%）', 1);
      era.printButton('「すぐトレーニングへ」（ランダム能力+20）', 2);
      era.printButton('「戻って研究しよう」（スキルPt+30）', 3);
      let ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            '二人は ',
            tachyon.get_colored_name(),
            ' の研究室へ戻った',
          ]);
          await era.printAndWait(['そして、最初にしたことは……']);
          era.println();
          await tachyon.say_and_wait(
            '……私が言うのも変ですけれど、私たちは……あんな話をした直後に、今何をしているのですか',
          );
          era.println();
          await era.printAndWait('かつては生徒が理科実験に使っていた教室');
          await era.printAndWait([
            'いまは ',
            you.get_colored_name(),
            ' が、熱エネルギーの放出と糯米合成物の燃点を測る実験に使っている',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' と ',
            tachyon.get_colored_name(),
            ' は実験器具である炉のそばに座り、暖炉の暖かさを楽しんでいる',
          ]);
          await era.printAndWait([
            'スプリンクラー？ あれは以前、',
            tachyon.get_colored_name(),
            ' が学園内で大規模な薬剤散布実験に使ったせいで、生徒会が接触できないよう強制撤去した',
          ]);
          era.printButton('「そろそろ焼けたぞ」', 1);
          era.printButton('「タキオンは食べないのか？」', 2);
          await era.input();
          await tachyon.say_and_wait('もちろん食べますわ');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' が焼いた糯米合成物——餅を受け取るとすぐ噛み、予想どおり……',
          ]);
          era.println();
          await tachyon.say_and_wait('熱い！……ふーふー');
          era.println();
          if (cook_times < 10) {
            await tachyon.say_and_wait('……案外おいしいですわね。意外でした');
          } else {
            await tachyon.say_and_wait(
              '熱い……でもおいしい。私が鍛えたモルモットだけのことはありますわ',
            );
          }
          era.println();
          await you.say_and_wait('なんで自分の手柄みたいなんだよ……');
          era.println();
          await era.printAndWait(
            '実験研究も、トレーニングもレース対策も、別の日でいい',
          );
          await era.printAndWait('せっかくの正月だ。この静けさを味わおう');
          era.println();
          await era.printAndWait('タキオンは笑い、餅を小さく噛んだ');
          await era.printAndWait([
            '最近は、「明日」や「これから」という言葉が出るだけで、',
            tachyon.get_colored_name(),
            ' の機嫌がふっと良くなる',
          ]);
          await era.printAndWait([
            '気になった ',
            you.get_colored_name(),
            ' は、つい聞いてしまった',
          ]);
          era.println();
          await tachyon.say_and_wait(['……', callname, '、私の脚は……']);
          break;
        case 2:
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' のやる気が乗っているうちに、',
            you.get_colored_name(),
            ' はすぐ',
            tachyon.sex,
            'とトレーニング場へ向かった',
          ]);
          await era.printAndWait([
            tachyon.sex,
            'が場を駆け抜ける姿は、何度も見た光景なのに、',
            you.get_colored_name(),
            ' はまた見惚れてしまう',
          ]);
          await era.printAndWait(
            '光のように輝き、光のように眩しく……光のように、永遠',
          );
          await era.printAndWait(
            'かつて走りにまとわりついていた儚さは、いつの間にか消えていた',
          );
          await era.printAndWait('不安は失われ、残るのは最も純粋な光');
          await era.printAndWait([
            you.get_colored_name(),
            ' はさらに深く、見惚れた',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, '？……', callname, '！']);
          era.println();
          await era.printAndWait([
            '気づかぬうちに、',
            tachyon.sex,
            'はトレーニングを終えて ',
            you.get_colored_name(),
            ' のそばまで戻っていた',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '私のトレーニングを見ていて、ぼんやりするとは……肝が据わっていますわね……',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は慌てて、自分が感じた違いを',
            tachyon.sex,
            'に説明した',
          ]);
          era.println();
          await tachyon.say_and_wait('……そう、ですの');
          await tachyon.say_and_wait('実は……私自身も、妙な感覚がありますの');
          await tachyon.say_and_wait([
            '菊花賞のあと……脚が……どこかおかしい、というか',
          ]);
          break;
        case 3:
          await tachyon.say_and_wait([
            callname,
            '、その試験管を持ってきなさい。揺らさないで。こぼしたら床を一階まで溶かすかもしれませんわ',
          ]);
          await tachyon.say_and_wait([
            callname,
            '、今は手が離せません。アルコールランプに火をつけて、隣の薬を坩堝に入れて沸騰させて',
          ]);
          await tachyon.say_and_wait([
            'それから……よろしい、これをコーヒー色に染めて、',
            call_25,
            ' のコーヒー粉へ……',
            callname,
            '！ 取り上げて何をするのです！',
          ]);
          await tachyon.say_and_wait(
            'マスクをしなさい。次の煙は強い昏睡作用があります。防護を怠れば週末まで眠るでしょう',
          );
          await tachyon.say_and_wait([
            'これは……リンゴジュースと砂糖を足して……薬？ 違いますわ。あとで ',
            call_9,
            ' が来たときに',
            tachyon.sex,
            'へ出す飲み物です',
          ]);
          era.println();
          await era.printAndWait([
            '参拝のあと、二人は ',
            tachyon.get_colored_name(),
            ' の研究室へ戻った。今日の ',
            tachyon.get_colored_name(),
            ' は調子がすこぶるいい',
          ]);
          await era.printAndWait([
            '指示が止まらない。あまりに奇妙なもの以外は、',
            you.get_colored_name(),
            ' もほとんどこなした。だが……',
          ]);
          era.println();
          await tachyon.say_and_wait('成功しませんわ……ちっ、もう少し足します');
          await tachyon.say_and_wait(
            '今日中に……二十二回の臨床テストを終えなければ',
          );
          era.println();
          await era.printAndWait(
            'いつもの焦った実験効率に、上々の実験状態が重なる',
          );
          await era.printAndWait('結果、やることは倍増した');
          era.printButton('「タキオン、少し休まないか」', 1);
          era.printButton('「そんなに急がなくても。明日でも……」', 2);
          await era.input();
          await tachyon.say_and_wait('明日、ですって……');
          era.println();
          await era.printAndWait('叱ろうとした言葉が、途中で止まった');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は一時停止を押されたように手を止めた',
          ]);
          await era.printAndWait([
            '手の薬管が今にも床へこぼれそうになる。',
            you.get_colored_name(),
            ' は慌てて、一滴で一階まで溶かすというその薬を支えた',
          ]);
          era.printButton('「タキオン！ どうした……！」', 1);
          era.printButton('「急に止まってどうした！」', 2);
          await era.input();
          await tachyon.say_and_wait('…………はは');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' がふいに笑い出した',
          ]);
          era.printButton('「頭が……ついに壊れたか」', 1);
          await era.input();
          await tachyon.say_and_wait([
            '……あとで覚えなさい、',
            callname,
            '……考えていただけです',
          ]);
          era.println();
          await era.printAndWait('何を？');
          era.println();
          await tachyon.say_and_wait('……私たちは本当に、明日を見たのですわね');
          await era.printAndWait('明日？');
          await era.printAndWait('何の話だ。本当に頭を打ったのか？');
          await era.printAndWait([
            'それとも天才と狂人は紙一重で、',
            tachyon.get_colored_name(),
            ' はついに狂ったのか？',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '失礼なことを考えている気がしますわ……あなたの言う通り、明日に回しても遅くありませんわ。ふふ',
          );
          await tachyon.say_and_wait(
            'なにしろ、この先には明日がたくさんありますもの',
          );
          era.printButton('「どっちにしろ、明日は来るだろ」', 1);
          era.printButton('「考えすぎだ。とにかく明日続けよう」', 2);
          if ((await era.input()) === 1) {
            await tachyon.say_and_wait(
              'ええ。でも……こんなに美しい明日は……初めてですわ',
            );
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は聞き取れないことを呟いた',
            ]);
          } else {
            await tachyon.say_and_wait(
              'ふふ、もちろん。明日続けましょう。ええ、明日',
            );
            era.println();
            await era.printAndWait([
              you.get_colored_name(),
              ' に興を削がれても、',
              tachyon.get_colored_name(),
              ' は嬉しそうだった',
            ]);
          }
          era.println();
          await era.printAndWait([
            'なぜか、「明日」を聞いたあと、',
            tachyon.get_colored_name(),
            ' の機嫌がふっと良くなった',
          ]);
          await era.printAndWait([
            '気になった ',
            you.get_colored_name(),
            ' は、つい聞いてしまった',
          ]);
          era.println();
          await tachyon.say_and_wait(['……', callname, '、私の脚は……']);
      }
      era.printButton('どうした！', 1);
      era.printButton('どこかおかしいのか！', 2);
      await era.input();
      await tachyon.say_and_wait([
        '……ふふ、そんなに緊張しないでください。言いたかったのは、私の脚が……菊花賞のあと、急に安定した、ということですわ',
      ]);
      era.println();
      await era.printAndWait('安定した……それは、いいことではないのか？');
      await era.printAndWait('え、今は祝うべきなのか？');
      await era.printAndWait([
        'あまりに唐突な話題に、',
        you.get_colored_name(),
        ' は戸惑い、',
        tachyon.sex,
        'がなぜ今それを持ち出したのかわからない',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……脚の心配を捨てて、一事に集中できるのは、人生で初めてです……',
      );
      await tachyon.say_and_wait(
        '当たり前のように走り続けられる。天涯海角まででも',
      );
      await tachyon.say_and_wait(
        'だから……明日や未来を思うだけで——普通の人には当たり前のことで——私まで、こんな……',
      );
      await tachyon.say_and_wait(
        'どう言えばいいのか……あなたの言う通り、私は確かに喜びの感情を見せていますわ、',
      );
      await tachyon.say_and_wait(
        'ですが、研究に集中できる喜び、なのでしょうか？',
      );
      await tachyon.say_and_wait(
        '……む、どうも違う気がします……検討の価値がありますわね',
      );
      era.println();
      await era.printAndWait([
        'それを聞いて、',
        you.get_colored_name(),
        ' はふと閃いた',
      ]);
      era.printButton('「迷いなく走れるようになったから、じゃないか？」', 1);
      era.printButton('「自由に走れるようになったから、じゃないか？」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'む……',
        callname,
        '、私の言っていることはそういうことですわ。もう一度言う理由がわかりません',
      ]);
      era.printButton('「実験じゃなくて、走ることそのものだ」', 1);
      await era.input();
      await tachyon.say_and_wait([
        '……走るのが好きで、自由に走れるようになったから嬉しい、という意味ですの？',
      ]);
      era.println();
      await era.printAndWait([
        'ああ……やはり、',
        tachyon.get_colored_name(),
        ' には受け入れにくいだろう',
      ]);
      await era.printAndWait(
        '純粋に理性的な自分が、何かを好きだと認めるのは……',
      );
      await tachyon.say_and_wait('それは……');
      era.println();
      await you.say_and_wait('それは？');
      era.println();
      await tachyon.say_and_wait('面白い可能性ではありませんか！');
      era.println();
      await era.printAndWait('…………え？');
      era.println();
      await tachyon.say_and_wait([
        '走ることそのものに興味を持つ……興味深い課題ですわ！',
        callname,
        '！ 次の研究はこれに決めますわ！',
      ]);
      era.println();
      await era.printAndWait('け、研究って何を？');
      era.println();
      await tachyon.say_and_wait(
        '言うまでもありません！ 走りへの『好き』ですわよ！',
      );
      era.println();
      await era.printAndWait('研究……好き？');
      await era.printAndWait([
        you.get_colored_name(),
        ' が立ち直る前に、興奮した ',
        tachyon.get_colored_name(),
        ' は続けた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '予感がありますの……限界を突破する可能性は、ここにありますわ！ 次の目標は、これを研究することにしましょう！',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の言葉を聞き、',
        you.get_colored_name(),
        ' も落ち着いて得失を考え始めた',
      ]);
      await era.printAndWait([
        '本当なら、何があっても ',
        tachyon.get_colored_name(),
        ' の目標を手伝わねばならない',
      ]);
      await era.printAndWait([
        '錯覚だとしても……',
        tachyon.get_colored_name(),
        ' が走りを楽しみ始めたこと自体は、',
        you.get_colored_name(),
        ' にとって悪い話ではない',
      ]);
      await era.printAndWait(
        '研究のために走るのと、好きで走るのとでは、後者の方がいいに決まっている',
      );
      era.println();
      await era.printAndWait(
        'だから、ある難題を除けば、百利あって一害なしの決断だ……',
      );
      await era.printAndWait([
        '考えがまとまると、',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' に頷いた',
      ]);
      era.printButton('「それを目標にしよう！」', 1);
      await era.input();
      await era.printAndWait('百利あって一害なし——最大の難題さえ除けば');
      await era.printAndWait(
        'では、「感情」をどう研究する？ 頑張れ、モルモット！',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_sank_hai: (() => {
    const title = '変数・群衆感情の刺激';
    /**
     * Plan A 専用（Plan B は大阪杯出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_5 アグネスタキオンのフジキセキへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {boolean} coffee_sank_hai マンハッタンカフェが大阪杯に出走するか
     */
    const f = async (tachyon, you, callname, call_5, love, coffee_sank_hai) => {
      await era.printAndWait('大阪杯');
      await era.printAndWait('一年で最初の、中長距離G1');
      await era.printAndWait([
        'シニアに入ったばかりの',
        tachyon.uma_sex_title,
        'にとって、実力を試す最初のレース',
      ]);
      await era.printAndWait([
        'だが……',
        tachyon.get_colored_name(),
        ' にとっては',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'タキオン先輩！ 皐月賞のとき、本当にかっこよかったです！',
      );
      await tachyon.say_and_wait(
        'ふふ、応援ありがとう。でも私の走り方は進化し続けていますの。皐月賞より今の方が……絶対にもっと驚かせますわよ',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        'タキオン先輩……ダービーの走りを見て……',
        tachyon.uma_sex_title,
        'に限界があるなら、あれがそうだと思いました！',
      ]);
      await tachyon.say_and_wait([
        'いいえ、あれは ',
        tachyon.get_colored_name(),
        ' の限界にすぎません……',
        tachyon.uma_sex_title,
        'に限界はありません。あなたたちにも、無限の可能性があると信じていますわ',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        'タキオン先輩！ どうすれば先輩みたいに速くなれるんですか……！',
      );
      await tachyon.say_and_wait(
        'おや？ 本当に知りたいですの？ では明日の午後、理科の……',
      );
      era.printButton('「コホン」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は二度咳をして、',
        tachyon.get_colored_name(),
        ' に注意した',
      ]);
      await era.printAndWait([
        '後輩と和やかに話していた',
        tachyon.sex,
        'は一瞬固まり、何事もなかったように続けた',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はレースの話を続け、後輩の小さな',
        tachyon.uma_sex_title,
        'たちは聞き入っている',
      ]);
      await era.printAndWait(
        'レース前のファンサービスとして、温かい光景に見える',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はため息をつき、数ヶ月前に ',
        tachyon.get_colored_name(),
        ' が語った実験内容を思い出した',
      ]);
      era.println();
      await tachyon.used_to_say_and_wait([
        '資料を集めたところ……',
        tachyon.uma_sex_title,
        'がレースや走りで喜びを覚える理由の最優先は、称賛され、観客の支持を受けること……',
      ]);
      await tachyon.used_to_say_and_wait(
        '中高生の年齢ですもの、認められたいと思うのは自然ですわ',
      );
      await tachyon.used_to_say_and_wait(
        '私自身は影響されないと思いますが……実験である以上、すべての可能性を考慮しなければなりません',
      );
      await tachyon.used_to_say_and_wait(
        '総合すると……ええ、観客の支持を得ること……',
      );
      era.println();
      await era.printAndWait(['そこで、二人は行き詰まった']);
      era.println();
      await era.printAndWait(
        '数ヶ月前の夏合宿……その後の取材拒否の数々を思い出す',
      );
      await era.printAndWait([
        '世間の目の ',
        tachyon.get_colored_name(),
        ' は、メディアの喧伝とこちら側の放置で、現役最大の問題児になっているらしい',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……とにかく、まずはトレセン内で掴めるところから、ですわ',
      );
      era.drawLine();
      await era.printAndWait('かくかくしかじか');
      await era.printAndWait([
        '初めて見るわけではないが、',
        tachyon.get_colored_name(),
        ' の交流力は相変わらず強い……',
      ]);
      await era.printAndWait(
        '危険な実験に注ぐ精力を、少しでも人付き合いに回せば……',
      );
      await era.printAndWait([
        '自分は',
        tachyon.sex,
        'に惹かれなかったかもしれない',
      ]);
      await era.printAndWait(
        '研究のためなら何でも最善を尽くす、あの献身的な姿',
      );
      await era.printAndWait('すべてを捨て、背後に置いていく走り');
      await era.printAndWait([
        'その二つが重なった ',
        tachyon.get_colored_name(),
        ' こそ、最も人を惹きつける',
        tachyon.sex,
      ]);
      if (love >= 75 && tachyon.sex_code !== 1 && you.sex_code > 0) {
        await era.printAndWait('……だが');
        await era.printAndWait(
          '自分の恋人を他人に囲まれるのは、同性同士でも少し嫉妬する',
        );
        await era.printAndWait('こんなときは……');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は手元に隠したスイッチを、そっと押した',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          'タキオン先輩！ サインください！',
        );
        await tachyon.say_and_wait('ふふ、もちろん……むっ！');
        era.println();
        await era.printAndWait([
          'サインの瞬間に起動した小さな玩具で、',
          tachyon.get_colored_name(),
          ' のサインは少し歪んだ',
        ]);
        await era.printAndWait(
          '幸い、崇拝の眼差しの小さなファンは、その程度を気にしなかった',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は振り返り、',
          you.get_colored_name(),
          ' をじっと睨んだ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は頷いて、申し訳なさそうに笑った……そしてリモコンの強度を一段上げた',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'B',
          'タキオン先輩……今日のレース、頑張ってください！',
        );
        await tachyon.say_and_wait('ええっ……か……必ず……');
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'C',
          'タキオン先輩……どうしたんですか？',
        );
        await tachyon.say_and_wait('な……なんでも……ただ……ただ……くっ……');
        era.printButton('「時間もない。選手控室で準備しよう」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' は慌てて ',
          tachyon.get_colored_name(),
          ' を助けた。睨みというより欲求不満の色気を帯びた視線を受けながら、',
          tachyon.sex,
          'を連れて選手控室へ戻った',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……まったく……そんなに嫉妬しないでください……後輩にまで焼き餅を……',
          you.sex_code === 1 ? '男なら、もう少し器を大きくなさいな' : '',
        ]);
        era.printButton('「じゃあ、カフェのレースを見に行くよ」', 1, {
          disabled: !coffee_sank_hai,
        });
        era.printButton('「じゃあ、後輩たちも心配してあげよう」', 2);
        await era.input();
        await tachyon.say_and_wait(
          '欲を煽っておいて、今さら他人のところへ行くつもり……それはいけませんわ',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は後ろからそっと抱きついた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'レース前……時間は足りるでしょう❤️ こんな退屈な玩具はもう……中を、直接満たしたくはないのですか❤️',
        ]);
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はレース場へ立った',
        ]);
        await era.printAndWait([
          'ただ……今回ばかりは、',
          tachyon.sex,
          'の勝負服がしっかり隠れているのが幸いだった。でなければ、妙に膨らんだ下腹に全員が気づいただろう',
        ]);
      }
      era.printButton('「時間だ、タキオン」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'ああ、そうですわね。では出場しますわ……レースが終わってから、祝ってくださいな、仔馬たち',
      );
      era.println();
      await era.printAndWait([
        '最後の流し目に、小さな',
        tachyon.uma_sex_title,
        'たちはまた歓声を上げた',
      ]);
      era.printButton('「……仔馬？」', 1);
      await era.input();
      await tachyon.say_and_wait([
        call_5,
        ' から習ったのです……どうです、あなたもそう呼ばれたいですの？ 私の小さなモルモット？',
      ]);
      era.printButton('…………いや、遠慮しておく', 1);
      await era.input();
      await tachyon.say_and_wait([
        'おや、照れたのですか？ 純情ですわね、',
        callname,
      ]);
      era.printButton(
        'だって……ハードウェアが追いつかない。真似するとかえって……',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は憐れむように ',
        tachyon.get_colored_name(),
        ' の胸元を見た',
      ]);
      await tachyon.say_and_wait([
        '…………',
        callname,
        '？ ハードウェアとは何の意味か、はっきり言ってくださいな',
      ]);
      era.printButton('「……なんでもない」', 1);
      await era.input();
      await era.printAndWait('ふざけているうちに、発走の時刻が来た');
    };
    f.title = title;
    return f;
  })(),
  sank_hai_win: (() => {
    const title = '未知の因子';
    /**
     * Plan A 専用（Plan B は大阪杯出走不可）
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await you.say_as_passer_by_and_wait('実況', [
        tachyon.get_colored_name(),
        '！ 新年のG1連戦に、超光速の鐘が鳴った！',
        tachyon.get_colored_name(),
        ' が見事にゴールを駆け抜けた！',
      ]);
      era.println();
      await tachyon.print_and_wait('おや、勝ちましたわね');
      await tachyon.print_and_wait([
        '失礼に聞こえるかもしれないが、それが ',
        tachyon.get_colored_name(),
        ' の本音だ',
      ]);
      await tachyon.print_and_wait([
        'このレース場で ',
        tachyon.get_colored_name(),
        ' を止められるのは、',
        tachyon.sex,
        '自身の怪我だけ',
      ]);
      await tachyon.print_and_wait([
        '怪我を脱した今、傲りと呼ばれても構わない。',
        tachyon.get_colored_name(),
        ' は誰にも負けない',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.sex,
        'が気にかけるのは、実験の結果だけ',
      ]);
      await tachyon.print_and_wait('だが……');
      era.println();
      await tachyon.say_and_wait(
        '歓声がない……そうですわね。付け焼き刃の人気取りが効くはずもない……時間が要りますわ',
        true,
      );
      await tachyon.print_and_wait(
        'それに、歓声があったところで、レースに影響するはずもない',
      );
      await tachyon.print_and_wait('でなければ、人気順に着順をつければいい');
      await tachyon.print_and_wait(
        'レースは終わった……では、モルモットを探しに……',
      );
      era.println();
      await you.say_as_passer_by_and_wait('観客A', 'すごい！');
      era.println();
      await tachyon.say_and_wait('…………？');
      await you.say_as_passer_by_and_wait('観客B', [
        '速い走りだ……あれが ',
        tachyon.get_colored_name(),
        ' か？',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客C',
        'メディアのせいであれは問題児だと思ってた……問題児でも、レース場では成績が物を言うだろ！',
      );
      await you.say_as_passer_by_and_wait('観客D', [
        'クラシックの戦績がそもそも規格外だ。こんな',
        tachyon.uma_sex_title,
        'がトゥインクル・シリーズで無双するのも当然だ。ドリームカップ勢が来ても勝てないだろ！',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客E',
        'クラシックからずっと見てるけど、何度見ても強すぎる！',
      );
      era.println();
      await tachyon.say_and_wait('これは……', true);
      era.println();
      await tachyon.print_and_wait(
        'ゴールを過ぎてしばらくしてから、まるで静止画が動き出したように',
      );
      await tachyon.print_and_wait('場内の歓声が上がる');
      await tachyon.print_and_wait(
        '大げさで、誇張で、根拠のない称賛、荒唐無稽な吹聴',
      );
      await tachyon.print_and_wait('……妙だ。このレースに何か特別があるのか？');
      era.println();
      await tachyon.say_and_wait(
        'いいえ……ずっとこうだった。ただ……気づいていなかっただけ',
        true,
      );
      await tachyon.print_and_wait('両脚が砕けることを心配し');
      await tachyon.print_and_wait('実験の失敗を心配し');
      await tachyon.print_and_wait('足踏みすることを心配し');
      await tachyon.print_and_wait(
        'だから……なかったのではなく、聞こえなかった。重要ではなかったから',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'タキオン先輩、かっこいい！',
      );
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'B', [
        'やっぱりタキオン先輩が最強の',
        tachyon.uma_sex_title,
        'だ！',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        'タキオン先輩必勝！',
      );
      await tachyon.print_and_wait('実際、ずっとあった');
      await tachyon.print_and_wait([
        '皐月賞のとき、あの人はきっと「光速を超えろ！',
        tachyon.get_colored_name(),
        '！」と叫んだはずだ',
      ]);
      await tachyon.print_and_wait([
        '日本ダービーのとき、あの人はきっと「',
        tachyon.uma_sex_title,
        'の可能性を見せてくれ！」と叫んだはずだ',
      ]);
      await tachyon.print_and_wait([
        '菊花賞のとき、あの人はきっと「証明してくれ、',
        tachyon.uma_sex_title,
        'の怪我は超えられると！」と叫んだはずだ',
      ]);
      era.println();
      await tachyon.print_and_wait('そして……大阪杯');
      await you.say_and_wait([
        tachyon.get_colored_name(),
        ' の可能性は、三冠だけじゃない！',
      ]);
      era.println();
      await tachyon.print_and_wait('ああ');
      await tachyon.print_and_wait('今度こそ、聞こえた');
      era.println();
      await tachyon.print_and_wait([
        'そうか、',
        tachyon.get_colored_name(),
        ' は、ずっと愛されていた',
      ]);
      await tachyon.print_and_wait('ファンに、後輩に、世界に');
      await tachyon.print_and_wait('そして……観客席の最前列');
      await tachyon.print_and_wait('光ってはいないのに、誰より眩しい、あの人');
      era.println();
      await tachyon.print_and_wait('まったく、この馬鹿');
      await tachyon.print_and_wait(
        'レース中には、あんな言葉を叫べるというのに',
      );
      await tachyon.print_and_wait(
        '面と向かうと、あの拙い褒め言葉しか出ないのはなぜ？',
      );
      await tachyon.print_and_wait('私が聞かなかったら、どうするつもり');
      await tachyon.print_and_wait('その応援は無駄になるではないですか');
      await tachyon.print_and_wait(
        '応援……支えられる相手に聞かせるために叫ぶものではなかったのか？',
      );
      await tachyon.print_and_wait(
        '……では、聞かれるためではなく叫ばれるものこそ、本当の応援なのか？',
      );
      era.drawLine();
      await tachyon.say_and_wait(['ただいま……', callname]);
      era.printButton('「おかえり、タキオン。脚は大丈夫か！」', 1);
      era.printButton('「今日も走りが本当に、すごい！」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '……応援の定義は明確になったつもりでしたのに。あなたのせいですわ。また調査し直しです',
      );
      era.println();
      await you.say_and_wait('え————なんで！？');
      era.println();
      await tachyon.say_and_wait(
        '罰として……今日の薬は、脳の高次認知判断を妨げる薬です……',
      );
      await tachyon.say_and_wait(
        '通俗的に言えば吐実剤。飲んだら、今日のレースについてきちんと話し合いましょう',
      );
      era.println();
      await you.say_and_wait('え—————！？');
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_14: (() => {
    const title = 'ファン感謝祭';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     */
    const f = async (tachyon, you, callname, call_25) => {
      await tachyon.say_and_wait([
        'ですから、実験結果によれば……大阪杯のときのファンは……',
      ]);
      await tachyon.say_and_wait(
        'それに、ある人の熱が力を生み、元のスピードを超えさせました。やはり感情には、ある程度の力がありますわね',
      );
      era.printButton(
        '「タキオンがそんな唯心的な概念を信じるとは思わなかった」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        '私が信じるのは真理と可能性だけ。その可能性があるなら、すべてを賭けます……',
        callname,
        '、あなたもそうでしょう？',
      ]);
      await tachyon.say_and_wait([
        '唯物でも唯心でも構いません。使えさえすれば、限界を超え、可能性の果てへ届けるなら……',
        call_25,
        ' の友人であっても、借りるのに吝かではありませんわ',
      ]);
      await tachyon.say_and_wait(
        '……合理的に説明するなら、大脳皮質と中枢神経の活性に関係するのでしょう。簡単に言えば……ふふ、合法の興奮剤？',
      );
      era.printButton('「！？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'ふふ、冗談ですわ……ですが本質として、この興奮が体能に与える加成は、無意識下では興奮の閾値も限られます',
      );
      await tachyon.say_and_wait([
        '少なくとも大阪杯で測ったほど高くはならない……まさか、私自身の精神が……',
      ]);
      era.printButton('「タキオン？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……いいえ、なんでもありません。検証が要るだけです。それより、もっと深く調べたい……『ファン』という概念を',
      );
      era.printButton('「ファン……」', 1);
      era.printButton('「つまり……」', 2);
      await era.input();
      await tachyon.say_and_wait(
        '違います……ファン感謝祭に出てみようと思いますの',
      );
      await tachyon.say_and_wait(
        '近距離での接触……今回の目的は二つ。うまくいけば……一度に片付けたいですわ',
      );
      era.drawLine();
      await you.say_as_passer_by_and_wait('ファンA', [
        'タキオン',
        tachyon.adult_sex_title,
        '！ 一緒に写真を撮ってもいいですか！',
      ]);
      await tachyon.say_and_wait(
        'ふふ、もちろんですわ。特別なポーズが要りますか？',
      );
      await you.say_as_passer_by_and_wait(
        'ファンA',
        'いえ、腕を組んでいただくだけで！',
      );
      await tachyon.say_and_wait('こう、ですの？');
      await you.say_as_passer_by_and_wait(
        'ファンA',
        'あ、ありがとうございます！',
      );
      era.println();
      await you.say_as_passer_by_and_wait(
        'ファンB',
        'タキオンさん！ ずっと応援してます！ 宝塚記念も頑張ってください',
      );
      await tachyon.say_and_wait('そう、そう。励まし、ありがとうございます');
      await you.say_as_passer_by_and_wait(
        'ファンB',
        'はい。これからも、もっと魅せる走りを見せてください！',
      );
      await tachyon.say_and_wait('必ずですわ、はっはっはっ！');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は訪れたファンに、滞りなく応対している',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の営業モードと普段の落差……',
      ]);
      await era.printAndWait([
        '時として、どちらが',
        tachyon.sex,
        'の本性か疑いたくなるほどだ',
      ]);
      await era.printAndWait('ほどなく、催しは終わった');
      era.println();
      await tachyon.say_and_wait('む……面白いデータが取れましたわ');
      await tachyon.say_and_wait(
        '今日、握手やサインや撮影に来たレース観客を整理しました——',
      );
      await tachyon.say_and_wait(
        '以下『ファン』と略します。観戦の目的、そして私に会ったあとの心拍・呼吸・脈拍の反応速度……',
      );
      await tachyon.say_and_wait('ファンそれぞれの言葉から、結論を出しました');
      await tachyon.say_and_wait([
        '————',
        tachyon.get_colored_name(),
        ' は、このファンたちにとって、実験における報酬に近い',
      ]);
      await tachyon.say_and_wait(
        '応援という尽力を払い、応えを報酬として得たい……',
      );
      era.printButton('「……そうは思わない」', 1);
      era.printButton('「タキオンへの応援は、そんなに複雑じゃない」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '……ええ。この論の最大の破綻は、',
        callname,
        '、あなたの支援は何のためか、という点ですわ',
      ]);
      await tachyon.say_and_wait(
        '皐月賞、日本ダービー、菊花賞、そして大阪杯……あなたは私に応援をくれましたわね',
      );
      await tachyon.say_and_wait(
        'ですが彼らは違います……傍にいるあなたは知っている。当時の私は、ファンの支持を特別な実験変数だとは見ていなかった',
      );
      await tachyon.say_and_wait(
        'だからあなたの応援と支持は、何の見返りも得られない。研究への助力とは違う……',
      );
      await tachyon.say_and_wait(
        '研究への助力なら、あなたが見たい走りとレースが返ってくる……',
      );
      await tachyon.say_and_wait(
        'ですが応援と支持のほうは、まったくわかりませんわ',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の問いかけに、',
        you.get_colored_name(),
        ' は言葉を失った',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の問いに答えること自体は、難しくない',
      ]);
      await era.printAndWait(
        'だが……感情のようなものを、言葉で理解させられるのか',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' が黙っていると、',
        tachyon.get_colored_name(),
        ' は続けた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'こうなると、今日の実験は半分の成功、ですわね……',
      );
      await tachyon.say_and_wait(
        '次は宝塚記念。ファンの支持がデータに与える影響を、全体で測らねばなりません',
      );
      await era.printAndWait([
        '戸惑いのなか、',
        tachyon.get_colored_name(),
        ' のファン感謝祭は終わった',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_a: (() => {
    const title = '万衆一心';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '阪神競馬場に着いたころ、場内はすでに沸き返っていた',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait('観客A', [
        'やっぱり本命は ',
        tachyon.get_colored_name(),
        ' だな',
      ]);
      await you.say_as_passer_by_and_wait('観客B', [
        tachyon.get_colored_name(),
        '？ あれは……前に……',
      ]);
      await you.say_as_passer_by_and_wait('観客C', [
        'その言い方で大阪杯を見てないのがわかる。あんな走りができる',
        tachyon.uma_sex_title,
        'が悪人なわけないだろ！',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客D',
        '人格走り法論はもういい……でも、確かに他と違う走りだ',
      );
      await you.say_as_passer_by_and_wait('観客E', [
        '頑張れ！ 大阪杯の走りをもう一度見せてくれ！',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'おやおや……人気ですわね。しかも話題は大阪杯ばかり……去年のレースは、それほど退屈でしたか？',
      );
      era.printButton('「去年ももちろん精彩だった」', 1);
      era.printButton('「大阪杯が特に精彩だっただけだ」', 2);
      await era.input();
      await era.printAndWait([
        '去年の ',
        tachyon.get_colored_name(),
        ' の走りは、光の眩しさのほかに、儚さがまとわりついていた',
      ]);
      await era.printAndWait([
        'だから',
        tachyon.sex,
        'のレースを見終わると、驚嘆より心配が先に立った',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'が、そのまま光になって消えてしまわないかと',
      ]);
      await era.printAndWait('その儚さが消えた今');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の走りは、芸術と呼べる',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……一応、褒め言葉として受け取っておきますわ。では、この空気は二度目の実験にちょうどいい',
      );
      await tachyon.say_and_wait(
        '大阪杯では……途中で確かめきれませんでした。今はG1の舞台、応援するファンもいます。ふふ、どこまで行けるかしら',
      );
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_a: (() => {
    const title = '神話の誕生';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await you.say_as_passer_by_and_wait('実況', [
        '上半期の総決算を制し、神話となったのは ',
        tachyon.get_colored_name(),
        '！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は当然のように、最初にゴールを越えた',
      ]);
      await era.printAndWait('場内に大きな拍手と歓声が響く');
      await era.printAndWait(
        '空に紙吹雪が舞い、またひとつ、輝かしいレースが終わった',
      );
      era.println();
      await era.printAndWait('ふいに観客席がどよめき、喧騒はさらに熱を帯びた');
      await era.printAndWait([
        'レース後はいつも軽く手を振って引き揚げる ',
        tachyon.get_colored_name(),
      ]);
      await era.printAndWait('今は場に残り、ファンの歓声に堂々と応えている');
      await era.printAndWait('その仕草がさらに声援を呼び、声は空まで届いた');
      era.drawLine({ content: '退場後' });
      await tachyon.say_and_wait('……ふふ');
      era.printButton('「タキオン！」', 1);
      era.printButton('「今日も精彩だった！」', 2);
      await era.input();
      await tachyon.say_and_wait([
        'ん？ ああ、それより、',
        callname,
        '！ 見てください、測定の結果ですわ！',
      ]);
      await tachyon.say_and_wait(
        '今回の実験は大阪杯より歓声の変数を増やしました。レース後のデータ解析によれば',
      );
      await tachyon.say_and_wait(
        '筋肉の出力に確かに助けになっています……平常の気分上昇による幅を超えています……',
      );
      await tachyon.say_and_wait(
        '簡単に言えば、実験成功ですわ！ 観客の応援は確かに影響します。はっはっはっはっ！',
      );
      era.println();
      era.print('……よくわからないが、とにかく実験は成功したらしい');
      era.printButton('「おめでとう！」', 1);
      era.printButton('「可能性に、また一歩近づいたな！」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'ふふ……まだわからないところもありますが、レースでの運用にはもう問題ありませんわ！',
      );
      await tachyon.say_and_wait(
        'ですが……こうしてみると、私は喝采で嬉しくなるようですわね……社会性生物だから、でしょうか……',
      );
      era.printButton(
        '「みんな本気でタキオンを応援してる。反応してくれたら、きっと喜ぶよ」',
        1,
      );
      era.printButton(
        '「俺は本気でタキオンを応援してる。タキオンが嬉しいなら、それでいい」',
        2,
      );
      if (era.get('love:32') < 50) {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            'ふふ、そうですわね……では次は少し応えてみましょう。支援の報酬としてのファンサービス、ということで',
          );
          era.println();
          await era.printAndWait([
            '報酬ではない……そう言いたいが、',
            tachyon.get_colored_name(),
            ' にはまだわからないだろう',
          ]);
        } else {
          era.println();
          await tachyon.say_and_wait(
            'あなたの喝采……ええ、確かに聞こえましたわ……',
          );
          await tachyon.say_and_wait(
            'それにしても、あんな言葉を叫べるのに、走り終えて戻ると毎回その陳腐な決まり文句なのですか？',
          );
        }
      } else {
        if ((await era.input()) === 1) {
          era.println();
          await tachyon.say_and_wait(
            'では、そのみんなにはあなたも含まれますわね……私に、どんな応えを望むのです？ 感謝として♡',
          );
        } else {
          await tachyon.say_and_wait(
            'そう。では、最大のファンには何で報いるのがよろしいかしら',
          );
        }
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は艶めかしい目で ',
          you.get_colored_name(),
          ' を見た',
        ]);
        await era.printAndWait([
          '一瞬、',
          you.get_colored_name(),
          ' は言葉を忘れた',
        ]);
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' の宝塚記念は終わった！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_31: (() => {
    const title = '他人の可能性';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_2 アグネスタキオンのサイレンススズカへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, call_2, love) => {
      await era.printAndWait('陽射し、砂浜');
      await era.printAndWait([
        'そして砂浜を駆け回る',
        tachyon.uma_sex_title,
        'たち',
      ]);
      era.printButton('「青春だな」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '……この光景を見てそんな言葉が出るなんて、トレーナー',
        you.adult_sex_title,
        'も……さすがタキオン先輩のトレーナーです',
      ]);
      era.println();
      await era.printAndWait([
        '夏の砂浜では、',
        tachyon.uma_sex_title,
        '同士の追いかけっこが繰り広げられている',
      ]);
      await era.printAndWait('鬼ごっこ、といったところだ');
      await era.printAndWait(
        '一対多なのに、なぜか恐れ逃げているのは多数派のほう',
      );
      await era.printAndWait([
        '恐れられている側は、今年上半期で最も勢いのある',
        tachyon.uma_sex_title,
        'であり、',
        you.get_colored_name(),
        ' の担当',
        tachyon.uma_sex_title,
        '、',
        tachyon.get_colored_name(),
      ]);
      era.println();
      await tachyon.say_and_wait(
        'おやおや……今の子は、良薬は口に苦し、という道理もわからないのですか',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        '……もし、苦いだけならまだしも',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        'タキオン先輩の薬……味はいい、いいんですけど……！',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'D',
        '体が光るなんて……本当に恥ずかしいです！',
      );
      era.println();
      await era.printAndWait('…………え？');
      await era.printAndWait([
        you.get_colored_name(),
        ' は眼前の',
        tachyon.uma_sex_title,
        'たちを見る……陽射しでわかりにくいが、腕や肩、脚のあたりが確かに薄く光っている',
      ]);
      await era.printAndWait('だが、光っている場所が妙だ');
      await era.printAndWait([
        'ん？ 太もも内側が光っている',
        tachyon.uma_sex_title,
        'まで……',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……この薬の効果は、血流が速まった部位を光らせます。効力はトレーニングの一時間だけ、のはずですわ、',
      );
      await tachyon.say_and_wait(
        '副作用として、興奮時に触れられた部位のタンパク質UMA—Aの活性を加速します。血流加速で光る原理も、そのUMA—Aを通じて',
      );
      era.drawLine();
      await tachyon.say_and_wait(
        '要するに……意中の人、あるいは心拍を上げる相手と身体が触れたときだけ、光るのですわ',
      );
      era.println();
      await era.printAndWait('ああ、なるほど');
      await era.printAndWait('肩や腕が光る理由はわかった');
      await era.printAndWait('……待て、太もも内側は……');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        tachyon.sex,
        'が急に顔を赤らめたのを見て、すべてを悟った',
      ]);
      await era.printAndWait('……今の子は遊びが派手だ');
      era.println();
      await tachyon.say_and_wait(
        'とにかく……この薬は補助が主です。持続したトレーニングと合わせてこそ効きますわ',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        'わ……私たちはちゃんとトレーニングします！ 怠けません！ だから薬は……',
      );
      await tachyon.say_and_wait(
        'ふふ、それはいけません。両方揃って最良の向上です。ですから……大人しく飲みなさい！',
      );
      era.println();
      await era.printAndWait([
        '瞬く間に、',
        tachyon.get_colored_name(),
        ' は',
        tachyon.uma_sex_title,
        'たちが油断した隙に一歩踏み込み、一名の',
        tachyon.uma_sex_title,
        'の前へ。電光石火で薬を',
        tachyon.sex,
        'の口へ流し込んだ',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '見せてあげますわ……',
        callname,
        ' を相手に鍛えた、薬の流し込み技術を！ はっはっはっはっ！',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        'ひゃあっ———',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'C',
        'ぐわっ————',
      );
      era.println();
      await era.printAndWait([
        'なにしろG1級の',
        tachyon.uma_sex_title,
        'であり、',
        you.get_colored_name(),
        ' も認める最速の',
        tachyon.uma_sex_title,
        'だ。まだ育ちきっていない後輩が ',
        tachyon.get_colored_name(),
        ' の相手になるはずもない',
      ]);
      await era.printAndWait('数分もせず、砂浜は倒れた者で埋まっていた');
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'B',
        'タ……タキオン先輩、別人みたい……',
      );
      era.println();
      await era.printAndWait([
        'そういえば、後輩の目に映る姿を保って実験しやすくするため、',
        tachyon.get_colored_name(),
        ' は後輩の前では作り物の落ち着いた先輩を装っていた',
      ]);
      await era.printAndWait([
        '言ってしまえば、今の姿こそ ',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'の本性だ',
      ]);
      await era.printAndWait(['だが……', tachyon.sex, 'の言う通りでもある']);
      era.printButton('「タキオンは確かに……随分変わったな」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は数日前の ',
        tachyon.get_colored_name(),
        ' の言葉を思い出した',
      ]);
      await tachyon.used_to_say_and_wait(
        'タキオン先輩みたいに強くなりたい……あの子たちがそう言いましたのよ！',
      );
      await tachyon.used_to_say_and_wait([
        'さあ！',
        callname,
        '！ あの子たちのために、',
        tachyon.couple_title,
        'に一番合う薬を調合しなければ！',
      ]);
      await era.printAndWait([
        '「実験のために、',
        tachyon.couple_title,
        'に試薬させる」ではない',
      ]);
      await era.printAndWait([
        '「',
        tachyon.couple_title,
        'のために、薬を調合する」なのだ',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'やっぱり……昔の優しいタキオン先輩はどこへ……',
      );
      era.println();
      await tachyon.say_and_wait(
        'おや～～ここにもまだ一匹、仔馬が残っていますわね？',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'ひっ！！！',
      );
      era.println();
      await era.printAndWait([
        '最後に ',
        you.get_colored_name(),
        ' のそばへ隠れた小さな',
        tachyon.uma_sex_title,
        'まで ',
        tachyon.get_colored_name(),
        ' に押さえ込まれて薬を飲まされ、砂浜のこの残酷な実験は ',
        tachyon.get_colored_name(),
        ' の完勝で幕を閉じた',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'よろしい、',
        callname,
        '。今日の実験を始めましょう',
      ]);
      await era.printAndWait('だが、これだけは変わらない');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、今も限界と、その突破を追い求める',
        tachyon.uma_sex_title,
        'だ',
      ]);
      era.printButton('「で、今日の実験テーマは？」', 1);
      await era.input();
      if (love < 50) {
        era.println();
        await tachyon.say_and_wait([
          callname,
          '……知っていますわね。最近 ',
          call_2,
          ' が水上を走る方法を覚えたらしい、ということを',
        ]);
        await era.printAndWait('…………え？');
        era.println();
        await tachyon.say_and_wait(
          '計算上、秒速30メートルを超えて水上を走れば、軽功で水面を踏むような効果は確かに出せますわ',
        );
        era.println();
        await era.printAndWait('……いや、30メートル？ 毎秒？');
        await era.printAndWait('いつの間にか、腰に縄が結ばれている');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は海辺の水上バイクに跨っていた',
        ]);
        await you.say_and_wait(
          '……なんでお前は水上バイクで、俺が水上を走るんだよ！？',
        );
        era.println();
        await tachyon.say_and_wait([
          '頑張ってください、',
          callname,
          '。あなたならできますわ',
        ]);
        era.println();
        await era.printAndWait('言い終わるか終わらないかで、体が飛び出した');
        await era.printAndWait([
          '軽功が成功したかは不明だ。だがその光景を見た小さな',
          tachyon.uma_sex_title,
          'たちによれば、水面を跳ねる石に似ていたらしい',
        ]);
      } else {
        await tachyon.say_and_wait('今日は……少し面白い実験をしましょう');
        era.println();
        await era.printAndWait([
          'ふいに、',
          tachyon.get_colored_name(),
          ' は後輩たちの前で、',
          you.get_colored_name(),
          ' の手を握った',
        ]);
        era.printButton('「タ……タキオン？」', 1);
        await era.input();
        await era.printAndWait(
          '地面に伏せて死んだふりをしていた後輩たちが、急に目を上げて二人を見つめた',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は顔を ',
          you.get_colored_name(),
          ' の耳に寄せ、小さく言った',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '前にも言いましたわ。観客、あるいはファンの観察をしたい、と',
        );
        await tachyon.say_and_wait([
          '今は感情を煽ったときの探査……たとえば、ここでキスをしたら、',
          tachyon.couple_title,
          'の反応はどうなるでしょう？',
        ]);
        era.println();
        await era.printAndWait([
          '陽射しが熱すぎるせいか、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' の今の目を、まっすぐ見られなかった',
        ]);
        await era.printAndWait([
          'ふいに、',
          tachyon.get_colored_name(),
          ' の唇が ',
          you.get_colored_name(),
          ' の顔に寄る。体が遮り、本当にキスしたように見える',
        ]);
        await era.printAndWait([
          '傍らの',
          tachyon.uma_sex_title,
          'たちから、小さな悲鳴が漏れた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '不思議ですわ。',
          callname,
          '、なぜか',
          tachyon.couple_title,
          'の声を聞いたあと、もっと動きたくなる気がします',
        ]);
        await tachyon.say_and_wait(
          'カリギュラ効果、ですの？ 公衆の場ですることを恥じるほど、かえって欲求が増す',
        );
        era.println();
        await tachyon.say_and_wait('ちゅっ❤');
        era.println();
        await era.printAndWait('キスされた');
        await era.printAndWait('自分を納得させる言い訳も、もうない');
        era.println();
        await tachyon.say_and_wait(
          'では……続けますか？ 観客の感想を、聞いてみましょう❤',
        );
        era.println();
        await era.printAndWait([
          '最後の一文で、',
          tachyon.get_colored_name(),
          ' の声が急に大きくなった',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' が砂浜を振り返ると、眼前の光景に真っ赤な幼い顔が並んでいた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'どうやら……みんな気に入ったようですわね。宝塚のとき、あなたが言ったでしょう？ ファンサービス……とか',
        ]);
        era.println();
        await era.printAndWait([
          'まずい。当時 ',
          tachyon.get_colored_name(),
          ' を説得した言葉が、ブーメランになった',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の体を抱え、勢いで ',
          you.get_colored_name(),
          ' を砂浜に押し倒した',
        ]);
        era.println();
        await tachyon.say_and_wait('まだ……続けますか？');
        era.printButton('「やめておけ」', 1);
        era.printButton('「……やめておけ」', 2);
        await era.input();
        await era.printAndWait(
          'いくらなんでも、これだけの人前では、やりすぎだ',
        );
        await era.printAndWait([
          'よく見れば、',
          tachyon.get_colored_name(),
          ' の頬にも薄い赤みがある……羞恥か興奮かはわからないが',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'では……この小さな',
          tachyon.uma_sex_title,
          'たちから、興奮時のデータを集めてきてくださいな',
        ]);
        era.println();
        await era.printAndWait([
          'ふいに、',
          tachyon.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の上から立ち上がった',
        ]);
        era.println();
        await tachyon.say_and_wait(
          'まだ続けたいなら……データを持って、私のところへ戻ってきなさい❤',
        );
        era.println();
        await era.printAndWait([
          '声を潜めない暗示に、周囲の',
          tachyon.uma_sex_title,
          'たちからまた悲鳴が上がった',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は鼻をこする。データ集めは楽になったが、戻っても戻らなくても噂は避けられそうにない',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_32: (() => {
    const title = '立場を入れ替える実験';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     * @param {PrintedSpan} kobe_hai 神戸新聞杯（着色名）
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      tachyon,
      you,
      callname,
      relation,
      love,
      kobe_hai,
      arim_kin,
    ) => {
      await era.printAndWait('こうして、楽しい夏合宿の時も過ぎた');
      await era.printAndWait('学園のバスで学校へ戻る準備をしている');
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'タ……タキオン先輩！ ちょ、ちょっと待ってください！',
      );
      era.println();
      await era.printAndWait('ん？');
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' は同時に振り返り、髪に大きな流星をつけた小さな',
        tachyon.uma_sex_title,
        'を見た',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(tachyon.uma_sex_title + 'A', [
        '今年の秋……私、',
        kobe_hai,
        ' に出ます……タキオン先輩……そのとき、応援しに来てくれませんか！',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '応援……ですか？',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'はい！ タキオン先輩に、私の走りを見てほしいんです！',
      );
      era.println();
      await era.printAndWait([
        kobe_hai,
        '……九月下旬のレースだ。観戦だけなら、大事な予定を崩すほどではない',
      ]);
      await era.printAndWait([
        'あとは、',
        tachyon.get_colored_name(),
        ' が乗るか否かだ',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'ええ……構いませんわ。その頃は、今のところ他の予定もありませんし',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '本当ですか！ よかった！ 絶対勝ちます！',
      );
      era.println();
      await era.printAndWait([
        '小さな',
        tachyon.uma_sex_title,
        'は興奮して立ち上がり、さっき薬を無理に飲まされたようには見えない速さで走り去った',
      ]);
      era.println();
      await tachyon.say_and_wait('……眩しいですわね。この子たちの可能性は');
      era.printButton('「年寄りみたいな口調だな」', 1);
      era.printButton('「俺の目には、タキオンが一番眩しい！」', 2);
      await era.input();
      if (love >= 75) {
        await tachyon.say_and_wait(
          'そう？ でしたら……ずっと見ていてくださいな。私の可能性は、もうあなたなしではいられませんもの♡',
        );
        await era.printAndWait([
          '夏合宿は終わった。次は ',
          arim_kin,
          '！……その前に、',
          kobe_hai,
          ' の観戦だ！',
        ]);
      } else if (love >= 50) {
        await tachyon.say_and_wait(
          'でしたら……見ていてください。私の可能性が届く場所を',
        );
      } else if (relation >= 225) {
        await tachyon.say_and_wait(
          'ふふ、当然ですわ。あの子たちが私を超えるには、まだ早すぎます！',
        );
      } else if (relation >= 0) {
        await tachyon.say_and_wait(
          'あなた……そんな甘い言葉を言わないと死ぬのですか？',
        );
      } else {
        await tachyon.say_and_wait(
          'あなたのような人に期待されるのは……不快ですわ',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_35: (() => {
    const title = '因子・傍観者の設定';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait(
        'よく考えると……観客席でレースを見るのは、これが初めてですわね',
      );
      era.println();
      await era.printAndWait(['今日は神戸新聞杯']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が後輩に招かれて観戦する日だ',
      ]);
      era.printButton('「だいたい自分が出走するからな」', 1);
      era.printButton('「だいたい映像で見るからな」', 2);
      await era.input();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' にとって、自分のレース以外で場に来る必要はなかったはずだ',
      ]);
      await era.printAndWait(
        'レースのデータ分析なら、観客席より終了後の映像のほうが取れる情報は多い',
      );
      await era.printAndWait(
        'だから今日は本当に初めてだ。研究ではなく、観客としてレースを見る',
      );
      era.println();
      await tachyon.say_and_wait('……現場の感触は……やはりうるさいですわね');
      era.println();
      await you.say_as_passer_by_and_wait('ファンA', '頑張れ！');
      await you.say_as_passer_by_and_wait('ファンB', '絶対勝ってくれ！');
      await you.say_as_passer_by_and_wait('ファンC', [
        '神戸新聞杯は菊花賞の前哨戦と言われるけど、実際2400メートルで阪神開催という二点は、菊花賞の検証としては……',
      ]);
      await you.say_as_passer_by_and_wait('ファンC', [
        '……だから神戸新聞杯を勝った',
        tachyon.uma_sex_title,
        'が菊花賞も勝つとは限らない',
      ]);
      await you.say_as_passer_by_and_wait('ファンD', '急に何の話だよ');
      era.println();
      await tachyon.say_and_wait('これが、普段私が走る前の観客席なのですか？');
      era.printButton('「だいたいそんな感じ。もっと賑やかなくらいだ」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '……そうですわね、G1ですもの。気持ちはわかりますが、このタイミングで声援しても無意味でしょう',
      );
      era.printButton('「無意味かどうか……そういう計算じゃない」', 1);
      era.printButton('「見ていればわかる」', 2);
      await era.input();
      await tachyon.say_and_wait('見ていれば、とは……おや？ ゲートインですわ');
      era.drawLine();
      await tachyon.print_and_wait('あの子がゲートに入った');
      await tachyon.print_and_wait([
        '正直、このレースで ',
        tachyon.get_colored_name(),
        ' が注目すべき点は多くない',
      ]);
      await tachyon.print_and_wait('可能性を持つあの子が、当然の最優先だ');
      await tachyon.print_and_wait(
        '……それ以外は、クラシック級限定のG2にすぎない',
      );
      era.println();
      await tachyon.say_and_wait('負けようがない、と言えますわね');
      era.println();
      await tachyon.print_and_wait('事前人気も当然の1番人気');
      await tachyon.print_and_wait('天の時、地の利、人の和。負けるはずがない');
      await tachyon.print_and_wait('事前分析の勝率は97.46%');
      era.println();
      await tachyon.print_and_wait('だが……');
      era.println();
      await you.say_as_passer_by_and_wait('観客A', '負けるな！');
      await you.say_as_passer_by_and_wait('観客B', [
        '頑張れ！ まだいける！ 外から',
        tachyon.sex,
        'を捲れ！',
      ]);
      await you.say_as_passer_by_and_wait(
        '観客C',
        '諦めるな！ 必ず追いつける！',
      );
      era.println();
      await tachyon.print_and_wait([
        'なぜまだ後ろの',
        tachyon.uma_sex_title,
        'に声援を送る',
      ]);
      await tachyon.print_and_wait('明らかに、もう届かないではないか');
      await tachyon.print_and_wait('……わからない');
      await tachyon.print_and_wait([
        'いいえ、理解はできる。徒労でも、支持する',
        tachyon.uma_sex_title,
        'に声を上げたい。その気持ちはわかる',
      ]);
      await tachyon.print_and_wait(
        '狂った科学者と呼ばれても、人情のわからないロボットではない',
      );
      await tachyon.print_and_wait('だが、なぜ自分は……');
      era.println();
      await you.say_as_passer_by_and_wait('実況', [
        '追い上げた！ いま後方の',
        tachyon.uma_sex_title,
        'が追い上げた！',
      ]);
      era.println();
      await tachyon.say_and_wait('！');
      await tachyon.say_and_wait('……頑張れ');
      await tachyon.say_and_wait('頑張れ！ 負けるんじゃないわよ！');

      era.printButton('「！」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        '実況',
        'ゴール—————イン！ 1着は1番1枠—————',
      );
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の声援は、場内の喝采と声援に埋もれた',
      ]);
      await era.printAndWait([
        '場内で聞こえたのは、おそらく',
        tachyon.sex,
        'のそばの ',
        you.get_colored_name(),
        ' と……',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        '先輩！ 応援、聞こえました！ ありがとう……あのとき、全身に力が湧いて！',
      );
      era.println();
      await tachyon.say_and_wait(
        '……ふふ、いい走りでしたわ。これからも、努力を続けなさい',
      );
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'はい！',
      );
      era.println();
      await era.printAndWait([
        '神戸新聞杯が終わり、',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' は場を離れた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……理論では確定していましたが、場外の人間として……あるいは当事者として見るのは、初めてですわ',
      );
      await tachyon.say_and_wait(
        '他の子も、あの子も、最後は……本当に限界を超えました',
      );
      era.println();
      await era.printAndWait([
        '今日のレースでは、何人もの',
        tachyon.uma_sex_title,
        'が',
      ]);
      await era.printAndWait('限界を超えた');
      await era.printAndWait([
        '事前に測った、',
        tachyon.couple_title,
        'の理論上の最高速度を超えた',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '、ファン感謝祭のときのこと、覚えていますか？',
      ]);

      era.printButton(
        '「タキオンは見返りを考えて、あの子を応援したのか？」',
        1,
      );
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は答えず、問い返しただけだった',
      ]);
      era.println();
      await tachyon.say_and_wait('……ふふ');
      await tachyon.say_and_wait(
        '聞かれたい、やり取りをしたい、からの行為ではない……',
      );
      await tachyon.say_and_wait(
        'ただ自分の気持ちと情緒を、声にして吐き出した',
      );
      await tachyon.say_and_wait('言い換えれば、『感動』ですわ');
      await tachyon.say_and_wait([
        '観客が',
        tachyon.uma_sex_title,
        'に感動して歓声を上げ、',
        tachyon.uma_sex_title,
        'も観客に感動して自分の限界を超える……',
      ]);
      await tachyon.say_and_wait(
        '左足で右足を踏むような、永久機関じみた不合理な概念なのに、実際に起きている',
      );
      await tachyon.say_and_wait(
        'やはり、研究室では絶対に味わえないものですわ。はっはっはっ！',
      );

      era.printButton('「これで、レースを『好き』になったのか」', 1);
      await era.input();
      await tachyon.say_and_wait('……ええ、私にもわかりませんわ');
      era.println();
      await era.printAndWait('……そうだ');
      await era.printAndWait('結局、自分で場に立って走ったわけではない');
      await era.printAndWait('好きか嫌いかは、まだ言葉にしにくいだろう');
      await era.printAndWait([
        'だが神戸新聞杯が終わり、有馬記念がすぐそこまで来ている',
      ]);
      await era.printAndWait('研究の終わり（Deadline）が、眼前にある');
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_39: (() => {
    const title = '最終因子を求めて';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      relation,
      love,
    ) => {
      await era.printAndWait(
        '時が秋に入ると、年末最大のレースも世間の目に入ってくる',
      );
      era.println();
      await you.say_as_passer_by_and_wait('記者A', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        '、年末の有馬記念で1番人気であることについて、感想は？',
      ]);
      await tachyon.say_and_wait([
        '1番人気？ 別に……いいえ、皆様の支持に感謝します。有馬記念は……',
      ]);
      await tachyon.say_and_wait('自分の限界を超えることを目標に、走りますわ');
      await you.say_as_passer_by_and_wait('記者B', [
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        'の目標は',
        tachyon.uma_sex_title,
        'の限界を超える、とのことですが、どういう意味でしょう？',
      ]);
      await tachyon.say_and_wait(
        'ふふふ……万事うまくいけば、有馬記念でご覧になれますわ',
      );
      await you.say_as_passer_by_and_wait('記者C', [
        '有馬記念に向けて、',
        tachyon.get_colored_name(),
        ' ',
        tachyon.adult_sex_title,
        'はどんな準備を？',
      ]);
      await tachyon.say_and_wait(
        'コースと肉体の突破は言うまでもありません。それ以外に……実は、精神面の突破を求めていますの',
      );
      era.println();
      await era.printAndWait('精神面の突破');
      await era.printAndWait('その話題に、現場の記者は戸惑った');
      await era.printAndWait('外見の印象でも、たまに聞く噂でも');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は精神論を語る',
        tachyon.uma_sex_title,
        'には見えない',
      ]);
      era.println();
      await you.say_as_passer_by_and_wait('記者A', [
        'せ……精神面の突破？……次の相手があの ',
        coffee.get_colored_name(),
        ' だから、精神面の助けを求めている、ということで？',
      ]);
      await tachyon.say_and_wait([call_25, '……相手……？']);
      await you.say_as_passer_by_and_wait('記者A', 'ち、違うんですか？');
      await tachyon.say_and_wait('……いいえ、検討に値する可能性ですわ。ふふふ');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は含みのある言葉を残し、説明はしなかった',
      ]);
      if (love >= 50 && love < 75) {
        await you.say_as_passer_by_and_wait('記者A', [
          'そういえば……あと、',
          tachyon.get_colored_name(),
          ' とトレーナーの噂',
        ]);
        await you.say_as_passer_by_and_wait('記者A', 'お二人に伺いたい……');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が ',
          you.get_colored_name(),
          ' を一瞥する。なぜか、',
          you.get_colored_name(),
          ' は背筋がざわついた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '聞きたいのは、私と',
          you.sex,
          'のあいだに……恋愛の感情があるか、ですの？',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はまた ',
          you.get_colored_name(),
          ' を見た。今度はわかった。',
          tachyon.sex,
          'の意味は「どう答えてほしい？」だ',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は記者に見えない角度で、最小限に首を振った。',
          tachyon.sex,
          'に届くように',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……こう言いましょう。',
          you.sex,
          'は……私にとって最も大切な……',
        ]);
        await you.say_as_passer_by_and_wait('記者A', '最も大切な……？');
        era.println();
        await era.printAndWait([
          '場の注意が、すべて ',
          tachyon.get_colored_name(),
          ' の言葉に集まった',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' も思わず唾を飲み込んだ',
        ]);
        era.println();
        await tachyon.say_and_wait('最も大切な……実験動物ですわ');
        era.println();
        await era.printAndWait('記者たちは答えを聞いて、みな肩を落とした');
        await era.printAndWait([
          you.get_colored_name(),
          ' も息を吐いた。ただし、安心のそれだ',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は口の形だけで、',
          you.get_colored_name(),
          ' に「貸し一つ」と伝えた',
        ]);
        await era.printAndWait([
          'だが今の ',
          you.get_colored_name(),
          ' に、それを気にする余裕はない',
        ]);
        era.println();
        await era.printAndWait('余談。その翌日の新聞見出しは……');
        await you.say_as_unknown_and_wait([
          tachyon.get_colored_name(),
          ' が噂に応答！ トレーナーを最も大切な存在と発言！',
        ]);
        await era.printAndWait('…………何も回避できていないではないか');
      }
    };
    f.title = title;
    return f;
  })(),
  we_a_95_43: (() => {
    const title = '燃え切った勝負心';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} callname_25 マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕
     * @param {boolean} invincible アグネスタキオンは無敗か
     * @param {boolean} beat_c アグネスタキオンはマンハッタンカフェに勝ったことがあるか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
      invincible,
      beat_c,
    ) => {
      await tachyon.say_and_wait('ふう……ふう……');
      era.println();
      await era.printAndWait([
        '神戸新聞杯のあと今日まで、',
        tachyon.get_colored_name(),
        ' のトレーニングは良好な状態を保っていた',
      ]);
      era.println();
      await tachyon.say_and_wait('……今日も、同じですわね');
      era.println();
      await era.printAndWait('だが……維持は、進歩がないということでもある');
      await era.printAndWait([
        '有馬が近づくにつれ、',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' の気持ちも、焦りを帯びてきた',
      ]);
      await you.say_as_passer_by_and_wait(
        tachyon.uma_sex_title + 'A',
        'タキオン先輩！ 今日も来ました！',
      );
      era.println();
      await era.printAndWait([
        'そのとき二人を癒したのは、神戸新聞杯のときの後輩',
        tachyon.uma_sex_title,
        'だった',
      ]);
      await era.printAndWait([
        'その後輩の',
        tachyon.uma_sex_title,
        'は、いまではよく ',
        tachyon.get_colored_name(),
        ' についてトレーニングしている',
      ]);
      await era.printAndWait([
        'トレーナーである ',
        you.get_colored_name(),
        ' も、ときどき',
        tachyon.sex,
        'に助言する',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が退屈そうに相手を見ていたとき、見慣れた顔が眼前に浮かんだ',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'どうしましたの？ そんなに熱心に見て、あの子に気がある、ですの？',
      );
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は慌てて首を振った']);
      era.println();
      if (relation >= 0) {
        await tachyon.say_and_wait(
          'くふふ……あの子には、確かにかなりの可能性がありますわ',
        );
        await tachyon.say_and_wait([
          '……以前の私なら、',
          tachyon.sex,
          'を Plan B の候補にしたかもしれませんわね',
        ]);
        await tachyon.say_and_wait(
          'ですが Plan B はすべて、Plan A が成り立たないときの備え',
        );
        await tachyon.say_and_wait(['本末転倒は困りますわよ、', callname]);
      } else {
        await tachyon.say_and_wait(
          '私が気にかけている後輩を、そんな目で見ないでくださいませ',
        );
        await tachyon.say_and_wait(
          '……あなたの類は、他人を巻き込む資格がありませんわ',
        );
        await tachyon.say_and_wait(
          '私の傍にいること自体が、あなたへの最大の慈悲ですわ',
        );
      }
      if (love >= 75) {
        era.println();
        await tachyon.say_and_wait(
          '忘れるようなら、もう一度、あなたの目を灼いて差し上げますわ……',
        );
        await tachyon.say_and_wait([
          '今度は、目が眩むほどに……他の',
          tachyon.uma_sex_title,
          'の姿など、見えなくなるまで',
        ]);
      }
      era.println();
      await era.printAndWait([
        'これは、ある意味で ',
        tachyon.get_colored_name(),
        ' の独占欲だろうか',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は苦笑するしかなかった',
      ]);
      era.println();
      await era.printAndWait([
        'だが今日の来客は、後輩の',
        tachyon.uma_sex_title,
        'だけではなかった',
      ]);
      era.println();
      await tachyon.say_and_wait('……おや');
      await coffee.say_and_wait([c_call_t, '……']);
      era.println();
      await era.printAndWait([
        coffee.get_colored_name(),
        '。',
        tachyon.get_colored_name(),
        ' の Plan B の本命',
      ]);
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          you.get_colored_name(),
          ' の担当',
          tachyon.uma_sex_title,
          'でもある',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' と誓い、友人に追いつくと決めた大切な担当',
        ]);
      }
      era.println();
      await era.printAndWait([
        'わけもなく、突然 ',
        tachyon.get_colored_name(),
        ' のもとへ来た',
      ]);
      era.println();
      await tachyon.say_and_wait([
        call_25,
        '？ 私の実験を受けに、ですの？ いつでも大歓……',
      ]);
      await coffee.say_and_wait(
        '違う……ただ、模擬レースを……お願いできないかと思って',
      );
      await tachyon.say_and_wait('……模擬レース？');
      await coffee.say_and_wait('ええ……どうしても、お願いしたい');
      era.println();
      await era.printAndWait('……模擬レースの申請は簡単だ');
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          'まして ',
          you.get_colored_name(),
          ' は',
          tachyon.couple_title,
          '二人のトレーナーだ',
        ]);
      }
      await era.printAndWait('特別な手配すら要らず、場を借りれば足りる');
      era.println();
      await era.printAndWait('申請の手続きは、ほどなく下りた');
      await era.printAndWait([
        '二人だけのコースで、',
        you.get_colored_name(),
        ' がスタートの宣告役として柵の外に立つ',
      ]);
      await era.printAndWait('胸の内は、不安とざわめきだった');
      await era.printAndWait([
        tachyon.get_colored_name(),
        '。',
        tachyon.sex,
        'の目標は、',
        tachyon.uma_sex_title,
        'の限界を超えること',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '。',
        coffee.sex,
        'の目標は、友人の歩みに追いつくこと',
      ]);
      era.println();
      await era.printAndWait('運命の配役か、悪趣味な偶然か。');
      await era.printAndWait(['二人とも、最終目標を有馬記念に置いている']);
      await era.printAndWait(
        '今日の模擬レース……理由は不明でも、あの日の予行と見ていいだろう',
      );
      await era.printAndWait([
        '複雑な気持ちを抱えたまま、',
        you.get_colored_name(),
        ' は旗を振り下ろした',
      ]);
      era.drawLine();
      await tachyon.print_and_wait('第3コーナー、それから……最後の直線');
      await tachyon.print_and_wait([call_25, ' は左？ いいえ、右']);
      await tachyon.print_and_wait([
        call_25,
        ' の走りは相変わらず……捉えきれない',
      ]);
      await tachyon.print_and_wait('ですが、法則なら、掴めるはずですわ');
      era.println();
      await tachyon.say_and_wait('今ですわ……っ！？');
      era.println();
      await tachyon.print_and_wait('認めねばなりませんわ');
      await tachyon.print_and_wait('レース前の自分は、確かに油断していた');
      await tachyon.print_and_wait('Plan B の代替として');
      if (beat_c) {
        await tachyon.print_and_wait('そのうえ、かつての敗北者として');
      }
      await tachyon.print_and_wait('口ではいくら綺麗に言っても');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' は独立した個体だ、などと',
      ]);
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' には自分に劣らぬ才能がある、などと',
      ]);
      await tachyon.print_and_wait(
        '胸の裡では、傲慢と呼ぶのもおこがましい軽視が生まれていた',
      );
      await tachyon.print_and_wait([
        '偽者の',
        coffee.sex,
        'が、絶好調の本物に勝てるはずがない、と',
      ]);
      era.println();
      await tachyon.say_and_wait('走りも、速度も……見知らぬものですわ');
      era.println();
      await tachyon.print_and_wait('当然ですわ');
      await tachyon.print_and_wait([
        '前回、',
        tachyon.get_colored_name(),
        ' が ',
        coffee.get_colored_name(),
        ' の走りと速度を仔細に見たのは、一年前の七月のことですから',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '自分が進んでいるあいだ、相手はその場で待っていると思った理論家は、侮りの代償を払うことになる',
      );
      await tachyon.print_and_wait('……相手、ですの？');
      era.println();
      await tachyon.print_and_wait('偽者ではない');
      await tachyon.print_and_wait('代替品でもない');
      await tachyon.print_and_wait(
        '漆黒の猟犬が、傲慢な研究者の首筋に牙を立てた',
      );
      await tachyon.print_and_wait('痛みと、敗北で、自らの存在を証明する');
      await tachyon.print_and_wait([
        tachyon.sex,
        'と同じ舞台に立てる「相手」だと、証明する',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……くふふ。相手に勝ちたい、相手を超えたい、誰かを越えたい……なるほど、こういう感触ですのね？',
      );
      era.println();
      await tachyon.print_and_wait('いいでしょう。認めますわ');
      await tachyon.print_and_wait([
        '今回は ',
        tachyon.get_colored_name(),
        ' の負けですわ',
      ]);
      await tachyon.print_and_wait(
        '覚悟が足りない。研究が足りない。真剣さが足りない',
      );
      await tachyon.print_and_wait(
        'この状態で勝ってしまっては、相手の努力を軽んじることになりますわ',
      );
      await tachyon.print_and_wait([
        'むしろ、',
        call_25,
        ' に感謝すべきですわ',
      ]);
      await tachyon.print_and_wait([
        'このまま放置して、有馬記念で欠けた「最後の要素」に気づいたのでは、やり直しは利きませんわ',
      ]);
      await tachyon.print_and_wait('ですから……');
      era.println();
      await tachyon.say_and_wait('ああ……今回の私は———');
      era.printButton('「タキオン、負けるな！」', 1);
      era.printButton('「カフェ、頑張れ！」', 2, {
        disabled: era.get('cflag:25:招募状态') !== recruit_flags.yes,
      });
      const ret = await era.input();
      era.println();
      if (ret === 1) {
        await tachyon.print_and_wait('言葉は喉まで来て、出ない');
        await tachyon.print_and_wait([
          '純粋な ',
          tachyon.get_colored_name(),
          ' なら、目の前の敗北を認めるのは難しくないはずですわ',
        ]);
        await tachyon.print_and_wait(
          'レースは実験と同じ。必ず成功する道理などない',
        );
        await tachyon.print_and_wait(
          '失敗しても構わない。教訓を吸って、やり直せばいい。それだけのこと',
        );
        await tachyon.print_and_wait('まして、これは模擬レースにすぎませんわ');
        era.println();
        await tachyon.print_and_wait('諦める理由はいくらでも挙げられる');
        await tachyon.print_and_wait('続ける理由は、たった一つ');
        await tachyon.print_and_wait('ですがその一つが、他のすべてに勝る');
        era.println();
        await tachyon.say_and_wait('勝ちたい……勝ちたいのですわ！');
        era.println();
        await tachyon.print_and_wait('自分でも驚く執着');
        await tachyon.print_and_wait([
          '純粋な ',
          tachyon.get_colored_name(),
          ' なら、いまならきっぱり諦められる',
        ]);
        await tachyon.print_and_wait(
          'ですが、外界に左右されない、純粋で冷酷な研究者は、もういませんわ',
        );
        era.println();
        await tachyon.print_and_wait(
          '他者の声援を受け入れ、他者に感染されたとき',
        );
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' は、すでに純粋ではなくなった',
        ]);
        await tachyon.print_and_wait([
          'いまの ',
          tachyon.get_colored_name(),
          ' は、研究のため、限界を超えるため',
        ]);
        await tachyon.print_and_wait('そして……');
        await tachyon.print_and_wait('どのレースでも、自分の傍にいる人のため');
        await tachyon.print_and_wait([
          'いつでも ',
          tachyon.get_colored_name(),
          ' の要求を優先してくれる人のため',
        ]);
        era.println();
        if (love >= 50) {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            ' は、唯一の恋人のために走っている',
          ]);
        } else if (relation > 225) {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            ' は、志を同じくする同志のために走っている',
          ]);
        } else {
          await tachyon.print_and_wait([
            tachyon.get_colored_name(),
            ' は、唯一の実験動物のために走っている',
          ]);
        }
        era.println();
        await tachyon.print_and_wait(
          '反応は相互作用する。化学の基本定理ですわ',
        );
        await tachyon.print_and_wait([
          you.get_colored_actual_name(),
          ' という名のモルモットが ',
          tachyon.get_colored_name(),
          ' の走りに両目を灼かれるのと同時に',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' も',
          you.sex,
          'の声援を受けながら、',
          you.sex,
          'に変えられていく',
        ]);
        era.println();
        await tachyon.say_and_wait([
          you.sex,
          'の前で負けたくない……',
          you.sex,
          'の信頼を裏切りたくない……それに……',
        ]);
        era.println();
        await tachyon.say_and_wait([
          coffee.get_colored_name(),
          ' には、負けたくありませんわ！',
        ]);
      } else {
        await tachyon.say_and_wait('————私の、負けですわ');
        era.println();
        await tachyon.print_and_wait('ですが、永遠ではない');
        await tachyon.print_and_wait('いまだけ、この瞬間だけ認める');
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' は ',
          coffee.get_colored_name(),
          ' に及ばない',
        ]);
        await tachyon.print_and_wait('次は、有馬記念');
        await tachyon.print_and_wait('こちらが挑戦者として向き直り');
        await tachyon.print_and_wait([
          coffee.get_colored_name(),
          ' の喉を引き裂き、噛み砕く',
        ]);
        era.println();
        await tachyon.print_and_wait('ああ……止まない灼熱');
        await tachyon.print_and_wait('どうしても、収まらない');
      }
      era.println();
      await tachyon.print_and_wait('研究者としての傲り？');
      await tachyon.print_and_wait('予備計画への軽視？');
      await tachyon.print_and_wait('いいえ、違いますわ');
      await tachyon.print_and_wait('ただ勝ちたい。徹底して超えたい');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' に負けたくない',
      ]);
      await tachyon.print_and_wait([coffee.get_colored_name(), ' に勝ちたい']);
      era.println();
      if (ret === 1) {
        await tachyon.say_and_wait('必ず……勝ちますわ！');
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が模擬レースに勝った',
        ]);
        await era.printAndWait('だが……ほんのわずかな差だ');
        era.println();
        await tachyon.say_and_wait([
          'はあ……はあ……ふ……くふふふ！ どうですの？',
          call_25,
          '、最後は私の勝ちですわ！',
        ]);
        await coffee.say_and_wait(
          '……今が本当の実力だと思わないで……これは模擬レースにすぎない',
        );
        await tachyon.say_and_wait(
          'くふふふ！ 愉快、愉快。負け犬の悔しげな吠え声も悪くありませんわ……ぐっ！',
        );
        await coffee.say_and_wait('…………覚えておきなさい');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は作り笑いの途中で、',
          coffee.get_colored_name(),
          ' の視線に黙った。見えない手で口鼻を塞がれたように',
        ]);
        if (
          era.get('cflag:25:招募状态') === recruit_flags.yes &&
          era.get('love:25') >= 75
        ) {
          await coffee.say_and_wait([
            callname_25,
            '……有馬のとき……声をかけてくれると、うれしい',
          ]);
        }
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' は振り向かず訓練場を去り、',
          you.get_colored_name(),
          ' と ',
          tachyon.get_colored_name(),
          '、そして出番はなかったが確かに場に残っていた後輩',
          tachyon.uma_sex_title,
          'だけが残った',
        ]);
        era.println();
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          'タキオン先輩！ 本当にすごかったです！',
        );
        await tachyon.say_and_wait([
          '……ふんふん、まだ序の口ですわ。有馬記念を見てくださいまし。そのときは、極致の走りをお見せしますわ！',
        ]);
        await you.say_as_passer_by_and_wait(
          tachyon.uma_sex_title + 'A',
          'タキオン先輩～～～～！',
        );
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が後輩に二言三言応えると、後輩も場を離れた',
        ]);
        await era.printAndWait('そこまでして……');
        era.printButton(`「……もういい。${tachyon.couple_title}は行った」`, 1);
        await era.input();
        await tachyon.say_and_wait('はあ～～');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は、詰めていた息が抜けたように ',
          you.get_colored_name(),
          ' に寄りかかり、地面に崩れ落ちた',
        ]);
        await era.printAndWait([
          '普段なら ',
          you.get_colored_name(),
          ' は心配顔で、',
          tachyon.sex,
          'の具合を尋ねる',
        ]);
        await era.printAndWait('だが今は……');
        era.printButton('「お疲れ」', 1);
        era.printButton('「きつかっただろ」', 2);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' にしかわからない。さっきのレースで ',
          tachyon.get_colored_name(),
          ' は本当に全力を出した',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          ' の走りと可能性に追い詰められ、全力を出し、かろうじて、本当にかろうじて、',
        ]);
        await era.printAndWait('誤差と呼べるほどの差で勝った');
        era.println();
        await tachyon.say_and_wait([
          'ええ……',
          call_25,
          '……想像を、超えて伸びていましたわ……',
        ]);
        await tachyon.say_and_wait([
          '私はまだ……元の態度のまま',
          tachyon.sex,
          'に接していた……',
        ]);
      } else {
        await tachyon.print_and_wait('ああ……この感触が、つまり……');
        era.drawLine();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は模擬レースに負けた',
        ]);
        await era.printAndWait('だが、ごくわずかな差での敗北だ');
        era.println();
        await coffee.say_and_wait('……この程度なら、失望する');
        await coffee.say_and_wait([
          'こんな ',
          c_call_t,
          ' では、友人を超える目標の助けにならない……',
        ]);
        if (love >= 75) {
          await coffee.say_and_wait([
            'わからない……なぜ ',
            callname_25,
            ' は、あなたに時間を使うのか',
          ]);
          era.println();
          await era.printAndWait([
            coffee.get_colored_name(),
            ' が ',
            you.get_colored_name(),
            ' に寄り添う。親密な仕草と容赦ない批評の落差に、',
            you.get_colored_name(),
            ' は戸惑った',
          ]);
          await era.printAndWait([
            '走り終えたばかりの薄い草の香りと、かすかな汗の匂いが ',
            you.get_colored_name(),
            ' の嗅覚をくすぐる',
          ]);
          await era.printAndWait([
            '少し湿った髪と、息を整えた赤い頬が ',
            you.get_colored_name(),
            ' の視覚を刺激する',
          ]);
          await era.printAndWait([
            '思わず、',
            you.get_colored_name(),
            ' は手を抑えきれなくなる',
          ]);
          era.println();
          await coffee.say_and_wait([
            callname_25,
            '……ここで？ ',
            c_call_t,
            ' の前で……？',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は、芝に伏してまだ息を乱す ',
            tachyon.get_colored_name(),
            ' を見て、我に返った',
          ]);
          await coffee.say_and_wait([
            callname_25,
            '、さっきの……よければ、あとで……',
          ]);
          await era.printAndWait([
            coffee.get_colored_name(),
            ' は曖昧な言葉を残して去った',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' を強く睨んだ',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' は視線を逸らし、',
            tachyon.sex,
            'を直視できない',
          ]);
        }
        era.println();
        await era.printAndWait([
          coffee.get_colored_name(),
          ' が去ったあとでも、',
          tachyon.get_colored_name(),
          ' は芝から起き上がらない',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、芝に伏す ',
          tachyon.get_colored_name(),
          ' を心配そうに見た',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……',
          callname,
          '……',
          call_25,
          ' は本当に……想像を、超えて伸びていましたわ……',
        ]);
        await tachyon.say_and_wait([
          '私はまだ……元の態度のまま',
          tachyon.sex,
          'に接していた……',
        ]);
      }
      await tachyon.say_and_wait('……まったく……恥ずかしいですわ……');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'が息を切らして口にした言葉は、今日まで ',
        tachyon.get_colored_name(),
        ' が言うとは思えなかったものだ',
      ]);
      if (invincible) {
        await era.printAndWait([
          '敗北を知らなかった ',
          tachyon.get_colored_name(),
          ' が、その瞬間、敗北の可能性を本当に味わった',
        ]);
      } else {
        await era.printAndWait(
          '以前負けたレースでさえ、これほどの圧迫はなかった',
        );
      }
      era.println();
      if (ret === 1) {
        await tachyon.say_and_wait([
          'もし……もしさっき、本当に ',
          call_25,
          ' に負けていたら',
        ]);
        await tachyon.say_and_wait(
          'その可能性を思うだけで、全身が震えますわ……私は拒んでいる。その可能性を拒んでいる',
        );
      } else {
        await tachyon.say_and_wait([
          'もし……もしさっき、',
          call_25,
          ' に勝っていたら',
        ]);
        await tachyon.say_and_wait(
          'その可能性を思うだけで、全身が震えますわ……私は渇望している。その可能性を渇望している',
        );
      }
      await tachyon.say_and_wait([
        call_25,
        ' には負けたくない……',
        call_25,
        ' に負けたのが悔しい',
      ]);
      await tachyon.say_and_wait([
        'なのに……胸はまだ燃えている。また ',
        call_25,
        ' と勝負したい。正面から、徹底して',
        tachyon.sex,
        'を打ち負かしたい',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は顔を上げ、',
        you.get_colored_name(),
        ' の目を見た',
      ]);
      await era.printAndWait([
        '以前の、狂おしく惹きつける光子のような眼差しより、いまの',
        tachyon.sex,
        'の両目は感情の揺らぎで満ちている',
      ]);
      await era.printAndWait([
        '燃える炬火のようだ。だがその旺盛な火は、揺らぎのない光子より眩しく、',
        you.get_colored_name(),
        ' の視線をより強く捉える',
      ]);
      era.println();
      await tachyon.say_and_wait('これが……ライバルの感触、ですの？');
      await tachyon.say_and_wait([
        '負けたことが悔しいのではない……『',
        coffee.get_colored_name(),
        '』に負けたことが悔しい',
      ]);
      await tachyon.say_and_wait('そうとしか説明できませんわ。この熱さは……');
      await tachyon.say_and_wait([
        '……今すぐ戻りましょう！',
        callname,
        '！ これですわ！ これです！ 欠けていた最後のものですわ！',
      ]);
      era.println();
      await era.printAndWait(['年の瀬が近い。次は、有馬記念だ']);
      return [];
    };
    f.title = title;
    return f;
  })(),
  ws_a_95_48: (() => {
    const title = '聖夜のサンタ';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, you, callname, relation, love) => {
      await era.printAndWait('真冬の夜');
      await era.printAndWait(['明日は、有馬記念だ']);
      await era.printAndWait([
        '体調を整えて、',
        tachyon.get_colored_name(),
        ' の応援に立たねばならない',
      ]);
      await era.printAndWait('だから、早く寝なければ');
      await era.printAndWait('だから……');
      era.println();
      await era.printAndWait(
        '誰だ、この時間に外でガタガタと安眠を妨げるのは！',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は腹立ちまぎれに窓を開けた。外にいたのは、試験管を手にした ',
        tachyon.get_colored_name(),
        ' だった',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'おや、起きてしまいましたの。最新の試薬を試す機会を逃しましたわ……',
      );
      era.printButton('「……それは何だ」', 1);
      era.printButton('「……なぜ窓の外にいる」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          'ええ……無味無臭でガラスだけを溶かす薬ですわ。ガラスにしか効きませんから、以前みたいに床まで穴を開ける事故は防げます。ただし副作用は……',
        );
        await tachyon.say_and_wait(
          '溶けたあと、隙間へ潜り込んで掃除がほぼ不可能になりますの。腐食された箇所は、全部外さない限り二度とガラスを嵌められませんわ',
        );
        era.println();
        await era.printAndWait('怖すぎる！？');
      } else {
        await tachyon.say_and_wait(
          'ふふ、サプライズですわ……それより、先に入れてくれませんの？ 外は少々寒いですわよ',
        );
        era.println();
        await era.printAndWait('だからなぜ窓を登るんだ！！');
      }
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は遠慮なく部屋へ入った',
      ]);
      await era.printAndWait([you.get_colored_name(), ' は警戒して相手を見る']);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の私宅侵入は、これが初めてではない。毎回、朝まで待てない実験を理由に、自分へ薬を盛ってくる',
      ]);
      await era.printAndWait([
        '普段ならまだしも、有馬の前夜という大事な時間に、これ以上',
        tachyon.sex,
        'の好き放題は許されない',
      ]);
      era.printButton('「明日は有馬記念だ」', 1);
      era.printButton('「早く戻って休め」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '……ふむ、明日は有馬記念。では……今日は、何ですの？',
      ]);
      era.printButton('「今日？」', 1);
      era.printButton('「……有馬記念の前日？」', 2);
      await era.input();
      await era.printAndWait('…………');
      await era.printAndWait('場が、いきなり沈黙に落ちた');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' すら、呆れて言葉を失ったかのようだ',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……',
        callname,
        '、今日、街のパン屋が急にブッシュ・ド・ノエルを並べ始めたの、気づきました？',
      ]);
      era.printButton('「最近の流行か？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        '…………ケン○ッキーが、チキンセットを出し始めた、ですの？',
      );
      era.printButton('「○ンタッキーに、チキン以外のセットなんてあるか？」', 1);
      await era.input();
      await tachyon.say_and_wait('……………生徒会長の着ぐるみ、ですの？');
      era.printButton(
        '「どうせ寒い冗談のネタだろ、騙されないぞ、クリスマスツリーに扮して…………え？」',
        1,
      );
      await era.input();
      await era.printAndWait('…………');
      await era.printAndWait('部屋の中が、また沈黙に沈んだ');
      era.printButton('「まさか……今日……クリスマスか？」', 1);
      await era.input();
      await era.printAndWait('ははは');
      await era.printAndWait([
        '室内に、',
        tachyon.sex,
        'の鈴のような笑い声が響いた',
      ]);
      await era.printAndWait(
        'この声を鈴にするなら、自分もサンタクロースの到来を信じそうだ',
      );
      era.println();
      await tachyon.say_and_wait([
        'そうですわ、',
        callname,
        '！ 今日はクリスマスですわ！ では……欲しいクリスマスプレゼントはありますの？ 今日ばかりは、このサンタクロースが太っ腹に叶えて差し上げますわ！',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、どこに隠していたのかサンタ帽を取り出し、耳に斜めに被せた',
      ]);
      await era.printAndWait(
        '両腕を広げ、いつものポーズ。だが口から出たのは「実験を始めましょう」ではなく、「Merry Christmas」だった',
      );
      era.printButton('「Merry Christmas」', 1);
      era.printButton('「クリスマスおめでとう」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'いいですわいいですわ、早く言ってくださいまし。欲しいクリスマスプレゼントは何ですの！',
      );
      era.printButton('「タキオンのキス」', 1);
      era.printButton('「有馬の勝利」', 2);
      const ret = await era.input();
      if (ret === 1) {
        era.println();
        await era.printAndWait('クリスマスの空気に当てられたのだろう');
        await era.printAndWait([
          'つい、',
          tachyon.get_colored_name(),
          ' に、担当とトレーナーの関係を明らかに超えた発言をしてしまった',
        ]);
        era.println();
        if (love >= 75) {
          await tachyon.say_and_wait('え………');
          era.println();
          await era.printAndWait('や……やっぱり、変だったか');
          await era.printAndWait('別のに変えよう');
          era.println();
          await tachyon.say_and_wait(
            'いいえ……ただ、普段からしていることをクリスマスの願いにするなんて、安すぎますわ',
          );
          await tachyon.say_and_wait(
            'せっかくのクリスマスですのよ……もっと特別な願いにしませんこと？',
          );
          await tachyon.say_and_wait('たとえば……');
          era.println();
          await era.printAndWait(
            'ゆっくりめくられる制服のスカート。その下は深紫のレース',
          );
          await era.printAndWait('含みのある眼差し。情欲と渇望で満ちている');
          await era.printAndWait('だが……');
          era.printButton('「明日……有馬……」', 1);
          await era.input();
          await era.printAndWait('キーワードしか口にできないのは');
          await era.printAndWait('理性が、その単語を支えるのが精一杯だからだ');
          await era.printAndWait('胸の内は、半分が恐れ、半分が期待');
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' が、聞き入れないのではないかという恐れ',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' が、聞き入れないのではないかという期待',
          ]);
          era.println();
          await tachyon.say_and_wait('……やめますわ');
          era.println();
          await era.printAndWait([tachyon.get_colored_name(), ' は手を止めた']);
          await era.printAndWait([
            you.get_colored_name(),
            ' の胸は、安堵と惜しみが半々だった',
          ]);
          era.println();
          await tachyon.say_and_wait(
            'よく考えれば、明日、実験成功の祝いとして取っておくのも悪くありませんわ',
          );
          era.println();
          await era.printAndWait('明日……');
          await era.printAndWait('期待すべきことが、また一つ増えたらしい');
        } else if (love >= 50) {
          await tachyon.say_and_wait('いいですわよ');
          era.println();
          await era.printAndWait('え……？');
          await era.printAndWait([
            you.get_colored_name(),
            ' が反応するより先に、',
            tachyon.get_colored_name(),
            ' が自ら寄りかかってきた',
          ]);
          await era.printAndWait('待て、何が起きている');
          era.println();
          await tachyon.say_and_wait('んちゅ……ちゅ……ちゅる……');
          era.println();
          await era.printAndWait('数分に及ぶ長いキス');
          await era.printAndWait(
            '短く、同時に長い時間。静かな聖夜に響くのは、唾液の混ざる音だけだった',
          );
          if (!era.get('exp:0:接吻次数')) {
            await era.printAndWait('ファーストキスが、深いディープキス');
            await era.printAndWait(
              'こんな奇蹟じみた夢は、聖夜にしか起きないのかもしれない',
            );
          }
          era.println();
          await tachyon.say_and_wait(
            'このクリスマスプレゼント、気に入りました？',
          );
          era.println();
          await era.printAndWait([
            '月下の',
            tachyon.sex,
            '。その瞳は、妖艶で危うい色を帯びている',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '安心なさい……軽重の見分けくらいは、つきますわ',
          );
          era.println();
          await era.printAndWait([
            '何しろ、明日が有馬記念という状況で、あれまでするのは相手にも自分にも最大の無礼だ',
          ]);
          era.println();
          await tachyon.say_and_wait([
            'ですから……ほんの少し、印をつけておくだけ。有馬が終わったあと……ふふ……そのとき、どう応えるか、よく考えておきなさいな',
          ]);
        } else if (relation > 225) {
          await tachyon.say_and_wait(
            'ん？ 奇妙な願いですわね……それだけですの？',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' はごく自然に、',
            you.get_colored_name(),
            ' の頬にキスをした',
          ]);
          era.println();
          await era.printAndWait('……あまり、感触がない？');
          era.println();
          await tachyon.say_and_wait(
            'まったく、せっかくのクリスマスの願いを、こんなことに使うなんて……理解できませんわ',
          );
          era.println();
          await era.printAndWait(
            '感触はともかく、そう言われると損をした気分になってくる',
          );
          await era.printAndWait('それなら……');
          era.println();
          await tachyon.say_and_wait([
            '！……ちょっと、ちょっとちょっと、',
            callname,
            '……何をしていますの',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は逆に、',
            tachyon.get_colored_name(),
            ' の腰を抱いた',
          ]);
          await era.printAndWait(
            '礼には礼を、というやつだ……多分。どうでもいい',
          );
          await era.printAndWait(
            'せっかくのクリスマスだ。主導権を握るのも、面白い経験ではないか',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はそっと、',
            tachyon.get_colored_name(),
            ' の額に口づけた',
          ]);
          era.printButton('「クリスマスおめでとう」', 1);
          await era.input();
          await tachyon.say_and_wait(
            '…………今日がクリスマスだから、不問にして差し上げますわ……あとで覚えておきなさい',
          );
          era.printButton('「そう言いながら、タキオンの顔は赤いぞ……」', 1);
          await era.input();
          await tachyon.say_and_wait('黙りなさい！');
        } else if (relation > 0) {
          await tachyon.say_and_wait('おや？ 本当に欲しいですの？');
          era.println();
          await era.printAndWait('————え？');
          era.println();
          await tachyon.say_and_wait(
            '聞いたことがありますわ。誓いのキス、とかいうものですのね',
          );
          era.println();
          await era.printAndWait('えええっ———！？');
          era.println();
          await tachyon.say_and_wait('それなら、いらっしゃい');
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は言い終えると、不意に ',
            you.get_colored_name(),
            ' へ近づいた',
          ]);
          era.println();
          await tachyon.say_and_wait('祭りの、大盤振る舞い、ということで……');
          era.println();
          await era.printAndWait([
            tachyon.sex,
            'はそっと、',
            you.get_colored_name(),
            ' の体へ身を寄せた',
          ]);
          await era.printAndWait('優しく———手の甲へ、軽く口づけた');
          era.println();
          await tachyon.say_and_wait('よし');
          era.println();
          await era.printAndWait('…………え？');
          era.println();
          await tachyon.say_and_wait([
            'ついでに言えば、誓いの内容は、これから先も永遠に私の ',
            callname,
            ' として実験を受けることですわよ？',
          ]);
          era.println();
          await era.printAndWait('待て！？');
          await era.printAndWait(
            '手の甲への社交キス一身が、釣り合っていないだろう！？',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の文句に答えず、くっくっと笑っているだけだ',
          ]);
          await era.printAndWait('本気なのか、冗談なのか、わからない');
        } else {
          await tachyon.say_and_wait(
            'ちょっと、クリスマスだからといって、その冗談は度が過ぎますわ',
          );
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' は危うい目で ',
            you.get_colored_name(),
            ' を牽制した',
          ]);
          await era.printAndWait([
            'だが、その見慣れた冷たい返しが、かえって ',
            you.get_colored_name(),
            ' を安心させた',
          ]);
        }
      } else {
        await era.printAndWait(['たぶん、明日が有馬記念だからだ']);
        await era.printAndWait([
          you.get_colored_name(),
          ' は頭が熱くなり、空気が読めないと言っていい言葉を口にしてしまった',
        ]);
        era.printButton('「有馬……」', 1);
        await era.input();
        await tachyon.say_and_wait('しーっ');
        era.println();
        await era.printAndWait([
          '言葉の途中で、',
          tachyon.get_colored_name(),
          ' の人差し指に押さえられた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '今日は奇蹟と幻想の夜ですわ。現実の話は、明日にしてくださいまし？',
        );
        era.println();
        await era.printAndWait([
          '月下の',
          tachyon.sex,
          'は、本物の天使のようだった',
        ]);
        era.printButton(
          '「タキオンにも、こんなロマンチックな面があるんだな」',
          1,
        );
        await era.input();
        await tachyon.say_and_wait(
          'おや？ はははっ！ そういえば、こんな言葉がありますわね。『科学者こそ、世界最大のロマンチストである』',
        );
        era.println();
        await era.printAndWait(
          'あのロマンチックで、感性的なものを信じていなければ',
        );
        await era.printAndWait(
          '退屈で反復的な研究に、人生を投じたりはしないだろう',
        );
        await era.printAndWait([
          tachyon.uma_sex_title,
          'の可能性を信じる',
          tachyon.sex,
          'と、',
          tachyon.get_colored_name(),
          ' の可能性を信じる ',
          you.get_colored_name(),
        ]);
        await era.printAndWait('最も無邪気な夢想家が、二人いるだけではないか');
        era.println();
        await tachyon.say_and_wait(
          'では、他に欲しいクリスマスプレゼントはありますの？',
        );
        era.printButton('「もういい」', 1);
        await era.input();
        await era.printAndWait('この夢こそ、最高の贈り物だ');
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は ',
          you.get_colored_name(),
          ' の意を察したように頷き、その考えを認めるかのようだった',
        ]);
        era.drawLine();
        await tachyon.say_and_wait(
          'では……あなたの欲しかった贈り物は済みましたわ',
        );
        era.println();
        await era.printAndWait('ん……？');
        await era.printAndWait([
          '「贈り物」の段が終わっても、',
          tachyon.get_colored_name(),
          ' はまだ遊び足りないらしく、続けて口を開いた',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '次は、サンタクロースが贈りたい贈り物の番ですわ',
        );
        era.println();
        await era.printAndWait([
          'その言葉を聞いた瞬間、',
          you.get_colored_name(),
          ' は神経を張りつめた',
        ]);
        await era.printAndWait('やっぱり……逃げられないのか');
        era.println();
        await tachyon.say_and_wait([
          callname,
          '、ここ数日、あなたも疲れていたでしょう',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' を気遣う前置きとともに、',
          tachyon.get_colored_name(),
          ' は一歩一歩、ベッド脇の ',
          you.get_colored_name(),
          ' へ近づいた',
        ]);
        await era.printAndWait([
          'じりじりと、',
          you.get_colored_name(),
          ' をベッドの隅へ追い詰めていく',
        ]);
        await era.printAndWait('今度は何だ？ 発光か？ 変色か？ 変形か？');
        era.println();
        await era.printAndWait(
          '恐怖とともにベッドへ這い上がる、赤い瞳の影が迫る',
        );
        await era.printAndWait([
          'やがて距離がほぼ零になったとき、',
          tachyon.sex,
          'は',
          tachyon.sex,
          'の本当の目的を見せた',
        ]);
        era.println();
        await tachyon.say_and_wait('————いい子、いい子');
        era.println();
        await era.printAndWait('後頭部の下は、絹のような感触');
        await era.printAndWait(['眼前は、', tachyon.sex, 'の艶やかな顔']);
        if (tachyon.sex_code - 1) {
          await era.printAndWait(
            '——そう言おうとして、二つの膨らみに視線を遮られた',
          );
        }
        await era.printAndWait('これは……膝枕？');
        era.println();
        await tachyon.say_and_wait(
          'まったく、何だと思いましたの？ 言ったはずですわ。今夜の私は、ただの普通のサンタクロース。それ以上でも、それ以下でもありません',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' はぼんやりと聞いていた。',
          tachyon.sex,
          'の声は、童謡を歌うように柔らかい',
        ]);
        era.println();
        await tachyon.say_and_wait('お疲れさま———それから、ありがとう');
        era.println();
        await era.printAndWait([
          '今夜まで、担当',
          tachyon.uma_sex_title,
          'の暴走に付き合い続けてきた',
        ]);
        await era.printAndWait(
          '明朝からは、有馬記念と、その先のURA決勝が待っている',
        );
        await era.printAndWait('だから少なくとも今、この夜だけは');
        await era.printAndWait('どうか、よい夢を');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_a: (() => {
    const title = '最終実験、準備完了';
    /**
     * シニア級有馬記念のレース前、Plan A 限定
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     */
    const f = async (tachyon, coffee, you, callname, call_25) => {
      await era.printAndWait('その日が来ても、すべては意外なほど穏やかだった');
      await era.printAndWait([
        '前夜の安眠のおかげか、今日は格別に調子のいい ',
        you.get_colored_name(),
        ' は、朝早く起きて ',
        tachyon.get_colored_name(),
        ' に紅茶を淹れた',
      ]);
      await era.printAndWait('陽光が室内に落ち、埃が光の中で舞う');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は実験をしていない。いつものように朝刊を読んでいるだけだ',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も光を放つわけではなく、静かに紅茶を味わっている',
      ]);
      await era.printAndWait(
        '二人は研究室で、嵐の前の最後の静けさを味わっていた',
      );
      era.println();
      await you.say_as_passer_by_and_wait('記者A', [
        'タキオン',
        tachyon.adult_sex_title,
        '、今回の有馬記念で特に意識している相手はいますか',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '……ええ、数日前に現れましたわ。',
        coffee.get_colored_name(),
        '、',
        call_25,
        '……おそらく、ライバルと呼べる存在ですわね',
      ]);
      await you.say_as_passer_by_and_wait('記者A', 'おそらく……？');
      await tachyon.say_and_wait('ええ、だいたいそういうことですわ');
      era.println();
      await era.printAndWait([
        'コースへ向かう前、',
        you.get_colored_name(),
        ' はふと、先日の取材で ',
        tachyon.get_colored_name(),
        ' が言っていた言葉を思い出した',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、物理学の二大暗雲、聞いたことがありますの？',
      ]);
      await tachyon.say_and_wait('ない？ 大丈夫ですわ。ただの話の枕ですもの');
      await tachyon.say_and_wait(
        'ケルヴィン卿はこう言ったとされていますわ。物理学の大厦はすでに成った。ただ、空には小さな雲が二つ残っている、と',
      );
      await tachyon.say_and_wait(
        'ところが誰も予想しなかった。その小さな雲二つが、量子力学と相対性理論という近代物理の双璧を引き出したのです……',
      );
      await tachyon.say_and_wait([
        'もちろん、この逸話の八割は後世の附会でしょう。ですが……言いたいのは、',
        call_25,
        ' こそが、その雲だということですわ',
      ]);
      await tachyon.say_and_wait([
        '私の理論では、',
        call_25,
        ' は最後に残ったピース……では、その先は？',
      ]);
      await tachyon.say_and_wait(
        'この雲は、相対性理論ほどの衝撃を私にくれますの？ 見せて……くださいまし',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_end_a: (() => {
    const title = '限界を超えて';
    /**
     * シニア級有馬記念終了、Plan A 限定
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {boolean} coffee_win_kiku_sho マンハッタンカフェが菊花賞を勝ったか
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      coffee_win_kiku_sho,
    ) => {
      await tachyon.say_and_wait('はあっ……はあっ……');
      era.println();
      await tachyon.print_and_wait('足取りが重い。鈍い');
      await tachyon.print_and_wait('理由は……はっきりしている');
      await tachyon.print_and_wait('後ろの猟犬が、強い圧迫感を放っている');
      era.println();
      await tachyon.print_and_wait([
        call_25,
        ' が走るとき、前後の',
        tachyon.uma_sex_title,
        'が例外なく感じる、あの圧倒的な圧力',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        'の友人ごと、自分の科学では説明できないものだ',
      ]);
      era.println();
      await tachyon.say_and_wait('……来ますわ！');
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' が後ろに迫る',
      ]);
      await tachyon.print_and_wait([
        '後頸の産毛が逆立つ。',
        tachyon.sex,
        'の吐息が届きそうだ',
      ]);
      await tachyon.print_and_wait('今だ。ここで');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' が持つのは、次元を超えた速度',
      ]);
      await tachyon.print_and_wait([
        'ならば ',
        coffee.get_colored_name(),
        ' は、次元を横断する逆説である',
      ]);
      await tachyon.print_and_wait(
        'どこから現れるとも知れない。鏡の世界から抜けてきた異形の姿',
      );
      era.println();
      await tachyon.print_and_wait([
        'その漆黒の幻影が、一瞬で ',
        tachyon.get_colored_name(),
        ' を超えた',
      ]);
      era.drawLine();
      await coffee.say_and_wait('……ごめん');
      era.println();
      await coffee.print_and_wait(
        '自分の夢を叶えるために、他人の夢を蹴り落とす',
      );
      await coffee.print_and_wait('まして相手は……');
      await coffee.print_and_wait('何だろう');
      await coffee.print_and_wait(
        '友人？ 宿敵？ 生まれついての相克？ 研究者と実験体？',
      );
      await coffee.print_and_wait([
        '最後の選択肢を頭から振り落として、',
        coffee.get_colored_name(),
        ' はさらに前へ走る',
      ]);
      await coffee.print_and_wait(
        '夢へ続く道では、どれほど深い感情でも、せいぜいこんな一言の謝罪にしかならない',
      );
      era.println();
      await coffee.print_and_wait('ここを越えれば、次の目標は「あの姿」……！');
      era.println();
      await coffee.print_and_wait([
        'だが、',
        coffee.sex,
        'は一つの可能性を読み落としていた',
      ]);
      era.println();
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' に、まだ余力がある可能性',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' が、最初から全力を出していなかった可能性',
      ]);
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' が、待っていたのがまさにこの瞬間である可能性',
      ]);
      era.drawLine();
      await tachyon.print_and_wait([
        '前方の',
        tachyon.uma_sex_title,
        'は……先頭を走る逃げの',
        tachyon.uma_sex_title,
        'と、',
        coffee.get_colored_name(),
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' に最も合う位置。研究室にいるときと同じくらい、快適な位置',
      ]);
      await tachyon.print_and_wait('今だ。ここで');
      era.println();
      await tachyon.print_and_wait('時間が止まった。世界が変わった');
      era.println();
      await tachyon.print_and_wait('眼前は、果てしなく広い黒い空間');
      await tachyon.print_and_wait('数式で埋め尽くされた数理の式');
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' を超えたい——変数・宿敵、追加済み',
      ]);
      await tachyon.print_and_wait(
        '自分に最も合う環境——変数・位置取り、追加済み',
      );
      await tachyon.print_and_wait('鍛錬と天賦の結合——変数・速度、追加済み');
      await tachyon.print_and_wait('それから……');
      era.println();
      await tachyon.print_and_wait(
        '後ろから、わずかな温もりと紅茶の香りがした',
      );
      await tachyon.print_and_wait([
        'だが ',
        tachyon.get_colored_name(),
        ' は振り返らない',
      ]);
      await tachyon.print_and_wait(
        '振り返る必要はない。それは相手への不信だから',
      );
      await tachyon.print_and_wait([
        '前方を見て、そして……待つ。',
        you.sex,
        'は必ず追いつき、自分と並走すると信じる',
      ]);
      era.println();
      await tachyon.print_and_wait([
        '湯気の立つ紅茶が、',
        tachyon.get_colored_name(),
        ' の前に置かれた',
      ]);
      await tachyon.print_and_wait('日常の研究室そのままだ');
      await tachyon.print_and_wait('すべてが、これほど当然のこととして');
      era.println();
      await tachyon.print_and_wait([
        you.sex,
        'は当然のように ',
        tachyon.get_colored_name(),
        ' の傍にいる',
      ]);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は当然のように、眼前の難題を解く',
      ]);
      era.println();
      await tachyon.say_and_wait('最後の解は、これですわ……');
      era.println();
      await tachyon.print_and_wait('黒板のような空間に、U=MA2 の式を描く');
      await tachyon.print_and_wait('刹那、闇の空間のすべての数式が光を放った');
      await tachyon.print_and_wait([
        'これが、',
        tachyon.get_colored_name(),
        ' の最終解',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        tachyon.get_colored_name(),
        ' が来た！',
        tachyon.get_colored_name(),
        ' が追ってきた！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        '先頭の逃げの',
        tachyon.uma_sex_title,
        'はすでに力尽きた！ 最後の激戦は、やはりこの二人だ！',
      ]);
      await you.say_as_passer_by_and_wait('実況', [
        tachyon.get_colored_name(),
        '！',
        coffee.get_colored_name(),
        '！ ほぼ並んで、最後の直線へ！',
      ]);
      if (coffee_win_kiku_sho) {
        await you.say_as_passer_by_and_wait('実況', [
          '『最強の',
          tachyon.uma_sex_title,
          '』と『最速の',
          tachyon.uma_sex_title,
          '』、ここで決着だ！',
        ]);
      }
      await tachyon.print_and_wait('ああ');
      await tachyon.print_and_wait('レースなのに');
      await tachyon.print_and_wait('これほど……快い');
      era.println();
      await tachyon.print_and_wait('自分が認めたライバルと');
      await tachyon.print_and_wait('自分の全力を出す');
      await tachyon.print_and_wait('だが……まだ足りない');
      era.printButton('「限界を超えろ！」', 1);
      await era.input();
      await tachyon.print_and_wait('何度かの取材を経て');
      await tachyon.print_and_wait([
        '限界を超えろは、すでに ',
        tachyon.get_colored_name(),
        ' のファンの口で、「',
        tachyon.get_colored_name(),
        ' 最強」、「',
        tachyon.get_colored_name(),
        ' 必勝」を超える合言葉になっている',
      ]);
      await tachyon.print_and_wait([
        'だが、どれほど雑多な声援でも、',
        you.sex,
        'の言葉の隣では、ぼやけて聞こえる',
      ]);
      era.println();
      await tachyon.print_and_wait('ええ、そうですわ');
      await tachyon.print_and_wait('今ですわ');
      era.println();
      await tachyon.print_and_wait('領域のさらに上にある限界');
      await tachyon.print_and_wait('限界を超えましょう');
      await tachyon.print_and_wait([tachyon.uma_sex_title, 'の限界を超える']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' の限界を超える',
      ]);
      await tachyon.print_and_wait('すべてを超えて、その先へ');
      await tachyon.print_and_wait('もっと遠い彼方へ—————手を伸ばす');
      await you.say_as_passer_by_and_wait('実況', [
        'ゴール————イン！ レコードだ、レコード更新！ 年間の総決算！ ',
        tachyon.get_colored_name(),
        '！ 記録を破り、今日の中山を制したのは ',
        tachyon.get_colored_name(),
        '！',
      ]);
      era.println();
      await tachyon.print_and_wait('終わった');
      await tachyon.print_and_wait('終わった……の？');
      era.println();
      await tachyon.print_and_wait('終わった、はずですわ');
      await tachyon.print_and_wait('着順掲示板に、成績が出ているのですから');
      await tachyon.print_and_wait(
        'なのに体の熱は、レースが終わったようには冷えない',
      );
      await tachyon.print_and_wait(
        'アドレナリンが沸騰したまま、尽きずに湧き続けている',
      );
      era.println();
      await you.say_as_passer_by_and_wait('観客A', 'やったぞ！');
      era.println();
      await tachyon.print_and_wait(
        '突然の叫びで、自分は跳ねて、同時に現実へ戻った',
      );
      await you.say_as_passer_by_and_wait(
        '観客B',
        '本当だ、本当にレコードを破った！',
      );
      await you.say_as_passer_by_and_wait('観客C', 'よくやった！');
      era.println();
      await tachyon.print_and_wait('会場全体が歓声で揺れている');
      await tachyon.print_and_wait(
        '……勝った自分より、よほど興奮しているではありませんか',
      );
      era.println();
      await tachyon.print_and_wait('応えるべき、でしょう');
      await tachyon.print_and_wait('社会的な表現くらいは、すべきですわ');
      await tachyon.print_and_wait(
        '……いいえ、これは純粋に、支援してくれた人への感謝',
      );
      await tachyon.print_and_wait('見せるべきですわ');
      await tachyon.print_and_wait('ですが……');
      era.println();
      await tachyon.print_and_wait('じたばたした末');
      await tachyon.print_and_wait('かろうじて手を上げるのが精一杯');
      await tachyon.print_and_wait('まだ夢の中にいるみたいですわ');
      era.println();
      await tachyon.print_and_wait('ただ');
      await tachyon.print_and_wait('それだけで、津波のような歓声が起きた');
      era.drawLine();
      era.printButton('「タキオン……あれは……！」', 1);
      await era.input();
      await era.printAndWait('断定できない');
      await era.printAndWait('見たことのないものに、誰も安易な結論は出せない');
      await era.printAndWait(
        'もし本当なら、これは誰も辿り着いたことのない領域————',
      );
      era.println();
      await era.printAndWait('…………');
      era.printButton('「……タキオン？」', 1);
      await era.input();
      await era.printAndWait('夢から覚めていないかのようだ');
      await era.printAndWait([
        'うまく言えないが、眼前の ',
        tachyon.get_colored_name(),
        ' は、夢遊病者のように見える',
      ]);
      await era.printAndWait(['この状況、', tachyon.sex, 'を起こすべきか？']);
      await era.printAndWait('だが、どうすればいい');
      await era.printAndWait(
        '自分ですら、眼前のすべてが夢ではないかと疑っている',
      );
      await era.printAndWait(
        '長く続いた三年が、今日、最も完璧な実験成果で幕を閉じた',
      );
      era.println();
      await tachyon.say_and_wait('…………ふふ');
      await tachyon.say_and_wait('はははははははっ！');
      era.println();
      await era.printAndWait('一秒前の笑いは、ようやく我に返った安堵を誘った');
      await era.printAndWait(
        '次の一秒の狂笑は、頭がおかしくなったのではないかと疑わせる',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' が心配して近づこうとした、そのとき……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        '見ましたの？……見たはずですわ！',
        callname,
        '！',
      ]);
      await tachyon.say_and_wait(
        'これが、実験の成果……見せて差し上げましたわ！ これが、限界の先の世界ですわ！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は、去年の十一月に ',
        tachyon.get_colored_name(),
        ' が言った言葉を思い出した',
      ]);
      era.println();
      await tachyon.used_to_say_and_wait(
        '報酬として、もっと広い世界を見せて差し上げますわ',
      );
      era.println();
      await era.printAndWait([tachyon.sex, 'は、本当にやってのけた']);
      await era.printAndWait('どのレースも、目標へ一歩ずつ近づいていた');
      await era.printAndWait('そして今');
      await era.printAndWait('二人は本当に、より広い、限界の先の世界を見た');
      era.printButton('「ああ……俺たちは、本当にやり遂げた」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' が初めて見た。この世には、',
        tachyon.get_colored_name(),
        ' の走りより眩しいものがある',
      ]);
      await era.printAndWait([
        'それが、今この瞬間の ',
        tachyon.get_colored_name(),
        ' の笑顔だった',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ending_a: (() => {
    const title = '祝勝';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 アグネスタキオンのマンハッタンカフェへの呼び方
     * @param {PrintedSpan} callname_25 マンハッタンカフェのプレイヤーへの呼び方
     * @param {PrintedSpan} c_call_t マンハッタンカフェのアグネスタキオンへの呼び方
     * @param {number} relation アグネスタキオンのプレイヤーへの好感度
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      call_25,
      callname_25,
      c_call_t,
      relation,
      love,
    ) => {
      await era.printAndWait('有馬の翌日');
      await era.printAndWait([
        '目的を果たして気が緩んだのか、この三年で初めて、',
        you.get_colored_name(),
        ' は遅刻した',
      ]);
      await era.printAndWait('まあ、二人の目標はもう叶っている');
      await era.printAndWait('あとは気楽にURA決勝を迎えればいい');
      era.println();
      if (love < 50) {
        await tachyon.say_and_wait(
          '何をしていますの？ 遅すぎますわ。実験はとっくに始まっていますのよ',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' が ',
          tachyon.get_colored_name(),
          ' の研究室へ着くと、そこにいたのは相変わらず研究に没頭する ',
          tachyon.get_colored_name(),
          ' だった',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '昨日はレースで限界超越の可能性を示しただけ。次の目標は、定常化ですわ！',
        );
        await tachyon.say_and_wait(
          '一度の突破は偶然、二度はまぐれ。定常として維持できて、初めて本物の突破ですわ！',
        );
        await tachyon.say_and_wait(
          '早く実験着に着替えて手伝ってくださいまし！',
        );
        await coffee.say_and_wait([c_call_t, '……うるさい']);
        await tachyon.say_and_wait([
          'おやおや、昨日の有馬記念で私に負けた ',
          call_25,
          ' ではありませんの？',
        ]);
        await tachyon.say_and_wait(
          '言いたいことがあれば、お聞きしますわ。敗者の遠吠えを受けるのも、勝者の————',
        );
        await coffee.say_and_wait('ちっ……');
        await tachyon.say_and_wait(
          'うわっ！ 私の実験資料が————燃えて………燃えていない？',
        );
        era.println();
        await era.printAndWait([
          '一瞬、',
          tachyon.get_colored_name(),
          ' の実験資料が燃え上がった。',
          tachyon.get_colored_name(),
          ' が慌てて救い出そうとした瞬間、炎は消えた',
        ]);
        era.println();
        await coffee.say_and_wait([
          '……今回だけは認める……昨日の ',
          c_call_t,
          ' は、たしかに、よく走っていた……',
        ]);
        await coffee.say_and_wait(
          '悔しいけど……つい、あなたと『友達』を重ねてしまった……',
        );
        await tachyon.say_and_wait([
          '友達？ おや？ それは……興味深いですわ！',
          call_25,
          '、ぜひ詳しく聞かせてくださいまし！',
        ]);
        await tachyon.say_and_wait('うるさいですわ……どいて……');
        era.println();
        await era.printAndWait([
          '騒がしい二人を見ながら、',
          you.get_colored_name(),
          ' は実験着に着替え、苦笑して、この先も続く日常へ加わった',
        ]);
      } else if (love > 50) {
        await era.printAndWait([
          'ところが、',
          you.get_colored_name(),
          ' が研究室の扉の前まで来ると',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、中の会話を聞いた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          call_25,
          '……どうしましょう……',
          callname,
          ' は',
          you.sex,
          '、本当にもう来ないのでは……',
        ]);
        await coffee.say_and_wait('……私の知ったことではない');
        await tachyon.say_and_wait([
          '昨日、目標は達したと言いましたわ……',
          you.sex,
          '、それで来なくなるのでは……',
        ]);
        await tachyon.say_and_wait([
          'そもそも、三年分の絆など私の妄想で、',
          you.sex,
          'は最初から最後まで何も……何も……',
        ]);
        await coffee.say_and_wait('……本当にそうなら、どうするの');
        await tachyon.say_and_wait([
          '……やはり、薬で',
          you.sex,
          'を私から離れられなくするしかありませんわ。よく考えれば不公平ですもの？',
        ]);
        await tachyon.say_and_wait([
          '私だけが',
          you.sex,
          'から離れられないのに、',
          you.sex,
          'は私がいなくても平気で生きていける。依存性の高い薬を早く作って、',
          you.sex,
          'を二度と私から離れられなくしないと……',
        ]);
        await tachyon.say_and_wait(
          'あるいは小説にあるような蠱毒……私の作った解毒剤を定期的に飲まなければ発症する、とか……',
        );
        await coffee.say_and_wait('……重い');
        const coffee_check =
          era.get('cflag:25:招募状态') === recruit_flags.yes &&
          era.get('love:25') >= 50;
        if (coffee_check) {
          await coffee.say_and_wait([
            'ただし警告する。私の ',
            callname_25,
            ' に、そういうことはしないで',
          ]);
        }
        era.println();
        await era.printAndWait([
          'それを聞いて背筋が冷えた ',
          you.get_colored_name(),
          ' は、急いで扉を開けた',
        ]);

        era.printButton('「すまない！ 寝坊した！」', 1);
        await era.input();
        await tachyon.say_and_wait([
          callname,
          '！………何をしていますの？ 遅すぎますわ。実験はとっくに始まっていますのよ！',
        ]);
        era.println();
        await era.printAndWait([
          '厳しい顔を作っているわりに、',
          tachyon.get_colored_name(),
          ' の後ろで尻尾が狂ったように揺れて、まったく収まらない',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'も気づいたらしく何度か押さえようとするが、止まらない。仕方なく顔を戻し、何事もなかったように説教を続ける',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '昨日はレースで限界超越の可能性を示しただけ。次の目標は、定常化ですわ！',
        );
        await tachyon.say_and_wait(
          '一度の突破は偶然、二度はまぐれ。定常として維持できて、初めて本物の突破ですわ！',
        );
        era.println();
        await tachyon.say_and_wait(
          '……ですから、早く実験着に着替えて手伝ってくださいまし！……いいですわね？',
        );
        era.println();
        await era.printAndWait([
          '厳しく見せようとして、それでも不安げに ',
          you.get_colored_name(),
          ' を見る ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は堪らず前へ出て、',
          tachyon.sex,
          'を抱きしめた',
        ]);
        era.println();
        await tachyon.say_and_wait(['！', callname, '……！']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' と',
          tachyon.sex,
          'の実験動物は、三年のあとにも、二つ目、三つ目の三年を迎える。永久に……',
        ]);
        era.setToBottom();
        await era.waitAnyKey();
        if (coffee_check) {
          await coffee.say_and_wait([
            '……調子に乗らないで。',
            callname_25,
            ' を返して',
          ]);
          era.println();
          await era.printAndWait([
            '二人に奪い合われながら、',
            you.get_colored_name(),
            ' は苦笑して、騒がしい日常へ加わった',
          ]);
        } else {
          await coffee.say_and_wait('……そのイチャイチャ、私の前でしないで');
          era.println();
          await era.printAndWait(
            '部屋のもう一人、ラブラブ攻撃を耐えている同居人のことを、忘れていた',
          );
        }
      }
    };
    f.title = title;
    return f;
  })(),
  hot_spring_a: (() => {
    const title = 'シュレーディンガーの超光速粒子';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     * @param {number} love アグネスタキオンのプレイヤーへの恋慕値
     */
    const f = async (tachyon, coffee, you, callname, love) => {
      await tachyon.say_and_wait('そういえば、まだこれがありましたわ……');
      await tachyon.say_and_wait([
        '無駄にするのも惜しいですし、どうです、',
        callname,
        '？ 一緒に行きませんこと？',
      ]);
      era.println();
      await era.printAndWait('たまたま研究室を片付けていたとき');
      await era.printAndWait(['隅に隠されていた封筒を見つけた']);
      if (love >= 75) {
        await era.printAndWait('ん……？');
        await era.printAndWait('なぜか、違和感がひどく重い');
        await era.printAndWait([
          you.get_colored_name(),
          ' はよく見て、すぐに綻びを見つけた',
        ]);
        await era.printAndWait(
          '大掃除で「見つかった」はずなのに、封筒に皺ひとつない。むしろ大切にしまわれていた気配すらある',
        );
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' が「見つけた」ものだと考えると、',
          you.get_colored_name(),
          ' はだいたい真相を察した',
        ]);
        era.println();
        await tachyon.say_and_wait(['ん？', callname, '？ どうかしましたの？']);
        era.println();
        await era.printAndWait('……言わないでおこう');
        await era.printAndWait([
          '怒らせるのはまだいい。問題は、',
          tachyon.sex,
          'が怒ったあと、夜の自分が絶対に無事では済まないことだ',
        ]);
      }
      era.println();
      await era.printAndWait([
        '着いた温泉宿は、商店街の企画としてはかなり豪華だった',
      ]);
      await era.printAndWait(
        '貸切の湯船、和風の標準客室、さらには懐石料理まで',
      );
      await era.printAndWait(
        'というより……普通の商店街の抽選が、こんな特賞を用意するだろうか',
      );
      await era.printAndWait([
        'まさか……最初から誰かが仕組んで、この機会に',
        tachyon.uma_sex_title,
        'とトレーナーへ渡した、というだけでは？',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は湯船に浸かり、際限のない妄想を巡らせていた',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '？ 入りますわよ～～']);
      era.println();
      await era.printAndWait([
        '突然、担当',
        tachyon.uma_sex_title,
        'の戸の外からの呼びかけが、',
        you.get_colored_name(),
        ' の意識を引き戻した',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は反射でどうぞと答えてから、今自分が湯に浸かっていることを思い出した',
      ]);
      await era.printAndWait('今から隠すには、もう遅い—————');
      await era.printAndWait([
        you.get_colored_name(),
        ' は慌てて体を湯の中へ沈め、湯気で見えてはいけない部分を少しでも隠そうとした',
      ]);
      if (era.get('exp:32:性爱次数') > era.get('exp:32:睡奸次数')) {
        await tachyon.say_and_wait([
          callname,
          '—————どうしてそんなに恥ずかしがって縮こまっていますの？ もう何度も見ていますのに',
        ]);
      } else {
        await tachyon.say_and_wait([
          callname,
          '—————どうしてそんなに恥ずかしがって縮こまっていますの？ 実験のときは全部見えていますのに',
        ]);
      }
      era.println();
      await era.printAndWait([
        'そうは言っても、',
        tachyon.get_colored_name(),
        ' の声にも、少し遠慮がある',
      ]);
      await era.printAndWait([
        '裸の ',
        you.get_colored_name(),
        ' と違い、',
        tachyon.get_colored_name(),
        ' はバスタオルを一枚巻いている',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'は勝手に湯へ入り、',
        you.get_colored_name(),
        ' のほうへ寄ってきた',
      ]);
      await era.printAndWait([
        'それから ',
        you.get_colored_name(),
        ' の隣に座り、緩んだ顔で寄りかかった',
      ]);
      era.println();
      await tachyon.say_and_wait('やっと……URAも終わりましたわね');
      await tachyon.say_and_wait('たまには、こうして緩むのも悪くありませんわ');
      era.println();
      await era.printAndWait([tachyon.sex, 'は満足げに息を吐いた']);
      await era.printAndWait(
        '大仕事を終えた会社員が、宴でビールを一気に飲んで漏らす、あの吐息に似ている',
      );
      await era.printAndWait(
        '解放感か、達成感か。あるいは……自分でも理由のわからない、薄い喪失感か',
      );
      await era.printAndWait([
        'この三年を振り返れば、',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' は、たしかに多くのことを成し遂げた',
      ]);
      await era.printAndWait([
        '三冠への道、感情の研究課題、',
        coffee.get_colored_name(),
        ' との激戦……',
      ]);
      await era.printAndWait(
        'それ以外にも、語るに足ることも、語るまでもないことも',
      );
      await era.printAndWait([
        '三年の重みに、',
        you.get_colored_name(),
        ' もつい、',
        tachyon.get_colored_name(),
        ' と同じように息を吐いた',
      ]);
      era.println();
      await era.printAndWait([
        'そのあとしばらく、二人は何も言わず、ただ寄り添っていた',
      ]);
      await era.printAndWait([
        'このときになって ',
        you.get_colored_name(),
        ' は気づく。隣の',
        tachyon.sex,
        'の体が、こんなにも小さい',
      ]);
      await era.printAndWait([
        '今は天才',
        tachyon.uma_sex_title,
        'でも、狂った科学者でもない',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'は、ただの普通の',
        tachyon.teen_sex_title,
        'にすぎない',
      ]);
      era.println();
      await era.printAndWait('湯気が立つ温泉で、わずかな静けさを味わう二人');
      await era.printAndWait([
        'トラブルメーカーの ',
        tachyon.get_colored_name(),
        ' と、それに悪乗りする担当トレーナーを知る者には、信じがたい光景だろう',
      ]);
      await era.printAndWait('だが今、二人はまさにそこに沈んでいる');
      era.drawLine();
      await tachyon.say_and_wait([
        callname,
        '、シュレーディンガーの猫は、ご存知ですの？',
      ]);
      era.println();
      await era.printAndWait([
        '突然、',
        tachyon.get_colored_name(),
        ' がその沈黙を破った',
      ]);
      await era.printAndWait('シュレーディンガーの猫……？');
      era.printButton('「知らない」', 1);
      era.printButton('「知っている」', 2);
      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          'シュレーディンガーの猫は、もともとシュレーディンガーが量子力学を反論するために出した思考実験ですわ',
        );
        await tachyon.say_and_wait(
          '皮肉なことに、今では量子力学を説明する最良の象徴になっています',
        );
        await tachyon.say_and_wait(
          '簡単に言えば、放射性物質と、放射線で作動する毒ガスのスイッチと、猫を、外界から完全に隔てた箱へ入れる',
        );
        await tachyon.say_and_wait(
          '放射性物質がいつ崩壊して放射線を出すかは、誰にもわかりません',
        );
        await tachyon.say_and_wait(
          'つまり、スイッチが落ちるかどうかもわからない。箱を開けるまで、猫は死と生の重ね合わせにありますわ',
        );
      } else {
        await tachyon.say_and_wait(
          'この実験については、今も各学派がそれぞれの解釈を持っていますわ。ですが、どれも根は同じ……この実験で最も重要なものは、何だかわかりますの？',
        );
      }
      era.printButton('「……猫？」', 1);
      era.printButton('「……毒ガス？」', 2);
      await era.input();
      await tachyon.say_and_wait(
        'はは、たしかに、それがなければ実験は成立しませんわ……ですが、どちらも違いますのよ',
      );
      era.println();
      await era.printAndWait([
        '突然、',
        tachyon.get_colored_name(),
        ' が湯から立ち上がり、',
        you.get_colored_name(),
        ' に向かい、目と目を合わせた',
      ]);
      await era.printAndWait(
        'ワイン色の瞳は、長く熟した蜜の泉のように、人を酔わせる',
      );
      await era.printAndWait([
        'ふと ',
        you.get_colored_name(),
        ' は思う。こんな',
        tachyon.sex,
        'も、かつては自分の目を狂った目だと評した',
      ]);
      await era.printAndWait([
        'では今、',
        tachyon.sex,
        'の瞳に映っているのは、何だろう',
      ]);
      era.println();
      await tachyon.say_and_wait('答えは—————『観測者』ですわ');
      await tachyon.say_and_wait(
        '猫が死んでいようと生きていようと、それはただの『可能』。限りなく近づいても、定まらない可能性です',
      );
      await tachyon.say_and_wait(
        '観測が加わって初めて、可能性は定まり、生死どちらであれ結果になりますわ',
      );
      era.println();
      await era.printAndWait('つまり');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は手を伸ばす。',
        you.get_colored_name(),
        ' の目に触れようとして、それでも震え、傷つけまいとしている',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は自ら',
        tachyon.sex,
        'の手を取り、ゆっくり、しかし確かに、自分の両目へ近づけた',
      ]);
      era.println();
      await tachyon.say_and_wait('あなたが、私の観測者ですわ');
      await tachyon.say_and_wait([
        tachyon.get_colored_name(),
        ' の可能性を、固定した人',
      ]);
      await tachyon.say_and_wait([
        '今この瞬間の ',
        tachyon.get_colored_name(),
        ' を、決めた人',
      ]);
      await tachyon.say_and_wait(
        'この実験では、あなたが研究者。私は、あなたが箱へ入れた猫にすぎませんわ',
      );
      era.println();
      await era.printAndWait('そっと、触れた');
      await era.printAndWait('特別な感触はない。眼球を触れられた刺痛だけだ');
      await era.printAndWait([
        'だが ',
        tachyon.get_colored_name(),
        ' は、それで足りたように、自ら手を引いた',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'これからの実験……どうぞ、よろしくお願いいたしますわ',
      );
      await tachyon.say_and_wait('私の、親愛なる教授くん');
      await tachyon.say_and_wait(
        '上がったら、用意した贈り物を忘れないでくださいまし',
      );
      era.println();
      await era.printAndWait([
        '言い終えると、',
        tachyon.get_colored_name(),
        ' は先に岸へ上がった',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'そういえば、今日の薬は冷たい牛乳に入れてありますわ。忘れずに飲んでくださいまし',
      );
      era.println();
      await era.printAndWait(
        '…………せめて、冷たい牛乳を用意してくれる。これも成長、なのか？',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は、依存を刷り込まれた人間に近い考えを巡らせながら、もうしばらく湯に浸かることにした',
      ]);
    };
    f.title = title;
    return f;
  })(),
  palace_a: (() => {
    const title = '限界の彼方';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンのプレイヤーへの呼び方
     */
    const f = async (tachyon, coffee, you, callname) => {
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' との三年が、終わった',
      ]);
      era.println();
      await era.printAndWait([
        '卒業式のあと、',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'のこれからを尋ねたこともあった',
      ]);
      await tachyon.say_and_wait(
        '学生として最も大切な本分は、学ぶことではありませんの？',
      );
      await era.printAndWait([
        tachyon.sex,
        'は笑って、',
        tachyon.sex,
        'らしくない一言だけを返した',
      ]);
      era.println();
      await era.printAndWait('だが、今度は本気らしい');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、その年の大学入試の受験者名簿に',
        tachyon.sex,
        'の名を見た',
      ]);
      await era.printAndWait([
        '信じがたいが、',
        tachyon.sex,
        'は進学を選んだらしい',
      ]);
      era.println();
      await era.printAndWait('今日は、各大学の入学式だ');
      await era.printAndWait([
        you.get_colored_name(),
        ' は数ヶ月前、合格発表の日を思い出す',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の合格を聞いた ',
        you.get_colored_name(),
        ' の胸中は、うまく言葉にできなかった',
      ]);
      await era.printAndWait([
        '可能性に満ちた',
        tachyon.sex,
        'も、結局は凡人の道を歩くのか',
      ]);
      await era.printAndWait(
        '普通の人と同じように進学し、普通の人と同じように卒業し、普通の人と同じように就職する',
      );
      await era.printAndWait([
        'そしていつか、',
        tachyon.sex,
        'も……自分と同じ、退屈な大人になるのだろうか',
      ]);
      await era.printAndWait([
        '二人だけの祝賀会で、',
        you.get_colored_name(),
        ' が',
        tachyon.sex,
        'に何を言い、',
        tachyon.sex,
        'が ',
        you.get_colored_name(),
        ' に何を言ったのか、もうきれいさっぱり忘れている',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'と別れた自分も、元の生活へ戻り、次の担当',
        tachyon.uma_sex_title,
        'を迎え、',
        tachyon.sex,
        'の夢を支える',
      ]);
      await era.printAndWait([
        'だが',
        tachyon.sex,
        'のように、',
        you.get_colored_name(),
        ' の目を灼く、光のような',
        tachyon.uma_sex_title,
        '……もう二度と会えないだろう',
      ]);
      await era.printAndWait([
        '気づくと、',
        you.get_colored_name(),
        ' は無意識に、かつての理科準備室、のちに研究室になり、今は当然また理科準備室へ戻るはずの空き教室の前に立っていた',
      ]);
      era.println();
      await you.say_and_wait('来たついでだ。片付けておこう');
      await era.printAndWait([
        you.get_colored_name(),
        ' が扉を開けると、いつものように実験する ',
        tachyon.get_colored_name(),
        ' と、自分の隅でコーヒーを飲む ',
        coffee.get_colored_name(),
        ' がいる……そんな妄想は、もちろん存在しない',
      ]);
      await era.printAndWait([
        '卒業式のあと誰も入っていない教室は、最後に使ったときのまま残っていた',
      ]);
      await era.printAndWait([
        '実験机の空の試験管、中の液体が乾いたフラスコ、机の紅茶の染み。歳月の跡が、',
        you.get_colored_name(),
        ' の三年の記憶を呼び起こす',
      ]);
      era.println();
      await tachyon.say_and_wait(['……ああ、', callname]);
      era.println();
      await era.printAndWait([
        '後ろから聞き慣れた呼びかけがして、',
        you.get_colored_name(),
        ' は振り返った',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が朝に晩に想い続けていた',
        tachyon.sex,
        'だった',
      ]);
      era.println();
      await tachyon.say_and_wait('来たなら、荷物運びを手伝ってくださいまし');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を見た瞬間、いつもどおりの笑顔を見せた。明るすぎて、',
        you.get_colored_name(),
        ' は何も変わっていないような錯覚を覚える',
      ]);
      await era.printAndWait(
        'そうだ。卒業した以上、ここの実験器具は当然、運び出す必要がある',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は何も言わず、黙って ',
        tachyon.get_colored_name(),
        ' の後ろについていった',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は思っていた。',
        tachyon.sex,
        'は自宅か、今の学校か、あるいは……廃棄か',
      ]);
      await era.printAndWait([
        'ところが',
        tachyon.sex,
        'は、器具をすべて隣の理科準備室へ運んだ',
      ]);
      era.println();
      await tachyon.say_and_wait('よし、これで終わりですわ……');
      era.println();
      await era.printAndWait([
        '最後の',
        tachyon.sex,
        'は、おそらく二度と戻らない教室の前で、寂しげな笑みを浮かべた',
      ]);
      await era.printAndWait([
        'それから振り返り、',
        you.get_colored_name(),
        ' を見た',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '、今日の実験を始めましょう！']);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'の目には、今も狂った光が宿っている',
      ]);
      await era.printAndWait([
        '三年間の毎日、',
        tachyon.sex,
        'が会うたびに交わしていた挨拶そのままだ',
      ]);
      await era.printAndWait([
        '気づくと、',
        you.get_colored_name(),
        ' も笑っていた。笑えば笑うほど楽しく、声が大きくなり、涙まで出た',
      ]);
      await era.printAndWait(
        'この三年で、本当に変わらないものもあるのかもしれない',
      );
      await era.printAndWait([
        'たとえば ',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' の関係。たとえば',
        tachyon.sex,
        'の知への欲。たとえば ',
        you.get_colored_name(),
        ' の',
        tachyon.sex,
        'への、そして',
        tachyon.sex,
        'の ',
        you.get_colored_name(),
        ' への感情',
      ]);
      await era.printAndWait([
        '風がさらさらと廊下を通り、',
        you.get_colored_name(),
        ' の言葉に唱和するかのようだ',
      ]);
      await era.printAndWait('窓の外では落葉が舞い、秋が来ている');
      era.drawLine({ content: '三日後' });
      era.printButton(
        '「……待て！？ あの日は別れに来たんじゃなかったのか！？」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        '…………',
        callname,
        '？ もう三日経ってから気づくなんて、少々遅すぎませんこと',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の研究室……隣の新しい研究室',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は「最後に一つ、',
        tachyon.sex,
        'の暴走に付き合おう」と思い、',
        tachyon.sex,
        'の「最後の一回」の実験に乗った',
      ]);
      await era.printAndWait('ところがその最後の一回が、三日続いた');

      era.printButton('「大学へ行くんじゃなかったのか！？」', 1);
      await era.input();
      await tachyon.say_and_wait('ええ、トレセンの大学部ですわ');
      era.println();
      await you.say_and_wait(
        'トレセンに大学部があるのか！？ 聞いたことがないぞ！？',
      );
      era.println();
      await tachyon.say_and_wait(
        '本編では触れられていませんが、公式設定ではトレセン学園に大学部がありますのよ',
      );
      era.printButton('「公式設定って何だよ！？」', 1);
      era.printButton(
        '「仮に本当にあるとして、授業には出なくていいのか！？」',
        2,
      );
      await era.input();
      await tachyon.say_and_wait([
        '……',
        callname,
        '、あなた、大学へ行ったことがありますの？ 大学で真面目に授業へ出る人など、いませんわ',
      ]);
      era.println();
      await era.printAndWait(
        '反論したいが、目の前は高校の授業すら出たり出なかったり、ほぼ全部サボっていた相手だ。急に反論する気力が消えた',
      );
      era.printButton('「じゃあなぜ急に教室を変えた！？」', 1);
      await era.input();
      await tachyon.say_and_wait(
        'いえ……これは言うのも少々なんですが、あの教室はここ数年の使用で……',
      );
      await tachyon.say_and_wait('安全上の問題が、少し……');
      await tachyon.say_and_wait(
        '点検と修繕が要りますわ……一週間もすれば、戻れるでしょう',
      );
      era.printButton(
        '「一週間なら、そんなに感傷的にならなくていいだろ！？」',
        1,
      );
      await era.input();
      await tachyon.say_and_wait([
        'ああ、',
        callname,
        ' は酷いですわ。あの教室は、私たちの三年の虐……使用を背負っていますのよ。感謝の一つくらい、しても罰は当たりませんわ？',
      ]);
      era.println();
      await era.printAndWait('返す言葉はない');
      await era.printAndWait([
        '今となっては、すべて',
        tachyon.sex,
        'の言うとおりだったらしい',
      ]);
      await era.printAndWait('結局、一人で感傷に浸っていたのは自分だけか');
      era.println();
      await tachyon.say_and_wait(
        '合格発表の日に、入学先も、この先の実験も頼むと申し上げたのに……',
      );
      await tachyon.say_and_wait(
        '全部忘れている……やはり、あの日の飲み物に入れた薬が重すぎましたかしら',
      );
      era.println();
      await era.printAndWait(
        'あの日を覚えていないのは演出ではなく、本当に記憶が飛んでいたのか！？',
      );
      era.println();
      await tachyon.say_and_wait([
        'いいですわいいですわ、雑談はそこまで。',
        callname,
        '、早く行きましょう。今日の薬は、無事なら……',
      ]);
      await tachyon.say_and_wait([
        '…',
        tachyon.uma_sex_title,
        'の世界ごと覆すかもしれませんわ',
      ]);
      era.println();
      await era.printAndWait('覆す……世界を……？');
      era.drawLine();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の発明が世界を滅ぼす可能性を百二十四通り考えたあと、',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'についてグラウンドへ出た',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'は、いつものようで、見たことのない薬を一本取り出した',
      ]);
      await era.printAndWait('いつものよう、とは、いつものように光る薬だ');
      await era.printAndWait(
        '見たことがない、とは、その光がいつものどの色でもないことだ',
      );
      await era.printAndWait(
        '強いて言えば……青と白が混ざる光。だが純粋な青白の混合でもない',
      );
      await era.printAndWait(
        'あるいは、この薬は本当に世界を覆せるのかもしれない',
      );
      await era.printAndWait([
        'なぜか、',
        you.get_colored_name(),
        ' はそう思った',
      ]);
      await era.printAndWait([
        'だがその覆しが吉か凶か、',
        you.get_colored_name(),
        ' にはまだ判別できない',
      ]);
      era.println();
      await tachyon.say_and_wait('では、飲みますわ');
      era.println();
      await era.printAndWait([
        '何か言う暇もなく、',
        tachyon.get_colored_name(),
        ' は素早く薬瓶を開け、飲み干した',
      ]);
      era.println();
      await tachyon.say_and_wait('それから……');
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は突然走り出した。あまりに急で、',
        you.get_colored_name(),
        ' は何もできなかった',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'はいつもの運動量を走り終え、顔も赤くせず息も乱れず、',
        you.get_colored_name(),
        ' の傍へ戻った',
      ]);
      await era.printAndWait([
        'この程度の鍛錬は、今の',
        tachyon.sex,
        'にはもう何でもない',
      ]);
      await era.printAndWait([
        'というより、当初の計測なら、今の',
        tachyon.sex,
        'はとっくに',
        tachyon.uma_sex_title,
        'の限界へ達しているはずだ……',
      ]);
      era.println();
      await era.printAndWait([
        'そこまで考えて、',
        you.get_colored_name(),
        ' はある考えに至った',
      ]);
      await era.printAndWait([
        '狂っている。だが、もしそうなら……',
        tachyon.sex,
        'の行動も、このすべてにも説明がつく',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は震える手でポケットを探り、かつて',
        tachyon.sex,
        'が ',
        you.get_colored_name(),
        ' にくれた眼鏡を探す',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'どうです、',
        callname,
        '？ 今の私は、『いくつ』に見えますの？',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' の目に映る',
        tachyon.sex,
        '。頭上の数字と記号は、限界を示す「SS+ 1200」ではなく……',
      ]);
      await era.printAndWait('「UG 1205」', {
        color: adaptability_colors.at(-1),
      });
      era.drawLine();
      await tachyon.print_and_wait([
        you.get_colored_actual_name(),
        ' の表情を見て、',
        tachyon.get_colored_name(),
        ' は笑った',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        'は器具なしでも自分の変化がわかる。',
        tachyon.sex,
        '以上に自分の体を知る者がいるでしょうか',
      ]);
      await tachyon.print_and_wait([
        tachyon.sex,
        'が欲しかったのは、眼前の ',
        you.get_colored_actual_name(),
        ' の、この顔ですわ',
      ]);
      era.println();
      await tachyon.print_and_wait('共に歩いた三年');
      await tachyon.print_and_wait('夢のために尽きた時間');
      await tachyon.print_and_wait(
        '二人の努力。汗も涙も流し切って、ようやく破った',
      );
      era.println();
      await tachyon.print_and_wait('限界という名の障壁');
      era.println();
      await tachyon.print_and_wait('驚いて？ 喜んで？ 震撼して？');
      await tachyon.print_and_wait([
        'だんだん、',
        tachyon.get_colored_name(),
        ' は自分の表情を抑えられなくなった',
      ]);
      await tachyon.print_and_wait(
        'ああ、この台詞はもっと淡々と口にしたかったのに',
      );
      await tachyon.print_and_wait('なのに口角が、我慢できずに上がる');
      await tachyon.print_and_wait('なのに目尻が、制御できずに涙を流す');
      await tachyon.print_and_wait('これが、嬉し泣き、ですの？');
      await tachyon.print_and_wait('だめですわ、我慢できません');
      era.println();
      await tachyon.say_and_wait([
        'さあ、',
        callname,
        '、一緒に探りましょう。限界の先の世界を！',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'だめですわ。今の自分の顔は、きっと愚かでしょう',
      );
      await tachyon.print_and_wait(
        'まったく、こんな顔で交渉して、誰が信頼しますの',
      );
      await tachyon.print_and_wait(
        'こんな愚かな顔の人間を信じる者がいるとしたら……',
      );
      era.println();
      await tachyon.print_and_wait('ふふ、それは必然、狂人か気違いでしょう');
      await tachyon.print_and_wait([
        'たとえば、眼前で同じように愚かな顔をし、目には今も人を狂わせる光を宿す ',
        you.get_colored_actual_name(),
        ' のように',
      ]);
      era.println();
      await era.printAndWait(
        '狂った科学者と、狂信のモルモットは、二人に最もふさわしい結末を迎えた',
      );
    };
    f.title = title;
    return f;
  })(),
};
