# @file メジロブライト - 募集
# @author KUN
rec0:
  - "%CHARA%는 훈련장에 없는 것 같다…… 혼자 외출해 볼까?"

rec1:
  title: "느긋한 공원 여행"
  lines:
    # 任意外出
    - "트레센의 모집 시즌, 홀로 외출해 산책하던 %YOU%은(는) 목적지 없이 공원을 거닐고 있었다."
    - "공원의 풍경은 평소와 다름없이 평화롭고 평온했다."
    - "길을 오가는 행인들도 모두 느긋하게 움직이고 있었다."
    - "딱히 할 일이 없던 %YOU%은(는) 길가에 있는 벤치를 찾아, 줄곧 걷느라 피로해진 다리에 잠시 휴식을 주기로 했다."
    # FLAGNAME:2 = 今月
    - if: era.get('flag:2') === 1
      content: "첫눈이 채 녹지 않은 가운데, 빛바랜 나뭇잎 몇 장이 천천히 떨어지고 있었다."
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아～암」"
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「하아～암」"
    - "바로 옆의 다른 벤치에는 나이가 그리 많아 보이지 않는 %UMA%가 앉아 있었다."
    - "폭신한 긴 머리카락 아래로 멍한 작은 얼굴이 보였다. 몸이 조금 뒤로 기울어져 있어, 반쯤 감긴 눈을 보지 못했다면 잠들었다고 생각했을 것이다."
    - if: d.mejiro
      lines:
        - acc: 1
          content: "「역시 브라이트네, 정말 느긋하기도 하지……」"
    - if: "!d.mejiro"
      lines:
        - acc: 1
          content: "「정말 느긋하기도 하네……」"
        - acc: 2
          content: "「이 아이, 벌써 잠든 건 아니겠지……」"
    - "%YOU%은(는) 깊게 생각하지 않고 일단 모르는 척하며, 평범한 하루를 이어가기로 했다……"
    -
    - "공원을 가볍게 몇 바퀴 돌고 난 뒤, 오늘따라 별다른 용무가 없던 %YOU%은(는) 아예 벤치에 주저앉아 느긋한 시간을 만끽했다."
    - "어느덧 시간은 두 사람 사이로 소리 없이 흘러갔다."
    - "구름이 햇살을 가려 일광욕 시간이 끝나고 나서야, %YOU%은(는) 나른하게 벤치에서 몸을 일으켰다."
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아～암」"
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「하아～암」"
    - acc: 1
      content: "「응?」"
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라라?」"
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「어라라?」"
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 좋은 아침이에요～」"
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「아, 안녕하세요～」"
    - "곁에 있던 %UMA%는 그제야 %YOU%의 존재를 알아차린 듯, 느릿느릿 고개를 돌려 바라보았다."
    - "귀를 쫑긋쫑긋 움직이더니, 이내 부드러운 미소를 지어 보였다."
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기, 위를 보고 계셨나요?」"
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「저기, 당신도 위를 보고 계셨나요?」"
    - "바로 옆에 앉아 있던 %YOU%은(는) 호기심에 이끌려 천천히 고개를 들어 위를 올려다보았다."
    - "그리 높지 않은 말라붙은 나무 한 그루가 있었고, 그 꼭대기에는 시든 낙엽 몇 장이 남아 있었다. 그런데 유독 나뭇가지 끝에 매달린 잎사귀 하나만큼은 바람이 세차게 불어도 떨어지지 않고 버티고 있었다."
    - acc: 1
      content: "「저 나뭇잎을 보고 있었던 거야?」"
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네에～」"
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「맞아요～」"
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기 꼭대기에, 외롭게 시든 잎이 한 장 남아 있죠?」"
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「저기 꼭대기에, 외롭게 시든 잎이 한 장 남아 있죠?」"
    - if: d.mejiro
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「금방이라도 날아가 버릴 것처럼 보이지만, 전혀 떨어지지 않는답니다～」"
    - if: "!d.mejiro"
      color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「금방이라도 날아가 버릴 것처럼 보이지만, 전혀 떨어지지 않는답니다～」"
    - "툭 던진 말에 이어, 눈앞의 %UMA%는 다시 한번 고개를 들어 위를 바라보았다."
    - "%YOU%의 눈에 들어온 그 시든 잎사귀는 묘하게 신경을 자극했다."
    - acc: 1
      content: "（남아서 같이 지켜본다）（모집을 계속한다）"
      key: rec
      lines:
        - "자리를 뜨려던 %YOU%은(는) 생각을 바꾸어 다시 벤치에 엉덩이를 붙였다."
        - "시선을 천천히 고목 꼭대기로 옮겨, 그 나뭇잎을 가만히 응시했다."
        - "시간은 다시 한번 두 사람의 곁을 흘러 지나갔다……"
        -
        - "얼마나 흘렀을까, 곁에 있던 %UMA%가 돌연 입을 열었다."
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「참 꿋꿋한 아이네요～」"
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - "「참 꿋꿋한 아이네요～」"
        - acc: 1
          content: "「그러게」"
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어라라? 대답이……」"
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - "「어라라? 대답이……」"
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「와아, 아직 계셨군요～」"
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - "「와아, 아직 계셨군요～」"
        - acc: 1
          content: "「저 나뭇잎이 왠지 신경 쓰여서 그만……」"
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「신경 쓰여서, 내내……?」"
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - "「신경 쓰여서, 내내……?」"
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우후후～ 역시 당신다우셔요～」"
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: ？？？
            - "「우후후～ 어쩌면 저와 닮으셨을지도 모르겠네요～」"
        - "눈앞의 %UMA%는 부드럽고 가볍게 미소 지었다."
        - "그 웃음소리가 이어지던 중, 저 멀리서 다른 목소리가 들려왔다."
        -
        - if: d.mejiro
          color: %COLOR59%
          content:
            - fontWeight: bold
              content: "메지로 도베르"
            - "「브라이트! 드디어 찾았잖아!」"
        - if: "!d.mejiro"
          color: %COLOR59%
          content:
            - fontWeight: bold
              content: ？？？
            - "「브라이트! 드디어 찾았잖아!」"
        - if: d.mejiro
          lines:
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: "메지로 도베르"
                - "「어라, 당신도 여기 있었어?」"
            - "메지로 도베르가 허둥지둥 뛰쳐나와 %CHARA%의 손을 부드럽게 맞잡으며 안도의 한숨을 내쉬었다."
            - "그러나 이내, 곁에 서 있는 %YOU%을(를) 다소 원망스러운 눈초리로 쏘아보았다."
        - if: "!d.mejiro"
          lines:
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: ？？？
                - "「어라, 이분은 누구셔?」"
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: ？？？
                - "「설마, 이상한 사람은 아니겠지……」"
            - "헐레벌떡 달려온 %UMA%는 %CHARA%의 손을 꼭 잡으며 안도의 한숨을 내쉬었다."
            - "그러고는 이내 곁에 서 있는 %YOU%을(를) 경계 섞인 시선으로 바라보았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「괜찮답니다, 도베르～」"
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이분이 곁에 있어 주신 덕분에 지루하지 않게 기다릴 수 있었던 걸요～」"
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이 %SIR%께서 내내 함께해 주셨답니다, 참 좋은 분이셔요～」"
        - color: %COLOR59%
          content:
            - fontWeight: bold
              content: "메지로 도베르"
            - "「그렇지만……」"
        - if: d.mejiro
          lines:
            - acc: 1
              content: "「그럼, 난 이만 가 볼게?」"
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: "메지로 도베르"
                - "「앗? 으응…… 마음대로 해.」"
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: "메지로 도베르"
                - "「깜짝 놀랐잖아…… 첫인상이 영락없이 수상한 사람 같았단 말이야.」"
        - if: "!d.mejiro"
          lines:
            - acc: 1
              content: "「저기, 난 트레센 학원의 트레이너야. 배지도 제대로 차고 있다고.」"
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: "메지로 도베르"
                - "「어라? 정말이네, 트레이너 배지다……」"
            - color: %COLOR59%
              content:
                - fontWeight: bold
                  content: "메지로 도베르"
                - "「깜짝 놀랐잖아…… 이상한 사람인 줄 알았단 말이야.」"
        - "일행이 찾아온 %CHARA%를 바라보며, 자신의 역할이 끝났음을 직감한 %YOU%은(는) 자연스럽게 발길을 돌려 떠났다."
        - divider: true
        - color: %COLOR%
          content: "멀어지는 %YOU%의 뒷모습을 바라보며, %CHARA%는 고개를 살짝 갸웃했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너님……」"
        - if: d.mejiro
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응후후～」"
        - if: "!d.mejiro"
          color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응……?」"
    - acc: 2
      content: "（그저 시든 잎일 뿐이다）（모집을 중단한다）"
      lines:
        - "고작 시든 잎 한 장일 뿐인데…… 대수롭지 않은 일이다."
        - "그렇게 생각한 %YOU%은(는) 자리에서 일어나 공원을 빠져나갔다."

rec2:
  title: "느릿느릿한 등장～"
  lines:
    # 中庭で発火
    - "공원에서 한가로운 시간을 보낸 지 얼마 지나지 않아, 그 독특한 분위기의 %UMA%가 다시 한번 %YOU%의 눈앞에 나타났다."
    - "마침 창가에 서 있던 %CHARA%는 %YOU%을(를) 발견하고는, 느릿느릿 여유롭게 걸어왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「평안하신가요, 트레이너님.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「얼마 만에 뵙는 건지 모르겠네요～」"
    - acc: 1
      content: "「……어? 나한테 말하는 거야?」"
    - "얼떨떨해하는 %YOU%와 달리, %SEX%의 얼굴에는 화사한 미소가 어려 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네에, 그렇답니다～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지난번에 공원에 계실 때 신세를 많이 졌으니까요～」"
    - "%CHARA%는 그렇게 말하며 %YOU%에게 가볍게 고개를 숙여 감사를 표했다."
    - "다시 고개를 들었을 때도 여전히 조금 덜 깬 듯한 표정으로, 둥실둥실 떠다니는 듯한 시선으로 %YOU%을(를) 마주 보았다."
    - acc: 1 # 募集終了
      content: "「……그건 트레이너로서 당연히 해야 할 의무였을 뿐이야.」（모집을 중단한다）"
      key: rec
    - acc: 2
      content: "「아니야, 나도 그 시간을 충분히 즐겼는걸……」（모집을 계속한다）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「즐기셨다니요……?」"
        - "맹한 얼굴로 고개를 살짝 갸웃하며 %YOU%을(를) 의아하게 쳐다보았다."
        - "길게 뻗은 바보털이 공중에서 쫑긋거리며, 창문으로 불어오는 바람을 따라 한들한들 흔들렸다."
        - acc: 1
          content: "「나도 그렇게 차분하게 가라앉는 분위기가 마음에 들었거든.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오호라～ 그러셨군요～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너님은 저와 마음이 아주 잘 맞으시네요～」"
        - "내려뜨렸던 두 손을 살며시 올려 %CHARA%는 번지는 미소를 가렸다."
        - "가벼운 웃음소리가 잦아들 무렵, 무언가 떠오른 듯 멍하던 표정 속에 별안간 진지함이 감돌았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「앗, 맞다!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「지금 말씀드리기엔 조금 어색할지도 모르겠습니다만……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「혹시 제 측정을 도와주실 수 있으신가요?」"
        - "다소 뜬금없게 화제를 전환했음에도, 목소리 톤은 여전히 평온하기 그지없었다."
        - acc: 1
          content: "「측정?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네에～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「다음 교내 레이스에 신청을 해 두었거든요. 그래서 전문가의 시선으로 점검해 주셨으면 해요～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「물론 마음이 내키지 않으신다면 사양하셔도 괜찮답니다?」"
        - "조금 전까지 졸려 보이던 얼굴은 레이스 이야기가 나오자마자 단숨에 생기를 띠었다."
        - "진지하게 정면을 응시하는 %YOU%의 눈빛은 「메지로」라는 명문가의 이름에 걸맞은 광채를 품고 있었다."
        - acc: 1
          content: "「좋아, 도와줄게.」"
        - divider: true
        - "트레이닝 장으로 자리를 옮긴 후, 운동복으로 갈아입은 %CHARA%의 모습이 보였다."
        - "트랙 옆에 선 %YOU%은(는) 저도 모르게 손에 쥔 스톱워치를 꽉 쥐었다."
        - "저 아이는 그 유명한 메지로 가문의 %CHARA%다. 과연 어떤 주력을 보여줄지 기대가 앞섰다……"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: "평범한 트레이너 A"
            - "「%CHARA%라니, %SEX%가 어떤 모습을 보여줄지 정말 기대되는군!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: "평범한 트레이너 B"
            - "「듣기로는 아직 전속 트레이너가 없다던데? 어쩌면 이번이 기회일지도……」"
        - "주변에서 들려오는 속닥거림을 뒤로하고, %CHARA%는 힘차게 발을 내딛었다――"
        -
        - "예상과 달리, 모두가 기대했던 박진감 넘치는 가속은 없었다. 그저 그리 빠르지 않은 속도를 일정하게 유지할 뿐이었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: "평범한 트레이너 A"
            - "「전혀 가속을 안 하잖아? 진짜야?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: "평범한 트레이너 B"
            - "「보아하니 소문만큼 대단하진 않은 모양이네……」"
        - acc: 1
          content: "「……하지만 속도가 전혀 줄지 않는 느낌인걸.」"
        - "속도가 느리다며 깎아내리는 주변 반응과 달리, %YOU%은(는) %CHARA%의 발걸음을 유심히 지켜보며 서서히 어떤 확신을 갖기 시작했다."
        -
        - "%CHARA%가 측정을 마쳤을 때쯤에는 주위의 구경꾼들이 거의 다 흩어진 뒤였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너님～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어라라, 제가 벌써 결승선을 통과한 건가요?」"
        - "처음부터 끝까지 흐트러짐 없는 페이스로 완주한 브라이트는, 고른 호흡을 유지하며 %YOU%의 앞으로 걸어왔다."
        - acc: 1
          content: "「응, 이미 끝났어.」"
        - "순수한 미소를 마주하며 %YOU%은(는) 가만히 스톱워치를 주머니에 넣었다."
        - "이토록 무궁무진한 가능성을 직접 목도했으니, %TITLE% 트레이너로서 %YOU%의 흥미를 자극하기엔 이미 충분했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어라, 벌써 충분하신가요?」"
        - acc: 1
          content: "「응, 완전 충분해.」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼…… 트레이너님께선 제 성적을 어떻게 보시나요?」"
        - acc: 1
          content: "「왠지 모르게, 너를 그냥 그런 식으로 달리게 내버려 둘 순 없겠다는 생각이 들어.」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그냥 달리게 내버려 둘 수 없다니요……?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「무슨 뜻인지 여쭈어도 될까요?」"
        - "%YOU%의 앞에 선 %CHARA%는 체력이 다해 헐떡이는 여느 신입 %UMA%들과 달리, 측정을 시작하기 전처럼 지극히 평온했다."
        - "안색에도 피로한 기색은커녕, 여전히 나풀거리는 미소가 머물러 있었다."
        - acc: 1
          content: "「우선은 그 느릿느릿한 태도부터 조금씩 고쳐나가 볼까……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우선은…… 느릿느릿한 태도부터요?」"
        - "약간 멍해진 %CHARA%의 눈빛을 보며, %YOU%도 마음을 굳혔다."
        - acc: 1
          content: "「시기상 조금 성급할지도 모르겠지만…… 나랑 팀을 맺어주지 않을래?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「팀이라니…… 아, 전속 트레이너 계약 계약 말씀을 하시는 건가요?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……하지만 전 아직 공식 교내 레이스도 뛰지 않았는데, 트레이너님께선 벌써 결정을 내리시는 건가요?」"
        - "자신의 실제 레이스를 보지도 않고 섣불리 제안하는 모습에 %CHARA%도 이내 이해할 수 없다는 표정을 지었다."
        - "하지만 지금의 %YOU%에게는 이미 확신이 선 일이었다."
        - acc: 1
          content: "「응, 결정했어!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아…… 우후후～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼, 조금만 더 고민할 시간을 주실 수 있으신가요?」"
        - "잠시 멍해졌던 %CHARA%는 이내 평소처럼 졸린 듯한 눈빛으로 돌아왔다."
        - "서두를 것 없던 %YOU%는 가볍게 고개를 끄덕이고, %CHARA%와 손을 흔들며 잠시 헤어졌다."
        - divider: true
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우후후…… 역시, 당신께 부탁드리길 잘했네요～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아 참, 이제부터는 %CALLNAME%이라고 불러야겠네요～」"
        - color: %COLOR%
          content: "%YOU%에게 마지막 한 마디가 닿지 않을 거리까지 멀어지자, %CHARA%는 참지 못하고 다시금 새어 나오는 웃음을 터뜨렸다."

rec3:
  title: "오랜만이에요～"
  lines:
    - "다시 한번 안뜰을 지나갈 때, 어디선가 불어온 맑은 바람이 %YOU%의 눈앞을 스치며 시선을 부드럽게 이끌었다."
    - "길게 뻗은 바보털 하나……"
    - "밤색 긴 머리를 늘어뜨린 %UMA%가 안뜰 벤치에 우두커니 앉아 있었다."
    - "%YOU%은(는) 저 %UMA%의 이름을 기억하고 있었다. 개인적인 흥미와 트레이너라는 직분 때문에 %SEX%의 모의 레이스도 몇 번 참관한 적이 있었다."
    - "마침 오늘 훈련장으로 가려던 목적도 팀에 영입할 %UMA%를 찾기 위함이었으니, 눈앞의 저 아이라면 그야말로 안성맞춤이 아닌가."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라라? 누구시지요?」"
    - "등 뒤의 시선을 기척으로 느꼈는지, %CHARA%는 느릿하게 고개를 돌려 바라보았고 %YOU%을(를) 확인하자마자 이내 화사한 미소를 지어 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오랜만이에요～」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘은 어떤 일로 오셨나요?」"
    - "질문을 던지며 앙증맞은 바보털이 쫑긋 흔들렸고, 그 모습은 %YOU%의 가슴 한구석을 콕 찔렀다."
    - "%YOU%은(는) 속으로 냉정해지자며 스스로를 다잡았고, 말랑해 보이는 %SEX%의 볼을 만져보고 싶다는 충동을 꾹 눌러 담았다."
    - "예전엔 왜 저렇게 말랑말랑하고 귀여운 구석이 있다는 걸 눈치채지 못했을까?"
    - "정신을 차리고 가볍게 헛기침하며 생각을 제자리로 돌려놓았다."
    - acc: 1
      content: "「널 스카우트하러 왔어.」（모집을 계속한다）"
      key: rec
      lines:
        - "（너무 돌직구였나!）"
        - "%YOU%은(는) 속으로 제 자신을 세차게 몰아붙였지만, 애초에 그 목적으로 온 게 맞으니 굳이 변명하지 않기로 했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네에……?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「앗, 그렇군요!」"
        - "반 박자 늦게 반응한 %CHARA%가 그제야 자리에서 일어나 %YOU%을(를) 올바르게 마주 보았다."
        - "%YOU%와 %CHARA%는 잠시 서로를 빤히 바라보았고, 참지 못하고 먼저 웃음을 터뜨린 쪽은 오히려 %YOU%였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기, 트레이너 씨?」"
        - "「아니야, 신경 쓰지 마.」"
        - "얼굴에서 웃음기를 거둔 %YOU%가 한 걸음 앞으로 다가섰다."
        - "%CHARA%가 치렀던 지난 몇 차례의 레이스를 %YOU%은(는) 현장에서 지켜본 바 있었다."
        - "비록 모의 레이스이긴 했지만, %CHARA%의 주법 자체는 훌륭했기에 약간의 조언만 더해진다면 완벽해질 터였다."
        - "「%CHARA% 양, 네 레이스는 나도 쭉 지켜봤었어.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네에?」"
        - "%CHARA%는 멍한 표정을 지은 채 고개를 살짝 기울였다."
        - "이왕 영입 제안을 하러 온 거, 먼저 트레이너로서의 실력부터 보여주는 편이 좋겠지."
        - "「갑자기 이러는 게 이상하게 보일 수도 있겠지만, 조언을 조금 건네도 괜찮을까?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 물론이지요. 말씀해 주셔요～」"
        - "%CHARA%의 얼굴을 보며, %YOU%은(는) 그동안 마음속에 쟁여두었던 피드백들을 하나씩 꺼내놓았다."
        - "다소 불명확한 가속 타이밍, 처지는 템포, 그리고 미세하게 어긋나는 보폭의 문제점들까지."
        - "%YOU%의 말을 경청한 %CHARA%는 그저 고분고분하게 고개를 끄덕였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「호오, 호오……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「왠지, 당장 가서 달려보고 싶어지네요～」"
        - "의욕을 내비치는 활기찬 모습에 %YOU%의 입꼬리도 자연스럽게 위로 호선을 그렸다."
        - "이 조언이 효과가 있다는 걸 증명해 낸다면, %CHARA%도 계약을 긍정적으로 검토해 줄 것이다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼, %CALLNAME%, 오늘은 저와 함께 트레이닝해 주실 수 있으신가요?」"
        - "당연히 좋고말고, %YOU%은(는) 그렇게 대답하려 했다."
        - "하지만 방금 들은 호칭이 머릿속에 맴돌자, %YOU%은(는) 그만 굳어버리고 말았다."
        - "「어? 방금 뭐라고 불렀어?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네에～ %CALLNAME%～」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그야～ 저도 마음을 정했으니까요～」"
    - acc: 2
      content: "「나…… 난 그냥 지나가던 길이었어.」（모집을 중단한다）"
