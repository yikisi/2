# @file メジロマックイーン - 地下室
# @author 伊兰
# @author Claude (翻訳)
welcome:
  - 強い光の下で意識を失った記憶から、どれほど経ったかわからない。目覚めた%YOU%は天井の明かりにまだ目が慣れず、身体をわずかに動かして、眠っていた機能を取り戻そうとしていた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%、お目覚めですの？」
  - 馴染みの声を聞いた%YOU%はすぐにベッドの傍らの%CHARA%を見た。%SEX%は頬杖をつき、少し面白がるように笑って%YOU%を見ている。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ここがどこか、ですって？ ふふ……ほかの%UMA%が%CALLNAME%を誘惑せぬよう、わたくしたち二人だけの時間のために設けた空間ですわ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「美味しいスイーツは虫を招きますもの。独り占めするには、誰も知らぬ場所へ隠して、ゆっくり味わうほかありませんわ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ですが、大切なスイーツが完璧にわたくしだけのものとなれば、いつ味わっても遅くはありませんわね。」
  - %CHARA%は唇を舐め、ゆっくりトレーナーの耳元へ寄った。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あなたは、永遠に逃げられませんわ。」
  - %CHARA%は%YOU%の耳たぶを噛んで血を出し、それからゆっくり立ち上がり、振り返らずに扉へ向かう。頑丈な扉が閉まったあと、%YOU%はようやく胸を下ろした。

ask_time:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「時間をお知りになりたい、ですの？」
  - その頼みを聞いた%CHARA%は、わけもなく笑った。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「日常を考える必要のないこの場所では、時間など知る必要はございませんわ。」

battle_success:
  - ひと戦いのあと、%CHARA%の身体はついに床へ倒れた。
  - 緊張で震える自分の手を見て、目の前の%CHARA%を見て、短い空白のあと、自分が%CHARA%に勝ったことを思い出した。
  - 拳を握って落ち着きを取り戻し、すぐに手の道具を捨て、地下室の扉を開けられる鍵を探した。

battle_fail:
  - ひと戦いのあと、調子の悪い%YOU%はあっさり%CHARA%の関節技に抑え込まれた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「わたくしに勝とうなど、甘すぎますわ、%CALLNAME%。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「わたくしだって、少しは格闘術を習っておりますもの。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「こんなに言うことを聞かない%CALLNAME%は、眠っていただいて静かになってもらうほかありませんわね？」
  - %CHARA%の侮蔑めいた言葉が落ちると同時に、後頸へ衝撃が走り、意識を失った。

battle_escape:
  - 期待を込めて手の鍵を鍵穴へ差し込み、滞りなく回す。軽く押しただけで、外の光が見えた。
  - だが%YOU%は、まだ床に倒れている%CHARA%を振り返り、%SEX%が口を酸っぱくして言っていた「一心同体」を思い出す。
  - 優雅な姿の裏を見てしまった今、あの一心同体はまだ保てるのか。
  - 数秒迷った末、愛馬をひとり床に寝かせてはおけず、%CHARA%の身体を抱き上げ、この愛の牢から出た。

battle_prison:
  - 「鍵……鍵はどこだ！？」
  - 周囲に鍵の気配はなく、逃げたい執念が%YOU%をますます狂わせる。鍵探しを諦め、密かに残しておいた開錠の道具をすべて扉に使った。
  - だが自分のものではない手が胸を撫で、%YOU%は冷や汗をかいて、開錠道具を床に落とした。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「逃げられませんでしたわね？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「備えはしておりましたわ。鍵は別の場所に隠してありますの。」
  - 細い指が%YOU%の頬を撫で、続いて後頸へ衝撃が走り、意識を失った。

find_escape:
  sync: true
  lines:
    - 残っていた記憶の開錠術を頼りに、九牛の力を尽くして扉を開けた。
    - だが急ぎ足で出ようとしたところで、%CHARA%と真正面からぶつかった。
    - %CHARA%は%YOU%を見た瞬間、表情を冷たくし、%YOU%は背筋が凍る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あら、%CALLNAME%……逃げようとなさったのですか？」
    - %CHARA%はゆっくり%YOU%へ近づき、%YOU%は相対して下がり、一歩一歩地下室の中へ戻された。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご存知です？ わたくし、もう少しであなたへの気持ちを変えかけていたのですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なのに%CALLNAME%は、相変わらず言うことを聞かない。困りますわ。」
    - %CHARA%は再び扉に鍵をかけた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうやら、%CALLNAME%にもっと一心同体を注いで差し上げねばなりませんわね……」

back_basement:
  sync: true
  lines:
    - 閉じた空間でどれほど経ったかわからない。%YOU%は地下室の入り口に足音を感じた。その主は%CHARA%以外にいない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただいま～ %CALLNAME%。」
    - 少し濡れた%CHARA%は、肩にかけた鞄のほか、保冷袋を手にしていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「パフェを一箱持ってまいりましたわ。一緒に味わいましょう。」
    - 袋を開け、クリームの甘い香りが広がると、%CHARA%は小さく眉を寄せ、手のスプーンがなかなか一匙をすくわない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%をここに閉じ込めてから、どれほどパフェを食べていなかったのでしょう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いえ……あなたを閉じ込めている隙に貪っていたわけではございませんわ。ただ……今のパフェは、以前のような味がしないのです。」

out:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「む……今日はまだ予定がございましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「少し席を外しますわよ？ %CALLNAME%。」
    - if: era.get('relation:13:0') < 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「逃げることなど、考えないでくださいませ。」
        - %CHARA%がその言葉を口にしたとき、声はかなり冷たい。
    - if: era.get('relation:13:0') >= 0
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すぐに戻りますわ。どうか、ここにいてくださいませ。」

ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「つまり……わたくしに、あなたを出してほしい、ということですの？」
  - 考えるまでもなく拒まれる頼み、のはずだった……
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「よろしいですわ。いらっしゃい。」
  - 一瞬、%YOU%は勢いよく顔を上げ、信じられないように%CHARA%を見た。迷いなく、硬い脚を引きずって扉へ向かう。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「メジロ家は広いものですから、わたくしがお連れいたしますわ。」
  - %CHARA%の淀みない手際に、%YOU%は頼みがあまりにスムーズすぎて信じられない。
  - メジロ家の門まで来ると、すでに車が待っていた。
  - 「ありがとう……」
  - 淡く礼を言い、振り返らずに去りたい。だが手が%CHARA%に掴まれた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あの者はあなたをアパートまで送りますわ。ですが、また嫌な虫に纏わりつかれては困りますのよ。」
  - 警告の声に%YOU%は震え、出たとしても%SEX%との縁からは逃げられないと悟った。

ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「つまり……わたくしに、あなたを出してほしい、ということですの？」
  - 考えるまでもなく拒まれる頼み、のはずだった……
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「なぜ、出ていきたいのですか。」
  - %CHARA%がその問いを%YOU%へ投げた時点で、出られない結末は決まっていた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「自前でやりくりせねばならぬアパートへ戻るより、衣食に困らぬ場所にいるほうがよろしいでしょう。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「引き換えは、あなたの自由と、その視線だけ……」
