/**
 * @file サンデーサイレンス - 募集
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} ss
   * @param {CharaTalk} coffee
   * @param {CharaTalk} you
   * @param {PrintedSpan} call_coffee
   * @param {string} title
   */
  async rec(ss, coffee, you, call_coffee, title) {
    await era.printAndWait([
      '少し肌寒い朝だった。',
      you.get_colored_name(),
      ' は起きてまだ早いことに気づき、軽く身支度を済ませると、いつもの仕事着に着替えて学園内を歩くことにした。',
    ]);
    await era.printAndWait([
      title,
      'である ',
      you.get_colored_name(),
      ' は、いまトレセンでの暮らしは悪くない。それでも担当を見つけるためには、まだ努力が要る。',
    ]);
    await era.printAndWait([
      'トレーナー寮を出て、近くの小さな林へ入る。ときどき奇妙な音が聞こえるらしく、周辺の小さい',
      ss.uma_sex_title,
      'たちには怨霊が潜む怪談話の林と呼ばれている。だが ',
      you.get_colored_name(),
      ' は、真相が小さな',
      ss.uma_sex_title,
      'たちの噂よりずっと退屈だと知っていた。',
    ]);
    era.println();
    await era.printAndWait([
      '突然、',
      you.get_colored_name(),
      ' の耳に葉を掻き分ける音が届き、次いでスニーカーが地面を踏む音と、整った呼吸が近づいてくる。',
      you.get_colored_name(),
      ' は、誰かがこちらへ走ってくるのだと悟った。',
    ]);
    era.printButton('（こんな時間に……誰だろう？）', 1);
    await era.input();
    await era.printAndWait([
      '眼前の枝を払い、',
      you.get_colored_name(),
      ' が林の小道へ戻ると、黒い影が見えた。',
    ]);
    era.println();
    await era.printAndWait([
      '長く滑らかな黒髪と、ゆったりしたジャージに包まれた細い影が、',
      you.get_colored_name(),
      ' の目に焼きつく。こんな時間に',
      ss.uma_sex_title,
      'がここで朝練をしている理由はわからない。トレーニングするなら、トレセンのほうがよほど楽なはずだ。',
    ]);
    era.println();
    await era.printAndWait([
      '黙った黒髪の',
      ss.uma_sex_title,
      'も ',
      you.get_colored_name(),
      ' の存在に気づいた。だが',
      ss.sex,
      'の赤いまなざしは ',
      you.get_colored_name(),
      ' を一瞥しただけで、また呼吸を整える。まるで ',
      you.get_colored_name(),
      ' が色のついた空気にすぎないかのようだった。',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      ' は頭のなかを必死に漁り、この',
      ss.uma_sex_title,
      'の印象を探す。記憶を辿ったまま、道端で足を止めた。',
    ]);
    era.println();
    await ss.say_as_unknown_and_wait('こんにちは……');
    await era.printAndWait([
      '静かな黒髪の',
      ss.uma_sex_title,
      'が、感情のない冷たい言葉で ',
      you.get_colored_name(),
      ' を回想から引き戻した。',
    ]);
    era.println();
    await you.say_and_wait([
      era.get('cflag:25:招募状态') === 1 ? '' : '君は？',
      call_coffee,
      '？',
    ]);
    era.println();
    await era.printAndWait([
      'その名を聞いた黒髪の',
      ss.uma_sex_title,
      'は眉を寄せ、',
      you.get_colored_name(),
      ' の言葉に不満そうだった。',
    ]);
    await era.printAndWait([
      'そのとき ',
      you.get_colored_name(),
      ' は気づく。ゆったりしたジャージの下の細い影は、実はかなり豊かな体つきで、',
    ]);
    ss.sex_code !== 1 &&
      (await era.printAndWait(
        '柔らかく豊かな胸は、無理にブラで固定されているせいか、呼吸に合わせてわずかに不満げに揺れている。',
      ));
    await era.printAndWait([
      '肉感と力感が同居した美しい脚は、',
      you.get_colored_name(),
      ' の目には、競走',
      ss.uma_sex_title,
      'アイドルという職業にいちばん似合う脚に見えた。',
    ]);
    era.println();
    await era.printAndWait([
      '明らかに ',
      you.get_colored_name(),
      ' の第一声は',
      ss.sex,
      'の気に障った。だが目の前の',
      ss.uma_sex_title,
      'は怒らず、',
      ss.sex,
      'は耳を伏せて言った。',
    ]);
    await ss.say_and_wait(ss.name);
    await you.say_and_wait('え？');
    await era.printAndWait([you.get_colored_name(), ' はきょとんとする。']);
    await ss.say_and_wait([
      '私は ',
      ss.actual_name,
      '。覚えておいて。でないと次は保健室送りにするかもしれない。',
    ]);
    era.println();
    await era.printAndWait([
      '眼前の ',
      ss.get_colored_name(),
      ' の無表情な脅しは、',
      you.get_colored_name(),
      ' には少し可愛く見えた。だがこの場でそれを出す勇気は、とうにない。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は知っている。',
      ss.sex,
      'は本当に ',
      you.get_colored_name(),
      ' を保健室へ送る可能性がある。',
    ]);
    era.printButton(
      `「わかった、${ss.name}……いい名前だ。君に似合ってる。覚えたよ。」`,
      1,
    );
    await era.input();
    await era.printAndWait([
      ss.get_colored_name(),
      ' の機嫌は少し良くなったようだった。だが ',
      you.get_colored_name(),
      ' が続けて話しかけようとすると、',
      ss.sex,
      'はまた一言も発さず去っていた。',
    ]);
    await era.printAndWait([
      'あとになって ',
      you.get_colored_name(),
      ' は気づく。',
      ss.get_colored_name(),
      ' の瞳は赤く、',
      coffee.get_colored_name(),
      ' の瞳は金色だ。',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      ' は気まずい気持ちで頭を掻いた。二人の',
      ss.uma_sex_title,
      'の顔立ちは、ほとんど瓜二つだったのだから。',
    ]);
    era.drawLine({ content: '選考レースのあと' });
    await era.printAndWait([
      ss.get_colored_name(),
      ' は反論の余地のない実力で1着を取った。周囲のトレーナーたちがざわつきはじめる。',
    ]);
    await era.printAndWait([
      'それでも',
      ss.sex,
      'は沈黙を崩さない。どのトレーナーとも接触する気がないように見えた。',
    ]);
    era.println();
    await era.printAndWait('この状況を前に……');
    era.println();
    era.printButton(`勇気を出して${ss.sex}に声をかける。`, 1);
    era.printButton(
      `（走り終えたばかりで休みたい${ss.uma_sex_title}を、邪魔しないほうがいい）`,
      2,
    );
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      ' が考えているうちに、',
      ss.get_colored_name(),
      ' のほうが ',
      you.get_colored_name(),
      ' より一歩早く選んだ。',
    ]);
    await era.printAndWait([
      ss.sex,
      'は音のない幽霊のように ',
      you.get_colored_name(),
      ' の前に立つ。美しい顔に滲んだ汗が陽の下で目立ち、滑らかな黒髪は最高級の絹のように ',
      you.get_colored_name(),
      ' の眼前に広がる。視線が合った一瞬、赤い瞳に珍しく笑みが浮かんだ。',
    ]);
    era.println();
    await ss.say_and_wait('どう？ いまは、私の名前を覚えた？');
    era.printButton(`「${ss.actual_name}、本当にいい名前だ」`, 1);
    era.printButton(
      `「君は${coffee.actual_name}じゃないの？」（おすすめしない）`,
      2,
    );
    if ((await era.input()) === 1) {
      await ss.say_and_wait(
        'では、私のトレーナーになってくれる？ 私の名前を、あなたの頭に永遠に残すために。',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        ss.get_colored_name(),
        ' の笑顔が本当に美しいと悟り、',
        ss.sex,
        'の差し出した掌を受け取った。',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        ' の繊細な指が ',
        you.get_colored_name(),
        ' の掌を悪戯っぽく撫でる。同意が、よほど嬉しいらしい。',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        ' は途方もない力で胃腸を掻き回され、眼の前が真っ黒になる直前、',
        ss.get_colored_name(),
        ' の怒った顔を見た。',
      ]);
      era.drawLine({ content: '保健室' });
      await era.printAndWait([
        you.get_colored_name(),
        ' が保健室で目を覚ますと、',
        ss.get_colored_name(),
        ' が無表情で隣の椅子に座り、',
        you.get_colored_name(),
        ' を見ていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' がようやく目を擦って起き上がると、',
        ss.sex,
        'がほっと息を吐いたのがはっきりわかった。',
      ]);
      await ss.say_and_wait([
        'いまは覚えた？ 私は ',
        ss.get_colored_name(),
        '。',
        coffee.get_colored_name(),
        ' は遠い親戚よ！',
      ]);
      await ss.say_and_wait(
        'それから……埋め合わせとして、あなたの担当になる。安心して。あなたが望む成功は、全部取る。',
      );
    }
  },
};
