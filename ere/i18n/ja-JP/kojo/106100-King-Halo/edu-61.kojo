# @file キングヘイロー - 育成
# @author 牛蛙煲
# @author Claude (翻訳)

# 「自暴自棄」状態の説明：
# この状態は育成終了前に出走した短距離・マイルのレースに関わる。勝てば軽度は消失、中度は軽度、重度は中度へ。
# 負ければ逆。重度がさらに悪化すると、追い出されBEへ。
# 育成終了時にいずれかの段階の「自暴自棄」が残っていると、追い出されBEへ。
# 「自暴自棄」中は、育成系の特殊口上イベントは発生しない。
# 軽度／中度／重度の効果は、やる気上限が普通／不調／絶不調に固定されること。

# トレーニング
train:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「一流の%UMA%なら、一流のトレーニングをするものですわ！」
  - %CHARA% は気勢よくトレーニングへ飛び込んだ。

# トレーニング成功
ts_content:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふぅ……まだいけますわ！」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「また一流へ、一歩近づきましたわ！」

ts_add:
  title: 追加トレーニング
  lines:
    - acc: 1
      content: 「今日のトレーニングはここまでだ。お疲れ、キング。」
    - %YOU%は手元のストップウォッチを軽く振り、息を切らせて走ってきたキングヘイローへ声をかけた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ようやく終わりましたわ……タオルをいただけます？」
    - キングヘイローは汗を拭きながら、ふと止まり、トレーニング場の一点を見つめた。
    - %YOU%が%SEX%の視線を辿ると、そこではまだ数名の%UMA%が追加トレーニングをしていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、キングに追加トレーニングを組む権利を授けますわ！」
    - %YOU%が振り返ると、キングヘイローの揺るがない視線とぶつかった。
    - 一流を追うキングヘイローを前に、%YOU%は——
    - acc: 1
      key: train
      content: 「では、一流の追加トレーニングを一緒に！」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おーっほっほっほ！ では参りましょう！」
        - %YOU%はキングヘイローと、最後の一刻まで一緒にトレーニングした。
    - acc: 2
      content: 「一流の%UMA%こそ、労逸のバランスが大事だ。」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「労逸のバランス……」
        - 「たしかに、無理をして怪我しては、一流とは呼べませんわ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「常に最良の状態を保つ。それが一流の%UMA%の務めですわ。%CALLNAME%の言うとおりです。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「一流であり続けるために、今日はしっかり休みますわ！」

train_fail:
  title: トレーニング失敗
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「きゃっ！」
    - 遠くでキングヘイローが突然転んだのを見て、%YOU%は慌てて駆け寄り、%SEX%を起こした。
    - acc: 1
      content: 「キング、大丈夫か？ 無理をしすぎたんじゃないか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いいえ、わたくしは平気ですわ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流の%UMA%が、この程度の傷で倒れたりしませんわ……」
    - キングヘイローは涼しい顔を装っているが、時折漏れる息を飲む音が、嘘を暴いてしまう。
    - acc: 1
      content: 「すまない、キング。メニューを盛りすぎた。医務室へ行こう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大丈夫ですわ、本当に……っ……」
    - acc: 1
      content: 「もし本当に何かあったら、一生後悔する。」
    - それを聞いて、キングヘイローはもう逆らわなかった。うつむいたまま、素直に%YOU%に支えられ、医務室へ向かった。

race_start:
  title: レース前
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これも、キングの一流への道の、取るに足らない勝利のひとつにすぎませんわ！」

race_end_win:
  title: レース勝利
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おーっほっほっほ、当然の勝利ですわ！」

race_end_5:
  title: レース入着
  lines:
    - %YOU%は、キングヘイローの様子がおかしいことに気づいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうして……こんなはずでは……」
    - 「キング、この着順だって十分すごいぞ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いいえ、%CALLNAME%。一着、完全な勝利だけが、キングに相応しい水準ですわ！」
    - キングヘイローは拳を握りしめた。
    - 「では、今回のレースの反省点をまとめよう。」

race_end_lose:
  title: レース敗北
  lines:
    - 結果が出た。キングヘイローは、入着すらできなかった。
    - %YOU%の気分も沈んでいる。だがそれ以上に、キングヘイローの気持ちが心配だった。
    - 「大丈夫だ、キング。次は……」
    - ところがキングヘイローは、軽やかな口調で%YOU%の言葉を遮った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、キングをそんなに脆いと思わないでくださいまし。一流のキングの器量も、一流ですわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次は必ず、輝かしい勝利で、わたくしがまだ一流であることを証明してみせますわ！」

# 募集後・最初の週
ws_cloudy:
  title: 陰り
  lines:
    - %YOU%がキングヘイローのトレーナーになって、すでに一週間が経っていた。
    - 性格はやや派手だが、%YOU%が組んだ課題には百二十パーセントの覚悟で取り組む。そこは認めざるを得ない。
    - だからこそ、キングヘイローへの第一印象はかなり良かった。
    - そう思いながらトレーニング場へ急ぐと、キングヘイローはすでに待っていた。
    - ただし%SEX%は%YOU%に気づいておらず、誰かと電話をしていた。
    - %YOU%は声をかけず、そっと近づいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お母様？ 相応しいトレーナーが見つかりましたわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングに最もふさわしい、一流のトレーナーですわ！」
    - はしゃいだ顔で自分を褒める声を聞き、%YOU%は内心ほくそ笑んだ。
    - だがしばらくすると、キングヘイローの顔色が曇り始める。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『人に迷惑をかける』、ですって？ お母様の目には、わたくしがその程度に映りますの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしと%CALLNAME%は、互いに選び、共に伸びる関係ですわ。なぜ、わたくしが一方的に迷惑をかけているような言い方を？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もしもし？ もしもし！」
    - どうやらキングヘイローのお母様が切ったらしい。キングヘイローだけが、その場に呆然と立ち尽くしていた。
    - %YOU%は急いで、今着いたばかりのふりをした。
    - acc: 1
      content: 「キング、もう来てたのか。さあ、トレーニングを始めよう！」
    - キングヘイローは携帯をしまい、何事もなかったように手を振った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では始めますわ！ キングの一流への道を、また一歩！」

# 募集後・二週目
ws_golden_gen:
  title: 黄金世代、登場
  lines:
    - 近頃、外の新聞が「黄金世代」という言葉を盛んに宣伝しているらしい。
    - その黄金世代の一人が、ほかでもない%YOU%の担当、キングヘイローだった。
    - そこで記者は学園の許可を得て、「黄金世代」の%UMA%たちへの取材を申し入れてきた。
    - その日、%YOU%がトレーニング場へ行くと、キングヘイローはまだ来ていなかった。あたりを見渡す。
    - すると、同じく「黄金世代」の数人が目に入った。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「うわあああ！ 取、取材、ですか！？ わ、わたし、何も知りませんよ！？」
    - content:
        - fontWeight: bold
          content: 記者
        - 「落ち着いてください。最近のトレーニングの感触を伺いたいだけです。」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「トレーニングは順調、です？ ただ、終わるとお腹が空いて、毎日……あっ、どうしてご飯の話に！？」
    - 傍で見物していたグラスワンダー、エルコンドルパサー、セイウンスカイが、遠慮なくくすっと笑った。
    - %YOU%も、スペシャルウィークに釣られそうになった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！」
    - 振り返らずとも分かる。担当のキングヘイロー、参上である。
    - あの気性なら、次はきっと——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「取材は、すべてわたくしに向けなさい！」
    - 案の定、さっきまでスペシャルウィークに殺到していた記者たちは、すぐキングヘイローへ向き直った。
    - キングヘイローはカメラに向けて、「取材専用の一流ポーズ」を決めた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「ありがとう、キングさん……本当に助かりました……」
    - 続いてセイウンスカイが歩み寄り、スペシャルウィークの手を引いた。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「ほらほら行こう。キングさんが火力を引き受けてくれてるんだ、こっそりトレーニングしちゃお！」
    - セイウンスカイはわざと大きな声で言った。当然、キングヘイローにも聞こえる。
    - %YOU%は内心、まずいと思った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたたち！ 待ちなさい！ キングを置いて、好き勝手にトレーニングするつもりですの！？」
    - 案の定、キングヘイローは取材のことなど忘れ、仲間たちのトレーニングを追いかけていった。
    - content:
        - fontWeight: bold
          content: 記者
        - 「%CHARA_FULL%！ 待ってください！ 取材は……まだ始まってもいませんよ！？」
    - 記者は力なく、キングヘイローの背中へ叫んだ。
    - そして怨念たっぷりの顔で、%YOU%を振り返る。
    - %YOU%は、まずいと思った。
    - acc: 1
      content: 「では、私を取材してください。キングのトレーナーでもありますし。」
    - 試しにそう言うと、記者は一気に目を輝かせた。
    - content:
        - fontWeight: bold
          content: 記者
        - 「ではお聞きします。キングヘイローのトレーニングは順調ですか？」
    - content:
        - fontWeight: bold
          content: 記者
        - 「%SEX%には、お母様のような卓越した才能がありますか？」
    - content:
        - fontWeight: bold
          content: 記者
        - 「お母様が描いた進路を離れ、単身でトレセンへ来たのは、家出と同義ではないですか？」
    - ……
    - さすがはプロの記者だ。立て続けの質問に、%YOU%は目が回りそうになった。
    - どうにかそれらをごまかし、ようやく記者を送り出した。
    - 額の汗を拭い、遠くで夢中に競走しているキングヘイローを見て、%YOU%は腰を下ろして走り終わるのを待った。
    - しばらくして、キングヘイローは走り足りたのか、こちらへ歩いてきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お疲れさまですわ、%CALLNAME%。記者は何を聞いてきましたの？」
    - %YOU%は、ほとんど詰問に近い質問を、適当に拾って話した。
    - するとキングヘイローの顔色が、みるみる曇った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱりですわ！ 記者ときたら、いつもわたくしとお母様を並べたがりますの！ まるでわたくしが、お母様の付属品みたいに！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いつか、人々がわたくしを口にするときは『一流のキング』と言うはずですわ。『あの方のお子さま』などでは、ありませんわ！」
    - そのせいで、キングヘイローは一日中機嫌が悪かった。

before_begin_race:
  title: メイクデビュー前
  lines:
    - acc: 1
      content: 「いよいよ本格デビューだ。調子はどうだ？」
    - キングヘイローのメイクデビュー前、%YOU%は控え室で%SEX%を励ましに行った。
    - キングヘイローは聞いていない。どこか一点を、焦点の合わない目で見つめている。
    - しばらくして、%SEX%は夢から覚めたように振り返った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最高ですわ！ キングの一流への道の第一歩、どうあっても踏み外しませんわ！」
    - acc: 1
      content: 「レースを前に、緊張はするか？」
    - キングヘイローは、こわばった笑顔を作った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流のキングが、緊張などしませんわよ？」
    - だが%YOU%は、キングヘイローの腕がわずかに震えているのに気づいた。
    - %YOU%は溜息をつき、見ていないことにした。
    - acc: 1
      content: 「では行け、キング！ 一着を手に入れろ！」

begin_race_win:
  title: メイクデビュー後・一流の始まり
  lines:
    - %YOU%は観客席で、キングヘイローのレースを最初から最後まで見届けた。
    - スタートからスパートまで、一歩一歩がほとんど完璧だった。
    - 掘り出し物を見つけたような高揚を胸に、%YOU%はスポーツドリンクを用意し、控え室へ向かった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あああ！ 疲れましたわ！ %CALLNAME%、早く飲み物を渡しなさい！」
    - コースでは威風堂々だったキングヘイローが、人のいない控え室へ来たとたん、別人のようになる。
    - %SEX%は椅子にへたり込み、ひっきりなしに扇いでいる。額の汗を拭く暇もないらしい。
    - %YOU%は飲み物とタオルを渡した。
    - キングヘイローは瓶を掲げてごくごく飲み、汗を力任せに拭い、ようやく生き返ったように息を吐いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングは見事に勝ちましたわ。ですが、それでも疲れますわね……」
    - 何か言いかけたところで、唐突な着信音がそれを遮った。
    - キングヘイローは眉を寄せ、携帯を取り上げる。画面には「絶対に超えてみせる人」と出ていた。
    - %YOU%は席を外そうとしたが、キングヘイローは目配せで残れと示し、遠慮なくスピーカーにした。
    - 仕方なく、%YOU%はその場に残った。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「キング？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ、わたくしですわ。何かご用ですの？」
    - キングヘイローの声には、ほとんど感情が乗っていない。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「メイクデビューで勝ったそうね？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい、勝ちましたわ。ご覧になりました？ 最後のス……」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「なぜ、この時期にデビューしたの？」
    - お母様の突然の詰問が、キングヘイローの後半の興奮を押し戻した。
    - %YOU%は、キングヘイローがぱたりと固まるのを見た。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「近頃は強者が多いわ。同世代のメイクデビューをいくつも見たわ。優秀ね。」
    - キングヘイローの唇が動く。何か言いたそうだった。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「無謀よ。この時期に出れば、潰されるわ。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「自分の将来を考えなさい。馬鹿なことはやめなさい。」
    - キングヘイローのお母様は、電話を切った。
    - %YOU%とキングヘイローは、同時にその場で呆然とした。
    - 正直、あの通話を盗み聞きして以来、二人の関係が張り詰めているのは察していた。
    - だが、これは「張り詰めている」の範疇を、とうに超えている。
    - やがてキングヘイローも我に返った。
    - %SEX%は右手を握りしめ、しばらくしてようやく開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いつか、必ず超えてみせますわ。そのときは……思い知らせてあげますわ！」
    - acc: 1
      content: 「一流のキングなら、きっとやれる。次の計画を相談しようか？」
    - 気を逸らすため、%YOU%は急いで新しい話題を出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次、ですって？ おー——っほっほっほ！ 一流のキングには、とうに腹案がありますわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すなわち——クラシック三冠ですわ！」
    - それを聞いて、%YOU%は目の前が真っ暗になった。
    - acc: 1
      content: 「あれはクラシック級のレースだ。別の目標を探した方が……」
    - クラシック三冠自体は突飛な目標ではない。だがキングヘイローは、生涯二戦目から三冠に挑むつもりらしい……
    - だからこそジュニア級でいくつか勝って自信を積み、クラシック級への踏み台にする必要がある。
    - デビューしたてのジュニア%UMA%なら、OPから始めてG3、さらにはG2へ進むのも自然だ……
    - キングヘイローは将来有望な新星だ。%YOU%は、G2が良い起点だと思っていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうですわ！ ジュニア級は、ファンにキングを知ってもらう絶好の機会。逃せませんわ！」
    - acc: 1
      content: 「だろ？ じゃあ序幕は、どのG2がふさわしいかな？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「G2？」
    - キングヘイローは、いぶかしげに聞き返した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「G2というのは、二流のレースという意味では？」
    - %YOU%は再び目が回りそうになった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「決まりですわ！ キングの一流への道は、G1の勝利で幕を開けねばなりませんわ！」
    - キングヘイローは、G1を「一流のレース」だと決めつけているらしい。となると、目標を変える余地はない。
    - 落ち込みつつも、%YOU%は本気でその実現可能性を考え始めていた。
    - メイクデビュー後の初勝利がG1なら、キングヘイローは同世代の先行者として、誰にも反論できなくなる。
    - ただ、負けたら……
    - %YOU%は、キングヘイローのお母様を思い出した。
    - だがキングヘイローの優秀さは、この目で見ている。なら、%SEX%と一賭してみてもいいのではないか？
    - そう思ううちに、決意は固まっていった。
    - acc: 1
      content: 「では、『ホープフルステークス』はどうだ？」

# 11月第2週
ws_first_class_day:
  title: 超一流の日
  lines:
    - %YOU%がトレーナー室の机の向こうでトレーニング計画に没頭していると、すごい開門の音に跳ね上がった。
    - 顔を上げると、ひどく興奮したキングヘイローがいた。
    - キングヘイローは机の前に寄り、カレンダーを手に取り、今日の日付を探す。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ 超一流ですわ！」
    - %YOU%がまだ首を傾げていると、キングヘイローはカレンダーを渡し、「11.11」を指した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見えました？ 1がひとつで一流。今日は11.11、疑いようのない超一流の日ですわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングに最もふさわしい記念日、と言えましょう！」
    - if: era.get('love:61') < 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%！ 今日は疑いようもなく、キングが主役の一日ですわ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「超一流のキングを、心ゆくまで讃える権利を授けますわ！」
        - acc: 1
          content: 「うむ……今日のキングもまぶしいな。昨日もそうだったが、今日はもう一段上だ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふん、悪くありませんわ！ キング、満足ですわ！」
        - acc: 1
          content: 「では超一流のキング、超一流のトレーニングへ行こう。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では参りましょう。昨日より、一昨日より、どの日よりも素晴らしいキングをお見せしますわ！」
    - if: era.get('love:61') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちょうど1が四つ。キングが大慈悲で、%CALLNAME%に二つ分けて差し上げますわ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これで%CALLNAME%もキングも1が二つずつ。どちらも『ちょっと超一流』ですわよ。」
        - acc: 1
          content: 「え？ あ、ありがとう。あまり必要ではなかったが……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%がキングの後ろをついて来るだけ、など認めませんわ。%CALLNAME%には、常にキングと並んで歩く義務がありますのよ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「分かりましたわね？ わたくしの、ちょっと超一流のトレーナー？」
        - acc: 1
          content: 「光栄の極みだ！ ついでに、抱えてトレーニング場まで運ぶことを許してくれ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「恩准しますわ！ 皆に、キングのちょっと超一流の力を見せつけてやりましょう！」

ws_race_clothe:
  title: 勝負服
  lines:
    - レース前夜、キングヘイロー特注の勝負服がようやく届いた。
    - トレーナー室で三時間も「決勝ポーズ」を決め続けているキングヘイローを見て、%YOU%は言葉を失った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！ このポーズ、先の二つよりキングの気品が際立ちますわよね！？」
    - %YOU%は適当に相槌を打った。
    - 次の瞬間、キングヘイローはまた新しい迷いへ沈んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やはり、一時間前の動きの方が似合いますわ。」
    - acc: 1
      content: 「おいキング、これ以上着ていたら勝負服が皺になる。皺の勝負服で、何が一流だ？」
    - 案の定、キングヘイローは素直に止まった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それもそうですわね……では、勝負服を脱ぎますわ！」
    - %YOU%は安堵の息を吐いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、ここを離れないでくださいまし？ キングはこれから、トレーニングウェアで決勝ポーズの練習を続けますわ！」
    - %YOU%は、また息を呑んだ。

before_hope_sta:
  title: ホープフルステークス前
  lines:
    - %YOU%はキングヘイローの控え室へ、%SEX%を励ましに行った。
    - ところがキングヘイローは、あまり緊張していない様子だった。
    - ノックして入ると、%SEX%は鏡の前で、勝負服姿の自分を眺めていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……キングがこのレースを鮮やかに取ったら、本当の一流になれますわよね？」
    - %YOU%は考え、肯定しようとしたところで、キングヘイローに遮られた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、分かっていますわ。一レースだけでキングが永遠に一流でいられるはずがない。ましてジュニア級の一戦ですもの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしが考えているのは、このレースを、キングの一流への道における本当のメイクデビューにすることですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうすれば、キングの未来は、疑いようもなく一流へ向かい始めますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見に来てくださって感謝しますわ、%CALLNAME%。見ていてくださいまし。この勝利も、手に入れてみせますわ……」
    - 言い終えると、キングヘイローは服を整え、胸を張ってコースへ向かった。

# 勝利
hope_sta_win:
  title: ホープフルステークス後・征途へ
  lines:
    - キングヘイローは予定どおり、先頭でゴールを駆け抜けた。%YOU%と%SEX%の見込みどおりだった。
    - 惜しいことに、その瞬間を見届けたのは、熱とは言い難い拍手と、数人の実習記者だけだった。
    - ジュニア級のレースは、注目度の高いG1であっても、人気はそこまで高くない。
    - 予想はしていた。それでも、キングヘイローの目が期待から失望へ落ちるのを見て、胸が痛んだ。
    - だから%YOU%は控え室へ行き、%SEX%の気を逸らそうとした。
    - 息を切らしたキングが、ちょうど控え室の前まで来たところだった。
    - 扉を開ける手まで震えているのを見て、%YOU%は急いで代わりに開けた。
    - キングヘイローは椅子を探って座り、ようやく少し楽になった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、%CALLNAME%はわたくしのレースをご覧になりましたわね？」
    - %YOU%は頷いた。
    - acc: 1
      content: 「完璧だったぞ、キング。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ キングが出て、負けるはずがありませんわ！」
    - 疲れ切っていても、キングヘイローは看板の大笑を忘れない。
    - 十分に笑わせてから話題を変えようと思っていた。ところがキングヘイローは、想像よりずっと坦々としていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日の空気は、あまり熱くありませんでしたわね。出場した方々が、経験の浅い後輩ばかりだからでしょう？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングがクラシック級、シニア級のレースを征服したら、この光景も一変しますわよね？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「クラシック級とシニア級でも、こうして勝ち続けられたとき——そのときのキングこそ、本当に一流と呼べるのでしょうね。」
    - あまり気にしていない様子なので、%YOU%も安心した。
    - acc: 1
      content: 「ではキング、次の目標は？」
    - %YOU%の胸には、すでに答えがあった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「疑いようもなく、『皐月賞』ですわ！ 一流のキングが、正式に三冠路線へ進みますわ！」
    - %YOU%の考えと完全に一致していた。このG1を取ったなら、クラシック三冠へ挑む実力はあるはずだ。
    - acc: 1
      content: 「では、皐月賞を目指して一緒に頑張ろう！」

# 入着
hope_sta_5:
  title: ホープフルステークス後・捲土重来
  lines:
    - キングヘイローは全力を尽くした。だが最後のスパートでスタミナが尽き、一着を逃した。
    - 勝ちは逃したが、経験も体もまだ伸び盛りであるジュニア級の%UMA%としては、悪い結果ではない。
    - そう伝えようとしたところ、%SEX%は足を踏み鳴らして遮った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いけませんわ！ 完全な勝利だけが、キングの身分に見合う結果ですわ！」
    - どうやら、この敗戦を相当気にしている。
    - ジュニア級で名を上げる構想は、叶わなかったらしい。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが！ わたくしは、まだ一流のわたくしですわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今回の作戦にミスがありましたわ……一流のキングは教訓を汲み、次のレースでは絶対に同じ過ちを繰り返しませんわ！」
    - キングヘイローは、%YOU%の裾をきゅっと掴んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！ 今すぐキングに追加トレーニングを組む権利を授けますわ。皐月賞で、改めて実力を証明してみせますわ！」
    - すでに自分で気合を入れ直しているキングヘイローを見て、%YOU%は少し安心した。

# 未入着
hope_sta_lose:
  title: ホープフルステークス後・立て直し
  lines:
    - 一流のキングヘイローであっても、G1級の大舞台では緊張を免れないらしい。
    - その緊張が、致命的な判断ミスを連ねた。
    - 結局、キングヘイローは着順板にすら入れなかった。
    - %YOU%は、判断ミスからレース終了までを、すべて見届けていた。
    - 次はスパートのトレーニングを厚くすれば、きっと良くなるはずだ——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？ レースはもう終わりですわよ。そこで何をぼうっとしていますの？」
    - 我に返ると、キングヘイローが目の前に来ていて、心配そうにこちらを見ていた。
    - %YOU%は首を振り、大丈夫だと示した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、では帰りましょう。」
    - キングヘイローは、結果など全く気にしていないかのように、%YOU%の手を引いて外へ向かう。
    - acc: 1
      content: 「だが……本当に大丈夫なのか？」
    - キングヘイローは足を止め、振り返り、真剣な目で%YOU%を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一度の敗北にすぎませんわ。これにこだわっていたら、次も負けますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それより、悔しさを力に変えて、次のレースで証明する方がふさわしいでしょう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、このレースは観客も記者も多くありませんでしたわ。皆、あまり注目していない、ということですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なら、キングが負けたことも知れませんわ。こうして静かに努力を続け、次のレースで皆を驚かせればいいのですわ。」
    - キングヘイローは背を向けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「帰りましょう、%CALLNAME%。トレーニングの続きですわ！」

ws_new_year_c:
  title: クラシック級・正月
  lines:
    - 正月が近づき、学園は濃い年越しの空気に包まれていた。
    - %YOU%は山のような書類から顔を上げて、ようやく正月が近いことに気づいた。
    - だが、それが自分と何の関係があるというのか。
    - 手元の仕事を止める理由など、見つからない。
    - 年は過ごさなくてもいい。だが理事長の仕事は……
    - 学生時代、生活費を使い果たしてカップ麺を齧った日々がよぎる。
    - 社畜になりかけている——いや、もう典型的な社畜になったのかもしれない。
    - 自嘲して、仕事に戻ろうとした。
    - そのとき、トレーナー室の扉が殴られたような音を立てた。ノックには聞こえなかった。
    - %YOU%は溜息をつき、立ち上がって扉を開けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングを門外で待たせるつもりですの？ せっかくお見舞いに来てあげたというのに！」
    - 担当のキングヘイローが、片手に袋を提げて、扉から割り込んできた。
    - %YOU%は目を丸くし、%SEX%の意図がしばらく分からなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングをじっと見て何ですの？ 早く閉めなさい！ 凍えますわ！」
    - %YOU%は急いで扉を閉めた。
    - キングヘイローは遠慮なく書類を床へどかし、袋を机に置いた。
    - 次の瞬間、おせちの香りが、決して広くはないトレーナー室に広がった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちっ。勤勉と褒めるべきか、正月の風情がないと責めるべきか……」
    - キングヘイローは腕を組み、やや嫌そうにトレーナー室を見回した。
    - acc: 1
      content: 「だが……キングは、どうしてここに？」
    - ようやく、ずっと抱いていた疑問を口にできた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自分のトレーナーを気にかけるのも、一流の振る舞いですわ！」
    - そう言い捨てると、キングヘイローはもう相手にせず、勝手におせちを並べ始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さあ、食べなさい！ キングが作ったわけではありませんが、キングが自ら選んだ品ですわ！」
    - こうして%YOU%は机のそばへ引っ張られ、わけの分からないおせちをいただくことになった。
    - 状況はまだ飲み込めていない。だが美味しいおせちは、ちゃんと心を慰めてくれた。
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「正月の抱負、ですの？ む、考えますわ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やはり、一流を追い続けることですわね。それからクラシック三冠を手に入れ、あの方にキングの実力を見せつけてあげますわ！」
    - キングヘイローは気にも留めず、%YOU%の皿から肉を一切れ奪い、口答えした。
    - すぐ、%SEX%は眉を寄せた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、%CALLNAME%の正月の抱負は何ですの？」
    - 投げ返された問いに、奪われた肉のことはいったん忘れ、%YOU%は考えた。
    - acc: 1
      key: select
      content: 「お前を、誰もが敬う%UMA%に育てることだな。」（好感+10、スキルPt+30）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「誰もが敬う、ですの？ 一流の%UMA%が果たすべきこと、という響きですわね。」
        - キングヘイローは、興味深そうだった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では、%CALLNAME%には計画がありますの？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「このあと、練習を始めませんこと？」
        - divider: true
          content: ⏰
          position: left
        - キングヘイローは長いこと、%YOU%に質問を浴びせ続けた。
        - だがキングヘイローのおかげで、この正月はなかなか楽しく過ごせた。
    - acc: 2
      content: 「正月に太らない%UMA%に育てることだな。」（恋慕+2、スピード+20）
      lines:
        - その答えを聞いて、キングヘイローはいきなりむせたように咳き込んだ。
        - ようやく収まると、%SEX%は一段と嫌そうな目で%YOU%を見た。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%がわたくしを？ ご自身の食事量、成長期の%UMA%に追いつきそうですわよ！」
        - %YOU%は自分の前の骨の山を見下ろし、キングヘイローの前を見た。たしかに、だいたい同じ大きさだ。
        - キングヘイローは余裕の顔で、返事を待っている。
        - %YOU%は行動で答えた——口笛を吹きながら、骨の山をキングヘイローの前へ押し出した。
        - acc: 1
          content: 「実はキングの方が一番食べてるだろ？ 食事量なら成長期の%UMA%二人分だ！」
        - キングヘイローは瞬きし、%YOU%を見、自分の前を見た。
        - それから立ち上がり、%YOU%の後ろへ回り込み、耳を掴んだ。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%——いい加減にしなさい！」
        - divider: true
          content: ⏰
          position: left
        - キングヘイローは長いこと、%YOU%にまとわりついて騒いだ。
        - だがキングヘイローのおかげで、この正月はなかなか楽しく過ごせた。

before_sats_sho:
  title: 皐月賞前
  lines:
    - いよいよ始まる。「クラシック三冠」の第一戦、皐月賞。
    - キングヘイローは控え室に座り、わずかに震えていた。
    - このレースの重みは尋常ではない。観客の熱と記者の密度が作る津波は、自信の足りない出走者なら誰でもひっくり返せる。
    - だが、このレースがもたらすファンの数も、恐ろしいほどだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「クラシック級、最初の大勝負ですわ。キングの気勢を、必ず見せてみせますわ！」
    - キングヘイローは、自分で気合を入れ始めた。
    - すぐに気持ちを整え、胸を張ってコースへ上がり、観客席の前に立った。
    - 観客たちはキングヘイローのこれまでの戦績をひそひそ話し、場は賑わった。
    - 完璧な登場——その前提は、しかし……
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「ん〜〜あ！ おや？ キングさんもいたの。奇遇だね。」
    - 同期であり「黄金世代」の一員、セイウンスカイが、怠惰な足取りでキングヘイローの後ろを通り過ぎた。
    - %SEX%は伸びをし、まるでレースに来た者には見えなかった。
    - 観客の視線は、すぐにセイウンスカイへ吸い寄せられた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スカイ！ あなた——」
    - ようやく保っていた雰囲気が、一瞬で崩れた。
    - キングヘイローはもう気品など捨て、セイウンスカイを追いかけて走っていった。

# 皐月賞・一着
sats_sho_win:
  title: 皐月賞後・凱旋
  lines:
    - content:
        - fontWeight: bold
          content: 実況
        - 「%UMA%たち、スタートしました！ 各選手のスタート、どれも見事です！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「先頭はセイウンスカイ選手。逃げの%UMA%として、選択はごく標準的ですね。」
    - content:
        - fontWeight: bold
          content: 実況
        - 「その後ろはキングヘイロー選手。セイウンスカイと並ぶ優勝候補です。」
    - content:
        - fontWeight: bold
          content: 実況
        - 「セイウンスカイ選手、何か策があるようです。速くは行かず、二番手に半馬身差をつけたまま……」
    - content:
        - fontWeight: bold
          content: 実況
        - 「二番手が交わそうとするたび、セイウンスカイは加速して先頭を守る……これでは二番手の消耗が、かなり大きくなります……」
    - あいにく、その二番手はキングヘイローだった。
    - その光景を見て、%YOU%はキングヘイローのために手に汗を握った。
    - 策士として名高いセイウンスカイらしい。スタート直後から、もう謀を巡らせている。
    - だがキングヘイローも、ただ鼻面を掴まれて終わる相手ではない……
    - content:
        - fontWeight: bold
          content: 実況
        - 「キングヘイロー選手、二番手の位置に納得できないようです。%SEX%、加速を始めました！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「セイウンスカイも加速！ 先頭は譲りたくないようです！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「しかしキングヘイローの加速の方が明らかに強い！ 交わしました！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「ですがキングヘイローは減速しません！ まだ終盤でもないというのに？」
    - %YOU%は身を震わせ、キングヘイローの選抜レースを思い出した。
    - セイウンスカイの策をかわすため、キングヘイローは偏った作戦を取らざるを得なかったらしい。
    - 結果は悪くなさそうだ。先頭を取り戻すためセイウンスカイは無理に加速し、後方の大集団も速度を上げざるを得ない。
    - content:
        - fontWeight: bold
          content: 実況
        - 「終盤に入りました！ キングヘイローはなおもスパート、セイウンスカイは追いつけるか？」
    - content:
        - fontWeight: bold
          content: 実況
        - 「キングヘイロー、明らかな減速！ スタミナが尽きたようです！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「セイウンスカイ、追いつくか？ あっ、キングヘイローが再び加速！ 先ほどの疲れは、見せかけでした！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「まもなくゴール、選手たちは相当に疲れています！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「やはりキングヘイローの実力が一枚上！ 皐月賞の勝利は、キングヘイローのものです！」
    - セイウンスカイの策はキングヘイローのスタミナをかなり削った。だが日頃の厳しいトレーニングが、使い切れる余力を残していた。
    - 疲れていても嬉しそうにゴールを駆け抜けるキングヘイローを見て、%YOU%の胸も熱くなった。
    - すぐに、レース後の記者取材の時間になった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ キングを心ゆくまで取材する権利を授けますわ！」
    - 息はまだ乱れている。それでも%SEX%は、かなり派手に取材を受けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、これは第一歩にすぎませんわよ？ 一流のキングは、クラシック三冠をすべて手に入れるつもりですわ！」
    - 記者たちはざわついた。
    - content:
        - fontWeight: bold
          content: 記者A
        - 「まずは優勝、おめでとうございます。それから、『名門の娘』として、お母様当時の路線に寄るおつもりですか？」
    - content:
        - fontWeight: bold
          content: 記者B
        - 「今日の勝利は、お母様のご指導の賜物、ということでしょうか？」
    - キングヘイローの顔色が明らかに落ちたのを見て、%YOU%は記者たちのために祈り始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしてもわたくしを『名門の娘』と呼ぶつもりなら、今日の取材はここまでですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、このレースを取れたのは、百パーセントわたくし自身の努力と、%CALLNAME%の指導のおかげですわ。」
    - 言い終えると、キングヘイローは真っ直ぐ立ち去った。
    - %YOU%は水を打ったように黙る記者たちへ軽く会釈し、キングヘイローの後を追った。

# 皐月賞・非一着
sats_sho_lose:
  title: 皐月賞後・奮進
  lines:
    - content:
        - fontWeight: bold
          content: 実況
        - 「%UMA%たち、スタートしました！ 各選手のスタート、どれも見事です！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「先頭はセイウンスカイ選手。逃げの%UMA%として、選択はごく標準的ですね。」
    - content:
        - fontWeight: bold
          content: 実況
        - 「その後ろはキングヘイロー選手。セイウンスカイと並ぶ優勝候補です。」
    - content:
        - fontWeight: bold
          content: 実況
        - 「セイウンスカイ選手、何か策があるようです。速くは行かず、二番手に半馬身差をつけたまま……」
    - content:
        - fontWeight: bold
          content: 実況
        - 「二番手が交わそうとするたび、セイウンスカイは加速して先頭を守る……これでは二番手の消耗が、かなり大きくなります……」
    - あいにく、その二番手はキングヘイローだった。
    - その光景を見て、%YOU%はキングヘイローのために手に汗を握った。
    - 策士として名高いセイウンスカイらしい。スタート直後から、もう謀を巡らせている。
    - 冷静でいろと大声で伝えたい。だが、できるはずもない。
    - すぐにキングヘイローは、セイウンスカイの策の下で疲れを見せ始めた。
    - そのときになって、%SEX%は嵌められたと気づいたらしい。
    - だが遅すぎた。残ったスタミナでは、高速のスパートをもはや支えられない。
    - 結果は明白だった。キングヘイローは一着を逃した。
    - 勝てなかったキングヘイローは記者会見にも出ず、%YOU%の手を引いて、そっと会場を離れた。
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ですから、どうかスタミナのトレーニングを増やしてくださいまし。」
    - その夜、トレーナー室。
    - キングヘイローは、大きな決心をしたように、%YOU%へ頼んだ。
    - %YOU%はしばらく迷った。キングヘイローはもともとスタミナが突出したタイプではない。スタミナに投資しても、質変は起きにくい……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お願いですわ。皐月賞のコースは二千メートルですのに、あれほど苦しかった。この先二千四百メートルの日本ダービーは、もっと厳しくなりますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングには、ダービーの勝利が必要ですわ。今日の屈辱を洗い流すために。ですから%CALLNAME%、スタミナのトレーニングを増やしてくださいまし。」
    - 涙の光る目を見て、%YOU%は%SEX%に向かって頷いた。

before_toky_yus:
  title: 日本ダービー前
  lines:
    - キングヘイローが何より心待ちにしていた日本ダービーが、もうすぐ始まる。%YOU%は控え室で、%SEX%の最後の準備に付き合っていた。
    - 鏡の中の自分を、焦点の合わない目で見つめている。何か言って空気を和らげようと思った。
    - acc: 1
      content: 「キングは緊張しているんだな。そんなに……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「緊張、ですって？ キングが緊張するはずがありませんわ。わたくしはただ……ぼうっとしていただけですわ！」
    - キングヘイローはすぐに「一流のキング」モードへ入り、緊張の一事をきっぱり否定した。
    - 生き返ったようなキングヘイローを見て、%YOU%は内心、安堵の息を吐いた。
    - acc: 1
      content: 「安心して行け。準備は十分だ、そうだろう？」
    - 皐月賞のあと、%YOU%はダービーを見据えて、スタミナの追加メニューをかなり積んできた。
    - 今となっては、勝敗を断言はできない。だがキングヘイローの実力は、ダービー一着を狙えるところまで来ている。
    - 「一流の%UMA%」として、キングヘイロー自身もそれをよく分かっている。
    - %SEX%が緊張しているのは、自分の実力というより、対戦相手のせいが大きい。
    - 隣の控え室にいるのは、同期であり「黄金世代」の一員、中長距離に天賦を持つスペシャルウィークだ。
    - キングヘイローの中距離適性も悪くない。だが日本ダービーのコースは二千四百メートル、中長距離の境界にほとんど乗っている。
    - その距離で中長距離得意のスペシャルウィークを負かすには、並外れたスタミナと意志が要る。
    - 皐月賞やホープフルステークスのときより、ずっと緊張している理由もそこだ。
    - acc: 1
      content: 「未来のダービー%UMA%、今の一流キング。皆に、完璧なレースを見せてくれ。」
    - キングヘイローは決心し、控え室を出た。
    - すると、隣のスペシャルウィークと鉢合わせた。
    - %SEX%の方が、キングヘイローより緊張しているように見えた。思い詰めた顔だ。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「日本一……日本一……日本……あっ！」
    - スペシャルウィークは何かを呟いたまま、キングヘイローにぶつかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちょっと、集中しなさい！」
    - キングヘイローは呆れつつ、スペシャルウィークの肩を掴み、軽く揺すった。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「うっ、ごめんなさい……レースのことばかり考えて、緊張しすぎて、キングさんにぶつかっちゃって……」
    - かえって、キングヘイローは少し好奇心を見せた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうして緊張するんですの？ あなた、この距離は得意でしょうに。」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「キングさんが強すぎるから、緊張するんです……」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「うわあ、お母さんにもダービーで勝つって約束したのに……」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「こうしましょう、一緒にゴールして、一緒にダービーを勝ちましょう！」
    - キングヘイローは、吹き出してしまった。
    - だがこの小さな挿話が、緊張をうまく溶かしてくれたのも確かだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、共に頑張りましょう。」

# 一着
toky_yus_win:
  title: 日本ダービー後・一流へ
  lines:
    - content:
        - fontWeight: bold
          content: 実況
        - 「今年のダービー%UMA%は——キングヘイロー！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「この選手は、反論の余地のない実力と完璧な走りで場を圧倒し、一着を手にしました！」
    - ゴールを駆け抜けるキングヘイローを見て、%YOU%の胸は激しく高鳴った。
    - 急いで控え室へ先回りし、レース後の休みの準備を整えた。
    - すぐにキングヘイローが荒い息で扉を押し開け、ソファへへたり込んだ。
    - acc: 1
      content: 「お疲れ。本当に、完璧な勝利だった。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ、はぁ、言わずもがなですわ。キングが出れば、必ず……」
    - 耳障りな着信音が突然鳴り、小さな祝賀会を遮った。
    - 自分の携帯だと気づき、キングヘイローは急いで取り出した。
    - またお母様からの電話だと分かり、%YOU%はタオルを渡して席を外そうとした。
    - またしても、キングヘイローは残れと目配せした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「日本ダービーも、手に入れましたわよ？」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「ええ、ええ、見たわ。」
    - キングヘイローの顔が、ぱっと明るくなった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしの走りもご覧になりました？ スタート、加速、スパート、それに……」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「『スペシャルウィーク』という%UMA%、よく走っていたわね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……え？」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「%SEX%のスタート、%SEX%の加速、%SEX%のスパート、どれも完璧だったわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、レースに勝ったのはわたくしですわよ？」
    - キングヘイローの顔が、少し青ざめた。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「でも、毎回こんな幸運があるわけではないわ。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「醜態を晒して正体を現す前に、早く戻りなさい。」
    - 言い終えると、お母様は電話を切った。
    - %YOU%とキングヘイローは顔を見合わせ、言葉が出なかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まさか……ダービーすら、お母様の目には入らないのですか？」
    - キングヘイローは、話せば話すほど憤っていた。
    - acc: 1
      content: 「大丈夫だ、キング。進み続ければいい。いつか、必ず見せてやれる。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%の言うとおりですわ。ダービーではまともに見てもらえないのなら、菊花賞の勝利で、クラシック級の疑いようのない主役になってみせますわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのときになっても、わたくしの成果を見て見ぬふりができるはずがありませんわ！」
    - いつものように相槌を打とうとして、ふと何かにはたと気づき、口を開けなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしの一流の%CALLNAME%、どう思われますの？」
    - %YOU%はすぐには答えなかった。平素のスタミナ走でキングヘイローが見せる苦しさと、日本ダービー最後の、精根尽き果てたスパートを思い出す。
    - 二千四百メートルですら、あれほど苦しい。菊花賞の三千メートルなら、どうなる？
    - acc: 1
      content: 「キング、長距離へ軽々しく挑むのは……本当に妥当か？」
    - %YOU%は心配そうに、その疑念を口にした。
    - キングヘイローは真面目な顔で、%YOU%の肩を押さえた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「分かっていますわ。わたくし自身の体ですもの。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが、菊花賞は勝たねばなりませんわ。あの方が歩いた道ですもの。わたくしがあの方より優れていると証明するなら、菊花賞を取らねばなりませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スタミナのトレーニングを、引き続き増やしてくださいまし。一流のキングは、決して安易に諦めませんわ。」
    - 揺るがない目を見て、%YOU%は深く息を吸った。
    - acc: 1
      content: 「望むとおりにしよう、キング。」

# 非一着
toky_yus_lose:
  title: 日本ダービー後・また前へ
  lines:
    - 残念だった。キングヘイローは負けられない気勢を見せたのに、結局、他の選手に一着を奪われた。
    - 惜しいが、結果はもう決まっている。%YOU%はキングヘイローの控え室へ向かった。
    - キングヘイローはソファにへたり、荒い息をつき、目は悔しさでいっぱいだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ダービーを逃しましたわ……こうなれば、一流を証明するには、菊花賞しかありませんわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流のキングが持つべき愛顧と称賛は、菊花賞で手に入れねば……」
    - キングヘイローは虚空へ手を伸ばし、握りしめた。
    - 何か言おうとしたところで、突然の着信音に塞がれた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ、またあの方ですわ。%CALLNAME%、行かないでくださいまし？」
    - キングヘイローは携帯を出して一目し、そのまま%YOU%に残るよう頼んだ。
    - %YOU%は頷き、腰を下ろした。
    - キングヘイローはしばらく迷い、ようやく出た。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「日本ダービー、負けたわね。」
    - キングヘイローは、一気に気勢を失った。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「壁に当たったなら、早く戻りなさい。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「これ以上、恥を晒さないで。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが……」
    - 電話は切れた。
    - キングヘイローは携帯を強く握りしめ、今にも割れそうに見えた。
    - それから%YOU%の方へ振り返る。驚いたことに、目にはもう涙の光が揺れていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、わたくしは必ず、菊花賞を手に入れますわ。」
    - スタミナ走のトレーニングでキングヘイローが見せた疲れ果てた姿を思い出し、長距離の適性はあまり良くないのかもしれない、と思った。
    - だが、あの表情を見ては、その事実を軽々しくは口にできない。
    - だから%YOU%は、改まって頷いた。
    - acc: 1
      content: 「では、スタミナの追加トレーニングを続ける。」

ws_summer_start_c:
  title: クラシック級・合宿開始
  lines:
    - 学園の習いどおり、%YOU%とキングヘイローは合宿地へ赴き、年に一度の夏季合宿を始めた。
    - バスが合宿地の寮エリアに着くなり、キングヘイローは待ちきれずに飛び降りた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんな狭く混んだ空間、キングの一流の気品とは全く釣り合いませんわ！」
    - %YOU%は黙って頷いた。長距離バスが楽しい体験であるはずもない。
    - 傍らのキングヘイローは大げさに伸びをし、それから振り返って、トレセン学園所属のこの寮を眺めた。
    - 歴史の重みが、面と向かって押し寄せてくる、とでも言おうか。
    - %YOU%は首を傾げ、キングヘイローの表情が怠惰から驚き、そして不満へ移るのを見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この建物、ずいぶん古びていますわね！ 本当に、ここで泊まるのですの？」
    - 焦った顔を見て、%YOU%はふと、からかいたくなった。
    - acc: 1
      content: 「実はな、キング。物事は、表と裏の両面から見るものだ。」
    - %YOU%は手を後ろに組み、いかにも深遠そうな顔をした。
    - 案の定、その様子にキングヘイローは気圧され、再び寮へ目を向けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「中は豪華、ということですの？ おー——っほっほっほ！ ではキング、遠慮なくいただきますわ！」
    - キングヘイローは疑わず、嬉しそうに荷物を提げて飛び込んでいった。
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまり……中も、こんなに古いのですか？」
    - キングヘイローは斑な壁をしばらく見つめ、遅れて気づいたように%YOU%の肩を掴んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、中が豪華だとおっしゃいましたわよね？ どうして……」
    - %YOU%は微笑んで、その動きを止めた。
    - acc: 1
      content: 「中が豪華だとは、一言も言っていない。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、%CALLNAME%のあの言葉の意味は……」
    - acc: 1
      content: 「両面から見て初めて分かる、ということだ。この建物は、表も裏も一致している、とな。」
    - キングヘイローが暴走しそうだったので、%YOU%は急いで%SEX%を座らせた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ここは一流には見えませんわ。ですがキングの辞書に、諦めるの二文字はありませんわ！」
    - キングヘイローは、古びた寮の内部をもう一周見渡した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「証明してみせますわ。こんな条件でも、キングは……」
    - 長広舌の覚悟をしていた%YOU%は、%SEX%が突然止まったので首を傾げた。
    - キングヘイローは腹を立てて足を踏み鳴らし、額に滲んだ汗を拭った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングが名を上げたら、必ずここに空調を入れさせますわ……暑いですわ！」
    - %YOU%は釣り上がりかけた口角を必死に抑え、もう湯気を立て始めたキングヘイローを海辺へ連れていき、涼を取らせた。

ws_temple_fair_c:
  title: クラシック級・縁日
  lines:
    - 連日のトレーニングの疲れをほぐすため、%YOU%はキングヘイローを縁日へ誘った。
    - 合宿地の縁日は人気が高く、%YOU%とキングヘイローは、危うく人波に散らされそうになった。
    - if: era.get('love:61') >= 50
      lines:
        - そこでキングヘイローは、%YOU%の手をきゅっと掴んだ。
        - やがて%SEX%は調子に乗り、%YOU%の腕ごと懐へ抱き込んだ。
        - 少し抵抗してみたが、かえって強く抱き締められた。
        - 結局%YOU%は諦め、キングヘイローに引きずられるまま会場を縫った。
    - if: era.get('love:61') < 50
      lines:
        - そこでキングヘイローは、%YOU%の袖をきゅっと掴んだ。
        - 腕を振ってみたが、幸い、動きはあまり妨げられなかった。
    - 散らされない備えをしてから、二人はようやく縁日の空気を楽しみ始めた。
    - acc: 1
      content: 「そういえば、こんな風に気を抜いて遊びに出たのは、久しぶりだな。」
    - 傍らのキングヘイローは、軽く鼻を鳴らした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全部%CALLNAME%のせいですわ。ここ数日はスタミナのトレーニングばかり。終わると力など残らず、寝に帰るしかありませんわ。」
    - %YOU%は気まずい顔で後頭部を掻いた。
    - acc: 1
      content: 「では、強度を下げようか？」
    - ところがキングヘイローは、首を横に振った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それはいけませんわ。キングの一流への道に、スタミナのトレーニングは欠かせませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%はお忘れですの？ 菊花賞でも勝ち続けねば、皆が本当にキングを認めませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とりわけ……あの方。」
    - キングヘイローの声が、急に沈やかになった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まだ、%CALLNAME%には話していませんでしたわね。キングがトレセンへ来た理由を。」
    - %YOU%は頷いた。
    - acc: 1
      content: 「キングが構わなければ、過去を聞かせてもらいたい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングのトレーナーとして、キングのすべてを知る義務もありますわ。では、ゆっくりお話ししますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とっくにご存知でしょう。わたくしのお母様は、かつてはウマ娘として、コースで伝説と呼べる戦績を残しましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「引退後は、服飾の会社を一手に立ち上げ、また大成功なさいましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから事業が忙しく、わたくしに寄り添う暇はほとんどなく、わたくしのあの方への気持ちも、ずっと薄いままでしたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なのに、ほとんど現実離れした目標ばかり課して、わたくしにそれを果たす力があるかどうかなど、お構いなしでしたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしは、そんな影の下で育ったのですわ。」
    - 言い終えると、キングヘイローは仕方なさそうに溜息をついた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トゥインクル・シリーズの本格的な走路へ踏み出そうとしたとき、あの方はわたくしに商いを学ばせ、将来はあの方の会社を継がせようとなさいました……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それまでは、厳しい要求にも逆らえませんでしたわ。ですがあのときは、どうしても理解できませんでしたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「理由を尋ねましたら、『大成は難しい』とだけ。それ以外の理由はありませんでしたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから大喧嘩をし、家を飛び出しましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「幸い学園が受け入れてくださり、出走者としてトゥインクル・シリーズの舞台へ正式に立てたのですわ。」
    - キングヘイローは何か思い出し、%YOU%を一目見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そして%CALLNAME%のおかげで、一流と呼べる成績をいくつか残せましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのあと、お母様は何度も電話をくださいましたわ。言葉の裏には、そばへ戻れという意図が、いつも満ちていましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの方の立場では、懇願など口にできませんわ。だから、こんな言葉でキングの自信を削るしかなかったのでしょうね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただ、最近の通話には、明らかに和らぐ気配がありましたわ。キングに、交渉できる資本がついてきたからに違いありませんわ。」
    - そこまで言って、キングヘイローは少し誇らしげに笑った。
    - %YOU%は、わけもなく不安になった。
    - acc: 1
      content: 「では、キングはお母様のそばへ戻るのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、何を冗談ですの？ あの方はまだキングを認めてもいませんわよ？ それに、キングに叶えたい夢がないとでも？」
    - キングヘイローは、かなり驚いた様子だった。
    - if: era.get('love:61') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それに……キングも、%CALLNAME%を手放したくありませんわ。」
        - キングヘイローは、より強く抱きついた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とにかく、あの方が正式にわたくしを認めるまで、戻りませんわ！」
    - キングヘイローは顔を上げ、空を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのあいだにも、記者たちはわたくしを『名門の娘』として扱いたがりますわ。一流のキングには、絶対に受け入れられませんわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もっとレースを取り、もっと愛顧と称賛を集め、本当に一流のキングになってから、戻るか戻らないかを考えますわ！」
    - acc: 1
      content: 「それなら、菊花賞は必ず取らねばな！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ もちろんですわ！ %CALLNAME%、引き続きキングにスタミナのトレーニングを組んでくださいまし！」

# クラシック級・合宿終了
ws_summer_end_c:
  title: 陰り
  lines:
    - すぐに、夏季合宿は終わりに近づいていた。
    - 他の%UMA%たちはメニューを終え、海辺で好き勝手に遊んでいる。キングヘイローだけが、まだ追加トレーニングをしていた。
    - 見渡す限りの砂浜と海を見て、%YOU%は仕方なく溜息をついた。
    - %YOU%だって休みたい。だがキングヘイローは、かなり強く追加トレーニングを求めた。
    - だから結局、スタミナ走を繰り返すキングヘイローを見ているしかなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ……はぁ……わたくしの記録は、いかがですの？」
    - 傍らのストップウォッチを一目する。たいして伸びてはいないらしい。
    - %YOU%はそっとリセットを押した。
    - acc: 1
      content: 「悪くない！ 頑張れ、キング！」
    - キングヘイローは眉を寄せて進み出て、ストップウォッチを奪った。%YOU%は知らん顔をした。
    - acc: 1
      content: 「本当だ。早く休みなさい。」
    - キングヘイローはさらに数回押し、不満げにそれを%YOU%へ投げ返した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まだやれますわ。もう一周……」
    - だが急な息遣いが、もう嘘を暴いている。
    - %YOU%は溜息をつき、立ち上がってキングヘイローの肩を支えた。
    - acc: 1
      content: 「少し休め。体を壊しては、一流とは呼べない。」
    - それを聞いて、キングヘイローは渋々腰を下ろした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングは全く疲れていませんわ。ここで休むなど、時間の無駄ですわ……」
    - %YOU%の意識は、不満げな呟きから、すぐに%SEX%の脚へ移った。
    - キングヘイローの脚は、長期の高負荷には明らかに向いていない。今もわずかに震えている。
    - キングヘイローはスパート向きのタイプだ。長距離のスタミナ勝負へ軽々しく挑めば、弱点を晒すに等しい……
    - これで菊花賞は、本当に妥当な選択なのか？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングが話しかけていますのよ！ どこを見ていますの！」
    - %YOU%は慌てて顔を上げ、少し怒ったキングヘイローの目とぶつかった。
    - 誤解を避けるため、頭の中の考えを吐くしかなかった。
    - acc: 1
      content: 「キング、お前はたぶん……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングは、意見を述べる権利を取り上げますわ。」
    - キングヘイローは、かなりあっさり%YOU%の言葉を遮った。
    - acc: 1
      content: 「……え？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「実は、先ほどのトレーニングでも感じていましたわ。あの、重く苦しい感触を。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが、正統のクラシック三冠路線で自分を証明しなければ、あの方はわたくしを認めませんわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうして初めて、あの方が残した影を振り払い、誰もが敬うキングになれるのですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから、そんなことは言わないでくださいまし。菊花賞には必ず出ますわ。そして、必ず取りますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、今は分かりましたわね？」
    - キングヘイローは、熱を込めて%YOU%を見た。
    - %YOU%は長いこと黙り、やがて決心した。
    - acc: 1
      content: 「分かった。スタミナのトレーニングは続ける。」
    - キングヘイローは顔を輝かせ、立ち上がろうとした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よろしい。ではキングの一流トレーニングの続きですわ……うっ……」
    - 強度が過ぎて筋肉痛らしい。歩くことすら、もうままならない。
    - if: era.get('love:61') >= 75
      lines:
        - キングヘイローは当然のように、%YOU%へ手を伸ばした。
        - この光景を前に、%YOU%は腰を屈め、担当を抱き上げるしかなかった。
        - 寮へ戻る道中、当然のように皆に指を差された。
    - if: era.get('love:61') < 75
      lines:
        - %YOU%はキングヘイローを支え、どうにか立たせた。
        - 二人はそのまま、亀の速度で寮へ戻った。

before_kiku_sho:
  title: 菊花賞前
  lines:
    - いつものように、%YOU%は控え室で、これから走るキングヘイローに付き添っていた。
    - だが、今回はこれまでとは全く違う。
    - これまでのレースも不確かさはあった。それでも%YOU%は、キングヘイローの実力と意志を完全に信じていた。
    - 今回は違う。%YOU%もキングヘイロー自身も、長距離が向かない事実をよく分かっている。
    - 地獄と呼べるスタミナのトレーニングを積んできた。だがそれは、他の出走者との差を少し縮めたにすぎない。
    - 心配して一目すると、%SEX%の顔はひどく青ざめていた。
    - 体全体が、緊張で震えている。
    - %YOU%は黙って、冷たい手を握り、自分の体温で励ました。
    - acc: 1
      content: 「キング、体は大丈夫か？ どこか具合が悪いところはないか？」
    - キングヘイローは、どうにか笑ってみせた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全くありませんわ。キングは今、とても強いのですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たかが三千メートルの菊花賞が、キングヘイローの相手になりますものか？」
    - キングヘイローは無理をして、恐れ知らずの顔を作った。
    - acc: 1
      content: 「ああ、信じている。全力を尽くせばいい。」

# 一着
kiku_sho_win:
  title: 菊花賞後・本当の一流？
  lines:
    - content:
        - fontWeight: bold
          content: 実況
        - 「レースは最後のスパートへ！ 各%UMA%がいっせいに加速、壮観な光景です！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「先頭はキングヘイロー選手です。」
    - content:
        - fontWeight: bold
          content: 解説
        - 「不思議ですね。本来ならキングヘイロー選手は中短距離向き。菊花賞は正真正銘の長距離ですよ。」
    - content:
        - fontWeight: bold
          content: 実況
        - 「ええ、それに%SEX%の走りは終始必死でした。長距離のお試し、というより、本気で勝ちに来ているようです。」
    - content:
        - fontWeight: bold
          content: 解説
        - 「お母様の存在でしょうか？ クラシック三冠の最後の一冠で、あの方へ寄り添おう、とか？」
    - 表情は見えない。だが解説の言葉を聞いたキングヘイローの胸は、おそらく穏やかではないだろう、と%YOU%は察した。
    - content:
        - fontWeight: bold
          content: 実況
        - 「ただ、必死さが少し行き過ぎたようですよ？」
    - %YOU%は急いでコースへ目をやった。キングヘイローはまだ一着をしっかり守っている。だが歩幅が乱れ始めている。
    - 後方の%UMA%たちはまだ距離がある。それでも歩幅は安定し、余力を残しているように見えた。
    - %YOU%は黙って祈った。
    - すぐに後方の%UMA%が速度を上げ、距離を詰め、今にも交わそうとしていた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「キングヘイローはやはり長距離向きではありません！ 敗色は濃厚か！？」
    - %YOU%は目を閉じた。交わされる瞬間を、見たくなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やあああああああ——」
    - キングヘイローの叫びが聞こえた。あまりにはっきりしていて、胸の中で鳴ったようだった。
    - 恐る恐る目を開けると、青ざめていた顔が、病的な赤みへ変わっていた。
    - %SEX%は再び加速し、二着を力強く振り切り、ゴールを踏んだ。
    - %YOU%は無意識に傍らの観客を押しのけ、観客席の柵を越えた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「そこのお客様、コースに入らないでください！ レースはまだ終わっていません！」
    - %YOU%は聞かず、キングヘイローのそばまで走り、焦点の合わない目の中で%SEX%を支えた。
    - acc: 1
      content: 「私はキングヘイローのトレーナーです。キングヘイローは今、取材を受けられません。ご容赦ください。」
    - 目を丸くする観客へ、素早くそう説明し、キングヘイローを支えて控え室へ向かった。
    - divider: true
      content: ⏰
      position: left
    - %YOU%はキングヘイローを控え室へ連れていき、急いでソファへ座らせた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……やりましたわ……」
    - キングヘイローは苦しそうに、それでも少し興奮して言った。
    - acc: 1
      content: 「よくやった。今はゆっくり休め。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いけませんわ……キングには、まだすることが……」
    - キングヘイローは携帯を持ってくるよう示し、苦労して身を起こし、番号を回した。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「キング？ 何か用？」
    - 予想外だった。お母様は、このレースを見ていなかったらしい。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「菊花賞、手に入れましたわよ？ わたくし……」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「ええ、今は認めてあげるわ。他に用事は？」
    - それから、電話は切れた。
    - %YOU%とキングヘイローは携帯を抱え、顔を見合わせた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とっくに察しているべきでしたわ……」
    - キングヘイローは苦笑し、%YOU%に向かって首を振った。
    - それから意識を支えきれず、%YOU%の腕の中で昏倒した。
    - acc: 1
      content: 「キング？ キング？」
    - %YOU%は急いで、レースの応急医療を担う救援隊を呼んだ。
    - 幸い、力を使いすぎたことによる昏倒だった。しばらく安静にしていればよい。
    - だが心に残った傷は、そう簡単には扱えないかもしれない……

# 非一着
kiku_sho_lose:
  title: 菊花賞後・名もなき者
  lines:
    - content:
        - fontWeight: bold
          content: 実況
        - 「レースは最後のスパートへ！ 各%UMA%がいっせいに加速、壮観な光景です！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「先頭はキングヘイロー選手です。」
    - content:
        - fontWeight: bold
          content: 解説
        - 「不思議ですね。本来ならキングヘイロー選手は中短距離向き。菊花賞は正真正銘の長距離ですよ。」
    - content:
        - fontWeight: bold
          content: 実況
        - 「ええ、それに%SEX%の走りは終始必死でした。長距離のお試し、というより、本気で勝ちに来ているようです。」
    - content:
        - fontWeight: bold
          content: 解説
        - 「お母様の存在でしょうか？ クラシック三冠の最後の一冠で、あの方へ寄り添おう、とか？」
    - 表情は見えない。だが解説の言葉を聞いたキングヘイローの胸は、おそらく穏やかではないだろう、と%YOU%は察した。
    - content:
        - fontWeight: bold
          content: 実況
        - 「ただ、必死さが少し行き過ぎたようですよ？」
    - %YOU%は急いでコースへ目をやった。キングヘイローはまだ一着をしっかり守っている。だが歩幅が乱れ始めている。
    - 後方の%UMA%たちはまだ距離がある。それでも歩幅は安定し、余力を残しているように見えた。
    - %YOU%は黙って祈った。
    - すぐに後方の%UMA%が速度を上げ、距離を詰め、今にも交わそうとしていた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「キングヘイローはやはり長距離向きではありません！ 敗色は濃厚か！？」
    - キングヘイローは全力を尽くした。だが長距離特化の他の%UMA%たちは、楽々とキングヘイローを交わした。
    - レースは終わった。
    - コースで虚ろな目をしているキングヘイローを見て、%YOU%の胸も重くなった。
    - だが命がけのスパートは見ている。だからこそ、レース後の備えを整えねばならない。
    - %YOU%は先にキングヘイローの控え室へ向かった。
    - すぐにキングヘイローが、極度に疲れた足取りで控え室へ入ってきた。
    - acc: 1
      content: 「キング、早く休め。」
    - キングヘイローは疲れた目で%YOU%を一目し、その場で昏倒した。
    - %YOU%は急いで、レースの応急医療を担う救援隊を呼んだ。
    - 幸い、力を使いすぎたことによる昏倒だった。しばらく安静にしていればよい。
    - 深い執念があるせいか、キングヘイローはすぐに目を覚ました。
    - %YOU%は急いで傍へ寄った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お母様は、電話をくださいましたか？」
    - %YOU%は一瞬固まった。目を覚まして最初の言葉が、それだとは思わなかった。
    - 同時に、キングヘイローの携帯は控え室にあり、一度も鳴っていないようだった。
    - だから%YOU%は、キングヘイローに向かって首を振った。
    - acc: 1
      content: 「では、今からかけるか？」
    - キングヘイローは長いこと黙り、結局は苦笑して首を振った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「結構ですわ。%CALLNAME%、ありがとう。」

# クラシック級・11月第1週
ws_determination:
  title: 一流の決心
  lines:
    - 菊花賞のあとのある日、キングヘイローがトレーナー室へ来た。
    - acc: 1
      content: 「キング？ 何か用か？」
    - %YOU%は手元の仕事を止めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、キングは今度、大事な相談をしに来たのですわ。」
    - キングヘイローは遠慮なくソファへ座り、まるでここが%SEX%の城であるかのような様子だった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%もご覧になりましたわよね。菊花賞、最後のスパートでのキングの走りを。」
    - %YOU%は頷いた。
    - acc: 1
      content: 「決心の籠ったスパートだった。」
    - その答えを聞いて、キングヘイローはかえって一瞬固まった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちょっと！ そういう意味ではありませんわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまり、%CALLNAME%なら分かるはずですわ。最後の段階で、わたくしのスタミナはほとんど残っていなかった、ということを。」
    - 全力のスパートと、あのとき怖いくらい青ざめていた顔がよぎる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから、長距離はキングにふさわしい一流の道ではありませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スタミナの練習を十分に積めば、適性の不足は乗り越えられると思っていましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「結果は、%CALLNAME%もご覧のとおり。たかが三千メートルの菊花賞で力尽き、昏倒する始末ですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いわゆる正統路線なら、次は年末の有馬記念と、シニア級の天皇賞（春）でしょう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有馬記念はまだしも、三千二百メートルの天皇賞（春）では、キングにも勝つ自信がありませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だからこそ、今こそ真剣に話し合い、この難しい決断を下すときですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングは、いわゆる正統路線を捨て、短距離のレースへ挑みますわ。」
    - 正直、その決断に%YOU%は驚かなかった。
    - 募集のときから気づいていた。鋭いスパートこそ、キングヘイロー独自の、勝ち切れる武器だと。
    - クラシック級では、その天賦を振るう機会は少なかった。だからこそ「黄金世代」の中で、一番存在感の薄い一人になっていた。
    - 今、短距離へ転戦すると言い出したのは、スパートの天賦を極限まで活かす好機だ。
    - だから%YOU%は、その決断を強く支持した。
    - だが、すぐ次の問題が来る。
    - まず、この決断を外界へどう知らせるか。
    - キングヘイローは手を振り、涼しい顔をした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご安心を。一流のキングには、ちゃんと手がありますわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ、そうですわ！ %CALLNAME%、近頃なにかレースはありますの？ 知名度の高いものですわよ！」
    - 意図は分からない。それでも%YOU%はレース日程を手に取り、近々「エリザベス女王杯」というG1があると知った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ 当日は、%CALLNAME%に競馬場まで付き合っていただきますわ！」
    - %YOU%は後頭部を掻き、ますます分からなくなった。
    - acc: 1
      content: 「まず、今からでは出走登録に間に合わない。それに、あれは中距離のレースだぞ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングは、あのレースに出たいわけではありませんわ！ とにかく、そのときは付き合ってくださいまし！」
    - 言い終えると、キングヘイローは勝手にトレーナー室を出ていった。

# クラシック級・11月第2週
ws_the_way:
  title: 一流の決心を告げるやり方
  lines:
    - エリザベス女王杯の日が近づき、%YOU%はトレーナー室でキングヘイローを待っていた。
    - ようやく、キングヘイローが扉を叩いた。
    - %YOU%は少し驚いた。勝負服を着て来たのだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、参りましょう。」
    - 理由を問う暇も与えず、キングヘイローは%YOU%の手を引いて外へ出た。
    - divider: true
      content: ⏰
      position: left
    - エリザベス女王杯は、クラシック三冠ほどの人気はない。それでも中距離G1として、観客も記者も多く集めていた。
    - キングヘイローは、その場にいろと命じ、胸を張って機材を調整中の記者たちへ歩いていった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「記者の皆様！」
    - 記者たちはびくりとし、顔を上げてキングヘイローだと知り、戸惑いの中にも好奇心を見せた。
    - content:
        - fontWeight: bold
          content: 記者A
        - 「記憶が正しければ、このレースには出走登録されていませんよね？」
    - キングヘイローは、わずかに頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日はレースのためではありませんわ。皆様の力を借りて、大切な決断を外界へ伝えたいのですわ！」
    - 真面目な様子を見て、記者たちは急いで機材を据えた。
    - content:
        - fontWeight: bold
          content: 記者B
        - 「どうぞ。ただ、記者会見ではなくこのやり方を選ぶのは、少し奇妙ですね。」
    - キングヘイローは咳払いをした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっとわたくしを見てくださっているファンの皆様！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしはキングヘイロー。今日、皆様に一流の決心を告げますわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「クラシック級では、クラシック三冠のレースに出ましたわ。それで皆様は、正統の中長距離を深く耕すつもりだとお思いになったかもしれません。お母様のように。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが、菊花賞の経験が教えてくれましたわ。キングに最もふさわしい道は、中長距離ではありませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから、トレーナーと慎重に話し合ったうえで、シニア級では短距離の走路へ進むと決めましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしの次のレースは、シニア級で行われる『高松宮記念』になりますわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、いわゆる『お母様のファン』の目は、あまり気にしませんわ。皆様に分かっていただきたい。わたくしはキングヘイロー、一流のキングです。お母様の付属品などではありませんわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これからもわたくしのレースを見てくださいまし。キングが一流を成す瞬間を、見届けてくださいまし！」
    - 言い終えると、キングヘイローは一礼し、%YOU%の方へ歩いてきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行きましょう、%CALLNAME%！」
    - %YOU%は、後ろで棒立ちの記者たちを見た。
    - acc: 1
      content: 「残って質問に答えないのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それでは、キングの宣言が間延びしてしまいますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、キングは今日の主役ではありませんわ。出走者たちの風を奪うわけにはいきませんわ！」
    - 何人かの記者が我に返り、追ってこようとしたのを見て、キングヘイローは急いで%YOU%の手を引き、その場を離れた。

# クラシック級・11月第3週、イベント後やる気-2
ws_break:
  title: 決裂
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やはり、スピードのトレーニングを増やすべきですわね。」
    - キングヘイローは%YOU%の机にかじりつき、退屈そうに、%SEX%のための計画を立てている%YOU%を見ていた。
    - 短距離転戦を派手に宣言して以来、%YOU%は短距離のメニュー作りに追われていた。
    - スタミナのトレーニングを削ってから、キングヘイローの調子は明らかに良くなっていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ところで%CALLNAME%、スカイ%THEY%の動向はご存知ですの？」
    - acc: 1
      content: 「おそらく、有馬記念と天皇賞の準備を着々と、だろうな。」
    - %YOU%はいったん仕事を置き、考えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ つまり短距離の走路では、キングが唯一の強者ということですわ！」
    - 幻想に浸るキングヘイローを一目する。もう、勝利の瞬間を想像し始めているのかもしれない。
    - 相手にせず仕事へ戻ろうとしたとき、キングヘイローの携帯が突然鳴った。
    - キングヘイローは慌てて取り出し、少し迷った。
    - それでも、出た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もしもし……？」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「あなた、何をしているの？」
    - これまでの冷たい声とは違う。お母様は、かなり怒っているらしい。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「自分が何をしたか分かっているの？ クラシック三冠からいきなり短距離へ跳ぶなんて、よくそんな非常識な決断ができたわね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まず、わたくし……」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「もう、あなた一人の問題ではないわ。わたくしの顔まで潰されるのよ！」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「この数年、少しも反省しなかったの？」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「キングヘイロー、失望したわ！」
    - お母様の速さと言葉の勢いに、キングヘイローはほとんど割り込めなかった。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「早く家へ戻りなさい。短距離に出ても、恥をかくだけよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いけませんわ。わたくしは、絶対に戻りませんわ。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「何ですって？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレセンに残り、高松宮記念に出て、短距離で覇を唱えますわ！」
    - キングヘイローは、もう耐えきれなかったらしい。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いつも上から目線で叱るばかりで、わたくしの成果など、一度も気にかけてくださいませんでしたわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最初から最後まで、わたくしの成長を見ようともせず、決断に口を出し、気持ちを乱すだけですわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それなら、これからはわたくしの生活から消えてくださいまし！」
    - 言い終わる前に、キングヘイローの方から切った。
    - それから、虚ろな顔でその場にへたり込んだ。
    - %YOU%は急いで立ち上がり、キングヘイローを起こそうとした。
    - if: era.get('love:61') >= 75
      lines:
        - そばへ着く前に、%SEX%は跳ね上がって%YOU%に抱きつき、顔を肩へ埋めた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……わたくしのそばには、もうあなたしかいませんわ。どうか、離れないでくださいまし……」
        - %YOU%はキングヘイローを抱きしめ、背中を撫で続けた。
        - acc: 1
          content: 「離れない。約束する。」
        - キングヘイローの体が震え始め、肩に湿り気が伝わった。
        - 強く、明るく、自信に満ちていたキングヘイローが、泣いている。
        - すぐに左肩の衣が、すっかり濡れた。
        - acc: 1
          content: 「キング、最後まで一緒に行く。早く、気を持ち直してくれ。」
        - キングヘイローは、名残惜しそうに腕を解いた。
        - そのとき%SEX%の目は、泣きすぎてひどく赤く腫れていた。
        - %YOU%は不憫に思い、頭を撫でた。
        - acc: 1
          content: 「今日は戻って休め。短距離の計画は、こちらで続ける。」
        - キングヘイローは、力を込めて頷いた。
    - if: era.get('love:61') < 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……キングのトレーニング計画を、続けてくださいまし。」
        - acc: 1
          content: 「キング、本当に大丈夫か？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……続けてくださいまし。わたくしは……大丈夫ですわ。」
        - %YOU%は黙って座り、スパート中心の計画を書き続けた。
        - キングヘイローは黙って立ち上がり、トレーナー室を出ていった。
        - %SEX%の寂しい背中が、追うなと告げていた。

oc_new_year_s:
  title: シニア級・正月
  lines:
    - 時は速く、気づけば%YOU%はキングヘイローと三年目を迎えていた。
    - シニア級が%UMA%にとってどれほど大切かは、言うまでもない。強敵が林立する一方、名を上げる最良の機会でもある。
    - キングヘイローにとっては、なおさらだ。
    - %SEX%は短距離へ転じると決めた。シニア級の短距離レース群こそ、適性を試す最終試験になる。
    - だがその前に、しっかり気を抜く必要もある。
    - そこで%YOU%はキングヘイローを学園近くの神社へ連れていき、正月の参拝をした。
    - やはり一番楽しみなのは、おみくじだろう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから聞きますわ。%CALLNAME%が家を出てから抱えている、あの箱は何ですの？」
    - キングヘイローは道中ずっと我慢し、神社の手前でようやく尋ねた。
    - %YOU%は悪戯っぽく瞬いた。
    - acc: 1
      content: 「すぐ分かる。」
    - 欲しい答えが得られず、キングヘイローはふくれ面で先を歩き、%YOU%を後ろに残した。
    - divider: true
      content: ⏰
      position: left
    - すぐに参拝は終わり、キングヘイローは腕まくりして、おみくじの番を迎えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ キングには一流の予感が十分にありますわ！ 今度こそ大吉ですわよ！」
    - 抽選前の演説を終え、キングヘイローは真剣な顔で手を箱へ入れた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「必ず大吉……え？」
    - 「凶」だった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いけませんわ、もう一度！」
    - キングヘイローは、もう一本引いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「冗談ですわね？」
    - 今度は「大凶」。
    - キングヘイローは腹を立てて何度も引いた。だが「大吉」は、ついに出なかった。
    - 暴走の兆しを見て、%YOU%は急であの箱を出した。
    - acc: 1
      content: 「キング、『一流のおみくじ』を試さないか？」
    - その二字には魔力があるらしい。再び引こうとしていた手が、ぴたりと止まった。
    - %SEX%は一瞬で、用意した「一流抽選箱」の前へ寄った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんな抽選、子どもの遊びですわ！ つまらなくて仕方ありませんわ！」
    - ぼやきながらも、手は素直に箱へ入った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「また凶、ということはありませんわよね？」
    - キングヘイローは慎重に%YOU%を一目し、それからゆっくり手の中の籤を見た。
    - そこに書かれていたのは「一流」。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ 一流！ やはり一流の%UMA%は、わたくしだけですわね！」
    - 先に引いた悪い籤など、一瞬で忘れた。手の籤を掲げ、上機嫌に神社を駆け出した。
    - %YOU%は溜息をつき、抽選箱を抱えて追った。
    - 箱の中の籤は、すべて「一流」と書いてあった。
    - 平時のキングヘイローの頭なら、種明かしなどすぐに分かるはずだ。
    - だが今日のキングヘイローは、少し頭の回転が足りないらしい……
    - ともあれ、なかなか記念になる正月だった。

before_takm_kin:
  title: 高松宮記念前
  lines:
    - 張り詰めたトレーニングの中、高松宮記念は予定どおり訪れた。
    - スピードとスパートの備えは十分だった。それでも、走路を急に変えた賭けには、%YOU%はまだ不安が残っていた。
    - キングヘイローにも、いつもの自信と決心が見えない。
    - 専用控え室で、キングヘイローは椅子に座り、ほとんど狂ったように髪を梳かしていた。
    - 動きはどんどん荒くなり、美しい髪まで引き抜いている。仕方なく、%YOU%は前へ出た。
    - キングヘイローの手を掴み、自分の両手の間に閉じ込めた。
    - キングヘイローはびくりとし、やがて落ち着いた。
    - %SEX%は困惑して手の中の髪を見、それからようやく、手が%YOU%に強く握られていると気づいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくし……」
    - 血走った目を見て、%YOU%はまた溜息をついた。
    - 短距離転戦を決めてから、キングヘイローの心の負荷は頂点に達していた。
    - 自信に満ちたキングヘイローでも、これほどの賭けを前にすれば、眠れず、食えなくなる。
    - キングヘイローにとって、高松宮記念で短距離の足場を築けなければ、選手生命はほぼ終わるに等しい。
    - それでも巨大な圧力の下で、%YOU%が渡した課題はどれも、高い精度でこなしてきた。
    - 実力なら、一着を取る資格は十分にある、と%YOU%は思っている。
    - だが心の緊張は、そう簡単には溶けない……
    - %YOU%は手を強く握り続けた。緊張で冷えていた手が、体温で温まるまで。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すみません……こんな大切なときに、わたくしが……これでは一流ではありませんわ！」
    - キングヘイローは拳を強く握り、目尻が赤くなっていた。
    - acc: 1
      content: 「全力を尽くせばいい。一流のキングなら、必ず大丈夫だ！」
    - キングヘイローも、%YOU%の手を力強く握り返した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご安心を。キングは、必ず一着を手に入れますわ！」
    - キングヘイローは深く息を吸い、立ち上がり、コースへ向かった。
    - %YOU%は背中が消える場所を見つめ、長いこと動けなかった。

# 一着
takm_kin_win:
  title: 高松宮記念後・一流とは
  lines:
    - レースは終わった。場内は静まり返っていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ……はぁ……」
    - キングヘイローは顔を上げた。眩しい陽が、目を細めさせる。
    - だが着順板の一着は、嘘をつかない。
    - 負けられない理由を背負い、キングヘイローは高松宮記念の一着を、無事に手にした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくし……やりましたわ！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「高松宮記念の勝者は——キングヘイロー！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「この一流の%UMA%は、クラシック級で馴染んだ中距離を毅然と捨て、短距離へ挑み、大成功を収めました！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「さすがは『一流のキング』」
    - %YOU%とキングヘイローの予想に反し、実況は初めて、「名門の娘」の肩書きを結びつけなかった。
    - content:
        - fontWeight: bold
          content: 実況
        - 「前途と名声を賭けた一戦を、私たちは見届けました！ 疑いなく、最後の勝利はキングヘイローのものです！」
    - 観客席から、ようやく津波のような歓声が上がった。
    - content:
        - fontWeight: bold
          content: 観客A
        - 「キング、よくやった！」
    - content:
        - fontWeight: bold
          content: 観客B
        - 「短距離でもこれほど見事とは、これが一流だ！」
    - content:
        - fontWeight: bold
          content: 観客C
        - 「キング、こっちです！ わたくしはあなたの忠実なファンですよ！」
    - 歓声の波の真ん中で、%YOU%はすでに目が熱かった。
    - スタンド下のキングヘイローも、同じだった。
    - 公衆の顔を何より大切にする%SEX%が、泣いている。
    - キングヘイローは嗚咽でほとんど話せなかった。だから観客席へ、深く一礼しただけだった。

# 非一着。キングヘイロー離隊。恋慕75未満かつ好感225未満なら、追い出されBEへ直行
takm_kin_lose:
  title: 高松宮記念後・危機
  lines:
    - キングヘイローが追いつかれ、交わされたとき、%YOU%は氷穴へ落ちたようだった。
    - content:
        - fontWeight: bold
          content: 実況
        - 「キングヘイロー、逆転されました！ すべてを賭けた元・中距離の選手に、逆転の余地は残っているか？」
    - content:
        - fontWeight: bold
          content: 実況
        - 「望みは薄い！ ゴールは目前、差はまだ開いています！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「非常に残念、キングヘイロー選手の短距離の夢は、ここで割れそうです！」
    - 敗色は決した。周囲の観客は、勝者のために歓声を上げ始めた。
    - %YOU%は椅子にへたり、周囲の騒音を聞かなかった。
    - 歓声が、ためらいがちな囁きへ変わるまで。
    - content:
        - fontWeight: bold
          content: 実況
        - 「キングヘイロー選手？ どちらへ行かれるのです！ 戻ってください！」
    - %YOU%は勢いよく立ち上がり、ちょうどキングヘイローが柵を越え、場外へ走る背中を見た。
    - acc: 1
      content: 「キング——」
    - 一瞬の迷いもなく追おうとした。だが周囲の人混みが、動きを阻んだ。
    - どうにか人波を抜けたときには、キングヘイローの姿は、もう完全に消えていた。

# シニア級・4月第1週。高松宮記念一着でのみ発生
ws_special_letter:
  title: 特別な感謝の手紙
  lines:
    - 出勤の途中、%MINORU%と出会った。
    - %SEX%は、キングヘイローと%SEX%のトレーナー宛てにファンからの感謝の手紙が届き、すでに%YOU%のトレーナー室へ運んだ、と言った。
    - %YOU%は一瞬固まり、それから興奮して%MINORU%に礼を言った。
    - 別れたあと、急いでトレーナー室へ行き、扉を開けた。
    - 案の定、机の上に白い封筒があった。
    - 取り上げて差出人住所を見ると、表情が妙になり、また置いた。
    - それからキングヘイローの次のメニューを組みつつ、%SEX%を待った。
    - すぐにキングヘイローが来た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ 一流のキングヘイロー、参上ですわ！」
    - いつもの派手さを見て、笑いを堪えつつ、手の封筒をちらりと見せた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これは何ですの？」
    - acc: 1
      content: 「ファンからの感謝の手紙だ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「何ですって？ 早くキングに見せなさい！」
    - 案の定、感謝の手紙と聞いただけで興奮し、机の前へ来て手紙を奪った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「誰からかしら……あれ？ 大阪市拘置所？」
    - 興奮した表情が、顔の上で固まった。
    - その様子を見て、%YOU%は吹き出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうして拘置所ですの。キングのファンは、碌な人ではないとでも？」
    - キングヘイローは一気に気勢を失った。
    - %YOU%は笑いを収め、開けてみろと示した。
    - キングヘイローはぼやきながら封筒を開けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレセン学園、%CHARA_FULL%と%SEX%のトレーナー様。」
    - キングヘイローは顔を上げて%YOU%を一目し、読み続けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしは大阪市拘置所にいる、あなたのファンです。先日、高松宮記念の映像を拝見しました。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それまでは、あなたが中距離を走り続けるものと思っていました。」
    - ……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……そのあと、よく考えました。キングヘイローがシニア級で毅然と短距離へ転じ、努力で優勝を手にしたこと。なんと敬うべきことでしょう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このレースに、本当に心を動かされました。わたくしも早く更生し、社会へ戻り、再びキングヘイローを応援したいと思います。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「真心を込めて。救われた者より。」
    - この特別なファンレターを読み終えると、トレーナー室は沈黙に落ちた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしのファン……ずいぶん特別ですわね？」
    - キングヘイローも、どう評していいか分からない様子だった。
    - acc: 1
      content: 「つまりキングは、自分の実力で、誰かの世界の光になった、ということだ。」
    - その言葉を聞いて、キングヘイローはしばらく固まった。
    - それから満面の笑みで、手の手紙を振った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ 一流のわたくしにしか、できませんわね！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ではこの先、%CALLNAME%にはもっと一流のトレーニングを組んでいただき、もっと一流のわたくしになりますわ！」

# 高松宮記念非一着。シニア級・4月第1週。恋慕75以上、または好感225以上
ws_crisis:
  title: 危局と転機
  lines:
    - 高松宮記念の敗北でキングヘイローは無断で姿を消し、外界の嵐はそのまま%YOU%の頭上へ落ちた。
    - 頭痛の種であることに、変わりはない。
    - キングヘイローの行方を探すため、学園へすら戻らなかった。
    - %TASTE%と%MINORU%も言っていた。キングヘイローのお母様が何度も学園へ不満を伝え、%YOU%の強制解雇を求めている、と。
    - 学園側は、長年の名声を担保に、必ず見つけ出すとお母様へ約束したという。
    - それで%YOU%の圧力はさらに増し、連日の捜索で精も根も尽きかけていた。
    - 手元の手がかりは、去った大まかな方向だけ。それ以外は何もない。
    - だから結局、馴染みのトレーナー室へ戻り、少し休み、これからを考えた。
    - 精神は極度に疲れていた。机の上の一枚の紙に気づくまで。
    - %YOU%の心臓は、ほとんど止まった。
    - まだ見ていない。だが直感が告げていた。この紙こそ、キングヘイローを見つける最後の機会だと。
    - ほとんど机へ飛びつき、その紙を手にした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、本当に申し訳ありません。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「高松宮記念のあと、わたくしがあんな動きをして、さぞご迷惑をおかけしたでしょう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「軽率な行動をお許しくださいまし。本意ではなかったのですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしはただ……この先の非難と嘲笑に、向き合えなかったのですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お母様も、学園へいらしたでしょう。どうか、あなたに過激なことをなさいませんように……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この手紙をあの方へお渡しください。すべてわたくしの責任で、あなたには関係がない、と。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、わたくしのことは、もう気にかけないでくださいまし。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしはすぐにここを離れますわ。どうか、わたくしを忘れ、もっと優れた子を探してくださいまし。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流ではない %CHARA% より」
    - 考える暇などなかった。紙を掴み、トレーナー室を飛び出した。

# 前イベントの続き。場所は駅
os_give_up:
  title: 自暴自棄
  lines:
    - 「離れる」と書いてあったのを手がかりに、%YOU%は無意識に駅へ向かった。
    - acc: 1
      content: 「茶色い髪の%UMA%を見かけませんでしたか？」
    - content:
        - fontWeight: bold
          content: 窓口係
        - 「見かけましたよ！ %SEX%は、あちらのバス停の方へ行きました。」
    - まさか、すぐ手がかりが見つかるとは。
    - 窓口係へ何度も礼を言い、指示どおりそのバス停へ向かった。
    - 道に人はいなかった。空の上では、鉛色の厚い雲が急速に集まっていた。
    - 時刻は正午前後なのに、夜のように暗い。
    - 突然、雲の上から雷鳴が転がった。
    - 土砂降りの雨が、一瞬で%YOU%を頭から濡らした。
    - 気づいていないかのように前へ進む。ぼやけた視界に、一つの影が現れるまで。
    - acc: 1
      content: 「キ——ン——グ——！」
    - 数日分の圧力を、ありったけの声で吐き出した。
    - その影は激しく震えた。だが振り返らなかった。
    - ますます厚い雨幕を突き、キングヘイローのそばまで走った。
    - acc: 1
      content: 「キング……やっと見つけた……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうか……お帰りくださいまし。一流ではないわたくしに、時間を使う必要はありませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%の信頼も、ファンの信頼も、裏切りましたわ。わたくしはもう……もう……」
    - キングヘイローの体が激しく震え、もう泣き始めているらしい。
    - if: era.get('love:61') >= 75
      lines:
        - acc: 1
          content: 「もう一度だけ、わがままを言わせてくれ……戻ってこい、キング！」
        - ふと何か思いついたように、ポケットからくしゃくしゃの小さな紙片を取り出した。
        - そこには「キングに何でもさせる権利。解釈はキングに属する」と書いてあった。
        - acc: 1
          content: 「キング、そばへ戻ってくれ！」
        - その紙片を見て、キングヘイローは固まった。
        - しばらくして、%SEX%の涙が決壊した。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「解釈はわたくしに属しますわ、%CALLNAME%……お帰りくださいまし。このまま……わたくしを忘れてくださいまし……」
        - キングヘイローは心を鬼にして背を向け、去ろうとした。
        - 恍惚の中、二度と会えなくなる悲惨な未来が見えた。
        - だから一歩前へ出、キングヘイローの手を掴んだ。
        - acc: 1
          content: 「キング、お前のいない日々は、想像できない……」
        - 鼻が熱くなり、%YOU%も泣いた。
        - キングヘイローは少し力を入れたが、結局、手を引き抜くことはできなかった。
        - acc: 1
          content: 「今回の敗北は構わない。戻ろう。立て直して、また前へ進むんだ！」
        - キングヘイローは突然振り返り、%YOU%に抱きついた。
        - 体の雨で濡らさないよう下がろうとしたが、キングヘイローは強く抱きしめていた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では約束ですわ！ %CALLNAME%はわたくしに付き添い、自信を取り戻すまで離れませんわよ！」
        - %YOU%は何も言わず、同じように強く抱き返した。
        - 雨はますます強くなった。だが二人とも、相手を手放す気は全くなかった。
        # 軽度の自暴自棄を得る。やる気上限は普通のまま
    - if: era.get('love:61') < 75
      lines:
        - acc: 1
          content: 「心の底から、キングを信じている。」
        - 遠いあの選抜レースが、よぎった。
        - acc: 1
          content: 「キング、プロのトレーナーとしての、この目を信じてくれ。」
        - キングヘイローは涙目で%YOU%を見た。
        - しばらくして、%SEX%の涙が決壊した。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「本当に、わたくしを信頼してくださいますの？ もう何も残っていないわたくしを？」
        - %YOU%は改まって頷いた。
        - キングヘイローは手の甲で涙を拭った。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では……帰りましょう。%CALLNAME%がそんなに濡れていたら、風邪を引きますわ。」
        # 中度の自暴自棄を得る。やる気上限は不調のまま

ws_legend:
  title: 伝説の始まり
  lines:
    - 高松宮記念はとうに過ぎた。だがこのレースがキングヘイローの選手生命にとってどれほど大切かは、言うまでもない。
    - まず、短距離適性を証明できる。
    - 次に、「キングだけのもの」である一流のファンを育てられる。
    - それなら、次のレースを考える仕事も、日程に載せねばならない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ 一流のキング、参上ですわ！」
    - キングヘイローは相変わらず自然にトレーナー室の扉を開け、大笑しながら入ってきた。
    - それから、距離感などない様子で寄ってきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「何をしていますの、わたくしの一流トレーナー？」
    - %YOU%は手のレース日程をキングヘイローへ渡した。
    - acc: 1
      content: 「キングは、出たいレースがあるか？」
    - キングヘイローは日程を受け取り、眺めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、この安田記念はいかがですの？」
    - %YOU%は考えた。安田記念は千六百メートルのG1、マイルのレースだ。
    - キングヘイローの、承前啓後の次の目標として、かなりふさわしい。
    - だから頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングの目は確か、ということですわね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただ、スカイ%THEY%が今どうしているかは、よく分かりませんわね。」
    - %YOU%は考えた。「黄金世代」の中で、中長距離が苦手なのは、キングヘイローくらいらしい。
    - acc: 1
      content: 「天皇賞（春）の準備をしているんじゃないか？」
    - たしかに、天皇賞（春）は知名度の高い長距離の一つで、長距離向きならほとんど通る道だ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それなら……おー——っほっほっほ！」
    - キングヘイローが突然、耳元で大笑を始めた。
    - %YOU%はまだ鳴っている耳を押さえ、訳が分からずキングヘイローを見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スカイ%THEY%の意識は天皇賞（春）に向いている。なら短距離とマイルの走路に残るのは、キングだけですわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「強敵の掣肘がなければ、キングは今年の短距離とマイルを一掃しますわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうなれば、キングは疑いようのない主役ですわ！」
    - %YOU%は考えた。高松宮記念の走りは強かった。今年の短距離とマイルを制し、本当の一流になる可能性は十分ある。
    - acc: 1
      content: 「楽しみだ。引き続き頑張れ！」
    - キングヘイローは大笑しながら、トレーナー室を出ていった。

# 安田記念一着。高松宮記念一着でのみ発生
yasu_kin_win_s:
  title: 安田記念後・キングの道
  lines:
    - マイル級のレースには触れたことがなかった。それでも鋭い加速とスパートが、キングヘイローを一着の座へ押し上げた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「キングヘイロー！ 勝者はキングヘイロー！ 高松宮記念勝利の勢いを纏い、マイルでもまた勝ちました！」
    - キングヘイローがゴールを駆け抜けたと同時、観客席から空前の歓声が爆発した。
    - 皆が歓声を上げ、跳ね、また一人の短距離・マイルの王者の誕生を目撃した喜びに沸いていた。
    - キングヘイローにも、この壮大な歓声は聞こえているらしい。耳が真っ直ぐ立ち、わずかな震えが、今の胸の内を語っていた。
    - だが%SEX%は淡々と観客席へ一礼し、その場を離れた。
    - その振る舞いを見て、少し呆れつつも、心から嬉しかった。
    - だから%YOU%は控え室へ先回りし、キングヘイローを待った。
    - すぐにキングヘイローが控え室の扉を開け、渡したタオルと飲み物を受け取った。
    - acc: 1
      content: 「感触はどうだった？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「超一流の体験ですわ！」
    - キングヘイローは手を振り、足を動かし、レースの一部始終を語り始めた。
    - どうやら、このレースを心から楽しんでいる。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……最後は、追い上げて……」
    - 突然、控え室の扉がノックされた。
    - content:
        - fontWeight: bold
          content: スタッフ
        - 「キングヘイロー選手、よろしいでしょうか。熱狂的なファンを名乗るお客様が何名か、お会いしたいと……ほとんど止められなくて……申し訳ありません。」
    - %YOU%とキングヘイローは目を合わせ、互いの目に喜びを見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうぞ、どうぞ！」
    - 数人のファンが興奮した顔で扉を開けたのに、入口で譲り合い始めた。
    - キングヘイローは額を押さえ、立ち上がって扉口へ行った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「では、外でお話ししましょう。」
    - content:
        - fontWeight: bold
          content: ファンA
        - 「キングと、キングのトレーナーの%SIR%。わたくしたちは忠実なファンです！ このレースの勝利、おめでとうございます！」
    - content:
        - fontWeight: bold
          content: ファンB
        - 「ええ、わたくしたちは高松宮記念からキングを見始めました。ずっと、お疲れさまでした！」
    - その言葉を聞いて、キングヘイローは一瞬固まった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまり……高松宮記念から、わたくしを見てくださっている、ですの？」
    - それを聞いて、ファンたちは少し恥ずかしそうに俯いた。
    - content:
        - fontWeight: bold
          content: ファンC
        - 「キングの、かっこいい終盤のスパートに惹かれたんです……でもご安心を。これまでのレース映像は、何度も拝見しました。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ 恥ずかしがる必要はありませんわ！ 高松宮記念以降のキングこそ、本当のキングなのですから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「クラシック級にもファンはたくさんいましたわ。ですが皆、かつてはお母様のファンで、わたくしもお母様と同じ正統路線を行くと思っていたのですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから短距離転戦を口にしたとき、『道を外した』などと怒って、離れていきましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お母様の名声で来た人を、わたくしのファンと呼ぶ気には、あまりなれませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから、キングの短距離のレースでキングを認めてくださる、あなた方のような方こそ、本当に欲しかったファンですわ。」
    - キングヘイローは、かなり感動して理由を述べていた。
    - content:
        - fontWeight: bold
          content: ファンA
        - 「光栄の極みです！ これからもキングを追い、ずっと追い続けます！」
    - content:
        - fontWeight: bold
          content: ファンB
        - 「キングには走り続けて、皆に一流の素晴らしいレースを見せてほしいです。」
    - content:
        - fontWeight: bold
          content: ファンC
        - 「そうです、キング、トレーナーの%SIR%。次は……？」
    - キングヘイローも同じ疑問を持っていたらしい。%SEX%とファンたちは、いっせいに%YOU%を見た。
    - acc: 1
      content: 「キングは短距離の支配力を十分に示した。なら、それを広げない手はないだろう？」
    - content:
        - fontWeight: bold
          content: ファンA
        - 「下半期の『スプリンターズステークス』、ということですよね？」
    - ファンたちは関係するレースをよく知っているらしい。すぐ当てた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのとおりですわ！ あのレースの勝利が、短距離走路におけるキングの一流の地位を、完全に固めるでしょう！」
    - content:
        - fontWeight: bold
          content: ファンB
        - 「それなら、必ず応援に参ります！」
    - content:
        - fontWeight: bold
          content: ファンC
        - 「キングとトレーナーの%SIR%、引き続き頑張ってください！」
    - divider: true
      content: ⏰
      position: left
    - ファンたちは去った。だが%YOU%とキングヘイローの胸の高鳴りは、長いこと収まらなかった。

# 高松宮記念勝利でのみ発生
ws_temple_fair_s:
  title: シニア級・縁日
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早く行きましょう！」
    - トレーニングのあと、キングヘイローは待ちきれずに%YOU%の手を引き、縁日へ向かった。
    - 今年のキングヘイローの気勢は、去年よりずっと良い。メニューを組み直したせいかもしれない。
    - キングヘイローはスタミナ走向きではない。去年の合宿は、ほとんどスタミナのトレーニングばかりだった。
    - 今はスピードとスパートが中心だ。だから終わったあとも、体力がかなり残る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は何を考えていますの？ きっとトレーニングのことですわね！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが今日は、余計な妄想をする権利を取り上げますわ！ 心ゆくまでキングに付き合いなさい。」
    - 思考はキングヘイローに現実へ引き戻された。
    - すでに十分な成績を残している。しっかり休んでもいいはずだ。
    - そう思いながら、半ば引きずられるように縁日の会場へ着いた。
    - 今年の祭りの空気は、去年より濃い。急ぎすぎた目標がないせいか。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、見て！ あちらでキングのレース映像を見ていますわよ！」
    - キングヘイローの指先を辿り、%YOU%は言葉を失った。
    - そこの屋台には「黄金世代」の看板が下がっているのに、何も売っていない。
    - 代わりに画面が五つ並び、黄金世代の五人の%UMA%の、シニア級のレース映像をそれぞれ流していた。
    - ただ、キングヘイローが出た高松宮記念は短距離だ。だからキングヘイローの映像が、一番先に終わった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ わたくしの方が%THEY%より先にゴールしていますわ！ さすが一流のキングですわ！」
    - %YOU%は、傍らのこの人を相手にしないことにした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただ……もう長いこと、%THEY%に会っていませんわね。」
    - 黄金世代の他の面々は中長距離が主だ。コースではなかなか出会えない。
    - 皆、次のレースの準備に追われている。場外でも、まず会えないだろう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ときどき、キングもデビュー前、%THEY%と並走していた頃が、懐かしくなりますわ。」
    - %YOU%とキングヘイローが気づかないところで、芦毛の%UMA%の耳が、かすかに数度震えた。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: 謎の%UMA%
        - 「おや～～キングも、たまにはそう思うんだ。じゃあ%SEX%に相談してみよっか～」

ws_summer_end_s:
  title: シニア級・合宿終了
  lines:
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「じゃあ、そういうことでいい？」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「うん！ わたしも、そんな結末が楽しみです！」
    - 二人の%UMA%は早めに荷物を整え、こっそりキングヘイローのトレーニングを見ていた。
    - %THEY%は、何か大きな計画を実行しようとしているらしい。
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流のトレーニング、完璧に終わりましたわ！」
    - acc: 1
      content: 「よし、終わったなら荷物を整えようか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「時間はまだありますわ。キングに追加トレーニングを組む権利を授けますわよ？」
    - キングヘイローには、荷物を整えて学園へ戻る気はないらしい。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「キング——キング！」
    - 何を理由に説得しようかと考えていたところへ、同じく黄金世代のスペシャルウィークとセイウンスカイが、どこからか現れた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スペシャルウィーク？ スカイ？ これはどういう……」
    - キングヘイローも、かなり驚いているらしい。
    - だがこれなら、追加トレーニングをねだる心配はなくなる。
    - セイウンスカイが、こちらへ悪戯っぽく微笑んだ気がした。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「ねえキング。黄金世代の黄金の時間、もう終わりかけ、って思わない？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「何を言いますの！ キングは、ずっと一流でい続けますわ！」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「あー、そういう意味じゃないんだけどね。」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「実はです！ わたしとスカイさんで相談して、わたしたちの時代を記念するレースをしようって！」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「そうだよ。キング、そういうの、意味あると思わない？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうして急にそんな話を！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「えへへ、キングさんに知らせておくだけです。それに、選んだレースは『天皇賞（秋）』ですよ！」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「キング、そのときは応援に来てよね？ 青ちゃんが一番にゴールしたら、キングの名前を大声で呼んであげる～」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「まだ始まってもいないですよ！ スカイさん、そんなに得意げにしないでください！」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「遅い子はにんじんケーキ！」
    - スペシャルウィークは牙を剥くようにセイウンスカイを追いかけていった。
    - %YOU%とキングヘイローは、言葉もなく、%THEY%が遠ざかるのを見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まったく、手のかかる同期ですわ！ ふざけていますわね！」
    - そう言いながらも、キングヘイローは同期二人が去った方向を、ずっとぼんやり見つめていた。
    - 二年以上担当してきた%YOU%なら、キングヘイローの考えはだいたい読める。
    - acc: 1
      content: 「キング、こちらも……？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ さすがキングの一流トレーナーですわ！ わたくしも、%THEY%と一度本気で競ってみたかったのですわ。」
    - キングヘイローも、%YOU%の考えを息を合わせて察していた。
    - だが天皇賞（秋）は中距離だ。となると……
    - acc: 1
      content: 「戻ったら、スタミナの追加トレーニングだな？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「戻る？ いけませんわ！ この場でキングにスタミナ走を一回り組みなさい！ おー——っほっほっほ！」
    - 結局、追加トレーニングからは逃げられなかった。

# 高松宮記念一着でのみ発生
before_sprt_sta_s:
  title: スプリンターズステークス前
  lines:
    - 天皇賞へ出ると決めても、スプリンターズステークスのトレーニングは落とせない。
    - ただ、高松宮記念という珠玉が先にある。今回のレース前は、あれほど緊張しなくてもいい。
    - キングヘイローは、いつものように控え室の椅子で大敵を迎える顔すらしていなかった。
    - acc: 1
      content: 「キングは、全然緊張していないのか？ G1だぞ。」
    - キングヘイローは、スイッチを押されたように大笑した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ 全く緊張していませんわ！ これもキングの、また一つの勝利にすぎませんわ。」
    - かなり自信に満ちているらしい。
    - それで%YOU%も安心し、早めにキングヘイローへ別れを告げた。
    - これまでのレース前は、緊張するキングに長く付き添っていた。全行程を見る機会は、ほとんどなかった。
    - 控え室から観客席へは、かなり遠回りしなければならないからだ。
    - だが今回は、全行程を見るチャンスがある。

# スプリンターズS一着。高松宮記念勝利後のみ
sprt_sta_win_s:
  title: スプリンターズステークス後・必然の結末
  lines:
    - content:
        - fontWeight: bold
          content: 実況
        - 「短距離の王者の地位を、完全に固めました！」
    - キングヘイローは、見込みどおりレースに勝った。
    - 観客たちも、歓声を上げ始めた。
    - 周囲を見ると、高松宮記念のときより明らかに増えている。嬉しかった。
    - しかも皆、キングヘイローを見に来たらしい。
    - content:
        - fontWeight: bold
          content: ファンA
        - 「感動です。キングは中長距離から短距離への転換を、完全に果たしましたね！」
    - content:
        - fontWeight: bold
          content: ファンB
        - 「キング、またの優勝、おめでとうございます！」
    - content:
        - fontWeight: bold
          content: ファンC
        - 「キング、次の勝利は何になりますか？」
    - キングヘイローは、そのファンの問いを鋭く捉えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ 皆様、少し静かにしてくださいまし！」
    - 場内は、すぐに静まった。
    - キングヘイローは満足げに頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次に、また一つの一流の決断を、皆様に告げますわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「短距離を二連勝したとはいえ、わたくしの次の目標は——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇賞（秋）ですわ！」
    - その決断は、静かな海面へ重い爆弾を投げたようだった。観客たちの議論が、一気に湧いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのときは、皆様も応援に来てくださいまし！」
    - キングヘイローは観客席へ改まって一礼し、まだひそひそ話す観客たちを残して、そっと去った。

# スプリンターズS非一着。高松宮記念勝利後のみ
sprt_sta_lose_s:
  title: スプリンターズステークス後・諦めない
  lines:
    - 誰もがキングヘイローの強気な一着を予想していた。だが、意外は起きた。
    - 観客から実況、解説、そして%YOU%の驚いた目の中で、キングヘイローは逆転された。
    - 実況は、結果の放送を忘れかけた。
    - 一着を逃したキングヘイローに、ファンと触れ合う気はもうなかった。
    - %SEX%は耳を伏せ、疑う目と惜しむ目の無数の視線から、抜け出そうとした。
    - content:
        - fontWeight: bold
          content: ファンA
        - 「キング！ 次はもっと良くなる！」
    - 突然、一人のファンがキングヘイローの背中へ叫び始めた。
    - content:
        - fontWeight: bold
          content: ファンB
        - 「そうです！ 一流のキングが、ここで倒れてたまるものですか！」
    - content:
        - fontWeight: bold
          content: ファンC
        - 「必ず、走り続けてください！」
    - ファンたちは自発的に、キングヘイローを励まし始めた。
    - キングヘイローは目に光を浮かべて振り返り、ますます賑わう観客席を見た。
    - %SEX%は、支えてくれる皆へ深く一礼した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「適性はあまり良くないかもしれませんわ。ですが次は、天皇賞（秋）へ参りますわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのときは、皆様も応援に来てくださいまし！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「皆様、ありがとうございます！」
    - キングヘイローは再び観客席へ改まって一礼し、まだひそひそ話す観客たちを残して、そっと去った。

# 自暴自棄状態を解消したときに発生
race_end_rise_again:
  title: 再起
  lines:
    - %YOU%は観客席に座り、コースを疾走するキングヘイローを、緊張して見つめていた。
    - 高松宮記念の敗北以来、どれほどトレーニングと話し合いに付き合ったか分からない。その末の、逆襲の機会だった。
    - キングヘイローの調子は、以前よりかなり良い。%YOU%の見立てでは、このレースに勝てば、かつての状態へ完全に戻れる。
    - レースの様子から見て、キングヘイローはすでに大きな優位を築いていた。
    - content:
        - fontWeight: bold
          content: 実況
        - 「キングヘイローが来ました！ 走路を変えて敗れ、今は立て直したこの%UMA%は、最後の勝利を手にし、かつての屈辱を洗い流せるか？」
    - content:
        - fontWeight: bold
          content: 実況
        - 「最後の勝者は、キングヘイロー！」
    - %YOU%は力をすべて失い、椅子にへたり込んだ。
    - キングヘイローが周囲の観客と実況の悲鳴を無視し、柵を越えて観客席へ来るまで。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ 一流のキングヘイロー、戻ってまいりましたわよ！」
    - 顔を上げると、自信に溢れた笑顔があった。つられて、%YOU%も笑った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行きましょう、学園へ戻りましょう！」
    - キングヘイローは周囲の驚いた目の中で、%YOU%を起こした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自信を取り戻せたのは、%CALLNAME%のおかげでもありますわ。どうか、支えて帰らせてくださいまし！」

# シニア級・10月第1週。自暴自棄なし
ws_breaking_dawn:
  title: 夜明け
  lines:
    - %YOU%がトレーナー室で次のメニューを組んでいると、突然、扉が強く叩かれた。
    - キングヘイローがかなり慌てて飛び込んできた。いつものノックはない。
    - %SEX%は携帯を持ったままだ。今も、着信が入っている。
    - キングヘイローのお母様だった。
    - 不思議に思いながら見ていると、キングヘイローはそばへ寄り、応答を押した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご用は何ですの？」
    - キングヘイローの声は、かなり冷たかった。
    - 回線の向こうのお母様はしばらく黙り、それから口を開いた。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「短距離で、いくつか勝ったそうね？」
    - 言葉はまだ硬い。だが声は、以前より少し和らいでいた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ、いくつか勝ちましたわ。」
    - キングヘイローは慎重に言った。かつてのように、勝ち方を急いで説明しはしなかった。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「短距離走路で優位を取るなんて、道を外しているわ！」
    - 言い終えると、お母様は電話を切った。
    - キングヘイローは携帯を持ったまましばらく固まり、突然大笑し始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ 結局、わたくしの勝ちですわね！」
    - %YOU%は、少し分からなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの方は、そう簡単には折れない人ですわ。ああ言えたということは、成績を、一応は認めたということですわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それが、面子を守ったうえでできる、最大の譲歩ですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「結局、一流のキングが確かな実力で、あの方の疑念を押し潰した、ということですわね。」
    - キングヘイローはまた、鼻高々にトレーナー室を出ていった。
    - 胸の奥に埋めていた一つの気がかりが、どうやら丸く収まったらしい。

# 自暴自棄なし
before_tenn_sho_s:
  title: 天皇賞（秋）前
  lines:
    - キングヘイロー、スペシャルウィーク、セイウンスカイが揃ってパドックに現れたとき、場内は一瞬で歓声に沈んだ。
    - 波の中心にいる三人の%UMA%は、もうこの光景に慣れていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スペシャルウィーク、スカイ。中距離はあまり得意ではありませんわ。ですが見ていてくださいまし。わたくしが一番にゴールする瞬間を！」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「みんな元気そうだね。じゃあ青ちゃん、怖がって一着を譲っちゃうかな？ 冗談だよ～」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「今度の勝利は、絶対に譲りませんよ！」
    - 三人の%UMA%は、ほとんど同時に宣戦布告をした。
    - それからしばらく固まり、いっせいに笑い出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今度のレース、楽しみですわ。どうか、全力で走ってくださいまし！」

# 自暴自棄なし
tenn_sho_end_s:
  title: 天皇賞（秋）後・友情は魔法
  lines:
    - レースは終わった。
    - 「黄金世代」の三人の%UMA%はゴールの外で荒い息をつき、高揚を鎮めていた。
    - どの観客の目にも、この一戦に全力を尽くしたことは明らかだった。
    - 当の%THEY%は、勝敗をあまり気にしていないように見えた。
    - ただ、いちばん疲れているのは、中距離適性が優秀とは言えないキングヘイローだろう。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「みんな、全力でしたね。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「青ちゃん、策で勝つつもりだったんだけど、みんな強すぎて。これじゃ青ちゃんも全力出すしかないよ。」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「えへへ、全力のスカイさんも、けっこう怖いですよ。」
    - スペシャルウィークは舌を出した。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「ところでキング、どうして黙ってるの？ わたしたちの気勢に負けちゃった？」
    - セイウンスカイは目を転がし、まだ息を整えているキングヘイローへ話しかけた。
    - キングヘイローはそれを聞き、振り返り、無表情でスペシャルウィークとセイウンスカイへ歩いてきた。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「キングさん、何をするつもりですか？ こわいです……」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「ねえねえ、レースはもう終わったよ。キングは休んだ方がいいんじゃない？」
    - キングヘイローは、少し緊張した二人の視線の中を、%THEY%の前まで歩いた。
    - それから両腕を伸ばし、スペシャルウィークとセイウンスカイを抱きしめた。
    - 二人の%UMA%の体が、一瞬で固まった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとう。わたくしの相手でいてくれて。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「あの、わたしたちもキングに感謝してるよ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スカイの皐月賞、スペシャルウィークの日本ダービー。どちらも、忘れられないレースですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのレースにあなた方がいなければ、短距離へ転じようとは思わなかったかもしれませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「決心する勇気をくれて、本当にふさわしい道を見つける助けにもなってくれましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「同じ年にデビューし、一緒に走れたことを、光栄に思いますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうか、これからも一緒に走ってくださいまし。この先も、よろしくお願いいたしますわ。」
    - 言い終えると、キングヘイローは二人を放し、%THEY%へ改まって一礼した。
    - 観客席から、激しく長い歓声が爆発した。

ws_until_end:
  title: 最後の一瞬まで
  lines:
    - キングヘイローが中距離へ戻り、天皇賞の盾を手にしてから、%SEX%の名声は日に日に増していた。
    - %YOU%は背もたれに寄り、伸びをした。傍らではキングヘイローが、見栄など気にせずソファを占領している。考え込む。
    - acc: 1
      content: 「キング、天皇賞も取った。少し、肩の力を抜いてもいいんじゃないか？」
    - 正直、成績はもう十分に眩しい。レースをいったん頭から外し、生活を楽しむときだと思っていた。
    - ところがキングヘイローはソファから跳ね、%YOU%の前に立った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、何を言いますの？ シニア級はまだ二か月残っていますわ。皆にキングを忘れさせるわけにはいきませんわ！」
    - どうやら、まだ休む気はない。
    - acc: 1
      content: 「では、マイルチャンピオンシップに出たいのか？」
    - あのレースは十一月後半。目立った強敵もおらず、キングヘイローに向いている。
    - ところがキングヘイローは首を横に振った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのレースは露出が限られていますわ。存在すら知らない人も、いるかもしれませんわ。」
    - %YOU%は、さらに考えた。
    - acc: 1
      content: 「まさか、ジャパンカップか？」
    - 由緒ある中距離G1で、全程二千四百メートル。国内外の注目も高い。
    - だが日本ダービーのときのキングヘイローが、まだ目に残っている。この距離に耐えられるか、疑わしい。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ジャパンカップは、たしかに悪くない選択ですわ。スペシャルウィークも、今度のジャパンカップへ出ると言っていましたわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが、あのレースはキングの候補には入っていませんわ。」
    - %YOU%は少し気勢を失った。
    - acc: 1
      content: 「残るはダート、長距離、あまり知名度のないレースだな。」
    - ところがキングヘイローの目が、ぱっと輝いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうですわ！ %CALLNAME%の当たりですわ！ さすがわたくしのトレーナーですわ。」
    - acc: 1
      content: 「ダート？ キング、頭がおかしくなったのか？」
    - %YOU%は手を伸ばして額を触った。熱はない。
    - キングヘイローは腹を立てて、手を避けた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ダートとは何ですの！ おかしいのは%CALLNAME%の方ですわ！」
    - キングヘイローは、少し気持ちを整えた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングが言っているのは、長距離ですわ！」
    - %YOU%は考えた。年末、長距離、知名度——この三つを満たすレースは、たぶん……
    - acc: 1
      content: 「有馬記念か？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのとおりですわ！ 有馬記念ですわ！ キングは有馬記念に出ますわ！」
    - %YOU%はますます、頭がおかしくなったと思った。
    - acc: 1
      content: 「あれは長距離だぞ。去年の菊花賞を忘れたのか？」
    - 半年のスタミナ走に苦しませ、最後には力尽きて昏倒させた、あのレースだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「忘れるはずがありませんわ！ ですが菊花賞は三千メートル、有馬記念は二千五百メートル。それにキングは、一年前のキングではありませんわ！」
    - その理由には、あまり説得力がなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに有馬記念は極めて有名ですわ。勝てば、皆がキングをずっと覚えていてくれますわ！」
    - キングヘイローの本当の目的には、聞こえなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「何より、スペシャルウィーク、スカイ、グラスワンダー、エルコンドルパサーが、皆あのレースに出ますわ！」
    - %YOU%は、ぱたりと固まった。
    - キングヘイローが何より大切にしている四人の相手が有馬記念で激しく競い、キングヘイローだけが観客として応援する……
    - それは、たしかに辛い。
    - 長いこと考え、決心した。
    - acc: 1
      content: 「では、スタミナのトレーニングを日程に載せるぞ。」
    - スタミナのトレーニングの四文字を聞き、キングヘイローは無意識に半歩下がった。
    - だが同期と舞台を共にする引力が、恐れに勝った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうぞ。世界に証明してみせますわ。キングヘイローこそ、疑いようのない黄金世代一の%UMA%だと！」

# 自暴自棄なし＆天皇賞（秋）一着でのみ
before_arim_kin_s:
  title: 有馬記念前
  lines:
    - 「黄金世代」が揃って有馬記念へ出る知らせは、すぐに広まった。大量のファンが、「最後の盛宴」を見ようと押し寄せた。
    - 五人の%UMA%はどれも実力があり、戦績も眩しく、それぞれに巨大なファン層を抱えている。
    - だから観客席は、人で溢れた。
    - トレーナーとして優先入場があるのが幸いだった。なければ、熱狂するファンの下で前列など取れなかっただろう。
    - すぐにレース前の登場が始まり、「黄金世代」の五人がパドックに現れた。
    - 場内の空気が一気に点火した。ほとんどの観客が立ち上がり、大声で叫んだ。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「あら、ずいぶん賑やかですこと。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングの魅力は、並大抵ではありませんわね！」
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「うわあああ、人がいっぱい！ みんな、すごく人気なんですね。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「わたしたちの幕引きだもんね。このあとは、こんな機会ないよ。」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「そんな悲しいこと言わないでくださいdesu！」
    - 五人の%UMA%は笑った。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「そういえば、今みたいにみんなで走るの、もう長いことありませんでしたね。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「だからこそ、今度は逃さないでおこう。」
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「では、きちんと勝負いたしましょう？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ キングが勝つ未来は、もう見えていますわ！」
    - 五人の%UMA%は津波のような歓声の中、パドックを離れ、順にゲートへ入った。

# 有馬記念一着。天皇賞（秋）一着。自暴自棄なし
arim_kin_win_s:
  title: 有馬記念後・永遠の一流
  lines:
    - content:
        - fontWeight: bold
          content: 実況
        - 「最後の勝者はキングヘイロー！ 黄金世代の最強が、今現れました！」
    - 実況の声は、ほとんどヒステリックだった。
    - レース前よりはるかに熱い歓声が、場を席巻した。
    - だがよく聞けば、レース前とは違う——
    - 「一流！ 一流！ 一流！」
    - content:
        - fontWeight: bold
          content: 実況
        - 「場内が『一流』と斉唱しています！ キングヘイロー選手は、まさに一流の実力を見せましたね！」
    - コースでは、キングヘイローが急な息をようやく整えたところだった。実況のその一言で、観客が「一流」を斉唱しているのに気づいた。
    - ゆっくりと、一流の長距離出走者・キングヘイローは口を開き、間の抜けた笑みを浮かべた。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「うわあ！ キング、壊れちゃいます！」
    - エルコンドルパサーは、かなり大げさに叫んだ。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「コンドル？ 礼儀は忘れないでくださいまし？」
    - エルコンドルパサーは末脚の力を使って逃げた。だがグラスワンダーにも余力があったらしい。二人の%UMA%は、どんどん遠ざかった。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「ちょっとちょっと、グラスさんとコンドルさん、落ち着いてください！」
    - スペシャルウィークは、まだ間の抜けた顔のキングヘイローを見、遠ざかる二人を見、足を踏み鳴らして追った。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「やっぱり青ちゃんがいちばん冷静だね～」
    - セイウンスカイは口笛を吹き、数人が去った方向へゆっくり歩いていった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「スカイ。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「え、一流のキング、目が覚めた？ え？ 何するの……待って！」
    - キングヘイローは我に返り、短距離選手のスパートでセイウンスカイへ飛び、逃げ遅れた%SEX%を抱きしめた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとう。わたくしの相手でいてくれて、こんな盛大で光栄な舞台を贈ってくれて。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「うわあ、青ちゃん分かったから、先に離してくれない……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「離す、ですって？」
    - キングヘイローは聞き返した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「焦らないでくださいまし。」
    - 言い終えると、遠くの三人の背中へ頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほら、%THEY%はあんなに遠い。だから、あなたを抱くしかありませんわ。」
    - 懐のセイウンスカイのこわばった顔を見て、キングヘイローは吹き出した。
    - それから力を込めて一度抱きしめ、相手を放した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご存知でしょう。わたくしは長距離が得意ではありませんわ。今は、もう精根尽き果てていますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから、あなた方への感謝は、すべてあなたに託しますわ。わたくしの感謝を持って、%THEY%を追いかけてくださいまし？ わたくしがしたように、熱情をもって、ですわよ。」
    - セイウンスカイは仕方なく肩をすくめた。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「まさか青ちゃんが、いつか伝令に使われるなんてね……でも今日は従うよ。一流のキングだからね～」
    - セイウンスカイは二言、からかってから、腹を立てて追ってくるキングヘイローをかわし、煙のように逃げた。
    - キングヘイローは同期四人の背中を見て、また抑えきれず大笑した。

# 有馬記念非一着。天皇賞（秋）一着。自暴自棄なし
arim_kin_lose_s:
  title: 有馬記念後・上下を求めて
  lines:
    - 案の定、長距離への適性は、想像ほど足を引っ張らない、というわけではなかった。
    - %SEX%は全力でスパートした。だが長距離を長く耕してきた同期たちは、楽々と交わした。
    - レースは終わった。キングヘイローは一着を取れなかった。
    - 観客は、当然、勝者のために歓声を上げた。
    - だがキングヘイローの顔に、挫折も悔しさも見えなかった。
    - むしろ、かなり満ち足りている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まさかですわ。皆、こんなに強くなっていましたのね。」
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「当然です！ 今のコンドルは、グラスさんの魔の手から逃げられますよ？」
    - エルコンドルパサーは電光石火で傍らのグラスワンダーの尻尾を掴み、二つに分けて結び始めた。
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - 「コ……ンドル？」
    - 結び終える前に、グラスワンダーは振り返っていた。
    - エルコンドルパサーは即断し、飛び出した。
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - 「見ててください、コンドルの速さですdesu！」
    - グラスワンダーは恐ろしい気勢を纏って追い、二人の背中はどんどん遠ざかった。
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - 「ちょっとちょっと、グラスさんとコンドルさん、落ち着いてください！」
    - スペシャルウィークは遠ざかる二人を見、足を踏み鳴らして追った。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「え？ もう青ちゃんとキングだけ？」
    - セイウンスカイもキングヘイローも、少し呆れていた。
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「ところでキング、負けをあまり気にしてないみたいだね？」
    - キングヘイローは笑った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「実は今回は、もう一度皆と走りたかっただけですわ。勝敗は、それほど大事ではありませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、キングの主戦場は短距離ですわよ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まあ、結末も決まっていたのですから、悲しむこともありませんわ。」
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「キング、けっこう達観してるね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただ、完璧なレースで完璧な句点を打てなかったのですから、完璧なカーテンコールで完璧な句点を打ちますわ！ 行きましょう、スカイ！」
    - キングヘイローは笑顔を収め、勝負服を改まって整え、相手たちが去った方向へ歩き出した。

# 有馬記念一着。天皇賞（秋）一着。自暴自棄なし。有馬記念の翌週
ws_dawn:
  title: 黎明
  lines:
    - 万人が注目した有馬記念が幕を下ろしたあとのある日、キングヘイローがトレーナー室へ来た。
    - %YOU%は顔を上げ、少し不思議そうに%SEX%を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、こちらへ。」
    - 立ち上がってそばへ行くと、%SEX%は携帯を開き、「お母様」と記された相手を選び、発信した。
    - ところが相手は、一瞬で出た。
    - キングヘイローの足元が乱れた。用意していた言葉を、全部忘れたらしい。
    - お母様も、同じように黙っていた。
    - しばらくして、キングヘイローはようやく口を開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お母様、有馬記念、勝ちましたわ。今のわたくしは、全距離に本当にふさわしい天才ですわ！」
    - キングヘイローは一息置き、続けて自慢し始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「短距離へ転じたのは、道を外したわけではありませんわ。お母様の前で、自分を証明したかっただけですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今はもう、お母様の認可など要りませんわ。新しい世代の頂点に、成長しましたわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よろしい、言いたいことは言いましたわ。それでは！」
    - お母様に話す隙を与えず、キングヘイローはそのまま切った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今度こそ、あの方の前で自慢しきれましたわ！」
    - キングヘイローは、かなり嬉しそうだった。
    - 携帯が、再び鳴るまで。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？ 今度は誰……」
    - 取り上げて、驚いた。お母様が、またかけてきたのだ。
    - %SEX%はしばらく迷い、それでも出た。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「ええ、あの日、実は現場にいたわ。見たわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「何ですって？」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「有馬記念の日、現場にいたわ。よく走っていたわね。」
    - %CHARA% は黙った。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「ずっと、あんなに厳しくして……今思うと、本当に申し訳ないわ。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「事業と名誉を、自分の子より大切にするべきではなかった。家出たあとも、引き戻そうとせず、叱り続けたのも、間違っていたわ。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「許してちょうだい、キング。」
    - キングヘイローはなお黙っていた。だが目に、揺れる涙の光が見えた。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「だから今は、お母さんの身分で頼むわ。そばへ戻ってくれない？」
    - %YOU%は心配そうにキングヘイローを見た。
    - 三年付き合ってきた。だがお母様が%SEX%と過ごした時間は、疑いなくこちらの比ではない。
    - しばらくして、キングヘイローは口を開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お母様。それに気づいてくださって、嬉しいですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが、お断りしますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これまでの軽視も、叱責も、傲慢も、許すことはできますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですがトレセンで、志を同じくする相手と、仲睦まじい空気に出会いましたわ。」
    - if: era.get('love:61') >= 75
      lines:
        - キングヘイローは%YOU%を一目し、手を握った。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それに、何より、ここにはわたくしの%CALLNAME%がいますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですから、もう戻りませんわ。」
    - お母様は、長いこと黙った。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「分かったわ。どうか、自分を大切にしなさい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いたしますわ。それでは、お母様。」
    - キングヘイローは電話を切った。
    - それから%YOU%の顔に残る心配を見つけ、吹き出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、わたくしが戻ると思いましたの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご安心を。キングは、絶対にトレセンを離れませんわ！」
    - それでようやく、%YOU%は少し安堵した。

# ランダムイベント
os_ramen:
  title: キングヘイローとラーメン
  lines:
    - %YOU%とキングヘイローは、外食の相談をしていた。
    - キングヘイローは何か思い出したように、%YOU%の手を掴んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！ ラーメンを食べに行きましょう！」
    - %YOU%はキングヘイローの目を、しばらく見つめた。
    - acc: 1
      content: 「本当か？ もっと一流の料理を選ぶと思っていたが。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おかしな話ですわ。キングはラーメンを食べたことがない気がしますの……ですがスペシャルウィークが何度も勧めるので、試してみたくなりましたわ。」
    - acc: 1
      content: 「では、一緒に行こう。キングがラーメン未経験とは、たしかに意外だな。」
    - そのあと、スペシャルウィーク推薦の店を見つけた。
    - 「伝説の大食らい」の目は、たしかに確かだった。
    - %YOU%もキングも、美食に沈んで抜け出せなくなった。
    - すぐに麺は底を見せた。キングヘイローは口を拭い、立ち上がった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、会計はわたくしが！ この食事はキングのおごりですわ！」
    - 言い終えると、前へ割り込んでいった。
    - %YOU%は急いで残りを片付け、後ろに続いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、見てくださいまし。銀行の貴賓カードですわ！ どの高級店でも、そのまま使えますのよ。」
    - キングヘイローは見せびらかすように黒いカードを振り、反応する前にレジへ飛び込んだ。
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このカードは使えない、ですって？」
    - 店員は冷や汗を拭い、もう一度言った。
    - content:
        - fontWeight: bold
          content: 店員
        - 「大変申し訳ございません。当店は現金のみで、カードは……」
    - %YOU%は急いで前へ出て、現金でキングヘイローの窮地を救った。
    - だが学園へ戻る道中、キングヘイローは一言も発しなかった。
    - acc: 1
      content: 「あの、少なくともラーメンは美味しかっただろう？」
    - 適当な話題のつもりが、口を開けばラーメンの話になってしまった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とても美味しかったですわ！ 次も、%CALLNAME%がキングを連れて行ってくださいまし。」
    - あの不調和な挿話は、全く気にしていなかったらしい。
    - %YOU%はそっと息を吐いた。

# ラーメンイベント後に発生。条件を満たせば同様にランダム
os_for_king:
  title: King のためのメニュー
  lines:
    - 近頃キングヘイローは、何かに憑かれたようにラーメンを欲しがる。
    - そこで%YOU%は%SEX%を連れて、またあの店へ行った。
    - 座らせ、すぐに注文した。
    - キングヘイローは、まだ迷っていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの、少々こちらへ。」
    - 選べずに、傍らの店員へ手を振ったらしい。
    - content:
        - fontWeight: bold
          content: 店員
        - 「おすすめをお聞きになりたいですか？」
    - content:
        - fontWeight: bold
          content: 店員
        - 「お客様は%UMA%ですので、隠れメニュー、一流のお客様だけのための『King特供・特大超豪華ラーメン』はいかがでしょう！」
    - 店員は言いながら、丼の大きさをだいたい示した。
    - その名を聞いた瞬間、%YOU%は嫌な予感がした。
    - 案の定、「一流」と「King」の二字を聞いたキングヘイローの目が、輝き始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、いかがですの。このラーメン、キングの気品にふさわしくありませんこと？」
    - 期待の目を見、いわゆる特大ラーメンの量を思った。
    - acc: 1
      key: select
      content: 「食べ過ぎは一流とは呼べないぞ。」（体力+10%、体重増加）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それもそうですわね。」
        - キングヘイローは丼の大きさを思い、落ち着いた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「では、%CALLNAME%と同じラーメンを一つ。」
        - すぐに、色も香りも良いラーメンが二杯運ばれてきた。
    - acc: 2
      content: 「実力を証明してみろ！」（体力+30%、体重大幅増加）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おー——っほっほっほ！ 『King特供・特大超豪華ラーメン』をくださいまし！」
        - 店員は命を受けて去った。そのときになって、キングヘイローは少し冷静になった。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「キングが一流の%UMA%であることは事実ですわ。ですがあの丼、どう見ても恐ろしい大きさですわよね！」
        - 迷い切らないうちに、特大超豪華ラーメンが運ばれてきた。
        - 盆と呼ぶべき丼と、小山のような麺と具を見て、二人とも少し驚いた。
        - content:
            - fontWeight: bold
              content: 店員
            - 「見た目は多いですが、かつて三人のお客様が楽々と完食なさいました。ちなみに、その三人も皆%UMA%です。」
        - 自分より先に征服した者がいると聞き、キングヘイローは焦り、先の疑念を脇へ置いた。
        - 迷わず征服の旅へ飛び込んだキングヘイローを見て、%YOU%はさらに驚いた。
        - 結果は明白だった。キングヘイローは食べ過ぎた。
        - 目の前の丼は空になり、半分にも満たないスープだけが残っていた。
        - その最後のスープまで干そうとしている。だが、もう限界だった。
        - 「特大ラーメン征服成功名簿」へキングヘイローを加えると店員が約束してから、ようやく安心して店を出た。
        - 傍らで腹を膨らませたキングヘイローを見て、%YOU%は溜息をついた。
        - 減量系のトレーニングを追加する必要がありそうだ。

# ランダム
ws_fc_train:
  title: 一流のトレーニング種目
  lines:
    - %YOU%はトレーニング場に立ち、時間を見た。
    - 約束より五分過ぎている。キングヘイローは、まだ現れない。
    - 待ちきれなくなったころ、ようやく現れた。
    - 予想に反し、トレーニングウェアではなく、普通の制服だった。
    - acc: 1
      content: 「キング、どうして……」
    - キングヘイローは少し慌てて、言葉を遮った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、今日の走りは一流の種目ではありませんわ。走り以外を組んでくださいまし！」
    - その要求を聞き、しばらく分からなかった。
    - acc: 1
      content: 「具合が悪いのか？ 今日は休んでもいいぞ。」
    - キングヘイローは少し顔を赤らめた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングは無事ですわ！ 至って元気ですわ！」
    - その様子を見て、ますます見当がつかなくなった。
    - そのとき、ルームメイトのハルウララが、のんびり歩いてきた。
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - 「キングちゃんに%CALLNAME_52%、おはよう〜。あれ、キングちゃん、どうして制服なの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「待ちなさい、ウララさん——」
    - まずいと気づき、急いで飛びつき、ハルウララの口を押さえようとした。
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - 「ウララ、思い出したよ〜。キングちゃん、昨日、ト・レー・ニングウェアを全部洗っちゃったんだよね？」
    - 一歩遅れた。%SEX%の秘密は、ハルウララに底まで曝されていた。
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - 「えへへ、じゃあキングちゃんのトレーニング、邪魔しないね〜。ばいばい！」
    - ハルウララは素早く逃げ、石化したキングヘイローと、どうしていいか分からない%YOU%だけが残った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よろしい。今は%CALLNAME%も事情をご存知ですわ。では、次はどう組まれますの？」
    - キングヘイローは呆れた顔でハルウララの背中をしばらく見つめ、振り返って、観念したように%YOU%を見た。
    - 制服のキングヘイローを見て、考えた。
    - acc: 1
      key: select
      content: 「では、スタミナのトレーニングだ。」（スタミナ+15）
      lines:
        - タイヤ引きの折り返しを組んだ。
        - 制服のキングヘイローは、たくさんの視線を集めた。
    - acc: 2
      content: 「では、パワーのトレーニングだ。」（パワー+15）
      lines:
        - ウェイトのトレーニングを組んだ。
        - 制服のキングヘイローは、たくさんの視線を集めた。
    - acc: 3
      content: 「では、根性のトレーニングだ。」（根性+15）
      lines:
        - 階段跳びを組んだ。
        - 制服のキングヘイローは、たくさんの視線を集めた。
    - acc: 4
      content: 「では、賢さのトレーニングだ。」（賢さ+15）
      lines:
        - キングヘイローをトレーナー室へ連れ帰り、レース映像を見るメニューを組んだ。
    - acc: 5
      content: 「だが、キングの走りが見たいんだ。」（スピード+15、好感-5）
      lines:
        - キングヘイローは嫌そうに%YOU%を一目した。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「待っていなさい！」
        - キングヘイローは消えた。
        - すぐに、また現れた。今度は勝負服だった。
        - スパート走を組んだ。勝負服のキングヘイローも、たくさんの視線を集めた。

# 好感+10、賢さ+10、ランダム
os_auto_graph:
  title: キングのサイン会？
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「早く！ ぐずぐずは一流ではありませんわ！」
    - %YOU%はキングヘイローに、遊園地の入口まで引きずられた。
    - acc: 1
      content: 「おいキング、日程にこんな項目はないぞ！ まあ、たまに気を抜くのも——」
    - ぼやきつつも、現実は認めた。肩の力を抜き、遊ぼうとしたところで、後ろから裾を掴まれた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日は遊びに来たのではありませんわ！ ちゃんと用事がありますのよ。」
    - そう言われて、%YOU%は混乱した。
    - よく考えても、今日の日程と遊園地の関係が分からない。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、思い出しましたわね？ あんな大事なことを、忘れるはずがありませんわ。」
    - 熱を込めた目に見つめられ、少し落ち着かなかった。
    - そこで深く考えたふりをし、はっと悟った顔をした。
    - acc: 1
      content: 「分かった！ キングの頭がおかしくなったんだ！ 記憶が乱れている！」
    - 苦心の末にその結論を得たのを見て、キングヘイローは腹を立て、一蹴りした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう！ あちらを見なさい！」
    - 指先を辿ると、「キングヘイロー一流サイン会」のポスターがあった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「思い出しましたわね？ 今日はキングのサイン会ですわ！ こんな大事を忘れるなんて、キングは怒っていますわ！」
    - %YOU%は再び迷った。
    - ふくれ面のキングヘイローは相手にせず、日程表を開いた。
    - 「重要」と記された「キングサイン会」の日時は、明日だった。
    - 日程表を見、むくれて顔を背けたキングヘイローを見て、吹き出した。
    - acc: 1
      content: 「分かった分かった、悪い。では行こうか？」
    - わざとからかい、笑いを堪えて予定の会場へ連れていった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふん、それでよろしいですわ！」
    - キングヘイローはサイン机の後ろの椅子へどかりと座り、高慢な姿勢でファンを待った。
    - 一時間経っても、ファンは一人も来なかった。それでも、その姿勢を崩さなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうして誰も来ないのですの？ 一流のキングに、そんなに人気がないとでも？」
    - ようやく、おかしいと気づいた。
    - そのとき%YOU%は前へ寄り、日程表を見せた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これは何……待ちなさい、明日？」
    - 笑いも収まりかけていた。だが呆気に取られた顔を見て、また吹き出した。
    - キングヘイローは黒い顔で、笑い止まない%YOU%を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「笑ってはいけませんわ！ 実は今日は、サイン会の現場を下見に来たのですわ。この会場、キングは気に入りましたわ！」
    - もう退路まで用意していたのかと、少し驚いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%がこんなに長く下見に付き合ったことを考え、キングを笑った罪は不問としますわ！ 学園へ戻りましょう！」
    - それを聞き、急いでこの傷心の地からキングヘイローを連れ出した。

# 根性+20、賢さ-10、ランダム
ws_laugh:
  title: 声を上げて笑う
  lines:
    - キングヘイローはいつものようにトレーナー室の扉を開けた。だが%YOU%は、何かがおかしいと察した。
    - いつもの元気がない。
    - acc: 1
      content: 「どうした、キング？ 具合が悪いのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流のキングが、風邪を引きましたわ……喉も嗄れましたわ！」
    - 声は、いつもよりずっと低かった。
    - それを聞き、急いで白湯を注いだ。
    - acc: 1
      content: 「今日は休め。早く治すのが正道だ。」
    - キングヘイローは感謝の目で一目し、白湯を受け取った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが何より、以前のように声を上げて笑えないことが、いちばんですわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっ……けほっ……」
    - 目が、少し暗くなった。
    - 何か言う前に、キングヘイローは気勢を立て直した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「風邪でも、一流の大笑を出してみせますわ！」
    - 止める暇もなく、キングヘイローは笑い始めた。
    - 上げかけた手は、力なく落ちた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほ……けほっ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お……けほっ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほっほ！ けほっ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はは、キング、成功ですわ！ けほっ……」
    - 異常なほど喜ぶキングヘイローを見て、いずれ賢さのトレーニングを追加しようと決めた。

# 好感+20、賢さ+5、ランダム
os_art_exhibit:
  title: 一流の美術展
  lines:
    - キングヘイローに手を引かれ、近くの美術館の展覧へ行った。
    - 作品の本当の内実など分かる気がしない。それでもキングヘイローは、強引に連れてきた。
    - 周囲の絵を一瞥し、欠伸をした。
    - 元気のない%YOU%を見て、キングヘイローは少し不機嫌になった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちょっと！ 気を引き締めなさい！」
    - acc: 1
      content: 「一流のキングに、これらの絵を解説してもらいたい！」
    - 妙案を思いついた。
    - キングヘイローは考え、気品を保ったまま頷いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ではキングが解説して差し上げますわ！ よく聞きなさい！」
    - divider: true
      content: ⏰
      position: left
    - 認めざるを得ない。キングヘイローには見解があり、道中の解説はかなり透徹していた。
    - 最後に、色鮮やかな一枚の前で足を止めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、よく見てくださいまし！ この絵は抽象派の画風で、色と線の組み合わせに重きを置いていますわ。意はかなり深いと言えましょう。」
    - 解説を聞き、前へ寄って眺めた。
    - 色は鮮やか、線は粗く奔放で……
    - acc: 1
      content: 「では、何を描いているんだ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抽象というものは、具体的なイメージなどないものですわ。」
    - キングヘイローは、少し呆れて説明した。
    - %YOU%は傍らの注釈を見た。
    - acc: 1
      content: 「作者は幼稚園の子ども？ 題は『大好きなパパとママ』？」
    - 目を見開き、まだ滔々と解説しているキングヘイローを見、絵を見た。
    - こう見ると、線はたしかに、大人二人が子ども一人の手を引いているように見える。
    - %YOU%はそっとキングヘイローを突いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「勝手にキングを遮ってはいけませんわ！」
    - 注釈を指した。
    - キングヘイローは沈黙した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このお子さま、若くして抽象画派の精髄を会得していますわね！ 大したものですわ。」
    - %YOU%は、その取り繕いの力に親指を立てた。

# 恋慕90以上の結末
ge_love:
  title: 真情は、ここにある
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、トレーナー、こちらへ来てくださいまし。」
    - すべてが終わったあとの、ごく普通の日。キングヘイローが突然、トレーナー室へ飛び込んできた。
    - 見当がつかず立ち上がり、そばへ寄った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「近すぎますわ！ キングから離れなさい！」
    - 本気で怒る前に、少し距離を取った。
    - キングヘイローは少し嫌そうに一目し、勝手に携帯を取り出した。
    - acc: 1
      content: 「つまり、それが欲しかったのか？ 一本の電話か？」
    - ますます分からなかった。わざわざトレーナー室へ来て……電話をかけるため？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「焦らないでくださいまし。キングがこうするのには、キングの考えがありますわ。まずは聞いていなさい。」
    - キングヘイローは悪戯っぽく瞬き、発信した。
    - ツー……ツー……
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「キングね。近頃レースがあった覚えはないわ。どうして急に？」
    - 回線の向こうはお母様だった。なぜこんな私的な電話を、わざわざトレーナー室でかけているのか、%YOU%にも分からない。
    - まして%SEX%は見せびらかすように、スピーカーにしている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ、お母様。今度はレースではありませんわ。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「では何？ 学園が不満で、家へ戻りたいの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全く違いますわ。今度お電話したのは、お母様に一事をお伝えしたかったからですわ。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「早くしてちょうだい。時間がないの。」
    - キングヘイローは深く息を吸い、振り返って%YOU%を一目した。何か決心したようだった。
    - %YOU%はますます分からない。何を告げるつもりだ。レースのことか？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お母様、わたくしは……わたくしのトレーナーと、結婚いたしますわ。意見を伺いに来たのではありません。事実を告げるだけですわ。」
    - 回線の向こうは沈黙した。トレーナー室も、同じだった。
    - %YOU%は目を見開いた。キングヘイローがお母様へ、自分との関係を直接告げるとは、計算の外だった。
    - まして結婚を、普段あまり折り合いの良くないお母様へ、直接口にするとは。
    - 外向的で明るいキングヘイローでも、それを口にしたあとは少し萎えていた。
    - %SEX%の顔は真っ赤で、慌てた目が、%YOU%の頬と画面のあいだを行き来していた。
    - 結局、沈黙を破ったのはお母様の方だった。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「トレーナーの%SIR%は、そばにいるのでしょう？ 携帯を渡してちょうだい。%YOURSEX%と話したいわ。」
    - キングヘイローは何か小さく呟いたが、それでも携帯を渡した。
    - %SEX%はかなり心配そうに見ている。お母様が責め立てるのではないか、と案じているらしい。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「キング、先に出てちょうだい。トレーナーの%SIR%と二人で話すわ。」
    - キングヘイローは動かず、焦った目で%YOU%を見つめていた。
    - 背を軽く叩き、大丈夫だと示した。それでようやく、不安げにトレーナー室を出た。
    - 扉が閉まる音とともに、お母様が口を開いた。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「あなたが、キングのトレーナーね？」
    - acc: 1
      content: 「はい。」
    - 考え、深く息を吸い、勇気を出して、もう一言足した。
    - acc: 1
      content: 「同時に……%SEX%の恋人でもあります。」
    - 先ほどの大胆な宣言への、旗幟鮮明な立場表明だった。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「まあ、キングを連れてあれほど眩しい成績を残して、ご苦労さま。」
    - 予想に反し、小さな突き上げには、何も言わなかった。
    - acc: 1
      content: 「では、異論はないのですか？」
    - 驚きのあまり、胸の内がそのまま口に出た。
    - 強硬に反対されると思っていた。キングを連れて駆け落ちするか、とまで考えたほどだ……
    - だがお母様は、聞いても大きな感情の波すら見せなかった。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「あの子は、もうわたくしを気にかけなくなっているわ。こんな大事すら相談せず、通告のように宣言するなんて……」
    - お母様は突然、感慨を帯びて言った。
    - 口を開き、何か言おうとして、結局出なかった。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「トレーナーの%SIR%、言いたいことはだいたい分かるわ。わたくしは、失敗した母親ね？」
    - 過ちを、あんなに率直に認めたことに、少し驚いた。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「本来なら、わたくしがいちばん近い人間であるべきだった。育て、コースへ導き、%SEX%はわたくしを偶像にする……」
    - お母様は止まらず、独り言のように続けた。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「なのに相応の関心を与えず、かえって自分の考えで%SEX%を縛ろうとした。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「だから%SEX%は、家出のようにトレセンへ行った。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「まだ、引き戻す機会はあった。惜しいことに、あのときのわたくしはまだ目が覚めていなかった。%SEX%が勝ちを重ねても、進歩を喜ばず……」
    - 回線の向こうが、数秒黙った。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「理不尽とすら言える批判と嘲笑を、成績へ向けたわ。」
    - %YOU%は黙って聞いていた。その場に、自分もいたからだ。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「当時は何とも思わなかった。今振り返ると、愧じ入るばかりよ。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「%SEX%は何度も機会をくれた。わたくしはそれを一つずつ叩き返し、回を追うごとに薄情になった。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「だから結局、%SEX%はもう、機会をくれなくなった。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「そのあと、関係を直そうとしなかったわけではない。ただ、もう可能性はなかったわ。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「ふふ、惜しい、と言うより、自業自得の方がふさわしいかしら。」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「本来なら最も近い身内が、今は他人同然……」
    - お母様は、夢を見るように語っていた。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「だから、キングのトレーナー。」
    - 突然、声が引き締まった。%YOU%は無意識に耳を立て、集中した。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「どうか、%SEX%を大切にしてちょうだい。わたくしにその機会はないと分かっている。だから、代わりに%SEX%を愛して……」
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「それが、唯一の要求。いえ、お願いよ。」
    - acc: 1
      content: 「任せてください。必ず大切にします。%SEX%は、私にとってもかけがえのない存在ですから……」
    - %YOU%は真剣に言った。
    - 回線の向こうから、かすかな笑いが漏れた。
    - content:
        - fontWeight: bold
          content: %CHARA%のお母様
        - 「ええ、それで安心したわ。お幸せに。用事があるから、これで。」
    - 言い終えると、お母様は切った。
    - 後悔や愧じを口にしても、骨の髄までは高慢な人なのだろう。
    - そう思い、キングヘイローの携帯をそっと置いた。
    - acc: 1
      content: 「キング、入っていいぞ。」
    - すぐにキングヘイローが扉を開け、入ってきた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「で、お母様は何と？」
    - キングヘイローは寄りかかり、腕を抱いた。
    - acc: 1
      content: 「機密だ。」
    - お母様の言葉を思い、悪戯っぽく瞬いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングに隠すつもりですの？ 罰しますわ——」
    - キングヘイローは勃然とし、遠慮なく膝へ座り、耳を引っ張ろうとした。
    - みっともなく逃げ続け、二人とも精根尽きるまで。
    - 傍らで睨むキングヘイローを見て、ふとお母様の託しを思い出した。
    - 突然手を伸ばし、キングヘイローを抱きしめた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？」
    - 反応する前に、懐へ引き入れていた。
    - 続けて、やや強引に唇を塞いだ。
    - %SEX%は慌てて抗おうとした。だがしっかりと抱きしめ、離すことを許さなかった。
    - もっとも、%UMA%が本気で逃れようとすれば、トレーナーの力などとても止められない。
    - すぐにキングヘイローは抗うのをやめ、同じように抱きしめ、こちら以上の熱情で口づけを返した。
    - どれほど経ったか分からない。やがて腕を解き、%SEX%が自然に肩へ寄りかかるのを許した。
    - acc: 1
      content: 「キング。」
    - 突然、恋人の名を呼び、トレーナー室の甘い静けさを破った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？」
    - キングヘイローは怠惰に応じた。
    - acc: 1
      content: 「愛している。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしも……わたくしも、ですわ。」
    - キングヘイローは一瞬固まったらしい。しばらくして、かなり小さな声でそう答えた。
    - %YOU%はわずかに身を傾け、長い髪の香りを嗅いだ。
    - ずっと、こうであるべきだったような気がした。

normal_end:
  title: 互いを引き立てて
  lines:
    - 三年、千を超える日夜のあと、%YOU%とキングヘイローは一流の物語の終わりを迎えた。
    - キングヘイローは連続して多くのレースに勝った。それだけで、なりたかった一流の%UMA%になるには十分だった。
    - 惜しいことに、一代の伝説であっても、幕は下りる。
    - キングヘイローは強気に、あるいはそれほど強気ではなく、レースへ連れていってくれと頼んだ。だが、もう難しいと分かっていた。
    - かつての風雲児は二線へ退き、後の新世代がバトンを受け、輝き続ける。
    - それが、いわゆる世代の意味なのかもしれない。

# BE。高松宮記念非一着かつ恋慕75未満・好感225未満、または重度の自暴自棄がさらに悪化、または任意の自暴自棄を育成終了まで残した場合
be_force:
  title: 追い出され
  lines:
    - %CHARA% は、%YOU%の生活から消えた。最初からいなかったかのように。
    - %YOU%には、どうすることもできなかった。
    - 担当の%UMA%をこんなふうに失くしたトレーナーは、疑いなく追い出され、世に唾まれるだろう。
    - 耳障りな通知音が突然鳴り、ほとんど跳ね上がった。
    - 少し心を据え、携帯を開いた。
    - divider: true
      content: 秋川理事長(6)
      position: left
    - 「%YOURNAME%トレーナー。勤務中の重大な職務怠慢につき、学園理事会は一致して、あなたを解雇することに同意しました。」
    - 「即日、理事長室にて書面の解雇通知を受け取ってください。」
    - 「三営業日以内に随身の荷物を整え、駿川秘書と業務の引き継ぎをしてください。」
    - 「学園内のいかなる事も外界へ公表しないよう望みます。トレセン学園は、追及の権利を留保します。」
    - 「あなたの怠慢が重大な結果を招いたため、以降の就職申し込みは受け付けません。」
    - 「トレセン学園理事長、秋川やよい。」
    - divider: true
    - %YOU%は携帯を強く握りしめ、指の節が白くなるまで。
    - 今の落ちぶれは、とうに予想していた。だが本当に起きたとき、あまりに突然だった。
    - かつては馴染み、今はひどく寂しいトレーナー室を、最後にもう一周見渡し、長く息を吐き、多くはない荷物を持って出ていった。
    - こうして去ることが、いちばんの選択なのかもしれない。
