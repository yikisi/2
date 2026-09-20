# @file メジロブライト - 日常
# @author KUN
select:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日は、どんなトレーニングをいたしましょう～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふん～ふんふん～ あら、%CALLNAME%、聞こえていらっしゃいましたの？」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%がそばにいてくださるなら、どれだけ待っていても平気ですわ～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「自分の歩調を守れば、それでいいのですわ～ 私も、%CALLNAME%も～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「体も心も、『早く走りなさい～』なんて言ってくるのです」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「焦るのは好きではありませんけれど、いつでも始められますわよ～」
    # STATUSNAME:1 = 徹夜
    - if: era.get('status:74:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あら、もうトレーニングの時間ですの？ 申し訳ございません、昨日はよく眠れなくて……」
    - if: era.get('love:74') >= 49
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いつでも、のんびりお散歩したいですわ～ もちろん、そのときは%CALLNAME%も一緒ですのよ～」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、すごいですわ！ すぐにわかってしまわれるなんて～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「さすがは%CALLNAME%ですわ～」
      - 宿題を一気に書き終えた%CHARA%は、気づかないうちに %YOU% のそばへ寄っていた。

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「お料理は、あまり得意ではありませんの…… いつものんびりしてしまいますから～」
      - 見た目のよい料理を前に、%CHARA%の頬にふわりと赤みが差す。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ありがとうございます、%CALLNAME%～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「せっかくこんなにのんびりできるのですもの、お茶会にいたしましょう～」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「レースの準備…… がんばりますわ！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「蹄鉄でしたら、私、自分で打てますのよ」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「のんびり～と叩くのは、得意ですもの」
  - if: era.get('love:74') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「勝ちますわよ、%CALLNAME%～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「メジロの名のためにも、そしてあなたのためにも～」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一緒におやすみ、ですの？ ええ～」
      - 遠慮ひとつない%CHARA%は、綿菓子みたいに %YOU% のそばへくっつく。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一緒に休みましょう、%CALLNAME%～」
      - %YOU% の手を抱えて、拒めない柔らかさで仕事を中断させる。
  - if: era.get('love:74') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ん？ もうお休みですの？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それとも…… 休みは、ただの口実、ですわ～？」
      - 別の意味を含んだ瞳で、そっと %YOU% の手を取り、十指を絡める。
      - 「冗談はよしてくれ」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「はい～」

talk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「大丈夫ですわよ、%CALLNAME%」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「継続したトレーニングは、得意なほうですの～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「準備はできましたわ～ %CALLNAME%、今日はどういたしましょう？」
  # STATUSNAME:1 = 徹夜
  - if: era.get('status:74:1') > 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふあぁ…… 今朝は急いで起きてしまって、少し眠いですわ」
  # CFLAGNAME:40 = やる気
  - if: era.get('cflag:74:40') > 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「調子はよろしいですわ～ いつでも始められますわよ～」
  - if: era.get('cflag:74:40') < 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なんだか、そわそわしますわ……」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ゲームの中でも%CALLNAME%と一緒、悪くありませんわ～」
      - 画面のタイムオーバーを見て、%CHARA%はぼんやりと笑った。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ゲームは、あまり得意ではありませんの……」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「私への贈り物、ですの？ ありがとうございます！ %CALLNAME%～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「贈り物ですわね～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「これでは、%CALLNAME%にお返しをしなくてはなりませんわ～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ありがとう、%CALLNAME%～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「いつか、た～っぷりお返しいたしますわよ～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わぁ～ 私への贈り物ですわ～」

s_a_tree_hollow:
  # CFLAGNAME:48 = 育成回合計時
  # 95 + 16: 天春に相当する育成ターン数
  - if: era.get('cflag:74:48') < 95 + 16
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ええ…… ここで申し上げたいことは、特にありませんわ…… 天皇賞のことは、もう決まっていますもの」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふわぁ～ 今日もお疲れさまですわ、木のうろさん～」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「みなさんに見られてしまいますわよ、%CALLNAME%？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも、嫌いではありませんわ～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%とのデート…… ふふ」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こうしていれば、今日ものんびり過ごせますわね」
  - if: era.get('love:74') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「デート…… ふあぁ……？」

s_r_lunch:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～ お昼ですわよ～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「のんびり作れるお料理なら、私にもできますわよ～」

o_r_walk:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ここで一緒に、のんびりお散歩～ ふふ～」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%と一緒に、のんびり釣り～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「釣り～ 釣り～」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ゲー……セン、ですの？ あまり得意ではありませんわ～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふわぁ～ %CALLNAME%、すごいですわ！」

o_s_drawing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「くじ引きですわね～ 昔は引くたびにみんなに囲まれて、少し懐かしいですわ～」
  - if: era.get('love:74') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、くじを引きますの？ 欲しい贈り物なら、私が差し上げてもよろしいのに……」

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「お歌ですと、あまりレパートリーがありませんわ～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふふ、%CALLNAME%お一人のための Live、ですの？」
  - if: era.get('love:74') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、恋の歌をお聞きになったら、何かおっしゃってくださいますかしら？」

o_s_cinema:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「昔、怖い映画を見たとき、お姉さま方は私が一番ゆっくり叫ぶと仰っていましたわ」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「リズムのゆっくりした映画って、ありますかしら～」
  - if: era.get('love:74') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「恋愛映画…… いかがです？」

out_church:
  - あてもなく二人で歩いていると、ちょうどトレセンの裏山の小道の前に出た。
  - 上の神社を見て、%CHARA%と %YOU% は、ついでも縁だと山頂へ向かった。
  - acc: 1
    content: 「君が引いてくれ。」
  - 鈴の音が広い社殿に響くなか、%CHARA%は籤筒から気ままに一枚を取り出す。
  - if: d.dice
    lines:
      - 小さな「吉」の字を見て、%CHARA%は少しはしゃいで振り返り、手の籤を %YOU% に渡した。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今日の運勢、とてもよろしいですわ、%CALLNAME%！」
  - if: "!d.dice"
    lines:
      - 紙を開いて不吉な文句を見ると、%CHARA%はすぐ続きを開く手を止めた。
      - %YOU% から見えない角度で、そっと折りたたんでポケットにしまう。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……吉、ですわよ、%CALLNAME%～」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「何をいただきましょう～ %CALLNAME%の好きなもの、ありますの～」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ここでデートなら、トレセンのみなさんには見つかりませんわね？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「誰かが見ていますわよ、%CALLNAME%～」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「何か買います？ 私から%CALLNAME%に、小さな贈り物を差し上げてもよろしいですわよ～」

good_night:
  sync: true
  lines:
    # STATUSNAME:10 = 昏睡
    # STATUSNAME:39 = 馬跳びS
    - if: era.get('status:0:10') === 0 && era.get('status:74:10') === 0 && era.get('status:74:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%も、きちんとお休みくださいね～」
        - %CHARA%を寮の前まで送ると、%CHARA%は振り返って入り口に背を向け、%YOU%へ素直にお辞儀をしてから、ゆっくり寮へ入っていった。
    - if: era.get('status:0:10') === 0 && (era.get('status:74:10') > 0 || era.get('status:74:39') > 0)
      lines:
        - 眠っている%CHARA%は、%YOU%に背負われて寮へ戻る感触にも気づかず、%YOU%の匂いのなかで小さく微笑むだけだった。
    - if: era.get('status:0:10') > 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%…… あれ？ 眠っていらっしゃいますの？」
        - 夢の途中、ぼんやりと%CHARA%の声が聞こえた。

good_night_sex:
  - %CHARA%と別れるとき、そっと手を引かれた。
  - 本来なら、ここで%CHARA%が寮へ戻るのを見送るはずだった。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今日は、まだ終わりたくありませんわ……」
  - acc: 1
    key: select
    content: 「それじゃあ、一緒に帰ろう～」
    lines:
      - %YOU% の言葉に、%CHARA%は嬉しそうに %YOU% の腕に抱きつき、そばへ駆け寄る。
      - ふにゃりとした頬が %YOU% の胸に寄り、だんだん速くなる心拍を感じている。
  - acc: 2
    content: 「今日はここまでだ。」
    lines:
      - if: d.check === 2
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ここまで、ですの……」
          - 握った手が急に力を込め、放す気配がない。
          - 掴まれた痛みが %YOU% の腕を伝い、体へ登ってくる。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「いま終わってしまっては……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「少し、物足りませんわ。」
          - いつもの%CHARA%と違う様子で、%YOU% の手を掴んだまま、少しずつ近づいてくる——
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%…… 失礼いたします！」
      - if: d.check !== 2
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……わかりましたわ」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%に、あまりご迷惑をかけてはいけませんものね～」
          - 手を離した%CHARA%は、名残惜しそうな笑みを浮かべて一歩下がる。
          - %YOU% にお辞儀をしたあと、沈んだ足取りで寮へ向かった。
