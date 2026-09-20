# @file ドリームジャーニー - 地下室
# @author 幽白書
# @author Claude (翻訳)
welcome:
  sync: true
  lines:
    - %YOU% はゆっくりと目を覚ます……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「よく眠れましたか、%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「眠れたのなら、よかった……神経が太い？ いいえ、違います。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それは、浅い意識だけでも、ここを安心できる場所……『家』だと、認めているということですよ？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「違う、ですか……でも、私にとっては、そうなのです。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「あなたがいる場所だけが、私の帰る場所なんです。」

flatter:
  - random: true
    lines:
      - 「ごめん、%Y_CALL_119%。きっと僕が、何かして%Y_CALL_119%を不機嫌にさせたんだ。直すから……」
      -
      - とにかく、先に謝っておこう。
      - %CHARA% は聞き終えると、%YOU% に近づいた。
      - そして………指で %YOU% の口を押さえた。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「しっ……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「私が一番好きなその口で、そんな嘘を吐かないでください……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「本当は、何も間違っていないと思っていらっしゃるのでしょう？」
      -
      - %YOU% は迷い、それでも頷いた。
      - %CHARA% は咎めるような顔をして、身を乗り出した。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あなたの唇と舌は、嘘のためにあるのではありません……でも、いいでしょう。その存在意義を、私が教えてあげます……ちゅ……ん……ぐちゅ……」
  - random: true
    lines:
      - 「ごめん、%Y_CALL_119%。よく考えても、やっぱりわからない……うっかり、いつか君を不機嫌にさせて、ここに閉じ込められたのか？」
      -
      - とにかく謝って %CHARA% の許しを得るのは簡単だ……
      - だが、%CHARA% を欺くのは、やはりよくないだろう……
      - せめて、何が悪いのかわかってから謝るべきだ。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……あなたの誠実さは、相変わらず嬉しいです……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「でも……いいえ、あなたは何も間違っていません。ただ、あなたを独占できない不安が、私の心を焦らせているだけです……」
      -
      - 「でも……」
      -
      - %YOU% が続けようとした唇は、塞がれた。
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……ん、考えが変わりました……%CALLNAME%、あなたは確かに間違っています……その唇が、うるさすぎるんです……どうか、唯一の用途を果たしてください……私への愛を、語るために❤️」

strike_success:
  # EXPNAME:25 - 26 = 性愛回数 - 睡眠姦回数
  - if: t = (era.get('exp:119:25') - era.get('exp:119:26')) >= 10
    lines:
      # @author 黑奴队长
      - %YOU% はドリームジャーニーの身体を、知りすぎている
      - 何度も、%SEX%の肌の一寸も、隅々まで探ってきたのだから
      - だから今のように、ある一点を軽く突くだけで、%SEX%が顔を紅潮させ、息を乱して崩れ落ちるのも、当然だろう
      - %YOU% は顔を上げる。隙間から自由という名の微光が漏れる鉄の扉。俯けば、眼前には %YOU% の功績、誇り、最愛、そして罪が横たわっている
      - %YOU% は絶頂の余韻で動けない小柄な身体を抱き、愛の巣であり牢でもある場所からゆっくり出ていく
      - 少なくとも、%SEX%をここに寝かせたままにはできない
  - if: t < 10
    lines:
      # @author 幽白書
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「最後まで……あなたに、信頼していただけなかったのですね？」
      # CFLAGNAME:1 = 種族
      - if: "!era.get('cflag:0:1')"
        content: 人間の力ではあるが、%CHARA% のような小柄な%UMA%には十分だった
      - %CHARA% は悲しそうな顔をして、ゆっくりと倒れる……
      - %YOU% は地下室から逃げ出した……

strike_fail:
  - 失敗した……
  - %CHARA% が振り返る。怒るだろうか？
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……よく頑張りましたね……」
  -
  - %CHARA% はそっと %YOU% を抱きしめた。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「苦手な技術を、一生懸命に学んだ……本当に、もう少し力を込めれば、私を短い目眩に落とせるところでした……」
  - %CHARA% の小柄な身体が、さらに深く懐へ潜り込む。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも、人体には他にも使える弱点があります……たとえば……」
  -
  - %CHARA% が抱く手が、腰のある一点を、軽からず重からず叩いた。
  - 瞬間、身体が動かなくなる……
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「では、戻ってしっかり学びましょう……人体についての知識を❤️」
  -
  - %YOU% は闇に落ちた……

battle_escape:
  - 解けた。
  - 最後の一層の錠……見慣れた鍵穴の形を見て、%YOU% は倒れている %CHARA% のそばへ戻る。
  - その見慣れた形は、まさに %CHARA% の耳飾りではないか。
  -
  - %YOU% は相手を起こさないよう、そっと %CHARA% の頭飾りを外し、最後の仕掛けを開いた。
  -
  - 仕掛けが開くと、巻かれた一枚の手紙が %YOU% の手に落ちた。
  - 手紙には、%YOU% への愛と詫びが綴られている。
  -
  - ……これは、本心から書いた告白なのか。
  - それとも、また一層の計算か。
  - まだ横たわる %CHARA% を見て、%YOU% はしばらく迷った。
  - %YOU% は %CHARA% のそばへ戻り、力の抜けた身体を背負った。
  - 少なくとも、この地下室は、%SEX%の居場所ではない……

battle_prison:
  - 手前の仕掛けは、すべて解けた。
  - 最後の一層の錠……見慣れた鍵穴の形を見て、%YOU% はどうしても思い出せない。いったいどこで見たのか。
  -
  - 時間はゆっくり過ぎ、%YOU% は力任せに錠を引っ張るが、何の役にも立たない……
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「開きませんか、%CALLNAME%？」
  -
  - ついに、背後から声がした。
  - 空しい足掻きは、終わった。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……やはり、あなたには信頼していただけないのですね。悲しいです……」
  -
  - 悲しいと言いながら、落胆した様子は微塵もない。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「でも……信頼は育てられるものです。%CALLNAME% が私をもっと知れば、もっと信頼してくださると、私は信じています。」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「だからどうか、私の身体を、私のすべてを、もっと知ってください……」
  -
  - 抵抗する暇もなく、%YOU% は %CHARA% に押し倒された……
  - 残るは、薄暗い明かりの下で銀に輝く %CHARA% の頭飾りだけ……

find_escape:
  sync: true
  lines:
    - if: d.is_back
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あら……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……この錠を、開けようとなさいましたか？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「開かない？……ふふ、それは嬉しい知らせです。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「あなたのような真っすぐな人には、絶対に開けられない錠です……これは、私のような歪んだ心の者のために用意した錠ですから……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「だから、あなたがこれを開けられないこと、私は心から安心し、喜んでいます。」
    - if: "!d.is_back"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「解けませんか？」
        -
        - %CHARA% の声を聞いて、%YOU% は反射的に、降伏するように両手を上げた。
        - %CHARA% は慌てず %YOU% のそばへ来て、一本の針金だけで素早く二度。%YOU% には何をしたのかも見えなかった。
        - 長く %YOU% を閉じ込めていた錠が、目の前であっけなく開く。
        - それから、錠はまた閉じられた。
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふふ……余興としては、ご満足いただけましたか？ %CALLNAME%？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「落胆なさらないで……適材適所です。父が金細工師だったので、こうした仕掛けには少し心得があるだけです。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME% にも、もっと得意なことがありますよね？ たとえば……床の上のこと❤️」
    -
    - %YOU% は %CHARA% にベッドサイドへ連れ戻された……

get_up:
  sync: true
  lines:
    - %CHARA% が目を覚ました……
    - if: d.b_start
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん……%CALLNAME%、よく眠れましたか？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なぜここにいるか、ですか……それより、抱き心地はいかがでしょう？ どなたかの趣味にぴったりな、この小柄な身体。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……気持ちよかった……ですか？ ふふ、あなたの誠実さは、相変わらず嬉しいです。」

back_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、ただいま。」
    - if: d.b_start
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ああ、%CALLNAME% は起きていましたか？」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「とにかく、ただいま。ん……ちゅ……ぐちゅ……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「何をしているか、ですか？ 帰宅の儀式ですよ。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「地下室？ いいえ、家とは、もちろんあなたのことです……私の最愛の、肉体と魂の帰属❤️」

start_fixing:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ああ、%CALLNAME%、手伝っていただけますか？」
    # CFLAGNAME:6 = 身長
    - if: era.get('cflag:0:6') > era.get('cflag:119:6')
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「はい、支えてください……この梯子、少し揺れますね……面目ありません。身長が足りず、こんな醜態をお見せして。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふぅ……はい、ありがとうございました。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「何をしているか？ 扉に新しい錠を付けているだけです……ご協力、感謝します。」
    -
    - ……知らなければ、%SEX%を手伝わなかったのに……

out:
  sync: true
  lines:
    - %CHARA% には他の用事があり、そろそろ出ていく……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ごめんなさい、%CALLNAME%……先に出なければなりません。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「悩みがあるなら分かち合える、ですか……？ あなたをここに閉じ込めている私が、それでも助けたいとおっしゃるのですか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「お人好しですね……でも、結構です。あなたはここにいてくれればいい。私唯一の『帰る場所』でいてくれることこそ、最大の助けなのですから。」

ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「どうして、あなたを引き止める必要があるでしょう？」
  -
  - よかった。%SEX%は承諾した。
  - 有頂天の %YOU% は、%SEX%が気が変わる前にと出口へ向かう。
  - だが……
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ああ、%CALLNAME%、少し待ってください。」
  -
  - 出たい。
  - 早く外の陽を見たい。
  - その願いのすべてが………突然硬直した両脚によって、空想に変わった。
  -
  - %CHARA% はそばへ来て、%YOU% の襟を整え、自分で皺になった衣の端をひとつずつ直し、この数日室内に閉じ込められて付いた埃を払う。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「外は虫が多いです。%CALLNAME% は出てから、どうか気をつけて……二度と、虫たちに纏わりつかれないように。」
  -
  - 「二度」纏わりつかれた先は、何か。
  - 薄い笑みの口角と、笑っていない瞳を見れば、答えは明白だ。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「整えました、%CALLNAME%……どうぞ、続けてください。」
  -
  - 許しの言葉が出たあと、身体は再び動けるようになった。
  - %YOU% は再び出口へ向かう……今度は、慌てていない。
  - 地下室を出ても、%YOU% の心は %CHARA% の支配から逃げられない。
  - その刻印は、深く %YOU% の心に焼き付いているかのようだ。

ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「どうして、あなたを引き止める必要があるでしょう？」
  -
  - よかった。%SEX%は承諾した。
  - だが、扉に近づくほど、いつも傍らにあった香りが薄れ、身体は苦しくなる。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あら、戻ってこられましたか？ やはり……私のそばのほうが、あなたに合っているのでしょう？」
  -
  - %YOU% はもう %CHARA% から離れられない——それを証明するためだけに、%YOU% を去らせたかのようだ。
  - 地下室の支配者は、余裕のある笑みを浮かべた

ask_time:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「今の %CALLNAME% の匂い、とても気に入っています。」
  - 問いに答えない %CHARA% は、%YOU% の手首に鼻を寄せる。そこから、いちばん濃い香りが立ち上っている。
  - ——%CHARA% だけのものだ。
