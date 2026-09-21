# @file メジロマックイーン - 育成
# @author 伊兰
# @author Claude (翻訳)
train:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「参りますわよ！」
  - マックイーンの闘志に満ちた言葉とともに、トレーニングが慌ただしく始まった。

train_success:
  sync: true
  lines:
    - random: true
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うふふ、%CALLNAME%、また勝利に一歩近づきましたわね。」
    - random: true
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いかがです？ 今日の%CALLNAME%も、わたくしの走りに見惚れていらっしゃいます？」
        - 結局%YOU%が数分間も話し続け、マックイーンに軽く蹴られてようやく終わった。
    -

train_fail:
  title: トレーニング失敗
  lines:
    - %YOU%はトレーニング場で負傷したマックイーンを支え、保健室へ連れて行き、%SEX%をベッドへ寝かせた。
    - マックイーンはひどく悔いている様子だった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーニング場で怪我をするなんて……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%にもご迷惑をおかけして、本当に申し訳ありません。」
    - acc: 1
      content: 「今日は休んだほうがいい。」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「何ですって？ ほんの小さな傷ですのに……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これしきで心配なさるようでは、心が休まりませんわよ。」
        - acc: 1
          content: 「君の無事のためなら、休まなくても構わない。」
          lines:
            - %YOU%の確固たる言葉に詰まらせたのか、マックイーンは一瞬呆け、それから仕方なさそうに笑った。
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「本当に、困った方ですわ。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「では、今日は素直にお休みいたしますわ。」
            - 医者がマックイーンを手当てしたあと、%YOU%は%SEX%を寮まで送った。
    - acc: 2
      content: 「これからの練習は、もう少し気をつけてくれ。」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「確かにそうですわね。あんな初歩的な過ちを犯すなんて、不注意すぎました。」
        - マックイーンは当時の場面を思い出し、また深く溜息をついた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はあ……また、申し訳なさが込み上げますわ。」
        - 医者の手当てを終えたあと、%YOU%はマックイーンを寮で休ませた。

train_add:
  title: 遅れを取りたくない
  lines:
    - すでに去ったはずのマックイーンが、意外にもトレーニング道具を片付ける%YOU%の傍へ戻ってきた。
    - %SEX%は困った顔で、しばらく口ごもってから、勇気を出したように一言を口にした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その、追加のトレーニングをお願いしたくて！」
    - acc: 1
      content: 「何かあったのか。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「先ほど帰る途中でライアンに会いまして、%SEX%はこれから練習へ行くようですの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%がまだ頑張っているのですから、わたくしも休んではいられませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「誰の目にも優美に、いついかなる時も先頭を走り続ける。それがわたくしの目指す姿ですわ。」
    - 両手を十字に組んで頼むマックイーンを見て、%YOU%は決めた……
    - acc: 1
      key: select
      content: 「なら、徹底的に追いつけ！」
      lines:
        - %YOU%の承諾を得て、マックイーンは満面の笑みを浮かべた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ありがとうございます、%CALLNAME%。わたくしの願いをわかってくださると信じておりましたわ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あなたが見ていてくださるなら、やりすぎることはありません。徹底したトレーニングを、お願いいたしますわ！」
        - こうして許容の範囲で、マックイーンと追加のトレーニングを行った。
    - acc: 2
      content: 「焦るな。」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やりすぎかもしれないのはわかっております、ですが……」
        - マックイーンは少し苛立って言ったが、一瞬でそれに気づき、深く息を吸って黙った。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わたくし、本当に焦っておりましたわね。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「自分を律さねば、未来は見えません。『堂々と』こそが、メジロ家の流儀ですわ。」
        - マックイーンは自分を説得し、頭を下げて詫びてから、トレーニング場を去った。

train_success_sex:
  - トレーナーは満足げに頷き、手の計画書に印をつけた。
  - だが余光のマックイーンが小走りに近づく姿が際限なく大きくなり、トレーナーへ抱きついてきた。
  - トレーナーは、予期せぬ振る舞いをする%TEEN%を、反射的に押しのけようとする。
  - だが%SEX%の頰は紅潮し、誘うような目をしている。激しい運動のあと、服は汗に濡れ、湿った布の下で肌が朦朧とした肉色を透かせていた。
  - さらに、%SEX%から漂う匂いが、トレーナーに衝動を起こさせる。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「その、適度に発散する程度なら、聞いてくださいますわよね？」
  - トレーナーの懐に凭れるマックイーンが、%YOU%に尋ねる。
  - 唇を結んだ%YOU%は——
  - acc: 1
    key: sex
    content: 「あとで場所で待っていろ。」
    lines:
      - %YOU%は声を殺して、マックイーンの耳元で言った。
      - 気に入った言葉を聞いて、マックイーンは楽しげに%YOU%の傍を離れ、%YOU%の「お仕置き」を待った。
  - acc: 2
    content: 「悪い、今日はだめだ。」
    lines:
      - 興を削がれる言葉を聞いて、マックイーンは耳を伏せ、恨めしげに去った。

race_start:
  title: レースの前
  lines:
    - マックイーンは両手を胸に当て、呼吸を整えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「メジロ家のウマ娘として、必ず勝利を掴んでみせますわ。」
    - acc: 1
      content: 「その勢いで一着を取れ！」
    - マックイーンは%YOU%に向かって頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから%CALLNAME%、わたくしのまた一つの勝利を、見届けてくださいませ。」
    - %YOU%とマックイーンは互いに気合を入れ、コースへ向かった。

race_win:
  title: レース勝利
  lines:
    - コースから戻ったマックイーンは、少し興奮して言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「勝ってしまいました……よかったですわ。」
    - %SEX%はいつもの優雅から外れていることに気づき、また真面目な顔へ戻す。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ、先ほどのことは忘れてくださいませ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一着を取るのは、メジロ家のウマ娘としての前提ですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たとえ一着でも……一着……うふふ。」
    - 普段の顔に戻ったはずのマックイーンが、また逸れていく……
    - acc: 1
      content: 「もっと高い目標へ進もう！」
    - その言葉を聞いたマックイーンは、嬉しそうに言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ……ええ、覚悟は相変わらず高いようですわね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「より華麗に、より優雅に、より優美に……より高い目標へ進みましょう。」

race_5:
  title: レース入着
  lines:
    - 今回は入着に終わった。戻ってきたマックイーンの顔には憂いが満ちている。
    - acc: 1
      content: 「入着でも、よく頑張っただろう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「頑張った、ですって？ いいえ、入着だけでは、安心などできませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしが欲しいのは……完璧な勝利ですの。」
    - マックイーンは片手を握り、眉を寄せた。
    - acc: 1
      content: 「でもマックイーンなら、いつか必ず大丈夫だ。」
    - %YOU%の言葉を聞いて、マックイーンの表情にようやく微笑みが戻る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとうございます……必ず進歩をお見せいたしますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしはメジロ家のウマ娘ですもの。完璧な勝利は、課せられた使命ですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのために、もっと強くならねばなりません。」

race_lose:
  title: レース敗北
  lines:
    - 未入着は、このレースでの敗北を意味する。
    - 悔恨に満ちたマックイーンは涙をこらえ、%YOU%の姿を避けて言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「申し上げることはございません。まったく、わたくしの実力不足ですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご期待に応えられず、誠に申し訳ありません……」
    - acc: 1
      content: 「悔いを糧にしろ！」
    - %YOU%がそう言うと、マックイーンはやっと微笑みを作った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「悔恨という苦さを味わう、ですの……あら、もう味わいたくございませんわ。」
    - acc: 1
      content: 「なら次は、勝利の甘さを味わおう。」
    - その言葉に、マックイーンは少し闘志を取り戻した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「甘い……ええ、勝利の甘さ。それこそ、メジロ家のウマ娘にふさわしい味ですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから%CALLNAME%、わたくしをもっと強くしてくださいませ！」

meet_mejiro:
  title: メジロ家の%SIBLINGS%との初対面
  lines:
    # ジュニア級四月第一週
    - %YOU%とマックイーンの担当関係が結ばれてからしばらく経ち、%SEX%のトレーニングも着実に進んでいた。
    - このとき%YOU%と%SEX%はいつものように学園のカフェテリアで朝食を取っていた。
    - %YOU%が食べたいものを選んで担当%UMA%の席へ戻ると、%SEX%の傍にほかの六人の%UMA%が増えており、マックイーンと楽しげに話していた。
    - だが%SEX%たちの気品と振る舞いもマックイーンに劣らず、%YOU%は無意識に堅くなった。
    - acc: 1
      content: 「マックイーン。」
    -
    - %YOU%はマックイーンの隣に座り、会話をできるだけ妨げないように声をかけた。
    - マックイーンはそれを聞いて%YOU%のほうを向き、同席の%UMA%たちに和やかに%YOU%を紹介した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みなさま、こちらがわたくしのトレーナーですわ。」
    - マックイーンの言葉が落ちると、隣のメジロライアンがいちばん早く反応した。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「あ、マックイーンのトレーナーさん、こんにちは！ 私はメジロライアン！」
    - acc: 1
      content: 「こんにちは。」
    - %YOU%は微笑み、栗色に白い差し色の超短髪の%UMA%に頷いて応えた。
    - それからマックイーンと座っている%UMA%たちを見回し、興味深げに言った。
    - acc: 1
      content: 「みな、メジロ家の%UMA%なのか？」
    -
    - メジロマックイーンは頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「初対面ですもの、わたくしから%CALLNAME%にご紹介いたしますわ。」
    - マックイーンの一人ひとりの紹介で、%YOU%はやっと居合わせた%UMA%たちを知った。
    - 挨拶を受けた%UMA%たちも、それぞれ違う反応を見せた。
    - メジロラモーヌは淡く応えただけで、%YOU%を観察している。
    - メジロアルダンは両手を合わせ、熱情を込めて応え、その中に静かな優しさがあった。
    - メジロパーマーは%YOU%にウィンクし、優雅な印象とは違う気ままさを見せた。
    - メジロブライトは慵げに甘い声を引き伸ばして応え、とても可愛い。
    # CFLAGNAME:0 = 性別
    - if: era.get('cflag:0:0') === 1
      content: メジロドーベルは視線を泳がせ、淡く蚊の鳴くような返事をした。付き合いにくそうだ。
    - if: era.get('cflag:0:0') !== 1
      content: メジロドーベルも微笑んでトレーナーの挨拶に応えた。
    - acc: 1
      content: 「それぞれ個性があって面白いな。」
    - %YOU%は微笑んで頷き、ふとマックイーンの机のノートに目が行った。
    - 初めて会ったとき%YOU%が%SEX%に渡した献立のひとつだ。
    - 目標へ進む%SEX%は、変わらず努力を続けているようだ。
    - acc: 1
      content: 「まだ頑張っているな、マックイーン。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「そうなのそうなの！」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「前はマックイーン、元気がなくて練習の調子も悪かったんだ。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「しばらくしたら、見違えるくらい良くなったよ！」
    - 褒められたマックイーンは、少し嬉しそうな色を見せた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それは、みな%CALLNAME%のおかげですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇賞（春）を勝つためなら、努力は当然ですもの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「メイクデビューは言うまでもありません。今は自らを厳しく律すべきですわ。」
    - acc: 1
      content: 「全力で行こう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい！ ですから%CALLNAME%も、その覚悟でお願いいたしますわ。」
    - 「天皇賞（春）」を聞いて、ライアンは少し考えた。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「でも天皇賞（春）って、まだ先でしょ？」
    - acc: 1
      content: 「だからジュニアとクラシックで、しっかり土台を作るんだ。」
    -
    - マックイーンは頷き、%YOU%の言葉に賛同した。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「それなら、同じレースで顔を合わせるかもね。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「先に言っとくけど、私は負けないから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしも全力を尽くしますわ！」
    - 三人の会話の隙に、メジロドーベルがよそから運んできたスイーツが二人の注意を引いた。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「すごい、クレープの上にチョコプリンが乗ってる。ドーベル、私の分までありがとう。」
    - メジロドーベルは微笑んでメジロライアンに応えた。
    - %YOU%が振り向くと、マックイーンはクレープをじっと見つめていた。
    - acc: 1
      content: 「やっぱり食べたいんだろう？」
    -
    - 心を見抜かれたマックイーンは驚き、それから拗ねたように顔を逸らした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「決して何かを我慢しているわけではございませんわ。そんなことはありません！」
    - %YOU%はふふと笑い、目の前の食事を味わい始めた。

begin_race:
  title: メイクデビュー前
  lines:
    - メイクデビューの前。
    - %UMA%の生涯で最も大切な一日として、%YOU%とメジロマックイーンは出走時間に合わせて早く会場へ着いた。
    - acc: 1
      content: 「まず調整室で気持ちを整えよう。」
    - 初めてのコースだ。緊張しないほうがおかしい。
    - 調整室に入ってから一言も発さず、両手を胸に当てて何度も深呼吸するメジロマックイーンを見て、%YOU%は心配そうに尋ねた。
    - acc: 1
      content: 「大丈夫か？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？」
    - メジロマックイーンは視線を%YOU%へ向けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大丈夫ですわ。少し緊張しているだけですの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが緊張より、天皇賞（春）制覇の起点に、ようやく立てたと思うと、胸が熱くなりますわ。」
    - メジロマックイーンの懸命な様子を見て、%YOU%も安心した。
    - acc: 1
      content: 「そのやる気のまま行け。」
    - 時間はあっという間に過ぎ、外の観客席の声がここまで聞こえてくる。
    - 考えるまでもなく、その声はメジロ家の新世代——メジロマックイーンに集まっている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんなに注目されたことは、初めてですわね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが、ご心配なく。」
    - メジロマックイーンは扉を押し、振り返って%YOU%を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「必ず、勝利をお持ちいたしますわ！」
    - acc: 1
      content: 「いってらっしゃい！」
    - %YOU%も微笑み、コースへ向かうメジロマックイーンを見送った。

begin_race_win:
  title: 目標へ
  lines:
    # メイクデビュー後
    - ようやくレース後に顔を合わせたとき、同じ興奮を抱くメジロマックイーンと%YOU%は目が合うと同時に笑った。
    - acc: 1
      content: 「メイクデビューの勝利を祝おう！」
    - %YOU%は興奮してメジロマックイーンに言った。
    - メジロマックイーンはしばらく胸の高鳴りを鎮めてから言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ようやく、あの目標を果たす入場券を手にしましたわね。」
    - acc: 1
      content: 「目標、か？」
    - ああ、天皇賞（春）という名のレースを果たすことだ。
    - メイクデビューでこれほど優れた成績を残したこと自体が、メジロマックイーン——メジロ家が生んだこの身体の証明になる。
    - 長距離では、選抜での敗北を雪ぐほどの強さを持っている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇賞は、わたくしたちメジロ家が名を上げた柱ですもの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご先祖たちの美しい思い出でもありますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから、何があっても、天皇賞（春）を勝ちたいのです。」
    - acc: 1
      content: 「わかった、わかった。」
    - %YOU%は手をメジロマックイーンの肩に軽く置き、歴史の追憶に入りかけた%YOUNG_LADY%を間に合って遮った。
    - acc: 1
      content: 「天皇賞（春）はまだ先だ。今は勝つまでの練習と経験を積むときだ。」
    - メジロマックイーン。世間も認める長距離の%UMA%。
    - %SEX%の力は、あのレースを勝つに足る。
    - acc: 1
      content: 「君は勝つ。それを知っておけ。」
    - %YOU%はメジロマックイーンに自信の笑顔を向け、その笑顔は陽のように、マックイーンの眉間の重さを溶かした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、よろしくお願いいたしますわ、%CALLNAME%。」

kiku_sho:
  title: 切磋
  lines:
    # 菊花賞前
    # 強敵：ライアン
    - メジロマックイーンが決めたG1であり、三冠の一つでもあるレースだ。観戦の人数はもともと多い。
    - このレースは、%SEX%のトレーニング成果を試すのにふさわしい。
    - それだけでなく、出走表の%RYAN%という%UMA%が%YOU%の注意を引いた。
    - こんこんこん……
    - 突然のノックに、準備室で戦術を話し合うメジロマックイーンと%YOU%が同時に扉の外を見た。
    - メジロマックイーンが取っ手を回した瞬間、白と緑の勝負服が目に入る。マックイーンと同系色の勝負服を着た%UMA%だ。
    - %YOU%が目を凝らすと、メジロライアンだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ライアン！」
    - メジロマックイーンは驚喜してメジロライアンと軽く抱き合った。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「今日の外、すごく賑やかだね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしとライアンのレースですから。」
    - 幼い頃から一緒に育った%SIBLINGS%たちは、顔を見合わせて微笑んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「時が経つのは早いですわね。昔、あなたと走っていた頃は、観客などいませんでしたのに。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日は、無数の観客の前で、切磋いたしましょう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「相手があなたでも、譲りはいたしませんわよ。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「うん。一緒に頑張ろう。」
    - 言葉が落ちると、通路に出走を知らせる放送が流れた。
    - メジロマックイーンが確認のため振り返ると、%YOU%は%SEX%に親指を立て、自信の笑顔を向けていた。
    - acc: 1
      content: 「行け。信じている。」
    - メジロマックイーンは%YOU%に小さく頷き、メジロライアンと準備室を出た。

kiku_sho_win:
  title: 見事な一戦
  lines:
    # 菊花賞後
    - content:
        - fontWeight: bold
          content: 実況
        - 「メジロマックイーン、ゴールイン！」
    - メジロマックイーンがゴールした瞬間、観客席からこれまでにない歓声が爆発した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！」
    - メジロマックイーンは、観客席のいちばん前に立つ%YOU%の前まで来た。
    - 初めてG1を勝ったメジロマックイーンは、優雅を保とうとしても、汗に濡れた前髪の下、菫色の瞳はすでに輝いていた。
    - acc: 1
      content: 「おめでとう！」
    - %YOU%は安堵して笑い、メジロマックイーンに祝福を送った。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「あの……悔しいな、マックイーン……」
    - メジロマックイーンの耳が微かに震え、膝を押さえ息を整えるメジロライアンを見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ライアン。」
    - 追い抜かれて勝利を失ったメジロライアンを前に、メジロマックイーンは眉を寄せ、憐れみが湧く。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「ふふ、今さら何を言っても仕方ないよね。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「おめでとう、マックイーン。強いよ。トレセンに入ったばかりの頃とは大違い。」
    - メジロライアンは前へ出て、メジロマックイーンの勝負服の草屑を払った。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「私のことは心配しないで。次の切磋も全力で行って。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「でも、もう油断はしないからね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ。」
    - 胸の力が少し抜けたメジロマックイーンは頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次の切磋、楽しみにしておりますわ。」

tenn_spr:
  title: 制覇の前夜
  lines:
    # 天皇賞（春）前
    # 強敵：ライアン
    - 準備室
    - これまでのレースと違い、今日の準備室には緊張した沈黙が漂っていた。
    - 勝負服を着たメジロマックイーンは両手を胸に当て、何度も深呼吸をした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お祖父さま、お祖母さま……ようやく、この日が参りましたわ。」
    - メジロマックイーンは目を閉じて呟いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしの走りを、勝利を掴む瞬間を、ご覧くださいませ。」
    - %YOU%はメジロマックイーンの前へ行き、両手を%SEX%の肩に置いた。掌の下の微かな震えに気づき、腕を締めて%SEX%を抱きしめた。
    - acc: 1
      content: 「一着を取れ。君のために、メジロ家の名誉のために。」
    - 腕の中のメジロマックイーンはもう一度深く息を吸い、震えていた身体がようやく静まった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%にも、わたくしのレースを見届けていただきたいのです。」
    -
    - このときメジロマックイーンはコースへ続く通路を歩いていた。向かい風が外套の裾をはためかせる。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「マックイーン！」
    - 再び同じレースに出るメジロライアンが、小走りに並んだ。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「今日も頑張ろうね。」
    - メジロマックイーンはそれを聞いて頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全力を尽くしましょう！」

tenn_spr_win:
  title: メジロ家を継ぐ者
  lines:
    # 天皇賞（春）後
    - content:
        - fontWeight: bold
          content: 実況
        - 「メジロマックイーン！ ゴールイン！」
    - コースに往日の喧騒はなく、観客席の多くは、心の中の勝者を待っていた。
    - ゴールしてからゆっくり減速し、止まったメジロマックイーンは息を整え、少し恍惚と観客席を見て、それから掲示板を見た。
    - 歓声に代わって、観客席全体を貫く拍手が起こった。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「マックイーン！」
    - メジロマックイーンは声のほうを向き、メジロ家の%SIBLINGS%たちがゆっくり歩いてくる姿を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みなさま……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「メジロ家のみなさま、ご覧になっていましたか？」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「当たり前でしょ。」
    - メジロマックイーンは深く息を吸い、気持ちを整えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっと支えてくださったみなさまに、一言申し上げたくて。」
    - スタッフからマイクを受け取ると、%SEX%は観客のほうを向いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みなさま、ご声援ありがとうございました。勝てたのは、一路のみなさまの支えがあればこそです。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そして、メジロ家のみなさま。ご期待を裏切らぬよう、力の限り走りました。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「メジロ家の%UMA%として、ようやく家の願いを果たせましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから本当に、みなさまに感謝を。そして%CALLNAME%のご指導に、感謝を！」
    - 言葉が落ちると、観客席から長く途切れない歓声が爆発した。

takz_kin:
  title: 落ち着いて迎える
  lines:
    # 宝塚記念前
    # 強敵：ライアン
    - 外の競馬場では、菊花賞に劣らぬ歓声が上がっている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すごい……菊花賞より、空気が熱いですわ。」
    -
    - acc: 1
      content: 「マックイーンは、もうたくさんの人に注目されているからな。」
    -
    - ファン投票で出走する宝塚記念に申し込んだところ、これまでの大レースの結果で注目は当然高く、出場は当然のように決まった。
    - だがファン投票のレースには、強い%UMA%も集まる。
    - 特にメジロライアン。
    - acc: 1
      content: 「メジロライアンは、まだ負けを認めたくないらしいな。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ライアン……」
    - メジロマックイーンはその名を聞いて、静かに少し考えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%は、ずっとわたくしを追っていますわね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが、何があっても。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日のわたくしも……着実に勝利を掴みます。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そしてライアンにも、わたくしの勝利への覚悟を知っていただきましょう。」

takz_kin_win:
  title: メジロ家の強さ
  lines:
    # 宝塚記念後
    - 今日もメジロマックイーンは一着の勢いでゴールした。
    - 手に取るような勝利に、G1の一着は%SEX%にとって大きな動揺ではなくなっている。
    - メジロマックイーンは減速して止まり、観客席に手を振ると、上からも歓声が返った。
    - content:
        - fontWeight: bold
          content: 観客
        - 「おめでとう！ マックイーン！」
    - content:
        - fontWeight: bold
          content: 観客
        - 「マックイーン、今回も強かったよ！」
    - 歓声がメジロマックイーンへ向いているのを見て、メジロライアンは耳をわずかに伏せ、少し暗く俯いた。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「また、負けちゃった。ずっと……」
    - content:
        - fontWeight: bold
          content: 観客
        - 「その意気、ちゃんと見てたよ！ ライアン！」
    - content:
        - fontWeight: bold
          content: 観客
        - 「最後まで諦めなかった……うう、すごい……」
    - 最初の「メジロライアン」が声の波を破ったとき、メジロライアンは観客席の声が%SEX%のために新しい旋律を織っているのに気づいた。
    - content:
        - fontWeight: bold
          content: 観客
        - 「メジロ家、最高！ 二人とも頑張った！！」
    - content:
        - fontWeight: bold
          content: 観客
        - 「今日のレース、忘れないから！！」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「私……も……？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ……」
    - メジロライアンが振り返ると、メジロマックイーンの落ち着いた姿があった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最後までよく走って、直線でも走り続けていましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「むしろ、あなたらしいですわね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「後ろから追ってくださったからこそ、わたくしもここまで来られたのです。」
    - メジロマックイーンはメジロライアンに手を伸ばした。
    - メジロライアンは手を見て一瞬呆け、それから吹っ切れた笑みで、伸ばされた手を握った。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「おーい！ 今日もみんなの応援、ありがとう！」
    - divider: true
    - 宝塚記念は無事に終わり、%YOU%も傍らで、二人が観客席の声援を分かち合うのを見届けた。
    - メジロライアンとの切磋のあと、メジロマックイーンと学園へ戻った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇賞（春）のあと、何をすべきか、もうだいたい考えがつきましたわ。」
    -
    - acc: 1
      content: 「本当か？ 何だ？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次は……天皇賞（秋）ですわね。」
    - メジロマックイーンは淡く、その一言を口にした。
    - acc: 1
      content: 「そうか？」
    - メジロマックイーンは%YOU%の少し淡い反応に眉を寄せた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「少しも驚かれないのですか？」
    -
    - acc: 1
      content: 「いや、どのレースでもマックイーンなら一着で終わらせると信じているだけだ。」
    - メジロマックイーンは少し驚いて%YOU%を見、顎を撫でた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇賞を勝ってから、確かに未来に迷うときはありましたわ。」
    - メジロマックイーンは無意識に夕陽の下のトレセン学園の校舎を見て、深く息を吸った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お祖母さまから未来を託されたわたくしも、新しい道を試さねばなりません。」
    - 右手を握って胸に当てる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから——天皇賞（秋）、つまり『春秋連覇』。どれほど困難でも、勝ちますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「メジロ家に、わたくしを支えるファンのみなさまに、見せたいのです……」
    - %YOU%は傍らでメジロマックイーンの確固たる目を見て、声は出さなかった。
    - 今のメジロマックイーンは、明らかに何でもできる。
    - %YOU%はメジロマックイーンの背を叩いた。
    - 「やりたいことがあるなら、ずっと支えるよ。」
    - それが%YOU%の本職だからだ。
    - メジロマックイーンは呆け、それから力を込めて頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい……！」
    - こうして——天皇賞（秋）が、次の目標になった。

tenn_sho:
  title: 最後の一瞬まで輝く
  lines:
    # 天皇賞（秋）前
    - 天皇賞（秋）当日、朝から雨が降り止まない。何か不吉な予感を運ぶようで、人で埋まった会場の空気も重くなった。
    - 地下通路には、三年間ずっと傍にいた%YOU%のほか、メジロ家の姉妹たちも随行している。
    - 居合わせた者すべてが、メジロマックイーンが切り開くこの奇跡を見届けるのを待っていた。
    - 皆に背を向けたメジロマックイーンは両手を胸に当て、何度も深呼吸した。
    - 最後に閉じていた目を開き、皆のほうを向く。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「コースの泥も、観客の視線も、もうわたくしを緊張させるものはありませんわ。」
    - メジロマックイーンは%YOU%の前へ歩き、両手で%YOU%の手を握った。粗い皮膚を感じ、さまざまな大切な記憶が閃き、メジロマックイーンは微笑んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一心同体となった%YOU%と勝利のために重ねた努力、ライアンとの勝負の思い出……思い出すだけで力が満ちますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最後まで、みなさまのために勝利を掴んでみせます。」
    - acc: 1
      content: 「あまり気負うな。もう十分やってきた。」
    - メジロマックイーンは頷いた。
    - それから%SEX%は振り返らず地下通路を出て、観客席と相手を見据え、一言も発さず、腕のメジロ家の腕章を少し整えた。
    - 大股でゲートの後方へ歩き、ウォームアップを始めた。

tenn_sho_win:
  title: 幕を下ろす
  lines:
    # 天皇賞（秋）後
    - メジロマックイーンがゴールした瞬間、観客席の緊張した期待の声が一段階上がった。
    - content:
        - fontWeight: bold
          content: 観客
        - 「メジロマックイーン！！！ メジロマックイーン！！！ メジロマックイーン！！！」
    - 観客席の歓声が競馬場全体に響き渡った。
    - acc: 1
      content: 「メジロマックイーン！」
    - メジロマックイーンの耳は鋭く%YOU%の声を捉え、馴染みの姿を見ると、驚いて%YOU%が観客席の柵を越え、マックイーンへ走ってくるのに気づいた。
    - それから視界が急に上へ引き上げられる——%SEX%は%YOU%に脚を抱え上げられ、肩の上にしっかりと座っていた。
    - 興奮した%YOU%は空いた手で観客席に「イェイ」の仕草をし、ようやく気づいたメジロマックイーンは少し恥ずかしそうに手を振った。
    - divider: true
    - acc: 1
      content: 「レースの生涯は、これでだいたい終わりだな。」
    - 勝利者ステージのあと、%YOU%もメジロマックイーンも少し疲れて帰り道を歩いていた。
    - 一着で、年に一度の春秋の天皇賞を連覇した。
    - 短い三年を見渡せば、悔いはない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうですわね。」
    - acc: 1
      content: 「マックイーン、抱かせてくれ。」
    - メジロマックイーンは少し驚いたが、%YOU%のきつい抱擁を受け入れた。
    - acc: 1
      content: 「光をありがとう……」
    - コースの後ろで%UMA%を導くだけの%YOU%ではあるが。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……感謝すべきは、わたくしのほうですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたに導かれなければ、同じ轍を踏んでいたかもしれません。あなたがいなければ、メジロ家の栄光を継げたか、想像もつきませんわ。」
    - %YOU%とメジロマックイーンは、ごく近い距離で互いを見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その……失礼いたしますわ……」
    - メジロマックイーンは素早く%YOU%の頰にキスをした。
    - %YOU%は無意識にキスされた場所を押さえ、気づいてから微笑んだ。
    - acc: 1
      content: 「行こう。」

new_year:
  title: 新年
  lines:
    # クラシック級
    - 今日は新年だ。%YOU%はいつものようにトレーナー室へ入ると、机にはここ数日の新年行事の道具が並び、メジロマックイーンもいた。
    - メジロマックイーンは%YOU%の到来に気づき、嬉しそうにお辞儀をした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明けましておめでとうございます、%CALLNAME%。」
    - acc: 1
      content: 「あけましておめでとう、メジロマックイーン。」
    - メジロマックイーンは身から紙のようなものを取り出し、%YOU%に渡した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今年の目標を考え、年賀状を書いてまいりました。お受け取りくださいませ。」
    - メジロマックイーンから年賀状を受け取ると、新年の挨拶と目標が書いてある。
    - 目標の欄には——菊花賞制覇。
    - acc: 1
      content: 「目標は決まったな。」
    - acc: 2
      content: 「いかにもメジロ家の%UMA%らしいな。」
    - 今の%SEX%の目標は天皇賞（春）制覇だけだ。その前にレースを重ねて、天皇賞（春）の資格を取りやすくせねばならない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%UMA%として、三冠には憧れがありますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに菊花賞を勝てば、天皇賞（春）の勝利も見えてまいりますわよ。」
    - acc: 1
      content: 「ああ。菊花賞は必ず勝とう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、新しい一年も、%YOU%によろしくお願いいたしますわ。」

valentine:
  title: バレンタインデー
  lines:
    # クラシック級
    - トレーナー室で仕事をしていると……
    - %YOU%は外からのノックを聞き、中へ招いた。
    - 来たのはいつもの担当——メジロマックイーンだ。
    - 室内の%YOU%を見て、マックイーンの尻尾が嬉しそうに揺れ、背中に何か隠している。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%。」
    - メジロマックイーンは近づきながら、背に隠していたものを取り出した。言うまでもなく、綺麗に包装されたチョコレートだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「バレンタインデーおめでとうございます。これまで%CALLNAME%にご指導いただいた御礼に、このチョコレートを差し上げたくて。」
    - acc: 1
      content: 「ありがとう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とても人気のチョコレートですの。手に入れるには半年前の予約が必要ですわ。」
    - 半年前——つまり去年から、ということか……
    - 手のチョコレートを見る。その一言だけで、メジロマックイーンが用意した気持ちの重さがわかる。
    - %YOU%は手のチョコレートを見て——
    - acc: 1
      key: select
      content: しまう。（【バレンタインチョコ】を入手）
      lines:
        - 「しっ……マックイーンのバレンタインは重すぎる。家に飾って記念にしたほうがいい。」
        - そこまで考えた%YOU%は、チョコレートを鞄へしまった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え？」
        - メジロマックイーンのほうが意外そうで、それから不機嫌に眉を寄せて言った。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「用意したときは、ぜひ%CALLNAME%にもこの限定チョコを味わっていただきたかったのですのに。」
        - ああ、%YOU%の行動はメジロマックイーンの望んだものではなかったらしい。
        - 不機嫌なマックイーンを見て、%YOU%は少し考えて言った。
        - acc: 1
          content: 「マックイーンからのものだからこそ、家に飾って記念にしたいんだ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「む……それも、悪くはありませんわね。」
        - %YOU%の言葉で気が直ったメジロマックイーンの顔にまた悦色が戻り、平凡なバレンタインはこうして終わった。
    - acc: 2
      content: 目の前でチョコレートを味わう。（体力+200）
      lines:
        - そう思った%YOU%は箱を開け、一片を口に入れ、ゆっくり味わった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いかがです……？」
        - 限定チョコならではの味わいに目を輝かせ、%YOU%は親指を立て、一片を食べ終えてから言った。
        - acc: 1
          content: 「とてもいい。さすがマックイーンの言う限定チョコだ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うふふ！ ぜひ%CALLNAME%に味わっていただきたくて。」
        - メジロマックイーンは満面の笑みだった。
        - 「うん。マックイーンがいれば、いいものは何でも味わえそうだ。」
        - それから%YOU%は目の前のメジロマックイーンを見て、自分の前のチョコレートを見た。
        - 「マックイーンも一口どうだ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え、わたくし、ですの？」
        - チョコレートを食べられる予感に尻尾の揺れは速くなったが、太りやすい体質を思うと退いてしまう。
        - だが心を見抜いた%YOU%は、もう一歩進んだ。
        - acc: 1
          content: 「大丈夫だ。一粒で我慢を解いてやれ。」
        - %YOU%は微笑み、一粒をメジロマックイーンの顔の前へ出した。
        - 猫じゃらしを見た猫のように、チョコレートが前に出ると、メジロマックイーンの目はそれに釘付けになる。
        - ついに我慢できず、一口で食べた。
        - 甘く余韻を味わったあと、何か思い出したように、説教めいた怒った顔になる。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もう、%CALLNAME%。わたくしを甘やかしていらっしゃいますの？」
        - それから頰を膨らませて顔を逸らすが、後ろの尻尾は嬉しそうに揺れている。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ですが……限定チョコを味わえたのですもの、一口でも満足ですわ。」
        - %YOU%はその様子を見て笑いながらメジロマックイーンをなだめた。バレンタインだけの、別種の日常はこうして終わった。

halloween:
  title: ハロウィン
  lines:
    # クラシック級
    - 今日は年に一度のハロウィンだ。青春真っ盛りの%UMA%の好みに合わせ、学園は期間中ハロウィン風に飾られている。
    - トレセンの中庭では仮装の催しも開かれている。さまざまな仮装の%UMA%たちに比べ、作業着のままの%YOU%は少し場違いだった。
    - content:
        - fontWeight: bold
          content: %UMA%
        - 「Trick or Treat！」
    - 場外にいても%YOU%は学園の%UMA%たちに気づかれ、カボチャ型の籠を差し出して飴をねだられる。
    - acc: 1
      content: 「はい。」
    - 幸い%YOU%は飴を用意しており、%SEX%たちは礼を言って笑いながら走っていった。
    - 青春だな。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「Trick or Treat！！」
    - すぐ別の方向からも、しかも勢いのいいねだりが！
    - %YOU%が勢いよく振り返ると、目の前はメジロマックイーンだった。
    - しかも魔女に扮したメジロマックイーンだ。
    - 片手を腰に当て、片手の「杖」を軽く振る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お菓子をくださらなければ、いたずらいたしますわよ。」
    - 魔女に扮した担当%UMA%を見て、%YOU%は小さく笑い、%SEX%のために用意した小さな袋の飴を取り出した。
    - 案の定、メジロマックイーンの目はまっすぐにその飴を見ている。杖を親指の股に挟み、両手を揃えて受け取る仕草をし、%YOU%はその袋をメジロマックイーンの手に置いた。
    - 「ハロウィンの数日前、家で作ってみたんだ。好みに合うかな？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%が自ら作られた……ですの？」
    - メジロマックイーンはまず驚いて%YOU%を見て、それから先ほど他の%UMA%に渡した飴を思い出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、先ほどほかの方に差し上げたのは……？」
    - acc: 1
      content: 「あれは店で適当に買った飴だ。」
    - 自分の担当%UMA%には、少し贔屓してしまう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なるほど……」
    - 袋から一粒を取り、包装を剥くと、表面には飴を守るオブラートが残っていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「美味しい～」
    - メジロマックイーンは飴を味わいながら、%YOU%と中庭の外でハロウィンの催しを眺めた。
    - acc: 1
      content: 「マックイーン%YOUNG_LADY%がハロウィンに出るとはな。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「何と仰いますの。わたくしも子供ですもの。」
    - 確かにそうだ。
    - 学生としてのメジロマックイーンは、ほかの級友と同じ生活を送っている。何にも加わらなければ、かえって浮いてしまう。
    - acc: 1
      content: 「魔女の服、よく似合っている。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとうございます。」
    - メジロマックイーンはアニメの魔女のように杖を振り、%YOU%にウィンクした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、この装い、あなたの心を捉えましたかしら？」
    - acc: 1
      content: 「メジロマックイーンに心を捉えられるなら、一生の価値があるな。」
    - %YOU%は尊ばれたように胸を押さえた。
    - メジロマックイーンは%YOU%の言葉に笑ったようだ。
    - acc: 1
      content: 「とにかく、ハッピーハロウィン、マックイーン！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ、ハッピーハロウィン。」

mejiro_family:
  title: メジロ家からの招待
  lines:
    # 天皇賞（春）勝利劇情のあと
    - メジロマックイーンが天皇賞（春）を勝ったあと、トレーニング室で仕事をしていた%YOU%に突然電話がかかってきた。
    - acc: 1
      content: 「もしもし？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「%CALLNAME%、こんにちは。」
    - %YOU%はすぐに、メジロマックイーンの声だとわかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇賞（春）を勝ちましたので、メジロ家で祝賀の晩餐会を開きたいそうですの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それで、ご招待したくて。ご出席いただけますかしら？」
    - acc: 1
      content: 「もちろん。メジロ家の晩餐会には興味がある。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よかったですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「執事にスーツをお届けさせます。晩餐会は来週の予定です。来週が過ぎましたらスーツをお召しになり、執事がお迎えに参りますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「楽しみにしておりますわ。」

mejiro_party:
  title: メジロ家の晩餐会
  lines:
    # 天皇賞（春）勝利ターンの翌ターン、休息後に自動発生
    # 89恋慕前の恋慕ロック
    - 短くない道のりのあと、執事が専用で送る車はようやく郊外のメジロ邸に着いた。
    - 執事が降りて%YOU%に扉を開け、%YOU%は慎重に降りて礼を言い、胸を張った。
    - 眼前の広大な邸宅に%YOU%は驚きつつも、そのメジロ邸へ足を踏み入れた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%。」
    - 大門の向こうからメジロマックイーンの声がした。すでにここで%YOU%を待っていたのだ。
    - 上流の場へ初めて入り、普段は気ままな%YOU%は少し硬く振り返ったが、このときのマックイーンの装いに見入ってしまった。
    - 左耳のいつものリボンの耳飾りは高価な耳飾りに代わり、普段着は%SEX%の髪と同じ淡い紫の礼装に変わっている。普段とは別人のようだ。
    - %YOU%は唇をわずかに開き、呆けたまま顔に驚喜の色が浮かぶ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんばんは。」
    -
    - acc: 1
      content: 「こんばんは！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その……わたくしのこの装い、いかがです。」
    - メジロマックイーンは少し頰を赤らめ、視線を泳がせて%YOU%に尋ねた。
    -
    - acc: 1
      content: 「綺麗だ。とても綺麗だ！」
    -
    - %YOU%は二度頷き、メジロマックイーンの装いを褒めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うふふ……」
    - メジロマックイーンは少し嬉しそうに小さく笑い、耳も小さく震えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%YOU%のほうこそ、スーツをお召しになると、とても様になっていらっしゃいますわ。」
    - メジロマックイーンは両手をきちんと胸の前に置き、%YOU%と並んで晩餐会場へ向かった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、そんなに硬くならなくてもよろしいのですよ。一週間前にわたくしと大功を立てたのですもの、会場の主役であるべきですわ。」
    - %YOU%は少し照れくさそうに笑い、それから説明した。
    - acc: 1
      content: 「君の%YOU%だからな。メジロマックイーンができることは、俺もできなきゃ。」
    - 広大な邸宅を歩きながら少し話し、あいだの沈黙を溶かした。
    - 会場へ入ると、%YOU%はその盛大な設えにその場で立ち尽くした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、%CALLNAME%、晩餐会をお楽しみくださいませ。」
    - メジロマックイーンの言葉が落ちると、先ほど%YOU%を送った執事が突然二人の傍に現れた。
    - content:
        - fontWeight: bold
          content: 執事
        - 「%CALLNAME%、当主さまがお話しされたいとのことです。」
    - メジロマックイーンの穏やかな表情に一瞬驚きが走り、心配そうに%YOU%を見る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - acc: 1
      content: 「一人で行くよ。」
    - 承諾を得た執事は、%YOU%をある部屋へ案内した。
    - content:
        - fontWeight: bold
          content: 執事
        - 「当主さまは中でお待ちです。お話が弾みますように。」
    - %YOU%は頷いて、扉のほうを見た。
    - 扉は%YOU%のために隙間が残されていたが、教養として、それでもノックした。
    - 中からの返事はない。入ることを黙認したのだろう。
    - 入ると、豪華な典型的な欧州風の部屋に目を奪われる。
    - 執事の言う「当主さま」は%YOU%の真正面の机に座っていた。夜色を湛えた落地窓を背に、貴婦人帽をかぶり、顔立ちはよく見えない。だがその威厳に%YOU%は腰を伸ばし、これがメジロ家の当主だと確信した。
    - acc: 1
      content: 「初めまして……？」
    - 二人のあいだに短い沈黙があり、目の前のメジロ家当主が口を開いた。
    - content:
        - fontWeight: bold
          content: メジロ家当主
        - 「初めまして、マックイーンの%CALLNAME%。」
    # FLAGNAME:15 = 現在の名声
    - if: era.get('flag:15') < 500
      content:
        - fontWeight: bold
          content: メジロ家当主
        - 「お顔を拝見するに、以前お会いしたことはないようですわね。%YOU%の道に入られたのは最近ですの？」
    - if: era.get('flag:15') >= 500 && era.get('flag:15') < 2000
      content:
        - fontWeight: bold
          content: メジロ家当主
        - 「存じておりますわ。新聞やテレビでお見掛けしました。育てられた%UMA%は、みな良い成績を残していますもの。」
    - if: era.get('flag:15') >= 2000
      content:
        - fontWeight: bold
          content: メジロ家当主
        - 「トレセンで知らぬ者のないトレーナーですわね。あなたの手にかかった%UMA%で、落ちぶれた成績を残した者は一人もおりません。」
    -
    - %YOU%は目の前の当主の眼力にひそかに感嘆し、肯定して頷いた。
    -
    - acc: 1
      content: 「はい。お会いできて光栄です。」
    -
    - それから目の前の当主は杖をつき、隣の壁の棚の前へ歩いた。
    - %YOU%も好奇心に駆られ、小股で当主の傍へ寄った。
    - 眼前は、メジロマックイーンが天皇賞（春）で得た盾だった。
    - それだけでなく、ほかに二つの盾があり、上の二つの名を見る。
    - メジロアサマ、メジロタイタン……
    - content:
        - fontWeight: bold
          content: メジロ家当主
        - 「これらは、先達が家のために勝ち取った栄誉ですわ。」
    - 最後に「メジロマックイーン」が、前の二人と一列に並んでいた。
    - content:
        - fontWeight: bold
          content: メジロ家当主
        - 「今回のレース、満足しております。」
    - content:
        - fontWeight: bold
          content: メジロ家当主
        - 「マックイーンは自らの優秀を証明しました。%SEX%は、メジロ家の誇りです。」
    - メジロ家当主はあなたを見た。%SEX%の顔は老いを帯びている。
    - if: era.get('flag:15') < 500
      content:
        - fontWeight: bold
          content: メジロ家当主
        - 「もちろん、天皇賞（春）を勝ったことは、あなたの天賦も証明しておりますわ。」
    - if: era.get('flag:15') >= 500 && era.get('flag:15') < 2000
      content:
        - fontWeight: bold
          content: メジロ家当主
        - 「もちろん、天皇賞（春）を勝ったことは、あなたが優れたトレーナーであることも証明しておりますわ。」
    - if: era.get('flag:15') >= 2000
      content:
        - fontWeight: bold
          content: メジロ家当主
        - 「もちろん、天皇賞（春）を勝ったことは、この優れた一戦があなたの名声にふさわしいことも証明しておりますわ。」
    -
    - acc: 1
      content: 「お褒めにあずかり恐縮です。%UMA%の夢を叶えるトレーナーの本職を果たしただけです。」
    - %YOU%は微笑んで言った。
    - content:
        - fontWeight: bold
          content: メジロ家当主
        - 「謙遜はよろしいことですわ。」
    - content:
        - fontWeight: bold
          content: メジロ家当主
        - 「これよりあなたはメジロ家の認めるトレーナーです。外では人にも事にも、振る舞いをお気をつけください。酒浸りや賭博などの悪習は……」
    - if: era.get('love:13') >= 75
      lines:
        - content:
            - fontWeight: bold
              content: メジロ家当主
            - 「とりわけ、マックイーンと近いときには……」
        - content:
            - fontWeight: bold
              content: メジロ家当主
            - 「天皇賞（春）を勝ちましたので、お二人の関係に干渉はいたしません。続けてよろしい。ですが、マックイーンを傷つけるようなことをなさったら。」
        - content:
            - fontWeight: bold
              content: メジロ家当主
            - 「それが知れれば、いつでもあなたをマックイーンから引き離せますわ。」
    - 強い寒気が%YOU%の背を洗い、一字一字が刃のように心へ刻まれる。
    - acc: 1
      content: 「必ず気をつけます……当主さま。」
    - %YOU%は緊張して承諾した。
    - 満足のいく答えを聞いて、メジロ家の当主はやっと気場を収めた。
    - 当主は%YOU%の肩を叩き、慈しむように言った。
    - content:
        - fontWeight: bold
          content: メジロ家当主
        - 「時間も遅くなりました。機会があればまたゆっくり。今日の主役は、あなたとマックイーンですわよ。」
    -
    - acc: 1
      content: 「では……失礼します。」
    -
    - %YOU%は軽くお辞儀をし、扉の前で当主を一目見てから去った。
    -
    - 会場へ戻った%YOU%は、周囲を見回した。
    - 晩餐会はすでに始まっており、優美な音楽が流れ、華やかな礼装の紳士淑女が三々五々集まり、談笑している。権門の風格そのもので、それに比べれば自分のトレーナーという身分は小さく感じる。
    - （なぜか、胸の内が少し複雑だ）
    - %YOU%はそう思いながら会場へ降りた。
    - メジロマックイーンが会場で唯一の拠り所だ。%YOU%の頭は「マックイーンを見つけねば」でいっぱいだった。
    - %YOU%は人混みを抜け、メジロマックイーンの姿を探す。
    - 今回の晩餐会の焦点のひとりとして、声をかけてくる者も少なくないが、%YOU%は一つひとつ避けた。
    - acc: 1
      content: 「すみません！ マックイーンを探していて！」
    - %YOU%は室内を一掃したが、あの目立つ淡い紫の姿はなかった。
    - ふとバルコニーを見ると、メジロマックイーンがいた。だがなぜか%SEX%は遠くを見ている。
    - %YOU%は%SEX%のいる場所へ急ぎ足で向かった。
    - acc: 1
      content: 「マックイーン。」
    - メジロマックイーンは%YOU%の呼びかけを聞いて、%YOU%を見た。
    - acc: 1
      content: 「ここにいたのか。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お祖母さまとは、お話し終えましたの？」
    - %YOU%は頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その……何か仰いました？」
    - %YOU%は少し思案した。
    - acc: 1
      content: 「君が優秀だと褒めていた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そう、ですの……？」
    - %YOU%は小さく頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……幼い頃からの努力は、無駄ではなかったのですね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが努力以外にも、メイクデビューの前、わたくしは人を見誤りませんでしたわ。」
    - メジロマックイーンは小さく喜びの微笑を浮かべた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレセンに入ってから、天皇賞（春）連覇の祝賀会に立てるまで、みなあなたのおかげですわ。」
    - acc: 1
      content: 「直接会う前は、もっと厳しい人だと思っていた。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから申しましたでしょう。お祖母さまは人情に厚い方です。外の方が思うような方ではございませんわ。」
    - だが、本当にそうだろうか。
    - 当主の優しさは、家の%UMA%たちにだけ向けられるのかもしれない。
    - 話題が終わると、二人は並んで立った。
    - acc: 1
      content: 「ところで、なぜずっとバルコニーにいたんだ。」
    - 痛いところを突かれたようにメジロマックイーンは震え、それから満面の笑みで言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「理由を申しますと、メジロ家らしくないかもしれませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「中の大人たちに次々と誘われて、煩わしくて。それでバルコニーで風に当たっておりましたの。」
    - 夜風に髪が揺れ、眉を伏せたメジロマックイーンは、どこか見惚れる。
    - acc: 1
      content: 「同病相憐れむ、だな。」
    - こちらも、たくさんの誘いを受けた。
    - %YOU%はメジロマックイーンに片手を差し出した。
    - acc: 1
      content: 「なら、一緒に晩餐会に出ないか。そうすれば、ほかの人に誘われない。」
    - 頼まれたメジロマックイーンは手を見て、%YOU%の真摯な目を見て、はっきり承諾し、バルコニーから室内へ戻った。
    - 室内へ戻ったばかりで、礼装の馴染みの%UMA%が二人の前に来た。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: ？？？
        - 「マックイーン、それに%CALLNAME%！」
    - 「ライアン？」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「私だよ。どうしたの、忘れちゃった？」
    - 「いやいや、ライアンが礼装だと、どうも慣れなくて。」
    - そんな評価を受けたメジロライアンは、照れくさそうに笑った。
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「でしょ。やっぱり運動着のほうが似合うよね。でも晩餐会なら、こう着るのも普通でしょ。」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「というか、二人ともまだここにいるの？ 会場の空気、味わいに行かないの？」
    - %YOU%は小さく頷いた。
    - acc: 1
      content: 「ちょうどそのつもりだ！」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「OK！ ここでゆっくり見て回って。じゃあ、邪魔しないよ。」
    - ライアンが去る背中を見送り、%YOU%はそう言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、どちらへ参りましょうか。」
    - acc: 1
      content: 「美食を味わう」
    - %YOU%が提案すると、メジロマックイーンもすぐにそれに同意した。
    - ダンスサークルの外、料理の並ぶテーブルへ向かい、気になるものを探す。
    - それから%YOU%は足を止め、傍らのチョコレートファウンテンを見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - %YOU%は小さく笑った。
    - 「子供の頃、これに触れたことがある。」
    - 「年少無知で口をつけて舐めたら、チョコは舐められず、髪にチョコソースがついた。」
    - %YOU%は傍らにマシュマロと串があるのを見て、串にマシュマロを刺し、ファウンテンへかざした。
    - 「あのとき初めて知った。マシュマロみたいなものをかけて使うのが正しい使い方なんだ。」
    - メジロマックイーンはそれを聞いて、口を押さえて笑った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%に、そんなご経験が。」
    - 二人は楽しげに逸話を話しながら、美食を味わった。
    - acc: 1
      content: 「ダンスを試す」
    - %YOU%の提案を聞いたメジロマックイーンは、少し驚喜した様子だった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ダンスを、ですの？」
    - 「だが、俺は踊れない。」
    - %YOU%は少し照れくさそうにそう言った。
    - それでもメジロマックイーンは諦めず、%YOU%の手を引いてダンスサークルへ入った。
    - メジロマックイーンと%YOU%は向かい合い、片手を揃えて外へ伸ばす。マックイーンのもう一方の手は%YOU%の腕を伝って前腕を掴み、%YOU%の手はマックイーンの注意どおり、体格差で%SEX%の背にわずかに触れるだけだった。
    -
    - 「ネットの動画に出てくる動きに似ているな。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こうあるべきですわ。」
    - メジロマックイーンは得意げにそう言った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まだまだ始まりですのよ。」
    - メジロマックイーンの小さな注意に従い、%SEX%のステップを真似る。
    - マックイーンが%YOU%の腕を握ったまま投竿のように外へ回り、空いた腕を広げ、また二人が寄る。
    - 互い違いに歩き、それから腕を伸ばして互いを引き戻す。
    - メジロマックイーンが一回転するあいだに、%YOU%は%SEX%の腰を支え、マックイーンはそのまま%YOU%の腕へ凭れた。
    - 最後にメジロマックイーンの顔が少し驚き、%YOU%も夢から覚めたように周囲を見た。
    - ダンスに没入していた二人は、照明が%SEX%たちに当たっていることにも、周囲が人で囲まれていることにも気づいていなかった。
    - 照明が元に戻る。
    - それから次第に、周囲の人々から拍手が起こった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お馬鹿さん。」
    - メジロマックイーンは心の中でそう罵りつつも、安堵して%YOU%を見ていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「踊れないと仰いましたわよね？」
    -
    - acc: 1
      content: 「ネットで少し見たことがあるだけだ。」
    -
    - 二人が離れても、ダンスの余韻がわずかに残っている。
    - 「まだたくさんの技を、マックイーンに教えてもらわなきゃな。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次、お時間があるときに教えましょう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしの関係で、今後晩餐会へお出になる際の心得も、必要になりますもの。」
    - divider: true
    - 二人が長く晩餐会の催しに参加したあと、ようやく締めの段階になった。
    - 二人は晩餐会のバルコニーへ出た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「晩餐会は、いかがでした？」
    -
    - acc: 1
      content: 「好きとまでは言えないが、少なくとも君がいてくれた。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、本当に……」
    - メジロマックイーンは笑って%YOU%を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前、メジロ家のさまざまな催しに出るときは、いつもわたくしひとりでした。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ひとりですから、傍にいてくれるのは%SIBLINGS%たちだけでしたの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから今日、%CALLNAME%と一緒に晩餐会を楽しめたのは、とても新鮮でしたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとうございます、%CALLNAME%。今日の晩餐会、嬉しかったですわ。」
    - メジロマックイーンは傍らで恥ずかしそうに言った。
    - acc: 1
      content: 「どういたしまして。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今夜は執事のおじいさまに客室をご用意いただきました。どうぞおくつろぎくださいませ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ついでに申しますと、天皇賞（春）の重荷は、ようやく無事に下りました。ですから今後のやり取り、楽しみにしておりますわ。」
    - （つまり、マックイーンともっと先へ進んでいい、ということか？）
    - acc: 1
      content: 「わかった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、%CALLNAME%、おやすみなさい。」
    - そのあと、%YOU%は執事に案内されて整った客室へ行き、身体を洗い、寝間着を着てベッドに横たわり、深く眠った。

want_dessert:
  title: スイーツが食べたい
  lines:
    # 商店街
    - マックイーンと外出した折、たまたまスイーツ店の前を通り、その存在がマックイーンの目を捉えて離さない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、その……」
    - 正面の顔は見えないが、%SEX%の目は星でいっぱいだろう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「む……」
    - %YOU%に迷惑をかけ、外の印象にも響くとわかっているのか、スイーツの誘惑を無理に耐えている。
    - acc: 1
      key: select
      content: 「食べに行こうか？」（やる気+1、好感+10）
      lines:
        - 驚く言葉を聞いて、マックイーンは衝撃を受けたように%YOU%を見た。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「本当ですの？ %CALLNAME%？」
        - すでに決めた%YOU%は頷いた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では、遠慮なくいただきますわ。」
        - こうしてマックイーンと%YOU%は、スイーツ店でゆったりした時間を過ごした。
    - acc: 2
      content: 「行くぞ。」（根性+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ……はい。」
        - マックイーンはあなたを見て、何も言わずに承諾した。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「レースのため、もう少し我慢しなければなりませんわね……」
        - 帰り道、マックイーンは淡く独り言を呟いていた。
