/**
 * @file ダイワスカーレット - 調教
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  ts_start: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} daiwa
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (daiwa, you, callname) => {
      await era.printAndWait(
        '朝から、なんだか熱い。とはいえ熱があるわけでもなく、気にも止めなかった。',
      );
      await era.printAndWait('気のせいだろう？');
      await era.printAndWait('——そう思っていたのだが……');
      await you.say_and_wait('……おかしいな……朝はまだ何ともなかったのに……');
      await era.printAndWait(
        '——体調が急に崩れた。全身が熱く、心臓が止まる気配もない……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        ' はトレーナー室のソファに座り、胸元のボタンを外した。',
      ]);
      await era.printAndWait(
        '腹の奥が、しくしくと妙に疼く。今すぐ服を全部脱いで外を走り回りたい——そんな、どうかしている気持ちだった。',
      );
      era.println();
      await daiwa.say_and_wait(['おはようございますわ、', callname, '。']);
      era.println();
      await era.printAndWait([
        'いつの間にか、',
        daiwa.get_colored_name(),
        ' が顔を出す時間になっていた。',
      ]);
      era.println();
      await you.say_and_wait('あ……うん……おはよう……ダイワ……');
      await daiwa.say_and_wait('……');
      era.println();
      await era.printAndWait('どさり、と。ダイワのカバンが床に落ちた。');
      await era.printAndWait('ああ、そういえば、いまの格好は少し……');
      era.println();
      await daiwa.say_and_wait([callname, '……？']);
      await you.say_and_wait('あ……ちょっと待って……');
      era.println();
      await era.printAndWait([
        '頭では早く服を整えねばと分かっているのに、ボタンがどうしても留まらない。さんざんもたついた末、目の前に ',
        daiwa.get_colored_name(),
        ' の顔が来ていた。',
      ]);
      era.println();
      await you.say_and_wait('……？ どうした？');
      await daiwa.say_and_wait(
        'あなた……朝からずっと、そんな匂いを漂わせていらしたのですか？',
      );
      await you.say_and_wait('……匂い？');
      era.println();
      await era.printAndWait([
        'そういえば、今日はどうも甘い匂いがまとわりついている気がする。それに ',
        daiwa.get_colored_name(),
        ' の顔を見ていると、わけもなく触りたくなる。',
      ]);
      era.println();
      await era.printAndWait([
        'そう思った次の瞬間、',
        daiwa.get_colored_name(),
        ' は突然 ',
        you.get_colored_name(),
        ' を抱き上げた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は反射で彼女の首に腕を回す。見上げれば、その顔は肉食獣のようで、獲物を見つけた狩人のようでもあった。',
      ]);
      await you.say_and_wait(
        'これでは自分が獲物だ。いまにも食べられてしまう、哀れな子羊……',
        true,
      );
      await era.printAndWait([
        'だが、いまの ',
        you.get_colored_name(),
        ' は、それでも構わないと思っていた。',
      ]);
      era.println();

      await era.printAndWait([
        you.get_colored_name(),
        ' は顔を彼女の首筋に寄せ、頬を擦りつけ、体香を吸い込む。視界の端に、なぜ買ったのか分からない小さな瓶が、テーブルの物陰に置いてあるのが掠めた。',
      ]);
      await you.say_and_wait('もう……何も思い出せない……', true);
      await era.printAndWait(
        '首筋から来る彼女の匂いと、さっきより強い甘香が、鼻腔を掻き立てる……',
      );
    };
    f.title = 'トレーナーの体調不良！？';
    return f;
  })(),
  ts_end: (() => {
    /**
     * @author 黑奴队长
     * @param {CharaTalk} daiwa
     * @param {CharaTalk} you
     * @param {PrintedSpan} callname
     */
    const f = async (daiwa, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        ' が目を覚ますと、すでに休憩室のベッドの上だった。',
      ]);
      await era.printAndWait([
        'ぼんやりした頭が次第に晴れると、',
        you.get_colored_name(),
        ' は腰がやけに重いことに気づき、それからシーツの惨状を見た。',
      ]);
      era.println();
      await era.printAndWait([
        '隣を見れば、',
        daiwa.get_colored_name(),
        ' が顔を覆って、何か呟いている。',
      ]);
      await daiwa.say_and_wait(
        'どうすればいいんですの……和姦……そうですわ、和姦ですわ……トレーナーだって、あんなに昂ぶっていましたもの……でも、トレーナーが産休に入ったら……ああ……',
      );
      era.println();
      await era.printAndWait([
        '彼女は何かを悩んでいるらしい。昼まで続いた熱はすでに引き、',
        you.get_colored_name(),
        ' は少しずつ、何が起きたのか、自分に何をされたのかを思い出していく。',
      ]);
      await era.printAndWait([
        'そうだ。あのあと ',
        daiwa.get_colored_name(),
        ' にベッドへ運ばれ、雌になった。',
      ]);
      era.println();
      await era.printAndWait(
        '下を見れば、いつものように目立つ胸と、異常に膨らんだ腹がある。',
      );
      await era.printAndWait('卓上を見れば、空の瓶が一つ置いてある。');
      era.println();
      await you.say_and_wait('……ダイワ……');
      await daiwa.say_and_wait([
        'ひっ！ す、すみませんわ、',
        callname,
        '！ わたくし……やりすぎてしまいましたわ……っ、うぷ……',
      ]);
      await you.say_and_wait('はいはい、分かった、大丈夫だ大丈夫。');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' は謝罪する ',
        daiwa.get_colored_name(),
        ' を胸に抱き、頭を撫でた。',
      ]);
      era.println();
      await daiwa.say_and_wait('でも、でも……も、もし子供ができていたら……');
      await you.say_and_wait('うん、飲んだのは一本だけだよな？');
      await daiwa.say_and_wait('えっ、ええ……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        ' はベッドを降り、空瓶のラベルを確かめる。うん、やはりそうだ。',
      ]);
      era.println();
      if (era.get('status:9:弗隆K')) {
        await you.say_and_wait('はい、ダイワ。ここ、ちゃんと読んで。');
        await daiwa.say_and_wait('ここ、ですの？');
        await you.say_and_wait(
          'ちゃんと書いてあるだろ？ この薬で生じた、男性器に酷似したものには生殖能力がない、と。',
        );
        await daiwa.say_and_wait(
          '……は？ えっ？ じゃあ、あなたのお腹の中にあるのは何ですの？',
        );
        await you.say_and_wait(
          'えーっと——たぶん精漿、かな？ 精液の成分は精子だけじゃない。精漿は透明な液体で、精子があればここは白く濁るはずだ。だからダイワは心配しなくていい、子供はできない……うわっ！？',
        );
        era.println();
        await era.printAndWait([
          'そこまで言ったところで、ダイワは突然 ',
          you.get_colored_name(),
          ' を押し倒した。',
          you.get_colored_name(),
          ' の匂いに当てられたのかもしれない。彼女も、かなり吸い込んでいた。',
        ]);
        era.println();
        await daiwa.say_and_wait(
          'そう……つまり、SEXをしても子供はできない、ということですわね？',
        );
        await you.say_and_wait('あ……うん、そうだ。');
      } else {
        await you.say_and_wait(
          'はい、ダイワ、大丈夫。必ず孕むってわけじゃないから。',
        );
        await you.say_and_wait('それに、ダイワの子供を孕むなら、大歓迎だよ～');
        await daiwa.say_and_wait([callname, '……']);
        await you.say_and_wait('だから、おいで？');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          ' は横になり、両腕を開いた。',
        ]);
        await era.printAndWait([
          daiwa.get_colored_name(),
          ' の顔が、また肉食獣めいた形になった。',
        ]);
        era.println();
        await daiwa.say_and_wait('……');
      }
      await daiwa.say_and_wait([
        '……',
        callname,
        '、いまの私に、だめと言われても止まりませんわよ？',
      ]);
      await you.say_and_wait(
        '……うん、分かってる。だって一番好きなダイワだもんな。',
      );
      await daiwa.say_and_wait('～～～！');
      era.println();
      await era.printAndWait([
        'その日、',
        you.get_colored_name(),
        ' は自分が何度気を失い、何度目を覚ましたか覚えていない。ただ、当時の唯一の感想だけは覚えている。中学生の性欲は、恐ろしい、と。',
      ]);
    };
    f.title = '「体調不良」のトレーナー……と、大好きなダイワ';
    return f;
  })(),
};
