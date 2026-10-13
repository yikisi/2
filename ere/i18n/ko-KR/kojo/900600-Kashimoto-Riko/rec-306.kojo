# @file 樫本理子 - 募集
# @author 黑奴队长（临时）
# @author Claude (翻訳)
intro:
  - if: era.get('flag:当前声望') < 500
    lines:
      - "%CHARA%는 %YOU%에게 트레이닝에 임하는 마음가짐을 몇 가지 알려 주며 건강 관리의 중요성을 강조했다."
      - "실전에 관해서는 자신의 팀에 자질이 뛰어난 %B_UMA% 둘이 있으니, %B_SEX%들의 트레이닝을 돕는 일부터 시작하면 된다고 했다."
  - if: era.get('flag:当前声望') >= 500
    lines:
      - "%CHARA%는 트레이너로서 %YOU%의 실력을 인정했다."
      - "기력에 여유가 있다면 곧 육성을 시작할, 자질이 뛰어난 %B_UMA% 둘의 트레이닝을 도와 달라고 했다."

task:
  - if: era.get('cflag:202:育成次数') === 0
    lines:
      # B_NAME = ビターグラッセ
      # L_NAME = リトルココーン
      - "%CHARA%의 소개로 %YOU%는 %B_NAME%와 %L_NAME%를 만났다."
      - "%CHARA%의 기대를 짊어지고, %YOU%와 %B_SEX%들의 삼 년이 시작되었다……"
      - "（%B_SEX%들을 이끌고 중상 레이스에서 많이 우승하자……）"
  - if: era.get('cflag:202:育成次数') > 0
    lines:
      - "세월이 흘러 %YOU%는 %B_NAME%, %L_NAME%와 다시 같은 잔디 위에 섰다."
      - "이번에는 %B_SEX%들의 소원을 이루어 줄 수 있을까."

recruit:
  title: "성과"
  lines:
    - "%B_NAME%와 %L_NAME%가 각각 일정한 성적을 남긴 뒤, %CHARA%는 %YOU%를 찾아와 성과를 칭찬했다."
    - "%CHARA%는 자신과 팀을 꾸려 앞으로도 관리주의를 더욱 널리 펼쳐 나가자며 %YOU%를 초대했다."

recruit_hentai:
  title: "「성과」"
  lines:
    - "%B_NAME%와 %L_NAME%의 육성이 끝난 뒤, %CHARA%는 %YOU%를 찾아왔다."
    - if: era.get('love:306') >= 75
      lines:
        - "눈에 띄는 성적은 남기지 못했어도 자질은 보여 주었다. 그러니……라고 %CHARA%가 말했다."
        - "%CHARA%는 갑자기 말문이 막히더니 얼굴을 붉히며 더듬더듬 %YOU%를 팀으로 초대했다. 관리주의를 더욱 널리 펼치기 위해서, 그리고……"
        - "%YOU%가 수락하자 %CHARA%는 여전히 얼굴을 붉힌 채 작별 인사를 했다."
        - "트레이닝실을 나서는 %CHARA%의 뒤에서 들려오는 목소리에, %YOU%는 예전에 우연히 목격한 광경을 떠올렸다. 낯익은 %B_UMA% 두 사람이 그녀에게 응원을 보내던 그 모습이었다."
    - if: era.get('love:306') < 75 && (d.glasse_hentai || d.cocon_hentai)
      lines:
        - if: d.glasse_hentai && d.cocon_hentai
          content: "%CHARA%는 %YOU%가 그들에게 한 짓을 용서하지 않겠다고 말했다."
        - if: d.glasse_hentai && !d.cocon_hentai
          content: "%CHARA%는 %YOU%가 %B_NAME%에게 한 짓을 용서하지 않겠다고 말했다."
        - if: '!d.glasse_hentai && d.cocon_hentai'
          content: "%CHARA%는 %YOU%가 %L_NAME%에게 한 짓을 용서하지 않겠다고 말했다."
        - "이사장 대리로서 %YOU%에게 내리는 처분은 이제 시작일 뿐이었다."
        - "%YOU%에게 모욕당한 담당을 지키기 위해서라면, 스스로 위험에 뛰어드는 한이 있더라도."
