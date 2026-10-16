# @file メジロパーマー - 日常
# @author KUN
# @author Claude (翻訳)
select:
  sync: true
  lines:
    - if: era.get('status:64:10') === 0 && era.get('status:64:39') === 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「오늘도 %SELF_CALL%는 기운 넘쳐! 트레이닝은 한꺼번에 해치우자!」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「자기만의 달리기가 얼마나 중요한지 깨닫게 해 준 건 %CALLNAME%야. 늘 고마워!」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「무슨 일 있으면 %SELF_CALL%한테 말해 줘! 아, 그냥 이야기하고 싶은 것뿐이지만~」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「요즘 다들 말을 많이 걸어 주더라. 싫지는 않아…… 아니, 대환영이지!」"
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「요즘 %CALL_65%%SEX% 말이야…… 저기, %CALLNAME%, 듣고 있어?」"
        - if: era.get('love:64') >= 25
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「역시 도망치는 느낌이 최고야…… 오늘도 같이 도망갈래, %CALLNAME%?」"
        - if: era.get('love:64') >= 50
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「%CALLNAME%, 언제 시간 있어? 같이 나가고 싶어서…… 그게……」"
        - if: era.get('love:64') === 100
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「%CALLNAME%은(는) 계속 곁에 있어 줄…… 거지?」"
    - if: era.get('status:64:10') > 0 || era.get('status:64:39') > 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「후…… 후……」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「더는 안 들어가…… 에헤헤……」"

select_escape:
  sync: true
  lines:
    - if: d.half_life === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내가 여기 있는 게 이상해, %CALLNAME%?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%의 곁 말고는…… 이제 어디로 가야 할지 모르겠어……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%의 곁에 있을 수만 있다면……」"
    - if: d.half_life === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「여어, %CALLNAME%.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……미안해, 그런 짓을 저질렀으니 용서받지 못하는 게 당연하겠지……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하지만 난 역시…… 네 곁에 있고 싶어.」"

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「에헤, 그런 거야? 역시 %CALLNAME%(이)네.」"
      - "%CHARA%는 기쁘게 답안을 작성하더니, 곁에 있는 %YOU%을(를) 향해 엄지를 치켜세우는 것도 잊지 않았다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「OK OK, 이해했어!」"
      - "%CHARA%는 무언가 깨달은 듯, 남은 문제들을 거침없이 해결해 나갔다."

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「좋아, 이대로 전력을 다해 도망쳐 보겠어!」"
      - "%CHARA%는 주먹을 꽉 쥐고 기세 좋게 외쳤다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「편자도 다 박았네, 고마워, %CALLNAME%!」"
      - "%CHARA%는 조금 놀란 표정이었으나, 이내 얼굴에 따스한 미소를 띠었다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어라~ 그렇게 긴장할 거까진 없잖아, 트레이너?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그래도 완벽하게 해낼 거야. 승리를 눈앞에서 놓치고 싶지는 않으니까!」"

talk:
  # STATUSNAME:10 = 昏睡
  # STATUSNAME:39 = 馬跳S
  - if: era.get('status:64:10') > 0 || era.get('status:64:39') > 0
    lines:
      - if: d.half_life === 1
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME% 냄새…… 아직…… 어디……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「안 놓칠 거야…… 후후~」"
      - if: d.half_life === 0
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「후…… 더는 안 들어가……」"
          - if: era.get('love:64') >= 50
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「후아아…… %CALLNAME% 냄새…… 에헤헤……」"
  - if: era.get('status:64:10') === 0 && era.get('status:64:39') === 0
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「가끔은 더 멀리 같이 도망가 볼래?」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「골프 해 볼래? %SELF_CALL%가 가르쳐 줄게!」"
      # CFLAGNAME:48 = 育成合計週
      # BASENAME:0 = 体力
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('base:64:0') < era.get('maxbase:64:0') * 0.45
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「으…… 피로에선 도망 못 치네…… 쉬고 싶어져……」"
      # CFLAGNAME:40 = やる気
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:40') < 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이상하네…… 다리가 무거워……」"
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「준비 완료! 어떤 트레이닝이든 할게. 그러니까 사양하지 마, %CALLNAME%!」"
      # STATUSNAME:3 = 太り気味
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('status:64:3') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「큰일이네, 너무 먹었나 봐……」"
      # CFLAGNAME:58 = 世話
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_71% 방식은 아직 부드러운 것 같네~ 다음엔 더 엄하게 해 달라고 할까?」"
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:71') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_71%, 별로 진심으로 하는 것 같지 않은데, 기분 탓인가?」"
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「요즘 %CALL_71%…… 계속 딴생각을 하더라……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「있잖아, %CALLNAME%, 전부 너한테 맡기면 안 될까?」"
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 71 && era.get('love:64') >= 50 && era.get('love:71') >= 50 && era.get('relation:64:71') > 225
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「저기, 언젠가 %CALL_71%랑 같이 달려 볼래?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이닝 끝나면 셋이 같이 돌아간다든가……」"
      - if: era.get('cflag:64:48') < 3 * 48 && era.get('cflag:64:58') === 86
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「장난 아니네, %CALL_86% 트레이닝 엄청 빡세……!」"
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('love:64') >= 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「왠지 요즘 갑자기 한가해졌네……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%~ 학원에 데려가 줘~」"
      # CFLAGNAME:0 = 性別
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 59 && era.get('cflag:0:0') === 1 && era.get('cflag:59:0') !== 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_59%는 여전하네. 남자한테 약해.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그래도 안심해. 필요한 트레이닝은 파머가 맡을게!」"
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 65
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_65%는 역시 엄청——뜨거워! 챙겨 주려다가 반대가 될 것 같아.」"
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 65 && era.get('love:64') >= 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「역시 %CALL_65%%SEX%는 태양이야. 너무 눈부셔……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「응? 혹시…… %CALLNAME%, 질투해?」"
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_74%%SEX%는 역시…… 열심히 하네.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「평소의 느긋한 모습이랑은 완전히 달라.」"
      - if: era.get('cflag:64:48') >= 3 * 48 && era.get('cflag:64:58') === 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「역시 %CALL_74%는 순수하네…… 멍하니 있다가 너무 멀리 달려가긴 하지만.」"
      - if: d.half_life === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%은(는) 파머를 버리지 않을 거지?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「다른 사람이 생기더라도……」"
      - if: era.get('love:64') >= 50 && era.get('love:64') < 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「가끔 생각해. %CALLNAME%이(가) 없었으면 지금처럼 못 웃었겠구나…… 아니야, 아니야! 방금 말은 취소!」"
      - if: era.get('love:64') >= 75
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「저기, %CALLNAME%, 언젠가 메지로 가문에 같이 가 볼래?」"
      - if: era.get('love:64') === 100
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%은(는) 계속 파머의 『트레이너』로 있어 줄 거지?」"
      # CFLAGNAME:81 = 妊娠段階
      - if: (era.get('cflag:64:81') >> 2) > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「요즘 식욕이 별로 없네…… 아, 배는 괜찮으니까!」"
      # CFLAGNAME:66 = 募集状態
      - if: d.half_life === 0 && era.get('cflag:59:66') === 1 && era.get('cflag:0:0') === 1 && era.get('cflag:59:0') !== 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_59%는 남자가 늘 어려운가 봐. 폐 끼쳐서 미안……」"
      - if: d.half_life === 0 && era.get('cflag:65:66') === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALL_65%가 또 파머는 모르는 말을 하네…… 그래도 전부 이해하고 말겠어!」"
      - if: d.half_life === 0 && era.get('cflag:74:66') === 1
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「옛날엔 %CALL_74% 머리를 자주 정리해 줬지~ 지금은 %CALLNAME%한테 부탁해야 하나.」"

office_gift:
  - if: d.half_life === 0
    lines:
      - if: era.get('love:64') < 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「선물? 나 주는 거야? 그게…… 기뻐! 정말로!」"
          - "%CHARA%는 꽤 놀란 듯한 모습이었다."
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「고마워! 소중히 간직할게! 정말 고마워, %CALLNAME%!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「정말 고마워, 이 선물 끝내주는데! 언젠가 나도 꼭 답례할게!」"
      - if: era.get('love:64') >= 74
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이 선물이 내가 원하던 그…… 아냐! 아무것도! 정말 기뻐!」"
          - "%CHARA%는 약간 부끄러워하는 기색이었으나, 방금 중얼거린 말은 들리지 않았다."
  - if: d.half_life === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이거 나한테 주는 선물이야?……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「소중하게 간직할게……」"
      - "%CHARA%는 선물을 품에 꽉 껴안았고, 눈가에는 살짝 이슬이 맺혔다."

office_cook:
  - if: d.half_life === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「안심해. %SELF_CALL%, 요리는 잘하는 편이야!」"
      - "%CHARA%는 익숙한 솜씨로 요리를 하며 %YOU%에게 가볍게 손을 흔들어 보였다."
  - if: d.half_life === 0 && era.get('love:64') >= 50 && era.get('love:64') < 90
    random: true
    lines:
      - "두 사람은 어느샌가 자연스럽게 손발을 맞춰 점심 식사를 준비했다. 본인들조차 깨닫지 못할 정도로 완벽한 호흡이었다."
      - "자리에 앉아 식사를 시작하려던 참에야 두 사람은 방금 전의 상황을 떠올렸다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(왠지…… 부부 같았어…… 착각일까?)"
  - if: d.half_life === 0 && era.get('love:64') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%SELF_CALL% 솜씨를 지켜봐 줘, %CALLNAME%~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "( %CALLNAME%의 입맛에 맞을지 모르겠네~ )"
  - if: d.half_life === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「먼저 %CALLNAME%의 위장을 사로잡으면, 계속해서……」"
      - "%YOU%에게는 들리지 않을 정도의 작은 목소리로 중얼거렸다."

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가끔은 이렇게 바깥세상에서 도망쳐서 둘이 있는 것도 나쁘지 않네……」"
  - random: true
    lines:
      - "조용히 함께 누워 둘만의 고요한 공간을 만끽했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「쿨……」"
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%과(와) 함께하는 시간은…… 정말 안심이 돼.」"
  - if: era.get('love:64') === 100
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「킁카킁카…… 트레이너의 냄새…… 아! 아무것도 아니야!」"

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「난 게임도 꽤 잘한다구, 에헴~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%SELF_CALL%는 쉽게 안 져. 두고 봐, %CALLNAME%!」"
      - "%CHARA%는 게임 화면을 진지하게 응시하며 승부욕 넘치는 표정을 지었다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%과(와) 함께라면 뭐든 즐거워, 에헤헤~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오오, 이 게임! 예전에 본가에서 %CALL_27%이랑 자주 했던 거야!」"
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「에이, 모처럼 시간이 비었는데……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 정말 %SELF_CALL%랑 게임만 하고 싶은 거야?」"

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「역시 도망치는 기분은 최고야!! 절대로 멈추지 않을 거니까!!」"
      - "나무 구멍을 향해 외친 뒤 상쾌한 미소를 짓는 %CHARA%를 보며, %YOU%은(는) 마음속으로 반드시 %SEX%를 끝까지 지지해주겠다고 다짐했다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「반드시! 이길 거야! 레이스든, 그 무엇이든!」"
      - "비록 %YOU%은(는) 그 말이 무엇을 의미하는지 정확히 알 수 없었으나, %CHARA%의 미소를 본 뒤 더 깊이 생각하지 않기로 했다."

s_a_dating:
  - if: d.half_life === 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저기, 여기서 데이트하는 건 좀…… 그치?」"
      - "%CHARA%는 내심 신경 쓰는 눈치였으나, 맞잡은 손은 조금도 놓을 기색이 없었다."
  - if: d.half_life === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「데이트라……」"
      - "%CHARA%는 %YOU%의 팔에 꼭 매달린 채, 주변의 시선에 아랑곳하지 않고 어깨에 얼굴을 바짝 붙였다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「헤헤~」"

s_r_lunch:
  - if: d.check > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「평소 옥상엔 사람이 별로 없네. 이것도 데이트려나…… 에헤헤.」"
      - "볼을 긁으며 뭔가 중얼거리는 %CHARA%를 보고 %YOU%은(는) %SEX%의 도시락에 문어 모양 소시지 하나를 덜어 줬다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「엇! 들었어!?」"
      - acc: 1
        content: "「못 들었어.」"
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「엇! 그…… 정말?」"
          - "%CHARA%는 얼굴을 새빨갛게 물들이고 고개를 숙인 채 말없이 도시락을 먹었다."
      - acc: 2
        content: "「……」 (연모 +1)"
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐라고 말 좀 해 줘, %CALLNAME%!」"
          - "%CHARA%는 붉어진 볼을 부풀리고 작은 주먹으로 %YOU%의 어깨를 팡팡 두드렸다."
  - if: '!d.check'
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「역시 옥상 경치는 좋네!」"
          - "옥상에서 경치를 보며 도시락을 나눠 먹었다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「맛있어! %CALLNAME% 솜씨 대단해!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「옥상 경치 좋지? 기분 전환하러 자주 올라와!」"

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「맡겨 줘……! 예전의 %SELF_CALL%는 이런 거 잘했거든!」"
      - "%CHARA%는 긴 소매를 걷고 눈앞의 낚싯대를 보며 의욕을 불태웠다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그립네~ 예전에도 자주 이렇게 멀리 나갔지~」"
      - "%CHARA%는 낚싯줄을 드리우고 잔잔한 수면 위 찌를 보며 편하게 이야기를 시작했다."

o_r_walking:
  - random: true
    lines:
      - "두 사람은 생각을 비우고 강둑길을 천천히 걸었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가끔은 이렇게 느긋하게 있는 것도 나쁘지 않네……」"
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - "주변에 아무도 없는 강둑길을 보며 %CHARA%는 슬며시 %YOU%의 곁으로 다가왔다."
      - "「저기, %SELF_CALL%?」"
      - "자신의 팔에 밀착하는 %CHARA%를 보며 마음이 조금 설레었다."
      - "%CHARA%는 못 들은 척 아무 말 없이 %YOU%의 팔을 감싸 안으며 몸을 기댔다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이대로…… 있어도 될까?」"

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오오, 내 인형이 있어! %CALLNAME%, %CALLNAME%! 저거 한번 해보고 싶어!」"
      - "%CHARA%는 인형 뽑기 기계 속의 인형을 가리키며 %YOU%을(를) 이끌고 가볍게 뛰어갔다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「옛날에 %SIBLINGS%들이랑 자주 이걸로 놀았어. %CALLNAME%, 긴장해야 할걸?」"
      - "눈앞의 오락기를 바라보는 %CHARA%의 눈동자가 반짝였다."

o_s_drawing:
  - random: true
    lines:
      - "마침 최근에는 경품 추첨 이벤트가 없는 모양이다……"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「괜찮아, 기회가 되면 꼭 다시 오자!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아쉽네, 오늘도 추첨권 행사는 없구나……」"

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「친구들이랑 종종 여기 오곤 해. 기분 전환하기에 딱 좋거든.」"
      - "%CHARA%의 얼굴에는 평소처럼 편안한 미소가 떠올랐고, 그 덕분에 %YOU% 역시 긴장이 풀렸다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「역시 음악은 기분을 들뜨게 해줘, %CALLNAME%!」"
      - "%CHARA%는 무척 즐거운 듯 음악에 맞춰 몸을 흔들었다."

o_s_movie:
  - if: era.get('cflag:71:66') !== 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아, %CALL_71%가 추천한 영화다!」"
  - if: era.get('cflag:71:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아, %CALL_71%가 추천한 영화야!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALL_71%랑 같이 못 와서 아쉽네…… 다음엔 셋이 올래?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오랜만에 영화 보네. 뭐 볼까……」"
      - "%CHARA%는 영화관 포스터를 위아래로 꼼꼼히 살폈다."
  - if: era.get('love:64') >= 25 && era.get('love:64') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「있잖아, %CALLNAME%…… 로맨스 영화 좋아해?」"
      - "%CHARA%는 조금 긴장한 채 무언가를 기대하는 듯했다."
  - if: era.get('love:64') >= 50 && era.get('love:64') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「둘이서 영화라니, 왠지 다른 의미도 있는 것 같네……」"
      - "%CHARA%는 옆에서 한동안 중얼거렸지만 %YOU%과(와) 맞잡은 손에는 오히려 힘이 들어갔다."

o_c_pray:
  - "트레센 근처 신사는 규모는 작아도 %UMA%들 사이에서는 꽤 유명했다."
  - "출전 전에 일부러 찾아와 작은 기대를 품고 운세를 뽑는 %UMA%도 많았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「가끔 운을 시험해 보는 것도 나쁘지 않네.」"
  - "%CHARA%는 도망치는 게 천성이었다. 뭔가에서 달아나고 싶을 때면 그 길로 %YOU%의 손을 잡고 운을 시험하러 오곤 했다."
  - "여기에 오면 늘 어깨가 가벼워졌다. %SEX%에게는 이것도 도망의 한 방식이리라."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「왠지…… 여기 있으면 여러 가지를 잊을 수 있거든.」"
  - "%CHARA%는 머리에 손을 얹은 채 느긋한 걸음으로 %YOU% 곁을 걸었다."
  - "신사에는 사람이 거의 없었다. 미풍이 주변 나뭇가지를 스치고 얼굴에 닿는 감촉이 기분 좋았다."
  - "눈앞의 제비통을 본 %CHARA%는 말없이 옆의 %YOU%을(를) 쿡 찌르고는 별일 아니라는 표정을 지었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「트레이너, 뽑을래? 대길일지도 몰라.」"
  - "조금 장난스럽게 말하며 앞을 가리켰다."
  - acc: 1
    content: "「이건 파머의 운이잖아. 내가 멋대로 손댈 순 없지.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「파머의 운이라…… 그럼 뽑는다!」"
  - "%CHARA%는 %YOU%에게 고개를 끄덕이고 돌아서서 신사를 향해 손을 모았다."
  - "잠시 눈을 감고 있다가 제비를 뽑았다."
  - if: d.dice <= 0.8
    lines:
      - "종이에는 선명하게 길이라고 적혀 있었다. 오늘의 행운을 알려 주는 듯했다."
      - acc: 1
        content: "「운이 따르는 것 같네~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「응응, 오늘 정말 운 좋네.」"
      - "손에 든 제비를 내려놓고 돌아서서 %YOU%의 손을 잡았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%도 고마워…… 우리 둘의 운이잖아.」"
      - "기뻐하는 얼굴을 보고 있자니 %YOU%도 어느새 %CHARA%와 함께 웃었다."
  - if: d.dice > 0.8
    lines:
      - "제비를 펼쳤지만 대길은 나오지 않았다."
      - "종이에 적힌 흉을 보고 %CHARA%는 어색한 듯 %YOU%의 눈을 피했다."
      - acc: 1
        content: "「오늘 운이 나빴으니 내일은 운이 좋을 거야.」"
      - "%CHARA%는 조금 풀이 죽어 %YOU% 쪽으로 몸을 돌리고 시선을 피했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어쩌지, 오늘 이거……」"
      - "조금 긴장했는지 손가락을 가만두지 못했다."
      - "불안해하는 %CHARA%를 보고 %YOU%은(는) 손을 들어 %SEX%의 부드러운 머리카락을 살며시 쓰다듬었다."
      - acc: 1
        content: "「괜찮아.」"
      - "%CHARA%는 말이 없었다. 쫑긋거리는 귀만이 마음을 전했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「고마워……」"
      - "작은 목소리였지만 한산한 신사에서는 또렷하게 들렸다."

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「같이 뭐 먹을래? 맛있는 가게 많이 알아!」"
      - "%CHARA%는 힘차게 %YOU%의 손을 끌고 뛰어갔다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「흥흥~ 파머 씨는 맛있는 거 잘 찾거든.」"
      - "%CHARA%는 허리에 손을 얹고 두 사람 앞에 놓인 먹음직스러운 정식을 뿌듯하게 바라봤다."
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - "가게에 앉아 서로 얼굴을 보자 둘 다 풋 웃음을 터뜨렸다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「역시 이런 건 우리한테 안 맞네.」"
      - "웃음을 참으며 두 사람은 젓가락을 들었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「데이트인데 여길 고른 건 실수였나……」"
      - acc: 1
        content: "「왜 그래?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아무것도 아니야! 그냥……」"
      - "%YOU%의 얼굴을 보자 %CHARA%의 들뜬 마음이 다시 가라앉았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「다 먹으면 조금만 더 같이 있어 줄래, %CALLNAME%?」"

o_s_dating:
  - if: d.half_life === 0
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「저, 저기 %CALLNAME%, 여기서 데이트라니……」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%랑 있으면 부끄럽다는 느낌이 안 들어……」"
          - "%CHARA%는 %YOU% 곁으로 다가와 고개를 살짝 기울여 %YOU%의 어깨에 기댔다."
      - if: era.get('cflag:64:0') !== 1
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「남들이 보면 우린 평범한 연인이겠지.」"
          - "곁에 바짝 붙어 %YOU%에게만 들리는 목소리로 말하며 귀를 살짝 깨물었다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「조금쯤 지나치게 굴어도…… 아무도 모르겠지?」"
          - "두 손이 팔을 꽉 붙들어 %CHARA%의 부드러운 가슴에 눌렀다."
  - if: d.half_life === 1
    lines:
      - "어째서인지 %CHARA%는 %YOU%의 손을 꼭 잡고 놓을 기색이 없었다."
      - "부드러운 감촉을 계속 느끼고 있으니 싫을 리가 없었다."
      - "주변 행인이 꽤 줄어든 뒤에야 잡은 손의 힘이 조금 풀렸다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「왜인지는 모르겠지만…… 놓으면 %CALLNAME%이(가) 곁에서 사라질 것 같아서……」"
      - "%YOU%의 어깨에 기대 다른 사람에게는 들리지 않게 작게 말했다."

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「에헤헤, 이거 %CALLNAME%한테 어울려!」"
      - "%CHARA%는 %YOU%의 몸에 잠시 대 보더니 장난스러운 웃음을 지으며 뭔가 걸쳐 줬다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 이거 봐. 엄청 맛있어!」"
      - "어째서인지 쇼핑몰 근처에 와서 처음 하는 일은 노점 찾기였다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 갖고 싶은 거 있어? 파머도 선물해 줄 수 있어!」"
      - "%CHARA%는 조금 들뜬 채 %YOU% 앞에서 깡충깡충 뛰며 바라봤다."
  - if: era.get('love:64') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그러고 보니 %CALLNAME% 집엔 이거 없지? 사 줄게.」"
  - if: era.get('love:64') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME% 집에 이거 있으면 놀러 가도 돼?」"
      - "%CHARA%의 눈이 빛났다. 통금은 완전히 잊은 듯했다."

good_night_normal:
  sync: true
  lines:
    # STATUSNAME:10 = 昏睡
    - if: era.get('status:0:10') === 0 && era.get('status:64:10') === 0 && era.get('status:64:39') === 0
      lines:
        - random: true
          lines:
            - "%CHARA%는 가벼운 발걸음으로 기숙사까지 데려다준 %YOU%에게 손을 흔들었다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「내일도 볼 수 있지? 또 봐!」"
        - random: true
          lines:
            - "바쁜 하루가 끝나고 마찬가지로 지쳐 쓰러질 듯한 %CHARA%를 기숙사까지 데려다줬다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「음…… 좀 너무 열심히 했나 봐, 에헤헤~」"
    - if: era.get('status:0:10') === 0 && (era.get('status:64:10') > 0 || era.get('status:64:39') > 0)
      lines:
        - "잠든 메지로 파머를 차마 깨울 수 없어 힘겹게 기숙사까지 데려다줄 수밖에 없었다."
        - "지금 장난을 치면 %SEX%는 잠에서 깰까?"
    - if: era.get('status:0:10') > 0
      lines:
        - "잠에 빠져들던 %YOU%은(는) 몽롱한 와중에 %CHARA%가 손을 뻗으려다 망설이는 모습을 본 것 같았다. 마지막에는 친근함과 다정함이 섞인 작별 인사만 남았다."

good_night_sex:
  - "%CHARA%를 기숙사까지 데려다주자 소매를 살짝 잡아당겼다."
  - "%YOU% 뒤의 %CHARA%는 조금 말이 꼬였지만 마지막 말만은 또렷하게 들렸다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「외박 같은 건 파머가 알아서 할 테니까……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「파머…… %CALLNAME% 곁으로 도망가도 돼?」"
  - acc: 1
    content: "「좋아.」"
    lines:
      - "외박 신청은 이제 아무래도 좋다. 지금은 더 중요한 일이 있다……"
      - "팔에 매달려 놓지 않는 %CHARA%를 집으로 데려가는 일이다."
  - acc: 2
    content: "「그렇게 고집부리지 마.」"
    lines:
      - if: d.check === 2
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「하지만……」"
          - "객관적으로 %UMA%의 힘은 보통 사람보다 훨씬 세다……"
          - "그러니 지금 %YOU%을(를) 붙잡는 것도 어렵지 않다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「안 해 줄 거면서 왜 고집이라고 해?」"
      - if: d.check !== 2
        lines:
          - "%CHARA%의 표정에서 기대가 사라지고 그늘이 졌다. 내려온 앞머리 뒤로 실망을 감췄다."
          - "얌전히 돌아서 기숙사로 들어가면서도 입구에서 한 번 더 몰래 %YOU%을(를) 본 뒤 고개를 숙이고 모퉁이 너머로 사라졌다."

load_talk:
  # CFLAGNAME:81 = 妊娠段階
  # CFLAGNAME:57 = 拡張変数
  # EXPNAME:117 = 出産回数
  - if: (era.get('cflag:64:81') !== 2 && !era.get('cflag:64:57').report) || era.get('exp:64:117') > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그랬구나…… 괜찮아…… %SELF_CALL%는 다 이해해.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「분명 파머 때문이겠지…… 아하하……」"
      - color: %COLOR%
        fontSize: 0.75rem
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「알고 있어……」"

tree_hollow_snails:
  title: "달팽이가 되어 버려///"
  lines:
    # 条件：愛欲以上、アイテムにアナルプラグがあり、アナル中出し後、中庭へ行くと発生
    - "저녁 무렵 %YOU%은(는) 파머의 손을 잡고 학원을 산책했다. %SEX%의 걸음은 몹시 뻣뻣해 %YOU%이(가) 이끌어야 겨우 발을 뗐다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%? 이제 그만…… 읏.」"
    -
    - "%YOU%이(가) 중지로 %TEEN%의 치마 속 금속을 튕기자 %SEX%의 말은 작은 신음으로 끊기고 움츠린 어깨가 살짝 경련했다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME% 취향도 참…… 벌써 뒤가…… 이상해.」"
    -
    - "주위에 아무도 없는 걸 확인한 %YOU%은(는) 뒤에서 파머의 치마를 걷었다. 하얗고 도톰한 엉덩이 사이로 플러그 끝의 금속이 선명하게 보였다."
    - "몇 마디로 파머를 설득해 정액을 직장에 가둔 채 밖으로 데리고 나왔다. 지금 %SEX%는 후회하고 있을까."
    - "항문이 막힌 파머는 갈 곳 없는 강아지 같았다. 꼬리는 허벅지 사이에 끼었고, 저항할 수 없는 %SEX%는 %YOU%이(가) 하라는 대로 따를 수밖에 없었다……"
    -
    - acc: 1
      content: "플러그를 잡고 움직인다"
      lines:
        - "파머를 나무 그늘로 끌어당긴 %YOU%은(는) 플러그 끝을 잡고 앞뒤로 움직였다. 직장 안의 정액이 뒤섞이며 「질척질척」 소리가 났다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%…… 안 돼, 들리잖아…… 읏.」"
        -
        - "파머는 입을 막고 다른 손으로 %YOU%의 옷을 꼭 붙잡았다. 저항하는 건지, 부끄러움 속에서 쾌감을 받아들이는 건지 알 수 없었다."
        - "%SEX%의 꼬리가 무의식적으로 쓸리며 %YOU%의 팔을 간질였지만, 그 외에는 %YOU%에게 밀착해 뒤쪽의 비밀을 숨겼다."
        - "파머의 허리와 엉덩이가 저절로 비틀렸다. 속도가 빨라지자 감추지 못한 거친 콧숨과 작은 신음이 들렸다."
        -
        - "「응…… 으응……」"
    - if: era.get('cflag:64:0') !== 1
      acc: 2
      content: "사타구니를 쓰다듬는다"
      lines:
        - "파머와 벽 쪽 그늘을 나란히 걸으며 %YOU%은(는) 치마 밑으로 손을 넣어 %SEX%의 매끄럽고 탄탄한 엉덩이를 꼬집었다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「만지지 마…… 들키겠어.」"
        -
        - "파머의 항의는 흘려듣고 %YOU%은(는) %SEX%의 사타구니를 따라 천천히 안으로 손을 뻗었다. 손가락이 따뜻하게 젖은 음부 아래에 닿을 때까지."
        - "샅에 묻은 애액을 윤활 삼아 %YOU%은(는) 중지를 %TEEN%의 질 안으로 밀어 넣고 내벽을 건드렸다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아…… 으응……」"
        -
        - "교성이 새어 나오자 파머는 결국 걷기를 포기하고 %YOU%에게 기대 끊임없이 떨었다. 액체가 허벅지를 타고 한 방울씩 떨어졌다."
        - "쾌감에 굴복한 파머는 더는 주위를 경계하지 않았다. 그럴 여유가 없는 건지, 노출의 흥분에 빠진 건지."
    - divider: true
    - "%TEEN%의 몸이 변하는 걸 느낀 %YOU%은(는) 절정이 다가오자 손을 멈췄다. 파머의 허리가 괴로운 듯 비틀렸다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음…… %CALLNAME%?」"
    -
    - "파머의 촉촉한 눈을 바라보며 %YOU%은(는) 플러그 끝을 잡아 단숨에 뽑았다——"
    - "「뽁!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우앗!……」"
    -
    - "파머의 눈이 크게 뜨였다. 쾌감이 터지자 %SEX%는 균형을 잡으려고 %YOU%을(를) 꽉 끌어안았고 체면을 잃은 신음이 목에서 샜다."
    -
    - "함께 새어 나온 것은 또 없었을까?"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼…… %CALLNAME%…… 제발.」"
    -
    - "잠시 뒤 조금 진정한 파머를 %YOU%이(가) 밀어내려 하자 흐느낌 섞인 애원이 들렸다. 고개를 저으며 거절하고 있었다."
    - "%SEX%를 벽을 따라 걷게 하고 %YOU%은(는) 조금 떨어져 뒤의 모습을 바라봤다."
    - "%TEEN%는 힘 풀린 다리를 끌었고 흔들리는 치마 사이로 유백색 액체가 줄줄 흘러내려 땅에 자취를 남겼다……"

# 育成中バージョン
cl_palace:
  title: "전당 입성 주간"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「빨리! 트레이너!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 전당 입성 주간이야! 늦으면 자리 없어!」"
    - "파머는 행사장으로 뛰어가다 이따금 %YOU%을(를) 돌아보고는 초조하게 속도를 늦췄다."
    - "여러 번 망설이던 파머는 %YOU%의 팔을 잡고 단숨에 행사장까지 달리기로 했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 늦었다!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「딱 자리 있네. 완전 럭키!」"
    - "숨이 찬 %YOU%을(를) 끌어 앉히고 기대에 찬 눈으로 단상 위 선배를 봤다."
    - "선배가 들려주는 과거와 경험담을 파머는 진지하게 들으며 저도 모르게 기대 어린 미소를 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋네…… 레이스.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 우리도 이렇게 될 수 있겠지?」"
    - acc: 1
      content: "「당연하지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 더, 훨——씬 더 열심히 해야겠네! 진심으로!」"
    - "파머는 다시 단상을 봤다. 눈동자가 동경으로 반짝였다."

# 育成中バージョン
cl_fans_in_edu:
  title: "팬 감사제"
  lines:
    - "팬 감사제 당일 행사로 현역 선수인 파머에게도 당연히 출전 요청이 와 있었다."
    - "관중석은 각 선수의 팬들로 가득했고 등장하는 %UMA%마다 환호가 쏟아졌다."
    - "어디까지나 시범 경기지만…… 참가자 대부분은 시범 경기처럼 달릴 생각이 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「큰일이네. 이거 적당히 달릴 분위기가 아닌데.」"
    - "주로에 서고 나서야 주변 분위기가 심상치 않다는 걸 깨달았다."
    - "주변 %UMA%들은 이미 임시 출발선 앞에서 자세를 잡았다. 파머는 그제야 상황을 파악했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다들 진심……?」"
    - "입 밖에 내지는 않았지만 주변 분위기는 예상대로였다."
    - "파머는 맨 앞으로 뛰쳐나가 평소처럼 도주 위치를 지켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「파머까지 진심이 됐잖아!」"
    - divider: true
      content: "시범 경기 종료 후"
    - "준비도 없이 갑자기 전력을 다한 파머는 경기가 끝나자 코스 옆에 앉아 부채질했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지쳤어. 텐노상 트레이닝보다 힘들어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 방금 레이스 봤어? 어땠어?」"
    - acc: 1
      content: "「파머다운 달리기였어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 팬들도 즐거웠으려나. 에헤헤……」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「파머 씨, 아주 멋진 도주였습니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 부르봉 씨!」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「저런 도주 방법도 있군요. 공부가 됐습니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「솔직히 평소처럼 달린 건데…… 게다가 저렇게 달리면 힘들어.」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「그렇습니까. 알겠습니다. 기억해 두겠습니다.」"
    - "부르봉은 가볍게 인사하고 감사제 무대로 향했다."
    - "반대편의 소리가 점점 커졌다. 벌써 팬 교류 시간이 시작된 모양이다."
    - "파머는 몸에 붙은 풀을 털고 옆의 %YOU%에게 손을 내밀었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맥퀸 %THEY%도 아직 기다리려나…… 아니, 우리를 기다리고 있을 거야.」"
    - "손을 내민 파머는 아쉬움 하나 없는 미소를 지었다."

# 育成済みバージョン
cl_fans:
  title: "팬 감사제"
  lines:
    - "팬 감사제 당일 파머는 %YOU%을(를) 따라 트레센에 돌아왔다."
    - "평소에도 여러 이유로 트레센에 오지만 팬 감사제 날은 달랐다."
    - "이미 드림 컵으로 옮겨 간 %UMA%든 은퇴한 %UMA%든, 팬들은 이날을 기다린다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「팬이 아직 이렇게 많구나……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트윙클 시리즈를 떠난 지 오래인데. 에헤헤.」"
    - "열정적인 팬들을 보며 파머는 조금 쑥스러운 듯 볼을 긁었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러고 보니 한 번 달려 달라는 요청도 왔어.」"
    - if: (era.get('cflag:64:81') >> 4) === 0
      acc: 1
      content: "「온 김에 달려 보는 건 어때?」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그렇네……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「나간다면 %SELF_CALL%만의 도주로 달릴게!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 먼저 승부복으로 갈아입고 올게.」"
        - "파머는 다른 쪽으로 뛰어가 순식간에 보이지 않게 됐다."
        - "연기처럼 사라진 파머가 달려간 쪽을 보고 %YOU%은(는) 믿음을 품고 관중석으로 향했다."
        - divider: true
          content: "임시 코스"
        - color: %COLOR%
          content: "급히 마련한 코스에 오랜만에 옛 친구들이 모였다."
        - color: %COLOR%
          content: "파머는 익숙한 승부복을 입고 출발선에서 몸을 풀었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「한동안 레이스 안 뛰었네……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그래도 내 달리기는 한 번도 잊은 적 없어!」"
        - color: %COLOR%
          content: "예전 레이스와 같은 방식으로 맨 앞에서 도주했다."
        - color: %COLOR%
          content: "체력은 전성기에 미치지 못해 조금씩 속도가 떨어지기 시작했다."
        - color: %COLOR%
          content: "레이스에 극적인 전개는 없었다. 팬들을 즐겁게 하기 위한 작은 경기였기 때문이다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후…… 역시 도주할 때는 즐겁네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너 말이 맞아. 달리고 싶을 때 달리는 자유가 최고야!」"
        - "팬 「파머! 파머!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오, 다들!」"
        - color: %COLOR%
          content: "파머는 귀를 살짝 움직여 주변의 외침에서 자기 이름을 알아듣고, 관중석에 손을 흔들었다."
        - color: %COLOR%
          content: "관중석에서 똑같이 환호하는 %YOU%도 물론 그 안에 있었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너…… 역시 있네.」"
        - color: %COLOR%
          content: "관중석을 바라보는 파머의 눈에 기쁨이 조금 더 어렸다."
        - if: era.get('love:64') >= 50
          lines:
            - color: %COLOR%
              content: "주로에 선 채 멀리 있는 트레이너에게 승리의 몸짓을 보냈다. 눈빛이 알아채기 어려울 만큼 조금 달랐다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「역시……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「역시 파머의 『트레이너』는 너뿐이야.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「언제나 지탱해 주는 너.」"
            - color: %COLOR%
              content: "여흥 레이스는 끝났고 선수들을 붙잡는 것은 없었다. 주변 %UMA%들은 지인들과 이야기하기 시작했다."
            - color: %COLOR%
              content: "파머는 관중석 옆으로 걸어와 트레이너에게 손을 내밀었다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「트레이너, 같이 돌아갈래?」"
    - acc: 2
      content: "「이젠 일선에서 물러났으니 후배들을 보고 가자.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「음…… 그것도 그렇네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「파머의 도주 때문에 페이스가 금방 무너지기도 하니까.」"
        - "파머는 평소의 도주를 농담 삼아 하하 웃었다."
        - divider: true
          content: "임시 코스"
        - "직접 나가지 않더라도 선배들의 모습을 보는 건 나쁘지 않았다."
        - "여흥 레이스가 시작되자 주변 팬들이 오랜만에 보는 선수들에게 응원을 보냈다."
        - "%YOU%과(와) 파머는 나란히 서서 코스 위의 선수들을 봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「대단하네, 상태가 저렇게 좋다니.」"
        - acc: 1
          content: "「파머도 못지않잖아.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「농담이지? 난 벌써 주로를 떠났는걸.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……그래도 트레이너가 보고 싶다면 해 봐도 좋고?」"
        - if: era.get('love:64') >= 75
          lines:
            - "파머는 얼굴을 조금 붉히고 %YOU%의 어깨에 기댔다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「보고 싶다면 어디든 좋아.」"
            - "주변 관중들은 코스의 선수들을 보고 있었고 %YOU% 쪽을 보는 사람은 없었다."
            - "비어 있는 손이 마음 가는 대로 살며시 파머의 손가락과 얽혔다."
            - "부드러운 손가락이 놀란 듯 굳었다가, 상대가 누구인지 확인하자 조금씩 풀렸다."
            - "레이스는 마지막 코너에 접어들었고 곁의 함성이 점점 커져 모든 소리를 덮을 듯했다."
            - acc: 1
              content: "파머의 귀를 살짝 핥는다"
            - acc: 2
              content: "파머의 머리카락에 얼굴을 묻고 향을 맡는다"
            - acc: 3
              content: "몰래 파머의 엉덩이를 쓰다듬는다"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「앗!」"
            - "%YOU%의 장난에 파머가 짧게 소리를 냈지만 주변이 너무 시끄러워 아무도 알아채지 못했다."
            - "파머는 조금 화난 눈빛을 보냈지만 아무것도 하지 않았다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「정말……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「하고 싶으면 돌아가서 해.」"

# 育成中限定
cl_temple_fair:
  title: "축제"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「요즘 트레이너, 계속 파머랑 같이 있어 주네……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이러면 트레이너만의 시간이 전혀 없잖아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 곧 축제다!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때 트레이너가 푹 쉬게 해 줘야지.」"
    - divider: true
      content: "축제 당일"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 오늘 축제야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가게도 많이 나왔나 봐. 같이 갈래?」"
    - "파머는 아무것도 모르는 척 %YOU%에게 손을 내밀었다."
    - "뒤쪽의 조금 어두워진 하늘 아래로 축제의 불빛이 켜지고 떠들썩한 소리가 들렸다."
    - acc: 1
      content: "「좋아, 가자.」 (호감 +10, 연모 +2)"
      lines:
        - "%YOU%은(는) 파머가 내민 손을 잡고 보조를 맞춰 축제 속으로 들어갔다."
        - "파머는 평소처럼 여기저기 돌아다니지 않고 계속 %YOU% 곁에 붙어 있었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너, 마음에 드는 거 있어?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘은 %SELF_CALL%가 계속 같이 있을게!」"
        - acc: 1
          content: "「저쪽 먹거리 괜찮아 보이네.」 (체력 +100)"
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「먹거리? 좋아, 가 보자, 트레이너!」"
            - "파머는 망설임 없이 %YOU%의 손을 잡고 노점으로 가서 눈앞의 음식을 봤다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「트레이너, 뭐 먹을래? 내가 살게!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「흥흥, 용돈은 제대로 남겨 뒀거든.」"
            - acc: 1
              content: "「파머도 먹어.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「괜찮아, 괜찮아. 이건 트레이너 사 주는 거야.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「파머가 먹고 싶으면 또 사면 되니까……」"
            - "파머는 말하면서도 먹는 데는 별 관심을 보이지 않았다. 그저 앞을 바라볼 뿐이었다."
            - "양옆의 노점을 살피며 다음에 갈 곳을 찾았다."
            - acc: 1
              content: "음식을 내민다"
            - "%YOU%은(는) 손에 든 음식을 들어 파머 앞으로 가져갔다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「냠! ……응?」"
            - "파머는 반사적으로 입을 벌려 한입 먹고 만족한 표정을 지었다가 뒤늦게 살짝 붉어졌다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「정말! 트레이너!」"
            - "화난 척하며 %YOU%의 팔을 주먹으로 가볍게 두드렸다."
        - acc: 2
          content: "「저 사격 게임 재미있겠다.」 (스킬 Pt +35)"
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「엇, 사격!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「좋아, %SELF_CALL%가 한 방에……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「사장님! 할게요!」"
            - "파머는 조금 들떠 공기총을 받아 %YOU%과(와) 하나씩 들었다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「흥흥, 트레이너, 저거 갖고 싶어?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「맞히면 줄게.」"
            - "자신 있게 말하며 공기총을 겨눴다."
            - "귀를 쫑긋거리더니 자신만만하게 방아쇠를 당겼다."
            - divider: true
              content: "한 차례 사격을 마친 뒤"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「미안, 못 맞혔어……」"
            - "파머의 귀가 단숨에 축 늘어지고 풀이 죽어 눈을 가늘게 떴다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「하나도 못 맞히다니……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「미안해, 트레이너……」"
            - "실망한 파머를 보며 %YOU%은(는) 공기총을 겨눴다."
            - "짧고 경쾌한 소리와 함께 탄환이 경품용 풍선을 터뜨렸다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「오오! 대단해, 트레이너!」"
            - "파머는 눈을 빛내며 사장이 내미는 봉제 인형을 봤다."
            - acc: 1
              content: "「파머가 가져.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「엇! 트레이너가 받은 경품이잖아.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「파머가 받으면 안 되지……」"
            - acc: 1
              content: "「난 이미 충분히 기뻐.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「어?」"
            - acc: 1
              content: "「그러니까 파머도 더 많이 웃었으면 좋겠어.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그런 뜻이야?」"
            - "조금 어리둥절한 얼굴에 잠시 뒤 옅은 홍조가 떠올랐다가 곧 사라졌다."
            - "어색하게 두 손으로 인형을 받아 천천히 끌어안았다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「저기…… 고마워.」"
            - "푹신한 인형에 얼굴을 묻고 밝은 눈만 내놓은 채 앞의 %YOU%을(를) 봤다."
            - "다른 사람에게는 들리지 않을 작은 목소리로 다시 말했다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「고마워, 트레이너.」"
        - divider: true
          content: "축제가 끝난 뒤"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「재미있었네. 배도 부르고 만족!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그런데 마지막엔 오히려 보살핌을 받았네.」"
        - "파머는 축제에서 얻은 물건들을 품에 안고 바닷가를 걸었다."
        - "걷다가 옆의 %YOU%에게 살며시 어깨를 기댔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「처음엔 트레이너한테 맞춰 주려고 했거든.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「너무 나서기도 하고 엉망진창이었네. 에헤헤.」"
        - acc: 1
          content: "「아직 옛날 일이 마음에 걸려?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응? 아니, 옛날 일이랑 상관없어. 그냥……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「담당 %UMA%를 뒷받침해 주는 게 트레이너 일이잖아?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「파머도 트레이너를 뒷받침해 주면 어떤 기분일지 알고 싶었어. 그뿐이야.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너는 늘 열심히 하잖아!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……아니면 이상해?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 부끄럽네……」"
        - "파머는 어색하게 웃으며 숨기려 하지도 않았다."
        - acc: 1
          content: "「그렇게 신경 쓰지 않아도 돼.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하지만 트레이너한테 부담이잖아?」"
        - acc: 1
          content: "「파머를 돕는 건 기쁜 일이야.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어라.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「잠깐만……」"
        - "파머는 멈춰 서서 품의 전리품으로 얼굴을 가렸다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(트레이너는 트레이너 일을 제대로, 열심히 하고 있어.)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(담당 %UMA%가 있으니까 열심히 일할 수 있고……)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(그러니까 트레이너로서……)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(파머의 트레이너로서?)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(어?)"
        - "「파머의 트레이너가 돼서 다행이야.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(어어!?)"
        - "생각을 거듭할수록 파머의 눈빛은 점점 혼란스러워졌다."
        - "황급히 품의 물건을 꼭 끌어안아 붉어진 얼굴을 가리고 고개를 살짝 흔들어 열을 식히려 했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너는 트레이너 일을 했어. 하지만 트레이너라서만 기쁜 게 아니고.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「파머의 트레이너라서 기쁘다……?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「파머의 트레이너니까 기쁜 거지?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우와와……」"
        - "도망치고 싶은 마음을 일단 참고 고개를 들어 앞을 똑바로 봤다."
        - "돌아서서 자신을 보는 %YOU%을(를) 향해 파머는 숨을 작게 들이쉬었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……트레이너.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「열심히 할게. 달리고 이길게. 정말로.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「파머만의…… 우리만의 달리기로 모두에게 보여 줄게!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「언젠가 트레이너가 메지로 파머와 함께해서 다행이라고 생각하게 할 거야!」"
        - acc: 1
          content: "「나도야.」 (호감 +10)"
        - acc: 2
          content: "「그날을 기다릴게.」 (연모 +2)"
        - acc: 3
          content: "「늘 그렇게 생각해, 파머.」"
          # 性欲上昇
        - "파머는 잠시 멍한 표정이 되더니 곧 다시 얼굴을 가렸다."
        - "%YOU%에게 보이지 않는 곳에서 파머는 눈을 감고 들은 말을 진심으로 되새겼다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우와아아아……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우리 트레이너, 정말…… 대단해……」"
        - "다시 손에 든 봉투를 내리고 부끄러움에 붉어진 얼굴로 미소를 지었다."
    - acc: 2
      content: "「아니, 사양할게.」"

cl_halloween:
  title: "핼러윈"
  lines:
    - "곳곳을 장식한 트레센은 이미 핼러윈 분위기로 가득했다."
    - "예고 없이 노크 소리가 들렸다."
    - "트레이너의 책임을 다할 생각으로 %YOU%은(는) 문을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「과자 안 주면 장난칠 거야, 트레이너!」"
    - "파머는 문밖에서 소악마 흉내를 내고 있었다."
    - "머리 장식의 뿔이 옅은 형광빛을 띠어 어두운 복도에서 눈에 잘 띄었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마음에 들어, 트레이너? 헬리오스랑 같이 골랐어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 천사 같은 의상도 한 벌 더 골라 놨어.」"
    - "파머는 장난스러운 몸짓을 멈추고 조금 짓궂게 웃으며 놀란 척하는 %YOU%을(를) 봤다."
    - "창밖의 핼러윈 분위기는 이미 사무실 안까지 퍼져 있었다. 계속 일이나 다른 걸 하는 건 눈치 없는 짓이다."
    - "분위기를 잘 읽는 파머라면 바로 상황을 알아챘으리라."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「밖에 행사 아직 많아. 같이 보러 갈래?」"
    - acc: 1
      content: "「좋아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아싸, 가자!」"
    - "자연스럽게 %YOU%의 손을 잡고 단숨에 밖으로 달려 나갔다."
    - "그날은 즐거웠지만 체력으로 파머를 못 따라가는 %YOU%은(는) 결국 다음 날을 푹 자며 보내야 했다."

cl_christmas:
  title: "크리스마스"
  lines:
    - "크리스마스 당일, 예고 없이 %YOU%의 사무실 문을 두드리는 소리가 났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「야호~! 트레이너!」"
    - "파머가 불쑥 들어와 일하던 %YOU% 앞으로 왔다."
    - "창밖의 축제 분위기가 파머의 목소리와 함께 사무실에 들어왔고, 동시에 문밖에서 작은 별 하나가 굴러 들어왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 시간 됐어!」"
    - "헬리오스가 크리스마스트리를 안고 통통 뛰며 사무실로 들어왔다."
    - "맑은 종소리가 울리고 진지하던 사무실에 크리스마스…… 아니, 파티 분위기가 가득 찼다."
    - "파티 분위기를 만드는 데 능한 헬리오스가 친구들을 데리고 들어와 사무실을 파티장으로 바꿨다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「야호~! 크리스마스 파티 시작이다!」"
    - color: %COLOR_66%
      content:
        - fontWeight: bold
          content: %TURBO%
        - "「우효~!」"
    - color: %COLOR_60%
      content:
        - fontWeight: bold
          content: %NATURE%
        - "「에헤헤, 실례할게요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 너도 같이!」"
    - "주변의 소란 속에서 파머의 손이 %YOU%에게 뻗어 왔다."
    - acc: 1
      content: "「그래, 그래.」"
    - "조금 건성으로 대답하며 파머의 손을 잡고 일어났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 크리스마스잖아. 같이 놀자.」"
    - "아직 피곤한 %YOU%을(를) 끌어 일으켜 트리 곁으로 데려갔다."
    - color: %COLOR_62%
      content:
        - fontWeight: bold
          content: %TANNHAUSER%
        - "「떠들썩하네요~」"
    - divider: true
      content: "시간이 흐르고"
    - "얼마나 지났을까. 어른인 %YOU%에게는 더 이상 젊은이들과 계속 어울릴 여력이 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 밖에서 바람 좀 쐴래?」"
    - "%YOU%의 마음을 미리 읽은 듯 때맞춰 뒤에서 어깨를 두드렸다."
    - "트레센을 나와 크리스마스 분위기로 가득한 거리를 걸었다."
    - "주변 가게에는 별과 종, 빨간색과 흰색 리본이 걸려 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐, 이렇게 될 줄 알았지만.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도 트레이너도 재미있었지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가끔 다 같이 게임도 하고.」"
    - "파머는 볼을 살짝 긁었다. 겨울 미풍 속에서 옅은 홍조가 떠올랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 오늘 파티 좋았어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다들 엄청 준비했거든.」"
    - acc: 1
      content: "「응, 재미있었어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응응! 트레이너가 즐거우면 됐어!」"
    - "대답을 들은 파머는 자연스레 표정이 풀렸고 발걸음까지 가벼워졌다."
    - if: era.get('love:64') >= 75
      lines:
        - acc: 1
          content: "「그럼 파머는? 즐거웠어?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어?」"
        - "자기도 모르게 멈추고 조금 놀란 표정을 지었다. 굳어 있었다는 걸 깨닫고는 종종걸음으로 %YOU%을(를) 따라잡았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 뭐라고 할까.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너가 즐거워하니까 파머도…… 꽤 기뻤어.」"
        - "말 사이에 작은 간격은 있었지만 망설임은 없었다."
        - "%YOU%을(를) 보는 눈에도 조금 복잡한 빛이 섞였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(아직도 신경 써 주네…… 역시 트레이너……)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(역시 파머는…… 트레이너를 이미……)"
        - acc: 1
          content: "「파머?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「괜찮아, 트레이너. 잠깐 생각 좀 했어.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(말하면…… 트레이너는 어떻게 생각할까.)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(안 돼, 파머! 말하지 않으면 앞으로 못 나아가잖아!)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너, 파머는 말이야……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네가 즐거워하면 파머도 기뻐지는 것 같아.」"
        - acc: 1
          content: "「그, 그래?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「벌써 트레이너랑 있는 시간이 점점 늘어나고 있네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘은 파티인데 또 둘이서만 있고.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너랑 있는 시간이 이제 다 같이 있는 시간보다 많아.」"
        - "파머는 하늘을 올려다보며 이따금 옆을 훔쳐봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이대로 가면…… 트레이너 없이는 못 지낼지도 몰라.」"
        - acc: 1
          content: "「어? 나?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기, 조금…… 이상해?」"
        - acc: 1
          content: "「그래도 괜찮아.」"
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「괜찮아?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그러니까……」"
            - "놀라움과 기쁨을 눈에 담고 %YOU%의 똑같이 부끄러운 얼굴을 봤다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그럼, 그럼 신세 좀 질게!」"
          # 馬跳
        - acc: 2
          content: "「응, 이상하네.」"
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「역시 이상해?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「트레이너가 싫다면…… 방금 말은 없던 걸로. 아하하……」"
            - "파머는 머리를 긁으며 신경 쓰지 않는 척했다."
            - "아무리 둘러대도 다 감출 수는 없었다. 이상해 보이지 않게 하는 게 고작이었다."
            - "%UMA%의 실망은 귀가 처진 순간 이미 전부 드러났다."
            - acc: 1
              content: "「너도 엄청 즐겁게 웃고 있었어.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「파머도 정말 즐거웠어……」"
            - "파머는 잠시 움직임을 멈췄다가, 조금 붉어진 눈으로 놀란 듯 곁의 %YOU%을(를) 돌아봤다."
            - "목울대가 눈에 띄지 않게 두 번 움직였다. 무슨 말을 하려다 하지 못했다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "(파머도 즐겁게 웃고 있었다…… 어?)"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "(그럼…… 어어?)"
            - acc: 1
              content: "「파머가 즐거워하는 걸 보니 나도 기뻐.」"
            - "그 말을 듣자 파머의 얼굴이 다시 풀렸다."
            - "입꼬리가 다시 올라가고 눈빛도 한결 맑아졌다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "(그러니까 이상한 게 아니구나……)"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「고마워, 트레이너.」"
            - "%YOU%이(가) 다음 말을 생각하는 사이 옆의 파머가 먼저 다가왔다."
            - "얼굴에 바짝 다가와 가볍고 작은 입맞춤을 남겼다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「크리스마스 선물…… 이것도 하나겠지. 에헤헤.」"
            - "손가락 하나를 살짝 세워 입술에 댔다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「다른 사람한테 말하지 마. 그리고.」"
            - "손을 내리고 다시 똑바로 서서 %YOU%의 두 눈을 봤다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「메리 크리스마스, 트레이너.」"

cl_christmas_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「왠지…… 너무 서둘렀나 봐……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「우리가 이렇게 됐네…… 조금 지나쳤나?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그래도, 그래도 트레이너가 잘못했다는 건 아니야……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아! 파머, 뭐 하는 거야!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아무튼!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「좋아해! %YOURNAME%이(가) 좋아!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……그리고 조금 늦었지만.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「메리 크리스마스! 트레이너.」"

# 情愛の檻（恋慕＞74、通常）
basement_end:
  title: "내일 보자"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너? 오늘 기분은 어때?」"
    - "주변 풍경은 이제 보이지 않고 오로지 검은 벽뿐이다."
    - "푹신한 침대에 누워 익숙한 천장을 바라본다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 지금 트레이너는 말을 못 하지.」"
    - "어두운 환경 속에서 이제 누구도 이곳을 찾아오지 않는다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내일도 꼭 보러 올게, 트레이너……」"
    - "파머는 일어나 침대에 누운 %YOU%을(를) 바라보며 찬란한 미소를 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이제 그만 자자…… 나의 트레이너.」"

# 金銭奴隷（恋慕＞74）
slave_end:
  title: "길 잃은 자의 종점"
  lines:
    - "%CHARA%는 문가에 서서 어둠 속에 잠긴 %YOU%을(를) 바라본다."
    - "방 안에는 오직 두 사람의 시선만이 교차한다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 처음부터 이러고 싶었던 건 아냐. 네가 그렇게 선택한 거지.」"
    - "문이 닫히고 방 안은 칠흑 같은 어둠에 휩싸였다."
    - "커튼 사이로 한 줄기 햇살이 스며들어 %YOU%의 얼굴을 비춘다."
    - "파머는 몸을 숙여 %YOU%의 입을 막고 있던 재갈을 풀어주고 천천히 얼굴을 쓰다듬는다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「돈이 필요하면 나한테 말하면 됐잖아, 트레이너.」"
    - "지폐 뭉치를 들고 %YOU%의 뺨을 가볍게 툭툭 친다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나한테만 말하면 돼.」"
