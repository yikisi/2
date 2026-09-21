/**
 * @file アグネスデジタル - 募集
 * @author 片手虾好评发售中！
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  rec_start: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      const ret = [];
      await era.printAndWait(
        `訓練場は、本来${digital.uma_sex_title}が平日に走る場所なのに、今日はトレーナーで埋まっている。今日は訓練だけでなく、大事な行事——選抜レースがあるからだ。`,
      );
      await era.printAndWait(
        `才能のある${digital.uma_sex_title}が優れたトレーナーと出会うには、実力を見せなければならない。選抜レースは、その絶好の場だ。`,
      );
      await era.printAndWait([
        'トレーナーの ',
        you.get_colored_name(),
        ' も、疾走する',
        digital.uma_sex_title,
        'に目を向けていた。だがふと、余光に、スタンドの陰に隠れたピンクの影が引っかかった。',
      ]);
      era.println();
      await you.say_and_wait(`ん……${digital.uma_sex_title}？`);

      await era.printAndWait(
        `\n選抜レースは原則、まだトレーナーのいない${digital.uma_sex_title}が揃って出る。トレーナーのついた${digital.uma_sex_title}の大半は、この格下の一戦など気にもしない。`,
      );
      await era.printAndWait(`${you.name} は、ちょっと見てみようと思った。`);
      await digital.say_and_wait(
        `うふふふ、交差する脚、少し乱れた呼吸、譲らない覚悟、そして夢にまで見た出会い……尊すぎ尊すぎ尊すぎ……`,
      );
      await era.printAndWait(
        `${
          you.name
        } が裏階段からスタンドへ回ると、ピンクの髪に、目立つ赤い大きなリボンをつけた${digital.uma_sex_title}がいた。両手を高く上げて……応援？`,
      );

      era.println();
      await era.printAndWait(`${you.name} の選択：`);
      era.printButton('（応援なら、誰にも負けない！）', 1);
      era.printButton(
        `「君は${digital.uma_sex_title}だろ？ なんでここにいるんだ？」`,
        2,
      );
      ret.push(await era.input());
      if (ret.at(-1) === 1) {
        await era.printAndWait(
          `${you.name} は、存在しないはずのリュックからペンライトを取り出し、そして……`,
        );
        await era.printAndWait(
          `裏打ち、裏飛び、前振り——まず${digital.sex}に一セットお見舞いした！`,
        );
        await you.say_and_wait(`んはっ、おはっ……うぉはっ！`);
        await era.printAndWait(
          `ペンライトを振るのは餅つきと同じだ。脚、腰、腕まで全身の筋肉を使い、力を伝えてこそ、いちばん熱いコールになる！`,
        );
        await digital.say_and_wait(`え？ ここに誰かいる？ まさか……`);
        await era.printAndWait(
          `困惑した声を上げて、ピンクの${digital.uma_sex_title}は左右を見渡し、振り返って、あなたを見た。`,
        );
        await digital.say_and_wait(
          `わっ！ ライブ応援のやり方をレースに使うの、すごくいい！ あなた！ ${digital.uma_sex_title}が大好きなトレーナーでしょ！`,
        );
        await era.printAndWait(
          `当然だ。${you.name} は百人に一人の中央トレーナーである。${you.name} は得意げにペンライトをしまった。`,
        );
        await you.say_and_wait(`それで聞くけど、なんで選抜に出てないんだ？`);
        await digital.say_and_wait(
          `え？ 私？ いやいや、私なんてどこにでもいる普通の${digital.uma_sex_title}${
            digital.name
          }だよ。レース場に立つような${digital.uma_sex_title}じゃない。`,
        );
        await era.printAndWait(
          `${digital.sex}は両手を激しく振って、自分は全然向かないと主張しているようだった。`,
        );
      } else {
        await digital.say_and_wait(
          `わあああ、ごめんなさい！ 変なところ見られちゃった、すぐ場所変える！`,
        );
        await era.printAndWait(
          `${digital.sex}は慌てて両手を振り、今すぐ逃げ出しそうだった。`,
        );
        await you.say_and_wait(`待って！`);
        await digital.say_and_wait(`ひっ？`);
        await you.say_and_wait(`選抜、出ないのか？`);
        await digital.say_and_wait(
          `おかしいおかしい！ 私はただの普通の${digital.uma_sex_title}${
            digital.name
          }だよ、こんなふうに${
            digital.couple_title
          }の邪魔しちゃだめ！ デジは遠くから見てるだけでいいの！ 天上人みたいな${digital.uma_sex_title}は遠視専用！`,
        );
        await era.printAndWait(
          `見ていてわかる。${digital.sex}は頭を鼓のように振っていた。`,
        );
      }
      await era.printAndWait(
        `${you.name} には${digital.sex}の言いたいことがよくわからない。${
          digital.sex
        }は${digital.uma_sex_title}が大好きそうなのに、近づこうとしない。しかも${
          digital.sex
        }自身も${digital.uma_sex_title}だ。`,
      );
      await you.say_and_wait(
        `なんで出ないんだ。近くで${digital.couple_title}を見られるのに？`,
      );
      await digital.say_and_wait(
        `え？ それは一理あるけど……でもデビューしたくない`,
      );
      await digital.say_and_wait(
        `デビューしたら、私、反対側の${digital.uma_sex_title}を至近距離で推せなくなっちゃう！`,
      );
      await digital.say_and_wait(
        `それは受け入れられない。芝でもダートでも走る${digital.uma_sex_title}、どっちも最高なんだから！`,
      );
      await digital.say_and_wait(`うおおおお……`);
      await era.printAndWait(`${digital.sex}は頭を抱えて、すごく苦しそうだ。`);
      await era.printAndWait(
        `${digital.sex}の困りごとはまだよくわからないが、芝とダート、片方しか選べないことに焦っているように見えた。`,
      );
      await era.printAndWait(
        `たしかに、これまで両方のコースで綺麗に走れた${digital.uma_sex_title}の話は聞かない……少なくとも中央では。`,
      );
      await digital.say_and_wait(`じゃあ、先に行くね！`);
      await era.printAndWait(
        `なぜ、選抜に出ないのか。合うトレーナーを見つけて、デビューして、レースに名を残す。それがどの${digital.uma_sex_title}の夢でもあるんじゃないのか。`,
      );
      return ret;
    };
    f.title = '変態だ！ ……そうなの？（前編）';
    return f;
  })(),
  rec_end: (() => {
    /**
     * @param {CharaTalk} digital
     * @param {CharaTalk} you
     */
    const f = async (digital, you) => {
      await era.printAndWait(
        `${you.name} は ${digital.name} に興味を持った。選抜の翌日、運よく公共の訓練場で${digital.sex}を見つけた。`,
      );
      await digital.say_and_wait(
        `ふへふへ、${digital.uma_sex_title}が走ったダート……この体で、冒せない土の上を走れるなんて、三女神の恵み……`,
      );
      await era.printAndWait(
        `力のある脚がダートを踏み、土煙を上げる。脚力は強く、ダート向きに見える。`,
      );
      await digital.say_and_wait(
        `やっほー、${digital.uma_sex_title}ちゃんが走った芝、最高すぎ……これならどんな展開でも成績が取れる。徳、積んじゃったね～`,
      );
      await era.printAndWait(
        `額の汗を拭いて、空を仰いで笑う。${digital.sex}はかなり楽しそうだ。`,
      );
      await era.printAndWait('待って、デジ、今芝に切り替えた？ つまり……');
      await era.printAndWait(
        `つまり${digital.sex}は、倍の訓練量を積んでこの状態を作っている！`,
      );
      era.println();
      await you.say_and_wait(
        `これだけの実力で選抜に出ないのか？ もったいないだろ！`,
      );
      era.println();
      await digital.say_and_wait(
        `いやいや、出たら脳みそがポップコーンみたいに弾けちゃう！`,
      );
      await digital.say_and_wait(`ん……え！ なんであなたが？`);
      await era.printAndWait(
        `前にいい印象を残したのか、ただ説明したいだけなのか。${digital.sex}は、ちょっと向こうで話そうと目配せした。`,
      );
      era.drawLine();
      await era.printAndWait(
        `${digital.sex}について、訓練場のスタンドへ来た。`,
      );
      await era.printAndWait(
        `たいていのトレーナーは近い位置で${digital.uma_sex_title}の訓練を見る。だからスタンドは、かえって人が少ない。`,
      );
      await era.printAndWait(
        `手すりに手を置いて、デジは訓練場で走る${digital.uma_sex_title}を見ている。`,
      );
      era.println();
      await digital.say_and_wait(`実は、推しの妄想を抱きながら走ってるんだ。`);
      await era.printAndWait(`そう言いながら、デジは考え込む顔をした。`);
      await you.say_and_wait(`推しの妄想？`);
      await digital.say_and_wait(
        `え？ 専門用語出ちゃった？ うん、簡単に言うと……`,
      );
      await era.printAndWait(
        `${
          digital.sex
        }は${digital.uma_sex_title}への愛を滔々と語り始めた。どう好きになったか、好きだからトレセンに入ったこと、デビューしようとした瞬間に気づいたこと……`,
      );
      await digital.say_and_wait(
        `見ての通り、芝もダートも適性は悪くない。でも両方できるからこそ、選べない！ 片方を選んだら、もう片方を捨てることになる！`,
      );
      await era.printAndWait(`デジは仕方なさそうに両手を広げた。`);
      await digital.say_and_wait(
        `${digital.uma_sex_title}ちゃんには、どっちにも良さがあるんだよ！ どれも尊いんだよ！`,
      );
      await digital.say_and_wait(
        `それは受け入れられない！ だから覚悟を捨てた。どっちも選ばない！`,
      );
      await digital.say_and_wait(`あはははは！`);
      await era.printAndWait(
        `腰に手を当て、頭を上げて、${digital.sex}は自嘲するように大笑いした。`,
      );
      await digital.say_and_wait(
        `どう？ これでもうお手上げでしょ？ 私はこんな覚悟のない${digital.uma_sex_title}なんだよ！`,
      );
      await you.say_and_wait(`覚悟がない、か……`);
      await era.printAndWait(
        `トレーナーとして、${
          you.name
        } はダートの${digital.uma_sex_title}や短距離の${digital.uma_sex_title}が、輝星シリーズでいちばん人気の中距離芝に出られないことを悩む姿を、何度も見て、聞いてきた。`,
      );
      await era.printAndWait(
        `それでも最後には、${digital.couple_title}は気づく——レースそのものの意味は、人気なんかよりずっと重い、と。`,
      );
      await era.printAndWait(
        `この${digital.uma_sex_title}は？ ${
          digital.name
        } と名乗る${digital.uma_sex_title}は、芝とダートを同時に走れないことで悩んでいる。だが他の${digital.uma_sex_title}と違うのは、${
          digital.sex
        }にはその才能がある。`,
      );
      await era.printAndWait(
        `しかも……${digital.sex}は、そのために倍の努力を積んでいる。`,
      );
      await digital.say_and_wait(
        `ふふふ、言葉が出ないでしょ？ じゃあ先に行くね～`,
      );
      era.println();
      await you.say_and_wait(`違う。言い換えれば、君がいちばん覚悟がある！`);
      await digital.say_and_wait(`え？ どういうこと？`);
      await era.printAndWait(
        `そうだ。さっき、その小さな体がダートを力強く走っていた。`,
      );
      await era.printAndWait(`そしてダートに劣らない、芝での軽い走り。`);
      await era.printAndWait(
        `選べないまま、${digital.sex}は両方でここまで努力してきた。`,
      );
      await era.printAndWait(`これを、今に活かせる！`);
      await you.say_and_wait(`選ばない、という覚悟だ！`);
      await era.printAndWait(
        `そう、選ばないこと自体が一つの選択だ。だが${digital.sex}の言う「選ばない」は、倍の努力が要る！`,
      );
      await digital.say_and_wait('え？');
      await you.say_and_wait(
        `選ばない！ 芝かダートかで選ばないなら、芝もダートも選ぶってことだろ！`,
      );
      await era.printAndWait(
        `デジが固まった。いつも元気のない、たまに垂れる尻尾まで止まっている。`,
      );
      await digital.say_and_wait('え？ 芝もダートも選ぶ、つまり……');
      await you.say_and_wait(`そう、万能ランナーだ！`);
      await digital.say_and_wait('いやいやいや、無理だよ');
      await digital.say_and_wait('創作でも安易に出せない万能ランナー!?');
      await era.printAndWait('うん、いくらなんでも現実味がないか……');
      await digital.say_and_wait('天才!?');
      await digital.say_and_wait(
        `芝では芝を踏み割る${digital.uma_sex_title}を見られて、ダートでは土煙を上げる${digital.uma_sex_title}も見られるってこと!?`,
      );
      await digital.say_and_wait(
        'ひゃーーーー！！！！！！！！！！！！！！！！！',
      );
      await era.printAndWait(
        `デジの口は本当に速い。${you.name} が反応する前に、${digital.sex}は大声で両手を上げて一回転していた。`,
      );
      await era.printAndWait(
        `${digital.sex}は理解したらしい。挑戦する気になったのか？`,
      );
      await digital.say_and_wait(
        `${digital.uma_sex_title}ちゃんたちに仕えてきたご褒美が、ついに実った！`,
      );
      await digital.say_and_wait('うひゃーーーーー！');
      await digital.say_and_wait('決めた！ デジたん、万能王になる！');
      await digital.say_and_wait('どの推しにも、いちばん近くで触れるために！');
      await you.say_and_wait(`面白いな。僕の担当にならないか？`);
      await era.printAndWait(`${you.name} は右手を出した。`);
      await era.printAndWait(
        `先ほどのダートと芝の走りは見ていても、レースは訓練とは違う。${digital.sex}の先がどうなるか、好奇心が強く湧いた。`,
      );
      await digital.say_and_wait(
        `……先に言っとく。私は推しをいちばん近くで推したいだけ。期待しすぎないで……`,
      );
      await era.printAndWait(`最初から腰が引けてる……`);
      await era.printAndWait(
        `だが${digital.sex}の目ははっきりしていた。小さな手が、あなたの手を握る。`,
      );
      await era.printAndWait(
        `少し変にも見えるけれど、${digital.sex}はレースで違う火花を散らせる。${you.name} はそう確信した。`,
      );
    };
    f.title = '変態だ！ ……そうなの？（後編）';
    return f;
  })(),
};
