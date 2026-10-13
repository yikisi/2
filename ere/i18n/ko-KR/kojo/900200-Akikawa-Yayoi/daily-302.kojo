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
      - "「냉담! 나를 만나러 올 시간에 자기 일부터 하게나!」"
  # 疑念
  - if: t > -100 && t <= 0
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「불쾌! 자네와는 별로 만나고 싶지 않군!」"
  # 冷淡
  - if: t > 0 && t <= 75
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「의문! 트레이너, 내게 무슨 볼일이 있나?」"
  # 良好
  - if: t > 75 && t <= 150
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「인사! 오늘은 일이 잘 풀리는가?」"
  # 熱意
  - if: t > 150 && t <= 225
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「찬사! 자네도 전설의 반열에 오를 걸세!」"
  # 好意
  - if: t > 225 && t <= 375
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「환영! 곤란한 일이 있다면 나를 의지하게나!」"
  # 親密
  - if: t > 375 && t <= 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「기쁨! 시간이 나면 이야기하러 오게나!」"
  # 不変
  - if: t > 525
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「자네라면……환청! 자네는 아무것도 듣지 못했네!」"

npc_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「수줍음! 그럼 오늘 밤, 자네 집에서 만나세!」"

npc_bye:
  - if: d.nothing
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「불쾌! 나를 심심풀이로 삼지 말게!」"
  - if: '!d.nothing'
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「재회! 맡은 일에 힘쓰게나!」"
