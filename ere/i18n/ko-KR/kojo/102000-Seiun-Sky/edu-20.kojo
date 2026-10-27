# @file セイウンスカイ - 育成
# @author Wolke
# @author Claude (翻訳)

ts_add:
  title: "자발적인 추가 훈련"
  lines:
    - "하루 훈련이 끝난 뒤, 세이운 스카이가 드물게 추가 훈련을 하겠다고 나섰다."
    - "%SEX%는 숨을 고르며 혼잣말을 중얼거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음…… 어제 그 월척…… 아아아아! 아까워!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더 할래요! 다음엔……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음엔 절대 안 놓쳐!」"
    - "드물게 의욕이 넘치는 세이운 스카이를 보고 %YOU%은(는) 결정했다."
    - acc: 1
      content: "모처럼 의욕을 보이니 도와주자"
    - acc: 2
      content: "훈련은 적당히 하는 게 좋다"

race_start:
  title: "레이스 전"
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「다녀올게요─」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너 쌤~ 그런데─」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「세이가 어쩌다 이겨 버리면…… 놀라실 건가요? 냐하하~」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「좋았어─」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이번 작전은 『자유자재』로, 적당히 달려 볼까요~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「헤헤, 그냥 놀려 본 거예요~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그래도…… 어떻게 달리든 쌤은 세이를 응원해 주실 거죠~」"

race_end_win:
  title: "레이스 승리"
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「해냈다!!! 작전 대성공!!!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「맛있는 거 먹고! 늦잠 자고! 월척 낚을래요!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「농땡이 피우는 게 아니에요~ 다른 상대를 관찰하는 거라고요~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「믿어 주실 거죠? 냐하하~」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후아아~ 세이가 의외로 강하네요~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「고양이랑 낮잠 자는 게 효과가 있나 봐요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정했어요! 앞으로 일주일은 매일 고양이랑 낮잠 잘래요!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「고양이가 이렇게 귀여운데, 쌤도 방해는 못 하시겠죠? 냐하하~」"

race_end_5:
  title: "레이스 입상"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번엔 그럭저럭이네요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도 아깝다…… 조금만 더……」"
    - "「이번 작전은 나쁘지 않았어. 타이밍이 조금 안 맞았을 뿐일 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「냐하하~ 고마워요, 트레이너 쌤.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음엔 더 화려한 작전을 준비할게요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그땐 깜짝 놀라게 해 드릴게요!」"

race_end_lose:
  title: "레이스 패배"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아하하~ 다들 정말 강하네요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「작전만으론 한참 부족한가 봐요─ 함정도 타이밍도……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아! 제대로 반성하고, 돌아가면 두 배로 훈련하겠어요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그럴 줄 아셨어요? 그럴 리가 없잖아요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「작전으로 이긴다! 그게 세이의 방식이에요~」"


# 募集後、次ターン開始
ws_find_you:
  title: "잡았다?"
  lines:
    - "아침 훈련장에서는 부지런한 레이스 %UMA%들이 벌써 훈련에 매진하고 있다."
    - "%YOU%도 일찍 트레이너실에 들어가 정성껏 짠 계획을 펼쳤다. 세이운 스카이와 알찬 하루를 시작할 생각이었다."
    - "해가 떠오르고, 바깥 훈련장에서 들리는 기합 소리도 점점 늘어났다."
    - "하지만 %YOU%의 파트너만은 아무리 기다려도 오지 않았다."
    - "한참 뒤 %YOU%이(가) 시계를 보니 약속 시간은 한참 지났고, %SEX%에게 보낸 메시지에도 답이 없었다."
    - "「얘가…… 또 농땡이인가……」"
    - "어쩔 수 없이 %YOU%은(는) 학원 전체를 찾아보기로 했다."
    - acc: 1
      content: "중정의 커다란 나무"
      lines:
        - "모습이 보이지 않았다."
    - acc: 2
      content: "기숙사 옆 잔디밭"
      lines:
        - "모습이 보이지 않았다."
    - acc: 3
      content: "옥상의 비밀 기지"
      lines:
        - "모습이 보이지 않았다."
    - acc: 4
      content: "식당 뒤 고양이 집"
      lines:
        - "모습이 보이지 않았다."
    - acc: 5
      content: "훈련장 관중석"
      lines:
        - "모습이 보이지 않았다."
    -
    - "오전 내내 찾았지만 발견하지 못한 %YOU%은(는) 풀이 죽어 트레이너실로 돌아왔다."
    - "저녁 시간이 다 되어서야 세이운 스카이가 느릿느릿 나타났다."
    - "먼저 사과하고는 내일은 꼭 제시간에 오겠다고 약속했다."
    - "%YOU%은(는) 어쩔 수 없이 고개를 끄덕이고 잔소리 몇 마디를 덧붙였다. %SEX%가 정말 귀담아듣기를 바랄 수밖에 없었다."


# 募集後二週目、ターン終了時
we_free_cloud:
  title: "자유로운 구름"
  lines:
    - "계약한 지 보름. %YOU%은(는) 주변 사람들이 %SEX%에게 내린 평가가 과장이 아니었음을 비로소 깨달았다."
    - "영입한 뒤 몇 주 동안, 사흘에 한 번꼴로 훈련장에서 %SEX%의 모습을 볼 수 없었다."
    - "매일 아침 트레이너실에 도착할 때마다 %YOU%은(는) 오늘만큼은 세이운 스카이가 있기를 빌었다."
    - "하지만 기대는 기대일 뿐, %SEX%가 또 도망쳤다는 걸 알게 되면 %YOU%의 하루는 다시 긴 수색으로 시작되었다."
    - "운이 좋으면 구석에서 몸을 웅크리고 자는 %SEX%를 잡을 수 있었다."
    - "%SEX%는 들켜도 당황하지 않았다. 눈을 비비고 느긋하게 하품한 뒤 천천히 %YOU%을(를) 따라 훈련장으로 돌아왔다."
    - "하지만 대부분은 %YOU%이(가) 있을 법한 곳을 전부 돌아도 허탕이었다."
    - "다음 날이면 %SEX%는 아무 일도 없었다는 듯 트레이너실 입구에 나타났다. 어제의 『실종』 따위는 전혀 신경 쓰지 않았다."
    - "그 이야기를 꺼낼 때마다 %SEX%는 늘 능청스러운 얼굴이었다. %SEX%는 %SEX%가 잘못했다며 다음엔 고치겠다고 했다."
    - "그러고는 이틀만 지나면 다시 사라졌다."
    - "%YOU%은(는) 이대로는 안 되겠다고 생각했다. %SEX%와 제대로 이야기할 필요가 있었다."
    -
    - "모처럼 훈련을 마친 날, %YOU%은(는) %SEX%에게 디저트를 먹으러 가자고 했다."
    - "케이크를 산 두 사람은 훈련장 한쪽에서 맛을 보았다. 저녁 햇살이 그림자를 길게 늘이는 가운데, %YOU%은(는) 조심스레 %SEX%에게 말을 꺼냈다."
    - "「스카이, 의논할 게 있어.」"
    - "「응?」"
    - "%SEX%는 고개를 기울이며 꼬리를 천천히 흔들었다."
    - "「요즘 훈련을 빠지는 게…… 좀 너무 잦지 않아……?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐…… 그렇긴 하죠……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괜찮아요, 트레이너 쌤! 내일은 절대 안 늦을게요!」"
    - "늘 하던 얼버무리기가 시작되자 %YOU%은(는) 바로 말을 끊었다."
    - "「크흠…… 오늘은 그 이야기가 아니야……」"
    - "「계획을 짜 봤어. 매일 훈련한다고 하루 종일 훈련장에 있으라는 건 아니야.」"
    - "「정해진 시간에만 오면 돼. 예를 들면 오전 두 시간, 오후 두 시간.」"
    - "「나머지는 자유야. 자고 싶으면 자고, 낚시하고 싶으면 해. 주말에도 쉴 수 있어. 하루든 이틀이든 네가 정해.」"
    - "%YOU%은(는) 잠시 말을 멈췄다. 이 정도면 충분히 느슨할 터였다."
    - "「매일 규칙적으로 시작하기만 하면 돼. 지금처럼 내키는 대로 돌아다니지만 않으면.」"
    - "%YOU%은(는) 규칙만 잡히면 나머지는 조금씩 고칠 수 있으리라 기대했지만."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어요.」"
    - "망설임 없는 단호한 대답이 %YOU%에게 돌아왔다."
    - "%YOU%은(는) 잠시 말문이 막혔다."
    - "「왜? 오후만 해도 괜찮아. 딱 두 시간만─」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫으면 싫은 거예요.」"
    - "세이운 스카이의 말투에서 평소의 능청스러움이 사라졌다. 뜻밖일 만큼 단단했다."
    - "%SEX%는 팔짱을 끼고 눈을 감은 채 고개를 돌렸다. 온몸으로 계획에 항의하고 있었다."
    - "%YOU%은(는) 다른 방향으로 설득해 보려 했다."
    - "「두 시간이 너무 많으면 한 시간부터 해도 돼. 시간도 네가 정해. 편한 때로 하나만─」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 싫다고요!」"
    - "%SEX%는 %YOU%의 말을 끊고 돌아서서 %YOU%을(를) 똑바로 바라보았다."
    - "%YOU%은(는) 입을 열어 무언가 말하려다가 %SEX%의 물러서지 않는 표정을 보고 말을 삼켰다."
    - "분위기가 조금 굳었다."
    - "세이운 스카이는 일어나 바지에 묻은 풀을 털었다. 말투는 다시 평소처럼 나른해졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 네─ 트레이너 쌤─ 내일은 올게요. 꼭 올 테니까!」"
    - "말을 마치고 손을 흔들더니 꼬리를 늘어뜨린 채 천천히 훈련장 출구로 사라졌다."
    - "%YOU%은(는) 그 자리에 앉아 %SEX%의 뒷모습을 바라보며 어쩔 줄 몰랐다……"

# 募集後一か月、ターン開始（ニシノフラワー未募集かつ好感75未満）
ws_cloud_wind_no_flw:
  title: "구름을 이끄는 바람"
  lines:
    - "지난 대화 이후 세이운 스카이는 조금 자제하는 모습을 보였다. 그래도 가끔은 여전히 제멋대로였다."
    - "또 사라졌다."
    - "%YOU%은(는) %SEX%가 자주 가는 곳을 돌아다닌 끝에 작은 정원 근처에서 %SEX%의 모습을 찾았다."
    - "%SEX%는 몸집이 작은 %UMA%와 무언가 이야기하고 있었다."
    - "둘은 즐거워 보였다. 세이운 스카이는 두 손을 뒤통수에 댄 채 좀처럼 보이지 않는 편안한 웃음을 짓고 있었다."
    - "몸집이 작은 %UMA%가 돌아보자 %YOU%은(는) %SEX%를 알아보았다─ 세이운 스카이를 영입할 때 %YOU%에게 길을 알려 준 상대였다. 당시 %SEX%는 자신이 세이운 스카이의 친구라고 했었다."
    - "%YOU%은(는) 당장 데리고 돌아가려다가 문득 생각을 바꿨다. %YOU%은(는) 걸음을 멈추고 %THEY%의 대화를 방해하지 않았다."
    - "그 %UMA%가 손을 흔들어 작별하고 강을 따라 멀어지자 %YOU%은(는) 서둘러 뒤쫓았다. 목적은 세이운 스카이가 아니라 %SEX%의 친구였다."
    - "「안녕하세요, 잠깐 괜찮을까요?」"
    - "몸집이 작은 %UMA%가 돌아보고는 %YOU%을(를) 발견하자 눈을 빛냈다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: "몸집이 작은 %UMA%"
        - "「아, 안녕하세요. 그때 트레이너님이시군요. 세이운 스카이 씨와 계약하셨다고 %SEX%에게 들었어요.」"
    - "「응. 그때는 꽤 고생했지.」"
    - "%YOU%은(는) 웃었다."
    - "「참, 아직 제대로 인사를 못 했네. 그때 길 알려 줘서 고마워.」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: "몸집이 작은 %UMA%"
        - "「아니에요, 감사드려야 할 사람은 저예요. 세이운 스카이 씨를 도와주셔서 감사합니다.」"
    - "%SEX%는 황급히 손을 내젓더니 오히려 고개를 숙였다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「아, 맞다. 저는 니시노 플라워라고 해요.」"
    - "「잘 부탁해.」"
    - "%YOU%은(는) 고개를 끄덕이고 잠시 망설인 뒤 도움을 청했다."
    - "「사실 물어보고 싶은 게 있어. 세이운 스카이는…… 조금 감당하기 어렵더라고.」"
    - "니시노 플라워가 살짝 고개를 기울였다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「감당하기 어려우시다니…… 구체적으로 어떤 부분인가요?」"
    - "%YOU%은(는) 최근의 사정을 대략 설명했다─ %SEX%가 약속한 훈련 시간을 지키지 않는다는 것, 정해 놓은 일정조차 %SEX%가 마음대로 바꿔 버린다는 것."
    - "지난 대화에서는 크게 양보했는데도 %SEX%가 의논할 여지조차 주지 않았다는 것도."
    - "「%SEX%의 트레이너로서 %SEX%에게 맞는 방법을, 아니, 우리 둘에게 맞는 방법을 찾고 싶어.」"
    - "「그런데…… 하아……」"
    - "니시노 플라워는 조용히 끝까지 듣고 잠시 생각한 뒤 입을 열었다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「네…… 사실 스카이 씨 말인데요, %SEX%는 약속을 어기는 걸 좋아하는 사람이 아니에요.」"
    - "「응?」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「아마 %SEX%를 얽매는 일에만…… 그럴 거예요.」"
    - "「얽맨다고?」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「네. 스카이 씨는 자유로운 느낌을 좋아해서 『이렇게 해야만 한다』는 걸 무척 힘들어해요.」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「%SEX%에게는 모든 게 자연스럽게 흘러가는 게 좋은 거예요.」"
    - "「하지만 나는 %SEX%의 트레이너야. %SEX%를 책임져야 해. 마음대로 하게 두기만 하면 결국 욕심에 빠져 버릴 뿐이잖아.」"
    - "니시노 플라워는 바로 답하지 않고 고개를 조금 숙여 생각하다가 다시 들었다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「음…… %SEX%의 발걸음에 맞춰 보시면 어떨까요?」"
    - "「%SEX%의 발걸음에?」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「네─ %SEX%에게 트레이너님은 %SEX%를 얽매는 족쇄가 아니라 %SEX%의 친구라는 걸 알려 주시는 거예요.」"
    - "%YOU%은(는) 그 자리에 서서 니시노 플라워의 진지한 얼굴을 보며 생각에 잠겼다."
    - "「한번 해 볼게.」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「네!」"
    - "니시노 플라워는 힘차게 고개를 끄덕였다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「트레이너님을 믿어요. 스카이 씨를 이렇게 책임감을 가지고 대해 주셔서 정말 감사합니다.」"
    - "헤어진 뒤 %YOU%은(는) 강가로 돌아왔다."
    - "돌아오는 길에도 %YOU%은(는) 계속 생각했다."
    -
    - "다음 날."
    - "세이운 스카이는 느릿느릿 오전 훈련을 끝냈다."
    - "%SEX%는 훈련장 벤치에 앉아 물을 마시며 %YOU%을(를) 슬쩍슬쩍 보았다. 뭔가 요구할 생각인 듯했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤~」"
    - "「응?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「점심 먹고 잠깐 낮잠 잘까요~」"
    - "%SEX%의 말투는 가벼웠지만 눈은 %YOU%의 반응을 조심스럽게 살폈다."
    - "%YOU%은(는) %SEX%의 속셈을 알았다─ %YOU%에게 거절당하면 오후에 어떻게 빠져나갈지 생각할 작정이었다."
    - "「좋아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(하아, 역시. 어떻게 빠져나갈까~…… 어, 잠깐!)"
    - "세이운 스카이는 움직임을 멈추고 자신이 잘못 들은 건 아닌지 의심했다."
    - "「마침 나도 쉬고 싶었어.」"
    - "%YOU%은(는) 일어나 기지개를 켰다."
    - "「스카이, 낮잠 자기 좋은 곳 추천해 줄래?」"
    - "세이운 스카이는 멍해져 저도 모르게 몸을 뒤로 뺐다. 믿기 힘든 것을 본 듯했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……진심이에요?」"
    - "%SEX%의 목소리에는 뚜렷한 의심이 묻어났다. 귀는 꼿꼿이 서고 꼬리는 허공에서 멈췄다."
    - "「진심이야.」"
    - "「가자. 오늘 점심은 함박스테이크래.」"
    - "말을 마친 %YOU%은(는) 식당 쪽으로 걸으며 손을 흔들어 %SEX%를 불렀다."
    - "세이운 스카이는 그 자리에서 눈을 한 번, 또 한 번 깜빡였다."
    - "그러다 %SEX%는 정신을 차리고 종종걸음으로 따라와 작게 중얼거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 트레이너 쌤…… 드디어 깨달으셨나?」"
    -
    - "그 뒤로 세이운 스카이가 훈련을 빠지는 횟수는 줄어들었다."
    - "%SEX%가 갑자기 고분고분해져서가 아니었다. %YOU%이(가) %SEX%의 리듬을 따라갈 수 있게 되었기 때문이다."
    - "그때부터 %SEX%가 사라져도 %YOU%은(는) %SEX%를 찾아낼 수 있었다─ 나무 아래, 강가, 옥상 구석에서."
    - "달라진 점은 %SEX%를 찾은 뒤에도 %YOU%이(가) 바로 %SEX%를 훈련장으로 끌고 가지 않는다는 것이었다."
    - "%YOU%이(가) 앉아서 %SEX%와 함께 수면의 찌를 바라보기도 했다."
    - "%YOU%이(가) 말을 늘어놓고 %SEX%와 장기를 두기도 했다─ 매번 금방 졌지만."
    - "%YOU%이(가) 아무것도 하지 않고 %SEX% 옆 나무줄기에 기대어 눈을 감고, 바람이 잎을 스치는 소리를 듣기도 했다."
    - "%SEX%는 자유를 만끽했고 %YOU%은(는) %SEX%의 자유에 함께했다."
    - "충분히 즐긴 뒤 살며시 %SEX%를 본궤도로 이끌었다……"
    - "%YOU%은(는) %SEX%를 최대한 만족시켜 주면서도 그 정도를 신중히 조절했다."
    - "이토록 독특한 레이스 %UMA%의 트레이너가 해야 할 일은 억지로 고치는 것이 아니라 이끄는 것임을 %YOU%은(는) 이해하기 시작했다."
    - "바람처럼─ 너무 강하면 구름은 흩어지고, 너무 약하면 구름을 따라잡지 못한다."
    - "알맞은 바람이 불 때, 구름은 그 걸음에 맞춰 하늘을 누빈다."


# 募集後一か月、ターン開始（ニシノフラワー募集済み、または好感75超）
ws_cloud_wind_flw:
  title: "구름을 이끄는 바람"
  lines:
    - "지난 대화 이후 세이운 스카이는 조금 자제하는 모습을 보였다. 그래도 가끔은 여전히 제멋대로였다."
    - "또 사라졌다."
    - "%YOU%은(는) %SEX%가 자주 가는 곳을 돌아다닌 끝에 작은 개울가에서 %SEX%의 모습을 찾았다."
    - "%SEX%는 물가에 서서 니시노 플라워와 무언가 이야기하고 있었다."
    - "둘은 즐거워 보였다. 세이운 스카이의 얼굴에는 좀처럼 보이지 않는 편안한 미소가 떠올라 있었다."
    - "%YOU%은(는) 당장 데리고 돌아가려다가 문득 생각을 바꿨다. %YOU%은(는) 걸음을 멈추고 %THEY%의 대화를 방해하지 않았다."
    - "%SEX%가 니시노 플라워에게 손을 흔들어 작별하고 강을 따라 멀어지자 %YOU%은(는) 서둘러 뒤쫓았다. 목적은 세이운 스카이가 아니라 니시노 플라워였다."
    - "「니시노 플라워! 잠깐만.」"
    - "니시노 플라워가 돌아보고 %YOU%을(를) 발견하자 눈을 빛냈다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「아, 트레이너님! 세이운 스카이 씨한테 들었어요. 벌써 %SEX%와 계약하셨다면서요.」"
    - "「응. 그때는 꽤 고생했지.」"
    - "%YOU%은(는) 웃었다."
    - "「참, 아직 제대로 인사를 못 했네. 그때 길 알려 줘서 고마워.」"
    - "%SEX%는 황급히 손을 내젓더니 오히려 고개를 숙였다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「아니에요, 감사드려야 할 사람은 저예요. 세이운 스카이 씨를 도와주셔서 감사합니다.」"
    - "%YOU%은(는) 쑥스럽게 머리를 긁적이고 잠시 망설인 뒤 도움을 청했다."
    - "「사실 물어보고 싶은 게 있어. 세이운 스카이는…… 조금 감당하기 어렵더라고.」"
    - "니시노 플라워가 살짝 고개를 기울였다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「감당하기 어려우시다니…… 구체적으로 어떤 부분인가요?」"
    - "%YOU%은(는) 최근의 사정을 대략 설명했다─ %SEX%가 약속한 훈련 시간을 지키지 않는다는 것, 정해 놓은 일정조차 %SEX%가 마음대로 바꿔 버린다는 것."
    - "지난 대화에서는 크게 양보했는데도 %SEX%가 의논할 여지조차 주지 않았다는 것도."
    - "「%SEX%의 트레이너로서 %SEX%에게 맞는 방법을, 아니, 우리 둘에게 맞는 방법을 찾고 싶어.」"
    - "「그런데…… 하아……」"
    - "니시노 플라워는 조용히 끝까지 듣고 잠시 생각한 뒤 입을 열었다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「스카이 씨 말인데요, %SEX%는 약속을 어기는 걸 좋아하는 사람이 아니에요.」"
    - "「응?」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「아마 %SEX%를 얽매는 일에만…… 그럴 거예요.」"
    - "「얽맨다고?」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「네. 스카이 씨는 자유로운 느낌을 좋아해서 『이렇게 해야만 한다』는 걸 무척 힘들어해요.」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「%SEX%에게는 모든 게 자연스럽게 흘러가는 게 좋은 거예요.」"
    - "「하지만 나는 %SEX%의 트레이너야. %SEX%를 책임져야 해.」"
    - "니시노 플라워는 바로 답하지 않고 고개를 조금 숙여 생각하다가 다시 들었다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「음…… %SEX%의 발걸음에 맞춰 보시면 어떨까요?」"
    - "「%SEX%의 발걸음에?」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「네─ %SEX%에게 트레이너님은 %SEX%를 얽매는 족쇄가 아니라 %SEX%의 친구라는 걸 알려 주시는 거예요.」"
    - "%YOU%은(는) 그 자리에 서서 니시노 플라워의 진지한 얼굴을 보며 생각에 잠겼다."
    - "「한번 해 볼게.」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「네!」"
    - "니시노 플라워는 힘차게 고개를 끄덕였다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「트레이너님을 믿어요. 스카이 씨를 이렇게 책임감을 가지고 대해 주셔서 정말 감사합니다.」"
    - "헤어진 뒤 %YOU%은(는) 강가로 돌아왔다."
    - "돌아오는 길에도 %YOU%은(는) 계속 생각했다."
    -
    - "다음 날."
    - "세이운 스카이는 느릿느릿 오전 훈련을 끝냈다."
    - "%SEX%는 훈련장 벤치에 앉아 물을 마시며 %YOU%을(를) 슬쩍슬쩍 보았다. 뭔가 요구할 생각인 듯했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤~」"
    - "「응?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「점심 먹고 잠깐 낮잠 잘까요~」"
    - "%SEX%의 말투는 가벼웠지만 눈은 %YOU%의 반응을 조심스럽게 살폈다."
    - "%YOU%은(는) %SEX%의 속셈을 알았다─ %YOU%에게 거절당하면 오후에 어떻게 빠져나갈지 생각할 작정이었다."
    - "「좋아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(하아, 역시. 어떻게 빠져나갈까~…… 어, 잠깐!)"
    - "세이운 스카이는 움직임을 멈추고 자신이 잘못 들은 건 아닌지 의심했다."
    - "「마침 나도 쉬고 싶었어.」"
    - "%YOU%은(는) 일어나 기지개를 켰다."
    - "「스카이, 낮잠 자기 좋은 곳 추천해 줄래?」"
    - "세이운 스카이는 멍해져 저도 모르게 몸을 뒤로 뺐다. 믿기 힘든 것을 본 듯했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……진심이에요?」"
    - "%SEX%의 목소리에는 뚜렷한 의심이 묻어났다. 귀는 꼿꼿이 서고 꼬리는 허공에서 멈췄다."
    - "「진심이야.」"
    - "「가자. 오늘 점심은 함박스테이크래.」"
    - "말을 마친 %YOU%은(는) 식당 쪽으로 걸으며 손을 흔들어 %SEX%를 불렀다."
    - "세이운 스카이는 그 자리에서 눈을 한 번, 또 한 번 깜빡였다."
    - "그러다 %SEX%는 정신을 차리고 종종걸음으로 따라와 작게 중얼거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 트레이너 쌤…… 드디어 깨달으셨나?」"
    -
    - "그 뒤로 세이운 스카이가 훈련을 빠지는 횟수는 줄어들었다."
    - "%SEX%가 갑자기 고분고분해져서가 아니었다. %YOU%이(가) %SEX%의 리듬을 따라갈 수 있게 되었기 때문이다."
    - "그때부터 %SEX%가 사라져도 %YOU%은(는) %SEX%를 찾아낼 수 있었다─ 나무 아래, 강가, 옥상 구석에서."
    - "달라진 점은 %SEX%를 찾은 뒤에도 %YOU%이(가) 바로 %SEX%를 훈련장으로 끌고 가지 않는다는 것이었다."
    - "%YOU%이(가) 앉아서 %SEX%와 함께 수면의 찌를 바라보기도 했다."
    - "%YOU%이(가) 말을 늘어놓고 %SEX%와 장기를 두기도 했다─ 매번 금방 졌지만."
    - "%YOU%이(가) 아무것도 하지 않고 %SEX% 옆 나무줄기에 기대어 눈을 감고, 바람이 잎을 스치는 소리를 듣기도 했다."
    - "%SEX%는 자유를 만끽했고 %YOU%은(는) %SEX%의 자유에 함께했다."
    - "충분히 즐긴 뒤 살며시 %SEX%를 본궤도로 이끌었다……"
    - "%YOU%은(는) %SEX%를 최대한 만족시켜 주면서도 그 정도를 신중히 조절했다."
    - "이토록 독특한 레이스 %UMA%의 트레이너가 해야 할 일은 억지로 고치는 것이 아니라 이끄는 것임을 %YOU%은(는) 이해하기 시작했다."
    - "바람처럼─ 너무 강하면 구름은 흩어지고, 너무 약하면 구름을 따라잡지 못한다."
    - "알맞은 바람이 불 때, 구름은 그 걸음에 맞춰 하늘을 누빈다."


# メイクデビュー（前）
before_begin_race:
  title: "첫 낚시"
  lines:
    - "출전 전 대기실에서 %YOU%과(와) 세이운 스카이는 호출을 기다리고 있었다."
    - "세이운 스카이는 벤치 끝에 앉아 초조하게 옷자락을 손가락에 감았다 풀었다 했다."
    - "%YOU%은(는) 물을 들고 %SEX% 옆에 앉았다."
    - "「처음엔 누구나 조금 긴장해.」"
    - "「너무 생각하지 마. 평소 훈련이랑 똑같아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……긴장한 거 아니에요.」"
    - "%SEX%는 출발 게이트를 슬쩍 보았다."
    - "입장 안내 방송이 흐르자 세이운 스카이는 일어나 기지개를 켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후아아~ 생각보다 환호가 뜨겁네요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이가 어쩌다 이겨 버리면 놀라실 건가요?」"
    - "세이운 스카이가 짓궂게 물었다."
    - "「당연하지. 그러니까 힘내서 다녀와.」"
    - "%SEX%는 눈을 깜빡였다. 원하던 답을 얻은 모양이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이기면~ 오후엔 같이 농땡이 피워 주세요~」"
    - "가벼운 말투 그대로 두 손을 뒤통수에 대고 천천히 트랙으로 향했다."


# メイクデビュー（勝）
begin_race_win:
  title: "낚싯대를 드리우다"
  lines:
    - "결승선을 통과할 때, 세이운 스카이는 완벽한 도주로 선두를 지켰다."
    - "%SEX%는 압도적인 힘으로 레이스 내내 선두를 지켰다."
    - "%YOU%은(는) 물과 수건을 들고 경기장 밖에서 %SEX%를 기다렸다."
    - "세이운 스카이는 느릿느릿 %YOU%에게 걸어왔다."
    - acc: 1
      content: "「깔끔한 승리였어!」"
    - "%YOU%은(는) 아낌없이 칭찬했다."
    - "갑자기 세이운 스카이가 비명을 질렀다."
    - "그러더니 맥없이 %YOU%에게 쓰러져 왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아아─ 더는 안 되겠어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이는 한 발짝도 못 걷겠어요~」"
    - "세이운 스카이는 %YOU%에게 어리광 부리듯 외쳤다."
    - "%SEX%가 다친 줄 안 %YOU%은(는) 놀라서 얼른 %SEX%를 부축했다."
    - "「왜 그래? 다리 다쳤어? 들것 불러 줄까?」"
    - "세이운 스카이가 못마땅한 얼굴로 고개를 들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말─ 이럴 땐 먼저 세이를 다정하게 안아 주셔야죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러고는 여기까지 걸어온 세이를 따뜻하게 칭찬해 주시는 거예요……」"
    - "여전히 장난을 치는 세이운 스카이를 보고 %YOU%은(는) 가슴을 쓸어내렸다."
    - "「괜찮으면 됐어. 그런데 못 걷겠다니 무슨 뜻이야? 첫 레이스라 체력 배분을 잘못했어?」"
    - "세이운 스카이는 손가락 하나를 세우며 짓궂게 웃었다."
    - "그러고는 까치발을 하고 %YOU%의 귓가로 다가갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「생각하느라요…… 너무 열심히 생각해서 다리가 저절로 끝까지 달렸네요.」"
    - "「생각했다고?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지금 트레이너 쌤은 어떤 표정으로 세이를 보고 계실까, 하고요.」"
    - "%SEX%는 반 걸음 물러나 %YOU%의 반응을 살피고는 만족스럽게 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응, 응, 그 표정. 생각했던 그대로네요.」"
    - "%YOU%은(는) 쓴웃음을 지으며 레이스 전 %SEX%가 안절부절못하던 모습을 떠올렸다."
    - "「너 말이야─ 여유 넘치네.」"
    - "%YOU%은(는) %SEX%에게 수건을 건넸다."
    - "「대기실에서는 이런 표정 아니었잖아.」"
    - "세이운 스카이는 잠시 멍해졌다가 한숨을 쉬었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에이, 좁은 곳은 정말 싫거든요.」"
    - "「좁은 곳?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게이트요, 게이트!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게이트에 들어가는 거, 시간 낭비 같지 않아요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 막혀 있고 좁고…… 하아……」"
    - "세이운 스카이는 혼자 계속 투덜거렸다."
    - "그렇게 %SEX%의 끊이지 않는 푸념과 함께 메이크 데뷔에서 무사히 승리했다."
    - "훈련은…… 우선 며칠간 %SEX%를 푹 쉬게 해 주자."


# メイクデビュー（勝）クラシック級2月1週、ターン開始
ws_47_5:
  title: "바람이 일자 구름은 말처럼 달리고"
  lines:
    - "메이크 데뷔의 승리는 깃털처럼 가볍게 내려앉아 세이운 스카이의 마음에 거의 파문을 남기지 않았다."
    - "%SEX%는 여전히 매일 낚시하고 고양이에게 밥을 주며, 학원 구석구석에서 가장 편안한 낮잠 장소를 찾았다."
    - "훈련 일정에 반발하지는 않았지만 적극적이라고 하기도 어려웠다."
    - "출전 계획은 전부 %YOU%에게 맡겨 놓고 자신은 느긋하게 지냈다."
    - "%YOU%은(는) %SEX%의 재능과 소질을 믿었다."
    - "물살과 바람을 읽는 눈, 기발한 발상은 트랙 위에서 선명한 푸른빛이 될 터였다."
    - "지금 %SEX%는 그 재능을 오후에 햇빛이 들지 않을 나무 그늘을 계산하는 데 쓰고 있을 뿐이었다."
    - "%YOU%은(는) 그런 %SEX%가 너무 아깝다고 생각했다."
    - "%SEX%가 이 여유 속에 완전히 늘어지기 전에 %YOU%은(는) 뭔가 해야겠다고 느꼈다."
    - "그래서 %YOU%은(는) 야요이상의 출전 명단을 꺼냈다."
    - "클래식 3관 중 하나인 사츠키상의 전초전이기도 하고……"
    - "「야요이상이야. 다음 달.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음, 좋아요~」"
    - "세이운 스카이는 보지도 않고 답했다."
    - "「응, 그리고……」"
    - "「스페셜 위크와 킹 헤일로도 나와. 최근 %THEY%의 상태가 둘 다 좋아.」"
    - "「이번엔 쉽지 않을 거야……」"
    - "세이운 스카이는 잡지를 넘기던 손을 멈추고 귀를 세웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐음, 스페랑 킹이라…… %THEY% 둘 다 강하죠.」"
    - "말을 마치고 다시 잡지를 읽기 시작했다."
    - "「무서워? 지금이라면 아직 늦지 않았어.」"
    - "세이운 스카이는 잡지를 덮고 손끝으로 출전 명단을 두 번 가볍게 두드렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 세이한테 부족한 건 많아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만요─ 먹잇감을 놓아줄 생각은 없어요.」"
    - "그 뒤 한 달 동안 %SEX%는 겉으로 보기엔 평소와 같았다."
    - "농땡이 피우는 횟수는 줄지 않았고, 낮잠 장소는 계속 늘어났다."
    - "고양이에게 먹이를 줄 때는 이번 주 기분까지 맞혔다."
    - "하지만 %YOU%은(는) %SEX%의 변화를 알아보았다─"
    - "농땡이를 피우는 틈틈이 %SEX%의 시선이 훈련장 저편으로 향했다. 스페셜 위크와 킹 헤일로가 달리는 곳이었다."
    - "게을러 보이는 고양이가 조용히 먹잇감이 다가오기를 기다리는 듯했다……"


before_hoch_sho:
  title: "야요이상(전)"
  lines:
    - "레이스 전 대기실에서 %YOU%과(와) 세이운 스카이는 방 안의 텔레비전을 보고 있었다."
    - "진행자가 이번 레이스의 인기 주자들을 열띠게 분석하는 목소리가 스피커를 통해 방 안을 채웠다."
    - "화면에는 사전 인터뷰가 차례로 나왔고 각 언론이 결과를 예측했다."
    - "관중석의 소란은 벽 너머로도 들렸다─ 열성적인 팬들이 저마다 의견을 주고받고 있었다."
    - "그 뜨거운 토론에서 가장 자주 거론되는 이름은 당연히 스페셜 위크와 킹 헤일로였다."
    - "두 사람의 이름이 거듭 언급되었고, %THEY%의 근황을 분석한 기사는 눈에 띄는 제목으로 실렸다."
    - "세이운 스카이의 이름은 인쇄에서 빠진 한 줄처럼 압도적인 관심 속에서 거의 자리를 얻지 못했다."
    - "%YOU%은(는) 옆의 세이운 스카이를 보았다. %SEX%는 느긋하게 의자에 늘어져 있었고 초조한 기색은 전혀 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐음…… 관심이 별로 없네요.」"
    - "세이운 스카이는 손가락 두 개를 턱에 대고 의미심장하게 말했다."
    - "그 모습을 본 %YOU%은(는) 지난달의 대화를 떠올렸다."
    - "%SEX%는 늘 이렇게 여유가 있었다. 고양이처럼 게을러 보이면서 먹잇감이 방심하는 한순간을 기다렸다."
    - "지금 %YOU%은(는) 어렴풋이 느꼈다. 사냥꾼은 이미 조용히 눈을 뜨고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋네요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스페랑 킹은 저렇게 둘러싸여서 움직일 때마다 수십 개의 시선이 따라붙잖아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%THEY%는 대단해요. 저렇게 기대받으면서도 달릴 수 있으니까.」"
    - "%YOU%은(는) %SEX%를 바라보며 말속에 다른 감정이 담긴 듯 느꼈다. 부러움인지, 낙담인지, 아니면 둘 다인지."
    - "「너도 대단해. 내 파트너는 %THEY%에게 뒤지지 않아.」"
    - "%YOU%의 격려를 듣고 세이운 스카이는 재미있다는 듯 답했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤, 트레이너 쌤은 세이를 믿으시는군요~」"
    - "방송이 첫 소집을 알렸다."
    - "세이운 스카이는 일어나 몸을 풀었다."
    - "나가기 전 돌아서서 %YOU%을(를) 불렀다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「한 달 전에 했던 말, 기억하세요?」"
    - "%YOU%은(는) %SEX%를 보았다. 푸른 눈동자가 통로의 불빛 아래 투명하게 빛났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번에는……」"
    - "%SEX%는 반 초쯤 멈추더니, 도전 의지가 담긴 미소를 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「조금은 기대하셔도 돼요.」"
    - "말을 마치고 게이트로 향했다."
    - "강적의 압박도 %SEX%를 흔들지는 못했다."
    - "걸음에는 여전히 %SEX% 특유의 느긋한 리듬이 있었다."


hoch_sho_win:
  title: "야요이상(승)"
  lines:
    - "최종 직선에 접어들자 승부의 윤곽이 드러나기 시작했다."
    - "스페셜 위크는 바깥쪽에서 힘을 모았다. 묵직하고 우렁찬 발소리가 다가오는 유성 같았다."
    - "킹 헤일로는 중앙을 차지했고, 한 걸음마다 의심할 여지 없는 왕의 기백을 내뿜었다."
    - "세이운 스카이는 여전히 선두를 달리고 있었다."
    - "바람, 발소리, 호흡, 관중의 함성─ 모든 소리가 뒤섞여 그 푸른 등을 향해 밀려들었다."
    - "세 사람의 간격이 점점 좁아졌다."
    - "갑자기 세이운 스카이의 눈에 날카로운 빛이 스쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(기회는…… 지금이야!)"
    - "세이운 스카이의 몸이 가볍게 앞으로 뻗었다."
    - "폭발적인 스퍼트가 아니었다. 도주의 리듬을 그대로 한 단계 끌어올렸을 뿐이었다."
    - "보폭은 길어지고 피치는 흐트러지지 않았다. 뒤에 붙은 두 그림자와 반 마신의 간격이 벌어졌다."
    - "마지막 순간 선명한 푸른빛이 결승선을 통과했다. 모든 것이 당연한 결과처럼 보였다."
    -
    - "돌아온 세이운 스카이의 얼굴에는 감추지 못한 흥분이 가득했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어때요, 트레이너 쌤. 세이 때문에 놀라셨나요?」"
    - "억누르지 못한 자랑스러움을 말투에 숨긴 채 일부러 아무렇지 않게 묻는 척했다."
    - "「멋졌어. 예상을 완전히 뛰어넘었어!」"
    - "%SEX%는 %YOU%이(가) 건넨 물을 받아 고개를 젖히고 몇 모금 마셨다. 호흡은 아직 가빴다."
    - "물방울이 턱을 타고 흘렀다. %SEX%는 손으로 닦고는 더 기다릴 수 없다는 듯 입을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아까 마지막 코너에서 스페의 호흡 리듬이 바뀌었어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹도요. 가장 바른 자세를 유지하려다가 후반에 힘이 모자랐죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%THEY%의 평소 연습에도 그런 약점이 있어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%THEY%의 빈틈이 드러나는 그 일 초만 잡으면─」"
    - "%SEX%가 득의양양하게 자신의 걸작을 설명하자 %YOU%은(는) 지난 한 달간 %SEX%의 일상을 떠올렸다."
    - "다른 이들이 힘겨운 훈련을 하는 동안 %SEX%는 자는 것처럼 보였지만, "
    - "실은 모든 상대의 약점을 몰래 관찰하고 있었던 것이다."
    - "「평소 농땡이도 그냥 놀던 게 아니었구나.」"
    - "「이 전략은 보통 사람이 배울 수 있는 게 아니야─」"
    - "%YOU%의 감상을 들은 세이운 스카이는 눈을 깜빡이고 교활하게 입꼬리를 올렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤~ 글쎄요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이는 정말 쉬고 있었을 뿐인데요~」"
    - "─그 말투는 분명 『비밀이에요』라고 말하고 있었다."
    -
    - "멀리서 진행 요원이 부르는 소리가 들렸다. %SEX%는 그쪽을 슬쩍 보고 다시 고개를 돌렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아! 주최 측에서 인터뷰하재요. 이따 봐요, 트레이너 쌤!」"
    - "%SEX%는 일어나 물통을 돌려주고 몸을 돌리려 했다─"
    - "「스카이─」"
    - "%YOU%은(는) %SEX%를 불러 세웠다."
    - "세이운 스카이는 돌아보며 의아하게 눈을 깜빡였다."
    - "%YOU%은(는) 아직도 떠들썩한 관중석을 가리켰다."
    - "환호는 파도처럼 겹겹이 밀려왔다. 누구를 향하는지 분명하지 않았지만 지금 이 순간, 그 일부는 확실히 %SEX%의 것이었다."
    - "「이 환호…… 어때?」"
    - "%SEX%는 %YOU%의 손끝을 따라 시선을 옮겨 흔들리는 응원 도구들을 잠시 바라보았다."
    - "「더 받고 싶어?」"
    - "%SEX%는 고개를 기울였다. 진지하게 생각하는 듯했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 혹시……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「메이크 데뷔를 거쳐 야요이상에서 이기고, 스페랑 킹 같은 상대를 만나 봤으니……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이가 벌써 『한계』에 왔다고 생각하세요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아까 결승선을 통과하면서 생각했어요…… 『클래식 3관』의 트랙이라면……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「거긴 물고기가 더 클 거라고요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「출전이랑 훈련은…… 트레이너 쌤한테 맡길게요~」"


hoch_sho_lose:
  title: "야요이상(패)"
  lines:
    - "최종 직선에 접어들자 승부의 윤곽이 드러나기 시작했다."
    - "스페셜 위크는 바깥쪽에서 힘을 모았다. 강력한 막판 가속을 실은 발걸음은 묵직하고 우렁차서 눈부신 유성 같았다."
    - "킹 헤일로는 중앙을 차지했고, 한 걸음마다 의심할 여지 없는 왕의 기백을 내뿜었다."
    - "세이운 스카이는 여전히 선두를 달리고 있었다."
    - "뒤의 두 사람이 급류처럼 몰려들며 세 사람의 간격이 점점 좁아졌다."
    - "바람, 발소리, 호흡, 관중의 함성. 온갖 소음이 번갈아 일었다."
    - "갑자기 세이운 스카이의 눈에 날카로운 빛이 스치고 %SEX%의 입술이 살짝 움직였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「기회는…… 지금이야!」"
    - "세이운 스카이의 몸이 가볍게 앞으로 뻗었다."
    - "폭발적인 스퍼트가 아니었다. 도주의 리듬을 그대로 한 단계 끌어올렸을 뿐이었다."
    - "하지만 이번에 뒤에서 몰려오는 『급류』는 %SEX%의 예상보다 거셌다."
    - "스페셜 위크의 막판 가속이 마지막 이백 미터에서 완전히 폭발하며 승부를 결정지었다."
    -
    - "돌아온 세이운 스카이는 차분한 얼굴로 눈에 들어가려는 땀을 손으로 닦았을 뿐이었다."
    - "%SEX%는 %YOU%이(가) 건넨 물을 받아 고개를 젖히고 몇 모금 마셨다. 호흡은 아직 가빴다."
    - "%YOU%이(가) %SEX%를 위로하려던 순간, %SEX%가 먼저 입을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아까 마지막 코너에서 스페의 호흡 리듬이 바뀌었어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹도요. 가장 바른 자세를 유지하려다가 후반에 힘이 모자랐죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 두 빈틈은 잡았어요. 하지만 부족했죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아요. 물고기가 미끼를 무는 건 보여요. 하지만 끌어올릴 수 있느냐는…… 다른 문제잖아요?」"
    - "세이운 스카이는 자조적으로 웃었다."
    - "그러고는 고개를 숙인 채 말이 없었다."
    - "그때 %YOU%이(가) 살며시 %SEX%를 불렀다."
    - "「스카이.」"
    - "「이 함성…… 다음엔 네가 듣게 해 줄게.」"
    - "%YOU%은(는) 아직도 떠들썩한 관중석을 가리켰다. 환호는 승자에게 쏟아지고 있었다."
    - "세이운 스카이는 몇 초간 침묵했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「혹시…… 이 정도로 지면 세이가 『포기』할 거라고 생각하세요?」"
    - "%SEX%는 고개를 들고 %YOU% 너머 멀리 비어 있는 트랙을 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아까 결승선을 지나서 생각했어요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「클래식 3관의 트랙은 물이 더 깊고 물고기도 더 클 거라고.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음에는─ 안 놓쳐요.」"


# 弥生賞勝
before_sats_sho_hw:
  title: "사츠키상(전)"
  lines:
    - fontSize: 1.2rem
      content: "레이스 전, 관중석─"
    - content:
        - fontWeight: bold
          content: "관중 A"
        - "「이봐, 형씨. 누가 이길 것 같아?」"
    - content:
        - fontWeight: bold
          content: "관중 B"
        - "「스페셜 위크지. 이번엔 %SEX%한테 2000마폐 걸었어. %SEX%의 막판 가속은 확실하거든.」"
    - content:
        - fontWeight: bold
          content: "관중 C"
        - "「나도 스페셜 위크. 그래도 킹 헤일로도 위협적이야.」"
    - content:
        - fontWeight: bold
          content: "관중 A"
        - "「응, 응, 그렇지.」"
    - content:
        - fontWeight: bold
          content: "관중 A"
        - "「어? 저거 세이운 스카이지? 지난번 야요이상은 %SEX%가 이겼잖아.」"
    - content:
        - fontWeight: bold
          content: "관중 B"
        - "「흥, %SEX%? 신경 쓰지 마. 명문 출신도 아니고, %SEX%가 훈련을 자주 빼먹는단 소리도 들려. 출주자다운 꼴이 아니야.」"
    - content:
        - fontWeight: bold
          content: "관중 B"
        - "「지난번에 %SEX%가 이긴 건 하늘이 한번 도와줘서 %SEX%한테 이변을 허락한 거겠지.」"
    - content:
        - fontWeight: bold
          content: "관중 B"
        - "「이번엔 사츠키상이야. 클래식 3관의 첫 레이스라고. %SEX%가 어물쩍 끼어들 자리가 아니지.」"
    - content:
        - fontWeight: bold
          content: "관중 C"
        - "「그렇게 말하지 마. 여기 나온 것부터 실력은 충분하단 뜻이잖아.」"
    - content:
        - fontWeight: bold
          content: "관중 C"
        - "「다만 지금까지 수치를 보면 %SEX%의 지지율이 계속 높지 않았던 건 사실이지.」"
    -
    - fontSize: 1.2rem
      content: "패독─"
    - "%YOU%은(는) 장비를 점검하고 있다."
    - "세이운 스카이는 지루한 듯 책상에 엎드려 팔에 얼굴을 묻었다. 그 느슨한 모습은 곧 레이스에 나갈 사람 같지 않았다."
    - "%SEX%는 팔에 볼을 눌러 한쪽 볼이 부풀었고, 눈꺼풀은 금방이라도 감길 듯했다."
    - "%YOU%은(는) 조용히 %SEX% 곁에서 곧 있을 소집을 기다렸다."
    - "갑자기 세이운 스카이가 입을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아요, 트레이너 쌤. 뭔가 깨달았다고 느낀 순간이 있으세요?」"
    - acc: 1
      content: "「어─ 예를 들면?」"
    - "%SEX%는 엎드렸던 몸을 옆으로 돌리고 팔에 머리를 얹은 채 작전판을 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까, 음……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「야요이상까지 땄는데 이번에도 지지율은 낮잖아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「남들이 보기엔 지난번 성적도 그냥 이변이었던 거겠죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오는 길에 들었어요. 세이 성적을 보고 코웃음 치더라고요.」"
    - "「그런 시선은 신경 쓰지 마.」"
    - "「평가는 실력으로 뒤집으면 돼.」"
    - "세이운 스카이는 무의식적으로 책상 위에 손가락으로 원을 그리기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 너무 깊이 생각하시네요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이는 그렇게 신경 안 써요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 사람들 눈엔 목표도 없는 게으름뱅이겠죠. 훈련 빠지고, 늦잠 자고, 먹고 놀기만 하니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「겉으로 드러난 것만 보면─ 맞는 말이죠~」"
    - "「그래서 네 성적이 운 덕분이라고 생각해?」"
    - "「나는 한 번도 그렇게 생각한 적 없어.」"
    - "「그게 네 방식이잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음…… 글쎄요~」"
    - "세이운 스카이는 몸을 일으켜 의자에 기대고 두 손을 뒤통수에 댄 채 천장을 보았다."
    - "세간의 평가는 %SEX%의 가벼운 말투에 아무 흔적도 남기지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만요─」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이렇게 탁한 물에서 정말 뭔가를 낚아 올린다면……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 광경, 꽤 재밌을 것 같지 않아요?」"
    - "%SEX%는 고개를 기울여 %YOU%을(를) 보았다."
    - "입꼬리가 천천히 올라가더니 교활한 미소가 되었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때 %THEY%가 놀라는 얼굴, 분명 재밌을 거예요~」"
    - acc: 1
      content: "「그러니까 모두를 놀라게 할 생각이야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「놀라게요?」"
    - "세이운 스카이는 눈썹을 살짝 올리고 고개를 기울여 생각했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럴지도요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이는 스페처럼 원대한 꿈도 없고, 엘처럼 온몸에 열정이 넘치지도 않아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹이 타고난 자긍심도 따라 할 수 없고, 그래스처럼 상냥함 뒤에 숨긴 살기도 없죠. 아무것도 없어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%THEY%가 가진 포부와 열정은 세이한테 없어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 세이가 원하는 건─」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「느꼈어요!」"
    - "%SEX%는 갑자기 고쳐 앉아 두 손을 무릎에 짚고 몸을 앞으로 기울였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지난번 야요이상에서 세이를 향한 함성이 파도처럼 밀려왔을 때.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무도 세이를 눈여겨보지 않았는데, 모두를 놀라게 했을 때.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이는…… 느꼈어요.」"
    - "%SEX%는 일어나 옷자락을 털고 천천히 트랙으로 향했다."
    - "%SEX%는 등을 보인 채 빠르지 않은 걸음으로 걸었다. 꼬리가 걸음에 맞춰 흔들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤!」"
    - "세이운 스카이가 갑자기 돌아보며 외쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까…… 사츠키상이라는 『월척』을……」"
    - "%SEX%는 용기를 모으듯 깊게 숨을 들이쉬었다. 눈에는 자유로움뿐 아니라 투지가 담겨 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「같이 낚아 올려요. 모두를 놀라게 하자고요!」"
    - "말을 마치고 트랙으로 향하는 걸음은 조금 전보다 빨랐다."
    - "몇 걸음 가더니 돌아보지 않고 뒤로 손을 흔들었다."
    -
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「오─ 오! 스카이가 저렇게 의욕적이라니, 드문 일이네요!」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「스페와 킹 씨가 위험하겠네요. 다만 이번에도 게이트에 들어가기는 조금 힘들어 보이지만요.」"
    - "옆 통로에서 두 사람이 불쑥 고개를 내밀었다."
    - "%YOU%은(는) 기억해 냈다. %THEY%는 세이운 스카이의 친구인 엘 콘도르 파사와 그래스 원더였다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「흐흥~ 그래스, 꼭 그렇지만은 않아요.」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「저쪽 스페도 땅이 울리게 외치고 있거든요. 스카이랑 막상막하예요.」"
    - "(쉿……)"
    - "(세이운 스카이의 열띤 말이 옆까지 다 들렸던 모양이다.)"
    - （…………）


# 弥生賞敗
before_sats_sho_hl:
  title: "사츠키상(전)"
  lines:
    - fontSize: 1.2rem
      content: "레이스 전, 관중석─"
    - content:
        - fontWeight: bold
          content: "관중 A"
        - "「이봐, 형씨. 누가 이길 것 같아?」"
    - content:
        - fontWeight: bold
          content: "관중 B"
        - "「스페셜 위크지. 야요이상 우승자잖아! 이번엔 %SEX%한테 3000마폐 걸었어.」"
    - content:
        - fontWeight: bold
          content: "관중 C"
        - "「나도 스페셜 위크. 그래도 킹 헤일로도 위협적이야.」"
    - content:
        - fontWeight: bold
          content: "관중 A"
        - "「응, 응, 그렇지.」"
    - content:
        - fontWeight: bold
          content: "관중 A"
        - "「어? 저거 세이운 스카이지? 지난번에도 성적 괜찮았잖아.」"
    - content:
        - fontWeight: bold
          content: "관중 B"
        - "「흥, %SEX%? 신경 쓰지 마. 명문 출신도 아니고, %SEX%가 훈련을 자주 빼먹는단 소리도 들려. 출주자다운 꼴이 아니야.」"
    - content:
        - fontWeight: bold
          content: "관중 B"
        - "「지난번 %SEX%가 그 성적을 낸 건 %SEX%의 운이 좋았을 뿐이야.」"
    - content:
        - fontWeight: bold
          content: "관중 B"
        - "「이번엔 사츠키상이야. 클래식 3관의 첫 레이스라고! 요령으로 넘어갈 자리가 아니지.」"
    - content:
        - fontWeight: bold
          content: "관중 C"
        - "「그렇게 말하지 마. 여기 나온 것부터 실력은 충분하단 뜻이잖아.」"
    - content:
        - fontWeight: bold
          content: "관중 C"
        - "「다만 지금까지 수치를 보면 %SEX%의 지지율이 계속 높지 않았던 건 사실이지.」"
    -
    - fontSize: 1.2rem
      content: "패독─"
    - "%YOU%은(는) 장비를 점검하고 있다."
    - "세이운 스카이는 지루한 듯 책상에 엎드려 팔에 얼굴을 묻었다. 그 느슨한 모습은 곧 레이스에 나갈 사람 같지 않았다."
    - "%SEX%는 팔에 볼을 눌러 한쪽 볼이 부풀었고, 눈꺼풀은 금방이라도 감길 듯했다."
    - "%YOU%은(는) 조용히 %SEX% 곁에서 곧 있을 소집을 기다렸다."
    - "갑자기 세이운 스카이가 입을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아요, 트레이너 쌤. 뭔가 깨달았다고 느낀 순간이 있으세요?」"
    - acc: 1
      content: "「어─ 예를 들면?」"
    - "%SEX%는 엎드렸던 몸을 옆으로 돌리고 팔에 머리를 얹은 채 작전판을 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까, 음……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지난 레이스에서 실력을 보여 줬는데도 이번 지지율은 여전히 낮잖아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「남들이 보기엔 지난번 성적도 그냥 운이 좋았던 거겠죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오는 길에 들었어요. 세이 성적을 보고 코웃음 치더라고요.」"
    - "세이운 스카이는 무의식적으로 책상 위에 손가락으로 원을 그리기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이는 그렇게 신경 안 써요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 사람들 눈엔 목표도 없는 게으름뱅이겠죠. 훈련 빠지고, 늦잠 자고, 먹고 놀기만 하니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「겉으로 드러난 것만 보면─ 맞는 말이죠~」"
    - "「그래서 네 성적이 운 덕분이라고 생각해?」"
    - "「나는 한 번도 그렇게 생각한 적 없어.」"
    - "「그게 네 방식이잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「글쎄요~」"
    - "세이운 스카이는 몸을 일으켜 의자에 기대고 두 손을 뒤통수에 댄 채 천장을 보았다."
    - "세간의 평가는 %SEX%의 가벼운 말투에 아무 흔적도 남기지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만요─」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이렇게 탁한 물에서 정말 뭔가를 낚아 올린다면……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 광경, 꽤 재밌을 것 같지 않아요?」"
    - "%SEX%는 고개를 기울여 %YOU%을(를) 보았다."
    - "입꼬리가 천천히 올라가더니 교활한 미소가 되었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때 %THEY%가 놀라는 얼굴, 분명 재밌을 거예요~」"
    - acc: 1
      content: "「그러니까 모두를 놀라게 할 생각이야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「놀라게요?」"
    - "세이운 스카이는 눈썹을 살짝 올리고 고개를 기울여 생각했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럴지도요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이는 스페처럼 원대한 꿈도, 엘처럼 넘치는 열정도 없어요. 킹이 타고난 자긍심도 따라 할 수 없고, 그래스처럼 상냥함 뒤에 숨긴 살기도 없죠. 아무것도 없어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만요─」"
    - "%SEX%는 잠시 말을 멈추고 조금 먼 곳으로 시선을 옮겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지난 야요이상 때 트랙 끝에 서서, 스페가 기자들에게 둘러싸인 걸 보고 박수와 함성이 파도처럼 밀려오는 걸 들으면서……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「생각했어요. 저건 어떤 기분일까 하고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「한가운데 서서 모두의 시선을 받고, 모두가 이름을 불러 주면……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아마…… 나쁘지 않겠죠?」"
    - "세이운 스카이는 갑자기 고쳐 앉아 두 손을 무릎에 짚고 몸을 앞으로 기울였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 세이도 맛보고 싶어요. 저렇게 환호를 받는 기분을!」"
    - "%SEX%는 일어나 옷자락을 털고 천천히 트랙으로 향했다."
    - "%SEX%는 등을 보인 채 빠르지 않은 걸음으로 걸었다. 꼬리가 걸음에 맞춰 흔들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤!」"
    - "세이운 스카이가 갑자기 돌아보며 외쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까…… 사츠키상이라는 『월척』을.」"
    - "%SEX%는 용기를 모으듯 깊게 숨을 들이쉬었다. 눈에는 자유로움뿐 아니라 투지가 담겨 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「같이 낚아 올려요. 모두를 놀라게 하자고요!」"
    - "말을 마치고 트랙으로 향했다."
    - "몸을 돌린 %SEX%의 걸음은 조금 전보다 빨랐다. 몇 걸음 가더니 돌아보지 않고 뒤로 손을 흔들었다."
    -
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「오─ 오! 스카이가 저렇게 의욕적이라니, 드문 일이네요!」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「스페와 킹 씨가 위험하겠네요. 다만 이번에도 게이트에 들어가기는 조금 힘들어 보이지만요.」"
    - "옆 통로에서 두 사람이 불쑥 고개를 내밀었다."
    - "%YOU%은(는) 기억해 냈다. %THEY%는 세이운 스카이의 친구인 엘 콘도르 파사와 그래스 원더였다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「흐흥~ 그래스, 꼭 그렇지만은 않아요.」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「저쪽 스페도 땅이 울리게 외치고 있거든요. 스카이랑 막상막하예요.」"
    - "(쉿……)"
    - "(세이운 스카이의 열띤 말이 다 들렸던 모양이다.)"
    - "(%SEX%는 눈치 못 챘겠지……)"


sats_sho_win:
  title: "사츠키상(승)"
  lines:
    - "세이운 스카이가 2마신이라는 압도적인 차이로 결승선을 통과하자, 원래도 뜨겁던 관중석의 환호가 한층 더 커졌다."
    - "레이스 전의 멸시와 의심은 끓어오르는 함성의 바다에 완전히 잠겼다."
    - "스페셜 위크와 킹 헤일로는 세 번째 코너에서 이미 막판 가속을 앞당길 수밖에 없었다."
    - "하지만 %THEY%가 아무리 속도를 높여도 앞의 푸른 그림자는 무서운 리듬을 유지했다."
    - "절묘했다─ 따라잡을 수 없을 만큼 빠르면서도, 조금만 더 가면 닿을 듯한 리듬이었다."
    - "%YOU%은(는) 그 자리에 서서 그 그림자가 속도를 줄이고 멈춰 돌아보는 모습을 지켜보았다."
    - "%SEX%가 고개를 들자 햇살이 옆에서 %SEX%의 얼굴을 비췄다. %SEX%는 눈을 가늘게 뜨고 %YOU%에게 큼직한 브이를 그려 보였다."
    - "사츠키상은 세이운 스카이의 손에 들어왔다."
    -
    - "%YOU%이(가) 대기실로 들어가자 세이운 스카이는 벽에 걸린 장식 거울 앞에 있었다."
    - "허리에 두 손을 얹고 고개를 살짝 든 모습이 전과를 뽐내는 듯했다."
    - "%SEX%는 거울 너머를 보고 몸이 굳었다."
    - "그러고는 홱 돌아서서 두 손을 뒤로 숨기고 얼굴을 새빨갛게 물들였다."
    - "꼬리는 놀란 고양이처럼 부풀어 뒤에서 꼿꼿이 섰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트, 트레이너 쌤!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜 이렇게 빨리 들어오셨어요!」"
    - "말이 끝나기도 전에 바깥에서 소란스러운 발소리가 들렸다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「오! 월척 잡았네요, 스카이!」"
    - "엘 콘도르 파사가 문을 밀었다. 쾌활한 웃음소리가 사람보다 먼저 방으로 뛰어들었다."
    - "%SEX%는 성큼 달려와 세이운 스카이를 끌어안았다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「축하해요, 스카이 씨.」"
    - "뒤따라온 그래스 원더는 미소를 지으며 가볍게 인사하고 천천히 들어왔다."
    - "세이운 스카이는 잠시 굳었다. 귀가 번쩍 서고 얼굴은 김이 날 듯 빨개졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「무…… 무슨 월척이에요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그냥…… 평범한 레이스였는데……」"
    - "%SEX%는 작게 중얼거리며 시선을 이리저리 피했다. 누구와도 눈을 맞추지 않았다."
    - "말도 마치기 전에 %SEX%는 무언가 떠올랐는지 갑자기 %YOU%을(를) 노려보았다."
    - "눈에는 『쓸데없는 소리 하지 마세요!』라는 강한 호소가 담겨 있었다."
    - "%YOU%은(는) 억울하다는 얼굴로 고개를 돌려 벽의 그림을 살피는 척했다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「에이~? 다 봤는걸요?」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「스카이의 마지막 스퍼트, 엄─청 멋졌어요!」"
    - "엘은 세이운 스카이를 더 높이 들어 올려 전리품처럼 한 바퀴 돌렸다."
    - "세이운 스카이의 얼굴은 더욱 붉어졌다. %SEX%는 입술을 달싹이며 무언가 말하려 했지만 흐릿한 숨소리만 나왔다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「크흠─」"
    - "그래스 원더가 가볍게 헛기침하고 부드럽게 주의를 주었다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「엘, 스카이 씨가 부끄러워하시잖아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「부, 부끄러운 거 아니에요!」"
    - "세이운 스카이가 갑자기 큰 소리로 반박했다."
    - "%SEX%는 엘의 팔에서 홱 빠져나와 손에 들린 수건을 낚아채 머리에 뒤집어쓰고 얼굴까지 묻었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아아─ 기자가 왔네요. 먼저 갈게요.」"
    - "말을 마치기도 전에 %SEX%는 바람처럼 대기실을 뛰쳐나갔다."
    - "문틀에서 수건 끝만 한 번 흔들렸다."
    - "「민망한 모습 보여 줘서 미안해.」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「괜찮아요. 저희도 가 볼게요. 스페와 킹 씨가 분해할 테니 위로해 주러 가야겠어요.」"
    - "엘은 손을 흔들고 그래스 원더를 따라 대기실을 나갔다."
    - "%YOU%은(는) 그 자리에 서서 텅 빈 문틀과 %SEX%가 가져간 뒤 남은 포장을 보며 저도 모르게 웃었다."
    - "(사츠키상을 따고는 쏜살같이 달아나다니.)"
    - "(─정말 %SEX%답네.)"
    - "그날 밤 %YOU%은(는) %SEX%가 부끄러워서 기자를 피했을 뿐이라고 생각했다. 이틀쯤 지나면 슬쩍 훈련장에 나타나리라 여겼다."
    - "하지만 다음 주에 %YOU%은(는) 깨달았다. %SEX%는 일주일 내내 훈련장에 오지 않았다."


sats_sho_lose:
  title: "사츠키상 (패배)"
  lines:
    - "통로의 조명은 조금 어둡다."
    - "세이운 스카이는 벽에 기대 고개를 살짝 숙이고 있다. 땀에 젖은 앞머리가 눈을 가린다."
    - "손에 든 뜯지 않은 생수병을 무심코 비틀자, 플라스틱이 자잘한 소리를 낸다."
    - "%SEX%는 패배했다."
    - "간발의 차이로 진 것도 아니다. 마지막 이백 미터 직선에서, 스페셜 위크에게 뒤에서부터 압도당했다."
    - "밤색 그림자가 바깥쪽을 거칠게 뚫고 나왔다. 갑자기 쏟아진 급류 같은 막판 가속으로, 순식간에 모두를 추월했다."
    - "%YOU%은(는) %SEX%의 곁으로 가서, 아무 말도 하지 않았다."
    - "세이운 스카이는 고개를 옆으로 돌렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「계산이, 틀렸네요……」"
    - "%SEX%가 먼저 입을 열었다. 목소리는 가라앉아 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스페의 막판 가속은, 그 정도 공기 저항 속에선 오히려 유리했어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「작전을, 잘못 짰어요.」"
    - "%SEX%는 잠시 말을 멈췄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기…… 트레이너 쌤……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저…… 너무 자만했나요?」"
    - "%YOU%이(가) 대답하기도 전에, 통로 저편에서 다급한 발소리가 들려왔다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「스카이!」"
    - "엘의 목소리가 먼저 들리고, 곧이어 본인이 달려들어 세이운 스카이를 끌어안았다."
    - "그래스 원더가 %SEX%의 뒤에서 천천히 걸어왔다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「스카이, 그거 알아요? 아까 마지막 코너에서 진로 바꾼 거, 엄청 멋졌어요!」"
    - "엘은 팔을 풀고 한 걸음 물러서더니, 진지하게 세이운 스카이의 눈을 바라봤다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「저랑 그래스는 관중석에서 벌떡 일어날 뻔했다니까요!」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「정말 훌륭했어요.」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「그런 풍속에서 진로를 바꾸려면, 상당한 용기와 판단력이 필요하죠.」"
    - "그래스 원더가 고개를 끄덕였다. 말투는 차분하면서도 확신에 차 있었다."
    - "세이운 스카이는 고개를 들지 않았다. 목소리가 가라앉아 있다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도, 졌잖아요……」"
    - "엘은 두 손으로 세이운 스카이의 어깨를 붙잡았다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「이길 때도 있고 질 때도 있는 거죠. 저도 얼마 전 모의 레이스에서 스페한테 졌는걸요!」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「중요한 건, 스카이가 엄청—— 즐겁게 달렸다는 거예요!」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「관중석에서도 느껴졌다니까요. 거침없이 밀고 나가는 그 기세!」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「그래도 마음이 안 풀리면—— 고목의 구멍에 대고 두어 번 소리라도 질러 봐요.」"
    - "세이운 스카이가 그제야 고개를 들었다."
    - "눈가는 조금 붉었지만, 눈동자 속의 공허함은 이미 사라져 있었다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「다음엔 같이 트레이닝해요.」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「스카이의 작전은 강력하니까, 저도 대비하는 법을 배워야겠어요.」"
    - "%SEX%는 %YOU%에게 가볍게 고개를 숙이고, 다시 엘을 바라봤다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「그럼, 트레이너 선생님과 레이스를 되짚는 데 방해되지 않도록 할게요. 엘, 우리도 가요.」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「알겠어요! 스카이, 힘내요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 고마워요.」"
    - "세이운 스카이는 작은 목소리로 고맙다고 말했다."
    - "「고마워.」"
    - "엘은 손을 흔들고, 그래스 원더와 함께 통로 안쪽으로 사라졌다."
    -
    - "발소리가 멀어지자 통로는 다시 조용해졌다. 멀리서 이따금 스태프의 목소리만 들려온다."
    - "%YOU%은(는) 잠시 말없이 있다가, 입을 열었다."
    - "「아까 물었지.」"
    - "「자만한 거냐고.」"
    - "%YOU%은(는) 잠시 말을 멈췄다."
    - "「그랬을지도 모르지.」"
    - "「하지만 엘의 말대로야. 마지막 코너에서 진로를 바꾼 건 정말 멋졌어.」"
    - "「낚시하다 거센 바람과 파도를 만나면, 뚝심 있게 밀고 나갈 용기가 있어야 낚싯대를 던질 수 있지.」"
    - "「네가 말하는 자만은, 바로 그 용기야.」"
    - "「그 용기 덕분에, 미지의 길로 나아갈 때도 있는 거고.」"
    - "「하지만 이번 패배는 작전이 잘못돼서가 아니야. 실력 차이였어.」"
    - "「스페의 막판 가속이 지금의 너보다 조금 더 강했지.」"
    - "「이번에 못 낚았어도 괜찮아.」"
    - "%YOU%은(는) 살며시 %SEX%의 머리를 쓰다듬으며, %SEX%의 헝클어진 머리카락을 정돈해 주었다."
    - "%SEX%를 바라본다. %SEX%는 여전히 고개를 숙이고 있고, 귀도 풀이 죽어 축 처져 있다."
    - "「대어가 한 마리뿐인 것도 아니잖아.」"
    - "「그러니까—— 크흠——」"
    - "「이번 주가 월급날이거든~ 뭐 먹고 싶은 거 있어?」"
    - "「오늘은 맛있는 거 사 줄게! 서쪽 구역의 고급 초밥집은 어때?」"
    - "세이운 스카이의 귀가 움찔했다. 손에 든 생수병을 바라보며, 몇 초 동안 말이 없었다."
    - "그리고 %SEX%는 고개를 들었다. 눈가는 아직 붉었지만, 눈빛은 이미 달라져 있었다——"
    - "흐트러져 있던 무언가가 사라졌다."
    - "%SEX%는 벽 쪽의 한 점을 가만히 응시한다. 낚시할 때 찌를 바라보는 눈빛이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음에는, 공기 저항 계수를 더 정확하게 계산할 거예요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고, 엘 말대로 달리는 건 즐거웠어요——」"
    - "마지막 몇 마디는 점점 작아졌다. %SEX%는 고개를 옆으로 돌리고 잠시 뜸을 들였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……저기요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아까 말한 초밥, 잊지 마세요……」"


before_toky_yus:
  title: "일본 더비 (전)"
  lines:
    - "출발까지는 아직 시간이 남아 있었다. 세이운 스카이는 코스 옆 울타리에 기대어, 손끝으로 작은 노란 들꽃을 만지작거리고 있다."
    - "옆에서 비치는 햇살이 %SEX%의 온몸에 따스한 테두리를 두른다."
    - "%SEX%는 한동안 그 꽃을 바라보다가, 문득 입을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기, 트레이너 쌤~」"
    - "「응?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이리 와 보세요~ 눈 감으시고요~」"
    - "세이운 스카이가 갑자기 입을 열어, 비밀스러운 표정으로 %YOU%을(를) 불렀다."
    - "%YOU%은(는) %SEX%가 무슨 장난을 하려는지 궁금해하며, 순순히 다가가 눈을 감았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「됐어요~ 이제 눈 떠 보세요~」"
    - "%YOU%이(가) 눈을 뜨자, 작은 흰 꽃으로 엮은 화관이 %SEX%의 머리에 얹혀 있었다."
    - "바람이 이따금 불어 몇 가닥의 머리카락을 들어 올릴 때마다, %SEX%는 막 그려 낸 수채화처럼 보였다."
    - "「정말 예쁘다……」"
    - "%YOU%은(는) 무심코 말을 내뱉었다."
    - "세이운 스카이는 잠시 멍해졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네!?」"
    - "「크흠─」"
    - "%YOU%은(는) 시선을 피하며 헛기침했다."
    - "「그러니까——」"
    - "「화관 말이야—— 맞지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아…… 네.」"
    - "%YOU%의 갑작스러운 칭찬에, 세이운 스카이는 조금 당황했다."
    - "뺨이 살짝 붉어졌지만, 곧 평정을 되찾는다."
    - "%SEX%는 눈을 깜빡이고는, 금세 다시 장난기 어린 미소를 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「딩동댕~ 정답!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「상으로 한 송이 드릴게요~」"
    - "세이운 스카이는 웃으며 들꽃 한 송이를 떼어 %YOU% 앞으로 들어 보였다."
    - "손에 든 데이지를 살며시 %YOU%의 머리에 꽂아 준다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤~ 이건 데이지예요~ 제가 제일 좋아하는 꽃이죠~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「플라워가 그러는데, 데이지의 꽃말은 『순수한 사랑』이래요~」"
    - "%SEX%는 한 걸음 물러나 고개를 갸웃하며 %YOU%을(를) 바라봤다. 입가의 미소가 더욱 짙어진다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까—— 제가 선물한 데이지를 받은 트레이너 쌤은, 흐흥~」"
    - "갑작스러운 도발에, %YOU%은(는)——"
    - acc: 1
      content: "「뭐!? 스카이—— 너——」"
      lines:
        - "%YOU%은(는) 당황한 채 그 자리에 서서 꽃을 빼려고 손을 들었다가, 빼는 게 오히려 더 이상하겠다고 생각했다."
        - "세이운 스카이는 그런 %YOU%을(를) 보며 한층 더 짙은 미소를 지었다."
        - "%SEX%가 앞으로 다가와 %YOU%에게 얼굴을 가까이 댄다. %YOU%이(가) %SEX%의 속눈썹 곡선까지 볼 수 있을 만큼 가까운 거리다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너 쌤, 이상한 생각 하시는 건 아니겠죠——」"
        - "%SEX%의 코끝이 거의 %YOU%의 코끝에 닿을 듯하다."
        - "그러더니 %SEX%는 갑자기 한 걸음 물러나 뒷짐을 지고, 평소의 느긋한 미소로 돌아왔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「푸훗—— 거짓말이에요!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「데이지에는 『행운』과 『길조』라는 뜻도 있거든요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「방금 그 표정, 아하하하——」"
        - "%SEX%는 허리를 굽히며 웃었고, 뒤에서는 꼬리가 즐겁게 흔들렸다."
        - "깊이 숨을 들이마셨다가, 천천히 내쉬었다."
        - "「……이 녀석.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「냐하하—— 미안해요, 미안해요. 근데 트레이너 쌤 표정이 정말 재밌어서요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「세이의 반격 계획—— 대성공!」"
    - acc: 2
      content: "「순수한 사랑? 그럼 선물한 사람이 좀 더 설명해 줘야겠네.」"
      lines:
        - "%YOU%은(는) 살짝 고개를 숙여, 귀 옆의 데이지를 %SEX%의 눈앞으로 가까이 가져갔다."
        - "세이운 스카이는 %YOU%이(가) 이렇게 받아칠 줄은 예상하지 못했다."
        - "%SEX%는 온몸이 굳은 채 눈을 깜빡였다. 방금 들은 말의 뜻을 미처 이해하지 못한 것 같다."
        - "그러더니 얼굴이 확 붉어졌다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「자, 잠깐만요! 그런 뜻이 아니라……」"
        - "%SEX%는 다급히 반걸음 물러나며 이리저리 시선을 피했다. 조금 전까지의 여유는 온데간데없이 사라졌다."
        - "「무슨 뜻이 아닌데?」"
        - "%YOU%은(는) 한 걸음 내디뎌 곧바로 따라붙었다."
        - "말투에는 진지한 의아함이 묻어 있었다—— 입꼬리는 이미 주체할 수 없이 올라갔지만."
        - "「이 순수한 사랑을, 함께 나누자.」"
        - "「네 기대를 절대로 저버리지 않을게.」"
        - "「그러니까—— 세이운 스카이!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - fontSize: 1.5rem
              content: "「으아아!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - fontSize: 1.5rem
              content: "「스톱!!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - fontSize: 1.5rem
              content: "「스톱, 스톱, 스톱!!!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……데, 데이지에는 『행운』이라는 뜻도 있거든요! 행운이요!」"
        - "세이운 스카이의 몸이 굳었다."
        - "홍조가 뺨에서 목덜미까지 번졌다."
        - "%SEX%의 꼬리는 뒤에서 꼿꼿이 섰다. 마치 꼬리를 밟힌 고양이 같다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말이지——」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너 쌤은 온종일 무슨 생각을 하시는 거예요!!」"
        - "세이운 스카이의 목소리에는 당황한 기색이 역력했다. 손에 든 생수병을 얼굴 앞에 들고 눈만 내놓은 채, 볼을 부풀리고 %YOU%을(를) 노려봤다."
        - "%YOU%은(는) 결국 참지 못하고 웃음을 터뜨렸다."
        - "「하하하, 알아, 안다고. 그냥 놀려 본 거야.」"
        - "%YOU%은(는) 세이운 스카이의 머리를 쓰다듬었다."
        - "세이운 스카이의 눈에는 「두고 봐요」라는 원망이 가득했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너 쌤은 정말—— 너무하시네~」"
        - "「다 너한테 배운 거거든~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「흥——」"
        - "세이운 스카이는 콧방귀를 뀌며 고개를 돌렸다. 하지만 목은 아직 붉었다."
    -
    - "작은 소동이 끝나고, 두 사람은 울타리에 기대 잠시 조용히 있었다."
    - "멀리서 관중석의 소음이 들려오고, 방송에서는 곧 시작될 레이스를 안내하고 있다."
    - "세이운 스카이가 갑자기 손을 들어 먼 곳을 가리켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 저기 보세요.」"
    - "%YOU%은(는) %SEX%가 가리킨 곳을 바라봤다—— 코스 안쪽의 빈터에 비석이 서 있었다."
    - "햇살이 비석 표면을 비춰, 글자가 선명하게 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가장 운이 좋은 경주 %UMA%만이 이길 수 있다는 일본 더비……」"
    - "%SEX%는 손을 거두고, 옷깃에 꽂힌 데이지를 손끝으로 살며시 어루만졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『길조』의 꽃을 부적으로 삼기엔 딱 좋지 않아요?」"
    - "%SEX%는 돌아서서 %YOU%을(를) 바라봤다. 햇살이 %SEX%의 눈동자 안에서 부서져 반짝인다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까, 어떻게 되든 모두를 놀라게 하고 즐겁게 해 주는 레이스를 보여 주고 싶어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「냐하하…… 너무 욕심인가요?」"
    - "%SEX%는 손을 거두어 뒤통수에 대고, 평소의 느긋한 모습으로 돌아갔다."
    - "꼬리 끝만이 살짝 흔들리며, %SEX%의 마음속 작은 기대를 드러내고 있었다."
    - "「기합 넣고 가자!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네! 기합 넣고 갈게요——」"
    - "말을 마친 세이운 스카이는 콧노래를 부르며 코스로 향했다."
    - "서두르는 기색 없는 걸음이었다. 십수만 명이 지켜보는 레이스에 나가는 모습보다는 산책하러 가는 모습에 가까웠다."
    - "%YOU%은(는) 그 자리에 서서, 멀어지는 %SEX%의 뒷모습을 바라봤다."
    - "햇살은 따스하고, 바람은 가벼웠다."
    - "작은 데이지는 어느새 %SEX%의 승부복에 꽂혀, %SEX%의 걸음에 맞춰 흔들리고 있었다."


toky_yus_win:
  title: "일본 더비 (승리)"
  lines:
    - "공동 취재 구역의 소란은 두꺼운 문 너머로 차단되어 있다."
    - "통로는 유난히 조용했다. 멀리서 이따금 발소리만 들려올 뿐이다."
    - "세이운 스카이는 벽에 기대 가슴을 크게 들썩이며, 깊게 숨을 들이마시고 있다."
    - "땀이 뺨을 타고 흐르고, 젖은 머리카락은 이마에 달라붙어 있다."
    - "%SEX%는 이겼다."
    - "고작 코끝만큼의 아슬아슬한 차이로."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후우—— 위험했네, 위험했어~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스페의 마지막 가속, 너무 무섭던데요. 조금만 늦었으면 잡아먹힐 뻔했어요.」"
    - "세이운 스카이는 간신히 살아 돌아온 듯한 표정으로 %YOU%을(를) 바라봤다."
    - "%SEX%는 수건으로 뒷목을 닦고, 얼굴도 대충 훔쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 보셨어요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전반에 자리 잡으려고 다툴 때, 킹이 너무 흥분했더라고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX%의 보폭 회전수가 최적치보다 무려 5%나 빨라서, 제 리듬까지 휩쓸릴 뻔했어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 양보했죠. %SEX%를 먼저 보내고, %SEX%가 도주하게 해서, %SEX%의 체력을 소모시켰어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후반에 들어가니, 역시나 %SEX%의 스태미나가 부족해졌고요.」"
    - "%SEX%는 말하면서 허공에 손가락을 움직여, 방금 레이스를 되짚었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그다음엔 스페요.」"
    - "%SEX%는 수건을 어깨에 걸치고, 시선을 살짝 들어 코스의 마지막 구간을 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마지막 사백 미터에서 %SEX%의 호흡 리듬이 바뀌었어요—— %SEX%가 전력으로 막판 가속을 한다는 신호죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 0.5초 먼저 가속했어요. 아주 조금이라도 먼저 치고 나가려고요.」"
    - "%SEX%는 잠시 뜸을 들이고, 목소리를 낮췄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만, 그래도 부족했어요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스페의 막판 가속은…… 너무 강해요. 마지막에 그게 아니었으면——」"
    - "%SEX%는 말을 끝맺지 않았지만, %YOU%은(는) %SEX%가 무엇을 말하는지 알았다."
    - "마지막 십 미터, 스페셜 위크의 기세가 거의 %SEX%를 집어삼킬 뻔했지만 결승선이 먼저 다가왔다."
    - acc: 1
      content: "「행운인가?」"
    - "%YOU%은(는) 작게 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네.」"
    - "세이운 스카이는 고개를 끄덕이며, 승부복에 꽂아 둔 데이지를 손에 들었다."
    - "격렬한 레이스를 거쳐 꽃잎은 조금 구겨졌지만, 여전히 옷깃에 남아 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「데이지의 『길조』~ 오늘은 정말 효험이 있었나 봐요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤~ 트레이너 쌤, 오늘은 제가 가장 운 좋은 경주 %UMA%네요~」"
    - "의기양양한 세이운 스카이를 보며, %SEX%의 머리를 쓰다듬었다."
    - "「그래. 오늘 넌 가장 운 좋은 경주 %UMA%야——」"
    - "%YOU%은(는) 잠시 뜸을 들이다가 말을 이었다."
    - "「네 덕분에—— 나도 가장 운 좋은 트레이너가 됐고~」"
    - "세이운 스카이는 잠시 멍해지더니 고개를 돌렸다. 뺨이 살짝 붉어졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……트레이너 쌤, 오늘 이상하시네.」"
    - "%SEX%는 작게 중얼거렸지만, 입가에 드러나는 기쁨은 숨기지 못했다."
    - "%YOU%은(는) 한 걸음 앞으로 나서서, 진지하게 %SEX%의 눈을 바라봤다."
    - "「하지만 오늘 이긴 건 행운 덕분만은 아니야.」"
    - "「너 자신의 예리한 감각—— 킹에게 리듬을 빼앗기지 않았지.」"
    - "「그리고 네 의지—— 마지막 직선에서 코앞까지 따라잡혔는데도 포기하지 않았어.」"
    - "「행운은 준비된 사람에게 찾아오는 거야.」"
    - "「넌—— 준비가 되어 있었고.」"
    - "세이운 스카이는 눈을 깜빡였다. 그러고는 %SEX%가 고개를 숙여 손에 든 데이지를 잠시 바라보았고, 입꼬리가 천천히 올라갔다——"
    - "평소의 능청스러운 웃음이 아닌, 한결 은은하고 부드러운 미소였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……트레이너 쌤, 오늘 정말…… 왜 이렇게 듣기 좋은 말씀만 하세요…… 헤헤~」"
    - "세이운 스카이는 눈을 가늘게 뜨며 웃었다. 고양이가 가르릉거리듯 기분 좋은 모습이다."
    - "이내 %SEX%는 고개를 들어 평소의 느긋한 모습으로 돌아가고, 데이지를 승부복에 다시 꽂았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도, 맞는 말씀이에요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 다음은—— 국화상.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가장 강한 경주 %UMA%만이 이길 수 있다고 하죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스페의 실력은…… 무서워요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까—— 행운만으로는 부족해요. 제 작전으로 따내겠어요!」"
    - "의욕이 넘치는 세이운 스카이를 보며, %YOU%이(가) 입을 열었다."
    - "「난 언제나 네 곁에 있을게. 앞으로 나아갈 수 있도록 도울 거야——」"
    - "「그러고 보니—— 데이지의 행운, 오늘 레이스에만 쓰라는 법은 없지~」"
    - "세이운 스카이는 의아한 듯 고개를 갸웃했다."
    - "「자, 소원을 말해 봐.」"
    - "「오늘 넌 세상에서 가장 운 좋은 경주 %UMA%잖아.」"
    - "「가장 운 좋은 경주 %UMA%의 소원은, 가장 운 좋은 경주 %UMA%의 트레이너가 이루어 줄게!」"
    - "세이운 스카이는 눈을 살짝 크게 떴다가 가늘게 뜨더니, 천천히 입꼬리를 올렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말이에요, 트레이너 쌤?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 그럼 잘 생각해 봐야겠네요…… 오늘은 그렇게 쉽게 안 놔 드릴 거예요.」"
    - "%SEX%는 뒷짐을 지고 고개를 살짝살짝 흔들었다. 뒤에서는 꼬리가 즐겁게 흔들리고 있다."
    - "잠시 후, %SEX%는 손가락 하나를 세우고 작은 악마처럼 명령했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우선—— 소원은 나중에 들어 주기!」"
    - acc: 1
      content: "「응?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지금 말고…… 음, 다음에 제가 『행운』이 좀 더 필요하다고 생각될 때요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「언제가 『필요한 때』인지는…… 비밀~」"
    - "세이운 스카이는 의아해하는 %YOU%에게 눈을 찡긋했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤은 기대하면서 기다려 주세요~」"
    - "말을 마친 %SEX%는 웃으며 돌아서서, 축하하는 사람들 속으로 향했다."
    - "몇 걸음 걷다가, 또 무언가 생각난 듯 돌아보며 외쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「대신 이자는 받을 거예요! 예를 들면 오늘 밤 축승회라든가!」"
    - "%SEX%는 손가락 두 개를 세웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「두 배로요!」"


toky_yus_lose:
  title: "일본 더비 (패배)"
  lines:
    - "레이스가 끝난 뒤, 통로의 공기는 조금 무거웠다."
    - "세이운 스카이는 벽에 등을 기대고 고개를 살짝 숙이고 있었다. %YOU%은(는) 다가가 %SEX%에게 물과 수건을 건넸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아아, 실패했네요…… 아하하——」"
    - "세이운 스카이는 일부러 가벼운 말투로 말하고는, 고개를 숙였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……너무 서둘렀어요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹이 치고 나갔을 때, 예상보다 훨씬 리듬이 흐트러졌어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX%의 리듬에 맞춰 맞서면 안 됐어요. %SEX%가 확실히 처진 뒤에도, 바로 자리를 되찾으려고 고집부릴 게 아니었고요.」"
    - "%SEX%는 고개를 들었다. 표정은 무덤덤했지만, 눈에는 분함이 가득했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「결국 제 호흡이 흐트러지고, 발걸음의 리듬까지 엉망이 됐죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스페에게 최고의 기회를 준 거예요…… %SEX%가 그걸 놓칠 리 없잖아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「행운의 여신이, 오늘은…… 제 편이 아니었나 봐요……」"
    - "「행운?」"
    - "%YOU%은(는) %SEX%의 눈을 바라보며, 그 말에 동조하지 않았다."
    - "「방금 한 말—— 리듬이 흐트러졌다, 발걸음이 엉켰다, 맞서면 안 됐다——」"
    - "「그게 행운과 무슨 상관이 있어?」"
    - "%YOU%은(는) 잠시 뜸을 들이다가 말을 이었다."
    - "「오늘 풍향이 갑자기 바뀌었다면, 그 바람은 행운이었을까?」"
    - "「스페셜 위크가 마지막 걸음에서 발을 헛디뎠다면, 그건 행운이었을까?」"
    - "「스카이, 네가 가장 잘 알잖아. 코스 위의 『행운』은 하늘에서 떨어지는 선물이 아니야.」"
    - "「모든 풍향을 계산하고, 잔디 구석구석을 살피고, 상대의 호흡 리듬까지 예측한 뒤——」"
    - "「——만분의 일의 『우연』에 만반의 준비를 갖춘 『필연』의 순간에만, 살며시 우리 쪽으로 기우는 거지.」"
    - "「그러니 행운은 네 실력의 일부야. 지혜와 준비로 스스로 만들어 낸 『가능성』이지.」"
    - "「하지만 전부는 아니야. 변명거리도 아니고.」"
    - "세이운 스카이는 묵묵히 듣고 있었다. 수건을 움켜쥔 손가락이 서서히 풀렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……맞아요.」"
    - "%SEX%는 몸을 바로 세웠다. 목소리도 평소의 침착함을 되찾았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전부 『운이 부족했다』고 떠넘기는 건, 너무 자신을 속이는 거죠.」"
    - "%SEX%는 이쪽을 바라봤다. 짙푸른 눈동자에서 조금 전의 방황과 낙담은 사라져 있었다."
    - "차분히 가라앉은, 차가울 정도로 단단한 결의만이 남아 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 침착하지 못했어요. 작전을 제대로 실행하지 못했고, 순간적인 판단도 잘못했죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 국화상까지…… 얼마나 남았어요?」"
    - "「다섯 달.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「알겠어요.」"
    - "%SEX%는 고개를 끄덕였다. 얼굴에는 책사의 침착한 미소가 떠올랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음번 교토의 코스에서는……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제 작전으로, 설욕하겠어요.」"
    - "말을 마친 %SEX%는 수건을 어깨에 걸치고, 통로 안쪽으로 걸어갔다."
    - "걸음에는 망설임도 무거움도 없었다. 올 때보다 한결 침착하고 단단했다."
    - "%SEX%의 머리에 꽂힌 데이지 머리핀이 통로의 희미한 불빛을 받아 잠깐 반짝였다."
    - "말없는 맹세처럼, %SEX%를 축복하고 있었다."


before_kiku_sho:
  title: "국화상 (전)"
  lines:
    - fontSize: 1.2rem
      content: "레이스 사흘 전, 트레이닝실 안——"
    - "세이운 스카이가 입구에 서 있다. 역광 때문에 표정은 보이지 않는다."
    - "하지만 %SEX%는 평소보다 훨씬 곧게 서 있었고, 데이지 머리핀은 %SEX%의 옆머리에 단정하게 꽂혀 있었다."
    - "세이운 스카이는 안으로 들어와 등 뒤로 문을 닫았다. 바깥의 아득한 소란이 희미한 배경음이 되었다."
    - "%SEX%는 곧바로 말하지 않고, 방 안을 천천히 한 바퀴 돌았다."
    - "가지런한 장비, 스페를 쓰러뜨릴 도식이 그려진 작전판, 그리고 창가를 차례로 손끝으로 쓸었다."
    - "마지막으로 %SEX%는 창 앞에 멈춰 서서, %YOU%에게 등을 돌리고 바깥의 넓은 코스를 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤……」"
    - acc: 1
      content: "「응? 긴장돼?」"
    - "%YOU%은(는) 이미 외우다시피 한 작전표를 정리하던 손을 멈추고, %SEX%를 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아뇨…… 전혀요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오히려 지금은, 굉장히 『흥분』돼요.」"
    - "%SEX%는 돌아섰다. 아침 햇살이 %SEX%의 등 뒤에서 쏟아져, %SEX%의 윤곽에 옅은 금빛 테두리를 둘렀다."
    - "얼굴에는 평소의 나른함도, 일부러 긴장한 듯한 기색도 없었다. 극도로 냉정하게 깨어 있는 의식만이 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아요—— 트레이너 쌤.」"
    - "세이운 스카이는 다시 한번 %YOU%을(를) 불렀다. %SEX%는 한 걸음 앞으로 나와, 곧장 이쪽을 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내일 레이스, 첫 1미터부터 마지막 1미터까지.」"
    - "%SEX%는 잠시 말을 멈췄다. 푸른 눈동자 안에 푸른 불꽃이 타오르는 것 같다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제 작전으로—— 전부 지배하겠어요!」"
    - "갑작스러운 호언장담은 어떤 외침보다도 무게감이 있었다."
    - "%SEX%는 책상으로 가 두꺼운 파일을 집어 들었다—— 빼곡한 손글씨 메모와 복잡한 도표들. 여러 번 넘긴 종이 끝은 조금 말려 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지난 삼십 년간의 국화상 영상을 전부 봤어요. 교토 코스의 날짜별, 시간대별 풍향과 습도, 빛의 각도가 잔디에 주는 영향도 계산했고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「출전할 만한 상대들의 최근 석 달간 모의 레이스 데이터도 전부 분석했어요. %THEY%의 레이스 후 인터뷰에서 드러난 미세한 표정과 피로 지표까지요.」"
    - "%YOU%은(는) 그 메모를 넘기다가, 어느 페이지에서 손가락을 멈췄다——"
    - "손으로 그린 코스 지도였다. 언덕의 경사, 잔디 상태, 시간대별 햇빛과 그림자의 경계까지 표시되어 있었다."
    - "옆에는 숫자와 화살표가 빼곡했다."
    - "「이거…… 얼마나 걸렸어?」"
    - "세이운 스카이는 계산하는 듯 고개를 갸웃했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음—— 더비 끝나고부터요.」"
    - "「다섯 달이나?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「대충 그 정도요.」"
    - "「그럼 그 다섯 달 동안 『땡땡이』쳤던 건——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「냐하하~」"
    - "%SEX%는 웃으며, 그 주행 경로도를 %YOU% 앞으로 조금 더 밀었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 그거 아세요? 멍하니 앉아 있을 때 오히려 더 많은 걸 알게 되기도 하거든요.」"
    - "「예를 들면?」"
    - "%SEX%는 웃으며, 그 주행 경로도를 %YOU% 앞으로 조금 더 밀었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예를 들면—— 이거요.」"
    - "세이운 스카이는 작전판 앞으로 가서, 판에 그려진 스페셜 위크 위로 계획표를 탁 붙였다."
    - "%SEX%는 돌아서서, %YOU%이(가) 한 번도 본 적 없는 광기와 냉정함이 뒤섞인 미소를 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「계획이 있어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「국화상 역사상…… 가장 『미친』 계획일지도 몰라요.」"
    - "날카로운 자신감으로 타오르는 %SEX%의 눈을 보며, %YOU%의 가슴에는 의심이 없었다. 그 결의에 대한 뜨거운 공감과 무조건적인 신뢰만이 있었다."
    - "%YOU%의 시선이 무서울 만큼 상세한 자료 위를 훑었다."
    - "「우리가 함께 준비한 것 말고도, 네가 혼자 준비한 건…… 훨씬 더 많았구나.」"
    - "「그러니까…… 우리도 속고 있었네. 그 『땡땡이』 시간을 전부 여기에 썼구나.」"
    - "세이운 스카이의 입꼬리가 살짝 올라갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「준비는 진작 끝났어요. 이번에는 의심하는 목소리도, 『운이 좋았을 뿐』이라는 말도, 『도주는 장거리에서 못 이긴다』는 말도, 『게을러서는 성공 못 한다』는 말도, 전부——」"
    - "%SEX%의 눈빛이 칼날처럼 날카로워졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「——전부, 입 다물게 하겠어요.」"
    - "「계획의 위험도는 계산했어?」"
    - "%YOU%은(는) 마지막으로, 반드시 확인해야 할 단 하나의 질문을 던졌다."
    - "세이운 스카이는 작게 웃었다. 모든 것을 장악하고 있다는 듯한 웃음이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「위험이요? 트레이너 쌤, 역사에 남을 『대어』를 낚기로 해 놓고 위험을 따지는 건, 폭풍우 치는 날 낚싯줄이 햇빛에 바랠까 걱정하는 거나 마찬가지예요.」"
    - "%SEX%는 최종 주행 경로도를 %YOU% 앞으로 밀었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너무 고민하지 말고, 이 큰 배에 올라타세요. 키는 트레이너 쌤에게 맡길게요.」"
    - "세이운 스카이는 잠깐 말을 멈추고 목소리를 조금 낮췄다. 드물게, 거의 의지하는 듯한 진지함이 묻어났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……트레이너 쌤의 판단을 믿어요. 늘 제 『고집』을 믿어 주셨던 것처럼요.」"
    - "%YOU%은(는) 도면에 그려진, 모든 상식을 깨는 과감한 경로를 보면서도 의심하지 않았다."
    - "「알겠어.」"
    - "%YOU%은(는) 그 도면을 챙기고, %SEX%에게 고개를 끄덕였다. 말투는 조용하지만 단호했다."
    - "「네 『광기』를 함께 실현하자. 지원도, 대응책도, 전부 네 리듬에 맞출게.」"
    - "「넌 앞만 보고, 네가 그린 이 『청운의 지도』대로 달리면 돼.」"
    - "입가의 미소가 넓어졌다. 모든 것을 계산한 책사 같기도, 장난이 성공하기 직전의 아이 같기도 한 웃음이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼——」"
    -
    - fontSize: 1.2rem
      content: "레이스 당일, 교토 경기장, 출전 전 대기실——"
    - "%SEX%가 문을 열자, 바깥 코스의 소리와 빛, 뜨거운 바람이 한꺼번에 밀려들며 %SEX%의 푸른 머리카락을 날렸다."
    - "%SEX%는 빛을 등지고 서 있었다. 뜨겁게 달아오른 배경 속에서, 옆얼굴의 윤곽이 유난히 또렷했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「낚을 거라면, 대어를 노리는 것만으론 부족하죠——」"
    - "%SEX%는 한 걸음 내디뎠다. 목소리가 소란을 선명하게 뚫고 나왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「멋지게, 완벽하게, 무슨 일인지 몰라도 입이 떡 벌어져서 다물지 못할 만큼, 낚아 보겠어요!」"
    - "빛의 바다에 완전히 녹아들기 전, %SEX%는 돌아보며 마지막 한마디를 남겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래야…… 재밌잖아요.」"
    - "문이 천천히 닫힌다."
    - "응원의 말은 길지 않았다. %YOU%은(는) 알고 있었으니까."
    - "(오늘의 %SEX%는…… 무적이다!)"


kiku_sho_win:
  title: "국화상 (승리)"
  lines:
    - "세이운 스카이가 가장 먼저 결승선을 통과하자, 산이 무너질 듯한 함성이 터져 나왔다."
    - "중계진이 온 힘을 짜내어 외치는 소리가 확성기를 통해 경기장에 울려 퍼졌다."
    - content:
        - fontWeight: bold
          content: "중계"
        - fontSize: 1.2rem
          content: "「세이운 스카이! 세이운 스카이가 결승선을 통과합니다! 믿을 수 없는 대도주! %SEX%가 해냈습니다! 세이운 스카이! %SEX%의 이름처럼, 오늘 교토 경기장은 구름 한 점 없는 드넓은 푸른 하늘입니다!」"
    -
    - "경기장에 함성이 울려 퍼지는 가운데, 세이운 스카이가 안으로 들어와 등 뒤로 문을 닫았다."
    - "두꺼운 문이 바깥의 광기에 가까운 열기를 순식간에 차단했다."
    - "%YOU%은(는) 아무 말 없이 조용히 %SEX%를 바라보며, 승리의 외침을 기다렸다."
    - "하지만 돌아온 것은 세이운 스카이의 들뜬 외침이 아니었다."
    - "%SEX%는 차가운 문에 등을 기대고 잠시 서 있었다. 갑자기 찾아온 이 고요함이 진짜인지 확인하는 듯했다."
    - "그리고 길게, 천천히, 레이스 내내, 어쩌면 그보다 훨씬 오래 쌓여 온 긴장을 한숨에 내뱉었다."
    - "%SEX%의 승부복은 땀에 흠뻑 젖어 몸에 달라붙어 있었다. 격렬한 운동 뒤 아직 가라앉지 않은 몸의 들썩임이 드러났다."
    - "머리카락은 이마와 목에 축축하게 달라붙었고, 뺨은 흥분과 가쁜 숨으로 선명하게 붉었다."
    - "가슴은 여전히 크게 오르내렸다. 숨을 쉴 때마다 묵직한 만족감이 묻어났다. 마치 산 하나를 움직여 낸 풀무 같았다."
    - "세이운 스카이는 고개를 들어 %YOU%을(를) 바라봤다."
    - "먼저 눈이 마주쳤고, 이어 입꼬리가 걷잡을 수 없이 올라갔다."
    - "그 미소는 맑은 물에 떨어진 먹처럼 번졌다. 작은 곡선에서 얼굴 전체로 퍼지더니, 마침내 티 없이 의기양양하고 천진난만한 환한 웃음이 되어 대기실의 어둑함마저 몰아낼 듯했다."
    - "%SEX%는 숨을 들이마셨다. 목소리는 흥분과 피로로 조금 쉬었지만 유난히 선명하고 힘찼다. 한마디마다 승리의 무게가 실려 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「작전——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - fontSize: 1.2rem
          content: "「——대! 성! 공!」"
    - "말이 끝나기가 무섭게, %SEX%는 기쁨에 떠밀려 발사된 푸른 포탄처럼 품으로 뛰어들었다. 두 팔로 목을 꼭 끌어안고, 땀에 젖은 뺨과 뜨거운 숨을 목덜미에 묻었다."
    - "하지만 그 폭발적인 기세는 한순간뿐이었다. 환희의 힘은 금세 빠져나갔고, %SEX%는 사냥에 성공한 뒤 기력을 다 쓴 고양이처럼 축 늘어져 매달렸다. 미세한 떨림과 만족스러운 한숨만이 남았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤…… 보셨어요!?」"
    - "%SEX%의 목소리는 옷에 파묻혀 먹먹하게 들렸지만, 그 안의 들뜬 기쁨은 감출 수 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「처음 천 미터를 엄청 빠르게 치고 나갔을 때, 뒤에 있던 애들 표정…… 특히 스페셜 위크요! %SEX%의 눈이 이렇게 동그래졌어요!」"
    - "%SEX%는 살짝 떨어져서 눈을 과장되게 동그랗게 뜨더니, 스스로도 「풋」 하고 웃음을 터뜨렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%THEY%는 제가 미쳤다고 생각했겠죠. 삼천 미터 레이스를 시작부터 그렇게 달렸으니까. 그래도 아무도 절 그냥 보내 주진 않았어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제 『대도주』라는 평판이 너무 무서웠던 거죠? 한번 놓치면 다시는 못 따라잡을까 봐, %THEY%는 두려워했어요.」"
    - "세이운 스카이는 눈을 가늘게 뜨며, 교묘한 책사의 의기양양함을 드러냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음 천 미터에서는, 일부러 속도를 『떨어뜨렸어요』.」"
    - "%SEX%의 손가락이 뚜렷하게 아래로 향하는 포물선을 그렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「금방이라도 무너져서, 언제든 뒤처질 것처럼 보일 만큼요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뒤에서는 속으로 좋아했겠죠? 『거봐, %SEX% 역시 안 되잖아. 더는 허세를 못 부리겠지』 하면서요. 그리고 죽음의 언덕에 닿기 전에 어떤 자세로, 어느 쪽에서 추월하는 게 편할지 웃으며 계산했겠죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「죽음의 언덕이라…… 흥.」"
    - "%SEX%는 작게 콧방귀를 뀌었다. 은근한 오만함이 묻어났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전 거기 잔디의 습도, 맞바람의 각도, 역대 편자 자국까지 조사했어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제게 가장 좋은 가속 지점은 다들 생각하는 언덕 꼭대기도 중턱도 아니었어요. 중앙 관중석의 그늘이 드리워지고, 땅이 가장 단단하게 다져져 있고, 햇빛의 영향이 가장 적은—— 그 십오 미터 구간이었죠.」"
    - "세이운 스카이는 몸을 살짝 앞으로 기울이며 목소리를 낮췄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 거기서 가속하기 시작했을 때, 뒤에서는 분명 멍해졌을 거예요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「머릿속으론 필사적으로 생각했겠죠. 『저런 미친 짓을, 언덕 앞에서 마지막 힘을 다 쓴다고? 함정이야! 먼저 힘을 쓰게 만들려는 거야!』 하고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇게 망설인 한순간—— 짠! 기회는 끝.」"
    - "%SEX%는 갑자기 몸을 바로 세우고, 경쾌하게 손가락을 튕겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스페의 마지막 추격은 매서웠어요. 정말 매서웠죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX%의 편자가 땅을 긁는 소리, 전력을 다하는 소리가 바로 뒤에서 들렸어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 %SEX%의 리듬은 이미 제가 흐트러뜨린 뒤였죠. 초반의 터무니없는 스퍼트를 따라오느라, %SEX%의 체력 소모는 %SEX%의 예상보다 훨씬 컸어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마지막 언덕에서, %SEX%는 제가 휘저어 놓은 물살 속에 이미 낚인 물고기였던 거예요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마지막 직선에서 %SEX%의 막판 가속이 아무리 강해도, 몇 마신이나 앞서 나간 저한테는 못 닿죠~」"
    - "%SEX%가 표정을 생생하게 바꾸며 열정적으로, 예술 작품 같은 큰 계획을 모두 설명하고 나자, %SEX%를 지탱하던 흥분도 마침내 빠져나갈 곳을 찾았다."
    - "%SEX%는 다시 힘이 풀려 품으로 무너지듯 기대더니, 안심하고 온몸의 무게를 맡겼다."
    - "%YOU%은(는) %SEX%를 단단히 받아 주고, %SEX%의 땀에 젖은 옆머리를 살며시 정돈했다."
    - "「피곤하지? 오늘은 마음껏 땡땡이쳐도 돼. 세상이 끝날 때까지 자도 좋고.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으응……」"
    - "세이운 스카이는 나른한 고양이처럼, 콧소리로 작고 모호하게 대답했다. 그러고는 %SEX%가 얼굴을 더 깊이 묻고 움직이지 않았다."
    - "대기실은 완전히 고요해졌다. 점점 길고 고르게 이어지는 %SEX%의 숨소리와, 창밖에서 희미하게 이어지는 승리의 함성만이 먼 파도처럼 들렸다."
    - "시간이 이곳에서 느려진 듯, 한참이 지났다."
    - "%SEX%가 다시 입을 열었다. 목소리는 아주 작았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……이겼어요.」"
    - "%SEX%는 고개를 들었다. 앞머리는 아직 젖어 있었고, 푸른 눈동자는 깜빡임 없이 이쪽을 바라봤다. 대기실 천장 조명의 빛과, 이쪽의 모습이 비쳤다."
    - "그 안에는 조금 전 작전을 되짚을 때의 날카로움도 교활함도 없었다. 맑은 기쁨과, 조금은…… 믿기지 않는 듯한 황홀함만이 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤……」"
    - "「여기 있어……」"
    - "%YOU%은(는) 다정하게 대답했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「해냈어요.」"
    - "질문도, 확인을 바라는 말도 아니었다."
    - "선명하고 고요하면서도, 더없이 묵직한 선언이었다. %SEX%는 자신에게, 그리고 %YOU%에게 이 사실을 알렸다."
    - "「그래, 해냈어.」"
    - "「오랫동안 깨지지 않던 국화상 기록까지 깼지. 아무도 가능성을 인정하지 않던 대도주로. 국화상을 사상 처음으로 제패한 도주 주자—— 그게 바로 너야.」"
    - "「창밖의 함성은 단순한 승리만을 축하하는 게 아니야. 역사에 남을 훌륭한 전략에 바치는 찬사야. 의심은 오늘부로 전부 사라졌어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤~」"
    - "세이운 스카이는 아이처럼 헤실헤실 웃었다. 그러고는 %SEX%가 다시 품에 얼굴을 가져다 비비며, 가장 편안한 자리를 찾았다."
    - "창밖에서는 승자를 향한 함성이 여전히 그치지 않았다. 이 맑은 하늘을 찬양하는 듯했다."
    - "이 조용한 작은 방에서, 세이운 스카이는 말없이 기대어 있었다. %SEX%의 얼굴에 떠오른 미소는 맑고 환했다. 계산과 날카로움은 사라지고, 순수한 기쁨과 피로 뒤의 평온함만이 남았다."
    - "오늘 교토 경기장의 하늘처럼, 구름 한 점 없이 드넓은 맑은 하늘……"


# 三冠獲得 菊花賞ターン終了後の次ターン開始 全能力+5
ws_triple_crown:
  title: "축승회!!!"
  lines:
    - "국화상 다음 날 낮, 트레센의 한 방에서 축승회가 열렸다."
    - "긴 책상들을 이어 만든 커다란 식탁은 음식으로 가득 찼다. 니시노 플라워는 앞치마를 두르고 분주히 오갔고, 내오는 요리는 갈수록 화려해졌다."
    - "통째로 숯불에 구운 도미는 몸이 활처럼 휘어 있었다. 겉은 먹음직스럽게 익었고, 곁에는 무즙과 레몬이 놓여 있었다. 게살 크림 고로케는 작은 산처럼 쌓였고, 황금빛 튀김옷에서는 기름이 자글자글 배어 나왔다."
    - "커다란 냄비에 담긴 대합 맑은국은 뚜껑을 열자 하얀 김과 함께 감칠맛 나는 향이 피어올랐다. 국물 위에는 얇게 썬 유자 껍질이 떠 있었다. 고른 두께로 썬 연어회는 접시 위에서 윤기를 뽐냈다."
    - "가운데에는 큼직한 당근 케이크가 놓여 있었다. 토핑은 더없이 호화로웠다."
    - "스페셜 위크와 킹 헤일로는 들어오자마자 식탁에 엎드려 있었다. 뺨은 식탁에 붙이고 두 팔은 축 늘어뜨린 채, 꼬리 두 개가 바닥에 길게 그림자를 드리웠다."
    - "그래스 원더가 옆에서 작은 목소리로 타이르고 있다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「스페! 킹! 오늘은 친구를 축하하는 날이잖아요. 기운 내세요.」"
    - "%URARA%도 폴짝폴짝 뛰어와 위로했다."
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - "「스페! 킹! 기운 내! 우라라는 아직 한 번도 이긴 적 없지만, 그래도 씩씩한걸!」"
    - "그래스 원더는 %URARA%의 어깨에 손을 얹고 한마디 했다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「우라라, 그건 위로가 안 되잖아요.」"
    - "잠시 후, 킹 헤일로가 갑자기 벌떡 일어나 천장을 향해 외쳤다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「다음엔! 다음엔 반드시 이기겠어!!!」"
    - "스페셜 위크도 고개를 들고, 두 손으로 자기 뺨을 두드렸다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「맞아요! 다음엔 꼭 이길 거예요!!!」"
    - "세이운 스카이는 문틀에 기대 그 광경을 보며, 뒤에서 꼬리를 느긋하게 한 번 흔들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(저 둘도 참~)"
    - "니시노 플라워가 마지막 요리를 내왔을 때, 세이운 스카이는 다가가 코를 킁킁거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우와—— 플라워, 이번엔 트레이너 쌤 다음 달 월급까지 쓴 거 아니에요? 너무 호화로운데요!」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「그야, 평소와는 다르니까요. 에헤헤.」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「지금 스카이 씨는, 3관을 달성한 경주 %UMA%잖아요!」"
    - "니시노 플라워는 다정하게 말하며, 파티 모자를 꺼내 세이운 스카이의 머리에 씌워 주었다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「축하해요!」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「축하해요!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「축하해요!」"
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「축하해요!」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「축하해요!」"
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - "「축하해요!」"
    - acc: 1
      content: "「축하해! 스카이!」"
    - "축하하는 목소리가 사방에서 밀려왔다. 세이운 스카이는 머리를 긁적였고, 뺨이 살짝 붉어졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤, 기억해 주는 사람이 있을 줄은——」"
    - "엘이 뒤에서 세이운 스카이의 등을 탁 치자, %SEX%의 몸이 앞으로 기울었다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「시치미 떼지 마요! 이 영광과 축하를 제대로 받아요. 마땅히 받을 만하니까요!」"
    - "그러고는 %SEX%가 시선을 돌려 이쪽을 바라보더니, 목소리를 낮추고 짓궂게 웃었다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「트레이너 쌤은 밤새 입꼬리가 올라가 있네요?」"
    - "%YOU%은(는) 음료 잔을 든 손을 멈추고 가볍게 헛기침한 뒤, 손으로 입가를 만졌다—— 확실히 주체할 수 없이 계속 올라가 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 너무 티 내시는 거 아니에요?」"
    - "「너도 마찬가지거든. 오늘 밤 꼬리가 계속 흔들리고 있잖아.」"
    - "%SEX%는 잠시 멍해졌다. 귀가 홱 곤두섰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네? 무슨 말씀을——?」"
    - "%YOU%은(는) 더 대꾸하지 않고 잔을 들어 허공에서 %SEX%에게 건배를 청했다. 세이운 스카이는 눈을 가늘게 뜨더니, 풋 하고 웃었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자자—— 음식 식겠어요, 여러분! 어서 먹어요!」"
    - "그 뒤로 몇 시간 동안 잔과 접시 부딪히는 소리가 끊이지 않았다. 엘이 어디선가 발포주를 꺼냈고, 우라라는 한 잔만 마시고도 횡설수설했다. 그래스 원더는 웃으며 %SEX%의 입가를 닦아 주었다."
    - "니시노 플라워는 처음부터 거의 먹지도 않고, 내내 웃으며 모두를 챙겼다."
    - "떠들썩한 연회가 끝나자, %YOU%과(와) 세이운 스카이가 방 정리를 맡았다."
    - "정리가 끝났을 때는 저녁이었다. 노을이 방 안을 연한 주황빛으로 물들였고, 세이운 스카이는 의자 등받이에 기대 기지개를 켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후아아—— 드디어 끝났다! 트레이너 쌤——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「——아니지, 3관 트레이너 쌤——」"
    - "세이운 스카이는 짓궂게 호칭을 고쳤다."
    - "「응?」"
    - "%YOU%은(는) 주방에서 고개를 내밀었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇게 태연하게 받아들이시네. 뻔뻔하시긴~」"
    - "세이운 스카이는 능글맞게 웃으며 놀렸다."
    - "「헤헤~ 스카이 덕을 보는 거지. 넌 내 자랑이야!」"
    - "「그래! 말해 봐, 뭐가 갖고 싶어?」"
    - "%SEX%는 눈을 깜빡였다. 마치 그 말을 기다렸다는 듯, %SEX%는 %YOU% 앞에서 검지를 흔들며 조금씩 입꼬리를 올렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤—— 때가 되면 알려 드릴게요~」"

# 【祝勝会！！！】後、ターン終了時
we_old_money:
  title: Old Memory
  lines:
    - "축승회가 끝난 그날 밤."
    - "%YOU%은(는) 설거지를 마치고 잠옷으로 갈아입은 뒤, 알람을 맞추고 잠자리에 들었다."
    - "따르릉—— 따르릉——"
    - "몽롱한 의식 속에서, %YOU%은(는) 다급한 초인종 소리를 들은 것 같았다."
    - "따르릉—— 따르릉—— 따르릉——"
    - "(잠깐…… 정말 누가 누르고 있잖아!)"
    - "「누구야, 이 밤중에……」"
    - "%YOU%은(는) 몸을 일으켜 머리를 긁적이고, 휴대전화를 봤다—— 새벽 두 시."
    - "이 시간에 초인종을 누르다니, 술 취한 사람이 집을 잘못 찾았나."
    - "따르릉따르릉따르릉따르릉——"
    - "「……나가요.」"
    - "%YOU%은(는) 하품하며 문으로 가서, 문을 열었다……"
    - "밖에는 세이운 스카이가 서 있었다."
    - "헐렁한 카키색 조끼에 짙은 회색 작업용 반바지, 머리에는 챙이 넓은 낚시 모자를 쓰고 있었다."
    - "등에는 거대한 짐이 두 개. 세로로 긴 것은 낚싯대 가방 모양이고, 가로로 부푼 것은 잡다한 도구가 든 듯했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤! 좋은 아침이에요! 가요! 출발!!!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아~ 스카이구나…… 밤낚시 갈 거면 미리 말하지…… 이런 한밤중에……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「밤낚시 아니에요! 출발! 목적지는——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「호주—— 리자드섬! 목표는—— 흑새치!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지금 출발하면, 도착할 때 딱 아침이에요!」"
    - "%YOU%은(는) 입을 벌렸다. 머리가 도무지 상황을 따라가지 못하고 있었다."
    - "「……잠이 덜 깬 건가?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 주 전, 바로 이 시간에!」"
    - "세이운 스카이는 짐을 옆에 내려놓고, 한 손은 허리에 댄 채 다른 손으로 %YOU%을(를) 가리키며 따졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「약속하셨잖아요! 발뺌하지 마세요!」"
    - "말을 마친 %SEX%는 허리를 굽혀 짐을 들고 한 걸음 다가왔다. 그대로 %YOU%을(를) 밖으로 끌어낼 기세다."
    - "「잠깐, 잠깐, 잠깐——」"
    - "%YOU%은(는) 급히 문틀을 붙잡았다."
    - "「너무 갑작스럽잖아! 휴가 신청은 어쩌고?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「둘 다 이미 해 뒀어요!」"
    - "「내 것까지 어떻게 신청했는지는 일단 제쳐 두고, 계획은? 거기서 낚시하려면 허가 같은 건 필요 없어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저랑 가는데, 계획을 걱정하시는 거예요?」"
    - "(너랑 가니까 걱정하는 거지……)"
    - "「돈은? 둘이 쓰는 경비는 어쩌고?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「걱정 마세요…… 제가 쏠게요! 트레이너 쌤은 얌전히 제가 먹여 살리는 대로 계세요~」"
    - "(그 말투, 묘하게 마음이 안 놓이는데……)"
    - "「……적어도 옷은 챙기게 해 줘.」"
    - "세이운 스카이는 움직임을 멈추고 %YOU%을(를) 위아래로 훑어보더니, %YOU%의 구겨진 잠옷을 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음…………」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「확실히, 잠옷은 좀 그렇네요.」"
    - "%SEX%는 주머니에서 타이머를 꺼냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다녀오세요! 경주마 선수! 제한 시간 오 분!」"
    - "「네, 네~ 전설의 조교사 세이운 스카이 님~」"
    - "%YOU%은(는) 영문도 모른 채 짐을 꾸리고, 공항으로 끌려갔다……"


kiku_sho_lose:
  title: "국화상 (패배)"
  lines:
    - "국화상 당일, 교토 경기장."
    - "세이운 스카이는 %RANK%착으로 결승선을 통과했다."
    - "%YOU%이(가) 인파를 헤치고 %SEX%를 찾았을 때, %SEX%는 코스 가장자리에 서서 고개를 숙이고 두 손으로 무릎을 짚고 있었다."
    - "주위로 사람들이 오갔다. 환호하는 사람, 푸념하는 사람, 기자들에게 둘러싸인 사람도 있었다."
    - "%YOU%이(가) %SEX% 곁으로 다가가 입을 열기도 전에, %SEX%가 먼저 고개를 들었다."
    - "얼굴에는 미소가 떠 있었다."
    - "입꼬리는 올라가 있었지만, 눈에는 빛이 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%RANK%착이에요.」"
    - if: Number(d.RANK) <= 5
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나쁘지 않죠?」"
    - "%SEX%의 목소리는 조금 쉬어 있었다. 손을 들어, %SEX%를 위로하려는 %YOU%을(를) 막았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……말하지 마세요…… 아무것도…… 꺼내지 마세요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가요.」"
    - "%SEX%는 몸을 바로 세우고 풀 부스러기를 털었다. 움직임이 몹시 느렸다."
    - "대기실은 조용했다. %SEX%는 짐을 정리했고, %YOU%도 정리했다. 아무도 말하지 않았다."
    - "%YOU%이(가) 위로하려 할 때마다, %SEX%는 큰 목소리로 말을 막았다."
    - "%SEX%는 아주 천천히 정리했다. 하나하나 접어서 내려놓았다. 마치 중요한 일을 하는 것처럼."
    - "그리고 경기장을 나와, 돌아가는 차에 올랐다."
    - "가는 내내, %SEX%는 창가에 기대 흘러가는 풍경을 바라봤다."
    - "한마디도 하지 않았다."


# BE 菊花賞敗北または不出走の翌週ターン終了 以後出走禁止・調教禁止（強制終了はしないが、以後セイウンスカイは調教も出走もできない）
soft_be:
  title: "영원한 자유"
  lines:
    - "국화상이 끝난 뒤, 세이운 스카이는 한마디도 하지 않았다……"
    -
    - "다음 날, 트레이닝장에는 %SEX%의 모습이 보이지 않았다."
    - "%YOU%은(는) 오전 내내 기다렸지만, %SEX%는 오지 않았다."
    - "%YOU%은(는) %SEX%가 어디로 갔을지 알고 있었다."
    - "낚시터는 트레이닝장에서 멀지 않은 강가에 있었다. %YOU%과(와) %SEX%가 처음 만난 곳이다."
    - "%YOU%은(는) 강을 따라 걸었고, 멀리서 익숙한 모습이 보였다."
    - "%SEX%는 낚시터에 앉아 낚싯대를 쥐고, 물 위로 두 다리를 흔들고 있었다."
    - "발소리를 들은 %SEX%가 돌아봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라, 트레이너 쌤.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여긴 어떻게 아셨어요?」"
    - "%SEX%는 웃으며 %YOU%에게 손을 흔들었다. 느긋한 말투는 평소와 조금도 다르지 않았다."
    - "%YOU%은(는) 낚시터에 올라가 %SEX% 옆에 앉았다."
    - "「그걸 네가 물어?」"
    - "%SEX%는 헤헤 웃고는, 다시 수면을 바라봤다."
    - "「물고기는 있어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「없어요. 오늘 물고기들은 똑똑하네요. 안 낚여요.」"
    - "「그럼 뭘 낚고 있는데?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그냥 기다리는 거예요.」"
    - "%YOU% 일행은 그렇게 앉아 있었다."
    - "햇살이 수면을 비추어 잘게 반짝였다. 이따금 바람이 불면 강가의 갈대가 바스락거렸다."
    - "오랜 시간이 흘렀다."
    - "「스카이……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네?」"
    - "「저기, 기분은 좀 나아졌어?」"
    - "%SEX%는 대답하지 않았다."
    - "「국화상은 이제 지나간 일이야.」"
    - "%SEX%는 여전히 대답하지 않았다."
    - "%YOU%은(는) %SEX%의 옆얼굴을 바라봤다."
    - "%SEX%는 수면을 응시하고 있었다. 얼굴은 몹시 고요했다."
    - "「스카이?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤……」"
    - "%SEX%가 입을 열었다. 목소리는 아주 작았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가기 싫어요.」"
    - "「아직 마음이 안 풀렸어?」"
    - "「그럼 한 달 쉬어. 같이 여행 가자.」"
    - "「몰디브도 좋겠다! 낚시하기엔 최고잖아. 말레이시아의 고양이 도시도 좋고! 그리고——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤!」"
    - "세이운 스카이는 %YOU%의 말을 끊었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여행 가자고 해 주셔서, 정말 기뻐요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 트레이닝은…… 이제 됐어요.」"
    - "「왜?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가기 싫으니까요.」"
    - "%YOU%은(는) 하려던 말을 곱씹다가 삼켰다."
    - "「그럼 앞으로 레이스는?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 달려요.」"
    - "%SEX%는 %YOU%의 말을 끊었다. 단호한 말투였다."
    - "「스카이——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 달려요.」"
    - "%SEX%는 다시 한번 말했다."
    - "이번에 %SEX%는 웃지도, %YOU%을(를) 보지도 않았다. 수면의 찌만 바라봤다."
    - "%YOU%은(는) %SEX%를 오랫동안 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「돌아가세요. 전 여기 좀 더 있을게요.」"
    - "%YOU%은(는) 움직이지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말이에요, 돌아가세요. 저 어디 안 사라져요.」"
    - "%YOU%은(는) 일어나 %SEX%를 바라봤다."
    - "%SEX%는 %YOU%에게 손을 흔들었다. 얼굴에는 미소가 떠 있었다."
    - "「내일 보자.」"
    - "%YOU%은(는) 돌아서서 몇 걸음 걷다가, 한 번 뒤를 돌아봤다."
    - "%SEX%는 낚시터에 앉아 낚싯대를 쥐고 다리를 흔들었다. 평소와 조금도 다르지 않았다."
    -
    - "사흘째에도, %SEX%는 트레이닝장에 오지 않았다."
    - "나흘째에도 오지 않았다."
    - "닷새째, %YOU%은(는) 다시 강가로 갔다."
    - "%SEX%는 여전히 그곳에 있었다."
    - "%YOU%을(를) 보자, %SEX%는 또 평소의 느긋한 미소를 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 또 오셨어요? 그렇게 세이가 좋으신가~」"
    - "%YOU%은(는) 다가가 %SEX% 옆에 앉았다."
    - "「물고기는?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「입질이 없네요.」"
    - "「얼마나 낚시한 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「모르겠어요.」"
    - "%YOU%은(는) %SEX%와 함께 조용히 강가에 앉아 있었다."
    - "저녁이 될 때까지."
    - "「정말 트레이닝 안 할 생각이야?」"
    - "%SEX%는 대답하지 않았다."
    - "「스카이——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤.」"
    - "%SEX%는 %YOU%의 말을 끊고, 낚싯대를 옆에 내려놓은 뒤 일어섰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「돌아가서 자고 싶어요.」"
    - "%SEX%는 떠났다."
    - "%YOU%은(는) 낚시터에 앉아 멀어지는 %SEX%의 뒷모습을 바라봤다."
    - "바람이 강물을 스치고, 찌가 물 위에서 작게 흔들렸다."
    - "%YOU%은(는) 혼자서 오랫동안 앉아 있었다."


# クラシック級12月1週、ターン開始
ws_47_48:
  title: "놀라움 없는 레이스"
  lines:
    - fontSize: 1.2rem
      content: "아리마 기념 한 달 전——"
    - "「스카이—— 출전 %UMA% 포스터 나왔어——」"
    - "세이운 스카이는 창가 소파에 몸을 웅크린 채, 펼친 『낚시 과학』을 얼굴에 덮고 고르게 숨 쉬고 있었다."
    - "목소리를 듣자 책자가 미끄러져 내려가고, 아직 졸음이 남은 푸른 눈동자가 드러났다."
    - "%YOU%과(와) 세이운 스카이는 나란히 앉아 한 장씩 넘겼다."
    - "여제—— 에어 그루브. 불사조—— 그래스 원더. 세대의 왕—— 킹 헤일로. 유유히 장거리를 감싸는 온천 김—— 메지로 브라이트…………"
    - "「이번 아리마는 정말 쟁쟁하네.」"
    - "%YOU%과(와) 세이운 스카이는 보면서 감탄했다."
    - "그러다가 %SEX%의 페이지를 펼쳤다."
    - "포스터 속 %SEX%는 눈빛이 날카롭고, 입가에는 평소처럼 여유 있는 옅은 미소를 띠고 있었다."
    - "위에는 「책략의 별」이라는 큰 글씨가, 아래에는 자세한 설명이 적혀 있었다. 「코스를 장기판으로 만드는 전술의 예술가, 황금 세대의 지혜로운 빛」."
    - "세이운 스카이의 시선은 그 설명에 몇 초 동안 머물렀다."
    -
    - "국화상에서 대승한 뒤, 세이운 스카이의 이름은 단숨에 널리 알려졌다. 엘 콘도르 파사, 스페셜 위크, 그래스 원더, 킹 헤일로와 함께 황금 세대로 불리게 되었다."
    - "팬의 수도 자연스럽게 늘어 편지가 눈처럼 학원으로 날아들었고, %YOU%의 책상은 온갖 편지로 뒤덮이곤 했다."
    - "다양한 팬들이 호감과 안부를 전해 왔다."
    - "그리고 각계의 「평론가」와 「오랜 경마 팬」들이 보낸 전술 제안과 기대 섞인 분석도 갈수록 늘어났다."
    - "매일 트레이닝 부서의 전화로 셀 수 없는 취재 요청이 들어왔고, 질문은 몇 번이고 똑같았다."
    - "「세이운 스카이 선수, 다음 레이스에는 어떤 놀라운 전술을 준비하고 계신가요?」"
    - "「다른 경쟁자들의 데이터는 이미 완벽하게 분석하셨다고 보시나요?」"
    - "「선수에게는 조금만 꾀를 쓰면 승리도 손쉬운 일인가요?」"
    - …………
    - "%YOU%이(가) 받는 압박도 세이운 스카이의 명성과 함께 나날이 커졌다."
    - "책상은 팬레터와 이른바 「전문가의 조언」으로 뒤덮였다."
    - "%YOU%은(는) 매일 정보를 추려 내고, 외부의 관심과 트레이닝 리듬 사이에서 균형을 잡으며, "
    - "수많은 목소리 속에서도 %YOU% 일행이 처음 정한 방향을 굳게 지켜야 했다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아……」"
    - "%YOU%은(는) 이따금 세이운 스카이가 푸념하는 소리를 들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「요즘 팬들의 기대가 점점 높아져요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너무 높아서…… 다음 레이스에서 뭔가 『압도적인』 승리를 보여 주지 못하면, 다들 크게 실망할 것 같아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 다들 제 작전을 맞히려고 해요. 문제 풀듯이요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어떻게 달리든 누군가 튀어나와서 『역시 그랬군!』이라고 하죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『경기장을 뒤흔들』 놀라움이, 이제 없어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이런 레이스는, 재미없어요……」"


before_arim_kin_c:
  title: "아리마 기념 (전)"
  lines:
    - fontSize: 1.2rem
      content: "출전 당일, 선수 준비실——"
    - "햇살이 블라인드를 통과해 나무 바닥에 밝고 어두운 줄무늬를 그렸다."
    - "세이운 스카이는 이미 승부복으로 갈아입고, 거울 앞에서 머리의 데이지 머리핀을 고쳐 꽂고 있었다. 빈틈없는 손길은 국화상 날보다도 정성스러웠다."
    - "TV에서는 아침 사전 방송이 꽤 큰 소리로 흘러나왔다."
    - "「……그리고 최대 관심사는 역시 『책략의 별』 세이운 스카이! 국화상에서 역사적인 대도주를 선보인 뒤, %SEX%는 여제 에어 그루브의 경험, 그래스 원더의 치밀한 계산, 킹 헤일로의 설욕을 향한 귀환에 어떻게 맞설까요? %SEX%에게는 이미 확고한 계획이 있을 거라 믿어 의심치 않습니다!」"
    - "진행자가 출연자를 향해 물었다. 「오늘 %SEX%는 어떤 전술을 쓸 거라고 생각하시나요?」"
    - "출연자는 웃으며 두 손을 펼쳤다. 「마술사에게 다음 마술을 묻는 것 같군요. 하지만—— 세이운 스카이라면 치밀하게 계산된 마술이겠죠. 그러니 제 생각에 %SEX%는——」"
    - "삑……"
    - "세이운 스카이는 TV를 껐다."
    - "방 안이 순식간에 조용해졌다. 에어컨의 낮은 작동음만 남았다."
    - "%SEX%는 창가로 가서, %SEX%를 위해 흔들리는 깃발과 응원 팻말을 바라봤다."
    - "「스카이와 함께 지혜를 빛내자!」라고 적힌 것, 추상적인 장기판과 말을 그린 것, 「다음 기적은 뭐야? 기다릴게!」라고 적힌 것도 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다들 기다리고 있어요…… 하아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제 『책략』을, 제 『계산』을, 또 한 번의 『당연한』 멋진 승리를요.」"
    - "「그 사람들 신경 쓰지 마. 너답게 하면 돼.」"
    - "세이운 스카이는 작게 한숨을 쉬고, %YOU%에게 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「말은 그렇지만, 하아…… 됐어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다녀올게요, 트레이너 쌤……」"
    - "복도 벽에 걸린 %SEX%의 거대한 포스터가 조명 아래 유난히 눈에 띄었다. 「책략의 별」이라는 글씨가 빛나고 있었다."
    - "%SEX%는 그 앞을 지나가면서도 신경 쓰지 않았다."


# 特性【見えない枷】獲得
arim_kin_win_c:
  title: "아리마 기념 (승리)"
  lines:
    - "세이운 스카이가 가장 먼저 결승선을 통과해 확실한 차이로 승리하자, 나카야마 경기장은 끓어오르는 열광에 휩싸였다."
    - "중계진이 포효했다."
    - content:
        - fontWeight: bold
          content: "중계"
        - "「완전히 일방적입니다! 책략의 별의 완승! 초반 대도주부터 막판의 두 번째 가속까지, 모든 것이 손안에 있었습니다! %SEX%는 다시 한번 『지혜의 지배력』이 무엇인지 보여 주었습니다!」"
    - "세이운 스카이는 천천히 돌아오며, 완벽한 승자의 미소를 띠고 사방의 관중석을 향해 손을 흔들었다."
    - "팬들의 비명은 지붕을 날려 버릴 듯했고, 수많은 카메라가 %SEX%를 겨냥했다. 「책략의 별」이 여유롭게 개선하는 순간을 담으려는 것이다."
    -
    - fontSize: 1.2rem
      content: "대기실 안——"
    - "문이 닫히는 순간, 바깥의 소란이 차단되었다."
    - "세이운 스카이는 소파에 엎드렸다. 얼굴의 미소는 썰물처럼 순식간에 사라졌다."
    - "몇 분 동안 엎드려 있던 %SEX%는 몸을 일으켰다. 들떠서 뛰지도, 아이처럼 자랑하지도 않았다."
    - "%SEX%는 그저 의자 쪽에 앉아, 건네받은 물을 조금씩 마셨다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이겼네요.」"
    - "날씨를 말하듯 담담한 목소리였다."
    - "「멋진 승리였어. 리듬 조절은 예상보다도 정교했고.」"
    - "세이운 스카이는 입꼬리를 움직였다. 그 미소에는 힘이 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇죠. 초반 가속 타이밍부터, 중반에 격차를 유지하며 주는 심리적 압박, 마지막 직선에서 두 번째로 가속하는 지점까지…… 전부 계획대로였어요.」"
    - "%SEX%는 고개를 들었다. 눈에는 승리의 빛 대신, 바닥을 알 수 없는 고요함, 아니…… 공허함마저 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤…… 아까 결승선을 통과할 때…… 마음속에, 아무것도 없었어요.」"
    - acc: 1
      content: "「이겼는데도 기쁘지 않아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음—— 꼭 그런 건 아니에요. 이기면 기쁘죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만——」"
    - "세이운 스카이는 잠시 말을 멈췄다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「국화상 때의 『해냈다!』 하는 흥분도, 예전처럼 계산이 들어맞았을 때의 은근한 기쁨도 없어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「느껴지지 않아요…… 아무것도……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마치…… 풀이 과정이 긴 수학 문제를 풀고, 마지막 숫자를 적을 때 『아, 풀었네』 하고 생각하는 것뿐이에요.」"
    - "세이운 스카이는 의자 등받이에 기대 눈을 감았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「밖에서는 저렇게 환호하는데, 마음속은 조용해요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너무 조용해서…… 조금 무서워요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - ……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저…… 어디가 이상한 걸까요?」"
    - "%YOU%은(는) %SEX%를 바라보며 잠시 뜸을 들였다."
    - "「그 고요함은 너무 지쳤기 때문일지도 몰라. 하지만 방금 말한—— 마음속에 아무것도 없다는 건—— 어떻게 답해야 할지 모르겠어.」"
    - "「일단 쉬어. 다만…… 얘기하고 싶어지면, 들어 줄게.」"
    - "%YOU%은(는) 세이운 스카이를 위로하며, %SEX%에게 수건을 건넸다."
    - "세이운 스카이는 수건을 받아 얼굴에 덮고, 작게 「네」라고 했다."
    - "「난 먼저 기자들과 팬들을 상대하고 올게. 여기서 푹 쉬어. 축승회는…… 네가 괜찮을 때 해도 돼.」"
    - "%SEX%는 고개를 끄덕이고 의자에 몸을 깊이 기댔다. 수건 아래 얼굴은 보이지 않았다."
    - "%YOU%은(는) 조용히 문을 닫아, 바깥의 소란을 잠시 %SEX%에게서 떼어 놓았다."
    -
    - "혼자 남은 대기실——"
    - "수건 아래의 호흡이 점점 고르게 변했다."
    - "오랜 시간이 흐른 뒤, 세이운 스카이는 수건을 내리고 조금 공허한 얼굴로 멍하니 천장을 바라봤다."
    - "방은 조용했다. 멀리서 %SEX%를 위한 환호성이 희미하게 들려와, 파도처럼 문을 두드렸다."
    - "세이운 스카이의 시선에는 초점이 없었다. 이 작은 방 안에서, 생각은 점점 먼 곳으로 흘러갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(이겼어…… 또 이겼어…… 가장 『세이운 스카이』다운 방식으로.)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(다들…… 기쁘겠지?)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(나도 기뻐야 하는 거잖아?)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(그런데 왜……)"
    - "세이운 스카이의 머릿속에 먼 옛날의 장면이 스쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(어릴 때네…… 그러고 보니 요즘 한동안 집에 못 갔구나……)"
    -
    - "여름, 본가의 툇마루. 할아버지는 부채를 부치고, %SEX%는 돗자리에 누워 하늘에 느긋하게 떠가는 구름을 바라보고 있다."
    - "세이운 스카이는 할아버지의 다리를 베고 누워 있었고, 할아버지는 다정하게 %SEX%의 머리를 쓰다듬고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할아버지—— 구름은 저렇게 높이 날잖아. 가고 싶은 데 어디든 갈 수 있어?」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「하하~ 물론이지. 스카이도 언젠가 구름처럼 높이 날 수 있을 거야~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어!? 정말?」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「그럼~ 스카이, 네 이름이 무슨 뜻인지 아니?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음…… 『푸른 구름』?」"
    - "할아버지는 웃었다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「하하, 더 깊은 뜻도 있단다.」"
    - "세이운 스카이는 궁금한 듯 고개를 갸웃했다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「『청운의 뜻』이라는 거야.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「푸른 하늘의 구름처럼 뜻을 높이 품고, 위로 또 위로 나아가서, 언젠가 큰일을 이루고 훌륭한 사람이 되길 바란다는 뜻이지.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「구름처럼 높이 날아 보렴~」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「스카이에게도 청운의 뜻이 있니~」"
    - …………
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(할아버지, 지금 뭐 하고 계실까……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(그때 뭐라고 대답했더라. 잘 기억이 안 나네……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(그래도 어릴 때 가족들은 큰 뜻에 대해 별로 말하지 않았어. 아빠도 엄마도 『스카이는 건강하고 즐거우면 돼』라는 말만 하셨지.)"
    - "세이운 스카이는 문밖에서 「책략의 별」을 향해 쏟아지는 엄청난 기대의 함성을 들었다. 멀어진 줄 알았던 「청운의 뜻」에 대한 설명이 갑자기 선명하게 %SEX%의 머릿속을 두드렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「청운의 뜻…… 원대한 포부……」"
    - "세이운 스카이는 중얼거렸다."
    - "%SEX%는 갑자기 몸을 바로 세웠다. 눈빛에서 망설임이 사라지고 차갑도록 또렷한 빛이 모여들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「팬들은 날 좋아하고, 기대하고, 응원해 줘. 기자들은 다음 『책략』을 물어봐. 난 『황금 세대』이고, 『책략의 별』이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할아버지가 이 이름을 주신 것도, 분명…… 이런 기대와 명성에 걸맞은 사람이 되길 바라셔서겠지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼! 이렇게 제멋대로 지낼 순 없어. 이런 이름을 받고, 이런 기대를 짊어졌는데……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아……! 내일부터는 진심으로 해 보자! 땡땡이도 안 칠 거야. 더 노력하고, 더 원대한 목표를……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『세이운』이라는 이름에 걸맞아야 해!」"
    - "%SEX%는 남몰래 주먹을 쥐었다. 손마디가 하얘졌다."
    - "하지만 그 기운이 몸 안에서 팽팽하게 버티며, 오히려 %SEX%를 똑바로 세웠다—— 너무 꼿꼿해서, 조금은 경직될 만큼."
    -
    - "저녁 축승회에서, %YOU%은(는) 눈빛이 단단해진 세이운 스카이를 보고 조금 낯설다고 느꼈다."
    - "%SEX%도 알고 있었다. 어렵고, 몹시 「세이운 스카이」답지 않다는 것을."
    - "하지만 지금, 승리 뒤에 찾아온 공허함과 「기대를 저버릴지 모른다」는 희미한 불안이 %SEX%에게 속삭였다—— 어쩌면 이것이야말로 %SEX%가 걸어야 할 「올바른」 길일지도 모른다고."
    - "%YOU%은(는) 세이운 스카이에게 물어보려 했다."
    - "돌아온 것은 「걱정 마세요, 트레이너 쌤. 그냥…… 몇 가지 깨달은 게 있어서요……」라는 말뿐이었다."


# 特性【見えない枷】獲得
arim_kin_lose_c:
  title: "아리마 기념 (패배)"
  lines:
    - "통로에는 무거운 분위기가 감돌았다. 세이운 스카이는 고개를 숙인 채 빠르게 지나갔고, 뒤에서는 드문드문 무시하기 어려운 수군거림이 들렸다."
    - content:
        - fontWeight: bold
          content: "행인 A"
        - "「『책략의 별』은 무슨…… 오늘은 그래스 원더한테 완전히 막혔잖아.」"
    - content:
        - fontWeight: bold
          content: "행인 B"
        - "「그러게. 새로운 수가 있을 줄 알았는데, 이게 다야?」"
    - content:
        - fontWeight: bold
          content: "행인 C"
        - "「야, 목소리 낮춰……」"
    - "반대쪽에서는 더 날카로운 목소리가 들려왔다. 흥분한 팬 몇 명이 이쪽으로 몰려들어 언성을 높였다."
    - content:
        - fontWeight: bold
          content: "팬 A"
        - "「이 트레이너, 전술을 어떻게 짠 거야!? 그 상황에선 당연히 먼저 속도를 바꿨어야지!」"
    - content:
        - fontWeight: bold
          content: "팬 B"
        - "「맞아! 스카이의 재능만 낭비했잖아!」"
    - content:
        - fontWeight: bold
          content: "팬 C"
        - "「전에 몇 번 이겼다고 들떴나 보지? 좀 더 프로답게 굴어!」"
    - "%YOU%은(는) 깊이 숨을 들이마시고, 근거 없는 비난을 참으며 치미는 짜증을 억눌렀다. 빠른 걸음으로 세이운 스카이를 따라잡아 비교적 조용한 준비실로 들어갔다."
    - "문이 닫히자마자 %SEX%는 벽에 기댔다. 가슴이 조금씩 들썩였다. 피로 때문이 아니라, 무언가를 억누르고 있었다."
    - "%SEX%는 평소 패배했을 때처럼 곧바로 레이스를 되짚지 않고, 그저 말없이 서 있었다."
    - "%YOU%은(는) 생각을 정리하며 이성적인 말투를 유지하려 했다. 「여론을 수습하는」 트레이너다운 모습을 보이려 했다."
    - "「오늘 상황은…… 여론이 우리에게 불리해.」"
    - "「두려워하지 마. 난 언제나 네 앞에 있을 거야.」"
    - 「…………」
    - "「다만, 많은 사람이 지금까지의 전술 방식이…… 너무 『모험적』이고 『개인적』이라고 보고 있어.」"
    - "세이운 스카이는 눈을 들어 %YOU%을(를) 바라봤다. 아무 말도 하지 않았다."
    - "「생각해 봤는데, 방향을 조금 조정하는 게 좋을지도 몰라.」"
    - "「네 개성을 버리라는 건 아니야. …… 조금 자제하고, 좀 더 안정적으로 가자는 거지.」"
    - "「예를 들면 에어 그루브 선배처럼, 더 안정적이고 대중의 예상에 맞는 주행 방식을 참고하는 거야. 적어도 중요한 레이스에서는——」"
    - "세이운 스카이의 동공이 살짝 좁아졌다. 믿을 수 없다는 표정으로 %YOU%을(를) 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「방식이요? 안정적이요?」"
    - "세이운 스카이가 %YOU%의 말을 끊었다. 목소리는 높지 않았지만 얼음처럼 차가웠다."
    - "%SEX%는 몸을 바로 세웠다. 눈에는 %YOU%이(가) 한 번도 본 적 없는 날카로운 거부감이 서려 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 이제부터 다들 『옳다』고 하는 방식으로 달리라는 거예요? 표준적인 경주 %UMA% 지침서대로 달리라는 말씀이세요?」"
    - "%YOU%은(는) 차분히 설명하려 했지만, 말투에는 외부의 압박에서 비롯된 조급함이 묻어 있었다."
    - "「정답을 말하는 게 아니야. 더 성숙한 전략을 말하는 거지!」"
    - "「봤잖아, 즉흥적인 『기책』에 지나치게 의존하는 게 얼마나 위험한지! 더 체계적이고 통제 가능한 방법으로 모두의 기대에 부응해야 해——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「모두의 기대요?」"
    - "세이운 스카이는 되묻고는, 차갑게 웃으며 귀를 뒤로 젖혔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥—— 트레이너 쌤, 혹시…… 무서워지셨어요?」"
    - "%YOU%의 가슴에 짜증이 치밀었다. 말투에는 자신도 모르게 억지로 설득하려는 기색이 실렸고, 목소리가 점점 높아졌다."
    - "「무서운 게 아니야. 네 선수 생활에 책임을 지려는 거지!」"
    - "「네 성격대로만 놔두면, 이기면 기책이고 지면 트레이너가 무능하고 전술은 애들 장난이야! 밖에서 지금 뭐라고 하는지 알아!?」"
    - "말을 내뱉자마자, %YOU%은(는) 후회했다."
    - "이건 %YOU%이(가) 하고 싶었던 말이 아니었다. 적어도 전부는 아니었다. 하지만 연일 이어진 압박과 근거 없는 비난이 결국 말에 실려 터져 나오고 말았다."
    - "세이운 스카이의 동공이 살짝 좁아졌다."
    - "%SEX%는 낯선 사람을 보듯 이쪽을 바라봤다. %SEX% 주위에 감돌던 거부감은 점점 깊은 실망과 상처로 굳어졌다."
    - "후회가 한꺼번에 %YOU%의 가슴을 찔렀다."
    - "「잠깐, 스카이. 그런 뜻이 아니야.」"
    - "「방금은…… 내가 말을 잘못했어.」"
    - "「미안해……」"
    - "세이운 스카이는 조용히 %YOU%을(를) 바라보며, 아무 말 없이 다음 말을 기다렸다."
    - "「그러니까…… 다음 주부터는 조금 더 체계적인 트레이닝을 시도해 봐도 좋겠다는 거야.」"
    - "「그저…… 대비책을 하나 더, 선택지를 하나 더 늘리는 거지. 어때?」"
    - "「걱정 마! 매일 충분히 쉴 시간은 남겨 둘게. 불규칙했던 일정을 정리할 뿐이야.」"
    - "%YOU%은(는) 진지하게 %SEX%를 바라봤다. %SEX%가 말 뒤에 숨은 혼란과 압박을 알아주길 바랐다. 또 %YOU%은(는) %SEX%를 얽매려는 것이 아니라, 비난 속에서 조금 더 「안전」해 보이는 길을 찾으려는 것뿐임을 이해해 주길 바랐다."
    - "세이운 스카이는 몇 초간 말없이 있다가, 마침내 아주 가볍게 한 번 고개를 끄덕였다."
    - "다투지도, 반박하지도 않았다. 하지만 어떤 격한 말보다도 선명하게 선을 그었다."
    - "남은 시간은 침묵 속에 흘렀다."
    - "짐을 정리하고, 경기장을 나와, 돌아가는 차에 올랐다."
    - "돌아오는 내내 세이운 스카이는 고개를 옆으로 돌리고 흘러가는 밤 풍경을 바라봤다. 이따금 지나가는 가로등 아래에서 속눈썹이 고요한 그림자를 드리웠다."
    - "%YOU%은(는) %SEX%의 얼굴에서 감정을 읽을 수 없었다. 하지만 축 처진 귀는 %SEX%의 낙담을 감추지 못했다."
    - "%YOU%은(는) 숨 막히는 침묵을 깨려고 몇 번이나 입을 열었지만, 적절한 말을 찾지 못했다."
    - "차의 잔잔한 주행음만이 길고 조용한 귀갓길을 채웠다."
    - "두 사람 사이에 처음으로, 무겁고 말없는 거리감이 내려앉았다."


# （有馬記念勝利）シニア級2月1週、ターン開始
ws_cloud_mot_aw:
  title: "청운의 뜻? (1)"
  lines:
    - "아침 햇살이 창문을 지나 책상 위의 트레이닝 계획표에 내려앉았다. 글씨가 지나치다 싶을 만큼 반듯했다."
    - "세이운 스카이는 이미 트레이닝복으로 갈아입고, 계획표를 보며 스톱워치를 대조하고 있었다. 표정은 전에 없이 진지했다."
    -
    - "최근 몇 주 동안, %SEX%는 다른 사람처럼 변했다."
    - "스스로 만든 「청운의 뜻 트레이닝법」을 엄격하게 지켰다."
    - "새벽 다섯 시의 지구력 달리기, 초 단위로 맞춘 오후 전술 분석, 밤에는 코어 운동까지 몰아붙였다."
    - "웃음은 줄고, 잡담은 사라졌으며, 가장 좋아하는 낚시 시간마저 줄어들다 결국 사라졌다."
    -
    - "지칠 대로 지친 세이운 스카이의 얼굴을 보며, %YOU%이(가) 걱정스럽게 말했다."
    - "「스카이, 안색이 안 좋아. 어젯밤에도 잠이 부족했어?」"
    - "「요즘 훈련량이 너무 많아. 오늘은 쉬는 게 어때?」"
    - "세이운 스카이는 재빨리 하품을 삼키고, 세차게 고개를 저었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괜찮아요. 모두의 기대에 걸맞으려면, 이 정도는 감수해야죠.」"
    - "말을 마치고, 준비 운동을 하러 갔다."
    - "%YOU%은(는) 이토록 자신을 엄격하게 관리하는 세이운 스카이를 보며 만감이 교차했지만, 결국 그 뜻을 존중하기로 했다……"
    -
    - "트레이닝장에서 %SEX%는 프로그램대로 움직이는 기계 같았다."
    - "평소의 가벼운 걸음은 조금 뻣뻣해졌고, 언제나 편안하게 유지하던 호흡도 자주 흐트러졌다."
    - "늘 하던 코너 연습을 마친 뒤, %SEX%는 무릎을 짚고 숨을 골랐다. 이마의 머리카락이 땀에 젖어 있었다."
    - "세이운 스카이는 혼잣말을 중얼거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼…… 이 기록으로는 부족해…… 『청운의 뜻』에는 아직 멀었어……」"
    - "%YOU%은(는) 세이운 스카이의 상태가 이상하다는 것을 알아차리고, %SEX%에게 물통을 건네며 주의를 주었다."
    - "「일단 쉬어. 상태가 안 좋아. 평소 네 리듬이 아니야.」"
    - "세이운 스카이는 물통을 받으며 고집스럽게 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아뇨. 예전 습관은 너무 느슨했어요…… 고쳐야 해요.」"


# イベント「青雲の志？（1）」後、屋上で発生
sr_cloud_mot_aw:
  title: "청운의 뜻? (2)"
  lines:
    - "며칠 뒤 저녁——"
    - "뜻밖에도, 세이운 스카이가 예전처럼 사라졌다……"
    - "%YOU%이(가) 세이운 스카이를 찾았을 때, %SEX%는 텅 빈 옥상의 가장 높은 곳에 혼자 앉아 있었다. 무릎을 끌어안고, 멀리 노을에 물든 구름을 멍하니 바라보고 있었다."
    - "평소 이 시간이라면, %SEX%는 어딘가에서 자고 있을 터였다."
    - "%YOU%은(는) 다가가 %SEX% 옆에 앉았다. 처음 %SEX%를 만났을 때처럼, %SEX%와 이야기를 나누기 시작했다."
    - "「새 전술에 대한 영감을 찾고 있어?」"
    - "세이운 스카이는 천천히 고개를 저었다. 목소리는 아주 작았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤…… 요즘 잠이 안 와요.」"
    - "%SEX%는 한참 뜸을 들이다가, 말을 이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「눈을 감으면, 여러 목소리가 들리는 것 같아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그—— 점점 늘어나는 기대…… 점점 늘어나는 책임……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 노력해야 해요. 할아버지가 주신 이름처럼—— 청운의 뜻.」"
    - "세이운 스카이는 하늘을 바라봤다. 눈에는 막막함이 가득했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데 저…… 달리는 게 점점 무거워져요. 예전처럼 구름같이 둥실 떠오르던 느낌을…… 찾을 수가 없어요.」"
    - "%SEX%는 돌아봤다. 눈에는 길을 잃은 아이처럼 막막함이 가득했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤—— 제가 잘못하고 있는 걸까요? 할아버지의 『청운의 뜻』은 이렇게 자신을 지치게 만드는 건가요?」"
    - "%YOU%은(는) 지친 세이운 스카이를 보며 만감이 교차했다."
    - "「다른 길을 택해도 돼——」"
    - "「지금의 넌 아직 이 방식에 익숙하지 않아.」"
    - "세이운 스카이는 멍하니 하늘을 바라봤다. 긴 침묵 끝에, %SEX%의 눈빛이 다시 고집스러워졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아뇨! 트레이너 쌤.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「언젠가는 이렇게 될 거예요. 더 빨리 익숙해져야 해요…… 두 배로 노력해야 해요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤…… 믿어 주세요. 늘 그래 주셨잖아요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 결심만큼은 지키게 해 주세요. 제 작전을 늘 망설임 없이 믿어 주셨던 것처럼요……」"
    - "이렇게까지 말하니, %YOU%도 더는 말을 꺼내기 어려웠다."
    - "%YOU%이(가) 할 수 있는 일은, 조용히 %SEX%와 함께 이 노을을 끝까지 바라보는 것뿐이었다."


# イベント「青雲の志？（2）」後、ターン終了 特性【見えない枷】解除 好感+50 恋慕+2
we_cloud_mot_aw:
  title: "청운의 뜻? (3)"
  lines:
    - "그날 밤 옥상에서 누렸던 잠깐의 고요함은 의구심을 걷어 내지 못했다."
    - "오히려 세이운 스카이는 두 배로 노력해서 그 불확실함을 떨쳐 내려고 하는 듯했다."
    - "%SEX%는 틀에 박힌 그 계획을 더욱 엄격하게 실행했다. 기록만 충분히 좋아지면 「청운의 뜻」을 향한 올바른 길임을 증명할 수 있다고 여기는 듯했다."
    - "어느 날, 달리던 세이운 스카이의 어깨에는 부자연스러운 긴장이 서려 있었다. 호흡은 무겁고 흐트러졌으며, 예전처럼 힘든 일도 가볍게 해내던 리듬은 전혀 없었다."
    - "「스카이, 그만해! 오늘은 여기까지야!」"
    - "%YOU%은(는) 이상을 알아차리고 큰 소리로 제지했다."
    - "하지만 %SEX%는 못 들은 척했다. 아니, 듣고서 더 빠른 걸음으로 대답한 것인지도 모른다. 급격하게 방향을 바꿔야 하는 코너 연습 도중——"
    - fontSize: 1.2rem
      content: "쿵!"
    - "세이운 스카이의 몸이 굳었다. 왼쪽 발목이 부자연스러운 각도로 꺾이고, 온몸이 잔디 위로 무겁게 쓰러졌다."
    - "%YOU%은(는) 심장이 멎는 줄 알았다. 순식간에 %SEX% 곁으로 달려갔다."
    - "세이운 스카이는 얼굴이 창백했다. 혼자 일어나려다가 통증에 숨을 삼켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괘…… 괜찮아요. 그냥 미끄러졌을 뿐이에요……」"
    - "더 말하지 않고 조심스럽게 %SEX%의 발목을 살폈다. 심하게 변형된 곳이 없는 것을 확인하고, %SEX%를 업어 의무실로 달렸다."
    -
    - "의무실 안——"
    - "교의가 꼼꼼하게 살펴보고 진단을 내렸다."
    - content:
        - fontWeight: bold
          content: "교의"
        - "「발목 염좌입니다. 심각하진 않아요. 일주일 정도 안정하면 회복될 겁니다. 다만……」"
    - "「다만, 뭐죠?」"
    - "%YOU%은(는) 다급하게 물었다."
    - content:
        - fontWeight: bold
          content: "교의"
        - "「%SEX%는 정신적으로 너무 긴장해 있어요. 신경쇠약의 징후가 뚜렷합니다. 몸이 경고를 보내고 있는 거예요. 충분히 쉬고 긴장을 풀어야 해요. 몸만이 아니라요.」"
    - "의사는 신경을 안정시키고 염증과 통증을 줄이는 약을 처방한 뒤, 마지막으로 당부했다."
    - content:
        - fontWeight: bold
          content: "교의"
        - "「환경을 바꿔 보세요. 트레이닝장이 있는 곳에 머물지 말고요. 집으로 돌아가거나, 레이스 생각을 전혀 하지 않아도 되는 곳으로 가서, 저절로 눈이 떠질 때까지 자고 순수하게 즐거운 일만 하세요.」"
    -
    - "다음 날, 본가로 향하는 신칸센——"
    - "차 안에서 세이운 스카이는 발목에 붕대를 감은 채 창가에 기대어 있었다. 어제의 당혹감과 통증이 잦아든 뒤 남은 것은 더 깊은 침묵과 막막함이었다."
    - "%YOU%은(는) 따뜻한 음료 두 잔을 가져와, 하나를 세이운 스카이에게 건넸다."
    - "「의사 선생님 말씀, 들었지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네…… 죄송해요, 트레이너 쌤. 또 폐를 끼쳤네요.」"
    - "세이운 스카이는 음료를 받으며 작게 고개를 끄덕였다."
    - "「네가 다친 게 폐라는 게 아니야. 다칠 때까지 자신을 몰아붙이는 걸 보는 게 힘들었던 거지.」"
    - "%YOU%은(는) 한숨을 쉬고, 말투를 누그러뜨렸다."
    - "다정하게 %SEX%의 머리를 쓰다듬었다."
    - "「벌도, 휴가도 아니야. 필요한 『회복』이야. 할아버지 댁이 아마 최고의 회복 기지가 될 거야.」"
    - "「할아버지」라는 말에 세이운 스카이의 가라앉은 눈빛이 반짝였다. 뜻밖에도 말문이 터졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 그거 아세요? 할아버지 댁 뒷마당에는 오래된 매화나무가 있는데, 꽃이 피면 향기가 정말 좋아요. 할아버지는 매실잼도 만드시고요. 트레이너 쌤, 저 강 보세요. 예전에 할아버지가 저 굽이로 절 데리고 자주 낚시하러 가셨어요. 여름 저녁에는 마당에 잠자리가 잔뜩 낮게 날아다니는데, 할아버지가 비가 오려는 징조라고……」"
    - "세이운 스카이는 이런저런 이야기를 이어 갔다. 말투가 점점 가벼워지고, 얼굴에도 오랜만에 부드러운 기색이 떠올랐다."
    - "한 달 동안 긴장해 있던 어깨가, 할아버지와의 추억 속에서 자신도 모르게 풀려 갔다."
    -
    - "세이운 스카이의 본가——"
    - "정오, 두 사람은 세이운 스카이의 본가에 도착했다."
    - "전통적인 일본식 저택이었다. 햇살이 툇마루에 내려앉아 있었다."
    - "할아버지를 보는 순간, 세이운 스카이는 들떠서 손을 흔들며 외쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할아버지—— 나 보고 싶었어!?」"
    - "할아버지는 정정한 노인으로, 웃음이 호탕했다. 두 사람을 보자 곧바로 눈이 초승달처럼 휘었다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「어이구! 우리 대스타가 돌아왔구나! 이쪽이 트레이너 선생님인가? 어서 들어오게, 막 차를 우렸네!」"
    - "그러다 시선이 세이운 스카이의 살짝 절뚝이는 걸음에 닿았다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「어이쿠, 스카이. 발은……」"
    - "%YOU%은(는) 곧바로 설명했다."
    - "「트레이닝 중에 실수로 접질렀습니다. 진료는 받았고요. 일주일 정도 안정하면 괜찮아진다고 하니, 큰일은 아닙니다.」"
    - "할아버지는 눈에 띄게 안도했고, 얼굴에 다시 미소가 번졌다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「다행이군, 다행이야! 자, 어서 들어오게. 입구에 서 있지 말고.」"
    - "할아버지는 살뜰히 %YOU%과(와) 세이운 스카이를 부축하며 맞아들였다. 눈에는 걱정과 애정이 가득했다."
    - "간단히 인사를 나눈 뒤, 두 사람은 세이운 스카이의 할아버지를 따라 집 안으로 들어갔다."
    - "자리에 앉은 뒤, %YOU%은(는) 방구석의 절임 항아리를 발견했다."
    - "「지난번에 스카이에게 보내 주신 오이절임, %SEX%가 나눠 줬습니다. 정말 맛있더군요. 스카이는 마지막에 항아리까지 싹싹 비웠습니다.」"
    - "세이운 스카이는 얼굴을 살짝 붉히고, 조용히 %YOU%의 옷자락을 잡아당겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤……」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「하하하! 입에 맞았다니 다행이야! 올해 것은 간이 더 잘 배었지. 돌아갈 때 몇 통 챙겨 가게!」"
    - "할아버지는 호탕하게 웃었다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「마침 차도 막 우렸고, 가시와모치도 새로 만들었네. 들어와서 천천히 얘기하게. 발은 높이 올려 두고 쉬어야 빨리 낫지.」"
    - "뜨거운 찻김이 피어오르고, 가시와모치의 향기에 정원의 풀과 나무 냄새가 섞였다."
    - "두 번째 잔을 따를 무렵, 화제는 세이운 스카이와 처음 만났던 이야기에서 자연스럽게 레이스로 옮겨 갔다."
    - "「처음 %SEX%를 만났을 때는 땡땡이를 잘 칠 것 같다고 생각했습니다. 그런데 %SEX%가 누구보다 기회를 잘 포착할 줄은 몰랐죠.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「이 아이는 어릴 때부터 그랬네. 멍하니 있는 듯 보여도, 개울의 어느 돌 밑에 물고기가 있는지 %SEX%가 누구보다 잘 알았지.」"
    - "국화상에서 모두를 놀라게 한 대도주 이야기가 나오자, 할아버지는 특히 귀를 기울였다."
    - "최근의 아리마 기념을 이야기하며, %YOU%은(는) 잠시 뜸을 들였다."
    - "「%SEX%는 더 영리하게 이겼습니다. 전술은 나무랄 데가 없었죠. 다만, 레이스가 끝난 뒤에……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할아버지……」"
    - "세이운 스카이가 갑자기 작은 목소리로 대화를 끊었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내 이름의 『세이운』은 『청운의 뜻』에서 온 거지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데 할아버지도, 아빠도 엄마도…… 그 말로 날 얽매신 적은 없었잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어릴 때부터 기본적인 교육 말고는, 집에서 별다른 목표를 요구한 적도 거의 없었고.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「엄마는 늘 『스카이는 건강하고 즐거우면 돼』라고 하셨고, 아빠도 머리를 쓰다듬으면서 『오늘은 즐거웠니?』라고 물으시기만 했어.」"
    - "세이운 스카이는 고개를 들었다. 점점 어두워지는 하늘이 비친 눈동자에는 아이 같은 의아함이 담겨 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이름에 할아버지랑 아빠 엄마의 기대가 담겨 있다면…… 왜 말해 주지 않았어?」"
    - "할아버지는 찻잔을 내려놓고 손녀를 바라봤다. 옛일을 떠올리는 눈빛으로 천천히 말했다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「어릴 때, 나도 비슷한 걸 물어본 적이 있단다. 네가 뭐라고 대답했는지 기억하니?」"
    - "세이운 스카이는 고개를 저었다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「그때 넌 볼을 부풀리고 고개를 도리도리 흔들며, 『싫어! 그렇게 원대한 뜻 같은 건 너무 복잡해! 달릴 거라면, 자유롭게 달릴 거야!』라고 했지.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「그리고 내 손을 뿌리치고 마당으로 달려가서는, 저 오래된 매화나무 주위를 몇 바퀴나 돌면서 『바람처럼——! 구름처럼——!』 하고 외쳤단다.」"
    - "할아버지는 시선을 돌려, 어느새 훌쩍 자랐지만 길을 잃고 만 손녀를 바라보며 목소리를 누그러뜨렸다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「보렴, 답은 아주 오래전에 네가 스스로 내렸어. 무엇이 되느냐가 아니라, 어떻게 달리느냐였지.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「지금 넌 바람보다 빠르고, 구름보다 높이 올라갔단다. 하지만 가장 소중한 것을 뒤에 두고 온 건 아니니?」"
    - "해가 저물고, 마지막 한 줄기 금빛이 문득 멍해진 세이운 스카이의 얼굴을 스쳤다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「발을 다쳤으면 잘 치료하렴. 마음에 짐이 있으면 더더욱 내려놓고. 잊지 마라, 스카이. 집은 언제든 긴장을 풀고 쉬어 갈 수 있는 곳이란다.」"
    - "할아버지는 살며시 세이운 스카이의 머리를 쓰다듬었다."
    - "저녁 식사는 따끈한 고등어조림과 소박한 집밥이었다."
    - "할아버지는 웃으며 들판에서 있었던 일을 이야기했고, 레이스는 전혀 언급하지 않았다."
    - "세이운 스카이는 처음에는 말수가 적었지만, 점차 할아버지의 이야기에 웃음을 되찾고 평소의 자유로운 모습으로 돌아갔다."
    -
    - "희미한 빛이 드는 아침, %YOU%은(는) 몽롱한 잠에서 깨어났다."
    - "의식은 아직 완전히 깨어나지 않았지만, 감각이 먼저 이상을 포착했다——"
    - "품 안의 따뜻한 무게, 코끝에 닿는 익숙하고 산뜻한 샴푸 향, 목덜미를 스치는 고르고 부드러운 숨결."
    - "%YOU%은(는) 번쩍 눈을 떴다."
    - "세이운 스카이가 %YOU%의 품 안에 몸을 웅크리고 있었다. 푸른 긴 머리카락이 베개 위에 펼쳐져 있었고, 몇 가닥은 장난스럽게 %YOU%의 턱을 간질였다."
    - "%SEX%는 깊이 잠들어 있었다. 뺨을 팔에 누인 채, 평소의 느긋하고 능청스러운 표정 대신 완전히 편안한 잠든 얼굴을 하고 있었다."
    - "입술을 살짝 내민 모습이, 좋은 꿈이라도 꾸는 것 같았다."
    - "(이게 무슨 일이야!?)"
    - "갑작스러운 상황에 %YOU%은(는) 반사적으로 움찔했지만, 세이운 스카이가 꼭 끌어안고 있어 움직일 수 없었다."
    - "그 큰 움직임에 결국 %SEX%가 깨어났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음……」"
    - "세이운 스카이는 잠에 취한 콧소리를 내고 기지개를 켠 뒤, 천천히 눈을 떴다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋은 아침이에요…… 트레이너 쌤……」"
    - "졸음이 짙게 묻은, 잠기고 부드러운 목소리였다."
    - "「세이운 스카이?」"
    - "「왜…… 여기 있어?」"
    - "세이운 스카이는 눈을 비비더니, 얼굴에 장난스러운 미소를 띠었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그야 어젯밤에 세이가 잠이 안 왔거든요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「혼자 자려니까 심심하고, 양을 천한 마리까지 세다가 문득 생각났어요——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「——트레이너 쌤이랑 같이 자면, 늘 금방 잠들었지 하고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 몰래 들어왔죠~」"
    - "세이운 스카이는 가슴에 엎드린 채 가볍게 말했다. 마치 지극히 당연한 일이라는 듯했다."
    - "%YOU%은(는) %SEX%의 뻔뻔한 얼굴을 보며 쓴웃음을 짓고, 힘을 빼고 베개에 머리를 다시 눕혔다."
    - "「할아버지가 보셔도 괜찮겠어……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괜찮아요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할아버지는 트레이너 쌤 좋아하시거든요.」"
    - "「음…… 아니, 안 되겠어! 보상받아야겠어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네?」"
    - "「이번엔 몰래 안고 자는 베개가 됐으니까, 어떻게 보상받을까.」"
    - "「그래! 다음 낮잠 때는 스카이가 무릎베개를 해 줘. 괜찮을 것 같은데~」"
    - "말이 끝나기가 무섭게, 세이운 스카이의 여유로운 미소가 순간 굳었다."
    - "맑은 물에 먹이 퍼지듯, 홍조가 얼굴 전체를 뒤덮었다."
    - "%SEX%는 눈을 크게 뜨고 입술을 살짝 벌렸다. 무언가 반박하려 했지만, 짧은 숨만 새어 나왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「무릎…… 무릎베개?!!! 트레이너 쌤, 이 변태……」"
    - "「어—— 어젯밤엔 사악한 %UMA%한테 야습을 당했는데? 변태라면 오히려——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그, 그건 어젯밤에 잠이 안 와서 그런 거예요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 전에 의무실에서 낮잠 잘 때도, 트레이너 쌤이 옆에 계시면…… 확실히 잠이……」"
    - "세이운 스카이는 작게 중얼거렸다."
    - "%YOU%은(는) 부끄러워하는 세이운 스카이를 보며, %SEX%의 머리를 쓰다듬었다."
    - "「그래, 그래——」"
    - "「다음에 잠이 안 오면 미리 신청해. 갑자기 기습하면 트레이너 심장에 안 좋거든.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 알겠어요!」"
    - "세이운 스카이는 황급히 몸을 일으켰다. 붉어진 얼굴을 옆으로 돌리고, 아주 작은 목소리로 중얼거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「무릎베개도, 안 되는 건 아닌데……」"
    - "「응? 방금 뭐라고? 잘 안 들렸는데……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까—— 방금은——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할아버지 아침밥이요! 맞다! 아침 먹을 시간이네요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할아버지 아침밥이요! 아침 먹을 시간이네요!」"
    - "세이운 스카이는 황급히 침대에서 내려왔다. 신발마저 좌우를 바꿔 신고 있었다."
    - "말을 마치고는 거의 도망치듯 방을 뛰쳐나갔다. 문을 닫다가 자기 발에 걸려 넘어질 뻔했다."
    - "「야! 천천히! 접질린 발 조심해!」"
    - "(그런데, 점심 먹을 시간 아닌가……)"
    - "%YOU%은(는) 침대 가장자리에 앉아, 아직 남아 있는 %SEX%의 온기를 느꼈다."
    - "고개를 숙여 %SEX%가 구겨 놓은 잠옷을 바라봤다. 조금 전 %SEX%가 뻔뻔하게 굴다가 완전히 기가 꺾이기까지의 우스운 모습을 떠올리며, 결국 웃음 섞인 한숨을 쉬었다."
    -
    - "정오가 되어 할아버지와 작별하고, 두 사람은 돌아가는 차에 올랐다."
    - "돌아가는 내내 세이운 스카이는 %YOU%에게 %SEX%의 어린 시절 이야기를 끊임없이 들려주었다."
    - "저녁 무렵, 두 사람은 트레센으로 돌아왔다."
    - "익숙한 오솔길에 발을 디디자마자, 세이운 스카이는 살며시 %YOU%의 소매를 붙잡고 어리광을 부렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤~ 보세요, 이 발은 일주일 동안 쉬어야 한다고요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무도 옆에 안 있어 주면, 세이는 엄청 외롭고 쓸쓸할 텐데요?」"
    - "%YOU%은(는) %SEX%의 눈에 다시 떠오른 장난기 어린 생기과, 살짝 올라간 입꼬리를 바라봤다."
    - "그리고 이 오랜만에 듣는 어리광 섞인 말투—— 지난 한 달의 긴장과 방황이 본가의 바람과 할아버지의 말씀에 살며시 날아간 듯했다."
    - "%YOU%은(는) 웃음이 터질 뻔한 것을 참고 일부러 진지한 표정을 지었다. 하지만 눈에는 감출 수 없는 다정함과 애정이 담겨 있었다."
    - "「그래? 그럼 이렇게 『엄청 외롭고 쓸쓸한』 아가씨를 위해 뭘 해 주면 될까?」"
    - "세이운 스카이는 눈을 깜빡였다. 대답은 진작 정해 놓았다는 듯, 계획이 성공해서 신이 난 목소리로 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그게요…… 트레이너 쌤, 내일 오후에 세이랑 『아주 조용하고, 인생을 생각하기에 딱 좋은』 곳에 갈 시간 있으세요?」"
    - "「단도직입적으로 말해—— 어디서 낮잠 잘 건데?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「딩동댕~ 정답! 상으로 세이의 비밀 낮잠 장소에 한 번 초대해 드릴게요~ 냐하하~」"
    - "저녁 바람이 불었다. %YOU%은(는) %SEX%의 눈동자 속에 다시 맑게 갠 하늘을 보며, 웃으며 고개를 끄덕였다."
    - "「앞으로도 『청운의 뜻』을 좇을 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그건요…… 흘러가는 대로요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무튼, 이제 죽어라 트레이닝하진 않을 거예요……」"
    - "「그래? 그렇게 말하니까 의욕 넘치던 스카이가 조금 그리운데…… 가끔 한 번씩은 해 볼까?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「항의할게요! %UMA% 학대예요!」"
    - "「하하하…………」"
    - ………
    - ……
    - …
    -
    - "멀리서 마지막 한 줄기 노을이 부드럽게 지평선 아래로 내려앉았다."
    - "집에서 불어온 바람이 살며시 스쳐 갔다. 짓눌려 있던 두 자유로운 영혼을 감싸 안고, 더 넓은 하늘로 날려 보내듯……"


# （有馬記念敗北）シニア級2月2週、ターン開始 特性【見えない枷】解除 好感+50 恋慕+5
ws_lost_al:
  title: "길을 잃은 조타수"
  lines:
    - "차 안의 공기는 창밖의 흐린 하늘처럼 가라앉아 있었다."
    - "세이운 스카이는 뒤로 흘러가는 논을 바라보며, 손가락으로 창문에 옅게 서린 김 위에 무심코 그림을 그리고 있었다."
    - "%YOU%은(는) 맞은편에 앉아 몇 번이나 입을 열었다. 말이 혀끝까지 올라왔다가 다시 삼켜졌다."
    - "한 달 전과 마찬가지로, 공기에는 차가운 기운이 감돌았다."
    -
    - "아리마 기념에서 다툰 뒤, 한 달이 지났다."
    - "그 뒤로 세이운 스카이의 트레이닝 계획은 정밀하고 틀에 박힌 것이 되었다—— 몇 시에 일어나고, 몇 시에 달리고, 어떤 코스를 달리며, 몇 분을 쉴지까지 전부 계획표에 명확하게 적혀 있었다."
    - "전체 시간은 전과 같고 쉴 시간도 충분히 남겨 두었지만, 틀에 갇힌 느낌이 매번 트레이닝을 정해진 동작을 소화하는 일로 바꾸어 놓았다."
    - "%SEX%는 더는 드러내 놓고 항의하지 않았다. 다만 눈빛이 조금씩 어두워져 갔다."
    - "사흘 전, %SEX%는 방에 틀어박혀 오후 내내 편지를 써서 할아버지에게 보냈다."
    -
    - "어제, 할아버지에게서 %YOU%에게 직접 전화가 왔다. 전화 너머 목소리는 밝았다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「여보세요, 세이운 스카이의 트레이너 선생님인가? 요즘 시간 있나? 스카이를 데리고 하룻밤 묵어 가 주겠나. 마당의 매실이 익었는데, 늙은 몸이라 %SEX%의 도움이 필요해서 말이야.」"
    - "할아버지의 간곡한 초대에, %YOU%과(와) 세이운 스카이는 일주일의 휴가를 신청하고 고향으로 향하는 열차에 올랐다."
    -
    - "오후 다섯 시, 세이운 스카이의 본가에 도착했다."
    - "할아버지는 이미 입구에서 기다리고 있었다. 두 사람을 보자 웃으며 손을 흔들었다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「왔구나. 오느라 수고했어. 어서 들어오렴, 막 떡을 구웠단다.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「마침 저녁 먹을 시간이네. 일단 먹자꾸나. 이야기는 먹고 나서 하자.」"
    - "세이운 스카이는 옆에서 얌전한 고양이처럼 조용히 있었다. 그저 할아버지와 트레이너를 조용히 바라볼 뿐이었다."
    - "밤이 깊어지고, 정원에는 석등의 따스한 빛만 남았다."
    - "저녁 식사의 훈훈함이 아직 가시기 전에, 할아버지는 이쪽만 따로 툇마루로 불러 차를 우려 주었다."
    - "차 향이 툇마루에 퍼졌다. 간단히 안부를 나눈 뒤, 할아버지는 차를 더 따르며 온화한 시선을 보냈다."
    - "찻잔을 받자, 손끝에 따뜻한 도자기의 감촉이 느껴졌다."
    - "감사 인사를 하자, 할아버지가 말을 꺼냈다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「트레이너 선생님, 스카이 때문에…… 꽤 고생했겠지?」"
    - "「아닙니다. 스카이는 훌륭합니다…… 제 문제였습니다.」"
    - "「바깥의 목소리에 휘둘려, 처음 %SEX%를 선택했던 이유를 잊고 있었습니다.」"
    - "할아버지는 작게 고개를 저으며, 밤의 정원을 바라봤다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「아니네. 자네가 %YOURSEX%를 너무 아꼈던 거야. 너무 소중한 나머지…… %YOURSEX%가 『기준에 못 미친다』는 이유로 세상의 압박을 받을까 두려워서, 어떻게든—— %SEX%를 지키려 했지.」"
    - "할아버지의 말에 %YOU%은(는) 잠시 멍해졌다. 가슴속의 안개가 서서히 걷히는 듯했다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「스카이는 정답이라는 틀에 담을 수 없는 아이야. %SEX%가 세 살이었을 때……」"
    - "할아버지는 세이운 스카이의 옛이야기를 많이 들려주었다."
    - "장마철 달팽이가 궁금해서 교양 수업을 땡땡이친 일."
    - "보호 장비를 착용하지 않아 아버지에게 혼난 뒤, 장비 없이도 안전하다는 것을 증명하려고 더 유연하게 달리는 방법을 묵묵히 연구한 일."
    - "늦잠을 자고 싶어서 유치원에 가지 않고 나무 구멍에서 잠든 일…………"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「%SEX%의 어미가 자주 그랬지. %SEX%는 산골짜기의 바람 같아서, 붙잡으려 할수록 %SEX%는 더 빨리 빠져나간다고.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「하지만 자네가 %SEX%가 맴돌고 싶은 산이 되어 준다면, 오히려 %SEX%는 자네를 위해 머물 거야.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「트레이너 선생님, 자네는 %SEX%의 고삐가 아니네. %SEX%가 믿기로 선택한 사람이지—— 그거면 충분해.」"
    - "%YOU%은(는) 찻잔을 쥐었다. 오랫동안 팽팽하게 당겨져 있던 어딘가가 살며시 풀렸다."
    - "「……알겠습니다. 감사합니다.」"
    - "할아버지는 웃으며 말했다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「내일 아침에는 %SEX%와 개울가를 걸어 보게. 그 아이는 중요한 생각을 할 때마다 물소리가 필요하거든.」"
    -
    - "그날 밤, 손님방——"
    - "미닫이문이 조용히 열렸다. 세이운 스카이가 베개를 안고 밖에 서 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……잠이 안 와요.」"
    - acc: 1
      content: "「응…… 이리 와……」"
    - "%YOU%은(는) 다정하게 세이운 스카이를 불렀다."
    - "%SEX%는 깔아 둔 이불 옆에 무릎을 굽혀 앉았다. 두 팔로 다리를 끌어안고 한참 말이 없었다."
    - "달빛이 창살을 지나 %SEX%의 옆얼굴에 옅은 그림자를 드리웠다."
    - "한참 뒤, 세이운 스카이가 입을 열었다. 목소리는 아주 작아, 거의 밤 속에 녹아드는 듯했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤……」"
    - "「응.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「매일 정해진 트레이닝, 싫어요……」"
    - "「알아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「매일 정해진 휴식 시간도, 싫어요……」"
    - "「알아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더 싫은 건, 트레이너 쌤이 다른 사람들처럼 저를 보기 시작했다는 거예요.」"
    - "달빛이 방 안으로 비스듬히 들어와, %SEX%의 숙인 옆얼굴에 내려앉았다."
    - "%YOU%은(는) %SEX%가 아랫입술을 깨무는 것을 봤다. 눈가가 갑자기 붉어졌고, 얇게 고인 물기가 달빛 아래 선명하게 보였다."
    - "세이운 스카이의 목소리가 메었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다들 더 침착하게, 『옳은』 방식으로 달리래요…… 그건 신경 안 쓰면 돼요. 그런데 트레이너 쌤까지……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤까지 그런 눈으로 보세요…… 제가 그냥…… 『완벽』하게 다듬어야 할 작품인 것처럼요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 지금까지 이겨 온 건…… 뭐였던 거예요……」"
    - "눈물이 뺨을 타고 흘러, 끌어안은 베개 위에 떨어져 작고 짙은 얼룩을 만들었다."
    - "%SEX%는 소리 내어 울지 않았다. 어깨만 살짝 떨렸다. 비에 젖고도 고집스럽게 숨지 않는 고양이 같았다."
    - "%YOU%은(는) 두 팔을 벌려, %SEX%를 살며시 품으로 끌어당겼다."
    - "세이운 스카이는 %YOU%의 품에서 온몸의 힘을 풀고, 이마를 %YOU%의 어깨에 기댔다. 눈물이 금세 옷감을 적셨다. %YOU%은(는) 아무 말 없이 %SEX%의 떨리는 어깨를 감싸고, 손바닥으로 %SEX%의 등을 천천히 쓸어 주었다."
    - "「내가 잘못했어.」"
    - "세이운 스카이는 고개를 저었다. 어깨에 얼굴을 묻은 채, 물기 어린 목소리로 중얼거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저…… 저도 잘못했어요…… 고집도 부렸고요……」"
    - "「네가 부족하다고 생각한 적은 한 번도 없어……」"
    - "「그저 두려웠어——」"
    - "「네가 그런 말들에 상처받을까 두려웠고, 『자유』 때문에 지지를 잃을까 두려웠어…… 그런데 결국…… 먼저 널 얽맨 건 나였네.」"
    - "「바깥의 목소리를 널 훈련시키는 기준으로 삼아 버렸어…… 미안해.」"
    - "세이운 스카이는 더 울었다. 손가락으로 %YOU%의 등 쪽 옷을 꼭 움켜쥐어, 천이 한데 구겨졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 틀 안에…… 먼저 들어간 건 저예요…… 자유롭게 달려도 이길 수 있다는 걸 증명해야 한다고 생각하다가, 오히려 반드시 완수해야 할 임무로 만들어 버렸어요…… 트레이너 쌤의 계획표마저 제겐 압박이 됐고요……」"
    - "%YOU%은(는) %SEX%의 울음이 조금 가라앉기를 기다렸다가, 엄지로 %SEX%의 얼굴에 흐르는 눈물을 닦고 %SEX%의 눈을 바라봤다."
    - "「잘 들어, 스카이.」"
    - "「계약할 때 눈에 들어온 건 상식대로 움직이지 않고, 너무 자유로워서 골치 아프게 만드는 세이운 스카이였어.」"
    - "「바깥에서 어떤 압박이 오든, 난 네 앞에 설 거야.」"
    - "「『자제』할 필요 없어. 누구의 『옳음』에도 맞추지 않아도 돼. 너답게, 내게 질문을 던지는 유일무이한 레이스 %UMA%로 있어 줘.」"
    - "세이운 스카이는 젖은 눈으로 이쪽을 바라보며 작게 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……정말요? 다음 레이스에서 또 무모한 짓을 해도요?」"
    - "「정말이야…… 단, 조건이 있어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐…… 뭔데요……」"
    - "세이운 스카이는 경계하며 뒤로 움츠러들었다."
    - "「다음에 무언가 떠오르면, 아무리 엉뚱한 전술이라도, 내가 준 틀이 힘들더라도——」"
    - "%YOU%은(는) 손가락을 구부려 가볍게 %SEX%의 이마를 튕겼다."
    - "「직접 말해. 혼자 담아 두지 말고. 할아버지에게 편지로 고자질만 하지도 말고.」"
    - "「난 네 트레이너야. 남이 아니라고.」"
    - "세이운 스카이는 잠시 멍해졌다가 고개를 숙이고 작게 콧소리를 냈다. 얼굴에는 아직 눈물 자국이 있었지만, 들어올 때의 그늘은 이미 걷혀 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……알겠어요. 잔소리는.」"
    - "%SEX%는 베개를 안고 옆에 누웠다. 곧 고른 숨소리가 들려왔다."
    - "달빛이 %SEX%의 잠든 얼굴 위를 옮겨 가며, 살짝 올라간 %SEX%의 입꼬리를 비췄다. 무언가 무거운 것을 내려놓은 듯했다."
    -
    - "다음 날 아침, 하늘이 막 밝아지기 시작할 무렵."
    - "세이운 스카이는 드물게 일찍 일어났다. %SEX%는 살며시 미닫이문을 열고, 할아버지가 벌써 정원에 나와 있는 것을 봤다."
    - "할아버지는 소나무 분재를 정성스럽게 손질하고 있었다. 아침 안개는 아직 걷히지 않았고, 천천히 집중해서 손을 움직이고 있었다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「일어났니? 어젯밤은…… 어땠어?」"
    - "세이운 스카이는 툇마루 끝에 앉아 허공에 뜬 다리를 달랑거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응…… 얘기 잘했어.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「넌 어릴 때부터 똑같구나. 불만이 있으면 먼저 혼자 쌓아 두고, 더는 참지 못하게 되어서야 몰래 편지로 나한테 고자질하지.」"
    - "할아버지는 가위를 내려놓고 돌아봤다. 온화한 시선에는 모든 것을 안다는 듯한 기색이 있었다."
    - "세이운 스카이는 얼굴을 살짝 붉히고, 말을 길게 늘이며 어리광을 부렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에이, 할아버지가 제일—— 좋——은걸——」"
    - "할아버지는 웃으며 고개를 젓고, 옆의 나무 의자에 앉아 수건으로 손을 닦았다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「어릴 때부터 그랬지. 느긋하기가 아주 끝이 없었어. 하지만……」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「스카이, 네 이름의 『세이운』이 무슨 뜻인지 아니?」"
    - "세이운 스카이는 잠시 멍해졌다가, 솔직하게 고개를 저었다. 할아버지는 천천히 말했다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「『청운의 뜻』이란다.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「본래 담은 뜻은 높고 원대한 꿈, 큰 포부를 가지길 바란다는 거였지.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「어릴 때도 내가 그렇게 물었단다. 청운의 뜻이 있느냐고.」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「그때 넌 볼을 부풀리고 고개를 도리도리 저었지—— 『싫어! 그렇게 원대한 뜻 같은 건 너무 복잡해! 달릴 거라면, 자유롭게 달릴 거야!』 하고.」"
    - "말을 마친 할아버지가 먼저 작게 웃었다. 눈가의 주름에 따뜻한 기억이 겹쳤다."
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「그래서 그때부터 나도, 네 아빠 엄마도, 『원대한 포부』를 네게 요구하지 않았단다. 우리에게는——」"
    - content:
        - fontWeight: bold
          content: "할아버지"
        - "「네가 좋아하는 방식으로 건강하고 즐겁게 자라는 것. 그게 가장 큰 바람이었어.」"
    - "아침 햇살이 마침내 안개를 뚫고 정원에 비스듬히 들어와, 푸른 돌 위에 얼룩진 그림자를 드리웠다."
    - "세이운 스카이는 조용히 앉아, 아침 햇살을 받은 할아버지의 옆얼굴을 바라봤다."
    - "%SEX%는 아무 말도 하지 않았다. 평소 나른함과 장난기가 담기던 눈은 지금 깊은 생각에 잠겨 있었다."
    - "바람이 살며시 불고, 정원의 잎이 바스락거렸다."
    - "세이운 스카이는 고개를 숙여 가지런히 모은 발끝을 바라봤다. 한참이 지나서야 아주 작게 「응」이라고 했다."
    -
    - "오전 햇살이 미닫이문을 지나 다다미를 따뜻하게 물들였다. 잠에서 깨어나는 순간, %YOU%은(는) 조용한 시선이 %YOU%을(를) 향하고 있다는 것을 알아차렸다."
    - "눈을 뜨자, 세이운 스카이가 %YOU%의 잠자리 옆에 쪼그려 앉아 있었다."
    - "%SEX%는 무릎에 팔꿈치를 대고 두 손으로 뺨을 받친 채, 고개를 갸웃하며 눈도 깜빡이지 않고 %YOU%을(를) 바라보고 있었다."
    - "%YOU%이(가) 깨어난 것을 본 세이운 스카이는 말을 길게 늘이며, 한껏 놀리는 말투로 인사했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라~ 트레이너 쌤, 드디어 일어나셨어요? 해가 중천에 떴는데요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아주 푹 주무셨네요. 할아버지가 마당 분재를 전부 손질하고, 고양이 밥도 주고, 뒷산 산책까지 다녀오시는 동안 계속 지켜봤다고요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아~ 누군가는 어젯밤에 사람을 끌어안고 멋진 말만 하시더니, 『누구의 기대에도 맞추지 않아도 돼』, 『너답게 있어』, 감동해서 또 울 뻔했는데……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「——정작 본인은 팔자 좋게 해가 높이 뜰 때까지 주무시네요! 할아버지 말씀을 빌리면, 『트레이너는 실컷 자도 되고, %UMA%는 졸지도 못한다』는 거죠.」"
    - "%YOU%은(는) 미간을 문지르며 물었다."
    - "「……몇 시야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「열한 시요. 할아버지가 차리시는 점심, 곧 다 되겠는데요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤의 늦잠 자는 얼굴, 사진으로 남겨 뒀어요. 다음에 또 그렇게 딱딱한 계획표를 내미시면——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「——인쇄해서 트레이닝장 입구에 붙일 거예요!」"
    - "%SEX%는 우스꽝스러운 표정을 짓더니, 곧 「풋」 하고 웃었다."
    - "그 웃음은 그늘 하나 없이 눈부셨다. 어제의 무거운 마음은 푹 자고 일어나 방 안 가득한 햇살을 받으며 모두 날려 버린 듯했다."
    -
    - "소박하지만 푸짐한 점심을 먹은 뒤, 할아버지는 두 사람을 역까지 배웅했다."
    - "세이운 스카이의 품에 과자를 한가득 안겨 주고 어깨를 두드렸다. 말은 많지 않았지만, 자애로운 눈에는 「잘 부탁하네」라는 신뢰가 담겨 있었다."
    - "트레센 학원으로 돌아오자, 저녁 바람이 풀과 코스의 냄새를 실어 왔다."
    - "세이운 스카이는 열차에서 뛰어내려 깊게 숨을 들이마시고, 크게 기지개를 켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「돌아왔다——!」"
    - "%SEX%는 돌아서서 뒷짐을 지고, 뒷걸음치며 웃는 얼굴로 이쪽을 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤~ 내일은 강가에서 『트레이닝』하고 싶어요!」"
    - "「낚시?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「푸훗! 아쉽지만 오답이에요! 『유체 역학과 자연환경이 생물의 리듬에 미치는 잠재적 영향 관찰』이죠.」"
    - "「알아듣게 말해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「낚시하러 가자는 거예요! 그래도 이번엔 제대로 관찰할 거예요. 새로운 전술을 깨달을지도 모르잖아요~」"
    - "%YOU%은(는) %SEX%의 머리를 쓰다듬으며, 다정하게 고개를 끄덕였다."
    - "「나도 갈게. 먼저 압박감에 짓눌린 게 나였다니. 네 태평한 생활 방식을 좀 배워야겠어~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「푸훗—— 호감도 마이너스 1이에요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「태평하다니요. 낙천적인 거라고요!」"
    - "세이운 스카이는 볼을 부풀리고, 손가락으로 %YOU%을(를) 몇 번이나 콕콕 찔렀다."
    - "두 사람의 즐거운 대화가 이어졌다. 한때 무거웠던 압박감은 깃털처럼 가벼워졌다."
    - "어제의 눈물과 다툼은 정말 잠깐 내린 비 같았다."
    - "비가 그치고 하늘이 개었다. 구름을 이끄는 바람은 다시 자신의 리듬을 되찾았다……"


before_nikk_sho:
  title: "닛케이상 (전)"
  lines:
    - "닛케이상 당일, 코스 위로 구름이 낮게 내려앉아 있었다."
    - "관중석은 평소처럼 만석이었다. 관중석 위 전광판에서는 사전 예측이 흘러나왔고, 중계진은 각 선수의 근황을 분석하고 있었다."
    - "대기실에서 세이운 스카이는 구석의 접이식 의자에 다리를 꼬고 앉아, 태평하게 잡지를 넘기고 있었다."
    - "문이 열리고, %YOU%이(가) 들어왔다."
    - "「스카이, 준비하자. 컨디션은 어때?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「밖이 시끄럽네요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도, 상관없어요~」"
    - "%SEX%는 잡지를 덮어 옆 의자에 던져 놓고, 일어나 기지개를 켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어차피 저 사람들이 좋아하는 건 제가 아니라, 『승리』라는 말뿐이니까요.」"
    - "「너무 극단적인데~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괜찮아요~ 다녀올게요~」"


nikk_sho_win:
  title: "닛케이상 (승리)"
  lines:
    - "결승선 통과."
    - "세이운 스카이——! 가장 먼저 들어옵니다——!"
    - "중계진이 흥분해서 외쳤다. 관중석의 박수와 환호, 비명이 뒤섞였다."
    - "세이운 스카이는 속도를 줄이고 천천히 멈춰 섰다. %SEX%는 고개를 들었다."
    - "관중석에서는 %SEX%의 얼굴이 그려진 응원 깃발이 바람에 펄럭였다. 「책략의 별」이라고 적힌 팻말을 든 사람도 있었다. %SEX%의 이름을 외치는 사람도 있었다. 목소리는 쉬었지만 열정으로 가득했다."
    - "카메라가 %SEX% 앞을 스쳐 갈 때, %SEX%는 반사적으로 눈을 가늘게 뜨며 그 빛을 피하려 했다."
    - "하지만 다음 순간, %SEX%의 시선이 멈췄다."
    - "관중석 앞줄에서, 세이운 스카이 인형을 안은 작은 %UMA%가 힘껏 뛰고 있었다."
    - "작은 %UMA%는 키가 작아, 좌석 위에 올라서야 겨우 상반신이 보였다. %SEX%는 인형을 꼭 끌어안고 다른 손을 열심히 흔들며 무언가 외치고 있었다."
    - "그 목소리는 수만 명이 동시에 내는 소란에 섞여, 바다에 떨어진 물 한 방울처럼 작았다. 하지만 세이운 스카이의 귀는 그 목소리를 정확하게 잡아냈다—— 맑고, 꾸밈없고, 순수했다."
    - "조건 없는 애정이었다. 이겨서 외치는 것도, 주위가 외치니 따라 외치는 것도 아니었다."
    - "%SEX%는 그저 자신을 좋아할 뿐이었다. 그게 전부였다."
    - "세이운 스카이는 열심히 손을 흔들어, 그 애정에 화답했다."
    - "대기실에서 세이운 스카이는 책상에 엎드려, 생각에 잠긴 듯 %YOU%에게 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어쩌면…… 자유롭고 싶다고 모든 목소리를 거부해서는 안 되는 건지도 모르겠어요.」"
    - "「새로운 깨달음이야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네…… 그 아이, %SEX%는 다른 생각 없이 그저 제가 달리는 모습을 좋아하는 거예요. 그런 목소리는…… 시끄럽지 않아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러면 어떻게 해야 할까요. 이런 기대에 부응하려고 해야 할까요? 아니면 계속 제멋대로 해도 될까요?」"
    - "고민하는 세이운 스카이를 보며, %YOU%은(는) 살며시 %SEX%의 머리를 쓰다듬었다."
    - "「넌 언제나 내 기대에 부응하고 있는걸~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까요, 트레이너 쌤. 어떻게 해야 할까요. 이런 기대에 부응하려고 해야 할까요? 아니면 계속 제멋대로 해도 될까요?」"
    - "「내 대답은—— 없어.」"
    - "「지금 길은 네 발밑에 있어. 그 답은 네가 직접 찾아야 해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아…… 흘러가는 대로 가 볼까요……」"


nikk_sho_lose:
  title: "닛케이상 (패배)"
  lines:
    - "세이운 스카이—— 3착——"
    - "세이운 스카이는 속도를 줄이고 천천히 멈춰 섰다. %SEX%는 고개를 들었다."
    - "관중석에서는 익숙한 불만의 목소리가 다시 터져 나왔다. 세이운 스카이는 모두 무시했다. 그렇게 자신의 자유를, 바깥의 간섭은 필요 없다는 것을 드러내려 했다."
    - "하지만 다음 순간, %SEX%의 시선이 멈췄다."
    - "관중석 앞줄에서, 세이운 스카이 인형을 안은 작은 %UMA%가 힘껏 뛰고 있었다."
    - "작은 %UMA%는 키가 작아, 좌석 위에 올라서야 겨우 상반신이 보였다. %SEX%는 인형을 꼭 끌어안고 다른 손을 열심히 흔들며 무언가 외치고 있었다."
    - "그 목소리는 수만 명이 동시에 내는 소란에 섞여, 바다에 떨어진 물 한 방울처럼 작았다. 하지만 세이운 스카이의 귀는 그 목소리를 정확하게 잡아냈다—— 맑고, 꾸밈없고, 순수했다."
    - "조건 없는 애정이었다. 이겨서 외치는 것도, 주위가 외치니 따라 외치는 것도 아니었다."
    - "%SEX%는 그저 자신을 좋아하고 응원하고 있었다. 그게 전부였다."
    - "세이운 스카이는 작은 %UMA%의 순수한 눈을 바라본 뒤, 말없이 대기실로 돌아왔다."
    - "대기실에서 세이운 스카이는 책상에 엎드려, 생각에 잠긴 듯 %YOU%에게 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어쩌면…… 자유롭고 싶다고 모든 목소리를 거부해서는 안 되는 건지도 모르겠어요.」"
    - "「새로운 깨달음이야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네…… 그 아이, %SEX%는 다른 생각 없이 그저 제가 달리는 모습을 좋아하는 거예요. 그런 목소리는…… 시끄럽지 않아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러면 어떻게 해야 할까요. 이런 기대에 부응하려고 해야 할까요? 아니면 계속 제멋대로 해도 될까요?」"
    - "고민하는 세이운 스카이를 보며, %YOU%은(는) 살며시 %SEX%의 머리를 쓰다듬었다."
    - "「넌 언제나 내 기대에 부응하고 있는걸~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까요, 트레이너 쌤. 어떻게 해야 할까요. 이런 기대에 부응하려고 해야 할까요? 아니면 계속 제멋대로 해도 될까요?」"
    - "「내 대답은—— 없어.」"
    - "「지금 길은 네 발밑에 있어. 그 답은 네가 직접 찾아야 해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네…… 됐어요…… 일단 흘러가는 대로 가 볼까요……」"


before_tenn_spr:
  title: "텐노상 (봄) (전)"
  lines:
    - "집의 온기가 %YOU%과(와) 세이운 스카이를 바깥의 압박으로부터 지켜 주었다."
    - "모든 것이 다시 예전처럼 돌아왔다——"
    - "세이운 스카이는 %YOU%에게 어리광을 부리며 땡땡이를 치고, 농담을 던졌다……"
    - "슬쩍 %SEX%를 제자리로 돌려놓으면서, 가끔은 거기에 끼어들기도 했다……"
    - "땡땡이를 치는 동안, %YOU%은(는) 세이운 스카이가 이따금 먼 곳을 멍하니 바라본다는 것을 알아차렸다."
    - "그때의 질문—— 청운의 뜻——을 생각하는 듯했다."
    - "%YOU%이(가) %SEX%에게 물으면, %SEX%는 언제나 대수롭지 않은 얼굴로 「뭐 어때요~ 한 걸음씩 가죠~ 닥치면 다 길이 생기겠죠~」라고 대답했다."
    - "날이 흐르고, 다음 큰 레이스가 다가왔다."
    -
    - "봄날 오후의 햇살이 잔디를 포근하게 데웠다."
    - "큰 레이스가 곧 시작된다. 선수들은 저마다 출발 지점에서 준비하고 있었다."
    - "세이운 스카이는 조금 떨어진 잔디 가장자리에 혼자 서서, 느긋한 고양이처럼 몸을 펴고 있었다."
    - "%SEX%는 천천히 발목을 돌리고 허리와 등을 폈지만, 시선은 조금 멍했다. 가까이 있는 상대나 코스에 초점을 맞추지 않고, 그저 먼 하늘 끝을 보며 다시 그때의 질문을 떠올렸다."
    - "그때, 유난히 또렷하고 다정한 목소리가 소란을 뚫고 관중석 쪽에서 들려왔다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「스카이 씨——!」"
    - "세이운 스카이의 귀가 순간 쫑긋 서서 목소리가 들리는 쪽을 향했다."
    - "소리가 난 쪽을 보자, 앞줄에 가까운 관중석 난간 옆에 익숙한 모습이 보였다."
    - "니시노 플라워가 몸을 살짝 내밀고, 두 손을 입가에 모으고 있었다. 보랏빛 짧은 머리카락이 봄바람에 가볍게 흔들렸다."
    - "두 사람의 시선이 인파와 거리를 뚫고 허공에서 마주쳤다."
    - "니시노 플라워는 격렬한 응원 구호를 외치지 않았다. 그저 두 손을 가슴 앞에 모으는 간단한 몸짓을 했다—— 「힘내요」, 그리고 「행운을 빌어요」라는 몸짓이었다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「힘내세요! 자유롭게 달려 주세요!」"
    - "가장 부드러운 바람처럼, 세이운 스카이의 마음 깊은 곳에 남아 있던 옅은 안개를 걷어 냈다."
    - "세이운 스카이는 그 미소를, 그 익숙하고 언제나 %SEX%를 차분하게 해 주는 모습을 멍하니 바라봤다."
    - "니시노 플라워가 했던 말—— 「마음은 푸른 하늘처럼 밝고 넓고, 성격은 구름처럼 느긋해서…… 스카이 씨 곁에 있으면 마음이 아주 편안해져요」——"
    - "지금, 그 말이 온기를 품고 세이운 스카이 자신에게 돌아왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(할아버지…… 찾은 것 같아……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(트레이너 쌤, 니시노 플라워, 그리고 모두…… 알겠어……)"
    - "순간의 깨달음이 고요한 호수에 떨어진 돌처럼 파문을 넓혀 갔다."
    - "방황, 발버둥, 자신을 바꾸려던 서투른 노력…… 그 무거운 것들이 이 다정한 시선 아래에서 갑자기 한없이 가벼워지고 옅어졌다."
    - "세이운 스카이는 눈을 깜빡였다. 계속 멍하던 시선에 순간 초점이 맞춰지고, 더없이 맑아졌다."
    - "%SEX%는 갑자기 돌아섰다. 더는 하늘의 구름을 보지 않고, 선수 통로 출구로 시선을 돌렸다—— %SEX%는 알고 있었다. 트레이너는 저기에 있다."
    - "거의 망설임 없이, 세이운 스카이는 통로 입구를 향해 가볍게 달렸다. 모든 것이 확 트인 듯한 조급함이 실려 있었다."
    - "통로 입구의 그늘과 코스의 햇빛이 맞닿는 경계에서, %SEX%는 %YOU%의 모습을 발견했다."
    - "세이운 스카이가 또 게이트에 들어가는 것을 두려워하는 줄 알고, 위로하려던 참이었다."
    - "세이운 스카이가 달려들어 %YOU%의 팔을 붙잡았다. %SEX%의 빠른 말투에는 억누를 수 없는 흥분이 실려 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「봤어요! 플라워가 저기 있어요! %SEX%가 저를 응원하고 있어요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX%가 말해 줬어요…… 아니, %SEX% 덕분에 깨달았어요……」"
    - "세이운 스카이는 손을 놓고 한 걸음 물러섰다. 양손을 허리에 얹고, 더없이 환한 미소를 피웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무튼! 이번 레이스에서——! 증명할게요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「청운의 뜻을! 『세이운 스카이의 방식』으로, 트레이너 쌤에게, 플라워에게 보여 줄게요!」"
    - "방송이 다시 흘러나왔다. 결승 출전 선수들을 부르는 신호가 코스에 울렸다."
    - "%SEX%는 더는 말을 길게 하지 않고 힘차게 한 번 고개를 끄덕였다. 곧바로 돌아서서 힘찬 발걸음으로 출발선에 달려갔다."
    - "그 뒷모습에는 더 이상 방황하던 공허함이 없었다."
    - "편안함과 가벼움만이 있었다. 마침내 중심을 찾은 여유를 품고, 바람의 방향을 정한 구름처럼 느긋하면서도 누구도 막을 수 없게, 자신의 하늘로 흘러갔다."
    - "%YOU%과(와) 관중석의 니시노 플라워는 멀리 떨어져 있었지만, 약속이라도 한 듯 같은 뒷모습을 눈으로 좇았다."


tenn_spr_end:
  title: "텐노상 (봄) (후)"
  lines:
    - "결승선을 통과한 뒤, 세이운 스카이는 평소처럼 관성에 따라 속도를 줄이고 휴식 구역으로 향하지 않았다."
    - "%SEX%는 곧바로 선수 통로 출구를 향해 달렸다."
    - "걸음은 레이스 중보다도 다급했고, 꼬리는 뒤에서 나부꼈다. 얼굴에는 감출 수 없이 넘쳐흐르는 흥분이 가득했다."
    - "%SEX%는 단번에 통로 입구의 %YOU%과(와) 니시노 플라워를 발견했다. 니시노 플라워는 이미 관중석에서 내려와 나란히 서 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤! 플라워!」"
    - "%SEX%는 거의 두 사람 앞에 뛰어들다시피 했다. 가슴은 아직 레이스와 지금의 흥분으로 들썩이고 있었다."
    - "앞머리는 땀에 젖어 이마에 붙어 있었지만, 눈은 놀라울 만큼 밝았다. 마치 별이 타오르는 것 같았다."
    - "숨은 아직 고르지 못했지만, 말은 벌써 쏟아져 나오고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저…… 달리다가 갑자기 전부 알게 됐어요! 빛이 『확』 들어온 것처럼요!」"
    - "%SEX%는 %YOU%의 팔을 붙잡았다가, 다시 니시노 플라워를 바라봤다. 밀려드는 이 깨달음을 전하고 싶어 안달이 난 모습이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제 『청운의 뜻』은—— 가장 높이 날아서, 가장 대단한 구름이 되는 게 아니었어요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 가장 게으르고, 가장 느린 구름이어도, 제 리듬대로 가고 싶은 곳으로 흘러갈 수 있다는 거예요.」"
    - "세이운 스카이는 손을 놓고 몸짓으로 머릿속의 자유로운 풍경을 그리려 했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예전에는 달리면서 모두를 놀라게 하고 싶었어요. 『어? 세이운 스카이처럼 게으른 경주 %UMA%도 이길 수 있어!?』 하고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그다음엔 자유롭고 싶어서, 아무것에도 얽매이고 싶지 않은 거라고 생각했어요. 하지만 이제 알았어요——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자유는 아무것도 신경 쓰지 않는 게 아니에요. 무엇을 위해 달리고, 무엇을 짊어질지 스스로 선택할 수 있다는 거죠.」"
    - "%SEX%는 잠시 말을 멈췄다. 눈빛은 뜨겁고 단단했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『이렇게 해야 하지 않을까? 어떤 작전을 써야 할까?』 하는 기대의 시선 때문에 달리는 것도 선택할 수 있어요. 하지만 전 그게 족쇄라고 느껴요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 이런 선택도 할 수 있어요—— 『다른 가능성』을 증명하기 위해 달리는 걸. 저를 믿고, 무언가가 되라고 한 번도 요구하지 않았던 사람들을 위해 달리는 걸요!」"
    - "%SEX%는 한 걸음 물러서서 두 팔을 벌렸다. 코스 전체를, %SEX%라는 「구름」을 움직이는 모든 바람을 끌어안으려는 듯했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「보여 주고 싶어요—— 트레이너 쌤, 플라워, 할아버지, 그리고 진심으로 제 행복을 빌어 주는 수많은 팬들에게—— 여러분의 믿음은 틀리지 않았다고요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저, 세이운 스카이의 자유는 가볍고 무책임한 게 아니에요——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여러분의 응원을 실을 수 있어요! 여러분이 주신 건 『반드시 이겨라』라는 사슬이 아니라, 자유롭게 달려 달라는 축복이니까요!」"
    - "세이운 스카이의 목소리는 조금 떨렸다. 피로 때문이 아니라, 솟구치는 감정 때문이었다."
    - "주먹을 쥐었다. 눈에는 짙푸른 불꽃이 타올랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 이번 레이스로 모두에게 증명했어요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저, 세이운 스카이의 『청운의 뜻』이 어떤 것인지! 남이 정해 준 모습이 아니라, 스스로 선택하고, 스스로 짊어지고, 스스로 빛나는 모습이라는 걸요!」"
    - "생기 넘치는 표정으로 말하는 세이운 스카이를 보며, %YOU%과(와) 니시노 플라워는 약속이라도 한 듯 서로를 마주 보고 웃었다."
    - "니시노 플라워는 앞으로 나와, 등 뒤에서 노란색과 흰색 데이지로 엮은 화관을 꺼내 세이운 스카이의 머리에 씌웠다."
    - "작고 노란 데이지와 흰 데이지가 %SEX%의 짙은 머리카락 사이에서 유난히 눈에 띄었다. 니시노 플라워의 목소리는 부드러웠다."
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「스카이 씨, 지금 이야기하시는 모습은…… 어느 결승선을 통과할 때보다도 빛났어요.」"
    - color: %COLOR_51%
      content:
        - fontWeight: bold
          content: %FLOWER%
        - "「축하해요——」"
    - "%YOU%의 눈에는 숨김없는 신뢰와 자랑스러움이 가득했다."
    - "「2년 전 너와 계약할 때, 내가 눈여겨본 건 네가 앞으로 무엇이 될 수 있느냐가 아니었어.」"
    - "「그때의 난 그저 네게 더 먼 하늘을 보여 주고 싶었을 뿐이야.」"
    - "「그런데 넌—— 내가 보여 주고 싶었던 것뿐 아니라, 나도 본 적 없는 풍경 속으로 데려와 줬어.」"
    - "「넌 이미 오래전부터 네 하늘을 갖고 있었어.」"
    - "%YOU%은(는) 다정하게 세이운 스카이의 머리를 쓰다듬었다. 세이운 스카이는 얼굴을 살짝 붉히고, 헤헤 하며 쑥스럽게 웃었다."
    - "「나도, 니시노 플라워도, 할아버지도…… 말없이 네 곁에 있을게.」"
    - "「자유롭게 낚시하고, 자유롭게 땡땡이치고, 자유롭게…… 함께하자.」"
    - "통로 밖의 소란이 희미하게 들려왔지만, 이 순간 이곳은 유난히 고요했다."
    - "봄바람, 데이지의 은은한 향기, 세 사람 사이에 말하지 않아도 전해지는 같은 방향."


before_sapp_kin_s:
  title: "삿포로 기념 (전)"
  lines:
    - "삿포로 기념, 한 달 전——"
    - "세이운 스카이는 나무줄기에 기대 가을 일정표를 넘기다가, 손끝으로 텐노상(가을) 날짜를 톡 두드렸다."
    - "그러다 %SEX%는 무언가 떠오른 듯, 갑자기 앞쪽 페이지를 넘겼다."
    - "세이운 스카이가 눈을 빛내며 고개를 들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 다음 달에…… G2 대상경주, 삿포로 기념 있죠?」"
    - "「응, 8월 하순이야. 관심 있어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제 고향에서 열리는 레이스잖아요. 할아버지가 몇 번이나 말씀하셨어요. 대상경주를 현장에서 본 적이 없다고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 텐노상(가을) 전에…… 한 번 달리면서 몸도 풀고 싶어요. 겸사겸사……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……가을의 큰 목표를 살짝 예고해 볼까 하고요.」"
    - "세이운 스카이의 눈에 장난기가 스쳤다."
    -
    - "삿포로 기념, 2주 전——"
    - "트레이닝 틈틈이, 세이운 스카이는 스포츠 신문을 넘기고 있었다."
    - "제목은 『안방의 이점! 삿포로 기념 전망: 세이운 스카이의 도주 예술, 어떻게 홋카이도의 하늘을 지배할 것인가?』였다."
    - "기사는 %SEX%의 과거 데이터를 자세히 분석하며, 특히 중장거리에서 「독특한 리듬으로 도주하며 레이스를 장악하는」 %SEX%의 높은 승률을 강조했다."
    - "이번에도 도주가 %SEX%에게 가장 현명한 선택일 것이라고 예측하고 있었다."
    - "세이운 스카이는 신문을 내려놓고 중얼거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다들 그렇게 생각하는구나…… 저는 이미 『설정』이 정해진 것 같네요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥흥~ 그럼 이번엔 제 청운의 뜻을 보여 드려야겠어요.」"
    - "「좋은 생각이 있는 모양인데? 말해 봐——」"
    -
    - "며칠 뒤 작전 회의에서, 아니, %SEX%가 과자를 먹으며 나누던 잡담 중에 %SEX%는 그 생각을 꺼냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 삿포로 기념은…… 언론에서 전술까지 정해 줬잖아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「만약 그 사람들이 쓴 각본대로 안 움직이면 어떨까요?」"
    - "%YOU%은(는) 손에 든 자료를 내려놓았다."
    - "「예를 들면?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예를 들면…… 추입?」"
    - "세이운 스카이의 입가에 능청스러운 미소가 떠올랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「처음부터 확실하게 뒤에 남는 거예요. 다투지도, 자리를 빼앗지도 않고요. 강가에서 멍하니 있을 때처럼 앞사람들을 지켜보는 거죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다들 자리를 다투며 힘을 쓰다가, 리듬에 첫 균열이 생길 때까지 기다리고……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 틈으로, 아무도 예상하지 못한 속도와 경로로 추월하는 거예요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「모두에게 알려 주고 싶어요. 세이운 스카이의 『청운의 뜻』은 어떻게 달리느냐가 아니라, 어떤 승리 방식이든 선택할 수 있고, 진심으로 인정할 수밖에 없게 이긴다는 거라고요.」"
    - "「추입 기습」이라는 대담한 구상을 끝까지 듣고도, %YOU%은(는) 놀라거나 걱정하는 기색을 보이지 않았다."
    - "오히려 %YOU%은(는) 자료를 내려놓고 몸을 살짝 앞으로 기울였다. 눈빛에 불이 붙은 듯했다."
    - "「추입이라. 재미있네——」"
    - "「언론도 상대도 네 도주만 보고 있어. 그렇다면 깜짝 놀라게 해 주자!」"
    - "「하지만 스카이, 추입은 뒤에 남아서 지켜보기만 하는 게 아니야. 도주보다 인내심과 관찰력, 힘을 터뜨릴 타이밍이 중요해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「알아요! 그러니까 제대로 계획해야죠!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그쪽은 트레이너 쌤에게 맡길게요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자유로운 배는 그렇게 쉽게 조종할 수 있는 게 아니거든요~」"
    -
    - "레이스 당일——"
    - "맑고 투명한 햇살이 푸른 잔디에 내려앉았다."
    - "세이운 스카이는 마지막 준비 운동을 하면서도, 자꾸 관중석으로 시선을 보내 익숙한 모습을 찾고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「찾았다!」"
    - "관중석 앞줄에서, 할아버지가 오래 쓴 낡은 밀짚모자를 쓰고 웃으며 %SEX% 쪽을 바라보고 있었다."
    - "손녀가 이쪽을 보자, 곧바로 힘껏 팔을 흔들었다."
    - "세이운 스카이는 들떠서 팔을 들어 할아버지 쪽으로 힘껏 흔들었다. 어찌나 세게 흔드는지 꼬리까지 함께 움직였다."
    - "그러고는 %SEX%가 손을 내렸다. 얼굴의 미소는 사라지지 않고, 오히려 조금씩 의미심장해졌다."
    - "점차 웃음을 감추는 눈에는 장난기가 서렸다. 모두를 휘둘러 놓으려는 고양이 같았다."
    - "%SEX%는 고향의 공기를 깊이 들이마시고 돌아서서, 흥분을 감춘 발걸음으로 자신의 게이트를 향했다."


sapp_kin_win_s:
  title: "삿포로 기념 (승리)"
  lines:
    - "결승선을 통과한 순간에도 세이운 스카이는 바로 멈추지 않았다. %SEX%는 관성에 따라 조금 더 달리다가, 승리를 확인한 뒤 천천히 속도를 줄였다."
    - "가슴은 크게 들썩이고 땀은 턱을 타고 떨어졌지만, %SEX%의 얼굴에는 환희와 뿌듯함이 뒤섞인 눈부신 웃음이 가득했다."
    - "%SEX%는 곧바로 돌아서서 다급히 누군가를 찾았다."
    - "코스 가장자리의 트레이너 구역에서, 순식간에 %YOU%의 모습을 발견했다."
    - "%YOU%은(는) %SEX%에게 힘차게 고개를 한 번 끄덕이고, 손을 높이 들어 엄지를 세웠다."
    -
    - "레이스 중반이 떠올랐다. %SEX%가 중후방에 확실히 자리 잡고 앞으로 나와 도주할 기색을 전혀 보이지 않았을 때, 경기장 전체의 분위기가 얼마나 묘했던가."
    - "당황하는 중계진, 관중석에서 들려오는 이해할 수 없다는 웅성거림."
    - "「세이운 스카이, 출발이 늦었나?」, 「컨디션이 이상한가?」, 「%SEX%의 방식이 아니잖아!」 하고 수군거리는 사람도 있었다."
    - "그 모든 의아함과 의심, 약간의 실망마저 지금은 승리를 더욱 맛있게 하는 최고의 양념이었다."
    - "세이운 스카이는 빠르게 달려왔다. 숨을 고를 틈도 없이, 흥분으로 조금 떨리는 목소리로 쏟아내듯 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤! 보셨어요? 그 코너요! 거기 틈이 생길 줄 알았어요! 계획대로예요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아니, 계획보다 더 순조로웠어요! 그 각도로 튀어나올 줄은 전혀 예상 못 했더라고요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할아버지도 분명 놀라셨겠죠! 자리에서 일어나셨어요? 얼핏 본 것 같은데!」"
    - "%YOU%은(는) 웃으며 고개를 끄덕였다. 자세히 대답하기도 전에, %SEX%가 더 중요한 일이 떠오른 듯 갑자기 말을 멈췄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아! 할아버지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「먼저 할아버지 찾으러 갈게요! 기다리고 계실 거예요! 이따 봐요!」"
    - "세이운 스카이의 얼굴에 다급함이 스쳤다. 급히 손을 흔들었다."
    - "말을 마친 %SEX%는 스태프의 안내가 완전히 끝나기도 전에, 뒤쪽으로 익숙한 모습을 찾아 나섰다."
    - "뒷모습은 곧 통로 모퉁이로 사라졌다. 가볍고 빠른 발소리만 이어졌다."
    - "그리고 공기 중에는 아직 가라앉지 않은 승리의 흥분이 여운으로 남았다."


before_tenn_sho_s:
  title: "텐노상(가을) (전)"
  lines:
    - "아침 여섯 시 반, 트레이닝실 안——"
    - "은행잎이 노랗게 물들기 시작했다."
    - "%YOU%이(가) 트레이닝실 문을 열자, 드물게 세이운 스카이가 벌써 와 있었다."
    - "하지만 %SEX%는 트레이닝 중이 아니었다. 창가에 서서 까치발을 들고, 창밖 나뭇가지에서 가장 노란 은행잎을 따려고 하고 있었다."
    - "문 여는 소리를 들은 %SEX%가 돌아봤다. 막 딴 잎을 손에 쥔 채, 아침 햇살 속에서 눈을 휘며 웃었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아—— 트레이너 쌤! 좋은 아침이에요~ 놀라셨죠~ 세이가 이렇게 일찍 오다니.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「보세요, 작은 물고기 같지 않아요?」"
    - "%SEX%는 다가와 잎을 %YOU%의 눈앞에 내밀었다."
    - "%SEX%의 손끝에서 잎자루가 살짝 떨렸다. 가장자리가 말린 윤곽은 빛을 받으니 정말 고요한 물고기 같았다."
    - "「닮았네.」"
    - "세이운 스카이는 만족스럽게 웃고, 펼쳐 둔 트레이닝 일지에 잎을 끼웠다."
    - "%YOU%은(는) 창밖의 황금빛과 청명한 하늘을 바라봤다."
    - "「빠르네…… 벌써 가을인가……」"
    - "%YOU%은(는) 세이운 스카이 곁으로 갔다. %SEX%는 자연스럽게 기대어, 어깨를 %YOU%의 팔에 가볍게 기댔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 날씨 좋네요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「낮잠 자기 딱이에요~」"
    - "「레이스하기에도 딱이지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음…… 그럼 끝나고 트레이너 쌤이 보상해 주세요~」"
    - "「이번엔 어디서 잘 생각이야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「늘 가던 데요. 저번처럼 그 큰 나무 아래요. 트레이너 쌤이 베개예요.」"
    - "「저번엔 어깨가 딱딱하다고 했잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자세가 안 좋았던 것뿐이에요.」"
    - "세이운 스카이는 당당하게 말하며 손가락으로 %YOU%의 어깨를 콕 찔렀다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번엔 이렇게…… 조금 기울여요. 그러면 기대기 편해요.」"
    - "%YOU%은(는) %SEX%가 시키는 대로 자세를 고쳤다. %SEX%는 기대어 보더니 만족스럽게 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음~ 합격——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이제부터 트레이너 쌤은 세이 전용 베개예요~」"
    - "세이운 스카이는 %YOU%의 어깨 앞에 얼굴을 묻고, 어리광 부리는 고양이처럼 살짝 비볐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아요—— 트레이너 쌤……」"
    - "「응?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 정말 잘 달리면…… 특별히 잘 달리면……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤도 조금은…… 자랑스러우실까요?」"
    - "%YOU%은(는) 고개를 돌려 %SEX%를 바라봤다."
    - "세이운 스카이는 속눈썹을 내리깔고 있었다. 뺨에 옅은 그림자가 드리웠다."
    - "「조금이 아니야.」"
    - "「언제나 자랑스러웠어.」"
    - "「네 첫 레이스부터 지금까지, 줄곧.」"
    - "「스카이는 언제나 내 자랑이야~」"
    - "세이운 스카이는 멍해졌다."
    - "%SEX%는 무언가 말하려고 입을 열었지만, 목소리가 나오지 않았다."
    - "귀끝이 순간 쫑긋 서고, 붉은 기운이 급격히 뺨으로 번졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자, 잠깐만요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런 말은…… 그런 말은 미리 예고해 주세요……」"
    - "「언제나 그랬던 건데, 왜 예고가 필요해?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그야…… 마음의 준비가 안 되니까요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「심장이 너무 빨리 뛰어요…… 이따 달리면 옆구리 아프겠네……」"
    - "「그럼 안 할게.」"
    - "귀여운 반응을 보자, %YOU%은(는) 참지 못하고 %SEX%를 놀렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……하지 말라는 건 아니에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아…… 아무튼, 적당한 때를 골라 주세요……」"
    - "「예를 들면?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예를 들면……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「결승선을 통과하고 나서, 트레이너 쌤이 달려와 절 안아 주실 때라든가……」"
    - "세이운 스카이는 잠시 생각하다가 작게 말했다."
    - "%YOU%은(는) 웃으며 %SEX%에게 다정하게 대답했다."
    - "「좋아.」"
    - "세이운 스카이는 그제야 고개를 들었다. 얼굴에는 아직 홍조가 남아 있었지만, 진지한 표정을 지으려 애썼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「약속이에요.」"
    - "「약속이야.」"
    -
    - "탈의실 안——"
    - "탈의실의 조명은 부드러웠다."
    - "세이운 스카이가 승부복으로 갈아입는 동안, %YOU%은(는) %SEX%에게 등을 돌리고 %SEX%에게 이번 전술을 다시 짚어 주었다. 뒤에서는 옷감이 스치는 소리와 %SEX%의 이따금 투덜거리는 목소리가 들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 단추, 또 헐거워졌네……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤—— 뒤쪽 단추 좀 잠가 주세요—— 손이 안 닿아요.」"
    - "%YOU%이(가) 돌아보자, 세이운 스카이의 희고 매끈한 등이 그대로 눈앞에 보였다."
    - "%YOU%은(는) 다가갔다. 손가락이 %SEX%의 등에 닿자, %SEX%가 작게 움찔했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「크흠—— 손가락이 조금 차가워요……」"
    - "「미안해. 금방 끝낼게.」"
    - "%YOU%은(는) 옷이 어디 하나 들뜨지 않고 잘 맞도록 정성스럽게 단추를 잠갔다."
    - "「됐어.」"
    - "세이운 스카이가 돌아봤다. 얼굴은 조금 붉었지만, 눈빛은 밝았다."
    - "%SEX%는 거울 앞에서 옷깃을 정돈했다. %YOU%은(는) %SEX%의 뒤를 지나가며, %SEX%의 어깨에 잡힌 작은 주름도 펴 주었다."
    - "세이운 스카이는 거울 속의 %YOU%을(를) 바라보며 행복하게 웃었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「처음 만났을 때, 기억하세요?」"
    - "「기억하지. 넌 강가에서 낚시하고 있었고, 찌가 흔들릴 때 무슨 생각을 하느냐고 물었어.」"
    - "세이운 스카이는 뒷짐을 지고 돌아서서, %YOU% 쪽으로 고개를 가까이 댔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때는 트레이너 쌤도 이전에 만난 사람들처럼 몇 마디만 하고 가실 줄 알았어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데 앉아서 제 물고기 이야기를 정말 들어 주셨죠.」"
    - "「재미있었으니까.」"
    - "「네가 그랬잖아. 물고기가 미끼를 건드려 볼 때는 찌가 살짝 까딱이고, 정말로 물면 찌가 차분하게 가라앉는다고.」"
    - "「나도 더 큰 낚시터와 더 큰 물고기가 있다고 했고.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇게까지 기억하시는구나……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때는 이 트레이너도 허풍만 떠는 건 아닐까 생각했어요.」"
    - "「그래서 결과는?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「결과는……」"
    - "세이운 스카이는 가볍게 앞으로 다가와, 두 손으로 %YOU%의 얼굴을 감쌌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「결국 트레이닝장으로 데려가서 스페랑 %THEY%가 달리는 모습을 보여 주셨죠. 그리고 말씀하셨어요——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「한번 해 볼래? 낚시처럼, 네가 옳다고 생각하는 때를 찾아, 네가 옳다고 생각하는 방식으로.」"
    - "%SEX%는 그때의 %YOU%의 말투를 흉내 냈다."
    - "「그 자리에서 계약했지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 『틈』을 잡도록 도와서, 『대어』를 낚게 해 주겠다고 하셨으니까요.」"
    - "세이운 스카이는 손을 놓고 반걸음 물러섰다. 미소가 더욱 밝아졌다."
    - "멀리서 방송이 희미하게 들려와, 시간이 되었음을 알렸다."
    - "세이운 스카이는 깊이 숨을 들이마셨다가 천천히 내쉬었다. 어깨가 살짝 내려갔다. 다시 고개를 들었을 때는 느긋하게 추억에 잠겼던 표정 대신, 고요한 집중이 자리했다."
    - "%SEX%는 배낭 옆주머니에서 반으로 접은 종이를 꺼내 %YOU%에게 건넸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할아버지가 오늘 아침에 또 편지를 주셨어요. 딱 한 문장이에요……」"
    - "「즐겁게 달리렴. 할아버지는 너희가 돌아오기를 기다리고 있단다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤——」"
    - "「응?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「레이스가 끝나면…… 빨리 돌아갈까요? 할아버지가 해 주신 밥이 먹고 싶어요.」"
    - "「좋지. 할아버지를 깜짝 놀라게 해 드릴까?」"
    - "「그때 뭐 먹고 싶어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐든 좋아요. 트레이너 쌤이랑 함께 먹는다면……」"
    - "그때 방송이 흘러나왔다. 마지막 입장 안내였다."
    - "그 수줍음은 순식간에 가라앉았다."
    - "%SEX%는 다시 깊이 숨을 들이마셨다. 고개를 들었을 때는 이미 눈빛이 맑고 집중되어 있었다. %SEX%는 마지막으로 신발 끈과 옷자락을 확인한 뒤 손을 내밀었다."
    - "손바닥이 닿는 순간, %SEX%는 힘주어 마주 잡았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가요, 대어를 낚으러!」"
    - acc: 1
      content: "「네 항로를 이끌어 줄게!」"


tenn_sho_win_s:
  title: "텐노상(가을) (후)"
  lines:
    - "선수들이 차례로 게이트에 들어갔다."
    - "게이트는 늘 보던 게이트였다."
    - "금속의 감촉, 공간의 폭, 틀에 잘려 보이는 시야—— 모두 평소와 같았다."
    - "하지만 오늘의 세이운 스카이는 달랐다."
    - "미세하지만 무시할 수 없는 불쾌감이, 물밑의 흐름처럼 소리 없이 차올랐다."
    - "세이운 스카이는 살짝 눈살을 찌푸렸다."
    - "%SEX%는 어깨를 움직이고 자세를 고쳤다. 평소 %SEX%가 「이 정도면 됐지」 하고 느끼던 자리를 찾으려 했다."
    - "하지만 오늘은 아무리 자세를 고쳐도, 틀에 갇혀 제약받는 느낌이 사라지지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(……조금, 답답해.)"
    - "1초씩 시간이 흘렀다. 불쾌감이 게이트에서 기다리는 시간을 더 길게 느끼게 했다."
    - "그 초조함이 자라나고 퍼졌다."
    - "척추를 타고 올라와 자신도 모르게 호흡을 얕게 만들고, 손끝을 살짝 저리게 했다."
    - "게이트 안쪽 벽의 차가운 감촉, 가느다란 틈으로 잘린 앞쪽 시야, 양옆으로 몸을 펼 수 없는 공간……"
    - "그 미세한 감각들이 지금, 끝없이 확대되었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(아직 안 열려……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(좁아……)"
    - "세이운 스카이는 점점 빨라지는 자신의 심장 소리가 좁은 공간에 울리는 것까지 또렷이 들었다."
    - "10초…… 아니, 15초."
    - "초조함이 한계까지 쌓여, 가득 찬 저수지처럼 게이트 가장자리에서 미세하게 떨렸다."
    - "그리고——"
    - fontSize: 1.5rem
      content: "「철컹——!!!」"
    - "금속 게이트가 튀어 열리는 굉음이, 초조함으로 가득 찬 좁은 공간에 벼락처럼 떨어졌다."
    - "그 결정적인 순간, 몸이 본능적으로 튀어나가야 할 영 점 몇 초 사이에——"
    - "세이운 스카이의 반응이 반 박자 늦었다."
    - "한계까지 쌓인 초조함이 순간적인 어긋남을 만들었다."
    - "그 반걸음의 차이."
    - "견제하려던 바깥쪽 상대는 이미 시위를 떠난 화살처럼 튀어나가, 바깥 진로를 완벽하게 차지했다."
    - "세이운 스카이는 곧바로 정신을 차리고 왼발로 땅을 힘껏 찼다. 몸이 용수철처럼 안쪽의 좁은 틈으로 튀어나갔다——"
    - "하지만 정면에서, 가장 침착한 벽과 마주쳤다."
    - "스페셜 위크의 든든한 등이, 정밀하게 설계되기라도 한 듯 %SEX%가 계획한 이상적인 진로를 정확히 가로막고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(큰일이야……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(읽혔어.)"
    - "그 생각이 얼음 바늘처럼 순간 %SEX%의 머릿속을 꿰뚫었다."
    - "포위는 이미 시작되어 있었다……"
    -
    - "400미터도 채 가기 전에, 세이운 스카이는 완전히 둘러싸였다."
    - "스페셜 위크는 앞에서 리듬을 단단히 붙잡고 있었다. 빠르지도 느리지도 않은, 세이운 스카이가 가장 견디기 어려운 경계의 속도였다."
    - "양옆의 상대들은 훈련된 그림자처럼 %SEX%의 숨결 하나, 발걸음의 미세한 조정 하나까지 맞춰 움직였다. 뒤에서도 추격자가 바짝 따라붙었다."
    - "세이운 스카이가 속도를 바꾸려 하자—— 포위망은 호흡을 맞추어 동시에 조여 들었다."
    - "첫 번째 코너에서, %SEX%의 눈앞에 틈이 보였다가 바로 다음 순간 메워졌다."
    - "세이운 스카이가 가장 잘하는 「레이스 읽기」가 통하지 않고 있었다."
    - "모든 「기류」—— 상대의 호흡, 근육의 피로, 리듬의 균열——가 이 빈틈없는 벽에 가로막혔다."
    - "지금의 세이운 스카이는 유리 상자에 갇힌 새 같았다. 드넓은 하늘은 보이지만, 날개는 보이지 않는 장벽을 두드릴 뿐이었다."
    - "세이운 스카이의 호흡이 흐트러지기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(아니야……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(전술적으로 불리한 게 아니야…… 도망칠 곳 없는 질식감이야!)"
    - "계획이 완전히 무너졌다는 공포와 몸을 옥죄는 압박이, 차가운 아스팔트처럼 발밑에서 차올랐다. 끈적하고 무겁게 %SEX%의 발걸음을 붙잡았다."
    - "세이운 스카이의 발걸음에 처음으로 망설임이 생겼다."
    - "평소 여유롭고 느긋하면서도 탄력 있던 「책사의 걸음」이 낯설게 굳어 버렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(뚫을 수 없어…… 길이 안 보여……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(어떡하지……)"
    - "시도할 때마다 실패했고, 떠올린 생각은 번번이 현실에 부딪혀 튕겨 나왔다."
    - "혼란스러운 판세 속에서도 유일한 활로를 찾아내던 책사가, 지금은 두 손에 막힌 수만 쥐고 있었다."
    - "두 번째 직선이 끝나 가고 있었다."
    - "스페셜 위크는 앞에서 정밀한 리듬을 유지했고, 양옆은 침묵하는 단단한 벽이었다."
    - "세이운 스카이의 호흡은 점점 무겁고 다급해졌다—— 물에 빠진 사람이 헛되이 발버둥 치는 것 같았다."
    - "주위의 발굽 소리, 바람, 관중의 외침……"
    - "모든 소리가 흐려지고 멀어졌다. 두꺼운 물의 장막 너머에 있는 것 같았다."
    - "시야의 가장자리가 어두워지기 시작했다."
    - "선명하고 차가운 생각이 %SEX%의 의식에 떠올랐다……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(이번에는……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(이대로…… 끝이야……)"
    -
    - "관중석에서 %YOU%은(는) 난간을 꽉 움켜쥐었다."
    - "(이상해.)"
    - "(처음부터 이상했어.)"
    - "(세이운 스카이가 게이트를 나설 때 반걸음 늦어진 것—— 본 적 있어.)"
    - "좁은 공간을 싫어하는 %SEX%의 성향 때문에, 상태가 좋지 않을 때 가끔 나오는 모습이었다. 하지만 오늘은 달랐다."
    - "%SEX%가 늦게 출발하자 스페셜 위크가 정밀하게 진로를 막았고, 동시에 양옆의 상대들도 약속이라도 한 듯 안쪽으로 붙었다. 뒤에서도 경주 %UMA%가 곧바로 빈자리를 채웠다."
    - "%THEY%는 세이운 스카이의 실수를 포착하고, 동시에 포위망을 만들었다. 목적은 명확했다——"
    - "세이운 스카이에게 관찰하고, 조정하고, 작전을 펼칠 공간을 주지 않아, 신체적으로도 심리적으로도 %SEX%를 완전히 봉쇄하는 것."
    - "처음 몇백 미터 동안은, 아직 %SEX%의 눈에서 익숙한 「책사의 빛」이 힘겹게 깜빡이는 게 보였다."
    - "하지만 %SEX%가 고개를 들어 관찰하려 할 때마다, 미세하게 리듬을 바꿔 볼 때마다, 돌아오는 것은 동시에 조여 드는 포위망의 압박이었다."
    - "%THEY%는 몸으로 %SEX%에게 말하고 있었다. 「오늘은 관찰할 틈도, 생각할 시간도 없어.」"
    - "두 번째 코너에서 상황이 급격히 악화되었다. 세이운 스카이의 걸음이 눈에 띄게 늦어졌고, 시선은 스페셜 위크의 등에 고정된 채 동공의 초점이 흐려져 있었다."
    - "%THEY%는 두 번째 직선으로 진입하려 하고 있었다."
    - content: "더는 기다릴 수 없어!"
      fontSize: 1.2rem
      fontWeight: bold
    - "%YOU%은(는) 돌아서서 전력으로 달렸다. 모퉁이를 돌고, 빽빽한 인파를 헤쳤다."
    - "뒤에서 들리는 불평은 무시한 채 두 번째 직선 끝부분의 앞줄로 뛰어들었다. 마침 경주 %UMA% 무리가 다가오고 있었다."
    - "%YOU%은(는) 상체를 관중석 밖으로 내밀었다. 코스 한가운데서 빛이 바래 가는 듯한 푸른 모습에 시선을 못 박았다."
    - "숨을 들이마시고——"
    - "가슴속 공기를 전부 써서, 목의 힘을 전부 끌어모아, 모든 초조함과 신뢰, 흔들림 없는 믿음을 담아 외쳤다."
    - acc: 1
      content: "「스카이——!!」"
    -
    - acc: 1
      content: "「고개 들어——!!」"
    - "목소리가 공기를 가르고, 모든 소란을 압도했다."
    - "코스 한가운데의 푸른 모습이, 전류에 맞은 듯 갑자기 움찔했다."
    - acc: 1
      content: "「물고기는 아직 있어——!!」"
    -
    - acc: 1
      content: "「잡아——!!」"
    - "마지막 말을 외쳤을 때, 목 안에서 쇠 맛이 나는 피 맛이 올라왔다."
    - "%SEX%가 이쪽을 보고 있었다."
    - "그저, 보고 있었다."
    - "시간이 얼어붙은 듯했다."
    - "세이운 스카이의 얼굴에 떠오른 무감각한 공허함과, %YOU%의 외침에 담긴 뜨거운 믿음이 허공에서 격렬하게 맞부딪쳤다."
    - "눈앞을 덮은 물안개 같은 빛이 거센 바람에 걷혔다."
    - "짙푸른 불꽃, 냉정하고 날카로운 책사만의 불이 다시 붙었다."
    - "새벽을 밝히는 빛이 세이운 스카이의 눈에서 타올랐다."
    - "세이운 스카이는 깊이 숨을 들이마셨다—— 느리고, 길고, 무서울 만큼 차분하게."
    - "주위의 이상한 시선도 아랑곳하지 않고, %YOU%은(는) 주저앉아 작게 말했다."
    - "「지지 마…… 스카이……」"
    -
    - "레이스는 세 번째 코너로 접어들려 하고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(지쳤어, 힘들어……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(이제…… 안 될지도……)"
    - "「스카이—— 고개 들어!!」"
    - "한 줄기 외침이 겹겹이 쌓인 함성을 뚫었다."
    - "세이운 스카이가 갑자기 움찔했다. 초점이 흐려진 눈이 본능적으로 목소리가 들리는 쪽을 향했다."
    - "「물고기는 아직 있어——!!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(물고기……?)"
    - "「잡아——!!」"
    - "마지막 말이 터져 나온 순간——"
    - "흩어져 있던 동공의 초점이 날카로운 바늘끝처럼 모였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(맞아……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(난 연못에 갇힌 물고기가 아니야.)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(나는 낚시꾼이야!)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(스페는 산이 아니라 물고기야. 강하고 침착하게 앞에서 헤엄치는 대어.)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(양옆은 벽이 아니라 물살이야. 물고기를 감싸고, 나를 감싸는 물살.)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(그리고 물살에는…… 틈이 있어.)"
    - "차갑고 맑은 이성이 온몸을 거세게 채웠다. 모든 망설임이 순식간에 증발했다. 절체절명의 상황에서 완전히 깨어난 책사의 머리는 평소를 훨씬 뛰어넘는 속도로 돌아갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(세 번째 코너다……)"
    - "세이운 스카이의 시선은 정밀한 탐침처럼 왼쪽 상대에게 고정되었다."
    - "상대가 숨을 쉴 때마다 그 깊이를, 발을 디딜 때마다 그 무게를, 근육이 긴장할 때의 미세한 리듬 변화를 포착했다."
    - "정보가 흐르는 물처럼 머릿속으로 들어왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(상대는 무리하고 있어. 보조를 맞추며 우위를 유지하느라, %SEX%는 코너에서 아껴야 할 체력을 소모하고 있어.)"
    - "세이운 스카이의 머릿속에 계획이 서서히 떠올랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(이 코너에서는 움직이지 않아.)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(이 리듬이라면, 대열이 최종 코너에 들어서는 찰나——)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(다들 다음 코너에 맞춰 무게중심과 걸음을 미세하게 조정해. 리듬이 바뀌는 순간, 주의력과 몸의 제어에 아주 짧은 틈이 생겨.)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(기회는—— 저기야!)"
    - "목표와 시기, 방법이 머릿속에서 냉철하고 명확한 계획으로 구체화되었다."
    - "세이운 스카이는 시선을 거두고 호흡을 가다듬었다. 다가올 순간을 위해 힘을 모으기 시작했다."
    - "최종 코너가 눈앞이었다."
    - "곡선을 따라 원심력이 급격히 강해졌다."
    - "세 번째 코너와 최종 코너가 이어지는 경계점——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(지금이야!)"
    - "왼쪽 상대가 연속된 코너에서 체력을 소모하고 무게중심을 조정하느라, 예상한 대로 순간적인 지체를 보였다."
    - "부딪치지도, 밀치지도 않았다."
    - "세이운 스카이는 그저 흐르는 물처럼 자연스럽게 몸의 중심을 바깥쪽으로 이끌었다."
    - "동시에 정밀하게 발걸음을 조절해, 피로로 조금 무거워진 상대의 걸음 옆으로 더 매끄럽고 효율적인 한 걸음을 내디뎠다."
    - "개울물이 단단한 바위를 돌아 흐르고, 산들바람이 나무 사이를 지나는 것처럼."
    - "상대의 순간적인 지체가 만든 틈으로 미끄러져 나왔다."
    - "탈출—— 완료!"
    - "빠져나온 관성이 채 가시기도 전에, 앞에서는 스페셜 위크가 이미 두 마신 반을 앞서 있었다."
    - "숨을 고를 시간은 없었다. 세이운 스카이는 마지막 힘을 발끝에 실어 추격을 시작했다."
    -
    - "최종 직선 진입——"
    - "스페셜 위크는 다가오는 기척을 알아차렸다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「하—— 아—— 아————!!」"
    - "힘찬 기합이 공기를 꿰뚫었다. 스페셜 위크는 밤을 가르는 눈부신 유성처럼, 순수한 힘으로 코스를 박차고 나가 뒤쫓는 그림자를 거세게 떨쳐 냈다."
    - "거리가 다시 무정하게 벌어졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「웃기지 마!」"
    - "폐가 타들어 가고, 다리 근육이 비명을 질렀다. 하지만 몸보다 먼저 끓어오르는 것은 분함이었다."
    - "겨우 빠져나온 우리."
    - "겨우 보이기 시작한 길."
    - "겨우…… 자유롭게 달릴 수 있는 하늘로 돌아왔는데."
    - content: "여기서 끝날 수는 없어!!"
      fontSize: 1.2rem
      fontWeight: bold
    - "폐 속의 공기를 모두 밀어냈다."
    - "마지막 한 가닥 이성까지 연료로 태웠다."
    - "모든 작전을 머릿속 저편으로 던져 버렸다."
    - "보폭을 한계까지 늘렸다."
    - "발걸음의 회전수를 한계 너머로 끌어올렸다."
    - content: "따라잡아!"
      fontSize: 1.2rem
      fontWeight: bold
    - "거슬러 날아오르는 푸른 유성처럼, 앞에서 멈출 줄 모르고 달리는 빛을 끈질기게 쫓았다."
    - "거리가 조금씩, 아주 조금씩 줄기 시작했다."
    - "마지막 100미터——"
    - "반 마신."
    - "두 사람의 눈에 불꽃이 타올랐고, 이마에서 땀이 흩날렸다."
    - "다른 생각은 없었다."
    - "나란히 울리는 발굽 소리와, 똑같이 뜨거운 숨결뿐이었다."
    - "마지막 50미터——"
    - "나란히."
    - "엇갈리고."
    - "다시 나란히——"
    - "몸을 한계까지 앞으로 기울였다. 팔이 찢어질 듯 세차게 흔들렸다."
    - "「세이운 스카이」라는 이름이 여기까지 걸어오며 쌓아 온 느긋함, 능청스러움, 계산, 자부심, 그리고 지금의 숨김없는 갈망—— 모두를 마지막 한 걸음에 쏟아부었다."
    -
    - "결승선!"
    -
    - …………
    - "바람이 멎었다."
    - "세계가 순간 소리를 잃었다. 심장 뛰는 소리만 고막을 미친 듯이 울렸다."
    - "천천히 속도를 줄여 멈추고, 두 손으로 떨리는 무릎을 짚었다. 땀이 비처럼 잔디 위로 떨어졌다."
    - "고개를 들자, 스페셜 위크도 조금 앞에서 멈춰 서 있었다. 가슴이 크게 오르내렸다."
    - "스페셜 위크가 돌아봤고, 시선이 마주쳤다."
    - "%SEX%는 손을 들어 칭찬의 표시를 보냈다."
    - "나는 잠시 멍해졌다가, 곧 손을 들어 같은 몸짓으로 답했다."
    - "그리고 동시에 웃었다."
    - "대형 화면에 성적이 갱신되었다."
    - "1착—— 세이운 스카이."
    - "코끝만큼의 차이로."
    - "「이겼습니다——!!!」"
    - "「세이운 스카이! 간발의 코 차이로 승리합니다!」"
    - "중계진의 외침과 함께, 경기장의 환호와 함성이 거세게 폭발했다."
    - "관중석이 흔들리고 공기가 끓어올랐다. 수많은 종이 꽃가루와 환호성이 금빛 급류가 되어 코스 한가운데로 밀려들었다."
    - "주변의 경쟁자들이 차례로 결승선을 통과했다. %THEY%는 걸음을 늦추고 숨을 고르며, 약속이라도 한 듯 세이운 스카이에게 시선을 보냈다."
    - "분함도, 원망도 없었다——"
    - "여러 시선에 담긴 것은 경탄과 찬사였다."
    - "그리고 박수!"
    - "아직 가라앉지 않은 경기장의 함성 속에서도, 선수들끼리 보내는 박수는 맑고 힘찼다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「스카이 씨! 마지막에 정말, 정말 대단했어요!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「꽤 앞서 있다고 생각했는데, 스카이 씨가 『슉』 하고 따라왔어요!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「그런데 이번에는 가운데서 달렸네요! 이것도 꼼꼼히 준비한 계략이었나요?」"
    - "스페셜 위크는 세이운 스카이 앞으로 달려와, 들뜬 채 %SEX%의 어깨를 붙잡고 흔들며 눈을 반짝이며 물었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(……스페, 이 바보. 역시 하나도 모르고 있었네.)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(%SEX%의 뒤에서 포위돼 숨이 막힐 뻔했다는 건, %SEX%는 생각도 못 했겠지.)"
    - "세이운 스카이는 쓴웃음을 지으며 거친 숨을 몰아쉬었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(스페의 막판 가속이 더 무서웠어. 못 따라잡는 줄 알았네.)"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「에헤헤, 전력을 다했어요!」"
    - "스페셜 위크는 손을 놓고 양손을 허리에 얹은 채 가슴을 폈다. 뒤에서 꼬리가 즐겁게 흔들렸다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「그래도 마지막에는 스카이 씨가 이겼네요! 잘됐어요!」"
    - "스페셜 위크의 기쁨은 솔직하고 뜨거웠다. 가림 없이 내리쬐는 가을 햇살 같았다."
    - "세이운 스카이는 하늘을 바라봤다. 땀이 끊임없이 흘러내렸다."
    - "관중석의 관객들을 향해 손을 흔들었다."
    - "손을 내릴 때, 세이운 스카이의 시선은 소란스러운 코스를 가로질러 한 사람을 정확하게 찾아냈다. 관중석 난간 끝에서 몸을 일으켜 %SEX%에게 힘껏 손을 흔드는 모습이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『잔금』 받으러 가야겠네요~」"


# 結末
# TODO
# 完美结局 生涯目标全胜
perfect_ending:
  title: "먼 항해 끝에, 돛은 기슭으로 돌아오고"
  lines:
    - "수면에 주홍빛 노을이 가득 깔려, 부서진 금빛처럼 일렁였다."
    - "문자에는 「빨리 와 주세요」라는 말과 주소 하나가 적혀 있었다."
    - "세이운 스카이는 물 위로 뻗은 낡은 잔교 끝에 앉아 있었다—— 두 사람이 처음 만났던 곳이었다."
    - "낚싯대는 옆에 비스듬히 꽂혀 있었고, 찌는 한동안 움직이지 않았다."
    - "%SEX%의 모습은 그때와 별로 다르지 않았다. 멜빵바지 한쪽 끈은 흘러내렸고, 머리카락은 저녁 바람에 조금 헝클어져 있었다. 물에 담근 두 발을 가볍게 흔들고 있었다."
    - "하지만 %YOU%이(가) 다가가자, %SEX%는 눈을 뜨고 %YOU%을(를) 바라봤다. 그 눈빛은 처음과는 이미 달라져 있었다."
    - "그 안에는 여전히 느긋함과 편안함이 있었지만, 다른 것도 더해져 있었다—— 수면 아래의 흐름처럼 고요하고 깊은 무언가가."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤~ 오늘은 물고기들이 단체 파업 중이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너무 잘 낚는 『푸른 악마』 세이를 어떻게 상대할지, 비밀회의 하는 소리를 들었다니까요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어젯밤에 트레이너 쌤이 몰래 와서 특별훈련 시키신 거 아니에요?」"
    - "「물고기들한테 널 빈손으로 돌려보내라고 시킬 수 있었으면,」"
    - "「지난 삼 년 동안 네가 보충했어야 할 트레이닝이 얼마나 많았겠어.」"
    - "%YOU%은(는) 농담하며 %SEX% 옆에 앉았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「거짓말이에요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사실 낮잠 자다가 뒤척이는 바람에, 미끼 한 통을 통째로 물에 쏟았거든요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아~ 원숭이도 나무에서 떨어진다더니~」"
    - "저녁 바람이 수면을 스치며, 잔물결을 겹겹이 일으켰다."
    - "세이운 스카이의 웃음소리가 점차 잦아들었다. 멀리 주황빛과 금빛 물결이 이는 수면을 바라보더니, 문득 조용해졌다."
    - "찌는 땅거미 속에서 꼼짝하지 않고, 침묵에 완전히 녹아들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……삼 년이네요.」"
    - "「그러게, 참 빠르다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아요—— 트레이너 쌤.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「기억하세요? 삼 년 전 여기 앉아서, 『레이스는 물고기가 스스로 미끼를 물고 싶어 하게 만드는 것』이라고 했잖아요.」"
    - "세이운 스카이는 수면을 바라봤다. 그때의 자신을 보고 있는 것 같았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때 저는 정말 레이스를…… 조금 더 큰 낚시 놀이 정도로만 생각했어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이기면 기쁘고, 져도 상관없었죠. 어차피 내일 낚을 물고기는 또 있으니까요.」"
    - "세이운 스카이는 고개를 돌려 %YOU%을(를) 바라봤다. 노을이 %SEX%의 옆얼굴에 부드러운 테두리를 두르고, 속눈썹이 눈 아래로 옅은 그림자를 드리웠다."
    - "「그리고 넌 해냈지.」"
    - "「가장 멋진 무대에서 그걸 보여 줬어.」"
    - "세이운 스카이는 고개를 끄덕였다. 입가에 그리움이 담긴 옅은 미소가 떠올랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 욕심이 생겼어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그저 『이기는』 게 아니라…… 구름 한 조각이 하늘을 흘러가듯 자연스럽게 이기고 싶어졌죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「책사도 이길 수 있다는 걸 보여 줘서 상대를 놀라게 하고 싶었어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 자유롭게 달려도—— 이길 수 있다는 걸 모두가 알았으면 했어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이운 스카이라는 경주 %UMA%가 가장 느긋한 모습으로, 가장 영리하고 자유로운 레이스를 달렸다는 걸 모두가 기억했으면 했어요.」"
    - "어둠이 점차 내려앉고, 연못가의 가로등이 하나씩 켜졌다. 수면에 길고 흔들리는 빛줄기가 드리웠다."
    - "%SEX%는 고개를 돌려 %YOU%을(를) 바라봤다. %SEX%의 눈동자에 노을이 비쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 이 모든 건——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「삼 년 전, 어떤 트레이너가……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『노력해야 해』라고 말하는 대신, 물어봐 주셨기 때문이에요——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더 큰 물고기를 낚고 싶지 않냐고……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「족쇄를 채우듯 어떻게 달려야 한다고 요구하는 대신, 물어봐 주셨죠——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어떻게 이기고 싶냐고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「계속 세이 곁에 있어 주셨네요. 언제나.」"
    - "수면은 거울처럼 고요했다. 점점 어두워지는 하늘과, 기슭에서 더욱 밝아지는 불빛을 비추고 있었다."
    - "세이운 스카이는 %YOU%을(를) 한참 바라보다가, 문득 웃었다——"
    - "맑고 환하며, 숨기는 것 하나 없는 미소였다."
    - "세이운 스카이는 몸을 돌려 옆의 가방을 뒤지더니, 정교하게 꾸민—— 사진첩을 꺼냈다?"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건 제가 가장 소중히 여기는 물건이에요~」"
    - "세이운 스카이는 %YOU%의 품 쪽으로 조금 기대어, 사진첩을 펼치고 한 장씩 소개하기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「보세요, 트레이너 쌤이 처음 물고기를 낚았을 때 사진이에요. 찍힌 줄도 모르셨죠? 헤헤~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아! 이건 둘이 3관을 달성하고 호주에 함께 갔을 때 사진이네요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건 고향에 갔을 때, 둘이 뒷산 호숫가에서 찍은 거예요.」"
    - ……
    - …
    - "사진첩의 마지막 장에는 세이운 스카이의 선수 생활 마지막 레이스 시상대가 담겨 있었다."
    - "사진첩을 덮자, 두 사람이 보낸 삼 년의 순간들을 함께 덮는 것 같았다……"
    - "그 삼 년은 길었다. %YOU%과(와) %SEX%가 서로를 알아 가고 곁을 지키기에 충분한 시간이었다."
    - "하지만 그 삼 년은 짧기도 했다. %YOU%의 손에 들린 사진첩 한 권에 담길 만큼."
    - "「삼 년이 참 빠르네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사진첩을 덮으니까, 왠지 조금 쓸쓸하네요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 이걸 준비했죠!」"
    - "세이운 스카이는 어디선가 더 크고 두꺼운 사진첩을 꺼내, %YOU%의 품에 턱 안겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「짜잔! 아직 한참 남았어요! 표시도 다 해 뒀죠! 다음은 아마존, 그다음은 플로리다……」"
    - "%YOU%은(는) 놀라서 말했다."
    - "「정말 빠져나갈 수 없는 배에 탔네~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 이제 배에서 내리기엔 늦었어요~」"
    - "「그럼 내가 선장 할래!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼요! 선장은 제 자리예요……」"
    - ……
    - "%YOU%과(와) 세이운 스카이는 황금빛 석양 아래에서 즐겁게 이야기를 나누었다."
    - "굴곡진 과거에서 빛나는 현재를 거쳐, 두 사람이 함께 기대하는 미래까지……"


normal_ending:
  title: "먼 항해 끝에, 돛은 기슭으로 돌아오고"
  lines:
    - "수면에 주홍빛 노을이 가득 깔려, 부서진 금빛처럼 일렁였다."
    - "문자에는 「빨리 와 주세요」라는 말과 주소 하나가 적혀 있었다."
    - "세이운 스카이는 물 위로 뻗은 낡은 잔교 끝에 앉아 있었다—— 두 사람이 처음 만났던 곳이었다."
    - "낚싯대는 옆에 비스듬히 꽂혀 있었고, 찌는 한동안 움직이지 않았다."
    - "%SEX%의 모습은 그때와 별로 다르지 않았다. 멜빵바지 한쪽 끈은 흘러내렸고, 머리카락은 저녁 바람에 조금 헝클어져 있었다. 물에 담근 두 발을 가볍게 흔들고 있었다."
    - "하지만 %YOU%이(가) 다가가자, %SEX%는 눈을 뜨고 %YOU%을(를) 바라봤다. 그 눈빛은 처음과는 이미 달라져 있었다."
    - "그 안에는 여전히 느긋함과 편안함이 있었지만, 다른 것도 더해져 있었다—— 수면 아래의 흐름처럼 고요하고 깊은 무언가가."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤~ 오늘은 물고기들이 단체 파업 중이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너무 잘 낚는 『푸른 악마』 세이를 어떻게 상대할지, 비밀회의 하는 소리를 들었다니까요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어젯밤에 트레이너 쌤이 몰래 특별 훈련을 시키신 거죠?」"
    - "「물고기들한테 널 빈손으로 돌려보내라고 시킬 수 있었으면 좋겠네.」"
    - "「지난 삼 년 동안 네가 보충했어야 할 트레이닝이 얼마나 많았겠어.」"
    - "%YOU%은(는) 농담하며 %SEX% 옆에 앉았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에이, 트레이너 쌤 짓궂으시네…… 거짓말이에요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「낮잠 자다가 뒤척이는 바람에, 미끼 한 통을 통째로 물에 쏟았거든요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아~ 원숭이도 나무에서 떨어진다더니~」"
    - "저녁 바람이 수면을 스치며 잔물결을 일으켰다."
    - "세이운 스카이의 웃음소리가 점차 잦아들었다. 멀리 주황빛과 금빛 물결이 이는 수면을 바라보더니, 문득 조용해졌다."
    - "찌는 땅거미 속에서 꼼짝하지 않고, 침묵에 완전히 녹아들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……삼 년이네요.」"
    - "「그러게, 참 빠르다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아요—— 트레이너 쌤.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「기억하세요? 삼 년 전 여기 앉아서, 『레이스는 물고기가 스스로 미끼를 물고 싶어 하게 만드는 것』이라고 했잖아요.」"
    - "세이운 스카이는 수면을 바라봤다. 그때의 자신을 보고 있는 것 같았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때 저는 정말 레이스를…… 조금 더 큰 낚시 놀이 정도로만 생각했어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이기면 기쁘고, 져도 상관없었죠. 어차피 내일 낚을 물고기는 또 있으니까요.」"
    - "세이운 스카이는 고개를 돌려 %YOU%을(를) 바라봤다. 노을이 %SEX%의 옆얼굴에 부드러운 테두리를 두르고, 속눈썹이 눈 아래로 옅은 그림자를 드리웠다."
    - "「그리고 넌 해냈지.」"
    - "「가장 멋진 무대에서 그걸 보여 줬어.」"
    - "세이운 스카이는 고개를 끄덕였다. 입가에 그리움이 담긴 옅은 미소가 떠올랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 욕심이 생겼어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그저 『이기는』 게 아니라…… 구름 한 조각이 하늘을 흘러가듯 자연스럽게 이기고 싶어졌죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「책사도 이길 수 있다는 걸 보여 줘서 상대를 놀라게 하고 싶었어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 자유롭게 달려도—— 이길 수 있다는 걸 모두가 알았으면 했어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이운 스카이라는 경주 %UMA%가 가장 느긋한 모습으로, 가장 영리하고 자유로운 레이스를 달렸다는 걸 모두가 기억했으면 했어요.」"
    - "어둠이 내려앉고, 연못가의 가로등이 하나씩 켜졌다. 수면에 길고 흔들리는 빛줄기가 드리웠다."
    - "%SEX%는 고개를 돌려 %YOU%을(를) 바라봤다. %SEX%의 눈동자에 노을이 비쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 이 모든 건——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「삼 년 전, 트레이너 쌤이……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『노력해』라고 말하는 대신, 물어봐 주셨기 때문이에요——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더 큰 물고기를 낚고 싶지 않냐고……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「족쇄를 채우듯 어떻게 달려야 한다고 요구하는 대신, 물어봐 주셨죠——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어떻게 이기고 싶냐고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「계속 세이 곁에 있어 주셨네요. 언제나.」"
    - "수면은 거울처럼 고요했다. 점점 어두워지는 하늘과, 기슭에서 더욱 밝아지는 불빛을 비추고 있었다."
    - "세이운 스카이는 %YOU%을(를) 한참 바라보다가, 문득 웃었다——"
    - "맑고 환하며, 숨기는 것 하나 없는 미소였다."
    - "%SEX%는 기지개를 켜고 두 손을 뒤통수에 받치더니, 다시 평소의 느긋한 모습으로 돌아갔다."
    - "조금 전의 진지한 이야기는 그저 무심코 꺼낸 말 같았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이렇게 강하게 키워 내시다니~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 그렇게 보이시는데, 트레이너 쌤도 속을 알 수 없는 책사시네요~ 냐하하~」"
    - "웃음소리가 땅거미 속으로 퍼졌다. 하지만 곧 %SEX%는 다시 조용해져, 잔잔한 수면을 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데요——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 연못의 물고기는 아직 다 못 낚았어요.」"
    - "그러고는 세이운 스카이가 돌아서서 %YOU%에게 손을 내밀었다."
    - "손바닥을 위로 향하게 하고 손가락을 편 모습은, 짙어지는 땅거미 속의 다정한 초대 같았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「계속…… 같이 낚시해 주실래요?」"
    - "%SEX%의 눈은 어스름한 빛 속에서도 또렷하게 빛났다."
    - "그 안에는 두 사람이 함께 보낸 삼 년, 함께 본 수많은 일출과 일몰, 승리의 환호와 패배의 눈물, 말로 하지 않아도 서로 알아주는 모든 시간이 담겨 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 작은 연못에서……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……더 크고, 더 큰 바다까지요.」"
    - "%SEX%의 손은 허공에 머물러 대답을 기다렸다."
    - "저녁 바람이 다시 불어 %SEX%의 앞머리를 흔들었다. 멀리서 둥지로 돌아가는 새의 울음이 들리고, 밤이 천천히 내려왔다."
    - "그리고 이야기가 시작된 이 물가에서, 새로운 질문이 미래에 대한 대답을 기다리고 있었다."


# 50%（イベント『風起こり雲は馬のごとく』後は80%）全数値+3 好感+10 -サボり
ws_lazy_find_you:
  title: "잡았다~"
  lines:
    - "점심을 먹은 뒤, 세이운 스카이는 평소처럼 낮잠을 자러 가겠다고 했다. %YOU%은(는) %SEX%에게 너무 오래 자지 말라고 당부했다."
    - "오후 트레이닝을 시작할 시간이 되어도 세이운 스카이의 모습은 보이지 않았다."
    - "「이 녀석…… 또 너무 오래 자네……」"
    - "세이운 스카이가 가끔 늘어지는 것에는 %YOU%도 이미 익숙했다."
    - "「음…… 자, 이번에는 %SEX%가 어디서 땡땡이치는지 맞혀 볼까——」"
    - acc: 1
      content: "안뜰의 큰 나무 위"
      lines:
        - "%YOU%은(는) 안뜰에서 가장 굵은 나무 곁으로 갔다."
        - "고개를 들자, 나무 위에 푸른 모습이 늘어져 주변 나뭇잎과 하나가 되어 있었다."
        - "(처음 보는 것도 아닌데, 역시 신기하네……)"
    - acc: 2
      content: "기숙사 옆 잔디밭"
      lines:
        - "%YOU%은(는) 세이운 스카이의 기숙사 옆 잔디밭으로 갔다."
        - "세이운 스카이는 두 손을 뒤통수에 받친 채 느긋하게 잔디밭에 누워 있었다."
        - "(바로 옆이 기숙사인데 굳이 여기서 자다니. 땡땡이 환경에는 까다롭네……)"
    - acc: 3
      content: "옥상의 비밀기지"
      lines:
        - "%YOU%은(는) 학원 옥상 구석으로 갔다. 그곳에는 해변용 선베드가 놓여 있었다."
        - "세이운 스카이는 선글라스를 쓰고, 옆에 먹다 남은 과일을 둔 채 산들바람 속에서 깊이 잠들어 있었다."
        - "(말 안 해 주면 바닷가인 줄 알겠네. 참 잘도 즐기며 사는구나……)"
    - acc: 4
      content: "식당 뒤 고양이집"
      lines:
        - "%YOU%은(는) 학원 식당 뒤로 갔다. 고양이를 좋아하는 사람들이 세운 작은 고양이집이 있었다."
        - "세이운 스카이는 옆에 걸린 해먹에 누워 있었다. 품에서는 삼색 고양이 한 마리가 %SEX%와 함께 졸고 있었다."
        - "(매번 %SEX%에게 묻은 고양이 털을 치우게 되지만, 이 광경은 따뜻하네……)"
    - acc: 5
      content: "트레이닝장 관중석"
      lines:
        - "%YOU%은(는) 트레이닝장 관중석으로 갔다. 운동장에서는 %UMA%들이 열심히 트레이닝하고 있었다."
        - "세이운 스카이는 좌석에 누워 잠든 듯했다."
        - "(또 몰래 상대를 관찰하나? 그런데 이번에는 아무리 봐도 자고 있어……)"
    - "「스카이—— 일어나——」"


# 50%（イベント『風起こり雲は馬のごとく』後は20%）セイウンスカイスキルPt+10 トレーナー体力-200
ws_cannot_find:
  title: "못 잡겠지~"
  lines:
    - "아침 트레이닝장에서는 부지런한 %UMA%들이 이미 강도 높은 훈련을 시작했다."
    - "%YOU%도 일찍 트레이닝실에 들어가 정성스럽게 작성한 계획을 펼쳤다. 세이운 스카이와 알찬 하루를 시작할 생각이었다."
    - "해가 떠오르고, 바깥 트레이닝장에서 들려오는 기합 소리도 점점 커졌다."
    - "하지만 %YOU%의 파트너만은 아무리 기다려도 오지 않았다."
    - "조금 더 기다리다 %YOU%이(가) 시계를 보니, 약속 시간은 이미 한참 지났다. %SEX%에게 보낸 메시지에도 답이 없었다."
    - "「이 녀석…… 또 땡땡이야……」"
    - "어쩔 수 없이, %YOU%은(는) 학원 전체를 찾아보기로 했다."
    - acc: 1
      content: "안뜰의 큰 나무 위"
      lines:
        - "모습이 보이지 않았다."
    - acc: 2
      content: "기숙사 옆 잔디밭"
      lines:
        - "모습이 보이지 않았다."
    - acc: 3
      content: "옥상의 비밀기지"
      lines:
        - "모습이 보이지 않았다."
    - acc: 4
      content: "식당 뒤 고양이집"
      lines:
        - "모습이 보이지 않았다."
    - acc: 5
      content: "트레이닝장 관중석"
      lines:
        - "모습이 보이지 않았다."
    - "저녁 먹을 때가 가까워져서야 세이운 스카이는 느릿느릿 트레이닝실에 나타났다."


# ジュニア級5月以降 スキルPt+40
ws_next_time:
  title: "다음엔 반드시"
  lines:
    - "트레이닝실 창가, 햇살이 쇼기판을 따스한 노란빛으로 물들이고 있었다."
    - "세이운 스카이는 느긋하게 한 손으로 턱을 괴고 있었다. %SEX%의 맞은편에 앉은 킹 헤일로는 허리를 꼿꼿이 세우고 쇼기판을 응시했다. 진지한 표정이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하암…… 얼마나 더 생각할 거예요?」"
    - "세이운 스카이는 작게 하품했다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「조용히 해! 전술을 구상 중이야!」"
    - "킹 헤일로는 세이운 스카이를 노려본 뒤, 심사숙고한 한 수를 두었다."
    - "말을 놓는 모습을 보자, 세이운 스카이의 귀가 움직였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「대단한 한 수네요~ 그럼 전 이쪽으로.」"
    - "킹 헤일로는 고개를 숙여 한 번 보더니, 동공이 살짝 좁아졌다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「자, 잠깐…… 방금 그 수, 일부러였어? 이쪽으로 유도한 다음——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네네~」"
    - "세이운 스카이는 옆에 놓인 보리차를 한 모금 마셨다. 말투는 담담했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세 수 전부터 계산해 놨거든요.」"
    - "킹 헤일로는 입술을 깨물고 쇼기판을 꼬박 삼십 초 동안 바라봤다. 그러고는 깊이 숨을 들이마시고, 손에 든 계마를 무겁게 내려놓았다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「……내가 졌어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「냐하하~ 킹은 오늘도 진지하네요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 오늘 디저트는 킹이 사는 거예요~」"
    - "세이운 스카이는 짓궂게 말했다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「흥—— 난 약속을 어기지 않아!」"
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「다음엔! 다음엔 반드시 이기겠어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네네, 다음엔 반드시요.」"
    - "킹 헤일로는 벌떡 일어나 두 손으로 책상 가장자리를 짚었다. 붉어진 뺨에는 억울함이 묻어 있었다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「……내일 이 시간에도 있겠지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아마도요?」"
    - "세이운 스카이는 장난스럽게 일부러 다른 쪽을 바라봤다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「아마도라니, 그게 뭐야! 좋아, 내가 먼저 와 있겠어! 약속 어기지 마——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 매일 뭘 걸까요? 무릎베개는 어때요?」"
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - 「!!!」
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「으으…… 하자면 하겠어! 매일 내가 이길 거야!」"
    - "킹 헤일로는 토라져서 노려보다가, 마침 세이운 스카이의 웃는 눈과 마주쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(엄청 즐거워 보이네~)"


# ジュニア級8月以降 スタミナ+30 根性+30
ws_hidden_menu:
  title: "전설의 숨겨진 메뉴"
  lines:
    - "복도에서 스페셜 위크가 갑자기 세이운 스카이의 팔을 붙잡았다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「스카이 씨! 스카이 씨! 엄청난 비밀을 발견했어요!」"
    - "세이운 스카이의 귀가 움직였다. 아직 졸려 눈꺼풀이 감기려던 참에 팔이 잡아당겨져 넘어질 뻔했다."
    - "%SEX%는 눈을 가늘게 뜨고 스페셜 위크를 바라봤다—— 스페셜 위크는 두 눈을 빛내고, 흥분해서 꼬리를 끊임없이 흔들고 있었다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「식당에 전설의 숨겨진 메뉴가 있대요!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「정해진 시간에, 정해진 창구에서, 아주머니께 정해진 암호를 말해야 살 수 있대요! 게다가——」"
    - "스페셜 위크는 목소리를 낮췄다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「암호가 고양이랑 관련 있대요!」"
    - "세이운 스카이는 눈을 깜빡였다. 졸음이 갑자기 달아났다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「같이 잠복해요!」"
    - "세이운 스카이는 「빨리 같이 가요」라고 쓰인 듯한 스페셜 위크의 얼굴을 봤다. 자신의 호기심도 조금씩 낚이기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「숨겨진 메뉴요? 재밌겠는데요……」"
    -
    - "첫째 날."
    - "오전 열한 시 오십 분, 식당 삼 번 창구."
    - "스페셜 위크는 세이운 스카이를 끌고 와 몰래 줄을 섰다. 이따금 앞을 기웃거리며 긴장한 나머지 귀까지 떨고 있었다."
    - "세이운 스카이는 %SEX% 옆에 서서, 드물게 졸지도 않고 또렷한 눈으로 창구의 아주머니를 보고 있었다."
    - "%SEX% 일행의 차례가 오자, 스페셜 위크는 깊이 숨을 들이마시고 창구로 다가갔다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「아, 아주머니…… 야옹야옹?」"
    - "아주머니는 국자를 든 채 말이 없었다."
    - content:
        - fontWeight: bold
          content: "아주머니 3"
        - "「……뭐라고?」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「그거요! 야옹야옹!」"
    - "아주머니의 눈빛이 점점 미묘해졌다."
    - content:
        - fontWeight: bold
          content: "아주머니 A"
        - "「얘야, 배가 고파서 헛것이라도 보이니?」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「아, 아니에요!」"
    - content:
        - fontWeight: bold
          content: "아주머니 A"
        - "「밥이 보약이란다. 자, 내가 넉넉히 담아 줄게!」"
    - "호쾌한 식당 아주머니가 세이운 스카이와 스페셜 위크에게 볶음밥을 산더미처럼 담아 주었다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「이게 아닌데——」"
    - "두 사람은 인파에 떠밀려 줄 밖으로 나왔다."
    - "스페셜 위크는 돌아서서 세이운 스카이를 바라봤다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「자…… 잘못했나요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……아마도요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데 지금 문제는…… 밥이 너무 많다는 거예요!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「괜찮아요, 스카이 씨! 제가 먹을게요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저는 다 못 먹어요~!」"
    -
    - "둘째 날, 오후 두 시 오십오 분. 식당이 문을 닫으려던 참이었다."
    - "스페셜 위크는 세이운 스카이를 끌고 식당으로 뛰어들어, 곧바로 삼 번 창구로 향했다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「아주머니! 야옹야옹!」"
    - "정리 중이던 아주머니는 돌아보지도 않고 말했다."
    - content:
        - fontWeight: bold
          content: "아주머니 A"
        - "「얘야, 다 팔렸단다. 내일은 일찍 오렴.」"
    - "스페셜 위크는 멍해졌다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「하, 하지만 문 닫는 시간에 맞춰 왔는데요……」"
    - content:
        - fontWeight: bold
          content: "아주머니 A"
        - "「늦었어. 마지막 하나는 이 분 전에 누가 사 갔거든.」"
    - "스페셜 위크는 빈 접시를 안고, 벼락을 맞은 듯 그 자리에 굳어 섰다."
    - "세이운 스카이는 창구 끝으로 가서 안쪽을 들여다봤다."
    - "정말 비어 있었다."
    - "%SEX%는 한숨을 쉬고 스페셜 위크의 어깨를 두드렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가요.」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「하지만——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가요. 일단 트레이너 쌤한테 밥 얻어먹으러 가죠~」"
    - "식당을 나와서도 스페셜 위크는 중얼거렸다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「왜…… 왜 이렇게 되는 걸까요……」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「내일, 내일 다시 해 봐요!」"
    - "두 사람의 뒷모습을 보며, 식당 아주머니가 중얼거렸다."
    - content:
        - fontWeight: bold
          content: "아주머니 A"
        - "「우리 볶음밥이 언제부터 이렇게 인기 있었지……」"
    -
    - "셋째 날, 오후 두 시 반. 두 사람은 일찍부터 식당에서 기다리고 있었다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「여기예요! 이번에는 절대 안 틀릴 거예요!」"
    - "마침 창구 앞에는 아무도 없었다."
    - "아주머니는 %SEX% 일행을 보고 얼굴에 미소를 띠었다."
    - content:
        - fontWeight: bold
          content: "아주머니 A"
        - "「어머, 왔구나!」"
    - "스페셜 위크는 잠시 멍해졌다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「아, 아주머니, 저희를 아세요?」"
    - content:
        - fontWeight: bold
          content: "아주머니 A"
        - "「그럼. 지난 이틀 동안 나한테 야옹야옹하던 아이들이잖니. 식당 사람들이 다 알아.」"
    - "스페셜 위크의 얼굴이 확 붉어졌다."
    - content:
        - fontWeight: bold
          content: "아주머니 A"
        - "「그래도 오늘은 특별히 넉넉히 만들어 뒀단다——」"
    - content:
        - fontWeight: bold
          content: "아주머니 A"
        - "「자, 따뜻할 때 먹으렴.」"
    - "두 사람의 눈이 순간 빛났다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「전설의 숨겨진 메뉴!」"
    - "%SEX%는 도시락을 덥석 받아 들고, 떨리는 손으로 뚜껑을 열었다——"
    - "볶음밥……"
    - "평범한 달걀볶음밥이었다. 완두콩과 잘게 썬 당근, 새우가 들어 있었다. 보기에도 좋고 맛도 훌륭했지만, 아무리 봐도 평범한 달걀볶음밥이었다."
    - "스페셜 위크의 미소가 굳었다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「아, 아주머니…… 이건 아닌데요……」"
    - content:
        - fontWeight: bold
          content: "아주머니 A"
        - "「응? 이거 안 좋아하니?」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「아니에요…… 좋아해요…… 그런데 찾던 건 이게 아니라……」"
    - "스페셜 위크는 초조해서 귀를 떨며 두 손을 허공에서 휘저었다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「그거요! 암호가 필요한 거요! 전설의 메뉴요! 우라라가 이사장님이 받으셨다고 한 거요!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「그거, 그거요! 야옹야옹! 그 야옹야옹이요! 이사장님이 받으신 야옹야옹!」"
    - "세이운 스카이는 옆에서 스페셜 위크의 울 듯한 모습을 보며 꼬리를 살짝 흔들었다."
    - "%SEX%는 한 걸음 앞으로 나와 스페셜 위크를 옆으로 끌어당기고 달랬다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스페, 괜찮아요.」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「우우…… 스카이 씨…… 다들 있다고 했어요…… 우라라가 직접 말했는걸요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우라라요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까, 그 얘기는 누구한테 들었어요?」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「우라라요! %SEX%가 %SEX%의 눈으로 직접, 이사장님이 이 창구에서 받으시는 걸 봤대요! 이사장님이 뭔가 말씀하시는 것도 들었고요!」"
    - "세이운 스카이는 고개를 숙이고 깊이 생각하기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(매번 식당이 문 닫기 직전……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(고양이 울음소리 같은 암호……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(정해진 창구……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(이사장님이 받으러 오셨다……)"
    - "세이운 스카이는 눈을 깜빡였다. 뭔가 짚이는 게 있는 듯했다."
    - "%SEX%는 눈을 감고 깊게 숨을 들이마신 뒤, 옆 창구 앞으로 갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아주머니, 『그거』 하나 주세요.」"
    - "아주머니는 %SEX%를 한번 보더니 웃었다."
    - content:
        - fontWeight: bold
          content: "아주머니 B"
        - "「아, 스카이구나. 오늘 것은 여기 있어.」"
    - "%SEX%는 돌아서서 계산대 아래에서 도시락을 꺼내 창구 쪽으로 밀었다."
    - "볶음밥이 아니라, 다른 도시락이었다."
    - "스페셜 위크가 잽싸게 달려왔다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「이거예요! 이거예요! 전설의 숨겨진 메뉴!」"
    - "세이운 스카이는 도시락을 열었다."
    - "안에는 잘게 자른 생선과, 국물에 비빈 밥만 들어 있었다."
    - "스페셜 위크는 멍해졌다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「이건……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 식당 아주머니께 매번 받는, 고양이에게 줄 남은 밥이에요.」"
    - "세이운 스카이는 난처한 표정으로 %SEX%를 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아주머니가 고양이를 좋아하는 사람들을 위해 따로 남겨 주시는 거예요.」"
    - "스페셜 위크는 입을 벌린 채 한동안 아무 말도 하지 못했다. 석상 같았다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「저…… 사흘 동안 잠복했는데…… 그러니까……」"
    - "세이운 스카이는 도시락을 들고, 귀가 축 처진 스페셜 위크를 보며 위로했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 스페, 가요~」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「네, 어디로요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고양이들이랑 같이 밥 먹으러요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사흘이나 잠복했잖아요? 얼굴이라도 보고 싶지 않아요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 고양이들이랑 함께 먹으면 또 색다른 맛이 있거든요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이것도 숨겨진 메뉴라고 할 수 있겠죠~」"
    - "세이운 스카이의 제안에, 실망했던 스페셜 위크는 기운을 차리고 창구 앞으로 달려갔다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「아주머니, 남은 거 전부 포장해 주세요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(저 식사량, 역시 스페네……)"


# ジュニア級11月以降 好感+50 スキルPt+30 賢さ+30
ws_punish:
  title: "세이운 스카이의 공개 처형"
  lines:
    - "3교시 예비종이 막 울렸다. %YOU%이(가) 트레이닝실에서 세이운 스카이의 지난달 데이터를 정리하던 중, 휴대전화가 갑자기 울렸다."
    - "교무 주임이었다. 몹시 다급한 말투로, 선생님 한 분이 갑자기 쉬게 되었는데 다른 선생님들은 수업이 꽉 차 있다며 %YOU%에게 한 시간만 대신 맡아 줄 수 있겠느냐고 물었다."
    -
    - "%YOU%이(가) 교재를 들고 교실 입구에 도착했을 때, 문 유리 너머로 창가 자리가 한눈에 들어왔다."
    - "세이운 스카이는 책상에 엎드려 얼굴을 팔에 묻고 있었다. 두 귀는 부드럽게 늘어져 있었고, 꼬리는 의자 밖에서 간간이 흔들렸다—— 아주 잘 자고 있었다."
    - "%YOU%은(는) 문을 밀었다."
    - "홱——"
    - "대화하던 %UMA%들의 눈이 동시에 이쪽을 향했다. 일제히 %YOU%을(를) 바라봤다."
    - "%YOU%은(는) 교단에 올라 헛기침했다."
    - "「음, 오늘 선생님께 급한 일이 생겼고 다른 선생님들도 시간이 안 되셔서, 내가 대신 수업할 거야.」"
    - "교실이 잠시 조용해지더니, 뒷줄에서 목소리가 들렸다. 「어? 세이운 스카이의 트레이너 선생님 아니세요?」"
    - "「에에에에——!」"
    - "말이 끝나기가 무섭게—— 교실이 한순간 들썩였다."
    - "「정말!? 세이운 스카이의 트레이너가 대신 수업을!」"
    - "「나 들었어. %YOURSEX%는 엄청나서, 세이운 스카이가 땡땡이칠 때마다 %YOURSEX%가 찾아낸대!」"
    - "「그리고 또, %YOURSEX%는 세이운 스카이가 다 달리자마자 수건이랑 물을 내민대. 미리 계산이라도 한 것처럼!」"
    - "「우와—— 부러워——」"
    - "「차분해 보이셔……」"
    - "창가 자리에서, 덥수룩한 머리가 움직였다."
    - "세이운 스카이가 몽롱한 채 고개를 들고 귀를 두어 번 흔들었다. 눈도 아직 다 뜨지 못한 채 입속으로 무언가 중얼거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음…… 트레이너 쌤 목소리가 들린 것 같은데……」"
    - "%SEX%는 눈을 비비고 작게 하품했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……악몽인가?」"
    - "그러고는 %SEX%가 교단에 선 사람을 똑똑히 보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「——!」
    - "꼬리가 「홱」 하고 곧게 섰다. %SEX%는 의자에서 튕기듯 일어나, 책상을 뒤엎을 뻔했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으아아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트, 트레이너 쌤! 여긴 웬일이세요!」"
    - "%SEX%는 교실을 가리켰다가, %YOU%을(를) 가리켰다가, 자신을 가리켰다. 손가락만 허공을 몇 바퀴 돌고, 온전한 문장은 나오지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여긴 트레이닝장이 아니라고요!」"
    - "「하아…… 방금 말했잖아.」"
    - "「선생님께 급한 일이 생겨서 내가 대신 왔다고.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「대리 수업——?! 파트너가 수업을 대신한다니, 이, 이상한 기분이에요!」"
    - "「마침 수업 듣는 세이운 스카이를 보고 싶었거든.」"
    - "%YOU%은(는) 아무렇지 않은 얼굴로 대답했다."
    - "「꺄——!」"
    - "교실 전체가 순식간에 들끓었다."
    - "스페셜 위크는 두 손으로 얼굴을 감싸고 눈을 반짝였다. 세이운 스카이와 %YOU%을(를) 몇 번이고 번갈아 바라봤다."
    - "그래스 원더는 입을 가리고 몰래 웃었다. 어깨가 잘게 흔들렸다."
    - "킹 헤일로는 한 손으로 이마를 짚고 깊은 한숨을 쉬었다."
    - "엘은 두 손을 번쩍 들려다가——"
    - "세이운 스카이의 얼굴이 확 붉어졌다. 얼굴부터 목덜미까지 새빨갰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「엘, 부추기지 마세요!」"
    - "세이운 스카이가 먼저 외쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오해하지 마세요! 이분은 그냥 말씀이 너무 솔직한 것뿐이에요!」"
    - "말을 마친 %SEX%는 책상에 몸을 푹 엎드렸다. 뾰로통하게 콧소리를 내며 얼굴을 더 깊이 묻었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이는 좀 쉴게요……」"
    - "「아, 맞다.」"
    - "「선생님이 그러시더라. 자주 조니까 오늘은 잘 지켜봐 달라고.」"
    - "「그러니까 오늘은 잘 들어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에! 자면 안 돼요? 너무해요!」"
    - "「마침 놓친 수업도 보충하자. 오늘은 땡땡이 못 쳐~」"
    - "교실에 낮은 웃음이 퍼졌다."
    - "「그럼, 시작하자.」"
    -
    - "저녁, 대기실."
    - "세이운 스카이는 소파에 엎드린 채 움직이지 않았다. 발버둥 치기를 포기한 물고기 같았다."
    - "%YOU%에게는 익숙한 자세였다—— %SEX%의 「항의 모드」였다."
    - "대개 트레이닝 양이 %SEX%의 예상을 넘어설 때 나오는 모습이었다. 「지쳤고, 귀찮고, 안 움직일 거니까, 나머지는 알아서 해 주세요」라는 뜻이다."
    - "%YOU%은(는) 찻상에 물컵을 놓고 %SEX% 옆에 앉았다."
    - "「이제 좀 풀렸어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 풀려요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘은 여기서 안 움직일 거예요.」"
    - "「에휴, 수업 중에 다섯 번 지목한 건 사과했잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여섯 번이거든요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마지막에는 이유도 생각 안 나서, 『오늘 날씨가 좋네. 그럼 다음 문제는 스카이가』—— 그렇게 말도 안 되는 이유를 대셨잖아요!」"
    - "%SEX%의 꼬리가 좌우로 흔들리며 불만을 드러냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가——」"
    - "%SEX%는 갑자기 몸을 일으켜, 새빨간 얼굴로 %YOU%을(를) 노려봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤이 멋대로 말씀하신 탓에, 하루 종일 소문이 돌았어요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『세이운 스카이랑 트레이너는 사이가 좋네』라든가, 『대리 수업이라고 해 놓고 사실 파트너를 보러 온 거잖아』라든가——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「심지어 『저 둘 사귀는 거 아니야?』라는 말까지——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으아! 세이의 결백이!」"
    - "%SEX%는 두 손으로 얼굴을 가리고 소파에 쓰러졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어떻게 책임지실 거예요——」"
    - "「그래, 그래.」"
    - "%YOU%은(는) 웃음을 참았다."
    - "항의하던 꼬리가 멈췄다."
    - "세이운 스카이는 손가락 사이를 살짝 벌려 한쪽 눈을 드러내고, 몰래 %YOU%을(를) 흘끗 봤다."
    - "그리고 %SEX%는 서둘러 손가락을 다시 모았다."
    - "아직 고민하는 척했지만, 입꼬리가 자꾸만 올라가는 것은 어쩔 수 없었다."
    - "「그럼, 어떤 보상을 원해?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음…… 생각해 볼게요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우선 초밥이요. 비싼 가게로요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앞으로…… 보충 수업을 더 해 주세요.」"
    - "「보충 수업?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네. 세이의 결백을 그냥 잃을 순 없죠!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「몰래 공부해서, %SEX% 일행 모두를 깜짝 놀라게 할 거예요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이것도 작전의 일부잖아요? 냐하하~」"


# クラシック級9月以降 根性+20 スキルPt+40
ws_party:
  title: "우아한 다과회"
  lines:
    - "트레이닝실 입구에서, 그래스 원더가 세이운 스카이를 불러 세웠다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「스카이, 내일 오후에 다과회를 열려고 해요. 함께하지 않을래요? 다도 문화를 접해 보는 것도 좋을 거예요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다도 문화라……」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「새 차와 다과도 도착했거든요~」"
    - "세이운 스카이는 눈을 깜빡였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다과요!? 갈게요!」"
    - "그래스 원더는 미소를 지으며 대답했다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「그럼 내일 오후 세 시, 다도실에서 봐요. 킹도 올 거예요. 늦지 마세요.」"
    -
    - "다음 날 오후, 다도실."
    - "킹 헤일로는 이미 다다미 위에 허리를 꼿꼿이 세우고 앉아 있었다. 앞에는 정교한 다기가 놓여 있었다."
    - "그래스 원더는 상석에 무릎을 꿇고 앉아 %SEX%에게 손짓했다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「스카이, 왔군요. 이쪽으로 오세요.」"
    - "세이운 스카이는 편하게 책상다리를 하고 앉았다. 그제야 %SEX%는 맞은편의 두 사람을 보았다."
    - "맞은편 두 사람은 모두 무릎을 꿇고 앉아 있었다—— 킹 헤일로는 힘들어 보여도 자세가 반듯했고, 그래스 원더는 무척 편안해 보였다."
    - "%SEX%는 말없이 다리를 모아 무릎을 꿇고 앉아 보았다."
    - "삼 분 뒤, 다리가 저리기 시작했다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「우선——」"
    - "그래스 원더는 찻잔을 받쳐 들고, 천천히 두 사람에게 보여 주었다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「찻잔을 들 때는 오른손으로 들어 올리고, 왼손으로 바닥을 받쳐요. 엄지손가락이 잔의 가장자리에 닿지 않게 하고, 소리도 내지 않아요.」"
    - "세이운 스카이는 손에 든 찻잔을 보며, 평소에는 그냥 잡아서 단번에 마셨다는 것을 떠올렸다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「이렇게 하는 거야. 우아함을 유지해야지.」"
    - "킹 헤일로가 시범을 보였다. 흐르는 물 같은 움직임이라 보고 있으면 기분이 좋았다."
    - "세이운 스카이는 따라 하려다가—— 찻잔이 받침에 부딪혀 맑은 소리를 냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「미안해요, 미안해요.」"
    - "그래스 원더는 미소 지으며 고개를 끄덕였다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「괜찮아요. 천천히 하세요.」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「다음은 다과를 먹는 방법이에요.」"
    - "그래스 원더는 접시 위의 정교한 작은 과자들을 가리켰다. 꽃 모양까지 새겨져 있었지만, 하나하나가 너무 작아 아쉬웠다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「왼쪽부터 먹어요. 종이로 받쳐서 들고, 손으로 직접 집으면 안 돼요. 한입에 넣고, 베어 물거나 부스러기를 떨어뜨리지 않도록 하세요.」"
    - "킹 헤일로는 하나를 집어 우아하게 입으로 가져갔다. 소리 하나 나지 않았고, %SEX%가 씹는 모습조차 보이지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(어라, %SEX%는 그냥 삼켰나?)"
    - "세이운 스카이도 흉내 내어 하나를 집었다."
    - "그러고는 굳어 버렸다."
    - "과자가 목에 걸려, 올라오지도 내려가지도 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「읍——!」"
    - "세이운 스카이의 귀가 꼿꼿이 섰다. 두 손이 허공에서 다급하게 움직였다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「목에 걸렸어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으읍!」"
    - "세이운 스카이는 필사적으로 고개를 끄덕였다."
    - "킹 헤일로는 곧바로 탁자 위의 물컵을 %SEX% 앞으로 밀었다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「빨리 마셔! 정말, 천천히 좀 먹으라니까……」"
    - "세이운 스카이는 컵을 낚아채 단숨에 마신 뒤, 길게 숨을 내쉬었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후아아…… 살았다……」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「스카이, 다과는 잘 씹어서 먹어야 해요. 통째로 삼키면 안 돼요.」"
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「뭐? 무슨 생각으로 통째로 삼킨 거야?」"
    - "세이운 스카이는 고개를 들어, 원망스러운 눈으로 %SEX%를 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹도 방금 안 씹었잖아요.」"
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「씹었거든. 이게 바로 우아함이라는 거야——」"
    - "킹 헤일로는 천천히 찻잔을 들어 한 모금 음미했다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「음, 올해 햇차는 좋네. 입안에서는 산뜻하고, 뒷맛도 부드러워——」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「찻물 색도 곱네요. 맑게 비쳐서 잔 바닥의 무늬가 보여요.」"
    - "그래스 원더가 맞장구치고, 세이운 스카이에게도 한 잔 따라 주었다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「스카이도 마셔 볼래요?」"
    - "세이운 스카이는 찻잔을 들고, 킹 헤일로를 흉내 내어 조금 마셨다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「어떤가요?」"
    - "세이운 스카이는 잠시 말이 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……조금 뜨겁네요.」"
    - "그래스 원더는 다정하게 웃었다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「따뜻한 차라 향이 더 잘 느껴진다는 뜻이군요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네! 네! 맞아요!」"
    - "세이운 스카이는 힘차게 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「솔직히, 트레이너 쌤이 타 주시는 것보다 훨씬 맛있어요~」"
    -
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「다기에 대해 말씀드리자면……」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「다과회에서 나눌 대화 주제도 중요해요……」"
    - "그래스 원더는 열심히 다도 문화를 소개했다."
    - "세이운 스카이는 힘겹게 따라갔다."
    -
    - "한 시간 뒤, 다과회가 끝났다."
    - "세이운 스카이는 탁자에 엎드렸다."
    - "그래스 원더는 다기를 정리하며 웃으며 물었다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「스카이, 오늘은 어땠나요?」"
    - "세이운 스카이는 기운 없이 대답했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「삼천 미터 달리는 것보다 힘들었어요.」"
    - "그래스 원더는 잠시 멍해졌다가, 입을 가리고 웃었다."
    - "킹 헤일로는 작게 한숨을 쉬고, 뾰로통하게 말했다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「평소에 너무 늘어져 지내니까 그렇지. 숙녀라면 이런 건 제대로 연습해야 하는 거야……」"
    - "세이운 스카이는 몰래 킹 헤일로를 흘끗 봤다."
    - "킹 헤일로는 여전히 꼿꼿하게 무릎을 꿇고 앉아 있었다. 표정은 우아하고 움직임은 여유로웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹, 다과회 끝났어요~ 그렇게 빳빳하게 앉아 있지 않아도 되는데……」"
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「아가씨로서 우아함을 유지하는 건 기본 소양이야.」"
    - "세이운 스카이는 짓궂은 미소를 띠고 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다리 안 저려요?」"
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「……안 저려.」"
    - "그래스 원더는 다기를 정리하고 탁자 곁으로 돌아왔다."
    - "세이운 스카이는 일어나 기지개를 켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래스! 저쪽 디저트 가게 푸딩이 엄청 맛있어요! 데려가 드릴게요.」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「네, 스카이의 추천이라면 분명 맛있겠죠~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹, 일어나요. 그래스도 정리 끝났어요.」"
    - "킹 헤일로는 여전히 앉아서 움직이지 않았다."
    - "침묵 끝에, %SEX%가 천천히 입을 열었다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「……조금만 더 앉아 있을게.」"
    - "세이운 스카이는 움직이지 않는 킹 헤일로를 보고, 짓궂게 웃으며 그래스 원더를 불렀다."
    - "그래스 원더는 뜻을 알아차리고 맞장구쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래스, 킹은 가기 싫은가 봐요. 우리 가요——」"
    - "두 사람이 입구에 다다르자, 뒤에서 다급한 목소리가 들렸다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「자, 잠깐! 기다려!」"
    - "%SEX% 일행이 돌아보자, 킹 헤일로는 여전히 그 자리에 무릎을 꿇고 앉아 있었다. 얼굴을 살짝 붉힌 채 한 손을 허공에 들고 있었다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「나도…… 갈 거야……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 빨리 와요——」"
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「다리…… 다리가 저려서 못 일어나겠어……」"
    - "세이운 스카이와 그래스 원더는 배를 잡고 웃기 시작했다."
    - color: %COLOR_61%
      content:
        - fontWeight: bold
          content: %HALO%
        - "「웃지 말고! 빨리 도와줘!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네네~ 지금 갈게요~」"


# シニア級5月以降 根性+30 スキルPt+30
ws_ramen:
  title: "마녀의 라멘"
  lines:
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「엄청난 발견이에YO!」"
    - "엘 콘도르 파사가 기세 좋게 교실로 뛰어들어 졸고 있던 세이운 스카이를 붙잡더니, 옆에서 책을 읽던 스페셜 위크까지 일으켜 세웠다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「상점가에 새 라멘집이 생겼어YO! 랜덤 라멘 대도전을 한다고 해YO!」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「성공하면 정체불명의 특급 상품까지 있대YO!」"
    - "세이운 스카이는 하품을 하며 눈을 비비고 물었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「랜덤 라멘?」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「그러니까——」"
    - "엘의 눈이 반짝였다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「들어가면 먼저 제비를 뽑고, 나온 라멘을 먹어야 하는 거예YO! 불지옥 라멘, 초대형 곱빼기, 그리고 전설의 마녀 라멘까지 있대YO!」"
    - "스페셜 위크의 눈이 반짝였다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「재밌겠다!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「가자, 가자! 지난번 라멘 도전에서는 내가 우승했잖아!」"
    - "두 사람은 동시에 신이 나서 세이운 스카이를 바라보았다."
    - "세이운 스카이는 무표정하게 대답했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그럼 난 그냥 평범한 걸로……」"
    - fontSize: 1.4rem
      content: "「안 돼!!!」"
    - "두 사람의 목소리가 겹쳤다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「도전이라면 당연히 다 같이 해야죠!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「맞아, 맞아! 셋이서 왔으니까 다 같이 해야지!」"
    - "세이운 스카이는 기대에 찬 두 사람의 얼굴을 보고 한숨을 쉬었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……알았어.」"
    -
    - "라멘집."
    - "가게는 크지 않았지만 장식이 화려했고, 벽에는 도전에 성공한 사람들의 사진이 가득 붙어 있었다."
    - "점주는 덩치 큰 대머리 남자로, 목소리가 우렁찼고 웃는 얼굴이 무척 호탕했다."
    - content:
        - fontWeight: bold
          content: "점주"
        - "「어서 와! 세 사람은 뭘로 할까?」"
    - "엘은 고개를 숙이고 비장하게 웃었다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「흐흐흐~ 당연히——랜덤 라멘 대도전이죠!」"
    - "그 말을 듣자 점주의 호탕한 표정이 순식간에 진지해졌다. 그가 음산한 목소리로 말했다."
    - content:
        - fontWeight: bold
          content: "점주"
        - "「너희…… 각오는 되어 있겠지……」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「물론이죠!」"
    - "엘이 가슴을 두드렸다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「아무리 매운 라멘이라도 두렵지 않아YO!」"
    - "스페셜 위크도 고개를 끄덕였다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「면이 아무리 많아도 다 먹을 수 있어요!」"
    - "세이운 스카이가 입을 열었지만, 말을 꺼내기도 전에 엘이 %SEX%의 어깨를 끌어안았다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「이 도전! 오늘 반드시 성공하겠어YO!」"
    - "점주가 호쾌하게 웃었다."
    - content:
        - fontWeight: bold
          content: "점주"
        - "「좋아! 기합이 들어갔군! 자——제비를 뽑아라!」"
    - "계산대 위 나무 상자에는 대나무 제비가 나란히 꽂혀 있었다."
    - "스페셜 위크가 가장 먼저 손을 뻗어 하나를 뽑았다. 거기에 적힌 것은——불지옥 라멘."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「우와! 엘! 이건 엘이 먹어야 할 건데!」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「두려워하지 마세YO, 스페짱! 도전자라면 도전자다운 패기가 필요한 법이에YO!」"
    - "두 번째로 엘이 제비를 뽑았다——초대형 곱빼기 라멘."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「……스페짱…… 바꾸지 않을래YO?」"
    - "점주가 가볍게 헛기침을 두 번 했다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「흥! 초대형 곱빼기 정도는 두렵지 않아YO!」"
    - "두 사람이 세이운 스카이를 바라보았다."
    - "세이운 스카이는 손을 넣어 제비 하나를 꺼냈다."
    - "거기 적힌 것은——마녀 라멘."
    - "엘의 눈이 반짝였다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「오오오! 마녀! 강해 보이네YO!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「마녀 라멘이 뭐예요?」"
    - "스페셜 위크가 점주에게 물었다."
    - content:
        - fontWeight: bold
          content: "점주"
        - "「그건 말이지…… 우리 가게의 비밀 메뉴다. 만드는 법은 알려 줄 수 없어. 아무튼——」"
    - "점주는 머리를 긁적이더니 세이운 스카이를 보고 의미심장하게 말했다."
    - content:
        - fontWeight: bold
          content: "점주"
        - "「아가씨, 행운을 빈다.」"
    - "세이운 스카이는 대나무 제비를 쥔 채 미심쩍은 표정을 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기…… 그렇게까지 신비로운 척을……」"
    -
    - "라멘 세 그릇이 식탁 위에 놓였다."
    - "스페셜 위크 앞에는——새빨갛게 빛나는 한 그릇. 면까지 붉게 물들어 있어 보기만 해도 코가 간질거렸다."
    - "엘 앞에는——대야가 놓였다. 지름이 %SEX%의 얼굴 길이만 한 그릇에 고명이 작은 산처럼 쌓여 있었다."
    - "세이운 스카이 앞에는——"
    - "평범한 라멘 한 그릇."
    - "평범한 국물, 평범한 면, 평범한 차슈와 파. 평소보다 양이 좀 많고 국물이 조금 진해 보이기는 했지만, 엘과 스페짱의 것에 비하면 차이가 컸다."
    - "세 사람은 멍해졌다……"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「……이게 다야?」"
    - "점주가 히죽 웃었다."
    - content:
        - fontWeight: bold
          content: "점주"
        - "「마녀란 말이지, 겉보기엔 평범하니까 마녀인 거다. 자, 먹어 봐!」"
    - "엘은 반신반의하며 그 라멘을 한번 보더니, 자기 대야를 앞으로 끌어당겼다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「에라, 모르겠어YO! 전투 개시!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「전투 개시!」"
    -
    - "십 분 뒤……"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「무, 물——!」"
    - "가장 먼저 패배한 것은 스페셜 위크였다. 얼굴이 새빨개진 채 눈물을 뚝뚝 흘리며 물병을 끌어안고 벌컥벌컥 마셨다."
    -
    - "다시 십 분 뒤……"
    - "엘의 얼굴도 창백해지기 시작했다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「안 되겠어YO…… 정말 더는 안 들어가요……」"
    - "%SEX% 앞의 대야는 아직 절반이나 남아 있었고, 몸은 저절로 뒤로 넘어갔다."
    - "배가 공처럼 빵빵하게 부풀어 있었다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「으…… 저, 저는 항복이에YO……」"
    -
    - "다시 십 분 뒤……"
    - "세이운 스카이가 젓가락을 내려놓았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후아아~ 배부르다~ 정말 맛있네~」"
    - "%SEX%는 옆에 있던 휴지로 입을 닦고 두 사람을 바라보았다."
    - "스페셜 위크는 식탁에 엎드린 채 아직도 회복하지 못하고 있었다."
    - "엘은 의자에 몸을 젖히고 두 손으로 빵빵한 배를 쓰다듬으며 공허한 눈을 하고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기——둘 다——나 다 먹었어——」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「다 먹었다고YO!?」"
    - "엘은 힘겹게 고개를 돌렸다가, %SEX%의 국물만 남은 그릇을 보고 눈을 휘둥그레 떴다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「뭔가 특별한 느낌이나 이상한 맛은 없었어?」"
    - "세이운 스카이는 고개를 갸웃하며 생각했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「글쎄…… 그렇게 특별한 건 없었는데. 기껏해야——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「면은 꼬들꼬들하게, 소금과 채소는 두 배, 마늘과 기름은 듬뿍!」"
    - "세이운 스카이는 잠시 멍해졌다. 방금 그 말이 자기 입에서 튀어나온 것 같았다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「그게 다예YO?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이상하네…… 그런데 정말 그랬는데……」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「그럼 왜 마녀인 거예YO!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「몰라.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다 먹으면 소원이 이뤄지려나? 시간이 되돌아가려나?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그냥 해 본 말이야. 냐하하~」"
    - "스페셜 위크가 팔 사이에서 힘겹게 얼굴을 들었다. 얼굴에는 아직 눈물 자국이 남아 있었다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「스카이…… 또 우릴 함정에 빠뜨렸구나……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런 적 없는데……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「점주 아저씨가 그랬잖아——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「겉보기엔 평범하니까 마녀라고……」"


# 外出・デート3回後、次ターン終了時
we_sword_vs_shield_1:
  title: "가장 날카로운 검? 대 가장 단단한 방패!"
  lines:
    - "%YOU%은(는) 요즘 조금 이상하다."
    - "세이운 스카이와 외출할 때마다 사소한 문제가 생기지만, 대수롭지 않은 일이라 %YOU%은(는) 별생각 없이 해결하곤 한다."
    - "하지만 세이운 스카이는 속으로 잘 알고 있었다——전부 작전이었다."
    - "트레이너가 %SEX%에게 더 푹 빠지고, %SEX%에게 더 의지하게 만들기 위한 작전이었다."
    - "그런데 %SEX%가 아무리 기회를 만들어도 %YOU%은(는) 늘 당연하다는 표정이었다."
    -
    - "이날 외출에서 돌아온 세이운 스카이는 마침내 참지 못했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤.」"
    - "「응?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「쌤은…… 정말 너무 직설적이에요.」"
    - "%YOU%은(는) 잠시 멍해졌다."
    - "「어…… 뭐?」"
    - "세이운 스카이가 걸음을 멈췄다. 뒤에서 꼬리가 불만스럽게 흔들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까, 평소에 부끄러워지지도 않아요? 늘 그렇게 태연해요?」"
    - "「……그래서?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세이는 이렇게나 미소녀잖아요!」"
    - "%YOU%은(는) %SEX%의 진지한 항변에 웃음을 터뜨렸다."
    - "「뭘 웃어요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무것도 아니야.」"
    - "%YOU%은(는) 볼을 부풀린 %SEX%를 보며 놀렸다."
    - "「그럼 제대로 준비해서 날 부끄럽게 만들어 볼래?」"
    - "세이운 스카이가 눈을 깜빡였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……정면으로 부끄럽게 만들라고요?」"
    - "「그래, 정면으로.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아요.」"
    - "%SEX%는 꼬리를 한번 흔들고 손가락 하나를 세웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사흘 뒤예요. 기다리고 있어요.」"
    -
    - "사흘 뒤."
    - "트레이닝이 끝난 뒤의 복도. 창문으로 석양이 비스듬히 비쳐 들어왔다."
    - "세이운 스카이는 %YOU%을(를) 한쪽으로 불렀다. 표정이 무척 진지했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 할 말이 있어요.」"
    - "%YOU%은(는) 벽에 기대 양손을 허리에 얹고 전투태세를 갖췄다."
    - "「덤벼.」"
    - "세이운 스카이가 숨을 깊이 들이쉬었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(사흘…… 사흘이나 준비했어. 대사도 열몇 번이나 외우고, 표정도 몇 번이고 연습했어……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(지금이야, 지금.)"
    - "%SEX%는 살짝 붉어진 얼굴을 들어 %YOU%의 눈을 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 사실 전 줄곧——」"
    - "%YOU%은(는) 차분한 눈빛으로 %SEX%를 바라보았다. 입가에는 옅은 미소가 어려 있었다."
    - "세이운 스카이의 귀가 떨렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저, 저는…… 처음 만났을 때부터……」"
    - "세이운 스카이의 목소리가 들뜨기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트, 트레이너 쌤을…… 그러니까…… 조, 좋……」"
    - "%YOU%은(는) 고개를 기울이며 얼굴을 살짝 가까이 댔다."
    - "「좋, 뭐?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋——」"
    - "%SEX%는 입을 벌렸지만 말문이 막혔다. 얼굴이 달아오르기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그, 그러니까……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼!」"
    - "%SEX%는 갑자기 두 손으로 얼굴을 가리고 돌아서서 쪼그려 앉았다. 꼬리는 두 다리 사이에 꽉 끼웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……안 돼…… 못 하겠어……」"
    - "%YOU%은(는) 잠시 멍해졌다가 웃었다."
    - "「그게 사흘 동안 준비한 필살기야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으으——말하지 마요——」"
    - "%SEX%의 귀는 피가 맺힐 듯 새빨갰고, 온몸을 잔뜩 웅크리고 있었다."
    - "%YOU%은(는) %SEX% 앞으로 가서 쪼그려 앉아 %SEX%의 머리를 쓰다듬었다."
    - "「스카이.」"
    - "「다음에도 힘내.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……뭐예요!」"
    - "세이운 스카이는 벌떡 일어나 새빨간 얼굴로 %YOU%을(를) 가리켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「두고 봐요! 다음엔…… 다음엔 끝까지 말할 거니까!」"
    - "말을 마치자마자 그 자리에서 달아났다."
    - "%YOU%은(는) 도망치는 %SEX%의 뒷모습을 바라보았다. 잔뜩 곤두선 꼬리가 복도 모퉁이에서 한번 흔들리고 사라졌다."
    - "「기다릴게——」"
    - "%YOU%은(는) 그쪽을 향해 외쳤다."
    - "복도 끝에서 「알았어요」인지 「바보」인지 모를 중얼거림이 들리더니, 타다다닥 하는 발소리가 멀어졌다."


# 外出・デート5回後、次ターン終了時
we_sword_vs_shield_2:
  title: "가장 날카로운 검! 대 가장 단단한 방패?"
  lines:
    - "한가로운 오후, %YOU%과(와) 세이운 스카이는 학원을 거닐고 있었다. 앞에서는 %UMA%가 열심히 호객 중이었고, 그 주위에는 서로 먼저 사려는 %UMA%들이 모여 있었다."
    - content:
        - fontWeight: bold
          content: %UMA%
        - "「트레센 일보! 트레센 일보입니다!」"
    - content:
        - fontWeight: bold
          content: %UMA%
        - "「오늘의 초특급 기사는 『좋아하는 사람이 벽에 손을 짚고 다가온다면, 어떻게 하시겠습니까?』입니다!」"
    - content:
        - fontWeight: bold
          content: %UMA%
        - "「상상 이상의 반응이 쏟아졌습니다! 황제 회장님을 비롯한 유명 %UMA% 다수를 취재했습니다! 자세한 내용은 트레센 일보에서! 많이 사 주세요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어……? 사람이 엄청 많네요……」"
    - "「그 유명한 황제가 벽에 몰렸을 때 어떻게 반응할지, 궁금하지 않은 사람이 없겠지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오히려 %SEX%가 %SEX%의 트레이너를 벽으로 몰아붙였을 것 같은데요. 냐하하~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇게 말하니까 궁금해졌어요~ 한 부 사 올게요!」"
    - "세이운 스카이는 북적이는 인파 속으로 뛰어들었다가, 잠시 뒤 힘겹게 빠져나왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아하…… 겨…… 겨우 구했네요…… %SEX%들, 다들 제정신이 아니야……」"
    - "두 사람은 근처 벤치에 앉아 일면 기사를 읽기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응? 킹도 인터뷰했네요. 이것부터 봐요!」"
    -
    - "(인터뷰)"
    - if: era.get('cflag:61:招募状态') > 0 && era.get('love:61') >= 50
      lines:
        - content:
            - fontWeight: bold
              content: "기자"
            - "「킹 씨! 일류 레이스 %UMA%로서 늘 제왕다운 우아함과 강인함을 보여 주시는데요. 오늘 이 자리에서 잠시 인터뷰해도 될까요?」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「아——하하! 물론이지, 마음껏 물어봐~」"
        - content:
            - fontWeight: bold
              content: "기자"
            - "「네, 오늘의 질문은 『좋아하는 사람이 벽에 손을 짚고 다가온다면, 어떻게 하시겠습니까?』입니다.」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - (!!!)
        - "질문을 들은 킹 헤일로의 몸이 순간 굳었다. 늘 하던 몸짓도 허공에서 그대로 멈췄다."
        - content:
            - fontWeight: bold
              content: "기자"
            - "「저기…… 킹 씨?」"
        - "킹 헤일로는 정신을 차리더니 가볍게 헛기침을 두 번 하고 평정을 되찾았다."
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「아…… 크흠…… 그게…… 방금 질문이 조금 뜻밖이라서…… 계속하자……」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「만약 내 트레이너가 갑자기 벽에 손을 짚고 다가온다면——」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「일류 레이스 %UMA%라면 이런 돌발 상황에서도 임기응변으로, 당당하게 대응하는 법이야.」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「나라면 먼저 여유롭게 되묻겠어. 예를 들어 『갑자기 그렇게 가까이…… 뭔가 제대로 할 말이라도 있는 거야?』라고.」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「그리고 이렇게 말하는 거지. 『대사도 준비 안 했다면, 우아하다고는 할 수 없겠네~』」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「어때? 이게 일류의 대답이야~」"
        - content:
            - fontWeight: bold
              content: "기자"
            - "「훌륭하네요. 감사합니다.」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이 기자, 정말 눈치 없네요……」"
        - "「왜 그렇게 생각해?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「『%SEX%가 좋아하는 사람이 트레이너』라는 게 더 큰 뉴스인데, 그쪽에는 관심도 없잖아요!」"
        - "「하하, 킹이 말을 너무 잘해서 그쪽에 온통 정신이 팔렸나 보지.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「말도 안 돼! 쌤, 내기해요. 정말로 벽에 몰리면 이 사람, 분명 부끄러워서 말도 못 할걸요!」"
    - if: era.get('cflag:61:招募状态') <= 0 || era.get('love:61') < 50
      lines:
        - content:
            - fontWeight: bold
              content: "기자"
            - "「킹 씨! 일류 레이스 %UMA%로서 늘 제왕다운 우아함과 강인함을 보여 주시는데요. 오늘 이 자리에서 잠시 인터뷰해도 될까요?」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「아——하하! 물론이지, 마음껏 물어봐~」"
        - content:
            - fontWeight: bold
              content: "기자"
            - "「네, 오늘의 질문은 『좋아하는 사람이 벽에 손을 짚고 다가온다면, 어떻게 하시겠습니까?』입니다.」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - (!!!)
        - "질문을 들은 킹 헤일로의 몸이 순간 굳었다. 늘 하던 몸짓도 허공에서 그대로 멈췄다."
        - content:
            - fontWeight: bold
              content: "기자"
            - "「저기…… 킹 씨?」"
        - "킹 헤일로는 정신을 차리더니 가볍게 헛기침을 두 번 하고 평정을 되찾았다."
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「아…… 크흠…… 그게…… 방금 질문이 조금 뜻밖이라서…… 계속하자……」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「아직 내가 좋아하는 사람의 자리는 비어 있지만, 가정해서 대답해 줄게.」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「일류 레이스 %UMA%라면 이런 돌발 상황에서도 임기응변으로, 당당하게 대응하는 법이야.」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「나라면 먼저 여유롭게 되묻겠어. 예를 들어 『갑자기 그렇게 가까이…… 뭔가 제대로 할 말이라도 있는 거야?』라고.」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「그리고 이렇게 말하는 거지. 『대사도 준비 안 했다면, 우아하다고는 할 수 없겠네~』」"
        - color: %COLOR_61%
          content:
            - fontWeight: bold
              content: %HALO%
            - "「어때? 이게 일류의 대답이야~」"
        - content:
            - fontWeight: bold
              content: "기자"
            - "「훌륭하네요. 감사합니다.」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「대사도 준비 안 했다면, 우아하다고는 할 수 없겠네~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「푸——하하하! 안 돼, 못 참겠어! 하하하!」"
        - "세이운 스카이는 킹 헤일로 특유의 몸짓으로 %SEX%의 인터뷰 모습을 흉내 내다가, 결국 스스로도 참지 못하고 크게 웃었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「쌤, 내기해요. 정말로 벽에 몰리면 이 사람, 분명 부끄러워서 말도 못 할걸요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자, 다음——이번 기사는 루돌프 회장님!」"
    -
    - "(인터뷰)"
    - if: era.get('cflag:61:招募状态') > 0 && era.get('love:61') >= 50
      lines:
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「벽에 몰렸을 때의 반응이라, 대담한 질문이군.」"
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「나라면 우선 조금 놀란 뒤, 곧바로 상황을 분석하겠지.」"
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「그리고 조금 더 가까이 다가가 그의 뒤통수를 감싸 쥘 것 같군.」"
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「『그런 방법으로 내 환심을 사려 하다니, 고전적이군. 하지만 그토록 노력했으니, 작은 포상을 내려 줄까~』라고 말하겠지.」"
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「포상이 무엇인지는, 내 마음에 둔 사람만 알 일이야~」"
        - content:
            - fontWeight: bold
              content: "기자"
            - "「트레센 회장님이 마음에 둔 분이라니! 누구신가요! 아니면 조금만 더 말씀해 주실 수 있나요?」"
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「하하, 그 이야기는 다음 기회로 미루지.」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「으음…… 제법 인기 많으시네요……」"
        - "「왜 나라고 단정해?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「당연하잖아요! 같은 팀인데!」"
        - "「질투하는 거야?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「안 하거든요! 흥——계속 읽어요——」"
    - if: era.get('cflag:61:招募状态') <= 0 || era.get('love:61') < 50
      lines:
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「벽에 몰렸을 때의 반응이라, 대담한 질문이군.」"
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「나라면 우선 조금 놀란 뒤, 곧바로 상황을 분석하겠지.」"
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「그리고 조금 더 가까이 다가가 그의 뒤통수를 감싸 쥘 것 같군.」"
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「『그런 방법으로 내 환심을 사려 하다니, 고전적이군. 하지만 그토록 노력했으니, 작은 포상을 내려 줄까~』라고 말하겠지.」"
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「포상이 무엇인지는, 마음에 둔 사람이 생기면 정하도록 하지~」"
        - color: %COLOR_17%
          content:
            - fontWeight: bold
              content: %LUNA%
            - "「어떤가, 조금 평범한 대답이었으려나……」"
        - "심볼리 루돌프가 미간을 좁히며 말했다."
        - content:
            - fontWeight: bold
              content: "기자"
            - "「전혀요! 정말 멋집니다! 이것이 전설의 『황제』의 패기인가요, 오늘 제대로 느꼈습니다!」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「으음…… 전혀 놀랍지 않네요……」"
        - "「반격이 깔끔하네. 학생회 간부들은 다들 이렇게 강한가 봐.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「으음…… 브라이언 선배랑 테이오 선배는 오히려 놀려 올 것 같네요. 냐하하~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「자, 자, 계속 읽어요……」"
    - "%YOU%과(와) 세이운 스카이는 이야기를 나누며 신문을 읽었다……"
    - ………
    - ……
    - …
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아하~ 다 읽었다~ 재밌었어요~」"
    - "세이운 스카이는 일어나 기지개를 켰다."
    - "「견문이 넓어졌네. 그러고 보니 스카이가 벽에 몰리면 어떨까? 부끄러워서 말도 못 하려나?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럴 리가요! 지난번 대결 잊었어요? 세이가 놀려서 쌤 얼굴까지 빨개졌잖아요!」"
    - "「내 기억으로는 네가 새빨간 얼굴로 도망갔는데. 엄청 빠르더라~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그건 마지막에 반칙했으니까 그렇죠! 준비가 안 돼 있어서……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무튼 지난번에 겪어 봤으니 이제 안 부끄러워요! 쌤 정도는 쉽게 상대할 수 있다고요!」"
    - "「그래, 그래, 그래~ 스카이가 제일 대단해~ 가자, 슬슬 밥 먹을 시간이야~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 맞다! 오늘은 장어덮밥! 출발!」"
    -
    - "%YOU%과(와) 세이운 스카이는 식당으로 가는 길을 걷고 있었다."
    - "(쉽게 상대할 수 있다고? 그렇다면……)"
    - "쿵!"
    - "%YOU%은(는) 세이운 스카이가 눈치채기 전에 왼손을 가슴에 얹고 눈을 감은 채 고개를 숙였다. 그리고 오른손으로 벽을 짚어 %SEX%를 옆의 벽으로 몰았다."
    - "그런 다음 %YOU%은(는) 천천히 눈을 뜨고 고개를 들어 준비한 대사를 말했다."
    - "「아름다운 %CHARA_FULL%, 당신은……」"
    - "그런데 눈앞에는 벽밖에 없었다……"
    - "(응? 세이운 스카이는? 성공한 거 아니었나? %SEX%가 또 도망갔어?)"
    - "성공적으로 벽에 가뒀다고 생각한 %YOU%은(는) 그 자리에서 멍해졌다. 주위를 둘러봐도 세이운 스카이의 모습은 보이지 않았다."
    - "「이상한데…… 이럴 리가 없는데……」"
    - "%YOU%은(는) 고개를 숙이고 생각에 잠겼다가, 마침내 보았다——"
    - "세이운 스카이가 새빨간 얼굴로 머리에서 김을 뿜으며 바닥에 기절해 있었다……"
    - "「스카이!!!」"
