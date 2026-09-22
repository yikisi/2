/**
 * @file アグネスタキオン - 恋慕
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（修订）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  25: (() => {
    const title = (tachyon) => [
      '「',
      tachyon.name,
      '」？「',
      tachyon.uma_sex_title,
      'A」？',
    ];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} callname_25 マンハッタンカフェがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶ名
     */
    const f = async (
      tachyon,
      coffee,
      you,
      callname,
      callname_25,
      t_call_c,
      c_call_t,
    ) => {
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' の実験室。学園をいつも騒がせるこの場所が、ここ数日は妙に静かだった',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '何ですの、愛馬を学園に一人残して、自分だけ出張ですって',
      );
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' は実験室で実験をしながら、ぶつぶつとこぼしている',
      ]);
      await coffee.print_and_wait(
        '愚痴の相手？ もちろん、出張で一週間いなくなるモルモットのことだ',
      );
      era.println();
      await tachyon.say_and_wait(
        '弁当まで自分で温めさせるなんて……怠慢にもほどがありますわ',
      );
      era.println();
      await coffee.print_and_wait([
        tachyon.get_colored_name(),
        ' は止まらず、止まらず、止まらず呟き続ける',
      ]);
      await coffee.print_and_wait('呟きだけなら、まだ耐えられたかもしれない……');
      era.println();
      await tachyon.say_and_wait([
        'これでもう虐待だと思いませんの？ ',
        t_call_c,
      ]);
      await coffee.say_and_wait(
        '…………恩愛の見せびらかしに、私を巻き込むのはやめて',
      );
      era.println();
      await coffee.print_and_wait([
        tachyon.sex,
        'に止まる気配がなく、自分まで話題へ引き込もうとしたところで、同じ空き教室を共有する ',
        coffee.get_colored_name(),
        ' はついに堪えきれなくなった',
      ]);
      await coffee.say_and_wait([c_call_t, '……その話、もう三度目です']);
      await tachyon.say_and_wait('三度だけですわ。多くもありませんでしょう');
      await coffee.say_and_wait([
        callname_25,
        ' が出発したのは、今日が初日です……',
      ]);
      await tachyon.say_and_wait('…………それでも、三度は多く……');
      await coffee.say_and_wait([
        you.sex,
        'が学園を出て、まだ三十分も経っていません',
      ]);
      await tachyon.say_and_wait('………………');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' はため息をつく。以前は実験至上だったこの同級生が、トレーナーと仲良くなってから、まるで別人だ',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.print_and_wait('……分からないでもない。あの人だもの');
      } else {
        await coffee.print_and_wait(
          '元は冷酷で、倫理もなく、人命を草芥のように……言いすぎたかもしれない',
        );
      }
      await coffee.print_and_wait([
        tachyon.sex,
        'がまだぶつぶつこぼすのを見て、',
        coffee.get_colored_name(),
        ' の胸に苛立ちが湧き、思わず口をついて出る',
      ]);
      era.println();
      await coffee.say_and_wait([
        'それに……',
        callname_25,
        ' は ',
        c_call_t,
        ' の専属でもありません',
      ]);
      await tachyon.say_and_wait('…………どういう意味ですの？');
      await coffee.say_and_wait([
        'どういう意味か、',
        c_call_t,
        ' 自身がいちばん分かっているはずです。',
        callname_25,
        ' は出張すると言いましたが、どこへ、何をしに行くのか、言いましたか？',
      ]);
      await coffee.say_and_wait([
        '…………いいえ。最初から最後まで、',
        you.sex,
        'は私に、出張するとしか言っていません',
      ]);
      era.println();
      await coffee.print_and_wait([
        '当然だ。出張と言いつつ、実際は ',
        c_call_t,
        ' が先日起こした実験漏洩の後始末へ緊急招集されたのだ。担当の感情を気にしすぎる ',
        callname,
        ' が、',
        tachyon.sex,
        '本人に言うはずがない',
      ]);
      if (era.get('cflag:25:招募状态') === 1) {
        await coffee.print_and_wait('……妬ましくなるくらいだ');
      }
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' は心の中で思う',
      ]);
      era.println();
      await coffee.say_and_wait([
        'では……こんな可能性もあります。',
        callname_25,
        ' は出張ではなく……誰かと密会している、という',
      ]);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([
        'だって……',
        c_call_t,
        ' は面倒です。私が ',
        callname_25,
        ' なら、とうにうんざりしているでしょう',
      ]);
      await tachyon.say_and_wait([
        '……',
        you.sex,
        'は言いましたわ。',
        you.sex,
        'は私の走りと可能性に魅せられた、と',
      ]);
      await coffee.say_and_wait('ふふ……');
      await tachyon.say_and_wait('何がおかしいんですの');
      era.println();
      await coffee.print_and_wait([
        coffee.get_colored_name(),
        ' はコーヒーを一口飲み、今の ',
        tachyon.get_colored_name(),
        ' の態度を味わう',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.print_and_wait(
          '最近、「自分の」トレーナーと餌をまき散らしてばかりのこの人に、こんな不安な顔をさせる……いけない、少し癖になりそうだ',
        );
      } else {
        await coffee.print_and_wait(
          '最近、トレーナーと餌をまき散らしてばかりのこの人に、こんな不安な顔をさせる……いけない、少し癖になりそうだ',
        );
      }
      era.println();
      await coffee.say_and_wait([
        'つまり、',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'そのものには、',
        you.sex,
        'にとって何の魅力もない、ということでは？',
      ]);
      await tachyon.say_and_wait('…………');
      await coffee.say_and_wait([
        '走り、可能性……',
        you.sex,
        'が見ているのは ',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'ですか。それとも『それを持つ某',
        tachyon.uma_sex_title,
        'A』ですか？',
      ]);
      await tachyon.say_and_wait('……違……');
      await coffee.say_and_wait([
        '逆に言えば、それら以外に、',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'は、',
        you.sex,
        'に何の魅力があるのでしょう？',
      ]);
      await tachyon.say_and_wait('…………');
      era.println();
      await coffee.print_and_wait([
        'さっきまでの不快は消え、今日の愉悦が最大まで上がった ',
        coffee.get_colored_name(),
        ' は、最後に原子爆弾を落とすように一言を残し、教室を出た',
      ]);
      if (era.get('love:25') >= 50) {
        await coffee.say_and_wait([
          'そういえば、',
          callname_25,
          ' の弁当、本当においしいですね……今度からも ',
          callname_25,
          ' に作ってもらいましょうか？',
        ]);
      } else {
        await coffee.say_and_wait([
          'そういえば、',
          callname_25,
          ' の弁当、本当においしいですね……機会があれば、また',
          you.sex,
          'に作ってもらいましょう',
        ]);
      }
      era.drawLine();
      await tachyon.say_and_wait('…………');
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' は去り、実験室に残されたのは ',
        tachyon.get_colored_name(),
        ' 一人だった',
      ]);
      await tachyon.print_and_wait([
        '頭の回る',
        tachyon.sex,
        'には分かっている。あの言葉は ',
        coffee.get_colored_name(),
        ' が',
        tachyon.sex,
        'を煽るために、わざと吐いたものだ',
      ]);
      await tachyon.print_and_wait([
        'なぜそうしたかまで、',
        tachyon.sex,
        'は見当がついている',
      ]);
      era.println();
      await tachyon.say_and_wait('恩愛の見せびらかし……？');
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' の言う通り、自分と ',
        callname,
        ' は',
        tachyon.sex,
        'の眼にはそう見えているのだろう',
      ]);
      await tachyon.print_and_wait('だが、おかしいでしょう');
      await tachyon.print_and_wait(
        '恩愛の見せびらかしとは、恋人、あるいは恋慕の関係にある二人が、他人の目を気にせず睦まじさを見せること',
      );
      await tachyon.print_and_wait([
        '自分と ',
        callname,
        ' は、そんな関係ではない',
      ]);
      await tachyon.print_and_wait('恋人、あるいは恋慕……');
      await tachyon.print_and_wait([
        '周囲の眼に映る自分と ',
        callname,
        ' は、そういうものだったのか？',
      ]);
      await tachyon.print_and_wait([callname, ' と私……恋愛……']);
      era.println();
      await tachyon.say_and_wait('………！？');
      era.println();
      await tachyon.print_and_wait(
        'その考えが浮かんだ瞬間、心臓は強心剤を打たれたように打ち始め、血が過剰に回り、頬まで熱くなる',
      );
      await tachyon.print_and_wait('こ……これはまるで……自分が………');
      era.println();
      await tachyon.say_and_wait([
        'あ、あ、あ、ありえませんわ……実験動物にすぎない……そうですわ！ 所詮',
        you.sex,
        'はただのモルモットですもの！',
      ]);
      await tachyon.say_and_wait([
        'どうして私が、',
        you.sex,
        'の好きなのがこの私なのか、走りなのか、可能性なのか、気にする必要がありますの！',
      ]);
      era.println();
      await tachyon.print_and_wait(
        'ええ、モルモットなら、同じ目標を持っていればいい',
      );
      await tachyon.print_and_wait([
        '余計な感情など要らない。感情など、実験では邪魔になるだけだ',
      ]);
      await tachyon.print_and_wait([
        '二人の関係は研究者とモルモット、トレーナーと',
        tachyon.uma_sex_title,
      ]);
      tachyon.print('それ以外の関係など、要らない');
      era.printButton('本当に、そうなの？', 1);
      era.printButton('ええ、その通り', 2);
      if ((await era.input()) === 1) {
        await tachyon.print_and_wait('ええ、そうであるはずなのに');
        await tachyon.print_and_wait('どうして');
        await tachyon.print_and_wait(
          '恋人扱いされたことに、胸の高鳴りと昂ぶりが抑えられない',
        );
        await tachyon.print_and_wait([
          you.sex,
          'が ',
          coffee.get_colored_name(),
          ' に弁当を作ったことに、嫉妬と怒りが収まらない',
        ]);
        await tachyon.print_and_wait([
          '…………',
          coffee.get_colored_name(),
          ' の言う、相手が自分を見ていないという話に、恐慌と恐れが手放せない',
        ]);
        era.println();
        await tachyon.say_and_wait('…………私は、どうしてしまったのですの');
        await tachyon.say_and_wait('まるで……まるで');
        era.println();
        await tachyon.print_and_wait([
          'まるで、私が ',
          callname,
          ' を好きなようですわ',
        ]);
        era.println();
        await tachyon.print_and_wait(
          '当人すら分からない感情が、熱を帯びた吐息に混じり、天井へ舞い、孤独な実験室の中で消える',
        );
      } else {
        await tachyon.print_and_wait('ええ');
        await tachyon.print_and_wait('その通り');
        await tachyon.print_and_wait(
          '二人は純粋なモルモットと研究者でいればいい',
        );
        await tachyon.print_and_wait('このままの生活を続ければいい');
        await tachyon.print_and_wait(
          '勝手な天才科学者、そして文句も言わず働く助手兼実験体',
        );
        await tachyon.print_and_wait('二人の関係は、このままでいい');
        await tachyon.print_and_wait('いつまで……続けるのでしょう');
        await tachyon.print_and_wait(
          '一年？ 二年？ 卒業まで？ 大学まで？ 社会に出るまで？',
        );
        await tachyon.print_and_wait(
          'この関係は、そこまで保てるのでしょうか？',
        );
        era.println();
        await tachyon.say_and_wait('はあ……');
        era.println();
        await tachyon.print_and_wait(
          'だが、どちらにせよ自分は選んだ。だから今は、これでいい',
        );
      }
      era.println();
      await tachyon.say_and_wait([
        '早く戻ってきてくださいまし、',
        callname,
        '……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
   */
  async 49(tachyon, you, callname) {
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '栗東寮のある寝室で、一人の',
      tachyon.uma_sex_title,
      'が枕で口を塞ぎ、低い声で曖昧な音を漏らしている',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '普段なら、この部屋でこうした場面が起きるのも珍しくはない。',
    );
    await tachyon.print_and_wait([
      '大概は、某ピンク髪の',
      tachyon.uma_sex_title,
      'が枕を抱えて、',
      tachyon.uma_sex_title,
      'への想いを低く語る',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('だが今日の主役は、少し違う');
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      'ピンク髪の',
      tachyon.uma_sex_title,
      'と同室の栗毛の',
      tachyon.uma_sex_title,
      'が、かつてのルームメイトがしていた、当時は自分をひどく困惑させた行いを、今している',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '当時の',
      tachyon.sex,
      'は、そんな行為は余計だと思っていた',
    ]);
    await tachyon.print_and_wait('本当に言いたいなら、なぜ恥じる？');
    await tachyon.print_and_wait('恥じるなら、口にしなければいいではないか？');
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '今になって',
      tachyon.sex,
      'は、その行為の理由を理解した',
    ]);
    await tachyon.print_and_wait('恥じるのは、言葉に乗った愛情のため');
    await tachyon.print_and_wait(
      '口にしなければならないのは、言わなければ内側の火のやり場がないから',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      'だから今の',
      tachyon.sex,
      'も、枕に向かい、ルームメイトが遠征でCMに出て不在の空いた部屋で、一人で胸の内を漏らすしかない',
    ]);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait([
      '……そうは言っても、この感情の根源が何か、',
      tachyon.sex,
      'は今もはっきり分かっていないのだが',
    ]);
    await tachyon.print_and_wait('ただ、自分に唯々諾々と従う——');
    await tachyon.print_and_wait([
      '同時に、今の苛立ちの元凶でもある——',
      you.sex,
      'の名前を、呼び続けるしかない',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '初対面では、純粋に実験体への興味で付けた呼び方',
    );
    await tachyon.print_and_wait(
      '始まりは、興味の中に評価と冷淡が混じった呼び方',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '今は複雑な感情を帯び、口にするたび胸が震える呼び方になった',
    );
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('この感情は、何なのでしょう');
    await tachyon.print_and_wait('甘く、苦く、温かく、それでいて恐ろしい');
    await tachyon.print_and_wait('矛盾した性質が、一つの感情に集まっている');
    await tachyon.print_and_wait('奇妙。熱い。怖……い？');
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('未知への態度は、これまで期待と喜悦だった');
    await tachyon.print_and_wait(
      'どうしてこの未知の感情だけが、恐れを生むのでしょう',
    );
    await tachyon.print_and_wait([
      '何を恐れるの。この感情？ それとも ',
      callname,
      '？',
    ]);
    await tachyon.print_and_wait(['私が恐れる……', callname, ' を？']);
    era.println();
    await tachyon.say_and_wait([callname, '……']);
    era.println();
    await tachyon.print_and_wait('より震える内側が、答えを明かす');
    await tachyon.print_and_wait(['私は ', callname, ' を恐れている？']);
    await tachyon.print_and_wait([you.sex, 'の、何を？']);
    await tachyon.print_and_wait(['所詮はただの ', callname, ' ']);
    await tachyon.print_and_wait('だが……純粋な恐れでもない');
    await tachyon.print_and_wait('この複雑な感情は、また何なのでしょう');
    await tachyon.print_and_wait('緊張、焦燥、不安、興奮、喜悦、恐怖、混乱');
    await tachyon.print_and_wait(
      'どの感情にも触れているようで、どの感情にも属さない',
    );
    await tachyon.print_and_wait(['所詮はただの ', callname, ' ']);
    era.println();
    await tachyon.say_and_wait(['……', callname]);
    era.println();
    await tachyon.print_and_wait('……いいえ、推測するまでもないでしょう');
    await tachyon.print_and_wait([you.sex, 'の名前を呼ぶたび、内側を走る電流']);
    await tachyon.print_and_wait([you.sex, 'の声を聞くたび、胸が急く鼓動']);
    await tachyon.print_and_wait([
      you.sex,
      'の笑顔を見るたび、勝手に迷走する頭',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('ああ、やはり');
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('いいえ、想像以上ですわ');
    era.println();
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    await tachyon.say_and_wait([callname, '♡']);
    era.println();
    await tachyon.print_and_wait('思わなかった');
    await tachyon.print_and_wait('「愛情」を乗せて呼ぶだけで');
    await tachyon.print_and_wait('気持ちが、これほど変わるなんて');
    era.println();
    await tachyon.print_and_wait('焦りは、享受へ変わった');
    await tachyon.print_and_wait('混乱は、安心へ変わった');
    await tachyon.print_and_wait('焦燥は、喜悦へ変わった');
    await tachyon.print_and_wait('恐れは……');
    era.println();
    await tachyon.say_and_wait('…………');
    era.println();
    await tachyon.print_and_wait('どうして、どうして恐れは残っているの');
    await tachyon.print_and_wait('認めたはずでしょう');
    await tachyon.print_and_wait([
      '私はもう ',
      callname,
      ' を愛しているはずでしょう',
    ]);
    await tachyon.print_and_wait('どうしてまだ怖い');
    await tachyon.print_and_wait('どうしてまだ恐い');
    era.println();
    await tachyon.print_and_wait('ああ……');
    await tachyon.print_and_wait('答えは明らかでしょう');
    await tachyon.print_and_wait('この喜悦が愛から生まれるなら');
    await tachyon.print_and_wait('恐れる理由は');
    await tachyon.print_and_wait('もちろん、「愛されない」ことへの恐れですわ');
    era.println();
    await tachyon.print_and_wait([
      you.sex,
      'が自分を好きでなかったら、どうする',
    ]);
    await tachyon.print_and_wait([you.sex, 'が自分を嫌ったら、どうする']);
    await tachyon.print_and_wait([
      you.sex,
      'が他の誰かを好きになったら、どうする',
    ]);
    await tachyon.print_and_wait([
      'もし……',
      you.sex,
      'の好きなのが「自分」ではなかったら、どうする',
    ]);
    era.println();
    await tachyon.print_and_wait([
      '走り、可能性……',
      you.sex,
      'が見ているのは ',
      tachyon.get_colored_name(),
      ' という',
      tachyon.uma_sex_title,
      'か。それとも「それを持つ某',
      tachyon.uma_sex_title,
      'A」か？',
    ]);
    await tachyon.print_and_wait([
      '逆に言えば、それら以外に、',
      tachyon.get_colored_name(),
      ' という',
      tachyon.uma_sex_title,
      'は、',
      you.sex,
      'に何の魅力があるのでしょう？',
    ]);
    era.println();
    await tachyon.print_and_wait([you.sex, 'の狂った眼を思い出す']);
    await tachyon.print_and_wait([
      you.sex,
      'が魅せられたのは ',
      tachyon.get_colored_name(),
      ' ではなく、',
      tachyon.get_colored_name(),
      ' の走り',
    ]);
    await tachyon.print_and_wait([
      you.sex,
      'が助けたいのは ',
      tachyon.get_colored_name(),
      ' ではなく、',
      tachyon.get_colored_name(),
      ' の夢',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '…………']);
    era.println();
    await tachyon.print_and_wait([
      tachyon.get_colored_name(),
      '……付属物にすぎない',
    ]);
    await tachyon.print_and_wait([
      '自分が死にかけたら、',
      you.sex,
      'は焦るでしょうか',
    ]);
    await tachyon.print_and_wait([
      '自分がもう走れなくなったら、',
      you.sex,
      'は胸を痛めるでしょうか',
    ]);
    await tachyon.print_and_wait([
      '自分が夢を捨てたら、',
      you.sex,
      'は残念がるでしょうか',
    ]);
    era.println();
    await tachyon.print_and_wait('……いいえ、答えはどれも「はい」でしょう');
    await tachyon.print_and_wait('だが、だが');
    era.println();
    await tachyon.print_and_wait([
      'もし ',
      tachyon.get_colored_name(),
      ' が両脚も夢も可能性も失ったら、',
      you.sex,
      'はまだ ',
      tachyon.get_colored_name(),
      ' を愛してくれるでしょうか？',
    ]);
    era.println();
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait(
      '答えの返るはずのない問いが、枕の綿の間へ消える',
    );
    era.println();
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    await tachyon.say_and_wait(callname);
    era.println();
    await tachyon.print_and_wait('ああ、だめ');
    await tachyon.print_and_wait('口を開くたび、まだ雷のような刺激が走る');
    await tachyon.print_and_wait('呼ぶたび、まだ頭が狂気のように震える');
    await tachyon.print_and_wait('だが');
    await tachyon.print_and_wait('問うたび、心の影が一段と濃くなる');
    await tachyon.print_and_wait('疑うたび、頭の恐れが一寸増す');
    era.println();
    await tachyon.print_and_wait('怖い');
    await tachyon.print_and_wait('不安');
    await tachyon.print_and_wait('苦しい');
    era.println();
    await tachyon.print_and_wait('これが好き、ということ？');
    await tachyon.print_and_wait('これが夢中、ということ？');
    await tachyon.print_and_wait('これが、恋愛、なのですか？');
    era.println();
    tachyon.print('もしそうなら……なら');
    era.printButton('……何か、しなければ（関係を進める）', 1);
    era.printButton('……いいえ、まだよ（まだ進めない）', 2);
    const ret = await era.input();
    if (ret === 1) {
      await tachyon.print_and_wait('何か、しなければ');
      await tachyon.print_and_wait('焦っていても、何も変わらない');
      await tachyon.print_and_wait([
        'そもそも ',
        tachyon.get_colored_name(),
        ' は、王子様の出現を待つだけの弱い',
        tachyon.uma_sex_title,
        'ではない',
      ]);
      await tachyon.print_and_wait('既存の変数を合わせ、実験で証明する');
      await tachyon.print_and_wait('それが研究者として、なすべきこと');
      await tachyon.print_and_wait('考えなさい');
      era.println();
      await tachyon.print_and_wait([
        '唯一の実験目的。',
        tachyon.get_colored_name(),
        ' が ',
        callname,
        ' の心に占める位置を証明すること',
      ]);
      await tachyon.print_and_wait('実験案は……ある。だが危険度とリスクは……');
      era.println();
      await tachyon.say_and_wait('………………ふふ');
      era.println();
      await tachyon.print_and_wait('まだ考える必要がありますの？');
      await tachyon.print_and_wait([
        'あの人が傍にいない ',
        tachyon.get_colored_name(),
        ' に、存在する意味はありますの？',
      ]);
      await tachyon.print_and_wait('ここまでなって、まだ自分を欺くつもり？');
      era.println();
      await tachyon.print_and_wait('ああ');
      await tachyon.print_and_wait([
        'あなたが、私を研究者からただの',
        tachyon.teen_sex_title,
        'に変えてしまった',
      ]);
      await tachyon.print_and_wait([
        'だから、責任を取ってくださいまし、私の親愛なる ',
        callname,
      ]);
      await tachyon.print_and_wait('私の告白、私の「恋文」');
      await tachyon.print_and_wait('どうか、しっかり受け取ってくださいまし');
    } else {
      await tachyon.print_and_wait('だめ……');
      era.println();
      await tachyon.print_and_wait('もし変わってしまったら');
      await tachyon.print_and_wait([you.sex, 'ともう会えなくなったら']);
      await tachyon.print_and_wait([
        you.sex,
        'の作る弁当が、もう食べられなくなったら',
      ]);
      await tachyon.print_and_wait(['あの狂った眼が、もう見えなくなったら']);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、もう生きていけない',
      ]);
      era.println();
      await tachyon.print_and_wait('そんなことは絶対にいや');
      await tachyon.print_and_wait('そんなことは絶対にだめ');
      era.println();
      await tachyon.print_and_wait([
        callname,
        ' と ',
        tachyon.get_colored_name(),
        ' の日常のために',
      ]);
      await tachyon.print_and_wait('この日々を守るために');
      await tachyon.print_and_wait('抑えなさい');
      await tachyon.print_and_wait('押し込めなさい');
      await tachyon.print_and_wait('耐えなさい');
      era.println();
      await tachyon.print_and_wait('胸の昂ぶりを抑える');
      await tachyon.print_and_wait('内側の熱を押し込む');
      await tachyon.print_and_wait('心の不安に耐える');
      era.println();
      await tachyon.print_and_wait('ただ……');
      await tachyon.print_and_wait('どれほど強いばねも、圧力で壊れる日が来る');
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' というこのばねは、いつまで耐えられるのでしょう',
      ]);
    }
    return ret;
  },
  74: (() => {
    const title = '魔女の告白';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        '、今日の薬を飲む前に、一つお話をしますわ',
      ]);
      era.println();
      await era.printAndWait([
        '今日も ',
        you.get_colored_name(),
        ' はいつものように ',
        tachyon.get_colored_name(),
        ' の実験室へ来た。',
        tachyon.sex,
        'はいつものように弁当を受け取り、今日の薬を ',
        you.get_colored_name(),
        ' へ渡す。',
      ]);
      await era.printAndWait('物々交換のような、取引のようだ');
      era.println();
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' が薬を飲もうとしたとき、',
        tachyon.get_colored_name(),
        ' は ',
        you.get_colored_name(),
        ' の手を止めた',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が不思議そうに',
        tachyon.sex,
        'を見ると、',
        tachyon.sex,
        'は真剣な眼で ',
        you.get_colored_name(),
        ' を見つめ返す',
      ]);
      era.println();
      await era.printAndWait(
        '…………その眼は、命を賭ける覚悟を帯びているかのようだった',
      );
      era.println();
      await tachyon.say_and_wait([
        callname,
        '、人魚姫という童話を、ご存知ですかしら',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は ',
        you.get_colored_name(),
        ' の答えを待たず、最初から答えさせるつもりはなかったかのように、続けた',
      ]);
      await era.printAndWait(
        '……だがそれは、アンデルセン童話の人魚姫とは違う、別の物語だった',
      );
      era.println();
      await tachyon.say_and_wait(
        'むかしむかし、海の底に暮らす人魚姫がいましたわ。彼女は幼い頃から両脚を欲し、地上で、思う存分走りたいと願っていました',
      );
      await tachyon.say_and_wait(
        'だが海に住む彼女には、腰から下の魚の尾しかなく、走るどころか、立つことすらできませんでした',
      );
      era.println();
      await era.printAndWait('彼女は自嘲するように、自分の両脚を見る……');
      await era.printAndWait('ガラスのように脆い両脚。立てても、走れても、');
      await era.printAndWait(
        '走れば壊れる両脚は、魚の尾よりどれほどましなのでしょう？',
      );
      era.println();
      await tachyon.say_and_wait(
        '姫は魔女に会いませんでした。信頼できない魔女に、両脚を預けるつもりもありませんでした。',
      );
      await tachyon.say_and_wait(
        '欲しかったのは、本当に自分の両脚。だから彼女は、自分で魔術を学び始めました',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が両手を振るうと、どこからともなく試験管が二本現れる。手品のようで、あるいは……魔術のようだ',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '姫は信じていました。努力し続ければ、いつか自分の両脚が得られる、と。',
      );
      await tachyon.say_and_wait(
        'そのときは思う存分走れる。もう何も恐れなくていい。あるところまで、そうでした……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の口調が、不意に遠く、夢の中へ沈んだようになる',
      ]);
      era.println();
      await tachyon.say_and_wait('彼女は、一人の人に出会いました');
      await tachyon.say_and_wait(
        'その人は王子ではありません。ただの潜水士でした。海へ落ちて救いを待つ王子ではなく',
      );
      await tachyon.say_and_wait(
        '出航の途中、海面でデータを集めていた姫を偶然見て、うっかりセイレーンに魅せられた',
      );
      await tachyon.say_and_wait(
        '海へ飛び込み、自ら実験を手伝ったただの人間。仮に——モルモット君、と呼びましょう',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はそこで、くすくすと笑った。何か冗談を思い出したように',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '姫は最初、モルモット君に何の感情もありませんでした。面白い実験対象が来た、というだけ。',
      );
      await tachyon.say_and_wait(
        '彼でさまざまな実験をしました。増殖、発光、分身、性転換………ふふ',
      );
      await tachyon.say_and_wait(
        'だが、無邪気な姫は、変わったのはモルモット君だけだと思っていました。',
      );
      await tachyon.say_and_wait(
        'いちばん大事な基本定理を忘れていたのです————反応は、相互である、と。',
      );
      await tachyon.say_and_wait('化学でも、人間関係でも、同じですわ');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はため息をつき、眼には限りない名残と懐かしさが乗っている。まだ夢に溺れているかのようだ',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'モルモット君は姫を連れて、実験の名目でさまざまなものを見せました。',
      );
      await tachyon.say_and_wait(
        'イッカクと一緒に狩りをし、弱肉強食を知り、シロナガスクジラが死んで海底へ落ちるのを見て、生老病死の意味を味わい、',
      );
      await tachyon.say_and_wait(
        'イルカの求愛と交尾を見て、二人とも顔を赤らめました',
      );
      await tachyon.say_and_wait(
        '次第に姫は理解しました。実験以外の世界が、これほど美しいということを',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は静かに語り、美しく、あるいは壮大な絵を一枚また一枚と描く。',
      ]);
      await era.printAndWait(
        '口調はなお柔らかだが、細い糸のような名残が乗っている———まるで、美しい夢が覚めようとしているように',
      );
      era.println();
      await tachyon.say_and_wait('そして、ついに、ある日');
      await tachyon.say_and_wait(
        '姫は気づきました。もう実験に集中できない、と',
      );
      await tachyon.say_and_wait(
        '心を落ち着けて研究しようとするたび、研究の成果より、',
      );
      await tachyon.say_and_wait(
        '新しい研究を聞いたときのモルモット君の顔のほうが、楽しみになっていました。',
      );
      await tachyon.say_and_wait(
        '海面でデータを集めようとするたび、海面の人間たちより、',
      );
      await tachyon.say_and_wait(
        '海底で待っているモルモット君に会いたくなっていました。',
      );
      await tachyon.say_and_wait('新しい薬を作ろうとするたび、薬の効果より、');
      await tachyon.say_and_wait(
        'モルモット君が薬を飲んだ反応のほうが、楽しみになっていました',
      );
      era.println();
      await era.printAndWait([
        'ようやく、',
        tachyon.get_colored_name(),
        ' の表情がはっきりと戻る。美しい夢から、やっと覚めたかのようだ',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '彼女は恐れ始めました。いつか、モルモット君と過ごす時間に完全に溺れてしまうのではないか、と。',
      );
      await tachyon.say_and_wait(
        'いつか……両脚を得るという目標まで、空疎な一言になってしまうのではないか、と',
      );
      await tachyon.say_and_wait(
        'そうなった彼女は、ただの科学者にはなれるでしょう。だが、もう研究者ではいられません……',
      );
      era.println();
      await tachyon.say_and_wait('そのとき、魔女が現れました');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は椅子から立ち上がり、',
        you.get_colored_name(),
        ' へ歩み寄る',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の手が、',
        you.get_colored_name(),
        ' の手を覆う……だが握りしめはしない。',
        tachyon.sex,
        'が撫でているのは、',
        you.get_colored_name(),
        ' の手の中の試験管だ',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'もともと、最初から最後まで、魔女は姫の心の中にいました。魔女は、姫そのもの！',
      );
      await tachyon.say_and_wait(
        '内側の理性面である魔女は姫に告げました。今のすべての源は、あのモルモット。彼がいなくなれば、すべては元に戻る、と',
      );
      await tachyon.say_and_wait(
        'もしそのモルモットが去る……いいえ、去るだけでは足りません。余韻を残してはいけません……',
      );
      await tachyon.say_and_wait(
        'あのモルモットを『消す』こと。そうすれば姫は元に戻り、実験に集中する姫へ戻れる',
      );
      era.println();
      await tachyon.say_and_wait(
        '…………ええ、『元に戻る』だけ。誰も保証できません。',
      );
      await tachyon.say_and_wait(
        '元に戻った姫が、実験で両脚を得られるかどうか。分かるのは『その可能性がある』ということだけ',
      );
      await tachyon.say_and_wait(
        '逆に、モルモット君と一緒にい続けたら……その可能性は、',
      );
      await tachyon.say_and_wait(
        '二度と取り戻せません。魔女はそう言い終え、ある薬を、姫の手を通して作らせました',
      );
      await tachyon.say_and_wait(
        '彼女は姫に告げました。いつものように、モルモットにこの薬を飲ませれば、',
      );
      await tachyon.say_and_wait('すべて終わり、元の生活へ戻れる、と');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' はそこまで言い、',
        you.get_colored_name(),
        ' の手から再び薬を引き抜く',
      ]);
      era.println();
      await tachyon.say_and_wait('だが……');
      era.println();
      await era.printAndWait('薬を握る手が、不意に少し震える');
      era.println();
      await tachyon.say_and_wait(
        '臆病な姫は、すべてをモルモット君に打ち明けました',
      );
      await tachyon.say_and_wait(
        '……愛情からでも、憐れみからでも、忍びなさからでもありません',
      );
      await tachyon.say_and_wait('臆病、気弱、意気地なし');
      await tachyon.say_and_wait(
        '姫を善良だなどと思わないでください。所詮、魔女は彼女の内側の一面。本質は、あの冷酷で無情な魔女ですわ',
      );
      await tachyon.say_and_wait(
        'そう口にした姫の目的は…………ただ、責任を取りたくないだけ',
      );
      era.println();
      await era.printAndWait([
        'それから、',
        tachyon.get_colored_name(),
        ' は再び手の薬を掲げる',
      ]);
      era.println();
      await tachyon.say_and_wait('愛する者を殺す罪を、負いたくない');
      await tachyon.say_and_wait('恋い慕う者を手にかける責任を、負いたくない');
      await tachyon.say_and_wait(
        '消そうとしているモルモットに、姫のために自己犠牲してほしいという、身勝手',
      );
      era.println();
      await era.printAndWait('薬が、再び差し出される');
      await era.printAndWait([
        you.get_colored_name(),
        ' には、俯く ',
        tachyon.get_colored_name(),
        ' の今の顔が、どんな表情か見えない',
      ]);
      await era.printAndWait('泣いているのか？ 愛する者の死のために？');
      await era.printAndWait(
        '嘲笑しているのか？ 自分を縛る鎖が外れようとしているから？',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' は黙って、相手が言い終えるのを待つ',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'だから……',
        callname,
        '、この身勝手な研究者のために、選んでくださいまし',
      ]);
      era.println();
      await era.printAndWait([
        'このとき',
        tachyon.sex,
        'が言ったのは、たしかに、ひどく身勝手な言葉だ',
      ]);
      await era.printAndWait('相手に、自分のために犠牲になってほしい');
      await era.printAndWait('しかも「可能性」のためで、絶対ですらない');
      await era.printAndWait(
        '言い換えれば、「私のために死んでくれ。だが死んでも成功するかは分からない」——本当に、無責任な言葉だ',
      );
      era.println();
      era.print(['だから、', you.get_colored_name(), ' は選ぶ…………']);
      era.printButton('飲まない（関係を進める）', 1);
      era.printButton('飲む（まだ進めない）', 2);
      era.printButton('タキオンに薬を飲ませる【！】', 3);
      era.print(
        [
          '【警告：この選択肢を選ぶと、',
          tachyon.get_colored_name(),
          ' との関係は取り戻せません！トレセン学園は、担当を捨てる行為を許しません！】',
        ],
        {
          color: buff_colors[3],
          offset: 1,
          width: 23,
        },
      );
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  '74-accept': (() => {
    const title = '超光速の姫';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の手から薬を受け取る',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([tachyon.sex, 'は顔を上げ、眼に心配を乗せている']);
      await era.printAndWait([
        '自分が薬を飲むのを心配しているのか、それとも……飲まないことを？',
      ]);
      await era.printAndWait([
        '正直、',
        you.get_colored_name(),
        ' 自身も、次の行いが正しいかどうかは断言できない',
      ]);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' は保証できる。これからすることは、すべて本心からだ',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は手の薬を……傍の廃棄薬品処理桶へ注ぎ捨てる',
      ]);
      era.println();
      await tachyon.say_and_wait('………………あ');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が試験管を傾ける間、',
        tachyon.get_colored_name(),
        ' は何の声も上げなかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' がすべて注ぎ終え、一世紀ほども長い時間が過ぎてから、',
        tachyon.sex,
        'は小さな「あ」を漏らした。今になって、反応すべきだったと思い出したかのように',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '……これが、何を意味するか、分かっていますの？',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は試験管を逆さにし、中の薬が一滴残らず空になったのを確認する',
      ]);
      await era.printAndWait([
        'このとき、',
        tachyon.get_colored_name(),
        ' はやっと言葉を整え、編んだ言葉を吐き出す',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '私の夢……私が追う可能性。あなたのその選択は、つまり、',
      );
      await tachyon.say_and_wait([
        '私、',
        tachyon.get_colored_name(),
        ' に、それらを完全に捨てろと。徹底的に捨てて、ただの、他の思春期の',
        tachyon.teen_sex_title,
        'と何ら変わらない……',
      ]);
      await tachyon.say_and_wait([
        '恋に落ちた普通の',
        tachyon.child_sex_title,
        'になれ、と。他の可能性を捨て、あなたと一緒にいる可能性を選べ、と……',
      ]);
      era.println();
      await era.printAndWait([tachyon.sex, 'は早口で、どもりながら言う']);
      await era.printAndWait(
        '今のうちに考えを変えろと自分を説き、この決断がどれほど愚かかを知らせようとしているようで、',
      );
      await era.printAndWait([
        tachyon.sex,
        'のために犠牲になってほしいのに、悪役にはなりたくないから、こうも身勝手で厚顔な忠告をしている',
      ]);
      era.println();
      await era.printAndWait([
        'だが、',
        tachyon.sex,
        'と長く付き合ってきた ',
        you.get_colored_name(),
        ' には、言葉の裏の本音が見える',
      ]);
      await era.printAndWait(
        'どもるのは恐れだ。すべて自分の思い違いではないか、と',
      );
      await era.printAndWait(
        '早口なのは、後悔を聞きたくないからだ。子供がわざと不明瞭に話して、相手を頷かせるようなもの',
      );
      await era.printAndWait(
        '契約書にサインする前、内容を何度も繰り返して相手の後悔を防ぐ保険の営業のように',
      );
      await era.printAndWait(
        'その判断の根拠は、拒む言葉を吐きながらも揺れ続ける尻尾、',
      );
      await era.printAndWait(
        'まっすぐ立った耳、そして本人は気づかれていないつもりだろうが、顔に明らかな——安心の表情',
      );
      era.println();
      await tachyon.say_and_wait([
        '分かりますの、',
        callname,
        '……あなたはずっと、可能性の彼方を見たいと言っていたでしょう？ こうなってしまえば、本当に……',
      ]);
      era.println();
      await era.printAndWait('もういい');
      await era.printAndWait([
        'このまま',
        tachyon.sex,
        'がいつまで虚勢を張れるか見るのも面白いが',
      ]);
      await era.printAndWait([
        'そうすればあとで、羞恥に怒った',
        tachyon.sex,
        'に報復されるだろう',
      ]);
      await era.printAndWait([
        'だから ',
        you.get_colored_name(),
        ' は考える。どうすれば ',
        you.get_colored_name(),
        ' のいちばん深い覚悟を示せるか',
      ]);
      era.print([you.get_colored_name(), ' は決める……']);
      era.printButton(`${tachyon.sex}を抱きしめる`, 1);
      era.printButton(`${tachyon.sex}にキスする`, 2);
      era.printButton(`${tachyon.sex}の耳を軽く噛む`, 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            '人は突発の現象に遭うと、ふたつのことに気を配れない。',
            tachyon.uma_sex_title,
            'も同じだ',
          ]);
          await era.printAndWait([
            'だから当然、',
            you.get_colored_name(),
            ' の突然の抱擁に呆け、馴染みの雄の匂いに沈み、',
          ]);
          await era.printAndWait([
            'この温もりを味わう ',
            tachyon.get_colored_name(),
            ' は、',
            tachyon.sex,
            'の長広舌を続けられなくなった',
          ]);
          break;
        case 2:
          await era.printAndWait(
            '古来伝わる愛情の示し方は、口を塞ぎつつ感情を伝える最強の技なのかもしれない',
          );
          await era.printAndWait([
            tachyon.sex,
            'の唇は',
            tachyon.sex,
            '本人と同じく、見かけは硬い守りだが、触れた瞬間に崩れ、柔らかな内側を晒す。',
          ]);
          await era.printAndWait(
            '岩のような牙城も、舌先の探りであっさり崩れ、敵の長駆直入を許すしかない。',
          );
          await era.printAndWait(
            '忠貞に見えた舌も、自分の太い舌に触れた瞬間、小鳥のように依りかかり、受け身で摘まれる',
          );
          break;
        case 3:
          await era.printAndWait('代わりに漏れたのは、抑えきれない嬌声だった');
          await era.printAndWait([
            '周知の通り、多くの',
            tachyon.uma_sex_title,
            'に特有で、人間と異なる器官は、',
            tachyon.couple_title,
            'のいちばん敏感な部位だ',
          ]);
          await era.printAndWait([
            'だから、',
            tachyon.get_colored_name(),
            ' が漏らした、想像を掻き立てる嬌声を、誰が責められよう',
          ]);
          await era.printAndWait([
            'むしろ、',
            you.get_colored_name(),
            ' に抱かれ耳を摘まれながら、まだ立っていられ、',
            you.get_colored_name(),
            ' の腕の中へ崩れ落ちなかった ',
            tachyon.get_colored_name(),
            ' は、相当なものだ',
          ]);
          era.println();
          await tachyon.say_and_wait([
            callname,
            '……だめ……待って……くすぐったい……',
          ]);
          era.println();
          await era.printAndWait([
            tachyon.get_colored_name(),
            ' の、拒絶というより受け入れるような声を聞き、',
            you.get_colored_name(),
            ' は手を変え、より荒い力で、揉み、擦り、',
            tachyon.uma_sex_title,
            'の弾力のある、敏感な耳先を弄る',
          ]);
          era.println();
          await tachyon.say_and_wait('ひっ……待って……だめですわ……');
          era.println();
          await era.printAndWait([
            'たっぷり三十秒耐えた末、',
            tachyon.get_colored_name(),
            ' はついに敗れ、',
            you.get_colored_name(),
            ' の腕の中へ崩れ落ちた',
          ]);
      }
      await era.printAndWait([
        tachyon.sex,
        'が完全に抗うのをやめてから、',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'を離す',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'はまださっきの体験に沈み、我に返れていない',
      ]);
      await era.printAndWait([
        'その瞬間、',
        you.get_colored_name(),
        ' は一生に一度の本音を吐き始める',
      ]);
      era.printButton('「愛してる、アグネスタキオン」', 1);
      await era.input();
      await tachyon.say_and_wait('！！！！？？？？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' の言葉を聞いた瞬間、',
        tachyon.sex,
        'の尻尾が逆立ち、毛を逆立てた猫のようだった',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname.substring(0, 1).repeat(5),
        callname,
        '！？ 何を言っていますの！？',
      ]);
      era.println();
      await era.printAndWait([
        'おや、',
        tachyon.get_colored_name(),
        ' の耳は、あまりよくないのか',
      ]);
      await era.printAndWait('なら、もう何度か言おう');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、初めて ',
        tachyon.get_colored_name(),
        ' を見たときを思い出す',
      ]);
      await era.printAndWait([tachyon.sex, 'の走り、', tachyon.sex, 'の儚さ']);
      await era.printAndWait([
        'どちらも ',
        you.get_colored_name(),
        ' を狂気へ沈め、',
        tachyon.sex,
        'へ魅せた',
      ]);
      await era.printAndWait(['ええ、「', tachyon.sex, '」だ']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'のメイクデビューを思い出す',
      ]);
      await era.printAndWait(
        '光のように、当然のようにレースへ出て、当然のようにすべてを超え、当然のように勝つ',
      );
      await era.printAndWait([
        '「レースなど実験結果の検証にすぎない」と言い、冷たい顔で、冷酷な態度でレースに臨む',
        tachyon.sex,
      ]);
      await era.printAndWait(['ええ、「', tachyon.sex, '」だ']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、初めて',
        tachyon.sex,
        'に弁当を作ったときを思い出す',
      ]);
      await era.printAndWait(
        '自分の可能性を見たいと、そのために自らを実験体にすることも厭わない',
      );
      await era.printAndWait([
        '想像を超え、限界を破る可能性を期待し、眼を狂わせた',
        tachyon.sex,
      ]);
      era.println();
      await era.printAndWait(['ええ、「', tachyon.sex, '」だ']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、夜通し眠らず実験する',
        tachyon.sex,
        'を思い出す',
      ]);
      await era.printAndWait(
        '研究のためなら体を捧げ、夢のためなら健康を捨てられる',
      );
      await era.printAndWait([
        '肉体はみすぼらしく、眼だけが夢への憧れで輝く',
        tachyon.sex,
      ]);
      await era.printAndWait(['ええ、「', tachyon.sex, '」だ']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、初めて一緒に外出したときの',
        tachyon.sex,
        'を思い出す',
      ]);
      await era.printAndWait(['変色キャベツ汁の騒動と', tachyon.sex, 'の拗ね']);
      await era.printAndWait([
        'そんなことで勝手を言い、挟んだぬいぐるみに喜び、そんな、普通の',
        tachyon.sex,
      ]);
      await era.printAndWait(['ええ、「', tachyon.sex, '」だ']);
      era.println();
      await era.printAndWait([
        'そして最後……眼前、',
        you.get_colored_name(),
        ' の前にいる',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '緊張して視線を彷徨わせ、',
        you.get_colored_name(),
        ' が再び口を開くのを待つ',
        tachyon.sex,
      ]);
      await era.printAndWait([
        'もともと淡い感情の両眼が、今は幸福と愛情で満ちた',
        tachyon.sex,
      ]);
      await era.printAndWait([
        '頬を赤らめ、見るからに……徹底的に恋に酔い、ただの',
        tachyon.teen_sex_title,
        'である',
        tachyon.sex,
      ]);
      era.printButton(
        '「愛してる、アグネスタキオン。愛しているのは『君』だ。走りでも、夢でも、可能性でもない」',
        1,
      );
      await era.input();
      await era.printAndWait('間違いない');
      await era.printAndWait(['すべての主体は', tachyon.sex, 'にある']);
      await era.printAndWait([
        '最初の自分は、たしかに',
        tachyon.sex,
        'の走りと狂気に惹かれただけだったのかもしれない',
      ]);
      await era.printAndWait([
        'だが今、',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'の、',
        you.get_colored_name(),
        ' の心における位置は、それらを超えている',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の考えも、とうに変わっていた',
      ]);
      await era.printAndWait([
        '「',
        tachyon.get_colored_name(),
        ' の夢を叶えるために、文句も言わず働く」のではない',
      ]);
      await era.printAndWait([
        '「',
        tachyon.get_colored_name(),
        ' のために、自分のすべてを捧げられる」のだ',
      ]);
      await era.printAndWait('だから……');
      era.printButton(
        '「たとえいつか、君が走らなくなっても、可能性を追わなくなっても、僕はこれまで通り君を愛する」',
        1,
      );
      await era.input();
      await era.printAndWait(
        '所詮、最初から最後まで、こんなに簡単な問題だった',
      );
      await era.printAndWait([
        '「母親と妻が水に落ちたら、どちらを先に助ける」のような問題で、主役が「',
        tachyon.get_colored_name(),
        '」と「',
        tachyon.get_colored_name(),
        ' の才能」に変わっただけだ',
      ]);
      await era.printAndWait([
        '…………こんな簡単な問題を、これほど複雑にできるのも、',
        tachyon.sex,
        'の才なのかもしれない',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'の厄介さに、苦笑を漏らす',
      ]);
      await era.printAndWait('だが、これで安心できるだろう');
      era.println();
      await tachyon.say_and_wait([callname, '……']);
      era.println();
      await era.printAndWait([
        'そう思った ',
        you.get_colored_name(),
        ' は、',
        tachyon.sex,
        'の顔に、喜びの涙と、花開く笑顔を見る',
      ]);
      await era.printAndWait(['大雨のあとのコスモスのように、艶やかだった']);
      era.drawLine();
      await tachyon.say_and_wait([callname, '～～今日の薬ですわ']);
      era.println();
      await era.printAndWait([
        '翌日、',
        you.get_colored_name(),
        ' は、前日までもう研究はできないと言っていた某',
        tachyon.uma_sex_title,
        'を見る',
      ]);
      await era.printAndWait(
        'いつもの薬より危うく見える蛍光の薬を手に、跳ねるようにトレーナー室へ入ってきた',
      );
      era.println();
      await tachyon.say_and_wait(
        '早く早く、今日の薬は今までの発光系の集大成ですわ。飲めば二万四千種のRGB色が出せますのよ～～',
      );
      await tachyon.say_and_wait(
        'そうそう、週末は実地実験に出ますから、元の予定は全部潰しなさい。分かりましたわね？',
      );
      await tachyon.say_and_wait(
        'それと今日の弁当は三十分早く持ってきてくださいまし。大事な実験がありますの',
      );
      await tachyon.say_and_wait(
        'だから覚えておいて……ああ、できるだけ液状のは避けて。実験に影響しますわ',
      );
      era.println();
      await era.printAndWait(
        '入るなり、興奮した研究者は実験と研究の話を止めない',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' ですら、その光景にしばらく呆けた',
      ]);
      await era.printAndWait(
        'もちろん、無理な要求のせいではない。普段の要求のほうがよほど無理だ。そうではなく……',
      );
      era.printButton('「研究できない、と言っていたよな？」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は覚えている。昨日、涙ぐんで、もう研究できない、もう可能性を見つけられないと言っていた ',
        tachyon.get_colored_name(),
        ' の、あわれな様子を',
      ]);
      await era.printAndWait([
        '今の',
        tachyon.sex,
        'には、前日の落胆も崩壊も、まったく見えない',
      ]);
      era.println();
      await tachyon.say_and_wait(['……本当のことですわよ、', callname, ' ']);
      await tachyon.say_and_wait(
        '今の私は、もう自分の可能性の研究に集中できませんわ。',
      );
      await tachyon.say_and_wait('頭の中は、四六時中あなたのことでいっぱい……');
      await tachyon.say_and_wait(
        '今この瞬間も、心ではあなたの喜ぶ顔、怒る顔、恥じる顔、緊張する顔を……',
      );
      await tachyon.say_and_wait(
        '私をこうしたのですから、責任を取っていただかないと困りますわ',
      );
      era.printButton('「ご……ごめん？」', 1);
      await era.input();
      await era.printAndWait('これは、自分のせいなのか？');
      await era.printAndWait(
        'それに、こんな直球の愛情をぶつけられると、やはり恥ずかしい……',
      );
      await era.printAndWait('違う、それはさっきの話と何の関係がある');
      await era.printAndWait(
        '今も普段どおり研究している理由の説明になっていないではないか？',
      );
      era.println();
      await tachyon.say_and_wait(
        'だから……もう自分のことだけを考えていられませんわ',
      );
      await tachyon.say_and_wait(
        '今思いつくすべての可能性に……あなたが傍にいなければなりません。これから考えられるのも、たぶん『あなたと』一緒の可能性だけでしょう',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は急に',
        tachyon.sex,
        'の意味が分からなくなり、じっと ',
        tachyon.get_colored_name(),
        ' を見る',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' も ',
        you.get_colored_name(),
        ' の視線の下で、落ち着かなくなってくる',
      ]);
      await era.printAndWait(
        'それから、ダムが決壊するように、何事もない顔が、恋人の視線という最後の一押しで',
      );
      await era.printAndWait(
        '一瞬にして、満面を赤らめた恥じらいの表情へ変わる',
      );
      era.println();
      await tachyon.say_and_wait(
        'ですから……つまり……週末の実験……時間は空けられますわね……',
      );
      await tachyon.say_and_wait(
        '一般に言う、あの、つまり、デートと呼ばれる行為が二人にどれほど適するかの検証で…………',
      );
      await tachyon.say_and_wait(
        'とにかく！ 土曜日の朝九時、遅刻は許しませんわ！ それと私の朝食も持ってきて！ 以上ですわ！',
      );
      await tachyon.say_and_wait(
        'それと、今日の昼の弁当……できれば……一口で食べやすいものに……',
      );
      await tachyon.say_and_wait(
        'あの……恋人関係における『あーん』行為の心拍指数測定を……してもよろしいですの？',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'が恥ずかしさを押し切って言い終える様子を見て、',
        you.get_colored_name(),
        ' は思わず笑ってしまう',
      ]);
      await era.printAndWait('こんなとき、どう答えればいいだろう');
      await era.printAndWait(
        'この勝手で、気ままな、いちばん可愛い狂った科学者に',
      );
      await era.printAndWait([
        'このいとおしく、愛おしい、いちばん愛する恋する',
        tachyon.teen_sex_title,
        'に',
      ]);
      era.println();
      await you.say_and_wait([
        'はい……私の',
        tachyon.sex_code - 1 ? '姫' : '王子',
        '様',
      ]);
      return [];
    };
    f.title = title;
    return f;
  })(),
  '74-reject-1': (() => {
    const title = '歯車が回りだす';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' は、初めて ',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'に会ったときの光景を思い出す',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の走り、',
        tachyon.sex,
        'の儚さ、',
        tachyon.sex,
        'の可能性',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'に両眼を灼かれた ',
        you.get_colored_name(),
        ' は、あのときすでに、',
        tachyon.sex,
        'のためにすべてを捧げることを誓っていたのではないか',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は多くを言わず、直接',
        tachyon.sex,
        'の手から試験管を受け取る',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'は以前、自分には狂った眼があると言った',
      ]);
      await era.printAndWait([
        'その狂気の源は、きっと',
        tachyon.sex,
        'の輝きの反射だ',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の狂気は',
        tachyon.sex,
        'の夢から生まれ、',
        you.get_colored_name(),
        ' の狂気は',
        tachyon.sex,
        'から生まれた',
      ]);
      await era.printAndWait([
        'なら、',
        tachyon.sex,
        'の夢のために、',
        tachyon.sex,
        'があの光を放ち続けるために、自分を犠牲にして何が悪い？',
      ]);
      era.println();
      await era.printAndWait([
        '今の ',
        you.get_colored_name(),
        ' は、敬虔な信徒のようだ。事実、そうでもある',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の心の神、唯一の光が、今は ',
        you.get_colored_name(),
        ' のために闇へ堕ちている',
      ]);
      await era.printAndWait('そんなことは、絶対に許されない');
      await era.printAndWait('幸い、まだ救いがある');
      era.println();
      await era.printAndWait([
        '自分が消えれば、',
        tachyon.sex,
        'はまた ',
        you.get_colored_name(),
        ' の見たい光を放てる',
      ]);
      era.printButton('「ありがとう……可能性の彼方で、また会おう」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' を信じている。妄信、盲信と言ってもいい',
      ]);
      await era.printAndWait([
        'だが同時に、',
        you.get_colored_name(),
        ' の内側には、一筋の恐れも残っている',
      ]);
      await era.printAndWait([
        'もし自分が死んだあと、',
        tachyon.sex,
        'が自分の思うほど強くなかったら、どうする',
      ]);
      await era.printAndWait([
        'もし',
        tachyon.sex,
        'が、',
        tachyon.sex,
        '自身の思うほど強くなかったら、どうする',
      ]);
      await era.printAndWait([
        'だからこれは、',
        you.get_colored_name(),
        ' が万一のためにかけた枷だ',
      ]);
      era.println();
      await era.printAndWait([
        '自分が',
        tachyon.sex,
        'にとって、それほど大切だとは思わない。だが万一、もし、',
        tachyon.sex,
        'が本当に立ち直れなくなったら……この枷、あるいは、この呪いが',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'がかつて愛した者からの呪いが、',
        tachyon.sex,
        'を前へ押し、',
        tachyon.sex,
        'の理想に届くまで進ませる',
      ]);
      await era.printAndWait([
        'もしすべて自惚れで、自分が',
        tachyon.sex,
        'の心にそれほどの重さを占めていなかったなら、',
      ]);
      await era.printAndWait([
        'それがいちばんだ。',
        tachyon.sex,
        'はただのモルモットに歩みを止められず、堅持し、堅く前へ進むだろう',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はそう願い、試験管を掲げて飲み下し、それから……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は驚きと喜びに目を見開く。',
        tachyon.sex,
        'が顔を上げ、いつもの笑顔を浮かべている',
      ]);
      await era.printAndWait([
        'これでいい。',
        tachyon.sex,
        'はきっと、きっと自分の道を堅持する…………',
      ]);
      era.setToBottom();
      await era.printAndWait('次の瞬間');
      era.setToBottom();
      await era.printAndWait([
        you.get_colored_name(),
        ' は感じる。何かが ',
        you.get_colored_name(),
        ' の唇に触れた',
      ]);
      await era.printAndWait('柔らかく、温かく、瑞々しい、二枚の薔薇');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' が、',
        you.get_colored_name(),
        ' の唇に口づけた',
      ]);
      era.println();
      await era.printAndWait([
        'それだけではない。',
        tachyon.sex,
        'の舌が ',
        you.get_colored_name(),
        ' の双唇をこじ開ける',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の舌が ',
        you.get_colored_name(),
        ' の口の中で掻き混ぜ、求める',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の舌が名残惜しげに ',
        you.get_colored_name(),
        ' の歯間、',
        you.get_colored_name(),
        ' の舌先、',
        you.get_colored_name(),
        ' の歯茎を舐める————だが、それらは',
        tachyon.sex,
        'の目標ではない',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の目標は————あまりに突然の展開で、',
        you.get_colored_name(),
        ' が反応できず、呑み込むことすらできなかった、',
        you.get_colored_name(),
        ' の口の中の薬',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はやっと気づき、慌てて止めようとする',
      ]);
      await era.printAndWait('だが、もう遅い');
      await era.printAndWait([
        you.get_colored_name(),
        ' の口の中の薬は、すでに',
        tachyon.sex,
        'に大半を分け取られていた',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、なぜかと問う余裕すらなく、急いで舌を抜き、',
        tachyon.sex,
        'を止めようとする',
      ]);
      await era.printAndWait([
        'だが人間は、力では',
        tachyon.uma_sex_title,
        'に敵わない。これほど実験を重ねた ',
        you.get_colored_name(),
        ' でも、例外ではない',
      ]);
      era.println();
      await era.printAndWait('ついに、一世紀ほども長いキスが終わる');
      await era.printAndWait([
        '離れた二人は息を継ぎ、',
        you.get_colored_name(),
        ' は息を整えながら ',
        tachyon.get_colored_name(),
        ' に吐かせようと駆け寄る……だが、足が止まる',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' ',
        tachyon.sex,
        'の今の表情、情緒は、',
        you.get_colored_name(),
        ' には理解できない',
      ]);
      await era.printAndWait('喜びなら、なぜ顔を涙が伝うのか');
      await era.printAndWait([
        '悲しみなら、なぜ ',
        you.get_colored_name(),
        ' が見たことのない、完璧と言ってよい笑顔を浮かべているのか',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          'それから、',
          you.get_colored_name(),
          ' の口に残った薬が、このとき不意に味を変える。もともと無色無臭だった薬の、今の味は……',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            '最後のキスの味が、豚丼だなんて、思いませんでしたわ',
          );
        } else {
          await tachyon.say_and_wait(
            '初キスの味が、豚丼だなんて、思いませんでしたわ',
          );
        }
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は、バレンタインにもらったチョコレートを思い出す',
        ]);
        await era.printAndWait([
          '毎日薬を飲まされる自分と、その反応を楽しむ ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait('あの美しい日々が、永遠に続いてほしかった');
        await era.printAndWait(
          'あの紅茶の香りが、いつまでも変わらなければよかった',
        );
        await era.printAndWait('覚悟は固めたはずなのに');
        await era.printAndWait('どうして今、そんな日々を懐かしんでいるのか');
        era.println();
        await tachyon.say_and_wait([callname, '、ごめんなさい。騙しましたわ']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はなおあの艶やかな笑顔を保ち、顔の涙も珠のように落ち続ける',
        ]);
        era.println();
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          ' は、実は、それほど凄い',
          tachyon.uma_sex_title,
          'ではありませんの',
        ]);
        await tachyon.say_and_wait([
          '可能性のためならすべてを捨てられる',
          tachyon.uma_sex_title,
          'でもありません',
        ]);
        await tachyon.say_and_wait([
          '夢のためなら愛する者を死なせられる',
          tachyon.uma_sex_title,
          'でもありません',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' は首を振りながら言う。',
          you.get_colored_name(),
          ' は何か言いたいが、なぜか口が開かない',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '……いいえ、そう言うのも違うかもしれません。正しくは、',
          tachyon.sex,
          'はかつて、そういう',
          tachyon.uma_sex_title,
          'でした',
        ]);
        await tachyon.say_and_wait([
          'だが、さっき申し上げた通り、モルモット君に変えられた姫は、愛が何かを知ってしまった。だから……',
          tachyon.sex,
          'には、もうできない',
        ]);
        await tachyon.say_and_wait([
          tachyon.get_colored_name(),
          ' も、所詮はただの',
          tachyon.child_sex_title,
          'ですわ',
        ]);
        await tachyon.say_and_wait([
          'だから、',
          tachyon.sex,
          'は恋に落ち、恐れ、自分が好きな人が自分を好きかどうか怖がり……',
        ]);
        await tachyon.say_and_wait(
          '好きな人の眼に映っているのが、実は自分ではないのではないかと恐れる',
        );
        era.println();
        await era.printAndWait([
          '最初から最後まで、「',
          callname,
          '」が見て、魅せられたのは「',
          tachyon.get_colored_name(),
          ' の走り」、「',
          tachyon.get_colored_name(),
          ' の夢」',
        ]);
        await era.printAndWait(['では……', tachyon.get_colored_name(), ' は？']);
        await era.printAndWait([
          'いいえ……',
          tachyon.get_colored_name(),
          '……は、誰？',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '……ああ、薬が効いてきましたわ…………もう少し、話したかったのですが',
        );
        era.println();
        await era.printAndWait([
          '眼前の',
          tachyon.teen_sex_title,
          'の顔から、涙はもう落ちない。だが笑顔はなお輝いている',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '…………でも、少なくとも振られてはいない。つまり、最低限、拒まれてはいない、',
        );
        await tachyon.say_and_wait(
          'そうですわね？ それで十分……ええ、それで十分、はははっ！',
        );
        era.println();
        await era.printAndWait('ははははは');
        await era.printAndWait([
          tachyon.teen_sex_title,
          'は豪快に笑い、',
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の笑う姿に、ある影を思い浮かべる……',
        ]);
        await era.printAndWait([
          '自分が何かを飲んだあと、「',
          tachyon.sex,
          '」もいつも自分を見て豪快に笑っていた。',
        ]);
        await era.printAndWait([
          '「',
          tachyon.sex,
          '」は何という名前だった？ 「',
          tachyon.sex,
          '」は、眼前のこの',
          tachyon.teen_sex_title,
          'なのか？',
        ]);
        era.println();
        await tachyon.say_and_wait([
          'ごめんなさいね、',
          callname,
          '、こんなに振り回しておいて、最後はすべて泡になってしまうなんて…',
        ]);
        await tachyon.say_and_wait([
          'ですが、',
          tachyon.get_colored_name(),
          ' の最後の勝手だと思ってくださいまし……次は、こんな面倒な',
          tachyon.phy_sex_title,
          'に、二度と魅せられませんように',
        ]);
        era.println();
        await era.printAndWait([
          '「',
          tachyon.get_colored_name(),
          '」、「',
          callname,
          '」',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は必死に、どこか似ていて、印象のあるこれらの名詞を頭へ留めようとする。',
        ]);
        await era.printAndWait(
          'だが脳はドラム式洗濯機に入れられたようで、記憶は汚れのように洗い落とされていく',
        );
        await era.printAndWait([
          '眼前の',
          tachyon.teen_sex_title,
          'の姿すら、朝焼けに消える泡のように儚い',
        ]);
        era.setToBottom();
        await tachyon.say_and_wait(['おやすみなさい、', callname, ' ']);
        era.setToBottom();
        await era.printAndWait([
          'その言葉を聞いたあと、',
          you.get_colored_name(),
          ' の意識は深淵へ沈む',
        ]);
        era.setToBottom();
        era.drawLine();
        await tachyon.say_as_unknown_and_wait('……起き');
        await tachyon.say_as_unknown_and_wait('………起きて');
        era.println();
        await era.printAndWait([you.get_colored_name(), ' は目を覚ました']);
        await era.printAndWait([
          'ある声に起こされた ',
          you.get_colored_name(),
          ' は、眼を開けて見た天井が見知らぬものだと気づく',
        ]);
        era.printButton('「ここはどこだ？」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait('……ここは私の実験室ですわ');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は声のするほうを見る',
        ]);
        await era.printAndWait([
          '眼前は栗毛の',
          tachyon.uma_sex_title,
          '。切り揃えた短髪と白衣が、',
          tachyon.sex,
          'の研究者としての身分を語っている。',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'は品定めするような眼で ',
          you.get_colored_name(),
          ' を見、なぜか ',
          you.get_colored_name(),
          ' は肌が粟立つ',
        ]);
        era.printButton('「君は誰だ？」', 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          'その質問は、私がするべきですわ……あなたは何者？ どうして私の実験室に寝ているんですの？',
        );
        await era.printAndWait(['栗毛の', tachyon.uma_sex_title, 'は言う']);
        await era.printAndWait([
          'このとき ',
          you.get_colored_name(),
          ' はやっと、自分がまだ床に寝ていることに気づき、急いで起き上がる',
        ]);
        era.printButton(`「${you.actual_name}だ。トレーナーをしている」`, 1);
        await era.input();
        await tachyon.say_as_unknown_and_wait(
          '…………おや？ ではトレーナー君、ここで寝ているのは、何のご用ですの',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は、ここに横たわる前に何をしていたか思い出そうとするが、どうしても出てこない',
        ]);
        era.println();
        await tachyon.say_as_unknown_and_wait(
          '…………思い出せなくても結構ですわ。なぜか私も記憶を失ったようで、さっきまで何をしていたか思い出せません……',
        );
        await tachyon.say_as_unknown_and_wait([
          'まあ、その話は置いておきましょう。とにかく、私は ',
          tachyon.get_colored_name(),
          '。トレーナー君、よろしくですわ',
        ]);
        era.println();
        await era.printAndWait([tachyon.get_colored_name()]);
        await era.printAndWait([
          'その名前を聞いた瞬間、',
          you.get_colored_name(),
          ' の内側は一拍、欠けたような気がする',
        ]);
        await era.printAndWait('聞いたことのない名前のはずなのに');
        await era.printAndWait([
          'この',
          tachyon.uma_sex_title,
          'を知らないはずなのに',
        ]);
        await era.printAndWait('なぜか、馴染みがある');
        era.println();
        era.printButton('「僕たち……どこかで会ったことが？」', 1);
        await era.input();
        await tachyon.say_and_wait(
          'おや、近頃はそんな古い口説きは流行りませんわよ、トレーナー君',
        );
        await era.printAndWait([
          tachyon.sex,
          'は ',
          you.get_colored_name(),
          ' を見て悪戯な笑顔を浮かべ、',
          you.get_colored_name(),
          ' は慌てて、そういう意味ではないと説明する',
        ]);
        era.println();
        await tachyon.say_and_wait(
          '冗談ですわ……なぜか、私も同じ感じがしますの',
        );
        era.println();
        await era.printAndWait([
          'なぜか、トレーナーとしての直感が ',
          you.get_colored_name(),
          ' に告げる。この',
          tachyon.uma_sex_title,
          'は、きっと ',
          you.get_colored_name(),
          ' を震撼させる走りを見せる、と。',
        ]);
        await era.printAndWait([
          'だが同時に、ある絵が ',
          you.get_colored_name(),
          ' の頭に浮かび続ける。',
          tachyon.get_colored_name(),
          ' というこの',
          tachyon.uma_sex_title,
          'が……',
        ]);
        await era.printAndWait('しきりに弁当をねだる姿？？？');
        await era.printAndWait([
          '気づくと、',
          you.get_colored_name(),
          ' はすでに',
          tachyon.sex,
          'へ契約を申し込んでいた',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '…………申し上げますが、普通、こんなに突然契約を申し込むものですの？ これは',
          tachyon.uma_sex_title,
          'の一生に関わることですわ。もう少し真剣に扱うべきだと思いませんの？',
        ]);
        era.printButton('「きっと、僕たちは合う気がする」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          ' は言い終え、すべて終わったと思う',
        ]);
        await era.printAndWait(
          '何を考えていたんだ。既視感はあるが、普通はこんなに突然契約を申し込まない！！',
        );
        await era.printAndWait(
          'これで終わりだ。拒まれるだけでなく、さんざん笑われるかもしれない…………',
        );
        era.println();
        await era.printAndWait([
          '案の定、',
          tachyon.get_colored_name(),
          ' という',
          tachyon.uma_sex_title,
          'は聞いて一度呆け、それから豪快に笑い、それから……',
        ]);
        await tachyon.say_and_wait('いいですわ');
        era.println();
        await era.printAndWait('ほら、やはり………………');
        await era.printAndWait('？？？？？');
        await era.printAndWait([
          you.get_colored_name(),
          ' は満面の疑問符を浮かべて相手を見る',
        ]);
        await era.printAndWait([tachyon.sex, 'は目尻に笑った涙を拭い、言う']);
        era.println();
        await tachyon.say_and_wait(
          'なぜか、私も同じ感じがしますわ……その感じの源が何かは、もちろん調べなければなりませんが、',
        );
        await tachyon.say_and_wait(
          'あなたは悪い人ではないと思います。その上、絶対に面白い人になる……',
        );
        await tachyon.say_and_wait(
          'ふふ、ですから、よろしくですわ、トレーナー…………いいえ、モルモット君',
        );
        era.println();
        await era.printAndWait('「モルモット君」');
        await era.printAndWait([
          tachyon.sex,
          'が不意に変えた呼び方が、少し訳が分からず、少し怖い……',
        ]);
        await era.printAndWait([
          'モルモットという呼び方は、普通あまり良い呼び方ではないだろう。それに',
          tachyon.sex,
          'のこの研究狂いの様子…………',
        ]);
        await era.printAndWait([
          'だがそれ以外に、',
          you.get_colored_name(),
          ' は一筋の親しさも感じる',
        ]);
        era.printButton('「よろしく、アグネスタキ…………タキオン」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_actual_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' を知った',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  '74-reject-2': (() => {
    const title = '時が戻る';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} taste 秋川やよい / ノーザンテースト
     * @param {CharaTalk} minoru 駿川たづな / ハーベストタイム
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, taste, minoru, you) => {
      await era.printAndWait('順当であるかのように');
      await era.printAndWait([
        you.get_colored_name(),
        ' は、なぜか馴染みのある栗毛の',
        tachyon.uma_sex_title,
        '———',
        tachyon.get_colored_name(),
        ' と契約を結んだ',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は契約の登記をしなければと思い、',
        minoru.get_colored_name(),
        ' と ',
        taste.get_colored_name(),
        ' のもとへ向かう',
      ]);
      await era.printAndWait([
        '…………なぜ',
        minoru.couple_title,
        'は、あんな悲しい眼で自分を見ているのか',
      ]);
      await minoru.say_and_wait('分かります。また、あの子の薬でしょう……');
      await era.printAndWait('どういう意味だ。あの子とは誰だ？');
      await taste.say_and_wait([
        'ご愁傷様です！ ',
        you.actual_name,
        ' トレーナーなら、すぐに記憶を取り戻すと信じていますよ',
      ]);
      await era.printAndWait([
        'これはまたどういう意味だ……',
        minoru.couple_title,
        'は ',
        you.get_colored_name(),
        ' が記憶を失ったことを知っている？ まさか ',
        you.get_colored_name(),
        ' の記憶喪失や同程度の事故は、よくあることなのか？',
      ]);
      era.println();
      await era.printAndWait('訳が分からない……まあ、そういうことにしておこう');
      await era.printAndWait([
        'とにかく、',
        you.get_colored_name(),
        ' と ',
        tachyon.get_colored_name(),
        ' の育成が始まる！',
      ]);
    };
    f.title = title;
    return f;
  })(),
  '74-reject-3': (() => {
    const title = '止まった時計';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        'では……まずは実験相棒としての息を合わせましょう、',
        callname,
        '、私の走りをよく見てくださいまし、ふふ',
      ]);
      era.println();
      await era.printAndWait('やはり……何かがおかしい');
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の走りを、',
        tachyon.sex,
        'が走る姿を見ているうちに気づく',
      ]);
      await era.printAndWait('速い。目を奪う走りだ');
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' には、それを考える余裕がない',
      ]);
      await era.printAndWait(
        'ええ、速い、眩しい。だが、それだけではない気がする',
      );
      await era.printAndWait('どこかで、似た走りを見たことがあるような');
      await era.printAndWait([
        '水面の光源のように、',
        you.get_colored_name(),
        ' の頭の奥をくすぐり続け、',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が水面へ泳ぎ出そうとする瞬間に、跡形もなく消える',
      ]);
      era.println();
      await you.say_and_wait('おかしい……', true);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' が頭を掻いて悩んでいるとき………',
      ]);
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait('トレーニング場で、突然事態が変わる');
      await era.printAndWait([
        '走りを見せるだけだと言っていた ',
        tachyon.get_colored_name(),
        ' が、次第に、ますます速く走る',
      ]);
      await era.printAndWait('さっきのは……準備運動だけだったのか？');
      await era.printAndWait([
        '普通の体操服の ',
        tachyon.get_colored_name(),
        ' が、トレーニング場を軽やかに走る',
      ]);
      await era.printAndWait('速くなる、速くなる');
      await era.printAndWait([
        'なぜか、',
        you.get_colored_name(),
        ' の胸に急迫が湧く',
      ]);
      await era.printAndWait('焦りと、切迫');
      era.println();
      await era.printAndWait([
        'こんなに速く走って、',
        tachyon.get_colored_name(),
        ' ',
        tachyon.sex,
        'の脚は、大丈夫なのか？',
      ]);
      await era.printAndWait('……？ なぜ問題がある？');
      await era.printAndWait(['だって、', tachyon.sex, 'の脚は……']);
      await era.printAndWait([tachyon.sex, 'の脚は、あんなに脆いのに']);
      await era.printAndWait([
        'なぜ自分は、',
        tachyon.sex,
        'の脚が脆いと知っている',
      ]);
      era.println();
      await era.printAndWait('分からない。だが、分かりたい');
      await era.printAndWait([
        '真相を知りたい切迫が、',
        you.get_colored_name(),
        ' を考え続けさせる',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の思考の速度に合わせるかのように',
      ]);
      await era.printAndWait([tachyon.get_colored_name(), ' も加速を続ける']);
      await era.printAndWait([
        'そして……',
        you.get_colored_name(),
        ' の認識の果て',
      ]);
      await era.printAndWait('頭の奥に隠れた、いちばん大事なもの');
      await era.printAndWait([tachyon.uma_sex_title, 'の限界速度']);
      await era.printAndWait([
        you.get_colored_name(),
        ' の知る、',
        tachyon.uma_sex_title,
        'の限界',
      ]);
      await era.printAndWait([
        '————',
        tachyon.get_colored_name(),
        ' の限界速度',
      ]);
      era.println();
      await era.printAndWait([
        '眼前の ',
        tachyon.get_colored_name(),
        ' と、頭の中の捉えどころのない光源が、次第に重なる',
      ]);
      await era.printAndWait([
        'そこで ',
        you.get_colored_name(),
        ' は最後の一度、水面へ手を伸ばす',
      ]);
      await era.printAndWait('————————触れた');
      await era.printAndWait('————————思い出した');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、',
        you.get_colored_actual_name(),
        ' の担当',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait('出会いのこと、レースのこと、それから……');
      era.println();
      await era.printAndWait('それから……？');
      await era.printAndWait('分からない');
      await era.printAndWait('忘れている');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、自分の担当',
        tachyon.uma_sex_title,
      ]);
      await era.printAndWait([
        you.get_colored_actual_name(),
        ' は、',
        tachyon.get_colored_name(),
        ' のモルモット君',
      ]);
      await era.printAndWait('ここまでは間違いない');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' のレースの、一つ一つのこと',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の走りの細部まで、自分ははっきり覚えている',
      ]);
      await era.printAndWait('だが……');
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' は何が好きか']);
      await era.printAndWait([tachyon.get_colored_name(), ' の生活習慣']);
      await era.printAndWait([tachyon.get_colored_name(), ' の趣味']);
      await era.printAndWait([tachyon.get_colored_name(), ' の普段の身なり']);
      await era.printAndWait(
        'なぜか頭に残っている、おそらくレース管理に関わる食事の好み以外は、',
      );
      await era.printAndWait('他のすべてに、触れたことがないかのようだ');
      era.println();
      await era.printAndWait('不自然だ');
      await era.printAndWait('不自然としか感じられない');
      await era.printAndWait(
        'こんなに長く知り合い、こんなに多く触れ合ってきたのに',
      );
      await era.printAndWait([
        tachyon.sex,
        'のレースと走りを、これほど諳んじられるのに',
      ]);
      await era.printAndWait([
        'それでも ',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'を、何も知らないかのようだ',
      ]);
      era.println();
      await tachyon.say_and_wait(['ふう……では、モルモット君、いかがでした？']);
      era.printButton('「よく走っていた！」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        ' は無意識に、記憶の中で何度も返した答えを口にする',
      ]);
      await era.printAndWait('どこか、おかしい気がする');
      await era.printAndWait('何が起きたのか分からない');
      await era.printAndWait('だが……');
      era.println();
      await era.printAndWait('それらを思い出した瞬間');
      await era.printAndWait('胸の奥で、確かに一言を聞いた気がする');
      era.println();
      era.printButton(`「今度こそ、${tachyon.sex}の想いを裏切るな」`, 1);
      await era.input();
      await era.printAndWait('どういう意味だろう……よく考えてみよう');
    };
    f.title = title;
    return f;
  })(),
  '74-betray': (() => {
    const title = [{ color: buff_colors[3], content: '魔女の薬' }];
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([you.get_colored_name(), ' は、不意に疲れた']);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は薬を ',
        tachyon.get_colored_name(),
        ' の手へ押し戻す',
      ]);
      era.println();
      await tachyon.say_and_wait(['…………', callname, '？']);
      era.printButton('「疲れた。飲むなら自分で飲め」', 1);
      await era.input();
      await era.printAndWait('いつからだろう。理由は何だろう。');
      await era.printAndWait([
        'あるいは ',
        you.get_colored_name(),
        ' は、もう ',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'の勝手に耐えられなくなったのか',
      ]);
      await era.printAndWait([
        'あるいは ',
        you.get_colored_name(),
        ' は、すでに ',
        tachyon.get_colored_name(),
        ' への忍耐を失ったのか',
      ]);
      await era.printAndWait([
        'あるいは ',
        you.get_colored_name(),
        ' は、これも',
        tachyon.sex,
        'のまた一つの冗談だと思ったのか',
      ]);
      await era.printAndWait([
        '所詮、',
        tachyon.sex,
        'の都合で自分に死ねと言うなど、この女は何の冗談を言っているんだ',
      ]);
      era.println();
      await era.printAndWait([
        'とにかく、',
        you.get_colored_name(),
        ' は薬を',
        tachyon.sex,
        'へ押し返した',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、この薬が本当に人を死なせるかどうかなど気にしない',
      ]);
      await era.printAndWait(
        'いいえ、本当に人を死なせるなら、それも悪くないかもしれない',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' の内側に、そんな暗い考えまで生まれていた',
      ]);
      era.println();
      await tachyon.say_and_wait('…………ああ、そうですか……分かりましたわ');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は、激しい反応を見せなかった',
      ]);
      await era.printAndWait([
        'いつもの',
        tachyon.sex,
        'に比べ、異常なほど落ち着いた様子が、かえって ',
        you.get_colored_name(),
        ' の興味を少し引く',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は、やっと顔を上げた',
        tachyon.sex,
        'が、釈然とし、解き放たれたような笑顔を浮かべているのを見る',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……そうですわね。この問題の答えは、もともと二つだけではなかった',
      );
      await tachyon.say_and_wait(
        '生と死の外に、第三の選択肢がある。出題者を死なせる、ということですわね？',
      );
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は思わず眉を寄せる']);
      await era.printAndWait('話が長い。飲むのか、飲まないのか');
      await era.printAndWait([
        '……いいえ、所詮この、いつも他人に薬を飲ませる',
        tachyon.phy_sex_title.substring(0, 1),
        'は',
      ]);
      await era.printAndWait('自分が薬を飲むことなど、考えていなかっただろう');
      await era.printAndWait([
        you.get_colored_name(),
        ' はため息をつき、また一つの茶番だと嘆き、実験室を出ようとする',
      ]);
      era.drawLine();
      await era.printAndWait([
        'そして、',
        you.get_colored_name(),
        ' が振り返って出ようとした瞬間',
      ]);
      era.println();
      await tachyon.say_and_wait('ぐっ………！');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は強引に口づけられた']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は抗おうとするが、人間は所詮',
        tachyon.uma_sex_title,
        'の力に敵わない。薬で何度も改造された ',
        you.get_colored_name(),
        ' でも同じだ',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の舌が ',
        you.get_colored_name(),
        ' の唇をこじ開け、',
        you.get_colored_name(),
        ' の口の中で掻き混ぜ、導く',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の舌が名残惜しげに ',
        you.get_colored_name(),
        ' の歯間、',
        you.get_colored_name(),
        ' の舌先、',
        you.get_colored_name(),
        ' の歯茎を舐める————だが、それらは',
        tachyon.sex,
        'の目標ではない',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'の目標は————まだ飲み込んでいない、人を「消す」に足りる薬を、',
        you.get_colored_name(),
        ' の口へ導くこと',
      ]);
      era.println();
      await you.say_and_wait('ぐっ……！ ううう………！！！');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は必死に抗い、体をよじるが、相手を止められない',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の徒労の抵抗の末、薬はそれでも ',
        you.get_colored_name(),
        ' たち二人で分け尽くされた',
      ]);
      era.println();
      await you.say_and_wait('くそっ……！');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は思わず大声で罵る']);
      await era.printAndWait([
        'この',
        tachyon.phy_sex_title.substring(0, 1),
        'は何を考えている。死ぬなら道連れまで取るのか',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は険しく',
        tachyon.sex,
        'を睨み、すぐ罵ろうとして……言葉が口へ出る寸前で止まる',
      ]);
      era.println();
      era.println();
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), ' が泣いていた']);
      await era.printAndWait([
        'いいえ……正確には、',
        tachyon.sex,
        'は涙を流しながら、笑顔を絞り出そうとしている。だが最終的に浮かんだのは、泣くより見苦しい笑顔だった',
      ]);
      await era.printAndWait([
        'これは ',
        you.get_colored_name(),
        ' が',
        tachyon.sex,
        'を知って以来、初めて見る',
        tachyon.sex,
        'の、これほどみすぼらしい姿だ',
      ]);
      era.println();
      await tachyon.say_and_wait([
        'は……はははっ、',
        callname,
        '、ごめんなさい、騙しましたわ',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'は何事もない口調を装おうとするが、噎せる声がその行いをひどく難しくしている',
      ]);
      era.println();
      await tachyon.say_and_wait(
        'これ、毒などではありませんわ…………逆に、『始め直す』薬ですのよ',
      );
      era.println();
      await era.printAndWait([
        tachyon.sex,
        'はそう言うが、',
        tachyon.sex,
        'が試験管を掲げた手は今も震え続け、',
        you.get_colored_name(),
        ' は',
        tachyon.sex,
        'の言葉を信じられない',
      ]);
      era.println();
      await era.printAndWait(
        '…………信じないでしょう？ 構いませんわ。薬が効けば分かります',
      );
      era.println();
      await era.printAndWait('ふざけるな……！');
      await era.printAndWait([
        you.get_colored_name(),
        ' はそう叫びたいが、体がもう動かないことに気づく',
      ]);
      if (era.get('cflag:32:扩展变量')?.choco > 0) {
        await era.printAndWait([
          'それから、',
          you.get_colored_name(),
          ' の口に残った薬が、このとき不意に味を変える。もともと無色無臭だった薬の、今の味は……',
        ]);
        era.println();
        if (era.get('exp:32:接吻次数') > 0) {
          await tachyon.say_and_wait(
            '最後のキスの味が、豚丼だなんて、思いませんでしたわ',
          );
        } else {
          await tachyon.say_and_wait(
            '初キスの味が、豚丼だなんて、思いませんでしたわ',
          );
        }
        await era.printAndWait([
          you.get_colored_name(),
          ' は、バレンタインにもらったチョコレートを思い出す',
        ]);
        await era.printAndWait([
          'あのときから、この',
          tachyon.uma_sex_title,
          'は奇妙な薬で自分を責め続けてきた',
        ]);
        await era.printAndWait(
          '毎回、自分が薬を飲んだ反応を見て豪快に笑い、楽しむ',
        );
        await era.printAndWait(
          '今となって、もうこれに耐えられない自分の、何が悪い？',
        );
      }
      await era.printAndWait([
        'たしかに、最初 ',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' という',
        tachyon.uma_sex_title,
        'の走りと、',
        tachyon.sex,
        'の夢に興味を持った',
      ]);
      await era.printAndWait([
        'たしかに、',
        you.get_colored_name(),
        ' は心から',
        tachyon.sex,
        'を助け、',
        tachyon.sex,
        'を守り、',
        tachyon.sex,
        'が夢を果たすまで寄り添いたかった',
      ]);
      await era.printAndWait([
        'だが、',
        you.get_colored_name(),
        ' はもう飽きた',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'への怒り、不満、落胆、嫌悪が積み重なった重さは、天秤の向こうの、',
        tachyon.sex,
        'への期待、好意、憧れを超えていた',
      ]);
      era.println();
      await era.printAndWait([
        '今の ',
        you.get_colored_name(),
        ' は、早くこの',
        tachyon.uma_sex_title,
        'から逃れたいだけなのに、こんな毒まで飲まされる。',
      ]);
      await you.say_and_wait(
        'お前みたいなやつと、ロミオとジュリエットの真似をする暇はない！',
        true,
      );
      await era.printAndWait([
        'だが口の利けない ',
        you.get_colored_name(),
        ' は、黙って ',
        tachyon.get_colored_name(),
        ' が言い終えるのを聞くしかない。せめて、険しい視線で ',
        tachyon.get_colored_name(),
        ' を睨み、不満の吐き出し口にする',
      ]);
      era.println();
      await tachyon.say_and_wait('正直に申しますと、本当に怖かった');
      await tachyon.say_and_wait(
        '人を好きなのに、相手が自分を好きかどうか分からない感覚は、本当に、怖いですわ',
      );
      await tachyon.say_and_wait(
        'どんな実験結果より心を昂ぶらせ、どんなレースの結果より胸を速く打つ',
      );
      await tachyon.say_and_wait('正直に申しますと、本当に怖かった');
      await tachyon.say_and_wait(
        '相手の好きなのが自分ではなく、自分の持つ『何か』だけだったら、',
      );
      await tachyon.say_and_wait(
        'どうすればいい。相手の眼に映っているのが、自分の『夢』だけで、自分という人間ではなかったら',
      );
      await tachyon.say_and_wait(
        '私は、ずっとそれを心配していました……いちばん大事なこと、いちばん恐ろしい可能性を、忘れて',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は嗤い、あまりに無邪気で楽観的だった自分を嘲る',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '相手は、そもそも自分を好きではなかった。自分のすべてを、夢の可能性すら含めて、好きではなかった',
      );
      era.println();
      await era.printAndWait([
        'ついに、',
        tachyon.get_colored_name(),
        ' の顔の笑顔——もしそれを笑顔と呼べるなら——が崩れる',
      ]);
      await era.printAndWait('徹底した泣き顔になる');
      era.println();
      await tachyon.say_and_wait(
        'これが……失恋の感じなのですね……うっ……辛い……怖い……心が砕けそうですわ……',
      );
      await tachyon.say_and_wait(
        'そうだったのですね……振られたのですね……痛い……心が痛い……',
      );
      await tachyon.say_and_wait(
        'どうして……どうして一人に好かれないだけで……どうして心がこんなに辛い……ううう……いや……',
      );
      await tachyon.say_and_wait(
        'いやですわ……こんなに痛いと分かっていたら、恋などしませんでした……次は、次は……もういや……二度といや……痛い……',
      );
      await tachyon.say_and_wait([
        callname,
        '……',
        callname,
        '……どこにいますの……どうして見つからない……どこへ行ったのです……',
      ]);
      await tachyon.say_and_wait([
        'どうして、こんなに辛いときに傍にいないのです……',
        callname,
        '……もう実験には使いませんわ……全部、私のせいです……だから……だから戻ってきて……',
      ]);
      await tachyon.say_and_wait(
        'ここが怖い……連れて帰って、私たちの実験室へ……もう勝手は言いませんわ……',
      );
      await tachyon.say_and_wait([
        '服は自分で洗います……弁当箱も食べ終わったら散らかしません……',
        callname,
        '……',
        callname,
        '…………',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' を見る。途中から、自分が誰かも忘れたかのようだ',
      ]);
      await era.printAndWait([
        '眼は自分を見ているのに、ずっと ',
        callname,
        ' と呼び、ここにいない誰かを探しているかのようだ',
      ]);
      await era.printAndWait(['いいえ……', callname, '……？']);
      await era.printAndWait([
        'これは誰だ？ ',
        you.get_colored_name(),
        ' は、この名前を聞いたことがないはずでは？',
      ]);
      await era.printAndWait([
        '眼前のこの',
        tachyon.uma_sex_title,
        'は誰だ。自分は',
        tachyon.sex,
        'を知っているのか',
      ]);
      era.println();
      await era.printAndWait('頭痛、頭痛、頭が裂けそうだ');
      await era.printAndWait('考えるほど、忘れるものが増える');
      era.println();
      await era.printAndWait([
        'ついに、',
        callname,
        ' を呼ぶ悲鳴の中で、',
        you.get_colored_name(),
        ' の意識は深淵へ沈む',
      ]);
      era.setToBottom();

      await tachyon.say_as_unknown_and_wait('……起き');
      await tachyon.say_as_unknown_and_wait('………起きて');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は目を覚ました']);
      await era.printAndWait([
        'ある声に起こされた ',
        you.get_colored_name(),
        ' は、眼を開けて見た天井が見知らぬものだと気づく',
      ]);
      era.printButton('「ここはどこだ？」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait('……ここは私の実験室ですわ');
      era.println();
      await era.printAndWait([you.get_colored_name(), ' は声のするほうを見る']);
      await era.printAndWait([
        '眼前は栗毛の',
        tachyon.uma_sex_title,
        '。切り揃えた短髪と白衣が、',
        tachyon.sex,
        'の研究者としての身分を語っている。',
      ]);
      await era.printAndWait([
        tachyon.sex,
        'は品定めするような眼で ',
        you.get_colored_name(),
        ' を見、なぜか ',
        you.get_colored_name(),
        ' は肌が粟立つ',
      ]);
      era.printButton('「君は誰だ？」', 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        'その質問は、私がするべきですわ……あなたは何者？ どうして私の実験室に寝ているんですの？',
      );
      await era.printAndWait(['栗毛の', tachyon.uma_sex_title, 'は言う']);
      await era.printAndWait([
        'このとき ',
        you.get_colored_name(),
        ' はやっと、自分がまだ床に寝ていることに気づき、急いで起き上がる',
      ]);
      era.printButton(`「${you.actual_name}だ。トレーナーをしている」`, 1);
      await era.input();
      await tachyon.say_as_unknown_and_wait(
        '…………おや？ ではトレーナー君、ここで寝ているのは、何のご用ですの',
      );
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は、ここに横たわる前に何をしていたか思い出そうとするが、どうしても出てこない',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait(
        '…………思い出せなくても結構ですわ。なぜか私も記憶を失ったようで、さっきまで何をしていたか思い出せません……',
      );
      await tachyon.say_as_unknown_and_wait([
        'まあ、その話は置いておきましょう。とにかく、私は ',
        tachyon.get_colored_name(),
        '。トレーナー君、よろしくですわ',
      ]);
      era.println();
      await era.printAndWait([tachyon.get_colored_name()]);
      await era.printAndWait([
        '奇妙な名前だ……まあ、',
        tachyon.uma_sex_title,
        'の名前は大概こういうものだ。他人の名前を差別してもよくない',
      ]);
      await era.printAndWait([
        'だがなぜか、直感が ',
        you.get_colored_name(),
        ' に告げる。眼前のこの',
        tachyon.uma_sex_title,
        'とは距離を置け、と',
      ]);
      era.println();
      era.printButton(
        `「では、今日はここまでに。実験室に入り込んでしまい、大変申し訳ありません。後日、改めてお詫びします、${tachyon.name} さん」`,
        1,
      );
      await era.input();
      await tachyon.say_and_wait(
        '…………いいえ、結構ですわ。所詮、二人が同時に記憶を失うなど……',
      );
      await tachyon.say_and_wait(
        'まあ、これでいいでしょう。あとからわざわざ来る必要もありませんわ、トレーナー君',
      );
      era.println();
      await era.printAndWait([
        'こうして、',
        you.get_colored_name(),
        ' は ',
        tachyon.get_colored_name(),
        ' の実験室を出た',
      ]);
      await era.printAndWait([
        '扉を出る前、',
        you.get_colored_name(),
        ' は不意に振り返る',
      ]);
      era.println();
      await tachyon.say_and_wait('ん？ トレーナー君、まだ何か？');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' には予感がある。この扉を出たら、たぶん、もうこの',
        tachyon.uma_sex_title,
        'と交わることはない、と',
      ]);
      era.println();
      await you.say_and_wait('なんでもない。気のせいだろう');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は実験室の扉を出る。今度は、まったく躊躇しなかった',
      ]);
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = 'Now or Forever';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} scarlet ダイワスカーレット
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} shakur エアシャカール
     * @param {CharaTalk} pocket ジャングルポケット
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     * @param {PrintedSpan} t_call_c アグネスタキオンがマンハッタンカフェを呼ぶ名
     * @param {PrintedSpan} t_call_s アグネスタキオンがエアシャカールを呼ぶ名
     * @param {PrintedSpan} t_call_p アグネスタキオンがジャングルポケットを呼ぶ名
     */
    const f = async (
      tachyon,
      scarlet,
      digital,
      coffee,
      shakur,
      pocket,
      you,
      callname,
      t_call_c,
      t_call_s,
      t_call_p,
    ) => {
      await tachyon.say_and_wait([callname, '～～']);
      await tachyon.say_and_wait([callname, '～～～？']);
      await tachyon.say_and_wait([callname, '！！']);
      await tachyon.say_and_wait([
        callname,
        '…………ああ、',
        callname,
        ' は今日、いないのでしたわ',
      ]);
      await tachyon.say_and_wait([
        'くっ……だがこの薬、新鮮なうちに効能を試さないとだめですわ。仕方ありません、',
        t_call_c,
        '～～',
      ]);
      await tachyon.say_and_wait([
        '…………えっ、',
        t_call_c,
        ' もいないですの！？',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は実験室で、とぼけたように言う',
      ]);
      await tachyon.print_and_wait([
        '残念なことに、実験室には',
        tachyon.sex,
        'に突っ込む者はいない',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        ' はまあいいとして……',
        t_call_c,
        ' までいないなんて……あるいは ',
        t_call_p,
        '……',
        t_call_s,
        '……',
      ]);
      era.println();
      await tachyon.print_and_wait([
        'よく考えれば、',
        coffee.get_colored_name(),
        ' だけではない',
      ]);
      await tachyon.print_and_wait([
        pocket.get_colored_name(),
        '、',
        shakur.get_colored_name(),
        '、',
        digital.get_colored_name(),
        '、自分の可愛がる後輩の ',
        scarlet.get_colored_name(),
        ' まで、最近ほとんど見ない',
      ]);
      await tachyon.print_and_wait([
        'その理由……賢い ',
        tachyon.get_colored_name(),
        ' は、',
        tachyon.sex,
        'の世を驚かす知恵と、超自我の客観判断力で、楽に当てられる',
      ]);
      await tachyon.print_and_wait('ええ……');
      era.println();
      await tachyon.say_and_wait([
        '……やはり、私がずっと ',
        callname,
        ' の話ばかりしているからでしょう',
      ]);
      era.println();
      await tachyon.print_and_wait(
        '実は、モルモットと呼ぶ愛人の話だけではない。もっと正確には、愛人との情事。率直に言えば、恩愛の見せびらかしだ',
      );
      if (era.get('exp:32:性爱次数') > era.get('exp:32:睡奸次数')) {
        await tachyon.print_and_wait([
          'もし話題が甘い言葉と曖昧な感情の段階に留まっていれば、傍の者、少なくとも ',
          scarlet.get_colored_name(),
          ' と ',
          digital.get_colored_name(),
          ' は喜んで聞いただろう。',
        ]);
        await tachyon.print_and_wait([
          'だが話題はいつも床の間の話へ入る。似た話題を聞いただけで顔を赤らめる',
          tachyon.couple_title,
          'を、責められない',
        ]);
      }
      era.println();
      await tachyon.print_and_wait([
        coffee.get_colored_name(),
        ' すら、我慢できずに尋ねた',
      ]);
      await tachyon.print_and_wait(
        'どうして、一刻も止まらず感情を見せびらかすのか、と',
      );
      era.println();
      await tachyon.say_and_wait('……でも、抑えられないんですもの');
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は無人の空間で呟く',
      ]);
      era.println();
      await tachyon.print_and_wait('愛する人との口づけの喜悦');
      await tachyon.print_and_wait('宿命の人との抱擁の熱情');
      await tachyon.print_and_wait('良縁の人との纏綿の温もり');
      await tachyon.print_and_wait('守り合う人への名残の愛情');
      era.println();
      await tachyon.print_and_wait(
        'これらの感情、これらの言葉を、誰かに語らなければ',
      );
      await tachyon.print_and_wait(
        'この膨大な熱で、内から外まで焼き尽くされてしまう',
      );
      era.println();
      await tachyon.print_and_wait('好き');
      await tachyon.print_and_wait('可愛い');
      await tachyon.print_and_wait('格好いい');
      await tachyon.print_and_wait('魅惑的');
      await tachyon.print_and_wait('美しい');
      await tachyon.print_and_wait('洒落ている');
      await tachyon.print_and_wait('色っぽい');
      await tachyon.print_and_wait('魔性');
      era.println();
      await tachyon.print_and_wait([
        'どんな形容詞も、',
        you.sex,
        'に当てはめれば過不足ない',
      ]);
      await tachyon.print_and_wait([
        '理性的な ',
        tachyon.get_colored_name(),
        ' にとって、恋に溺れるのは愚かなことだ',
      ]);
      await tachyon.print_and_wait(
        '事実、内側にはずっと、こんな愚かな姿の自分を嗤う声がある',
      );
      await tachyon.print_and_wait('だが……');
      era.println();
      await tachyon.print_and_wait(
        '理性とは、この感情を捨てることだと言うなら',
      );
      await tachyon.print_and_wait([
        '客観とは、',
        you.sex,
        'への愛情を下げることだと言うなら',
      ]);
      era.println();
      await tachyon.print_and_wait('なら、自分は理性を捨てる');
      await tachyon.print_and_wait('情欲の炎の中で踊る道化になる');
      era.println();
      await tachyon.say_and_wait('ああ……私、きっと狂っていますわ');
      era.println();
      await tachyon.print_and_wait('間違いない');
      await tachyon.print_and_wait('こんな自分は、きっと狂っている');
      await tachyon.print_and_wait(
        '以前の自分は言うまでもなく、一般の社会の恋人たちに比べても、自分の愛は狂気の域に達している',
      );
      await tachyon.print_and_wait(
        'だが、狂っているかどうかなど、とうに定まっていたではありませんか',
      );
      era.println();
      await tachyon.print_and_wait([
        '全世界が知っている。',
        tachyon.get_colored_name(),
        ' は狂った',
        tachyon.uma_sex_title,
        'だ',
      ]);
      await tachyon.print_and_wait([
        'だが ',
        tachyon.get_colored_name(),
        ' は全世界など気にしない',
      ]);
      await tachyon.print_and_wait([
        you.sex,
        'は知っている。',
        tachyon.get_colored_name(),
        ' がそういう',
        tachyon.uma_sex_title,
        'だと',
      ]);
      await tachyon.print_and_wait([
        'そして ',
        tachyon.get_colored_name(),
        ' が気にするのは',
        you.sex,
        'だけだ',
      ]);
      era.println();
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' が恐れるのは一事だけ。自分が',
        you.sex,
        'に嫌われること',
      ]);
      await tachyon.print_and_wait(['自分の行いは', you.sex, 'に釣り合うか？']);
      await tachyon.print_and_wait(['自分の愛情を', you.sex, 'は好むか？']);
      await tachyon.print_and_wait([
        tachyon.get_colored_name(),
        ' は、',
        you.sex,
        'と支え合い、一緒に歩いていける人か',
      ]);
      era.println();
      await tachyon.print_and_wait('ああ、所詮はそういうことですわ');
      era.println();
      await tachyon.print_and_wait('燃える愛は眩しく、同時に儚い');
      await tachyon.print_and_wait('そういう愛は、続かない');
      await tachyon.print_and_wait('今の自分は、火光に囚われた飛蛾にすぎない');
      era.println();
      await tachyon.print_and_wait('欲しい');
      await tachyon.print_and_wait('欲しい');
      await tachyon.print_and_wait('恒久の愛が欲しい、永遠の愛が欲しい');
      await tachyon.print_and_wait(
        'ダイヤモンドのように、永遠で輝く愛が欲しい',
      );
      await tachyon.print_and_wait([
        you.sex,
        'の傍に、当然のようにいる愛が欲しい',
      ]);
      era.println();
      await tachyon.print_and_wait('だが、こんな自分でいいのか');
      await tachyon.print_and_wait('一生を託せる相手なのか？');
      await tachyon.print_and_wait([
        you.sex,
        'は約束してくれるか、こんな自分を永遠に愛すると',
      ]);
      await tachyon.print_and_wait([
        '自分は、こんな',
        you.sex,
        'を永遠に愛せますか',
      ]);
      era.println();
      tachyon.say('私は……');
      era.printButton('永遠を選ぶ（関係を進める）', 1, {
        buttonType: '',
        color: tachyon.color,
      });
      era.printButton('燃え続ける（まだ進めない）', 2, {
        buttonType: '',
        color: tachyon.color,
      });
      const ret = await era.input();
      if (ret === 1) {
        await tachyon.print_and_wait([you.sex, 'と並ぶ']);
        await tachyon.print_and_wait([you.sex, 'と手を取る']);
        await tachyon.print_and_wait([you.sex, 'と家庭を築く']);
        await tachyon.print_and_wait([you.sex, 'と命を産む']);
        era.println();
        await tachyon.print_and_wait('欲しい……安定した、穏やかな愛');
        await tachyon.print_and_wait('答えが簡単すぎて、自分でも驚く');
        era.println();
        await tachyon.print_and_wait([
          '仕事を終えて帰り、家の前で待っている',
          you.sex,
          'を見る',
        ]);
        await tachyon.print_and_wait([
          '自分が早く帰れた日は、料理を用意して',
          you.sex,
          'の帰りを待つ',
        ]);
        await tachyon.print_and_wait([
          '料理は得意ではないが、',
          you.sex,
          'のためなら、',
          tachyon.get_colored_name(),
          ' はかつて研究に捧げる、と誓った両手を、炒め物と炊事に使う',
        ]);
        await tachyon.print_and_wait('休日は二人で出かける。どこでもいい');
        await tachyon.print_and_wait(
          '公園、家具屋、あるいは実験用具店、化学薬品店',
        );
        await tachyon.print_and_wait([
          you.sex,
          'と、ソファの置き場所のような些細なことで喧嘩する',
        ]);
        await tachyon.print_and_wait(
          '夜まで誤りを認めない拗ねた二人が、最後はどちらからともなく温かい抱擁で仲直りする',
        );
        await tachyon.print_and_wait([
          '新居ができた当日は、きっと疲れるだろう。',
          tachyon.uma_sex_title,
          'の体力でも持たないかもしれない',
        ]);
        await tachyon.print_and_wait([
          'せっかくできた新しい家でゆっくり睦みたいのに、',
          you.sex,
          'の腕の中へ倒れ、そのまま眠ってしまう',
        ]);
        if (tachyon.sex_code - 1 && you.sex_code === 1) {
          await tachyon.print_and_wait(
            '妊娠した日、彼は絶対に大喜びするでしょう',
          );
          await tachyon.print_and_wait(
            'だが突然は言えない。あのとき放つ強光で、隣人が騒音だと怒るでしょうから',
          );
          await tachyon.print_and_wait('いいタイミングを探す。昼、朝食のとき');
          await tachyon.print_and_wait(
            '何事もない口調で「あなた、お父さんになりますわよ♡」と言う',
          );
          await tachyon.print_and_wait(
            'そのときの彼は、どんな顔をするでしょう？',
          );
          await tachyon.print_and_wait(
            '子が生まれたら、子を連れて私たちの写真を見たい',
          );
          await tachyon.print_and_wait(
            '当時の私が、どう元実験体に魅せられたかを',
          );

          await tachyon.print_and_wait(
            'たぶん、子はお父さんがかわいそうだと思うでしょう。お母さんにこんなにいじめられて',
          );
          await tachyon.print_and_wait(
            'ただし床の上でいじめられているのは、お母さんですが♡',
          );
          await tachyon.print_and_wait(
            '子が大きくなって家庭を持ったあと、布団の中で黙って泣く彼を慰めたい',
          );
          await tachyon.print_and_wait(
            '……逆かもしれませんわね。もしかすると、私は意外と子を溺愛する母親かもしれません',
          );
          era.println();
        }
        await tachyon.print_and_wait([
          '面白いから',
          you.sex,
          'と一緒にいるのではない',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          'と一緒にいる毎日が、これほど面白いのだ',
        ]);
        await tachyon.print_and_wait('こんな退屈で平坦な日常でも');
        await tachyon.print_and_wait([
          '傍にいるのが',
          you.sex,
          'だと考えるだけで、期待で胸がいっぱいになる',
        ]);
        era.println();
        await you.say_and_wait('タキオン！ 呼んだって聞いたけど、何か用か？');
        era.println();
        await tachyon.print_and_wait(
          '誰か親切な人が知らせたのか？ 心が通じたのか？',
        );
        await tachyon.print_and_wait('どちらでも構わない');
        await tachyon.print_and_wait('よく考えなさい。どう口に出せばいい？');
        await tachyon.print_and_wait('ええ……これにしましょう');
        era.println();
        await tachyon.say_and_wait([
          callname,
          '、思うんですけれど、私たち……次の段階へ進んでもよろしいですかしら？',
        ]);
        await tachyon.print_and_wait(
          '口にした瞬間、教会の鐘が聞こえた気がする',
        );
      } else {
        await tachyon.print_and_wait('永遠……ですの？');
        era.println();
        await tachyon.print_and_wait('分からない');
        await tachyon.print_and_wait('考えられない');
        era.println();
        await tachyon.print_and_wait('自分は、そういう傍にいる者になれるのか');
        await tachyon.print_and_wait([you.sex, 'の一生に寄り添えるのか']);
        era.println();
        await tachyon.print_and_wait([
          '所詮、',
          tachyon.get_colored_name(),
          ' というこの',
          tachyon.phy_sex_title,
          'に、そういう傍にいる者、そういう伴侶、そういう……',
        ]);
        await tachyon.print_and_wait('恋人になれるのか？');
        era.println();
        await tachyon.print_and_wait('料理のできない自分');
        await tachyon.print_and_wait('自分に没頭する自分');
        await tachyon.print_and_wait('性格の怠惰な自分');
        await tachyon.print_and_wait('忍耐のない自分');
        era.println();
        await tachyon.print_and_wait('今なら、まだ受け入れられるでしょう');
        await tachyon.print_and_wait('では未来は');
        await tachyon.print_and_wait('十年後は？');
        await tachyon.print_and_wait('二十年後は？');
        await tachyon.print_and_wait('六十年、七十年後は？');
        era.println();
        await tachyon.print_and_wait('この感情は、本当に永遠へ続きますか？');
        era.println();
        await tachyon.print_and_wait('分からない');
        await tachyon.print_and_wait('考えられない');
        era.println();
        await you.say_and_wait('タキオン！ 呼んだって聞いたけど、何か用か？');
        era.println();
        await tachyon.print_and_wait(
          '誰か余計な人が知らせたのか。たまたま心が通じたのか',
        );
        await tachyon.print_and_wait('……どちらでも構わない');
        await tachyon.print_and_wait('抑えなさい、冷やしなさい、封じなさい');
        await tachyon.print_and_wait('自分の滑稽な考えを封じる');
        era.println();
        await tachyon.say_and_wait('……なんでもありませんわ');
        era.println();
        await tachyon.print_and_wait(
          '愛情という燃え盛る炎を、自分の心配と不安を燃料に、燃やし続ける',
        );
        await tachyon.print_and_wait(
          'それが、優柔不断な自分が負うべき永遠の罰なのでしょう',
        );
        era.drawLine();
        await tachyon.print_and_wait([
          you.get_colored_name(),
          ' は首を振り、内側の奇妙な考えを散らし、躊躇なく扉の外へ踏み出す',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = 'Tachyon';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname アグネスタキオンがプレイヤーを呼ぶ名
     */
    const f = async (tachyon, you, callname) => {
      await tachyon.say_and_wait([
        callname,
        '、私の名前を、一度呼んでくれます？',
      ]);
      era.println();

      await era.printAndWait(['名前？']);
      await era.printAndWait([
        you.get_colored_name(),
        ' は不思議そうに ',
        tachyon.get_colored_name(),
        ' を見る。',
      ]);
      await era.printAndWait([
        '今日、トレーナー室へ入るなり、',
        tachyon.get_colored_name(),
        ' にソファへ押しつけられた。',
      ]);
      await era.printAndWait([
        'それから',
        tachyon.sex,
        'はトレーニング計画を書く小さなホワイトボードを引き出し、先生が講義を始めるような様子だ。これは……また何のつもりだろう。',
      ]);
      era.println();

      await tachyon.say_and_wait(['さあ、早く早く、呼んでくださいまし。']);

      era.printButton('「アグネスタキオン」', 1);
      await era.input();

      await era.printAndWait([
        tachyon.get_colored_name(),
        '。自分だけのかけがえのない愛馬の名前。',
      ]);
      await era.printAndWait([
        '聞いて、',
        tachyon.get_colored_name(),
        ' は眼を細め、ひどく満悦そうだった',
      ]);
      era.println();

      await tachyon.say_and_wait(['ええ……よろしいですわ']);
      await tachyon.say_and_wait([
        'では……タキオン（tachyon）が何を意味するか、ご存知ですの？',
      ]);
      era.println();

      await era.printAndWait(['タキオン？']);

      era.printButton('「知らない……」', 1);
      era.printButton('「超光速の粒子、だよな？」', 2);

      if ((await era.input()) === 1) {
        await tachyon.say_and_wait(
          'ん……私のモルモットなら、少なくともこのくらいは頭に入れておいてくださいまし。',
        );
      } else {
        await tachyon.say_and_wait('ええ、合格としておきましょう。');
      }

      await tachyon.say_and_wait([
        'タキオンは、光速を超える速度で、虚時間の中を航行する粒子ですわ。',
      ]);
      await tachyon.say_and_wait([
        '特殊相対性理論では、タキオンは空間的な四次元運動量と虚数の相対時間を持ち、通常物質との相互作用が目立たず、現在は検出できない仮想粒子です。電磁放射の機構から見ると……',
      ]);

      era.printButton('「ま、待って！」', 1);
      await era.input();

      await tachyon.say_and_wait([
        '静粛に、',
        callname,
        '。最後まで聞いてくださいまし。',
      ]);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ' がホワイトボードへ書きつける数式で頭がくらくらした ',
        you.get_colored_name(),
        ' は、急いで一旦止め、消化したかった。',
      ]);
      await era.printAndWait([
        'だが ',
        tachyon.get_colored_name(),
        ' はホワイトボードを叩き、構わず話し続ける。',
      ]);
      era.println();

      await tachyon.say_and_wait([
        'それから……時間的と空間的の区別があるため、タキオンの存在には、越えられない障害が二つありますわ。',
      ]);
      era.println();

      await era.printAndWait([
        'そこまで言って、',
        tachyon.get_colored_name(),
        ' は一息置く。',
      ]);
      await era.printAndWait([
        'いい生徒なら、先生が明らかに間を取っているとき、機を見て質問すべきだろう。',
      ]);
      await era.printAndWait([
        'いつの間にか、',
        you.get_colored_name(),
        ' も役に入り始めていた。',
      ]);

      era.printButton('「障害？」', 1);
      await era.input();

      await tachyon.say_and_wait([
        'ええ……タキオンが本当に存在するとして、ぶつかる制限ですわ。',
      ]);
      await tachyon.say_and_wait([
        '簡単に申しますと……『光速下の物質と接触できない』、そして『光速以下へ減速できない』。まず一つ目から。接触できない理由は、因果律への違背……',
      ]);
      era.println();

      await era.printAndWait([tachyon.get_colored_name(), ' は説明を続ける']);
      await era.printAndWait([
        'だが ',
        you.get_colored_name(),
        ' の頭は、もう',
        tachyon.sex,
        'の、脳を知識で犯されるような難解な解析には留まっていない。',
      ]);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ' のせいだ。タキオンが超光速粒子の tachyon だと分かっていても、傍の ',
        tachyon.get_colored_name(),
        ' を思わず連想してしまう。',
      ]);
      await era.printAndWait([
        '次第に、',
        you.get_colored_name(),
        ' の頭に、ある絵が浮かぶ。',
      ]);
      era.println();

      await era.printAndWait([
        'ある光速の上の世界。光速以下の物質が辿り着けない空間。',
      ]);
      await era.printAndWait([
        '時間すら遅すぎると嫌われるその世界に、唯一存在する',
        { color: tachyon.color, content: 'タキオン' },
        '。',
      ]);
      await era.printAndWait([
        '光速以下の世界と相互作用できず、超光速の形でしか存在できない',
        { color: tachyon.color, content: 'タキオン' },
        '。',
      ]);
      await era.printAndWait(['絶対の速度、絶対の孤独。']);
      era.println();

      await tachyon.say_and_wait(['…………']);
      era.println();

      await era.printAndWait([
        '気づくと、',
        you.get_colored_name(),
        ' は、背景音だった解説がいつ止まったかも分からなかった。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' が我に返ると、',
        tachyon.get_colored_name(),
        ' が自分を見つめている。いつから、そう見ていたのか分からない。',
      ]);
      era.println();

      await tachyon.say_and_wait([callname, '？ 何を考えていますの？']);

      era.printButton('「なんでもない……」', 1);
      era.printButton('「ただ、そんなタキオンは孤独だと思った……」', 2);
      await era.input();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ' の問いに、',
        you.get_colored_name(),
        ' は自分の考えを吐く。',
      ]);
      await era.printAndWait([
        'ある意味、以前の ',
        tachyon.get_colored_name(),
        ' も、少しこうだった。',
      ]);
      await era.printAndWait([
        '才知が過ぎて、傍の者が',
        tachyon.sex,
        'と同じ世界を見られない。',
      ]);
      await era.printAndWait([
        '世界から孤立し、眼には自分の目標しかない',
        { color: tachyon.color, content: 'Tachyon' },
        '。',
      ]);
      await era.printAndWait([
        'だが……そんな ',
        tachyon.get_colored_name(),
        ' ですら、人と触れ、人に影響される。',
      ]);
      await era.printAndWait([
        'もし物理の空間まで隔てられたら、',
        { color: tachyon.color, content: 'タキオン' },
        'は……',
      ]);
      await era.printAndWait([
        'いいえ、議論しているのは超光速粒子であって、',
        tachyon.get_colored_name(),
        ' ではないはずでは？',
      ]);
      await era.printAndWait([
        'こんな脱線、',
        tachyon.get_colored_name(),
        ' は怒るだろう？',
      ]);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' は、',
        tachyon.get_colored_name(),
        ' が怒りを装って軽く窘めたあと、考えを正してくれる準備をしていた。',
      ]);
      await era.printAndWait(['だが……']);
      era.println();

      await tachyon.say_and_wait(['おや？ ', callname, '、そうお考えですの？']);
      era.println();

      await era.printAndWait([
        tachyon.get_colored_name(),
        ' は平静に言い、ホワイトボードを押しのけ、ソファの ',
        you.get_colored_name(),
        ' へ近づく。',
      ]);
      await era.printAndWait([
        '沈んだ赤い双眸が ',
        you.get_colored_name(),
        ' を見る。いつものように、',
        tachyon.sex,
        'が何を考えているか、読めない。',
      ]);
      era.println();

      await tachyon.say_and_wait([
        'ですが、それが限界を越える代償だとしたら？ 仮定ですわよ……今あるすべてを失い、絶対の孤独になることが、限界を越えるために払う代価……受け入れられますの、',
        callname,
        '？',
      ]);
      era.println();

      await era.printAndWait(['おかしい。']);
      await era.printAndWait(['おかしい。']);
      await era.printAndWait([
        tachyon.get_colored_name(),
        ' との距離は、近くも遠くもなっていない。',
      ]);
      await era.printAndWait([
        'だが眼前の ',
        tachyon.get_colored_name(),
        ' が、不意に錯覚を与える。',
      ]);
      await era.printAndWait(['近くて遠い。']);
      await era.printAndWait(['手を伸ばせば触れそうなほど近い。']);
      await era.printAndWait(['次の一秒で俗世から逃げるほど遠い。']);
      await era.printAndWait([
        'だがそれらより今大事なのは、答えを出すことだろう？',
      ]);
      await era.printAndWait(['よく考えよう……']);
      era.println();

      await era.printAndWait([you.get_colored_name(), ' は思う……']);

      era.printButton('「できる」（関係を進める）', 1);
      era.printButton('「できない」（まだ進めない）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait(['限界を越える代償がそれなら……']);
        await era.printAndWait([
          'なら、その実験を支える者としてなすべきは、',
          tachyon.sex,
          'の決断を肯定し、',
          tachyon.sex,
          'を目標へ見送ることだ。',
        ]);
        await era.printAndWait([
          'それが自分の、「モルモット」としての責任だ。',
        ]);
        await era.printAndWait([
          'だから、',
          you.get_colored_name(),
          ' は ',
          tachyon.get_colored_name(),
          ' のやり方を尊重する。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' はそう、',
          tachyon.get_colored_name(),
          ' に説明した。',
        ]);
        era.println();

        await tachyon.say_and_wait([
          '…………そうですか。それが、あなたの選択ですの？',
        ]);
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          ' はなお',
          tachyon.sex,
          'の考えを見せず、口調は同じように平坦だ。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は少し心配になる。何か、間違ったことを言ったのではないか。',
        ]);
        await era.printAndWait(['だが、選択はもうした。']);
        era.println();

        era.printButton('「タキオンのモルモットなら、そうあるべきだ……」', 1);
        era.printButton('「……でも、タキオンに追いつく努力はする！」', 2);
        await era.input();

        await era.printAndWait([
          '自分は ',
          tachyon.get_colored_name(),
          ' の成長を止めるべきではない。',
        ]);
        await era.printAndWait([
          'むしろ逆だ。自分は ',
          tachyon.get_colored_name(),
          ' に追いつく努力をすべきだ。',
        ]);
        await era.printAndWait([
          '光速を越えることが永遠の孤独を意味するなら。',
        ]);
        await era.printAndWait([
          '自分がなすべきは、',
          tachyon.sex,
          'を孤独にしないことだ。',
        ]);
        await era.printAndWait([
          '自分一人でも、',
          tachyon.sex,
          'の傍にいようとする。',
        ]);
        await era.printAndWait([
          'それが ',
          tachyon.get_colored_name(),
          ' の「モルモット」として、そして……',
          tachyon.get_colored_name(),
          ' の恋人としての、内側の願いだ。',
        ]);
        era.println();

        await tachyon.say_and_wait(['…………']);
        await tachyon.say_and_wait([
          'そういえば、まだ言っていませんでしたわね。',
        ]);
        await tachyon.say_and_wait(['私の選択は———']);
        era.println();

        await era.printAndWait([
          tachyon.get_colored_name(),
          ' の表情は、恐ろしいほど平静だ。',
        ]);
        await era.printAndWait(['嵐の前の海面のように、静かだ。']);
        era.println();

        await tachyon.say_and_wait([
          '私は、その線を越えます。光速を超え、限界を超えて———',
        ]);
        era.println();

        await era.printAndWait(['ああ、やはり。']);
        await era.printAndWait([
          'それが ',
          you.get_colored_name(),
          ' の憧れた',
          tachyon.uma_sex_title,
          'の出す答えだ。',
        ]);
        await era.printAndWait(['意外ではない。当然だと言うしかない。']);
        await era.printAndWait(['だが……胸の薄い失落は、どこから来たのか？']);
        await era.printAndWait([
          'ただ、',
          tachyon.get_colored_name(),
          ' の言葉は、まだ終わっていない',
        ]);
        era.println();

        await tachyon.say_and_wait(['————あなたと、一緒に。']);
        era.println();

        await era.printAndWait(['不意に。']);
        await era.printAndWait(['嵐の前の静けさが、反転する。']);
        await era.printAndWait([
          you.get_colored_name(),
          ' は、先の比喩が少し不当だったと気づく。',
        ]);
        await era.printAndWait(['嵐の前の静けさではない。深海だ。']);
        await era.printAndWait([
          '風雨が来るのではない。自分は、すでにその中に沈んでいる。',
        ]);
        era.println();

        await tachyon.say_and_wait([
          '二人で限界を越える———タキオン（Tachyon）になる。',
        ]);
        era.println();

        await era.printAndWait([
          '抑えきれず、',
          you.get_colored_name(),
          ' は頷く。',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' は',
          tachyon.sex,
          'の両眼を見る。光が瞬く。',
        ]);
        await era.printAndWait([
          '深海と迷った小魚が、深海魚に呑まれる直前に見る、餌の光のようだ。',
        ]);

        era.drawLine();

        await tachyon.print_and_wait(['私は', you.sex, 'の両眼を見つめる。']);
        await tachyon.print_and_wait(['中にあるのは、生半可な迷い。']);
        await tachyon.print_and_wait(['胸は半分苛立ち、半分安堵。']);
        await tachyon.print_and_wait([
          'どうして',
          you.sex,
          'は、分からないの？',
        ]);
        await tachyon.print_and_wait([
          'それでもよかった。',
          you.sex,
          'は、まだ分かっていない。',
        ]);
        era.println();

        await tachyon.print_and_wait([you.sex, 'だけでもいい、ではない。']);
        await tachyon.print_and_wait([you.sex, 'がいればいい。']);
        await tachyon.print_and_wait(['自分は孤独を恐れない。']);
        await tachyon.print_and_wait([
          '自分が恐れるのは、傍に',
          you.sex,
          'の姿がなくなることだけ。',
        ]);
        await tachyon.print_and_wait(['だから……']);
        era.println();

        await tachyon.print_and_wait(['限界の彼方。']);
        await tachyon.print_and_wait([
          '他の誰も辿り着けない、光速を超えた果て。',
        ]);
        await tachyon.print_and_wait(['そして……']);
        await tachyon.print_and_wait([
          '自分たち二人以外、誰も邪魔しない世界。',
        ]);
        era.println();

        await tachyon.say_and_wait(
          ['超光速の彼方でも、肉体も精神も燃え尽きても……'],
          true,
        );
        await tachyon.say_and_wait(
          '永遠に、永遠に、私の傍にいてくださいまし？',
          true,
        );
        await tachyon.say_and_wait(['私の親愛なる ', callname, '❤️'], true);
      } else {
        await era.printAndWait([
          tachyon.get_colored_name(),
          ' を一人、孤独の永遠へ送るなら、自分は絶対に許さない。',
        ]);
        await era.printAndWait([
          'だが……天秤の向こうに乗るのが、',
          tachyon.get_colored_name(),
          ' の夢なら？',
        ]);
        await era.printAndWait([
          'あるいは、この永遠こそ、',
          tachyon.get_colored_name(),
          ' が追い求めてきたすべてではないのか？',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'はそれを知り、理解したうえで、限界を追う目標を掲げたのだろう',
        ]);
        await era.printAndWait([
          'なら',
          tachyon.sex,
          'の ',
          callname,
          ' として、',
          tachyon.sex,
          'の恋人として……',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'が夢を追うのを、支えるべきではないのか？',
        ]);
        era.println();

        await era.printAndWait(['だから……']);

        era.printButton('「拒む」', 1);
        await era.input();

        await era.printAndWait([
          'モルモットの責任は、あるいは果たした。では、',
          tachyon.get_colored_name(),
          ' の恋人として果たすべき責任は？',
        ]);
        await era.printAndWait([
          tachyon.sex,
          'と二人三脚で進み、さまざまなことを経て、ようやく実を結んだ恋を得た自分……',
        ]);
        await era.printAndWait([
          'そんな結末を許せるか。',
          tachyon.get_colored_name(),
          ' との天人永隔を許せるか。',
        ]);
        await era.printAndWait(['答えはもちろん……否。']);

        era.printButton('「身勝手でもいい。」', 1);
        era.printButton('「タキオンを、永遠に自分の傍に置いておきたい。」', 2);
        await era.input();

        await era.printAndWait(['相手が去るのが怖い。']);
        await era.printAndWait(['ただ、それほどの身勝手な理由。']);
        await era.printAndWait(['今の自分は、もう適応できない。']);
        await era.printAndWait([
          '夜、寝る前に誰かのために用意する弁当がない。',
        ]);
        await era.printAndWait([
          '朝、実験室へ行っても、実験に忙しい後ろ姿が見えない。',
        ]);
        await era.printAndWait([
          '昼、誰かの可愛くあわれな食事ねだりが見えない。',
        ]);
        await era.printAndWait([
          '午後のトレーニングで、あの絢爛な走りが見えない。',
        ]);
        await era.printAndWait([
          '今の自分は、もう以前のような退屈な日々には戻れない。',
        ]);
        await era.printAndWait(['だから、だから。']);

        era.printButton(
          '「できるなら……タキオンと一緒に超光速の彼方へ行きたい。」',
          1,
        );
        era.printButton('「でも……無理なら……」', 2);
        await era.input();

        await era.printAndWait(['自分がその線を越えられないのが怖い。']);
        await era.printAndWait(['だから', tachyon.sex, 'の手を掴みたい。']);
        await era.printAndWait([tachyon.sex, 'を光速以下の世界に留めたい。']);
        await era.printAndWait(['自分のために、残ってほしい。']);
        era.println();

        await tachyon.say_and_wait(['…………']);
        await tachyon.say_and_wait(['…………ふふ。']);
        era.println();

        await era.printAndWait(['平静な笑顔。']);
        await era.printAndWait(['意味の分からない笑い。']);
        await era.printAndWait(['思わず恐れが湧く。']);
        await era.printAndWait([tachyon.sex, 'の答えは、いったい……']);
        era.println();

        await tachyon.say_and_wait(['それが……あなたの答えですの？']);
        await tachyon.say_and_wait([
          '……あなたはやはり、いつも私の予測を破りますわ……',
        ]);
        era.println();

        await era.printAndWait([tachyon.sex, 'は何を考えているのだろう？']);
        await era.printAndWait([
          '今この瞬間、',
          tachyon.sex,
          'の笑いは嘲笑なのか、嗤いなのか、あるいは自分が期待を破った喜びの笑顔なのか？',
        ]);
        era.println();

        await tachyon.say_and_wait([
          'では……私の親愛なる ',
          callname,
          ' のために。',
        ]);
        await tachyon.say_and_wait([
          '私は、永遠に、永遠に、ここに留まってあなたに寄り添いますわ。',
        ]);

        era.drawLine();

        await tachyon.print_and_wait(['胸の感情は、形容しにくい。']);
        await tachyon.print_and_wait([
          'だが全体として、歓喜と呼ばれる情緒のほうが勝っているでしょう。',
        ]);
        era.println();

        await tachyon.print_and_wait([
          'いつも自分の予想を超える人は、今回もまた、良い方向で自分の期待を果たした。',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          'なら、タキオンの夢のために自分は諦める、などという馬鹿なことを言うと思っていた。',
        ]);
        await tachyon.print_and_wait(['まったく……']);
        await tachyon.print_and_wait([
          'その可能性を思うだけで、',
          tachyon.get_colored_name(),
          ' は気が萎える。',
        ]);
        await tachyon.print_and_wait([
          'どうして、',
          you.sex,
          'はいつも分からないの？',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' は、欲の強い',
          tachyon.uma_sex_title,
          'だ。',
        ]);
        await tachyon.print_and_wait([
          '二者択一？ いいえ、',
          tachyon.sex,
          'は両方欲しい。',
        ]);
        await tachyon.print_and_wait([
          you.sex,
          'が本当にそんなことを言ったら。',
        ]);
        await tachyon.print_and_wait([
          '行いが強引でも、誰かの傍から',
          you.sex,
          'を奪っても。',
        ]);
        await tachyon.print_and_wait([
          tachyon.sex,
          'は勝手に、',
          you.sex,
          'を光速の上、二人だけで過ごす世界へ掠め取るだろう。',
        ]);
        await tachyon.print_and_wait(['だが……']);
        era.println();

        await tachyon.print_and_wait(['もし、この人が。']);
        await tachyon.print_and_wait([
          'この無邪気で可愛い ',
          callname,
          ' が、まさか……',
        ]);
        await tachyon.print_and_wait([
          '稀に、自分の貪欲、自分の欲望を見せた。',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' を傍に留めたい欲望。',
        ]);
        await tachyon.print_and_wait([
          tachyon.get_colored_name(),
          ' に夢を捨てさせたい欲望。',
        ]);
        era.println();

        await tachyon.print_and_wait([
          you.sex,
          'から離れられない自分も、心からその思いのままになるしかない。',
        ]);
        await tachyon.print_and_wait([
          '隷属と被隷属の関係は、いつ逆転したのでしょう？',
        ]);
        await tachyon.print_and_wait(['いいえ、逆転ではない……']);
        await tachyon.print_and_wait(['縛ると同時に、縛られている。']);
        await tachyon.print_and_wait([
          'ああ、これがきっと、愛と呼ばれる感情なのでしょう。',
        ]);
        await tachyon.print_and_wait([
          callname,
          ' は ',
          tachyon.get_colored_name(),
          ' を愛し、',
          tachyon.get_colored_name(),
          ' も ',
          callname,
          ' を愛している。',
        ]);
        await tachyon.print_and_wait([
          '超光速以上の世界などない。限界の外にも、何もない……',
        ]);
        await tachyon.print_and_wait([
          'あるのは、互いに愛し合っている普通の人と普通の',
          tachyon.uma_sex_title,
          '。それだけですわ。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
