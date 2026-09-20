/**
 * @file エイシンフラッシュ - 募集
 * @author 爱放箭的袁本初
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} flash
   * @param {CharaTalk} you
   */
  async rec_start(flash, you) {
    await era.printAndWait(
      `トレーニング場で、${you.name} は余光に、どこか見覚えのある後ろ姿を捉えた。`,
    );
    era.printButton('「？」', 1);
    await era.input();
    await era.printAndWait(
      `${you.name} は慌てて振り返ったが、背後には誰もいなかった。`,
    );
    era.printButton('「……気のせい、か？」', 1);
    await era.input();
    await era.printAndWait(
      `${you.name} は未練を残して周囲を探したが、あの見慣れた影は溶けたように、二度と視界に現れなかった。`,
    );
    era.printButton('「気のせいだろう。」', 1);
    await era.input();
    await era.printAndWait(
      `仕方なく ${you.name} は首を振り、いったんそのことは脇へ置いた。`,
    );
  },
  /**
   * @param {CharaTalk} flash
   * @param {CharaTalk} you
   */
  async rec_rest(flash, you) {
    await era.printAndWait(
      `数日後、部屋を片付けていると、${you.name} は机の引き出しの隅に、銀黒の勲章が静かに置かれているのを見つけた。`,
    );
    era.printButton('「これは？」', 1);
    await era.input();
    await era.printAndWait(
      `好奇心に押され、${you.name} は勲章を手に取り、よく見た。`,
    );
    await flash.say_as_unknown_and_wait(
      'ご助力、ありがとうございました。お礼として、どうかこれを受け取ってください。',
    );
    era.printButton('「ああ、思い出した！」', 1);
    await era.input();
    await era.printAndWait(
      `記憶が急に戻ってきた。以前、用事で外出して学園近くの地下鉄駅で待っていたとき、道に迷った${flash.uma_sex_title}を助け、お礼として受け取った品だ。`,
    );
    await era.printAndWait(
      `とはいえ、その${flash.uma_sex_title}の顔はもう霞んでいる。${you.name} がかろうじて思い出せるのは、艶やかな黒い短髪と、外国人特有の澄んだ青い瞳——その目立つ特徴だけだった。`,
    );
    await era.printAndWait('プルルル——');
    era.printButton('「！」', 1);
    await era.input();
    await era.printAndWait(
      `もう少し細部を思い出そうとしていたところへ、けたたましい着信音が思考を断ち切った。`,
    );
    era.printButton('「出る」', 1);
    era.printButton('「切る」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `思考を遮られた不快さは残っていたが、${you.name} はそれでも携帯を取り、丁寧に応答した。`,
      );
      await you.say_as_passer_by_and_wait(
        '係員',
        `トレーナー${you.adult_sex_title}、選抜レースが始まります。まだ会場にいらっしゃいませんが。`,
      );
      await era.printAndWait('受話器の向こうから、焦った声が聞こえた。');
      era.printButton('「選抜レース？」', 1);
      await era.input();
      await era.printAndWait(
        `その言葉に ${you.name} はわずかに間を置き、今日グラウンドで大事な行事があるのを思い出した。`,
      );
      era.printButton('「すぐ行く！」', 1);
      await era.input();
      await era.printAndWait(
        `それに気づいた ${you.name} は、すぐ扉を開けて飛び出した。`,
      );
    } else {
      await era.printAndWait(
        `思考を遮られた苛立ちのまま、${you.name} は携帯を取り、切断した。`,
      );
      await era.printAndWait('プツッ。');
      await era.printAndWait('着信音がぴたりと止んだ。');
      await era.printAndWait(
        `${you.name} が携帯を置こうとしたとき、画面の日付に視線が留まった。`,
      );
      era.printButton('「そういえば……」', 1);
      await era.input();
      await era.printAndWait(
        `次の瞬間、${you.name} は今日グラウンドで大事な行事があるのを、はっと思い出した。`,
      );
      era.printButton('「選抜レースが始まる！」', 1);
      await era.input();
      await era.printAndWait(
        `それに気づいた ${you.name} は、すぐ扉を開けて飛び出した。`,
      );
    }
  },
  /**
   * @param {CharaTalk} flash
   * @param {CharaTalk} you
   */
  async rec_final(flash, you) {
    let ret;
    await era.printAndWait(
      `${you.name} は慌ててグラウンドへ走った。そこはすでに他のトレーナーと${flash.uma_sex_title}たちで埋め尽くされていた。`,
    );
    era.printButton('「ふぅ……間に合ったか？」', 1);
    await era.input();
    await era.printAndWait(
      `遅刻で先手は逃したが、選抜レースはまだ始まっていない。興味のある${flash.uma_sex_title}を探す余地は、まだ残っている。`,
    );
    await era.printAndWait(
      `そこで ${you.name} は人混みの中を左右に目を配り、何か見つけられないか探した。`,
    );
    era.printButton('「！」', 1);
    await era.input();
    await era.printAndWait(
      `不意に、余光にまた見覚えのある人影が映った。${you.name} は慌てて振り返ったが、その人はもういなかった。`,
    );
    era.printButton('「妙だ。探してみよう。」', 1);
    era.printButton('「気のせいだ。放っておけ。」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(`あの人は誰だ？ 知り合いなのか？`);
      await era.printAndWait(
        `好奇心に押され、${you.name} は人影が消えたほうへ歩いた。`,
      );
      await era.printAndWait(`人混みに道を開きながら進み続けた。`);
      await era.printAndWait(
        `やがて ${you.name} は、グラウンドの隅へ出てしまっていた。`,
      );
    } else {
      await you.say_and_wait(
        '気のせいだろう。こんな偶然で知り合いに会えるはずがない。',
        true,
      );
      await era.printAndWait(
        `そう思い、${you.name} は首を振って内心の疑念を打ち消した。`,
      );
      await era.printAndWait(
        `それから探し続けたが、納得のいく相手は見つからない。`,
      );
      await era.printAndWait(
        `歩いているうちにどんどん遠ざかり、気づくとグラウンドの隅に出ていた。`,
      );
    }
    era.printButton('「ここは？」', 1);
    await era.input();
    await era.printAndWait(
      `${you.name} が周囲を観察していると、中心の賑わいとは対照的に、ここはひときわ閑散としていた。`,
    );
    await flash.say_and_wait(
      `${you.adult_sex_title}、こんにちは。何かご用でしょうか？`,
    );
    era.printButton('「！」', 1);
    await era.input();
    await era.printAndWait(
      `突然、疑問を含んだ声が ${you.name} の後ろから聞こえた。`,
    );
    await era.printAndWait([
      you.get_colored_name(),
      ' が振り返ると、学園の運動着を着た',
      flash.uma_sex_title,
      'が、困惑した顔で ',
      you.get_colored_name(),
      ' を見ていた。',
    ]);
    await era.printAndWait(
      `よく見ると、肩にかかるほどの黒い短髪。白い透かし彫りの輪状の飾りが右耳にかかり、その外に小さなリボンが結ばれている。`,
    );
    await era.printAndWait(
      `視線を落とせば、風のない湖面のように穏やかな青い瞳が、吸い込まれそうな魔力を帯びていた。危うくその目に落ちて、凝脂のような白い肌を見過ごすところだった。`,
    );
    if (flash.sex_code !== 1) {
      await era.printAndWait(
        '体つきは、ゆったりした運動着でも隠しきれない豊かな胸が自然な呼吸で上下し、両手で囲めるほど細い腰と合わせて、想像を誘う曲線を描いていた。',
      );
    }
    await era.printAndWait(
      `${flash.uma_sex_title}として大切な両脚も、上半身の印象を継いでおり、激しい運動で温もりや細長さを失ってはいない。`,
    );
    await era.printAndWait('疑いようのない美人だ。');
    await era.printAndWait(`${you.name} は心の中で、そう呟いた。`);
    await flash.say_and_wait(
      '……どうして、ずっと私を見ていらっしゃるのですか？',
    );
    await era.printAndWait(
      `目の前の${flash.teen_sex_title}も、${you.name} が黙ったまま${flash.sex}を見つめ続けるのを、当然のように訝しんだ。`,
    );
    era.printButton('「以前、どこかで会いませんでしたか？」', 1);
    await era.input();
    await flash.say_and_wait('え？');
    await era.printAndWait(
      `${you.name} の言葉に${flash.sex}は一瞬動きを止め、それから品定めするように ${you.name} を数秒見た。`,
    );
    await flash.say_and_wait('なるほど。');
    await era.printAndWait(
      `続いて、${you.name} は${flash.sex}の顔に、わずかな喜びの笑みが浮かぶのを見た。`,
    );
    await flash.say_and_wait('あなたでしたか。本当に、お久しぶりです。');
    await era.printAndWait(
      `${flash.sex}は ${you.name} を認めた。先ほど ${you.name} が${flash.sex}を見て認めたのと同じように。`,
    );
    era.printButton('「久しぶり。」', 1);
    era.printButton('「あのときの贈り物、ありがとう。」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait(
        `${you.name} は、${flash.sex}がこの学園の生徒だったことに意外さを覚えた。`,
      );
      await flash.say_and_wait(
        'ええ。あなたがこちらでトレーナーをされているとも思っていませんでした。これまでお会いしなかったのは、運のせいだったのですね。',
      );
      await era.printAndWait(`${flash.teen_sex_title}は微笑んで首を振った。`);
      await flash.say_and_wait('あっ。');
      await era.printAndWait(
        `何か思い出したように、${flash.sex}の顔に突然、詫びの色が浮かんだ。`,
      );
      await flash.say_and_wait(
        '以前お助けいただいたとき、疎かにしてお名前を申し上げそびれました。申し訳ありません。',
      );
    } else {
      await era.printAndWait(
        `${you.name} は、あのとき${flash.sex}から受け取った贈り物に礼を言った。`,
      );
      await flash.say_and_wait(
        'いえ。助けていただいたのですから、当然の返礼です。',
      );
      await era.printAndWait(`${flash.sex}は小さく笑い、嬉しそうだった。`);
      await flash.say_and_wait('気に入っていただけて、とても嬉しいです。');
      await flash.say_and_wait('あっ。');
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `そう言いかけて、急に何かを思い出したように、${flash.sex}の顔に詫びの色が浮かんだ。`,
      );
      await flash.say_and_wait(
        'そういえば、以前お助けいただいたとき、疎かにしてお名前を申し上げそびれていました。',
      );
    }
    era.printButton('「え。」', 1);
    await era.input();
    await flash.say_and_wait(
      '大変失礼なことでした。ですので、今から改めて自己紹介をさせてください。',
    );
    await era.printAndWait(`${flash.sex}は手を胸に当て、神情を整えた。`);
    await flash.say_and_wait(
      `エイシンフラッシュと申します。ご覧の通り、${flash.uma_sex_title}です。`,
    );
    era.printButton('「それで、ここにいるのは……」', 1);
    await era.input();
    await flash.say_and_wait('はい。');
    await era.printAndWait(
      `${flash.sex}はうなずき、${you.name} の推測を肯定した。`,
    );
    await flash.say_and_wait(
      'ただいまは、このあとの選抜レースの準備をしていました。',
    );
    era.drawLine();
    await era.printAndWait(
      `選抜レースは終わった。だが ${you.name} にとって意外だったのは、レース前に状態を最良まで整えていたエイシンフラッシュが、ひどく悪い着順でゴールしたことだ。`,
    );
    await flash.say_and_wait('…………');
    await era.printAndWait(`沈んだ顔色の${flash.sex}を見て、`);
    era.printButton('「すぐに声をかける。」（募集を続ける）', 1);
    era.printButton(
      `「大事なのは担当の${flash.uma_sex_title}を探すことだ。慰めはあとでいい。」（募集をやめる）`,
      2,
    );
    ret = (await era.input()) === 1;
    if (ret) {
      await era.printAndWait(
        `今そんなことをすれば、成績のいい${flash.uma_sex_title}たちは他のトレーナーに先を越されるかもしれない。それでも ${you.name} は、沈むエイシンフラッシュを見過ごせなかった。`,
      );
      await era.printAndWait(`${you.name} は足早に${flash.sex}へ向かった。`);
      await flash.say_and_wait('……お恥ずかしい結果をお見せしました。');
      await era.printAndWait(
        `${you.name} を認めると、エイシンフラッシュは小さく息を吸い、やや無理をした笑みを向けた。`,
      );
      era.printButton('「君の走りは、十分よかった。」', 1);
      era.printButton('「勝敗は兵家の常。大侠、出直したまえ。」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `${you.name} は、このレースについての見方を${flash.sex}に話した。`,
        );
        await era.printAndWait(
          `${you.name} から見れば、エイシンフラッシュの走りは隙がなく、綻びなど見つからない。`,
        );
        await flash.say_and_wait(
          'つまり、単純に力不足だった、ということでしょうか。',
        );
        await flash.say_and_wait('………');
        await era.printAndWait(
          `${you.name} の言葉のあと、エイシンフラッシュはしばらく黙った。`,
        );
      } else {
        await flash.say_and_wait('大侠、ですか……ふふっ。');
        await era.printAndWait(
          `エイシンフラッシュは ${you.name} の言葉を聞いて、小さく笑った。`,
        );
        await flash.say_and_wait(
          '冗談がお上手ですね。私は大侠などではありませんよ。',
        );
        await era.printAndWait(
          `${flash.sex}は首を振り、先ほどより少し表情が和らいだ。`,
        );
        await flash.say_and_wait('ですが……');
        await era.printAndWait(
          `続いて、${you.name} は${flash.sex}が考え込むように呟くのを聞いた。`,
        );
        await flash.say_and_wait('勝敗は兵家の常、ですか……');
        await flash.say_and_wait('………');
        await era.printAndWait(
          `そう言い終えると、${flash.sex}は沈黙に沈んだ。`,
        );
      }
      era.printButton('「あの……」', 1);
      await era.input();
      await era.printAndWait(
        `それを見て ${you.name} が何か言おうとしたとき、${flash.sex}は突然顔を上げ、${you.name} の胸のトレーナー徽章を見つめた。`,
      );
      await flash.say_and_wait(
        `${you.adult_sex_title}、少し失礼な質問をしてもよろしいでしょうか？`,
      );
      era.printButton('「？」', 1);
      await era.input();
      await era.printAndWait(
        `エイシンフラッシュの唐突な問いかけに ${you.name} は戸惑ったが、それでもうなずいた。`,
      );
      await flash.say_and_wait(
        'トレーナーというお仕事に就かれて、どれくらいになりますか？',
      );
      await era.printAndWait(
        `${you.name} が同意したのを見て、${flash.sex}は少し迷ってから尋ねた。`,
      );
      era.printButton('「まだ間もない」', 1);
      if (era.get('flag:当前声望') > 500) {
        era.printButton('「しばらくになる」', 2);
      }
      if (era.get('flag:当前声望') > 1000) {
        era.printButton('「かなり長い」', 3);
      }
      switch (await era.input()) {
        case 1:
          await era.printAndWait(
            `${you.name} は、正式にトレーナーになってからまだ日が浅く、実践経験に乏しい新人だと話した。とはいえ、理論の成績だけ見れば、古参のトレーナーに大きく劣ることはないと思っている、とも付け加えた。`,
          );
          await flash.say_and_wait(
            'なるほど。つまり、実力を証明する機会が足りないだけだ、とお考えなのですね？',
          );
          await era.printAndWait(
            `${you.name} の答えを聞き、エイシンフラッシュは考え込むようにうなずいた。`,
          );
          await flash.say_and_wait('ですが……実力の証明、ですか。');
          await era.printAndWait(
            `次の瞬間、何かを思い出したように、${flash.sex}は長く息を吐いた。`,
          );
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(
            `それを見て ${you.name} は、具合が悪いのか尋ねようとした。`,
          );
          await flash.say_and_wait(
            `……もし今、私が担当の${flash.uma_sex_title}になりたいと言ったら、何人のトレーナーが承知してくれるとお考えですか？`,
          );
          era.printButton('「え？」', 1);
          await era.input();
          await era.printAndWait(`予想外の言葉が、${you.name} の耳に入った。`);
          era.printButton('「………」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name} には、なぜその問いが出たのかわからない。だが目の前のエイシンフラッシュの目は冗談ではなさそうで、${you.name} は数秒黙った。`,
          );
          era.printButton('「正直に言えば、少ない。」', 1);
          era.printButton('「心配するな。いつかはいる。」', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait(
              `先ほどのレースが脳裏に浮かび、迷った末、${you.name} は正直に答えた。`,
            );
            await flash.say_and_wait('少ない、ですか……');
            await flash.say_and_wait(
              'そうですよね。私の成績は、お粗末と言って差し支えないのですから。',
            );
            await era.printAndWait(
              'そこでエイシンフラッシュは振り返り、先ほど終わったレースの着順を記した掲示板を見た。',
            );
            await era.printAndWait(`当然、そこに${flash.sex}の名前はない。`);
          } else {
            await era.printAndWait(
              `先ほどのレースが脳裏に浮かび、迷った末、${you.name} は少し角を丸めた言い方を選んだ。`,
            );
            await flash.say_and_wait(
              'いつかはいる……つまり、実際のところは、楽観できない、ということでしょうか。',
            );
            await era.printAndWait(
              `だがエイシンフラッシュは、${you.name} の言外の意味をたやすく読み取った。`,
            );
            await flash.say_and_wait(
              'そうですよね。私の成績は、お粗末と言って差し支えないのですから。',
            );
            await era.printAndWait(
              `${flash.sex}は振り返り、先ほど終わったレースの着順を記した掲示板を見た。`,
            );
            await era.printAndWait(`当然、そこに${flash.sex}の名前はない。`);
          }
          era.printButton(
            '「……まあ、僕みたいな新人トレーナーを探せば、引き受けてはくれると思う。」',
            1,
          );
          await era.input();
          await era.printAndWait(
            `エイシンフラッシュの顔色が沈むのを見て、${you.name} は慰めた。`,
          );
          await flash.say_and_wait('………');
          era.printButton(
            '「あるいは、もう一度準備して、次の選抜レースでより良い成績を取る。」',
            1,
          );
          await era.input();
          await era.printAndWait(
            `${you.name} は${flash.sex}のために策を示そうとした。`,
          );
          await flash.say_and_wait(
            '今回の敗因は力不足です。では次の選抜レースで、私の伸びは、どれほどになるのでしょう。',
          );
          await era.printAndWait(
            'それを聞いて、エイシンフラッシュは静かに言った。尋ねているのか、独り言なのか、判然としない口調だった。',
          );
          era.printButton('「……それは、君次第だ。」', 1);
          era.printButton('「努力し続ければ、必ず伸びる！」', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait(
              '能力を伸ばす条件は、簡単とも言えるし、複雑とも言える。だが消極的なままその場で迷っていては、前方へ一歩も踏み出せない。',
            );
            await era.printAndWait(
              `${you.name} は、その道理を${flash.sex}に伝えようとした。`,
            );
            await flash.say_and_wait('私自身の考え次第……ですか。');
            await era.printAndWait(
              `${you.name} の言葉を聞いて、何か決めたように、${flash.sex}は深く息を吸った。`,
            );
          } else {
            await era.printAndWait(
              `能力を伸ばす条件は、簡単とも言えるし、複雑とも言える。だが前向きでなければ前へ進めない——${you.name} は${flash.sex}を励ました。`,
            );
            await flash.say_and_wait('努力し続ければ、必ず伸びる……ですか？');
            await era.printAndWait(
              `${you.name} の言葉を聞いて、何か決めたように、${flash.sex}は深く息を吸った。`,
            );
          }
          await flash.say_and_wait(
            `${you.actual_name_with_title}、お願いがございます。`,
          );
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(
            `続いて ${you.name} は、レースの敗北で沈んでいたエイシンフラッシュの目が、一瞬で再び鋭くなるのを見た。`,
          );
          await era.printAndWait(`${you.name} がその変化に驚く間もなく。`);
          await flash.say_and_wait(
            '私の担当トレーナーに、なっていただきたいのです。',
          );
          era.printButton('「え？！」', 1);
          await era.input();
          await era.printAndWait(
            `次の瞬間、${you.name} の動揺をさらに一段上げる言葉が、${flash.sex}の口から出た。`,
          );
          await era.printAndWait(`この急な展開に、${you.name} の選択は——`);
          era.printButton('「なぜ僕を選ぶんだ？」', 1);
          era.printButton(
            '「理由はわからないが、それなら、これから互いに担当だ。」',
            2,
          );
          if ((await era.input()) === 1) {
            await era.printAndWait(
              `エイシンフラッシュの突然の申し出に ${you.name} は戸惑った。だがそれ以上に、なぜ自分へ声をかけたのかが気になった。`,
            );
            await flash.say_and_wait(
              '理由、ですか。そうですよね。理由は必要でしょう。',
            );
            await era.printAndWait(
              `${you.name} の疑問を聞き、エイシンフラッシュは数秒考えた。`,
            );
          } else {
            await era.printAndWait(
              `エイシンフラッシュの申し出は急だった。だが今日選抜レースを見に来た目的は、新しい担当の${flash.uma_sex_title}を見つけることだ。だから ${you.name} は、迷わず引き受けた。`,
            );
            await flash.say_and_wait(
              '……ずいぶんあっさりしていますね。なぜ急にお願いしたのか、お知りになりたくはないのですか？',
            );
            era.printButton('「知りたいが、とりあえず先に引き受けた。」', 1);
            await era.input();
            await flash.say_and_wait('ふふっ。');
            await era.printAndWait(
              `${you.name} の答えを聞き、エイシンフラッシュは小さく笑った。`,
            );
            await flash.say_and_wait(
              '私には都合のいい理由です。ですが、その考え方は少し危ういと思います。',
            );
            await era.printAndWait(`${flash.sex}はそう言って、首を振った。`);
            await flash.say_and_wait(
              'どうか、私の理由を聞いてから判断してください。',
            );
          }
          await era.printAndWait(
            `続いて${flash.sex}は、初対面のとき危うく ${you.name} を引き込みかけた、あの青い瞳を示した。`,
          );
          await flash.say_and_wait(
            'お気づきかと思いますが、私は日本人ではありません。',
          );
          era.printButton('「察しはついていた。」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name} は${flash.sex}の言葉に合わせてうなずいた。`,
          );
          await flash.say_and_wait(
            '実際、日本から九千キロ離れたドイツの出身です。',
          );
          await flash.say_and_wait('つまり、留学生です。');
          await era.printAndWait('エイシンフラッシュは指を一本立てた。');
          await flash.say_and_wait(
            `日本へ来た目的は、レース場で向かうところ敵なしの${flash.uma_sex_title}になるため、そして……`,
          );
          era.printButton('「そして？」', 1);
          await era.input();
          await flash.say_and_wait('………');
          await era.printAndWait(
            'エイシンフラッシュはしばらく黙り、それから小さく息を吐いた。',
          );
          await flash.say_and_wait(
            '先ほどあなた様の前で惨敗した私が言うと、滑稽に聞こえるかもしれません。',
          );
          await flash.say_and_wait('ですが。');
          await era.printAndWait(
            `そこで ${you.name} は、${flash.sex}の顔が改まるのを見た。`,
          );
          await flash.say_and_wait(
            '栄誉を積み重ねて、両親に……私を誇りに思ってほしいのです。',
          );
          await era.printAndWait(
            `エイシンフラッシュは真剣に ${you.name} を見た。その信念を、この場で叩き込みたいように。`,
          );
          era.printButton('「それが、君の考えか？」', 1);
          await era.input();
          await era.printAndWait(`${you.name} はうなずいた。`);
          await flash.say_and_wait(
            '次の選抜レースに出るかどうかにかかわらず、専門家の指導がなければ、どれだけ努力してもその場踏みです。',
          );
          await era.printAndWait(
            `${you.name} が自分の考えを受け取ったのを見て、エイシンフラッシュは続けた。`,
          );
          await flash.say_and_wait(
            'ですので、ご指導いただきたいのです。私には、まだ伸びしろがあると信じています。',
          );
          await era.printAndWait(
            `言い終えると、${flash.sex}は ${you.name} に一礼し、丁寧に頼んだ。`,
          );
          await flash.say_and_wait('まあ、もちろん。');
          await era.printAndWait(
            `立ち上がり直した瞬間、${flash.sex}はまた、決まり悪そうに笑った。`,
          );
          await flash.say_and_wait(
            'なぜあなた様にお願いしたのか、お知りになりたいのでしたら。',
          );
          await flash.say_and_wait(
            '正直に申しますと、面識があるほうが引き受けやすい、という私情も含まれています。',
          );
          era.printButton('「そうか。」', 1);
          await era.input();
          await era.printAndWait(
            `それを聞いて、${you.name} は小さくうなずいた。この状況で`,
          );
          break;
        case 2:
          await era.printAndWait(
            `${you.name} は、トレーナーになってからしばらく経つこと、成績では名高い先輩には及ばないが、差はキャリアだけだと話した。`,
          );
          await flash.say_and_wait('なるほど。その自信、敬服いたします。');
          await era.printAndWait(
            `${you.name} の言葉を聞き、エイシンフラッシュは笑って称えた。`,
          );
          await flash.say_and_wait('ですが……キャリア、ですか。');
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(`次の瞬間、${flash.sex}は小さく息を吐いた。`);
          await era.printAndWait(
            `${you.name} には、${flash.sex}の肩が、その一瞬だけ少し落ちたように見えた。`,
          );
          era.printButton('「大丈夫か？」', 1);
          await era.input();
          await era.printAndWait(`それを見て、${you.name} は気遣って尋ねた。`);
          await flash.say_and_wait(
            '……ご心配ありがとうございます。私は大丈夫です。',
          );
          await era.printAndWait(
            `エイシンフラッシュは首を振り、続いて毅然とした目で ${you.name} を見た。`,
          );
          await flash.say_and_wait('ですが、お願いがございます。');
          era.printButton('「え？」', 1);
          await era.input();
          await flash.say_and_wait(
            '私の担当トレーナーに、なっていただきたいのです。',
          );
          await era.printAndWait(
            `言い終えると、${flash.sex}は ${you.name} に一礼し、丁寧に頼んだ。`,
          );
          await era.printAndWait(`この急な展開に、${you.name} の選択は——`);

          era.printButton('「なぜ僕を選ぶんだ？」', 1);
          era.printButton('「わかった。これから互いに担当だ。」', 2);
          ret = (await era.input()) === 1;
          if (ret) {
            await era.printAndWait(
              `エイシンフラッシュの突然の申し出に ${you.name} は戸惑った。だがそれ以上に、なぜ自分へ声をかけたのかが気になった。`,
            );
            await flash.say_and_wait(
              '理由、ですか。そうですよね。理由は必要でしょう。',
            );
            await era.printAndWait(
              `${you.name} の疑問を聞き、エイシンフラッシュは数秒考えた。`,
            );
          } else {
            await era.printAndWait(
              `今日選抜レースを見に来た目的は、新しい担当の${flash.uma_sex_title}を見つけることだ。だから ${you.name} は、迷わず引き受けた。`,
            );
            await flash.say_and_wait(
              '……ずいぶんあっさりしていますね。なぜ急にお願いしたのか、お知りになりたくはないのですか？',
            );
            era.printButton('「知りたいが、とりあえず先に引き受けた。」', 1);
            await era.input();
            await flash.say_and_wait('ふふっ。');
            await era.printAndWait(
              `${you.name} の答えを聞き、エイシンフラッシュは小さく笑った。`,
            );
            await flash.say_and_wait(
              '私には都合のいい理由です。ですが、その考え方は少し危ういと思います。',
            );
            await era.printAndWait(`${flash.sex}はそう言って、首を振った。`);
            await flash.say_and_wait(
              'どうか、私の理由を聞いてから判断してください。',
            );
          }
          await era.printAndWait(
            `続いて${flash.sex}は、初対面のとき危うく ${you.name} を引き込みかけた、あの青い瞳を示した。`,
          );
          await flash.say_and_wait(
            'お気づきかと思いますが、私は日本人ではありません。',
          );
          era.printButton('「察しはついていた。」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name} は${flash.sex}の言葉に合わせてうなずいた。`,
          );
          await flash.say_and_wait(
            '実際、日本から九千キロ離れたドイツの出身です。',
          );
          await flash.say_and_wait('つまり、留学生です。');
          await era.printAndWait('エイシンフラッシュは指を一本立てた。');
          await flash.say_and_wait(
            `日本へ来た目的は、レース場で向かうところ敵なしの${flash.uma_sex_title}になるため、そして……`,
          );
          era.printButton('「そして？」', 1);
          await era.input();
          await flash.say_and_wait('………');
          await era.printAndWait(
            'エイシンフラッシュはしばらく黙り、それから小さく息を吐いた。',
          );
          await flash.say_and_wait(
            '先ほどあなた様の前で惨敗した私が言うと、滑稽に聞こえるかもしれません。',
          );
          await flash.say_and_wait('ですが。');
          await era.printAndWait(
            `そこで ${you.name} は、${flash.sex}の顔が改まるのを見た。`,
          );
          await flash.say_and_wait(
            '栄誉を積み重ねて、両親に……私を誇りに思ってほしいのです。',
          );
          await era.printAndWait(
            `エイシンフラッシュは真剣に ${you.name} を見た。その信念を、この場で叩き込みたいように。`,
          );
          era.printButton('「それが、君の考えか？」', 1);
          await era.input();
          await era.printAndWait(`${you.name} はうなずいた。`);
          await flash.say_and_wait(
            'このレースには負けましたが、私にはまだ伸びしろがあると信じています。',
          );
          await era.printAndWait(
            `${you.name} が自分の考えを受け取ったのを見て、エイシンフラッシュは続けた。`,
          );
          await flash.say_and_wait(
            'ですので、トレーナーとして経験を積んでいらっしゃるあなたに、ご指導いただきたいのです。',
          );
          if (ret) {
            era.printButton('「………」', 1);
            await era.input();
            await era.printAndWait(
              `そのときの${flash.sex}の態度が誠実なのは、${you.name} にもわかった。だが同時に、別の疑問も胸に浮かんだ。`,
            );
            era.printButton(
              '「それなら、なぜもっと強いトレーナーを選ばないんだ。」',
              1,
            );
            await era.input();
            await flash.say_and_wait('え。');
            await era.printAndWait(
              `${you.name} の問いに、エイシンフラッシュは明らかに虚を突かれた。`,
            );
            await flash.say_and_wait('………');
            await era.printAndWait(
              `困った色が、見てわかるほど${flash.sex}の顔に浮かんだ。`,
            );
            await flash.say_and_wait('……はあ。');
            await era.printAndWait(
              `数秒後、${you.name} は${flash.sex}が困ったように小さく息を吐くのを見た。`,
            );
            await flash.say_and_wait(
              'あなた様は……本当に、口にしにくいことをお尋ねになりますね。',
            );
            await era.printAndWait('エイシンフラッシュは苦笑した。');
            era.printButton('「悪い。」', 1);
            await era.input();
            await flash.say_and_wait(
              'いいえ、謝らないでください。正確に言えば、私自身の考えが招いたことです。',
            );
            await era.printAndWait(
              `${flash.sex}は首を振ったが、声は少し沈んだ。`,
            );
            await flash.say_and_wait(
              '確かにおっしゃる通り、能力の高いトレーナーほど、私の助けになります。',
            );
            await flash.say_and_wait(
              '功利で考えるなら、長年やってきた熟練のトレーナーを選ぶべきです。',
            );
            era.printButton('「だが？」', 1);
            await era.input();
            await flash.say_and_wait(
              'ですが……ご存じの通り、選ぶということは、常に双方向です。そうでしょう？',
            );
            await era.printAndWait(
              'そう言い、エイシンフラッシュは振り返り、先ほど終わったレースの着順を記した掲示板を見た。',
            );
            await era.printAndWait(`当然、そこに${flash.sex}の名前はない。`);
            era.printButton(
              '「君が行きたくても、向こうは入団を認めない。」',
              1,
            );
            era.printButton('「つまり僕は、次善の選択か？」', 2);
            if ((await era.input()) === 1) {
              await era.printAndWait(
                `${you.name} も、${flash.sex}の考えをすぐ理解した。`,
              );
              await flash.say_and_wait('はい。');
              await era.printAndWait('エイシンフラッシュはうなずいた。');
              await flash.say_and_wait(
                'キャリアが深いトレーナーほど、目線は高くなります。',
              );
              await flash.say_and_wait(
                '選抜レースで私が示した成績では、選んでいただく理由には足りないと思います。',
              );
              era.printButton('「では、僕のことはどう見ている？」', 1);
              await era.input();
              await flash.say_and_wait('え。');
              await era.printAndWait(
                `${you.name} の言葉に、エイシンフラッシュは瞬きした。${flash.sex}には、『見る』の意味がわかっている。`,
              );
              await flash.say_and_wait('……お察しの通りかもしれません。');
              await era.printAndWait(
                `数秒考えてから、${flash.sex}は正直に言った。`,
              );
              await flash.say_and_wait(
                'お願いした理由には、面識があるほうが引き受けやすい、という私情も含まれています。',
              );
              era.printButton('「自然な考えだ。」', 1);
              await era.input();
              await flash.say_and_wait(
                'ですが、それは僥倖を当てにしているのではありません。あなた様にも私にも、不公平な考えですから。',
              );
              await era.printAndWait(
                '言い終えると、エイシンフラッシュは深く息を吸った。',
              );
              await era.printAndWait(
                `${flash.sex}は極めて真剣な目で ${you.name} を見た。言葉も行いも偽りがないと、伝えようとしている。`,
              );
              await flash.say_and_wait(
                '私は、あなた様が熟練のトレーナーへ進む過程で必要になる、キャリアの一部になりたいのです。',
              );
            } else {
              await flash.say_and_wait('………');
              await era.printAndWait(
                `少し棘のある ${you.name} の言葉に、エイシンフラッシュは数秒黙った。`,
              );
              await flash.say_and_wait(
                'そんな過剰なことを認めてしまえば、私自身が自分を許せないでしょう。',
              );
              await era.printAndWait(
                `何かの一線に触れたように、再び口を開いた${flash.sex}の顔色は、極めて厳しかった。`,
              );
              await flash.say_and_wait(
                'お察しの通りかもしれません。お願いした理由には、面識があるほうが引き受けやすい、という私情も含まれています。',
              );
              await flash.say_and_wait('ですが。');
              await era.printAndWait(
                `そこで ${you.name} は、${flash.sex}の瞳に鋭い光が走ったのを見た。`,
              );
              await flash.say_and_wait(
                '次善などという過剰なことを認めてしまえば、私自身が自分を許せないでしょう。',
              );
              era.printButton('「……」', 1);
              await era.input();
              await era.printAndWait(
                `これほど態度の硬いエイシンフラッシュを前に、${you.name} は認めざるを得なかった。`,
              );
              era.printButton('「失言だった。」', 1);
              await era.input();
              await flash.say_and_wait(
                '……とにかく、私の中に僥倖を当てにする気持ちはありません。あなた様にも私にも、不公平な考えですから。',
              );
              await era.printAndWait(
                `${you.name} の言葉を聞き、エイシンフラッシュの顔色も和らいだ。`,
              );
              await era.printAndWait(
                `次の瞬間、${flash.sex}は ${you.name} に手を差し出した。`,
              );
              await flash.say_and_wait(
                'ですので、私は、あなた様が熟練のトレーナーへ進む過程で必要になる、キャリアの一部になりたいのです。',
              );
              await era.printAndWait(
                `言いながら${flash.sex}は、極めて真剣な目で ${you.name} を見た。言葉も行いも偽りがないと、伝えようとしている。`,
              );
            }
            await flash.say_and_wait(
              `私は、あなた様の担当の${flash.uma_sex_title}になりたいのです。`,
            );
            era.printButton('「条件の交換か？」', 1);
            await era.input();
            await era.printAndWait(`${you.name} は${flash.sex}に尋ねた。`);
            await flash.say_and_wait('いいえ。私個人のお願いです。');
            era.printButton('「そうか。」', 1);
            await era.input();
            await era.printAndWait(
              `ここまでで ${you.name} は、エイシンフラッシュの言葉に込められた覚悟を理解した。ではこの状況で、${you.name} の選択は——`,
            );
          } else {
            await era.printAndWait(
              `そのときの${flash.sex}の態度が誠実なのは、${you.name} にもわかった。そこで、`,
            );
          }
          break;
        case 3:
          await era.printAndWait(
            `${you.name} は、トレーナーを何年も続け、経験を積み、以前には成績のいい${flash.uma_sex_title}を何人か育てたこともあると話した。`,
          );
          await flash.say_and_wait(
            'つまり、長年やってこられた熟練のトレーナー、ということでしょうか？',
          );
          await era.printAndWait(
            `${you.name} の答えを聞き、エイシンフラッシュは小さく息を吐いた。`,
          );
          await flash.say_and_wait('それなら、問題ないはずです。');
          era.printButton('「？」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name} は${flash.sex}の呟きを聞き、何が問題ないのか尋ねようとした。`,
          );
          await flash.say_and_wait('私のトレーナーに、なっていただけますか？');
          era.printButton('「え？」', 1);
          await era.input();
          await era.printAndWait(
            `次の瞬間、${you.name} は${flash.sex}の言葉に驚いた。`,
          );
          await flash.say_and_wait(
            'ご迷惑になるお願いだと思います。突然すぎるのも承知しています。',
          );
          await era.printAndWait(
            `${you.name} のその表情を見て、${flash.sex}の口調にも詫びが混じった。`,
          );
          era.printButton('「なぜ僕を選ぶんだ？」', 1);
          era.printButton('「わかった。これから互いに担当だ。」', 2);
          if ((await era.input()) === 1) {
            await era.printAndWait(
              `エイシンフラッシュの突然の申し出に ${you.name} は戸惑った。だがそれ以上に、なぜ自分へ声をかけたのかが気になった。`,
            );
            await flash.say_and_wait(
              '理由、ですか。そうですよね。理由は必要でしょう。',
            );
            await era.printAndWait(
              `${you.name} の疑問を聞き、エイシンフラッシュは数秒考えた。`,
            );
          } else {
            await era.printAndWait([
              '今日選抜レースを見に来た目的は、新しい担当の',
              flash.uma_sex_title,
              'を見つけることだ。だから ',
              you.get_colored_name(),
              ' は、迷わず引き受けた。',
            ]);
            await flash.say_and_wait(
              '……ずいぶんあっさりしていますね。なぜ急にお願いしたのか、お知りになりたくはないのですか？',
            );
            era.printButton('「知りたいが、とりあえず先に引き受けた。」', 1);
            await era.input();
            await flash.say_and_wait('ふふっ。');
            await era.printAndWait(
              `${you.name} の答えを聞き、エイシンフラッシュは小さく笑った。`,
            );
            await flash.say_and_wait(
              '私には都合のいい理由です。ですが、その考え方は少し危ういと思います。',
            );
            await era.printAndWait(`${flash.sex}はそう言って、首を振った。`);
            await flash.say_and_wait(
              'どうか、私の理由を聞いてから判断してください。',
            );
          }
          await era.printAndWait(
            `続いて${flash.sex}は、初対面のとき危うく ${you.name} を引き込みかけた、あの青い瞳を示した。`,
          );
          await flash.say_and_wait(
            'お気づきかと思いますが、私は日本人ではありません。',
          );
          era.printButton('「察しはついていた。」', 1);
          await era.input();
          await era.printAndWait(
            `${you.name} は${flash.sex}の言葉に合わせてうなずいた。`,
          );
          await flash.say_and_wait(
            '実際、日本から九千キロ離れたドイツの出身です。',
          );
          await flash.say_and_wait('つまり、留学生です。');
          await era.printAndWait('エイシンフラッシュは指を一本立てた。');
          await flash.say_and_wait(
            `日本へ来た目的は、レース場で向かうところ敵なしの${flash.uma_sex_title}になるため、そして……`,
          );
          era.printButton('「そして？」', 1);
          await era.input();
          await flash.say_and_wait('………');
          await era.printAndWait(
            'エイシンフラッシュはしばらく黙り、それから小さく息を吐いた。',
          );
          await flash.say_and_wait(
            '先ほどあなた様の前で惨敗した私が言うと、滑稽に聞こえるかもしれません。',
          );
          await flash.say_and_wait('ですが。');
          await era.printAndWait(
            `そこで ${you.name} は、${flash.sex}の顔が改まるのを見た。`,
          );
          await flash.say_and_wait(
            '栄誉を積み重ねて、両親に……私を誇りに思ってほしいのです。',
          );
          await era.printAndWait(
            `エイシンフラッシュは真剣に ${you.name} を見た。その信念を、この場で叩き込みたいように。`,
          );
          era.printButton('「それが、君の考えか？」', 1);
          await era.input();
          await era.printAndWait(`${you.name} はうなずいた。`);
          await flash.say_and_wait(
            'このレースには負けましたが、私にはまだ伸びしろがあると信じています。',
          );
          await era.printAndWait(
            `${you.name} が自分の考えを受け取ったのを見て、エイシンフラッシュは続けた。`,
          );
          await flash.say_and_wait(
            'ですので、長年トレーナーをされてきたあなたに、ご指導いただきたいのです。',
          );
          await era.printAndWait(
            `言い終えると、${flash.sex}は ${you.name} に一礼し、丁寧に頼んだ。`,
          );
          await era.printAndWait(`この状況で、${you.name} の行動は——`);
      }
      era.printButton('「わかった。一緒に頑張ろう。」（募集成功）', 1);
      era.printButton(
        '「すまない。僕の力は、君が思うほどではない。他を当たってくれ。」（募集をやめる）',
        2,
      );
      ret = (await era.input()) === 1;
    }
    return ret;
  },
};
