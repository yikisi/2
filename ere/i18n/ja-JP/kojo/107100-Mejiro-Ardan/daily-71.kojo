# @file メジロアルダン - 日常
# @author 洛洛
good_morning:
  sync: true
  lines:
    - if: era.get('love:71') < 75
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「皆さんが夢のために走る姿は、本当に眩しいですね。」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「今日、商店街で何か催しがあるようです。%CALLNAME%、一緒に見に行きませんか？」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ふふ、%CALLNAME%、あなたを見ると、とても安心します。」
        # STATUSNAME:1 = 熬夜
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「夜更かしで遅刻しそうになって、%CALLNAME%を心配させてしまいました。ごめんなさい。」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ごめんなさい、%CALLNAME%。昨夜、歴史の本に夢中になりすぎて、少し遅く寝てしまいました。」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「大変申し訳ありません。昨夜は時間どおり横になりましたが、体調が悪くてよく眠れませんでした。」
    - if: era.get('love:71') >= 75
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「今日も一緒に、私たちの輝きを描きましょう。大好きなあなた🎵」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「こんな静かな夜は、散歩したくなりますね。大好きなあなた、一緒にいてくれますか？」
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「大好きなあなたが朝作ってくれたスープ、とても温かかったです。飲んだら、体の細胞ひとつひとつが歓声を上げているみたい。」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「夜更かしで遅刻してしまいました。大好きなあなた、ごめんなさい。」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「大好きなあなた、ごめんなさい。昨夜また歴史の本に夢中になって、少し遅く寝てしまいました。」
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「昨夜、体調が悪くて、大好きなあなたに苦労をかけてしまいました。昼休み、一緒にお昼寝しませんか？」

select:
  sync: true
  lines:
    # STATUSNAME:10 = 沉睡
    # STATUSNAME:39 = 马跳S
    - if: era.get('status:71:10') === 0 && era.get('status:71:39') === 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            # CFLAGNAME:48 = 育成回合计时
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「ごきげんよう、%CALLNAME%。今日も一緒に頑張りましょう。」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%、今日商店街に新しいカフェができたそうです。トレーニングが終わったら、一緒に味わいに行きましょう。」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「先日、お姉さまと子どものころの写真を見つけました。懐かしいですね。」
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「おはようございます、%CALLNAME%。最近はいかがですか？」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%、しばらくお会いしていませんでしたね。でも、そちらはお元気そうで安心しました。」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%、お久しぶりです。あのときのご支援とお力添え、本当にありがとうございました。」
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「おはようございます、%CALLNAME%。目が覚める紅茶を一杯、お淹れしましょうか？」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%、次のお休みは、メジロ家の避暑地へご一緒しませんか？」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「%CALLNAME%、お疲れのようですね。私がマッサージします。ゆっくり体をほぐしましょう。」
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「大好きなあなた、今朝ごはんは何がいいですか？ 私が用意しますね🎵」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「大好きなあなた、最近お疲れのようですね。はい～ これはあなた専用の膝枕です。私の胸で、ゆっくり休んでくださいね🎵」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「ふふ、大好きなあなたと過ごす毎日が、こんなにも幸せ。あなたと出会えたことこそ、三女神が私にくれたいちばんの祝福です🎵」
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - 「大好きなあなた、そんなに無理をしてはいけませんよ。えい🎵 私だけの、夜更かしお止め法です。」
    - if: era.get('status:71:10') > 0 || era.get('status:71:39') > 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - ソファで眠るアルダンは、麗しく静かな一枚の絵のようで、%YOU%の動きまで優しくなる。
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - 疲れたメジロアルダンが、小さくあくびをした。
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - 疲れすぎて%YOU%に凭れて眠るアルダンは、居場所を見つけた小鳥のようだ。
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - アルダンは休憩室のベッドで、安心して眠っている。

select_in_birthday:
  # 今日はトレーナーの誕生日
  sync: true
  lines:
    - if: era.get('love:71') < 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「お誕生日おめでとうございます～ %CALLNAME%。バースデパーティ、もう用意してあります。」
    - if: era.get('love:71') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「お誕生日おめでとうございます～ %CALLNAME%🎵 バースデパーティは用意してあります。終わったあとは、私たちふたりだけのお祝いもありますよ🎵」

office_study:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「さすがは%CALLNAME%。こんなにわかりやすく説明できるなんて、きっとたくさん努力されてきたのでしょうね。」

talk:
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:71:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なぜか、今ならどこへでも走っていけそう……いいえ、走りたいんです。自分の限界を超えて……！」
  - if: era.get('cflag:71:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「一分、一秒、一瞬……細かな時間に集中できそうな気がします。これなら、きっと……」
  - if: era.get('cflag:71:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「いち、に、さん……ふう。体温も、心拍も、筋肉の調子もいい。では、今日は何をしましょうか？」
  - if: era.get('cflag:71:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「脚の調子が最高です。全力でトレーニングできます……それだけで、とても痛快ですね。」
  - if: era.get('cflag:71:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「何もない一日は、私にとっていちばんの一日……でも『いま』は、もっと高いところへ進まないと。」
  - if: era.get('cflag:71:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「目の前の一瞬を大切に……丁寧に、心を込めてトレーニングしましょう。」
  - if: era.get('cflag:71:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「足が重い……でも、それで落ち込むわけにはいきません。自分を信じる……積み重ねてきた修練を。」
  - if: era.get('cflag:71:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふう……こういう日もありますね。焦らず……お茶を一杯飲んで、力を抜きましょうか？」
  - if: era.get('cflag:71:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……今日の全体を考えると……メニューを、少し調整したほうが……いいかもしれません……」
  - if: era.get('cflag:71:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今の私は、生きた証を残せるでしょうか……いいえ、焦ってはいけません。深呼吸……落ち着いて、深呼吸……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「お屋敷のおばあさまから直伝の手作りお菓子を持ってきました。あの温かな味を、感じていただけたら嬉しいです。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「入院していたころに夢見た勝負服……今こうして着ている……あの日の私に、見せてあげたいです。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「胸のブローチは、父がくれたネックレスを参考にしています……触れていると、安心するんです。」
  # CFLAGNAME:66 = 招募状态
  - if: era.get('cflag:69:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「毎朝%CALL_69%を起こす、そんな平凡な日常……私にとっても、幸せな時間です。」
  - if: era.get('cflag:64:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「さっき、ひまわりの花束を抱えた🎵%CALL_64%に会いました……%SEX%の笑顔は、ひまわりそのものです🎵」
  - if: era.get('cflag:86:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「先日、%CALL_86%の子どものころの写真を見つけました。小さなころからあんなに美しくて……本当に眩しいです。」
  - if: era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ご存知ですか？ %CALL_21%の交渉の仕方……そこから人情の機微が見えます。まるで落語を観ているようです。」
  - if: era.get('cflag:69:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「毎朝%CALL_69%を起こす、そんな平凡な日常……私にとっても、幸せな時間です。」
  - if: era.get('cflag:72:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_72%は綺麗ですね。そうは言っても……ふふ、お友だちのおふたり、もう桜色に頬を染めていますよ。」
  - if: era.get('cflag:6:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_6%が食べる姿は、つい見入ってしまいます。おかげで、私も少し多く食べてしまいました。」
  - if: era.get('cflag:32:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALL_32%と夜のお茶会をしたことがあります。紅茶が光るんです……ふふ、驚く体験でした🎵」

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「贈り物、ありがとうございます。数日うちに、お返しを用意します。楽しみにしていてくださいね🎵」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「私への贈り物ですか？ ありがとう。大切にします。」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふふ、こうして一緒にお料理すると、とても不思議な気分です。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%は中華料理もされるんですか？ あとで教えていただけますか？」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あら～ 大好きなあなたと、もうこんなに息が合うなんて。何十年もの夫婦みたいですね。ふふ🎵」

office_rest:
  - random: true
    lines:
      - 少し眠くて休憩していたら、うっかり眠ってしまった。
      - 顔を上げると、アルダンもソファで眠っている。
      - %YOU%は上着をそっと%SEX%にかけ、風邪をひかないようにする。
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「いかがですか？ 大好きなあなた、気持ちいいですか？」
      - %YOU%はアルダンの膝に横たわり、%SEX%は綿棒で%YOU%の耳を掃除している。
      - 頭に感じる柔らかさと、%SEX%から漂う淡い香りが、%YOU%の神経を刺激する。
      - %SEX%は%YOU%の困りを察すると、悪戯っぽく笑って綿棒を外し、%YOU%の耳にそっと息を吹きかけた。

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「そんな方法もあるんですか？ すごい。」
      - %YOU%のふと思いついたやり方がうまくいき、隣のアルダンは感嘆している。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%と息が合う気がします。この感じ、とてもいいですね。」
      - ゲームにあまり触れてこなかったアルダンが、%YOU%と協力プレイをしているのに、意外と息が合う。

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……私は……証明したい……お姉さまに負けないって！ みんなに見せたいんです。私は、ただの妹じゃない。私自身——メジロアルダンだって！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「自分の限界を破って、まだ見たことのない景色を見たい。私自身の光を、咲かせたいんです！」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふふ、学園のなかで手をつないで、皆さんに見られるなんて。不思議な気分ですね。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%？ 緊張しすぎですよ。さあ～ 一緒に深呼吸して、力を抜きましょう。」

s_r_lunch:
  - random: true
    lines:
      - 今日はアルダンと一緒にお弁当を食べる。アルダンは%YOU%の分も、わざわざ用意してくれていた。
      - 豪華で繊細なお弁当を見て、%YOU%はつい、アルダンは将来いい内助になると漏らす。
      - その言葉に、アルダンは少し体を横に向け、%SEX%の赤い頬を%YOU%に見られないようにする。
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「大好きなあなた、あーん——」
      - 関係を越えてから、ふたりは互いに食べさせるようになった。
      - 食事の時間は以前より少し長くなった。
      - それでも、ふたりともこの時間を大切にしている。

o_r_fishing:
  - random: true
    lines:
      - %YOU%は竿を川へ投げ、魚がかかるのを待つ。%CHARA% はそばに座り、静かに%YOU%に付き添う。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わあ、おめでとうございます、%CALLNAME%。こんなに大きな魚が釣れましたね。」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こうして川辺を散歩する、静かで普通の日常も、私は嬉しいんです。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「川辺の微風が気持ちいいですね。次はここで一緒にジョギングしましょう、%CALLNAME%。」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「頑張って、%CALLNAME%。メダルが足りなくなったら、私の分もありますよ。」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「私のぬいぐるみが欲しいですか？ 私も欲しいです。一緒に頑張りましょう。あなたがそばにいれば、何でもできそうな気がします。」

o_s_drawing:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふふ、何の賞が当たるのかしら🎵」

o_s_ktv:
  - ウイニングライブの練習のため、%YOU%とアルダンはカラオケへ来た。
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「蒼穹を越え、夢は掌に。命のように燃えて、輝け～🎵」
  - %SEX%の美しく柔らかい声に、%YOU%はつい浸り、時間を忘れていく。

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふふ、役者さんの演技が面白いですね。お化けの方も、なかなかのアイデアです。」
      - %YOU%はこのホラー映画の突然の驚きに体を強張らせる。だが隣のアルダンは、とても楽しそうに観ている。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「サスペンス映画ですか？ 知恵比べを見ていると、とても愉快です。たまに主人公に入り込んで、犯人を推理したりもします。」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「恋愛映画ですか？ ふふ🎵 あなたと一緒なら、とても楽しみです。大好きなあなたの、恋についての考え方も、もっとわかりそうです。」
      - アルダンは%YOU%の腕を取り、幸せそうに微笑む。

o_c_pray:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふふ、%CALLNAME%と神社へお祈りに来るなんて。ご家族と来るのとは、まったく違う気分です。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「トレセンの歴史には、怪我や病気で引退したウマ娘がたくさんいて、考えると怖くなります。でも、限られた時間のなかで、私自身の色を刻みたいんです。」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふふ、%CALLNAME%が勧めてくれたお店、とてもいいですね。つい食べすぎてしまいました」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うんうん～ こちらの人参のポタージュ、独特の風味があります。ご馳走さまです、%CALLNAME%。」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「申し訳ありません～ お待たせしました、%CALLNAME%。今日はどこへ行きましょうか？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%はいつも私を助けてくださいます。今度は私にも、%CALLNAME%のためにお手伝いさせてください。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ご家族以外の方と、こうして街を歩くのは初めてです。不思議な気分ですね。」
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - アルダンは%YOU%の腕を取って街を歩く。周囲からさまざまな視線が飛び、%YOU%は少し落ち着かない。だがアルダンは、むしろ嬉しそうに笑っている。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ふふ～ 大好きなあなた🎵 緊張していますか？」
      - 緊張に気づいたのか、アルダンは悪戯っぽく聞いてから、さらに強く抱きついてきた。

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「私のこの装い、いかがでしょう？ %CALLNAME%。」
      - 着替えたアルダンは前へ出て、優雅な立ち姿のまま尋ねる。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あちらの店、割引をしているようですよ？ 一緒に見てみましょう。」

good_night_normal:
  sync: true
  lines:
    - if: era.get('status:71:10') === 0 && era.get('status:71:39') === 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「今日もお疲れさまでした、%CALLNAME%。また明日！」
            - メジロアルダンとの一日のトレーニングを終え、%YOU%は寮の玄関の外に立ち、アルダンが寮へ戻るのを見送る。
            - 微笑んで手を振るメジロアルダンを見て、%YOU%も微笑み、同じ仕草で返す。
        - if: era.get('love:71') >= 75
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「今日もお疲れさまでした、大好きなあなた🎵 マッサージして、力を抜きましょうか？」
            - メジロアルダンとの一日の労を終え、メジロアルダンは%YOU%の後ろに回り、ちょうどいい力で%YOU%の肩を揉み始める。
            - 「ありがとう、アルダン。君も今日は大変だった。あとでこっちが揉むよ。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「では、お願いしますね、大好きなあなた🎵」
    - if: era.get('status:71:10') > 0 || era.get('status:71:39') > 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - if: era.get('status:71:39') === 0
              content: 「今日は%SEX%を、少し頑張りすぎさせてしまったな。」
            - %YOU%はそっと%SEX%の肩を叩く。
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ん……～ あら？ うっかり眠ってしまっていました！」
            - 「今日のトレーニングは終わりだ。お疲れ。送っていくよ。」
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「ありがとうございます、%CALLNAME%。お手数をおかけします。」
            - %YOU%は時おりあくびをするメジロアルダンと%SEX%の寮まで行き、サクラチヨノオーが引き継いだのを見て、安心して帰る。
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('status:71:39') === 0
              content: 「今日もお疲れさま、アルダン」
            - %YOU%のそばで安心して眠るメジロアルダンを見て、%YOU%は小さな声で言う。
            - 「いい夢を。おやすみ」
            - %YOU%は%SEX%が前もって残してくれた場所の隣に横になる。メジロアルダンは%YOU%が横になったのを感じると、すぐ%YOU%を抱きしめた。
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「おやすみなさい。女神さまが私にくれた宝物。」

cl_new_year:
  title: 新年
  lines:
    - 新年の一日。あちこちが祭りの楽しさで溢れている。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、あけましておめでとうございます～」
    - acc: 1
      content: 「あけましておめでとう、アルダン。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、一緒に神社へ初詣に行きませんか？」
    - acc: 1
      content: 「もちろん～」
    - %YOU%はアルダンの誘いを受け、一緒に神社を訪れる。互いを思う願いをかけたあと、新年の小さな遊びも一緒に楽しんだ。

cl_valentine:
  title: バレンタイン
  lines:
    - 今日はバレンタイン。恋する少女たちが、想い人へ本命チョコを、ただの友人へは義理チョコを贈る。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「誰だかわかりますか🎵」
    - acc: 1
      content: 「アルダン。」
    - %YOU%が後ろの人の名前を正確に呼ぶと、視界を遮っていた手が外れる。
    - アルダンは%YOU%の前に出て、幸せそうな笑顔で、綺麗に包まれたチョコレートを差し出した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ハッピーバレンタイン、%CALLNAME%。手作りですので、行き届かないところもあるかもしれません。召し上がって、ゆっくり休んでください。」
    - acc: 1
      content: 「ありがとう、アルダン。」

cl_fans:
  title: ファン感謝祭
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日はファン感謝祭です。ん……ファンの皆さんを、どうお迎えすればいいのでしょう？ %CALLNAME%」
    - アルダンは少し不安げに、どんな感謝の仕方がいいか%YOU%に尋ねる。
    - acc: 1
      content: 「アルダンらしいやり方で、ファンの心を掴むんだ！」
    - %YOU%の答えを聞き、アルダンは微笑み、自信を取り戻す。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……ふふ、%CALLNAME%の言い方は、いつも面白くて……それでいて、私を励ましてくれます。」
    - そのあとのファン感謝祭は、滞りなく終わった。

cl_temple_fair:
  title: 縁日
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今日は縁日があるそうです。夜遅くには肝試しもあるとか。%CALLNAME%、一緒に行きませんか？」
    - アルダンは期待の目で%YOU%を見る。%YOU%には断りようがない。
    - 縁日を一緒に回り、楽しい時間を過ごしたあと、%YOU%と%SEX%は肝試しへ向かう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、肝試し。きっと面白いでしょうね。」
    - acc: 1
      content: 「怖がっていないな。むしろ興奮している。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ええ。体の都合で、こうした催しにはあまり参加できませんでした。でも今は、%CALLNAME%のおかげで、以前やりたかったことができるんです。」
    - %YOU%はアルダンの手を引き、一緒に肝試しへ入る。アルダンは%YOU%のそばでずっと幸せそうに笑い、時おり視線を%YOU%へ向けている。

cl_halloween:
  title: ハロウィン
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「トリック・オア・トリート🎵」
    - ハロウィン当日、%YOU%は事務所でノックを聞き、開けてみると、吸血鬼に扮したアルダンだった。
    - 衣装は誘惑と高貴さを少しにじませ、脅かすつもりのかたちが、かえって可愛い。
    - acc: 1
      content: 「ハッピーハロウィン、アルダン。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、ハッピーハロウィン、%CALLNAME%。この装い、いかがでしょう？」
    - 「すごくいい。見入ってしまった。完全に虜だ。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、では初擁を差し上げますね、%CALLNAME%🎵」

cl_christmas:
  title: クリスマス
  lines:
    - %YOU%はアルダンの誘いを受け、メジロ家で開かれるクリスマスパーティーに出席する。
    - 夜になると、%SEX%の友人たちはそれぞれ帰っていった——
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、私と『二次会』をしましょう。」
    - acc: 1
      content: 「いいよ。」
    - %YOU%はアルダンの誘いを受け、%SEX%と夜の街を歩く。今日しか見られない景色を目にした。
    - %YOU%とアルダンはプラネタリウムへ行き、一緒に星を観る。
    - 別れ際、来年のクリスマスも一緒に過ごそうと約束して、幸せな一日が終わった。

birthday:
  title: 誕生日
  lines:
    - 今日はメジロアルダンの誕生日。
    - acc: 1
      content: 「お誕生日おめでとう、アルダン。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとう、%CALLNAME%。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「今夜、皆さんを招いて、楽しいパーティーを開きましょう。」
    - %YOU%はアルダンの考えに賛成し、準備へ向かう。
    - 夜、家で盛大なバースデパーティが開かれ、遅くまで遊んだ。

# 恋慕が依存
# 一度きり
birthday_dependence:
  title: 誕生日
  lines:
    - acc: 1
      content: 「お誕生日おめでとう、アルダン。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ありがとう。大好きなあなた。」
    - 今日はアルダンの誕生日。%YOU%は誕生日の贈り物を渡し、アルダンの親族や友人たちと一緒に、%SEX%の誕生会を開いた。
    - アルダンの幸せそうな笑顔を見て、%YOU%は自分の労が報われたと感じる。
    - ………………
    - 会が終わると、アルダンは参加した親族や友人へ順に手を振る。最後のひとりが去ったあと、アルダンは%YOU%のそばへ来て、%YOU%の手を握った。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……大好きなあなた。もっと、もっと『いま』の私たちを作りたいんです。もう少し……私と、ふたりだけでいてくれますか？」
    - それからメジロアルダンは%YOU%の手を引き、メジロ家の裏山へ向かう。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「大好きなあなた、ここは夜いちばん好きな場所です。ここで空を見上げると、とても綺麗な星空が見えるんです。」
    - アルダンの言葉を聞き、%YOU%は顔を上げて夜空を見る。明かりの影響から離れ、星がはっきり見える。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%、宇宙は%UMA%たちの歴史のようです。瞬く星ひとつひとつが、歴史に眩い光を残した%UMA%たちのようで、%THEY%はこんなにも輝いて、美しい。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「夜ここに来て星を見るのが好きなのも、そのためです。歴史の流れにいる先輩たちの輝きを、浴びているみたいで。」
    - acc: 1
      content: 「君には、もう君自身の輝きがある。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「ふふ、大好きなあなた、それは少し違います。私が持っているのは、あなたと私、ふたりで描いた輝きだと思います。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「互いを映し合うふたりが、私たち……共通の……たったひとつの輝きを咲かせたんです🎵」
    - メジロアルダンは%YOU%に凭れ、%YOU%と一緒にこの星空を仰ぎ、同期する心拍を感じている。
    - 星空の絵の下で、凭れ合うふたりがいる。
