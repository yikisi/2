# @file メジロパーマー - 日常
# @author KUN
# @author Claude (翻訳)
select:
  sync: true
  lines:
    - if: era.get('status:64:10') === 0 && era.get('status:64:39') === 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「今日の%SELF_CALL%も元気いっぱいだよ！ トレーニングはまとめて片付けちゃおう！」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「自分の走り方がどれだけ大事か、気づかせてくれたのは%CALLNAME%だよ。いつもありがとう！」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「なにかあったら%SELF_CALL%に言ってね！ あ、話がしたいだけなんだけどね～」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「最近、みんなよく話してくるんだよね。別にいいけど……っていうか、大歓迎！」
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「最近の%CALL_65%%SEX%ってさあ……ねえ、%CALLNAME%、聞いてる？」
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「やっぱり逃げる感じが一番だよ……今日も一緒に逃げる？ %CALLNAME%」
        - if: era.get('love:64') >= 50
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「%CALLNAME%、いつ空いてる？ 一緒に出かけたいなって……その……」
        - if: era.get('love:64') === 100
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「%CALLNAME%は、ずっと傍にいてくれる……だよね？」
    - if: era.get('status:64:10') > 0 || era.get('status:64:39') > 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ふ……ふ……」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「もう入んないよ……えへへ……」

select_escape:
  sync: true
  lines:
    - if: d.half_life === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ここにいるの、変？ %CALLNAME%」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%の傍以外……もう、どこへ行けばいいかわからないよ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%の傍にいられれば……」
    - if: d.half_life === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やあ、%CALLNAME%。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ごめんね、あんなことしちゃって。許されなくても、当たり前だよね……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも、やっぱり……あんたの傍にいたいんだ。」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「へえ、そういうこと？ さすが%CALLNAME%。」
      - %CHARA%は嬉しそうに答えを書き終えると、傍らの%YOU%へ親指を立てるのも忘れない。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「OKOK、わかった！」
      - %CHARA%は何かを理解したらしい。残りの問題をすらすら片付けていく。

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「よし、このまま全力で逃げるよ！」
      - %CHARA%は拳を握りしめ、気勢を込めて声を上げた。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「蹄鉄、全部打ち直してくれたんだ。ありがとう、%CALLNAME%！」
      - %CHARA%は少し驚いた顔のまま、温かい笑みを浮かべる。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あーあ、そんなに緊張しなくてもいいでしょ、トレーナー？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でもやることは全部やるよ。勝ちは逃したくないからね！」

talk:
  # STATUSNAME:10 = 昏睡
  # STATUSNAME:39 = 馬跳S
  - if: era.get('status:64:10') > 0 || era.get('status:64:39') > 0
    lines:
      - if: d.half_life === 1
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%の匂い……まだ……どこ……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「逃さないよ……ふふ～」
      - if: d.half_life === 0
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「ふ……もう入んない……」
          - if: era.get('love:64') >= 50
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「ふああ……%CALLNAME%の匂い……えへへ……」
  - if: era.get('status:64:10') === 0 && era.get('status:64:39') === 0
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「たまには、もっと遠くへ一緒に逃げてみない？」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ゴルフ、やってみる？ %SELF_CALL%が教えてあげるよ！」
      # CFLAGNAME:48 = 育成合計週
      # BASENAME:0 = 体力
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('base:64:0') < era.get('maxbase:64:0') * 0.45
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「うえ……疲れからは逃げられないね……休みたくなっちゃうよ……」
      # CFLAGNAME:40 = やる気
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:40') < 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「変だね……足、重い……」
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「準備ばっちり！ どんなトレーニングでもやるよ。だから遠慮しないで、%CALLNAME%！」
      # STATUSNAME:3 = 太り気味
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('status:64:3') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やば、食べすぎたかも……」
      # CFLAGNAME:58 = 世話
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_71%のやり方、まだ優しい気がするな～ 今度、もっと厳しくしてもらおっか？」
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:71') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_71%、あんまり本気出してない気がするんだけど、気のせい？」
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「最近の%CALL_71%……ずっと上の空なんだよね……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「あのね、%CALLNAME%、全部あんたに任せちゃだめかな？」
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:64') >= 50 && era.get('love:71') >= 50 && era.get('relation:64:71') > 225
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ、いつか%CALL_71%と一緒に走ってみない？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーニングが終わったら、三人で帰る、とか……」
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 86
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やば、%CALL_86%のトレーニング、超厳しい……！」
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('love:64') >= 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なんか最近、急に暇になっちゃったな……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%～ 学園、連れてってよ～」
      # CFLAGNAME:0 = 性別
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 59 && era.get('cflag:0:0') === 1 && era.get('cflag:59:0') !== 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_59%は相変わらずだね、男の人に弱い。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「でも安心して。必要なトレーニングはパーマーが引き受けるよ！」
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 65
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_65%ってやっぱり超——熱い！ 世話してるつもりが、逆になっちゃいそう。」
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 65 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やっぱり、%CALL_65%%SEX%は太陽だよ。まぶしすぎ……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ん？ もしかして……%CALLNAME%、焼きもち？」
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_74%%SEX%、やっぱり……頑張ってるね。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「普段ののんびりした感じと、全然違うよ」
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やっぱり%CALL_74%は純粋だね……ぼーっとしてて、走りすぎちゃうけど。」
      - if: d.half_life === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%は、パーマーを捨てないよね？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「たとえ、ほかの人ができても……」
      - if: era.get('love:64') >= 50 && era.get('love:64') < 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「たまに思うんだ。%CALLNAME%がいなかったら、今みたいに笑えてなかったなって……ないない！ 今のなし！」
      - if: era.get('love:64') >= 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ねえ、%CALLNAME%、いつかメジロ家に一緒に帰ってみない？」
      - if: era.get('love:64') === 100
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%は、ずっとパーマーの『トレーナー』でいてくれる、だよね？」
      # CFLAGNAME:81 = 妊娠段階
      - if: (era.get('cflag:64:81') >> 2) > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「最近、食欲あんまりないんだよね……あ、お腹は大丈夫だから！」
      # CFLAGNAME:66 = 募集状態
      - if: d.half_life === 0 && era.get('cflag:59:66') === 1 && era.get('cflag:0:0') === 1 && era.get('cflag:59:0') !== 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_59%、男の人はずっと苦手なんだ。迷惑かけてるね……」
      - if: d.half_life === 0 && era.get('cflag:65:66') === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALL_65%、またパーマーのわからないこと言ってる……でも全部、理解してみせるよ！」
      - if: d.half_life === 0 && era.get('cflag:74:66') === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「昔はよく%CALL_74%の髪、整えてあげてたんだよね～ 今は%CALLNAME%にお願い、かな。」

office_gift:
  - if: d.half_life === 0
    lines:
      - if: era.get('love:64') < 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「プレゼント？ パーマーに？ その……嬉しいよ！ 本当に！」
          - %CHARA%は驚いているようだった。
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ありがとう！ 大事にするから！ 超ありがとう、%CALLNAME%！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「サンキュー、この贈り物すごくいいよ！ いつかお返しするからね！」
      - if: era.get('love:64') >= 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「この贈り物、パーマーが欲しかったやつかな……ちがう！ ない！ 嬉しいよ！」
          - %CHARA%は少しもじもじしている。さっき%SEX%が何を言ったかは、聞こえていないことにする。
  - if: d.half_life === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「これ、パーマーへの贈り物……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「大事にするね……」
      - %CHARA%は腕の中の贈り物をきつく抱き、目尻に水気が浮かぶ。

office_cook:
  - if: d.half_life === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「安心して。%SELF_CALL%、料理は得意なほうだよ！」
      - %CHARA%は慣れた様子で、%YOU%へ手を振った。
  - if: d.half_life === 0 && era.get('love:64') >= 50 && era.get('love:64') < 90
    random: true
    lines:
      - 二人は気づかないうちに役割を分けて昼ごはんを作り終え、その息の合った連携にも気づいていなかった。
      - 腰を下ろして食べ始めようとして、ようやくさっきのことを思い出す。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （なんだか……夫婦みたい……気のせい？）
  - if: d.half_life === 0 && era.get('love:64') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%SELF_CALL%の腕前、%CALLNAME%は見ててね～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （%CALLNAME%の口に合うかな～）
  - if: d.half_life === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「まず%CALLNAME%の胃を掴んで、それで続けて……」
      - %YOU%には聞こえない声で、独り言をつぶやく。

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「たまには、外の世界から一緒に逃げるのもいいね……」
  - random: true
    lines:
      - 静かに並んで横になり、二人だけの静かな空間を黙って味わう
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「すやあ……」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%といる時間……安心するね」
  - if: era.get('love:64') === 100
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「すはすは……トレーナーの匂い……あっ！ なんでもない！」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ゲームは得意なほうだよ、ふんふん～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%SELF_CALL%、すぐには負けないよ。見てて、%CALLNAME%！」
      - %CHARA%は真剣に画面を見つめ、勝ち気を顔いっぱいに浮かべている。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%となら、何して遊んでもいいよ、えへへ～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「おっ、このゲーム！ 家にいた頃、よく%CALL_27%とやってたんだよね！」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あー、今は暇なのに……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、ただ%SELF_CALL%とゲームしたいだけ？」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やっぱり逃げる感じが一番！！ 絶対止まらないでよ！！」
      - 樹洞に向かって叫び終えた%CHARA%のさっぱりした笑顔を見て、%YOU%は心の中で、ずっと%SEX%を支えると決めた。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「絶対！ 勝つんだ！ レースでも、なんでも！」
      - %YOU%にはよくわからない話だったが、%CHARA%の笑顔を見たら、それ以上は考えなかった。

s_a_dating:
  - if: d.half_life === 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あの、デートの話、ここではちょっと……だよね？」
      - %CHARA%は気にしている様子なのに、繋いだ手は少しも離そうとしない。
  - if: d.half_life === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「デート、ね……」
      - %CHARA%は%YOU%の腕をきつく抱き、周囲の視線も構わず顔を肩へ寄せる。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「んふ～」

s_r_lunch:
  - if: d.check > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「普段の屋上、あんまり人いないよね。これもデートのうち、かな……えへへ。」
      - 顔を掻きながら何かつぶやいている%CHARA%を見て、%YOU%は%SEX%の弁当へタコさんウインナーを一切れよける。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「えっ！ 聞こえた！？」
      - acc: 1
        content: 「聞いてないよ」
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「えっ！ その……本当？」
          - %CHARA%は顔を真っ赤にしてうつむき、黙って自分の弁当を食べる。
      - acc: 2
        content: 「……」（恋慕+1）
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なんか言ってよ、%CALLNAME%！」
          - %CHARA%は真っ赤な顔を膨らませ、小さな拳で%YOU%の肩をばんばん叩く。
  - if: '!d.check'
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やっぱり屋上の景色、いいね！」
          - 屋上で景色を眺めながら、弁当を分け合う。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「おいしい！ %CALLNAME%の手、すごいよ！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「屋上の景色、いいでしょ？ 気分転換に、よく上がるんだよ！」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「任せて……！ 昔の%SELF_CALL%、こういうの得意だったんだよ！」
      - %CHARA%は長い袖をまくり、目の前の竿に手ぐすねを引いている。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「懐かしい～ 昔もよく、こうやって遠出してたよね～」
      - %CHARA%は竿を投げ、水面の穏やかなウキを眺めながら気ままに話し始める。

o_r_walking:
  - random: true
    lines:
      - 二人は頭を空にして、ゆっくり堤を歩く。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「たまにはゆっくりするのも、悪くないね……」
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - 人のいない堤を見て、%CHARA%は黙って%YOU%の傍へ寄る。
      - 「あの、%SELF_CALL%？」
      - 腕に貼りついた%CHARA%を見て、胸が少しざわつく。
      - %CHARA%は聞こえていないみたいに、黙ったまま手を伸ばして%YOU%の腕を抱き、体を寄せてきた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「このまま……いい？」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「おっ、パーマーのぬいぐるみ！ %CALLNAME%%CALLNAME%、やってみたい！」
      - %CHARA%はクレーンの人形を指さし、%YOU%の手を引いて小走りで向かう。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「昔、%SIBLINGS%たちとよくこれで遊んでたんだよ。%CALLNAME%、覚悟してね？」
      - 目の前のアーケードに、%CHARA%の目まで光っている。

o_s_drawing:
  - random: true
    lines:
      - 最近、抽選の催しはないみたいだ……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「大丈夫だよ。機会があったら、また来よう！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やあ、今日も抽選ないね……」

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「時々、友達とここに来るんだよ。リラックスにぴったりだからね。」
      - %CHARA%の顔はいつもの気安い笑顔で、それにつられて%YOU%も肩の力が抜けた。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「音楽って、やっぱり元気出るね、%CALLNAME%！」
      - %CHARA%は嬉しそうに、音楽に合わせて跳ねている。

o_s_movie:
  - if: era.get('cflag:71:66') !== 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あ、%CALL_71%が勧めてた映画だ！」
  - if: era.get('cflag:71:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あ、%CALL_71%が勧めてた映画だよ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_71%と一緒に来られなかったのは残念だね……今度、三人で来ない？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「久々に映画見るね。何見よっか……」
      - %CHARA%は映画館のポスターを、上下じっくり眺めている。
  - if: era.get('love:64') >= 25 && era.get('love:64') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あのね、%CALLNAME%……恋愛もの、好き？」
      - %CHARA%は少し堅くなっていて、何かを期待しているようだった。
  - if: era.get('love:64') >= 50 && era.get('love:64') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「二人で映画、とか、なんか別の意味ある気がするね……」
      - %CHARA%は傍らでしばらくつぶやいていたが、%YOU%と繋いだ手はむしろ強く握る。

o_c_pray:
  - トレセン近くの神社は規模こそ小さいが、%UMA%の間ではかなり名が通っている。
  - 出走前にわざわざ足を運び、少しの期待を乗せておみくじを引く%UMA%も多い。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「たまに運試しするのも、悪くないね。」
  - %CHARA%は逃げるのが性分だ。何から逃げたい気分のときは、その流れで%YOU%の手を引いて運を試しに来る。
  - ここに来ると、いつも肩が軽くなる。%SEX%にとっては、これも逃げの一環なのだろう。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「なんだか……ここにいると、いろいろ忘れられるんだよね。」
  - %CHARA%は頭を抱えたまま、力の抜けた大らかな足取りで%YOU%の傍を歩く。
  - 神社にはほとんど人がいない。微風が周囲の枝を撫で、顔に当たる感触が心地よい。
  - 目の前の籤筒を見て、%CHARA%は黙って傍らの%YOU%をつつくと、どうでもいいような顔をする。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「トレーナー、引く？ 大吉かもよ。」
  - 少し冗談めかして言い、前方を指す。
  - acc: 1
    content: 「これはパーマーの運だろ。勝手に手出しできないよ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「パーマーの運、ね……じゃあ引くよ！」
  - %CHARA%は%YOU%に頷き、振り返って神社へ手を合わせる。
  - 目を閉じてしばらくしてから、籤を取る。
  - if: d.dice <= 0.8
    lines:
      - 紙にははっきり吉の字。今日の好運を告げているみたいだ。
      - acc: 1
        content: 「運が来たみたいだな～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うんうん、今日は本当に運がいいね。」
      - 手の籤を置いて振り返り、%YOU%の手を掴む。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%にも、ありがとう……だって、私たちの運でしょ。」
      - その嬉しそうな顔を見ているうち、%YOU%も知らない間に%CHARA%と一緒に笑っていた。
  - if: d.dice > 0.8
    lines:
      - 籤を開いても、大吉は出てこない。
      - 紙の凶を見て、%CHARA%は気まずそうに%YOU%の目を避ける。
      - acc: 1
        content: 「運は保存されるんだ。明日は好運になるよ。」
      - %CHARA%は少し落ちて%YOU%のほうを向き、視線を逸らす。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「どうしよう、今日のこれ……」
      - 少し緊張しているらしく、指が落ち着かない。
      - 不安そうな%CHARA%を見て、%YOU%は手を上げ、%SEX%の柔らかい髪をそっと撫でる。
      - acc: 1
        content: 「大丈夫だ。」
      - %CHARA%は何も言わない。跳ねる耳だけが気持ちを知らせている。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ありがとう……」
      - 声は小さいのに、広い神社でははっきり聞こえた。

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一緒に何か食べない？ おいしい店、いっぱい知ってるよ！」
      - %CHARA%は勢いよく%YOU%の手を引き、小走りで向かう。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふんふん～ パーマーさん、美味しいもの見つけるのは得意なんだよ」
      - %CHARA%は腰に手を当て、二人の前で湯気を立てる定食を誇らしげに見る。
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - 店に座って互いの顔を見ると、二人ともぷっと吹き出した。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やっぱり、こういうの向いてないね、私たち。」
      - 笑いを抑えながら、二人は箸を取る。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「デートなのに、ここ選ぶのは失敗だったかも……」
      - acc: 1
        content: 「どうした？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なんでもない！ ただ……」
      - %YOU%の顔を見て、%CHARA%の少し高ぶった気持ちがまた落ち着く。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「食べ終わったら、もう少し付き合ってくれる？ %CALLNAME%」

o_s_dating:
  - if: d.half_life === 0
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ね、ねえ%CALLNAME%、ここでデートって……」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%と一緒だと、恥ずかしさとか感じないんだよね……」
          - %CHARA%は%YOU%の傍に寄り、少し首を傾けて%YOU%の肩に凭れる。
      - if: era.get('cflag:64:0') !== 1
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ほかの人から見たら、私たち普通の恋人でしょ。」
          - 傍に貼りつき、%YOU%にしか聞こえない声で、そっと耳を噛む。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ちょっとぐらい、やりすぎても……誰にもバレないよね？」
          - 両手が腕をきつく掴み、%CHARA%の柔らかい胸に押しつけられる。
  - if: d.half_life === 1
    lines:
      - なぜか、%CHARA%は%YOU%の手をきつく握ったまま、離す気配がない。
      - 柔らかい感触を味わい続けていて、嫌な気持ちは全くない。
      - 周囲の通行人がかなり減ってから、握っていた手が少し緩む。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なんでかわからないけど……離したら、%CALLNAME%が傍からいなくなりそうで……」
      - ほかの人には聞こえない声で、%YOU%の肩に凭れて小さく言う。

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「えへへ、これ%CALLNAME%に似合うよ！」
      - %CHARA%は%YOU%の体にしばらく当ててみて、悪戯っぽい笑顔で何かを掛ける。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、これ見て。超おいしいよ！」
      - なぜか、モールの近くに来て最初にやることは屋台探しだった。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、何か欲しいものある？ パーマーからも贈れるよ！」
      - %CHARA%は少し興奮して、%YOU%の前で跳ねるように見ている。
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そういえば、%CALLNAME%の家、これ足りてないでしょ？ 買ってあげるよ。」
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%の家にこれがあったら、遊びに行っていい？」
      - %CHARA%の目は光っていて、門限のことは完全に頭にないようだった。

good_night_normal:
  sync: true
  lines:
    # STATUSNAME:10 = 昏睡
    - if: era.get('status:0:10') === 0 && era.get('status:64:10') === 0 && era.get('status:64:39') === 0
      lines:
        - random: true
          lines:
            - %CHARA%は軽やかな足取りで、寮まで送ってくれた%YOU%へ手を振る。
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「明日も会えるよね？ またね！」
        - random: true
          lines:
            - 忙しい一日のあと、同じように倒れそうな%CHARA%を寮まで送り届ける。
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ん……ちょっと頑張りすぎたかも、えへへ～」
    - if: era.get('status:0:10') === 0 && (era.get('status:64:10') > 0 || era.get('status:64:39') > 0)
      lines:
        - 眠っているメジロパーマーを、とても自分から起こす気にはなれず、苦労して寮まで送り届けるしかなかった。
        - このタイミングで悪さしたら、%SEX%は目を覚ますだろうか？
    - if: era.get('status:0:10') > 0
      lines:
        - 眠りに落ちた%YOU%は、朦朧の中で%CHARA%が手を出そうとして迷っている姿を見た気がした。最後に残ったのは、親しみと優しさの混ざった別れの声だけ。

good_night_sex:
  - %CHARA%を寮まで送ったあと、袖をそっと引かれる。
  - %YOU%の後ろに立つ%CHARA%は少し呂律が怪しいのに、最後の声だけははっきり聞こえる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「外泊とかは、パーマーがなんとかするから……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「パーマー……%CALLNAME%の傍に、逃げていい？」
  - acc: 1
    content: 「いいよ。」
    lines:
      - 外泊届はもうどうでもいい。今はもっと大事なことがある……
      - 腕に張りついて離さない%CHARA%を、家まで連れて帰ることだ。
  - acc: 2
    content: 「そんなにわがまま言うな。」
    lines:
      - if: d.check === 2
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「でも……」
          - 客観的に見て、%UMA%の力は一般人よりずっと強い……
          - だから今の%YOU%を掴むのも、造作もない。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やらないのに、どうしてわがままなの？」
      - if: d.check !== 2
        lines:
          - %CHARA%の表情は期待から陰へ落ち、落胆を下がった前髪の奥へしまう。
          - 素直に振り返って寮へ入るのに、入口でもう一度こっそり%YOU%の姿を見てから、うつむいて角の向こうへ消えた。

load_talk:
  # CFLAGNAME:81 = 妊娠段階
  # CFLAGNAME:57 = 拡張変数
  # EXPNAME:117 = 出産回数
  - if: (era.get('cflag:64:81') !== 2 && !era.get('cflag:64:57').report) || era.get('exp:64:117') > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そうなんだ……大丈夫だよ……%SELF_CALL%、なんでもわかるから。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「きっとパーマーのせいだよね……あはは……」
      - color: %COLOR%
        fontSize: 0.75rem
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わかってるよ……」

tree_hollow_snails:
  title: カタツムリになっちゃう///
  lines:
    # 条件：愛欲以上、アイテムにアナルプラグがあり、アナル中出し後、中庭へ行くと発生
    - 夕方、%YOU%はパーマーの手を引いて学園を散歩している。%SEX%の歩幅はひどく堅く、%YOU%に導かれてようやく踏み出せる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？ そろそろ……んっ」
    -
    - %YOU%が中指で%TEEN%のスカートの中の金属を弾くと、%SEX%の言葉はすぐ小さな喘ぎに切れ、すくめた肩が微かに抽る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%の悪趣味……もう、後ろが……変だよ」
    -
    - 周囲に人がいないのを確かめてから、%YOU%は後ろからパーマーのスカートを捲る。白い厚い臀の間に、プラグの尻尾の金属がはっきり見える
    - 数言でパーマーを説得し、精液を直腸に封じて外へ出した。今、%SEX%は後悔しているだろうか
    - 尻穴を塞がれたパーマーは、居場所のない子犬みたいだ。尻尾は腿の間に挟まり、抗えない%SEX%は%YOU%の言いなりになるしかない……
    -
    - acc: 1
      content: プラグを掴んで弄る
      lines:
        - パーマーを木陰へ引き、%YOU%はプラグの一端を掴んで前後に動かし、直腸の精液を掻き混ぜて「ぐちゅぐちゅ」と音を立てる
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……だめ、聞こえちゃう……んっ」
        -
        - パーマーは口を押さえ、もう一方の手で%YOU%の服をきつく掴む。抗っているのか、羞恥の中で快感を受け入れているのか、わからない
        - %SEX%の尻尾は無意識に払うように%YOU%の腕をくすぐるが、それ以外は%YOU%に密着して、後ろの秘密を隠している
        - パーマーの腰と尻が無意識に捻れ、速度が上がるにつれ、隠しきれない荒い鼻息と小さな喘ぎが聞こえる
        -
        - 「ん……ん……」
    - if: era.get('cflag:64:0') !== 1
      acc: 2
      content: 股間を撫でる
      lines:
        - パーマーと壁際の陰を並んで歩き、%YOU%は手をスカートの下へ入れ、%SEX%の滑らかで締まった尻を抓む
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「触らないでよ……見られちゃう」
        -
        - パーマーの苦情は聞き流し、%YOU%は%SEX%の股に沿ってゆっくり深く入り、指が温かく濡れた秘縫の下に触れるまで進む
        - 股下に纏わりついた蜜液を頼りに、%YOU%は中指を%TEEN%の秘穴へ滑らせ、肉壁を弄る
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あっ……んん……」
        -
        - 漏れた嬌声とともに、パーマーはついに歩くのを諦め、%YOU%に凭れて絶えず震え、汁が腿を伝って一滴ずつ落ちる
        - 快感に屈したパーマーはもう周囲を警戒しない。余裕がないのか、露出の興奮に沈んでいるのか
    - divider: true
    - %TEEN%の体の変化を感じ取り、絶頂が近いところで%YOU%は手を止める。パーマーの腰が苦悶するように捻れる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「んむ……%CALLNAME%？」
    -
    - パーマーの潤んだ瞳を見て、%YOU%はプラグの尻尾を摘まみ、一気に引き抜く——
    - 「ぽん！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うおっ！……」
    -
    - パーマーの瞳が一気に見開かれ、決壊した快感で%SEX%はバランスを取るために%YOU%をきつく抱き、矜持を失った喘ぎが喉から漏れる
    -
    - 一緒に漏れたものは、ほかにもあるだろうか？
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だめ……%CALLNAME%……お願い」
    -
    - しばらくして、少し落ち着いたパーマーを%YOU%が押しのけようとすると、咽びを含んだ哀願が聞こえる。頭を振って拒んでいる
    - %SEX%を壁伝いに歩かせ、%YOU%は少し距離を取って後ろの光景を眺める
    - %TEEN%は力の抜けた両脚を引きずり、揺れるスカートの間から乳白色の液柱が連なって落ち、地面に軌跡を残す……

# 育成中バージョン
cl_palace:
  title: 殿堂入り週
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はやく！ トレーナー！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日は殿堂入り週だよ！ 遅れたら席ないよ！」
    - パーマーは会場へ小走りで向かい、時おり振り返って%YOU%を見る。焦って歩幅を落とす
    - 何度も迷ったあと、パーマーは%YOU%の腕を掴んで一気に会場へ走ることにした
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「間に合った！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちょうど席あった。超ラッキー！」
    - 息を切らした%YOU%を引っ張って座らせ、期待の目で壇上の先輩を見る
    - 先輩が過去の話と経験を語るのを、パーマーは真剣に聞き、無意識に期待の笑みを浮かべる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いいね……レース」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、私たちもこうなれるよね？」
    - acc: 1
      content: 「当たり前だ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ、もっと、も——っと頑張らないとね！ 本気で！」
    - パーマーは再び壇上を見る。瞳に憧れの星が浮かんでいる

# 育成中バージョン
cl_fans_in_edu:
  title: ファン感謝祭
  lines:
    - ファン感謝祭当日の出し物として、現役選手のパーマーにも当然、出走の招待が来ていた
    - 当日の客席は、各選手のファンで埋まり、登場する%UMA%一人ひとりに歓声が飛ぶ
    - あくまでエキシビションだが……場にいる面々のほとんどは、エキシビションのつもりで走る気はない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やば、これ適当に走れないやつだ」
    - 場に立ってようやく気づく。隣の気配が、少しおかしい
    - 周囲の%UMA%はすでに仮設のスタート前で構えている。パーマーは少し遅れて理解した
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんな、本気……？」
    - 口には出さないが、周囲の様子は想像どおりだった
    - パーマーは最前方へ飛び出し、いつものように逃げの位置を守る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「パーマーまで本気になっちゃったよ！」
    - divider: true
      content: エキシビション終了後
    - エキシビションが終わり、急に本気を出して準備不足だったパーマーは、コース脇に座って扇いでいる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「疲れた。天皇賞のトレーニングよりきついよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、さっきのレース見た？ どうだった？」
    - acc: 1
      content: 「パーマーらしい走りだったよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そう？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ、ファンも楽しんでくれたかな。えへへ……」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「パーマーさん、とてもきれいな逃げでした」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、ブルボンさん！」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「ああいう逃げ方もあるのですね。勉強になりました」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「正直、いつもの走り方だよ……それに、ああやって走ると疲れるんだよ」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「そうなのですか。了解しました。覚えておきます」
    - ブルボンは軽く一礼し、感謝祭のステージへ向かう
    - 反対側の声が大きくなっていく。もうファン交流の時間に入ったらしい
    - パーマーは体に付いた草を払い、傍らの%YOU%へ手を伸ばす
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「マックイーン%THEY%、まだ待ってるかも……ううん、私たちを待ってるよ」
    - 手を伸ばしたパーマーは、一片の名残もない笑顔を見せた

# 育成済みバージョン
cl_fans:
  title: ファン感謝祭
  lines:
    - ファン感謝祭の当日、パーマーは%YOU%についてトレセンへ戻ってきた
    - 普段もいろいろな理由でトレセンには戻るが、ファン感謝祭の当日は別だ
    - すでにドリームカップへ転戦した%UMA%も、引退した%UMA%も、ファンはこの日を待っている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんなにファン、まだいるんだ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トゥインクル・シリーズからはもう離れたのに。えへへ」
    - 目の前の熱いファンを見て、パーマーは少し照れくさそうに顔を掻く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そういえば、一走してくれって招待も来てるんだよ」
    - if: (era.get('cflag:64:81') >> 4) === 0
      acc: 1
      content: 「来たんだし、走ってみたら？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そうだね……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「出るなら、%SELF_CALL%の逃げ方で行くよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、先に勝負服に着替えてくるね」
        - パーマーは別の方向へ小走りし、あっという間に姿が見えなくなる
        - 煙のように消えたパーマーが走っていった方向を見て、%YOU%は信頼を抱いたまま客席へ向かう
        - divider: true
          content: 仮設コース
        - color: %COLOR%
          content: 急遽用意されたコースに、久しぶりの旧友たちが顔を揃える
        - color: %COLOR%
          content: パーマーは見慣れた勝負服を着て、スタートでウォームアップしている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「しばらくレース、走ってなかったな……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも、自分の走り方は一回も忘れてないよ！」
        - color: %COLOR%
          content: かつてのレースと同じスタイルのまま、最前方で逃げる
        - color: %COLOR%
          content: 体力は本格化の頃には及ばず、少しずつ速度が落ち始めている
        - color: %COLOR%
          content: レースに刺激的な展開はなかった。ファンを喜ばせるための小レースだからだ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふ……やっぱり逃げてるとき、楽しいね」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーの言ったとおりだよ。走りたいときに走る自由が、一番！」
        - ファン「パーマー！ パーマー！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おっ、みんな！」
        - color: %COLOR%
          content: 小さく揺れる耳が周囲の声から自分の名前を拾い、客席へ手を振る
        - color: %COLOR%
          content: 客席で同じように声を上げている%YOU%も、もちろんその中にいる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー……やっぱりいるね」
        - color: %COLOR%
          content: パーマーが客席を見る目に、もともとの気持ちへ少しの軽やかさが乗る
        - if: era.get('love:64') >= 50
          lines:
            - color: %COLOR%
              content: 場に立ったまま、遠くのトレーナーへ勝利のジェスチャーを送る。気づきにくいほど、目つきが少し違う
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「やっぱり……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「やっぱりパーマーの『トレーナー』は、あんただけだよ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「いつだって支えてくれる、あんた」
            - color: %COLOR%
              content: 終わった余興レースに選手を縛るものはなく、周囲の%UMA%は知り合いと話し始めている
            - color: %COLOR%
              content: パーマーは客席の脇まで歩き、トレーナーへ手を伸ばす
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナー、一緒に帰らない？」
    - acc: 2
      content: 「もう一線を退いたんだ。後輩を見ていこう」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん……それもそうだね」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「パーマーの逃げ、すぐ崩れるペースの原因になっちゃうしね」
        - パーマーはいつもの逃げをネタに、ははと笑う
        - divider: true
          content: 仮設コース
        - 自分は出ないつもりでも、先輩の姿を見るのは悪くない
        - 余興レースが始まり、周囲のファンは久しぶりに見る選手へ声援を送り始める
        - %YOU%とパーマーは並んで立ち、コース上の姿を見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「すごい、状態あんなにいいんだ」
        - acc: 1
          content: 「パーマーだって負けてない」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「冗談でしょ、もう場を離れたんだよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……でもトレーナーが見たいなら、やってみてもいいよ？」
        - if: era.get('love:64') >= 75
          lines:
            - パーマーの顔が少し赤く、肩が%YOU%に凭れる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「見たいなら、どこでもいいよ」
            - 周囲の観客はコースの選手を見ていて、%YOU%のほうを見ている人はいない
            - 空いている手が直感のまま、そっとパーマーの指と組み合う
            - 柔らかい指は驚いたように強張り、戸惑うが、もう一方の手の主を見てから少しずつ緩む
            - レースは最後のコーナーへ入り、傍らの音浪がだんだん大きく、あらゆる声を覆いそうだ
            - acc: 1
              content: パーマーの耳を軽く舐める
            - acc: 2
              content: パーマーの髪に顔を埋めて匂いを吸う
            - acc: 3
              content: こっそりパーマーの尻を撫でる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「やっ！」
            - %YOU%の悪戯にパーマーが短く声を上げるが、周囲の音が大きすぎて誰にも気づかれない
            - パーマーは少し怒った目を向けるが、何もしない
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「もう……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「したいなら、帰ってからにしてよ」

# 育成中限定
cl_temple_fair:
  title: 縁日
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最近のトレーナー、ずっとパーマーに付き合ってくれてるよね……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これじゃトレーナー自身の時間、全然ないよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、そろそろ縁日だ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんとき、トレーナーをリラックスさせてあげよう」
    - divider: true
      content: 縁日当日
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、今日って縁日だよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お店、たくさん出てるみたい。一緒に行く？」
    - パーマーは何も知らないふりをして、%YOU%へ手を伸ばす
    - 後ろの少し暗い空の下に祭りの灯りが点き、騒がしい声が聞こえてくる
    - acc: 1
      content: 「いいよ、行こう」（好感+10、恋慕+2）
      lines:
        - %YOU%はパーマーの差し出した手を取り、足を揃えて縁日の中へ入る
        - パーマーは普段のようにあちこち歩かず、ずっと%YOU%の傍についてくる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、好きなものある？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日は%SELF_CALL%が、ずっと付いてるからね！」
        - acc: 1
          content: 「あそこの屋台、よさそうだ」（体力+100）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「屋台？ よし、行ってみよう、トレーナー！」
            - パーマーは迷わず%YOU%の手を引いて屋台へ向かい、目の前の食べ物を見る
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナー、何食べる？ おごるよ！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ふんふん、お小遣い、ちゃんと残してあるんだから」
            - acc: 1
              content: 「パーマーも食べなよ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「いいいい、これはトレーナーにおごる分」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「パーマーが食べたかったら、また買えばいいし……」
            - 話しているパーマーに、あまり食欲は見えない。ただ前方を見ている
            - 左右の屋台を眺め、次に行きたい場所を探す
            - acc: 1
              content: 食べ物を差し出す
            - %YOU%は手の屋台料理を上げ、パーマーの前へ持っていく
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あむ！ ……ん？」
            - パーマーは反射で口を開けて一口食べ、満足した顔になってから、遅れて薄く赤くなる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「もう！ トレーナー！」
            - 怒ったふりをして、%YOU%の腕を軽く拳で叩く
        - acc: 2
          content: 「あそこの射的、面白そうだ」（スキルPt+35）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「えっ、射的！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「よし、%SELF_CALL%が一発で……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「店長！ やるよ！」
            - パーマーは少し興奮して空気銃を受け取り、%YOU%と一本ずつ手にする
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ふんふん、トレーナー、あれ欲しい？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「撃ち落としたら、あげるよ」
            - 自信ありげに言いながら、手の空気銃を構える
            - 耳が器用に二度跳ね、自信満々に引き金を引く
            - divider: true
              content: 一通り撃ち終わったあと
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ごめん、当たらなかった……」
            - パーマーの耳が一気にだらしなく垂れ、しょんぼりと目を細める
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「全然当たらないなんて……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ごめんね、トレーナー……」
            - 落ち込むパーマーを見て、%YOU%は手の空気銃を構える
            - 乾いた打撃音とともに、弾が景品の風船を撃ち抜く
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「おお！ すごいよトレーナー！」
            - パーマーの目が光り、店長が差し出すぬいぐるみを見る
            - acc: 1
              content: 「パーマーが持ってて」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「えっ！ トレーナーの景品でしょ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「パーマーがもらっちゃだめだよ……」
            - acc: 1
              content: 「俺はもう十分嬉しい」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「えっ？」
            - acc: 1
              content: 「だからパーマーにも、もっと笑ってほしいんだ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「そういうこと？」
            - 少し困惑した顔に、しばらくして薄い赤が浮かび、すぐまた消える
            - 両手で気まずそうにぬいぐるみを受け取り、ゆっくり抱きしめる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あの……ありがとう」
            - 顔をふわふわのぬいぐるみに埋め、明るい目だけ出して前方の%YOU%を見る
            - ほかの人には聞こえない声量で、もう一度小さく言う
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ありがとう、トレーナー」
        - divider: true
          content: 縁日のあと
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「楽しかったね。お腹もいっぱい、満足！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも最後は、逆に世話されちゃったな」
        - パーマーは手の収穫を抱き、海辺を歩く
        - 歩きながら、傍らの%YOU%へ肩をそっと寄せる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「最初は、トレーナーに付き合うつもりだったんだよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やりすぎちゃったし、ぐちゃぐちゃだった。えへへ」
        - acc: 1
          content: 「昔のことをまだ気にしてるのか？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん？ ないよ、昔の話とは関係ない。ただ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「担当の%UMA%を支えるのが、トレーナーの仕事でしょ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「パーマーも、トレーナーを支える感じ、試してみたかった。それだけ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だってトレーナー、ずっと頑張ってるじゃん！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……それとも、変？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やあ、恥ずかしい……」
        - パーマーの顔は気まずい笑顔のまま、隠そうともしていない
        - acc: 1
          content: 「そんなに気にしなくていい」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でもそれ、トレーナーの負担でしょ？」
        - acc: 1
          content: 「パーマーを支えるのは、嬉しいよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あれ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちょっと待って……」
        - パーマーは足を止め、腕の戦利品で顔を隠す
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （トレーナーはトレーナーの仕事を、ちゃんと、頑張ってやってる）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （担当の%UMA%がいるから、仕事を頑張れる……）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （だから、トレーナーとして……）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （パーマーの、トレーナーとして？）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （えっ？）
        - 「パーマーのトレーナーになれて、よかった」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （ええっ！？）
        - 考えたあと、パーマーの目がだんだん混乱していく
        - 慌てて腕のものをきつく抱いて赤い顔を隠し、小さく首を振って熱を散らそうとする
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーはトレーナーの仕事をした。でも、トレーナーだから嬉しいんじゃない」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「パーマーのトレーナーだから、嬉しい……？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「パーマーのトレーナーだから、嬉しいんだよね？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うわわ……」
        - 逃げる気持ちをいったん堪え、顔を上げてちゃんと前方を見る
        - 振り返ってこちらを見る%YOU%に、パーマーは小さく息を吸う
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……トレーナー」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「頑張るよ。走って、勝って、本当に」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「パーマー自身の……私たちの走り方で、みんなに見せる！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いつかトレーナーに、メジロパーマーと組めてよかったって、思ってもらうから！」
        - acc: 1
          content: 「俺もだ」（好感+10）
        - acc: 2
          content: 「その日を待ってる」（恋慕+2）
        - acc: 3
          content: 「ずっとそう思ってるよ、パーマー」
          # 性欲上昇
        - パーマーの表情が少しぼんやりして、すぐまた覆いの後ろへ引っ込む
        - %YOU%には見えないところで、パーマーは目を閉じて、聞いた言葉を心から噛みしめる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うわああああ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うちのトレーナー、ほんと……すごいよ……」
        - もう一度手の袋を下ろし、羞恥で赤い笑顔を見せる
    - acc: 2
      content: 「いや、パスで」

cl_halloween:
  title: ハロウィン
  lines:
    - あちこちに飾り付けのされたトレセンは、もうすっかりハロウィンの気配に包まれている
    - 前触れもなく、ノックの音がした
    - トレーナーとしての責務を果たすつもりで、%YOU%は扉を開ける
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お菓子くれなきゃいたずらしちゃうよ、トレーナー！」
    - パーマーは扉の外に立ち、小悪魔のふりをしている
    - 頭飾りの角が淡い蛍光を帯び、暗い通路でよく目立つ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「気に入った、トレーナー？ ヘリオスと一緒に選んだんだよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、天使っぽいほうの衣装も、もう一着選んであるんだよ」
    - パーマーはもとの悪戯っぽい仕草をしまい、少し意地悪く笑って、驚いたふりをする%YOU%を見る
    - 窓の外のハロウィンはすでに事務室へ入り込んでいて、仕事や別のことを続けるのは野暮だ
    - 空気を読むのが得意なパーマーなら、現状はすぐにわかっただろう
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「外、まだイベントいっぱいあるよ。一緒に見に行く？」
    - acc: 1
      content: 「いいよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やった、行こう！」
    - 自然に%YOU%の手を掴み、一気に外へ走り出す
    - その一日は楽しかったが、結末として体力でパーマーに敵わない%YOU%は、翌日きちんと寝て過ごすことになった

cl_christmas:
  title: クリスマス
  lines:
    - クリスマス当日、%YOU%の事務室の扉が前触れもなく叩かれる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっほー！ トレーナー！」
    - パーマーは突然入ってきて、仕事中の%YOU%の前まで来る
    - 窓の外の祝祭がパーマーの声とともに事務室へ入り、同時に扉の外から小さな星が転がり込んできた
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、時間だよ！」
    - ヘリオスがクリスマスツリーを抱えて、跳ねるように事務室へ入る
    - 乾いた鈴の音が響き、真面目な事務室にクリスマス……というよりパーティーの気配が溢れる
    - パーティーの空気作りが得意なヘリオスが友達を連れて入り、事務室を会場に変える
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「やっほー！ クリスマスパーティー始まるよ！」
    - color: %COLOR_66%
      content:
        - fontWeight: bold
          content: %TURBO%
        - 「うひょー！」
    - color: %COLOR_60%
      content:
        - fontWeight: bold
          content: %NATURE%
        - 「えへへ、お邪魔しまーす～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、あんたも一緒に！」
    - 周囲の騒ぎの中、パーマーの手が%YOU%へ伸びてくる
    - acc: 1
      content: 「はいはい」
    - 少し生返事で、パーマーの手を取って立ち上がる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日はクリスマスだよ。一緒に遊ぼう」
    - まだ疲れの残る%YOU%を引っ張り起こし、ツリーの傍へ連れていく
    - color: %COLOR_62%
      content:
        - fontWeight: bold
          content: %TANNHAUSER%
        - 「賑やかですわね～」
    - divider: true
      content: 時が流れて
    - どれだけ経ったかわからない。大人の%YOU%には、もう若者たちに付き合い続ける余裕がなかった
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、外で空気吸わない？」
    - %YOU%の気持ちを先読みしたみたいに、ちょうどいいタイミングで後ろから肩を叩く
    - トレセンを出て、クリスマスの気配で溢れた通りを歩く
    - 周囲の店には星と鈴、赤と白のリボンが掛かっている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まぁ、こうなるのはわかってたけど」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもトレーナーも、楽しかったでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たまにはみんなでゲームとか」
    - パーマーは軽く顔を掻き、冬の微風の中で小さな赤みが浮かぶ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、今日のパーティー好きだった？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんな、すごく準備したんだよ」
    - acc: 1
      content: 「うん、楽しかった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うんうん！ トレーナーが楽しければいいんだよ！」
    - 返事をもらったパーマーの顔が自然に緩み、歩く歩幅まで軽くなる
    - if: era.get('love:64') >= 75
      lines:
        - acc: 1
          content: 「じゃあ、パーマーは？ 楽しかった？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「えっ？」
        - 動きが無意識に止まり、少し驚いた顔になる。自分が固まっていると気づいてから、小走りで%YOU%の歩幅に追いつく
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やあ、なんていうか」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーが楽しそうなの見て、パーマーも……けっこう、嬉しかった」
        - 言葉には少し間があるのに、迷いはない
        - %YOU%を見る目にも、少し複雑な色が混ざる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （まだ気にかけてくれる……やっぱりトレーナー……）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （やっぱりパーマー……トレーナーのことはもう……）
        - acc: 1
          content: 「パーマー？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大丈夫だよ、トレーナー。ちょっと考えてただけ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （言ったら……トレーナー、どう思うんだろ）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （だめだよパーマー！ 言わなきゃ、先に進めないでしょ！）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーね、パーマー……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あんたが楽しそうだと、パーマーも嬉しくなるみたい」
        - acc: 1
          content: 「そ、そうなのか？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もう、トレーナーといる時間、どんどん増えてるよね」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日はパーティーなのに、また二人きり」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーといる時間、もうみんなといる時間より多いよ」
        - パーマーは空を見上げ、時おり傍らを盗み見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「このままだと……トレーナーなしじゃ、やっていけなくなるかも」
        - acc: 1
          content: 「え？ 俺？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、ちょっと……変？」
        - acc: 1
          content: 「それでもいいよ」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「いいの？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「つまり……」
            - 驚きと喜びを瞳に乗せて、%YOU%の同じように照れた顔を見る
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「じゃあ、じゃあお邪魔するよ！」
          # 馬跳
        - acc: 2
          content: 「ああ、変だな」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「やっぱり変？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナーが嫌なら……今のなしで。あはは……」
            - パーマーは頭を掻き、気にしていないふりをする
            - 取り繕いの姿勢では隠しきれず、変に見えない程度にしかできない
            - %UMA%の落胆は、耳が垂れた瞬間にもう全部出ている
            - acc: 1
              content: 「自分だって、すごく楽しそうに笑ってたぞ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「パーマーも、すごく楽しかった……」
            - 少し赤い目が止まり、驚いたように振り返って傍らの%YOU%を見る
            - 喉が跡を残さないように二度動き、何か言おうとして言えない
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - （パーマーも楽しそうに笑ってた……えっ？）
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - （それって……ええっ？）
            - acc: 1
              content: 「パーマーが楽しそうなのを見て、俺も嬉しいんだ」
            - その言葉を聞いたとき、パーマーの顔がまたほどける
            - 口角がもう一度上がり、目つきもかなり澄む
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - （つまり、変じゃないんだ……）
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ありがとう、トレーナー」
            - %YOU%が次の言葉を考えているうちに、傍らのパーマーが自分から寄ってくる
            - 顔の傍へ貼りつき、ふわりと小さな唇の跡を残す
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「クリスマスプレゼント……これも、一つだよね。えへへ」
            - 軽く指を一本立てて、唇に当てる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ほかの人には言わないでね。それと」
            - 手を下ろし、もう一度まっすぐに立ち、%YOU%の両目を見る
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「メリークリスマス、トレーナー」

cl_christmas_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「なんか……急ぎすぎちゃったかも……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私たち、こうなっちゃった……ちょっとやりすぎ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも、でもトレーナーが悪いとは、思ってないよ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あっ！ パーマー、何やってるの！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「とにかく！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「好き！ %YOURNAME%が、好き！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……あと、ちょっと遅いけど」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「メリークリスマス！ トレーナー」

# 情愛の檻（恋慕＞74、通常）
basement_end:
  title: また明日
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー？ 今日、調子どう？」
    - 周囲の景色はもう見えない。黒い壁だけがある
    - 柔らかい大きなベッドに横になり、見慣れた天井を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、トレーナー、今は喋れないよね」
    - 薄暗い環境に、もう誰もここへは来ない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明日も絶対会いに来るからね、トレーナー……」
    - パーマーは立ち上がり、ベッドの%YOU%を見て、晴れやかな笑顔を見せる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今は先に寝よう……パーマーのトレーナー」

# 金銭奴隷（恋慕＞74）
slave_end:
  title: 迷いの終点
  lines:
    - %CHARA%は戸口に立ち、薄暗い中の%YOU%を見る
    - 部屋の中で、見つめ合っているのは二人だけ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、最初からこうしたかったわけじゃないよ。あんたが選んだんだ」
    - 扉が閉まり、部屋は闇に沈む
    - カーテンの隙間から一条の陽が差し、%YOU%の顔を照らす
    - パーマーはしゃがみ、%YOU%の口に詰まった口枷を外し、ゆっくり顔を撫でる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お金がないなら、パーマーのところに来ればいいんだよ、トレーナー」
    - 札を手に、%YOU%の顔を軽く叩く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「パーマーのところに、だけだよ」
