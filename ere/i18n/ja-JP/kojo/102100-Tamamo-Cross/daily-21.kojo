# @file タマモクロス - 日常
# @author 雞雞
select:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「おっ、わしが%CHARA%や！」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「調子どうや？飯食ったか？食ったあと動かへんと牛になる言うで！あはは！」

good_morning:
  sync: true
  lines:
    # CFLAGNAME:66 = 募集状態
    - if: era.get('cflag:45:66') === 1
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALL_45%のポケット、一体どうなっとんねん……？なんで無限にアメ出てくんねん！？怖いわ……！」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「寮はええもんやな。誰かがおるさかい安心できる。ちょっと実家みたいや～」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ボケへの突っ込みが圧倒的に足りてへん……ていうかここの連中のボケ、個性が強すぎるわ……！！」
    - if: era.get('relation:21:0') >= 76
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「最初にあんな態度取って、悪かったな。あのとき声かけてくれて、ほんまに感謝してるで！」
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「『白い稲妻』、参上！……へへ、格好ええやろ？」

talk:
  # BASENAME:0 = 体力
  - if: era.get('base:21:0') < era.get('maxbase:21:0') * 0.45
    random: true
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「あかん、力が出ぇへん。ちょっと待って……」
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「今は無理してでもやるときやのは分かっとるけど……」
  - if: era.get('base:21:0') >= era.get('maxbase:21:0') * 0.45
    random: true
    lines:
      # CFLAGNAME:40 = やる気
      - if: era.get('cflag:21:40') === 2
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「やる気も元気も満タンや！よっしゃ～～！！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「元気がビリビリ来とる！！わしこそ稲妻やからな！！」
      - if: era.get('cflag:21:40') === 1
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「パッと準備して、サッとトレーニングして、バンと終わらせたらええねん！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「今日は調子ええで、ちょっと厳しくてもええで！」
      - if: era.get('cflag:21:40') === 0
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「準備OKや！ほな始めるで！」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「キビキビ行くで！わしについてこい！」
      - if: era.get('cflag:21:40') === -1
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「なんや今ひとつ乗らん……どっかおかしいんか。」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「こうやってハイになれたらええんやけどな……」
      - if: era.get('cflag:21:40') === -2
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「根性で……耐える……耐えるんや……」
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「コースの芝、食えるんやろか……」

office_gift:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「プレゼントか！ラッキーやな！早く開けさせてくれ！」

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ちびどものおかずになるもん釣れたらええな～🎵」
  # CFLAGNAME:66 = 募集状態
  - if: era.get('cflag:20:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あそこに寝転がっとるの、猫か？ちゃう！どう見ても %CALL_20% やろ？」
  # EXPNAME:25 - 26 = 性交回数 - 睡姦回数
  - if: era.get('love:21') >= 75 && era.get('exp:21:25') > era.get('exp:21:26')
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あのな……今日、スッポン食べて精力つけへん……♥？」

o_r_walk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「おっと、今日の天気は——まあまあって何やねん？これ晴れやろ！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「食ったあとの散歩で消化するのも大事やで～」

o_s_arcade:
  - if: era.get('cflag:6:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ちびどもに、あの怪獣%CALL_6%掴んだるわ！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「がーっ！これ難しすぎるわ！くそSE〇A！」

o_s_drawing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「当たれ！当たれ！当たれ！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ん～期待せんと失望もせん……当たったか？」

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「カラオケのセットメニュー、うまいやんけ！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「貧困鎮守府は無法地帯～🎵大和が出ないよ大和が出ない～🎵」

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「映画か？わし、テレビの再放送でしか見てへん……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ポップコーン高すぎ……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今度、ちびどもも連れてこようか……？」

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「は？こんな高いもん奢ってくれるんか?! あかんて！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「わしはこの小盛りのもやしご飯に漬物でええわ……は？%CALLNAME%が許さん？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「残りはちびどもにパックして持って帰るで？」

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あ、あのな……やっぱりロリコンなんか……」
  - if: era.get('love:21') >= 50 && era.get('love:21') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （まさか……こんなわしでも、愛されんのか……？）
  - if: era.get('love:21') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%♥、もっとわしの手、強く握ってくれ♥」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こんなんして、トレーニングさぼってええんか……？」

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こんな高いもん、わしがもらってええんか……？あかんやろ……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あの服、ちびどもは好きやろか？」

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「くそぉ！！背が低いのが何やねん！！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うわあああああ！！！わしは《白い稲妻》になる%UMA%や！！」

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なあ……ちょっと目立ちすぎやろ……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「む、乗りかかった船やな……」

s_r_lunch:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ちびどもの分作るときに、ついでに作ったんや……食べてみ？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「さすがやな、めっちゃ美味い！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なあ%CALLNAME%、わしにおかず盛りすぎちゃうか。」

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「こんなええ材料使う料理、久しぶりや……」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「は、競技状態を保つために鶏胸肉しかあかんって？！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%に、わしの得意なもやし炒め、披露したるわ！」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あれ、走るために来たのに、なんで微積分勉強せなあかんねん？」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「あ、寝てへん、寝てへんから……」

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - （%YOURSEX%の寝顔、ちょっと可愛いな……）
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「んあー、もう入らん……」

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なるほど……分かった！要するに後ろから一気に追い込むんやな？！」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「分かった！おおきに！」

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「うちのちびども、もうゲーム機なんか触らへんねんな……スマホ一台で奪い合いしてる。」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「おお、今のゲーム機、画面こんな綺麗なんや！」

out_church:
  - 元気のない %CHARA% にやる気を出してもらおうと、わざわざ神社までお参りに来た。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「神さん、ちょっと頼むわ！わしがずっと壁にぶつからんように守ってくれや！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「お願いしまっせ——！調子よくしてくれ——！」
  -
  - ほどなくして、%SEX%のスマホが鳴った。
  - %CHARA%は目を見開き、尻尾までピンと立っている。
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「これ……苦労して申し込んだ消費クーポンの抽選通知？！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「見せて……いっ！よっしゃ！当たった！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「神さんおおきに、神さんおおきに——！」
  -
  - そんなに都合よく当たるものか？%YOU%は騒ぎ続ける %CHARA% を見て、思わずそう思う。
  - if: d.dice > 0
    content: 当選のおかげか、%CHARA% の精気まで上がった！めでたい、めでたい……
  - if: d.dice === 0
    content: 当選はしたが、やはり %CHARA% の調子とは関係なかったようだ……
