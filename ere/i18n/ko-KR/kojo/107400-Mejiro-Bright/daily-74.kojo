# @file メジロブライト - 日常
# @author KUN
select:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘은 어떤 트레이닝을 하실 건가요~」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「흠~ 흠흠~ 앗, %CALLNAME%도 들으셨나요?」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%께서 곁에 계셔 주신다면, 제아무리 오랜 시간이라도 계속 기다릴 수 있을 것만 같아요~」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그저 자신의 페이스를 잘 유지하면 되는 거랍니다~ 저도, %CALLNAME%도 말이죠~」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「몸과 마음이 모두 저에게, 어서 달리라고~ 속삭이는 듯한 느낌이에요」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「조급해하는 모습은 좋아하지 않지만, 언제든 시작하셔도 괜찮답니다~」"
    # STATUSNAME:1 = 徹夜
    - if: era.get('status:74:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「앗, 벌써 트레이닝 시간이 되었나요? 대단히 죄송해요, 어제 잠을 좀 설치는 바람에……」"
    - if: era.get('love:74') >= 49
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「언제라도 좋으니, 느긋하게 산책을 즐기고 싶네요~ 물론 그때도 %CALLNAME%께서 함께해 주셨으면 해요~」"

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 대단하세요! 단번에 이해하셨군요~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「과연 %CALLNAME%이세요~」"
      - "숙제를 단숨에 끝마친 %CHARA%는, 자신도 모르게 %YOU%의 곁으로 슬며시 몸을 기대었다."

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저는 요리에는 통 소질이 없어서 말이죠…… 아무래도 제가 워낙 느긋하다 보니까요~」"
      - "눈앞에 놓인 제법 먹음직스러운 요리를 바라보며, %CHARA%의 얼굴에 옅은 홍조가 떠올랐다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「고맙습니다, %CALLNAME%~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「모처럼 이렇게 한가로운데, 티 타임이라도 가질까요~」"

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「레이스 준비…… 열심히 하겠어요!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「사실 편자는 저 혼자서도 달 수 있답니다」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그도 그럴 게, 저는 느긋~하게 망치질하는 걸 아주 잘하거든요」"
  - if: era.get('love:74') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「승리하고 돌아오겠어요, %CALLNAME%~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「메지로의 이름을 위해서, 그리고 당신을 위해서도 말이죠~」"

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「함께 주무시는 건가요? 좋아요～」"
      - "아무런 거리낌도 없는 %CHARA%는, 마치 말랑한 마시멜로처럼 %YOU%의 곁에 찰딱 둥지를 틀었다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「잠시 같이 쉬어가기로 해요, %CALLNAME%～」"
      - "%YOU%의 팔을 와락 껴안으며, 도저히 거절할 수 없을 만큼 부드러운 감촉으로 업무를 가로막아 왔다."
  - if: era.get('love:74') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어라? 쉬시려고요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아니면…… 휴식은 그저 핑계에 불과한 걸까요～」"
      - "다소 의미심장한 눈빛을 건네며 %YOU%의 손을 살포시 붙잡았고, 이내 두 사람의 열 손가락이 깍지를 끼듯 뒤엉켰다."
      - "「농담하지 마」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「네에～」"

talk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아무 문제 없답니다, %CALLNAME%」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「전 꾸준하게 트레이닝을 이어 나가는 것만큼은 나름 자신 있으니까요~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「준비 완료입니다~ %CALLNAME%, 오늘은 어떻게 해볼까요?」"
  # STATUSNAME:1 = 徹夜
  - if: era.get('status:74:1') > 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하아암…… 오늘은 아침부터 허둥지둥 일어났더니 조금 졸리네요오」"
  # CFLAGNAME:40 = やる気
  - if: era.get('cflag:74:40') > 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「컨디션이 아주 좋아요~ 언제든 시작하셔도 된답니다~」"
  - if: era.get('cflag:74:40') < 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「마음이 조금 싱숭생숭하네요……」"

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「게임 속에서나마 %CALLNAME%과(와) 함께하는 것도 나쁘지 않네요~」"
      - "화면에 타임오버가 떠오른 것을 보며, %CHARA%는 멍하니 웃었다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「전 게임엔 통 소질이 없나 봐요……」"

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저에게 주시는 선물인가요? 대단히 감사합니다! %CALLNAME%~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「선물이로군요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이러면 저도 %CALLNAME%께 반드시 보답을 해드려야겠는걸요~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「고맙습니다, %CALLNAME%~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「언젠가 듬~뿍 보답해 드릴게요~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「와아~ 저를 위한 선물이군요~」"

s_a_tree_hollow:
  # CFLAGNAME:48 = 育成回合計時
  # 95 + 16: 天春に相当する育成ターン数
  - if: era.get('cflag:74:48') < 95 + 16
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으음…… 여기선 딱히 드릴 말씀이 없는걸요…… 그야 봄 텐노상에 대해서는 이미 마음을 굳혔으니까요」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「휴우~ 나무 구멍 씨도 오늘 고생 많으셨어요~」"

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「다른 분들이 저희를 다 보겠어요, %CALLNAME%?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그렇지만, 딱히 싫지는 않네요~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%과(와)의 데이트라니…… 후훗.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이러면 오늘도 아주 평화롭고 느긋하게 흘러가겠어요」"
  - if: era.get('love:74') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「데이트라니…… 우에에……?」"

s_r_lunch:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%~ 점심시간이에요~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「천천히 만들 수 있는 요리라면 저도 할 수 있어요~」"

o_r_walk:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「여기서 함께 느긋하게 산책해요~ 후훗~」"

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%과(와) 단둘이 한가롭게 낚시를~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「물고기야~ 잡혀라~」"

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오락……실인가요? 전 이런 기계에는 통 소질이 없어서요~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「와아~ %CALLNAME%, 대단하세요!」"

o_s_drawing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「경품 추첨 말씀이시군요~ 예전에는 추첨을 할 때마다 사람들이 주위로 모여들곤 했지요. 조금 그리운걸요~」"
  - if: era.get('love:74') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 경품 추첨을 하실 건가요? 원하시는 선물이 있다면 제가 얼마든지 드릴 수 있는데 말이죠……」"

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「노래라면 아는 곡이 그리 많지 않은데 말이죠~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후훗, 오직 %CALLNAME% 한 분만을 위한 라이브인가요?」"
  - if: era.get('love:74') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%께서 이런 사랑 노래를 들으시면, 먼저 제게 무슨 말씀이라도 건네주실까요?」"

o_s_cinema:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「예전에 공포 영화를 보았을 때, 언니들이 말씀하시길 제가 비명을 가장 늦게 질렀다고 하더라고요」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「혹시 전개가 아주 느릿느릿한 영화 같은 건 없을까요~」"
  - if: era.get('love:74') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「로맨스 영화는…… 어떠신가요?」"

out_church:
  - "둘이서 정처 없이 걷다 보니, 마침 트레센 학원 뒷산으로 이어지는 오솔길 앞에 다다랐다."
  - "위쪽의 신사를 본 %CHARA%와 %YOU%은(는) 이것도 인연이라며 산 정상으로 향했다."
  - acc: 1
    content: "「네가 한번 뽑아봐.」"
  - "방울 소리가 텅 빈 신사 경내에 청아하게 울려 퍼지는 가운데, %CHARA%는 통 안에서 제비 하나를 아무렇게나 뽑았다."
  - if: d.dice
    lines:
      - "종이 위에 조그맣게 적힌 「길」을 확인한 %CHARA%는 내심 기쁜 듯 몸을 돌려 손에 든 제비를 %YOU%에게 건넸다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘 운세가 아주 좋은걸요, %CALLNAME%!」"
  - if: "!d.dice"
    lines:
      - "종이를 펼치자마자 불길한 글귀를 본 %CHARA%는, 더는 종이를 펼치지 않고 손을 멈췄다."
      - "%YOU%에게 보이지 않게 재빨리 종이를 접어 주머니 속에 쏙 집어넣었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……길이 나왔답니다, %CALLNAME%~」"

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「무얼 먹으면 좋을까요~ %CALLNAME%, 혹시 좋아하시는 음식이라도 있으신가요~」"

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「여기서 데이트를 한다면, 트레센 학원의 다른 분들께 들킬 염려는 전혀 없겠죠?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「누군가 저희를 지켜보고 있는 것 같아요, %CALLNAME%~」"

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「무언가 사시려는 건가요? 저도 %CALLNAME%께 소박한 선물 하나쯤은 해 드릴 수 있답니다~」"

good_night:
  sync: true
  lines:
    # STATUSNAME:10 = 昏睡
    # STATUSNAME:39 = 馬跳びS
    - if: era.get('status:0:10') === 0 && era.get('status:74:10') === 0 && era.get('status:74:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%, 부디 푹 쉬시길 바랄게요~」"
        - "%CHARA%를 기숙사 앞까지 데려다주자, %CHARA%는 입구를 등지고 돌아서서 %YOU%에게 공손히 인사한 뒤 천천히 기숙사로 들어갔다."
    - if: era.get('status:0:10') === 0 && (era.get('status:74:10') > 0 || era.get('status:74:39') > 0)
      lines:
        - "깊이 잠든 %CHARA%는 %YOU%의 등에 업혀 기숙사로 돌아온 줄도 몰랐지만, 곁에서 느껴지는 %YOU%의 익숙한 냄새에 옅은 미소를 지어 보였다."
    - if: era.get('status:0:10') > 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%…… 어라? 잠드신 건가요?」"
        - "꿈결 속에서, 아스라이 들려오는 %CHARA%의 목소리가 귓가를 스쳤다."

good_night_sex:
  - "%CHARA%와 헤어지려던 찰나, 그녀가 손을 살며시 붙잡아 왔다."
  - "평소대로라면 여기서 %CHARA%가 기숙사로 들어가는 뒷모습을 지켜보는 것이 마땅했을 터였다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「오늘은, 아직 이대로 끝내고 싶지 않아요……」"
  - acc: 1
    key: select
    content: "「그럼 같이 돌아가자～」"
    lines:
      - "%YOU%의 답변을 듣자마자, %CHARA%는 기쁜 기색을 감추지 못하며 %YOU%의 팔을 꼭 껴안고는 곁으로 밀착해 왔다."
      - "말랑말랑한 뺨을 %YOU%의 가슴팍에 파묻으며, 점차 가빠져 가는 심장 고동 소리를 가만히 음미했다."
  - acc: 2
    content: "「오늘은 여기까지만 하자.」"
    lines:
      - if: d.check === 2
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「고작 여기서……」"
          - "붙잡은 손에 갑작스레 아귀힘이 들어가며, 조금도 놓아줄 기색을 보이지 않았다."
          - "꽉 무려진 손아귀의 통증이 %YOU%의 팔을 타고 고스란히 몸 전체로 번져 나갔다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「지금 끝내버린다면……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「조금, 아쉬움이 남는걸요.」"
          - "평소의 온화함과는 사뭇 다른 분위기를 풍기며, %CHARA%는 %YOU%의 손을 단단히 거머쥔 채 한 걸음씩 다가왔다――"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%…… 실례할게요!」"
      - if: d.check !== 2
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……알겠습니다」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%께 너무 폐를 끼칠 수는 없으니까요～」"
          - "마지못해 손을 놓은 %CHARA%는 얼굴 가득 짙은 아쉬움을 머금은 채 뒤로 한 걸음 물러섰다."
          - "%YOU%에게 정중히 인사를 건넨 뒤, 조금은 가라앉은 기색으로 쓸쓸히 기숙사를 향해 걸어갔다."
