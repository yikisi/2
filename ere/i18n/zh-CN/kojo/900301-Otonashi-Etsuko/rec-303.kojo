# @file 乙名史悦子 - 招募
# @author 黑奴队长（临时）

# @author 黑奴队长（临时）
rec_0:
  title: 开始采访
  lines:
    - 在离开%TRACK%时，%YOU% 与一位记者打扮的%PHY%不期而遇。
    - if: era.get('flag:初见URA颁奖') > 0
      content: %YOU% 认出她正是每年负责颁奖的 %CHARA%。
    - 她向 %YOU% 作了自我介绍，是名为 %CHARA_ACTUAL% 的记者。
    - 简单打招呼后，她表示很期待 %YOU% 队伍的后续表现。

# @author 黑奴队长（临时）
rec_1:
  title: 专访记者
  lines:
    - %YOU% 意外地在学园门口遇到了 %CHARA%。
    - %CHARA% 打了个招呼，于是 %YOU% 向她走去。
    - %CHARA% 表示，因为 %YOU% 的活跃，现在 %CHARA% 已经成为 %YOU% 的队伍的专访记者了。
    - 当然，她也可以帮 %YOU% 多宣扬荣耀，尽量消除负面影响，只要 %YOU% 给更多许可。
    - 这么说的时候，%CHARA% 露出了大大的笑容。
    - （之后应该可以在访客接待室找到她吧）

rec_2:
  - %CHARA% 露出笑容，承诺从今以后会帮 %YOU% 宣扬好事，降低恶名影响。
  - if: era.get('love:303') >= 75
    content: 作为交换……她轻轻地抚摸了一下 %YOU% 的手，眨了眨眼睛。
  - if: era.get('love:303') < 75
    lines:
      - 作为交换……她要求能够在保证不打扰训练活动的情况下近距离接触 %YOU% 的队伍。
      - if: era.get('love:303') >= 50
        content: 在握手成交之后，%CHARA% 慢慢摩挲着自己的手掌，若有所思。
      - if: era.get('love:303') < 50
        content: 在握手成交之后，%CHARA% 露出了计划通的狡黠笑容。