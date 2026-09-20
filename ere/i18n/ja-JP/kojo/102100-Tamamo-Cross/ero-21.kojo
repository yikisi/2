# @file タマモクロス - 調教
# @author 雞雞
tied_heart:
  title: 縛られた心
  lines:
    #トレーナー室内
    #イベント名：縛られた心
    #トリガー：恋慕状態後にランダム発生
    - 何も見えない……半ば閉じた瞼の外から、光が瞳に入る感触だけがある。
    - 目が乾く。%CHARA%は何度も瞬き、涙で潤す。
    - %TEEN%はゆっくりと意識を取り戻し、故郷より馴染み深いトレーナー室のソファに、ぐったり座っている自分に気づく。
    - %CHARA%は両手を見る。左右それぞれ、頑丈な鉄輪で繋がれ、腕を自由に伸ばせない。
    - 見知らぬ場所に縛られたわけではないという事実に、%SEX%はいくらか安心した。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「なんやこれ——！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんな突っ込みが欲しかったんやろ？ほな、さっさと手錠外して——」
    - %SEX%の視線は、隣で面白そうにこの惨めな姿を鑑賞している%YOU%へ漂う。
    - acc: 1
      content: 「それはあかん。最近のタマ、言うこと聞かんさかい……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「そんなことないわ、でたらめ言うな！」
    - %YOU%は身を寄せ、顔を%CHARA%の眼前まで近づける。
    - %YOU%の熱い息が少女の肌に当たり、%SEX%も思わず呼吸を深くした。
    - acc: 1
      content: 「だってタマ、いつも俺を誘うような顔してるやろ……」
    -
    - acc: 1
      content: 「走ってるとき、一生懸命お尻を振って見せて、運動のあとは体をくっつけて雌の匂いを自慢する……俺がどれだけ我慢してるか、分かるか？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「それがわしと何の関係が……あんた自身の悪趣味やろ、ロリコン！」
    - %SEX%は真っ赤になって言い返す。だがスポーツブラの下の可憐な乳首は、勝手に勃起し、下腹まで熱くなっていた。
    - %YOU%は上唇を舐め、%CHARA%をソファに押し倒し、相手の両腕のあいだから頭を通す。
    - acc: 1
      content: 「ほんなら、俺を押しのけてみろ。」
    - いまの%CHARA%は両手を手錠で繋がれているだけだ。%UMA%の身体能力なら、脚で抵抗するのも、逃げ出すのも造作ないはず……
    - if: era.get('relation:21:0') > 225
      content:
        - %CHARA%は口を開こうとして、適切な言葉が見つからず、そのまま両腕で%YOU%の首を抱き、二人は深い接吻に沈んだ。
    - if: era.get('relation:21:0') <= 225
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ほんま、えげつない大人やな……」
        - %CHARA%は舌打ちし、気が進まなそうに両腕で%YOU%の首を抱き、深い接吻を迎えた。

mark_pleasure:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ちょ、ちょっと待って、体……体が熱い……変や……」
  - if: d.level === 2
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……はぁ……あの……もう一回……してもええか？」
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「ちびども、ごめんやで。わし、もうこの人から離れられへんらしい……」
      - %CHARA% の体は、完全に堕ちた。

mark_meek:
  - if: d.level === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「はぁ……はぁ……」
      - %CHARA% の上気した顔が近づき、背中をいくつかの快感が這うのが分かる……
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME% が喜んでくれるんやったら、わしも嬉しいし……」
      - %CHARA% は貧しい体を寄せて、ゆっくりと下へ移動し、
      - 胸、脇腹、太もも、そして快感を感じさせるあらゆる場所を行き来して擦りつける。
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やから……%CALLNAME% の好きなところ、もっと教えてくれへんか……？」
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「なあ、次はわしに何させたいん？何したらええん？」
      - %CHARA% の柔らかい脚が、生き物のように %YOU% の腰に絡みつく。
      - %SEX%の両脚はゆっくりと、慌てず、だが獲物がちょうど逃げられない力で、%YOU% の下半身を擦り続ける……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「今やったら、わしに何したってもええで❤️」

mark_pain:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「大丈夫……ちびどものために、わしが我慢する……」
  - if: d.level === 2
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ご、ごめん……わし、なんでも……するさかい……お、お願い……ちょっとだけ優しくして……」
  - if: d.level === 3
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「お母さん……！」

mark_shame:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「み……見んといて……！」

mark_hate:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「何しとんねん！わしでも怒るで！」
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「金出したからって、わしを玩具みたいに好き勝手できる思うなよ！」
      - %CHARA% の冷たい視線の奥に、怒りが滲んでいる。
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「クズ……」
      - %CHARA% の冷たい瞳には何もなく、%YOU% の姿は %CHARA% の目にまったく映っていない。
      - 完全に閉じた心は、おそらく二度と誰にも開かないだろう。
