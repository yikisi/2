# @file メジロブライト - 育成
# @author KUN
train:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ええ～ もう準備できていますわ～」
      - 相変わらず急がない口調なのに、準備はとても速い。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%と一緒なら、どんなトレーニングでも大丈夫ですわ～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、一緒にがんばりましょう～」
  - if: era.get('love:74') === 100
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～ のんびりまいりましょう～」

# --------------------------------
# 主線
# --------------------------------
# 募集後
at_my_side:
  title: あなたは私のそばに
  lines:
    - 清風が中庭を吹き、ひとしきり涼を運ぶ。
    - %CHARA% は顔に付いた髪をそっとかき上げ、誰もいない木のうろを、少し上の空で見ている。
    - acc: 1
      content: 「何を考えてる？」
    - %YOU% の声に回想を遮られ、%CHARA% は振り返るが、いつもの笑顔はない。
    - もう一度そのうろへ向き直ると、%CHARA% が口を開く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ここは%UMA%たちが心を打ち明ける場所ですの。%CALLNAME%、ご存知ですわよね？」
    - それは %YOU% も当然知っている。むしろ学園中の常識だ。
    - だが %CHARA% の瞳には、別のものが見えていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前、家にいたころ、執事さんが仰っていました。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ときどきここで、とても悲しそうな%ELDER_SISTER%が、ずっと叫んでいらっしゃるのを見た、と。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よく、そういうことがあるそうですわ……」
    - %CHARA% の声に合わせて、%YOU% は年配の、メジロ家の執事を思い出す。
    - そう言えば、%SEX%が言うのは、メジロ家のある大先輩のことだろう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……だから、ときどき、ここで見えるのですよ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「直接見たわけではありませんのに、いつも見えてしまうのです。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_27%、%CALL_64%、%CALL_13%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%がここで泣いていらっしゃる姿が、いつも見えるのです。」
    - 視線がうろから %YOU% へ移り、軽く瞬きする。
    - 短い視線の交差のあと、%CHARA%の顔色はかなり楽になった。
    - 何かの妄想から解放されたように、またふにゃりとした笑顔を浮かべる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたがいらしてくださるなら、私はここで泣いたりしませんわよね？」
    - %YOU% を見る、あのぼんやりした顔に、純粋な笑顔が浮かぶ。

# ジュニア級6月3週、ときめき以上、同チームにメジロなし
mejiro_tea:
  title: メジロ家のお茶会
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、メジロ家へいらっしゃいません？」
    - 平凡な一日、%CHARA% が突然 %YOU% を訪ねてきた。
    - %CHARA% の招待を聞き、書面仕事を終えたばかりの %YOU% は、少し現実感がない。
    - acc: 1
      content: 「……は？ 俺？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%を、%ELDER_SISTER%たちにご紹介したくて～」
    - %CHARA% の明るい笑顔を見ると、嘘や冗談の色はまったくない。
    - acc: 1
      key: relation
      content: 「まあ、いいけど……」（好感+8）
    - acc: 2
      content: 「ぜひ連れていってくれ！」（好感+4、恋慕+1）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい～」
    - 長く待たされることもなく、門外に車の音がする。
    - もともと仕事の少ない日、時間を空けて %CHARA% と後部座席に乗った。
    - メジロ家の庭へ着き、すでに卓のそばで待つ%UMA%を見て、%YOU% の胸はどきりとする。
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「おや、ブライトのトレーナー%SIR%ですの？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「お茶会へようこそ～」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「あ、そんなに堅くならなくていいよ。楽にして。」
    - ふたりの%YOUNG_LADY%が円卓の向こうから、向かいの空いた椅子を示す。
    - 目の前の卓の点心と茶を見て、%YOU% の動きは少し不自然に硬くなる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さあ～ %CALLNAME%、こちらへお掛けくださいまし～」
    - 卓へ小走りした %CHARA% が、外側の椅子を引く。
    - いつものんびりした様子とは違い、はしゃいで %YOU% を座らせる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、紅茶はいかがです？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こちらの砂糖漬けと合わせますと、とても美味しいですわよ～」
    - acc: 1
      content: 「あ、確かに……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でしょう～ 飲みますと、体がほかほかしますわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、ついでに申しますと、これはドーベルに教わりましたのよ～」
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「……お二人、仲がよろしいですわね。」
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「ただ、目白家の一員として、外ではそのようなことはなさらないでくださいまし？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「外、ですの？」
    - %YOU% の隣に座る %CHARA% は少し呆け、まったく追いついていない様子だ。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「マックイーン、そう言ってもブライトには伝わらないよ……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「要するに、あんまりくっつくな、ってこと。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ～ そういうことでしたの～」
    - 納得した顔になってから、%CHARA% はやっと %YOU% に付いていた手を離す。
    - きちんと座り直して、ようやく%YOUNG_LADY%らしい。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「ほら、レースの話をするんじゃなかったっけ？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「ブライトも、あんまりまとわりつかないで～」
    - そう言われて %YOU% は思い出す。メイクデビューが近い。
    - %CHARA% の実力を %YOU% はあまり心配していないが、それでも少し揺れる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、そうでした。レースといえば——」
    - 少し眠たげな目を開き、やや真剣に話し始める。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私、%CALL_13%の走りがとても好きなのです。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走る姿が、とても美しい……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「優雅で、華やかで、理想的で、見惚れてしまいますわ～」
    - お世辞ではなく、心からの感嘆のようだ。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「あ、わかるわかる！」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「マックイーンの走り、本当に綺麗だよね！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、%CALL_27%の走り方も、とても好きですわよ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「力強くて、地面を踏み抜くような歩幅……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%ELDER_SISTER%の勝ちたい気持ちと同じくらい、強いのです！」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「大げさだってば……」
    - 円卓の向こうのふたりの先輩は少し照れて茶杯を上げ、顔を隠す。
    - %CHARA% だけが手の杯を置き、真剣に顔を上げる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも私は、のんびりしているせいで、ずっとあまり結果が出せなくて……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんな私にがっかりした方も、たくさんいらっしゃいます。でも……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……私も、%ELDER_SISTER%たちのような」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「胸が熱くなるレースを、走りたいのです。」
    - acc: 1
      content: 「胸が熱くなるレース、か……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自分を証明するため、それから……」
    - 前方のふたりの視線を受け、%CHARA% はのんびり振り返って %YOU% を見、正座して口を開く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私も、メジロ家の名誉のために……」
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「よろしい、少しお待ちなさい。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「マックイーン？」
    - %CHARA% を突然遮ったあと、%M_NAME%は手の紅茶を置く。
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「ブライト…… まずはご自分の走りを見つければよろしいのです」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - 「考えすぎますと、調子に響きますわ。」
    - acc: 1
      content: 「そうだ。まずは自分をやれ」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「二人の言う通りだよ、ブライト。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「まずは目の前のレース、ちゃんと準備しよう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%ELDER_SISTER%…… %CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ、わかりました！」
    - 真剣で厳しい表情を収め、また怠惰な笑顔に戻す。
    - ただ、力を抜いたあと、手が無意識に %YOU% の裾を掴む。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……これからは、お願いしますわ、%CALLNAME%～」
    - %CHARA% の目に合い、%YOU% も気づかないうちに笑う。
    - acc: 1
      content: 「ああ、任せてくれ！」
    - ついでに残った茶菓子は、ふわりとした空気のなかで%M_NAME%が頂戴した。

# メイクデビュー前
begin_race:
  - メイクデビューのとき、%CHARA% は入口で前方のコースを見つめ、そっと目を閉じる。
  - 少し深呼吸し、再び目を開け、いつもの怠惰さを払う。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「メイクデビュー……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「やっと、来ましたわ。」
  - acc: 1
    content: 「そんなに緊張しなくていい」
  - acc: 2
    content: 「自分の走りでいけ」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ええ、わかりました！」
  - いつものんびりした様子を一変させ、コースへ踏み出す。
  - %CHARA% という新しい星が、コースを進む。

# メイクデビュー後
begin_race_end:
  - 一番でゴールを駆け抜けたとき、%CHARA% はやっと気づく。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「一番…… ふわぁ～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私、できましたわ！」
  - 眼前の表示に大きく出た一着を見て、%CHARA% は手を上げ、ひとりで歓声を上げる。
  - %SEX%の道は、もう始まっている——
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_27%…… %CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私、がんばりますわ！」

# ジュニア級8月1週、ライアンが育成中でない
inherit:
  title: この意志を継いで
  lines:
    - メイクデビューのあと、%CHARA% と %YOU% はまたいつものトレーニングへ戻った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、今日もお疲れさまでした～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、一緒に帰りません？」
    - トレーニングが終わり、%YOU% が場を離れようとしたとき、声に呼び止められる。
    - %YOU% が振り返ると、%R_NAME% がゆっくり前まで来る。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「あ、邪魔しちゃった？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「ごめんね、邪魔して。でも…… 言っておきたいことがあって。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_27%？」
    - acc: 1
      content: 「言っておきたいこと？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「うん、そうなんだ……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「ごめんねブライト。トレーナー%SIR%と、少しだけ二人で話してもいい？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？ %CALLNAME%がご迷惑でなければ……」
    - %CHARA% の少し迷った許可を得ると、%R_NAME% はすぐ %YOU% の腕を取って数歩下がる。
    - その場で首を傾げる %CHARA% を一目見て、%YOU% のそばへ寄り、小さな声で話し始める。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「実はブライトのことで……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「前にブライト、私の走り方が好きって言ってたでしょ？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「昔の私、憧れる人じゃないって思ってたんだ。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「マックイーンみたいに優雅でもないし、パーマーみたいに豁達でもないし……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「レースも、全力なのにいつももう一歩届かなくて。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「でもブライトがいつも%SEX%の気持ちを教えてくれて、支えてくれたから、自信が持てたんだ。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「%SEX%があんたを選んだなら、ちゃんとした理由があるんでしょ。」
    - acc: 1
      content: 「ちゃんとした理由……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「だから、ブライト%SEX%をよろしくね！」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「……あと、小さな願いなんだけど、本当に……」
    - 言葉を止めた %R_NAME% は %CHARA% のほうへ首を出し、聞こえていないと確かめてから続ける。
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「ブライト%SEX%に、勝たせてあげてくれない？」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「あのとき私はできなかったけど…… %SEX%には、やってほしいんだ。」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「だって%SEX%は、私の自慢の%YOUNGER_SISTER%だもん。えへへ～」
    - acc: 1
      content: 「……少し難しいぞ？」
    - acc: 2
      content: 「わかった。任せてくれ」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「ありがとう…… ほら、ブライトを待たせすぎないで。」
    - 笑顔を収めた %R_NAME% は %YOU% の肩を叩き、押しつつ %YOU% をまた %CHARA% のそばへ戻す。
    - 力を抜いて去る %R_NAME% の背を見て、%YOU% は息をつくだけで、口には出せない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - acc: 1
      content: 「うん…… なんて言えばいいか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……レースのことでしたの？」
    - %YOU% の考えを読んだように、微笑んで口を開く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり、そうですわね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_27%でしたら…… 私に、どこかのレースへ出てほしい、というようなことでしょう？」
    - acc: 1
      content: 「よくわかってるな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_27%のレースは、どれも覚えていますわよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって%CALL_27%は…… いちばん好きな家族ですもの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%ELDER_SISTER%のためにも、自分のためにも…… 勝ちたいのです。」
    - acc: 1
      content: 「そうか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですので、これからもお願いしますわ、%CALLNAME%～」
    - 柔らかい笑顔のまま、%CHARA% は %YOU% の手を取る。
    # 好感+20

# ジュニア級11月1週
my_way:
  title: 自分で選んだ道
  lines:
    - トレーニングが終わっても、%CHARA% はいつものように去らず、場の端に静かに立ち、ほかの者の歩調を見ている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……今日も、よくがんばりましたわね。」
    - 日々トレーニングする%UMA%たちを見て、%CHARA% の尻尾がふわりと揺れる。
    - acc: 1
      content: 「どうした、気分が悪いのか？」
    - %CHARA% の前に立つ %YOU% は、直接%SEX%に触れず、目の前で手を振るだけだった。
    - 耳が軽く跳ねたあと、%SEX%はやっとゆっくり振り返って %YOU% の顔を見、いつもの表情を浮かべる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いいえ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただ、もう少し走りたいだけですの。」
    - acc: 1
      content: 「嘘が下手だな。一目でわかる」
    - acc: 2
      content: 「隠すようなこと、あるのか？」
    - %YOU% の前に立つ %CHARA% は少し呆け、それから少し照れて頬を掻く。
    - acc: 1
      content: 「何を考えてる？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「バレてしまいましたわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……最近、やる気がなくなってきた気がしますの。」
    - トレーニングを怠った様子はまったくないのに、%CHARA% はまだ自分が十分真剣でないと言う。
    - 夕陽はすぐに落ち、場のほかの%UMA%もトレーニングを終え、帰り支度をしている。
    - acc: 1
      content: 「疲れたのか？」
    - もうほとんど人のいない場から視線を外し、自分の両脚を見る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たぶん、そうですわ。あはは……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「少し、疲れただけ……」
    - %CHARA% の落ち着かない顔を見て、%YOU% は先日見たものと、先輩たちから聞いたことを思い出す。
    - メジロ家の歴史が、%CHARA% にかなりの圧力をかけているのかもしれない。
    - acc: 1
      content: 「家の圧力が重いのか？」
    - acc: 2
      content: 「その圧力を背負って、よくやってる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「違いますわ。」
    - 意外な否定。
    - のんびりした目がゆっくり集まり、顔を上げて %YOU% と目が合う。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%ELDER_SISTER%たちが昔がんばって残してくださった、メジロ家のすべて。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私は、家のみんながとても好きですの。だから、皆の歴史を続けたいのです。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから、がんばらなくては……！」
    - acc: 1
      content: 「じゃあ俺もがんばらないとな」
    - %YOU% の返事を聞き、%CHARA% の顔に柔らかい笑顔が浮かぶ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい！ %CALLNAME%！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一緒にがんばりましょう！」
    # 好感+15

# ホープフルステークス前
hope_sta:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……ふわぁ。」
  - いつものようにレース前、呼吸を整えている。
  - 普段のふわりとした感覚を真似ても、こうは落ち着かない。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ん…… 体の震えが止まりませんわ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「普段は、こんなことないのに……」
  - acc: 1
    content: 「緊張してるんだろ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ、%CALLNAME%～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……たしかに、緊張していますわね。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「だって、ジュニア級最後のG1ですもの。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「緊張くらい…… 普通ですわよ～」
  - acc: 1
    content: 「そんなに焦って、あれこれを考えなくていい」
  - %CHARA% の耳が器用に何度か跳ね、真剣に %YOU% の声を聞く。
  - 尻尾が不安そうに左右へ払われ、両手の指も絶えず動いている。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あれこれ……？」
  - acc: 1
    content: 「普段の自分がどうするか、それだけ考えればいい」
  - %YOU% の言うとおり、いま欠けているのは普段のゆっくりしたリズムだけだ。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「普段でしたら……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「紅茶を一杯用意するでしょうね～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「レースのあと、ドーベル%THEY%と一緒に……」
  - acc: 1
    content: 「いま、どんな感じだ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「どんな感じ、ですの？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「たしかに、落ち着きましたわ……」
  - 震えの止まった両手を見て、%CHARA% は少し呆ける。
  - だがすぐ、また笑う。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「たしかに、いつもどおりですわね～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ありがとうございます、%CALLNAME%～」
  - いつものように立ち上がり、穏やかにコースへ向かう。

# ホープフルステークス勝利
hope_sta_win:
  - 平常心を保ったまま、年末最後の一戦を危うくも勝ち取る。
  - 汗で全身が濡れているのに、顔にはふわりとした笑顔が残っている。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%～ 勝ちましたわよ～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「平常心は、やはり素晴らしいですわね～」
  - 平常心のまま勝った%CHARA%は、のんびり %YOU% のそばへ戻る。
  - acc: 1
    content: 「いつもどおり、だろ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ええ～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ、いつもどおりといえば……」
  - そっと %YOU% のそばを抜け、控え室へ潜り込む。
  - 汗だらけの服を脱ぎ、小さく笑って %YOU% を見る。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「舞台が終わりましたら、一緒にお茶会へ行きましょう～」

# ホープフルステークス敗北
hope_sta_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふわぁ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「みなさん、とても強いですわ……」
  - 少し落ち込み、コースに立って空を見、汗が落ちるに任せる。
  - 顔の水滴を拭い、選手通路を見る。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ……」
  - 入口に遠く立つ %YOU% が、いつものように見ている。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%、まだ見ていらっしゃいますの？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……もっとがんばらなくては。平常心を保って。」

# クラシック級3月3週
light:
  title: 胸の奥の自信を灯して
  lines:
    - クラシック三冠の第一戦が近づくのに、%CHARA% はトレーニング場へは行かず、事務所で %YOU% を待っていた。
    - %YOU% が用意したばかりの書類を持って出ると、すぐ %CHARA% に押されて校外へ向かう。
    - acc: 1
      content: 「あの、%CHARA_FULL%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私ですわ、%CALLNAME%～」
    - %YOU% の声には答えるが、手はまだ前へ押し続けている。
    - 校門を抜けて裏山へ向かうころ、やっと行き先がわかる。
    - acc: 1
      content: 「神社か…… そうだな」
    - acc: 2
      content: 「君も、そういうのを気にするんだな」
    - %UMA%たちが心の慰めにする神社を前に、%YOU% もだいたいこの旅の理由がわかる。
    - 鳥居を抜けてから、%CHARA% はやっと少し怯えて口を開く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「申し訳ございません、%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「誰かに付き添ってほしくて。だって…… まだ、少し緊張していますもの。」
    - 普段安定した表情に、いまは小さな揺れがあり、絶えず %YOU% の態度を窺っている。
    - acc: 1
      content: 「安心しろ。大吉じゃなくても、君は勝つと思う」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい！」
    - 自信のなかった表情が顔の紅に覆われ、尻尾まで興奮して左右へ振られる。
    - 少し深呼吸したあと、%CHARA% は振り返って社殿を見上げ、そっと硬貨を投げる。
    - ちん——
    - 鈴の乾いた音とともに、%CHARA% はのんびり籤を一本抜く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あら～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これ、%CALLNAME%の幸運をお借りしましたわね～」
    - 細い木籤を両手で摘み、%YOU% の前で見せびらかす。
    - acc: 1
      content: 「よかったな、大吉」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ～ %CALLNAME%にも、お礼を申し上げなくては～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、戻りましょう～」
    - %CHARA% の軽い足取りを見て、%YOU% も自然に笑う。
    - acc: 1
      content: 「もう帰るのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ～ 籤一本に頼ってはいけませんもの～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私も、トレーニングを続けなくては！」
    - その表情を見て、%YOU% も %CHARA% と一緒に笑い、トレセン学園へ戻り始める。
    # 好感+20

# 皐月賞
sats_sho:
  - 三冠の初戦、皐月賞。
  - 普段ぼんやりした %CHARA% は眼前のコースを見て、いつもの作風を一変させる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「三冠……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%ELDER_SISTER%たちが目指された目標を、いま、私が……」
  - acc: 1
    content: 「準備はできたか？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「はい、%CALLNAME%～」
  - 真剣に前方を見、両手を握ってから緩める。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「もう、準備はできています……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「メジロの名は、必ずきちんと継ぎますわ！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「どうか、しっかり見ていてくださいまし、%CALLNAME%～」
  - 通路の口に立ち、振り返って %YOU% のほうを見る。
  - 真剣な顔に、前方へ赴く笑顔が浮かぶ。

# 皐月賞勝利
sats_sho_win:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「勝ちました…… 勝ちましたわよ！ %CALLNAME%！」
  - 表示の下に立つ %CHARA% は大げさに両腕を振り、楽しそうに跳ねる。
  - 観客席の %YOU% へ歓声を上げ、後ろから退場の時間だと注意されるまで続ける。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「第一戦、勝ちましたわ～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「えへへ…… さすが%CALLNAME%ですわね～」

# 皐月賞敗北
sats_sho_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふわぁ……」
  - 耳が両側へぺたりと倒れ、ぼんやり巨大な表示を見る。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私、負けました……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%が、あんなにがんばってくださったのに。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%ELDER_SISTER%方からも、たくさん学んだのに。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私、もっとがんばらなくては……」

# 日本ダービー
toky_yus:
  - 一生に一度の舞台、日本ダービー。
  - 勝負服を着た %CHARA% は %YOU% のそばに寄り、そっと鼻歌を口ずさむ。
  - 周囲の観客席はとうに満員で、誰もがこのレースを待っている。
  - だがその緊張した一戦とは違い、まもなく出走なのに%CHARA%は静かなまま。
  - acc: 1
    content: 「そろそろ始まるぞ」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ええ～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私も、とうに準備できていますわよ～」
  - %YOU% のそばを離れ、ゆっくり通路の口まで歩く。
  - 観客席へ向かおうとする %YOU% へゆっくり振り返り、自分にしか聞こえない声で——
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「がんばりますわ、%CALLNAME%～」
  - 右手をそっと上げ、人差し指と親指を交差させ、小さなハートを作る。

# 日本ダービー勝利
toky_yus_win:
  - 最長の 2400 メートル中距離を、%CHARA% が一番で取る。
  - メジロ家の名を背負い、歴史に自分の足跡を残す。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「日本ダービー、勝ちましたわよ～」
  - ほかの者とは画風が違い、勝った%CHARA%はその場に立ち、前方の観客席へふにゃりと手を振る。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「勝ちましたわよ～」

# 日本ダービー敗北
toky_yus_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふわぁ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「やはり中距離は…… トレーニングを続けなくては。」
  - ゆっくり減速して観客席の前で止まり、一歩ずつ %YOU% のほうへ来る。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私、これでがんばった、と言えますかしら？」
  - 落ち込みつつも、%SEX%らしい落ち着いた微笑みは残している。

# 菊花賞
kiku_sho:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「3000 メートル…… 初めての長距離G1ですわ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「みなさん、とても賑やかですわね。期待していらっしゃるようです。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「マキちゃん…… 私、大丈夫かしら？」
  - 控え室に座る %CHARA% は小さな人形を抱き、自分に問う。
  - ふにゃりとした顔にはいつもの笑顔があり、金色の瞳に人形の小さな顔が映る。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_13%も、あのときはこんな空気のなかで出走されたのですわね。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「本当に、すごいですわ。」
  - 外は観客の期待した話し声に包まれ、出場する選手は誰もがかなりの圧力を受けているはずだ。
  - それでも %CHARA% は、のんびりしたリズムから外れない。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でもマキちゃん。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私もメジロ家の一員ですし、こういう…… こういう距離は得意なのです。」
  - acc: 1
    content: 「その様子なら、準備はできてるな」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「はい！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「だから、私は下がりません…… %CALLNAME%。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私は%CHARA%ですもの。」
  - 小さく笑って %YOU% に答えたあと、%CHARA% は芯のある瞳で、三冠最後の一戦へ向かう。

# 菊花賞勝利
kiku_sho_win:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふ、ふ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私…… できましたわよ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_13%のように、きれいな勝ちですわよ？」
  - color: %COLOR%
    content: ゴールに立ち、置き場のない手が胸に当てられ、息とともに上下する。
  - color: %COLOR%
    content: 少し疲れた目が観客席へ流れ、%CALLNAME% の姿を探す。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%のおかげですわ……」
  - color: %COLOR%
    content: 胸の鼓動が止まらず、押し続けている。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「胸が…… 止まりませんわ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「帰りましたら、%CALLNAME%と、%ELDER_SISTER%たちと、お茶会にいたしましょう～」
  - color: %COLOR%
    content: 顔に薄い紅を浮かべ、遠く観客席の %CALLNAME% を見る。
  - if: era.get('love:74') >= 50
    lines:
      - color: %COLOR%
        content: レースが終わってずいぶん経っても、胸の鼓動は止まらない。
      - color: %COLOR%
        content: 胸の鼓動は、まだ続いている。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あら……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「この感じは？」
      - color: %COLOR%
        content: 疲れた体に微妙な焦りが浮かび、すぐ消える。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「どうして、ですの？」
      - color: %COLOR%
        content: 困惑して小さく首を傾げ、自分の胸を見る。
      - color: %COLOR%
        content: 当然、見ているだけでは何もわからない。

# 菊花賞敗北
kiku_sho_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……負けました。」
  - color: %COLOR%
    content: ゴールに立ち、自分の着順を見る。
  - color: %COLOR%
    content: あまり気にしないはずの %CHARA% でも、堪えきれず悲しい。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「スタミナが、まったく足りませんわ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私もメジロ家の一員なのに、こんな失態を……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ごめんなさい…… %CALLNAME%。」

# ステイヤーズステークス
stay_sta:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「長距離の重賞……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「3600メートルの長距離、私は……」
  - ひとり門のそばに立つ %CHARA% は、壁に凭れて呼吸を整えている。
  - %YOU% が入口から入り、%CHARA% の肩を叩いて、やっと気づく。
  - acc: 1
    content: 「ここが君の得意距離だ」
  - G2とはいえ、G1に劣らないスタミナが求められる。
  - 長距離が得意な %CHARA% にとって、ここが%SEX%の舞台だ。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「仰るとおりですわ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「だって、メジロ家の強みはこれですもの～」
  - 肩を少し動かしたあと、振り返って控え室の扉を押す。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「レースである限り、全力でまいります。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%、しっかり見ていてくださいまし？」

# シニア級4月2週
for_tenn_spr:
  title: 天皇賞への執念
  lines:
    - 天皇賞が近づき、%CHARA% のトレーニング時間はまた一段長くなった。
    - ある日の追加トレーニングが終わっても、%CHARA% はすぐ去らず、その場に立っている。
    - 場に人は少なく、いちばん外側のコースに残っているのは %YOU% と %CHARA% だけだ。
    - acc: 1
      content: 「疲れるか？」
    - acc: 2
      content: 「この数日、よくやってる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ～ %CALLNAME%もお疲れさまでした～」
    - 少し息は上がっているが、笑顔は保てている。
    - すでに落ちかけた空を見て、金色の瞳に %YOU% の姿が映る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%…… 今日は、一緒に歩いていただけますか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私、%CALLNAME%とお話ししたいのです。」
    - %CHARA%の伏せた瞳を見て、%YOU% は異議なく%SEX%のそばへ行く。
    - ふたりは揃って場を離れ、並んで道を歩く。
    - acc: 1
      content: 「体は大丈夫か？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「問題ありませんわよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、優しいですわね…… でも、直接仰っても構いませんわよ。」
    - 話題を変えようとした %YOU% は少し呆けるが、すぐ元の顔に戻す。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇賞（春）……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私、必ず勝ちますわ。」
    - acc: 1
      content: 「怖くないのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……いいえ、ありませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このレースは、メジロ家の宿願ですの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっとわかっています。だから、怖くもありません……」
    - そう言いながら%CHARA%は、ふわりと顔を向ける。
    - ふたりの表情が合い、自然に笑う。
    - if: era.get('love:74') >= 50
      lines:
        - ただ笑い声のあと、%CHARA%の手がこっそり脇へ伸びる。
        - 手と手が軽く握られ、このとき%CHARA%のわずかな震えが %YOU% の胸へ伝わる。
        - acc: 1
          content: 「やっぱり、あるんだな」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「えへへ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%も、少しはありますわよね？」
        - 不安を指摘された %YOU% は少し不機嫌だが、笑うだけだった。
        - acc: 1
          key: 'relation'
          content: 「だって君の大レースだ」（好感+15）
        - acc: 2
          content: 「かわいい担当が出征するんだぞ？ 心配しないわけがない」（恋慕+2）
        - %CHARA%の人形のような顔が少し呆け、また %YOU% のそばへ寄る。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はい～ %CALLNAME%には、背きませんわ～」

# 天皇賞（春）
tenn_spr:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……来ましたわね。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「天皇賞。」
  - 震える体を見て、%CHARA% はだんだん不安になる。
  - 出走の準備はとうにできていても、圧力は確かに肩へ乗っている。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「天皇賞（春）の栄光、私は必ず……」
  - color: %M_COLOR%
    content:
      - fontWeight: bold
        content: %M_NAME%
      - 「そんなに緊張なさらなくてもよろしいですわよ？」
  - %CHARA% が気づく前に、扉はもう開いていた。
  - color: %M_COLOR%
    content:
      - fontWeight: bold
        content: %M_NAME%
      - 「あなたはずっとがんばっていらっしゃいました。今度のレースは、必ず応えてくれますわ～」
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「そうだよ。いつもどおりの走りでいいんだから！」
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「焦った顔、あんたらしくないよ！」
  - ふたりの%ELDER_SISTER%が控え室へ入り、優しく %CHARA% の肩を何度か叩く。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_13%…… %CALL_27%……」
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - 「あはは、言えることはもう取られちゃったね～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - 「でも私たちは信じてるよ。気ままに走ればいいんだから～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_64%…… ええ、わかりました！」
  - 三人の視線のなか、%CHARA% はもう一度両手を握る。
  - レースへの戦意を帯び、最初から見ていた %YOU% を見て、軽く頷く。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - acc: 1
    content: 「その様子じゃ、俺が足すことはないな」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「いいえ、そのお言葉だけで十分ですわ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「全力でまいります…… メジロの名のために！」
  - acc: 1
    content: 「じゃあ行け」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ええ！」

# 天皇賞（春）勝利
tenn_spr_win:
  - 勝った瞬間、%CHARA% のための歓声が観客席を巻き、コース全体を包む。
  - ゆっくり減速した %CHARA% は表示を見、周囲の声を聞いてから、やっと歓声を上げる。
  - 天皇賞（春）の盾は、またメジロ家の手に落ちた。
  - さすが %CHARA%…… 観客席の %YOU% は気づかないうちにそう思い、そばで同じく興奮するメジロ家の面々と一緒に、相棒へ拍手する。
  - このとき、%YOU% の考えを感じ取ったように、%CHARA% は振り返って観客席を見る。
  - 相棒であるふたりの目が合い、阿吽で揃って笑う。
  - if: era.get('love:74') >= 50
    lines:
      - 明るい笑顔のまま、一路小走りで %YOU% の前まで来る。
      - 少しわざと %YOU% のそばの%SIBLINGS%を無視し、小さな声で呼ぶ。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「私たち、成功しましたわよ～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……帰りましたら、一緒にチョコレートをいただきましょう～」
      - 突然の単語に %YOU% は少し呆けるが、すぐ意図がわかる——
      - 少し意地悪な %CHARA% だ。

# シニア級5月1週、天皇賞（春）一着
mejiro_name:
  title: その名はメジロ
  lines:
    - 勝利のあと、名もない圧力が少しずつ散っていく。
    - ふたりの事務所で、%CHARA% は安心してソファに横たわる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふわぁ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんだか、とても楽ですわ～」
    - 勝利のご褒美なら、今日は %CHARA% の休日のはずだ。
    - それでも素直に事務所にいて、静かに %YOU% の動きを見ている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、お休みにならないのですか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっとお仕事ですと、体が持ちませんわよ？」
    - ソファから起き、%YOU% の後ろに立ってぼんやり見る。
    - 空いた両手を背もたれに置き、首を傾げる。
    - 柔らかい吐息が %YOU% の後頸に当たり、産毛が不自然に立つ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？ お仕事は終わりましたの？」
    - %YOU% の指が止まったのを見て、%CHARA% は純粋に尋ねる。
    - acc: 1
      content: 「いや、大丈夫だ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのね、%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇賞（春）、もう終わりましたわね。」
    - acc: 1
      content: 「ああ」
    - %CHARA% の話題の逸らし方は少し硬いが、%YOU% はそれでも話を受ける。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いまは、目標をどこへ置けば……」
    - acc: 1
      content: 「レースより、休まないのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いいえ、休みはちゃんとしますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも…… 目標が決まらないと、時間がふわぁ～と過ぎてしまいますわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、これもメジロ家のためですもの。」
    - acc: 1
      content: 「ブライトは、本当にそれが気になるんだな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「当然ですわよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって、%ELDER_SISTER%たちと約束しましたもの。」
    - ふにゃりと背もたれに伏せていた %CHARA% はゆっくり顔を上げ、何もない前方を見る。未来が見えるように。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私も、そう願っていますの…… メジロ家の名を、ずっと続けていきたい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「レースも、ほかのことも。」
    - 前方を見ていた目がゆっくり下り、振り返った %YOU% の顔を見る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、私のそばにいてくださいますか？」
    - acc: 1
      key: relation
      content: 「俺は君のトレーナーだ。当然だろ？」（好感+20）
    - acc: 2
      content: 「ずっとそばにいるよ、ブライト！」（恋慕+3）
    - %YOU% の答えを聞き、%CHARA% はぼんやり目を見開く。
    - だがすぐ、顔の微笑みに押し戻される。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ…… はい！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私たちふたりで、メジロの名を続けていきましょう～」

# 宝塚記念
# ドーベル出走あり
takz_kin:
  - 宝塚といえば、メジロの名にも席がある。
  - そう思いながら、いまの %CHARA% はコースに立ち、熱風が吹き抜ける芝を見ている。
  - なぜか、この場では少し落ち着かない。
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「あの、ブライト？ 様子がおかしいわよ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「いいえ、何もありませんわよ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ドーベルはどうですの？ 宝塚記念の出走者は、みな強い%UMA%ですわよ。」
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「私は、特に気にしてないけど……」
  - ふたりはゲートの前に立ち、熱風が芝を吹くのを見る。
  - 妙に焦る %CHARA% が肩を動かし、ぶつかる音を立てる。
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「あの、ブライト？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ん？ どうかなさいましたの？」
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「もう、その…… ゲートに触らないで。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「え—— そうでしたの？」
  - 思いを止めた %CHARA% は、隣から顔を出した%D_NAME%を見て、ぼんやり顔を傾げる。
  - %CHARA% が気づかないうちに付けた小さな凹みは、誰も気づかなかった。

# 天皇賞（秋）
tenn_sho:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ん……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「天皇賞（秋）、ですわね。」
  - 控え室の壁のポスターを見て、%CHARA% はぼんやり隣の %YOU% へ寄りかかる。
  - 尻尾が軽く何度か揺れ、柔らかい毛が %YOU% の腕に落ち、少しくすぐったい。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あのね、%CALLNAME%。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「中距離のレース…… 私、勝てますかしら？」
  - 長距離が得意な %CHARA% にとって、中距離の天皇賞（秋）は自分への挑戦だ。
  - acc: 1
    content: 「勝つさ」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ええ、私もそう信じていますわ。」
  - %YOU% の声に、%CHARA% の耳が軽く二度跳ねる。
  - if: era.get('love:64') >= 50
    lines:
      - 視線をポスターから外し、少し上へ移して %YOU% の横顔を見る。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ありがとうございます、%CALLNAME%……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「メジロ家の名は、続けてまいります。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そのとき、%CALLNAME%も私と一緒に……」
      - 言葉が短く止まったあと、金色の瞳には %YOU% の姿だけが残る——
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「メジロ家で、一緒に……」
  - レース準備の声が、もう始まっている。
  - 椅子から立ち上がり、人形のような長いスカートを何度か叩く。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私、全力でまいります！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「天皇賞（秋）！」

# 天皇賞（秋）勝利
tenn_sho_win:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「はぁ、はぁ……」
  - 慣れ親しんだ長距離と違い、中距離の速いリズムは、スタミナ十分な %CHARA% でも息を止められない。
  - だが周囲から来る歓声は、いまの体の疲労に意味があったと証明している。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「みなさん……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「これなら…… %ELDER_SISTER%たちも、お祖母さまも、喜んでくださるでしょうね。」
  - 清らかに笑う %CHARA% は歓声の観客へ、ふわりと腕を振って挨拶する。

# 有馬記念
arim_kin:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - acc: 1
    content: 「……」
  - 年末最後の一戦、有馬記念。
  - 勝負服に着替えた %CHARA% は緊張して通路の口に立ち、深く息を吸う。
  - 背後に馴染みの声が響き、%CHARA% の硬い動きがやっと中断される。
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - 「懐かしいね～ 有馬記念！」
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「そんなに緊張しなくていいよ、ブライト。長距離は得意でしょ？」
  - color: %M_COLOR%
    content:
      - fontWeight: bold
        content: %M_NAME%
      - 「緊張しているのはライアンのほうですわよ～」
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - 「そんなことないよ。ブライトの応援してるだけ！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ええ～ ちゃんと受け取っていますわよ～」
  - %ELDER_SISTER%たちの冗談のなか、緊張で震え続けていた体が少しずつ静まる。
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「あの、ブライト。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ん？ どうかなさいましたの？」
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「……がんばって。」
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - 「私たちは、ずっと応援してるから！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「はい～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「メジロの名にふさわしい走りを、いたしますわ～」
  - %D_NAME% の赤い顔の応援のあと、%CHARA% は小さく笑う。
  - 振り返り、あと一歩でコースへ入る。
  - acc: 1
    content: 「がんばれ！」
  - 壁に凭れる %YOU% が、%CHARA% に言う。
  - acc: 1
    content: 「メジロ家の名だけじゃなく、ブライト自身のために——」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふふ、%CALLNAME% がそう仰るなんて、少し意外ですわ～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「わかりましたわ。%CALLNAME% の想像どおりの——」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あの %CHARA% の姿を、お見せしますわ！」
  - 前へ踏み出し、有馬記念のコースへ入る。

# 有馬記念勝利
arim_kin_win:
  - content:
      - fontWeight: bold
        content: 実況
      - 「有馬記念の勝者は——%CHARA%！」
  - 歓声が、%CHARA% のそばまで押し寄せる。
  - メジロの名に恥じず、%SEX%の勝利を走った。
  - 家のために自ら枷をかけていた %CHARA% は、いまその責任を完全に下ろしている。
  - 控え室へ戻った %CHARA% はきちんと座り、尻尾が嬉しそうに左右へ払う。
  - 長いアホ毛が魂を持ったように上下に跳ね、口ずさむ小曲に合わせて跳ねる。
  - 滑らかな長髪を %YOU% がそっと梳き、いつものすべすべに戻す。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「さすが %CALLNAME% ですわね～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「とても気持ちよいですわ～」
  - if: era.get('love:74') >= 90
    lines:
      - %YOU% の動きに合わせるため上半身は自由に動けないが、尻尾はもう不真面目な動きを始めている。
      - 茶色の毛がそっと %YOU% の脛に絡み、前へ小さく何度か引く。
      - acc: 1
        content: 「レース、きれいだったよ」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふふ～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「だって%CALLNAME%が教えてくださったのですもの～」
      - acc: 1
        content: 「へえ、うまく言う」
      - acc: 2
        content: 「それだけか？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふ～わぁ～」
      - 椅子がもう少し低くなければ、いまごろ %CHARA% の小さな脚は揺れていただろう。
      - 長髪が整うまで、揺れる小さな頭を放さない。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ん…… 本当に気持ちよいですわ～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やはり、%CALLNAME%はこういうことがお上手ですわね～」
      - 椅子に座る %CHARA% は振り返り、%YOU% の様子を見る。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「いま、レースは終わりましたわね……」
      - acc: 1
        content: 「ああ。しばらく休めるな」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「これから…… %CALLNAME%は、一緒に帰っていただけますか？」
      - わずかに上下する胸の動きがだんだん速くなり、静かな空間では心拍まで聞こえるようだ。
      - 勝った %CHARA% の晩餐の準備へ会場へ向かった姉妹たちは、いまは現れない——
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「私…… 珍しく、少し急ぎたくなりましたわ～」
      - acc: 1
        key: sex
        content: 「らしくないな。帰ってからにしよう？」（恋慕+5）
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「らしくない、ですの……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふふ～ %CALLNAME%、あなたものんびりがお好きですわね～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……では、私は%CALLNAME%を待ち続けますわ。」
          - いつものと変わらない笑顔のまま、端正に立ち上がり、ゆっくり %YOU% の前まで来る。
          - そっと %YOU% の顔に、清らかな香りの印を残す——
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どうか、これを予定に入れてくださいまし～」
      - acc: 2
        content: 「珍しいなら、付き合うよ……」
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ええ～」
          - ふわりとした声のまま、そっと立ち上がる。
          - 肉付きのいい頬が %YOU% の胸に埋まり、%YOU% の感触を味わっている。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「急がば回れ、ではなく……」
          - 細い指が勝負服の襟を動かし、白い下着を見せる。
          - 空いたもう一方の手が、%YOU% の掌をゆっくり自分の胸へ置く。
          - 温かく柔らかい肉体を、%YOU% の手がしっかりと掴む。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どうか…… 急いで～ してくださいまし～」
          # 馬跳び

arim_kin_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ…… ずっしりしますわ～」
  - 疲労に襲われた小さな腹を両手で抱き、顔はぼんやりかわいい笑顔。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「少し急ぎすぎましたかしら？ ふんふん～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも、%CALLNAME%のことは嫌いではありませんわよ？」
  - 休憩時間が終わる前に、%YOU% は %CHARA% の着替えを手伝う。
  - 間に合いそうになかった理由は、%YOU% のほうだ。

# week_end
# 終了後1月4週、主線イベント発火数>4
accel_era:
  title: だんだん速くなる時代
  lines:
    - 三年が終わり、%CHARA% と %YOU% は穏やかな休日、初めて会ったときと同じように公園のベンチに座っている。
    - ふたりのあいだから少しずつ逃げる時間を味わいながら、眼前で朝練する%UMA%たちも眺めている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いまの感じ、とても馴染みますわね～」
    - 声にはふわりとした感触が残っているが、自然ではない部分も感じられる。
    - ゆっくりしたリズムに慣れた %CHARA% にとって、眼前の新人%UMA%たちが加速する様子は、どんな思いだろう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、あの落ち葉を一緒に待ってくださったのは、%CALLNAME%だけですわ～」
    - acc: 1
      content: 「そうか……」
    - 相棒としての時間が、いまの %CHARA% の言いたいことを %YOU% に解いている。だが、はっきりとは言わない。
    - スタミナよりスピードが要るレースは、%CHARA% の舞台ではない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「緑の葉ですわ……」
    - acc: 1
      content: 「今年の緑は早いな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日は、枯葉は見えませんわね。」
    - 声には一筋の名残惜しさがあるが、あまりはっきりはしない。
    - acc: 1
      content: 「どこも速くなってるな……」
    - %CHARA% と並んで座る %YOU% は視線を辿って上を見る。枝には初対面のときの枯葉はない。
    - %SEX%の言うとおり、小さな新緑が枝先に出ている。
    - acc: 1
      content: 「植物まで速くなったな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、そんなに婉曲におっしゃらなくても。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私でも、いまのレースはきちんと見にまいりますわ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みなさん、マイルの子たちへ関心を移していらっしゃいますわよね？」
    - いつの間にか、そばの金色の瞳は %YOU% へ向いている。
    - 名残惜しさ、哀しみ、だが芯がある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いつか、メジロ家にも、そういうコースへ出る子が現れるでしょう……」
    - acc: 1
      content: 「ああ、いるさ」
    - acc: 2
      content: 「必ずいる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとうございます……」
    # 好感+50

# --------------------------------
# 発火イベント
# --------------------------------
# out_shopping
# 熱恋以上、シニア級新年
hot_spring_ticket:
  title: 温泉旅行券……？
  lines:
    - 新年の商店街はどこも賑やかで、普段ふにゃりとした %CHARA% も興奮し、%YOU% の手を引いて気づかないうちに足が速くなる。
    - 屋台から焼きたてのたこ焼きを両手で受け、立ち上る湯気をそっと吹く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、%CALLNAME%、一口いかがです？」
    - 年初の空は少し冷たく、%CHARA% の口から温かい白い息が絶えず出る。
    - 手の竹串が熱々の団子を刺し、%YOU% の前へ運ばれる。
    - ここまで来て、%YOU% も自然にマフラーを下ろして一口……
    - 間違いなくすぐ火傷し、半泣きで舌を出すしかない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、どうぞ、お飲み物ですわよ～」
    - %YOU% が悲しそうに舌の処置を考えているとき、%CHARA%が冷たい果汁を差し出す。
    - 甘酸っぱい味が火傷の痛みを押さえ、%YOU% の顔の悲しみを押し下げる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、%CALLNAME%、あちらをご覧なさいまし」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「くじ引きのようですわよ？」
    - %SEX%が指さすのは、入口付近の屋台だ。
    - 先ほどの飲み物を含めれば、くじには足りるはずだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抽選券、もう換えておきましたわよ～」
    - %YOU% が何か言う前に、%CHARA% はもう %YOU% を引いてくじの列へ向かう。
    - acc: 1
      content: （いつの間に……）
    - %CHARA% の耳がぴょんぴょん跳ね、時おり振り返って %YOU% の顔を窺う。
    - 静かに列に従い、気づかないうちに番が来る。
    - 目を輝かせる %CHARA% を見て、%YOU% は自然に手を伸ばし、一緒にくじ機のハンドルを掴んでゆっくり回す。
    - 転がる音とともに、%CHARA% の揺れていた耳が突然立つ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: 商店街の職員
        - 「おお、おめでとう！ 温泉旅行券だよ！」
    - acc: 1
      content: 「え？ 本当か？」
    - 気づいた %YOU% がトレイを見下ろすと、金色の小さな球が真ん中で転がっている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、温泉旅行券ですわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもいまはまだ戦いの準備がありますもの。行く時間はないでしょうね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……でも、%CALLNAME%、付き合ってくださいますわよね？」
    - 拒否させる気などまったくなく、その旅行券を %YOU% の前へ押しつける。
    - これでは受け取らざるを得ない。

# out_start
# 四年目2月2週、温泉券あり
hot_spring:
  title: 温泉～ふわりと～
  lines:
    - レースの日々は一段落し、引退まわりもだいたい片付いている。
    - 忙しさが終わった %YOU% と %CHARA% は息をつき、商店街の近くへ来て、しばらくきちんと休むつもりだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、そういえば……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのとき、ここでいただきましたわよね？」
    - 馴染みの屋台まで来たとき、%CHARA% が不意にそう言う。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、いまお持ちですの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私たちの温泉旅行券～」
    - 今日の予定は、この話を出すためだけにここに来たようだ。
    - 当然、その旅行券はいま %YOU% の財布のなかで、時機を待っている。
    - acc: 1
      content: 「もちろん。いま行くつもりか？」
      lines:
        - 財布から旅行券を取り出すのを見て、%CHARA%の半眼が少し大きく開く。
        - 券面の期日を見つめ、少し大げさに %YOU% の手を取る。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、もうすぐ期限切れですわ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いっそ、今日行きません？」
        - 少し困惑した %YOU% が旅行券を裏返して見ると、残り数日だった。
        - なら、思い切って出発しよう。
    - acc: 2
      content: 「あれ、持ってないな（棒読み）」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そんな～」
        - %CHARA% のかわいい声が長く伸びるが、よく聞けばわざとだとわかる。
        - わざとなら、続きがある。
        - 小走りで来た %CHARA% が %YOU% の袖を何度か引き、小さな女の子のように甘えた目を見せる。
        - 作り物だとわかっていても、普段見ない潤んだ大きな目は、%YOU% が%SEX%をからかうつもりだった心に罪悪感を起こす。
        - ほかの考えを収め、財布を開いて探すふりをし、旅行券を出す。
        - acc: 1
          content: 「あ、あった（棒読み）」
        - 出した旅行券を見て、%YOU% は少しおかしいと感じる。
        - %CHARA% の期待に満ちた顔のなか、%YOU% は旅行券を取り上げて期日をきちんと見る——
        - acc: 1
          content: 「残り三日じゃないか！？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あら～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「無駄にしないため、一緒に行きましょう？」
        - 丸い小さな顔が少し傾き、%YOU% の肩に凭れる。
        - ここまで来て、断れるはずがない。
    - ウマ推で人気の高いこの宿へ着くと、%CHARA% も気づかないうちに %YOU% の手を握りしめる。
    - 手の力を感じて横顔を向けると、ちょうど %CHARA% の元気な目と合う。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、一緒に入りましょう～」
    - そう言い、%CHARA% は %YOU% を引いて大門へ向かい、少し慣れた様子でフロントで部屋を取る。
    - 後ろでそれを見る %YOU% の口角も、自然に上がる。
    - divider: true
    - 湯船に身を預けたとき、%YOU% は気づかないうちに心地よい声を漏らす。
    - ウマ推で人気があるのには、やはり理由がある。
    - 湯に浸かり、流れに任せて滑り、水温を味わう……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うわぁ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほかほかですわ～」
    - 耳元に届く %CHARA% のふわりとした声が、この休暇に安心を足す。
    - ただその安心は時間とともに、少しずつ不安へ変わる。
    - acc: 1
      content: 「ん？ ブライトは？」
    - 少しふらつく %YOU% が湯から立ち上がり、出ようとしたとき、何か気づく。
    - %CHARA% が出ていった様子を見ていない。
    - 世話の焼ける担当のため、%YOU% は手近なタオルを掴んでほかの湯へ行こうとして、馴染みの長髪がすぐそばにあるのに気づく。
    - この距離なら、ほぼ全部見えている。
    - acc: 1
      content: %SEX%は天然だと思おう。うん。
    - acc: 1
      content: わざとだろう……
    - 考えすぎるのをやめ、しゃがんで%CHARA%の様子を見る。
    - %CHARA% にとっては、これはとても自然な現状だ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふわわぁ……」
    - 温泉の温かさに、とても自然に湯あたりしてしまったらしい。
    - 少し力を入れて湯のなかの体を起こし、視線をできるだけ逸らし、タオルを掛ける……
    - acc: 1
      content: 「まったく、世話が焼ける」
    - 口では小さく呟いたあと、%YOU% はそれでも素直に %CHARA% を抱いて眠りから連れ出し、ふたりで湯の縁に座る。
    - %YOU% がそっと体の水滴を拭いていると、%CHARA% もゆっくり目を開ける。
    - そばの人を確かめた瞬間、迷わずそばへ擦り寄る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「くらくらしますわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、%CALLNAME%がそばにいてくださって、よかったですわ～」
    - 迷わず %YOU% の懐へ潜り、丸い顔を %YOU% の腹に寄せる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……あれ？」
    - %YOU% の懐に伏せた %CHARA% が突然震え、ゆっくり顔を上げる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんだか、熱いですわよ？」
    - 知りつつ問うような %CHARA% が、そっと %YOU% のタオルを掴む。
    - 白いタオルが下りたとき、%CHARA% の顔は紅でいっぱいになる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%…… 興奮していらっしゃいますわ……」
    - 温泉の温度のせいか、%CHARA% の顔は紅でいっぱい、少し羞恥して視線を逸らす。
    - acc: 1
      content: 「君のせいだぞ」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私のせい……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも%CALLNAME%、そんなに嫌ではございませんわよね？」
        - 自覚して少し下がり、人柄に合わない僥倖の発言をする。
        - 気づかないうちに間違えた%CHARA%を罰するため、%YOU% はタオルを払って前へ——
        - 嘘を吐こうとした唇を、強引に塞ぐ。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「んん！」
    - acc: 2
      content: 「大丈夫だよ、ブライト」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも、%CALLNAME%、苦しそうに見えますわ……」
        - %CHARA% の言うとおり、%YOU% はまだ笑っているが、体は嘘をつかない。
        - 紅い様子は、温泉のせいだけではない。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いいえ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これが私のせいなら、責任を取らなくては！」
        - 今回の反応は意外と速く、すぐ体勢の不安定な %YOU% へ飛びかかる。
        - 耳元の荒い呼吸を聞き、%YOU% は決めた——
        - acc: 1
          content: 「我慢しない！」

hot_spring_sex:
  - 部屋へ戻ったとき、%YOU% も %CHARA% も顔が真っ赤で、どちらも口を開かない。
  - %YOU% が手を伸ばして顔の水滴を拭うと、%CHARA% はもう座布団に座って大きく息をしている。
  - acc: 1
    content: 「温泉でこういうのは、まだ無理があったな～」
  - 脇の %CHARA% は汗を拭い、顔の紅が退いてから笑って %YOU% に答える。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「仰るとおりですわ～」
  # 恋慕+2

# week_end
# hot_spring後、良縁以上
wish:
  title: 願い
  lines:
    - 自分の席に座り直したとき、%YOU% は長く息を吐く。
    - 温泉旅行は楽しかったが、どう考えても…… 計画的すぎた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～ お時間はございますか？」
    - 門外からふにゃりとした声がし、%YOU% が応えてから、取っ手を回す音がする。
    - 事務所へ入った%CHARA%は迷わず %YOU% のそばへ来、手近な小さな椅子を引いて座る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%…… 申し上げておかなくてはならないことがありますの。」
    - いつになく、普段のぼんやりした様子ではなく、真剣に %YOU% を見ている。
    - acc: 1
      content: 「温泉旅行のことだろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さすが%CALLNAME%ですわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やはり、よくご存知ですわね！」
    - むしろ、当てないほうが難しい。
    - 仕込みが少し露骨すぎた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの宿、実は初めてではございませんの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「幼いころ、メジロ家がたまに家族旅行をするとき、温泉宿を選んでいました。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから私、前から%CALLNAME%と一度行きたくて……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、少し急ぎすぎましたわ～」
    - 口調はふわりとしているが、%YOU% は言葉のなかに一筋の寂しさを感じる。
    - acc: 1
      content: 「まだ、言いたいことがあるんだろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さすがですわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私にとって、温泉へ一緒に行くのは、家族だけですの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから、%CALLNAME%……」
    - 言葉がまた止まり、金色の瞳が %YOU% と合う。
    - %CHARA% の顔に紅が浮かんでから、言い残した続きが出る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当はこの言葉、宿で申し上げるつもりでしたの……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%YOUR_NAME%、私の家族になっていただけますか？」
    - acc: 1
      content: 「望むところだよ、ブライト」
    - 紅がいっそう濃く、表情がいっそうはしゃいで見える。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい…… はい！ %CALLNAME%！」
  # 好感+50

# week_start
# 愛欲以上、トレーニング不足
where_is_time:
  title: 時間は……どこへ？
  lines:
    - 中庭のベンチで、%CHARA% はひとり静かな時間を味わっている。
    - どれだけ経ったかわからないころ、%YOU% がやっと中庭を見つけた。
    - acc: 1
      content: 「……ブライト？」
    - %YOU% の声を聞き、%CHARA% は少し呆けて振り返り、後ろを見る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いつ、こちらへいらっしゃいましたの？」
    - acc: 1
      content: 「今、やっと見つけた」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今…… という意味は？」
    - 何かに気づいた %CHARA% はゆっくり視線を上げ、周囲を少し見渡す。
    - 陽の方向は真上から西へ移っており、午後の時間がもう逃げている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんなさい、%CALLNAME%、私が……」
    - acc: 1
      content: 「構わないよ」
    - 伏せた %CHARA% の耳とは違い、%YOU% は笑って手を伸ばし、丸い頭を何度か撫でる。
    - acc: 1
      content: 「見つけられなかった俺にも責任がある」
    -
    - acc: 1
      content: 「今日はこれで過ごしても、悪くない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい！」
    - 柔らかい耳が軽く跳ね、%YOU% が%CHARA%の頭に置いた手を挟む。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一緒に、のんびりこの時間を過ごしましょう、%CALLNAME%～」
    # スタミナ+10、賢さ+10

# week_start
# 愛欲以上、徹夜
sleep:
  title: きちんと、眠りましょう
  lines:
    - 眠気の強い平日のあと、%YOU% はやっと退勤の時間を迎える。
    - 昨夜の徹夜がいまの精神を攻撃し、椅子で眠ってしまいそうになり、体を支えて目の前のトレーニング案を見続けるしかない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふわぁ…… %CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……あら？」
    - 疲れた %YOU% は %CHARA% が部屋へ入ったことにも気づかず、仕事を続けている。
    - %CHARA% の反応は遅いほうだが、いまの状況は一目で何が起きているかわかる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、また徹夜でお仕事、ですわね……」
    - ゆっくり %YOU% の後ろへ歩き、気ままに卓面を見渡し、口角が自然に少し上がる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、お疲れさまでした～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、ご自分を傷つけてまでしなくてもよろしいのですよ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「少し休み…… いえ、ずっと休んでいても構いませんわよ。」
    - 両手が %YOU% の首を回り、自分の胸へ押し下げる。
    - %YOU% の後髪が胸に当たる感触を味わい、%CHARA% は気づかないうちに笑い、頬を頭頂に寄せて軽く二度擦る。
    - acc: 1
      content: 「ブライト……」
    - ぼんやりした %YOU% は後ろの柔らかさを味わい、強い眠気が眼前へ押し寄せる。
    - 瞼がだんだん重くなり、だんだん開かなくなる……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「眠りましょう、%CALLNAME%～」
    - 再び目を開けたとき、%YOU% の眼前は乱れた卓面ではなく、深い青のトレセン制服だった。
    - なぜこんな絵が現れたのか、%YOU% がまだ理解しないうちに、眼前の深い青が先に動き、ゆらゆら揺れる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「気持ちよく眠れましたか？ 膝枕は、初めてですわよ～」
    - %CHARA%の顔が上から覗き、優しく笑う。
