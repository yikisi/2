# @file メジロパーマー - 恋慕
# @author Bottle
# @author KUN
# @author Claude (翻訳)
distance:
  # 恋慕24、外出で堤を散歩中に発生
  title: 距離感
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっうっ！」
    -
    - 黄昏、%YOU%は堤のベンチにへたり込み、一日の疲れを散らしている。傍らではパンを抱えてむしゃむしゃ食べるパーマー
    - %TEEN%の栗色のポニーテールの下に、白い後頸がちらりと見え、夕陽に青春の匂いを帯びている……
    - 気づいたとき、%YOU%はもう右手を伸ばしてパーマーの髪を払っていた
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？」
    -
    - パーマーは頬を膨らませて少し首を傾け、碧い瞳で好奇に%YOU%を見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「動かないでよ、くすぐったい」
    -
    - だが罪悪感が%YOU%に追いつく前に、%SEX%は首を振って抜け出し、髪の束が芳香を払う
    -
    - 「あ……ごめん」
    -
    - %YOU%はようやく、自分とパーマーの距離が公園の初恋カップル並みに近いことに気づく
    - %SEX%の周囲の温度がゆっくり上がるのがわかり、夕陽の色が%SEX%の耳の根へ静かに登るのも見える……
    - やっぱり、%SEX%も気づいたのか？
    -
    - acc: 1
      content: 「そろそろ帰ろう、パーマー」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ……うん」
        -
        - パーマーは髪を整えると、%YOU%の歩幅に付いてきた
    - acc: 2
      content: 「今気づいた。パーマーの髪、すごくきれいだな」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そ……そう？ メジロ家特製シャンプーの威力かもね、えへへ～」
        -
        - パーマーは笑って頭を掻く。褒め言葉への応対は得意な%SEX%なのに、声だけがこのとき微妙に変わる
        - それは%TEEN%の声で、羞恥と焦りを含んでいる
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「時間、遅くなってきたね、%CALLNAME%。一緒に帰ろ？」
        -
        - その変化を捉えた%YOU%は、蜜のように飲み込んで、軽い足取りでパーマーの後ろに付く

pre-happy:
  - color: %COLOR%
    content: 【もしある日、%CHARA%か%YOU%が眠ってしまったら……】

happy:
  title: 喜び
  lines:
    # 恋慕39、一方が昏睡のとき翌週に発生
    - 夜、トレーニング室
    - とっくに目が覚めた%YOU%なのに、帰りたくない。目の前のガラスに、絵のような景色が映っているからだ
    - 眠るパーマーが顔の半分を%YOU%の右肩に埋め、窓の向こうの満天の星を背景にしている
    -
    - 均一な呼吸、穏やかな顔。起こすのが忍びない深い眠りだ
    - だがトレーニング室は泊まる場所として最悪で、それに——寮の門限が近い
    -
    - acc: 1
      content: パーマーを抱いて寮へ運ぶ
    -
    - if: era.get('cflag:71:性别') !== 1
      content: 両手でパーマーの肩と腿を支え、%YOU%は男子高校生の言えない秘密を量っている
    - 最近ちゃんと減量してるな
    - 内腿の柔らかい感触、赤ん坊のように白い両腕、そしていつもの、パーマーだけのもの体香
    - %YOU%はどうしても、腕の中の愛らしい生き物と、レース場のしなやかな走りを結び付けられない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「せめて……寮の前で下ろしてほしいな……%CALLNAME%？」
    -
    - %YOU%はびくりとする。パーマーが急に目覚めたからではない。%YOU%が一度も聞いたことのない、拗ねるような声だったからだ
    -
    - 「今は自分で歩きたくないのか？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……うん」
    -
    - パーマーは顔を%YOU%の肩に埋め、片手で服をきつく掴む。心拍と一緒に速くなるのは、%SEX%の乱れた吐息だ
    - パーマーの鼻には、自分はどんな匂いなんだろう。%YOU%はふとそう思う
    - divider: true
    - 寮の入口から数メートル離れた木陰で、ようやく地に足の着いたパーマーは二歩歩いて引き返す
    - %YOU%が反応する前に、%SEX%は%YOU%の両肩に手を置き、唇の形を%YOU%の顔に残した
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ご、誤解しないでよ。これはお礼のキス……えへへ～」
    -
    - %YOU%はその場で固まり、パーマーが走って戻る後ろ姿を見る。揺れる髪が街灯の下で銀に光る

49:
  title: 温度
  lines:
    # 恋慕49昇格、翌ターンに発生
    - ある晴れ渡った午後
    - パーマーと四十分並走しただけで虚脱した%YOU%は、トレーナー室のソファに体を預けきる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はは、%CALLNAME%弱すぎだよ。%UMA%の四十分なんて、まだ始まったばかりだよ」
    -
    - 人間が並走する速度じゃない……そう反論したかったのに、疲れで一言も出ない
    - 目の前のパーマーは外套を大きく開け、ごくごく水を飲む
    - 少し濡れたスポーツブラの下に、汗の粒を付けた健康な腹筋が、呼吸に合わせて前後する
    - 目の前のパーマーを見ていると、手足は疲れと筋肉痛だらけなのに、体の奥の何かがゆっくり持ち上がる……
    -
    - acc: 1
      content: 「パーマー、喉が渇いて死にそうだ……」（まだ昇格しない）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あははは～」
        -
        - このみすぼらしい%YOU%を見て、パーマーは爽やかに笑い、半分飲んだ水を放る
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「じゃあ次も一緒に鍛えよう。進歩、期待してるよ、%CALLNAME%～」
    - acc: 2
      content: 「パーマー、マッサージしてくれないか？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え？ いいけど、人間にマッサージしたことないよ……痛いかも」
        -
        - %YOU%は手を振って構わないと示し、腿を叩いてここから、と伝える
        - パーマーは素直に%YOU%の前に跪き、慣れた手つきで腿の筋肉を叩き揉む。脚の快感がだんだん広がる……
        - 羞恥か別の理由か、パーマーもこのとき黙り、マッサージに集中しているように見えて、内心はきっとごちゃごちゃだろう
        - %SEX%のだんだん粗くなる吐息を聞き、桃のように紅潮した頬を見て、%YOU%の奥から灼ける欲求が絶えず湧いてくる
        - divider: true
        - 熱っぽい空気がしばらく続き、パーマーの手が止まる。視線が%YOU%の両腿の間に落ちる
        - ここの変化は、もう無視できない
        - acc: 1
          key: update
          content: 「もういい、パーマー……止めてくれ」（まだ昇格しない）
        - acc: 2
          content: 「いいよ……こっちも頼む」（関係を昇格）
          lines:
            - パーマーがびくりと顔を上げ、%YOU%と目が合った瞬間、瞳がとろけるように溶ける
            - %YOU%は掌を%SEX%の頭頂に置き、横髪を辿って頬へ撫で、%SEX%の目に残った最後の理性を拭う
            - 周囲は汗の湯気だ。パーマーは慎重に指で%YOU%のズボンのファスナーを摘まむ……
            -
            - そのとき、扉の外で「だ、だ、だ」と足音がした
            -
            - color: %COLOR_65%
              content:
                - fontWeight: bold
                  content: %HELIOS%
                - 「Hi！ 何の話？ 私も私も！」
            -
            - 扉の外の元気な%UMA%は想像より早く入ってきた。幸いパーマーはすでに立ち上がって%YOU%の前に立っている
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「な……なんでもないよ。そうだヘリオス、それより……」
            -
            - この状況で冷静になるのは無理だ。%YOU%はその場に座ったまま、後ろからパーマーの姿を眺める
            - %SEX%の腿の筋肉は逞しく曲線がきれいだ。今は緊張して揃え、互いに擦れている。残った興奮がまだ散っていないのだろう
            - 体に沿ったスポーツショーツが%SEX%の大きく丸い尻を完璧に描く。さすがメジロ家の体型管理
            - ……さっき続けていたら、中はどんな光景だったろう
            -
            - color: %COLOR_65%
              content:
                - fontWeight: bold
                  content: %HELIOS%
                - 「ごめんね、今から%65_CALL%をちょっと借りるね——早く来て%65_CALL%——byebye！」
            -
            - %YOU%が返事する前に、ヘリオスはだだだと走り出て、ここで何が起きていたか全く気づいていない
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「じゃあ……次はいい場所で続き話そう、%CALLNAME%？」
            -
            - 入口まで行ったパーマーが振り返り、三本の指で輪を作って開いた口に当て、出し入れの仕草をしてから、早足でヘリオスに追いつく
            -
            - 廊下から二人のふざけ合う声が聞こえる
            -
            - color: %COLOR_65%
              content:
                - fontWeight: bold
                  content: %HELIOS%
                - 「パー……%65_CALL%？ 顔、なんでそんな赤いの？」
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「見ない見ない、早く行こう～」

74:
  title: 約束
  lines:
    # 恋慕74昇格、翌週に発生
    - いつもの黄昏と同じく、仕事を終えた%YOU%はパーマーを連れて学園を散歩する
    - 今日のパーマーは少しおかしい。普段はよく話す%SEX%が、小さな歩幅で%YOU%の後ろに付き、話しかけても生返事だけだ
    -
    - %YOU%が疑問を口にする前に、パーマーのほうが先に開く
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、私たちの関係……ちゃんと話していい？」
    - # EXPNAME:25 = 性交回数
    # EXPNAME:26 = 睡姦回数
    - if: era.get('exp:64:25') > era.get('exp:64:26')
      lines:
        - 「……もういい頃だよね。あんなこと、こんなこと、しちゃったし」
        -
        - %YOU%が振り返ると、うつむいたパーマーがいる。前髪が両目を隠し、今の気持ちは読めない
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん、セフレ……みたいな。最近、そういう関係が嫌になってきて……ごめん」
        -
        - 「謝らなくていい。嫌なら、俺は——」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちがう！」
        -
        - パーマーは顔を上げ、碧い瞳でしっかり%YOU%を見る。その表情は、どこかで見た気がする——
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%じゃなかったら、昔のパーマーがここまで成長できたなんて想像できないよ。嫌なんて……あるわけない」
        -
        - %YOU%は思い出す。選抜レースの当日、%SEX%が自分の涙を拭いて顔を上げたときの表情だ——
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ただ……体だけの関係は、もう続けられない……%CALLNAME%も、そう思うでしょ？」
        -
        - これは心を決めた顔だ。相手に気持ちを伝えたい顔だ。昔は担当の約束で、今は——
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もし……この関係、もっと先に進めていいなら？」
    - if: era.get('exp:64:25') === era.get('exp:64:26')
      lines:
        - 「ん……あの日のトレーニング室の件——」
        -
        - 予想どおり、パーマーの顔が一瞬で真っ赤になり、両手で顔を覆って小さな声で頼む：
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わす……忘れて！ あの日のこと！」
        -
        - acc: 1
          content: 「ああ、気にしてない……謝るのはこっちだ。あのときは調子に乗りすぎた」
          lines:
            - パーマーは何も言わず、腕を組んで地面を見ている。頬はまだ赤いが、表情は何か決めたようだ
        - acc: 2
          content: 「あの日から気になってる。あの仕草……どこで覚えたんだ？」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「もう言わないで！」
            -
            - パーマーは焦って%YOU%の胸を叩き、痛がる声が出ると慌てて謝る。飼い主を喜ばせたい大型犬みたいだ
            - ……力だけは、特大のやつ
            -
            - 少し落ち着いたパーマーは手を背に回し、靴先を擦って、ゆっくり口を開く：
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、あのあとパーマーに何もしなかった。ありがたいよ。ただ……」
        -
        - パーマーは傍らの噴水を見る。水が思考のように噴き、一枚に繋がる
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%のこと考えるたびに、頭が回らなくなる。どうしたら気づいてもらえるかしか残らない……まるで——」
        -
        - %SEX%は言葉を切る。夕陽が%SEX%の横顔を絵のように美しく照らす
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「終わりのない直線を走ってるみたい。ゴールは目の前なのに、どうしても届かない」
        -
        - パーマーは手を伸ばして%YOU%の裾を掴み、指で揉む。触れられる実感を求めているみたいだ
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「後ろには、いつ追いついてくるかわからない……ほかの子」
    - パーマーは%YOU%の返事を待っている
    -
    - acc: 1
      key: update
      content: 「ごめん……今は応えられない」（まだ昇格しない）
    - acc: 2
      content: 「うん、ここから始めよう……二人だけの道を」（関係を昇格）
      lines:
        - %YOU%はパーマーの手を取って前へ引き、%TEEN%の顔に驚きが一筋浮かんで、すぐわかったように目を閉じ、爪先立つ……
        - 青臭い口づけだった。唇と唇が触れた数秒で、恋の契約にサインする
        -
        - パーマーはすぐいつもの明るさを取り戻し、いつものように話しながら%YOU%と砂利道を歩く
        - 違うのは、半尺しか残っていない距離と、夕陽の下で組んだ十指だけ……

89:
  title: 陽だまり
  lines:
    # 恋慕89昇格、任意の外出
    - ある晴れ渡った休日、パーマーは%YOU%をメジロ家の庭へ連れてくる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お昼休みタイム！ %CALLNAME%、こっちこっち～」
    -
    - 広い寝室を抜けると、パーマーがバルコニー寄りの円いソファに半ば寝そべり、笑って%YOU%を手招いている
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ここ、パーマーが自分で考えた休憩スポットなんだ。屋上の陽と風もあるし、ベッドみたいに楽だし。すごいでしょ？」
    -
    - 柔らかい羽毛に体を沈めたとたん、部屋の香りが微風に乗ってゆっくり流れてくる
    - パーマーは息を合わせて%YOU%の傍へ寄り、腕に触れる優しさは羽毛以上、肩へ来る%TEEN%の気配は香り以上だ
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あったかい……ここで一生寝てられそう～」
    -
    - パーマーは体を伸ばし、頬を%YOU%の肩で往来させてから、呼吸を緩め、%YOU%と一緒に束の間の静けさを味わう
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……パーマーと結婚したら、子ども何人欲しい？」
    -
    - 突然口を開いたパーマーが、半睡の朦朧から%YOU%を引き上げる
    -
    - acc: 1
      key: update
      content: 「ばか言ってる。今それを話すのは早い」（まだ昇格しない）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はは、それもそうだね」
        -
        - パーマーは%YOU%の腕を抱きしめ、顔を埋める。ほどなく深く眠る……
    - acc: 2
      content: 「わからないな。何人いても、ここなら収まるだろ？」（関係を昇格）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん……お祖母さまが言ってた。私たちが望むなら、子どもは全員ここで育てて、メジロ家が衰えないようにって」
        -
        - %YOU%がパーマーを見ると、%SEX%の視線は%YOU%の前胸を越えて窓の外へ向かっている。メジロ家の芝では、子どもたちが陽を受けて走っている
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも……子どもたちを%CALLNAME%と一緒に、外のもっと広い世界で暮らさせるのも、いいかもね」
        -
        - %SEX%は眺めていた目を戻し、クッションから滑り落ちる。%YOU%も流れで横向きになり、%SEX%と四つ目が合う
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ごめん、今それを考えるときじゃなさそう……ひひっ～」
        -
        - %YOU%はパーマーの顔を見て、%SEX%の髪先を撫で、首を支えて少し首を傾けて口づける
        - 最初は唇の触れと軽い噛みだけだったのが、舌先の焦らしで互いの求めと吸いへ変わり、奥を積極的に探る……
        -
        - しばらくして、唾液の交換を一巡したパーマーの目はもう蕩けている
        - %SEX%は舌を出して荒い息をつき、温かい吐息に淫らな匂いが混ざり、まだ余韻に沈んでいるようだ
        - if: era.get('cflag:64:0') !== 1
          content: パーマーは白いシャツを着て、豊かな胸が押し合い、開いた襟の下に谷が見える
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……いいよ。したいなら、声は小さくね……%SIBLINGS%たちに聞こえたらまずいよ」
        -
        - acc: 1
          key: sex
          content: %YOU%はパーマーの前胸のボタンを一つずつ外していく……
        - acc: 2
          content: 「見つかったらまずいだろ……今はだめだ」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「そっか。じゃあ手、握って我慢してね～」
            -
            - パーマーは%YOU%と十指を組み、それからゆっくり婚後の展望をつぶやく……

99:
  title: 錠
  lines:
    # 恋慕99、一週間性行為なし
    - color: %COLOR%
      content: ねっとりした恋に沈んだトレセンの%UMA%たちには、恋人と逢えない時間がある
    - color: %COLOR%
      content: そんなとき、%THEY%のルームメイトは息を合わせてちょうどいい頃に部屋を空け、%THEY%に私時間を残す——カツラギも例外ではない
    -
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「おい、%104_CALL%。二周走ってくる。門限ちょっと前に戻る……長くするなよ」
    -
    - color: %COLOR%
      content: %CALLNAME%と肌を重ねてから、もう何日になるだろう
    - color: %COLOR%
      content: 閉まる音を聞いたパーマーは焦ってパジャマを解き、上半身を灯りに晒す
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「は❤️……は❤️……は❤️……」
    -
    - color: %COLOR%
      content: いつものように、パーマーは上から下へ自分の肌を撫で、腰が動きに合わせて苦悶するように捻れる
    - color: %COLOR%
      content: パンツが汚れる前に脱ぎ、指が内腿を划り、人魚線から花弁へ……
    - color: %COLOR%
      content: でも……この不甲斐なさはなんだろう。パーマーは手を止める
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    -
    - color: %COLOR%
      content: パーマーは気づく。自分の体は、%CALLNAME%が遠くにいるとき歓びを感じたがらない。少しでいい……
    - color: %COLOR%
      content: %CALLNAME%の口づけ一つ、首筋への触れ、耳元の吐息一筋
    - color: %COLOR%
      content: あるいは服の匂い、髪の香り、寝る前の小さな声……なんでもいい
    - color: %COLOR%
      content: 堪えきれないパーマーは秘部を押さえて興奮を封じ、もう一方の手で%CALLNAME%へ電話を掛ける……
    -
    - acc: 1
      key: update
      content: 「お掛けになった電話は、ただいま掛かりにくくなっております」（まだ昇格しない）
    - acc: 2
      content: 「もしもし？ パーマー、どうした？」（関係を昇格）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「な……なんでもない。%CALLNAME%の声、聞きたかっただけ」
        -
        - color: %COLOR%
          content: %CALLNAME%の返事をもらった瞬間、パーマーは指を動かし始め、濡れ脹ぼった豆の上で円を描く……
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%の声が……あるだけで、なんか……安心するんだよね……は～」
        -
        - color: %COLOR%
          content: スイッチの入ったパーマーは羞恥を忘れ、両脚を開いて%CALLNAME%を腕に迎える想像をし、腰で指に合わせる……
        -
        - acc: 1
          content: 「パーマーは悪い子だな……俺の声で、そんなこと」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ごめん……ん❤️……%CALLNAME%の声……優しすぎて、我慢できなくて……は❤️」
        - acc: 2
          content: 「パーマー、どこか具合悪いのか？ 息、乱れてるぞ」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「い……いじめないでよ、%CALLNAME%……ん❤️」
            -
            - color: %COLOR%
              content: パーマーは%CALLNAME%の仕草を真似て、自分の豊かな双乳を弄り、想像の大きな手に量られ、揉まれ、引き千切られる……
            - color: %COLOR%
              content: %CALLNAME%なら、指先で乳輪に円を描いて、乳首を焦らして勃たせて、最後は力を入れて吸う……
            - color: %COLOR%
              content: そのあとは、だいたい……
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「は❤️、は❤️……%CALLNAME%……どの体勢が一番好き？ ……するとき」
        -
        - acc: 1
          content: 「パーマーの顔が見える体勢が一番だ」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ちょっと……だけだよ。ずっと見られたら……恥ずかしい」
            -
            - color: %COLOR%
              content: そう言いながらも、パーマーは膝を胸まで上げ、一番入りやすい体勢で欲を誘う肉穴を晒す
            - color: %COLOR%
              content: %CALLNAME%がするように、パーマーは片手で両脚を抱え、もう一方の指を秘所へ入れて掻き混ぜ、溢れる汁に尻尾を汚させる
        - acc: 2
          content: 「後ろからパーマーの体を貰いたい」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「いいよ……何回でも」
            -
            - color: %COLOR%
              content: パーマーは身を返し、尻を高く上げ、尻尾を傍へ払い、蜜汁が両腿の間から垂れる
            - color: %COLOR%
              content: 指が秘所へ入り、%CALLNAME%の好きなリズムで出し入れ、出し入れ。腰と背が愛液の音に合わせて誘う弧に沈む
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あっ❤️、あっ❤️、あっ❤️～」
        -
        - color: %COLOR%
          content: 穴を侵されたパーマーはついに声を抑えきれず、喉から漏れる嬌声が重なる
        - color: %COLOR%
          content: %CALLNAME%との交わりを想像しながら、発情して動物のように快感を求める自分に興奮する
        - color: %COLOR%
          content: 頂点が近いところで、パーマーは突然速度を落とす。体はもう抽動して絶頂を求めているのに——
        -
        - color: %COLOR%
          content: どうしても……%CALLNAME%の許しが聞きたい
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、もう……いって……いい？」
        -
        - acc: 1
          key: orgasm
          content: 「いいよ」（性欲低下、やる気+1）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……んおっ❤️」
            -
            - color: %COLOR%
              content: 許しをもらった瞬間、パーマーは軽く動いただけ反射のように背を反らし、瞳がほぼ眼窩から浮く
            - color: %COLOR%
              content: 一筋の水が指の離れた穴から噴き、続いてパーマーの、呼吸を捉えられない下品な喘ぎ
            - color: %COLOR%
              content: しばらくして、パーマーは現場を簡単に片付けて布団へ潜り、余韻のまま%CALLNAME%とおやすみの甘い言葉を交わす
        - acc: 2
          content: 「だめだ」（性欲上昇、やる気-1）
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「え？ わ……わかった……あんまり待たせないでね」
            -
            - color: %COLOR%
              content: パーマーは身を返して布団に埋まり、体は熱いのに、両脚で抱き枕を挟んで%CALLNAME%におやすみを言う
        -
        - color: %COLOR%
          content: パーマーは気づいていない。いつも強気なルームメイトが、今は入口近くの洗面所で湯気を立てている
        - color: %COLOR%
          content: %SEX%が確信しているのは、体も心も、あの人の傍にしっかり錠を掛けられているということだ
        - color: %COLOR%
          content: それは%TEEN%が永遠に抜けられない、涙で形を刻み、蜜汁で鋳造された愛の錠

here:
  title: ここでもいいよ
  lines:
    # 条件：熱恋以上、2週間性行為なしで週を越えると発生
    - 映画館、%YOU%とパーマーは退屈そうに後ろの席に座る。映画より、互いのほうに気を取られている
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ついてこなくていいって言ったのに。ヘリオス、いつもつまらない映画に誘うんだよ。今度は自分で逃げたし……」
    -
    - そう言いながらも、今のパーマーは%YOU%の肩に凭れていて、この共有時間を喜びとしているのは明らかだ
    - スクリーンの光の下、眠たげなパーマーの横顔はひどく魅力的で、スカートの下の白い腿が%YOU%にぴったり付いている。手を伸ばせば届く……
    - そういえば、前に%SEX%を抱いたのはいつだっけ
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%？」
    -
    - 気づいたとき、%YOU%の手はもう%TEEN%の腿の上にあり、指先が裾へ入っている。パーマーは%YOU%の手背を押さえるが、押しのけはしない
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こういうの、帰ってから……しようよ。ここでは……」
    -
    - acc: 1
      content: 「もう限界なんだ……お願いだ、パーマー」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……そこまで言うなら」
    -
    - パーマーは左右を一瞥し、人がいないのを確かめてから、手を%YOU%の股間へ伸ばす。耳元の小さな喘ぎがだんだん急になる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「は……%CALLNAME%……すごい」
    -
    - %SEX%の手は生地の上でしばらく確かめてから、すでに充血して硬い%YOU%の性器を解放し、三本の指でゆっくり扱く
    - 快感が下半身で湧き、パーマーの唇から出る熱が耳へ入り、電流のように全身を痺れさせる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「は……は……%CALLNAME%……気持ちよさそう……」
    -
    - 上下、上下。パーマーは%YOU%の好きなリズムを知っているらしく、一心に手で奉仕しながら、優しく耳たぶに口づける
    - %SEX%は人差し指で先端から溢れた液を拭い、動きとともに淫らな水音を立て、だんだん速度を上げる……
    - 腕をパーマーの柔らかい胸がきつく貼り、耳の中を舌先が往来し、%SEX%の欲情を隠しきれない声が頭の中で響く……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「は、は、は……いいよ、出して……あとは任せて……は」
    -
    - 周囲はもう構っていられない。%YOU%はパーマーの抱擁の中で射精を迎え、肉棒は噴く一秒前に温かく包まれる
    - パーマーは身を屈めて肉棒を根まで口に呑み、喉で溢れる精を迎え、後頭部を%YOU%に押さえられるまま、道具のように使われる
    - divider: true
    - 館を出るころ、上映室にはもう数人しか残っていない。%YOU%とパーマーは欠伸をしながら、さっきの映画の話をする
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はうっ——つまんなかったけど、こういう映画も、たまにはいいね……えへへ」
    -
    - パーマーは満足げに%YOU%の腕を組み、%YOU%は別のことを考えながら%SEX%の顔をじっと見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしたの……%CALLNAME%？」
    -
    - 巻き毛の黒い一本が、印のように%TEEN%の口元に貼りついている
    - ……%SEX%に、教えるべきか？

escape:
  title: あなたと、天の果てまで逃げる
  lines:
    # 恋慕＞49のあと、バレンタインに発生
    - バレンタイン当日、トレセン中が桃色の気配に包まれている
    - 真っ盛りの学生にとって大事な日だ。ほとんどの%UMA%が、意味のあるこの日に気持ちを表す贈り物を渡す
    - たとえば今、生徒会の前にはチョコレートを渡したい生徒が列を作っている
    - その一方、事務室の%YOU%のほうは少し静かだ
    - 教職員が贈り物をもらうのは、珍しいことだからだ
    - うん、ほとんどの場合は
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よっ！ トレーナー！」
    - acc: 1
      content: 「パーマー？」
    - パーマーが入口から顔を出し、尻尾を少し不安そうに左右へ揺らしながら%YOU%の視界へ入ってくる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちょっと外、付き合ってくれる？」
    - acc: 1
      key: out
      content: 「いいよ」
      lines:
        - バレンタインの空気は濃い。事務室を出たあと、周囲はずっとチョコの匂いだ
        - チョコの中身と意味は、今は置いておこう
        - 周囲の生徒を避けてから、二人は安心して小道を歩く
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「バレンタイン、か……みんな賑やかだね」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「コースでトレーニングしてる子も少ないし、普段と全然ちがう」
        - パーマーの目は周囲を左右に行き来して、少し上の空だ
        - acc: 1
          content: 「みんなバレンタインを楽しんでるんだろ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも、それはそれでいいよ～」
        - acc: 1
          content: 「機嫌がいいな」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「当たり前でしょ！ みんな嬉しそうだし、パーマーもチョコもらったしね？」
        - パーマーは二歩小走りして、%YOU%の前でくるりと回る
        - 両手を背に回し、体を少し前へ傾け、足はゆっくり後ろへ下がる
        - 視線は穏やかに%YOU%の目を見て、顔が薄く赤い
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも……トレーナーを呼び出したのは、そういう話じゃないよ」
        - 唐突に足を止め、ずっと後ろに隠していた両手を胸の前へ出し、黒い箱を乗せる
        - 少し間を置いてから、%YOU%へ差し出す
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ハッピーバレンタイン！ ……あと、これはお返しのチョコとはちょっと違うよ？」
        - 通行人の%UMA%「あっ！ パーマー先輩！」
        - 通行人の%UMA%「パーマー先輩！ チョコ、受け取ってください」
        - パーマーの耳が一気に跳ね、少し慌てて振り返る
        - 学園では、よく人を助けるパーマーの人気は恐ろしいほど高い
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、あの、とりあえずこっち！」
        - パーマーはチョコを%YOU%の腕に押し込み、手を引いて走り出す
        - 学園を出ていくつもの小道を回ってから、まだ怖がるように後ろを見る
        - 気づいたら、学園の裏山まで走っていた
        - 誰も付いてきていないのを確かめてから、力の抜けた手を離す
        - acc: 1
          content: 「パーマー、大丈夫か？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大丈夫大丈夫。ちょっと疲れただけ……」
        - パーマーは膝を支え、少し不自然に息を整える
        - 尻尾だけはずっと左右に揺れ、軽く%YOU%の脚を撫でる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ここなら大丈夫。二人きりだね、はは……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふ……深呼吸……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「特別なチョコ、人に見られるのやっぱり恥ずかしいね。えへへ」
        - 息を整えてから、パーマーはさっきのチョコをまた取り出す
        - acc: 1
          key: special
          content: 「特別？」
          lines:
            - チョコを受け取った%YOU%は、無意識にそう訊ねる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「うん、特別だよ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「値段でも箱でもなくて……」
            - パーマーの言葉が口の中で回り、最後の言い方を探している
            - チョコを渡した両手は胸の前で不安そうに組み合い、心の雑多な気持ちを映しているみたいだ
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「はあっ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「%SELF_CALL%が……自分で作ったんだ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「つまり、本……」
            - 最初の勢いは十分だったのに、今の真っ赤な顔が、残りの言葉が出ないことを物語っている
            - だが、続きは双方とももうわかっている
        - if: era.get('love:64') >= 75
          acc: 2
          content: 「本命、だよな？」
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「うん、本命だよ」
            - %YOU%の問いかけに、一瞬の迷いもなく答える
            - チョコが自分の手から離れるのを見て、ようやく自由になった両手を後ろへ戻す
            - 体を少し前へ傾け、横顔で傍らの景色を見る
            - 景色を見ているつもりで、実際は見ていない
            - 耳がぴくぴく跳ね、%SEX%の期待する声を待っている
            - acc: 1
              content: 「ありがとう、パーマー」
            - 耳が軽く跳ね、それから少し下がる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ありがとう、だけ……」
            - acc: 1
              content: 「それと、俺も好きだ、パーマー」
            - 顔を戻したパーマーは、もう羞恥の緋色で埋まっている
            - 少しずつ体をずらして%YOU%の傍へ寄り、腕を抱く
            - ただ、この美しい瞬間に、盛り上がった小さなテントは似つかわしくない
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……する？」
            - パーマーの目は少し引けているのに、両手はもう腰へ登り、こっそり%YOU%の柔らかい肉を摘まむ
            - acc: 1
              key: location
              content: 「ここで？」
            - acc: 2
              content: 「ホテルのほうがいいか……」
          # 馬跳
    - acc: 2
      content: 「今日はまだ仕事が……」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大丈夫大丈夫！ 待つよ……あの、入っていい？」
        - 同意を求めているのに、人はもう中に入っている
        - 事務室へ入って左右を二度見て、机の傍に凭れる
        - きれいな机の上には私物のほか、ばらけたチョコが数個ある
        - パーマーの目が一瞬止まり、少し後ろめたい
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの……このチョコは？」
        - acc: 1
          content: 「駿川さんからだ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、駿川さんか……」
        - パーマーは頭を押さえ、微妙な笑みを浮かべる
        - 笑っているとき、もう一方の手が不安そうに後ろで揺れている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「つまり、トレーナーはまだバレンタインの贈り物もらってない？」
        - 後ろの手が少し震えて出て、精巧なチョコの箱を持っている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これは……とにかく、そういうやつ。バレンタインの」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「言うなら本……本……」
        - パーマーの声は少し震え、言いたかった言葉が喉に引っかかる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もともとトレーナーにあげるつもりだったから……とにかく、受け取って！」
        - 気まずい続きを自分で繋いでから、チョコを%YOU%のほうへ差し出す
        - 本人は別の方向を向き、顔を隠す
        - acc: 1
          key: special
          content: チョコを受け取る
        - if: era.get('love:64') >= 75
          acc: 2
          content: 「本命か？」
          lines:
            - %YOU%の声を聞いて、パーマーはまた顔を戻す
            - いつもの爽やかな顔は今、大きな緋色で、耳が不自然にぴくぴく跳ねる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「本命とか……気づいてから口に出すと、恥ずかしいよ……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナー、好き……だから、気づいたら作ってた」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「さっきほかのチョコ見たとき、本当にびっくりしたよ」
            - パーマーの声は小さいのに、とてもはっきりしている
            - 二人だけの事務室なのに、パーマーは少し孤独に見える
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あのね、トレーナー。バレンタイン……付き合ってくれる？」
            - acc: 1
              content: 「もちろん」
          # 馬跳

valentine_out_after_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「大胆だね、トレーナー」
  - 慎重に服を整えてから、パーマーは立ち上がる
  - 顔を出して左右を見て、周囲に誰もいないのを確かめてから、安心して歩き出す
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「もう……今日はチョコ渡すだけのつもりだったのに」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「まぁ、トレーナーなら意外じゃないか」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「だってバレンタインだもんね？」

valentine_office_after_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ねえトレーナー、あのチョコ」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あれ、一つ一つ作ったんだよ……だから、全部食べてね？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ、それと」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ハッピーバレンタイン！」

# 依存心シリーズ

trust:
  title: あんたが信じてくれた私……
  lines:
    # 恋慕＞80で恋慕イベント受領の有無は不問、G1敗戦が3超、総勝場が4未満、シニア級以降にパーマーが自主トレ。シニア級のレース後は発生しない
    - divider: true
      content: 寮
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日、トレーナーは来なかった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり……がっかりしたんだ」
    - color: %COLOR%
      content: パーマーはベッドに横になり、小さく独り言をつぶやく
    - color: %COLOR%
      content: 隣のカツラギはとっくに眠っている。だが今夜のパーマーは窓の月を見るだけで、眠る気持ちになれない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんで、今日トレーナーは傍にいないんだろ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんで、トレーナーは傍にいないんだろ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このままトレーナーをがっかりさせ続けたら……」
    - （「パーマー、もう飽きたよ」）
    - （「パーマー、ここまでだ」）
    - （「さよなら」）
    - color: %COLOR%
      content: パーマーはいきなり起き上がって布団を払い、荒く息をつく
    - color: %COLOR%
      content: 自分は眠ってすらいなかったのに、悪夢を見た
    - color: %COLOR%
      content: だが頭の中の画面では、%YOURNAME%の声が本物のようにリアルで、本人が目の前に立っているみたいだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content: いつの間にか、目は涙で埋まっている
    - color: %COLOR%
      content: 真っ赤な目尻から涙を拭いて、ようやく今この瞬間の自分の気持ちがわかる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ、そういうことか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーへの、トレーナーへの気持ちは……」
    - color: %COLOR%
      content: 無意識に傍らを見渡し、ルームメイトを起こしていないのを確かめてから、また布団を引き上げて縮こまる
    - color: %COLOR%
      content: 布団を掴んで自分を覆い、巣の中に丸まる
    - color: %COLOR%
      content: 両手をゆっくり上げ、胸に押し当てる
    - color: %COLOR%
      content: 心拍はまだ速く、レースのときみたいだ
    - color: %COLOR%
      content: だがこのときめきは、一人のことを想っているだけだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content: 汗がパジャマに滲み、吐息もだんだん大きくなる
    - color: %COLOR%
      content: どれだけ経ったか、パーマーはもう湿った布団から顔を出す
    - color: %COLOR%
      content: 陶酔した笑顔を浮かべ、ゆっくり目を閉じる
    - color: %COLOR%
      content: もう夜更けで、眠気がだんだん染みる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ、トレーナー」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「会いたい」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あんたがいないと……あんたがいないと……」
    - color: %COLOR%
      content: パーマーはベッドに横になり、口から小さな笑い声を漏らす
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーがいなかったら、パーマーは永遠に止まるんだ……」
    - color: %COLOR%
      content: 熱い体がだんだん夢へ沈み、ほどなく優しいルームメイトに揺り起こされる
    - color: %COLOR%
      content: 陽は高く、もう起きる時間だ
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「パーマー、起きろよ！ らしくないな、そんなにぐっすり寝るなんて」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え、そう？」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「でも寝てるとき笑ってたぞ。いい夢見たのか？」
    - color: %COLOR%
      content: パーマーは胸を押さえ、自然に笑顔が浮かぶ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、いい夢見たよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すごく、いい夢……」
  # 依存心

is_you:
  title: あなただから……
  lines:
    # 依存心取得後の翌ターン
    - color: %COLOR%
      content: 朝が来ると、パーマーは早くトレーニング場へ行き、一人の到来を待つ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content: 朝の冷たい壁に背を預け、視線は前方をきつく見る
    - color: %COLOR%
      content: それを知らない%YOURNAME%が、パーマーの視界の端に現れる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……来た」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今度は、逃げない」
    - color: %COLOR%
      content: パーマーはまっすぐに立ち、笑顔を浮かべる
    - color: %COLOR%
      content: 夢と現実は逆だ。だが人は、その一言だけで止まらない
    - color: %COLOR%
      content: 迷いなく、すぐ小走りで%YOURNAME%の傍へ来る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おはよう、トレーナー！」
    - color: %COLOR%
      content: 見慣れた声が熱を乗せて、朝を灯す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （ちがう……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （メジロパーマー……ちがう、パーマーはそんなことしない）
    - color: %COLOR%
      content: 明るい笑顔のまま、いつものように%YOURNAME%の傍を並んで歩く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （でもね）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （いつか、%YOURNAME%はずっとパーマーを見てくれる）

nega_dis:
  title: ゼロ距離の私たち
  lines:
    # 依存心所持、恋慕＞95、情動以上のときターン終了でランダム発生
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー？ 今、時間ある？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今この瞬間じゃなくて……今日一日」
    - 誰もいない時間に、パーマーは一人で、帰りかけの%YOU%を探し当てた
    - 窓を背に、逆光の目に穏やかな光を乗せて見つめている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SELF_CALL%、たまにはすごいことしたくなるんだよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーは、一緒にいてくれるよね？」
    - acc: 1
      content: 「当たり前だ」
      lines:
        - %YOU%の返事を聞いて、パーマーの光る目がゆっくり逸れる
        - 素早く%YOU%の書類を片付け、自然に手を取る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日は空いてる、だよね？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「じゃあトレーナー、今日はちょっと頑張ってもらうよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……明日も、かもね」
        - acc: 1
          content: 「え？ 明日？」
        - acc: 2
          content: 「相当、狂った夜になりそうだな」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふんふん～ トレーナーの言うとおりだよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「明日まで狂える……こと、だよ」
        - パーマーの声はいつもの軽やかさだ
        - ただ%YOU%の目には、前方のパーマーに見えない部分がある
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ここ、どう？」
        - 跳ねる足が止まり、パーマーは振り返らずその場に立つ
        - ホテルの前で、跡を残さないように数歩下がる
        - 少し冷たい指が%YOU%の掌に潜り、そっと掴む
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日、いっぱい用意したよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「びっくりするやつ……」
        - 抗えない力で%YOU%の手を掴み、大門へ入る
        - 桃色の部屋まで来て、もう痛いほど握られていた手がようやく離れる
        - 扉に鍵が掛かる音がして、今夜は眠れないと告げる
        - acc: 1
          content: 「パーマー、これ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「～」
        - 疑問や説教が出る前に、唇が塞がれる
        - 柔らかい舌が強引に歯を越え、交わって、届く場所の味を残さず奪う
        - 呼吸が切れ、意識が落ちそうになってから、やっと新しい空気が体へ戻る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はあっ、はあっ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーの匂い……」
        - 薄い青の瞳に、薄暗い微光が映る
        - %YOU%の目の前で、薬瓶を出す
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ねえ、%YOURNAME%」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「選んでよ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……パーマー？ それとも、あんた？」
        - 視界のぼやけた%YOU%は、朦朧の中で薬の見当を付け、慌てて顔の恐れを押さえる
        - 今、選択権は%YOU%の次の一言にある
        # 薬物はフロンK、恋慕100のときはフロンPに置換
        - acc: 1
          content: 「俺に」
          lines:
            - 言ってしまった
            - 下に押さえられた%YOU%は、自棄のように言ってしまった
            - パーマーの手のものを受け取り、迷わず飲み干す
            - 体が急速に熱くなり、下から来る強い衝動をだんだん感じる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あ……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「立派だね……」
            - パーマーの指が一番敏感な先端を軽く擦り、器用にズボンのファスナーを摘まむ
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナー……気持ちいいでしょ？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「パーマーも、気持ちよくして」
          # 馬跳へ
        - acc: 2
          content: 「任せる」
          lines:
            - if: era.get('cflag:0:0') === 1
              lines:
                - %YOU%の目の前で、パーマーは手の液体を一気に飲み干す
                - 下半身に熱い感触が伝わり、下腹にきつく貼りつく
                - 膨らんだ肉棒が、パーマーの下で微かに震える
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「あ……」
                - この刺激はパーマーにとって、十分に新しい
                - 充血した先端が微かに震え、%YOU%の前で呼吸のように上下する
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「トレーナー……受け止めてくれる？」
                - 言葉はまだ%YOU%の同意を求めているのに、体は十分に正直だ
                - 今のパーマーの狂った表情を余さず見るのに、%YOU%は何もできない
                - %UMA%の力は、%YOU%が抗えるものではない……
              # 馬跳へ（強姦イベント発生）
            - if: era.get('cflag:0:0') !== 1
              lines:
                - %YOU%の目の前で、パーマーは手の液体を一気に飲み干す
                - 下半身に熱い感触が伝わり、下腹にきつく貼りつく
                - 膨らんだ肉棒が、パーマーの下で微かに震える
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「あ……」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「すごいね、これ……ぐっ」
                - この刺激はパーマーにとって、十分に新しい
                - 充血した先端が微かに震え、%YOU%の前で呼吸のように上下する
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「トレーナー……受け止めてくれる？」
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - 「もう、我慢できない」
                - 言葉はまだ%YOU%の同意を求めているのに、体は十分に正直だ
                - 硬くなった肉棒が、小さな穴の口に軽く当たる
                - 少し力を入れて前へ出せば、二人は繋がってしまう
                - acc: 1
                  content: 「だめ……」
                - acc: 2
                  content: 「お願い……」
                - %YOU%の声はほとんど聞こえず、パーマーの耳には届かない
                - 今のパーマーの狂った表情を余さず見るのに、%YOU%は何もできない
                - %UMA%の力は、%YOU%が抗えるものではない……
              # 馬跳へ（強姦イベント発生）
        - acc: 3
          content: 「いらない」
          lines:
            - %YOU%の返事のあと、パーマーの手が止まる
            - 前へ倒れかけた体が、ゆっくりまた後ろへ下がる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……だめ、なの？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「パーマーじゃ、だめなの？」
            - 強引に%YOU%をここまで連れてきた
            - 強引に%YOU%を押し倒した
            - 強引にやり通そうとした
            - だが、あんたの一言で、動きが止まった
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「やっぱり、パーマーは……」
            - パーマーが素直に起き上がろうとしたとき、%YOU%は手を伸ばして%SEX%を掴む
            - 使われなかった薬が床に落ち、今のパーマーが主導権を失ったことを告げる
            - acc: 1
              content: 「そういうのは要らない。俺でもできる」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……」
            - acc: 1
              content: 「パーマーが欲しいなら、ずっといるよ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナー……」
            - acc: 1
              content: 「だから、優しく来て」
            - もともと暗い目が、もう一度明るい光を灯す
            - 震えていた両手が、力を入れて%YOU%の首を抱く
            - 唇がきつく重なり、どれだけ経ったかわからない
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「はあっ……」
            - パーマーの目尻に涙が浮かび、ふわりと%YOU%を見る
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「お願い、トレーナー……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「パーマーの体、任せるよ」
          # 馬跳へ
    - acc: 2
      content: 「今日はだめだ」

come_for_you:
  title: 夜になって、会いに行く
  lines:
    # 依存心所持、不安以上のときターン終了でランダム発生、ウマ娘×男トレーナー
    - 夜、とっくに夢の中にいた%YOU%が、妙な物音で目を覚ます
    - 部屋は見慣れた部屋のままで、音の理由も思いつかない
    - だが目を開けた瞬間、疑問はすべて解けた
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……」
    - なぜか全裸のパーマーが、今%YOU%の上に伏せている
    - 普段隠している胸が空中に掛かり、乳尖はあと少しで急所に触れそうだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「起きたんだ、トレーナー」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんね。起こすつもりじゃなかったんだけど……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもこうしないと、パーマー……安心して眠れないんだよね」
    - 闇の中、パーマーはゆっくり身を下ろし、豊かな峰で匂いにつられて立った部位を包む
    - 薄紅色の舌が充血した先端をゆっくり回り、潤ってから迷わず下へ一口で呑む
    - 優しい感触、柔らかい動きが、もともと敏感な神経を刺激し、理性のスイッチを弄る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うっ……ぐっ……❤️」
    - 双峰と舌技の循環の下では、その気がなくても体の本能は止められない
    - 白い液体が噴き、パーマーの口へ流れ込む
    - 舌が貪欲に表面を滑り、腥い液が一滴も残らなくなるまで舐めてから、ゆっくり口を離し、上へ小さく口づける
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、いい子だね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まだ元気だよ❤️」
    - 温かい掌が射精したばかりの陰茎を掴み、ゆっくり上下する
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今、なにしたい～」
    - ゆっくりベッドから身を起こし、%YOU%の視界に、とっくに濡れた下を見せる
    - 小さな口が一開一合し、粘る液体を絶えず流す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今夜……なにする？」
    - acc: 1
      key: select
      content: 起き上がってパーマーを押し倒す
    - acc: 2
      content: 抵抗を諦める

come_fy_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「元気だね、トレーナー」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ここまでしたんだし……責任、取ってね～」
  - 指が%YOU%の胸の前で、力を入れて円を描く
  - 愛らしい顔が前へ出て、%YOU%の首に重く跡を残す
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「これで……もうほかの人はいないよ❤️」

endless_escape:
  title: 終わりのない逃亡
  lines:
    # （依存心所持時、ほかのBEを置換）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最近、なんか気が乗らないんだよね……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも足りないものもない気がする……変だな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ヘリオスと……ん、ちがう気がする」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「マックイーンとライアン%THEY%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今、ほかの人を探すときじゃないよね。何やってるの、パーマー」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーが必要だよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう三日、行方不明だけど」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今どこにいるんだろ、トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「邪魔な人、いなくなったね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっと……帰れるよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「会いたいよ……パーマーのトレーナー」

pre-rooftop:
  - color: %COLOR%
    content: 【%CHARA%は屋上で待っている】

# イベントタイトル定義用
rooftop:
  title: 待つ、それとも……
  lines:
    -

    # イベントタイトル定義用
rooftop_3:
  title: 待つ、それとも……期待
  lines:
    -

rooftop_event:
  # 依存心取得後、天皇賞（春）未勝利、屋上で発生
  # 発生9回以下：待つ、それとも……
  # 発生9回超：待つ、それとも……期待
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「負けた」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「また、負けちゃった」
  - color: %COLOR%
    content: 一人屋上に座り、風が撫でる感触を味わう
  - color: %COLOR%
    content: 耳は癖で風に合わせて揺れるのに、気持ちまで明るくはならない
  - color: %COLOR%
    content: 静かに心拍を感じ、碧い空を見る
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「トレーナー、来るかな」
  - color: %COLOR%
    content: 二人が初めて出会った屋上で空を見て、とりとめもなく考える
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ああ、なんだ」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「もう負けたんだよ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「レースなんて……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「こんなんじゃ、トレーナーはもう来ないよ」
  - color: %COLOR%
    content: いつもの昼寝の場所に横になり、根拠のない期待を抱く
  - color: %COLOR%
    content: 風はまだ屋上を吹き、パーマーは目を閉じて、見慣れた声を待つ
  # CFLAGNAME:52 = 育成用変数
  - if: era.get('cflag:64:52')?.only_you <= 3
    lines:
      - divider: true
      - 今この瞬間、%YOU%は複雑な顔のまま壁の向こうで独り言を聞き、%SEX%の傍まで一歩も進めない
      - 今どんな顔をすればいいかは、%YOU%にとって深すぎる問いだった
  - if: era.get('cflag:64:52')?.only_you > 3
    lines:
      - color: %COLOR%
        content: 扉が開く
      - divider: true
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「え？」
      - 屋上の入口から開く音がして、%YOU%が上がってきた
      - acc: 1
        content: 「パーマー！」
      - acc: 2
        content: 「やっぱりここにいた」
      - 四つ目が合った瞬間、%YOU%の声が自然に出る
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー！？」
      - パーマーはいつものように明るく%YOU%に応える
      - ただ笑顔のあと、表情が少し寂しげに翳る
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あの、なんでトレーナーがここに？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「会いに来てくれた……」
      - 声がだんだん小さくなり、最後は目も逸らす
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （何考えてるの。もう負けたのに）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （こんな%UMA%が、トレーナーにここまで構ってもらえるわけないよ）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あ……トレーナーが休みたいなら、先に行くね」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「どうせ%SELF_CALL%なんて要らないし……」
      - 顔に無理な笑みを作り、適当な言い訳で去ろうとしたとき
      - 前方の優しい掌が肩に乗り、パーマーが起き上がろうとする動きを止める
      - acc: 1
        content: 「なに言ってるんだ」
      - ずっと立たなかった耳が、ゆっくり起き上がる
      - パーマーは顔を上げ、今の%YOU%の表情を見て少しぼんやりする
      - 「お前は俺の相棒だ。放っておけるわけがない」
      - それだけの一言なのに、瞳がもう一度灯る
      - 「負けてもいい」
      - 「パーマーは俺の相棒だろ」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレーナー……」
      - 手を上げて少し赤い目尻を隠し、力のない拳で%YOU%の体を叩く
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……ありがとう、トレーナー」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あんたが、あんたがまだ見ててくれるなら」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「パーマー、絶対また立てるよ！」
      - 昔の自分を呼び戻し、パーマーはまた明るい顔を見せる
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （あんたがいるからなんだよ、トレーナー）
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （あなただから、だから……）

s_feeling:
  title: 違和感
  lines:
    # 依存心取得後、任意レース勝利後、任意地点のデートで発生
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「急だね、今日」
    - パーマーは親しげに%YOU%の腕を抱き、周囲の視線を全く気にせず、ふわりとした力加減のまま
    - 肩が触れ合い、並んで歩く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SELF_CALL%は、ま～ったく気にしてないけど」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （パーマーのトレーナーが、自分から誘ってくれたよ～）
    - if: era.get('cflag:64:0') !== 1
      content: 顔に薄い紅を乗せ、心臓……胸を%YOU%の腕に押し当て、だんだん力を入れて抱きしめる
    - 尻尾が無意識に傍らへ滑り、こっそり腰に絡む
    - 小さな耳が器用にぴくぴくして、傍らの%YOU%を絶えず軽く叩く
    - acc: 1
      key: select
      content: 「あの、パーマー、くすぐったい……」
      lines:
        - %YOU%の声を聞いて、揺れていた耳が止まる
        - いつもなら、パーマーは動きを止めて気まずい笑いで少し距離を取るはずだ
        - 今日は、腕をさらにきつく掴む
        - 痛いくらい掴まれてから、パーマーはやっと手を離す
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……うんうん」
        - パーマーはうつむき、離した手で%YOU%の体を軽く突く
        - %YOU%から見えない角度に、不自然な笑みが浮かぶ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わかったよ、トレーナー……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「くすぐったいんだね……」
    - acc: 2
      content: 「あの、パーマー、外でこうするのはよくないだろ？」
      lines:
        - 揺れる耳は止まらず、まだ叩き続けている
        - 親密な仕草に周囲がだんだん気づき始めるのに、パーマーは少しも引かない
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いいじゃん」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私たち、そういう関係でしょ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それとも……」
        - 笑顔のまま、横顔で%YOU%を見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「外じゃ、だめ？」
        - 一瞬ぼんやりしたあと、パーマーはまたきちんと立つ
        - %YOU%と並んで通りを歩くが、尻尾だけが絶えず尻のほうへ払う
        - 現役%UMA%の力は、一般人の比ではない
        - 最初は普通のデートだった方向が、別のほうへ曲がる
        - 周囲がもう気にしていないのを確かめてから、パーマーは%YOU%を連れて足を止める
        - 目の前の環境を見れば、誰でもこれから何が起きるかわかる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ここでなら、トレーナーもだめって言わないよね」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でしょ？」
        - %YOU%の返事を待たず、パーマーはホテルの扉を押す
        # 強姦

s_feeling_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「トレーナー」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「こういうの、好き？」
  - パーマーは%YOU%をきつく抱き、翳んだ目でふわりと笑う
  - 器用な指はまだ下半身を気ままに滑らせ、主権を示すみたいだ

pre-nap:
  - color: %COLOR%
    content: 【%CHARA%と屋上で昼ごはんを食べたいか】

nap:
  title: 静かな昼寝
  lines:
    # 恋慕＞49、同心刻印lv1、屋上で出現
    - 疲れた午前のあと、心身ともにへとへとの%YOU%は弁当を持って屋上へ上がる
    - 扉を押したとたん、パーマーが視界の端に現れ、力いっぱい手を振る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こっちこっち、トレーナー！」
    - 手を振ったあと、パーマーは自分の鞄から少し大げさな弁当箱を出す
    - %YOU%が座ると、ぎっしりの昼ごはんが一箱、目の前に置かれる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、食べてみて？ 味、いいはずだよ！」
    - パーマーは勢いよく小さなソーセージを挟み、%YOU%の弁当へ置く
    - 傍らの熱に触れて、%YOU%の疲れも一気に散る
    - acc: 1
      content: 「さすがメジロ家、弁当までこんなにうまい」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おいしい？ えへへ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのね、トレーナー、味ほんとにいいでしょ？」
    - パーマーの顔は少し羞恥の薄い赤で、目が自分の弁当と%YOU%の顔の間を行き来する
    - acc: 1
      content: 「すごくいいよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そう？ うんうん……」
    - パーマーの顔の不安が一気に消え、明るくなる
    - 弁当を食べ終えてから、二人は日陰に横になり、昼休みの静けさを味わう
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふ——」
    - パーマーは%YOU%の傍に横になり、穏やかで長い呼吸を漏らす
    - 無防備な様子で、何が起きても構わないみたいだ
    - 二人が初めて出会った屋上で、%SEX%はこうして静かに眠っている
    - 安らかで、無防備で、抵抗もなく、ただ静かに横になっている
    - 昼休みは長く、長いからこそできることがたくさんある
    - acc: 1
      key: select
      content: このままパーマーの寝顔を見る（好感+10）
      lines:
        - 微風が優しい感触で撫でる
        - 少しとろんとしたパーマーの寝顔を見て、%YOU%は自然に笑う
        - 気づかないうちに、昼休みはもう終わりに近い
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん……」
        - 今の時間を知っているのか、パーマーは浅く肩を動かす
        - 穏やかだった寝顔に小さな不快が乗り、もうすぐ目が覚めそうだ
        - そんな可愛い寝顔に、%YOU%は我慢できずこっそり指を伸ばす
        - acc: 1
          content: 「そろそろ起きなよ」
        - acc: 2
          content: 静かに頬をつつく
        - 夢の中で外界の動きを感じ、少し不安そうに、まだ寝ぼけた目を開ける
        - ただ顔を上げたとき、頬が何かにぶつかる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ……あれ？」
        - 昼寝から覚めたパーマーが目を少し下へやり、自分の顔をつついていた指に気づく
        - 視線が短く重なってから、パーマーは顔を%YOU%の手の傍から逸らす
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あはは……寝てると気にしないんだよね、その……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……はいはい！ 授業だよ！」
        - 会話から逃げるパーマーは一気に屋上の入口まで走るが、そこで少しだけ止まる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……あっ！ パーマー、何考えてるの！」
        - 扉を押し、屋上には%YOU%だけが残る
    - acc: 2
      content: 少し悪戯してみる（恋慕+2）
      lines:
        - このまま、少し悪戯してみよう
        - パーマーはもう眠っている。ひどいことさえしなければ
        - ひどいことさえしなければ、少しの悪戯くらい
        - 考えたあと、%YOU%は服の中から新品のジェルボールペンを見つける
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふ……」
        - パーマーは気持ちよさそうに眠っていて、%YOU%が大作を描き終えるまで起きない
        - 今なら、パーマーが目覚める前に跡を消せば問題ない
        - ジェルインクの字を消して、昼休みが終わる前に……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん……」
        - ただ、%YOU%に残された時間はもう終わっている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、寝てないの……あれ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なんでペン持って……」
        - そう言いながらパーマーは癖で自分の顔を撫でる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「この感触……トレーナー？」
        - パーマーの目には不信があり、手のインクを見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もう大人なのに、こんな悪戯するんだ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーも、まだ子どもだね～」
        - 少し慌てた%YOU%に、冗談めかして何度かつつく
        - ただ午後、マスクをして授業を受けたパーマーは、%YOU%にも何本か描いておけばよかったと心底後悔する
    - if: era.get('love:64') >= 75
      acc: 3
      content: キスくらい、バレないだろ
      lines:
        - 普段の屋上に喧騒はなく、ここにあるのは風の音とパーマーの穏やかな呼吸だけ
        - 今は二人だけだ。何をしても見つからない
        - パーマーはもう眠っている。少しだけ……
        - acc: 1
          content: 「ちょっと触れるだけなら……」
        - そっとパーマーの前へ寄り、%SEX%に当たっていたまばらな陽を遮る
        - パーマーの呼吸はまだ穏やかで、傍らの%YOU%に全く防備がない
        - 顔の紅を乗せて、%YOU%は少し迷ってゆっくり身を屈める
        - 目の前の穏やかな寝顔と、赤い唇へ
        - 両手を開いて震える体を支え、二つの顔がだんだん近づき、唇が触れそうになる
        - acc: 1
          content: このまま口づける
        - acc: 2
          content: このまま口づけて、いいのか
        - acc: 3
          content: このまま口づけて、手が止まるのか
        - 次の動きを考えているのに、%YOU%の体は待たない
        - 唇が重なり、短く呼吸が止まる
        - 頭の思考がいったん切れ、また繋がったときにはもう終わっていた
        - %YOU%の顔は紅く、速く空気を吸って熱い体を冷ます
        - もう一度傍らのパーマーを見て、小さく唾を飲む
        - 唇に残った気配がまだ思考を誘い、さっき触れ合った場所をきつく見る
        - 制御できずもう一度パーマーの前へ寄り、できるだけ呼吸を抑える
        - acc: 1
          content: このまま口づける
        - acc: 2
          content: このまま口づける
        - acc: 3
          content: このまま口づける
        - 唇が二度目に重なるのに、軽い鼻息が顔を撫でない
        - 異常に気づいた%YOU%が起き上がろうとすると、両手に顔を抱えられ、起きられない
        - 舌が唇へ入り、門歯を越え、器用に誘う
        - 呼吸が体を支えられなくなってから、後頭部を押さえていた両手がようやく離れる
        - 口を開けたまま貼りついていた顔を離し、口の中の唾を飲み込む
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……こんなんじゃ、眠れないよ」
        - パーマーの顔は羞恥の笑顔で、そっと%YOU%の肩を掴む
        - 二人の目が重なり、気まずい笑みが浮かぶ
        - 突然で離れた唇がもう一度重なり、味を交換する
        - 昼休み終了のベルが屋上で鳴るのに、貼りついた二人は離れない
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「時間、だね」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちょっと……ん、なんでもない」
        - パーマーの目は名残惜しそうに%YOU%を離れ、立ち上がって少し乱れた服を整える
        - 屋上の入口まで行き、振り返るのに%YOU%の目を直視できず、微妙に顔を掻く
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……トレーナー、行こ？」
        - acc: 1
          key: sex
          content: 「うん、行こう」
          # 性欲+10%
        - acc: 2
          content: 「ちょっと待って、パーマー」
          lines:
            - 扉を開けかけたパーマーの手が空中で止まり、期待を乗せて振り返る
            - 言葉がなくても、双方とも相手の気持ちはわかっている
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……遅刻するよ」
            - しばらくして、パーマーはやっと言い訳を見つける
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「そのとき、トレーナーが言い訳してくれる？」
            - acc: 1
              content: 「いいよ」 # 合意
            - acc: 2
              content: 「だめだよ」 # 強姦される
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「そっか……」
            - 後ろ手でこっそり背後の扉に鍵を掛け、早足で%YOU%の前まで来る
            - 迷いなく%YOU%の胸へ飛び込み、地面へ押し倒す
            - パーマーはもう真っ赤な顔を上げ、力を入れて%YOU%の顔に口づける
            # 馬跳

nap_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ……これ、先生に補習引っ張られるやつだ」
  - パーマーは%YOU%の傍に座り、空へつぶやく
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「いきなりサボったら、家から連絡来るかな」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……でもそのとき、トレーナーは付き合ってくれるよね？」
  - 返事を待たず、パーマーは立ち上がる
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「行こ、トレーナー」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……ここにいたら見つかるよ」
  - パーマーは笑顔のまま、%YOU%の手を引いて屋上を離れる

pre-leisure:
  - color: %COLOR%
    content: 【%CHARA%とカラオケへ行こう！】

leisure:
  title: 息抜き
  lines:
    # 恋慕＞49、同心刻印lv1、商店街のカラオケで発生
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いきなり歌いに来たけど、なにかあった、トレーナー？」
    - パーマーは両手を背に回し、少し首を傾げて傍らの%YOU%を見る
    - acc: 1
      content: 「急に行きたくなっただけだ」
    - acc: 2
      content: 「たまにはパーマーと一緒に歌いたくて」
    - その説明を受け入れたのか、パーマーはそれ以上聞かない
    - 二人は個室の扉を押し、少し落ち着かなさそうに座る
    - 二人きりの個室……ちょっと、そういう気配があるんじゃないか？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの、トレーナー何歌う？ 先に入れておくよ！」
    - 自分のそわそわを隠すように、パーマーは自分から選曲機の前へ行く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「せっかく二人で来たんだし、トレーナーも思いっきり楽しんでね！」
    - acc: 1
      key: sex
      content: 「パーマーの好きな曲でいい」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そっか。じゃあ%SELF_CALL%、気ままに入れるよ！」
        - なぜか、さっきまでの不安は消えて、代わりに熱い歌声が来る
    - acc: 2
      content: 「大事なのはパーマーが楽しむことだ」
      lines:
        - パーマーの動きが少し止まり、落ち着いてから机のマイクを取り、トレーナーへ手を伸ばす
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それなら、一緒に歌お！」
        - なぜか、パーマーは笑っているのに少し怒っているみたいだ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そしたら、パーマーは嬉しいよ」
    - acc: 3
      content: 「歌うだけじゃないぞ……」
      lines:
        - %YOU%の言葉を聞いて、パーマーの動きが止まる
        - %SEX%はいつも賢く、人の言葉の裏もよく聞き取る
        - 防音の個室に二人だけ。その意味は十分に明らかだ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー……えっち」
        - KTVの自動再生がもう音楽を流し始めているのに、誰も歌い始めない
        - 個室のソファに座り、目の前の相棒へ両手を伸ばす
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%SELF_CALL%は、ここにいるよ……」
        - acc: 1
          key: sex2
          content: パーマーを抱きしめる
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「はあっ、トレーナーの匂い……」
            - 顔を%YOU%の胸に埋め、体温と匂いを味わう
            - 抱擁の隙間から、パーマーの声が漏れる
            - 弱ったみたいで、力の抜けたみたいだ
            - 抱擁を解くと、ゆっくり身を屈め、目の前の服をそっと開く
            - 匂いの濃いマイクを掴み、軽く息を吹きかける
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナーの匂い……」
          # 馬跳
        - acc: 2
          content: パーマーの顔を抓む
          lines:
            - 両手を開いたパーマーに、%YOU%は容赦なく%SEX%の赤い頬を抓む
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「うわっ！」
            - 驚きの声がパーマーの口から漏れ、目を見開いて%YOU%を見る
            - acc: 1
              content: 「何考えてるんだ、えっち」
            - 相手の反応を見て、パーマーは頬を膨らませ、拳を上げる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「もう……そんな冗談、やめなさいよ」
            - 今日の歌声は、%YOU%が叩かれる悲鳴と混ざり合う

pre-cinema:
  - color: %COLOR%
    content: 【%ARDAN%がいるときに、%CHARA%と映画を見に行こう！】

cinema:
  title: 映画館怪談！？
  lines:
    # 恋慕≥74、同チームにメジロアルダンかつ恋慕≥74、依存心なし、外出で商店街の映画館を選択
    - 商店街を歩いていると、ちょうど映画館の前まで来る
    - 同時に入口で、もう一人と鉢合わせる
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「あら、パーマーじゃない？」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「あなたも見に……トレーナーもいらっしゃるのね」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「では、お二人の邪魔はしませんわ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えっ！ 待ってアルダン！ そういうんじゃないよ！」
    - メジロアルダンが自分から一歩下がるのを見て、パーマーは慌てて前へ走り、去ろうとする足を掴む
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たまたま通りかかっただけだよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもアルダン、何しに来たの？」
    - 半ば強引にメジロアルダンを引き止めてから、パーマーはようやく気づく
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「ふふ～ 最近、新しい映画がたくさん出てますわ」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「トレーナーに合いそうな作品が、あるか先に見ておこうと思って」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「新作か……」
    - 少し考えてから、パーマーも顔を上げて映画館上のスクリーンを見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん、このあと特に予定ないし」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「アルダン、面白いの見つかった？」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「いくつかは、ですわ。でも上映が少ないのよね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そっか……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、来たんだし！ トレーナー、見る？」
    - acc: 1
      key: movie
      content: 「ホラーはどうだ？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おお、ホラー！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なんか刺激的そう！」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「ホラー……トレーナーも意地悪ですわね～」
        - 券売機の前で少し興奮しているパーマーを隔てて、メジロアルダンは%YOU%へ少し困った顔をする
        - 今ここでホラーを選ぶなら、二人とも誰をいじめているかわかっている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「お二人～ 三枚、用意できたよ」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「ええ、行きましょう、トレーナー」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「パーマーが買ってくれたチケットですわよ～」
        - 三人で上映室へ入り、だんだん暗くなる空気の中に座る
        - パーマーとメジロアルダンに挟まれた%YOU%は、なぜか気まずい
        - 周囲が完全に暗くなり、幕に映像が浮かぶまで
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「……前より小道具が雑ですわね」
        - acc: 1
          content: 「そうだな」
        - acc: 2
          content: 「アルダンの変装のほうが怖いぞ」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「トレーナーの話術、上手くなりましたわね。ふふ」
        - メジロアルダンの顔は相変わらず平然としているが、もう一方は全くちがう
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ……あ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うわっ！」
        - スクリーンの化け物が頻繁に出てから、パーマーは%YOU%の指を掴んだまま離さない
        - 何か言いたくても、映画館では口を開けにくい
        - acc: 1
          content: （出たら言おう）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やばああ！」
        - divider: true
          content: 上映終了
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やば……本当にやばい」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うわっ、足に力入んない……」
        - 出てきたばかりのパーマーは多くの人と同じく、足がふらついて%YOU%の肩に凭れ、震えながらなんとか立つ
        - 二人の歩幅に付いて出てきたメジロアルダンは、パーマーの様子を見て自然に笑う
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「パーマーにも、こういうときがあるのですね～」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「今日は珍しい絵を見られましたわ。ありがとう～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もう！ アルダン！」
        - 三人は映画館を出ながら、笑い合う
        - ただ入口を踏み出した瞬間、夜空を見たパーマーが黙って一歩下がる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「夜って……そんなに怖い？」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「パーマー？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、トレーナー？」
        - 二歩下がってから、パーマーは%YOU%の腕を一気に抱き、まだ涙の残る目をする
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「送って……帰してくれる？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ち、ちょっとだけでいいから、本当に……」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「あら？」
        - 目の前の潤んだ瞳を見て、メジロアルダンと%YOU%は微妙に目を交わすしかない
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「でも時間も、本当に遅くなりましたし……」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「私にお任せでも構いませんわよ？」
        - acc: 1
          content: 「俺が送っていく」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「では、お願いしますわ」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「……ええ、それとも」
        - 腕を抱きしめたパーマーをゆっくり回り込み、同じ体勢でもう一方を抱く
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「トレーナーは、こういうの、お好き？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「は、早く帰ろ……」
        - 一方は、震えているパーマー
        - 一方は、遠慮なく体を%YOU%の腕に貼りつけるメジロアルダン
        - acc: 1
          key: sex
          content: 「……帰ろう」
        - acc: 2
          content: 「ホテルへ行こう」
          # 3P
    - acc: 2
      content: 「恋愛映画はどうだ？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「恋愛映画？ トレーナー、そういうの好きなの？」
        - 答えを聞いたパーマーは少し首を傾げるが、すぐ振り返って券売機へ向かう
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「恋愛、ですわ……少し珍しいわね」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「トレーナーが選ぶ感じでは、ありませんわ」
        - あまり考えていないパーマーに対し、メジロアルダンの考えは別だ
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - （恋愛映画だなんて）
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - （三人なのに……）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「アルダン？ 始まるよ」
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「かしこまりましたわ～」
        - 二人の%UMA%が左右から%YOU%を挟んで座り、妙に真剣に映画を見る
        - 映画「あなたも、あの人を好きなんでしょう」
        - 映画「でも、負けません」
        - acc: 1
          content: 「普通の展開だな……」
        - 闇の中の%YOU%の小さな呟きは、両側にはっきり聞こえる
        - 映画「あなたより先に……あの人の心を貰います！」
        - 質のよくない台詞を聞いて、%YOU%は黙って気まずい笑みを作る
        - ただ笑いが出る前に、傍らから手を掴まれる
        - 作品の質が低いせいか、館内は人が多くない
        - 言い換えれば、今周囲に座っているのはパーマーとメジロアルダンだけだ
        - 柔らかい感触が手に沿って少しずつ中央へ撫で、敏感な場所に触れる
        - acc: 1
          content: 「！？」
        - 両側の手が体を上下に遊ばせ、異様な感覚を煽る
        - %YOU%の意識はもう映画に置けず、歯を食いしばって漏れそうな声を堪える
        - そんな酷刑がどれだけ続いたか、ようやく上映終了のときが来る
        - 席でなんとか真っ赤な顔を上げ、荒い息で左右を見る
        - すべての元凶であるメジロアルダンとパーマーは、それぞれ片腕を占領し、%YOU%を席から引き上げる
        - 誰にも気づかれないうちに、二人同時に耳元へ寄る
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「トレーナー、こういうお話がお好きなのですね」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「こんなの見たら……欲しくなっちゃうでしょ」
        - %YOU%の返事を待たず、パーマーとメジロアルダンは左右から%YOU%を挟んで館を出る
        - 道の先でネオンのホテルを見て、%YOU%の顔は苦笑いになる
        - color: %COLOR_71%
          content:
            - fontWeight: bold
              content: %ARDAN%
            - 「外泊の届けは、用意してありますわ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「む……パーマーも、用意した……」
        - ベッドに座った二人が目を交わし、揃ってベッドで服を剥がされた%YOU%を見る
      # 3Pへ。アルダン上位、パーマー助手

movie_end:
  - color: %COLOR_71%
    content:
      - fontWeight: bold
        content: %ARDAN%
      - 「ま、まさか……」
  - color: %COLOR_71%
    content:
      - fontWeight: bold
        content: %ARDAN%
      - 「トレーナー……ひどいですわ」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「はぁ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「すごいね……トレーナー」
  - 二人はベッドに倒れ、間の%YOU%を一緒に抱き、甘く胸に貼りつく
  - 汗に塗れた体は色情な匂いを帯びているのに、離れる気配はない

delicious:
  title: いきなり美食タイム？
  lines:
    # 恋慕＞49のとき、一緒に間食で発生
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっ、トレーナー、また隠れてお菓子食べてる！」
    - 突然入ってきたパーマーが、ポテトチップスを取り出していた%YOU%の動きを大声で止め、机の上の袋をさらう
    - 厳密に言えば、休みに一袋食べるのは隠れて食べるうちに入らない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「食べるなら、パーマーにも分けてよ」
    - 袋を持ったままさっと二口食べ、自然に%YOU%の傍へ座る
    - acc: 1
      content: 「俺のは？」
    - acc: 2
      content: 「俺のポテチ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ」
    - 気づいたパーマーはやっとおかしいとわかり、気まずそうに持ってきた袋を取る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あはは、トレーナーの分、考えてないわけじゃないよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうせ午後、特に予定ないでしょ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だからマックイーンに頼んで、お茶請け少し探してもらったんだ～」
    - 言いながら、袋の中の小さな箱を全部出す
    - 目の前に並んだ数箱の菓子を見ていると、ポテチを奪われた件は起きなかったみたいだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほらほら、お茶も用意したよ～」
    - なぜか、サボって過ごすつもりだった午後が、二人のお茶会になる
    - ……ほどなくパーティーの空気に変わったことを無視すれば
# 二人の体力+200、体重+10～20（x10）

rest:
  title: 休息……？
  lines:
    # 恋慕＞74、ウマ娘、非処女のとき、小休止で発生
    - 天気の悪い日、%YOU%は事務室で窓の外を見て溜息をつく
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしたの、トレーナー？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一日トレーニングなくなっただけだよ。大丈夫だよ～」
    - 後ろから来るのは、パーマーの怠惰な声
    - 今日の環境から逃げて、嬉しそうに事務室に寝転んで携帯を弄っている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり、トレーナーの部屋って特別に楽だね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日、体が特別重い気がする～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーも来なよ～」
    - 事務室備え付けのソファで左右に二度転がってから、一人分の隙間を残す
    - 横向きのパーマーは、もう閉じそうな目を開けて%YOU%を手招く
    - acc: 1
      content: 「今日は……もういいや」
    - acc: 2
      content: 「それはちょっと……ごほん」
    - 何か言いたかった%YOU%は息を吐くだけにして、パーマーの誘いに乗ってソファへ座る
    - 大きくないソファに、二人が力を抜いて横になる
    - 扉の外は走れない天気、扉の中は怠惰な空気
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……たまにはこうするのも、悪くないね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こうして、二人でいて、何も考えない」
    - ソファのパーマーは目を閉じ、両手を%YOU%の腕に沿って登らせ、そっと抱きつく
    - パーマーだけの気配が%YOU%の傍を巡り、内側の欲望を煽る
    - 眠っているみたいな穏やかな鼻息が、ゆっくり首に当たり、痺れを誘う
    - acc: 1
      content: したい
    - acc: 2
      content: %SEX%を抱きたい
    - acc: 3
      content: %SEX%を抱く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふああ……トレーナーの匂い～ えへへ」
    - 傍らで眠たげなパーマーが朦朧とつぶやき、顔に潮紅が浮かぶ
    - 今日の天気は外出向きではない。室内運動向きだ
    - 下ですでに落ち着かない感覚が、理性を散らす
    - acc: 1
      content: 「全部パーマーのせいだ……」
    - acc: 2
      content: 「もう我慢できない……」
    - パーマーは朦朧と目を開けるが、目の前まで寄った顔を見る
    - 声を出そうとした口を強引に塞がれ、呼吸を奪われる
    - 長く押さえられたあと、パーマーは力なくソファに倒れ、上を見て小さく息を整える
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……？」
    - %YOU%はパーマーを丸ごと下に押さえ、空いた片手を迷わず下へ伸ばす
    - 指が布を越え、もう濡れた穴へ入って絶えず掻き混ぜる
    - 下のパーマーが少しずつ清醒していく顔を見て、指の動きも少し速くなる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ぐっ……うあっ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……だめだよ」
    - 力を入れて顔を覆い、でたらめに暴れる
    - それがどうした。先に誘ったのはパーマーだ。ここで止まれるわけがない
    - if: era.get('cflag:0:0') > 0
      content: とっくに充血した相棒は高く立ち上がり、布を開いた濡れた穴の縁にきつく貼りついている。もう少し前へ押せば、快感の波が簡単にパーマーの思考を壊すだろう
    - if: era.get('cflag:0:0') === 0
      content: 同じく濡れた体はパーマーの拒絶を待たず、二つの花弁がきつく貼りついて絶えず擦れる。もう少し力を入れれば、下の体は絶頂で震え止まらなくなるだろう
    - acc: 1
      content: 「このまま、いけ」
    - 敏感で震えている耳を軽く噛み、息を吹きかける
    - 穴は絶えず震え、それでも色情に開閉を繰り返す
    - もう堪えられない%YOU%は一気に震える穴へ突き、下から来る快感が二人の間に満ちるのを味わう
    - 衝撃で思考を飛ばされたパーマーは%YOU%の前に横たわり、体裁のない顔で両手を伸ばす
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……パーマーのトレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もっと、いいよ」
    - 細い両手が%YOU%の首を回り、%YOU%ときつく抱き合う
    - 目の前で欲望を煽ったパーマーに、もう冷静でいる理由はない
    - 残りの時間は、ゆっくり味わう時間だ
  # 馬跳

pre-travel:
  - color: %COLOR%
    content: 【パーマー号に乗って、%CHARA%とドライブへ行こう！】

travel:
  title: 短い旅
  lines:
    # 恋慕＞74、イベント「驚愕！スポーツカーが贈り物！」のあと、小型車／スポーツカーで外出
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うひょー！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり車で出る感じ、超爽快だよ！」
    - 二人は車に座り、強い風が窓からパーマーの顔を撫でる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり、車の感じ全然ちがうね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この感じ、レース場とも……普段走るのとも全然ちがうよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「う～ トレーナー、もっと速くできる？」
    - acc: 1
      content: 「これ以上は制御を失うぞ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、そっか……」
    - 傍らで風を味わい、自然に上体を揺らす
    - 手を上げて目の前で舞う髪を払い、窓の外の速い景色を見る
    - 車は海沿いに一路走り、ゆっくり人のいない駐車場に停まる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、今日は意外と人がいないね」
    - 車はもう停まっているのに、パーマーはまだ乗っている
    - 窓の外の、ほとんど人の見えない浜を眺め、黙ってベルトを外す
    - acc: 1
      content: 「降りないのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……トレーナーが連れてきてくれて、嬉しいよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもね、二人きりだと……」
    - 車内で私服のパーマーが、薄い赤を乗せて%YOU%を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これ、デートだよね？」
    - acc: 1
      content: 「ああ、デートだ」
    - パーマーの上体が少し傾き、反対側へ倒れる
    - 柔らかい肩が%YOU%に凭れ、薄い赤の顔で襟の蝶結びを解く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - だが動きはそこで固まり、蝶結びを解いた指は今、襟を挟んで開かないようにしている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これ、ちょっとやりすぎ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーが嫌なら、やめるよ」
    - 体がゆっくり%YOU%の腕から離れ、両手は慌てて服を整えようとする
    - acc: 1
      content: 「嫌じゃない……」
    - acc: 2
      content: 「したいなら、すればいい」
    - 結びを整えていた指が空中で止まり、引き上げていた服がまたゆっくり滑り落ちる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「つまり……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こうしても、いいの、トレーナーも？」
    - 迷いと逃げのあった目が、今は明るい
    - 深緑の上着が座席に落ち、今日のために用意した新しい下着が見える
    - 両手で%YOU%の顔を抱き、そっと自分のほうへ引く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ここで……だよね？」
    - acc: 1
      content: 「好きにしていい」
    - acc: 2
      content: 「決めたなら、自分で動け」
    - %YOU%の許しが、パーマーの内側の理性の枷を外す
    - 騒がしい車内は、だんだん繰り返す喘ぎと水音だけになる
    - 日没の帰路になってから、車内に散らばったティッシュと犯行の道具を慌てて片付ける
  # 馬跳

pre-joke:
  - color: %COLOR%
    content: 【%CHARA%が眠っているとき……】

joke:
  title: 小さな物語の始まり
  lines:
    # 恋慕＞85、パーマーが昏睡のときターン終了
    - color: %COLOR%
      content: どれだけ経ったかわからない。もうレース場を失った%CHARA%は本家へ戻されていた
    - color: %COLOR%
      content: %YOURNAME%も、%CHARA%の相棒という立場を失っていた
    - color: %COLOR%
      content: 二人の繋がりはここで切れ、この先は交差しないように見えた
    - color: %COLOR%
      content: %CHARA%と%YOURNAME%がもう一度出会ったとき、また繋がったみたいだった
    - color: %COLOR%
      content: 迷いなく、一言もなく%YOURNAME%の胸へ飛び込むのに、現役の頃のようにきつくは抱きしめない
    - color: %COLOR%
      content: ただ胸に貼りつき、この心拍を感じたいだけだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、トレーナー」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんね……」
    - color: %COLOR%
      content: %YOURNAME%の腕からもう一度起き上がり、震える手を上げる
    - color: %COLOR%
      content: 明るい指輪が指に乗り、ひどく目立つ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「パーマー、もう結婚したよ……」
    - color: %COLOR%
      content: 涙が頬を伝うのに、力のない微笑みを浮かべる
    - color: %COLOR%
      content: 長く抱き合い、もう一度目を開けるまで
    - divider: true
    - color: %COLOR%
      content: パーマーはいきなり体の上の布団を払い、呼吸できない体に荒く空気を入れる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「夢？」
    - color: %COLOR%
      content: 寮で座り込んだパーマーは、まだ震える自分の両手を見る
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「どうした？ 悪夢見た顔してるぞ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでもない……でも、悪夢だったよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー以外の人と結婚とか……」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「ん、トレーナーがどうかしたのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでもない！ 本当に！」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「なにかあるなら、早く相棒に言ったほうがいいぞ」
    - color: %COLOR_104%
      content:
        - fontWeight: bold
          content: %ACE%
        - 「率直なほうが、効果いいかもな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「率直……」
    - color: %COLOR%
      content: 垂れた指がそっと胸を押さえ、まだ落ち着かない心臓を感じる
    - color: %COLOR%
      content: もう一度目を開けたパーマーは、決めた目で立ち上がる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わかった……率直、ね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （結婚の話を直接したら、冗談だと思われるよね）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （でも、冗談なら……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーにちょっと冗談言ったら、怒るかな……」

not_joke:
  title: 面白くない冗談
  lines:
    # 「これは冗談……」発生後にターン終了
    - 仕事を終えた%YOU%が椅子から立ち上がったとき、入口から見慣れた足音がする
    - 入口に現れたのは、今日は休みのはずのパーマーだった。なぜここにいる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……今、時間ある？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今、ちょっと話したいことがあるんだ」
    - 底のない声で言い終えてから、後ろ手で扉を閉める
    - 静かな空間で、パーマーはゆっくり%YOU%の前まで来る
    - 問答無用で全身を%YOU%の胸に埋め、小さく咽ぶ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、トレーナー」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんね……」
    - %YOU%の腕から起き上がり、震える手を上げる
    - 明るい指輪が指に乗り、白い灯りを返す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、あの、言いづらいんだけど……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「パーマー、結婚するかも」
    - acc: 1
      content: 「結婚！？」
    - いつの間にか、パーマーはもう%YOU%の前にいない
    - 現状を理解し直した%YOU%はまだ息を整え、腕に筋肉痛が走る
    - 顔いっぱいに驚きを乗せて、パーマーは手を押さえたままぼんやり見ている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……？」
    - 数歩下がったパーマーの顔に一筋の喜びがあり、ゆっくり手を握る
    - 白い指輪が床に落ち、プラスチックの音を立てる
    - 「プラスチック？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……そうだよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただの、プラスチック」
    - 握っていた手がゆっくり開き、元の白い指のまま、指輪の跡はない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、パーマーのことで、怒った？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「冗談だよ、ただ……漫画で見て、あはは」
    - %YOU%の顔に向かって、気まずそうに後頭部を掻く
    - この玩具を付けたときから、こんなに激怒する現状は全く想像していなかった
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただの冗談、ただの冗談……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの、トレーナー？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー？」
    - 驚きと喜びのあった顔が一気に消え、慌てて前へ数歩出る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの、ごめん……」
    - acc: 1
      content: 「その冗談は面白くない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ひっ！」
    - まだ少し運を頼っていたパーマーが震え、深く息を吸う
    - 口を開いて黙って開閉し、また閉じる
    - 今の%YOU%が怒っているのは、一目でわかる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの……」
    - acc: 1
      key: sex
      content: 行動で
      lines:
        - 部屋にはパーマーのだんだん慌てた呼吸のほか、恐ろしいほど静かだ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「悪いのはわかってる。だから……」
        - まだ何か弁解していたパーマーが、突然言葉を止める
        - 唇の自由を容赦なく奪われ、%YOU%に全力で腕の中へ掴まれる
        - 心臓は激しく跳ねるのに、その力を%YOU%を押しのけるほうには使わない
        - もう認めたパーマーは黙って自分を抱く人を抱きしめ、目を閉じる
        - もう一度口が離れたとき、明るい青い瞳は水気に覆われている
        - 目の前の、まだ怒っている顔が、今はひどく愛おしい
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もし、もしこうしたら」
        - パーマーは口を開くとき、そっと前へ寄る
        - 潮紅で満ちた顔を少し前へ出し、%YOU%の耳を噛む
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これで気が済むなら……拒まないよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%SELF_CALL%、ずっとあんたのだよ」
        # 馬跳
    - acc: 2
      content: 言葉で
      lines:
        - 静かな部屋を%YOU%の声が破る
        - パーマーはぼんやり%YOU%を見て、目に少し恐れがある
        - acc: 1
          content: 「……そんな冗談は受けられない」
        - そう言い終えた%YOU%は腹を立てて席へ戻り、鞄を取る
        - 冗談が過ぎたと知ったパーマーは静かに自分の手を掴み、両脚が落ち着かない
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、トレーナー……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「行くの？」
        - 傍らに立つパーマーの声は小さく、そっと%YOU%の裾を掴む
        - 目に涙を浮かべ、うつむいている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーが嫌なら……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「も、もうしない……」
        - 言葉に咽びが混ざり、震えている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーの気が済むなら、なんでもする！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だから、そんな顔しないでよ……」
        - 冗談の重さを知り、パーマーも恐れを味わっている
        - acc: 1
          content: 「もういい。こういう冗談は禁止だ」
        - acc: 2
          content: そのまま去る
        - その場に立ったまま%YOU%が去る後ろ姿を見て、パーマーはしゃがんで玩具の指輪を拾う
        - 数秒きつく握ってから、怒って傍らのゴミ箱へ捨てる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「恋愛漫画なんて……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「こんな冗談、なんの意味があるの……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「パーマー、ほんと……馬鹿！」

not_joke_end:
  - %YOU%の傍に動かず倒れたパーマーは、ただ微笑んでいる
  - そっと%YOU%の体に凭れ、その中に寄り添う
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「やっぱり、強引なトレーナー、かっこいいね」

end_joke:
  title: 冗談は、もう終わり
  lines:
    #「面白くない冗談」選択分岐2、次ターン開始時
    - これは、面白くない冗談だ
    - 一人きりのパーマーは、頭の中でその言葉を何度も味わい、プラスチックの玩具の指輪を見ている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こういう冗談、禁止」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……冗談じゃなかったら、トレーナーはどうなるんだろ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もし、もし……」
    - 少し虚ろだった両目が、ゆっくり明るさを取り戻す。瞳に映る玩具は、もうただの玩具じゃない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「指輪が、トレーナーのためのものだったら」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もし、もし……」
    - 独り言の速度が上がり、体まで妙に昂ぶっていく
    - 心臓が激しく跳ね、息づかいも不自然に速くなる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちゃんと」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「二人分の指輪、用意しないとね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「楽しみだなぁ……トレーナー～」
  # 恋慕+4

concern:
  title: 心配しすぎだよ！
  lines:
    # 男/FUTA、ウマ娘、恋慕≥74、同チームメジロライアンかつ恋慕≥74、依存なし
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんか最近、穏やかだね～」
    - %YOU%とパーマーの二人きりになった午後、いきなりぼそっと呟く
    - acc: 1
      content: 「たしかに」
    - %YOU%の気のない返事を聞いて、パーマーは笑いながら寄ってくる
    - 両手を椅子の背に乗せ、机の書類を気ままに眺める
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんな日なのに、まだこんなに頑張ってるんだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たまには休んだほうがよくない？」
    - acc: 1
      content: 「休んでる場合じゃないんだよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えー、そうなの？」
    - 事務室に誰もいないのを見計らって、こっそり%YOU%の顔を摘む
    - 指で軽く何回か摘んだあと、パーマーのほうが先に笑い出す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、たまには力抜こうよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんなに仕事、好きなの？」
    - 耳元にパーマーの声が残って、%YOU%の仕事の気が散る。考えを手放して、後ろへ凭れかかる
    - 後頭部に柔らかい感触が伝わって、数秒してようやく気づく
    - acc: 1
      content: 手で触れる
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え？」
        - 最初は何も気づいていなかったパーマーは、%YOU%の指が自分の胸に触れたのを見る
        - 空気が一気に静まり、状況を確かめている%YOU%だけが、掴んだ場所を軽く摘んでいる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの……」
        - 正座のままの%YOU%にはパーマーの今の顔は見えないが、自分が何をしたかはもうわかっている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、ここ好きなの？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もう……」
    - acc: 2
      content: 何もしない
      lines:
        - 後頭部の優しい感触を味わったまま、%YOU%は何もしないことを選ぶ
        - 普段は目に入っても、自分から触れにくい場所が、今はぴったり張り付いている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、眠いの？」
        - 「ま、まあ、そうかも」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、じゃあ今日は早めに上がる？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日は特に用事ないし、パーマーがトレーナーを送ってくよ」
        - パーマーは笑って手を離すが、椅子の後ろからは離れない
        - 正座のままの%YOU%にはパーマーの今の顔は見えないが、何が起きたかはもうわかっている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、意地悪だね。わかってるくせに」
    - パーマーは%YOU%の頭を軽く叩くが、怒っている様子はない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （そんなに、ここが好きなんだ……）
    - %YOU%の傍を離れ、気になって制服の下の胸をそっと押す
    - 視線をこっそり%YOU%のほうへ向けると、少し期待した目が返ってくる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （実はトレーナーに……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （ダメ、ってわけじゃないよ）
    - 覚悟を決めたみたいに、パーマーはそっと%YOU%の手を引く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「欲しいなら……いいよ」
    - パーマーは%YOU%の掌を胸に押し当て、少し力を入れて何回か握らせる
    - 顔は抑えきれないほど赤くなっているのに、逃げたい気持ちを必死に押さえている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんか……変な感じ……」
    - 顔に笑顔を作るが、無理をしているようには見えない
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: ？？？
        - 「パーマー！ %CALLNAME_27%、中にいる？」
    - 扉の外から突然、聞き慣れた明るい声がして、パーマーと%YOU%の動きが止まる
    - 二人のあいだに理性が戻り、同時に視線を入口へ向ける
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「いつもの……持ってきたんだけど……」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「……え？ えええ？」
    - 遠慮なく扉を開けたライアンが見たのは、二人がくっついている光景だった
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「え……もしかして、私……%CALLNAME_27%が……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - acc: 1
      content: 「……」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「うわあああ！」
    - メジロライアンは抱えていたバッグを抱えたまま、すぐ振り返って逃げようとする
    - だが「逃げ」に関しては、パーマーのほうがずっと手慣れている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「待って！」
    - パーマーは逃げるメジロライアンを片手で掴み、一気に壁へ押し倒す
    - バッグに隠れていても隠しきれない赤い顔を見て、パーマーも気まずいように固まってしまう
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「あ！ ご、ごめん……うっ」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「私、空気読めなかった……？」
    - ぺたりと伏せた耳が、力なく一度跳ねる
    - 目に少し水気を浮かべ、弱々しく上を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ライアン……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あんたも、トレーナーのことで？」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「……うん」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「トレーナー、最近すごく疲れてるみたいで……」
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「だから、いつものすごく気持ちいい枕、持ってきたの……」
    - バッグを抱えたメジロライアンは、ゆっくり体を縮めていく。視線だけがパーマーを見ている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そっか」
    - パーマーは手を離し、ゆっくりしゃがみ込む
    - 顔を隠していたバッグをそっとどかし、笑いながらメジロライアンと目を合わせる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「実はあたしたち、同じなんだよ」
    - 音を立てないように扉を閉め、ついでに鍵もかける
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「あの……パーマー？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はいはい、気にしない気にしない」
    - パーマーはメジロライアンの後ろから%SEX%の肩を押し、何も知らない%YOU%のほうへ歩いてくる
    - 素早く顔を隠していたバッグをどかし、ついでにメジロライアンの胸の、跳ねている場所を軽く押す
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「パ、パーマー！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大丈夫だよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーも、ここ好きでしょ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今、捕まえてあげたよ」
    - パーマーはメジロライアンを%YOU%の前に立たせ、自分は後ろに隠れる
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - 「うう、やめてよパーマー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもライアンも、期待してるでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえトレーナー、どうする？」
    - パーマーはメジロライアンの後ろから、もう真っ赤な顔を覗かせて、%YOU%の表情を盗み見る
    - acc: 1
      key: sex
      content: 「ライアンをいじめる」 # 3P、相手ライアン
      lines:
        - メジロライアンの胸元のふくらみから、目が離せない
        - %YOU%が考えているうちに、手は本能のまま掴んでいる
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「うっ！」
        - 掌に、激しい震えが伝わる
        - メジロライアンは目を固く閉じ、その場で硬直する
        - %SEX%が勇気を出して目を開ける前に、パーマーがそっと前へ押す
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「や、やめて……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大丈夫だよ、トレーナー」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ライアン%SEX%なら、きっと平気」
        - 傍らに座ったパーマーは、メジロライアンの両手を軽く押さえ、%YOU%の顔を見る
    - acc: 2
      content: 「パーマーをいじめる」 # 3P、相手パーマー
      lines:
        - ライアンの後ろに隠れたパーマーを見て、胸の奥に別の考えが浮かぶ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「さあ、ライアンは気にしないって……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え、え？」
        - さっきまでパーマーの顔にあった笑顔が、少しずつ消えて固まっていく
        - 立ち上がった%YOU%は、メジロライアンの肩越しに手を伸ばし、パーマーを掴んで一気に引き寄せる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「えっ！ あたしじゃないよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ライアン%SEX%のほう……」
        - 何か言おうとしていたパーマーは、だんだん動きを止め、少し恐れて体を縮める
        - 顔を真っ赤にして、高鳴る胸を押さえている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……あたしも、ほしい」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「パーマー……」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「あたしたち、ほんとおんなじだね」
    - acc: 3
      content: 「二人まとめて押し倒す」 # 3P、パーマー主導
      lines:
        - 目の前でぴったりくっついている二頭の愛馬を見て、%YOU%の目から理性が消える
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ひゃっ！」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「わっ！」
        - さっきまで楽しそうにからみ合っていた姉妹が、今は二人とも床に倒れている
        - 荒い息が三人のあいだに響き、次の瞬間にはもっと荒い声に変わりそうだ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「二人同時に……」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「えっ！？ 二人……？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それはちょっと、やりすぎだよ！」
        - 上に乗っていても、力は下の二人のほうが強い
        - %YOU%はバッグの上に寝かされたまま、自分のズボンが容赦なく奪われるのを見る
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「ん、トレーナーがこういうの好きだなんて……」
        - color: %COLOR_27%
          content:
            - fontWeight: bold
              content: %RYAN%
            - 「ひどいね……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「お仕置きしないと、ダメだよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でしょ？ トレーナー」
        - パーマーは%YOU%の腰に跨がり、メジロライアンを呼んで一緒に押さえ込む
        - 服が床に落ち、二つの美しい体が%YOU%の上にのしかかる
        - 下の小さなトレーナーは、もう準備ができていて、不満そうに空気の中で微かに震えている

concern_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「なんか、すごく大事なことしちゃった気がする……」
  - color: %COLOR_27%
    content:
      - fontWeight: bold
        content: %RYAN%
      - 「そ、そうだね」
  - 体中にいろいろな液体がついた二頭の雌は、開いた太ももから白い液がまだ流れている
  - とろんとした両目がぼんやり%YOU%を見る。二人の顔の前に、愛液まみれの凶器が近づいている
  - %YOU%は愛馬の髪をそっと撫で、%THEY%を促す
  - color: %COLOR_27%
    content:
      - fontWeight: bold
        content: %RYAN%
      - 「ひどいなぁ～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あたしたちのトレーナー、すごい変態だね……」
  - 柔らかい舌が敏感な表面を滑り、唾液の跡を残す
  - 唇が、体をかき乱した元凶にそっとキスする
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「まだほしいなら……」
  - color: %COLOR_27%
    content:
      - fontWeight: bold
        content: %RYAN%
      - 「言ってね❤️」

dessert:
  title: スイーツ……ちょっと違う？
  lines:
    # 男/FUTA、ウマ娘、恋慕≥74、同チームメジロマックイーンかつ恋慕≥74、依存なし、メジロマックイーン菊花賞後にランダム
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「んー……最近、メロンパフェが人気らしいね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもフルーツパイも悪くなさそう。どうしよう」
    - パーマーはスマホを抱えて、悩ましげに画面を前後にめくる
    - acc: 1
      content: 「スイーツが食べたいのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？ 違うよ」
    - %YOU%の声を聞いて、パーマーは自然にソファから体を起こす
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最近、マックイーンずっと頑張ってるでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だからさ、スイーツ買って%SEX%に渡そうかなって……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも最近スイーツ多すぎて、選べないんだよね」
    - acc: 1
      content: 「本人に直接聞きに行ったら？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本人に直接？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「んー……それもアリ、かな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもすぐ、食べすぎ止め役になりそう」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「マックイーン%SEX%、我慢できなくて一気に食べちゃうからね～」
    - acc: 1
      content: 「それは%SEX%本人に聞かせられないな」
    - acc: 2
      content: 「言い方がひどいぞ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも本当なんだもん～」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「玄関で、ちゃんと聞こえてますわよ。お二人とも」
    - 二人の和やかな話し合いに、別の声が割り込む
    - びっくりして、パーマーと%YOU%は揃って入口のほうを振り返る
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「体重の管理が苦手なのは、自覚してますけれど……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「こう言われるのは、少しひどいんじゃありませんの？」
    - 扉が閉まる音とともに、メジロマックイーンは不満そうに事務室へ入ってくる
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「もう……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「冗談自体は、嫌いではありませんわ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あはは、その……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほら、最初はスイーツ買って渡すつもりだったんだよ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今度だけ、許してよ～」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「だ～め～ですわ」
    - 頬を膨らませたメジロマックイーンは、%YOU%とパーマーの前まで来て、不満そうに腕を組む
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃ……どうしたら許してくれるの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「できることなら、なんでもするよ！」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「ふむ、考えますわね」
    - 悪戯っぽい笑みを浮かべて、慌てているパーマーを見る
    - だがすぐ、パーマーを見ていた目が、傍らで困っている%YOU%へ移る
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「なんでも、ということですもの……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「じゃあ、少しトレーナーに手伝ってもらいますわ～」
    - そう言いながらメジロマックイーンは、パーマーの目の前で%YOU%の上に座る
    - acc: 1
      content: 「あの、俺の意見は？」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「%CALLNAME_13%は、黙っていてくださいませ」
    - メジロマックイーンに正式な呼び方で止められ、下に座った%YOU%は気まずい顔で口を閉じるしかない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの、それだとトレーナーが困るよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「用事があるならあたしに言って……スイーツ屋の買い出しとか！」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「それじゃあ、お仕置きになりませんわ」
    - そう言いながら、%YOU%の太ももに座った尻が少し上へずれる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの、さすがにやりすぎ……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「トレーナーは、文句ありませんわよね？」
    - 口を出せない%YOU%は、何か言いたくても、前のパーマーへ視線で合図するしかない
    - 残念なことに、慌てているパーマーはその視線に全然気づかない
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「ほら、トレーナーは文句なしですわ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも……」
    - パーマーの視線がメジロマックイーンと%YOU%のあいだをぐるぐる回り、不安そうに指を動かす
    - 何か言いたそうなのに、自分の前言があるせいで切り出せない
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - （……ちょっとやりすぎましたわね）
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - （パーマーと少し冗談のつもりだったのに……）
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - （どうしましょう。謝っても、パーマーは受け取りそうにありませんわ）
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「えっと、もう怒りは収まりましたから、その……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ひどすぎ……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「え？」
    - 聞こえていないみたいに、パーマーは一人で顔を赤くしている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしも、こうしてトレーナーと一緒にいたい！」
    - メジロマックイーンと%YOU%が反応する前に、パーマーは飛びかかってくる
    - 普通の事務椅子では三人の重さと衝撃を支えきれず、その一撃で床へ倒れる
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「痛いっ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、ご、ごめん！」
    - 椅子が床に落ちる音とともに、パーマーは理性を取り戻したみたいで、慌てて立ち上がる
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「い、いいえ、謝るのはわたくしのほうですわ……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「こんなこと、するべきではありませんでした……パーマー？」
    - 自分を責めるメジロマックイーンは、立ち上がったパーマーへ謝るが、返事はない
    - パーマーの目が少しおかしいと気づいたとき、同時にその視線の先を追う
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「あ……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「トレーナー、もしかして……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「わたくしたち、のせいですの？」
    - そう察したメジロマックイーンはゆっくり起き上がり、後ろの%YOU%を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こ、こんなの……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「あの、パーマー……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「トレーナーは、お返ししますわ……」
    - 弱々しく言いながら、%YOU%の腰から身を起こす
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 少し悪いことをした自覚を帯びて、不安そうに%YOU%を起こそうとする
    - 両手で掴んだ瞬間、慌てて何かの部位に触れてしまう
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「マックイーン、あんた……」
    - 動きを止めたメジロマックイーンは、上から睨むパーマーの目を恐る恐る見る
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「ごめんなさい！」
    - 大きな声で謝ったあと、メジロマックイーンは入口へ走っていく
    - だが扉を出る前に、パーマーは一気にメジロマックイーンの肩を掴む
    - 扉が内側から施錠される音とともに、二人の%UMA%は再び%YOU%の前へ戻ってくる
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「パーマー！？ これは？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - メジロマックイーンの声が聞こえていないみたいに、パーマーは%SEX%を引いて%YOU%の傍へ来る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「謝るなら……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーに言いなよ！」
    - acc: 1
      content: 「じゃあ俺の意見は……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーは黙ってて！」
    - 声に強さがあって、%YOU%が言おうとした言葉をまた押し戻す
    - パーマーは戸惑うメジロマックイーンの手を掴み、そっと%YOU%の体へ押し当てる
    - 重なった手が胸元から、少しずつ下へ滑っていく
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「ごめんなさい、ごめんなさい！」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「パーマー、わたくしが悪かったですわ、こんな……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあトレーナーに聞いて」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「文句あるかどうか」
    - acc: 1
      key: sex
      content: 「文句ない！」 # プレイヤー主導
      lines:
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「ほ、ほら、トレーナーも文句なしですわ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「じゃあ、続けていいんだね」
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「え？」
        - そう言ったパーマーは、メジロマックイーンの手を強く掴む
        - 少しずつ%YOU%の下半身へ潜り込み、温かい液体にまみれる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「マックイーンも、こういうの好き……でしょ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「じゃあ、文句なしのトレーナー」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふわふわのマックイーンだよ～」
    - acc: 2
      content: 「文句ある！」 # マックイーン主導
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「本当に、文句あるの？」
        - パーマーの目に、少し問い詰める色がある
        - 手は半ば強制でメジロマックイーンを掴んだまま、敏感な場所を這っている
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「パーマー……」
        - 目の前に引き出されたメジロマックイーンは、顔を赤くしたまま何か言おうとする
        - 両脚が落ち着かなそうに擦れ合い、視線が左右に泳ぎ続ける
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「そろそろ、手を離していただけます？ ……わ」
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「トレーナーも困っていらっしゃいますし……」
        - 弱々しく言っているのに、だんだん荒くなる息がすべてを物語っている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でもマックイーン、もうこんなになってる」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーもだよ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「最初にトレーナーに意見させるなって言ったの、あんたでしょ？」
        - メジロマックイーンを掴んでいた手を離し、パーマーは自然に二人の服を解く
        - 布が床に落ちると、涎が出そうなほど美しい体が%YOU%の前に現れる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「自分から、どう？」
        - そっと前へ押し、メジロマックイーンを自分と%YOU%のあいだに挟む
        - color: %COLOR_13%
          content:
            - fontWeight: bold
              content: %MCQUEEN%
            - 「そ、それなら……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「少し力抜こうよ、マックイーン」
        - 理性の糸が切れたみたいに
        - マックイーンとパーマーが、揃って%YOU%の上に覆いかぶさる

dessert_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「さすがトレーナー……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あたしのトレーナー、すごくすごいよ～」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「あ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でしょ？」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「は、はい」
  - %YOU%の下に座ったメジロマックイーンは、体をくねらせながら、とろんとした目で%YOU%の顔を見上げる
  - そんな姉妹を見て、パーマーは黙って%YOU%の胸の中へ、もう一度強く潜り込む
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「だって、あたしのトレーナーだもん」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「……あの」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「な～に～」
  - color: %COLOR_13%
    content:
      - fontWeight: bold
        content: %MCQUEEN%
      - 「スイーツ……まだ、ありますの？」

party:
  title: パーティーの時間
  lines:
    #恋慕≥74、同チームダイタクヘリオスかつ恋慕≥74、依存なし、商店街で発生
    - 何の変哲もない休日、%YOU%はパーマーの一本の電話で家から引っ張り出される。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっほー！ %CALLNAME%！ こっちこっち！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「おお、%CALLNAME_65%も来た！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「これでパーリィータイムだ、やっほー！」
    - %YOU%を迎えに出たあと、ダイタクヘリオスとメジロパーマーは揃って楽しそうに走り出す。
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「まずは、歌う時間だよ、行こっ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おお、まずは音楽！」
    - パーティーの開幕は、こうしてカラオケに決まる。
    - いつもの店に入り、もう打ち解けている店主に挨拶してから、三人で個室へ入る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！ 何か歌う？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「んふ？ %CALLNAME_65%が先に来る！？」
    - マイクを持ったダイタクヘリオスが振り返り、目に興奮の星がいっぱい浮かんでいる。
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「パーマーっち～、先にやらせてよ～」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「最近やっと覚えた新曲なんだ、あたしにやらせてよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はいはい～、待ってるよ～」
    - 選曲パネルから離れたパーマーは、自然に%YOU%の傍へ座る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ヘリオスと一緒だと、ほんと楽しいね」
    - acc: 1
      content: 「気づいたら気分が上がってる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おっ、始まるみたい！」
    - パーマーの耳が軽く震え、ダイタクヘリオスのほうを見る。
    - 両手は勝手に机のシェイカーを取り、鳴り始めた音楽に合わせて振る。
    - 軽快なシャカシャカが、ダイタクヘリオスの超速リズムに乗って、三人の個室を十数人分のにぎやかさにする。
    - divider: true
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あはは～、ちょっと盛り上がりすぎた～」
    - 再び座ったメジロパーマーは、体をソファへ預けてぐったりする。エアコンの部屋でも湯気が立つほどだ。
    - ダイタクヘリオスはまだ楽しそうに歌っているが、目に見えて勢いは落ちている。
    - acc: 1
      content: 「疲れたか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、ちょっと疲れた」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こういうとき、ヘリオスが羨ましいよ……すごく持久力ある！」
    - ソファに崩れたメジロパーマーは、マイクを握って騒ぐダイタクヘリオスを見て、赤い顔で小さく笑う。
    - きらめくミラーボールが三人に七色の光を落として、空気が少し微妙になる。
    - 明るくない空間で、メジロパーマーがシャツを引いて熱を逃がす動き、ダイタクヘリオスが跳ねるときの音……
    - %YOU%の目は、なぜかそういう隠したい場所へ集まってしまう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？ 顔赤いよ？ 暑い？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、じゃあ飲み物頼むね！」
    - ずっと%YOU%を気にかけているメジロパーマー。
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「うえっ！？ %CALLNAME_65%、疲れたの！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「じゃあ一旦休憩！」
    - 異常にまったく気づいていないダイタクヘリオス。
    - そして今この瞬間、照明の陰で敏感な場所を隠している%YOU%。
    - acc: 1
      content: （これはまずい……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、何飲む？」
    - ソファから体を起こし、%YOU%のほうへ寄ってくるメジロパーマー。
    - マイクを置いて、どかりと%YOU%の隣に座るダイタクヘリオス。
    - 直接触れていなくても、体温が呼吸とともに両側から漂ってくる。
    - ある場所が、硬くなる。
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「%CALLNAME_65%？」
    - 運が悪いときは、冷たい水でも歯に挟まる。
    - 本来なら音楽に合わせて回るミラーボールが、「ウマ跳び伝説」のイントロでソファへスポットを集める。
    - 一瞬で、両側のウマ娘がはっきり見てしまう。
    - 服の上に、不自然な小さな膨らみ。
    - メジロパーマーが飲み物を頼もうとしていたスマホがソファに落ち、鈍い音を立てる。
    - 本来なら騒いでいるはずのダイタクヘリオスも、このときは顔を赤くして目を逸らす。
    - content:
        - fontWeight: bold
          content: 音楽
        - 「ウマ跳び～ウマ跳び～」
    - 誰からともなく、はっきりした嚥下の音が沈黙を破る。
    - 誰もが、顔まで真っ赤になっている。
    - acc: 1
      key: sex
      content: 「しよう」
      lines:
        # プレイヤー主導、ヘリオス助手
        - 一発で決まる。
        - メジロパーマーは目を閉じ、そっと%YOU%の前へ身を寄せる。
        - 湯気で湿った服が、ソファの隅へ飛ばされる。
        - 深い青のメッシュが%YOU%の下腹を撫で、熱い小さな顔が下へ寄り添う。
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……優しくしてね……」
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「ん……%CALLNAME_65%の匂い……」
    - acc: 2
      content: 「する？」
      lines:
        # パーマー主導、ヘリオス助手
        - %YOU%は、いちばん聞いてはいけないことを聞いてしまった。
        - その問いに、口で答える必要もない。
        - 指が%YOU%の筋肉を辿って、両側から服の中へ入り、昂ぶった場所を掴む。
        - %YOU%が声を我慢しきれなくなる直前、小さな口にも塞がれる。
        - 倒れる前、視界の最後にあったのは、白い三日月のメッシュだった。

party_end:
  - ティッシュでソファをざっと拭き、トイレで体の跡を洗い落とす。
  - 三人とも顔を赤くしたまま黙って、服を整える。
  - content:
      - fontWeight: bold
        content: 音楽
      - 「君の愛馬が！」
  - ポニーテールを結んでいた両手が一瞬止まり、画面を見る。
  - 二対の目がしばらく画面を見て、期せずして%YOU%を見る。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「じーー」
  - color: %COLOR_65%
    content:
      - fontWeight: bold
        content: %HELIOS%
      - 「じーー」
  - acc: 1
    content: 「わ、わかった……」
  - 両側の視線の中、%YOU%は深く息を吸う。
  - 両手を広げ、二人のウマ娘を強く抱きしめる。
  - 「二人とも、俺の愛馬だ！」
