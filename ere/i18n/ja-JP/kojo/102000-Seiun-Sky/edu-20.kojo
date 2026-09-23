# @file セイウンスカイ - 育成
# @author Wolke
# @author Claude (翻訳)

ts_add:
  title: 自主的な追加トレーニング
  lines:
    - 一日のトレーニングが終わったあと、セイウンスカイは珍しく追い込みを申し出てきた。
    - %SEX%は息を整えながら、独り言をつぶやく
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……昨日の大物……ああああ！惜しい！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もっとやる！次は……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次は絶対、逃さない！」
    - 珍しく気合の入ったセイウンスカイを見て、%YOU%は決めた。
    - acc: 1
      content: 珍しいやる気だ。手伝おう
    - acc: 2
      content: トレーニングはほどほどがいい

race_start:
  title: レース前
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「出るよ——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー～ところで——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もしボクがうっかり勝っちゃったら……驚く？にゃはは～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「よっし——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今回は『自由自在』の作戦で、適当に走ろっか～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「へへ、からかってみただけ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも……どんな走り方しても、トレーナーはボクを応援してくれるよね～」

race_end_win:
  title: レース勝利
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やった！！！作戦大成功！！！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ごちそう食べる！寝坊する！大物釣る！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「サボりじゃないよ～他の相手を観察してるんだよ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「信じてくれるよね、にゃはは～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふああ～ボクって意外と強いんだ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「猫と昼寝するのが効くんだなあ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「決めた！これから一週間、毎日猫と昼寝する！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「猫ってこんなに可愛いんだから、トレーナーも邪魔できないよね、にゃはは～」

race_end_5:
  title: レース入着
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今回はまあまあだね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも惜しいなあ……あとちょっと……」
    - 「今回の作戦は悪くなかったよ。タイミングが少し足りなかっただけかも。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やはは～ありがとう、トレーナー。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次はもっと派手な作戦にするから。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのときは、びっくりさせてあげる！」

race_end_lose:
  title: レース敗北
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あはは～みんな本当に強いね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作戦だけじゃ全然足りないみたい——罠もタイミングも……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よし！これからちゃんと反省して、帰ったら倍トレーニングする！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……そう言うと思った？そんなわけないじゃん～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作戦で勝つ！それがスカイの流儀だよ～」


# 募集後、次ターン開始
ws_find_you:
  title: 捕まえた？
  lines:
    - 朝の訓練場では、勤勉な競走%UMA%たちがすでに追い込みを始めている。
    - %YOU%も早めにトレーニング室へ入り、丁寧に書いた計画を広げ、セイウンスカイと充実した一日を始めるつもりだった。
    - 陽が昇り、外の訓練場から聞こえる掛け声も増えていく。
    - だが、%YOU%の相棒の分だけが、いつまでも来ない。
    - さらにしばらくして%YOU%が時計を見れば、約束の時間はとっくに過ぎ、%SEX%へ送ったメッセージにも返事はない。
    - 「こいつ……またサボりか……」
    - 仕方なく、%YOU%は学園中を探し回ることにした。
    - acc: 1
      content: 中庭の大木の幹
      lines:
        - 姿はなかった
    - acc: 2
      content: 寮の横の芝生
      lines:
        - 姿はなかった
    - acc: 3
      content: 屋上の秘密基地
      lines:
        - 姿はなかった
    - acc: 4
      content: 食堂裏の猫小屋
      lines:
        - 姿はなかった
    - acc: 5
      content: 訓練場のスタンド
      lines:
        - 姿はなかった
    -
    - 午前いっぱい探しても見つからず、%YOU%は落胆してトレーニング室へ戻った。
    - 午後、夕飯近くになって、セイウンスカイはのそのそと現れた。
    - まず謝り、明日は絶対に時間どおり来ると約束する。
    - %YOU%は仕方なく頷き、苦言をいくつか添えて、%SEX%が本当に耳に入れることを祈るしかなかった。


# 募集後二週目、ターン終了時
we_free_cloud:
  title: 自由な雲
  lines:
    - 契約から半月。%YOU%は、周囲の%SEX%への評価が誇張ではなかったとようやく理解した。
    - 募集してからの数週間、訓練場では三日に一度は%SEX%の姿が見えない。
    - 毎朝%YOU%がトレーニング室へ着くたび、今日こそセイウンスカイがいるようにと祈る。
    - だが期待は期待で、%SEX%がまた逃げたと知れば、%YOU%の一日はまた長い捜索から始まる。
    - 運がよければ、隅っこで丸まって寝ている%SEX%を捕まえられる。
    - %SEX%は見つかっても焦らず、目をこすり、のらりくらりと欠伸をして、ゆっくり%YOU%について訓練場へ戻る。
    - だが大半は、%YOU%がありそうな場所を全部回っても空振りだ。
    - 翌日になって、%SEX%が何もなかったようにふらりとトレーニング室の入口に現れ、昨日の「消失」をまるで気にしていない。
    - 毎回%SEX%にその話をすると、%SEX%はいつも悪賢い顔で%SEX%が悪かった、次は直すと言う。
    - 二日もすれば、また姿を消す。
    - %YOU%は、このままではまずい、%SEX%とちゃんと話す必要があると思った。
    -
    - 珍しくトレーニングが終わった日、%YOU%は%SEX%をスイーツへ誘った。
    - ケーキを買って、二人は訓練場の端で味わう。夕陽が影を長く伸ばし、%YOU%はゆっくり%SEX%に切り出した。
    - 「スカイ、相談がある。」
    - 「ん？」
    - %SEX%は首を傾け、尻尾をゆっくり揺らす。
    - 「最近の逃げ……ちょっと多すぎないか……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まあ……たしかに……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大丈夫だよ、トレーナー！明日は絶対遅れないから！」
    - いつものごまかしが始まったので、%YOU%はすぐ遮った。
    - 「コホン……今日はそっちの話じゃない……」
    - 「計画を作った。毎日のトレーニングで、一日中場にいろとは言わない。」
    - 「決まった時間帯だけ来ればいい。たとえば午前二時間、午後二時間。」
    - 「残りは自由。寝たいなら寝て、釣りたいなら釣れ。週末も休みをやる。一日か二日かは、お前が決めろ。」
    - %YOU%は一息置いた。これでも十分ゆるいはずだ。
    - 「毎日、規則正しく始められればいい。今みたいに、行き当たりばったりで飛び回らなければ。」
    - %YOU%が、規則さえできればあとは少しずつ直せると期待していたところで。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いや。」
    - 迷いのない、きっぱりした返事が%YOU%に返ってきた。
    - %YOU%は一瞬、言葉を失った。
    - 「どうしてだ？午後だけでもいい、二時間だけ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いやなら、いや。」
    - セイウンスカイの口調から、いつもの丸め込みは消えていた。意外なほど硬い。
    - %SEX%は胸を組み、目を閉じ、顔を横へ向け、全身で計画への抗議を示す。
    - %YOU%は角度を変えて説得しようとした。
    - 「二時間が多すぎるなら、一時間からでもいい。時間はお前が決めてくれ。都合のいい枠を一つ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから、いや！」
    - %SEX%は%YOU%の言葉を遮り、振り返り、まっすぐ%YOU%を見つめた。
    - %YOU%は口を開きかけ、何か言おうとして、%SEX%の譲らない顔を見て、言葉を飲み込んだ。
    - 空気が少し固くなる。
    - セイウンスカイは立ち上がり、ズボンの草を払い、声はまたいつもの怠惰な調子に戻った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はいはい——トレーナー——明日は来るから、絶対来る！」
    - 言い終えると手を振り、尻尾を引きずり、ゆっくり訓練場の出口へ消えた。
    - %YOU%はその場に座り、%SEX%の背中を見送り、途方に暮れた……

# 募集後一か月、ターン開始（ニシノフラワー未募集かつ好感75未満）
ws_cloud_wind_no_flw:
  title: 雲を導く風
  lines:
    - 前回の話のあと、セイウンスカイは少しは控えめになった。だが、時折は相変わらず自分のペースだ。
    - また、消えた。
    - %YOU%は%SEX%の行きつけを辿り、最後に小さな庭のほとりで%SEX%の姿を見つけた。
    - %SEX%は、小柄な%UMA%と何か話している。
    - 二人は楽しそうで、セイウンスカイは両手を後頭部に回し、滅多に見せない、無防備な笑みを浮かべていた。
    - 小柄な%UMA%が振り返り、%YOU%は%SEX%を認めた——セイウンスカイを募集したとき、%YOU%に道を教えてくれた相手だ。当時、%SEX%は自分がセイウンスカイの友人だと言っていた。
    - %YOU%はすぐ連れて戻ろうとして、ふと%YOU%は思い当たり、足を止め、%THEY%の会話を遮らなかった。
    - その%UMA%が手を振って別れ、川沿いに遠ざかってから、%YOU%は急いで後を追った。狙いはセイウンスカイではなく、%SEX%の友人だ。
    - 「こんにちは、少しよろしいですか。」
    - 小柄な%UMA%が振り返り、%YOU%を見て目を輝かせた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: 小柄な%UMA%
        - 「ああ、こんにちは。あのときのトレーナーさんですね。もうセイウンスカイと契約されたと、%SEX%から聞きました。」
    - 「ああ。当時はかなり骨が折れたよ。」
    - %YOU%は笑った。
    - 「そうだ、まだちゃんと礼を言ってなかった。あのとき道を教えてくれて、ありがとう。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: 小柄な%UMA%
        - 「いえいえ、お礼を言うのは私のほうです。セイウンスカイを助けてくださって、ありがとうございます。」
    - %SEX%は慌てて手を振り、逆にお辞儀をした。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「あ、そうです。私、ニシノフラワーと申します。」
    - 「よろしく。」
    - %YOU%は頷き、少し迷ってから、助けを求めた。
    - 「実は、教えてほしいことがある。セイウンスカイのことは……少し手に余るんだ。」
    - ニシノフラワーは、小さく首を傾げた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「手に余る、というのは……具体的にはどちらでしょう？」
    - %YOU%はこのところの事情をざっと話した——約束のトレーニング時間を%SEX%が守れないこと、決めた枠さえ%SEX%が自分のペースで崩すこと。
    - 前回の話では大きく譲ったのに、%SEX%には相談の余地すらなかったことも。
    - 「%SEX%のトレーナーとして、%SEX%に合うやり方を、というより、二人に合うやり方を探したい。」
    - 「でも……はぁ……」
    - ニシノフラワーは静かに聞き終え、考えてから口を開いた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「ええ……実は、スカイさん%SEX%は、約束を破るのが好きな子ではないんです。」
    - 「ん？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「たぶん、%SEX%を縛るものに対してだけ……なんです。」
    - 「縛る？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「はい。スカイさんは自由でいる感覚が好きで、『こうしなければならない』がとても苦手なんです。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「%SEX%にとっては、すべて自然のままがいいんです。」
    - 「だが、俺は%SEX%のトレーナーだ。%SEX%に責任がある。好き放題だけなら、最後は欲望に沈むだけだ。」
    - ニシノフラワーはすぐ答えず、少し俯いて考え、それから顔を上げた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「ええ……%SEX%の歩調に合わせてみてはいかがでしょう？」
    - 「%SEX%の歩調に？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
    - 「はい——%SEX%に、あなたが%SEX%の枷ではなく、%SEX%の友人だと、わかってもらうんです。」
    - %YOU%はその場に立ち、ニシノフラワーの真剣な顔を見て、考え込んだ。
    - 「試してみるよ。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「はい！」
    - ニシノフラワーは力強く頷いた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「あなたを信じています。スカイさんに、こんなに責任を持ってくださって、本当にありがとうございます。」
    - 別れたあと、%YOU%は川沿いに戻った。
    - 帰り道、%YOU%は考え続けた。
    -
    - 翌日。
    - セイウンスカイは、のろのろと午前のトレーニングを終えた。
    - %SEX%は訓練場のベンチに座り、水を飲みながら%YOU%を盗み見て、何か要求するつもりだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー～」
    - 「ん？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「昼ごはんのあと、ちょっと昼寝しよっか～」
    - %SEX%の口調は軽いが、目は%YOU%の反応を慎重に測っている。
    - %YOU%には%SEX%の考えが読めた——%YOU%に断られるのを待ち、午後の逃げ方を考えるつもりだ。
    - 「いいぞ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （はぁ、やっぱり、どうやって抜けよっか～……って、待って！）
    - セイウンスカイの動きが止まり、聞き違えたのではないかと疑う。
    - 「ちょうど俺も休みたかった。」
    - %YOU%は立ち上がり、伸びをした。
    - 「スカイ、おすすめの寝場所はあるか？」
    - セイウンスカイは呆け、思わず体を後ろへ引いた。何かとんでもないものを見たみたいだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……本気？」
    - %SEX%の声には明らかな探りがあり、耳はピンと立ち、尻尾は空中で動かない。
    - 「本気だ。」
    - 「行こう。今日の昼、食堂はハンバーグらしいぞ。」
    - 言い終えると%YOU%は食堂のほうへ歩き、手を振って%SEX%を促した。
    - セイウンスカイはその場で瞬きし、また瞬きした。
    - それから%SEX%は我に返り、小走りで追いつき、小さくつぶやいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日のトレーナー……目が覚めた？」
    -
    - それから、セイウンスカイがトレーニングを逃げる回数は減っていった。
    - %SEX%が急に素直になったからではない。%YOU%が、%SEX%のリズムに追いつけるようになったからだ。
    - それ以来、%SEX%が消えても、%YOU%は%SEX%を見つけられる——木の下、川辺、屋上の隅。
    - 以前と違うのは、%SEX%を見つけたあと、%YOU%がすぐ%SEX%を訓練場へ引きずらないことだ。
    - %YOU%が座って、%SEX%と水面のウキを一緒に見ることもある。
    - %YOU%が駒を並べて%SEX%と将棋を指すこともある——毎回、すぐ負けるが。
    - %YOU%が何もせず、%SEX%の横の幹に寄り、目を閉じて、風が葉を撫でる音を聞くこともある。
    - %SEX%は自由を味わい、%YOU%は%SEX%の自由に付き合う。
    - 味わい終わってから、そっと%SEX%を軌道へ戻す……
    - %YOU%は%SEX%をできるだけ満たしつつ、加減も慎重に測っている。
    - %YOU%は、こんなに独特な競走%UMA%のトレーナーとしての仕事が、無理に矯正することではなく、導くことだと、わかり始めていた。
    - 風のように——強すぎれば雲は散り、弱すぎれば雲に追いつかない。
    - ちょうどよいとき、雲は風の歩調に乗り、空を翔ける。


# 募集後一か月、ターン開始（ニシノフラワー募集済み、または好感75超）
ws_cloud_wind_flw:
  title: 雲を導く風
  lines:
    - 前回の話のあと、セイウンスカイは少しは控えめになった。だが、時折は相変わらず自分のペースだ。
    - また、消えた。
    - %YOU%は%SEX%の行きつけを辿り、最後に小川のほとりで%SEX%の姿を見つけた。
    - %SEX%は岸に立ち、ニシノフラワーと何か話している。
    - 二人は楽しそうで、セイウンスカイの顔には、滅多に見せない無防備な笑みがあった。
    - %YOU%はすぐ連れて戻ろうとして、ふと%YOU%は思い当たり、足を止め、%THEY%の会話を遮らなかった。
    - %SEX%がニシノフラワーと手を振って別れ、川沿いに遠ざかってから、%YOU%は急いで後を追った。狙いはセイウンスカイではなく、ニシノフラワーだ。
    - 「ニシノフラワー！待ってくれ。」
    - ニシノフラワーが振り返り、%YOU%を見て目を輝かせた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「ああ、トレーナーさん！セイウンスカイから、もう%SEX%と契約されたと聞きました。」
    - 「ああ。当時はかなり骨が折れたよ。」
    - %YOU%は笑った。
    - 「そうだ、まだちゃんと礼を言ってなかった。あのとき道を教えてくれて、ありがとう。」
    - %SEX%は慌てて手を振り、逆にお辞儀をした。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「いえいえ、お礼を言うのは私のほうです。セイウンスカイを助けてくださって、ありがとうございます。」
    - %YOU%は照れて頭を掻き、少し迷ってから、助けを求めた。
    - 「実は、教えてほしいことがある。セイウンスカイのことは……少し手に余るんだ。」
    - ニシノフラワーは、小さく首を傾げた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「手に余る、というのは……具体的にはどちらでしょう？」
    - %YOU%はこのところの事情をざっと話した——約束のトレーニング時間を%SEX%が守れないこと、決めた枠さえ%SEX%が自分のペースで崩すこと。
    - 前回の話では大きく譲ったのに、%SEX%には相談の余地すらなかったことも。
    - 「%SEX%のトレーナーとして、%SEX%に合うやり方を、というより、二人に合うやり方を探したい。」
    - 「でも……はぁ……」
    - ニシノフラワーは静かに聞き終え、考えてから口を開いた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「スカイさん%SEX%は、約束を破るのが好きな子ではないんです。」
    - 「ん？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「たぶん、%SEX%を縛るものに対してだけ……なんです。」
    - 「縛る？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「はい。スカイさんは自由でいる感覚が好きで、『こうしなければならない』がとても苦手なんです。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「%SEX%にとっては、すべて自然のままがいいんです。」
    - 「だが、俺は%SEX%のトレーナーだ。%SEX%に責任がある。」
    - ニシノフラワーはすぐ答えず、少し俯いて考え、それから顔を上げた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「ええ……%SEX%の歩調に合わせてみてはいかがでしょう？」
    - 「%SEX%の歩調に？」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
    - 「はい——%SEX%に、あなたが%SEX%の枷ではなく、%SEX%の友人だと、わかってもらうんです。」
    - %YOU%はその場に立ち、ニシノフラワーの真剣な顔を見て、考え込んだ。
    - 「試してみるよ。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「はい！」
    - ニシノフラワーは力強く頷いた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「あなたを信じています。スカイさんに、こんなに責任を持ってくださって、本当にありがとうございます。」
    - 別れたあと、%YOU%は川沿いに戻った。
    - 帰り道、%YOU%は考え続けた。
    -
    - 翌日。
    - セイウンスカイは、のろのろと午前のトレーニングを終えた。
    - %SEX%は訓練場のベンチに座り、水を飲みながら%YOU%を盗み見て、何か要求するつもりだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー～」
    - 「ん？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「昼ごはんのあと、ちょっと昼寝しよっか～」
    - %SEX%の口調は軽いが、目は%YOU%の反応を慎重に測っている。
    - %YOU%には%SEX%の考えが読めた——%YOU%に断られるのを待ち、午後の逃げ方を考えるつもりだ。
    - 「いいぞ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （はぁ、やっぱり、どうやって抜けよっか～……って、待って！）
    - セイウンスカイの動きが止まり、聞き違えたのではないかと疑う。
    - 「ちょうど俺も休みたかった。」
    - %YOU%は立ち上がり、伸びをした。
    - 「スカイ、おすすめの寝場所はあるか？」
    - セイウンスカイは呆け、思わず体を後ろへ引いた。何かとんでもないものを見たみたいだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……本気？」
    - %SEX%の声には明らかな探りがあり、耳はピンと立ち、尻尾は空中で動かない。
    - 「本気だ。」
    - 「行こう。今日の昼、食堂はハンバーグらしいぞ。」
    - 言い終えると%YOU%は食堂のほうへ歩き、手を振って%SEX%を促した。
    - セイウンスカイはその場で瞬きし、また瞬きした。
    - それから%SEX%は我に返り、小走りで追いつき、小さくつぶやいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日のトレーナー……目が覚めた？」
    -
    - それから、セイウンスカイがトレーニングを逃げる回数は減っていった。
    - %SEX%が急に素直になったからではない。%YOU%が、%SEX%のリズムに追いつけるようになったからだ。
    - それ以来、%SEX%が消えても、%YOU%は%SEX%を見つけられる——木の下、川辺、屋上の隅。
    - 以前と違うのは、%SEX%を見つけたあと、%YOU%がすぐ%SEX%を訓練場へ引きずらないことだ。
    - %YOU%が座って、%SEX%と水面のウキを一緒に見ることもある。
    - %YOU%が駒を並べて%SEX%と将棋を指すこともある——毎回、すぐ負けるが。
    - %YOU%が何もせず、%SEX%の横の幹に寄り、目を閉じて、風が葉を撫でる音を聞くこともある。
    - %SEX%は自由を味わい、%YOU%は%SEX%の自由に付き合う。
    - 味わい終わってから、そっと%SEX%を軌道へ戻す……
    - %YOU%は%SEX%をできるだけ満たしつつ、加減も慎重に測っている。
    - %YOU%は、こんなに独特な競走%UMA%のトレーナーとしての仕事が、無理に矯正することではなく、導くことだと、わかり始めていた。
    - 風のように——強すぎれば雲は散り、弱すぎれば雲に追いつかない。
    - ちょうどよいとき、雲は風の歩調に乗り、空を翔ける。


# メイクデビュー（前）
before_begin_race:
  title: 初釣り
  lines:
    - 出走前の控え室で、%YOU%とセイウンスカイは呼び出しを待っていた。
    - セイウンスカイはベンチの端に座り、指で服の裾を落ち着かなげに巻いている。
    - %YOU%は水を持って、%SEX%の横に座った。
    - 「初めては、誰でも少し緊張する。」
    - 「考えすぎるな。いつものトレーニングと同じだ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……緊張じゃないよ。」
    - %SEX%はスタートのゲートをちらりと見た。
    - 入場の放送が流れ、セイウンスカイは立ち上がって伸びをした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふああ～歓声、思ったより熱いね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクがうっかり勝っちゃったら、驚く？」
    - セイウンスカイは意地悪く言った。
    - 「もちろん。だから気合を入れていけ。」
    - %SEX%は瞬きし、欲しい答えが得られたみたいだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「勝ったら～午後、一緒にサボってね～」
    - 軽い口調のまま、両手を後頭部に回し、ゆっくり走路へ向かった。


# メイクデビュー（勝）
begin_race_win:
  title: 竿出し
  lines:
    - ゴールしたとき、セイウンスカイは完全な逃げ切りの位置にいた。
    - %SEX%は絶対的な力で、レースを先頭のまま走り切った。
    - %YOU%は水とタオルを持ち、場外で%SEX%を待つ。
    - セイウンスカイは、のそのそと%YOU%へ歩いてきた。
    - acc: 1
      content: 「綺麗な勝ちだ！」
    - %YOU%は惜しまず褒めた。
    - 突然、セイウンスカイが悲鳴を上げた。
    - 続いて、ふにゃりと%YOU%へ倒れ込んできた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ——もうだめ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スカイ、一歩も歩けない～」
    - セイウンスカイは%YOU%に甘えるように叫んだ。
    - %SEX%が怪我かと思って%YOU%は慌て、すぐ%SEX%を支えた。
    - 「どうした？足を痛めたか？担架を呼ぶか？」
    - セイウンスカイは不満げに顔を上げた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう——こういうときのトレーナーは、先に優しくスカイを抱っこするんだよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それから、ここまで歩いてきたボクを、暖かく褒めるんだよ……」
    - まだふざけているセイウンスカイを見て、%YOU%は胸を撫で下ろした。
    - 「無事ならいい。歩けないのはどういうことだ。初戦でスタミナ配分を誤ったか？」
    - セイウンスカイは指を一本立て、悪い笑みを浮かべた。
    - それから爪先立ちで、%YOU%の耳元へ寄った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「考えてたからね……真剣に考えすぎて、脚が勝手に全部走っちゃった。」
    - 「考えてた？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「考えてたの——トレーナーが今、どんな顔でボクを見てるか。」
    - %SEX%は半歩下がり、%YOU%の反応を観察して、満足げに頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うんうん、その顔。思ってたと同じ。」
    - %YOU%は苦笑し、レース前の%SEX%の落ち着かなさを思い出した。
    - 「お前な——余裕じゃないか。」
    - %YOU%はタオルを%SEX%に渡した。
    - 「控え室では、こんな顔じゃなかったぞ。」
    - セイウンスカイは一瞬呆け、溜息をついた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えー、狭いところが一番嫌いなんだよね」
    - 「狭いところ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ゲートだよ、ゲート！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ゲートに入るの、時間の無駄だと思わない？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「しかも閉じてて狭いし……はぁ……。」
    - セイウンスカイは独りでぼやき続けた。
    - こうして、%SEX%の途切れ途切れの不満のなかで、メイクデビューは無事に取れた。
    - トレーニングは……まずは数日、%SEX%をしっかり休ませよう。


# メイクデビュー（勝）クラシック級2月1週、ターン開始
ws_47_5:
  title: 風起こり雲は馬のごとく
  lines:
    - メイクデビューの勝利は羽根のように落ち、セイウンスカイの胸にほとんど波紋を残さなかった。
    - %SEX%は相変わらず毎日釣りをし、猫に餌をやり、学園の隅々でいちばん気持ちいい寝場所を探す。
    - トレーニングの予定には逆らわないが、積極的とも言えない。
    - 出走の方向は全部%YOU%に放り、自分はのんびりしている。
    - %YOU%は%SEX%の才能と天賦を信じている。
    - 水流と風を見抜く目と、奇妙な発想は、走路で鮮やかな青になるはずだった。
    - 今は、%SEX%はその天賦を、午後に陽が当たらない木陰の計算に使っているだけだ。
    - %YOU%はそんな%SEX%を見て、あまりに惜しいと思った。
    - %SEX%がこの悠々に「ふやけ切る」前に、%YOU%は何かする必要があると思った。
    - そこで%YOU%は、弥生賞の出走表を出した。
    - クラシック三冠のうち皐月賞の前哨戦であるうえに……
    - 「弥生賞だ。来月。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん、いいよ～」
    - セイウンスカイは見もせずに答えた。
    - 「ああ、それから……」
    - 「スペシャルウィークとキングヘイローも出る。%THEY%の最近の状態はどちらもいい。」
    - 「今度は楽じゃないぞ……」
    - セイウンスカイは雑誌を捲る手を止め、耳を立てた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふーん、スペちゃんとキングか……%THEY%二人は、強いよね。」
    - 言い終えると、また雑誌を読み始めた。
    - 「怖いか？今ならまだ間に合うぞ」
    - セイウンスカイは雑誌を閉じ、指先で出走表を二度、軽く叩いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、ボクに足りないものはたくさんあるよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもね——獲物を逃すつもりは、ないんだ。」
    - その後の一か月、%SEX%は見た目はいつもどおりだった。
    - サボりの回数は減らず、昼寝の場所も更新される。
    - 猫に餌をやるとき、今週の機嫌まで言い当てる。
    - だが%YOU%には、%SEX%の変化がわかった——
    - サボりの合間、%SEX%の視線は訓練場の向こうへ流れる。スペシャルウィークとキングヘイローが走っている場所だ。
    - 怠惰に見える子猫が、静かに獲物の接近を待っているみたいだった……。


before_hoch_sho:
  title: 弥生賞（前）
  lines:
    - 走路前の控え室で、%YOU%とセイウンスカイは室内のテレビを見ていた。
    - 司会が熱弁で今回の人気を分析し、スピーカー越しに部屋を満たしている。
    - 画面は事前インタビューを切り替え、各メディアが結果を予想している。
    - 観客席の喧騒は壁越しにも聞こえる——熱狂したファンが、自分の見解を交わしている。
    - その熱い議論で、いちばん声が大きいのは、当然スペシャルウィークとキングヘイローだ。
    - 二人の名は繰り返し挙げられ、%THEY%の近況の分析は目立つ見出しになる。
    - セイウンスカイの名は、印刷漏れの一行みたいに、圧倒的な議論のなかで居場所がほとんどない。
    - %YOU%は隣のセイウンスカイを見た。%SEX%は悠々と椅子に崩れ、切迫はまったく見えない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふーん……注目、低めだね。」
    - セイウンスカイは二本の指を顎に当て、意味ありげに言った。
    - %YOU%はセイウンスカイの様子を見て、先月の会話を思い出した。
    - %SEX%はいつもこうして余裕がある。子猫みたいに怠惰に見え、獲物が緩んだ一瞬だけを待つ。
    - 今、%YOU%はぼんやり感じた。狩人は、すでに静かに目を覚ましている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いいよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スペちゃんとキングは、あんなに囲まれて、動くたびに何十もの目がついてる。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%はすごいよね。あんなに期待されて、それでも走れるんだから。」
    - %YOU%は%SEX%を見て、言葉の裏に別の味がある気がした。羨望か、落胆か、その両方か。
    - 「お前もすごい。俺の相棒は、%THEY%に負けない。」
    - %YOU%の激励を聞いて、セイウンスカイは面白そうに返した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「へへ、トレーナー、ボクのこと信じてるんだ～」
    - 放送が第一次集合を告げた。
    - セイウンスカイは立ち上がり、体をほぐした。
    - 出発のとき、振り返って%YOU%に呼びかけた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一か月前に言ったこと、覚えてる？」
    - %YOU%は%SEX%を見た。青い瞳が、通路の灯の下で透き通って光る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今度は……」
    - %SEX%は半秒止まり、口角に試したくなる笑みを浮かべた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちょっとだけ、期待してもいいよ？」
    - 言い終えると、ゲートへ向かった。
    - 強敵の圧力は、%SEX%を揺らさなかった。
    - 歩幅には、相変わらず%SEX%特有の怠惰なリズムがある。


hoch_sho_win:
  title: 弥生賞（勝）
  lines:
    - 最終直線に入ると、形勢がはっきりし始めた。
    - スペシャルウィークは外で力を溜め、蹄音は重く、大きく、近づく流星のようだ。
    - キングヘイローは中軸を占め、一歩ごとに疑う余地のない王者の気配を放つ。
    - セイウンスカイは、なお先頭を走っている。
    - 風、蹄、呼吸、観客の叫び——すべての音が混ざり、その青い背中へ押し寄せる。
    - 三人の差は、どんどん縮まる。
    - 突然、セイウンスカイの目に鋭い光が走った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （チャンス……今だ！）
    - セイウンスカイの体が、前へ軽く伸びた。
    - 爆発のスパートではない。逃げのリズムを、そのまま一段上げただけだ。
    - 歩幅は伸び、ピッチは乱れず、背後に食い下がる二つの影と半馬身の差を作った。
    - 最後、鮮やかな青がゴールを駆け抜けた。すべて、当然のように見えた。
    -
    - セイウンスカイが戻ってきたとき、顔には抑えきれない興奮があった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どう、トレーナー、スカイに驚いた？」
    - 口調には抑えきれない得意が隠れ、わざと何気なく聞いているふりをしている。
    - 「見事だった。予想を完全に超えた！」
    - %SEX%は%YOU%が渡した水を受け、仰いで何口か飲み、呼吸はまだ速い。
    - 水滴が顎を伝い、%SEX%が手で拭うと、待ちきれずに口を開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さっきの最後のコーナー、スペちゃんの呼吸のリズムが変わった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングも。いちばん正しいフォームを保とうとして、後半の余力が続かなかった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%の普段の練習にも、そういう弱点があるんだ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%の綻びが出た一秒を掴めば——」
    - %SEX%が得意げに自分の傑作を語るのを見て、%YOU%は%SEX%のこの一か月の日常を思い出した。
    - 他人が苦しいトレーニングをしているとき、%SEX%は寝ているように見えて、
    - 実はすべての相手の弱点を、こっそり観察していた。
    - 「普段のサボりも、遊んでたわけじゃなかったんだな。」
    - 「この戦略は、普通の人間には学べない——」
    - セイウンスカイは%YOU%の感想を聞き、瞬きし、口角を狡く上げた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「へへ～さあね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スカイは本当に休んでただけだよ～」
    - ——その口調は、明らかに「これは秘密」と言っていた。
    -
    - 遠くでスタッフの呼びかけが聞こえ、%SEX%はちらりと見て、また戻った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ！主催がインタビューだって。あとでね、トレーナー！」
    - %SEX%は立ち上がり、水筒を手に押し戻し、振り返ろうとして——
    - 「スカイ——」
    - %YOU%は%SEX%を呼び止めた。
    - セイウンスカイは振り返り、不思議そうに瞬きした。
    - %YOU%は、まだ騒がしいスタンドを指した。
    - 歓声は潮のように波を重ね、誰のためか判然としないが、今この瞬間、一部は確かに%SEX%のものだ。
    - 「この歓声……どうだ？」
    - %SEX%は%YOU%の手の先を見て、振られる応援グッズに少し目を留めた。
    - 「もっと欲しいか？」
    - %SEX%は首を傾け、本気で考えているみたいだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、ひょっとして……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「メイクデビューを経て、弥生賞を取って、スペちゃんとキングみたいな相手を見て……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクはもう『限界』だと思ってる？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さっきゴールしたとき考えてた……『クラシック三冠』の走路」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あそこの魚、もっと大きいはず！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「出走とトレーニングは……トレーナーに任せるね～」


hoch_sho_lose:
  title: 弥生賞（敗）
  lines:
    - 最終直線に入ると、形勢がはっきりし始めた。
    - スペシャルウィークは外で力を溜め、強い末脚の歩みが重く、大きく、眩い流星のようだ。
    - キングヘイローは中軸を占め、一歩ごとに疑う余地のない王者の気配を放つ。
    - セイウンスカイは、なお先頭を走っている。
    - 背後の二人は奔流のように迫り、三人の差はどんどん縮まる。
    - 風、蹄、呼吸、観客の叫び。さまざまな喧騒が交互に立つ。
    - 突然、セイウンスカイの目に鋭い光が走り、%SEX%の唇がわずかに動いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「チャンス……今だ！」
    - セイウンスカイの体が、前へ軽く伸びた。
    - 爆発のスパートではない。逃げのリズムを、そのまま一段上げただけだ。
    - だが今回、背後の「奔流」は%SEX%の予想より猛かった。
    - スペシャルウィークの末脚が最後の二百メートルで完全に爆発し、結果を決めた。
    -
    - セイウンスカイが振り返って戻ってきたとき、顔は静かで、目に入りそうな汗を手で拭っただけだった。
    - %SEX%は%YOU%が渡した水を受け、仰いで何口か飲み、呼吸はまだ速い。
    - %YOU%が%SEX%を慰めようとしたとき、%SEX%が先に口を開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さっきの最後のコーナー、スペちゃんの呼吸のリズムが変わった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングも。いちばん正しいフォームを保とうとして、後半の余力が続かなかった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その二つの綻びは掴んだ。でも、足りなかった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ね、魚が餌に食いつくのは見える。でも引き上げられるかは……別だよね？」
    - セイウンスカイは自嘲気味に笑った。
    - そのあと、セイウンスカイは俯いたまま黙った。
    - そのとき、%YOU%はそっと%SEX%を呼んだ。
    - 「スカイ。」
    - 「この声……次は聞かせてやる。」
    - %YOU%は、まだ騒がしいスタンドを指した。歓声は勝者に捧げられている。
    - セイウンスカイは数秒、黙った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ひょっとして……これで負けたら、ボクは『諦める』と思ってる？」
    - %SEX%は顔を上げ、%YOU%の向こう、遠くの空いた走路を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さっきゴールしたあと、考えてた……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「クラシック三冠の走路は、水がもっと深くて、魚ももっと大きい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次は——外さない。」


# 弥生賞勝
before_sats_sho_hw:
  title: 皐月賞（前）
  lines:
    - fontSize: 1.2rem
      content: レース前、観客席——
    - content:
        - fontWeight: bold
          content: 観客A
        - 「おい兄貴、誰が勝つと思う？」
    - content:
        - fontWeight: bold
          content: 観客B
    - 「スペシャルウィークだろ。今度は2000ウマコインを%SEX%に賭けた。%SEX%の末脚は絶対だ。」
    - content:
        - fontWeight: bold
          content: 観客C
        - 「俺もスペシャルウィークだな。でもキングヘイローも脅威だ」
    - content:
        - fontWeight: bold
          content: 観客A
        - 「うんうん、たしかに。」
    - content:
        - fontWeight: bold
          content: 観客A
        - 「え？あれセイウンスカイだよな。この前の弥生賞、%SEX%が勝ったよな。」
    - content:
        - fontWeight: bold
          content: 観客B
    - 「ふん、%SEX%か。気にするな。名門出でもないし、よく%SEX%がトレーニングを逃げると聞く。出走者の風体じゃない。」
    - content:
        - fontWeight: bold
          content: 観客B
    - 「前回%SEX%が勝てたのは、天が目を開いて%SEX%に一回だけ穴を開けたんだろ。」
    - content:
        - fontWeight: bold
          content: 観客B
        - 「今度は皐月賞だ。クラシック三冠の一戦目だ。%SEX%が紛れられる場じゃない。」
    - content:
        - fontWeight: bold
          content: 観客C
        - 「そう言うな。ここに来てる時点で、実力は足りてる。」
    - content:
        - fontWeight: bold
          content: 観客C
        - 「ただ、これまでの数字を見ると、%SEX%の支持率はたしかにずっと高くない。」
    -
    - fontSize: 1.2rem
      content: パドック——
    - %YOU%は装備を点検している。
    - セイウンスカイは退屈そうに机へうつ伏せ、顔を腕に埋め、その緩さはこれから出走する者には見えない。
    - %SEX%は頬を腕に押しつけ、頬が一つ膨らみ、まぶたはいつでも落ちそうだ。
    - %YOU%は静かに%SEX%のそばに寄り添い、まもなくの招集を待つ。
    - 突然、セイウンスカイが口を開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、トレーナー。自分がなにかをわかった、って瞬間、あった？」
    - acc: 1
      content: 「えっと——たとえば？」
    - %SEX%は寝返りを打ち、うつ伏せから横向きになり、頭を腕に乗せ、作戦盤を見つめた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまりね、うん……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほら、弥生賞まで取ったのに、今度の支持はまだ低い。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「外から見たら、前回の成績も穴だっただけ、って感じでしょ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「来るときに聞いたよ。ボクの成績、鼻で笑ってた。」
    - 「奴らの目は気にするな」
    - 「評価は、実力でひっくり返せる。」
    - セイウンスカイの指が、机の上で無意識に円を描き始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、考えすぎ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクはそこまで気にしてないよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奴らの目には、目標のない怠け者でしょ。トレーニングをサボって、寝坊して、食べて遊んでばかり。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「結果だけ見れば——当たってるよね～」
    - 「だから自分の成績は運だけだと思ってるのか？」
    - 「俺は、一度もそうは思っていない。」
    - 「それはお前の流儀だろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うーん……さあね～」
    - セイウンスカイは起き上がって椅子に寄り、両手を後頭部に回し、天井を見た。
    - 世間の輿論は、%SEX%の軽い口調に跡を残していない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもね——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんな濁った水から、本当に何か釣れたら……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その光景、けっこう面白いと思わない？」
    - %SEX%は首を傾けて%YOU%を見た。
    - 口角がゆっくり上がり、狡い笑みになる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのときの%THEY%の驚いた顔、絶対おもしろいよ～」
    - acc: 1
      content: 「つまり、みんなを驚かせるつもりか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「驚き？」
    - セイウンスカイは眉を軽く上げ、首を傾けて考えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「かもね……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクにはスペちゃんみたいな遠大な理想もないし、エルみたいな全身の熱血もない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングの生まれ持った誇りも学べないし、グラスの優しさの裏の殺気もない。どれもない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%が持ってる抱負と熱血、ボクにはない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、ボクが欲しいものは——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感じた！」
    - %SEX%は突然座り直し、両手を膝に支え、体を前へ傾けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前回の弥生賞、ボクのために上がった歓声が潮みたいに通り過ぎたとき。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「誰もボクを見てなかったのに、みんなを驚かせたとき。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボク……感じた。」
    - %SEX%は立ち上がり、服の裾を払い、ゆっくり走路へ向かう。
    - %SEX%の歩幅は速くなく、背を向け、尻尾が歩みに合わせて揺れる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！」
    - セイウンスカイは突然振り返って叫んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから……皐月賞っていう『大物』」
    - %SEX%は深く息を吸い、勇気を溜めたみたいに、目には自由のほかに闘志があった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一緒に、釣り上げよう。みんなを驚かせよう！」
    - 言い終えると走路へ向かい、歩幅は先ほどより少し速かった。
    - 数歩出て、後ろへ手を振り、振り返らない。
    -
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「おお——おお！スカイがこんなに気合入ってるなんて、珍しい！」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「スペちゃんとキングは危ないですね。ただ、今度もゲート入りは少し難しそうです」
    - 隣の通路から、二つの頭が覗いた。
    - %YOU%は思い出した。%THEY%はセイウンスカイの友人、エルコンドルパサーとグラスワンダーだ。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「ふんふん～グラス、そうとも限らないよ。」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「あっちのスペちゃんも地響きみたいに叫んでる。スカイと互角だよ。」
    - （しー……）
    - （セイウンスカイの熱い発言、隣に筒抜けだったらしい。）
    - （…………）


# 弥生賞敗
before_sats_sho_hl:
  title: 皐月賞（前）
  lines:
    - fontSize: 1.2rem
      content: レース前、観客席——
    - content:
        - fontWeight: bold
          content: 観客A
        - 「おい兄貴、誰が勝つと思う？」
    - content:
        - fontWeight: bold
          content: 観客B
    - 「スペシャルウィークだろ、弥生賞の勝ち馬だ！今度は3000ウマコインを%SEX%に賭けた。」
    - content:
        - fontWeight: bold
          content: 観客C
        - 「俺もスペシャルウィークだな。でもキングヘイローも脅威だ」
    - content:
        - fontWeight: bold
          content: 観客A
        - 「うんうん、たしかに。」
    - content:
        - fontWeight: bold
          content: 観客A
        - 「え？あれセイウンスカイだよな。この前も成績は悪くなかったよな。」
    - content:
        - fontWeight: bold
          content: 観客B
    - 「ふん、%SEX%か。気にするな。名門出でもないし、よく%SEX%がトレーニングを逃げると聞く。出走者の風体じゃない。」
    - content:
        - fontWeight: bold
          content: 観客B
    - 「前回%SEX%があの成績だったのは、%SEX%の運がよかっただけだ。」
    - content:
        - fontWeight: bold
          content: 観客B
        - 「今度は皐月賞だ。クラシック三冠の一戦目だ！ごまかしで通れる場じゃない。」
    - content:
        - fontWeight: bold
          content: 観客C
        - 「そう言うな。ここに来てる時点で、実力は足りてる。」
    - content:
        - fontWeight: bold
          content: 観客C
        - 「ただ、これまでの数字を見ると、%SEX%の支持率はたしかにずっと高くない。」
    -
    - fontSize: 1.2rem
      content: パドック——
    - %YOU%は装備を点検している。
    - セイウンスカイは退屈そうに机へうつ伏せ、顔を腕に埋め、その緩さはこれから出走する者には見えない。
    - %SEX%は頬を腕に押しつけ、頬が一つ膨らみ、まぶたはいつでも落ちそうだ。
    - %YOU%は静かに%SEX%のそばに寄り添い、まもなくの招集を待つ。
    - 突然、セイウンスカイが口を開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、トレーナー。自分がなにかをわかった、って瞬間、あった？」
    - acc: 1
      content: 「えっと——たとえば？」
    - %SEX%は寝返りを打ち、うつ伏せから横向きになり、頭を腕に乗せ、作戦盤を見つめた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまりね、うん……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほら、前回のレースで実力は見せたのに、今度の支持はまだ低い。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「外から見たら、前回の成績も運がよかっただけ、って感じでしょ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「来るときに聞いたよ。ボクの成績、鼻で笑ってた。」
    - セイウンスカイの指が、机の上で無意識に円を描き始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクはそこまで気にしてないよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奴らの目には、目標のない怠け者でしょ。トレーニングをサボって、寝坊して、食べて遊んでばかり。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「結果だけ見れば——当たってるよね～」
    - 「だから自分の成績は運だけだと思ってるのか？」
    - 「俺は、一度もそうは思っていない。」
    - 「それはお前の流儀だろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さあね～」
    - セイウンスカイは起き上がって椅子に寄り、両手を後頭部に回し、天井を見た。
    - 世間の輿論は、%SEX%の軽い口調に跡を残していない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもね——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんな濁った水から、本当に何か釣れたら……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その光景、けっこう面白いと思わない？」
    - %SEX%は首を傾けて%YOU%を見た。
    - 口角がゆっくり上がり、狡い笑みになる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのときの%THEY%の驚いた顔、絶対おもしろいよ～」
    - acc: 1
      content: 「つまり、みんなを驚かせるつもりか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「驚き？」
    - セイウンスカイは眉を軽く上げ、首を傾けて考えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「かもね……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクにはスペちゃんみたいな遠大な理想もないし、エルみたいな全身の熱血もないし、キングの生まれ持った誇りも学べないし、グラスの優しさの裏の殺気もない。どれもない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもね——」
    - %SEX%は一息置き、視線が少し遠くへ流れた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前回の弥生賞、走路の端に立って、スペちゃんが記者に囲まれるのを見て、拍手と歓声が潮みたいに通り過ぎるのを聞いて……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「思ったんだ。あれ、どんな感じなんだろうって。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いちばん真ん中に立って、みんなに見られて、みんなに名前を呼ばれて……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たぶん……悪くないよね？」
    - セイウンスカイは突然座り直し、両手を膝に支え、体を前へ傾けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから、ボクも味わってみたい。ああやって歓声をもらう味を！」
    - %SEX%は立ち上がり、服の裾を払い、ゆっくり走路へ向かう。
    - %SEX%の歩幅は速くなく、背を向け、尻尾が歩みに合わせて揺れる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！」
    - セイウンスカイは突然振り返って叫んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから……皐月賞っていう『大物』」
    - %SEX%は深く息を吸い、勇気を溜めたみたいに、目には自由のほかに闘志があった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一緒に、釣り上げよう。みんなを驚かせよう！」
    - 言い終えると走路へ向かった。
    - %SEX%が振り返ったときの歩幅は先ほどより速く、数歩出て、後ろへ手を振り、振り返らない。
    -
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「おお——おお！スカイがこんなに気合入ってるなんて、珍しい！」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「スペちゃんとキングは危ないですね。ただ、今度もゲート入りは少し難しそうです」
    - 隣の通路から、二つの頭が覗いた。
    - %YOU%は思い出した。%THEY%はセイウンスカイの友人、エルコンドルパサーとグラスワンダーだ。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「ふんふん～グラス、そうとも限らないよ。」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「あっちのスペちゃんも地響きみたいに叫んでる。スカイと互角だよ。」
    - （しー……）
    - （セイウンスカイの熱い発言、筒抜けだったらしい。）
    - （%SEX%は気づいてないだろう……）


sats_sho_win:
  title: 皐月賞（勝）
  lines:
    - セイウンスカイが二馬身の絶対差でゴールしたとき、もともと賑やかだったスタンドの歓声はさらに一段上がった。
    - レース前の軽侮と疑いは、この沸騰する海に完全に沈んだ。
    - スペシャルウィークとキングヘイローは第三コーナーですでに末脚を早めざるを得なかった。
    - だが%THEY%がどう加速しても、前方の青い影は恐ろしいリズムを保ち続けた。
    - ちょうどよい——追いつけない速さで、もう少しで届きそうな遅さのリズム。
    - %YOU%はその場に立ち、その影が減速し、止まり、振り返るのを見た。
    - %SEX%は顔を上げ、陽が横から%SEX%の顔に当たり、%SEX%は目を細め、%YOU%に大きなピースを向けた。
    - 皐月賞は、セイウンスカイの手に収まった。
    -
    - %YOU%が控え室に入ると、セイウンスカイは壁の飾り鏡の前にいた。
    - 両手を腰に当て、頭をわずかに上げ、戦果を誇示しているみたいだ。
    - %SEX%は鏡越しに見て、体が固まる。
    - それから急に振り返り、両手を「シュッ」と後ろへ隠し、顔を真っ赤にした。
    - 尻尾は驚いた猫みたいに逆立ち、まっすぐ後ろに立つ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ト、トレーナー！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでそんな早く入ってくるの！」
    - 言い終わるか終わらないかで、外から騒がしい足音が聞こえた。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「おお！大物、釣れたね、スカイ！」
    - エルコンドルパサーが扉を押し、朗らかな笑い声が人より先に部屋へ飛び込んだ。
    - %SEX%は二歩を一歩にして飛びかかり、セイウンスカイを抱きしめた。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「おめでとう、スカイ。」
    - グラスワンダーが後ろから続き、微笑んで会釈し、ゆっくり入ってきた。
    - セイウンスカイは一瞬固まり、耳が「サッ」とピンと立ち、顔は煙が出そうなほど赤い。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「な……なにが大物……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただの……普通のレース……」
    - %SEX%は小さくつぶやき、視線はどこへでも逸れ、誰とも目を合わせない。
    - 言い切る前に、%SEX%が何か思い出したように急に%YOU%を睨んだ。
    - 目には「勝手なこと言うな！」という厳しい訴えがある。
    - %YOU%は無実の顔で横を向き、壁の絵を研究するふりをした。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「え～？今見たよ？」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「スカイの最後のスパート、超——かっこよかった！」
    - エルはセイウンスカイをさらに高く持ち上げ、戦利品みたいに一回転した。
    - セイウンスカイの顔はさらに赤くなり、%SEX%は唇を動かして何か言おうとして、曖昧な息しか出ない。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「コホン——」
    - グラスワンダーは軽く咳をし、穏やかに注意した。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「エル、スカイさん、恥ずかしがっていますよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「は、恥ずかしがってない！」
    - セイウンスカイは突然大声で反論した。
    - %SEX%はエルの腕から急に抜け、手のタオルを奪って頭に被せ、顔ごと埋めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ——記者が来た、先に行くね」
    - 言い終わる前に、%SEX%は風のように控え室を飛び出した。
    - タオルの端だけが、扉枠で一度揺れた。
    - 「見苦しいところを見せてすまない」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「大丈夫です。私たちも先に。スペちゃんとキングは悔しいでしょうから、慰めに行きますね。」
    - エルは手を振り、グラスワンダーについて控え室を出た。
    - %YOU%はその場に立ち、空の扉枠を見て、%SEX%が奪ったあとに残った包装を見て、思わず笑った。
    - （皐月賞を取って、一目散に逃げる。）
    - （——いかにも%SEX%らしい。）
    - その夜、%YOU%は%SEX%が恥ずかしがって記者を避けただけだと思い、二日もすればふらりと訓練場に現れると踏んでいた。
    - だが翌週、%YOU%は気づいた。%SEX%はまる一週間、訓練場に来なかった。


sats_sho_lose:
  title: 皐月賞（敗）
  lines:
    - 通路の光は少し暗い。
    - セイウンスカイは壁に寄り、わずかに俯き、額前の汗で湿った髪が目を隠している。
    - 手には開けていないミネラルウォーターを無意識に捻り、プラスチックが細かい音を立てる。
    - %SEX%は負けた。
    - 惜敗ではない。最後の二百メートルの直線で、スペシャルウィークに後ろから押し潰された。
    - 栗色の影が外から強引に突き破り、末脚は突然噴き出す急流のようで、一瞬ですべてを追い越した。
    - %YOU%は%SEX%のそばへ行き、何も言わなかった。
    - セイウンスカイは顔を横へ向けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「計算、間違えた……」
    - %SEX%が先に口を開き、声は沈んでいる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スペちゃんの末脚、あの風抵抗の下では逆に有利だった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作戦を、間違えた。」
    - %SEX%は一息置いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ……トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボク……思い上がってた？」
    - %YOU%が答える前に、通路の向こうから急な足音が聞こえた。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「スカイ！」
    - エルの声が先に届き、人が飛びつき、セイウンスカイを抱きしめた。
    - グラスワンダーが%SEX%の後ろから、ゆっくり歩いてきた。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「スカイ、知ってる？さっきの最後のコーナー、あの変線、超かっこよかった！」
    - エルは手を離し、一歩下がり、真剣にセイウンスカイの目を見た。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「ボクとグラス、スタンドで飛び上がりそうだったよ！」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「本当に素晴らしかったです。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「あの風速で進路を変えるには、かなりの勇気と判断が要ります。」
    - グラスワンダーは頷き、口調は穏やかで確かなものだった。
    - セイウンスカイは顔を上げず、声は沈んでいる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、負けた……」
    - エルは両手でセイウンスカイの肩を掴んだ。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「勝ち負けは普通だよ。ボクだってこの前の模擬戦、スペちゃんに負けたし！」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「大事なのは、スカイが超——楽しそうに走ってたことだよ？」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「スタンドからでもわかったよ。あの一直線の気迫！」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「それでもだめなら——枯れ木の洞で二声、叫べばいい。」
    - セイウンスカイはようやく顔を上げた。
    - 目尻は少し赤いが、目の奥の空洞はもうなかった。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「今度、一緒にトレーニングしましょう。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「あなたの作戦は強いので、予防を勉強しないと。」
    - %SEX%は%YOU%に軽く会釈し、またエルを見た。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「では、トレーナーさんとの振り返りを邪魔しません。エル、私たちも行きましょう。」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「了解！スカイ、がんばれ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、ありがとう。」
    - セイウンスカイは小さく礼を言った。
    - 「ありがとう。」
    - エルは手を振り、グラスワンダーとともに通路の奥へ消えた。
    -
    - 足音が遠ざかり、通路はまた静かになり、遠くでスタッフの声がたまに聞こえるだけだ。
    - %YOU%はしばらく黙ってから、口を開いた。
    - 「さっき聞いたな」
    - 「思い上がっていたか、と。」
    - %YOU%は一息置いた。
    - 「かもしれない。」
    - 「でも、エルが言ったとおりだ。最後のコーナーの変線は、本当に見事だった。」
    - 「釣りで大風大波に遭ったら、一直線の勇気がないと竿は振れない。」
    - 「お前の言う思い上がりは、その勇気だ。」
    - 「その勇気が、未知の道へ行くこともある。」
    - 「だが今回の負けは、作戦が間違っていたからじゃない。力の差だ。」
    - 「スペちゃんの末脚は、今のお前より少し強い。」
    - 「今回釣れなくても、いい。」
    - %YOU%はそっと%SEX%の頭を撫で、%SEX%の乱れた髪を整えた。
    - %SEX%を見る。%SEX%はなお俯き、耳はしょんぼりと垂れている。
    - 「大物は、一匹だけじゃない。」
    - 「だから——コホン——」
    - 「今週、給料日だぞ～食べたいものあるか？」
    - 「今日はいいものを食わせてやる！西区の高級寿司はどうだ？」
    - セイウンスカイの耳が動き、手のミネラルウォーターを見つめ、数秒黙った。
    - それから%SEX%は顔を上げ、目尻はまだ赤いが、目はもう違う——
    - 散っていたものが消えた。
    - %SEX%は壁際の一点を見つめ、動かない。釣りでウキを見るときの目だ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次は、風抵抗の係数をもっと正確に出す。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それと、エルの言うとおり、走ってて楽しかった——」
    - 最後の数語はだんだん小さくなり、%SEX%は顔を横へ向け、二秒止まった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……あの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さっきの寿司、忘れないで……」


before_toky_yus:
  title: 日本ダービー（前）
  lines:
    - 発走までまだ時間があり、セイウンスカイは走路脇の柵に寄り、指先で小さな黄色い野花を弄んでいる。
    - 横からの陽が、%SEX%の全身を暖かい縁で鍍金する。
    - %SEX%はその花をしばらく見て、突然口を開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、トレーナー～」
    - 「ん？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクの髪留め……何の花か知ってる？」
    - セイウンスカイは突然、意味ありげに%YOU%へ聞いた。
    - %YOU%は%SEX%を見る。髪は柔らかく耳のそばへ垂れ、
    - 小さな雛菊の髪留めが髪に嵌まり、花弁は丸く寄り添っている。
    - 風がたまに吹き、数筋の髪を持ち上げ、%SEX%全体を描き立てたばかりの水彩みたいにする。
    - 「髪、きれいだ。」
    - %YOU%は口をついて出た。
    - セイウンスカイは一瞬、呆けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え！？」
    - 「コホン——」
    - %YOU%は視線を逸らし、喉を鳴らした。
    - 「つまり——」
    - 「髪留め——雛菊だな？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……うん。」
    - %YOU%の突然の褒め言葉に、セイウンスカイは少し戸惑った。
    - 頬はわずかに赤くなり、すぐに立て直す。
    - %SEX%は瞬きし、すぐまた悪戯な笑みを浮かべた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「チリンチリン～正解！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご褒美に一輪あげる～」
    - セイウンスカイは笑って、その野花を%YOU%の前へ掲げた。
    - 手の雛菊を、そっと%YOU%の頭へ留める。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～トレーナー～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「フラワーが言ってたよ。雛菊の花言葉は『清らかな愛』だって～」
    - %SEX%は一歩下がり、首を傾けて%YOU%を眺め、口角の笑みが深くなる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまり——ボクが贈った雛菊を受け取ったトレーナーは、ふんふん～」
    - 突然の挑発に、%YOU%は——
    - acc: 1
      content: 「あ！？スカイ——お前——」
      lines:
        - %YOU%は慌ててその場に立ち、花を摘もうとして手を上げ、摘んだら余計に変だと思った。
        - セイウンスカイは%YOU%の様子を見て、笑みを深めた。
    - %SEX%は前へ寄り、顔が%YOU%に近づき、%YOU%が%SEX%の睫毛の弧まで見える距離になる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、変なこと考えてるんじゃ——」
        - %SEX%の鼻先が、ほとんど%YOU%の鼻先に触れる。
    - それから%SEX%は急に一歩下がり、両手を後ろへ回し、いつもの怠惰な笑みに戻った。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ぷぷ——嘘だよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「雛菊には『幸運』と『吉祥』の意味もあるんだよ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「さっきの顔、はははは——」
        - %SEX%は腰を折って笑い、尻尾が後ろで愉快に揺れる。
    - 深く息を吸い、ゆっくり吐いた。
        - 「……こいつ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「にゃはは——ごめんごめん。でもトレーナーのあの顔、本当に面白かった。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「スカイの反撃計画——大成功！」
    - acc: 2
      content: 「清らかな愛？なら贈った側が、もう少し説明しないと」
      lines:
        - %YOU%は少し俯き、耳のそばの雛菊を%SEX%の視線へ近づけた。
        - セイウンスカイは、%YOU%がこう返すとは思っていなかった。
        - %SEX%は体ごと呆け、瞬きし、今の言葉の意味が追いつかないみたいだ。
        - それから顔が「サッ」と赤くなった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちょ、ちょっと！そういう意味じゃない……」
        - %SEX%は慌てて半歩下がり、視線はどこへでも逸れ、さっきまでの余裕はきれいさっぱり消えた。
        - 「どの意味じゃない？」
        - %YOU%は一歩、すぐ追いついた。
        - 口調には真面目な困惑がある——口角はもう抑えきれないが。
        - 「この清らかな愛は、一緒に分かち合おう。」
        - 「お前の期待は、絶対に裏切らない。」
        - 「だから——セイウンスカイ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - fontSize: 1.5rem
              content: 「うわあ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - fontSize: 1.5rem
              content: 「ストップ！！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - fontSize: 1.5rem
              content: 「ストップストップストップ！！！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ヒ、雛菊には『幸運』の意味もあるんだよ！幸運！」
        - セイウンスカイの体が固まった。
        - 紅潮が頬から首の根まで走る。
        - %SEX%の尻尾は後ろでまっすぐ立ち、尻尾を踏まれた猫のようだ。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「本当に——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、一日中なに考えてるの！！」
        - セイウンスカイの声は極度に慌て、手のミネラルウォーターを顔の前に掲げ、目だけ出して、膨れ面で%YOU%を睨んだ。
        - %YOU%はついに耐えきれず、笑った。
        - 「ははは、わかってる、わかってる。からかっただけだ。」
        - %YOU%はセイウンスカイの頭を撫でた。
        - セイウンスカイの目は「覚えてろ」という訴えでいっぱいだ。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、本当に——ひどいよ～」
        - 「全部お前に教わったぞ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふん——」
        - セイウンスカイは鼻を鳴らし、顔を横へ向けたが、首はまだ赤い。
    -
    - 小さな騒動が終わり、二人は柵に寄り、しばらく静かだった。
    - 遠くで観客席の喧騒が聞こえ、放送がまもなくのレース情報を流している。
    - セイウンスカイは突然手を上げ、遠くを指した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、あれ見て。」
    - %YOU%は%SEX%の指の先を見た——走路内側の空き地に、石碑が立っている。
    - 陽が碑面に当たり、文字がはっきり見える。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いちばん幸運な競走%UMA%だけが勝てると言われる日本ダービー……」
    - %SEX%は手を戻し、襟に留めた雛菊を指先でそっと撫でた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『吉祥』の花を護符にするの、ちょうどいいと思わない？」
    - %SEX%は振り返って%YOU%を見た。陽が%SEX%の目のなかで砕けて光る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから、どっちに転んでも、みんなを驚かせて、楽しませるレースを届けたい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「にゃはは……欲張りすぎ？」
    - %SEX%は手を戻し、後頭部に回し、いつもの怠惰な様子に戻った。
    - 尻尾の先だけが小さく揺れ、%SEX%の胸の小さな期待を漏らしている。
    - 「気合を入れていけ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん！気合を入れていく——」
    - 言い終えると、セイウンスカイは鼻歌を歌いながら走路へ向かった。
    - 歩幅は急がず、十数万人が注目するレースへ行くというより、散歩に行くみたいだ。
    - %YOU%はその場に立ち、%SEX%の遠ざかる背中を見た。
    - 陽は暖かく、風は軽い。
    - 小さな雛菊はいつの間にか%SEX%の勝負服に留まり、%SEX%の歩みに合わせて揺れていた。


toky_yus_win:
  title: 日本ダービー（勝）
  lines:
    - 混合取材区の喧騒は、厚い扉の向こうに隔てられている。
    - 通路は異常に静かで、遠くでたまに足音がするだけだ。
    - セイウンスカイは壁に寄り、胸が激しく上下し、大きく息を吸っている。
    - 汗が頬を伝い、髪は額に湿って貼りついている。
    - %SEX%は勝った。
    - 鼻先ほどの微妙な差で。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふぅ——危なかった危なかった～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スペちゃんの最後の末脚、怖すぎ。あと少しで飲み込まれてた。」
    - セイウンスカイは生還した顔で%YOU%を見た。
    - %SEX%はタオルで後頸を拭き、顔も雑に拭った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、見た？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前半で位置を取り合うとき、キングが興奮しすぎてた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%のピッチ、最適よりまる5%速くて、ボクのリズムまで持ってかれそうだった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
    - 「だから譲った。%SEX%を先に行かせて、%SEX%に逃げさせて、%SEX%を消耗させた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「後半になって、案の定%SEX%のスタミナが足りなくなった。」
    - %SEX%は言いながら、空中で指を動かし、今のレースを振り返る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それからスペちゃん。」
    - %SEX%はタオルを肩に掛け、視線をわずかに上げ、走路の最後の区間を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
    - 「最後の四百メートル、%SEX%の呼吸のリズムが変わった——%SEX%が全力で末脚を出す合図。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから0.5秒早く加速した。ほんの少しの先手を取るため。」
    - %SEX%は一息置き、声を落とした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、まだ足りなかった……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スペちゃんの末脚……強すぎ。最後のあれがなかったら——」
    - %SEX%は言い切らなかったが、%YOU%には%SEX%の指すものがわかった。
    - 最後の十メートル、スペシャルウィークの勢いがほとんど%SEX%を飲み込みかけたが、ゴールが先に来た。
    - acc: 1
      content: 「幸運か？」
    - %YOU%は小さく言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん。」
    - セイウンスカイは頷き、勝負服に留めた雛菊を手に取った。
    - 激しいレースを経て花弁は少し皺だが、なお襟に残っている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「雛菊の『吉祥』～今日は本当に効いたみたい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「へへ～トレーナー、今日のボクがいちばん幸運な競走%UMA%だね～」
    - 得意げなセイウンスカイを見て、%SEX%の頭を撫でた。
    - 「ああ。今日のお前は、いちばん幸運な競走%UMA%だ——」
    - %YOU%は一息置き、続けた。
    - 「お前のおかげで——俺もいちばん幸運なトレーナーだぞ～」
    - セイウンスカイは一瞬呆け、顔を逸らし、頬がわずかに赤い。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……トレーナー、今日変だよ。」
    - %SEX%は小さくつぶやくが、口角の興奮は抑えきれない。
    - %YOU%は一歩前へ出て、真剣に%SEX%の目を見た。
    - 「だが、今日の勝ちは、幸運だけじゃない。」
    - 「お前自身の鋭い勘——キングにリズムを崩されなかった。」
    - 「お前の決意——最後の直線、鼻先まで詰められても諦めなかった。」
    - 「幸運は、準備した者のほうへ寄る。」
    - 「お前は——準備できていた。」
    - セイウンスカイは瞬きし、それから%SEX%は俯いて手の雛菊を二秒見つめ、口角がゆっくり曲がる——
    - いつもの狡い笑みではなく、もっと軽く、柔らかいものだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……トレーナー、今日本当に……どうしてそんな上手いこと言うの……へへ～」
    - セイウンスカイはとろんと笑い、子猫が喉を鳴らすみたいに嬉しそうだ。
    - すぐ%SEX%は顔を上げ、いつもの怠惰な様子に戻り、雛菊を勝負服へ留め直した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、そのとおりだね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから次は——菊花賞。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いちばん強い競走%UMA%だけが取れるって言われてる。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スペちゃんの実力……怖い。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから——幸運だけじゃ足りない。ボク自身の作戦で取る！」
    - 気合の入ったセイウンスカイを見て、%YOU%は口を開いた。
    - 「俺はいつもお前のそばにいる。前へ進むのを助ける——」
    - 「そうだ——雛菊の幸運は、今日だけの使い方じゃないぞ～」
    - セイウンスカイは不思議そうに首を傾げた。
    - 「さあ、願いをしろ。」
    - 「今日のお前は、世界でいちばん幸運な競走%UMA%だ。」
    - 「いちばん幸運な競走%UMA%の願いは、いちばん幸運な競走%UMA%のトレーナーが叶える！」
    - セイウンスカイは目をわずかに見開き、それから細め、口角をゆっくり上げた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当、トレーナー？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～じゃあちゃんと考える……今日はそう簡単に逃がさないよ。」
    - %SEX%は手を後ろに回し、小さく首を振り、尻尾が後ろで愉快に揺れる。
    - しばらくして、%SEX%は指を一本立て、小さな悪魔みたいに命じた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まず——願いは後払い！」
    - acc: 1
      content: 「あ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今じゃなくて……うん、次にボクがもう少し『幸運』が必要だと思ったとき。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いつが『必要』かは……秘密～」
    - セイウンスカイは、不思議そうな%YOU%に瞬きした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーは期待して待ってて～」
    - 言い終えると、%SEX%は笑って振り返り、祝いの人波へ向かった。
    - 数歩歩いて、また何か思い出したように振り返って叫んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも利息は取るよ！たとえば夜の祝勝会！」
    - %SEX%は指を二本立てた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「倍で！」


toky_yus_lose:
  title: 日本ダービー（敗）
  lines:
    - レース後の通路の空気は、少し重い。
    - セイウンスカイは壁に背を預け、わずかに俯き、%YOU%は近づいて%SEX%に水とタオルを渡した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あーあ、失敗しちゃった……あはは——」
    - セイウンスカイはわざと軽く言い、それから俯いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……焦った……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングが飛び出したとき、リズムが予想よりずっと乱れた」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%のリズムに付き合って張り合うべきじゃなかった。%SEX%が明らかに失速したあと、すぐ位置を取り返すのに固執すべきでもなかった。」
    - %SEX%は顔を上げ、表情は乏しいが、目だけが悔しさでいっぱいだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「結果、自分の呼吸が乱れて、ピッチも砕けた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スペちゃんに最高の機会を渡した……%SEX%が逃すわけない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「幸運の女神、今日は……ボクの側にいなかったね……」
    - 「幸運？」
    - %YOU%は%SEX%の目を見て、その言葉には乗らなかった。
    - 「今言ったこと——リズムが乱れた、ピッチが砕けた、張り合うべきじゃなかった——」
    - 「それは、幸運と関係あるか？」
    - %YOU%は一息置き、続けた。
    - 「今日、風向きが突然変わったら、その風は幸運か？」
    - 「スペシャルウィークが最後の一歩で踏み外したら、それは幸運か？」
    - 「スカイ、お前がいちばんわかってるだろ。走路の『幸運』は、空から落ちてくる贈り物じゃない。」
    - 「すべての風向きを計算し、芝の一寸を測り、相手の呼吸のリズムを先読みしたあと——」
    - 「——万分の一の『偶然』に万全の準備をした『必然』の瞬間にだけ、そっとこっちへ落ちてくる。」
    - 「だから幸運は、お前の実力の一部だ。知恵と準備で自分に作った『可能性』だ。」
    - 「だが全部じゃない。言い訳でもない。」
    - セイウンスカイは黙って聞き、タオルを握っていた指がゆっくり緩んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……そのとおり。」
    - %SEX%は体を正し、声もいつもの冷静に戻った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全部『運が足りなかった』に押しつけるのは、自分を騙しすぎだ。」
    - %SEX%はこちらを見た。紺碧の瞳から、さっきの迷いも落ち込みも消えている。
    - 沈殿した、ほとんど冷たい決意だけが残っている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクが落ち着かなかった。作戦の実行が足りず、臨場の判断も誤った。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、菊花賞……あとどれくらい？」
    - 「五か月だ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わかった。」
    - %SEX%は頷き、顔に策士の冷静な弧が浮かんだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次は、京都の走路で……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボク自身の作戦で、雪辱する。」
    - 言い終えると、%SEX%はタオルを肩に掛け、通路の奥へ歩いた。
    - 歩みに迷いも重さもなく、来たときより沈着で、堅い。
    - 雛菊の髪留めが%SEX%の髪で一度光り、通路の薄い灯を映す。
    - 沈黙の誓いみたいに、%SEX%を祝っていた。


before_kiku_sho:
  title: 菊花賞（前）
  lines:
    - fontSize: 1.2rem
      content: レース三日前、トレーニング室内——
    - セイウンスカイは入口に立ち、逆光で表情は見えない。
    - だが%SEX%の立ち姿は、いつよりもまっすぐで、雛菊の髪留めは%SEX%の鬢にきちんと留まっている。
    - セイウンスカイは入り、後ろ手で扉を閉め、外の遠い喧騒を曖昧な背景音にした。
    - %SEX%はすぐ話さず、部屋をゆっくり一周した。
    - 指先が整った装備、作戦盤（スペちゃんを破る図が描いてある）、それから窓際を順に撫でる。
    - 最後に%SEX%は窓の前で止まり、%YOU%に背を向け、外の広い走路を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - acc: 1
      content: 「ん？緊張したか？」
    - %YOU%は熟知した作戦表を整える手を止め、%SEX%を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ううん……ぜんぜん……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「逆に今のボク、すごく『興奮』してる」
    - %SEX%は振り返った。朝の光が%SEX%の後ろから溢れ、%SEX%の輪郭に淡い金色の縁を鍍金する。
    - 顔にいつもの怠惰もなく、わざと張り詰めた感じもなく、極限まで冷静な覚醒だけがある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ——トレーナー。」
    - セイウンスカイはもう一度%YOU%を呼び、%SEX%は一歩前へ出て、まっすぐこちらを見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明日のレース、最初の一メートルから最後の一メートルまで。」
    - %SEX%は一拍置き、青い瞳に青い炎が燃えているみたいだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクの作戦で——場内を支配する！」
    - 突然の豪語は、どんな叫びより重かった。
    - %SEX%は机へ行き、厚いファイルを手に取った——びっしりした手書きのメモと複雑な図表で、紙の端は何度も捲られて少し巻いている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「過去三十年の菊花賞の映像を全部見た。京都の走路の、毎日、毎時間帯の風向き、湿度、光の角度が芝に与える影響を計算した。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
    - 「出そうな相手の、直近三か月の模擬戦のデータを全部分析した。%THEY%のレース後のインタビューの微表情と疲労指標まで。」
    - %YOU%はそのメモを捲り、ある頁で指が止まった——
    - 手描きの走路図で、坂の角度、芝の状態、時間帯ごとの陽の影の境界まで記してある。
    - 傍らには数字と矢印がびっしり。
    - 「これ……どれくらいかかった？」
    - セイウンスカイは首を傾け、計算しているみたいだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん——ダービーのあとから。」
    - 「五か月か？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だいたい。」
    - 「じゃあこの五か月の『サボり』は——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「にゃはは～」
    - %SEX%は笑い、その進路図を%YOU%の前へさらに押した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、知ってる？ぼんやり座ってるときのほうが、いろいろわかることもあるんだよ。」
    - 「たとえば？」
    - %SEX%は笑い、その進路図を%YOU%の前へさらに押した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たとえば——これ。」
    - セイウンスカイは作戦盤の前へ行き、計画表を盤面のスペシャルウィークの上へ叩きつけた。
    - %SEX%は振り返り、%YOU%が見たことのない、狂と冷静を帯びた笑みを浮かべた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「計画がある。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「菊花賞史上……いちばん『狂った』計画かも」
    - %SEX%の今の鋭い自信に燃える目を見て、%YOU%の胸に疑いはなく、決意に点火された共鳴と、無条件の信頼だけがあった。
    - %YOU%の視線は、恐ろしく詳しいデータの上を走った。
    - 「俺たちが用意した以外に、お前自身の準備は……もっと厚い。」
    - 「つまり……俺たちも騙されてた。あの『サボり』の時間は、全部ここに使ってたんだな。」
    - セイウンスカイの口角がわずかに上がる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「準備はとっくにできてる。今度は、疑う声も、『運がよかっただけ』も、『逃げは長距離で勝てない』も、『怠惰じゃ大成しない』も、全部——」
    - %SEX%の目が、刀のように鋭くなった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——全部、黙らせる。」
    - 「計画のリスク係数は、計算したか？」
    - %YOU%は最後の、確認すべきただ一つの問いを出した。
    - セイウンスカイは小さく笑い、その笑いには掌握感があった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「リスク？トレーナー、史書に残る『大物』を釣ると決めたとき、リスクを議論するのは、嵐の日に糸が陽で褪せるか心配するようなものだよ。」
    - %SEX%は最終の進路図を%YOU%の前へ押した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「考えすぎないで、この大船に乗れ。舵はトレーナーに任せる。」
    - セイウンスカイは一秒止まり、声を少し落とし、珍しい、ほとんど依存に近い真剣さがあった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……トレーナーの判断を信じてる。ずっとボクの『我が儘』を信じてくれたみたいに。」
    - %YOU%は図の、常識を全部破る過激な進路を見て、疑いはなかった。
    - 「わかった」
    - %YOU%はその図をしまい、%SEX%に頷き、口調は静かだが堅い。
    - 「お前の『狂気』は、一緒に実現する。支援も、対応策も、全部お前のリズムに合わせる。」
    - 「お前は前方だけ見て、描いたこの『青雲の図』どおりに走れ。」
    - 口角の弧が広がり、その笑みはすべてを計算した策士のようでも、悪戯が成功しそうな子供のようでもある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ——」
    -
    - fontSize: 1.2rem
      content: レース当日、京都競馬場、レース前控え室——
    - %SEX%が扉を開けると、外の走路の音、光、熱風がどっと流れ込み、%SEX%の青い髪を吹き上げた。
    - %SEX%は逆光で、横顔の輪郭が沸騰する背景のなかで異常に鮮明だ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「釣るなら、大物を狙うだけじゃなくて——」
    - %SEX%は一歩踏み出し、声は喧騒をはっきり貫いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「綺麗に、見事に、わからなくても口が開いたまま閉じられなくなるくらい、釣る！」
    - 光の海に完全に溶ける前、%SEX%は振り返り、最後の一句を残した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうでないと……面白くないでしょ。」
    - 扉がゆっくり閉まる。
    - 祝福は多くなかった。%YOU%にはわかっていたから。
    - （今日の%SEX%は……無敵だ！）


kiku_sho_win:
  title: 菊花賞（勝）
  lines:
    - セイウンスカイが先にゴールしたとき、続いて山のような歓声が爆発した。
    - 実況の力を振り絞った叫びが、拡声器を通して場内に響く。
    - content:
        - fontWeight: bold
          content: 実況
        - fontSize: 1.2rem
          content: 「セイウンスカイ！セイウンスカイがゴール！信じられない大逃げ！%SEX%は成功した！セイウンスカイ！%SEX%の名は、今日の京都競馬場と同じ、万里に雲のない青空だ！」
    -
    - 場内の歓声のなか、セイウンスカイは入り、後ろ手で扉を閉めた。
    - 厚い扉が、外の狂気に近い沸騰を一瞬で隔てる。
    - %YOU%は何も言わず、静かに%SEX%を見て、勝利の歓声を待った。
    - 迎えたのは、セイウンスカイの興奮した叫びではなかった。
    - %SEX%は冷たい扉板に背を預け、二秒立ち、この突然の静寂が本物か確かめるみたいだった。
    - それから長く、ゆっくり、レース全体、あるいはもっと長い時間の張りを、一息で吐き出した。
    - %SEX%の勝負服はほとんど汗に濡れ、体に貼りつき、激しい運動のあとのまだ収まらない起伏を描く。
    - 髪は額と首に湿って貼り、頬は興奮と酸欠で鮮やかに赤い。
    - 胸はなお激しく上下し、一息ごとに重く、満ち足り、山を動かした鞴のようだ。
    - セイウンスカイは顔を上げて%YOU%を見た。
    - まず目が合い、それから口角が抑えきれず上がる。
    - その笑みは清水に落ちた墨のように広がり、小さな弧から顔全体へ、最後は曇りのない、子供っぽい得意げな輝く笑みになり、控え室の薄闇を追い払いそうだった。
    - %SEX%は息を吸い、声は興奮と疲労で少し嗄れているが、異常に鮮明で力があり、一字ごとに勝利の重さがある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「作戦——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - fontSize: 1.2rem
          content: 「——大！成！功！」
    - 言い終わるか終わらないかで、%SEX%は歓びに撃ち出された青い砲弾みたいに胸へ飛び、両腕で首をきつく抱き、汗の頬と熱い息を頸窩へ埋めた。
    - だがその爆発は一瞬だけで、狂喜の力はすぐ褪せ、%SEX%は狩りに成功して力を使い切った子猫みたいに、ふにゃりと掛かり、微かな震えと満ち足りた溜息だけが残った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……見た！？」
    - %SEX%の声は服に埋もれているが、中の躍りは隠せない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最初の千メートル、超速で飛び出したとき、後ろの顔……特にスペシャルウィーク！%SEX%の目、こんなに丸かった！」
    - %SEX%は少し離れ、自分の顔で大げさな丸い目を作り、自分から「プッ」と笑った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%はボクが狂ったと思った。三千メートルの出だしでこんな走り方。でも誰もボクを放さなかった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクの『大逃げ』の評判が、怖すぎたからね？放したら二度と追いつけないって、%THEY%は恐れてた。」
    - セイウンスカイは目を細め、狡い、策士の得意を見せた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次の千メートル、わざと速度を『落とした』。」
    - %SEX%の指が、はっきり下へ向かう放物線を描く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すぐ崩れて、いつでも置いていかれそうなところまで。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「後ろ、こっそり喜んでたでしょ？『ほら、%SEX%やっぱりだめ、装いきれない』って。それから死の坂の前に、どの姿勢で、どちらから抜くのがいちばん楽か、にこにこ計算してた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「死の坂……ふん。」
    - %SEX%は小さく鼻を鳴らし、小さな傲慢がある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あそこの芝の湿度、向かい風の角度、歴代の蹄鉄の跡まで調べた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクの最適加速点は、みんなが思う坂の頂でも中腹でもなくて、主スタンドの影に覆われ、地面がいちばん踏み固められ、日照の影響がいちばん小さい——十五メートル。」
    - セイウンスカイは体をわずかに前へ傾け、声を落とした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あそこで加速し始めたとき、後ろは絶対ぼんやりしてた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「頭のなかでは『この狂人、坂の前で最後の力を使い切る？罠だ！先に力を出させようとしてる！』って必死に考えてたはず」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その一瞬の迷い——パッ！機会、終わり。」
    - %SEX%は急に体を正し、乾いた指鳴らしをした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スペちゃんの最後の追い込みは猛かった。本当に猛かった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%の蹄鉄が地面を削る音、全力の音が、すぐ後ろで聞こえた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
    - 「でも%SEX%のリズムは、もうボクに乱されてた。最初の理不尽なスパートについてくるために、%SEX%の消耗は%SEX%の予想よりずっと大きかった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最後の坂で、%SEX%はボクが掻き回した流れのなかで、もう掛かっていた魚だった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最後の直線、%SEX%の末脚がどれだけ強くても、何馬身も開いたボクには届かないよ～」
    - %SEX%が眉を躍らせ、情熱を迸らせて、芸術品みたいな大計を語り終えたあと、%SEX%を支えていた興奮はようやく出口を見つけた。
    - %SEX%はまた緩み、胸へ崩れ、全身の重さを安心して預けた。
    - %YOU%は%SEX%をしっかり受け止め、%SEX%の汗で湿った鬢をそっと整えた。
    - 「疲れただろう。今日は遠慮なくサボれ。天地が果てるまで寝てもいい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……」
    - セイウンスカイは怠惰な猫みたいに、鼻声で小さく、曖昧に応えた。それから%SEX%は顔をさらに深く埋め、動かない。
    - 控え室は完全に静かになり、%SEX%のだんだん長く平らになる呼吸と、窓の外からかすかに続く勝利の歓声だけが、遠い潮のようだ。
    - かなり経って、時間がここで遅くなったみたいに。
    - %SEX%がまた口を開き、声はとても小さい。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……勝った。」
    - %SEX%は顔を上げ、額前の髪はまだ湿り、青い瞳は瞬きもせずこちらを見て、控え室の天井灯の光と、こちらの影を映している。
    - そこにはさっき作戦を振り返っていたときの鋭さも狡さもなく、澄んだ喜悦と、少し……信じられない恍惚だけがある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - 「ここにいる……」
    - %YOU%は優しく応えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「できた。」
    - これは問いでも、確認の求めでもない。
    - 鮮明で、静かで、千鈞の重さを含む宣告だ。%SEX%は自分に、そして%YOU%に、この事実を告げた。
    - 「ああ、できた。」
    - 「菊花賞の多年の記録まで破った。走り方は誰も見向きしなかった大逃げ。史上初めて菊花賞を取った逃げ——それがお前だ。」
    - 「窓の外の歓声は、勝利だけじゃない。史書に残る見事な戦略への献辞だ。疑いは、今日から全部消えた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「へへ～」
    - 子供みたいに、セイウンスカイはとぼけた笑いを出した。それから%SEX%はまた胸へ顔を寄せ、擦り、いちばん気持ちいい位置を見つけた。
    - 窓の外、勝者の歓声はなお止まらず、この晴空への礼讃のようだ。
    - この静かな小部屋で、セイウンスカイは静かに寄り添い、%SEX%の顔の笑みは綺麗で明るく、計算も鋭さも褪せ、純粋な喜びと、疲れのあとの安寧だけが残っている。
    - 今日の京都競馬場の空のように、万里に雲のない広い晴空……


# 三冠獲得 菊花賞ターン終了後の次ターン開始 全能力+5
ws_triple_crown:
  title: 祝勝会！！！
  lines:
    - 菊花賞の翌日の昼、祝勝会はトレセンの一室で開かれた。
    - 長い机を繋いだ大卓は料理で埋まり、ニシノフラワーはエプロンを着けて出入りし、運んでくるものは一つごとに派手になる。
    - 丸ごとの炭火鯛、身が弓なりに反り、表面は綺麗な焦げ色で、大根おろしとレモンが添えてある。蟹クリームコロッケは小山に積まれ、黄金の殻から油がじゅわっと滲む。
    - 大きな蛤の澄まし汁は、蓋を開けると白い湯気が旨味を乗せて立ち、汁面には薄い柚皮。鮭の刺身は厚みが揃い、皿のなかで光っている。
    - 真ん中には大きなキャロットケーキがあり、トッピングは豪華の極みだ。
    - スペシャルウィークとキングヘイローは入室から机へうつ伏せ、頬を卓面に貼り付け、両腕はだらりと垂れ、尻尾が床に二本の影を引いている。
    - グラスワンダーが隣で、小さな声で諭している。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「スペちゃん！キング！今日は友だちの祝いの日ですよ。気を出してください。」
    - %URARA%も跳ねて慰めに来た。
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - 「スペちゃん！キング！落ち込まないで！ウララ、まだ勝ったことないよ！それでも元気だよ！」
    - グラスワンダーは%URARA%の肩に手を置き、突っ込む。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「ウララ、それは慰めになっていません。」
    - しばらくしてキングヘイローが突然起き上がり、天井へ向かって叫んだ。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「次！次は絶対勝つ！！！」
    - スペシャルウィークも顔を上げ、両手で自分の頬を叩いた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「そうだ！次は絶対勝つ！！！」
    - セイウンスカイは扉枠に寄り、この一幕を見て、尻尾を後ろでゆっくり一度揺らした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （この二人～）
    - ニシノフラワーが最後の一皿を出したとき、セイウンスカイは寄って、鼻を鳴らした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うわあ——フラワー、今度はトレーナーの来月の給料まで使った？豪華すぎ！」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「だって、いつもと違いますから。えへへ。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「今のスカイさんは、三冠の競走%UMA%なんですよ！」
    - ニシノフラワーは優しく言い、祝いの帽子を出してセイウンスカイの頭へ載せた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「おめでとう！」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「おめでとう！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「おめでとう！」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「おめでとう！」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「おめでとう！」
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - 「おめでとう！」
    - acc: 1
      content: 「おめでとう！スカイ！」
    - 祝いの声が四方から押し寄せ、セイウンスカイは頭を掻き、頬がわずかに赤い。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「へへ、覚えててくれる人がいるなんて——」
    - エルが後ろからセイウンスカイの背を叩き、%SEX%が前へ傾いた。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「装うな！この栄誉と祝福をちゃんと受け取れ。お前がもらうべきものだ！」
    - それから%SEX%は視線を転じ、こちらを見て、声を落とし、悪い笑みを浮かべた。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「トレーナーの口角、一晩中上がってるよ？」
    - %YOU%は飲み物の杯を止め、軽く咳をし、手で口角を触った——たしかに抑えきれず、ずっと上がっている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、慎みが足りないよ？」
    - 「お前も同じだぞ。今夜、尻尾がずっと揺れてる。」
    - %SEX%は一瞬呆け、耳がサッと立った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「は？なに言って——？」
    - %YOU%はそれ以上乗らず、杯を上げて空中で%SEX%に敬い、セイウンスカイは目を細め、それからプッと笑った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はいはい——料理が冷めるよ、みんな！開け開け！」
    - その後の数時間、杯と皿の触れ合う音は止まらず、エルがどこからか発泡酒を出し、ウララは一杯で支離滅裂になり、グラスワンダーは笑いながら%SEX%の口角を拭いた。
    - ニシノフラワーは最初からほとんど食べず、ずっと笑ってみんなを世話していた。
    - 賑やかな宴が終わると、%YOU%とセイウンスカイが部屋の片付けを引き受けた。
    - 片付けが終わったのは夕方で、夕陽が部屋を淡いオレンジにし、セイウンスカイは椅子の背に寄り、伸びをした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふああ——やっと終わった！トレーナー——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——じゃなくて、三冠トレーナー——」
    - セイウンスカイは意地悪く言い直した。
    - 「ん？」
    - %YOU%は厨房から顔を出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんなに平気で受け取るんだ。厚顔だね～」
    - セイウンスカイはにやにやと揶揄した。
    - 「へへ～スカイの光に預かってるだけだ。お前は俺の誇りだ！」
    - 「そうだ！言え、何が欲しい！」
    - %SEX%は瞬きし、その言葉を待っていたみたいに、%SEX%は人差し指を%YOU%の前で揺らし、口角を少しずつ上げた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「へへ——そのときは教える～」

# 【祝勝会！！！】後、ターン終了時
we_old_money:
  title: Old Memory
  lines:
    - 祝勝会が終わったその夜。
    - %YOU%は洗い物を済ませ、寝間着に着替え、目覚ましをセットし、床に就いた。
    - チリン——チリン——
    - 朦朧のなか、%YOU%は急な呼び鈴が聞こえた気がした。
    - チリン——チリン——チリン——
    - （待って……本当に誰かが鳴らしてる！）
    - 「誰だ、こんな夜更けに……」
    - %YOU%は起き上がり、髪を掻き、携帯を見た——午前二時。
    - この時間に鳴らすのは、酔っ払いの人違いだろうか。
    - チリンチリンチリンチリン——
    - 「……今行く。」
    - %YOU%は欠伸をしながら扉へ行き、開けた……
    - 外に、セイウンスカイが立っていた。
    - ゆったりしたカーキのベストに、濃い灰色の作業ショートパンツ、頭には広い鍔の釣り帽子。
    - 背には巨大な荷物が二つ。縦のほうは竿袋の形。横のほうは膨らんで、雑多な小道具だろう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！おはよう！行くよ！出発！！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あは～スカイだよ……夜釣りするなら早く言ってよ……こんな夜更けに……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「夜釣りじゃないよ！出発！目標は——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「オーストラリア——リザード島！目標——ブラックマーリン！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今出発すれば、向こうはちょうど朝！」
    - %YOU%は口を開き、頭の回転が明らかに追いついていない。
    - 「……寝ぼけたか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「二週間前の同じ時間！」
    - セイウンスカイは荷物を横へ放り、片手を腰に、片手で%YOU%を試す。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「約束したでしょ！逃げないでよ！」
    - %SEX%は言い終えると腰を屈めて荷物を持ち、一歩前へ出て、そのまま%YOU%を外へ引き出すつもりだ。
    - 「待て待て待て——」
    - %YOU%は急いで扉枠を押さえた。
    - 「急すぎる！休暇届はどうする？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「二人分、もう出してある！」
    - 「どうやって俺の分まで出したかは置いて、攻略は？向こうで釣りをするのに許可はいらないのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクについてきて、攻略を心配する？」
    - （ついていくから心配なんだ……）
    - 「資金は？二人の出費はどうする？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「安心……ボクのおごり！トレーナーは大人しく養われてて～」
    - （その言い方、妙に落ち着かない……）
    - 「……せめて服は用意させてくれ。」
    - セイウンスカイの動きが止まり、上下で%YOU%を値踏みし、%YOU%の皺だらけの寝間着を眺めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うーん…………」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たしかに、寝間着はまずい。」
    - %SEX%はポケットからタイマーを出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行って！競走馬！制限時間五分！」
    - 「はいはい～伝説の調教師セイウンスカイさん～」
    - %YOU%はよくわからないまま荷物をまとめ、空港へ引きずられていった……


kiku_sho_lose:
  title: 菊花賞（敗）
  lines:
    - 菊花賞当日、京都競馬場。
    - セイウンスカイは第%RANK%着でゴールした。
    - %YOU%が人波を割って%SEX%を見つけたとき、%SEX%は走路の端に立ち、俯き、両手を膝に支えていた。
    - 周囲は行き交い、歓呼する者、こぼす者、記者に囲まれる者がいる。
    - %YOU%が%SEX%のそばへ行き、口を開く前に、%SEX%が先に顔を上げた。
    - 顔には笑みがある。
    - 口角は上がっているが、目に光がない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「第%RANK%着だよ。」
    - if: Number(d.RANK) <= 5
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「悪くないでしょ？」
    - %SEX%の声は少し嗄れ、手を上げて、%SEX%を慰めようとする%YOU%を遮った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……話さないで……なににも……触れないで……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行こう。」
    - %SEX%は体を正し、草屑を払い、動きはとても遅い。
    - 控え室は静かで、%SEX%は荷物を整え、%YOU%も整え、誰も話さない。
    - %YOU%が慰めようとするたびに、%SEX%は大きな声で止めた。
    - %SEX%はとてもゆっくり整え、一つひとつ畳み、置く。大事なことをしているみたいだ。
    - それから競馬場を出て、帰りの車に乗った。
    - 道中、%SEX%は窓に寄り、流れる景色を見ていた。
    - 一言も、言わなかった。


# BE 菊花賞敗北または不出走の翌週ターン終了 以後出走禁止・調教禁止（強制終了はしないが、以後セイウンスカイは調教も出走もできない）
soft_be:
  title: 永遠の自由
  lines:
    - 菊花賞のあと、セイウンスカイは一言も発しなかった……
    -
    - 翌日、訓練場に%SEX%の影はない。
    - %YOU%は午前いっぱい待ったが、%SEX%は来なかった。
    - %YOU%には、%SEX%がどこへ行くかわかっていた。
    - 釣り台は川辺にあり、訓練場から遠くない。%YOU%と%SEX%が初めて会った場所だ。
    - %YOU%は川沿いに歩き、遠くからその見慣れた影が見えた。
    - %SEX%は釣り台に座り、竿を握り、両脚を水面の上で揺らしている。
    - 足音を聞いて、%SEX%は振り返った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やあ、トレーナー。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしてここがわかったの？」
    - %SEX%は笑って%YOU%に手を振り、口調は怠惰で、いつものとまったく同じだ。
    - %YOU%は釣り台へ上がり、%SEX%の横に座った。
    - 「お前が言うか？」
    - %SEX%はへへと二度笑い、また水面を見た。
    - 「魚はいるか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いない。今日の魚は賢いよ。掛からない。」
    - 「じゃあ何を釣ってる？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「待ってるだけ」
    - %YOU%たちは、そうして座っていた。
    - 陽が水面を照らし、細かい光を返す。たまに風が吹き、岸の葦がさらさら鳴る。
    - 長い時間が経った。
    - 「スカイ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？」
    - 「その、気分は戻ったか？」
    - %SEX%は答えなかった。
    - 「菊花賞は、もう過ぎた。」
    - %SEX%は、やはり答えなかった。
    - %YOU%は%SEX%の横顔を見た。
    - %SEX%は水面を見つめ、顔はとても静かだ。
    - 「スカイ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - %SEX%が口を開き、声はとても小さい。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行きたくない。」
    - 「まだ、気分が悪いのか？」
    - 「じゃあ一か月休め。連れて旅に出る。」
    - 「モルディブでもいい！釣りにいちばんいい。マレーシアの猫の街でも！それから——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！」
    - セイウンスカイは%YOU%を遮った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーが旅に行きたいって言ってくれて、すごく嬉しい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもトレーニングは……もういいよ。」
    - 「どうしてだ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行きたくないから。」
    - %YOU%はその言葉を噛み、飲み込んだ。
    - 「じゃあ、これからのレースは？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走らない。」
    - %SEX%は%YOU%を遮り、口調はきっぱりしていた。
    - 「スカイ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走らない。」
    - %SEX%はもう一度言った。
    - 今度%SEX%は笑わず、%YOU%も見ず、水面のウキだけを見ていた。
    - %YOU%は%SEX%を、長く見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「戻って。ボクはもう少しここにいる。」
    - %YOU%は動かなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当だよ、戻って。ボクはなくならない。」
    - %YOU%は立ち上がり、%SEX%を見た。
    - %SEX%は%YOU%に手を振り、顔には笑みがある。
    - 「また明日な。」
    - %YOU%は振り返って歩き、数歩出て、一度振り返った。
    - %SEX%は釣り台に座り、竿を握り、両脚を揺らし、いつものとまったく同じだ。
    -
    - 三日目、%SEX%はやはり訓練場に来なかった。
    - 四日目も、来なかった。
    - 五日目、%YOU%はまた川辺へ行った。
    - %SEX%は、まだそこにいた。
    - %YOU%を見て、%SEX%はまたいつもの怠惰な笑みを浮かべた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、また来た？そんなにスカイが好きなんだ～」
    - %YOU%は歩み寄り、%SEX%の横に座った。
    - 「魚は？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「口がない。」
    - 「どれくらい釣ってる？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わからない。」
    - %YOU%は%SEX%と静かに川辺に座った。
    - 夕方になるまで。
    - 「本当に、トレーニングしないつもりか？」
    - %SEX%は答えなかった。
    - 「スカイ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー。」
    - %SEX%は%YOU%を遮り、竿を横へ置き、立ち上がった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「寝に戻りたい。」
    - %SEX%は去った。
    - %YOU%は釣り台に座り、%SEX%の背中が遠ざかるのを見た。
    - 風が河面を撫で、ウキが水の上で小さく揺れる。
    - %YOU%は一人で、長い時間座っていた。


# クラシック級12月1週、ターン開始
ws_47_48:
  title: 驚きのないレース
  lines:
    - fontSize: 1.2rem
      content: 有馬記念一か月前——
    - 「スカイ——出走%UMA%のポスターが出た——」
    - セイウンスカイは窓際のソファに丸まり、開いた『釣り科学』が顔に被さり、均一な呼吸をしている。
    - 声を聞いて冊子が滑り、まだ眠気の残る青い瞳が現れた。
    - %YOU%とセイウンスカイは並んで座り、一頁ずつ捲る。
    - 女帝——エアグルーヴ。不死鳥——グラスワンダー。世代の王者——キングヘイロー。悠々長距離の湯けむり——メジロブライト …………
    - 「今度の有馬は、本当に星が揃ってるな。」
    - %YOU%とセイウンスカイは見ながら感嘆した。
    - それから、%SEX%の頁を捲った。
    - ポスターの%SEX%は目が鋭く、口角にはいつもの、余裕のある浅い笑みがある。
    - 上には「謀略の星」の大きな字、下には詳しい注釈。「走路を将棋盤にする戦術の芸術家、黄金世代の知恵の光」。
    - セイウンスカイの視線は、その注釈に数秒留まった。
    -
    - 菊花賞の大勝以来、セイウンスカイの名は一気に広がり、エルコンドルパサー、スペシャルウィーク、グラスワンダー、キングヘイローと並んで黄金世代と呼ばれるようになった。
    - ファンの数も自然に増え、手紙が雪のように学園へ飛び、%YOU%の机はよく各種の手紙で埋まる。
    - さまざまなファンが好意と見舞いを伝える。
    - そして、各方面の「評論家」と「古参の馬好き」からの戦術提案と期待分析が、ますます増える。
    - 毎日、調教部の電話には数えきれない取材予約が入り、質問は何度も同じだ。
    - 「セイウンスカイ選手、次のレースではどんな驚きの戦術を用意していますか」
    - 「あなたから見て、他の相手のデータはすでに完全に解析済みですか？」
    - 「あなたにとって、少し策を弄すれば勝利は造作もないことですか？」
    - …………
    - %YOU%の圧力も、セイウンスカイの名声とともに日ごとに増す。
    - 机はファンレターと、いわゆる「専門家の助言」で埋まる。
    - %YOU%は毎日情報を選り分け、外界の注目とトレーニングのリズムを釣り合わせ、
    - 無数の声のなかで、%YOU%たちの最初の方向をしっかり錨にする必要がある。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ……」
    - %YOU%は時折、セイウンスカイがぼやくのを聞く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最近、ファンの期待がどんどん高くなってる……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「高くて……次のレースが何か『圧巻』の勝ち方じゃないと、たくさん失望させるみたい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「しかもみんなボクの作戦を当てようとしてる。問題を解くみたいに。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どう走っても、誰かが飛び出して『やっぱりそうだ！』って言う。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『場内を震撼させる』驚きが、もうない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんなレース、つまらない……」


before_arim_kin_c:
  title: 有馬記念（前）
  lines:
    - fontSize: 1.2rem
      content: 出走当日、選手準備室——
    - 陽がブラインドを通り、木の床に明暗の縞を切る。
    - セイウンスカイはすでに勝負服に着替え、鏡の前で頭の雛菊の髪留めを整えている。動きは一糸乱れず、菊花賞の日より丁寧だ。
    - テレビでは朝の事前番組が、かなりの音量で流れている。
    - 「……そして最大の焦点は、なんといっても『謀略の星』セイウンスカイ！菊花賞で歴史的な大逃げを演じたあと、%SEX%はエアグルーヴ女帝の経験、グラスワンダーの精密な計算、キングヘイロー王者帰還の雪辱をどう迎えるのか？%SEX%はすでに胸中成竹だと、信じるに足ります！」
    - 司会がゲストへ向く。「今日、%SEX%はどんな戦術を取ると思いますか？」
    - ゲストは笑って両手を開く。「手品師に次の手品を聞くようなものですが——セイウンスカイなら、綿密に計算された手品でしょうから、私は%SEX%が——」
    - ピー……
    - セイウンスカイはテレビを消した。
    - 室内は一瞬静かになり、空調の低い唸りだけが残る。
    - %SEX%は窓際へ行き、%SEX%のために振られる旗とプラカードを見ていた。
    - 「青ちゃんで知恵を輝かせ！」と書いたもの、抽象的な将棋盤と駒を描いたもの、「次の奇跡はなに？待ってるよ！」と書いたものもある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんな待ってる……はぁ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクの『謀略』を、ボクの『計算』を、また『当然』の見事な勝利を。」
    - 「奴らのことは気にするな。お前でいろ。」
    - セイウンスカイは小さく溜息をつき、%YOU%へ言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうは言うけど、はぁ……もういい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行ってくる、トレーナー……」
    - 廊下の壁で、%SEX%の巨大ポスターが灯の下でひときわ目立つ。「謀略の星」の四字が光っている。
    - %SEX%は通り過ぎても、気にしなかった。


# 特性【見えない枷】獲得
arim_kin_win_c:
  title: 有馬記念（勝）
  lines:
    - セイウンスカイが先にゴールし、疑う余地のない差で勝ったとき、中山競馬場は沸騰する熱狂に沈んだ。
    - 実況が吼える。
    - content:
        - fontWeight: bold
          content: 実況
        - 「まったくの一方的！謀略の星の完勝！スタートの大逃げから終盤の二次加速まで、すべて掌握のうち！%SEX%は再び、『知恵の支配力』とは何かを見せた！」
    - セイウンスカイはゆっくり戻り、完璧な、勝者の笑みを浮かべ、周囲のスタンドへ手を振った。
    - ファンの悲鳴は屋根を飛ばしそうで、無数のカメラが%SEX%を狙い、「謀略の星」の余裕ある凱旋の一コマを捉える。
    -
    - fontSize: 1.2rem
      content: 控え室内——
    - 扉が閉まった瞬間、外界の喧騒は隔てられた。
    - セイウンスカイはソファへうつ伏せ、顔の笑みは潮が引くようにすぐ消えた。
    - 数分うつ伏せたあと、%SEX%は立ち上がり、興奮して跳ねることも、子供っぽい自慢もない。
    - %SEX%は椅子のそばへ座っただけだ。渡した水を受け、小さく飲む。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「勝ったね。」
    - 声は天気を述べるくらい平坦だ。
    - 「綺麗な勝ちだった。リズムの制御は予想以上に精密だった。」
    - セイウンスカイは口角を引き、その笑みには力がない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でしょ。出だしの加速のタイミングから、中盤で差を保つ心理的な圧、最後の直線の二次加速の節まで……全部、計画どおり。」
    - %SEX%は顔を上げ、目に勝利の光彩はなく、底の見えない静けさ、いや……空洞さえある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……さっきゴールしたとき……胸に、なんにもなかった。」
    - acc: 1
      content: 「勝っても嬉しくないのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うーん——そうでもないよ。勝てば嬉しい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも——」
    - セイウンスカイは一息置いた。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「菊花賞のときの『できた！』って興奮も、前みたいに計算が当たったときの密かな喜びもない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感じない……なんにも……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まるで……手順の多い数学の問題を解いて、最後の数字を書いたとき、『ああ、解けた』と思うだけ。」
    - セイウンスカイは椅背に寄り、目を閉じた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「外はあんなに歓声なのに、胸のなかは静か。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「静かすぎて……ちょっと怖い。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - ……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボク……どこかおかしい？」
    - %YOU%は%SEX%を見て、一息置いた。
    - 「お前の静けさは、消耗が大きすぎただけかもしれない。だが今言った——胸になんにもない——これは、どう返せばいいかわからない。」
    - 「まず休め。ただ……話したくなったら、聞く。」
    - %YOU%はセイウンスカイを慰め、%SEX%にタオルを渡した。
    - セイウンスカイはタオルを受け、顔に被せ、小さく「ん」と言った。
    - 「俺は先に記者とファンを相手にする。ここでゆっくりしろ。祝勝会は……お前がいいと思ったときでいい。」
    - %SEX%は頷き、体ごと椅子へ倒れ、タオルの下の顔は見えない。
    - %YOU%はそっと扉を閉め、外界の喧騒を%SEX%からしばらく隔てた。
    -
    - 一人きりの控え室——
    - タオルの下の呼吸が、だんだん平らになる。
    - 長い時間が経って、セイウンスカイはタオルを下ろし、少し虚ろな顔を見せ、ぼんやり天井を見た。
    - 部屋は静かで、遠くで%SEX%のための歓声がかすかに聞こえ、潮のように扉を叩く。
    - セイウンスカイの視線は焦点がなく、この小さな部屋で、思考はどんどん遠くへ流れた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （勝った……また勝った……いちばん『セイウンスカイ』なやり方で。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （みんな……嬉しいよね？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （ボクも嬉しいはずだよね？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （なのにどうして……）
    - セイウンスカイの頭に、遠い画面が閃いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （子供のときだ……最近、しばらく実家に帰ってないな……）
    -
    - 夏、実家の縁側。おじいさんが団扇を揺らし、%SEX%は涼みの筵に横になり、空のゆっくりした雲を見ている。
    - セイウンスカイはおじいさんの脚を枕にし、おじいさんは優しく%SEX%の頭を撫でている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おじいさん——雲さんはあんなに高く飛んでる。行きたいところへ行けるの？」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「はは～もちろん。スカイもいつか、雲さんみたいに高く飛べるよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え！？本当？」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「もちろん～スカイ、自分の名前の意味、知ってるかい？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うーん……『青い雲』？」
    - おじいさんは笑った。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「はは、もっと深い意味もあるんだよ。」
    - セイウンスカイは不思議そうに首を傾げた。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「『青雲の志』だよ。」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「青雲みたいに志を高く持ち、上へ上へ、いつか事業を成し、すごい人になってほしい、という意味だ。」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「雲さんみたいに高く飛べ～」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「スカイには、青雲の志があるかい～」
    - …………
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （おじいさん、今なにしてるんだろう……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （あのとき、なんて答えたっけ。あまり覚えてない……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （でも子供のころ、家の人は志の話をあまりしなかった。お父さんもお母さんも『スカイは健康で、楽しければいい』ってばかり言ってた）
    - セイウンスカイは扉の外の、「謀略の星」のための山のような期待の声を聞き、遠い「青雲の志」の説明が、突然はっきり%SEX%の頭へぶつかってきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「青雲の志……遠大な抱負……」
    - セイウンスカイはつぶやいた。
    - %SEX%は突然体を正し、目が迷いから冷たい清明へ凝っていく。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ファンはボクを好きで、期待して、歓声をくれる。記者は次の『謀略』を聞く。ボクは『黄金世代』で、『謀略の星』。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おじいさんがこの名前をくれたのも、きっと……この期待と名声に見合う人になってほしいからでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だめだ！こんなに気ままじゃいられない。こんな名前を授かり、こんな期待を背負って……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よし……！明日から本気出す！サボらない。もっと努力して、もっと遠大な目標を……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『セイウン』の名に見合わないと！」
    - %SEX%は暗く拳を握り、指の節が白い。
    - だがその気力が体のなかで突っ張り、かえって%SEX%をまっすぐ立たせる——まっすぐすぎて、少し硬い。
    -
    - 夜の祝勝会で、%YOU%は目の堅いセイウンスカイを見て、少し見知らぬ気がした。
    - %SEX%にはわかっている。難しいし、とても「セイウンスカイ」らしくない。
    - だが今、勝利から来た空虚と、「期待を裏切る」かすかな不安が、%SEX%に思わせる——あるいは、これこそ%SEX%が歩むべき「正しい」道なのだと。
    - %YOU%はセイウンスカイに尋ねようとした。
    - 返ってきたのは「心配しないで、トレーナー。ちょっと……いくつかわかっただけ……」だけだった。


# 特性【見えない枷】獲得
arim_kin_lose_c:
  title: 有馬記念（敗）
  lines:
    - 通路には抑圧した空気が漂い、セイウンスカイは俯いて早足で過ぎ、後ろから散発の、無視しにくい議論が聞こえる。
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「なにが『謀略の星』だ……今日はグラスワンダーに完全に抑えられてた。」
    - content:
        - fontWeight: bold
          content: 通行人B
        - 「だよな。新しい手があると思ってたのに、これかよ？」
    - content:
        - fontWeight: bold
          content: 通行人C
        - 「おい、声を落とせ……」
    - さらに刺さる声が反対側から聞こえ、興奮したファン数人がこちらの方向を囲み、声を高くしている。
    - content:
        - fontWeight: bold
          content: ファンA
        - 「このトレーナー、どんな戦術組んでんだよ！？あの状況なら明らかに先に変速だろ！」
    - content:
        - fontWeight: bold
          content: ファンB
        - 「そうだよ！青ちゃんの才能を無駄にした！」
    - content:
        - fontWeight: bold
          content: ファンC
        - 「前に何勝かしたから浮かれてたんだろ？もう少し専門的になれよ！」
    - %YOU%は深く息を吸い、根拠のない非難と苛立ちを一緒に押し下げ、早足でセイウンスカイに追いつき、比較的静かな準備室へ入った。
    - 扉が閉まるなり、%SEX%はすぐ壁に寄り、胸がわずかに上下する。疲労ではなく、抑え込んだ何かだ。
    - %SEX%はいつもの敗北後のようにすぐ振り返らず、黙って立っているだけだ。
    - %YOU%は思考を整え、口調を理性的に、「輿論に対処したあと」のトレーナーらしくしようとした。
    - 「今日の状況は……輿論が俺たちに不利だ。」
    - 「怖がるな。俺はいつもお前の前にいる。」
    - 「…………」
    - 「ただ、多くの人は、これまでの戦術の流儀が……『冒険』で『個人的』すぎると見ている。」
    - セイウンスカイは目を上げて%YOU%を見、何も言わない。
    - 「考えているんだが、少し方針を調整したほうがいいかもしれない。」
    - 「お前の特徴を捨てろとは言わない。……少し収め、もう少し堅実に。」
    - 「たとえば、エアグルーヴ先輩のような、より安定して、大衆の予想に合う走りの枠を参考にする。少なくとも大事なレースでは——」
    - セイウンスカイの瞳がわずかに縮み、信じられない顔で%YOU%を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「枠？安定？」
    - セイウンスカイは%YOU%を遮り、声は高くないが、氷の粒がある。
    - %SEX%は体を正し、目には%YOU%が見たことのない鋭い拒絶がある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、これからみんなの『正しい』やり方で走れって言ってるの？標準的な競走%UMA%の手引どおりに走れって、そう言ってるの？」
    - %YOU%は辛抱強く説明しようとしたが、口調には外界の圧力から生まれた焦りがあった。
    - 「正解じゃない。より成熟した戦略だ！」
    - 「見たろ、臨場の『奇策』に頼りすぎるリスクがどれだけ大きいか！もっと系統的で、制御できる方案で、みんなの期待に応える必要がある——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんなの期待？」
    - セイウンスカイは繰り返してから、冷たく笑い、耳を後ろへ向けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん——トレーナー、ひょっとして……怖くなった？」
    - %YOU%は胸に苛立ちが這い上がり、口調が知らず説得の強引さを帯び、声がだんだん高くなった。
    - 「怖いんじゃない。お前のキャリアに責任を持つんだ！」
    - 「性分のままに任せたら、勝てば奇策、負ければトレーナー無能、戦術は児戯だ！外が今どう言ってるか知ってるか！？」
    - 口を出してすぐ、%YOU%は後悔した。
    - これは%YOU%が言いたかったことではない。少なくとも全部ではない。だが連日の圧力と根拠のない非難が、この言葉に火薬を乗せて飛び出した。
    - セイウンスカイの瞳がわずかに縮む。
    - %SEX%はこちらを、見知らぬ者を見るように見た。%SEX%の周りを漂っていた拒絶は、だんだん深い失望と傷へ固まる。
    - 後悔が一気に%YOU%の胸へ衝いた。
    - 「待て、スカイ、そういう意味じゃない。」
    - 「今のは……言い方が間違っていた。」
    - 「謝る……」
    - セイウンスカイは静かに%YOU%を見て、何も言わず、続きを待った。
    - 「つまり……来週からのトレーニングは、もう少し系統的なやり方を試してみてもいい。」
    - 「一つの……準備を増やす、選択肢を増やす。いいか？」
    - 「安心しろ！毎日、十分に緩む時間は残す。不規則だった時間を整えるだけだ。」
    - %YOU%は真剣に%SEX%を見た。%SEX%に、後ろの混乱と圧力を、そして%YOU%は%SEX%を縛りたいのではなく、非難の声のなかで一見より「安全」な道を探したいだけだと、わかってほしい。
    - セイウンスカイは数秒黙り、最後に、とても軽く一度頷いた。
    - 口論もなく、反論もなく、どんな激しい言葉よりはっきり一線を引いた。
    - 残りの時間は無音で過ぎた。
    - 荷物を整え、走路を出て、帰りの車に乗る。
    - 帰り道、セイウンスカイはずっと横を向き、流れる夜を見て、睫毛がたまに過ぎる街灯の下で静かな影を落とす。
    - %YOU%は%SEX%の顔の気持ちが読めないが、垂れた耳は%SEX%の落胆を隠せない。
    - %YOU%は何度か口を開き、息苦しい沈黙を破ろうとして、適切な言葉が見つからなかった。
    - 車の平穏な走行音だけが、長く静かな帰路を埋めていた。
    - 二人のあいだに、初めて、重く言葉のない隔たりが覆った。


# （有馬記念勝利）シニア級2月1週、ターン開始
ws_cloud_mot_aw:
  title: 青雲の志？（1）
  lines:
    - 朝の陽が窓を通り、机の上の、字が几帳面なほど整ったトレーニング計画に落ちる。
    - セイウンスカイはすでにトレーニングウェアに着替え、計画表と向き合ってストップウォッチを照合し、表情はかつてないほど真剣だ。
    -
    - ここ数週間、%SEX%は別人のようになった。
    - 自ら作った「青雲の志トレーニング法」を厳格に守る。
    - 未明五時のスタミナ走、午後の戦術分析は秒まで精密、夜には体幹まで追い込む。
    - 笑いは減り、世間話は消え、いちばん好きな釣りの時間まで圧縮されて消えた。
    -
    - 疲れ切ったセイウンスカイの顔を見て、%YOU%は気遣った。
    - 「スカイ、顔色がよくない。昨夜も足りなかったか？」
    - 「最近の量が大きすぎる。今日は休まないか？」
    - セイウンスカイは欠伸を素早く収め、強く頭を振った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大丈夫。みんなの期待に見合うなら、これくらい払うのは当然だよ。」
    - 言い終えると、ウォームアップへ行った。
    - %YOU%はこれほど自律したセイウンスカイを見て、胸がいっぱいになったが、最後は尊重を選んだ……
    -
    - 訓練場で、%SEX%はプログラムを組まれた機械のようだ。
    - いつもの軽やかな歩みは少し硬く、いつでも楽に整えていた呼吸も乱れがちだ。
    - いつものコーナー練習のあと、%SEX%は膝を支えて息を整え、額の髪は汗に濡れている。
    - セイウンスカイは独り言をつぶやいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だめ……この数字じゃ足りない……『青雲の志』にはまだ遠い……」
    - %YOU%はセイウンスカイの状態がおかしいと気づき、%SEX%に水筒を渡すときに注意した。
    - 「まず休め。状態がよくない。お前のいつものリズムじゃない。」
    - セイウンスカイは水筒を受け、強気に言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ううん。前の習慣は散漫すぎた……直さないと。」


# イベント「青雲の志？（1）」後、屋上で発生
sr_cloud_mot_aw:
  title: 青雲の志？（2）
  lines:
    - 数日後の夕方——
    - セイウンスカイは意外にも、以前と同じように消えた……
    - %YOU%がセイウンスカイを見つけたとき、%SEX%は空の屋上のいちばん高いところに一人座り、膝を抱え、遠くの夕陽に染まった雲をぼんやり見ていた。
    - いつものこの時間なら、%SEX%はどこかで寝ているはずだ。
    - %YOU%は前へ出て%SEX%の横に座り、初めて%SEX%に会ったときのように、%SEX%と話を始めた。
    - 「新しい戦術の着想を探してるか？」
    - セイウンスカイはゆっくり首を振り、声はとても小さい。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……最近、眠れない。」
    - %SEX%は長く止まってから、続けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「目を閉じると、いろんな声が聞こえるみたい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの——どんどん増える期待……どんどん増える責任……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから努力しないと。おじいさんがくれた名前みたいに——青雲の志」
    - セイウンスカイは空を見、目は迷いでいっぱいだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもボク……走るのがどんどん重くなってる。前みたいに雲みたいに、浮かべる感じ……見つからない。」
    - %SEX%は振り返り、目は迷いでいっぱいの、道に迷った子供のようだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー——ボク、間違えてる？おじいさんの『青雲の志』って、こんなに自分を疲れさせることなの？」
    - %YOU%は疲れたセイウンスカイを見て、胸がいっぱいになった。
    - 「別の道でもいい——」
    - 「今のお前は、まだこのやり方に馴染んでいない。」
    - セイウンスカイはぼんやり空を見、長い沈黙のあと、%SEX%の目がまた強情になった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ううん！トレーナー。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いつかはこうなる。もっと早く慣れないと……倍努力しないと……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……信じて。ずっとそうしてくれたでしょ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この決意は残させて。ボクの作戦を、いつも迷わず信じてくれたみたいに……」
    - ここまで言われては、%YOU%も多くは言えない。
    - %YOU%にできるのは、静かに%SEX%とこの夕陽を見届けることだけだった。


# イベント「青雲の志？（2）」後、ターン終了 特性【見えない枷】解除 好感+50 恋慕+2
we_cloud_mot_aw:
  title: 青雲の志？（3）
  lines:
    - 屋上のあの夜のひとときの静けさは、疑いを散らさなかった。
    - 逆に、セイウンスカイは倍の努力でその不確かさを追い払おうとしているみたいだった。
    - %SEX%はあの杓子定規な計画をさらに厳しく実行し、数字が十分に綺麗なら「青雲の志」の正しい道を証明できると思っているようだ。
    - ある日の走りで、セイウンスカイの肩には不自然な張りがあり、呼吸は重く乱れ、昔の、重いものを軽く見せる韻律はまったくない。
    - 「スカイ、もういい！今日はここまでだ！」
    - %YOU%は異常に気づき、大声で止めた。
    - だが%SEX%は聞こえないふり、あるいは聞いて、より速い歩幅で応えた。急な方向転換が必要なコーナー練習で——
    - fontSize: 1.2rem
      content: ドン！
    - セイウンスカイの体が固まり、左足首が不自然な角度で捻れ、体ごと芝生へ重く倒れた。
    - %YOU%の心臓はほとんど止まり、一瞬で%SEX%のそばへ駆けた。
    - セイウンスカイは顔が青白く、自分で起き上がろうとして、痛みに息を呑んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だ……大丈夫。滑っただけ……」
    - 二言なく、慎重に%SEX%の足首を確かめ、ひどい変形がないのを見て、%SEX%を背負って医務室へ走った。
    -
    - 医務室内——
    - 校医が丁寧に診て、診断を出した。
    - content:
        - fontWeight: bold
          content: 校医
        - 「足首の捻挫だ。重症ではない。一週間ほど安静にすれば戻る。ただ……」
    - 「ただ、何だ？」
    - %YOU%は焦って尋ねた。
    - content:
        - fontWeight: bold
          content: 校医
        - 「%SEX%の精神が張りすぎている。明らかな神経衰弱の兆候がある。体が警報を出しているんだ、子よ。必要なのは徹底した休息と緩和だ。体だけではない。」
    - 医者は神経を緩め、炎症と痛みを抑える薬を出し、最後に念を押した。
    - content:
        - fontWeight: bold
          content: 校医
        - 「環境を変えなさい。訓練場のある場所にいないこと。家へ戻るか、レースのことをまったく考えなくていい場所へ行き、自然に目覚め、純粋に楽しいことだけをしなさい。」
    -
    - 翌日、実家へ向かう新幹線——
    - 車内で、セイウンスカイの足首は包帯に包まれ、窓際に寄りかかっている。昨日の恐慌と痛みが褪せたあと、残るのはより深い沈黙と、少しの途方だ。
    - %YOU%は熱い飲み物を二つ持ってきて、一つをセイウンスカイに渡した。
    - 「医者の話、聞こえたか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん……ごめん、トレーナー。また迷惑かけた。」
    - セイウンスカイは受け取り、小さく頷いた。
    - 「迷惑なのは怪我じゃない。自分を怪我まで追い込むのを見たことだ。」
    - %YOU%は溜息をつき、口調を緩めた。
    - 優しく%SEX%の頭を撫でた。
    - 「罰でも、休暇でもない。必要な『修復』だ。おじいさんのところは、たぶんいちばんいい修復基地だ。」
    - 「おじいさん」を聞いて、セイウンスカイの沈んだ目に光が走り、話の匣が意外に開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、知ってる？おじいさんの家の裏庭に古い梅があって、咲くとすごくいい匂い。おじいさん、梅のジャムも作るんだ。トレーナー、あの川見て。おじいさん、昔よくあの湾でボクを連れて釣ってた。庭は夏の夕方、蜻蛉がいっぱい低く飛んで、おじいさん、雨の前兆だって……」
    - セイウンスカイは途切れ途切れに話し、口調はだんだん軽くなり、顔にも久しぶりに柔らかい色が浮かんだ。
    - 一か月張り詰めていた肩の線が、おじいさんの記憶のなかで、知らず緩んでいく。
    -
    - セイウンスカイの実家——
    - 正午、二人はセイウンスカイの実家に着いた。
    - 伝統的な和風の屋敷で、陽が縁側に落ちている。
    - おじいさんを見た瞬間、セイウンスカイは興奮して手を振り、叫んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おじいさん——会いたかった！？」
    - おじいさんは笑顔が朗らかで、矍鑠とした老人で、二人を見て目がすぐ三日月になった。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「おや！うちの大スターが帰ってきた！こちらがトレーナーさんかね？さあ入りなさい、茶を淹れたばかりだ！」
    - 続いて視線が、セイウンスカイのわずかに跛る歩みに落ちた。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「おや、スカイ、足は……」
    - %YOU%はすぐ説明した。
    - 「トレーニング中にうっかり捻ったんです。医者には見ていただきました。一週間安静にすれば大丈夫で、大事はありません。」
    - おじいさんは明らかに胸を撫で下ろし、笑みが再び広がった。
    - - content:
      - fontWeight: bold
        content: おじいさん
      - 「よかったよかった！さあ入りなさい、入口に立っていないで。」
    - 彼は熱心に%YOU%とセイウンスカイを支え、目は気遣いばかりだ。
    - 簡単な挨拶のあと、二人はセイウンスカイのおじいさんについて家へ入った。
    - 座ってから、%YOU%は部屋の隅の漬物壺に気づいた。
    - 「この前スカイに送ってくださった漬きゅうり、%SEX%が分けてくれました。とてもおいしくて、スカイは最後まで壺まで拭き切っていました」
    - セイウンスカイの顔がわずかに赤くなり、そっと%YOU%の裾を引っ張った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「ははは！好きならいい！今年はもっと味が染みてる。帰るとき何缶か持っていきなさい！」
    - おじいさんは朗らかに笑った。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「ちょうど、茶を淹れたばかりで、柏餅も新しい。入ってゆっくり話しなさい。足は高くして休ませたほうが早い。」
    - 熱い茶が立ち上り、柏餅の香りに庭の草木の匂いが混ざる。
    - 二杯目を継いだころ、話題はセイウンスカイとの初対面の逸話から、自然に走路へ移った。
    - 「初めて%SEX%に会ったときは、サボりそうな子だと思いました。まさか、%SEX%が誰よりも機を見るのを知っているとは。」
    - content:
        - fontWeight: bold
          content: おじいさん
    - 「この子は小さいころからそうだ。ぼんやりしてるように見えて、渓のどの石の下に魚がいるか、%SEX%は誰より知っている。」
    - 菊花賞の、人を驚かせる大逃げの話になると、おじいさんは特に集中して聞いた。
    - 最近の有馬記念に触れ、%YOU%は一息置いた。
    - 「%SEX%はより賢く勝ちました。戦術は非の打ちどころがありません。ただ、レースのあと……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おじいさん……」
    - セイウンスカイが突然、小さな声で世間話を遮った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクの名前の『セイウン』は、『青雲の志』からでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもおじいさんも、お父さんもお母さんも……その四字でボクを縛ったことはなかった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小さいころから、基本の教育以外、家は余計な目標をほとんど求めなかった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お母さんはいつも『スカイは健康で、楽しければいい』って言って、お父さんも頭を撫でて『今日は楽しかったか』って聞くだけ。」
    - セイウンスカイは目を上げ、瞳に暗くなっていく空を映し、子供のような困惑がある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「名前に、おじいさんとお父さんお母さんの期待が乗ってるなら……どうして教えてくれなかったの？」
    - おじいさんは茶杯を置き、孫娘を見て、目に回想の光を浮かべ、ゆっくり言った。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「小さいころ、わしも似たことを聞いたことがある。お前、どう答えたか覚えてるか？」
    - セイウンスカイは首を振った。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「あのときお前は頬を膨らませ、頭をでんでん太鼓みたいに振って、『いやだ！そんな遠大な志は複雑すぎる！走るなら、自由に走る！』と言った。」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「それからわしの手を振りほどき、庭へ走って、あの古い梅の周りを何周も回りながら、『風みたいに——！雲みたいに——！』と叫んだ。」
    - おじいさんは視線を戻し、すでに大きくなり、迷い込んだ孫娘を見て、声を柔らかくした。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「ほら、答えはとうの昔に自分で出した。なにになるかではなく、どう走るかだ。」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「今のお前は、風より速く、雲より高い。だがいちばん大事なものを、後ろに落としていないか？」
    - 暮れが沈み、最後の一筋の金が、突然呆けたセイウンスカイの顔を掠めた。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「足を痛めたなら、しっかり治せ。心に荷物があるなら、なおさら置け。忘れるな、スカイ。家はいつでも、緩んで足を休められる場所だ。」
    - おじいさんはそっとセイウンスカイの頭を撫でた。
    - 夕飯は熱々の鯖の煮ものと家庭料理だった。
    - おじいさんは談笑し、田の逸話を話し、レースには一切触れない。
    - セイウンスカイは最初少し黙っていたが、だんだんおじいさんの話に笑みを連れられ、いつもの自由な様子に戻った。
    -
    - 薄明かりの朝、%YOU%は朦朧と眠りから覚めた。
    - 意識はまだ完全に醒めていないが、感覚が先に異常を捉える——
    - 腕のなかに暖かい重さ、鼻先に見慣れたシャンプーの清らかな香り、均一で柔らかい呼吸が頸を撫でる。
    - %YOU%は急に目を開けた。
    - セイウンスカイが%YOU%の腕のなかに丸まり、青い長い髪が枕に広がり、数筋が%YOU%の顎を悪戯に擦っている。
    - %SEX%はよく眠っており、頬が腕を圧し、いつもの怠惰で狡い表情は、完全に緩んだ寝顔に代わっている。
    - 口をわずかに尖らせ、いい夢を見ているみたいだ。
    - （これはどういうことだ！？）
    - 突然の事態に%YOU%は本能で体が震えたが、セイウンスカイにきつく抱かれ、動けない。
    - その激しい動きが、やはり%SEX%を起こした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……」
    - セイウンスカイは曖昧に鼻を鳴らし、伸びをし、ゆっくり目を開けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おはよう……トレーナー……」
    - 声は濃い眠気を帯び、嗄れて柔らかい。
    - 「セイウンスカイ？」
    - 「どうして……ここにいる？」
    - セイウンスカイは目を擦り、顔に悪戯な笑みが浮かんだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって昨夜、スカイ眠れなかったんだもん～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一人で寝てるとつまらないし、羊を千一匹まで数えて、ふと思った——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——トレーナーと一緒に寝ると、いつもすぐ眠れるんだよね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから忍び込んだ～」
    - セイウンスカイは胸にうつ伏せ、軽く述べ、これがごく自然なことみたいだ。
    - %YOU%は%SEX%の開き直った小さな顔を見て、苦笑するしかなく、頭を緩めて枕へ戻した。
    - 「おじいさんに見られても平気か……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大丈夫だよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おじいさん、トレーナーのこと好きだよ。」
    - 「うん……だめだ！埋め合わせする！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「は？」
    - 「今回はこっそり抱き枕にされた。どう埋め合わせるかな。」
    - 「そうだ！次の昼寝、スカイに膝枕してもらおう。悪くない気がする～」
    - 言い終わるか終わらないかで、セイウンスカイの余裕ある笑みが瞬間凍った。
    - 紅潮が清水に落ちた墨のように、顔全体を占領する。
    - %SEX%は目を見開き、唇をわずかに開き、何か反論しようとして、短い息しか出ない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ひざ……膝枕？！！！トレーナーの大色魔……」
    - 「え——昨夜は邪悪な%UMA%に夜襲されたんだぞ。色魔はむしろ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そ、それは昨夜眠れなかったから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに前、医務室で昼寝してたとき、トレーナーが隣にいると……たしかに眠りは……」
    - セイウンスカイは小さくつぶやいた。
    - %YOU%は恥ずかしがるセイウンスカイを見て、%SEX%の頭を撫でた。
    - 「はいはい——」
    - 「次に眠れなくなったら、先に申請しろ。突然の奇襲は、トレーナーの心臓に悪い。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わ、わかったよ！」
    - セイウンスカイは慌てて起き上がり、赤い顔を横へ向け、ごく小さな声でつぶやいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「膝枕も、だめじゃない……」
    - 「ん？今なんて、よく聞こえなかった……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えっと——今のは——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おじいさんの朝ごはん！そう！朝ごはんの時間だよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おじいさんの朝ごはん！朝ごはんの時間だよ！」
    - セイウンスカイは慌てて床を跳び、靴まで左右逆だ。
    - 言い終えるとほとんど逃げるように部屋を飛び出し、閉めるときに自分の足に躓きそうになった。
    - 「おい！ゆっくり！捻った足に気をつけろ！」
    - （というか、昼ごはんじゃないのか……）
    - %YOU%は床の端に座り、まだ%SEX%の残った体温を感じる。
    - 俯いて、%SEX%に皺をつけられた寝間着を見て、さっきの%SEX%の開き直りから全面敗北までの面白い様子を思い出し、最後は笑って溜息をついた。
    -
    - 昼になり、おじいさんと別れて、二人は帰路の車に乗った。
    - この道中、セイウンスカイは途切れなく、%YOU%に%SEX%の子供のころの話をした。
    - 夕方、二人はトレセンへ戻った。
    - 見慣れた小径に足を下ろすなり、セイウンスカイはそっと%YOU%の袖を掴み、甘えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー～見て、この足、一週間養生だよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「誰もそばにいてくれなかったら、スカイ、すごく孤独で、すごく寂しいよ？」
    - %YOU%は%SEX%の目の底に再び浮かぶ、軽やかで生き生きした光と、わずかに上がった口角を見た。
    - そしてこの久しぶりの、甘えを帯びた口調——過去一か月の張りと迷いが、実家の風とおじいさんの言葉に、そっと吹き散らされたみたいだ。
    - %YOU%は吹き出しそうになり、わざと顔を引き締めたが、目には隠しきれない温和と甘やかしがある。
    - 「ほう？ではこの『すごく孤独で、すごく寂しい』お嬢さん、何をすればいい？」
    - セイウンスカイは瞬きし、答えはとっくに決まっているみたいに、声には成功したような軽さがある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それはね……トレーナー、明日の午後、スカイと『すごく静かで、人生を考えるのにぴったり』なところへ行く時間、ある？」
    - 「単刀直入に——どこで昼寝するかだ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「チリンチリン～正解！スカイの秘密の寝場所を一回あげるよ～にゃはは～」
    - 夕方の風が吹き、%YOU%は%SEX%の目の底の、晴れ戻った空を見て、笑って頷いた。
    - 「これから、『青雲の志』はまだ追うか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それはね……自然に任せる～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とにかく、これから死ぬほど練ったりしない……」
    - 「そうか？そう言われると、奮起してたスカイが少し懐かしい……時々一回やるか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抗議！%UMA%虐待だよ！」
    - 「ははは…………」
    - ………
    - ……
    - …
    -
    - 遠く、最後の一抹の霞が優しく地平へ沈む。
    - 家からの風がそっと吹き、押し潰されていた二つの自由な魂を包み、より広い空へ飛ばせていく……


# （有馬記念敗北）シニア級2月2週、ターン開始 特性【見えない枷】解除 好感+50 恋慕+5
ws_lost_al:
  title: 迷った舵取り
  lines:
    - 車内の空気は、窓の外の曇り空のように沈んでいる。
    - セイウンスカイは後ろへ流れる田を見、指で窓ガラスの薄い霧を無意識に描いている。
    - %YOU%は向かい側に座り、何度か口を開き、言葉が舌先まで来て飲み込んだ。
    - 一か月前と同じで、空気には冷たい気配が漂っている。
    -
    - 有馬記念のあの口論から、一か月が経った。
    - そのあと、セイウンスカイのトレーニング計画は精密で杓子定規になった——何時に起き、何時に走り、何を走るか、何分休むか、全部白黒で計画表に書いてある。
    - 総時間は以前と同じで、休息も十分残しているが、枠に入れられた感覚が、毎回のトレーニングを規定動作の消化に変えていた。
    - %SEX%は公に抗議しなくなった。ただ、目の光が少しずつ暗くなっていく。
    - 三日前、%SEX%は部屋に閉じこもり、午後いっぱい手紙を書いて、おじいさんへ送った。
    -
    - 昨日、おじいさんの電話が直接%YOU%へかかってきた。向こうの声は朗らかだ。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「もしもし、セイウンスカイのトレーナーさんかね。最近、暇はあるかい？スカイを連れて一晩泊まってくれないか。庭の梅が熟れて、この古い骨では%SEX%の手が要るんだ。」
    - おじいさんの厚い招きに、%YOU%とセイウンスカイは一週間の休暇を申請し、帰郷の列車に乗った。
    -
    - 午後五時、セイウンスカイの実家に着いた。
    - おじいさんはすでに入口で待ち、二人を見て笑って手を振った。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「来たか、道中お疲れ。さあ入りなさい、餅を焼いたばかりだ。」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「ちょうど夕飯の時間だ。先に食べよう。話は食ってからだ。」
    - セイウンスカイは隣で子猫みたいに、言葉が少なく、おじいさんとトレーナーを静かに見ているだけだ。
    - 夜は深く、庭には石灯籠の暖かい光だけが残る。
    - 夕飯の温かい空気がまだ散らないうちに、おじいさんはこちらだけを縁側へ呼び、茶を一服淹れた。
    - 茶の香りが縁側に広がる。簡単な挨拶のあと、おじいさんは茶を継ぎ、穏やかな視線を落とした。
    - 茶杯を受け、指先に温かい磁器の壁を感じる。
    - 礼を言ったあと、おじいさんが話し始めた。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「トレーナーさん、スカイの子は……ずいぶん手数をかけただろう？」
    - 「いえ、スカイは優秀です……俺の問題です。」
    - 「外界の声で、最初に%SEX%を選んだ理由を忘れていました。」
    - おじいさんは小さく首を振り、夜の庭を見た。
    - content:
        - fontWeight: bold
          content: おじいさん
    - 「違う。お前は%YOURSEX%を大切にしすぎたんだ。大切すぎて……%YOURSEX%が『標準に足りない』せいで外界の圧力を受けるのを恐れ、できる限り——%SEX%を守ろうとした。」
    - おじいさんの言葉に%YOU%はわずかに呆け、胸の霧がだんだん散る気がした。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「スカイの子は、正解の枠には収まらない。%SEX%が三つのとき……」
    - おじいさんはセイウンスカイの多くの昔話を語った。
    - 雨季の蝸牛が気になって教養の授業を逃げたこと。
    - 防具を着けないと父親に叱られ、着けなくても安全だと証明するために、より柔軟な走り方を黙々と研究したこと。
    - 寝坊したくて、幼稚園へ行かず樹洞で寝たこと…………
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「%SEX%の母はよく言っていた。%SEX%は山間の風だ、掴もうとすればするほど、%SEX%は速く抜ける、と。」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「だがお前が、%SEX%が回りたい山になれば、%SEX%はかえってお前のために留まる。」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「トレーナーさん、お前は%SEX%の手綱じゃない。%SEX%が信じると選んだ人だ——それで十分だ。」
    - %YOU%は茶杯を握り、長いあいだ張り詰めていたどこかが、そっと緩んだ。
    - 「……わかりました。ありがとうございます。」
    - おじいさんは笑って言った。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「明朝、%SEX%と渓へ歩きなさい。あの子は大事なことを考えるとき、いつも水の音が要る。」
    -
    - その夜、客間——
    - 障子がそっと開いた。セイウンスカイが枕を抱えて外に立っている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……眠れない。」
    - acc: 1
      content: 「うん……おいで……」
    - %YOU%は優しくセイウンスカイを招いた。
    - %SEX%は敷いた布団のそばに膝を屈めて座り、両手で脚を抱え、長く黙った。
    - 月が格子を通り、%SEX%の横顔に淡い影を落とす。
    - かなり経って、セイウンスカイが口を開き、声はとても小さく、ほとんど夜に溶ける。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - 「ん。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毎日決められたトレーニング、嫌い……」
    - 「わかってる……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毎日決まった休息時間も、嫌い……」
    - 「わかってる……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もっと嫌いなのは、トレーナーが他の人みたいにボクを見始めたこと。」
    - 月が斜めに部屋へ入り、%SEX%の俯いた横顔に落ちる。
    - %YOU%は%SEX%が下唇を噛み、目尻が急に赤くなり、薄い水光が月の下ではっきり見えるのを見た。
    - セイウンスカイの声が詰まった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんな、もっと落ち着いて、『正しい』やり方で走れって言う……それは気にしなくていい。でもトレーナーまで……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーまで、そんな目で見る……ボクがただの……『完璧』に調整する作品みたいに。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ今まで勝ったもの……なんだったの……」
    - 涙が頬を伝い、抱えた枕に落ち、濃い小さな点を暈す。
    - %SEX%は声を上げて泣かず、肩がわずかに震え、雨に濡れてもしぶとく隠れない子猫のようだ。
    - %YOU%は両手を開き、%SEX%をそっと胸へ引いた。
    - セイウンスカイは%YOU%の腕のなかで体ごと緩み、額を%YOU%の肩に当て、涙がすぐ生地を湿らせた。%YOU%は何も言わず、%SEX%の震える肩を囲み、掌で%SEX%の背を一度ずつ撫でた。
    - 「俺が間違っていた。」
    - セイウンスカイは首を振り、顔を肩に埋め、湿った声でつぶやいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボク……ボクも悪い……意地も張ってた……」
    - 「お前が足りないと思ったことは、一度もない……」
    - 「ただ怖かった——」
    - 「お前がそれらの言論に傷つくのが怖く、『自由』のせいで支持を失うのが怖かった……結果……縛る側になったのは、先に俺だった」
    - 「外界の声を、お前を調教する基準にしてしまった……すまない。」
    - セイウンスカイはさらに泣き、指で%YOU%の背の服をきつく掴み、布が一つに捻れる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの枠……先に入ったのはボクだよ……自由に走っても勝てると証明しなきゃって思って、かえって必ず果たす任務にした……トレーナーの計画表まで、ボクの圧力になった……」
    - %YOU%は%SEX%の泣きが少し収まるのを待ち、親指で%SEX%の顔の涙を拭き、%SEX%の目を見た。
    - 「聞け、スカイ。」
    - 「契約したとき目に留めたのは、常理どおりに出ず、自由すぎて頭を抱えるセイウンスカイだ。」
    - 「外界の圧力がどうあっても、俺はお前の前に立つ」
    - 「『収める』必要はない。誰の『正しい』にも合わせなくていい。お前自身の、俺に問う、唯一無二の競走%UMA%でいろ。」
    - セイウンスカイは濡れた目でこちらを見つめ、小さく言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……本当？次のレース、また無茶しても？」
    - 「本当だ……ただし条件がある。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「な……なに……」
    - セイウンスカイは警戒して後ろへ縮んだ。
    - 「次に何か思いついたら、どれだけ突飛な戦術でも、俺がくれた枠が辛くても——」
    - %YOU%は指を曲げ、軽く%SEX%の額を弾いた。
    - 「直接言え。溜め込むな。おじいさんに手紙で告げ口するだけにするな。」
    - 「俺はお前のトレーナーだ。他人じゃない。」
    - セイウンスカイは二秒呆け、それから俯き、小さく鼻を鳴らし、顔にはまだ涙の跡があるが、来たときの陰はもう散っている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……わかったよ。うるさい。」
    - %SEX%は枕を抱えて横に寝、すぐ均一な呼吸が聞こえた。
    - 月が%SEX%の寝顔を移り、%SEX%の口角がわずかに上がっているのが見えた。なにか重いものを下ろしたみたいだ。
    -
    - 翌朝、空がようやく白み始めたころ
    - セイウンスカイは珍しく早く起き上がった。%SEX%はそっと障子を開け、おじいさんがすでに庭にいるのを見た。
    - おじいさんは松の盆栽を丁寧に剪定している。朝霧はまだ散らず、動きは遅く、集中している。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「起きたか？昨夜は……どうだった？」
    - セイウンスカイは縁側の端に座り、空中の脚を揺らした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん……話せた。」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「お前という子は、小さいころから同じだ。不満は先に自分で溜め、溜めきれなくなってから、こっそり手紙でわしに告げ口する」
    - おじいさんは鋏を置き、振り返り、視線は穏やかで、何もかもわかっている。
    - セイウンスカイの顔がわずかに赤くなり、声を伸ばして甘えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えー、おじいさんがいちばん——いい——よ——」
    - おじいさんは笑って首を振り、隣の木の腰掛けに座り、手拭で手を拭いた。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「小さいころからそうだ。怠惰で形にもならない。だが……」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「スカイ、お前の名前の『セイウン』の二字、なにを意味するか知っているか？」
    - セイウンスカイは一瞬呆け、正直に首を振った。おじいさんはゆっくり言った。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「『青雲の志』だ」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「もともとの寓意は、高く遠い志、遠大な抱負を持ってほしいということだ。」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「小さいころ、わしもそう聞いた。青雲の志はあるか、とな。」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「あのときお前は頬を膨らませ、頭をでんでん太鼓みたいに振って——『いやだ！そんな遠大な志は複雑すぎる！走るなら、自由に走る！』」
    - 言い終えると、おじいさんが先に小さく笑い、目尻の皺に暖かい記憶が重なる。
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「だからあのときから、わしも、お父さんお母さんも、『遠大な抱負』でお前を求めなかった。わしらにとって——」
    - content:
        - fontWeight: bold
          content: おじいさん
        - 「お前が好きなやり方で、健康に、楽しく大きくなること。それがいちばんの願いだ。」
    - 朝の光がようやく霧を貫き、斜めに庭へ入り、青石に斑な影を落とす。
    - セイウンスカイは静かに座り、朝の光に照らされたおじいさんの横顔を見ていた。
    - %SEX%は何も言わず、いつもの怠惰や狡さを帯びた目に、今は呆けた、ゆっくり流れる思考が満ちている。
    - 風がそっと吹き、庭の葉がさらさら鳴る。
    - セイウンスカイは俯き、揃えたつま先を見て、長い時間が経ってから、ごく小さく「ん」と言った。
    -
    - 午前の陽が障子を通り、畳を暖かく溶かす。意識が戻った瞬間、%YOU%は静かな視線が%YOU%を見ているのに気づいた。
    - 目を開けると、セイウンスカイが%YOU%の寝床のそばに蹲っていた。
    - %SEX%は両手で頬を支え、肘を膝に置き、首を傾け、瞬きもせず%YOU%を見ている。
    - %YOU%が目覚めたのを見て、セイウンスカイは声を長く引き、十分にからかう調子で呼びかけた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やあ～トレーナー、やっと起きた？陽が尻を焼いてるよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ぐっすりだったね。おじいさんが庭の盆栽を全部剪って、猫に餌をやって、裏山を散歩して戻ってくるまで、聞いてたよ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ～誰かが昨夜、人を抱いて、かっこいいこと言って、『誰の期待にも合わせなくていい』『お前でいろ』、感動してもう一度泣きそうになったのに……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——結果、自分はいいご身分で、日が高くなるまで寝てる！おじいさんの言葉を借りれば『トレーナーだけ自然に目覚めさせて、%UMA%は居眠り禁止』」
    - %YOU%は眉間を揉み、尋ねた。
    - 「……何時だ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「十一時。おじいさんの昼ごはん、できちゃうよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーの寝坊の顔、写真に残したよ？次にまたあんな硬い計画表を出したら——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——印刷して訓練場の入口に貼る！」
    - %SEX%は変顔をし、すぐ「プッ」と笑った。
    - その笑みに曇りはなく、眩いくらいで、昨日の重さは本当に、ぐっすりした眠りと部屋いっぱいの陽で蒸発したみたいだ。
    -
    - 簡単だが豊かな昼食のあと、おじいさんは二人を駅まで送った。
    - セイウンスカイの腕に菓子をいっぱい詰め、肩を叩き、多くは言わず、慈しみの目に「任せた」という信頼が書いてある。
    - トレセン学園へ戻ると、夕方の風が青草と走路の匂いを運んでくる。
    - セイウンスカイは列車から跳び、深く息を吸い、大きな伸びをした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「帰ってきた——！」
    - %SEX%は振り返り、手を後ろに回し、後ろ向きに歩き、にこにこ見ている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー～明日、川辺で『トレーニング』したい！」
    - 「釣りか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ぷぷ！残念、不正解！『流体力学と自然環境が生物のリズムに与える潜在的影響の観察』だよ」
    - 「人の言葉で言え。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「釣りに行くってこと！でも今度はちゃんと観察する。新しい戦術、悟れるかも～」
    - %YOU%は%SEX%の頭を撫で、甘やかしながら頷いた。
    - 「俺も行く。先に圧力で潰れたのが俺だったとはな。お前の能天気な生き方、少し学ばないと～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ぷぷ——好感マイナス1だよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「能天気ってなによ。楽天家だよ！」
    - セイウンスカイは頬を膨らませ、指で%YOU%を何度も突いた。
    - 二人の楽しい会話は続き、かつての圧力は羽のように軽い。
    - 昨日の涙と口論は、本当に短い雨だったみたいだ。
    - 雨が止み空が晴れ、雲を導く風は、また自分のリズムを取り戻した……


before_nikk_sho:
  title: 日経賞（前）
  lines:
    - 日経賞当日、走路の上の雲は低く圧している。
    - 観客席はいつものように満席で、スタンド上の電光掲示は事前予想を流し、実況が各選手の近況を分析している。
    - 控え室で、セイウンスカイは隅の折りたたみ椅子に座り、脚を組み、気楽に雑誌を捲っている。
    - 扉が開き、%YOU%が入ってきた。
    - 「スカイ、準備だ。状態はどうだ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「外、うるさいね……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、どうでもいいよ～」
    - %SEX%は雑誌を閉じ、隣の椅子へ放り、立ち上がって伸びをした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうせ奴らが好きなのもボクじゃなくて、『勝つ』って字だけだよ。」
    - 「極端すぎるぞ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大丈夫だよ～行くよ～」


nikk_sho_win:
  title: 日経賞（勝）
  lines:
    - ゴール。
    - セイウンスカイ——！一番——！
    - 実況が興奮して叫び、スタンドの拍手、歓呼、悲鳴が混ざる。
    - セイウンスカイは減速し、ゆっくり止まり、%SEX%は顔を上げた。
    - スタンドでは、%SEX%の顔の応援旗が風に翻り、プラカードを掲げる者がいる。「謀略の星」と書いてある。%SEX%の名を叫ぶ者もいて、声は嗄れているが熱意に満ちている。
    - カメラが%SEX%の前を掠めたとき、%SEX%は本能で目を細め、その光を避けようとした。
    - だが次の一秒、%SEX%の視線が止まった。
    - 観客席の前列で、セイウンスカイのぬいぐるみを抱えた小さな%UMA%が必死に跳ねている。
    - 小さな%UMA%は背が低く、座席に立ってようやく半身が出る。%SEX%はぬいぐるみをきつく抱え、もう一方の手を必死に振り、何か叫んでいる。
    - その声は数万人が同時に出す喧騒に混ざり、海に落ちた一滴の水のように弱いが、セイウンスカイの耳は正確に捉えた——綺麗で、直接で、純粋だ。
    - 条件のない好き。勝ったから叫ぶのでもなく、周りが叫ぶからついて叫ぶのでもない。
    - %SEX%はただ自分を好きなだけだ。それだけだ。
    - セイウンスカイは熱く手を振り、その好きに応えた。
    - 控え室で、セイウンスカイは机へうつ伏せ、考え込むように%YOU%へ言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たぶん……ボクの自由は、すべての声を拒むべきじゃない。」
    - 「新しい悟りか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん……あの子、%SEX%は何も考えてなくて、ボクの走る姿が好きなだけ。ああいう声……うるさくない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だからどうすればいいの。この期待に応えようとする？それとも我が儘のまま？」
    - 悩むセイウンスカイを見て、%YOU%はそっと%SEX%の頭を撫でた。
    - 「いつでも、お前は俺の期待に応えているぞ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だからさ、トレーナー、どうすればいいの。この期待に応えようとする？それとも我が儘のまま？」
    - 「俺の答えは——なしだ」
    - 「今、道はお前の足の下にある。その答えは、お前自身が探すしかない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ……自然に任せよう……」


nikk_sho_lose:
  title: 日経賞（敗）
  lines:
    - セイウンスカイ——三着——
    - セイウンスカイは減速し、ゆっくり止まり、%SEX%は顔を上げた。
    - スタンドでは見慣れた不満の声がまた上がり、セイウンスカイは全部無視し、それで自分の自由を示し、外の指図は要らないと示した。
    - だが次の一秒、%SEX%の視線が止まった。
    - 観客席の前列で、セイウンスカイのぬいぐるみを抱えた小さな%UMA%が必死に跳ねている。
    - 小さな%UMA%は背が低く、座席に立ってようやく半身が出る。%SEX%はぬいぐるみをきつく抱え、もう一方の手を必死に振り、何か叫んでいる。
    - その声は数万人が同時に出す喧騒に混ざり、海に落ちた一滴の水のように弱いが、セイウンスカイの耳は正確に捉えた——綺麗で、直接で、純粋だ。
    - 条件のない好き。勝ったから叫ぶのでもなく、周りが叫ぶからついて叫ぶのでもない。
    - %SEX%はただ自分を好きで、自分を応援している。それだけだ。
    - セイウンスカイは小さな%UMA%の純粋な目を見て、黙って控え室へ戻った。
    - 控え室で、セイウンスカイは机へうつ伏せ、考え込むように%YOU%へ言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たぶん……ボクの自由は、すべての声を拒むべきじゃない。」
    - 「新しい悟りか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん……あの子、%SEX%は何も考えてなくて、ボクの走る姿が好きなだけ。ああいう声……うるさくない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だからどうすればいいの。この期待に応えようとする？それとも我が儘のまま？」
    - 悩むセイウンスカイを見て、%YOU%はそっと%SEX%の頭を撫でた。
    - 「いつでも、お前は俺の期待に応えているぞ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だからさ、トレーナー、どうすればいいの。この期待に応えようとする？それとも我が儘のまま？」
    - 「俺の答えは——なしだ」
    - 「今、道はお前の足の下にある。その答えは、お前自身が探すしかない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん……もういい……まず自然に任せよう……」


before_tenn_spr:
  title: 天皇賞（春）（前）
  lines:
    - 家の温かさが、%YOU%とセイウンスカイを外界の圧力から隔てた。
    - すべてが、また以前のように戻った——
    - セイウンスカイは%YOU%に甘えてサボり、冗談を飛ばす……
    - こっそり%SEX%を軌道へ戻し、たまにそのなかへ混ざる……
    - サボっているとき、%YOU%はセイウンスカイが時折、遠くをぼんやり見ているのに気づいた。
    - あのときの問い——青雲の志——を考えているみたいだ。
    - %YOU%が%SEX%に聞くと、%SEX%はいつもどうでもいい顔で「どうでもいいよ～一歩ずつ～船が橋の頭まで来れば自然にまっすぐ～」と返す。
    - 日が過ぎ、時間は次の大レースへ来た。
    -
    - 春の午後の陽が芝生をふわふわに暖める。
    - 大レースがまもなく始まり、各選手はスタート地点で準備をしている。
    - セイウンスカイは少し離れた芝生の端に一人立ち、怠惰な猫みたいに体を伸ばしている。
    - %SEX%はゆっくり足首を回し、腰と背を伸ばすが、視線は少し虚ろで、近くの相手や走路には焦点がなく、ただ遠く空の端を見、またあのときの問いを思い出した。
    - そのとき、格別に鮮明で、優しい呼びかけが、喧騒を越えて観客席のほうから聞こえた。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「スカイさん——！」
    - セイウンスカイの耳が瞬間立ち、声のほうへ向いた。
    - 声を辿ると、前列に近い観客席の柵のそばに、見慣れた影がある。
    - ニシノフラワーがわずかに身を出し、両手を口のそばに集め、紫の短い髪が春風に軽く揺れている。
    - 二人の視線が人波と距離を貫き、空中で交わった。
    - ニシノフラワーは激しい応援の言葉は叫ばず、両手を胸の前で合わせ、簡単な仕草をした——「がんばれ」と「祝福」の仕草だ。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「がんばって！自由に走ってください！」
    - いちばん柔らかい風のように、セイウンスカイの胸の底に残っていた薄い霧を吹き散らした。
    - セイウンスカイはその笑みを、その見慣れた、いつも%SEX%を静かにさせる影を、呆けて見ていた。
    - ニシノフラワーのあの評——「心は青空みたいに明るく広く、性格は雲みたいに悠々として……スカイさんのそばにいると、とても静か」——
    - 今、温度を帯びて、セイウンスカイ自身へ戻ってきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （おじいさん……見つかったかも……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （トレーナー、ニシノフラワー、それからみんな……わかった……）
    - 瞬間の悟りは静かな湖に落ちた石のように、輪を広げていく。
    - 迷い、もがき、自分を変えようとした不器用……それらの重いものが、この優しい注視の下で、突然とても軽く、淡くなる。
    - セイウンスカイは瞬きし、ずっと虚ろだった視線が瞬間焦点を結び、異常に澄んだ。
    - %SEX%は急に振り返り、空の流雲はもう見ず、選手通路の出口へ視線を投げた——%SEX%にはわかっている。トレーナーはあそこにいる。
    - ほとんど迷いなく、セイウンスカイは歩みを進め、通路口へ小走りで向かった。豁然と開けた急きがある。
    - 通路口の影と走路の陽の境で、%SEX%は%YOU%の影を見た。
    - セイウンスカイがまたゲート入りを恐れていると思い、慰めようとしたところで。
    - セイウンスカイが飛びつき%YOU%の腕を掴み、%SEX%の話す速さは抑えきれない興奮を帯びている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見た！フラワーがあっちにいる！%SEX%がボクを応援してる！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%が言った……違う、%SEX%がわかさせてくれた……」
    - セイウンスカイは手を離し、一歩下がり、両手を腰に当て、顔にこの上なく燦爛な笑みを咲かせた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とにかく！このレース——！証明する！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「青雲の志！『セイウンスカイのやり方』で、トレーナーに見せる、フラワーに見せる！」
    - 放送が再び流れ、決勝招集の合図が走路に響く。
    - %SEX%はもう多くを言わず、力強く一度頷き、すぐ振り返り、堅い歩幅でスタートラインへ走った。
    - その背中に、迷いの虚ろはもうない。
    - 緩みと軽さだけがあり、ようやく重心を見つけた余裕を帯び、風向きを定めた雲のように、悠々として、誰にも止められず、自分の空へ流れていく。
    - %YOU%とスタンドのニシノフラワーは、遠い距離を隔て、視線が期せずしてその影を追った。


tenn_spr_end:
  title: 天皇賞（春）（後）
  lines:
    - ゴールしたあと、セイウンスカイはいつものように慣性で減速してから休養区へ向かわなかった。
    - %SEX%はまっすぐ選手通路の出口へ走り、
    - 歩幅はレースのときより急で、尻尾が後ろで飛び、顔には隠しきれない、溢れそうな興奮がある。
    - %SEX%は一目で通路口の%YOU%とニシノフラワーを見つけた。ニシノフラワーはすでに観客席から降り、並んで立っている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！フラワー！」
    - %SEX%はほとんど二人の前へ飛びつき、胸はまだレースと今の興奮で上下している。
    - 前髪は汗に濡れ額に貼りついているが、その目は驚くほど明るく、星が燃えているみたいだ。
    - 息はまだ整っていないのに、言葉はもう待ちきれずに溢れる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボク……走ってるとき、突然全部わかった！光が『シュッ』て入ってきたみたい！」
    - %SEX%は%YOU%の腕を掴み、またニシノフラワーを見て、この押し寄せる悟りをわかってほしいと急いている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクの『青雲の志』——いちばん高く飛んで、いちばんすごい雲になることじゃない！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たとえボクがいちばん怠惰で、いちばんのろい雲でも、自分のリズムで、行きたいところへ流れていける、ってこと。」
    - セイウンスカイは手を離し、身振りで、頭のなかの自由な光景を描こうとする。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前のボクの走りは、みんなを驚かせたかった。『え？セイウンスカイみたいな怠惰な競走%UMA%でも勝てるの！？』って。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あとで、自由でいたくて、なににも縛られたくないんだと思ってた。でも今わかった——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自由は、なにも気にしないことじゃない。なにのために走るか、なにを背負うか、自分で選べること。」
    - %SEX%は一息置き、目は熱く、堅い。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『こうしなければならない？どの作戦を使うべき？』って期待の目のために走ることも選べる。でもボクはそれが枷だと思う。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも選べる——『別の可能性』を証明するために走る。ボクを信じて、なにかになれとは一度も求めなかった人たちのために走る！」
    - %SEX%は一歩下がり、両腕を広げ、走路全体を、%SEX%という「雲」を動かすすべての風を抱くみたいだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見せたい——トレーナー、フラワー、おじいさん、それから何千何万の、本気でボクを祝福してくれるファン——あなたたちの信頼は、間違ってなかった！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボク、セイウンスカイの自由は、軽くて、無責任なものじゃない——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたたちの祝福を載せられる！くれたのは『必ず勝て』の鎖じゃなくて、自由に走ってほしいって祝福だ！」
    - セイウンスカイの声は少し震えている。疲労ではなく、噴き出す感情だ。
    - 拳を握り、目に深い青の炎が燃える。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だからこのレースで、みんなに証明した！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボク、セイウンスカイの『青雲の志』がどんなものか！定義された姿じゃなくて、自分で選び、自分で背負い、自分で輝く姿だ！」
    - 眉を躍らせるセイウンスカイを見て、%YOU%とニシノフラワーは期せずして顔を見合わせ、笑った。
    - ニシノフラワーは前へ出て、後ろから黄と白の雛菊で編んだ花環を出し、セイウンスカイの頭へ載せた。
    - 黄白い小さな雛菊が%SEX%の濃い髪のなかでひときわ目立ち、ニシノフラワーの声は柔らかい。
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「スカイ、今お話ししていたときのあなた……どのゴールのときより、輝いていました。」
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - 「おめでとう——」
    - %YOU%の目は、隠しのない信頼と誇りでいっぱいだ。
    - 「二年前、お前と契約したとき、目に留めたのは、これからなにになれるかじゃなかった。」
    - 「あのときの俺は、もっと遠い空を見せてやりたかっただけだ。」
    - 「お前は——俺が見せたかったものだけでなく、俺が見たことのない景色まで連れてきてくれた。」
    - 「お前はとうに、自分の空を持っている。」
    - %YOU%は甘やかしながらセイウンスカイの頭を撫で、セイウンスカイの顔がわずかに赤くなり、へへととぼけて笑った。
    - 「俺も、ニシノフラワーも、おじいさんも……黙ってお前のそばにいる。」
    - 「自由に釣りをし、自由にサボり、自由に……寄り添う。」
    - 通路の外の喧騒がかすかに聞こえるが、この瞬間、ここは異常に静かだ。
    - 春風、雛菊の淡い香り、三人のあいだの、言葉にしなくていい方向。


before_sapp_kin_s:
  title: 札幌記念（前）
  lines:
    - 札幌記念、一か月前——
    - セイウンスカイは幹に寄り、秋の日程表を捲り、指先で天皇賞（秋）の日付を叩いた。
    - 突然、%SEX%は何か思い出したように、急に前へ捲った。
    - セイウンスカイの目が輝き、顔を上げた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、来月……G2重賞、札幌記念があるよね？」
    - 「ああ、八月下旬だ。興味があるのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクの実家で走るレースだよ。おじいさん、何度も言ってた。現場で重賞を見たことがないって。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、天皇賞（秋）の前に……一戦で体を温めたい。ついでに……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……秋の大きな目標に、小さな予告を。」
    - セイウンスカイの目に、少しの狡さがある。
    -
    - 札幌記念、二週間前——
    - トレーニングの合間、セイウンスカイはスポーツ紙を捲っていた。
    - 見出しは『地元の利！札幌記念展望：セイウンスカイの逃げの芸術は、どう北海道の空を支配するか？』
    - 記事は%SEX%の過去のデータを詳しく分析し、%SEX%の中長距離で「独特のリズムで逃げてレースを掌握する」高い勝率を特に強調し、
    - 今度も逃げが%SEX%にとっていちばん賢明な選択だと予測している。
    - セイウンスカイは新聞を置き、つぶやいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんなそう思うんだ……ボクはもう『設定』されてるみたい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふんふん～じゃあ今度、ボクの青雲の志を見せてあげる。」
    - 「いい考えがあるみたいだな？聞かせてくれ——」
    -
    - 数日後、作戦会議（というより%SEX%が菓子を食べながらの世間話）で、%SEX%はこの考えを出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、札幌記念……メディアが戦術まで決めてくれてる。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もし、奴らの脚本どおりにやらなかったら？」
    - %YOU%は手の資料を置いた。
    - 「たとえば？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たとえば……追込？」
    - セイウンスカイの口角に、狡い笑みが浮かぶ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最初から、しっかり後方に残る。争わない、奪わない。川辺でぼんやりしてるときみたいに、前の人を見る。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奴らが位置を争って消耗し、リズムに最初の裂け目が出るまで待って……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その裂け目から、いちばん予想しない速度と進路で、追い越す。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんなに知らせたい。セイウンスカイの『青雲の志』は、どう走るかじゃなくて、どの勝ち方も選べて、心から服させる勝ち方をする、ってこと。」
    - 「追込奇襲」の大胆な構想を聞き終えても、%YOU%は驚きや心配を見せなかった。
    - 逆に%YOU%は資料を置き、体をわずかに前へ傾け、目の底に点火された光が掠めた。
    - 「追込、か。面白い——」
    - 「メディアも相手もお前の逃げを見ている。なら、驚きをくれよう！」
    - 「だがスカイ、追込は後ろに残って見るだけじゃない。逃げより忍耐、観察、爆発の時機を試される。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わかってる！だからちゃんと計画する！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そっちはトレーナーに任せるね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自由な船は、そう簡単に操舵できないよ～」
    -
    - レース当日——
    - 陽は澄んで透き通り、緑の芝生に落ちる。
    - セイウンスカイは最後のウォームアップをしているが、視線は知らずスタンドへ流れ、見慣れた影を急いで探している。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見つけた！」
    - スタンド前列で、おじいさんが年季の入った古い麦藁帽子を被り、にこにこ%SEX%のほうを見ている。
    - 孫娘が見てくると、すぐ力いっぱい腕を振った。
    - セイウンスカイは興奮して腕を上げ、おじいさんのほうへ思いきり振り、力が強くて尻尾までついて揺れた。
    - それから%SEX%は手を下ろし、顔の笑みは褪せず、むしろ少しずつ深みを帯びる。
    - だんだん隠し、目には悪戯の光があり、みんなを振り回そうとする猫のようだ。
    - %SEX%は故郷の空気を深く吸い、振り返り、隠れた興奮を帯びた歩幅で、自分のゲートへ向かった。


sapp_kin_win_s:
  title: 札幌記念（勝）
  lines:
    - ゴールした瞬間、セイウンスカイはすぐ止まらなかった。%SEX%は慣性でさらに一段走り、勝利を確かめてから、ゆっくり減速した。
    - 胸は激しく上下し、汗が顎を伝って落ちるが、%SEX%の顔の笑みは異常に燦爛で、狂喜と得意が混ざっている。
    - %SEX%は第一に振り返り、視線を急いで探した。
    - 走路端のトレーナー区域で、一瞬で%YOU%の影を捉えた。
    - %YOU%は%SEX%に力強く一度頷き、手を上げ、大きな親指を立てた。
    -
    - レース中盤を思い出す。%SEX%がなお中後方にしっかり残り、前へ出て逃げる気配がまったくないとき、走路全体の空気はどれほど奇妙だったか。
    - 実況の困惑、スタンドから聞こえる理解できないざわめき。
    - 「セイウンスカイ、出遅れか？」「状態がおかしいのか？」「%SEX%の流儀じゃない！」と耳打ちする者までいた。
    - それらの困惑、疑い、少しの失望さえ、今は勝利のいちばんいい調味料だ。
    - セイウンスカイは早足で前へ走り、呼吸を整える暇もなく、声は興奮で少し震え、話す速さが速い。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！見た！あのコーナー！あそこに隙間ができるってわかってた！計画どおり！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「違う、計画より順調！あの角度から出てくるなんて、完全に予想してなかった！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おじいさんも絶対驚いたよね！立ち上がった？ちらっと見えた気がする！」
    - %YOU%は笑って頷き、詳しく返す前に、%SEX%はもっと大事なことを思い出したみたいに、急に話を止めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ！おじいさん！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「先におじいさんを探す！待ってるはず！あとでね！」
    - セイウンスカイの顔に焦りが閃き、急いで手を振った。
    - 言い終えると、%SEX%はスタッフの誘導が完全に終わるのも待たず、後ろで見慣れた影を探しに行った。
    - 背中はすぐ通路の曲がりで消え、軽く急な足音の連なりだけが残る。
    - そして空気に、まだ収まらない、勝利の興奮の余韻。


before_tenn_sho_s:
  title: 天皇賞（秋）（前）
  lines:
    - 朝六時半、トレーニング室内——
    - 銀杏の葉が黄ばみ始めた。
    - %YOU%がトレーニング室の扉を開けると、セイウンスカイは珍しくすでに来ている。
    - だが%SEX%はトレーニングをしておらず、窓際に立ち、爪先立ちで窓の外の枝のいちばん黄色い銀杏の葉を取ろうとしている。
    - 開く音を聞いて、%SEX%は振り返り、手には取ったばかりの葉を捏ね、目が朝の光のなかで曲がる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ——トレーナー！おはよう～驚いたでしょ～スカイがこんなに早いなんて。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見て、小魚みたいでしょ？」
    - %SEX%は歩み寄り、葉を%YOU%の目の前へ差し出した。
    - 葉柄が%SEX%の指先でわずかに震え、縁の巻いた輪郭は光の下で、たしかに静かな魚のようだ。
    - 「似てる。」
    - セイウンスカイは満足げに笑い、葉を開いたトレーニング日誌に挟んだ。
    - %YOU%は窓の外の金色と朗らかな晴天を見た。
    - 「早いな……もう秋か……」
    - %YOU%はセイウンスカイのそばへ行き、%SEX%は勢いで寄り、肩が軽く%YOU%の腕に触れる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日、天気いいね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「昼寝にぴったりだよ～」
    - 「レースにもぴったりだ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん……じゃあ終わったらトレーナーが埋め合わせしてね～」
    - 「今度はどこで寝るつもりだ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いつものところだよ。あの大木の下、この前と同じ。トレーナーが枕。」
    - 「この前は肩が硬いってこぼしたぞ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「姿勢が悪かっただけ。」
    - セイウンスカイは堂々と言い、指で%YOU%の肩を突いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今度はこう……少し斜め。そしたら寄りやすい。」
    - %YOU%は%SEX%の言うとおりに姿勢を整えた。%SEX%は寄って試し、満足げに頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うむ～合格——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これからトレーナーはスカイ専用枕だよ～」
    - セイウンスカイは顔を%YOU%の肩の前に埋め、甘える猫みたいに小さく擦った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ——トレーナー……」
    - 「ん？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日、すごくよく走れたら……特別によく……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、少し……誇りに思う？」
    - %YOU%は横を向いて%SEX%を見た。
    - セイウンスカイの睫毛は垂れ、頬に淡い影を落とす。
    - 「少しじゃない。」
    - 「ずっと、誇りだ。」
    - 「お前の初戦から、今まで、ずっとだ。」
    - 「スカイは、いつも俺の誇りだぞ～」
    - セイウンスカイは呆けた。
    - %SEX%は口を開き、何か言おうとして、声が出ない。
    - 耳の先が瞬間立ち、赤い色が急に頬へ広がる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちょ、ちょっと……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そういう話……そういう話は先に予告してよ……」
    - 「ずっとそうなことを、なぜ予告が要る？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって……心の準備が間に合わない……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「心拍、速すぎ……あとで走ったら脇腹が痛くなる……」
    - 「じゃあ言わない。」
    - 可愛い反応を見て、%YOU%はつい%SEX%をからかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……言わないで、じゃない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「と……とにかく、いい時機を選んで……」
    - 「たとえば？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たとえば……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ゴールしたあと、トレーナーが走ってきてボクを抱くとき……」
    - セイウンスカイは考え、小さく言った。
    - %YOU%は笑い、優しく%SEX%に返した。
    - 「いい。」
    - セイウンスカイはようやく顔を上げ、顔にはまだ紅潮が残るが、真剣な顔を作ろうとしている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「約束だよ。」
    - 「約束だ。」
    -
    - 更衣室内——
    - 更衣室の光は柔らかい。
    - セイウンスカイが勝負服に着替えるとき、%YOU%は%SEX%に背を向けて%SEX%に今度の戦術を復唱する。後ろから布の擦れる音と、%SEX%のたまにこぼす声が聞こえる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このボタン、また緩んだ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー——後ろのボタン、留めて——届かない。」
    - %YOU%が振り返ると、セイウンスカイの白い滑らかな背が、隠しなく目の前にある。
    - %YOU%は歩み寄り、指が%SEX%の背に触れたとき、%SEX%は小さく震えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「コホン——指、ちょっと冷たい……」
    - 「すまない。すぐ終わる。」
    - %YOU%は丁寧に留め、どこも平らに、ぴったり合うようにした。
    - 「できた。」
    - セイウンスカイは振り返り、顔は少し赤いが、目は明るい。
    - %SEX%は鏡の前で襟を整え、%YOU%が%SEX%の後ろを通るとき、%SEX%の肩の微かな皺をついでに撫でた。
    - セイウンスカイは鏡のなかで%YOU%を見て、幸せそうに笑った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「初めて会ったとき、覚えてる？」
    - 「覚えてる。お前は川辺で釣りをしていて、ウキが震えるとき何を考えてるか聞いた。」
    - セイウンスカイは両手を後ろへ回し、振り返って頭を%YOU%へ寄せた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのとき、トレーナーも前の人たちと同じで、二言言って去ると思ってた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも座って、魚の話を本当に聞いてくれた。」
    - 「面白かったからな。」
    - 「お前が言った。魚が餌を試すとき、ウキは軽く点く。本気で食いつくと、ウキは平穏に沈む、と。」
    - 「俺も、もっと大きな釣り場、もっと大きな魚があると言った。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんなに覚えてるんだ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのときまだ、このトレーナーも大口だけかなって思ってた。」
    - 「結果は？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「結果……」
    - セイウンスカイは軽く前へ出て、両手で%YOU%の顔を包んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「結果、訓練場へ連れてって、スペちゃん%THEY%の走りを見せてくれた。それから言った——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「試してみないか？釣りみたいに、自分が正しいと思う時機を探し、自分が正しいと思うやり方で。」
    - %SEX%は、あのときの%YOU%の口調を真似た。
    - 「その場で契約したな。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって、あの『隙間』を掴むのを手伝って、『大物』を釣らせてくれるって言ったから。」
    - セイウンスカイは手を離し、半歩下がり、笑みがさらに明るくなった。
    - 放送が遠くからかすかに聞こえ、時間を促す。
    - セイウンスカイは深く息を吸い、ゆっくり吐き、肩がわずかに沈み、上げたとき、顔の怠惰な懐かしさは収まり、沈静な集中に代わっている。
    - %SEX%はリュックの脇袋から二つ折りの紙を抜き、%YOU%に渡した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おじいさん、今朝また手紙をくれた。一文だけ……」
    - 「楽しく走れ。おじいさんはお前たちの帰りを待っている。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー——」
    - 「ん？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「レースが終わったら……早く帰ろうよ？おじいさんのご飯、食べたい。」
    - 「いいぞ。おじいさんに驚きを？」
    - 「そのとき、何が食べたい？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでもいい。トレーナーと一緒に食べるなら……」
    - 放送がこのとき流れ、最後の入場催促だ。
    - その羞じらいが一瞬で押し下げられた。
    - %SEX%はまた深く息を吸い、顔を上げたとき、目はすでに清明と集中に戻っている。%SEX%は最後に靴紐と裾を点検し、それから手を伸ばした。
    - 掌が触れた瞬間、%SEX%は力強く握り返した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行こう、大物を釣るよ！」
    - acc: 1
      content: 「お前の航路を導く！」


tenn_sho_win_s:
  title: 天皇賞（秋）（後）
  lines:
    - 選手が続々とゲートへ入る。
    - ゲートは、いつものゲートだ。
    - 金属の感触、空間の幅、視界を枠に切られる範囲——どれもいつもと同じだ。
    - だが今日のセイウンスカイは違う。
    - 微細だが無視できない不快が、水底の暗流のように、音もなく満ちてくる。
    - セイウンスカイは小さく眉を寄せた。
    - %SEX%は肩を動かし、立ち姿を整え、いつもの%SEX%が「まあいい」と思う位置を探そうとする。
    - だが今日は、どう整えても、枠に入れられ、制限される感覚が消えない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （……ちょっと、息苦しい。）
    - 一秒ずつ過ぎ、不快がゲート待ちの時間を引き伸ばす。
    - その苛立ちが育ち、広がる。
    - 脊椎を伝って上がり、呼吸を知らず浅くし、指先をわずかに痺れさせる。
    - ゲート内壁の冷たい感触、前方を一条の隙間に切られた視界、両側で伸ばせない空間……
    - それらの微細な知覚が、今、無限に拡大される。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （まだ開かない……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （狭い……）
    - セイウンスカイは、自分のどんどん速くなる心拍が、狭い空間で響くのまではっきり聞こえる。
    - 十秒……あるいは十五秒。
    - 苛立ちが頂点まで溜まり、満ちた貯水池のように、ゲートの縁でわずかに震える。
    - それから——
    - fontSize: 1.5rem
      content: 「ガシャン——！！！」
    - 金属ゲートが弾ける巨大な音が、苛立ちで満ちた狭い空間へ雷のように落ちた。
    - その決定的な瞬間、体が本能で飛び出すはずの零点数秒で——
    - セイウンスカイの反応が、半拍遅れた。
    - 頂点まで溜まった苛立ちが、一瞬のずれを生んだ。
    - その半歩の差。
    - 封じようとする外側の相手はすでに弦を離れた矢のように飛び出し、外側の進路を完璧に占めた。
    - セイウンスカイはすぐ目覚め、左足で強く地面を蹴り、体がばねのように内側の狭い隙間へ射出した——
    - だが真正面で、いちばん沈着な壁にぶつかった。
    - スペシャルウィークの厚い背中が、いちばん精密に設計されたように、ちょうど%SEX%の計画した理想進路に横たわっている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （まずい……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （読まれた。）
    - その思いは氷の針のように、瞬間%SEX%の頭を貫いた。
    - 囲い込みは、すでに始まっている……
    -
    - 四百メートルもせず、セイウンスカイは完全に包まれた。
    - スペシャルウィークは前方でリズムをしっかり抑え、速くもなく遅くもなく、ちょうどセイウンスカイがいちばん辛い臨界速度だ。
    - 左右の相手は訓練された影のように、%SEX%の毎回の呼吸、毎回の歩みの微調整に同期し、後方にも食い下がる追手がいる。
    - セイウンスカイが変速を試す——包囲網は息を合わせて同期して締まる。
    - 最初のコーナーで、隙間が%SEX%の目の前に現れ、次の一秒ですぐ埋められる。
    - セイウンスカイがいちばん得意な「レースを読む」が、効かなくなっている。
    - すべての「気流」——相手の呼吸、筋肉の疲れ、リズムの裂け目——が、この隙間のない壁に隔てられる。
    - 今のセイウンスカイは、ガラス箱に入れられた鳥のようだ。広い空は見えるが、翼は見えない障壁を叩くだけだ。
    - セイウンスカイの呼吸が乱れ始める。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （違う……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （戦術の劣勢じゃない……逃げる場所のない窒息だ！）
    - 計画が完全に崩れる恐慌と、体をきつく縛る抑圧が、冷たいアスファルトのように足元から満ち、粘り、重く、%SEX%の歩みを引きずる。
    - セイウンスカイの歩みが、初めて迷った。
    - いつもの余裕で、怠惰な弾力を帯びた「策士の歩み」が、見知らぬ硬さに代わられる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （突破できない……道が見えない……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （どうする……）
    - 毎回の試みが失敗し、毎回の思考が現実にきつく撥ね返される。
    - 混乱した棋局で唯一の活路を見つけられた策士が、今は死に手を両手に握っている。
    - 二本目の直線が終わろうとしている。
    - スペシャルウィークは前方で精密なリズムを保ち、左右は沈黙した堅い壁だ。
    - セイウンスカイの呼吸はどんどん重く、急になる——溺れる者が空しくもがくみたいだ。
    - 周囲の蹄音、風、観客の叫び……
    - すべての音がぼやけ、遠ざかり、厚い水幕の向こうのようだ。
    - 視界の縁が暗くなり始める。
    - 鮮明で、冷たい思いが、%SEX%の意識の表層に浮かぶ……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （今度は……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （このまま……終わり……）
    -
    - スタンドで、%YOU%は柵をきつく握った。
    - （おかしい。）
    - （最初からおかしい。）
    - （セイウンスカイが出ゲートしたときの半歩の滞り——見たことがある。）
    - %SEX%の狭い空間が嫌いな癖で、状態が悪いときにたまに出る。だが今日は違う。
    - %SEX%が出遅れたあと、スペシャルウィークが精密に封じると同時に、左右の相手も期せずして内側へ寄り、後方にも競走%UMA%がすぐ補位した。
    - %THEY%はセイウンスカイのミスを掴み、期せずして包囲網を組み、目的は明確だ——
    - セイウンスカイに観察、調整、作戦を展開する空間を与えず、物理と心理で%SEX%を完全に封じる。
    - 最初の数百メートル、まだ%SEX%の目に見慣れた「策士の光」が苦しく瞬くのが見えた。
    - だが%SEX%が顔を上げて観察しようとするたび、微細なリズムを試すたび、返ってくるのは包囲網の同期した締めと圧迫だ。
    - %THEY%は体の言葉で%SEX%に告げている。「今日は、観察する隙間も、考える時間もない。」
    - 二本目のコーナーで形勢が急転し、セイウンスカイの歩みに明らかな遅れが出、視線はスペシャルウィークの背中に死に、瞳孔が散っている。
    - %THEY%は二本目の直線へ入ろうとしている。
    - content: もう待てない！
      fontSize: 1.2rem
      fontWeight: bold
    - %YOU%は振り返って狂奔し、曲がりを突き、混雑した人波を割った。
    - 後ろの不満を無視し、二本目の直線末端の前列へ飛び、このとき競走%UMA%の大部隊がちょうど近づいている。
    - %YOU%は半身をスタンドから出し、視線を走路中央の、色が褪せていくみたいな青い影に死に固定した。
    - 吸気——
    - 胸腔の空気をすべて使い、喉の力をすべて使い、すべての焦慮、信頼、疑う余地のない信念を、吼えた。
    - acc: 1
      content: 「スカイ——！！」
    -
    - acc: 1
      content: 「顔を上げろ——！！」
    - 声が空気を裂き、すべての喧騒を圧した。
    - 走路中央、その青い影が急に震え、電流に撃たれたみたいだ。
    - acc: 1
      content: 「魚はまだいる——！！」
    -
    - acc: 1
      content: 「掴め——！！」
    - 最後の一字を吼えたとき、喉に鉄錆のような血の味が湧いた。
    - %SEX%はこちらを見ている。
    - ただ、見ている。
    - 時間が凍りついたみたいだ。
    - セイウンスカイの顔の麻痺した虚ろと、%YOU%の叫びのなかの灼熱の信念が、空気のなかで激しくぶつかる。
    - 目の前の水霧のような光が、烈風に吹き散らされる。
    - 紺碧の炎の、冷静で鋭い、策士だけの火が再び点火される。
    - 夜明けの朝の光が、セイウンスカイの目のなかで燃える。
    - セイウンスカイは深く息を吸った——遅く、長く、恐ろしく平穏だ。
    - 周囲の異様な視線を気にせず、%YOU%は崩れ座って小さく言った。
    - 「負けるな……スカイ……」
    -
    - レースは第三コーナーへ入ろうとしている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （疲れた、辛い……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （もう……だめかも……）
    - 「スカイ——顔を上げろ！！」
    - 一筋の叫びが層になった声の波を貫いた。
    - セイウンスカイが急に震え、散った瞳孔が本能で声のほうへ向く。
    - 「魚はまだいる——！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （魚……？）
    - 「掴め——！！」
    - 最後の一字が炸裂した瞬間——
    - 散った瞳孔が急に鋭い針先へ縮む。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （そうだ……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （ボクは池に閉じ込められた魚じゃない。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （ボクは釣り手だ！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （スペちゃんは山じゃない、魚だ。強く、沈着で、前方を泳いでいる大物。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （左右は壁じゃない、水流だ。魚を囲み、ボクを囲む水流。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （そして水流……隙間がある。）
    - 冷たく澄んだ理性が轟くように全身を満たし、すべての迷いが瞬間蒸発し、策士の頭が絶境で完全に目覚め、回転は普段をはるかに超える。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （第三コーナーだ……）
    - セイウンスカイの視線は精密な探針のように、左側の相手を固定した。
    - 相手の毎回の呼吸の深さ、毎歩の着地の軽重、筋肉が張るときの微細なリズムの変化を捉える。
    - 情報が流水のように頭へ入る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （相手は無理している。同期の優位を保つために、%SEX%はコーナーで残すべき体力を使い切っている。）
    - セイウンスカイの頭のなかで、計画がゆっくり浮かぶ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （このコーナーでは動かない。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （このリズムなら、隊列が最終コーナーへ入る刹那——）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （みんな次のコーナーに合わせて重心と歩みを微調整する。リズム転換の節で、注意力と体の制御がいちばん短い隙間。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （機会——あそこだ！）
    - 目標、時機、方法が、頭のなかで冷たく鮮明な模型に凝る。
    - セイウンスカイは視線を戻し、呼吸を整え、その来る瞬間のために力を溜め始めた。
    - 最終コーナーが目前だ。
    - 遠心力が弧に合わせて急に強くなる。
    - 第三コーナーと最終コーナーが繋がる臨界点——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （今だ！）
    - 左側の相手が連続コーナーの消耗と重心調整で、計画どおりの一瞬の遅れを見せた。
    - 衝突もなく、押し合いもない。
    - セイウンスカイは体の重心を、流水のように自然に外側へ導いただけだ。
    - 同時に精密なピッチ制御で、相手が疲労で少し重い歩みのそばに、より滑らかで、より経済的な一歩を踏んだ。
    - 渓流が頑石を回り、微風が林の隙間を通るようだ。
    - 相手の一瞬の遅れでできた隙間から、滑り出した。
    - 脱出——完了！
    - 脱出の慣性がまだ完全に散らないうちに、前方、スペシャルウィークの影はすでに二馬身半先行している。
    - 息を整える時間はない。セイウンスカイは最後の力を足元へ押し、追い始めた。
    -
    - 最終直線へ入る——
    - スペシャルウィークは迫る気配に気づいた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「は——あ——あ————！！」
    - 朗らかな戦吼が空気を刺す。スペシャルウィークは夜幕を裂く眩い流星のように、純粋な力で走路を碾き、後ろの追いすがる影をきつく振り払った。
    - 距離が、また無情に開く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「冗談じゃない！」
    - 肺が燃え、脚の筋肉が悲鳴を上げる。だが体より先に沸騰するのは、悔しさだ。
    - やっと抜けた檻。
    - やっと見えた道。
    - やっと……自由に走れる空へ戻った。
    - content: ここで終わるわけがない！！
      fontSize: 1.2rem
      fontWeight: bold
    - 肺の空気を全部押し出す。
    - 最後の一糸の理智も燃料に燃やす。
    - すべての作戦を脳の後ろへ捨てる。
    - 歩幅を極限まで伸ばす。
    - ピッチを臨界まで突破する。
    - content: 追いつけ！
      fontSize: 1.2rem
      fontWeight: bold
    - 逆飛ぶ青い流星のように、前方の止められない光に食い下がる。
    - 距離が少しずつ、一寸ずつ、縮み始める。
    - 最後の百メートル——
    - 半馬身。
    - 二人の目に炎が燃え、汗が額から散る。
    - 余計な思考はない。
    - 並んで轟く蹄と、同じように灼熱の呼吸だけ。
    - 最後の五十メートル——
    - 並ぶ
    - 交錯
    - また並ぶ——
    - 体を極限まで前へ傾け、腕の振りが裂けそうになる。
    - 「セイウンスカイ」という名がここまで歩んできた怠惰、狡さ、計算、誇り、そして今の隠しのない渇望——全部を最後の一歩へ注いだ。
    -
    - ゴール！
    -
    - …………
    - 風が止んだ。
    - 世界が瞬間、音を失い、心臓だけが鼓膜の上で狂ったように打つ。
    - ゆっくり減速し、止まり、両手で震える膝を支え、汗が雨のように芝へ落ちる。
    - 顔を上げると、スペシャルウィークも少し先で止まり、胸が激しく上下している。
    - スペシャルウィークが振り返り、視線が合った。
    - %SEX%は手を上げ、賛の仕草をした。
    - ボクは一瞬呆け、すぐ手を上げ、同じ仕草を返した。
    - それから、同時に笑った。
    - 大画面で、成績が更新される。
    - 1着——セイウンスカイ。
    - 鼻先の差で。
    - 「勝った——！！！」
    - 「セイウンスカイ！わずかな鼻差で！」
    - 実況の叫びとともに、場内の歓呼と叫びの波が轟くように爆発した。
    - スタンドが震え、空気が沸騰する。無数の紙吹雪と歓声が金色の奔流になり、走路中央へ押し寄せる。
    - 周囲の相手が続々とゴールし、%THEY%は歩みを緩め、呼吸を整え、視線が期せずしてセイウンスカイに落ちる。
    - 悔しさもなく、怨みもない——
    - いくつもの視線に映るのは驚嘆と、称賛だ。
    - それから拍手！
    - まだ収まらない走路の轟きのなか、競技者同士の拍手は、澄んで力強い。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「スカイさん！最後のあれ、すごくすごかった！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「だいぶ先行してると思ってたのに、スカイさんが『シュッ』て追いついてきた！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「でも今度は真ん中の走り方だったね！これもちゃんと練った計略？」
    - スペシャルウィークはセイウンスカイの前へ走り、興奮して%SEX%の肩を掴んで揺らし、目に星を浮かべて聞いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （……スペちゃんこの馬鹿、やっぱり全然気づいてない。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （%SEX%の後ろで囲まれて窒息しそうだったこと、%SEX%は考えてもないでしょ。）
    - セイウンスカイは苦笑し、荒い息で返した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （スペちゃんの末脚のほうが怖いよ。追いつけないと思った。）
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「えへへ、全力だったよ！」
    - スペシャルウィークは手を離し、両手を腰に当て、胸を張り、尻尾が後ろで愉快に揺れる。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「でも最後はスカイさんが勝った！よかった！」
    - スペシャルウィークの喜悦は率直で熱く、秋の遮るもののない陽のようだ。
    - セイウンスカイは空を見、汗が絶えず落ちる。
    - スタンドの観客へ手を振った。
    - 手を下ろすとき、セイウンスカイの視線は喧騒の走路を貫き、スタンドの柵の端から体を起こし、%SEX%へ力いっぱい手を振る影を正確に見つけた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『残金』、もらいに行くよ～」


# 結末
# TODO
# 完美结局 生涯目标全胜
perfect_ending:
  title: 万里远航，征帆归岸
  lines:
    - 水面铺满橙红色的霞光，碎金般晃动着。
    - 短信上写着「速来」，外加一个地址。
    - 青云天空坐在那截伸出水面的老旧栈桥尽头——你们初次相遇的地方。
    - 钓竿斜插在身旁，浮漂许久未动。
    - %SEX%的姿态看起来和当年没什么不同：背带裤一边肩带滑落，头发被晚风吹得有些乱，双脚泡在水里轻轻晃荡。
    - 但当%YOU%走近时，%SEX%睁开眼看向%YOU%，但和当初的眼神，已经不一样了。
    - 那里面依然有慵懒和轻松，却多了些别的东西——像水面下的暗流，沉静而深邃。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员～今天鱼群全体罢工哦。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「我听见它们在秘密会议，商量怎么对付小青这个钓得太准的「青色恶魔」哦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「是不是你昨晚偷偷来给它们特训了？」
    - 「我要是能叫它们让你空军。」
    - 「这三年你得补上多少训练。」
    - %YOU%边调侃边在%SEX%身旁坐下。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「骗你的啦～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「其实是午睡时一翻身，把整罐饵料都打翻进水里了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唉～马失前蹄咯～」
    - 晚风拂过水面，带起层层细密的涟漪。
    - 青云天空的笑声渐渐歇了，目光投向远处泛起橙金波纹的水面，忽然安静下来。
    - 浮漂在暮色中一动不动，完美的融入沉默中。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……三年了呢。」
    - 「是啊，好快。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「呐——训练员。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「记得吗？三年前坐在这里，我说『比赛就是让鱼觉得是它自己想咬钩』。」
    - 青云天空看向水面，好像看见了当年的自己。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「那时候的我，真的只把比赛当成一场……大一点的钓鱼游戏。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「赢了开心，输了也无所谓，反正还有明天的鱼可以钓。」
    - 青云天空转头看向%YOU%，霞光给%SEX%侧脸镀上温柔的轮廓，睫毛在眼下投出浅浅的阴影。
    - 「然后你成功了。」
    - 「把它们用在了最精彩的赛场上。」
    - 青云天空点点头，嘴角扬起一个淡淡的、带着怀念的笑。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「但我变贪心了。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不再只想「赢」，而是想赢得……像一片云飘过天空那么自然。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想让对手一脸惊讶的看到，作为策士也能赢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想让所有人明白，我自由自在的奔跑——也能赢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想让所有人记住，有个叫青云天空的赛%UMA%，是用最懒散的样子，跑出了最聪明，最自由的比赛。」
    - 暮色渐沉，池边的路灯一盏盏亮起，在水面投下长长的、摇晃的光柱。
    - %SEX%转过头看%YOU%，霞光映在%SEX%眼底。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「而这一切——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「都是因为三年前，有个训练员……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没对我说「你要努力」，而是问我——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「想不想钓更大的鱼……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「没有像拷上枷锁一样，要求我应该怎样跑，而是问我——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你想怎么赢。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「你一直陪在小青身边呢，一直都在。」
    - 水面平静如镜，倒映着逐渐暗下来的天空，和岸边越来越亮的灯火。
    - 青云天空看了%YOU%很久，然后忽然笑起来——
    - 一个干净、明亮、毫无保留的笑容。
    - 青云天空转身在旁边的手提箱里翻出一个精致的——相册？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这可是我最珍贵的东西哦～」
    - 青云天空向%YOU%怀里靠了靠，开始翻开那本相册一页页的介绍了起来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「看，这是训练员第一次钓到鱼的照片，你都没发现吧，嘿嘿～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「啊！这是咱俩赢得三冠后一起去澳大利亚的照片」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这张是咱俩回老家，咱俩在后山的湖边拍的。」
    - ……
    - …
    - 相册翻到最后一页，照片也定格在了青云天空生涯最后一场比赛的领奖台。
    - 合上相册，就像合上了你们这三年的点点滴滴……
    - 这三年很长，足够%YOU%与%SEX%相识到相伴
    - 这三年又很短，短到一本相册被%YOU%捧在手心。
    - 「这三年好快呢」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「合上相册的时候，莫名有些伤感呢……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「所以我准备了这个！」
    - 青云天空不知从哪掏出来一本更大更厚的相册，啪的一下扔到%YOU%怀里。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「将将！还早着呢！我都标好了！下次是亚马逊，再下次是佛罗里达……」
    - 在%YOU%震惊的说道
    - 「真是条贼船～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「哼哼～已经来不及条船了哦～」
    - 「那我要当船长！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「不行！船长是我的……」
    - ……
    - %YOU%和青云天空在金黄色的夕阳下开心的讨论着。
    - 从坎坷的过去到辉煌的现在，再到你们一起期待的未来……


normal_ending:
  title: 万里の航、帆は岸へ帰る
  lines:
    - 水面は橙赤の霞で覆われ、砕金のように揺れている。
    - 短信には「すぐ来い」と、住所が一つ。
    - セイウンスカイは、水面へ伸びた古い桟橋の先に座っている——二人が初めて出会った場所だ。
    - 竿は斜めにそばへ刺さり、ウキは長く動いていない。
    - %SEX%の姿は当時とあまり変わらない。オーバーオールの片側の肩紐が落ち、髪は夕方の風で少し乱れ、両脚は水に浸かって小さく揺れている。
    - だが%YOU%が近づくと、%SEX%は目を開けて%YOU%を見た。当時の目とは、もう違う。
    - そこにはなお怠惰と気楽があるが、別のものも増えている——水面下の暗流のように、沈静で深い。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー～今日の魚群、全員ストライキだよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「秘密会議して、釣れすぎの『青い悪魔』スカイをどうするか相談してるの、聞こえたよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーが昨夜こっそり特訓したんでしょ？」
    - 「奴らに空気を食わせろと言えればな。」
    - 「この三年、埋め合わせのトレーニングがどれだけ要るか。」
    - %YOU%はからかいつつ、%SEX%の横に座った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えー、トレーナー悪い……嘘だよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「昼寝で寝返り打って、餌の缶ごと水にひっくり返した。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ～馬失前蹄だね～」
    - 夕方の風が水面を撫で、細かい漣を立てる。
    - セイウンスカイの笑いがだんだん収まり、視線は遠く橙金の波紋を浮かべる水面へ向かい、突然静かになった。
    - ウキは暮れのなかで動かず、沈黙に完璧に溶ける。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……三年だね。」
    - 「ああ、早い。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ——トレーナー。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「覚えてる？三年前、ここに座って、『レースは魚に自分で食いつきたいと思わせること』って言った。」
    - セイウンスカイは水面を見て、当時の自分を見ているみたいだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのころのボク、本当にレースを……少し大きな釣り遊びだと思ってた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「勝てば嬉しい、負けてもどうでもいい。明日の魚はまだ釣れるから。」
    - セイウンスカイは振り返って%YOU%を見た。霞が%SEX%の横顔に優しい輪郭を鍍金し、睫毛が目の下に浅い影を落とす。
    - 「それから成功した。」
    - 「いちばん見事な走路で、それを使った。」
    - セイウンスカイは頷き、口角に淡い、懐かしさを帯びた笑みが浮かぶ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも欲張りになった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『勝つ』だけじゃなくて……雲が一枚空を流れるみたいに、自然に勝ちたかった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「相手が驚いた顔で、策士でも勝てるのを見てほしかった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんなにわかってほしかった。ボクが自由に走っても——勝てるって」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんなに覚えてほしかった。セイウンスカイって競走%UMA%が、いちばん怠惰な姿で、いちばん賢く、いちばん自由なレースを走ったって。」
    - 暮れが沈み、池の端の街灯が一つずつ点き、水面に長く揺れる光柱を落とす。
    - %SEX%は振り返って%YOU%を見た。霞が%SEX%の目の底に映る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そしてこれ全部——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三年前、トレーナーが……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『努力しろ』じゃなくて、聞いてくれたから——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もっと大きな魚、釣りたくないか……って」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「枷を嵌めるみたいに、どう走るべきか求めないで、聞いてくれた——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お前は、どう勝ちたいんだ、って。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっとスカイのそばにいてくれたね。ずっと。」
    - 水面は鏡のように静かで、暗くなっていく空と、岸のどんどん明るくなる灯を映す。
    - セイウンスカイは%YOU%を長く見て、それから突然笑った——
    - 綺麗で、明るく、隠しのない笑み。
    - %SEX%は伸びをし、手を後頭部の枕にし、またいつもの怠惰な様子に戻った。
    - さっきの真剣な話は、口から出ただけみたいだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんなに強く育てられるなんて～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見た目によらないね。トレーナーも深層の策士だよ～にゃはは～」
    - 笑いが暮れのなかで散るが、すぐ%SEX%はまた静かになり、平静な水面を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもね——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この池の魚、まだ釣り切ってないよ。」
    - それから、セイウンスカイは振り返り、%YOU%へ手を伸ばした。
    - 掌は上を向き、指は開き、濃くなる暮れのなかで優しい招待のようだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっと……一緒に釣ってくれる？」
    - %SEX%の目は薄暗い光のなかで炯々としている。
    - そこには二人で過ごした三年、無数の一緒に見た日の出と日没、勝利の歓声と敗北の涙、口に出せなくても互いがわかるすべての時間が入っている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この小さな池から……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……もっと大きな、大きな海まで。」
    - %SEX%の手は空中に懸かり、答えを待っている。
    - 夕方の風がまた起き、%SEX%の額前の髪を吹き、遠くで帰鳥の鳴き声が聞こえ、夜幕がゆっくり降りてくる。
    - そしてこの、物語が始まった水辺で、新しい問いが、未来についての答えを待っている。


# 50%（イベント『風起こり雲は馬のごとく』後は80%）全数値+3 好感+10 -サボり
ws_lazy_find_you:
  title: 捕まえたよ～
  lines:
    - 昼ごはんのあと、セイウンスカイはいつもの昼寝へ行くと言い、%YOU%は%SEX%に寝過ごすなと注意した。
    - 午後のトレーニングが始まるころ、セイウンスカイの姿はない。
    - 「こいつ……また寝過ごしたな……」
    - セイウンスカイの時折の緩さに、%YOU%はもう慣れている。
    - 「うん……さあ、今度は%SEX%がどこでサボってるか当ててみるか——」
    - acc: 1
      content: 中庭の大木の幹
      lines:
        - %YOU%は中庭いちばん太い大木のそばへ行った。
        - 顔を上げると、青い影が幹の上に崩れ、周囲の葉と一体になっている。
        - （初めて見るわけじゃないが、やはり不思議だ……）
    - acc: 2
      content: 寮の横の芝生
      lines:
        - %YOU%はセイウンスカイの寮の横の芝生へ行った。
        - セイウンスカイは両手を後頭部に回し、悠々と芝生に横たわっている。
        - （すぐ横が寮なのに、わざわざここに寝る。サボり環境には厳しいな……）
    - acc: 3
      content: 屋上の秘密基地
      lines:
        - %YOU%は学園屋上の隅へ行った。そこには海辺用のサンチェアが立ててある。
        - セイウンスカイはサングラスをかけ、隣に食べかけの果物を置き、微風のなかで深く眠っている。
        - （言われなければ海辺だと思う。こいつ、本当に享受が上手い……）
    - acc: 4
      content: 食堂裏の猫小屋
      lines:
        - %YOU%は学園食堂の裏へ行った。猫好きが立てた小さな猫小屋がある。
        - セイウンスカイは隣に張ったハンモックに寝、腕のなかには三毛が一匹、%SEX%と一緒に居眠りしている。
        - （毎回%SEX%の猫毛を処理することになるが、この光景は温かいな……）
    - acc: 5
      content: 訓練場のスタンド
      lines:
        - %YOU%は訓練場のスタンドへ行った。場では%UMA%たちが力を入れてトレーニングしている。
        - セイウンスカイは座席に横になり、寝ているように見える。
        - （またこっそり相手を観察してるのか？ただ今回はどう見ても寝てる……）
    - 「スカイ——起きろ——」


# 50%（イベント『風起こり雲は馬のごとく』後は20%）セイウンスカイスキルPt+10 トレーナー体力-200
ws_cannot_find:
  title: 捕まえられないよ～
  lines:
    - 朝の訓練場では、勤勉な%UMA%たちがすでに追い込みを始めている。
    - %YOU%も早めにトレーニング室へ入り、丁寧に書いた計画を広げ、セイウンスカイと充実した一日を始めるつもりだった。
    - 陽が昇り、外の訓練場から聞こえる掛け声も増えていく。
    - だが、%YOU%の相棒の分だけが、いつまでも来ない。
    - さらにしばらくして%YOU%が時計を見れば、約束の時間はとっくに過ぎ、%SEX%へ送ったメッセージにも返事はない。
    - 「こいつ……またサボりか……」
    - 仕方なく、%YOU%は学園中を探し回ることにした。
    - acc: 1
      content: 中庭の大木の幹
      lines:
        - 姿はなかった
    - acc: 2
      content: 寮の横の芝生
      lines:
        - 姿はなかった
    - acc: 3
      content: 屋上の秘密基地
      lines:
        - 姿はなかった
    - acc: 4
      content: 食堂裏の猫小屋
      lines:
        - 姿はなかった
    - acc: 5
      content: 訓練場のスタンド
      lines:
        - 姿はなかった
    - 午後、夕飯近くになって、セイウンスカイはのそのそとトレーニング室に現れた。


# ジュニア級5月以降 スキルPt+40
ws_next_time:
  title: 次は絶対
  lines:
    - トレーニング室の窓際、陽が暖かい黄色の将棋盤を敷いている。
    - セイウンスカイは悠々と片手で頬杖をつき、%SEX%の向かいのキングヘイローは腰と背をまっすぐにし、視線を将棋盤に固定し、表情は真剣だ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あは……どれくらい考えてる？」
    - セイウンスカイは小さな欠伸をした。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「黙って！これは戦術思考よ！」
    - キングヘイローはセイウンスカイを睨み、それから熟慮の一手を置いた。
    - 落子を見て、セイウンスカイの耳が動いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すごい一手だね～じゃあボクはこっち。」
    - キングヘイローは俯いて一目見て、瞳がわずかに縮む。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「ま、待って……今の一手、わざと？こっちへ誘ってそれから——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うんうん～」
    - セイウンスカイは隣の麦茶を口に含み、口調は平坦だ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三手前から計算してた。」
    - キングヘイローは唇を噛み、将棋盤をまる三十秒見つめた。それから深く息を吸い、手の桂を重く置いた。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「……わたくしの負けよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「にゃはは～キング、今日も真剣だね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ今日のスイーツはキングね～」
    - セイウンスカイは意地悪く言った。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「ふん——わたくしは踏み倒したりしないわ！」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「次！次は絶対勝つ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うんうん、次は絶対。」
    - キングヘイローは急に立ち上がり、両手で机の縁を支え、赤い頬に不服が滲む。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「……明日のこの時間、いるわよね？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たぶんいる？」
    - セイウンスカイは悪戯に、わざと別のほうを見た。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「たぶんいる、ってなに！いいわ、先に来る！すっぽかさないで——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ毎日なに賭ける？膝枕とかどう？」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「！！！」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「む……賭けるなら賭ける！毎日、わたくしが勝つ！」
    - キングヘイローは拗ねて睨み、ちょうどセイウンスカイのにこにこした目と合った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （すごく楽しそうだね～）


# ジュニア級8月以降 スタミナ+30 根性+30
ws_hidden_menu:
  title: 伝説の隠しメニュー
  lines:
    - 廊下で、スペシャルウィークが突然セイウンスカイの腕を掴んだ。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「スカイ！スカイ！すごい秘密を見つけた！」
    - セイウンスカイの耳が動き、まだ眠くてまぶたが喧嘩していたところを、この引きで転びそうになった。
    - %SEX%は目を細めてスペシャルウィークを見た——後者は両目が光り、尻尾が興奮で止まらず揺れている。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「食堂に伝説の隠しメニューがある！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「特定の時間、特定の窓口、おばさんに特定の合言葉を言わないと買えない！しかも——」
    - スペシャルウィークは声を落とした。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「合言葉、猫に関係ある！」
    - セイウンスカイは瞬きし、眠気が突然散った。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「一緒に張り込みしよ！」
    - セイウンスカイはスペシャルウィークの「早く一緒に来て」と書いた顔を見て、自分の好奇心も少しずつ釣られた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「隠しメニュー？面白そう……」
    -
    - 一日目。
    - 昼の十一時五十分、食堂三番窓口。
    - スペシャルウィークはセイウンスカイを引っ張ってこそこそ列に並び、時折前を覗き、緊張で耳まで震えている。
    - セイウンスカイは%SEX%の隣に立ち、珍しく眠くなく、炯々と窓口のおばさんを見ている。
    - %SEX%たちの番が来て、スペシャルウィークは深く息を吸い、窓口へ寄った。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「お、おばさん……にゃにゃ？」
    - おばさんは杓子を持ち、沈黙した。
    - content:
        - fontWeight: bold
          content: おばさん3
        - 「……は？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「あれ！にゃにゃ！」
    - おばさんの目がだんだん複雑になる。
    - content:
        - fontWeight: bold
          content: おばさんA
        - 「子よ、腹が減って幻覚でも見たのかい？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「ち、ちがう！」
    - content:
        - fontWeight: bold
          content: おばさんA
        - 「子よ、人は鉄、飯は鋼だ。ほら、おばさんが多めに盛ってやるよ！」
    - 豪快な食堂のおばさんが、セイウンスカイとスペシャルウィークに炒飯を山盛りにした。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「これじゃない——」
    - 二人は人波に列から押し出された。
    - スペシャルウィークは振り返ってセイウンスカイを見た。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「わ……間違えた？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……たぶんね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも今の問題は……飯が多すぎる！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「大丈夫スカイ！スペちゃん食べる！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボクは食べきれないよ～！」
    -
    - 二日目、昼の二時五十五分、食堂が閉まろうとしている。
    - スペシャルウィークはセイウンスカイを引っ張って食堂へ飛び込み、まっすぐ三番窓口へ向かった。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「おばさん！にゃにゃ！」
    - おばさんは片付けをしていて、振り返らずに言った。
    - content:
        - fontWeight: bold
          content: おばさんA
        - 「子よ、売り切れだ。明日は早く来なさい。」
    - スペシャルウィークは呆けた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「で、でも閉店時間に合わせて来たのに……」
    - content:
        - fontWeight: bold
          content: おばさんA
        - 「遅かったんだよ。最後の一つ、二分前に誰かが買っていった。」
    - スペシャルウィークは空の皿を抱え、雷に撃たれたみたいにその場に立った。
    - セイウンスカイは窓口の端へ行き、中を一目見た。
    - たしかに空だ。
    - %SEX%は溜息をつき、スペシャルウィークの肩を叩いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行こう。」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「でも——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行くよ。先にトレーナーの飯をたかろう～」
    - 食堂を出ても、スペシャルウィークはつぶやいている。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「どうして……どうしてこうなるの……」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「明日、明日もう一回！」
    - 二人の背中を見て、食堂のおばさんがつぶやいた。
    - content:
        - fontWeight: bold
          content: おばさんA
        - 「うちの炒飯、いつからこんなに人気になったんだ……」
    -
    - 三日目、昼の二時半、二人は早めに食堂で待っていた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「ここだ！今度は絶対間違えない！」
    - ちょうど窓口の前は誰もいない。
    - おばさんが%SEX%たちを見て、顔に笑みが浮かんだ。
    - content:
        - fontWeight: bold
          content: おばさんA
        - 「おや、来たね！」
    - スペシャルウィークは一瞬呆けた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「お、おばさん、私たちのこと知ってる？」
    - content:
        - fontWeight: bold
          content: おばさんA
        - 「もちろんさ。この二日、あたしににゃにゃ言ってた子だ。食堂中が知ってるよ。」
    - スペシャルウィークの顔が一気に赤くなった。
    - content:
        - fontWeight: bold
          content: おばさんA
        - 「でも今日は特別に多めに作っておいた——」
    - content:
        - fontWeight: bold
          content: おばさんA
        - 「ほら、熱いうちに食べなさい。」
    - 二人の目が瞬間光った。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「伝説の隠しメニュー！」
    - %SEX%は弁当箱を奪い取り、震える手で開けた——
    - 炒飯……
    - 普通の卵炒飯。青豆、人参の角、エビが入っている。見た目はよく、味も絶品だが、どう見ても普通の卵炒飯だ。
    - スペシャルウィークの笑みが固まった。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「お、おばさん……これ、違う……」
    - content:
        - fontWeight: bold
          content: おばさんA
        - 「ん？これが嫌いなのかい？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「ちがう……好き……でも欲しいのはこれじゃ……」
    - スペシャルウィークは焦って耳を震わせ、両手を空中で動かした。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「あれ！合言葉が要るやつ！伝説のやつ！ウララが、理事長がもらったって言ってたやつ！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「あれあれ！にゃにゃ！あのにゃにゃ！理事長がもらったにゃにゃ！」
    - セイウンスカイは隣に立ち、スペシャルウィークの泣きそうな様子を見て、尻尾を小さく揺らした。
    - %SEX%は一歩前へ出て、スペシャルウィークを横へ引いて慰めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スペちゃん、大丈夫。」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「うう……スカイ……みんなあるって言うの……ウララが自分で言ったの……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ウララ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その、情報は誰から？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
    - 「ウララ！%SEX%が%SEX%の目で、理事長がこの窓口でもらうのを見た！理事長がなにか言うのも聞いたって！」
    - セイウンスカイは俯いて深く考え始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （毎回、食堂が閉まる前の時間……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （猫の鳴き声みたいな合言葉……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （決まった窓口……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （理事長がもらいに来た……）
    - セイウンスカイは瞬きし、なにか当たったみたいだ。
    - %SEX%は目を閉じ、深く息を吸い、それから隣の窓口の前へ行った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おばさん、『あれ』を一つください。」
    - おばさんは%SEX%を一目見て、笑った。
    - content:
        - fontWeight: bold
          content: おばさんB
        - 「ああ、スカイか。今日のはここだよ。」
    - %SEX%は振り返り、カウンターの下から弁当箱を出し、窓口へ押した。
    - 炒飯ではなく、別の弁当箱だ。
    - スペシャルウィークがサッと駆け寄った。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「これだ！これだ！伝説の隠しメニュー！」
    - セイウンスカイは弁当箱を開けた。
    - 中は小さく切った魚と、汁を和えた飯だけだ。
    - スペシャルウィークは呆けた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「これ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毎回、食堂のおばさんにもらう、猫の残り飯。」
    - セイウンスカイは困った顔で%SEX%を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おばさんが、猫好きのために取っておいてくれるんだよ。」
    - スペシャルウィークは口を開き、しばらく言葉が出ず、石像のようだ。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「わ……三日張り込んで……つまり……」
    - セイウンスカイは弁当箱を持ち、耳を垂らしたスペシャルウィークを見て、慰めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあスペちゃん、行こう～」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「え、どこ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「猫と一緒にご飯だよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三日張り込んだんでしょ？顔、見たくない？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに猫と一緒に食べるの、別の風味があるよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これも隠しメニューだよね～」
    - セイウンスカイの提案を聞いて、失望したスペシャルウィークは気を出し、窓口の前へ走った。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「おばさん、残り全部包んで！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （この飯量、さすがスペちゃん……）


# ジュニア級11月以降 好感+50 スキルPt+30 賢さ+30
ws_punish:
  title: セイウンスカイの公開処刑
  lines:
    - 三時間目の予鈴が鳴ったばかりで、%YOU%はトレーニング室でセイウンスカイの先月のデータを整理していたところ、携帯が突然鳴った。
    - 教務主任だ。口調は熱い鍋の蟻のように急いている。先生が急に休み、他の先生は授業が埋まっており、%YOU%に一コマ代われるかと聞いている。
    -
    - %YOU%が教材を持って教室の入口へ着いたとき、扉のガラス越しに、窓際の席が一目で見えた。
    - セイウンスカイは机へうつ伏せ、顔を腕に埋め、両耳は柔らかく垂れ、尻尾が椅子の外で途切れ途切れに揺れている——よく眠っている。
    - %YOU%は扉を押した。
    - サッ——
    - 会話中の%UMA%たちの目が同時にこちらへ回り、いっせいに%YOU%を見つめた。
    - %YOU%は教壇へ上がり、喉を鳴らした。
    - 「その、今日は先生が急用で、他の先生も時間が取れないので、俺が代わる。」
    - 教室は二秒静かになり、それから後ろの列から声がした。「え？セイウンスカイのトレーナーさんじゃないですか？」
    - 「えええええ——！」
    - 言い終わるか終わらないかで——教室が一気に沸いた。
    - 「本当！？セイウンスカイのトレーナーが代講！」
    - 「聞いたよ、%YOURSEX%すごくて、セイウンスカイがサボるたびに%YOURSEX%が見つけるんだって！」
    - 「それとそれと、%YOURSEX%がセイウンスカイの走り終わる第一時間にタオルと水を出すんだって、計算済みみたいに！」
    - 「うわあ——羨ましい——」
    - 「落ち着いて見える……」
    - 窓際の席で、毛深い頭が動いた。
    - セイウンスカイが朦朧と顔を上げ、耳を二度揺らし、目はまだ完全に開いておらず、口のなかでなにかつぶやいている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……トレーナーの声、聞こえた気が……」
    - %SEX%は目を擦り、小さな欠伸をした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……悪夢？」
    - それから%SEX%は教壇に立つ人をはっきり見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——！」
    - 尻尾が「サッ」とまっすぐ立ち、%SEX%は体ごと椅子から弾き、机をひっくり返しそうになった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うわあ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ト、トレーナー！なにしに来たの！」
    - %SEX%は教室を指し、%YOU%を指し、自分を指し、指が空中で何周も回り、完整な一文が出ない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ここ、訓練場じゃないよ！」
    - 「はぁ……今言っただろ。」
    - 「先生が急用で、俺が代わる。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「代講——？！相棒が代講とか、か、変な感じ！」
    - 「ちょうど、授業中のセイウンスカイを見たかったんだ。」
    - %YOU%はどうでもいい顔で返した。
    - 「きゃ——！」
    - 教室全体が瞬間沸騰した。
    - スペシャルウィークは両手で顔を包み、目がきらきら輝き、セイウンスカイを見て%YOU%を見て、何往復もした。
    - グラスワンダーは口を押さえてこっそり笑い、肩が小刻みに揺れている。
    - キングヘイローは片手で額を支え、深く溜息をついた。
    - エルは両手を上げようとして——
    - セイウンスカイの顔が「フッ」と一気に赤くなり、顔から首の根まで赤い。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「エル、煽らないで！」
    - セイウンスカイが先に叫んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「勘違いしないで！この人、言い方が直なだけ！」
    - 言い終えると%SEX%は体ごと机へ崩れ、むすっと鼻を鳴らし、顔をさらに深く埋めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スカイ、ちょっと休む……」
    - 「ああ、そうだ。」
    - 「先生が言っていた。よく居眠りするから、今日は様子を見てくれと。」
    - 「だから今日は、しっかりな。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え！寝ちゃだめ！ひどい！」
    - 「ちょうど落ちた授業を補おう。今日はサボらせないぞ～」
    - 教室に低い笑いが広がった。
    - 「では、始める。」
    -
    - 夕方、控え室。
    - セイウンスカイはソファへうつ伏せ、動かない。もがきを諦めた魚のようだ。
    - この姿勢は%YOU%には見慣れている——%SEX%の「抗議モード」だ。
    - だいたいトレーニング量が%SEX%の予想を超えたときに出る。「疲れた、怠い、動かない、あとはお前がなんとかして」という意味だ。
    - %YOU%は水杯を茶卓に置き、%SEX%の横に座った。
    - 「もう気が済んだか。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「無理。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日はここに居座る。」
    - 「やれやれ、授業中に五回呼んだことは謝っただろ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「六回だよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最後は理由も思いつかなくて、『今日は天気がいいな、じゃあ次の問題はスカイさん』——そんな非常識な理由！」
    - %SEX%の尻尾が左右に揺れ、不満を示す。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに——」
    - %SEX%は急に起き上がり、真っ赤な顔で%YOU%を睨んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーが勝手なこと言ったせいで、一日中噂された！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『セイウンスカイとトレーナーの関係いいね』とか、『代講って言いながら相棒を見たいだけだろ』とか——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『あの二人、恋してるんじゃない』とかまで——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うわ！スカイの潔白が！」
    - %SEX%は両手で顔を覆い、ソファへ倒れた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どう責任取るの——」
    - 「はいはい。」
    - %YOU%は笑いを堪えた。
    - 抗議の尻尾が止まった。
    - セイウンスカイの指がわずかに一条の隙間を開け、片目を出し、こっそり%YOU%を一目見た。
    - それから%SEX%は急いで指を閉じた。
    - まだ考えているふりをしているが、口角はもう抑えきれず上がっている。
    - 「じゃあ、どんな埋め合わせが欲しい？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うーん……考えるね……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「先に寿司。高いほうの店。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それから——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これから……授業、多めに補講して。」
    - 「補講？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そう。スカイの潔白、ただじゃ捨てられない！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こっそり勉強して、%SEX%たちみんなを驚かせる！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これも作戦のうち、でしょ？にゃはは～」


# クラシック級9月以降 根性+20 スキルPt+40
ws_party:
  title: 優雅な茶会
  lines:
    - トレーニング室の入口で、セイウンスカイはグラスワンダーに呼び止められた。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「スカイ、明日の午後に茶会を開きます。一緒にどうですか。茶道の文化を見ていただくのもいいでしょう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「茶道文化か……」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「新しいお茶と点心が届いたんですよ～」
    - セイウンスカイは瞬きした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「点心！？行く！」
    - グラスワンダーは微笑んで返した。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「では明日午後三時、茶道室です。キングも来ます。遅れないでくださいね。」
    -
    - 翌日の午後、茶道室。
    - キングヘイローはすでに畳に座り、腰と背をまっすぐにし、前には精緻な茶器が並んでいる。
    - グラスワンダーは主座に正座し、%SEX%へ手を振った。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「スカイ、来ましたね。こちらへ。」
    - セイウンスカイは気ままに胡坐をかき、このとき%SEX%は向かいの二人に気づいた。
    - 向かいの二人はどちらも正座している——キングヘイローは苦労しているが標準で、グラスワンダーは雲のように軽い。
    - %SEX%は黙って脚を収め、正座を試した。
    - 三分後、脚が痺れ始める。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「まず——」
    - グラスワンダーは茶杯を捧げ、ゆっくり二人に見せた。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「茶杯を持つときは、右手で持ち上げ、左手で底を支えます。親指は口に触れず、音も立てません。」
    - セイウンスカイは手の茶杯を見て、普段は掴んで一気に飲むのを思い出した。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「こうよ。優雅を保つの。」
    - キングヘイローは一度見せ、動きは流水のようで、見ていて心地よい。
    - セイウンスカイは真似しようとして——茶杯が受け皿に乾いた音を立てた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんごめん。」
    - グラスワンダーは微笑んで頷いた。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「大丈夫です。ゆっくりで。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「次は点心の食べ方です。」
    - グラスワンダーは皿の精緻な小さな点心を指した。花まで彫ってあるが、一つひとつが憐れなほど小さい。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「左から食べます。懐紙で受け、手で直接持ってはいけません。一口で、噛み切らず、屑も落としてはいけませんよ。」
    - キングヘイローは一つ取り、優雅に口へ送り、途中で音もなく、%SEX%が噛むところさえ見えなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （えー、%SEX%丸飲みした？）
    - セイウンスカイも見よう見まねで一つ取った。
    - それから固まった。
    - 点心が喉に詰まり、上にも下にも行けない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「む——！」
    - セイウンスカイの耳がピンと立ち、両手を空中で慌てて動かした。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「噎せた？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「むむ！」
    - セイウンスカイは必死に頷いた。
    - キングヘイローはすぐ机の水杯を%SEX%の前へ押した。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「早く飲みなさい！まったく、ゆっくり食べなさいよ……」
    - セイウンスカイは杯を奪って飲み干し、それから長く息を吐いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふああ……助かった……」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「スカイ、点心はよく噛んで、丸飲みしてはいけません。」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「は？なに考えてるの、丸飲みするなんて？」
    - セイウンスカイは顔を上げ、恨めしそうに%SEX%を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングだって、今噛んでなかった。」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「噛んでたわよ。これが優雅——」
    - キングヘイローはゆっくり茶杯を取り、一口味わった。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「うん、今年の新茶はいいわ。口当たりが爽やかで、後味も柔らかい——」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「茶湯の色も綺麗です。透き通って、杯底の模様が見えますね。」
    - グラスワンダーが合いの手を入れ、それからセイウンスカイに一杯注いだ。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「スカイも試してみますか？」
    - セイウンスカイは茶杯を持ち、キングヘイローの真似で小さく啜った。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「いかがですか？」
    - セイウンスカイは二秒黙った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ちょっと熱い。」
    - グラスワンダーは優しく笑った。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「熱い茶のほうが香りが立つ、という意味ですね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん！うん！うん！」
    - セイウンスカイは力強く頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「正直、トレーナーが淹れるよりずっとおいしいよ～」
    -
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「茶器の話になりますと……」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「茶会での話題もあります……」
    - グラスワンダーは熱心に茶道の文化を紹介した。
    - セイウンスカイは苦労してついていった。
    -
    - 一時間後、茶会が終わった。
    - セイウンスカイは机へうつ伏せになった。
    - グラスワンダーは茶器を片付けながら、笑って尋ねた。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「スカイ、今日はいかがでしたか？」
    - セイウンスカイは元気なく答えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三千走るより疲れた。」
    - グラスワンダーは一瞬呆け、それから口を押さえて笑った。
    - キングヘイローは小さく溜息をつき、拗ねて言った。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「普段が怠惰すぎるのよ。淑女なら、これはしっかり練習するものよ……」
    - セイウンスカイはこっそりキングヘイローを一目見た。
    - 後者はなおまっすぐ正座し、表情は優雅、動きは余裕がある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キング、茶話会は終わったよ～そんなに堅くしなくていい……」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「お嬢様として、優雅を保つのは基本の教養よ。」
    - セイウンスカイは悪い笑みを浮かべて言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「脚、痺れてない？」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「……痺れてないわ。」
    - グラスワンダーが茶器を片付け終え、机のそばへ戻った。
    - セイウンスカイは立ち上がって伸びをした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「グラス！あそこのスイーツ屋のプリン、すごくおいしいよ！連れてってあげる。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「ええ、スカイの推薦なら、きっと美味しいでしょう～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キング、起きて。グラス、片付け終わったよ。」
    - キングヘイローはなお座り、動かない。
    - 沈黙のあと、%SEX%がゆっくり口を開いた。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「……もう少し座る。」
    - セイウンスカイは動かないキングヘイローを見て、悪い笑みでグラスワンダーへ呼びかけた。
    - グラスワンダーは察して同意した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「グラス、キングは行きたくないみたい。行こう——」
    - 二人が入口まで行くと、後ろから急な声がした。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「ま、待って！待って！」
    - %SEX%たちが振り返ると、キングヘイローはなおその場に正座し、顔がわずかに赤く、片手を空中に上げている。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「わたくしも……行くわ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ早く——」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「脚……脚が痺れて、立てない……」
    - セイウンスカイとグラスワンダーは腹を押さえて笑い出した。
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「笑わないで！早く助けなさいよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はいはい～今行くよ～」


# シニア級5月以降 根性+30 スキルPt+30
ws_ramen:
  title: 魔女のラーメン
  lines:
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「重大発見！」
    - エルコンドルパサーが勢いよく教室へ飛び込み、居眠り中のセイウンスカイを掴み、隣で本を読んでいたスペシャルウィークも掬い上げた。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「商店街に新しいラーメン屋ができた！ランダムラーメン大挑戦がある！」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「挑戦クリアで謎の大賞もある！」
    - セイウンスカイは欠伸をし、目を擦って尋ねた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ランダムラーメン？」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「つまり——」
    - エルの目が光った。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「入ったら先に籤を引く。当たった麺を食べなきゃいけない！爆辛、超大盛り、それから伝説の魔女ラーメンもある！」
    - スペシャルウィークの目が輝いた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「面白そう！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「行く行く！この前のラーメン挑戦、スペちゃん優勝だよ！」
    - 二人同時に興奮してセイウンスカイを見た。
    - セイウンスカイは平らな顔で返した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……じゃあボクは普通の……」
    - fontSize: 1.4rem
      content: 「だめ！！！」
    - 二人は異口同音だった。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「挑戦なら、もちろん一緒だ！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「そうそう！三人なら揃えないと！」
    - セイウンスカイは期待でいっぱいの二枚の顔を見て、溜息をついた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……わかった。」
    -
    - ラーメン屋。
    - 店は大きくないが賑やかに飾られ、壁には挑戦成功の写真がいっぱい貼ってある。
    - 店主は禿げた大男で、声が大きく、笑うととても熱心だ。
    - content:
        - fontWeight: bold
          content: 店主
        - 「いらっしゃい！三人はなににする？」
    - エルは俯いて冷たく笑った。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「ふんふんふん～もちろん——ランダムラーメン大挑戦だ！」
    - この言葉が出たとたん、店主の熱心な顔がすぐ真剣になり、陰気に言った。
    - content:
        - fontWeight: bold
          content: 店主
        - 「お前たち……覚悟はできてるか……」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「できた！」
    - エルは胸を叩いた。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「どれだけ辛いラーメンでも、怖くない！」
    - スペシャルウィークも頷いた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「どれだけ麺があっても、食べられる！」
    - セイウンスカイは口を開き、まだ言えないうちに、エルが%SEX%の肩を抱き込んだ。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「この挑戦！今日、取る！」
    - 店主は豪快に笑った。
    - content:
        - fontWeight: bold
          content: 店主
        - 「いい！気合が入ってる！さあ——籤だ！」
    - カウンターの木箱に竹籤が一列並んでいる。
    - スペシャルウィークが最初に手を伸ばし、一本抜いた。書いてあるのは——爆辛ラーメン。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「うわあ！エル！これはエルのやつ！」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「恐れるな！スペちゃん！挑戦者には挑戦者の気概が要る！」
    - エルが二番目、一本抜いた——超大盛りラーメン。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「……スペちゃん……交換しない？」
    - 店主が軽く二度咳をした。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「ふん！超大盛りくらい、怖くない！」
    - 二人がセイウンスカイを見た。
    - セイウンスカイは手を入れ、一本摸り出した。
    - 書いてあるのは——魔女ラーメン。
    - エルの目が輝いた。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「おおお！魔女！強そう！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「魔女ラーメンってなに？」
    - スペシャルウィークが店主に聞いた。
    - content:
        - fontWeight: bold
          content: 店主
        - 「それはな……うちの隠し。作り方は言えない。とにかく——」
    - 店主は頭を掻き、セイウンスカイを見て、意味ありげに言った。
    - content:
        - fontWeight: bold
          content: 店主
        - 「お嬢ちゃん、幸運を祈る。」
    - セイウンスカイはその竹籤を握り、疑いの顔をした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えっと……そんなに神秘的に……」
    -
    - 三杯が卓に並んだ。
    - スペシャルウィークの前——赤く光る一杯。麺の色まで赤く、見ているだけで鼻がむずむずする。
    - エルの前——たらい。直径が%SEX%の顔の長さに近く、具が小山のように積まれている。
    - セイウンスカイの前——
    - 普通のラーメン一杯。
    - 普通の汁、普通の麺、普通のチャーシュー、普通の葱、量はいつものより多く、汁は少し濃いかもしれないが、エルとスペちゃんのと比べたら差は大きい。
    - 三人は呆けた……
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「……これだけ？」
    - 店主はへへと笑った。
    - content:
        - fontWeight: bold
          content: 店主
        - 「魔女はな、見た目が普通だから魔女なんだ。食え食え！」
    - エルは半信半疑でその一杯を一目見て、それから自分のたらいを前へ引いた。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「もういい！開戦だ！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「開戦！」
    -
    - 十分後……
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「み、水——！」
    - スペシャルウィークが最初に敗れ、顔は真っ赤、涙がぽろぽろ流れ、水筒を抱えてがぶがぶ飲んだ。
    -
    - さらに十分……
    - エルの顔も白くなり始めた。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「だめだ……本当に入らない……」
    - %SEX%の前のたらいは半分しか減っておらず、人は制御できず後ろへ倒れる。
    - 腹は球のように高く膨らんでいる。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「む……ボ、ボク、降参……」
    -
    - さらに十分……
    - セイウンスカイは箸を置いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふああ～お腹いっぱい～味、すごくいい～」
    - %SEX%は隣の紙で口を拭き、隣の二人を見た。
    - スペシャルウィークは机へうつ伏せ、まだ立ち直っていない。
    - エルは仰向けに椅子に寄り、両手で高く膨らんだ腹を撫で、目が空洞だ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ——二人——ボク、食べ終わったよ——」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「食べ終わった！？」
    - エルは苦労して振り返り、%SEX%の汁だけの空碗を見て、目を大きく見開いた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「特別な感じとか、変な味とか、なかった？」
    - セイウンスカイは首を傾けて考えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まあ……あまり特別じゃない。せいぜい——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「麺硬め、塩野菜倍、ニンニクと油多め！」
    - セイウンスカイは一瞬呆け、今の言葉が自分の口から出たみたいだ。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「それだけ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「変……でもたしかにそう……」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「じゃあなんで魔女！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「知らない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「食べ終わったら願いが叶う？時が戻る？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「適当だよ、にゃはは～」
    - スペシャルウィークは腕のなかから苦労して顔を上げ、顔にはまだ涙の跡がある。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「スカイ……また私たちを嵌めた……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「してないよ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「店主が言ったでしょ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見た目が普通だから魔女なんだよ……」


# 外出・デート3回後、次ターン終了時
we_sword_vs_shield_1:
  title: いちばん鋭い剣？対 いちばん硬い盾！
  lines:
    - %YOU%は最近、少しおかしい。
    - セイウンスカイと出かけるたびに小さな面倒に遭うが、大事ではなく、%YOU%はついでに片付けてしまう。
    - だがセイウンスカイは胸のなかではっきりしている——全部、作戦だ。
    - トレーナーをもっと%SEX%に溺れさせ、もっと%SEX%に頼らせる作戦だ。
    - だが%SEX%がどう機会を作っても、%YOU%はいつも当然の顔をしている。
    -
    - この日出先から戻り、セイウンスカイはついに耐えきれなくなった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー。」
    - 「ん？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーって……本当に率直すぎる。」
    - %YOU%は一瞬呆けた。
    - 「えっと……は？」
    - セイウンスカイは歩みを止め、尻尾が後ろで不満げに揺れた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまり、普段恥ずかしくならないの？いつもそんなに冷静？」
    - 「……で？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボク、こんな美少女だよ！」
    - %YOU%は%SEX%の真剣な訴えに吹き出した。
    - 「なに笑ってるの！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでもない。」
    - %YOU%は%SEX%の膨れ面を見て、からかった。
    - 「じゃあちゃんと準備して、俺を恥ずかしがらせてみるか？」
    - セイウンスカイは瞬きした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……正面から恥ずかしがらせる？」
    - 「ああ、正面から。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いいよ。」
    - %SEX%は尻尾を一振りし、指を一本立てた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三日後、待ってて。」
    -
    - 三日後。
    - トレーニング後の廊下、夕陽が窓から斜めに入る。
    - セイウンスカイは%YOU%を脇へ呼び、表情はとても真剣だ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、話がある。」
    - %YOU%は壁に寄り、両手を腰に当て、戦闘態勢を整えた。
    - 「来い。」
    - セイウンスカイは深く息を吸った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （三日……三日準備した。台詞は十何回も暗記して、表情も何度も練習した……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （今だ、今。）
    - %SEX%は顔を上げ、頬がわずかに赤く、%YOU%の目を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、実はずっと——」
    - %YOU%は%SEX%を見て、目は静かで、口角に少し笑みがある。
    - セイウンスカイの耳が震えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ボ、ボクは……初めて会ったときから……」
    - セイウンスカイの声が浮き始める。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ト、トレーナーのこと……その……す、す……」
    - %YOU%は首を傾け、顔を少し近づけた。
    - 「す、なに？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「す——」
    - %SEX%は口を開き、詰まり、顔が熱くなり始める。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つ、つまり……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だめ！」
    - %SEX%は急に両手で顔を覆い、振り返って蹲り、尻尾を両脚のあいだにきつく挟んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……だめ……言えない……」
    - %YOU%は一瞬呆け、それから笑った。
    - 「それが三日かけて用意した大技か？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うう——言わないで——」
    - %SEX%の耳は血が滴りそうなほど赤く、体ごと一つに縮んでいる。
    - %YOU%は%SEX%の前へ行き、蹲って%SEX%の頭を撫でた。
    - 「スカイ。」
    - 「次も、がんばれ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……なによ！」
    - セイウンスカイは急に立ち上がり、真っ赤な顔で%YOU%を指した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「待ってて！次は……次は言い切る！」
    - 言い終えるとすぐ現場から逃げた。
    - %YOU%は%SEX%の逃げ去る背中を見た。逆立った尻尾が廊下の曲がりで一度揺れ、消えた。
    - 「待ってるぞ——」
    - %YOU%はその方向へ呼びかけた。
    - 廊下の先から、「わかったよ」か「馬鹿」かわからないつぶやきが聞こえ、足音がたたたたと遠ざかった。


# 外出・デート5回後、次ターン終了時
we_sword_vs_shield_2:
  title: いちばん鋭い剣！対 いちばん硬い盾？
  lines:
    - 気楽な午後、%YOU%とセイウンスカイは学園を歩いている。前方では%UMA%が力を入れて呼び込み、周囲には買い急ぐ%UMA%がひと群れいる。
    - content:
        - fontWeight: bold
          content: %UMA%
        - 「トレセン日報！トレセン日報です！」
    - content:
        - fontWeight: bold
          content: %UMA%
        - 「本日の超特大見出しは『好きな人に壁ドンされたら、どうする？』」
    - content:
        - fontWeight: bold
          content: %UMA%
        - 「取材先の反応、想像以上です！皇帝会長を含む著名%UMA%多数に取材！詳細はトレセン日報！ぜひお買い求めください！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え……？すごい人だね……」
    - 「名高い皇帝が壁ドンされたときの反応、知りたくない者はいないだろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%が%SEX%のトレーナーを壁ドンしたんだと思うよ、にゃはは～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そう言われると興味出てきた～一部買ってくる！」
    - セイウンスカイは賑やかな人波へ飛び込み、しばらくして苦労して抜け出してきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あは……取……取った……%SEX%たち、狂ってる……」
    - 二人は近くのベンチに座り、一面の見出しを読み始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？キングも取材されてる。先にこれ！」
    -
    - （取材）
    - if: era.get('cflag:61:招募状态') > 0 && era.get('love:61') >= 50
      lines:
        - content:
            - fontWeight: bold
              content: 記者
            - 「キングさん！一流の競走%UMA%として、あなたはいつも帝王としての優雅と強さを見せてくれます。今日この機会に、少し取材してもよろしいですか？」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「あ——はは！もちろん、好きに聞いて～」
        - content:
            - fontWeight: bold
              content: 記者
            - 「はい、今日お聞きしたいのは『好きな人に壁ドンされたら、どうしますか？』です」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - （！！！）
        - キングヘイローは質問を聞いて体が瞬間固まり、いつもの仕草が空中で止まり、動かない。
        - content:
            - fontWeight: bold
              content: 記者
            - 「あの……キングさん？」
        - キングヘイローは我に返り、すぐ軽く二度咳をして状態を取り戻した。
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「あ……コホン……えっと……今の質問に少し驚いたわ……続けましょう……」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「もしわたくしのトレーナーが突然壁ドンしてきたら——」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「一流の競走%UMA%として、こういう急な出来事には臨機応変、それから堂々と応えるものよ。」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「わたくしなら、まず余裕で聞き返すわ。たとえば『急にそんなに近く……なにかまっとうな話でも？』」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「それから言うの。『台詞の準備ができてないなら、優雅とは言えないわよ～』」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「どう？これが一流の答えよ～」
        - content:
            - fontWeight: bold
              content: 記者
            - 「素晴らしいです。ありがとうございました。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「この記者、本当に鈍いね……」
        - 「どうしてそう思う？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「『トレーナーが%SEX%の好きな人』のほうが大きいニュースなのに、そっち見てない！」
        - 「はは、キングの話が上手すぎて、そっちに全部持ってかれたんだろ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ありえない！トレーナー、賭けよう。本当に壁ドンしたら、この人絶対恥ずかしがって話せなくなるよ！」
    - if: era.get('cflag:61:招募状态') <= 0 || era.get('love:61') < 50
      lines:
        - content:
            - fontWeight: bold
              content: 記者
            - 「キングさん！一流の競走%UMA%として、あなたはいつも帝王としての優雅と強さを見せてくれます。今日この機会に、少し取材してもよろしいですか？」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「あ——はは！もちろん、好きに聞いて～」
        - content:
            - fontWeight: bold
              content: 記者
            - 「はい、今日お聞きしたいのは『好きな人に壁ドンされたら、どうしますか？』です」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - （！！！）
        - キングヘイローは質問を聞いて体が瞬間固まり、いつもの仕草が空中で止まり、動かない。
        - content:
            - fontWeight: bold
              content: 記者
            - 「あの……キングさん？」
        - キングヘイローは我に返り、すぐ軽く二度咳をして状態を取り戻した。
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「あ……コホン……えっと……今の質問に少し驚いたわ……続けましょう……」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「わたくしの好きな人は今は空席だけど、仮定して答えてあげる。」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「一流の競走%UMA%として、こういう急な出来事には臨機応変、それから堂々と応えるものよ。」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「わたくしなら、まず余裕で聞き返すわ。たとえば『急にそんなに近く……なにかまっとうな話でも？』」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「それから言うの。『台詞の準備ができてないなら、優雅とは言えないわよ～』」
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - 「どう？これが一流の答えよ～」
        - content:
            - fontWeight: bold
              content: 記者
            - 「素晴らしいです。ありがとうございました。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「台詞の準備ができてないなら、優雅とは言えないわよ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ぷ——ははは！だめ、無理！ははは！」
    - セイウンスカイはキングヘイローのいつもの仕草を真似、%SEX%の取材の様子を真似て、最後は自分から耐えきれず大笑した。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、賭けよう。本当に壁ドンされたら、この人絶対恥ずかしがって話せなくなるよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さあ、次——今度の見出し、ルドルフ会長！」
    -
    - （取材）
    - if: era.get('cflag:61:招募状态') > 0 && era.get('love:61') >= 50
      lines:
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「壁ドンされたときの反応、大胆な質問だね。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「私なら、まず少し驚き、それからすぐ形勢を分析するだろうね。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「最後は、もう少し前へ寄り、彼の後頭部を包むと思う。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「『そんなやり方で私の機嫌を取るのかい、古風だね。だが、そこまで努力したんだ、少し褒美をあげようか～』と言う。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「褒美については、私の意中の人だけが知ることだよ～」
        - content:
            - fontWeight: bold
              content: 記者
            - 「トレセン会長の意中の人！どなたですか！あるいは、少しお話しいただけますか？」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「はは、その話はまた今度にしよう。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うーん……けっこうモテるんだね……」
        - 「どうして俺だと決める？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「当たり前でしょ！同じチームだよ！」
        - 「焼きもちか？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「してない！ふん——続き見よう——」
    - if: era.get('cflag:61:招募状态') <= 0 || era.get('love:61') < 50
      lines:
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「壁ドンされたときの反応、大胆な質問だね。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「私なら、まず少し驚き、それからすぐ形勢を分析するだろうね。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「最後は、もう少し前へ寄り、彼の後頭部を包むと思う。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「『そんなやり方で私の機嫌を取るのかい、古風だね。だが、そこまで努力したんだ、少し褒美をあげようか～』と言う。」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「褒美については、意中の人ができたときにしよう～」
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - 「どうだい、少し普通すぎるかな……」
        - シンボリルドルフは眉を寄せて言った。
        - content:
            - fontWeight: bold
              content: 記者
            - 「ぜんぜん！素晴らしいです！これが伝説の『皇帝』の覇気ですか、今日は感じました！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うーん……ぜんぜん意外じゃないね……」
        - 「反撃がさっぱりしてる。生徒会の上層はみんなこんなに強いんだろうな。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うーん……ブライアン先輩とテイオー先輩は、逆にからかってきそう、にゃはは～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「さあ、さあ、続き見よう……」
    - %YOU%とセイウンスカイは話しながら新聞を見ていた……
    - ………
    - ……
    - …
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あは～見終わった～面白かった～」
    - セイウンスカイは立ち上がって伸びをした。
    - 「目が開いたな。そうだ、スカイが壁ドンされたらどうなる。恥ずかしがって話せなくなるか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありえない！この前の対決、忘れた？トレーナーをからかって顔まで赤くしたよ！」
    - 「俺の記憶では、真っ赤な顔で逃げたぞ。すごく速かった～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あれは最後に反則したから！準備できてなくて……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とにかく前の経験があるから、もう恥ずかしくならない！トレーナー相手なら造作もない！」
    - 「うんうんうん～スカイがいちばんすごい～行こう、そろそろ飯の時間だ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、そうだ！今日は鰻丼！出発！」
    -
    - %YOU%とセイウンスカイは食堂へ向かう道を歩いていた。
    - （造作もなく相手するか。なら……）
    - ドン！
    - %YOU%はセイウンスカイが気づかないうちに、左手を胸に置き、目を閉じて俯き、右手で壁ドンして%SEX%を隣の壁へ寄せた。
    - %YOU%はそれからゆっくり目を開き、顔を上げ、用意した言葉を言った。
    - 「美しい%CHARA_FULL%、あなたは……」
    - 結果、目の前は壁だけだった……
    - （ん？セイウンスカイは？成功したはずでは？%SEX%また逃げた？）
    - 壁ドン成功したと思っていた%YOU%はその場に呆け、周囲を見回してもセイウンスカイの姿はない。
    - 「おかしい……おかしいはずだ……」
    - %YOU%は俯いて考え始め、結果、見た——
    - セイウンスカイが真っ赤な顔で頭から煙を出し、地面に気を失っている……
    - 「スカイ！！！」
