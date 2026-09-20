# @file スイープトウショウ - 調教
# @author アグネスデジタル会社
# @author Claude (翻訳)

# 和姦
ero_start_normal:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「み……『満たす』……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「むぅ～もう…… %CALLNAME% は、いつからそんなことで主人に頼るようになったの！？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……でも、いいわ！ %CALLNAME%の欲を満たすのも……主人の義務のうち！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あくまで義務！ %CALLNAME%、余計なことは言わない！ 聞かないでよ！！」
  - スイープトウショウは、期待なのかいつもの歩幅なのか分からない足取りで、%YOU%を休憩室へ連れていく


# 強姦
es_rape:
  - if: era.get('love:44') < 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだ！ %CALLNAME% が主人に逆らうなんて、許されない……！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「まして……こんなこと、無理やり……本に出てくる魔法少女みたいじゃない！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「んうっ——痛い……！ 主人は負けない！！ でも痛い……」
      - 矛盾した言葉のなかで、%SEX%はついに涙を浮かべたまま%YOU%に押し倒される
      - 相手が振り切る前に、できるだけ押さえておこう
  - if: era.get('love:44') >= 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「やだやだ！ %CALLNAME% が主人に逆らうなんて、許されない……！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「たとえ私たちがそういう関係でも……ちがうちがう、ただの主人と %CALLNAME% でしかないんだから！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「んうっ……主人をずっと痛がらせたら……怒りますから、絶対！！！」
      - 受け入れるようで受け入れない言葉のなかで、%SEX%はついに涙を浮かべたまま%YOU%に押し倒される
      - 相手が気が変わる前に、できるだけ押さえておこう


# 初回の強姦 Play
# 合意の計算では、恋慕70以上は強姦 Play（和姦できるが強姦値が有効な場合）
es_rape_play_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「こういう遊び……主人、魔法少女の本でも見たことないわ！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……ちがうちがう！ 主人はそんな本、読んでない！ 変な想像しないで！！！」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……なんにせよ、こうすれば %CALLNAME% は大丈夫なんでしょ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふんふん～今は演じているだけでも、 %CALLNAME% は結局 sweepyさまに勝てないんだから〜！」


# 以降の強姦
es_rape_play:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「こうすれば %CALLNAME% 、大丈夫なんでしょ？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ふんふん～天才%MOHOSHOJO%sweepyなら、なんでもできる！ %CALLNAME% から教わったわけじゃないわ！！」


# 薬による迷姦
es_drug:
  - %YOU%は%CHARA%に薬が回るのを待つ


# 薬による迷姦 - ウマ跳びS - 初回
es_drug_umz_s_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ん……うっ……%CALLNAME%、あなた、まさか……」
  - 言い終えないうちに%CHARA%は、ゆっくり%YOU%の腕の中へ倒れる


# 薬による迷姦 - ウマ跳びS - 再発
es_drug_umz_s:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「ん……うっ……%CALLNAME%、どうしていつも……」
  - 言い終えないうちに%CHARA%は、ゆっくり%YOU%の腕の中へ倒れる


# 薬による迷姦 - 超ウマ跳びZ - 初回
es_drug_super_z_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……ん……主人、どうしてこんなに欲しく……」
  - 一見とても清楚な小%UMA%でも、体をくねらせ、無意識に両脚を閉じる
  - ある意味では、それも薬の魅力のひとつだ
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……！ ちがう、これは……%CALLNAME%！！！」
  - だが、残った理性が、この子に何かを悟らせる
  - 両頬を真っ赤にしながらも、懸命に歯を剥く顔は、薬のせいか、怒りなのか分からない
  -
  - 少なくとも、%YOU%が歩み寄るにつれ
  - %CHARA% の顔には、少しずつ恐れが浮かぶ
  -
  - 口のなかで魔法を唱えても、意味はない
  - 抑えきれなくなった %CHARA%は、ついに涙を浮かべたまま、自分から%YOU%に飛びかかる


# 薬による迷姦 - 超ウマ跳びZ - 再発
es_drug_super_z:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……ん…どうしてこんなに欲しく……あの……」
  - 両頬が徐々に赤くなるにつれ、%CHARA% は無意識に両脚を閉じ、表情も微妙に変わる
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……ち、ちがう！ 使い——魔——またあんた！！！」
  -
  - 怒りなのか、恐れなのか、恥ずかしさなのか、もう判別できない
  - 少なくとも、すべてを悟った %CHARA%は、ほどなく抵抗をやめ、体の本能に任せる
