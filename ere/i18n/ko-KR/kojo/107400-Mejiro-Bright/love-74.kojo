# @file メジロブライト - 恋慕
# @author KUN
# 49恋慕、ターン終了時
49:
  title: "우리 둘만의 코코아나무"
  lines:
    - "평범한 어느 휴일, %CHARA%는 갑작스럽게 아무런 할 일도 없던 %YOU%을(를) 메지로 가문의 별장으로 초대했다."
    - "두 사람이 처음 만났던 그날처럼, 그녀는 나무 그늘 아래에 조용히 앉아 기다리고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 갑작스럽게 찾아와 달라고 말씀드렸는데, 혹시 다른 일에 방해가 되진 않으셨나요～?」"
    - "여전히 느릿느릿한 목소리로 조금은 수줍게 물어오면서도, 손으로는 이미 자연스럽게 눈앞의 찻잔에 홍차를 채워주고 있었다."
    - "초대에 응해 찾아온 %YOU%에게 있어 %CHARA%의 질문은 그저 다정한 인사치레에 불과했다."
    - "자연스럽게 자리에 앉아 찻잔을 들고 한 모금 머금었을 때, 눈앞에 조금은 모양이 투박한 초콜릿 상자 하나가 나타났다."
    - acc: 1
      content: "「이건 뭐야?」"
    - "메지로 가문 정도 되는 곳에서 이런 투박한 초콜릿을 내놓을 리는 없었다."
    - "그렇다면 분명 다른 의미가 담겨 있는 것이리라."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네에～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이거, 제가 직접 만든 거랍니다～」"
    - "고개를 갸웃거리는 %YOU%을(를) 바라보며 %CHARA%는 자신도 모르게 싱긋 미소를 지었다."
    - "눈앞의 상자를 살며시 밀어 놓고는, 다음 행동을 조금 기대하는 눈빛으로 바라보았다."
    - "제멋대로 굳은 모양새의 초콜릿을 보며, %YOU%은(는) 호기심에 이끌려 한 조각을 집어 들었다."
    - "가볍게 한 입 베어 물고 나서야, 겉보기에 왜 이토록 투박했는지 그 이유를 깨달을 수 있었다."
    - acc: 1
      content: "「만들 때도 평소처럼 느긋하게 만들었지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정답이에요～ %CALLNAME%은(는) 이유를 알아맞히는 데 아주 능하시네요～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼…… %CALLNAME%, 이 초콜릿의 원재료가 무엇인지도 혹시 아시겠나요～?」"
    - "완성된 초콜릿만 보고 원재료를 유추하기란 조금 까다로운 일이었다."
    - acc: 1
      content: "「고급 상점에서 파는 초콜릿을 녹여서 만든 건가?」"
    - acc: 2
      content: "「어디서 카카오빈을 따로 공수해 온 거야?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후훗…… 둘 다 아니랍니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정답은 바로―― 이 별장에 있는 코코아나무예요～」"
    - "턱을 괴고 있던 양손을 내리더니, 이내 한쪽을 손가락으로 살포시 가리켰다――"
    -
    - "그곳에는 제법 연식이 느껴지는 코코아나무 한 그루가 서 있었으며, 마치 아주 오랜 세월 동안 이 별장을 지켜온 듯한 풍채를 풍기고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기, %CALLNAME%……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저, 당신과 함께 이곳에 새로운 코코아나무를 한 그루 더 심고 싶어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇게 하면 매년 열매가 맺힐 때마다, 오직 %CALLNAME%만을 위한 저희 둘만의 초콜릿을 만들어 드릴 수 있으니까요～」"
    - acc: 1
      key: update
      content: "「좋아, 같이 심자!」（관계 진전）"
      lines:
        - "%YOU%의 확답을 들은 %CHARA%의 얼굴에 피어난 미소가 한층 더 화사하게 만개했다."
        - "그리 오래 기다리지 않아, 별장의 관리인들이 창고에서 자그마한 코코아나무 묘목 한 그루를 찾아내어 가져왔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%～」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「자, 어서 우리 함께 심어보도록 해요～」"
        - "눈앞의 코코아나무 묘목을 바라보며, %YOU% 역시 소매를 걷어붙였다."
        -
        - divider: true
          position: left
          content: "열심히 심고 난 후……"
        -
        - "얼마나 부지런히 손을 움직였을까, 머리 위로 쏟아지는 따스한 햇살을 받으며 마침내 코코아나무를 온전히 심어내었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「다 됐어요～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「언젠가 이 나무가 자라나면, 우리 둘이서 나란히 그늘에 앉아 시원한 바람을 쐴 수 있겠죠?」"
        - "맑고 화사한 미소를 띤 채, 그녀는 %YOU%의 가슴팍에 몸을 살포시 기대어 왔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「제 말이 맞죠? %CALLNAME%～」"
    - acc: 2
      content: "「나중에 기회가 된다면……」（관계 진전 중지）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네에～ 알겠습니다아」"
        - "목소리에는 미약한 쓸쓸함이 묻어났지만, 얼굴에는 전혀 그런 기색을 드러내지 않았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저는 언제까지고 기다릴 수 있으니까요, 그날이 올 때까지 말이죠～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그도 그럴 게, 저는 워낙에 느긋한 성격이니까요～」"

# 74恋慕、ターン開始時
74:
  title: "자연스레 스며든 온기"
  lines:
    - "어느 날도 둘이 함께 보냈다."
    - "또 다른 날도 둘이 함께 보냈다."
    - "얼마나 많은 날이 지났는지 셀 수 없을 만큼, 두 사람은 여전히 함께 시간을 보냈다."
    - "처음에는 트레이닝 시간에만 함께 있었다."
    - "그러다 쉬는 시간에도 어느새 나란히 앉게 되었다."
    - "이제는 함께 있을 수 있는 때라면 언제든 %CHARA%가 %YOU% 곁에 나타났다."
    - "약속도 계약도 없이, 그저 자연스럽게 함께 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후아아~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 슬슬 트레이너님의 휴식 시간이네요~」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「……뭐?」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「오늘도 가는 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네~」"
    - "미묘한 표정을 짓는 %D_NAME%와 달리, %CHARA%의 얼굴에는 약간의 의아함만 떠올랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%과(와) 함께 느긋~하게요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아주 자연스러운 일이랍니다~」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「자연스럽다니……그게 무슨 뜻인지 알고는 있어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 밖에 어떤 뜻이 있나요?」"
    - "교실에 앉아 있던 %CHARA%는 동생을 바라보며, 조금 멍한 표정으로 고개를 갸웃했다."
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「정말, 너는……」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「마치, 마치……」"
    - "조금 강하게 말하던 %D_NAME%는 얼굴을 붉히며, 나머지 말을 꺼낼지 망설였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「도베르?」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「……연인 같잖아.」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「여, 연인이요?」"
    - "뜻밖의 대답을 듣고 %CHARA%도 멍해졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（연인……?）"
    - "곧 %CHARA%는 얼굴에 옅은 홍조를 띠고 자리에서 일어났다."
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「저기, 잠깐? 브라이트?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……%CALLNAME%께 가 봐야겠어요.」"
    - "나긋하던 말투에 조금 힘이 실렸다. 자리에서 일어나자마자 망설임 없이 문밖으로 나갔다."
    -
    - "여느 날과 다름없이, 자연스럽게 문을 열고 들어와 자연스럽게 %YOU%의 곁에 자리를 잡았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - "지금의 %CHARA%는 뺨에 여전히 옅은 홍조를 띠고 있었으나, 행동만큼은 평소와 완전히 똑같았다."
    - "살포시 %YOU%의 팔을 껴안으며, 들뜨기 시작하던 마음의 동요를 가만히 가라앉혔다."
    - "연모라는 감정은 그저 마음 깊은 곳에 남모르게, 살그머니 묻어두기로 했다."
    - "느긋하게, 아주 느긋하게, 마침내 다가올 그날을 기다리면서 말이다."

# 89恋慕、一緒に小憩で発火
89:
  title: "자각 없이 빠져든 깊은 사랑"
  lines:
    - "잠시 업무를 내려놓고, 누적된 피로를 풀기 위해 %YOU%과(와) %CHARA%는 함께 휴식을 취하기로 했다."
    - "집무실 안의 온도가 쾌적하게 유지되어 있었기에, 두 사람은 금세 기분 좋은 낮잠 속으로 빠져들었다."
    - "평소처럼 시간의 흐름도 잊은 채, 느긋하게 흐르는 평화로운 한때를 만끽했다."
    - "하지만 오늘은 무언가 평소와 달랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아암～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라, %CALLNAME%은(는) 아직 안 깨어나셨나요?」"
    - "아직 잠 기운이 가시지 않은 %CHARA%는, %YOU%의 몸을 품에 살포시 끌어안았다."
    - "이내 눈을 다시 지긋이 감으며, 전신으로 느껴지는 익숙한 향기에 깊이 가라앉았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%의 냄새……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말로 안심이 되는 향기예요～」"
    - "밀착한 상태에서, 말랑말랑한 뺨을 %YOU%의 머리칼에 대고 부드럽게 몇 번 문지르기까지 했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「푹신푹신해요～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후후훗～」"
    - "두 팔에 점차 무의식적인 힘이 들어가며, 마치 상대를 자신의 몸 안으로 완전히 녹여내기라도 할 듯이 꼭 껴안았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%…… 하아.」"
    - "당초 생각했던 것처럼 %YOU%이(가) 깨어날 때까지 함께 잠들지 못하고, 그녀 홀로 먼저 눈을 뜨고 말았다."
    - "무의식적으로 힘을 주었던 손을 천천히 풀며, 밀착해 있던 몸을 아쉽다는 듯 떼어냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라라, 저 지금……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「몸이 화끈화끈해서……」"
    - "다소 멍한 얼굴을 한 채, 여전히 깊은 잠에 빠져 있는 %YOU%의 곁에서 스르륵 일어났다."
    - "손가락을 자신의 목덜미에 갖다 대더니, 이내 아래쪽을 향해 천천히 쓸어내렸다."
    - "짙은 청색의 교복을 지나, 나비매듭 리본을 거쳐, 치맛자락을 넘어가며……"
    - "마침내 새하얀 옷감에 손길이 닿았을 때야, 비로소 육체에 찾아온 변화의 원인을 깨닫게 되었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어째서일까요?」"
    - "고개를 살짝 기울인 %CHARA%는, 조금 축축하게 젖어든 자신의 손가락 끝을 멍하니 바라보았다."
    - "점차 열을 더해가는 신체의 고조가 운동 직후의 노곤했던 잠 기운을 서서히 밀어내고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 느낌……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어쩐지……」"
    - "달아오른 허리가 미세하게 움직이기 시작하며, %YOU%의 곁으로 점차 가까이 다가갔다……"
    - "눈동자 속에 %YOU%의 무방비하게 잠든 모습이 비치자, 자신도 모르게 허벅지를 서로 맞비비는 움직임이 빨라졌다."
    - "의자 뒷설비 쪽으로 소리 없이 접근한 그녀의 손가락이 하스스하게 하반신을 향해 뻗어 나갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어째서…… 이렇게나 기분이 좋은 걸까요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「느낌이, 갈 것만 같아……」"
    - "고요하기만 하던 방 안에 이윽고 은밀하고 기묘한 소리가 낮게 울려 퍼졌다."
    - "자신의 몸에 일어난 해프닝을 마주하자, 평소 좀처럼 당황하지 않던 느긋한 성격의 %CHARA%조차 이 순간만큼은 몹시 허둥대며 뒷수습을 서둘렀다."
    - "어떻게든 정리를 마쳤을 때는 평소라면 잠에서 깨어날 시간이 되어 있었다."
    - acc: 1
      content: "「아, 브라이트?」"
    - "눈앞에 마주한 %CHARA%의 얼굴에 아직 가시지 않은 붉은 홍조가 남아 있는 것을 보고도, 막 잠에서 깬 %YOU%은(는) 그저 방금 잠에서 깨어나 얼굴이 달아오른 것이라 여기며 대수롭지 않게 넘겼다."
    -
    - "이윽고 하교 시간이 되어, %CHARA%와 %YOU%은(는) 학원 정문 앞에서 작별 인사를 나누었다."
    - "노곤함 탓에 아무런 낌새도 눈치채지 못한 %YOU%이(가) 가볍게 손을 흔들어 보인 뒤 하품을 하며 멀어져 갔다."
    - "멀어지는 %YOU%의 뒷모습을 바라보며, %CHARA%는 방금 전 자신이 저질렀던 대담한 행동을 다시금 머릿속에 떠올렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%！」
    - "평소라면 상상도 못 할 정도로 급작스럽게, 평소 느긋느긋인 %CHARA%가 황급히 달려와 %YOU%의 허리를 뒤에서 꽉 끌어안았다."
    - acc: 1
      content: "「무, 무슨 일이야, 브라이트?」"
    - "몸짓은 다급했으나, 마음속에 든 응어리를 차마 곧바로 입 밖으로 꺼내지는 못했다."
    - "붉은 노을빛이 두 사람의 머리 위로 완전히 쏟아져 내릴 때가 되어서야 %CHARA%는 천천히 입을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저희, 앞으로도 계속 함께 있어 주실 거죠……?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「함께 그 코코아나무 아래에서, 나란히 앉아 바람을 쐬면서요……」"
    - acc: 1
      content: "「……그건 이미 약속했잖아.」"
    - acc: 2
      content: "「……그야 당연한 소릴 하고 그래.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아…… 그렇군요～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고맙습니다, %CALLNAME%～」"
    - "단단히 동여매고 있던 양손의 힘이 서서히 풀리며, 허리를 놓아주었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러고 보니, 내일은 %CALLNAME%도 저도 마침 휴일이었죠～?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……모처럼 얻은 기회인데, 저희의 코코아나무가 잘 자라고 있는지 보러 가지 않으실래요?」"
    - acc: 1
      key: update
      content: "「좋아.」（관계 진전）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네에에～～」"
        - "얼굴 가득 기쁨을 띤 %CHARA%는 %YOU%의 손을 꼭 쥐고는, 이내 전화를 걸어 가문 전용 차를 호출했다."
        - "다만, 이윽고 도착한 차량이 향하는 방향이 조금 이상한 듯했는데……"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「코코아나무를 보러 가기 전에……」"
        - "뒷좌석에 함께 나란히 앉은 %CHARA%가 %YOU%의 귓가로 은밀하게 몸을 밀착해 왔다."
        - "그리고 소리도 없이, 귓볼을 살포시 깨물었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%께…… 먼저 보여드리고 싶은 다른 것이 있답니다아」"
        # 馬跳び
    - acc: 2
      content: "「오늘은 좀 피곤하네……」（관계 진전 중지）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그렇다면 어쩔 수 없겠네요……」"
        - "붉게 물든 얼굴 위로 아주 약간의 아쉬움이 스쳐 지나갔으나, 이내 부드러운 미소로 갈음했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내일, 꼭 같이 보러 가기로 해요, %CALLNAME%～」"

89_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「죄송해요, %CALLNAME%……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「오늘은 제가 조금 충동적이었던 것 같아요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그렇지만, %CALLNAME%도 기분 아주 좋으셨죠? 후훗～」"

99_1:
  title: "그 누구라 할 것 없이, 이미 깊이 빠져든 우리"
  lines:
    # 99恋慕、ターン終了
    - color: %COLOR%
      content: "휴일을 맞이한 %CHARA%는 자신의 방안에 멍하니 앉아 창문 너머로 펼쳐진 밤하늘을 올려다보고 있었다."
    - color: %COLOR%
      content: "소녀 감성이 물씬 풍기는 아기자기한 방 안에는 짝을 이룬 인형들이 가득 진열되어 있었다."
    - color: %COLOR%
      content: "언제부터였을까, 방 안에 무질서하게 놓여 있던 인형들에게 어느샌가 저마다의 반려가 생겨나 있었다."
    - color: %COLOR%
      content: "자그마한 인형들의 옆자리에는 예외 없이 또 다른 인형 하나가 다정하게 세트를 이루어 앉아 있었다."
    - color: %COLOR%
      content: "허나 지금 이 순간, 이 방 안에서 오롯이 홀로 남아 외로움을 곱씹는 존재는 오직 %CHARA% 자신뿐이었다……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%께서 여기에 계셔 주신다면……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「만약 %CALLNAME%께서 곁에 계셔 주신다면 참 좋았을 텐데 말이죠……」"
    - color: %COLOR%
      content: "그녀가 가장 아끼는 인형 두 개를 품에 꼭 안은 채, 침대 밑으로 채 닿지 않는 가느다란 다리를 앞뒤로 살랑살랑 흔들었다."
    - color: %COLOR%
      content: "상체를 가볍게 들썩이며 자신의 옆자리를 바라보았다―― 누군가를 위해 비워둔 또 하나의 빈 공간을."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content: "허리를 서서히 숙이며 품 안의 인형을 더욱 세게 끌어안아 자신의 얼굴을 절반쯤 파묻었다."
    - color: %COLOR%
      content: "애달픈 눈동자 속에 비친 방 안의 풍경에는, 어느덧 %YOU%의 환영이 짙게 일렁이고 있었다."
    - if: era.get('cflag:0:0') === 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「보고 싶어요…… 저의 다정하고 소중한, 서방님……」"
    - if: era.get('cflag:0:0') !== 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「보고 싶어요…… 제 사랑, 트레이너 님……」"

# 99恋慕、【あなたも私も、もう抜けられない】の次ターン
99_2:
  title: "당신은 나의 빛"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제 사랑～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「드디어 다시 만났네요～」"
    - "집무실에서 다시 대면하자마자, %CHARA%는 주위 사람들에게 큰 오해를 사기 딱 좋은 달콤한 호칭을 부르며 %YOU%의 품 안으로 와락 날아들었다. 이내 둥글고 부드러운 뺨을 가슴팍에 연신 비벼대기 시작했다."
    - "마치 주인을 만난 귀여운 대형견처럼, 그녀는 그 자리에 고개를 파묻은 채 꼼짝도 하지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흠～～ 흠흠～～」"
    - "%YOU%을(를) 품에 꼭 안은 체, %CHARA%는 기분 좋은 듯 콧노래를 나직하게 흥얼거렸다."
    - acc: 1
      content: "「저기, %CHARA_FULL%?」"
    - "갑작스러운 포옹에 몸에 슬슬 땀이 배기 시작한 %YOU%은(는) 다소 난감한 어조로 그녀의 본명을 소리 내어 불렀다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앗, 어라라?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아……」"
    - "그제야 정신이 든 듯 %CHARA%는 마지못해 감싸 쥐었던 두 팔을 거두었다."
    - "부끄러움으로 뺨을 붉게 물들인 채 뒤로 두어 걸음 물러서며, %YOU%과(와)의 거리를 슬그머니 벌렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「대단히 죄송해요, %CALLNAME%……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「겨우 며칠 만나지 못했을 뿐인데, 제 마음이 생각보다 훨씬 더 당신을 갈구하고 있었나 봐요～」"
    - "%YOU%의 앞에서 좀처럼 보기 드물게 귀를 한껏 눕힌 채, %CHARA%는 부끄러운지 손가락으로 뺨을 긁적였다."
    - "애써 말을 아끼는 본인의 태도와는 다르게, 등 뒤의 꼬리는 숨길 수 없는 흥분으로 격렬하게 살랑거리고 있었다."
    - "아마도 코끝을 스치는 익숙한 체취 때문인지, %CHARA%는 내심 몹시 수줍어하는 기색을 띠었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그치만, 저는 정말로 %CALLNAME%의 향기가 너무나도 좋은 걸요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말로 죄송합니다……」"
    - "사과를 마친 그녀는 얌전하게 뒤로 한 걸음 더 물러났다."
    - "평소의 마이페이스와는 사뭇 다른 %CHARA%의 기묘한 태도를 보며, %YOU% 역시 가만히 의구심을 품기 시작했다."
    - acc: 1
      key: sex
      content: "「제 사랑?」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네에, 맞답니다～」"
        - "%YOU%의 의문 섞인 부름에도 %CHARA%의 얼굴에는 한 줄기의 당혹감이나 수줍음조차 찾아볼 수 없었으며, 오로지 온화한 미소만이 굳건히 자리하고 있었다."
        - "상체를 앞으로 살짝 기울이자, 앞쪽으로 길게 늘어뜨린 땋은 머리카락이 은은한 샴푸 향기를 풍기며 %YOU%의 콧날을 간지럽히듯 스쳐 지나갔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어라, 혹시 %CALLNAME%은(는) 그렇게 불리는 게 마음에 드셨나요?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우후훗, 원하신다면 앞으로도 쭉 그렇게 불러드릴 수도 있답니다～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아니면…… %CALLNAME%은(는) 이보다 더어욱 깊고 내밀한 호칭을 원하시는 걸까요?」"
        - "묘한 상상력을 자극하는 유혹적인 대사를 나직하게 속삭이며, 그녀는 몸을 이끌고 %YOU%의 가슴팍에 천천히 기대어 왔다."
        - "옷자락을 가볍게 붙잡은 양손의 손가락이 피부 위를 기분 좋게 톡톡 두드리며 유연하게 움직였다."
        - "초점이 다소 풀린 듯한 나른한 눈빛으로 %YOU%을(를) 응시하던 그녀의 시선이 이내 몽롱하게 흐려지기 시작했다."
        - acc: 1
          content: "「브라이트가 부르는 거라면 난 상관없어.」"
        - "눈동자에 서린 열망의 빛이 한층 더 짙어지기 직전, %CHARA%는 지긋이 눈을 감았다."
        - "이윽고 %YOU%의 품에서 스르륵 물러나며 몸을 정돈하고 다시 올바르게 섰다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그 코코아나무가 있는 곳으로 함께 가보지 않으실래요?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우리 두 사람의 일생을 평생토록 증명해 줄, 소중한 징표를 향해서 말이죠……」"
    - acc: 2
      content: "「향기?」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아아～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「향기 말씀이시군요?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우후훗～ %CALLNAME%은(는) 참 엉뚱하기도 하시지이～」"
        - "%YOU%의 눈앞에 서 있던 %CHARA%는 망설임 없이 앞으로 한 걸음 내딛더니, 이내 허리에 두 팔을 감싸 안고 재차 포옹을 걸어왔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「좋아하는 것에는 이유가 없는 법이니까요～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「소중한 %CALLNAME%에게선, 도저히 헤어날 수 없을 만큼 매혹적인 냄새가 난답니다.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「으음～～」"
        - "조금 전까지의 잠이 덜 깬 듯 어설펐던 모습과는 달리, 지금의 %CHARA%는 완전히 또렷한 의식을 지닌 채 단단히 안아 오고 있었다."
        - "밀쳐내려 해도 %CHARA%의 우마무스메다운 힘 앞에서는 저항이 전혀 통하지 않았다."
        - acc: 1
          content: "「브라이트, 너 지금 좀 이상해……」"
        - "나름대로 단어를 신중하게 고른 %YOU%이(가) 완곡한 표현을 빌려 제지하려 했으나, %CHARA%는 아랑곳하지 않고 요지부동으로 품에 꼭 안겨 있었다."
        - "한술 더 떠서, 그녀는 포옹한 팔에 더욱 억센 악력을 주어 신체를 완전히 구속해 왔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「전혀 이상하지 않답니다～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「듣기로는, 부부 사이가 되면 서로의 살 내음에 서어서히 중독된다고 하더라고요……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「앗, 그러고 보니!」"
        - "무언가 깨달았다는 듯 맑은 얼굴을 치켜든 %CHARA%는, 고개를 들어 %YOU%의 당혹스러운 표정을 똑바로 올려다보았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이제는 %CALLNAME%이라고 부르면 안 되겠는걸요……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「제 사랑～」"
        - "다정한 부부간의 호칭을 서슴없이 입에 담으며, %CHARA%는 %YOU%의 허리를 손가락으로 가볍게 쿡 찔렀다."
        - "긴장이 풀려 %YOU%의 허리에 힘이 스르륵 빠진 틈을 타, 그녀는 우마무스메의 힘으로 손쉽게 상대를 앞으로 밀어 정면으로 눕혀버렸다."
        - "바닥에 그대로 쓰러진 연인의 모습을 위에서 내려다보는 %CHARA%의 깊은 눈동자 속에, 어두운 소유욕의 음영이 짙게 내려앉았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「며칠 동안 당신과 얼굴을 마주하지 못했더니, 무언가 소중한 것이 결핍된 기분이 들었거든요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아마도 원인은 바로 이 살 내음이었던 것 같아요～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그도 그럴 게, 제가 비록 레이스에서 초반 스타트 대시 같은 건 통 소질이 없지만 말이죠……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「확실한 스퍼트 타이밍을 포착해 내는 법만큼은, 당신이 제게 아주 훌륭하게 가르쳐 주셨으니까요～」"
        - "탈의 된 짙은 청색의 교복 상의가 바닥으로 스르륵 흘러내리며, 가문의 자매들에게 결코 뒤처지지 않는 풍만하고 아름다운 실루엣이 가감 없이 드러났다."
        - "그녀의 손가락이 포옹으로 인해 이미 엉망으로 흐트러져 있던 %YOU%의 옷가지를 부드럽게 들추어내며, 숨겨져 있던 맨살을 공기 중에 노출시켰다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기, 당신……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이제, 시작해도 되겠죠?」"

99_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「역시, %CALLNAME%이(가) 없으면…… 당신이 곁에 없으면, 전 더 이상 버틸 수 없나 봐요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「언제부터인가 머릿속이 온통 당신에 대한 생각으로 가득 차버려서 말이죠……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「앞으로는…… 그 어디를 가시든 저를 꼭 곁에 데리고 다녀주셔야 해요～」"

# week_end
# 愛欲以上、ドーベルときめき、5月1週、男T
small_party:
  title: "작은 모임"
  lines:
    - "트레이닝 계획이 없던 어느 날, 할 일 없던 %YOU%은(는) 거리에서 평화롭게 산책을 하고 있었다."
    - "업무가 없는 평온한 시간, 원래는 기분 좋게 기분 전환을 하던 참이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, %CALLNAME%이네요～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%～ 홍차라도 한잔하러 오시지 않겠어요～」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「잠깐, 브라이트!?」"
    - "말랑말랑한 목소리에 %YOU%의 주의가 쏠렸고, 뒤를 돌아보는 순간 달려온 %CHARA%에게 팔을 붙잡혔다."
    - "마찬가지로 트레이닝 계획이 없던 두 사람이 마침 이곳에 있었던 모양이다."
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「으으…… 브라이트, 나 이런 거 별로 안 좋아하는 거 빤히 알면서……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「담당 우마무스메는 트레이너 님과 사이좋게 지내야 하니까요～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「도베르? 당신은 이쪽으로 안 오시나요?」"
    - "%YOU%의 팔에 매달린 채, %CHARA%는 아직 제자리에 팔짱을 끼고 서 있는 %D_NAME%를 돌아보며 말했다."
    - "금빛 눈동자로 한참 동안 노려보던 %D_NAME%는 그제야 기가 꺾인 듯 %YOU%을(를) 향해 걸어왔다."
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「너, 똑똑히 들어둬, 난 브라이트 때문에 온 거니까!」"
    - acc: 1
      content: "「어? 아, 어……」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「정말이지……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자자～ 도베르도 조금 더 솔직해져 보세요～」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「내가 뭘 솔직해지라는 거야!?」"
    - "얼굴에는 귀찮은 기색이 가득했지만, 그렇다고 자리를 뜰 생각은 없어 보였다."
    - "%YOU%과(와) 세 걸음 정도 거리를 둔 채, %D_NAME%는 %CHARA%와 가볍게 투닥거렸다."
    - acc: 1
      content: "「두 사람, 일단 진정하고……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME% 말씀이 맞아요～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 다른 일정이 없으시다면…… 티타임을 가질까요?」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「브라이트…… 넌 정말 다과회를 좋아하는구나.」"
    - "조금도 숨김없는 태도로 %CHARA%는 %YOU%을(를) 이끌고 맞은편으로 향했다."
    - "%D_NAME%의 불만 섞인 시선을 고스란히 흘려보내며, 두 사람은 테이블 한쪽에 나란히 자리를 잡고 앉았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 여기요～」"
    - "테이블 위에 놓여 있던 세 번째 홍차 잔을 %YOU%의 앞으로 살포시 밀어주며, 그녀는 가볍게 미소 지었다."
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「처음부터 한 잔 더 시켰던 게 이것 때문이었어?」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「브라이트 너란 애는 정말……」"
    - acc: 1
      content: "「한 잔 더 있었다고?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜냐하면, %CALLNAME%께서 분명히 오실 것 같았거든요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「미리 준비해 두지 않으면 조금 실례니까요～」"
    - "테이블 위의 찻잔을 바라보며 %YOU%은(는) 잠시 의아해했으나, 이내 잡생각을 접어두었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 오늘은 마침 휴일이시죠?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후훗…… 당신도 이렇게 한가로이 산책하는 걸 좋아하시는군요～」"
    - acc: 1
      content: "「왠지 이런 면은 브라이트 너랑 닮은 것 같네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우후훗, 당신 말씀이 맞을지도 모르겠네요～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「너희 둘…… 언제부터 그렇게 사이가 좋았던 거야?」"
    - "%YOU%과(와) %CHARA%가 같은 쪽에 앉아 도란도란 이야기를 나누는 모습을 보며, %D_NAME%의 얼굴에 약간의 불쾌감이 서렸다."
    - "턱을 괸 채, 조금 토라진 표정으로 볼을 부풀리며 눈앞의 두 사람을 쏘아보았다."
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「아무리 사이가 좋다고 해도…… 이건 좀 아니지 않아?」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「트레이너랑 우마무스메가 이렇게까지 밀착하다니……」"
    - "나직하게 투덜거리는 소리였지만, %CHARA%는 귀를 부드럽게 쫑긋 세웠다."
    - "그러고는 말랑말랑한 두 손으로 %YOU%의 팔을 꼬옥 껴안으며 어깨에 머리를 기대어 왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그치만 보세요, %CALLNAME%도 싫어하지 않으시잖아요?」"
    - acc: 1
      content: "「아, 으응…… 그렇네.」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「큭……」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「난 절대 저렇게 안 할 거야, 흥!」"
    - "%YOU%과(와) %CHARA%를 바라보던 시선을 흭 돌려버리며, 고개를 돌려 단단히 삐친 척을 했다."
    - "하지만 자세히 살펴보면, %D_NAME%가 실눈을 뜨고 슬며시 훔쳐보고 있는 것이 고스란히 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……음후훗～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「도베르, 홍차 엎질러지겠어요～」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「앗!」"
    - "%CHARA%의 한마디에 깜짝 놀란 그녀는 허둥지둥 테이블 위를 살폈다."
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「어, 어디가 엎질러졌다는 거야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「보세요, 찰랑거려서 위험했잖아요～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그나저나 도베르, 방금은 무얼 그렇게 열심히 보고 계셨나요?」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「무, 무슨 소리야, 난 아무것도 안 봤어……」"
    - "애써 변명하려 했지만, %CHARA%가 듣기에는 이미 무슨 뜻인지 빤히 보이는 모양이었다."
    - "당당하던 목소리는 기어들어 가듯 작아졌고, 결국 그녀는 제자리에 몸을 웅크렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「도베르도 곁에 오고 싶어서 보고 있었던 거죠?」"
    - acc: 1
      content: "（분위기가 묘한데……）"
    - "두 사람의 시선에 사로잡혀 버린 %D_NAME%는 안절부절못하며 몸을 들썩였다."
    - "주저하는 눈빛으로 두 사람을 번갈아 바라보더니, 이내 자포자기한 듯이 입을 열었다."
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「아아, 정말……!」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「알았어, 나도 친하게 지내고 싶어서 그랬다, 됐지!」"
    - acc: 1
      content: "「도, 도베르!?」"
    - "갑작스럽게 터져 나온 목소리에 생각에 잠겨 있던 %YOU%은(는) 깜짝 놀라 상체를 뒤로 젖혔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우후훗～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「실은 말이죠, %CALLNAME%께서 오시기 전부터……」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「브라이트! 말하지 마!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……도베르가 저한테, %CALLNAME%과(와) 사이좋게 지내고 싶다고 계속 이야기했답니다～」"
    - acc: 1
      content: "「응?」"
    - color: %D_COLOR%
      content:
        - fontWeight: bold
          content: %D_NAME%
        - "「으으……」"
    - "곁에 앉은 %D_NAME%는 모자챙을 푹 눌러쓰며 빨갛게 익어버린 얼굴을 감추었다."
    - "%CHARA%의 가볍고 나긋나긋한 주도하에, 조금은 묘하면서도 따스한 다과회가 지나가고 있었다."
    # 好感+50、ドーベル好感+50

# office_rest
# 良縁以上
all_along:
  title: "당신의 숨결은 언제나 내 곁에"
  lines:
    - "한낮의 뜨거운 태양을 피해, 두 사람은 함께 집무실에 머물고 있었다."
    - "정적만이 감도는 방 안에는 이따금 울리는 키보드 소리와 사각거리는 필기구 소리만이 섞여 들며, 마치 자장가와 같은 선율을 만들어내고 있었다."
    - "소파에 앉아 있던 %CHARA%는 서서히 눈꺼풀이 무거워지는지, 고개를 꾸벅거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음…… 너무 졸려요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「쿨～」"
    - "조용하던 방 안에 %CHARA%의 나른한 숨소리가 기분 좋게 더해졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음…… 음냐……?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말로 좋은 향기가 나요……」"
    - "나직하게 잠꼬대를 중얼거리는 소리가 방 안에 유독 또렷하게 울려 퍼지며 업무에 열중하던 %YOU%의 손길을 멈추게 했다."
    - "곁에서 잠든 %CHARA%를 살며시 바라보고는 %SEX%처럼 코를 킁킁거렸다."
    - acc: 1
      content: "「참나, 무슨 냄새가 난다는 건지……」"
    - acc: 2
      content: "「방 어디에서 냄새가 난다는 거지……」"
    - "일을 갑자기 중단하자 피로가 %YOU%의 어깨 위로 밀려왔다."
    - "이왕 피곤해진 김에 조금 쉬자."
    - "그렇게 생각한 %YOU%은(는) 자리에서 일어나 소파 한쪽에 앉아 몸을 기댔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후~아아~」"
    - "곁에 누가 앉은 것을 느낀 걸까. 잠들어 있던 %CHARA%는 그래도 옆으로 조금 몸을 붙였다."
    - "에어컨 바람이 방 안으로 퍼져 %YOU%의 어깨에 밴 열기를 식혔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후아아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음……?」"
    - "냄새를 따라 %CHARA%는 다시 조금 옆으로 다가왔다."
    - "작고 동그란 얼굴이 %YOU%의 팔을 문지르고, 귀가 허리에 살짝 닿았다."
    - "서늘하던 방 안에 묘한 열기가 피어올랐다."
    - "옆에서 전해지는 묘한 열기 때문에 %YOU%도 금방 잠들 수 없었다."
    - acc: 1
      content: "「다른 자리로 옮겨서 쉬어야겠네……」"
      lines:
        - "%CHARA%의 얼굴가에서 조심스럽게 팔을 빼낸 뒤, 다시 책상 앞 의자로 돌아와 앉았다."
        - "소파만큼 편안하지는 않았지만 등받이를 뒤로 젖히니 그런대로 쉴 만했다."
        - "그나저나 방금 전에는 왜 그렇게 갑자기 몸이 달아올랐던 것일까."
    - acc: 2
      content: "「조금 더운 정도야 괜찮겠지.」"
      lines:
        - "조금 더운 정도는 괜찮다. 에어컨도 있으니까."
        - "그렇게 생각하며 %YOU%은(는) 소파에 누운 채 피곤한 눈을 감고 잠깐 쉴 생각이었다."
        - "원래라면 이 낮잠은 오후까지 이어지다 알람이나 누군가 깨우는 소리에 끝났을 것이다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - "「으, 으음.」"
        - "체감 온도가 계속 올라가자, 아무리 참을성 많은 %YOU%라도 눈을 뜨지 않을 수 없었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아……안녕하셔요, %CALLNAME%❤️」"
        - "잠이 덜 깬 듯한 %CHARA%가 %YOU%의 허벅지에 엎드린 채 고개를 들어 올려다보고 있었다."
        - "비몽사몽한 와중에도 몸은 확실히 반응하고 있었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, %CALLNAME%……이렇게 해 드리는 걸 좋아하시나요?」"
        - "%YOU%이(가) 바라보는 앞에서 %CHARA%는 천천히 입을 벌려 지퍼를 물고 아래로 내렸다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%의 열기……후후~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저는 이 냄새가 좋아요❤️」"
        - "얇은 천이 젖혀지고 맨살이 드러났다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「자, %CALLNAME%~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우리에게는 시간이 아주 많답니다~」"
        - acc: 1
          key: sex
          content: "（%SEX%를 눌러 제압한다!）"
        - acc: 2
          content: "（%SEX%가 계속하게 둔다）"

all_along_sex:
  - "모든 상황이 끝났을 때에는 이미 낮잠 시간이 훌쩍 지나간 뒤였다."
  - "%CHARA%는 조심스러운 손길로 몸에 묻은 흔적들을 닦아내며, 얼굴에는 평온한 미소를 띠고 있었다."

# out_station
# 良縁以上、パーマー熱恋、非処女、ウマ娘
miss_tram:
  title: "지나쳐 버린 전차"
  lines:
    - "휴일 오후, %CHARA%로부터 한 통의 전화가 걸려 왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, %CALLNAME%, 오늘 이렇게 번거롭게 해 드려서 정말 죄송해요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전차를 타고 놀러 가려던 참이었는데, 역을 지나쳐 버린 모양이라서어……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 저를 좀 도와주실 수 있으신가요?」"
    - "거의 고민할 필요도 없이, 곧바로 역을 향해 출발했다."
    - "서둘러 승강장에 도착한 뒤, 스마트폰을 열어 %CHARA%가 보내온 노선을 확인하기 시작했다."
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「어디 보자…… 이쪽인가?」"
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「어라? %CALLNAME_64%! 너도 여기 있었구나!」"
    - "%CHARA%가 보낸 메시지 때문인지, 아니면 마침 %P_NAME%도 전차를 타고 외출하려던 참이었는지 이곳에서 마주치게 되었다."
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「설마 브라이트가 %CALLNAME_64%한테도 연락한 거야?」"
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「그렇구나……」"
    - "%YOU%을(를) 바라보며 잠시 생각에 잠겼던 %P_NAME%는 가볍게 고개를 끄덕이더니, 스마트폰을 켜서 %CHARA%가 있는 역을 함께 찾기 시작했다."
    - "두 사람의 노력 끝에 겨우 전차 노선을 확인했고, 망설임 없이 함께 전차에 올라타 %CHARA%가 있는 곳으로 향했다."
    - "창밖의 풍경이 도심에서 한적한 시골로 변해가는 것을 보며, %YOU%은(는) %CHARA%도 참 대단하다며 속으로 감탄했다."
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「브라이트는 참 대단하지?」"
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「언제나 나도 모르는 사이에 저렇게 멀리 가 버리니까, 어리숙한 면이 정말 귀엽다니까～」"
    - acc: 1
      content: "「그렇게 말해도 괜찮아? 뒤에서 험담하는 거나 다름없는데?」"
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「그럴 리가 없잖아, 난 전혀 그렇게 생각 안 해.」"
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「브라이트는 내가 자랑스러워하는 %YOUNGER_SISTER%인걸, 난 브라이트를 엄청 좋아하니까!」"
    - "과장되게 손을 흔들며 뒤로 물러서던 그녀는 튼튼한 등받이에 등을 부딪쳤고, 한적한 객실 안에 둔탁한 소리가 맑게 울려 퍼졌다."
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「아으, 아파라……」"
    - acc: 1
      content: "「그냥 농담이야, 너무 무리하지 마.」"
    - "두 사람은 가벼운 웃음을 나누며 창밖의 경치를 즐겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 오셨군요～」"
    - "역 대합실 긴 의자에 앉아 있던 %CHARA%가 자리에서 일어나며, 눈앞에 멈춰 서는 전차를 바라보았다."
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「브라이트!」"
    - "열린 문 사이로 껑충 뛰어내린 그녀가 단숨에 %CHARA%에게 안겨들었다."
    - "%P_NAME%의 뒤를 따라 전차에서 내린 %YOU%은(는) 눈앞의 훈훈한 광경을 보며 저도 모르게 입꼬리를 슬며시 올렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_64%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「간지러워요, 그렇게 하시면～」"
    - "평화롭던 간이역의 공기가 문득 고요하게 가라앉았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALL_64%, 냄새가 나는데요?」"
    - "신나서 이리저리 흔들리던 꼬리가 찰나의 순간 꼿꼿하게 굳어졌다."
    - "%YOU%이(가) 볼 수 없는 각도에서, %CHARA%의 얼굴에 묘하게 차분한 미소가 떠올랐다."
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「냄새? 무슨 냄새가……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALL_64%의 몸에서 %CALLNAME%의 냄새가 듬~뿍 나는데요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「혹시 %CALL_64%도 그런 생각을 하고 계셨나요?」"
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - 「！」
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「설마 브라이트, 너 일부러 그러는 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그냥 문득 떠오른 생각이었어요～」"
    - "의아해하는 %YOU%의 시선 앞에서, %P_NAME%는 슬그머니 손을 떼고는 %CHARA%의 곁에 멍하니 서서 제 뺨을 긁적였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이왕 여기까지 오셨으니, 여기에서 함께 시간을 보내다 가도록 해요～」"
    - "옆에서 부끄러워하는 %P_NAME%와 달리, %CHARA%는 조금 강압적이면서도 자연스럽게 %YOU%의 팔을 붙잡았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「조금 늦게 돌아가도 전혀 문제없으니까요～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇지요? %CALL_64%~」"
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「그, 그렇네, 아하하……」"
    - color: %P_COLOR%
      content:
        - fontWeight: bold
          content: %P_NAME%
        - "「그럼…… 같이 놀까?」"
    - "아무도 없는 대합실 앞에서, 두 명의 %UMA%가 동시에 겉옷을 가볍게 젖히며 깨끗한 살결을 드러냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자, 시작해요, %CALLNAME%～」"
    - acc: 1
      key: sex
      content: "「내, 내 의견은 안 물어보는 거야?!」"
    - acc: 2
      content: "「정말이지 너희 두 사람은 못 말리겠네～」"

miss_tram_sex:
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - "「결국 이렇게 늦은 시간이 되어 버렸잖아…… 혼날 텐데.」"
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - "「정말이지, 이러면 내일 허리 아플 것 같단 말이지～」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALL_64%, 그런 말씀은 하지 마셔요~」"
  - "전차에 나란히 앉은 두 자매는 서로 장난을 치며, 양옆에서 가운데 낀 %YOU%을(를) 콕콕 찔러댔다."
  - "하지만 이미 졸음이 쏟아지던 %YOU%은(는) %THEY%의 장난에 답하지 않았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%도 꽤 지치신 모양이네요～」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「돌아가요, %CALL_64%~」"

# week_end
# 良縁以上、ドーベル熱恋、ともに非処女、ウマ娘
dear_sister:
  title: "제 친애하는 도베르랍니다～"
  lines:
    - "【도베르와 한층 더 깊은 사이가 되고 싶으시다면, 이번 휴일에 메지로 저택으로 와 주세요～】"
    - "스마트폰에 도착한 의미불명의 뜬금없는 메시지를 보며 %YOU%은(는) 진지하게 고민에 잠겼다."
    - acc: 1
      key: sex
      content: "답장을 보내고 초대에 응한다"
      lines:
        - "%CHARA%가 보낸 메시지가 조금 어리둥절하긴 했으나, 휴일이 되자 %YOU%은(는) 얌전하게 메지로 저택의 정문 앞으로 향했다."
        - "%YOU%이(가) 입구에서 전화를 걸려던 찰나, %CHARA%가 가벼운 걸음으로 달려와 문을 활짝 열어주었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%, 정말 오랫동안 기다렸어요～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「물론 도베르도 아주 이른 아침부터 기다리고 있었답니다～」"
        - "마중을 나온 것은 한 사람뿐인데, 모두 준비를 마쳤다고 하는 것일까?"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어라라?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%, 당신도 무척 기대하고 계셨던 건가요?」"
        - "가볍게 두어 걸음 다가온 그녀는 %YOU%의 팔을 감싸 안으며 자신의 가슴께로 꼬옥 끌어당겼다."
        - acc: 1
          content: "「저기, %CHARA_FULL%?」"
        - acc: 2
          content: "「말랑말랑하네……」"
        - "%YOU%의 목소리를 들은 %CHARA%는 팔을 더욱 깊숙이 제 품 안으로 안아 들었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그 말은 즉, %CALLNAME%께서도 기분이 좋으시다는 뜻이겠지요～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아 참, %CALL_59%를 너무 오래 기다리게 하면 안 되니까요, 어서 가요.」"
        - "앞마당을 지나 메지로 저택 안으로 들어서자, %YOU%의 눈앞에 넓은 대리석 홀과 바닥에 흐릿하게 반사되는 정체불명의 물자국이 들어왔다."
        - "%YOU%이(가) 그 물자국의 정체에 대해 생각하려던 찰나, %CHARA%에게 반쯤 이끌려 앞으로 걸어가게 되었다."
        - "묘한 신비감이 감도는 분위기 속에서, 두 사람은 구석진 곳에 위치한 어느 방 앞에 멈춰 섰다."
        - "한낮임에도 커튼이 굳게 닫혀 있어 방 안에는 한 줄기 빛조차 들어오지 않았다."
        - "시선을 집중해 자세히 살펴보니, 방 안쪽에서 무언가가 꼬물거리며 움직이는 듯한 실루엣이 보였다."
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - "「으으…… 읍……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어라라, %CALL_59%? 그렇게 계시면 안 되잖아요?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%께서 어렵사리 와 주셨으니, 제대로 인사를 건네야지요～」"
        - "붙잡고 있던 %YOU%의 손을 놓은 %CHARA%는 가뿐한 걸음으로 방 안으로 들어가 전등 스위치를 올렸다."
        - "은은한 노란빛의 조명이 방 안을 비추었고, 이내 방 한가운데 놓인 커다란 침대의 모습이 드러났다."
        - "침대 중앙에 실오라기 하나 걸치지 않은 채 누워 있는 귀여운 %UMA%는 바로 %D_NAME%였다."
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: %D_NAME%
            - "「으응…… 앗❤️」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%, %CALL_59%도 당신을 무척 환영하고 있답니다!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 다음은, 영차～」"
        - "%D_NAME%의 입을 막고 있던 재갈을 벗겨내고, 몸의 자유와 시야를 제한하던 가죽 끈들을 풀어주었다."
        - "%D_NAME%의 목소리는 조금 잠겨 있었으나, 여전히 기쁨을 숨기지 못한 채 가냘픈 목소리로 %YOU%의 이름을 불렀다."
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: %D_NAME%
            - "「이, 이런 꼴 사나운 모습을 보여줘서 미안해……」"
        - color: %D_COLOR%
          content:
            - fontWeight: bold
              content: %D_NAME%
            - "「이게 다, 전부 브라이트가 멋대로 이래서 그런 거니까.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어라라? %CALL_59%는 여전히 솔직하지 못하시네요～」"
        - "%YOU%이(가) 깜짝 놀라 바라보는 가운데, %CHARA%는 조심스레 손을 뻗어 %D_NAME%의 가냘픈 두 다리를 벌렸고, 그 안에는 이미 애액으로 흠뻑 젖어버린 은밀한 입구가 드러났다."
        - "그런 취급을 당하면서도 %D_NAME%의 눈빛에는 거부의 기색이 전혀 없었으며, 오히려 열기에 휩싸여 몽롱하게 풀려 있었다."
        - "마치 눈앞의 상대를 향해, 어서 마음대로 해달라고 애원하는 듯한 눈망울이었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어서 다가오세요, %CALLNAME%～」"
        - "스르륵 옷자락이 흘러내리는 소리와 함께, 곁에 서 있던 %CHARA% 역시 걸치고 있던 의복을 벗어 던졌다."
        - "놀랍게도 속에는 아무런 속옷도 입지 않은 상태였으며, 건강미 넘치는 매끄러운 나신이 %YOU%의 눈앞에 고스란히 드러났다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALL_59%는 벌써 오래 기다렸으니, 먼저 %SEX%를 달래 주셔요~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「물론, 저를 깜빡 잊으시면 안 돼요?」"
        - "등 뒤의 방문이 바람에 밀려 스르륵 닫히며, %CHARA%의 은밀한 초대가 무사히 성공했음을 알렸다."
        - "명문가의 두 %UMA%가 실오라기 하나 걸치지 않은 채 침대 위에서 서로의 몸을 겹쳤고, 완전히 흠뻑 젖어버린 하반신을 드러내며 기대감에 차올랐다."
      # 馬跳び
    - acc: 2
      content: "시간이 없으니 거절하자"

# week_start
# 良縁以上、バレンタイン
the_fruit:
  title: "우리들의 노력의 결실이랍니다~"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「절 조금만 도와주실 수 있으신가요~」"
    - "%YOU%이(가) 일이 적어 여유를 부리던 때, %CHARA%가 불쑥 나타났다."
    - "%CHARA%는 능청스럽게 %YOU%의 손을 맞잡고는 응석을 부리듯 가볍게 잡아당겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저 혼자서 하려니까 모양새가 영 안 살아서 말이죠~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 저를 조금만 도와주세요~」"
    - "귓가를 맴도는 듯한 목소리에는 마치 마법과도 같은 힘이 있어, %YOU%은(는) 오늘의 행선지를 결정하기로 했다."
    - acc: 1
      content: "「그럼 신세 좀 질게.」"
    - "동글동글한 얼굴에 미소가 번질 때까지 %CHARA%의 작고 부드러운 손을 살포시 쥐었다."
    - "메지로 저택의 주방은 여전히 깔끔하게 정돈되어 있었고, 테이블 위에는 만들기 전 과정에 필요한 재료들이 미리 준비되어 있었다."
    - acc: 1
      content: "「역시 %CHARA%네……」"
    - "%CHARA%의 엄청난 행동력에 감탄하며, %YOU%은(는) 두 손을 걷어붙이고 본격적으로 만들 준비를 시작했다."
    - "재료 옆에 놓인 제작 설명서를 집어 들고, %CHARA%와 함께 한 단계씩 차근차근 따라 하기 시작했다."
    - "%YOU%이(가) 눈앞의 말랑말랑한 초콜릿을 보며 고민하던 중, 문득 고개를 들어보니 %CHARA%가 곁에서 아주 느긋하게 몰드를 닦고 있는 모습이 눈에 들어왔다."
    - "이 속도로 가다가는 초콜릿이 %CHARA%의 손에서 다소 아쉬운 모양새로 굳어버릴 게 뻔했기에, 무척 납득이 가는 상황이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라라, %CALLNAME%, 왜 그렇게 계속 절 쳐다보고 계신가요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 어디 실수라도 한 걸까요?」"
    - "의아함이 가득 담긴 %CHARA%의 시선과 마주치자, %YOU%은(는) 자신도 모르게 웃음이 터져 나왔다."
    - "%CHARA%의 손등을 양손으로 부드럽게 감싸 쥔 채, %SEX%의 손놀림을 묵묵히 이끌어 속도를 높였고, 마침내 초콜릿이 완전히 굳기 전에 타이밍을 맞출 수 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 그렇게 하는 거였군요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전에 혼자 만들 때는 어째서인지 초콜릿이 순식간에~ 굳어버렸단 말이죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「도와주셔서 감사해요, %CALLNAME%~」"
    - "%CHARA%의 부드러운 웃음소리와 함께, 녹아내린 초콜릿이 가득 담긴 용기가 테이블 위에 놓였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에 안 되나요? 제게 맡기시는 건가요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만, 저는……」"
    - "시무룩해진 %CHARA%의 표정을 보며, %YOU%은(는) 망설임 없이 초콜릿 용기를 %SEX%의 손에 쥐여주었다."
    - acc: 1
      content: "「안심해, 괜찮으니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「모양이 망가져도…… 정말 괜찮으신가요?」"
    - acc: 1
      content: "「완성품이 어떻든, 브라이트가 만든 거라면 기쁘게 맛볼게.」"
    - "어안이 벙벙해진 채 굳어버린 %CHARA%의 눈동자를 바라보며, 미소를 지은 %YOU%이(가) 그녀의 어깨를 가볍게 토닥여주었다."
    - "느긋하게 풀려 있던 눈동자에 이내 생기가 돌기 시작했고, 눈앞의 몰드를 진지하게 마주하기 시작했다."
    - acc: 1
      content: "「화이팅, 브라이트, 이번에는 분명 잘 될 거야!」"
    - "견과류가 듬뿍 섞인 초콜릿이 %CHARA%의 손을 거쳐 천천히 몰드 안으로 채워지며 형태를 갖추어 나갔다……"
    - "그리고 역시나 예상했던 대로, 손놀림이 너무 느렸던 탓에 초콜릿은 그대로 단단히 굳어버리고 말았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라라……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「죄송해요, %CALLNAME%. 귀한 시간을 내어 도와주러 오셨는데도 불구하고……」"
    - "%CHARA%의 실패를 안타까워할 틈도 없이 곧바로 작업을 이어 갔다."
    - "마침내 %CHARA%의 눈앞에서 모양이 조금 비뚤비뚤하고 기묘한 초콜릿이 완성되자, %CHARA%는 신기하다는 듯이 %YOU%을(를) 쳐다보았다."
    - acc: 1
      content: "「어쨌든 이렇게 완성됐어, 브라이트.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이런 모양새라도 정말 괜찮으신 건가요?」"
    - "질문이 끝나기 무섭게 %YOU%은(는) 손을 뻗어 %CHARA%의 동글동글하고 부드러운 머리를 쓰다듬어주었다."
    - acc: 1
      content: "「브라이트가 나를 위해 만들어 준 건데, 모양이 어떻든 절대 싫어하지 않아.」"
    - acc: 2
      content: "「브라이트도 최선을 다해 노력해 줬잖아.」"
    - "%YOU%을(를) 바라보던 %CHARA%는 눈을 커다랗게 뜨며, 예상치 못한 커다란 기쁨을 마음껏 만끽했다."
    - "겨우 마음을 진정시킨 그녀는 얌전하게 초콜릿 한 조각을 집어 들고는 %YOU%의 입가로 살포시 가져다 대었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 아~ 하세요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건 저희가 함께, 열심히 노력해서 만든 초콜릿이랍니다아~」"
    - "초콜릿의 달콤한 풍미가 입안 가득 맴돌았다. 마치 지금 두 사람의 마음처럼, 무척이나 달콤하게."
  # 好感+30

# out_start
# 良縁以上、同チームにメジロが少なくとも3人熱恋かつ性経験あり
know_us:
  title: "당신은 이미, 저희를 무척 잘 알고 계시네요"
  lines:
    - "3년이라는 트레이닝 기간이 끝난 지금, 원래대로라면 트레이너와 %UMA% 사이에 더 이상의 깊은 교류가 없어야 정상이었겠지만…… %YOU%에게는 해당하지 않는 이야기였다."
    - "%CHARA%와 함께 길을 따라 느긋하게 걸어가고 있던 중, 옆으로는 아침 연습에 한창인 %UMA%들이 바람처럼 지나쳐 갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……%CALLNAME%, 잠시 시간 괜찮으신가요?」"
    - "불쑥 튀어나온 뜬금없는 질문이었다."
    - "%YOU%이(가) 미처 대답을 하기도 전에, %CHARA%는 이미 걸음을 멈추고는 조금 의아해하는 %YOU%의 얼굴을 빤히 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괜찮으시다면, 저와 함께 메지로 저택으로 가 주셨으면 해서요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건, 무척 중요한 일이랍니다.」"
    - acc: 1
      content: "「브라이트가 그렇게까지 말한다면 당연히 가야지.」"
    - "동글동글한 얼굴에 다정한 미소를 띤 그녀는 %YOU%의 손을 부드럽게 감싸 안았다."
    - "언제 준비해 둔 것인지, 고급 승용차 한 대가 부드럽게 후방에서 다가와 멈춰 섰다."
    - "메지로 가문의 장대한 저택은 %YOU%의 기억 속에 남아 있는 모습과 한결같았지만, 평소와 달리 마중 나와 기다리는 사람들의 기척이 전혀 느껴지지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘따라 유독 조용하네요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「원래는 조금 더 북적북적하게 %CALLNAME%을(를) 환영해 드리고 싶었는데요.」"
    - "금빛 눈동자에 언뜻 쓸쓸한 빛이 서리더니, 그녀는 조금 불안한 듯 %YOU%을(를) 슬그머니 올려다보았다."
    - acc: 1
      content: "「괜찮아, 가끔은 이렇게 조용한 것도 나쁘지 않지.」"
    - acc: 2
      content: "「조금 조용해도 상관없어, 브라이트와 함께 있을 수만 있다면 그걸로 충분해.」"
    - "%YOU%의 손이 %CHARA%의 동글동글한 머리를 몇 번 쓰다듬어 주자, 그제야 축 처져 있던 귀가 쫑긋하고 꼿꼿하게 일어섰다."
    - "두 사람은 고요함이 감도는 정원을 한가로이 거닐다, 평소 함께 오후의 티타임을 즐기던 원형 테이블 앞에 멈춰 섰다."
    - "이심전심으로 서로 시선을 교환한 두 사람은 익숙하게 찻잔과 다기들을 꺼내어 준비하기 시작했다."
    - "따스하게 우려낸 홍차가 준비된 후에도, 두 사람은 마주 앉은 채 그 누구도 찻잔을 손에 쥐려 하지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……음후훗~」"
    - acc: 1
      content: "（브라이트가 아무런 준비도 없이 나를 초대한 건 꽤 드문 일이네）"
    - acc: 2
      content: "（뭐, 브라이트가 즐거워한다면 이런 것도 괜찮겠지）"
    - "%YOU%은(는) 반짝이는 %CHARA%의 생기 넘치는 금빛 눈동자를 바라보며, 자신도 모르게 슬며시 미소를 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%께서는 언제나 군말 없이 저와 함께해 주시네요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 매번 이렇게 당신의 소중한 시간을 빼앗고 있는데도…… 늘 저만을 바라봐 주시고 말이죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사실 %ELDER_SISTER%들과 함께 있을 때도, 전……」"
    - acc: 1
      content: "「전혀 그렇지 않아.」"
    - "%CHARA%의 조금 가라앉은 말을 끊으면서도 미소는 그대로였다."
    - acc: 1
      content: "「나는 브라이트가 좋으니까, 단 한 번도 힘들거나 곤란했던 적은 없었어.」"
    -
    - acc: 1
      content: "「브라이트 네가 매번 미리 꼼꼼하게 계획해 두는 것들까지 전부, 난 정말 좋아하거든.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「매번 전부 다…… 엣?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 그 말씀은 대체 무슨 뜻인가요?」"
    - acc: 1
      content: "「말 그대로의 의미야.」"
    -
    - acc: 1
      content: "「우리 둘만의 관계 사이에 다른 사람을 끌어들이는 건 별로 좋아하지 않지만…… 그게 브라이트 너라면 상관없어.」"
    -
    - acc: 1
      content: "「비록 다들 숨어 있느라 고생하는 것 같기는 하지만 말이지~」"
    - "다른 사람을 끌어들인다는 말은 즉, 지금 이 순간 원래대로라면 이곳에 있어야 할 다른 이들을 뜻하는 것이었다."
    - "무척이나 조용했던 정원 너머에서 이내 새로운 인기척과 소음이 들려오기 시작했다."
    - "%YOU%은(는) 등 뒤에서 들려오는 당황한 듯한 서툰 발걸음 소리를 들으며, 얼굴 가득 홀가분한 미소를 지어 보였다."
    - acc: 1
      content: "「거 봐, 다들 확실하게 들었나 본데.」"
    - "%CHARA%가 상황을 제대로 파악하기도 전에, 푸른 수풀 너머에서 무척이나 익숙한 실루엣들이 하나둘 모습을 드러냈다."
    - "사실 다들 %CHARA%가 아직 눈치채지 못하고 어리둥절해하는 귀여운 모습을 숨죽여 지켜보고 있었던 것이다."

# week_end
# 良縁以上、ライアンが良縁または熱恋（know_us後）、男Tウマ娘
dear_elder_sister:
  title: "제가 가장 좋아하는 언니"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 안녕하신가요, %CALLNAME%~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「한창 바쁘신 와중에 방해를 드려서 정말 죄송해요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만, 저와 함께 체육관에 좀 가 주실 수 있으신가요?」"
    - "예고도 없이 불쑥 문을 열고 들어온 %CHARA%는, %YOU%이(가) 전혀 이해할 수 없는 뜬금없는 제안을 건넸다."
    - "체육관이라니, 설마 근력 트레이닝이라도 하러 가자는 뜻일까?"
    - acc: 1
      content: "「트레이닝도 좋지만 쉬어가면서 해, 너무 무리하지 말고.」"
    - "%YOU%이(가) 완곡하게 거절의 뜻을 내비쳤으나, %CHARA%는 전혀 개의치 않는다는 듯 끈질기게 %YOU%의 팔을 붙잡고 잡아당겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「훈련을 하러 가는 게 아니랍니다, 그냥 구경만 하려는 거예요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「슬쩍 구경만 하는 거라면 전혀 문제없잖아요~」"
    - "조르듯 팔을 가볍게 흔들어대는 몸짓에 밀려, %YOU%은(는) 결국 고개를 끄덕이며 타협할 수밖에 없었다."
    - "하지만 트레이닝을 할 게 아니라면, 대체 왜 체육관에 가자는 것일까?"
    - divider: true
    - "체육관 내부는 평소와 다름없이, 사방이 맹렬하게 훈련에 몰두하고 있는 %UMA%들로 가득했다."
    - "하지만 훈련 구역의 한쪽 구석진 가장자리에 무척이나 낯익은 실루엣이 하나 서 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 이쪽이랍니다~」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「엣, 브라이트?」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「설마 %CALLNAME_27%까지 같이…… 와앗?!」"
    - "마침 이쪽을 돌아본 %R_NAME%의 얼굴에 순식간에 새파랗게 질린 경악과 당황의 기색이 떠올랐다."
    - "그녀는 허겁지겁 양손으로 가슴을 가리며, 자신도 모르게 뒤쪽으로 홱 물러서려 했다."
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「아앗! ……아야야야……」"
    - "벤치에서 중심을 잃고 엉덩방아를 찧은 %R_NAME%가 짧은 비명을 질렀고, 반사적으로 통증이 가해진 둔부를 향해 손을 뻗었다."
    - "그리고 그 대가로, 방어선이 무너진 가슴팍이 고스란히 노출되고 말았다."
    - "상반신의 넓게 파인 U자형 네크라인 사이로, 풍만하고 아찔한 앞가슴의 굴곡이 전부 밖으로 노출되어 있었다."
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「보, 보면 안 돼요, %CALLNAME_27%!」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「브라이트 너도 마찬가지야! 내가 먼저 익숙해질 때까지 기다려 준다고 했잖아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 %CALL_27%, %CALLNAME%께 보여 드리지 않으면……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무런 효과가 없지 않겠어요~」"
    - "가뿐하게 몇 걸음 뛰어간 그녀는 %R_NAME%의 등 뒤에 서서 그녀가 일어설 수 있도록 부축해 주었다."
    - "이윽고 %YOU%의 눈앞에 드러난 것은, %R_NAME%가 평소에는 헐렁한 옷 아래에 철저히 감추어 두어 잘 드러나지 않던 무척이나 풍만하고 압도적인 가슴이었다."
    - "%R_NAME%가 황급히 다시 가리기는 했으나, 이미 모든 것을 똑똑히 목격했다는 사실 자체는 변하지 않았다."
    - "부끄러움으로 새빨갛게 물든 귀밑을 뒤에서 바라보며, %CHARA%는 조금의 틈도 주지 않은 채 밀어붙였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「영차아~」"
    - "가슴을 가리고 있던 두 손을 갑자기 들어 올려, 애초에 다 가리지도 못했던 가슴골을 드러냈다."
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「와아아아악!」"
    - "%R_NAME%의 비명 섞인 외침이 주위의 다른 이들의 시선을 끌기 직전, %YOU%은(는) 본능적으로 한 걸음 앞으로 내딛으며 그녀의 앞을 가로막아 섰다."
    - "이 훌륭하고 귀한 광경을 다른 사람들에게 보여줄 수는 없는 노릇이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 저기를 보세요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기 있는 건 바로 · 휴 · 게 · 실 · 이랍니다아~」"
    - acc: 1
      content: "「우선 안으로 들어가자!」"
    - "주변 사람들의 의아하고 기묘한 시선을 뒤로한 채, %YOU%은(는) 두 마리의 %UMA%를 이끌고 서둘러 휴게실 안으로 대피했다."
    - "평소라면 이용객으로 붐볐을 방이었지만, 묘하게도 오늘은 신기할 정도로 내부에 아무도 없었다."
    - "(어째서 오늘따라 이렇게 유독 조용한 거지?)"
    - "%YOU%이(가) 이유를 생각하는 사이, %CHARA%가 뒤로 다가와 살며시 허리를 꼬집었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%～」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「조금 더…… 자세히 들여다보고 싶지는 않으신가요?」"
    - "시선을 돌리자, 탄탄하게 흐르는 매끄러운 근육의 선과, 그 위에 자리 잡은 탐스러운 거유가 눈에 들어왔다."
    - "아름다웠다, 정말이지 눈을 뗄 수 없을 정도로 훌륭했다!"
    - "몸 안의 본능은 이미 격렬하게 요동치기 시작하고 있었다!"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - 「……」
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "（이상해, 몸이 묘하게 뜨거워져서…… 아니, 이건 방금까지 격렬하게 훈련을 마친 직후라 그런 게 분명해!）"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "（이런 자극적인 옷을 입은 채로 %CALLNAME_27%를 보며 멋대로 흥분해 버리다니, 와아아……）"
    - "부끄러움으로 터질 듯 붉어진 얼굴을 마주하자, 성욕으로 가득 차오르던 %YOU% 역시 트레이너로서의 이성을 간신히 붙잡을 수 있었다."
    - acc: 1
      key: sex
      content: "「브라이트, 우선 라이언을 좀 도와줘.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「에에~ 제가 무엇을 도와드리면 되는 걸까요?」"
        - "%CHARA%에게 먼저 %R_NAME%의 옷을 입혀 달라고 하려 했지만, %CHARA%는 줄곧 %YOU%만 바라보며 알면서도 모른 척했다."
        - "%YOU%이(가) 그녀의 의도를 파악하기도 전에, %CHARA%는 아주 완만하고 부드러운 걸음걸이로 한 걸음씩 다가왔다."
        - "상체를 숙여, %YOU%의 코앞까지 얼굴을 밀착시켰다."
        - "그리고 일부러 들으라는 듯 크게 숨을 들이쉬는 소리와 함께, %YOU%의 얼굴은 순식간에 붉게 달아올랐다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「음~ 온통 %CALLNAME%의 냄새로 가득하네요~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이 냄새라면 %CALL_27%보다 먼저 도움이 필요하시겠네요~」"
        - acc: 1
          content: "「어, 어라? 무슨 소리야?」"
        - "말랑말랑하고 부드러운 얼굴을 %YOU%의 바지춤 근처에 바짝 밀착시킨 채, 그녀의 맑은 두 눈동자가 아래에서 위를 향해 슬며시 치켜 올라갔다."
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - "「브라이트……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALL_27%……역시 하고 싶어지셨지요?」"
        - "마찬가지로 전신에서 터져 나오는 뜨거운 열기를 감추지 못한 %R_NAME%가, 어느샌가 %CHARA%의 등 뒤에 바짝 다가와 서 있었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그러니 %CALLNAME%…… 헛된 저항은 하지 않는 편이 좋으실 거예요~」"
        - "힘센 두 손이 %YOU%을(를) 소파에 밀어 눕혔다."
    - acc: 2
      content: "「%YOU_CALL_27%, 일단 진정하고 물부터 마셔.」"
      lines:
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - "「엣? 네, 넵! 알겠어요!」"
        - "멍하니 넋을 잃고 있던 %R_NAME%가 간신히 정신을 차리고는, %YOU%과(와) 시선이 마주치기 무섭게 다시 다급하게 눈길을 돌려버렸다."
        - "그 찰나의 눈맞춤 때문이었는지, 얼굴에 번진 붉은 홍조가 아까보다 훨씬 더 선명해졌고, 이내 이마 근처에서 하얀 김이 뿜어져 나오는 듯한 착각마저 들게 했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALL_27%~ 물이에요~」"
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - "「고마워……」"
        - "%CHARA%가 건네준 종이컵을 멍하니 받아 들고는, 따스한 온수를 입안으로 흘려보냈다."
        - "그 덕분인지, 조금은 이성을 되찾은 모양이었다."
        - "%YOU% 역시 %R_NAME%의 곁으로 걸어가, 자극적인 정면을 보지 않도록 일부러 그녀의 측후방에 자리를 잡고 섰다."
        - acc: 1
          content: "「라이언, 네 가방은 어디 있어? 내가 가서 수건이라도 좀 꺼내올게.」"
        - "평범한 상황이었다면, 이것은 무척이나 자연스럽고 다정한 배려였을 것이다."
        - "하지만 지금은 결코 평범한 상황이 아니었다."
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - "（오늘만큼은…… 오늘만큼은 절대로 %CALLNAME_27%에게 들켜서는 안 되는데!）"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「문 옆에 있는 네 번째 사물함에 있답니다~」"
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - "「브라이트! 넌 왜 그렇게까지 자세히 알고 있는 거야?!」"
        - "%R_NAME%이 미처 만류하기도 전에, 뛰어난 행동력을 발휘한 %YOU%은(는) 이미 사물함에서 가방을 꺼내 안으로 들고 들어왔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「자, %CALL_27%, 수분을 듬뿍 보충해요~」"
        - "%R_NAME%가 허겁지겁 %YOU%이(가) 숄더백을 여는 것을 막으려던 그 찰나, %CHARA%가 타이밍 좋게 다시 물컵을 들이밀었다."
        - "그리고 아무런 의심의 여지 없이, 두 사람은 보기 좋게 정면으로 충돌하고 말았다."
        - "컵에 담겨 있던 물이 쏟아져 내리며 딱 한 장 걸치고 있던 스포츠 브라를 적셨고, 하필이면 가장 결정적이고 은밀한 부위를 흠뻑 물들이고 말았다."
        - "동시에, 가방 안에서 수건을 찾기 위해 손을 저어대던 %YOU% 역시 무척이나 결정적인 물건을 손에 쥐게 되었다."
        - "그것은 척 보기에도 눈을 의심케 할 정도로 과감하고 파격적인 디자인의 숏팬츠였다."
        - "허벅지 안쪽 깊숙한 경계선과 거의 평행을 이룰 정도로 극단적으로 짧은 길이였다."
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - "「와, 와와와……」"
        - acc: 1
          content: "「%YOU_CALL_27%, 이 바지 길이가 어떻게 된 건지 설명 좀 해 줄래?」"
        - color: %R_COLOR%
          content:
            - fontWeight: bold
              content: %R_NAME%
            - "「그, 그건 그러니까……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALL_27%가 일부러 새로 사 오셨답니다~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「전에 집에 내려갔을 때 몰래 준비하시는 걸 똑똑히 보았거든요~」"
        - "극심한 부끄러움 때문이었을까, 아니면 이 상황에 대한 묘한 흥분 때문이었을까."
        - "물에 푹 젖어버린 얇은 스포츠 브라 너머로, 격렬해진 움직임에 따라 도드라진 두 봉우리의 끝이 선명하게 형태를 드러내고 있었다."
        - "(이런 아수라장 같은 상황 속에서도 결국 흥분해 버리고 말다니.)"
        - "(이대로 아무것도 하지 않고 넘어가는 건 도저히 불가능하겠네.)"
        - "（%YOU_CALL_27%를 추궁하는 건? 나중으로 미루자.）"
        - acc: 1
          content: "「브라이트, 나 좀 도와줘~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네에, 기꺼이요~」"
        - "두 사람은 판박이처럼 똑같은 묘한 미소를 지은 채, %R_NAME%를 향해 천천히 음란한 마수를 뻗치기 시작했다."

dear_elder_sister_sex:
  - "결국 마지막 순간까지, 신비주의를 고수하며 소중히 숨겨두었던 숏팬츠는 제 역할을 하지 못한 채 바닥에 버려졌다."
  - "세 사람이 나란히 휴게실 밖으로 걸어 나왔을 때는, 이미 운동장에 남아 트레이닝을 하는 이들이 거의 보이지 않는 늦은 시간이었다."
  - "덕분에 아무에게도 들키지 않고 무사히 탈출하듯 빠져나올 수 있었다."
  - "물에 흠뻑 젖어버린 내의는 이미 가방 구석 깊숙한 곳에 처박혀 있었고, 당연히 그것들을 손수 가방 안에 밀어 넣은 것은 %YOU%의 손이었다."
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - "「하아…… 원래는 좀 더 익숙해진 다음에 보여주려고 한 건데.」"
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - "「결국 처음부터 끝까지 전부 %CALLNAME_27%한테 남김없이 들켜버렸잖아……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하지만, %CALLNAME%께서는 이런 솔직한 모습을 훨씬 더 마음에 들어 하실 걸요?」"
  - acc: 1
    content: "「뭐, 솔직히 그렇긴 해.」"
  - acc: 2
    content: "「어떤 모습이든 다 좋아해.」"
  - "%R_NAME%의 머리 위에서 금방이라도 펑 하는 소리가 날 것처럼, 그녀의 얼굴은 다시금 터질 듯이 시뻘겋게 달아올랐다."
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - "「정말이지…… 둘 다 세트로 날 놀려먹는 건 그만하라고.」"
