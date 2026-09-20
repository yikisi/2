# @file スイープトウショウ - 恋慕
# @author アグネスデジタル会社
# @author Claude (翻訳)

# 発生条件: 恋慕49 → 50（ときめき → 愛欲）
49:
  title: ひとつの厄介ごと
  lines:
    - 平凡な午後。またしても、よく分からない理由で、%CHARA%と街を歩いていた
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！ ちょっと待って、あれ、あれ——！！」
    - 突然立ち止まり、路肩の何かを見る
    - 視線を追うと——
    -
    - 路肩のカップルカフェの看板に、ぬいぐるみプレゼントの文字が出ている
    - %CHARA%は、そのぬいぐるみをじっと見つめている
    - どうやら、ずいぶん欲しそうだ
    -
    - acc: 1
      content: 「スイープがそんなに欲しいなら、恋人のふりして入るか……？」
    - 実現しそうにない案を、つい口に出した
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだ。面倒でしょ。」
    - ほとんど考える間もなく、そう返して振り向き、露骨に嫌そうな顔……
    -
    - そもそも口だけだったのに、どうしてすぐそんな返事になるんだ……
    - そうだ！ たしかに面倒だ！
    - その答えを聞いて、%YOU%もそう思う。
    -
    - acc: 1
      key: update
      content: （我慢すれば、%SEX%は少し喜ぶかもしれない……）（関係を進める）
      comment:
        - fontWeight: bold
          fontSize: 0.8rem
          content: 【好印象にはならないかも！】
      lines:
        - （面倒だけど……）
        - そう思いながら
        -
        - 「でも、これしかないだろ……」
        - とにかく、%CHARA%にそう言った
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……で、入れば絶対買えるって、自信あるの？」
        - %YOU%がそう言い切ると、少なくとも%YOU%の言い分には、少し興味を示した
        -
        - acc: 1
          content: 「%CALLNAME%の名にかけて、保証する。」
        - %YOU%はそう答える
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ふん。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「手、つなぎなさい。」
        - %CHARA%が%YOU%に片手を差し出す
        -
        - %YOU%は少し迷いながら、その手に重ねた
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……で、わたしになんて呼ばせたいの？」
        - 少しだけ形になった問いを投げて、%YOU%の手を引き、ゆっくり店へ歩き出す
        -
        - acc: 1
          content: 「それっぽくするなら——」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ちがう、あなたが決めるんじゃない。」
        - すぐ%YOU%の発言を遮る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なんて呼ぶか、わたしが考えるだけ。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%、%CALLNAME%、%CALLNAME%……だめ、頭のなか%CALLNAME%しか出てこない……」
        - ひとりごとを始めている
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うるさい。呼ばない。入る。」
        -
        - %CHARA%と一緒にカフェへ入り、注文した
        - ほどなく、スイーツセットが運ばれてくる
        - パフェ四杯、ケーキ二皿。%YOU%と%CHARA%に均等に分けられた
        -
        - ところがすぐに、%CHARA%は%YOU%の前の、本来「あなたのもの」であるはずのスイーツに手を伸ばし始める
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ねえ、%CALLNAME%、これ、わたしがもらう。」
        - 予告だけして、当たり前のように%YOU%のスイーツを持っていく
        - パフェ一杯のあと、ケーキまで
        -
        - そして……%YOU%の前に、%SEX%が二品持っていったあとも、最後のご褒美として楽しむつもりで残していた、最後の一杯
        - 惜しいが、この子を相手にするなら、目をつぶるほかない……
        -
        - ところが意外なことに、カップに手を置いたまま、%CHARA%はすぐ最後の一杯まで持っていかない
        - なぜかカップから目を外し、%YOU%の顔を見る
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - 黙ったまま、%YOU%が仕方なく見返す目を見つめている
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……あなた、文句ないの？」
        - 意外なほど、声が柔らかい
        -
        - この問いには、用意があった——
        - acc: 1
          content: 「文句はない。僕は主人の%CALLNAME%だから。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ふん。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「そうよ。%CALLNAME%はわたしのもの。だから%CALLNAME%の物も、わたしのもの。」
        - やっと自分でも納得できる理由が見つかったのか、%CHARA%は少し安心して、そのパフェも自分のそばへ置く
        - それから、%SEX%自身の分を食べ始める
        -
        - だがすぐ、%CHARA%の食べる速度がまた落ち、スプーンを途中まで上げたまま、突然止まる
        - %SEX%は顔を上げ、することがなく、ただ%SEX%が食べるのを見ている%YOU%を、また見る
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……あなた、本当に文句ないの？」
        - なぜか、また同じことを聞いてくる
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わたしが、あなたの物を奪って食べてるのに。」
        -
        - この問いには、こう書いてあった——
        - acc: 1
          content: 「文句はない。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Arborvitae★Dogwood、言いなさい。」
        - %CHARA%は杖を取り出し、優しく%YOU%へ向ける
        -
        - acc: 1
          content: 「文句はない。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「LemonBlossom★Diphylleia、言いなさい。」
        - %CHARA%はまた杖を軽く一振りし、声は落ち着いて、確信に満ちている
        -
        - acc: 1
          content: 「文句はない。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「Daisy★Diphylleia、言いなさい。」
        - %CHARA%は、ただそう言い続ける
        -
        - ……やはり、用意の外だった。
        - 本当に、胸のうちを出すなら——
        - acc: 1
          content: 「……本当に、全部言っていいのか？」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「言わないなら、子犬。」
        - %SEX%の許しが出た。なら——
        -
        - 「認めよう。僕は%UMA%のことは、それなりに分かっているつもりだ」
        - 「%UMA%%MOHOSHOJO%だって、ちゃんと『仕える』ことはできると思ってた」
        -
        - 「でも、こんな『主人』に出会うとは、思ってもみなかった」
        - 「出会った初日から、ずっと『要求』ばかり」
        - 「『部下』への『ご褒美』だって、一年かけてもほとんど果たされない」
        -
        - 「今日みたいに、『%CALLNAME%』の気を引いて、スイーツを目の前に置いて、食べさせない」
        - 「まとめるなら、こうだ——」
        -
        - 「天才%MOHOSHOJO%sweepyは、いつだって自分勝手で、『%CALLNAME%』の気持ちなんてお構いなし——」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「うるさいうるさいうるさい！！ いつ自分がそんなに自分勝手で、%CALLNAME%の気持ちを無視したっていうの！？？」
        - 怒りなのか羞恥なのか、顔を赤くして、%CHARA%は%YOU%の言葉を遮る
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「わたしが食べさせてあげる！ 断るんじゃないわよ！ 主人の恩恵だと思って、ありがたくいただきなさい！！」
        -
        - 慌てて自分のカップからパフェを一杯すくい、気が進むのか全く進まないのか分からないまま、%YOU%の口元へ伸ばす
        - %CHARA%は、真っ赤な顔で牙を剥くように%YOU%を見ている
        -
        - こうして%CHARA%の強制給餌のもと、いつの間にか、%SEX%自身の一杯は全部%YOU%の口へ入っていた
        - それからまた一杯持ってきて、%YOU%に早く食べろと急かしながら、クリームとケーキ、果物の混ざった味を%YOU%がゆっくり味わうのを待っている
        - パフェ三杯とケーキ一皿を食べさせ終えてから、何食わぬ顔で、さっき%YOU%が使ったスプーンを持ったまま
        - 黙って、何もなかったように、残りのケーキとパフェを食べ始める
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ここ、思ってたよりずっといいわ。」
        - 食べ終わる頃、%CHARA%はまたゆっくり顔を上げて%YOU%を見、何気なくそう言う
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……次、またスイーツ食べたくなったり、変なこと言いたくなったりしたら、わたしを呼んでも、いいけど。」
        - %YOU%を見ているのに、なぜかカップの底に残ったスイーツを、ずっとかき混ぜている
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なに？ もうここ、来たくないの？」
        - %YOU%がそれ以上反応しないのを見て、%CHARA%はすぐ続ける
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「なら場所を変えて、ここよりいい店を探せばいい。」
        -
        - どうして、必ず%CHARA%をまたこういう店へ連れてくる話になったのか……
        - ともかく、%CHARA%がとりわけ気に入ったぬいぐるみは、ちゃんと手に入った
    - acc: 2
      content: （いやだ。この子と、そういう話で付き合うのは絶対にいやだ。）（まだ進めない）
      lines:
        - （どう考えても、面倒だ……！）
        - そう思いながら
        - acc: 1
          content: 「ほかに、手に入れる方法があるかも……？」
        - さっき自分から出した議題を言葉でずらし、別の満足の仕方を探す
        -
        - こうして、そばの小さな%UMA%を連れ、たった一つのぬいぐるみのための宝探しが始まった
        -
        - まずは、手がかりを探すべきだろう
        -


49_reject:
  -
  - このあと、%CHARA%を連れて——
  - （探索して情報を集めよう！）（情報収集 %INFO_COUNT%/3）
  -
  - if: '!d.come[1]'
    acc: 1
    content: （土手へ行こう）
    lines:
      - %CHARA%と一緒に土手へ行った
      - random: true
        lines:
          - 土手を歩きながら、たまに通行人へ声をかける
          - color: %COLOR_20%
            content:
              - fontWeight: bold
                content: %SKY%
              - 「ふえぇ～トレーナーさん、通りすがりの%UMA%を捕まえて、いきなり聞き込み？」
          - color: %COLOR_20%
            content:
              - fontWeight: bold
                content: %SKY%
              - 「青ちゃん、知らないけど……えっ、ちがうちがう！ 青ちゃん知ってる知ってる！ 落ち込まないで、青ちゃんだって少しは聞いてるよ！」
          - %CHARA%がかすかに落ち込んだ気配を見せたところで、通りすがりの%UMA%、セイウンスカイが、すぐ分かる範囲の情報を出し始めた
      - random: true
        lines:
          - 土手で見物客を呼び集め、輪になって手品を見せる
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「でも！ 魔法巡業だって、ただ働きじゃないの！」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「知ってるなら、天才%MOHOSHOJO%sweepyへ、いちばん貴重な魔法の情報を献上しなさい——！」
          - 見物客は喝采し、話し、なかには本当に使える話をくれる者もいた。%YOU%は、%CHARA%がいつ手品の道具を用意したのか、ただ驚いていた
  - if: '!d.come[2]'
    acc: 2
    content: （商店街へ行こう）
    lines:
      - %CHARA%と一緒に商店街へ行った
      - 商店街で店主を一軒ずつ尋ね、そのあと、路上で熱心な通行人に出会う
      - random: true
        lines:
          - color: %COLOR_60%
            content:
              - fontWeight: bold
                content: %NATURE%
              - 「あはは……あたしのほうは、最近この商店街のみんなが、そういうぬいぐるみを仕入れる話、してなかったかな」
          - color: %COLOR_60%
            content:
              - fontWeight: bold
                content: %NATURE%
              - 「ていうか、なんで商店街に来るたびに、助けを求められるんだろ……」
          - この商店街にはなさそうだが、ほかの地区の店では売っているらしい
      - random: true
        lines:
          - color: %COLOR_52%
            content:
              - fontWeight: bold
                content: %URARA%
              - 「え？ ぬいぐるみ？ こ——んな感じの？」
          - color: %COLOR_52%
            content:
              - fontWeight: bold
                content: %URARA%
              - 「ウララ、見たことないけど、商店街のおねえちゃんたちが、これの話してたの、覚えてる！」
          - ピンク髪の%UMA%の助けで、熱心な店主から、ほかの地区の店で売っているかもしれないと聞いた
  - if: '!d.come[3]'
    acc: 3
    content: （神社へ行こう）
    lines:
      - %CHARA%と一緒に神社へ急いだ
      - 神社で巫女に、関連の景品がないか尋ねる
      - color: %COLOR_56%
        content:
          - fontWeight: bold
            content: %KITARU%
          - 「おお！ 具体的なお品の祈願ですね！」
      - color: %COLOR_56%
        content:
          - fontWeight: bold
            content: %KITARU%
          - 「そういうぬいぐるみ、まったく聞いたことないです！ でも、運勢も神様も、探しているお二人の味方になるよう、できるだけ祈りますね！」
      - 神社側に関連の景品はないと分かったあと、巫女の祝福を受けた
  - if: '!d.come[4]'
    acc: 4
    content: （ショッピングモールへ行こう）
    lines:
      - %CHARA%と一緒にショッピングモールを歩き始めた
      - ショッピングモールのぬいぐるみ売り場で、きわめて個人的な市場調査をする
      - color: %COLOR_38%
        content:
          - fontWeight: bold
            content: %CURREN%
          - 「あっ！ そこのト・レ・ー・ナ・ー・さん——カレンの手伝い、いる！？」
      - color: %COLOR_38%
        content:
          - fontWeight: bold
            content: %CURREN%
          - 「いらない？ うそ～！ カレン、ぜったい解決してあげる♪」
      - 相手は知っているメーカーの動きを、できる限り教えてくれた。ただ、%YOU%は一緒に写真を何枚も撮らされることになった……
  - if: '!d.come[5]'
    acc: 5
    content: （ゲームセンターへ行こう）
    lines:
      - %CHARA%と一緒にゲームセンターへ回った
      - ゲームセンターでクレーンゲームを一台ずつ見たあと、店員と話し始める
      - color: %COLOR_31%
        content:
          - fontWeight: bold
            content: %INES%
          - 「あたしに聞くの？ ぬいぐるみの話、厳密にはあんまり詳しくないんだけど……」
      - color: %COLOR_31%
        content:
          - fontWeight: bold
            content: %INES%
          - 「でも、知ってることは、できるだけ全部教えるね！」
      - 相手はいろいろな場所で聞いたぬいぐるみの話をしてくれた。あのカフェの仕入れ計画の一部まで含まれているらしい
  - if: '!d.come[6]'
    acc: 6
    content: （図書館へ行こう）
    lines:
      - %CHARA%と一緒に学園の図書館へ入った
      - 図書館で新聞を調べながら、関係者にも尋ねる
      - color: %COLOR_47%
        content:
          - fontWeight: bold
            content: %ZOB_ZOY%
          - 「申し訳ありません……図書館には、最近ぬいぐるみの情報は、あまりないようです……」
      - color: %COLOR_47%
        content:
          - fontWeight: bold
            content: %ZOB_ZOY%
          - 「ただ、お店の案内でしたら、以前本で少し——」
      - %ZOB_ZOY%から、本に伝わっているぬいぐるみ店の話をいくつか聞いた
  - if: Number(d.INFO_COUNT) >= 3
    acc: 7
    content: （最終調達地点へ行く）
    lines:
      - %CHARA%と一緒に地下鉄に乗り、日本の別の地方へ向かった
      - 地下鉄を降りたあと、短距離のバスに乗った
      - それから、そう遠くない道を歩き、賑やかではあるが、日本ではごくありふれた商業施設へ着く
      - 商業施設の三階で、ごく普通のぬいぐるみ店を見つけた
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そう、そう——それ、それ——！！」
      - %YOU%が口を開く前に、%CHARA%は待ちきれず店へ走っていく
      - %YOU%も必死に追いかけて店へ入ると、%CHARA%はもう、そのぬいぐるみの棚にほとんど伏せて、目を合わせてしまっていた
      -
      - ここまで手間をかけて、たった一つの小さなぬいぐるみ。意味はあったのか
      - ともかく、%YOU%はそばで耳をピンと立てている小さな%UMA%を見ていた。帰り道、%SEX%はずっとその小さなぬいぐるみをいじっている


# 発生条件: 恋慕74 → 75（愛欲 → 熱恋）
74:
  title: 一度の許し
  lines:
    - 前回、一緒にスイーツ店へ行ってから、%CHARA%の妙な振る舞いが、なぜか増えていく
    - まるで、こういうことが——
    - トレーニングが終わり、帰ろうとしたとき
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ、%CALLNAME%！」
    - そう呼び止めて
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「疲れた。おんぶ。」
    - acc: 1
      content: 「でも……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「やだやだ！ おんぶして帰って！ %CALLNAME%、命令——」
    - %SEX%の大騒ぎに、%YOU%は仕方なく%SEX%をおんぶして目的地まで行った
    -
    - ……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おんぶ！」
    - 二度目
    -
    - ……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「おんぶ！」
    - 三度目
    -
    - ……
    -
    - また新しい一日。帰ろうとしたとき——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ねえ！ %CALLNAME%。」
    - また呼び止められた
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「疲れた。」
    -
    - ……どうやら、見慣れた展開だ
    - いつものように、おんぶして帰れる準備をしておけばいい。%YOU%はそう思う
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……でも、おんぶはいや。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……抱いて。」
    - 予想外の指示が出た
    -
    - acc: 1
      content: 「抱く……？」
    - %YOU%はただ首を傾げる
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そうよ、抱いて。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほら、片手は背中から回して、片手は腿の下から支える、あのやつ」
    - すぐ説明が来る。はっきりしているが、少し驚く
    -
    - acc: 1
      content: 「お姫様抱っこ……？」
    - 当たっているかどうかは別として、%YOU%の頭に最初に浮かんだ言葉がそれだった
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『お姫様抱っこ』？……どうして%CALLNAME%の口から出ると、そんなに変なの！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ちがうちがう！ 主人は今の、言ってない——主人は言ったの！ なに！？ 抱いて帰ればいいだけでしょ？！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Amaranth★Heliotrope！ %CALLNAME%、命令する。今すぐ、直ちに、ただちに——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そのいわゆる『お姫様抱っこ』で、主人を抱いて帰りなさい！！」
    - なぜか急に、ぷくれた顔……
    -
    - その姿勢で間違いないと分かった以上、%YOU%はしゃがみ、両腕を出して受け止める準備をする
    - %CHARA%は、ほとんど迷わず%YOU%の両腕へ飛び乗った
    - 片方の腕を%YOU%の首の後ろへかけ、もう片方の腕も続いて回す
    - こうして%YOU%は片方の腕で%CHARA%の背を支え、もう片方を太腿の後ろから回す
    - %SEX%自身の両腕の引っかかりもあって、%YOU%は%CHARA%をそっと持ち上げた
    -
    - acc: 1
      content: 「で、今日はどこへ……」
    - %YOU%はただそう言った
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どこ？ 休憩室でもどこでも勝手にして！ 主人に休む場所があればいいの！」
    - 考える間もなく答える
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「どうせ、主人が眠ったあと、起こしさえしなければ——」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「『自分勝手』だの『頭おかしい』だの、主人にぶちまけたいこと全部」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「わたしをどんな姿にしても、不問にしてあげる！」
    - 続けて、ひどく妙な発言が飛び出す……
    -
    - 小さな%UMA%は%YOU%の腕のなかで静かにしている。ただ%YOU%の顔を見つめている
    - %YOU%はできるだけ%SEX%と意味のない目を合わせないよう、進む道の前方を見る
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なに%CALLNAME%！ なんでそんなに揺れるの、気持ち悪い！！」
    - 歩いている途中で、また急に文句を言い出す
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もういい。自分でしっかり掴まる。」
    - 腕を強くするのではなく、尻尾が巻きついてきた
    - %CHARA%の尻尾がすぐ%YOU%の腕に絡み、強く巻きついて支えになる……
    -
    - こうして「支えを増やした」状態で、少なくとも%CHARA%が余計なことを言わないまま、休憩室へ入れた
    - それから、%SEX%をそっと下ろす
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これから……主人は休むわ！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「だって……今日は特別な日だから、主人はぐっすり眠るの！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%には主人を守る役目があるんだから、今日は、ぜ～ったい簡単に離れちゃだめ！ ここにいなさい！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「主人がぐっすり眠ってて……『いたずら』されても……全然気づかない！ なんてことになったら困るでしょ……ね！？」
    - ずいぶん強気に言っているのに、なぜか頬がかすかに赤くなっている……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「もういい、主人は先に着替える！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「主人は言ったことを守るから……気が変わる前に、%CALLNAME%は自分のすることを決めなさい！！」
    -
    - %CHARA%は妙な理由で、%YOU%をそっと部屋の外へ押し出した……
    - で、「着替える」服はどこから出したんだ？
    - %CHARA%がなぜ休憩室にパジャマを置いていたにせよ、今%YOU%が考えるべきことではないのかもしれない……
    -
    - かなり経ってから、休憩室の扉をそっと叩く
    - 反応がないのを確かめて、できるだけ音を立てずに開けた
    -
    - %CHARA%はもう静かにベッドへ横になり、布団をかぶっている
    - かすかな呼吸に合わせて、体にかかった布団が小さく上下する
    - 外からたまにグラウンドの声が聞こえるたび、茶色い耳が小さく震える
    - 閉じた小さな顔のそばに、片手が静かに置かれ、まったく無防備な様子だ
    -
    - さっきの言葉は、どういう意味だったのか。考えるときかもしれない——
    -
    - acc: 1
      key: update
      content: （起きていなければ『いたずら』していい、と言ったなら……）（関係を進める）
      lines:
        - 恨みがあるとまでは言わないが、%SEX%に対して文句がない、とも言い切れない
        - 相手自身も、自分のやり方がどこかおかしいと分かっているなら、今回『許された』機会を逃す手はない
        - そう思い、すぐ『いたずら』の計画を考える
        -
        - acc: 1
          content: そっと布団をはがす
        - %CHARA%は腕で布団を押さえていない。%YOU%が横へゆっくりずらすだけで、%CHARA%の全身はもう布団に隠れていない
        -
        - acc: 1
          content: %CHARA%の服をすべて脱がせる
        - %YOU%はパジャマの必要なボタンを外し、それから一枚ずつ、そっと%CHARA%の衣類をすべて剥いでいく
        -
        - 下の小さな%UMA%は、半覚醒のまま%YOU%の動きに従っているようだ
        - %YOU%はごく楽に、服を%SEX%の体から外した
        -
        - if: era.get('cflag:44:性别') !== 1
          lines:
            - 胸のふくらみ、いつもの細い腰が、そのまま空気に触れている
            - その下の、滑らかな秘裂も、はっきり%YOU%の目の前にある
        -
        - 少し寒いのか、目を閉じた小さな%UMA%は両腕を小さく縮め、頬がかすかに赤い
    - acc: 2
      content: （そばにいてくれないと眠れない、と言ったなら……）（まだ進めない）
      lines:
        - そばにいてほしい、というなら……目的が何であれ、とりあえず字面どおりに従おう
        - こうして、ずっと静かに%CHARA%のそばにいて、携帯で仕事をしながら、ベッド脇の椅子に座っている
        - ゆっくりと、どれだけ経ったのか分からない
        -
        - ……
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ん……ん……」
        - ゆっくり目を開け、片手で目をこすり、まだ眠そうだ
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……%CALLNAME%、ずっとそばで、守ってて……くれたの。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……まさか、また逃げもせず、……」
        - わけの分からない独りごとを言いながら、%CHARA%はベッドに横になったまま体を向け、ただ%YOU%の顔を見ている
        - こうして、微妙な見つめ合いのなかで沈黙する
        -
        - acc: 1
          content: 「で……これから、何を……？」
        - %YOU%が先に口を開いた
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ああ、何するか。」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「思いついた。」
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「これから、主人は街で『人の心が分からない子犬』を探すの！ %CALLNAME%もついてきなさい！」
        - 急に目が鋭くなり、声の大きさも上がる
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「はいはい！ その前に、主人は今着替える！ %CALLNAME%退散！！！」
        - 突然起き上がってベッドから飛び下り、%CHARA%は%YOU%をそっと扉のほうへ押す
        - それから、そのまま扉を閉めた
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……ばか……なに……」
        - なぜか、なかからそんな声が聞こえた


74_accept_pet:
  -
  - acc: 1
    content: 頬を撫でる
    lines:
      - %YOU%は手を、そっと%CHARA%の温かい頬へ置く
      - 撫でるたび、弾力のある頬が%YOU%の指に合わせて動く
      -
      - 軽く摘まむと、ほのかに熱を持った頬が、指先にひどく柔らかい感触を残す
      - 相手は熟睡しているはずなのに、なぜか眉を寄せ、一瞬、戸惑いと羞恥が混ざった顔をしたように見えた。気のせいだろう
  - if: era.get('cflag:44:性别') !== 1
    acc: 2
    content: 胸を揉む
    lines:
      - %YOU%は手を、そっと%CHARA%の小さな胸へ置き、揉み始める
      - if: (t = era.get('talent:44:淫乳')) < 0 # 鈍感
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「んぅ❤ んん……」
          - %YOU%が軽く力を入れるたび、%CHARA%は小さな喉声を漏らし、両腕がまた少し縮む
      - if: t === 0 # 通常
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「はぁ❤ んっ❤ んぅ……」
          - %YOU%が軽く力を入れるたび、%CHARA%は抑えきれない甘い声を漏らし、両頬がはっきり赤くなる
      - if: t > 0 # 敏感
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「はぁ❤ はぁ❤！ んっ❤ んん……」
          - %YOU%が軽く力を入れただけで、%CHARA%はすぐ抑えきれない甘い声を上げる
          - そのあとの揉みごとに、%CHARA%は喉の奥から、気持ちよさそうな喉声をこぼさずにはいられない
  - if: era.get('cflag:44:性别') !== 1
    acc: 3
    content: 腰とお腹を撫でる
    lines:
      - if: (t = era.get('cflag:44:妊娠阶段')) >> 3 === 0 # 未妊娠〜妊娠初期
        lines:
          - %CHARA%の腰とお腹を、丁寧に撫でる
          - 肋骨の下から、少しずつ%CHARA%の腹の滑らかな感触を確かめていく
          -
          - 下腹の特定の場所を撫でたとき、そして「もう少しで」その下のある場所へ滑りそうになったとき
          - %CHARA%の両脚は、抑えきれないほど閉じたがっている気配を見せ、顔にはかすかに潮紅が差す
      - if: (t & (1 << 3)) > 0 # 安定期
        lines:
          - %CHARA%の腰とお腹を、丁寧に撫でる
          - 肋骨の下から、腰の脇を伝い、少しずつ%CHARA%の腰腹の滑らかな感触を確かめていく
          -
          - 最後は、かすかに膨らんだ下腹へ手を置いたまま、感触を確かめる
          - 弱いが、たしかに規則正しい心拍が、なかから伝わってくる
      - if: (t >> 4) > 0 # 妊娠後期
        lines:
          - %CHARA%の腰とお腹を、丁寧に撫でる
          - 肋骨の下から、腰の脇を伝い、少しずつ%CHARA%の腰腹の滑らかな感触を確かめていく
          -
          - 最後は、高く膨らんだ下腹へ手を置いたまま、感触を確かめる
          - なかの小さな命は、父親が来たと気づいたように、そっと、規則正しく%YOU%の手に応えている
  - if: era.get('cflag:44:性别') !== 1
    acc: 4
    content: 秘部を探る
    lines:
      - 体の側面から、肋骨から腰へ、曲線を伝ってゆっくり滑り落ちる
      - やがて、太腿と下腹のあいだの隙間を伝い、「あそこ」へたどり着く
      -
      - 「あそこ」の周りを撫で、刺激する
      - それから、そっと、柔らかく指を「隙間」へ入れる
      - 正確には、「隙間」のなかの、小さな穴へ滑り込ませた
      -
      - if: (t = era.get('talent:44:淫壶')) < 0 # 鈍感
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「んんっ！ んっ❤ ん……」
          - 入れた瞬間、反射のように反応する
          - 完全に滑らかではないが、さっき外側を刺激したせいで、すでに少し湿っている
          - この柔らかい場所で指を動かし続け、たまに、指のリズムに合わせて返ってくる体の微かな震えを感じる
      - if: t === 0 # 通常
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「んん❤！ んっ……んぅ❤ ん……！」
          - 入れた瞬間、反射のように反応する
          - 通路はすっかり濡れていて、わずかに粘る液が、外へ流れ出そうとしている
          - この柔らかい場所で指を動かし続け、耳元に時おり漏れる気持ちよさそうな喉声を聞き、指のリズムに合わせて返ってくる体の震えを感じる
      - if: t > 0 # 敏感
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「はっ！ はぁ……❤！ んっ❤——！ んっ……ん……んぅ❤！」
          - 入れた瞬間、反射のように反応する
          - 指はわずかに粘る液にまみれて、すぐ外へ溢れそうだ
          - 指を動かし続けるあいだ、その体も気持ちよさそうな吐息を漏らし、リズムに合わせて抑えきれず震えている
  - acc: 5
    content: （見物はここまで）
    lines:
      - いたずらは、ここまでにしたほうがいいのかもしれない
      - 続けてしばらく、%CHARA%の普段は人に見せない場所を、よく眺めた
      - そのあと、%YOU%は黙って%SEX%に服を着せ直し、衣類を整える
      - 服の端を軽く引いたとき、指が%CHARA%の下腹と太腿のあいだの隙間に少し触れたとしても
      - 下の小さな%UMA%は、まだとても従順な様子だ
      -
      - 休憩室を出る準備をし、メモを残す
      - %YOU%は扉へ向かい、休む空間をきちんと%CHARA%に残した
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……んっ……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「つぎ……ベッドで……ぜったい……」
      - 去るとき、後ろからそんな声が聞こえた気がした


89_disabled:
  - fontWeight: bold
    color: %COLOR%
    content: 魔法の紙飛行機#1「『ある出来事』のあとでなければ、関係は先へ進まない」


# 発生条件: 恋慕89 → 90（熱恋 → 良縁）。かつ{魔法の夢}の後に発生
89:
  title: ひとつの茶番
  lines:
    - またしても普通で、静かで、何もない週末の昼、%CHARA%が%YOU%のオフィスへ来た
    - だが、%YOU%を外へ探検に出そうとはせず、そばに静かに座り、トレーナー室の童話を読み始める
    -
    - 窓の外は陽がよく、微風が暑さを散らし、温かな心地よさだけが残る
    - この静けさのなかで、何かが足りない気がする
    -


89_loop:
  -
  - いったい……何が足りないのか？
  - acc: 1
    content: （トレーニング）
    lines:
      - 大事なことではあるが、今日は%UMA%たちを勘弁してやろう
  - acc: 2
    content: （沈黙の日）
    lines:
      - 沈黙は要らない。それに、今日はまだその日ではない。
  - acc: 3
    content: （魔法探検）
    lines:
      - 静けさと何もない日常は、ただ『魔法』を持たない者の目に映る世界なのかもしれない
      - そして『魔法探検』こそ、『魔法』の具体的な現れのひとつだ
      -


89_marry:
  - そばで魔法の本を読んでいる%CHARA%を呼び、言った——
  - acc: 1
    content: 「主人、すごい案を思いついた」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……？」
  - 突然立ち上がって決断した%YOU%を見て、目の前の小さな%UMA%は、かえって戸惑っている
  - こうして、%YOU%は%SEX%を連れて校門を出た——
  -
  - acc: 1
    content: 「『地図』の指示どおり、ここが『巨人の庭園』だ」
  - 観光パンフレットから破った一枚を頼りに、%YOU%は%CHARA%を、人気のない公園へ連れてきた
  - 周りにはブランコ、滑り台、それにスプリング遊具がいくつか
  -
  - 「指示どおり……%CALLNAME%は、主人より先に、この『試練』へ挑まないといけない」
  - こうして%CHARA%の前で、%YOU%はそのスプリング遊具に座った
  - それから、必死に揺すり始める——
  -
  - 「ひれ伏せ、妖獣！ 我が%CALLNAME%となれ……！」
  -
  - %CHARA%は一瞬、%YOU%の行動に驚いたように目を見開き、%YOU%を見る
  - だがすぐ、目がまたきらきら輝き始める
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……なによ%CALLNAME%！」
  - そう言いながら
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「こういう挑戦、%CALLNAME%が先陣を切るのはいいけど、主人が助言しちゃいけない理由にはならないわ！」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「見てなさい%CALLNAME%！ こっちの試練は、こうやって突破するの——」
  - %CHARA%は、そのブランコのそばへ行く
  -
  - こうして%CHARA%はブランコに座り、必死に揺れ始める——
  -
  - acc: 1
    content: 「次は……『地図』の指示どおり、『時の迷宮』だ」
  - %YOU%は目の前の蚤の市を指して、%CHARA%に言う
  - 「分かる……ここには『平凡の呪い』をかけられた宝物がある。次の旅を切り開くために使える……」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふん！ そんなの簡単よ！」
  - 自信たっぷりに言う
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「天才%MOHOSHOJO%なら、二度見れば見つかる！」
  -
  - %CHARA%は楽しそうに駆け回り、あれを見て、これを見る
  - 最後にしゃがみ、ある露店の——
  - 小さなガラスのビー玉を拾い上げた
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふんふん～！ %CALLNAME%！ 主人、見つけた！ これが伝説の魔法の神器よ！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「どんな相手でも、小さくして大きく勝ち、パチンパチンと最終の秘宝を奪ってくれるんだから！」
  - %CHARA%はそのビー玉を高く掲げ、目はビー玉のように透き通っている——
  -
  - acc: 1
    content: 「最後に、『巨人』の体内には『宝』があるそうだ——」
  - 電車に乗り、田舎の風車の前へ来た
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「行くわよ%CALLNAME%！ 魔法の勝利のために！！！」
  - 小さな%UMA%は%YOU%の背に乗り、杖で遠くの風車を指す
  - 二人で声を合わせて叫び、風車の扉へ突入した
  -
  - 残念ながら、飾り用の風車の内部に伝説の魔法の聖物はなく、あったのは外国の歴史技術の解説文だけだった
  - ほどなく、%YOU%と%CHARA%は開館時間外に展示館へ入ったせいで、風車の管理人に外へ出された
  -
  - 時間はいつも早く過ぎ、気づくと黄昏だった
  - 今の%YOU%は、%CHARA%と並んでトレセン学園へ戻る道を歩いている
  -
  - このとき、%YOU%の決断は——
  - acc: 1
    key: update
    content: （『宝物』を捧げる）（関係を進める）
    lines:
      - もう、そのときなのかもしれない
      - %YOU%はポケットに触れる。たしかに、小さな箱がある
      -
      - acc: 1
        content: （ポケットから出し、掌の中央へ乗せる）
      -
      - 「主人、実は、こんな宝物を見つけた。急なことで、すぐ報告できなかった」
      - 「これで、僕たちの絆をもっと強くできて、主人の魔力も増すそうだ」
      -
      - %YOU%は跪き、手のなかの赤い箱をゆっくり開ける
      - なかに現れたのは、輝くダイヤモンドの指輪。魔法が宿っているように見える
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わ——」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふんふん～さすがわたしの%CALLNAME%！ こんな宝物まで見つけられるなんて！」
      - %CHARA%はとても嬉しそうで、手を伸ばして指輪を取ろうとする——
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……！」
      - それから急に何か気づき、両頬がさっと真っ赤になる
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「つか……%CALLNAME%——！ あ、あなた、こんなもの、どこで見つけたの！！！」
      - どもりながら言っている。真っ当な口調なのに、なぜか体が少し震えている
      -
      - acc: 1
        content: 「実を言うと、路肩の魔法店で……何日も観察して、この宝物だと確信した」
      - 「よければ、主人に受け取ってほしい」
      - そう言った
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あなた……あなた！！！」
      - 震えがさらにはっきりして、視線まで落ち着かない
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……ふん！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%がそんなに主人を気にするなら、自分で主人に付けなさい！」
      - 視線を横へ逸らし、いかにも気が進まないように左手を%YOU%の前へ出し、時おり盗み見る
      -
      - 帰り道、%YOU%はこっそり、両頬を真っ赤にして薬指の指輪を撫でる%CHARA%を見ていた
  - acc: 2
    content: （凱旋して帰る）（まだ進めない）
    lines:
      - 一日遊んだあとなら、もう帰るときなのかもしれない
      - こうして%YOU%は小さな%UMA%をおんぶしたまま、道を歩き続ける
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ねえ！ %CALLNAME%——」
      - 急に何かを見つける
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あれ、食べたい。」
      -
      - 背中の%CHARA%が横を指す。りんご飴の店だ
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「下ろして。二つ買う。」
      -
      - こうして%YOU%が少ししゃがむと、小さな%UMA%はすぐ%YOU%の背から下り、その露店へ走っていく
      - ほどなく、片手に一本ずつりんご飴を持って戻ってきた
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一本あげる。あなたは%CALLNAME%なんだから、断るんじゃない。食べなさい。」
      - 右手のりんご飴を%YOU%へ渡す。口調は冷たいのに、なぜか少し優しい
      -
      - %YOU%は、そのりんご飴を受け取っただけだった
      -
      - そのあと、%YOU%と%CHARA%は並んで歩き、一緒にりんご飴を食べながら、ゆっくりトレセン学園へ戻った


# 恋慕75以上、他者との性行為を3回以上見つかったあと、ターン経過のランダムイベントとして発生
get_cuckold:
  title: ないことと、じゃないこと
  lines:
    - %YOU%がトレセンにいる日が増えるにつれ、%YOU%の人間関係は少しずつ複雑になっていく
    - さまざまな性格のウマ%UMA%たちと関係を結び、それも、平凡な関係だけではない——
    -
    - その入り組んだ関係のなかで、誤解であれ事実であれ、「見つかる」ことは必ず起きる
    - たいてい、その「発覚」はとても微妙か、かなり厳しい結果をもたらす
    - だが%CHARA%については、%YOU%はそうした通念と、微妙にずれた振る舞いを見ている気がする
    -
    - 今日まで、油断や偶然で、%CHARA%はすでに何度も%YOU%の「裏の行い」を見ている
    - 別の%UMA%なら、怒るだけでなく、極端なことを始めかねない
    - だが%CHARA%は、少し普通ではない振る舞いを見せている
    - %CHARA%に見つかるたび、少しわがままは言うが、それ以上の要求はほとんど出てこない
    -
    - いったい、なぜだろう……？
    - %SEX%なら……直接聞いても、問題ないかもしれない……？
    - 平凡な午後。トレーニングのあと、自分の身の安全への気遣いも少し交えて——
    -
    - 「君は……怒らないのか？」
    - %CHARA%の前で、慎重に切り出した
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……怒る？ 何に怒るの？」
    - 少し困惑した様子で、目の前の小さな%UMA%は紫の瞳で%YOU%を見ている
    -
    - acc: 1
      content: 「君に隠れて……ほかの人と付き合ってる……そういうこと。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……なによ、そういう話だったの。」
    - %CHARA%は半ば軽蔑した目で%YOU%を見る
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんなこと、主人が怒る理由にならないわ。」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%ったら、毎日主人の器が狭いことばかり期待してる。」
    - こうして両腕を胸の前で組み、説明を始める——
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「たしかに、sweepy様は前に、%CALLNAME%が主人に隠れてほかの人と付き合うことに、納得できなかった！ 焦った！ ちょっと～だけ不安にもなった！」
    - 立て続けに言っていく
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「でもそれは、%CALLNAME%が家出する！ 迷子になる！ 主人にちゃんと仕えてくれなくなるのが心配だったから！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ぜ～ったい、%CALLNAME%を取られるのが怖い、とかじゃないんだから！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これが、怒らない理由その一！」
    - その一、なのか……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それに、主人がそんなことで怒ったら——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%の伴侶と、区別がつかないじゃない！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「これが、怒らない理由その二！」
    - 自分を伴侶だとは思っていないのか……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ほらほら～ どうせ%CALLNAME%、戻ってきたら主人にすり寄るんでしょ！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なら、主人と一緒に出かければいいじゃない！？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%が外で迷子にならないように、一～瞬だって主人の手を離しちゃだめなんだから！」
    -
    - そのあと、%CHARA%に反論の余地なく手を掴まれ、外を深夜まで付き合わされて、ようやく解放された
