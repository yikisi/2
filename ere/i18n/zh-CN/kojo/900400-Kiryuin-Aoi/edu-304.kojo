# @file 桐生院葵 - 育成
# @author 黑奴队长（临时）
meek_fail:
  title: 失败
  lines:
    - %H_NAME% 的育成结束了。
    - %YOU% 并没有和%H_SEX%取得显著的成绩。
    - 训练员办公室内，%YOU% 和 %CHARA% 沉默对坐。
    - %CHARA% 并没有大声斥责 %YOU%，却让 %YOU% 倍感羞愧。
    - if: era.get('cflag:201:育成次数') === 1
      lines:
        - 最后，还是 %CHARA% 率先开口，表示曾经听说在三女神像前虔诚祈祷可以获得第二次机会的传闻。
        - 如果，%YOU% 有所发现的话，她希望 %YOU% 能再给 %H_NAME% 一次机会，挽回曾经的遗憾。
    - if: era.get('cflag:201:育成次数') !== 1
      content: 最后，还是 %CHARA% 率先开口，表示希望 %YOU% 下次能再努力一点，不要再给 %H_NAME% 留下遗憾。