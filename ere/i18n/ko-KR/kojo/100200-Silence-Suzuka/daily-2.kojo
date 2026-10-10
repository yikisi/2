# @file サイレンススズカ - 日常
# @author 牛蛙煲
# @author Claude (翻訳)
select:
  sync: true
  lines:
    # STATUSNAME:10 = 昏睡
    # STATUSNAME:39 = ウマ跳びS
    - if: era.get('status:2:10') === 0 && era.get('status:2:39') === 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - "「%CALLNAME%, 준비 운동은 충분히 하고 있어요. 언제든 시작해도 괜찮아요.」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - "「%CALLNAME%, 제가 먼저 두 바퀴 정도 뛰고 올까요?」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontSize: bold
                  content: %CHARA%
                - "「%CALLNAME%, 기분이 좋아 보이시네요. 계속 그런 좋은 기분이셨으면 좋겠어요.」"
    - if: era.get('status:2:10') > 0 || era.get('status:2:39') > 0
      lines:
        - "「저기, 스즈카? ……」"
        - "%YOU%은(는) 부드럽게 스즈카를 깨우려 했지만, 스즈카는 깊이 잠든 모양이다."

good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「%CALLNAME%이 저의 달리기 방식을 믿어주신다면, 저는 자신감을 가지고 끝까지 관철하겠어요.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「서툰 일이라도…… %CALLNAME%이 곁에 있다면, 분명 극복할 수 있을 거예요.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「가장 앞의 풍경…… 누구에게도 양보하지 않겠어.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「새벽 공기는 여전히 기분 좋네요…… %CALLNAME%, 서둘러 시작할까요?」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「아침 식사는 이미 마쳤답니다. 에너지를 제대로 섭취하지 않으면 훈련할 수 없으니까요.」"
    # STATUSNAME:1 = 夜ふかし気味
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「%CALLNAME%, 정말 죄송해요…… 어제 훈련이 끝난 뒤에, 밤바람이 너무 기분 좋아서 조금 더 달려버리는 바람에……」"
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「%CALL_1%이(가) 눈 내리는 풍경 퍼즐을 선물해 줬는데, 너무 재미있어서 아침까지 맞추고 말았어요. 정말 죄송합니다……」"
    - if: era.get('status:2:1') > 0
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「어제 제시간에 침대에 눕긴 했지만, 오늘 훈련 내용을 생각하다 보니 조금 흥분해서 잠이 오질 않았어요……」"

good_night:
  sync: true
  lines:
    - if: era.get('status:2:10') > 0 || era.get('status:2:39') > 0
      lines:
        - if: era.get('status:2:39') === 0
          content: "「저기, 스즈카? ……」"
        - "%YOU%은(는) 부드럽게 스즈카를 깨우려 했지만, 상대는 깊이 잠든 모양이다."
        - "그래서 %YOU%은(는) 어쩔 수 없이 스즈카를 직접 안아 들고 기숙사 건물 앞까지 데려다주었다."
        - acc: 1
          content: "「이번에도 폐를 끼쳤네요……」"
        - "%YOU%은(는) 스즈카를 %SEX%의 기숙사 사감에게 맡기고, 상대가 기숙사로 돌아가는 것을 배웅했다."
        - "%YOU%은(는) 한숨을 내쉬었다. 다음에는 트레이닝 강도 조절에 주의해야겠다."
    - if: era.get('status:2:10') === 0 && era.get('status:2:39') === 0
      lines:
        - color: %COLOR%
          content:
            - fontSize: bold
              content: %CHARA%
            - "「여기까지 데려다주셔서 감사합니다, %CALLNAME%! 내일 봬요!」"
        - "%YOU%은(는) 스즈카를 기숙사 앞까지 배웅했고, %CHARA%은(는) 미소 지으며 %YOU%에게 감사 인사를 전했다."
        - "%YOU%도 스즈카를 향해 손을 흔들어 화답했다."
        - "%YOU%은(는) 스즈카가 기숙사 건물 안으로 사라질 때까지 지켜본 뒤에야 발길을 돌렸다."

good_night_sex:
  - "트레이닝이 끝난 뒤, %YOU%은(는) 여느 때처럼 스즈카를 기숙사 앞까지 배웅할 준비를 했다."
  - "하지만 스즈카는 바로 따라오지 않았다. 두 팔을 벌려 %YOU%을(를) 꽉 껴안았다."
  - color: %COLOR%
    content:
      - fontSize: bold
        content: "사일런스 스즈카"
      - "「%CALLNAME%, 아직 드리고 싶은 말씀이 많아요. 벌써 헤어지고 싶지 않네요……」"
  - "스즈카는 뺨을 %YOU%의 품 안에 완전히 파묻었고, 평소 얌전하던 꼬리도 살며시 %YOU%의 종아리를 휘감았다."
  - "%YOU%은(는) 스즈카의 등을 토닥이며 잠시 생각에 잠겼다."
  - acc: 1
    key: sex
    content: "「좋아, 그럼 좀 더 같이 있어 줄게.」"
    lines:
      - "%YOU%은(는) 스즈카의 턱을 살짝 들어 올렸고, 스즈카의 약간 젖은 눈동자를 바라보며 %SEX%에게 입을 맞췄다."
      - "얼마나 지났을까. 마침내 두 사람의 입술이 아쉬움을 남기며 떨어졌다."
      - "「스즈카, 장소를 옮기자. 여기는 적절하지 않아.」"
      - "스즈카는 여전히 꼭 껴안은 채 작게 고개를 끄덕였다."
  - acc: 2
    content: "「시간이 늦었어, 스즈카. 내일 트레이닝을 위해서라도 쉬어야 해.」"
    lines:
      - if: d.check !== 2
        lines:
          - "거절하는 말을 듣자 스즈카는 곧바로 팔을 풀었다. 그리고 가슴팍을 주먹으로 살짝 두드렸다."
          - color: %COLOR%
            content:
              - fontSize: bold
                content: "사일런스 스즈카"
              - "「%CALLNAME%은 정말 분위기를 모르시네요……」"
          - "말을 마친 스즈카는 작게 콧노래를 흥얼거리며 뒤돌아 떠났다."
          - "%YOU%은(는) 뒷머리를 긁적이며 서둘러 뒤를 쫓았다."
      - if: d.check === 2
        lines:
          - "거절하는 말을 들어도 스즈카는 오히려 더 힘껏 껴안았다."
          - color: %COLOR%
            content:
              - fontSize: bold
                content: "사일런스 스즈카"
              - "「오늘은 그렇게 쉽게 %CALLNAME%을 보내주지 않을 거예요……」"

talk:
  # CFLAGNAME:40 = やる気
  - if: era.get('cflag:2:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「저기, 조금 참지 못하고 달려보고 싶어지네요. 이제 시작할까요?」"
  - if: era.get('cflag:2:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 지금 훈련하면 평소보다 두 배의 효과를 낼 수 있을 것 같아요.」"
  - if: era.get('cflag:2:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 지금 기분이 아주 좋아요. 오늘 훈련은 어떤 걸 할까요?」"
  - if: era.get('cflag:2:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「오늘은 어떤 코스에서 달리게 될까요? 기대돼요……」"
  - if: era.get('cflag:2:48') < 3 * 48 && era.get('cflag:2:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「저기, 오늘 계획은 무엇인가요?」"
  - if: era.get('cflag:2:48') < 3 * 48 && era.get('cflag:2:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「오늘도 평소처럼 열심히 해야겠네요.」"
  - if: era.get('cflag:2:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「으으, 기운이 나지 않네요. 어제 너무 오래 달린 걸까요……」"
  - if: era.get('cflag:2:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「조금 힘들지만…… 그래도 포기할 순 없어요!」"
  - if: era.get('cflag:2:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「전혀 의욕이 생기지 않아요……」"
  - if: era.get('cflag:2:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「몸이 무거워요…… 괜찮겠죠, 아마도?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「어제 %CALL_56%이(가) 부적으로 커다란 황금 도미를 선물해 줬는데, 어디에 둬야 할까요…… 으음……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALL_10%에게 단거리 레이스의 요령을 물어봤는데, %SEX%가 『Enjoy spirit desu⭐』라고 하더라고요…… 전혀 이해하지 못했어요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「사실 %CALL_18%은(는) 정말 재미있는 사람이에요. 어제 제가 %CALL_1%의 흉내를 내며 %SEX%를 선배라고 불렀을 때 말이죠…… 후후……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「도심은 어디나 높은 건물뿐이네요. 가끔은 어릴 적처럼 넓은 들판을 마음껏 달리고 싶어질 때가 있어요.」"
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「추억이 늘어날수록 눈앞의 풍경도 풍성해지네요…… 이제는 %CALLNAME%도 그 안에 있어요.」"
  # FLAGNAME:2 = 現在の月
  - if: era.get('flag:2') >= 3 && era.get('flag:2') <= 5
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「오늘 아침 달리기를 할 때 길가에 핀 작은 꽃과 새싹을 봤어요. 덕분에 기분이 아주 좋아졌답니다.」"
  - if: era.get('flag:2') >= 6 && era.get('flag:2') <= 8
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「여름 아침은 그렇게 덥진 않지만, 달리고 나면 머리에 작은 벌레들이 꼬여서 조금 힘드네요……」"
  - if: era.get('flag:2') >= 9 && era.get('flag:2') <= 11
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「가을바람은 정말 시원하네요. 이런 바람을 맞으며 달리는 건 정말 멋진 일이에요.」"
  - if: era.get('flag:2') >= 12 || era.get('flag:2') <= 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「오는 길에 얼어붙은 호수를 봤는데, 왠지 그 위를 달려보고 싶다는 생각이 들었어요…… 위험하다는 건 잘 알지만, 그냥 생각만 해본 거예요.」"

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「저에게 주시는 선물인가요? 정말 감사합니다, %CALLNAME%!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「선물 감사합니다. 소중히 간직할게요.」"

out_church:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「의외로 북적거리네요. 다들 꼭 이루고 싶은 소원이 있나 봐요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「정성을 다해 기도한다면 소원은 반드시 이루어질 거예요!」"

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「낚시는 조용히 기다려야 하네요. 달리기와는 정반대지만, 인내심이 아주 많이 필요하다는 점은 닮은 것 같아요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 빨리 보세요. 정말 큰 물고기예요.」"

o_r_walk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「이런 느낌…… 정말 좋네요. 다음에도 %CALLNAME%이 저와 산책하러 와주시면 좋겠어요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「저기, %CALLNAME%. 잠시 달리고 싶은데, 여기서 잠깐만 기다려 주실 수 있나요?」"
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%와 함께 산책하는 건 정말 행복한 경험이에요.」"

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「의외로 재미있네요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「많은 선배님이 이걸로 위닝 라이브 훈련을 하신다고 들었어요.」"
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 저 인형 갖고 싶어요. 저 대신 뽑아주시면 안 될까요~?」"

o_s_drawing:
  - "상점가에서 경품 추첨 이벤트를 하고 있다. %YOU%은(는) 스즈카가 관심을 보이는 듯하자, 이전에 얻은 추첨권 한 장을 %SEX%에게 건넸다."
  - "스즈카는 작은 목소리로 고맙다고 인사한 뒤, 약간 흥분한 모습으로 앞으로 다가갔다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "사일런스 스즈카"
          - "「후후, 경품으로 당근을 많이 받았어요.」"
      - "스즈카는 싱글벙글 웃으며 손에 든 결과지를 %YOU%에게 보여주었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "사일런스 스즈카"
          - "「%CALLNAME%에게 조금 드리고, 스페쨩에게도 조금……」"
      - "스즈카의 기분이 아주 좋아 보인다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "사일런스 스즈카"
          - "「……으으, 참가상인 종이 티슈를 뽑아버렸어요……」"
      - "스즈카는 약간 실망한 표정으로 경품을 챙겼다."

o_s_ktv:
  - "%YOU%은(는) %CHARA%을(를) 데리고 노래방에 왔다."
  - "대충 몇 곡을 부른 뒤, %YOU%은(는) 쑥스러운 듯 마이크를 옆에서 미소 짓고 있던 스즈카에게 건넸다."
  - content:
      - fontWeight: bold
        content: %CHARA%
      - "「홀로 올려다 본 밤하늘, 그저 고요하기만 한 세계~」"
  - "%YOU%은(는) 어느새 노래에 푹 빠져버렸다."

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「좋은 영화였어요. 다음에도 같이 보러 오고 싶어요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「후훗…… %CALLNAME%이(가) 공포 영화를 고르실 줄이야. 귀신을 보고 놀라시던 표정도 재미있었어요.」"
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「제가 어떤 영화를 좋아하냐고요? 음…… %CALLNAME%이 좋아하는 거라면 저도 다 좋아요~」"

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「예전에 스페쨩이 데려와 준 적이 있어요. 스페쨩은 맛있는 가게를 찾는 데 정말 소질이 있는 것 같아요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「이 집 음식은 정말 맛있네요. 저도 모르게 과식해 버렸어요…… %CALLNAME%, 학원까지 천천히 걸어갈까요?」"
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「에? 왜 안 먹냐고요? %CALLNAME%을 보느라 넋을 잃고 있었거든요. 후후……」"

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「역시 조금 익숙하지 않은 걸까요……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%이 특별히 가고 싶은 곳이 있나요? 같이 가요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「다음에도 오늘처럼 같이 나와요.」"
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 제 손을 잡아주실 수 있나요? 이렇게…… 으음, 마음이 놓이네요……」"
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 부디 저와 계속 함께 걸어가 주세요. 앞으로도 계속 제 곁에 있어 주실 거죠?」"

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「다 좋아 보여서 결정하기 어렵네요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「전에는 필요한 걸 사려고만 왔었는데, 오늘처럼 느긋하게 둘러본 적은 처음이에요.」"

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「그 풍경, 절대로 내어줄 수 없어. 절대로.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「다음엔 반드시 더 빠르게, 이전의 나보다도 앞서서 달릴 거야. 그 풍경을 위해서, 그리고…… %CALLNAME%을 위해서……」"

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「기분이 이상해요…… %CALLNAME%, 제 얼굴 엄청 빨갛죠? 타오르는 것 같은 기분이에요……」"
  - random: true
    lines:
      - "스즈카는 %YOU%의 팔에 꼭 매달린 채 어깨 뒤로 얼굴을 숨겼다."

s_r_lunch:
  - "%YOU%과(와) %CHARA%은(는) 옥상에서 도시락을 바꿔 먹기로 했다."
  - "스즈카의 도시락을 받은 %YOU%은(는) 먹음직스러운 빛깔과 향에 눈길을 빼앗겨, 저도 모르게 계속 먹게 되었다."
  - "스즈카는 %YOU%의 도시락을 정성껏 음미하면서, 가끔씩 그 먹는 모습을 흐뭇하게 바라보았다."
  - "다 먹은 뒤, %YOU%은(는) 조금 멋쩍어하며 도시락통을 돌려주었다."

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%의 솜씨, 꽤 훌륭한걸요.」"
      - "스즈카는 %YOU%의 요리 실력을 크게 칭찬했다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「저를 넣는다니…… 저기, 저는 당근이 아니에요.」"
      - "스즈카는 자신의 초록색 귀마개와 오렌지색 긴 머리 조합이 당근 같다는 %YOU%의 농담에 항의했다."
  - if: era.get('love:2') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%와 함께 요리하니까 정말 따뜻하네요. 마치 부부가 된 것 같은 느낌이에요……」"

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 이 부분이 아직 잘 이해가 안 가요. 다시 한번 설명해 주실 수 있나요?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「그럼 계속 잘 부탁드릴게요.」"

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: "사일런스 스즈카"
          - "「네, 이번에도 무사히 승리를 쟁취할게요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: "사일런스 스즈카"
          - "「안심하세요. 승리를 %CALLNAME%에게 가져다 드릴게요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: "사일런스 스즈카"
          - "「가장 앞의 풍경…… 누구에게도 양보하지 않겠어.」"

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「으음, 어제 잠은 충분히 잤거든요. 낮잠 같은 건…… 네, %CALLNAME%이 정 그렇게 말씀하신다면 조금만 잘게요……」"
      - "권유에 못 이겨 누운 스즈카는 오 분도 지나지 않아 잠들었다."
      - "%YOU%은(는) 스즈카의 평온한 잠자리를 지켜보며, 자신의 옷을 %SEX%의 몸 위에 살포시 덮어주었다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「오늘은 조금 피곤하네요…… 점심시간에 쉬게 해 주셔서 고마워요.」"
      - "고맙다는 말을 마친 스즈카는 눈을 감았다."
      - "하지만 곧 %SEX%는 뺨을 붉게 물들인 채 눈을 떴다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「저기, %CALLNAME%도 쉬시는 게…… 아, 아니요. 보고 계셔서 부끄럽다는 뜻은……」"
  - if: era.get('love:2') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「역시 %CALLNAME% 곁에서 쉬는 게 더 편안하네요……」"
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 수고 많으셨어요. 같이 쉴까요? 제 무릎을 빌려드릴 수도 있어요.」"
  - if: era.get('love:2') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 한 번만 안아주실 수 있나요?」"
      - "두 팔을 뻗어 안아 달라는 스즈카를 거절할 마음은 들지 않았다. 한 걸음 다가가 살며시 %SEX%을(를) 안았다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「%CALLNAME%, 기분 좋아요…… 오늘도 함께 쉬어요.」"
      - "그렇게 %YOU%와 스즈카는 서로 맞닿은 채 낮잠 시간을 보냈다."

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「음, 조금 어렵네요…… 하지만 저와 %CALLNAME%이 힘을 합친다면 분명 할 수 있을 거예요……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「클리어했어요! %CALLNAME%은 정말 대단하시네요.」"
      - "스즈카의 진심 어린 칭찬에 %YOU%은(는) 오히려 쑥스러워졌다."

valentine:
  - "어느 날, %YOU%은(는) 자신의 책상에서 무언가를 적고 있었다. 그때 갑자기 트레이닝실 문을 두드리는 소리가 들렸다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%, 안에 계신가요?」"
  - "스즈카의 목소리였다."
  - "%YOU%은(는) 자리에서 일어나 스즈카를 위해 문을 열어주었다."
  - acc: 1
    content: "「스즈카, 무슨 일이야?」"
  - "스즈카는 두 손을 등 뒤로 숨긴 채, 어리둥절해하는 %YOU%의 모습을 보며 입가에 살짝 미소를 띄웠다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%, 해피 발렌타인이에요~」"
  - "이어서 스즈카는 등 뒤에서 도시락 통 하나를 꺼냈다."
  - "스즈카가 천천히 포장을 열자, 정성스럽게 만들어진 딸기 찹쌀떡 두 개가 %YOU%의 눈앞에 나타났다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%이 어떤 디저트를 좋아하실지 몰라서, 결국 제가 제일 좋아하는 딸기 찹쌀떡을 만들어 왔어요. 부디 입에 맞으셨으면 좋겠어요!」"
  - "%YOU%은(는) 한참 뒤에야 오늘이 발렌타인데이라는 사실을 깨달았다."
  - "멍하니 있는 얼굴을 보고 스즈카는 한층 더 기쁘게 웃었다. %SEX%은(는) 딸기 찹쌀떡을 기어이 %YOU%의 손에 쥐여주었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%, 여기서 바로 드셔보세요. 저도 제 요리 솜씨가 어땠는지 감상을 듣고 싶거든요.」"
  - "말을 마친 스즈카는 멋대로 의자를 끌어다 앉고는 고개를 살짝 기울인 채 %YOU%을(를) 바라보았다."
  - acc: 1
    content: "「그럼, 고마워 스즈카. 잘 먹을게.」"
  - "담당 %UMA%가 빤히 바라보는 가운데 먹으려니 마음이 편치 않았다. 그래서 시키는 대로 간식을 입에 넣었다."
  - "결국 스스로도 의식하지 못한 사이에 첫 번째 딸기 찹쌀떡을 순식간에 먹어 치웠다."
  - "%YOU%은(는) 무의식중에 두 번째 떡으로 손을 뻗으려다 멈칫했다."
  - "생각보다 자신의 담당은 달리기뿐만 아니라 디저트 만들기에도 상당한 실력을 갖추고 있었다."
  - "%YOU%은(는) 옆에서 턱을 괸 채 넋을 놓고 바라보는 스즈카를 한번, 그리고 남은 딸기 찹쌀떡을 한번 번갈아 본 뒤 결정했다——"
  - acc: 1
    content: "「스즈카도 직접 만든 거 맛 좀 볼래?」"
    lines:
      - "역시 디저트는 나눠 먹는 게 제맛이다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「에? 제 걱정은 안 하셔도 돼요. %CALLNAME% 드리려고 만든 거니까요.」"
      - "스즈카는 약간 당황하며 사양했다."
      - acc: 1
        content: "「자, 스즈카. 아~ 해봐.」"
      - "%YOU%은(는) 별다른 말 없이 딸기 찹쌀떡을 들어 천천히 스즈카의 입가로 가져갔다."
      - "피할 수 없다는 걸 깨닫자, 입을 살짝 벌려 내민 찹쌀떡을 한 입 베어 물었다."
      - acc: 1
        content: "「어때, 스즈카? 네 솜씨 정말 최고지?」"
      - "스즈카는 고개를 휙 돌리며 짐짓 모른 척했다."
      - "그 모습에 %YOU%은(는) 떡을 든 손을 요리조리 움직여 다시 스즈카의 눈앞에 갖다 대었다."
      - "그렇게 한동안 장난을 주고받다가, 결국 %SEX%에게도 하나를 통째로 먹였다."
  - acc: 2
    content: "「너무 맛있다. 하나 더 먹어야지.」"
    lines:
      - "스즈카의 디저트는 %YOU%을(를) 멈출 수 없게 만들었고, 결국 두 번째 딸기 찹쌀떡도 먹기로 했다."
      - "역시 첫 입부터 환상적인 맛이었다."
      - "결국 두 번째 떡도 오래 버티지 못하고 깔끔하게 %YOU%의 뱃속으로 사라졌다."
      - "두 개를 연달아 먹고도 아쉬움이 남은 %YOU%은(는) 무심코 옆에 있던 스즈카에게 시선을 던졌다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후후, %CALLNAME%이 드시는 모습도 참 귀엽네요.」"
      - "스즈카는 %YOU%의 시선을 눈치채고 미소 지으며 말했다."
      - "%YOU%은(는) 쑥스러운 듯 웃었다. 평소라면 이런 모습으로 먹진 않았을 텐데."
  - "%YOU%은(는) 도시락 통을 정리해 스즈카에게 돌려주었다."
  - acc: 1
    content: "「스즈카의 요리 실력이 이렇게 좋을 줄은 몰랐어. 정말 최고야.」"
  - "%YOU%은(는) 여전히 아쉬운 듯 스즈카를 바라보았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그렇게 배고픈 눈으로 보지 마세요. 저는 딸기 찹쌀떡이 아니에요.」"
  - "스즈카는 화난 척하며 볼을 빵빵하게 부풀렸다."
  - "「내 말은, 스즈카처럼 솜씨 좋은 사람이랑 같이 살게 될 사람은 정말 행복하겠다는 뜻이었어.」"
  - "%YOU%의 농담 섞인 말에 스즈카의 얼굴이 점점 더 붉어지는 것이 보였다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%, 그런 농담 하지 마세요! 자꾸 그러시면 저 정말 화낼 거예요!」"
  - "또 한 번 수줍어하는 얼굴을 볼 수 있었다. 그 대가로 %SEX%을(를) 달래는 데 한참이나 걸렸지만."

halloween:
  - "오늘은 할로윈, 요괴와 유령들의 축제다."
  - "트레이너실로 오는 길에 기묘한 차림을 여럿 보았다. 그중에는 하마터면 펄쩍 뛸 뻔한 것도 있었다."
  - "하지만 결국 %YOU%은(는) 무사히 트레이닝실에 도착해 다음 훈련 계획을 세우기 시작했다."
  - "계획을 세운다고는 하지만, 사실 %YOU%의 마음은 콩밭에 가 있었다."
  - "서랍 속에는 어느 %UMA%를 위해 준비한 고급 과자 봉지가 있었다. 이제 %SEX%이(가) 제 발로 찾아와 주기만 하면 된다……"
  - "갑자기 트레이닝실 문을 두드리는 소리가 들렸다. %YOU%은(는) 깜짝 놀라 펜을 떨어뜨릴 뻔했다."
  - "숨을 고르고 기대에 부풀어 앞으로 나아가, 힘차게 문을 열었다——"
  - acc: 1
    content: "「어서 와, 스즈……」"
  - "하지만 문 앞에 서 있는 것은 스즈카가 아니었다."
  - content:
      - fontWeight: bold
        content: %UMA%A
      - "「사탕 안 주면 장난칠 거야!」"
  - "무언가 괴물 분장을 한 귀여운 %UMA%이(가) 서 있었다."
  - "%YOU%은(는) 잠시 멍하니 있다가, 곧 정신을 차리고 미소를 지으며 서랍에서 미리 준비해둔 일반 사탕 몇 개를 꺼냈다."
  - "바구니에 꽤 많은 양을 넣어 주자, %SEX%은(는) 기쁜 듯 꾸벅 인사하고는 옆 트레이너의 방문을 두드리러 달려갔다."
  - "%YOU%은(는) 길게 한숨을 내쉬며 다시 자리로 돌아왔다."
  - "이윽고 다시 문 두드리는 소리가 났다."
  - content:
      - fontWeight: bold
        content: %UMA%B
      - "「사탕 안 주면 장난칠 거야!」"
  - "여전히 스즈카가 아니었다. %YOU%은(는) 사탕을 건네주며 내심 실망스러운 마음을 감출 수 없었다."
  - "핼러윈의 밤도 서서히 끝나 가고 있었다. 여러 %UMA%가 몇 번이나 방을 찾았지만, 가장 기다리던 상대만은 아직 오지 않았다."
  - "%YOU%은(는) 벽시계의 바늘이 어느덧 12시를 향해 가는 것을 보며 한숨을 쉬고는, 슬슬 짐을 챙겨 나가려 했다."
  - "바로 그때, 다시 한번 문 두드리는 소리가 들렸다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%, 안에 계신…… 으아, 그냥 이름을 부르면 안 됐는데……」"
  - "%YOU%은(는) 기쁜 마음에 서둘러 문을 열었다."
  - "문밖에는 마법사 분장을 한 스즈카가 서 있었다."
  - "스즈카의 안색이 붉게 상기되어 있고 숨이 약간 거친 것을 본 %YOU%은(는), 어쩔 수 없다는 듯 고개를 저었다."
  - acc: 1
    content: "「맞춰볼까? 스즈카, 너 또 뛰고 왔지?」"
  - "스즈카는 멈칫하더니 얼굴이 더 붉어졌다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%, 죄송해요. 곧장 달려오려고 했는데, 저도 모르게 너무 멀리까지 달려버려서……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아 맞다, 그게…… 사탕 안 주면 장난칠 거예요……?」"
  - "%CHARA%은(는) 그제야 원래 목적이 생각난 모양이다."
  - "%YOU%은(는) 헛웃음을 지으며 서랍을 열어, 아껴두었던 고급 사탕 주머니를 꺼내 스즈카에게 건네주었다."
  - "올해의 할로윈도 그렇게 묘한 분위기 속에서 지나갔다."

forbid_running:
  title: "달리기 금지예요!"
  lines:
    - acc: 1
      content: "「너무 늦었어! 이제는 봐줄 수 있는 시간이 아니라고!」"
    - "%YOU%은(는) 고개를 숙인 스즈카를 꽤 엄하게 꾸짖었다."
    - "벌써 한밤중이었다. 이마에는 아직 땀이 송골송골 맺혀 있었다. 누가 봐도 방금 달리기를 마치고 돌아온 얼굴이었다."
    - acc: 1
      content: "「편의점에 간다고 해 놓고 몇 시간이나 안 돌아온 게 누구야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「죄송해요…… 오늘 밤은 달이 너무 예뻐서…… 참을 수가 없었어요.」"
    - acc: 1
      content: "「안 돼. 큰 잘못이니까 용서 못 해. 사흘 동안 달리기 금지야. 집에서 제대로 반성해.」"
    - "스즈카는 벼락이라도 맞은 것처럼 그 자리에 힘없이 주저앉았다."
    - "곧 %SEX%은(는) 몸을 날려 %YOU%의 다리에 매달렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼요…… 그러면 살아갈 수가 없어요——」"
    - "슬퍼하는 스즈카를 아랑곳하지 않고, %SEX%이(가) 다리에 매달린 채로 한 걸음씩 침실로 향했다."
    - "스즈카는 얌전히 팔을 풀고 간단히 씻은 뒤 잠옷으로 갈아입었다. %YOU%이(가) 눕자 그 옆으로 파고들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기……」"
    - acc: 1
      content: "「안 돼.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아직 아무 말도 안 했는데요.」"
    - acc: 1
      content: "「안 되는 건 안 되는 거야, 스즈카. 정말 걱정돼서 그래.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……알겠어요. 얌전히 있을 테니까, %CALLNAME%, 화내지 마세요……」"
    - "자신이 잘못했다는 걸 아는 스즈카는 옆으로 돌아누워 %YOU%을(를) 껴안고 함께 잠들었다."
    - divider: true
      content: "다음 날"
      position: left
    - "집에 들어선 순간, %YOU%은(는) 펄쩍 놀랐다."
    - "눈앞에는 당근 함박스테이크가 산더미처럼 쌓여 있었다."
    - acc: 1
      content: "「스즈카? 이거 전부 네가 만든 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네. ……할 일이 없어서, 정신을 차려 보니 이렇게 많이 만들었네요.」"
    - divider: true
      content: "그다음 날"
      position: left
    - "스즈카가 휴대 전화를 품에 안고 반시계 방향으로 빙글빙글 걷고 있었다."
    - "화면에는 훈련장 사진이 떠 있었다."
    - acc: 1
      content: "「스즈카, 뭐 하는 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「훈련장 사진을 보면서 걸으면…… 달리는 기분이라도 낼 수 있을까 해서요.」"
    - "머리를 긁적였다. 이 상상력을 칭찬해 줘야 할지 말아야 할지 알 수 없었다."
    - divider: true
      content: "또 그다음 날"
      position: left
    - "집에 돌아와도 스즈카가 보이지 않았다."
    - "참지 못하고 달리러 나갔나 싶었지만, 침실에서 아직 잠들어 있는 스즈카를 발견했다."
    - acc: 1
      content: "「……하루 종일 잔 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자고 있으면 하루가 빨리 지나가니까요……」"
    - "대꾸할 말이 떠오르지 않았다."
    - divider: true
    - "사흘이 곧 끝나 가고 있었다. 침실 문간에서 시계 앞에 앉은 스즈카를 조금 의아하게 바라보았다."
    - acc: 1
      content: "「저기, 스즈카. 이 시간까지 안 자는 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앞으로 일 분 오십팔 초…… 일 분 오십칠 초……」"
    - "시곗바늘이 특정 시각을 가리킨 순간, 스즈카는 홱 돌아보았다. 눈은 흥분으로 빛났고, 몸은 슬그머니 현관 쪽으로 움직이고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사흘이 지났어요. ……조금만 달려도 될까요?」"
    - acc: 1
      content: "「……사흘 더 늘릴까?」"
    - "말이 끝나기가 무섭게 스즈카는 재빨리 현관에서 멀어졌다."
    - "그러고는 %SEX%이(가) 살며시 %YOU%을(를) 껴안았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%을(를) 위해서 사흘이나 참았어요. ……상, 주시면 안 될까요?」"
    - "품에 기댄 채 얼굴을 조금 붉히고 %YOU%을(를) 올려다보았다."
    - acc: 1
      key: sex
      content: "「알겠어. 잘 참은 건 칭찬해 줄게.」"
      lines:
        - "그런 뒤 %YOU%은(는) 스즈카를 안은 채 침실로 들어갔다."
    - acc: 2
      content: "「안 돼. 벌인데 상까지 바라면 안 되지.」"
      lines:
        - "그 말을 듣자 스즈카는 곧바로 품에서 빠져나갔다."
        - "그러더니 버둥거리는 %YOU%을(를) 들쳐 메고 침실로 사라졌다."
