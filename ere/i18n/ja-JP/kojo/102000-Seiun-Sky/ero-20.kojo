# @file セイウンスカイ - 調教
# @author Wolke
# @author Claude (翻訳)

# 招待して泊まったあと、ターン終了時に確率で発動
with_you:
  title: あなたのそばで
  lines:
    - 朝の陽射しが、紗カーテンを通して部屋へ柔らかく落ちる。
    - 耳元で、均一な呼吸がそっと上下する。温かな朝の光のなか、%YOU%のぼんやりした意識が、ゆっくりはっきりしてくる。
    - 昨夜、%YOU%と夜をともにした相手は、怠惰に%YOU%の腕の中へ顔を埋め、ぴったり寄り添っている。
    - 無防備なセイウンスカイを見て、%YOU%の頭に、いたずらな考えが浮かぶ。
    - acc: 1
      key: sex
      content: キスする
    - acc: 2
      content: やめておく
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「ん～～おはよう～～トレーナー～～」
        - それから甘えるように身をくねらせ、また%YOU%の腕の中へ潜り込む
