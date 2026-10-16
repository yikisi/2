# @file 佐岳メイ - 募集
# @author 黑奴队长（临时）
# @author Claude (翻訳)

# @author 黑奴队长
welcome:
  title: "개선문상 계획"
  lines:
    # A_NAME = 秋川やよい
    - "이번 주 첫 출근일, %YOU%은(는) 학원에서 %A_NAME%를 만났다. %SEX%의 곁에는 노란 모자를 쓴 %PHY%이 한 명 있었다."
    - if: d.who_am_i > 0
      lines:
        - "%YOU%은(는) 그 사람이 예전부터 알고 지내던 %CHARA%라는 것을 알아보았다."
        - "알다시피 %CHARA%가 주로 맡는 일은 해외 원정을 지원하는 것이다."
    - if: d.who_am_i === 0
      content: "%YOU%이(가) 다가가 인사하자 %A_NAME%가 소개해 주었다. 이 %PHY%의 이름은 %CHARA_ACTUAL%이며, 오랫동안 해외 원정을 지원해 왔다고 했다."
    - "%A_NAME%는 %YOU%을(를) 격려했다. 일본 내에서 정상을 다투는 데 그치지 말고 해외 최고 수준의 레이스로 시야를 넓혀, 일본의 레이스 %UMA%들을 세계로 이끌어 달라고 했다."

# @author 黑奴队长
visit:
  title: "개선문상의 꿈"
  lines:
    - "해외 레이스에서 거둔 %YOU%의 성적에 %CHARA%는 가슴이 벅차올랐다."
    - "%SEX%에게 좀 더 직접적으로 힘을 보태고 싶다면—— 응접실에 가서 %SEX%와 이야기를 나누어 보자."
