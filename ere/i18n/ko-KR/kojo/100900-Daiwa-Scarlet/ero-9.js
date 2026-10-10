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
        '아침부터 어쩐지 몸이 뜨겁다. 그렇다고 열이 나는 것도 아니라 대수롭지 않게 넘겼다.',
      );
      await era.printAndWait('기분 탓이겠지?');
      await era.printAndWait('——그렇게 생각했는데……');
      await you.say_and_wait('……이상하네…… 아침에는 아무렇지도 않았는데……');
      await era.printAndWait(
        '——갑자기 몸 상태가 나빠졌다. 온몸이 뜨겁고, 심장도 진정될 기미가 없다……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은 트레이너실 소파에 앉아 가슴께의 단추를 풀었다.',
      ]);
      await era.printAndWait(
        '腹の奥が、しくしくと妙に疼く。今すぐ服を全部脱いで外を走り回りたい——そんな、どうかしている気持ちだった。',
      );
      era.println();
      await daiwa.say_and_wait(['안녕하세요, ', callname, '。']);
      era.println();
      await era.printAndWait([
        '어느새 ',
        daiwa.get_colored_name(),
        '이 찾아올 시간이 되었다.',
      ]);
      era.println();
      await you.say_and_wait('아…… 응…… 안녕…… 다이와……');
      await daiwa.say_and_wait('……');
      era.println();
      await era.printAndWait(
        '쿵, 하는 소리와 함께 다이와의 가방이 바닥에 떨어졌다.',
      );
      await era.printAndWait('ああ、そういえば、いまの格好は少し……');
      era.println();
      await daiwa.say_and_wait([callname, '……？']);
      await you.say_and_wait('아…… 잠깐만……');
      era.println();
      await era.printAndWait([
        '頭では早く服を整えねばと分かっているのに、ボタンがどうしても留まらない。さんざんもたついた末、目の前に ',
        daiwa.get_colored_name(),
        ' の顔が来ていた。',
      ]);
      era.println();
      await you.say_and_wait('……응? 왜 그래?');
      await daiwa.say_and_wait(
        'あなた……朝からずっと、そんな匂いを漂わせていらしたのですか？',
      );
      await you.say_and_wait('……냄새?');
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
    f.title = '트레이너의 컨디션 난조!?';
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
        '가 눈을 떴을 때는 이미 휴게실 침대 위였다.',
      ]);
      await era.printAndWait([
        '멍하던 머릿속이 차츰 맑아지자,',
        you.get_colored_name(),
        ' は腰がやけに重いことに気づき、それからシーツの惨状を見た。',
      ]);
      era.println();
      await era.printAndWait([
        '옆을 보니,',
        daiwa.get_colored_name(),
        '이 얼굴을 감싸고 무언가 중얼거리고 있었다.',
      ]);
      await daiwa.say_and_wait(
        'どうすればいいんですの……和姦……そうですわ、和姦ですわ……トレーナーだって、あんなに昂ぶっていましたもの……でも、トレーナーが産休に入ったら……ああ……',
      );
      era.println();
      await era.printAndWait([
        '彼女は何かを悩んでいるらしい。昼まで続いた熱はすでに引き、',
        you.get_colored_name(),
        '는 무슨 일이 일어났는지, 자신이 무슨 일을 당했는지 조금씩 떠올렸다.',
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
      await era.printAndWait('탁자 위에는 빈 병 하나가 놓여 있었다.');
      era.println();
      await you.say_and_wait('……다이와……');
      await daiwa.say_and_wait([
        '히익! 죄, 죄송해요, ',
        callname,
        '! 제가……너무 심하게 해 버렸어요……읏, 으으……',
      ]);
      await you.say_and_wait('그래, 그래. 알았어. 괜찮아, 괜찮아.');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 사과하는 ',
        daiwa.get_colored_name(),
        '을 품에 안고 머리를 쓰다듬었다.',
      ]);
      era.println();
      await daiwa.say_and_wait('でも、でも……も、もし子供ができていたら……');
      await you.say_and_wait('응, 마신 건 한 병뿐이지?');
      await daiwa.say_and_wait('네, 네에……');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '는 침대에서 내려와 빈 병의 라벨을 확인했다. 응, 역시 그렇다.',
      ]);
      era.println();
      if (era.get('status:9:弗隆K')) {
        await you.say_and_wait('자, 다이와. 여기, 잘 읽어 봐.');
        await daiwa.say_and_wait('여기요?');
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
