# @file Yunohana Bloom - Daily
# @author 黑奴队长（临时）
# @author Katze(translator)

# 秘汤功能互动的相关对话，其实应该算系统级地文的一部分
# 但是为了秘汤那里能写得简便一点，就作为口上形式写在这里了
# 原理是保健和汤华在秘汤的互动具有相同的差分条件
# 写口上的时候记得把这部分差分放到最后去
# 另外欢迎修改，但是不要在这部分增删新 kojo 篇目，也不要修改 kojo 篇目的名字（键，key）
# kojo 篇目同时定义了口上的入口，改了篇目键会导致功能代码找不到入口

mw_welcome:
  sync: true
  lines:
    - %CHARA% welcomes %YOU% to the Secluded Hot Spring, pointing out how a good soak cuts down fatigue and helps injuries heal faster.
    - Care for a soak? Its %COST% UmaCoin a session.

mw_welcome_rec_all:
  sync: true
  lines:
    - %CHARA% welcomes %YOU% to the Secluded Hot Spring.
    - Its just %COST% UmaCoin to cover maintenance. Care for a soak?
    - The spring has enough power left for %TIMES% more use(s).

mw_welcome_rec_me:
  sync: true
  lines:
    - %CHARA% welcomes %YOU% to the Secluded Hot Spring.
    - Since its %YOU%, its only %COST% UmaCoin. Care for a soak?
    - The spring has enough power left for %TIMES% more use(s).

mw_welcome_rec_other:
  sync: true
  lines:
    - %CHARA% welcomes %YOU% to the Secluded Hot Spring.
    - Thanks to %OTHER%, I am only charging %COST% UmaCoin. Care for a soak?
    - The spring has enough power left for %TIMES% more use(s).

moon_well_disabled:
  - The spring needs time to recharge after use... It will be about %CD_REST% more week(s).
