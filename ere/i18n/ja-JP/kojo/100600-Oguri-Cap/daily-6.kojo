# @file オグリキャップ - 日常
# @author 雞雞
# @author Claude (翻訳)
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: オグリキャップ
            - 「学園に来たばかりの頃は……何も、わからなかった。……あなたがいて、助かった」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: オグリキャップ
            - 「故郷の、みんなを喜ばせる。……私も、走る」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: オグリキャップ
            - 「私より速い%UMA%が、まだいる。……胸が、熱い……！」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: オグリキャップ
            - 「飯、行こう」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: オグリキャップ
            - 「レースのとき……トレーナーも、走ってる気がする。……力が、出る」

select:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: オグリキャップ
            - 「オグリキャップだ。よろしく」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: オグリキャップ
            - 「トレーナー……頼む」

talk:
  # BASENAME:0 = 体力
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「む……少し、疲れた」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「悪い。……少し、休む」
  # CFLAGNAME:66 = 募集状態
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「クロスと、喧嘩した。……イカ焼きは、丸ごとだ。……普通だろ？」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「む……廊下で、クリークに頭を撫でられた。……寝癖、ついてたか？」
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:34:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「イナリと、昼飯。……速い。……体に、悪い」
  # CFLAGNAME:40 = やる気
  - if: era.get('cflag:6:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「ホッ！ホッ！ウイッフー！ ……これ？ 調子がいいと、こうなる。期待してくれ」
  - if: era.get('cflag:6:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「この感じ……うん。トレーニングが、待ち遠しい」
  - if: era.get('cflag:6:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「いっぱい、食った。今日は、いける」
  - if: era.get('cflag:6:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「む……気分がいい。たくさん、走ろう」
  - if: era.get('cflag:6:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……今日は、どうする」
  - if: era.get('cflag:6:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「よし。今日も、やる」
  - if: era.get('cflag:6:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「どうにも、調子が悪い。睡眠、足りないか……」
  - if: era.get('cflag:6:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「うう……力が出ない。もっと、食うべきだったか……」
  - if: era.get('cflag:6:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「むむ……悪い。どうしても、やる気が出ない……」
  - if: era.get('cflag:6:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「体が、重い……こういうのは、やめておけ……」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「これだけ、足りるか？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「おお……伝説の、黯然銷魂飯か！」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「トレーナー……足してくれ❤️ ……白い、あれ❤️」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「トレーナー……このコントローラー、どう使う」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「うう、また負けた……本番なら、勝つ」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「トレーナー❤️ 負けたら……罰、して❤️」

office_gift:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: オグリキャップ
      - 「贈り物、か。……飯か？ 腐る前に、開ける。トレーナー」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「みんなの願いを、力に……！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……成長、してる。ありがとう」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……トレーナー特製の、ミルク。飲んでいいか❤️」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「最近……色々あった」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「爪、切る。得意だ」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「トレーナーの爪、切った。……次は、指の番だ❤️」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……む。また、解き終わる前に試験が終わった」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「昔の夢は、どて煮になることだ。……話を逸らすな？ ……うう」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「トレーナー……今回、69点だ……❤️」

out_church:
  - その日、%YOU% はオグリキャップに連れられ、トレセン近くの神社へやってきた。……%YOU% は不思議に思って、尋ねた。
  -
  - acc: 1
    content: 「なぜ、神社に？」
  -
  - %SEX%は眉を寄せ、地面を見た。耳も、しょんぼりと折れている。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: オグリキャップ
      - 「最近……体の、調子が悪い」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: オグリキャップ
      - 「何をしても、外れる。状態が、出ない。……田舎の政のおじさんが言ってた。『困ったときは、神様に頼め』」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: オグリキャップ
      - 「田舎でも、競馬場の小さな社で祈って……勝った」
  -
  - acc: 1
    content: 「だから、俺を呼んだのか。……一緒に祈ろう」
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: オグリキャップ
      - 「いいのか？ ……ありがとう、%YOURNAME%」

  - ふたりは慣れた手つきで賽銭箱へ賽銭を入れ、心を込めて祈った……
  - そのあと、オグリキャップは何か異変に気づいたらしい……
  -
  - if: d.dice > 0.5
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「これは……ラーメン屋の、替え玉無料券！ ご利益が、もう来た！」
      -
      - オグリキャップは驚いた顔でポケットから一枚の紙を取り出した。だが %YOU% には、%SEX%が以前から入れっぱなしにしていただけのように思えた。
      - それでも、%SEX%の笑った顔を見て、その空気を壊す必要はないと判断した。
  - if: d.dice < 0.5
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「これは……ラーメン屋の、替え玉無料券！ ご利益が、もう来た！ ……うう。期限、切れ」
      -
      - オグリキャップは驚いた顔でポケットから一枚の紙を取り出した。だが、替え玉無料券の期限はとうに過ぎていた。
      - さっきより沈んだオグリキャップを見て、%YOU% は自腹で%SEX%にラーメンをおごることにした。……たぶん、もっと多く。

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「釣った魚は……どう料理するか」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「おお！ 魚が、いっぱいだ！ ……その目は、何か」

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……いい空気だ。外が、好きだ。澄んでる」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「トレーナー、走りたい。……付いてこれるか」

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「クレーンの中……怪物姿の、私か」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「なぜ、爪が弱い……！」
  - if: era.get('cflag:21:66') === 1 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「クロスを、掴みたい。クリークが、喜ぶ」

o_s_drawing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「抽選か……当たるなら、飯がいい」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「都会でも、ガラポンなんだな」

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「われらは勇敢な歩兵隊、大股で進む熱血の決死隊～♪」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「歌も、レースと同じだ。血が、沸く」
  - if: era.get('cflag:21:66') === 1 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「クリーク、クロスに童謡を歌ってる……」

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「ポスターの人……マヤノの、父親に似てる。……六十過ぎだと？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「うう……ハチ公……うわあああ——」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「『いただきます』は、忘れない」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「うまかった。——ごちそうさま」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「服、きれい……？ ……ありがとう……❤️」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……賑やかだ。田舎と、違う」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……何も、言うな。今を、味わう」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「トレーナー、撮ってくれ。家族に送る。……撮り方が、わからない」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「箱の中に、人が……！ ……古い冗談、か」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「古い蹄鉄を、飾りに？ ……ブライトに頼めばいい。『近くの人には、言わない方がいい』……？」

s_a_tree_hollow:
  - %YOU% はオグリキャップと中庭の枯れ木の洞へ来た。%SEX%が洞に向かって咆哮する姿を見て、%YOU% はオグリキャップを最強へと導く覚悟を新たにした。

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「学園で、デート……恥ずかしい」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「%THEY%の視線が、刺さる……」
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「……キス、するか？」

s_r_lunch:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「肉まんは、熱いうちに」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「トレーナーの飯は、うまい。……将来、いい嫁だ」
  - if: era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: オグリキャップ
          - 「クロスに、たこ焼きを習った。……食べるか？」
