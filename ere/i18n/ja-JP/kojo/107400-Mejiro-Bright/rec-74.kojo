# @file メジロブライト - 募集
# @author KUN
rec0:
  - %CHARA%はトレーニング場にいないようだ…… ひとりで外を見て回ってもいいかもしれない。

rec1:
  title: のんびり公園の旅
  lines:
    # 任意外出
    - トレセンの募集シーズン、ひとり散歩に出た%YOU%は、あてもなく公園を歩いていた。
    - 公園の景色はいつもどおり、静かで、穏やかだった。
    - 周囲の通行人も道を行き、すべてがのんびり進んでいる。
    - することがない%YOU%は脇のベンチを見つけ、歩いて疲れた足に、ほんの少し休みを与えた。
    # FLAGNAME:2 = 今月
    - if: era.get('flag:2') === 1
      content: 初雪はまだ溶けきらず、枯れた黄色い葉がゆっくり落ちてくる。
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふわぁ～」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「ふわぁ～」
    - 隣のベンチには、年の若い%UMA%が座っていた。
    - ふわふわの長い髪の下は、ぼんやりした小さな顔。体は少し後ろに傾いていて、半眼の目を見ていなければ、眠っていると思っただろう。
    - if: d.mejiro
      lines:
        - acc: 1
          content: 「さすがブライト、本当にのんびりしているな……」
    - if: "!d.mejiro"
      lines:
        - acc: 1
          content: 「本当にのんびりしているな……」
        - acc: 2
          content: 「この子、もう眠っているんじゃないか……」
    - あまり気にしない%YOU%は、とりあえず放っておき、平凡な一日を続けることにした……
    -
    - 公園を適当に何周か歩いたあと、今日は雑用もない%YOU%は、思い切ってベンチに座り、のんびりした時間を味わう。
    - 時間は気づかないうちに、二人のあいだを流れていく。
    - 雲が陽を隠して日光浴が終わると、%YOU%はやっと怠惰にベンチから身を起こした。
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふわぁ～」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「ふわぁ～」
    - acc: 1
      content: 「ん？」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あら？」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「あら？」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、おはようございますわ～」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「あ、こんにちは～」
    - 隣の%UMA%は、いまになって%YOU%の存在に気づいたらしく、のんびりこちらを見る。
    - 器用な耳がぴょんと跳ね、顔にも柔らかい笑みが浮かんだ。
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの、上を見ていらっしゃいますの？」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「あの、あなたも上を見ていらっしゃいますの？」
    - 隣に座っていた%YOU%は好奇心に従い、ゆっくり顔を上げて上を見る。
    - あまり高くない枯れ木で、いちばん上にはすでに枯れた落ち葉が数枚。ただ一枚だけが枝の先端に残り、風がどれほど強くても落ちてこない。
    - acc: 1
      content: 「あの葉を見ていたのか？」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ～」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「はい～」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あちらのてっぺん、一枚だけぽつんと枯葉がありますわよね？」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「あちらのてっぺん、一枚だけぽつんと枯葉がありますわよね？」
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すぐに吹き落ちそうに見えますのに、まったく落ちませんのよ。」
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「すぐに吹き落ちそうに見えますのに、まったく落ちませんのよ。」
    - 気ままに口を開いたあと、目の前の%UMA%はもう一度顔を上げて上を見る。
    - %YOU%の目に映ったその一枚の枯葉が、なぜか気になり始める。
    - acc: 1
      content: （残って、一緒に見る）（募集を続ける）
      key: rec
      lines:
        - 立ち上がろうとした%YOU%は考えを変え、またベンチに座り直す。
        - 視線を少しずつ枯れ木の先端へ移し、その葉を見つめる。
        - 時間は、もう一度、二人のそばを流れていく……
        -
        - どれだけ経ったかわからないころ、その%UMA%が突然口を開いた。
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「強い子ですわね～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「強い子ですわね～」
        - acc: 1
          content: 「そうだな」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あら？ お返事が……」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「あれ？ お返事が……」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わぁ、まだいらしたのですね～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「わぁ、まだいらしたのですね～」
        - acc: 1
          content: 「あの葉が気になって、それで……」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それで、ずっと……？」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「それで、ずっと……？」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふふ～ さすがですわ～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - 「ふふ～ あなた、私と似ているかもしれませんわね～」
        - 目の前の%UMA%が、ふわりと笑う。
        - その笑い声が続いているとき、少し離れたところから別の声が聞こえた。
        -
        - if: d.mejiro
          color: %COLOR59%
          content:
            - fontWeight: bold
              content: メジロドーベル
            - 「ブライト！ やっと見つけたわ！」
        - if: "!d.mejiro"
          color: %COLOR59%
          content:
            - fontWeight: bold
              content: ？？？
            - 「ブライト！ やっと見つけたわ！」
        - if: d.mejiro
          lines:
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: メジロドーベル
                - 「はぁ、あなたもいたの？」
            - メジロドーベルは慌てて小走りで来ると、そっと%CHARA%の手を取り、安心したように息を吐く。
            - だがすぐに、隣に立っている%YOU%を、少し咎めるように見た。
        - if: "!d.mejiro"
          lines:
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: ？？？
                - 「はぁ、こちらは？」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: ？？？
                - 「もしかして、変な人……」
            - 小走りで来た%UMA%はそっと%CHARA%の手を取り、安心したように息を吐く。
            - だがすぐに、隣に立っている%YOU%を警戒の目で見た。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大丈夫ですわよ、ドーベル～」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「どなたかが一緒にいてくださったから、ずっとここにいられたのですわ。」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「こちらの%SIR%がずっと一緒にいてくださいましたの。いい方ですわよ。」
        - color: %COLOR59%
          content:
            - fontWeight: bold
              content: メジロドーベル
            - 「でも……」
        - if: d.mejiro
          lines:
            - acc: 1
              content: 「じゃあ、先に失礼するよ」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: メジロドーベル
                - 「え？ うん……好きにすればいいわ。」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: メジロドーベル
                - 「今の、びっくりした……最初、変な人かと思ったわ。」
        - if: "!d.mejiro"
          lines:
            - acc: 1
              content: 「あの、トレセンのトレーナーで、バッジも付けている」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: メジロドーベル
                - 「え？ 本当だ、トレーナーのバッジ……」
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: メジロドーベル
                - 「びっくりした……変な人かと思ったわ。」
        - もう連れができた%CHARA%を見て、自分の出番は終わったと悟った%YOU%は、自然に背を向けて離れた。
        - divider: true
        - color: %COLOR%
          content: 遠ざかる%YOU%の背中を見ながら、%CHARA%は小さく首を傾げる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー……」
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うんふん～」
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん……？」
    - acc: 2
      content: （枯葉一枚だ）（募集を諦める）
      lines:
        - 枯葉一枚なら……大したことではない。
        - そう思った%YOU%は立ち上がり、公園を離れた。

rec2:
  title: のんびり登場～
  lines:
    # 中庭で発火
    - 公園でのんびりした時間を過ごしてから間もなく、あの独特な雰囲気の%UMA%が、また%YOU%の前に現れた。
    - ちょうど窓辺にいた%CHARA%は%YOU%を見つけると、急がずこちらへ歩いてくる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごきげんよう、トレーナー。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「しばらくお会いしていませんでしたわね～」
    - acc: 1
      content: 「……え？ 俺のことか？」
    - ぼんやりする%YOU%とは対照的に、%SEX%の表情は陽だまりのような笑顔だった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前、公園ではご迷惑をおかけしましたわ。」
    - そう言いながら%CHARA%は、%YOU%へそっとお辞儀をする。
    - 再び顔を上げたときも、まだ寝ぼけたような表情のまま、ふわりと%YOU%と目が合う。
    - acc: 1 # 募集終了
      content: 「……それはトレーナーとしての義務だ」（募集を諦める）
      key: rec
    - acc: 2
      content: 「いや、俺もあの時間はちゃんと楽しんでいた」（募集を続ける）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちゃんと、楽しんで？」
        - ぼんやり首を傾げ、戸惑うように%YOU%を見る。
        - 長いアホ毛が空中で跳ね、窓から入る風に揺れる。
        - acc: 1
          content: 「ああやって静かにしている感覚も、好きなんだ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あら～ そうなのですね～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーと私、気が合いますわね～」
        - 下がっていた両手をそっと上げ、%CHARA%は持ち上がった口角を隠す。
        - 小さな笑い声のあと、何かを思い出したように、ぼんやりした顔に突然きちんとした色が差す。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、そうでした！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いま申し上げるのは、少し場違いかもしれませんけれど……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、試し走りを見ていただけませんかしら？」
        - 少し気まずい話題の逸らし方だったが、声は相変わらず穏やかだ。
        - acc: 1
          content: 「試し走り？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はい～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「次の校内レースに申し込みましたの。だから、専門の目で見ていただきたいのです。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もちろん、ご遠慮でしたら、それでも構いませんわ。」
        - まだ眠たげだった顔が、レースの話をした途端、ぱっと明るくなる。
        - 真剣な目で眼前の%YOU%を見るその瞳は、「メジロ」の名にふさわしい。
        - acc: 1
          content: 「いいよ」
        - divider: true
        - トレーニング場へ移り、運動着に着替えた%CHARA%を見る。
        - コース脇に立つ%YOU%は、気づかないうちに手のストップウォッチを握りしめていた。
        - あのメジロ家の%CHARA%だ。どんな走りを見せるのか……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 通りすがりのトレーナーA
            - 「%CHARA%か、%SEX%の走りが楽しみだな！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 通りすがりのトレーナーB
            - 「まだ担当トレーナーがいないんだろ？ チャンスかもしれないな……」
        - 周囲のひそひそ話のなか、%CHARA%が踏み出す——
        -
        - 意外なことに、皆が想像したような迫力の加速はなく、速くもないペースを保っているだけだった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 通りすがりのトレーナーA
            - 「全然、加速しないのか？ マジかよ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: 通りすがりのトレーナーB
            - 「思ったほどでもないな……」
        - acc: 1
          content: 「……でも、まったく減速していない」
        - 周囲が速度をけなすのとは違い、%YOU%は%CHARA%の脚を見て、少しずつ考えをまとめていく。
        -
        - %CHARA%が試し走りを終えるころ、周囲の人はほとんど散っていた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あれ、もうゴールを過ぎていましたの？」
        - 最初から最後まで同じ速度で走り切り、リズムの整った呼吸のまま%YOU%の前まで来る。
        - acc: 1
          content: 「ああ、もう終わったよ」
        - 目の前の純粋な笑顔を見て、%YOU%は黙って手のストップウォッチをしまう。
        - これほど可能性のある一幕を見て、%TITLE%トレーナーとしての%YOU%は、もう十分興味を持っていた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あら、もう十分、ですの？」
        - acc: 1
          content: 「ああ、十分だ」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では、トレーナーは私の成績を、どうご覧になりましたの？」
        - acc: 1
          content: 「このまま放って、走らせておくわけにはいかない気がする」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「放って、走らせておく……？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それは、どういう意味ですの？」
        - %YOU%の前に立つ%CHARA%は、新人の%UMA%のようにスタミナ切れで息を乱す様子がなく、試し走りの前と変わらず穏やかだった。
        - 表情にも疲労はなく、ふわりとした笑顔さえ見える。
        - acc: 1
          content: 「まずは、そののんびりしたところを、少し変えてみるか……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「まずは、のんびりしたところ、ですの？」
        - %CHARA%の少しぼんやりした目を見て、%YOU%は決心する。
        - acc: 1
          content: 「タイミングは少し変かもしれないが……君と組みたい」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「組む……あ、担当トレーナーのお話、ですの？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……でも私、まだ校内レースにも出ていませんわ。トレーナーは、それでも結論をお出しになるのですか？」
        - 自分のレースを見る前にそう提案されて、%CHARA%も理解できない顔になる。
        - だが今の%YOU%にとっては、もう決まったことだった。
        - acc: 1
          content: 「ああ、決めた！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ……ふふ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では、もう少し考えさせていただけますかしら？」
        - 少し呆けた%CHARA%は、すぐにまた先ほどの寝ぼけた目に戻る。
        - 急がない%YOU%は軽く頷き、%CHARA%と手を振って一旦分かれた。
        - divider: true
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふふ……やっぱり、お願いして正解でしたわね～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、いまからは%CALLNAME%とお呼びしなくては、ですわね。」
        - color: %COLOR%
          content: %YOU%に最後の一言が聞こえないと確かめてから、%CHARA%はまたこらえきれずに小さく笑った。

rec3:
  title: お久しぶりですわ～
  lines:
    - また中庭を通ったとき、どこからともなく清風が%YOU%の眼前を横切り、視線を脇へ逸らす。
    - 長く伸びたアホ毛……
    - 鹿毛の長髪の%UMA%が、ぼんやり中庭のベンチに座っている。
    - %YOU%はこの%UMA%の名前を覚えていた。個人的な興味とトレーナーとして、%SEX%の模擬レースを何度か見にも行っている。
    - 今回トレーニング場へ向かうのも%UMA%を募集するためだ。なら、目の前の子は、ちょうどいいのではないか？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あら？ どちらさまですの？」
    - 背後の視線に気づいたらしく、%CHARA%はゆっくり振り返り、%YOU%を見た途端にぱっと明るい笑顔を見せる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お久しぶりですわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日は、なにをしにいらしたのですか？」
    - かわいいアホ毛が問いかけと同時に跳ね、%YOU%の胸にも小さく当たった。
    - %YOU%は心のなかで冷静になれと繰り返し、%SEX%の頬を撫でたい衝動を押し戻す。
    - 以前は、こんなにふにゃふにゃだとは気づかなかったな。
    - 理性を取り戻し、軽く咳をして思考を軌道へ戻す。
    - acc: 1
      content: 「君を募集しに来た」（募集を続ける）
      key: rec
      lines:
        - （直球すぎる！）
        - %YOU%は心のなかで自分を強く突っ込みつつ、本当にそれが本音だと認めると、突っ込みをやめた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え……？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、はい！」
        - 半拍遅れた%CHARA%はやっと立ち上がり、きちんと%YOU%を見る。
        - %YOU%と%CHARA%はしばらく見つめ合い、先に耐えきれず笑ったのは%YOU%のほうだった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、トレーナーさん？」
        - 「気にしないでくれ」
        - 笑顔を収めて、%YOU%は一歩前へ出る。
        - 以前%CHARA%が出たレースは、%YOU%は現場で見ている。
        - 模擬レースではあったが、%CHARA%の走り方に問題はなく、少し助言が必要なだけだ。
        - 「%CHARA%さん、君のレースは見ている」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はい？」
        - %CHARA%はぼんやりした顔のまま、少し傾ぐ。
        - 募集するなら、まず自分の技術を見せておこう。
        - 「少し変かもしれないが、二言三言、助言しても構わないか」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、もちろんですわ。どうぞ～」
        - %CHARA%の顔を見ながら、%YOU%は長く胸にしまっていた助言を口にする。
        - 加速のタイミングの粗さ、ゆっくりしたリズム、それに歩幅の小さな癖。
        - %YOU%の話を聞き終えても、%CHARA%は素直に頷くだけだった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おお……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なんだか、試してみたくなりましたわ～」
        - そうして気合いの入った様子を見て、%YOU%の口角は自然に上がる。
        - 提案の筋が通るとわかれば、%CHARA%は契約を考えてくれるだろう。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では、%CALLNAME%、今日はトレーニングに付き合っていただけます？」
        - もちろん、と%YOU%は答えるつもりだった。
        - だがその呼び方を思い出して、%YOU%も呆けた。
        - 「え？ 今の呼び方は？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ええ～ %CALLNAME%～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だって～ もう、決めてしまいましたもの～」
    - acc: 2
      content: 「俺は……通りかかっただけだ」（募集を諦める）
