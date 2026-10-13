# @file メジロマックイーン - 日常
# @author 伊兰
# @author Claude (翻訳)
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「좋은 아침이에요, %CALLNAME%. 함께 식당에서 아침 먹고 트레이닝하러 가볼까요.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「평안하신가요! 오늘도 저희 사이의 계약이 처음 시작되었을 때의 열정을 유지해 봐요.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「평안하시길. 오늘도 우아한 하루를 보내도록 해요.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「메지로 가문의 숙원을 위해서라면, 무엇을 해야 하든 마다하지 않겠어요.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「몸가짐은 하루의 기본이죠. 자는 모습이 낮까지 남아있지 않도록 매일 아침 정성 들여 용모를 가꾼답니다.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「좋은 아침이에요. 멋진 하루를 보내기 위해 기운을 내 볼까요.」"
    # STATUSNAME:1 = 徹夜
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「메지로 가문의 %UMA%인데 밤을 새우다 지각할 뻔하다니…… 부끄럽네요.」"
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「흐아암…… 어제 야구는 정말 멋졌어요…… 전 아무 말도 안 했어요! 정말 아무 말도요!」"
    - if: era.get('status:13:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말 죄송해요. 어젯밤에는 제시간에 잠들었는데, 골드 쉽이 나오는 악몽을 꿔서…… 떠올리기만 해도 오싹하네요……」"

select:
  sync: true
  lines:
    # STATUSNAME:10 = 昏睡
    # STATUSNAME:39 = 馬跳S
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘도 메지로 가문의 영광을 잇기 위해 힘쓰고 있어요.」"
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘 트레이닝도 잘 부탁드려요, %CALLNAME%.」"
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저를 찾으셨나요, %CALLNAME%?」"
    - if: era.get('status:13:10') > 0 || era.get('status:13:39') > 0
      random: true
      lines:
        - "「잠들었네……」"
        - "트레이너실에서 잠든 맥퀸을 보며 %YOU%은(는) 조금 복잡한 기분이 들었다."

good_night:
  sync: true
  lines:
    - if: era.get('status:13:10') > 0 || era.get('status:13:39') > 0
      lines:
        - if: era.get('status:13:39') === 0
          content: "「무리만 하고……」"
        - "%YOU%은(는) 조금 힘겹게, 기운이 다 빠진 맥퀸을 두 팔로 안아 기숙사 앞까지 데려갔다."
        - "「우선 기숙사까지 데려다주세요.」"
        - "사감은 고개를 끄덕이고 조심스럽게 맥퀸을 넘겨받았다."
        - "부담을 내려놓은 %YOU%은(는) 깊게 숨을 들이쉬고, 불이 켜진 기숙사를 바라본 뒤 자신의 숙소로 돌아갔다."
    - if: era.get('status:13:10') === 0 && era.get('status:13:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「수고하셨어요, %CALLNAME%. 내일 또 뵈어요!」"
        - "드디어 하루가 끝났다. %YOU%은(는) 기숙사 현관 밖에 서서 맥퀸이 안으로 들어가는 모습을 배웅했다."
        - "손을 흔드는 메지로 맥퀸에게 %YOU%도 미소 지으며 똑같이 손을 흔들어 주었다."
        - "맥퀸이 위층으로 올라가 보이지 않게 된 뒤에야, %YOU%은(는) 돌아서서 자신의 숙소로 향했다."


talk:
  # CFLAGNAME:40 = やる気
  - if: era.get('cflag:13:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「지금은 컨디션이 최고예요. 이것이야말로 메지로 가문의 %UMA%인 저다운 모습이죠!」"
  - if: era.get('cflag:13:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘은 활력이 넘치는군요. 자, %CALLNAME%, 어떤 강도의 트레이닝이라도 전부 받아들이겠어요!」"
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 오늘 어떤 트레이닝이 있나요? 평소보다 더 빠른 속도로 완수하는 모습을 보여드릴게요.」"
  - if: era.get('cflag:13:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「평소보다 컨디션이 좋은 것 같아요.」"
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「자, %CALLNAME%, 무엇부터 시작하면 될까요?」"
  - if: era.get('cflag:13:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘도 열심히 트레이닝에 임하겠어요, %CALLNAME%.」"
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「죄송해요, %CALLNAME%. 오늘은 집중력이 조금 떨어지네요……」"
  - if: era.get('cflag:13:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「우우, 오늘은 왠지 의욕이 생기지 않아요……」"
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「의욕을 내야 한다는 건 알지만, 몸이 따라주질 않는 것 같아요……」"
  - if: era.get('cflag:13:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「메지로 가문의 %UMA%가, 이런 일로 쓰러질 리가……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「메지로 저택은 매우 넓어서, 어릴 적에는 길을 찾기 위해 인형으로 표시를 해두곤 했답니다.」"
  # CFLAGNAME:66 = 募集状態
  - if: era.get('cflag:7:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALL_7%는…… 왠지 모르게 우연히 알게 된 이후로 계속 저를 쫓아다니고 있어요.」"
  - if: era.get('cflag:63:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALL_63%가 겉보기엔 저렇게 엄격해 보여도, 사실은 아주 다정한 분이랍니다.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「다음에 기회가 된다면 티타임을 즐기러 오시지 않겠나요? 메지로 가문의 방식대로 대접해 드릴게요.」"
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「다음에 같이 야구 경기를 보러 가지 않으실래요? 저의 그 품위없는 행동을 너그럽게 봐주실 수 있다면 말이죠……」"
  - if: d.check === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「우리 메지로 가문의 %UMA%들은 사적으로 각자 다양한 취미를 가지고 있으니, 그리 대단한 일은 아니랍니다.」"

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이것을 제게 주시는 건가요? 정말 감사합니다. 메지로 가문의 너그러움을 보여줄 수 있는 답례를 꼭 준비해야겠어요……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%이 주신 선물, 소중히 간직할게요.」"

o_c_pray:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「소원이 이루어지도록 절차는 마지막까지 제대로 마치도록 해요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레센의 역사에서 부상이나 병으로 은퇴한 우마무스메가 많다는 생각을 하면, 역시 두려워지네요.」"

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「연못 너머의 찌를 바라보며, 물고기를 낚기 위해 매 순간 전념하며 자신을 단련하는 것. 그것이 아마 낚시의 정수가 아닐까 싶네요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「정말 큰 물고기네요. 물고기를 들고 같이 사진을 찍어볼까요?」"

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「밤의 시원한 공기를 마시며 강변을 산책하면 기분이 아주 상쾌해져요. 고민거리들도 잠시 잊어버리게 되고요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「강바람이 정말 기분 좋네요. 다음에 여기 오면 같이 가볍게 달려보지 않으실래요?」"

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뽑히지 않는다면, 그냥 통째로 사버리는 건 어떨까요?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어머나, 테이오 양은 이 댄스 게임기를 아주 좋아하는 모양이네요.」"
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「제 인형을 뽑고 싶으신 건가요? 정말이지, 진짜가 이렇게 옆에 있는데 말이에요.」"

o_s_drawing:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「스스로에게 강한 운이 따르고 있다고 믿는다면, 분명 좋은 경품을 뽑을 수 있을 거예요.」"
  - "%YOU%에게 추첨권을 받은 맥퀸은 기대에 차서 추첨기를 돌리기 시작했다."
  - "빙글빙글빙글……"
  - "통 안의 작은 공이 떨어질 때까지 맥퀸의 손은 멈추지 않았다."
  - if: d.hot_spring === 1
    random: true
    lines:
      - "눈을 반짝이는 맥퀸이 %YOU% 앞으로 걸어왔다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 온천 여행권에 당첨됐어요!」"
      -
      - acc: 1
        content: "「축하해!」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「메지로 가문에도 좋은 온천 여관이 있지만, %CALLNAME%과(와) 함께라면 평범한 여행이 더 좋겠네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그래서 이 여행권은 언제 쓸까요? 기한은 없는 것 같은데요?」"
      -
      - acc: 1
        content: "「맥퀸이 졸업한 뒤에 기분 전환하러 가는 건 어때?」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「확실히 그렇네요. 그럼 %CALLNAME%, 이 여행권은 소중히 보관해 주세요.」"
      - "그렇게 말한 맥퀸이 온천 여행권을 건넸다. %YOU%은(는) 몇 번 매만진 뒤 조심스럽게 지갑에 넣었다."

o_s_ktv:
  - random: true
    lines:
      - "위닝 라이브 연습을 위해, %YOU%과 맥퀸은 카라오케를 찾았다."
      - "「역시 맥퀸의 목소리는 천상의 목소리구나.」"
      - "노래를 마친 맥퀸을 보고 %YOU%은(는) 저도 모르게 아버지 같은 미소를 지었다."
  # CFLAGNAME:57 = 拡張変数
  - if: era.get('cflag:13:57')?.love_40 === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「날려 버려라—YATAKA!!」"
      - "오랫동안 참아 왔던 맥퀸이 좋아하는 구단의 응원가를 힘껏 부르는 모습을, %YOU%은(는) 뒤에서 바라보았다."
      - "뭐…… 좀처럼 볼 수 없는, 아이처럼 신난 맥퀸의 모습이다. 그것만으로도 가치가 있었다."
  - if: era.get('love:13') > 75
    random: true
    lines:
      - "「바람을 몰던 그 아이에게~ ♫」"
      - "「조금 뜨거운 시선~ ♫」"
      - "왠지 모르게 맥퀸과 깊은 사이가 된 이후로, %YOU%은(는) 노래를 부를 때 이 가사 대목만 나오면 유독 열정적으로 부르게 되었다."
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Waiting for Tomorrow～♫」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「조금씩이라도 나아가면 돼~ ♫」"
      - "경쾌한 반주와 맥퀸의 부드러운 목소리가 하나로 어우러졌다."
      - "실로 더할 나위 없는 즐거움이었다."

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「메…… 메지로 가문의 %YOUNG_LADY%로서, 고작 이런 것에 겁먹을 리가……!」"
      - "식은땀을 흘리며 다리를 후들거리는 맥퀸을 본 %YOU%은(는) 어쩔 수 없이 %SEX%의 손을 잡아주어 중심을 잡을 수 있게 도와주었다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「연애 영화라니…… %CALLNAME%은 의외로 소녀 감성이 풍부하시네요. 실례가 안 된다면 %CALLNAME%의 연애관은 어떤지 여쭤봐도 될까요?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「제가 좋아하는 영화 장르를 꼽자면, 아마 미스터리물일 거예요. 좋은 영화라면 사건이 일단락된 후에 나타나는 대반전이 가장 의외이면서도 즐거운 법이니까요!」"

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 식사를 마친 후에 디저트를 조금만 먹어도 될까요? 절대로 많이 먹지 않겠어요!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 샤브샤브 가게의 고기는 정말 최상급이네요. 다음에 또 오지 않으실래요?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그동안 체중 관리를 열심히 했으니 한 번쯤은 괜찮다구요? 그렇다면 사양 않고 먹어보겠습니다!」"

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「죄송해요~ 화장을 조금 하느라 기다리게 해버렸네요. 오늘은 어디로 갈까요?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그동안 지도해 주신 %CALLNAME%께 감사하는 뜻에서, 오늘은 제가 계산할게요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「길을 건널 때는 역시 손을 잡고 가는 게 마음이 놓이네요~」"
  - if: era.get('love:13') >= 51
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「우리 한번 이렇게 해보는 건 어떨까요…… 네, 손을 잡는 거요. 팬분들에게 들키면 어쩌나 싶어서 조금 긴장되긴 하지만요.」"
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 걷다가 지치셨나요? 그럼 사람 없는 곳을 찾아서 무릎베개를 해드릴까요?」"
      - "이윽고 나무 그늘 아래 벤치에서, %YOU%은(는) 맥퀸의 부드러운 손길을 느끼며 눈을 감고 서서히 몸의 긴장을 풀었다."

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 옷, 어떤가요?」"
      - "맥퀸은 탈의실 문을 열고 나와 %YOU% 앞에서 가볍게 한 바퀴를 돌았다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「백화점 1층은 보통 고급 브랜드들이 입점해 있어서 상품들이 꽤 비싼 편이랍니다. 제가 한번 구경시켜 드릴까요, %CALLNAME%?」"

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가문의 선배님들도, 중책을 맡은 저를 분명히 지켜보고 계시겠죠.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「때로는 모두의 기대를 한 몸에 받는 것이 속박처럼 느껴져 숨이 막힐 때도 있답니다.」"

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「교내에서 손을 잡다니요? 만약 친구들에게 들키기라도 하면 어떡하려고요……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「사람들이 우리를 많이 쳐다보는 것 같아요. 진정해야 해, 진정……」"

s_r_lunch:
  - random: true
    lines:
      - "오늘은 맥퀸과 함께 옥상에 올라갔다. 맥퀸은 도시락을 가져와 %YOU%과 함께 나누어 먹었다."
      - "여러 가지 업무로 지쳐있던 %YOU%은(는) 구원의 동아줄을 잡은 듯이 도시락을 허겁지겁 먹어 치웠다."
  - random: true
    lines:
      - "방금 같이 점심을 다 먹었을 뿐인데, 맥퀸은 %YOU%의 어깨에 기댄 채 움직이지 않았다. 벌써 잠이 솔솔 오는 걸까?"
      - "어깨를 움직이기 힘들어진 %YOU%은(는) 잠시 멍하니 자세를 유지하며 맥퀸이 깨지 않기를 바랐다."
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 아~ 하세요.」"
      - "그 관계를 넘어선 이후로, 어느덧 식사 시간조차 느긋하게 흐르게 되었다."
      - "아마도 맥퀸이 한 숟가락씩 %YOU%에게 직접 먹여주는 탓이리라."
      - "하지만 어느덧 익숙해진 %YOU%도 미소를 지으며 맥퀸이 주는 음식을 받아먹었다."

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으음, 전 파르페를 먹고 싶다구요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오랫동안 혼자 살면 요리가 귀찮아지나요? 제가 있으면 %CALLNAME%도 그렇게 생각하지 않으시겠죠?」"
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「일전에 고용인분에게 요리 기술을 조금 배워왔답니다. 그래서 오늘은 제가 직접 만든 도시락을 가져왔는데, 한번 드셔보실래요?」"

office_study:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「메지로 가문의 %UMA%라고 해서 모든 걸 다 알고 있는 건 아니랍니다.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그러니 %CALLNAME%, 저를 지도해 주세요.」"

office_rest:
  - random: true
    lines:
      - "잠깐 피곤해서 눈을 붙였을 뿐인데 그만 잠이 들어버리고 말았다."
      - "어깨에 닿는 이질적인 느낌에 %YOU%이 옆을 돌아보니, 메지로 맥퀸이 곤히 잠들어 있었다."
      - "결국 %YOU%은(는) 차마 깨우지 못하고 그 상태로 몇 분을 더 머물렀다."
  - random: true
    lines:
      - "「조심…… 움직이지 마, 그래……」"
      - "%YOU%은(는) 무릎 위에서 얼굴이 붉어진 맥퀸은 아랑곳하지 않고, 면봉으로 %SEX%의 귀를 파주었다."
      - "다만 인간의 귀와 비교했을 때, 우마무스메의 귀가 주는 감촉은 조금 기묘했다……"
  - if: era.get('love:13') >= 41
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「야구 경기 녹화 테이프를 가져왔어요. 같이 야구 중계를 보지 않으실래요?」"
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「제 무릎베개가 좋으신가요? %CALLNAME%만 좋으시다면 언제든 이렇게 해드릴 수 있답니다.」"
  - if: era.get('love:13') >= 75
    random: true
    lines:
      - "「맥퀸, 이리 와서 한번 안아보자.」"
      - "맥퀸의 허락을 받은 후, %YOU%은(는) 맥퀸의 몸을 꽉 끌어안으며 %SEX%의 머리카락에서 나는 향기를 탐욕스럽게 들이마셨다."
      - "친밀한 담당과 이렇게 붙어있는 것보다 더 행복한 일은 없을 것이다."

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「세상에, 괴물의 패턴을 완전히 꿰뚫고 계시네요. 마치 손바닥 위에서 가지고 노는 것 같아요. 정말 대단해요!」"
      - "%YOU%의 능숙한 조작 실력을 본 곁의 맥퀸은 놀라움에 입을 다물지 못했다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저희의 일심동체를 시험하는 이런 게임이라면, 반드시 클리어해 보이겠어요.」"
      - "익숙하지 않은 솜씨의 맥퀸이었지만 열심히 컨트롤러를 조작하며 %YOU%과 함께 2인용 게임에 열중했다."

# ジュニア級
birthday1:
  title: "첫생일"
  lines:
    - "맥퀸의 생일날, 트레이닝실에 모인 메지로 가문의 %UMA%들은 약속이라도 한 듯 조용히 각자의 자리에 앉아 일제히 한 곳을 바라보았다."
    - "%SEX%들의 시선이 닿는 곳은 당연하게도 오늘 파티의 주인공이었다."
    - "%YOU%은(는) 안대로 눈을 가린 맥퀸의 어깨에 손을 올리고, 서서히 %SEX%를 커다란 테이블 앞으로 안내했다."
    - acc: 1
      content: "「됐어.」"
    - "%YOU%이 안대를 벗겨내자, 테이블 주위에 앉아있던 메지로 가문의 %UMA%들이 일제히 외쳤다."
    - content:
        - fontWeight: bold
          content: "모두"
        - "「맥퀸, 생일 축하해!!!!!!」"
    - "눈앞에는 가장 친숙한 메지로 가문 자매들뿐만 아니라, 화려하게 장식된 벽과 그 위에 걸린 「메지로 맥퀸 생일 축하해!」라는 현수막이 들어왔다."
    - "맥퀸은 잠시 놀란 표정을 짓더니, 이내 달콤하게 미소 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「모두 고마워요.」"
    - "맥퀸이 자리에 앉자, 옅은 미소를 띤 라모누가 맥퀸에게 편지 한 통을 건넸다."
    - color: %COLOR_86%
      content:
        - fontWeight: bold
          content: %RAMONU%
        - "「할머님께서 네게 보내신 편지란다.」"
    - "그 말을 들은 맥퀸은 즉시 진지하게 귀를 기울이며 편지를 받아 펼쳐 정독하기 시작했다."
    - "맥퀸의 입학 후 첫 생일을 축하하는 내용부터, 메지로 가문의 숙원을 다시 한번 강조하고, 마지막으로 학원에서 트레이닝에 정진할 것을 당부하는 내용까지……"
    - "한참 후, %SEX%는 편지를 정성스럽게 접었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「메지로의 영광을 반드시 이어가겠어요.」"
    - acc: 1
      content: "「어쨌든 지금은 즐겁게 생일을 보내자구.」"
    - "맥퀸은 살짝 놀란 눈으로 뒤에 서 있는 %YOU%을(를) 바라보며 본능적으로 편지 내용을 가렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇네요.」"
    - "%SEX%는 편지를 잘 갈무리해 넣었고, 표정은 이내 활기차게 변했다."
    - "다 같이 생일 축하 노래를 부르고, 소원을 빌고, 케이크를 나누어 먹으며 맥퀸의 생일 파티는 마무리되었다."

birthday2:
  title: "생일2년차"
  lines:
    - "이번 주 맥퀸의 생일 기간에, %YOU%은(는) 맥퀸을 자신의 집으로 초대했다."
    - acc: 1
      content: "「여기 앉아서 책을 보든 TV를 보든 하고 있어. 아무튼 움직이면 안 돼.」"
    - "%YOU%의 말에 맥퀸은 작게 궁얼거리면서도 순순히 요청에 응했다."
    - "몇 분 뒤, %YOU%은(는) 주방에서 멜론 파르페 한 컵을 양손으로 받쳐 들고 나와 맥퀸의 앞에 정중히 놓았다."
    - "%YOU%은(는) 파르페를 뚫어지게 쳐다보는 맥퀸의 눈동자를 흥미롭다는 듯 바라보며 %SEX%의 맞은편에 앉았다."
    - "「오늘의 주인공의 생일 축하 기념으로 특별히 만든 파르페야.」"
    - "그 한마디에 안심한 건지, %SEX%은(는) 긴 숟가락을 들고도 좀처럼 입에 대지 않았다."
    - "%SEX%의 표정에는 고민의 기색이 역력했다."
    - acc: 1
      content: "「살찌는 게 걱정돼? 이 파르페 재료는 전부 저칼로리 베이스로 만든 거야.」"
    - "%YOU%이 고개를 갸우뚱하며 맥퀸을 바라보았다."
    - "하지만 맥퀸은 고개를 가로저었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그저, %CALLNAME%이 직접 만들어 주신 파르페라 먹어 치우기가 조금 아까울 뿐이에요.」"
    - acc: 1
      content: "「평소에도 안 해주는 건 아니지만, 너무 망설이다간 파르페가 다 녹아버릴걸.」"
    - "%YOU%의 말에 맥퀸은 한 손으로는 파르페를 잡고 다른 한 손으로는 스푼을 들어, 조심스럽게 아이스크림을 떠서 입안에 넣고 그 맛을 음미했다."
    - "이윽고 뺨을 감싸며 세상에서 가장 맛있는 음식을 먹었을 때의 행복한 표정을 지어 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%의 파르페는 역시 그 어떤 디저트 가게보다 맛있네요.」"
    - "그러면서도 %SEX%는 여전히 한 숟가락 한 숟가락을 소중히 음미했다."
    - "%YOU%은(는) %SEX%의 행복한 표정을 지켜보며 함께 평화로운 시간을 보냈다."

birthday3:
  title: "생일3년차"
  lines:
    - "맥퀸의 생일날 저녁 무렵."
    - "맥퀸은 눈이 가려진 채 %YOU%의 안내를 받아 트레이닝실로 향했다."
    - "안대를 벗는 순간, 트레이닝실에 모여있던 맥퀸의 친구들이 일제히 외쳤다."
    - content:
        - fontWeight: bold
          content: "모두"
        - "「맥퀸, 생일 축하해!!!!!!」"
    - "그와 동시에 맥퀸의 양옆에서 두 개의 축하 꽃가루 폭죽이 터졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「모두들……」"
    - "성대한 축하에 맥퀸은 감동을 감추려는 듯 입을 가렸다."
    - acc: 1
      content: "「오늘 밤만큼은 긴장을 풀고 마음껏 즐겨.」"
    - "%YOU%은(는) 맥퀸의 손을 잡고 케이크 앞으로 함께 앉았다."
    - "이어진 순서는 전형적인 생일 축하 노래 부르기와 소원 빌기 시간이었다."
    - "선물 증정 시간에 모두가 맥퀸에게 선물을 건넸지만, %YOU%은(는) 유독 선물을 늦게 꺼냈다."
    - "%YOU%은(는) 책상 서랍을 열고 무언가를 꺼내 들었다."
    - "「지금 이 시점에는 조금 안 어울릴지도 모르지만.」"
    - "%YOU%이 맥퀸에게 선물을 보여주었다."
    - "——종이로 만든 봄 텐노상 방패 문장이었다."
    - "「이번 달에 봄 텐노상이 시작되니까. 어쨌든 승리를 기원하며 줄게.」"
    - "눈앞의 맥퀸은 양손으로 종이 방패를 받아 들고 잠시 말을 잇지 못했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말 바보 같네요, %CALLNAME%.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「기대하고 계세요—— 진짜 텐노상 방패를 반드시 가져올 테니까요.」"
    - "맥퀸은 결연한 표정으로 %YOU%이 선물한 「방패」를 쓰다듬었다."
    - acc: 1
      content: "「어쨌든, 일단은 생일을 먼저 즐기자구.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇네요.」"
    - "방패를 책상 위에 잘 놓아둔 뒤, %YOU%과 맥퀸은 다시 생일을 축하하는 인파 속으로 즐겁게 뛰어들었다."
