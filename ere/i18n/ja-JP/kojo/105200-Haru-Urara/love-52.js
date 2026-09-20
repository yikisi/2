/**
 * @file ハルウララ - 恋慕
 * @author 99
 * @author Claude (翻訳)
 * @desc 条件によってはウララの好感が親密で固定されるため、好感はすべて引数で渡す
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  49: (() => {
    const title = '芽生えた幼さ';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {string} self_name ハルウララの自称
     * @param {PrintedSpan} u_call_h ハルウララのキングヘイローへの呼び方
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      self_name,
      u_call_h,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        `いつもなら、今ごろの ${
          urara.name
        } はとうに夢の中だ。だが今夜の小${urara.uma_sex_title}は、少し眠れない。`,
      );
      await inner_urara.say_as_unknown_and_wait(
        `ルームメイトのベッドから、顔の赤らむ吐息が呪文のように漏れ続け、${urara.sex}の意識を見知らぬ場所へ連れていく……`,
      );
      era.drawLine();
      await urara.print_and_wait(
        `ベッドの上で寝返りを打ち、${urara.name} の頭の中も、風雨の小舟みたいに揺れて止まない。`,
      );
      await urara.print_and_wait(
        `このまま目を閉じたら、またこの前みたいに大変な夢を見ちゃいそう。${callname} が ${self_name} に、ああしたりこうしたりする夢とか。`,
      );
      await urara.print_and_wait(
        `欲しくて ${self_name} を押し倒す ${callname} は、ちょっと怖いけど、今なら受け入れてもいい気がする？`,
      );
      await urara.print_and_wait(
        `夢の中で ${callname} を抱いてた${urara.uma_sex_title}の、はしたない顔もそう。この先の ${self_name} も……あんなに恥知らずな「${urara.phy_sex_title}」になっちゃうのかな？`,
      );
      await urara.print_and_wait(
        `同じように抱き合って、あのときの ${callname} と ${self_name}、どっちがどっちを欲しがってたんだろう……`,
      );
      await urara.print_and_wait(
        'だめだめ、今は変なこと考えるときじゃない！ ちゃんと寝なきゃ！',
      );
      await urara.print_and_wait([
        `じゃあ今、`,
        u_call_h,
        ` に声をかける？ でもそしたら絶対怒られるし、${self_name} がもう少し頑張る……`,
      ]);
      urara.print('うぅ……体が熱いよ、布団どいても、まだ熱い……');
      era.printButton('ちょっとだけ、ちょっとだけなら……（関係を進める）', 1);
      era.printButton('ん……でも、まだ眠いよ……（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        if (urara.sex_code === 1) {
          await urara.print_and_wait(
            `それでも寝間着を脱ぎ、手を肉棒へ伸ばした瞬間、${urara.teen_sex_title}の柔らかい体はもう、絶頂を迎える準備ができていた。`,
          );
        } else {
          await urara.print_and_wait(
            `それでも寝間着を脱ぎ、手を花園へ滑らせた瞬間、${urara.teen_sex_title}の柔らかい体はもう、絶頂を迎える準備ができていた。`,
          );
        }
        await urara.print_and_wait(
          `そっと触れただけなのに、小${urara.uma_sex_title}の体は今まででいちばん激しく反応し、抑えきれない水音がシーツを濡らした。`,
        );
        await urara.print_and_wait(
          `口を強く押さえて声を漏らさないようにしても、止まらない震えの中、${callname} を呼ぶか弱い声は、被った布団の下からこっそり逃げていった。`,
        );
        era.println();
        if (era.get('talent:52:乳房尺寸') >= 1) {
          await urara.print_and_wait(
            '気づかないうちに、絶頂で持ち上がった雌の膨らみも、待ちきれず乳を滲ませている。',
          );
          await urara.print_and_wait([
            '体がとろけていても、汁は勝手に乳首から溢れ、',
            urara.teen_sex_title,
            'の寝間着を浸していく。',
          ]);
          era.println();
          era.set('palam:52:胸部快感', era.get('tcvar:52:胸部快感上限') * 0.75);
        }
        await urara.print_and_wait(
          `わけのわからない反応に、${self_name} は少し慌てる。それでも欲望は、体を絶対に支配したままだ。`,
        );
        await urara.print_and_wait(
          `指が勝手に深く入り、甘い声が止まらない。小${urara.uma_sex_title}は今まででいちばん、誰かへの愛欲に沈んでいく。`,
        );
        await urara.print_and_wait(
          `初めて発情した幼い獣が、おとなの雄に征服されたがるように、${self_name} は布団の下で腰をくねらせ続けた。`,
        );
        await urara.say_and_wait(
          `${callname}……うっ……${callname} に、乱暴に……だめ、はぁ……`,
        );
        await urara.print_and_wait(
          `誰かに支配され、いじめられる妄想は一晩中続いたみたいで、${self_name} はいつ眠ったかもわからない。`,
        );
        await urara.print_and_wait(
          `${urara.teen_sex_title}が再び目を開けたときは、もう翌朝、目覚ましに起こされたあとだった。`,
        );
        await urara.print_and_wait(
          '欲を吐き出してしまえば、ベッドの惨状は別として、その夜は意外とよく眠れた。ただ——',
        );
        await urara.say_and_wait(
          `よくわからないけど……${callname}、ほんとのやつ、したいな……`,
        );
        await urara.print_and_wait(
          `${urara.teen_sex_title}が起き上がった名残の熱の中、「恥知らず」な言葉が、また小さくこぼれた……`,
        );
      } else {
        await urara.say_and_wait(`次も ${callname} に会うし、早く寝なきゃ……`);
        await urara.print_and_wait(
          `ざわつく体をこらえ、尻尾を力づくで脇へ引き、小${urara.uma_sex_title}は苦労して寝返りを打つ。`,
        );
        await urara.print_and_wait(
          `布団と枕で耳を覆い、ひと騒動したあと、${callname} はルームメイトの途切れ途切れの吐息の中で、ようやく夢に落ちた。`,
        );
        await urara.print_and_wait(
          `それでも夢の中で、小${urara.uma_sex_title}はまた見た。「${urara.phy_sex_title}」を見るみたいに熱く、${
            urara.sex
          }を押し倒す ${callname} を……`,
        );
        era.println();
        if (era.get('talent:52:乳房尺寸') >= 1) {
          await urara.print_and_wait(
            '目を覚ましたとき、言うことを聞かない大きな白うさぎは、夢の発情の名残でまだ元気に尖っていた。',
          );
          await urara.print_and_wait(
            '尖った先から溢れた白い汁も、主人が夢に沈んでいるあいだに、寝間着の胸元をぐしゃぐしゃに濡らしていた。',
          );
          era.println();
        }
        await urara.print_and_wait(
          `こうして、過激な春の夢に一晩中絡まれた ${self_name} は、翌朝も寝坊した。`,
        );
        await urara.say_and_wait(
          `昨夜、${self_name} が我慢しなければ、もっとよく眠れたのかな。たぶん……`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  50: (() => {
    const title = '幼い水音';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait('認めたくはないけれど……');
      await inner_urara.say_as_unknown_and_wait(
        '愛欲に水をやれば、青い実はいつか妖しい禁断の実になる。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'では、この甘い実を、早く摘んでしまうべきかしら……？',
      );
      era.drawLine();
      await era.printAndWait([
        '待ちぼうけのあと探しに出ると、',
        you.get_colored_name(),
        ' はあっさり、',
        urara.get_colored_name(),
        ' の隠れた陰を見つけた。',
      ]);
      await era.printAndWait([
        '耳を塞いで鈴を盗むように、頬を赤らめた ',
        urara.get_colored_name(),
        ' は小さな体を、ホールの逆光の隅へ必死に丸めている。',
      ]);
      await era.printAndWait([
        '壁一枚隔てただけなのに、恥と快感に沈む小',
        urara.uma_sex_title,
        'は、すぐそこまで来た ',
        you.get_colored_name(),
        ' にまだ気づいていない。',
      ]);
      await era.printAndWait(
        '揃っているはずの布は乱れて体に引っかかり、幼い敏感な場所が、隠すものもなく空気に晒されている。',
      );
      if (urara.sex_code - 1) {
        await era.printAndWait(
          '十本の指が、体の淫らな隅々を探り、ピンクの幼い穴から粘る銀糸を何度も引き出す。',
        );
        await era.printAndWait([
          urara.teen_sex_title,
          'の愛液が絶え間なく滴り、きれいな床に、背徳の欲を含んだ小さな水たまりを残している。',
        ]);
      }
      if (era.get('talent:52:乳房尺寸') >= 1) {
        await era.printAndWait(
          '愛液と一緒に落ちているのは、禁忌で場違いな乳白色の雫だ。',
        );
        await era.printAndWait(
          'きつく巻いたさらしがめくれ、幼い体には不釣り合いな膨らみが、見る者の前に晒されている。',
        );
        await era.printAndWait(
          '乳房はふっくら柔らかく垂れ、前へ突き出した乳輪と乳首が、勝手に白い汁を滲ませている。',
        );
        await era.printAndWait([
          urara.teen_sex_title,
          'が腕を前に回し、発情で震える小さな怪物を必死に支えても、乳白色の染みは足元に増えていく。',
        ]);
        await era.printAndWait(
          '柔らかく敏感で、もう新しい性器のようになった自前の乳肉は、この小さな体がとっくに準備を終えていることを示していた——',
        );
        await era.printAndWait(
          'いつか乳を与える準備も、引き締まった下腹を新しい孕み袋にする準備も……',
        );
      }
      await era.printAndWait([
        '今の ',
        urara.get_colored_name(),
        ' は、よく肥えた幼い兎のようだ。無邪気に、甘い急所を潜伏した捕食者の前へ全部晒している。',
      ]);
      await urara.say_and_wait([
        'うっ……',
        callname,
        '……',
        you.actual_name,
        '……どうしたの……気持ちいい、止まらない……',
      ]);
      await era.printAndWait([
        '征服欲をくすぐる、幼い泣き声とともに、',
        urara.get_colored_name(),
        ' は途切れない甘い息で ',
        you.get_colored_name(),
        ' の名前を呼ぶ。',
      ]);
      await era.printAndWait(
        '今していることは、絶対に見られてはいけないとわかっていても、快楽の声は抑えられない。',
      );
      await era.printAndWait([
        'つぼみの',
        urara.teen_sex_title,
        'は、無力でも期待するように、見えない誰かへ、体のいちばんみっともない面を見せている。',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          you.sex,
          '、まだ待ってるのに……だめなのに、もし',
          you.sex,
          'に見られたら、やだ……',
        ]);
        await era.printAndWait([
          '頭まで焼けたような淫らな顔で、',
          urara.get_colored_name(),
          ' は水音に混ぜて、みだらに呟く。',
        ]);
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'は今、憑かれたように、触れたら弾けそうな体を掻き回している。',
        ]);
        await urara.say_and_wait([
          callname,
          ' に見られたら、',
          you.actual_name,
          ' に見られたら、うっ……',
        ]);
        await urara.say_and_wait('ほしい……でもだめ……頭、おかしくなっちゃう——');
      } else {
        await urara.say_and_wait([
          'わかってる、わかってるのに……',
          callname,
          ' は、そういう人なのに、でも、あっ、はぁ……',
        ]);
        await era.printAndWait([
          '心は拒んでいても、情欲に落ちた小',
          urara.uma_sex_title,
          'は、激しく自分を慰める指を止められない。',
        ]);
        await era.printAndWait([
          '今の ',
          urara.get_colored_name(),
          ' は両脚を八の字に開き、背筋も激しい快感で限界まで反っている。',
        ]);
        await urara.say_and_wait([
          'やっぱりまだ……',
          urara.get_colored_name(),
          '、まだ ',
          callname,
          ' を信じたい、',
          you.actual_name,
          ' を信じたい……',
        ]);
        await urara.say_and_wait([
          'なのに……なんで、',
          callname,
          ' を思い出すだけで、体が——',
        ]);
      }
      await era.printAndWait(
        '抑えきれない絶頂の声の中、小さくて淫らな体が、激しい最高潮を迎える。',
      );
      await era.printAndWait([
        '失禁のように飛び散る愛液が床を灌ぎ、靴と半分脱げたハイソックスを濡らし、',
        urara.teen_sex_title,
        'の下着とスパッツまで浸した。',
      ]);
      await era.printAndWait([
        '欲をいったん吐き出した ',
        urara.get_colored_name(),
        ' は、焦点の合わない目で虚ろに壁際へ寄りかかり、耳も尻尾も力なく垂れている。',
      ]);
      await era.printAndWait([
        urara.sex,
        'が不器用に体を整えようとしたとき、両脚が力を失い、小',
        urara.uma_sex_title,
        'は足元の、熱を失っていく水たまりへ腰を落とした……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' が服を乱したまま慌てて ',
        you.get_colored_name(),
        ' と合流したときは、約束の時間をとうに過ぎていた。だが今回の ',
        you.get_colored_name(),
        ' は、次は気をつける、の一言すら出せなかった。',
      ]);
      await era.printAndWait([
        'その場で ',
        urara.get_colored_name(),
        ' を食べてしまいたい欲を抑えるだけで、',
        you.get_colored_name(),
        ' の気力は尽きかけていた。誘う潮紅の残る小さな顔を、まともに見る余裕もない。',
      ]);
      await era.printAndWait([
        '視線の置き場のない ',
        you.get_colored_name(),
        ' は、それでも気づいてしまう。担当の乱れたスカートの裾から、透き通った液体が濡れた下着の縁を伝い、ハイソックスの口を濡らしている……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-1': (() => {
    const title = 'ざわめく想い';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {string} self_name ハルウララの自称
     * @param {PrintedSpan} u_call_h ハルウララのキングヘイローへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      self_name,
      u_call_h,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        'ベッドの上で寝返りを打つ。今夜の小',
        urara.uma_sex_title,
        'は、本当に眠れないらしい……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '恋する',
        urara.teen_sex_title,
        'は、外見がどれほど幼くても、内側はこうして揺れ続ける……',
      ]);
      era.drawLine();
      await urara.print_and_wait(
        'まただ。どきどきが止まらない。放っておいたら、明日も起きられないよ。',
      );
      await urara.print_and_wait(
        'なのに、無理に寝ようとすればするほど、頭の中のあの顔がはっきりしてくる。',
      );
      await urara.print_and_wait(
        '耳を折りたたんで、尻尾を腰に巻きつけても、勝手に震えてしまう。',
      );
      await urara.print_and_wait(
        '嬉しいから？ なんでいつもこうなるの？ なんで目を閉じると、あの人ばかり見えるの？',
      );
      await urara.print_and_wait([
        '初めて会ったとき、目の前で倒れた人。初対面の',
        urara.uma_sex_title,
        'のふた言だけで、約束に来てくれた人。',
      ]);
      await urara.print_and_wait([
        '最後尾の弱い',
        urara.uma_sex_title,
        'に声援をくれた人。何が起きても、ダメな',
        urara.sex,
        'とここまで来た人……',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          '振り返ると、',
          callname,
          ' のいない ',
          self_name,
          ' が、どうやって今まで来たか、もう想像できない。',
        ]);
        await urara.say_and_wait('こんなの、すごく幸運だよね……');
        await urara.print_and_wait([
          'でも、いつか ',
          callname,
          ' がいなくなったら？ みんなのために走るにしても、あの人がいなくなった弱い ',
          self_name,
          ' は、続けられるのかな……',
        ]);
        await urara.print_and_wait(
          '不安だよ。その幸運を失った先が怖い。見えてる未来だとしても、どうすればいいの？',
        );
        await urara.print_and_wait(
          '担当とトレーナーの関係は、いつか必ず変わるから——',
        );
      } else {
        await urara.print_and_wait([
          '普段の関係が良く見えなくても、',
          self_name,
          ' はもう ',
          callname,
          ' に頼ってしまっている。',
        ]);
        await urara.say_and_wait([
          'それに、',
          callname,
          ' のそばは、嫌な感じじゃないし……',
        ]);
        await urara.print_and_wait([
          '気づいたら、',
          callname,
          ' が ',
          self_name,
          ' の心に占める場所は、自分でも驚くくらい広がっていた。',
        ]);
        await urara.print_and_wait(
          'まだ戸惑うけど、一緒に歩くだけで胸が騒ぐし、励ましてくれると、びっくりするくらい嬉しい。',
        );
        await urara.print_and_wait([
          'どうしたんだろう？ ',
          self_name,
          ' の ',
          callname,
          ' への気持ち、知らないところで変わっちゃったの？',
        ]);
      }
      urara.say(`じゃあウララの、${you.sex} への気持ちは……`);
      era.printButton(
        '「やっぱり、「恋」の気持ちなのかな？」（関係を進める）',
        1,
      );
      era.printButton(
        '「ま、まだ担当の、トレーナーへの好感だよね？」（まだ進めない）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.print_and_wait([
          'じゃあ……これが恋？ ',
          self_name,
          ' が ',
          callname,
          ' を？',
        ]);
        await urara.print_and_wait([
          '全部はわからないけど、たぶんそうだよね。でもそうなると、',
          callname,
          ' は ',
          self_name,
          ' のこと、好きなのかな？',
        ]);
        await urara.print_and_wait([
          'そう考えると胸が酸っぱい。でも……',
          callname,
          ' から告白する顔、想像できないよ！',
        ]);
        await urara.print_and_wait([
          'このままじゃ、何もわからない ',
          self_name,
          ' は、ずっと ',
          callname,
          ' に子供扱いされるだけだよね……',
        ]);
        await urara.say_and_wait(
          'でも、受け入れてもらえなくても、本心からは逃げちゃだめだよ！',
        );
        await urara.say_and_wait([
          '大変でも、正直じゃないと、あとで絶対後悔する！ それだけは ',
          self_name,
          ' にもわかるよ！',
        ]);
        await urara.print_and_wait([
          '「',
          urara.actual_name,
          '」は、すごい',
          urara.uma_sex_title,
          'じゃない。',
          urara.sex,
          'の日常は不器用で幼稚で、輝いてるみんなとは比べものにならない……',
        ]);
        await urara.print_and_wait([
          'だからこそ ',
          self_name,
          ' は、走るときと同じで、全力で ',
          callname,
          ' に本音を伝えなきゃ。',
        ]);
        await urara.print_and_wait([
          'そうすれば、1着が取れなくても、',
          callname,
          ' に断られても、いつものように素直に受け止められる——',
        ]);
        if (high_relation) {
          await urara.print_and_wait([
            self_name,
            ' は知ってる。',
            callname,
            ' は本当に立派な人だし、みんなに好かれててもおかしくない。',
          ]);
          await urara.say_and_wait('明日から、好きって、大きな声で言おう——');
        } else {
          await urara.print_and_wait([
            callname,
            ' がひどい人でも、',
            self_name,
            ' は、ひどい ',
            callname,
            ' が好きになっちゃった。',
          ]);
          await urara.say_and_wait([
            '何が起きても、',
            callname,
            ' が好きなことは、変わらない……',
          ]);
        }
        await urara.say_and_wait([
          'だからウララも勇気を出すよ。いつか、',
          callname,
          ' と——',
        ]);
        if (has_lover) {
          await urara.say_and_wait([
            'たとえ ',
            callname,
            ' に、もうほかの子がいても？',
          ]);
          await urara.print_and_wait([
            '決心した直後に、どこからともなく問いが来る。でも覚悟のできた ',
            self_name,
            ' は、布団の下で唇を噛んだだけだった。',
          ]);
          await urara.say_and_wait(
            '……わかってるよ？ 資格もないし、すごく悪いことだし、みんなも悲しむ……',
          );
          await urara.say_and_wait('でも自分に嘘ついたら、何も変わらないよ。');
          await urara.say_and_wait([
            self_name,
            ' は頭悪いし、わからないこともいっぱいある。でも ',
            self_name,
            ' は弱虫じゃない。',
          ]);
          await urara.say_and_wait([
            '逃げないよ。次も胸を張って、',
            callname,
            ' と一緒にいるために——！',
          ]);
        }
      } else {
        await urara.say_and_wait([
          'うん！ やっぱりいつも通りだよ。',
          self_name,
          ' と ',
          callname,
          ' は、ふつうの関係……だよね？',
        ]);
        await urara.print_and_wait([
          '何か忘れてる気がする。あるいは小',
          urara.uma_sex_title,
          'は、まだ自分の気持ちを飲みきれていない。',
        ]);
        await urara.print_and_wait([
          '大きな気持ちを、ふつうのまま押し続けた末に、',
          self_name,
          ' はとうとうフリーズの限界まで来た。',
        ]);
        await urara.print_and_wait([
          'ぼんやりしたまま、',
          self_name,
          ' は頼れるルームメイトに望みを託す。',
          urara.sex,
          'なら、何か言ってくれるかも？',
        ]);
        await urara.say_and_wait([
          'でも隣の ',
          u_call_h,
          ' はもう寝てる。いつもは ',
          self_name,
          ' の方が先に寝るのに？',
        ]);
        await urara.say_and_wait([
          'うん、もう変なこと考えない、',
          self_name,
          '。早く寝なきゃ、また力なくなっちゃう。',
        ]);
        await urara.print_and_wait([
          'でも体はまだ熱い。もう一回、あれする？ 布団をどかして、寝間着も全部脱いで……',
        ]);
        await urara.say_and_wait('ん～ はぁ……');
        await urara.print_and_wait([
          '震える手を、また敏感な場所へ沈める。小',
          urara.uma_sex_title,
          'の目の前に、またあの人が',
          urara.sex,
          'の体を欲しがって獣になる姿が浮かぶ。',
        ]);
        await urara.print_and_wait([
          '何度目かわからない絶頂のあと、もう考える力のない ',
          self_name,
          ' は、ぐちゃぐちゃのベッドで深く眠った……',
        ]);
        await urara.say_and_wait('……');
        await urara.print_and_wait([
          '欲を出して考えるのをやめたあと、小',
          urara.uma_sex_title,
          'はしばらく、この問いを頭から追い出した。',
        ]);
        await urara.print_and_wait([
          'でも',
          urara.teen_sex_title,
          'の気持ちは、いつまでも無視できない。もうすぐまた、',
          urara.sex,
          'はこの問いに絡め取られるだろう。',
        ]);
        await urara.print_and_wait([
          '少なくとも最近は、',
          you.get_colored_name(),
          ' も',
          urara.sex,
          'も、誰かが突然眠れなくなる心配はしなくていい。',
        ]);
        await urara.print_and_wait([
          'ただ一糸まとわず眠れば、翌朝、「ルームメイトのお母さん」はきっとびっくりするよね。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '74-2': (() => {
    const title = (urara) => ['長く待った', urara.sex, 'へ'];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (urara, inner_urara, you, high_relation, has_lover) => {
      await era.printAndWait([
        'あの日はいろいろあったせいか、',
        you.get_colored_name(),
        ' と ',
        urara.get_colored_name(),
        ' がようやくふたりになれたころ、空はもう暗くなり始めていた。',
      ]);
      await era.printAndWait([
        '記憶の中の ',
        urara.get_colored_name(),
        ' は夜空を仰ぎ、小',
        urara.uma_sex_title,
        'は静かに星を数え、桜の瞳に星屑が散っている。',
      ]);
      await era.printAndWait([
        'ただ今夜の小',
        urara.uma_sex_title,
        'は、まだ少し気が乗らない。耳も尻尾も、考え込むように垂れている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' にはわかっている。記憶がずれても、ふたりで過ごした時間と道のりは嘘をつかない。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の手を引きたい。',
        urara.get_colored_name(),
        ' の笑顔が見たい。',
        urara.get_colored_name(),
        ' ともっと先へ行きたい……',
      ]);
      await era.printAndWait([
        '理性を使っても、浮かぶのは',
        urara.sex,
        'が誰かの返事を待っていることだけ。ほかは頭に入らない。',
      ]);
      await era.printAndWait([
        '担当はいつものままだ。おかしいのは、「言行を慎む」を言い訳にするトレーナーの方だ。',
      ]);
      await era.printAndWait([
        'いまさら過ちの上に過ちを重ねても、卑しい大人の手札はもう尽きている。',
      ]);
      await era.printAndWait([
        '覚悟はできた？ まだ準備不足だと思っても、人生に同じ夜は二度こない。',
      ]);

      await era.printAndWait([
        '急ぎ足の星空の下、',
        you.get_colored_name(),
        ' はついに——',
      ]);
      era.printButton('自分からウララの手を取る。', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は傍らの手をそっと握る。返事は、少し躊躇したあとの、温かい握り返しだった。',
      ]);
      await era.printAndWait([
        '視線をそっと横へやると、黙っていた ',
        urara.get_colored_name(),
        ' が、ようやく ',
        you.get_colored_name(),
        ' に笑いかける。',
      ]);
      await era.printAndWait([
        'まだ小さな',
        urara.sex,
        'なのに、このときだけ子供らしくない落ち着きを見せる。',
      ]);
      await era.printAndWait([
        '少しはわかっている、というような顔。',
        urara.get_colored_name(),
        ' が自分から告白したときと同じだ。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          '思ってたよりちょっと遅かったけど、ウララは、まだトレーナーのことが好きだよ！',
        );
        await era.printAndWait([
          'そばに寄り、',
          you.get_colored_name(),
          ' の気持ちに応えながら、',
          urara.get_colored_name(),
          ' は気づかないうちに笑っていた。',
        ]);
        await urara.say_and_wait([
          'よろしくね……？ えへへ～ やっぱりウララには似合わないね！',
        ]);
      } else {
        await urara.say_and_wait([
          '何考えてるの？ もうこんな時間なのに……でも、そういうことだよね、トレーナー！',
        ]);
        await era.printAndWait([
          '不満も不安も残っているのに、',
          urara.get_colored_name(),
          ' は小さく笑った。',
        ]);
        await urara.say_and_wait(
          '帰り、ちょっとゆっくりでも、みんな心配しないよね？',
        );
      }
      era.println();
      if (has_lover) {
        await urara.say_and_wait(
          'でもトレーナー、夜道って本当に暗いよ。ほかの子だけ送っちゃだめだよ？',
        );
        await urara.say_and_wait(
          '急に手を離したら、ウララ、迷子になっちゃうかも……',
        );
        era.println();
      }
      await era.printAndWait([
        '帰り道、恋人になったふたりの歩幅は、気づかないうちに遅くなっていた。',
      ]);
      await era.printAndWait([
        'まだ無邪気な季節の小',
        urara.uma_sex_title,
        'と、もう大人の歳のトレーナー。差が大きくても、互いを選んだ。',
      ]);
      await era.printAndWait([
        '先の見えない夜道は、みんなを心配させるかもしれない。',
      ]);
      await era.printAndWait([
        '門限までに無事戻れればいいよね？ あの日の帰り道を思い出しながら、',
        urara.teen_sex_title,
        'は',
        urara.sex,
        'の、あちこち描き散らしたノートを閉じた。',
      ]);
      era.drawLine();
      await urara.say_and_wait(
        'これからのウララとトレーナーが、何が起きても、夜道で迷子になりませんように。',
        true,
      );
      await inner_urara.say_as_unknown_and_wait([
        'あの日の星屑を思い出し、小さな',
        urara.uma_sex_title,
        'は、そう願った。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-3': (() => {
    const title = '選んだあなたへ';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '自分の机で書類を処理しながら、あなたは今日、ウララと一緒にいたときの予想外を思い出す。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '予想外、とも言い切れない。その前のあなたは、あんなに『用意してきた』ウララを見たことがなかったから。',
      );
      era.drawLine();
      await urara.say_and_wait([
        callname,
        '！ 恋のことで、',
        callname,
        ' はウララのこと、どう思ってるの？',
      ]);
      await era.printAndWait([
        'その問いを聞いた瞬間、',
        you.get_colored_name(),
        ' は幻聴か、あるいは ',
        urara.get_colored_name(),
        ' が誰かに変な冗談を仕込まれたのかと思った。',
      ]);
      await era.printAndWait([
        'だが机に座った ',
        you.get_colored_name(),
        ' が振り返ると、小',
        urara.uma_sex_title,
        'はすぐ後ろに立ち、重賞を争うときと同じ目で寄ってくる。',
      ]);
      await era.printAndWait([
        '普段の距離とは関係なく、疑う余地もなく、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' と同じ椅子に割り込んだ。',
      ]);
      await era.printAndWait([
        '1着を奪うように、',
        urara.get_colored_name(),
        ' は独占して ',
        you.get_colored_name(),
        ' の太腿に座り、担当トレーナーの前へ全身を預ける。',
      ]);
      await urara.say_and_wait([
        'だから ',
        callname,
        '！ ウララのこと、どう思ってるの？ ウララ、今知りたい！',
      ]);
      await era.printAndWait([
        '桜の瞳が ',
        you.get_colored_name(),
        ' と咫尺のあいだで、小さな',
        urara.uma_sex_title,
        'は真剣な笑みを乗せて、もう一度 ',
        you.get_colored_name(),
        ' に問う。',
      ]);
      await era.printAndWait([
        '退路を ',
        urara.get_colored_name(),
        ' に塞がれた ',
        you.get_colored_name(),
        ' は、意外ではなかった。むしろ ',
        you.get_colored_name(),
        ' は、いつかこの日が来ると、最初からわかっていたのかもしれない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        urara.sex,
        'のトレーナーだ。',
        urara.get_colored_name(),
        ' にすら見える気持ちを、認められなくても、',
        you.get_colored_name(),
        ' は存在を知っている。',
      ]);
      await era.printAndWait(
        'いまのふたりの距離の近さも、周囲を含めた「言わずもがな」でしかない。',
      );
      await era.printAndWait(
        '記憶はここで一瞬ためらう。期待でも疑いでも、担当の気持ちから逃げてはいけない。',
      );
      await era.printAndWait([
        'それに、自分から切り出した ',
        urara.get_colored_name(),
        ' に、迷いのかけらもない。',
      ]);
      era.println();
      inner_urara.say_as_unknown([
        '静かに待つ ',
        urara.get_colored_name(),
        ' の前で、トレーナー',
        you.adult_sex_title,
        '（あなた）が当時選んだのは——',
      ]);
      era.printButton(` ${urara.name} を抱きしめる`, 1);
      era.printButton('「今は、まだ……」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '短い迷いのあと、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' を胸に収めた。',
        ]);
        await urara.say_and_wait(
          'えへへ～ トレーナー、困らせちゃったね。でもトレーナーがウララを選んでくれた。すごく嬉しい……',
        );
        await era.printAndWait([
          '張り詰めていた体が、',
          you.get_colored_name(),
          ' の抱擁の中でほどけていく。',
          urara.get_colored_name(),
          ' も、',
          you.get_colored_name(),
          ' の選択にほっとしたらしい。',
        ]);
        await era.printAndWait([
          'いつもの ',
          urara.get_colored_name(),
          ' とは少し違う。でも',
          urara.sex,
          'のトレーナーである ',
          you.get_colored_name(),
          ' には、理由がわかる。',
        ]);
        await era.printAndWait([
          '小さなウマはまだよくわかっていなくても、自分がどんな「',
          urara.uma_sex_title,
          '」かはわかっている。',
          urara.sex,
          'はずっと安心が足りない。ただ、めったに表に出さないだけだ。',
        ]);
        await era.printAndWait([
          '「',
          urara.get_colored_name(),
          '」を抱く理由は、一応答えられる。それでも、正当でない欲があるせいで、口にはしづらい。',
        ]);
        await era.printAndWait(
          'たとえば初めて会ったとき、大人が枕を並べた少女の体に、安心と温もりを感じたこと。',
        );
        await era.printAndWait(
          '忘れかけた前進の初心を生徒に思い出させてもらい、その生徒の体に、待ち望んだ倒錯の温もりまで求めること。',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' と契約したトレーナーの胸には、',
          urara.get_colored_name(),
          ' が再び灯した火のほか、不純な気持ちばかりが残っているのかもしれない。',
        ]);
        await era.printAndWait([
          'それでも構わない。どんな複雑な気持ちを収めても、',
          urara.get_colored_name(),
          ' と過ごした日々は、嘘ではない。',
        ]);
        era.println();
        if (high_relation) {
          await urara.say_and_wait(
            'トレーナー、ウララのせいで自分を下げないでね？ だってこれも、ウララが選んだことだよ。',
          );
          await era.printAndWait([
            '記憶の中、',
            urara.get_colored_name(),
            ' は安心する小さな手を伸ばし、',
            you.get_colored_name(),
            ' の頬の迷いを撫でる。',
          ]);
          await era.printAndWait([
            '少しはわかっている、という顔で、',
            urara.get_colored_name(),
            ' はいつもの笑顔を、',
            you.get_colored_name(),
            ' の抱擁に返した。',
          ]);
          await urara.say_and_wait(
            '気持ちが通じるのは、すごくいいことだって、お母さんも言ってたよ！ それにウララ、ずっと子供じゃないよ？',
          );
          await era.printAndWait(
            'そうだ。もう迷う必要はない。恋する相手は、互いのそばにいる。',
          );
        } else {
          await urara.say_and_wait(
            '心配してる？ でも何が起きても、ウララはもうトレーナーが好き……',
          );
          await era.printAndWait([
            '記憶の中、',
            urara.get_colored_name(),
            ' はさっきまで複雑な顔をしていたのに、今は吹っ切れたように ',
            you.get_colored_name(),
            ' の頬を両手で支える。',
          ]);
          await era.printAndWait([
            '絶対に後悔しない目で、少女は勇敢に、',
            you.get_colored_name(),
            ' の、不純が混ざっているかもしれない愛に応えた。',
          ]);
          await urara.say_and_wait(
            'もう我慢しなくていいよ、トレーナー。選んだウララは、ここにいるから。トレーナーのそばに……！',
          );
          await era.printAndWait('そうだ。もう、責められることはない……');
        }
        era.println();
        if (has_lover) {
          await urara.say_and_wait(
            'でもこれで、ウララがみんなに卑怯って言われても、もう戻れないよ……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            ' の胸に柔らかく縮こまり、',
            urara.get_colored_name(),
            ' は突然、',
            you.get_colored_name(),
            ' の前に寄り、小さく言った。',
          ]);

          era.printButton('「——」', 1);
          await era.input();

          await era.printAndWait([
            you.get_colored_name(),
            ' が不意打ちで足元を崩したとき、',
            urara.get_colored_name(),
            ' はまた首を振り、優しく恋人を撫でた。',
          ]);
          await urara.say_and_wait(
            '大丈夫だよ？ ウララはトレーナーを責めたいんじゃない。その前に、もう覚悟はできてたから。',
          );
          await era.printAndWait('続いて来るのは、また天使のような笑顔。');
          era.println();
        }
        await urara.say_and_wait(
          'これから先も、ずっと好きでいようね、トレーナー！',
        );
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          '胸の中のウララの、小さくて確かな温もりと柔らかさを思い出し、美しい記憶はいったん閉じる。',
        );
        await inner_urara.say_as_unknown_and_wait(
          'めでたし？ いいえ、皮肉ではないわ。私も信じたいの。あなたが幸せであることを。',
        );
      } else {
        await urara.say_and_wait(
          'やっぱりウララの質問、いきなりすぎた！ トレーナーを困らせちゃだめだね！',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' が遠回しな言葉を探しているうちに、',
          urara.get_colored_name(),
          ' の方が先に口を開いた。',
        ]);
        await urara.say_and_wait(
          'だってトレーナーは大人だもん。大人は、もっと考えるよね！ ならウララも、もう聞かない！',
        );
        await urara.say_and_wait(
          'だからそのとき、トレーナーが決まったら、絶対ウララに言ってね！',
        );
        era.println();
        if (high_relation) {
          await era.printAndWait([
            '落ち込んだ様子もなく、いつもと同じように笑い、小',
            urara.uma_sex_title,
            'はトレーナーの頬をつまんだだけだった。',
          ]);
          await urara.say_and_wait(
            'でもウララ、諦めるつもりないよ！ ウララは待ち続ける！ トレーナーも、もう察してるでしょ！',
          );
          await urara.say_and_wait(
            'ウララは、トレーナーがウララを受け入れても大丈夫って思えるまで、待つよ！',
          );
        } else {
          await era.printAndWait([
            '言い終えるとすぐに少し萎れ、',
            urara.get_colored_name(),
            ' はまたぐったり ',
            you.get_colored_name(),
            ' の胸へ縮こまる。',
          ]);
          await urara.say_and_wait(
            'トレーナー、ウララはどのくらい待てばいい？ でも、トレーナーは教えてくれないよね……',
          );
          await urara.say_and_wait(
            'ウララがもっと強引だったら、トレーナーは今すぐうんて言ってくれる？ 冗談だよ……',
          );
        }
        era.println();
        await era.printAndWait(
          'その日が来るかはまだわからない。それでもいい。今は現状のままでいい。今は、まだそのときではない——',
        );
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          'ではその前に、船が橋につけば自然に直る、とは言っても、ふたりの関係はどう扱うの？',
        );
        await inner_urara.say_as_unknown_and_wait(
          '椅子の上で怠惰に揺られ、あなたとウララは、何もしないようで胸の重い時間を過ごした。',
        );
        await inner_urara.say_as_unknown_and_wait('……');
        await inner_urara.say_as_unknown_and_wait(
          'もう、あなたが何を考えているのかわからない。ここまで来て、受けない道理がある？',
        );
        await inner_urara.say_as_unknown_and_wait(
          '……言わなくていいことを言ってごめん。とにかく、お疲れさま。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  75: (() => {
    const title = 'はっきりしてきた想い';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {PrintedSpan|false} u_call_r ハルウララのライスシャワーへの呼び方。恋慕が足りないときは false
     * @param {PrintedSpan|false} u_call_h ハルウララのキングヘイローへの呼び方。恋慕が足りないときは false
     */
    const f = async (
      urara,
      inner_urara,
      you,
      high_relation,
      u_call_r,
      u_call_h,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '隠しても、気持ちはいつか花を咲かせ、実をつける。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'では進行形のあなたに、今、問題です——',
      );
      await inner_urara.say_as_unknown_and_wait(
        'カラスは、なぜ書記台に似ているの？',
      );
      era.drawLine();
      await urara.print_and_wait([
        '隅の長椅子で眠っている ',
        you.get_colored_name(),
        ' を見て、走ってきたウララは足音をそっと収めた。',
      ]);
      await urara.say_and_wait(
        'え？ トレーナー、昨夜も休めてないの？ じゃあ、そっと……',
      );
      await urara.print_and_wait([
        '声を潜めて ',
        you.get_colored_name(),
        ' のそばへ来て、ウララも長椅子に座り、静かに待ちながら ',
        you.get_colored_name(),
        ' の穏やかな横顔を見る。',
      ]);
      await urara.print_and_wait([
        '体が温まり、熱い気持ちがまた高みを占める。出会ってから少しずつ満たされてきた日々のおかげで、今のウララには、このときめきの理由がよくわかる。',
      ]);
      await urara.say_and_wait(
        'よく考えると、今のトレーナー、初めて会ったときみたい。なんか縁があるね。',
      );
      await urara.print_and_wait([
        '眠っている ',
        you.get_colored_name(),
        ' にゆっくり寄り、耳を ',
        you.get_colored_name(),
        ' に預け、ウララは ',
        you.get_colored_name(),
        ' の呼吸と鼓動を聴く。',
      ]);
      await urara.print_and_wait([
        you.get_colored_name(),
        ' の担当は、また思い出す。',
        you.get_colored_name(),
        ' と初めて会った日、',
        you.get_colored_name(),
        ' が頑張りすぎて倒れた日を。',
      ]);
      await urara.print_and_wait([
        'ただ、この出会いの再現では、体も心も、最初のウララとはすっかり違っている。',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          '前はわかんなかったけど、今はね。ウララ、やっぱりトレーナーが好き。',
        );
        await urara.print_and_wait([
          '安心して ',
          you.get_colored_name(),
          ' のそばに寄り、ウララは帰り道を見つけた子のように、眠っている ',
          you.get_colored_name(),
          ' をそっと抱いた。',
        ]);
        await urara.print_and_wait([
          '小',
          urara.uma_sex_title,
          'の、人間より少し高い体温が、愛の抱擁とともに、見慣れた温もりを ',
          you.get_colored_name(),
          ' の体へ注ぐ。',
        ]);
        await urara.print_and_wait([
          'トレーナーがウララの走りを変えてくれたから。トレーナーがウララに、1着の喜びをくれたから。',
        ]);
        await urara.print_and_wait([
          'トレーナーがウララの暮らしを変えてくれたから。トレーナーがウララに、もっとたくさんの愛を見せてくれたから。だから……',
        ]);
        await urara.say_and_wait('これからもずっと、ずっと好きでいさせて——');
      } else {
        await urara.say_and_wait(
          'トレーナー、ウララ、ずっと信じてていいよね？',
        );
        await urara.print_and_wait([
          '潤んだ目で、まだ眠っている ',
          you.get_colored_name(),
          ' を見つめ、ウララは答えを期待しない問いを呟く。',
        ]);
        await urara.print_and_wait([
          '小',
          urara.uma_sex_title,
          'は自分に少し勇気を出させ、',
          urara.sex,
          'を不安にさせるこの人へ、もっと寄り添おうとする。',
        ]);
        await urara.print_and_wait([
          '最初の走りと同じ。大事にされなくても、',
          urara.sex,
          'はこの落ち着かない想いを、一心に抱きたい。',
        ]);
        await urara.print_and_wait([
          urara.sex,
          'がまだつぼみの歳でも、この気持ちが捨てられても、最後に ',
          you.get_colored_name(),
          ' が……',
        ]);
        await urara.say_and_wait('今は、起きないでね——');
      }
      era.println();
      await urara.say_and_wait('ちゅ……');
      await urara.print_and_wait([
        '熱恋の、無邪気な',
        urara.teen_sex_title,
        'の羞恥と勇気を乗せて、担当の軽いキスが、目覚め際の ',
        you.get_colored_name(),
        ' の額に落ちる。',
      ]);
      await urara.print_and_wait([
        '激しい表現ではない。成長で覚えたものを借りて、ウララは',
        urara.sex,
        'の理解した「ほんとうの想い」を ',
        you.get_colored_name(),
        ' に捧げた。',
      ]);
      era.drawLine();
      await urara.print_and_wait([
        '見慣れた香りにゆっくり目覚めた ',
        you.get_colored_name(),
        ' も、担当の柔らかくて重い想いを、はっきり受け取っていた。',
      ]);

      era.printButton('「……！」', 1);
      await era.input();

      await urara.say_and_wait(
        'えへへ～ やっぱりトレーナーに見られちゃった。ごめんね、トレーナー！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' に見つかったウララは、いたずらがばれた子のように照れた笑みを浮かべる。いま',
        urara.teen_sex_title,
        'の頬に上った薄い羞恥は、いつにも増して愛おしい。',
      ]);
      await urara.say_and_wait(
        'うまく言えないけど、今のウララの、トレーナーへの気持ちには、これがいちばん似合うよ！',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の太腿に向かい合って座り、まだ不器用な小さな恋人は、真面目に気持ちを誓う。',
      ]);
      await urara.say_and_wait(
        'トレーナーに、口で伝えたいこと……今はうまく言えないけど、いつか絶対できるよ！',
      );
      await urara.say_and_wait(
        'だからトレーナー、もうちょっと待って。ウララを待ってて！',
      );
      await era.printAndWait([
        '感じたままを ',
        you.get_colored_name(),
        ' に懸命に話し、まだ育ちきっていない娘は、まだ言葉にならない想いを傾ける。',
      ]);
      await era.printAndWait([
        '全部うまく言えなくても、ウララが渡したい気持ちは、今の ',
        you.get_colored_name(),
        ' にはもう、胸の内ではっきりしている。',
      ]);

      era.printButton(
        '「わかってる。だから僕も、ウララを楽しみにしてる。」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '自分から',
        urara.teen_sex_title,
        'の手を取り、潤んだ桜の瞳を見つめ、',
        you.get_colored_name(),
        ' も迷わずウララに「大人の約束」を返した。',
      ]);
      await era.printAndWait([
        '今日の互いも、これからの互いも、今が始まりなのかもしれない。',
      ]);
      if (u_call_r || u_call_h) {
        era.println();
        await era.printAndWait([
          'ただ、トレーナー',
          you.adult_sex_title,
          'が視線を外した瞬間、小',
          urara.uma_sex_title,
          'の清らかな笑顔の奥を、見落としそうな暗い色が一筋走った。',
        ]);
        await era.printAndWait([
          '大好きな人の横顔を見つめ、',
          urara.teen_sex_title,
          'の頭に、いちばん場違いなときに、いちばん場違いな光景が浮かぶ。',
        ]);
        await era.printAndWait([
          '小さな',
          urara.sex,
          'がいちばん思い出したくない記憶。暴かれるたびに胸が締まり、脚が絡まり、他人の背中を見送るしかなかった記憶。',
        ]);
        if (u_call_r) {
          await urara.say_and_wait(
            [
              u_call_r,
              ' も、こうしてトレーナーが好きなんだ。なら ',
              u_call_r,
              ' も、きっとトレーナーにこうするよね。トレーナーに……好き、を伝える？',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              'トレーナーと歩く『',
              u_call_r,
              '』、トレーナーと親しむ『',
              {
                color: u_call_r.color,
                content: 'ライスさん',
                fontWeight: 'bold',
              },
              '』、トレーナーと影を重ねる『',
              {
                color: u_call_r.color,
                content: '黒い——',
                fontWeight: 'bold',
              },
              '』……！',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              'でも ',
              u_call_r,
              ' はそんな子じゃない。',
              u_call_r,
              ' はみんなの『英雄』だよ！',
              urara.sex,
              'はもう、トレーナーと約束してるはず……',
            ],
            true,
          );
        }
        if (u_call_h) {
          await urara.say_and_wait(
            [
              u_call_h,
              ' も、やっぱりトレーナーが好き。まだ幼稚なウララより、トレーナーのそばに似合うのかも。でも……',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '見たことのない顔の『',
              u_call_h,
              '』、トレーナーと抱き合う『',
              {
                color: u_call_h.color,
                content: 'キングさん',
                fontWeight: 'bold',
              },
              '』、トレーナーに近づいていく『',
              {
                color: u_call_h.color,
                content: '三流の——',
                fontWeight: 'bold',
              },
              '』……！',
            ],
            true,
          );
          await urara.say_and_wait(
            [
              '違う！ そんなんじゃない！',
              u_call_h,
              ' は誰より立派で、',
              u_call_h,
              ' こそトレーナーにふさわしいはず……',
            ],
            true,
          );
        }
        if (u_call_r && u_call_h) {
          era.println();
          await urara.say_and_wait(
            'あのふたりも、やっぱりトレーナーが好き……なのに苦しい……頭が痛いくらい苦しい……吐きそうなくらい苦しい……',
            true,
          );
          await urara.say_and_wait(
            'でもなんでウララが苦しいの。ウララは、嬉しいはずでしょ？',
            true,
          );
          await urara.say_and_wait(
            'なんでウララは、いちばんの友達を呪いたいの……嫉妬するなら、あとから来たウララに資格なんてないのに……？',
            true,
          );
        }
        era.println();
        await urara.say_and_wait(
          '後ろから割り込みたい。友達の好きを壊したい。本当に悪いことをしてる意地悪は……？',
          true,
        );
        await urara.say_and_wait(
          '何か忘れてる気がする。こんなはずじゃない。でもトレーナーはウララを待つって言った！ でもトレーナーは……！',
          true,
        );

        era.printButton('「ウララ？ どうしたの？ 具合悪い？」', 1);
        await era.input();

        await era.printAndWait([
          you.get_colored_name(),
          ' の呼びかけを聞いて、ウララの顔にあった、もともと見落としそうな濁りは、羽のように消えた。',
        ]);
        await era.printAndWait([
          '美しくはなく、いつか根で',
          urara.teen_sex_title,
          'の心を食う黒い種は、それでもウララの内側に埋まってしまった。',
        ]);
        await urara.say_and_wait('ごめん……でもウララ、もう……');
        await era.printAndWait([
          'ウララは前へ出て、',
          you.get_colored_name(),
          ' の差し出した手を握る。明るい笑顔の下、劣等感に満ちた詫びは、ふたりの後ろの風に消えた……',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  '89-1': (() => {
    const title = 'もう振り返らない決意';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} u_call_h ハルウララのキングヘイローへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      u_call_h,
      high_relation,
      has_lover,
    ) => {
      await urara.print_and_wait(
        'またそうなるよね。ウララが目を閉じたら、何か起きるんでしょ？',
      );
      await urara.print_and_wait(
        'でも静かな夜には何も起きない。ベッドで目を開けると、いつもの寮の部屋だよ。',
      );
      await urara.print_and_wait([
        '意外なお楽しみもないし、妄想の中でウララにああしたりこうしたりする ',
        callname,
        ' もいない。',
      ]);
      await urara.print_and_wait([
        'なんだか……嬉しくない？ でも夢の中で「一流」って言ってる ',
        u_call_h,
        ' 以外、興ざめする理由もないのに。',
      ]);
      await urara.print_and_wait(
        '寝る時間はとっくに過ぎてる。なのにウララはまた、変なこと考えて眠れない。',
      );
      await urara.print_and_wait([
        'このままだとすぐ、',
        callname,
        ' と気持ちいいことばかり考える悪い子になっちゃう。',
      ]);
      await urara.print_and_wait([
        'その前に、頭の中が ',
        callname,
        ' でいっぱいのバカになる方が先かも。',
      ]);
      era.println();
      if (era.get('exp:52:性爱次数') >= 10) {
        await urara.say_and_wait([
          'ぜ、全部 ',
          callname,
          ' のせいだよ！ こうなったの！',
        ]);
        await urara.print_and_wait(
          'ウララ、もともとスケベな悪い子だったの？ ウララでも、がっかりするよ。',
        );
        await urara.print_and_wait([
          'でも否定しても、ウララの体はもう ',
          callname,
          ' なしじゃいられない……',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          ' がウララともっと、もっと仲良くしてくれたら、ウララ、悪い子にならなかったかも？',
        ]);
        await urara.print_and_wait([
          'なのにウララの体はもう ',
          callname,
          ' の準備ができてるのに、',
          callname,
          ' はまだ冷たいまま。',
        ]);
        await urara.print_and_wait([
          'やっぱり ',
          callname,
          ' は、もっと大人っぽい方が好きなの？ ちょっと悲しいよ……',
        ]);
      }
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          'でもそれでも、',
          callname,
          ' のことが嫌いになりたくない。むしろウララは、',
          callname,
          ' を愛してるんだよ。',
        ]);
        await urara.print_and_wait([
          '「',
          urara.get_colored_name(),
          '」って',
          urara.uma_sex_title,
          'は ',
          callname,
          ' に夢中で、「恋人」じゃもう足りない。',
        ]);
        await urara.print_and_wait(
          'でももっと先に行ったら、すごく大事な関係になるよね？ 「恋人」の上は、夫婦でしょ？',
        );
        await urara.print_and_wait(
          'お母さんは自分から言わないけど、ウララにもわかる。人生のいちばん大事なことだよ。',
        );
        await urara.print_and_wait([
          callname,
          ' と肌を重ねる息が合っても、そんな勝手なお願いは、軽々しく出せない。',
        ]);
      } else {
        await urara.say_and_wait([
          'ウララ、前はよく自分を疑ってた。でも毎回、やっぱり ',
          callname,
          ' を愛してるって気づく。',
        ]);
        await urara.print_and_wait([
          '認めたくなくても、「',
          urara.get_colored_name(),
          '」は今、この落ち着かない想いを大切にするしかない。',
        ]);
        await urara.print_and_wait([
          'ウララがもう一段上って、',
          callname,
          ' をそばに縛れたら？ でもその上は……',
        ]);
        await urara.print_and_wait(
          '軽い気持ちで人と結ばれると、幸せにはなれない。お母さんはウララに、そう言った。',
        );
        await urara.print_and_wait(
          'でも今は、不幸になるとわかってても、継ぎはぎのこの日々を捨てられない。',
        );
      }
      era.println();
      urara.say(['じゃあ今の、', callname, ' との関係は……']);
      era.printButton('「ウララは、もう譲らない！」（関係を進める）', 1);
      era.printButton('「やっぱり、早すぎるよね……」（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.print_and_wait('決めた。ウララは、もう譲らない。');
        await urara.print_and_wait([
          'ウララはもう ',
          callname,
          ' の心に、自分だけの場所を持ってる。でも、それじゃ全然足りない。',
        ]);
        await urara.print_and_wait(
          'だってウララが選ばなくても、今の場所に止まり続けない。ウララがずっと子供じゃないのと同じ。',
        );
        await urara.print_and_wait([
          callname,
          ' の気持ちを考え続けるより、ウララから何かする。断られてもいい。',
        ]);
        await urara.print_and_wait(
          'これから先、良くても悪くても、ウララは大人みたいに勇気を出す。みんなができるなら、ウララも大丈夫！',
        );
        await urara.print_and_wait([
          '「恋人」だけの約束じゃなくて、ウララは ',
          callname,
          ' と、',
          you.actual_name,
          ' と、もっと約束したい——',
        ]);
        if (has_lover) {
          era.println();
          await urara.print_and_wait([
            'まずは、',
            callname,
            ' がうんでもだめでも、',
            callname,
            ' にもっと時間を分けてほしい。',
          ]);
          await urara.print_and_wait([
            'ウララは ',
            callname,
            ' をうまく責められないけど、これだけは、ちょっと怒ったふりできる！',
          ]);
          await urara.print_and_wait([
            callname,
            ' がみんなを好きな理由は、みんながもっと速く走るからでしょ？ これからのトレーニング、もっと頑張らなきゃ……',
          ]);
          era.drawLine();
          await inner_urara.say_as_unknown_and_wait([
            '恋心で闘志を上げ、',
            urara.teen_sex_title,
            'は心の中でこれからの計画を立て、考えごとを抱えたまま夢に入った。',
          ]);
          await inner_urara.say_as_unknown_and_wait(
            '今夜のウララは、ようやく勇気を出して、考えすぎて眠れない悩みを越えた。',
          );
          await inner_urara.say_as_unknown_and_wait([
            '小',
            urara.uma_sex_title,
            'がいつ動き出すにせよ、少し幼くても、それは合格の気持ちになる。',
          ]);
        }
      } else {
        await urara.say_and_wait([
          'そうだよ、今は早すぎる。',
          callname,
          ' も、うんとは言わない。',
        ]);
        await urara.print_and_wait([
          'でもウララも思わなかった。いつか ',
          callname,
          ' に断られるのが、こんなに怖いなんて。',
        ]);
        await urara.print_and_wait(
          '断られることを考えてないんじゃない。断られたあとが、怖い。',
        );
        await urara.print_and_wait([
          'こんな大事なことで断られたら、ウララは ',
          callname,
          ' と、今の関係を続けられるの？',
        ]);
        await urara.print_and_wait([
          'そのときはどうする？ ',
          callname,
          ' に頼んで、ウララをペットにしてもいいから、捨てないでって？',
        ]);
        await urara.print_and_wait(
          '本当にそうされたらって考えるだけで、体のざわつきが止まらない。ウララ、本当にひどい悪い子になっちゃった。',
        );
        await urara.say_and_wait([
          '先に体を落ち着かせなきゃ。明日も早起き……はぁ……',
          callname,
          '……',
        ]);
        await urara.print_and_wait([
          '過剰な不安と隠していた劣等感がいっしょに燃え、',
          urara.teen_sex_title,
          'は乱暴に、焦る体へ手を伸ばした。',
        ]);
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait([
          '少なくとも小',
          urara.uma_sex_title,
          'にとって、',
          callname,
          ' ともっと先へ行くには、今夜の心ではまだ足りない。',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          'はあ。',
          callname,
          ' がウララをそう扱うかは別として、勇気を出せばよかったのに……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-2': (() => {
    const title = '迷わなくなったあなた';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await urara.say_and_wait([callname, '、ここ、もう何もないよ。']);
      await era.printAndWait([
        'あとでまたあの結婚式の場を通りかかったとき、',
        urara.get_colored_name(),
        ' の促しに従い、',
        you.get_colored_name(),
        ' はもう一度柵越しに公園の中を見た。',
      ]);
      await era.printAndWait([
        '今度は芝生に、人が来た跡すらきれいに消えている。残っているのは、',
        urara.get_colored_name(),
        ' の小さな溜息だけが ',
        you.get_colored_name(),
        ' の耳に残ることだ。',
      ]);
      await era.printAndWait([
        '担当があまりに小さいせいで',
        urara.sex,
        'の目は見えなくても、頭の上の力ない耳から、',
        urara.sex,
        'の心は読める。',
      ]);

      era.printButton('「ウララ、中を一緒に見よう。」', 1);
      await era.input();

      await urara.say_and_wait('え？ うん……');
      await era.printAndWait([
        '驚いたあとは、少し上の空の返事。',
        urara.get_colored_name(),
        ' は素直に ',
        you.get_colored_name(),
        ' の歩幅に続き、低い柵を回った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' と並んで、あの新郎新婦を見送った芝生に立っても、小',
        urara.uma_sex_title,
        'の尻尾は、まだ乗らないまま揺れている。',
      ]);
      await era.printAndWait([
        '前回断られた傷心にまだ沈んでいるのか、',
        urara.get_colored_name(),
        ' は、いつもの元気を失ったみたいだ。',
      ]);
      await era.printAndWait([
        '当然だ。どれほど美しくても、ここは',
        urara.teen_sex_title,
        'が希望を抱いて、愛する人に自分から断られた傷の場所だ。',
      ]);
      await era.printAndWait([
        '今の ',
        urara.get_colored_name(),
        ' は、あの「待つ」約束すら、不安げに疑っているだろう。あのときの ',
        you.get_colored_name(),
        ' は、本当にだめな大人だった。',
      ]);
      await era.printAndWait(
        '少なくとも今は、愚鈍な大人が償い、担当の胸の空洞を埋め直す番だ。',
      );
      await era.printAndWait(
        '言いたいことはたくさんある。でも今言えるのは、やっぱり——',
      );

      era.printButton('自分からウララの手を取る。', 1);
      await era.input();

      await urara.say_and_wait('……あっ！');
      await era.printAndWait([
        'ふたりのいつもの息か、小',
        urara.uma_sex_title,
        'が長く待っていた予感か。',
        urara.get_colored_name(),
        ' は目を見開き、桜の瞳が驚きから喜びに変わる。',
      ]);
      await era.printAndWait([
        '触れた瞬間、',
        urara.get_colored_name(),
        ' は察した。これは恋人同士の仕草だけではない。',
        you.get_colored_name(),
        ' が約束を果たすときだ。',
      ]);
      era.println();

      if (high_relation) {
        await urara.say_and_wait(
          '想像してたのとは違うけど、やっと待てた。だからウララ、すごく満たされてるよ？',
        );
        await era.printAndWait([
          '一瞬で ',
          you.get_colored_name(),
          ' との距離がゼロになる。',
          urara.get_colored_name(),
          ' の、無邪気さの中に想いを溶かした顔が、今まででいちばん近い。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' はまた、いつもの寄り添う幸福を取り戻し、今は同じ緑の上で指輪をはめる花嫁のようだ。',
        ]);
        await era.printAndWait([
          '小さな',
          urara.sex,
          'に本物のヴェールも、みんなの祝福もなくても、今の',
          urara.sex,
          'は恋人の目の中の主役になれる。',
        ]);
        await urara.say_and_wait([
          callname,
          ' がもっと早かったらよかったのに。だからウララへの埋め合わせに、これからずっと一緒だよ？',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' の真摯な笑顔の前で、',
          you.get_colored_name(),
          ' もいちばんはっきりした答えを返す——',
        ]);
      } else {
        await urara.say_and_wait([
          'わざわざここまで戻って、',
          callname,
          ' って不器用だね。そんなこと、ウララが言うべきじゃないけど……',
        ]);
        await era.printAndWait([
          '喜びを必死に隠して、',
          urara.get_colored_name(),
          ' は輝く瞳を抑えようとする。でも跳ねる耳と尻尾は、下げられない。',
        ]);
        await era.printAndWait([
          '爽やかな緑の上で、約束が果たされた ',
          urara.get_colored_name(),
          ' の笑顔から、陰りが消えた。',
        ]);
        await era.printAndWait([
          'ふたりの想いと距離のバランスはまだ微妙でも、今の ',
          urara.get_colored_name(),
          ' の、伴侶になりたい願いは変わっていない。',
        ]);
        await urara.say_and_wait([
          'とにかく今度は、本当に決めたんでしょ！ もう後悔しないでね、',
          callname,
          '？',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' の、半分冗談の笑顔に、',
          you.get_colored_name(),
          ' もはっきりした答えを返す——',
        ]);
      }
      if (has_lover) {
        era.println();
        await urara.say_and_wait([
          'この調子だと、そのあとウララは ',
          callname,
          ' がもっとたくさんの子に約束するのも、見ちゃうかも……',
        ]);
        await urara.say_and_wait([
          '大丈夫だよ、ウララは ',
          callname,
          ' を許せるよ？ だってウララも、',
          callname,
          ' のお嫁さんだもん！',
        ]);
        await era.printAndWait([
          '突然、握った ',
          you.get_colored_name(),
          ' の手に',
          urara.uma_sex_title,
          'の力が入る。',
          urara.get_colored_name(),
          ' の笑顔に、誓った権利の暗示が混ざる。',
        ]);
        await urara.say_and_wait(
          'だから先でも後でも、トレーニングで言うこと聞かない子には、ちゃんと注意するからね？',
        );
      }
      era.printButton('「ごめん、ウララを待たせた！」', 1);
      await era.input();

      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '今のあなたは、もう戻れないわよ？',
      );
    };
    f.title = title;
    return f;
  })(),
  '89-3': (() => {
    const title = (urara) => ['約束を交わした', urara.sex];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_lover 熱恋以上の関係のチームメンバーがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_lover,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        'あの日、結婚式の場を通りかかったのは純粋な偶然だった。だが走る軌跡を変えるには、一度の偶然で足りる。',
      );
      era.drawLine();
      await era.printAndWait([
        '結婚式の場とは柵一枚。記憶の中の ',
        you.get_colored_name(),
        ' と',
        urara.uma_sex_title,
        'は、柵の外から、祝福の列を抜ける新郎新婦を見送っていた。',
      ]);
      await era.printAndWait([
        '何かを暗示するように、新郎新婦の一方は小さな',
        urara.uma_sex_title,
        '、もう一方は',
        urara.sex,
        'よりずっと大きな',
        you.phy_sex_title,
        'だった。',
      ]);
      await era.printAndWait([
        '記憶の中の ',
        urara.get_colored_name(),
        ' は黙ったまま、澄んだ桜の瞳に、一筋の憧れが走る。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' も、家庭を求める段階に入った。そんな倒錯した考えは、まっとうな大人が抱くものではない。',
      ]);
      await era.printAndWait([
        'でも仕方ない。小',
        urara.uma_sex_title,
        'の恋人になったのは他でもない、',
        urara.sex,
        'のトレーナーだ。',
      ]);
      await era.printAndWait(
        'では胸に手を当てて聞く。担当が恋人と家庭を築きたいと願うなら、トレーナーの準備はできているか。',
      );
      era.println();

      if (high_relation) {
        await urara.say_and_wait([callname, '、何考えてるの？']);
        await era.printAndWait([
          urara.get_colored_name(),
          ' はいつの間にかこちらを向き、いつものように心からの笑顔を ',
          you.get_colored_name(),
          ' に向ける。',
        ]);
        await era.printAndWait([
          '今の ',
          you.get_colored_name(),
          ' たちも、あの新郎新婦と大差ないのかもしれない。恋人の美しい笑顔を感じながら、',
          you.get_colored_name(),
          ' はそう確信した。',
        ]);
        await era.printAndWait([
          'だから今の ',
          urara.get_colored_name(),
          ' には、真面目な約束が必要だ。',
          urara.sex,
          'が「大人」と定義されているかどうかは関係ない。',
        ]);
      } else {
        await urara.say_and_wait([callname, '、気になることある？']);
        await era.printAndWait([
          '視線を戻した ',
          urara.get_colored_name(),
          ' は静かに ',
          you.get_colored_name(),
          ' を見、少し困ったようで、それでも嬉しい笑顔を浮かべる。',
        ]);
        await era.printAndWait([
          '小',
          urara.uma_sex_title,
          'は、場に合わない顔をよくする。理由がわからないと言ったら、自分でも信じないだろう。',
        ]);
        await era.printAndWait([
          'だが小',
          urara.uma_sex_title,
          'が憧れなのか不安なのか、あるいは両方なのか、それだけは今の ',
          you.get_colored_name(),
          ' には確認できない。',
        ]);
      }
      era.println();

      await urara.say_and_wait([
        callname,
        '、いつかウララも、白い長いスカート、着られる？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が前の問いに答える暇も、考える時間も与えず、桜色の小さな恋人がまた問う。',
      ]);
      await urara.say_and_wait([
        'ウララ、ほかにお願いはしないよ。でも ',
        callname,
        '、ウララの手、今まだ空いてるよ？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' を正面からは見ず、',
        urara.get_colored_name(),
        ' は狭い柵の向こうで、流れる未来を見るように、賑やかな結婚式を見つめている。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の小さな手は、静かに体の脇で待っている。白い紗も、光る輪もない。',
      ]);
      await era.printAndWait([
        urara.sex,
        'はそういうものを知っているはずだ。それでも小',
        urara.uma_sex_title,
        'が欲しいのは、掌と掌、そして小指を勾ける約束だけ。',
      ]);
      await era.printAndWait([
        'これから何が来ても、小さな',
        urara.sex,
        'はもう、',
        you.get_colored_name(),
        ' の答えを待つと決めている。',
      ]);
      inner_urara.say_as_unknown(
        `まだトレーナー${you.adult_sex_title}（あなた）を待つウララの前で、あなたの決断は……`,
      );
      era.printButton('ウララの手を握る。（関係を進める）', 1);
      era.printButton('今は、まだ準備ができていない。（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          ' との関係がどうなっているか、',
          you.get_colored_name(),
          ' はとうに知っている。',
        ]);
        await era.printAndWait([
          '測る必要もなく、',
          you.get_colored_name(),
          ' は恋人の小さな手を取る。',
          urara.get_colored_name(),
          ' の張り詰めた耳も、ようやく息を吐くように下がった。',
        ]);
        await era.printAndWait([
          'ただ合わせた掌が五指を重ね、小',
          urara.uma_sex_title,
          'の細い指が、少し照れながら ',
          you.get_colored_name(),
          ' の掌の中を擦る。',
        ]);
        await era.printAndWait([
          '返事をもらった ',
          urara.get_colored_name(),
          ' はまだ黙っている。だが今、正直な紅が',
          urara.sex,
          'の頬を染めている。',
        ]);
        await era.printAndWait(
          'あまりに小さな恋人の手を撫でると、胸の底に沈めていた背徳が、呼吸のたびに溢れそうになる。',
        );
        await era.printAndWait('約束の一言もない。これで、本当にいいのか。');
        era.println();
        if (high_relation) {
          await urara.say_and_wait([
            'そういうことなんだ。大人だから隠さなきゃいけないけど、',
            callname,
            ' の心は、まだウララに申し訳ないと思ってる。',
          ]);
          await urara.say_and_wait([
            '心配しなくていいよ？ ウララは最初から、',
            callname,
            ' との差なんて気にしてない。だから勇気を出して、自分から言えたんだよ。',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            ' はまだ ',
            you.get_colored_name(),
            ' に笑っている。少しはわかっている、という顔で、',
            you.get_colored_name(),
            ' のいちばん奥を撫でるように。',
          ]);
          await urara.say_and_wait([
            'これだけでいい！ ',
            callname,
            ' はずっと大変だったし、ウララは何もいらないよ？',
          ]);
          await urara.say_and_wait([
            callname,
            '、これからもよろしくね？ もっと先の立場で、だよ！',
          ]);
          await era.printAndWait([
            '結婚式の鐘が鳴り、桜色の笑顔が ',
            you.get_colored_name(),
            ' の視界を満たしていく。',
          ]);
          await era.printAndWait(
            'そうか。見えないところで、小さなウララはとっくに、人と一生を歩む準備を終えていた……',
          );
        } else {
          await urara.say_and_wait([
            '何を心配してるの、',
            callname,
            '？ もう何でもしてきたのに、ウララが後悔すると思ってる？',
          ]);
          await urara.say_and_wait([
            'しないよ！ ウララは知ってる、',
            callname,
            ' はけちんぼだって。だから ',
            callname,
            ' のそばに残って、自分で答えを探すよ？',
          ]);
          await era.printAndWait([
            'まだ ',
            you.get_colored_name(),
            ' を見ず、',
            urara.get_colored_name(),
            ' の視線は柵の向こうの空へ向かい、暮らしの果てを考えているみたいだ。',
          ]);
          await urara.say_and_wait([
            'それに、そういう人でも、',
            callname,
            ' の努力は見える。だからウララは、何も要らないよ。',
          ]);
          await urara.say_and_wait([
            'ひどいこと言うけど、ウララ、',
            callname,
            ' はちゃんとした約束、出せないと思うよ？',
          ]);
          await era.printAndWait([
            '結婚式の鐘が鳴り、小',
            urara.uma_sex_title,
            'は笑顔で ',
            you.get_colored_name(),
            ' を向く。顔には、吹っ切れた想いがある。',
          ]);
          await era.printAndWait([
            urara.sex,
            'のトレーナーがどんな人か知っていても、',
            urara.get_colored_name(),
            ' はそれでも、一緒に歩みたいのか……',
          ]);
        }
        era.println();
        await urara.say_and_wait([callname, '、ちょっと目を閉じて！']);
        await era.printAndWait(
          '緊張で震えながらも、申し合わせたように目を閉じる。続いて来るのは、式の主役たちと並ぶ抱擁と口づけだ。',
        );
        await era.printAndWait(
          'いつか、隔てられた平行線の外側のふたりも、二人の式の主役になれるかもしれない。',
        );
        await era.printAndWait(
          '未来が未知でも、誰も約束を口にしなくても、幸せが稀になっても。',
        );
        await era.printAndWait(
          '恋人が互いの決意を持った以上、手を繋いで前へ進むしかない。',
        );
        if (has_lover) {
          era.println();
          await urara.say_and_wait([
            'でも ',
            callname,
            ' って欲張りだね。これもウララの選択だけど、みんながウララを責めませんように。',
          ]);
          await urara.say_and_wait([
            'でもウララと ',
            callname,
            ' は、もう選んじゃった。もう遅いよ……',
          ]);
          await era.printAndWait([
            '親しんだあと、恋人の耳元に俯き、',
            urara.teen_sex_title,
            'の笑顔は少し苦かった。',
          ]);
          era.drawLine();
          await inner_urara.say_as_unknown_and_wait(
            'そうね。あなたは本当にひどい人。でも少し元気を出して。だって……',
          );
        } else {
          era.drawLine();
        }
        await inner_urara.say_as_unknown_and_wait('あなたは、もう戻れない……');
      } else {
        await urara.say_and_wait(
          '今は、まだだめなんだ……大丈夫だよ。ウララ、待ち続けるから！',
        );
        await era.printAndWait([
          '焦る待ちが実らず、まだ空の掌を丸め、',
          urara.get_colored_name(),
          ' は自分を慰めるように、もう一度口を開く。',
        ]);
        await urara.say_and_wait([
          'でもね、いつか ',
          callname,
          ' が決まったら……すぐウララに言ってね！',
        ]);
        await urara.say_and_wait(
          'だってウララも、すごく勇気を出して言ったんだから……',
        );
        await era.printAndWait([
          '大好きな ',
          callname,
          ' を見られず、影で赤くなった桜の瞳を隠し、',
          urara.get_colored_name(),
          ' の笑顔は、声の震えで悲しくなる。',
        ]);
        await urara.say_and_wait([
          'やっぱり、ちょっと苦しい……ウララ、本当に ',
          callname,
          ' と……',
        ]);
        await era.printAndWait('それから、作り笑いすら、だんだん砕けていく——');

        era.printButton(
          '「悲しまないで、ウララ。だめって言ってるんじゃない。今は、まだそのときじゃない。」',
          1,
        );
        await era.input();

        await urara.say_and_wait('……え？');
        await era.printAndWait([
          '思いのほか、',
          urara.get_colored_name(),
          ' の震える声が止まった。赤い目に、少し迷いがある。',
        ]);
        era.println();
        if (high_relation) {
          await urara.say_and_wait([
            'ウララ、',
            callname,
            ' がやっと飽きちゃったのかと思った。そうじゃないんだね……',
          ]);
          await era.printAndWait([
            '目尻の涙も拭かず、小',
            urara.uma_sex_title,
            'はすぐ安心して ',
            callname,
            ' に寄りつく。',
          ]);
          await era.printAndWait([
            '恋人の気配に安心しながら、',
            urara.get_colored_name(),
            ' は、嫌われる恐怖で暴走していた心を落ち着かせていく。',
          ]);
        } else {
          await urara.say_and_wait([
            callname,
            ' は、ウララを捨てるんじゃなかったんだ。なんだか嬉しい……',
          ]);
          await era.printAndWait([
            '目尻の涙をそっと拭き、',
            urara.teen_sex_title,
            'は、どう結論を出したのかわからない言葉を小さく言う。',
          ]);
          await era.printAndWait([
            'ただ、これまでの距離感なら、',
            urara.get_colored_name(),
            ' がそう考えるのも、意外ではないのかもしれない……',
          ]);
        }
        era.printButton(
          '「だからウララの言った通り、いいときが来たら、一番にウララに言うから！」',
          1,
        );
        await era.input();

        await urara.say_and_wait('じゃあ……約束だよ？');
        await era.printAndWait([
          '少し考えたあと、',
          urara.get_colored_name(),
          ' は笑って ',
          you.get_colored_name(),
          ' に小指を出す。',
        ]);

        era.printButton('「約束だよ！」', 1);
        await era.input();

        await era.printAndWait(
          '小指が重なるころ、結婚式場でも祝いの鐘が鳴り、人生でいちばん大事な約束を祝うみたいだった。',
        );
        await era.printAndWait([
          'こんな祝福があれば、',
          urara.sex,
          'と約束した日は、すぐ来るだろう。その日がどんな形で来るかは……',
        ]);
        await urara.say_and_wait([
          'でも ',
          callname,
          ' に断られて、これから先、',
          callname,
          ' のペットにされたら、それも……',
        ]);
        await urara.say_and_wait('ち、違う、な、なんでもないよ？');
        await era.printAndWait([
          '何も言ってないふりをする ',
          urara.get_colored_name(),
          ' を見ていると、約束の日が、いつの間にかまた遠のいた気がする……',
        ]);
        era.drawLine();
        await inner_urara.say_as_unknown_and_wait(
          'ここで止めた？！ いいえ……何でもない……',
        );
        await inner_urara.say_as_unknown_and_wait(
          'それにしても……あなた、どうしてそんなに慣れてるの？',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  90: (() => {
    const title = '譲らない想い';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan|false} u_call_r ハルウララのライスシャワーへの呼び方。恋慕が足りないときは false
     * @param {PrintedSpan|false} u_call_h ハルウララのキングヘイローへの呼び方。恋慕が足りないときは false
     */
    const f = async (urara, inner_urara, you, callname, u_call_h, u_call_r) => {
      await inner_urara.say_as_unknown_and_wait('……はあ。結局、こうなった……');
      await inner_urara.say_as_unknown_and_wait(
        '土さえあれば、埋められた種は根を張り、芽を出す。',
      );
      await inner_urara.say_as_unknown_and_wait(
        '心配しないで。ウララは優しいまま。ただ黒に絡まれた春色は、あなたの目に美しいかしら。',
      );
      era.drawLine();
      await urara.say_and_wait([callname, '、ここで待っててくれたんだ！']);
      await era.printAndWait([
        'いつもの元気とは違い、今日の ',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' のそばまで来ると、静かに長椅子の ',
        you.get_colored_name(),
        ' の隣へ座った。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が何かあったのか声をかけようとした瞬間、静かに笑う小',
        urara.uma_sex_title,
        'に、本格化した力で襟を掴まれる。',
      ]);
      await era.printAndWait([
        '続いて ',
        you.get_colored_name(),
        ' は、唇と歯の重なる優しさを感じ、担当の細く柔らかい舌先が不思議なほど防備をこじ開け、',
        you.get_colored_name(),
        ' の口の中へ入ってくるのを感じた。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は大胆に ',
        you.get_colored_name(),
        ' の内側を探る。細く香る舌先が、優しく強く歯と舌を撫で、小さく粘る水音を掻き混ぜる。',
      ]);
      era.println();
      if (era.get('exp:52:接吻次数') <= 10) {
        await era.printAndWait([
          '何が起きた。なぜこんなことを。ウララは ',
          urara.sex,
          '……',
        ]);
        await era.printAndWait([
          'いくつもの問いが ',
          you.get_colored_name(),
          ' の目の前を回る。自分を襲ったこの桜色は、本当に「',
          urara.get_colored_name(),
          '」なのか。',
        ]);
        await era.printAndWait([
          '口の中の体液と一緒に糊になった頭をどれだけ集中しても、今はもう答えが出ない。',
        ]);
        await era.printAndWait([
          'この体の本能に頼って恋人を押し倒した ',
          urara.get_colored_name(),
          ' は、満足げに全身を密着させ、',
          urara.sex,
          'の存在をさらに ',
          you.get_colored_name(),
          ' のすべてへ沈めていく。',
        ]);
      } else {
        await era.printAndWait([
          '酸素が足りず霞む視界の中、咲いた桜の瞳が近すぎる距離で、',
          you.get_colored_name(),
          ' の視界を全部占めている。',
        ]);
        await era.printAndWait([
          '思考は小',
          urara.uma_sex_title,
          'の柔らかな攻めに解け、力を吸われた体は、もう担当に抗えない。',
        ]);
        await era.printAndWait(
          '酸欠の幻覚のように、すべてを奪う前提で圧し掛かる小さな担当の目に、狂いかけた想いが滲む。',
        );
      }
      era.println();

      await era.printAndWait([
        urara.sex,
        'の気配を ',
        you.get_colored_name(),
        ' に焼き付けると決めるまで、小さな',
        urara.uma_sex_title,
        'は長く悩んだ。でもウララは、最後にわかった。',
      ]);
      await era.printAndWait(
        'この気持ちを信じても、信じなくても。恋人の人品を信じても、信じなくても。',
      );
      await era.printAndWait([
        callname,
        ' が人間の屑でもいい。',
        callname,
        ' が色鬼でもいい。',
        callname,
        ' が ',
        urara.get_colored_name(),
        ' を独占したいだけでも、関係ない。',
      ]);
      await era.printAndWait([
        'そういうことと……',
        urara.get_colored_name(),
        ' が、友達の恋人である ',
        callname,
        ' の唇を奪うことも、大差ないでしょう？',
      ]);
      await era.printAndWait([
        '小',
        urara.uma_sex_title,
        'はようやく深いキスからトレーナーを解放する。互いに押し合った舌先から、名残惜しげな糸が一本引ける……',
      ]);
      await era.printAndWait([
        '茫然として、少し息のできない ',
        you.get_colored_name(),
        ' の顔を見て、',
        urara.get_colored_name(),
        ' は無邪気さに色気を混ぜた笑顔を浮かべた。',
      ]);
      await urara.say_and_wait([
        'ごめんね、',
        callname,
        '。でも今のウララは、もう譲らない……',
      ]);
      await era.printAndWait([
        '詫びのかけらもない声が',
        urara.teen_sex_title,
        'の唇を低く通り、かつて',
        urara.sex,
        'が忌み嫌った友達への裏切りが、今は痛くも痒くもない。',
      ]);
      await urara.say_and_wait([
        'だってウララ、わかったから。思い出したから。全部、',
        callname,
        ' のせいだよ……',
      ]);
      era.println();
      if (u_call_r && u_call_h) {
        await inner_urara.say_as_unknown_and_wait([
          'トレーナー',
          you.adult_sex_title,
          'は欲張りね。ウララのいちばんの友達を持っておきながら、ウララまで欲しい。',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '以前の、まだ何もわからないウララなら、もっと苦しかったでしょう。今のウララは気にしない。',
        );
        await inner_urara.say_as_unknown_and_wait([
          'なのに今のウララは、',
          callname,
          ' に得意げな顔を見せている。なぜかしら。',
        ]);
      } else {
        await inner_urara.say_as_unknown_and_wait([
          'なぜトレーナー',
          you.adult_sex_title,
          'は、',
          u_call_r ? u_call_r : u_call_h,
          ' を受け入れたあとでも、こんなに軽くウララに接せるの。',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          'なぜ他人の愛を持ったあとでも、ウララまで胸に抱きたいの。',
        );
        await inner_urara.say_as_unknown_and_wait([
          'なぜウララはそれを知りながら、まだ笑って、そんなトレーナー',
          you.adult_sex_title,
          'と抱き合うの。',
        ]);
      }
      era.println();
      await urara.say_and_wait(
        [
          'だって ',
          callname,
          ' は大嘘つきで、ウララも、そんな大嘘つきが好きになっちゃった。',
        ],
        true,
      );
      await urara.say_and_wait(
        [
          callname,
          ' は、渡してはいけない気持ちをウララにくれた。本物かどうかに関係なく、受け取ってはいけないと知りながら自分のものにしたウララも、同じ罪。',
        ],
        true,
      );
      await urara.say_and_wait(
        'ウララ、卑劣な大人になるの？ これから卑劣な大人になるの？ ウララ、それは大事じゃないよ？',
        true,
      );
      await urara.say_and_wait(
        '子供みたいなウララが後から来たとして何？ 大間違いでも、同じ泥の中の人たちは、こんなウララよりどれだけ綺麗なの？',
        true,
      );
      await urara.say_and_wait([
        callname,
        ' がウララをこうしたんだから、',
        callname,
        ' もウララに、ちゃんと責任取って……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' がその言葉の意味を問う前に、小さな担当は手を伸ばし、細い人差し指で ',
        you.get_colored_name(),
        ' の唇を押さえた。',
      ]);
      await urara.say_and_wait(
        [
          'この意味、ウララに聞かないでね？ ',
          callname,
          ' なら、自分で答え見つけるでしょ？',
        ],
        true,
      );
      await urara.say_and_wait([
        '聞かないで、',
        callname,
        '。今は、ここまで……？',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        'の、ますます濁った桜の瞳とともに、不潔な想いに水をやられ、醜い種が妖しく卑劣な花を咲かせた……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' の ',
        {
          content: 'フェラ技巧',
          color: buff_colors[3],
        },
        ' が、さらに滑らかになった……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '大人の心の鍵';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '鍵は便利ね。開けることも、閉じることもできる。',
      );
      await inner_urara.say_as_unknown_and_wait(
        'でも一本の鍵は、たいてい合う錠にしか効かない。',
      );
      await inner_urara.say_as_unknown_and_wait(
        `では鍵を自分の手で${urara.sex}に渡す？ それとも${urara.sex}が少しずつ、あなたの鍵を盗むのを待つ？`,
      );
      await inner_urara.say_as_unknown_and_wait('……ん？ 大差ないかしら。');
      era.drawLine();

      await era.printAndWait([
        '見慣れた場所で静かに眠る担当を見て、',
        you.get_colored_name(),
        ' はほどよく歩幅を落とす。',
      ]);
      await era.printAndWait([
        '長い髪をほどいた小さな',
        urara.uma_sex_title,
        'は、温かい陽を借りて、遠慮なく長椅子に横たわり、静かに眠っている。',
      ]);
      await era.printAndWait([
        'また夜更かし？ 頑張りすぎ？ ',
        you.get_colored_name(),
        ' がそばに座っても、小',
        urara.uma_sex_title,
        'の寝た耳は、起き上がる気配がない。',
      ]);
      await era.printAndWait([
        '初めて会ったときと同じ。もう清らかではなくても、',
        urara.get_colored_name(),
        ' はまだ、大きくなっていない子供のように無防備だ。',
      ]);
      await era.printAndWait([
        '「赤ずきん」が、誰も',
        urara.sex,
        'を傷つけないと信じていても、いちばん近いトレーナーはとっくに',
        urara.sex,
        'の無垢な誘惑で「狼」になっている。',
      ]);
      await era.printAndWait(
        '整った制服の下、まだ熟しきらない小さな体は、実際にはとっくに快楽を追う本能に目覚めていた。',
      );
      await era.printAndWait(
        '丸く豊かな桜の唇が、呼吸に合わせて緩く開いている。誰かに味わってほしい、熟した実のようだ。',
      );
      await era.printAndWait([
        '朝夕を共にし、体を自由に見せびらかす「悪い',
        urara.child_sex_title,
        '」の前では、大人の理性も少しずつ制御を失う。',
      ]);
      await era.printAndWait([
        '細い手首を捉え、',
        you.get_colored_name(),
        ' は仕返しのように ',
        urara.get_colored_name(),
        ' を下に覆い、誘う',
        urara.sex,
        'へ体を沈めていく。',
      ]);
      await urara.say_and_wait([
        '……',
        callname,
        '、ウララはいいけど、ここでしたら、見つかるよ？',
      ]);
      era.println();
      if (high_relation) {
        await era.printAndWait([
          you.get_colored_name(),
          ' に長椅子へ押さえられた ',
          urara.get_colored_name(),
          ' はいつの間にか目覚めていた。抵抗はなく、むしろ ',
          you.get_colored_name(),
          ' に従い、また目を細める。',
        ]);
        await urara.say_and_wait([
          'でも ',
          callname,
          ' が欲しいなら、ウララの気持ちも体も、気にしなくていいよ？',
        ]);
        await era.printAndWait([
          '朦朧とした目が、温まる体で潤む。桜の髪をほどいた',
          urara.sex,
          'は、',
          you.get_colored_name(),
          ' のすべてを受け止められそうな母性を漂わせる。',
        ]);
        await urara.say_and_wait([
          '今のウララは、いつでも ',
          callname,
          ' の全部、歓迎するよ？',
        ]);
      } else {
        await era.printAndWait([
          '小',
          urara.uma_sex_title,
          'は緊張した目で、',
          urara.sex,
          'を犯そうとする ',
          you.get_colored_name(),
          ' を見る。形だけの抵抗のあと顔をそらし、',
          you.get_colored_name(),
          ' に体を任せる。',
        ]);
        await urara.say_and_wait([
          '……いいよ。何されても我慢する。',
          callname,
          '、早くしてね？',
        ]);
        await era.printAndWait([
          '目尻が緊張で潤んでも、小さな',
          urara.uma_sex_title,
          'は体に、乱暴に犯される覚悟を強いる。',
        ]);
        await urara.say_and_wait('一回だけなら、何でも受け入れるよ？');
      }

      era.printButton('「！」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        ' の献身の呟きの中で、溢れる欲を無実の恋人にぶつけようとした ',
        you.get_colored_name(),
        ' の方が、少し理性を取り戻す。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が担当に何を言うか迷っていると、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' のためらいに気づいて、安心して小さく笑った。',
      ]);
      await urara.say_and_wait([
        '元気出た、',
        callname,
        '？ 最近また疲れてるでしょ？ ウララは本当に大丈夫だよ！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の沈黙を受け取らず、恋人に押さえられたまま、',
        urara.get_colored_name(),
        ' は寂しそうに、関係なさそうな話を始める。',
      ]);
      await urara.say_and_wait([
        'ウララはまだちゃんと大人になれてないけど、',
        callname,
        '、『大人の鍵』、ウララにくれる？',
      ]);

      era.printButton('「『大人の鍵』？」', 1);
      await era.input();

      await urara.say_and_wait([
        'うん！ 最近、自分のトレーナーとそんなに親しくない子が、トレーナーの鍵をもらったんだって。',
      ]);
      await urara.say_and_wait([
        'ウララもびっくりしてたら、',
        urara.sex,
        'が予想外のことを言って——',
      ]);
      await urara.say_and_wait(
        '『トレーナーと仲いいウララが誘われてないの？ ウララ、まだ子供扱いされてるんじゃない』',
      );
      await era.printAndWait([
        '短い間、小',
        urara.uma_sex_title,
        'の笑顔に、幼い顔に似合わない複雑な気持ちが混ざる。',
      ]);
      await urara.say_and_wait([
        'だからウララ、考えてたんだ。今でもウララは、',
        callname,
        ' に子供扱いされてるのかなって。',
      ]);
      await urara.say_and_wait([
        callname,
        ' が大好きなウララは、いつ ',
        callname,
        ' の部屋に入れてくれるの？',
      ]);
      await urara.say_and_wait([
        'それとも、',
        callname,
        ' に押さえられても、ウララは……',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        'の焦りと寂しさの混ざった目を見つめ、',
        you.get_colored_name(),
        ' はやっと、',
        urara.get_colored_name(),
        ' が言いたかった経緯を理解した。',
      ]);
      await era.printAndWait([
        '体の強い',
        urara.uma_sex_title,
        'たちに、扉や窓は障害にならない。相手から受け取った物は、',
        urara.couple_title,
        'にとって象徴の意味の方が大きい。',
      ]);
      await era.printAndWait([
        'それでも、結果を負わずに動けるとしても、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の選択を尊重したい。',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        'はずっと、大好きな ',
        callname,
        ' が自分から',
        urara.sex,
        'を招く日を待っていた。今の ',
        you.get_colored_name(),
        ' は、',
        urara.sex,
        'を待たせすぎている。',
      ]);

      inner_urara.say_as_unknown(
        `今このとき、鍵はトレーナー${you.adult_sex_title}自身の手の中にある——`,
      );
      era.printButton(
        '「大事なことを忘れててごめん。待たせた……」（好感+10）',
        1,
      );
      era.printButton(
        '「そんなことはない。ただ、今はまだそのときじゃない……」',
        2,
      );
      const ret = await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' が口にする前に、',
        urara.get_colored_name(),
        ' は身を乗り出し、肌と肌で ',
        you.get_colored_name(),
        ' の答えを封じた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の歯をこじ開けることも、',
        you.get_colored_name(),
        ' の両手から逃げることもなく、ただ唇を重ねただけで、',
        urara.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の退路を全部塞いだ。',
      ]);
      await era.printAndWait([
        '数秒の親しさが何世紀にも伸びたみたいで、その長い一瞬の中で ',
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' の体を離した。',
      ]);
      await era.printAndWait([
        '余韻を残してゆっくり離れるころ、鍵はいつの間にか ',
        you.get_colored_name(),
        ' の手の中にあった。',
      ]);
      await era.printAndWait([
        '短い沈黙のあと、',
        urara.get_colored_name(),
        ' と気持ちを交わした ',
        you.get_colored_name(),
        ' は決心し、鍵を ',
        urara.get_colored_name(),
        ' の前へ押し出す。',
      ]);
      if (ret === 1) {
        await urara.say_and_wait(['——ありがとう、', callname, '！']);
        await era.printAndWait([
          you.get_colored_name(),
          ' が鍵を差し出した瞬間、',
          urara.get_colored_name(),
          ' も言わずもがな、',
          you.get_colored_name(),
          ' と同時に手を伸ばした。',
        ]);
        await era.printAndWait([
          '笑って ',
          you.get_colored_name(),
          ' の鍵を受け取り、小',
          urara.uma_sex_title,
          'は宝物のように、ごく普通の鍵を握りしめる。',
        ]);
        await era.printAndWait([
          '喜びを顔に出した ',
          urara.get_colored_name(),
          ' を見て、',
          you.get_colored_name(),
          ' も力を抜き、小',
          urara.uma_sex_title,
          'のほどけた髪を撫でる。',
        ]);
        await era.printAndWait(
          'いつか朝、台所で忙しなく動く桜色が見えるかもしれない。',
        );
        await era.printAndWait(
          'いつか帰り、迎えてくれる桜色が見えるかもしれない……',
        );
        await era.printAndWait([
          'とてもいい未来だ。今ただひとつ残念なのは、',
          you.get_colored_name(),
          ' が家のスペアキーがまだ元の場所にあるか、確信できないことだ……',
        ]);
        await urara.say_and_wait([
          'えへへ～ それにこれで、みんなにも自慢できる！ ',
          callname,
          ' の部屋には、いいものがたくさんあるんでしょ！',
        ]);
        await era.printAndWait('ああ、そういう目的もあったのか。');
        await era.printAndWait([
          'その後の日々、',
          you.get_colored_name(),
          ' は鍵を ',
          urara.get_colored_name(),
          ' に渡したことで、いろいろ言われた気がする。',
        ]);
        await era.printAndWait('理由は……胸にしまっておけばいい。');
      } else {
        await urara.say_and_wait([
          callname,
          ' にも ',
          callname,
          ' の考えがある。ウララ、わかるよ！ でもこれから、もっとウララに付き合ってね？',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' は笑って、',
          you.get_colored_name(),
          ' の差し出した鍵を押し返し、小さな手が ',
          you.get_colored_name(),
          ' の少し落ちた顔に伸びる。',
        ]);
        await urara.say_and_wait([
          'それにね、',
          callname,
          ' は笑ってる方が好き！',
        ]);
        await era.printAndWait([
          '小',
          urara.uma_sex_title,
          'は最初の、',
          callname,
          ' に断られた結果を受け入れ、笑いながらまた馬尾を結ぶ。',
        ]);
        await urara.say_and_wait('これからトレーニング行こう！ 今日は何する？');
        await era.printAndWait([
          '大事な人に断られても、',
          urara.get_colored_name(),
          ' はいつものように笑い、好きな人に',
          urara.sex,
          'を心配させまいとする。',
        ]);
        await era.printAndWait(
          'どうあれ、未来に機会はあっても、互いにとってかけがえのないふたりは、また心に近づく機会を逃した。',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          ' がひとりで髪を結ぶ後ろ姿は、少し寂しすぎる……',
        ]);
        await era.printAndWait([
          '当然、その後の日々、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' が沈みがちなのを、何人にも訊かれた。',
        ]);
        await era.printAndWait(
          '理由は……あのとき、もう少し素直ならよかった、だろう。',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  101: (() => {
    const title = '独占欲';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {string} self_name ハルウララの自称
     */
    const f = async (urara, inner_urara, you, callname, self_name) => {
      await inner_urara.say_as_unknown_and_wait(
        '小さなウララも嫉妬する。そういうことよ。',
      );
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' がトレーニング場の入口へ来たとき、突然飛び込んできた ',
        urara.get_colored_name(),
        ' に、思い切り抱きつかれた。',
      ]);
      await urara.say_and_wait([
        '今日も一緒にいて！ ',
        callname,
        ' がしたいなら、何してもいいよ？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' は正面から両腕でしっかり ',
        you.get_colored_name(),
        ' を捉え、',
        you.get_colored_name(),
        ' が視線を外して逃げる隙を、完全に消した。',
      ]);
      await era.printAndWait([
        '状況がまだ飲み込めない ',
        you.get_colored_name(),
        ' は、少し緊張したまま ',
        urara.get_colored_name(),
        ' の笑顔を受けるしかない。',
      ]);
      await urara.say_and_wait([
        'だから今日は、もっと ',
        self_name,
        ' に付き合って！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' に返事の暇も与えず、',
        urara.get_colored_name(),
        ' は少し現実感のない笑顔で、一方的に話を終えた。',
      ]);
      await era.printAndWait([
        'それから ',
        urara.get_colored_name(),
        ' は、予想外の力で ',
        you.get_colored_name(),
        ' を半ば引きずるように、トレーニング場を離れた。',
      ]);
      await era.printAndWait([
        '寂しすぎたのか。でも ',
        urara.get_colored_name(),
        ' がここにいたのは……偶然、だよね。',
      ]);
      await era.printAndWait([
        'ウララに先回りして待ち伏せされていた、など想像したくない。',
        you.get_colored_name(),
        ' は、そう信じたかった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
