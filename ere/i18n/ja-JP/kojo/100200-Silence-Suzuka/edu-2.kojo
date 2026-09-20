# @file サイレンススズカ - 育成
# @author 牛蛙煲
train:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ええ、%CALLNAME%。早く始めましょう。」
  - %CHARA% は%YOU%へ小さく頷き、体調に問題はなく、いつでも訓練できると示した。

train_success:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日の調子も、とても良いですね。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、私の記録は、良くなりましたか？」
        - %YOU%は %CHARA% へ親指を立てて見せた。
        - %CHARA% は嬉しそうに、小さく笑った。

train_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あっ……！」
  - 遠くにいた%YOU%は、鈴鹿が突然倒れたのを見て駆け寄り、%SEX%を抱き起こした。
  - acc: 1
    content: 「鈴鹿、大丈夫？ どこか、特に痛むところは？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「特に痛い、というほどではありません。ただ、体が少し硬くて、脚も重いような……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも、怪我ではありません！ まだ訓練を続けられます……っ！」
  - 鈴鹿の強い表情と、もう足元が覚束ない体を見て、%YOU%はため息をついた。
  - acc: 1
    content: 「ごめん、鈴鹿。無理をさせるべきじゃなかった。医務室へ行こう。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%、大丈夫です。私は平気です。まだ続け……」
  - acc: 1
    content: 「もし本当に何かあったら、僕は一生後悔するよ。」
  - それを聞いて鈴鹿はもう逆らわず、俯いたまま、%YOU%に支えられて医務室へ向かった。

train_additional:
  - acc: 1
    content: 「鈴鹿、もう休んでいいよ。」
  - %YOU%は手にしたストップウォッチを軽く振り、さっき一周を終えた鈴鹿へ声をかけた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「え、もうそんな時間でしたか？」
  - 意外そうな鈴鹿を見て、%YOU%は少し困った。
  - acc: 1
    content: 「そうだよ、もう遅い。戻って、きちんと休んでくれる？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あの、%CALLNAME%？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「まだ、走り足りないんです。もう一周だけ、走ってもいいでしょうか。一周だけで！」
  - すがるような目で見つめてくる %CHARA% を見て、%YOU%は——
  - acc: 1
    key: train
    content: 「分かった。一周だけだよ。」
    lines:
      - 許可を得ると、鈴鹿は小さく歓声を上げた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ありがとうございます、%CALLNAME%！ それでは、行ってきます。」
      - 流星のように疾走する鈴鹿の背を、%YOU%は少しぼんやりと見送った。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うっ、感じる前に終わってしまいました。もう一周だけ、お願いできますか……」
      - ……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「太陽が、まだ完全には沈んでいません。もう一周、時間はあります……」
      - ……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「本当に、これが最後の一周です、%CALLNAME%……」
      - ……
      - 何度もそうしているうち、鈴鹿がまたお願いしてきたとき、%YOU%は空の月を指差した。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「えええっ？ ま……まったく気づいていませんでした……」
      - %YOU%は鈴鹿を見て、笑ったまま何も言わなかった。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そ……その、そんなに見つめないでください。すぐに戻って休みますから、どうか……」
      - 見つめられて鈴鹿は照れ、ようやくもう一周走ろうとはしなくなった。
  - acc: 2
    content: 「寮長が怒るよ。」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うぅ……でも、まだ走り足りないのに……」
      - 耳がぺたんと伏せては、また立つのを繰り返す鈴鹿を見て、%YOU%は愛らしく思った。
      - acc: 1
        content: 「今日休むのは、明日もっと元気に訓練するためだよ。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「分かりました、%CALLNAME%。きちんと休みます。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも、まだ走りたい……寮まで走って戻りましょう。短い距離ですけれど……」

race_start:
  - random: true
    lines:
      - レース前、%YOU%は鈴鹿の控え室へ行き、%SEX%を励ました。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「調子はとても良いです。レース、もっと早く始まらないでしょうか。ふふ。」
  - random: true
    lines:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「見ていてください、%CALLNAME%。どの相手よりも先に、ゴールします。」

race_end:
  - if: d.rank === 1
    lines:
      - 勝った鈴鹿は両腕を広げ、勝利の喜びを味わっているようだった。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「また、あの独特な景色を見られました……」
  - if: d.rank > 1 && d.rank <= 5
    lines:
      - 鈴鹿が上の空で、どこかぼんやりしているのに%YOU%は気づいた。
      - 「やっぱり着順のせいだろう……でも、あれだけの強敵の中でこの順位は、簡単じゃない。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも%CALLNAME%、私は、先頭の景色をひとり占めしたいんです……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「次は、絶対に譲りません……」
      - 鈴鹿は両手を握り合わせ、つぶやいた。
      - 「うん、僕は鈴鹿を信じてる。次は大きく先行できるよ。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「はい、必ず！」
      - 鈴鹿は%YOU%へ小さく拳を振り、きっぱりと約束した。
  - if: d.rank > 5
    lines:
      - 鈴鹿は着順掲示板をぼんやり見つめていた。そこには%SEX%の名前がない。
      - つまり、惨敗だ。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なぜ……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やはり、執着が足りなかったのでしょうか……」
      - acc: 1
        content: 「鈴鹿、この感触を、覚えておいて。」
      - %YOU%の声を聞いて、鈴鹿は身を震わせた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……」
      - acc: 1
        content: 「次は、もっと上手くやれる。」
      - その言葉で、鈴鹿の気持ちは少し落ち着いたようだった。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「はい。次は……必ず勝ちます。」

begin_race_win:
  title: 逃げ切り
  lines:
    - %YOU%の丁寧な指導のもと、%CHARA% は危なげなくメイクデビューを制した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、ご覧になりましたか。前方の景色を、最後まで手放しませんでした。」
    - acc: 1
      content: 「うん、素晴らしかったよ、鈴鹿。まさに流星みたいだった。」
    - 勝ち帰った %CHARA% を、%YOU%は心から褒めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも走っていると、前方には、もっと美しい景色が待っている気がして……」
    - %CHARA% は終了したコースをじっと見つめ、期待を込めて言った。
    - acc: 1
      content: 「じゃあ、このメイクデビューを起点に、一緒に限界まで進もう。」
    - %CHARA% は少し呆けてから%YOU%のほうを向き、微笑んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい。一緒に頑張りましょう、%CALLNAME%。」

begin_race_lose:
  title: 追い上げ
  lines:
    - content:
        - fontWeight: bold
          content: 実況
        - 「ああ、惜しいですね、%CHARA%選手。最後に勝利を逃してしまいました。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - %CHARA% は悔しそうだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんなさい、%CALLNAME%。ご信頼に、応えられませんでした……」
    - %YOU%は複雑な気持ちで、%CHARA% の肩を叩いた。
    - acc: 1
      content: 「鈴鹿、一度の負けなんて何でもない。この先にも、数えきれない景色が待ってるよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おっしゃるとおりです。ここで足を止めるわけにはいきません……」
    - 再び闘志を灯した %CHARA% を見て、%YOU%は安堵して笑った。

begin_race_miss:
  title: 不出走
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの、%CALLNAME%。まだ少し分からなくて。計画では、きちんと……」
    - 何かの判断で、%YOU%は先週のメイクデビューに %CHARA% を出さなかった。
    - 「その、鈴鹿。まだ何か足りない気がして。完璧なスタートラインを用意したくて、だから……」
    - %YOU%は額の汗を拭い、言葉を尽くして %CHARA% に説明した。
    - %CHARA% は眉を寄せて頷いた。どうにか、その説明を受け入れたようだった。

new_year_classical:
  - %YOU%はトレーナー室で退屈そうに座り、時おり壁の時計を見上げた。
  - acc: 1
    content: 「もうこんなに経つのに……何かあったのかな。」
  - 今日は%YOU%と %CHARA% が一緒に過ごす初めての新年だ。トレーナー室で落ち合い、祝う約束をしていた。
  - だが約束の時刻を過ぎても、%CHARA% は現れない……
  - %YOU%は上着を着て、%CHARA% を探しに出ようとした。
  - そのときトレーナー室の扉が開き、冷たい風が流れ込んできた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「本当に……申し訳ありません、%CALLNAME%……私……走っていて、走っているうちに時間を忘れてしまって……」
  - 息を切らす %CHARA% の外套を手伝いながら、その説明を聞いて%YOU%は苦笑した。
  - acc: 1
    content: 「鈴鹿、やる気があるのはいいことだよ。でも今は正月休みだ。ちゃんと休んだほうがいい。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「うぅ……きちんと休みます、%CALLNAME%。」
  - %YOU%はそっと安堵の息をついた。
  - acc: 1
    content: 「さあ、鈴鹿。知り合って初めての新年を、祝おう。」
  - divider: true
  - 祝いが終わりに近づいたころ、%YOU%はあることを思い出した。
  - acc: 1
    content: 「鈴鹿、今日はクラシック級の初日だね。気づいたら、もう一年経ってた。」
  - クラシック級は、%UMA%の生涯で極めて重要な一年だ。価値の高い「クラシック三冠」と数々の有名なG1は、クラシック級から本格的に開かれていく。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「そうですね。この一年、%CALLNAME%にもお疲れさまでした。」
  - 「クラシック級か……一緒にクラシック級へ進もう、鈴鹿！ トゥインクルシリーズを席巻して、前方の景色を独り占めしよう！」
  - %YOU%は意気高く、新しい一年の展望を %CHARA% に告げた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「はい。%CALLNAME%と一緒に、頑張ります。」
  - acc: 1
    content: 「じゃあ、クラシック級の最初の目標は……」
  - %YOU%は待ちきれずに立ち上がり、机の前へ走って、何かを探し始めた。
  - acc: 1
    content: 「あった！ 鈴鹿、クラシック級の前哨戦は弥生賞にしよう。どう思う？」
  - 弥生賞は中距離のG2で、古くから「クラシック三冠」第一戦「皐月賞」の前哨戦とされてきた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「どちらでも構いません、%CALLNAME%。弥生賞……ちょうど、得意な距離ですね。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「それでは、%CALLNAME%。弥生賞に向けて、先に二周ほど走っておきます……」
  - acc: 1
    content: 「ちょっと鈴鹿、今日は休んだほうがいいよ……」
  - 闘志満々で、少し興奮しすぎている %CHARA% を見て、%YOU%は目をしばたたき、頭が痛くなった。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「えへへ、ごめんなさい。少し、浮かれすぎました……」
  - こうして%YOU%と %CHARA% は、クラシック級の最初の目標——弥生賞を定めた。

# 初めてのG1前
race_clothe:
  title: 勝負服
  lines:
    - if: era.get('cflag:2:48') === 47 + 4
      content: クラシック級の最初の月末、%CHARA% のもとへ特注の勝負服が届いた。
    - if: era.get('cflag:2:48') !== 47 + 4
      content: 初めてのG1の前、%CHARA% のもとへ特注の勝負服が届いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、勝負服が届きました。似合うかどうか、見ていただけますか？」
    - acc: 1
      content: 「とても可愛い勝負服だね。鈴鹿にぴったりだ。」
    - 白と緑の勝負服を着てくるくると回る %CHARA% を見て、%YOU%は微笑んだ。
    - %CHARA% は新しい勝負服が、よほど気に入っているようだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「勝負服を着ると、まるで別人になったようです。%CALLNAME%、今から二周走って、感触を確かめます！」
    - そう言うと、%CHARA% はトレーナー室から走り出そうとした。
    - acc: 1
      content: 「でも鈴鹿、もう夜だよ。」
    - %YOU%は困ったように、壁の時計を指した。
    - %CHARA% は照れ笑いをして、戻ってきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「新しい服を着て、興奮しすぎたのかもしれません……」
    - divider: true
    - 翌朝早く、%YOU%はわざと早く起き、学園の大通りへ出た。
    - 案の定、長く待たずに、鮮やかな色が遠くに見えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ……はぁ……え？ %CALLNAME%？ わざわざ、ここで待っていてくださったのですか……」
    - 「そのとおりだよ。鈴鹿なら我慢できずに早起きして走ると分かってたから、僕も早起きした。」
    - 勝負服のまま朝の走りをしている %CHARA% を「捕まえて」、%YOU%は少し得意だった。
    - acc: 1
      content: 「鈴鹿、勝負服で走る感触はどう？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とても良いです！ 特に勝負服の色が、私の好みに合っています。」
    - %CHARA% は生地を摘まみ、愛おしそうにしていた。
    - %YOU%は改めて、%CHARA% の白緑の勝負服を眺めた。
    - acc: 1
      key: attr
      content: 「白いのが好きなんだね。」（パワー+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ええ……白は雪を思い出させます。大雪のあとの世界は、いつも静かで、美しいですから。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「走っているときも、その静けさを楽しんでいます。」
    - acc: 2
      content: 「緑が好きなんだね。」（根性+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「緑には、万物が芽吹く感じがあります。走ると、風に押されて前へ進むようです。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だから、走っている時間は、気づかないうちに過ぎてしまいますね。」
    - %YOU%は考え込むように頷いた。
    - acc: 1
      content: 「そういうことだったんだ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから%CALLNAME%、もう少し走らせてください……」
    - %CHARA% はまだ名残惜しそうだった。
    - acc: 1
      content: 「でも、もうすぐ授業だよ。鈴鹿、準備しなくていいの？」
    - %CHARA% はやっと時刻の遅さに気づき、%YOU%に挨拶して急いで去った。

# 弥生賞出走後
# やる気+1
secret_base:
  title: 秘密基地
  lines:
    - 弥生賞の数日後、%CHARA% がトレーナー室の扉を叩いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、いらっしゃいますか？」
    - acc: 1
      content: 「どうした、鈴鹿？」
    - %CHARA% は慎重に扉を少し大きく開け、滑り込んできた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、お時間はありますか。一緒に山へ登りたいのですが。」
    - acc: 1
      content: 「山登り？ 珍しいお願いだね。遠いの？」
    - 突然現れて山へ誘う %CHARA% に、書類を処理していた%YOU%は興味を持った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ううん、それほど遠くはありません。」
    - acc: 1
      content: 「じゃあ数分待って。少し準備するから……」
    - divider: true
    - そのあと%YOU%は%CHARA%について、学園近くのある山の麓へ来た。
    - acc: 1
      content: 「鈴鹿、どうして急に山に誘ったの？」
    - %CHARA% は小さく微笑んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「上まで登れば、分かります。」
    - こうして%YOU%は %CHARA% の後ろにつき、低くはない山を、手足を使って登り始めた。
    - acc: 1
      content: 「はぁ……はぁ……思ったよりきついな。やっぱり、少し運動不足だ……」
    - 長く登った。春だというのに、%YOU%はすでに汗だくだった。
    - 一方、ずっと前を歩く %CHARA% は、薄い汗をかいているだけだった。
    - やはり、普通の人間の身体能力は%UMA%には遠く及ばない……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、少し休みませんか？」
    - %CHARA% は%YOU%のそばまで戻り、気遣って尋ねた。
    - acc: 1
      content: 「鈴鹿は待たなくていいよ。先に山頂へ行って。僕はゆっくりでも、登れるから……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だめです、%CALLNAME%。少なくとも今回は、終点まで一緒に着かせてください……」
    - %YOU%は %CHARA% に押し留められ、仕方なく少し休んだ。
    - 十分休んだあと、%YOU%と %CHARA% は一気に山頂へ登った。
    - acc: 1
      content: 「きれいだ……」
    - この山頂からは、周辺の美しい春の景色が一望できた。道中の疲れも、もう何でもないように思えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、ここの景色はいかがですか？」
    - acc: 1
      content: 「すごくきれいだ。鈴鹿、こんな場所、どうやって見つけたの？」
    - %CHARA% はそっと%YOU%に寄り添うように座った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前、朝の走りでこの山のそばを通ったとき、山頂はきっと美しいと直感が言いました。それで、来てみたんです。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それから、気が重いときはいつもここに来ます。眼下の景色を見ていると、心から楽になって、嬉しくなるんです。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ここは私の『秘密基地』です。%CALLNAME%は、私以外で最初に知った人ですよ。」
    - acc: 1
      content: 「それは光栄だね。でも、どうして最初に僕を連れてきてくれたの？」
    - %CHARA% は、少しだけ%YOU%に近づいて座ったようだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、私に遠い景色を見せてくださるのに、ご自身では見られない。だから連れてきて、私が愛している『遠い景色』を、見てほしかったんです。」
    - %YOU%は傍らの %CHARA% を見て、%SEX%の顔に満ち足りた微笑みが浮かんでいるのを見た。
    - 心が動き、見えない隔たりがひとつ、崩れた気がした。

# クラシック級の祭り
turn_overcast:
  title: 晴れのち曇り
  lines:
    - 張り詰めた夏季合宿は、すでに半分を過ぎ、心身ともに疲れが出る頃だった。
    - 合宿以来張り詰めていた気をほぐそうと、%YOU%は鈴鹿を祭りへ誘うことにした。
    - 休憩所で鈴鹿を待ったが、鈴鹿はいつまでも現れなかった。
    - いまごろどこにいるかは見当がついた。%YOU%は困ったように立ち上がった。
    - acc: 1
      content: 「おい、鈴鹿。訓練はとっくに終わってる。休もう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？ %CALLNAME%、どうしてここに？」
    - 案の定、鈴鹿は走る服に着替えて、もう少し走ろうとしていた。
    - acc: 1
      content: 「鈴鹿、今日は祭りだよ？ 一年に一度の行事を逃したら、もったいないだろ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「祭り……でも、先に少し走りたいんです。%CALLNAME%は先に行ってください。走り足りたら、あとで伺います。」
    - acc: 1
      content: 「鈴鹿が走り足りるころには、来年の祭りも終わってるよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんなに大げさなはずが！ %CALLNAME%、嘘です……」
    - 結局、鈴鹿を説得して、一緒に行くことになった。
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「祭り、とても賑やかですね。みなさん、楽しそうです。見てください、%CALLNAME%、あそこでかき氷を売っています！」
    - 祭りに溶け込めないのではと心配していたが、今となってはその心配はいらなかった。
    - かき氷に興味がありそうなので、%YOU%は鈴鹿を屋台へ連れていき、二杯買った。
    - acc: 1
      content: 「ほら、鈴鹿。合宿中がんばったご褒美だよ。」
    - %YOU%は一方を鈴鹿に渡した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当ですか？ ありがとうございます、%CALLNAME%！ ん、甘いです！」
    - acc: 1
      content: 「鈴鹿、座ってゆっくり食べよう。」
    - 鈴鹿は素直に、そばへ寄って座った。
    - if: d.hoch_sho === 1
      lines:
        - content:
            - fontWeight: bold
              content: 実況
            - 「%CHARA%が一馬身も譲らず、すでに圧倒的な勝利です！」
        - 突然実況の声が聞こえ、%YOU%と鈴鹿は同時に振り返って音源を探した。
        - 屋台の主のテレビが、鈴鹿の弥生賞勝利の映像を流していた。
        - acc: 1
          content: 「あのときの鈴鹿、本当に格好よくて、強かったな。」
        - %YOU%は心から鈴鹿を褒めた。
        - だが鈴鹿は答えず、レースに見入っているようだった。
        - %YOU%が%SEX%の視線を追うと、中継はちょうど、鈴鹿に大きく離された二着へカメラを向けていた。
        - 二着の%UMA%も汗みずくで必死に走っている。だが鈴鹿との差は、開く一方だった。
        - acc: 1
          content: 「実力のある子だね。それでも鈴鹿のほうが、もう一枚上だった。あの、鈴鹿？」
        - 鈴鹿の気持ちが沈んでいるのに、%YOU%は気づいた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だ、大丈夫です、%CALLNAME%。早く食べて戻りましょう。少し、疲れたようです……」
        - 鈴鹿は%YOU%へ、無理に微笑みを作った。
        - 状況がよく分からなかったが、%YOU%はなるべく早く鈴鹿を休憩所へ送り届けた。 # +失意
    - if: d.hoch_sho > 1
      lines:
        - content:
            - fontWeight: bold
              content: 実況
            - 「人気の%CHARA%選手、果たして勝利を掴めるか……ああ、惜しい！ %CHARA%選手に決定的なミスが出ました！」
        - 突然実況の声が聞こえ、%YOU%は振り返って音源を探した。
        - 屋台の主のテレビが、弥生賞の映像を流していた。
        - acc: 1
          content: 「鈴鹿……？」
        - %YOU%は心配そうに鈴鹿を見た。
        - 鈴鹿は答えず、自分のミスの瞬間をじっと見つめていた。
        - 再生が終わるまで、鈴鹿は我に返らなかった。
        - 鈴鹿の気持ちが沈んでいるのに、%YOU%は気づいた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、も、戻りましょう。」
        - 鈴鹿は%YOU%へ、無理に微笑みを作った。
        - どう慰めたらいいか分からず、%YOU%はなるべく早く鈴鹿を休憩所へ送り届けた。 # やる気-1
    - if: "!d.hoch_sho"
      lines:
        - content:
            - fontWeight: bold
              content: 実況
            - 「各選手、一斉にゲートを出ました。とてもきれいなスタートです！」
        - 突然実況の声が聞こえ、%YOU%と %CHARA% は同時に振り返って音源を探した。
        - 屋台の主のテレビが、弥生賞の映像を流していた。
        - acc: 1
          content: 「鈴鹿……？」
        - %YOU%は心配そうに %CHARA% を見た。本来出るはずのレースを、%SEX%は欠場していたのだ。
        - %CHARA% は答えなかった。視線は少し遊んでいるが、全力で走る%UMA%たちから外れてはいない。
        - 再生が終わっても、%CHARA% は我に返らなかった。
        - acc: 1
          content: 「鈴鹿、行こう。今夜は早めに休もう、ね？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……はい。」
        - %CHARA% は夢うつつのように答え、上の空で%YOU%について休憩所へ戻った。 # やる気-2

# 夏合宿終了
turn_cloudy:
  title: 曇りのち薄曇り
  lines:
    - 一年に一度の夏季合宿が終わり、集まった面々は賑やかに荷物をまとめ、学園へ戻る準備をしていた。
    - だが%YOU%は腑に落ちなかった。担当の %CHARA% はその騒がしい%UMA%たちの中におらず、荷物もまとまっていない。
    - 何人かに尋ねると、鈴鹿は今朝の朝走りのまま戻っていないという。%YOU%は落ち着かず、探しに出ることにした。
    - acc: 1
      content: 「鈴鹿！ 鈴鹿、どこだ、鈴——」
    - 意外なほど早く、海辺にひとり座っている鈴鹿を見つけた。
    - %SEX%は砂浜に座り、海をぼんやり見つめ、%YOU%の呼びかけにも気づかない様子だった。
    - %YOU%はもう呼ばず、そっと%SEX%のそばに座った。
    - acc: 1
      content: 「何か、気がかりなことある？ あったら、話してくれてもいいんだよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、少し、おかしいんです……」
    - 鈴鹿は、風に乗るような声で言った。
    - それを聞いて、%YOU%は一瞬止まった。
    - 確かに、合宿の後半はずっと魂が抜けたようで、機械のように%YOU%の指示をこなしているだけだった。
    - acc: 1
      content: 「もう少し、具体的に話してもらえる？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この数日、走る意味を考えていました……」
    - if: d.hoch_sho === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「レースでは、朝の走りと同じように、前方の景色を独り占めできます。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でもレースのときは、みなさんが、私のせいで前方の景色を完全に失ってしまう……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私は、レースそのものを楽しんでいるだけです。みなさんには、勝たなければならない理由があるかもしれません。それだと、フェアではないのでしょうか。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あるいは、私が%THEY%の夢を、自分の手で壊してしまったのでは……」
        - その言葉を聞いて、%YOU%はやっと思い出した。%SEX%が元気を失ったのは、祭りのテレビで二着の特写を見てからだった。
        - acc: 1
          content: 「レースなんだから、勝ち負けがあるのは当たり前だ。気にしなくていい。」
        - 鈴鹿が振り返ると、ちょうど%YOU%の強い視線と重なった。
        - acc: 1
          content: 「こう考えてみよう。レースで、毎回君の景色を奪う強敵がいたら、鈴鹿はどうする？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私は……%SEX%を新しい目標にして、正面から抜き、自分の景色を取り戻すまで……」
        - %YOU%は満足げに頷いた。鈴鹿の目に、強敵への渇望が見えたからだ。
        - acc: 1
          content: 「だから鈴鹿が前方の景色を追っているとき、同時に、ほかの相手の夢にもなっているんだよ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「みなさん……本当に、そう思っているのでしょうか、%CALLNAME%。」
        - %YOU%は答えず、静かに鈴鹿の横顔を見た。
        - しばらくして、鈴鹿は立ち上がり、体の砂を払った。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ありがとうございます、%CALLNAME%。分かったとは言えませんが、さっきよりは楽です。」
        - %YOU%も立ち上がり、遠くの宿営を見た。
        - acc: 1
          content: 「行こう、鈴鹿。学園へ戻ろう。次のレースで、本当の答えが見つかるかもしれない。」 # 失意 → 悲しみ
    - if: d.hoch_sho > 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「朝の走りでは、こんなことを気にしないのに……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でもレースのときのみなさんは、あれほど全力で、あれほど輝いていて……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%THEY%には、どうしても勝たなければならない理由があるようです。私は……気づかないうちに、%THEY%に圧倒されてしまって……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、私の勝利への執着は、レースのときのみなさんには遠く及ばないのかもしれません。でも、私だって勝ちたいんです……」
        - その言葉を聞いて、%YOU%はやっと思い出した。%SEX%が元気を失ったのは、祭りのテレビでミスの映像を見てからだった。
        - acc: 1
          content: 「鈴鹿、たまにミスをするのは普通だよ。それに、誰もいない前方の景色を譲らないこと自体が、勝利への執着じゃないか？」
        - 鈴鹿が振り返ると、ちょうど%YOU%の強い視線と重なった。
        - acc: 1
          content: 「今回、先頭の景色を独占できなかったなら、次で取り返せばいい！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わ、分かりました、%CALLNAME%。ご助言、ありがとうございます……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「次のレースでは、勝利を持ち帰ります。私のためだけではなく、あなたのためにも……」
        - %YOU%は満足げに頷いた。鈴鹿の目に、勝利への渇望が見えたからだ。
        - 鈴鹿は立ち上がり、体の砂を払った。
        - %YOU%も立ち上がり、遠くの宿営を見た。
        - acc: 1
          content: 「行こう。学園へ戻ろう。」 # やる気+1
    - if: "!d.hoch_sho"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「先頭の景色は、朝の走りで、もう何度も見ているのに……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でもレースのときのみなさんを見ると、心に欠けたところがあるようです。私にも……あそこに立つべきだったのでは……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そして思うままに走り、もう一度、美しい景色を独り占めする……」
        - その言葉を聞いて、%YOU%はやっと思い出した。%SEX%が元気を失ったのは、祭りの弥生賞再放送を見てからだった。
        - acc: 1
          content: 「次は、鈴鹿。次は君が、%THEY%の中でいちばん輝く。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「次は……そう、でしょうか。そうであってほしいです。」
        - %CHARA% は立ち上がり、体の砂を払った。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「励ましてくださって、ありがとうございます、%CALLNAME%。次は、努力します。」
        - %YOU%も立ち上がり、遠くの宿営を見た。
        - acc: 1
          content: 「行こう。荷物をまとめないといけない。」
        - %CHARA% の後ろを歩きながら、%YOU%は言いようのない息苦しさを覚えた。

# 神戸新聞杯入着
kobe_hai_end:
  title: 曇りのち晴れ
  lines:
    - if: d.rank === 1
      lines:
        - content:
            - fontWeight: bold
              content: 実況
            - 「%CHARA%が絶対的な差で——ゴール！」
        - 観客席の最前列にいた%YOU%は、鈴鹿の嬉しそうな顔を見て、そっと安堵の息をついた。
        - acc: 1
          content: 「このレースに出した判断は、正しかったみたいだ。」
        - そのあと、鈴鹿がこちらへ走ってくるのを見て、%YOU%は少し驚いた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、わ、分かりました！ ありがとうございます！」
        - 明らかに高ぶっている鈴鹿を見て、%YOU%は微笑んで、落ち着かせた。
        - acc: 1
          content: 「今度こそ、鈴鹿自身の答えが見つかったといいね。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はい、見つかりました。ただ、正しさは次のレースで、もう一度確かめたいんです。」
        - %YOU%は頷いた。あの純粋な鈴鹿が戻ってきたのが、とても嬉しかった。
        - acc: 1
          content: 「行っておいで、鈴鹿。君だけの勝利を、味わって。」 # -失意/悲しみ、やる気+1
    - if: d.rank > 1
      lines:
        - content:
            - fontWeight: bold
              content: 実況
            - 「%CHARA%は懸命に追い上げていますが、もう少し届きません……レース終了、%CHARA%は勝利を逃しました！」
        - %YOU%は着順掲示板をじっと見た。鈴鹿の名前はあるが、一番上ではない——
        - 俯いて何も言わず、両手をポケットに入れた様子は穏やかだが、拳はすでに固く握られていた。
        - 夏季合宿の終わりに鈴鹿を励ましたとき、%SEX%にはもう一度試す勇気があるように見えた。だが今回は……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、ただいま戻りました。」
        - 聞き慣れた声に、%YOU%ははっとして顔を上げ、鈴鹿が目の前に来ているのに気づいた。
        - acc: 1
          content: 「鈴鹿、君は……」
        - 慰めようとしたが、何を言えばいいか分からなかった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大丈夫ですよ、%CALLNAME%。」
        - %CHARA% は真剣に%YOU%を見た。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今回は最後まで持ちませんでしたが、レースの中で、きちんと考えることはできました。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「まだ分からないままです。でも、次のレースか、その次か。必ず、私の答えは見つかると思います。」
        - 何と言えばいいか分からず、%YOU%は最後に、あまり整わない言葉を絞り出した。
        - acc: 1
          content: 「それならよかった。鈴鹿、少なくとも、解決の見込みはある……」 # -失意/悲しみ

# 敗戦または不出走
kobe_hai_lose:
  title: 曇りのち再び曇り
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、私……」
    - 神戸新聞杯の数日後、トレーナー室でレース映像を見ているとき、鈴鹿は悲しそうに言葉を濁した。
    - %YOU%も沈んでいた。このレースは、鈴鹿の問いに何の役にも立たなかったように見えた。それどころか……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんなさい、%CALLNAME%。私……問題は、もっと深くなった気がします。」
    - 何と言えばいいか分からず、%YOU%は映像を止め、自分と鈴鹿の気を逸らそうとした。

# クラシック級10月第1週
first_step:
  title: 運命の一歩
  lines:
    - 十月のある日、%YOU%は鈴鹿をトレーナー室へ呼び、次の目標を一緒に話し合った。
    - acc: 1
      content: 「鈴鹿、クラシック級ももう後半だ。僕の目には、君はもう十分に実力のある%UMA%だよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お褒めにあずかり、光栄です、%CALLNAME%。」
    - 「だから次の目標は、もう少し価値の高いレースにしてもいいと思う。」
    - %YOU%は自分の考えを説明した。鈴鹿も、その計画が現実的かどうか考えているようだった。
    - acc: 1
      content: 「鈴鹿は、どう思う？」
    - %YOU%は机の端のレース日程表を、%SEX%へ渡した。
    - 鈴鹿は受け取り、真剣にめくり始めた。
    - しばらくして、鈴鹿は日程表を%YOU%に返した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、決めました。『天皇賞（秋）』に出ます！」
    - acc: 1
      content: 「いいね、鈴鹿。目標がはっきりしたなら、あとは怠らず努力する番だ。」
    - 鈴鹿の選んだ目標に、%YOU%はそれほど驚かなかった。
    - 天皇賞（秋）は秋の中距離三冠の一つであり、中距離G1の中でも知名度の高い頂上戦だ。
    - しかも出走資格に年の制限はなく、クラシック級の新鋭とシニア級のエリートが同じ舞台で競う、胸の躍る一戦でもある。
    - %YOU%は、いつの天皇賞（秋）かを尋ねなかった。クラシック級の天皇賞（秋）まで一月もなく、間に合うはずがない。
    - だがシニア級の天皇賞（秋）は一年以上先だ。その空白を無駄にするわけにはいかない。
    - そこで%YOU%は日程表を数ページ戻し、指を滑らせて、次の小さな目標を見つけた。
    - acc: 1
      content: 「その前に……鈴鹿、まず金鯱賞に挑戦しよう。」
    - 金鯱賞は標準的な中距離G2で、知名度は弥生賞や神戸新聞杯よりやや高い。天皇賞（秋）へ向かう道の、最初の踏み台としてちょうどいい。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい、金鯱賞に出ます。信じてください、%CALLNAME%。必ず最後の勝利を掴み、遠い景色へ、もう一歩踏み出します……」
    - こうして%YOU%と鈴鹿は、将来の第一目標である天皇賞（秋）と、その前の小さな目標である金鯱賞を定めた。

# -失意/悲しみ
new_year_senior:
  - 今日はシニア級の初日であり、%YOU%と %CHARA% が出会って三年目の始まりでもある。
  - この一年、鈴鹿は%YOU%の丁寧な指導のもと、さまざまな中距離戦を転戦し、名の知れた逃げの%UMA%となった。
  - そう思いながら、%YOU%は机の前で退屈そうにペンを回し、時おり壁の時計を見上げた。
  - トレーナー室にいるというのに、%YOU%は厚い外出着を着ていた。
  - しばらくして、柔らかいノックが聞こえた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%は、いらっしゃいますか？」
  - %YOU%はすぐ立ち上がり、トレーナー室の扉を開けた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あけましておめでとうございます、%CALLNAME%。」
  - 扉の外は、厚いダウンに包まれた鈴鹿だった。%SEX%は%YOU%が開けたのを見て、微笑んで最初の祝いを贈った。
  - 長いマフラーを巻き、外から入ったばかりで頬が赤く、とても愛らしかった。
  - 担当に見つめられて、%YOU%のほうが少し照れた。
  - acc: 1
    content: 「こちらこそ、あけましておめでとう、鈴鹿。」
  - %YOU%は自分の担当を、まともに見られなくなっていた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふふ。%CALLNAME%の準備はできているようですし、出発しましょうか。」
  - %YOU%の窮屈さに気づいたのか、鈴鹿は微笑んで話題を逸らした。
  - シニア級の目標が重い一戦「天皇賞（秋）」と決まったので、%YOU%は鈴鹿と神社へ祈願に行く約束をしていた。
  - divider: true
  - %YOU%と鈴鹿は、冬特有の寂しい空気の中を、急がず歩いた。
  - 正月のせいか、群れ歩く人はほとんどいない。ひとり歩きの人も、顔の大半をマフラーに隠し、足早に過ぎていく。
  - こう見ると、%YOU%と鈴鹿だけが、この天地にいる生き物のようだった。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふふ……」
  - その独特で美しい感触を味わっていると、傍らの鈴鹿が小さく笑った。
  - acc: 1
    content: 「何かあった、鈴鹿？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「いいえ。ただ、今回は%CALLNAME%と、誰もいない景色を分かち合えている。私にとっても、あなたにとっても、珍しい体験ではないかと思いまして。」
  - %YOU%は反射的に歩を遅くした。神社までの道が、もう少し長ければいいと思った。
  - 残念ながら神社は学園から近く、ほどなく着いてしまった。
  - %YOU%は小さなため息をつき、予定どおり鈴鹿を連れて祈願を始めた。
  - acc: 1
    content: 「……新しい一年、僕と鈴鹿が前へ進み続け、天皇賞の楯を無事に取れますように……」
  - ほかに願うこともなく、%YOU%はすぐに鈴鹿の天皇賞へ、真摯な祈りを捧げた。
  - それから傍らを見ると、鈴鹿はまだ両手を合わせて祈っていた。
  - もう少しして、鈴鹿はやっと目を開け、%YOU%の視線に気づいて微笑み返した。
  - %YOU%は急に、鈴鹿が何を願ったのか知りたくなった。
  - acc: 1
    content: 「あの、鈴鹿。願った内容を、聞いてもいいかな。」
  - 口にしたとたん、理由の分からない羞じらいが湧いた。
  - 担当に普通の質問をしただけなのに、なぜ……
  - if: (t=era.get('love:2')) < 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『天皇賞に勝ちますように』ですよ。」
      - 鈴鹿は%YOU%の窮屈さに気づいていない様子で、微笑んで願った内容を言った。
      - 予想どおりではあったが、この問いを出したこと自体に、%YOU%は意外なほど照れた。
      - acc: 1
        content: 「その……願いは済んだし、戻ろうか。」
      - %YOU%は鈴鹿の答えに何も言わず、話題を逸らそうとした。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ええ。%CALLNAME%も、新しい一年、がんばってくださいね。」
      - 鈴鹿は何も尋ねず、最初から最後まで微笑んだまま、%YOU%について学園へ戻った。
  - if: t >= 50 && t < 90
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『%CALLNAME%と一緒に、天皇賞に勝ちますように』ですよ。」
      - 鈴鹿は微笑んで願った内容を言った。それは、%YOU%が心で願ったこととまったく同じだった。
      - acc: 1
        content: 「わあ、鈴鹿。僕たちの願い、そっくりだね。」
      - %YOU%は少し興奮して言った。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「私と%CALLNAME%の絆が、もうとても強いということですね。ほら、考えまで同じなんです。」
      - 鈴鹿のほうが、より嬉しそうだった。
      - acc: 1
        content: 「それは何よりだ。戻ろう。正月の一日目は、まだやることが多いから。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「はい、行きましょう。%CALLNAME%との新しい一年、とても楽しみです。ふふ。」
  - if: t >= 90
    lines:
      - だが予想に反して、傍らの鈴鹿は顔を逸らした。
      - acc: 1
        content: 「鈴鹿？ 大丈夫？」
      - 気遣って尋ねると、自分の羞じらいのほうは忘れてしまった。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「だ、大丈夫です。平気です、%CALLNAME%……」
      - 鈴鹿の声は蚊の鳴くようで、どう聞いても平気ではなかった。
      - acc: 1
        content: 「鈴鹿？」
      - %YOU%はそっと鈴鹿の頬を支え、%SEX%の顔を少し自分のほうへ向けた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あっ、%CALLNAME%、何を……このあたり、まだ人がいるかもしれません……」
      - 鈴鹿は%YOU%の仕草に驚き、声はさらに小さく細くなった。
      - その隙に鈴鹿の様子が見えた。%SEX%の顔は赤く、熟した桃のようだった。
      - %YOU%は思わず止まった。
      - エメラルド色の瞳も逸れていて、%YOU%と目を合わせまいとしているようだった。
      - acc: 1
        content: 「鈴鹿、本当に大丈夫？ どう見ても、平気そうじゃないよ。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「本当に大丈夫です、%CALLNAME%！」
      - 次の瞬間、鈴鹿は%YOU%の手を振りほどき、顔を覆ったまま神社の外へ駆け出した。
      - acc: 1
        content: 「あっ、鈴鹿！ 足元に気をつけて！」
      - その行動に%YOU%の疑問は深まったが、考える暇もなく、鈴鹿について神社を出るしかなかった。

# 金鯱賞3着以内
kink_sho_3:
  title: 再起
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、今日はとても楽しく走れました。」
    - 走り終えたばかりなのに興奮している鈴鹿を見て、%YOU%の気持ちも明るくなった。
    - 目標が定まったなら、それに向かって努める姿が必要だ。
    - そして終わったばかりの金鯱賞での鮮やかな走りは、%SEX%の実力と覚悟を十分に示していた。
    - acc: 1
      content: 「鈴鹿、すごいよ。これで天皇賞への自信も、もっと持てる。」
    - %YOU%は心から鈴鹿を褒めた。

# 金鯱賞4着以下
kink_sho_4:
  title: 雌伏
  lines:
    - content:
        - fontWeight: bold
          content: 実況
        - 「ああ、惜しいですね、%CHARA%選手。勝利まで、あとわずかでした。」
    - 正直に言えば、%YOU%は少し落胆していた。
    - 序盤はまだ分があった。だが後半の判断ミスで、立て直せなくなった。
    - それでも、自分が鈴鹿の立場でも、より良い判断はできなかっただろうという気がした。
    - となると、天皇賞は……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんなさい、%CALLNAME%。あんなミスをするとは、自分でも思いませんでした……」
    - 耳を伏せた鈴鹿を見て、責める気持ちなど起きなかった。
    - 長くして、%YOU%はため息をついた。
    - acc: 1
      content: 「大丈夫だよ、鈴鹿。今回のミスをきちんと分析して、次は繰り返さないようにしよう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい、%CALLNAME%。今言うのは場違いかもしれませんが、今回のレースも、きちんと楽しめていました。」
    - %YOU%は頷いた。少なくとも鈴鹿の心持ちは悪くない。いま力を蓄え、機を見て飛び立てば、不可能ではない……

kink_sho_miss:
  title: 不出走
  lines:
    - 今日の空はよく、本来なら好機を逃さず訓練すべきだった。だが……
    - 鈴鹿が現れない。
    - %YOU%は少し不思議そうに空の太陽を見た。日差しの強い午前だ。鈴鹿が訓練を忘れるはずがない……
    - 仕方なく、%YOU%は鈴鹿を探しに出た。
    - divider: true
    - acc: 1
      content: 「鈴鹿？ どうして……ここにいるの？」
    - 学園の大半を回っても見つからず、落ち込んでトレーナー室へ戻り%T_NAME%へ電話しようとしたところで、思いがけず鈴鹿を見つけた。
    - そのとき鈴鹿は黙ってトレーナー室のテレビの前に座り、金鯱賞の映像を見ていた。
    - その光景に、%YOU%も黙り込んだ。何と言えばいいか分からない。
    - 鈴鹿は%YOU%が扉を開ける音を聞き、黙って立ち上がり、テレビを消した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行きましょう、%CALLNAME%。」
    - それから%SEX%は%YOU%と肩をすれ違い、ひとりでトレーナー室の外へ歩き出した。ちょうど、%SEX%の横顔が見えた。
    - %YOU%は驚いた。表情が静まり返り、感情の揺れが一ミリも見えない。
    - それが、理由の分からない恐れを呼んだ。
    - 鈴鹿はすでにトレーナー室を出ていた。考える暇もなく、%YOU%は何も言わずについていった。
    - 幸い、鈴鹿は常軌を逸したことはせず、いつものように訓練場へ行き、一日の訓練を始めた。いつもどおりだ。
    - 本当に、いつもどおりなのか……
    - %YOU%は急いで頭を振り、その考えを追い出した。

# シニア級3月第3週
second_step:
  title: 運命の二歩
  lines:
    - acc: 1
      content: 「そういうわけで、鈴鹿……」
    - 向かいできちんと座る鈴鹿を見て、%YOU%は手のレース日程表をもてあそんだ。
    - acc: 1
      content: 「天皇賞（秋）まで、まだ半年以上ある。この空白を埋めるために、もう一走してもいいと思うんだ……」
    - %CHARA% は素直に頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%の仰るとおりに。」
    - acc: 1
      content: 「鈴鹿はもう各G2で頭角を現している。G1に挑戦してもいい頃だと思う……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい、%CALLNAME%。」
    - acc: 1
      content: 「じゃあ、大阪杯はどうだろう。ヴィクトリアマイルも悪くなさそうだ。それとも安田記念のほうがいいかな。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どちらでも構いません、%CALLNAME%。」
    - %YOU%は急に言葉に詰まった。しばらくして、困ったように口を開いた。
    - acc: 1
      content: 「鈴鹿、今回は君の意見を聞いてるんだよ。もう少し、自分から選んでくれてもいい。」
    - そう言って、手の日程表を鈴鹿へ渡した。
    - すると鈴鹿は、すぐに選択を出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、では『宝塚記念』にしましょう。」
    - ファン投票で出走馬が決まるレースであり、春の中長距離三冠の締めくくりでもある宝塚記念は、価値の高さでは鈴鹿の最終目標である天皇賞（秋）にも匹敵する。
    - だが鈴鹿は、ファンのことはまったく考えていないようだった。
    - 強い%UMA%の自信、ということだろう。
    - %YOU%は広がった思考を戻し、鈴鹿へ親指を立てた。
    - acc: 1
      content: 「いい選択だ、鈴鹿。きっと良い走りをしてくれる。」

takz_kin:
  title: 宣戦
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ、行きます。」
    - color: %A_COLOR%
      content: %CHARA% はもう見慣れたゲートを見つめ、心の中で気を引き締めた。
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「%CHARA%さん、少しよろしいですか。」
    - color: %A_COLOR%
      content: 自分の名を呼ぶ%UMA%がいて、%CHARA% は少し不思議そうに振り返った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ、%CALL_18%でしたか。今回も、どうか手加減を。」
    - color: %A_COLOR%
      content: 来たのは %CHARA% の同級生 %A_NAME% であり、同じくシニアの中距離%UMA%で、レース経験は %CHARA% に劣らない。
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「ふふ。手加減を、と言うなら、私がそちらに言うべきでしょう。」
    - color: %A_COLOR%
      content: %A_NAME%も笑った。その目にも、勝利と強敵への渇望が見えた。
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「あら、ここは随分と賑やかなのですね。」
    - color: %A_COLOR%
      content: %CHARA% と%A_NAME%が揃って振り返ると、もうひとりの実力ある同級生、%G_NAME%がいた。
    - color: %A_COLOR%
      content: %G_NAME%は %CHARA% と%A_NAME%の後輩だが、実力は侮れない。クラシック級でも、次々と栄誉を掴んできた。
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「ああ、君も宝塚記念に出るのか。なら私は全力を出すしかないな。勝利は、簡単には譲らないよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ。私も、どなたより先にゴールします。」
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「お二方の先輩がこれほど燃えているなら、私もきちんと向き合わねば。今回も頂きます。これまでどおり、ですよ。」
    - color: %A_COLOR%
      content: 三人の%UMA%は互いに視線を合わせ、相手の目に戦意を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「時間です。みなさん、始めましょう。」

takz_kin_win:
  title: 先を争う
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ、はぁ……」
    - color: %A_COLOR%
      content: %CHARA% は巨大な着順掲示板の下で息を整え、時おり一番上の自分の名を見上げた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「勝ちましたね。」
    - color: %COLOR%
      content: 終わったばかりの宝塚記念で、%CHARA% は二人の強敵と正面からぶつかり、最後に勝って優勝を掴んだ。
    - color: %COLOR%
      content: それを思うと、淡白な %CHARA% でさえ、少し誇らしげに微笑んだ。
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「やはり、鈴鹿の実力は噂どおりだった。」
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「%11_CALL%の超一流の逃げは、本当に手に負えませんでした。最初に止められなければ、あとはもう機会がありません。」
    - color: %COLOR%
      content: 二人の強敵%UMA%がゆっくり歩み寄り、%CHARA% と並んで立ち、感慨深そうに言った。
    - color: %COLOR%
      content: %CHARA% は%THEY%二人の目に後悔を見なかった。あるのは羨望と、強敵への憧れだけだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お二人の実力も、侮れません。ふふ。さっきのレースでも、かなりの圧力をいただきました。」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「では、先に宣戦させてくれ——鈴鹿、次にコースで会ったときは、もっと大きな圧力をかけてあげる。」
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「あるいは、私たちが直接%11_CALL%を抜き、%11_CALL%の仰る圧力を、自分で味わうかもしれません……」
    - color: %COLOR%
      content: 二人の%UMA%は淡々と、次の宣戦を %CHARA% へ突きつけた。
    - color: %COLOR%
      content: %CHARA% は二人の相手を見て、小さく笑った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ。お二人との次のレース、とても楽しみです。それから、一番前の景色は、絶対に簡単には譲りません。」
    - color: %COLOR%
      content: 三人の%UMA%は互いの目に、燃えるような熱を見た。

takz_kin_3:
  title: 並走
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「負けました……」
    - color: %COLOR%
      content: 巨大な着順掲示板の一番上には、まぎれもなく%G_NAME%の名があった。
    - color: %COLOR%
      content: レースが始まると、%CHARA% は予定どおり一気に先頭を奪った。
    - color: %COLOR%
      content: 終盤まで、%G_NAME%は常人には信じがたい根性で %CHARA% に迫り、一気に抜き去った。
    - color: %COLOR%
      content: 大逃げは%UMA%のスタミナを恐ろしく削る。%CHARA% は%G_NAME%がゆっくり前へ出るのを見るしかなく、もう一度加速することはできなかった。
    - color: %COLOR%
      content: 結局、%G_NAME%の手に惜敗した。
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「同期の相手が、君はコース上の『怪物』だと言っていた。今見ると、その呼び方は本当に似合っている。」
    - color: %COLOR%
      content: 同じく%G_NAME%に離された%A_NAME%も歩み寄り、まだ余韻の残る顔だった。
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「先輩がた、お手柔らかに。」
    - color: %COLOR%
      content: %G_NAME%も歩み寄ってきた。それほど疲れてはいない様子だった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当に強い末脚でした。ゆっくりと、逃げの優位を奪われてしまいました。余目にあなたが見えたときは、驚きましたよ。」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「はは、私も見たよ。鈴鹿が抜かれたときの顔は、信じられない、という顔だった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え、本当ですか。そんな……」
    - color: %COLOR%
      content: 後輩に抜かれても先輩が不機嫌にならないのを見て、%G_NAME%の気持ちもかなり楽になった。
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「それにしても、先輩がたの実力も本当に強い。できれば、これほど素晴らしいレースをくださったことへ、お礼を言いたいくらいです。」
    - color: %A_COLOR%
      content:
        - fontWeight: bold
          content: %A_NAME%
        - 「それなら次は、私が君たちに礼を言う番かもしれないな？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう。まだ始まってもいないのに、勝利のことまで考えているのですか。」
    - color: %COLOR%
      content: 三人の%UMA%は揃って笑った。
    - color: %G_COLOR%
      content:
        - fontWeight: bold
          content: %G_NAME%
        - 「それでは次のレースも、先輩がた、よろしくお願いします。」
    - color: %COLOR%
      content: %CHARA% と%A_NAME%は揃って頷いた。三人の%UMA%は互いの目に、勝利への渇望を見た。

takz_kin_lose:
  title: 遅れ
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つ、疲れました……」
    - color: %COLOR%
      content: 中距離一走で %CHARA% の体力がそこまで尽きるはずはない。だが %CHARA% は、もう指一本動かす力もない気がしていた。
    - color: %COLOR%
      content: 実際、%SEX%はスタミナをきちんと蓄えていた。それが……
    - color: %COLOR%
      content: %A_NAME%と%G_NAME%、そして後続のほかの%UMA%に、次々と抜かれるまで。
    - color: %COLOR%
      content: %CHARA% は、自分が入着しているかどうかさえ、もう気にしたくなかった。
    - color: %COLOR%
      content: 残った力で頭を%A_NAME%と%G_NAME%のほうへ向けると、%THEY%は楽しそうに話していた。
    - color: %COLOR%
      content: そうだ。勝者の心持ち……
    - color: %COLOR%
      content: %CHARA% は自嘲するように、小さく笑った。

summer_end:
  - 光陰矢の如し。シニア級の夏季合宿も、もうすぐ終わる。
  - クラシック級の前轍があるので、合宿中%YOU%は鈴鹿の精神状態を常に気にかけていた。
  - だが何も起きなかった。鈴鹿は%YOU%が課した訓練を、どれも高い質でこなした。
  - いまは合宿の最終日、%YOU%と鈴鹿は荷物をまとめている。
  - 「必ず天皇賞を取る」と書いた標語を袋へしまう鈴鹿を見て、%YOU%はあることを思い出した。
  - acc: 1
    content: 「鈴鹿、急に思ったんだけど……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「はい？」
  - 「天皇賞は、東京のコースで行われるよね。君、まだ東京のコースでレースを走ったことないだろ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「では%CALLNAME%は、どのレースをご覧になっていますか。同じく東京競馬場の、毎日王冠でしょう。」
  - 鈴鹿の手元は一瞬も止まらなかった。%YOU%がそう聞くと、最初から分かっていたかのようだった。
  - 頭を掻いた。これほど賢い担当の前では、もう言うこともない。
  - acc: 1
    content: 「賢いね、鈴鹿。僕が見込んだ%UMA%だ。言いたいことが、一瞬で分かった。」
  - %YOU%は仕方なく、鈴鹿へ親指を立てた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%、そんな言い方は困ります。恥ずかしいです……」
  - 整理の手が一瞬止まり、%SEX%は鍛錬用のビーチバレーを掲げ、%YOU%へ投げる仕草をした。
  - %YOU%は大げさに驚いたふりをして、横へ避けた。
  - ほどなく皆が荷物を終え、学園へ戻る車に乗った。
  - acc: 1
    content: 「じゃあ鈴鹿、次の目標は毎日王冠だ。まずは東京競馬場のコースに慣れること。勝ち負けは二の次で……」
  - 言い終わるか終わらないかのうちに、鈴鹿が首を横に振った。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「いいえ、%CALLNAME%。ご指示どおりコースには慣れます。ですが、勝利も必ず頂きます。」
  - %YOU%は一瞬呆け、それから小さく笑った。
  - acc: 1
    content: 「うん、僕は鈴鹿を信じてる。きっと、きちんと果たしてくれる。」

# シニア級10月第2週終了
curse:
  title: 呪い
  lines:
    - 秋風が吹き、%YOU%はコートをきつく巻き、学園へ戻る足を速めた。
    - いま%YOU%は学園から少し離れた通りを歩いており、右手には一袋の「ロイヤル特製蜂蜜ニンジンパイ」を提げていた。
    - 重い一戦である天皇賞（秋）が近づき、担当 %CHARA% の訓練もますます厳しくなっている。
    - %YOU%が何時に訓練場へ着いても、自主練をしている鈴鹿を見つける。
    - だから鈴鹿のやる気を上げようと、今日も早起きして、%UMA%たちに人気の「ロイヤル特製蜂蜜ニンジンパイ」を買いに来た。
    - 早く出たつもりでも、長い列に並ばされ、戻ろうとしたころには空がすっかり明るかった。
    - 訓練計画はすでに鈴鹿へ伝えてある、そう思いながら、傍らの高い建物で朝のニュースを流す巨大スクリーンを、上の空で見た。
    - ちょうどニュースが終わり、画面に何人かの%UMA%の写真が現れた。
    - %YOU%は足を止めた。画面の真ん中は、まぎれもなく鈴鹿の写真だった。
    - content:
        - fontWeight: bold
          content: 司会
        - 「人気一番は、やはりこの%UMA%でしょう！ 円熟した超一流の逃げ、めったに敵を許さず、始まりから終わりまで先頭を譲らない%CHARA%！」
    - 胸に小さな誇りが湧いた。自分の担当が大画面でこれほど讃えられる日は、毎日あるわけではない。
    - しかも来る天皇賞（秋）の人気一番——予想どおりの結果ではあったが。
    - %YOU%は足を速め、早く学園へ戻り、「ロイヤル特製蜂蜜ニンジンパイ」を鈴鹿へ渡したくなった。
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「%CHARA%か。前に%SEX%のレースを見たけど、本当に覇気があったよ。」
    - content:
        - fontWeight: bold
          content: 通行人B
        - 「ああ。ゲートを出てから強く逃げる。後ろの選手は、レース中ずっと%SEX%の三馬身以内に入れなかった。」
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「%SEX%が人気一番なのは、当然だよな。」
    - 通行人の会話を聞き、誇りはさらに増した。%YOU%はそっと歩を遅くし、鈴鹿への称賛をもう少し聞きたかった。
    - content:
        - fontWeight: bold
          content: 通行人B
        - 「そうだな。今度も完璧な大逃げで、相手を遠くへ置いて、天皇賞の楯を取ってほしい。」
    - 通行人Bが感慨深そうに言うと、通行人Aの表情が少し変わった。
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「ほかはともかく、勝ちだけは、%CHARA%をあまり買えないんだよな……」
    - その言葉に、%YOU%と通行人Bは同時に驚いた。
    - content:
        - fontWeight: bold
          content: 通行人B
        - 「どうしてそう言うんだ？ %CHARA%の実力は、俺たちも一緒に見てきただろ。」
    - 通行人Aは暗い顔で首を振った。
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「実力は一面だ。勝つには実力だけじゃ足りない。運も要る。」
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「知らないかもしれないが、天皇賞（秋）には昔から『人気一番は勝てない』という呪いがあるんだ。」
    - ここまで聞いて、%YOU%はもう黙っていられなかった。
    - acc: 1
      content: 「あの、お二人さん。その話は、どこから来たものですか。」
    - 二人の通行人は少し驚いて振り返った。
    - content:
        - fontWeight: bold
          content: 通行人B
        - 「この方、手に持ってるものからして、トレセンのトレーナーさんか？」
    - %YOU%は小さく頷いた。「ロイヤル特製蜂蜜ニンジンパイ」は、ほとんど%UMA%が買うものだ。
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「どう言えばいいか。この呪いは東京競馬場の観客のあいだで口伝えされていて、わりとよく当たる呪いの一つなんだ。」
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「何年も天皇賞（秋）を見てきたが、この呪いの当たり方は、想像を超えてるよ。」
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「人気一番の選手を何人も見てきた。パドックでは華やかで、もう勝ったも同然みたいだった。」
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「だがレースが始まると、%THEY%は呪われたみたいに、出遅れ、斜行、焦り……」
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「一番はおろか、入着できる%UMA%すら、ほとんどいなかった。」
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「それに聞いた話だが……ずっと昔、逃げの%UMA%が天皇賞（秋）でバランスを崩して転倒し、脚を折って、そのままコースを去って、一生沈んでいたそうだ……」
    - 目が回り、手の「ロイヤル特製蜂蜜ニンジンパイ」を落としそうになった。
    - acc: 1
      content: 「呪い、なんて話の信憑性は、まだ検討の余地がありますよね……？」
    - %YOU%は泣いているほうがマシな笑顔を、無理に作った。
    - content:
        - fontWeight: bold
          content: 通行人A
        - 「最初は僕も信じてなかった。でも目は嘘をつかない。調べてみるといい。ここ数年の天皇賞（秋）の人気一番を……」
    - %YOU%は魂の抜けたようにその場に立ち、二人が遠ざかるのを見送った。
    - 以前集めた天皇賞（秋）の資料を思い出した。「人気一番」と「一着」の名簿が、ほとんど重ならないこと……
    - 長くしてやっと我に返ると、大画面の天皇賞（秋）特集はすでに終わっていた。
    - acc: 1
      content: 「だめだ。僕は鈴鹿のトレーナーだ……僕まで%SEX%を信じられなかったら、誰も信じない。」
    - 手の「ロイヤル特製蜂蜜ニンジンパイ」を見、鈴鹿と過ごした日々を思い、結局は早く学園へ戻ることにした。
    - divider: true
    - 学園へ戻り、訓練場で走り続ける鈴鹿を見て、気持ちは複雑だった。
    - acc: 1
      content: 「鈴鹿、鈴鹿！ ちょっと来て！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ、はぁ……%CALLNAME%、お戻りでしたか。」
    - %YOU%の呼びかけを聞いて、鈴鹿は歩み寄ってきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの、%CALLNAME%、大丈夫ですか。今の顔色が、とても悪いです……」
    - %YOU%の様子を見て、鈴鹿は焦っていた。
    - 一瞬呆けてから、胸に温かさが広がった。
    - acc: 1
      content: 「心配してくれてありがとう。大丈夫だよ。実は、これを見せたくて——」
    - %YOU%は鈴鹿へウインクし、背中に隠していた右手を出した。
    - acc: 1
      content: 「ほら、ロイヤル特製蜂蜜ニンジンパイ。長いこと並んで買ったんだ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わあ、%CALLNAME%はこれを買いに行ってくださったのですね。本当に……ありがとうございます……」
    - %YOU%は微笑んで紙袋を、喜ぶ鈴鹿へ渡した。
    - acc: 1
      content: 「この数日の厳しい訓練のご褒美だ。遠慮せず、召し上がれ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい。%CALLNAME%は安心してください。天皇賞（秋）の勝利で、お返しします。」
    - 紙袋を待ちきれずに開ける鈴鹿を見て、通行人の呪いの話を思い出した。
    - 長く考えてから、それでも鈴鹿に伝えることにした。
    - acc: 1
      content: 「あの、鈴鹿。戻る途中で……」
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うーん、呪い、おもしろい話ですね。」
    - 通行人から聞いた話を伝えると、鈴鹿が口を覆って小さく笑い始めたのに、%YOU%は驚いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%の顔色が青かったのは、このためでしたか。私も初めて聞く呪いですが、怖くはありません。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「むしろ、自分の力でこの呪いを壊し、天皇賞（秋）の楯を持ち帰って、あなたに差し上げます。」
    - まだ%YOU%の顔色が良くないのを見て、鈴鹿は手の紙袋を開けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、一つ召し上がってください。少し楽になるといいのですが。」
    - 言い終わるか終わらないかのうちに、香りのいい蜂蜜ニンジンパイが%YOU%の口元へ運ばれていた。
    - %YOU%は反射的にそれを咥え、噛み始めた。
    - 本当に美味しい。朝の長い列は、無駄ではなかった……
    - %YOU%が少し楽になったのを見て、鈴鹿の笑みはさらに深くなった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見ていてください、%CALLNAME%。絶対的な速さで、この呪いを打ち砕きます。必ず！」

# シニア級10月第3週開始
bad_omen:
  title: 不吉な予兆
  lines:
    - content:
        - fontWeight: bold
          content: 「実況」
        - 「各選手、一斉にゲートを出ました。スタートは良好、人気一番の%CHARA%選手が一気に先頭へ！」
    - ここは……どこだ。
    - %YOU%は見慣れていて見知らぬ競馬場の観客席にいた。「東京競馬場」の文字が、ぼんやり読める。
    - 東京競馬場……つまり、天皇賞（秋）の現場……
    - 周りを見ると、傍の観客も懸命に叫んでいる。だがその周囲には層になった霧があり、顔がはっきり見えない。
    - 急いで遠いコースへ目を向けると、遥かに先行する影が見つかった。
    - 鈴鹿……
    - 鈴鹿を見つけたことで少し安心し、レースに集中しようとした。
    - ほどなくすべてを忘れ、一心に鈴鹿を応援していた。
    - content:
        - fontWeight: bold
          content: 「実況」
        - 「%CHARA%を先頭とする逃げ集団が中盤へ入りました。%SEX%は依然として先頭を堅守！ 何という強硬な逃げでしょう！」
    - 遠くで「鈴鹿」が中盤に再び加速するのを見た。何度も予行したとおりだ。
    - あとは……
    - %YOU%の心が吊り上がった。もうすぐコーナーだ。必ず速度を落とすこの瞬間に……
    - content:
        - fontWeight: bold
          content: 「実況」
        - 「%CHARA%選手、ほとんど減速せずにコーナーを通過！ 何という制動力、コースだけでなく、物理法則まで掌握している！」
    - %YOU%の目に、「鈴鹿」は常識に反する方法でコーナーを抜け、後方との差をさらに開いた。
    - 流れるような走りを見て、喉が渇いた。
    - content:
        - fontWeight: bold
          content: 「実況」
        - 「前方は東京競馬場で名高い大欅です。大欅を過ぎれば、各%UMA%の再加速が見られます！」
    - 「鈴鹿」の影が、いち早く大欅の裏側へ入っていく。
    - ああ、また楽な勝利になるだろう。
    - %YOU%は両手を組み、後ろの背もたれへ凭れた。
    - 突然、心臓を強く掴まれたように激しく打ち始め、比類ない激痛が襲った。
    - 顔が真っ青になり、大汗をかき、左手で左胸の服を掴み、まともな言葉が出なくなった。
    - 周囲の観客に助けを求めようとしたが……
    - content:
        - fontWeight: bold
          content: 「実況」
        - 「何が起きた？ 大欅から最初に出てきたのは、%CHARA%選手ではありません！」
    - content:
        - fontWeight: bold
          content: 「実況」
        - 「%CHARA%選手が、まだ現れません！」
    - content:
        - fontWeight: bold
          content: 「実況」
        - 「%CHARA%選手に、緊急事態が発生しています！」
    - content:
        - fontWeight: bold
          content: 「実況」
        - 「%CHARA%選手、第三コーナー手前で競走を中止しました！」
    - 考える暇もなく、一言も耳に入らなかった。心臓の激痛が、思考を完全に奪っていた。
    - 満場の悲鳴の中で痛みは頂点に達し、目の前に果てのない黒い潮が押し寄せた。
    - %YOU%は意識を失った。
    - divider: true
    - 眼前に突然光が走り、意識が戻った。左胸の激痛も、最初からなかったかのように消えている。
    - 周りを見ると、自分はいま東京競馬場のコースの上に立っていた。
    - おかしい。なぜコースの上に……
    - 白い上着を着た、緊張した顔の人たちが、大欅へ向かって走っていく。
    - 瞳が徐々に焦点を結び、何かが分かった気がした。
    - 急いで彼らについて走り、それから生涯で想像しうる、最も残酷な光景を見た。
    - 担当である「%CHARA%」が、コースの芝の上に静かに横たわっていた。
    - %SEX%の左脚は不自然に捻じれ、白い骨の先が皮膚と筋を突き破り、日ごろ%YOU%の目を離せなくしていた黒いタイツを突き破っていた。
    - 顔は紙のように青白く、その対になるように、脚の下では鮮やかな赤が広がり続けていた。
    - 胸郭はもう上下していない。走り終えたばかりの%UMA%なら、大きく息をしているはずなのに。
    - 顔に苦悶があればまだよかった。少なくとも、これを感じている証拠になる。
    - だが%SEX%の顔にあるのは平静だけだった。死のような、平静……
    - それを見た%YOU%は、すべての力が抜け、その場に座り込んだ。
    - 続いて心臓が再び痛み出し、以前よりひどかった。
    - 目の前が回り、「鈴鹿」の血の赤と、救急員の服の白が視界を占めていく。
    - 再び意識を失う寸前、救急員の会話が聞こえた気がした。残ったのは一つの語だけ——
    - 粉砕骨折。
    - %YOU%は再び虚空へ落ちた。
    - divider: true
    - acc: 1
      content: 「鈴鹿！ 鈴鹿！ 鈴……」
    - %YOU%はベッドから跳ね起き、呼吸が荒く、全身が水から上がったようだった。すでに冷や汗でびっしょりだった。
    - acc: 1
      content: 「夢、だったのか……」
    - 左胸に触れた。体を裂くような激痛は、来たときと同じく、完全に消えていた。
    - だがこの夢はあまりに生々しかった。とりわけ「鈴鹿」が血の中に倒れ、生死も分からないのを見たときの、生きた屍のような感触……
    - %YOU%は強く頭を振り、その恐ろしい断片を忘れようとした。
    - acc: 1
      content: 「いまは午前二時だ。また寝よう。明日も鈴鹿の訓練を見ないと……」
    - 冷や汗で濡れたシーツと枕カバーを替え、再び眠ろうとした。
    - だが長く寝返りを打ち、目を閉じるたび、あの凄惨な夢が浮かぶ……
    - そうして夜が明けた。

# 【不吉な予兆】のあと
choice:
  title: 選択
  lines:
    - あの恐ろしい悪夢のせいで、%YOU%は眠れなかった。
    - 二年前、初めて鈴鹿に会った未明を思い出した。あのころの自分は、今のように魂が抜けてはいなかった。
    - 壁に掛かる、鈴鹿が書いた「必ず天皇賞に勝つ」の標語を見て、また胸がかすかに痛んだ。
    - 夢の一幕が再び頭に浮かび、今度は、常軌を逸した考えが徐々に形になった。
    - 鈴鹿と二年半を過ごし、%SEX%の声も笑顔も完全に馴染んでいる。もし一走で%SEX%を失うなら……
    - そのレースは、走らなくてもいい。トレーナーとしての名声を賭けても、悪夢を現実にさせてはならない。
    - やがて高ぶる気持ちを整え、訓練場で鈴鹿と落ち合うために出発した。
    - divider: true
    - 訓練場へ着くと、普通の早起きよりさらに早い時間なのに、案の定、訓練中の鈴鹿を見つけた。
    - 流れるような影を見て、一瞬迷った。
    - この数日、天皇賞（秋）のために鈴鹿が積んだ努力を、%YOU%はすべて見てきた。
    - 自分の、根拠のない夢だけで、%SEX%の努力をすべて否定するなら……
    - %YOU%は%SEX%の仇と、何が違うのか。
    - 激しい葛藤に陥った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ、%CALLNAME%、いらっしゃいましたね！」
    - ぼんやりしている%YOU%を、%CHARA% のほうが先に見つけ、走ってきた。
    - その挨拶が、滞っていた思考から%YOU%を救い出した。
    - %YOU%は挨拶を返さず、%SEX%を細かく眺めた。
    - 頭頂の緑のイヤーカバーから、オレンジの長い髪、エメラルド色の瞳、細くて力のある両脚……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、何を……そんなに見られると、恥ずかしいです……」
    - %YOU%の視線に、鈴鹿は落ち着かなくなった。
    - だがすぐに、何かがおかしいと気づいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、あなた……今は、医務室へ行ったほうがいいのでは……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - 青白い顔に鈴鹿が怯えたのか、%SEX%は反射的に二歩下がった。だがすぐ、とても緊張した様子でコースの柵を越えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わ……私が医務室までお連れします。今の様子は、怖い、では済みません！」
    - 鈴鹿は押し留めもせず%YOU%の手を掴み、運動場の外へ連れていこうとした。
    - 夜通し悪夢で冷えていた手が、鈴鹿の温かい小さな手に握られ、生き永らえたような感触がした。
    - それで我に返り、自分の考えを固めた。
    - 訓練場を出ず、手首を返して、むしろ鈴鹿の手を握り返した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……？」
    - 突然の仕草に鈴鹿は戸惑い、%YOU%はその勢いで%SEX%のもう一方の手も握った。
    - acc: 1
      content: 「鈴鹿……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、ここにいます……」
    - 戸惑い、あるいは少し恐れながらも、鈴鹿はしっかりと%YOU%の手を握り返した。
    - acc: 1
      content: 「鈴鹿、お願いだ……天皇賞は、諦めてくれ……」
    - 夢うつつのようにその一言を絞り出すと、全身の力が抜けた気がした。
    - %YOU%の言葉を聞いて、鈴鹿は小さく口を開け、視線の焦点が外れ、一瞬反応できなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、そ……そんな冗談は、やめてください。わ……今すぐ医務室へお連れします……」
    - 鈴鹿は、%YOU%の精神状態が悪く、場違いな冗談を言ったのだと思っているらしい。
    - 続いて%SEX%は、強引に%YOU%を医務室へ連れていこうとした。
    - いつも冷静な鈴鹿が、自分の様子で慌てているのを見て、%YOU%は惨い笑みを浮かべた。
    - acc: 1
      content: 「違う、鈴鹿。本気だ。」
    - 冗談では絶対にない口調で決断を聞いた鈴鹿は、またその場で止まった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、何があったのか、教えてくれませんか。あなたは普段、こんな大きな冗談はおっしゃらない……」
    - %YOU%は深く息を吸い、渦巻く思考を少し鎮め、昨夜の夢を鈴鹿へ残さず話した。
    - acc: 1
      content: 「鈴鹿、昨夜……」
    - divider: true
    - あまりに生々しい夢を再び語り、向かいの鈴鹿が徐々に驚いていくのを見た。
    - %YOU%にとって、悪夢を鈴鹿に語ることは、もう一度通ることと同じだった。
    - 「そういうことだ、鈴鹿。馬鹿げているのは分かってる。でも……この夢は生々しすぎて、無視できなかった。」
    - 両手に小さく、細かな震えを感じた。さっきから今まで、%YOU%と鈴鹿は握った手を一度も放していなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……そこまで仰っても、私は、まだ試してみたいんです……」
    - 顔を上げ、鈴鹿の目を真っすぐに見た。%SEX%の目には一筋の光と、果てのない決意があった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇賞のために、どれだけ準備し、どれだけ苦しんできたか。あなたはご存じです……ここで諦めたら、あなたも悔しいはずです……」
    - 鈴鹿の体が震え始め、握り合う両手を通して%YOU%へ伝わってきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「信じてください。一度だけでいい。楯を持って戻るか、持たずに戻るか——もうそれは重要ではありません。とにかく、無事にあなたのそばへ戻ります！」
    - 最後に、細い嗚咽が聞こえた気がした。
    - 頭の中はもう糸が絡まったようだった。直感がもたらす不吉と、担当%UMA%の決意。二つの力が意志を挟み、目が回った。
    - 泣きそうな鈴鹿を見、あの生々しい悪夢を思い、見て、また思う……
    - やがて心を鬼にして、最後の決断を下した。
    - acc: 1
      key: choice
      content: 「行っておいで、鈴鹿。」
      comment:
        - color: red
          content: （警告：この選択は取り消せません。鈴鹿との絆が十分に強いことを確認してから選んでください）
      lines:
        - %YOU%は深く息を吸った。
        - acc: 1
          content: 「でもお願いだ。ゴールを駆け抜けたあと、必ず最初に、僕のそばへ戻ってきて……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……信じてください。必ず、必ず無事に戻ります！」
        - 結局、鈴鹿の執念に負けた。
        - 鈴鹿の両手を放し、目の焦点のないまま、訓練場の柵に凭れた。
        - acc: 1
          content: 「行って……訓練して。鈴鹿、少し一人にさせて……」
        - 全身の力を使って、鈴鹿へ手を振った。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - 鈴鹿は%YOU%の傍に長く立ち、重い気持ちのままコースへ戻った。
        - acc: 1
          content: 「鈴鹿、どうか……」
        - 遠ざかる背中をぼんやり見ながら、つぶやいた。
    - acc: 2
      content: 「だめだ、鈴鹿。」（理で説く） # 好感-100
      lines:
        - 長く考えてから、それでも鈴鹿の願いを拒むことにした。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - 鈴鹿は信じられない顔をした。
        - 握る手に力を込め、強い視線で%SEX%を見つめた。
        - 鈴鹿は形ばかり手を振りほどこうとしたが、失敗した。
        - acc: 1
          content: 「鈴鹿、前から人気一番は勝てない呪いがある。今度は悪夢まで予兆を出した……」
        - それ以上は言わなかったが、意味ははっきりしていた。
        - 天皇賞（秋）に出て本当に何かが起きるかは別として、天はさまざまな形で暗示を与えている。
        - 信じても、信じなくても、二つの偶然が同時に起きたとき、それはもう偶然ではない。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わ……分かりました。そこまで仰るなら……」
        - 鈴鹿は突然、手を%YOU%から引き抜き、振り返って走り去った。
        - acc: 1
          content: 「鈴鹿……」
        - 遠ざかる背中をぼんやり見ていると、%SEX%の絶望した嗚咽が聞こえる気がした。
        - 自分の強硬さが、%SEX%の心を深く傷つけたのは分かっていた。
        - だが少なくとも、こうすれば%SEX%に危険はない……
    - if: era.get('love:2') >= 90
      acc: 3
      content: %SEX%を抱きしめる。（情で説く） # 好感-50
      lines:
        - %YOU%は何も言わず、一歩前へ出て、目の前の鈴鹿を腕の中へ収めた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%？」
        - 鈴鹿は両目を見開いた。
        - acc: 1
          content: 「鈴鹿、君は僕の恋人だ。僕は、僕は……」
        - 鈴鹿と過ごした美しい時間、深夜の胸の内、未熟な口づけを思い出した。
        - 目の前の%UMA%は、担当であるだけでなく、恋人であり、すべてだった。
        - %SEX%を失う危険は、わずかでも冒したくなかった。
        - 喉が詰まり、あとの言葉は出なかった。
        - 腕の中の鈴鹿をさらに強く抱いた。熱い涙がすでに流れ、視界を曇らせていた。
        - 鈴鹿は完全に呆けた。自分のトレーナー——天を支え地に立つ、心のすべてを占める人が、これほど真に泣くのを見るのは初めてだった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - この数日、普段の十倍、百倍の努力を注いだ目標が、いま虚無になろうとしている。鈴鹿も感情が激しく揺れた。
        - それから%SEX%もそっと%YOU%を抱き返し、肩に凭れて嗚咽し始めた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、わ、私は、ずっとあなたのそばにいます……天皇賞は……諦めます。どうか、な、泣かないで……」
        - acc: 1
          content: 「うん。鈴、鈴鹿も、もう泣かないで……」
        - %YOU%と鈴鹿は互いを慰めたが、結局どちらも涙を止められなかった。
        - そうして固く抱き合い、長い時間が過ぎた……

# シニア級10月第4週開始
# 回避せず、好感が好意未満
# 以降編成から外れる。シニア級終了後に復帰、脚の古傷
wing_clipped:
  title: 折れた翼
  lines:
    - さまざまな挿話のあと、天皇賞（秋）はやっと到来した。
    - いつもと違い、今回%YOU%は鈴鹿を場内まで送り、スタッフに丁寧に止められるまで傍にいた。
    - content:
        - fontWeight: bold
          content: スタッフ
        - 「この先は観客席でお待ちください。道が分からなければ、ご案内します……」
    - スタッフの言葉は耳に入らず、ただ鈴鹿の背中をじっと見ていた。
    - %SEX%の背は%YOU%から遠ざかり、小さくなり、通路の向こうで消えそうだった。
    - 振り返って微笑んでくれれば、無事を約束してくれれば、固い視線を返してくれるだけでも……
    - だがそうはならず、%SEX%は振り返らずに視界から消えた。
    - 長いため息をつき、スタッフの案内に従って観客席へ向かった。
    - divider: true
    - 出走馬が入場する前から、場内の空気はすでに熱かった。
    - 観客は興奮して議論し、がやがやした声が絶えず、%YOU%を狂わせそうだった。
    - 再び周りを見ると、ぞっとする発見があった。自分の席が、夢の中の席とまったく同じだった。
    - 周囲の観客も同じだ。夢との唯一の違いは、今は顔が見えること……
    - 胸の不安が倍になった。
    - 落ち着こうとし、不安を無理に押さえているとき、ファンファーレが鳴った。
    - %CHARA% と、ほか十七人の気負った%UMA%が、一人ずつゲートへ入っていく。
    - いつもと変わらないように見える鈴鹿をじっと見つめ、心の中で%SEX%の無事を祈った。
    - ほどなくゲートが開き、十八人の%UMA%が飛び出した。
    - %CHARA% が一気に前へ出て、素早く先頭を占めた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「各選手、一斉にゲートを出ました。スタートは良好、人気一番の%CHARA%選手が一気に先頭へ！」
    - %YOU%は強く震えた。
    - 実況の声も、内容も、まったく同じ……
    - 遠くの鈴鹿の走り、加速のタイミング、後方の大集団との距離……
    - まったく同じだ！
    - もうレースを見る気になれなかった。両手が止まらず震え、頭の中はあの夜の悪夢でいっぱいだった。
    - 現実で起きていることは、少なくとも今のところ、すべて夢の再現だった。
    - ほどなく鈴鹿は予想どおり、美しく効率よくコーナーを抜け、傍の観客が熱狂して歓声を上げ始めた。
    - もう待てない。
    - そう自分に言い、震えながら立ち上がった。
    - 後ろの観客はすぐ不機嫌になり、すでに誰かが肩を押さえて、座らせようとしていた。
    - 聞こえないふりをして、前へ割り込んで進んだ。
    - content:
        - fontWeight: bold
          content: 実況
        - 「前方は東京競馬場で名高い大欅です。大欅を過ぎれば、各%UMA%の再加速が見られます！」
    - 続いて、聞き慣れた引きつれる痛み——幸い、夢のように気を失うほどではなかった。
    - 必死に前へ進み、熱狂する観客の層を両手で分け、コースの柵の前へ出た。
    - そして迷わず、それを越えた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「そちらのお客様、席へお戻りください！ 待て、今何が起きた？ 大欅から最初に出てきたのは、%CHARA%選手ではありません！」
    - このとき、もう何も聞こえなかった。
    - acc: 1
      content: 「鈴鹿！ 鈴鹿！」
    - %YOU%はコースへ飛び出し、まだ走っている%UMA%たちの驚いた視線を縫うように%THEY%を避け、大欅の裏へ直進した。
    - お願いだ、お願いだ、だめだ——
    - 夢の中で芝に倒れていた鈴鹿を思い、足を速めた。
    - やっと、大欅の裏へ着いた。
    - 起きるべきことは、起きた。
    - だが今回、%YOU%は間に合った。
    - 鈴鹿はすでにアクシデントを起こしていた。幸い、残っていた意識が、完全に倒れさせずにいた——
    - acc: 1
      content: 「鈴鹿！」
    - 駆け寄り、%SEX%の腰を支え、すでに折れた左脚を持ち上げた。
    - 続いて、残っている意識を呼び覚まそうとした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……ご、ごめんなさい……」
    - 鈴鹿は全身の力を使い切ったように、やっとのことで目を開け、%YOU%を見ると、もう支えきれず、腕の中へ崩れた。
    - acc: 1
      content: 「鈴鹿、起きて、鈴鹿！」
    - 万念が灰になり、残ったのは鈴鹿をきちんと支えることだけだった。
    - どれだけ経ったか分からないころ、場内の救急が到着した。機械的に鈴鹿を渡し、彼らが急いで救急車へ乗せるのを見た。
    - 救急車はすぐに走り去り、レースもとっくに終わり、観客も退場を始めて、今日の惨劇を話しながら去っていく。
    - %YOU%は何も知らず、魂の抜けたようにその場に立ち、救急車の去った方向を見ていた。

tenn_sho:
  title: 無事の約束
  lines:
    - さまざまな挿話のあと、天皇賞（秋）はやっと到来した。
    - いつもと違い、今回%YOU%は鈴鹿を場内まで送り、スタッフに丁寧に止められるまで傍にいた。
    - content:
        - fontWeight: bold
          content: スタッフ
        - 「この先は観客席でお待ちください。道が分からなければ、ご案内します……」
    - スタッフの言葉は耳に入らず、ただ鈴鹿の背中をじっと見ていた。
    - %SEX%の背は%YOU%から遠ざかり、小さくなり、通路の向こうで消えそうだった。
    - 突然、%SEX%の姿が一瞬止まり、振り返った。
    - 続いて、%SEX%は%YOU%のもとへ走ってきた。
    - if: era.get('love:2') < 75
      lines:
        - 最後に、%SEX%は%YOU%の前で止まった。
        - acc: 1
          content: 「鈴鹿、必ず、必ず無事に戻ってきて。」
        - ほかのレースのように一着を願うのではなく、重い気持ちで、無事に戻ることだけを言い含めた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はい、戻ります、%CALLNAME%。無事に戻るだけでなく、天皇賞の楯も一緒に。見ていてください。」
        - 鈴鹿は%YOU%の片手を捧げるように取り、そっと頬へ当てた。
        - %YOU%も%SEX%も、その感触を味わっていたが、鈴鹿はやがて手を下ろした。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、い……行ってきます。」
        - 言い終わるか終わらないかのうちに、鈴鹿は迷わず振り返って去った。
        - %YOU%は%SEX%の背を見つめ、長く黙っていた。
    - if: era.get('love:2') >= 75
      lines:
        - 最後に、%SEX%は頭から%YOU%の胸へ飛び込んできた。
        - %YOU%は%SEX%の髪を撫で続け、思いが千々に乱れた。
        - acc: 1
          content: 「鈴鹿、必ず、必ず無事に戻ってきて。」
        - ほかのレースのように一着を願うのではなく、重い気持ちで、無事に戻ることだけを言い含めた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はい、戻ります、%CALLNAME%。無事に戻るだけでなく、天皇賞の楯も一緒に。見ていてください。」
        - 鈴鹿は軽く、%YOU%の頬に口づけを落とした。
        - %YOU%と鈴鹿は固く抱き合い、傍のスタッフがとうとう我慢できず、咳払いをした。
        - やっと赤い顔で離れた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、い……行ってきます。」
        - 鈴鹿は三歩進んでは振り返り、コースへ向かった。姿は小さくなり、やがて完全に消えた。
        - %YOU%は%SEX%の背を見つめ、長く黙っていた。

tenn_sho_win:
  title: 飛翔
  lines:
    - 出走馬が入場する前から、場内の空気はすでに熱かった。
    - 観客は興奮して議論し、がやがやした声が絶えず、%YOU%の頭が痛くなった。
    - 再び周りを見ると、ぞっとする発見があった。自分の席が、夢の中の席とまったく同じだった。
    - 周囲の観客も同じだ。夢との唯一の違いは、今は顔が見えること……
    - 胸の不安が倍になった。
    - 落ち着こうとし、不安を無理に押さえているとき、ファンファーレが鳴った。
    - %CHARA% と、ほか十七人の気負った%UMA%が、一人ずつゲートへ入っていく。
    - いつもと変わらないように見える鈴鹿をじっと見つめ、心の中で%SEX%の無事を祈った。
    - ほどなくゲートが開き、十八人の%UMA%が飛び出した。
    - %CHARA% が一気に前へ出て、素早く先頭を占めた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「各選手、一斉にゲートを出ました。スタートは良好、人気一番の%CHARA%選手が一気に先頭へ！」
    - %YOU%は強く震えた。
    - 実況の声も、内容も、まったく同じ……
    - 遠くの鈴鹿の走り、加速のタイミング、後方の大集団との距離……
    - まったく同じだ！
    - もうレースを見る気になれなかった。両手が止まらず震え、頭の中はあの夜の悪夢でいっぱいだった。
    - 現実で起きていることは、少なくとも今のところ、すべて夢の再現だった。
    - ほどなく鈴鹿は予想どおり、美しく効率よくコーナーを抜け、傍の観客が熱狂して歓声を上げ始めた。
    - 反射的に立ち上がりかけたが、結局はしなかった。
    - 今度は、鈴鹿を信じることにした。
    - ほどなく先行する鈴鹿が大集団を連れて大欅の前へ着き、%YOU%の心臓も徐々に痛み始めた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「前方は東京競馬場で名高い大欅です。大欅を過ぎれば、各%UMA%の再加速が見られます！」
    - 突然の衝動で立ち上がり、黒い木立を見つめた——
    - acc: 1
      content: 「鈴鹿、約束しただろ！ %CHARA%！」
    - 何千何万という狂った観客の中にいながら、%YOU%は全身の力で叫び続けた。
    - 命を燃やしているようなその叫びは、奇跡的に周囲の歓声を一瞬上回り、彼らが不思議そうにこちらを見た。
    - 力なく座り、目の焦点のないまま、大欅の出口のほうを見た。
    - そして%YOU%が必死に叫ぶ、その前——
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前が、大欅ですね……」
    - color: %COLOR%
      content: %CALLNAME%が特に触れた場所。あそこで……
    - color: %COLOR%
      content: %CHARA% は前方のコーナーを見、気持ちはますます静かになった。
    - color: %COLOR%
      content: 想像していた緊張も焦りもなく、むしろ異様なほどの静けさ……
    - color: %COLOR%
      content: %UMA%の速さは比類ない。瞬く間に %CHARA% は大欅の影へ踏み入った。
    - color: %COLOR%
      content: 完全に大欅に覆われた瞬間、%CHARA% の心が冷えた。
    - color: %COLOR%
      content: 走る拠り所である左脚が、突然、感覚を失った。
    - color: %COLOR%
      content: 前方のコーナーを、この速さのまま、バランスを失えば……
    - color: %COLOR%
      content: %CHARA% は、%CALLNAME%の夢の中で重傷を負い、倒れて生死も分からない%SEX%を見た気がした。
    - color: %COLOR%
      content: 左脚に力を入れて脱しようとしたが、まったく効かなかった。%SEX%の左脚は木の棒のように、硬く立っているだけだった。
    - color: %COLOR%
      content: 本当に、%CALLNAME%の夢のとおり、ここで……
    - color: %COLOR%
      content: 果てのない絶望が %CHARA% を呑み、%SEX%は悔しさに目を閉じた。
    - color: %COLOR%
      content: そのとき——
    - acc: 1
      content: 「鈴鹿、約束しただろ！ %CHARA%！」
    - color: %COLOR%
      content: %CHARA% ははっと目を開けた。
    - color: %COLOR%
      content: あれは……%CALLNAME%の声……
    - color: %COLOR%
      content: 胸を裂くようなその声は、観客席の喧噪を超え、コースの大半を強靭に渡り、ついには %CHARA% の耳へ届いた。
    - color: %COLOR%
      content: 観客席はここから遠い。%CALLNAME%はどれほど必死なら、声をここまで届けられるのか……
    - color: %COLOR%
      content: すべて、私のために……
    - color: %COLOR%
      content: そうだ。約束した。%YOUR_SEX%のそばへ戻ると……
    - color: %COLOR%
      content: %CALLNAME%……%CALLNAME%……%CALLNAME%……！
    - color: %COLOR%
      content: %CHARA% の眼前に%CALLNAME%の姿が浮かび、%YOUR_SEX%は微笑んで、%CHARA% へ両手を伸ばしていた……
    - color: %COLOR%
      content: 視界は少し霞んでいたが、それでも %CHARA% はきっぱり%CALLNAME%の手を握った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっ！」
    - color: %COLOR%
      content: %CHARA% は突然、果てのない光の中にいた。
    - color: %COLOR%
      content: 振り返って、自分がすでに大欅の範囲を抜けているのに、驚いて気づいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これは……」
    - color: %COLOR%
      content: もう一度左脚を見下ろすと、いつの間にか感覚が戻り、いつものように %CHARA% をゴールへ押しているのに、驚いて喜んだ。
    - content:
        - fontWeight: bold
          content: 実況
        - 「やはり、大欅から最初に出てきたのは%CHARA%選手です！」
    - divider: true
    - 観客席で、鈴鹿が大欅を抜けた瞬間、%YOU%は果てのない喜びに打ちのめされ、椅子に崩れ落ちた。
    - 仰向けになり、呼吸は荒かったが、やがて高ぶる気持ちは徐々に落ち着いた。
    - 頭を下げると、ちょうど鈴鹿がゴールを駆け抜ける瞬間が見えた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「%CHARA%選手、何という強い末脚！ まさに流星のような速さです！」
    - ゴールを越えてなおしっかりと立っている鈴鹿を見て、胸の激しい感情を、もう抑えられなかった。
    - if: era.get('love:2') >= 75
      lines:
        - %YOU%は素早くコースの柵を越え、走路へ出た。
        - それから、遠くでまだ息を整えている鈴鹿のもとへ走った。
        - %YOU%がそばへ着くまで、%SEX%は%YOU%に気づかなかった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%？ どうして、ここに？」
        - 説明はせず、迷いなく%SEX%を抱え、腕の中へ収めた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あっ！」
        - 鈴鹿の顔はすぐ真っ赤になり、%SEX%は顔を%YOU%の胸に預けて、離そうとしなかった。
        - %YOU%は貪欲に鈴鹿を嗅いだ。長い髪の香りも、汗の匂いも、深く吸い込んだ。
        - このときの鈴鹿は耳の先まで小さく震えていて、相当に高ぶっているようだった。
        - acc: 1
          content: 「鈴鹿、僕の鈴鹿。戻ってきてくれてよかった……」
        - %YOU%の言葉を聞いて%SEX%は一瞬呆け、それから腕の中で顔を上げようともがいた。
        - 甘い微笑と、水のように情を含んだ瞳。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ええ。あなたの鈴鹿、無事に戻りました。」
        - 担当%UMA%を抱いていると、全世界を抱いているようだった。
        - 長くして、やっと鈴鹿を緩めた。
        - acc: 1
          content: 「鈴鹿、今は疲れてるだろ。行こう、休むところまで送る……」
        - それから、鈴鹿が気づく前に、腰から抱き上げた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「きゃっ！」
        - 鈴鹿は短い声を上げたが、もう%YOU%の勝手を拒む力はないようだった。
        - 鈴鹿にとって、%YOU%との関係がこれ以上なく近くても、衆人環視での抱擁が限界だった。
        - それを恥ずかしい姿勢で抱き上げるのは、明らかに%SEX%を慌てさせていた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、これは少し……みなさんが見ています……」
        - acc: 1
          content: 「よくない？ こんなに人がいる前で、天皇賞を取ったばかりの担当を抱いてるんだ。羨ましいに決まってる。」
        - %YOU%の言葉を裏付けるように、場内は空前の拍手と歓声に包まれた。
        - 観客にとって、毎年の天皇賞（秋）に一着がいるのは、もう珍しくもない。
        - だがトレーナーが柵を越えて入場し、担当を抱くのは、これまでなかった。
        - だから今の観客は、鈴鹿が勝ったときより興奮していた。軽薄な者も少なくなく、%YOU%と鈴鹿へ口笛を吹いている。
        - だが%YOU%には聞こえなかった。耳にあるのは、胸元の鈴鹿の心拍のほうが、観客の声より遥かに熱い。
        - 逃れられないと悟った鈴鹿は、必死に顔を上げ、%YOU%の頬に口づけした。
        - content:
            - fontWeight: bold
              content: 実況
            - 「そちらの興奮したトレーナーさん、担当%UMA%を下ろしていただけますか。まだ進行が残っています……」
        - 実況は困ったように言った。%SEX%も、このような事態は初めてだった。
        - 本来%SEX%は%YOU%と鈴鹿の恋慕を羨ましく思っていた。だが止めなければ、%YOU%は鈴鹿を場外まで抱いて出てしまう……
        - 実況を聞いて、%YOU%と鈴鹿はやっと夢から覚めた。
        - %YOU%はそっと鈴鹿を下ろし、鈴鹿は真っ赤な顔で%YOU%の服の裾を摘まんだ。
        - だが結局は離れた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、わ……すぐに戻ります！」
        - %YOU%は鈴鹿へ手を振り、胸の重い石が落ちた気がした。
        - 天皇賞（秋）、取ったのだ。
    - if: era.get('love:2') < 75
      lines:
        - 視界が急に曇り、熱い涙が流れた。
        - これが %CHARA% だ。%YOU%の、格好よくて強い担当。
        - 運命の枷を強く振りほどいただけでなく、さらに一歩進み、天皇賞（秋）の一着まで掴んだ。
        - こんな担当に出会えて、本当によかった……
        - こうして%YOU%は、周囲の喜びの海の中で、声もなく泣いた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、%CALLNAME%？ な……泣いていますか？」
        - はっとして顔を上げると、いつの間にか鈴鹿が目の前に来て、気遣うように見ていた。
        - %YOU%は急いで、顔の涙を雑に拭った。
        - acc: 1
          content: 「い、いや、涙じゃない。誇りが溢れただけだ……」
        - 鈴鹿は%YOU%のユーモアに、笑わされたようだった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では、勝利を無事に持ち帰ったのに、褒めてはいただけないのですか？」
        - 鈴鹿は急に顔を引き、悲しそうな表情を作った。だが%SEX%の弾んだ口調が、%SEX%を裏切っていた。
        - どう褒めればいいか分からず、反射的に親指を立てた。
        - その窮屈さを見て、鈴鹿は笑いをこらえきれなかった。
        - そのあとはもう話さず、振り返って遠くへ走った。
        - %YOU%は鈴鹿へ手を振り、胸の重い石が落ちた気がした。
        - 天皇賞（秋）、取ったのだ。

tenn_sho_lose:
  title: 無事
  lines:
    - 出走馬が入場する前から、場内の空気はすでに熱かった。
    - 観客は興奮して議論し、がやがやした声が絶えず、%YOU%の頭が痛くなった。
    - 再び周りを見ると、ぞっとする発見があった。自分の席が、夢の中の席とまったく同じだった。
    - 周囲の観客も同じだ。夢との唯一の違いは、今は顔が見えること……
    - 胸の不安が倍になった。
    - 落ち着こうとし、不安を無理に押さえているとき、ファンファーレが鳴った。
    - %CHARA% と、ほか十七人の気負った%UMA%が、一人ずつゲートへ入っていく。
    - いつもと変わらないように見える鈴鹿をじっと見つめ、心の中で%SEX%の無事を祈った。
    - ほどなくゲートが開き、十八人の%UMA%が飛び出した。
    - %CHARA% が一気に前へ出て、素早く先頭を占めた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「各選手、一斉にゲートを出ました。スタートは良好、人気一番の%CHARA%選手が一気に先頭へ！」
    - %YOU%は強く震えた。
    - 実況の声も、内容も、まったく同じ……
    - 遠くの鈴鹿の走り、加速のタイミング、後方の大集団との距離……
    - まったく同じだ！
    - もうレースを見る気になれなかった。両手が止まらず震え、頭の中はあの夜の悪夢でいっぱいだった。
    - 現実で起きていることは、少なくとも今のところ、すべて夢の再現だった。
    - ほどなく鈴鹿は予想どおり、美しく効率よくコーナーを抜け、傍の観客が熱狂して歓声を上げ始めた。
    - 反射的に立ち上がりかけたが、結局はしなかった。
    - 今度は、鈴鹿を信じることにした。
    - ほどなく先行する鈴鹿が大集団を連れて大欅の前へ着き、%YOU%の心臓も徐々に痛み始めた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「前方は東京競馬場で名高い大欅です。大欅を過ぎれば、各%UMA%の再加速が見られます！」
    - 突然の衝動で立ち上がり、黒い木立を見つめた——
    - acc: 1
      content: 「鈴鹿！ 鈴鹿！」
    - 全力で叫んだが、周囲の歓声に比べればあまりに小さく、声の壁を破れなかった。
    - 力なく座り、目の焦点のないまま、大欅の出口のほうを見た。
    - そして%YOU%が必死に叫ぶ、その前——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前が、大欅ですね……」
    - %CALLNAME%が特に触れた場所。あそこで……
    - %CHARA% は前方のコーナーを見、気持ちはますます静かになった。
    - 想像していた緊張も焦りもなく、むしろ異様なほどの静けさ……
    - %UMA%の速さは比類ない。瞬く間に %CHARA% は大欅の影へ踏み入った。
    - 完全に大欅に覆われた瞬間、%CHARA% の心が冷えた。
    - 走る拠り所である左脚が、突然、感覚を失った。
    - 前方のコーナーを、この速さのまま、バランスを失えば……
    - %CHARA% は、%CALLNAME%の夢の中で重傷を負い、倒れて生死も分からない%SEX%を見た気がした。
    - 左脚に力を入れて脱しようとしたが、まったく効かなかった。%SEX%の左脚は木の棒のように、硬く立っているだけだった。
    - 本当に、%CALLNAME%の夢のとおり、ここで……
    - 果てのない絶望が %CHARA% を呑み、%SEX%は悔しさに目を閉じた。
    - 突然、%CHARA% の耳が何かを捉えた。
    - %SEX%は反射的に耳を立て、注意して聞き分けた。
    - %CALLNAME%の声のようだが、もうほとんど聞き取れない……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……言いました。勝利を、あなたへ届けると……」
    - %CHARA% は一瞬で闘志を灯し、重い左脚との対決に集中し始めた。
    - 強く地面を踏むと、大きな反動で、はっきりとした痛みを感じた。
    - だが、痛みを感じるということは、まだ感覚があるということだ。
    - %CHARA% はまた一歩踏み出し、再び鋭い痛みを感じた。その代わり、左脚の感覚が少し戻った。
    - 一歩、また一歩。痛みに耐える体は震え続けたが、同時に%SEX%は徐々に左脚の支配を取り戻していった……
    - ついに、%CHARA% が大欅を抜けたとき、%SEX%の左脚は完全に感覚を取り戻した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっ、いけません！」
    - 喜ぶ暇もなく、%CHARA% は落胆し始めた。
    - さっき、二番手の%UMA%がその隙に%SEX%を抜いていたのだ。
    - content:
        - fontWeight: bold
          content: 実況
        - 「ああ、惜しい！ 大欅の裏で何が起きたかは分かりませんが、明らかに%CHARA%選手は先頭の優位を失いました！」
    - %CHARA% は前の%UMA%を追って加速しようとしたが、無駄だった。
    - %SEX%のスタミナは、運命との対決でほぼ尽き、今の速さで完走するのが精一杯だった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あと……少し……」
    - content:
        - fontWeight: bold
          content: 実況
        - 「人気一番の%CHARA%選手は、結局先頭を守り切れませんでしたか。天皇賞（秋）の呪いは、また当たってしまったようです！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんなさい。ご期待に、応えられませんでした……」
    - divider: true
    - だが実際、鈴鹿が普通の走りで大欅を出たとき、%YOU%はもう何も聞こえていなかった。
    - 前にいる%UMA%も、実況も気にせず、ただ走り続けている鈴鹿をじっと見ていた。
    - %YOU%にとって、%SEX%がまだ走っていること自体が、心の中の天皇賞（秋）に勝ったということだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - すべてが終わったあと、鈴鹿はおずおずと%YOU%の服の裾を摘まんだ。
    - %YOU%は笑って、%SEX%の頭を撫でた。
    - acc: 1
      content: 「素晴らしいレースだったよ。行こう、鈴鹿。せっかく東京まで来たんだ。遊ばないと損だ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい！」
    - %YOU%は勝者のように、鈴鹿を連れて東京競馬場を出た。

tenn_sho_miss:
  title: 不出走
  lines:
    - 結局%YOU%は鈴鹿を説得して天皇賞（秋）を諦めさせたが、%SEX%は相変わらず天皇賞のカウントダウン準備を続けていた。
    - ほどなく、衆目の集まる天皇賞が開幕する。レース当日、鈴鹿がトレーナー室の扉を叩いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、一緒に天皇賞の中継を見たいんです。」
    - そう言うと、%SEX%は押し留めもせず%YOU%のそばに座った。
    - %YOU%は手元の仕事を止め、天皇賞（秋）の現場中継をつけた。
    - 自分の夢と通行人の噂だけで、一年以上努力してきたレースを担当%UMA%に諦めさせたことへ、%YOU%はかなり後ろめたかった。
    - だから、鈴鹿の願いは拒まなかった。
    - ほどなくファンファーレが鳴り、十七人の%UMA%が順にゲートへ入った。
    - ファンファーレが鳴った瞬間、傍らの鈴鹿が激しく震えるのに気づいた。
    - acc: 1
      content: 「鈴鹿？ 大丈夫……」
    - 鈴鹿は%YOU%の声を聞いていないようで、一心にレースを見ていた。
    - %UMA%たちはゲートを飛び出し、最初のコーナーを回った。
    - このレースにも逃げの%UMA%は出ていたが、%SEX%の逃げは二番手にわずか一馬身差しかない。鈴鹿の夢幻の大逃げに比べれば、逃げと呼べないほどだった……
    - 続いて皆が加速し、元の逃げ%UMA%が力尽きて第二集団へ落ち、二番手が短く先頭に立っては、後ろの数頭に次々と抜かれた。
    - 実に緊迫したレースで、ゴール前五十メートルまで、誰が勝つか分からない。
    - だが%YOU%の中でははっきりしていた。鈴鹿が出ていれば、このときすでに二番手を五馬身以上離していた……
    - それを思って、心配そうに傍らの鈴鹿を見た。
    - 鈴鹿はいま、魂を失ったようだった。目は虚ろで、顔色の青白さは、以前%SEX%に出走を諦めさせたときの%YOU%よりひどい。
    - acc: 1
      content: 「鈴鹿？ 鈴鹿！」
    - 怖くなり、思わず手を伸ばして鈴鹿の肩を叩いた。
    - だが鈴鹿はまったく反応しなかった。
    - このとき天皇賞（秋）は終盤、空の果てに陰る雲のような大欅へ差しかかっていた。
    - %UMA%たちは次々と大欅の影へ入り、また次々と出てきた。隊列の順すら変わらない。
    - 大欅のすぐ先にゴールがある。ほどなく、元の人気二番が最初にゴールし、今回の天皇賞の一着を掴んだ。
    - 突然、何かが%YOU%の肩に落ちた。
    - 鈴鹿だった。%SEX%はもう意識がないようで、目を閉じ、動かずに%YOU%の腕の中へ倒れ、どれほど呼んでも反応しなかった。
    - %YOU%は焦り、立ち上がって鈴鹿を抱いたまま医務室へ向かおうとした。
    - 幸い、外へ出ようとしたとき、鈴鹿はゆっくりと意識を戻した。
    - acc: 1
      content: 「あっ、鈴鹿、気がついた！ 具合はどう、変なところはない？」
    - 少し喜んで尋ねたが、鈴鹿は答えなかった。
    - if: era.get('love:2') < 75
      lines:
        - 鈴鹿は抱かれていることすら気にせず、きっぱり%YOU%の腕から離れた。
        - %SEX%は服を整え、振り返らずにトレーナー室を出た。
        - acc: 1
          content: 「鈴鹿？」
        - 声をかけても、%SEX%は足すら止めず、まっすぐ去った。
        - %YOU%だけがトレーナー室に長く立ち尽くした。
    - if: era.get('love:2') >= 75
      lines:
        - %SEX%は何も言わず、片手で%YOU%の首に腕を回した。
        - 驚いて反射的に一歩下がると、ちょうど後ろのソファに当たった。
        - こうして%YOU%は、腕の中の鈴鹿ごとソファへ倒れた。
        - もがいて起き上がると、鈴鹿の顔が青から赤へ変わり、鮮やかで今にも零れそうなのに、ぞっとした。
        - %SEX%は%YOU%の上に座り、そっと身を伏せ、耳へ近づいた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、天皇賞を諦めさせたのですから……少しは、埋め合わせをいただけますか。」
        - 鈴鹿は耳元で息を落とし、最後には耳たぶを含んで、そっと噛んだ。
        - 熱が耳たぶから全身へ広がり、%YOU%は反射的に上の鈴鹿を抱きしめた。
        - 残った意識が、震える手で自分と鈴鹿の服を剥がせと命じ、鈴鹿の裸の体が目の前に現れたとき、理性は完全に落ちた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ええ、その調子で……」 # 鈴鹿主導の馬跳

# シニア級11月第1週
third_step_win:
  title: 運命の三歩・新たな起点
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、いらっしゃいますか？」
    - あの叙事詩のような天皇賞（秋）から数日後、トレーナー室の扉を鈴鹿が叩いた。
    - %YOU%は急いで立ち上がり、鈴鹿のために扉を開けた。
    - 外の鈴鹿は頬に赤みがあり、%YOU%を見ると小さく微笑み、ある品を取り出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これは、%CALLNAME%の部屋に置いたほうがいいと思います。」
    - %YOU%は目が据わった。鈴鹿が取り出したのは、まぎれもなく%SEX%の天皇賞の楯だった。
    - acc: 1
      content: 「その楯は君の賞だよ。僕のところに置くのは違うだろ。鈴鹿が先に持ち帰って……」
    - 手を振って鈴鹿を止めようとした。
    - だが鈴鹿はすでに、天皇賞の楯をきちんと%YOU%の壁際へ置いていた。
    - 楯を戻すつもりがまったくないのを見て、口まで出ていた拒否を引っ込めるしかなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当に、%CALLNAME%。あなたこそ、これを持つにふさわしいと思います。」
    - 鈴鹿は%YOU%の肩を掴み、真剣に見つめた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「実は、あと少しで%CALLNAME%の夢のとおりの悲劇になるところでした。起こしてくださったおかげで……」
    - あの大声のあと、しばらく声が嗄れていたことを思い出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから%CALLNAME%、この天皇賞の楯で、これまで支えて励ましてくださったこと、そして私への気遣いへ、お礼をさせてください。」
    - とても真剣な表情を見て、仕方なく%SEX%の楯を受け取った。

third_step_lose:
  title: 運命の三歩・敗れても誉れ
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、いらっしゃいますか？」
    - あの叙事詩のような天皇賞（秋）から数日後、トレーナー室の扉を鈴鹿が叩いた。
    - %YOU%は急いで立ち上がり、鈴鹿のために扉を開けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、それほど忙しくはなさそうですね。少し、お話しできませんか。」
    - 何かを鋭く察して、鈴鹿を座らせた。
    - 案の定、話題はすぐ鈴鹿の天皇賞（秋）の敗戦へ移った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どう考えても、惜しいです、%CALLNAME%……」
    - 少し落ち込む鈴鹿を見て、%YOU%も困った。
    - 天皇賞（秋）へ注いだ努力はすべて見てきた。最後のアクシデントがなければ、鈴鹿は絶対に天皇賞を取れていたと信じている。
    - だが%YOU%にとって、あれほど危うい状態で困難を乗り越えたこと自体が、天皇賞の一着よりずっとすごい。
    - acc: 1
      content: 「大丈夫だよ、鈴鹿。僕にとっては、君の無事が何より大事だ……」

third_step_miss:
  title: 運命の三歩・同じ終着
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、いらっしゃいますか？」
    - 天皇賞（秋）から数日後、トレーナー室の扉を鈴鹿が叩いた。
    - %YOU%は急いで立ち上がり、鈴鹿のために扉を開けた。
    - 外の鈴鹿は顔色が青白く、隈が濃く、悪夢を見たあとのようだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、あ……あなたに、謝りたいんです。」
    - その言葉に%YOU%は驚き、一瞬反応できなかった。
    - acc: 1
      content: 「何があっても、とにかく……先に入って。」
    - 額に滲んだ冷や汗を拭い、鈴鹿にまず座るように言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、昨夜、私……」
    - 鈴鹿はひとりで話し続け、%YOU%の表情はますます驚いていった。
    - %SEX%が昨夜見た悪夢が、%YOU%の夢とまったく同じだったからだ。
    - 違うのは、%SEX%の夢が自分視点だったことだけだ。自分がバランスを崩して倒れ、重傷で競走を中止するのを見るのは、決して良い体験ではない。
    - どう慰めればいいか分からず、黙って%SEX%の話を聞いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから、お詫びしたかったんです。以前の誤解は、本当に……」
    - 少し震える鈴鹿が立ち上がり、%YOU%へ一礼するのを見た。
    - 「鈴鹿は謝らなくていいよ。僕があのときの鈴鹿なら、夢ひとつで天皇賞を諦めろなんて、トレーナーに言われても従わない。」
    - 鈴鹿は笑わされたが、それでも%YOU%に謝罪を受け取ってほしいと、とても固く思っていた。
    - 結局仕方なく、受け取った。

# シニア級11月第1週
# 折れた翼のあと
ending:
  title: 運命の終点
  lines:
    - 重傷の鈴鹿が救急車で運ばれてから、%SEX%はずっと昏睡していた。
    - %YOU%は病院へ見舞おうとしたが、毎回%SEX%の主治医に止められた。
    - 今日、主治医から鈴鹿が意識を戻したと電話があり、すぐ見舞いに行く準備をした。
    - divider: true
    - 病院は足早な医師で溢れ、空気には濃い消毒液の匂いが漂い、%YOU%は少し目が回った。
    - なるべく早く鈴鹿の主治医を見つけ、詳しい状態を知ろうとした。
    - content:
        - fontWeight: bold
          content: 主治医
        - 「%SEX%の状態は非常に重い。高速で走っている最中に骨折し、脚の動脈まで傷めています。」
    - content:
        - fontWeight: bold
          content: 主治医
        - 「幸いトレーナーさんがすぐに支えてくださり、倒れて二次損傷を受けることはありませんでした。そうでなければ、最善の結末でも切断を免れなかったでしょう。」
    - ここまで聞いて、%YOU%は寒気がした。
    - content:
        - fontWeight: bold
          content: 主治医
        - 「当時がもう少し危うく、到着がもう少し遅ければ、%SEX%は失血で永遠にあなたのそばを離れていたかもしれません。」
    - あの夜の夢で、赤い絨毯の上に横たわっていたような鈴鹿を思い出した。
    - 幸い、天は十分な予兆を与え、担当を間に合って救えた。
    - content:
        - fontWeight: bold
          content: 主治医
        - 「ただ、到着が早く、術後の回復も良好でも……残念ながら、%SEX%は生涯、激しい運動はできないでしょう。」
    - 予想どおりの結果ではあったが、胸が沈んだ。
    - %UMA%が後半生でもう走れないなら、%UMA%としての命は、そこで終わるようなものだ……
    - 主治医はそれ以上言わず、%YOU%を鈴鹿の病室へ案内した。
    - 病室の扉の窓から、鈴鹿が目の焦点のないままベッドに座り、時おり左脚を撫でているのを見て、胸が張り裂けそうになった。
    - そっと扉を叩き、中へ入った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっ、%CALLNAME%！」
    - 来たのが%YOU%だと分かると、鈴鹿は急に生き返ったように、少しだけ活気づいた。
    - だがすぐまた俯き、そっと左脚を撫でた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、ごめんなさい。私のわがままで、こんな大きな迷惑を……」
    - 話せば話すほど悲しみ、最後には小さく嗚咽し始めた。
    - 鈴鹿の冷たい右手を握り、複雑な顔をした。
    - acc: 1
      content: 「僕がもっと固く鈴鹿を止めていれば、こうはならなかったかもしれない……」
    - %YOU%も悔いていた。あのときもっと固くしていれば、今の傷はなかったかもしれない……
    - そのあと長く、%YOU%と鈴鹿は何も言わなかった。主治医に病室から出されるまで。

# 脚の古傷ルート以外
christmas:
  lines:
    - 机の前に座る%YOU%は、反射的に顔を上げ、窓の外を見た。
    - 気づかないうちに、学園では大雪が降っていた。羽毛のような雪片が空を漂い、もともと静かな世界を、さらに静かにしていた。
    - 窓の外の景色を見て、ため息をついた。
    - 今日はクリスマスであり、鈴鹿のシニア級のクリスマスでもある。つまり、%YOU%と鈴鹿はもうすぐ三年を共に過ごしたことになる。
    - この三年、成績がどうであれ、鈴鹿の姿はすでに%YOU%の記憶へ深く刻まれていた。
    - 立ち上がると、急に鈴鹿を散歩へ誘いたくなった。
    - その次の瞬間、トレーナー室の扉が叩かれた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、いらっしゃいますか。」
    - 言い終わるか終わらないかのうちに、%YOU%は一気に扉を開け、%SEX%を驚かせた。
    - 外の鈴鹿は厚い服を着て、外出の準備ができている様子だった。
    - acc: 1
      content: 「鈴鹿、外を散歩しないか。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、外を散歩しませんか。」
    - %YOU%と鈴鹿は同時に相手を散歩へ誘い、聞いて一瞬呆け、それから同時に笑った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「奇遇ですね、%CALLNAME%。では、一緒に行きましょう。」
    - divider: true
    - ほどなく%YOU%と鈴鹿は外へ出た。だが、思うままに降っていた大雪は、もう終わっていた。
    - %YOU%は少し残念だったが、鈴鹿はそう思っていないようだった。
    - %SEX%は厚い積雪の上を踏み、時おり小さく走り、この空気をとても気に入っているようだった。
    - acc: 1
      content: 「鈴鹿は、雪のあとの空気が好きなんだね。」
    - 積雪の上に立ち、鈴鹿は振り返って、にこやかに%YOU%を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うーん、まだ%CALLNAME%に幼いころの話をしていませんでしたね。私が走りを好きになったのは、雪のあとの静けさからです。」
    - 鈴鹿が興に乗って幼いころを話し始めたので、%YOU%は興味を持ち、耳を立てて聞いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのころはまだ小さくて、あれほどの雪を初めて見ました……雪のあとの世界はとても静かで、大地も真っ白で……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「試しに数歩歩くと、雪を踏むきしむ音以外、ほかの音は一つもありませんでした。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それでゆっくり走り始め、だんだん速くなって、白い世界が私の周りを回る。天地のあいだに、自分だけがいるようでした。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「世界を独り占めするあの感じを、深く好きになりました。そのあとのさまざまな競走で気づいたんです。一番前の前方も、誰もいないのだと……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから、前方の誰もいない景色は、本当に自分で味わったら、もう他人に譲りたくありません。」
    - %YOU%がまだ幼いころの話に浸っていると、いつの間にか鈴鹿は%YOU%の腕に腕を通していた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「戻りましょう、%CALLNAME%。クリスマスは、まだやることが多いですから。」
    - こうして%YOU%と鈴鹿は、鈴鹿の生涯で最後のクリスマスの準備を始めた。

# 脚の古傷ルート
hope:
  title: 希望
  lines:
    - 机の前に座る%YOU%は、反射的に顔を上げ、窓の外を見た。
    - 気づかないうちに、学園では大雪が降っていた。羽毛のような雪片が空を漂い、もともと静かな世界を、さらに静かにしていた。
    - 窓の外の景色を見て、ため息をついた。
    - 今日はクリスマスであり、鈴鹿のシニア級のクリスマスでもある。つまり、%YOU%と鈴鹿はもうすぐ三年を共に過ごしたことになる。
    - そして功を収める直前、鈴鹿は一つのアクシデントで、選手生命を断たれた……
    - 悲しくなり、もう一度鈴鹿を見舞うことにした。
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「雪が降っていますね、%CALLNAME%。」
    - 鈴鹿はベッドに座り、夢中で窓の外を見ていた。%YOU%がベッドのそばへ来ても、振り返らなかった。
    - 続いて、%SEX%はひとりで過去を話し始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うーん、まだ%CALLNAME%に幼いころの話をしていませんでしたね。私が走りを好きになったのは、雪のあとの静けさからです。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのころはまだ小さくて、あれほどの雪を初めて見ました……雪のあとの世界はとても静かで、大地も真っ白で……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「試しに数歩歩くと、雪を踏むきしむ音以外、ほかの音は一つもありませんでした。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それでゆっくり走り始め、だんだん速くなって、白い世界が私の周りを回る。天地のあいだに、自分だけがいるようでした。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「世界を独り占めするあの感じを、深く好きになりました。そのあとのさまざまな競走で気づいたんです。一番前の前方も、誰もいないのだと……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから、前方の誰もいない景色は、本当に自分で味わったら、もう他人に譲りたくありません。」
    - 鈴鹿の軽やかに聞こえる言葉が、かえって%YOU%の胸を重くした。
    - 続いて鈴鹿は振り返って真剣に%YOU%を見た。目が赤く、泣いたあとのように見えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、外へ連れていってください。この大雪を、もっとよく感じたい。大好きなコースを、もう一度見たいんです……」
    - 鈴鹿の声は詰まり、聞いている%YOU%も涙が出そうになった。
    - そこで主治医を探し、鈴鹿のこの小さな願いを叶えてほしいと頼んだ。
    - 許可を得ると、興奮している鈴鹿を車椅子に乗せて病院を出た。
    - content:
        - fontWeight: bold
          content: 主治医
        - 「ええ、%SEX%は術後の治療にとても協力的で、そのおかげで回復は私の予想を大きく上回っています。」
    - content:
        - fontWeight: bold
          content: 主治医
        - 「このまま前向きに治療を続ければ、普通に歩いたり軽く走ったりできるかもしれません——ただし、再び訓練やレースに出ることは、完全に不可能です。」
    - 主治医はそう言った。%YOU%と鈴鹿にとっては、十分な思いがけない喜びだった。
    - もともとの見通しでは、鈴鹿はもう走れず、歩くのにも両松葉杖が要るはずだった。
    - だから治療はまだ終わっていないが、車椅子で外の風に当たることは十分できた。
    - %YOU%は鈴鹿を押し、大雪の世界をゆっくり進んだ。鈴鹿は普段よりずっと興奮していて、立ち上がりそうにさえなった。
    - 子供のように雪片を追う鈴鹿を見て、胸の中はさまざまな味が混ざった。

# 全勝エンディング
invincible:
  title: 全戦全勝
  lines:
    - 過ぎた三年、千を超える日夜、%YOU%と鈴鹿は共に努力し、栄誉を次々と掴んだ。
    - いまは、祝福と敬慕を受け取るときだ。
    - 競走%UMA%界で名のある各媒体が「%YOURNAME%トレーナーと%CHARA%の時代」と打ち出すにつれ、%YOU%と鈴鹿の生活は大きく変わった。
    - 鈴鹿は生きた伝説となり、逃げの%UMA%の中で異論のない第一人者となった。
    - そしてあなたも、自然と逃げの%UMA%を導く権威となった。
    - 入学したばかりの%UMA%の多くが鈴鹿を手本にし、逃げ、あるいは大逃げを好むようになった。
    - 効果はともかく、少なくとも%THEY%のトレーナーから見れば、逃げをきちんと走るには、結局%YOU%と鈴鹿に教えを乞うことになる。
    - 仕事の合間、%YOU%はしばしば鈴鹿の真剣な横顔をぼんやり見た。
    - 鈴鹿に出会わなければ、自分の生活がこれほど色づくことがあっただろうか。

# 脚の古傷なし、非一着が2以下
better_ending:
  title: 功成り名を遂ぐ
  lines:
    - 過ぎた三年、千を超える日夜、%YOU%と鈴鹿は共に努力し、栄誉を次々と掴んだ。
    - 敗戦もあったが、鈴鹿は極めて高い勝率で、人々の口に上る「伝説の%UMA%」となった。
    - 惜しいことに、そのあと%YOU%と鈴鹿の生活は、以前とはまったく違った。
    - 鈴鹿はもう現役%UMA%としてコースに立つことはないが、外出するたびにサインを求めるファンに出会う。
    - そして鈴鹿は、いつも丁寧にファンへサインをした。
    - そういう場面に出会うたび、%YOU%は思う。トレーナーとしてのキャリアは、すでにほぼ完璧だと。

# 脚の古傷あり、非一着が1以下
good_ending:
  title: 翼折れた天使
  lines:
    - 過ぎた三年、千を超える日夜、%YOU%と鈴鹿は共に努力し、栄誉を次々と掴んだ。
    - %YOU%と鈴鹿は、本来なら最も注目される組み合わせになるはずだった。
    - 最後に、不完全な句点がなければ。
    - だから各媒体は口を揃えて言う。運が悪くなければ、鈴鹿は絶対に天皇賞（秋）を取れていた、と。
    - それに対して、鈴鹿は小さく微笑むだけだった。
    - そのあとの日々はこれまでどおり、淡く、記憶に残るほどのこともない。
    - だが、鈴鹿の復帰をまだ期待するファンに出会うと、日々はそれほど淡くもなくなる。
    - そういうファンに出会うたび、%YOU%と鈴鹿は黙って向き合うしかなかった。

normal_ending:
  title: 相まってこそ
  lines:
    - %YOU%とサイレンススズカの三年は、やっと終わった。
    - 三年のあいだ%YOU%はサイレンススズカを率い、悪くない成績を残した。だが強者の林立するトレセン学園では、まだ力不足に見えた。
    - ほどなく、新しい世代の%UMA%たちが、さらに眩しい成績で舞台の中央を占めるだろう。
    - そのころには、かつての大逃げ型、サイレンススズカを覚えている人は、もう多くないかもしれない。
    - だが、淡々とした生活こそ、サイレンススズカの好むものかもしれない。
    - ある意味では、互いに引き立て合い、功もなく過もない。それも悪くないのではないか。

# 鈴鹿が宝塚記念／金鯱賞を欠場したうえで脚を負傷した場合
crazy_fan:
  title: 的外れ
  lines:
    - 空に積み重なる黒雲を見て、%YOU%は足を速めた。
    - 今日は鈴鹿が病院で再診を受ける日で、%YOU%は学園まで迎えに行くつもりだった。
    - ただの外出にすぎないのに、%YOU%には不吉な予感がまとわりついていた。
    - 錯覚だと自分を説得し続け、ある路地へ入った。
    - この路地を使えば病院へ早く着く。だが出口に、古い車が止まっていた。
    - 仕方なく、来た道を戻ろうとした。
    - 振り返ろうとしたとき、目の前が突然暗くなった。
    - 鼻腔に土臭い匂いが広がり、誰かに袋を被せられた。
    - もがいて助けを呼ぼうとした瞬間、後頭部を強く殴られた。
    - 意識を失った。
    - 目が覚めると、どことも知れない田の畦に横たわっていた。
    - 傍らには、路地の出口を塞いでいたあの古い車が止まっている。
    - content:
        - fontWeight: bold
          content: ？？？
        - 「よう、目が覚めたか、%YOURNAME%。」
    - 急いで振り返ると、筋の浮いた体に、裸の上半身は刺青だらけの男がいて、ぞっとした。
    - 彼は%YOU%の怯えた様子を見て、手のバットを軽く振り、歯を見せて笑った。
    - content:
        - fontWeight: bold
          content: ファン
        - 「自己紹介しておく。俺は%CHARA%の熱狂的なファンだ。」
    - その笑顔を見つめ、恐れはさらに増した。
    - content:
        - fontWeight: bold
          content: ファン
        - 「で、%YOURNAME%。俺には一つ、聞きたいことがある。」
    - content:
        - fontWeight: bold
          content: ファン
        - 「鈴鹿にレースを欠場させる度胸があるなら、なんで天皇賞だけは執拗に%SEX%を出したんだ。」
    - content:
        - fontWeight: bold
          content: ファン
        - 「お前の『英明な指導』のおかげで、鈴鹿は%SEX%必勝の一戦を逃しただけじゃなく、二度とコースに立つ権利まで永遠に失った……」
    - 目の前のファンの様子を見て、心の中で警報が鳴った。
    - content:
        - fontWeight: bold
          content: ファン
        - 「なら、お前自身に、鈴鹿の絶望を味わってもらおう。」
    - あっ！
    - 左脚に激痛が走り、自分の骨が折れる耳障りな音まで聞こえた。
    - ほどなく、右脚も同じようにされた。
    - 熱狂的なファンは名残惜しそうにバットを収め、口笛を吹いた。
    - content:
        - fontWeight: bold
          content: ファン
        - 「気に入ってくれるといいな。わざわざ選んだ、この人気のない場所を。幸運を祈るぜ、%YOURNAME%！」
    - そう言うと、彼は車で去っていった。
    - 両脚を折られた%YOU%は、激痛に耐えながら地面をゆっくり這うしかなかった。
    - ほどなく、失血で徐々に意識が落ちていった。
    - 闇に落ちる寸前、%YOU%はまだ思っていた。
    - こうなると知っていたら、あのとき……

# 徹夜のあとで発生
# スピード+5、根性+15
run_together:
  title: 併走
  lines:
    - acc: 1
      content: 「鈴鹿、鈴鹿？」
    - ある朝、訓練の前、鈴鹿が元気のない様子なのに%YOU%は気づいた。
    - acc: 1
      content: 「鈴鹿、またこっそり走ってたんでしょ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんなことは！ わ……きちんと寝ていました！」
    - 鈴鹿は驚いたように、反射的に否定し始めた。
    - 明らかに徹夜した様子の鈴鹿を見て、その言い訳を信じるつもりはなかった。
    - そこで目を転がし、ある方法を思いついた。
    - acc: 1
      content: 「分かった。じゃあ、訓練を始めようか。」
    - divider: true
    - 一日の訓練はすぐ終わり、%YOU%は鈴鹿を寮の入口まで送り、おやすみを交わした。
    - それから足早に寮の影へ回り、静かに待った。
    - 長く待たずに、運動着一式の鈴鹿が寮の入口に現れた。
    - 鈴鹿は慎重に左右を見てから、少し得意げに運動場のほうへ歩き出した。
    - %YOU%はそっとついていき、両手で鈴鹿の目を覆った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うわっ！」
    - acc: 1
      content: 「当～て～て～ご～ら～ん？」
    - わざと尖った裏声を使ったのに、鈴鹿はすぐ落ち着いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うっ、ごめんなさい、%CALLNAME%……」
    - acc: 1
      content: 「現行犯だ。鈴鹿、まだ言い訳はある？」
    - 目の前の%UMA%が緊張して困る様子を、%YOU%は眺め始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「も、もうしません、%CALLNAME%。安心してください……」
    - 急に、もっとおもしろい考えが浮かんだ。
    - acc: 1
      content: 「もう服を着てるんだから、走ればいい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？」
    - 鈴鹿は信じられない顔で%YOU%を見上げ、%YOU%は自分の決断をもう一度言った。
    - だが鈴鹿が歓声を上げる前に、意地悪く笑って二つの決まりを足した。
    - acc: 1
      content: 「ただし、僕に相談せず自主練をした罰として、ルールを二つ足す。」
    - 「第一、僕も一緒に走る。第二、僕を抜いてはいけない。」
    - 鈴鹿は明らかに%YOU%の意図を理解していなかった。だが結局、走りたい気持ちが、心の疑いを上回った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では……お願いします。」
    - こうして%YOU%は鈴鹿を、誰もいない訓練場へ連れていった。
    - %YOU%は標準的なジョギングの速さで走り始め、鈴鹿も素直に後ろについてゆっくり走った。
    - だがすぐに、鈴鹿はおかしいと感じ始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （%CALLNAME%が遅すぎます！ 私は逃げの%UMA%なのに、いま%CALLNAME%の後ろを走っている……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （苦しい。抜きたい。思うままに走りたい！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （うっ、もう余計なことは考えない。考えるのも体力を使います。なのに、少し疲れてきました……）
    - acc: 1
      content: 「鈴鹿、速すぎるよ。」
    - 横目で、明らかに上の空の鈴鹿が気づかないうちに歩を速めているのを見て、声をかけた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「す、すみません！」
    - 鈴鹿の声にすでに疲れが混じっているのを聞いて、少し嬉しくなった。
    - こうして鈴鹿を訓練場で何周も走らせ、汗だくになるまで続けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁはぁ……疲れました……%CALLNAME%はあんなに楽そうなのに……どうして私は、こんなに疲れるのでしょう……」
    - %YOU%は鈴鹿を傍らへ座らせ、少し休ませた。
    - acc: 1
      content: 「さて鈴鹿、次も僕に隠れて走るつもり？」
    - わざと険しい顔で責めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うっ、しません。ごめんなさい！」
    - 鈴鹿は顔を覆い、%YOU%の視線を正面から受けられなかった。
    - acc: 1
      content: 「よろしい。過ちを認めたなら、今から自分で二周走っていい。」
    - 鈴鹿の耳が立った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当ですか？ やった！」
    - 鈴鹿はその場で跳び、次の瞬間にはもう走路にいた。
    - 夜闇へ流星のように消える背中を見ながら、%YOU%は心の中で計算した。
    - これで当分は、%SEX%がこっそり走る気を抑えられるだろう。
