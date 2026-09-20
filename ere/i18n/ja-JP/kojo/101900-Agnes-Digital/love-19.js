/**
 * @file アグネスデジタル - 恋慕
 * @author 片手虾好评发售中！
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { location_enum } = require('#/data/locations');

module.exports = {
  shine: (() => {
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await digital.say_and_wait('うふふ、えへへ！');
      await era.printAndWait([
        '訓練室の ',
        digital.get_colored_name(),
        ' は目を細め、',
        digital.uma_sex_title,
        'を想像しているらしい。通報されそうな笑い声を上げて、すごく嬉しそうだ。',
      ]);
      await you.say_and_wait('どうした？ そんなに嬉しそうだな');
      await digital.say_and_wait('次の応援、どうするか考えてたんだよ！');
      await era.printAndWait([
        'それから ',
        digital.get_colored_name(),
        ' は推論を一気に語った。要するに、応援は ',
        digital.get_colored_name(),
        ' に力をくれるから、応援も鍛錬だ、と。',
      ]);
      await era.printAndWait('ん？ 意外と一理ある？');
      await you.say_and_wait('それなら、俺も一緒に行くよ。');
      await era.printAndWait([
        you.get_colored_name(),
        ' も一緒に行くことにした。ついでに ',
        digital.get_colored_name(),
        ' のことも、もう少し知れる。',
      ]);
      await digital.say_and_wait(
        'え？ 試すのはいいけど……かなりオタク寄りだよ？ 疲れるよ？',
      );
      era.drawLine();
      await era.printAndWait([digital.sex, 'の言うとおりだった。']);
      await digital.say_and_wait(
        '阪神競馬場、来てよかった！！ すごいメイクデビュー！',
      );
      await digital.say_and_wait([
        '1着の',
        digital.uma_sex_title,
        'ちゃん、去年引退した',
        digital.elder_sibling_sex_title,
        'の意志を継いでデビューしたんだよ！ この継承感、熱すぎ！',
      ]);
      await era.printAndWait([
        'ただし ',
        you.get_colored_name(),
        ' にとっては、',
      ]);
      await digital.say_and_wait(
        '譲らない二人、中山の直線は短いんだよ！ わっ！',
      );
      await digital.say_and_wait(
        'うう……すごい、適性も理論も超えた、心からの競り合い、最高……',
      );
      await era.printAndWait('一日で、');
      await digital.say_and_wait(
        '大井のダートは、マイルが多い他場より、差し追込の好勝負が見やすい……',
      );
      await digital.say_and_wait([
        'その理論を無視して逃げを選んだ',
        digital.sex,
        'は、結果は負けたけど、嬉しそうに笑った',
      ]);
      await era.printAndWait('日本の競馬場をほぼ回り切るのは、');
      await digital.say_and_wait([
        '今回出た芦毛の',
        digital.uma_sex_title,
        '、前走までの成績は良くなかったのに、',
        digital.sex,
        'はまだ闘志を燃やして立ってる！',
      ]);
      await era.printAndWait('少し……きつい。');
      await digital.say_and_wait([
        '感じる?! ',
        digital.uma_sex_title,
        'ちゃんたちの熱！ 眩しさ！ 衝撃の連打！',
      ]);
      await era.printAndWait('感じた。濃い、熱い！');
      await era.printAndWait(
        '振る両腕はいつか感覚を失い、拍手した掌は腫れ、ゴールへ走る脚も一度修行を積んだ。',
      );
      await era.printAndWait([
        '隣の ',
        digital.get_colored_name(),
        ' は気力十分で、息一つ乱していない。',
        digital.sex,
        '……生まれつきこれ向きなのか？',
      ]);
      await digital.say_and_wait([
        'え？ ',
        callname,
        '、疲れた？ うん、加減を見誤った。やっぱり難しすぎたかな……',
      ]);
      await era.printAndWait(
        'レースが終わり、観客も散ったあとなら、座れる場所はある。',
      );
      await digital.say_and_wait([
        'やっぱりね、',
        digital.uma_sex_title,
        'ちゃんたちのあの気概が好きなんだ。',
        digital.couple_title,
        'の、元気いっぱいな姿が見たい。',
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        'に踏み荒らされたあとの馬場だけが残るのを見て、',
        digital.get_colored_name(),
        ' は、もう顔に出ていた本心を吐いた。',
      ]);
      await era.printAndWait([
        '場内を熱狂させ、空までひっくり返せそうな熱。それが',
        digital.uma_sex_title,
        '。',
      ]);
      await era.printAndWait([
        '両手に応援の場販をぶら下げて、',
        digital.get_colored_name(),
        ' の今日は収穫だらけだった。',
      ]);
      await digital.say_and_wait([
        '本当に楽しかった。',
        callname,
        ' が私のペースについてくるなんて！ もうコアなファンだよ！ さすが同志！',
      ]);
      await era.printAndWait([
        '嬉しそうな ',
        digital.get_colored_name(),
        ' を見ていると、',
        you.get_colored_name(),
        ' の今日の疲れも消えていった。',
      ]);
      await era.printAndWait('明日起きて腰が痛くなければいいが。');
    };
    f.title = '閃光、応援活動！';
    return f;
  })(),
  univ: (() => {
    const title = '宇宙でわかり合う';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {string} self_call アグネスデジタルの自称
     * @param {PrintedSpan} d_call_u アグネスデジタルのハルウララへの呼び方
     */
    const f = async (digital, you, callname, self_call, d_call_u) => {
      await digital.print_and_wait([
        digital.name,
        '、',
        digital.uma_sex_title,
        'ちゃんのためにこの世にいる',
        digital.uma_sex_title,
        '。今日も全力で推し活！',
      ]);
      await digital.print_and_wait([
        'いやいや、今日も聖地巡礼だ。',
        digital.uma_sex_title,
        'ちゃんたちが残した聖跡を、もう一度丁寧に磨き直す！',
      ]);
      await digital.say_and_wait([
        'おほほ、巡礼のついでに ',
        callname,
        ' へのお土産も買おう。',
      ]);
      await you.say_as_unknown_and_wait([
        'よくわからないけど、',
        callname,
        ' とは仲が良さそうだね。一緒に行ってみたら？',
      ]);
      await digital.say_and_wait([
        'は？ ',
        callname,
        ' と聖地巡礼？ おお……おおおお！',
      ]);
      await digital.print_and_wait([
        '想像したこともない道。',
        callname,
        ' と一緒？ 聖地巡礼！',
      ]);
      await digital.print_and_wait(
        'サバイバルにベア・グリルスを連れていくようなものだ！',
      );
      await digital.say_and_wait('ありがとう！ 今から誘いに行く！');
      era.drawLine();
      await era.printAndWait([
        '本当に予想外だった。',
        digital.get_colored_name(),
        ' が ',
        you.get_colored_name(),
        ' を聖地巡礼に誘ってくるとは。',
      ]);
      await era.printAndWait([
        '担当',
        digital.uma_sex_title,
        'のため、前回と同じく、',
        you.get_colored_name(),
        ' も覚悟を決めた。',
      ]);
      await era.printAndWait([
        '約束の集合場所へ時間どおり着くと、',
        digital.sex,
        'は ',
        you.get_colored_name(),
        ' に手を振って、気合十分だった。',
      ]);
      await era.printAndWait([
        'いつものピンクのインナーにグレーの上着。',
        digital.sex,
        'の性格なら「I Love UMA」とプリントしていてもおかしくない。',
      ]);
      await digital.say_and_wait([
        callname,
        ' が来るなんて！ 断られる覚悟はしてたのに……',
      ]);
      await you.say_and_wait('いやいや、いくらなんでも断らないだろ。');
      await digital.say_and_wait('じゃあ、始めるよ！ 聖地巡礼！');
      await era.printAndWait('大きく手を振って、電車へ続く大通りを指した。');
      era.drawLine();
      await era.printAndWait(
        'ごく普通の牧場に着いた。柵の中で牛がのんびり草を食べている。これが聖地？',
      );
      await digital.say_and_wait([
        'いやいや、',
        callname,
        '、表面だけ見ちゃだめ！',
      ]);
      await era.printAndWait('勢いよく指差したのは……草むら？');
      await era.printAndWait(
        '雑草が元気に茂っている。牧場主はあまり手入れしていないらしい。',
      );
      await you.say_and_wait('鏡花水月？ いつの話だ！');
      await digital.say_and_wait('実は指したかったのはこれ。');
      await era.printAndWait([
        digital.sex,
        'が手に取ったのは——四つ葉のクローバー。露までついている。',
      ]);
      await digital.say_and_wait([
        'そう！ 幸運の四つ葉を仲間やライバルに渡した',
        digital.uma_sex_title,
        'が何人いるか。競い合いながら祝福し合う、ううう——',
      ]);
      await you.say_and_wait(
        'いやいや、四つ葉と言えば神社だろ？ 雨の日の、鳥居に雨がかかる神社……',
      );
      await era.printAndWait('存在しないはずの記憶を口にした？');
      await digital.say_and_wait('！ まさか！');
      await digital.say_and_wait([
        callname,
        '！ わかってるね！ やっぱり聖地は、語り合ってこそ！',
      ]);
      era.drawLine();
      await digital.say_and_wait('次はここ。一見ただの公園だけど、実は——');
      await digital.say_and_wait('力に満ちた公園なんだ！');
      await era.printAndWait('ち……力？');
      await digital.say_and_wait([
        'そう！ 数えきれない',
        digital.uma_sex_title,
        'がここで集まり、休み、それに、あの砂場！',
      ]);
      await you.say_and_wait(
        'おおお？ 思い出した、Team Goldが訓練した砂場だろ？',
      );
      await digital.say_and_wait('そう！ それが……え？ 今……');
      await era.printAndWait('待って、Team Goldってどのチームだ？');
      await you.say_and_wait([
        'まあ、いい。あの屋台、',
        d_call_u,
        ' が出してなかったか？',
      ]);
      await digital.say_and_wait('おおおおお！');
      era.drawLine();
      await digital.say_and_wait(
        'うまい！ うまい！ これが王者ラーメン?! 王者すぎる！',
      );
      await era.printAndWait(
        '路地に隠れたラーメン店へ来た。外観も内装も、「隠れた名店」そのものだ。',
      );
      await digital.say_and_wait(
        '量も超えてる！ これを征服したのは、やっぱり王者だ！',
      );
      await you.say_and_wait(
        'この王者ラーメンより、秘密メニューのほうが気になる……',
      );
      await you.say_as_passer_by_and_wait('店長', [
        'おっ？ ',
        you.sex_code === 1 ? '兄ちゃん' : 'ねえちゃん',
        'やるな！ 秘密メニューまで知ってるとは！',
      ]);
      await era.printAndWait([
        'そばでざるを持って料理していた店長が、驚いて声をかけてきた。',
      ]);
      await digital.say_and_wait(
        '秘密メニュー？ なんで？ なんで私は知らないの？',
      );
      await era.printAndWait([
        '王者ラーメンを征服して興奮していた ',
        digital.get_colored_name(),
        ' は、それを聞いて毛まで逆立った。',
      ]);
      era.drawLine();
      await digital.say_and_wait(
        'いやっは、さっきのはちみつ特飲店も含めて、全聖地巡礼、達成！',
      );
      await era.printAndWait(
        '朝の一番の陽から夕方の夕陽まで、本当に一日中忙しかった。',
      );
      await you.say_and_wait('あちこち、一通り回ったな。');
      await digital.say_and_wait(
        'いやいや、こんなに長い応援、本当にお疲れさま。その勤勉さ、敬意を表する！',
      );
      await era.printAndWait('いやいや、敬礼まで始めるな。');
      await digital.say_and_wait(
        'それに、えへへ、無事に終わって本当によかった。',
      );
      await digital.say_and_wait(
        '実は最初、今までどおり一人で行くつもりだった。',
      );
      await digital.say_and_wait('でも……');
      await era.printAndWait([
        'それから',
        digital.sex,
        'の意外な経緯を聞いた。外で通りすがりの',
        digital.uma_sex_title,
        'に勧められて、',
        callname,
        ' を誘った、と……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はその名もなき',
        digital.uma_sex_title,
        'に心から感謝した。おかげで ',
        you.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' を、もっと知れた。',
      ]);
      await digital.say_and_wait(
        'いちばん幸運だったのは、実際にやってみたら、本当に！ 本当に楽しかったこと！',
      );
      await era.printAndWait('両手を広げて、本当に嬉しそうだ。');
      await digital.say_and_wait(
        'よかった。あなたにとって大事な休みなのに、事前の計画もなくて、断られると思ってた……',
      );
      await digital.say_and_wait('でも、これは大発見！');
      await digital.say_and_wait([
        'わかったんだ。',
        callname,
        ' と一緒に推しを追う、一緒に推し活する楽しさ！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' が特殊な趣味のせいであまり出さなかった本当の感情が、少しずつ ',
        you.get_colored_name(),
        ' に開かれていく。',
      ]);
      await digital.say_and_wait(
        'この宇宙に、一緒に応援してくれる人がいるなんて、思ってもみなかった……',
      );
      await you.say_and_wait('宇宙級かよ?!');
      await digital.say_and_wait(
        'あはは、見ての通り、今までは一人で応援してた。境界発言を聞いてもらえて、共感までしてもらえて、本当に……嬉しい',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' の両目が、きらきらしている。',
      ]);
      await digital.say_and_wait([
        '感動した！ 今言いたいことを、すぐ ',
        callname,
        ' に言いたい！',
      ]);
      await you.say_and_wait('いいよ、何でも言って。');
      await digital.say_and_wait('え！ 本当に何でも?!');
      await digital.say_and_wait('本当にいい？ 本当にいいの！ 約束だよ!');
      await digital.say_and_wait([self_call, '、境界発言、始めるよ！']);
      await digital.say_and_wait([
        'テレビの大画面で初めて',
        digital.uma_sex_title,
        'ちゃんの姿を見た瞬間にわかったあんなに眩しくて情熱的な',
        digital.sex_code === 1 ? '神さま' : '女神',
        'たちが一生の憧れだってそれから深淵に落ちたというか天国に昇ったというか毎日',
        digital.uma_sex_title,
        'ちゃんたちを奉って',
        digital.couple_title,
        'を応援して',
        digital.couple_title,
        'に喝采して',
        digital.couple_title,
        'の同人誌を作ってみんなに',
        digital.uma_sex_title,
        'ちゃんの素晴らしさを伝えてたまに授かった恵みのおかげでついにこの殿堂に身を置いて',
        digital.sex_code === 1 ? '神さま' : '女神',
        'たちと同じ世界にいられるというか同じ空気を吸う凡人なだけだけど',
        digital.couple_title,
        'は私を嫌わず不可侵のレース場で熱い勝負までさせてくれる高貴なのに汚れを嫌わないすべての全肯定の偉大な',
        digital.sex_code === 1 ? '神さま' : '女神',
        'たちでこんなに話したけどデジたんが言いたいのはただ',
        digital.uma_sex_title,
        'ちゃんは本当に最高だってこと！',
      ]);
      await era.printAndWait([
        '旋回、跳躍、低吟、高唱。',
        digital.get_colored_name(),
        ' は',
        digital.sex,
        'の生涯の力を使って、言いたいことを全部吐き出した。',
      ]);
      await era.printAndWait('この純度は、敬うほかない。');
      await digital.say_and_wait(
        'げほげほ、はははは、言えた……本当に……げほ……言い切った……',
      );
      await era.printAndWait([
        '激しく呼吸し、胸が上下する。疲れすぎたのだろう。',
        digital.get_colored_name(),
        ' は咳き込みながらよろけて、地面に座り込んだ。',
      ]);
      await digital.say_and_wait(['どう、', callname, '？ へへ……']);
      await era.printAndWait([
        '地面に座って手で体を支えているのに、',
        digital.sex,
        'はとても嬉しそうに笑っている。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' も',
        digital.sex,
        'のそばに座って、',
        digital.sex,
        'の体重を少し支えた。',
      ]);
      await you.say_and_wait(
        'すごくいい。こんなに元気な境界発言、三女神だって驚くよ。',
      );
      await digital.say_and_wait('へへへ、そう……');
      await digital.say_and_wait('本当に、宇宙級だね……');
    };
    f.title = title;
    return f;
  })(),
  oshi: (() => {
    const title = '推し';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} doto メイショウドトウ
     * @param {CharaTalk} palmer メジロパーマー
     * @param {CharaTalk} helios ダイタクヘリオス
     * @param {CharaTalk} taste アキカワヤヨイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} y_call_d プレイヤーのアグネスデジタルへの呼び方
     */
    const f = async (
      digital,
      teio,
      mcqueen,
      opera,
      doto,
      palmer,
      helios,
      taste,
      you,
      callname,
      y_call_d,
    ) => {
      teio.name = '子どもっぽい' + teio.uma_sex_title;
      opera.name = 'まったく気にしていない' + opera.uma_sex_title;
      doto.name = 'おっちょこちょいな' + doto.uma_sex_title;
      mcqueen.name = '薄紫の芦毛の' + mcqueen.uma_sex_title;
      palmer.name = '栗毛の' + palmer.uma_sex_title;
      helios.name = '青く染めたような' + helios.uma_sex_title;
      if (era.get('cflag:0:位置') !== location_enum.beach) {
        await taste.say_and_wait('合宿！ そう、そう！ これよ！');
        await era.printAndWait(
          'さすがあの理事長だ。今は夏季合宿の時期でもないのに、いきなりこれである。',
        );
      }
      await you.say_and_wait('合宿か。悪くないな。');
      await era.printAndWait([
        digital.uma_sex_title,
        'にとっては観光だけでなく、訓練という大事な環もある。夏休みの宿題と同工異曲だ。',
      ]);
      await era.printAndWait([
        '幸い、大半の',
        digital.uma_sex_title,
        'は訓練が好きだ。',
        you.get_colored_name(),
        ' の担当',
        digital.uma_sex_title,
        ' ',
        digital.get_colored_name(),
        ' も例外ではない。',
      ]);
      await era.printAndWait([
        'ただ ',
        digital.get_colored_name(),
        ' は、推したちと同じことをする行為そのものを楽しんでいる気がする。では',
        digital.sex,
        'は訓練そのものが好きなのか。',
      ]);
      await era.printAndWait([
        '到着前からそんな余計なことを考えているうちに、車輪が回り、金と碧が緑を覆い、',
        you.get_colored_name(),
        ' は合宿地へ着いた。',
      ]);
      await era.printAndWait('おお、さすがトレセン、条件がいい。');
      await era.printAndWait([
        '周りを見ると、あちこちに水着の',
        digital.uma_sex_title,
        '。',
        digital.get_colored_name(),
        ' は尊さで死にかけるだろう。訓練以前に、',
        digital.sex,
        '……生きて帰れるのか？',
      ]);
      era.drawLine();
      await era.printAndWait([
        'どどどん、',
        digital.get_colored_name(),
        ' が現れた。学校水着、いわゆるスク水。張りはほどよく、訓練にはいちばん都合がいい。',
      ]);
      await era.printAndWait([
        digital.sex,
        'は顔を上げて遠望し、景色を全部目に入れて、それから狂気の大吸気……',
      ]);
      await digital.say_and_wait('青空……白い雲……青春の風……');
      await digital.say_and_wait([
        'ここにいるすべての',
        digital.uma_sex_title,
        'ちゃん！ ああ！ 呼吸すら冒瀆……',
      ]);
      await digital.say_and_wait('こんなに不敬なのに、耐えられない、吸……');
      await era.printAndWait([
        you.get_colored_name(),
        ' を見て、吸いかけで咳き込んだ。むせた。',
      ]);
      await digital.say_and_wait(['げほげほ、', callname, ' だ！']);
      await digital.say_and_wait('わわわ、訓練しよう！ 準備はできてる！');
      await era.printAndWait([
        '大きく手を振るのはいつもの ',
        digital.get_colored_name(),
        ' だが、どこかおかしい？',
      ]);
      await you.say_and_wait('せっかく来たんだ。先に少し休まなくていいのか？');
      await era.printAndWait([
        'ちょうど、仲良さそうな二人の',
        digital.uma_sex_title,
        'が通りかかった。',
      ]);
      await palmer.say_and_wait('見てよ、アイス顔についたよ！ どうするの？');
      await helios.say_and_wait('えへ、じゃあ君が拭いてよ！');
      await era.printAndWait([
        'まさに定番。',
        digital.get_colored_name(),
        ' は目で追い、幸せそうに笑った。',
      ]);
      await helios.say_and_wait('今夜、夏祭りがあるらしいよ、見に行こう！');
      await palmer.say_and_wait('待って、なんで勝手に決めるの！');
      await era.printAndWait([
        '腹を撫でてごちそうさまと言っていた ',
        digital.get_colored_name(),
        ' が、急に顔を変えた。',
      ]);
      await digital.say_and_wait([
        'へへ……いいもの見た。いやいや！ うん！ ',
        callname,
        '！ 訓練するよ！',
      ]);
      await era.printAndWait([
        '胸を叩いて、必死に真面目に見せている。',
        digital.get_colored_name(),
        '、どうした？',
      ]);
      await era.printAndWait([
        digital.sex,
        'の真剣な目を見て、',
        you.get_colored_name(),
        ' も何も言えず、訓練を始めた。',
      ]);
      era.drawLine();
      await era.printAndWait(
        'ストップウォッチを押す。砂の上は芝ともダートとも違い、速度が落ちるのも当然だ。',
      );
      await you.say_and_wait('少し休もう。');
      await era.printAndWait([
        digital.sex,
        'に水とタオルを渡す。海辺で水はどこにでもあるが、汗は拭かないと。',
      ]);
      await era.printAndWait([
        'タオルを受け取り、',
        digital.get_colored_name(),
        ' が拭いているとき、また海の家のほうへ目が行った。',
      ]);
      await doto.say_and_wait('ごごごめんなさい！ ソース、かけてしまって！');
      await opera.say_and_wait(
        'ああ、私の輝きはそれで曇らない。瑕があるからこそ、より眩い！',
      );
      await era.printAndWait('うん、個性的な二人組だ。かなり有名でもある。');
      await digital.say_and_wait('ぐるぐる……うううう！');
      await era.printAndWait('エンジン始動の音……？');
      await digital.say_and_wait([
        'あ！ じゃあ！ ',
        callname,
        '！ 訓練する、往復十本走るよ！',
      ]);
      await era.printAndWait('片手を握って高く上げる。無理しすぎでは？');
      await era.printAndWait('こうしよう。');
      await you.say_and_wait(
        '今夜、近くで祭りがあるらしい。一緒に見に行かないか？',
      );
      await digital.say_and_wait('お……！ いいね、祭り、いいいい！');
      await era.printAndWait([digital.sex, 'を少し休ませたい。']);
      era.drawLine();
      await era.printAndWait(
        '頭上を縫う提灯が地磚を染め、道の両側の屋台も呼応してオレンジの灯をつけている。',
      );
      await era.printAndWait([
        '海辺の合宿なのに、着物を持ってきた',
        digital.uma_sex_title,
        'も少なくなく、この珍しい祭りを楽しんでいる。',
      ]);
      await digital.say_and_wait([
        'おいおい、じゃあ ',
        callname,
        '、どこから回る？',
      ]);
      await era.printAndWait(
        '一目で、りんご飴、たい焼き、チョコバナナなどの軽食、絵馬やお面の土産、それに風船割りなどのゲーム屋台。',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' はある地点に印をつけた。',
      ]);
      await era.printAndWait([
        '着物の',
        digital.uma_sex_title,
        '二人が金魚すくいをしていた。',
      ]);
      await era.printAndWait(
        '片方は素早く紙の杓子を一振りして金魚を掬い上げた。ただし代償は……',
      );
      await teio.say_and_wait(
        'ははは、金魚すくいは水すくいじゃないよ。見て、服まで濡れてる',
      );
      await mcqueen.say_and_wait('えええ?!');
      await digital.say_and_wait('す……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は長い息を吐いて、それから……',
      ]);
      await digital.say_and_wait(
        'じゃあじゃあ、どの店から回る？ いい屋台がいっぱいあるね！',
      );
      await era.printAndWait([
        '以前なら',
        digital.sex,
        'は目を輝かせて止まらなかったはずだ。',
      ]);
      await era.printAndWait('じゃあ、次は……');
      await you.say_and_wait('見たい場所がある。');
      era.drawLine();
      await era.printAndWait('熱い祭りから抜け出して、今は静かな海辺へ来た。');
      await era.printAndWait('後ろはオレンジ、前は青と白。');
      await era.printAndWait('存在しない埃を払って、砂浜に座った。');
      await era.printAndWait(
        '夜の浜は涼しいとは言えず、風は湿って重い。涼しいのは尻だけだ。',
      );
      await era.printAndWait([
        digital.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' を見て、同じく座り、気まずいまま月と海を見ている。',
      ]);
      await digital.say_and_wait([
        callname,
        ' がしたいことって、ここに座って海を見ること？',
      ]);
      await era.printAndWait('直接言おう。');
      await you.say_and_wait([y_call_d, '、何かあったのか？']);
      await digital.say_and_wait('え？ 何もないよ？');
      await era.printAndWait([
        'そう言うとき、',
        digital.get_colored_name(),
        ' は虚心そうに、無意識に手で胸のやり取りを遮っていた。',
      ]);
      await you.say_and_wait('やりたいことを抑えてるんじゃないか？');
      await era.printAndWait('そうじゃないだろ？');
      await digital.say_and_wait([
        'え！ ないよ、だって今日したいのは、',
        callname,
        ' と一緒に、',
        callname,
        ' がしたいことをすることだから！',
      ]);
      await you.say_and_wait('……なんでそこまで？');
      await digital.say_and_wait([
        'だって……',
        callname,
        ' はずっと私と応援に付き合ってくれたし……',
      ]);
      await era.printAndWait([
        '言いながら、',
        digital.get_colored_name(),
        ' はうつむいて、もじもじしている。',
      ]);
      await digital.say_and_wait('私の戯言も、ずっと聞いてくれて……');
      await era.printAndWait([
        'うつむいたまま、',
        digital.get_colored_name(),
        ' は目を ',
        you.get_colored_name(),
        ' へ向け、顔も赤い。',
      ]);
      await digital.say_and_wait(
        'こうして、応援ももっと面白くなった。毎日こんなに楽しいなんて思わなかった……',
      );
      await digital.say_and_wait([
        'もう ',
        callname,
        ' のいない一人推し活には戻れないよ！',
      ]);
      await era.printAndWait([
        '言っているうちに、',
        digital.get_colored_name(),
        ' は腰に手を当て、',
        you.get_colored_name(),
        ' のような同志がいることを誇らしげにしている。',
      ]);
      await digital.say_and_wait(['つまり、', callname, ' も大事な存在！']);
      await era.printAndWait([
        'すべての',
        digital.uma_sex_title,
        'を胸に置くように、',
        you.get_colored_name(),
        ' も胸に置いた。',
      ]);
      await digital.say_and_wait([
        'こんなにたくさんの',
        digital.uma_sex_title,
        'が、毎日熱い想いを抱いて走っている',
      ]);
      await digital.say_and_wait([
        'この世界はまさに、大',
        digital.uma_sex_title,
        'ちゃん尊死時代！',
      ]);
      await era.printAndWait([
        'きれいに指を振り、',
        you.get_colored_name(),
        ' を指した。',
      ]);
      await digital.say_and_wait([
        '前後左右、どこにも輝く',
        digital.uma_sex_title,
        'ちゃん！',
      ]);
      await digital.say_and_wait('いつ尊死するかわからない、戦場みたい');
      await digital.say_and_wait(
        'この戦場を一緒に走って、感動のクリティカルを受けて、喜びを分け合う',
      );
      await digital.say_and_wait('それが、戦友だよ！');
      era.drawLine();
      await digital.say_and_wait('でも、私はずっと支えられてるだけ？');
      await digital.say_and_wait(
        'それに甘んじるのは、闇を抱くことにならない？',
      );
      await digital.say_and_wait([
        'だから、私も ',
        callname,
        ' のために何かしたい。',
        callname,
        ' がしたいことを、私が叶える！',
      ]);
      await digital.say_and_wait('ほらほら！ 全力でいくよ！');
      await era.printAndWait([
        digital.get_colored_name(),
        ' が好きなことを抑えていないとわかって、',
        you.get_colored_name(),
        ' は安心し、同時に',
        digital.sex,
        'が ',
        you.get_colored_name(),
        ' のことを考えてくれているのが嬉しかった。',
      ]);
      await era.printAndWait([
        digital.sex,
        'は',
        digital.uma_sex_title,
        'への見返りを求めない愛を抱いて走ってきた。',
      ]);
      await era.printAndWait([
        'では、',
        you.get_colored_name(),
        ' がしたいことは何か。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' はその姿を応援したくて',
        digital.sex,
        'のトレーナーになった。したいのは……',
      ]);
      await you.say_and_wait('デジの、元気いっぱいな姿が見たい。');
      await era.printAndWait([
        digital.sex,
        'が応援で全力を出す姿、レースで誰にも止められない姿、',
      ]);
      await era.printAndWait([
        digital.sex,
        'が',
        digital.uma_sex_title,
        'を推して尊死する姿、',
        you.get_colored_name(),
        ' と',
        digital.uma_sex_title,
        'の話で止まらなくなる姿が見たい。',
      ]);
      await era.printAndWait([
        '万言は一言に帰す。',
        digital.sex,
        'の嬉しい顔が見たい。',
      ]);
      await digital.say_and_wait('私の、元気……いっぱい？');
      await digital.say_and_wait('推しへの私の気持ち……と同じ？');
      await you.say_and_wait('そうだ。');
      await era.printAndWait([
        'だが ',
        digital.get_colored_name(),
        ' は、まだ自信がない。',
      ]);
      await digital.say_and_wait(
        '私に……？ 花の植木鉢、メインボーカルのバックダンサーの私に？',
      );
      await digital.say_and_wait('いや、その、なんで？ まだ信じられないけど。');
      await digital.say_and_wait(
        'ちょっと……うっ、嬉しい、というか、光栄、というか、恥ずかしい？',
      );
      await digital.say_and_wait(
        '同人を出した絵師が感想をもらったときみたい？',
      );
      await era.printAndWait('実に適切だ。');
      await digital.say_and_wait('つまり……それは——');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は恥ずかしさで顔を隠した。それは——何だ、面白いな。',
      ]);
      await digital.say_and_wait('あの——');
      await digital.say_and_wait('推し活、続ける！ もう遠慮しないよ！');
      await era.printAndWait('やっと——');
      await digital.say_and_wait('全力で元気いっぱいになる！');
      await era.printAndWait([
        '知っている ',
        digital.get_colored_name(),
        ' だ。',
      ]);
      await digital.say_and_wait([
        'それそれ！ 早く',
        digital.uma_sex_title,
        'ちゃんエネルギーを摂取しよう！',
      ]);
      await digital.say_and_wait('GOGOGO！');
      await era.printAndWait('走ろう！');
      await era.printAndWait(
        '青い海も美しいが、やはりオレンジの灯がこの祭りには似合う。',
      );
      await era.printAndWait([
        '人のいない砂浜ではなく、',
        digital.get_colored_name(),
        ' と一緒に祭りのなかで跳ねる！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  49: (() => {
    const title = '定番の濡れ、ただし君のほう';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} d_call_t アグネスデジタルのアグネスタキオンへの呼び方
     * @param {PrintedSpan} t_call_d アグネスタキオンのアグネスデジタルへの呼び方
     */
    const f = async (digital, tachyon, you, callname, d_call_t, t_call_d) => {
      await era.printAndWait(
        'トレーナーの仕事は、普段の指導以外にも雑務がある。',
      );
      await era.printAndWait([
        '今日は',
        digital.uma_sex_title,
        'の休日だが、',
        you.get_colored_name(),
        ' は教学棟へ来て、',
        digital.uma_sex_title,
        'の事前出走資料を提出した。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が用事を終え、事務所を出ると、窓の外ではまばらに雨が降り始めていた。',
      ]);
      await era.printAndWait([
        '幸い、',
        you.get_colored_name(),
        ' は傘を持っていた。',
      ]);
      await era.printAndWait([
        '帰ろうとしたとき、',
        you.get_colored_name(),
        ' は廊下の下に立つピンクの影を見た。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' だ。耳を垂れ、元気がない。傘を持っていないらしい。作品でよくある一幕だ。',
      ]);
      await era.printAndWait([
        'だが不思議なことに、',
        you.get_colored_name(),
        ' は少し先の雨のなか、傘を差した ',
        tachyon.get_colored_name(),
        ' を見た。',
      ]);
      await you.say_and_wait('タキオンを呼ばないのか？');
      await digital.say_and_wait(['……え、わかるでしょ？ ', callname, '？']);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はいくつか手振りで示した。',
      ]);
      await era.printAndWait([
        '長く付き合って、',
        you.get_colored_name(),
        ' も ',
        digital.get_colored_name(),
        ' の性格がわかってきた。',
        digital.sex,
        'は ',
        tachyon.get_colored_name(),
        ' の邪魔をしたくないらしい。',
      ]);
      await you.say_and_wait('わかった。じゃあ俺の傘、一緒に差そう。');
      await digital.say_and_wait('ありがとう！');
      await era.printAndWait([
        'こうして ',
        you.get_colored_name(),
        ' は一本の傘の下に、',
        you.get_colored_name(),
        ' と ',
        digital.get_colored_name(),
        ' を隠した。',
      ]);
      await era.printAndWait(
        '雨は少し強くなり、いちばんの問題は風も強く、方向も定まらないことだ。',
      );
      await era.printAndWait([
        '雨は生き物みたいに、',
        you.get_colored_name(),
        ' の傘の傾きと逆側から入り込んでくる。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        digital.get_colored_name(),
        ' に雨を当てまいと、傘を ',
        digital.get_colored_name(),
        ' のほうへ傾けた。',
      ]);
      await digital.say_and_wait([
        callname,
        '、私が濡れるのはよくないけど、あなたの体は',
        digital.uma_sex_title,
        'より弱いでしょ？ 風邪ひいたら大変！',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' は怒っているのがわかる。耳まで後ろへ寝ている。',
      ]);
      await you.say_and_wait('それは……傷つくな。');
      await era.printAndWait([
        '空気を和ませ、',
        digital.get_colored_name(),
        ' とあはは言いながら歩き続けた。',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' は引かず、それでも',
        digital.sex,
        'を隠した。',
      ]);
      await era.printAndWait([
        '明らかに、強がった結果、訓練室へ戻ったとき ',
        you.get_colored_name(),
        ' の服は濡れていた。幸い ',
        digital.get_colored_name(),
        ' はほとんど濡れていない。',
      ]);
      await digital.say_and_wait(['あははは、', callname, '、動かないで。']);
      await era.printAndWait([
        'いやいや、このとき ',
        you.get_colored_name(),
        ' は気づいた。担当',
        digital.uma_sex_title,
        'の濡れはまずいが、担当',
        digital.uma_sex_title,
        'の前で濡れるのも、あまり良くない。',
      ]);
      await era.printAndWait([
        digital.get_colored_name(),
        ' はタオルを取って、',
        you.get_colored_name(),
        ' の頭の水滴を拭いた。',
      ]);
      await era.printAndWait(
        '服を脱いで体を拭き、乾いたタオルを体にかける。とりあえずの策だ。',
      );
      await you.say_and_wait('ありがとう。あとは自分でやる。');
      await era.printAndWait([
        'こうして体を拭かれると、',
        you.get_colored_name(),
        ' も多少気恥ずかしい。',
      ]);
      await era.printAndWait([
        'どうせ ',
        you.get_colored_name(),
        ' は大人だ。',
        digital.get_colored_name(),
        ' はうつむき、',
        you.get_colored_name(),
        ' には',
        digital.sex,
        'の表情が見えない。耳から判断する限り、不機嫌ではなさそうだ……',
      ]);
      await era.printAndWait('大丈夫、か？');
      era.drawLine();
      await digital.say_and_wait(
        'ふやあ、雨に濡れて風呂に入って布団に入る。いい睡眠を取ってこそ、明日も元気に推し活できる！',
      );
      await digital.print_and_wait([
        '同室の ',
        d_call_t,
        ' はまだ研究室らしい。いつもどおりだ。',
      ]);
      await digital.print_and_wait('あれ、日記、書き忘れた……');
      await digital.print_and_wait(
        'まあいいや、潜り込んで、今日の推し活を思い出して、明日の準備だ！',
      );
      await digital.print_and_wait([
        'うんうん、朝はまず',
        digital.uma_sex_title,
        'ちゃんが走った芝で福を味わって、昼は食堂で推し活エネルギーを摂取、午後は……',
      ]);
      await digital.print_and_wait([
        '午後……',
        callname,
        '……あれ、白い肌、うっすら形のある腹筋、水の滴る髪……',
      ]);
      await digital.print_and_wait('ちがうちがうちがう、デジ、何考えてるの！');
      await digital.print_and_wait([
        digital.uma_sex_title,
        'に好かれそうなタイプではある……',
      ]);
      await digital.print_and_wait(
        'いやいや、デジたん、既存の知識で解読しよう。同人、たくさん見たし、描いたし。',
      );
      await digital.print_and_wait('さあ、そのなかに答えを探そう！');
      await digital.print_and_wait([
        callname,
        ' が',
        digital.uma_sex_title,
        'を勧誘して、',
        digital.sex,
        'の才能を発掘する話でしょ！',
      ]);
      await digital.print_and_wait('それから、どうなったっけ？');
      await digital.print_and_wait([
        digital.uma_sex_title,
        'ちゃんが気づいて……',
      ]);
      await digital.print_and_wait('それから自家発電……');
      await digital.say_and_wait(
        'いやいや！ なんでそこにつながるの、いくらなんでも……',
      );
      await tachyon.say_and_wait([
        'おやおや、',
        t_call_d,
        '、何を言っているのかね？',
      ]);
      await digital.say_and_wait('ひぃ————！');
      await digital.print_and_wait([
        'どうやら ',
        d_call_t,
        ' の帰りが悪かった。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-first': (() => {
    const title = '記';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     */
    const f = async (digital, you, callname) => {
      await digital.print_and_wait([
        '今日は期待でいっぱいの、初々しい',
        digital.uma_sex_title,
        'ちゃんの選抜レース！ また女神たちの無限の可能性に感嘆！',
      ]);
      await digital.print_and_wait([
        'それから……変な人に出会った！ 出会ったと言うべきか、変と言うべきか……どうやら',
        you.sex,
        'は同好らしい。',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        '今日、デジたんはついに芝かダートかの問題を解決した！ あとで小さく祝おう。今は先に記録。',
      );
      await digital.print_and_wait([
        'あの人だ。',
        you.sex,
        'が完璧な案を出した！ まさに一語で夢から覚めた。',
      ]);
      await digital.print_and_wait([
        '最後、私は',
        you.sex,
        'の誘いを受け、',
        you.sex,
        'の担当',
        digital.uma_sex_title,
        'になった。',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        '本当に意外。',
        callname,
        ' が私と応援に来るなんて！',
      ]);
      await digital.print_and_wait(
        '今まで、私のペースについてこられる人がいるなんて思わなかった！',
      );
      await digital.print_and_wait('それから、たくさん行った。思い出すと……');
      await digital.print_and_wait([
        '今思うと、最後 ',
        callname,
        ' の顔色もあまり良くなかった。疲れ切ったみたい。',
      ]);
      await digital.print_and_wait([
        'それでも ',
        callname,
        ' は「同志」の称号に値する！',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        'それから、またたくさん行った。また来たまた来た、聖地巡礼！……',
      );
      await digital.print_and_wait(
        '推したちが行った場所、推したちにとって大事な場所へ行き、推したちの行いを真似する活動！',
      );
      await digital.print_and_wait([
        '信じられない、',
        callname,
        ' が私の誘いを受けて、一緒に付き合うなんて。',
      ]);
      await digital.print_and_wait(
        'ドーバー海峡みたいな共鳴、心臓が傷むみたいな共振！',
      );
      await digital.print_and_wait([
        'それにそれに、',
        callname,
        ' は知らない知識をたくさん知ってた！ 推したちのことを私より知ってるところも！ やっぱり、DD失格……',
      ]);
      await digital.print_and_wait([
        '最後、',
        callname,
        ' に境界発言した！ この宇宙に、それを聞いてくれる人がいるなんて。感動で自分を抑えられなかった……',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        '夏季合宿が近い。水着の',
        digital.uma_sex_title,
        'ちゃんたちが見られる！',
      ]);
      await digital.print_and_wait([
        '陽の下で、陽より輝くのは——',
        digital.uma_sex_title,
        'ちゃん！',
      ]);
      await digital.print_and_wait('飛び散るスイカ、誰の仕業だろう。');
      await digital.print_and_wait('速いバレー、誰が受けるだろう。');
      await digital.print_and_wait([
        'かき氷も、海鮮も、全部',
        digital.uma_sex_title,
        'ちゃんたちを引き立ててる！',
      ]);
      await digital.print_and_wait([callname, ' を誘って、一緒に遊ぼう！']);
      await digital.print_and_wait('……あ');
      await digital.print_and_wait([
        '（ノートの前のピンクの',
        digital.teen_sex_title,
        'は、筆を止めた）',
      ]);
      await digital.say_and_wait('私、ずっと自分のことばかり……');
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        'もし欲と',
        digital.uma_sex_title,
        'を天秤にかけたら、天秤は必ず右へ傾く。',
      ]);
      await digital.print_and_wait([
        'もし',
        digital.uma_sex_title,
        'と ',
        callname,
        ' を天秤にかけたら？',
      ]);
      await digital.print_and_wait(
        '認めたくないけど、デジの今までの行いを見る限り、心の天秤は左へ傾いている。',
      );
      await digital.print_and_wait([
        'だから少なくとも明日、夏季合宿では、',
        callname,
        ' がしたいことをしてあげよう。',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait('どう書けば……');
      await digital.print_and_wait('今思い出しても、まだ恥ずかしい……');
      await digital.print_and_wait(
        '本当に、デジたんは初めて知った。こんなに私を推してくれる人がいるなんて。しかもその人は、私のトレーナー。',
      );
      digital.print('——');
      await digital.print_and_wait('実は、あの日からおかしい気がする……');
      await digital.print_and_wait([
        callname,
        ' を見るだけで落ち着かなくて、どうしたらいいかわからない。',
      ]);
      await digital.print_and_wait(
        'わかる、だいたいわかる。だから、心の鼓動を感じるべきか、その訴えを無視すべきか？',
      );
      digital.print('……');
      era.println();
      await digital.print_and_wait([
        '白状しないと。私は ',
        callname,
        ' に気持ちがある。そう、あの、恋の気持ち。',
      ]);
      await digital.print_and_wait('よく考えると、ちょっとおかしくない？');
      await digital.print_and_wait([
        'デジたん、考えてみて。',
        callname,
        ' と一緒に推し活に出て、',
      ]);
      await digital.print_and_wait(
        '一緒に出かけて、映画を見て、祭りを回って、浜辺で気持ちを話す……',
      );
      await digital.print_and_wait('おかしくない？');
      await digital.print_and_wait('これ、デートじゃん?!');
      await digital.print_and_wait('（デートはそれだけの意味じゃないけど。）');
      await digital.print_and_wait([
        '実はとっくに ',
        callname,
        ' と付き合ってて、忘れてるだけ?!',
      ]);
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        'やばいやばい、昨日書いてなくて、今日思い出して万事休す！',
      );
      await digital.print_and_wait('これからどうしよう……');
      digital.print('……');
      era.println();
      await digital.print_and_wait('今日、');
      await digital.print_and_wait([
        'また ',
        callname,
        ' と巡礼した。',
        digital.uma_sex_title,
        'ちゃんたちは相変わらず眩しいのに、',
      ]);
      await digital.print_and_wait([
        callname,
        ' と座っていると、落ち着かなくて ',
        callname,
        ' を盗み見してしまう……',
      ]);
      await digital.print_and_wait([
        '今思うと、',
        you.sex,
        'はかなり格好いいし、その気概には敬服する！',
      ]);
      await digital.print_and_wait('……決めた。');
      digital.print('……');
      era.println();
      await digital.print_and_wait(
        '今日は今までと違い、朝にこの日記を書いている。',
      );
      await digital.print_and_wait(
        'デジ、できる！ いや、考えると、私に魅力なんてない？',
      );
      await digital.print_and_wait(
        '貧相な体……小さい体……普段の行いも、ごく普通……',
      );
      await digital.print_and_wait('違う、むしろ変態だ！');
      await digital.print_and_wait([
        digital.uma_sex_title,
        'の話になると止まらなくて、慣れた話題だとさらに速くなる。これ変態でしょ？',
      ]);
      await digital.print_and_wait([
        callname,
        ' 以外と、他の人と付き合うなんて無理でしょ？',
      ]);
      await digital.print_and_wait([
        'え、',
        callname,
        ' に出会えたのは幸運の極み。この村を過ぎたら店はない！ こんなに理解して優しくしてくれる人は、もういない！',
      ]);
      await digital.print_and_wait('デジよデジ、今すぐ動け！');
      await digital.print_and_wait(
        '逃したら、後半生は枕を抱えて布団をかぶって泣き叫ぶことになる？',
      );
      await digital.print_and_wait([
        callname,
        ' も私のことが好きでしょ？ でなきゃ一緒に応援しないでしょ？',
      ]);
      await digital.print_and_wait('よしよし、成功率は小さくない！');
      await digital.print_and_wait('行け行け、もう待つな！');
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        ' は携帯を見た。普通なら今は ',
        digital.get_colored_name(),
        ' がとっくに訓練を始めている時間だ。正式な訓練の時間にはまだ早いが……',
      ]);
      await era.printAndWait([
        '最近の ',
        digital.get_colored_name(),
        ' を思い返す。浜辺のあの話のあと、',
        digital.get_colored_name(),
        ' はだんだん ',
        you.get_colored_name(),
        ' を気にするようになった。',
      ]);
      await era.printAndWait([
        digital.sex,
        'は',
        digital.uma_sex_title,
        'ちゃんの応援以外にも、かなりいろいろなことを考えているらしい。',
      ]);
      await era.printAndWait([
        '考えているうちに、',
        digital.get_colored_name(),
        ' が遠くから走ってきた。',
      ]);
      await era.printAndWait('ん？ 顔が赤い？');
      await era.printAndWait('怪我したからでは？ 今日もいつもより少し遅い。');
      await you.say_and_wait('デジ！ 止まれ！');
      await digital.say_and_wait('え！');
      await era.printAndWait([
        '驚いて止まった ',
        digital.get_colored_name(),
        ' の前まで早足で行った。',
      ]);
      await era.printAndWait([
        'しゃがんで ',
        digital.get_colored_name(),
        ' の脚をよく見た。',
      ]);
      await digital.say_and_wait(['あの……', callname, '？']);
      await era.printAndWait('うん……少なくとも腫れはない……');
      await you.say_and_wait('脚、怪我したか？ 保健室へ行くか？');
      await digital.say_and_wait('え？');
      await era.printAndWait([
        'まずい、',
        digital.get_colored_name(),
        ' はまだ気づいていない。先に見ないと。',
      ]);
      await era.printAndWait(
        'まず膝。左手で外側の出っ張りを支え、右手で内側の靭帯を軽く押す。うん、硬い感じはない。',
      );
      await digital.say_and_wait('あの、ちょっと……');
      await era.printAndWait(
        'それから太もも。大腿二頭筋も大腿直筋も、よく弛んでいる。',
      );
      await digital.say_and_wait('先に……止めて？');
      await you.say_and_wait('止められるか！');
      await era.printAndWait('次はふくらはぎ。状態は完璧に見える。');
      await era.printAndWait(
        '最後は足。靴を脱がないと。このまま脱いだら、傷があれば二次被害になる……',
      );
      await digital.say_and_wait([callname, '！ 問題ないよ！']);
      await you.say_and_wait('じゃあ今日、なんでそんなに変なんだ？');
      await era.printAndWait([
        'まだ中腰のまま顔を上げて ',
        digital.get_colored_name(),
        ' の顔を見る。さらに赤い。',
      ]);
      await digital.say_and_wait('あのね……先！ 先に訓練室で説明する！');
      await you.say_and_wait('でも……');
      await digital.say_and_wait('……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' は黙ったまま ',
        you.get_colored_name(),
        ' を見つめている。',
      ]);
      era.drawLine();
      await you.say_and_wait('じゃあ、説明できるか？ 脚は大丈夫なんだな？');
      await digital.say_and_wait('あの……先に言うね、脚は絶対大丈夫。');
      await you.say_and_wait('……じゃあなんで……');
      await era.printAndWait([
        digital.get_colored_name(),
        ' はうつむいて指をいじり、一語ずつしか出せない。',
      ]);
      await digital.say_and_wait('実は……私……あれから……え……');
      await era.printAndWait([
        '途中まで言って、',
        digital.get_colored_name(),
        ' はまたため息をついた。',
      ]);
      await you.say_and_wait('先に俺が話そう。');
      await you.say_and_wait('ここじゃ話しにくい。外へ出よう。');
      await digital.say_and_wait('……あ。');
      await era.printAndWait(
        '立ち上がり、訓練室の扉を開け、訓練場へ行き、スタンドへ上る。',
      );
      await era.printAndWait([
        'コース。朝の陽は、勤勉に訓練する',
        digital.uma_sex_title,
        'へのいちばんいいコーヒーだ。',
      ]);
      await digital.say_and_wait(['あの、', callname, '？']);
      await you.say_and_wait('次の場所へ行こう。');
      await digital.say_and_wait('え？');
      await era.printAndWait([digital.get_colored_name(), ' はついてくる。']);
      await era.printAndWait('川辺。正午の陽を受けた川が眩しい。');
      await digital.say_and_wait([callname, '、もしかして……']);
      await era.printAndWait(
        '神社。午後の斑な木陰が、ちょうど参拝の場を隠す。',
      );
      await digital.say_and_wait('……');
      await era.printAndWait('公園。太陽が退勤する前に、灯が早出退勤した。');
      await digital.say_and_wait('……');
      await era.printAndWait('海辺。灯のない青い海岸は月明かりだけ。');
      await digital.say_and_wait('……');
      await digital.say_and_wait('一周ついてきて、もうどうでもよくなった。');
      await you.say_and_wait('それでいい。');
      await digital.say_and_wait([callname, '。']);
      await you.say_and_wait('うん。');
      await digital.say_and_wait('好きです。');
      era.print(['この瞬間、', you.get_colored_name(), ' の選択：']);
      era.printButton('受け入れる', 1);
      era.printButton('断る', 2);
      const ret = await era.input();
      await digital.print_and_wait([
        'みっともないな。告白まで ',
        callname,
        ' に導いてもらうなんて。',
      ]);
      if (ret === 1) {
        await digital.print_and_wait('でも、成功した。');
        await digital.print_and_wait('そう、成功した。');
        await digital.print_and_wait(
          'もっと喜ぶべきなのに、今の感覚はもっと……',
        );
        await digital.print_and_wait('溢れる幸福感。');
      } else {
        await digital.print_and_wait('はははは、結局、失敗した。');
        await digital.print_and_wait([
          'でもわかった。私と ',
          callname,
          ' の関係は、男女関係だけじゃない。',
        ]);
        await digital.print_and_wait('もっと複雑な感情がある……');
        await digital.print_and_wait(
          'たくさん考えて、書きたいことも多いのに、筆が動かない……ノートまで濡れた……',
        );
        await digital.print_and_wait('やっぱり悔しい……');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '74-after': (() => {
    const title = '一度ダメなら二度目。当然でしょ！';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (digital, you) => {
      await digital.print_and_wait(
        'デジよデジ、こんなに経って、ようやく苦しい深淵から這い出した！',
      );
      await digital.print_and_wait(
        'でも考えると、やっぱり！ 好き！ 好きでたまらない！',
      );
      await digital.print_and_wait(
        'だから、もう一度！ 今度こそデジ、成功する！',
      );
      era.print(['もう一度、', you.get_colored_name(), ' の選択は：']);
      era.printButton('受け入れる', 1);
      era.printButton('断る', 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.print_and_wait('うあああああ！ できた！');
        await digital.print_and_wait('なんで？');
        await digital.print_and_wait('どうでもいい、できたことが大事！');
      } else {
        await digital.print_and_wait('いや、おかしくない？');
        await digital.print_and_wait('うああああ、だめ！');
        await digital.print_and_wait('デジだって、追求はある！');
        await digital.print_and_wait('絶対に、勝ち取る！');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-first': (() => {
    const title = '同棲！ やっぱりこうなるよね？';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} mcqueen メジロマックイーン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} machan マチカネタンホイザ
     * @param {CharaTalk} tarumae ホッコータルマエ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} y_call_d プレイヤーのアグネスデジタルへの呼び方
     * @param {string} child プレイヤーの子どもへの呼び方
     * @param {string} parent プレイヤーと子どもとの関係
     */
    const f = async (
      digital,
      mcqueen,
      coffee,
      tachyon,
      machan,
      tarumae,
      you,
      callname,
      y_call_d,
      child,
      parent,
    ) => {
      await era.printAndWait(
        '忙しい一日を終えて家へ帰り、台所から匂いがして、誰かが鼻歌を歌っているなら、それは大型トラックに轢かれて記憶を消された偶然だ。',
      );
      await era.printAndWait([
        'では、いつから ',
        y_call_d,
        ' は鍵を持って、',
        you.get_colored_name(),
        ' の家へ来るようになったのか。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' ははっきり覚えている。ある夜、ある浜辺で、',
        y_call_d,
        ' が ',
        you.get_colored_name(),
        ' に告白し、それから順当に、',
        y_call_d,
        ' は ',
        you.get_colored_name(),
        ' の恋人になった。',
      ]);
      await era.printAndWait('実際……付き合っても、平日の行いと大差ない……');
      await era.printAndWait('相変わらず一緒に推し活、一緒に聖地巡礼。');
      await era.printAndWait('それから？');
      await digital.say_and_wait('だめ、これじゃ違いがない！');
      await digital.say_and_wait('前の予想が正しかった？ 違う！');
      await era.printAndWait([
        'うん……変化を出すために、',
        y_call_d,
        ' はある同人誌を参照して、',
        you.get_colored_name(),
        ' から鍵を借りたらしい。',
      ]);
      await era.printAndWait(
        '借りたものの、最初の数日は何も起きなかった。一時の気分かと思って、その件は脇へ置いた。',
      );
      await era.printAndWait([
        'だからある日、',
        you.get_colored_name(),
        ' が疲れた体を引きずり、やっと鍵を穴に差して意識が漂っているとき、金属の摩擦以外の音を聞いて、少し意外だった。',
      ]);
      await era.printAndWait([
        'そのあと、',
        y_call_d,
        ' が ',
        you.get_colored_name(),
        ' の家へ来る頻度はどんどん上がった。',
      ]);
      await era.printAndWait(
        'もともと単調だった家の気配に、別の色が混ざっていく。',
      );
      await era.printAndWait([
        'ただ ',
        you.get_colored_name(),
        ' がいちばんおかしくて笑いたかったのは、最初に ',
        you.get_colored_name(),
        ' の部屋を占領したのが……',
      ]);
      await era.printAndWait([
        '各種',
        digital.uma_sex_title,
        'グッズだったこと。',
      ]);
      await era.printAndWait([
        'たとえば ',
        tachyon.get_colored_name(),
        ' の紅茶カップ、',
        coffee.get_colored_name(),
        ' のコーヒーカップ、',
        mcqueen.get_colored_name(),
        ' のマウスパッド、',
        machan.get_colored_name(),
        ' のぬいぐるみ……',
      ]);
      await era.printAndWait([
        'なかでも ',
        you.get_colored_name(),
        ' が驚いたのは、とまチョップのぬいぐるみまであったこと。',
        tarumae.get_colored_name(),
        ' のいる苫小牧のあのマスコットだ！',
      ]);
      await era.printAndWait([
        'ある日、家で ',
        y_call_d,
        ' が乾燥機を部屋に置こうと運んでいるのを見て、',
        you.get_colored_name(),
        ' はもう限界だと思った！ 重い拳を出すときだ！',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' には世が最も珍しいとする ',
        y_call_d,
        ' のグッズもある。勝利の旗や原型のぬいぐるみなど……だがたいてい訓練室か、公式の保管だ。',
      ]);
      await era.printAndWait([
        '行くぞ！ スーパーへ行って、',
        y_call_d,
        ' のグッズを全部何セットも買う！',
      ]);
      await era.printAndWait('店員に家の前まで運ばせる！');
      await era.printAndWait([
        '満足げに ',
        y_call_d,
        ' の各レースの英姿を見直す。ぬいぐるみはソファに一つ、ベッドに一つ、パソコンに一つ、テレビに一つ……',
      ]);
      await era.printAndWait([
        'それからずっと秘蔵していた ',
        y_call_d,
        ' の作品を、隠れた隅からソファのそばへ出す……',
      ]);
      await era.printAndWait([
        'はははは、完成！ 今すぐ ',
        y_call_d,
        ' の顔が見たい！',
      ]);
      await era.printAndWait('だが結果は——');
      await era.printAndWait([
        y_call_d,
        ' への衝撃が大きすぎて、',
        you.get_colored_name(),
        ' は',
        digital.sex,
        'の両頬がどんどん赤くなり、どん、と倒れるのを見るしかなかった。',
      ]);
      await era.printAndWait('こうした面白い話以外、平日の生活はもっと淡い。');
      await era.printAndWait(
        '淡々として、炊飯器を開けたあとに立つ白い湯気のご飯みたいだ。',
      );
      await era.printAndWait([
        'だから ',
        you.get_colored_name(),
        ' と ',
        y_call_d,
        ' の子どもが生まれたとき、喜び以外に、もうこんなに経ったのかと急に気づいた。',
      ]);
      await era.printAndWait([
        digital.sex_code === 1 ? '自分' : y_call_d,
        ' の妊娠に気づいた記憶も、ぼんやりとして捉えにくく、一筋の温かい流れだけが残っている。',
      ]);
      await era.printAndWait([
        '最初から',
        child,
        'は手がかからず、',
        y_call_d,
        ' や各種',
        digital.uma_sex_title,
        'グッズを見ると落ち着く。たまに ',
        y_call_d,
        ' を真似て変な声を出すだけだ。',
      ]);
      await era.printAndWait([
        child,
        'は ',
        y_call_d,
        ' に似て、小さいころから',
        digital.uma_sex_title,
        'が好きで、特にテレビの前で ',
        y_call_d,
        ' のライブを見るのが好きだ。',
      ]);
      await era.printAndWait([
        'というより ',
        you.get_colored_name(),
        ' が',
        parent,
        'として、よく ',
        y_call_d,
        ' の録画を流していたからか？',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' と',
        child,
        'が録画を見ているたび、',
        y_call_d,
        ' は最初、蒸気機関になって部屋に逃げて加湿していたが、のちには ',
        you.get_colored_name(),
        ' に寄り、',
        child,
        'を抱いて一緒に見るようになった。',
      ]);
      await era.printAndWait([
        'ともかく、',
        child,
        'は丁寧な世話のなかで、健康に育った。',
      ]);
      await era.printAndWait([
        digital.uma_sex_title,
        'は成長が速い。あっという間に、',
        digital.sex,
        'はトレセン学園へ入る年になった。',
      ]);
      await era.printAndWait([
        y_call_d,
        ' と相談した。',
        y_call_d,
        ' は、',
        child,
        'の',
        digital.uma_sex_title,
        '好きを見る限り、一人で開幕式に出したら大事になりそうだと思っている。',
      ]);
      await era.printAndWait([
        'それでも、これは',
        digital.sex,
        '自身で味わったほうがいいと決めた。',
      ]);
      await era.printAndWait([
        'だが送り出す前夜、',
        y_call_d,
        ' はまた荷物を整え、さらに物資を詰め込もうとした。',
      ]);
      await era.printAndWait([
        '家はトレセンからこんなに近い。',
        you.get_colored_name(),
        ' はトレセンのトレーナーだ。',
        child,
        'はいつでも会える。それでも ',
        you.get_colored_name(),
        ' も、必需品が足りないのではと悩んでいた。',
      ]);
      await era.printAndWait([
        y_call_d,
        ' も笑って、これでは永別みたいだ、と言った。',
      ]);
      await era.printAndWait([child, 'は大声で泣き、二人は長いあいだ慰めた。']);
      await era.printAndWait([
        'だが明日は今日になる。今は',
        digital.sex,
        'が学園へ行くときだ。',
      ]);
      await era.printAndWait(
        '夜の霧はまだ散らず、遠い空はわずかに赤い。街灯さえまだ点いている。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' と ',
        y_call_d,
        ' は荷物を持ち、',
        child,
        'と一緒に階下へ来た。',
      ]);
      await era.printAndWait([
        child,
        'は自分で下ろすと言い張ったが、',
        you.get_colored_name(),
        ' も ',
        y_call_d,
        ' も手を離さない。',
      ]);
      await era.printAndWait(['言い勝てず、', child, 'も諦めた。']);
      await era.printAndWait([
        '目の前は',
        digital.uma_sex_title,
        '専用道だ。この道を行けばすぐにトレセンへ着く。',
        digital.uma_sex_title,
        'なら、タクシーすら要らない。',
      ]);
      await era.printAndWait([
        '荷物を置く。量は多くないが、',
        you.get_colored_name(),
        ' にはかなり重い。',
        y_call_d,
        ' のほうが、ずっと多く持っていた。',
      ]);
      await era.printAndWait([
        'ああ、昨夜あまり寝られず、朝早く起きて荷物を運んだ。',
        you.get_colored_name(),
        ' は少しぼんやりしている。',
      ]);
      await era.printAndWait([
        y_call_d,
        ' は心配そうに体で ',
        you.get_colored_name(),
        ' を支えた。だが',
        digital.sex,
        'の目を見て、',
        you.get_colored_name(),
        ' は',
        digital.sex,
        'も寝不足だとわかった。',
      ]);
      await era.printAndWait([
        'どうした？ ',
        you.get_colored_name(),
        ' は周りを見た。',
        child,
        'は？',
      ]);
      await era.printAndWait(['おおお！ ', y_call_d, ' の隣にいる。']);
      await era.printAndWait([
        child,
        'は ',
        y_call_d,
        ' をきつく抱き、それから ',
        you.get_colored_name(),
        ' もきつく抱いた。',
      ]);
      await era.printAndWait([
        'とても軽い。きつく抱かないと',
        digital.sex,
        'の存在を感じない。成長期の',
        digital.sex,
        'もあまり高くなく、',
        y_call_d,
        ' と同じだ。',
      ]);
      await you.say_as_passer_by_and_wait(child, 'じゃあ、行くね！ さよなら！');
      await era.printAndWait(['手を振って、', child, 'は走り出した。']);
      await era.printAndWait('えっ！ 待って、荷物まだだ！');
      await era.printAndWait([
        '焦って ',
        y_call_d,
        ' に追わせようとしたが、',
        y_call_d,
        ' は',
        child,
        'の遠くのほうを見ているだけだった。',
      ]);
      await era.printAndWait('待って！ どうした？');
      await digital.say_and_wait([
        callname,
        '、',
        child,
        'はトレセンにいるんだから、あとで',
        digital.sex,
        'のところへ届ければいいでしょ？',
      ]);
      await you.say_and_wait([
        '違う、',
        y_call_d,
        '、',
        child,
        digital.sex,
        '！ ',
        digital.sex,
        '……',
      ]);
      await era.printAndWait(
        'いつも通る交差点が封鎖され、いつも行く店が潰れ、いつも遊ぶゲームがサービス終了するような……',
      );
      await era.printAndWait([
        '万年変わらないと思っていたものが突然消える、あの荒唐さで、今 ',
        you.get_colored_name(),
        ' の内側がいっぱいになった。',
      ]);
      await era.printAndWait(['目を凝らすと、', child, 'の姿はもうなかった。']);
      await you.say_and_wait([
        y_call_d,
        '！ これは、どういうことだ！ なんで……',
      ]);
      await digital.say_and_wait(
        '聞いたよ。幻想だとか、病気だとか、霊現象だとか……',
      );
      await digital.say_and_wait([
        '世間では精神の病だと言われてる……感染経路は不明で、範囲は',
        digital.uma_sex_title,
        'と接触した人だけ……',
      ]);
      await era.printAndWait(
        'じゃあ……なんで……作られたのは、引き離すためだけなのか？',
      );
      await era.printAndWait([
        'ぼんやりしているとき、',
        you.get_colored_name(),
        ' は気づいた。',
        y_call_d,
        ' は今、トレセンのほうを見て、もう一言も言わない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' ははっとした。',
        y_call_d,
        ' と ',
        you.get_colored_name(),
        ' の気持ちは同じだ。',
      ]);
      await era.printAndWait([
        '平日、トレーナーとして ',
        y_call_d,
        ' を支えてきた ',
        you.get_colored_name(),
        ' を、今度は',
        digital.sex,
        'が支えている。',
      ]);
      await era.printAndWait([
        digital.sex,
        'はできるだけ穏やかな口調で、',
        you.get_colored_name(),
        ' の寂しさを薄めようとした。後ろから ',
        y_call_d,
        ' を抱くと、',
        y_call_d,
        ' が震えていた。',
      ]);
      await era.printAndWait('もともと小さな体が、さらに脆く見える。');
      await era.printAndWait('石が静かな湖面に落ち、大波を立てた。');
      await digital.say_and_wait('……ううう……');
      await digital.say_and_wait('私……とっくにわかってた……');
      await digital.say_and_wait('実は……私……デジたん……とっくに……');
      await digital.say_and_wait(
        'ある期間の記憶が、あんなにぼやけていると気づいたとき……',
      );
      await digital.say_and_wait('家の育児用品が減らないと気づいたとき……');
      await digital.say_and_wait('昔描いた同人誌を開いたとき……');
      await digital.say_and_wait('あのとき……もうわかってた……');
      await digital.say_and_wait([
        callname,
        ' を愛しすぎて……それ以上、踏み込めなかった……',
      ]);
      await digital.say_and_wait(['それに……', callname, ' も影響を受けて……']);
      await digital.say_and_wait(['だから……', child, 'が生まれた……']);
      await digital.say_and_wait(['それが', digital.sex, 'の全部……']);
      await era.printAndWait([
        y_call_d,
        ' の詰まった声のなかで、',
        you.get_colored_name(),
        ' はようやくわかった。',
        child,
        'は ',
        y_call_d,
        ' の願いの産物だ。',
      ]);
      await digital.say_and_wait([
        'もし……さっきのことを忘れれば……また',
        child,
        'に会える……',
      ]);
      await digital.say_and_wait([
        'もし……覚えていたら、',
        child,
        'は……本当に消える……',
      ]);
      await digital.say_and_wait(
        'ふふふ……つまり、現実と向き合うかどうかの選択……これこそ精神の病そのものじゃない……',
      );
      era.printButton('覚える（関係を進める）', 1);
      era.printButton('忘れる（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await you.say_and_wait('違う！');
        await you.say_and_wait([
          child,
          digital.sex,
          'は君の想像じゃない！ ',
          digital.sex,
          'は、私たちの愛の象徴だ！',
        ]);
        await era.printAndWait([
          '二人が足を止めたとき、',
          child,
          'が ',
          y_call_d,
          ' と ',
          you.get_colored_name(),
          ' の手を引いた。',
        ]);
        await you.say_and_wait([
          child,
          digital.sex,
          'が教えてくれた。もう、もっと近くへ行くときだ！',
        ]);
        await era.printAndWait([
          y_call_d,
          ' の体を向けると、涙が止まりかけていた目が、また潤んだ。',
        ]);
        await digital.say_and_wait('つまり？');
        await you.say_and_wait([y_call_d, '、結婚しよう。']);
        await digital.say_and_wait(
          'ははは……これを心配してた私、本当に馬鹿だね……',
        );
        await era.printAndWait([
          y_call_d,
          ' は笑った。目の涙は真珠になり、',
          you.get_colored_name(),
          ' がいちばん大切にするものだ。',
        ]);
        await era.printAndWait([you.get_colored_name(), ' は口づけた。']);
        await era.printAndWait('塩辛い。');
        await era.printAndWait('興奮の涙だろう。');
        await era.printAndWait('苦い。');
        await era.printAndWait('悔しさの涙だろう。');
        await era.printAndWait('……甘い。');
        await era.printAndWait('もう、涙ではないのだろう。');
        await era.printAndWait('舌が交わり、体が寄り、手が絡む。');
        await era.printAndWait(['もう誰も、二人を引き離せない。']);
      } else {
        await era.printAndWait(
          'すべての出来事は悪夢のようで、実際には何も起きていない。',
        );
        await era.printAndWait([
          '二人の',
          child,
          'は普通にトレセンへ入学し、',
          you.get_colored_name(),
          ' は',
          parent,
          'として',
          child,
          'のトレーナーにもなった。',
        ]);
        await era.printAndWait([
          y_call_d,
          ' は',
          digital.sex_code === 1 ? '父親' : '母親',
          'として、よく',
          child,
          'と一緒に訓練する。',
        ]);
        await era.printAndWait(
          '大小（大きいほうも小さいが）が並んで訓練する姿は、珍しい画だ。',
        );
        await era.printAndWait([
          child,
          'の成長を考えて、',
          you.get_colored_name(),
          ' は',
          digital.sex,
          'にトレセンへ泊まってほしかった。',
        ]);
        await era.printAndWait([
          'だが',
          digital.sex,
          'はまだ親を恋しがる。言い勝てず、当分は家へ帰すことにした。',
        ]);
        await era.printAndWait([
          'すべて普通だ。',
          child,
          'が初期の ',
          y_call_d,
          ' みたいによく尊死する以外は。うん……',
          y_call_d,
          ' も今、だいたい同じだが。',
        ]);
        await era.delay(1000);
        era.println();
        await digital.say_and_wait('……');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  '89-after': (() => {
    const title = '結局は、夢幻の泡';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {string} child プレイヤーの子どもへの呼び方
     */
    const f = async (digital, you, callname, child) => {
      await you.say_and_wait([
        '週末だ。忙しい合間に',
        child,
        'の顔を見に行かないか？',
      ]);
      await you.say_and_wait([
        '学生寮の前まで来て、',
        child,
        'に電話しようとしたら……',
      ]);
      await digital.say_and_wait(['え？ ', callname, '、ここで何してるの？']);
      era.printButton(`${child}を待ってるんだ。`, 1);
      await era.input();
      await era.printAndWait([
        'その言葉を聞いた ',
        digital.get_colored_name(),
        ' は、なぜかうつむいた。',
      ]);
      await digital.say_and_wait(
        ['……もう、そのとき？ また ', callname, ' に真実を……'],
        true,
      );
      await digital.print_and_wait('どうすれば……');
      era.printButton('伝える（関係を進める）', 1);
      era.printButton('伝えない（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await digital.say_and_wait(
          '私……また伝えれば、涙だけが来ると思ってた——',
          true,
        );
        await digital.say_and_wait(
          [
            'でも、この感じ……',
            callname,
            ' に抱かれて求婚される感じ……本当によかった……',
          ],
          true,
        );
      } else {
        await digital.say_and_wait([
          'まあ、このままでいい。',
          callname,
          ' と',
          child,
          'との毎日は、とても楽しい',
        ]);
        await digital.say_and_wait('こんな毎日が続いてほしい。許して。', true);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '手紙';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} y_call_d プレイヤーのアグネスデジタルへの呼び方
     * @param {string} child プレイヤーの子どもへの呼び方
     */
    const f = async (digital, you, callname, y_call_d, child) => {
      await you.say_as_unknown_and_wait('デジ先生の新刊、出るらしいよ');
      await you.say_as_unknown_and_wait(
        'え？ 本当？ こんなに空いて、ついに新刊？',
      );
      await you.say_as_unknown_and_wait('来月、東京の即売会だよ！');
      era.println();
      await era.printAndWait('だから……誰が流した噂だ！');
      await era.printAndWait([
        '数日でネットが発酵し、今やデジ先生のファンは全員、来月 ',
        y_call_d,
        ' が新刊を出すと思っている。',
      ]);
      await era.printAndWait([
        y_call_d,
        ' がそれらの投稿を見たときの第一反応は……罪悪感だった。',
      ]);
      await digital.say_and_wait(
        'よく考えると……本当にしばらく新刊出してない……あああ、本当に申し訳ない。',
      );
      await era.printAndWait(
        '画面に向かって頭を下げ、画面の外のファンに謝る。',
      );
      await era.printAndWait([
        'それから ',
        y_call_d,
        ' は振り返り、',
        you.get_colored_name(),
        ' の手を引き、目に涙を浮かべて、今にも泣きそうな顔をした。',
      ]);
      await era.printAndWait([
        'またこれか、と ',
        you.get_colored_name(),
        ' は思う。',
      ]);
      await era.printAndWait([
        'つまり',
        digital.sex,
        'は籠る。これからの家事は全部 ',
        you.get_colored_name(),
        ' がやり、料理もだ。',
      ]);
      await era.printAndWait(
        'たいして疲れない。ただ、この日々には少し足りない……',
      );
      await era.printAndWait([
        y_call_d,
        ' からのエネルギー。',
        y_call_d,
        ' を吸えない、髪を触れない、耳を揉めない、尻尾を噛めない……',
      ]);
      await digital.say_and_wait('お願い！');
      await you.say_and_wait('君のことはわかってる。');
      await era.printAndWait('結局、引き受けた。今まで断ったことがあるか？');
      era.drawLine();
      await era.printAndWait([
        '掃除のなか、肩と背の酸っぱさが ',
        you.get_colored_name(),
        ' に、鍛えるべきだと知らせる。',
      ]);
      await era.printAndWait(
        '掃いて、拭く。床拭きロボットを買おうと思ったが、展示棚までは届かないと気づく。',
      );
      await era.printAndWait([
        'そう、',
        you.get_colored_name(),
        ' の家でいちばん掃除が大変なのは展示棚だ。たくさんの棚、たくさんのグッズ。',
      ]);
      await era.printAndWait('まあ、羽箒で軽く払えばいい。');
      await era.printAndWait([
        '突然、白い写真が ',
        you.get_colored_name(),
        ' の目を引いた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' に温かい気持ちを起こさせるのは、',
        you.get_colored_name(),
        ' と ',
        y_call_d,
        ' の結婚写真だ。',
      ]);
      await era.printAndWait([
        '純白の',
        digital.sex_code === 1 ? 'スーツ' : 'ウェディングドレス',
        'がピンクの',
        digital.uma_sex_title,
        'を飾り、頭の赤いリボンは存在感を示し、繊細な首、守りたくなる手、そして涙を含んだ灰青の両目。',
      ]);
      await era.printAndWait([
        'そんなに経っていない気がするのに、',
        digital.sex_code === 1 ? 'スーツ' : 'ウェディングドレス',
        'の ',
        y_call_d,
        ' は目の前にいるようで、何年も過ぎた気もする。',
      ]);
      await era.printAndWait([
        'ともかく、この結婚写真を見て、',
        you.get_colored_name(),
        ' はかなりエネルギーを補給できた。',
      ]);
      await era.printAndWait('大事な思い出のついたものだけ、掃除すればいい。');
      await era.printAndWait([
        '扉を開けて収蔵室へ入る。巨大な全方位透明の棚がいくつか並び、各種',
        digital.uma_sex_title,
        'の各種グッズで埋まっている。',
      ]);
      await era.printAndWait([
        'この部屋はもともと客間だった。',
        y_call_d,
        ' の収集が増え、居間の展示棚だけでは足りなくなり、一部屋を空けてグッズを置いた。',
      ]);
      await era.printAndWait([
        'ついでに言えば、',
        you.get_colored_name(),
        ' が以前集めた ',
        y_call_d,
        ' のグッズは、いちばん奥の棚にある。',
      ]);
      await era.printAndWait([
        'ああ、',
        digital.sex,
        'と言い負けて、「あわわわ！ だめだめ、やっぱり恥ずかしすぎる！」と言われ、ここに置いた。',
      ]);
      await era.printAndWait([
        y_call_d,
        ' のグッズの棚の前へ来る。さまざまな姿の ',
        y_call_d,
        ' を見ると、',
        you.get_colored_name(),
        ' は昔の場面を思い出す。',
      ]);
      await era.printAndWait([
        'ペンライトを高く上げて涎を垂らす ',
        y_call_d,
        '。他の',
        digital.uma_sex_title,
        'にこんなグッズがあるとは思えない。',
      ]);
      await era.printAndWait([
        '見ているうちに棚の端まで来て、',
        you.get_colored_name(),
        ' は——荷物の山を見た。',
      ]);
      await era.printAndWait('これは……');
      await era.printAndWait([
        '思い出した。',
        child,
        'の荷物だ。',
        digital.sex,
        'の荷物。',
      ]);
      era.drawLine();
      await digital.print_and_wait(
        'いやいや、やっと、だいたい終わった。残りは……おおお……食事の時間だ。',
      );
      await digital.print_and_wait('今日のご飯は何～');
      await digital.print_and_wait('扉を開けたら、卓一杯の料理?!');
      await digital.print_and_wait('今日は特別な日？ デジ、忙しくて忘れた?!');
      await digital.print_and_wait('やばいやばい、デジよデジ、どうして……え？');
      await you.say_and_wait([y_call_d, '、その顔、何か逃したと思ってるな？']);
      await digital.say_and_wait(
        'えええ？ 私の、私のせい、忙しくて忘れちゃった！ デジは昇天して……',
      );
      await you.say_and_wait(
        '待て待て、俺がいろいろな思い出の詰まったこれを見つけたからだ——',
      );
      await digital.print_and_wait([callname, ' が取り上げたのは……封筒？']);
      await digital.say_and_wait(
        'この時代に手紙なんて珍しいね。未来への手紙とか、幽霊の手紙とか……',
      );
      await you.say_and_wait(
        '当たってる。ただし、君が思うのとは違うかもしれない。',
      );
      await digital.print_and_wait([
        callname,
        ' から渡された手紙には朱肉の印もある。模様は以前買ったトレセングッズそのもの。差出人は……',
      ]);
      await digital.print_and_wait([
        'おおおお！ びっくりした、',
        child,
        'の手紙だ。',
      ]);
      await digital.say_and_wait('あっち側から届いた手紙?! 本当にあるの?!');
      await digital.say_and_wait(
        '開けたらホラーゲームみたいに悪霊が憑くとか！',
      );
      await you.say_and_wait('じゃあ、開けてみるか？');
      await digital.say_and_wait(
        'いやいや、先に清めたほうが。ハロウィン勝負服のあのお札を出して……',
      );
      await digital.print_and_wait(
        '実際、封筒を持ったまま同じ話を繰り返しているのに、手は力を失ったみたいで、軽い手紙すら安定しない。',
      );
      await you.say_and_wait('……');
      await digital.print_and_wait([
        callname,
        ' を見る。',
        you.sex,
        '……',
        you.sex,
        'も同じだろう。',
      ]);
      await digital.print_and_wait([
        callname,
        ' に寄りかかって座った。椅子一つに二人。',
      ]);
      await digital.print_and_wait([
        you.sex,
        'が手を伸ばして、私を抱きしめた……',
        you.sex,
        'の掌の冷たい汗までわかる。',
      ]);
      await digital.print_and_wait('開けよう。');
      await digital.print_and_wait('さらさら……中の紙が擦れる音。');
      await digital.print_and_wait(
        '朱肉を剥がし、封筒を開き、折った便箋を抜き……',
      );
      await digital.print_and_wait('開こう。');
      await digital.print_and_wait('便箋を開くと、書いてあるのは——');
      era.println();
      era.drawLine();
      await era.waitAnyKey();
      era.setOffset(8);
      era.setWidth(8);
      await era.printAndWait('パパ、ママ：');
      await era.printAndWait('ありがとう。', {
        align: 'center',
        isParagraph: true,
      });
      await era.printAndWait(['——あなたたちの', child], { align: 'right' });
      era.drawLine();
      await era.waitAnyKey();
      era.setWidth(24);
      era.setOffset(0);
      era.println();
      await digital.say_and_wait(
        'うはっ、なんだ、やっぱりこう書いてあるんだ！',
      );
      await you.say_and_wait('当然だろ！');
      await digital.say_and_wait(
        'うおおお、ほらほら、ご飯食べよう。しっかり休もう！',
      );
      await digital.print_and_wait([
        '熱々の美味しい料理、立つ薄い霧、温かい ',
        callname,
        '、口へ運ばれる柔らかいハンバーグ。',
      ]);
      await digital.print_and_wait([
        callname,
        ' が菜を挟んで渡すときの笑顔を見て、しっかり味わわないと。',
      ]);
      await digital.print_and_wait([
        callname,
        ' の太ももを叩く。うん、最近家事で鍛えてる……',
      ]);
      await you.say_and_wait([
        y_call_d,
        '？ 今？ ここで？ ご飯、食べ終わらないのか？',
      ]);
      await digital.say_and_wait(
        '食べる前でも後でも結果は同じでしょ？ どっちも食べるんでしょ？ ぐへへ……ずるっ——',
      );
      await digital.print_and_wait('わ、自分でヤバい声を出した気がする。');
      await digital.say_and_wait(
        'うおおおお、そうそう、今だよ、一週間耐えたんだから！ ううう、この一週間どうやって生きたか知ってる?!',
      );
      await digital.say_and_wait(
        'だって、だってデジは一週間同人を描いたんだよ。決まりで、描き終わったら祝うでしょ?!',
      );
      await you.say_and_wait([
        'いやいや、それは君の問題だろ！ それに、',
        y_call_d,
        '、描き終わったのか？',
      ]);
      await digital.say_and_wait(
        '……まだ、少し。でも本当に少しだけ！ それにそれが大事？ 私が大事でしょ？',
      );
      await you.say_and_wait(
        'あああ、君はこの一週間俺を放置したくせに！ 今食べたいのか！ あとで片付けるのも俺だ！',
      );
      await digital.print_and_wait('な……なんだか悪い……でも……');
      await digital.say_and_wait('本当にごめん！ あとで片付け、お願い！');
    };
    f.title = title;
    return f;
  })(),
};
