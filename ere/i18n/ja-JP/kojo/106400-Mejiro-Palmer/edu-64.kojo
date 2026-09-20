# @file メジロパーマー - 育成
# @author KUN
# @author Claude (翻訳)
train:
  # BASENAME:0 = 体力
  - if: era.get('base:64:0') < era.get('maxbase:64:0') * 0.45
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あー、%SELF_CALL%にも限界はあるよ……」
      - %CHARA%は少し困ったように苦笑するが、準備の手は止めない。
  - if: era.get('base:64:0') >= era.get('maxbase:64:0') * 0.45
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「どう、トレーナー？ 今日の%SELF_CALL%は火力全開だよ！」
          - スタート地点で少し前傾し、目に真剣な光が宿る。
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今、すごくワクワクしてる……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ゴルフで例えるなら、絶対に超高得点が出るやつ！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今のあたしなら、ずっと走っていられそう。」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「爆速で……違う、神速でずっと先頭を走るよ！」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ん～、みんな頑張ってるね～」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「こういうの見ると、あたしもハイになっちゃう……いいね！」
      # CFLAGNAME:40 = やる気
      - if: era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「ふんふん～、調子は絶好調！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今日のトレーニング、始めよっか！」
      - if: era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「おや、トレーニングの時間？」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「じゃあ全力で走っちゃうよ！」
      - if: era.get('cflag:64:40') < 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「たまに……頭空っぽにして、穴掘りしたくなっちゃうよね～」
          - 少し微妙にふわふわした声を出して、体をゆらゆらさせる
      # CFLAGNAME:48 = 育成ターン計時
      - if: era.get('cflag:64:48') > 47 + 24
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「なんかハイが止まらない……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「もっとハイになるために、お願い、%CALLNAME%！」

ts_add:
  title: 追加トレーニング
  lines:
    - トレーニングの時間が終わっても、周囲では他の%UMA%が追加トレーニングの準備をしている声が聞こえる。
    - %CHARA%の耳がその気配を拾って、興味ありげに震える。
    - メニュー的には今は休むべきだが、%CHARA%がそこまで行きたいなら……
    - acc: 1
      key: select
      content: 「行きたいなら行ってこい」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「了解！ じゃあ行ってくるね！」
        - %CHARA%は笑顔でトレセンの場へ戻り、違和感なくトレーニングに混ざる。
        - これでこっちも残業確定だ。
    - acc: 2
      content: 「次はあたしたちもそうしよう」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「了解！ じゃあ今日はしっかり休むね。」
        - %CHARA%は後頭部を抱え、ついでに肘で隣の相棒を軽く叩く。

train_fail:
  title: 保健室で
  lines:
    - トレーニングで、ほんの少しのアクシデントが……
    - 急いで保健室へ運び、%CHARA%をベッドに寝かせて、ようやく安心する。
    - %CHARA%は傍で心配している%YOU%を見て、思わず小さく笑う。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あはは、心配しないで。%SELF_CALL%の体は頑丈だよ。」
    - acc: 1
      content: 「ダメだ。ちゃんと休め」
    - acc: 2
      content: 「自分の体を信じられるのが一番だ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、そうだね。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「心配しないで。すぐ起きてくるから。」
    - 手を上げて、そっと%YOU%の胸を叩く。

race_start:
  title: レースの前
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「準備完了！ いつでもいけるよ！」
    - 迷いなく、控え室で肩を左右に回し、いつでも出走できる様子だ
    - こんなパーマーに、余計な心配の言葉はいらない
    - acc: 1
      content: 「楽しんで走ってこい！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おっ！ 了解！」
    - %YOU%に向かって親指を立て、肩の力を抜いて控え室を出ていく

race_end_win:
  title: レース勝利
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり、思いっきり走るのが一番だよ！」
    - パーマーは堂々と%YOU%の前に立ち、白い首を伝う汗を拭く
    - 両手を伸ばして伸びをしたあと、自然に後頭部へ回す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えへへ、トレーナーのおかげだね～」

race_end_lose:
  title: レース敗北
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー……負けちゃった」
    - パーマーは腰に手を当て、沈んだ目で地面を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう、あたし何やってるんだろ……」

#募集後の休息
beginning:
  title: メジロパーマー、登場！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！ 準備できたよ！」
    - パーマーは場に立って%YOU%に手を振る。体の調子も、もう整えている
    - 小さく跳ねて数歩。万全だと示すように
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このくらいのウォーミングアップだけど、十分だよね」
    - 周りと比べても十分整った準備なのに、パーマーはまだ自分を気にしている
    - acc: 1
      content: 「十分だと思う」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えー、そう？ あはは……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっと、これじゃ足りない！ って思ってたんだよね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり、見てくれる人がいると全然違うね！」
    - そんなパーマーを見て、%YOU%の胸にわずかな不安が残る
    - トレーニング場の記録はたくさんある。少し気を配れば見つかる
    - パーマーの記録を見れば、%SEX%が自分で言うほど弱くないのはわかる。足りないのは、決定打になる何かだ
    - たとえば、あの日のレースで使った走り方か？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ、今日のトレーニングは？」
    - acc: 1
      content: 「メニューを決める前に、好きに走ってみよう」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え、好きに走る？」
    - パーマーの声に、意外そうな色が混じる
    - acc: 1
      content: 「もちろん、お前の好きなやり方で」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自分の好きなやり方？ でも、それだとメジロ家に一風変わった%UMA%がいるって思われそうで、ちょっとまずくない？」
    - acc: 1
      content: 「契約したのは、メジロパーマーのお前だ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？ どういうこと？」
    - acc: 1
      content: 「パーマー自身の走りを出してほしい……メジロの名前に縛られなくていい」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はは！ そういうことか！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さすが、私のトレーナーだよ！」
    - パーマーの笑いは澄んでいる。本当に嬉しそうだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ、自分のやり方で走るね？」
    - acc: 1
      content: 「ああ。ずっと見てる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ずっと見てる、って言い方、ちょっと変だよ……でも、嬉しい！」
    - 笑顔がいちばんいい顔だ。今のパーマーは、今まででいちばん明るい。

#ジュニア級5月第1週
rumor:
  title: 小さな噂
  lines:
    - トレーニングのあと、%YOU%は一人で事務室の資料を整理している
    - パーマーはメニューに素直についてくる。だからこそ、計画はきちんと仕上げたい
    - 仕事の途中で、扉が開いた
    - 先輩トレーナー「ああ、いたのか」
    - 先輩トレーナー「相棒は、あのメジロパーマーだろ？」
    - 先輩トレーナー「どう言えばいいか……あの子と組むのは、あまり得策じゃない」
    - 先輩トレーナー「経験上、%SEX%は飛び抜けて強い%UMA%じゃない。育てるのは大変だぞ」
    - 言葉はきついが、悪意は感じない
    - 間違ってはいないのかもしれない。だが%YOU%にとっては、話が別だ
    - acc: 1
      content: 「それでも構わない」
    - acc: 2
      content: 「でも%SEX%は、俺の相棒だ」
    - 先輩トレーナー「まあ、ただの雑談だ。どうするかはお前の考えだ」
    - 先輩トレーナー「頑張れよ」
    - 扉が軽く閉まるのを見て、%YOU%は笑って手元の仕事に戻る
    - divider: true
      content: 事務室の外
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんな話、あったんだ……トレーナー、お疲れさま」
    - color: %COLOR%
      content: たまたま扉の外で全部聞いてしまい、見つかる前に逃げることにした
    - color: %COLOR%
      content: 逃げるのは、メジロパーマーの得意分野だからね
    - color: %COLOR%
      content: これが、メジロパーマーの得意分野……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「私……逃げちゃった」
    - color: %COLOR%
      content: 壁に向かって、力なく自分に言う

#ジュニア級5月第2週
strange:
  title: 微妙な距離
  lines:
    - トレーニング中、専門のトレーナーでなくてもわかる。
    - パーマーの最近の走りは、微妙に落ちている。
    - トレーナーである%YOU%としては、何かしなければならない。
    - divider: true
      content: トレーニング終了
    - 時間が終わってもパーマーだけ残り、少し沈んでいる。
    - acc: 1
      content: 「何かあったか？」
    - acc: 2
      content: 「機嫌、悪いのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、まあ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そう、かもね。たぶん」
    - パーマーは上の空で足元の芝を蹴り、視線も%YOU%から逸らしている
    - もしかして……%YOU%への不満か？
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんて言えばいいかな～、その……」
    - 予想とは違う。パーマーは言いたいことを悩むが、口の先で止まる
    - 何か決めたように、視線をまた%YOU%の顔へ戻す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このあいだ、トレーナーに会いに行ったときね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちょっと……私の話、聞こえちゃって。はっきりは聞いてないけど」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーも、思ったことある？ 私、そんなに強くない%UMA%だ、とか」
    - acc: 1
      content: 「まったくない」
    - acc: 2
      content: 「あるわけない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そう……」
    - 少し下がっていたパーマーの耳が、%YOU%の言葉を受けてすぐ立つ
    - 機嫌の問題は、だいたい解けたのだろう
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いやー、トレーナーまでそう思ってたらどうしようって心配してたよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「考えすぎだったね～」
    - 耳の反応に合わせて、口調も自然に戻る
    - 張りついていた筋肉も、見てわかるほど緩む
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとう、トレーナー。信じてくれて」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やり直す覚悟までしてたんだよ！ なんてね～」
    - 目の前の自然な笑顔を見て、%YOU%もつられて笑う
    - 心からの笑いは、移るものだ

#ジュニア級6月第1週
free_race:
  title: 自由レース、行く？
  lines:
    - 平日のトレーニングは少し退屈で、パーマーまで元気がない
    - 気晴らしに、二人で街をぶらぶら歩く
    - 通りすがりの%UMA%「あっちで自由レースやってるよ！」
    - 通りすがりの%UMA%「始まるの？ 見に行く！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自由レース？」
    - acc: 1
      content: 「アマチュアの%UMA%が組んだ路上レースらしい。俺も噂で聞いただけだが」
    - %YOU%の説明を聞いて、パーマーは興味ありげに、さっき走り去った%UMA%たちのほうを見る
    - （トゥインクル・シリーズだとまだ緊張するなら、自由レースを見に行ってみるか）
    - 少し考えたあと、二人は黙って同じ方向へ走り出す
    - divider: true
      content: 自由レース 会場
    - URAの競馬場と比べられる場所……では、まったくない
    - 小さな仮設の場なのに、周囲の観客の熱は重賞にも負けない
    - 二人は観客席で出走者を見送り、周囲の声につられて気分が上がっていく
    - まだデビューしていない%UMA%、もう卒業した%UMA%、怪我で引退した先輩まで、スタート地点でウォーミングアップしている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すごい賑やか……」
    - 会場の作りは正規ではないが、誰もそれを気にしていない
    - 観客はレースそのものを見つめ、走る%UMA%一人ひとりに歓声を送る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしのレースも、みんなこうなってくれたらいいのに」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんながあたしに声援をくれて……」
    - 司会の%UMA%「そこの%UMA%！ 参加したそうだね！」
    - 突然%YOU%とパーマーのあいだに割り込んできたのは、さっきまで司会をしていた%UMA%で、戸惑うパーマーを指している
    - 司会の%UMA%「こっちの自由レースは出自を聞かないよ。名前さえあればいい！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えっ！ 本当！？」
    - パーマーの顔にいつもの明るい笑顔が浮かび、興味ありげに話を受ける
    - 目白の名前に縛られているパーマーにとって、これは新しい体験になるはずだ
    - acc: 1
      content: 「試してみろ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「了解！」
    - 励ましを受けたパーマーはすぐ拳を握り、相手について場へ降りる
    - ただ、自己紹介のときに少しドジをする
    - 司会の%UMA%「では、出走名は！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （名前か……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （目白の名前を出したら、視線が集まりすぎる。おばあちゃんにも何か言われそう……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （うん、決めた！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「パーマーでいいよ！」
    - 司会の%UMA%「ん、どこかで聞いた気がする？ まあいい！」
    - 司会の%UMA%「パーマー選手、ようこそ！」
    - 学園にいるときより、パーマーの入場はずっと自然だ
    - 少し緊張しているのに、落ち着いた姿勢を保っている
    - 観客「パーマー？ あの家の子？」
    - 観客「関係ないでしょ。ここではそんなの気にしない！」
    - 観客席はパーマーの出自を気にせず、新しい出走者への期待だけがある
    - 周囲の純粋な期待を感じたのか、パーマーも少しずつ意識をコースへ置く
    - アマチュアの走路を走り、隣の選手もトレセンのトップ選手ではない
    - そんな環境に、パーマーは隠さず笑う
    - 目白家のことも、トゥインクル・シリーズのことも、トレセンのことも、全部後ろへ置く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり、走ってるとき……すごく楽しい！」
    - 全場をリードし、疑いなくレースの1着になる
    - 司会の%UMA%「1着は！ 今日の新人、パーマー！」
    - 観客「パーマー！ パーマー！ パーマー！」
    - acc: 1
      content: （やっぱり、あんたはこう走ればいいんだ）
    - %YOU%の心の声を聞いたのか、周囲がパーマーの名を呼ぶ声を聞いたのか
    - パーマーはゴールに立ち、観客席へ二本の指を立てて、自然に笑う

# メイクデビュー
begin_race:
  title: 開幕戦
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり、デビュー戦は緊張するね」
    - パーマーは傍らの%YOU%を見て、緊張したまま壁際に寄りかかる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしようトレーナー、メイクデビューで走れなかったら……」
    - acc: 1
      content: 「大丈夫だ。パーマーのやり方でいい」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしのやり方……うん、わかった」
    - 震えていた体がだんだん止まり、自分の状態を立て直す
    - 呼吸を整えてから、両手を握る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、あたしの走りで……わかった！」

# メイクデビュー勝利
begin_race_win:
  title: 「逃げ」の幕開け！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「すごく気持ちいいよ、トレーナー！ やっぱりあたしの走りが、あたしのやり方だ！」
    - 場を下りると、パーマーは%YOU%の前で興奮して跳ねる。ゼッケンの下の体も一緒に跳ねている
    - 少し落ち着いてから、%YOU%の手を強く握り、真剣に声を出す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとうトレーナー！ トレーナーが信じてくれなかったら、今のあたしはいないよ！」
    - 興奮しているパーマーを見て、%YOU%は気まずい顔で頭を掻き、今ご機嫌なパーマーへタオルを渡す
    - %SEX%を信じることが、今やるべきことだ

#ジュニア級7月
mejiro:
  title: 目白という重圧
  lines:
    - 目白家は、ほとんどどのトレーナーも無視できない名門だ
    - メジロパーマーと契約した今の%YOU%にとっても、大きな山だ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、その……無理についてこなくていいよ」
    - パーマーは少し不安そうにトレセンの歩道を歩き、時々傍らの%YOU%を振り返る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本家に帰るわけでもないし、みんなに挨拶するだけ。そんなに緊張しなくていいよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「マックイーンもライアン%THEY%も、トレーナーのことを悪く言わないよ。本当」
    - acc: 1
      content: 「緊張してるのは、俺じゃないだろ」
    - あっさりパーマーの言葉を突き、二人の会話が一瞬止まる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……バレた？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、たしかにちょっと緊張してる」
    - パーマーは指で両側の髪を軽く弄り、少し気まずい
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だってマックイーンもライアンも、みんなから期待されてる新星でしょ。%THEY%と並ぶと、どうしても……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「同じ目白家の%UMA%で、同じ世代なのに……あたしだけ、ちょっと弱すぎる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、こんなはしゃぎ屋の%UMA%じゃ、%THEY%みたいな優雅さは出せないし。ちょっと……」
    - 言葉にはしなくても、パーマーの言いたいことはもう出たも同然だ
    - acc: 1
      content: 「目白の名前は、そんなに大事か？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？」
    - acc: 1
      content: 「パーマーはパーマーだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わかってるよ、でも……」
    - パーマーの顔に落ち込みが浮かび、耳も少しずつ伏せていく
    - acc: 1
      content: 「目白の名前がなくても、あんたは弱い%UMA%じゃない」
    - ゆっくりだが、パーマーの耳はたしかにそっと立つ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとう……なんか、また自信出てきた」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前にトレーナーが言ってた、あたしに合う走り方でしょ？」
    - パーマーは少し唐突に話題を逸らすが、%YOU%にはその意味がわかる
    - 今はこの話から、逃げておこう
    - acc: 1
      content: 「ああ。それが、あんたに合う走りだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ、約束しよう、トレーナー」
    - 突然足を止め、微風がパーマーのふわふわした髪を撫でる
    - 急に止まった動きに遮られ、パーマーの前で振り返る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この走りでレースに勝つ……トレーナーが信じてくれたお返し、どう？」
    - acc: 1
      content: 「その日を、ずっと楽しみにしてるよ。パーマー」
    - acc: 2
      content: 「その日は、必ずあんたの傍にいる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも今はまだデビューしたばかりだし、焦らなくていいよね、あはは……」
    - 肩の力を抜いた笑い声とともに、パーマーは小走りになる
    - %YOU%の位置を追い越し、校外へ向かって走る
    - 今日はまだ集まりがある。足を速めないと

#クラシック級1月1週
new_year_1:
  title: 新年の抱負
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あけましておめでとう、トレーナー！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっと来たね、新年～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あれ、ヘリオスは？」
    - acc: 1
      content: 「%SEX%は今日は来ないだろ」
    - パーマーは少しぼんやりした顔をして、すぐ落ち着く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ今日の新年会、あたしたち二人だけだね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんか変な感じ。いつもは三人でわちゃわちゃしてるのに」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まあ、いつもの感じで過ごせばいいんでしょ？ 一年の計は元旦にあり～、とか！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なにかする？ おせちBBQとか、獅子舞にまつ毛描くとか！」
    - acc: 1
      content: 「おせちBBQ！？」
    - acc: 2
      content: 「え、ここに獅子舞っているのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ないよ～、パッと思いついただけ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おせちを焼くわけないじゃん、あはは」
    - %YOU%が驚いているあいだに、パーマーはすぐ提案を引っ込める
    - 二人だけだと、普段のパーティー体質までは全開にできないらしい
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、そうだ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日はトレーニングなしだけど、新年の目標は決めときたいな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今年走るレースとか！ うん、今年のビッグイベントって何だっけ……」
    - なぜかパーマーの顔が少し沈み、考え込んでいる
    - ここでトレーナーである%YOU%の出番だ
    - acc: 1
      content: 「クラシック三冠だな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……クラシック三冠か」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「超～級にプレッシャーのかかる名前だね！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……でもそうだね。あたし、やっとこの年になったんだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「時間って残酷だね。才能があってもなくても、同じ年なら一緒に括られちゃう」
    - さっきまで緩んでいた顔に落ち込みが浮かび、見ているだけで圧が伝わってくる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今年いちばん強いのは、たぶんライアンだね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「目白家でいちばん期待されてるスピードの星……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%と同じ舞台で戦うとか、冗談でも想像したくないよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしだって頑張ってるけど、実力の差はちょっと……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「超マズい現実だよ！ でも、あたしにできることは一つだけ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「逃げよう、トレーナー！」
    - acc: 1
      content: 「逃げる？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、現実から逃げる！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「抱負はいいよ。でも正月早々これだと、また昔のあたしに戻っちゃう！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「楽しいことないかな……解放感があるやつ～」
    - 沈んだ顔をしまって、最初の調子に戻り、真剣に考える
    - 現実逃避、解放感、楽しいこと……
    - acc: 1
      key: select
      content: 「農作業！」（スピード+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「農作業！ そう、この爆発した青春は畑にぶつけるしかない！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「服着替えたら出発！ 全速で行くよ！」
        - 学園に畑はあるが、パーマーのやる気は%YOU%の予想を少し超えている
        - どこかで聞いたような台詞を叫びながら、パーマーはジャージに着替えて外へ走っていく
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あああああっ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はっ、はっ、どう、トレーナー、この景色！」
        - acc: 1
          content: 「すごいな。一瞬で全部終わった」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あたしの特技の一つ、穴掘り！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「小さい頃から得意なんだ。耕す速さなら負けないよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「じゃあ、これで逃避開始！ 熱が冷めたらまたね、トレーナー！」
        - acc: 1
          content: 「おい、パーマー！」
        - 汗だくの%YOU%がパーマーを捕まえようとするが、特技を披露し終わったパーマーは数秒で姿を消す
        - 新年の始まりは、パーマーの予想外の特技披露だった
    - acc: 2
      content: 「商店街で爆買い！」（体力+100）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「爆買い！ いいね！ 今から行こう！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「この時期、セールも始まるでしょ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「実は前から欲しいものあったんだ。買ってストレス発散しよ！」
        - divider: true
          content: 商店街
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー見て、このゴルフシャツ、すごくない？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「せっかく来たし、これ買ってからのんびりゴルフしない？ 散歩にもなるよ」
        - 目の前のゴルフ用品に夢中になって、パーマーは近づくレースを忘れ、のんびり楽しんでいる
    - acc: 3
      content: 「カフェで何か飲む？」（スキルPt+20）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「カフェ！ そうだね、おしゃべりとスイーツで頭をチャージだ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「行こうトレーナー！ あたしも久しぶりにあれ飲みたい！」
        - divider: true
          content: カフェ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「えーと、アイスティーとレモン水をこう混ぜて……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「完成！ あたし最愛のオリジナル特飲！」
        - acc: 1
          content: 「よくそうするのか」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん！ 家だとマナー悪いって言われるけど、やめられないんだ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これはあたし好みの組み合わせだけど、他のもあるよ。トレーナー、飲む？」
        - acc: 1
          content: 「せっかくなら、もちろん！」（好感+10）
        - acc: 2
          content: 「パーマーのその杯、もらってもいい？」（恋慕+2）
        - ソーダとミルク、コーラとレモンティー
        - どの組み合わせも、意外とおいしい
        - パーマーと%YOU%は、いろいろな特製ドリンクを楽しんだ

#クラシック級3月1週
how:
  title: 三冠、どうするの！？
  lines:
    - たまたまパーマーに会ったとき、珍しく明るい笑顔もなく、誰にも挨拶していない
    - うつむいて歩いて%YOU%の胸にぶつかってから気づき、驚いたみたいに顔を上げて反射で謝り、相手が誰か見てようやくわかる
    - acc: 1
      content: 「何かあったのか？」
    - 責めのない問いを聞いて、パーマーはまたうつむき、指の小さな動きを見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでもないよ、その……」
    - うつむいたまままだ動く指を見ていると、前から伸びてきた手に掴まれる
    - 冷えている自分の手に対して、掴んでくる両手はとても温かい
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （トレーナーに話す分には……いいよね？ だって、トレーナーだし）
    - 手の動きを止め、顔を上げて相棒を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三冠のことなんだ」
    - 強く握っていた手を離し、少し言葉を考える
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、ほら、三冠……皐月賞、もうすぐでしょ？」
    - acc: 1
      content: 「たしかに、すぐだな……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だからさ、三冠ってどう見ても大事なレースでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしも気になるよ！ でも……心配なんだ。目白家、これすごく見るでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「負けたら目白家の恥って言われるよね？ だから、出るかどうか迷ってる」
    - 口は開いたのに、パーマーの声はだんだん小さくなり、いつもの自信がない
    - acc: 1
      content: 「パーマーは？ あんたはどう思う」
    - パーマーの体が少し震え、%YOU%を見ていた目も逸れていく
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしみたいな実力不足の%UMA%が、出ても意味ないでしょ？ 学びにもならないし、そう思うと……」
    - acc: 1
      content: 「じゃあ、逃げよう」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「逃げる……の？」
    - パーマーの顔が疑問に変わり、すぐまた笑う
    - acc: 1
      content: 「そうだ。逃げて、自分の答えを探せ」
    - 短い沈黙のあと、パーマーは明るい笑い声で目尻の涙を拭く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうだね、やっぱり先に逃げるのがあたし向きだよ！」
    - 三冠のことで沈んでいた気配はもうなく、大きく息を吸って気持ちを切り替える
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「答え、見つかった！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのとき気分がよければ、出る！」
    - 周囲を気にせず、元気に%YOU%と目を合わせる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのときは、一緒にいてくれるよね、トレーナー？」
    - acc: 1
      key: select
      content: 「ああ。ずっと見てる」（好感+10）
    - acc: 2
      content: 「ずっと待ってるよ、パーマー」（恋慕+2）
    - パーマーの表情が少し変わり、上げた腕で%YOU%の胸を軽く叩く
    - 笑顔にあった陰りは消え、%SEX%らしい、自信のある笑顔だけが残る

sats_sho:
  title: 皐月賞へ！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしようトレーナー……勢いで一気にここまで来ちゃった。目白家の名前に見合わなかったらどうするの！」
    - パーマーはかなり興奮している。言っていることは不安だらけなのに
    - 外のコースを見ているだけで、言われなくても%SEX%の体が微かに震えているのがわかる
    - acc: 1
      content: 「怖いのか？」
    - acc: 2
      content: 「ワクワクしてるのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん……そうかも。でも、出るって決めたんだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしは、絶対に引かない。絶対」
    - %YOU%の声を聞いて、パーマーの震えていた体が止まる
    - 手を上げてそっと%YOU%を掴み、軽く深呼吸する
    - 顔を上げたときには、もう自信のある顔に戻っている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、ありがとう」
    - 満面の笑みで手を離し、選手通路を出ていく

# 皐月賞勝利
sats_sho_win:
  title: とりあえず一冠！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当に勝ったよ、トレーナー！」
    - 控え室は、勝者の帰還で騒がしくなる
    - 明るい声が二人の空間に響き、止まる気配がない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーのおかげだよ」
    - acc: 1
      content: 「ん？ 何が」
    - パーマーは%YOU%の顔を見て、胸の複雑な気持ちが喉で止まる
    - 短く口を閉じてから、沈黙を続けない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーがいなかったら、あたしはここに立ってないよ」
    - 部屋のにぎやかな声が消える
    - acc: 1
      content: 「でもこれは、あんたの勝ちだ」
    - パーマーの表情が最初の笑顔に戻り、%YOU%の手を強く握る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「二人の勝ちだよ、トレーナー！」

# 皐月賞敗北
sats_sho_lose:
  title: 負けても大丈夫！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「負けちゃったね……はは、やっぱりあたし、大した%UMA%じゃないや」
    - 控え室の壁に寄りかかり、視線が%YOU%と床のあいだを行き来する
    - 汗が顔を伝い、涙みたいに見える
    - acc: 1
      content: 「でも、頑張っただろ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「頑張ったよ、でも……」
    - acc: 1
      content: 「大事なのは、パーマーが自分で頑張ったことだ。レースはこれ一回じゃない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうなの？」
    - まだ逸れていた目が目の前の%YOU%に定まり、最初の悲しみはもうない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも次、勝てるかな」
    - acc: 1
      content: 「じゃあ次のレースで勝つ、それを目標にしよう」
    - 最初の沈んだ顔は消え、代わりに強い顔が残る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうだね。沈んでる場合じゃない」
    - 姿勢を正したパーマーは息を吐き、顔の汗を拭く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「次もよろしく、トレーナー！」

#クラシック級5月1日、同チームメジロライアンかつ同学年でないときは発生しない
sisters:
  title: %SISTERS%も、ライバル
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おっ、日本ダービーが近いね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今年のダービー、サプライズあるかも……」
    - パーマーは事務室のソファに寝転がり、少し退屈そうにスマホをいじる
    - acc: 1
      content: 「サプライズ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって今年は、ライアンがいるんだよ」
    - パーマーはスマホを閉じ、跳ねるように%YOU%の傍へ来る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三冠のことは、あたしはあんまり考えてないけど」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ライアン%SEX%は違うよ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%は最初から三冠路線で頑張ってるし、ダービーじゃ絶対輝くよ！」
    - 声はとても明るいのに、何かが足りない気がする
    - acc: 1
      content: 「パーマーは？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？ あたし？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ダービーは……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしがダービーに出るなんて、いいのかな」
    - もともと少なかった自信が独り言の中で少しずつ消え、少し落ち込みながら二歩下がる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……そのとき、気分がよくて……自信があったら」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ライアンと、試してみるよ」

#クラシック級5月1日、皐月勝利、同チームメジロライアンかつ同学年でないときは発生しない
sisters_1crown:
  title: %SISTERS%も、ライバル
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おっ、日本ダービーが近いね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今年のダービー、んー～試してみる？」
    - パーマーは事務室のソファに寝転がり、スマホをいじりながら視線を横へ流す
    - acc: 1
      content: 「気分、出たか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あはは……言ってみただけ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって今年は、ライアンがいるんだよ」
    - パーマーはスマホを閉じ、跳ねるように%YOU%の傍へ来る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三冠とか、あたしはあんまり考えてないけど」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ライアン%SEX%は違うよ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%は最初から三冠路線で頑張ってるし、ダービーじゃ絶対輝くよ！」
    - 声はとても明るいのに、何かが足りない気がする
    - acc: 1
      content: 「じゃあ、出ないのか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？ あたし？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ダメダメ。皐月のときは勢いで出たけど、ダービーは」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしがダービーに出るのは、まだちょっと……」
    - もともと少なかった自信が独り言の中で少しずつ消え、少し落ち込みながら二歩下がる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……そのとき、気分がよくて……自信があったら」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「試してみるよ……クラシック路線とか」

toky_yus:
  title: 日本ダービーへ！
  lines:
    - 日本ダービー、三冠の第二戦
    - 出走できるどの%UMA%にとっても、無視できない祭典だ
    - 今ここにいるパーマーも、同じだ
    - 後ろの視線を背負い、このレースへの恐れを払い、堂々と場に立って前方を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「一度きりの出走チャンス……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「胸が熱いよ、トレーナー！ もうすぐ出るよ！」
    - 体はもう不安で震えていない。高揚で興奮している
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「安心しなよトレーナー。今の%SELF_CALL%は、絶対負けない！」
    - acc: 1
      content: 「じゃあ、いい知らせを待ってる」
    - acc: 2
      content: 「ああ。パーマーを信じてる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん！ あたしのやり方で、一気に勝ちを掴むよ！」
    - if: d.sats_sho === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「皐月賞も取れたし、ダービーも大丈夫……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「全力で逃げるよ、あたし！」
        - %YOU%に背を向け、ぐっと顔を上げ、自信のある顔でコースへ向かう

# 日本ダービー勝利
toky_yus_win:
  title: 幸運な逃げ
  lines:
    - 昔から、日本ダービーはいちばん運のいい%UMA%が頂点を取る、と言われている
    - そして今日、メジロパーマーがいちばん運がよかった
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「勝った！ 自信があるときは、運もついてくるんだね！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SELF_CALL%の頑張り、全部形になった……」
    - 震える両手を見て、パーマーは信じられない顔で、同じように胸を熱くしている%YOU%を見上げる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当にすごく嬉しい！ 自信を持って走り切った感じ」
    - acc: 1
      content: 「それが、パーマーの実力だ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうなの？ えへへ……ありがとう！」
    - 興奮した両手を上げ、トレーナーの掌と軽く合わせる

# 日本ダービー敗北
toky_yus_lose:
  title: 運が、ちょっと……
  lines:
    - 昔から、日本ダービーはいちばん運のいい%UMA%が頂点を取る、と言われている
    - 言い換えれば、今日のパーマーはそこまで運がよくなかった
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あはは……%SELF_CALL%、今日は運がよくなかったね」
    - うなだれて控え室に戻り、自分を見る
    - acc: 1
      content: 「パーマー、大丈夫だ」
    - %YOU%の声を聞いて、パーマーはそっと声のほうへ体を向ける
    - 視線を少しずつ前へ進め、前方のもう一人を見る
    - 手を伸ばして%YOU%の手を掴むと、冷たい感触が伝わる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わかってる。だから……少なくとも、今はこうして休ませて」

hako_kin:
  title: 函館記念へ！
  lines:
    - 函館の競馬場の控え室で、メジロパーマーを待っている
    - なぜか今日のパーマーはかなり遅く、控え室に来ても少しもじもじしている
    - acc: 1
      content: 「パーマー？」
    - %YOU%の声を聞いて、パーマーは少し不自然に座り、視線も左右に泳ぐ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、なんて言うか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「函館は、あたし詳しいんだ。その……」
    - 視線が空中を長く泳ぐのに、ずっと%YOU%には落ちない
    - if: era.get('love:64') < 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その、レースが終わったら、トレーナー、一緒に遊ばない？」
    - if: era.get('love:64') >= 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「終わったら、あたしとデートしてくれる？」
    - パーマーの視線がこっそり横へ逸れ、%YOU%の反応を覗く
    - そんなパーマーを見て、%YOU%は%SEX%に異常がないことだけに安心する
    - acc: 1
      content: 「もちろん」
    - 返事を聞いたパーマーの顔に笑顔が浮かび、自然に扉を押す
    - if: era.get('love:64') < 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「楽しみだよ！」
    - if: era.get('love:64') >= 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全力で応えるから、トレーナー！」

# 函館記念勝利
hako_kin_win:
  title: 観光の準備
  lines:
    - 勝ち帰ったパーマーは、もう入口で待っていた%YOU%を見て、抱きつきたくなるのを我慢する。さっきまでレースしていた汗が気になるのだ
    - 足を止めてから、待っていた%YOU%へ勝利のジェスチャーを向ける
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お待たせ！ %SELF_CALL%のかっこいい走り、見た？」
    - acc: 1
      content: 「ああ、かっこよかった」
    - 相棒の褒め言葉を聞いて、パーマーの笑顔はさらに輝く
    - if: era.get('love:64') < 50
      lines:
        - 軽やかな足取りで踊るみたいに%YOU%を回り込み、控え室へ入る
        - 閉めきっていない扉から顔を出し、少し止まって何か考えている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ウイナーズステージが終わったら、一緒に行こう？」
    - if: era.get('love:64') >= 50
      lines:
        - 軽やかな足取りで踊るみたいに%YOU%の前まで寄り、手を取る
        - 両脚を揃えたまま少し止まり、顔に熱が浮かんだみたいだ
        - 一歩下がって距離を取り、控え室へ滑り込み、顔の見えない姿勢で%YOU%に声をかける
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「約束したでしょ。あとで一緒に……こっちを歩くって」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ウイナーズステージのあと、一緒に行こう」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「少なくとも帰るまで……一緒にいてね」

#函館記念の前後を踏んだあと、同ターンの任意外出で発生
hometown:
  title: 故郷の時間
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんか、すごく久しぶりに帰ってきた感じ」
    - ウイナーズステージのあと、パーマーは楽しそうに%YOU%の手を引いて通りを歩く
    - 残念なことに時間は遅く、もう閉まった店もある
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「マズい、勝者ステージまで待ったら遅かったね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんトレーナー！ 別の時間に来るべきだった……」
    - さっきまでの勝利の喜びが、少し暗い通りに薄まり、耳も気まずそうに伏せる
    - acc: 1
      content: 「気にしてないよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当？」
    - 伏せていた耳がぴんと立ち、目にも光が戻る
    - 周囲はもう暗いのに、パーマーの淡い青の瞳だけが特別に明るい
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それなら……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、まだあるはず！」
    - パーマーは%YOU%の前で独り言を二言三言ついてから、スマホを取る
    - 小走りに距離を取り、ふわふわした声でマイクに小さく何か言う
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うんうん！ お願い！」
    - 通話は終わったみたいで、パーマーは跳ねるようにまた%YOU%の傍へ来る
    - 両手で%YOU%を掴み、一つの方向へまっすぐ歩き出す
    - 手を引かれて数分走ると、二人の前にごく普通の小さな店が現れる。暗い中では少し不思議な存在だ
    - だがパーマーが扉を押した瞬間、全部わかる
    - 店には愛想のいいおじさんだけがいて、もう用意してあったつまみを出す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「サンキュー、おじさん！ やっぱり昔と同じだね！」
    - パーマーは%YOU%を席に押し、自分も自然に隣へ座る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「昔、ここすごく好きだったんだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「家はいいところだけど……なんて言えばいいかな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「昔、こっちにいたときは、なんか居場所がない感じがしたんだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから、こういう小さな店、探すの好きなんだ」
    - パーマーは明るい笑顔で、陰りはまったくない。今言った話とまるで別の人みたいだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも！ それはもう過去の話！」
    - acc: 1
      content: 「今は、もうそういう感じじゃないんだろ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……もうない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、ちょっとだけ残ってるかも」
    - パーマーは口の大根を飲み込み、笑って%YOU%の言葉に応える
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、決めたんだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自分の走りを出すだけじゃなくて……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしの生き方も、見つける！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、ちょっと変かな、この言い方」
    - 少し照れた顔で、熱い白い大根をもう一口噛む

summer_start_1:
  title: 夏季合宿（クラシック級）開始
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふやあ～！ あたしの夏休み、来た！！」
    - 夏休み——つまり夏季合宿
    - %UMA%にとっては実力を伸ばす大事な行事だが、しかし——
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「%65_CALL%！ この夏はあたしと遊び倒して、今から新しい自分を探すよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そう！ あたしのリスタート、ヘリオスに任せるよ！」
    - パーマーにとって、やり直す夏だ
    - 失敗を恐れず、冒険できる新しい%TEEN%へ脱皮する
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「でも%65_CALL%、目白家だから小さい頃から走らなきゃだったんでしょ？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「でも本当に走るだけ？ 走る以外の夢もあるはずだよ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走る以外の夢か～、そう言われると、んー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%UMA%でも、レースに出てない人、たくさんいるしね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「正直、わからない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、あたし、ここからやり直していい？」
    - acc: 1
      content: 「もちろん」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もし、もしだよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「レース以外の夢を追いたくなったら、それでもいい？」
    - パーマーの問いに、%YOU%の答えは一つしかない
    - acc: 1
      content: 「やりたいことをやれ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、わかった！ この夏、いっぱいやって、やりたいことを見つけるよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ヘリオス！ よろしくね！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この夏を、超にぎやかなパーティーにしよう！」
    - 目白家の%UMA%としてだけじゃなく、メジロパーマーとして探す

#合宿中8月2週、同チームにダイタクヘリオスがいるとヘリオス／パーマーの好感が相互+30
summer_middle_1:
  title: 夏季合宿（クラシック級）途中
  lines:
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「北海道キャンプ！ おっイエー！！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うひょー！ 超ハイ！」
    - 三人は夏季合宿の合間に北海道を訪れ、しばらくアウトドアだらけの生活を楽しむ
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「%65_CALL%見て！ 大物、釣れそう！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、絶対釣れるよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あとはゆっくり待つだけ。余計な動きはしないで……」
    - 川辺で、ダイタクヘリオスは竿を握って水面をじっと見ている
    - パーマーは傍らに立ち、少し微妙な顔で見ている
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「フフ～、かわいいお魚さん来たよ～おっイエー～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、そんな大声出したら……」
    - ダイタクヘリオスの声が大きかったのか、針の小魚はすぐ逃げてしまう
    - 三人で空の針を見て、揃ってしょんぼりする
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「うわ、逃げられちゃった～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あはは……釣りってそういうもんだよ」
    - 竿をしまって、キャンプへ戻る
    - 釣れなかった気持ちを切り替え、目の前の昼ごはんへ情熱を戻す
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「BBQ～BBQ～、次は——焼きそばフー～！」
    - 焼きそばがジュウジュウ鳴り、香りが広がる
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「おいしい～%65_CALL%、中に何入れた？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「具はニラとジャガイモとか。調味料も適当だよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも味はいいでしょ？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「なんて言えばいい？ 素朴でおいしい？ おうち感？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「三食これでも飽きないよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そっか、よかった～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーも食べて。熱いうちに」
    - acc: 1
      content: 「うん！」
    - パーマーの鉄板焼きそばはごく普通の味で、キャンプの野趣はほとんどない
    - 例えるなら、普段%YOU%が食べる味だ
    - だからこそ、この平凡なうまみが安心する
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃああたしは、ヘリオスの淹れたコーヒー、味見するね！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「んっ！？ この粒粒は？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「タピオカコーヒー～」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「ただいま大好評発売中！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え、タピオカ！ あははは、ヘリオス天才！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんて言うか、あたしたちのキャンプぐちゃぐちゃだけど、すごくハイだね！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「マズい、このまま暮らし続けちゃいそう！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「おおおっ！ いいね、%65_CALL%！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「じゃあ走んのやめて、自然系UMATUBEインフルエンサーとかどう？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「タイトルは……ハイになれ、パーリィーキャンプ！ どう？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「バズったあとゴールデン進出、とか目指しちゃお！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「UMATUBEインフルエンサー！ いいね！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それもアリかも！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「北海道を舞台に面白い動画！ 企画いっぱい撮れそう！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、どんな動画がバズると思う？」
    - acc: 1
      key: select
      content: 「農村……」（パワー+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「農村！ パーティー方式で村作るの？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大変そうだけど、それも悪くないね！」
        - %YOU%が考えなしに口にした提案なのに、思いのほか本気ルート扱いされる
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「おっイエーおっイエー！」
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「土地、端から端まで耕すよ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「親友～、そろそろ昼だよ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日は今釣った鮭で、鮭パーティーだ！」
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「……このままだと腕、パキッていきそう～」
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「速さ勝負じゃなくて、腕力勝負だね！～」
        - ダイタクヘリオスの話を聞いているだけで、%YOU%は自分の筋肉が疼く気がする
    - acc: 2
      content: 「耐寒レース……」（根性+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おっ！ 耐寒レース！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「誰が耐えられるか勝負？ この辺の冬、超寒いし雪も降るよ」
        - %YOU%の口から飛び出した突飛な案なのに、パーマーはちゃんと聞いて、目を細めて冬を想像している
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「んー——%65_CALL%、寒すぎない？ やる気出す？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ううう、やる気～根性～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「マズい、頭の中の雪ウサギがクリスマスイブしてる……」
        - 数秒後、パーマーは目を開ける
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「き、きつそう……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも意志の強さには自信あるよ。耐えられる！」
        - パーマーは自信ありげに言うが、%YOU%にはわかっている
        - ここの寒さはトレセンとは桁が違う。本当に根性が鍛えられそうだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……でも大自然って不思議だね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「小さい頃は、何もない屋外だと思ってた……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……全然違うじゃん！ やりたければ、何でもできる！」
    - ダイタクヘリオスの注意がよそへ向いたとき、パーマーは一人で目の前の自然を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （そうだ。ここで何をするかは、あたしが決める）
    - divider: true
      content: 数日後
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はぁ～、もう朝か」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （全部楽しい。釣りも、採取も、料理も、短い動画も）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （あたしは自由だ。何をしてもいい！ 何をしても生きていける！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （でも、それなら……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたし——本当にやりたいことは、何？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （目を……閉じて……自分に聞く……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （何がしたい？ 本当の気持ちは？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （心の声、根っこから来る叫び……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （自由なら、あたしは何をする……？）
    - 自分の思考に沈み、心の声を聞く
    - 闇の中に、少しずつ聞き慣れた音が聞こえてくる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この音は……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——風？」
    - パーマーの耳が器用に何回か跳ね、風の音を拾う
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「風と同じだ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （風、気持ちいい！ 空気が肺を洗って、日の出の光も……肌を撫でる……！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （相手もゴールも考えなくていい。このまま走ればいい！）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好きなだけ走る！ うおおおおおおおっ！」
    - 眠い目の%YOU%が見たのは、日の出の下で笑って走るパーマーだった
    - 朝焼けの中、%SEX%は我を忘れて走っている。自然で元気で——とても美しい
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はっ、はっ……トレーナー、わかった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……あたし、走るのが好き」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「速くても遅くてもいい。頭を空にして走ればいい！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今走ってたのは、目的があったからじゃない……目の前の景色を見て、足も心も勝手に動いたんだ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だからあたしは絶対——走るのが好きなんだ！」
    - acc: 1
      content: 「そうか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、そういうこと！」
    - パーマーと%YOU%は互いに笑い、もう多くを言う必要はない
    - 心の答えを見つけたパーマーの笑いは、とても自然だ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、トレーナー、後ろの羊蹄山、見える？」
    - パーマーに言われて%YOU%が振り返ると、その山が見える
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 故郷の山
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「昔、あの山を見るとちょっと怖かった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちゃんと、真面目に走れって呼んでる気がして」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……圧をかけられてるみたいで」
    - acc: 1
      content: 「今は？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えへへ、今はね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「まだ怖い！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……でも、昔ほどじゃない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって……大したことないけど、今日は隠さずに、いちばん正直な走りができた」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日のあたしが走ったのは、走りたかったから！」
    - パーマーは笑顔のまま、冗談めかして言う

summer_end_1:
  title: 夏季合宿（クラシック級）終了
  lines:
    - 夏季合宿が終わった。ダイタクヘリオスがいたおかげで、パーマーのこの夏はとても充実していた
    - そのあいだに見つけた、本当に欲しかったもの——走りたい、ということ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そう、あたしは走るのが好き！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これから先も、ずっと走り続けたい！」
    - パーマーの顔には自信があるのに、少し不安も混じっている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもさトレーナー～、それだけでいいのかな？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%を見てると、それだけじゃ足りない気がして～」
    - パーマーの視線を辿って、%YOU%も少し不思議そうに見る
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「ついに……菊花賞ですわ」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「わたくしがいちばん得意な、長距離G1……」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「どうしても、勝ちますわ！」
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - 「そして、来年の天皇賞（春）へ……」
    - マックイーンは海岸に立ち、柵に凭れて握った両手を黙って見ている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「見て、マックイーンの覚悟、普通じゃないでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「強さの前に、レースへの向き合い方が違う」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%SEX%に比べたら、あたしは走るのが好きなだけ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、まだはっきりしてない……レースそのものが好きなのかどうか」
    - パーマーが一語ずつ話すうちに、声もだんだん小さくなる
    - そっと顔を覆い、少し不安そうに%YOU%を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんなんで、あたしたちおんなじだよ～って顔して出ていいのかな……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……考えすぎるのが、あたしの悪い癖だね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「思考力、超えちゃったかも。ええ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、ごめん」
    - acc: 1
      content: 「ん？ なんで」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんか、ごめんって感じ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こういうのに気づくと、抜け出せなくなるんだ」
    - メジロマックイーンのような覚悟もなく、レースへの執着もない
    - そんな自分が、パーマーから最初の自信を奪っていく
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「走りたいから、走る」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それでいいはずなのに、でも……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたし、考えすぎるタイプかも。ごめん」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「面倒くさいやつ、とか……」
    - 視線が沈み、不安そうな自分の指へ落ちていく
    - パーマーは、本当に考えすぎるタイプなのかもしれない
    - acc: 1
      content: 「考えすぎても、悪くないと思う」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いやー、そんなに甘やかさなくていいよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あんたがそうするから、甘えちゃうんだよ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……でも、そう言ってくれたし……もうしばらく、頼っちゃお」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに……」
    - 顔にはまだ落ち込みがあるのに、体は正直に%YOU%の肩へ凭れる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この先で、見つけるよ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしの道を！」
    - 伏せていた耳がだんだん立ち、目にも気力が戻る

kiku_sho:
  title: 菊花賞へ
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「長距離のレース、初めて……」
    - パーマーは控え室に座り、微かに震える両脚を見ている
    - 長距離G1は三冠の終点でもあり、どの%UMA%にとっても極めて大事だ
    - 今のパーマーに対して、%YOU%は前へ歩いて手を伸ばすだけだ
    - acc: 1
      content: 「緊張してるだろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もちろん緊張！ でも緊張より、ワクワクのほうが多いよ！」
    - 素早く顔を上げて%YOU%を見、興奮して細い腕を上下に振る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このレース、目白家のみんなも見てるよね……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしのやり方で、あたしがすごいって証明する！」
    - パーマーは両手を握り、%YOU%の肩に拳を当てる
    - acc: 1
      content: 「わかった。観客席から見てる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん！ %SELF_CALL%の走り、見てて！」

# 二冠取得済み
kiku_sho_2crown:
  title: 菊花賞へ
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「菊花賞……マズい、胸の鼓動が止まらない！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「長距離のレース、初めてだよ！」
    - パーマーは控え室に座り、微かに震える両脚を見ている
    - 長距離G1は三冠の終点でもあり、どの%UMA%にとっても極めて大事だ
    - 今のパーマーに対して、%YOU%は前へ歩いて手を伸ばすだけだ
    - acc: 1
      content: 「緊張してるだろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もちろん緊張！ でも緊張より、ワクワクのほうが多いよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最初は怖かった三冠路線、もうすぐ取れるところまで来た！」
    - 素早く顔を上げて%YOU%を見、興奮して細い腕を上下に振る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このレース、目白家のみんなも見てるよね……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしのやり方で、あたしがすごいって証明する！」
    - パーマーは両手を握り、%YOU%の肩に拳を当てる
    - acc: 1
      content: 「わかった。観客席から見てる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん！ %SELF_CALL%の走りを見てて……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三冠が決まる瞬間も！」

kiku_sho_win:
  title: 「逃げ」の帰還！
  lines:
    # 菊花賞勝利
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっほー！ 勝った！」
    - 自分の走りで1着を取ったパーマーは、そこで足を止めない
    - 走りながら、観客席にいるはずの馴染みの人を探す
    - 観客席の端を走り、選手通路の前で相棒が手を振っているのを見つける
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！ 見た！？」
    - 速度を気にする様子もなく、%YOU%のほうへ突っ込んでくる
    - acc: 1
      content: 「パーマー、かっこよかった！」
    - acc: 2
      content: 「パーマー！ まず止まれ！」
    - 全部は聞こえていなかったらしく、最初の速度のままぶつかってくる
    - 力は抑えていて%YOU%を飛ばすほどではないが、それでも後ろへ何歩か下がる
    - 体温が、薄い勝負服越しに伝わって、なぜか体が熱くなる
    - レース直後の汗の匂いが、本人は気づいていないまま、抱擁で鼻へ少しずつ入る
    - 正直に言うと……反応してしまった
    - acc: 1
      content: 「パーマー、ここではちょっと……」
    - acc: 2
      content: 「パーマー、周り、周り！」
    - 周囲の妙な空気に気づいたのか、さっきまで無反応だったパーマーの顔に赤みが浮かぶ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんごめん、その……ちょっと盛りすぎた」
    - %YOU%を強く抱いていた手を離し、気まずそうに何歩か下がる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とりあえず、ステージの準備してくる！」
    - if: era.get('love:64') >= 50
      lines:
        - すべての視線を避けて控え室へ隠れ、まだ汗の残る胸を押さえる
        - 勝負服のデザインは涼しいはずなのに、今は……なぜこんなに熱い
        - 心臓の跳ね方が、まだコースにいるみたいに止まらない
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「何やってるんだろ、あたし……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ただの……普通の抱きつきなのに……」

# 菊花賞敗北
kiku_sho_lose:
  title: 少しだけの内緒話……
  lines:
    - レースが終わり、控え室の空気も不快なほど静かだ
    - 頑張ったあとに敗北が来る、その現実
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 一言も発さないパーマーが控え室に座り、うつむいて顔が見えない
    - 控え室の扉が開いてから、ようやく動く
    - %YOU%が扉を押して入り、今のパーマーを見るが、言葉の隙間が見つからない
    - 傍まで寄ったとき、パーマーが動く
    - 何も言わず、立ち上がって振り返り、そっと額を%YOU%の肩へ預ける
    - acc: 1
      content: 「パーマー？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - 声は小さいが、この空間でははっきり聞こえる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「頑張ったよ、トレーナー。本当に頑張った。長所を伸ばすとか、自分の走りを出すとか……全部やったよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしも、目白家の名に見合う成績を出したかった」
    - 声は小さいが、はっきり聞こえる
    - 今は、パーマーにこうして泣かせておいたほうがいい

# 三冠称号獲得後の休息
triple_crown:
  title: 三冠達成！
  lines:
    - 皐月、ダービー、菊花
    - クラシック級の三冠を、全部手に入れた
    - パーマーと%YOU%は事務所に並んで立ち、目の前のトロフィーを見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんて言えばいいかな。ちょっと、現実じゃない感じ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最初は気分が乗ったら出る、くらいだったのに、こんなすごい成績になっちゃうなんて」
    - パーマーはトロフィーを見て、少しふわふわしている
    - acc: 1
      content: 「やっぱりパーマーはすごいよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えっ？ そう？ あはは……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもこれ、トレーナーのおかげだよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最初に信じてくれなかったら、あたし、出てなかったと思う」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに……」
    - 声が一拍止まり、視線がトロフィーと傍らを行き来する
    - %YOU%から見えないところで、指が絡まっている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その、あたし自身の走り、ってやつ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーがいなかったら、別のやり方してたと思う」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だから、ずっと感謝してるよ」
    - 尻尾が止まらず揺れ、先端がいつの間にか%YOU%のふくらはぎに当たっている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、その……トレーナー」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いつか、空いたときに、一緒に目白の家へ……」
    - acc: 1
      content: 「空いてるなら、今でもいい」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えっ、今？」
    - パーマーが急に振り向き、少しぼんやりした顔をする
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今帰ったら、おばあちゃん絶対めちゃくちゃ大きい宴会開くよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「三冠だもん。人、超多いし、何日も続きそう……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いやー……そういう場、あんまり得意じゃないんだよね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「空いたときに、あたしたち二人で帰ろうよ」
    - パーマーは後頭部を軽くなぞり、胸の不安を隠す
    - ふわふわした笑顔の奥で、心細い目が傍らを盗み見る
    - acc: 1
      content: 「二人だけか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、二人」
    - 強くうなずいてから、隣へ小さく跳ぶ
    - 指で窓枠を支え、外を向いてつぶやく
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「二人でおばあちゃんに会って、それから」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あれ、どこか変かな……」

# クラシック級有馬記念
classical_arim_kin:
  title: 有馬記念へ
  lines:
    - 年末最後の盛会、有馬記念
    - 2,500mの長距離レースで、注目もいちばん高い一戦だ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱこういうとき、緊張するね……へへ」
    - 興奮で震える体、興奮で高ぶる気持ち
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最初は、ここに来るなんて思ってなかったよ。有馬記念」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「目白のことは気にしない。自分の走りを信じる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それ、全部トレーナーが教えてくれたんだよ」
    - 勝負服の上着を着て、胸をまっすぐに張る
    - acc: 1
      content: 「行こう、パーマー」
    - %YOU%の声を聞き、パーマーはコースのほうへ拳を握る
    - 自信のある笑顔で、後ろへ親指を立てる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「任せて！ えへっ」

# クラシック級有馬勝利
# スキル「大逃げ」習得
c_arim_kin_win:
  title: 有馬記念のスーパー逃亡者！
  lines:
    - 2500mのコースでもパーマーの体力は尽きず、ゴールを過ぎてもまだ走っている
    - 力を抜いた歩幅で手を振り、観客席の人たちに挨拶する
    - もう走れなくなってから減速し、観客席沿いをゆっくりして選手通路で止まる
    - ゆっくり控え室へ入り、扉に寄りかかって震える自分の体を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これなら、目白の足手まといじゃなくて、メジロパーマーだ……」
    - acc: 1
      content: 「まだそんなこと考えてるのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うわあ！ トレーナー！ 聞こえてた！？」
    - パーマーは%YOU%の突然の声に飛び上がり、大げさな姿勢で後ろへ跳ぶ
    - 声も大げさで、%YOU%の鼓膜を破りそうだ
    - でもパーマーは嬉しそうだから、まあいいか
    - acc: 1
      content: 「正直……目白じゃなくてもいいんだよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「目白じゃなくてもいい、ってのは自分でもわかってるよ。でもたまに、こう考えちゃう」
    - acc: 1
      content: 「もっと自信持って、パーマーの名前を残せ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うんうん、わかった！ じゃあ……」
    - 深く息を吸って、もっとパーマーらしい顔に戻す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうだ……あたしの勝ちだよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日は%SELF_CALL%の勝ち！ どう？」

# クラシック級有馬敗北
c_arim_kin_lose:
  title: 少し惜しい逃亡ショー
  lines:
    - 自分の走りで有馬記念を勝ち、場の観客全員にパーマーの名を覚えてもらう
    - 目白家のメジロパーマーではなく、有馬記念の勝者、メジロパーマー
    - そう思っていたのに、現実はパーマーにそのまま勝たせてくれなかった
    - 1着の%UMA%が喜んで祝うのを見て、胸のわだかまりは消えない
    - 掲示板から目を外し、観客席へ向ける
    - ずっと信じてくれた相棒は、見ていてくれるはずだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……」
    - 視線の先で、%YOU%は観客席のいちばん前に立ち、パーマーと目が合う
    - うつむいて選手通路を歩き、控え室の扉を押す
    - %YOU%を見た瞬間、早足で寄ってきて、頭を下げたまま前に貼りつく
    - 静かな控え室に、小さな泣き声が、パーマーの涙といっしょに響く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱりだめだったね。有馬記念、勝ちたいとか……言ったときはあんな顔してたのに……」
    - acc: 1
      content: 「パーマー……」
    - %YOU%の声を聞くと、泣き声が止まる
    - %YOU%の手をさらに強く掴み、離そうとしない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このまま、ここで……ちょっとだけ逃げさせて……」

#シニア級1月1週
new_year_2:
  title: 新年の初詣
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あけましておめでとう、トレーナー！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「初詣だよ！ 超すごい神様に今すぐお参りして、新年いっしょにハイってこうって盛大にお願いしちゃお！」
    - acc: 1
      content: 「いつのまにか、ギャル語にも慣れてきたな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「当然！ ヘリオスといっしょにいる時間、もうけっこう長いしね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに今年からあたしはシニア級の%UMA%。観客の前で、ギャルスタイルの魅力を見せる番だよ！」
    - これまでパーマーはずっと走って、成績も経験も積んできた。オグリキャップが全力で走る姿も、目に焼きついている……
    - いろいろな経験が%SEX%の力になって、今年、大きく伸びる因子になるはずだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、そうだトレーナー、今思いついたんだけど～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ギャルっぽい願い事するなら、普通の神様より、そっち専門の神様に頼んだほうがよくない？」
    - acc: 1
      content: 「ええ、そんな神様いるのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いるいる。この世にはね、ギャルの神、パーティーの神みたいな%UMA%がたくさんいるよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%にお参り、試してみない？ 今から行ってみよっか」
    - acc: 1
      content: 「なるほど……面白そうだな」
    - 神社で昔ながらの神様に手を合わせるより、%THEY%のほうが今っぽい力を貸してくれるかもしれない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ、%THEY%を探しに行こう！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……とは言ったけど、こういう神様も種類が多いんだよね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「遊び上手とか、超きれいとか……誰にお参りする？」
    - 目当てにする神様は一人じゃない。ここで……
    - acc: 1
      key: select
      content: 「ダイタクヘリオスの女神」（体力+200）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「太陽の女神か……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、そうだ。前に%SEX%が言ってた、天神みたいに輝いてる%UMA%を知ってるって！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「このあいだ%SEX%にそっけなくされて、『お嬢さま冷たい～！』って大声出してたの、覚えてる。名前は……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大日如来、だっけ？ とにかく、先にお参りしに行こう」
        # CFLAGNAME:66 = 募集状態
        - if: era.get('cflag:85:66') === 0
          content: 大日如来……名前からして、まるごと神様みたいだ。どんな子なんだろう
        - if: era.get('cflag:85:66') === 1
          content: 大日如来……名前からして、まるごと神様みたいな……
        - if: era.get('cflag:85:66') === 1
          content: この響き、どこかで聞いた気がする？
        - divider: true
          content: ショッピングモール
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、いたいた！ もしかしてあの子？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うわ、なんだ、如来っぽくない！ 超かわいい！ お人形さんみたい！」
        - if: era.get('cflag:85:66') === 0
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「声、かけてみよ……いや、やめとこ」
        - if: era.get('cflag:85:66') === 1
          lines:
            - acc: 1
              content: 「実は……%SEX%、知ってるんだ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「え？ じゃあちょうどいいじゃん！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「じゃあ声、かけてみよ……いや、やめとこ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%SEX%、かわいすぎてメーター振り切れてるよ！ 見てるだけでいいよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うわあ～、あの子ほんと可愛い」
        - if: era.get('cflag:85:66') === 1
          acc: 1
          content: 「可愛いのは、たしかにな」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「見てるだけで、心が癒される～」
        - if: era.get('cflag:85:66') === 0
          content: パーマーと%YOU%は遠くから眺め、その可愛さに心を癒された
        - if: era.get('cflag:85:66') === 1
          content: パーマーと%YOU%は遠くから眺める。ただ、%YOU%の胸には、うまく言えない微妙さが残る
    - acc: 2
      content: 「パーティーの神、元祖！」（全能力+8）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「パーティーの神様……あ、そうだ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大昔から、パーティー好きっているんだよね！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そのなかで元祖って言えるのが……」
        - divider: true
          content: ダンスホール
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「ハーイ、パーマーちゃん～」
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「いっしょに踊ろ、ふん、ふん～」
        - divider: true
          content: %MARU%、昭和レトロとバブルの文化を愛する%UMA%
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「んふん、あたしから何をゲットしたいのかしら～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「マルゼン姉、元祖のギャル語、教えてほしい！」
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「元祖ギャル語？ そうね……」
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「ワンレン、ボディコン、湘南lover！」
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「ゴー～ゴー～シュ～シュ～キラキラ！」
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - 「ゲーセンで会計、カーディガンは肩掛け！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わあ、意味はわかんないけど、気合はすごい」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これが元祖ギャル語……！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、あたしもテンション上がってきた！」
        - バブル世代の神、マルゼンスキーにお参りしたあと、パーマーの気分も明るくなった
        - %YOU%は、よく聞き取れなかったが……
    - acc: 3
      content: 「ビリヤードの神？」（スキルPt+35）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ビリヤードの神……そうか、クールでカッコいい系もいるんだ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ビリヤード場があるところ、いろいろ見てこよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「出発～」
        - divider: true
          content: ビリヤード場
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - 「ほう～、ビリヤードを教わりたいのは、お前か。パーマー」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「は、はい！ こ、これもまた別枠のギャルスタイルだね……」
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - 「ビリヤードというのは、要するに間合いだ」
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - 「相手に打たせておいて、最後に自分が玉をポケットへ沈める。だが……」
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - 「俺は、それが嫌いだ」
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - 「お前も、攻め続けて相手に番を渡さない走りが好きだろ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え？ つまりどういうこと？ あたし、その通りにすればいいの？」
        - 傲岸なビリヤードの達人、シリウスシンボリ
        - パーマーはビリヤードの神から、いろいろな技を学んだ……本当に？

# 日経新春杯
nikk_hai:
  title: 気分転換！
  lines:
    - 新しい年、新しい気持ち！
    - 去年の調子がどうであれ、今年がどうなるかは別だ。まず自分のリズムに入る！
    - そう思ったパーマーは、迷いなくコースへ向かう
    - 観客席のいちばん前に貼りつくように立って、元気いっぱいのパーマーを見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よっ！ 今日のレースもハイってこう！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「普通のレースだけじゃ退屈でしょ？ だから%SELF_CALL%が、今日を超～級のパーティーにしちゃうよ！」
    - 観客席のファンは、パーマーの発言に一瞬ぼんやりして、すぐ反応する
    - 最初は目白家の尻馬くらいに見られていたのに、今は名のある%UMA%だ
    - 熱いファンのあいだに紛れて、舞台の上ではしゃぐパーマーへ、そっと声援を送る
    - acc: 1
      content: （……でも、この角度だと勝負服からお腹が丸見えだな）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんな！ 見てて！ あたしの全力逃げ！」
    - パーマーは舞台の上で素直なまま、下のファンと楽しそうにやりとりする
    - パーマーだからな。場の空気を読むのは超得意だ
    - ……下半身の空気までは、読まないでほしい
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……トレーナー！ あんたも見ててよ！」
        - なぜかパーマーは、観客席に紛れている%YOU%へ突然声を飛ばす
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日の%SELF_CALL%、調子は絶好調だよ！」
        - ごく普通の言い方なのに、その目には別のものが混じっている
        - acc: 1
          content: （やっぱりバレてるな……）
        - %YOU%の視線を読んだのだろう。ほかの人が気にしていない隙に、%YOU%へ小さく手を振る
        - ……ほかの意味はない、はずだ

# 日経新春杯勝利
nikk_hai_win:
  title: 新しい一日！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さっぱりした！ やっぱりハイるのがあたしのやり方だよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「空気読まない、余計なこと気にしない、走ればいい！」
    - 周囲の視線を気にせず、自分の走りでレースを終える
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どう、トレーナー？ 今日、かっこよかったでしょ！」
    - acc: 1
      content: 「言うまでもない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり？ えへっ！」
    - パーマーは少し照れて、なぜか赤い頬を掻き、浮かれた足取りで控え室をぐるぐるする
    - if: era.get('love:64') >= 50
      lines:
        - 汗が薄黄色のインナーの縁を伝い、きれいな曲線を描く
        - パーマーの体つきはもともといい。とくに%SEX%の、露出の多い勝負服だと余計に目立つ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「どうしたのトレーナー？ 顔、変だよ？」
        - %YOU%の前で手を振り、視線の先には気づいていないらしい
        - acc: 1
          content: 「……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、トレーナー？」
        - パーマーの声が耳元でまた聞こえて、意識が汗だらけのお腹から体へ戻る
        - 上げた視線に、穏やかな顔はなかった。少し意地悪な表情だ
        - 顔と顔が近く、息が頬をそっと撫でる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そんなに好きなら……もっと見てていいよ」

# 天皇賞（春）
tenn_spr:
  title: 目白だけじゃない！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「天皇賞か……」
    - 天皇賞（春）が目白家にとってG1以上の意味を持つことは、二人ともわかっている
    - でも今のパーマーには、その層はない
    - 二人は選手通路の壁に背を預け、肩と肩を寄せる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえトレーナー、このコース、本当に最後まで逃げ切れる？」
    - パーマーの言葉は迷いみたいに聞こえる。顔には不安がまったくない
    - 自信のある顔で%YOU%を見て、耳をぴくぴくさせながら返事を待っている
    - acc: 1
      content: 「もちろん、信じてる」
    - acc: 2
      content: 「自分でもできるって、わかってるだろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「了解！ %SELF_CALL%が一気に最後まで行くよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「目白らしくない、あたしの走りで！ みんなハイらせるよ！」
    - 手を高く上げて、%YOU%に向かって叫ぶ
    - 振り返り、選手通路を出て場へ向かう

# 天皇賞（春）勝利
tenn_spr_win:
  title: 逃げ切りの勝ち！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うひょー！ 超さっぱり！ 超楽しい！」
    - パーマーは場の視線も声も気にせず、選手通路で待っている%YOU%へ一直線に走ってくる
    - お祝いしたそうな顔が、だんだん別の表情へ変わる
    - この感じ、見たことがある
    - acc: 1
      content: 「パーマー！？」
    - 減速せず、はっきりした目標で%YOU%へ飛びかかってくる
    - なんとか踏みとどまってから、隣で汗だくのパーマーへ目をやる余裕が出る
    - 甘い汗の匂いが鼻に入り、高く打つ心臓をさらに煽る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！ 天皇賞（春）、勝ったよ！」
    - acc: 1
      content: 「おいおい！ パーマー！」
    - %YOU%の声は大きいが、パーマーは聞こえていないみたいに、静かに抱きついたままだ
    - きつく回した腕が%YOU%の息を止めかけたころ、遅れて手を緩める
    - 緩めたのはそのせいだが、意外そうな顔はしていない
    - 言うなら、わざとだ
    - ……勝ったんだし、もう少し抱かせてもいいだろう
    - if: era.get('love:64') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ねえ、トレーナー！」
        - パーマーの声は、さっきのことを気にしていない
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あたしと、目白の家に……行ってみない？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今なら……メジロパーマーの相棒として、だよ」
        - acc: 1
          key: select
          content: 「今なら……？」
        - acc: 2
          content: 「じゃあ……待ってる！」（好感+10）
        - さっき%YOU%を強く抱いていた両手は、今は少し恥ずかしそうに背中へ回している
        - パーマーは顔を赤くして、腰を曲げて近づく
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「じゃあ、先にウイナーズステージ行くね……%YOURNAME%は、ここで待っててよ！」
        - 目は合わない。でも薄い赤の顔に、澄んだ笑顔が見える

# 天皇賞（春）敗北
tenn_spr_lose:
  title: 主役じゃなくてもいい！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、負けちゃった！」
    - パーマーは汗だらけのまま、軽い足取りで控え室へ入ってくる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「んー、あー、やっぱちょっと難しいね！」
    - 大きく伸びをして、勢いで椅子に座る
    - 勝負服の上着を脱いで、顔へそっと風を送る
    - acc: 1
      content: 水を渡す
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ありがとう！ ちょうど欲しかった！」
        - パーマーは自然にカップを受け取り、一気に大きく飲む。口の端から水が零れる
        - 張りつめていた体が一気に緩み、蒸気でも立ったみたいだ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「こんなに楽しく走れたの、久しぶり……でも暑い」
        - 両手で椅子を軽く支え、上半身を起こして上へ息を吐く
        - 汗が髪を伝って薄黄色のインナーに落ち、薄い湯気を立てる
        - そんなパーマーを目に収めて、頭に最初に浮かぶのは
        - 今日は本当に暑い。どっちの意味でも
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でもね、重荷はなかったよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーが信じてくれたし、負けるときもあたしのやり方で負けた」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「悔しくはあるよ。でも嫌な感じはしない……これもトレーナーのおかげだね！」
        - パーマーの笑いは軽い。%SEX%の言葉そのままだ
    - if: era.get('love:64') >= 90
      acc: 2
      content: パーマーの隣に座る
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「こんなに楽しく走れたの、久しぶり……でも暑い」
        - 両手で椅子を軽く支え、上半身を起こして上へ息を吐く
        - 汗が髪を伝って薄黄色のインナーに落ち、薄い湯気を立てる
        - 今日は本当に暑い。どっちの意味でも
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でもね、重荷はなかったよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーが信じてくれたし、負けるときもあたしのやり方で負けた」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「悔しくはあるよ。でも嫌な感じはしない……これもトレーナーのおかげだね！」
        - パーマーの笑いは軽い。%SEX%の言葉そのままだ
        - 明るい笑い声のあと、微妙な沈黙が来る。パーマーは後ろへ回していた両手を、そっとしまう
        - 長椅子を少しずつ横へずれて、%YOU%の太ももに寄りかかる
        - acc: 1
          content: 「パーマー？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちょっと喉渇いた。口、乾いてる」
        - 指が腿を伝って上がり、軽く二度つまむ
        - 熱のせいか羞恥のせいか、真っ赤な顔がゆっくり近づき、乾いた唇が開く
        - acc: 1
          content: 「いいよ」
        - パーマーの耳が小さく震え、目を閉じる
        - そっと唇を重ね、舌が歯の隙間を越えて温かい唾を探す
        - 柔らかいのに強引で、断りなく入ってくる。もともと自分のものみたいに
        - 器用な舌が%YOU%の口の水分を奪い、白い糸を引く
        - 相手の舌を離し、唇の端に残った水分を舐めて、小さく息を整える
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ごちそうさま……」
        - 腿の上の手を戻し、%YOU%の顔を一度なでる
        - 立ち上がって両手を後ろに回し、今は止まらない胸の高鳴りを隠す
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あとでいっしょに、目白の家……戻っていい？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「残りの分も、いけるかも？」

# シニア級宝塚記念
takz_kin:
  title: とにかく信じる！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自分の走りを信じる、自分の力を信じる……わかってるよ！」
    - パーマーはゲートの前に立ち、握った拳を胸へ当てる
    - 閉じていた目を開き、目の前のコースを見る
    - acc: 1
      content: 「パーマー！ 頑張れ！」
    - %YOU%の声が、観客席からパーマーの耳へ入る
    - パーマーの耳が小さく震え、それから観客席へ向く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……うん、聞こえたよ！」
    - 声は届かないかもしれないと思って、握った手を高く上げる
    - あちらの相棒へ、勝ちの合図を送る

# 宝塚記念勝利
takz_kin_win:
  title: ちょっと寂しいけど、いい！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やった！ 勝ったよ！」
    - 元気な声が勝ちの瞬間に響き、そのままパーマーが走ってくる
    - 自分を呼ぶ観客席へ思い切り手を振り、力が尽きてから下ろす
    - 周囲の声が収まってから、パーマーは控え室へ戻る
    - さっきまでのパーマーと違い、今は黙って扉を閉じる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのね、トレーナー」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「撫でてくれる？」
    - パーマーの顔にはまだ勝ちの余韻がある。目だけ、喜び以外の色が少し浮かんでいる
    - acc: 1
      content: 「何かあったのか？」
    - acc: 2
      content: パーマーの頭を撫でる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……ありがとう、トレーナー」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さっきの観客席……目白のみんな、いなかったんだ」
    - %YOU%の胸で気持ちが揺れているパーマーを見て、我慢できずに手を上げ、そっと撫でる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……でも、トレーナーの声で落ち着いたよ」
    - 尻尾が抑えきれず左右に揺れ、つま先も落ち着かなさそうに床を叩く
    - acc: 1
      content: 「みんな、見てるはずだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしもそう思うよ。ちょっと寂しいだけ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わかってるよ。でも……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もういいや！ 考えすぎ、超疲れる！」
    - 自分の思考を大声で切り、背筋を伸ばす
    - acc: 1
      content: 「もうわかってるだろ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、もういいよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、大事なのは、あたしがやりきったことだもん！」

summer_start_2:
  title: 夏季合宿（シニア級）開始
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっほー～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「夏！ 海！ パーティーの季節きた～！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そういえば、去年もこんな感じで大騒ぎしたね～」
    - パーマーはバスを降りたばかりなのに、もう胸の興奮を抑えきれず声を上げる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ヘリオスとのコンビ、今年の天皇賞（秋）に向けて、この合宿で仕込みまくるよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、天皇賞（秋）か～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「マックイーンは絶対出るよね。それに……」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「そうだよ！ でも今年はもっと、もっと～熱いよ！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「だって天皇賞（秋）のために、みんなやる気満々だし！」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「今年は強い%UMA%が、かなり揃いそうです」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「あ、イクノじゃん！ 元気～やる気～、相変わらずメガネだね～」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「はい。睡眠以外は、ほぼ一日中かけています」
    - 会話に割り込んできたイクノディクタスは、まったく浮いていない。自然に混ざる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「イクノ、今年の天皇賞（秋）……何か知ってる？」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「はい。いくつか情報があります」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「まずネイチャが出ると言っています。私も出ます」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「あー、ネイチャとイクノ！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「身内ハロウィンパーティーじゃん！」
    - ダイタクヘリオスの冗談はいったん置いて、レースの話へ戻る
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「もちろん、マックイーンさんも出ます。それから……」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「トウカイテイオーも、出走します」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トウカイテイオー……マックイーンのライバルだ」
    - メジロマックイーン、トウカイテイオー……この二人のスターが出れば、話題の大半は%THEY%に持っていかれるだろう
    - スターだらけの天皇賞（秋）に、パーマーへ向くカメラはない。それが%SEX%の走りに影響するかもしれない……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「帝王が出る、マックイーンも出る！ 超いいじゃん！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「誰でもいい、全員来い！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたし！ あ、あたしたちは怖くないよ！ でしょ、ヘリオス～」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「おっイエー～、全然怖くないよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どんな相手が来ても……いちばん輝くのは～」
    - %CHARA%&%HELIOS%「あたしたちの友情！ おっイエーーー！～」
    - 本来なら圧のかかるレースなのに、パーマーの顔に緊張はない
    - 昔の陰はもう%SEX%のそばにいない。今は……
    - ハイりきった夏が、待っているだけだ！

# 恋慕＞74
summer_middle_2:
  title: 夏の小さな事故
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！ 日焼け止め、取ってくれる？」
    - 「取れるけど、なんでヘリオス%THEY%に頼まないんだ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ヘリオス%THEY%、もう下に行っちゃったし、今呼び出しても悪いよ」
    - color: %COLOR%
      content: パーマーはマットにうつ伏せになり、尻尾が少し興奮して左右に掃く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに%CALLNAME%だって、初めて触るわけじゃないでしょ？ このあいだの自由レースも、汗拭いてくれたの%CALLNAME%だよ」
    - 「あのときは水着じゃなかっただろ。同じじゃない」
    - color: %COLOR%
      content: %CALLNAME%の声には少し苛立ちがある。パーマーの耳には、いつもの突っ込みにしか聞こえない
    - color: %COLOR%
      content: 相棒がどんな人かは、パーマーがいちばんわかっている。変な考えはないはずだ
    - color: %COLOR%
      content: 少なくとも自分に対しては……たぶん
    - acc: 1
      content: 「うん、背中はだいたい終わった、パーマー」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おっけー」
    - color: %COLOR%
      content: マットから起き上がり、ひっくり返したところで、視線を逸らしている%CALLNAME%の顔が見える
    - color: %COLOR%
      content: もしかして……照れてる？ 珍しいね
    - color: %COLOR%
      content: パーマーは少し意地悪く笑う。すぐ、変な考えは胸の奥へ押し戻す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前は自分でやるよ、%CALLNAME%……%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （これ……まさか？）
    - color: %COLOR%
      content: 何も言わずに日焼け止めを置いて背を向ける%CALLNAME%を見て、パーマーの顔に薄い赤が浮かぶ
    - color: %COLOR%
      content: 夏の服に隠す力はない。まして今の%CALLNAME%はシャツ一枚だ
    - color: %COLOR%
      content: 真っ赤な耳は、少し気をつければ見える
    - color: %COLOR%
      content: 照れてるよね？ 絶対照れてるよね？
    - color: %COLOR%
      content: ちょっとからかいたくなってきた……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「んふ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえトレーナー……前も、お願いしちゃおっか？」
    - color: %COLOR%
      content: 口に出したあとで、言ってはいけないことを言ったと気づく
    - color: %COLOR%
      content: つまり前も、%CALLNAME%に好きに触らせる、ということだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （あれ、ちょっと行きすぎ？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （%CALLNAME%……受けるかな？）
    - color: %COLOR%
      content: 心臓の速さはまだ上がっている。レースのときと同じくらい……
    - color: %COLOR%
      content: 最初は意地悪そうだった笑顔が、真っ赤で気まずい顔に変わる。%CALLNAME%が恥ずかしがって断ってくれ、と祈るしかない
    - color: %COLOR%
      content: だがたいてい、祈ったことの逆が起きる
    - acc: 1
      content: 「わ、わかった……」
    - color: %COLOR%
      content: %CALLNAME%の声は少し震えている。日焼け止めはもう用意できている
    - color: %COLOR%
      content: 振り返ったとき、目が合う
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「や、やっぱり自分でやる！ よく考えたらあたし、くすぐったがりで……」
    - color: %COLOR%
      content: パーマーの目が小さな渦を巻き、焦って%CALLNAME%の日焼け止めを奪おうとする
    - color: %COLOR%
      content: 海辺の風が強いのか、パーマーの動きが大きいのか
    - color: %COLOR%
      content: パラソルの下が少し緩み、二人のほうへ倒れてくる
    - 「パーマー！」
    - color: %COLOR%
      content: %CALLNAME%がパーマーの上に覆いかぶさり、肘でかろうじて空間を作る
    - color: %COLOR%
      content: 下に寝たパーマーは戸惑って両手を胸の前に縮め、同じように赤い%CALLNAME%の顔を見る
    - color: %COLOR%
      content: パラソルは大きく、広い空間が残る。人には当たっていない
    - 「悪い！ すぐ起きる……」
    - color: %COLOR%
      content: %CALLNAME%が起き上がろうとしたとき、パーマーは素早くその手を掴む
    - color: %COLOR%
      content: 日焼け止めの瓶が傍らに落ち、パーマーはそれを取り上げて%CALLNAME%の手へ注ぐ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……前も、お願いしていい？」
    - color: %COLOR%
      content: 顔を赤くして、自分でも想像していなかった言葉を出す
    - color: %COLOR%
      content: 今、二人はパラソルの下に隠れている。外の人が気にしなければ、何も見えない
    - color: %COLOR%
      content: %CALLNAME%の手を掴み、自分の体へ引く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「責任、取ってよ……ドキドキさせた責任……」
    - color: %COLOR%
      content: パーマーは独り言のように言い、自分を納得させているみたいだ
    - color: %COLOR%
      content: %CALLNAME%は何も聞いていないみたいに、おずおずと手を伸ばし、パーマーの体をそっと撫でる
    - color: %COLOR%
      content: 冷たい日焼け止めと掌の熱が混ざり、パーマーの滑らかなお腹を上下する
    - color: %COLOR%
      content: 頬の赤は首の根まで上がっている。いつも逃げを支える脚に、力が入らない
    - color: %COLOR%
      content: 逃げたい。でも……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （トレーナーなら、逃げなくてもいいよね）
    - 「パーマー、もういい」
    - color: %COLOR%
      content: 手を引き、パーマーの目の前から離れる
    - color: %COLOR%
      content: 振り返ってパラソルを掴み、少しずつ起こす
    - color: %COLOR%
      content: %CALLNAME%の背中を見て、パーマーは黙る
    - color: %COLOR%
      content: 今なら、誰にも二人は見えない
    - color: %COLOR%
      content: 今なら、何をしても見つからないはず
    - color: %COLOR%
      content: 今なら……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、%CALLNAME%」
    - color: %COLOR%
      content: %CALLNAME%はパラソルを置き、振り返ってパーマーを見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ここ……まだだよ」
    - color: %COLOR%
      content: 自分の胸を指して、顔を赤くする
    - color: %COLOR%
      content: %YOURSEX%がどうするかは、わからない
    - color: %COLOR%
      content: もしかして……
    - acc: 1
      content: 「パーマー、ここは……」
    - color: %COLOR%
      content: 日焼け止めのついた手が震える
    - color: %COLOR%
      content: 掴まれたまま、パーマーの前へ引き倒される
    # CFLAGNAME:0 = 性別
    - if: era.get('cflag:64:0') !== 1 && era.get('cflag:0:0') === 1
      color: %COLOR%
      content: 男は女性の胸に異を唱えない、と言うけれど……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%が嫌なら……」
    - color: %COLOR%
      content: 空中で震えていた掌は、パーマーが自分から胸を預けて、ようやく止まる
    - color: %COLOR%
      content: パーマーはきつく目を閉じ、緊張した体が小さく震える
    - color: %COLOR%
      content: 温かい液が胸を伝い、水着の中へ流れる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content: 閉じていた目をゆっくり開け、少し戸惑っている%CALLNAME%の顔を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「好き？」
    - color: %COLOR%
      content: パーマーは細い手を伸ばし、%CALLNAME%の顔をそっと支え、自分の顔へ引く
    - color: %COLOR%
      content: 唇が触れ、二人の熱を交換する
    - color: %COLOR%
      content: 舌が自然に歯の隙間を抜け、絡み合う
    - color: %COLOR%
      content: 息が持たなくなるまで続け、名残惜しそうに舌先が唾の糸を引く
    - acc: 1
      key: sex
      content: 「でも、今はまだだめ」 # 性欲+5%
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え……」
        - color: %COLOR%
          content: 熱を持った頭に冷水をかけられたみたいに、思考が普通へ戻る
        - color: %COLOR%
          content: パーマーは上体を起こし、焦ってパラソルの外を見る
        - color: %COLOR%
          content: ……誰にも見つかっていない
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あたしがずっと戻らないと、みんな疑うよ」
        - color: %COLOR%
          content: パーマーは、もう抑えきれない尻尾をそっと掴み、何事もなかったように陰から立つ
        - color: %COLOR%
          content: 深く息を吸って、%CALLNAME%へ手を伸ばす
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「帰ってから……%CALLNAME%と、いっしょに……」
    - acc: 2
      content: 「好きだよ、パーマー」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あたしも、%YOURNAME%」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%YOURNAME%、好き……」
        - color: %COLOR%
          content: %CALLNAME%を掴んでいた両手を放し、指で水着の紐をそっとほどく
        - if: era.get('cflag:64:0') !== 1
          color: %COLOR%
          content: 小さな桜色がもう立って、待っている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「お願い……」
      # 馬跳び

summer_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あ……これ、まずいかも」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「みんな、あたしたちがいないの、気づいてるよね。やばい」
  - color: %COLOR%
    content: 同じように汗だらけの%CALLNAME%の体をそっと押し、跡を拭く
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あの、帰ってからも、続きできるよね」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ち、違うよ、そういう意味じゃなくて！ ただ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%といっしょだと、楽しい、とか」
  - color: %COLOR%
    content: パーマーは顔を赤くして、少し仕返しみたいに%CALLNAME%の体をまたつまむ

# 恋慕＞74、8月第4週から
walk:
  title: 海辺の散歩
  lines:
    - 夏季合宿の終わりは、残ったトレーニングが少なく、自由時間が多い
    - パーマーは一人で砂の波を見て、時々後ろの%YOU%を盗み見る
    - 午後はすぐ過ぎ、砂浜にトレーニング中の%UMA%はもういない
    - acc: 1
      content: 「よし、こっちも戻るか……」
    - 離れようとしたとき、パーマーがそっと%YOU%の手を引く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのね、トレーナー、ちょっとだけ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ちょっとだけでいい。ここ、歩いてくれない？」
    - パーマーの目は別のほうを見ているのに、時々%YOU%のほうへ来る
    - acc: 1
      content: 「いいよ」
    - acc: 2
      content: 「でも、もう遅いぞ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「んふ……こんな散歩、あたしたち、けっこう久しぶりだよね」
    - パーマーは両手を後ろに回し、ふくらはぎが落ち着かなさそうに床を叩く
    - 視線は自分の水着と%YOU%の体を行き来して、顔だけ見ない
    - 道具をしまった%YOU%は、落ち着かない小さな動きに気づかず、パーマーのそばへ来る
    - 海辺の夕日が二人の横顔を照らし、静かに歩く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「普段ここいるとき、いつもみんなといっしょだよね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いっしょにトレーニングして、遊んで……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「楽しいのは楽しいんだけど、なんか足りない気がして」
    - パーマーはゆっくり%YOU%のそばへ寄り、肩と肩を合わせる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーと二人だけのとき、なんか……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……わかった。足りなかったの、これだ」
    - acc: 1
      content: 「何が？」
    - %YOU%の声を聞いて、パーマーは思わず笑う
    - 無防備な脇腹を、力を入れずに小さく突く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーだよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーニングじゃなくて、みんなといっしょでもなくて……あたしたち二人だけ」
    - 夕日の金色がパーマーの顔を照らし、真っ赤な頬を隠す
    - 静かに海岸に立ち、波が足首を越える感触を味わう
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、トレーナー」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これからも、ずっといっしょにいてくれる？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前に言ってくれたみたいに、ずっと見てて」
    - パーマーは明るい太陽を背に、%YOU%へ向かって満面で笑う

summer_end_2:
  title: 夏季合宿（シニア級）終了
  lines:
    - 終わりかけの夏に乗せて、祭りが始まる
    - パーティー好きの%UMA%たちが、この機会を逃すはずがない
    - %CHARA%&%HELIOS%「おっイエー～、まずは村の祭り、それから～」
    - 明るい声が上がった直後、空にいくつかの明るい星が昇る
    - 夜空に大きな花火が咲き、空を見るみんなの顔を照らす
    - %CHARA%&%HELIOS%「超ハイ花火、ドン～パ！」
    - divider: true
      content: 翌日
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よーし！ 今日もいっしょに走ろ、相棒！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「いいよ、%65_CALL%！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「好きな人といっしょに走れば、疲れはゼロ～」
    - %CHARA%&%HELIOS%「よーい～どん！！」
    - パーマーとダイタクヘリオスは仲よく走り続け、とても楽しそうだ
    - 合宿の最後の時間が尽きて、やっと止まる
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「ああ～マジ～、合宿、今日で終わりなの～？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「あたしたちの夏、終わっちゃったわ～～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「同感～、もっと走りたかった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもね、ヘリオスと同じ目標に向かって走って、夏を過ごしたかったんだ」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「おお、いっしょに夕日へ突っ込むやつ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもさあ～、このあと本番あるでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あっちのほうが、もっとハイでしょ！ ね？」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「そう！ 天皇賞（秋）！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「二人でハイりきる～おっイエーおっイエー～！」
    - 二人で高く歓声を上げる。傍らで見ている%YOU%だけ少し気まずい。視線を、同じく%THEY%を見ているもう一人へ移す
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「……」
    - acc: 1
      content: 「イクノディクタスさん……？」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「……いえ。少し気になっただけで、%THEY%が走りながら言っていた……」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「——疲労ゼロ理論、です」
    - acc: 1
      content: 「……それが気になるのか！？」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「はい。その理論が本当なら問題ないのですが……ありえません」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「心か体を無理すれば、いつか走りに出ます」
    - acc: 1
      content: 「%THEY%が心配なのか」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「違います。%SEX%はどんどん速くなっています。心配する点はないと思います」
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「そうです……パーマーさんは、心配いりません」
    - %DICTUS%の確信した言い方を聞き、%YOU%も視線を、はしゃいでいるパーマーとダイタクヘリオスへ戻す

# シニア級天皇賞（秋）
tenn_sho:
  title: あたしの走りで！
  lines:
    - 天皇賞（秋）の当日、運よく好天には恵まれなかった
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うわ、この地面、びちょびちょだね」
    - 馬場が走れないほどではない。だが一面のぬかるみは、見ているだけで少し大げさだ
    - このまま走り切ったら、全身泥だらけになるかもしれない
    - でも%SEX%は走る。%YOU%はそう信じている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これ、走り終わったら絶対やばいよね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも！ 大丈夫！」
    - パーマーは拳を握り、力強く振る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ヘリオスと約束したレースだよ。怖くない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どんな馬場でも、あたしの走りは変わらない！」

#依存持ちの天皇賞（秋）
tenn_sho_yandere:
  title: あたしの走りと、あたしの……
  lines:
    - color: %COLOR%
      content: 天皇賞（秋）の当日、%CHARA%はあまり明るくない空を見る
    - color: %COLOR%
      content: ハイりたい気持ちは本物だ。ダイタクヘリオスといっしょに場を走りたい気持ちも本物だ
    - color: %COLOR%
      content: ……でも、何かが足りない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ハイれない……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー……いないの？」
    - color: %COLOR%
      content: 場に立っているのに、やる気が出ない
    - color: %COLOR%
      content: そばの友人たちは簡単な捨て台詞を置いて、ゲートへ向かう
    - color: %COLOR%
      content: 異常はないふりをして、声をかけてきた全員に応えてからゲートへ入り、始まりを待つ
    - color: %COLOR%
      content: 時間が、ここでゆっくりになる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……え？」
    - color: %COLOR%
      content: 視界の端に、遅れて来た%CALLNAME%が%SEX%を応援している姿がある
    - color: %COLOR%
      content: 場の風が%CALLNAME%の声援を運び、パーマーの立った耳へ入る。沈んでいた目に光が戻る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （トレーナーだ）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （トレーナー、ずっと……見ててくれたんだ）
    - color: %COLOR%
      content: 周囲の声が止まり、すべての%UMA%がゲートの開く一瞬を待つ
    - color: %COLOR%
      content: %CHARA%も前方をじっと見て、両手を握り直す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （トレーナー%YOURSEX%……ずっと、いたんだ！）

# 天皇賞（秋）勝利
tenn_sho_win:
  title: やっほー！ 全身泥でも全然いい！
  lines:
    - 逃げ切り成功！ 全速通過！
    - 歩幅が地面を叩いて跳ねた泥が全身につく。泥だらけの顔に、楽しそうな笑顔がある
    - 勝ったから、だけじゃない
    - まずは汚れを拭かないと、あとが大変だ
    - %YOU%の手のタオルを見て、パーマーは安心して手を上げ、泥のついた勝負服の上着を脱ぐ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、見たでしょ。超——級に爽快だったよ！」
    - acc: 1
      content: 「たしかに、楽しそうだった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えへへ、ちょっとハイりすぎたかも」
    - パーマーは片手で気まずいように後頭部を掻く。少し我に返った顔だ
    - 今日は確かに行きすぎた。白いタオルはもう泥だらけだ
    - acc: 1
      content: 「いいよ。レース後はこっちの仕事だ」
    - acc: 2
      content: 「構わない。パーマーの体に触れるなら、悪くない」
    - その一言を聞いて、パーマーは思わず震える。脇腹を軽く拭いていたタオルも横へ滑る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あはは、じゃあお願いね、トレーナー」
    - 口では礼を言い、片手で傍らのタオルを掴んで何気ないふりをする
    - 上げた両手は空中でうろうろ拭いて、どこへ置けばいいかわからない
    - acc: 1
      content: 「あの、パーマー？」
    - %YOU%の試しの問いが、飛んでいたパーマーの思考を戻す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大丈夫大丈夫！ ちょっとくすぐったくて驚いただけ！」
    - できるだけ顔を別のほうへ向け、下を見ない
    - タオルは薄く、毛の感触の向こうに、力のある指が体を辿るのがわかる
    - 脚の土はきれいに落ち、タオルが上へ進む
    - 温かい指先が露出した脇腹に密着し、上下する
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （泥を拭いてるだけ、泥を拭いてるだけ……）
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （そう、泥を拭いてるだけ……）
        - タオルが微かに震える体を少しずつ動き、臍へ向かう
        - 土が落ち、パーマーのお腹が見える
        - 指はタオル越しでも、伝わってくる小さな震えを感じる。汗もインナーから少しずつ滲む
        - だんだん赤くなる様子を見ると、我慢が効かない
        - 舌が可愛い臍の上を、まっすぐ一線なぞる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わっ！」
        - パーマーの驚いた声が、%YOU%の意識をお腹から引き剥がす。焦って、もう拭き終わったふりをする
        - acc: 1
          content: 「もういい。あとでステージがある。早く着替えてくれ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え、あの……」
        - パーマーの言葉を聞かず、すぐ控え室を出る
        - 危なかった
        - さっきを続けていたら、パーマーを押し倒していたかもしれない

# 天皇賞（秋）敗北
tenn_sho_lose:
  title: あは、ちょっとだけ悔しいかも
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「負けちゃった……ちょっと乱れたね」
    - 控え室へ入ったパーマーは相変わらず明るい笑顔だが、どこか不機嫌な気配がある
    - acc: 1
      content: 「今日の走りは、あまりよくなかったな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうなの！ 加速を抑えきれなくて、急にブレーキが効かなくなって、急に失速した！」
    - 自分の話なのに、自分の問題みたいに聞こえない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、でも今回はすごく楽しかったよ。負けたけど」
    - 薄いピンクの舌を小さく出して、片目を閉じて可愛く見せる
    - 体を少し横へ傾け、全身の泥をこっそりこすりつける
    - acc: 1
      content: 「でも……まあ、楽しめたならいい」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えへへ、あとでウイナーズステージあるし、先に着替えるね」
    - パーマーは可愛いふりをやめて振り返り、タオルを探して汚れを落とそうとする
    - タオルに手が届く直前、なぜか後ろの%YOU%を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレ～ーナー～」
    - acc: 1
      content: 「何だ？」
    - 後ろの声に反応して振り返ると、パーマーが全速でこちらへ来る
    - 泥だらけで抱きつき、%YOU%の服を汚す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えへへ、冗談、冗談！」
    - パーマーの顔は悪戯っぽく、器用な舌を出す

# シニア級有馬記念
senior_arim_kin:
  title: 準備はいい？ 逃げ、始めるよ！
  lines:
    - 年末最後のG1
    - いつもなら、今は緊張でいっぱいのはずだ
    - でも選手通路の出口に立つパーマーの顔に、不安は一点もない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有馬記念か……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「現実じゃない感じ……ないね」
    - acc: 1
      content: 「ああ、有馬記念だ」
    - 筋の通らない会話の下に、互いに知り尽くした信頼がある
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえトレーナー、覚えてるかわからないけど」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前にね、あたし自身のスタイルを見たいって言ったでしょ？」
    - acc: 1
      content: 「今も同じだ」
    - %YOU%の声を聞いて、パーマーの顔に自信のある笑みがかかる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃあ見てて。パーマーあたしの全力……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全部後ろへ置いて、前だけ見て」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしの全力爆逃げ！」
    - 手を上げて後ろへ親指を残し、強い目で場へ踏み出す。手を振っている友人のほうへ歩く

# 通常勝負服
s_arim_kin_win_clothe1:
  title: これが、熱いあたしの走りだ！
  lines:
    - 実況「届くか！ 届くか！」
    - 有馬記念の後半は、もう最高潮だ
    - 実況「今加速しなければ届かない！ メジロパーマー！」
    - 親友のヘリオスはもう失速し、逃げ続けているのは自分だけだ
    - でも約束した。この走りで勝つ、と
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「あとは任せたよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしたちは、一生の親友だよ！」
    - 最後の加速と、肺の底から搾った空気とともに、パーマーは誰にも追いつかせず、1着で入線する
    - 勝ちの歓声が耳に現実じゃなく聞こえる。画面に自分が映って、やっと大声を出し、観客席の%YOU%へ手を振る
    - divider: true
      content: 控え室
    - 場の声が収まり、パーマーはまだ冷えていない体のまま、興奮して控え室の扉を押す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！ 約束のやつ、やったよ！」
    - 自分の声が聞こえているかはわからない。気持ちはもう止まらない
    - 止められないなら、気持ちのまま動くだけだ！
    - 控え室へ吹き込んだ風に乗って、中に立つ%YOU%へ一気に跳ぶ！
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっほー！」
    - acc: 1
      content: 「うわっ！」
    - %YOU%の悲鳴とともに、二人は床へ倒れそうになる
    - パーマーに押し倒されそうなのを避け、なんとか立ってから、パーマーの後ろへ焦って手を振る
    - acc: 1
      content: 「あの、パーマー、先に手、離さないか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？ なんで？」
    - 名残惜しそうだが、言われたとおり手を離す
    - パーマーのわからない目が、%YOU%の指の先、扉のほうを見る
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「おおっ！ %65_CALL%の春！？」
    - 扉の外の友人たちが、仲のいい場面を見ている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……あはは、ちょっとみっともなかったね！」
    - 頭を押さえて二歩下がり、パーマーは気まずい言い訳を探す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「とにかく、その……またあとで！」
    - パーマーは挨拶して控え室を出る。残った%YOU%は、別のことを考えて立ち尽くす
    - レースが終わったばかりだからか、それとも何か
    - さっき抱いたとき、パーマーの鼓動……速すぎた
    - 「とにかく、先に控え室を片付けよう」
    - 独り言を言いながら倒れた椅子を起こし、頭の雑念もいっしょに片付ける
    - 「パーマーだからな。これも普通だ……」
    - if: era.get('love:64') >= 75
      lines:
        - 荒らされた控え室を片付けていると、床に別のものが落ちている
        - 勝負服の白い上着が、なぜかここにある
        - 「あ……」
        - acc: 1
          content: 上着を拾う
        - acc: 2
          content: 上着を畳む
        - 迷わず上着を拾い、手に持って眺める
        - パーマーがさっき着ていた……
        - パーマーの匂いのついた、上着
        - なぜか、持った手が少しずつ%YOU%の顔へ近づく
        - パーマーの匂いが鼻に入り、頭がふらつく
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの……」
        - パーマーが扉に立ち、気まずい顔で%YOU%と上着の密着を見ている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「嗅ぐなら……あたし、全然いいよ」
        - 気まずいのに、控え室の扉を閉じて鍵をかける
        - 世界は、向かい合っている二人だけになる
        - %YOU%の目には、もうパーマーしかいない
        - 目の前の恋人へ、パーマーは両手を開くだけだ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%SELF_CALL%はここだよ……好きにして」
        - acc: 1
          key: sex
          content: パーマーへ飛びかかる
          lines:
            - 外は寒いのに、今パーマーが吐く息は、理性を焼き尽くすほど熱い
            - 普段は白い上着が隠していた細い肩が、今は何もなく空気に触れている
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……いいよ」
            - パーマーは目を閉じ、さっきまで胸の前に縮めていた両手を開く
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あたしは、トレーナーのパーマーだよ」
          # 馬跳びへ
        - acc: 2
          content: 「落ち着け……落ち着け……」
          lines:
            - 勝負服の上着を置き、パーマーの裸の肩をそっと掴む
            - パーマーの驚いた目の中で、%YOU%は自分の上着を%SEX%へかける
            - acc: 1
              content: 「風邪ひくなよ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナー……うん！」
            - 目にはまだ名残惜しさがある。でも、少し感動した涙が浮かぶ
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「風邪ひかないよ。あの……」
            - 上着を少し強く引き寄せ、体を中へ縮める
            - さっきの誰かみたいに、深く息を吸う
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「続きは、あとで、していい？」

# クリスマス勝負服
s_arim_kin_win_clothe46:
  title: 逃げのゴールは、ここ
  lines:
    - 実況「届くか！ 届くか！」
    - 有馬記念の後半は、もう最高潮だ
    - 実況「今加速しなければ届かない！ メジロパーマー！」
    - 親友のヘリオスはもう失速し、逃げ続けているのは自分だけだ
    - でも約束した。この走りで勝つ、と
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「あとは任せたよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしたちは、一生の親友だよ！」
    - 最後の加速と、肺の底から搾った空気とともに、パーマーは誰にも追いつかせず、1着で入線する
    - 勝ちの歓声が耳に現実じゃなく聞こえる。画面に自分が映って、やっと大声を出し、観客席の%YOU%へ手を振る
    - divider: true
      content: 控え室
    - 汗だくで控え室へ戻り、掌で軽く扇ぐ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっぱり走り終わると、暑いね……」
    - 座ろうとしたところで、開けたてのハチミツ特飲が目の前に来る
    - acc: 1
      content: 「有馬記念、おめでとう」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「正直……まだ信じられないかも」
    - ハチミツを飲みながら座る
    - 場を下りたとき、なぜか高ぶっていた気持ちが自然に沈んだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、勝ったんだよね、トレーナー？」
    - 目には不安と期待が混ざっている
    - acc: 1
      content: 「ああ、パーマーが勝った」
    - 返事をもらったパーマーは笑い、そっと頭を%YOU%の肩へ預ける
    - 新しい勝負服の、露出した肩がそばに触れ、薄い香りが広がる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、あの約束、果たしたよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしの走りで有馬記念を勝った。これでみんな、お祝いしてくれるよね」
    - acc: 1
      content: 「みんな、パーマーの実力を認めるよ。疑う余地はない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、ちょっと不公平だね」
    - 珍しく、パーマーは褒め言葉を自分から拒む
    - 肩から顔を離し、隣の%YOU%を真剣に見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーがいたから、今の成績があるんだよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なのにトレーナーの名前が出ない。おかしくない？」
    - パーマーの目は真剣だ。いつもの穏やかな青い瞳に、冗談はない
    - acc: 1
      content: 「そうだな」
    - acc: 2
      content: 「でも俺は、パーマーを支えただけだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうだね……って、違うでしょ！」
    - 突っ込みながら%YOU%の頭を軽く叩いて、それから笑顔をしまう
    - 真剣な顔で背筋を伸ばし、掌をそっと%YOU%の手の甲へ重ねる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーがいなかったら、絶対できなかった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーが信じてくれたから、自由に走れた……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーがいなかったら……あたし、何もできないよ！」
    - 声が気持ちといっしょに揺れ、叫ぶみたいになる
    - 指が%YOU%の肩を強く掴み、先が肉に食い込む
    - acc: 1
      content: 「パーマー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめん、ちょっと熱くなっちゃった」
    - パーマーは手を上げ、目尻に溢れた水をそっと拭く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもね、今言ったこと、全部本気だよ」
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だからトレーナーには、いつまでもあたしといっしょにいてほしい」
        - 肩に預けた体が少し揺れ、触れたら倒れそうだ
        - 下ろした掌がそっと%YOU%の腿に乗り、返事を待つ
        - acc: 1
          key: hug
          content: パーマーを抱く
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ずっとそばにいてくれるよね？」
            - パーマーの顔が%YOU%の胸に触れ、速くなっていく鼓動を聞く
            - 目を閉じて、胸の匂いを味わう
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「だよね……」
            - %YOU%は手を上げてパーマーの頭をそっと撫で、新しい服のボタンを外す
            - 白い小さな帽子をパーマーが自分で外し、情の籠った目で待つ
            - acc: 1
              content: 「パーマー、好きだ」
            # 馬跳び
        - acc: 2
          content: パーマーにキスする
          lines:
            - 返事をするみたいに、隣に座っていた%YOU%が自分から身を起こし、深くパーマーの唇を塞ぐ
            - もともと力のなかった体が突然押されて控え室の椅子へ倒れても、抗う気はない
            - 白い小さな帽子が床へ落ちる。二人とも気にしない。瞳に映るのは互いの顔だけだ
            - どれだけキスしたかわからないあと、銀色の糸を引いて唇が離れる
            - 今、二組の目が上下で向き合う
            - パーマーはゆっくり目を閉じ、手を%YOU%の首へ回し、自分の前へ引く
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「お願い。クリスマスの%SELF_CALL%だよ」
            # 馬跳びへ

ak_c46_hug_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「えへへ、またレースを一本走ったみたい」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも今回は、安心して言えるよ——」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あたしはトレーナー……あたしは%YOURNAME%の1着！」
  - パーマーの笑顔は自然で、さっきの不安はない
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「これから、ううん、一生よろしくね、%YOURNAME%！」

ak_c46_kiss_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あー……失敗した」
  - パーマーは顔を覆い、すごく悔しい顔をする
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「これじゃトレーナーの匂いつけたままステージだよ！ ばか！」
  - 文句みたいに聞こえるのに、怒っていない
  - むしろ、嬉しそうだ
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……でもね、嫌いじゃないよ。こういうトレーナー」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「自分からキスしてくるの、%SELF_CALL%も好きだよ。でもトレーナーには、もっとちゃんと言ってほしいな」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「たとえばね、あたしのこと……どう思ってる？」
  - 指が顔をそっと掻き、目がまっすぐ%YOU%のほうを見る
  - 何を聞いているかは、聞けばすぐわかる
  - acc: 1
    content: 「好き……いや」
  - 何が%YOU%を動かして、自分からパーマーを抱き、自分からパーマーの手を引いたのか
  - その答えは、もう言わなくても出ている
  - 「……たぶん、愛だ」
  - 短くて気恥ずかしい言葉が%YOU%の口から出る。パーマーの、顔に当てていた指が止まる
  - 真っ赤な顔が少し呆けて隣の%YOU%を見る。唇が小さく震え、何か言いたそうだ
  - 情の籠った視線は、扉の外の声が思考を戻すまで続く。平らな顔が唐突に笑う
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「トレーナー、答え、出たよ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あたしたち、同じだね」

# シニア級12月4週
christmas_party:
  title: 目白のクリスマス夜会
  lines:
    - クリスマスの夜、目白家は日ごろ世話になっている各界へ応える集まりを開く
    - パーマーは白い勝負服を着て、屋外の会場を回り、場を盛り上げる
    - 周囲の空気が温まり、会場が騒がしくなってから、パーマーはぶらぶら歩いている%YOU%を見つける
    - 周りの群れを離れ、回り込んで来る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、今日、楽しかった？」
    - パーマーは飲み物を渡し、そのまま%YOU%のそばで歩調を落とす
    - acc: 1
      content: 「うん、楽しかった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えへへ、楽しめたならよかった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「上品な晩餐とか、あたし向きじゃないけど、今日は普通の集まりだよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おばあちゃんにも、ありがとうだね！」
    - パーマーの声は明るく、足取りも軽くなる
    - 周囲の声は大きくなく、二人の空間へは入ってこない
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナーといっしょのパーティー、なんかすごく楽しいね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「前は、集まりっていうと、ちょっと抵抗あったんだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あのころのあたし、空気を整える係みたいになってて、楽しい部分と自分は合わない気がしてた」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもヘリオス%THEY%と会ってからね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう自然に、みんなといっしょに楽しめてる！」
    - パーマーの体が少し前へ傾き、隣の%YOU%の顔を盗み見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「この部分も、トレーナーのおかげだよ。えへへ」
    - 自然な笑顔が浮かび、肩がそっと%YOU%に当たる
    - 年末の気温は高くない。パーマーの服も、あまり暖かくない
    - 露出した肩が%YOU%の目には、どう見ても危うい
    - acc: 1
      key: sex
      content: （風邪ひくぞ……）
      lines:
        - 露出した両肩へ上着をかけ、パーマーの体を覆う
        - 体温の残った服が体に触れ、%YOU%の匂いも少し残っている
        - 少しぼんやりしたあと、パーマーは気まずい顔で隣を見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、この格好、そんなに寒くないんだよ」
        - 嬉しそうに受け取ったわけではない。それでも襟を掴んで、自分の体へ強く引き寄せる
        - 鼻に服の匂いが満ち、顔に赤みが浮かぶ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも……ありがとう、%CALLNAME%」
        - さっきまでの元気はない。すごく平らな声だ
        - %YOU%にしか聞こえない音量で、耳元へ吹きかける
    - if: era.get('love:64') >= 75
      acc: 2
      content: （襲われる……）
      lines:
        - 無自覚に上げた裸の腕が後頭部を抱え、白い腋が見える
        - 短いスカートの下のガーターが高くかかり、普段飾りがない太腿に小さな窪みを作る
        - 濃い青のリボンが髪を横で束ね、高いポニーテールを立て、うなじを見せる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%？ 具合悪いの？」
        - パーマーの声がちょうど入り、思考を現実へ戻す
        - もう変になっていた顔色に、パーマーも気づいている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、いっしょに少し休もう。風邪ひかないで」
        - ほかの人にちょうど聞こえる声で、二人がしばらく席を外す理由を作る
        - 会場を回り、執事の老紳士を回り、全員を回る
        - 誰にも見つからない場所で、パーマーは振り返って%YOU%を見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%ってば……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ほんと、手がかかるね」
        - 掌がそっとズボンの上に乗り、優しく圧をかけてくる
        - 熱が上がってから、パーマーはゆっくりファスナーを下ろす
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「声、出さないでよ」
        - 優しい声が%YOU%の頭に残り、すぐ下半身をパーマーに弄ばれる快感が来る
        - 指は踊るように敏感なところを往復し、挑むたびに冬の夜の体が震える
        - 本能のまま、%YOU%の両手がパーマーの肩を掴み、体を寄せる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「出していいよ」
        - 見えない分、秘部の感触はさらに鋭い
        - 指先の摩擦がだんだん力を増し、絶頂の快感を誘う
        - acc: 1
          content: 「パーマー、俺……！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ……」
        - 熱い流れが出たあと、パーマーは自分の手を見て、少し黙る
        - ハンカチを出して手を拭き、それから死角を出る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、戻らないと、みんな疑うよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ほら、戻ろ」
        - 着替えた%YOU%へ、パーマーは手をまっすぐ伸ばす
        - acc: 1
          content: 「パーマーの手を取る」
        - acc: 2
          content: 「パーマーの手を引く」
          # 馬跳び

party_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「もう、絶対疑われるよ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「はいはい、大丈夫だよ」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「まあ、%SELF_CALL%は全然気にしないし」
  - 少し落ちている%YOU%に対して、パーマーは明るい
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「気になるなら、いっしょに遊びに出て、埋め合わせとかどう？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「冗談だよ。いつでも戻れるからね！」
  - パーマーの笑顔はいつものまま、温かさを連れてくる

#シニア級宝塚記念優勝、有馬記念連覇後。育成後（4年目）1月4週
winner:
  title: 顎、上がりすぎ！
  lines:
    - 珍しい休みの時間、%YOU%は思考を放した拍子に、自然とパーマーのことを思う
    - なぜか、勝ちの記憶が次々浮かぶ
    - そうだ。メジロパーマーは、祭典型のレースがすごく得意だ
    - 「有馬記念」と「宝塚記念」を続けて勝ち、さらに「有馬記念」をもう一度……
    - 考えが空へ飛びそうになったところで、パーマーの声が%YOU%の思考を切る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やばいやばいやばい……あたし、グランプリ三連覇してるよ！」
    - acc: 1
      content: 「うん、そうだ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あはは、自分でも超すごいって思う！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「快挙だよ。でもファン投票のレースでこれをやるの、すごくあたしらしいね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんなでワイワイ出る祭典レース、いちばんあたし向きかも！」
    - acc: 1
      content: 「祭りと言えば、祝賀の式典もあるぞ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え、三連覇の？ そっか、それも楽しそう！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもレースではもう大ハイしたし、式典はおとなしく、普通に出よ」
    - divider: true
      content: 祝賀式典
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - 「ふむ～、悪いところがあるわけではないが、壇への立ち居が……」
    - 生徒会長は微妙に首を傾け、リハーサルを見ている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「会長？ トロフィーの受け取り方、すごく変だった？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日はギャルっぽくしてないよ。変なところ、ないはず……」
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - 「変、ではない」
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - 「むしろ本来のお前は、態度が謙りすぎている」
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - 「もっと胸を張り、頭を上げていい。気を遣わなくていい」
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - 「前回グランプリ三連覇を成し遂げた%UMA%は、私が敬愛するあの%UMA%だ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「胸を張れ……って言われても～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、いつもの控えめな感じ、小さいころからのクセだよね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん～、どうしよ」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「一言、いいですか」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「威厳が足りない原因は、頭部の傾斜角だと思います」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「頭の角度を上げてみませんか。そうですね……2.85度ほど」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「頭の位置か……そっか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたし、つい『こんにちはこんにちは～』って出ちゃうから、威厳がなく見えるんだよね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おっけー、ブルボン！ わかった！ 頭、上げてみるよ！」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「お願いします。自信のある立ち居を保てるなら、私も嬉しいです」
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - 「パーマーの功績は、逃げの%UMA%たちが見る夢ですから」
    - みんなで寄って相談したあと、祝賀式典は無事に終わる
    - ただ、そのあと——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おおおおおっ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ、トレーナー！ 今の歩調、すごくなかった？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「超楽に走れたよ。タイム、どう？」
    - acc: 1
      content: 「はっきり伸びてる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんでだろう……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ただトレーニングを重ねた成果？ それとも……」
    - acc: 1
      content: 「もしかして……顎を上げたせいか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「顎……あ、式典のときだ」
    - パーマーの顔がぱっと明るくなる
    - 頭を上げた姿勢が、内側まで立て直したのかもしれない
    - つまりそうしてから、パーマーの体に、グランプリ三連覇の%UMA%としての誇りが乗った
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そっか……気持ちが変わると走りも変わる。だから顎、上げるんだ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よーし、顎を上げて胸を張って、四連覇、五連覇いくよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっほー！」
    - 溢れ出た気持ちと熱が、パーマーの体から走り出す
    - グランプリ三連覇の誇りを胸に刻み、パーマーはこれからも新しい祭典へ挑む

#称号条件達成後、2月1週
sports_car:
  title: 驚愕！ スポーツカーが贈り物！
  lines:
    - 穏やかな日、事務室にいた%YOU%へ、突然%MINORU%から知らせが来る
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「本来ならパーマーさんへ直接お伝えするところですが、今日は%SEX%、お休みなんです」
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「学園で預かっておける物でもありませんし」
    - acc: 1
      content: 「そんなに大事なものか？」
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「詳しくは理事長からご説明します」
    - divider: true
      content: 理事長室
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - 「表 彰！ メジロパーマーさんを導いた働き、実に鮮やか！」
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - 「奨 励！ トゥインクル・シリーズのスポンサーから、大物が届いたぞ！」
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - 「トレーナーとしての責務を果たし、この贈り物をメジロパーマーへ届けるのだ！」
    - acc: 1
      content: 「ええっ！？ その贈り物って……」
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「あの、とりあえず駐車場へ行きましょう」
    - 緑の管理人さんが真新しい車の鍵を%YOU%へ渡し、駐車場のほうを指す
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「すぐ見つかるはずです。あとはお任せします」
    - 言い終えると、駿川さんは仕事へ戻っていく
    - 頭が真っ白な%YOU%は、手の鍵を持ったまま駐車場へ入る
    - 目の前は光を跳ね返す新車だ。かなり大げさな贈り物と言っていい
    - acc: 1
      content: 「大げさな贈り物だな……」
    - 目の前の新車はたしかに大げさな贈り物だ。だが大きな問題がある
    - パーマーは、運転できないはずだ
    - ではこの贈り物を、どう渡せばいい……
    - if: era.get('love:64') >= 50
      acc: 1
      content: 「パーマーに電話するか……」
      lines:
        - パーマーの電話はすぐつながり、会う約束もすぐ取れる
        - divider: true
          content: 街
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、やばい、これ絶対遅れる……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん……おかしいな、見つからない」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もしかしてトレーナーも遅れてる？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いや、それはないはず。途中で何かあったんだよね……」
        - パーマーは街を小走りし、左右に%YOU%の姿を探す
        - 焦って探しているとき、後ろからクラクションが鳴る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わっ、あ、ごめんごめん！ 今どく……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「待って……あれ？ トレーナー？」
        - acc: 1
          content: 「よっ、パーマー、乗れ」
        - スポーツカーに座る%YOU%が、ぼんやりしているパーマーへ声をかけ、%SEX%のそばで停める
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「かっこいい車……あ、違う、なんでトレーナーが？」
        - acc: 1
          content: 「シリーズのスポンサーから、あんたへの贈り物だ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あたしへの贈り物！？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これ超すごい！ でもあたし、運転できないよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「免許、まだないんだ。こんな高い贈り物なのに」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そうだ！ トレーナーが運転してよ！」
        - 言い終わる前に、パーマーはもう助手席に座っている
        - 車は街を抜けて海へ向かい、海岸線を落ち着いて走る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、気持ちいい！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もっともっと！ やっほー！」
        - 海風が窓からパーマーに当たり、もともと楽しそうな%SEX%が自然にはしゃぐ
        - 車が人気のない砂浜でゆっくり止まって、やっと収まりきらなかった笑い声が止まる
        - 波が砂を叩き、心地よいさらさら音を立てる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふー、けっこう遠くまで来たね～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「目的なしのドライブも、悪くないね」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「たまに日常から爆逃げして、好きなように楽しむのも大事だよ」
        - acc: 1
          content: 「パーマーは、そういう子だもんな」
        - %YOU%の肯定を聞いて、パーマーは少しこらえきれず、小さく笑う
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あはは、たしかに！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちっぽけな自分から、誰かが決めた道から逃げる」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「逃げて、逃げて、ずっと逃げて……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……それでトレーナーに導かれて、自信を持ってここまで来た！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だから——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん～、この風、最高～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もう、何にも怖くないよ！」
        - パーマーの明るい顔に解放感があり、両手を大きく開いて伸びをする
        - ただ笑顔に少し気まずい色があり、眉が小さく寄る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「まあ、トレーナーに会う前はずっとスタートラインで迷ってたから、スタートは遅れたけど」
        - acc: 1
          content: 「でも、自分の脚で追いついた」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん、一周遅れの青春だね～。でもね——」
        - 寄っていた眉を解き、自然な顔で%YOU%を見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「取り返せないものなんて、ないよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今は手元になくても、いつか絶対手に入れる！」
        - acc: 1
          content: 「これもだな。しかも記念車だ」
        - 笑っている%YOU%が、二人を乗せて来た車を指し、さらっと言う
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「スポンサーの贈り物か……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なんて言うか、まだちょっと現実じゃない感じだよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ねえ、トレーナー」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「この車、あたしの好きなように使っていいんだよね？ 何に使うつもりでも？」
        - acc: 1
          content: 「もちろん」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それは、ちょ、ちょ、ちょ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「超いい！ 最高だよ！！！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これならいつでも、どこでも走れる」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「思い切りドライブしよう、%YOURNAME%！」
        - acc: 1
          content: 「俺たち？ 俺も入るのか？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん！ だってあたし一人の力で得たものじゃないし、いっしょに分けたい」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、そうだ、もうひとつ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「よかったら、この車に名前、つけない？」
        - acc: 1
          content: 「名前？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん！ ずっと乗るつもりだから、聞き飽きたくない、大事にできる名前がいいんだ」
        - パーマーの車に名前をつける。%SEX%の功績に合い、大事にできる名前……
        - %YOU%の思考のなかで、答えはもう一つしかない
        - acc: 1
          content: 「パーマー！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え？ あたし、ここにいるよ……」
        - acc: 1
          content: 「パーマー号だ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ええっ！？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あたしの名前！？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……その名前にしたら、ずっと大事にしてくれる？」
        - acc: 1
          content: 「ああ。あんたの功績の記念にもなる」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あはは、そういうこと？ じゃあそれで。簡単な名前も、いいね」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん、パーマー号！ やっぱりあたし、取れないものなんてないね！」
        - パーマーの笑顔は快晴みたいで、満足そうに頷く
        - acc: 1
          content: 「もともと車が欲しかったのか？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「車……そうだね、かも」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でもね、欲しいものは他にもたくさんあるよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「行こう、ドライブ続行！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、早く！」
        - メジロパーマーは遅れた。でも瞬きのあいだにいちばん前へ飛び出し、%YOU%の手を引いて走る——
        - 車が始動の音を出し、また走り出す
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もっと、もっと速く、トレーナー！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「限界まで速く！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふふ～！ 自由、最高！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「走れ、走れ、パーマー号！」
        - 加速し続けるパーマー号。かつては無名で、遅れた逃亡者だった。でも今は
        - %SEX%は、誰より速い
        - %SEX%は王道から外れた先駆けで、目白家でもいちばん自由な軌跡を描く
    - acc: 2
      content: 「執事に電話するか……」
      lines:
        - 少し考えて、%YOU%は執事さんへ電話するほうを選ぶ
        - この贈り物は、パーマーには少し重すぎる
        - acc: 1
          content: 「執事さんに任せよう……」
        - 駆けつけてきた執事へ鍵を渡し、%YOU%の硬い肩が一気に落ちる

rain_notify:
  - color: %COLOR%
    content: 【一人外出の雨の日、思いがけない出会いがあるかも】

################################
# トリガーイベント
################################

# メイクデビュー後、任意G1出走後、一人で商店街外出時
# リマインド：一人外出の雨の日、思いがけない出会いがあるかも
rain:
  title: 大雨に濡れても
  lines:
    - ある日、外出中の%YOU%は突然の大雨に行程を止められる
    - 雨でモールに閉じ込められたなら、ついでに中を歩く
    - そして雨が上がったとき——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はっ、はっ、はっ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あれ、トレーナーじゃん！」
    - 突然、勝負服のままびしょ濡れのパーマーが走ってくる
    - acc: 1
      content: 「パーマー、その格好は……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、服のこと？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大丈夫大丈夫、走れば乾くよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……あ、これじゃ説明になってないよね。えっと——」
    - パーマーの顔に苦笑が浮かび、事の前後をゆっくり話す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——で、目白家みんな宴会に呼び出されて～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そしたらあの人たちが、帰りは車も用意してある、とか言って——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう我慢できなくて、ごめんって言って、逃げた！」
    - 逃げる発想が%SEX%らしくて、思わず笑ってしまう
    - でも勝負服は気になる。もう全部濡れている
    - インナーがパーマーの体に張りつき、濡れた部分が%YOU%の視線を離さない
    - 下着の部分だけ、胸に張った布が少し隠してくれたので、視線を引っ込める
    - acc: 1
      content: 「……勝負服、大丈夫なのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、そう思うよね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも大丈夫。仕立てるとき、そうするつもりだったんだ」
    - acc: 1
      content: 「そうするつもり？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんて言えばいいかな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このデザイン、普段着とあんまり変わらないでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「気取った感じがなくて、走りやすいし、逃げやすい」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いちばん大事なのは、一人で走りたくなったら、すぐ走れること！！」
    - パーマーのその言葉を聞いて、%YOU%は視線を体から外し、少し呆ける
    - パーマーの言う「一人」に、胸へ少し異物感が浮かぶ
    - 普段のパーマーは、いつも誰かといっしょのはずだ
    - acc: 1
      content: 「一人？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「みんなといっしょはもちろん好き。でも——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「レースのとき、いちばん前を走れるのは一人だけでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だからたまに、何も考えずに走りたくなる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「地平線へ向かって、一人で自由に、ただ走り続ける！」
    - パーマーの目は遠いほうを見る。そこには不自由も枷もないはずだ
    - ただパーマーの目に、新しい雨粒が映る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うわ、また降り出した……」
    - acc: 1
      content: 「早く戻ろう！」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そうだね、走れば、そんなに濡れないでしょ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「じゃあ急いで——」
        - acc: 1
          content: 「待って」
        - パーマーは足を止め、不思議そうに振り返る
        - %YOU%はさっき買った傘を開き、%SEX%の頭の上へ差す
        - 一本しかないから、少し狭いだろう
        - acc: 1
          content: 「風邪はひいてほしくない」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おお、トレーナー頼もしい！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いいな。次はあたしも誰かにこうする」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーみたいに、さっと傘を差す！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でもさあ～、あたしにそこまでうまくできるかはわからないけど、はは」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナーって、やっぱり大人で頼れる人だね……」
    - acc: 2
      content: 「どこかで雨宿りして、何か飲むか？」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いいね！ 賛成！」
        - 大雨から退いて、カフェを一軒見つける
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はい、ホットコーヒーでしょ」
        - パーマーは手のカップを%YOU%の前へ出し、自分は向かいへゆっくり座る
        - acc: 1
          content: 「ありがとう」
        - カフェの中なのに、パーマーの様子はとても自然だ
        - 勝負服が特別に見えない。店の空気に完全に混ざっている
        - %YOU%の視線に気づいたのか、パーマーはカップを置いて少し不思議そうに見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん、どうしたの？」
        - acc: 1
          content: 「この勝負服、やっぱりいいな」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「えっ、どうしたの、そんな真面目に！？」
        - acc: 1
          content: 「いや、急にそう思っただけだ」
        - パーマーの目に少し驚きが乗り、すぐしまい、慌てて視線を外す
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もう……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そんなこと言ってるあいだに、コーヒー冷めるよ～。ほら、早く飲んで」

important_place_notify:
  - color: %COLOR%
    content: 【%CHARA%は前にここで自由レースに出た……もう一度連れてきてみるか】

#（自由レース、行く？）発動後、クラシック級商店街
important_place:
  title: 大事な場所だから
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やっほー～、今日もみんな元気だね！」
    - 自由レースの%UMA%「お、パーマーじゃん？」
    - 自由レースの%UMA%「あー、聞いてよ～」
    - パーマーといっしょに外出した%YOU%は、途中で暇になり、ついでに自由レースの場へ寄る
    - パーマーの友人らしい%UMA%が走ってきて、%YOU%は二人の話のあいだから自然に退く
    - パーマーが話し終えて、%YOU%といっしょに帰ろうとしたとき
    - トレセンの%UMA%A「うわ、本当に道の上にコースあるんだ」
    - トレセンの%UMA%A「ちょっと凸凹してない？ こんなとこで走れるの？」
    - トレセンの%UMA%B「無理、あたしには無理。脚、痛めるでしょ～」
    - 自由レースの%UMA%「……あんたたち、何しに来たの」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……あー、ごめんトレーナー！ ちょっと戻っていい？」
    - acc: 1
      content: 「ああ、もちろん」
    - 許可をもらったパーマーは小走りでさっきの%UMA%のそばへ戻り、自然に話へ入る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ハーイ、トレセンの生徒だよね？ 初めて？」
    - トレセンの%UMA%A「……急に来て何？」
    - トレセンの%UMA%A「てか目白家の人でしょ？ こんな端役といっしょだと弱くなるよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「端役……%THEY%が自由レースを走ってるから弱い、って思うのは違うよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「実際あたしは、ここで走ったから強くなったんだよ」
    - トレセンの%UMA%A「いやいや、普通に学園でトレーニングしたほうがいいでしょ！」
    - トレセンの%UMA%B「それにアマチュアと走っても、トレーニングにならないし！」
    - 自由レースの%UMA%「おい、あんたたち——！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——よし、そこまで言ったなら、走ろ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうすれば上下、わかるでしょ？」
    - パーマーは会話の隙間にレースの話を差し込み、双方の口論を止める
    - 二人の%UMA%はここまで言われて、むくれながら対決を受ける
    - 自然と、審判の役は%YOU%へ回る
    - acc: 1
      content: 「じゃあ……スタート！」
    - スタートと同時に、パーマーは迷わずいちばん前で逃げ続ける
    - だが二人はトレセン学園の生徒だけあり、速いペースにも臆せずついてくる
    - レースの空気がどんどん熱くなり、パーマーは全力で先頭を取る——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はああああああ——！」
    - 自由レースの%UMA%「——よし！ パーマー、最高！！」
    - トレセンの%UMA%A「はっ、はっ、あの逃げの走りなんなの、無茶苦茶……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ははは、この走り、学園じゃあんまり教えてくれないでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもこれが、ここで教わった走りだよ」
    - 勝負がついたあと、パーマーは周囲の長く止まらない拍手と歓声を受ける
    - トレセンから来た二人の%UMA%は眼前の光景を見て、気まずそうに去る
    - やっと賑やかな歓声から抜け出して、二人は夕方の川辺を歩く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、ごめんごめん！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「巻き込みちゃったね」
    - acc: 1
      key: select
      content: 「逃げにも、いろいろあるな」（スピード+10）
      lines:
        - 友人を守るために全力で走った姿がかっこよかった、と%YOU%は%SEX%に伝える
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「え、さっきの？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いやいや、あたしそんな偉くないよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「せっかく自由に走れる場所なのに、けんかに使うのはもったいないって思っただけ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それにね、あたしは先頭を走っただけだよ！」
        - パーマーの顔は羞恥の笑顔でいっぱいなのに、いつものどれより誇らしげだ
    - acc: 2
      content: 「友達思いだな」（賢さ+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あはは、なんか恥ずかしい」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でもそうだね。%THEY%がいたから、今のあたしがある」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「どこで伸びて、どこで収穫があるか——」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それを誰にも否定されたくない！」
        - そのあとパーマーは%YOU%に、%SEX%の友人たちの話をたくさんした

golf_notify:
  - color: %COLOR%
    content: 【最近%CHARA%は、トレーニングのあと商店街へ急いでいる】

#恋慕＞49、シニア級クリスマス 商店街
golf:
  title: 遠回りのホールインワン
  lines:
    - ごく普通の午後、トレーニングが終わったあと、パーマーが自分から%YOU%を探す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日もお疲れさま！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「じゃああたし、用事あるから先帰るね、トレーナー！」
    - acc: 1
      content: 「いいけど、そんな急がなくてもいいだろ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、ちょっと用事」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「このところ、しばらくこうなるかも。ごめん！」
    - パーマーのその一言から数日、%SEX%は毎回早くトレーニング場を出る
    - ある日、%YOU%が街へ出ると、いつもの通りにクリスマスの飾りが並び、どこも賑やかだ
    - ぶらぶら歩いていた%YOU%はスポーツ用品店の前で足を止め、ショーケースの商品を見る
    - acc: 1
      content: 「ゴルフグローブ……」
    - ショーケースのグローブを見て、思考が自然にこのあいだの会話へ飛ぶ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え、冬ゴルフしたことないの？」
    - acc: 1
      content: 「寒いからな」
    - acc: 2
      content: 「手が凍るだろ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もったいない！ 冬は人が少なくて、ゆっくりできるし、超楽だよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今度いっしょに行かない？」
    - 前にトレーニング室で雑談したとき、たしかにそんな話をした
    - ちょうどクリスマスが近い。贈り物にして、パーマーの誘いへの礼にもなる
    - いつ渡せばいいかは、わからないが……
    - acc: 1
      content: 「とりあえず、買っておこう」
      lines:
        - 渡す予定の贈り物を持って、%YOU%は商店街を出る
        - divider: true
          content: 翌日のトレーニング場
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふー、走り足りた！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「指導ありがとう、トレーナー！」
        - acc: 1
          content: 「今日はここまでだ。またな。気をつけて帰れよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、待ってトレーナー！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、あとで時間ある？」
        - パーマーの突然の一言が、%YOU%の帰る足を止める
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「実は今、遊園地で短期バイトしてて、そこのイベントがけっこう面白いんだ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ライトアップもきれいだし、お店の飾りもかわいい！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……どう思う？」
        - acc: 1
          content: 「嫌じゃなければ、もちろん行く」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うんうん！ もちろん嫌じゃない！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「案内はあたしに任せて！」
        - パーマーは少し興奮して冬服に着替え、それから%YOU%を連れて遊園地へ向かう
        - divider: true
          content: 遊園地
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「このスパイスドリンク、どう？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ノンアルだから、大人も子どもも好きなんだよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「シナモンの味、嫌いな人もいるけどね」
        - acc: 1
          content: 「おいしい。体の芯まで温まる！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あたしも好き。ふふ……気が合うね～」
        - そう言いながらパーマーはすぐ周囲の景色に気を取られ、%YOU%を連れて通りを歩き出す
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー！ このポーズでいっしょに撮ろ！」
        - acc: 1
          content: 「こ、こうか？ 間違ってないよな？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「正解！ ほら、あっちのスマホ見て～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「3、2、1……はい！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「んふ～、写真の出来、見せて……あ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「バイトの時間だ！ トレーナー、案内はここまで。バイト先、見に来てね！」
        - パーマーは携帯をしまい、角のレストランへ走っていく
        - 店内のクリスマスソングのなか、ホールの人たちが軽い足取りで客へ料理を運ぶ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「お待たせ～、ターキーと冬のホリデードリンクです」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「店長にトレーナーだって言ったら、%SEX%がちょっと多めにしてくれた……言わないでね？」
        - acc: 1
          content: 「言わない。店長にもよろしく伝えてくれ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はは、伝えておくね～。では、どうぞ」
        - %YOU%が食事を楽しんで、少し休もうとしたとき
        - 様子を見ていたらしいパーマーが、タイミングを見て来る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……トレーナー、今休憩もらえた。ちょっと話せる？」
        - acc: 1
          content: 「？」
        - パーマーについて外へ出てから、%SEX%は懐から小さな箱を出し、%YOU%の手へ渡す
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トナカイのパーマーからの贈り物だよ～。開けてみて」
        - 受け取って開けると、中は有名ゴルフブランドのグローブだった
        - acc: 1
          content: 「これは……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「前に、いっしょにゴルフ行こうって言ったの、覚えてる？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「手が凍らない、冬用のグローブだよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……メリークリスマス」
        - パーマーが渡した贈り物の下で、全部がつながる
        - トレーニングのあと急いで帰り、ずっと忙しかった理由は——
        - acc: 1
          content: 「用事って、バイトか」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちょっと、言い切ると興ざめだよ？」
        - 誇らしげなパーマーを見て、%YOU%は口を閉じ、自分の鞄の中を探る
        - いつ渡すかわからなかった贈り物が、ここに眠っている
        - acc: 1
          content: 「実は、こっちも用意してて……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「袋？ え、これって……」
        - パーマーは渡された袋を受け取り、中のグローブを見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「グローブじゃん……！」
        - acc: 1
          content: 「ゴルフに行きたそうだったから」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「つまり？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はは、考えてること、同じだった」
        - acc: 1
          content: 「お互いにサプライズだな」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そう！ お互いグローブ用意したなら、行かないわけないよね～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「このトナカイが案内するよ～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「こんなきれいな贈り物をくれたサンタさんを、目的地まで～」
        - acc: 1
          content: 「じゃあ、頼む」
        - divider: true
        - random: true
          lines:
            - divider: true
              content: 後日
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「おや、この天気、超いい！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「始めよっか、トレーナー！」
            - 寒くても、パーマーと%YOU%の手は凍らない
            - この日、二人は思い切りゴルフを楽しんだ
        - random: true
          lines:
            - 店員A「よかったね、パーマーちゃん！」
            - 店員A「あんなに頑張った甲斐あったね～」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「わっ！ 待って、なんでついてきたの！？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「そういう話、しなくていいから！」
            - この贈り物を渡すために、パーマーは自分のやり方で、かなり努力したのだろう
            - そう思った%YOU%は、このグローブを大事にすると決める
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「よし！ じゃあそれで決まり！ あ、そうだ」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「グローブはめて、記念に撮らない？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナーもはめてね。それから前のポーズ……完璧！」
            - しばらくして、パーマーから写真が届く
            - %YOU%とパーマーの手が一本ずつ写っている。見るたびに、胸が温かい
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「えへへ、じゃあ約束ね」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「そうだ、早速グローブはめてみる！」
            - acc: 1
              content: 「俺もはめる」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「お、サイズぴったり！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……あたしたち、本当に気が合うかも？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「サンタとトナカイよりすごい！」
        - random: true
          lines:
            - 店員A「お疲れさま、パーマーちゃん！」
            - 店員A「あ、うまくいったみたい？ おめでとう！」
            - 店員B「そのためにお店でバイトしてたんだもんね！」
            - 店員B「いやー、頑張った甲斐あったね～」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あはは……内緒にしてね」
            - acc: 1
              content: 「本当に、ありがとう」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……そ、うん……どういたしまして」
    - acc: 2
      content: 「そのうち、だな……」

lottery_notify:
  - color: %COLOR%
    content: 【%CHARA%といっしょに抽選しよう！】

# 恋慕＞49、シニア級1月 商店街抽選
lottery:
  title: 抽選会！
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そういえばさっき遊んだとき抽選券もらったんだ。やってみない？」
    - 目を輝かせているパーマーを見て、%YOU%も楽しそうな顔になり、抽選の店を探す
    - if: d.dice === 1
      lines:
        - 2等：にんじん一本……
        - 屋台の店主「おめでとう！ 賞品は にんじん一本 だよ！」
        - 手の一本のにんじんを見て、少し息を吐く
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「にんじん一本でもいいよ。帰って焼きにんじんとか、悪くない」
        - パーマーは手のにんじんを持ったまま、相変わらず楽しそうだ
        # 体力+200
    - if: d.dice === 2
      lines:
        - 1等：にんじん一籠
        - 屋台の店主「おめでとう！ 賞品は にんじん一籠 だよ！」
        - かなり大きい籠だ。料理、たくさん作れそうだ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おお、にんじんいっぱい！ これならみんなに分けられる！」
        - パーマーは籠ごと抱き上げ、自然な笑顔を向ける
        # 能力+5
    - if: d.dice === 3
      lines:
        - 特等：にんじんハンバーグ！
        - 屋台の店主「おめでとう！ 特等のにんじんハンバーグだ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「にんじんハンバーグ！ これ1等だよ！ 超いい！」
        - 目の前のにんじんハンバーグを見て、パーマーの目がきらきらしている
        - 最初は驚きでいっぱいだった目がすぐ沈み、振り返って%YOU%を見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、いっしょに食べる？」
        - パーマーはうつむいて顔をそっと掻き、下がった前髪の隙間からこちらを見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、トレーナーが引いたんだし、だから……」
        # 全能力+10
        - acc: 1
          content: 「いいよ、いっしょに帰ろう！」（好感+20）
          lines:
            - 返事を予想していたのか、パーマーは笑って%YOU%の手を引き、%YOU%の家へ走り出す
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「早く早く、お腹空いたよ、早く帰ろ！」
            - パーマーの声に甘えが混ざる。今はそれがすごく可愛い
            - もちろん可愛い部分には、小走りのとき胸が跳ねる部分も入る……
        - acc: 2
          content: 「パーマーが食べな。あんたの抽選券だろ」（恋慕+4）
          lines:
            - 返事を聞いたとき、パーマーの顔が少し引きつる。この答えは予想外だったらしい
            - 興奮して跳ねていた耳も伏せ、表情まで暗くなる。
            - そう落としているパーマーを見て、言いかけた言葉も引っ込める
            - acc: 1
              content: 「そういえば、ちょっと腹減った……」
            - さっき伏せた耳が急に立ち、続きを待ちそうな顔になる
            - 可愛いパーマーを見て、%YOU%は頭を掻き、本当にお腹が空いたふりをする
            - 空いたふりをしていると、パーマーに裾を摘ままれる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あたしのところ、おいしいハンバーグあるよ。いっしょに食べる？」
    - if: d.dice === 4
      lines:
        - 特等：温泉旅行券
        - 屋台の店主「おっと！ これは！」
        - 屋台の店主「温泉旅行券だ！ おめでとう！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「お、温泉旅行券！ トレーナー見て！」
        - パーマーは興奮して手の旅行券を見、振り返って%YOU%を見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「本当に当たった……ちょっと現実じゃない……」
        - 手の賞品を見て、二人ともその場でしばらく興奮して立ち尽くす。周囲に一声注意されて、やっと動く
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「どうしよ、二人分の温泉旅行券……あ、トレーナー、いっしょに行く？」
        - パーマーの声は少しふわふわして、真面目に聞いているようには聞こえない
        - でも%SEX%を見ると、青い目に少し期待が乗っている
        - こんなパーマーを、少しからかいたくなる。本当に可愛いから

hot_spring_notify:
  - color: %COLOR%
    content: 【%CHARA%といっしょに温泉へ行こう！】

# 抽選した年の12月
# 券あり or 恋慕90
hot_spring:
  title: 温泉旅行
  lines:
    - パーマーといっしょに勝ったあとの、ある日——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （そろそろ～、タイミングだよね？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （あ、でも%YOURSEX%が気分じゃないって言ったらどうしよ……）
    # CFLAGNAME:52 = 育成用変数
    - if: era.get('cflag:64:52')?.hot_spring !== 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （せっかく一人分多く温泉旅行券、用意したのに……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （よし……とにかく勢いが大事！ 一気に誘ってみる！）
    - どこから来たかわからない勢いで、パーマーは事務室の扉を一気に押す
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー！ 温泉タイムだよ～ふふ～！」
    - acc: 1
      content: 「急にどうした……何かあったのか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ないよ。前に温泉券、当たったでしょ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほら……今が使うときでしょ！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自分へのご褒美、大事だよ～。ローカル線に乗って、温泉街へ行こ～ふふ～」
    - パーマーは拳を胸の前で握り、きっぱり言う
    - acc: 1
      key: select
      content: 「うん、行こう」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「本当？ おっけー？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （あは～、よかった……）
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （無視されて一人で行け、とか言われなくてよかった）
        - パーマーは息を吐き、少し嬉しそうに%YOU%の肩を摘まむ
        - %YOU%の少し不思議な視線のなか、パーマーは温泉宿までの道を調べる
        - divider: true
          content: 温泉宿
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あー、やっぱり温泉、最高！」
        - もう温泉を楽しんだあと、パーマーは部屋で力を抜き、上半身をふわふわ左右に揺らす
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「レースだとけっこうぶつかるから、温泉の効き、かなりいいよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日まで頑張れて、よかった～」
        - そう言いながらパーマーはまた小さく伸びをし、長く息を吐く
        - acc: 1
          content: 「本当にお疲れさま」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん、トレーナーもね」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ずっとそばで教えてくれて、疲れたでしょ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「今日は二人とも、ほかのこと考えないで、のんびり休もう～」
        - ヘリオス%THEY%といっしょのギャル風パーマーもいい。でも元の%SEX%も、すごくいい話し相手だ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、そうだ。さっき温泉で濡れたタオル、干しといた。乾いたら使って」
        - acc: 1
          content: 「うん、ありがとう」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、そうだ！ トレーナー、お茶飲む？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「先に淹れて、少し冷ますね」
        - acc: 1
          content: 「うん、頼む」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん、任せて」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - acc: 1
          content: 「……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「この会話の感じ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「家にいるみたい……！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「温泉旅行なのに、家みたい！？」
        - 家にいるみたいに、取り繕わなくていい。力を抜いて、すごく心地いい……
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ああ～やだ～、このまま静かにしてたら、完全にその空気に溶けるよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「旅行っぽくないじゃん！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん、バカンス感が足りない！」
        - パーマーは力を入れて上体を起こし、急に真面目になる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もっと、もっとハイらないと～」
        - %YOU%の目には、パーマーが必要のないやる気を出しただけに見える
        - そのあと、空気はすぐ微妙になる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー、夕飯……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、違う、和のディナーだよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おお、見て見て、この刺身！ すごく刺身してる～」
        - acc: 1
          content: 「刺身だからな」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「それから～、鍋の味、超いい～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「コラボ企画、ご飯とうどん、いっしょに入れない～」
        - acc: 1
          content: 「あ、いいよ、締めのときに……」
        - 和の宿がパーマーの頑張りでパーティー会場になり、それから——
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、トレーナー！ あそこにマッサージチェアあるよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「見てて超ハイ～！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「強さ最大にして、乗ってみない～」
        - acc: 1
          content: 「先、どうぞ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「よーし、じゃあ乗ってみる！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「こういうの、パーティー魂がある人は先に楽しむのが筋でしょ！」
        - パーマーは軽い足取りでマッサージチェアへ走り、軽く姿勢を整える
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「一回じゃ足りない。替えた小銭、全部入れる！」
        - 大量の硬貨がパネルへ落ち、機械の動く音がする
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「次は……爆強マッサージ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「スタート！！」
        - パーマーの声が落ちると同時に、マッサージチェアが大きな稼働音を出す
        - 大きな振動のなか、パーマーの顔もすぐ歪む
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「痛い、トレーナー、これやばい！！」
        - マッサージチェアの音は続き、パーマーも妙な声を出す
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あっ！ 死ぬ！ 死ぬよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「逃げる……爆逃げするあああ！！」
        - パーマーの声は気合十分だが、運はあまりよくないらしい
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わあああ、服のリボン！ 椅子に絡まった！！ 終わった！！」
        - 一瞬の静けさのあと、また大騒ぎになる
        - そうして、夜がだんだん深くなる
        - やっとマッサージチェアの魔の手から逃れたパーマーは、ふにゃふにゃ%YOU%に凭れる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やばい、ちょっと遊びすぎたかも、はは……」
        - パーマーの笑顔は少し無理がある。部屋へ戻っても、力が出ない様子だ
    - if: era.get('cflag:65:66') === 1 && era.get('relation:65:0') >= 0
      acc: 2
      content: 「ヘリオスも呼ぶか？」
      lines:
        - 三人で列車に乗り、温泉宿へ向かう
        - ただ温泉の温もりを楽しんだあとは、一人で上がることになる
        - 温泉が気持ち悪いわけではない。隣の騒ぎが、かなりうるさい
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「くすぐるよ～！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「やめてヘリオス！ 沈む！」
        - 隣の騒ぎに、%YOU%も聞こえていないふりをするしかない
        - いつものように先に牛乳を取る。%THEY%もそのうち上がるだろう
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん？ トレーナーも上がった？」
        - %YOU%が牛乳を手に取ったとき、ちょうど後ろからパーマーの声が来る
        - acc: 1
          content: 「先に上がってた。さっき……」
        - 長く耐えた%YOU%はパーマーのほうを見る。出そうになった言葉をしまう
        - 普段はかっこいい一本結びが、今は水滴をつけて肩に落ち、いつもの大らかさを壊している。%YOU%の内側のどこかを強く突く
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「トレーナー？ のぼせた？」
        - パーマーは%YOU%が何を考えているか知らない。いつものように自然に歩いてきて、自然に%YOU%の頭へ手を伸ばす
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん？ そんなに熱くない……え？ なんでだんだん熱いの？」
        - 手の不自然な熱に気づいて、パーマーはぼんやり自分の手を見る。掌の温度が上がっていく
        - 少し呆けた%YOU%がその場に立ち、顔に熱が昇る
        - acc: 1
          content: 「先に服を着ろ。冷えるぞ、早く早く」
        - 慌ててパーマーを押し、振り返って落ち着こうとしたところで、逆に手を掴まれる
        - まだ体調不良だと思っているパーマーは、少し強引に指を握る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だめ、今トレーナー、具合悪いんでしょ？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「いつもはトレーナーが助けてくれるんだから、今度はあたしが看病する！」
        - %YOU%の手を一気に引き戻し、真っ赤な顔を見る
        - 静かな部屋は二人だけなので、空気が余計に気まずい
        - パーマーはそれに気づいておらず、%YOU%を傍らの長椅子へ座らせようとする
        - 事態がおかしくなっていくのを見て、%YOU%の思考が速く回る
        - acc: 1
          content: 「そういえばヘリオスは、%SEX%見えないな」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ヘリオスはまだ浸かってるよ。もう少し遊びたいって……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……違う、トレーナーまた話そらしてる」
        - 話を逸らすのは失敗し、パーマーに自然と体を寄せられ、額を当てて熱を測られる
        - %SEX%がそう頭を下げた拍子に、高くなっているものがちょうど目に入る
        - 二人のあいだに、今は鼓動以外の音がない
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わ、わわ……」
        - acc: 1
          content: 「それは……パーマーが思うようなのじゃない……」
        - 赤がパーマーの顔へ移り、慌てて少し横へ退く
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （トレーナーは……あたしに……違う違う、生理現象だ、トレーナーの意思じゃない、うん、トレーナーは真面目な人、きっとそう）
        - 胸の変な気持ちを押し下げ、隣を見る
        - %YOU%はそこに座り、同じようにパーマーのほうを見ている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの、大丈夫？」
        - あれこれ考えたあと、パーマーは異常がないふりを選ぶ
        - 静かで少し奇妙な空気が、二人のあいだに残る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （何考えてるのパーマー、今が出撃のときでしょ、勇気出して！）
        - どれだけ考えたかはわからない。パーマーは手で自分の顔を軽く叩き、もう一度%YOU%を見る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あの！ トレーナーは……あたしのせい、なの？」
        - 問いのあとに来るのは、%YOU%の無言だ。黙って見ているだけ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - （黙ってるのは肯定。シチーがそう言ってた）
        - 覚悟を決めたパーマーが%YOU%の位置へ寄り、手はまだ不安そうに落ちた髪を払う
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「じゃあトレーナーは……胸のなか、どうなの？」
        - acc: 1
          content: 「それは……好き、だよ」
        - 答えを聞いたパーマーは少し驚喜して顔を上げ、%YOU%のほうを向く
        - 二人の顔は今、とても近い。もう少し前へ行けば、互いの唇を奪う
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「ウェイ！ 温泉、超気持ちいい！」
        - ヘリオスが扉に立ち、咳き込んでいる二人を見る
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - 「え！？ 冷えた？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちがう、ただその……カフェオレ！ むせただけ！」
        - 誤魔化したパーマーは、ダイタクヘリオスが自分の飲み物を取りに行くのを見て、やっと息を吐く
        - 何事もなかったふりをして、ヘリオスに聞こえないのを確かめてから、気まずい顔で%YOU%の耳へ寄る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「聞いたんだけど、ここ混浴の温泉あるらしい」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だからあとで……遅くなってから、いっしょに」
      # 恋慕+6

################################
# ランダムイベント
################################

lunch_break:
  title: 昼休み、逃した
  lines:
    - 食堂に着いた%YOU%は、最初の視線で、なぜか忙しそうなパーマーを見つける
    - 少し好奇心を持って、落ち着いて座り、こっそり見る
    - %UMA%A「パーマー～、聞いて～、お母さんがね～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なになに？ どうしたの？ 全部話して～！」
    - divider: true
      content: しばらくして
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よし、ほかに悩みある人、いないよね？ じゃあ待望のランチタイムだよ～」
    - パーマーは楽しそうに動き、自分の昼ごはんを取りに行こうとする
    - 授業の鐘が、ちょうどそのとき鳴る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「え？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「待って、昼休み短すぎない！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしのランチ——！」
      # やる気down、体力-50

#クラシック級以降、外出時ランダム
dis_talent:
  title: 距離感の天才
  lines:
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……こっちだろ」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「違う、そうじゃないし」
    - パーマーと%YOU%は外出の帰りにショッピングモールへ寄り、珍しいこの組み合わせが悩んでいるところに出くわす
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ハーイ、何してるの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ギフトコーナー……誰かへの贈り物？」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「わっ！ な、なんで急に寄ってくるの」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「悩んでる顔してたから～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こう見えて今の流行、詳しいんだよ。手伝えるかも！」
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……頼む。もう考えるの疲れた」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なるほど、ハヤヒデさんが自己ベストを更新したから、%SEX%に贈り物したい」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そしたら考えが同じ二人、ちょうどここで会った！」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「……贈り物が被ったら困るし、いっしょに買ったほうがいいと思って」
    - acc: 1
      content: 「意見が割れて、決められない、と」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うん、じゃあ先に、各自いいと思う贈り物、見に行こっか？」
    - パーマーは二人の肩を元気よく叩き、モールを歩き出す
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……%SEX%はバナナが好きだ。贈るならバナナだ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、好きなものを贈るのはいいね！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしはいいと思うよ。どこがだめなの？」
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……今は向かない、らしい」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん～、今は向かない、って……体重のこと？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「自己ベスト出せるくらい調子がいいのに、お菓子で体重が増えて調子を落とすのは困る！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そこがタイシンの優しいところだね～」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「ち、違う！」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「ハヤヒデの頑張りを無駄にしたくないだけ！」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「これでわかったでしょ！」
    - ナリタブライアンの問題を解いたあと、一行はナリタタイシンが買いたい贈り物のある店へ向かう
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「あの黒い服、いいと思う……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うんうん！ 大人っぽくて、ハヤヒデに似合いそう！」
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……祝いの品だろ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、祝いなら、もっと明るい色の服のほうがいい？」
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……でも」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも～、代わりがないから、強くは否定できない」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「趣味が違うからだと思ってた……そういうことだったんだ」
    - パーマーは通訳みたいに二人のあいだを行き来し、双方の意見をすり合わせる
    - 店員「ありがとうございます！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、ちゃんと決まってよかった。ハヤヒデも喜ぶよ！」
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - 「うん……ハヤヒデの役には立つけど……」
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - 「……でも普通すぎる」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも大丈夫でしょ？ 二人がちゃんと考えて選んだんだし～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%、このヘアケア、効くっていつも言ってるし、レースの邪魔にもならない！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに……相手を思う気持ちは、贈り物から絶対届くよ！」
    - ナリタブライアンとナリタタイシンが去る後ろ姿を見てから、パーマーは%YOU%といっしょに帰路へ就く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、うまくまとまってよかった！ よかったよかった」
    - acc: 1
      content: 「完璧な仲裁役だったな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あはは、あたしは何もしてないよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%THEY%、最初からハヤヒデを思う気持ちは同じだった」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしは%THEY%の意見を、わかりやすくしただけ！」
    - acc: 1
      key: select
      content: 「それは簡単にはできない」（好感+10）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「えー、お上手だね。%SELF_CALL%、照れるよ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でもトレーナーもすごいよ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あたしが迷わないように、ずっと導いてくれてる！」
        - acc: 1
          content: 「おあいこだな」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そうだね～」
        - そうして%YOU%とパーマーは、楽しそうに話しながら帰路へ就く
    - acc: 2
      content: 「勉強になったよ」（恋慕+2）
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あはは、ちょっとワクワクする。いつもはトレーナーが教えてくれるのに」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも……そこまで言うなら……これからパーマー先生って呼ぶ？」
        - acc: 1
          content: 「はい、パーマー先生～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ごめん、やめ！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あたし、その呼び方に見合う力ないよ。超恥ずかしい」
        - acc: 1
          content: 「そんなことない、パーマー先生」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もう言わないで～」
        - パーマーは頬を膨らませて、%YOU%の冗談を止めようとする
        - 二人のふざけあいのなか、帰路へ就く

#シニア級以降、外出時にランダム
choice:
  title: 究極の選択！
  lines:
    - ごく普通の休日、パーマーと%YOU%が買い物に出たとき——
    - パーマーの携帯が突然鳴る。何かメッセージが来たようだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あれ、ドーベルから？ なにかあったのかな」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふむふむ、見せてもらおっと……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日、テレビ局で収録なんだけど、緊張しすぎてうまく話せそうにない」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おお、ドーベル、今日収録だったんだ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もっと早く頼ってくれればよかったのに。%SEX%、頑張りすぎなんだよ～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめん、トレーナー！ ちょっと行ってくるね！」
    - タイミングが重なったのか、向こうが本当に急なのか
    - パーマーが携帯をしまった直後、また通知音が鳴る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あれ、また？ ドーベル%SEX%、焦ってるのかな……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん？ 違う。今度はブライト？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……電車で寝ちゃって、起きたら知らない駅」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「こんなときに！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー、どうしよ。ブライトを放っとくのも心配だし……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、ドーベルも放っとけないし……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「うわあ、どうしよ……」
    - 普段は人間関係に余裕のあるパーマーが、一転して混乱し、不安そうに左右へ歩く
    - いまは%YOU%が代わりに決めたほうがいいかもしれない
    # どちらを選んでもスピード+15
    # チーム内ならスピード+25、好感+25
    - acc: 1
      key: select
      content: 「ドーベルを助けに行こう」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ドーベル……でもブライトは……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そうだ！ アルダン、今日空いてるはず！」
        - パーマーの顔が急に明るくなり、携帯を開いてメジロアルダンへ電話する
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「——あっ、もしもし？ アルダン？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ブライトの件で、お願いがあるんだけど！」
        - 電話の向こうのアルダンが引き受けたあと、パーマーと%YOU%はメジロドーベルのいるテレビ局へ急ぐ
        - if: era.get('cflag:59:66') !== 1
          lines:
            - しかし——
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「赤信号！ あは……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「こういうときに赤、焦るね～」
            - やっと一つの赤を越えたと思ったら、次の赤に止められる
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ありゃ、また赤？ 今日ついてないなあ……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「えっ、あっちも赤！？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あー……このままじゃ、間に合わないかも？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「しょうがない、ごめんトレーナー！ %UMA%専用の走路行くね！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「付き合ってくれてありがとう！」
            - パーマーは迷わず%UMA%専用の道へ上がり、%YOU%へ申し訳なさそうに手を振って、テレビ局のほうへ走り出す
        - if: era.get('cflag:59:66') === 1
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ふぅ、収録時間には間に合ったみたい」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「さて、ドーベルはどこだろ～」
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - 「パーマー！ ごめん、駆けつけてくれて……でも、ありがとう」
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - 「一人で大丈夫だと思ってたのに、いざ撮影となると、私……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あはは、わかるわかる！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あたしも、すぐ緊張するんだよ～」
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - 「えっ、パーマーも？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「当たり前でしょ！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ちゃんと話せるかとか、変なこと言ってないかとか、心配になるよね」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「でも、最後はなんとかなるもんだよ～」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「取材の人もプロだし、生放送じゃないし～」
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - 「そう、か……うん、そうだね。落ち着けば……」
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - 「ありがとう……できそうな気がしてきた……！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「よかった！ ……うんうん、よかった～」
    - acc: 2
      content: 「ブライトを迎えに行こう」
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ブライト……でもドーベルのほうは……」
        - acc: 1
          content: 「ライアンに頼めるだろ」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あっ、そうだ！ あはは、忘れてた！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ライアンはドーベルとも仲いいし、それ、いいかも」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うん、ライアンの電話は……」
        - メジロドーベルの件を片付けたあと、パーマーと%YOU%はメジロブライトのいる駅へ急ぐ！
        - if: era.get('cflag:74:66') !== 1
          lines:
            - しかし——
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「次の次で乗り換えるんだったよね。ちょっと休もう」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あれ？ あっち人すごくない？ なにかあった？」
            - 構内放送「——お客様にお知らせします。ただいま車内事故のため、到着が遅れております」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……おお、かなり待ちそうだね」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「どうしよ。タクシーでもいいけど……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「この距離なら、残りは走ってもいいか」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「うん、じゃあ行くね！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「トレーナー、ここまで付き合ってくれてありがとう！」
        - if: era.get('cflag:74:66') === 1
          lines:
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - 「パーマー～来てくれたの～！」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「無事でよかった～」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ブライトは相変わらず悠々としてるね」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「でも、あのときより遠くなくて助かったよ！」
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - 「あのとき？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「前に青森まで行っちゃったこと、あるでしょ？」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「アルダンに電話して……みんなで何時間もかけて迎えに行ったやつ」
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - 「あら……ふふ、そんなこともあったわね～」
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - 「でも、もうそんな遠くまで乗らないわ。私も大きくなったもの～」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「そっか……それ、ちょっと寂しいかも」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「だってあのとき、みんなで旅行してるみたいで、けっこう楽しかったんだよ！」

# 恋慕74未満、ヘリオスの恋慕49未満、ランダム
confused:
  title: 迷う恋心
  lines:
    - トレセン近くの堤では、よく%UMA%たちが朝練をしている
    - パーマーはひとり川辺に座り、小さく息をつく
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー……」
    - 目には元気いっぱいの%UMA%たちの走りが映っている。ここで悩んでいる自分が、場違いに見える
    - パーマーの悩みが胸に閉じこもりそうなとき、気持ちを照らす太陽が昇った
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「おはよ！ %65_CALL%！」
    - 後ろから突然抱きついてきたダイタクヘリオスが、影のない声でパーマーの気持ちを明るくする
    - 朝から全力の抱擁をしばらく続け、息が上がりかけたパーマーを離して隣に座る
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「どうしたの？ 朝からそんな顔～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おはよう……あれ、顔、変だった？」
    - パーマーは赤い顔で、傍らの親友に笑う
    - でも笑いは長く続かず、すぐ微妙な表情に戻り、しょんぼり両手を見る
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「やば、%65_CALL%の顔、超やば——」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「はいはい、なにがあったの？」
    - 隣のダイタクヘリオスは両手をばたばたさせ、最後に本気でパーマーの腕を掴む
    - 青と黒の混ざった髪が視界で揺れ、パーマーの沈んだ気持ちを引っかける
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「その……その、たいしたことじゃないんだけど……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いや、けっこう大きいことだよ」
    - 少し縮こまっていたパーマーの体が、隣のダイタクヘリオスへ寄りかかり、ゆっくり口を開く
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしね、自分のトレーナーが好き。しかもその……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もう引き返せないくらいの、好き」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「あれ？」
    - パーマーの悩みを聞くと、ダイタクヘリオスはかえって気まずいように固まる
    - 傍らで震えている親友を見て、少し慌ててあれこれ考える
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「あの、%65_CALL%もそんなに、あー……」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「ほんとは%65_CALL%、直接……その……」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「直接%CALLNAME_65%に言っちゃえばいいよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほんと？」
    - 考えるのをやめたダイタクヘリオスが口から出した答えは、パーマーの沈んだ顔をまた明るくした
    - 暗い目に明るい光が乗り、傍らの親友を見る。何か言いたそうで、すぐには出ない
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「そ、そうだよ！ %65_CALL%はかっこよくてかわいいし、一発でトレーナー攻略できるって！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「かっこいい……かわいい……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうだね、トレーナーも言ってたし」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「本当のあたしを見たい、みたいな……ん？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （あたし自身の走り、あたし自身の選択……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （それが……そういうあたし？）
    - 力のなかった腕が急に力を取り戻し、体の脱力もすぐ消える
    - パーマーは立ち上がり、握った両手を見て、気持ちまでかなり高ぶる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いける気がする……！」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「マジ！？ じゃあハイっていこう……」
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - 「%65_CALL%、顔！ 超赤いよ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えっ、そう？」
    - パーマーは赤い頬を軽くそり、振り返って堤を走る%UMA%たちを見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （トレーナーが見たいなら、あの感じで……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （トレーナー、好きになってくれるよね？）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あの、ちょっと走ってくるね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとう、ヘリオス！」
    - 励ましてくれた親友に礼を言ってから、パーマーは今日の朝練を始める
    - 顔の紅潮が羞恥か興奮か運動か、わからないまま、散歩中の%YOU%とぶつかるまで続く

#恋慕＞74、睡眠姦の条件を満たす
a_step:
  title: 一歩、前へ
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あー……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「最近、トレーナーちょっと冷たいんじゃない？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もしかして、トレーナー、あたしのこともう……！」
    - 少し震える両手で自分の携帯を取り、%YOU%の番号を開く
    - 発信を押す直前で、また迷う
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いきなり電話、ちょっとストレートすぎるかな……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あーあ……どうしよ！」
    - パーマーはひとり頭を抱え、悩んで左右に歩き回る
    - どれだけその場で回ったかわからないあと、何かわかったように立ち止まる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あった……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「逃げよ！」
    - 悩んだ末に出たのは、メジロパーマーらしい結論だった
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「違う、逃げるの、こういうとき役に立たないよ……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうしたらいいのさ！」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「あれ、パーマー？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えっ、アルダン？ ああ、なんか用？」
    - 相手が誰かわかると、パーマーは慌てて何事もなかったふりをする
    - 残念ながら、その前にメジロアルダンはもう見ていた
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「こういうときは、本人に直接言ったほうがいいと思うよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えっ？」
    - さらっと装っていた動きが止まり、メジロアルダンの笑顔を見るだけになる
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「直接、行く……」
    - 尻尾がしょんぼり小さく揺れ、不安そうに両手を重ねる
    - メジロアルダンはパーマーの肩を軽く叩き、励ます顔をする
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「やらないなら、絶対にダメ。でも」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「パーマーが動いたなら、必ず返事があるよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「返事……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わかった……試してみるよ！」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「うんうん～」
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「ところで、何に悩んでたの？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「えっ？ あああっ！ なんでもない！」
    - パーマーは顔を真っ赤にして、メジロアルダンの前から逃げ出した
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - 「えっ？」

# ファン襲撃（恋慕＞74）
crazy_fan_end:
  title: 逃げ切れない
  lines:
    - もうどれだけ経ったかわからない。でも、何も変わっていない
    - どれだけ経った？ とっくにわからない
    - 何をした？ まったく覚えていない
    - 残っているのは、あの日、何人かのファンが%YOU%へ向かって走ってきた光景だけだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トレーナー、起きた？」
    - パーマーは傍らに座り、%YOU%の顔を見ている。静かで、穏やかだ
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「さあ、もう行こうか」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「いつか落ち着けるといいね」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも、一緒にいられるなら、それでいいよ」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、またいつか、あたしと話してくれる？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あたしのトレーナー」
    - 冷たい写真立てに触れて、それでも笑っている
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あんたがいてくれれば、あたし、何だってできるよ……」
