/**
 * @file ライスシャワー - 恋慕
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '愛欲';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_call ライスの自称
     */
    const f = async (rice, you, callname, self_call) => {
      await rice.print_and_wait([
        'まず、',
        callname,
        ' はかっこよくて、優しくて、頼りになる。',
        self_call,
        ' が ',
        callname,
        ' にたくさん迷惑をかけても、笑って ',
        self_call,
        ' を励ましてくれる。',
      ]);
      await rice.print_and_wait([
        '……ときどき、すごく可愛い！とにかく ',
        self_call,
        ' は ',
        callname,
        ' が好きです。',
      ]);
      await rice.print_and_wait([
        '何度も何度も何度も、',
        self_call,
        ' は ',
        callname,
        ' を押し倒したくなりました。',
      ]);
      await rice.print_and_wait([
        'でも ',
        callname,
        ' を悲しませたくなくて、',
        self_call,
        ' はずっと我慢してきました。',
      ]);
      era.printButton(
        `${callname} の気持ちがいちばん大切だから（まだ進めない）`,
        1,
        { buttonType: '', color: rice.color },
      );
      era.printButton(
        `${callname} の答えがどちらでも、${self_call} はもう我慢しない（関係を進める）`,
        2,
        { buttonType: '', color: rice.color },
      );
      const ret = await era.input();
      if (ret === 2) {
        await rice.print_and_wait([
          self_call,
          ' に自分を信じろと教えてくれたのは ',
          callname,
          ' です。',
          self_call,
          ' は今度こそ、諦めずにがんばります。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = '告白';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_call ライスの自称
     * @param {PrintedSpan} y_call_r プレイヤーのライスへの呼び方
     */
    const f = async (rice, you, callname, self_call, y_call_r) => {
      await rice.print_and_wait([self_call, '、', callname, ' が大好きです']);
      await rice.print_and_wait(
        '大好きだから、この愛は、実を結ばなくてもいいんです。',
      );
      await rice.print_and_wait('だから、これでいい。');
      await rice.print_and_wait([self_call, '、ここまで来られればいい。']);
      await rice.print_and_wait([self_call, '、そう願っていました。']);
      era.drawLine();
      await era.printAndWait([
        rice.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' に、どうしても見たい店があると言った。',
      ]);
      await era.printAndWait([
        'そこで ',
        you.get_colored_name(),
        ' は ',
        rice.get_colored_name(),
        ' を連れてきた。学園から少し離れた街だ。',
      ]);
      await era.printAndWait('大きな本屋と、きれいな雑貨屋。');
      await era.printAndWait(
        'ここはまだイルミネーションが輝き、恋人たちがクリスマスを過ごす通りだ。',
      );
      await era.printAndWait(
        '少し先には、ネオンの色に揺れる大人の場所がある。',
      );
      await rice.say_and_wait([
        self_call,
        '、',
        callname,
        ' に贈りたいものがあります。',
      ]);
      await rice.say_and_wait([
        self_call,
        ' のすべては、',
        callname,
        ' がくれたものです。',
      ]);
      await rice.say_and_wait([
        'だから ',
        self_call,
        ' は ',
        callname,
        ' に言いたいんです。今まで ',
        self_call,
        ' を見てくださって、本当にありがとうございました。',
      ]);
      await rice.say_and_wait([
        callname,
        '、私は必ずいいウマ娘になります。だから、諦めないでください。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' は顔を上げ、突然 ',
        you.get_colored_name(),
        ' にそう言った。',
      ]);
      await rice.say_and_wait([
        callname,
        ' がトレーナーになってくれるって聞いたとき、本当に嬉しかったんです。',
      ]);
      await rice.say_and_wait(
        '小さい頃から、人を幸せにできる人になりたかった。',
      );
      await rice.say_and_wait([
        'でもお父さんとお母さんには、きっと ',
        self_call,
        ' のことが心配だったと思います。',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        ' は、一語一語を喉から絞り出すように話す。',
      ]);
      await rice.say_and_wait([
        '小さい頃から ',
        self_call,
        ' は',
        you.elder_sibling_sex_title,
        'が欲しいと思っていました。本当に',
        you.elder_sibling_sex_title,
        'がいたら、',
        self_call,
        ' は',
        you.sex,
        'に甘えられたのに……',
      ]);
      await era.printAndWait('真摯で、澄んだ眼差し。');
      await era.printAndWait([
        rice.get_colored_name(),
        ' の美しい双眸が、いま静かに ',
        you.get_colored_name(),
        ' を見つめている。',
      ]);
      await rice.say_and_wait([
        callname,
        '、こんな ',
        self_call,
        '、迷惑だと思いますか？',
      ]);
      era.printButton('「少しも思わない。」', 1);
      await era.input();
      await you.say_and_wait([y_call_r, ' は、いつでも俺に甘えていいんだぞ。']);
      await rice.say_and_wait([
        '本当ですか？ずっと ',
        self_call,
        ' のそばにいてくれますか？',
      ]);
      await era.printAndWait('二人の距離が一気に縮まる。');
      era.printButton('「ああ、ずっとそばにいる。」', 1);
      await era.input();
      await rice.say_and_wait([
        '絶対ですよ？',
        callname,
        ' は、ずっと ',
        self_call,
        ' のそばにいてください。',
      ]);
      await rice.say_and_wait(
        '黙っていなくなったり、突然いなくなったりしちゃだめです。',
      );
      await you.say_and_wait(['俺は、ずっと ', y_call_r, ' のそばにいる。']);
      await rice.say_and_wait(['ありがとう。', callname, '、大好きです。']);
      await era.printAndWait([
        rice.get_colored_name(),
        ' は両手で ',
        you.get_colored_name(),
        ' を抱きしめた。',
      ]);
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '良縁';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_call ライスの自称
     */
    const f = async (rice, you, callname, self_call) => {
      await rice.print_and_wait('ある休日の朝');
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' は、灼けつくような熱と、少しの痛みと、言葉にできない不安に包まれて目を覚ました。',
      ]);
      await rice.print_and_wait([
        'この感覚は、',
        rice.get_colored_name(),
        ' にとって初めてではない。',
      ]);
      await rice.print_and_wait(
        'いつもなら、もう少し眠って、あとで体を動かせば治る。',
      );
      await rice.print_and_wait([
        'だから ',
        rice.get_colored_name(),
        ' はいつものように体を動かし、着替えて外へ出た。',
      ]);
      era.drawLine();
      await rice.print_and_wait('でも、どうしても治らない。');
      await rice.print_and_wait('歩き、走り、座って休む。');
      await rice.print_and_wait('不安で、辛くて、それでもどうにもならない。');
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' は落ち着かない気持ちのまま、道端に腰を下ろした。',
      ]);
      await rice.print_and_wait(['偶然、', callname, ' が通りかかった。']);
      await rice.print_and_wait([
        callname,
        ' は困った顔で、',
        rice.get_colored_name(),
        ' の手を取った。',
      ]);
      era.drawLine();
      await rice.print_and_wait([
        callname,
        ' の部屋に着いたとき、',
        rice.get_colored_name(),
        ' はもう限界だった。',
      ]);
      await rice.print_and_wait('熱、悲しみ、不安。');
      await rice.print_and_wait([
        'でも心のどこかが、',
        callname,
        ' に手を握られたときから、甘酸っぱい。',
      ]);
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' は自分を、',
        callname,
        ' の腕の中に預けた。',
      ]);
      await rice.print_and_wait('自然と、さっきまでの不安が消えていく。');
      await rice.say_and_wait('すぅ……');
      await rice.print_and_wait('深く息をするたび、温かいものが溜まっていく。');
      await rice.say_and_wait('ふう……');
      await rice.print_and_wait(
        'ゆっくり吐くと、溜まったものは甘い幸せになって、全身を巡る。',
      );
      await rice.print_and_wait('呼吸するだけで、どんどん幸せになる。');
      await rice.say_and_wait('ん……あっ！');
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' は、その快感に溶けそうになる。',
      ]);
      await rice.print_and_wait([
        callname,
        ' の手が、',
        rice.get_colored_name(),
        ' の背中に触れた。',
      ]);
      await rice.print_and_wait('悪戯っ子のように、触れ、撫でる。');
      await rice.say_and_wait('あっ……んっ……');
      await rice.print_and_wait([
        'とろける ',
        rice.get_colored_name(),
        ' を、',
        callname,
        ' の手が混ぜ、快楽の波を立てる。',
      ]);
      await rice.print_and_wait([
        'それから ',
        callname,
        ' は、手を ',
        rice.get_colored_name(),
        ' の尻尾の根元に置いた。',
      ]);
      await rice.print_and_wait('それらしい手つきで、ぐるぐると撫で続ける。');
      await rice.say_and_wait('あっ……んあっ！');
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' の体は震え、ぐちゃぐちゃの泥のように柔らかくなる。',
      ]);
      await rice.say_and_wait(['ああ、', callname, '……もっと、もっと！']);
      await rice.print_and_wait([
        'そのとき、',
        callname,
        ' の手が急に止まった。',
      ]);
      await rice.print_and_wait('荒れ狂っていた何かも、一瞬で凪になる。');
      await rice.say_and_wait(callname);
      await rice.print_and_wait([
        'それから ',
        callname,
        ' は、',
        rice.get_colored_name(),
        ' の尻尾を根元から持ち上げた。',
      ]);
      await rice.print_and_wait([
        rice.get_colored_name(),
        ' の全身を、幸せの波が襲う。',
      ]);
      await rice.say_and_wait(['ああ……あっ、', callname, '……']);
      await rice.say_and_wait([self_call, '……幸せ……！']);
      await rice.print_and_wait([
        'しばらくして、',
        rice.get_colored_name(),
        ' は幸せの泥沼に浸ったまま、眠ってしまった。',
      ]);
      era.drawLine();
      await rice.print_and_wait([
        '起きたとき、すっきりした ',
        rice.get_colored_name(),
        ' は、',
        callname,
        ' の悪戯っぽい笑顔と目が合った。',
      ]);
      await rice.print_and_wait([
        '恥ずかしい顔が火照って、',
        rice.get_colored_name(),
        ' は布団の中に潜り込むしかなかった。',
      ]);
      await rice.say_and_wait('でも、本当に幸せ……', true);
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '依存';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_call ライスの自称
     */
    const f = async (rice, you, callname, self_call) => {
      await rice.say_and_wait([
        'どうして ',
        self_call,
        ' を見てくれないの？',
        self_call,
        ' が悪い子だから、嫌いになったの？',
      ]);
      await rice.say_and_wait([
        'そう……じゃあ、',
        self_call,
        ' が悪い子だって印を、刻まないといけませんね。',
      ]);
      await rice.say_and_wait([
        'だから ',
        callname,
        ' は ',
        self_call,
        ' を罰してください。',
        self_call,
        ' が悪い子だから、',
        callname,
        ' は ',
        self_call,
        ' に愛をくれないんです。',
      ]);
      await rice.say_and_wait([
        'どうして？',
        callname,
        ' のためなら ',
        self_call,
        ' は毎日トレーニングして、毎週レースに出て、休みなんていりません。',
      ]);
      await rice.say_and_wait([
        callname,
        ' が ',
        self_call,
        ' を愛してくれるなら、',
        self_call,
        ' は走れなくなっても走り続けます。',
      ]);
      await rice.say_and_wait([
        'お願いです。',
        self_call,
        ' には ',
        callname,
        ' しかいないんです……',
      ]);
      await rice.say_and_wait([
        'だから、',
        self_call,
        ' を愛してください。',
        self_call,
        ' を見てください。',
      ]);
      await rice.say_and_wait([
        callname,
        '、',
        self_call,
        ' を撫でてくれますか？',
      ]);
      await rice.say_and_wait(['ええ？ありがとう、', callname, '。']);
      await rice.say_and_wait('大好きです！');
    };
    f.title = title;
    return f;
  })(),
};
