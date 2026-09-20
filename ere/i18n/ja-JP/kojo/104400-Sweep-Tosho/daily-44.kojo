# @file スイープトウショウ - 日常
# @author アグネスデジタル会社
# @author Claude (翻訳)

# 重要ノード：
# 難解な Blue Enchantress：募集後の当ターン終了。募集時期が不定なため、ジュニア級4月（育成回合計時>=12）以降に簡略化
# 新生の Asphodel：エリザベス女王杯の当ターン、すなわちクラシック級11月第2週（育成回合計時=47+42）ターン終了。以前は<=、以後は>
# 魔法の夢：宝塚記念の翌ターン、すなわちシニア級7月第1週（育成回合計時=95+25）ターン開始。以前は<、以後は>=

select:
  sync: true
  lines:
    - if: era.get('status:44:生日') > 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いい？いい？今日は、天才%MOHOSHOJO%sweepy様の誕生日なのよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ポンコツ%CALLNAME%に何ができるかは知らないけど、スイーツがあるなら早く出しなさいよ～！」
    - if: t = era.get('cflag:44:育成用变量')?.agreement > 0 # 大魔法使いの約束の状態
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「『魔女の夜』は、いつもの日とは全然違うの！ 言ってもあなたには分からないわ！」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「『魔女の夜』のためなら、主人も %CALLNAME% も、全力を尽くさないと」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「サボったら……魔法クッキー、もうあげないから！！」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あの日に、ちゃんと…………」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……なんでもないわよ！ そんな目で主人を見ないで！ 今から練習するんだから…！！」
    - if: "!era.get('status:44:生日') && !t && era.get('status:44:熬夜') > 0"
      lines:
        # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
        - if: (t = era.get('cflag:44:育成回合计时')) <= 47 + 42
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ふ……ん……ん……うんうん……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ん……！ そうよ！！ あの%MOHOSHOJO%、そのあと……！！！」
            - どうやら%CHARA%は昨夜、本を読んで夜更かししたらしい
        # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後、魔法の夢（シニア級7月第1週ターン開始イベント）より前
        - if: t > 47 + 42 && t < 95 + 25
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ふ……ん……ん……うんうん……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ん……！ ちがうちがう！ %CALLNAME%、この魔法、見て見て！！」
            - どうやら%CHARA%は昨夜、何かを研究して夜更かししたらしい
        # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
        - if: t >= 95 + 25
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ふ……ん……ん……うんうん……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ん……！ やだやだ！ 今日はトレーニングなんてしないから～！！」
            - %CHARA%が昨夜何をしていたにせよ……とにかく夜更かししたらしい
    - if: "!era.get('status:44:生日') && !t && !era.get('status:44:熬夜')"
      lines:
        # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
        - if: era.get('cflag:44:育成回合计时') >= 95 + 25
          lines:
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「ねえ！ %CALLNAME%、ねえ、『治癒草』と『炎の花』って、市場で買えると思う？」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「外で杖をいっぱい見てきたけど、やっぱりおばあちゃんのこの一本が一番よ。」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「……未練なんかないわよ！！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%、新しい%CALLNAME%を連れてきたのよ！ おもちゃ屋で買ったの。子犬。動かない。ふわふわ。」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%！ 最近、本屋に新しい魔法の練習帳、あった！？」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「『マリベルト』の続き……？ やだやだ！ そんな魔法、習いたくないわよ～！！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「このまえ……スティル……クラスメイトと、真紅の液体を飲んできたの！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「お茶なのに苦いの！！ おばあちゃんが淹れたのと全然ちがう！！！」
        - if: era.get('cflag:44:育成回合计时') < 95 + 25
          lines:
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「見て見て！ %CALLNAME%、あれ、伝説の風の精霊でしょ！？」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「『おはよう』も『こんにちは』も『こんばんは』も、ぜんぶ間違い！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「正しい呼び方は、もちろん『sweepy様こんにちは』でしょ！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%の役目は、ずっとずーーっと主人に仕えること！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「だから、毎日の忠誠心が大事なのよ！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「やだやだ！ 会ったとたん予定の話なんてしないで！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%！ 命令するわ。計画の前に、先に主人へお話を聞かせなさい！！」
            - if: era.get('cflag:97:招募状态') !== 1
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「聞いた！？ %CALLNAME%！ トレセン学園に——実は%UMA%ヴァンパイアがいるのよ！」
            - if: era.get('cflag:97:招募状态') === 1
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%！ どうやって%UMA%ヴァン——ちがうちがう！ スティル女爵と知り合ったの？ 早く教えなさい！！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「錬金術？ そんなの、私の力の二割八分六厘よ！ 最近覚えたわけじゃないわ！」
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「なんでなの！？ %CALL_68%が飲んでも保健室行きだった薬を、なんで%CALLNAME%に飲ませちゃダメなのよ！」
            # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
            - if: era.get('cflag:44:育成回合计时') > 47 + 42
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「なに考えてるのよ、%CALLNAME%！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「帽子がなくたって、私は天才%MOHOSHOJO%sweepyなんだから！！」
            - if: era.get('cflag:44:育成回合计时') > 47 + 42
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「%CALLNAME%！ 魔法の解説書とか、もう持ってこないで！」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「天才%MOHOSHOJO%sweepyは、今の私だけでオリジナル魔法が作れるのよ！」


office_study:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ねえ！ %CALLNAME%！ もっと上手に走る魔法を使うコツ、ないの！？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「雑用？ とっくに終わらせたわよ。」
      - 予想外の答えが返ってきた
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') < 95+25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ こんな本、読みたくないわよ！！」
          - 結局、%YOU%がこちらで朗読し、%CHARA%があちらでじっと聞いている……という展開になった
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepyが、自分でこんな雑務を処理するなんて！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ！ %CALLNAME%！ なんで主人がやる雑用を、あなたが代わりに終わらせてくれないのよ～～！」
          - 教えるくらいはできる……%CHARA%がただ面倒くさがっている学科の宿題を、一緒に片付けさせた
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ なんで雑用、日に日に増えてるのよ！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『英語だけ残ってるんでしょ』……？ できるのに、なんでまだやらなきゃいけないのよ！」
          - とにかく、%YOU%が励ましたおかげで、%CHARA%は十分もかからず英語の宿題を終わらせた
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') >= 95+25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepyが、自分でこんな宿題を終わらせるなんて！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ！ %CALLNAME%！ なんで主人がやる宿題を、あなたが代わりに終わらせてくれないのよ～～！」
          - どうして、まだ宿題をやりたがらないのだろう……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ 宿題の時間を魔法の研究に回したら、何個も一気に完成するに決まってるのに！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ！ %CALLNAME%！ とにかく全部、あなたに任せるわ！！！」
          - 逃げないでほしい……


office_prepare:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……だから、これはこうで……あれはああで……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……他に伝える情報は？ ……それと、主人の杖と帽子をだまし取ろうなんて、思わないでよね！！」
          - 結局、レースのときは外す、という話には応じなかった
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……分かった分かった！ そんなこと、天才%MOHOSHOJO%sweepyが分からないわけないでしょ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……どうして急に黙ったの？ ……続けて。」
          - とにかく、%CHARA%が聞いてくれるならそれでいい
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ %CALLNAME%に主人の杖を勝手に触らせるもんですか！！」
          - とりあえず、帽子と杖以外の持ち物の整え方を%CHARA%に教えた……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ 未来の大魔法使いの帽子を、%CALLNAME%が勝手に触っていいわけないでしょ！！！」
          - とりあえず、帽子と杖以外の持ち物の整え方を%CHARA%に教えた……
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『こうすると、レースで魔法がもっと上手く使える』……？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふーん。分かった分かった。」
          - %CHARA%は黙って、%YOU%の真似をしてレース前の準備をしている
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『魔法蹄鉄』って……どんな高いところから飛んでも、傷ひとつつかないんだって！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ！ %CALLNAME%！ 命令するわ。そういう蹄鉄、見つけてきなさい！」
          - まずは目の前の蹄鉄の手入れを終わらせよう……
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「こうすれば……私のシューズも、魔法の靴になるわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……『魔法の靴って何の役に立つの』？ とにかく、すごく役に立つんだから！」
          - 魔法の品の数を増やしているらしい……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%の言うことは認めるけど、主人としては少し直したいの……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「こう——それからこう、最後に、こうするの！」
          - 聞いたときは頼りないのに、実際にやってみると、%CHARA%の準備案は意外と効いている
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『こうすると、レースで魔法がもっと上手く使える』……？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだや〜だ——！！ 主人の耳、たこができそ〜う——！！！」
          - とにかく、%YOU%が新しい言い回しに頭を抱えているあいだに、%CHARA%は自分からレース前の準備を始めていた
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『魔法蹄鉄』って……どんな高いところから飛んでも、傷ひとつつかないんだって！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ！ %CALLNAME%！ そういう蹄鉄、私たちで作れないかな？」
          - 手作りは、ほどほどにしてほしい……


talk:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『魔女の夜』のためには、%CALLNAME%はもっと、もっと主人に仕えなきゃダメなのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「いつでもどこでも、主人にスイーツを持ってこられるようにしておきなさい♪」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『魔女の夜』のためには、%CALLNAME%はもっと、もっと主人に仕えなきゃダメなのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人が大魔法使いに認められるまで、い〜っぽも離れちゃだめ！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「こうして……それからこう……『魔女の夜』の日になったら、きっと……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ちょっと！ ぼーっとしてないで%CALLNAME%！ このやり方、合ってるか、早く主人の手伝いをしなさい！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人がずっと大事に取っておいた魔法スイーツ、やっと役に立つときが来たわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ちゃんと働けば、sweepy様の魔法クッキー、『魔女の夜』のあとで%CALLNAME%に何枚か分けてあげてもいいわよ！」
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なになに！？ 新しい魔法の手がかり、どこにあるの？？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どうして急に黙ったの！？ 続けてよ%CALLNAME%！！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なになに！？ %CALLNAME%、闇夜の精霊を捕まえたの？？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ネズミ。ふーん。」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ちゃんと働けば、主人のご褒美がもらえるのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ご褒美は——%CALLNAME%が外へ出て、主人のスイーツを買ってくること！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「この魔薬を使えば、%CALLNAME%は二十四時間、主人のために尽くせるようになるのよ～♪」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……どうしてそんな嫌そうな顔するのよ！！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「魔法の練習じゃないなら絶対やらない！ 気に入らない練習も絶対やらない！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「でも、%CALLNAME%が勧める練習なら、主人はまあ、考えてあげてもいいわ！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「私より劣ってる人を見ても先に私を褒めなさい。私より優秀な人を見ても、先に私を褒めなさい！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%には、主人のどこがすごいかを言う権利しかないんだから～！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ また魔法と関係ない話してるでしょ！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「聞かない聞かない！ 聞いてほしければ、%CALLNAME%、先に主人へ魔法の話をしなさいよ～！」
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「私より劣ってる人を見ても先に私を褒めなさい。私より優秀な人を見ても、先に私を褒めなさい！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「そうそう、その調子！ 偉大な天才%MOHOSHOJO%sweepy様を、もっと褒めなさい！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なになに！？ %CALLNAME%、また魔法の手がかりを聞きつけてきたの！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふんふん～じゃあ決まり！ 今夜は%CALLNAME%を連れて、そこに行くわよ！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「魔法が欲しいなら、魔力は絶対必要！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「つまり、スイーツは欠かせないってこと～♪」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「魔法の手がかり集めは、サボっちゃだめ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「さもないと、主人は%CALLNAME%をどこへ連れて歩けばいいのよ！？」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「この本も、あの本も」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「とにかく！ 天才%MOHOSHOJO%sweepy様が将来書く本、%CALLNAME%はしっかり覚えときなさい！」
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ちゃんと働けば、主人のご褒美がもらえるのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ご褒美は——%CALLNAME%が主人のスイーツを買うとき、自分の分ももう一つ買っていいこと！」
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「この魔薬を使えば、%CALLNAME%は仕事中も十二分に気合が入るのよ～♪」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……百分の気合が入る？ そんなにまずくないわよ！」
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ あなたのその話も、その話も、つまんなすぎる！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『作り話だから』……？ なら、もうちょっと面白く作りなさいよ！？？」
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「おばあちゃんがどう思ってても、%CALLNAME%が私をどう見てても……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今日は絶対、あのスイーツ店の新作パフェ、先に取るんだから！！」


office_gift:
  - if: era.get('relation:44:0') < 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なによなによ！ %CALLNAME%の謝罪の品、これだけ！？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「次もこうだったら、%CALLNAME%なんか知らないんだから！」
      - それでも、%CHARA%の機嫌は直ったらしい
  # 大魔法使いの約束の期間
  - if: (t = (era.get('cflag:44:育成用变量')?.agreement > 0)) && era.get('relation:44:0') >= 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なによなによ！ こんなときに、また主人の機嫌を取りたいの！？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『練習の役に立つ』……？ なら、早く渡しなさいよ？！」
      - とにかく、%CHARA%は%YOU%の贈り物をちゃんと受け取った
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
  - if: "!t && era.get('relation:44:0') >= 0 && era.get('cflag:44:育成回合计时') >= 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「そうそう！ スイーツなら、いくらでも問題ないわよ～♪」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「むぅ～！ どうしてそんな嫌な顔してるのよ！ プレゼントしてるんでしょ！？」
          - %CHARA%が太らないと保証してくれてから、%YOU%は安心してスイーツを渡した
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「よくできたよくできた！ 天才%MOHOSHOJO%sweepy、今日から蔵書を始めるわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今年のうちに、おばあちゃんよりたくさん本を持つんだから～！」
          - %CHARA%は嬉しそうに、%YOU%の物語の本を受け取った
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より前
  - if: "!t && era.get('relation:44:0') >= 0 && era.get('cflag:44:育成回合计时') < 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「そうそう！ スイーツなら、いくらでも問題ないわよ～♪」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%なら、主人が太る前に、できるだけたくさん持ってきなさい！」
          - 少し心配ではある……けれど、スイーツをもらった%CHARA%はとても嬉しそうだ
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「よくできたよくできた！ %CALLNAME%をもっと集めれば」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「あの日が来たら、大%MAJO%になった天才%MOHOSHOJO%sweepyが世界を支配できるわ！」
          - ぬいぐるみをもらった%CHARA%は、とても嬉しそうだ
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ なんで変な本なの！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……！ この一冊は！？」
          - 新しくもらった童話を、%CHARA%はとても気に入ったらしい
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「そうそう！ スイーツなら、いくらでも問題ないわよ～♪」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%なら、主人が太る前に、できるだけたくさん持ってきなさい！」
          - 少し心配ではある……けれど、スイーツをもらった%CHARA%はとても嬉しそうだ
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「よくできたよくできた！ 魔法の本をもっと集めれば」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepyが、早く大魔法使いになるのも全然問題ないわ～！」
          - %CHARA%は嬉しそうに、%YOU%の物語の本を受け取った


office_cook:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……『これを食べれば、魔力が補充できる』？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……ふん。今回だけ、%CALLNAME%を信じてあげる。」
      - %CHARA%は黙って、%YOU%が持ってきた弁当を食べている
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なにやってるのよ%CALLNAME%！ 私たち、ここに来る意味あったの！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……！ あれ、新作の魔法スイーツ……？！」
          - とりあえず、%CHARA%にスイーツをご馳走した
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ、%CALLNAME%。野菜って、甘く作れるの？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「それと、あのお肉とか、あのお魚とか、全部キャンディみたいにできないの？」
          - 頭の中に、砂糖の食べすぎで虫歯と太る二重の問題が自然と浮かぶ。とりあえず、あれこれ理由をつけて%CHARA%のお願いをはぐらかした……
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%——！ なんで中にパプリカ入ってるのよ！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ、苦い、まずい！！」
          - 結局、%CHARA%は弁当のパプリカをひとつずつ取り除いて、残りはきれいに平らげた……
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ～%CALLNAME%、主人、本当にスイーツ食べたいの！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「次の弁当、上にアイスクリーム乗せたら？ どう？」
          - それは無理だ……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ～%CALLNAME%、パプリカって、ゆでない方がずっと美味しいって聞いたの」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「そんなに主人にパプリカを食べさせたいなら、せめて作り方を変えなさいよ～！」
          - %CHARA%は、パプリカを食べないための立派な理由を見つけ始めた……
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ なんで今度の弁当、全部野菜サラダなのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「お肉はどこ？ お魚はどこ？ スイーツはどこよ～～？！！」
          - 最後のお願いさえなければ、もっともな話ではある……


office_rest:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……『休みと働きを組み合わせた方が、魔法の上達にいい』？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……%CALLNAME%が先に寝なさい。」
      - とりあえず、%YOU%は寝たふりをし、%CHARA%が本当に眠ってから安心した
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') < 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ %CALLNAME%がそんなに主人を気にかけて、なに！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「Poppy★Juniper、%CALLNAME%、寝なさい！！」
          - 結局、%CHARA%自身が待ちきれずうとうとし始め、%YOU%に付き合ってもらって仮眠した
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ %CALLNAME%が眠いなら、自分で寝ればいいでしょ！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepyは、昼も夜も、眠りの精霊なんかに負けないわ！」
          - つまり夜はちゃんと眠っていない、ということだろう……%CHARA%に目を閉じたまま魔法を考えさせていると、やがて%SEX%はうとうとし始めた
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') >= 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだやだ！ 眠くても、寝たくないもん～～！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『じゃあコーヒー飲めば』……？ やだやだ！ 苦い、寝る寝る！！！」
          - %CHARA%は素直に、休憩室で仮眠した
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なによなによ！ なんで%CALLNAME%が休めって言うと、私が止まらなきゃいけないのよ～！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『%CALLNAME%の顔に免じて』……？ %CALLNAME%の顔に、いつからそんな力があるのよ～～！！！」
          - 不服そうな顔ではあったが、%CHARA%はちゃんと休憩室で仮眠した


office_game:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……『ゲームする』？ こんなときにゲームする気分なの、%CALLNAME%——！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだ！ %CALLNAME%が遊びたいなら、主人は自分で練習するから！！！」
      - %CHARA%には、その気はまったくないらしい……
  # ジュニア級4月より前
  - if: "!t && era.get('cflag:44:育成回合计时') < 12"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだやだ！ なんで主人が%CALLNAME%の言うこと聞かなきゃいけないのよ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%がゲームしたいなら、自分でやればいいでしょ！？」
      - 結局、%CHARA%はそばでじっと、%YOU%のゲームを見ていた……
  # ジュニア級4月以降
  - if: "!t && era.get('cflag:44:育成回合计时') >= 12"
    lines:
      # 初回
      - if: "!d.game"
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%、そんなにゲームが好きなの？」
          - ゲームをしていると、そばでじっと立っていた%CHARA%が急に口を開いた
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……なんだか、ゲームの腕、主人より下手そう。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なによ！ どうしてそんな不服そうな顔するのよ！ 人前でゲームしてるなら、評価されるのも普通でしょ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『……じゃあ私もやる？』『……なんでもいい？』 いいに決まってるでしょ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふんふん～じゃあ%CALLNAME%に、ちょっと見せてあげる。天才%MOHOSHOJO%sweepyの『ゲーム魔法』を！」
      - if: d.game > 0
        lines:
          - random: true
            lines:
              - %CHARA%と一緒にRPGを遊んでいる
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「ちがうちがう、なんで遊んでる途中で急に泣き出すのよ！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「まだ最強の魔法、使ってないんだから！！！」
          - random: true
            lines:
              - %CHARA%と一緒にRPGを遊んでいる
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「やだやだやだ！ またなに話してるのよ！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「話してる隙に、そのまま魔法かければいいじゃない！？」
          - random: true
            lines:
              - %CHARA%と一緒にRPGを遊んでいる
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「バカ%CALLNAME%！ ここはこうするのが正解でしょ！ くらえ——！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「なんで炎属性のダメージ入らないのよ！！」
          - random: true
            lines:
              - %CHARA%と一緒にRPGを遊んでいる
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「うう……うう……うううううううううう」
              - どうやら、%SEX%の心に刺さるシナリオもあるらしい……
          - random: true
            lines:
              - %CHARA%と一緒に、魔法学院経営ゲームを遊んでいる
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「見て%CALLNAME%！ この%MOHOSHOJO%の杖、私のと似てない！？」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「ふんふん～この魔法の呪文、もう暗記したわ！」
          - random: true
            lines:
              - %CHARA%と一緒に、お店経営ゲームを遊んでいる
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「こうして、ああして——調合できた！ ふんふん～こんな魔法ポーション、高く売れるに決まってる～！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「なんで、なんで気に入らないからってお金払わないのよ！！」
          - random: true
            lines:
              - %CHARA%と一緒にRPGを遊んでいる
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「この魔法と……この魔法を使えば、すぐ魔王を倒せるわ！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「今度こそ、最強の魔法使いになってみせる！！！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「！ この%MOHOSHOJO%も、あの魔法使いも、手に入るの！？」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「……お金がいる？ なら手に入るってことでしょ！ ほしいほしい！！」
              - なんとか、課金ゲームに課金しようとする%CHARA%を止めた……
          # クラシック級
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - %CHARA%が弾幕ゲームを遊んでいるのを見ている
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「やだやだ！ なんでこの弾幕、こんなに難しいのよ！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「ボム、もうないの！？ や〜〜〜だ〜〜〜！！！」
          # クラシック級
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - %CHARA%と一緒に、かなり難しいアクションゲームを遊んでいる
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「やだやだ！ なんで二発当たっただけで倒れちゃうのよ！！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「だめ！ とにかく体力を40まで振って……！」
          # クラシック級
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - 「先にこのモンスターを倒して、お店で防御力を買えばいいのに……」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「？ そんな打ち方もあるの？」
              - 苦手な魔塔系ゲームでは、意外と素直になっている
          # クラシック級
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「こうして……ああして……この魔法、組み合わせできた！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「名前は……sweepy流モンスター召喚術！」
              - そもそもTRPGで召喚ばかりしても、あまり役に立たないだろう……
          # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - %CHARA%と一緒に格闘ゲームを遊んでいる
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「弱すぎ弱すぎ！ 私の黒白の魔法使い、あなたの紅白の魔女より強いに決まってる！！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「Tosho★Spark！！！」
          # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - %CHARA%と一緒にカードゲームを遊んでいる
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「やだやだやだ！ なんで手札で発動する罠カード、そんなに入れてるのよ！！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「なんで私、一枚も引けないのよ！！！」
          # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - %CHARA%と一緒にRPGを遊んでいる
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「やだやだやだ！ なんで学校に行く時間なんてあるのよ！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「パレスにいないで、どうやってもっと強いペルソナを手に入れるのよ！」


borrow_money:
  # ジュニア級4月より前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - %CHARA%に、お金を借りたいと伝えた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「お金を……借りる……？」
      - %CHARA%は、一瞬きょとんとしている
      - けれど、すぐにいつもの顔に戻った
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふん！ %CALLNAME%がお金ないのは、%CALLNAME%自身の問題でしょ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「お給料を減らされたとか、お菓子を買いすぎたとか、欲しいおもちゃがあるとか——」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そんな願い、主人が簡単に叶えるわけないわ！」
      - とにかく、%CHARA%は借金を断った……
  - if: era.get('cflag:44:育成回合计时') >= 12 && !d.borrow
    lines:
      - %CHARA%に、お金を借りたいと伝えた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「お金を……借りる……？」
      - %CHARA%は、一瞬きょとんとしている
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、お金が足りないの？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当ててあげる……」
      - すぐに推測を始めた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、お給料減らされた？ お菓子買いすぎた？ 欲しいおもちゃがある？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やっぱり！ 主人が見てないと、お金の使い方すら安心できないんだから！」
      - いきなり結論へ飛びついた
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「まあいいわ！ 主人は今回は大目に見て、%CALLNAME%を責めないであげる！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、待ってなさい！ 明日、主人があなたの問題を解決してあげる！」
      -
      - 翌日、%CHARA%は%YOU%の事務所へやってきて、寮の隅々から掻き集めた新しいお金と古いお金を、机の上にどさっと置いた
  - if: era.get('cflag:44:育成回合计时') >= 12 && d.borrow > 0
    lines:
      - %CHARA%に、お金を借りたいと伝えた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……」
      - なぜか、%YOU%が借りたい金額の話を聞き終えると、%CHARA%は黙り込んだ
      -
      - それから突然、帽子を脱ぎ、腰の杖を外して、机の上に置いた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……%CALLNAME%。外で売ってみて。そしたら、まだ間に合うかも」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それか……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「せめて……主人には知らせないで——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あなたが、本当に誰かの『そういう%CALLNAME%』になっちゃった……とか。」
      -
      - %CHARA%の誤解がどこまでも膨らむ前に、%YOU%は冗談めかして、%CHARA%から借りる話を引っ込めた


s_a_tree_hollow:
  # ジュニア級4月より前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なによなによ！ 学園の近くに、こんな邪悪なものが！？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「だめだめ！ NandinaDomestica★Garmala、天才%MOHOSHOJO%sweepyが浄化するわよ！！」
      - %YOU%の説明を聞いた%CHARA%は、枯れた木の洞に向かって杖を振るだけだった
  - if: era.get('cflag:44:育成回合计时') >= 12 && !d.tree_hollow
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「怨念の濃い場所は%MOHOSHOJO%の大敵！ こんなところ、天才%MOHOSHOJO%sweepyは次から来ないわ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……%CALLNAME%、主人の代わりに、近くに人がいないか見て。試しに、ちょっとだけよ。」
      - 周りに人がいないのを確かめると、%CHARA%は他の人の真似をして、枯れた木の洞に向かって叫び始めた
  - if: era.get('cflag:44:育成回合计时') >= 12 && d.tree_hollow > 0
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「バ——カ——使——い——魔——→」
          - 当人がいるうちに、そんなことを叫ばないでほしい……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ア——イ——ス——く——れ——→」
          - 周りに人がいないのを確かめてから、%CHARA%は枯れた木の洞にそう叫んだ
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「パ——プ——リ——カ——ま——ず——い——→」
          - 周りに人がいないのを確かめてから、%CHARA%は枯れた木の洞にそう叫んだ
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「私——が——証——明——す——る——→」
          - 周りに人がいないのを確かめてから、%CHARA%は枯れた木の洞にそう叫んだ
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「よ——く——見——て——て——→」
          - 周りに人がいないのを確かめてから、%CHARA%は枯れた木の洞にそう叫んだ
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「魔——法——は——本——当——↑」
          - 周りに人がいないのを確かめてから、%CHARA%は枯れた木の洞にそう叫んだ
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使——い——魔——逃——げ——な——い——→」
          - 周りに人がいないのを確かめてから、%CHARA%は枯れた木の洞にそう叫んだ


s_a_dating:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……『遊びに行く』？ こんなときに遊びに行く気分なの、%CALLNAME%——！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだ！ %CALLNAME%が自分でぶらぶらしたいなら、主人も自分で練習するから！！！」
      - %CHARA%には、その気はまったくないらしい……
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どうしたのどうしたの？ %CALLNAME%、学園で新しい魔法、見つけたの！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……『まだない』？ すぐ見つかるって意味でしょ？！」
          - とりあえず、%CHARA%と一緒に中庭を歩いた
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なによなによ！ なんで竹がないのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「スズメの作った飲み物も、月から落ちてきた子供も、竹がなかったら見つからないでしょ？！」
          - とりあえず、%CHARA%と一緒に中庭を歩いた
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「魔法の手がかりを頑張って見つけたら、帰ってから%CALLNAME%に美味しいものあげる～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……ちがう！！ 主人が『毎回』%CALLNAME%のご褒美を自分で食べちゃったなんて、そんなことないわよ！！！」
          - %CHARA%は怒って、%YOU%の言葉に反論した
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「こういう伝説も、ああいう伝説も、絶対に根拠があるのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふんふん～見てなさいよ%CALLNAME%、学園には新しい%CALLNAME%が来てるって言ったでしょ！」
          - 怪異の噂に導かれて、%YOU%と%CHARA%は本当に子猫を一匹見つけた
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「学校の花園なんて、結局その程度でしょ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ%CALLNAME%、学園に頼んで、天才%MOHOSHOJO%sweepy専用の素材畑、作ってもらったらどう！？」
          - %CHARA%と一緒に、中庭をゆっくり歩いた
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なによなによ！ そんなことで、そんなに急いで主人を引っ張り出すことある！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「次から、%CALLNAME%がさらわれるとか以外は、急ぎの連絡禁止！！」
          - %CHARA%と一緒に、中庭をゆっくり歩いた
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今回の魔法手がかり探しが終わったら、帰ってから%CALLNAME%に美味しいものあげる！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「口を開けるときは『あ——』って言って、食べ終わったら主人に『おいしい』って返しなさい！」
          - %CHARA%と一緒に、中庭をゆっくり歩いた
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なによなによ！ %CALLNAME%のその理由、子供でも嫌がるでしょ？！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人に言わせれば、今日この『魔法の森』に来たのは——」
          - %CHARA%と一緒に、中庭をゆっくり歩いた


out_disabled_in_agreement:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……『遊びに行く』？ こんなときに遊びに行く気分なの、%CALLNAME%——！！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「やだやだ！ %CALLNAME%が自分でぶらぶらしたいなら、主人も自分で練習するから！！！」
  - %CHARA%には、その気はまったくないらしい……


o_r_fishing:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - %CHARA%と一緒に土手へ行き、一人で釣りをした
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なによなによ！ 釣りって、座って待つだけなの！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「Honeysuckle★PeruvianLily、お魚、かかりなさい～！」
          - なぜかは分からないが、%CHARA%が騒いでいるあいだ、魚がかかる速度は少し速くなった気がする
      - random: true
        lines:
          - %CHARA%と一緒に土手へ行き、一人で釣りをした
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ なんで急に釣りなんて始めるのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！ 命令するわ。釣ってるあいだ、主人ともっと話しなさい！！」
          - なぜかは分からないが、%CHARA%と話しているあいだ、魚がかかる速度は少し速くなった気がする
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - %CHARA%と一緒に土手へ行き、一人で釣りをした
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なによなによ！ %CALLNAME%、どうしてそんなに釣りが好きなのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%が大物を釣るように呪いをかけるわ！ Nasturtium★Alstroemeria、大物、かかりなさい～！」
          - なぜかは分からないが、%CHARA%が騒いでいるあいだ、かかる魚はいつもより少し大きかった気がする
      - random: true
        lines:
          - %CHARA%と一緒に土手へ行き、%SEX%と並んで釣りをした
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「たかが釣り、天才%MOHOSHOJO%sweepyの方が、%CALLNAME%より上手いに決まってる！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「見て見て！ 主人が釣った魚、やっぱり%CALLNAME%のより大きい～！」
          - %CHARA%と話しながら釣っているうちに、最初は何を競っていたのか、だんだん忘れてしまった


o_r_walking:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どうしたのどうしたの？ %CALLNAME%、川沿いで新しい魔法、見つけたの！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……『まだない』？ すぐ見つかるって意味でしょ？！」
          - とりあえず、%CHARA%と一緒に土手を歩いた
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「夜が深くて風が強いとき……『不幸の黒猫』が、川へ魔法の魚を探しに来るんだって！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！ 今日はここで張り込んで、その魔法の黒猫と魔法の魚を見つけるまで帰らないんだから！！」
          - あれこれ理由をつけて、%CHARA%の考えをなんとか逸らした……
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「川辺の水草だって、見逃しちゃだめ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「その中に、素材にぴったりな薬草があるかもしれないんだから——」
          - とりあえず、%CHARA%と一緒に土手を歩いた
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『川の水怪なんていない』って言う人は、ただのバカよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「見て見て！ %CALLNAME%、あそこの大きな黒い影、見えた！？」
          - %CHARA%の視線を辿ると、水の中には本当に大きな魚がいた
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「そうそう！ こうして……それからああすれば、お魚がいっぱい集まるのよ～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『猫が魚を見ようとしてるみたい』……？ 猫じゃないわよ！！！」
          - %CHARA%は怒って、%YOU%の言葉に反論した
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「聞いたの！ 今日、川沿いの屋台が手作りの『魔法菓子』を売るんだって」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今日は、主人が誰より先に行くんだから！！」
          - %CHARA%と一緒に土手を歩いた
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「聞いたの！ 今日、川沿いの屋台が、子供のころ読んだ『魔法の本』を売るんだって」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「その『魔法の本』に込められた力を分かってないなんて！ 天才%MOHOSHOJO%sweepyが、あの本を救うんだから！」
          - %CHARA%と一緒に土手を歩いた
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「人間は水の力を恐れる……でも魔法使いは、水の力を操れる……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「だから天才%MOHOSHOJO%sweepyは、毎日川へ散歩に来るのよ～！」
          - %CHARA%と一緒に土手を歩いた
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「人間が水の力を恐れるかどうか……魔法使いが水を操れるかどうか……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どっちでも、天才%MOHOSHOJO%sweepyが毎日川へ散歩に来ることに変わりはないわ～！」
          - %CHARA%と一緒に土手を歩いた


o_s_arcade:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どうなってるのどうなってるの！ %CALLNAME%、どうしてそんなにクレーンゲームが好きなの！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「！ %CALLNAME%、あれがほしい、そうそうあれ！！ 今すぐ、絶対、外さないで！！！」
          - %CHARA%の指示どおり、%YOU%は%SEX%の欲しいぬいぐるみを無事に取った
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どんなゲームだって、天才%MOHOSHOJO%sweepyは負けないんだから～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだやだ！ %CALLNAME%！！ 次のゲーム、ボタン触っちゃだめ！！！」
          - %CHARA%に何回か勝ったあと、%SEX%は少しご機嫌斜めになったらしい
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「太鼓くらい、天才%MOHOSHOJO%sweepy様ならお手のものよ～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ なんでこんなに難しいのよ！？？」
          - %CHARA%は、難しすぎるゲーム内容に頭を抱えている
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「こう——それからああすれば、人は助けられるわ～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なんでなのなんでなの！ 人を助けたのに戦利品くれないの！？」
          - %CHARA%は、ゲームの報酬の仕組みに不満そうだ
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「この技を避けて、それからあの技を防いで、そしたら——」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「くらえ、sweepy様の絶対魔法——！！」
          - %CHARA%は、ゲームの中で必殺技を使えたことに満足しているらしい
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95+25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どんな怪談だって、天才%MOHOSHOJO%ならこの銃でやっつけられるわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「絶対！ 怖……く……な……い……」
          - それでも%CHARA%は、アーケードゲームのホラー演出に怯えたらしい
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95+25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どんな車だって、天才%MOHOSHOJO%sweepyなら乗りこなせるわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ちがうちがう！ なんでぶつかったあと、反対方向に走れるのよ！？」
          - %CHARA%は、車の向きを直すのにずいぶん時間がかかった


o_s_drawing:
  - if: "!d.drawing"
    lines:
      - %CHARA%を連れて、（特製の）くじ引き屋へ入った！
      -
      - にんじんも、にんじんハンバーグも、そして当たるかもしれない特賞——温泉旅行券まで揃っている！
      - 賞品の豪華さは、まさにウマ%UMA%の楽園——
      -
      - そばで、%CHARA%が杖で棚のにんじんハンバーグをそっと突いた
      - ハンバーグは、ほんの少し後ろへずれて、側面が少し見えた
      -
      - やはりにんじんに興味を持ったのか、%CHARA%はカウンターの画板に立てかけられたにんじんを一本取った
      - 裏表をひっくり返して、じっと観察しながら何かを理解しようとしている
      - 最後に、なぜか空中で手を離し、にんじんを自由落下させた
      -
      - かさ——
      - かさ——
      -
      - （やわらかい紙でできた）にんじん一本
      -
      - ゆらゆら揺れて
      -
      - ゆっくり
      -
      - 床へ落ちた。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……」
      - 小さなウマ%UMA%は、床とひとつになったにんじんを見つめたまま、なぜか黙り込んだ
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『紙の%CALLNAME%』。」
      - 顔を上げ、杖で%YOU%をそっと指す
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こういうものは、あなたには栄養になるはず。主人は食べないから、先に食べなさい。」
      -
      - せめて、そんな変なあだ名はつけないでほしい……
      - とにかく、念入りに用意したこの施設へ、%CHARA%を連れてきた
  - if: d.drawing > 0
    lines:
      - %CHARA%を連れて、（特製の）くじ引き屋へ入った！
      - にんじんも、にんじんハンバーグも、そして当たるかもしれない特賞——温泉旅行券まで揃っている！
      - 賞品の豪華さは、まさにウマ%UMA%の楽園——

osd_loop:
  -
  - acc: 1
    content: （くじを引く！）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なによなによ！ 今度はなにを引くのよ！？」
      -
      - %CHARA%の前で、%YOU%はくじ（紙くず）をゆっくり広げ、中に書かれた賞品名を見せた
      -
      - 当たったのは——
      - random: true
        lines:
          - 「ティッシュ」！
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふーん。」
          - いちばん実用的な品なのに、感想すら面倒そうだ……
      - random: true
        lines:
          - 「（平面の厚紙）にんじん一本」！
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ 全然食べられないにんじん、なにに使うのよ！！」
          - とりあえず、%CHARA%はその小さな厚紙にんじんを口にくわえて上下に揺らしている
      - random: true
        lines:
          - 「（平面の厚紙）にんじん山盛り」！
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「三枚合わせたら——本物のにんじん一本になるわよ～！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ 魔法をかけても、まだ食べられそうに見えないんだけど！！」
      - random: true
        lines:
          - 「（厚紙の）にんじんバーガー」！
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……なんで裏に絵がないのよ！！！」
          - %CHARA%は厚紙の裏面に、自分だけのにんじんバーガーを描き始めた……
      - random: true
        lines:
          - 「（手描きの）温泉旅行券」！
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……%CALLNAME%が温泉に入れないなら、主人が願いを叶えてあげてもいいわよ。」
          - %CHARA%は手描きで、温泉旅行券を量産し始めた……
  - acc: 2
    content: （もう帰る時間だ）
    lines:
      - まだ変な、あるいは少し軽蔑した目で%YOU%を見てはいる
      - けれど、くじ引き屋を出た%CHARA%の機嫌は、確かに良くなったらしい


o_s_ktv:
  # ジュニア級4月より前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「カラ……オケ……？ そんなところ、なにしに行くのよ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだ！ なんで私が%CALLNAME%と一緒に歌わなきゃいけないのよ！」
      - それでも、%CHARA%は曲を選んだあと、そばに座って聞きながら、%YOU%にその曲を何回も歌わせた……
  # ジュニア級4月以降
  - if: era.get('cflag:44:育成回合计时') >= 12
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『ステージの準備をしよう』『うまぴょい伝説』？ やだやだ！ やりたくないわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepyが歌うのは、もちろんこれ——」
          - %YOU%の当初の予定を拒否したあと、%CHARA%は当然のように魔法少女アニメのオープニングを選曲した
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『ステージの準備をしよう』『彩phantasia』？ やだやだ！ 歌いたくないわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepyは、今日はこれだけ聞くの——」
          - %CHARA%は意外にも、歌詞のあるオーケストラ曲を選んで、口ずさみ始めた

o_s_movie:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なによなによ！ 今度はなにの映画なのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使——い——魔——！ 私のポップコーンは！？」
          - とにかく、%CHARA%と並んで映画を見た
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - %CHARA%と一緒に、主に子供向けの映画を見た
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ なんで世界が変わったら魔力がないのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『友情は魔法』って約束だったでしょ！？？」
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - %CHARA%と一緒に、盲導犬の映画を見に行った
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「これから主人も、そばのペットをちゃんと大事にするわ」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「まずは、%CALLNAME%を大事にするところからね！」
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - %CHARA%と一緒に、動く城の映画を見に行った
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なんで、なんで呪われたら年取らなきゃいけないのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「『みんなあなたみたいに大人になりたくないわけじゃない』……？ 子供じゃないわよ！！」
      - random: true
        lines:
          - %CHARA%と一緒に、ロボットを操縦する映画を見た
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ なんでお父さんがロボットを操縦しろって言ったら、やらなきゃいけないのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「世界が滅びるとしても……他に救う方法、絶対あるんだから……！」

o_c_pray:
  # ジュニア級4月より前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なによなによ！ なんで神社に行くのよ！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「神様？ 神様なんて、魔法で代わりにすればいいのよ！！！」
      -
      - 神棚に向かって呪文を唱えるのも、一種の参拝ではあるだろう……
  # ジュニア級4月以降
  - if: era.get('cflag:44:育成回合计时') >= 12
    lines:
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
      - if: era.get('cflag:44:育成回合计时') <= 47 + 42
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どんな神様だって、結局は魔法には敵わないわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……だから%CALLNAME%、今度引いたの、なに……？」
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後、魔法の夢（シニア級7月第1週ターン開始イベント）より前
      - if: era.get('cflag:44:育成回合计时') > 47 + 42 && era.get('cflag:44:育成回合计时') < 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どんな神様だって、結局は魔法には敵わないわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「次は、天才%MOHOSHOJO%sweepy様に直接お願いすればいいでしょ！」
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どんな神様だって、結局は魔法には敵わないわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「次は、天才%MOHOSHOJO%sweepy手作りのおみくじで引かないとだめ！」
      - if: d.dice < 0.05
        content: '[大吉]を引いた！'
      - if: d.dice >= 0.05 && d.dice < 0.5
        content: '[吉]を引いた！'
      - if: d.dice >= 0.5 && d.dice < 0.95
        content: '[凶]を引いた！'
      - if: d.dice >= 0.95
        content: '[大凶]を引いた！'
      -
      - if: era.get('cflag:44:育成回合计时') < 47 + 42 && d.dice < 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「でしょでしょ！ 天才%MOHOSHOJO%の%CALLNAME%なら、運も良くなるって言ったでしょ～！」
          -
          - たぶん、そういうこととは関係ない……
      - if: era.get('cflag:44:育成回合计时') < 47 + 42 && d.dice >= 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「誰かに拾われるとか、そういう問題なら、主人のところへ走って戻ってこないで。」
          -
          - 急におみくじを信じ始めた%CHARA%より、%YOU%の方が急におみくじの効き目を信じたくなくなった……
      - if: era.get('cflag:44:育成回合计时') >= 47 + 42 && era.get('cflag:44:育成回合计时') < 95 + 25 && d.dice < 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「言って言って！ どんな願い、叶えたいの、%CALLNAME%？」
          -
          - %YOU%は、自分が拝んでいる神様が%CHARA%だとはあまり思っていない……
      - if: era.get('cflag:44:育成回合计时') >= 47 + 42 && era.get('cflag:44:育成回合计时') < 95 + 25 && d.dice >= 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「こうなったら、%CALLNAME%の願いはもう叶えてあげないわ！」
          -
          - %YOU%は、自分が拝んでいる神様が%CHARA%だとはあまり思っていない……
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25 && d.dice < 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「でしょでしょ？ 主人と一緒だと、やっぱり運が良くなるわね～！」
          -
          - そういう効果があるのかもしれない
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25 && d.dice >= 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ 中に[大吉]をもっと詰め込むんだから～！！！」
          -
          - とにかく、%CHARA%は最後までそうしなかった


o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なんでなのなんでなの！ なんでオムライスにケチャップかけないのよ！？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%——！ そこのケチャップ、こっちによこしなさい！！」
      - %CHARA%はオムライスを、ほとんどケチャップ漬けにしかけている……
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なによなによ！ 主人にたい焼きを買うって、どういうつもり！？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なんで主人には一個だけなのに、自分は二つも買ってるのよ！！？」
      - %CHARA%の強い要求で、%YOU%は余分に買った分を%CHARA%に渡した
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「お好み焼きはやっぱり、甘いソースの方が美味しいわ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「次は、上に蜂蜜を足したらどうなるか、主人が試してみる——」
      - 自分の口に合うなら、それも悪くはない……
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだ！ なんで%CALLNAME%のクレープ、フルーツが私より多いのよ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一緒に買ってきたんでしょ！？」
      - %YOU%は、%CHARA%の少し嫉妬した視線を浴びながらクレープを食べた

o_s_dating:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「分かった分かった！ %CALLNAME%、街で本物の『大魔法使い』を見つけたんでしょ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふんふん～言わなくていいわ！ すぐ主人を案内しなさい！」
          - とりあえず、%CHARA%と一緒に駅前の通りを歩いた
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！ 聞いたの、最近この街に『八尺の怪人』が出るって……！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%のsweepy様が、必ず正体を暴いてみせるわ！」
          - %CHARA%と話しながら、駅近くの通りを歩いた
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！ 聞いたの、最近新しい種類の%CALLNAME%が出没してるって！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今すぐ、すぐに、その%CALLNAME%がいるところへ行くのよ！」
          - とりあえず、%CHARA%の提案どおり、ぬいぐるみ屋を一緒に回った
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どんな怪談だって、天才%MOHOSHOJO%sweepyなら真相を探れるわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「でも！ %CALLNAME%が先陣切って！ 怖いからじゃないからね！！」
          - %CHARA%と話しながら、駅近くの通りを歩いた
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！ 『メリーさんの電話』の仕組み、完全に分かったわ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「こうして電話を取って、それから——もしもし——今、あなたの後ろにいるわよ——！！」
          - %YOU%を驚かせられなかったと分かると、%CHARA%は必死に怒ったふりをし始めた
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%！ 聞いたの、近くのケーキ屋が『魔法菓子』を売ってるって！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人が前に行ったことなんて、ぜーったいないからね！」
          - とりあえず、%CHARA%の提案どおり、ケーキ屋を一緒に回った
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なによなによ！ %CALLNAME%の作ったそんな怪談、子供だって信じないでしょ！？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「天才%MOHOSHOJO%sweepyに言わせれば、こうするのが正しいの——」
          - %CHARA%と話しながら、駅近くの通りを歩いた
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ちがうちがう！ そんな終わり方、全然ちがう！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人に言わせれば、その人は赤いマントも青いマントも選ばないで、自分で取り出したの……」
          - %CHARA%と話しながら、駅近くの通りを歩いた


o_s_shopping:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: (t = era.get('cflag:44:育成回合计时')) <= 47 + 42
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「天才%MOHOSHOJO%には、最高のほうきが乗り物として必要よ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ここに来たんだから%CALLNAME%、命令するわ。今すぐ、ここの一番いいほうきを探しなさい！」
      - %CHARA%と一緒に、ショッピングモールを歩き始めた
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後、魔法の夢（シニア級7月第1週ターン開始イベント）より前
  - if: t > 47 + 42 && t < 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なによなによ！ なんでそんなにのろのろ歩いてるのよ！？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今日は、買わなきゃいけない魔法の品がたくさんあるんだから！」
      - %CHARA%はすぐに%YOU%の手を引いて、ショッピングモールを歩き回った
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
  - if: t >= 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今日のお買い物計画、主人はとっくに用意してあるわ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「まずは魔法の道具、それから魔法書、最後はもちろんスイーツ！」
      - %CHARA%はすぐに%YOU%の手を引いて、ショッピングモールを歩き回った


gn_normal_sleep:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……持ってて……魔……動かし……ちゃ……」
        - %CHARA%はベンチに横になって眠っており、ひとりごとを言っているらしい
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「んふ……天才%MOHOSHOJO%swee……魔法……すごい……」
        - %CHARA%はベンチに横になって眠っており、ひとりごとを言っているらしい
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ふ……ん……主人の……そばに……一歩も……離れちゃ……」
        - %CHARA%はベンチに横になって眠っており、ひとりごとを言っているらしい
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふ……ふ……おばあちゃん……認……めて……私の……魔法……いち……」
        - %CHARA%はベンチに横になって眠っており、ひとりごとを言っているらしい
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「んふ……天才%MOHOSHOJO%swee……やっぱり……大魔法使い……」
        - %CHARA%はベンチに横になって眠っており、ひとりごとを言っているらしい


# ジュニア級4月以降、おやすみ、プレイヤーが眠り込む、一度きり
# プレイヤー体力+100、気力+200
gn_rest:
  title: 使い魔の思いがけない昼寝
  lines:
    - if: era.get('love:44') < 50
      lines:
        - いつものように、トレーナー室で仕事をしている
        - だが、ここ最近の寝不足か、働きすぎか、あるいは薬の影響か
        - 仕事の途中、%YOU%はそのまま席に倒れ込み、その後何が起きたのか分からない
        -
        - ……
        -
        - 朦朧とするなか、さらさらと動く音、水を注ぐ音、そして抑揚のある話し声が聞こえた
        -
        - ゆっくり目を開けると、いつの間にかトレーナー室のソファに仰向けで、ちゃんと毛布をかけられていた
        - 顔を向けると、ソファのそばで好奇心と緊張と焦りが混ざった目で%YOU%を見る%CHARA%がいた——
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ひゃあっ！！！ ぞ、ゾンビ——！！！」
        -
        - それにしても、口を開けた瞬間から変なことを言う……
        - acc: 1
          content: 「まだ生きてる……」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ。も……生きてる%CALLNAME%だったの……！」
        - %CHARA%はほっと息を吐いた
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私の『死霊術』が、本当に効いたのかと思った……」
        -
        - また変なことを……
        - %YOU%は%CHARA%のトレーナーだろう……『死霊術』は使えない……
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも、『死霊術』が効いてないなら……」
        - %YOU%が苦笑いしていると、%CHARA%は続けて話し始めた
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「つまり、私の『治癒魔法』が、研鑽の末にすごく上達したってことよ！」
        -
        - acc: 1
          content: 「『治癒魔法……？』」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そう！ おばあちゃんが直接教えてくれた、病気の私でも元気いっぱいに戻るお薬よ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「天才%MOHOSHOJO%sweepyが徹底的に改良したから、今は%CALLNAME%にも治癒の効果があるの！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふんふん～%CALLNAME%がそんなに興味あるなら」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日から、%CALLNAME%のためにsweepy特製の魔法薬を作り続けるわ！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これで、%CALLNAME%がいくら残業しても倒れなくなる！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふんふん、さすが天才%MOHOSHOJO%sweepy！」
        -
        - それからというもの、%CHARA%はほぼ毎日、秘伝のドクダミ茶を一本持って%YOU%を訪ねてくる
        - しかも、飲み干すところを自分の目で見るまで、%YOU%を許してくれない……
    - if: era.get('love:44') >= 50
      lines:
        - いつものように、トレーナー室で仕事をしている
        - だが、ここ最近の寝不足か、働きすぎか、あるいは薬の影響か
        - 仕事の途中、%YOU%はそのまま席に倒れ込み、その後何が起きたのか分からない
        -
        - ……
        -
        - 朦朧とするなか、さらさらと動く音、水を注ぐ音、それから小さな嗚咽が聞こえた
        - ？？？？「うう……ううう……」
        -
        - ゆっくり目を開けると——
        - いつの間にかトレーナー室のソファに仰向けで、ちゃんと毛布をかけられていた
        - 顔を向けると、ソファのそばに立ち、周りを散らかしたまま慌てて泣いている鹿毛の小さなウマ%UMA%がいた
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ひゃあっ！！ ぞ、ゾンビ——！！！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちがう……%CALLNAME%！？」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……うっ……うう……起、起きた——！！！！」
        - 突然の衝撃を感じて我に返ると、%CHARA%はすでに%YOU%にきつく抱きついていた
        - しかも、抱き方が少し強くて、背骨がきしむような感触がある
        -
        - acc: 1
          content: 「あの……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やだ！ 動かない！！ 痛いとか知らない！！！ 痛くても我慢しなさい、バカ%CALLNAME%！！！！！」
        - 抱き方が、さらに強くなった気がする……%YOU%はすぐに口を閉じた
        -
        - ずいぶん経ってから、%CHARA%はやっと%YOU%を離し、ベッドの端へ下がった。目尻にはまだ涙が残っている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もう！ 無事なら、もっと早く起きなさいよ！！！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うう……泣いてない！ %CALLNAME%が主人を泣かせるなんて、あるわけないでしょ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それに、そもそも全部%CALLNAME%のせいよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「たかが%CALLNAME%なのに急に倒れて、びっくりさせるし、返事もしないし！」
        -
        - acc: 1
          content: 「もしかして、心配して——」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「心配してない！ %CALLNAME%が主人を困らせるなんて、百年早いんだから！！」
        - %YOU%の言葉を、すぐに遮った
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ドクダミ水、大きいペットボトルに三本も入れて、冷蔵庫いっぱいよ」
        - ひとりごとのように言っている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あなたの考えなんて知らない！ 飲みなさい！ 何週間でも、何か月でも、知らないわ！ 見てるから！！ 後悔しないでよ！！」
        -
        - それからというもの、%CHARA%はほぼ毎日、秘伝のドクダミ茶を温めて%YOU%に注いでくる
        - しかも、飲み干すところを自分の目で見るまで、%YOU%を許してくれない


good_night_sex:
  - ある日、トレーニングのあと、%CHARA%が突然寄ってきて、%YOU%の服の裾を引っ張った
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……%CALLNAME%。ついてきて。休憩室。あなたが好きな、あのこと。」
  - 単刀直入に頼んできた
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……そんな驚いた顔、しないで……行くの、行かないの？」
  - %CHARA%は顔の赤みを必死に押さえ、紫の瞳だけで%YOU%を見ている
  -
  - %CHARA%の頼みに、%YOU%の返事は
  -
  - acc: 1
    key: sex
    content: 「受け入れる」
    lines:
      - %CHARA%の頼みを受け入れた
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……ふん。%CALLNAME%って、やっぱりそういうやつ。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「後悔しないでよね。」
      - こうして、%YOU%は、軽い足取りなのかいつもの歩幅なのか分からない%CHARA%の後ろについて、一緒に休憩室へ入った
  - acc: 2
    content: 「断る」
    lines:
      - とにかく、%CHARA%の頼みは断った
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……ふーん。」
      - 意外と落ち着いて返事をした
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……じゃあ私は——」
      - if: d.check < 2 # 通常、ここで止まる
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「使い魔に命令するわ。主人の食べ物、買ってきなさい！！」
              - 急に話題を逸らした
              -
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「だって、使い魔がそういうことをしたくないなら——別のところで主人に償わないと！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「スイーツをいくら買っても、主人は許さないけど……それでも買わなきゃだめ！！」
              -
              - とにかく、%CHARA%にキャロットケーキを一つ持ち帰ると、%SEX%はそれ以上何もしなかった
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「やだやだ！ 認めない！ %CALLNAME%は……魔法少女の本の悪役みたいであるべきなのよ…！！」
              - 突然、声を上げた
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「……ちがうちがう、本の話なんてしてない！ とにかく%CALLNAME%！ 主人の命令よ、今日は休憩室に入りなさい！！！」
              -
              - （床を転げ回る%CHARA%が、意志力判定を仕掛けてきた！）
              - 【意志が鍛えられている……】
              - 【判定に成功した！】
              -
              - %CHARA%が床を転げ回っても……そういうことは、したいときにすぐできるものではない
              - %SEX%にスイーツを約束して、とりあえずその場はごまかした
      - if: d.check === 2 # 大成功で強姦へ
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ 認めない！ %CALLNAME%は……魔法少女の本の悪役みたいであるべきなのよ…！！」
          - 突然、声を上げた
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……ちがうちがう、本の話なんてしてない！ とにかく%CALLNAME%！ 主人の命令よ、今日は休憩室に入りなさい！！」
          -
          - （床を転げ回る%CHARA%が、意志力判定を仕掛けてきた！）
          -
          - 【意志が鍛えられている……】
          - 【判定……失敗した！】
          -
          - スイーツの提案を出しても、相手は受け入れないらしい
          - 「意志力」で%SEX%と長く睨み合った末、%YOU%は床を転げ回る%CHARA%にとうとう勝てなかった
          -
          - 結局、%YOU%は、軽い足取りなのかいつもの歩幅なのか分からない%CHARA%の後ろについて、休憩室へ入った


birthday:
  title: 誕生日
  lines:
    - if: "!d.birthday"
      lines:
        - %CHARA%の誕生日当日、%YOU%は%SEX%に直接プレゼントを渡さず、外へ遊びに連れて行くこともしなかった
        - その代わり、%SEX%の手を引いて、学園の中をこっそり歩いた
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なによなによ使い魔、プレゼントも渡さないし話もしないって、なにをするつもり——」
        - 鹿毛の小さなウマ%UMA%は叫びながら、%YOU%に部屋へ引き込まれた
        - それから目に入ったのは、大きな誕生日の横断幕、おいしそうなクリームケーキ、そして招かれて集まったたくさんの友達だった
        -
        - color: #无
          content:
            - fontWeight: bold
              content: 仲のいい%UMA%A
            - 「スイープ、お誕生日おめでとう！」
        - color: #无
          content:
            - fontWeight: bold
              content: 仲のいい%UMA%B
            - 「お誕生日おめでとう、スイープちゃん！」
        - 入った瞬間、聞き慣れた祝福が聞こえた
        -
        - color: %COLOR_47%
          content:
            - fontWeight: bold
              content: %ZOB_ZOY%
            - 「あの……お……お誕生日おめでとう！」
        - 一生懸命、祝福している
        -
        - acc: 1
          content: 「次は——」
        -
        - color: %COLOR_24%
          content:
            - fontWeight: bold
              content: %MAYA%
            - 「I Copy！」
        - %YOU%の声を聞いた%MAYA%は、すぐにきれいな敬礼をした
        - それから、そばの操作ボタンを押した——
        -
        - ぱちっ！
        - 部屋の明かりが消えた
        -
        - 誰かがライターを取り出し、ケーキのろうそくに一本ずつ火を灯す——
        - 細くても安定した炎が、だんだん部屋の全員の視線の焦点になっていく
        -
        - color: %COLOR_5%
          content:
            - fontWeight: bold
              content: %FUJI%
            - 「では、次はいよいよ今日の主役ですね」
        - みんなの視線が、まだ入り口付近に立つ%CHARA%へ向く——
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……なによ使い魔。それに、あなたたち。」
        - %CHARA%は小さく言い、口角がわずかに上がっている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%MOHOSHOJO%sweepyは、こんな手品、とっくに何度も見てるわ。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あなたたちがかわいそうだから、付き合ってあげても、まあいいわ！」
        -
        - %CHARA%は大股でケーキの前まで歩いた
        - 腰から杖を取り出し、炎を上げるろうそくに向かって軽く振る——
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「WhiteHeather★PinkTulip、願いよ叶えー！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私の願いは——」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「使い魔と、ここにいるみんな——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「毎年——こんな誕生日パーティー、開きなさいよ！！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふーー！！！！」
        - %CHARA%はろうそくを吹き消した
        -
        - こうして、%CHARA%の願いの声とともに、%YOU%が%SEX%のために用意した誕生日パーティーが本格的に始まった！
    - if: d.birthday > 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「そうそう！ 誕生日はやっぱり、甘いものを食べなきゃ！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「今日の集まりは……お菓子くれなきゃいたずらするぞ～！」
            - パーティーの主役であることをいいことに、%CHARA%はスイーツをどんどん要求した
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「やだやだ！ なんでケーキ、三切れしか残ってないのよ！！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「四切れほしい！ ……ちがう、五切れ！」
            - 誕生日パーティーで、%CHARA%はもっとケーキがほしいと叫んでいる
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「プレゼントほしい！ もっとプレゼント！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「使い魔！ 要求は高くないわ。これから何十年分の誕生日プレゼント、まとめて渡しなさい！」
            - 誕生日パーティーで、%CHARA%はプレゼントの話を叫んでいる


# 連続2週間交流なしのあと、ターン終了時に発火【未交流状態は2週ごとに必ず！】
ws_no_action_2_weeks:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: (t = era.get('cflag:44:育成回合计时')) <= 47 + 42
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだ！ %CALLNAME%、またどこで迷子になってたの！？？」
      - 道端でたまたま%CHARA%を見かけると、%SEX%はすぐ駆け寄って、焦った声で%YOU%に叫んだ
      - %YOU%は、最近忙しかったことだけを%CHARA%に説明した
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より前、新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: t > 47 + 42 && t < 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだ！ %CALLNAME%、またどこで遊んでたのよ！？？」
      - 道端でたまたま%CHARA%を見かけると、%SEX%はすぐ駆け寄って、焦った声で%YOU%に叫んだ
      - %YOU%は、最近忙しかったことだけを%CHARA%に説明した
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
  - if: t >= 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだ！ %CALLNAME%、また誰と遊びに行ってたの？！！」
      - 道端でたまたま%CHARA%を見かけると、%SEX%はすぐ駆け寄って、焦った声で%YOU%に叫んだ
      - %YOU%は、最近忙しかったことだけを%CHARA%に説明した


load_talk:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「いい？いい？天才%MOHOSHOJO%sweepy、予知魔法を急に覚えたのよ！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふんふん～夢だって、大事なときがあるのよ！」


end_talk:
  - if: "!d.hentai"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……大人って、そういうものなのね。約束したのに……離れないって……」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……忘れちゃだめ。あなたも、私も。ゆびきり……」
  - if: d.hentai
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……大人って、そういうものなのね。つまらないことで……離れなきゃいけないとしても……」
