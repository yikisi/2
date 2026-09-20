# @file シュヴァルグラン - 地下室
# @author 無奈
first_time:
  sync: true
  lines:
    - 狭い空間に、ドアを叩く音と助けを求める声が響く。返ってくるのは冷たい感触と沈黙だけだ。
    - 暗い部屋にいるほど、時間の感覚が薄れる。残るのは、頭の中を巡る無数の疑問だけ。
    -
    - 「けほっ……けほっ、けほっ……」
    -
    - 使いすぎた喉の咳を抑え、%YOU% はできるだけ冷静でいようとする。
    - 誰かに攫われたのなら、正面からの衝突は避けられないだろう。
    - 今は思考を整え、少し休む必要があるかもしれない。

welcome:
  sync: true
  lines:
    - if: era.get('exp:89:监禁次数') === 1
      lines:
        - 冷たい空気が眠っていた意識を起こす。%YOU% の目に、見知らぬ天井がぼやけて映る。
        - 馴染みを探して彷徨う視線が、小さな白い姿を捉えた。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ……！ よかった、%CALLNAME%！ 目が覚めた！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……体は……どこか、痛いところ、ありますか？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だ、どれくらい力を入れていいか分からなくて……殴られて気を失ったの、痛かったですよね……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ここは？」
        -
        - しばしの沈黙。
        - とまどうあいだに、%YOU% の視線が %CHARA% とぶつかる。
        - 濁って光のない青い瞳から、深い謝罪が滲む。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ごめんなさい……%CALLNAME% には、言えません。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……で、でも！ %CALLNAME% とお話がしたかっただけです。傷つけたりしません……！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だから……%CALLNAME%、ここにいてください。どこにも行かないで。」
    - if: era.get('exp:89:监禁次数') !== 1
      lines:
        - %YOU% はパッと目を開けた。見慣れた天井は、恐れていたことが現実になったという意味だ。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あ、%CALLNAME%、目が覚めた。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「どうして……悪いことをしたみたいな顔、するんですか？」
        -
        - 重く、濁った、灰色の沈黙。
        - その青い瞳に沈んだ %YOU% は、そこに、後ろめたさで揺れる自分を見た。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME% を責めたいわけじゃありません。こうなったのは……全部、私のせいです。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ずっと、私が %CALLNAME% に頼りすぎていました……甘えてばかりで……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「大好きな %CALLNAME% が悲しむ顔を見るのがつらくて……逃げてばかりでした。」
        -
        - そのすべてを見ていた %CHARA% は、%YOU% の頬をそっと撫でて、また口を開く。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「でも今度は……心がどれだけ苦しくても、私、頑張る。頑張らないと。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「もう誰にも頼らない。泣かない。逃げない。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あなたの体も、匂いも、体温も、同じくらい好きです。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、愛してます。」

flatter_after_strike:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……ほ、包帯、巻けました。箪笥……倒れるなんて、思わなくて。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ねえ、%CALLNAME%……どうして、私を守ったんですか？ 何もしなければよかったのに……」
  -
  - 真実を言えない %YOU% は、トレーナーの務めだと言い訳する。
  - %CHARA% の罪悪感に濡れた顔を見る限り、%YOU% の行動は%SEX%の決意をかなり揺るがしたらしい。

flatter_after_battle:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……休、休みますか。最近……疲れているみたいで。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「わ、私が膝、膝枕、します……」
  -
  - %CHARA% の恥ずかしい頼みに従い、%YOU% はゆっくり%TEEN%の温かく、柔らかく、厚い太腿に頭を乗せた。
  - だが理由を聞くと、「ご飯のときいつも眠ってしまうから」と返され、%YOU% は少し首を傾げる。

flatter_no_escape_first:
  - 気を張って取り入る %YOU% に、%CHARA% は乗っているらしい。小さな%UMA%はベッドの端に素直に座り、いつものように照れた笑みを浮かべる。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「二人きりの部屋……どうしてか、すごく……懐かしい。」
  -
  - 時間を貫くその声には、無視できない寂しさがある。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「前は、二人の日常がずっと続くって、思ってました。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「いつからでしょう……%CALLNAME% のそばに……私以外の人が、現れました。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「嫉妬して……許されないことをしました……私たちの関係は、もう、どうしても昔には戻れないですよね……」

flatter_no_escape_second:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「本当は……私も後悔しました。%CALLNAME% を監禁しなければよかった、って。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……でも……どうしても、離れたくない。」
  -
  - %CHARA% は黙って俯き、帽のつばが表情を隠す。だが震える指先までは隠せない。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「自由を奪って、ここに閉じ込めて。こんな私、嫌になるって分かってます……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも、分かってるんです……何もしなかったら、もう二度と、会いに来てくれないかもしれない……！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「お願い……%CALLNAME%……そばに、いさせて……」

flatter_no_escape_third:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ねえ、%CALLNAME%……笑って……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「こんなふうに……日に日にやつれていくのを見るの……私、耐えられない……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「前みたいに、頭を撫でて……私のいいところを、好きだって言って……」
  -
  - %YOU% は無理に笑った。だが %CHARA% はそれを見て、崩れた顔になる。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「違う……こんなの、違う……欲しかったのは……こんなあなたじゃ……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……知ってたら……こんなことに、なるなんて……うっ……うう……うう……」

flatter:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……%CALLNAME%、無理して私と話さなくても、いいんです……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今……どうしたら……あなたを、留められるんだろう……？」
  -
  - 保とうとしていた大人の矜持は、体と一緒にたやすく倒された。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……好きでいてくれるなら……体だけでも。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……私……大切にします❤️」

strike_success:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%、ただいま……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「えっ——んぐっ！」
  -
  - ドアを開けても %YOU% が見えず、%CHARA% はその場で固まった。
  - ドアの陰にいた %YOU% は間を見て、睡眠薬の粉を湿らせた布で %CHARA% の口と鼻を押さえた。
  - 腕の中の%CHILD%は少し暴れただけで、すぐ静かになった。
  -
  - 「はぁ……」
  -
  - 計画どおりいった %YOU% は、半分近く千切った袖を見て、呼吸を整え、吐息をつく。
  - 危うい手だが、%CHILD%の体を傷つけない唯一の方法ではあった。
  -
  - 「ゆっくり休め。」
  -
  - 腕の中の%CHILD%の顔に、薄化粧で隠した隈がある。%SEX%を罪悪感から解放するときだ。
  - 脱力した %CHARA% をベッドに寝かせ、%YOU% はメモを残す。いつか面と向かって謝りたい。
  - それを終えると、%YOU% は %CHARA% のポケットの鍵で扉を開け、愛で造られた牢から逃れた。

strike_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「よいしょ……よいしょ……」
  -
  - 無防備に部屋を整える %CHARA% の背を睨み、%YOU% は極度に緊張し、仕掛けた罠を一眼見る。
  - 食卓の椅子に座れば、椅子が壊れると同時に、後ろの箪笥が倒れる。
  - そうすれば、%UMA%も一時は動けなくなるはずだ。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME% のベッドを整えてると……なんだか……か、家族みたいで……えへへ。」
  -
  - あと少し前へ——
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「一人でよく想像します……%CALLNAME% と家族になるところ。」
  -
  - あの椅子に座れば——
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも %CALLNAME% を監禁した瞬間から、想像は現実にならないですよね……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あの、%CALLNAME%……ご飯、作りました——」
  -
  - 「——おい！！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「——あっ、%CALLNAME%！」
  -
  - 骨の鳴る音と%TEEN%の叫びが、鋭い和音になる。
  - %CHARA% を押しのけ、代わりに箪笥の下敷きになった %YOU% は、なぜか安堵していた。

battle_fail:
  - if: d.time <= 3
    content: %YOU% は針金で袖口を裂き、シャツの内側から薬の粉をたっぷり一包み取り出す。
  - if: d.time > 3
    content: %YOU% はなぜか大きな穴の開いた袖に手を入れ、シャツの内側から小さな薬の粉を取り出す。
  - トレーナー会議で配られた「対%UMA%用睡眠薬」の見本。本当に使う日が来るとは。
  - 講師によれば、この薬は%UMA%から暴行時の記憶を消し、普通の相棒関係へ戻すためのものだ。
  - 「大した発明だ」と舌打ち混じりに感心しつつ、食器を探す %CHARA% の背を確かめる。
  - if: (t = Math.random() < 0.1)
    lines:
      - 「あ……はっくしょん！！」
      -
      - だが %YOU% が粉を出した瞬間、%CHARA% の毛が一本、鼻先を通り過ぎた。
      - 少し吸い込みかけてしまった……まあ「対……%UMA%用……睡……眠……」だから。
  - if: "!t && era.get('relation:89:0') >= 100"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あの……わ、私が %CALLNAME% に、食べさせます。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あーん——あ～」
      -
      - 食べ物を %YOU% の口元へ運ぶ %CHARA%。予想外だが、致命傷ではない。
      - 「対%UMA%用」の特効薬だと思えば、%YOU% は拒まなかった。
  - if: "!t && era.get('relation:89:0') < 100"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「い、いただきます……」
      - 「いただきます。」
      -
      - %YOU% は %CHARA% が動けなくなったあとの計画を考えながら、スプーン一杯を口へ運ぶ。
  -
  - 「……？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「え……？ %CALLNAME%……？」
  -
  - 吸い込まれそうな眠気が来て、思考が一気に深海へ落ちる。
  - ふざけんな……「対%UMA%用」とは「%UMA%にも効くほど強い」という意味か……？
  - こんな薬を作った者を心の中で送りつつ、%YOU% は力なく %CHARA% の腕の中へ倒れ、抗えずに眠る。

battle_escape:
  - %CHILD%を抱えてベッドへ寝かせ、%YOU% は %CHARA% の天使のような寝顔を見て吐息をつく。
  - 昔、%SEX%はいつも天使のような笑みを浮かべていた。それを変えたのは、ほかならぬ %YOU% だ。
  - 厚い鉄の扉はすでに開いている。%TEEN%の努力は、いま灰になろうとしている。
  -
  - 「悪いな、%CALL_89%。」
  -
  - %CHARA% に謝って背を向けたところで、袖口を掴まれた。
  - 掴まれた袖から、%CHILD%の小さな手が不安に震えているのが分かる。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「行かないで……%CALLNAME%……」
  -
  - 眠っているはずの小さな%UMA%が、夢の中で %YOU% の名を呼ぶ。
  - %SEX%は、どんな夢を見ているのだろう。
  - 夢の中の %YOU% も、同じように%SEX%を置いていくのか。
  -
  - 「……」
  -
  - ここに留まっている暇はない。
  - また %CHARA% に泣いて引き止められたら、%YOU% は自分が何を決めるか分からない。
  - %YOU% は眠る %CHARA% にそっと布団をかけ、地下室を出た。

battle_prison:
  - ベッドで眠る %CHARA% を見て、%YOU% は対%UMA%用の睡眠薬を用意しておいてよかったと思う。
  - 睡眠薬と呼んではいるが、持続は短い。五分ほどで効果が切れる。
  -
  - %YOU% は急いで鍵穴に針金を寄せる。だが限界まで曲がっても、鉄の扉は動かない。
  -
  - 「ちっ、どうすれ——」
  -
  - 理由もなく、うなじに大きな衝撃が来る。
  - 体が地面へ落ちる。なのに羽根布団に伏したみたいに、意識が遠のく。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……%CALLNAME%、ごめんなさい……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私も、こんなの嫌いです……いい子になって、好きになってほしかった。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「苦しそうな顔を見ると……私もつらいんです。今みたいに。」
  -
  - ぼやけた視界で、%YOU% はその罪悪感で満ちた瞳と重なる。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「きっと %CALLNAME% には、責任を取りたいことが、たくさんあって……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「私が……その辛いことを、忘れさせてあげる————」
  -
  - %YOU% の意識は沈み続け、%CHARA% の声は遠く……近くなる。

find_escape_out:
  sync: true
  lines:
    - 何気ない試みで、針金が錠の中の何かに触れた気がした。
    - %YOU% は針金を握り、強く回す。錠の内側が滑らかに回る感触がした。
    - %YOU% は心の中で歓声を上げて鉄の扉を押し、狭い通路へ出る。これを抜けさえすれば——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%YOU%、どこへ行くの？」
    -
    - 肌が泡立つような悪寒が全身を走り、首から背中まで冷や汗に濡れる。
    - 通路の向こうからの声はほとんど聞こえないほど弱い。だが意味だけは、強く届く。
    - 近づいてくる%UMA%は %YOU% に聞いているのではない。すべてを知ったうえで『確認』しているだけだ。
    -
    - 「こ、これも %CALL_89% のために……」
    -
    - if: (t = era.get('exp:89:监禁次数')) === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「本当に私のためなら……その言葉で返さないで。」
        -
        - 門の内側へ追い詰められた %YOU%。すぐそこにある愛馬。嫌な予感が広がる。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私にとって、%CALLNAME% がいちばん大切で、全部なんです……」
    - if: t !== 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……そんな言葉で、ごまかすつもりですか……」
        -
        - 門の内側へ追い詰められた %YOU%。すぐそこにある愛馬。嫌な予感が広がる。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「私……CALL_91 みたいに賢くはないけど、簡単に騙される馬鹿じゃありません。」
    -
    - カチッ——錠が回る冷たい音が、静かな部屋に残る。
    - 外界と二度と触れ合えないこの場所で、%YOU% は観念したように目を閉じた。

find_escape:
  sync: true
  lines:
    - カチ、カチ——
    -
    - 「啧……」
    -
    - やっと見つけた針金が、錠の芯で折れた。
    - 何度も失敗してきた %YOU% に、失敗自体は慣れっこだ。だが残った破片は、逃げようとした証拠になる。
    -
    - 「これ……抜けない……！」
    -
    - いつから、間違えたのだろう。
    - どうして、ここまで来てしまったのだろう。
    - 頭の中に、小さな%UMA%の天使のような笑みが幻のように浮かぶ。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%？」
    -
    - 弱い声が %YOU% の動きを止め、出来心の脱獄ごっこはここで終わりだと告げる。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんなさい、%CALLNAME%……」
    -
    - %YOU% は振り返って%CHILD%の顔を確認することすらできず、ベッドへ引き戻されるままになった。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「全部、私のせいです…%CALLNAME% の世話ができなくて、出ていきたいって思わせて。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME% に、私の気持ちを、感じてもらわないと…」

get_up:
  sync: true
  lines:
    - %CHARA% は %YOU% の名を呼んで夢から飛び起き、慌てて %YOU% の姿を探す。

back_basement:
  sync: true
  lines:
    - if: d.start
      lines:
        - %YOU% が抗う手段を探していると、錠前から突然『カチッ』と音がした。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……目が覚めた……」
        -
        - だが戸口に現れた姿は、想像していた凶悪な犯人ではなかった。
        - 小さな%UMA%は手を後ろに回し、錠がまた反対へ、乾いた音を立てて回る。
        - イヤーマフの下の小さな耳が一度揺れ、持ち主と一緒に近づき、%YOU% の前で止まる。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そこ……痛かったですよね……」
        -
        - %TEEN%は震える小さな手を %YOU% の後頭部へ伸ばし、一瞬止めて、代わりに帽のつばを下げた。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ごめんなさい……ちゃんと、説明します……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「できれば……こんなこと、したくなかった……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME% を傷つけないために……今度は……もう、そばから離れないで……」
    - if: '!d.start'
      lines:
        - if: true
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「あの……%CALLNAME%、ただいま。」
            -
            - 鉄の扉を開けて現れた小さな%UMA%は紙袋を提げている。包装を見るに、『光朝』の肉まんだ。
            - 一緒に食べようという %YOU% の誘いに、%TEEN%は小さく首を横に振る。
            - もう食べたのか。理由を推測する %YOU% が一口目を噛む前に、%TEEN%のお腹が先に鳴った。
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……%CALLNAME% がここに監禁されてるのに、私だけ肉まんを食べるなんて……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「そう思うと……なんだか……何も、食べられなくて。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「私のことは、気にしなくていいです……%CALLNAME% が喜んでくれれば……それで……」
        - if: true
          random: true
          lines:
            - 外の雨音がかすかに聞こえる。%YOU% は湿った冷気を深く吸い、焦りの混じった吐息を吐く。
            - 厚い扉が突然押され、続いて水滴が床に落ちる音が続く。
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ただいま……%CALLNAME%。」
            -
            - びしょ濡れの制服が、ところどころ小さな%UMA%の体に張りついている。
            - 海軍帽は雨で色が濃くなり、ふわっと格好よかった短髪が、凍えた赤い頬に貼りついている。
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……こんな天気……ここ、湿気てますよね……」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「私……%CALLNAME% の……耳、掃除しますね……えへへ……」
            -
            - 足元にもう水たまりができているシュヴァルグランは、それでも他人事みたいな顔だ。
            - %YOU% は人形みたいな%TEEN%を無理にベッドへ引き寄せ、%SEX%に布団をかけた。

out:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ん……？ もう……授業の時間、みたい……」
    -
    - ぼんやりと顔を上げると、携帯の光が%TEEN%の疲れて青白い顔を映す。
    - %SEX%にとって、心も体も、相当な負担だろう。
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あ……ありがとう……まだ、心配してくれて……%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でも……%CALLNAME% が心を戻してくれるなら、このくらい……大丈夫……」

ask_release_agree_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……うん。」
  - ここを出たいという %YOU% の頼みを聞き、%CHARA% は長く迷い、やっと小さく頷いた。
  -
  - if: d.another > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「最近……CALL_OTHER が言ってて……%CALLNAME% を国外へ連れていくって。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%SEX%は、向こうへ行けば……ずっと %CALLNAME% を独占できるって。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「『永遠』だなんて……すごく……すごく、魅力的で。」
      -
      - %CHARA% は苦く笑う。
      - 覚えている限り、この地下室へ来てから、%TEEN%はいつも苦く笑っている。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも……思い出の詰まったここを、離れるのは、嫌で。」
  - if: '!(d.another > 0)'
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「最近……CALL_90 と CALL_91 が何か察したみたいで、ずっと諦めるように言ってきます。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%THEY%が私のためなのは分かってます。でも、それは……ここがもう危ないってことでも……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「もうすぐ、救助隊が……ここを見つけるはずです。」
      -
      - %CHARA% は苦く笑う。
      - 覚えている限り、この地下室へ来てから、%TEEN%はいつも苦く笑っている。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも……私……これだから %CALLNAME% を出すんじゃ、ありません。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「少しの愛でもいい、全部捨ててもいい……もう手は離さない、って思ってました。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「自分の手で %CALLNAME% を壊すことになっても、そばを離れたくなかった。」
  -
  - そこまで言って、%CHARA% は無意識に小さな拳を握る。
  - だが %YOU% と目が合うと、%CHILD%はだんだん手を緩めた。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……でも……このあいだ、%CALLNAME% と過ごした……色んなことを、思い出してました。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「やっぱり……%CALLNAME% を視界に縛るより——」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「いちばん好きなのは、%CALLNAME% の笑顔です。」
  -
  - そう言って、%CHARA% はポケットから鍵束を出す。出会いを見届けた品だ。
  - %SEX%は震える小さな手で一本を選び、錠に差し込む。
  - 『カチッ』と、重くて息苦しいその錠が、やっと開いた。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「こうして自由を返したら……また、好きになってくれますか……？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……なんて。無理なのは分かってるのに、期待せずにいられなくて……」
  -
  - %YOU% は気づく。%CHARA% の両手は、自分のスカートを強く握っている。
  -
  - if: d.another > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「早く行って、%CALLNAME%……他の人が戻る前に。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「私のことは、心配しなくていいです……だ、大丈夫ですから。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それに、こんな私、心配される価値なんて……」
      -
      - それでも %CHARA% は重い扉を押し開け、%YOU% を急かして送り出す。
  - if: '!(d.another > 0)'
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「自分がしたことは……謝って済むことじゃないって、分かってます。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも……ごめんなさい、%CALLNAME%。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それと、さようなら……%CALLNAME%。」
      -
      - それでも %CHARA% は笑みを絞り出し、%YOU% を見送る。
  - acc: 1
    key: select
    content: 一人で出る
    lines:
      - 「……！」
      -
      - 何か言いたかった。だが渇いた喉は、口を開閉させることしか許さない。
      - 目の前の %CHARA% がどれほど心配でも、体も心も限界に近い。
      - 今回の行為は衝動だったのかもしれない……だが%CHILD%を見るだけで恐れる心は、壊れた鏡が戻らない証拠だ。
      - 地上へ戻ったあと、%CHILD%のこの暴行を隠してやることだけが、%YOU% にできる唯一のことかもしれない。
      -

      - （くそっ……）
      -
      - 情けない自分を呪い、%YOU% は壁を伝って、辛うじて地下室を出た。
  - if: d.leave_together
    acc: 2
    content: %SEX%を誘って一緒に出る
    lines:
      - 鉄の扉と%CHILD%のあいだを視線が行き来し、%YOU% は心の中で決めた。
      -
      - 「%CALL_89%……お前の夢を、覚えてるか？」
      -
      - %CHARA% の態度から見て、今回の過激さは衝動にすぎない。
      - 過ちは誰にでもある。大人として、%SEX%にやり直す機会を与える必要がある。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「え……？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わ、私の夢……」
      -
      - %CHARA% は口ごもってなかなか言えない。出会ったばかりのころと同じだ。
      - あのとき%CHILD%の夢を叶えると約束した。これだけで捨てるわけにはいかない。
      -
      - 「あの夢を、続けよう。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……え？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それは……わ、私も、まだ %CALLNAME% のそばにいていいってことですか？」
      - 「もちろんだ。%CALL_89% は僕の愛馬だ。」
      -
      - その言葉に %CHARA% はまず驚き、それから割り切れない顔になる。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも……でも私、%CALLNAME% を傷つけたんですよ！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それに %CALLNAME% がこんなに長くいなくて……みんな、もう——」
      -
      - %CHARA% の言葉は途中で、吸い込む息に飲まれた。
      - %YOU% が正面から%CHILD%の両手を握り、胸の前へ上げたからだ。
      -
      - 「お前は何もしていない。僕が証になる。」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……！」
      - 「当人がそう言うんだ。これ以上の説得力はないだろ？」
      -
      - %YOU% は以前と同じように、%CHARA% の顔を自分の胸に埋め、%SEX%が嫌なことを考えないようにする。
      -
      - 「誰だって悪夢は見る。%CALL_89% は寝相が少し悪いだけだ。」
      - 「目が覚めれば終わりだ。それだけだ。」
      - 「そもそも、%CALL_89% にこんなことをさせた僕が元凶だ……許してくれるか？」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……%CALLNAME%……！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うううっ……うううあぁぁ……」
      -
      - %CHARA% は %YOU% の腕の中で、「許します」を何度も繰り返し、長く泣いた。
      - 落ち着いてから、%YOU% は%CHILD%の手を引き、地下室を出た。

ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「うん……%CALLNAME% を、出します。」
  -
  - %YOU% の粘り強い懇願のあと、%CHARA% は長く黙って、やっと折れた。
  - だがすぐ、帽のつばの下の瞳が %YOU% を見据え、条件を口にする。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも……今度は、%CALLNAME%、ちゃんと私を見てください。」
  -
  - 迷いなく、%TEEN%の条件に、%YOU%は同じ過ちを繰り返さないと何度も誓う。
  - 意味のない誓いでも、%CHARA% はそれを喜び、小さく頷く。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「うん……%CALLNAME% を信じます。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも今度は……もう %CALLNAME% を、視界から外しません。」
  -
  - 赦されたと思った %YOU% は、その一言で、まだ終わっていないと知る。
  - 先の不安と……後ろの視線を背負ったまま、%YOU% は地下室を出た。

ask_release_reject_first:
  - if: d.ask_time <= 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「だめ——」
      -
      - 拒んだあと、言いかけて止めた%TEEN%は俯く。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「もう少しだけ、時間を……お願い……%CALLNAME%……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「もう一度……好きになってもらう、機会をください……」
      -
      - %CHARA% はそう言って %YOU% に抱きついた
      - 甘えというより、その力は拘束に近い。
      - どう反応していいか分からない %YOU% は、小さな%UMA%が満足するまで静かに待つ。
  - if: d.ask_time > 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「だめ——」
      -
      - 拒んだあと、%TEEN%の目尻が赤くなっていく。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こんなふうに%CALLNAME%を監禁して…きっと、恨んでますよね……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも、出したら、もう %CALLNAME% に会えないかもしれないんです……！」
      -
      - %CHARA% はそう言って %YOU% に抱きつき、顔を胸に埋める。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「それはだめ…遠くから見ることも許されなかったら、私がどうなるか、分からない……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……お願い、%CALLNAME%……置いていかないで……」
      -
      - %CHARA% に泣いて引き止められても、%YOU% は最初から話し合いの余地などなかったと知っている。
      - だから %YOU% は%SEX%を抱き返し、落ち着くまで待った。

ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「だめ。」
  -
  - 出ていきたいという頼みは、きっぱり拒まれた。
  - %TEEN%の議論を許さない顔を見て、%YOU% はできることがもうほとんどないと知る。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「分かってます。%CALLNAME% はこれから、もっと警戒する……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ここを出たら……もう、見つけられない。」
  -
  - %CHARA% はそう言って %YOU% に抱きついた
  - 甘えというより、その力は拘束に近い。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今度は、視界から外しません。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……独占するために、自分が何をするか、分からない。」

ask_time:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……！ い……今、見ます……あ、あの……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今は%TIME%です……%CALLNAME% の予定、乱しちゃいましたよね……ごめんなさい……」