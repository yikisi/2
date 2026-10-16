# @file メジロパーマー - 育成
# @author KUN
# @author Claude (翻訳)
train:
  # BASENAME:0 = 体力
  - if: era.get('base:64:0') < era.get('maxbase:64:0') * 0.45
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아하하, 역시 %SELF_CALL%에게도 한계는 있나 보네……」"
      - "%CHARA%는 조금 난처한 듯 쓴웃음을 지었으나, 준비 동작을 멈추지는 않았다."
  - if: era.get('base:64:0') >= era.get('maxbase:64:0') * 0.45
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어때, 트레이너? 오늘의 %SELF_CALL%는 화력을 최대로 올렸다고!」"
          - "스타트 라인에서 몸을 살짝 굽히자, 눈동자에는 진지한 빛이 서렸다."
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「나 지금 엄청 흥분돼……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「골프로 비유하자면, 엄청난 하이 스코어를 낼 수 있을 것 같은 기분이야!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「지금의 나라면 어디까지고 계속 달려 나갈 수 있을 것 같아.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「폭속…… 아니, 신속으로 끝까지 도망쳐 주겠어!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「음~ 다들 열심히 하고 있네~」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이런 광경을 보고 있으니 나까지 달아오르는걸…… 좋아!」"
      # CFLAGNAME:40 = やる気
      - if: era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흐흥~ 컨디션 최고야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「오늘의 훈련, 시작하자!」"
      - if: era.get('cflag:64:40') > 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어라, 훈련 시간이야?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그럼 힘내서 전력으로 달려볼까!」"
      - if: era.get('cflag:64:40') < 0
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「가끔은…… 그냥 머릿속을 비우고 땅굴이나 파고 싶어질 때가 있단 말이지~」"
          - "파머는 어딘지 미묘하고 가벼운 목소리를 내며 몸을 흔들거렸다."
      # CFLAGNAME:48 = 育成ターン計時
      - if: era.get('cflag:64:48') > 47 + 24
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「기분 최고인걸……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「더욱 텐션을 올리기 위해서라도, 부탁할게, %CALLNAME%!」"

ts_add:
  title: "추가 트레이닝"
  lines:
    - "훈련 시간이 종료되었으나, 주변에서는 아직 다른 %UMA%들이 추가 트레이닝을 준비하는 소리가 들려왔다."
    - "주변의 소리에 흥미가 생겼는지 %CHARA%의 귀가 쫑긋거렸다."
    - "비록 훈련 계획상 지금은 휴식을 취해야 할 때지만, %CHARA%가 저토록 가고 싶어 한다면……"
    - acc: 1
      key: select
      content: "「가고 싶으면 다녀와.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오케이! 그럼 다녀올게!」"
        - "%CHARA%는 미소를 띤 채 훈련장으로 달려가 자연스럽게 훈련 대열에 합류했다."
        - "이거 아무래도 야근 확정인 것 같다."
    - acc: 2
      content: "「다음에는 우리도 저렇게 하자.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「알겠어! 그럼 오늘은 푹 쉬기로 할까.」"
        - "%CHARA%는 머리 뒤로 손을 올리며 팔꿈치로 옆에 있던 파트너를 가볍게 툭 쳤다."

train_fail:
  title: "트레이닝 실패"
  lines:
    - "훈련 도중 아주 사소한 사고가 발생했다……"
    - "%CHARA%를 긴급히 보건실로 옮긴 뒤 침대에 눕히고 나서야 겨우 안심할 수 있었다."
    - "%CHARA%는 곁에서 걱정하고 있는 %YOU%을(를) 보며 저도 모르게 가볍게 웃음을 터뜨렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아하하, 걱정하지 마. %SELF_CALL%의 몸은 꽤 튼튼하니까.」"
    - acc: 1
      content: "「그럴 순 없지, 제대로 쉬어 둬.」"
    - acc: 2
      content: "「네 스스로 네 몸을 믿어주는 게 무엇보다 중요해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응, 듣고 보니 그렇네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「걱정 마, 금방 일어날 수 있을 거야.」"
    - "손을 들어 %YOU%의 가슴팍을 가볍게 톡 쳤다."

race_start:
  title: "레이스 전"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「준비 완료! 언제든 나갈 수 있어!」"
    - "파머는 망설임 없이 대기실에서 어깨를 좌우로 움직이며 언제라도 출주할 수 있는 태세를 갖추고 있었다."
    - "이런 메지로 파머에게는 굳이 걱정 어린 말을 덧붙일 필요가 없으리라."
    - acc: 1
      content: "「즐겁게 달리고 와!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오! 알겠어!」"
    - "%YOU%을(를) 향해 엄지손가락을 치켜세우고는 홀가분한 발걸음으로 대기실을 나섰다."

race_end_win:
  title: "레이스 승리"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 마음껏 달리는 게 최고야!」"
    - "파머는 당당한 모습으로 %YOU% 앞에 서서 하얀 목덜미를 흐르는 땀방울을 닦아냈다."
    - "양손으로 시원하게 기지개를 켠 뒤 자연스럽게 뒷머리를 감싸 쥐었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤, 트레이너 덕분이기도 해~」"

race_end_lose:
  title: "레이스 패배"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아…… 져버렸네.」"
    - "파머는 허리에 손을 얹고 풀이 죽은 채 바닥을 내려다보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말이지, 나 지금 뭐 하고 있는 걸까……」"

#募集後の休息
beginning:
  title: "메지로 파머 등장!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너! 준비됐어!」"
    - "파머는 경기장에 서서 %YOU%에게 손을 흔들었다. 몸 상태는 이미 잘 가다듬은 듯했다."
    - "가볍게 몇 번 뛰며 준비를 마쳤다는 걸 보여 줬다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 정도 워밍업이면 충분하겠지?」"
    - "주변의 누구보다도 완벽한 워밍업 동작이었음에도, 파머는 어딘가 신경 쓰이는 듯 자신의 몸을 살폈다."
    - acc: 1
      content: "「내가 보기엔 충분한 것 같아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어, 그래? 아하하……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「늘 이 정도로는 아직 부족하지 않을까! 하고 생각하거든.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 누가 봐주는 게 훨씬 낫네!」"
    - "그런 파머를 바라보는 %YOU%의 마음속에 미묘한 불안감이 스쳤다."
    - "과거 트레이닝 기록은 조금만 관심을 기울이면 얼마든지 찾을 수 있었다."
    - "파머의 기록을 보면 %SEX%가 스스로 말하는 만큼 약하지 않다는 걸 알 수 있다. 부족한 것은 결정타가 될 무언가다."
    - "예를 들면, 그날 레이스에서 보여주었던 그 주법이라든가?"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서, 오늘의 훈련은 뭐야?」"
    - acc: 1
      content: "「훈련 계획을 짜기 전에 우선 마음껏 달려보자.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어, 그냥 마음대로 달려?」"
    - "파머의 목소리에 당혹감이 서렸다."
    - acc: 1
      content: "「당연하지, 네가 가장 좋아하는 방식으로.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내가 좋아하는 방식? 하지만 그렇게 달리면 메지로 가문에 별종 %UMA%가 나타났다고 한소리 들을 텐데, 그건 좀 곤란한걸.」"
    - acc: 1
      content: "「내가 계약한 건 메지로 파머, 바로 너야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어? 무슨 뜻이야?」"
    - acc: 1
      content: "「나는 파머가 메지로라는 이름에 얽매이지 않고, 자신만의 스타일로 달렸으면 좋겠어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하하! 그렇구나!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 내 트레이너다워!」"
    - "파머의 웃음소리는 맑았고, 진심으로 기뻐 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼, 나만의 방식대로 달려도 되는 거지?」"
    - acc: 1
      content: "「응, 계속 지켜보고 있을게.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「계속 지켜본다니, 말하는 게 어쩐지 묘하네…… 그래도 정말 기뻐!」"
    - "미소는 가장 아름다운 표정이다. 지금 파머의 얼굴에는 그 어느 때보다 찬란한 미소가 피어올랐다."

#ジュニア級5月第1週
rumor:
  title: "사소한 소문"
  lines:
    - "훈련 종료 후, %YOU%은(는) 홀로 집무실에서 자료를 정리하고 있었다."
    - "파머가 훈련 계획을 잘 따라주고 있기에, 더욱 완벽한 계획을 세울 필요가 있었다."
    - "한창 업무를 보던 중, 집무실 문이 열렸다."
    - "선배 트레이너 「아, 여기 있었군.」"
    - "선배 트레이너 「자네 파트너가 그 메지로 파머지?」"
    - "선배 트레이너 「뭐랄까…… 그 아이와 팀을 맺는 게 그리 좋은 선택은 아닐 거야.」"
    - "선배 트레이너 「내 경험상 그리 뛰어난 %UMA%는 아니거든. 훈련시키기 꽤 고될걸.」"
    - "비록 듣기 좋은 소리는 아니었으나, 악의가 느껴지지는 않았다."
    - "어쩌면 틀린 말은 아닐지도 모른다. 하지만 %YOU%에게 그것은 별개의 문제였다."
    - acc: 1
      content: "「그렇다 해도 상관없습니다.」"
    - acc: 2
      content: "「그래도 제 파트너니까요.」"
    - "선배 트레이너 「뭐, 그냥 해본 소리야. 결국 어떻게 할지는 자네 생각에 달린 거니까.」"
    - "선배 트레이너 「힘내라고.」"
    - "닫히는 문을 바라보며 %YOU%은(는) 그저 살짝 미소 짓고는 다시 하던 업무를 이어갔다."
    - divider: true
      content: "집무실 밖"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이런 일이…… 트레이너도 고생이 많네.」"
    - color: %COLOR%
      content: "마침 문밖에서 대화를 모두 듣고 만 %SEX%는 들키기 전에 도망치는 쪽을 택했다."
    - color: %COLOR%
      content: "결국 도망치는 것이야말로 메지로 파머가 가장 잘하는 분야니까."
    - color: %COLOR%
      content: "이것이야말로 메지로 파머의 전공 분야……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나…… 도망쳐 버렸네.」"
    - color: %COLOR%
      content: "벽을 마주한 채, 힘없이 혼잣말을 했다."

#ジュニア級5月第2週
strange:
  title: "미묘한 공간"
  lines:
    - "훈련 중인 모습을 보니 전문가가 아니더라도 알 수 있었다."
    - "파머의 최근 달리기가 조금씩 나빠지고 있었다."
    - "트레이너인 %YOU%은(는) 무언가 조치를 취해야만 했다."
    - divider: true
      content: "훈련 종료"
    - "훈련 시간이 끝났음에도 파머는 홀로 남아 어딘지 울적해 보이는 표정을 짓고 있었다."
    - acc: 1
      content: "「무슨 일 있어?」"
    - acc: 2
      content: "「기분이 안 좋아 보이네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음, 뭐……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇다고 할 수 있겠네, 아마도.」"
    - "파머는 건성으로 발밑의 잔디를 툭툭 차며 %YOU%의 시선을 피했다."
    - "설마…… %YOU%에게 불만이 있는 걸까?"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐라고 해야 할까~ 그러니까……」"
    - "예상과는 전혀 달랐다. 파머는 하고 싶은 말을 고심하는 듯 입술만 달싹이다가, "
    - "겨우 결심을 굳힌 듯 다시 %YOU%의 얼굴을 정면으로 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「며칠 전, 트레이너를 찾아갔을 때 말이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내 얘기를 들었거든. 자세히 듣지는 못했지만.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너는…… 사실 내가 그렇게 대단한 %UMA%가 아닐지도 모른다고 생각한 적 있어?」"
    - acc: 1
      content: "「전혀 없어.」"
    - acc: 2
      content: "「그럴 리가 없잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래……?」"
    - "축 처져 있던 파머의 귀가 %YOU%의 대답을 듣자마자 다시 쫑긋 솟아올랐다."
    - "기분을 가라앉게 했던 고민은 이쯤에서 풀린 듯 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「야~ 트레이너까지 그렇게 생각하면 어쩌나 걱정했거든.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「결국 혼자 괜한 걱정을 했네~」"
    - "쫑긋해진 귀에 드러난 마음처럼 말투도 한결 자연스러워졌다."
    - "긴장으로 굳어 있던 몸도 눈에 띄게 힘이 풀렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고마워, 트레이너. 그렇게 믿어줘서.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「원래는 다시 시작할 마음의 준비를 하고 있었거든! 쓸데없는 준비였네~」"
    - "눈앞의 환한 미소를 보며 %YOU%도 덩달아 웃음을 지었다."
    - "진심 어린 미소는 전염되는 법이니까."

#ジュニア級6月第1週
free_race:
  title: "프리 레이스 할래?"
  lines:
    - "평범한 일상의 훈련은 조금 지루했는지, 파머조차 기운이 없어 보였다."
    - "기분 전환을 위해 두 사람은 거리로 나와 정처 없이 걸었다."
    - "지나가던 %UMA% 「저기서 프리 레이스가 열린대!」"
    - "지나가던 %UMA% 「벌써 시작하나? 보러 가야지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「프리 레이스?」"
    - acc: 1
      content: "「아마추어 %UMA%들이 주최하는 길거리 레이스라고 들었어.」"
    - "%YOU%의 설명을 들은 파머는 방금 달려간 %UMA%들을 흥미로운 눈빛으로 바라보았다."
    - "(트윙클 시리즈에서 계속 긴장한다면, 이런 프리 레이스에 나가보는 건 어떨까)"
    - "짧은 고민 끝에 두 사람은 약속이라도 한 듯 방금 전의 방향으로 달려갔다."
    - divider: true
      content: "프리 레이스 경기장"
    - "경기장 시설은 URA의 경기장과 비교할 수준이 아니었다."
    - "비록 임시로 마련된 좁은 경기장이었으나, 관객들의 열기만큼은 중상 레이스에 뒤지지 않았다."
    - "관중석에 선 두 사람의 마음도 주변의 함성 소리에 맞춰 고조되었다."
    - "아직 데뷔하지 않은 %UMA%, 이미 졸업한 %UMA%, 심지어 부상으로 은퇴한 선배들까지 스타트 라인에서 워밍업을 하고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말 시끌벅적하네……」"
    - "경기장 시설은 정식 규격에 맞지 않았으나, 그 누구도 그런 점에 개의치 않았다."
    - "관객들은 오로지 레이스 그 자체에 집중하며, 달리는 모든 %UMA%에게 환호를 보냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내 레이스도 저렇게 모두를 즐겁게 할 수 있다면 좋을 텐데.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「모두가 날 응원해준다든가……」"
    - "진행을 맡은 %UMA% 「거기 있는 %UMA%! 너도 엄청 참가하고 싶은 얼굴인데!」"
    - "갑작스레 %YOU%과(와) 파머 사이에 끼어든 것은 방금까지 진행을 맡고 있던 %UMA%였다. %SEX%는 어안이 벙벙해진 파머를 가리키고 있었다."
    - "진행을 맡은 %UMA% 「우리 프리 레이스는 출신 같은 거 안 따져. 이름만 있으면 돼!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「엣! 정말로?!」"
    - "파머의 얼굴에 평소의 쾌활한 미소가 돌아왔다. %SEX%는 흥미로운 듯 대화를 이어갔다."
    - "『메지로』라는 이름에 얽매여 있던 파머에게 이것은 분명 새로운 경험이 될 터였다."
    - acc: 1
      content: "「한번 해보자!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아!」"
    - "응원을 받은 파머는 즉시 주먹을 불끈 쥐고 상대를 따라 경기장으로 내려갔다."
    - "다만 자기소개를 할 때 약간의 해프닝이 있었다."
    - "진행을 맡은 %UMA% 「자, 어떤 이름으로 참가하시나요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(이름인가……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(메지로라는 이름을 쓰면 너무 눈에 띌 테고, 할머님도 한마디 하실 거야……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(음, 결정했어!)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그냥 '파머'라고 불러줘!」"
    - "진행을 맡은 %UMA% 「음, 어디서 들어본 것 같은데? 뭐 상관없겠지!」"
    - "진행을 맡은 %UMA% 「파머 씨의 합류를 환영합니다!」"
    - "코스로 들어서는 파머의 모습은 학원에 있을 때보다 훨씬 자연스러웠다."
    - "긴장한 기색은 있었으나 담담한 태도를 유지했다."
    - "관객 「파머? 그 가문 출신 아니야?」"
    - "관객 「상관없잖아, 여기선 그런 거 신경 안 써!」"
    - "관객석에는 파머의 신분 따위를 신경 쓰는 이는 없었다. 오로지 새로운 참가자에 대한 기대만이 가득했다."
    - "주변의 순수한 기대감을 느낀 듯, 파머도 조금씩 트랙에만 집중하기 시작했다."
    - "아마추어 코스에서 함께 달리는 선수들은 트레센의 정상급 선수들이 아니었다."
    - "이런 환경 속에서 파머는 거리낌 없이 웃음을 터뜨렸다."
    - "메지로 가문의 일도, 트윙클 시리즈의 일도, 트레센의 일도 전부 머릿속에서 지워버렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시, 달리는 건…… 정말 즐거워!」"
    - "파머는 다른 선수들을 앞서 나갔고, 이변 없이 1착으로 골인했다."
    - "진행을 맡은 %UMA% 「1착은! 오늘의 뉴페이스, 파머!」"
    - "관객 「파머! 파머! 파머!」"
    - acc: 1
      content: "(역시 넌 이렇게 달려야 제맛이지.)"
    - "%YOU%의 마음이 닿은 것인지, 아니면 주변에서 자신의 이름을 연호하는 소리가 들린 것인지."
    - "결승선에 선 파머는 관객석을 향해 브이를 그려 보이며 환하게 웃었다."

# メイクデビュー
begin_race:
  title: "레이스 개막"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 데뷔전이라 그런지 긴장되네.」"
    - "파머는 곁에 선 %YOU%을(를) 바라보며 긴장한 듯 벽에 몸을 바짝 붙였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어쩌지 트레이너, 만약 데뷔전에서 제대로 못 달리면……」"
    - acc: 1
      content: "「괜찮아, 평소처럼 너만의 방식대로 하면 돼.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나만의…… 응, 알겠어.」"
    - "떨리던 몸이 점차 진정되었고, 다시금 컨디션을 가다듬었다."
    - "호흡을 가다듬은 뒤 양손을 꽉 쥐었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응, 나만의 방식으로…… 해볼게!」"

# メイクデビュー勝利
begin_race_win:
  title: "도망자의 시작!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말 상쾌해, 트레이너! 역시 나만의 방식으로 달리는 게 나한테 맞나봐!」"
    - "경기장을 내려오며 파머는 %YOU% 앞에서 흥분한 듯 깡충깡충 뛰어다녔다. 번호표 아래의 몸도 함께 들썩였다."
    - "조금 진정이 되어서야 %YOU%의 손을 꽉 쥐고 진심을 담아 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고마워 트레이너! 트레이너의 믿음이 없었다면 절대 여기까지 오지 못했을 거야!」"
    - "흥분한 파머를 보며 %YOU%은(는) 쑥스러운 듯 머리를 긁적이고는, 기뻐하는 %SEX%에게 수건을 건네주었다."
    - "%SEX%를 믿어주는 것, 그것이야말로 지금 해야 할 일이었다."

#ジュニア級7月
mejiro:
  title: "메지로라는 이름의 부담"
  lines:
    - "메지로 가문, 그 어떤 트레이너도 무시할 수 없는 명문이다."
    - "현재 메지로 파머와 계약한 %YOU%에게도 그것은 커다란 산과 같았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 저기…… 사실 굳이 따라올 필요는 없는데.」"
    - "파머는 불안한 듯 트레센 산책로를 걸으며 곁에 있는 %YOU%을(를) 힐끔거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「본가로 돌아가는 것도 아니고, 그냥 인사하러 가는 거니까 그렇게 긴장하지 않아도 돼.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맥퀸이나 라이언도 트레이너한테 뭐라 그러진 않을 거야, 진짜로.」"
    - acc: 1
      content: "「아니, 긴장한 건 내가 아닌 것 같은데.」"
    - "정곡을 찌르는 말에 두 사람 사이의 대화가 돌연 멈추었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아…… 들켰나?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하긴, 확실히 조금 긴장되네.」"
    - "파머는 쑥스러운 듯 손가락으로 양쪽 머리카락을 만지작거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맥퀸이랑 라이언은 모두의 기대를 한 몸에 받는 샛별이잖아. 그 애들이랑 같이 서 있으면 항상 뭐랄까……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「똑같은 메지로 가문의 %UMA%고 동기인데…… 나만 좀, 너무 약한 것 같아서.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 나처럼 자유분방한 %UMA%는 그 애들처럼 우아하게 달리지도 못하고, 조금……」"
    - "굳이 말로 다 하지 않아도 파머가 하고 싶은 말은 충분히 전달되었다."
    - acc: 1
      content: "「메지로라는 이름이 그렇게 중요한 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에?」"
    - acc: 1
      content: "「파머는 파머잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아니, 그건 알지만, 그래도……」"
    - "파머의 얼굴에 낙담한 표정이 서렸고, 귀도 조금씩 처지기 시작했다."
    - acc: 1
      content: "「메지로라는 이름이 없더라도, 나는 파머 네가 약한 %UMA%라고 생각하지 않아.」"
    - "느리긴 했지만, 파머의 귀는 확실히 다시 쫑긋 일어났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고마워…… 왠지 다시 자신감이 생겼어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전에 트레이너가 그랬지? 나한테 맞는 주법이 있다고.」"
    - "파머는 뜬금없이 화제를 돌렸으나, %YOU%은(는) 그 이유를 잘 알고 있었다."
    - "지금은 이 화제에서 도망치기로 한 것이다."
    - acc: 1
      content: "「그래, 그게 너에게 가장 어울리는 주법이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼, 약속 하나 할까, 트레이너?」"
    - "갑자기 걸음을 멈추자, 뺨을 스치는 미풍이 파머의 가벼운 머릿결을 흔들었다."
    - "파머가 갑자기 멈추자 앞서 걷던 발걸음을 멈추고 돌아봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 주법으로 레이스에서 이겨서…… 날 믿어준 트레이너한테 보답하는 거 어때?」"
    - acc: 1
      content: "「그날이 오기를 계속 기대하고 있을게, 파머.」"
    - acc: 2
      content: "「그날 난 반드시 네 곁에 있을 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도 이제 막 데뷔했으니까 너무 서두를 필요는 없겠지? 아하하……」"
    - "홀가분한 웃음소리와 함께 파머가 다시 달리기 시작했다."
    - "%SEX%는 %YOU%을(를) 앞질러 교문 밖으로 달려 나갔다."
    - "오늘은 모임이 있으니 발걸음을 서둘러야 할 때였다."

#クラシック級1月1週
new_year_1:
  title: "새해 다짐"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「새해 복 많이 받아, 트레이너!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「드디어 왔네, 새해~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라, 헬리오스는?」"
    - acc: 1
      content: "「헬리오스는 오늘 안 올 거야.」"
    - "메지로 파머의 표정이 잠시 멍해졌으나, 곧 다시 태연함을 되찾았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 오늘 신년회는 우리 둘뿐이겠네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「평소에는 셋이서 북적거렸으니까 어쩐지 기분이 좀 묘하긴 한걸.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도 평소처럼 보내면 되는 거지? 일 년의 계획은 정초에 세우는 법~ 이라니까!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어쨌든 뭐라도 해볼까? 오세치 BBQ를 한다거나, 사자춤 인형에 속눈썹을 그려준다거나!」"
    - acc: 1
      content: "「오세치 BBQ!?」"
    - acc: 2
      content: "「에, 우리한테 사자춤 인형이 있어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아니~ 그냥 갑자기 떠오른 것뿐이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오세치 요리를 구워 먹을 리가 없잖아, 아하하.」"
    - "%YOU%의 경악 섞인 반응에 메지로 파머는 금세 자신의 제안을 거두어들였다."
    - "역시 둘만 있게 되니 메지로 파머는 평소의 파티 피플처럼 마음껏 즐기지는 못하는 듯했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 맞다!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 훈련은 없다고 했지만, 그래도 새해 목표는 정해두고 싶어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「올해 나갈 레이스 같은 거 말이야! 음, 올해 큰 이벤트가 뭐가 있더라……」"
    - "왠지 모르게 메지로 파머의 표정이 조금 어두워졌다. 마치 깊은 고민에 빠진 듯한 모습이었다."
    - "이럴 때야말로 트레이너인 %YOU%이(가) 나설 차례였다."
    - acc: 1
      content: "「그거라면 클래식 3관이겠지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아…… 클래식 3관인가.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어마~어마하게 압박감이 느껴지는 이름이네!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……하긴 그렇네, 나도 드디어 그 시기가 온 거구나~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「시간은 참 잔혹해. 재능이 있든 없든 같은 해에 태어났다는 이유로 함께 묶여버리니까.」"
    - "조금 전의 여유롭던 얼굴에 약간의 낙담이 서렸다. 바라보는 것만으로도 압박감이 느껴질 정도였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「올해 가장 강한 사람은 아마 라이언이겠지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「메지로 가문에서 가장 기대받는 스피드 스타……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 애와 같은 무대에서 겨룬다니, 농담으로라도 상상하고 싶지 않은걸.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나도 노력은 하고 있지만, 실력 차이가 역시 좀……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말이지 만만치 않은 현실이야! 하지만 내가 할 수 있는 일은 단 하나!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우리 도망치자, 트레이너!」"
    - acc: 1
      content: "「도망친다고?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응, 현실 도피!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「포부를 가지는 것도 좋지만, 새해 시작부터 이러면 난 다시 예전 모습으로 돌아가 버릴 거야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어디 즐거운 일 없을까…… 해방감을 느낄 수 있을 만한 일 말이야~」"
    - "어두웠던 표정을 지우고 다시 처음의 모습으로 돌아와 진지하게 고민하기 시작했다."
    - "현실에서 도망칠 방법, 해방감을 느낄 수 있는 것, 즐거운 일……"
    - acc: 1
      key: select
      content: "「농사 짓기!」（스피드+20）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「농사! 맞아, 이 폭발하는 청춘의 감정은 밭에 쏟아부을 수밖에 없어!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 옷 갈아입고 바로 출발하자! 전속력으로 출발!」"
        - "학원 안에 밭이 있긴 하지만, 메지로 파머의 의욕은 %YOU%의 예상을 뛰어넘는 것이었다."
        - "어디선가 들어본 적 있는 문구를 외치며 운동복으로 갈아입은 메지로 파머가 밖으로 달려 나갔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아아아아아아!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하아, 하아, 어때 트레이너, 이 풍경!」"
        - acc: 1
          content: "「대단해, 순식간에 전부 다 해버렸네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이건 내 특기 중 하나인 구멍 파기야!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어릴 때부터 이걸 아주 잘했거든. 밭 가는 속도만큼은 지지 않는다고.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 이제 도망을 시작해 볼까! 열정이 식으면 다시 보자고, 트레이너!」"
        - acc: 1
          content: "「아, 파머!」"
        - "땀범벅이 된 %YOU%이(가) 메지로 파머를 붙잡으려 했으나, 특기를 선보인 메지로 파머는 순식간에 시야에서 사라졌다."
        - "새해의 시작은 메지로 파머의 의외의 장기 자랑으로 장식되었다."
    - acc: 2
      content: "「상점에 가서 지름신 강림하기!」（체력+100）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「마구 사기! 좋은 생각이야! 지금 바로 가자!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이맘때쯤이면 슬슬 세일도 시작할 시기잖아!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「사실 전부터 사고 싶었던 게 있었거든. 그걸 사버리고 스트레스를 확 풀어버리자!」"
        - divider: true
          content: "상점가"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너 이것 봐, 이 골프 셔츠 정말 멋지지 않아?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「기왕 온 김에 이거 사고 같이 유유자적하게 골프나 치러 가는 거 어때? 산책도 되고 말이야.」"
        - "눈앞의 골프 용품에 푹 빠진 메지로 파머는 잠시 다가올 레이스들을 잊고 한가로운 시간을 만끽했다."
    - acc: 3
      content: "「카페에서 차 한잔할까?」（스킬 포인트+20）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「카페! 좋네, 수다랑 디저트라면 분명 머릿속을 완전히 충전해 줄 거야!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「가자 트레이너! 나도 오랜만에 그게 마시고 싶어!」"
        - divider: true
          content: "카페"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어디 보자, 이렇게 아이스티랑 레모네이드를 섞어서……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「완성! 이게 바로 내가 제일 좋아하는 오리지널 특제 음료야!」"
        - acc: 1
          content: "「자주 그렇게 해서 마셔?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응! 하지만 집에서는 예의 없다고 자주 혼나곤 했지. 그래도 멈출 수가 없는걸.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이건 그냥 개인적인 취향이지만, 다른 조합도 있어. 트레이너도 마셔볼래?」"
        - acc: 1
          content: "「이런 기회라면 당연히 마셔봐야지!」（호감도+10）"
        - acc: 2
          content: "「파머 네가 들고 있는 그걸로 줄래?」（애정도+2）"
        - "소다수와 우유, 콜라와 레몬차."
        - "모든 조합이 의외로 훌륭한 맛을 냈다."
        - "메지로 파머와 %YOU%은(는) 함께 다양한 특제 음료를 즐기며 시간을 보냈다."

#クラシック級3月1週
how:
  title: "삼관은 어떻게 해야 돼!?"
  lines:
    - "우연히 메지로 파머와 마주쳤을 때, 드물게도 %SEX%는 밝은 미소를 띠고 있지도 않았고 다른 이들에게 인사를 건네지도 않았다."
    - "고개를 숙인 채 걷다가 %YOU%의 가슴팍에 부딪히고 나서야 정신을 차린 %SEX%는, 깜짝 놀란 듯 고개를 들고 반사적으로 사과를 하다 상대가 누구인지 확인했다."
    - acc: 1
      content: "「무슨 일 있어?」"
    - "비난의 기색 없는 질문에 메지로 파머는 다시 고개를 숙이고 손가락을 꼼지락거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무것도 아니야, 그게……」"
    - "여전히 꼼지락거리는 손가락을 내려다보고 있을 때, 앞에서 뻗어온 손이 %SEX%의 손을 붙잡았다."
    - "차갑게 식어가던 자신의 손에 비해, 자신을 붙잡아준 그 손은 무척이나 따뜻했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（트레이너한테라면 말해도…… 괜찮겠지? 트레이너니까.）"
    - "손가락의 움직임을 멈추고 고개를 들어 자신의 파트너를 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그게, 3관에 관한 일이야.」"
    - "꽉 쥐고 있던 손을 풀고 잠시 할 말을 골랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 알다시피 3관…… 사츠키상이 얼마 안 남았잖아?」"
    - acc: 1
      content: "「확실히 얼마 안 남았지……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 말인데, 3관은 어떻게 봐도 아주 중요한 레이스잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당연히 나도 신경 쓰여! 하지만…… 역시 걱정되는걸. 메지로 가문에서도 이걸 아주 중요하게 여길 테니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「만약 져버린다면 메지로 가문의 수치라는 소리를 듣게 되겠지? 그래서 출주해야 할지 고민이야.」"
    - "입을 열긴 했으나 메지로 파머의 목소리는 점점 작아졌고, 평소의 자신감 넘치는 모습은 온데간데없었다."
    - acc: 1
      content: "「그럼 파머 너는? 너는 어떻게 하고 싶어?」"
    - "메지로 파머의 몸이 살짝 떨렸고, %YOU%의 눈을 바라보던 시선도 점차 비껴나갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나같이 실력도 부족한 %UMA%가 출주해봤자 별 의미 없지 않을까? 배울 수 있는 것도 없을 테고, 그렇게 생각하면……」"
    - acc: 1
      content: "「그럼 도망치자.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「도망…… 친다고?」"
    - "메지로 파머의 표정이 의아함으로 바뀌었으나, 곧 다시 웃음을 터뜨렸다."
    - acc: 1
      content: "「그래, 도망쳐서 너만의 답을 찾아내는 거야!」"
    - "짧은 침묵 끝에 메지로 파머는 유쾌한 웃음소리를 내며 눈가에 고인 눈물을 닦아냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 말이 맞네. 역시 일단 도망치는 게 나다워!」"
    - "메지로 파머는 더 이상 3관 문제로 괴로워하지 않는 듯했다. 그저 깊게 숨을 들이마시고 기분을 전환했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「답을 찾았어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때 기분이 좋으면 참가할래!」"
    - "주변 시선은 아랑곳하지 않고 씩씩하게 %YOU%과(와) 시선을 맞추었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때 곁에 있어 줄 거지, 트레이너?」"
    - acc: 1
      key: select
      content: "「당연하지, 계속 지켜보고 있을게.」（호감도+10）"
    - acc: 2
      content: "「언제까지나 기다리고 있을게, 파머.」（애정도+2）"
    - "메지로 파머의 표정이 미묘하게 변하더니, 들어 올린 팔로 %YOU%의 가슴팍을 가볍게 툭 쳤다."
    - "조금 전까지 미소에 섞여 있던 그늘은 사라지고, 오직 %SEX%만의 자신감 넘치는 웃음만이 남아 있었다."

sats_sho:
  title: "사츠키상을 앞두고!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어쩌지 트레이너…… 기세에 휩쓸려 여기까지 오긴 했는데, 메지로의 이름에 걸맞지 않은 모습을 보이면 어떡하지!」"
    - "메지로 파머는 몹시 흥분한 기색이었으며, 내뱉는 말마다 불안함이 가득 묻어 있었다."
    - "경기장 트랙을 바라보는 메지로 파머의 몸은, 본인이 말하지 않아도 느껴질 만큼 미세하게 떨리고 있었다."
    - acc: 1
      content: "「무서워?」"
    - acc: 2
      content: "「긴장돼?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응…… 아마 그럴지도. 하지만 이미 하기로 마음먹었으니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「난 절대로 물러서지 않을 거야, 절대로.」"
    - "%YOU%의 목소리를 듣자 메지로 파머의 몸 떨림이 멈추었다."
    - "%SEX%는 손을 뻗어 %YOU%을(를) 살며시 붙잡고는 조용히 심호흡을 했다."
    - "다시 고개를 들었을 때, %SEX%는 이미 평소의 자신감 넘치는 모습으로 돌아와 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 고마워.」"
    - "메지로 파머는 미소를 띤 채 손을 놓고 선수용 통로를 지나 경기장으로 나갔다."

# 皐月賞勝利
sats_sho_win:
  title: "일단 1관!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말로 이겼어, 트레이너!」"
    - "승리한 파머가 돌아오자 대기실 안이 떠들썩해졌다."
    - "즐거운 목소리가 두 사람만의 공간에 울려 퍼지며 멈출 줄 몰랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 덕분이야.」"
    - acc: 1
      content: "「응? 뭐라고?」"
    - "메지로 파머는 %YOU%의 얼굴을 바라보았다. 마음속의 복잡한 감정들이 목구멍에 걸려 차마 입 밖으로 나오지 않았다."
    - "%SEX%는 잠시 입을 다물었다가 이내 말을 이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너가 없었다면 난 분명 여기 서 있지 못했을 거야.」"
    - "방 안의 시끌벅적하던 소리가 잦아들었다."
    - acc: 1
      content: "「그래도 이건 너의 승리야.」"
    - "메지로 파머의 표정이 다시 처음의 미소로 돌아왔고, %SEX%는 %YOU%의 손을 꽉 쥐었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우리 두 사람의 승리라고, 트레이너!」"

# 皐月賞敗北
sats_sho_lose:
  title: "져도 괜찮아!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「져버렸네…… 하하, 역시 난 그렇게 대단한 %UMA%는 아닌가 봐.」"
    - "대기실 벽에 기댄 채, %SEX%의 시선이 %YOU%과(와) 바닥 사이를 오갔다."
    - "얼굴을 타고 흐르는 땀방울이 마치 눈물처럼 보였다."
    - acc: 1
      content: "「하지만 넌 최선을 다했어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「노력은 했지만, 그래도……」"
    - acc: 1
      content: "「중요한 건 파머 네가 스스로 노력했다는 사실이야. 게다가 레이스는 이번 한 번뿐만이 아니라고.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런가?」"
    - "흔들리던 메지로 파머의 시선이 눈앞의 %YOU%에게 향했다. 눈빛에는 더 이상 아까의 슬픔이 서려 있지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 다음번에 이길 수 있을까?」"
    - acc: 1
      content: "「그럼 다음 레이스에서는 반드시 승리하는 것을 목표로 삼자.」"
    - "괴로워하던 표정은 사라지고 그 자리에 굳건한 의지가 나타났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맞아, 슬퍼하고 있을 때가 아니지.」"
    - "몸을 바로 세운 메지로 파머는 숨을 내뱉으며 얼굴의 땀을 닦아냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음에도 잘 부탁해, 트레이너!」"

#クラシック級5月1日、同チームメジロライアンかつ同学年でないときは発生しない
sisters:
  title: "%SISTERS%도 라이벌"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오, 일본 더비가 가까워졌네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「올해 더비는 어쩌면 깜짝 놀랄 일이 생길지도 몰라……」"
    - "메지로 파머는 집무실 소파에 누워 지루한 듯 스마트폰을 뒤적거리고 있었다."
    - acc: 1
      content: "「놀랄 일?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그야 올해는 라이언이 있으니까.」"
    - "메지로 파머는 스마트폰을 끄고 가볍게 뛰어 %YOU%의 곁으로 다가왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「난 3관 같은 거엔 별생각 없지만 말이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 라이언은 다르다고?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 애는 처음부터 3관을 목표로 노력해 왔으니까, 더비 때는 분명 엄청난 활약을 보여줄 거야!」"
    - "목소리는 무척이나 밝았으나 어딘가 허전한 구석이 느껴졌다."
    - acc: 1
      content: "「그럼 파머 너는?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에? 나?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더비라……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내가 더비 같은 곳에 나가도 괜찮은 걸까?」"
    - "얼마 남지 않았던 자신감이 메지로 파머의 혼잣말 속에서 조금씩 사라졌고, %SEX%는 낙담한 듯 뒤로 두어 걸음 물러났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……만약 그때 기분이…… 자신감이 생긴다면.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때 라이언과 한번 겨뤄볼게.」"

#クラシック級5月1日、皐月勝利、同チームメジロライアンかつ同学年でないときは発生しない
sisters_1crown:
  title: "%SISTERS%도 라이벌"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오, 일본 더비가 가까워졌네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「올해 더비, 음~ 한번 도전해볼까?」"
    - "메지로 파머는 집무실 소파에 누워 스마트폰을 보면서 시선을 슬쩍 옆으로 던졌다."
    - acc: 1
      content: "「의욕이 좀 생겼어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아하하…… 그냥 해본 말이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그야 올해는 라이언이 있으니까.」"
    - "메지로 파머는 스마트폰을 끄고 가볍게 뛰어 %YOU%의 곁으로 다가왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「난 3관 같은 거엔 별생각 없긴 한데 말이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 라이언은 다르다고?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 애는 처음부터 3관을 목표로 노력해 왔으니까, 더비 때는 분명 엄청난 활약을 보여줄 거야!」"
    - "목소리는 밝았으나 어딘가 허전하게 들렸다."
    - acc: 1
      content: "「너는 안 나갈 생각이야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에? 나?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼 안 돼, 사츠키 때는 기세로 나갔지만 더비는 좀 그렇지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내가 더비 같은 곳에 나가는 건 역시 좀……」"
    - "얼마 없던 자신감이 메지로 파머의 혼잣말과 함께 점점 사라지더니, %SEX%는 실망한 기색으로 물러났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……만약 그때 기분이…… 자신감이 생긴다면.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때 한번 해볼게…… 클래식 노선 같은 거.」"

toky_yus:
  title: "더비를 앞두고!"
  lines:
    - "일본 더비, 3관의 두 번째 관문."
    - "출주할 수 있는 %UMA%라면 누구도 외면할 수 없는 축제다."
    - "당연하게도 지금 이곳에 있는 메지로 파머에게도 마찬가지였다."
    - "등 뒤로 쏟아지는 시선을 받으며, %SEX%는 이 레이스에 대해 가졌던 공포를 털어내고 당당하게 경기장에 서서 앞을 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「단 한 번뿐인 출주 기회……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가슴이 벅차올라, 트레이너! 곧 시작이야!」"
    - "몸은 더 이상 이전처럼 불안함으로 떨리지 않았고, 오히려 설렘으로 들떠 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안심해 트레이너, 지금의 %SELF_CALL%는 절대로 지지 않을 테니까!」"
    - acc: 1
      content: "「그럼 좋은 소식 기다릴게.」"
    - acc: 2
      content: "「응. 난 파머를 믿어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응! 나만의 방식으로 단번에 승리를 움켜쥐고 말겠어!」"
    - if: d.sats_sho === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「사츠키상도 성공했으니까 더비도 분명 괜찮을 거야……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「전력으로 도망치는 거야, 나!」"
        - "%YOU%에게 등을 보인 채 메지로 파머는 힘차게 고개를 들고 자신만만한 표정으로 경기장을 향해 걸어갔다."

# 日本ダービー勝利
toky_yus_win:
  title: "운 좋은 도망자"
  lines:
    - "예로부터 일본 더비는 가장 운이 좋은 %UMA%가 왕관을 차지한다는 전설이 있다."
    - "그리고 오늘, 메지로 파머야말로 가장 운이 좋은 이였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이겼어! 역시 자신감이 있을 때는 운도 따라주는구나!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SELF_CALL%의 노력이 드디어 결실을 맺었어……」"
    - "떨리는 자신의 두 손을 바라보던 메지로 파머는, 믿기지 않는다는 듯 고개를 들어 자신만큼이나 벅찬 감정을 느끼고 있는 %YOU%을(를) 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말 너무 행복해! 자신 있게 레이스를 마친 이 기분.」"
    - acc: 1
      content: "「맞아, 이게 바로 파머 너의 실력이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말 그럴까? 헤헤…… 고마워!」"
    - "메지로 파머는 들뜬 마음으로 두 손을 들어 트레이너의 손바닥과 가볍게 하이파이브를 했다."

# 日本ダービー敗北
toky_yus_lose:
  title: "운이 좀……"
  lines:
    - "예로부터 일본 더비는 가장 운이 좋은 %UMA%가 왕관을 차지한다는 전설이 있다."
    - "바꾸어 말하자면, 오늘의 메지로 파머는 그리 운이 좋지 못했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아하하…… %SELF_CALL%는 오늘 운이 별로였나 봐.」"
    - "어깨를 늘어뜨린 채 대기실로 돌아온 %SEX%는 자신을 되돌아보았다."
    - acc: 1
      content: "「파머, 괜찮아.」"
    - "%YOU%의 목소리를 듣자 메지로 파머는 목소리가 들리는 쪽으로 고개를 천천히 돌렸다."
    - "시선을 조금씩 옮기다 마침내 눈앞에 있는 상대를 발견했다."
    - "%SEX%는 손을 뻗어 %YOU%의 손을 잡았다. 차가운 촉감이 전해져 왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나도 알고 있어. 그러니까…… 적어도 지금은 이대로 잠시 쉬게 해줘.」"

hako_kin:
  title: "하코다테 기념!"
  lines:
    - "하코다테 경기장의 대기실에 서서 메지로 파머를 기다렸다."
    - "왠지 모르게 메지로 파머는 유독 늦게 나타났고, 대기실에 들어와서도 무언가 머뭇거리는 기색이었다."
    - acc: 1
      content: "「파머?」"
    - "%YOU%의 목소리에 메지로 파머는 어색하게 자리에 앉았고, 시선은 이리저리 흔들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 뭐랄까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하코다테라면 나한테도 꽤 익숙한 곳이긴 한데, 그게……」"
    - "한참 동안 이곳저곳을 바라보면서도 끝내 %YOU%과(와)는 눈을 마주치지 못했다."
    - if: era.get('love:64') < 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까, 레이스 끝나고 나서 트레이너도 나랑 같이 놀러 갈래?」"
    - if: era.get('love:64') >= 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「끝나고 나서 나랑 데이트해줄 수 있어?」"
    - "메지로 파머는 곁눈질로 슬쩍 %YOU%의 반응을 살폈다."
    - "그런 메지로 파머의 모습을 보며 %YOU%은(는) %SEX%에게 별다른 이상이 없음에 안도했다."
    - acc: 1
      content: "「물론이지.」"
    - "대답을 들은 메지로 파머의 얼굴에 미소가 번졌고, %SEX%는 자연스럽게 문을 밀어 열었다."
    - if: era.get('love:64') < 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「기대하고 있을게!」"
    - if: era.get('love:64') >= 50
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전력을 다해서 보답할게, 트레이너!」"

# 函館記念勝利
hako_kin_win:
  title: "여행 준비"
  lines:
    - "승리하고 돌아온 메지로 파머는 입구에서 기다리고 있던 %YOU%을(를) 보고 하마터면 덥석 껴안을 뻔했으나, 방금 레이스를 마쳐 땀범벅인 자신의 상태를 의식해 멈춰 섰다."
    - "걸음을 멈춘 뒤, 기다리고 있던 %YOU%을(를) 향해 승리의 V자 표시를 지어 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오래 기다렸지! %SELF_CALL%의 멋진 질주, 잘 봤어?」"
    - acc: 1
      content: "「응, 정말 멋졌어!」"
    - "파트너의 찬사를 들은 메지로 파머의 미소는 더욱 찬란해졌다."
    - if: era.get('love:64') < 50
      lines:
        - "마치 춤을 추듯 경쾌한 발걸음으로 %YOU%을(를) 지나쳐 대기실로 들어갔다."
        - "덜 닫힌 문틈 사이로 고개를 내밀더니 잠시 뜸을 들이며 무언가 생각하는 듯했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「위닝 라이브가 끝나면 같이 가는 거다?」"
    - if: era.get('love:64') >= 50
      lines:
        - "춤추듯 가벼운 발걸음으로 %YOU%의 눈앞까지 다가와 손을 잡았다."
        - "두 다리를 모으고 선 자세로 잠시 멈춰 섰는데, 얼굴이 발그레하게 달아오른 듯했다."
        - "뒤로 한 걸음 물러나 거리를 둔 뒤 대기실로 쏙 들어갔고, 얼굴을 숨긴 채 %YOU%에게 말을 건넸다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아까 약속했잖아, 이따가 같이…… 이 근처를 좀 걷기로.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「위닝 라이브 후에 같이 가자.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「적어도 돌아가기 전까지는…… 나랑 같이 있어 줘야 해.」"

#函館記念の前後を踏んだあと、同ターンの任意外出で発生
hometown:
  title: "고향의 추억"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왠지 엄청 오랜만에 돌아온 것 같은 기분이네.」"
    - "위닝 라이브가 끝난 뒤, 메지로 파머는 즐겁게 %YOU%의 손을 잡고 거리를 거닐었다."
    - "아쉽게도 시간이 조금 늦어버린 탓에 이미 문을 닫은 가게들이 꽤 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이런, 역시 라이브 끝나고 오니까 좀 늦었나 봐.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「미안해 트레이너! 역시 다른 때에 왔어야 했는데……」"
    - "방금 전 승리의 기쁨이 어두운 거리 풍경에 한풀 꺾인 듯, %SEX%의 귀가 어색하게 축 늘어졌다."
    - acc: 1
      content: "「난 상관없어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말?」"
    - "축 늘어졌던 귀가 번쩍 솟아올랐고, 눈동자에는 반짝이는 빛이 서렸다."
    - "주변은 이미 어두워졌지만, 메지로 파머의 연한 푸른빛 눈동자는 유독 밝게 빛났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇다면……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음, 아직 열었을 거야!」"
    - "메지로 파머는 %YOU% 앞에서 혼잣말을 중얼거리더니 스마트폰을 꺼내 들었다."
    - "가볍게 뛰어가 거리를 둔 뒤, 수화기에 대고 조그맣게 몇 마디를 속삭였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응응! 부탁할게!」"
    - "통화가 끝난 듯 메지로 파머는 다시 폴짝폴짝 뛰어 %YOU%의 곁으로 돌아왔다."
    - "%SEX%는 %YOU%의 두 손을 붙잡고 한 방향을 향해 곧장 걸어갔다."
    - "손에 이끌려 몇 분쯤 뛰어가자, 두 사람의 눈앞에 평범한 작은 가게 하나가 나타났다. 어둠 속에서 홀로 불을 밝힌 모습이 조금 생경했다."
    - "하지만 메지로 파머가 문을 열고 들어서는 순간 그 이유를 알 수 있었다."
    - "가게 안에는 인상 좋은 아저씨 한 분이 계셨고, 이미 준비해둔 간식을 내어주셨다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「땡큐 아저씨! 역시 예전 그대로네!」"
    - "메지로 파머는 %YOU%을(를) 자리에 앉히고 자신도 자연스럽게 옆자리에 앉았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나 예전에 여기 오는 거 정말 좋아했거든.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「집도 물론 좋긴 하지만…… 뭐랄까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예전에 여기 있을 때는 항상 겉도는 것 같은 기분이었거든.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 이런 작은 가게들을 찾아다니는 걸 꽤 좋아했어.」"
    - "메지로 파머는 밝은 미소를 짓고 있었다. 조금 전 내뱉은 말과는 전혀 어울리지 않을 정도로 어두운 기색 하나 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만! 그건 이제 다 과거의 일이야!」"
    - acc: 1
      content: "「지금은 이제 그런 기분 안 들지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……안 들어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 사실 아주 조금은 남아 있을지도.」"
    - "메지로 파머는 입안의 무를 씹고는 웃으며 %YOU%의 말에 대답했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도 난 이미 결정했어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나만의 방식으로 달리는 것뿐만 아니라……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나만의 삶의 방식도 찾아낼 거야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 이렇게 말하니까 좀 오글거리나?」"
    - "쑥스러운 듯한 표정을 지으며, %SEX%는 따뜻한 하얀 무를 다시 한 입 베어 물었다."

summer_start_1:
  title: "여름 합숙(클래식급) 시작"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우햑~! 드디어 내 여름휴가가 왔다!!」"
    - "여름휴가——즉, 여름 합숙."
    - "%UMA%에게 있어 이는 실력을 강화하기 위한 중요한 활동이지만——"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「%65_CALL%! 이번 여름은 나랑 신나게 놀고 나서, 지금부터 새로운 자신을 찾아보는 거야~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맞아! 내 새 출발은 헬리오스 너만 믿을게!」"
    - "메지로 파머에게 있어서는 다시 시작하는 여름."
    - "실패를 두려워하지 않고 용기 있게 모험하는 새로운 %TEEN%로 탈바꿈하기 위해."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「그치만 %65_CALL%, 메지로 가문의 사정 때문에 어릴 때부터 계속 달려야만 했지?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「하지만 정말 달리기뿐이야? 달리기 말고 다른 꿈도 있을 거 아냐?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「달리기 이외의 꿈이라~ 그렇게 말하니 음……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%UMA% 중에도 레이스에 나가지 않는 사람은 많으니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「솔직히 말해서, 잘 모르겠어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 나 이런 부분부터 다시 시작해도 괜찮을까?」"
    - acc: 1
      content: "「당연하지」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「만약에, 그냥 만약에 말이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내가 레이스 말고 다른 꿈을 쫓는다고 해도 괜찮아?」"
    - "메지로 파머의 질문에 대한 %YOU%의 대답은 당연히 하나뿐이었다."
    - acc: 1
      content: "「네가 하고 싶은 일을 해」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아, 알았어! 이번 여름 동안 이것저것 해보면서 정말 하고 싶은 일을 찾아낼 거야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헬리오스! 너도 잘 부탁해!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번 여름을 엄청나게 핫한 파티로 만들어보자고!」"
    - "단지 메지로 가문의 %UMA%로서가 아니라, 메지로 파머로서 자신을 찾기 시작했다."

#合宿中8月2週、同チームにダイタクヘリオスがいるとヘリオス／パーマーの好感が相互+30
summer_middle_1:
  title: "여름 합숙(클래식급) 도중"
  lines:
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「홋카이도 캠핑! 웨이!!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우효! 완전 신나!」"
    - "세 사람은 여름 합숙의 휴식 기간을 이용해 홋카이도를 방문하여 아웃도어 활동을 만끽했다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「%65_CALL% 봐봐! 대물을 낚을 것 같은 기분이 들어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응, 분명 그럴 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「남은 건 불필요한 움직임 없이 가만히 기다리는 것뿐……」"
    - "강가에서 다이타쿠 헬리오스가 낚싯대를 쥔 채 뚫어지게 수면을 응시하고 있었다."
    - "메지로 파머는 그 옆에 서서 조금 미묘한 표정으로 지켜보았다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「후후~ 귀여운 물고기들아 이리온~ 웨이~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아~ 그렇게 크게 소리치면……」"
    - "다이타쿠 헬리오스의 목소리가 너무 컸던 탓인지, 바늘 근처에 왔던 물고기가 곧장 달아나 버렸다."
    - "세 사람은 텅 빈 낚싯바늘을 보며 동시에 허탈한 표정을 지었다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「우와, 놓쳐버렸다~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아하하…… 원래 낚시라는 게 그렇지 뭐.」"
    - "낚싯대를 정리하고 캠핑장으로 돌아왔다."
    - "낚시에 실패한 기분은 금세 털어버리고, 눈앞의 점심 식사에 다시 열의를 불태웠다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「BBQ~ BBQ~ 그리고 다음은—— 야키소바 짱~!」"
    - "야키소바가 지글지글 소리를 내며 맛있는 향기를 풍겼다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「겁나 맛있다~ %65_CALL%, 여기 뭐 넣었어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「부재료로 부추랑 감자 같은 걸 넣고 조미료도 그냥 적당히 넣었어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도 맛은 꽤 괜찮지?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「뭐랄까? 소박하면서도 맛있는? 집밥 같은 느낌?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「삼시 세끼 이것만 먹어도 안 질리겠어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇구나, 다행이다~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너도 먹어봐, 식기 전에.」"
    - acc: 1
      content: "「응!」"
    - "메지로 파머가 만든 철판 야키소바는 아주 익숙한 맛이라, 캠핑 요리 특유의 이색적인 느낌은 전혀 없었다."
    - "굳이 표현하자면 평소 %YOU%이(가) 먹어본 듯한 익숙한 맛이었다."
    - "하지만 그렇기에 이 평범한 맛은 사람을 안심시켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 난 헬리오스가 내린 커피 맛이 어떤지 마셔볼까!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응!? 이 동글동글한 건 뭐야?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「타피오카 커피~」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「지금 완전 인기 짱이야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「와, 타피오카야! 아하하하, 헬리오스 너 천재 아냐!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐랄까, 우리 캠핑은 좀 엉망진창이긴 해도 정말 즐겁네!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「큰일이야, 나 계속 이렇게 살고 싶어질지도 몰라!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「오오오! 좋은데, %65_CALL%!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「그럼 그냥 달리기 그만두고 자연 속 일상을 보여주는 UMATUBE 인플루언서가 되는 건 어때?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「제목은…… 신나게, 파티 스타일 캠핑! 어때?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「인기 폭발해서 황금시간대 방송 출연을 목표로 하는 거지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「UMATUBE 인플루언서! 그거 멋진데!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그것도 꽤 괜찮을 것 같아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「홋카이도를 무대로 재미있는 영상을 찍는 거야! 기획할 만한 게 엄청 많을걸!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너는 어떤 영상이 뜰 것 같아?」"
    - acc: 1
      key: select
      content: "「농촌……」（파워+10）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「농촌! 파티 스타일로 농촌을 일구는 거야?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「엄청 힘들긴 하겠지만, 그것도 꽤 재미있겠는걸!」"
        - "%YOU%이(가) 깊게 생각하지 않고 던진 제안이었지만, 의외로 진지한 기획으로 받아들여졌다."
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「웨이 웨이!」"
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「땅을 처음부터 끝까지 다 갈아엎는 거야~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「자자, 내 절친~ 슬슬 점심 먹어야지?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘은 방금 잡은 연어로 연어 파티를 열자!」"
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「……왠지 그러다간 팔 근육이 팍 하고 터져나갈 것 같아~」"
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「이건 스피드 대결이 아니라 완력 대결이잖아!~」"
        - "다이타쿠 헬리오스의 이야기를 듣는 것만으로도 %YOU%은(는) 자신의 근육이 꿈틀대는 기분을 느꼈다."
    - acc: 2
      content: "「추위 참기 대결……」（근성+10）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오! 추위 참기 대결!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「누가 더 잘 참는지 겨루는 거야? 이 근처 겨울은 정말 춥거든. 눈도 엄청 오고.」"
        - "%YOU%의 입에서 엉뚱한 생각이 튀어 나왔지만, 메지로 파머는 진지하게 들으며 눈을 가늘게 뜨고 겨울의 풍경을 상상했다."
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「음—— %65_CALL%, 그건 너무 춥지 않아? 좀 더 텐션을 높여보자고!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「으으으, 텐션~ 근성~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「큰일이야, 머릿속에서 눈토끼가 크리스마스 이브를 보내고 있어……」"
        - "몇 초 뒤, 메지로 파머가 눈을 떴다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「고, 고생 꽤나 하겠는걸……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그래도 난 의지력만큼은 자신 있거든. 참을 수 있어!」"
        - "메지로 파머는 자신만만하게 말했지만, %YOU%은(는) 깨닫고 있었다."
        - "이곳의 추위는 트레센 학원에 있을 때와는 차원이 다르기에, 정말로 근성을 단련할 수 있을지도 모른다는 사실을."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그나저나 대자연은 정말 신기하네~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어릴 때는 아무것도 없는 벌판이라고만 생각했는데……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……전혀 그렇지 않았어! 마음만 먹으면 뭐든 할 수 있잖아!」"
    - "다이타쿠 헬리오스의 주의가 다른 곳으로 쏠린 사이, 메지로 파머는 홀로 눈앞의 자연환경을 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（그래, 여기서 무엇을 할지는 내가 정하는 거야.）"
    - divider: true
      content: "며칠 후"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아~ 벌써 아침이네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（이 모든 게 정말 즐거웠어. 낚시도, 채집도, 요리나 영상 촬영도 전부.）"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（난 자유로워. 무엇이든 할 수 있고! 무엇을 하든 살아갈 수 있어!）"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（하지만, 그렇다면……）"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내가—— 정말로 하고 싶은 일은 뭐지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（눈을 감고…… 나 자신에게 물어보자……）"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（난 뭘 하고 싶어? 내 진심은 뭐야?）"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（내면의 목소리, 근원에서부터 들려오는 외침……）"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（만약 내가 자유롭다면, 그때 나는 무엇을 할까……?）"
    - "자신의 사색에 깊이 빠져들어 내면의 소리에 귀를 기울였다."
    - "어둠 속에서 서서히 익숙한 소리가 들려오기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 소리는……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「——바람?」"
    - "메지로 파머의 귀가 쫑긋거리며 바람 소리를 좇았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마치 바람과 같아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（바람이 너무 기분 좋아! 공기가 폐를 정화하고, 일출의 햇살이…… 피부를 스치고 있어……!）"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（라이벌도 결승선도 생각할 필요 없이, 그저 이렇게 계속 달려나가면 되는 거야!）"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내 마음이 가는 대로 달려가는 거야! 흐아아아아아아아!」"
    - "잠이 덜 깬 %YOU%의 눈에 들어온 것은, 일출 아래에서 미소 지으며 질주하는 메지로 파머였다."
    - "아침 노을 속에서 %SEX%는 달리기에 푹 빠져 있었다. 그 모습은 자연스럽고 생기 넘쳤으며, 무엇보다—— 무척이나 아름다웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후우, 후우…… 트레이너, 이제 알겠어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……난 달리는 게 좋아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「속도가 빠르든 느리든 상관없어. 그냥 마음을 비우고 달리는 게 좋아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내가 방금 달린 건 어떤 목적이 있어서가 아니라…… 눈앞의 경치를 보자 내 다리가, 내 마음이 스스로 움직였기 때문이야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 난 분명히—— 달리는 걸 좋아하는 거야!」"
    - acc: 1
      content: "「그렇구나」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응, 바로 그거야!」"
    - "메지로 파머와 %YOU%은(는) 서로를 보며 미소 지었다. 더 이상의 말은 필요 없었다."
    - "자신의 진심을 찾아낸 메지로 파머의 미소는 더없이 자연스러웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 트레이너. 저 뒤에 요테이산 보여?」"
    - "메지로 파머의 말에 %YOU%이(가) 고개를 돌리자 그곳에 우뚝 솟은 산이 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "고향의 산."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예전에는 저 산을 보면 좀 무서웠거든.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마치 나보고 제대로, 진지하게 달리라고 부르는 것만 같아서.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……마치 억압당하는 기분이었어.」"
    - acc: 1
      content: "「그럼 지금은 어때?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤, 지금은 말이지~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 무서워!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……하지만 예전만큼 무섭지는 않아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜냐하면…… 그렇게 대단한 건 아니지만, 난 오늘 아무 꾸밈 없이 가장 나답게 달렸으니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘의 내가 달린 이유는 내가 달리고 싶었기 때문이야!」"
    - "메지로 파머는 웃음 띤 얼굴로 짐짓 농담 섞인 표정을 지어 보였다."

summer_end_1:
  title: "여름 합숙(클래식급) 종료"
  lines:
    - "여름 합숙이 끝났다. 다이타쿠 헬리오스 덕분에 메지로 파머의 이번 여름은 무척이나 알찼다."
    - "%SEX%는 이 시간을 보내며 자신이 진정으로 달리고 싶어 한다는 것을 깨달았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맞아, 난 달리는 게 좋아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앞으로도 계속 계속 달려나가고 싶어!」"
    - "메지로 파머의 얼굴에는 커다란 자신감이 서려 있었지만, 한편으로는 일말의 불안함도 엿보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그치만 트레이너~ 그냥 이대로도 괜찮은 걸까?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX%들의 모습을 보면 그냥 이대로는 좀 안 될 것 같은 기분이 들어~」"
    - "메지로 파머의 시선을 따라 %YOU%도 의아한 듯 그쪽을 바라보았다."
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - "「드디어 다가오는군요…… 국화상.」"
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - "「제가 가장 잘하는 장거리 G1 레이스……」"
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - "「무슨 일이 있어도 승리해야만 해요!」"
    - color: %COLOR_13%
      content:
        - fontWeight: bold
          content: %MCQUEEN%
        - "「그리고 내년 텐노상(봄)을 향해……」"
    - "맥퀸이 바닷가 난간에 기대어 자신의 꽉 쥔 두 손을 묵묵히 바라보고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「거봐, 맥퀸의 각오는 차원이 다르잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「실력 차이를 따지기 전에, 레이스에 임하는 생각 자체가 달라.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그 애랑 비교하면 난 그냥 달리는 걸 좋아할 뿐이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 난 아직 잘 모르겠어…… 내가 정말로 레이스라는 것 자체를 좋아하는 건지.」"
    - "메지로 파머가 한 마디 한 마디 내뱉을수록 목소리는 점점 작아졌다."
    - "%SEX%는 가볍게 자신의 얼굴을 감싼 채 불안한 듯 %YOU%을(를) 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이런 마음으로 '우리 다 똑같지~' 같은 표정을 지으며 레이스에 나가도 되는 걸까……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……생각이 너무 많은 건 내 나쁜 버릇이야~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내 머리로는 도저히 답을 못 찾겠어, 에휴……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 미안해.」"
    - acc: 1
      content: "「응? 왜?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그냥 좀 미안해져서.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「난 이런 걸 한 번 신경 쓰기 시작하면 도무지 빠져나올 수가 없거든.」"
    - "메지로 맥퀸과 같은 굳건한 결의도, 레이스에 대한 집념도 없다는 사실."
    - "그런 자신의 모습에 메지로 파머는 처음 가졌던 자신감을 잃어가고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「달리고 싶으니까 달린다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「분명 그것만으로도 충분할 텐데, 하지만……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「난 아마 감수성이 너무 예민한 타입인가 봐, 미안.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나 같은 건 참 골치 아픈 녀석이지……」"
    - "%SEX%는 고개를 떨구고 불안하게 움직이는 손가락 끝을 바라보았다."
    - "메지로 파머는 정말 생각이 많고 감수성이 풍부한 성격인지도 몰랐다."
    - acc: 1
      content: "「난 감수성이 풍부한 것도 나쁘지 않다고 생각해」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어머나, 그렇게까지 오냐오냐해주지 않아도 되는데~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너가 자꾸 이러니까 나도 모르게 어리광을 부리게 되잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그래도 그렇게까지 말해준다면…… 조금만 더 너한테 기대고 있을게.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 말이야……」"
    - "얼굴에는 아직 낙담한 기색이 남아 있었지만, 몸은 솔직하게 %YOU%의 어깨에 기대어 왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「시간이 걸리더라도 꼭 찾아낼 거야……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나만의 길을!」"
    - "축 늘어졌던 귀가 서서히 다시 쫑긋 섰고, 눈동자에는 다시 생기가 돌기 시작했다."

kiku_sho:
  title: "국화상을 앞두고"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「장거리 레이스는 이번이 처음이라……」"
    - "메지로 파머는 대기실에 앉아 미세하게 떨리는 자신의 다리를 내려다보았다."
    - "3관의 종착역인 장거리 G1 레이스는 모든 %UMA%에게 매우 중요한 무대다."
    - "긴장한 기색이 역력한 메지로 파머 앞에 %YOU%이(가) 다가가 손을 내밀었다."
    - acc: 1
      content: "「많이 긴장되지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당연히 긴장되지! 하지만 말이야, 긴장되는 것보다 훨씬 더 가슴이 벅차올라!」"
    - "%SEX%는 고개를 휙 들어 %YOU%을(를) 바라보며 흥분한 듯 팔을 위아래로 흔들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 레이스는 메지로 가문 사람들도 모두 지켜보고 있을 테니까……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나만의 방식으로 내가 얼마나 대단한지 증명해 보이겠어!」"
    - "메지로 파머는 두 주먹을 불끈 쥐고 %YOU%의 어깨를 가볍게 툭 쳤다."
    - acc: 1
      content: "「알았어, 관객석에서 지켜보고 있을게!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응! %SELF_CALL%만의 질주를 똑똑히 지켜봐 줘!」"

# 二冠取得済み
kiku_sho_2crown:
  title: "국화상을 향해"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「국화상…… 큰일이야, 심장 고동이 멈추질 않아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「장거리 레이스는 이번이 처음이니까!」"
    - "메지로 파머는 대기실에 앉아 미세하게 떨리는 자신의 다리를 내려다보았다."
    - "3관의 종착역인 장거리 G1 레이스는 모든 %UMA%에게 매우 중요한 무대다."
    - "긴장한 기색이 역력한 메지로 파머 앞에 %YOU%이(가) 다가가 손을 내밀었다."
    - acc: 1
      content: "「많이 긴장되지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당연히 긴장되지! 하지만 말이야, 긴장되는 것보다 훨씬 더 가슴이 벅차올라!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「처음엔 조금 무서웠던 3관 노선인데, 이제 곧 정복할 수 있잖아!」"
    - "고개를 휙 들어 %YOU%을(를) 바라보며 흥분한 듯 팔을 위아래로 흔들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 레이스는 메지로 가문 사람들도 모두 지켜보고 있을 테니까……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나만의 방식으로 내가 얼마나 대단한지 증명해 보이겠어!」"
    - "메지로 파머는 두 주먹을 불끈 쥐고 %YOU%의 어깨를 가볍게 툭 쳤다."
    - acc: 1
      content: "「알았어, 관객석에서 지켜보고 있을게!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응! %SELF_CALL%만의 질주를 똑똑히 지켜봐 줘……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 3관 달성의 순간도 말이야!」"

kiku_sho_win:
  title: "도망자의 귀환!"
  lines:
    # 菊花賞勝利
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「야호! 이겼다!」"
    - "자신만의 질주 방식으로 우승을 차지한 메지로 파머는 선뜻 발걸음을 멈추지 않았다."
    - "계속 달리면서 관객석에 있을 익숙한 얼굴을 찾아 헤맸다."
    - "관객석 가장자리를 따라 달리던 중, 지하 통로 앞에서 손을 흔들고 있는 파트너를 발견했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너! 봤어?!」"
    - "속도를 줄일 생각도 하지 않은 채 그대로 %YOU%을(를) 향해 돌진했다."
    - acc: 1
      content: "「파머, 정말 멋진 질주였어!」"
    - acc: 2
      content: "「파머! 일단 멈춰!」"
    - "목소리를 다 듣지 못한 모양인지, 메지로 파머는 처음 속도 그대로 달려와 안겼다."
    - "힘을 조절했기에 %YOU%이(가) 날아갈 정도는 아니었지만, 뒤로 몇 걸음 밀려나고 말았다."
    - "얇은 승부복 너머로 메지로 파머의 체온이 전해지자, 왠지 모르게 조금 달아오르는 기분이 들었다."
    - "갓 레이스를 마친 직후의 땀 냄새가, 본인은 자각하지 못한 사이 포옹을 통해 조금씩 코끝을 간지럽혔다."
    - "솔직히 말하자면…… 반응이 오고 말았다."
    - acc: 1
      content: "「파머, 여기서 이러는 건 좀……」"
    - acc: 2
      content: "「파머, 주위 좀 봐, 주위!」"
    - "주변의 미묘한 분위기를 눈치챘는지, 메지로 파머의 얼굴이 발갛게 물들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「미안 미안, 그게…… 내가 너무 흥분했나 봐.」"
    - "%YOU%을(를) 꽉 안고 있던 손을 풀고 어색하게 몇 걸음 뒤로 물러났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어쨌든, 난 이제 위닝 라이브 준비하러 갈게!」"
    - if: era.get('love:64') >= 50
      lines:
        - "사람들의 시선을 피해 대기실로 숨어들어, 여전히 땀이 흐르는 가슴팍을 부여잡았다."
        - "승부복 디자인이 꽤 시원한 편인데도, 지금은…… 왜 이렇게 뜨거운 걸까."
        - "심장 박동은 마치 아직 경기장 위에 있는 것처럼 쿵쾅거리며 멈추지 않았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「무슨 짓을 한 거야, 나……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그냥 평범한…… 포옹이었는데……」"

# 菊花賞敗北
kiku_sho_lose:
  title: "작은 속삭임……"
  lines:
    - "레이스가 끝나고 대기실의 공기는 불쾌할 정도로 고요했다."
    - "최선을 다했음에도 마주하게 된 패배라는 현실."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - "메지로 파머는 고개를 푹 숙인 채 아무 말 없이 앉아 있었다."
    - "대기실 문이 열리고 나서야 %SEX%는 움직임을 보였다."
    - "문을 열고 들어온 %YOU%은(는) 지금의 메지로 파머를 보며 선뜻 말을 걸지 못했다."
    - "곁으로 다가가자 메지로 파머가 먼저 몸을 움직였다."
    - "아무 말 없이 일어서서 몸을 돌리더니, 가만히 %YOU%의 어깨에 이마를 기댔다."
    - acc: 1
      content: "「파머?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너……」"
    - "아주 작은 목소리였지만 고요한 공간 덕분에 또렷하게 들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나 정말 열심히 했어, 트레이너. 정말 열심히 노력했단 말이야. 강점을 살리고, 나만의 스타일로 달리고…… 전부 다 노력했는데!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나도 메지로의 이름에 부끄럽지 않은 성적을 내고 싶었어.」"
    - "목소리는 작았지만 한 마디 한 마디가 선명하게 와닿았다."
    - "하지만 지금은 메지로 파머가 이렇게 잠시 울게 두는 편이 나을 것이다."

# 三冠称号獲得後の休息
triple_crown:
  title: "3관 달성!"
  lines:
    - "사츠키상, 더비, 국화상."
    - "클래식 3관을 모두 손에 넣었다."
    - "메지로 파머와 %YOU%은(는) 집무실에 나란히 서서 눈앞의 트로피를 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐랄까, 아직도 꿈만 같은 기분이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「처음엔 기분 내킬 때만 참가할까 생각했는데, 이렇게 엄청난 성적을 거두게 될 줄이야.」"
    - "메지로 파머는 트로피를 보며 들뜬 표정을 지었다."
    - acc: 1
      content: "「역시 파머 넌 대단해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에? 그래? 아하하……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 이건 다 트레이너 덕분인걸.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「처음에 네가 믿어주지 않았다면, 아마 참가조차 하지 않았을 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고……」"
    - "말문이 잠시 막히더니, 시선이 트로피와 옆자리를 번갈아 오갔다."
    - "%YOU%이(가) 보지 못하는 곳에서 손가락을 꼼지락거리며 꼬았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그게, 그러니까 나만의 방식 말이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너가 없었다면 난 아마 다른 방법을 썼겠지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 항상 감사하고 있어.」"
    - "꼬리가 쉬지 않고 흔들리더니, 어느새 꼬리 끝이 %YOU%의 종아리에 살짝 닿았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기 있잖아, 트레이너.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나중에 시간 날 때, 나랑 같이 메지로 가문에……」"
    - acc: 1
      content: "「시간만 괜찮다면 지금 바로 가도 돼.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에, 지금?」"
    - "메지로 파머가 홱 고개를 돌렸다. 표정에는 당황함이 역력했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지금 가면 할머니께서 분명 엄청나게 큰 파티를 여실 텐데.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「3관이잖아. 사람도 엄청 많고, 며칠은 계속될 것 같아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음…… 난 그런 자리는 영 익숙하지 않단 말이지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나중에 한가해지면, 그때 우리 둘이서만 가자.」"
    - "메지로 파머는 뒷머리를 긁적이며 마음속 불안함을 감추려 애썼다."
    - "부드럽게 미소 지으면서도 불안한 눈길로 곁을 힐끗 보았다."
    - acc: 1
      content: "「우리 둘이서만?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응, 단둘이서.」"
    - "힘차게 고개를 끄덕이더니 옆으로 깡충 한 걸음 다가왔다."
    - "창틀에 손을 얹고 창밖을 바라보며 중얼거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「둘이서 같이 할머니를 뵙고, 그다음에……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라, 뭔가 이상한가……?」"

# クラシック級有馬記念
classical_arim_kin:
  title: "아리마 기념을 앞두고"
  lines:
    - "연말 대미를 장식하는 축제, 아리마 기념."
    - "2,500m 장거리 레이스이자 대중의 관심이 가장 집중되는 일전이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 이맘때가 되면 긴장되네…… 헤헤.」"
    - "흥분으로 떨리는 몸, 그리고 설렘으로 가득 찬 마음."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「처음엔 아리마 기념까지 오게 될 줄은 상상도 못 했어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「메지로의 시선에 얽매이지 않고 나만의 방식을 믿는 것.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이게 전부 트레이너 네가 나에게 가르쳐준 것들이잖아.」"
    - "승부복 겉옷을 걸치고 당당하게 가슴을 폈다."
    - acc: 1
      content: "「가자, 파머.」"
    - "%YOU%의 목소리를 들은 메지로 파머는 경기장 쪽을 향해 주먹을 꽉 쥐었다."
    - "자신감 넘치는 미소를 지으며 등 뒤로 엄지손가락을 치켜세웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나한테 맡겨줘! 에헤!」"

# クラシック級有馬勝利
# スキル「大逃げ」習得
c_arim_kin_win:
  title: "아리마 기념 슈퍼 도망자!"
  lines:
    - "2500m 코스에서도 파머의 체력은 다하지 않아 결승선을 지나서도 달리고 있었다."
    - "힘을 뺀 걸음으로 손을 흔들며 관중석에 인사했다."
    - "더는 달릴 수 없게 되자 속도를 늦추고 관중석을 따라 천천히 걸어 선수 통로에서 멈췄다."
    - "천천히 대기실에 들어가 문에 기대고 떨리는 자신의 몸을 봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이제 메지로의 짐짝이 아니라 메지로 파머야……」"
    - acc: 1
      content: "「아직 그런 생각을 해?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우와! 트레이너! 들었어!?」"
    - "갑작스러운 %YOU%의 목소리에 파머는 펄쩍 놀라 과장된 자세로 뒤로 뛰었다."
    - "목소리도 요란해서 %YOU%의 고막이 터질 것 같았다."
    - "그래도 파머가 기뻐 보이니 괜찮겠지."
    - acc: 1
      content: "「솔직히…… 메지로가 아니어도 괜찮아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「메지로가 아니어도 괜찮다는 건 나도 알아. 그래도 가끔 이런 생각이 들어.」"
    - acc: 1
      content: "「더 자신감을 갖고 파머의 이름을 남겨.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응응, 알았어! 그럼……」"
    - "숨을 깊이 들이쉬고 한결 파머다운 표정으로 돌아왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래…… 내가 이겼어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘은 %SELF_CALL%의 승리야! 어때?」"

# クラシック級有馬敗北
c_arim_kin_lose:
  title: "아쉬움 남는 도주극"
  lines:
    - "자신만의 방식으로 아리마 기념을 제패하여, 모든 관중의 머릿속에 파머의 이름을 각인시키는 것."
    - "메지로 가문의 메지로 파머가 아닌, 아리마 기념의 승자 메지로 파머로서."
    - "그렇게 다짐했지만 현실은 %SEX%에게 승리를 허락하지 않았다."
    - "1착을 한 %UMA%가 기뻐하는 모습을 보며 마음 한구석에 지울 수 없는 아쉬움이 남았다."
    - "전광판에서 관중석으로 시선을 돌렸다."
    - "자신을 끝까지 믿어준 파트너가 분명히 지켜보고 있을 것이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너……」"
    - "시선의 끝에서 관객석 가장 앞줄에 서 있는 %YOU%과(와) 눈이 마주쳤다."
    - "고개를 떨군 채 지하 통로를 지나 대기실 문을 열었다."
    - "%YOU%을(를) 보자마자 빠르게 다가와 고개를 숙인 채 품에 얼굴을 묻었다."
    - "고요한 대기실에 작은 울음소리가 메지로 파머의 눈물과 함께 새어 나왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 안 되는 걸까, 아리마 기념을 이기고 싶다는 건…… 그렇게 큰소리를 쳐놓고……」"
    - acc: 1
      content: "「파머……」"
    - "%YOU%의 목소리에 울음소리가 멎었다."
    - "하지만 %SEX%는 %YOU%의 손을 더 세게 쥐며 놓아줄 생각을 하지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잠시만…… 잠시만 여기서 도망치게 해줘……」"

#シニア級1月1週
new_year_2:
  title: "새해 참배"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「새해 복 많이 받아~ 트레이너.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「새해 참배! 얼른 개쩌는 신한테 가서 올 한 해도 같이 신나게 놀아보자고 당당하게 말하자!」"
    - acc: 1
      content: "「어느새 갸루 말투가 아주 익숙해졌네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당연하지! 헬리오스랑 같이 보낸 시간이 얼만데.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 올해부터는 시니어급 %UMA%라고. 슬슬 수많은 관중 앞에서 파티 스타일의 매력을 보여줄 때가 됐지!」"
    - "지금까지 메지로 파머는 꾸준히 노력해왔고, 그만큼의 성적과 경험을 쌓았다. 게다가 오구리 캡이 전력으로 질주하는 모습까지 지켜보았다."
    - "이런 다양한 경험들은 %SEX% 성장의 밑거름이 되어, 올해 눈부신 활약을 펼치게 할 원동력이 될 것이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아 맞다, 트레이너. 갑자기 생각난 건데~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「갸루 스타일의 소원을 빌 거라면, 평범한 신님보다는 그쪽 전문 신님을 찾아가는 게 좋지 않을까?」"
    - acc: 1
      content: "「어, 그런 신님이 정말 있어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼! 이 세상에는 갸루의 신, 파티의 신 같은 %UMA%들이 정말 많거든.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그분들께 참배해 보는 건 어때? 지금 바로 가볼까?」"
    - acc: 1
      content: "「그거…… 꽤 재미있겠네.」"
    - "신사의 전통적인 신님보다는 그들을 찾아가는 것이 현대적인 스타일의 힘을 얻는 데 도움이 될지도 모른다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 얼른 찾아가 보자!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그나저나 신님도 종류가 참 많네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잘 노는 분도 계시고, 엄청 예쁜 분도 계시고…… 누구한테 갈까?」"
    - "목표로 삼을 신님은 한 분이 아니었다. 이럴 때는……"
    - acc: 1
      key: select
      content: "「다이타쿠 헬리오스의 여신」（체력+200）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「헬리오스의 여신이라……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 맞다. 저번에 들었는데, 헬리오스가 아는 분 중에 정말 신님처럼 눈부신 %UMA%가 있대!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「얼마 전에 차갑게 거절당하고 나서 『아가씨 너무 차가워~!』라며 소리치더라고. 그분 이름이 아마……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「대일여래(다이니치뇨라이)? 였나? 아무튼 한번 찾아가 보자.」"
        # CFLAGNAME:66 = 募集状態
        - if: era.get('cflag:85:66') === 0
          content: "대일여래…… 이름부터가 완전히 신님 같은 느낌인데, 과연 어떤 분일까."
        - if: era.get('cflag:85:66') === 1
          content: "대일여래…… 이름부터가 완전히 신님 같은……다이……니치?"
        - if: era.get('cflag:85:66') === 1
          content: "이 발음, 왠지 낯익은 기분인데?"
        - divider: true
          content: "쇼핑몰"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 찾았다 찾았어! 혹시 저 사람 아냐?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우와, 뭐야. 여래라는 느낌이 전혀 없잖아! 완전 귀여워! 인형 같아!」"
        - if: era.get('cflag:85:66') === 0
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「가서 말이라도 좀 걸어볼까…… 아니, 역시 됐어.」"
        - if: era.get('cflag:85:66') === 1
          lines:
            - acc: 1
              content: "「사실…… 나 저 사람 알고 있어.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「에? 그럼 잘됐네!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그럼 가서 말이라도 좀…… 아니, 역시 됐어.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「귀여움이 아주 폭발하시네! 그냥 여기서 지켜보는 것만으로 만족할래.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우와~ 저 아이 정말 귀엽다.」"
        - if: era.get('cflag:85:66') === 1
          lines:
            - acc: 1
              content: "「귀엽긴 하지, 확실히.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그냥 보고만 있어도 마음이 정화되는 기분이야~」"
        - if: era.get('cflag:85:66') === 0
          content: "파머와 %YOU%은(는) 멀리 떨어져 지켜보는 것만으로도 그 귀여움에 마음이 치유됨을 느꼈다."
        - if: era.get('cflag:85:66') === 1
          content: "파머와 %YOU%은(는) 멀리 떨어져 지켜보았으나, %YOU%의 마음속에는 뭐라 설명하기 힘든 미묘한 기분이 소용돌이쳤다."
    - acc: 2
      content: "「파티 신의 시조!」（전 능력치+8）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「파티의 신님이라…… 맞다!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아주 옛날부터 이른바 파티 피플이라는 분들이 계셨지!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그중에서도 시조라고 불릴만한 분은 바로……」"
        - divider: true
          content: "무도회장"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「하이, 파머~」"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「와서 같이 춤추자, 흥, 흥~」"
        - "%MARU%, 쇼와 시대의 복고풍과 버블 시대 문화를 사랑하는 %UMA%."
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「흐흥, 나한테서 어떤 걸 get 하고 싶니~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「마루젠 언니, 원조 갸루어를 가르쳐주세요.」"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「원조 갸루어? 어디 보자……」"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「원 렝스, 바디콘, 쇼난 러버!」"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「go~ go~ 슈~ 슈~ 번쩍번쩍!」"
        - color: %COLOR_4%
          content:
            - fontWeight: bold
              content: %MARU%
            - "「게임센터에서 쏴주기, 가디건은 어깨에 걸치기!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「와아, 뜻은 잘 모르겠지만 기세만큼은 엄청나시네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이게 바로 원조 갸루어……!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너, 나도 텐션이 마구 올라가!」"
        - "버블 세대의 신님인 마루젠스키를 뵙고 나자, 파머의 기분도 한껏 들떴다."
        - "비록 %YOU%은(는) 무슨 소린지 하나도 알아듣지 못했지만 말이다……"
    - acc: 3
      content: "「당구의 신?」（스킬 포인트+35）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「당구의 신…… 맞아, 쿨하고 멋진 스타일도 있었지!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「당구장이 있는 곳을 여기저기 찾아보자.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「출발~」"
        - divider: true
          content: "당구장"
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - "「호오~ 나한테 당구를 배우고 싶다는 녀석이 너냐? 파머.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네, 넵! 이, 이건 또 다른 의미의 갸루 스타일이네요……」"
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - "「당구라는 건 말이지, 간단히 말해 기회를 엿보는 거다.」"
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - "「상대가 마음대로 치게 놔두다가, 마지막에 내가 공을 넣는 거지. 하지만……」"
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - "「난 그런 건 딱 질색이야.」"
        - color: %COLOR_70%
          content:
            - fontWeight: bold
              content: %SIRIUS%
            - "「너도 상대에게 기회를 주지 않고 끊임없이 공격하는 스타일을 좋아하겠지?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「에? 그럼 어떻게 해요? 그냥 알려주시는 대로 하면 되나요?」"
        - "오만할 정도로 실력이 뛰어난 당구 고수, 시리우스 심볼리."
        - "파머는 이 당구의 신에게서 다양한 기술을 배웠다…… 정말일까?"

# 日経新春杯
nikk_hai:
  title: "기분 전환!"
  lines:
    - "새로운 해, 새로운 마음가짐!"
    - "작년 상태가 어떠했든, 올해가 어떻게 흘러가든, 일단 자신만의 리듬을 찾는 게 우선이다!"
    - "그렇게 다짐한 메지로 파머는 망설임 없이 코스 위에 섰다."
    - "관객석 가장 앞줄에 붙어 서서 기운이 넘치는 %SEX%를 지켜보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안녕! 오늘 레이스도 신나게 가보자고!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그냥 평범한 레이스라면 지루하잖아? 그러니까 %SELF_CALL%가 오늘 레이스를 아주 커다란 파티로 만들어버리겠어!」"
    - "관객들은 %SEX%의 발언에 잠시 멍해졌지만, 이내 환호로 답했다."
    - "처음에는 메지로 가문의 낙오자 취급을 받았지만, 지금은 당당하게 이름을 알린 %UMA%다."
    - "열광하는 팬들 사이에 숨어, 무대 위 열정적인 메지로 파머에게 조용히 응원을 보냈다."
    - acc: 1
      content: "（……그런데 파머의 승부복, 이 각도에서 보니까 배가 다 보이네.）"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「모두 지켜봐 줘! 나의 전력 도주를!」"
    - "무대 위 메지로 파머는 순수한 모습 그대로 즐겁게 팬들과 소통하고 있었다."
    - "역시 분위기를 읽는 데 탁월한 파머다웠다."
    - "……하반신의 분위기까지 읽히지 않기만을 바랄 뿐이다."
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……트레이너! 너도 똑똑히 보고 있어야 해!」"
        - "웬일인지 메지로 파머가 관객들 사이에 숨어 있는 %YOU%을(를) 향해 소리쳤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘의 %SELF_CALL%는 상태 최고거든!」"
        - "말 자체는 평범했지만, 왠지 그 눈빛에는 다른 의미가 담긴 듯했다."
        - acc: 1
          content: "（분명 들켰겠지……）"
        - "%YOU%의 시선을 알아챈 걸까. 다른 사람들이 신경 쓰지 않는 틈에 %YOU%에게 작게 손을 흔들었다."
        - "……다른 뜻이 있는 건 아니겠지."

# 日経新春杯勝利
nikk_hai_win:
  title: "새로운 매일!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「완전 상쾌해! 역시 분위기 타서 달리는 게 내 스타일이라니까!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「분위기를 살필 필요도 없고, 다른 건 신경 쓸 것 없이 그저 달리기만 하면 돼!」"
    - "주변의 시선은 아랑곳하지 않고, 자신만의 주법으로 레이스를 마쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어때 트레이너? 오늘 나 엄청 멋있었지!」"
    - acc: 1
      content: "「말할 것도 없지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시? 헤헤!」"
    - "파머는 조금 쑥스러운 듯 왠지 붉어진 뺨을 긁적이며, 약간 들뜬 기분으로 대기실 안을 빙글빙글 돌았다."
    - if: era.get('love:64') >= 50
      lines:
        - "땀방울이 연노란색 속옷 언저리를 타고 흐르며 매끄러운 곡선을 그려냈다."
        - "파머의 몸매는 본래 훌륭했지만, 특히 %SEX%의 노출도가 높다고 할 수 있는 승부복 덕분에 더욱 돋보였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「왜 그래 트레이너? 표정이 이상한데?」"
        - "%YOU%의 눈앞에서 손을 흔들어 보였지만, 시선이 어디를 향해 있는지는 눈치채지 못한 듯했다."
        - acc: 1
          content: 「……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기, 트레이너?」"
        - "귓가에 파머의 목소리가 다시 울려 퍼지자, 그제야 의식이 눈앞의 땀에 젖은 배에서 몸으로 돌아왔다."
        - "그러나 고개를 들어 마주한 시선 끝에는 평온한 파머의 얼굴 대신, 약간 장난기 어린 표정을 지은 파머가 있었다."
        - "얼굴과 얼굴이 맞닿을 듯 가까워지고, 숨결이 얼굴 위를 살포시 스쳐 지나갔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그렇게 좋으면…… 좀 더 봐도 된다구?」"

# 天皇賞（春）
tenn_spr:
  title: "메지로만이 아니야!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「텐노상이구나……」"
    - "메지로 가문에 텐노상(봄)은 단순한 G1 레이스 이상의 의미가 있다는 것을 두 사람 모두 잘 알고 있었다."
    - "하지만 지금의 파머에게는 그런 무거운 의미는 필요 없었다."
    - "두 사람은 지하 대기 통로의 벽에 기대어 어깨를 나란히 맞댔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아 트레이너, 이 코스에서 정말 끝까지 도주할 수 있을까?」"
    - "파머의 말에는 의구심이 섞여 있었지만, 얼굴에는 불안함이 조금도 보이지 않았다."
    - "자신만만한 표정으로 %YOU%을(를) 바라보면서 귀를 쫑긋거리고 대답을 기다렸다."
    - acc: 1
      content: "「당연하지, 난 널 믿어!」"
    - acc: 2
      content: "「너도 할 수 있다는 거 잘 알고 있잖아, 그렇지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아! 그럼 %SELF_CALL%가 단숨에 끝까지 달려 나가 줄게!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「메지로답지 않은, 나만의 주법으로! 모두를 열광시켜 주겠어!」"
    - "손을 높이 치켜들고 %YOU%에게 외쳤다."
    - "몸을 돌려 지하 통로를 빠져나와 경기장으로 향했다."

# 天皇賞（春）勝利
tenn_spr_win:
  title: "끝까지 도주해서 승리!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우효~! 완전 상쾌해! 엄청 즐거워!」"
    - "파머는 주위의 시선과 소리를 신경 쓰지 않고 선수 통로에서 기다리는 %YOU%에게 곧장 달려왔다."
    - "축하받고 싶은 듯한 얼굴이 점점 다른 표정으로 바뀌었다."
    - "이 느낌은 본 적 있다."
    - acc: 1
      content: "「파머!?」"
    - "속도를 줄이지 않고 뚜렷한 목표를 향해 %YOU%에게 뛰어들었다."
    - "겨우 버티고 선 뒤에야 옆에서 땀에 젖은 파머를 볼 여유가 생겼다."
    - "달콤한 땀 냄새가 코에 들어와 이미 뛰는 심장을 더 자극했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너! 텐노상(봄)에서 이겼어!」"
    - acc: 1
      content: "「잠깐, 파머!」"
    - "%YOU%이(가) 크게 불렀지만 파머는 들리지 않는 듯 조용히 안겨 있었다."
    - "꽉 감은 팔에 %YOU%의 숨이 막히려 할 즈음 뒤늦게 힘을 풀었다."
    - "그 때문에 풀긴 했지만 놀란 표정은 아니었다."
    - "굳이 말하자면 일부러였다."
    - "……이겼으니 조금 더 안게 해 줘도 되겠지."
    - if: era.get('love:64') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기, 트레이너!」"
        - "파머의 목소리에는 방금 일을 신경 쓰는 기색이 없었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「나랑 메지로 집에…… 가 볼래?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「지금이라면…… 메지로 파머의 파트너로서 말이야.」"
        - acc: 1
          key: select
          content: "「지금이라면……?」"
        - acc: 2
          content: "「그럼…… 기다릴게!」 (호감 +10)"
        - "아까 %YOU%을(를) 꼭 안던 두 손은 지금 조금 부끄러운 듯 등 뒤로 감추고 있었다."
        - "파머는 얼굴을 붉히고 허리를 숙여 다가왔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 먼저 위너스 스테이지에 갈게…… %YOURNAME%은(는) 여기서 기다려!」"
        - "눈은 마주치지 않았다. 하지만 살짝 붉은 얼굴에 맑은 미소가 보였다."

# 天皇賞（春）敗北
tenn_spr_lose:
  title: "주인공이 아니어도 상관없어!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 져버렸다!」"
    - "파머는 온몸에 땀을 흘리며 가벼운 발걸음으로 대기실에 들어왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음—— 아, 역시 이대로는 좀 힘들었나!」"
    - "기지개를 크게 켜고는 그대로 의자에 털썩 앉았다."
    - "승부복 겉옷을 벗어 얼굴 쪽으로 살살 부채질을 했다."
    - acc: 1
      content: "물을 건넨다"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「고마워! 마침 딱 필요했어!」"
        - "파머는 자연스럽게 컵을 받아 단숨에 들이켰고, 입가에 물방울이 맺혀 흘러내렸다."
        - "긴장했던 몸이 한꺼번에 풀리며 마치 수증기가 피어오르는 듯한 기분이 들었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오랜만에 이렇게 즐겁게 달렸네…… 근데 너무 덥다」"
        - "양손으로 의자를 짚고 상체를 뒤로 젖히며 위로 숨을 내뱉었다."
        - "머리카락을 타고 흐른 땀방울이 연노란색 속옷 위로 떨어지며 옅은 김을 내뿜었다."
        - "그런 파머를 찬찬히 지켜보던 머릿속에 가장 먼저 떠오른 생각."
        - "오늘은 정말이지 여러 의미로 뜨거운 날이었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그래도 말이야, 부담 같은 건 없어」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너가 날 믿어줬고, 질 때도 나다운 방식으로 졌으니까」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「분하긴 하지만 속이 뒤틀리거나 하진 않아…… 이것도 다 트레이너 덕분이야!」"
        - "파머의 미소는 홀가분해 보였고, %SEX%가 한 말 그대로였다."
    - if: era.get('love:64') >= 90
      acc: 2
      content: "파머 곁에 앉는다"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오랜만에 이렇게 즐겁게 달렸네…… 근데 너무 덥다」"
        - "양손으로 의자를 짚고 상체를 뒤로 젖히며 위로 숨을 내뱉었다."
        - "머리카락을 타고 흐른 땀방울이 연노란색 속옷 위로 떨어지며 옅은 김을 내뿜었다."
        - "오늘은 정말이지 여러 의미로 뜨거운 날이었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그래도 말이야, 부담 같은 건 없어」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너가 날 믿어줬고, 질 때도 나다운 방식으로 졌으니까」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「분하긴 하지만 속이 뒤틀리거나 하진 않아…… 이것도 다 트레이너 덕분이야!」"
        - "파머의 미소는 홀가분했고 말 한마디 한마디에 진심이 담겨 있었다."
        - "청아한 웃음소리가 잦아들고 묘한 침묵이 흐르자, 파머도 등 뒤로 짚었던 손을 슬며시 거두었다."
        - "벤치를 따라 조금씩 옆으로 옮겨오더니 %YOU%의 허벅지에 몸을 밀착시켰다."
        - acc: 1
          content: "「파머?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「목이 좀 타네, 입안이 바짝 말라」"
        - "손가락이 다리를 타고 올라와 부드럽게 두어 번 주물렀다."
        - "열기 때문인지 수줍음 때문인지 빨갛게 달아오른 얼굴이 서서히 다가오고, 마른 입술이 천천히 열렸다."
        - acc: 1
          content: "「좋아」"
        - "파머의 귀가 살짝 씰룩이더니 두 눈을 지긋이 감았다."
        - "부드럽게 입술을 맞대고, 혀가 치열을 넘어 파고들어 따스한 타액을 갈구했다."
        - "부드러우면서도 강압적으로, 문답무용으로 침범해 들어오는 것이 마치 원래 제 것이었던 양 자연스러웠다."
        - "영리한 혀는 %YOU%의 입안에 고인 수분을 앗아갔고, 떨어질 때 투명한 실선이 길게 이어졌다."
        - "상대의 혀에서 떨어진 뒤 입술 주변에 남은 수분을 핥아 정리하며 파머는 옅게 숨을 몰아쉬었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「잘 먹었습니다……」"
        - "허벅지 위에 놓았던 손을 떼어 %YOU%의 뺨을 한 번 쓸어내렸다."
        - "자리에서 일어난 뒤 양손을 등 뒤로 돌려, 지금도 멈추지 않는 두근거림을 감추려 애썼다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「나중에 나랑 같이 메지로 가문에 가줄 수 있을까……?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어쩌면, 남은 부분도 가능할지도 모르는데?」"

# シニア級宝塚記念
takz_kin:
  title: "일단 믿어보자!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자신의 주법을 믿고, 자신의 능력을 믿는다…… 잘 알고 있어!」"
    - "파머는 게이트 앞에 서서 꽉 쥔 주먹을 가슴에 올렸다."
    - "감았던 눈을 뜨고 눈앞의 코스를 바라보았다."
    - acc: 1
      content: "「파머! 힘내!」"
    - "관중석에서 %YOU%의 목소리가 파머의 귀에 닿았다."
    - "파머의 귀가 작게 실룩이더니 관중석 쪽으로 고개를 돌렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너…… 응, 잘 들렸어!」"
    - "자신의 목소리가 닿지 않을지도 모른다는 생각에, 그저 주먹 쥔 손을 높이 들어 올렸다."
    - "저편에 있는 파트너를 향해 승리의 사인을 보냈다."

# 宝塚記念勝利
takz_kin_win:
  title: "조금 슬프긴 해도 상관없어!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예이! 내가 이겼어!」"
    - "승리의 순간 활기찬 목소리가 울려 퍼졌고, 그 목소리와 함께 파머가 달려왔다."
    - "관중석에서 자신에게 환호를 보내는 관중들을 향해 힘껏 손을 흔들다 힘이 빠진 후에야 멈췄다."
    - "주변 소동이 잦아든 뒤에야 파머는 대기실로 돌아왔다."
    - "조금 전의 활기찬 모습과는 대조적으로, 지금은 그저 묵묵히 문을 닫을 뿐이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기 있지, 트레이너」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나 좀 쓰다듬어 줄래?」"
    - "파머의 표정에는 승리의 여운이 남아 있었지만, 눈동자에는 기쁨 외의 감정이 조금 섞여 있었다."
    - acc: 1
      content: "「무슨 일 있어?」"
    - acc: 2
      content: "파머의 머리를 쓰다듬는다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아…… 고마워, 트레이너」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「방금 관중석에…… 메지로 가문의 사람들이 아무도 없었거든」"
    - "%YOU%의 품 안에서 마음이 편치 않아 보이는 파머의 모습에, 나도 모르게 손을 올려 부드럽게 쓰다듬어 주었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그래도, 트레이너가 있어 줘서 안심할 수 있었어」"
    - "꼬리는 주체할 수 없이 좌우로 흔들렸고, 발끝도 불안한 듯 지면을 톡톡 두드렸다."
    - acc: 1
      content: "「모두 분명 네 레이스를 보고 있을 거야」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나도 그렇게 생각은 해, 그냥 조금 서운했을 뿐이야」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「알고는 있어, 하지만……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「됐어! 이런저런 생각 하는 건 너무 피곤해!」"
    - "큰 소리로 자신의 잡념을 떨쳐내고 몸을 바로 세웠다."
    - acc: 1
      content: "「이미 충분히 잘 이해하고 있네」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응, 이제 아무래도 좋아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 중요한 건 내가 해냈다는 사실이니까!」"

summer_start_2:
  title: "여름 합숙(시니어급) 시작"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「야호~!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여름! 바다! 파티 시즌이 왔다구~!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러고 보니 작년에도 이렇게 한바탕 소란을 피웠었지~」"
    - "파머는 대형버스에서 내리자마자 마음속 흥분을 참지 못하고 소리쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "다이타쿠 헬리오스와 함께 다가올 텐노상(가을)을 위해 이번 합숙에서 충분한 준비를 하기로 했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그건 그렇고, 텐노상(가을)이라~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맥퀸도 분명 참가할 테고, 또……」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「맞아! 하지만 올해는 훨씬, 훨씬 더~ 뜨거워지겠지!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「텐노상(가을)을 위해서 다들 의욕 만땅이거든!」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「올해는 쟁쟁한 %UMA%들이 한자리에 모일 것 같군요」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「아, 이쿠노잖아! 안녕~ 의욕 있어?~ 여전히 안경 쓰고 있네~」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「네, 저는 잠잘 때를 제외하고는 거의 온종일 안경을 착용합니다」"
    - "이쿠노 딕터스가 불쑥 대화에 끼어들었지만 전혀 어색하지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이쿠노, 올해 텐노상(가을)에 대해…… 뭔가 아는 거 있어?」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「네, 몇 가지 정보를 알고 있습니다」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「우선 네이처가 참가한다고 했고, 저도 참가할 예정입니다」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「아~ 네이처랑 이쿠노!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「완전 우리끼리 하는 핼러윈 파티 같잖아!」"
    - "다이타쿠 헬리오스의 농담 섞인 소란은 잠시 무시하고 다시 레이스 이야기로 돌아왔다."
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「당연히 맥퀸 양도 참가할 예정이며, 그리고……」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「그 토카이 테이오도 출주할 예정입니다」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「토카이 테이오…… 맥퀸의 숙적이구나」"
    - "메지로 맥퀸, 토카이 테이오…… 이 두 스타 플레이어가 등장하는 것만으로도 관심은 대부분 두 사람에게 쏠릴 것이다."
    - "스타들이 운집한 텐노상(가을)에서 파머가 관심을 받지 못한다면, 그것이 %SEX%의 실력 발휘에 영향을 줄지도 몰랐다……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「테이오도 참가하고, 맥퀸도 참가해! 이거 완전 최고잖아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「누가 오든 전부 한꺼번에 덤비라구!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나! 아니, 우리라면 겁나지 않아! 그렇지, 나의 태양~」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「웨이~ 전혀 겁나지 않아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어떤 상대가 오든…… 가장 눈부시게 빛날 건 당연히~」"
    - "%CHARA%&%HELIOS% 「우리의 우정! 오예——!~」"
    - "큰 압박감이 느껴질 법한 레이스를 앞두고도 파머의 얼굴에는 긴장감이 전혀 서려 있지 않았다."
    - "과거의 먹구름은 더 이상 %SEX%를 감싸지 않았고, 지금 이 순간……"
    - "오직 화끈하게 달아오를 여름만이 기다리고 있을 뿐이었다!"

# 恋慕＞74
summer_middle_2:
  title: "여름의 작은 사고"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%! 선크림 좀 가져다줄래?」"
    - "「그럴 수는 있는데 왜 헬리오스 %THEY%에게 부탁 안 해?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헬리오스 %THEY%는 벌써 아래로 내려갔고, 지금 부르기도 미안하잖아.」"
    - color: %COLOR%
      content: "파머는 매트에 엎드렸고 꼬리는 조금 들뜬 듯 좌우로 흔들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 %CALLNAME%도 처음 만지는 거 아니잖아? 지난번 자유 레이스 때도 땀 닦아 준 건 %CALLNAME%였어.」"
    - "「그때는 수영복 차림이 아니었잖아. 같지 않아.」"
    - color: %COLOR%
      content: "%CALLNAME%의 목소리는 조금 짜증스러웠지만 파머에게는 평소 같은 핀잔으로만 들렸다."
    - color: %COLOR%
      content: "파트너가 어떤 사람인지는 파머가 가장 잘 안다. 이상한 생각은 없을 것이다."
    - color: %COLOR%
      content: "적어도 자신에게는…… 아마도."
    - acc: 1
      content: "「응, 등은 거의 다 됐어, 파머.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오케이~」"
    - color: %COLOR%
      content: "매트에서 몸을 뒤집어 일어나자 시선을 피하는 %CALLNAME%의 얼굴이 보였다."
    - color: %COLOR%
      content: "혹시…… 부끄러워하나? 드문 일이네."
    - color: %COLOR%
      content: "파머는 조금 짓궂게 웃다가 곧 이상한 생각을 마음속으로 밀어 넣었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앞은 내가 할게, %CALLNAME%…… %CALLNAME%?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(이거…… 설마?)"
    - color: %COLOR%
      content: "아무 말 없이 선크림을 내려놓고 등을 돌리는 %CALLNAME%을(를) 보자 파머의 얼굴에 옅은 홍조가 떠올랐다."
    - color: %COLOR%
      content: "여름옷은 잘 가려 주지 못한다. 게다가 지금 %CALLNAME%은(는) 셔츠 한 장뿐이다."
    - color: %COLOR%
      content: "새빨간 귀는 조금만 주의하면 보였다."
    - color: %COLOR%
      content: "부끄러운 거지? 분명 부끄러운 거지?"
    - color: %COLOR%
      content: "조금 놀리고 싶어졌다……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으흥?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기, 트레이너…… 앞도 부탁할까?」"
    - color: %COLOR%
      content: "입 밖에 내고 나서야 하면 안 되는 말을 했다는 걸 깨달았다."
    - color: %COLOR%
      content: "앞쪽도 %CALLNAME%이(가) 마음대로 만지게 하겠다는 뜻이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(어라, 조금 지나쳤나?)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(%CALLNAME%…… 받아들이려나?)"
    - color: %COLOR%
      content: "심장은 계속 빨라졌다. 레이스 때만큼이나……"
    - color: %COLOR%
      content: "처음엔 짓궂던 미소가 새빨갛고 어색한 얼굴로 바뀌었다. %CALLNAME%이(가) 부끄러워하며 거절하기를 빌 수밖에 없었다."
    - color: %COLOR%
      content: "하지만 대개 소원과 반대되는 일이 일어난다."
    - acc: 1
      content: "「아, 알았어……」"
    - color: %COLOR%
      content: "%CALLNAME%의 목소리는 조금 떨렸고 선크림은 이미 준비되어 있었다."
    - color: %COLOR%
      content: "돌아보자 눈이 마주쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 역시 내가 할게! 생각해 보니 나 간지럼을 잘 타서……」"
    - color: %COLOR%
      content: "파머의 눈에 작은 소용돌이가 돌았다. 당황해 %CALLNAME%의 선크림을 빼앗으려 했다."
    - color: %COLOR%
      content: "바닷바람이 강했던 걸까, 파머의 움직임이 컸던 걸까."
    - color: %COLOR%
      content: "파라솔 아래쪽이 조금 느슨해지며 두 사람에게 쓰러졌다."
    - "「파머!」"
    - color: %COLOR%
      content: "%CALLNAME%이(가) 파머를 덮고 팔꿈치로 겨우 공간을 만들었다."
    - color: %COLOR%
      content: "아래에 누운 파머는 당황해 두 손을 가슴 앞에 모으고 똑같이 붉어진 %CALLNAME%의 얼굴을 봤다."
    - color: %COLOR%
      content: "파라솔이 커서 넓은 공간이 남았다. 사람에게 부딪치지는 않았다."
    - "「미안! 바로 일어날게……」"
    - color: %COLOR%
      content: "%CALLNAME%이(가) 일어나려 하자 파머는 재빨리 손을 잡았다."
    - color: %COLOR%
      content: "선크림 통이 옆으로 떨어졌다. 파머는 그것을 집어 %CALLNAME%의 손에 부었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%…… 앞도 부탁해도 돼?」"
    - color: %COLOR%
      content: "얼굴을 붉히고 자신도 상상 못 한 말을 꺼냈다."
    - color: %COLOR%
      content: "지금 둘은 파라솔 아래 숨겨져 있다. 밖의 사람들이 신경 쓰지 않으면 아무것도 보이지 않는다."
    - color: %COLOR%
      content: "%CALLNAME%의 손을 잡아 자기 몸으로 이끌었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「책임져…… 두근거리게 만든 책임……」"
    - color: %COLOR%
      content: "파머는 혼잣말하듯 말했다. 스스로를 납득시키는 것 같았다."
    - color: %COLOR%
      content: "%CALLNAME%은(는) 못 들은 듯 조심스레 손을 뻗어 파머의 몸을 살짝 쓰다듬었다."
    - color: %COLOR%
      content: "차가운 선크림과 손바닥의 열기가 섞여 파머의 매끄러운 배를 오갔다."
    - color: %COLOR%
      content: "뺨의 붉은 기운이 목까지 번졌다. 늘 도주를 뒷받침하던 다리에 힘이 들어가지 않았다."
    - color: %COLOR%
      content: "도망치고 싶다. 하지만……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(트레이너라면 도망 안 가도 되겠지.)"
    - "「파머, 다 됐어.」"
    - color: %COLOR%
      content: "손을 거두고 파머의 눈앞에서 물러났다."
    - color: %COLOR%
      content: "돌아서서 파라솔을 잡고 조금씩 일으켰다."
    - color: %COLOR%
      content: "%CALLNAME%의 등을 보며 파머는 말이 없어졌다."
    - color: %COLOR%
      content: "지금이라면 아무도 둘을 볼 수 없다."
    - color: %COLOR%
      content: "지금이라면 뭘 해도 들키지 않을 것이다."
    - color: %COLOR%
      content: "지금이라면……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기, %CALLNAME%.」"
    - color: %COLOR%
      content: "%CALLNAME%은(는) 파라솔을 내려놓고 파머를 돌아봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여기는…… 아직이야.」"
    - color: %COLOR%
      content: "자기 가슴을 가리키며 얼굴을 붉혔다."
    - color: %COLOR%
      content: "%YOURSEX%가 어떻게 할지는 모른다."
    - color: %COLOR%
      content: "어쩌면……"
    - acc: 1
      content: "「파머, 여긴……」"
    - color: %COLOR%
      content: "선크림이 묻은 손이 떨렸다."
    - color: %COLOR%
      content: "붙잡힌 채 파머 앞으로 끌려 넘어졌다."
    # CFLAGNAME:0 = 性別
    - if: era.get('cflag:64:0') !== 1 && era.get('cflag:0:0') === 1
      color: %COLOR%
      content: "남자는 여성의 가슴을 마다하지 않는다지만……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%이(가) 싫다면……」"
    - color: %COLOR%
      content: "허공에서 떨리던 손바닥은 파머가 스스로 가슴을 맡기고서야 멈췄다."
    - color: %COLOR%
      content: "파머는 눈을 꼭 감았다. 긴장한 몸이 작게 떨렸다."
    - color: %COLOR%
      content: "따뜻한 액체가 가슴을 타고 수영복 안으로 흘렀다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content: "감았던 눈을 천천히 뜨고 조금 당황한 %CALLNAME%의 얼굴을 봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아?」"
    - color: %COLOR%
      content: "파머는 가느다란 손을 뻗어 %CALLNAME%의 얼굴을 살짝 받치고 자기 얼굴로 끌어당겼다."
    - color: %COLOR%
      content: "입술이 닿아 서로의 열기를 나눴다."
    - color: %COLOR%
      content: "혀가 자연스럽게 이 사이로 들어가 얽혔다."
    - color: %COLOR%
      content: "숨이 모자랄 때까지 이어지다 아쉬운 듯 혀끝 사이에 침이 실처럼 늘어졌다."
    - acc: 1
      key: sex
      # 性欲+5%
      content: "「하지만 지금은 아직 안 돼.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어……」"
        - color: %COLOR%
          content: "달아오른 머리에 찬물을 끼얹은 듯 생각이 정상으로 돌아왔다."
        - color: %COLOR%
          content: "파머는 상체를 일으켜 황급히 파라솔 밖을 봤다."
        - color: %COLOR%
          content: "……아무에게도 들키지 않았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내가 계속 안 돌아가면 다들 의심할 거야.」"
        - color: %COLOR%
          content: "파머는 더는 억제 못 하는 꼬리를 살짝 잡고 아무 일도 없었던 듯 그늘에서 일어났다."
        - color: %COLOR%
          content: "깊이 숨을 들이쉬고 %CALLNAME%에게 손을 내밀었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「돌아가서…… %CALLNAME%랑 같이……」"
    - acc: 2
      content: "「좋아해, 파머.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「나도, %YOURNAME%.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%YOURNAME%, 좋아해……」"
        - color: %COLOR%
          content: "%CALLNAME%을(를) 잡은 두 손을 놓고 손가락으로 수영복 끈을 살짝 풀었다."
        - if: era.get('cflag:64:0') !== 1
          color: %COLOR%
          content: "작은 벚꽃빛 끝이 이미 솟아 기다리고 있었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「부탁해……」"
      # 馬跳び

summer_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아…… 이거 곤란하겠는데.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「다들 우리 없는 거 알아챘겠지. 큰일이네.」"
  - color: %COLOR%
    content: "똑같이 땀투성이가 된 %CALLNAME%의 몸을 살짝 밀고 흔적을 닦았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저기, 돌아가서도 계속할 수 있지?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아, 아니, 그런 뜻이 아니라! 그냥……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%랑 있으면 즐겁다든가.」"
  - color: %COLOR%
    content: "파머는 얼굴을 붉히고 조금 보복하듯 %CALLNAME%의 몸을 다시 꼬집었다."

# 恋慕＞74、8月第4週から
walk:
  title: "해변 산책"
  lines:
    - "여름 합숙의 끝자락, 남은 훈련 과제는 거의 없었고 꽤 많은 자유 시간이 남았다."
    - "메지로 파머는 홀로 백사장의 파도를 바라보며, 이따금 등 뒤의 %YOU%을(를) 훔쳐보았다."
    - "오후 시간은 금방 흘러갔고, 백사장에는 더 이상 훈련 중인 다른 %UMA%들이 보이지 않았다."
    - acc: 1
      content: "「자, 우리도 슬슬 돌아가야지……」"
    - "막 떠나려던 찰나, 메지로 파머가 살며시 %YOU%의 손을 붙잡았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기, 트레이너. 잠시만……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……잠깐이면 되니까, 나랑 여기서 좀 걷지 않을래?」"
    - "메지로 파머의 시선은 딴 곳을 향해 있었지만, 이따금 %YOU% 쪽을 흘긋거렸다."
    - acc: 1
      content: "「좋아」"
    - acc: 2
      content: "「하지만 시간이 너무 늦었는데……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응후후…… 우리 이렇게 산책하는 거 정말 오랜만인 것 같네」"
    - "메지로 파머는 두 손을 등 뒤로 모은 채, 불안한 듯 발끝으로 바닥을 톡톡 두드렸다."
    - "시선은 자신의 수영복과 %YOU% 사이를 오갈 뿐, 정작 얼굴은 보지 못했다."
    - "훈련 도구를 챙기던 %YOU%은(는) 그 불안한 몸짓을 눈치채지 못한 채 메지로 파머의 곁으로 다가갔다."
    - "해변의 석양이 두 사람의 옆얼굴을 비추었고, 조용한 산책이 이어졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「평소 여기 있을 때는 항상 다 같이 있었잖아」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다 함께 훈련하고, 같이 놀고 그랬으니까……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「물론 즐거웠지만, 항상 무언가 부족하다는 느낌이 들었거든」"
    - "메지로 파머는 천천히 %YOU%의 곁으로 다가와 어깨를 나란히 했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너랑 단둘이 있을 때 비로소……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……부족했던 게 무엇인지 알 것 같아」"
    - acc: 1
      content: "「그게 뭔데?」"
    - "%YOU%의 목소리에 메지로 파머는 자신도 모르게 웃음을 터뜨렸다."
    - "그리고 곁에서 방심하고 있는 파트너의 옆구리를 아프지 않게 콕 찔렀다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「바로 트레이너야」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「훈련도 아니고, 다 같이 있는 것도 아닌…… 오직 우리 둘뿐인 시간」"
    - "석양의 금빛 여운이 메지로 파머의 얼굴을 비추며 붉게 물든 뺨을 가려주었다."
    - "해변에 멈춰 서서, 파도가 밀려와 발목을 적시는 감촉을 가만히 느꼈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기 말이야, 트레이너」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앞으로도 계속 내 곁에 있어 줄 수 있어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예전에 네가 말했던 것처럼, 계속 나만 바라봐주면서 말이야」"
    - "메지로 파머는 밝은 태양을 등진 채 %YOU%을(를) 향해 찬란하게 미소 지었다."

summer_end_2:
  title: "여름 합숙(시니어급) 종료"
  lines:
    - "여름이 끝나갈 무렵 축제가 시작되었다."
    - "파티를 사랑하는 %UMA%들이 이 기회를 놓칠 리 없었다."
    - "%CHARA%&%HELIOS% 「오예~, 먼저 마을 축제, 그다음엔~」"
    - "활기찬 목소리가 울려 퍼짐과 동시에 하늘 위로 밝은 별들이 솟아올랐다."
    - "밤하늘에 커다란 불꽃이 피어올라 하늘을 올려다보는 모두의 얼굴을 환하게 비추었다."
    - "%CHARA%&%HELIOS% 「완전 신나는 불꽃놀이, 펑~팡!」"
    - divider: true
      content: "다음 날"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「조아——! 오늘도 같이 달리자, 파트너!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「오키도키, %65_CALL%!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「좋아하는 사람이랑 같이 달리면 피로도는 제로~!」"
    - "%CHARA%&%HELIOS% 「준비~ 땅!!」"
    - "메지로 파머와 다이타쿠 헬리오스는 다정하게 함께 달리며 남은 시간을 만끽했고, 매우 즐거워 보였다."
    - "합숙의 마지막 시간이 다 되어서야 두 사람은 멈춰 섰다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「아아~ 진짜로~? 합숙이 오늘로 끝이라니 실화냐고~?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「우리의 여름이 가버렸어어~~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「동감이야~ 나도 조금 더 달리고 싶었는데」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도 말이야, 나는 줄곧 헬리오스 너랑 같은 목표를 향해 달리고, 함께 여름을 보내고 싶었어」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「오오, 같이 석양을 향해 돌진한다거나 하는 그거지~!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그치만~ 이 뒤에 정식 레이스가 기다리고 있잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「거기선 훨씬 더 핫하게 달릴 수 있을 거야! 그치?」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「당근이지! 텐노상(가을)!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「둘이서 완전 하이텐션으로 가보자고~ 웨이 웨이~!」"
    - "두 사람이 한껏 들떠 환호하는 가운데, 곁에서 지켜보던 %YOU%은(는) 약간의 어색함을 느끼며 시선을 옮겼다. 그곳엔 마찬가지로 %SEX%들을 주시하고 있는 또 다른 인물이 있었다."
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - 「……」
    - acc: 1
      content: "「이쿠노 딕터스 양……?」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「……아무것도 아닙니다. 그저 아까 두 분이 달리면서 말하던 것이 조금 신경 쓰였을 뿐입니다」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「——피로도 제로 이론 말이죠」"
    - acc: 1
      content: "「……겨우 그거였어?!」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「네, 만약 그 이론이 사실이라면 문제없겠습니다만…… 실제론 불가능한 일입니다」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「몸이나 마음에 무리가 쌓이면, 언젠가는 반드시 달리는 데 영향을 주게 됩니다」"
    - acc: 1
      content: "「두 사람이 걱정되는 거야?」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「아니요, %SEX%는 점점 더 잘 달리고 있으니 걱정할 필요는 없다고 생각합니다」"
    - color: %COLOR_63%
      content:
        - fontWeight: bold
          content: %DICTUS%
        - "「그렇습니다…… 파머 양은 걱정할 필요가 없겠군요」"
    - "%DICTUS%의 확신에 찬 말을 듣고 %YOU%도 들뜬 파머와 다이타쿠 헬리오스에게 시선을 돌렸다."

# シニア級天皇賞（秋）
tenn_sho:
  title: "나만의 방식으로 달릴거야!"
  lines:
    - "텐노상(가을) 당일, 운 나쁘게도 날씨는 그리 좋지 못했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우와, 바닥이 온통 질퍽질퍽해」"
    - "레이스를 못 뛸 정도는 아니었지만, 사방이 진흙탕이라 꽤나 고전할 것 같은 상태였다."
    - "이대로 레이스를 마치면 온몸이 진흙 범벅이 될 것이 뻔했다."
    - "하지만 %SEX%라면 분명 달릴 것이다. %YOU%은(는) 그렇게 믿었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이러면 레이스 끝나고 나서 진짜 장난 아니겠는걸」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만! 상관없어!」"
    - "메지로 파머는 주먹을 꽉 쥐고 힘차게 휘둘렀다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헬리오스랑 약속한 레이스니까, 난 겁나지 않아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어떤 경기장이든 내 주법에는 아무런 영향도 주지 못하거든!」"

#依存持ちの天皇賞（秋）
tenn_sho_yandere:
  title: "나만의 주법과 나만의……"
  lines:
    - color: %COLOR%
      content: "텐노상(가을) 당일, %CHARA%는 그리 맑지 않은 하늘을 올려다보았다."
    - color: %COLOR%
      content: "신나게 달리고 싶은 마음도, 다이타쿠 헬리오스와 함께 경기장을 누비고 싶은 기분도 진심이었다."
    - color: %COLOR%
      content: "……하지만 무언가 빠져 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「텐션이 안 오르네……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너…… 없는 거야?」"
    - color: %COLOR%
      content: "경기장에 섰음에도 의욕이 생기지 않았다."
    - color: %COLOR%
      content: "곁에 있던 친구들은 가벼운 선전포고와 함께 게이트로 향하기 시작했다."
    - color: %COLOR%
      content: "아무렇지 않은 척하며 인사를 건네오는 이들에게 대답하고 게이트 안으로 들어섰고, 레이스가 시작되기를 기다렸다."
    - color: %COLOR%
      content: "시간은 마치 멈춘 듯 느리게 흘러갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……어라?」"
    - color: %COLOR%
      content: "시야 끝에 뒤늦게 온 %CALLNAME%이(가) %SEX%를 응원하는 모습이 보였다."
    - color: %COLOR%
      content: "경기장의 바람이 %CALLNAME%의 응원을 파머의 쫑긋 선 귀로 전했다. 가라앉았던 눈에 빛이 돌아왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（트레이너다）"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "（트레이너는 줄곧…… 나를 보고 있었구나）"
    - color: %COLOR%
      content: "주변 소음이 잦아들고, 모든 %UMA%가 게이트가 열리는 순간을 기다렸다."
    - color: %COLOR%
      content: "%CHARA% 역시 정면을 응시하며 다시 한번 주먹을 불끈 쥐었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(트레이너 %YOURSEX%…… 계속 있었구나!)"

# 天皇賞（秋）勝利
tenn_sho_win:
  title: "야호! 온몸이 진흙투성이여도 괜찮아!"
  lines:
    - "도주 성공! 전속력으로 골인!"
    - "지면을 박차며 튄 진흙물로 온몸이 엉망이었지만, 흙 묻은 얼굴엔 즐거운 미소가 가득했다."
    - "단지 이겼기 때문만은 아니었다."
    - "일단 몸에 묻은 이물질을 닦아내지 않으면 곤란해질 터였다."
    - "%YOU%이(가) 들고 있는 수건을 본 메지로 파머는 안심한 듯 흙투성이가 된 승부복 겉옷을 벗어 던졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 봤지? 진짜— 최고로 상쾌했어!」"
    - acc: 1
      content: "「그래, 정말 즐거워 보이더라」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤, 근데 좀 너무 신나버렸나 봐」"
    - "메지로 파머는 조금 쑥스러운 듯 뒤늦게 정신이 든 표정으로 뒷머리를 긁적였다."
    - "확실히 평소보다 과했던 탓에, 하얗던 수건이 금세 진흙으로 물들어갔다."
    - acc: 1
      content: "「괜찮아, 이런 뒷수습도 내 업무니까」"
    - acc: 2
      content: "「상관없어, 파머의 몸을 좀 더 만질 수 있어서 좋은걸」"
    - "그 말을 듣고 파머는 저도 모르게 떨었다. 옆구리를 가볍게 닦던 수건도 옆으로 미끄러졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아하하, 그럼 부탁해, 트레이너.」"
    - "입으로는 고맙다고 하며 한 손으로 옆의 수건을 잡아 태연한 척했다."
    - "들어 올린 두 손은 허공을 맴돌며 어디에 둬야 할지 몰랐다."
    - acc: 1
      content: "「저기, 파머?」"
    - "%YOU%이(가) 조심스레 묻자 파머의 딴생각이 돌아왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괜찮아, 괜찮아! 조금 간지러워서 놀랐을 뿐이야!」"
    - "최대한 얼굴을 다른 쪽으로 돌려 아래를 보지 않았다."
    - "수건은 얇았다. 보송한 감촉 너머로 힘 있는 손가락이 몸을 더듬는 게 느껴졌다."
    - "다리의 흙이 깨끗이 닦이고 수건은 위로 올라갔다."
    - "따뜻한 손끝이 드러난 옆구리에 밀착해 오갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(진흙 닦는 것뿐이야, 진흙 닦는 것뿐……)"
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(그래, 진흙 닦는 것뿐……)"
        - "수건이 살짝 떨리는 몸을 조금씩 훑어 배꼽으로 향했다."
        - "흙이 떨어지고 파머의 배가 드러났다."
        - "수건 너머로도 손가락에 작은 떨림이 전해졌다. 땀도 속옷에서 조금씩 배어 나왔다."
        - "점점 붉어지는 모습을 보니 참을 수 없었다."
        - "혀로 귀여운 배꼽 위를 곧게 한 줄 그었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「왓!」"
        - "파머가 놀라는 소리에 %YOU%은(는) 배에서 정신을 떼고 황급히 다 닦은 척했다."
        - acc: 1
          content: "「이제 됐어. 나중에 무대도 있으니 빨리 갈아입어.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어, 저기……」"
        - "파머의 말은 듣지 않고 바로 대기실을 나갔다."
        - "위험했다."
        - "계속했다면 파머를 밀어 넘어뜨렸을지도 모른다."

# 天皇賞（秋）敗北
tenn_sho_lose:
  title: "아이고, 좀 아쉽긴 하네"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「져버렸네…… 실력 발휘를 제대로 못한 것 같아」"
    - "대기실로 들어오는 메지로 파머는 여전히 밝은 미소를 띠고 있었지만, 어딘지 모르게 불만스러운 기색이 역력했다."
    - acc: 1
      content: "「오늘 컨디션이 좀 별로였나 봐」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까! 가속을 조절하지 못해서 멈춰야 할 때 못 멈추다가, 갑자기 속도가 떨어져 버렸다니까!」"
    - "자신의 이야기를 하고 있었지만, 마치 남의 일인 양 털어놓았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 그래도 이번 레이스 정말 즐거웠어. 비록 졌지만 말이야」"
    - "분홍빛 혀를 살짝 내밀며 한쪽 눈을 찡긋하는 모습이 꽤나 귀여웠다."
    - "그러더니 몸을 살짝 옆으로 기울여 진흙 묻은 몸을 몰래 슬쩍 문질렀다."
    - acc: 1
      content: "「하지만…… 뭐, 네가 즐거웠다면 됐어」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤, 이제 곧 라이브니까 옷 갈아입어야겠다」"
    - "메지로 파머는 귀여운 척하던 표정을 풀고 몸을 돌려 수건을 찾으려 했다."
    - "하지만 수건을 집어 들기 직전, 무슨 생각이 들었는지 뒤에 서 있는 %YOU%을(를) 돌아보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트~레~이~너~」"
    - acc: 1
      content: "「왜 그래?」"
    - "뒤에서 들려오는 목소리에 몸을 돌리자마자, 전속력으로 달려오는 메지로 파머가 보였다."
    - "진흙투성이인 몸으로 안겨 오는 바람에 %YOU%의 옷까지 엉망이 되었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤, 장난이야 장난!」"
    - "메지로 파머는 얄궂은 표정을 지으며 혀를 낼름 내밀었다."

# シニア級有馬記念
senior_arim_kin:
  title: "준비됐어? 도망치자!"
  lines:
    - "연말 마지막 G1 레이스."
    - "평소 같았으면 극심한 긴장감에 휩싸였을 순간이다."
    - "하지만 지하 통로 출구에 선 메지로 파머의 얼굴엔 불안한 기색이 전혀 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아리마 기념이구나……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「비현실적인 느낌…… 같은 건 안 드네」"
    - acc: 1
      content: "「그러게, 아리마 기념이네」"
    - "별다른 내용 없는 대화 속에서도 서로를 속속들이 알고 있다는 신뢰가 느껴졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아 트레이너, 네가 아직 기억하고 있을지는 모르겠지만」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예전에 말이야, 나만의 스타일을 보고 싶다고 했었지?」"
    - acc: 1
      content: "「지금도 변함없어」"
    - "%YOU%의 목소리를 듣자 메지로 파머의 입가에 자신만만한 미소가 번졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 잘 지켜봐 줘, 메지로 파머의 전력을……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「모든 것을 뒤로하고, 오직 앞만 바라보는」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나의 전력 폭도주를!」"
    - "등 뒤로 엄지손가락을 치켜세워 보인 뒤, 결연한 눈빛으로 경기장을 향해 발걸음을 내디뎠다. 그리고 저 멀리서 손을 흔드는 친구에게로 다가갔다."

# 通常勝負服
s_arim_kin_win_clothe1:
  title: "이게 바로 내 피가 끓어오르는 달리기야!"
  lines:
    - "해설 「추격할 수 있을까요! 추격할 수 있을까요!」"
    - "아리마 기념 후반전, 이미 레이스는 최고조에 달했다."
    - "해설 「지금 가속하지 않으면 따라잡을 수 없습니다! 메지로 파머!」"
    - "친구인 헬리오스는 이미 실속했고, 선두를 지키고 있는 것은 오직 자신뿐이었다."
    - "하지만 약속했다. 이 주법으로 승리를 쟁취하겠다고."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「다음은 너한테 맡길게!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우리는 평생의 친구야!」"
    - "마지막 가속과 함께 폐부의 공기를 쥐어짜 내며, 메지로 파머는 그 누구의 추월도 허용하지 않은 채 1착으로 골인했다."
    - "승리의 환호성이 메지로 파머의 귓가에 비현실적으로 들려왔다. 전광판에 자신의 이름이 뜬 것을 확인한 뒤에야 %SEX%는 크게 외치며 관중석의 %YOU%을(를) 향해 손을 흔들었다."
    - divider: true
      content: "대기실"
    - "레이스의 열기가 가시지 않은 몸으로 메지로 파머가 흥분한 채 대기실 문을 박차고 들어왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너! 약속했던 거, 내가 해냈어!」"
    - "자신의 말이 상대에게 들리는지조차 상관없을 만큼 고양된 기분이 멈추지 않았다."
    - "멈출 수 없다면 이 감정이 이끄는 대로 움직이기로 했다!"
    - "대기실로 불어닥친 바람을 타고, 그 안에 서 있던 %YOU%을(를) 향해 단숨에 뛰어들었다!"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「야호—!」"
    - acc: 1
      content: "「우와앗!」"
    - "%YOU%의 비명과 함께 두 사람은 하마터면 바닥으로 굴러떨어질 뻔했다."
    - "파머에게 넘어질 뻔한 걸 피하고 겨우 선 뒤 황급히 파머 뒤쪽으로 손을 흔들었다."
    - acc: 1
      content: "「저기 파머, 일단 좀 놓아줄래?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에? 왜?」"
    - "아쉬운 기색이 역력했지만 순순히 팔을 풀었다."
    - "메지로 파머의 의아한 시선이 %YOU%의 손가락 끝이 가리키는 문 쪽으로 향했다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「오오옷! %65_CALL%에게도 봄이 온 거야?!」"
    - "문밖에는 친구들이 이 다정한 광경을 지켜보고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아…… 아하하, 좀 실례했네!」"
    - "머리를 긁적이며 뒤로 물러나 서둘러 변명을 늘어놓았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무튼 그게…… 나중에 봐!」"
    - "인사를 남기고 대기실을 빠져나가는 메지로 파머를 보며, %YOU%은(는) 혼자 남아 어찌할 바를 모른 채 다른 생각에 잠겼다."
    - "방금 레이스를 마친 탓일까, 아니면 다른 이유가 있는 걸까."
    - "방금 전 안겼을 때 느껴진 메지로 파머의 심장 박동은…… 무서울 정도로 빨랐다."
    - "「일단 대기실부터 정리하자.」"
    - "혼잣말을 하며 넘어진 의자를 일으켜 세우고, 머릿속의 복잡한 생각들을 털어내려 애썼다."
    - "「파머니까, 뭐 평소 같은 일이겠지……」"
    - if: era.get('love:64') >= 75
      lines:
        - "어지럽혀진 대기실을 정리하던 중 바닥에서 다른 물건을 발견했다."
        - "승부복의 하얀 겉옷이 어째서인지 여기 떨어져 있었다."
        - "「아……」"
        - acc: 1
          content: "겉옷을 집어 든다"
        - acc: 2
          content: "겉옷을 잘 정리해둔다"
        - "망설임 없이 겉옷을 들어 올려 자세히 살펴보았다."
        - "이것은 방금 전까지 메지로 파머가 입고 있었던……"
        - "메지로 파머의 체취가 듬뿍 밴 겉옷이었다."
        - "왠지 모르게 겉옷을 든 손이 %YOU%의 얼굴로 조금씩 가까워졌다."
        - "메지로 파머의 향기가 콧속으로 밀려들어 오며 정신을 아득하게 만들었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기……」"
        - "문가에 선 메지로 파머가 겉옷과 밀착 중인 %YOU%을(를) 보며 곤혹스러운 표정을 지었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「냄새 맡는 거라면…… 난 사실 전혀 상관없거든?」"
        - "어색한 상황이었지만, %SEX%는 대기실 문을 닫고 잠금장치까지 걸었다."
        - "순식간에 세상엔 오직 서로를 마주 보는 두 사람만이 남게 되었다."
        - "%YOU%의 눈엔 이제 메지로 파머의 존재만이 가득했다."
        - "눈앞의 연인을 향해 메지로 파머는 그저 두 팔을 벌려 보였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%SELF_CALL%는 여기 있어…… 마음껏 하고 싶은 대로 해」"
        - acc: 1
          key: sex
          content: "메지로 파머에게 달려든다"
          lines:
            - "날씨는 추웠지만, 메지로 파머가 내뱉는 숨결은 모든 이성을 태워버릴 듯 뜨거웠다."
            - "평소 하얀 겉옷에 가려져 있던 가냘픈 어깨가 가감 없이 공기 중에 드러났다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「……괜찮아」"
            - "메지로 파머는 두 눈을 감고, 가슴 앞에 모으고 있던 두 손을 가만히 내려놓았다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「나는 트레이너 너의 파머니까」"
          # 馬跳びへ
        - acc: 2
          content: "「진정하자…… 진정해……」"
          lines:
            - "승부복 겉옷을 내려놓고, 메지로 파머의 드러난 어깨를 가만히 붙잡았다."
            - "놀란 표정의 메지로 파머에게 %YOU%은(는) 자신의 겉옷을 벗어 덮어주었다."
            - acc: 1
              content: "「감기 걸리면 안 되니까」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「트레이너…… 응!」"
            - "눈동자에는 아쉬움이 서려 있었지만, 그보다 더 큰 감동의 눈물이 고였다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「감기 같은 거 안 걸려, 그……」"
            - "메지로 파머는 겉옷을 조금 더 여미며 그 안으로 몸을 웅크렸다."
            - "그리고 방금 전 어느 바보가 했던 것처럼, 깊게 숨을 들이마셨다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「다음 일은, 나중에 해도 될까?」"

# クリスマス勝負服
s_arim_kin_win_clothe46:
  title: "도망친 곳의 종착지는，바로 여기"
  lines:
    - "해설 「추격할 수 있을까요! 추격할 수 있을까요!」"
    - "아리마 기념 후반전, 이미 레이스는 최고조에 달했다."
    - "해설 「지금 가속하지 않으면 따라잡을 수 없습니다! 메지로 파머!」"
    - "친구인 헬리오스는 이미 실속했고, 선두를 지키고 있는 것은 오직 자신뿐이었다."
    - "하지만 약속했다. 이 주법으로 승리를 쟁취하겠다고."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「다음은 너한테 맡길게!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우리는 평생의 친구야!」"
    - "마지막 가속과 함께 폐부의 공기를 쥐어짜 내며, 메지로 파머는 그 누구의 추월도 허용하지 않은 채 1착으로 골인했다."
    - "승리의 환호성이 메지로 파머의 귓가에 비현실적으로 느껴졌고, 전광판에 비친 자신의 모습을 본 뒤에야 크게 소리 지르며 관중석의 %YOU%에게 손을 흔들었다."
    - divider: true
      content: "대기실"
    - "땀을 뻘뻘 흘리며 대기실로 돌아와 손바닥으로 연신 부채질을 했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 레이스 직후엔 정말 덥네……」"
    - "막 자리에 앉으려 할 때, 방금 뚜껑을 딴 꿀 드링크가 눈앞에 나타났다."
    - acc: 1
      content: "「아리마 기념, 축하해」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「솔직히 말해서…… 아직도 잘 안 믿겨」"
    - "음료를 마시며 자리에 앉았다."
    - "경기장에서 내려오자 어째서인지 격앙되었던 마음이 자연스레 차분해졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 내가 이긴 거 맞지, 트레이너?」"
    - "눈동자엔 불안함과 기대가 공존했다."
    - acc: 1
      content: "「응, 파머 네가 이겼어」"
    - "대답을 들은 메지로 파머는 활짝 웃으며 %YOU%의 어깨에 머리를 살며시 기댔다."
    - "새 승부복 덕분에 드러난 매끄러운 어깨가 곁에 닿으며 은은한 향기를 풍겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 그 약속 내가 지켰어」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나만의 주법으로 아리마 기념에서 이겼으니까, 이제 다들 우리를 축하해 주겠지?」"
    - acc: 1
      content: "「모두 파머 너의 실력을 인정할 거야, 의심의 여지 없이」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 이건 좀 불공평한 것 같아」"
    - "뜻밖에도 메지로 파머는 칭찬의 말을 사양했다."
    - "어깨에서 머리를 떼고 곁에 앉은 %YOU%을(를) 진지하게 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너가 있었기에 지금의 내가 이런 성적을 낼 수 있었던 거니까」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데 트레이너의 이름은 언급되지 않다니, 그건 좀 아니지 않아?」"
    - "메지로 파머의 눈빛은 무척 진지했고, 평소의 서글서글하던 푸른 눈동자엔 장난기가 전혀 없었다."
    - acc: 1
      content: "「듣고 보니 그렇네」"
    - acc: 2
      content: "「난 그저 파머 너를 서포트했을 뿐인걸」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까…… 그게 아니라고!」"
    - "가볍게 면박을 주며 %YOU%의 머리를 콩 때린 뒤 미소를 거두었다."
    - "진지한 안색으로 허리를 펴고 앉아 %YOU%의 손등 위에 자신의 손을 살며시 얹었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너가 없었다면 절대 불가능했을 거야」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 너의 신뢰가 있었기에 나는 자유롭게 달릴 수 있었어……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너가 없으면…… 난 아무것도 못 한다구!」"
    - "감정이 북받친 듯 목소리가 떨리며 거의 외치는 듯한 소리가 났다."
    - "손가락은 %YOU%의 어깨를 꽉 쥐었고, 그 끝이 살 속을 파고들 정도였다."
    - acc: 1
      content: "「파머……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「미안, 조금 흥분했나 봐」"
    - "메지로 파머는 손을 들어 눈가에 맺힌 눈물을 살짝 닦아냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 아까 한 말은 전부 진심이야」"
    - if: era.get('love:64') >= 50
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「나는 여전히 트레이너가 언제까지나 내 곁에 있어 줬으면 좋겠어」"
        - "어깨에 기대어 온 몸은 살짝만 건드려도 넘어질 듯 위태로워 보였다."
        - "내려놓은 손바닥은 %YOU%의 허벅지 위에 가만히 얹힌 채 대답을 기다렸다."
        - acc: 1
          key: hug
          content: "메지로 파머를 껴안는다"
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「계속 내 곁에 있어 줄 거지?」"
            - "메지로 파머는 %YOU%의 품에 얼굴을 묻고 점점 빨라지는 심장 소리를 들었다."
            - "눈을 감고 품 안의 온기를 만끽했다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그렇지……?」"
            - "%YOU%은(는) 손을 들어 메지로 파머의 머리를 부드럽게 쓰다듬으며 새 옷의 단추를 풀었다."
            - "하얀 모자는 메지로 파머의 손에 의해 벗겨졌고, %SEX%는 애정 가득한 눈으로 다음을 기다렸다."
            - acc: 1
              content: "「파머, 좋아해」"
            # 馬跳び
        - acc: 2
          content: "메지로 파머에게 키스한다"
          lines:
            - "대답 대신 곁에 앉아있던 %YOU%이(가) 몸을 일으켜 메지로 파머에게 깊게 입을 맞췄다."
            - "힘이 풀려있던 몸은 갑작스러운 습격에 대기실 의자 위로 쓰러졌지만, 저항할 생각은 조금도 들지 않았다."
            - "하얀 모자가 바닥에 떨어졌으나 두 사람 중 누구도 신경 쓰지 않았고, 눈동자엔 오직 서로의 얼굴만이 비쳤다."
            - "얼마나 입을 맞췄을까, 두 사람은 은밀한 은사(타액)를 뒤로하고 입술을 뗐다."
            - "지금 이 순간, 두 쌍의 눈동자가 위아래로 서로를 응시했다."
            - "메지로 파머는 천천히 눈을 감으며 %YOU%의 목 뒤로 손을 둘러 자신에게로 끌어당겼다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「부탁할게, 크리스마스의 %SELF_CALL%니까」"
            # 馬跳びへ

ak_c46_hug_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「에헤헤, 레이스를 하나 더 뛴 것 같아.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그래도 이번에는 안심하고 말할 수 있어——」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「나는 트레이너…… 나는 %YOURNAME%의 1착이야!」"
  - "파머의 웃음은 자연스러웠고 조금 전의 불안은 없었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「앞으로, 아니, 평생 잘 부탁해, %YOURNAME%!」"

ak_c46_kiss_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아~…… 실수했다.」"
  - "파머는 얼굴을 가리고 몹시 분한 표정을 지었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이러면 트레이너 냄새 묻힌 채 무대에 가잖아! 바보!」"
  - "불평처럼 들렸지만 화가 나지는 않았다."
  - "오히려 기뻐 보였다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……그래도 싫지는 않아. 이런 트레이너.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「먼저 키스해 주는 건 %SELF_CALL%도 좋아. 그래도 트레이너가 더 확실히 말해 줬으면 좋겠어.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「예를 들면 나를…… 어떻게 생각해?」"
  - "손가락으로 볼을 살짝 긁으며 %YOU%을(를) 똑바로 봤다."
  - "무엇을 묻는지는 듣자마자 알 수 있었다."
  - acc: 1
    content: "「좋아해…… 아니.」"
  - "무엇이 %YOU%을(를) 움직여 먼저 파머를 안고, 먼저 파머의 손을 잡게 했을까."
  - "답은 말하지 않아도 이미 나와 있었다."
  - "「……아마 사랑이야.」"
  - "짧고 쑥스러운 말이 %YOU%의 입에서 나왔다. 파머는 얼굴에 댔던 손가락을 멈췄다."
  - "새빨간 얼굴로 조금 멍하니 옆의 %YOU%을(를) 봤다. 입술이 작게 떨리며 뭔가 말하고 싶어 했다."
  - "마음을 담은 시선은 문밖의 소리에 생각이 돌아올 때까지 이어졌다. 무표정하던 얼굴에 불쑥 미소가 피었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「트레이너, 답 나왔어……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「우리 똑같네.」"

# シニア級12月4週
christmas_party:
  title: "메지로의 크리스마스 파티"
  lines:
    - "크리스마스 밤, 평소 각계각층의 도움에 보답하기 위해 메지로 가문에서 주최한 파티가 열렸다."
    - "메지로 파머는 하얀 승부복 차림으로 야외 회장을 누비며 분위기를 띄우고 있었다."
    - "주변의 열기가 달아오르고 회장이 북적이기 시작한 후에야, 메지로 파머는 한가로이 거닐던 %YOU%을(를) 찾아냈다."
    - "사람 무리를 벗어나 이쪽으로 돌아왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 오늘 즐겁게 보내고 있어?」"
    - "메지로 파머는 음료 한 잔을 건네더니, 그대로 %YOU%의 곁에 머물며 발걸음을 늦췄다."
    - acc: 1
      content: "「응, 아주 즐거워」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤, 즐겁다니 다행이네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우아한 만찬 같은 건 나랑 좀 안 어울리긴 하지만, 오늘은 그냥 평범한 파티니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할머님께도 감사드려야겠어!」"
    - "메지로 파머의 목소리에는 활기가 넘쳤고, 그에 따라 발걸음도 가벼워졌다."
    - "주변의 소음은 크지 않았고, 두 사람만의 공간에는 전혀 끼어들지 못했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너랑 같이 참가하는 파티라니, 왠지 무척 즐거운걸.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예전에는 파티라는 거에 거부감이 좀 있었거든.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때는 나 자신을 분위기 메이커 같은 역할로만 생각해서, 정작 내가 즐기는 건 나랑 안 어울린다고 느꼈으니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 헬리오스네랑 지내면서 말이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이제는 아주 자연스럽게 모두와 함께 즐거워할 수 있게 됐어!」"
    - "메지로 파머는 몸을 살짝 앞으로 기울이며, 곁눈질로 %YOU%의 얼굴을 훔쳐보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이런 부분도 다 트레이너 덕분이야, 헤헤.」"
    - "얼굴에는 자연스러운 미소가 떠올랐고, 어깨가 %YOU%과(와) 가볍게 부딪혔다."
    - "연말이라 기온이 낮았고, 메지로 파머의 옷차림은 그리 따뜻해 보이지 않았다."
    - "드러난 어깨가 %YOU%의 눈에는 아무래도 걱정스러웠다."
    - acc: 1
      key: sex
      content: "(감기 걸리겠는데……)"
      lines:
        - "드러난 양 어깨 위로 겉옷을 걸쳐주어 메지로 파머의 몸을 덮어주었다."
        - "온기가 남은 옷이 몸에 닿자 %YOU% 특유의 향기가 배어 나왔다."
        - "잠시 멍하니 있던 메지로 파머는 쑥스러운 듯 옆을 바라보았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그게, 이 옷차림 그렇게 춥지는 않은데.」"
        - "기쁘게 받아들인 건 아니었지만, 옷깃을 움켜쥐고는 힘껏 자기 쪽으로 끌어당겼다."
        - "콧속으로 옷에 밴 냄새가 차올랐고, 얼굴에는 발그레한 홍조가 감돌았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그래도…… 고마워, %CALLNAME%.」"
        - "목소리는 아까만큼 활기차지 않았고, 더없이 차분했다."
        - "오직 %YOU%에게만 들릴 법한 목소리로 귓가에 속삭였다."
    - if: era.get('love:64') >= 75
      acc: 2
      content: "(습격당할 것 같아……)"
      lines:
        - "무의식적으로 들어 올린 매끄러운 팔이 뒤통수를 감싸며 하얀 겨드랑이를 드러냈다."
        - "짧은 스커트 아래로 높게 걸친 가터벨트가 아무 장식 없던 허벅지를 살짝 짓누르고 있었다."
        - "짙은 푸른색 리본으로 머리를 옆으로 묶어 높게 올린 포니테일 사이로 뒷덜미가 노출되었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%? 어디 안 좋아?」"
        - "메지로 파머의 목소리가 적절한 타이밍에 들려와 정신을 현실로 돌려놓았다."
        - "이미 이상해진 안색을 메지로 파머도 눈치챈 모양이었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기, 내가 가서 좀 같이 쉬어줄게. 감기 걸리면 안 되니까.」"
        - "다른 사람들이 듣기에 적당한 목소리로 두 사람이 잠시 자리를 비울 핑계를 만들어냈다."
        - "회장 전체를 가로지르고, 집사 할아버지를 지나쳐, 모든 사람을 뒤로하고."
        - "아무도 찾지 못할 곳에 도착해서야 메지로 파머는 몸을 돌려 %YOU%을(를) 바라보았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME% 너는 정말……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말 손이 많이 간다니까.」"
        - "손바닥이 바지 위를 부드럽게 덮으며 꾹 눌러왔다."
        - "온도가 올라갈 때까지 기다린 후, 메지로 파머는 천천히 지퍼를 내렸다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「소리 내면 안 돼.」"
        - "다정한 목소리가 %YOU%의 머릿속에 울려 퍼졌고, 이어서 하반신을 유린하는 메지로 파머의 손길에 쾌감이 전해졌다."
        - "손가락은 마치 춤을 추듯 민감한 곳을 오갔고, 도발적인 손짓이 있을 때마다 겨울밤의 추위 속에서도 몸이 떨려왔다."
        - "본능에 이끌린 %YOU%의 두 손이 메지로 파머의 어깨를 붙잡았고, 두 사람은 밀착되었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「%CALLNAME%……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이제 내보내도 좋아.」"
        - "시야가 차단된 상황에서 은밀한 곳의 감각은 더욱 예민해졌다."
        - "손끝의 마찰이 점점 강해지며 절정의 쾌감을 유도했다."
        - acc: 1
          content: "「파머, 나……!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아……」"
        - "뜨거운 것이 쏟아져 나온 뒤, 메지로 파머는 자신의 손을 바라보며 잠시 침묵했다."
        - "손수건을 꺼내 손을 깨끗이 닦고 나서야 사각지대를 벗어났다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너, 더 늦게 돌아가면 다들 의심할 거야.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「자, 돌아가자.」"
        - "메지로 파머는 옷을 추스른 %YOU%을(를) 향해 손을 내밀었다."
        - acc: 1
          content: "「메지로 파머의 손을 잡는다」"
        - acc: 2
          content: "「메지로 파머의 손을 끌어당긴다」"
          # 馬跳び

party_sex_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「정말, 분명 의심받을 거야……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그래, 그래, 괜찮아.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「뭐, %SELF_CALL%는 전혀 신경 안 쓰지만.」"
  - "조금 풀이 죽은 %YOU%과(와) 달리 파머는 밝았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「신경 쓰이면 같이 놀러 나가서 만회하는 건 어때?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「농담이야. 언제든 돌아갈 수 있으니까!」"
  - "파머의 미소는 늘 그대로였고 따뜻함을 전했다."

#シニア級宝塚記念優勝、有馬記念連覇後。育成後（4年目）1月4週
winner:
  title: "고개를 너무 들었잖아!"
  lines:
    - "모처럼의 휴식 시간, %YOU%은(는) 생각을 비우고 있다가 자연스럽게 메지로 파머의 일을 떠올렸다."
    - "왠지 모르게 각종 승리의 기억들이 뇌리에 스쳐 지나갔다."
    - "그렇다, 메지로 파머는 축제 분위기의 레이스에서 매우 강한 면모를 보였다."
    - "「아리마 기념」과 「타카라즈카 기념」에서 잇따라 승리하고, 심지어 아리마 기념을 다시 한 번 제패했다니……"
    - "한창 기분 좋은 상상에 빠져 있을 때, 메지로 파머의 목소리에 %YOU%은(는) 상념에서 깨어났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세상에 세상에…… 내가 그랑프리 3연패라니!」"
    - acc: 1
      content: "「응, 맞아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아하하, 내 생각에도 진짜 대단한 것 같아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「대단한 기록이긴 해도, 인기 투표가 있는 레이스에서 이룬 거라니 정말 나답네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이런 모두가 떠들썩하게 참여하는 축제 같은 레이스가 나한테 가장 잘 맞을지도 몰라!」"
    - acc: 1
      content: "「축제라고 하니, 축하 행사도 있는 모양이야」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에, 3연패 축하 행사 말이야? 그렇구나, 그것도 꽤 기대되는걸!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도 레이스에서 이미 한껏 고조됐었으니까, 축하 행사는 좀 얌전하게 평범하게 참가하자.」"
    - divider: true
      content: "축하 행사"
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - "「음~ 딱히 잘못된 점이 있는 건 아니지만, 무대 위에서의 몸가짐이……」"
    - "학생회장은 미묘하게 고개를 갸우뚱하며 리허설 현장을 지켜보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「회장님? 제가 트로피를 받는 방식에 큰 문제라도 있나요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘은 갸루처럼 굴지 않았으니까 이상한 점은 없었을 텐데……」"
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - "「이상하다는 게 아니다.」"
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - "「오히려 평소의 너는 너무 겸손해 보이는군.」"
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - "「좀 더 고개를 들고 가슴을 펴도 된다. 사양할 필요 없어.」"
    - color: %COLOR_17%
      content:
        - fontWeight: bold
          content: %LUNA%
        - "「과거에 그랑프리 3연패를 달성했던 %UMA%는, 내가 경애하는 그 우마무스메뿐이니까 말이다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고개를 들고 가슴을 펴라니…… 그렇게 말씀하셔도~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그치만 평소의 그 겸손한 태도는 어릴 때부터 몸에 밴 거랄까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음~ 어떻게 하면 좋을까.」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「한 말씀 드려도 되겠습니까?」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「당신의 몸가짐에서 위엄이 느껴지지 않는 이유는 고개를 기울이는 각도 문제라고 판단됩니다.」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「머리의 각도를 높여보는 건 어떻습니까? 제 생각에는…… 대략 2.85도 정도입니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「머리 위치 말이야…… 그렇구나.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「난 평소에 나도 모르게 『안녕 안녕~』 하는 느낌이 돼버려서 위엄이 없어 보였나 봐.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「OK, 부르봉! 알았어! 고개를 높이 들어볼게!」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「부탁드립니다. 당신이 자신감 있고 당당한 몸가짐을 유지한다면 저 또한 기쁠 것입니다.」"
    - color: %COLOR_26%
      content:
        - fontWeight: bold
          content: %BOURBON%
        - "「메지로 파머 당신의 성취는, 도주 우마무스메들이 꿈꾸는 것이니까요.」"
    - "모두가 머리를 맞대고 의논한 덕분에 축하 행사는 무사히 마무리되었다."
    - "다만 그 후에——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오오오오오!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앗, 트레이너! 나 방금 페이스 아주 좋았지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말 가뿐하게 달린 것 같은데, 기록은 어때?」"
    - acc: 1
      content: "「발전이 눈에 띄는데」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어떻게 된 걸까……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그저 계속 훈련해온 성과일까? 아니면……」"
    - acc: 1
      content: "「설마…… 고개를 든 덕분인가?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고개를 든 것…… 아, 축하 행사 때 말이지.」"
    - "메지로 파머의 표정이 눈부시게 밝아졌다."
    - "고개를 드는 자세가 마음가짐까지 함께 바로잡아준 모양이었다."
    - "그렇게 메지로 파머는 그랑프리 3연패를 달성한 우마무스메로서 자부심을 갖게 되었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇구나…… 마음가짐이 바뀌면 달리기 방식도 바뀌는구나. 그래서 고개를 높이 들어야 하는 거였어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아~ 턱을 들고 가슴을 펴서, 4연패, 5연패까지 노려보자!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「야호!」"
    - "넘쳐흐르는 감정과 열정이 메지로 파머의 온몸에서 뿜어져 나왔다."
    - "그랑프리 3연패의 자부심을 가슴에 새기고, 메지로 파머는 앞으로도 새로운 축제에 도전해 나갈 것이다."

#称号条件達成後、2月1週
sports_car:
  title: "충격! 스포츠카 선물이라니!"
  lines:
    - "평온한 어느 날, 사무실에 있던 %YOU%에게 갑자기 %MINORU%의 연락이 왔다."
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - "「원래는 메지로 파머 양에게 직접 알려야 하지만, 오늘은 %SEX%가 쉬는 날이라서요.」"
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - "「아무래도 학원에서 임시로 보관하기에는 좀 곤란한 물건이라 말이죠.」"
    - acc: 1
      content: "「그렇게 중요한 건가요?」"
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - "「상세한 내용은 이사장님께서 설명해 주실 겁니다.」"
    - divider: true
      content: "이사장실"
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - "「표창! 메지로 파머를 이끈 활약, 참으로 훌륭하다!」"
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - "「격려! 트윙클 시리즈의 후원사에서 대단한 물건이 도착했다!」"
    - color: %COLOR_302%
      content:
        - fontWeight: bold
          content: %TASTE%
        - "「트레이너로서 책임을 다해 이 선물을 메지로 파머에게 전하도록!」"
    - acc: 1
      content: "「네에!? 그 선물이라는 게……」"
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - "「저기, 일단 주차장으로 가시죠.」"
    - "초록 옷의 관리인이 %YOU%에게 새 차 열쇠를 건네고 주차장을 가리켰다."
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - "「바로 찾으실 거예요. 나머지는 맡길게요.」"
    - "말을 마친 하야카와 씨는 일하러 돌아갔다."
    - "머릿속이 새하얘진 %YOU%은(는) 열쇠를 든 채 주차장에 들어갔다."
    - "눈앞에는 빛을 반사하는 새 차가 있었다. 상당히 거창한 선물이라 할 만했다."
    - acc: 1
      content: "「엄청난 선물이네……」"
    - "눈앞의 새 차는 분명 엄청난 선물이었다. 하지만 큰 문제가 있다."
    - "파머는 운전을 못 할 것이다."
    - "그럼 이 선물을 어떻게 전달하지……"
    - if: era.get('love:64') >= 50
      acc: 1
      content: "「파머한테 전화할까……」"
      lines:
        - "파머와는 금방 통화가 됐고 만날 약속도 바로 잡았다."
        - divider: true
          content: "거리"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 큰일이네. 이거 분명 늦겠어……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「음…… 이상하네. 안 보여.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「혹시 트레이너도 늦나?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아니, 그럴 리 없지. 도중에 무슨 일이 생겼나……」"
        - "파머는 거리를 뛰며 좌우로 %YOU%을(를) 찾았다."
        - "초조하게 찾던 중 뒤에서 경적이 울렸다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「왓, 아, 미안 미안! 지금 비킬……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「잠깐…… 어라? 트레이너?」"
        - acc: 1
          content: "「어이, 파머. 타.」"
        - "스포츠카에 앉은 %YOU%은(는) 멍하니 있는 파머를 부르며 %SEX% 곁에 차를 세웠다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「멋진 차네…… 아, 아니, 왜 트레이너가?」"
        - acc: 1
          content: "「시리즈 후원사가 너한테 주는 선물이야.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「나한테 주는 선물!?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이거 엄청나잖아! 하지만 나 운전 못 해.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「면허도 아직 없어. 이렇게 비싼 선물인데.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「맞다! 트레이너가 운전해 줘!」"
        - "말이 끝나기도 전에 파머는 이미 조수석에 앉았다."
        - "차는 거리를 지나 바다로 향해 해안선을 느긋하게 달렸다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너, 기분 좋아!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「더, 더! 야호~!」"
        - "바닷바람이 창으로 들어와 파머에게 닿자 원래도 즐거워하던 %SEX%는 자연스레 들떴다."
        - "인적 없는 모래사장에 차가 천천히 멈추고서야 그치지 않던 웃음소리가 잦아들었다."
        - "파도가 모래를 치며 기분 좋은 사각거림을 냈다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후~, 꽤 멀리 왔네~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「목적 없는 드라이브도 나쁘지 않네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「가끔은 일상에서 전력으로 도망쳐 마음대로 즐기는 것도 중요해.」"
        - acc: 1
          content: "「파머는 그런 사람이니까.」"
        - "%YOU%의 동의를 듣고 파머는 참지 못하고 작게 웃음을 터뜨렸다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아하하, 맞아!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「보잘것없는 나에게서, 누군가 정해 놓은 길에서 도망쳐.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「도망치고 또 도망치고 계속 도망쳐서……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……그러다 트레이너가 이끌어 줘서 자신감을 갖고 여기까지 왔어!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그러니까——」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「음~, 이 바람 최고야~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이제 아무것도 무섭지 않아!」"
        - "파머는 해방감이 가득한 밝은 얼굴로 두 팔을 활짝 벌리고 기지개를 켰다."
        - "다만 미소에는 조금 어색한 기색이 있었고 미간이 살짝 찌푸려졌다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「뭐, 트레이너를 만나기 전까지 출발선에서 헤매서 출발은 늦었지만.」"
        - acc: 1
          content: "「그래도 네 다리로 따라잡았잖아.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응, 한 바퀴 늦은 청춘이네~. 하지만——」"
        - "찌푸렸던 미간을 펴고 자연스러운 표정으로 %YOU%을(를) 봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「되찾을 수 없는 건 없어!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「지금 손에 없어도 언젠가는 꼭 얻을 거야!」"
        - acc: 1
          content: "「이것도 그렇지. 게다가 기념 차량이잖아.」"
        - "%YOU%은(는) 웃으며 둘이 타고 온 차를 가리키고 가볍게 말했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후원사의 선물이라……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「뭐랄까, 아직 조금 실감이 안 나.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기, 트레이너.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이 차, 내 마음대로 써도 되는 거지? 어디에 쓰든?」"
        - acc: 1
          content: "「물론이지.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그거 완, 완, 완……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「완전 좋아! 최고야!!!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이제 언제 어디든 달릴 수 있겠네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「마음껏 드라이브하자, %YOURNAME%!」"
        - acc: 1
          content: "「우리? 나도 포함이야?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응! 나 혼자 힘으로 얻은 게 아니니까 함께 나누고 싶어.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 맞다. 하나 더……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「괜찮으면 이 차에 이름 붙일래?」"
        - acc: 1
          content: "「이름?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응! 나이 들어서도 계속 탈 거니까 들어도 질리지 않고 소중히 할 수 있는 이름이면 좋겠어.」"
        - "파머의 차에 이름을 붙인다. %SEX%가 이룬 성과에 어울리면서 소중히 여길 이름……"
        - "%YOU%의 머릿속에 답은 이미 하나뿐이었다."
        - acc: 1
          content: "「파머!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어? 나 여기 있는데……」"
        - acc: 1
          content: "「파머호야.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「에엣!?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내 이름!?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……그 이름을 붙이면 계속 아껴 줄 거야?」"
        - acc: 1
          content: "「응. 네 성과를 기념할 수도 있지.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아하하, 그런 뜻이야? 그럼 그걸로 하자. 간단한 이름도 좋네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응, 파머호! 역시 난 못 얻을 게 없네!」"
        - "파머는 맑은 하늘처럼 웃으며 만족스럽게 고개를 끄덕였다."
        - acc: 1
          content: "「원래 차를 갖고 싶었어?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「차…… 그러게, 그랬을지도.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하지만 갖고 싶은 건 다른 것도 많아!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「가자, 드라이브 계속!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너, 빨리!」"
        - "메지로 파머의 출발은 늦었다. 하지만 눈 깜짝할 사이 맨 앞으로 뛰어나가 %YOU%의 손을 잡고 달린다——"
        - "차가 시동 소리를 내며 다시 달리기 시작했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「더, 더 빨리, 트레이너!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「한계까지 빠르게!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후후~! 자유 최고!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「달려라, 달려, 파머호!」"
        - "계속 가속하는 파머호. 한때는 아무도 알아주지 않는 뒤처진 도망자였지만 지금은."
        - "%SEX%는 누구보다 빠르다."
        - "%SEX%는 왕도에서 벗어난 선구자이며 메지로 가문에서도 가장 자유로운 궤적을 그린다."
    - acc: 2
      content: "「집사 분께 전화를 걸어보자……」"
      lines:
        - "잠시 고민한 끝에 %YOU%은(는) 집사 분께 전화를 걸기로 했다."
        - "아무래도 이 선물은 메지로 파머에게 너무 과한 면이 있었기 때문이다."
        - acc: 1
          content: "「집사 분께 맡기자……」"
        - "달려온 집사에게 열쇠를 넘겨준 후, %YOU%의 굳어 있던 어깨가 단번에 풀렸다."

rain_notify:
  - color: %COLOR%
    content: "【혼자 외출한 비 오는 날, 뜻밖의 만남이 있을지도】"

################################
# トリガーイベント
################################

# メイクデビュー後、任意G1出走後、一人で商店街外出時
# リマインド：一人外出の雨の日、思いがけない出会いがあるかも
rain:
  title: "폭우에 젖더라도"
  lines:
    - "어느 날 외출한 %YOU%은(는) 갑작스러운 폭우에 발이 묶였다."
    - "비 때문에 쇼핑몰에 갇힌 김에 안을 구경했다."
    - "그리고 비가 그쳤을 때——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하, 하, 하……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라, 트레이너잖아!」"
    - "갑자기 승부복 차림으로 흠뻑 젖은 파머가 달려왔다."
    - acc: 1
      content: "「파머, 그 차림은……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아~, 옷 말이야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괜찮아, 괜찮아. 달리면 말라!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……아, 이래선 설명이 안 되지. 그러니까——」"
    - "파머는 쓴웃음을 짓고 차근차근 사정을 이야기했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「——그래서 메지로 가족 전부 연회에 불려 가서~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그랬더니 그 사람들이 돌아갈 차도 준비해 놨다면서——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더는 못 참겠어서 미안하다고 하고 도망쳤어!」"
    - "도망친다는 발상이 %SEX%다워서 저도 모르게 웃었다."
    - "그래도 승부복은 신경 쓰였다. 이미 전부 젖었다."
    - "속에 입은 옷이 파머의 몸에 달라붙었고 젖은 부분에서 %YOU%은(는) 눈을 떼지 못했다."
    - "속옷 부분은 가슴에 붙은 천이 조금 가려 줘서 시선을 거뒀다."
    - acc: 1
      content: "「……승부복은 괜찮아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아~, 그렇게 생각하겠네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도 괜찮아. 맞출 때부터 그럴 생각이었어.」"
    - acc: 1
      content: "「그럴 생각?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐라고 해야 할까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 디자인, 평상복이랑 별로 다르지 않지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「꾸민 느낌도 없고 달리기 편하고 도망치기도 쉬워.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제일 중요한 건 혼자 달리고 싶을 때 바로 달릴 수 있다는 거야!!」"
    - "파머의 말을 듣고 %YOU%은(는) 몸에서 시선을 떼고 잠깐 멍해졌다."
    - "파머가 말한 「혼자」라는 단어에 조금 위화감이 들었다."
    - "평소 파머는 늘 누군가와 함께였을 텐데."
    - acc: 1
      content: "「혼자?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다 같이 있는 건 물론 좋아. 하지만——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「레이스에서 맨 앞을 달리는 건 한 사람뿐이잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 가끔은 아무 생각 없이 달리고 싶어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지평선을 향해 혼자 자유롭게, 그저 계속 달리는 거야!」"
    - "파머는 먼 곳을 봤다. 그곳에는 부자유도 속박도 없을 것이다."
    - "다만 파머의 눈에 새로운 빗방울이 비쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우와, 또 내리네……」"
    - acc: 1
      content: "「빨리 돌아가자!」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그러게. 달리면 별로 안 젖겠지!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 서둘러——」"
        - acc: 1
          content: "「잠깐.」"
        - "파머는 멈춰 서서 의아하게 돌아봤다."
        - "%YOU%은(는) 방금 산 우산을 펴서 %SEX%의 머리 위로 씌웠다."
        - "하나뿐이니 조금 좁을 것이다."
        - acc: 1
          content: "「감기 걸리게 하고 싶지는 않아.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오오, 트레이너 든든해!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「좋네. 다음엔 나도 누군가한테 이렇게 해 줘야지.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너처럼 재빨리 우산을 씌워 주는 거야!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그래도~ 내가 그렇게 잘할 수 있을지는 모르겠지만. 하하.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너는 역시 어른스럽고 믿음직하네……」"
    - acc: 2
      content: "「어디서 비 피하면서 뭐 마실까?」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「좋아! 찬성!」"
        - "폭우를 피해 카페를 찾았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「자, 따뜻한 커피지?」"
        - "파머는 컵을 %YOU% 앞에 놓고 맞은편에 천천히 앉았다."
        - acc: 1
          content: "「고마워.」"
        - "카페 안에서도 파머는 무척 자연스러웠다."
        - "승부복도 특별해 보이지 않았다. 가게 분위기에 완전히 녹아들었다."
        - "%YOU%의 시선을 알아챈 건지 파머는 컵을 내려놓고 조금 의아하게 봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응, 왜 그래?」"
        - acc: 1
          content: "「그 승부복, 역시 좋네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「엇, 왜 그래, 갑자기 진지하게!?」"
        - acc: 1
          content: "「아니, 갑자기 그렇게 생각했어.」"
        - "파머의 눈에 잠깐 놀라움이 떠올랐다가 사라지고 황급히 시선을 피했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그런 말 하는 동안 커피 식겠어~. 자, 얼른 마셔.」"

important_place_notify:
  - color: %COLOR%
    content: "【%CHARA%는 전에 여기서 자유 레이스에 참가했다…… 다시 데려와 볼까】"

#（自由レース、行く？）発動後、クラシック級商店街
important_place:
  title: "소중한 장소니까"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「야호~, 오늘도 다들 기운 넘치네!」"
    - "자유 레이스의 %UMA% 「오, 파머잖아?」"
    - "자유 레이스의 %UMA% 「아~, 있잖아~」"
    - "파머와 외출한 %YOU%은(는) 도중에 시간이 나서 자유 레이스가 열리는 곳에 들렀다."
    - "파머의 친구인 듯한 %UMA%가 달려왔고 %YOU%은(는) 둘이 편하게 이야기하도록 자리를 비켜 주었다."
    - "파머가 이야기를 마치고 %YOU%과(와) 돌아가려던 때였다."
    - "트레센의 %UMA%A 「와, 정말 길 위에 코스가 있네.」"
    - "트레센의 %UMA%A 「좀 울퉁불퉁하지 않아? 이런 데서 달릴 수 있어?」"
    - "트레센의 %UMA%B 「무리야, 난 못 해. 다리 다치겠어~」"
    - "자유 레이스의 %UMA% 「……너희, 뭐 하러 왔어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……아~, 미안, 트레이너! 잠깐 돌아가도 돼?」"
    - acc: 1
      content: "「응, 물론이지.」"
    - "허락을 받은 파머는 아까의 %UMA% 곁으로 뛰어가 자연스럽게 대화에 끼었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안녕, 트레센 학생이지? 처음 왔어?」"
    - "트레센의 %UMA%A 「……갑자기 와서 뭐야?」"
    - "트레센의 %UMA%A 「메지로 가문 사람이잖아? 이런 들러리들이랑 있으면 약해져.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「들러리…… %THEY%가 자유 레이스를 뛴다고 약하다고 생각하면 틀렸어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「실제로 난 여기서 달려서 강해졌거든.」"
    - "트레센의 %UMA%A 「아니, 그냥 학원에서 트레이닝하는 게 낫잖아!」"
    - "트레센의 %UMA%B 「게다가 아마추어랑 달리는 건 트레이닝도 안 되지!」"
    - "자유 레이스의 %UMA% 「야, 너희——!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「——좋아. 그렇게까지 말했으니 달리자!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러면 누가 위인지 알겠지?」"
    - "파머가 틈을 봐서 레이스를 제안하자 양쪽 모두 말다툼을 멈췄다."
    - "이미 말이 나온 이상 두 %UMA%도 뾰로통한 표정으로 대결을 받아들였다."
    - "자연히 심판 역할은 %YOU%에게 돌아왔다."
    - acc: 1
      content: "「그럼…… 출발!」"
    - "출발과 동시에 파머는 망설임 없이 맨 앞에서 도주했다."
    - "하지만 두 사람도 트레센 학생답게 빠른 페이스를 두려워하지 않고 따라왔다."
    - "레이스 분위기는 점점 뜨거워졌고 파머는 전력으로 선두를 차지했다——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아아아아아——!」"
    - "자유 레이스의 %UMA% 「——좋아! 파머 최고!!」"
    - "트레센의 %UMA%A 「하, 하, 저 도주 주법은 뭐야. 너무 무모하잖아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하하하, 이런 달리기는 학원에서 잘 안 가르치지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 이게 여기서 배운 달리기야.」"
    - "승부가 난 뒤 파머는 한참 그치지 않는 주변의 박수와 환호를 받았다."
    - "트레센에서 온 두 %UMA%는 그 모습을 보고 머쓱한 표정으로 떠났다."
    - "겨우 떠들썩한 환호에서 벗어나 두 사람은 저녁의 강가를 걸었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아~, 미안 미안!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「말려들게 했네.」"
    - acc: 1
      key: select
      content: "「도주에도 여러 가지가 있네.」 (스피드 +10)"
      lines:
        - "친구를 지키려고 전력으로 달리는 모습이 멋있었다고 %YOU%은(는) %SEX%에게 말했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어, 아까?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아냐 아냐, 난 그렇게 대단하지 않아.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「모처럼 자유롭게 달릴 수 있는 곳인데 싸우는 데 쓰기엔 아깝다고 생각했을 뿐이야.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그리고 난 선두를 달렸을 뿐이야!」"
        - "파머의 얼굴은 쑥스러운 미소로 가득했지만 어느 때보다 자랑스러워 보였다."
    - acc: 2
      content: "「친구를 아끼는구나.」 (지능 +10)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아하하, 왠지 부끄럽네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그래도 맞아. %THEY%가 있었으니까 지금의 내가 있어.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어디서 성장하고 어디서 결실을 얻는지——」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그걸 누구에게도 부정당하고 싶지 않아!」"
        - "그 뒤 파머는 %YOU%에게 %SEX%의 친구들 이야기를 많이 해 줬다."

golf_notify:
  - color: %COLOR%
    content: "【최근 %CHARA%는 트레이닝 후 상점가로 서둘러 향하고 있다】"

#恋慕＞49、シニア級クリスマス 商店街
golf:
  title: "멀리 돌아 이룬 홀인원"
  lines:
    - "평범한 어느 오후, 트레이닝이 끝나자 파머가 먼저 %YOU%을(를) 찾아왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘도 수고했어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 난 볼일이 있어서 먼저 갈게, 트레이너!」"
    - acc: 1
      content: "「그래도 되지만, 그렇게 서두를 필요는 없잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응, 볼일이 좀 있어서.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당분간은 계속 이럴지도 몰라. 미안!」"
    - "그 말을 한 뒤 며칠 동안, %SEX%는 매번 트레이닝장을 일찍 떠났다."
    - "어느 날, %YOU%이(가) 거리에 나가 보니 익숙한 길에 크리스마스 장식이 늘어서 있고 곳곳이 북적였다."
    - "느긋하게 걷던 %YOU%은(는) 스포츠용품점 앞에 멈춰 진열된 상품을 바라봤다."
    - acc: 1
      content: "「골프 장갑……」"
    - "진열장 속 장갑을 보자 자연스럽게 얼마 전 나눈 대화가 떠올랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어, 겨울에 골프 쳐 본 적 없어?」"
    - acc: 1
      content: "「추우니까.」"
    - acc: 2
      content: "「손이 얼잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아깝다! 겨울엔 사람이 적어서 여유롭고 엄청 편한데!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음에 같이 갈래?」"
    - "전에 트레이닝실에서 잡담하다가 분명 그런 이야기를 했었다."
    - "마침 크리스마스가 다가오고 있었다. 선물도 되고, 초대해 준 파머에게 보답도 할 수 있겠다."
    - "언제 건넬지는 모르겠지만……"
    - acc: 1
      content: "「일단 사 두자.」"
      lines:
        - "건넬 선물을 챙겨 %YOU%은(는) 상점가를 나섰다."
        - divider: true
          content: "다음 날, 트레이닝장."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후우, 실컷 달렸다!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「지도해 줘서 고마워, 트레이너!」"
        - acc: 1
          content: "「오늘은 여기까지야. 다음에 보자. 조심해서 돌아가.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 잠깐만 트레이너!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기, 이따 시간 있어?」"
        - "돌아가려던 %YOU%은(는) 파머의 갑작스러운 말에 걸음을 멈췄다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「사실 요즘 놀이공원에서 단기 아르바이트 중인데, 거기 이벤트가 꽤 재미있거든.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「조명도 예쁘고, 가게 장식도 귀여워!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……어때?」"
        - acc: 1
          content: "「네가 괜찮다면 당연히 가지.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응응! 당연히 싫지 않지!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「안내는 나한테 맡겨!」"
        - "조금 들뜬 파머는 겨울옷으로 갈아입고 %YOU%을(를) 데리고 놀이공원으로 향했다."
        - divider: true
          content: "놀이공원."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이 향신료 음료는 어때?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「무알코올이라 어른도 아이도 좋아해.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「계피 맛을 싫어하는 사람도 있지만.」"
        - acc: 1
          content: "「맛있네. 몸속까지 따뜻해져!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「나도 좋아해. 후후…… 우리 잘 통하네~」"
        - "그렇게 말하던 파머는 이내 주변 풍경에 눈길을 빼앗겨 %YOU%을(를) 데리고 거리를 걷기 시작했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너! 이 포즈로 같이 찍자!」"
        - acc: 1
          content: "「이, 이렇게? 제대로 한 거 맞지?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정답! 자, 저쪽 휴대폰 봐~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「3, 2, 1…… 자!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「으흥~, 사진 잘 나왔나 보자…… 아!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아르바이트 시간이다! 트레이너, 안내는 여기까지. 일하는 가게에도 보러 와!」"
        - "파머는 휴대폰을 넣고 모퉁이의 레스토랑으로 달려갔다."
        - "가게 안에 크리스마스 노래가 흐르는 가운데, 직원들이 가벼운 걸음으로 손님들에게 음식을 날랐다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오래 기다리셨습니다~ 칠면조 다리와 겨울 한정 음료예요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「점장님한테 트레이너라고 말씀드렸더니 %SEX%가 조금 더 주셨어…… 비밀이야?」"
        - acc: 1
          content: "「말 안 할게. 점장님께도 감사하다고 전해 줘.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하하, 전해 드릴게~ 그럼 맛있게 드세요.」"
        - "%YOU%이(가) 식사를 즐기고 잠시 쉬려던 참이었다."
        - "상황을 살피고 있었는지, 파머가 때맞춰 다가왔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……트레이너, 지금 쉬는 시간이야. 잠깐 이야기할 수 있어?」"
        - acc: 1
          content: 「？」
        - "파머를 따라 밖으로 나오자 %SEX%가 품에서 작은 상자를 꺼내 %YOU%의 손에 건넸다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「순록 파머가 주는 선물이야~ 열어 봐.」"
        - "받아서 열어 보니 유명 골프 브랜드의 장갑이 들어 있었다."
        - acc: 1
          content: "「이건……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「전에 같이 골프 치러 가자고 했던 거 기억해?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「손이 얼지 않는 겨울용 장갑이야.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……메리 크리스마스.」"
        - "파머가 건넨 선물을 보고 모든 의문이 풀렸다."
        - "트레이닝 후 서둘러 돌아가고, 계속 바빴던 이유는——"
        - acc: 1
          content: "「볼일이라는 게 아르바이트였구나.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「잠깐, 그렇게 딱 잘라 말하면 분위기 깨지잖아?」"
        - "뿌듯해하는 파머를 보고 %YOU%은(는) 입을 다물고 가방 안을 뒤졌다."
        - "언제 건넬지 고민하던 선물이 그 안에 잠들어 있었다."
        - acc: 1
          content: "「사실 나도 준비한 게 있어서……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「봉투? 어, 이건……」"
        - "파머는 건네받은 봉투를 열어 안에 든 장갑을 봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「장갑이잖아……!」"
        - acc: 1
          content: "「골프 치러 가고 싶어 하는 것 같아서.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그러니까?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하하, 같은 생각을 하고 있었네.」"
        - acc: 1
          content: "「서로 깜짝 선물이 됐네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「맞아! 서로 장갑까지 준비했는데, 안 갈 수 없겠네~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이 순록이 안내해 줄게~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이렇게 예쁜 선물을 준 산타를 목적지까지~」"
        - acc: 1
          content: "「그럼 부탁할게.」"
        - divider: true
        - random: true
          lines:
            - divider: true
              content: "며칠 뒤."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「와, 날씨 엄청 좋다!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「시작할까, 트레이너!」"
            - "추운 날씨에도 파머와 %YOU%의 손은 얼지 않았다."
            - "이날 두 사람은 마음껏 골프를 즐겼다."
        - random: true
          lines:
            - "직원 A 「잘됐네, 파머!」"
            - "직원 A 「그렇게 열심히 일한 보람이 있네~」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「왓! 잠깐, 왜 따라온 거야!?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그런 이야기는 안 해도 돼!」"
            - "이 선물을 건네려고 파머는 자신만의 방식으로 무척 노력했을 것이다."
            - "그렇게 생각한 %YOU%은(는) 이 장갑을 소중히 쓰기로 했다."
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「좋아! 그럼 결정! 아, 맞다.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「장갑 끼고 기념사진 찍을래?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「트레이너도 껴. 그리고 아까 그 포즈…… 완벽해!」"
            - "잠시 뒤, 파머에게서 사진이 도착했다."
            - "%YOU%과(와) 파머의 손이 하나씩 찍혀 있었다. 볼 때마다 가슴이 따뜻해졌다."
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「에헤헤, 그럼 약속이야.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「맞다, 얼른 장갑 껴 볼게!」"
            - acc: 1
              content: "「나도 껴야지.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「오, 크기가 딱 맞아!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「……우리, 정말 잘 맞는 걸지도?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「산타와 순록보다 더!」"
        - random: true
          lines:
            - "직원 A 「수고했어, 파머!」"
            - "직원 A 「아, 잘된 모양이네? 축하해!」"
            - "직원 B 「그것 때문에 여기서 아르바이트한 거잖아!」"
            - "직원 B 「이야~, 열심히 한 보람이 있네~」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「아하하…… 비밀로 해 줘.」"
            - acc: 1
              content: "「정말 고마워.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「……그, 응…… 천만에.」"
    - acc: 2
      content: "「조만간 가자……」"

lottery_notify:
  - color: %COLOR%
    content: "【%CHARA%와 함께 추첨하자!】"

# 恋慕＞49、シニア級1月 商店街抽選
lottery:
  title: "추첨회!"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러고 보니 아까 놀다가 추첨권 받았는데, 해 볼래?」"
    - "눈을 반짝이는 파머를 보자 %YOU%도 덩달아 즐거워져 추첨하는 가게를 찾았다."
    - if: d.dice === 1
      lines:
        - "2등: 당근 한 개……"
        - "노점 주인 「축하해! 경품은 당근 한 개야!」"
        - "손에 든 당근 한 개를 보며 작게 한숨을 내쉬었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「당근 하나라도 좋아. 돌아가서 구워 먹는 것도 나쁘지 않겠네.」"
        - "파머는 당근을 손에 든 채 여전히 즐거워 보였다."
        # 体力+200
    - if: d.dice === 2
      lines:
        - "1등: 당근 한 바구니"
        - "노점 주인 「축하해! 경품은 당근 한 바구니야!」"
        - "꽤 큰 바구니였다. 요리를 잔뜩 만들 수 있겠다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오, 당근이 잔뜩! 이거면 다 같이 나눠 먹을 수 있겠네!」"
        - "파머는 바구니째 들어 올리며 자연스럽게 미소 지었다."
        # 能力+5
    - if: d.dice === 3
      lines:
        - "특등: 당근 햄버그!"
        - "노점 주인 「축하해! 특등 경품인 당근 햄버그야!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「당근 햄버그! 이거 1등이야! 완전 좋아!」"
        - "눈앞의 당근 햄버그를 보고 파머의 눈이 반짝였다."
        - "놀라움으로 가득했던 눈빛이 이내 가라앉더니, %YOU%을(를) 돌아봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기, 같이 먹을래?」"
        - "파머는 고개를 숙여 뺨을 살짝 긁고, 내려온 앞머리 사이로 이쪽을 바라봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그, 트레이너가 뽑은 거니까, 그러니까……」"
        # 全能力+10
        - acc: 1
          content: "「좋아, 같이 돌아가자!」 (호감 +20)"
          lines:
            - "대답을 예상했는지 파머는 웃으며 %YOU%의 손을 잡고 %YOU%의 집으로 달리기 시작했다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「빨리빨리, 배고파. 얼른 돌아가자!」"
            - "파머의 목소리에 어리광이 섞였다. 지금은 그 모습이 무척 귀여웠다."
            - "물론 가볍게 달릴 때 가슴이 흔들리는 모습도 그 귀여움에 한몫했다……"
        - acc: 2
          content: "「파머가 먹어. 네 추첨권이잖아.」 (연모 +4)"
          lines:
            - "대답을 듣자 파머의 얼굴이 조금 굳었다. 예상하지 못한 답이었던 모양이다."
            - "들떠서 쫑긋거리던 귀도 처지고 표정까지 어두워졌다."
            - "그렇게 풀이 죽은 파머를 보니, 하려던 말도 도로 삼키게 됐다."
            - acc: 1
              content: "「그러고 보니 좀 배가 고프네……」"
            - "방금 처졌던 귀가 갑자기 쫑긋 서더니, 다음 말을 기다리는 표정이 됐다."
            - "귀여운 파머를 보며 %YOU%은(는) 머리를 긁적이고 정말 배가 고픈 척했다."
            - "배고픈 척하고 있자 파머가 옷자락을 살짝 잡았다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「나한테 맛있는 햄버그 있는데, 같이 먹을래?」"
    - if: d.dice === 4
      lines:
        - "특등: 온천 여행권"
        - "노점 주인 「오! 이건!」"
        - "노점 주인 「온천 여행권이야! 축하해!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오, 온천 여행권! 트레이너, 봐!」"
        - "파머는 들뜬 채 손에 든 여행권을 보고는 %YOU%을(를) 돌아봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말 당첨됐어…… 실감이 잘 안 나……」"
        - "두 사람은 손에 든 경품을 보며 한동안 들뜬 채 서 있었다. 주변에서 한마디 하고 나서야 겨우 움직였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어쩌지, 두 사람 몫의 온천 여행권이라니…… 아, 트레이너. 같이 갈래?」"
        - "파머의 목소리는 살짝 들떠서 진지하게 묻는 것처럼 들리지 않았다."
        - "하지만 %SEX%를 보니 푸른 눈에는 약간의 기대가 담겨 있었다."
        - "이런 파머를 보면 조금 놀리고 싶어진다. 정말 귀여우니까."

hot_spring_notify:
  - color: %COLOR%
    content: "【%CHARA%와 함께 온천에 가자!】"

# 抽選した年の12月
# 券あり or 恋慕90
hot_spring:
  title: "온천 여행"
  lines:
    - "파머와 함께 승리를 거둔 뒤, 어느 날——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(이제 슬슬~ 때가 됐겠지?)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(아, 그래도 %YOURSEX%가 내키지 않는다고 하면 어떡하지……)"
    # CFLAGNAME:52 = 育成用変数
    - if: era.get('cflag:64:52')?.hot_spring !== 1
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(모처럼 온천 여행권을 한 사람 몫 더 준비했는데……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(좋아…… 일단 기세가 중요해! 단숨에 권해 보자!)"
    - "어디서 솟았는지 모를 기세로 파머가 사무실 문을 힘차게 밀어 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너! 온천 갈 시간이야~ 후후~!」"
    - acc: 1
      content: "「갑자기 왜…… 무슨 일 있어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아니. 전에 온천 여행권 당첨됐잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자…… 지금이 쓸 때 아니겠어!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자신에게 주는 포상도 중요해~ 로컬 열차 타고 온천 마을로 가자~ 후후~」"
    - "파머는 가슴 앞에서 주먹을 쥐며 단호하게 말했다."
    - acc: 1
      key: select
      content: "「응, 가자.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말? 괜찮아?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(아하~, 다행이다……)"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(무시당하고 혼자 가라는 말 안 들어서 다행이야.)"
        - "파머는 한숨을 돌리고 조금 기쁜 듯 %YOU%의 어깨를 살짝 잡았다."
        - "%YOU%이(가) 조금 의아하게 바라보는 가운데 파머는 온천 여관까지 가는 길을 알아봤다."
        - divider: true
          content: "온천 여관."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아~, 역시 온천 최고다!」"
        - "온천을 즐기고 돌아온 파머는 방에서 힘을 빼고 상체를 느긋하게 좌우로 흔들었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「레이스에선 꽤 부딪히니까, 온천 효과가 정말 좋네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘까지 열심히 하길 잘했어~」"
        - "그렇게 말하며 파머는 다시 가볍게 기지개를 켜고 길게 숨을 내쉬었다."
        - acc: 1
          content: "「정말 수고했어.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응, 트레이너도.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「계속 곁에서 지도해 줬으니까 피곤하지?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘은 둘 다 다른 생각 말고 푹 쉬자~」"
        - "헬리오스 %THEY%와 함께할 때의 갸루 같은 파머도 좋다. 하지만 본래의 %SEX%도 정말 대화하기 편한 상대다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 맞다. 아까 온천에서 젖은 수건 말려 뒀어. 마르면 써.」"
        - acc: 1
          content: "「응, 고마워.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 맞다! 트레이너, 차 마실래?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「미리 타서 좀 식혀 둘게.」"
        - acc: 1
          content: "「응, 부탁해.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응, 맡겨 둬.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - acc: 1
          content: 「……」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이 대화 분위기……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「집에 있는 것 같아……!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「온천 여행인데 집 같다고!?」"
        - "집에 있을 때처럼 격식을 차릴 필요가 없다. 힘을 빼고 있으니 무척 편안하다……"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아아~ 안 돼~ 이대로 조용히 있으면 완전히 이 분위기에 녹아들겠어.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「여행 온 느낌이 안 나잖아!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응, 휴가 분위기가 부족해!」"
        - "파머는 힘주어 상체를 일으키더니 갑자기 진지해졌다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「좀 더, 더 신나게 놀아야지~」"
        - "%YOU%의 눈에는 파머가 굳이 필요 없는 의욕을 불태우는 것처럼 보였다."
        - "그 뒤 분위기는 금세 묘해졌다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너, 저녁……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 아니지. 일식 디너야!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오, 봐 봐. 이 회! 엄청 회답네~」"
        - acc: 1
          content: "「회니까 그렇지.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그리고~ 전골 맛도 완전 좋아~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「합작 기획으로 밥이랑 우동을 같이 넣어 볼까~」"
        - acc: 1
          content: "「아, 좋아. 마무리로 먹을 때……」"
        - "파머의 노력으로 전통 여관은 파티장이 됐다. 그리고——"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 트레이너! 저기 안마의자 있어!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「보기만 해도 신나~!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「강도를 최대로 하고 앉아 볼까~」"
        - acc: 1
          content: "「먼저 해 볼래?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「좋아, 그럼 내가 앉아 볼게!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이런 건 파티 정신이 있는 사람이 먼저 즐겨야지!」"
        - "파머는 가벼운 발걸음으로 안마의자에 달려가 자세를 잡았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「한 번으론 부족해. 바꿔 온 동전 전부 넣을게!」"
        - "동전이 잔뜩 투입되고 기계가 작동하는 소리가 들렸다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「다음은…… 초강력 마사지!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「시작!!」"
        - "파머의 외침과 동시에 안마의자가 요란하게 작동하기 시작했다."
        - "거센 진동 속에서 파머의 얼굴도 금세 일그러졌다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아파, 트레이너. 이거 장난 아니야!!」"
        - "안마의자 소리가 계속되는 가운데 파머도 이상한 소리를 냈다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「앗! 죽겠어! 죽겠다고!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「도망…… 대도주할 거야아아!!」"
        - "파머의 목소리는 기합으로 가득했지만 운은 그다지 좋지 않은 모양이다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「으아아아, 옷 리본이! 의자에 엉켰어!! 망했다!!」"
        - "잠깐 고요해진 뒤 다시 한바탕 소란이 일었다."
        - "그렇게 밤이 점점 깊어졌다."
        - "겨우 안마의자의 마수에서 벗어난 파머는 힘없이 %YOU%에게 기대었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「큰일이네, 좀 너무 놀았나 봐. 하하……」"
        - "파머의 미소에는 조금 무리가 있었다. 방으로 돌아와서도 기운이 없어 보였다."
    - if: era.get('cflag:65:66') === 1 && era.get('relation:65:0') >= 0
      acc: 2
      content: "「헬리오스도 부를까?」"
      lines:
        - "세 사람은 열차를 타고 온천 여관으로 향했다."
        - "하지만 온천의 따뜻함을 즐긴 뒤에는 혼자 먼저 나오게 됐다."
        - "온천이 불편해서가 아니다. 옆에서 들리는 소란이 너무 시끄러웠다."
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「간지럼 태운다~!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그만해, 헬리오스! 가라앉겠어!」"
        - "옆에서 들리는 소란에 %YOU%도 못 들은 척할 수밖에 없었다."
        - "늘 그랬듯 먼저 우유를 챙겼다. %THEY%도 곧 나올 것이다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응? 트레이너도 나왔어?」"
        - "%YOU%이(가) 우유를 집어 들자 마침 뒤에서 파머의 목소리가 들렸다."
        - acc: 1
          content: "「먼저 나왔어. 아까……」"
        - "한참 참았던 %YOU%은(는) 파머 쪽을 보고 하려던 말을 삼켰다."
        - "평소 멋지게 하나로 묶었던 머리가 지금은 물방울을 머금은 채 어깨 위로 흘러내려, 늘 보던 털털한 인상을 지우고 있었다. 그 모습이 %YOU%의 내면 어딘가를 강하게 파고들었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너? 오래 담가서 어지러워?」"
        - "파머는 %YOU%이(가) 무슨 생각을 하는지 몰랐다. 평소처럼 자연스럽게 다가와 %YOU%의 머리로 손을 뻗었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응? 그렇게 뜨겁진…… 어? 왜 점점 뜨거워져?」"
        - "이상한 열기를 느낀 파머가 멍하니 자기 손을 봤다. 손바닥에 전해지는 온도가 올라가고 있었다."
        - "조금 멍해진 %YOU%은(는) 그 자리에 서서 얼굴이 달아올랐다."
        - acc: 1
          content: "「먼저 옷부터 입어. 감기 걸리겠어. 어서.」"
        - "당황해서 파머를 밀어 보내고 진정하려고 돌아선 순간, 오히려 손을 붙잡혔다."
        - "아직도 몸이 안 좋다고 생각한 파머가 조금 억지로 손가락을 잡았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「안 돼. 지금 트레이너, 아픈 거잖아?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「늘 트레이너가 도와줬으니까, 이번엔 내가 간호할게!」"
        - "%YOU%의 손을 단숨에 끌어당기고 새빨개진 얼굴을 바라봤다."
        - "조용한 방에 둘뿐이라 분위기가 더욱 어색해졌다."
        - "파머는 그걸 눈치채지 못하고 %YOU%을(를) 옆의 긴 의자에 앉히려 했다."
        - "상황이 이상하게 흘러가자 %YOU%은(는) 머리를 빠르게 굴렸다."
        - acc: 1
          content: "「그러고 보니 헬리오스는? %SEX%가 안 보이네.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「헬리오스는 아직 온천에 있어. 좀 더 놀고 싶다고……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……아니, 트레이너 또 말 돌리고 있잖아.」"
        - "화제를 돌리는 데 실패했다. 파머가 자연스럽게 몸을 붙이고 이마를 맞대 열을 쟀다."
        - "%SEX%가 그렇게 고개를 숙인 순간, 불룩 솟은 것이 눈에 들어왔다."
        - "이제 두 사람 사이에는 심장 뛰는 소리밖에 들리지 않았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「와, 와와……」"
        - acc: 1
          content: "「이건…… 파머가 생각하는 그런 게……」"
        - "파머의 얼굴까지 붉게 물들고, 다급히 옆으로 조금 물러섰다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(트레이너가…… 나한테…… 아냐, 아냐. 생리 현상이야. 트레이너의 의지는 아니야. 응, 트레이너는 성실한 사람이니까 분명 그럴 거야.)"
        - "가슴속 묘한 감정을 억누르며 옆을 바라봤다."
        - "%YOU%도 그 자리에 앉아 파머를 바라보고 있었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기, 괜찮아?」"
        - "이런저런 생각 끝에 파머는 아무 일도 없는 척하기로 했다."
        - "조용하고 조금 묘한 분위기가 두 사람 사이에 남았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(무슨 생각 하는 거야, 파머. 지금이 나설 때잖아. 용기를 내!)"
        - "얼마나 고민했는지는 모르겠다. 파머는 손으로 자기 뺨을 가볍게 두드리고 다시 %YOU%을(를) 바라봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저기! 트레이너는…… 나 때문에, 그런 거야?」"
        - "질문 뒤에 돌아온 것은 %YOU%의 침묵이었다. 그저 말없이 바라볼 뿐이었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "(침묵은 긍정이라고, 시티가 그랬어.)"
        - "마음을 굳힌 파머는 %YOU% 쪽으로 다가갔다. 손은 여전히 불안한 듯 흘러내린 머리카락을 쓸어 넘겼다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 트레이너는…… 마음은 어떤데?」"
        - acc: 1
          content: "「그건…… 좋아해.」"
        - "대답을 들은 파머는 기쁜 놀라움에 고개를 들어 %YOU%을(를) 바라봤다."
        - "두 사람의 얼굴은 아주 가까웠다. 조금만 더 다가가면 서로의 입술에 닿을 거리였다."
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「웨이! 온천 완전 좋다!」"
        - "문 앞에 선 헬리오스가 헛기침하는 두 사람을 바라봤다."
        - color: %COLOR_65%
          content:
            - fontWeight: bold
              content: %HELIOS%
            - "「어!? 감기 걸렸어?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아냐, 그냥 그…… 카페오레! 사레들렸을 뿐이야!」"
        - "얼버무린 파머는 다이타쿠 헬리오스가 음료를 가지러 가는 걸 보고서야 숨을 돌렸다."
        - "아무 일도 없는 척하다가 헬리오스에게 들리지 않는 걸 확인하고 어색한 표정으로 %YOU%의 귀에 입을 가까이 댔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「들었는데, 여기 혼욕 온천도 있대.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그러니까 이따…… 늦은 시간에, 같이.」"
      # 恋慕+6

################################
# ランダムイベント
################################

lunch_break:
  title: "점심시간을 놓쳤어"
  lines:
    - "식당에 갓 도착한 %YOU%의 눈에 왠지 모르게 바빠 보이는 파머가 들어왔다."
    - "호기심에 조용히 앉아 몰래 지켜보기 시작했다."
    - "%UMA%A 「파머~ 내 말 좀 들어봐~ 우리 엄마가 말이야~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭔데 뭔데? 무슨 일이야? 전부 다 말해줘~!」"
    - divider: true
      content: "잠시 후"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자, 이제 더 고민 있는 사람 없지? 그럼 드디어 기다리고 기다리던 점심시간이다~」"
    - "파머가 신나게 몸을 움직여 점심을 챙기려던 찰나, "
    - "수업 시작을 알리는 종소리가 때마침 울려 퍼졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잠깐만, 점심시간 너무 짧은 거 아냐!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내 점심이——!」"
      # やる気down、体力-50

#クラシック級以降、外出時ランダム
dis_talent:
  title: "거리감의 천재"
  lines:
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「……이쪽이 맞겠지?」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「아니라니까, 참 나」"
    - "파머와 %YOU%이(가) 외출 후 돌아오는 길에 쇼핑몰에 들렀다가, 우연히 이 보기 드문 조합이 고민에 빠진 모습을 발견했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안녕~ 너희들 여기서 뭐 해?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「선물 코너…… 그럼 누군가에게 줄 선물을 고르는 거야?」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「우왁! 너, 너 언제 그렇게 갑자기 다가온 거야」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「둘 다 한참 고민하고 있는 것처럼 보였으니까~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이래 봬도 요즘 유행에는 꽤 빠삭하다고, 어쩌면 너희를 도와줄 수 있을지도 몰라!」"
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「……그럼 부탁하지, 생각하느라 지쳤어」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇구나, 하야히데가 개인 최고 기록을 경신해서 축하 선물을 해주고 싶었던 거네」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데 같은 생각을 한 두 사람이 마침 여기서 딱 마주친 거고!」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「……선물이 겹치면 곤란하니까, 같이 사는 게 낫겠다고 생각했는데」"
    - acc: 1
      content: "「결국 의견이 안 맞아서 못 고르고 있었구나」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음, 그럼 우선 각자 괜찮다고 생각한 선물부터 보러 갈까?」"
    - "파머는 두 사람의 어깨를 활기차게 두드리며 쇼핑몰 안을 걷기 시작했다."
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「……언니는 바나나를 좋아하니, 선물을 줄 거면 바나나로 하지」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아~ 좋아하는 걸 주는 게 좋지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나도 괜찮다고 생각하는데, 어디가 마음에 안 드는 거야?」"
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「……지금은 적절하지 않다나 봐」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음~ 지금 안 된다는 건…… 체중 관리 때문이야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「개인 기록을 경신할 정도로 컨디션이 좋은데, 간식 때문에 살이 쪄서 상태가 나빠지면 큰일이니까!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그게 타이신의 상냥한 점이구나~」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「아, 아냐!」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「난 그냥 하야히데의 노력이 헛수고가 되지 않았으면 할 뿐이야!」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「이 정도면 충분히 알아들었지!」"
    - "나리타 브라이언의 의문을 해결해 준 뒤, 일행은 나리타 타이신이 사고 싶어 하는 선물이 있는 가게로 향했다."
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「내 생각엔, 저 검은색 옷이 괜찮은 것 같아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응응! 성숙해 보여서 하야히데한테 잘 어울리겠는데?」"
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「……이건 축하 선물이라고」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아~ 축하 선물인 만큼 좀 더 밝은색 옷을 사는 게 낫겠다는 거지?」"
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「……하지만」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만~ 딱히 대안이 없어서 강하게 부정할 수도 없다는 거네」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「난 그냥 우리 취향이 달라서 그런 줄 알았는데…… 그런 거였구나」"
    - "파머는 마치 통역사처럼 두 사람 사이를 오가며 서로의 의견을 조율해 주었다."
    - "점원 「감사합니다!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이야, 무사히 결정해서 다행이다. 하야히데도 분명 기뻐할 거야!」"
    - color: %COLOR_50%
      content:
        - fontWeight: bold
          content: %TAISHIN%
        - "「응…… 뭐 하야히데한테 도움이 되긴 하겠지만……」"
    - color: %COLOR_16%
      content:
        - fontWeight: bold
          content: %BRIAN%
        - "「……그래도 역시 너무 평범한 거 아닐까」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 괜찮잖아? 이건 너희가 진지하게 고민해서 고른 거니까~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하야히데도 이런 헤어 케어 제품은 효과도 좋고 레이스에도 방해 안 된다고 늘 말하곤 했어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고…… 상대를 배려하는 마음은 분명 선물을 통해 전해질 거야!」"
    - "나리타 브라이언과 나리타 타이신이 떠나는 뒷모습을 보며, 파머는 그제야 %YOU%과(와) 함께 돌아가는 길에 올랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이야~ 사건 해결이네! 잘됐다 잘됐어」"
    - acc: 1
      content: "「완벽한 중재자 역할을 해냈구나」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아하하, 사실 난 별거 안 했어」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX%들은 처음부터 하야히데를 생각하는 마음은 똑같았거든」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「난 그저 %SEX%들의 의견을 알기 쉽게 말로 풀었을 뿐이야!」"
    - acc: 1
      key: select
      content: "「그건 결코 간단히 할 수 있는 일이 아니야」（호감도+10）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「에이~, 말도 잘하네. %SELF_CALL%, 쑥스럽잖아.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그래도 트레이너도 참 대단해!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내가 길을 잃지 않도록 항상 나를 이끌어주고 있잖아!」"
        - acc: 1
          content: "「그럼 서로서로 돕는 셈이네」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그렇네~」"
        - "그렇게 %YOU%과(와) 파머는 즐겁게 이야기를 나누며 집으로 향했다."
    - acc: 2
      content: "「너한테 한 수 배웠는걸」（애정도+2）"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「！」
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아하하, 이거 꽤 신나는걸. 평소엔 항상 트레이너가 날 가르쳐 줬으니까」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼…… 그렇게까지 말해준다면…… 이제부터 파머 선생님이라고 불러줄래?」"
        - acc: 1
          content: "「알겠습니다, 파머 선생님~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「미안, 역시 취소!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내 실력에 비해 과분한 호칭이라 너무 민망해」"
        - acc: 1
          content: "「그럴 리가요, 파머 선생님」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이제 그만해~」"
        - "파머는 볼을 부풀리며 %YOU%의 농담을 끊으려 했다."
        - "두 사람은 장난을 주고받으며 집으로 향했다."

#シニア級以降、外出時にランダム
choice:
  title: "궁극의 선택!"
  lines:
    - "여느 때와 다름없는 평범한 휴일, 파머와 %YOU%이(가) 함께 장을 보러 나갔을 때——"
    - "파머의 스마트폰이 갑자기 울렸다. 아무래도 메시지가 도착한 모양이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라, 도베르가 메시지를 보냈네. 무슨 일이라도 생겼나?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어디 보자……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 방송국 녹화가 있는데, 너무 긴장돼서 말을 제대로 못 할 것 같아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오, 도베르가 오늘 녹화 가는 날이었구나!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「진작 나한테 부탁했으면 좋았을 텐데, %SEX%는 너무 혼자 애쓴다니까~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「미안, 트레이너! 나 잠깐 갔다 올게!」"
    - "시간이 공교롭게 겹친 것인지, 아니면 그쪽 상황이 정말 급한 것인지, "
    - "파머가 스마트폰을 집어넣자마자 다시 한번 알림음이 울렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라, 또 왔네. 도베르 %SEX%가 그렇게 급한가……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응? 아냐, 이번엔 브라이트인데?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……전철에서 깜빡 졸았는데, 깨보니 모르는 역에 와버렸어」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하필이면 이럴 때!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아~ 어쩌지? 브라이트를 그냥 놔두면 걱정되는데……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 도베르도 그냥 둘 순 없고……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으와아, 어떡하면 좋지……」"
    - "평소 사람들을 능숙하게 대하던 파머도 이번에는 당황해서 불안한 듯 이리저리 서성거렸다."
    - "아마 이럴 때는 %YOU%이(가) %SEX%를 대신해 결정을 내려주는 편이 좋을 것이다."
    # どちらを選んでもスピード+15
    # チーム内ならスピード+25、好感+25
    - acc: 1
      key: select
      content: "「도베르를 도와주러 가자」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「도베르…… 하지만 브라이트가……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「맞다! 아르당은 오늘 한가할 거야!」"
        - "파머는 금세 표정이 밝아지더니 메지로 아르당에게 전화를 걸었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「——아, 여보세요? 아르당?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「브라이트 건으로 부탁하고 싶은 게 있어!」"
        - "전화기 너머의 아르당이 승낙하자, 파머와 %YOU%은(는) 즉시 메지로 도베르가 있는 방송국으로 향했다!"
        - if: era.get('cflag:59:66') !== 1
          lines:
            - "하지만——"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「빨간불! 아하하……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「이럴 때 빨간불에 걸리면 정말 초조하단 말이지~」"
            - "간신히 신호 하나를 넘었으나, 다음 신호에서 다시 발이 묶였다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「어라, 또 빨간불? 오늘 운이 정말 없네……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「에에, 저기도 빨간불!?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「아…… 이러다간 늦겠는걸?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「어쩔 수 없지, 미안 트레이너! 나 %UMA% 전용 코스로 갈게!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「함께해줘서 고마워!」"
            - "파머는 주저 없이 %UMA% 전용 도로로 올라섰고, %YOU%에게 미안하다는 손짓을 보낸 뒤 방송국 방향으로 달려나갔다."
        - if: era.get('cflag:59:66') === 1
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「후우, 다행히 녹화 시간에는 맞춘 것 같네」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「어디 보자, 도베르는 어디 있으려나~」"
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - "「파머! 미안해, 번거롭게 여기까지 오게 해서…… 하지만, 고마워」"
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - "「나 혼자서도 괜찮을 줄 알았는데, 막상 촬영에 들어가려니 나……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「아하하, 알지 알지!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「사실 나도 꽤 잘 긴장하는 편이거든~」"
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - "「에, 파머도 그래?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「당연하지!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「말은 제대로 할 수 있을지, 이상한 소리를 하지는 않을지 걱정되기도 하고」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그래도 결국엔 어떻게든 잘 풀리게 되어 있어~」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「인터뷰하는 기자님은 이쪽 전문가시고, 무엇보다 이건 생방송도 아니니까~」"
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - "「그렇구나…… 응, 그러네. 진정만 한다면……」"
            - color: %COLOR_59%
              content:
                - fontWeight: bold
                  content: %DOBER%
                - "「고마워…… 이제 할 수 있을 것 같아……!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그렇구나! ……응응, 잘됐다~」"
    - acc: 2
      content: "「브라이트를 데리러 가자」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「브라이트…… 하지만 도베르 쪽은……」"
        - acc: 1
          content: "「라이언에게 부탁하면 되잖아」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, 맞다! 아하하, 깜빡했네!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「라이언이라면 도베르도 잘 아는 사이니까, 그게 좋은 방법일지도 모르겠네」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응, 라이언 번호가 어디 있더라……」"
        - "메지로 도베르 쪽 문제를 해결한 뒤, 파머와 %YOU%은(는) 즉시 메지로 브라이트가 있는 역으로 향했다!"
        - if: era.get('cflag:74:66') !== 1
          lines:
            - "하지만——"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「내 기억으론 다음다음 역에서 갈아타야 했던 것 같은데, 잠깐 쉬자」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「어라? 저기 사람 엄청 많네, 무슨 일 생겼나 봐」"
            - "구내 방송 「——승객 여러분께 알립니다. 현재 열차 내부 사고로 인해 열차 도착 시간이 지연되고 있습니다.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「……오, 꽤 오래 기다려야겠는걸」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「어쩌지, 택시를 불러도 되지만……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그래도 이 정도 거리라면 남은 길은 뛰어갈 수 있겠어」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「응, 그럼 다녀올게!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「트레이너, 여기까지 함께해줘서 고마워!」"
        - if: era.get('cflag:74:66') === 1
          lines:
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - "「파머~ 와주셨군요~!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「무사해서 다행이야~」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「브라이트는 여전히 느긋하네」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그래도 다행히 그때보다는 멀지 않네!」"
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - "「그때라뇨?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「예전에 아오모리까지 가버린 적 있었잖아?」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「아르당한테 전화해서…… 그 뒤에 다 같이 몇 시간이나 달려서 너 데리러 갔었잖아」"
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - "「어머나…… 후훗, 그런 일도 있었지요~」"
            - color: %COLOR_74%
              content:
                - fontWeight: bold
                  content: %BRIGHT%
                - "「하지만 이제 그렇게 멀리까지 가진 않아요. 저도 이제 어른이 되었으니까요~」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그래…… 그렇게 말하니 좀 섭섭한걸」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그땐 다 같이 여행 가는 기분이라 꽤 즐거웠거든!」"

# 恋慕74未満、ヘリオスの恋慕49未満、ランダム
confused:
  title: "방황하는 연심"
  lines:
    - "트레센 근처의 강둑에서는 언제나 많은 %UMA%들이 아침 트레이닝을 하고 있다."
    - "메지로 파머는 홀로 강가에 앉아 그 모습을 바라보며, 가볍게 한숨을 내쉬고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아……」"
    - "활기차게 달리는 %UMA%들을 보고 있자니, 홀로 앉아 고민하는 자신이 더욱 겉도는 것 같았다."
    - "파머의 고민이 마음속에 가득 쌓여가던 그때, 기분을 밝혀줄 태양이 떠올랐다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「안뇽~! %65_CALL%!」"
    - "등 뒤에서 갑자기 껴안아 오는 다이타쿠 헬리오스가, 더없이 밝은 목소리로 파머의 기분을 밝게 비추었다."
    - "아침부터 전력으로 한참을 껴안고 나서야, 숨이 조금 가빠진 파머를 놓아주고는 옆자리에 앉았다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「왜 그래? 아침부터 그런 표정을 짓고~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋은 아침…… 아, 표정이 이상했어?」"
    - "파머는 얼굴을 붉히며, 곁에 있는 단짝 친구를 향해 웃어 보였다."
    - "하지만 미소는 오래가지 않았고, 이내 다시 미묘한 표정을 지으며 풀이 죽은 채 자신의 두 손을 내려다보았다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「안 좋아, %65_CALL%의 표정 겁나 안 좋아——」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「자 자, 무슨 일인지 말해봐!」"
    - "옆에 앉은 다이타쿠 헬리오스는 양손을 마구 흔들다가, 마지막에는 진심 어린 태도로 파머의 팔을 붙잡았다."
    - "푸른색과 검은색이 섞인 머리카락이 시야에서 너풀거리자, 파머의 가라앉은 마음도 조금 움직였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사실은…… 사실 아무 일도 아냐……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아니, 역시 엄청나게 큰일이야」"
    - "파머는 움츠러들었던 몸을 옆에 있는 다이타쿠 헬리오스에게 살짝 기대며, 천천히 입을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나 말야, 트레이너를 좋아해. 그것도……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「도저히 돌이킬 수 없을 정도로 좋아해」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「어레?」"
    - "파머의 고민을 듣자, 다이타쿠 헬리오스는 오히려 어색하게 굳어버렸다."
    - "곁에서 떨고 있는 단짝 친구를 보며, 당황한 채 필사적으로 머리를 굴렸다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「그게, %65_CALL%도 너무 그렇게, 아……」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「사실 %65_CALL%이 직접…… 그……」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「그냥 %CALLNAME_65%한테 직접 말하면 되잖아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말?」"
    - "다이타쿠 헬리오스가 생각을 포기하고 내뱉은 대답이었지만, 파머의 어두웠던 표정은 다시 밝아졌다."
    - "흐릿했던 눈동자에 밝은 광채를 띠며 단짝 친구를 바라보았다. 무언가 말하고 싶은 듯하면서도 차마 직접 꺼내지는 못하는 모습이었다."
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「그, 그럼그럼! %65_CALL%은 멋지기도 하고 귀엽기도 하니까, 분명 단번에 트레이너를 공략할 수 있을 거야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「멋지고…… 귀엽고……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래, 트레이너도 말했었지」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「진정한 나의 모습을 보고 싶다는 그런 말…… 응?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(나만의 달리기 방식, 나만의 선택……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(그게 바로…… 진정한 나인 걸까?)"
    - "힘없이 처져 있던 팔에 갑자기 힘이 들어갔고, 전신의 피로감도 순식간에 사라졌다."
    - "파머는 자리에서 일어나 꽉 쥔 두 손을 바라보았다. 그러자 마음도 한껏 들떴다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왠지 할 수 있을 것 같아……!」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「진짜!? 그럼 이제 하이텐션으로 가는 거야……」"
    - color: %COLOR_65%
      content:
        - fontWeight: bold
          content: %HELIOS%
        - "「%65_CALL%, 얼굴! 완전 빨개!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 그래?」"
    - "파머는 붉어진 뺨을 손으로 살짝 긁적이고는 몸을 돌려 강둑을 달리는 %UMA%들을 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(트레이너가 보고 싶어 한다면, 그런 모습으로……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(트레이너도 좋아해 주겠지?)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기, 나 먼저 좀 뛰고 올게」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고마워, 나의 태양!」"
    - "자신을 격려해준 단짝 친구에게 고마움을 전한 뒤, 파머는 오늘의 아침 트레이닝을 시작했다."
    - "부끄러움인지 흥분인지, 혹은 운동 때문인지 알 수 없는 홍조를 띤 채 산책하던 %YOU%과(와) 부딪힐 때까지."

#恋慕＞74、睡眠姦の条件を満たす
a_step:
  title: "앞으로 내딛은 한 걸음"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「요즘 트레이너, 조금 차가운 것 같지 않아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「설마 트레이너가 나에게 벌써……!」"
    - "파머는 떨리는 손으로 스마트폰을 들어 %YOU%의 전화번호를 찾아냈다."
    - "하지만 통화 버튼을 누르기 직전, 다시 망설임이 찾아왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「직접 전화하는 건 너무 성급한 걸까……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아아…… 정말 어떡해야 하지!」"
    - "파머는 머리를 감싸 쥐고 고민하며 좌우로 안절부절못하고 서성였다."
    - "제자리에서 한참을 뱅뱅 돌고 나서야 무언가 깨달은 듯 동작을 멈췄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「도망가자!」"
    - "고민 끝에 내린 결론은 메지로 파머다운 대답이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아냐, 이럴 때 도망쳐봤자 소용없잖아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어떡하면 좋냐고!」"
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「어라, 파머?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앗, 아르당? 아아, 무슨 일이야?」"
    - "상대가 누구인지 확인한 파머는 당황하며 아무 일도 없었다는 듯 행동했다."
    - "안타깝게도 그 이전에 메지로 아르당은 이미 모든 것을 지켜보고 있었다."
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「이럴 때는 본인에게 직접 가서 말하는 편이 좋다고 생각해요」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에?」"
    - "파머는 태연한 척하려다 말고, 미소 짓는 메지로 아르당을 멍하니 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「직접 가서……」"
    - "꼬리는 기운 없이 살랑거렸고, 두 손은 불안한 듯 겹쳐 있었다."
    - "메지로 아르당은 부드럽게 파머의 어깨를 툭 치며 격려하는 표정을 지어 보였다."
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「아무것도 하지 않으면 달라지는 것도 없겠지만」"
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「파머가 먼저 다가가면 분명 답을 들을 수 있을 거예요」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응답……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「알았어…… 한번 해볼게!」"
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「후훗~」"
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「그런데, 아까부터 뭘 고민하고 있었던 건가요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에? 아아아! 아무것도 아냐!」"
    - "파머는 얼굴을 붉게 물들인 채 메지로 아르당 앞에서 도망치듯 사라졌다."
    - color: %COLOR_71%
      content:
        - fontWeight: bold
          content: %ARDAN%
        - "「어머?」"

# ファン襲撃（恋慕＞74）
crazy_fan_end:
  title: "도망칠 힘조차 없이"
  lines:
    - "이미 얼마나 시간이 흘렀는지 알 수 없으나, 변한 것은 아무것도 없었다."
    - "대체 얼마나 지난 것일까? 이미 알 도리가 없었다."
    - "도대체 무엇을 한 것일까? 전혀 알 수 없었다."
    - "유일한 기억은, 그날 몇 명의 팬들이 %YOU%을(를) 향해 달려오던 모습뿐이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너, 일어났어?」"
    - "파머는 곁에 앉아 평온하고 고요한 %YOU%의 얼굴을 바라보고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 우리 이제 가야겠네」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「언제쯤이면 안정을 찾을 수 있을까」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도 함께 있을 수만 있다면 그걸로 됐어」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있지, 언제쯤 나랑 다시 이야기해 줄 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나의 트레이너」"
    - "차가운 액자를 어루만지면서도, 파머는 웃음을 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당신만 곁에 있다면, 난 뭐든지 할 수 있으니까……」"
