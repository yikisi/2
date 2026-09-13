# @file 保科健子 - 日常
# @author 黑奴队长（临时）

# 秘汤功能互动的相关对话，其实应该算系统级地文的一部分
# 但是为了秘汤那里能写得简便一点，就作为口上形式写在这里了
# 原理是保健和汤华在秘汤的互动具有相同的差分条件
# 写口上的时候记得把这部分差分放到最后去
# 另外欢迎修改，但是不要在这部分增删新 kojo 篇目，也不要修改 kojo 篇目的名字（键，key）
# kojo 篇目同时定义了口上的入口，改了篇目键会导致功能代码找不到入口

mw_welcome:
  sync: true
  lines:
    - %CHARA% 欢迎 %YOU% 来到秘汤，并着重强调了秘汤疗养可以恢复疲劳、加速伤病恢复。
    - 要进行秘汤疗养吗？%COST% 马币一次。

mw_welcome_rec_all:
  sync: true
  lines:
    - %CHARA% 欢迎 %YOU% 来使用秘汤。
    - 只需要付 %COST% 马币维护费，要进行秘汤疗养吗？
    - 现在秘汤还能发挥 %TIMES% 次效力。

mw_welcome_rec_me:
  sync: true
  lines:
    - %CHARA% 欢迎 %YOU% 来到秘汤。
    - 看在 %YOU% 的面子上，费用 %COST% 马币就好了，要进行秘汤疗养吗？
    - 现在秘汤还能发挥 %TIMES% 次效力。

mw_welcome_rec_other:
  sync: true
  lines:
    - %CHARA% 欢迎 %YOU% 来到秘汤。
    - 看在 %OTHER% 的面子上，只收 %COST% 马币，要进行秘汤疗养吗？
    - 现在秘汤还能发挥 %TIMES% 次效力。

moon_well_disabled:
  - 秘汤使用过后需要一段时间才能恢复效力……大概还要 %CD_REST% 周的样子。

