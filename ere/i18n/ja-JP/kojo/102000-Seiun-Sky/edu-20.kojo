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
