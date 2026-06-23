# @file 佐岳五月 - 招募
# @author 黑奴队长（临时）

# @author 黑奴队长
welcome:
  title: 凯旋门计划
  lines:
    # A_NAME = 秋川弥生
    - 本周的第一个工作日，%YOU% 在学园里遇到了 %A_NAME%。%SEX%正在陪同一名戴着黄帽子的%PHY%。
    - if: d.who_am_i > 0
      lines:
        - %YOU% 认出%SEX%是之前认识的 %CHARA%。
        - 如 %YOU% 所知，%CHARA% 主要从事海外远征的辅助工作。
    - if: d.who_am_i === 0
      content: %A_NAME% 在 %YOU% 上前打招呼后，告诉 %YOU% 这位%PHY% 叫 %CHARA_ACTUAL% 长期从事海外远征的辅助工作。
    - %A_NAME% 勉励 %YOU%，除了在日本国内争锋，也要将视野扩展到海外的尖端赛事上，带领日本赛%UMA%走向世界。

# @author 黑奴队长
visit:
  title: 凯旋门之梦
  lines:
    - %YOU% 在海外赛事上的成绩使 %CHARA% 倍感激励。
    - 如果想更直接地支持%SEX%，就去访客接待室和%SEX%谈谈吧。