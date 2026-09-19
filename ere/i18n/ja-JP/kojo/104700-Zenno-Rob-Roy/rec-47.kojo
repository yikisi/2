# @file ゼンノロブロイ - 募集
# @author 某不思議なオオハシ
# @author Claude (翻訳)
rec1:
  - 一瞬の光が、地平線を切り開くようだった。遠くから一目見ただけなのに、%YOU%にはわかった。あの崇高で野性的な走り、すべてを出し切る気配、ただひたすら前へ行く姿勢。
  - 間違いなく、あれは……
  - acc: 1
    content: （英雄……）
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: （……調教する価値のある雌だ……）
  - まあ、考えすぎるな。あれほどのウマ%UMA%なら、とっくに契約済みだろう。
  # FLAGNAME:15 = 名声
  - if: era.get('flag:15') < 500
    content: さっさとメイクデビューの資料をまとめて、新人トレーナーでも受けてくれそうな担当を探そう。
  - acc: 1
    content: （それでも、もう一度、あの走りを見たい）
  - 午前いっぱい資料を整理しても、見込みのあるウマ%UMA%は見つからなかった。
  - if: era.get('flag:15') < 500
    content: 当然だ。見込みのあるウマ%UMA%は、経験の厚いトレーナーと契約したがる。トレーナーは何代もウマ%UMA%を持てるが、ウマ%UMA%の機会は一度きりだから。
  - acc: 1
    content: 「%Y_CALL_301% に借りた資料、返さないとな。図書館に直接返せばいいって言ってたっけ？」
  - %YOU%は図書館へ向かった。入職時に %Y_CALL_301% からトレセンの豪華な設備は聞いていたが、一フロアを占める図書館には、改めて中央だなと思わされる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: ？？？
      - 「あ、あの、私……今日の当番の司書です。何かお困りですか」
  - %YOU%が振り返ると、小柄なウマ%UMA%がカウンターの横に座っていた。本の山が%SEX%の頭より高い。声をかけてくれなければ、ここにウマ%UMA%がいることすら気づかなかっただろう。
  - %SEX%が立ち上がって、ようやくトレセンの制服を着た小さなウマ%UMA%の顔が見えた。
  - やや灰色がかった髪を、二本の白いリボンで編み込み、左額で三つ編みになって垂れている。コバルトの宝石のような瞳に、熱と知性がにじむ。青い点の入った蘭の花環を右耳の飾りにし、大きな眼鏡が可愛さと落ち着きを足している。まん丸い小さな顔も、とても可愛い。大きな耳と、よく動く尻尾が軽く揺れて、図書館に人が来て暇つぶしの相手ができたのを喜んでいるように見えた。
  - acc: 1
    key: relation
    content: 「本を返しに来た」（好感+5）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「返本ですね。返したい本を、私にください……」
      - 司書は%YOU%の本を受け取り、カウンターの機械でスキャンしたあと
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「駿川さんが借りた本でしたか。もう少しで期限切れでしたね」
      - %SEX%は適当に数ページめくる
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「とても大切に扱われていますね。汚れひとつない……あなたも本が好きですか？新人トレーナーで、ウマ%UMA%のトレーニングの本を探しているなら、おすすめできますよ……私、よく図書館で本を読んでますから」
      - acc: 1
        content: 「いいの？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「いいですよ……その代わり、いつかあなたと担当さんの物語を、見せてくださいね」
  - acc: 2
    content: 「英雄を探しに来た」（恋慕+1）
    lines:
      - 司書がびくりとする
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「あ……あなたも英雄譚や伝記がお好きなんですか！私も英雄叙事詩が大好きです。歴史上の偉業に、後世の脚色が混ざって、虚実が重なった叙事詩こそ、神話の色を帯びた英雄なんです！」
      - %YOU%は、急に話が止まらなくなった司書と、微かに震える耳を見て、この子は神話や民俗叙事詩が相当好きなのだと思った
      - 「英雄の話、好きなんだな」
      - %YOU%は%SEX%を励ますつもりだったが、%SEX%の耳は急に垂れ、顔に緊張が広がった。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - 「あ……ごめんなさい……つ、つい自分だけで話してしまって。民俗の棚はこちらです。ご案内します」
      - %YOU%は %Y_CALL_301% から借りた本を、そっと返却用の山に置き、%SEX%の後ろについていった。
  - 司書は立ち上がり、該当の棚へ案内しようとする。そこで、まだ名前を伝えていなかったことを思い出し、慌てて%YOU%の方を向いた
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: ？？？
      - 「すみません……自己紹介を忘れていました。中等部の%CHARA%です。美浦寮に住んでいます。もし……英雄叙事詩のことで聞きたいことがあれば……私がお答えできます」
  - if: era.get('cflag:47:0') !== 1
    lines:
      - 振り返り方が急すぎたのか、身長に見合わない発育なのか。%TEEN%の胸のふくらみが、回転に合わせて揺れた。
      - このとき%YOU%は気づいた。%CHARA%というウマ%UMA%は、年齢にそぐわない低さだけでなく、年齢にそぐわない豊かな胸と腰も持っている
      - acc: 1
        content: （この子、背を伸ばす分を体に回したのか？）
      - acc: 2
        content: （胸も尻も脚もいい。安産型の幼妻そのものだ）
      - %TEEN%は%YOU%の妙な考えと、あちこちに泳ぐ視線に気づいたらしく、軽く咳をした。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%は、どうして英雄譚の本をお探しなんですか？」
  - %YOU%は%SEX%に、あの日見た、心を揺さぶった光景を話した。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「光のように地平線を切り開く英雄……一目見ただけで、何か月も探すのですか？%CALLNAME%は、本当にロマンチックですね……」
  - 本棚の前で、%CHARA%は振り返る
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ここが民俗文化の区画です……言いづらいのですが……学園で、あの英雄のようなウマ%UMA%を、一緒に探してもいいですか？」
  - %CHARA%は、少し興奮している？目が光り始めている。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私……英雄の物語には詳しいです……学園にも知り合いがいます……私も、その英雄を見つけたいんです」
  - acc: 1
    content: 「でもトレセンの生徒の本分は走ることだろ。手伝ってくれたら、トレーニングの邪魔にならないか？」
  - %CHARA%は、その質問に少し言葉が縺れた
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「だ……大丈夫です。トレーニングも司書の当番もありますけど、私……%CALLNAME%が『英雄』と呼んだウマ%UMA%を見てみたいんです。%SEX%が、なぜ英雄だと思われたのか……私も……私も……」
  - acc: 1
    content: 「私も？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「い……いえ、なんでもないです。とにかく、よろしくお願いします、%CALLNAME%……明日から情報を集めます……一週間後も私が当番なので、そのとき情報を交換しましょう……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （私も……英雄になりたい）

rec2:
  # 中庭
  - %YOU%は約束どおり、図書館で%CHARA%と落ち合う。
  - 二人で学園中を英雄探ししていることは、もう広まっていた。黒縁眼鏡の小柄なウマ%UMA%と新人トレーナーが英雄を探している、と学園中が知っている。一緒に調べることも、分かれて動くこともある。認めざるを得ない。%CHARA%というウマ%UMA%の知識の広さは、大学を出た%YOU%を、ある面では超えている。
  - 慣れた足取りで門を入り、本の山を越えると、小柄なウマ%UMA%がまた耳を揺らしながら、何かを読んでいる。
  - acc: 1
    content: 「やあ、約束どおり来たよ。図書館の英雄」
    lines:
      - 挨拶しても、%CHARA%は本から目を上げない。%YOU%に気づいていないらしい。
      - acc: 1
        content: （肩を叩こう）
      - %YOU%は背中を叩こうとしたが、届かない。肩も届かない。仕方なく、本に沈んでいる小さな頭をぽんと叩いた。なんというか、この子、髪の質がいい。
      - %CHARA%は首をかしげて顔を上げ、頭を叩いたのが%YOU%だと知る。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「え……%CALLNAME%。いつ来たのですか？また読み込んでしまって、すみません」
  - acc: 2
    content: ゆらゆらしている大きな耳を、二度ほど撫でる
    lines:
      - 手触りがいい。さすがロブロイだ。
      - %CHARA%は震え、険しい顔で手の方を向いたが、%YOU%だとわかると柔らかくなった。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「もう、%CALLNAME%……手引きに、ウマ%UMA%の耳と尻尾を勝手に触ってはいけないって書いてありませんか？他の人なら、警備を呼んで引きずり出しますよ」
  -
  - acc: 1
    content: 「今日は、また民俗の話を読んでるのか？」
  - %CHARA%は首を振り、手の本を振って見せる
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「これは私が集めた、あの『英雄』の情報です。まず、%CALLNAME%があのウマ%UMA%を見たのは自主トレの時間のはずです。その時間帯はたくさんのウマ%UMA%がトレーニング場を出入りするので、職員に借用記録を見せてもらっても、あのウマ%UMA%を特定するのは難しい……」
  - %CHARA%はノートに集めた情報を見せながら話す
  - acc: 1
    content: 「本当に、手はないのか」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「まだあります。%CALLNAME%の印象が十分なら、場に出て一目でわかるはずです」
  - acc: 1
    content: 「でも前に、トレーニング場で何日も座ったぞ。朝から晩まで。それでも、あのウマ%UMA%はもう一度も見られなかった」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ぷ……なるほど。同級生の間で『トレーニング場の観客席に、志を得ず幽霊になったトレーナーがいる』って都市伝説の元が、あなたでしたか……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「なら方法を変えましょう。私の知り合いで『英雄』と呼べるウマ%UMA%は何人もいます。一人ずつ当たりましょう。たとえば、見た目からして不思議で、宇宙から来たみたいで、有名なTCGのフィールド魔法と同名の……」
  - acc: 1
    content: 「ロブロイはそんなに英雄を知ってるのか？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「違います！三つの説明は同じウマ%UMA%です。クラスメイトで友人の、ネオユニヴァース。%CALLNAME%、ルドルフ会長の悪いところを真似してませんか？」
  - %CHARA%は、話を遮ってソ連ネタを挟んだ%YOU%を、ふくれ面で見ている
  - （ふくれ面、可愛い）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あとは、どうしてもあと一歩及ばなくても、全身全霊で前を追い越そうとするウマ%UMA%……それから、私が一番一番一番尊敬している——%C_NAME%先輩。生まれつきの体と、刻苦の鍛錬を持つ%SEX%が、とても憧れで……そうだ、今日も%C_NAME%先輩はトレーニング場にいるはずです。見に行きませんか？」
  - 放課後、%YOU%と%CHARA%はトレーニング場へ来た。生徒は多いし、%YOU%は入口から遠く眺めただけなのに、疾走する緑の影は、その場の大半の視線を奪っていた。
  - acc: 1
    content: 「あれが、君の言う先輩か。速いな。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「そうですそうです。%CALLNAME%、もう少し近づいて、%C_NAME%先輩のトレーニングを見学しましょう」
  - %CHARA%はノートとペンを出し、耳と尻尾がまた揺れ始める。
  - acc: 1
    content: （%SEX%の走り……圧がすごい！）
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: （でも%SEX%は、探している雌じゃない）
  - %YOU%は%CHARA%に、あの日見たのは%SEX%ではないと伝えようとした
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ん……歩幅はハの字で、安定しています。巡航速度でしょうか？でも%C_NAME%先輩は、もう二千四百メートル近く走っています……長距離の準備？呼吸もまだ吸吸呼のまま、体力に余裕がある。%C_NAME%先輩は長距離の重賞に備えているのでしょうか……」
  - %SEX%は真剣に、%C_NAME%の走り、残りの体力、合計タイムを分析している。耳と尻尾の揺れも、だんだん大きくなる。
  - acc: 1
    content: 「君も、二周くらい走りたくなったか？」
  - %CHARA%は、少し驚いたようだった
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「い……いえ……今日の自主トレは休んでるので……上がるのはやめます……」
  - acc: 1
    content: 「え、僕の『英雄』探しに付き合うため？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ち……違います……私……その……今日はここまでにしましょう……%C_NAME%先輩も、トレーナーの探す『英雄』ではないなら、次はネオユニヴァースに会いに行きましょう……ぼ、僕はこれで失礼rua（舌を噛んだ）……」
  - （急に言葉が縺れるな。トレーニングに引っ張られるのが怖いのか？）
  - （これは……）
  - %YOU%は地面に、とても可愛いノートを見つけた。
  - （ロブロイのか？開いて、持ち主を確認しよう）
  - ノートには、%CHARA%が他の人と併走したあとのまとめと、自主トレの経験がびっしり書いてあった。未出走のウマ%UMA%でここまでまとめられるのは、優秀だ。
  - （こんなに走るのが好きなウマ%UMA%が、なぜわざわざ休んで調査に付き合うんだ？）
  - content:
      - fontWeight: bold
        content: 教官
      - 「あ、そこのトレーナーさん。あなたは%CHARA%の専属トレーナーですか？」
  - 「え、それは違う」
  - content:
      - fontWeight: bold
        content: 教官
      - 「そうですか。ロブロイさんは以前、傷病で模擬レースを何度か逃しています。次の模擬レースが近いのに、また焦り始めて、普段の成績も落ちている。運動会で活躍すればトレーナーが見つかるかもしれない、と勧めたのですが、最近はやる気も足りず、よく休む。諦めたのかと思いました。だから、あなたと並んで走りの話をしているのを見て、トレーナーが見つかったのかと勝手に喜んでしまって。すみません」
  - acc: 1
    content: 「%SEX%の最近の様子は、走るのを諦めてるようには見えなかった」

rec3:
  # 中庭
  - %YOU%と%CHARA%は、また図書館で情報を交換した。だが進展はない。ネオユニヴァースも、あの日見た「英雄」ではなかった。%YOU%はふと、模擬レースの話を思い出した
  - acc: 1
    content: 「模擬レースのほうは、どうだ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「え？あ……その……%CALLNAME%は、どうして知ってるんですか？」
  - 「君のコーチに聞いた。当日、応援に行くよ。がんばれ、%CHARA%！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ、どうして……いえ、嫌というわけでは……違う、%CALLNAME%に応援してほしくないわけじゃない……ただ、私は存在感が薄いし、成績もよくなくて……だ、だから……来てくれても、見つからないかもしれない……そう思ってしまうんです。コーチも言いましたよね。最近、調子も本当に悪くて……」
  - %CHARA%は頭を下げ、%SEX%の表情は見えない
  - 「悪い。プレッシャーを増やすつもりはなかった」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「いいんです、いいんです。むしろ、私のために見に来てくれる人がいるのは、嬉しいです……えへへ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「小さい頃から、これといった特技もなく、友達も少なかった。傷病も多くて……傍にいてくれたのは、本だけでした……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ずっと……地味なタイプでした。地味な自分にも、もう慣れています……誰かがわざわざ見に来てくれると……かえって申し訳なくて……人の期待を背負ったなら、ちゃんと頑張らなきゃと思って……それからまた、焦って……焦りすぎて、また怪我をして……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「物語の英雄は、登場しただけで、すべての視線を集めます。私は英雄から、ずっと遠いまま……恥ずかしい。まったく……『%CHARA%』という名前に、申し訳なくて……」
  - 最後には、%CHARA%の声に泣きが混じった。鈍い%YOU%でも、%CHARA%が圧力で壊れかけているのはわかった
  - 「うっ……ごめんなさい……（吸気）こぼしてしまって……（吸気）こんなに……今日は……もう帰ります」
  - 言い終わるか終わらないかで、%CHARA%は図書室から飛び出した。
  - %YOU%は追いかけようとしたが、ウマ%UMA%の脚にはもう追いつかない。%CHARA%の背中は、廊下の向こうに消えていた。
  - （やっぱり、人間とウマ%UMA%を同じにはできない）
  - %CHARA%は、今どこへ行くんだろう？
  - divider: true
    content: トレーニング場
  - acc: 1
    content: 「やっぱり、ここにいたか！」
  - 「え、%CALLNAME%はどうして見つかるんですか。普通この展開なら、家に帰ってるはずでは？」
  - acc: 1
    content: 「君は、普通のウマ%UMA%みたいに簡単には諦めないだろ」
  -
  - acc: 1
    content: 「君の奥には、まだ屈しない炎が燃えてる」（前に拾ったノートを出す）
  -
  - acc: 1
    content: 「このノートが、君が負けず嫌いだという証拠だ！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「え、もしかして……中身を見ましたか？女の子のノートをこっそりめくるのは、よくないですよ、%CALLNAME%……」
  - 「持ち主を確認したくて開いた。本当に悪い！」
  - %CHARA%は、%YOU%のあまりに改まった態度に、笑ってしまった
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ……あはは……あなたなら、いいです……それで、評価は……馬鹿みたい、ですか。表では諦めた顔をして、裏ではノートに併走とトレーニングを全部まとめて……私は……何もできないのに……」
  - %CHARA%は苦く笑った
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「おかしなものを見せてすみません。捨ててもいいです。いえ、捨てるなら私自身がやります。自分の夢は、自分で……」
  - acc: 1
    content: 「任せるよ。ただ、一つだけ確認したい」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「何ですか？」
  - acc: 1
    content: 「%CHARA%、君の夢は、何だ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私……言ったら……本当に笑いませんか？私……ずっとずっと、自分が英雄になっている姿を、見たいと夢見てきました」
  - %CHARA%は深く息を吸い、何かを決めたように見えた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「傷病だらけで、模擬レースを何度も逃しても。何の結果も出せなくても。誰の目にも止まらなくても。私……私は——英雄になる機会を掴んで、英雄になりたい」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「最初に『英雄』を探したのも、トレーニングを全部まとめたのも、今こうしてレース場に逃げてきたのも。全部、英雄になりたいからです……でも……現実の私は、みっともなくて冷たい夢を見てるだけ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「先輩も、同級生も、後輩も。私を遥かに超える存在がいます。みんな、似たようで違う夢を背負っています。家の誇りを守りたい、支えてくれる人を幸せにしたい、不幸を越える人を励ましたい。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも……そんなもの、私にはないんです！私……ただ、もっと注目されたい、もっと目立ちたい、友達をもう少し増やしたいだけなんです！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%THEY%みたいな深い夢も、すごい物語もない。だから……だから私は、%THEY%の背景になっているんです！」
  - acc: 1
    content: 「それでも、英雄になりたいのか？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……はい。英雄になる夢は、まだ捨てたくない……」
  - 「じゃあ、そのノートを貸してくれ」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「え、%CALLNAME%、何をするんですか？？」
  - %YOU%は油性ペンを出し、ノートの表紙に五文字を書いた。「ゼンノ英雄譚」
  - acc: 1
    content: 「ロブロイ先生、これを読ませてもらう」
  - acc: 2
    content: 「君の手の中の、君の物語は、君自身が書くべきだ！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「本当ですか？傷病だらけで、成績もなく、地味で……幻滅するかもしれませんよ……？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「本当に……私の物語を、読んでもいいんですか……？」
  - 「君が望むなら、必ず強い答えが返ってくる。子供みたいにぐずぐず泣くな。英雄になるつもりだろ、ウマ%UMA%。英雄の涙は、そう簡単には落ちない。」
  - %CHARA%は眼鏡を拭いた
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「大人の%CALLNAME%がウルトラマンの台詞を使うほうが、子供ですよ」
  - 「英雄」を探す計画は、いったん中止した。
  - %YOU%が見たからだ——もっと面白い物語を

rec4:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「はあ……はあ……どうして……タイム……前回より遅い……」
  - 「少し休め、ロブロイ。前に言っただろ。僕が応援してる。焦らなくていい、緊張しなくていい。自然に走ればいい。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「はい。もう数周練習します。計時は%CALLNAME%にお願いします」
  - 今の%CHARA%は、まだ自分の力を正確にはわかっていない。それでも、まず自信を上げるのは悪くない。
  - divider: true
  - color: %COLOR%
    content: %CHARA%は一人で情報を集めている
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （うん、%CALLNAME%の探す『英雄』は%C_NAME%先輩のはず。%YOURSEX%は違うと思ってるけど、時間も場所も走りも合ってる……）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （でも……%CALLNAME%が%YOURSEX%の『英雄』を見つけてしまったら……私たちの関係も終わる……情報交換は互いに正直で、%CALLNAME%は私の焦りも解いてくれた……でもこのことだけは……言いたくない）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （でも……言って……終わったあとで%YOURSEX%に伝える……『英雄』のすべてを……その前に……絶対に、%YOURSEX%に私を覚えていてもらわないと）
  - divider: true
    content: 模擬レース当日
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （失敗失敗失敗失敗。また緊張して出遅れた！！！）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （%C_NAME%先輩はもう後半、最終直線に近い。このままだと、また負ける）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （やっぱり……勝てない……あんなに練習したのに……）
  - acc: 1
    content: 「物語の主人公、がんばれ！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （%CALLNAME%だ！%YOURSEX%は私を見つけた……でも%C_NAME%先輩が勝って、%CALLNAME%が%SEX%こそ%YOURSEX%の「英雄」だと知ったら、また会いに来てくれるだろうか？）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （だめ。負けても……唯一の読者を失望させたくない。拍手も、声援も、視線がなくても……私は……%YOURSEX%一人の英雄に——なる！）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「おおおおおおおおお！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （心臓よ、火を点けろ。頭よ、燃えろ。脚よ、動け。こんな無様な負け方は……したくない！！！）
  - content:
      - fontWeight: bold
        content: 実況
      - 「最終直線、最終直線！%CHARA%が、最終直線で追いついてきた！」
  - acc: 1
    content: （あの走り！あの姿勢！）
  - （間違いない。あれが、あの日見た——地平線を切り開くような……）
  - content:
      - fontWeight: bold
        content: 実況
      - 「%C_NAME%がゴール、ゴール！%CHARA%は、現役ウマ%UMA%に劣らない末脚を爆発させても、%C_NAME%を超えられなかった！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - （やっぱり……負けた……馬生は、そううまくいかない……次は、%CALLNAME%に、あの日の『英雄』が%C_NAME%先輩だと説明する番だ）
  - 「ロブロイ！あの日見た『英雄』を見つけた！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「やっぱり%C_NAME%先輩、ですよね……」
  - 「君だよ！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「え？」
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - 「ロブロイ、今の末脚は出色だった……二人は、話があるのかい？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ、%C_NAME%先輩、ちょうどよかった。あの日の午後四時半ごろの芝、使っていたのは先輩ですよね」
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - 「ああ。君と併走していた。正確な時間は覚えていないけど」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でしょう、でしょう。『英雄』は、やっぱり%C_NAME%先輩ですよね！」
  - acc: 1
    content: 「つまり君も%C_NAME%の併走に出て、そのとき芝を使っていた、ということだな」
  - 「あの日、髪を下ろしてなかったか？」
  - acc: 1
    content: 「転びそうなとき、ふらふらしてた」（好感+5 恋慕+1）
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: 「転びそうなとき、胸が大きくだわだわ揺れた」（恋慕+2 名声-5）
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ええ、そんな細かいところまで見てた！？違う……じゃあ%CALLNAME%が見たのは……」
  - acc: 1
    content: 「ロブロイ、君が僕の英雄だ！契約してくれ！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「？？？？？？？？？どうしてこのタイミングで特撮ネタなんですか？？？？」
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - 「やっぱり、話があるんだね」
  -
  - %CHARA%、募集完了
