# @file ドリームジャーニー - 日常
# @author 幽白書
# @author Claude (翻訳)
select_after_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응? %CALLNAME%……무섭지 않으신가요? 이를테면, 지난번 일이 또 일어나더라도요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……후후. 당신은 정말 다정한 분이시네요.」"

good_morning:
  sync: true
  lines:
    # 体力が低い
    # BASENAME:0 = 体力
    - random: true
      if: era.get('base:0:0') < era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%…… 아무리 일이 바쁘더라도, 쉬는 것도 잊지 마세요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우리의 『여정』은 아직 한참 남아 있다는 걸 잊지 마세요.」"
    - random: true
      if: era.get('base:0:0') < era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%, 오늘은 안색이 별로 안 좋아 보이네요…… 필요하시다면, 일하는 걸 제가 조금 도와드려도 될까요?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……그럼, 적어도 커피라도 한 잔 타드릴게요.」"
    - random: true
      if: era.get('base:0:0') < era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%……」"
        - "%CHARA%는 아무 말 없이 그저 부드럽게 %YOU%을(를) 마사지한다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「당신의 고단함을 제가 전부 덜어 드릴 수는 없겠지만…… 적어도 당신을 치유할 기회는 제게 주세요.」"
    # 体力が高い
    - random: true
      if: era.get('base:0:0') >= era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%, 오늘 컨디션도 좋아 보이시네요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘의 『여정』도, 분명 비바람 하나 없이 평온하겠죠.」"
    - random: true
      if: era.get('base:0:0') >= era.get('maxbase:0:0') * 0.45
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오래 기다리셨죠, %CALLNAME%…… 후후.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「웃는 얼굴이…… 귀엽다고요? ……%CALLNAME%께서 좋아하신다면, 앞으로는 조금 더 많이 웃도록 노력해 볼게요.」"

good_morning_after_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「무슨 일이세요, %CALLNAME%?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안색이 좋지 않네요……혹시 너무 오랫동안 밖에 나가지 않아서 바깥세상이 무서워지신 건가요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괜찮아요, 괜찮아요……제 곁에 계시면……무서운 일은 없답니다……」"

end_talk:
  # FLAGNAME:36 = 変態行為
  - if: era.get('flag:36') === 0
    lines:
      - if: era.get('love:119') < 75
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 아시겠어요? 이것이 맹신의 결말이에요……푹 쉬세요. 돌아오실 때까지 뒤처리는 제가 해 둘게요.」"
      - if: era.get('love:119') >= 75
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 아시겠어요? 이것이 맹신의 결말이에요……하지만 당신은 여기서 포기하지 않으시겠죠? 대접할 준비는 되어 있어요. 언제든 돌아오시기를 기다릴게요.」"
