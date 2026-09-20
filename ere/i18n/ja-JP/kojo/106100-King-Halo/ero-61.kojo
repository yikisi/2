# @file キングヘイロー - 調教
# @author 牛蛙煲
# @author Claude (翻訳)
ero_start:
  - if: era.get('tflag:强奸') === 0 && era.get('love:61') < 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「な、なにを言ってるんですの！」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「きゃあああああっ！」
  - if: era.get('love:61') >= 50
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ちょっと！ あ、あなた、少し大胆すぎませんこと？」
      - キングヘイローの声は一段高くなったが、%SEX%の体は拒む気配を見せなかった。
  - if: era.get('love:61') >= 75
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「%CALLNAME%、そんなに大きな声で言わないでくださいまし！」
  - if: era.get('love:61') >= 90
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「いいですわ、始めましょう。一流の%UMA%は、どこであろうと一流なんですもの！」
