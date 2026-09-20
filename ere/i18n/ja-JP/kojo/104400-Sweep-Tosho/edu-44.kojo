# @file スイープトウショウ - 育成
# @author アグネスデジタル会社
# @author Claude (翻訳)
train:
  # 低体力
  - if: t = [false, false, false], t[0] = (era.get('base:44:体力') / era.get('maxbase:44:体力') < 0.4)
    lines:
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より前
      - if: era.get('cflag:44:育成回合计时') < 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「んん……なんで動けないの……やだやだ！%CALLNAME%、今日はもう帰って休むわよ！！」
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「んん……つかれた！やだやだ！！%CALLNAME%、主人をこき使って休ませないなんて、もう許さないんだから！！！」
  # 大魔法使いの約束
  - if: t[1] = era.get('cflag:44:育成用变量')?.agreement > 0, !t[0] && t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ぼーっとしてないで！次の練習はなに、早く教えなさい！！！」
  # 低やる気
  - if: t[2] = era.get('cflag:44:干劲') < 0, !t[0] && !t[1] && t[2]
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！使い魔が主人にこんなにひどいことするなんて、今日は練習したくない……ちがう！とにかく今日は練習したくないの！！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！大魔法使いになろうとしてる私が、こんな状態でこんな練習しなきゃいけないのよ！」
  - if: '!t[0] && !t[1] && !t[2]'
    lines:
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: (t = era.get('cflag:44:育成回合计时')) > 47 + 42
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「早く早く！練習が終わったら、新しい魔法の研究もしなきゃいけないんだから！！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「早く早く！%CALLNAME%みたいな調子じゃ、天才%MOHOSHOJO%sweepyの独創魔法、みんなにちゃんと見せられないでしょ！」
          # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「大魔法使いになるには弟子がいるの……弟子が欲しいなら、%SEX%たちに私の魔法を見せなきゃ。」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「%CALLNAME%、今日の練習はなに？」
          # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「主人をこき使う権利、どの%CALLNAME%にでもあるわけじゃないのよ！」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「あの目標に届くまで……これは%CALLNAME%の特権なんだから！」
      - if: t <= 47 + 42
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「早く早く！日が沈む前に練習終わらせないと、魔法の研究ができないでしょ！？」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「早く早く！朝の魔力で練習できるチャンス、すごく貴重なんだから！！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「今日の練習のあと、『治癒草』と『水の花』を探しに行くから、わかったわね、%CALLNAME%！？」


ts_add:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ねえ！使い魔！さっきの練習中……新しい魔法、思いついたわ！！」
  - トレーニングが終わりかけたとき、スイープトウショウが突然駆け寄ってくる
  - それから、自信たっぷりの目で%YOU%を見る
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「もうちょっと頑張れば……出せるかもしれない！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「お日さま、沈みかけだけど！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも！主人がモノにするまで、使い魔はもちろんずっと付いてるんでしょ!?」
  - そう聞いてくる
  -
  - それに対して、%YOU%の答えは——
  - acc: 1
    content: 「スイープについていくよ。」（同意）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふんふん～さすが私の使い魔！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「日が沈んで、%MAJO%の時間になるまで、帰っちゃだめよ！」
      - そのあと、スイープトウショウに付き合って追加トレーニングをした
  - acc: 2
    content: 「スイープ……やっと追加トレーニングしてくれるの？」
    lines:
      - 「やっと」という言葉が%YOU%の口から出た瞬間
      - スイープトウショウの、わずかに上がっていた口角が、なぜか落ちる
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……ああ。うん。主人。うん。そう、『やっと』気が向いたの。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……でも、今はもうない。」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なんでかは聞かないで！自分で考えなさい、使い魔！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「主人、今から命令する。今すぐ主人を背負って帰りなさい！！！」
      - 急に気が変わったスイープトウショウは、結局%YOU%に乗ったまま、すぐ近くの寮の入口まで戻っていった……


rs_common:
  - if: era.get('status:44:疲惫') >= 3
    lines:
      - %CHARA%と一緒に準備室へ来た
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだ！つかれた！つかれたわよ！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「主人はここに来たけど、つかれてるのも本当なんだから！！」
      - そう文句を言う
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「主人は出るわよ！でも、使い魔がレースのあとスイーツを買ってこなかったら——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「主人、あなたを子犬にしちゃうから、わかった！？」
      -
      - そのあと、%CHARA%は準備室を出て、コースへ下りていった
      - 目を閉じて瞑想なのかぼんやりなのか、しばらくしてから、%CHARA%は隊列の最後尾からゆっくりゲートに入った
  - if: era.get('status:44:疲惫') < 3
    lines:
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: (t = era.get('cflag:44:育成回合计时')) >= 95 + 25
        lines:
          - %CHARA%と一緒に準備室へ来た
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！出走は分かってるけど、それでも来たくないわよ！！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人の気力は有限なの。そういうこと、使い魔なら分かってるはずでしょ！」
          - 来てはいても、こうして文句を言う
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふん！いいわ、主人はちゃんと走る！だって『魔法』のためなんだから！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「でも使い魔、レースのあとスイーツを忘れたら、主人は怒るからね！？」
          -
          - そのあと、%CHARA%は準備室を出て、コースへ下りていった
          - その場でじっと観客を見てから、%CHARA%は隊列の最後尾からゆっくりゲートに入った
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より前、新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: t < 95 + 25 && t > 47 + 42
        lines:
          - %CHARA%と一緒に準備室へ来た
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なになに！なんで私、こんな魔法競技に出なきゃいけないのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「つまり、こんな競技、みんな私の魔法をちゃんと見取れなかったらどうするの？！」
          - 来てはいても、こうして文句を言う
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふん！いいわ！どうせ、競技ならsweepy様、自分の魔法は出せるんだから」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「念のため言っとくけど、使い魔、ちゃんと見てなさいよ！」
          -
          - そのあと、%CHARA%は準備室を出て、コースへ下りていった
          - 目を閉じて勝手に杖を振ってから、%CHARA%は隊列の最後尾からゆっくりゲートに入った
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
      - if: t <= 47 + 42
        lines:
          - %CHARA%と一緒に準備室へ来た
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なになに！こんな意味ない競技、なんで出走したのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「こんな時間あったら、本に書いてある魔法、もっと覚えられたのに！」
          - 来てはいても、こうして文句を言う
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふん！いいわ！どうせ、天才%MOHOSHOJO%sweepyなら、なんでもできるんだから」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使い魔は、ちゃんと見てて、主人が戻るのを待ってればいいの！」
          -
          - そのあと、%CHARA%は準備室を出て、コースへ下りていった
          - 長いこと呪文を唱えてから、%CHARA%は隊列の最後尾からゆっくりゲートに入った


re_win:
  - if: era.get('status:44:疲惫') >= 3
    lines:
      - レース後の手続きを終えて、%CHARA%と並んで帰り道を歩く
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うんうん……このスイーツ、味はまあまあね。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「使い魔が主人をこき使いすぎた、ちょっとのお返しとしては、妥当。」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも！だからって、むちゃくちゃに主人をこき使うのが正しいわけじゃないわ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「次もこうなったら、主人、レース出ないから！！」
      -
      - そのあと、%YOU%と%CHARA%は一緒にトレセン学園へ戻った
  - if: era.get('status:44:疲惫') < 3
    lines:
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: (t = era.get('cflag:44:育成回合计时')) >= 95 + 25
        lines:
          - レース後の手続きを終えて、%CHARA%と並んで帰り道を歩く
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「うんうん……このスイーツ、味はまあまあね。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使い魔、主人が太るの心配して買わない、とかしてないのね。」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……なんでそんな心配そうに見るの？太らないに決まってるでしょ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「太ったら、それは使い魔のトレーニングの組み方が悪いの！」
          -
          - そのあと、%YOU%と%CHARA%は一緒にトレセン学園へ戻った
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より前、新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: t < 95 + 25 && t > 47 + 42
        lines:
          - レース後の手続きを終えて、%CHARA%と並んで帰り道を歩く
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふん！言ったでしょ、天才%MOHOSHOJO%に、勝てない競技なんてないの！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どんな相手でも、sweepy様が一掃してあげる」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使い魔、どんなレースでもいいわ」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「次は、天才%MOHOSHOJO%sweepyがもっと魔法を出せる競技を選びなさい！」
          -
          - そのあと、%YOU%と%CHARA%は一緒にトレセン学園へ戻った
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
      - if: t <= 47 + 42
        lines:
          - レース後の手続きを終えて、%CHARA%と並んで帰り道を歩く
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふん！言ったでしょ、天才%MOHOSHOJO%に、勝てない競技なんてないの！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どんな相手でも、sweepy様が一掃してあげる」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使い魔、主人が出ちゃいけないとは言ってないわ」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「でも、次は、もっとすごい競技を選びなさい！」
          -
          - そのあと、%YOU%と%CHARA%は一緒にトレセン学園へ戻った


re_lose:
  - if: era.get('status:44:疲惫') >= 3
    lines:
      - レース後の手続きを終えて、%CHARA%と並んで帰り道を歩く
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うんうん……このスイーツ、味はまあまあね。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「使い魔が主人をこき使いすぎた、ちょっとのお返しとしては、妥当。」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うんうん？主人がレースに負けた？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そんなこと、どうでもいいわ！……つまり、使い魔が主人をこき使ったせいでしょう！？」
      -
      - そのあと、%YOU%と%CHARA%は一緒にトレセン学園へ戻った
  - if: era.get('status:44:疲惫') < 3
    lines:
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: (t = era.get('cflag:44:育成回合计时')) >= 95 + 25
        lines:
          - レース後の手続きを終えて、%CHARA%と並んで帰り道を歩く
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「うんうん……このスイーツ、味はまあまあね。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「使い魔、主人が負けたからって買わない、とかしてないのね。」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……分かった分かった！このスイーツ食べ終わったら、主人、頑張るから！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「次は、絶対にあいつらの前で『魔法』の意味を証明してやる！」
          -
          - そのあと、%YOU%と%CHARA%は一緒にトレセン学園へ戻った
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より前、新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: t < 95 + 25 && t > 47 + 42
        lines:
          - レース後の手続きを終えて、%CHARA%と並んで帰り道を歩く
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！ありえない、そんなことあるわけない！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「私の魔法が、失敗するわけないでしょ！！」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふん！いいわ！どうせ、新しく作った魔法なんだし」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今回失敗した……次は直せる、絶対そうよ！」
          -
          - そのあと、%YOU%と%CHARA%は一緒にトレセン学園へ戻った
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
      - if: t <= 47 + 42
        lines:
          - レース後の手続きを終えて、%CHARA%と並んで帰り道を歩く
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やだやだ！なんで、なんで負けるのよ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ありえないありえない、主人のせいなわけない！！」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ただ、使い魔が選んだこのレースがつまらなかっただけ。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人、今回は一割も力使ってないんだから！」
          -
          - そのあと、%YOU%と%CHARA%は一緒にトレセン学園へ戻った


# 募集成功後の当週ターン終了
# スタミナ&賢さ+5
we_blue_enchan_tress:
  title: 難解な Blue Enchantress
  lines:
    - トレセン学園では、多くの%UMA%に、それぞれの個性がちゃんとある
    -
    - 休みに童話を読む子もいれば、かわいい小物を集める子もいる
    - たまに絵を描く子もいれば、学園の花壇に花をたくさん植える子もいる
    - それらは、まだよくある個性だ
    -
    - 走る音でロックを作るとか、違う言語で自分に百個もあだ名を付けるとか
    - 焼きそばにマスタードを入れるとか、一食で学食を空にするとか
    - それに比べれば、魔法が好き、くらいでは特別扱いしにくい個性のはずだ
    -
    - でも……
    - %CHARA% は、%YOU%が想像していたような、平凡に魔法が好きな%UMA%ではなかった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだ！こんなこと、やりたくない！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなた、私の%CALLNAME%でしょ？！こんなこと、%CALLNAME%が主人の代わりにやればいいじゃない！？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだ！こんな本、見たくないわよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「使——い——魔——！！！なんで主人の課題、代わりにやってくれないのよ！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだやだ！めちゃくちゃな練習、全部つまんない！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%、この練習、代わりに終わらせてくれないの？」
    -
    - たった数日付き合っただけで、%YOU%は%CHARA%の口から、思いもしなかった要求を次々と聞いた
    - 覚悟はしていたつもりでも、%YOU%はいつも追い付かず、対応に追われる
    -
    - いちばん大事なのは、%CHARA%の要求が口だけではないことだ——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！こんな役に立たない使い魔、いらないわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このままなら、%CALLNAME%と契約解除して、次の使い魔を探すから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見て、あそこの子猫、いい感じじゃない！」
    -
    - 扱いを間違えれば、%CHARA%から単純明快な脅しが飛んでくる
    - %CHARA%がこれまで、どのトレーナーとも契約できなかったのも、納得できる……
    -
    - それは普通の週末だった
    - %CHARA%が突然、トレーナー室に座っていた%YOU%を見つけに来る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ。%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ついてきて。」
    - 当たり前みたいな口調で、よく分からない命令を出して、それから胸の前で腕を組んで、その場で動かない
    -
    - ……またこれだ
    - いろんなわがままには慣れたつもりでも、やっぱりどうしようもない気持ちは残る
    -
    - どこへ行くのかも、何をするのかも教えてもらえない
    - このときの%YOU%は、ただ黙って%CHARA%の後ろについていく
    -
    - 学園の裏門を抜け、%YOU%は%CHARA%に導かれて、裏山へゆっくり入っていく
    -
    - acc: 1
      content: 「あの……今日、いったい何しに行くの？」
    - 慎重に聞く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！%CALLNAME%、いちいち聞かないで！」
    - 答える気はまったくない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「主人についてくればいいの！」
    -
    - 「でも……少なくとも、どこへ行くかくらいは……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「バカ%CALLNAME%！天才%MOHOSHOJO%sweepyが行くところ、%CALLNAME%も絶対ついてこなきゃだめなの！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんな簡単なこと、分からないの！」
    -
    - 「……」
    - %CHARA%のふくれっ面を見て、%YOU%は仕方なく、また黙ってついていく
    -
    - ところが、茨の茂みが突然、%YOU%と%CHARA%の行く手を塞いだ
    -
    - 「これじゃあ、どうしようもないな……」
    - 少なくともこの道は通れそうにない。%YOU%は退く気になる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！%CALLNAME%はやっぱり%CALLNAME%ね、こんな困難で方法が思いつかないなんて」
    - %YOU%が退いたことに、少し不満そうだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こういうときこそ、偉大な『魔法』の出番でしょ！」
    -
    - acc: 1
      content: 「スイープの『魔法』……そんなことができるの？」
    - %YOU%は軽く疑うだけだった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「バカ%CALLNAME%！自分が魔法使えないだけじゃない！」
    - すぐに言い返す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyは、大魔法使いのおばあちゃんの弟子なんだから、どんな魔法だってお手のものよ！」
    -
    - acc: 1
      content: 「じゃあ、お願いできる？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～、%CALLNAME%がそう言うなら、見てなさい～」
    - 見せたがりで、%CHARA%は腰に差していた杖を取り出し、茨に向かって振る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Rosa★Gladiolus！」
    -
    - 茨は、何の反応もない。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……Rosa★Gladiolus！！！」
    -
    - 風はあっても、茨は揺れない。
    -
    - すぐ悩んで、目の前の小さな%UMA%は、なぜだ、と悔しそうに考える
    - ただ、次の言動は予想外だった——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ねえ。%CALLNAME%。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おんぶ。」
    - %CHARA%は、先に何メートルも続く茨の茂みを指して、%YOU%に%SEX%をおんぶして渡れ、と示す
    -
    - 茨は隙間もなく、縦横に絡んだ枝が陽の光の下でまだらな影を落とし、鋭い棘が番人みたいに並んでいる
    - こんな危ない道、%CHARA%をおんぶして、どころか、一人でも……
    - acc: 1
      content: 「……別の道、行かない？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ここから行くの。」
    - %CHARA%は迷わず答える。相談の余地はない、わがままな口調だ
    -
    - こうして%YOU%は、小さな%UMA%をおんぶしたまま、びっしりの茨道の前に立つしかなかった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行って。」
    - 小さな足が、軽く蹴る力を感じる
    -
    - 歯を食いしばって、%YOU%は帰りに手足を包帯だらけにする自分を想像しながら、足を踏み出した——
    -
    - でも、予想していた痛みは来ない
    - %YOU%の足取りが意外と軽かったのか、%YOU%の動きがちょうどよかったのか
    - びっしりの茨を抜けるとき、蔓の一本も%YOU%の手足に触れなかった
    - まさか、本当に——
    - 「魔法」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わ——」
    - 石の隙間にぽつんと咲く、青い妖姫を見て
    - 地面に下りた %CHARA% の目が、きらきら光る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～やっと見つけた！伝説の魔女の花！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「毎日毎晩、私についてきてもらって、私が一番偉大な大魔法使いになるのを見てもらうんだから！」
    -
    - acc: 1
      content: 「きれいだね」
    - %YOU%まで、つい感嘆してしまう
    -
    - 「でも、ここがこの子の家でしょ」
    - なぜか、そう言ってしまう
    - 「摘んで持って帰ったら、ホームシックになるんじゃない？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……やめた。」
    - 顔を横に向ける
    -
    - 「……？」
    - %CHARA%の突然の発言に驚く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やめたって言ったら、や！め！た！」
    - %CHARA%は怒って足を踏み鳴らす
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、帰るわよ！！！」
    -
    - こうして、半日かけて歩いた%YOU%と%CHARA%は、手ぶらのままトレセン学園へ戻った


# 次のターン終了
# スタミナ&根性+5
ws_yellow_orchid:
  title: 旅立ちの Yellow Orchid
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%！聞いたんだけど……！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%！最近知ったんだけど……！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっ！%CALLNAME%！急に思い出したんだけど……！」
    -
    - なぜか、前回の冒険のあと、トレーニングの合間に、%YOU%は %CHARA% に無理やりいろんな場所へ連れていかれ、魔法の品を探すようになった
    - 話だけ聞くと途方もないのに、なぜか説明に合うものは見つかってしまう
    -
    - 道中は奇妙なトラブルもいろいろある
    - それでも、なぜかいつも解決してしまう——
    -
    - まさか、本当に「魔法」なのか？
    - %YOU%はときどき考える
    -
    - でも、そういう考えより大事なのは……
    - %CHARA%は、%YOU%の担当ウマ%UMA%だ
    - %YOU%は、%SEX%の担当トレーナーであるはずだ
    -
    - つまり……
    - %CHARA% は、メイクデビューの準備をしなければならない。
    -
    - また週末、トレーニング以外の時間に、%YOU%から %CHARA% をトレーニング場へ呼び出す
    - acc: 1
      content: 見つめる
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「？どうしたの%CALLNAME%、なんでそんな目で見るの？」
        - 不思議そうに見返す。鹿毛の小さな%UMA%は、何かを考えているらしい
        -
        - %SEX%をどうやって練習に誘おうか考える。いつもの%CHARA%なら、きっと——
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あっ！分かった！%CALLNAME%、主人が練習してるところが見たいんでしょ！」
        - 結局、何も言う前に、予想と違うことを聞かされた
    -
    - 「スイープ、急に練習したくなったの？」
    - ある程度の驚きで、とにかくその言葉が出てしまった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしたの？いくら天才の魔法使いでも、練習が必要なときくらいあるでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～%CALLNAME%に見せてあげる、天才%MOHOSHOJO%sweepyの実力！」
    -
    - ただ、十数分後——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだやだ！こんな練習、したくないわよ～！！」
    - ……%CHARA%は、もうトレーニングを嫌がっていた
    -
    - 「スイープは……僕の言った『走る魔法』を追ってみるんじゃなかったの？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もちろんそうよ！でも、こんなつまらない練習ばっかりして、『魔法』なんて学べるわけないでしょ！？」
    -
    - また「魔法」に戻った……
    - 考えてみればその通りで、%CHARA%を募集した最初から、そのあとの奇妙な探検まで
    - この子の動機は、ほぼ全部「魔法」を軸にしている
    - もしかすると、%SEX%の動機を知れば、「魔法」の意味も分かる——
    -
    - 「スイープは、どうしてそんなに魔法が好きなの？」
    - やさしく聞く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……なに、そんなことまで分からないの。」
    - 不満そうに%YOU%を一瞥する
    - それから、わざと咳払いして喉を整え、何か話し始める——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって魔法って、楽しいんだもん。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さっと花束を出したり、二度で病気を治したり、人を一気に笑わせたり、すごくない？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに！人が学べないものを学ぶのって、もともと羨ましいことでしょ！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～おばあちゃんみたいに、天下の魔法を全部覚えたら——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyの私は、偉大な大%MAJO%として崇められるんだから！」
    -
    - 理由は、想像していたほど複雑ではなかった
    - 「じゃあ……僕は……」
    - 少し考える
    -
    - 「……七月から、いくつかレースがあるらしい」
    - 「そのうちどれか一つでも勝てば、勝者は魔法の等級を認定される」
    - 「スイープなら、もしかしたら……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    - 耳がぴんと立つ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当！？%CALLNAME%！そんな大事なこと、なんで早く教えてくれないの！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～もう何も言わなくていい！天才%MOHOSHOJO%sweepyとして、このくらいの試練、出るに決まってる！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ぼーっとしてないで%CALLNAME%！当日いちばんいい魔法を出すために、主人は今から練習する！」
    -
    - ともかく、目の前の小さな%UMA%の練習意欲は、やっと引き出せた
    - 少なくとも、メイクデビューが終わるまでは、%YOU%は毎日%CHARA%のトレーニングで頭を抱える必要はない……


rs_begin_race:
  title: メイクデビュー前・魔法の準備
  lines:
    - メイクデビューの準備をしっかりするため、%YOU%はレース前に%CHARA%と一緒に準備室へ来た
    -
    - レースの流れについて、もう少し言い聞かせるつもりだったが……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うるさいうるさい！そんな%CALLNAME%が、また何を心配してるのよ！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%！そんな暇があるなら、荷物持ってよ？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なに見てるの、杖と帽子、ちゃんと持っといてって言ったでしょ！」
    - いつの間にか、またこうなっていた
    -
    - 話そうとする試みは、ほとんど徒労になる
    - 余計なことを言えば言い返され、言い聞かせる隙はほとんどない
    - 結局、ぼんやり横に立って、%CHARA%の指示どおり荷物を持つしかない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「準備かんぺき、万事整った～！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！帽子と杖、渡しなさい！」
    -
    - 一声で、%YOU%はすぐ魔法の帽子と杖を揃えて渡す
    - %CHARA%は帽子を受け取り、きちんと頭にかぶり、杖を腰に差す
    -
    - 「……本当に、その帽子かぶったまま走るの？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「バカ%CALLNAME%！こんな簡単なこと、分からないの！」
    - %CHARA%に叱られる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この帽子は、おばあちゃんが手作りでくれた魔法の道具なの！かぶらなきゃ、どうやってちゃんと魔法を出すのよ？！」
    -
    - 説得しても無駄だった
    - %YOU%は、帽子をかぶった小さな%UMA%がゆっくりゲートへ入っていくのを、遠くから見るしかなかった……


re_begin_race_win:
  title: メイクデビュー後・魔法等級の認定式
  lines:
    - やっと %CHARA% にメイクデビューを無事終わらせられた……
    - %SEX%との約束どおり、%YOU%は人手を先に頼んで、 %CHARA% の魔法等級認定式の準備をしておいた
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「それでは、これよりあなたは、認められた魔法学徒です！」
    - %CHARA%は仮設の授与台に立ち、傍らでは%FUJI%がきちんとした礼儀で紹介している
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだ！なんでただの魔法学徒なのよ！」
    - %CHARA%は、完全には満足していないらしい
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私、いきなり魔法大師に認定されるつもりだったのに！」
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「では、これからも精進してください」
    - %FUJI%は微笑んで応える
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: 通りすがりのウマ%UMA%
        - 「ねえ、自分の魔法の実力を証明するために走るなんて、ばかげてるでしょ」
    - 台下のウマ%UMA%は、侮った顔をしている
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: 通りすがりのウマ%UMA%
        - 「そもそも『魔法』なんて、『子ども』しか信じないんじゃない？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今、なんて言った！！？」
    - すぐ反応して、そのウマ%UMA%をじっと見る
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: 通りすがりのウマ%UMA%
        - 「ふん。どうしても不服なら、阪神ジュベナイルフィリーズで勝負すればいい」
    - 通りすがりのウマ%UMA%は、その一言だけ残して去っていく
    -
    - 台上で怒って足を踏み鳴らす%CHARA%を見て、%YOU%は思わず冷や汗をかく
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「『魔法』のために走る、ですか……」
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「ふふ、それも悪くないですね」
    -
    - 少なくとも、次のレースに %CHARA% をちゃんと出させる心配は、しなくてよくなった……
    - 阪神ジュベナイルフィリーズまでに、%SEX%の練習意欲がちゃんと上がってくれればいいのだが……


re_begin_race_lose:
  title: メイクデビュー後・果たせなかった儀式
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ～%CALLNAME%、約束の魔法認定式、どこにあるの？」
    - 戻ったあと、なぜか%CHARA%と微妙に顔を見合わせている
    -
    - 「ああ、あれは……」
    - 「勝ったときだけ、あるんだ……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、主人はゴールしたんだし、ぎりぎり『勝った』って言えるでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんで、それでも魔法認定式に出られないの？」
    -
    - 「ゴールはしたかもしれない」
    - 「でも、ゴールしたとき、君の前には、まだ他の%UMA%がいた」
    - 「その魔法認定式は、もう%SEX%たちが参加したのかもしれない……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだやだ！！なんで、なんでよ！！！」
    - 突然、大暴れし始める
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%——これは絶対、あなたのミスよ！！！！！」
    -
    - 「僕のミスかもしれない。でも、落ち着いて……」
    - 「チャンスはまだたくさんある。続けて出走すれば——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなた、七月以降の『いくつかレース』って言ったでしょ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次はいつ、早く教えなさい！！！」
    -
    - 「魔法認定式」を先延ばしにできる知らせはあるが、このままでは%CHARA%も喜ばないだろう……
    - とにかく、まずは未勝利を突破する目標へ進もう

rs_hans_fil:
  title: 阪神ジュベナイルフィリーズ前・宣戦の Bird's-foot Trefoil
  lines:
    - 朝から%CHARA%に会ったとき、いつもとまるで違う空気を感じた
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    -
    - なぜかずっと%YOU%を見ているのに、何もしない。ただ黙っている
    - いつもの文句も、急かす声もない
    -
    - とても自覚的に、そして疑う余地なく、%YOU%を地下鉄に乗せて阪神競馬場まで連れてきた
    - 準備室に入る今まで、一言も発しない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 「……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 「……」
    - 一秒が一年みたいな沈黙に陥る……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっとそこに突っ立って、今日が何の日か分かってるの、%CALLNAME%？」
    - 腕を組んで準備室の反対側に立っていた%CHARA%が、突然口を開く
    -
    - やっと話した……
    - こういうときは、こう答えるべきだ——
    - acc: 1
      content: 「復讐の日」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちがう！復讐なんかじゃない！！天才%MOHOSHOJO%sweepyが、いつそんな狭量だったのよ！！！」
    - acc: 2
      content: 「レースの日」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なんでそんなに儀式感ない言い方するの%CALLNAME%！」
    - acc: 3
      content: 「沈黙の日」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なにが沈黙の日よ%CALLNAME%！今日は沈黙の日までまだ早い！！」
        - 本当に沈黙の日があるのか……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日……本当は——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyが、魔法使いとして宿敵を討伐する日でしょ！！」
    - 歯を食いしばって言う
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「将来の大魔法使いを見下すなんて、これから、あの子には一言も言わせないんだから！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だ！か！ら！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「主人の帽子と杖、持ってこないのが分からないの、%CALLNAME%！！！」
    -
    - やっぱり、そのためか……
    - acc: 1
      content: 渡す
    - acc: 2
      content: とにかく渡しておく
    - %YOU%は手に持っていた帽子と杖を%CHARA%に渡す
    -
    - %CHARA%は帽子をきちんとかぶり、杖を腰に差す
    -
    - コースへ下りた%CHARA%は、ほとんど隊列の最後尾にいた
    - 正式にゲートへ入るまで、以前%SEX%と言い争いをしたあのウマ%UMA%を見つめていた……


re_hans_fil_win:
  title: 阪神ジュベナイルフィリーズ後・レース後の新たな勝負
  lines:
    - %CHARA%は、%YOU%がもともと予定していようがいまいが、どうせ出ると騒ぎそうだったこのレースを、きれいに勝った
    - ほどなく、レース後の表彰の時間になる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！言ったでしょ、私の魔法、あなたみたいな子には絶対分からないって！」
    - 表彰台に立ち、%CHARA%は台下で不服そうに歯をむくウマ%UMA%を、軽蔑した目で見る
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: 負けたウマ%UMA%
        - 「……」
    - ただ、台上の%CHARA%をじっと見ている
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - もっと見下した、確信した目で、じっと見返す
    -
    - レース後の貴重な時間が、激しい視線の勝負大会にならないように
    - %YOU%は急いで%CHARA%を現場から連れていった……


re_hans_fil_lose:
  title: 阪神ジュベナイルフィリーズ後・レース後の新たな勝負
  lines:
    - %CHARA%は闘志たっぷりにこのレースへ出た
    - 残念ながら、%SEX%が言ったようには、宿敵の討伐は果たせなかった
    -
    - ただ幸い、以前%SEX%と言い争いをしたあのウマ%UMA%も、優勝はできなかった
    - 今、%CHARA%とそのウマ%UMA%が、なぜか台下でちょうど隣り合っている
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: 通りすがりのウマ%UMA%
        - 「……」
    - 主にスタンドで勝った%UMA%を見ているが、傍らの%CHARA%にも二度は目をやる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 胸の前で腕を組み、気にしていないふりをしつつ、鋭い目で横目を返すのを忘れない
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: 通りすがりのウマ%UMA%
        - 「……」
    - 頭を向けて%CHARA%を見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 同じく頭を向けて、真正面から見返す
    -
    - レース後の貴重な時間が、激しい視線の勝負大会にならないように
    - %YOU%は急いで%CHARA%を現場から連れていった……


# クラシック級第1週開始
ws_new_year_c:
  title: 新年の計画
  lines:
    - %YOU%の指導のもと、%CHARA% は無事にジュニア級を越えた
    -
    - クラシック級に入るということは、 %CHARA% がより高い水準のレースに出て、より強い相手と出会うということでもある
    - %CHARA%の力は信じているが、%SEX%に安定して出させる方法は、依然として%YOU%の頭痛の種だ
    - acc: 1
      content: （とにかく、まずは新年をちゃんと過ごそう——）
    - 朝早いのに、神社の入口にはもう長い列ができ、列の端は神社へ上る階段まで届きそうだ
    - %YOU%と帽子をかぶった小さな%UMA%は、列に合わせてゆっくり進む
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なになに！こんなところに連れてきて、またお願いごとするだけ？」
    - 並んでいるあいだ、話をする
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お願いなんて、ふわふわしたやつに何の意味があるの？魔法で一気に叶えればいいじゃない？」
    - どうやら、願掛けは%SEX%の魔法の範疇ではないらしい……
    -
    - でも、来た以上は、%SEX%にもちゃんとお願いしてもらおう
    - 列に少し苛立っている小さな%UMA%の背中を見ながら、話す
    -
    - 「お願いごとは、みんなの目には伝統だから……」
    - 「ずっと、みんなそうしてきた」
    -
    - 「新年のこの日、願いがある人は『みんな』神社に来る」
    - 「僕たちも今、そうしている——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……待って！願いがある人は『みんな』神社に来るって？」
    - %YOU%の言葉の一部を、突然繰り返す
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……つまり……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなた、願いがあるの！？？」
    - なぜか関心のポイントが微妙にずれて、%CHARA%は振り返り、まっすぐこちらを見る
    -
    - 「ああ、それは——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「言わなくていい！%CALLNAME%の願いを叶えるのは、魔法使いの責任なんだから！」
    - 思いつきの%CHARA%に杖で指され、急かされるように遮られる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Freesia★Dogwood、言いなさい～！」
    -
    - もともと、%CHARA%にお願いをさせて少し静かにさせるつもりだった
    - 結果、お願いする人が全然ちがうし、%CHARA%も静かになっていない。むしろ期待した目で答えを待っている
    - これは、いったいどういう展開だろう
    -
    - こういうときは——


ws_ny_sub_select:
  - acc: 1
    key: select
    content: 言う
    # ws_ny_sub_option
  - if: d.reject < 3
    acc: 2
    content: 首を振る
    # ws_ny_sub_reject
  - if: d.reject < 3
    acc: 3
    content: 「お願いごとって、言っちゃうと叶わないんだ……」
    # ws_ny_sub_reject


ws_ny_sub_option:
  - この場で、%YOU%がいちばん叶えたい願いは——
  - acc: 1
    key: select
    content: 「スイープがレースで勝つこと」（全能力+20）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「？この願いって？」
      - 少し驚いた様子
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なに！なんでそんな願いするの！？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだやだ！やるのつかれる！ちがう、聞いててつまんない！！あなたの言うこと、やりたくない！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、主人と関係ない願い、出し直し！！！」
      -
      - %YOU%が%CHARA%のためになると思った願いが、なぜこんなに魅力がないのか……
      - 少なくとも、少し褒めることを対価に、%YOU%は%CHARA%が%SEX%なりに受け入れられるやり方で、しばらく練習を増やさせた
  - acc: 2
    content: 「スイープが勉強で伸びること」（スキルPt+100）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「？この願いって？」
      - 少し驚いた様子
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なに！なんでそんな願いするの！？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだやだ！やるのつかれる！ちがう、聞いててつまんない！！あなたの言うこと、やりたくない！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、主人と関係ない願い、出し直し！！！」
      -
      - %YOU%が%CHARA%のためになると思った願いが、なぜこんなに魅力がないのか……
      - 少なくとも、図書館に新しく入った童話を%CHARA%と読んだあと、%SEX%はそれほど嫌がらなくなった様子だった
  - acc: 3
    content: 「スイープが元気でいること」（体力+400）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「？この願いって？」
      - 少し驚いた様子
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なに！なんでそんな願いするの！？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだやだ！やるのつかれる！ちがう、聞いててつまんない！！あなたの言うこと、やりたくない！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、主人と関係ない願い、出し直し！！！」
      -
      - %YOU%が%CHARA%のためになると思った願いが、なぜこんなに魅力がないのか……
      - 少なくとも、%CHARA%をスイーツ店へ連れていったあと、%SEX%はちゃんと静かになった


ws_ny_sub_reject:
  - if: d.reject === 0
    lines:
      - %CHARA%は眉をひそめ、それからまた魔法の杖を振る
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Freesia★Dogwood、言いなさい～！」
  - if: d.reject === 1
    lines:
      - %CHARA%の杖を持つ手が、明らかに震えた
      - 眉を寄せ、咳をしたふりをして、%CHARA%はまた魔法の杖を振る
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Freesia★Dogwood、言いなさい～！」
  - if: d.reject === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「言えって言ったら言いなさい！！！」
      - 声が一気に大きくなる
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%！！！願いを主人に言いなさい！！！！！」


# クラシック級第1週終了
we_new_turn:
  title: 新たな周回の Thistle
  lines:
    - 新年が明けたら、%CHARA% のクラシック級のレース計画も立てなければならない
    -
    - 身体能力、脚質、距離適性を総合すると……
    - %CHARA% にいちばん合う路線は、たぶん——
    - acc: 1
      content: 「牝馬三冠。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「牝馬三冠……？それ、なに？」
    - トレーナー室で、目の前の小さな%UMA%が困惑した顔をする
    -
    - 「いろんな魔法の素材で名付けられた、三つのレースの総称だよ。」
    - ゆっくり言って、そこで一度止める
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！%CALLNAME%、黙らないで、早く続き言いなさい！」
    - %CHARA%は一気に食いついた
    -
    - 「『桜花賞』、『オークス』、『秋華賞』」
    - 「春のソメイヨシノ、夏のイギリスオーク、秋の百花に対応している」
    - 「季節のちがう魔法の力を全部揃えれば——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いい、いい、すごくいい、%CALLNAME%！それで決まり！」
    - %YOU%が言い終わる前に、言葉を遮る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyは、牝馬三冠を目標に、『魔法三冠』を取るわ！」
    -
    - 言い回しは少し奇妙で、しかも%CHARA%がこの三レースの難しさと価値を分かっているかも全く不明だ
    - でもともかく、少なくとも %CHARA% にははっきりした目標ができた……


# 好感+20、恋慕+1、やる気+1、スキルPt+50
ws_valentine_c:
  title: 止まらない Chocolate？！
  lines:
    - 今日は一年に一度のバレンタインデー。トレセン学園の伝統に合わせて、%YOU%はチョコレートの箱を用意した
    - acc: 1
      content: 「チョコは……一人ひとりに配るべきか、一人に渡すべきか……」
    -
    - トレセン学園の慣例どおり、%YOU%は今年のやり方を考える
    - 道を歩いていると、突然 %CHARA% を見かける
    -
    - acc: 1
      content: （挨拶しておこう。）
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%！ちょうど探してたの。」
    - 結果、%CHARA% のほうから先に声をかけられた
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの人たち、本当に！一日中、魔法なんてないとかばっかり」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただ、自分に魔法を覚える才能がないだけなのに！」
    - すぐ不満を言い始める
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ……！おかげで一晩中眠れないし、魔法の練習もできなかった！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%、今すぐスイーツが食べたい！早くスイーツ店、探しなさいよ～！！」
    - 結局、わがままの話に戻った……
    -
    - %YOU%が朝から少し冷や汗をかいていると、%CHARA%が突然何か気づく
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……待って、%CALLNAME%、手に持ってるの、スイーツでしょ？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっと持ったまま、食べもしないなんて……もしかして、隠し持ってる魔法のスイーツ！？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちょうどいい、朝は%MAJO%が魔力を補う時間！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%、このスイーツ、主人に食べさせても問題ないでしょ？」
    - %CHARA%は、きらきらの目で%YOU%を見る
    -
    - acc: 1
      content: 「それは……ちょっと……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！%CALLNAME%がそう簡単に譲るわけないって分かってたわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだ！このスイーツ、食べるんだから！！」
    - %CHARA%は%YOU%の前で、ずっと甘えてくる
    -
    - acc: 1
      content: 「じゃあ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっ！やっぱり同意したでしょ！さすが私の%CALLNAME%！」
    -
     - ……本当はそういう意味ではないのに、%CHARA%は%YOU%が説明する前に、%YOU%の手のチョコを奪い取る
    - それから、遠慮なく%YOU%が用意したきれいな箱を開けてしまう……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～スイーツ、おいしいスイーツ～」
    - %CHARA%は、鼻歌を歌いながらチョコの包装を開ける……
    -
    - acc: 1
      content: 「今日は、バレンタインデーだよ……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そう！今日は、伝説の、一年で愛の魔力がいちばん満ちる瞬間！」
    - %CHARA%はチョコを一粒、適当に口へ放り入れる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おばあちゃんが言ってた。このとき相手に『魔力たっぷりの食べ物』を食べさせれば、愛情の強い魔法が出せて、二人はもう離れなくなるんだって！」
    - %CHARA%は、%YOU%のチョコをがつがつ噛んでいる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「厨房を借りられれば、私も絶対そんな食べ物作れる！」
    - %CHARA%は、あっという間に%YOU%のチョコを食べ尽くした
    - acc: 1
      content: 「じゃあ、スイープはどんな食べ物を作りたいの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～聞くまでもない、もちろん——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「使……%CALLNAME%！！！！！」
    - 何か思いついたみたいに、両頬が真っ赤になる
    -
    - %CHARA% は歯をむいて%YOU%を見る
    - それから慌てて杖を出し、%YOU%に向かって振る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Poppy★Asphodel、全部忘れなさい！！」
    -
    - acc: 1
      content: 「えっ！？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どう、さっき何があったか、全部忘れたでしょ、%CALLNAME%！」
    - %CHARA%は緊張と気遣いの混ざった目で%YOU%を見る
    -
    - acc: 1
      content: 「あ……うん……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「は——はぁ！もう！」
    - 少し安心した様子
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次から、バレンタインデーに主人へチョコをたくさん持ってこないで、分かった！！」
    -
    - acc: 1
      content: 「わかった？？？」
    - なぜかまだ赤い%CHARA% の両頬を見て、%YOU%は話を合わせるだけだった
    -
    - こうして、%YOU%のバレンタインの贈り物は、朝のうちに全部%CHARA%に食べられてしまった……

rs_oka_sho:
  title: 桜花賞前・穏やかな Cherry Blossom
  lines:
    - 「桜花賞」、牝馬三冠の第一戦。桜が咲く季節に行われるG1のマイルレース
    - 同時に、%CHARA% がクラシック級に入ってから、初めて本気で向き合うレースでもある
    -
    - %CHARA% が急に気が変わらないことを願いながら、早めに%SEX%を準備室へ連れてきた
    -
    - %CHARA%は帽子を準備室の机に置き、杖を振り、口の中で何か唱えている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「CherryBlossom★Azalea、桜に撫でられなさい！」
    - そう言い終えると、%CHARA%は杖をまっすぐ机の上の魔法帽へ向ける
    -
    - 「本当に……帽子に、そんなことするの？」
    - %YOU%は小さく聞く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「当たり前でしょ、おばあちゃんがくれた帽子だって機嫌悪くなるんだから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「拗ねはじめたら、おばあちゃんしか収められない、なんてことになったら困るでしょ！」
    -
    - 「……」
    - %YOU%は黙って傍らに立ち、次の指示を待つ
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%、なんでそんな死んだみたいな顔してるの？」
    - 結局、指名された
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もしかして——」
    - また何かを思いついたらしい
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%も、エンチャントが足りない！？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「CherryBlossom★CrownImperial、桜に撫でられなさい！」
    - 急に標的を変え、%CHARA%は杖を振って、まっすぐ%YOU%を指す
    -
    - 「ああ……力が……満ちてきた……！」
    - 魔法をかけられたみたいに応える
    - 「ゴールのとき、もっと大きな声で呼べる！！」
    -
    - どこか軽すぎる気もする
    - でもとにかく、%CHARA%に出走する気があるのは、何よりいい
    -
    - %YOU%は、帽子をかぶった %CHARA% が隊列の最後尾からゆっくりゲートへ入っていくのを見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '状態を得た '
        - content: '[優しい桜の魔法]'
          title: 冷静になった！……たぶん？賢さが少し上がった……？
          # 賢さ+5%


re_oka_sho_win:
  title: 桜花賞後・桜の魔力
  lines:
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……ここ、どこ？」
    - fontStyle: italic
      content: 気づかないうちに、レースは静かに終わっていた
    - fontStyle: italic
      content: %CHARA%が気づけば、%SEX%が来たことのない場所にいた
    - fontStyle: italic
      content: 周りには桜の香りが漂い、桜の木が取り囲んでいる
    -
    - fontStyle: italic
      content: %CHARA%は好奇と困惑の目で、少し先の空を見る
    - fontStyle: italic
      content: その瞬間——
    -
    - fontStyle: italic
      content: %SEX%が見つめていた空に、突然花びらが舞い、一人の魔法使いが現れる——
    - fontStyle: italic
      content: 彼女は桜色の装いで、空からゆっくり降りてくる
    - fontStyle: italic
      content: 現れただけで、穏やかな印象を与える
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          color: %COLOR%
          content: 「！あなたは！？」
    - fontStyle: italic
      content: %CHARA%は目の前の魔法使いを、驚喜の目で見る
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「私は……桜の魔法の力の持ち主……」
    - fontStyle: italic
      color: rgba(213, 126, 206, 1)
      content: 降り立ったあと、やさしい口調で%CHARA%に話す
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「あなたが邪悪な魔法使いたちを打ち破ったから、桜の魔法の力は守られた……」
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「この栄光と力は、疑いなくあなたのもの」
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「今、伝説の桜の魔法の力を、あなたへ渡します」
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「ああ、小さな魔法使いよ、あなたこそ、『魔法』の未来——」
    -
    - fontStyle: italic
      content: 未来——
    - fontStyle: italic
      content: 祝福の声が、耳のそばで響いているようだった——
    -
    - divider: true
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん～ふん～！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepy！今日から！！『桜の魔法の力』！！の持ち主よ！！！」
    -
    - 桜花賞できれいに優勝した%CHARA%は、突然得意げに観客へ杖を掲げ、何か叫んでいる
    - 傍らで、%SEX%が受け取りたがらない優勝旗を代わりに持ち、冷や汗をかくスタッフのことなど、まったく気にしていない……


re_oka_sho_lose:
  title: 桜花賞後・魔法のもう一面
  lines:
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          color: %COLOR%
          content: 「……ここ、どこ？」
    - fontStyle: italic
      content: 気づかないうちに、レースは静かに終わっていた
    - fontStyle: italic
      content: %CHARA%が気づけば、%SEX%が来たことのない場所にいた
    - fontStyle: italic
      content: 周りには散った花びらが落ち、桜の木が取り囲んでいる
    -
    - fontStyle: italic
      content: 少し先に、穏やかで静かな、桜色を主にした装いの魔法使いが伏せている
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「小さな魔法使いよ……やっと来てくれました……」
    - fontStyle: italic
      content: %CHARA%の到来に気づき、魔法使いはゆっくり、力を振り絞って頭を上げ、%CHARA%を見る
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          color: %COLOR%
          content: 「あなた……は？」
    - fontStyle: italic
      content: %CHARA%は、目の前の弱った魔法使いを、慎重に見る
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「私は……桜の魔法の力の、かつての持ち主……」
    - fontStyle: italic
      content: 穏やかな魔法使いは、小さく息を整えながら、ゆっくり語る
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「今は、邪悪な魔法使いに敗れ、その力を失いました……」
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「ああ……私の命も……この桜と同じように、短くなっていきます……」
    - fontStyle: italic
      content: 息も絶え絶えの魔法使いは、やさしく、名残惜しそうな口調で続ける
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「これが、桜の力を受け取りながら守れなかった代償なのかもしれません……」
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「小さな魔法使いよ、もしあなたがこの力を受けたら、どうなるのでしょう……」
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「あなたがかけた、短い桜の魔法が散って、守りを失ったら——」
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: 桜のような魔法使い
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: 「それは、あなたの%CALLNAME%に——」
    -
    - divider: true
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    - 何を思ったのか、目の前の小さな%UMA%の顔色が一気に青ざめる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「や！だ！わ！」
    - 突然、おかしなことを言う
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「桜の魔法も素材も、主人は今、いらない！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、早く解呪の魔法、手配しないと！！！」
    - なぜか、レースに負けた%CHARA%は、焦って%YOU%をトレセン学園へ引き戻した
    - そのあとずっと、%YOU%に向かって、それぞれ奇妙な呪文を唱えていた……


rs_yush_him:
  title: オークス前・恐れなき Oak Leaf
  lines:
    - オークス。生命力にあふれた日に行われる中距離G1
    - 同時に、牝馬三冠のなかでいちばん注目を集め、いちばん重いレースでもある
    -
    - こんなレースの前では、%CHARA%のよく分からない気持ちに振り回され続けるより
    - こちらから動いたほうがいい——
    -
    - %CHARA%の魔法帽を一時預かっている%YOU%は、その帽子を準備室の机にきちんと置く


rs_yh_select:
  - if: d.decorate < 3
    acc: 1
    content: 飾りを足す
    lines:
      - 新鮮なオークの葉をいくつか探し、%CHARA%の帽子に飾りをつける
      # リプレイ
  - acc: 2
    content: （もう十分だろう）
    lines:
      - if: d.decorate < 3
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……？これ、どういうこと、%CALLNAME%？」
          - 葉で飾られた魔法帽を見て、%CHARA%は少し戸惑っている
          - acc: 1
            content: 「これは……主人のために用意したエンチャントで……」
          - %YOU%は慎重に答える
          - acc: 1
            content: 「オークの魔法素材の力を使えば、スイープの力が増すかもしれない——」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……なにそれ！魔法素材、そんな使い方するの？」
          - 少し驚いて、%YOU%の説明を遮る
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「Oak★Heliotrope！もういい！」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「主人、この素材は自分で集めて、全部ちゃんと置いておく！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「帰ったら、これで作った魔薬を%CALLNAME%に一本あげる。%CALLNAME%が主人を気にかけてくれたご褒美ね！」
          -
          - 話の着地点が、完全にずれてしまった……
          -
          - そのあと、%YOU%はスタンドへ行き、帽子をかぶった %CHARA% が隊列の最後尾からゆっくりゲートへ入るのを見る

      - if: d.decorate === 3
        lines:
          - 結果、今のこの有様になった
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「…… 」
          - ほとんど葉の帽子になった魔法帽を見て、スイープトウショウは、なぜか沈黙する
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「…… いったいどういうこと、使い魔？」
          - 口調が、やけに重くなった……
          -
          - acc: 1
            content: 「ああ、それは…… 」
          - 少し言葉に詰まる
          - 「調子に乗っていたら、こうなって…… 」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「Oak★Vervain！早く帽子を主人のために片付けなさい、使い魔！！」
          - 強く命令する
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「じゃないと——」
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「この葉っぱ、全部魔薬にして使い魔に飲ませるから！！！」
          -
          - %CHARA%の脅しのもと、%YOU%はすぐ片付けを始めた……
          -
          - そのあと、%YOU%はスタンドへ行き、帽子をかぶった %CHARA% が隊列の最後尾からゆっくりゲートへ入るのを見る
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - '状態を得た '
          - content: '[勇敢なオークの魔法]'
            title: 大胆になった！……たぶん？パワーが少し上がった……？
            # パワー+5%


re_yush_him_win:
  title: オークス後・わがままな Oak Leaf
  lines:
    - %CHARA%は、オークスできれいに優勝した
    - つまり、%SEX%は牝馬三冠の選手のなかでも抜きん出た実力を証明し、いわゆる「オークの魔法の力」を手にした
    -
    - そんな%UMA%の、インタビューでの様子は——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『なんでその走り方』？ふんふん～見せるなら、もちろんあの魔法を使うでしょ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『勝って嬉しい』？当たり前！天才%MOHOSHOJO%sweepyは、この魔法競技のためにずっと準備してきたんだから！」
    - 乗り気で応えている
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『その走り方にどんな意味が』？……天才%MOHOSHOJO%の私が、あの魔法、かっこいいと思ったから。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『ここに立てて嬉しい』？……嬉しいわよ。天才%MOHOSHOJO%の私、いっぱい練習したんだから。」
    - 似た質問には、できるだけ同じ言い方で返す
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『その走り方の利点は』……？……きれいだと思う。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……『その走り方は楽しい』……？……たぶん。だって、ずっと準備してきたし。」
    - またほとんど同じ質問。ただ、口調はだんだん冷めていく
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……やだ。」
    - インタビューの途中で、突然おかしな言葉を言う
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだ、絶対やだ！あなたたちの質問、なんで一つも『魔法』と関係ないの！？」
    - わざと少し怒った様子を見せる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「勝った%UMA%が、ちゃんと魔法帽かぶって杖持ってるでしょ？！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「普通の、同じ質問ばっかり、オウムみたいに全部答えるなんて、やだ！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！こんなにつまんないなら、帰って%CALLNAME%に魔薬作ったほうがマシ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「質問したいなら、簡単に！直接！ぐるぐる回さないで！！」
    - %CHARA%の直球の要求で、記者の何人かは確かに少し控えた
    -
    - そのあと、%CHARA%は%SEX%なりのやり方で、ちゃんとレース後の流れを終えた
    - そして帰り、気になって%YOU%に（オークの葉で作ったわけではない）濃い「魔薬」を作った……


re_yush_him_lose:
  title: オークス後・飲まなくていい良薬は口に苦し
  lines:
    - %CHARA%は、残念ながらオークスで敗れた
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだ！なんで、なんでよ！」
    - 地下通路を出るとき、負けた不満をはっきり示す
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちがうちがう！天才%MOHOSHOJO%sweepyが、こんな負け方するわけない！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！あなた、いったいどういうこと！？？」
    -
    - この焦りに対して、%YOU%が返すべきは——
    - acc: 1
      content: 「ごめん……僕のせいだ」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「言いなさい！%CALLNAME%、あなたのせいなら、どう償うの？！！」
        - %YOU%の横を歩く%CHARA%が寄ってきて、せっぱ詰まった目で%YOU%を見る
        -
        - acc: 1
          content: 「どんな魔薬でも、飲むよ……」
          lines:
            - %YOU%は、そう謝るだけだった
            -
            - ただ、%YOU%がそう言い終えたあと、%CHARA%はなぜか歩くのを止める
            - それから完全に振り返り、また%YOU%を見る
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……」
            - そうして見つめ合い、妙な短い静寂に落ちる
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……へえ。そう。思わなかった。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「%CALLNAME%、本当に飲みたかったのね。」
            - 目には、変な生き物を見るような色がある……
            -
            - まさか……もともと「%YOU%に魔薬を飲ませる」つもりはなかったのか……！？
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「なら話は早い。主人、帰ったら%CALLNAME%に魔薬を作る。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「逃げちゃだめ！！」
            -
            - 帰ったあと、%YOU%は涙をこらえて（オークの葉で作ったわけではない）濃い「魔薬」を飲んだ……


# スピード&賢さ+5
ws_summer_start_c:
  title: 夏合宿開始・厄介ごと
  lines:
    - 夏が、静かにやってきた
    - 朝から太陽が少しずつ光を撒き、世界に温度を増やしていく
    -
    - こんな日には、夏バテする子も、『夏の女』と呼ばれるウマ%UMA%も
    - トレセン学園の生徒はみんな、学園が作った最高水準の施設を使う機会がある
    -
    - 必要なのは——夏合宿に参加すること。
    -
    - %CHARA%にも学園のいい施設で練習してもらうため
    - %SEX%と一緒に乗り物に乗って、夏合宿の現場へ行く計画を立てる——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「バス？やだ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「車？電動？そんなもの、なにがいいの！？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでほうきに乗れないの！！？？」
    - 結果、合宿が始まる前から難題にぶつかった……
    -
    - acc: 1
      content: 「あまり目立つと、騒ぎになる……」
      lines:
        - %YOU%は説得を試みるだけだった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあどうするの！%CALLNAME%——！！他に方法ないの！？？？」
    - トレーナー室で、%CHARA%は目をきょろきょろさせ、焦って何かを探す
    - 折りたたみ自転車、スポーツ用のスケートボード、子犬のぬいぐるみ——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！待って！」
    - 視線が急に戻り、%YOU%に向く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「魔法使いのいちばんいい乗り物、目の前にあるじゃない？」
    - %CHARA%の目が光る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい、はい！」
    - %YOU%の背中に乗り、両足で軽く背中を蹴る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早く早く、もっと早く——！！！」
    -
    - 道端からの微妙な視線は無視する
    - ともかく、少なくとも%CHARA%をちゃんと合宿の現場まで連れていけた……

# 夏合宿終了の対応トリガー時刻。夏合宿に参加しなかった場合も、この節点または対応ターン終了で発火
# パワー&根性+5
we_summer_end_c:
  title: 魔女の夜の予告
  lines:
    - if: era.get('cflag:0:位置') === era.get('cflag:44:位置')
      lines:
        - 気づかないうちに、トレセンへ戻る日になっていた
        - 夏合宿の忙しさから抜け出し、%YOU%は荷物を整えて、自分のウマ%UMA%たちを連れてトレセン学園へ戻った
        - それから、長いこと閉じていた、自分のトレーナー室の扉を開ける——
    - if: era.get('cflag:0:位置') !== era.get('cflag:44:位置')
      lines:
        - 気づかないうちに、夏合宿に出ていたウマ%UMA%たちは学園へ戻っていた
        - また忙しい一日を終え、トレーニング場から戻った%YOU%は、いつものように事務室のほうへ歩く
        - それから、トレーナー室の扉をそっと開ける——

    - いつものようにほとんど変わらず、馴染み深くて安心する
    - 夕日の光がカーテンの隙間から窓を通り、トレーナー室の椅子と机を照らしている
    -
    - そして、机の上の、とても質素なのに、なぜか%YOU%の目を強く引く一通の手紙を照らしている。
    -
    - 魔法怪盗の予告状か、魔法学院の招待状か？
    - とにかく、この手紙はどういうわけかトレーナー室に入り、静かに%YOU%の机の上に置かれている
    -
    - 手に取って見てみよう
    - そう思ったとき、%CHARA%がトレーナー室へついて入ってくる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、%CALLNAME%——」
    - %YOU%は机を少し整え、手紙を手に取る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……それ、なに？手紙？」
    - %YOU%は封筒を掲げ、字のある面を%CHARA%へ向ける
    -
    - そこにはこう書いてある：
    - 親愛なる孫娘へ
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！おばあちゃん！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！なに書いてあるの、%CALLNAME%！早く読んで！」
    -
    - なぜ自分で見ないで、誰かに読ませなきゃいけないのか……
    - そう思いながら、寄ってくる小さな頭の前で、ゆっくり封筒を開ける——
    -
    - 手紙の、短くてきれいな文字を読み上げる：
    -
    - content: 孫娘へ。最近は元気？
      fontStyle: italic
      align: center
    - content: 気づかないうちに百花の季節になって、おばあちゃんの庭の花も、もっと盛んになったみたい
      fontStyle: italic
      align: center
    - content: それで思い出したの。数か月前、孫娘のあなたとちょっと世間話をしたこと
      fontStyle: italic
      align: center
    - content: あなたは、自分の%CALLNAME%を持っただけでなく、『走る魔法』というすごい魔法も身につけた、と言っていたわね
      fontStyle: italic
      align: center
    - content: もう少し時間が経ったけれど、もしよければ
      fontStyle: italic
      align: center
    - content: あのときの話で、私があなたに言った『魔女の夜』の約束を、覚えていてほしい
      fontStyle: italic
      align: center
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！！」
    - 耳がぴんと立ち、瞳が明らかに縮む
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！！次のレースはいつ！？早く教えて！！」
    - 焦って%YOU%に聞く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「少なくとも……『魔女の夜』の前に、先に……！」
    - 何か独り言を言う
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '状態を得た '
        - content: '[大魔法使いの約束]'
          title: どうやら大事な約束らしい。約束を守るため、やる気が上がっている。


rs_shuk_sho:
  title: 秋華賞前・期待の Anemone
  lines:
    - 秋華賞。百花が咲く日に行われるマイルG1
    - 同時に、もともとの計画では、%CHARA%がクラシック級で出る最後のG1でもある
    -
    - なぜか前日、%CHARA% から%YOU%だけ先にレース会場へ来い、という命令を受けていた
    - 準備室に入った%YOU%は、すぐにそこに立つ%CHARA%を見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『魔法三冠』の最後……『秋華賞』……」
    - 目の前の鹿毛の小さな%UMA%は、何かを考えながら独り言を始める
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この魔法も手に入れられたら……『魔女の夜』、もっと希望が……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それから、天才%MOHOSHOJO%sweepyは『魔女の夜』できれいに魔法を出して……」
    - 話すほど興奮して、だんだん笑顔になる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それから、おばあちゃんが口で認めてくれる、天才%MOHOSHOJO%の私は一人前の大——！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！なんで主人の独り言、盗み聞きしてるの！」
    - %YOU%がすぐ近くにいるのを見て、%CHARA%は明らかにびっくりする
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……あなた、自分の用事ないの%CALLNAME%！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『主人のことは%CALLNAME%のこともだから把握しないと』……？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだ！魔法競技の前に主人を邪魔するのは、許されない罪よ！Anemone★Juniper！%CALLNAME%退散！！」
    -
    - 力は入れずに、%YOU%をゆっくり準備室から押し出す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次から、%CALLNAME%が挨拶なしで主人の前に立つの、禁止！！！」
    -
    - 『魔女の夜』の完全な意味はまだ分からないが、%CHARA%の出走意欲が高いことは間違いない
    - 今、%YOU%はスタンドに立ち、魔法帽をかぶった%CHARA%が隊列の最後尾で三分ほど呪文を唱えてから、ゆっくりゲートへ入るのを見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '状態を得た '
        - content: '[期待の秋の魔法]'
          title: 百花の盛りと、それに見合う収穫……？スピードが上がったらしい。
        # スピード+5%


re_shuk_sho_win:
  title: 秋華賞後・未来を望む魔法
  lines:
    - 高まったやる気と、長いあいだの努力で、%CHARA%は『魔法三冠』の最後の一冠できれいに優勝した
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これで……『魔女の夜』も……」
    - 今、コースを出た%CHARA%は頭を下げて何か考え、わずかに笑ったように見える
    -
    - でもすぐ、余光で傍らの%YOU%を見下すように一瞥し、頭を上げる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！何も言ってないわ！今度は、%CALLNAME%に聞かせないんだから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「秋の魔法を学びたいなんて、%CALLNAME%はまだ早いわ！！」
    -
    - ともかく、鼻歌を歌いながら歩く%CHARA%は、『魔法三冠』の最後の一冠を勝ったあと、本当に嬉しそうだ
    - 『魔女の夜』に、また一歩近づいたのだろう——


re_shuk_sho_lose:
  title: 秋華賞後・未知へ向かう魔法
  lines:
    - 高まったやる気と長い努力があっても、%CHARA%は食い違って、『魔法三冠』の最後の一冠では優勝できなかった
    - なぜだ、と悔しそうな小さな%UMA%は、今%YOU%と並んで歩き、両手の指でこめかみを突いている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……ん！なんで……なんで……！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんなにして、まだ、できなかったなんて……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もしかして私、本当にただの……」
    - なぜか言葉が一度止まり、目が少し落ちる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちがう！ちがう！そんなわけない！」
    - 自分を遮って、すぐ立て直す
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！どうせ……まだ『魔女の夜』じゃないし……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今回うまくいかなくても……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの日に、できれば……それで……」
    - %CHARA%は微妙に何か独り言を言う
    -
    - 負けても、『魔女の夜』は迫り続けているらしい——
    - %YOU%は、なぜか少し寡黙になり、ただ%YOU%と一緒に黙って学園へ戻る小さな%UMA%を見る


# 発火条件：秋華賞の翌週
# 根性&スタミナ+5
ws_truth:
  title: 魔女の夜の真相
  lines:
    - おばあちゃんからのあの手紙を受け取ってから、%CHARA%のトレーニングの積極性と出走の熱は、明らかに上がった
    - 明らかに、意図がある様子だ
    -
    - そして%CHARA%がずっと口にしている、その意図のいちばん中心の言葉——
    - やっぱり『魔女の夜』だろう
    -
    - これまでも、いろんなやり方で『魔女の夜』の本当の意味を推測してきた
    - でも、側面からの情報集め、特に%CHARA%相手の情報集めは、やはり難しすぎる
    -
    - たぶん……直接聞いたほうが、分かりやすい
    - acc: 1
      content: 「『魔女の夜』って、いったい何なんだ……？」
    - %CHARA%が練習の成果で少し緩んだとき、慎重にその質問を出す
    -
    - 口にしてはいけない秘密だと思い、他の手がかりを少し集めるつもりだったが——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なに%CALLNAME%、これも知らない、あれも知らない。だから主人の魔法を盗み見るのが好きなんでしょ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～！%CALLNAME%がそんなに分からないなら、主人、教えてあげる！」
    - 予想外にスムーズだった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『魔女の夜』は、いわゆる大魔法使い同士が会う夜」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その日、世界中の魔法使いが集まるの……」
    - ゆっくり語る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまり——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その日、おばあちゃんが自分で『エリザベス女王杯』の現場へ来て、私の魔法を見るの！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どう？%CALLNAME%、びっくりしたでしょ！？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おばあちゃんに、あなたの言った『走る魔法』を会得して、一人前の大%MAJO%になれるって見せる、すごくいい機会なの！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、おばあちゃんが言ってた。私がレースに勝ったら、夜は校門で待っててくれるって！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～おばあちゃんに、さすが天才%MOHOSHOJO%sweepyって言われるとき……」
    - 話しながら、鹿毛の小さな%UMA%はまた未来の想像に浸る
    -
    - こうなると、%CHARA%の目標はとてもはっきりしている
    - クラシック級で、エリザベス女王杯に勝つ……
    -
    - いろいろ心配はあるが、%CHARA%がやりたいなら、きっとできるだろう
    - %YOU%は、そう思うだけだった


rs_eliz_cup_c:
  title: エリザベス女王杯前・渇望の魔法
  lines:
    - 長い時間が過ぎた。魔法の導きか、それとも見えない必然か
    - %YOU%と%CHARA%のトゥインクル・シリーズの旅は、気づかないうちにシニア級の領域へ踏み込みかけている
    - そしてシニア級の領域へ踏み込むことは、いったい何を意味するのか——
    -
    - エリザベス女王杯。シニア級の中距離G1
    -
    - 『牝馬三冠』……あるいは『魔法三冠』に比べ、エリザベス女王杯は、とても『絶対に公平なレース』ではない
    - つまりこのレースには、%CHARA%よりはるかにキャリアが厚く、牝馬三冠を全部取ったことさえある、シニア級で激しい争いを重ねてきた先輩が出る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大丈夫、大丈夫。天才%MOHOSHOJO%sweepyなら、なんでもできる。」
    - %YOU%と一緒に現場へ来た%CHARA%は、休憩室を行ったり来たりするだけだ
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%！」
    - 突然%YOU%を呼ぶ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ねえ、もし主人が負けたら、どうするの？」
    -
    - 心の中では、%SEX%と同じ不安があるのかもしれない
    - でもともかく、やはりこう答えるべきだ——
    - - acc: 1
        content: 「スイープは、誰にも負けないよ」
    - 短く、はっきり答える。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ふん。それでいい。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今度こそ、絶対……」
    - 独り言を言う
    -
    - ほどなく、%YOU%はスタンドへ行く
    - 少し先で、%CHARA%は魔法帽をかぶり、杖を差し、隊列の最後尾で呪文を唱え続けている
    - 誰かに急かされて、%CHARA%は一度止まってから、ゆっくりゲートへ向かう
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '状態を得た '
        - content: '[渇望の奇跡魔法]'
          title: 奇跡で認められたい。根性が上がったかもしれない。
          # 根性+5%


re_eliz_cup_win_c:
  title: エリザベス女王杯後・魔女の夜の真相？
  lines:
    - %CHARA%はエリザベス女王杯できれいに勝った
    - 本来なら、これほど優れた新星には、かなり長いインタビューがあるはずだ
    -
    - でも%CHARA%は、そういうものにまったく興味がない
    -
    - 約束どおり、会場を出るとすぐ、%CHARA%に付き合って校門へ来た
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見てなさい%CALLNAME%！大魔女に初めて会った感想、一生忘れられないから！」
    - 道中から、ずっと興奮していろんな宣言をしている
    -
    - 結局、二人は校門の街灯の下で止まり、おばあちゃんの到来を黙って待つ
    -
    - ただ、静かに待つ。
    -
    - 午後
    - ……誰も来ない
    -
    - 黄昏
    - ……誰も来ない
    -
    - 薄暮
    - ……誰も来ない
    -
    - 夕方
    - ……
    -
    - 夜になるまで
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 耳が垂れ、帽子の縁が風に上下し、飛ばされそうだ
    -
    - 薄暗い明かりの下、少し先の隅で、%YOU%は覗き出た洋帽子と、そこから投げられた紙を見た気がした——
    - 風に乗って、その紙が突然%YOU%の視界を覆う
    - - acc: 1
        content: 「……！！」
    - 紙を取って手に置くと、きれいな字が書いてある
    -
    - content: 本当にごめんね。おばあちゃん、今日は用事があって行けなくて、入口で待たせてしまったわ
      fontStyle: italic
      align: center
    - content: 『走る魔法』はとてもすごい。でも、それだけではないのかもしれない
      fontStyle: italic
      align: center
    - content: これから先も、『走る魔法』を追い続けてほしい
      fontStyle: italic
      align: center
    - content: あなたの%CALLNAME%と一緒に、進み続けなさい——
      fontStyle: italic
      align: center
    -
    - %CHARA%の焦った視線の下、%YOU%は一字一句、上の言葉を読み上げる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「むむ……！どういう意味よ！！」
    - すぐ焦り出す
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『走る魔法』……そういう意味じゃないの！？？」
    - 頭を下げ、両手の指でこめかみを突く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちがうちがうちがう！！！」
    - 突然頭を上げ、杖を出して%YOU%のほうを指す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全部あなたのせいよ、%CALLNAME%！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたが適当なこと言わなければ……私、おばあちゃんの目の『走る魔法』の真髄、絶対会得できたのに！！！」
    -
    - content: どうか落ち着いて
      fontStyle: italic
      align: center
    - content: %CALLNAME% が傍にいる限り、どんなときでも
      fontStyle: italic
      align: center
    - content: あなたは必ず、自分の
      fontStyle: italic
      align: center
    - content: 『走る魔法』
      fontStyle: italic
      align: center
    -
    - 紙には、%YOU%がまだ読み切れなかった、そんな言葉もあった

re_eliz_cup_lose_c:
  title: エリザベス女王杯後・魔女の夜の自己矛盾
  lines:
    - %CHARA%は結局、キャリアの厚い先輩たちに勝てず、エリザベス女王杯で敗れた
    - レースが終わったあと、%YOU%は出口で黙って%CHARA%を待つ
    -
    - ほどなく、ゆっくり歩き、会場から出てきた %CHARA% と出会う
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - %CHARA%は、遠くから%YOU%を見る
    - %YOU%も、%SEX%の少し茫とした表情を見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「使——い——魔——！！！！！」
    - 突然体が震え、歯を強く食いしばる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！！！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うう……ううううう……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私、もう%CALLNAME%いらない！！！！！」
    - %CHARA%は腕で両目を覆い、走り、%YOU%とすれ違う——
    -
    - %YOU%は、トンネルの先で小さくなっていく%SEX%の背中を見る
    -
    - その日の午後、トレーナー室で待っていた%YOU%は、トレセン側から %CHARA% が自ら契約解除を求めたという通知を受け取る
    -
    - 夜、%SEX%がいちばん現れそうな場所へ気晴らしに行った%YOU%は、トレセン学園の入口で %CHARA% と%SEX%のおばあちゃんを見る
    -
    - acc: 1
      key: be
      content: （もう少し、見ていられたら……）
      lines:
        - %CHARA% の素直な思いを結局叶えられなくても、%YOU%が結局 %CHARA% とこの三年を走り切れなくても
        - この純粋でわがままな姿は、もう少し見ておきたかった
        -
        - そう思い、%YOU%は校門の内側からそっと顔を出し、薄暗い明かりを借りて、少し先のウマ娘の老人と小さな%UMA%を見る
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うう……ううう……」
        - %CHARA%は、ウマ娘の老人の胸にぴったり寄り添っている
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ごめん、おばあちゃん……私……できなかった……」
        - %CHARA%の赤い目尻から、雫がゆっくり流れる
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: おばあちゃん
            - 「大丈夫よ、大丈夫」
        - おばあちゃんは、胸の中の %CHARA% の頭を撫でる
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: おばあちゃん
            - 「もちろん、『走る魔法』はすごい魔法よ」
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: おばあちゃん
            - 「でも大魔法使いとして、『走る魔法』しかできないなんて、つまらなくない？」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも……『走る魔法』すら身につけられないなら……私……どうやって……」
        - %CHARA%は、途切れ途切れに話す
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: おばあちゃん
            - 「一人だけなら、確かに難しいかもしれないわ……」
        - ただ微笑んでいる
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: おばあちゃん
            - 「でも天才%MOHOSHOJO%には、ずっと自分の %CALLNAME% がいるんじゃない？」
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: おばあちゃん
            - 「見て、あなたの %CALLNAME%」
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: おばあちゃん
            - 「今も、傍にいるわよ」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……！！」
        - おばあちゃんのやさしい視線に沿って、%CHARA%は%YOU%のいる隅を見る
        -
        - 突然おばあちゃんの胸から離れ、赤い目のそばの涙を拭う
        - %CHARA%はすぐ横を向き、胸の前で腕を組む
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: おばあちゃん
            - 「ふふ……昔と変わらないわね」
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: おばあちゃん
            - 「では、この子をよろしくお願いします」
        -
        - %CHARA%のおばあちゃんと%YOU%は、簡単に手を振って別れる
        - 傍らの%CHARA%は、ときどきそれを盗み見ている
        -
        - おばあちゃんの姿が見えなくなるまで
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Rainflower★Lotus！！！%CALLNAME%、さっきのこと、全部忘れなさい！！！！！」
        - 走ってきて、杖をまっすぐ%YOU%に向ける
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「天才%MOHOSHOJO%sweepyは、絶対に魔法の真髄を見つけて、一番偉大な大魔法使いになる！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それまで、%CALLNAME%は今みたいに主人のそばにいなさい、分かった！！！」
        -
        - ともかく、%CHARA%はもともとの決定を諦めたらしい
        - 意外と闘志がある様子だ。いいことだろう
    - acc: 2
      content: （たぶん……引き留めても無駄だろう）
      lines:
        - %CHARA%のこんなに素直な思いを、%YOU%は%SEX%のために叶えられなかった
        - 今さら引き留めても、意味はないだろう
        - そう思い、%YOU%は重い足取りで自分のトレーナー室へ戻り、静かに座って、座っている
        -
        - でも、何事も定まってはいないらしい
        -
        - たとえば今、なぜか急に気が変わって、%YOU%のトレーナー室に戻ってきたこの小さな%UMA%
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ふん！」
        -
        - 隅の小さな椅子に座り、壁のほうを向いて強情な様子を作りつつ、ときどき%YOU%を盗み見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……なんでそんな目で見るの？」
        -
        - acc: 1
          content: 「明日の練習の予定……どうする？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やだやだやだ！今はそれ、話したくない！！」
        - 相変わらずその様子だ
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あなたは%CALLNAME%！%CALLNAME%は主人の命令をちゃんと聞くの！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、命令する。今、練習の話はしないで！！」
        -
        - acc: 1
          content: 「じゃあ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……なんでまた、そんな惨めな目で見るの？」
        -
        - acc: 1
          content: 「……明日はちゃんと練習するんだよね？」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……分かった分かった！約束破る人は子犬！」
        - %CHARA%は立ち上がり、全力で%YOU%を外へ押し出し、手際よく鍵をかける
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明日%CALLNAME%が迎えに来なかったら……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%を子犬にするから！！！」
        - 部屋の中から、少し嗚咽の混ざったそんな声が聞こえる
    - acc: 3
      content: （ちがう、最初から一人しか——）
      comment:
        - fontWeight: bold
          fontSize: 0.8rem
          color: red
          content: 【これは「もしも」の世界線の、たちの悪い可能性です！ゲームがそのままエンディングに入ります！】
      lines:
        - 目をこすり、%YOU%はさっき確かに見間違えたと確認する
        - 明かりの下にいたのは、一人のウマ娘の老人だけだった。誰かの到来を、孤独に待っている
        -
        - あの鹿毛の小さな%UMA%は、やはり悲しみに沈んでいて、今このとき校門へ来て、%SEX%のおばあちゃんと会うはずがない
        - ここで%CHARA%と%SEX%のおばあちゃんが話しているのを見るなんて、たぶん、%YOU%の思い過ごしだろう——


be_dream_end:
  title: 夢の終焉
  lines:
    - %CHARA%との別れで%YOU%は少し茫としたが、ほどなく、すべては日常に戻った
    - %YOU%は相変わらずトレセンのトレーナーとして、ウマ%UMA%たちを発掘し、教え、コースで輝かせている
    -
    - その合間に、ときどき道端で、こんな言葉を聞く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただの、魔法も分からない凡人じゃない！なんで私の魔法に意味がないなんて言えるのよ！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全部、邪悪な魔法使いの陰謀よ！私が魔法を捨てれば、自分の魔法で私を倒せると思ってる！！そんなことしない！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「絶対……絶対、闇の魔法の妨害よ！！！じゃなきゃ、私の魔法がこんな……」
    -
    - それは、ずっとあとのことだった。%CHARA%が%YOU%と契約を切ってから、何か月経ったかも分からない
    -
    - トレーニング室を出る道で、%YOU%はグラウンドのベンチに座る%CHARA%を見る
    - 魔法帽はかぶらず、帽子と杖はきちんと傍らに置いてある
    - ずっと俯いていて、ときどき顔を上げて周りを見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ……。あなたね。」
    - ついに、一度顔を上げたとき、立ち止まっていた%YOU%を見る
    - でも、ゆっくり顔を横へ向け、%YOU%を見ようとしない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしたの？あなたも、私を笑いものにしに来たの？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……笑いたいなら、笑えばいい」
    - ただ呟く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうせ、全部嘘、嘘、全部嘘……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたも嘘、私も嘘、みんな嘘、あのなにかも最初から嘘……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……まだそこに立って私を見て、なに？自分の用事ないの？」
    - %CHARA%は%YOU%を一目見る
    -
    - ……確かに、したいことはある
    - acc: 1
      content: 「そんなふうに、思わないで」
    -
    - 「もう、君のトレーナーでも、君の%CALLNAME%でもないかもしれない」
    -
    - 「でも」
    -
    - 「君は、ずっとあの天才魔——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああああああうるさいうるさいうる！さ！い！！！！！！」
    - 言葉を遮り、なぜか突然激昂して、ヒステリックに叫ぶ
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: スイープトウショ？
        - 「あなたが信じたところで私に関係ある！他人に関係ある！！信じたところでなんの意味があるの！！！！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: スイープトウショ？
        - 「まだ%CALLNAME%だ%CALLNAME%だって、この世に%CALLNAME%なんて最初からないでしょ！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: スイープトウ？？
        - 「天……才……あの、なに……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: スイープトウ？？
        - 「あなたこそあのなによ！あなたのパパもママもおじいちゃんもおばあちゃんも弟も妹も兄も姉も、全部そうよ！！！！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: スイープ？？？
        - 「私、私は……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: スイープ？？？
        - 「私……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？？
        - 「ううう……うううううううううう……」
    - %CHARA%の名を持つ鹿毛の小さな%UMA%は、ベンチで丸くなる
    -
    - acc: 1
      content: 「……」
    -
    - ともかく、%YOU%はまだトレーナーで、まだ自分の担当ウマ%UMA%を教えなければならない
    - たぶん、こんな小さな挿話は、明日には忘れるだろう
    -
    - たぶん、だ
    - 人は、前へ進まなければならない。


# エリザベス女王杯出走後のターン終了
# スピード&パワー+5、日常口上変化
we_asphodel:
  title: 新生の Asphodel
  lines:
    - エリザベス女王杯から少し経ったころ、%YOU%は%CHARA%に引っ張られ、一緒に図書館へ来ていた
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これ……ちがう。あれ……もちがう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、%CALLNAME%！あの本、下ろして。」
    - %YOU%に乗ったまま、%CHARA% は高い図書館の棚からフィンランド語の古典本草書を下ろす
    -
    - 受け取った瞬間から、焦ってめくり始める
    - でも、収穫はなさそうだ
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「むむ！読めない、全然読めない！！」
    - 両手の人差し指で、こめかみを揉み続ける
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり……魔法は……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちがうちがうちがう！そんなわけない！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、この図書館の魔法の本、全部持ってきなさい！！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すぐ覚えられる新しい魔法、絶対ある！」
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「あの……」
    - 司書として、%CHARA%の先輩として、傍らの%ZOB_ZOY%がゆっくり話す
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「スイープさん、どうしてそんなに本の魔法を学びたいのですか？」
    -
    - %ZOB_ZOY%がこちらを見る視線は、やはり%CHARA%の注意を引く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～もちろん、私が使える魔法はもう極め尽くしたからよ」
    - 振り返り、わざと自信ありげに答える
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「かわいそうな本から、自分がもともと見向きもしなかった魔法を探すしかない時期になったのよ～」
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「それなら……」
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「スイープさんほどすごいなら、
        - fontWeight: bold
          content: 『自分の魔法を創る』
        - 、ではだめですか？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    -
    - %YOU%は、この思いつきの小さな%UMA%に、また無理矢理トレーニング場へ引き戻される
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おばあちゃんの目の『走る魔法』なんて、どうでもいい」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日から、天才%MOHOSHOJO%sweepyは、自分の魔法を『創る』んだから！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～おばあちゃんは、私のこの『魔法を創る』才能を見て、あの話をしたに決まってる！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見てなさい%CALLNAME%！次のこの魔法、一回しか使わないから！」
    -
    - %CHARA%は帽子をかぶり、トレーニング場のコースに立ち、スタートの姿勢を取る——
    -
    - あの奇跡のような速さは、何度見ても一つの事実を確定させるだけだ：
    - 「これが、『魔法』——」
    -
    - %YOU%を追った魔法でも、他人から学んだ魔法でもない
    - %CHARA%の、「自分の魔法」だ

# シニア級第1週ターン開始
ws_new_year_s:
  title: 初詣
  lines:
    - 時は矢のように過ぎ、三女神は隙を縫う
    - 今日から、%CHARA%は正式にシニア級へ踏み入ったウマ%UMA%になった
    -
    - シニア級のレースに席を占めるのは、必ず千錬百鍛、層を重ねて選ばれた強者たちだ
    - 「これから、厄介な相手はますます増えるだろう——」
    -
    - でも、%CHARA% が勝ちたいと思う限り、%SEX%にはクラシック三冠で名を馳せた選手にも劣らない意志と力がある
    - どんな相手に出会っても、%SEX%のゲート前の独り言がどれだけ人目を集めても
    - コースで勝ちたい%SEX%は、すべてを一掃できる——
    -
    - ……まず、%SEX%が勝ちたいと思わなければならない
    - とにかく、%SEX%に新年をちゃんと過ごさせ、新しい確かな目標を見つけることを第一にしよう
    -
    - クラシック級のときと同じく、 %CHARA% を神社へ連れていく
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なになになに！%CALLNAME%、なんでそんなにお願いに来るのが好きなのよ！」
    - 並んでいるあいだ、%CHARA%はいつものように苛立ち始める
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「主人、神社なんかに来なければ、すぐ新しい独創魔法を研究できたのに！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、まあいいわ。」
    - 少し違う展開らしい
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyは、今度は自分で『願いの魔法』を作っておいたから、%CALLNAME%の願い、一気に叶えてあげる！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Cornflower★WhiteHeather、どんな願いでも、叶いなさい～！！」
    - %CHARA%は杖を掲げ、自信の表情で一度振り、まっすぐ%YOU%を指す
    -
    - acc: 1
      content: 「本当に……どんな願いでも叶うの？」
    - %YOU%は軽く聞く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なに%CALLNAME%！主人の新作魔法を疑うの！！」
    - ふくれっ面で%YOU%を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「願いを大きな声で言えばいいの。他の話は禁止！！！」
    -
    - 「……じゃあ、願うよ——」
    - このあと続けるべきは——
    - acc: 1
      key: select
      content: 「スイープがレースで勝つこと」（全能力+30）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - 突然、微妙な沈黙に落ちる
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Moonwort★Adder's tongue、どんな願いでも、今すぐ、ただちに、消えなさい——！！！！！」
        - %CHARA%は杖を掲げ、とにかく慌てたやり方で一度振り、またまっすぐ%YOU%を指す
        -
        - 願いの魔法の効果は、消える魔法より強かったらしい
        -
        - ずっと嫌だと言っていても、帰ったあと%CHARA%は%YOU%の願いのもと、素直に練習を増やした
        - ただし、練習の前にトレーニング場の端で、悔しそうに長いこと突っ立っていた
    - acc: 2
      content: 「スイープが勉強で伸びること」（スキルPt+200）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - 突然、微妙な沈黙に落ちる
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Moonwort★Adder's tongue、どんな願いでも、今すぐ、ただちに、消えなさい——！！！！！」
        - %CHARA%は杖を掲げ、とにかく慌てたやり方で一度振り、またまっすぐ%YOU%を指す
        -
        - 願いの魔法の効果は、消える魔法より強かったらしい
        - %CHARA%はとても悔しそうに、トレーナー室で%YOU%が%SEX%に渡した『走る魔法改良理論』を読み始める
        - 自分の魔法を改良できることには少し嬉しそうだが、それでもずっと嫌だと言っている
    - acc: 3
      content: 「スイープが元気でいること」（体力+800）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - 突然、微妙な沈黙に落ちる
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Moonwort★Adder's tongue、どんな願いでも、今すぐ、ただちに、消えなさい——！！！！！」
        - %CHARA%は杖を掲げ、とにかく慌てたやり方で一度振り、またまっすぐ%YOU%を指す
        -
        - 願いの魔法の効果は、消える魔法より強かったらしい
        - こうして、偉大な天才%MOHOSHOJO%も、凡人の食事問題に悩み始める
        - 何日も栄養食を食べて泣き言を言っていた%CHARA%は、最後は%YOU%の許しでアイスを食べられた


# シニア級第1週ターン終了時
we_magic_stage:
  title: 魔法の舞台
  lines:
    - 新年が明けたら、%CHARA% と一緒にシニア級のレース計画も立てなければならない
    -
    - 「スイープの魔法はこうこうで……だから、ああしたほうがいい、つまり、こうこう——」
    - 目の前の鹿毛の小さな%UMA%に、%SEX%がシニア級で選べそうなレースを説明しようとする
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「へえ。うん。分かった。なるほど。」
    - 聞いていて、すごく流している感じだ……
    -
    - 「それなら……」
    - %YOU%は慎重に言う
    - 「スイープは、これから魔法競技に出て、『走る魔法』をどう見せるか、考えある……？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……なら主人が、その競技に出ればいいんじゃない？」
    - とてもあっさり答える
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この『安田記念』とか、あの『宝塚記念』とか、秋の『天皇賞』とか、みんな見てるでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私、これに出る。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あとあと！あの『エリザベス女王杯』！%CALLNAME%、主人の出走手続き、忘れるなんて許さないから！！！」
    -
    - 結果、%CHARA%はレース選びでは予想外に積極的だった——
    - もしかすると、ほどなく%SEX%は本当に、そのうちのいくつかで『魔法』を見せ、みんなに何かを証明するのかもしれない


rs_yasu_kin_s:
  title: 安田記念前・前向きな Red Clover
  lines:
    - 安田記念。シニア級のG1マイル。マイル%UMA%の最高の証明の一つ
    - 毎年の安田記念には、さまざまな強者が挑みに来る
    -
    - 今回は多くのシニアの日本ウマ%UMA%だけでなく、香港のトップウマ%UMA%も来る
    - 競争の激しさは、侮れない
    -
    - %CHARA%の誘いどおり、早めに会場の控え室へ着く
    - 結果、%CHARA%は%YOU%より先に控え室にいた
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでそんなに遅いの%CALLNAME%！今度は早めに来いって言ったでしょ！」
    - %YOU%を見るなり、%CHARA%はすぐ叱り始める
    -
    - 「スイープ……今回は秋みたいに……早めに来る必要があったの？」
    - %YOU%は時間を見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もちろん必要よ！早めに来なきゃ、みんな私の魔法を何度も見れないでしょ！」
    - そう答えるだけだった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ。%CALLNAME%！帽子と杖、整えて！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今度は、みんなにちゃんと見せる。天才%MOHOSHOJO%sweepyの独創魔法を！」
    -
    - ほどなく、%YOU%はスタンドへ行き、コースへ下りた鹿毛の小さなウマ%UMA%を遠く見る
    - %CHARA%は予想外に隊列の最後尾にはおらず、番号の順でゲートに入った


re_yasu_kin_win_s:
  title: 安田記念後・わがままな大言壮語
  lines:
    - %CHARA%は、香港のトップウマ%UMA%を含む多くの強者が出た安田記念で、優勝した
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見て見て！天才%MOHOSHOJO%sweepyの魔法は、こういうものよ～！！」
    - 表彰台の%CHARA%は、とても興奮して杖で台下の観客を指し、珍しくちゃんと優勝旗を身につけている
    - それからインタビューで、魔法に関する発言を止めない。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たぶん、『魔法』は、相手によって考えが違う」
    - なぜか、インタビューの合間に、突然新しい話題を始める
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも。言っておく。」
    - さっき、走る話ではなく魔法の話で騒いでいた観客の一部を、杖で指す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それでも、天才%MOHOSHOJO%sweepyが見せた魔法を信じない一部のやつら——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたたちは、『宝塚記念』で」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もっと私だけの、魔法の『奇跡』を目撃するわ。」
    -
    - 小さな%UMA%は、大言壮語で大げさなことを言った
    - でも、この状態と積極性があるなら
    - もしかすると、次のレースで本当に——
    - %YOU%は%SEX%に対して、%SEX%本人より偏執的かもしれない確信を持っている


re_yasu_kin_lose_s:
  title: 安田記念後・わがままに前へ
  lines:
    - 強者の集う安田記念は、やはりそう簡単には勝てなかった
    - %CHARA%は、多くの強者が競う安田記念で、残念ながら敗れた
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「んん……どこがまずかったの！？」
    - 両手の指でこめかみを突きながら、%CHARA%は独り言を言い、%YOU%と一緒に会場を出る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！いいわ。新しく改良した魔法、すぐ効かないのも普通でしょ！」
    - 一気に頭を上げる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次は『宝塚記念』で、あいつら、そんなに運がよくないわよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「絶対見せてやる。天才%MOHOSHOJO%の、魔法の『奇跡』を。」
    -
    - %YOU%を叱ることも、自責や悲しみに沈むこともない
    - 今回負けても、この状態と積極性があるなら
    - もしかすると、次のレースで本当に——
    - %YOU%は%SEX%に対して、%SEX%本人より偏執的かもしれない確信を持っている


rs_takz_kin_s:
  title: 宝塚記念前・確信の Protea
  lines:
    - 宝塚記念。シニア級の重量級中距離G1
    - 牝馬三冠に熱心な選手たちを除き、クラシック三冠に出た選手の多くも、このレースには積極的だ
    -
    - ハートクライ、リンカーン、タップダンスシチー。どれもクラシックのレースで抜きん出た存在だ
    - そのうえ、いちばん期待を集める選手といえば、昨秋に頭角を現した%ZOB_ZOY%——ゼンノロブロイをおいて他にない
    -
    - 外見と完全には釣り合わない精妙な実力は、たぶんこう呼べる——
    - acc: 1
      content: 「ロブロイ学士が、自分の剣を取った」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「学士？剣？……なにそれ！どういうこと！？」
    - 地下通路で、会場の緊張した空気と比べ、困惑した顔で%YOU%の話を聞く%CHARA%は、とても場違いだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだ！%CALLNAME%がそう言うと、魔法を出す気力までなくなりそう！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「出せるかどうかはともかく……つまり」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんな魔法、私の魔法と同列に扱えるわけないでしょ！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とにかく、%CALLNAME%が知っておけばいいのは一つ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どんなやつでも——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyの独創魔法の前では、全部、一掃される。」
    - そう答えるだけだった
    -
    - コースへ行った%CHARA%は、ゲートの前で少し止まる
    - 周りの相手を見てから、少し見下すように奇妙な呪文を唱え、ゆっくりゲートに入る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '状態を得た '
        - content: '[激昂の対決魔法！]'
          title: 絶対勝てると信じている！少なくとも根性は上がった！
          # 全能力+5%、根性追加+10%


re_takz_kin_win_s:
  title: 宝塚記念後・新しい約束
  lines:
    - 電光石火の激しいレースは、あっという間に終わった
    -
    - レースの祝賀の流れが終わったあと、%CHARA%と一緒に場外へ来る
    - 突然、少し先で待つ、洋帽子をかぶったウマ娘の老人を見る——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっ！おばあちゃん！」
    - 目が一気に輝く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～やっぱり、おばあちゃんも天才%MOHOSHOJO%sweepyの独特な魔法に心を動かされて、魔法を使ってでも見に来たのね！」
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「ふふ、やっぱり、この調子ね……」
    - おばあちゃんは、ただ微笑んで%CHARA%を見る
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「……よければ」
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「来週、時間を作っておばあちゃんの家に来てくれる？」
    - それから話題を変え、なぜかそんな頼みを出す
    -
    - %CHARA%と一緒に迷わずおばあちゃんに承諾し、ほどなく小さな%UMA%と一緒にトレセン学園へ戻った


re_takz_kin_lose_s:
  title: 宝塚記念後・新しい期待
  lines:
    - 電光石火の激しいレースは、あっという間に終わった
    -
    - レースの祝賀の流れが終わったあと、%CHARA%と一緒に場外へ来る
    - 突然、少し先で待つ、洋帽子をかぶったウマ娘の老人を見る——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっ！おばあちゃん！」
    - 目が一気に輝く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～挨拶もなしに急に天才%MOHOSHOJO%sweepyを探しに来るなんて、やっぱり実力を認めたんでしょ！」
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「ふふ、やっぱり、この調子ね……」
    - おばあちゃんは、ただ微笑んで%CHARA%を見る
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「たぶん、ずっとこのままでも、天才%MOHOSHOJO%は自分の道を見つけるでしょうね」
    - なぜか、何か呟いている
    -
    - おばあちゃんと、まったく古くない昔話を少ししたあと、%CHARA%と一緒にトレセン学園へ戻った

# 宝塚記念に勝った場合、宝塚記念の対応ターンの翌週開始
ws_magic_dream_w:
  title: 魔法の夢
  lines:
    - 夏の朝の陽は暑くなく、体に当たっても、意外と温かいだけだ
    -
    - %CHARA%に急かされ、朝早くからおばあちゃんの家へ向かう
    - ほどなく、%YOU%は七色の花海に浮かぶ小屋を見る
    - ウマ娘の老人が、花海の中に立っている
    - 花茶の香りは、花の芬芳と混ざっても、百メートル先から匂う
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「ふふ、やっぱり来たわね……」
    - ほとんど飛びついていく%CHARA%を見て、おばあちゃんは浅く笑う
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「今日呼んだのは、大事な話があるからよ」
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「たぶん、そんなに胸が躍る話ではないけれど、大事な話よ」
    -
    - おばあちゃんは空を一度見上げ、それから頭を下げて%CHARA%を見て、続ける
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「……これまで私が言ってきた魔法のこと」
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「……実は、おばあちゃんはずっとあなたを騙していたの」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……騙す？なにを？」
    - 小さな%UMA%が困惑した顔をする
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「レースのあと、わざわざここに来いとか……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっ！分かった！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おばあちゃんは、自分がただの大%MAJO%じゃなくて、世界中の魔法の創始者だって言うんでしょ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～知ってたわ——」
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「ちがう、言いたいのは……」
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「魔法は」
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「ずっと、存在しなかった。」
    -
    - おばあちゃんは、軽やかに %CHARA% の頭の帽子を外す
    -
    - ぜんまいを取り出し、帽子の小さな隙間に差し込み、回す
    -
    - 帽子の頂が外される
    - 中にあるのは——
    - ゆっくり回る機械の歯車
    - 精密なセンサー
    - それに連動する伝動軸
    - すべての機械構造が、一目で分かる。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    - 瞳が無意識に縮み、体は感電したようにその場で動かない
    -
    - 時間は、一瞬止まったようだった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだやだ！魔法がないなんて、認めない！！！」
    - 大きな反応を爆発させ、%CHARA%は必死に何かを否定する
    -
    - それから顔を横へ向け、見下した表情を作る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！魔法がないなんて言うおばあちゃんも、結局ただの子どもじゃない！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そもそも、魔法がないなら——」
    # setToBottom、continue
    # ws_md_w_1


# 幼いころの記憶
ws_md_w_1:
  sync: true
  lines:
    - content:
        - color: #対応キャラの色
          fontWeight: bold
          content: 父親
        - fontStyle: italic
          content: 「スイープ……この英語の童話……興味ある……？」
    - fontStyle: italic
      content: 父親は、慎重に聞く
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「やだ。」
    - fontStyle: italic
      content: 結果、当然のように余地のない返事が返ってきた
    -
    - content:
        - color: #対応キャラの色
          fontWeight: bold
          content: 母親
        - fontStyle: italic
          content: 「スイープ、このぬいぐるみ、欲しい？」
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……」
    - fontStyle: italic
      content: ただ立ったまま動かない
    -
    - content:
        - color: #対応キャラの色
          fontWeight: bold
          content: おばあちゃん
        - fontStyle: italic
          content: 「ふふ……子どもは、やっぱりいつも元気ね……」
    - content:
        - color: #対応キャラの色
          fontWeight: bold
          content: おばあちゃん
        - fontStyle: italic
          content: 「おばあちゃんのほうにも、いいものを見せたいの」
    -
    - fontStyle: italic
      content: おばあちゃんはわざと神秘そうに、%CHARA%の少し苛立った目の中、袖口へ手を入れる
    -
    - fontStyle: italic
      content: 袖口から、ただ一引き——
    -
    - fontStyle: italic
      content: 目の前に赫然と現れたのは、鮮やかな薔薇、たくさん、たくさん
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……！！！」
    - fontStyle: italic
      content: 目が一気に明るくなる
    # setToBottom、continue
    # ws_md_w_1_end


ws_md_w_1_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「おばあちゃんが目の前で花を出した、あのときのめまいみたいな興奮……」
  - # ws_md_w_2


  # 茨の記憶
ws_md_w_2:
  sync: true
  lines:
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……ねえ。%CALLNAME%。」
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「おんぶ。」
    - fontStyle: italic
      content: %CHARA%は、先に何メートルも続く茨の茂みを指して、%YOU%に%SEX%をおんぶして渡れ、と示す
    -
    - fontStyle: italic
      content: 茨は隙間もなく、縦横に絡んだ枝が陽の光の下でまだらな影を落とし、鋭い棘が番人みたいに並んでいる
    - fontStyle: italic
      content: こんな危ない道、%CHARA%をおんぶして、どころか、一人でも……
    - fontStyle: italic
      content: 「……別の道、行かない？」
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「やだ。」
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「ここから行くの。」
    - fontStyle: italic
      content: %CHARA%は迷わず答える。相談の余地はない、わがままな口調だ
    -
    - fontStyle: italic
      content: こうして%YOU%は、小さな%UMA%をおんぶしたまま、びっしりの茨道の前に立つしかなかった
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「行って。」
    - fontStyle: italic
      content: 小さな足が、軽く蹴る力を感じる
    -
    - fontStyle: italic
      content: 歯を食いしばって、%YOU%は帰りに手足を包帯だらけにする自分を想像しながら、足を踏み出した——
    # setToBottom、continue
    # ws_md_w_2_end


ws_md_w_2_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ずっと%CALLNAME%が私のああだこうだに従ってきたこと……」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「どうやって分かるのよ……！！」
  - %CHARA%は怒って足を踏み鳴らす
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「やだやだ！絶対認めない！！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「おばあちゃんが魔法はないって言うなら……」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「天才%MOHOSHOJO%sweepyの私は……」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「自分で——」
  # ws_md_w_3


# 宣言の記憶
ws_md_w_3:
  sync: true
  lines:
    - content:
        - color: %COLOR_47%
          fontWeight: bold
          content: %ZOB_ZOY%
        - fontStyle: italic
          content: 「スイープさんほどすごいなら、
        - fontWeight: bold
          fontStyle: italic
          content: 『自分の魔法を創る』
        - fontStyle: italic
          content: 、ではだめですか？」
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……！」
    -
    - fontStyle: italic
      content: %YOU%は、この思いつきの小さな%UMA%に、また無理矢理トレーニング場へ引き戻される
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「おばあちゃんの目の『走る魔法』なんて、どうでもいい」
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「今日から、天才%MOHOSHOJO%sweepyは、自分の魔法を『創る』んだから！」
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「ふんふん～おばあちゃんは、私のこの『魔法を創る』才能を見て、あの話をしたに決まってる！」
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「見てなさい%CALLNAME%！次のこの魔法、一回しか使わないから！」
    -
    - fontStyle: italic
      content: %CHARA%は帽子をかぶり、トレーニング場のコースに立ち、スタートの姿勢を取る——
    -
    - fontStyle: italic
      content: あの奇跡のような速さは、何度見ても一つの事実を確定させるだけだ：
    - fontStyle: italic
      content: 「これが、『魔法』——」
    -
    - fontStyle: italic
      content: %YOU%を追った魔法でも、他人から学んだ魔法でもない
    - fontStyle: italic
      content: %CHARA%の、「自分の魔法」だ
  # setToBottom、continue
  # ws_md_w_3_end


ws_md_w_3_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「『魔法を創る』！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふんふん～これで、おばあちゃんはもう魔法がないなんて言えない！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「天才%MOHOSHOJO%sweepyも、偉大な大魔法使いとして、みんなに何年も何年も褒められるんだから！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ねえ、%CALLNAME%。」
  - %CHARA% は、何かを分かって微笑むおばあちゃんの手から、元どおりの帽子を受け取る
  - それから、ゆっくり、きちんと頭にかぶる
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%なら、主人がどんな決断をしても、ずっと付いてくるんでしょ？」
  - 目の前の小さなウマ%UMA%は、%YOU%に信頼の目を向ける。その中には、魔法があるみたいだ
  -
  - acc: 1
    content: 「もちろん」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふんふん、さすが私の%CALLNAME%！」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一年でも、十年でも、百年でも……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「いつか、大%MAJO%の姿でおばあちゃんのそばに戻って、おばあちゃんもびっくりさせるんだから！」
  - acc: 2
    content: 「したくても、今さら断れないよ」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「む！その態度なに%CALLNAME%～！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「次から、主人に不満があっても言っちゃだめ、分かった！！」
  -
  - そのあと、何もなかったみたいにおばあちゃんと一緒に穏やかにお茶を飲む
  - %CHARA%は、童話が聞きたいとせがみ、おばあちゃんも笑って一組、%SEX%に話してくれた
  -
  - ほどなく、名残惜しくおばあちゃんと別れる
  # 全能力+5、PT+100


# シニア級宝塚記念に負けた、または未出走の場合、宝塚記念の対応ターンの翌週開始
ws_magic_dream_l:
  title: 魔法の夢
  lines:
    - 夏の朝の陽は暑くなく、体に当たっても、意外と温かいだけだ
    - こんな日、%YOU%は%CHARA%と日常の練習を続けているだけだった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早く早く！すぐ練習終わらせなきゃ、魔法の研究できないでしょ！！」
    -
    - 突然、魔法帽に何か問題が出たようだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    -
    - 耳の部分が、きしきし音を立てて回り続ける
    - 最後に歪み、奇妙な角度へ変形する——
    -
    - %CHARA%によれば、これはおばあちゃんにしか治せない『魔法の乱れ』だ
    -
    - おばあちゃんに電話したあと、%CHARA%に導かれて、おばあちゃんの家へ来る
    - ウマ娘の老人が、花海の中に立っている
    - 花茶の香りは、花の芬芳と混ざっても、百メートル先から匂う
    -
    - でも、求めどおり、おばあちゃんは%CHARA%にも現場へ来てほしくない
    - そこで%CHARA%を遠くで待たせ、%YOU%は一人で帽子を持って%CHARA%のおばあちゃんに会う
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「そう……確かに、ときどきこういうこともあるわ」
    - なぜか、事情を知ったおばあちゃんは、予想外に少し真剣だ
    -
    - ウマ娘の老人は家へ入り、道具箱を運び出し、中からぜんまいを取り出す
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「これからのことは、あの子には言わないでください」
    -
    - おばあちゃんはそのぜんまいを帽子の小さな隙間に差し込み、回す
    -
    - 帽子の頂が外され、中にあるのは
    - ゆっくり回る機械の歯車
    - 精密なセンサー
    - それに連動する伝動軸
    - 一目で分かる。
    -
    - おばあちゃんは道具箱からさらに道具を出し、一心に、かんかんと分解し、また組み立てる
    - 集中した様子は、周りをまったく気にしていないようだ
    - ほどなく、その帽子は元どおりになり、一度も開いたことがないみたいだ
    -
    - 直した帽子を持って花海を出ると、出口で慌てて引っ込む一対のウマ耳が見える
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……%CALLNAME%。」
    - %YOU%を見た瞬間、視線をどこかへ逸らしたくなる様子だ
    - 帽子を%SEX%に渡すと、慌てて受け取る
    -
    - 道中もいつもとちがって、ほとんど%YOU%の顔を正面から見られない
    - たぶん、%CHARA% はもう……
    -
    - 沈黙のまま、トレセン学園へ戻る
    -
    - acc: 1
      content: 「……ごめん」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……？なんで謝るの……？」
    - 予想外に、穏やかに応える
    -
    - acc: 1
      content: 「魔法は、本当には存在しない……」
    -
    - いつもなら、この言葉を聞いた%CHARA%は、%YOU%をひどく叱るはずだ
    - でも、今の%CHARA%は、そうしない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - ただ黙っている
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「バカ%CALLNAME%。」
    - 突然、そう言う
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「魔法は、あるに決まってるでしょ。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「過去も、今も、ずっとずっと先も」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「魔法は、ずっと本当に存在してる。」
    # setToBottom、continue
    # ws_md_w_1
    # ws_md_l


ws_md_l:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あのときみたいに。」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「それに、もし魔法が本当にないなら……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「この帽子をかぶったときの安心感……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%が私のわけの分からない八つ当たりに何も言わないときの、胸の温かさ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「どうやって分かるのよ！！」
  - %CHARA%は、怒って足を踏み鳴らす
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「聞きなさい！%CALLNAME%！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「これから先、絶対に『魔法はない』なんて言わないで！」
  - 杖を出し、まっすぐ%YOU%を指す
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「おばあちゃんの魔法は、世界で一番偉大な魔法よ！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私が『魔法を創る』を覚えても、それは変わらない！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも、おばあちゃんが自分の魔法をみんなに見せたくないなら……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふんふん～天才%MOHOSHOJO%sweepyの私だけが、『自分の魔法』でみんなに、『魔法はある』って教えられるんだから！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「そのとき、おばあちゃん、世界で一番偉大な大魔法使いだと思われる私を羨むかもしれないわね！」
  -
  - そのあと、%CHARA%と学園へ戻り、いつもの練習計画に戻る
  - ただ、トゥインクル・シリーズの貴重な毎日を、続けている——
  # 全能力+5、PT+100

ws_summer_start_s:
  title: 夏合宿前・同じ厄介ごと
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい、はい！ストップ——」
    -
    - あっという間に、また新しい年の夏合宿の日になった
    - %CHARA%が十分満足して夏合宿を始められるよう、できるだけ%SEX%の要求を満たす
    - 今の%CHARA%は、なぜかまた%YOU%の背中で軽く脚を蹴っている
    -
    - 明らかに遅れそうだが、遅れは短くしたい——
    - %YOU%はできるだけ早く%CHARA%をおんぶして、夏合宿の現場へ走る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「聞きなさい！最後は敗者になる魔法使いたち！」
    - %YOU%の背中から下りるなり、自信たっぷりに目の前の全員へ杖を振り、大きな声で言う
    - 夏合宿に出ている%UMA%たちは顔を見合わせ、ただ困惑して%CHARA%に瞬きする
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたたちがどんなめちゃくちゃな手品を使おうと、自分がいいと思ってる魔法を使おうと」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私！天才%MOHOSHOJO%sweepyは、これからの魔法競技で、絶対——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん——んんん——なんでこんなこと——！！！だめだめだめ～まだ言い終わってないのに～～～！！！」
    - とにかく、普通の秩序を乱さないよう、%YOU%は急いで%SEX%の口を塞ぎ、%CHARA%を自分のトレーニング場へ押し出した……


rs_tenn_sho_s:
  title: 天皇賞（秋）・無言の Arborvitae
  lines:
    - 天皇賞（秋）。強者の集う中距離G1。多くのシニア級選手が争う秋のレース
    - 同時に、秋のシニアウマ%UMA%三冠の第一冠でもある
    -
    - こんなレースでは、%ZOB_ZOY%、ハートクライ、ダンスインザムードといった知名の強者を除き
    - 実力を隠したウマ%UMA%たちも、この優勝の栄光を狙っている
    -
    - これほどの圧力の前で——
    - 「まだ、スイープのために何かしてあげるべきかな？」
    - %SEX%と一緒に早めに着いていても、%YOU%はまだ%CHARA%のことを心配している
    -
    - 「帽子と杖、先に預かろうか？」
    -
    - 「——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああうるさいうるさいうるさい！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「EveningPrimrose★Phlox、早く黙りなさい！」
    - 早めに着いたのに、準備室でずっと突っ立っていた%CHARA%が突然杖を振り、%YOU%を指す
    -
    - 「あ……！」
    - なぜか本当に一時言葉が出ず、魔法をかけられたみたいに話せない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～これで、話せなくなったでしょ～天才%MOHOSHOJO%sweepyの魔法、やっぱり役に立つ！」
    - 一気に自慢げな笑顔になる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「聞きなさい%CALLNAME%！なんでそんなに焦るか、私には分からないけど」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、天才%MOHOSHOJO%sweepyは、こんな小さな魔法の試練で怖がったりしない！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「バカ%CALLNAME%、ちゃんと見てればいいの。『魔法とは何か』を見せてあげるから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それから、ふんふん～大魔法使いsweepyを褒める人たちの前で、どんな顔するか、考えておきなさいよ～！」
    -
    - 控え室で準備を終えた%CHARA%は、コースへ下りたあとずっと隊列の最後尾にいる
    - 他のウマ%UMA%が入ったあと、%SEX%はまた観客へ杖を振って何か宣言し、それからゆっくりゲートに入った


re_tenn_sho_win_s:
  title: 天皇賞（秋）後・前へ進む魔法
  lines:
    - %CHARA%は、%SEX%が言ったとおりきれいに天皇賞（秋）を勝った
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見て見て！これが『魔法』の力よ！」
    - 優勝旗をきちんと身につけても、表彰台でそう騒いでいる
    -
    - そのあと、いつものように記者会見で「魔法」の感触を吹聴する
    - 騒がしい記者たちに遠慮なく怒る
    - 一つ一つ、レース後の流れを全部終える
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%、主人の今日の出来、どうだった？」
    - 並んで帰り道を歩き、期待の目で%YOU%の返事を待つ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「先に言っとく！主人が競技に勝ったんだから、絶～対に叱っちゃだめよ！」
    -
    - こんな頼みに対して、返すべきは——
    - acc: 1
      content: 「すごくよかった」
      lines:
        - 「このあと、スイーツが食べたくても、好きなだけ食べていいだろう——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……なに！好きなだけ、って、なんか『終わり』みたいな言い方しないで！」
        - %YOU%の答えに少し不機嫌そうで、歩くのを止める
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私の%CALLNAME%として、その態度は許さない！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だって、このあと……もっと大事な『魔法』を出すんだから」
        - %YOU%と目が合う
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%！命令する。今回主人が勝っても」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「この先も、もっとちゃんと主人を見てなさい！」
        - %CHARA%の、どこか『魔法』のある目は、ただしっかりと%YOU%を見ている
    -
    - 次のレース、「エリザベス女王杯」
    - シニア級の今、再びこのレースに出たら、何が起きるだろう——
    - この先がどうなっても、%YOU%はただ『信じる』つもりだ


re_tenn_sho_lose_s:
  title: 天皇賞（秋）後・約束の魔法
  lines:
    - %CHARA%は、とても残念ながら天皇賞（秋）で敗れた
    - 敗者としてレース終了の流れを終え、%YOU%と%CHARA%はただ帰り道を歩く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ～%CALLNAME%、主人の今日の出来、どうだった？」
    - ただ静かに傍らを歩き、期待の目で%YOU%の返事を待つ
    -
    - いつもなら、慰めればいい
    - acc: 1
      content: 「スイープ、今日の出来はもうすごくよかった」
      lines:
        - 慰めを聞くと、%CHARA%の耳がすぐ立つ
        -
        - でも、いいことだけ言うのは、甘やかしすぎだ
        - acc: 1
          content: 「でも、%CALLNAME%はもう一つ言うことがある」
          lines:
            - %YOU%は付け加える
            - 「今回負けたから、次のレースのため、スイーツは少し控えよう。」
            -
            - %CHARA%の立った耳が、少し垂れる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「む～！主人が慰めを求めたのに、なんでそんな話になるの？？」
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ふん！いいわ！%CALLNAME%の注意なら、主人、一応聞いておく！」
            -
            - %CHARA%は止まり、杖を出して、勝手に振り始める
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「Boxwood★Fern、欲望、消えなさい！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「よし！これで、主人は絶～対にスイーツを食べすぎない！」
            -
            - それから、鹿毛の小さな%UMA%は、紫の瞳で%YOU%と目を合わせる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「代わりに……次は、『あの』レースで、%CALLNAME%はちゃんと見てなさい！」
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「%CALLNAME%は、魔法を出して、スパートして、最初にゴールする画面を」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「一つ一つ、全部頭に覚えなさい。」
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「それでこそ、主人が『スイーツ』を諦めた甲斐がある！」
    -
    - なぜか、負けたのに空気は意外と軽い
    - でも軽い空気のなかで、%CHARA%のどこか『魔法』のある目は、いつものようにしっかりしている
    - 次のレースがどうなっても、%YOU%はただ『信じる』つもりだ


rs_eliz_cup_s:
  title: エリザベス女王杯・奇跡の Stargazer Lily
  lines:
    - 気づかないうちに、『魔女の夜』からもうすぐ一年になる
    - %CHARA%は、すでにシニア級でたくさんのレースを経験した
    - 再びこの『シニアの象徴』を迎えて、いったいどうなるだろう
    -
    - どんな準備をしても、この瞬間に余計な言葉はいらない
    - acc: 1
      content: 「創れ。『自分の魔法』を。」
    - 地下通路で、%CHARA%にそう言うだけだった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……なんで急にそんな煽情的なの！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さっきまで、主人をもっと早くゲートに入れろって叱ってたでしょ？？！」
    - ともかく、少し不機嫌な%CHARA%と簡単に別れ、スタンドへ行く
    -
    - パドックをゆっくり歩く%CHARA%は、ときどき観客を見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！おばあちゃん！？」
    - %CHARA%が突然何か叫び、視線が明らかに一点へ集中する
    -
    - 少し先の別のスタンドに、ウマ娘の老人がただ微笑んで立っている
    - %CHARA%の視線に気づいたらしく、軽く手を振る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ふん！」
    - おばあちゃんが手を振った瞬間、すぐ顔を横へ向ける
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう、なにが大魔法使いよ！自分が魔法を少し多く使えるだけじゃない！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それで、天才%MOHOSHOJO%sweepyに隠れて覗くなんて！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「残念ね、そんな小細工だけなら——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんながこれから知る魔法の創始者は、天才%MOHOSHOJO%sweepyだけになるかもね～」
    -
    - %CHARA%は振り返り、杖を出し、自信の笑顔のまま、まっすぐ%YOU%を指す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%。」
    -
    - それから、ウマ娘の老人
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おばあちゃん。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それから、ここにいる全員。」
    - 杖で、場にいる観客を撫でるように指す
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全員、見てなさい。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次のこの魔法は、絶対絶対——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「骨の髄まで忘れさせない。」
    -
    - すべての視線の下で呟く%CHARA%は、隊列の最後尾からゆっくりゲートに入る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - '状態を得た '
        - content: '[信じる奇跡魔法]'
          title: 創り出した「奇跡」こそ、魔法
        # 全能力+20%


re_eliz_cup_win_s:
  title: エリザベス女王杯後・奇跡と今
  lines:
    - 本当に『魔法』だったのか、『奇跡』だったのか。ともかく、%CHARA%はエリザベス女王杯を勝った
    - どれだけ疑問の声があっても、この疑う余地のない走りの前では、驚きの称賛しか残せない
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「ふふ……やっぱり、天才%MOHOSHOJO%は、なんでもできるのね……」
    - 遠くのウマ娘の老人は、微笑んでこちらを見て頷き、何か独り言を言う
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふ……ふ……は……やっぱり……やっぱりこう……」
    - レースが終わったばかりで、コースで息を整えながら、%CHARA%は周りの歓声を聞いている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『私の魔法』……当然、あなたたち全員に分からせる。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『魔法』の価値。『魔法』の存在。私が……『大魔法使い』になる資格があるって証明する。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%！……主人の今日の出来、どうだった？」
    - あまり休まず、%CHARA%は%YOU%を見るとすぐ、すでに場外へ下りていた%YOU%のところへ走る
    - 紫の瞳で、そのまま%YOU%の目を見て、%YOU%の返事を待つ
    -
    - acc: 1
      content: （考える。今度は、どう答えるべきか——）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふん！言わなくていい！主人、もう分かってる！」
        - まだ言葉を練っている%YOU%の唇を見て、%CHARA%は%YOU%の思考を遮るだけだった
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だって、%CALLNAME%の褒め言葉なんて、一日中あれだけなんだから！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それなら……主人が戻ったら……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「忘れないで！主人にスイーツ、買ってきて！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「じゃないと——じゃないと主人は——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「罰として%CALLNAME%に、主人が買ったスイーツを食べさせる！べーだ！」
        - 突然%YOU%に変な顔をしたあと、%CHARA%は振り返って去っていく
    -
    - そのあと、%CHARA%はちゃんとレース後の流れを終え、%YOU%と一緒に学園へ戻った
    - ただ一緒に、トゥインクル・シリーズの貴重な毎日を続けている——


re_eliz_cup_lose_s:
  title: エリザベス女王杯後・一瞬一瞬の奇跡
  lines:
    - これほど努力し、準備しても
    - %CHARA%は、とても残念ながらシニア級のエリザベス女王杯で敗れた
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おばあちゃん！」
    - レースが終わると、%CHARA%は場外へ下りていたウマ娘の老人のそばへ走るだけだった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！今日の出来……どうだった？」
    - おばあちゃんにそう聞き、期待して見る
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「ふふ……天才%MOHOSHOJO%の出来は、どんなときでも、もちろん一番よ」
    - 静かに、微笑んで応える
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも……私、レース負けた……」
    - 耳が少し垂れる。少し落胆した様子だが、それ以上の大きな動作はない
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「今回の競技は、負けたのかもしれない……」
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「でも、天才%MOHOSHOJO%の目標は、きっとそれだけじゃないでしょう？」
    - ウマ娘の老人は、ただ微笑んで目の前の小さな%UMA%を見て、もう何も言わない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ふん！聞くまでもない！」
    - 突然顔を横へ向け、曖昧に一度目を閉じる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyは、ここで止まらないんだから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おばあちゃん、私が『大魔法使い』になるまで、ずっと見てなきゃだめ！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%！」
    - 傍らの%YOU%を振り返る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さっきの出来がどうでも……あるいは、あなたが『ひどい』と思ってても……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「主人を、元気づけなさい！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたは私の%CALLNAME%。私が世界一の『大魔法使い』になるまで、どこにも行っちゃだめ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この先も、考え尽くして、私の調子をいちばんよくして！聞こえた！！」
    -
    - レースには負けたが、%CHARA%の魔法はそれで散らなかった。
    - ちゃんとレース後の流れを終え、%YOU%と一緒に学園へ戻る
    - ただ一緒に、トゥインクル・シリーズの貴重な毎日を続けている——

rs_arim_kin_s:
  title: 有馬記念前・最後の魔法？
  lines:
    - 有馬記念。日本中の注目の頂点にある、シニア級の長距離G1
    - こんなに注目される、%CHARA%が夢に見そうなレースで——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだやだ！！！いつ長距離に出走登録したのよ！！！」
    - 中山競馬場のゲートのそばで、珍しくトレーナーと%UMA%が一緒に姿を見せる場面になった
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: スタッフ
        - 「スイープさん、これ以上ゲートに入らないと、他のウマ%UMA%に影響します！」
    - スタッフは首をかしげ、少し先の小柄な鹿毛のウマ%UMA%を暗示しているらしい
    -
    - 「天才%MOHOSHOJO%sweepyなら、急な出場でも全然問題ないでしょ」
    - 続けて%CHARA%を説得する
    - 「それに、みんなに『魔法がある』って知ってほしいなら——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    - やっぱり、この手が効く。耳がぴんと立つ
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～%CALLNAME%も、ときどき頼りになるわね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それなら、大魔法使いとして、天才%MOHOSHOJO%、sweepyの私は、みんなに『自分の魔法』を見せる必要があるわ！」
    -
    - %CHARA%は、全場の観客の視線の中でゲートに入った


# 好感+30、やる気+1、スキルPt+50
ws_christmas_s:
  title: 天才サンタクロース
  lines:
    - クリスマスイブに、%CHARA%が突然%YOU%のトレーナー室へ駆け込んでくる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%、ついてきて！」
    -
    - acc: 1
      content: 「プレゼントをもらいに行くの？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なに言ってるの%CALLNAME%。あれよ、もちろんあれ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「クリスマスイブといえば、サンタクロースでしょ！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっと、サンタクロースは『正体不明』の存在だった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyとして、この日にサンタクロースを見つけるに決まってる！」
    -
    - クリスマスイブの外出用の物資をかろうじて持ったところで、%YOU%は%CHARA%に学園の外まで引っ張られる
    -
    - 十二月の後半なのに、大雪が舞う日ではなかった
    - 白雪は積もり、木陰は重なり、人の海は広がり、街灯は点々とある
    -
    - こんな大事な日にやり方を変えて、外を歩くのも悪くない
    - なぜか、そんな考えが浮かぶ
    -
    - でも……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyは断言する！あなたたちの家に、絶対サンタクロースが——！」
    - そう言い、主人の許可を得た%SEX%は、すぐ他人の家へ踏み込んでいく……
    -
    - acc: 1
      content: 「ああ……」
    - 他人の家に入り込んでうろつき、初対面の人と自然に話し、ハロウィンのようにおねだりしてクリスマスケーキを求める%CHARA%を見て
    - %YOU%はこめかみを揉みたくなる衝動を覚える
    -
    - 「大変失礼しました……」
    -
    - 「あの……よければ、お詫びとしてこれを……」
    - 邪魔された相手は嬉しそうだが、礼儀として、帰る際に早めに用意していた贈り物を家の主人へ渡す
    -
    - 勝手に道案内する小さな魔女を見て
    - クリスマスなのかハロウィンなのかはもうどうでもいい。とにかくちゃんと過ごせばいい……
    -
    - そのあと、%CHARA%は執拗にいろんな場所へ行ってサンタクロースを探し、当然のように何軒も迷惑をかけた
    -
    - 他人に実害はなかったのかもしれない
    - でも%YOU%は、行き先の分からない目眩を何度も感じた……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もうもうもう！たかがサンタクロースが、なんで見つからないのよ！！」
    - 長く歩いても、欲しい答えは見つからない
    -
    - %CHARA%にとっても%YOU%にとっても、このままではたぶんよくない……
    - こめかみを揉んで考える
    - 「実は……見つからないんじゃなくて……」
    -
    - 「だって……」
    -
    - 「僕も、サンタクロースの一人、かもしれない？？」
    -
    - どんな気持ちでその言葉を出したのか
    - でもこれまで無数の贈り物を配ってきた以上、ある程度の検証にはなる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……なに？あなた？%CALLNAME%が？」
    - 一時、困惑と驚きがある
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ああ、そういうこと。結局、サンタクロースってこういうやつだったのね」
    - それからすぐ、侮った顔をする
    -
    - そんなに露骨に、このサンタクロースを嫌がらなくても……
    - 「だって、サンタクロースはクリスマスイブに人へ贈り物を配る存在で……」
    - 「それに、聞いた話では、最初は一人だけだったけど」
    - 「あとで団体になって、新しいメンバーが増え続けて……」
    - 「僕は、たぶん新メンバーだよ」
    - 自称のメンバーもメンバーだ。とにかく問題はない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なにそれ！サンタクロースがずっとそばにいて、しかも私の%CALLNAME%だなんて、つまんない！！」
    - がっかりした様子だ
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……待って、サンタクロースが私の%CALLNAME%……私はサンタクロースの主人……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまり——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もしかして、私もサンタクロースになれる！？？」
    - 目が突然きらきら光る
    -
    - どうやってそこまで連想したのか……
    - acc: 1
      content: 「ちょっと若すぎない……？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうでもいい！%CALLNAME%、それがどういう意味か分かってる！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまり、天才%MOHOSHOJO%sweepyは、クリスマスイブになったら『クリスマス魔法』を出して、万人に崇められるサンタクロースに変身できるってことよ！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほらほら！早く一緒に贈り物配りに行くわよ！サンタクロース二号！！！」
    -
    - わざわざ二号と強調しなくても……
    -
    - ともかくそのあと、一緒にたくさんの人へ贈り物を配り、たくさんの感謝を受け取った
    - 傍らの小さな%UMA%は、とても嬉しそうだった


# エンディング。3つのG1に勝っていない場合（2G1以下）
ending_majo_journey:
  title: %MAJO%の旅
  lines:
    - %CHARA%とトゥインクル・シリーズで戦った三年は、あっという間に過ぎた
    - この三年、二人はたくさんのことを一緒に経験したみたいだ
    - 微妙な契約から始まり、本物のウマ%UMA%になる旅へ進み
    - 成長し、相手と出会い、強者に挑み、さまざまな奇妙な出来事を経験した
    - それどころか、とんでもないことを知った気さえする——
    -
    - そのあと、走り続け、走り続け……
    - 最後に、またどれだけ経ったか分からないころ、%CHARA%はやっと立ち止まり、平凡でまったく平凡ではない引退式を終えた。
    -
    - そのあと——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ。%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ついてきて。」
    - 引退後のある日、突然トレーナー室へ飛び込み、当たり前みたいな口調でよく分からない命令を出す
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どこ？そんなに聞かないで！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「バカ%CALLNAME%！天才%MOHOSHOJO%sweepyが行くところ、%CALLNAME%もついてくるに決まってるでしょ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行き先が決まってないわけじゃないわよ！」
    -
    - この当たり前の態度は、時間がずっと前に戻ったみたいで、%YOU%と%CHARA%が出会ったばかりのようだ……
    - でもいわゆる「主人」の命令なら、暇なときに小さく気ままに出かけるくらい、悪くない
    - こうして、ときどき%CHARA%と地下鉄に乗り、途切れ途切れに、日本のあちこちへ行く——
    -
    - ずっと前のある週末——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なになに？このぬいぐるみの髪……有名な%UMA%の髪でできてる……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……やだやだ？！%CALLNAME%、早く次のところ行く！！」
    -
    - ずっと前の、別の週末——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私の%CALLNAME%が、これも分からないなんて！ここはもちろん、伝説の『飛ぶ島の国』よ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『飛ぶ島なんてない』……？そんなこと、どうでもいいわ！」
    -
    - そのあと、珍しく空いた週末——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ここに来たら、%CALLNAME%でも凡人でも、本当のことしか言っちゃだめ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「主人が気が変わるまで、それがここの決まり！」
    -
    - ……そして、奇妙な出会い
    - color: %COLOR_135%
      content:
        - fontWeight: bold
          content: %STAY%
        - 「ああ……あなたたちも……ここに来たのですね……？」
    - color: %COLOR_135%
      content:
        - fontWeight: bold
          content: %STAY%
        - 「ここは、まだ日本の国内ですが、景色もなかなか……」
    - 実際は、景色のために来たわけではない……
    -
    - こうして、これからの日々、ときどき時間を作っては、%CHARA%に変な場所へ連れ回される。仕事のためでも、名利のためでもない
    - ただゆっくり、%SEX%の言葉では——「旅行」
    - あえて目的を言うなら、ただ——「魔法」のため
    -
    - さまざまな幻想に染まった、意味のない、家のすぐそばのこの旅は、将来のいつか記録されるかもしれない
    - トレセン%UMA%の引退日常でも、平凡な%UMA%の随筆紀行でもなく
    -
    - もしかすると、こんな幻想作品になる
    -
    - ——「%MAJO%の旅」


# エンディング。3つ以上のG1に勝った場合
ending_forever_eyebright:
  title: 永遠の Eyebright
  lines:
    - 「あの——」
    -
    - 「よければ、ご参加を——」
    - 電話をかける
    - 「ええ、そういうことです」
    -
    - 「よければ、ご参加を——」
    - 通りすがりのウマ%UMA%にチラシを配る
    - 「お願いします……」
    -
    - 「よければ、ご参加を——」
    - 知り合いのウマ%UMA%を招待しようとする
    -
    - %CHARA%とトゥインクル・シリーズで戦った三年は、あっという間に過ぎた
    - この三年、二人はたくさんのことを一緒に経験したみたいだ
    - 微妙な契約から始まり、本物のウマ%UMA%になる旅へ進み
    - 成長し、相手と出会い、強者に挑み、さまざまな奇妙な出来事を経験した
    - それどころか、とんでもないことを知った気さえする——
    -
    - そのあと、走り続け、走り続け……
    - 最後に、またどれだけ経ったか分からないころ、%CHARA%はやっと立ち止まり、平凡でまったく平凡ではない引退式を終えた。
    -
    - 一段落したと思っていた
    - 結果、予想外の頼みを聞かされる——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだやだ！私、大魔法使いにならなきゃだめなの！！！」
    -
    - %SEX%は大魔法使いになりたい。
    - 地面で転がって大魔法使いになりたがる%CHARA%を見て、%YOU%はただ冷や汗をかく
    -
    - 大魔法使い、大魔法使い……どうやればいいのか？
    -
    - たぶん、こうすれば——
    -
    - トレセン学園の、陽の明るい一日
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「それでは、あなたは認められた魔法大師です！」
    - %CHARA%は丁寧に組んだ授与台に立ち、傍らでは%FUJI%がきちんとした礼儀で紹介している
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: 通りすがりの%UMA%A
        - 「聞いた？あの%UMA%、伝説の走る魔法の持ち主の一人で……」
    - 招待されていないのに偶然通りかかった%UMA%たちが、互いに話す
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: 通りすがりの%UMA%B
        - 「えっ！？本当！？だから大魔法使いに認定されたのね！」
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: 通りすがりの%UMA%B
        - 「いいなあ！いつか私も、走る魔法を覚えたい……！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～知ってたわ。天才%MOHOSHOJO%sweepyの魔法は、絶対認められる！」
    -
    - %ZOB_ZOY%は台下で、%CHARA%が手書きした魔法の宣伝冊子について他人と話している
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「古典文学とは作風が違いますが……独自の見解もありますね」
    - content:
        - fontWeight: bold
          content: 小柄な鹿毛のウマ%UMA%
        - （半ば困惑、半ば好奇で回し読みの魔法小冊子を見ているが、読めなくて少し迷っている）
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: 通りすがりの%UMA%C
        - 「あの……%ZOB_ZOY%先輩……」
    - こちらも困った顔だ
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: 通りすがりの%UMA%C
        - 「魔法の著作にも詳しいと聞いて、中に書いてあること、教えてもらえますか？」
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「表面は少し複雑ですが……他の本の内容とつなげれば、まったく難しくありません！」
    - 乗り気な様子だ
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「つまり……この著作は『マリベルト』の魔法体系を踏襲していますが、もともとの流れではまったく語っていない——！」
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「こうこう、ああああ——」
    -
    - %ZOB_ZOY%の滔々とした旁証博引のなか、台上の小さな%UMA%を含め、会場は微妙な静寂に落ちる……
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「ですから、この一節は——！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだやだ！だから、本来は私の主戦場でしょ！」
    - やっと発言を遮る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「使——い——魔——！！早く上がってきなさい！！！」
    - %CHARA%の呼びかけで、%YOU%は急いで台上へ行くしかない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「手を出しなさい。杖を握って。」
    - 全員の注目の前で、%YOU%は%CHARA%の杖に手を重ねざるを得ない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一緒に叫ぶの——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「魔法の——ために！！！」
    -
    - acc: 1
      content: 「魔法の……ために！！」
    - acc: 2
      content: 「魔法の……ために？？」
    - 場にいる全員が、一斉にその言葉を叫ぶ
    -
    - いったい、この世界はどうしてこの小さな%UMA%の大騒ぎで、だんだん魔法で満ちていったのか……
    - %YOU%は百思しても分からない
    -
    - 分からないなら、受け入れるしかない
    -
    - この、「魔法」で満ちた世界を。

be_dull_dream:
  title: 平凡な夢
  lines:
    - たぶん、これが一つの結末だ。
    - 一つの職業には、結局終わりがある。
    -
    - %YOU%は中央トレーナーとして、上司の顔色を伺わなくていいことを幸いに思っていた
    - 職場の多くの弊害は、トレセンという理想の地では心配しなくていいのかもしれない
    - だが、その状況は、結局%YOU%の想像にすぎなかった
    -
    - 危機。
    - どうして起きたのか？%YOU%は知らない。
    - %YOU%が知るのは、ある朝起きると、「力があるほど、責任も大きくあるべきだ」という言葉が突然メディアを埋め尽くしたことだ
    - ネットでは%YOU%のあれこれについて激しい議論、それどころか罵倒が続いている
    -
    - if: era.get('flag:当前声望') > 500
      content: %YOU%のこれまでの名声が、かなりの罵倒を知らないうちに打ち消していても
    - if: d.team_count > 1
      content: %YOU%のチームのウマ%UMA%たちが極力%YOU%を弁護しても
    - 誘導されたファンたちは、やはり%YOU%名義のウマ%UMA%はもっと良い資源を得て、もっと良い成績を取るべきだったと思っている
    - つまり——
    - %YOU%は、職務を怠った、と思われている。
    -
    - この告発が真実かどうかは別として、トレセン側はこれに極めて厄介な態度を示した
    - 理事会の内部は議論が尽きないが、一派が明らかに優勢だ
    - 彼らはただ一つの要求を固持する
    - ——%YOU%、一名の「%TITLE%トレーナー」を、中央トレーナーの名簿から除名せよ
    -
    - 秋川理事長は、最後までその除名通知に自分の名を書こうとしなかった
    - だがその除名通知には、かえって秋川理事長より重い名が、どういうわけか現れていた——学園の前理事長だ。
    -
    - 誰がサインしたのか、どうやったのかはともかく
    - 結論として、やはり担当%UMA%たちと別れるときが来たのだろう。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……なんで？」
    - これを知った%CHARA%は、意外にも冷たく一つの質問だけする
    -
    - acc: 1
      content: 「説明では、『職務怠慢』だ。%CALLNAME%が——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それを聞いてるんじゃない。」
    - 説明を遮る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまり——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……誰がやったの。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おじいちゃんたち？凡人の群れ？それとも——」
    - 予想外の言葉を出す
    -
    - acc: 1
      content: 「ちがう……ちがう……」
    - %CHARA%が直接口にした言葉に、%YOU%は一瞬あまりの衝撃で、無意識に否定する
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……主人、分かった。」
    - なぜか一つの結論に至る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、待ってて。主人、すぐ戻る。」
    -
    - %YOU%がもう少し話す前に、%CHARA%は振り返って脚を上げ、%UMA%の速さで遠くへ走る
    - その方向は、明らかに学園上層の会議室——
    -
    - 事態がさらに悪化する前に、%YOU%は全力で学園の会議室の入口まで走る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんで——？！私の%CALLNAME%を——なんでそんなことしていいの——！！」
    - 数名の%UMA%に合力で止められても、%CHARA%はなお声を振り絞って叫んでいる
    -
    - むしろ、数名の%UMA%に一斉に引っ張られていなければ
    - %CHARA%は、本当に中へ飛び込んで大暴れしただろう
    -
    - ほどなく、正式な退職の前日になった——
    -
    - トレーニング場を出て校門へ向かい、トレセン学園と別れようとする%YOU%の後ろに、小さな%UMA%がずっとついてくる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うう……ううう……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ううう……うううう……」
    - 無視できない声を出し続けている
    -
    - acc: 1
      content: 「……」
    - %YOU%は足を止め、振り返ってこの小さな%UMA%を見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……なんでそんなに見つめるの。泣いてない！」
    - %YOU%が振り返ったのに気づき、すぐにある行為を止めようとする
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「目に砂が入っただけよ！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うう……うううううう……」
    - ただ、ほどなくまた目をこすり続ける
    -
    - 「よければ……」
    - %YOU%はやはり話し始める
    - 「……%CALLNAME%に一つ、約束してくれる？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……またなに要求するの……%CALLNAME%。」
    - 赤い目をこすりながら応える
    - # 【魔法の夢】より前の差分
      # 魔法の夢は宝塚のあと。宝塚は毎年第24週、第25週開始で魔法の夢が発火
    # 実際、ファン襲撃は強制BEか育成終了の可能性があり、強制BEには専用結末があるため、この結末は育成終了でしか発火しない。つまり差分は常に魔法の夢のあと
    - if: era.get('cflag:44:育成回合计时') <= 95 + 25
      content: 「機会があれば……テレビでもう一度見せてほしい」
    # 【魔法の夢】より後の差分
    - if: era.get('cflag:44:育成回合计时') > 95 + 25
      content: 「機会があれば……みんなに証明してほしい」
    -
    - 「君の『魔法』を——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……分かった分かった！」
    - 無理に涙を拭き、%CHARA%は顔を上げて%YOU%を見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……見るんでしょ。絶対。」
    - %YOU%の返事を待たず、%CHARA%は左手の小指を出す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「指切り。」
    -
    - acc: 1
      content: 小指を出す
    - %YOU%と%CHARA%は指切りをして誓う。誰も子犬にはなりたくない。
    -
    - そのあとは——
    - 全部、そのあとのことだ
    -
    - そのあとの人生がどれほど輝いても惨淡でも、%CHARA%があの可能性の向こう岸に届いたかどうかは別として
    - %YOU%が覚えているのは、これが%YOU%の中央トレセントレーナーとしての生涯の終わりだということだけだ。


######## ランダムイベント ########
# ジュニア級4月以降、ターン終了
# 好感+30～50、スピード&スタミナ+5
we_slave_and_master:
  title: 使い魔と主人
  lines:
    - またわけの分からない探検。トレーニングの空き時間に、%YOU%は%CHARA%に無理やり森へ連れていかれた
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%！早くついてきて！」
    - %CHARA%に必死にこき使われ、今の%YOU%と%CHARA%は森の小道を歩いている
    -
    - 「自然の魔法」の手がかりを探す、と言いながら、二人とも手がかりがない
    - 森を歩き、周りのあらゆるわずかな手がかりを探すしかない
    -
    - 歩いているうちに、林はだんだん濃くなる
    - 陽光が葉の隙間を通り、地面にまだらな光と影を落とす
    -
    - 陽光のまだらな樹影の下、灌木の後ろで何かがさらさら音を立てる
    - それから、突然黒い影が飛び出す——！
    -
    - 小さな狐だった。
    - 体を揺すり、こちらを見る
    -
    - acc: 1
      content: 「狐だね……」
    - 少なくとも猛獣ではない。%YOU%は息をつく
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「狐なんて、すごくない？」
    - %CHARA%の考えは、まったくちがうらしい
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わざわざ目の前まで来るなんて、天才%MOHOSHOJO%sweepyに興味があって、私の%CALLNAME%になりたいに決まってる！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん！天才%MOHOSHOJO%なら、%CALLNAME%が一人だけなんてありえない。こんな千載一遇のチャンス、逃せない！」
    -
    - %CHARA%は魔法の杖を出し、振る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Iris★Ipomoea、私の%CALLNAME%になりなさい！」
    -
    - 狐は、ただ静かに見ている
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Iris★Ipomoea、私の%CALLNAME%になりなさい！！！」
    -
    - 狐は体を掻く
    - acc: 1
      content: 「どうも、あまり君の%CALLNAME%になりたくなさそうだ……」
    - 動じない狐を見て、%YOU%は少し困ったように言う
    -
    - %YOU%がそう言ったとき、ちゃんと立っていた狐が、妙に%YOU%に興味を持つ
    - しゃがみ、%YOU%へ飛びかかる……！
    -
    - 「……！」
    - だがなぜか、緊張して伸ばした%YOU%の両腕に飛び乗るだけだった
    - 最後は、%YOU%が両手で抱いた胸の中で静かにいて、眠ったみたいだ
    - acc: 1
      content: 「この狐も、魔法を使えるのかも……」
    - 胸の中の狐の軽い擦れを感じ、%YOU%は妙に心地よい
    -
    - なぜか、この言葉を聞いたあと、見下して見ていただけの%CHARA%の瞳が縮み、耳が立つ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！やだやだやだ！あなたは私の%CALLNAME%だけのはずよ！！！」
    -
    - %CHARA%は%YOU%の前に飛びかかり、%YOU%と胸の中の狐を奪い合う
    - 結果、狐は当然驚いて抜け出し、あっという間に林の中へ消えた……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%、私を見て、答えなさい！私はあなたのなに！」
    - %CHARA%は焦って聞く
    -
    - acc: 1
      content: 「主人。」
    - acc: 2
      content: 「担当……主人」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふ……びっくりした……」
    - 息をつく
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「聞きなさい、%CALLNAME%。これから、動物に飼いならされちゃだめ、分かった！」
    - そもそも人がどうして動物に飼いならされるのか……分からない%YOU%は、とにかく%CHARA%の頼みを受けた


# ジュニア級4月以降、ターン開始
# 好感+30～50、スタミナ&根性+5
ws_phalaenopsis:
  title: たった一輪の Phalaenopsis
  lines:
    - %CHARA%は花に興味があるかもしれないと思い、%CHARA%を花屋へ連れていく
    -
    - 花屋の一輪一輪の赤い薔薇に、%CHARA%の視線は一瞬も止まらない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしたの%CALLNAME%？なんでこんな、どこにでもある花を見せるの？」
    -
    - 無数に咲くヒヤシンスが目の前に現れても、%CHARA%は淡々としている
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだ！これ、結局魔力のない花でしょ？」
    -
    - 目の前に現れた青い妖姫の群れを見ても、%CHARA%は動じない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これ、魔女の花なんかじゃない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの一輪だけよ。」
    -
    - 結果、少しも興味がなさそうだ……
    -
    - ともかく、来た以上は空手では帰れない
    - %CHARA%に微妙な目で見られても、%YOU%は胡蝶蘭を一鉢買った
    -
    - acc: 1
      content: 「話しかけたら、君が教えてる魔法、少し分かるかもしれないよ？」
    - そう言う
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん。」
    - 満面の見下し顔でも、%CHARA%は%YOU%が買った鉢植えを受け取る
    -
    - 帰り道、ときどき花にわけの分からない話をする%CHARA%
    - そのあと、珍しくちゃんと胡蝶蘭を寮で世話していた……


# ジュニア級4月以降、ターン開始
# 好感+20～30
# プレイヤー体力+100、気力+200
ws_witch_potion:
  title: 魔女の魔薬
  lines:
    - 普通の一日、%YOU%はトレセン学園のグラウンドを歩いている
    - 遠くから、小さな%UMA%が猛スピードで%YOU%へ走ってくる
    - %SEX%の手には、緑の、脈打つ、微妙な流動性のある物質が入ったガラス瓶がある
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～！早く飲んで早く飲んで——！」
    - そばに来るとすぐ単刀直入に、奇妙極まりないことを言う
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyが発明したこの薬を飲めば……森があなたと共にあるわ！」
    -
    - %CHARA%はガラス瓶を揺らし、目の前の濃くて怪しい緑の薬を全力で%YOU%に勧める
    - 熱そうには見えないのに、なぜか内部はまだ転がっているみたいだ
    -
    - acc: 1
      content: 「どこで……作った……の……？」
      lines:
        - %YOU%は途切れ途切れにその言葉を出すだけだった
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「寮に決まってるでしょ。」
    - acc: 2
      content: 「これは……どこから……持ってきた……？」
      lines:
        - %YOU%は途切れ途切れにその言葉を出すだけだった
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「自分で発明したの。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_5% がどこからか持ってきた、見た目からして私をあしらう古い鉄鍋に魔法をかけたあと」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「寮の厨房でも、主人は上質な薬剤が作れるようになったの！」
    -
    - 寮長の許可まで取れたのか……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「話はそこまで！%CALLNAME%、先にこれがどうか、試しなさい！？」
    - %CHARA%は、その瓶の薬をさらに%YOU%の前へ押し出す——
    -
    - そのあと、%YOU%はその濃い緑の液体をゆっくり喉へ流し込んだ
    - すぐ、トレセン学園のグラウンドに、広大な森と尽きない精霊が見えた気がした

# ジュニア級4月以降、ターン終了
# 好感+20～30、賢さ+10
we_sweet_carrot:
  title: いちばん甘いニンジン
  lines:
    - 「むかしむかし、一匹のうさぎがいました
    - うさぎにはうさぎのおばあちゃんがいて、おばあちゃんは毎日出かけて帰り、いつもとても甘いニンジンをいくつか%SEX%に食べさせてくれました
    - やがてうさぎは思います。おばあちゃんがそんなに甘いニンジンを見つけられるなら、自分も見つけられるはずだ
    - そこで、家を出ました
    -
    - うさぎは道で一匹の狐に出会います
    - 狐は言います。そんなに速いのに、なぜ天下一甘いニンジンを探さなきゃいけないの？
    - うさぎは言います。ニンジンはそんなに甘いんだよ、食べてみれば分かる
    - 狐は言います。私はニンジンを食べない
    - うさぎは持っていたニンジンを狐の口へ押し込み、狐は甘いと言うしかありませんでした
    -
    - うさぎは狐を連れて、天下一甘いニンジンを探し続けます
    - うさぎはいつも速すぎて、振り返っては、息を切らしてついてくる狐を叱ります
    - ついに、二人はある山で伝説のいちばんおいしいニンジンを見つけました
    - うさぎは嬉しそうに家へ持ち帰り、うさぎのおばあちゃんに見せます
    - うさぎのおばあちゃんは微笑み、二人を厨房へ連れていき、うさぎと狐のためにごちそうを作ると言います
    -
    - うさぎは待ち、待ち、焦りました
    - そっと厨房へ近づくと、うさぎのおばあちゃんがコッソリニンジンを一本取り替えていました
    - うさぎが持ち帰ったニンジンは、コッソリおばあちゃんの菜園に植えられていました
    -
    - いちばん甘いニンジンは、ずっと、うさぎのおばあちゃんの菜園にあったのです
    - うさぎのおばあちゃんは、いつも夜が明ける前にコッソリ出て、ニンジンにいちばん新しい露をかけ
    - うさぎのおばあちゃんは、いつも夜が明ける前にコッソリ出て、ニンジンにいちばんいい肥料を探し
    - うさぎのおばあちゃんは狐に頼み、うさぎを冒険へ連れていき、ここの秘密を見つけさせないようにしていました
    -
    - うさぎは決心します
    - 自分でニンジン畑を作ると
    - 毎日いちばん新しい露で灌ぎ、いちばんいい肥料で養う
    - 狐をこき使い、夜が明ける前にうさぎを起こさせ、それから狐を引っ張って外へ、いちばん甘いニンジンを作る方法を探す
    - でも、毎日うさぎのおばあちゃんに、いちばん甘いニンジンが食べたいとせがみます
    - 最後、畑が実ったとき、小さな動物たち、狐も含めて、みんな認めました
    - うさぎが作ったニンジンこそ、いちばん甘いニンジンだと——」
    -
    - acc: 1
      content: 「だいたい、こんな感じだよ」
    - やっと、%CHARA%の思いつきで物語が聞きたいという要求を満たした
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……これで終わり？」
    - 結果、とても不満そうだ
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なに……やだ、つまんない！猫の魔法使いが魔法の魚を探す話に変えても通じるでしょ！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「使——い——魔——！！！他の話ないの？！！！」
    -
    - %CHARA%の要求で、%YOU%は物語の本から別の話を探し、%CHARA%に聞かせるしかなかった……


# クラシック級以降、ターン終了
# +下校後のスペシャリスト
we_in_school:
  title: 授業中の楽しみ
  lines:
    - 普通の平日、%YOU%はいつものどんな一日と同じように道を歩いている
    -
    - 向かってくるのは、見覚えのある鹿毛の小さな%UMA%——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっ、%CALLNAME%、ちょうど探してたの。」
    -
    - %CHARA%だ。今日のトレーニング計画について、ちょうど%SEX%と話さなければならない
    - %YOU%は顔を上げ、頭上の太陽を見て、それから傍らで%UMA%たちがいっぱい座っている校舎を見る


wis_loop:
  -
  - acc: 1
    content: （ずいぶん早いな）
    lines:
      - %CHARA%のいつもの気性なら、こんなに早く来るなんてありがたい
      - でも、どこかおかしくない？？
  - acc: 2
    content: （%UMA%たちの授業も、なかなか重いな）
    lines:
      - %CHARA%が授業できちんと聞いているかは分からない。意外と素直な面があるのかも
      - でも、どこかおかしくない？？
  - acc: 3
    content: 「今、授業の時間じゃ——？？」
    lines:
      - 問題に気づいた%YOU%は、すぐ声を上げる
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「しーっ——！！！」
      - %CHARA%は急いで駆け寄り、両手で%YOU%の口を覆う
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%！なんでそんな大きな声出すの！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「先生を呼んできたら、私、戻らなきゃいけないでしょ！？」
      -
      - 自分がサボっているのを分かっていたのか！？
      -
      - acc: 1
        content: 「授業……出てないの？？」
        lines:
          - %YOU%は少し小さな声で聞く
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「授業出てないわけじゃない！」
      - acc: 2
        content: 「……ついにサボったの？？」
        lines:
          - %YOU%は少し小さな声で聞く
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なにがサボりよ！場所を変えて魔法を学んでるだけ！」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「つまり、英語の授業、教室にいる意味ある？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「話してることは全部分かるし、いつも魔法と関係ないことばっかり乾いた話」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そんな時間あったら、新しい魔法、もう一つ身につけられる！」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、今日の練習はなに？早く教えて！」
      -
      - トレーニングにはいいことだが、%CHARA%の先生はどう思うだろう……
      - あとで、%CHARA%が英語の試験で毎回伝説の満点を取ると知り、%SEX%への印象を少し改めた


# クラシック級以降、一緒にゲーム
# 好感+20～30、賢さ+10、Pt+50
og_phantom_thief:
  title: 天才怪盗 Sweep
  lines:
    - %CHARA%と一緒にロールプレイングゲームを遊んでいる
    - 画面にはかっこいい特写アニメが流れ、%CHARA%はその中心設定に濃い興味を持ったらしい
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「歪んだ欲望を奪って、悔い改めさせる……なになに！これ、魔法じゃない！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんなすごい魔法を、ゲームの中でしか起きないことにするなんて、もったいなさすぎでしょ？！」
    - %SEX%はコントローラーを置き、少し不満そうに呟く
    -
    - acc: 1
      content: 「現実では、ゲームみたいに人の心へ潜入するのは難しいからね……」
    - %YOU%は常識で%SEX%に応えようとする
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「バカ%CALLNAME%！あなたができないだけで、天才%MOHOSHOJO%sweepyができないわけじゃない！」
    - かえって変な勝負欲を刺激したらしい
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「魔法なら、現実でも絶対再現できる！」
    - %CHARA%は画面を見てしばらく考え、それからゆっくり視線を%YOU%へ移す
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%、聞きなさい！主人、すごくいい魔法の儀式を思いついた！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたは私の%CALLNAME%なんだから、主人に付き合うのは当然でしょ？こうするの——」
    -
    - 新しい一日、仮面をつけて堂々とトレセン学園内に現れる
    - ……二人は、%KITA% の前で、事前にリハーサルしたポーズを一緒に取っている
    -
    - acc: 1
      content: 「俺は……Joker。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私は……Sweep。」
    -
    - color: %COLOR_68%
      content:
        - fontWeight: bold
          content: %KITA%
        - 「？わ、私は……Black！？？」
    - わけも分からず応える
    -
    - %KITA%に、事前に用意した仮面を配る
    -
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さん、に、いち——」
    - acc: 1
      content: 「我ら、伝説の『怪盗団』」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「世の人が『凡俗』で歪めた欲望を奪うために——」
    - color: %COLOR_68%
      content:
        - fontWeight: bold
          content: %KITA%
        - 「人々が自分の意志で拓き、選ぶ未来のために——」
    -
    - acc: 1
      content: 「清く果敢な『Maya』よ、我ら、お前の助けが必要だ！」
    -
    - color: %COLOR_24%
      content:
        - fontWeight: bold
          content: %MAYA%
        - 「？？？？？？」
    - color: %COLOR_24%
      content:
        - fontWeight: bold
          content: %MAYA%
        - 「これ……これが大人になる新しいやり方なの！？？」
    - 両手の指で必死にこめかみを突いて考えている
    -
    - %MAYA%に、事前に用意した仮面を配る
    -
    - ……
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「いい話に聞こえますね」
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - 「必要なら、私も参加させてください」
    - %FUJI%に、事前に用意した仮面を配る
    -
    - ……
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「あの……」
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - 「設定資料集でも、まだ読んでいなくて……」
    - それでも%ZOB_ZOY%に仮面を渡す
    -
    - ……
    -
    - 黄昏が近づくころ、「怪盗団」はかなり巨大な規模にまで発展していた
    -
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: 通りすがりの%UMA%A
        - 「さ……最近、百鬼夜行の季節なの！？」
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: 通りすがりの%UMA%B
        - 「百鬼夜行ってなに！？」
    -
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「残念、夜になったら天才怪盗Sweepも、%SEX%の本職に戻らなきゃ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyとして、魔法を研究するの！！」
    - %CHARA%は%YOU%のトレーナー室で、勝手に日記を書いている
    -
    - この尽きないロールプレイは、いつまで続くのだろう
    - 少なくとも今回は、二日もすれば飽きるだろう……


# クラシック級11月第2週以降、ターン開始
# 好感度+20～30、スキルPt+20
ws_magic_origin:
  title: 魔法の起源
  lines:
    - 風も陽もいい一日、%CHARA%がまた突然%YOU%のトレーナー室へ飛び込む
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ。%CALLNAME%。ついてきて。」
    -
    - %YOU%を地下鉄に乗せる。行き先は、%CHARA%のおばあちゃんの家らしい
    -
    - acc: 1
      content: 「僕たち……何しに行くの？」
    - 軽く聞く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～もちろん——おばあちゃんにサプライズよ！」
    - とても直球に答える
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おばあちゃんのやつ、大魔法使いなのに、いつも前言撤回するんだから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今度は、気づかれる前に、不意打ちしてやる！！」
    -
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「ふふ、来たわね。お茶は淹れてあるわよ」
    - 庭の丸テーブルには、精緻な茶器が並んでいる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだやだ、なんで私が来ると分かったのよ！！」
    - 予想外の出迎えに、怒った様子を見せる
    -
    - おばあちゃんは微笑んで、コッソリ%YOU%を一目見る
    -
    - そのあと、%CHARA%とおばあちゃんと一緒に丸テーブルを囲み、花の香りのなかでお茶を飲みながら話す
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、おばあちゃん、あれ、まだやってなくない？あれ。」
    - 突然話題を振る
    -
    - 口調も表情もわざと冷たくしているが、目標ははっきり何かを暗示している
    -
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「ああ、あれね」
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「ふふ……帰ってきたら、やっぱりいちばんそれが欲しいのね」
    - %CHARA%の意図をすぐ察し、おばあちゃんは意味深に笑う
    -
    - おばあちゃんはゆっくり家へ入り、引き出しを開け、埃だらけの本を一冊取り出して出てくる
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「では、始めましょう」
    -
    - だが本は開かず、ただ本の埃を払う
    - それから、滔々と話し始める——
    -
    - 物語を話しているというより、有るか無きかの経験を思い出しているようだ
    -
    - 本にある、魔法使い同士のロマンチックな出会い
    - 昔から伝わる、子どもが魔薬を求めて母親を治す話
    - そして、魔法についての無垢な幻想——
    -
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: おばあちゃん
        - 「やっぱり、ずっと、おばあちゃんが小さかったころと同じね」
    - なぜか笑って呟き、物語の時間は気づかないうちに終わっていた
    -
    - %CHARA%と帰るとき、コッソリ振り返って家の中のウマ娘の老人を見る
    -
    - 彼女は本を持ってゆっくり机のそばへ行き、引き出しを開ける
    - だがすぐ本を戻さず、黙って表紙を見つめている
    -
    - 最後に本の埃を払い、それから大切に引き出しへ戻す
    - 引き出しの中には、まだ埃だらけの本がたくさんあるらしい


# クラシック級11月第2週以降、ターン開始
# スキルPt+50、スタミナ+5、賢さ+5
ws_paper_plane:
  title: 魔法の紙飛行機
  lines:
    - 新しい一日には、新しい仕事がある
    - 特別な事情で、学園の上層は%YOU%に%UMA%たちの意見を処理するよう求めた
    - だが、どこまで処理すればいいかは、はっきり言わない
    -
    - acc: 1
      content: 「たぶん、これが『現実』なんだ……」
    - 上層と%UMA%たち、それぞれの事情への理解を胸に、%YOU%はこれらの書類を読み始める
    -
    - そのとき、トレーナー室の扉が開く——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%、ついてきて——」
    - %CHARA%だ。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ——！」
    - %YOU%はすぐには%SEX%に応じない
    -
    - acc: 1
      content: 「悪いけど、先にこの書類を処理しないと……」
    - %YOU%はゆっくり顔を上げ、厚くはないが一定量はある意見を指す
    - %CHARA%の提案を、一応断った
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……『書類』？……凡人の『魔法の提案』？」
    - 少し驚く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyの%CALLNAME%が、そんなことに煩わされるの？？」
    -
    - acc: 1
      content: 「これは……『上』の指示で……」
    - %YOU%はそう伝えるだけだった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「上？理事長？大魔法使い？天才%MOHOSHOJO%sweepyよりすごいの？」
    - %CHARA%は圧迫感のある目でこちらを見る……
    -
    - %SEX%を怒らせるより、%SEX%を少し大人しくさせたほうがいい……
    - acc: 1
      content: 「スイープほどすごくはないよ……」
    - 心にもなく言う
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それでいい、%CALLNAME%！」
    - 目が穏やかになり、すぐ平和な状態に戻る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyと一緒なら、こんな雑務に煩わされちゃだめ！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんなめちゃくちゃな魔法の提案は、こうするの——」
    - %CHARA%は突然机の前に寄り、それらの書類を抱え、猛スピードでめくり始める
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『花壇にニンジンを植える等々』『学園の壁に落書き等々』『食堂の新メニュー等々』……」
    - %CHARA%は白い紙を一枚出し、猛スピードで文字を書く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このつまらない凡人の提案、全部まとめる。」
    - その紙には、一つ一つの提案の、細部を落とさない要約が整然と書いてある
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それから——」
    -
    - %CHARA%は、%SEX%が今まとめた提案の大綱を紙飛行機に折る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Anemone★Wallflower、あそこに行きなさい！」
    - 息を吹きかけ、%CHARA%は紙飛行機をトレーナー室の窓から力強く外へ投げる——
    -
    - その紙飛行機は風の影響を受け、ふらふらと混乱して回り続ける
    - だがなぜか、安定して一つの場所へ進む
    - 最後は、寸分違わず理事長室の開いた窓へ飛び込み、机の上に落ちる
    -
    - acc: 1
      content: 「これは……？」
    - %YOU%は驚くだけだった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なにバカ%CALLNAME%！本当に自分であいつらの全部を決めるつもりだったの！？」
    - すぐ言い返す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「魔法の使えない%CALLNAME%が、どうやって凡人を幸せにするのよ！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ついてきて、%CALLNAME%！」
    - 疑う余地なく話題を進める
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんなに魔法を学びたいなら、主人、少し教えてあげる！」
    -
    - そのあと、%CHARA%にイベント会場へ引っ張られる
    - そこで%CHARA%と一緒に息を合わせ、人にマジックを見せた

# シニア級7月第1週以降、ターン終了
# 好感度+20～30、スピード+5、スタミナ+5
we_buttercup:
  title: 永遠の Buttercup
  lines:
    - 普通の午後、%YOU%と%CHARA%はただ学園の中を一緒に歩いている
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ。%CALLNAME%、持ってて。」
    - %CHARA%はなぜか突然頭の帽子を脱ぎ、%YOU%へ渡そうとする
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なに？天才%MOHOSHOJO%sweepyは休憩中。今は%SEX%の裏人格%CHARA%があなたと話してるの！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……どうしたの？%CHARA%だって、ただの小さな%UMA%でしょ？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん。持つの嫌なら、自分で持つ。べーだ」
    - %CHARA%は一気に帽子を奪い返し、片目のまぶたを下げて、%YOU%に変な顔をする
    -
    - %CHARA%は花壇の縁に座り、目をそっと閉じ、ゆっくり両脚を前後に揺らす
    - 陽光が%SEX%の顔に当たる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！あんた！ちょっと寝かせて。」
    - 突然命令する
    -
    - こうして%CHARA%は頭を%YOU%の太ももに乗せ、黙って目を閉じ、静かに横になる
    - 茶色の両耳が、ときどき小さく動く
    -
    - なぜかゆっくり目を開け、%YOU%と目が合う
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……なにか言わないの？私、こんななの、とか。」
    - 冷たいのに、意外と少し柔らかい
    -
    - acc: 1
      content: 「特に言うこともないよ」
      lines:
        - 「確かに子どもみたいだ……」
        - つい困った顔になる
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふん。大人ってそういうの。いつも子どもを見下す。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「一度でも子どもになったことがあれば分かるのに。」
        -
        - 冷たい返事を受け、%CHARA%はまた黙って目を閉じ、静かに%YOU%の脚の上に横になる
        - 陽光が%YOU%と%CHARA%に降り注ぐ
        -
        - 黄昏まで、%CHARA%は起き上がって帽子をかぶり、%YOU%をトレーニング室へ連れていった
    - acc: 2
      content: 「どうせ……最初から、どの%CHARA%もこの調子だったし……」
      lines:
        - つい困った顔になる
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……！な、なにそれ！？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ねえ！はっきり言いなさい%CALLNAME%！私がずっとこのよ！う！なのよ！！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふん！」
        - 一気に起き上がり、%CHARA%は少し怒って、傍らの帽子をかぶる
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「休憩おしまい！%CHARA%っていう小さな%UMA%は帰った！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今は
            - fontWeight: bold
              content: 最初
            - の天才%MOHOSHOJO%sweepyがあなたと話してるの！」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%SEX%とまた話したいなら、%CALLNAME%、次は自分で大事にしなさい！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「じゃないと、これから会えなくなるかもよ！」
        -
        - こうして%YOU%はまた、%CHARA%に無理矢理トレーニング室へ押し戻された……


# シニア級7月第1週以降、淫紋所持、ターン開始
ws_night_shade:
  title: 口に出せない Nightshade！
  lines:
    - 新しい一日、%YOU%が事務室で働いていると、小さな%UMA%が分厚い本を一冊持って入ってくる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、この本、持っていって。」
    - 単刀直入に頼む
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このあいだ、なんでか誰かがくれたの。すごく読んでほしいみたいだった。でも読みたくない。」
    -
    - 表紙を見ると、『魔法の本質とその実践』とある
    -
    - acc: 1
      content: 「いい本じゃない、なんで読まないの？」
    - %YOU%はそう応える
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだ。この本、なんか陰気。こんな陰気な本、読みたくない。」
    - 何か直感があるみたいに、%CHARA%は拒否の理由を出す
    -
    - ……実はこの本、トレーナーとしての%YOU%は読んだことがある
    - 以前%CHARA%に見せるのは少し早かったかもしれないが、今なら、%SEX%に少し知らせてもいい——
    -
    - 「読まないなら、持ってきた意味がないでしょ」
    - 続けてそう言う
    - 「だって、魔法の本質を知るのは、天才%MOHOSHOJO%sweepyにとても役立つんじゃない？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……なに！あなたまでその態度なの！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！%CALLNAME%がそう言うなら、どんな本か、一応二目見てあげる。」
    - %YOU%の励ましで、%CHARA%は渋々のふりをして本を開き、目次のページから読み始める
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「目次、第一章、関係の魔法。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「第一節、淫紋のしゅ……る……い……と……」
    -
    - なぜか、%CHARA%が読む声はだんだん小さくなり、目の光もだんだん暗くなる
    - こうして、言い表しにくい静寂のなか、第一節の終わりまで読んでしまう
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ねえ～！%CALLNAME%！急に思いついたんだけど——！」
    - なぜか突然可愛げを出し始めた %CHARA%は、%UMA%の力で%YOU%を無理矢理探検へ引っ張っていった……
    -
    - %FUJI%寮長によれば、そのあとの一週間、いつも夜更かしして魔法を研究していた%CHARA%は、毎晩仰向けでちゃんと眠るようになった
    - とても安らかに見えた……
  # we_gypsonphila


# ws_night_shade と同ターン、ターン終了
# +熱視線
we_gypsonphila:
  title: 追い求めるべき Gypsophila！
  lines:
    - 平凡な一日、にぎやかな、授業が終わった教室で
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ。聞きなさい、みんな。」
    - 小さな%UMA%が突然席から教卓のところへ走り、宣言を始める
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「魔法の本質について、みんなに伝えなきゃいけない知らせがある……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「下の一部の人は、たぶん伝説の『魔法』の真諦を知ってる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たぶん、一部の人はこの『魔法』を使って得をしようとしてる……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも！」
    - %CHARA%は突然教卓に登る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんな『魔法』は、結局ただの『黒魔法』よ！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天才%MOHOSHOJO%sweepyの研究によれば、魔法には、もっと良い面がある！」
    - %CHARA%は教卓から飛び降り、チョークを掴み、黒板にわけの分からない呪文を書き連ねる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こう、ああ、それからこれ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これ全部が、本当の——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだやだ！言わせて～！！！」
    - 結果、勝手に大騒ぎした%CHARA%は先生にその場で捕まり、授業中にコッソリ隣の席へ%SEX%の魔法理論を広めるしかなかった


# 好感+20～30、スキルPt+50、体力&気力+600
ws_strange_day:
  title: 可笑しい日
  lines:
    - ある朝、%YOU%はどこかおかしいと感じつつ、それでも満ち足りた一日を迎えるつもりだった。
    - 「(ง •̀_•́)ง」
    - %YOU%はそれほど気にせず、身支度を終えて出る
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「Y(^_^)Y」
    - %SEX%は相変わらず校門で一人ひとりを迎えている
    - ……？
    - 「눈_눈」
    - %YOU%は少し奇妙だと感じるが、言葉にできない
    - color: %COLOR_58%
      content:
        - fontWeight: bold
          content: %DOTOU%
        - 「(๑•́ωก̀๑)」
    - %SEX%はまた泣いている
    - color: %COLOR_24%
      content:
        - fontWeight: bold
          content: %MAYA%
        - 「(～0～)」
    - この小悪魔、また夜更かししたな
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「<(★ΦωΦ★)>」
    - ……この表情はなんだ。
    - ……！
    - 「(#ﾟДﾟ)」
    - %YOU%はやっと気づく。%YOU%はこの道中、一言も聞こえておらず、代わりに顔文字が頭に浮かんでいた。
    -
    - どうしよう……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(｢･ω･)｢へい」
    - 道で%CHARA%に会う
    -
    - acc: 1
      content: ｢(｢･ω･)｢へい」
    - acc: 2
      content: ｢ヾ(＾。^★)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(〇_ｏ)」
    - どうやら%YOU%が何をしているか分からないらしい。
    -
    - acc: 1
      content: 今の状態を%SEX%に説明する
      lines:
        - (「(´ﾟωﾟ｀)」)
        - (「⁽⁽◝( •௰• )◜⁾⁾，₍₍◞( •௰• )◟₎₎（手を舞い足を踏んでいる）」)
        -
        - (「╮（╯＿╰）╭」)
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(┯_┯)」
    - しばらくして、やっと意味を理解した
    - だが、トレーナー室へ連れていかれる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(★^ω^★)/♪∪」
    - 杖で、ねばねばした薬草の汁の瓶を指す
    -
    - acc: 1
      content: 「(●—●)」
    - %YOU%はただ躊躇する……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(┯_┯)/ ∪」
    - 杖で、その未知の瓶をはっきり示す
    -
    - acc: 1
      content: 「(๑˙ー˙๑)」
    -
    - 一時間も経たないうちに、薬を試し続ける
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(★^ω^★)/
        - color: rgba(72, 217, 70, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「( ^ _ ^ )/
        - color: rgba(191, 8, 173, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「( ｰ̀ д ｰ́ )/
        - color: rgba(28, 8, 204, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「( 눈 _ 눈 )/
        - color: rgba(239, 223, 6, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(  ◣д◢ )/
        - color: rgba(225, 32, 2, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    - まったく効果がない
    -
    - わけの分からない呪いを解こうとしているはずなのに
    - なぜか実験用のモルモットになった気がする……
    -
    - if: era.get('cflag:32:招募状态') === 1
      lines:
        - ……待って、呪いかどうかは分からない
        - 「モルモット」と言えば——
        -
        - %TACHYON%という名の%UMA%を思い出す
        - たぶん、また挨拶なしの実験……
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「(◣д◢)」
        - この収まらない怒りは、利用してもいいかもしれない
        -
        - %TACHYON%の実験室へ行くと、白衣の%UMA%はやはりそこにいた
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「╰（‵□′）╯」
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - 「( ^ω^ )」
        -
        - acc: 1
          content: (「╭( ′• o •′ )╭☞( ^ω^ )」)
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - 「(눈_눈)」
        -
        - acc: 1
          content: (「(～￣▽￣)→(눈_눈)」)
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「（╯‵□′）╯︵┴─┴(눈_눈)」
        -
        - ドンドドン！ゴゴゴゴー！！
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - 「ぎゃ(∩∀°╭ぎゃ∀∀ぎゃ∀∀°)ぎゃぎゃ」
        - （トム先生のアフレコに感謝）
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - 「( ✘_✘ )」
        -
        - %YOU%と%CHARA%の共同制圧のもと、目の前の栗毛の%UMA%はほどなく今回の解毒剤を出すと約束した
        - そのあと、多くはないが、%YOU%の生活はある程度の正常に戻った
    - if: era.get('cflag:32:招募状态') !== 1
      lines:
        - ……待って、呪いかどうかは分からない
        - 以前、学園の売店で無料の飲み物をもらったことを思い出す——
        -
        - acc: 1
          content: (「(◣д◢)」)
        -
        - まだ怒っている%CHARA%を連れて売店へ行くと、白衣の栗毛の%UMA%がそこにいた
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「╰（‵□′）╯」
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - 「(★∩ω∩)」
        -
        - acc: 1
          content: (「╭( ′• o •′ )╭☞(★∩ω∩)」)
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - 「(눈_눈)」
        -
        - acc: 1
          content: (「(～￣▽￣)→(눈_눈)」)
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「（╯‵□′）╯︵┴─┴(눈_눈)」
        -
        - ドンドドン！ゴゴゴゴー！！
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - 「ぎゃ(∩∀°╭ぎゃ∀∀ぎゃ∀∀°)ぎゃぎゃ」
        - （トム先生のアフレコに感謝）
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - 「( ✘_✘ )」
        -
        - %YOU%と%CHARA%の共同制圧のもと、目の前の栗毛の%UMA%はほどなく解毒剤を出した
        - そのあと、%YOU%の生活は正常に戻った

# スイープトウショウ、オルフェーヴル、デュランダル、カレンチャン、ドリームジャーニーの五名が入隊したあと、ターン経過でランダム発火
# +やる気
ws_branches:
  title: 小枝
  lines:
    - 日が一日一日と過ぎ、時間とともに、%YOU%名義の%UMA%はだんだん増えていった
    - %CHARA%、%ORFEVRE%、%DURANDAL%、%CURREN%、%JOURNEY%
    -
    - あっという間に、%YOU%の名義には、これほど優れたウマ%UMA%たちがいる
    -
    - ウマ%UMA%たちの天賦を無駄にしないため、新しい一日、いつものようにグラウンドへ行き、ウマ%UMA%たちを集め、%THEY%のトレーニングを指導する——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでよ！なんで私、他人と一緒に練習しなきゃいけないの！」
    - なだめるのはあと。とにかく先に%SEX%を現場にいさせる……
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「臣が、余と同席の民と事を共にせよ、と？どこが面白い？」
    - すぐ心配になる言葉を出す
    - でも、拒否というより、本当は好奇のほうが大きいだろう……
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「主君！今日、この利剣でお守りします！」
    - 手頃な小枝を見つけたのか、とても興奮している
    - トレーニングのときは、しばらく傍らに置いてほしい……
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「%CALLNAME_38%、なんでも機伶は聞くよ～♪」
    - ただ直球で頼りになる言葉を言う
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「旅路にいくつ景色があっても、あなたの帰る場所は、ただ一つ、幸福なものだと信じます……」
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「……ふふ、ほんの少しの希いです。気にしないでください……」
    - ただ、頭がくらくらするような話をする
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「えぇ～～、ジャーニー先輩、そんなこと言うんだ～」
    - なぜか%JOURNEY%の言葉にすぐ反応する
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「ちょっと、『分かち合う心』が足りなくない——」
    -
    - %CURREN%と%JOURNEY%は、微妙な視線の勝負を始める……
    - トレーニングが始まれば止まるはずだから、今は安心しよう……
    -
    - %CURREN%と%JOURNEY%に、先にトレーニングの予定を伝える
    - 振り返ると、%DURANDAL%、%ORFEVRE%、それに%CHARA%が、それぞれ小枝を持って決闘している……！
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%——！なんで主人の戦いを助けに来ないの！！」
    - こちらがそちらを見ているのに気づいたらしく、戦いながら叫ぶ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Rosa★Thistle、天才%MOHOSHOJO%sweepyの刃の下に倒れなさい！！！」
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「ぐっ……！」
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「すみません、主君……これから、臣はもうお仕えできません……」
    - %DURANDAL%は魔法剣と王の刃に同時に当たり、HPがゼロになった……
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「これで、最強の反逆者は消えた——一時同盟の条件は、破れた」
    - %ORFEVRE%は小枝を、どこから持ってきたのか分からない帯に差す
    - %SEX%は小枝を掲げる%CHARA%に、冷静で威厳を失わずに言う
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「お前を除くことも、王となる道の、必然の選択だ」
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「臣は、余の民に記憶されよう——」
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「反逆者の姿で。」
    -
    - %CHARA%と%ORFEVRE%は小枝を構え、互いに向かって突撃する
    - 刹那の攻防——
    -
    - %CHARA%の手の小枝は、乾いた音を立てて真っ二つに折れる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    -
    - 武器を失った（剣客）魔法使いは、王の接近を前に、無意識に後退する……！
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「えぇ～～～、これで終わり～」
    - %CURREN%は、いつの間にか%CHARA%のそばに現れている
    -
    - %CHARA%に、新しい小枝を一本渡す
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「『威厳の王』になりたいなら——」
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「『かわいい機伶』は、王位なんて譲らないよ？」
    - if: era.get('cflag:38:性别') === 1
      content: 軽やかに小枝を相手へ向け、王と彼の（剣客）魔法使いは、整えて待機する……！
    - if: era.get('cflag:38:性别') !== 1
      content: 軽やかに小枝を相手へ向け、女王と彼女の（剣客）魔法使いは、整えて待機する……！
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「……では、私も戦闘へ加わることをお許しください——」
    - %JOURNEY%は%SEX%の小枝を持って%ORFEVRE%のそばに立つ
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「今このとき、私は……王の騎士です。」
    - 王と%SEX%の騎士は、厳かに待つ……！
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （くそ、乱臣賊子が騎士になれるなんて！）
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （でも、今復活したら、囲まれるかも……！！）
    - %DURANDAL%の目には、焦りが滲む……
    -
    - 「つまり、これが……」
    -
    - 「トレセン学園……」
    -
    - たぶん、おそらく、絶対に、%YOU%の部下のウマ%UMA%がたまたまみんな変わり者なだけだろう……
    - 絶対そうだ……


# 発火条件：スイープトウショウ＋カレンチャン入隊、デュランダル＋オルフェーヴル＋ドリームジャーニー入学後、ターン経過でランダム発火
# スイープトウショウとカレンチャンの相互好感+50、プレイヤーへの好感も各+50、やる気は双方上昇
ws_mother:
  title: ママ
  lines:
    - 普通の朝、トレーナー室の机の上に、「sweepyちゃんへ」と書かれ、かわいいらくがきの描かれた手紙が一通増えていた
    -
    - 封筒を開けると、便箋にはたくさんの気遣いの言葉と、かわいい絵が混ざっている
    -
    - 手紙の結びは：
    - 「——あなたのママ
    - Curren（かわいい）の機伶♥」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだ！いつママが増えたのよ？！！！」
    - この手紙を見た%CHARA%は、ほとんどすぐ%CURREN%の前へ走る
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「えぇ～～、sweepyちゃん、どこが不満なの？機伶は、いいと思うよ～？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「勝手に他人のママになるやつ、どこにいるのよ？！」
    - %CHARA%はすぐ反論する
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「だって機伶、前にsweepyちゃんについて%MOHOSHOJO%の修行を終えたから……」
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「だから——今はsweepyちゃんの願いを叶えて、%SEX%のママになるの！」
    - 確信して答える
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それ、どういう理由！？」
    - 突っ込みが止まらない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだ！絶対やだ！そんな願い、したことない！そんなに世話が必要でもないし！？」
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「うう……sweepyちゃん、本当に機伶がママじゃ嫌なの？」
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - （涙目）
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから急に泣き出さないで！？？」
    - %CHARA%がどうしていいか分からないあいだに
    - %CURREN%は涙を拭う
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「こうしよう！sweepyちゃん……もし本当に機伶の代わりになるママを見つけられたら」
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「機伶、ママの枠、譲ってあげる！」
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「でも、条件が一つ——」
    - %CURREN%は三つの名前が書かれた紙を%CHARA%に渡す
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「忘れないで、なくさないでね♪」
    -
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なになに！なんで私がこの何人かを探すように手配されるのよ！」
    - %CURREN%に全部手配されたあと、道を歩きながらそう独り言を言う
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん！いいわ！%THEY%の誰か一人に一日『ママ』をやらせるだけでしょ！天才%MOHOSHOJO%、絶対できる！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！そこの！……『デュランダル』、あなたがこの名簿の最初。」
    - %CHARA%は、%YOU%に導かれて%DURANDAL%の近くへ来る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……変な話だけど。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなた。私の『ママ』、やってくれる？」
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （ママ？！ママ！？？なんで私！？）
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （私……本当にママの……素質、ある……？）
    - なぜか、%DURANDAL%の顔には半ば気まずい、半ば恥ずかしい紅潮がある……
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （だめ！この状況は絶対だめ！後輩にママ扱いされるなんて！）
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （どんなことがあっても……『騎士』じゃなきゃ……！）
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「問題ありません！後輩の頼みなら、もちろん問題ありません！」
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （ちがう！なんで受けたの！？？）
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「同意したなら……試してみる……乗せて歩いてもらう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うまくいったら、芦毛のあいつのところへ行く！問題起こすな！」
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - （うっ……なんとか挽回しないと……！）
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「はい！分かりました！今日の……『主君』！」
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - 「私、今すぐ主君を目的地へお連れします！！」
    -
    - %DURANDAL%はそう言い、%CHARA%をおんぶして、風のように走る——
    - ただ、走る方向が正しいかどうかはともかく、速さからして、まず速すぎる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！？？？？？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「や——だ～～～～～！！！」
    - %CHARA%の悲鳴が終わる前に、%DURANDAL%はうっかり石に躓き、二人揃って柔らかい芝生に倒れる
    - %CHARA%は、そのあと%DURANDAL%の名をその紙から思い切り線で消した
    -
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……『オルフェ』……ね。」
    - 道を歩きながら、名簿の次の名前に困った顔をする
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『オルフェ』に、私のママをやらせるなんて。」
    -
    - ともかく、%CHARA%を連れて%ORFEVRE%に会う
    - 背の高い金鹿毛の%UMA%がそこに立っていて、目を合わせようとしても、顔を上げないとできない
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - それから、尽きない沈黙
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「謁見するなら、余は臣に挨拶する。」
    - %ORFEVRE%は沈黙を破り、%CHARA%に片手を差し出す
    - %CHARA%は、その手を見るだけで表情が複雑になる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%、主人が戻ってこなかったら、パパとママをよろしく。」
    - それから、死を覚悟した目で、自分の手を%ORFEVRE%の手に重ねる——
    -
    - %ORFEVRE%は、ただちゃんと%CHARA%と握手した
    - だが、泣きそうになった%CHARA%は%YOU%を引っ張って振り返り、すぐ走り去る
    - %CHARA%は、%ORFEVRE%と話をする前に、%ORFEVRE%の名をその紙から消した
    -
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ。次は……この人……ああ……うん……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%に、いわゆる『ママ』をやってもらえれば……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まず……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『接触』から……」
    -
    - %CHARA%は腰の杖を手に取る
    - 重心を杖を持つ手へ傾け、片足を地面に踏んで支え、もう片方の足は爪先だけ地面につける
    - 慎重に体を寄せ、杖を伸ばす——
    -
    - つん。つん。
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「大丈夫ですよ……？」
    - こんな慎重な「探り」に、%JOURNEY%は嫌がる様子がない
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「誰かとの賭け……あるいはただの意固地なら……」
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - 「私……できる範囲で、少し付き合います。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだ！なんで芦毛のあいつと同じで、私が何考えてるか分かるみたいなの！？？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんな『ママ』、いらない！！」
    - %CHARA%は毅然と、%JOURNEY%の名をその紙から消した
    -
    -
    - とにかく、%CURREN%のところへ戻る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだやだ！なんでこんなに極端なの——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そもそも、あなたが手配した人選、一人も本当に人の世話が分かってないでしょ！？？」
    - %SEX%自身の感想を、単刀直入に出す
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「そ～んなことない！デュランダルちゃん、オルフェ、ジャーニーちゃん、競技では『すごく頼れる』でしょ？」
    - そう答えるだけだった
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「もし、%THEY%でもsweepyちゃんを満足させられないなら——」
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「それって、機伶がこの世で一番いいママだってことじゃない！？」
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「機伶、全力で甘えるのも、撫でてってお願いするのも、全然大丈夫だよ♪」
    - ママらしくないことを言う%CURREN%は、計略が当たった顔をしている
    - %CHARA%は両手の指でこめかみを突き、必死に考えている
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ちがう。まだ言い方がある。」
    - 突然確信して結論を出す
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「？」
    - 予想外の展開に、少し驚いたらしい
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……私もその紙に、自分の名前を書いた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたが『なくさないで』って言ったから。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見て。」
    - %CHARA%はその紙を掲げ、右下に、しるしとして小さく書いた名前がある
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたが説明する前に書いたの。つまり、『紙の上なら選べる』って言ったとき、もうそこにあった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから！『%CHARA%』も、
        - fontWeight: bold
          content: 選べる相手——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまり——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日から、私は、私自身のママよ！！」
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「？？？」
    -
    - acc: 1
      content: 「実は君自身も『厄介ごと』なんだよ……」
    - %YOU%は、そう%CHARA%に付け加えるだけだった。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんなこと言っちゃだめ！%CALLNAME%——！！！」
    - すぐ言い返す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とにかく、変な芦毛の%UMA%なんて、私のママにしない！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！『ママ』は今日、『子ども』にアイスを追加する、分かった？！」
    - なんで%YOU%が負担するのか……
    -
    - あとで、%CURREN%は%YOU%と%CHARA%を連れて、お詫びにスイーツを一緒に食べた


# スティルインラブ入隊、ジュニア級4月以降
# スイープトウショウとスティルインラブの相互好感+75、プレイヤーへの好感も同時に+75、やる気は双方上昇
ws_tea_party:
  title: 魔女とヴァンパイアの茶会
  lines:
    - 穏やかな午後、%SIL%と一緒に茶卓のそばに座っている
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「そういえば、トレーナーさんはどうして急に、私と一緒にお茶を飲みたいと思ったのですか？」
    -
    - acc: 1
      content: 「暇だったから……少し、何人か集まろうと思って」
    - そう答え、%SIL%と一緒に待つ
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「ああ……！こちらは……」
    - %SIL%は、少し先から歩いてくる小さな%UMA%を見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！%CALLNAME%！なんで急に午後茶に呼べるのよ！」
    - いつもの調子だ
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……『他にも人』？どういう意味？」
    - 卓のそばを見回した%CHARA%は、たまたま%SIL%の深紅の瞳と一瞬目が合う
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「す……」
    - 顔色が一気におかしくなる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ～%CALLNAME%～今日の午後茶、主人、とりあえず出なくていいかな？」
    - 突然甘え始める——
    -
    - ともかく、%SIL%と%CHARA%と一緒に茶卓のそばに座った
    - %YOU%が勤勉にお茶を淹れている以外、他の二人はなぜか微妙な沈黙に落ちている
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「……」
    - もともと高くない存在感が、自制のせいでさらに薄くなったらしい
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 少し苦い花茶を飲んでも、もう反応がない
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「あの……」
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「スイープさん……こちらのお茶、試してみますか？」
    - それでも沈黙を破る
    -
    - %SIL%は自分の好きな紅茶を入れたポットを取り上げ、%CHARA%に一杯注ぐ
    - 鮮やかな赤い液体が、赫然と%CHARA%の前に置かれる
    -
    - 少し迷った%CHARA%は、%YOU%を一目見て、また%SIL%を見る
    - ただ茶杯を取り上げ、少し口をつける
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……うっ……」
    - 多くは言わないが、表情は明らかにこの味を嫌がっている
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「ああ……！」
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「忘れていました。スイープさんは、苦いものがあまり好きではない……」
    - 少し申し訳なさそうだ
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「そういえば……ある合わせ方を、以前トレーナーさんにも紹介したことが……」
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「たぶん、スイープさんには少し良くなるかもしれません……」
    -
    - %SIL%は卓の茶箱のそばから飲み物を一瓶取り、少し傾けて、その茶杯に混ぜる
    - 最後にできた液体は、さらに深紅——
    -
    - この深紅の液体を見て、%CHARA%の顔色は少し青ざめる
    - だが%SIL%の少し怯えた、落胆した目に気づくと、小さな%UMA%はその茶杯を受け取る
    - ゆっくり、ゆっくり、一口すする
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「……少し、良くなりましたか？」
    - %SIL%は小さな声で聞く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……うん。まあまあ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「苦いけど、甘くなった……」
    - %CHARA%はそう言いながら、またそっと一口すする
    -
    - 二人の%UMA%と一緒に、ゆっくり穏やかな午後茶の時間を過ごした
    - そのあと、トレセン学園では「%MAJO%」と「妖精さん」と「物語の人」の茶会伝説が広まった
