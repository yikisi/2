# @file セイウンスカイ - 日常
# @author Wolke
# @author Claude (翻訳)

good_morning:
  sync: true
  lines:
    - if: era.get('cflag:20:育成用变量')?.jess > 0
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おはよ、トレーナー。今日の任務は何……」
    - if: "!(era.get('cflag:20:育成用变量')?.jess)"
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「おはよう～今日ものんびり、ほどほどに、適当に過ごそ (^ ･ ω ･ ^ =) ~」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナー！朝から奇跡だよ！スカイが早起きして学校に来たよ！」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナーおはよ——出たよ——起きたよ——もう帰っていい？」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「おはよ～トレーナー、今日は寝坊してないよ——まあ～十分だけ寝たけど。」
        - if: era.get('status:20:熬夜') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「眠い……昨夜の夜釣り、遅すぎた？」
        - if: era.get('status:20:熬夜') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「はぁ……昼間に寝て補わなきゃ……」

select:
  sync: true
  lines:
    - if: era.get('cflag:20:育成用变量')?.jess > 0
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次の予定は何……」
    - if: "!(era.get('cflag:20:育成用变量')?.jess)"
      lines:
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「焦らない、焦らない～自分のペースでゆっくりいこ。」
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ほどほどの人生が、いちばん——」
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナー、釣り行こ、釣り～ (/ = ^ ･ ω ･ ^ =)/ 」
        - if: era.get('status:20:沉睡') > 0 || era.get('status:20:马跳S') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「(= ˘ ω ˘ =) ~ Z—Z—Z——」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、もっとゆっくり……スカイの頭、オーバーしそう～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「起きた起きた、今どこまで話してた？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ん……やっぱりトレーナーにもう一回最初から頼むしかないね、えへへ～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「へへ～トレーナーの授業、大変そう～ちょっと休む？」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、信じてよ。スカイの策は、トレーナーが信じてくれれば足りるから……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「どんな戦術でも、走る体力は要るよね。サクッと終わらせよっか！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「作戦名は『心を込めて、ほどほどにサボる』。相手の警戒をほどいて、隙に勝っちゃお～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「準備はとっくにできてるよ。さ、大物、一本釣るね！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「無理しすぎはよくないって、言われてるでしょ。だから平常心、平常心～にゃはは～」

talk:
  # 直前に「一緒にゲーム」をした
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_game) && (t[0] = false), t[1]
    lines:
      - if: era.get('love:20') < 90
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「はぁ、ゲームってこういうの。ちょっと物足りない感じ。」
      - if: era.get('love:20') >= 90
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ゲームだけじゃ退屈だね。もっと刺激のあるの、しない～」
  # 直前に「一緒に差し入れ」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_cook) && (t[0] = false), t[1]
    lines:
      - if: era.get('love:20') < 90
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふああ～お腹いっぱい、お腹いっぱい～」
      - if: era.get('love:20') >= 90
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふんふん～トレーナー、今日のスープどう？スカイ、隠し味入れたよ～」
          - （牡蠣、クコ、鶏の腎臓……）
  # 直前に「一緒に休憩」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_rest) && (t[0] = false), t[1]
    lines:
      - if: era.get('love:20') < 50
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「あは～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふわふわ——ふわふわ——」
      - if: era.get('love:20') >= 50
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「もう少し抱いて……もう少し……スカイのトレーナーエネルギー、まだ満タンじゃない」
  # 直前に「トレーニング」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - if: era.get('cflag:20:干劲') < 2 && era.get('cflag:20:干劲') > -2
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今日の量、昨日より明らかに多い！抗議！これ、ウマいじめ！！！」
      - if: era.get('cflag:20:干劲') === 2
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふああ～今日の調子、いい～普段の百二十パーセント出てる感じ！」
      - if: era.get('cflag:20:干劲') === -2
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、今回サボってないよ——ほんとに具合悪いの——」
  - if: t[0]
    lines:
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー、今日こんなに日差しいいのに、釣り行かないなんてもったいない——」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「え～や、仕事は明日でいいでしょ。魚は待ってくれないよ。」
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー——裏路地の子猫、やっと日向ぼっこ覚えたよ。今のスカイと同じで、ぜんぜん動きたくない。」
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「レースの日は感覚で走ろっか？冗談だよ……三分の一くらいは冗談、にゃはは～」
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー～ちょっと横になるね。緊急なら……起きてからね～」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー～釣り付き合ってよ。トレーナーがいるとスカイ、運がいいの。ほんと……」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー、猫の撫で方上手だね。ご機嫌でゴロゴロ言ってる。トレーナー、スカイも撫でてみる？ゴロゴロ出るかもよ～」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「次の作戦？トレーナー～一緒に考えてよ。隣に座ってくれると、頭ちょっと回る……たぶん？」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「一緒にちょっと寝ない？ちょっとだけ。トレーナーと昼寝したら、スカイ充電できるよ……」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー、今日釣り行こ～逃げ禁止！もうスカイの針に掛かってるんだから、一生逃がさないよ——」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「起きたとき、そこにいて。目を開けて最初に見るのはトレーナー——じゃなきゃ、目を閉じたまま待つ。帰ってきてキスしてくれるまで起きない。」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「さっきずっとトレーナーの手舐めてたの、見た！猫一匹に嫉妬するなんて——トレーナー、スカイも撫でて、帳尻合わせない？」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「あの策、書かなくていいよ。トレーナーが思った瞬間、わかるから。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なんでかわかる？今、頭の中ぜんぶトレーナーだから。」

office_gift:
  - if: era.get('love:20') < 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「おや～おや～これ、スカイへの贈り物？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「もしかして！トレーナーがスカイのサンタさん!」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「じゃあ——チリンチリン……ぷぷっ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「おめでとう！スカイの好感+1だよ～ にゃはは～」
  - if: era.get('love:20') < 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「おいおい?トレーナー、やっと勘づいた？トレーニングのデータばっか見てると思ってた。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「じゃ、開けてみるね……んふん、見る目あるじゃん～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも急に物くれるって、トレーナー——こっそりスカイのこと好き？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「冗談だよ～ にゃはは～」
  - if: era.get('love:20') < 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー！これ何？スカイに？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当ててみる。最近ちゃんとやってたから、トレーナーがかわいそうになって、機嫌取り？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それとも……自分から、こっそり機嫌取りたくなった？スカイって、案外モテるんだね～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「冗談だよ、ありがとう。ほんと好き。今日のトレーナー、やけに優しいね～」
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー！隠してる隠してる——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「スカイに？えへへ、開けていい？今いい？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わあ！トレーナー！なんでこれ好きなの知ってるの？こっそりレーダー付けた？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ん～この贈り物、抱えたまま離さない。」
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、ひどい！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こんな気の入ったものくれたら、今日はいじめるの、もったいなくてできない。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「違う……スカイ、損してない？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「じゃあこう——今日のトレーナーはスカイのもの。贈り物もスカイのもの。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「異議ある？あっても却下。ふんふん～トレーナーはスカイを甘やかすでしょ、ね～」
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わあ、これ！スカイに？！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「どうしようどうしよう、トレーナーのこと、もっと好きになっちゃう。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「これ、よくないよ。これから贈り物もらうたびにこんな嬉しいなら——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「毎回、トレーナーに握られっぱなしじゃない？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （でも……それも、悪くないかも～）
  - if: era.get('love:20') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あれ？これ——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「へへ、トレーナー、ねえ——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「おとといトレーニングのあと、店の前通ったの。ショーウィンドウにこれ、置いてあって。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そのとき思った。トレーナーなら、この色を選ぶなって。結果は——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー……スカイ、だんだん……トレーナーのこと、わかってきた。」
  - if: era.get('love:20') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー……ねえ、今はトレーナーからもらうと、急いで開けなくなっちゃった。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナーを手に入れてから、待つことぜんぶ、甘くなったみたい。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「へへ～欲張りになった？昔は贈り物だけで十分嬉しかったのに。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今は贈り物だけじゃダメ。トレーナーごと受け取らないと。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも安心して。スカイも自分をあげるから。しかも——トレーナーのほうが得するよ～」
  - if: era.get('love:20') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「この贈り物、トレーナーがわざわざ選んだ？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「じゃあ覚悟して——受け取ったら、トレーナーにべったりするから。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「これがスカイのそばにいるあいだ、トレーナーもそばにいて。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナーの匂い、スカイだけ。トレーナーの頭の中、スカイのことだけ。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「これからくれる贈り物、全部スカイひとりに……」

office_cook:
  # 直前に「一緒に休憩」をした
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_rest) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あは～ん——ふ——」
      - セイウンスカイは子猫みたいに伸びをした。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー～いま何時？」
      - %YOU%はぼんやりと目を開けた。
      - 「急がなくていい、まだ六時…………」
      - 「！？六時？午後ずっと寝てたのか？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふんふん～トレーナー、大の怠け者……」
      - 「今夜は追い込みだな。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「え～や、急がなくていいよ～先に何か食べよ～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「西通りにおでんの屋台あったはず。あそこ行こ！」
  # 直前に「学習指導」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_study) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ん？時間だ！ごはんごはん！！！」
      - セイウンスカイは手綱を切った野良猫みたいに、ドアを開けて飛び出した……
      - （なんでこいつ、勉強のあとだけ食欲がこんなに……）
      - 「おい、ゆっくり、待て！」
  # 直前に「トレーニング」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ああ～もうダメ……スカイ、力、残ってない……」
      - セイウンスカイは子猫みたいに机にうつ伏せで、動かない……
      - 「何がいい？取ってくる。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、なんでそんなにいいの～スカイ、感動しすぎ、うえええ～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ハンバーグ海鮮チャーハンに、冷たいコーラ一本、よろしく。」
  - if: t[0]
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ヒシアマゾンの作った鮭おにぎり、持ってきたよ。美味しいよ～、中身しっかり」
          - 「また冷蔵庫の備蓄、盗んだのか？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「え～や、気にしないで～実家の甘露煮で穴埋めしたから、%SEX%は損しないよ～」
          - 「次は一言言え……」
      - random: true
        lines:
          - 「ん？これは何だ？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ああ、その瓶、おじいちゃんが実家から送ってきたきゅうりの漬物。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ちょっと食べる？美味しいよ。」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー、手伝って～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「スペがニンジンの箱、どさっとくれたの。スカイひとりじゃ食べきれない。」
          - 「%SEX%の一食分くらいでは……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「スペの食事量見るたび、ちょっと怖い……」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ん……ん！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「やっぱりこの季節のサンマ、いちばん美味しい！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「次の釣りはこれ狙い！腹いっぱい食べる！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今日の弁当、フラワーが作ったの。どう、悪くないでしょ～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%SEX%、いろんな料理できるんだよ。ケーキ、とくに美味しい！」

office_rest:
  # 直前に「一緒に差し入れ」をした
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_cook) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふああ～お腹いっぱいになったら、あとは気持ちよく寝るだけ。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「人生って、これで十分……」
  # 直前に「ゲーム」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_game) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ゲームしてすぐ寝るなんて、トレーナー、廃人コースだよ～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「スカイ？スカイは違うよ。休むのは以逸待労、スカイ独自の鍛え方～」
  # 直前に「学習指導」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_study) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ああ——枕！会いたかった！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナーの大悪党！難しすぎ！スカイの電池、空っぽ！」
  # 直前に「トレーニング」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ああ～～～ダメダメ～～～死ぬほど疲れた～～～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、スカイ冬眠する。来週起こして……」
  - if: t[0]
    lines:
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「おっ！？トレーナーから休憩の申し出！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「まさかトレーナーもサボり覚えた——スカイのせい？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「にゃはは～冗談だよ、トレーナーがいちばん——いい！」
          - セイウンスカイは軽やかに跳ねて寄り、自然に%YOU%の肩へもたれ、そっと目を閉じた。
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー、ほらほら、ここ——」
          - セイウンスカイは%YOU%を、%SEX%の秘密の寝床へ連れていった。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「寝るのは、わりと真面目なこと！手抜き、ぜっんぜんダメ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「温度ちょうど、芝生ふかふか、風が顔に……完璧！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「おいで～昼寝の達人の選定、試してみて～」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - 少し休むと聞いて、セイウンスカイは嬉しそうに小走りで寄ってきた。
          - 横になる直前、顔が薄く赤らむ。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー……あの……抱いて……寝ていい？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナーに抱かれて寝たら、スカイ、もっと休める。」
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - %YOU%がソファに横になった途端、セイウンスカイが飛びついてきた。
          - 頭を%YOU%の肩に乗せ、手足を%YOU%にしっかり絡める。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「動いちゃダメ！今日のトレーナーは、スカイの抱き枕～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「覚悟してね～これから、これが日常任務だから～」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「休みたい？スカイ特製の膝枕サービス、どう？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「抱き枕にするのもいいよ。でも強く抱きすぎたら……仕返しするから～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ほらほら～無料は今回だけ～次は有料。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「料金は？へへ～そのとき教える～」
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - 休憩の時間が終わっても、セイウンスカイは%YOU%をしっかり抱いたまま、離さない。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「もう少し抱いて……もう少し……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「スカイ、トレーナーともっと近く、もっと近く……」

office_game:
  # 直前に「一緒に差し入れ」をした
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_cook) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふ——腹いっぱい腹いっぱい～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、午後のトレーニングまでまだ早いし、二局やろ～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナーが勝ったら午後追い込み、どう？」
  # 直前に「学習指導」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_study) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ははっ！くらえくらえ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「どう、すごいでしょ～さっき勉強してるとき閃いたの～」
  # 直前に「トレーニング」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あ、レベル上がった——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「はぁ、トレーニングもゲームみたいに早く上がればいいのに……」
  - if: t[0]
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ゲームね、スカイあまり得意じゃないんだ。だから——」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「勝ったらご褒美、一日寝ていいよね～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「でも負けたら、スカイすごく落ち込む……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「たぶん、一日中釣りして、この悲しみを癒す必要がある。」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「策士たるもの、大局を握る！くらえ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふんふんふん～トレーナー、完全にスカイの罠～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「楽々～トレーナー、この程度？雑魚～雑魚～」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「スカイの将棋に挑む？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふんふんふん～トレーナー！今日、見せてあげる！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「謀略の星の名が、どうついたか！」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、次のレース、スカイとスペ、どっちがここに来て叫ぶと思う？ スカイは来ないけどね～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うえ……中、暗くて狭い。寝る場所には見えない……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「深淵を覗くとき、深淵もまたこちらを覗いている……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こう言うと、策士っぽくない？にゃはは～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「毎日だれかがここに愚痴るんだよね……木の洞も楽じゃない……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「この前、猫が一匹飛び出してきて、びっくりした。」

s_a_dating:
  - if: era.get('love:20') < 50
    lines:
      - %YOU%とセイウンスカイは学園を歩いている。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （見ないで、見ないで……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （自然……もっと自然に……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （距離、取ったほうがいいかな……いやいや、逃げたら逆に変……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （うう～緊張する……並んで歩いてるだけなのに……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （ああ……心拍、自分で聞こえる……）
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    lines:
      - %YOU%とセイウンスカイは学園を歩いている。
      - %SEX%はそっと%YOU%の手を握った。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （手、繋いだ!繋いだ!スカイから先に!うわ……トレーナー、握り返した……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （さっきトレーナーの頬にキスしたとき……固まってた顔、面白かった……へへ～）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （でも速く逃げすぎて、よく見えなかった……あああ……次はゆっくり……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （もっと歩きたい……寮が閉まるまででもいい……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （明日もこうならいい……明後日もこうならいい……毎日こうならいい……）
  - if: era.get('love:20') >= 90
    lines:
      - %YOU%とセイウンスカイは学園を歩いている。
      - %SEX%は%YOU%の手をしっかり掴んでいる。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （トレーナーは、この生涯で唯一サボりたくないこと……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （トレーナーを見るたび……胸がぎゅって痛む……好きすぎ……痛いくらい好き……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （離れられないんじゃなくて……離れたくない……たぶん……離れられない……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （スカイのトレーナー……恋人……スカイひとりの……だれにも奪わせない……）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （手を繋ぐだけじゃ足りない……抱くだけじゃ足りない……キスだけじゃ足りない……ぜんぶ足りない……トレーナーを骨の中まで揉み込みたい……そしたら、ずっとスカイのもの……）

school_rooftop:
  - random: true
    lines:
      - セイウンスカイは%YOU%の手を引いて屋上へ上がり、慣れた足取りで給水タンクの陰へ向かった。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「見て、スカイの特等席！」
      - %SEX%は古い座布団が敷いてある隅を指した
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「先週見つけたの。午後、太陽がちょうど給水タンクに隠れて、それに——」
      - %SEX%は指を立てて、しーとした
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「隣の庭の噴水、聞こえるでしょ。このホワイトノイズ、眠れる。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナーも、ここに風に当たりに来るんだ。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当ててみる……空にいちばん近いから？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それとも、ここから下の%UMA%の実力を見て、対策練るため？」
  - random: true
    lines:
      - %YOU%とセイウンスカイは屋上で昼を食べた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナーの弁当……卵焼き、スカイのより厚いね。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「交換——」
      - セイウンスカイは素早く%YOU%の弁当から一切れ挟み、「あむ」と食べた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ん～やっぱりトレーナーのほう、美味しい。」
      - 自分の卵焼きを、そっちへ寄せた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「お返し。残し禁止。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （……どうせ食べきれないし）


# TODO
o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员～今天小青训练的很努力了哦～」
      - 「嗯嗯……的确，今天效率很高呢，说吧，想去哪玩？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那当然是——钓鱼！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「还有，什么叫玩！我那是去拯救那些在水底受苦的生物～罚你今天和我一起去！」
      - 「好好好～那咱今天去哪拯救它们呢？伟大的青云圣女……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……让我想想」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员～～想我了吗～～」
      - 「嗯？你今天不是休息吗，怎么没出去放松放松？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「诶呀，这不是看训练员太辛苦了，特意来陪陪你啦～」
      - 「那正好，陪我整理数据吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「才不要！训练员你也是，大周末的就别卷了！要劳逸结合——」
      - 「也是……那咱俩——去钓会儿鱼？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯？好主意！走，去哪钓？」
  - random: true
    lines:
      - 「小青！走！出发吧！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜啊！训练员，你这一身什么打扮，你今天中邪了？」
      - 「说什么呢，你上次说的，比赛赢了带你去钓鱼。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「额……那也不用这么激动吧，这样的训练员……我有点不习惯……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过训练员都这么热情了，那咱们出发！」
      - 「好嘞！今天路费我包，你想去哪钓都可以。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘿嘿～既然训练员今天这么大方，那我可得好好想想……」


orf_loc:
  - acc: 1
    content: 小溪（影响体力、精力、干劲、技能点数）
  - if: era.get('cflag:20:育成回合计时') < 3 * 48
    acc: 2
    content: 河口（影响基础属性）
  - acc: 3
    content: 湖泊（影响马币）
  - acc: 4
    content: 近海（影响声望）


orf_creek:
  - %YOU%和青云天空来到了附近的一条小溪。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「就这里了！训练员，要加油哦。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今晚的晚饭全看咱俩的技术了！」
  - %YOU%和青云天空开始了悠闲的钓鱼时光。
  - ………
  - ……
  - …
  - 一段时间后
  -
  - if: d.fish === 1
    lines: # 空军 20% 干劲-1
      - 青云看着空荡荡的桶。
      - 「……看来今天适合放生。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走！去超市买一条！」
      - 青云天空拎起桶就往回走，步伐坚毅，果断，一往无前。
      - ——资深钓鱼佬，永不空军！
  - if: d.fish === 2
    lines: # 小杂鱼 8% 体力精力恢复5% 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （看着桶里一群不到五厘米长的小鱼，陷入沉思）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……面拖油炸吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「撒点海苔粉，应该也挺香。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「或者炖鱼汤，再不济做成猫饭……」
      - 「额……不如放了吧……」
  - if: d.fish === 3
    lines: # 雅罗鱼 8% 体力精力恢复10% 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天的是雅罗鱼啊，训练员，想不想吃烧烤？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「小青我烤这种鱼可是一把好手哦～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「先用盐搓洗去掉土腥味，再将鱼串好撒盐用炭火烤制，外皮香脆，鱼肉鲜嫩——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯～～光想想我口水都要流下来了，就这么定了，盐烤！」
  - if: d.fish === 4
    lines: # 白条鱼 8% 体力精力恢复15% 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「全是小白条呢，这回就简单点做吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「处理完后，先调味去腥，然后裹上面粉炸一下就行。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，今天就交给你来做吧——」
  - if: d.fish === 5
    lines: # 马口鱼 8% 干劲+1 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「大丰收欸！全是马口鱼！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种鱼抢食抢的可凶了，亮片一扔就咬，数量还多。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这么多一回可吃不完，拿回去给大家分分吧，剩下的做成甘露煮。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「马口鱼的肉质紧实，做成甘露煮一定很下饭！」
  - if: d.fish === 6
    lines: # 虾虎鱼 8% 干劲+1 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔啊！这么全是小虾虎鱼！我说今天的空勾怎么这么多！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这群小家伙，看着个头不大，饵料却都被偷走了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不能白白便宜了它们，训练员！我今天要吃炸鱼！」
  - if: d.fish === 7
    lines: # 宽鳍鱲 8% 减少一层疲劳 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天都是宽鳍鱲欸，还不少呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你知道吗，宽鳍鱲在我们老家叫溪哥，它们在繁殖期颜色很漂亮哦。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鱼的口感跟马口鱼很像，要不也做成甘露煮吧。」
  - if: d.fish === 8
    lines: # 石斑鱼（溪流种） 8% 减少一层疲劳 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼哼～怎么样，小青我厉害吧，这种小溪里的石斑鱼都喜欢躲石缝里，一般来说可不好钓。」
      - 「我记得海里的石斑鱼挺大的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……确实。淡水里的石斑鱼很小呢，跟海里的没法比」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种鱼肉质紧实，风味清甜，但刺比较多，做成刺身太麻烦了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「还是做成佃煮吧，回头慢慢吃。」
  - if: d.fish === 9
    lines: # 香鱼 7% 感到神清气爽（清除药物残留） 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，看！这就是淡水鱼之王——香鱼！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「果然今天的这片水域很好，香鱼对水质要求可是极高的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一定要盐烤！这是原则性问题！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「整条鱼不去内脏直接串起，只撒盐用炭火烤制。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「鱼皮焦香酥脆，鱼肉细嫩多汁，内脏的微苦回甘与鱼肉的清甜形成绝妙平衡，这才是香鱼料理的最高境界！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「悄悄告诉你，小青我可是香鱼的铁粉哦～」
  - if: d.fish === 10
    lines: # 虹鳟 7% 干劲恢复到最佳 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「虹鳟！野生的虹鳟！训练员你看！这么大一条！今晚加餐了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「盐烤！不对——油煎！不行——刺身！等等——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔啊～我都不知道怎么选了～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不！小孩子才做选择，我全都要！」
  - if: d.fish === 11
    lines: # 花羔红点鲑 7% 体力精力恢复20% 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「难道说！难道说！是传说中的冷水鱼之王——花羔红点鲑！」
      - 「这么厉害？我看看。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「欸欸欸！等等！那这种鱼可娇贵了！轻点捧。」
      - 「好小气哦……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当然了！这可是溪流钓的终极目标之一！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「也是最高级的食材之一。」
      - 「这个要怎么吃？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当然是最高级的享用方式——寿司。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这顿大餐一定要给大家尝尝。」
  - if: d.fish === 12
    lines: # 山女鱼 3% 感到精神焕发（消除偏头疼以及药物残留） 干劲恢复到最佳 技能点数+20
      - 青云天空的鱼漂轻轻点了一下，又点了一下，然后猛地沉了下去。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯？！来勾了！」
      - 青云天空手腕一抖，开始和水下的生物较劲。
      - 鱼线被一点一点地拉出去，那家伙不急不躁，就是闷头往水底钻。
      - 一阵拉扯过后，鱼慢慢被拉到了上游。
      - 这时水面翻了一个不大的水花，一抹黄褐色的影子在水下一闪而过——
      - 那鱼的身形流畅而优雅，身上的斑纹整齐有序，侧线泛着一条淡淡的粉红色光泽，像涂了一层极薄的胭脂，背部是素雅的黄褐色，腹部雪白点名了它的身份。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「山女鱼……」
      - 青云天空呆愣了起来。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「山女鱼！山女鱼！训练员！是山女鱼！」
      - %SEX%突然惊叫起来，嗓子都劈了，尾巴在身后疯狂地甩，把旁白的水桶都掀翻，水花溅了%YOU%一身。
      - 「轻点轻点！别把竿子弄断了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我知道我知道我知道——」
      - %SEX%深吸一口气，拼命让自己冷静下来，但握着竿子的手在发抖，嘴唇也在发抖。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「山女鱼啊，训练员……你知道山女鱼是什么概念吗……」
      - 青云天空跟着它的节奏，放一点线，收一点线，顺着溪岸来回走了十几步，鞋里全是水，裤腿湿到大腿根，但%SEX%浑然不觉。
      - 终于，鱼开始松劲了，那个溪流中的贵族慢慢被拉向岸边，青云天空蹲下身，用抄网轻轻一舀。
      - 夕阳的光从树缝间漏下来，落在山女鱼的身上。
      - 它大约三十厘米出头，体型修长流畅，身上一排暗青色的大斑如同一个个暗纹勋章，侧身那条淡淡的粉红色带子在光线下若隐若现。
      - 它的鳞片细小而紧密，排列得整整齐齐，每一片都在夕阳下折射出柔和的光晕。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这就是，溪流女王……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好美……」
      - 泪水不自觉的从两侧滑落。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员……我都不敢呼吸了……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……我想就这样看一辈子。」
      - %YOU%用手机拍照留做纪念，然后问道
      - 「所以……」
      - 「这个你打算怎么吃？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「吃你个头！」
      - 青云天空翻了个白眼。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鱼比我都金贵！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当然要放生。」
      - 在训完%YOU%后，青云天空有如痴如醉的看着桶里的山女鱼。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「再看一会吧，再看一会再放……」


orf_river:
  - %YOU%和青云天空来到了近海的一处河口。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员快点！晚了就没好位置了！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「河口的鱼可是很考验技术的！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「所以小青平时来钓鱼可不是为了偷懒，是在训练呢，喵哈哈～」
  - %YOU%和青云天空开始了悠闲的钓鱼时光。
  - ………
  - ……
  - …
  - 一段时间后
  -
  - if: d.fish === 1
    lines: # 空军 20% 全属性-1
      - 青云看着空荡荡的桶。
      - 「……看来今天适合放生。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走！去超市买一条！」
      - 青云天空拎起桶就往回走，步伐坚毅，果断，一往无前。
      - ——资深钓鱼佬，永不空军！
  - if: d.fish === 2
    lines: # 小杂鱼 7% 全属性+1
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （看着桶里一群不到五厘米长的小鱼，陷入沉思）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天不少钓呢，就是没有大鱼……」
      - 「至少今天咱们钓的很开心……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员没想到你还挺豁达的嘛～」
  - if: d.fish === 3
    lines: # 梭子魚 7% 全属性+1~2
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「早上的梭鱼就是多。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「钓这种鱼小青我可是有独家秘方的……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看！又来了，看我一抽！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当当！厉害吧～训练员你要学的还很多呢～」
  - if: d.fish === 4
    lines: # 鲈鱼 7% 全属性+2
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鲈鱼好大一条，比我宿舍楼下那只橘猫还肥！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这我可得想想怎么解决……」
      - 「可以用煮付，然后多叫几个人来一起解决。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好主意！就让小花来吧，%SEX%做菜有一手！」
  - if: d.fish === 5
    lines: # 鲭鱼 6% 速度+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哇，今天好多鲭鱼。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你别看他小，肉质很紧实的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种鱼最新鲜的时候就要用最新鲜的吃法——刺身」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一般搁店里吃可贵了，属于高级货。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过今天小青这里大促销，管够！」
  - if: d.fish === 6
    lines: # 竹荚鱼 6% 耐力+5
      - 刚开始钓没多久，%YOU%的浮漂就有了反应。
      - 「这不是竹荚鱼吗，我在超市买过。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你还挺厉害，这么快就有口了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看来今天运气不错啊，多钓几条，晚上请你吃寿司～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鱼肉质紧实、风味清爽，做寿司最是一绝！」
  - if: d.fish === 7
    lines: # 河豚 6% 力量+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜啊！，是河豚，这必须要小心。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你看它气鼓鼓的样子，想不想小特～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过这个可不是咱们能料理的，野生的谁也不好说，还是放了吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「想吃咱们过会找个专业的饭店。」
  - if: d.fish === 8
    lines: # 多春鱼 6% 根性+5
      - %YOU%钓上来一条银色的小鱼。
      - 「这是——多春鱼？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这是公鱼，确实是咱平常见的多春鱼，但是是引进的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「还有种比较稀少的柳叶鱼，这才是我们本土的多春鱼。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种小鱼一钓一个准。」
  - if: d.fish === 9
    lines: # 鲻鱼 6% 智力+5
      - %YOU%费尽九牛二虎之力钓上一条体长一米二的鲻鱼。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「竟然这么大……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜……好不甘心……这为什么不是我钓的……」
      - 「小青，这么大的鱼该怎么吃啊～」
      - 青云天空瞥了你一眼。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼，自己解决！你等着，我要钓个比你还大的！」
  - if: d.fish === 10
    lines: # 黑鲷 5% 速度+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好大一条黑鲷，看来咱俩的福气很旺呢～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鱼可狡猾了，还被称为「水中的狐狸」」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「要有精细的钓组，准确的潮水判断和持续的诱饵策略。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「等你也钓上来一条时，就算出师啦～」
  - if: d.fish === 11
    lines: # 香鱼 5% 耐力+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，我钓到香鱼了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「它们出现在河口，说明它们的产卵期到了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「亲鱼死亡，幼鱼入海，产卵后，大部分亲鱼会力竭而死。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「所有香鱼除了淡水女王，还被称为「年鱼」」
      - 「听起来好悲伤……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「但这也是它们生命的起点啊。」
  - if: d.fish === 12
    lines: # 河鳗 5% 力量+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是河鳗！训练员！是河鳗！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种鱼尤其喜欢泥沙底质的缓水域、石缝和洞穴里」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「而且野生的河鳗数量已经很少了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今天竟然能钓到一条，算是圆满了～」
  - if: d.fish === 13
    lines: # 柳叶鱼 5% 根性+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这是——柳叶鱼！好久没有见到了。」
      - 「和公鱼很像呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「的确，但这是这是濒危物种，公鱼是引进的平民鱼种。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「就这一条也不够咱俩分，还是放了吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「想吃可以回头买几条公鱼，味道也差不多～」
  - if: d.fish === 14
    lines: # 石狗公 5% 智力+10
      - %YOU%钓上来一条体色呈红褐色，头部宽大，布满棘刺的鱼，刚想取下鱼钩。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，取的时候小心点，石狗公身上的棘刺上有毒腺！」
      - 青云天空从包里翻出个手套和剪刀。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唉～关键时刻还是得靠小青～不然你手被扎一下就得肿一片……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过河口竟然有石狗公？偶入的吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「作为差点刺伤训练员的罪魁祸首，赐你盐烤之刑！由小青亲自执行！」
  - if: d.fish === 15
    lines: # 天竺鲷 4% 全属性+10
      - 钓了一整天，浮漂一动不动。
      - 从清晨到日暮，%YOU%和青云天空坐在河口的堤岸上，换了三个钓点，换了四种饵料，鱼桶里的水始终是空的。
      - 青云天空从一开始的兴致勃勃，到中午的昏昏欲睡，再到下午的沉默不语——
      - %SEX%的耳朵从竖着变成耷拉着，尾巴也从悠闲地摇晃变成了拖在地上。
      - 天色一点一点暗下来，河面上的金光被灰蓝色吞没，远处的路灯次第亮起。
      - %YOU%看了一眼手机，又看了一眼眼睛直直盯着水面的青云天空。
      - 「天空，要不今天先这样？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不要！」
      - 「明天还有训练呢，而且大晚上你也看不清。」
      - 青云天空转身从包里翻出两个夜钓灯。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，再夜钓会，行吗……」
      - %YOU%看着奋斗一天却毫无收获的青云天空，%SEX%的眼神楚楚可怜，充满了祈求。
      - 「唉，好吧，就今天一次哦～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘿嘿，最喜欢训练员了～」
      -
      - 夜钓的河岸很安静。
      - 青云天空的侧脸被夜钓灯的光晕染成暖橘色，眼睛死死盯着那颗绿光，像猫盯着老鼠洞。
      - 就在%YOU%快要打瞌睡的时候，青云天空突然动了。
      - 「有了！」
      - 收线很轻松，没有怎么发力，看来鱼不大。
      - 青云天空的眉头微微皱了一下，%SEX%加快收线的速度，鱼线在水面上划出一道细长的波纹。
      - 夜光漂已经被拉到了水下的某个深度，只能隐约看见一点微弱的绿光在黑暗中晃动。
      - 几秒钟后，那道银光破水而出。
      - 青云天空伸手接住落在堤岸上的鱼，托在掌心里。
      - 「是条小鱼呢，不过今天也算圆满了。」
      - 青云天空没有回应。
      - 「天空？」
      - %YOU%又喊了一声，但青云天空还是没有回应。
      - %YOU%走到%SEX%身旁，发现%SEX%在喃喃自语。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……天竺鲷。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我钓到天竺鲷了……」
      - %YOU%好奇的看了看青云天空手里的小鱼。
      - 那条鱼还没有%SEX%手掌宽，身体呈灰白色半透明，一条贯穿眼睛和身体的黑色纵带，就像毛笔从吻部到尾巴画了一道流畅的墨线，干脆利落，尾柄还有个黑色圆点，干净，精致。
      - 「这是……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我钓到天竺鲷了，是弓线天竺鲷！！！」
      - 青云天空突然的大叫吓了%YOU%一大跳。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你知道吗，这是弓线天竺鲷！特别稀有！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「技术和运气缺一不可！我钓到了！」
      - 在短暂的兴奋爆发后，青云天空慢慢冷静了下来。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你看，它真美……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我感觉……好幸福……」
      - 青云天空轻轻把那条珍贵的弓线天竺鲷放进鱼桶，然后转身抱住了%YOU%。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，谢谢你……谢谢你陪我夜钓……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我今天……实在是……太幸福了！」


orf_lake:
  - %YOU%和青云天空来到了一片天然湖泊。
  - 「哇哦，这片湖真漂亮啊」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「是欸，跟我老家后山的那片湖一样，大鱼绝对少不了！」
  - 「如果收获不错咱还可以支个小摊卖一卖～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「那咱俩加油！把下个的零食费赚出来！」
  - %YOU%和青云天空开始了悠闲的钓鱼时光。
  - ………
  - ……
  - …
  - 一段时间后
  -
  - if: d.fish === 1
    lines: # 空军 20% 马币-5
      - 青云看着空荡荡的桶。
      - 「……看来今天适合放生。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走！去超市买一条！」
      - 青云天空拎起桶就往回走，步伐坚毅，果断，一往无前。
      - ——资深钓鱼佬，永不空军！
  - if: d.fish === 2
    lines: # 小杂鱼 7% +1马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （看着桶里一群不到五厘米长的小鱼，陷入沉思）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「额……这些应该卖不了吧……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唉……没办法，小鱼啊小鱼，今天算你们运气好。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走吧……等长大了别忘了回来报恩哦——」
      - 回去的路上，一阵风吹过，一张马币奇迹般随风飘到你们手中。
  - if: d.fish === 3
    lines: # 鲫鱼 7% +2马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔啊！这条鲫鱼好肥！感觉至少有1斤！」
      - 「我这里也上来条大的！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看来今天口正！赶紧继续！」
  - if: d.fish === 4
    lines: # 鲤鱼 7% +3马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「欸，是鲤鱼啊……」
      - 「怎么了，觉得太普通？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那不可能，我钓到什么鱼都很开心啦……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「感觉卖不太出去呢，毕竟咱这边吃的并不多……」
  - if: d.fish === 5
    lines: # 鲶鱼 7% +4马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……滑溜溜的，抓都抓不住。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嘿嘿～每次看鲶鱼都觉得它长得好喜感～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看这大嘴唇，还有这胡须，还有这呆呆的眼神～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「长这么肥，一看就很贪吃。」
      - 「它听到会伤心的……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「它温暖的泪水会化为冰冷的马币～」
  - if: d.fish === 6
    lines: # 黄颡鱼 7% +5马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼啊！大丰收！满满一桶的昂刺！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走！找个有缘人收了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「赚到的给咱晚上加个餐！」
  - if: d.fish === 7
    lines: # 乌鳢 7% +6马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好大一条黑鱼！起码有两斤！」
      - 「这鱼也太凶了，捞上来的时候还给了我一尾巴……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「没事吧！疼不疼？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「黑鱼就这样，攻击性很强。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你今天辛苦了，回头请你吃冰淇淋～」
  - if: d.fish === 8
    lines: # 公鱼 7% +7马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好多公鱼！一条接着一条的来！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看来咱们今天的运气不错啊～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你也加加油，多钓点。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「上次收鱼的大叔说就好这口～」
  - if: d.fish === 9
    lines: # 雅罗鱼 7% +8马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是雅罗鱼啊，最近还挺常见的。」
      - 「咱们前两天还在天妇罗店吃过呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯？你说这个我想个好主意。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咱再多钓几条直接去店里吧，让他们帮忙加工～」
  - if: d.fish === 10
    lines: # 香鱼 6% +15马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！快看我钓到什么了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「溪流之王——香鱼！」
      - 「品相好好，这么新鲜的香鱼，要不要做成刺身？」
      - 青云天空一把将鱼拉回来，放回鱼桶里。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「才不要呢！学校附近新开的高级自助餐我馋好久了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这条鱼可是承载了我自助餐的重担！才不给你吃～」
  - if: d.fish === 11
    lines: # 青鱼 6% +16马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！救命！快来帮帮我！！！」
      - 「来了来了！撑住！小青！」
      - %YOU%和青云天空废了好大的劲拉上来一条10公斤的巨物。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊哈～我的天哪，好恐怖，这么大的淡水鱼一看就是青鱼……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这片湖还真是不养咸鱼……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这么重，按市场最低价咱也不少赚了～喵哈哈～」
  - if: d.fish === 12
    lines: # 河鳗 6% +17马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一条黑色的河鳗在桶里不断翻腾。」
      - %YOU%和青云天空蹲在桶边看着它不断折腾。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，竟然是河鳗，而且这玩意儿还是野生的，可贵了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「鳗鱼饭………………」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，这个不吃了，回去的时候拿到市场那边去问问吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「鳗鱼饭………………」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「品相好的野生河鳗，一条能卖一万多円呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「鳗鱼饭………………」
      - 「要不……晚上我请你吃鳗鱼饭？」
  - if: d.fish === 13
    lines: # 锦鲤 4% 马币获取+1%
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呀！是锦鲤呢……」
      - 「附近锦鲤好像挺多，毕竟有很多的放生的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「确实，但还是放回去吧，据说会有好运呢。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「说不定回去买彩排就能抽到大奖，从此过上美妙的躺平生活呢，喵哈哈～」
  - if: d.fish === 14
    lines: # 远东哲罗鱼 2% 马币+30 马币获取+1%
      - 从清晨到日暮，%YOU%和青云天空在湖边上坐了整整一天。
      - 浮漂纹丝不动，就像钉在水面上一样。旁边的水桶空空荡荡，连条小杂鱼都没混上。
      - 青云天空打了个哈欠，丢下鱼竿，慢悠悠地走到%YOU%身边蹲下来。
      - %SEX%探头往%YOU%的鱼桶里看了一眼，和%SEX%的一样，清澈见底。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看来咱俩今天又得去超市买鱼了，喵哈哈～」
      - %SEX%自嘲地笑了笑，下巴搁在膝盖上，呆呆的看着桶里平静的水面。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你说咱俩今天是不是犯冲啊，坐一起一天都没口。」
      - 「可能是天气的事。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「得了吧，早上你说气压低，中午你说水温高，下午你说太阳太晒——」
      - %SEX%掰着手指数，尾巴在身后慢悠悠地晃着，开始有一句没一句地聊起来。
      - 说昨天在运气好抢到了限量的布丁，说西野花最近在养新品种的花，说神鹰前段时间抽奖赢了五千円……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……所以说啊，训练员，运气这东西，我感觉像守恒的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「就像你玩游戏抽卡总是吃井，那是因为你太过幸运遇到了小青我～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「所以啊……」
      - 「等一下。」
      - %YOU%忽然打断%SEX%，身体不自觉地绷紧，感受着手中钓竿异样的震动。
      - 「我好像……上钩了。来了！」
      - %YOU%下意识地提起鱼竿，竿梢瞬间弯成了一张满弓。
      - 一股蛮横的力量从水下传来，直直地往下拽，鱼线紧绷着，发出令人紧张的吱吱声。
      - %YOU%双手死死握住竿柄，整个人被拽得往前踉跄了半步。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「等等等等——真的假的？！」
      - 青云天空愣住了，然后猛地站起来，迅速抓起旁边的抄网。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你稳住！别把线绷断！」
      - 「我知道！」
      - 鱼竿轮座的卸力声尖锐地响着，%YOU%感觉自己的手臂在发抖。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是什么鱼啊——这力气也太大了吧——」
      - 青云天空抱着抄网站在%YOU%旁边，不断摇晃的尾巴带着掩饰不住的兴奋。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员你中午是不是偷吃了能量棒，怎么还没被拽下去——」
      - 「闭嘴——帮忙——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「我在帮啊！网都准备好了！」
      - 卸力声渐渐变小，%YOU%趁机开始收线，一圈一圈地往回摇，水下那个东西似乎也累了，挣扎的幅度小了一些。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「感觉今天咱俩的运气全集中在这条大鱼上了啊——」
      - 青云天空兴奋地念叨着，身体跟着鱼线的移动左右晃动，尾巴摇得像螺旋桨。
      - 鱼终于被拖到了浅水区，水下一道暗色的影子缓缓浮上来，轮廓越来越大，越来越清晰。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「来了来了来了——」
      - 青云天空把抄网探进水里，眼睛死死盯着水下那道影子。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「看到头了！好大——」
      - %SEX%的话忽然卡住了，网兜停在水里，一动不动。
      - %YOU%还在兴奋地喊「捞啊！快捞啊！」
      - 那条鱼被拖到网口上方，一个甩尾，几乎要从网口滑出去。
      - 「青云天空！」
      - %YOU%大喊了一声。
      - 青云天空猛地回过神来，抄网猛地往上一兜，把整条鱼兜进了网里，迅速往回收。
      - 岸边，%SEX%双手抱着网柄踉跄了两步，差点一屁股坐到地上。
      - 鱼在网里剧烈地翻腾，溅了两人一身的水。
      - 青云天空抓着网，低头看着网里的鱼，眼睛瞪得浑圆，嘴巴一张一合，就是发不出声音。
      - 然后%SEX%突然尖叫起来。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「啊啊啊啊啊啊——！训练员训练员训练员——！」
      - 「你冷静——一条大鱼而已——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「冷静不了！！！」
      - 把网放到地上蹲下来，眼睛死死盯着网里那条还在扑腾的鱼，声音都在发颤。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「对不起对不起——我刚才看呆了，还以为自己看错了——」
      - %SEX%深吸一口气，扭头看向%YOU%，眼眶居然有点泛红。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，你知道这是什么鱼吗……」
      - %YOU%仔细观察起网里的巨物。
      - 网里的鱼大概有七十多厘米长，鱼身粗壮浑圆，背部是银灰带棕褐色的，上面散布着橘红色的小斑点。
      - 它的吻部比较钝圆，嘴巴很大，微微上翘的嘴角让它看起来像是带着一丝傲慢的表情。
      - 「不太了解，力气倒是真的大……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这可是远东哲罗鱼啊，训练员。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这鱼现在在日本的野生种群已经很少了，是『极危』物种！」
      - 「所以说这条鱼……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「——不是值不值钱的问题，这鱼可是严禁捕获与交易的！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「但能钓到一次，真的是此生有幸……」
      - 青云天空擦了擦眼角的泪光，稳定了下情绪。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过话说回来——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「咱俩今天的时运还真全集中在这一条上面了。」
      - %SEX%低头看了一眼空荡荡的鱼桶，又看了一眼网里那条还在喘气的大家伙   。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「空军一整天，换来一条远东哲罗鱼……训练员，这买卖其实也不亏？」


orf_sea:
  - 在青云天空的强烈要求下，你们来到了海边，一路上青云天空一脸烦躁的翻着手机。
  - 「怎么了？小脸皱着一路了。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「训练员！你看！」
  - 青云天空把手机举到%YOU%面前，上面是一个钓鱼爱好者的群聊，一群钓鱼佬在炫耀在近海钓到的大鱼。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「呜……很不服气！对不对？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今天咱俩也要钓条大的好好涨涨威望！！！」
  - （斗志这么强的青酱真少见……）
  - %YOU%和青云天空开始了悠闲的钓鱼时光。
  - ………
  - ……
  - …
  - 一段时间后
  -
  - if: d.fish === 1
    lines: # 空军 20% -3声望
      - 青云看着空荡荡的桶。
      - 「……看来今天适合放生。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「走！去超市买一条！」
      - 青云天空拎起桶就往回走，步伐坚毅，果断，一往无前。
      - ——资深钓鱼佬，永不空军！
  - if: d.fish === 2
    lines: # 小杂鱼 7% +2声望
      - 青云天空一脸不爽的望着桶里的各种小杂鱼
      - 「不拍照炫耀一下吗？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不！这绝对不是我的实力！绝对！」
      - 「所以……把它们放了？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「放了？哼哼～小鱼们～最好觉悟吧！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「你们将成为我钓上超级大鱼的饵料！加入光荣的进化吧！荣耀会记录你们每一条鱼！」
      - 「…………」
  - if: d.fish === 3
    lines: # 沙丁鱼 7% +2声望
      - 「小青！我钓上来好多沙丁鱼！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「挺厉害的嘛～训练员。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过……发照片还是算了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「他们大概率会回『这玩意儿海边一网兜的事』的吧～」
      - 「还真是不留情呢……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「没办法……钓鱼的世界……就是这么残酷……」
  - if: d.fish === 4
    lines: # 竹荚鱼 7% +2声望
      - 「小青！你看——竹荚鱼！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哇，恭喜恭喜，啪唧啪唧～」
      - 「好敷衍哦～哭哭～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……那给你来点激情的——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！恭喜你！钓鱼水平达到小孩了呢～」
      - 「更伤心了，嘤嘤嘤……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「开玩笑的啦～喵哈哈～」
  - if: d.fish === 5
    lines: # 鲭鱼 7% +2声望
      - 「小青，收获怎么样？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一般般吧。」
      - 青云天空用着满不在乎的语气踢了踢旁边沉甸甸的鱼桶。
      - 「好家伙，这也叫一般般？都满满一桶的鲭鱼了。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这种简单的对我来说小意思～我的目标可是海里的巨物！」
  - if: d.fish === 6
    lines: # 白姑鱼 7% +2声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「身白鳃黑，一看就是白姑鱼」
      - 「还挺漂亮，放水里都不容易看见。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「还不错，趁热打铁！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「不过比起炫耀，这鱼被关注的点更多在吃上吧～」
  - if: d.fish === 7
    lines: # 海鲈鱼 7% +2声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这花鲈力气还挺大，差点脱钩！」
      - 「这个应该挺稀有吧。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……还凑合……拍照留个纪念吧～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「来训练员，我捧着它，你帮我拍。」
      - 钓友评价：「可以啊，这么大的海鲈鱼。」
  - if: d.fish === 8
    lines: # 黑鲷 6% +4声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哦！是黑鲷！我说怎么这么难钓」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，来来来，这个角度。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯……拍的不错～标题就写，小小黑鲷，拿下拿下～」
      - 钓友评价：「钓手技术不错」
  - if: d.fish === 9
    lines: # 隆头鱼 6% +4声望
      - 「小青，你来看，我钓了条长得很像你的鱼。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「像我？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这不是隆头鱼嘛，等等……哪里像我了！！！」
      - 「你上次搁树上睡觉结果一个翻身滚了下来，脑袋磕个大包时跟这鱼一模一样～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「唔……你等着！我这就掉条石狗公给你照照镜子！」
      - 钓友评价：「好漂亮的隆头鱼，在哪钓的？」
  - if: d.fish === 10
    lines: # 真鲷 6% +4声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哦！出大货了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！看！真鲷！」
      - 「好漂亮的鱼，红白色的。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「钓到真鲷可是个，感觉跟过春节一样～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这我肯定要在论坛上炫耀一番～」
      - 钓友评价：「接接接！」
  - if: d.fish === 11
    lines: # 海鳗 6% +4声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜啊啊！！！训练员！快拿网！！！」
      - 「来了来了！这条海鳗也太凶了」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呼——真不容易，训练员，看在你这么及时的份上，这条海鳗归你了～」
      - 「你把钩摘下来再给我……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这是你的海鳗了，当然你来摘……」
      - 「不不不，这份荣誉当然要由钓上来的幸运儿来了～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「可是……可是……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「可是小青怕被咬嘛……小青可是很崇拜训练员的呢～训练员这——么厉害，就帮帮……」
      - 「装可怜不管用哦～还是把线剪了吧……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼——小气鬼——」
      - 钓友评价：「狠人，这玩意也敢摘钩」
  - if: d.fish === 12
    lines: # 海鞘 6% +4声望
      - 「水草？珊瑚？这是什么玩意？扔了扔了……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「嗯？训练员，等等！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这可不是珊瑚，这是海鞘，你是怎么钓上来的！？」
      - 「大概感觉很沉，一使劲就上来了？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「太离谱了，我拍照要发推特上～」
      - 钓友评价：「不信……」
  - if: d.fish === 13
    lines: # 龙虾 6% +1%声望获取率
      - 「是龙虾啊，好像是被勾上来的？扔了扔了～」
      - 被仍在一旁的龙虾对岸上新奇的环境感到陌生，开始漫无目的的游走。
      - 走着走着，它看见一束青色的东西在晃来晃去。
      - 也许是出于对新事物的好奇，也许的对这来历不明的物体感到害怕。
      - 它的本能告诉它，夹住这青色的物体！
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「呜啊！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员！！！尾、尾巴！！！夹、夹住啦——！！！」
      - %YOU%闻讯赶了过来，只见青云天空拼命甩着尾巴，那只龙虾跟荡秋千似的前后晃荡，钳子纹丝不动。
      - %YOU%赶紧上前帮忙解围。
      - 回去的路上……
      - 「小青～我真的错了，别生气了呗～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「哼——」
      - 青云天空抱着尾巴脸扭向一边。
      - 「回去我请你吃龙虾刺身！咱一定把这个仇报了！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这还差不多～」
  - if: d.fish === 14
    lines: # 横带石鲷 2% +10声望 +1%声望获取率
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员，我跟你说，今天感觉超级好。」
      - 「嗯？指的是？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「就像赢下比赛那种感觉，超级棒的感觉～」
      - %YOU%笑了一声，表示加油。
      - 接下来的4个小时，青云天空的表现让%YOU%开始怀疑%SEX%是不是真的能预判什么。
      - 各种鱼一杆接着一杆，甚至有条幼狮鱼。
      - 而%YOU%的鱼桶里始终空空如也，偶尔浮漂一沉，拉上来的也只有孤零零的鱼钩，鱼饵已然不见……
      - 青云天空每钓上来一条，都要举起来朝%YOU%晃一晃，脸上写满了「快看快看快看」。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员——你那边怎么样啊——」
      - %SEX%的声音从堤防那头飘过来，带着明显的得意。
      - 「……在等着」
      - %YOU%没平静地回了一句。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「那就是没口咯？」
      - 青云天空重新挂好饵，把竿抛了出去，眯起眼睛，尾巴在身后悠闲地画着圈。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员～要是实在钓不到，用不用我匀你几条啊～喵哈哈～」
      - 就在青云天空跟%YOU%得意的炫耀时，%SEX%的竿梢猛地一沉。
      - 鱼竿的尾部从栏杆上弹了起来，几乎要飞出去。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「诶——！」
      - 青云天空的反应比%SEX%的脑子快。%SEX%整个人扑过去，双手死死抓住竿柄，身体被那股突如其来的力量拽得往前一踉跄。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「训练员——！救命！！」
      - 没等青云天空喊完，%YOU%已经丢了手里的竿子跑了过来。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「稳杆！先稳杆！」
      - %YOU%蹲到%SEX%身边，一手按住竿尾，一手托住竿身的中段。
      - 两个人的力量加上去，鱼竿才勉强稳住，但竿梢依然弯成了一张满弓，在水面上剧烈地颤动。
      - 泄力器发出尖锐的嘶鸣声，鱼线被疯狂地往外拉。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「什么东西……这什么东西……」
      - 青云天空的声音带着一丝慌乱，但更多的是兴奋。
      - 泄力器叫了十几秒，终于停了。
      - 青云天空开始收线，一圈一圈，速度不快但是很稳。
      - 收到一半的时候，那股力量又爆发了，这次是横向冲刺，鱼线在水面上划出一道长长的水花。
      - 「换边！跟着它走！」
      - 青云天空侧过身，把竿往鱼冲刺的反方向压，整个人跟着在堤防上移动了几步。
      - 这时鱼线的方向变了，水下那个东西被迫转了个弯，但还是在拼命地往下钻。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是不是挂到礁石了？」
      - 青云天空的声音带着一丝紧张。
      - 「没有，还在动——收线，别停。」
      - %SEX%咬着嘴唇，继续摇轮。每摇一圈都要付出很大的力气，手臂上的肌肉绷得紧紧的，额头上的汗水顺着鬓角往下流。
      - 鱼被慢慢拖到了浅层，这时它又挣扎了一次，但已经是强弩之末，侧着身子被拖到堤防边缘，背鳍的硬棘在水面上划出一排细小的波纹。
      - %YOU%拿起抄网，对准鱼头的方向，等青云天空把鱼带进网口，手腕一翻，兜住了整条鱼。
      - 汗水朦胧了青云天空的双眼，待%SEX%擦去时，%SEX%看清了这条鱼的全貌。
      - 这条鱼大概只有四十多厘米。身体侧扁得像一块厚钢板，背部银灰带棕色，腹部偏白。
      - 最显眼的是那十来条暗色的横带，从背部延伸到腹部，像穿着一件条纹外套。
      - 突然，%SEX%丢下鱼竿，一屁股坐在了水泥地上。
      - 「才不到半米，力气怎么这么大。」
      - 「嗯？小青？你怎么了？」
      - 抄网里的鱼还在拼命翻腾，拍打着网兜，溅了%SEX%一脸的海水。
      - 但%SEX%没有躲，就那么跪在地上，爬了过去，眼睛瞪得溜圆。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「横带石鲷。」
      - 青云天空的声音发飘，像是从很远的地方传来的。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这就是……矶钓之王……」
      - %SEX%伸出手，小心翼翼地碰了碰鱼的背鳍，被硬棘扎了一下，立刻缩了回去……。
      - 「训练员……」
      - 青云天空的声音带着压不住的颤抖。
      - %SEX%盯着网里那条还在喘气的鱼，沉默了两秒，然后突然发出一声尖叫。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「钓到啦————！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「横带石鲷！横带石鲷！我钓到横带石鲷了啊啊啊！」
      - 青云天空双手举过头顶，朝着大海疯狂的大喊。
      - 旁边几个钓友都看了过来，有人已经掏出手机在拍了。
      - %YOU%蹲在旁边，看着%SEX%这副彻底放飞自我的样子，忍不住笑了。
      - 「看来你今天的感觉真的没错～」
      - %SEX%慢慢抬起头，脸上的表情从狂喜变成心虚，又从心虚变成理直气壮。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「这条也在预料之中～」
      - 钓友评价：「太幸运了！回去把这跟杆子供起来！」


o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わあ～トレーナー～川、小魚いっぱい～散歩だけって、時間もったいなくない？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、体力あるね。今度いっしょに走ってみる？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「川辺に子猫いる。ねえ～トレーナー知ってる？スカイ、猫語できるよ～」

o_s_drawing:
  - 商店街の週末市、騒がしい人声のなか
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「トレーナー、あっち！」
  - テントに、派手な手描きポスターが下がっている。【ニンジンバイキング新規オープン抽選！謎の特賞降臨！】
  - %YOU%が答える前に、%SEX%はもう早足で屋台の前へ走っていた。
  - 屋台の前で、%YOU%は抽選の説明を見た——一回 30 ウマコイン、ランダム特賞！
  - （高い！）
  - %YOU%は首を振り、もう行こうと示した。
  - セイウンスカイは哀れっぽくこちらを見た。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「トレーナー、一回だけ、いいでしょ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……お願い～～～」
  - セイウンスカイは指を空へ立てて誓った。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「来週！来週はぜったいサボらない！」
  - acc: 1
    key: arcade
    content: 「こほん——最近、手元が厳しい……」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わかった……」
      - セイウンスカイは名残惜しそうに離れた。
  - if: era.get('flag:当前马币') >= 30
    acc: 2
    content: 「わかった、一回だけだぞ。」（ウマコイン-30）
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やった！トレーナー、だいすき！」
      - セイウンスカイは抽選箱の中をがさごそ探り、球を一つ取り出した。開けたら当たったのは——
      - if: d.dice === 4
        lines:
          - 何もない！！！ # 30% 報酬なし
          - セイウンスカイは白紙の券を見て、数秒黙った。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……大丈夫大丈夫～厄除けってことで～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー、隣で本物のニンジン買お。少なくとも食べられるし。」
      - if: d.dice === 3
        lines:
          - 「大」ニンジン一本！！！ # 30% 全能力+8
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「うわあ！でっかいニンジン！」
          - 一本だけだが、普通のニンジンよりひと回り大きい。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ん……明日、食堂行かなくていいね～」
      - if: d.dice === 2
        lines:
          - 大きな大根、箱いっぱい！！！ # 20% 全能力+15 スキルPt+15
          - セイウンスカイは大きな大根の箱を抱えている。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「多い……しかもこんな大きい……いつ食べ終わる……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー、うちに漬物樽ある？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なかったら、来月の献立、ニンジンだけだよ……」
      - if: d.dice === 1
        lines:
          - ニンジンハンバーグ定食、週券！！！ # 15% 全能力+25 スキルPt+25 やる気+2
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「わあ！一等！ニンジンハンバーグ食べ放題、一週間無料……」
          - セイウンスカイの目が輝いた。
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「待って……一週間無料……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「トレーナー！フラワーとスペとグラスとスズカとエル、%THEY%も呼ぼ！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ちょうど七日分。一日ひとり！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「こういう『幸運』、みんなに分けたほうが面白いし～」
      - if: d.dice === 0
        lines:
          - 金のニンジン！！！ # 5% 全能力+30 スキルPt+50 やる気+4 スタミナ&賢さ追加+20（一度のみ）
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「特等！トレーナー！特等だよ！」
          - セイウンスカイは興奮して%YOU%のほうへ跳ねてきた。
          - 店員が謎のギフトボックスを出した。
          - セイウンスカイが開けてみたら——
          - 金のニンジン一本！
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「えっと……金のニンジン？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ん……？ほんとに……金でできてる？」
          - セイウンスカイは迷いながら近づいて匂いを嗅ぎ、端を軽く噛んだ。
          - %SEX%は突然止まり、目をゆっくり見開いて、それから大きく一口かじった。
          - 「！？」
          - 「いきなり食べたのか？大丈夫か！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……トレーナー！これ……！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「これ……！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「甘い！」
          - 「……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「待って……なんか……変！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「三日寝足りたみたいで、それに……生涯最大の一匹、釣ったみたい。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「スカイ——全身、力で満ちてる！」
          - 「そう言われると、かえって心配だ……」

o_s_movie:
  - %YOU%とセイウンスカイはポップコーンを持って映画を見に行った
  - 「見たいものはあるか？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ん……選ぶね……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「これにしよ！」
  - acc: 1
    content: 「ホラー」
    lines:
      - セイウンスカイは始まって十分で、ポップコーンの桶を潰していた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……トレーナー～～～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「この幽霊……足音、しない……」
      - ちょうど山場で、セイウンスカイは突然腕を掴んで顔を埋めた。
      - %YOU%は幽霊より、セイウンスカイに冷や汗をかかされた……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー……今日は……釣り向きだと思い出した。」
  - acc: 2
    content: 「恋愛もの」
    lines:
      - セイウンスカイが男女の初対面を見たとき、%SEX%は退屈そうにポップコーンを食べていた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……わざとらしい……」
      - 雨の告白になると、ポップコーンの桶をこっちへ押し、目を画面から離さない。
      - 誤解で別れる場面では、セイウンスカイは%YOU%の手を強く握り、掌が汗ばんでいる。
      - 最終的に仲直りすると、%SEX%は小さく息を吐き、肩の力が抜けた。
      - 終わったあと、セイウンスカイはまだ余韻が残っているようだった。
      - しばらくして、赤い顔で%YOU%に言った
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー……帰り、腕組んで歩こ～」
  - acc: 3
    content: 「アニメ」
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー知ってる——アニメ、勉強になるよ～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「この猫の飛びかかり……スタートの技術に改良できる」
      - 猫が優雅に着地すると、セイウンスカイは考え込むように頷いた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うんうん……着地の緩衝、スカイより上手」
      - 上映が終わったあと、セイウンスカイは名残惜しそうに振り返っていた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー～明日、あの弓なりスパート、試してみたい……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「冗談だよ……たぶん、にゃはは～」
  - acc: 4
    content: 「アクション」
    lines:
      - セイウンスカイはポップコーンを渡してきた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、ゆっくり食べて。激しいとこまで残して。」
      - 主人公が爆発のなかから飛び出したとき、セイウンスカイの目が輝いた
      - カーチェイスでは%SEX%が少し前のめりになり、肘掛けで指がリズムを叩く。
      - 主人公が悪役を逆転した瞬間、%SEX%は残りのポップコーンをこちらの手に押し込んだ。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふ～トレーナー、すごい！次はスカイも、観客が息忘れるリズムで走る！」
      - 「じゃあ、そこを狙って鍛えるか？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それは……今日は帰って寝る。明日ね、にゃはは～」
  - acc: 5
    content: 「サスペンス」
    lines:
      - 前半三十分、セイウンスカイはポップコーンを持ったまま見入って、食べるのを忘れていた。
      - 新しい手がかりが出るたび、%SEX%の耳が小さく動く。
      - 逆転のとき、%SEX%は眉を寄せて、小さくつぶやいた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……先に気づくべきだった。」
      - 結末で犯人がわかると、%SEX%は長く息を吐いて背もたれに凭れ、得意げに首を傾けて%YOU%を見た。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「どう、トレーナー、スカイの推理、当たった～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナーなら、何分で手がかり見つける？」
      - 「俺か……犯人が捕まったあと、かもな。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それもいいよ。ちょっと抜けてるトレーナーのほうが可愛い。」

o_c_pray:
  - random: true
    lines:
      - セイウンスカイは神社の石灯籠のそばに立ち、揺れる絵馬を見上げた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー～この願いのなか……レースに勝つのは、どれくらい？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「スカイの籤、『自由自在』……寝坊を奨励されてるみたい。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも神様がそう言うなら、次のレース勝ったら、功績半分あげる？」
  - random: true
    lines:
      - セイウンスカイは賽銭箱の隙間を、しばらく眺めていた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、五千ウマコイン入れたら……」
      - 「たぶん駿川さんに、育成費の無駄遣いって怒られる。」
      - %YOU%はポケットから五ウマコインを取り出し、そっと箱へ投げた。
      - 「これで十分だ。願いは……金額より、心だ。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それもそう～」
  - random: true
    lines:
      - セイウンスカイは拝殿のそばに立ち、巫女が鈴を振って祈る後ろ姿を、しばらく見ていた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、巫女さんの祈りの舞、神聖だね。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ねえ……スカイも巫女装束着たら、同じ神聖さ、出るかな？」
      - %YOU%は真面目に考え、頭のなかにセイウンスカイが巫女装束を着た絵が浮かんだ。
      - 「たぶん、可愛いだろうな。」
      - %YOU%は思わず口にしていた
      - セイウンスカイの耳がぱっと立ち、すぐに伏せた。
      - %SEX%は顔をそらし、絵馬のほうを見て、声が小さくなる。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナーったら……変なこと言わないで……」

o_s_restaurant:
  - セイウンスカイは食べ歩き通りの入口に立ち、屋台を一つ一つ見渡した
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「トレーナー！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「左から食べる？右から？どうしよ～選べない～」
  - 「籤で決めるか？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「いい！」
  - random: true
    lines:
      - ラーメン
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「熱い熱い！ふ——ふ——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ん——この出汁……十二時間は煮てる。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、そっちのチャーシュー美味しそう。一口ちょうだい～」
      - %YOU%は甘やかすように、自分の椀のチャーシューを%SEX%へ挟んだ。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やっぱりトレーナー、いちばん甘やかしてくれる。はい、味玉あげる～」
      - %SEX%は数口麺を食べ、ふと目を上げてこちらを見た。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、これから別々に頼んだら、毎回こうやって交換しない？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そしたら毎回、二種類味わえる。」
  - random: true
    lines:
      - たこ焼き
      - セイウンスカイは竹串で一つ刺し、口元でふうふうしてから、%YOU%の前へ出した。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「はい——あ——」
      - %YOU%が渡されたたこ焼きを味わっているのを見て、%SEX%はとろんと笑った
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「へへ～トレーナー、気づいた？たこ焼きって、最初の一口がいちばん美味しい。」
      - %YOU%は味わいながら、何度も頷いて褒めた
      - セイウンスカイは残りのたこ焼きを見て、考え込む。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、いちばん美味しい一口、あげた。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「残りは、スカイが仕方なく消すね～」
  - random: true
    lines:
      - クレープ
      - セイウンスカイは店員からイチゴクリームのクレープを受け取り、左右から眺めた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、こういうの……どう食べたら、あちこちにつかない？」
      - %SEX%は一口試したら、反対側からクリームがはみ出て、鼻先についた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「失敗～」
      - %YOU%は手を伸ばして%SEX%の鼻先のクリームを拭き、自然に口へ入れた。
      - セイウンスカイの耳がぱっと立ち、それからぐにゃりと伏せた
      - %SEX%は顔をそらし、頬が真っ赤で、しばらくしてごく小さな「ありがとう」を絞り出した
      - そのあと一路、%SEX%はうつむいてクレープと真剣勝負し、小さく慎重に噛んで、クリームはもう漏れなかった。
  - random: true
    lines:
      - おでん
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ん——大将！これと、これと、あとこれ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「はい——トレーナー、これ、トレーナーの好きなの。」
      - セイウンスカイはしらたきを椀へ入れ、それから大根を一切れ挟んだ。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「大根、食べてみる？おでん、これがいちばん美味しい！」
      - %SEX%は自分の椀の大根を挟み、自然に口元へ出した。
      - それから何か思い出し、手が空中で止まり、首まで一気に赤くなる。
      - %SEX%は急いで大根を椀へ戻し、うつむいて、声がどんどん小さくなる。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あの……自分で挟んで……あ、あーんしたら、恥ずかしい……」

o_s_dating: # 順番に発火
  - if: d.dating === 0
    lines:
      - （迷子のふりをして、トレーナーが慌てて道を探してる隙に救い出し、これからはスカイに頼らせる）
      - %YOU%とセイウンスカイは中庭の新しい小径を歩いていた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （ふんふん～下見は済んでる。わざと分かれ道へ）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ありゃ、トレーナー、こっち帰り道じゃないね。このあたり、まだ開発中。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ねえ、トレーナー～道、わかる？スカイに頼んでみる～」
      - セイウンスカイは意地悪そうな顔で、%YOU%が%SEX%に助けを求めるのを待っている。
      - こちらは平気な顔で携帯を出し、GPSを点けた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「怖がらなくていいよ。ナビだと、この路地抜けたらコンビニ。お腹空いてる？」
      - セイウンスカイは固まり、頬が薄く赤らむ。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……トレーナー、いつ地図入れたの？！」
  - if: d.dating === 1
    lines:
      - （猫を使って親密な話へ誘導し、トレーナーにもっと素直になってもらう）
      - %YOU%とセイウンスカイは校外の野良猫に餌をやっていた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あの猫、甘えん坊だね～トレーナーも、そんなふうに甘えてくれたらいいのに。」
      - %YOU%はしゃがんで猫の顎を掻いた
      - 「先月去勢したんだ。去勢した子猫は、とくに大人しい。」
      - セイウンスカイはあまりに科学的な答えに詰まり、顔が急速に赤くなる。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……そういう知識、そんなに正確に覚えなくていい！」
  - if: d.dating === 2
    lines:
      - （トレーナーとホラーを見て、驚いた隙に抱きつき、スカイが安心を提供する。）
      - セイウンスカイは%YOU%をホラーへ誘った
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、幽霊怖いなら、こっちに隠れていいよ。」
      - そう言いながら、自信たっぷりに胸を張る
      - %YOU%は頷いて承諾した
      - 映画が山場に入り、青白い影が突然飛び出した——
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うわあ！！！」
      - O(≧口≦)O
      - セイウンスカイはトレーナーの首に必死にしがみついた。
      - （息、できない……）
  - if: d.dating === 3
    lines:
      - （寝たふりで肩に寄り、トレーナーを照れさせる）
      - 帰りの電車で、セイウンスカイは窓側に座り、こちらは%SEX%の隣。
      - セイウンスカイは突然、肩へもたれた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （ふんふん～寝るふり。女の子が肩に乗ったら、トレーナー、顔赤くして心拍上がるはず～）
      - 一駅すぎて……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Z～Z～Z～」
      -
      - 「スカイ、もう着くよ～起きて～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - ！！！
      - セイウンスカイはぱっと目を開け、自分の頭が肩に乗っていること、口角にうっすら水跡があることに気づいた。
      - %SEX%は勢いよく座り直し、口角を拭いて、顔が目に見えて真っ赤になる。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ト、トレーナー、ずっと枕にさせたの？！」
      - 「気持ちよさそうだったから、起こすのがもったいなくてな。」
      - セイウンスカイはうつむいて、小さな声で答えた
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あ、ありがとう……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （この台本、違う……）
  - if: d.dating === 4
    lines:
      - （強力接着剤で蓋を固めておき、トレーナーが開けられないところで、自分は軽く開けてみせる～ 注：%UMA%の力は非常に大きい）
      - 二人は通りを歩いている。
      - セイウンスカイは急に飲み物を二本買いに行き——そのうち一本の蓋を、%SEX%がこっそり強力接着剤で固めておいた。
      - 戻ると、もう一本を自然に手に取る。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、お水～」
      - %SEX%は加工したほうを%YOU%の前へ押した。
      - %YOU%は瓶を取り、軽くひねった……
      - 開かない……
      - 「ん？」
      - %YOU%は力を入れた……
      - まだ開かない……
      - セイウンスカイの目が輝き、眉を上げて、意地悪く笑った。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「開かない？スカイが手伝おっか～」
      - 「おかしい……この水、何かある……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナーが雑魚なだけ～スカイが——」
      - セイウンスカイは流れで瓶を取り、力を入れてひねった——
      - 開かない……
      - その場が静まり返った……
      - もう一度力を入れてひねった——
      - まだ開かない……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （うわあ！この接着剤、こんなに強い！）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （ダメ！セイウンスカイ！%UMA%の名誉にかけて！）
      - セイウンスカイは全力でひねった——
      - 「ばん！」
      - 瓶が真ん中から破裂し、飲み物が二人にかかった。
      - %YOU%はすぐティッシュを出して%SEX%を拭いた。
      - %SEX%はうつむき、耳を伏せ、声がこもっている
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ごめん……」
      - 「平気だ。俺の力が足りなかっただけだ。開けてくれて、ありがとう。」
      - %SEX%はぱっと顔を上げ、まだ赤い顔に、少し驚いた目
      - 唇が動いて、最後に小さくつぶやいただけだった。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ん……トレーナー、優しすぎ……反則……」
  # イベント「優雅なお茶会」解放後
  - if: d.dating === 6
    lines:
      - （トレーナーを午後茶に連れていき、正しい飲み方を教えて、スカイの博識を見せつける。）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー、この店。スズカが薦めてたの。わざわざ誘ったんだよ～」
      - 「じゃあ、しっかり期待するかな～」
      - しばらくして、店員がティーポットとスイーツのタワーを卓へ置いた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「来た来た～トレーナー、先に食べて～」
      - セイウンスカイは悪い笑みで%YOU%を見ている。%YOU%は少し疑ったが、それでもティーカップを取った。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ぷぷっ！失敗！」
      - セイウンスカイの突然の声に、%YOU%はびくりとした。
      - セイウンスカイは眉を上げ、得意げに言った。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「カップの持ち方——失敗！親指と人差し指で取っ手を摘み、中指で軽く支え、ティーカップと受け皿を一緒に。」
      - 「えっと……わかった……」
      - %YOU%はスカイの教えどおり、ぎこちなく茶を飲んだ。
      - ティーカップを置き、%YOU%は最上段のスイーツを取った。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ぷぷっ！失敗！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「スイーツは下段の塩味サンドから。次が中段のスコーン、最後が上段の甘いもの。」
      - 「はいはい……」
      - 得意げなセイウンスカイを見て、%YOU%は%SEX%の今日の目的をだいたい察した。
      - 「スカイ、すごいな。午後茶の作法、全部知ってる。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふんふん～当然～スズカに午後いっぱい特訓してもらったんだよ！」
      - 「では、優雅なセイウンスカイお嬢さま、正しい午後茶を見せてもらおうか～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「はいはい～まったく、しょうがないなあ～」
      - そう言うと、セイウンスカイはティーカップを取り、それらしい仕草で飲み始めた。
      - %YOU%は普段と別人のようなセイウンスカイを見て、思わず褒めた。
      - 「今日のセイウンスカイ、品があるな～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ごほっ！！」
      - セイウンスカイは%YOU%の言葉で頭が止まり、茶が気管に入って%SEX%は咳き込んだ。
      - 「これも午後茶のテーブルマナーか～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ごほっ……トレーナーが変なこと言うから！」
      - 「はは～悪い悪い～ほら、拭いて……」
      - %YOU%はセイウンスカイをなだめながら%SEX%にティッシュを渡し、セイウンスカイはひったくった。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふん——わかればいい……」
      - 「今日は優雅な午後茶、体験させてもらったよ」
      - 「じゃあ次は、貴族の作法は退場。ここからは庶民の食べ方だ」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ん——それもそう～トレーナー！あのマカロン！」

good_night_normal:
  sync: true
  lines:
    - if: era.get('status:20:沉睡') > 0 || era.get('status:20:马跳S') > 0
      lines:
        - if: era.get('status:20:马跳S') === 0
          content: 「Z Z Z～（セイウンスカイは子猫みたいに、深く眠っている……）」
        - %YOU%は眠るセイウンスカイを見て、%SEX%の普段の昼寝と同じだと感じた……
        - それで%YOU%はそっと%SEX%を背負い、寮の下まで送った。
    - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おお、星が見える……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「つまり……夜釣りの準備、しなきゃ！」
        - セイウンスカイは%YOU%の鋭い視線を感じた——
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おや、違う？わかった、わかった……」
        - ～ (= ^ - ω - ^ =) ～
    - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「寮だね、トレーナー、じゃあ帰る。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明日の朝、訓練場で——時間どおり行く……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん……たぶん、おそらく、期待しすぎないほうがいいよ、にゃはは～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「とにかく——おやすみ～」
    - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ねえ～トレーナー、知ってる？今、哲学の問題を思いついた——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%UMA%は、なんで午後トレーニングするの？猫はトレーニングしない……でも飛べるくらい走る。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これ、大事な問題だよ！人生、考えるね～午後のトレーニング？明日の自分に任せる～」
        - ฅ (^ ω ^ ฅ) ～ ﾉｼ
        - 「いま、昼を食べ終わったばかりだぞ！」
        - 無力なトレーナーは、相棒が午後の陽のなかへ消えるのを見るしかなかった。


# 75 爱慕以上
# TODO
gn_sex:
  title: 叫春
  lines:
    - 在一天忙碌的工作结束后，%YOU%回到了公寓。
    - 刚打开门，%YOU%就听到一股奇怪的声音从卧室内传来。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「嗅哧～～嗅哧～～」
    - %YOU%瞬间警惕起来，蹑手蹑脚的走近，那奇怪的声音也愈发清晰。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「嗅哈～～嗅哈～～」
    - 这时，%YOU%听到了一个熟悉的声音。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「唔——呼——嗯哼～～～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「训练员的气味，喜欢～～嘿嘿～～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「喜欢～喜欢～喜欢～喜欢～喜欢～」
    - （小青吗……）
    - %YOU%走进卧室，啪一下把灯打开。
    - if: d.check === 2
      lines:
        - 但%YOU%的目光所及只有凌乱的床单，却不见目标人物。
        - 砰！
        - 身后的门被突然关上，%YOU%心头一紧，一双手从背后紧紧的抱住了%YOU%。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员好过分哦～这么长时间都没有跟小青亲热……」
        - 说完便抱着%YOU%扑到了床上。
        - 「小青——唔——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嘘——今天——谁也跑不掉哦～～」
    - if: d.check < 2
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「呜啊！！」
        - 只见青云天空光着身子，身上披着%YOU%未洗的衬衫，床上被她搅的十分凌乱。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「训练员……那个……」
        - 她抱着你的枕头害羞的蜷缩着。
        - 看到自己搭档可爱的模样，这时%YOU%——
        - acc: 1
          content: 忍不了了！
        - acc: 2
          content: 默默关上门……（拒绝）


birthday:
  title: 誕生日
  lines:
    - セイウンスカイがドアを開けると、卓のケーキを見て、一瞬止まった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「覚えててくれる人、いるんだ。にゃはは！」
    - %YOU%はドアの陰から出て、クラッカーを鳴らした。
    - 「ぱん！お誕生日おめでとう！今日はゆっくりしろ～」
    - セイウンスカイの驚きは顔に溢れて、興奮して駆け寄り%YOU%を抱いた
    - %YOU%は笑って%SEX%の頭を撫で、ポケットからライターを出し、一本ずつ蝋燭に火をつけた。
    - 「さあ、誕生日の一幕目は——願い事だ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うんうん！」
    - セイウンスカイは両手を合わせ、目を閉じた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「来年は、トレーナーより大きい魚、釣りたい！」
    - %SEX%は片目を開けて%YOU%を盗み見て、自分から先に笑い出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「冗談だよ～願いは口に出したら叶わない。」
    - %SEX%はもう一度目を閉じ、口角に笑みが残ったまま、今度は少し長く黙った。
    - %SEX%が目を開けると、一息で蝋燭を吹き消した。
    - 「何を願った？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今度は秘密～」
    - セイウンスカイは悪戯っぽく片目を閉じ、指を一本立てて応えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ今日——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、先に限定の新しい餌、買いに付き合って！それから一日中買い物袋持って！それから特大パフェおごって！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それから——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それから一旦預ける。ケーキ食べてから！」

cl_new_year:
  title: 新年
  lines:
    - 参道の両側は人で埋まり、セイウンスカイは%YOU%の袖を引いて人波を抜け、もう一方の手には買ったばかりの焼きイカ。
    - 「ゆっくり食べろ。」
    - %YOU%は%SEX%の口角についたタレを見て、ポケットからティッシュを出した。
    - セイウンスカイは顔を上げて待っている。
    - %YOU%は困ったように笑い、%SEX%の代わりに拭いた。
    - 「よし、行こう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん！」
    - %SEX%はイカを一口噛んで、足が突然止まった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、トレーナー！おみくじ、空いてる。早く早く！」
    -
    - （おみくじ所）
    - セイウンスカイは筒から籤を振り出し、見下ろして眉を上げた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！大吉だよ！」
    - %SEX%は%YOU%の前で振り、口角が得意げに上がりきっている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今年、運いいね～にゃはは！」
    - %YOU%も一本振り出し、見下ろした瞬間、笑顔が固まった。
    - セイウンスカイは寄ってきて、頭がほとんど%YOU%の肩につく。
    - 字を確認すると、%SEX%は「しゅっ」と大きく後ろへ跳ねた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わ——！！！大大大大大凶？！どうやって引いたの？！」
    - %SEX%は胸の前で腕を組み、不吉なものでも見るように%YOU%を睨んだ。
    - 「……『大』はそんなに多くない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちょ、ちょっと離れて！厄、移る！」
    - %YOU%は手の籤を見て、落ち着いたふりをした。
    - 「……こほん、木に結べば厄が落ちるらしい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なら早く結んで！」
    - %YOU%は白い紙の下がる老木へ歩き、つま先立ちして低い枝に籤を結んだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もっと上！もっと上！高いほど効く！」
    - %YOU%は無言で%SEX%を見て、つま先立ちし、もっと高いところへ結んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はいはい、そこでもいい……でも離れてて。厄には三メートルの安全距離があるの、知ってる！」
    - %YOU%は結び終えて%SEX%のそばへ戻ると、セイウンスカイはすぐ一歩下がった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三メートル！警告！スカイと三メートル、空けて！」
    - %YOU%は%SEX%の大敵にでも遭ったような様子を見て、吹き出した。
    - 「お前、大吉持ってるだろ～何が怖い。行こう～」
    - %YOU%は本殿のほうへ向き直り、セイウンスカイはその場で首を傾げて%YOU%を数秒見て、小走りで追いついた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……ほんと、平気？」
    - 「籤だろ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも大凶だよ！いちばん悪い！大凶引いてその場で泣いた人、いるって！」
    - 「じゃあ俺も泣こうか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それはやめとく……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まあ、そんなに呪われてもないよ。おじいちゃんが言ってた。籤は籤、信じればあり、信じなければなし」
    - 「さっきあんなに離れてたのは？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そ、それはトレーナーの心配！」
    - %SEX%は少し赤くなり、足を速めて先へ行った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早く早く、お参りして、厄落とし！」

cl_valentine:
  title: バレンタイン
  lines:
    - 「今日はバレンタインだな。」
    - %YOU%はトレーナー室へ向かう道で、どこにでもあるピンクの空気を見て、つい呟いた。
    - 「%UMA%たち、ほんと——盛り上がってる。」
    - 資料を抱えた手がきつくなり、%YOU%はある、一日中釣りして寝てる影を思い出した
    - 「セイウンスカイは——」
    - 言いかけて、%YOU%は先に首を振った。
    - 「まあいい、まずない。」
    -
    - トレーナー室のドアを開け、%YOU%が資料を卓に置いて座った途端、ドアが突然開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！」
    - セイウンスカイが駆け込み、まだ少し息が上がっている。
    - %SEX%は精巧な箱を抱えて後ろに隠しているが、箱が大きすぎて、ぜんぜん隠せていない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「へへへ——」
    - %SEX%は前まで来て、箱を卓に置いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これ、スカイが心ぜんぶ注いで作ったの！がんばったよ！」
    - %SEX%は両手を卓につき、少し前のめりで、目をきらきらさせてこちらを見ている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから、トレーナー、スカイの気持ち、味わってくれる？」
    - %SEX%の表情は真剣で、走ったあとの赤みがまだ残っている。
    - %YOU%は%SEX%を見て、固まった。
    - 「お前が、これを用意するのか？」
    - セイウンスカイは眉を寄せた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーったら——冗談でも、時と場合、見て？」
    - %YOU%は気づいて、すぐ謝った。
    - 「悪い悪い。いつもの流れなら、猫缶を用意して、俺に猫をやれって言うはずだ。」
    - セイウンスカイは不満げに鼻を鳴らした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「落ち着きすぎ！可愛い%UMA%がバレンタインにチョコくれてるんだよ！」
    - 「はいはい、悪い。」
    - %YOU%は謝りながら、期待して箱を開けた。
    - 中には猫缶が一つ、横たわっていた。
    - ……
    - %YOU%はその猫缶を三秒見て、顔を上げてセイウンスカイを見た。
    - %SEX%は笑いをこらえ、目が三日月になっている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「にゃはは——！」
    - %SEX%はついに耐えきれず声を出して笑い、前後に揺れた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「悪戯計画、大成功！」
    - %YOU%は呆れた顔で%SEX%を見て、また猫缶を見下ろした。
    - （……そう来るよな？期待、無駄だった……）
    - セイウンスカイは笑い終わると、手を伸ばして%YOU%の肩を叩いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「諦めないで——開けてみる？」
    - %YOU%は一瞬止まり、手を伸ばして猫缶を取り出し、開けた。
    - 缶の中には、きちんと並んだ手作りチョコがいくつか。形は完璧ではないが、手が入っているのがわかる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こっち……ほんとに真面目に作ったよ。」
    - %SEX%は少しうつむき、顔がゆっくり赤くなり、声はさっきよりずっと小さい。
    - %YOU%は手のチョコを見て、また%SEX%を見た。
    - 「ありがとう。ちゃんと味わう。」
    - 「このバレンタイン、嬉しいよ……」

cl_palace:
  title: 殿堂週
  lines:
    - 殿堂週は、トレセン学園全体を厳かな空気で包んでいた。
    - %YOU%とセイウンスカイは学園を歩き、中央の三女神像へ着くと、周りにはもう人が集まっていた。
    - %UMA%たちは列を作り、順に像の前へ進み、両手を合わせて目を閉じ、願う。
    - %YOU%は足を緩め、その敬虔な後ろ姿を見て、小さく言った
    - 「神聖だな。」
    - 「レース%UMA%にとって、いちばん大事な日か？」
    - セイウンスカイは頷き、遠くの像に目を落とした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、伝説だと、レース%UMA%は女神に祝福された精霊なんだって～」
    - %SEX%の声は小さく、普段の怠惰な調子すらしまって、格別に厳かだ。
    - 「じゃあ、俺たちも参ろう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん——」
    - 二人は列の後ろへ行き、前の%UMA%に合わせて少しずつ進んだ。
    - セイウンスカイはめずらしく静かで、列が退屈だと愚痴らず、寝る場所も探さない。%SEX%はただ%YOU%のそばに立ち、前の像が少しずつ近づくのを見ていた。
    - ついに番が来た。
    - セイウンスカイは前へ出て三女神像の前に立ち、%YOU%は%SEX%の少し後ろで両手を合わせ、目を閉じた。
    - 周りは静かで、風が葉を鳴らす音だけだ。
    - %YOU%は心のなかで、そっと願った——
    - 目を開けると、セイウンスカイはもう願い終え、首を傾けて%YOU%を見て、口角に薄い笑みがある。
    - 祈りを終え、帰り道で%YOU%は聞いた
    - 「何を願った？」
    - セイウンスカイは瞬きし、答えず、聞き返した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーは？そんなに長く——」
    - 「お前が、ずっとこうやって走っていけるように。自由自在に走っていけるように。」
    - セイウンスカイの尻尾が、そっと揺れた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「感謝、だよ。」
    - %SEX%は振り返り、三女神像のほうを見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （ありがとうございます。出会わせてくれて……）

cl_fans:
  title: ファン感謝祭
  lines:
    - 年に一度のファン感謝祭が、また始まった。
    - トレセン学園は今日、とくに賑やかで、どこも人だ。
    - グラウンドには仮設ステージが立ち、廊下は応援棒を掲げるファンで埋まり、記者たちはカメラを担いで角を回り、取材できる相手を探している。
    - 入口のサイン会の前には長い列。
    - 卓にきちんと座ってファンへサインする%UMA%もいれば、記者に囲まれて最近のトレーニングの話を笑ってする者も、ファンを自分のテーマ店へ引いて食べながら話す者もいる。
    - %YOU%はこの喧騒のなかをゆっくり歩き、耳にはシャッターと歓声が満ちている。
    - （セイウンスカイなら、たぶん%SEX%のファンをいちばん濃い木陰へ連れていき、それから——みんなで昼寝だ。）
    - （うん、%SEX%らしい。）
    - %YOU%は小さく笑い、先へ進んだ。
    - 角を曲がると、%YOU%は教室を改装したカフェを見た。入口には花文字の看板——【黄金世代カフェ】。
    - （黄金世代カフェ？なんだか……）
    - %YOU%は見当をつけ、ドアを押して入った。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「いらっしゃいませ！」
    - エルコンドルパサーは白黒のメイド服で入口に立ち、片手に空のトレイを載せ、雑誌の表紙から降りてきたような笑顔だ。
    - （やっぱり……）
    - エルは%YOU%を見て、一瞬止まり、それから笑みが濃くなり、少し意地悪な色が混じる。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「スカイ——！」
    - %SEX%は奥へ呼びかけ、わざと語尾を長く伸ばした。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「このお客様、席へどうぞ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はーーーーい」
    - %YOU%の聞き慣れた、怠惰な声が奥から届き、それから%YOU%は見た——
    - セイウンスカイは青と白のメイド服を着て、頭にレースのカチューシャ、白いエプロンを腰に結び、左右非対称の蝶結びだ。
    - 普段あまり見ない装いのせいか、%SEX%全体が布団から引きずり出されて、無理にこの服へ押し込まれたように見える。
    - %SEX%はトレイを持って出て、目を細めている。普段は怠惰だが、%SEX%はそれでも仕事をしようとしている。
    - それから%SEX%は、入口に立つ相手をはっきり見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うわあ！！！ Σ(っ °Д °;)っ」
    - %SEX%は全身を後ろへ縮め、半歩下がり、トレイのカップが揺れて、澄んだ音を立てた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、あ、あ——トレーナー！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでここに！」
    - 「ファン感謝祭だ。」
    - %YOU%は入り、%SEX%の反応には気づかないふりをして、隣の空いた卓へ向かった。
    - 「さて、まずはコーヒーだな。」
    - セイウンスカイはその場で二秒止まり、それから急にエルのほうを見た。
    - エルは入口で別の客を案内していて、%SEX%の視線を感じると振り返り、%SEX%に目配せして親指を立てた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……裏切り者。」
    - セイウンスカイは小さく呟き、それから%YOU%へ、極端に不自然な笑顔を作った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい、コーヒー、すぐ……」
    - 言い終えると、逃げるように取りに行った。
    - %YOU%は周りを見た。接客しているのはエルとスペシャルウィークとセイウンスカイだけだ。
    - （キングヘイローとサイレンススズカが厨房か……）
    - そのときスペシャルウィークがコーヒーを持って卓へ置いた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「どうぞ、コーヒーです。」
    - 「ありがとう。ところで、さっきの青髪の店員は？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「えっと……スカイが、どうしても私が運ぶって……」
    - スペシャルウィークは苦笑した。
    - 「ああ……そうだ、ここの看板は何だ？」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「もちろんオムライスですよ～美味しい魔法つきです～」
    - 「一つくれ！それから——セイウンスカイ指定で魔法を」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「まかせて！」
    - エルは横から先に引き受けた。
    - 言い終えると厨房へ走り、激しいやり取りのあと、セイウンスカイが暗い顔で出てきた。手にはオムライスの皿。
    - 金色の卵で飯を包み、ケチャップで歪な笑顔が描いてある。口が少し曲がって、殴られたみたいだ。
    - 皿の端にはブロッコリーが少しとトマト二枚。盛り付けは精巧とは言えないが、真面目に置いたのはわかる。
    - セイウンスカイは皿を%YOU%の前に置き、手がまだ小さく震えている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「オムライス。どうぞ。」
    - 言い終えると逃げようとした。
    - 「待て。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「…………今度は何。」
    - 「何か忘れてないか？」
    - セイウンスカイの顔が「さあっ」とまた赤くなった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……いや。」
    - 「お客様は神様だぞ」
    - %YOU%は入口のポスターを指した。そこには「当店はフルメイドサービス」と書いてある。
    - セイウンスカイは%YOU%の指の先を見て、表情が拒否から絶望へ変わった。
    - %SEX%は深く息を吸い、目を閉じて、早口で言った
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「美味しくな～れ！萌え、萌え、キューン……」
    - 声は蚊の鳴くようだ。
    - 「聞こえないな。これじゃオムライス、美味しくならないぞ。」
    - %SEX%は%YOU%を睨みつけ、顔はもう煙が出そうなほど赤く、指が硬くハートを作った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おいしくなれよ～！萌え、萌え、きゅん！」
    - %YOU%は一口味わった。
    - 「ん——味、いい！さすがスカイの魔法だ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それはよかったです、お客様、ほかにご用がなければ……」
    - 言い終えないうちに、セイウンスカイはまた厨房へ走った。
    - %YOU%が満足して食べ終わると、スペシャルウィークが%SEX%のファンと写真を撮っているのが見えた。%YOU%に、いい案が浮かぶ。
    - 「店員！ちょっと来い！」
    - %YOU%の突然の呼び声にセイウンスカイはびくりとし、恐る恐る寄ってきた。
    - 「ぱしゃり！」
    - %YOU%は突然携帯を出して、二人の写真を撮った。
    - 画面のなか、%YOU%は笑っていて、セイウンスカイは慌てた顔、耳が真っ直ぐ立ち、口が開いて何か言いかけ、手が途中まで出てレンズを隠せなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ダメ！この写真、変——消して消して——」
    - セイウンスカイは飛びかかって携帯を奪おうとしたが、%YOU%は器用にかわした。
    - 「いいだろ。記念撮影、許可してるんだろ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーは例外！」
    - %SEX%は唇を噛んで%YOU%を見つめ、目に水気が溜まり、尻尾がブラシみたいに逆立っている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ、外に出さないで！」
    - 「出さない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「誓う？」
    - 「誓う。」
    - 言い終えると会計して外へ向かい、出る前に一言。
    - 「うん、トレーナー室に飾るのは悪くない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！」

cl_halloween:
  title: ハロウィン
  lines:
    - ドアが細く開いた。
    - %YOU%が顔を上げると、オレンジ色の何かが割り込んできた
    - %SEX%は橙と白の縞靴下に、同系色の小さなスカート、頭に猫耳カチューシャ、顔にはアイライナーで歪な髭が三本。
    - 体にはオレンジの毛布をマント代わりに巻き、尻尾は後ろの穴から出して、先に小さな鈴がついて、動くたびチリンチリンと鳴る
    - 「……それは。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Trick or treat！！！」
    - %SEX%は両手（爪？）を高く上げ、尻尾が後ろで揺れている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早くお菓子出せ、でないと悪戯するにゃ！」
    - %YOU%は%SEX%を見上げ、二秒固まった。
    - 「……何の扮装だ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～猫又！」
    - セイウンスカイは得意げに顔を上げて腰に手を当て、%YOU%はよく見た。
    - 顔の髭は曲がっていて、猫耳ピンはスーパーの安物、片方の耳が半分潰れている。うん……尻尾の鈴はよく鳴る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほかは後回し！キャンディー出せにゃ！」
    - %YOU%は引き出しから小魚ビスケットの袋を出した。
    - %SEX%は見下ろし、また顔を上げて%YOU%を見た。目に「それだけ？」と書いてある。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ここ、貧しすぎるにゃ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあこの猫又が、施してあげる～」
    - %SEX%は鞄から手作りの紙袋を出して%YOU%に押し付けた。
    - 中は形の歪なキャンディー——それに、どう見てもイカみたいなものが一つ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふんふん～すごいでしょ～」
    - %YOU%が%SEX%の戦利品を見ているあいだに、%SEX%が一歩で寄ってきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お菓子くれなかった罰、悪戯始めるよ～覚悟してにゃ！」
    - %YOU%が反応する前に、%SEX%は鞄から化粧ペンを出し、もう一方の手で肩を押さえた。
    - 「待て——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「待たない！」
    - ペン先が顔に落ちた瞬間、%SEX%は声を出して笑った。
    - 冷たい感触が額から鼻先へ、鼻先から頬へ滑る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ここにもう一筆……ん……こっちも……」
    - %YOU%は目を閉じ、%SEX%が顔いっぱいに腕を振るのを感じ、ときどき止まって眺めて、また筆を進める。
    - 「もういいか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「急がないで、巨匠の作画には時間が要る～」
    - さらにしばらくした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい、目開けて、この猫の傑作見て～」
    - %SEX%はペンをしまい、声に得意が溢れている。
    - %YOU%が目を開けると、%SEX%が鏡を掲げ、画面に%YOU%の顔が映っていた——
    - 額には歪な「ばか」、鼻先は黒く塗られ、両頬に髭が三本ずつ、顎には肉球の跡。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はははははは——トレーナー、猫になった！大ばか猫！」
    - %YOU%は画面の自分を見つめ、また%SEX%の笑って赤い顔を見た。
    - 「趣味、かなり独特だな、」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「罰、まだ終わってないにゃ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次、いっしょにお菓子もらいに行く！」
    - %YOU%は一瞬止まった。
    - 「俺が？今？この顔で？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そう！」
    - %SEX%は当然のように頷き、尻尾が後ろで揺れている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この扮装、すごくいいよ。四方を驚かせるにゃ！」
    - そう言いながら%SEX%はもう入口まで引き、ドアを押すと夜風が入り、外の微かな騒ぎが乗ってくる。
    - %SEX%は振り返って%YOU%を見た。猫耳カチューシャが廊下の明かりで揺れた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行こ行こ、あのちびっ子たちに見せて、これが本物の猫又コンビ～」

cl_christmas:
  title: クリスマス
  lines:
    - クリスマスの商店街はどこも電飾で、空気には焼き栗とホットワインの香りが漂っている。
    - %YOU%はセイウンスカイに手首を掴まれ、人波のなかを苦労して進んだ。
    - %SEX%は今日、乳白色の厚い外套を着て、マフラーをゆるく首に巻き、片手でこちらを引き、もう一方には買ったばかりのリンゴ飴。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！あっちあっち！」
    - %YOU%は%SEX%の指すほうを見た——小さな女の子でいっぱいのアクセサリー店で、ショーウィンドウにはトナカイのカチューシャとサンタ帽が下がっている。
    - 十分後、%YOU%は光るトナカイの角を頭に載せて店を出た。
    - セイウンスカイは後ろにつき、頭にはミニサンタ帽、先の小さな毛玉が%SEX%の歩幅でぴょこぴょこ揺れる。
    - 数歩行くと、%SEX%はまたホットワインの屋台の前で止まった。店主がカップにシナモンスティックを挿していて、香りが遠くまで届く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん～いい匂い！でも列、長い……」
    - %SEX%は長い列を首を傾げて見て、それから%YOU%へ向き直り、悪い笑みを浮かべた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、並んでて。スカイ、先にあっち見る。戻ったらちょうど飲める。」
    - %YOU%が承諾する前に、%SEX%は人波へ潜り、サンタ帽が灯火のなかで一度揺れただけだった。
    - %YOU%は二十分並び、ホットワイン二杯を持って%SEX%を探すと、%SEX%は毛糸帽の小さな屋台の前にしゃがんでいた
    - 手には毛糸帽が二つ——一つはピンクの猫耳、一つは普通の赤いサンタ帽。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？戻った？お疲れ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご褒美、選んで。一つあげる！」
    - %SEX%はワインを先に地面へ置き、それから二つの帽を上げた。
    - 「角、もう買っただろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あれ、クリスマスの贈り物としては手抜きすぎ。もう一つ足す。猫耳、トレーナーに似合うと思う。」
    - %YOU%はその可愛い猫耳を見て、少し照れた。
    - 「ん……赤いほうで。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え——」
    - %SEX%は声を伸ばしたが、それでも赤いほうを手に押し込んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わかった——トレーナーの言うとおり。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「猫耳、トレーナーに似合うと思ってたのに～」
    - それから立ち上がり、しゃがんで痺れた脚を叩いた
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早く、先、まだたくさん店ある。」
    - %SEX%は%YOU%の手を握り、%SEX%の歩幅についていく。
    - 電飾が頭上で点滅し、%SEX%の指が掌のなかで、温かく、柔らかい。
    - %YOU%は突然、あることを思い出した
    - ワイン、置いたまま！


# プレイヤー誕生日 ターン開始時 好感200超で発火
ws_happy_birthday:
  title: お誕生日おめでとう！！！
  lines:
    - 近頃の忙しい仕事で、%YOU%は心身ともに擦り減っていた。
    - 「はぁ……この山を直したら、あと……十山……」
    - 「最近、仕事が多すぎる……午後はセイウンスカイのトレーニングもある……」
    - 「昼は……サンドイッチでも買えばいいか……」
    -
    - 午後——
    - %YOU%は時間どおりトレーナー室の前へ来て、セイウンスカイが遅れませんようにと祈りながらドアを引いた。
    - ぱん！！！
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お誕生日おめでとう！トレーナー！！！」
    - 「うっ！」
    - %YOU%がドアを開けたと同時にクラッカーの紙吹雪が降り、突然の破裂音に%YOU%はその場で固まった。
    - %YOU%は部屋を見渡した。華やかな装飾はなく、卓に大きな誕生日の看板が立ち、横には見た目はいまいちでも具だくさんのケーキがある。
    - （誕生日？）
    - （ああ、今日は俺の誕生日……）
    - （スカイのやつ……覚えてたのか……）
    - （このケーキの形、独特だな……）
    - （上に乗ってるのは……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？ねえ——トレーナー——もしもし？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「変、反応ない。クラッカー、頭に当たった？！トレーナー！！！」
    - やらかしたと思ったセイウンスカイは、急いで%YOU%の肩を揺すった。
    - 「待て待て——スカイ、スカイ、大丈夫だ。追いついてなかっただけ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……もう、平気なら反応してよ……」
    - セイウンスカイは不満げに%YOU%の顔を揉んだ
    - 「はは、悪い悪い、最近忙しくて……」
    - 「スカイ、ありがとう。嬉しいよ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……確かに……その濃いクマ見て、最近大変だったでしょ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早くケーキ食べて！手製だよ～形は、ちょっと負けてるかも。でも具は、減らしてないよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日は、ゆっくりして～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ最後にもう一回——お誕生日おめでとう！トレーナー！」







