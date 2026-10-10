# @file メジロパーマー - 地下室
# @author KUN
# @author Claude (翻訳)
welcome:
  sync: true
  lines:
    - random: true
      lines:
        - "%YOU%가 눈을 떴을 때 차갑고 닫힌 공간에 있었다."
        - "주위를 둘러보자 익숙한 미소가 보였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%~ 기분 어때~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「너를 위해 특별히 준비했어. 놀랐어?」"
    - random: true
      lines:
        - "어두운 작은 방에서 잠이 덜 깬 %YOU%는 머리를 짚고 일어났다."
        - "아무도 없는 공간. %YOU% 외에는 인기척이 없는 듯했다."
        - "침대에서 내려 걸으려는 순간 익숙한 목소리가 들렸다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%~ 다녀왔어~」"
        - "모퉁이에서 얼굴을 내민 %CHARA%가 미소 지으며 %YOU%를 봤다."

flatter:
  - if: (t = era.get('relation:64:0')) < 0
    lines:
      - "자신의 파트너는 햇살 같은 사람이다. 제대로 이야기하고 솔직하게 부탁하면……"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「파머도 %CALLNAME% 거짓말 정도는 알아.」"
      - "%CHARA%는 망설임 없이 %YOU%의 말을 끊고 평온하게 웃었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그런 %CALLNAME%에게는 작은 벌이 필요할지도 모르겠네.」"
      - "%YOU%가 뭐라도 더 말하기 전에 %CHARA%가 입술의 움직임을 막았다."
      - "주저 없이 %YOU%를 그 침대로 데려가 조용히 옆에 앉았다."
      - "너무 조용해서 더는 말을 꺼낼 수 없었다."
  - if: t >= 0 && (t = (t < era.get('love:64') * (era.get('flag:极端行为限制') || 1)))
    lines:
      - "말로 %CHARA%와 화해하려 했지만 입술에 목소리가 막혔다."
      - "%YOU%가 숨을 따라가지 못하자 %CHARA%는 만족스럽게 입술을 뗐다. 긴 은빛 실이 늘어졌다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「안 돼.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%는 그런 말 하면 안 되니까.」"
      - "힘이 풀린 %YOU%는 다시 작은 침대에 쓰러져 자신을 내려다보는 %CHARA%를 올려다봤다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%가 그런 말 하는 건 싫어.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이제 전부 %CALLNAME% 탓이야.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「파머랑 계속 여기 있자.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～」
  - if: '!t'
    lines:
      - "햇빛이 들지 않는 방에서 %YOU%는 여전히 말로 상황을 돌파하려 했다."
      - "하지만 이번에는 %CHARA%가 %YOU% 곁에 앉은 채 조용히 듣고 있었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……%CALLNAME%가 말하지 않아도 알아.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「파머가 겁쟁이일 뿐이야…… 미안해.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「사실 %CALLNAME%는 아무 잘못도 없어.」"
      - "고개를 숙이고 천천히 %YOU% 곁으로 다가와 어깨에 기댔다."
      - "불안하게 손을 뻗어 늘어진 %YOU%의 손을 살며시 감쌌다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「적어도…… 조금만 더 고집부리게 해 줘.」"
      - "손가락이 손바닥으로 파고들어 열 손가락을 맞잡았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「조금만 더 고집부리게 해 줘. 그거면 돼.」"

battle_escape:
  - "짧은 소란이 끝나자 작은 방은 다시 조용해졌다."
  - "%CHARA%는 %YOU% 앞에 조용히 쓰러져 움직이지 않았다."
  - "이제 눈앞의 자물쇠만 열면 돌아갈 수 있다."
  - "(……이래도 되나. %CHARA%를 여기 두고 가도……)"
  - "스스로에게 묻자 가슴이 아파진 %YOU%는 결국 돌아서기로 했다."
  - "함께 도망치기로 한 파트너라면 함께 돌아가야 한다."
  - "남은 힘을 짜내 일어나 기절한 %CHARA%를 안아 들고 이미 찾아 둔 열쇠를 집었다."
  - "함께 돌아가자."

battle_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그러면 안 되지, %CALLNAME%.」"
  - "몰래 움직이는 손을 가볍게 붙잡고 도리어 %YOU%를 벽 쪽으로 넘어뜨렸다."
  - "%CHARA%는 위에서 %YOU%의 표정을 보며 묘하게 웃었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「파머가 좋아하는 %CALLNAME%는 이런 짓 안 하지?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「돌아가서 다시 천천히 이야기하자.」"
  - "어두운 불빛 아래 푸른 눈동자가 희미하게 빛났다."

battle_prison:
  - "차가운 열쇠가 짤랑 소리를 냈다."
  - "떨리는 %YOU%의 양어깨를 힘센 손이 뒤에서 살며시 잡았다. 뜻밖의 온기가 전해졌다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%~ 뭐 해~」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「사과하면 못 본 걸로 해 줄게~」"
  - "가볍게 던진 몇 마디. 하지만 %YOU%는 아무 말 못 하고 멍하니 %CHARA%에게 이끌려 침대로 갔다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%는 여기서 파머를 기다리면 돼.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「다른 건 아무래도 좋잖아.」"

find_escape:
  sync: true
  lines:
    - "%YOU%가 애쓴 끝에 자물쇠가 드디어 느슨해졌다. 조금만 더 하면 된다고 생각한 순간……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 일부러 여기서 돌아오길 기다려 준 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 파머의 %CALLNAME%야!」"
    - "미소 지으며 %YOU%의 손에서 도구를 받아 들고 다시 돌아서 문을 닫았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마중하려면 여기면 충분해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%가 자물쇠를 열면 파머는 곤란하거든.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「알겠지, %CALLNAME%?」"

back_basement:
  sync: true
  lines:
    - if: d.start
      lines:
        - if: era.get('base:0:体力') < 100
          lines:
            - "피곤한 눈을 뜨자 언제나 밝던 그 아름다운 푸른 눈동자와 시선이 겹쳤다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「으흥~」"
        - if: era.get('base:0:体力') >= 100
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「오, 깼네.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「%CALLNAME% 자는 얼굴을 더 보고 싶었는데. 정말……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그래도 여기 있으면 몇 번이고 %CALLNAME% 웃는 얼굴을 볼 수 있겠지?」"
    - if: '!d.start'
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「다녀왔어~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오, %CALLNAME%~ 오늘도 착하네~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「안심해. 계속 곁에 있을게.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「여기는…… 파머가 도망쳐 도착한 골인 지점이니까.」"

start_fixing:
  - "쉬고 있던 %YOU%의 귀에 입구 쪽에서 금속이 바닥에 떨어지는 소리가 들렸다."
  - "뭔가 눈치채고 보러 가려던 %YOU%는 마침 %CHARA%와 마주쳤다."
  - "큰 문은 원래대로 멀쩡했고 함정과 자물쇠는 오히려 전보다 더 잘 갖춰져 있었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%? 뭐 하러 왔어?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아, 파머 보러 왔구나?」"
  - "다 알면서 묻는 듯 %CHARA%는 반쯤 억지로 %YOU%를 방 안으로 밀어 넣었다."
  - "%YOU%에게 조용히 하라는 손짓을 하고 웃었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「미안해. 깨웠네.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「나중에 또 보러 갈게, %CALLNAME%.」"

ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……그렇네.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「역시 %CALLNAME%도 계속 여기 있는 건 싫겠지.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「미안해. %CALLNAME%를 줄곧 여기 둬서.」"
  - "%YOU% 앞에 가만히 서서 고개를 숙인 채 흔들렸다. 다음 순간 쓰러질 듯했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그래도 적어도…… 지금만은 고집부리게 해 줘.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「조금이면 돼. 아주 조금만.」"
  - "비틀거리며 앞으로 나와 %YOU%의 품에 쓰러졌다. 옷 아래로 희미한 열기가 전해졌다."
  - "허리에 팔을 두르고 힘껏 끌어안았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이거면 돼……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이렇게 있으면…… 조금만 더면 되니까……」"
  - "얼마나 지났을까. 꼭 안던 손이 마침내 풀렸다."
  - "얼굴을 붉힌 %CHARA%가 미소를 지으며 볼의 물기를 닦았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저기, %CALLNAME%.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「밖에 나가도…… 우리 아직 파트너지?」"
  - "%CHARA%가 자물쇠를 열자 경쾌한 소리가 났다."
  - "문을 등지고 %YOU%에게 손을 내밀었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「가자…… %CALLNAME%.」"

ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아직 안 돼.」"
  - "부탁하는 %YOU%에게 %CHARA%는 옅게 웃기만 하며 얼굴을 살며시 쓰다듬었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%가 여기에 없으면.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「파머는 너무 외롭거든.」"
  - "몸을 일으켜 %YOU%의 귓가에 다가가 귓불에 천천히 혀를 댔다."
  - "%YOU%가 떠는 걸 느끼고 %CHARA%는 달콤하게 웃었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「파머 곁에 있으면 돼……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」

ask_time:
  - "%YOU%가 시험 삼아 %CHARA%에게 시간을 묻자 무덤덤한 미소만 돌아왔다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「시간이라면 아직 많아.」"
