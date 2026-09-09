# @file サイレンススズカ - 調教
# @author 牛蛙煲
ero_start:
  - if: era.get('tflag:9') === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「ま、まだです……%CALLNAME%は、そういうお方だったのですね……」
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - 「あっ……！」
  - if: era.get('tflag:9') === -1
    lines:
      - if: era.get('love:2') >= 50 && era.get('love:2') < 75
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「そ、その……%CALLNAME%でしたら……うぅ……少し、恥ずかしいです……」
          - 鈴鹿は頬を赤らめてはいるが、%SEX%の体は拒む気配を見せていない。
      - if: era.get('love:2') >= 75 && era.get('love:2') < 90
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「ええ。私も、%CALLNAME%のことが一番好きです。ただ、そうはっきり言われると、少し困ってしまいます……」
      - if: era.get('love:2') >= 90
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - 「%CALLNAME%から、こうして誘ってくださるのですね。ちょうど、私も同じことを考えていました。」
