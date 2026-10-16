# @file キングヘイロー - 日常
# @author 牛蛙煲
# @author Claude (翻訳)
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「잡담은 됐어. 어서 시작하자.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「킹의 사전에 어려움이라는 말은 없거든?」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「빨리 움직여. 아무것도 하지 않으면 일류라고 할 수 없어.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「그 사람에게 나를 증명하려면……」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「아침? 제대로 먹었어. 그러니까 어서 시작할까?」"
    - if: era.get('status:61:熬夜') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「룸메이트인 우라라가 왜인지 갑자기 안겨서 자려고 하길래……」"
    - if: era.get('status:61:熬夜') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「하아암…… 뭐야? 밤샘 같은 건 안 했어!」"

select:
  sync: true
  lines:
    - if: era.get('status:61:沉睡') === 0 && era.get('status:61:马跳S') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「오늘은 킹의 트레이닝을 볼 권리를 주겠어!」"
    - if: era.get('status:61:沉睡') === 0 && era.get('status:61:马跳S') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「%CALLNAME%, 가슴을 펴. 일류의 책임은 나와 함께 짊어지는 거야!」"
    - if: era.get('status:61:沉睡') === 0 && era.get('status:61:马跳S') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「오늘 일정, 어서 킹에게 알려 줘!」"
    - if: era.get('status:61:沉睡') > 0 || era.get('status:61:马跳S') > 0
      random: true
      lines:
        - "「킹?」"
        - "잠든 킹 헤일로가 떡하니 누워 트레이너실 소파를 독차지하고 있었다."
        - "한동안은 깨우기 어려울 것 같다."

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「그렇구나…… 오호호호, 킹은 이해력까지 일류네!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「그럼 나머지는 %CALLNAME%에게 맡길게.」"

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「승리는 일류 킹만의 것!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「오늘 레이스에서 누구보다 빠르고, 누구보다 강하고, 반드시 이길 일류 %UMA%는 누구지?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「무슨 소리야? 이겨 보이겠어! 나한테 맡겨!」"

talk:
  - if: era.get('cflag:61:干劲') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「오——호호호! 오늘도 일류의 하루네!」"
  - if: era.get('cflag:61:干劲') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「오늘 킹은 기분이 좋아! %CALLNAME%에게 킹과 함께할 권리를 주겠어!」"
  - if: era.get('cflag:61:干劲') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「컨디션은 나쁘지 않아. %CALLNAME%, 어서 시작하자.」"
  - if: era.get('cflag:61:干劲') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「난 준비됐어. %CALLNAME%은(는) 뭘 기다리는 거야?」"
  - if: era.get('cflag:61:干劲') === 0 && era.get('cflag:61:育成回合计时') < 3 * 48
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「그 사람을 뛰어넘을 수 있다는 걸 증명해야 해……」"
  - if: era.get('cflag:61:干劲') === 0 && era.get('cflag:61:育成回合计时') < 3 * 48
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「정신 똑바로 차려. %CALLNAME%은(는) 나와 함께 일류를 목표로 할 거니까.」"
  - if: era.get('cflag:61:干劲') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「그래서? 난 뭘 하면 돼?」"
  - if: era.get('cflag:61:干劲') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「기분이 별로야. 왜 이러지?」"
  - if: era.get('cflag:61:干劲') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「기운이 하나도 안 나……」"
  - if: era.get('cflag:61:干劲') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「난 일류 킹인데, 왜 이렇게 의욕이 안 생길까……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「우라라가 기숙사에서 시끄러울 때도 있지만, 집에 누군가 있는 느낌은 싫지 않아.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「스페셜 위크는 딱 봐도 누가 제대로 챙겨 주지 않으면 곤란해질 %UMA%네.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「어제 카와카미 프린세스가 예절을 물으러 왔어. 후후, %SEX%는 상대를 제대로 골랐네.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「일류 %UMA%의 트레이너라면 너도 긴장을 늦추지 마.」"
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「킹은 %CALLNAME%에게 킹을 똑바로 바라볼 특별한 권리를 주겠어! 계속 킹을 지켜보도록 해!」"
  - if: era.get('flag:当前月') === 12 || era.get('flag:当前月') <= 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「추워…… 잠깐, %CALLNAME%. 킹이 얼어서 못 움직이는 거 안 보여? 겉옷 좀 빌려줘!」"

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「나한테 주는 선물이야? 오호호호! 킹은 만족이야!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「킹이 %CALLNAME%의 선물을 그냥 받을 수는 없지. 답례는 준비해 둘게.」"

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「빨리, 빨리! 킹이 배고프잖아!」"
      - "%YOU%이(가) 「한입만 먼저」라는 요구를 일곱 번 거절하고서야 킹 헤일로는 조용해졌다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%은(는) 몰라? 일류란 모든 면에서 일류여야 한다는 뜻이야. 요리도 예외는 아니지?」"
      - "어느 날, 킹 헤일로가 식사를 준비하려는 %YOU%을(를) 막고 대신 만들겠다고 나섰다."
      - "%YOU%은(는) 킹 헤일로가 말하는 「일류 요리」를 전혀 믿지 않았지만 %UMA%의 고집을 꺾을 수는 없었다."
      - "킹 헤일로는 %YOU%을(를) 옆으로 비켜 세우고 틈을 타 주방으로 들어가 문을 잠갔다."
      - ……
      - "주방 안에서 킹 헤일로는 쓸 재료를 세며 콧노래를 불렀다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%이(가) 일류 킹을 못 믿다니…… 뭐, 됐어. 킹의 넓은 마음으로 %CALLNAME%을(를) 용서해 줄게!」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「우선 수프부터 만들어 볼까?」"
      - "킹 헤일로는 %YOU%이(가) 요리하던 모습을 열심히 떠올렸다. 의외로 요령을 잡고 제법 그럴듯하게 움직이기 시작했다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「하나도 안 어렵잖아!」"
      - "킹 헤일로는 수프를 작은 숟가락으로 한 술 떠 옆의 작은 그릇에 담고 맛을 봤다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「너무 싱거워. 소금을 더 넣자.」"
      - "킹 헤일로는 숟가락을 내려놓고 냄비에 소금을 더한 뒤 다시 작은 그릇의 수프를 맛봤다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「이상하네. 소금을 그렇게 넣었는데 왜 맛이 안 나지?」"
      - "킹 헤일로는 당황해서 수프에 소금을 쏟아 넣기 시작했다."
      - "작은 그릇의 수프를 다시 맛본 뒤 %SEX%는 힘없이 어깨를 늘어뜨렸다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「자, 일류 건강 수프를 드시도록 해! 킹이 %CALLNAME%의 건강을 생각해서 일부러 싱겁게 만들었어!」"
      - "%YOU%은(는) 자꾸 시선을 피하는 킹 헤일로를 보며 시험 삼아 한입 먹었다."
      - "킹 헤일로가 기대에 찬 눈으로 지켜보는 가운데, %YOU%은(는) 곧 더는 먹지 못하고 포기했다."
      - "「킹, 소금통을 통째로 엎은 거 아니에요?!」"
      - "킹 헤일로는 잠깐 멍해졌다가 납득했다는 듯 고개를 숙이고 입을 다물었다."
      - "%YOU%은(는) 조금 생각한 뒤 대충 사정을 이해했다."
      - "%YOU%은(는) 웃음을 필사적으로 참으며 수프를 다시 만들었다."
      - "그 식사는 꽤 묘한 분위기 속에서 끝났다."

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「안 피곤해! 킹은 지치지 않아!」"
      - "「일과 휴식의 균형을 잡는 것도 일류가 되기 위한 필수 조건 아닌가요?」"
      - "그 말을 들은 킹 헤일로는 말없이 누웠다. 오전에 강도 높은 트레이닝을 한 %SEX%는 오 분도 안 돼 잠들었다."
      - "%YOU%은(는) 킹 헤일로의 평온하게 잠든 얼굴을 보고 자신의 겉옷을 살며시 덮어 줬다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「피곤해——%CALLNAME%, 어서 킹에게 베개랑 담요를 준비해 줘. 킹은 푹 쉴 거야!」"
      - "킹 헤일로는 들어오자마자 자기 집처럼 소파에 쓰러졌다."
      - "%YOU%은(는) 난감하게 고개를 저으면서도 베개와 담요를 준비했다."
      - "하지만 %YOU%이(가) 가져왔을 때 킹 헤일로는 이미 소파 등받이를 끌어안고 잠들어 있었다."
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「자, %CALLNAME%. 끝에 앉아~」"
      - "킹 헤일로가 %YOU%을(를) 소파 끝에 앉혔다. %YOU%은(는) 영문을 알 수 없었다."
      - "이어서 킹 헤일로는 기분 좋게 %YOU%의 허벅지 위에 드러누웠다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「으아아——역시 %CALLNAME%의 다리가 베개로 딱이네.」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「킹의 베개가 되어 킹의 잠을 지켜볼 권리를 주겠……」"
      - "말이 끝나기도 전에 킹 헤일로의 숨소리가 고르게 변했다. 잠든 모양이다."
      - "%YOU%은(는) 킹 헤일로의 편안하게 잠든 얼굴을 바라보며, 깨울까 봐 움직이지 못했다."
      - "그렇게 다정한 한낮의 시간이 흘러갔다."
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 킹은 피곤해. 걷기 싫어.」"
      - "%YOU%은(는) 팔에 꼭 매달린 킹 헤일로를 곁눈질했다. 무엇을 원하는지는 이미 알고 있었다."
      - "그래서 %YOU%은(는) 몸을 숙여 킹 헤일로를 안아 올렸다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「킹과 함께 점심시간을 보낼 권리를 주겠어! 이대로 안고 트레이너실로 가.」"
      - "그렇게 %YOU%은(는) 킹 헤일로를 안고 트레이너실로 돌아가, 서로 끌어안은 채 점심시간을 보냈다."

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%은(는) 킹이 이런 데 시간을 낭비할 것 같아?」"
      - "결과적으로 킹 헤일로는 두 시간 내내 게임을 했다."
      - "「이제 그만할까요, 킹?」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「조금만 더 하면 이길 수 있었는데……」"
      - "킹 헤일로는 분해 보였다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「고작 게임쯤이야, 킹이라면 간단히……」"

school_rooftop:
  - "킹 헤일로의 부탁에 %YOU%은(는) 도시락 두 개를 들고 %SEX%와 함께 옥상으로 왔다."
  - "%YOU%이(가) 그중 하나를 킹 헤일로에게 건네자 %SEX%는 도시락의 방향을 돌려 다시 %YOU%에게 내밀었다."
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - "「좋아, 이걸로 킹이 만든 게 됐어! 감사하는 마음으로 먹도록 해!」"
  - "%YOU%은(는) 난감하게 웃으며 킹 헤일로가 건넨 「킹의 수제」 도시락을 받고, 두 번째 도시락을 %SEX%에게 건넸다."
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - "「교환 완료! 그럼 잘 먹겠습니다!」"
  - "%YOU%의 손에 있는 도시락은 직접 만든 것이었지만, 킹 헤일로는 그래도 「일류 킹을 찬양하라」고 요구했다."

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「나, 킹 헤일로는 일류 %UMA%! 일류가 되기 위해, 그 사람을 뛰어넘기 위해 전력을 다하겠어!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「다음에는 더 빨리 달려야 해. 누구보다도 빨리. 그래야 일류가 될 수 있어……」"

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「시간 낭비네!」"
      - "킹 헤일로는 싫다는 듯 말하면서도 %YOU%의 팔을 절대 놓지 않았다."
  - random: true
    lines:
      - "%YOU%은(는) 킹 헤일로의 손을 잡고 학원을 걸었다. 평소 말이 많던 킹 헤일로가 지금은 한마디도 하지 않았다."

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「세이운 스카이한테 낚시를 조금 배웠어. 떠올려 볼게……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「잡았다! 역시 킹은 낚시에서도 두말할 것 없는 일류네!」"

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「이렇게 걷는 것도 나쁘지 않아. 다음에도 킹의 산책에 함께할 권리를 %CALLNAME%에게 주겠어!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「길가의 작은 가게와 계절 풍경…… 산책할 때마다 특별한 수확이 있어.」"
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 킹은 피곤해. 어떻게든 킹을 데리고 돌아가 줘~」"
      - "킹 헤일로는 %YOU%에게 바짝 기대 피곤한 척했다."
      - "%YOU%은(는) 어쩔 수 없이 킹 헤일로의 허리를 받쳐 안아 올렸다."

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「의외로 재미있네.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「일류 점수를 내 보이겠어……」"
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 나로는 부족해? 인형만 보지 마!」"

o_s_drawing:
  - "상점가에 도착하니 마침 추첨 행사가 열리고 있었다."
  - "%YOU%은(는) 지난번 상점가에서 추첨권을 받았던 일을 떠올리고 꺼냈다."
  - acc: 1
    content: "「킹, 운을 시험해 볼래요?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「시험할 필요도 없어! 일류 킹이라면 운도 당연히 일류잖아!」"
  - "그 뒤 %YOU%의 추첨권은 킹 헤일로에게 빼앗겼다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「오——호호호! 킹을 위해 일등 경품을 준비해 두도록 해!」"
  - "%YOU%은(는) 킹 헤일로가 앞으로 다가가 추첨기의 손잡이를 돌리는 모습을 봤다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「정답은——일류!」"
      - "추첨 결과는 킹 헤일로의 기대대로였다. 일등 경품인 커다란 당근 상자가 킹 헤일로의 손에 들어왔다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그럼 오늘 저녁은 당근 햄버그야~ 당근은 전부 킹의 것. 요리는 당연히 %CALLNAME%이(가) 하는 거야!」"
      - "킹 헤일로는 무척 기분이 좋아 보였다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「멈추지 마, 멈추지 마……」"
      - "추첨기는 천천히 멈췄다. 「일등」에서 아주 조금 벗어난 「참가상」에 멈췄다."
      - acc: 1
        content: "「경품은 화장지네요.」"
      - "%YOU%은(는) 눈앞에서 돌처럼 굳은 킹 헤일로에게 말을 걸었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「전부 %CALLNAME% 탓이야! %CALLNAME%이(가) 내 일류 운을 빨아들인 게 틀림없어!」"
      - "킹 헤일로의 억지스러운 화풀이에 %YOU%은(는) 난감하게 웃었다."
      - acc: 1
        content: "「그럼 킹은 제가 어떻게 사과하면 좋겠어요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그럼 오늘 저녁에 킹에게 맛있는 당근 햄버그를 바치도록 해!」"

o_s_ktv:
  - "%YOU%은(는) 킹 헤일로를 노래방에 데려갔다."
  - "적당히 몇 소절 부른 뒤 %YOU%은(는) 불만을 쏟아 낼 듯한 킹 헤일로에게 말없이 마이크를 건넸다."
  - content:
      - fontWeight: bold
        content: %CHARA%
      - "「대체 뭘 부르는 거야. %CALLNAME%은(는) 얌전히 킹의 아름다운 노래를 감상해!」"
  - "킹 헤일로는 %YOU%을(를) 한 번 더 노려본 뒤 노래를 시작했다."
  - "당신은 저도 모르게 노래에 빠져들었다."

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「멋진 영화야. 킹의 취향에 맞네.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「인정할 수밖에 없네. %CALLNAME%의 취향도 꽤 괜찮아.」"
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「공포 영화? 오호호호, 일류 킹에게 두려움은 없어!」"
      - "공포 영화를 얕보는 연설을 마치고 십 분 뒤, 킹 헤일로는 %YOU%에게 딱 붙어 있었다."
      - "%YOU%은(는) 어쩔 수 없이 떨고 있는 %SEX%의 등을 쓰다듬었다."
      - "「이제 괜찮아. 무서워하지 마. 아까 그 유령은 사라졌어.」"
      - "귀를 늘어뜨리고 고개도 못 들던 킹 헤일로가 단숨에 기운을 차렸다."
      - "%SEX%는 무서운 장면이 끝났는지 다시 확인하고, 아무렇지 않은 척 %YOU%에게 기댔다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「킹은 하나도 안 무서워! 여기가 추운데 %CALLNAME%이(가) 따뜻해서 그런 것뿐이야!」"
      - "%YOU%은(는) 작게 웃으며 킹 헤일로의 허세를 들추지 않고 이마에 가볍게 입을 맞췄다."
      - "영화 줄거리는 더 이상 그다지 중요하지 않았다."

o_c_pray:
  - if: d.dice > 0.5
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「흥, 일류인 내가 이런 걸 믿을 것 같아!」"
      - "킹 헤일로는 태연하게 말하면서도 운세 쪽지를 꼭 쥐고 있었다. 말처럼 침착하지는 않았다."
  - if: d.dice < 0.5
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「역시 일류인 내가 뽑은 운세도 일류네!」"
      - "킹 헤일로는 기쁘게 운세 쪽지를 들고 적힌 내용을 %YOU%에게 보여 줬다."

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「스페셜 위크가 추천해 줬어. 인정할 수밖에 없네. %SEX%는 맛집을 찾는 안목이 꽤 좋아.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「이렇게 많이 먹는 건 킹의 이미지에 안 맞는데…… 이 가게가 너무 맛있는 게 잘못이야!」"
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%은(는) 왜 안 먹어? 킹이 먹여 주지 않으면 입도 안 벌릴 셈이야?」"
      - "일 생각을 하던 %YOU%은(는) 킹 헤일로의 목소리에 정신을 차렸다. 맞은편의 킹 헤일로는 이미 불만스러운 얼굴이었다."
      - "%YOU%은(는) 「일류 사과」로 용서를 구하려다가, 문득 못 할 것도 없다는 생각이 들었다."
      - "「그럼 사양하지 않을게요. 아~」"
      - "%YOU%은(는) 킹 헤일로를 보기 좋게 당황하게 만들었다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 뭐 하는 거야! 다들 보고 있잖아!」"
      - "%YOU%은(는) 꿈쩍도 하지 않았다."
      - "결국 킹 헤일로가 항복했다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「알았어, 알았어. 킹이 먹여 줄게. 어린애 같아. 정말 유치하긴!」"
      - "%YOU%은(는) 눈을 가늘게 뜨고 얼굴을 붉힌 킹 헤일로의 「일류 서비스」를 즐겼다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「있잖아, 킹이 해 줬으니까 %CALLNAME%도 보답해야 하지 않겠어?」"
      - "즐거운 시간이 끝난 뒤 %YOU%은(는) 킹 헤일로에게 잔뜩 보복당했다."
      - "가게 안에는 보는 사람이 질투할 만큼 달달한 분위기가 감돌았다."

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「가슴을 펴고 당당하게 나와 걸어. 너는 킹이 직접 인정한 트레이너잖아?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「그러니까 %CALLNAME%은(는) 킹이 일류로 나아갈 준비를 돕는 대신 킹을 데리고 시간을 낭비하겠다는 거야?」"
      - "「왜, 킹은 싫어?」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「그런 건 아니야…… 이렇게 조용히 함께 있는 것도 나쁘지 않네……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「킹과 함께할 권리를 주겠어!」"
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 자, 손 내밀어.」"
      - "%YOU%은(는) 킹 헤일로의 의도를 알 수 없었지만 그래도 손을 내밀었다."
      - "킹 헤일로는 %YOU%의 손가락을 살며시 펴 깍지를 꼈다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「자, 가자.」"
      - "지나가는 사람들이 %YOU%과(와) 킹의 맞잡은 손을 보고 수군거려도, 킹 헤일로의 얼굴이 점점 붉어져도, %SEX%는 끝까지 %YOU%의 손을 놓지 않았다."
  - if: era.get('love:61') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%은(는) 이대로 나와 함께 나아가 줘. 앞으로도 내 곁에 있어 줄 거지?」"

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%은(는) 딱 봐도 쇼핑하러 자주 안 오는 사람이네. 자, 킹을 따라와. 내가 안내해 줄게.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「걸어서 지쳤어? 안 돼, 아직 얼마 걷지도 않았잖아. 정신 차리고 킹의 걸음에 맞춰 따라와!」"
      - "마지막에 남은 것은 근육통과 킹 헤일로의 웃는 얼굴이었다."

good_night_normal:
  sync: true
  lines:
    - if: '!d.awake'
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「오늘 트레이닝도 일……」"
        - "트레이닝이 끝나자 킹 헤일로는 %YOU%의 사무용 의자를 차지하고 총평을 늘어놓으려 했지만 첫마디부터 말이 끊겼다."
        - "%YOU%이(가) 고개를 들자 킹 헤일로는 지쳐 잠들어 있었다."
        - "%YOU%은(는) 부드럽게 깨워 보려 했지만 실패했다."
        - "그래서 %YOU%은(는) 직접 킹 헤일로를 안고 기숙사 앞까지 데려갔다."
        - acc: 1
          content: "「이번에도 잘 부탁드립니다……」"
        - "%YOU%은(는) 킹 헤일로를 %SEX%의 사감에게 맡기고 기숙사로 들어가는 모습을 지켜봤다."
        - "%YOU%은(는) 한숨을 쉬었다. 다음에는 트레이닝 강도에 신경 써야겠다."
    - if: d.awake
      lines:
        - if: era.get('love:61') < 75
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - "「킹은 오늘 트레이닝에 만족해! 내일 트레이닝 계획을 세울 권리를 주겠어!」"
            - "%YOU%은(는) 기숙사 현관 앞에서 지친 와중에도 기운을 짜내 연설하는 킹 헤일로를 보고 쓴웃음을 지었다."
            - "%YOU%은(는) 킹 헤일로에게 손을 흔들며 푹 쉬라고 당부했다."
        - if: era.get('love:61') >= 75
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - "「킹은 다리가 조금 아파!」"
            - "%YOU%은(는) 트레이닝장 가장자리에 단정히 앉아 있으면서도 묘하게 활기찬 킹 헤일로를 보고 의아해했다."
            - acc: 1
              content: "「그럼 얼른 돌아가서 쉴까요?」"
            - "자세한 사정을 모르는 %YOU%은(는) 오늘 트레이닝은 여기까지 하자고 제안했다."
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - "「그럼 나 혼자 걸어서 돌아가라고?」"
            - "킹 헤일로가 마침내 속내를 드러냈다."
            - "그래서 %YOU%은(는) 한 걸음 다가가 조금 얼굴을 붉힌 킹 헤일로를 안아 올렸다."
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - "「오——호호호! 킹을 안고 기숙사까지 데려다줄 권리를 주겠어!」"

good_night_sex:
  - "트레이닝 후 %YOU%은(는) 늘 그랬듯 킹 헤일로를 안고 기숙사 앞까지 데려갔다."
  - "그런데 도착해도 킹 헤일로는 %YOU%의 목을 감은 손을 풀지 않았다."
  - acc: 1
    content: "「킹, 도착했어요.」"
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - "「%CALLNAME%, 아직도 모르겠어?」"
  - "킹 헤일로는 조금 부끄러운 얼굴로 %YOU%을(를) 바라봤다."
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - "「킹을 기쁘게 해 줄 권리를 너에게 주겠다고.」"
  - "말을 마친 킹 헤일로는 고개를 숙이고 %YOU%을(를) 더 세게 끌어안은 채 아무 말도 하지 않았다."
  - acc: 1
    key: sex
    content: "「더없는 영광입니다.」"
    lines:
      - "%YOU%은(는) 킹 헤일로를 안은 채 방향을 바꿔 기숙사에서 멀어졌다."
  - acc: 2
    content: "「하지만 벌써 기숙사에 도착했는걸요.」"
    lines:
      - if: d.check ===2
        lines:
          - "%YOU%의 거절을 들은 킹 헤일로는 곧바로 %YOU%의 품에서 뛰어내렸다."
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「흥, 재미없어졌네.」"
          - "말을 마친 킹 헤일로는 놀랍게도 %YOU%을(를) 어깨에 둘러멨다."
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「킹의 부탁을 거절하다니, 용서 못 해!」"
          - "지나가는 사람들의 이상한 시선 속에서 %YOU%은(는) 킹 헤일로에게 끌려갔다."
      - if: d.check < 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「앗, 기다려——」"
          - "%YOU%은(는) 킹 헤일로의 말을 흘려듣고 기숙사를 향해 곧장 걸었다."
          - "그리고 품 안의 킹 헤일로를 소식을 듣고 나온 사감에게 넘겼다."
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「잠깐!」"
          - "%YOU%은(는) 웃으며 사감에게 끌려가는 킹 헤일로에게 손을 흔들었다."

cl_valentine:
  title: "밸런타인데이"
  lines:
    - "오늘은 밸런타인데이다. %YOU%은(는) 아침부터 의식하며 일부러 천천히 트레이너실을 정리하고 있었다."
    - "마침내 %YOU%이(가) 예순한 번째로 시계를 올려다본 뒤 트레이너실 문을 두드리는 소리가 났다."
    - "%YOU%은(는) 단숨에 문으로 달려갔지만 잠시 뜸을 들이고 문을 열었다."
    - "밖에는 조금 의아한 얼굴의 킹 헤일로가 서 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 뭐 해? 왜 킹을 빤히 보는 거야?」"
    - "%YOU%은(는) 킹 헤일로가 오늘이 밸런타인데이인 줄 모르는 건가 싶어 조금 실망했다."
    - "그때 킹 헤일로가 무언가 든 봉투를 꺼내 %YOU%에게 던졌다."
    - "%YOU%은(는) 황급히 받아 들고 예쁘게 포장된 초콜릿임을 알아채 기뻐했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹이 기념일을 잊을 리 없잖아! 편의점에서 적당히 산 거야. %CALLNAME%도 너무 감동할 필요는 없어.」"
    - "킹 헤일로는 조금 얼굴을 붉히고 고개를 돌린 채 팔짱을 꼈다."
    - "하지만 %YOU%은(는) %SEX%의 오른쪽 손등에 화상으로 생긴 물집을 발견했다."
    - acc: 1
      key: select
      content: "「고마워, 킹. 정말 기뻐.」 (호감 +20)"
      lines:
        - "%YOU%은(는) 너무 깊이 캐묻지 않기로 했다."
        - "그 뒤 %YOU%은(는) 킹 헤일로 앞에서 초콜릿 한 알을 집어 입에 넣었다."
        - acc: 1
          content: "「초콜릿 정말 맛있어. 완벽한 밸런타인 선물이야.」"
        - "킹 헤일로는 기뻐 보였지만 곧 감정을 억눌렀다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「됐어, 맛있다는 건 알겠어. 다음에도 만들어…… 아니, 다음에도 사 줄게!」"
        - "%YOU%은(는) 킹 헤일로의 말실수를 못 들은 척했다."
    - acc: 2
      content: "「킹, 아직 아파?」 (연모 +3)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「뭐가 아프다는 거야?」"
        - "킹 헤일로는 %YOU%의 말을 이해하지 못하다가, %YOU%이(가) 다가와 %SEX%의 오른손을 살며시 들어 올리고서야 알아차렸다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「벼, 별로 안 아파. 그리고 초콜릿 만든 지도 꽤 지났으니까 지금은 거의 느낌도 없어.」"
        - "%YOU%에게 들킨 킹 헤일로는 조금 멋쩍게 고개를 숙였다."
        - acc: 1
          content: "「고마워, 킹. 정말 기뻐.」"
        - "그러자 킹 헤일로는 다시 새침한 표정으로 돌아왔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 감사하며 먹도록 해! 말해 두겠는데, 킹은 %CALLNAME%의 평가 따위 전혀 신경 안 써!」"
        - "킹 헤일로는 고개를 돌렸지만 %YOU%은(는) %SEX%가 여전히 곁눈질하고 있음을 알아챘다."
        - "그래서 %YOU%은(는) 초콜릿 한 알을 입에 넣고 만족스러운 표정을 지었다."
        - "킹 헤일로는 그제야 안심하고 시선을 거뒀다."

cl_halloween:
  title: "핼러윈"
  lines:
    - "오늘은 핼러윈이다. %YOU%은(는) 길을 오가는 기묘한 「요괴」들을 보고 진작 알아챘다."
    - "%YOU%은(는) 열성적으로 사탕을 조르는 요괴들에게서 겨우 벗어나 자기 트레이너실로 돌아왔다."
    - "다행히 트레이너실에는 낱개 사탕이 충분히 남아 있어 욕심 많은 %UMA%들을 상대할 수 있었다."
    - "게다가 %YOU%은(는) 누군가를 위해 특별한 사탕 꾸러미를 준비해 서랍 안쪽에 넣어 뒀다."
    - "갑자기 트레이너실 문을 두드리는 소리가 났다. %YOU%은(는) 놀라 펜을 떨어뜨릴 뻔했다."
    - "%YOU%은(는) 숨을 고르고 기대를 품은 채 다가가 힘차게 문을 열었다——"
    - acc: 1
      content: "「어서 와, 킹……」"
    - "하지만 밖에 있는 것은 킹이 아니었다."
    - content:
        - fontWeight: bold
          content: %UMA%A
        - "「과자 안 주면 장난칠 거야!」"
    - "무언가 괴물로 분장한 귀여운 %UMA%였다."
    - "%YOU%은(는) 잠시 멍해졌다가 서랍에서 준비한 낱개 사탕을 꺼냈다."
    - "%YOU%은(는) %UMA%의 바구니에 넉넉히 넣어 줬다. %SEX%가 기뻐하며 인사하고 다른 트레이너의 문을 두드리러 달려가는 모습을 배웅했다."
    - "%YOU%은(는) 길게 숨을 내쉬고 자리로 돌아왔다."
    - "곧 다시 문 두드리는 소리가 났다."
    - content:
        - fontWeight: bold
          content: %UMA%B
        - "「과자 안 주면 장난칠 거야!」"
    - "이번에도 킹은 아니었다. %YOU%은(는) 사탕을 건네며 조금 실망했다."
    - "한참 더 지나 %YOU%의 서랍에서 낱개 사탕이 동난 뒤에야 킹 헤일로가 우아하게 트레이너실 문을 두드렸다."
    - "%YOU%은(는) 이미 서랍으로 손을 뻗고 있었지만 갑자기 거뒀다."
    - acc: 1
      content: "「킹, 핼러윈 의상은?」"
    - "%YOU%은(는) 의아하게 머리를 긁으며 평소 옷차림의 킹 헤일로를 봤다."
    - "킹 헤일로의 얼굴이 아주 조금 붉어졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「무슨 소리야! 킹이 오늘 핼러윈인 걸 잊을 리 없잖아! %CALLNAME%, 봐. 지금 네 앞에 선 건 일류 %UMA%로 분장한 킹 헤일로야!」"
    - "킹 헤일로는 옷자락을 잡고 %YOU% 앞에서 두 바퀴 돌았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어때? 똑같지?」"
    - "%YOU%은(는) 킹 헤일로의 잔꾀에 웃음을 터뜨릴 뻔했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 내 과자는?」"
    - "킹 헤일로는 %YOU%이(가) 의상을 평가하지 않자 대놓고 사탕을 조르기 시작했다."
    - acc: 1
      content: "「아, 있어. 있어.」"
    - "%YOU%은(는) 책상 앞으로 가 서랍을 열고 예쁘게 포장된 봉투를 킹 헤일로에게 건넸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 핼러윈 작전, 대성…… 공?」"
    - "킹 헤일로는 웃으며 봉투를 받았다가 미소가 굳었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 안에 아무것도 없잖아?」"
    - "킹 헤일로는 볼을 부풀리고 %YOU%을(를) 추궁했다."
    - acc: 1
      content: "「들어 있어요. 다만 일류 %UMA%에게만 보이는 일류 사탕이죠.」"
    - "%YOU%은(는) 일부러 진지한 표정을 짓고 느긋하게 의자에 앉아 킹 헤일로를 바라봤다."
    - "킹 헤일로의 얼굴이 붉어졌다 하얘지는 모습을 보고 %YOU%은(는) 속으로 이미 크게 웃고 있었지만 표정만은 진지하게 유지했다."
    - acc: 1
      content: "「일류 %UMA%로 분장한 일류 킹이 일류 트레이너의 일류 사탕을 받는다. 이 과정, 일류 아닌가요?」"
    - "%YOU%은(는) 웃음을 참으며 불에 기름을 더 부었다."
    - "마침내 참지 못한 킹 헤일로가 다가와 %YOU%의 어깨를 잡고 흔들기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 이제 킹 좀 그만 놀려! 인정할게. 오늘이 핼러윈인 거 정말 잊었어!」"
    - "그 순간 %YOU%은(는) 더 참지 못하고 소리 내어 웃었다."
    - "킹 헤일로의 시선에 살기가 어리자 %YOU%은(는) 겨우 웃음을 멈추고 서랍에서 킹 헤일로를 위한 특별한 사탕을 꺼냈다."
    - acc: 1
      content: "「자, 킹. 해피 핼러윈?」"
    - "킹 헤일로는 조심스럽게 받아 봉투의 무게를 확인했다."
    - "%YOU%은(는) 그 모습을 보고 다시 웃음을 터뜨릴 뻔했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥, %CALLNAME%도 양심은 조금 있네! 해피 핼러윈!」"
    - "올해 핼러윈도 묘한 분위기 속에서 지나갔다."

cl_christmas_in_edu:
  title: "크리스마스"
  lines:
    - "크리스마스 당일, 킹 헤일로가 트레이너실에 찾아왔다."
    - "%YOU%이(가) 소파에서 무언가 생각하는 것을 본 %SEX%는 곧장 다가와 옆에 앉았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 일정은 전부 취소해! 크리스마스에 킹의 추가 트레이닝을 계획할 권리를 주겠어!」"
    - "킹 헤일로는 %YOU%에게 기대 %YOU%의 몸을 한쪽으로 기울게 했다."
    - "%YOU%은(는) 고개를 들어 킹 헤일로를 봤다."
    - acc: 1
      content: "「미안하지만 받아들일 수 없겠네요. 오늘은 이미 약속이 있거든요.」"
    - "킹 헤일로는 소파에서 펄쩍 뛰었다. 털을 곤두세운 고양이 같았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐, 뭐라고? 다시 말해 봐.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나를 내버려 두겠다는 거야? 대체 뭘 하려고!」"
    - acc: 1
      content: "「어떤 %UMA%와 데이트하러 갈 거예요.」"
    - "킹 헤일로의 분노가 한계를 넘었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「똑바로 말해! 언제 누구랑 데이트하는 건데!」"
    - "킹 헤일로는 %YOU%의 어깨를 잡고 거세게 흔들었다."
    - "%YOU%은(는) 풋 하고 웃었다. 킹 헤일로가 다음 공격을 하기 전에 %SEX%의 손을 톡톡 두드려 그만 놓으라는 뜻을 전했다."
    - acc: 1
      content: "「일류 킹 헤일로랑요! 잊었어요? 킹이 직접 부탁했잖아요.」"
    - "킹 헤일로는 멍하니 %YOU%을(를) 놓았다. 지난주에 분명 그런 말을 했던 기억이 어렴풋이 떠올랐다."
    - "%YOU%은(는) 흐트러진 옷깃을 정리하며 킹 헤일로의 얼굴이 붉어졌다 하얘지는 모습을 웃으며 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「분명 그런 일이…… 사실 이건 킹이 %CALLNAME%에게 내린 시험이야! %CALLNAME%이(가) 킹의 부탁을 기억하는지 시험한 거니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지금 보니 %CALLNAME%은(는) 역시 킹의 일류 트레이너답게 잘 기억하고 있네. 킹은 기뻐!」"
    - "%YOU%은(는) 순식간에 변명을 생각해 낸 킹 헤일로에게 크게 놀랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「시험을 통과한 보상으로 오늘 일정의 결정권을 %CALLNAME%에게 맡기겠어! 네가 정해도 좋아.」"
    - "%YOU%은(는) 곧바로 과장되게 감사하는 몸짓을 했다가 다시 킹 헤일로의 눈총을 받았다."
    - acc: 1
      key: select
      content: "「그럼 일류 크리스마스 데이트를.」 (호감 +20, 연모 +3)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 갈아입고 나가자! 마침 킹이 보고 싶은 가게가 몇 군데 있어.」"
        - "%YOU%은(는) 킹 헤일로의 재촉에 외출복으로 갈아입고 %SEX%에게 끌려 트레이너실을 나섰다."
    - acc: 2
      content: "「그럼 일류 크리스마스 추가 트레이닝을.」 (스피드or스태미나or파워or근성 +20)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「일류 킹은 크리스마스에도 게으름 피우지 않아!」"
        - "그 뒤 거의 텅 빈 트레이닝장에서 열띤 추가 트레이닝이 이어졌다."
