# @file メジロパーマー - 地下室
# @author KUN
# @author Claude (翻訳)
welcome:
  sync: true
  lines:
    - random: true
      lines:
        - %YOU%が目を覚ますと、冷たい閉じた空間にいた。
        - あたりを見回すと、見慣れた笑顔がそこにあった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%～ 調子はどう～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あんたのために特別に用意したんだよ。びっくりした？」
    - random: true
      lines:
        - 薄暗い小部屋で、眠り足りない%YOU%が頭を押さえて起き上がる。
        - 誰もいない空間。%YOU%以外の気配は、ないように見えた。
        - ベッドから降りて歩こうとしたとき、聞き慣れた声がした。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%～ ただいま～」
        - 角から顔を出した%CHARA%が、微笑みながら%YOU%を見ている。

flatter:
  - if: (t = era.get('relation:64:0')) < 0
    lines:
      - 自分の相棒は陽だまりみたいな子だ。ちゃんと話せば、素直にお願いすれば……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「パーマーでも、%CALLNAME%の嘘くらいはわかるよ。」
      - %CHARA%はためらいなく%YOU%の声を遮り、穏やかな笑みを浮かべた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そんな%CALLNAME%には、ちょっとしたお仕置きが必要かもね。」
      - %YOU%がまだ何か言おうとする前に、%CHARA%は唇の動きを止めた。
      - 迷う様子もなく%YOU%をあのベッドへ連れ戻し、静かに隣へ座る。
      - 静かすぎて、もう言葉を出せなかった。
  - if: t >= 0 && (t = (t < era.get('love:64') * (era.get('flag:极端行为限制') || 1)))
    lines:
      - 言葉で%CHARA%と和解しようとして、唇で声を封じられた。
      - %YOU%の呼吸が追いつかなくなってから、%CHARA%は満足げに口を離し、長い銀糸を引いた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「だめだよ。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%は、そんなこと言っちゃだめなんだから。」
      - 力の抜けた%YOU%は再び小ベッドに押し倒され、上から見下ろす%CHARA%を見上げる。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%がそういうこと言うの、好きじゃないんだよね。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今は全部、%CALLNAME%のせいだよ。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「パーマーと一緒に、ずっとここにいよう。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～」
  - if: '!t'
    lines:
      - 日の差さない部屋で、%YOU%はまだ口先で何かを突破しようとしている。
      - だが今回、%CHARA%は%YOU%の傍らに座ったまま、静かに聞いていた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……%CALLNAME%が言わなくても、わかってるよ。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「パーマーは臆病なだけ……ごめんね。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%は、本当は何も悪くないんだよ。」
      - うつむいたまま、ゆっくり%YOU%の傍へ寄り、肩に凭れる。
      - 不安そうに手を伸ばし、垂れた%YOU%の掌をそっと抱いた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「せめて……もう少しだけ、わがままさせて。」
      - 指が掌に潜り、十指を組む。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「もう少しだけ、わがままさせて。それでいいから。」

battle_escape:
  - 短い騒ぎのあと、小部屋はまた静かになった。
  - %CHARA%は%YOU%の前に静かに倒れ、動かない。
  - あとは目の前の鍵を開ければ、戻れる。
  - （……これでいいのか。%CHARA%を、ここに置いていくのか……）
  - そう自分に問いかけて、胸が痛んだ%YOU%は、それでも振り返ることを選んだ。
  - 一緒に逃げるって決めた相棒なら、一緒に帰るべきだ。
  - 残った力を振り絞って身を起こし、昏倒した%CHARA%を抱き上げ、すでに掘り出してあった鍵を手に取る。
  - 一緒に帰ろう。

battle_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「それはだめだよ、%CALLNAME%。」
  - 悪巧みの手を造作もなく掴み、逆に%YOU%を壁際へ押し倒す。
  - %CHARA%は上から%YOU%の表情を眺め、曖昧な笑みを浮かべた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「パーマーの好きな%CALLNAME%は、こんなことしないよね。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「戻って、もう一回ゆっくりお話しよう。」
  - 薄暗い灯りの下、青い瞳がかすかに蛍光を帯びている。

battle_prison:
  - 冷たい鍵が、乾いた音を立てた。
  - 震える%YOU%の両肩を、後ろから力強い手がそっと握る。意外な温もりが伝わる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%～ なにやってるの～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「謝ってくれるなら、見なかったことにしてあげるよ～」
  - さらっとした数言。だが%YOU%は何も言えず、ぼんやりと%CHARA%にベッドまで連れていかれた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%はここにいて、パーマーを待ってればいいんだよ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ほかのことは、どうでもいいんだよね。」

find_escape:
  sync: true
  lines:
    - %YOU%の努力で錠前にようやく緩みが出た。もうひと押し、と思ったとき……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ、わざわざここで帰りを待っててくれたの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さすがパーマーの%CALLNAME%！」
    - 微笑みながら%YOU%の手から道具を受け取り、また振り返って扉を閉めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「出迎えるなら、ここでいいんだよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%が鍵を開けちゃったら、パーマー、困るんだよね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わかるよね、%CALLNAME%？」

back_basement:
  sync: true
  lines:
    - if: d.start
      lines:
        - if: era.get('base:0:体力') < 100
          lines:
            - 疲れた目を開けると、いつだって明るかった、あのきれいな青い瞳と重なった。
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「んふ～」
        - if: era.get('base:0:体力') >= 100
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「おっ、起きたんだ。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「%CALLNAME%の寝顔、まだ足りないのに。もう……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「でもここにいれば、何度だって%CALLNAME%の笑顔が見られる……だよね？」
    - if: '!d.start'
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ただいま～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おっ、%CALLNAME%～ 今日もいい子だね～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「安心して。ずっと傍にいるから。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だってここは……パーマーの、逃げのゴールだもん」

start_fixing:
  - 休んでいる%YOU%の耳に、戸口のほうで金属が床へ落ちる音がした。
  - 何か察して見に行こうとした%YOU%は、ちょうど%CHARA%と鉢合わせた。
  - 大門は元どおり無事で、罠と錠前はむしろ前より整っていた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%？ なにしに来たの？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ああ、パーマーに会いに来たんだよね？」
  - わかっていて聞くように、%CHARA%は半ば強引に%YOU%を部屋へ押し戻した。
  - %YOU%に静かに、と手で合図して、笑った。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ごめんね、起こしちゃった。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あとでまた会いに行くから、%CALLNAME%。」

ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……そうだね。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「やっぱり、%CALLNAME%もずっとここにいるのは嫌なんだよね。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ごめんね。%CALLNAME%を、ずっとここに置いて。」
  - %YOU%の前で動かず立ち、うつむいて揺れている。次の瞬間にも倒れそうだった。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でもせめて……今だけは、わがままさせて。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ちょっとだけでいいから。ちょっとだけで。」
  - よろよろと前へ出て、%YOU%の胸に倒れ込む。服の下から、かすかな熱が伝わってくる。
  - 腰に腕を回し、きつく抱きしめる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「これでいい……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「こうしてれば……もう少しだけでいいから……」
  - どれだけ経ったか、ようやく抱きしめていた手がほどける。
  - 顔を赤くした%CHARA%が笑顔を作って、頬の水滴を拭った。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ねえ、%CALLNAME%。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「外に出ても……まだ、相棒でいられるよね。」
  - %CHARA%が錠前を開け、明るい音がした。
  - 扉を背にして、%YOU%へ手を伸ばす。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「行こう……%CALLNAME%。」

ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「まだだめだよ。」
  - 頼んでいる%YOU%に、%CHARA%は淡く笑うだけで、そっと顔を撫でた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%がここにいないと。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「パーマー、寂しすぎるんだよね。」
  - 身を起こして%YOU%の耳元に寄り、耳たぶへゆっくり舌を這わせる。
  - %YOU%が身震いするのを感じて、%CHARA%は甘く笑った。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「パーマーの傍にいればいいよ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」

ask_time:
  - %YOU%が試しに%CHARA%へ時間を訊ねると、平坦な笑みが返ってきただけだった。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「時間なら、まだたくさんあるよ。」
