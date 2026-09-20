# @file メジロマックイーン - 日常
# @author 伊兰
# @author Claude (翻訳)
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おはようございますわ、%CALLNAME%。食堂で朝食をいただいてから、一緒に練習いたしましょう。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ごきげんよう！ 今日も、契約を結んだあの日の熱意を忘れずにまいりましょう。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ごきげんよう。今日も優雅な一日を過ごしましょうね。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「メジロ家の悲願のためなら、何をせよと仰せられても厭いませんわ。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「身だしなみは一日の基本ですわ。寝癖を昼まで残さぬよう、毎朝きちんと整えておりますの。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おはようございますわ。素敵な一日にするため、気を引き締めてまいりましょう。」
    # STATUSNAME:1 = 徹夜
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「メジロ家の%UMA%でありながら徹夜で遅刻しそうになるなんて……恥ずかしいですわ。」
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふあぁ……昨日の野球、本当に素晴らしかったですわ……わたくし、何も申しておりませんっ！ 本当に何も！」
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大変申し訳ありません。昨夜は定時に休みましたのに、ゴールドシップの悪夢を見てしまって……思い出しただけで悪寒が……」

select:
  sync: true
  lines:
    # STATUSNAME:10 = 昏睡
    # STATUSNAME:39 = 馬跳S
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日のわたくしも、メジロ家の栄光を継ぐために励んでおりますわ。」
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日のトレーニングも、どうぞよろしくお願いいたしますわ、%CALLNAME%。」
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わたくしをお探しですの、%CALLNAME%？」
    - if: era.get('status:13:10') > 0 || era.get('status:13:39') > 0
      random: true
      lines:
        - 「眠っている……」
        - トレーナー室で眠るマックイーンを見て、%YOU%の気持ちは少し複雑だった。

good_night:
  sync: true
  lines:
    - if: era.get('status:13:10') > 0 || era.get('status:13:39') > 0
      lines:
        - if: era.get('status:13:39') === 0
          content: 「無理ばかりして……」
        - %YOU%は少し苦労しながら、気力を使い果たしたマックイーンをお姫様抱っこで寮の下まで運んだ。
        - 「とりあえず、寮まで送ってやってくれ。」
        - 寮長は頷き、丁寧にマックイーンを受け取った。
        - 荷を下ろした%YOU%は深く息を吸い、明かりのついた学生寮を見てから、自分の宿舎へ戻った。
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「お疲れ様ですわ、%CALLNAME%。また明日！」
        - ようやく終わった一日、%YOU%は寮の玄関の外に立ち、マックイーンが寮へ戻るのを見送った。
        - 手を振るメジロマックイーンに、%YOU%も微笑んで同じ仕草を返す。
        - マックイーンが階上へ上がり、姿が見えなくなってから、%YOU%は振り返って自分の宿舎へ戻った。


talk:
  # CFLAGNAME:40 = やる気
  - if: era.get('cflag:13:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今の調子は絶好調ですわ。これぞメジロ家の%UMA%たるわたくしの姿！」
  - if: era.get('cflag:13:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今日は活力に満ちておりますわ。さあ、%CALLNAME%、どれほどの強度でもお受けいたします！」
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、今日はどのようなトレーニングですの？ いつもの速度より早く仕上げてみせますわ。」
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「調子は、いつもより良い気がいたしますわ。」
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「さあ、%CALLNAME%、何から始めましょうか？」
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今日も精一杯トレーニングいたしますわ、%CALLNAME%。」
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「申し訳ありません、%CALLNAME%。今日は少し集中が……」
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うぅ……今日はどうにも気が乗らないのですわ……」
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「前向きでいねばならぬのはわかっておりますのに、身体がついてまいりませんわ……」
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「メジロ家の%UMA%が、これしきで倒れるものですか……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「メジロ家は広いものですから、幼い頃は道を覚えるのに人形を置いて目印にしていたのですわ。」
  # CFLAGNAME:66 = 募集状態
  - if: era.get('cflag:7:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_7%……なぜか、偶然知り合って以来ずっと纏わりつかれておりますの。」
  - if: era.get('cflag:63:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_63%は表面こそ厳粛ですけれど、本当はとても優しい方ですわ。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今度、たまに午後のお茶においでになりません？ メジロ家流でもてなしますわ。」
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今度、一緒に野球を観に行きませんこと？ わたくしの醜態を許してくださるのでしたら……」
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わたくしたちメジロ家の%UMA%も、裏ではそれぞれ趣味を持っておりますの。大したことではございませんわ。」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わたくしへの贈り物、ですの？ 誠にありがとうございます。メジロ家の器量を示すお返しをしなければ……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%からいただいた贈り物は、大切にいたしますわ。」

o_c_pray:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「願いが叶うよう、手順はきちんと最後まで済ませましょう。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレセンの歴史には、傷病で引退したウマ娘が数多くいると思うと、やはり怖くなりますわ。」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「池の浮きを見つめ、いつ魚がかかってもよいよう全神経を集中させる。それが釣りを鍛える真髄かもしれませんわね。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「大きな魚ですこと。一緒に写真を撮りません？」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「夜の涼しい川辺を歩けば、気持ちがとても楽になりますわ。悩みも、しばらく忘れられますの」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「川辺の風は気持ちがよろしいですわね。今度はここで一緒に走ってみませんこと？」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「どうしても出ないのでしたら、買い取ってしまいましょうか。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あら、テイオーさんはこのダンスマシンがお好きですのね。」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わたくしのぬいぐるみが欲しいですの？ もう、本人が傍にいるというのに。」

o_s_drawing:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「自分が強運だと想像できれば、良いものが当たるはずですわ。」
  - %YOU%から抽選券を受け取ったマックイーンは、期待を込めて回し始めた。
  - ぐるぐるぐる……
  - 盤の中の小球が落ちるまで、マックイーンの手は止まらない。
  - if: d.hot_spring === 1
    random: true
    lines:
      - 目を輝かせたマックイーンが、%YOU%の前まで歩いてくる。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、温泉旅行券が当たりましたわ！」
      -
      - acc: 1
        content: 「おめでとう！」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「メジロ家にも上質な温泉宿はございますけれど、%CALLNAME%がいらっしゃるなら、普通の暮らしのほうがよろしいですわね。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それで、いつこの券を使いましょうか？ 期限はないようですわよ？」
      -
      - acc: 1
        content: 「マックイーンが卒業してからの息抜き、というのはどうだ？」
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「確かにそうですわね。では%CALLNAME%、この券は大切に保管してくださいませ。」
      - そう言ってマックイーンは温泉旅行券を渡し、%YOU%は何度か撫でてから、丁寧に財布へしまった。

o_s_ktv:
  - random: true
    lines:
      - 勝利者ステージの練習のため、%YOU%とマックイーンはカラオケへ来た。
      - 「やっぱりマックイーンの声は天の声だな。」
      - 歌い終えたマックイーンを見て、%YOU%は思わず父親のような笑顔を浮かべた。
  # CFLAGNAME:57 = 拡張変数
  - if: era.get('cflag:13:57')?.love_40 === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「打ち込めーYATAKA！！」
      - 長く我慢していたマックイーンが、好きな球団の応援歌を全力で歌うのを、%YOU%は後ろから見ていた。
      - まあ……滅多に見られない、子供のようなマックイーンの姿だ。それだけでも価値がある。
  - if: era.get('love:13') > 75
    random: true
    lines:
      - 「風走らせたあの子に～♫」
      - 「やや熱い視線～♫」
      - なぜか、マックイーンとあの関係になってから、この二行を%YOU%が歌うと、いつも熱を帯びてしまう。
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Waiting for Tomorrow～♫」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「少しずつ進めばいいよ～♫」
      - 軽やかな伴奏と、マックイーンの優しい声が溶け合う。
      - 何とも言えないほど、心地よい。

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「メ……メジロ家の%YOUNG_LADY%たるものが、こんなもので怯えるなど……！」
      - 冷や汗を流し、脚を震わせるマックイーンを見て、%YOU%は仕方なく%SEX%の手を取り、立っていられるようにした。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「恋愛映画、ですの……%CALLNAME%は意外と乙女心をお持ちなのですね。%CALLNAME%の恋愛観、伺ってみたくなりますわ。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「好きな映画と申しますと、サスペンスでしょうか。優れた作品では、決着のあとに来る大逆転こそ、最も意外で嬉しいものですわ！」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、お食事のあと、食後のデザートを少々お願いしてもよろしいです？ 絶対に食べ過ぎませんわ！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こちらの鍋のお肉は一級品ですわ。今度も通ってみませんこと？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「これまで体重管理をしてきましたから、一ついただいてもよろしいですわよね？ では、いただきます！」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「申し訳ありません～ 少しお化粧をしておりまして。お待たせいたしました。今日はどちらへ参りましょうか？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「これまで%CALLNAME%にご指導いただいた御礼に、今日はわたくしがお会計をいたしますわ。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「横断歩道では、手を繋いでいたほうが安心ですわね～」
  - if: era.get('love:13') >= 51
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こうしてみませんこと……ええ、手を繋いで。少し緊張いたしますわ。ファンに見つかったら……」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、お疲れですの？ 人の少ないところで膝枕でもいかが？」
      - 木陰のベンチで、マックイーンの優しい撫で方に目を閉じ、%YOU%は次第に力が抜けていった。

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「お洋服、いかがです？」
      - マックイーンは更衣室の扉を開け、%YOU%の前で一回転した。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「デパートの一階は高級ブランドが入っていることが多く、品物も高価ですわ。ご案内いたしましょうか、%CALLNAME%？」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ご家族の先輩方も、重任を担うわたくしを見ていらっしゃるはずですわ。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「期待を寄せられるわたくしも、時には縛られる息苦しさを感じますの。」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「学園の中で手を繋ぐですって？ 万一、クラスメイトに見つかったらどうなさいますの……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「たくさんの視線を感じてしまいますわ。落ち着いて、落ち着いて……」

s_r_lunch:
  - random: true
    lines:
      - 今日はマックイーンと屋上へ上がり、%SEX%が持ってきた弁当を%YOU%と分け合った。
      - あれこれ疲れ果てた%YOU%は、まるで救いの藁のようにかき込んだ。
  - random: true
    lines:
      - 昼食を終えたばかりなのに、マックイーンは%YOU%の肩に寄りかかったまま動かない。もう眠くなったのか。
      - 身動きが取れなくなった%YOU%は、起こさないよう、そのままの姿勢を保った。
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%、あーん」
      - あの一線を越えてから、食事の時間まで、いつの間にかゆっくりになっている。
      - マックイーンが一匙ずつ%YOU%に食べさせてくれるせいだろう。
      - 慣れてきた%YOU%も、微笑んでその世話を受けている。

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「むぅ、パフェが食べたいですわ。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「長年一人暮らしですと、料理が面倒になりますの？ わたくしがいれば、%CALLNAME%はそうは思いませんでしょう？」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「先日、使用人に料理のコツを教えていただきましたので、今日はわたくしが作った弁当を持ってまいりました。召し上がります？」

office_study:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「メジロ家の%UMA%でも、何もかもわかるわけではございませんわ。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ですから%CALLNAME%、ご指導をお願いいたしますわ。」

office_rest:
  - random: true
    lines:
      - 少し眠いからと目を閉じただけなのに、うっかり寝てしまった。
      - 肩の違和感に気づいた%YOU%が隣を見ると、眠っているメジロマックイーンがいた。
      - それで%YOU%は、また数分間、そのままでいた。
  - random: true
    lines:
      - 「動かないで……そう、そのまま……」
      - %YOU%は膝の上のマックイーンが赤くなる頬を気にせず、綿棒で%SEX%の耳を掻いた。
      - 人の耳と違って、馬耳の感触は少し奇妙だ……
  - if: era.get('love:13') >= 41
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「野球の試合の録画を持ってまいりましたわ。ご覧になりません？」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わたくしの膝枕、お気に召します？ %CALLNAME%がお好きなら、いつでもこういたしますわ。」
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - 「マックイーン、ほら、抱きしめていい？」
      - 承諾を得て、%YOU%はマックイーンの身体をきつく抱き、%SEX%の髪の香りを欲深く吸い込んだ。
      - 親しい担当とこうして甘えることほど、素敵なことはない。

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「魔物の技をすべて見破って、掌の上で転がすように……本当にすごいですわ。」
      - %YOU%の巧みな操作に、隣のマックイーンは口を押さえて驚いていた。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一心同体を試されるようなゲームですもの、必ずクリアいたしますわ。」
      - 不慣れなマックイーンはコントローラーに慣れようとしながら、%YOU%と二人用のゲームをしていた。

# ジュニア級
birthday1:
  title: 初めての誕生日
  lines:
    - マックイーンの誕生日当日のトレーナー室では、居合わせたメジロ家の%UMA%が申し合わせたように静かに席につき、視線を同じ場所へ向けていた。
    - %THEY%が見ている先は、もちろん今日の主役だ。
    - %YOU%は両手を、目隠しをしたマックイーンの肩に置き、ゆっくり大テーブルの前まで案内した。
    - acc: 1
      content: 「よし。」
    - %YOU%が目隠しを外すと、大テーブルのそばに座っていたメジロ家の%UMA%が一斉に声を上げた。
    - content:
        - fontWeight: bold
          content: みんな
        - 「マックイーン、お誕生日おめでとう！！！！！！」
    - 目に入ったのは、いちばん馴染み深いメジロ家の姉妹たちと、飾り立てられた壁。横断幕には「メジロマックイーンお誕生日おめでとう！」の文字がはっきりとあった。
    - マックイーンは少し驚き、それから甘く微笑んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みなさま、ありがとうございます。」
    - マックイーンが座ると、微笑みを浮かべたラモーヌが手紙を渡した。
    - color: %COLOR_86%
      content:
        - fontWeight: bold
          content: %RAMONU%
        - 「お祖母さまからのお手紙よ。」
    - その言葉にマックイーンはすぐに耳を立て、手紙を受け取って開封し、丁寧に読み始めた。
    - 入学して初めての誕生日を祝うこと、メジロ家の悲願を改めて述べること、学園ではしっかり鍛えるように、と……
    - しばらくして、%SEX%は手紙をきちんと折りたたんだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「メジロの栄光は、わたくしが継いでまいりますわ。」
    - acc: 1
      content: 「とりあえず、まずは誕生日を楽しく過ごそう。」
    - マックイーンは少し驚いて後ろの%YOU%を見、本能的に手紙の内容を隠した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうですわね。」
    - %SEX%は手紙をしまい、表情が一気に明るくなる。
    - 誕生日の歌を歌い、願い事をし、ケーキを分け合う流れを経て、今日もマックイーンの誕生日を祝って終わった。

birthday2:
  title: 二年目の誕生日
  lines:
    - この週のマックイーンの誕生日、%YOU%はマックイーンを自分のアパートへ連れてきた。
    - acc: 1
      content: 「ここに座って。本でもテレビでもいい、とにかく動かないでくれ。」
    - %YOU%はそう言ったが、マックイーンは小さく呟いてから、その頼みを聞いた。
    - 数分後、%YOU%が両手でメロンパフェを厨房から運び出し、マックイーンの前にきちんと置いた。
    - %YOU%はパフェを睨むマックイーンの目を面白がりながら、笑って%SEX%の向かいへ座った。
    - 「今日の主役を祝うために、特別に作ったパフェだ。」
    - その一言が安心材料になったのか、%SEX%は長いスプーンを手に取り、なかなか口をつけない。
    - %SEX%の表情も、迷い始めている。
    - acc: 1
      content: 「太るのが心配か？ 材料は低カロリーを基本にしてあるよ。」
    - %YOU%は首を傾げてマックイーンを見た。
    - マックイーンは首を横に振った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただ、%CALLNAME%が自ら作ってくださったパフェですもの、こうも簡単に食べてしまうのが惜しくて。」
    - acc: 1
      content: 「普段も作らないわけじゃないが、迷っているうちに溶けてしまうぞ。」
    - %YOU%の言葉を聞いて、マックイーンは片手にパフェ、片手にスプーンを持ち、慎重にアイスクリームを少しすくって、口の中で味わった。
    - それから頬を押さえ、極上の味に出会ったときのような甘い表情を浮かべる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%のパフェは、やはりどのスイーツ店より美味しいですわ。」
    - それでも%SEX%は、一匙ずつ丁寧に味わい続けた。
    - %YOU%も%SEX%の享受する顔を眺めながら、一緒に時間を溶かした。

birthday3:
  title: 三年目の誕生日
  lines:
    - マックイーンの誕生日の夜。
    - 目隠しをしたマックイーンを、%YOU%がトレーナー室へ案内する。
    - 布を外した瞬間、トレーナー室にいたマックイーンの友人たちが一斉に声を上げた。
    - content:
        - fontWeight: bold
          content: みんな
        - 「マックイーン、お誕生日おめでとう！！！！！！」
    - それだけでなく、左右からクラッカーが鳴った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みなさま……」
    - これほど盛大な場に、マックイーンは口を押さえて感動を隠そうとする。
    - acc: 1
      content: 「今夜は肩の力を抜いて、思いきり休もう。」
    - %YOU%はマックイーンの手を引き、%SEX%と一緒にケーキの前へ座った。
    - あとはお決まりの、誕生日の歌と願い事。
    - 贈り物の番では、誰もがマックイーンに品を渡したが、%YOU%だけがまだだった。
    - %YOU%は机の引き出しを開け、何かを取り出した。
    - 「今の時期には、少し場違いかもしれない。」
    - %YOU%はマックイーンに贈り物を見せた。
    - ——紙で作った天皇賞（春）の盾。
    - 「今月が天皇賞（春）だ。とにかく、勝ちを祈っている。」
    - 目の前のマックイーンは両手で盾を持ち、少し間を置いてから口を開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当に、お馬鹿さんですわね、%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「期待していてください——本物の天皇賞の盾を、持ち帰ってみせますわ。」
    - マックイーンは決意の表情で、%YOU%が贈った「盾」を撫でた。
    - acc: 1
      content: 「とにかく、まずは誕生日を楽しもう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうですわね。」
    - その盾を机に置いたあと、%YOU%とマックイーンはすぐに誕生日を祝う人々の輪へ戻った。
