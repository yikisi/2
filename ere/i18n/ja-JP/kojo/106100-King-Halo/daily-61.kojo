# @file キングヘイロー - 日常
# @author 牛蛙煲
# @author Claude (翻訳)
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「無駄話は結構ですわ。さっさと始めましょう。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「キングの辞書に、困難の二文字はありませんわよ？」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「早く動きなさい。何もしなければ、一流とは呼べませんわ。」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「あの方に、わたくしを証明するために……」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「朝食？ きちんといただきましたわ。ですから、早く始めましょう？」
    - if: era.get('status:61:熬夜') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「同室のウララが、なぜか急に抱きついて寝ようとして……」
    - if: era.get('status:61:熬夜') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「ふあぁ……なにですの？ 徹夜などしていませんわ！」

select:
  sync: true
  lines:
    - if: era.get('status:61:沉睡') === 0 && era.get('status:61:马跳S') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「今日は、キングのトレーニングを観る権利を授けますわ！」
    - if: era.get('status:61:沉睡') === 0 && era.get('status:61:马跳S') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「%CALLNAME%、胸を張りなさい。一流の責任は、わたくしと一緒に担うのですわ！」
    - if: era.get('status:61:沉睡') === 0 && era.get('status:61:马跳S') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「今日の予定、早くキングに教えなさい！」
    - if: era.get('status:61:沉睡') > 0 || era.get('status:61:马跳S') > 0
      random: true
      lines:
        - 「キング？」
        - 眠っているキングヘイローが、横暴な姿勢でトレーナー室のソファを占領していた。
        - しばらくは起こせそうにない。

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「なるほど……おーっほっほっほ、キングは理解力まで一流ですわね！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「では続きは、%CALLNAME%にお任せしますわ。」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「勝利は、一流のキングだけのもの！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今日のレース、誰より速く、誰より強く、必ず勝つ一流の%UMA%は誰ですの？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「なにを言っていますの？ 勝ってみせますわ！ わたくしに任せなさい！」

talk:
  - if: era.get('cflag:61:干劲') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「おー——っほっほっほ！ 今日も一流の一日ですわね！」
  - if: era.get('cflag:61:干劲') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「今日のキングは機嫌がよろしいの！ %CALLNAME%に、キングへ付き添う権利を授けますわ！」
  - if: era.get('cflag:61:干劲') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「調子は悪くありませんわ。%CALLNAME%、早く始めましょう。」
  - if: era.get('cflag:61:干劲') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「わたくしの準備はできていますわ。%CALLNAME%は何を待っているんですの？」
  - if: era.get('cflag:61:干劲') === 0 && era.get('cflag:61:育成回合计时') < 3 * 48
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「あの方を超えられると、証明しなければ……」
  - if: era.get('cflag:61:干劲') === 0 && era.get('cflag:61:育成回合计时') < 3 * 48
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「気を引き締めなさい。%CALLNAME%は、わたくしと一緒に一流を目指すのですから。」
  - if: era.get('cflag:61:干劲') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「それで？ わたくしは何をすればいいんですの？」
  - if: era.get('cflag:61:干劲') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「あまり気分がよくありませんわ。どうしてでしょうね？」
  - if: era.get('cflag:61:干劲') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「まったく気力が湧きませんわ……」
  - if: era.get('cflag:61:干劲') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「わたくしは一流のキングですのに、どうしてこんなにやる気が出ないのかしら……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ウララは寮でうるさいこともありますが、家に誰かがいる感じは、嫌いではありませんわ。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「スペシャルウィークは、一目で誰かにちゃんと世話されないと困る%UMA%ですわね。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「昨日、カワカミプリンセスが礼儀について尋ねに来ましたわ。ほっほ、%SEX%は相手を間違えていませんわね。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「一流の%UMA%のトレーナーなら、あなたも気を引き締めなさい。」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「キングは、%CALLNAME%にキングを直視する特別な権利を授けますわ！ ずっと、キングを見ていなさい！」
  - if: era.get('flag:当前月') === 12 || era.get('flag:当前月') <= 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「寒いですわ……ちょっと、%CALLNAME%、キングが凍えて動けないのが見えないんですの？ 外套を貸しなさい！」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「わたくしへの贈り物ですの？ おーっほっほっほ！ キング、満足ですわ！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「キングが%CALLNAME%の贈り物をただ貰うわけにはいきませんわ。お返しは用意します。」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「早く、早く！ キングがお腹を空かせてしまいますわ！」
      - %YOU%がキングヘイローの「一口先に」という要求を七度断り、ようやくキングヘイローは静かになった。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%はご存じないのですか？ 一流とは、あらゆる面で一流であること。料理も例外ではありませんわ？」
      - ある日、キングヘイローは食事を作ろうとする%YOU%を遮り、代わりに自分が作ると申し出た。
      - %YOU%はキングヘイローの言う「一流の料理」をまったく信用していなかったが、%UMA%には勝てない。
      - %YOU%はキングヘイローに脇へ通され、キングヘイローは隙を見て厨房へ滑り込み、鍵をかけた。
      - ……
      - 厨房の中、キングヘイローは使う食材を数えながら、鼻歌を口ずさんでいる。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%が一流のキングを信じないなんて……まあいいですわ。キングは広い心で、%CALLNAME%を許してあげます！」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「まずはスープを試してみましょうか？」
      - キングヘイローは%YOU%が料理していたときの様子を懸命に思い出し、意外にも要領を掴み、それらしい手つきで動き始めた。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ちっとも難しくありませんわ！」
      - キングヘイローはスープを小さじ一杯、脇の小皿に掬って味見した。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「薄すぎますわ。塩を足しましょう。」
      - キングヘイローは匙を放り、鍋に塩を足し、また小皿のスープを味見した。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「おかしいですわ。あんなに塩を足したのに、どうして味がしないの？」
      - キングヘイローは慌てて、スープへ塩を注ぎ始めた。
      - 小皿のスープをもう一度味わったあと、%SEX%は力なく肩を落とした。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「さあ、一流の養生スープをお召し上がりください！ キングは%CALLNAME%の健康を考えて、わざと薄めに仕上げましたのよ！」
      - %YOU%はキングヘイローの逸らしがちな視線を見て、試しに一口含んだ。
      - すぐに、キングヘイローの熱い視線の中で、%YOU%は敗北した。
      - 「キング、塩入れをひっくり返したんじゃありませんか！」
      - キングヘイローは一瞬呆け、それから合点がいったように俯き、口を閉ざした。
      - %YOU%は少し考え、だいたい事情を理解した。
      - %YOU%は笑いを必死にこらえ、スープを作り直した。
      - その食事は、かなり妙な空気のまま終わった。

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「疲れてなどいませんわ！ キングは疲れませんの！」
      - 「労逸のバランスを取るのも、一流になるための必要条件ですよ？」
      - それを聞くと、キングヘイローは黙って横になった。午前の高負荷トレーニングを経た%SEX%は、五分もせずに眠りについた。
      - %YOU%はキングヘイローの穏やかな寝顔を見て、自分の上着をそっとかけた。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「疲れましたわ——%CALLNAME%、早くキングに枕と毛布を用意しなさい。キングはしっかり休みますわ！」
      - キングヘイローは入るなりソファへ倒れ込み、自分の家にいるかのようだった。
      - %YOU%は困ったように首を振るが、それでも枕と毛布を用意した。
      - だが%YOU%が持ってきたときには、キングヘイローはすでにソファの背もたれを抱いて眠っていた。
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「さあ、%CALLNAME%、端に座りなさい～」
      - キングヘイローは%YOU%をソファの端へ座らせた。%YOU%は少し訳が分からない。
      - 続いてキングヘイローは、気持ちよさそうに%YOU%の腿の上へ横たわった。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「んあぁ——やはり%CALLNAME%の脚が、枕に一番向いていますわ。」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「キングの枕になって、キングの睡眠を見守る権利を授け……」
      - 言い終わる前に、キングヘイローの呼吸は穏やかになり、眠ってしまったらしい。
      - %YOU%はキングヘイローの安らかな寝顔を眺めつつ、起こすのが怖くて動けなかった。
      - そうして、甘く蕩ける昼過ぎが過ぎていった。
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、キングは疲れましたわ。歩きたくありません。」
      - %YOU%は自分の腕にしっかりしがみつくキングヘイローを横目に見た。何がしたいのかは、とっくに察していた。
      - だから%YOU%は腰をかがめ、キングヘイローを抱き上げた。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「キングと一緒に昼休みを過ごす権利を授けますわ！ このまま抱いて、トレーナー室へ行きなさい。」
      - こうして%YOU%はキングヘイローを抱いてトレーナー室へ戻り、抱き合ったまま昼休みを過ごした。

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%は、キングがこんなものに時間を無駄にするとお思い？」
      - 結果、キングヘイローは二時間ぶっ続けで遊んだ。
      - 「もう終わりにしましょう、キング？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「もう少しで勝てたのに……」
      - キングヘイローは悔しそうだった。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「たかがゲーム、キングなら造作もなく……」

school_rooftop:
  - キングヘイローの求めに応じ、%YOU%は弁当を二つ持って、%SEX%と一緒に屋上へ来た。
  - %YOU%がその一つをキングヘイローに渡すと、%SEX%は弁当の向きを変えて、また%YOU%へ戻してきた。
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「よし、これでキングが作ったことになりますわ！ 感謝の気持ちを込めて召し上がりなさい！」
  - %YOU%は困ったように笑い、キングヘイローから渡された「キング謹製」の弁当を受け取り、二個目を%SEX%へ渡した。
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「交換完了！ さあ、いただきますわ！」
  - %YOU%の手元の弁当は自分で作ったものだが、それでもキングヘイローから「一流のキングを称えなさい」と要求された。

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「わたくしキングヘイローは、一流の%UMA%！ 一流になるため、あの方を超えるため、全力を尽くしますわ！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「次は、もっと速く走らなければ。どの相手よりも速く。そうしてこそ、一流になれる……」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「時間の無駄ですわね！」
      - キングヘイローは嫌そうに言いながら、それでも%YOU%の腕を決して離さなかった。
  - random: true
    lines:
      - %YOU%はキングヘイローの手を引いて学園を歩く。普段は口達者なキングヘイローが、今は一言も発さない。

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「セイウンスカイに釣りを少し教わりましたわ。思い出してみます……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「かかりましたわ！ やはりキングは釣りでも、文句なしの一流ですわね！」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「こうして歩くのも悪くありませんわ。次もキングの散歩に付き合う権利を、%CALLNAME%に授けますわ！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「道端の小さな店、季節の景色……散歩のたび、特別な収穫がありますわ。」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、キングは疲れましたわ。何か考えて、キングを連れて帰りなさい～」
      - キングヘイローは%YOU%にぴったり寄りかかり、疲れたふりをした。
      - %YOU%はどうにもならず、キングヘイローを腰から抱き上げた。

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「意外と面白いですわね。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「一流の点数を出してみせますわ……」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、わたくしでは足りないんですの？ ぬいぐるみばかり見ないでくださいまし！」

o_s_drawing:
  - 商店街へ来ると、ちょうど抽選会をやっていた。
  - %YOU%は前回商店街で抽選券を貰ったことを思い出し、取り出した。
  - acc: 1
    content: 「キング、運試しをしてみますか？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「試しなど必要ありませんわ！ 一流のキングなら、運まで一流に決まっています！」
  - そのあと、%YOU%の手元の抽選券はキングヘイローに奪われた。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「おー——っほっほっほ！ 一等賞をキングのために用意しておきなさい！」
  - %YOU%はキングヘイローが前へ寄り、抽選機のハンドルを回すのを見た。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「答えは——一流！」
      - 抽選機の結果は、キングヘイローの期待どおりだった。一等賞、にんじんの大箱が、キングヘイローの手に収まる。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「では今夜はにんじんハンバーグですわ～ にんじんは全部キングのもの。ご飯はもちろん%CALLNAME%が作るのですわ！」
      - キングヘイローの機嫌は、とても良さそうだった。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「止まらないで、止まらないで……」
      - 抽選機はゆっくり止まり、「一等賞」からほんのわずか外れた「残念賞」で止まった。
      - acc: 1
        content: 「景品はトイレットペーパーですよ。」
      - %YOU%は目の前で石になったキングヘイローを見て、声をかけた。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「全部%CALLNAME%のせいですわ！ %CALLNAME%がわたくしの一流の運を吸ったに違いありませんわ！」
      - キングヘイローの理不尽な八つ当たりに、%YOU%は困ったように笑った。
      - acc: 1
        content: 「ではキングは、どう詫びてほしいのですか？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「では今夜、キングに美味しいにんじんハンバーグを献上しなさい！」

o_s_ktv:
  - %YOU%はキングヘイローをカラオケへ連れていった。
  - 適当に数節歌ったあと、%YOU%は無言でマイクを、怨念が溢れそうなキングヘイローへ渡した。
  - content:
      - fontWeight: bold
        content: %CHARA%
      - 「なにを歌っているんですの。%CALLNAME%は大人しく、キングの美しい歌声を鑑賞していなさい！」
  - キングヘイローはもう一度%YOU%を睨んでから、声を放った。
  - あなたは、思わず聞き入ってしまった。

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「素晴らしい映画ですわ。キングの趣味に合っていますわね。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「認めざるを得ませんわ。%CALLNAME%の趣味も、なかなかですわね。」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ホラーですの？ おーっほっほっほ、一流のキングに恐れなどありませんわ！」
      - ホラー映画への軽蔑演説を終えて十分後、キングヘイローは%YOU%にぴったり張り付いていた。
      - %YOU%は仕方なく、震える%SEX%の背中を撫でた。
      - 「もう大丈夫、怖がらないで。あの幽霊はもう消えたよ。」
      - 耳を伏せて顔を上げられなかったキングヘイローが、一気に元気になった。
      - %SEX%は怖い場面が過ぎたのを再確認すると、また平気を装って%YOU%に凭れた。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「キングはちっとも怖くありませんわ！ ここが寒いだけで、%CALLNAME%が温かいだけですのよ！」
      - %YOU%は小さく笑い、キングヘイローの強がりを暴かず、額に軽く口づけした。
      - 映画の筋など、もうそれほど重要ではなかった。

o_c_pray:
  - if: d.dice > 0.5
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ふん、一流のわたくしが、こんなものを信じますか！」
      - キングヘイローはさらりと言いながら、おみくじを強く握りしめ、口ほどには落ち着いていなかった。
  - if: d.dice < 0.5
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「やはり、一流のわたくしが引く籤まで一流ですわ！」
      - キングヘイローは嬉しそうにおみくじを摘み、書いてある内容を%YOU%に見せた。

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「スペシャルウィークがここを勧めてくれましたわ。認めざるを得ません、%SEX%は美食探しではなかなかの見識ですわ。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「こんなに食べて、キングのイメージに合いませんわ……この店が美味しすぎるのが悪いんですのよ！」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%はどうして食べないんですの？ キングに食べさせてもらわないと、口を開けないつもり？」
      - %YOU%は仕事のことを考えていたところへ、キングヘイローの声で我に返った。向かいにいるキングヘイローは、すでに不機嫌な顔だった。
      - %YOU%は「一流のお詫び」でキングヘイローの許しを得ようとしたが、ふと、なぜそうしないのかと思い直した。
      - 「では、遠慮なく。あーん」
      - %YOU%はキングヘイローの心を、見事に乱した。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、なにをしているんですの！ みんな見ていますわよ！」
      - %YOU%は動じない。
      - 結局、キングヘイローは武装解除した。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「もういいですわ、もう。キングが食べさせてあげます。子供みたい、本当に幼稚ですわ！」
      - %YOU%は目を細め、顔を赤らめたキングヘイローの「一流サービス」を味わった。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ねえ、キングが動いたのですから、%CALLNAME%も礼を返すべきでは？」
      - 味わい終えたあと、%YOU%はキングヘイローにたっぷり仕返しされた。
      - 店内には、恋という名の酸っぱさが漂った。

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「胸を張って、堂々とわたくしと歩きなさい。あなたはキングが自ら認めたトレーナーですもの？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「だから%CALLNAME%は、キングの一流の道の準備をせず、キングを連れて時間を無駄にするんですの？」
      - 「どうした、キングは嫌い？」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「そういうわけでは……こうして静かに一緒にいるのも、悪くありませんわ……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「キングに付き添う権利を授けますわ！」
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、ほら、手を出しなさい。」
      - %YOU%はキングヘイローの意図が分からなかったが、それでも手を出した。
      - キングヘイローは%YOU%の五指をそっと開き、十指を絡めた。
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「さあ、行きましょう。」
      - 通行人が%YOU%とキングの繋がった手を噂しても、キングヘイローの顔がどんどん赤くなっても、%SEX%は最後まで%YOU%の手を離さなかった。
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%は、このままわたくしと一緒に進んでくださいまし。これからの日々も、わたくしに付き添うんですわよ？」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%は一目で、あまり商場に来ない人ですわ。さあ、キングについていらっしゃい。キングが案内してあげます。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「歩き疲れた？ だめですわ、まだそんなに歩いていません。気を引き締めて、キングの歩調についていらっしゃい！」
      - 最後に残ったのは、筋肉痛とキングヘイローの笑顔だった。

good_night_normal:
  sync: true
  lines:
    - if: '!d.awake'
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - 「今日のトレーニングも一……」
        - トレーニングのあと、キングヘイローは%YOU%の執務椅子を占領して総括演説を始めかけたが、冒頭で止まった。
        - %YOU%が顔を上げると、キングヘイローは疲れ果てて眠っていた。
        - %YOU%は優しく起こそうとしたが、失敗した。
        - だから%YOU%は自分でキングヘイローを抱き、寮の下まで運んだ。
        - acc: 1
          content: 「今回も、よろしくお願いします……」
        - %YOU%はキングヘイローを%SEX%の寮長へ預け、相手が寮へ戻るのを見送った。
        - %YOU%は溜息をついた。次はトレーニング強度に気をつけよう。
    - if: d.awake
      lines:
        - if: era.get('love:61') < 75
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「キングは今日のトレーニングに満足ですわ！ 明日のトレーニング計画を立てる権利を授けますわ！」
            - %YOU%は、寮の玄関前で疲れ切っているのに気力を振り絞って演説するキングヘイローを見て、苦笑した。
            - %YOU%はキングヘイローに手を振り、しっかり休むよう言い含めた。
        - if: era.get('love:61') >= 75
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「キングの脚が、少し痛いんですの！」
            - %YOU%はトレーニング場の端に端座しながら、妙に元気なキングヘイローを見て、少し訳が分からなかった。
            - acc: 1
              content: 「では、早く戻って休みましょうか？」
            - 詳しい事情が分からない%YOU%は、今日のトレーニングはここまでだと提案した。
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「では、わたくし一人で歩いて帰れと？」
            - キングヘイローは、ついに本音を晒した。
            - だから%YOU%は一歩前へ出て、少し顔を赤らめたキングヘイローを抱き上げた。
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - 「おー——っほっほっほ！ キングを抱いて寮まで送る権利を授けますわ！」

good_night_sex:
  - トレーニングのあと、%YOU%はいつものようにキングヘイローを寮の下まで抱き上げた。
  - ところが寮の下まで来ても、キングヘイローは%YOU%の首に回した手を離さなかった。
  - acc: 1
    content: 「キング、着きましたよ？」
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「%CALLNAME%、まだ分からないんですの？」
  - キングヘイローは、少し恥ずかしそうな顔で%YOU%を見た。
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - 「キングを悦ばせる権利を、あなたに授けますわよ？」
  - 言い終えると、キングヘイローは俯いて、より強く%YOU%を抱き、もう何も言わなかった。
  - acc: 1
    key: sex
    content: 「無上の光栄です。」
    lines:
      - %YOU%はキングヘイローを抱いたまま向きを変え、寮から遠ざかった。
  - acc: 2
    content: 「でも、もう寮に着いていますよ。」
    lines:
      - if: d.check ===2
        lines:
          - %YOU%の拒絶を聞いたキングヘイローは、すぐに%YOU%から飛び降りた。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「ふん、つまらなくなりましたわ。」
          - 言い終えると、キングヘイローはなんと%YOU%を担ぎ上げた。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「キングの頼みを拒むなんて、許しませんわ！」
          - %YOU%は通行人の奇異な視線の中、キングヘイローに連れ去られた。
      - if: d.check < 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「あっ、待ちなさい——」
          - %YOU%はキングヘイローの言葉を聞き流し、寮へ真っ直ぐ歩いた。
          - そして腕の中のキングヘイローを、風の便りを聞いて出てきた寮長へ渡した。
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「ちょっと！」
          - %YOU%は笑いながら、寮長に連れていかれるキングヘイローへ手を振った。

cl_valentine:
  title: バレンタイン
  lines:
    - 今日はバレンタインだ。%YOU%は朝からそれを意識し、トレーナー室の片付けをわざと遅くしていた。
    - ようやく、%YOU%が六十回目に時計を見上げたあと、トレーナー室の扉が叩かれた。
    - %YOU%は一歩で扉へ駆け寄ったが、それでも少し間を置いてから開けた。
    - 外にいたのは、少し不思議そうな顔のキングヘイローだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、なにをしているんですの？ どうしてキングをじっと見るの？」
    - %YOU%は、キングヘイローが今日がバレンタインだと知らないのかもしれないと思い、少し落胆した。
    - そのとき、キングヘイローが何かの袋を取り出し、%YOU%へ投げてきた。
    - %YOU%は慌てて受け取り、包装の綺麗なチョコレートだと知って驚喜した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングが祭日を忘れるはずがありませんわ！ コンビニで適当に買ったものです。%CALLNAME%も、あまり感動しなくて結構ですわ。」
    - キングヘイローは少し顔を赤らめ、顔を逸らし、腕を組んだ。
    - だが%YOU%は、%SEX%の右手の甲に、火傷の水疱があるのを見つけた。
    - acc: 1
      key: select
      content: 「ありがとう、キング。とても嬉しい。」（好感+20）
      lines:
        - %YOU%は、あまり深く追及しないことにした。
        - そのあと%YOU%はキングヘイローの前でチョコレートを一粒取り、口へ運んだ。
        - acc: 1
          content: 「チョコレート、とても美味しい。完璧なバレンタインの贈り物だ。」
        - キングヘイローは嬉しそうだったが、すぐに感情を押し殺した。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もういいですわ、美味しいのは分かりました。次も作って……違いますわ、次も買ってあげますわ！」
        - %YOU%は、キングヘイローの言い間違いを聞かなかったことにした。
    - acc: 2
      content: 「キング、まだ痛い？」（恋慕+3）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なにが痛いんですの？」
        - キングヘイローは%YOU%の言葉の意味が分からなかった。%YOU%が前へ出て、%SEX%の右手をそっと持ち上げるまで。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「た、たいした痛みではありませんわ。それにチョコレートを作ってからもうずいぶん経ちますし、今はほとんど感じませんわ。」
        - キングヘイローは%YOU%に見抜かれ、少し決まり悪そうに俯いた。
        - acc: 1
          content: 「ありがとう、キング。とても嬉しい。」
        - するとキングヘイローは、またツンとした顔に戻った。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では感謝して食べなさい！ ついでに言っておきますが、キングは%CALLNAME%の評価などまったく気にしていませんわ！」
        - キングヘイローは顔を逸らせたが、%YOU%は%SEX%の余光がまだ自分に向いているのに気づいた。
        - だから%YOU%はチョコレートを一粒口に入れ、満足そうな顔を作った。
        - キングヘイローは、ようやく安心して視線を外した。

cl_halloween:
  title: ハロウィン
  lines:
    - 今日はハロウィンだ。%YOU%は道行く奇妙な「妖怪変化」たちを見て、とっくにそれを確認していた。
    - %YOU%は熱狂する妖怪たちからようやく逃れ、自分のトレーナー室へ戻った。
    - 幸い、トレーナー室にはばら売りのキャンディがまだ十分あり、貪欲な%UMA%たちを相手にできる。
    - 加えて%YOU%は、ある子のために特製の詰め合わせを用意し、引き出しの奥へしまっていた。
    - 突然、トレーナー室の扉が叩かれた。%YOU%は驚いて、ペンを落としそうになった。
    - %YOU%は呼吸を整え、期待を込めて前へ進み、勢いよく扉を開けた——
    - acc: 1
      content: 「どうぞ、キング……」
    - だが外にいたのは、キングではなかった。
    - content:
        - fontWeight: bold
          content: %UMA%A
        - 「お菓子をくれなきゃ、いたずらしちゃうよ！」
    - 何かの怪物に扮した、可愛い%UMA%だった。
    - %YOU%は一瞬呆け、引き出しから用意しておいたばら売りのキャンディを取り出した。
    - %YOU%はかなりの量を%UMA%の籠へ入れ、%SEX%が驚喜して一礼し、別のトレーナーの扉を叩きに走るのを見送った。
    - %YOU%は長い息を吐き、自分の席へ戻った。
    - すぐに、またノックが聞こえた。
    - content:
        - fontWeight: bold
          content: %UMA%B
        - 「お菓子をくれなきゃ、いたずらしちゃうよ！」
    - またキングではなかった。%YOU%はキャンディを渡しながら、少しがっかりした。
    - さらにずいぶん経ち、%YOU%の引き出しのばら売りが尽きてから、キングヘイローは優雅にトレーナー室の扉を叩いた。
    - %YOU%の手はすでに引き出しへ伸びていたが、急に引っ込めた。
    - acc: 1
      content: 「キング、ハロウィンの衣装は？」
    - %YOU%は不思議そうに頭を掻き、普段着のキングヘイローを見た。
    - キングヘイローは、ごくわずかに顔を赤らめた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なにを言うんですの！ キングが今日がハロウィンだと忘れるはずがありませんわ！ %CALLNAME%、見てください。今あなたの前に立っているのは、一流の%UMA%に扮したキングヘイローですわ！」
    - キングヘイローは服の端を摘み、%YOU%の目の前で二度回った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうです？ 似ていますでしょう？」
    - %YOU%はキングヘイローの小細工に、吹き出しそうになった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、わたくしのお菓子は？」
    - キングヘイローは、%YOU%がハロウィン衣装を評価しないのを見て、遠慮なくキャンディをねだり始めた。
    - acc: 1
      content: 「ああ、あるよ、あるよ。」
    - %YOU%は机の前へ行き、引き出しを開け、綺麗な包装の袋をキングヘイローへ渡した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ ハロウィン作戦、大成……功？」
    - キングヘイローは笑いながら袋を受け取り、それから笑顔が凍りついた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、中に何も入っていませんわよ？」
    - キングヘイローは膨れ面で%YOU%を詰問した。
    - acc: 1
      content: 「入っていますよ。ただし、一流の%UMA%にしか見えない、一流のキャンディです。」
    - %YOU%はわざと真顔で、のんびり椅子に座り、キングヘイローを見つめた。
    - キングヘイローの顔が赤と白に交錯するのを見て、%YOU%の心はすでに大笑いしていたが、表情は真面目なまま保った。
    - acc: 1
      content: 「一流の%UMA%に扮した一流のキングが、一流のトレーナーの一流のキャンディを貰う。この過程、一流ではありませんか？」
    - %YOU%は笑いをこらえつつ、さらに火に油を注いだ。
    - ついにキングヘイローは我慢できず、前へ出て%YOU%の肩を掴み、揺さぶり始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、もうキングをからかうのはやめなさい！ 認めますわ、今日がハロウィンだって、本当に忘れていましたわ！」
    - そのとき%YOU%はもう我慢できず、声を上げて笑った。
    - キングヘイローの視線が殺意を帯びてから、%YOU%はようやく笑いを止め、引き出しからキングヘイロー用の特製キャンディを取り出した。
    - acc: 1
      content: 「はい、キング。ハッピーハロウィン？」
    - キングヘイローは慎重に受け取り、袋の重さを確かめた。
    - %YOU%はその光景を見て、また吹き出しそうになった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん、%CALLNAME%にも少しは良心がありますわね！ ハッピーハロウィン！」
    - 今年のハロウィンも、奇妙な空気のまま過ぎていった。

cl_christmas_in_edu:
  title: クリスマス
  lines:
    - クリスマス当日、キングヘイローはトレーナー室へ来た。
    - %YOU%がソファで何かを考えているのを見て、%SEX%はまっすぐ歩み寄り、隣に座った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日の予定は全部キャンセルしなさい！ クリスマスにキングの追加トレーニングを組む権利を授けますわ！」
    - キングヘイローは%YOU%に凭れ、%YOU%の体を片側へ傾けさせた。
    - %YOU%は顔を上げ、キングヘイローを見た。
    - acc: 1
      content: 「悪いが、お受けできません。今日はもう約束があります。」
    - キングヘイローはソファから跳ね上がった。まるで逆毛の猫だった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「な、なんですって？ もう一度言いなさい？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしを放っておくつもりですの？ いったい何をする気ですの？」
    - acc: 1
      content: 「ある%UMA%とデートに行くからですよ。」
    - キングヘイローは、怒りを通り越した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はっきり言いなさい！ いつ、誰とデートするんですの！」
    - キングヘイローは%YOU%の肩を掴み、激しく揺さぶった。
    - %YOU%はぷっと吹き出し、キングヘイローが次の攻勢に出る前に%SEX%の手を叩き、離すよう示した。
    - acc: 1
      content: 「一流のキングヘイローですよ！ 忘れたんですか？ キング自身が要求したんですよ。」
    - キングヘイローは呆けて%YOU%を放し、先週たしかにそう言ったのを、ぼんやり思い出した。
    - %YOU%は乱れた襟を整え、笑みを浮かべてキングヘイローの顔が赤から白へ変わるのを見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たしかにそんなことが……実はこれ、キングが%CALLNAME%に課した試練ですわ！ キングは%CALLNAME%がキングの要求を覚えているか、試していたのですから。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今のところ、%CALLNAME%はさすがキングの一流トレーナー、よく覚えていますわね。キング、嬉しいですわ！」
    - %YOU%は、一瞬で言い訳を見つけたキングヘイローに、大いに衝撃を受けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「試練を通った褒美として、キングは今日の予定の決定権を%CALLNAME%に預けますわ！ 呼び名が決めてよろしいですわ。」
    - %YOU%はすぐに大げさな感謝のポーズを取り、またキングヘイローに白い目を向けられた。
    - acc: 1
      key: select
      content: 「では、一流のクリスマスデートを。」（好感+20、恋慕+3）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では着替えて出かけましょう！ ちょうどキングが見たい店がいくつかありますの。」
        - %YOU%はキングヘイローに急かされて外出着に着替え、%SEX%に引きずられてトレーナー室を出た。
    - acc: 2
      content: 「では、一流のクリスマス追加トレーニングを。」（スピードorスタミナorパワーor根性+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「一流のキングは、クリスマスでも怠けませんわ！」
        - そのあと、ほとんど無人のトレーニング場で、熱い追加トレーニングが行われた。
