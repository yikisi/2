train:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「是～已经准备好啦～」
      - 依旧是不紧不慢的语调，但准备得却很快。
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「和%CALLNAME%一起的话，什么训练都没问题～」
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%，一起加油吧～」
  - if: era.get('love:74') === 100
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%%称呼～我们慢悠悠的来吧～」

at_my_side:
  title: 你在我的身边
  lines:
    - 清风吹过中庭，带来一丝凉意。
    - %CHARA% 轻轻撩开贴在脸上的发丝，对着无人的树洞看的有些出神。
    - acc: 0
      content: 「在想什么呢？」
    - 被 %YOU% 的声音打断了回想，%CHARA% 转头过来，却没有看见平日的笑脸。
    - 再次转向那个树洞时，%CHARA% 开口了。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「这里是%UMA%们用来倾诉心声的地方，%CALLNAME% 您是知道的吧？」
    - 这件事 %YOU% 自然是知道的，倒不如说这是整个学院都知道的常识。
    - 但 %CHARA% 的眼神里，却看见了其他的东西。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「以前，我在家的时候听管家先生说过。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有时候会在这里，看见很难过的%ELDER_SISTER%在这里，一直喊。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「听说，经常会这样呢……」
    - 随着 %CHARA% 的声音，%YOU% 回忆起了那个年纪很大的，目白家的管家先生。
    - 这样说来，%SEX%说的想必是某一位目白家的大前辈吧。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……所以，有时候我会在这里看见哦？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「明明我没有直接看见过，但总是能看见。」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_27%，%CALL_64%，%CALL_13%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%SEX%们在这里，哭泣的样子，总是能看见呢。」
    - 视线从树洞转向 %YOU%，轻巧的眨眨眼，
    - 短暂的对视之后，%CHARA%的脸色轻松了不少。
    - 如同从某个妄想中解放出来一样，又挂上了软绵绵的笑容。
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「有您在的话，我就不会在这里哭泣了吧？」
    - 看着 %YOU% 的那张呆呆的脸，浮出了纯粹的笑容。