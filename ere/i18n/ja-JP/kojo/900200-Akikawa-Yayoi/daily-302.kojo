# @file 秋川やよい - 日常
# @author 黑奴队长（临时）
# @author Claude (翻訳)

npc_talk:
  # 失望
  - if: (t = era.get('relation:302:0')) <= -100
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「冷 淡！わたくしに会いに来る暇があるなら、先に自分の仕事をなさい！」
  # 疑念
  - if: t > -100 && t <= 0
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不 快！あまりお会いしたくありませんわ！」
  # 冷淡
  - if: t > 0 && t <= 75
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「奇 怪！トレーナー、わたくしに何かご用ですの？」
  # 良好
  - if: t > 75 && t <= 150
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「挨 拶！今日は順調ですの？」
  # 熱意
  - if: t > 150 && t <= 225
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「賞 賛！あなたも伝説の仲間入りですわ！」
  # 好意
  - if: t > 225 && t <= 375
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「歓 迎！困ったことがあれば、わたくしを頼りなさい！」
  # 親密
  - if: t > 375 && t <= 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「喜 悦！暇なら話しにいらっしゃい！」
  # 不変
  - if: t > 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「あなたなら……幻 聴！何も聞いていませんわよ！」

npc_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「照 れ！では今夜、あなたの家で会いましょう！」

npc_bye:
  - if: d.nothing
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「不 快！わたくしを暇つぶしにしないでください！」
  - if: '!d.nothing'
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「再 会！お仕事、励みなさい！」
