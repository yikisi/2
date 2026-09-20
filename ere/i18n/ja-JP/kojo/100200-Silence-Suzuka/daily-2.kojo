# @file サイレンススズカ - 日常
# @author 牛蛙煲
# @author Claude (翻訳)
select:
  sync: true
  lines:
    # STATUSNAME:10 = 昏睡
    # STATUSNAME:39 = ウマ跳びS
    - if: era.get('status:2:10') === 0 && era.get('status:2:39') === 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%、準備運動はきちんと済ませています。いつでも始められますよ」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%、先に二周ほど走っておきましょうか」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「%CALLNAME%、今日はご機嫌が良さそうですね。このまま、穏やかでいてくださると嬉しいです」
    - if: era.get('status:2:10') > 0 || era.get('status:2:39') > 0
      lines:
        - 「あの、スズカ……？」
        - %YOU% はそっとスズカを起こそうとしたが、深く眠っているようだった。

good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%CALLNAME%が、私の走りを信じてくださるなら……私は、自信を持って貫きます」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「苦手なことも……%CALLNAME%がいれば、乗り越えられるはずです」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「一番前の景色は、譲れない。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「朝の風は、今日も気持ちがいいですね……%CALLNAME%、そろそろ始めましょうか」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「朝ごはんは、済ませています。きちんとエネルギーを摂らないと、トレーニングになりませんから」
    # STATUSNAME:1 = 夜ふかし気味
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%CALLNAME%、申し訳ありません……昨日のトレーニングのあと、夜の風が気持ちよくて……少し、走りすぎてしまいました」
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%CALL_1%が雪景色のパズルをくださって……面白くて、朝までやってしまいました。本当に、すみません……」
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「昨日は、時間どおりにベッドへ入ったのですが……今日のメニューが頭から離れなくて。少し、興奮してしまって……眠れませんでした」

good_night:
  sync: true
  lines:
    - if: era.get('status:2:10') > 0 || era.get('status:2:39') > 0
      lines:
        - if: era.get('status:2:39') === 0
          content: 「あの、スズカ……？」
        - %YOU% はそっとスズカを起こそうとしたが、深く眠っているようだった。
        - だから、自らスズカを抱えて寮の下まで運んだ。
        - acc: 1
          content: 「今回も、お願いします……」
        - %YOU% はスズカを%SEX%の寮長へ預け、部屋へ戻るところを見送った。
        - ため息をつく。次は、強度の加減に気をつけなければ。
    - if: era.get('status:2:10') === 0 && era.get('status:2:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「ここまで送ってくださって、ありがとうございます、%CALLNAME%。また明日」
        - %YOU% はスズカを寮の下まで送り、%CHARA% は微笑んで礼を述べた。
        - %YOU% も手を振って応えた。
        - スズカが寮の奥へ消えるまで見送ってから、踵を返した。

good_night_sex:
  - トレーニングのあと、%YOU% はいつもどおり、スズカを寮の下まで送ろうとした。
  - ところがスズカは、すぐにはついて来なかった。両腕を開き、%YOU% をきつく抱きしめた。
  - color: %COLOR%
    content:
      - fontSize: bold
        content: サイレンススズカ
      - 「%CALLNAME%、まだ、お話ししたいことがたくさんあります。こんなに早く、お別れしたくなくて……」
  - スズカは頬を、まるごと %YOU% の胸へ埋めた。普段は静かな尻尾が、そっと %YOU% の脛に絡みついている。
  - %YOU% は背中を撫で、しばらく考えた。
  - acc: 1
    key: sex
    content: 「わかった。もう少し、傍にいる」
    lines:
      - %YOU% はそっと顎を上げ、熱を帯びた瞳のなかで、%SEX%の唇に触れた。
      - どれほど経ったかわからないあと、ようやく唇が、名残を残して離れた。
      - 「スズカ、場所を変えよう。ここは、少し向かない」
      - スズカはまだしっかりと抱きついたまま、小さく頷いた。
  - acc: 2
    content: 「もう遅い。明日のトレーニングのためにも、休んだ方がいい」
    lines:
      - if: d.check !== 2
        lines:
          - 拒む言葉を聞くと、スズカはすぐに腕を解いた。そして、そっと胸を拳で叩いた。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: サイレンススズカ
              - 「%CALLNAME%は、少し……鈍感です……」
          - そう言い残し、小さく鼻を鳴らして、背を向けて去っていく。
          - %YOU% は後頭部を掻き、急いで後を追った。
      - if: d.check === 2
        lines:
          - 拒む言葉を聞いても、スズカはかえって強く抱きついた。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: サイレンススズカ
              - 「今日は、そう簡単には逃しませんよ……%CALLNAME%」

talk:
  # CFLAGNAME:40 = やる気
  - if: era.get('cflag:2:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「あの……もう、二周ほど走りたくて。始めても、いいでしょうか」
  - if: era.get('cflag:2:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、今のトレーニングは、とても身になるはずです」
  - if: era.get('cflag:2:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、今は調子がいいです。今日は、どんなメニューでしょうか」
  - if: era.get('cflag:2:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今日は、どんなコースを走るのでしょう。楽しみです……」
  - if: era.get('cflag:2:48') < 3 * 48 && era.get('cflag:2:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「あの、今日の予定は、何でしょうか」
  - if: era.get('cflag:2:48') < 3 * 48 && era.get('cflag:2:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今日も、いつもどおり、励みます」
  - if: era.get('cflag:2:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「……力が、入りません。昨日、走りすぎたのでしょうか……」
  - if: era.get('cflag:2:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「少し、つらいです……でも、まだ諦められません」
  - if: era.get('cflag:2:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「全然、気持ちが乗らなくて……」
  - if: era.get('cflag:2:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「体が、重いです……大丈夫、でしょうか」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「昨日、%CALL_56%が大きな金色の鯛を、お守りだと言ってくださったんです。どこに置けばいいのか……困ってしまって」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALL_10%に、短距離のコツを伺ったんです。%SEX%は『Enjoy spirit desu⭐』と……何を仰っているのか、わかりませんでした」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALL_18%は、意外と面白い方なんです。昨日、%CALL_1%の真似をして、%SEX%を先輩呼びしたら……ふふ」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「街は、高い建物ばかりで。ときどき、子どものころみたいに、広い野原を走りたくなります」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「思い出が増えるたびに、目に映る景色も、豊かになっていくんです。……今は、%CALLNAME%も、そのなかにいます」
  # FLAGNAME:2 = 現在の月
  - if: era.get('flag:2') >= 3 && era.get('flag:2') <= 5
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今日の朝のランニングで、道端の小さな花と新芽を見ました。気持ちが、少し軽くなりました」
  - if: era.get('flag:2') >= 6 && era.get('flag:2') <= 8
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「夏の朝は、まだ涼しいのですが……走り終わると、髪に虫がついていて……困ります」
  - if: era.get('flag:2') >= 9 && era.get('flag:2') <= 11
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「秋の風は、ほんとうに涼しいですね。この風のなかを走るのは、とてもいいものです」
  - if: era.get('flag:2') >= 12 || era.get('flag:2') <= 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「来る途中、凍った湖を見かけて……上を走ってみたくなってしまいました。危ないのは、わかっています。思うだけ、ですから」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「私に、贈り物ですか……ありがとうございます、%CALLNAME%」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ありがとうございます。大切に、しまっておきます」

out_church:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「意外と、賑やかなんですね。みなさん、叶えたい願いが、あるのでしょう」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「きちんと祈れば、願いは叶うはずです」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「釣りは、じっと待つものです。走るのとは正反対なのに……どちらも、忍耐が要りますね」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、見てください。大きな魚です」

o_r_walk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「この感じ……とても、いいですね。次も、一緒に歩いていただけたら嬉しいです」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「あの、%CALLNAME%。少しだけ、走ってきてもいいでしょうか。ここで、待っていていただけますか」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%と歩くのは……幸せです」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「意外と、面白いですね」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「先輩方が、勝ったあとのライブの練習に使っていると聞きました」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、あのぬいぐるみ……取っていただけますか」

o_s_drawing:
  - 商店街でくじ引きをしていた。スズカが少し興味を示しているのを見て、%YOU% は先に受け取っていた券を%SEX%へ渡した。
  - スズカは小さく礼を言い、少し浮き足立って前へ出た。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: サイレンススズカ
          - 「……ふふ。賞品は、ニンジンがたくさんです」
      - スズカは、目を細めて籤を開き、%YOU% に見せた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: サイレンススズカ
          - 「%CALLNAME%に少し、スペちゃんに少し……」
      - スズカの機嫌は、とても良さそうだった。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: サイレンススズカ
          - 「……外れでした。ティッシュ一袋、です……」
      - スズカは少し寂しそうに、賞品をしまった。

o_s_ktv:
  - %YOU% は %CHARA% をカラオケへ連れていった。
  - 適当に数フレーズ歌ったあと、決まり悪くマイクを渡す。傍では、スズカが微笑んで待っていた。
  - content:
      - fontWeight: bold
        content: %CHARA%
      - 「ひとり 見上げた夜空 ただ 静かな世界～」
  - %YOU% は、いつのまにかその声へ沈んでいった。

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「いい映画でした。次も、一緒に見に来たいです」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ふふ……%CALLNAME%がホラーを選ぶなんて。お化けを見たときの顔も、面白かったです」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「好きな映画、ですか。……%CALLNAME%が好きなものなら、私は、好きです」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「前に、スペちゃんが連れてきてくれたんです。%SEX%は、美味しいお店を見つけるのが上手ですね」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ここのお料理が美味しくて……つい、食べすぎてしまいました。%CALLNAME%、学園までは、ゆっくり歩きませんか」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「えっ、どうして箸が止まっているか、ですか。……%CALLNAME%を見ていたら、夢中になってしまって。ふふ」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「……まだ、少し慣れません」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%は、行きたい場所がありますか。一緒に、行きましょう」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「次も、今日のように、一緒に出られればいいな」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、手を握っても、いいですか。こうして……安心します」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、このまま、一緒に歩いてください。これからも、傍にいてくださいね」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「どれも、良さそうで……決められません」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今までは、買うものだけを取りに来ていました。今日みたいに、ゆっくり見たことは、なかったです」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「あの景色は、絶対に譲れない。絶対に」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「次は、もっと速く。今の私より、前へ。あの景色のために。そして……%CALLNAME%のために……」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「変な感じです……%CALLNAME%、顔、赤いでしょうか。熱いみたいで……」
  - random: true
    lines:
      - スズカは %YOU% の腕にしっかりしがみつき、顔を肩の後ろに隠した。

s_r_lunch:
  - %YOU% と %CHARA% は屋上で弁当を交換することにしていた。
  - スズカの弁当を受け取った %YOU% は、色も香りも整った料理に目を奪われ、つい食べ進めてしまう。
  - スズカは %YOU% の弁当を丁寧に味わいながら、時おり、その食べっぷりを微笑ましそうに見つめていた。
  - 食べ終えると、%YOU% は少し決まり悪そうに弁当箱を返した。

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%のお料理は……とても、美味しいです」
      - スズカは、%YOU% の腕を静かに褒めた。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「私を入れる、とは……あの、私はニンジンではありません」
      - %YOU% が%SEX%の緑の耳カバーとオレンジの長い髪をニンジンに喩えたことに、スズカは抗議した。
  - if: era.get('love:2') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%と一緒にお料理していると……なんだか、温かくて。夫婦みたい、です……」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、ここが、よくわからなくて……もう一度、教えていただけますか」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「では、続きをよろしくお願いします」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: サイレンススズカ
          - 「はい。今回も、勝ちます」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: サイレンススズカ
          - 「安心してください。勝利を、%CALLNAME%のもとへ持ち帰ります」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: サイレンススズカ
          - 「一番前の景色は、譲れない。」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「昨日は、きちんと眠っています。……お昼休みは……%CALLNAME%がそう仰るなら、少しだけ」
      - 勧められて、仕方なく横になったスズカは、五分も経たずに眠っていた。
      - 穏やかな寝顔を見て、%YOU% は自分の上着を、そっと%SEX%にかけた。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今日は、少し疲れています……お昼を休ませてくださって、ありがとうございます」
      - 礼を述べると、スズカは目を閉じた。
      - すぐに %SEX% は頰を赤くして、また目を開ける。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「あの、%CALLNAME%も、お休みになったほうが……い、いえ、見られていると恥ずかしい、というわけでは……」
  - if: era.get('love:2') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「やはり、%CALLNAME%のところで休む方が、落ち着きます……」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、お疲れさまです。一緒に休みませんか。太ももなら、お貸しできます」
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%……抱きしめて、いただけますか」
      - 両腕を伸ばして抱擁を求めるスズカに、拒む気は起きなかった。一歩前へ出て、そっと%SEX%を抱く。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%は、温かいです……今日も、一緒に休みましょう」
      - こうして、%YOU% とスズカは抱き合ったまま、昼休みを過ごした。

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「……少し、難しいです。でも、%CALLNAME%と力を合わせれば、きっと」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「クリア、しました。%CALLNAME%は、すごいです」
      - 真摯な褒め言葉に、%YOU% の方が少し照れた。

valentine:
  - ある日、%YOU% が机で何かを書いていると、トレーナー室の戸が叩かれた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%、いらっしゃいますか」
  - スズカの声だ。
  - %YOU% は立ち上がり、戸を開けた。
  - acc: 1
    content: 「スズカ、どうした」
  - 両手を後ろに隠し、戸惑う %YOU% を見て、口元がわずかに上がる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……ハッピーバレンタインです」
  - それから、後ろ手に隠していた弁当箱を差し出した。
  - 包みを静かに開けると、きれいに作られたいちご大福が二つ、%YOU% の目の前に現れた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%の好きな甘いものが、わからなくて……最後は、私の好きないちご大福にしました。喜んでいただけたら、嬉しいです」
  - しばらくして、今日がバレンタインだと気づいた。
  - ぼんやりしている顔を見て、スズカはさらに嬉しそうに笑った。%SEX%は、いちご大福を無理にでも %YOU% の手へ乗せる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ここで、召し上がってください。お味も、伺いたいので」
  - そう言って、自分で椅子を運び、腰を下ろすと、首をかしげて %YOU% を見た。
  - acc: 1
    content: 「じゃあ、もらうよ。ありがとう、スズカ」
  - 担当%UMA%に見つめられながらの食事は、落ち着かない。だから、言われるままに甘いものを口にした。
  - 気づかないうちに、一つ目のいちご大福は、きれいになくなっていた。
  - 無意識に二つ目へ手を伸ばして、ようやく気づく。
  - 走りだけでなく、菓子作りにも、相当な腕があるらしい。
  - 顎を支えて %YOU% を見つめるスズカと、目の前のもう一つを見て、決めた。
  - acc: 1
    content: 「スズカも、自分の味を見てみないか」
    lines:
      - 甘いものは、分けた方がいい。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「えっ……大丈夫です。作ったのは、%CALLNAME%に差し上げるためですから」
      - スズカは、少し慌てて辞退した。
      - acc: 1
        content: 「はい、スズカ。口を開けて」
      - 多くは言わず、いちご大福を手に、ゆっくりと近づいた。
      - 逃げられないと悟ると、小さく口を開け、差し出された大福に歯を立てた。
      - acc: 1
        content: 「どうだ。自分の腕は、やっぱりすごいだろう」
      - スズカは顔をそむけ、わざと相手にしなかった。
      - 見ると、%YOU% は大福を回して、またスズカの前へ持っていく。
      - そうしてしばらくふざけ合い、結局%SEX%にも、一つ丸ごと食べさせた。
  - acc: 2
    content: 美味すぎる。もう一口。
    lines:
      - スズカの菓子が忘れられず、二つ目もいただくことにした。
      - 一口目から、やはりすばらしい。
      - 二つ目も長くは残らず、きれいにお腹へ収まった。
      - 二つ続けて食べても、まだ足りない気がして、つい傍のスズカへ目が向く。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふふ。%CALLNAME%の食べ方も、可愛いです」
      - 視線に気づいて、微笑みながら言った。
      - %YOU% は少し照れて笑った。普段は、こんな食べ方はしない。
  - 弁当箱を整え、スズカへ返した。
  - acc: 1
    content: 「スズカの腕はすごいな。今まで、知らなかった」
  - 名残を残して、スズカを見る。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「そんなにお腹を空かせた目で見ないでください。私は、いちご大福ではありません」
  - 怒ったふりをして、頰を膨らませる。
  - 「つまりだな。この腕があるなら、スズカと一緒に暮らせる人は、相当幸せだろう」
  - 冗談のつもりだった。なのに、スズカの顔が、どんどん赤くなっていく。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「そんな冗談は、だめです。これ以上は、本当に怒ります」
  - また、照れた顔を見られた。代償は、%SEX%をなだめるのにずいぶん時間がかかったことだ。

halloween:
  - 今日はハロウィン。妖怪や怪物の夜だ。
  - トレーナー室へ来る途中、奇妙な姿を何体も見た。なかには、危うく跳ね上がりそうなものもあった。
  - それでも無事に部屋へ着き、次のメニューを組もうとする。
  - 組む、と言っても、もう頭はここになかった。
  - 引き出しのなかには、ある%UMA%のために用意した上質な菓子の袋がある。あとは、%SEX%が自ら届けてくれればいい……
  - 突然、戸が叩かれた。驚いて、危うくペンを落とすところだった。
  - 呼吸を整え、期待を込めて前へ出て、勢いよく戸を開ける——
  - acc: 1
    content: 「どうぞ、スズ……」
  - だが、外にいたのはスズカではなかった。
  - content:
      - fontWeight: bold
        content: %UMA%A
      - 「お菓子をくれなきゃ、いたずらしちゃうぞ！」
  - 何かの怪物に扮した、可愛い%UMA%だ。
  - 一瞬ぼんやりしてから、ようやく微笑みを作り、引き出しから用意していたばら売りの菓子を取り出した。
  - かなりの量を籠へ入れ、%SEX%は嬉しそうに一礼すると、隣のトレーナーの戸を叩きに走っていった。
  - 長い息を吐き、席へ戻る。
  - すぐに、またノックがした。
  - content:
      - fontWeight: bold
        content: %UMA%B
      - 「お菓子をくれなきゃ、いたずらしちゃうぞ！」
  - またスズカではない。菓子を渡しながら、かなり落胆していた。
  - ハロウィンの夜は、だんだん終わりに近づく。部屋には何度も%UMA%が訪れた。いちばん待っていた相手だけが、まだ来ない。
  - 壁の時計の針が十二時に近づくのを見て、ため息をつき、片付けて出ようとした。
  - そのとき、また戸が叩かれた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%、いらっしゃい……っ、直接お呼びしては、いけなかった……」
  - 胸が軽くなり、急いで戸を開けた。
  - 外に立っていたのは、魔法使いに扮したスズカだった。
  - 頰は赤く、息は少し荒い。%YOU% は仕方なく、首を振った。
  - acc: 1
    content: 「当ててみようか。また、走ってきたんだろ」
  - スズカは一瞬固まり、頰がさらに赤くなる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「すみません、%CALLNAME%。まっすぐ来るつもりだったのに……気づいたら、走りすぎてしまって」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ、そうだ。あの……お菓子をくれなきゃ、いたずらしちゃう……？」
  - %CHARA% は、ここで本題を思い出したらしい。
  - 苦笑しながら引き出しを開け、用意していた上質な菓子の袋を取り出し、スズカへ渡した。
  - 今年のハロウィンも、妙な空気のなかで過ぎていった。

forbid_running:
  title: 走るのは禁止です！
  lines:
    - acc: 1
      content: 「遅すぎる！ もう、許せる時間じゃない！」
    - %YOU% は、頭を下げているスズカを、かなり厳しく責めた。
    - もう深夜だ。額には薄い汗が残っている。明らかに、今しがた走って戻ってきた顔だった。
    - acc: 1
      content: 「コンビニへ行くと言って、何時間も帰ってこないのは、誰だ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すみません……今夜の月が、きれいすぎて……我慢できなくて」
    - acc: 1
      content: 「だめだ。重罪、許せん。三日間、走るのは禁止だ。家で、しっかり反省しろ」
    - 雷に打たれたように、スズカはその場へ力なく座り込んだ。
    - すぐに、%SEX%は飛びついて %YOU% の脚に抱きつく。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だめです……それでは、生きていけません——」
    - 悲嘆するスズカには構わず、%SEX%に脚を抱かれたまま、一歩ずつ寝室へ進んだ。
    - スズカは素直に腕を解き、軽く身支度をして寝間着に着替える。%YOU% が横になってから、傍へ滑り込んできた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの……」
    - acc: 1
      content: 「だめだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まだ、何も言っていません」
    - acc: 1
      content: 「だめなものはだめだ、スズカ。本当に、心配なんだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……わかりました。大人しくしていますから、%CALLNAME%、怒らないでください……」
    - 分が悪いとわかっているスズカは、横を向いて %YOU% に抱きつき、一緒に眠っていった。
    - divider: true
      content: 翌日
      position: left
    - 家へ入った瞬間、%YOU% は跳ね上がった。
    - 目の前に、ニンジンハンバーグの山があった。
    - acc: 1
      content: 「スズカ？ これは、全部お前が作ったのか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい。……暇だったので、気がついたら、たくさん作ってしまって」
    - divider: true
      content: 翌々日
      position: left
    - スズカが携帯を抱え、反時計回りにぐるぐる歩いている。
    - 画面には、トレーニング場の写真が映っていた。
    - acc: 1
      content: 「スズカ、何をしている」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーニング場の写真を見ながら歩いていれば……走っているつもりになれるかと」
    - 頭を掻く。この想像力を、褒めるべきかどうかはわからなかった。
    - divider: true
      content: そのまた翌日
      position: left
    - 家へ戻っても、スズカの姿がない。
    - 我慢できずに走っているのかと思ったが、寝室で、まだ眠っているスズカを見つけた。
    - acc: 1
      content: 「……一日中、寝ていたのか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「眠っていれば、一日は早く過ぎますから……」
    - 返す言葉が、見つからなかった。
    - divider: true
    - 三日は、もうすぐ終わる。寝室の戸口から、時計の前に座るスズカを、少し不思議そうに見た。
    - acc: 1
      content: 「おい、スズカ。こんな時間まで、起きているのか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あと一分五十八……一分五十七……」
    - 針がある時刻を指した瞬間、スズカはぱっと振り返った。目は高揚していて、そっと玄関の方へ体をずらしている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三日、経ちました。……少しだけ、走ってもいいでしょうか」
    - acc: 1
      content: 「……あと三日、伸ばそうか」
    - 言い終わるか終わらないかのうちに、スズカは玄関の傍から素早く離れた。
    - それから、%SEX%はそっと %YOU% に抱きついた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%のために、三日も我慢したんです。……ご褒美、いただけませんか」
    - 胸に寄りかかり、少し赤くなって %YOU% を見上げる。
    - acc: 1
      key: sex
      content: 「わかった。我慢したことは、褒めてやる」
      lines:
        - それから、%YOU% はスズカを抱えたまま、寝室へ入った。
    - acc: 2
      content: 「だめだ。罰なのに、褒美まで欲しがるな」
      lines:
        - それを聞くと、スズカはすぐに腕のなかから抜け出した。
        - そして、もがく %YOU% を担ぎ上げると、寝室へと消えた。
