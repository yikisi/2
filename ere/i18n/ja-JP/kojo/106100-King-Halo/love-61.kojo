# @file キングヘイロー - 恋慕
# @author 牛蛙煲
# @author Claude (翻訳)
49:
  title: 当局者迷
  lines:
    - color: %COLOR%
      content: 一日のトレーニングが終わり、キングヘイローは疲れて寮へ戻った。
    - color: %COLOR%
      content: 同室のハルウララは、すでに夢の中だった。
    - color: %COLOR%
      content: キングヘイローは気持ちよさそうに眠るハルウララを一目見て、自分も欠伸をし、眠気を覚えた。
    - color: %COLOR%
      content: 簡単に身支度を済ませ、キングヘイローもベッドへ入った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おやすみなさい、ウララさん。」
    - color: %COLOR%
      content: キングヘイローは、ごく小さな声で、すでに眠っているハルウララへおやすみを告げた。
    - color: %COLOR%
      content: ところがハルウララは寝返りを打ち、へらへらと間抜けな笑いを始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （まったく、また寝言ですわ。）
    - color: %COLOR%
      content: キングヘイローは慣れた様子で寝返りを打ち、眠ろうとした。
    - if: era.get('cflag:52:招募状态') === 1
      lines:
        - color: %COLOR_52%
          content:
            - fontWeight: bold
              content: %URARA%
            - 「えへへ……キングちゃん……と%CALLNAME_52%……」
        - color: %COLOR%
          content: キングヘイローの眠気は、一瞬で消えた。
        - color: %COLOR%
          content: %SEX%はいきなり起き上がり、壁に向かって寝ているハルウララを、恐れを込めて見た。
        - color: %COLOR_52%
          content:
            - fontWeight: bold
              content: %URARA%
            - 「王子さまとお姫さまみたい……しあわせ……えへへ……」
        - if: era.get('love:52') >= 75
          color: %COLOR_52%
          content:
            - fontWeight: bold
              content: %URARA%
            - 「えへ……」
        - if: era.get('love:52') >= 75
          color: %COLOR_52%
          fontSize: 0.8rem
          content:
            - fontWeight: bold
              content: %URARA%
            - 「んぅ……」
    - if: era.get('cflag:52:招募状态') === 0
      lines:
        - color: %COLOR_52%
          content:
            - fontWeight: bold
              content: %URARA%
            - 「えへへ……キングちゃん……と%SEX%のトレーナー……」
        - color: %COLOR%
          content: キングヘイローの眠気は、一瞬で消えた。
        - color: %COLOR%
          content: %SEX%はいきなり起き上がり、壁に向かって寝ているハルウララを、恐れを込めて見た。
        - color: %COLOR_52%
          content:
            - fontWeight: bold
              content: %URARA%
            - 「王子さまとお姫さまみたい……しあわせ……えへへ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ウララさん？ まだ起きているんじゃありませんこと？」
    - color: %COLOR%
      content: ハルウララは寝返りを打ち、眠ったままの顔をキングヘイローの方へ向けた。
    - if: era.get('cflag:52:招募状态') === 1 && era.get('love:52') >= 75
      color: %COLOR%
      content: 目の周りが少し湿っているようだったが、キングヘイローは見ていなかった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （やはり寝言……）
    - color: %COLOR%
      content: キングヘイローは長い溜息をつき、枕へどさりと倒れ込んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （早く眠らなければ……明日も%CALLNAME%とトレーニングですもの。）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （%CALLNAME%……%CALLNAME%……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （まったく、ウララさんがどうしてそんな寝言を……失礼ですわ！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （でも、%CALLNAME%のことを思うと……）
    - color: %COLOR%
      content: キングヘイローは、全身を言いようのない熱が包むのを感じた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （どうして……%CALLNAME%を思うだけで、こんなに熱いの……）
    - color: %COLOR%
      content: キングヘイローはベッドの上で何度も寝返りを打ち、%YOU%を頭から追い出そうとした。
    - color: %COLOR%
      content: だが、失敗した。
    - color: %COLOR%
      content: すぐにキングヘイローの頭の中は、%YOU%の声と笑顔でいっぱいになった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （%CALLNAME%……キングの頭から出ていきなさい！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （熱い……耐えられませんわ……）
    - color: %COLOR%
      content: キングヘイローは、そっと手を下へ伸ばした。
    - color: %COLOR%
      content: %SEX%は、なぜそうするのか自分でも分からず、ただ本能に従っただけだった。
    - color: %COLOR%
      content: 続いて、%SEX%の指が落ち着きなく動き始めた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （あぁ……%YOURNAME%……）
    - color: %COLOR%
      content: %SEX%は完全に理性を失い、全身の力が指へ集まっていく。
    - color: %COLOR%
      content: キングヘイローの体は、痙攣するように弓なりになった。
    - color: %COLOR%
      content: %SEX%の動きはどんどん大きくなり、静かな夜に、かすかな水音が響いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （あぁ……）
    - color: %COLOR%
      content: 最後の頂が訪れると、キングヘイローの体は大げさなほどに曲がった。
    - color: %COLOR%
      content: 溢れ出す潮が、%SEX%の衣類と寝具を濡らした。
    - color: %COLOR%
      content: そのあとキングヘイローはベッドへ力なく倒れ、ゆっくり意識を取り戻した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （わたくし、なにをして……恥ずかしいですわ！）
    - color: %COLOR%
      content: キングヘイローは今起きたことを悟り、思わず顔を覆った。
    - color: %COLOR%
      content: %SEX%はできるだけ静かに衣類と寝具を替え、もう一度眠ろうとした。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （それに、どうして%CALLNAME%を思い浮かべたの？ まさか……）
    - color: %COLOR%
      content: キングヘイローは突然目が覚め、反射的に起き上がった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まさか、本当に%YOURNAME%のことが好きだなんて——」
    - color: %COLOR%
      content: 声を出したと気づいたキングヘイローは、慌てて自分の口を押さえた。
    - color: %COLOR%
      content: %SEX%はすぐに傍らのハルウララを確認し、まだぐっすり眠っているのを見て安心した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （ウララの言うとおりですわ。自分では気づいていなくても、わたくしはもう%YOURNAME%を好きになっていた……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （でも、%YOURNAME%はわたくしをどう見ているのかしら？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （ふん、キングのトレーナーとして、キングを好きでないなど、%YOURNAME%の職務怠慢ですわ！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （こうして、ゆっくり%YOURNAME%にキングの本心を示しましょう。キングはそう簡単に負けませんわ！）
    - color: %COLOR%
      content: キングヘイローは得意げにそう思い、すでに%YOU%との恋を既成事実のように扱っていた。
    - color: %COLOR%
      content: こうして疲れ切った%SEX%は寝返りを打ち、深く眠りについた。

74:
  title: 恐怖ではない
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、キングは疲れましたわ！」
    - 一区切りのトレーニングが終わると、キングヘイローはわざと地面に座り、疲れを訴えた。
    - %YOU%は手元のトレーニング計画を、不思議そうに見直した。
    - acc: 1
      content: 「キング、まだ始まったばかりですよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とにかく疲れましたの！ %CALLNAME%にキングを遊びに連れていく権利を授けますわ！ 早く連れていってくださいまし！」
    - キングヘイローは立ち上がろうとしない。%YOU%はどうにもならず、%SEX%の要求を受け入れた。
    - divider: true
      content: ⏰
      position: left
    - acc: 1
      content: 「……それで、キングはこういう遊びが好きだったんですか？」
    - %YOU%が頷いたあと、キングヘイローは%YOU%を引きずって近くの商店街まで小走りし、薄暗い建物の前で止まった。
    - 傍らのキングヘイローは%YOU%の腕をしっかり掴み、平気を装いながら、すでに震え始めていた。
    - 建物の入口には看板があり、「超一流のお化け屋敷」と書いてある。
    - %YOU%は、キングヘイローがここへ来たがった理由をだいたい察した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「行きましょう！ 超一流のキングは、ちっとも怖くありませんわ！」
    - だから%YOU%は肩をすくめ、明らかに強がっているキングヘイローを連れてお化け屋敷へ入った。
    - 「超一流のお化け屋敷」の名に恥じず、始まりから十分に怖かった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「きゃああああああ——！」
    - キングヘイローは驚いて、%YOU%の腕を強く掴んだ。
    - acc: 1
      content: 「おい、それはただの小道具だよ！」
    - %YOU%は道を塞ぐ骸骨の小道具を、一蹴りでどけた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わ、分かっていますわ！ キングは%CALLNAME%の度胸を試していただけですのよ！」
    - キングヘイローはそう言いながら、手の力は少しも緩まなかった。
    - acc: 1
      content: 「では、出ましょうか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だめですわ！ 来たからには征服しなければ！」
    - %YOU%は強がるキングヘイローにあまり構わず、腕を二度引いてみたが動かず、結局キングヘイローに抱きつかれたままにした。
    - キングヘイローは何度も驚いたあと、潔く目を閉じ、手の力はますます強くなった。
    - だがキングヘイローが傍にいるせいで、%YOU%はこのお化け屋敷もそれほど怖くないと思い始めた。
    - より怖い場面では、%YOU%も反射的にキングヘイローを抱きしめた。
    - もちろん、すぐに気恥ずかしくなって離した。
    - だが遊びながら、%YOU%はキングヘイローの恐怖が、完全に本物ではないと感じ続けていた。
    - それほど怖くない場面でも、キングヘイローはそれらしい悲鳴を上げ、隙に%YOU%をより強く抱きしめる。
    - そして%YOU%が途中で出ようと相談するたびに、キングヘイローは腹の底から拒んだ。
    - キングヘイロー自身も、お化け屋敷の一部になってしまったようだ。こんなに奇妙だ。
    - 今のキングヘイローはしおらしいが、%YOU%にもそれを口にする勇気はなかった。
    - まして、この異常な様子について、%YOU%の中には大胆な推測が育ち始めていた……
    - divider: true
      content: ⏰
      position: left
    - まもなく旅程は終わり、%YOU%とキングヘイローは再び陽の下へ出た。
    - %YOU%は、まだ目を固く閉じ、腕を鉗子のように締めているキングヘイローを見て、困った。
    - acc: 1
      content: 「キング？ もう外ですよ。」
    - キングヘイローはおそるおそる目を開け、本当にお化け屋敷の外だと知り、いつもの様子に戻った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おー——っほっほっほ！ キングがこの場所を征服しましたわね！」
    - %YOU%は呆れ、キングヘイローを置いて自慢話を聞かせたまま去ろうとしたが、キングヘイローは相変わらず親密に%YOU%を抱いていた。
    - お化け屋敷でのすべてを思い合わせ、%YOU%は大胆で急進的な結論に達しつつあった。
    - では、腹を割って話すべきか。
    - acc: 1
      key: update
      content: 「本当は、キングはそれほど怖くなかったでしょう？」（関係を進める）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%はなにを言っているんですの？」
        - キングヘイローは、%YOU%の言葉を聞き取れなかったふりをした。
        - この鎧を破るには、本心が要るらしい。
        - acc: 1
          content: 「一流のキングが、本当にここまで怖がりますか？」
        - %YOU%は、まだ自分に強く巻きついているキングヘイローの腕を見た。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そんなことありませんわ、これはただ……」
        - acc: 1
          content: 「キング、わたしも好きです。」
        - この駆け引きで、%YOU%は大胆な攻めを選んだ。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わたくしは無意識に……待って待って？ なんですって？」
        - キングヘイローはまず呆け、それから信じられない様子で聞き返した。
        - acc: 1
          content: 「キングも同じでしょう？ 抱きついているとき、ほとんど一体化しそうでしたよ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うわあああ！ 待って待って！ あ……あまりに直球ですわ！ %CALLNAME%、キングが整理するまで待ちなさい！」
        - %YOU%の大胆な攻めは、キングヘイローにかなりのクリティカルを与えたらしい。
        - %YOU%は真っ赤なキングヘイローを見て、もう我慢できず、手を伸ばしてキングヘイローを抱きしめた。
        - キングヘイローは%YOU%に見抜かれ、少し決まり悪そうに俯いた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%がキングの気持ちに先に気づくなんて！ とりあえず、キングのことをよく分かっていると認めますわ！」
        - キングヘイローは顔を逸らせたが、より熱い抱擁で%YOU%に応えた。
        - キングヘイローの言葉を借りれば、「一流の恋」は、こうして結ばれた。
    - acc: 2
      content: 「一流のキングでも、怖がるんですか？」（まだ進めない）
      lines:
        - %YOU%は、今は感情を抑えることにした。
        - 案の定、キングヘイローは聞いて激怒し、すぐに%YOU%を放した。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わたくしが怖がるはずがありませんわ！」
        - %YOU%はキングヘイローが離した隙に逃げた。
        - すぐに追いつかれたが、キングヘイローは言い争いばかりに気を取られ、お化け屋敷での甘さを忘れたらしい。
        - だが%YOU%には、キングヘイローの落胆がはっきり伝わってきた。

89:
  title: 拙くて甘い計略
  lines:
    - 今日は天気がよく、%YOU%はトレセン学園の道を歩き、気分がよかった。
    - だが、なぜか今日は何か大きなことが起きそうな気がしてならなかった。
    - %YOU%は周りで戯れる%UMA%たちを見ても、何が起きるか見当がつかない。
    - %YOU%がキングヘイローの、こそこそした姿を見つけるまで。
    - %YOU%の担当%UMA%は、包装の綺麗な小さな箱を抱え、%UMA%の群れの間を駆け抜けていた。
    - acc: 1
      content: 「おい、キング！」
    - %YOU%はキングヘイローの注意を引こうとしたが、%SEX%はすでに遠ざかっていた。
    - どうやらトレーナー室の方へ向かったらしい。
    - %YOU%は急いで歩調を速めた。
    - だがトレーナー室に着いても、キングヘイローの姿はなかった。
    - キングヘイローが持っていた小さな箱だけが、ソファの上にきちんと置かれている。
    - %YOU%は取り上げて見た。外面に役立つ情報はなく、普通のギフトボックスだった。
    - キングヘイローがいない今、%YOU%は贈り物を戻した。
    - %YOU%とキングヘイローの関係はすでに親密だが、勝手に%SEX%のものを開けるのはやはりよくない。
    - だから%YOU%はいつものように仕事に入った。
    - トレーナー室の扉が叩かれるまで。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！ いますか？」
    - 肯定の返事を得ると、キングヘイローは扉を開けてトレーナー室へ入ってきた。
    - %YOU%が顔を上げると、キングヘイローの小さな顔は赤く、とても興奮しているように見えた。
    - %SEX%が先に持ってきた小さな箱を思い合わせ、%YOU%にある考えが浮かんだ。
    - あの箱は、キングヘイローが%YOU%へ持ってきた贈り物なのでは？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わあ、これはなんですの！」
    - %YOU%が口を開こうとしたとき、キングヘイローはソファのギフトボックスを見て、ひどく驚いた様子を見せた。
    - だが明らかに作り物だ。
    - %YOU%は眉を寄せ、何か言おうとしたが、キングヘイローはすでにその箱へ飛びついていた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%がキングに贈った贈り物ですわね。ではキング、遠慮なくいただきますわ！」
    - acc: 1
      content: 「キング、わたしは……」
    - %YOU%が何か言おうとしたとき、キングヘイローは振り返り、警告の目で%YOU%を見た。
    - だから%YOU%は残りの半分を飲み込んだ。
    - %YOU%は少し恐ろしくなりながら、キングヘイローが先ほどの興奮した様子に戻り、包装を慌てて剥くのを見た。
    - 箱の中は、小さなケーキだった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わあ、%CALLNAME%はどうしてキングがちょうど食べたい味だと分かったんですの！」
    - キングヘイローはすぐに小さなケーキへ攻め込み、ひどく焦っているように見えた。
    - %YOU%は傍らで見て、ひそかに首を振った。
    - 突然、キングヘイローの目が輝き、動きが止まった。
    - %SEX%はこっそり%YOU%を一瞥し、それからひどく驚いたふりで、残ったケーキへ指を入れた。
    - そしてケーキの中から、きらきら光る小さな品を取り出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、この贈り物には、別の意図があったんですの？」
    - その小さな品は、紛れもなく指輪だった。
    - 続いてキングヘイローは指輪を拭き、強引に%YOU%の手へ押しつけてきた。
    - %SEX%は右手を%YOU%へ差し出し、左手で顔を覆ってひどく恥じらう様子を作り、同時にわずかな隙間からこっそり%YOU%を見ていた。
    - %YOU%はキングヘイローのその様子と、手元の指輪を見て、ようやくキングヘイローの意図を理解した。
    - キングヘイローはすべてを用意し、%YOU%に逃げ道すら残していなかった……
    - こうまで主体的で強いとは。さすがキングヘイローだ。
    - %YOU%は溜息をつき、指輪を取り上げ、キングヘイローの右手をそっと握った。
    - acc: 1
      key: update
      content: 指輪を%SEX%の薬指に嵌めた。（関係を進める）
      lines:
        - キングヘイローがここまで芝居を打った以上、%YOU%も正面から拒みにくい。
        - まして、なぜ拒む必要があるのか。
        - 今日のことがなくても、%YOU%はいつかキングヘイローへどう求婚するかを考え始めていたかもしれない。
        - そして今日の出来事は、キングヘイローの気持ちを疑いなく証明した。
        - だから%YOU%は、キングヘイローのこの気持ちを受け取ることにした。
        - acc: 1
          content: 「これから一緒に歩み、生涯を共にしましょう！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はい！」
        - すべてを主導したのはキングヘイローで、%YOU%は流れに乗っただけだが、キングヘイローの目はすでに赤く潤んでいた。
        - %YOU%は指輪を嵌めたキングヘイローの右手を、大切なもののように慎重に握った。
        - そのあと%YOU%は、キングヘイローの深い視線の中で、口づけした。
    - acc: 2
      content: 指輪を%SEX%の親指に嵌めた。（まだ進めない）
      lines:
        - 惜しいことに、キングヘイローは最後の一手を読み損ねた。
        - %YOU%もキングヘイローを深く慕ってはいたが、このタイミングはあまり適切ではない気がした。
        - だから%YOU%は、局面を崩す手を見つけた。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、どういうつもりですの？ 指を間違えましたわ、本当に愚かですわね！」
        - キングヘイローも%YOU%がそうするとは思っていなかったらしく、一時、心が乱れた。
        - acc: 1
          content: 「いいえ、キング。間違えてはいません。」
        - acc: 1
          content: 「親指に指輪を嵌めるのは、強者と実力の象徴ですよ？」
        - キングヘイローは無理に手を%YOU%から引き、恨めしそうに%YOU%を見た。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「風情がありませんわ！ ちっとも一流じゃありませんわ！」
        - %YOU%が口を開く前に、キングヘイローはまっすぐトレーナー室を出ていった。
        - %YOU%には、キングヘイローの落胆がはっきり伝わってきた。

99:
  title: 真心は些事に宿る
  lines:
    - 最近、ある事情で%YOU%の仕事量が大幅に増えていた。
    - 期限内に終えねばならず、%YOU%はトレーナー室内で徹夜の残業を強いられた。
    - 連日働き詰めにしたあと、%YOU%はようやくすべての仕事を終え、家へ帰って休めることになった。
    - だが今の%YOU%の意識は、すでに少し朦朧としている。
    - %YOU%は重い足取りで家の方へ歩き、鍵を出したのに、どうしても鍵穴に入らない。
    - 鍵穴は%YOU%の目の前で急に扉ほども大きくなり、柔らかな光を放っていた。
    - そして今、鍵穴の中央から人影が覗いている。
    - %YOU%は「これなら楽に合わせられる」と思い、手の鍵を目の前の人影へ突き出した。
    - ところが、鍵穴が口を開いた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: 「鍵穴」
        - 「%CALLNAME%、どうして今ごろ帰るんですの？ 電話も出ないし、心配で死にそうですわ！」
    - %YOU%は大いに驚いた。鍵穴が口を利いた！
    - %YOU%は手元の鍵を握りしめ、鍵穴へ反撃しようとした。
    - 惜しいことに、%YOU%の体力も気力もすでに尽きていた。
    - %YOU%は目の前の鍵穴へ、まるごと倒れ込んだ。
    - 意識が消える直前、%YOU%の体は柔らかい何かにつかまった。
    - 同時に、焦った呼び声が聞こえた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: 「鍵穴」
        - 「%CALLNAME%？ %CALLNAME%！ どうしたんですの！」
    - そのあと、%YOU%は果てのない闇へ落ちた。
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、わたくしの声が聞こえますか？」
    - %YOU%はわずかに意識を取り戻し、自分がきちんとベッドに寝かされていると悟り、それから聞き慣れた声を聞いた。
    - キングヘイローは%YOU%が動いたのを見て、とても喜んだ。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はちみつ湯を淹れましたわ。少し飲みなさい？」
    - キングヘイローは%YOU%を%SEX%の腕に凭れさせ、もう一方の手でコップを%YOU%の口元へ寄せた。
    - 少し甘いが、温度はちょうどよかった。
    - キングヘイローが自分で温度を確かめてから持ってきたのだろう。
    - %YOU%は懸命にキングヘイローの好意をすべて受け取り、少し気分がよくなった。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%は、このまま休みなさい。キングがここで付き添いますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一流のキングは、世話だって一番上手に決まっていますわ。」
    - キングヘイローは優しく%YOU%を寝かせ、%YOU%はまた眠りに落ちた。
    - divider: true
      content: ⏰
      position: left
    - どれほど経ったか、%YOU%は突然目を覚ました。
    - 昨晩のことはぼんやり覚えているが、細部はほとんど消えていた。
    - 気力はまだひどく疲れていたが、体の疲れはかなり和らいでいた。
    - %YOU%が起き上がろうとすると、何かが邪魔をした。
    - %YOU%が振り返ると、ちょうどキングヘイローの寝顔と目が合った。
    - %SEX%は気持ちよさそうに眠り、今は大の字で%YOU%を抱いている。
    - %YOU%を一人にしておけず、一緒にいることを選んだらしい。
    - %YOU%はそっと手を伸ばし、%SEX%の頬を撫でた。
    - するとキングヘイローは小さく鼻を鳴らし、目を開けた。
    - acc: 1
      content: 「キング、わたしは……」
    - ところがキングヘイローは責めず、より強く%YOU%を抱きしめた。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次は、こんなに力を尽くさないでくださいまし。キングのためと思って？」
    - キングヘイローは、百年に一度あるかないかの恥じらいを見せ、%YOU%は目が離せなくなった。
    - だが%YOU%が反応しないのを見て、%SEX%はすぐに本性を現した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、昨夜は本当に……眠るときもちゃんと眠らず、キングを何度も起こして世話をさせたんですから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、あんなに疲れていたのに、キングに手を出そうとするなんて！」
    - キングヘイローは少し顔を赤らめた。
    - %YOU%は聞いてひどく気恥ずかしかった。その時間の記憶は、本当にまったくなかったからだ。
    - キングヘイローは怒ったふりをして顔を逸らせた。
    - だがすぐに振り返り、顔を赤らめて期待するように%YOU%を見た。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「埋め合わせとして、今日はキングが上ですわ！」
    - 言い終わるか終わらないかのうちに、キングヘイローは%YOU%の驚いた視線の中で、%YOU%の服を解き始めた。
  # キングヘイロー主導の調教へ

# 恋慕75以上かつハルウララの恋慕が75に達したとき
fraternity:
  title: 一流の博愛……
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、どうしてウララさんに手を出したんですの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もうキングがいるのに？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしてどうしてどうしてどうしてどうして」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしてどうしてどうしてどうしてどうしてどうしてどうしてどうしてどうして」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「…………」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう、あなたの気持ちは取り戻せないようですわ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でしたらこうしましょう。どうか、ウララさんをちゃんと世話してくださいまし。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%は無邪気で、素直で、優しい。触れた誰もを温めてくれますわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから、%SEX%に悪意を向けないでくださいまし。どんなに小さな悪意でも。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「キングはもちろんあなたを愛していますわ。ウララさんも、きっとそう。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「広い心は一流の証。だから、あなたたちの関係をあまり妬んだりはしませんわ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ですが代わりに、もう一度言います。どうか、どうか%SEX%を大切にしてくださいまし。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これで結構ですわ。今は、出ていっていただけますか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたくしは……少し、静かにしていたいのです。」
