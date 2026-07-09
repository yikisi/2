# @file 秋川弥生 - 日常
# @author 黑奴队长（临时）

npc_talk:
  # 失望
  - if: (t = era.get('relation:302:0')) <= -100
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「冷 漠！有来找我的空闲不如先把自己的工作做好！」
  # 怀疑
  - if: t > -100 && t <= 0
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不 悦！不太想见到你！」
  # 冷淡
  - if: t > 0 && t <= 75
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「奇 怪！训练员有什么事要来找我一谈？」
  # 融洽
  - if: t > 75 && t <= 150
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「寒 暄！今天还顺利吗？」
  # 热忱
  - if: t > 150 && t <= 225
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「赞 许！你也会跻身传奇之列！」
  # 喜爱
  - if: t > 225 && t <= 375
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「欢 迎！有麻烦就来找我吧！」
  # 亲密
  - if: t > 375 && t <= 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「喜 悦！有空就来聊聊！」
  # 不渝
  - if: t > 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「如果是你……幻 听！你什么都没听到！」

npc_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「羞 涩！那晚上在你家见面！」

npc_bye:
  - if: d.nothing
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不 悦！不要消遣我！」
  - if: '!d.nothing'
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「再 会！要努力工作啊！」