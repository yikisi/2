# @file 桐生院葵 - 募集
# @author 黑奴队长（临时）
# @author Claude (翻訳)
intro:
  # H_NAME = ハッピーミーク
  - "%CHARA%는 %YOU%에게 자신이 담당하는 %H_UMA% %H_NAME%가 있으며, 자질이 상당히 뛰어나고 곧 육성을 시작할 예정이라고 알려 주었다."
  - "괜찮다면 당분간 %H_SEX%의 트레이닝을 도와보지 않겠느냐고 했다. 좋은 경험이 될 것이라는 말도 덧붙였다."

recruit:
  title: "성과"
  lines:
    - "%H_NAME%가 G1에서 우승한 뒤, %CHARA%는 %YOU%를 찾아와 훌륭한 성과라며 칭찬했다."
    - "%H_NAME%뿐 아니라 더 많은 %H_UMA%의 승리와 꿈을 위해, 앞으로도 함께 힘을 보태고 싶다고 했다."

recruit_hentai:
  title: "「성과」"
  lines:
    - "%H_NAME%의 육성이 끝난 뒤, %CHARA%는 %YOU%를 찾아왔다."
    - if: d.meek_pregnant
      lines:
        - "%CHARA%는 %YOU%가 %H_NAME%를 더럽힌 일에 몹시 분노했다."
        - "하지만 일이 이렇게 된 이상, %H_NAME%를 위해서라도 현실을 받아들일 수밖에 없었다."
        - "그렇다고 %YOU%를 용서할 생각은 없었다."
    - if: '!d.meek_pregnant && d.meek_love'
      lines:
        - "%H_TEEN%의 마음을 기만한 %YOU%를 단호하게 꾸짖었다."
        - "하지만 %H_NAME%가 앞으로도 %YOU%와 함께 있고 싶다고 한다면, 그녀도 더는 할 말이 없었다."
        - "다만 %YOU%가 %H_NAME%에게 못할 짓을 하지 않도록 앞으로도 눈을 떼지 않겠다고 했다."
    - if: '!d.meek_pregnant && !d.meek_love'
      lines:
        - "제대로 된 성적은 남기지 못했지만, 지난 삼 년 동안 %YOU%도 단련되었다——%CHARA%는 진지한 얼굴로 그렇게 말했다."
        - "그러니 %YOU%가 어엿한 트레이너가 되는 날까지 앞으로도 힘을 보태겠다고 했다."
        - "말을 마친 %CHARA%는 주위에 사람이 없는 틈을 타 %YOU%의 뺨에 살며시 입을 맞췄다."
