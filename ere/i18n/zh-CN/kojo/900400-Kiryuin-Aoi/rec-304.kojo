# @file 桐生院葵 - 招募
# @author 黑奴队长（临时）
intro:
  # H_NAME = 快乐米可
  - %CHARA% 告诉 %YOU%，她有一名负责%H_UMA% %H_NAME%，天赋很不错，马上要开始育成。
  - 如果 %YOU% 愿意的话，可以先辅助%H_SEX%训练一段时间，也许可以增长一些经验。

recruit:
  title: 成果
  lines:
    - %H_NAME% 取得 G1 胜利之后，%CHARA% 找到 %YOU%，表示 %YOU% 取得了极佳的成果。
    - 她希望能同 %YOU% 继续努力下去，不仅是 %H_NAME%，也帮助更多的%H_UMA%赢得胜利，实现愿望。

recruit_hentai:
  title: 「成果」
  lines:
    - %H_NAME% 的育成结束后，%CHARA% 找到了 %YOU%。
    - if: d.meek_pregnant
      lines:
        - %CHARA% 对 %YOU% 玷污 %H_NAME% 的行为极度愤怒。
        - 但事已至此，为了 %H_NAME%，她也只能接受事实。
        - 但是她绝对不会原谅你。
    - if: '!d.meek_pregnant && d.meek_love'
      lines:
        - 她谴责了欺骗%H_TEEN%感情的 %YOU%。
        - 但既然 %H_NAME% 想和 %YOU% 继续在一起，她也无话可说。
        - 她会继续看着 %YOU%，以防 %YOU% 做出对不起 %H_NAME% 的事情来。
    - if: '!d.meek_pregnant && !d.meek_love'
      lines:
        - %CHARA% 一本正经地表示虽然 %YOU% 没有取得什么像样的成绩，但这三年也磨练了 %YOU%。
        - 所以，%CHARA% 会继续帮助 %YOU%，直到 %YOU% 成为一个称职训练员的一天。
        - 话毕，%CHARA% 趁四下无人，在 %YOU% 的脸颊上留下了一枚香吻。
