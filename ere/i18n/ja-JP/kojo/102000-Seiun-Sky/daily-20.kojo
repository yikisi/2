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







