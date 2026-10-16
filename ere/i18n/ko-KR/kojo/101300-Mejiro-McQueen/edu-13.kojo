# @file メジロマックイーン - 育成
# @author 伊兰
# @author Claude (翻訳)
train:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「가겠어요!」"
  - "맥퀸의 투지에 찬 말과 함께, 훈련이 본격적으로 진행되었다."

train_success:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후후, %CALLNAME%과(와) 함께 승리에 한 발짝 더 가까워졌네요.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어떤가요? 오늘의 %CALLNAME%도 제 달리는 모습에 매료되지 않았나요?」"
            - "결과적으로 %YOU%의 끊이지 않는 칭찬을 몇 분 동안 듣고서야, 맥퀸의 가벼운 발길질과 함께 상황이 마무리되었다."
    -

train_fail:
  title: "트레이닝 실패"
  lines:
    - "%YOU%은(는) 훈련장에서 부상을 당한 맥퀸을 부축해 보건실로 데려가 %SEX%를 침대에 눕혔다."
    - "맥퀸은 몹시 분해하는 기색이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「설마 훈련장에서 부상을 당하다니……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%에게 폐를 끼쳐서 정말 죄송해요.」"
    - acc: 1
      content: "「오늘은 쉬는 게 좋겠어.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네? 겨우 이 정도 상처인데……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이런 일로 걱정하신다면, 당신의 마음이 편안해질 틈이 없으실 거예요.」"
        - acc: 1
          content: "「네 안전을 위해서라면 편안하지 않아도 상관없어.」"
          lines:
            - "%YOU%의 단호함에 말문이 막힌 듯, 맥퀸은 잠시 멍하니 있다가 이내 어쩔 수 없다는 듯 미소를 지었다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「정말 못 말리겠네요.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그럼, 오늘은 얌전히 쉬도록 할게요.」"
            - "의사가 맥퀸의 치료를 마친 뒤, %YOU%은(는) %SEX%를 기숙사까지 배웅했다."
    - acc: 2
      content: "「다음부터는 트레이닝할 때 조심해.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그렇네요. 이런 초보적인 실수를 하다니, 역시 제가 너무 부주의했어요.」"
        - "맥퀸은 당시의 상황이 다시 떠오른 듯, 무겁게 한숨을 내쉬었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하아…… 다시금 죄송한 마음이 드네요.」"
        - "의사의 치료가 끝난 뒤, %YOU%은(는) 맥퀸을 기숙사로 돌려보내 휴식을 취하게 했다."

train_add:
  title: "뒤처지고 싶지 않아요"
  lines:
    - "이미 떠났던 맥퀸이 어째서인지 훈련 도구를 정리하던 %YOU% 곁으로 돌아왔다."
    - "%SEX%는 난처한 기색으로 한참을 머뭇거리더니, 겨우 용기를 낸 듯 말을 꺼냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기, 추가 훈련을 부탁드리고 싶어요!」"
    - acc: 1
      content: "「무슨 일 있어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「방금 돌아가는 길에 라이언을 만났는데, 훈련하러 가는 모양이더라고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「라이언이 저렇게 노력하고 있는데, 저만 쉴 수는 없어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「누가 보더라도 우아하게, 언제나 선두에서 달리는 것. 그것이 제가 목표로 하는 모습이니까요.」"
    - "두 손을 모으고 간절히 부탁하는 맥퀸을 보며, %YOU%은(는) 결정했다……"
    - acc: 1
      key: select
      content: "「그럼 확실하게 따라잡아야지!」"
      lines:
        - "%YOU%의 허락을 받자 맥퀸은 환하게 웃음을 지었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말 감사해요, %CALLNAME%. 제 진심을 알아주실 줄 알았어요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「당신이 지켜봐 주신다면 트레이닝이 과해지는 일은 없을 거예요. 철저한 트레이닝, 부탁드릴게요!」"
        - "그렇게 허용된 범위 안에서 맥퀸과 추가로 훈련했다."
    - acc: 2
      content: "「조급해하지 마.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오버 트레이닝이 될 수도 있다는 건 알지만, 그래도……」"
        - "맥퀸은 조금 다급하게 말을 잇다가, 순간 아차 싶은 듯 숨을 크게 들이마시며 침묵했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「제가 정말 조금 조급했나 보네요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「자신을 다스리지 못하면 미래는 없는 법. 『정정당당』이야말로 메지로 가문의 방식이니까요.」"
        - "맥퀸은 스스로를 설득한 뒤 고개를 숙여 사과하고는 훈련장을 떠났다."

train_success_sex:
  - "트레이너는 만족스럽게 고개를 끄덕이며 손에 든 계획표에 표시를 남겼다."
  - "하지만 시야 끝에서 달려온 맥퀸의 모습이 순식간에 다가오더니, 이내 트레이너에게 안겨 왔다."
  - "트레이너는 뜻밖의 행동을 하는 %TEEN%를 반사적으로 밀어내려 했다."
  - "하지만 %SEX%의 뺨은 달아올라 있었고, 눈빛은 유혹하는 듯했다. 격렬한 운동 뒤라 옷은 땀에 젖어 있었고, 축축한 천 아래로 살빛이 희미하게 비쳤다."
  - "게다가 %SEX%에게서 풍겨 오는 냄새가 트레이너의 충동을 자극했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저기, 적당히 발산하는 거라면…… 들어주실 거죠?」"
  - "트레이너의 품에 기댄 맥퀸이 %YOU%에게 물었다."
  - "입술을 굳게 다문 %YOU%은(는) 결정했다……"
  - acc: 1
    key: sex
    content: "「이따가 거기서 날 기다려.」"
    lines:
      - "%YOU%은(는) 억눌린 목소리로 맥퀸의 귓가에 속삭였다."
      - "마음에 드는 말을 들은 맥퀸은 즐겁게 %YOU%의 곁을 떠나, %YOU%의 「벌」을 기다렸다."
  - acc: 2
    content: "「미안, 오늘은 안 되겠어.」"
    lines:
      - "실망스러운 대답을 들은 맥퀸은 귀를 축 늘어뜨린 채 원망 섞인 눈길을 보내며 떠나갔다."

race_start:
  title: "레이스 전"
  lines:
    - "맥퀸은 가슴 위에 손을 얹고 호흡을 가다듬었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「메지로 가문의 우마무스메로서, 반드시 승리를 쟁취하겠어요.」"
    - acc: 1
      content: "「그 기세로 1착을 차지하자!」"
    - "맥퀸은 %YOU%을(를) 바라보며 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니 %CALLNAME%, 제 또 다른 승리를 지켜봐 주세요.」"
    - "%YOU%과(와) 맥퀸은 함께 기합을 넣은 뒤 경기장으로 향했다."

race_win:
  title: "레이스 승리"
  lines:
    - "코스에서 돌아온 맥퀸이 조금 흥분한 목소리로 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이겼어요…… 다행이에요.」"
    - "%SEX%는 평소의 우아함에서 벗어났다는 걸 깨닫고 다시 진지한 표정을 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 방금 일은 잊어 주세요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우승은 메지로 가문의 우마무스메라면 당연히 해내야 하는 일이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우승했다고 해도…… 우승…… 후후훗.」"
    - "평소 표정으로 돌아온 줄 알았던 맥퀸이 또다시 흐트러지고 있었다……"
    - acc: 1
      content: "「더 높은 목표를 향해 나아가자!」"
    - "그 말을 들은 맥퀸이 기쁘게 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네…… 네, 여전히 높은 뜻을 품고 계시군요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더 화려하게, 더 우아하게, 더 아름답게…… 더 높은 목표를 향해 나아가도록 해요.」"

race_5:
  title: "레이스 입상"
  lines:
    - "이번에는 입상에 그쳤다. 돌아온 맥퀸의 얼굴에는 근심이 가득했다."
    - acc: 1
      content: "「입상이지만, 열심히 했잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「열심히 했다고요? 아니요, 입상만으로는 안심할 수 없어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 원하는 것은…… 완벽한 승리예요.」"
    - "맥퀸은 한쪽 주먹을 꽉 쥐며 미간을 찌푸렸다."
    - acc: 1
      content: "「그래도 맥퀸이라면 언젠가 반드시 해낼 거야.」"
    - "%YOU%의 말을 듣고서야 맥퀸의 얼굴에 미소가 돌아왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고마워요…… 반드시 발전한 모습을 보여 드릴게요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저는 메지로 가문의 우마무스메니까요. 완벽한 승리는 제가 짊어진 사명이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러기 위해 더 강해져야만 해요.」"

race_lose:
  title: "레이스 패배"
  lines:
    - "입상하지 못했다는 것은 이번 레이스에서 패배했다는 뜻이다."
    - "후회에 잠긴 맥퀸은 눈물을 참으며 %YOU%을(를) 피해 시선을 돌리고 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「드릴 말씀이 없어요. 전적으로 제 실력이 부족했던 탓이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「기대에 부응하지 못해 정말 죄송해요……」"
    - acc: 1
      content: "「그 아쉬움을 밑거름으로 삼자!」"
    - "%YOU%이(가) 그렇게 말하자 맥퀸은 그제야 애써 미소를 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후회라는 쓴맛을 맛보는 건가요…… 어머, 다시는 맛보고 싶지 않네요.」"
    - acc: 1
      content: "「그럼 다음에는 승리의 달콤함을 맛보자.」"
    - "그 말에 맥퀸은 조금 투지를 되찾았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「달콤함…… 네, 승리의 달콤함. 그거야말로 메지로 가문의 우마무스메에게 어울리는 맛이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니 %CALLNAME%, 저를 더 강하게 만들어 주세요!」"

meet_mejiro:
  title: "메지로 가문의 %SIBLINGS%들과의 첫 만남"
  lines:
    # ジュニア級四月第一週
    - "%YOU%과(와) 맥퀸의 계약이 맺어진 지 어느 정도 시간이 흘렀고, %SEX%의 훈련도 순조롭게 진행되고 있었다."
    - "마침 %YOU%과(와) %SEX%는 일과처럼 학원 구내식당에서 아침 식사를 하고 있었다."
    - "%YOU%은(는) 막 먹고 싶은 음식을 고르고 담당 %UMA%가 앉아 있는 자리로 돌아왔으나, %SEX%의 곁에 다른 %UMA% 여섯 명이 모여 맥퀸과 즐겁게 대화를 나누고 있는 모습을 발견했다."
    - "하지만 그들에게서 뿜어져 나오는 분위기와 몸가짐은 맥퀸에게 뒤지지 않았기에, %YOU%은(는) 무의식중에 긴장하고 말았다."
    - acc: 1
      content: "「맥퀸.」"
    -
    - "%YOU%은(는) 맥퀸의 곁에 앉아, 대화를 방해하지 않으려 조심스럽게 인사를 건넸다."
    - "그 소리를 들은 맥퀸은 %YOU% 쪽으로 몸을 돌려, 함께 있던 %UMA%들에게 %YOU%을(를) 친절하게 소개해 주었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여러분, 이쪽이 제 트레이너예요.」"
    - "맥퀸의 말이 끝나자마자, %SEX% 옆에 있던 메지로 라이언이 가장 먼저 반응했다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「아, 맥퀸의 트레이너님, 안녕하세요! 저는 메지로 라이언이라고 해요!」"
    - acc: 1
      content: "「반가워.」"
    - "%YOU%은(는) 미소를 지으며 밤색 머리에 흰색 브릿지가 들어간 단발의 %UMA%에게 고개를 끄덕여 화답했다."
    - "그리고 맥퀸과 함께 앉아 있는 %UMA%들을 둘러보며 흥미로운 듯 말했다."
    - acc: 1
      content: "「다들 메지로 가문의 %UMA%들이야?」"
    -
    - "메지로 맥퀸이 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「처음 뵙는 자리니, 제가 %CALLNAME%께 한 분씩 소개해 드릴게요.」"
    - "그렇게 맥퀸이 한 명씩 소개하고 나서야, %YOU%은(는) 비로소 현장에 있는 모든 %UMA%와 인사를 나눌 수 있었다."
    - "인사를 받은 %UMA%들도 저마다 다른 반응을 보였다."
    - "메지로 라모누는 담담하게 반응하며 %YOU%을(를) 관찰했다."
    - "메지로 아르당은 두 손을 모으고 반갑게 대답했으며, 그 모습에는 차분한 온화함이 묻어났다."
    - "메지로 파머는 %YOU%에게 윙크를 날리며 우아한 인상과는 다른 자유분방한 매력을 보여주었다."
    - "메지로 브라이트는 나른하고 달콤한 목소리로 길게 대답했는데, 정말 귀여웠다."
    # CFLAGNAME:0 = 性別
    - if: era.get('cflag:0:0') === 1
      content: "메지로 도베르는 시선을 이리저리 돌리며 모기만 한 목소리로 짧게 대답했다. 친해지기 어려울 것 같았다."
    - if: era.get('cflag:0:0') !== 1
      content: "메지로 도베르 역시 미소로 트레이너의 인사에 화답했다."
    - acc: 1
      content: "「다들 정말 개성이 넘치네.」"
    - "%YOU%은(는) 미소 지으며 고개를 끄덕이다가, 우연히 맥퀸의 테이블 위에 놓인 노트를 보았다."
    - "그것은 %YOU%이(가) 맥퀸과 처음 만났을 때 건네준 식단표 중 하나였다."
    - "목표를 향해 나아가는 %SEX%는 여전히 변함없이 노력하고 있는 모양이었다."
    - acc: 1
      content: "「계속 노력 중이네, 맥퀸.」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「그럼요, 그럼요!」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「예전에 맥퀸은 기운도 없고 트레이닝 상태도 정말 안 좋았거든요.」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「그런데 시간이 지나고 나니까 그야말로 눈에 띄게 달라졌어요!」"
    - "칭찬을 받은 맥퀸이 살짝 기쁜 기색을 내비쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건 다 %CALLNAME%의 공이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「봄 텐노상에서 이기기 위해서는, 노력하는 게 당연하니까요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「데뷔전은 말할 것도 없고, 지금은 스스로를 더 엄격히 다스려야 한다고 생각해요.」"
    - acc: 1
      content: "「온 힘을 다해 가자.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네! 그러니 %CALLNAME%도 그 각오를 가져주세요.」"
    - "「봄 텐노상」이라는 말을 들은 라이언이 잠시 생각에 잠겼다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「하지만 봄 텐노상까지는 아직 시간이 좀 남았잖아요.」"
    - acc: 1
      content: "「그럼 주니어 시즌과 클래식 시즌에 기초를 잘 다져놔야지.」"
    -
    - "맥퀸은 고개를 끄덕이며 %YOU%의 말에 동조했다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「그렇다면 우리, 같은 레이스에서 맞붙을 수도 있겠네요.」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「미리 말해두지만, 저 절대 지지 않을 거예요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저도 전력을 다할 거예요!」"
    - "세 사람이 대화하는 사이, 메지로 도베르가 다른 곳에서 가져온 디저트가 두 사람의 시선을 끌었다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「대단해, 크레이프 위에 정말 초콜릿 푸딩이 올라가 있네. 고마워 도베르, 내 몫까지 가져와 줘서.」"
    - "메지로 도베르는 미소로 메지로 라이언에게 화답했다."
    - "%YOU%이(가) 맥퀸 쪽을 돌아보니, 맥퀸이 크레이프를 뚫어지게 쳐다보고 있었다."
    - acc: 1
      content: "「역시 정말 먹고 싶은 거지?」"
    -
    - "마음을 들킨 맥퀸은 당황하더니, 토라진 것처럼 고개를 휙 돌렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「절대 참고 있는 게 아니에요, 그런 일은 없어요!」"
    - "%YOU%은(는) 하하 웃으며 앞에 놓인 식사를 맛보기 시작했다."

begin_race:
  title: "데뷔전을 앞두고"
  lines:
    - "데뷔전 직전."
    - "레이스 %UMA% 생애에서 가장 중요한 날, %YOU%과(와) 메지로 맥퀸은 레이스 시간에 맞춰 일찍 경기장에 도착했다."
    - acc: 1
      content: "「우선 대기실에서 마음을 가다듬자.」"
    - "어쨌든 첫 실전이니 긴장하는 것도 무리는 아니었다."
    - "%YOU%은(는) 대기실에 들어온 뒤로 말 한마디 없이, 두 손을 가슴에 얹고 계속 심호흡을 반복하는 메지로 맥퀸을 걱정스럽게 바라보며 물었다."
    - acc: 1
      content: "「괜찮아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네?」"
    - "메지로 맥퀸이 %YOU% 쪽으로 시선을 돌렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아니에요, 괜찮아요. 조금 긴장했을 뿐이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 긴장보다는, 드디어 봄 텐노상 제패를 향한 출발점에 섰다는 사실에 가슴이 뜨거워져요.」"
    - "메지로 맥퀸이 노력하는 모습을 본 %YOU%은(는) 그제야 안심했다."
    - acc: 1
      content: "「그 열정을 계속 간직하도록 해.」"
    - "시간은 빠르게 흘러, 밖의 관중석에서 들려오는 함성 소리가 이곳까지 들려왔다."
    - "두말할 필요도 없이, 그 목소리는 메지로 가문의 새 세대인 메지로 맥퀸에게 쏟아지고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이렇게까지 주목받아 본 적은 처음인 것 같아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 걱정 마세요.」"
    - "메지로 맥퀸은 문을 열고 뒤를 돌아 %YOU%을(를) 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 반드시 당신께 승리를 안겨드릴게요!」"
    - acc: 1
      content: "「잘 다녀와!」"
    - "%YOU% 역시 웃으며, 경기장으로 향하는 메지로 맥퀸을 배웅했다."

begin_race_win:
  title: "목표를 향해 전진"
  lines:
    # メイクデビュー後
    - "드디어 레이스 후 다시 만난 순간, 함께 들떠 있던 메지로 맥퀸과 %YOU%은(는) 서로를 마주 보며 동시에 웃음을 터뜨렸다."
    - acc: 1
      content: "「데뷔전 승리 축하해!」"
    - "%YOU%은(는) 메지로 맥퀸에게 감격스럽게 말했다."
    - "메지로 맥퀸은 한참 동안 벅차오르는 감정을 추스른 뒤 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇네요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「드디어 그 목표를 달성할 수 있는 입장권을 손에 넣었군요.」"
    - acc: 1
      content: "「목표라니?」"
    - "아아, 봄 텐노상 레이스를 말하는 건가."
    - "데뷔전의 뛰어난 성적만으로도 메지로 가문 출신인 메지로 맥퀸의 강인한 신체 능력은 충분히 증명되었다."
    - "장거리에서의 강력함은 선발 레이스에서의 패배를 설욕하기에 충분했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「텐노상은 우리 메지로 가문의 명성을 세운 기둥이니까요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「동시에 우리 선조들의 아름다운 추억이기도 하고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 무슨 수를 써서라도, 저는 봄 텐노상에서 꼭 이기고 싶어요.」"
    - acc: 1
      content: "「좋아, 좋아.」"
    - "%YOU%은(는) 메지로 맥퀸의 어깨에 손을 가볍게 얹어, 역사를 추억하느라 감상에 젖어 있던 이 %YOUNG_LADY%를 서둘러 현실로 불러들였다."
    - acc: 1
      content: "「봄 텐노상은 아직 멀었어. 지금의 우리는 텐노상을 따내기 위해 훈련하고 경험을 쌓아야 할 때야.」"
    - "메지로 맥퀸, 널리 인정받는 장거리 %UMA%."
    - "%SEX%의 능력이라면 이 레이스에서 충분히 우승할 수 있을 것이다."
    - acc: 1
      content: "「너는 반드시 이길 거야.」"
    - "%YOU%이(가) 메지로 맥퀸을 향해 자신감 넘치는 미소를 지어 보이자, 그 미소가 봄볕처럼 메지로 맥퀸의 미간에 맺힌 근심을 녹여냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 앞으로도 잘 부탁드릴게요, %CALLNAME%.」"

kiku_sho:
  title: "실력 겨루기"
  lines:
    # 菊花賞前
    # 強敵：ライアン
    - "메지로 맥퀸이 목표로 삼은 G1 레이스이자, 클래식 삼관 중 하나인 레이스인 만큼 관람객은 원래부터 많았다."
    - "이번 레이스는 %SEX%의 트레이닝 성과를 검증하기에 매우 적합했다."
    - "그뿐 아니라, 출전표에 있는 %RYAN%이라는 %UMA%가 %YOU%의 눈길을 끌었다."
    - "똑똑똑……"
    - "갑작스러운 노크 소리에 준비실에서 전술을 논의하던 메지로 맥퀸과 %YOU%은(는) 동시에 고개를 들어 문밖을 바라보았다."
    - "메지로 맥퀸이 문고리를 돌린 순간, 흰색과 녹색이 어우러진 옷차림의 인물이 눈에 들어왔다. 메지로 맥퀸과 같은 계열의 승부복을 입은 레이스 %UMA%였다."
    - "%YOU%이(가) 자세히 보니, 다름 아닌 메지로 라이언이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「라이언!」"
    - "메지로 맥퀸이 반가운 듯 메지로 라이언을 껴안았다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「오늘 정말 떠들썩하네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저와 라이언의 레이스니까요.」"
    - "어릴 때부터 함께 자란 %SIBLINGS%들은 서로를 바라보며 미소 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「시간 참 빠르네. 예전에 너랑 달리기 시합할 때는 관중 같은 건 없었는데 말이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데 오늘은 수많은 관중 앞에서 겨루게 됐네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「상대가 너라고 해도, 양보하지 않을 거야.」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「응, 우리 같이 노력하자.」"
    - "말이 끝나자마자 통로에 %UMA%들의 입장을 알리는 방송이 울려 퍼졌다."
    - "메지로 맥퀸이 고개를 돌려 확인을 구하자, %YOU%은(는) 그녀에게 엄지를 치켜세우며 자신감 넘치는 미소를 보내주었다."
    - acc: 1
      content: "「가자, 너를 믿어.」"
    - "메지로 맥퀸은 %YOU%에게 고개를 끄덕인 뒤, 메지로 라이언과 함께 준비실을 나섰다."

kiku_sho_win:
  title: "화려한 대국"
  lines:
    # 菊花賞後
    - content:
        - fontWeight: bold
          content: "해설"
        - "「메지로 맥퀸, 결승선 통과!」"
    - "메지로 맥퀸이 결승선을 통과하는 순간, 관중석에서는 전례 없는 함성이 터져 나왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%!」"
    - "메지로 맥퀸이 관중석 맨 앞에 서 있는 %YOU% 앞으로 다가왔다."
    - "생애 첫 G1 레이스에서 승리한 메지로 맥퀸은 우아함을 유지하려 했으나, 땀에 젖은 앞머리 아래의 보랏빛 눈동자는 이미 반짝이고 있었다."
    - acc: 1
      content: "「축하해!」"
    - "%YOU%은(는) 흐뭇하게 미소 지으며 메지로 맥퀸에게 축하를 건넸다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「저기…… 분하네, 맥퀸……」"
    - "메지로 맥퀸은 귀를 파르르 떨며 무릎을 짚고 숨을 고르는 메지로 라이언을 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……라이언.」"
    - "추월당해 패배한 메지로 라이언을 마주한 메지로 맥퀸은 미간을 찌푸리며 안타까움을 느꼈다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「후후, 이제 와서 무슨 말을 한들 무슨 의미가 있겠어.」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「축하해, 맥퀸. 정말 강하네. 트레센에 막 들어왔을 때와는 완전히 달라.」"
    - "메지로 라이언이 다가와 메지로 맥퀸의 승부복에 묻은 잔디를 털어주었다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「내 걱정은 하지 마, 다음 시합 때도 전력을 다해줘.」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「하지만 나도 더 이상 방심하지 않을 거니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응.」"
    - "그제야 마음이 조금 놓인 메지로 맥퀸이 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음에도 너랑 겨룰 수 있길 기대할게.」"

tenn_spr:
  title: "제패를 앞둔 날"
  lines:
    # 天皇賞（春）前
    # 強敵：ライアン
    - "준비실 안."
    - "이전 몇 차례의 레이스와는 달리, 오늘의 준비실 안에는 긴장된 침묵이 감돌고 있었다."
    - "승부복을 차려입은 메지로 맥퀸은 두 손을 가슴에 얹고 여러 번 심호흡을 했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할아버님, 할머님…… 드디어 이날이 왔네요.」"
    - "메지로 맥퀸은 눈을 감고 중얼거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제 달리는 모습과 승리를 쟁취하는 순간을 부디 지켜봐 주세요.」"
    - "%YOU%은(는) 메지로 맥퀸 앞으로 가서 두 손을 %SEX%의 어깨에 얹었다. 손바닥 아래에서 희미한 떨림을 느끼자, 팔을 당겨 %SEX%를 껴안았다."
    - acc: 1
      content: "「1착을 차지하고 오렴. 너를 위해서, 그리고 메지로 가문의 영광을 위해서.」"
    - "품 안의 메지로 맥퀸은 다시 한번 숨을 크게 들이마셨고, 이윽고 떨리던 몸이 진정되었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%도 제 레이스를 지켜봐 주세요.」"
    -
    - "지금 메지로 맥퀸은 경기장으로 통하는 통로를 걷고 있었고, 마주 불어오는 바람에 %SEX%의 겉옷 자락이 세차게 휘날렸다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「맥퀸!」"
    - "이번에도 같은 레이스에 출주하는 메지로 라이언이 가볍게 뛰어와 메지로 맥퀸과 나란히 걸었다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「오늘도 힘내자!」"
    - "메지로 맥퀸은 그 말을 듣고 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우리 전력을 다해보자!」"

tenn_spr_win:
  title: "메지로 가문을 잇는 자"
  lines:
    # 天皇賞（春）後
    - content:
        - fontWeight: bold
          content: "중계"
        - "「메지로 맥퀸! 골인!」"
    - "코스에는 평소의 소란이 없었다. 관중석의 많은 이들이 마음속으로 정한 승자를 기다리고 있었다."
    - "결승선을 통과한 뒤 천천히 감속해 멈춰 선 메지로 맥퀸은 숨을 고르고, 조금 황홀한 표정으로 관중석을 바라본 다음 전광판으로 눈을 돌렸다."
    - "환호 대신 관중석 전체를 울리는 박수가 터져 나왔다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「맥퀸!」"
    - "메지로 맥퀸은 목소리가 들리는 쪽으로 고개를 돌렸다. 메지로 가문의 %SIBLINGS%들이 천천히 걸어오고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여러분……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「메지로 가문의 여러분, 보고 계셨나요?」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「당연하지.」"
    - "메지로 맥퀸은 깊게 숨을 들이쉬고 마음을 가다듬었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지금까지 응원해 주신 여러분께 한 말씀 드리고 싶어요.」"
    - "스태프에게 마이크를 받은 %SEX%는 관중들을 향해 돌아섰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여러분, 응원해 주셔서 감사해요. 이렇게 이길 수 있었던 것은 지금까지 함께해 주신 여러분의 지지 덕분이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 메지로 가문의 여러분. 기대를 저버리지 않도록 힘을 다해 달렸어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「메지로 가문의 %UMA%로서 마침내 가문의 소원을 이루었어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니 여러분께 진심으로 감사드려요. 그리고 지도해 주신 %CALLNAME%께도 감사드려요!」"
    - "말이 끝나자 관중석에서 오래도록 끊이지 않는 함성이 터져 나왔다."

takz_kin:
  title: "침착한 승부"
  lines:
    # 宝塚記念前
    # 強敵：ライアン
    - "바깥 경기장에서는 국화상에 못지않은 환호성이 울려 퍼지고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「대단해…… 국화상 때보다 열기가 더 뜨거워요.」"
    -
    - acc: 1
      content: "「맥퀸이 이미 많은 사람의 주목을 받고 있으니까.」"
    -
    - "팬 투표로 출주가 결정되는 타카라즈카 기념에 신청했다. 예상대로 이전 중상 레이스들에서 큰 주목을 받은 덕분에 무난히 출주 기회를 얻었다."
    - "하지만 팬 투표 레이스인 만큼 경기장에는 강력한 %UMA%들도 포진해 있었다."
    - "특히 메지로 라이언이 그랬다."
    - acc: 1
      content: "「메지로 라이언은 여전히 지고 싶지 않은 모양이네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「라이언……」"
    - "메지로 맥퀸은 그 이름을 듣고 차분하게 생각에 잠겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「라이언은 계속 저를 쫓아오고 있군요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 무슨 일이 있어도.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전 오늘…… 확실하게 승리를 거머쥐겠어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 라이언에게도 승리를 향한 제 각오를 보여 드리겠어요.」"

takz_kin_win:
  title: "메지로 가의 강함"
  lines:
    # 宝塚記念後
    - "오늘도 메지로 맥퀸은 평소처럼 기세 좋게 1착으로 결승선을 통과했다."
    - "이미 승리에 익숙해졌기에, G1 레이스의 우승이 %SEX%에게 큰 동요를 일으키지는 않았다."
    - "메지로 맥퀸은 속도를 줄이며 멈춰 서서 관중석을 향해 손을 흔들었고, 관중들도 이에 환호하며 화답했다."
    - content:
        - fontWeight: bold
          content: "관중"
        - "「축하해! 맥퀸!」"
    - content:
        - fontWeight: bold
          content: "관중"
        - "「맥퀸, 이번에도 정말 강력했어!」"
    - "메지로 라이언은 환호가 메지로 맥퀸을 향하는 것을 보고 귀를 살짝 늘어뜨린 채 침울하게 고개를 숙였다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「또 졌구나. 역시 언제나……」"
    - content:
        - fontWeight: bold
          content: "관중"
        - "「그 끈기는 우리 모두가 다 봤어! 라이언!」"
    - content:
        - fontWeight: bold
          content: "관중"
        - "「끝까지 포기하지 않고 당당하게 달렸어…… 으으, 너무 멋져……」"
    - "관중석에서 처음으로 「메지로 라이언」을 부르는 소리가 터져 나오자, 메지로 라이언은 관중들의 함성이 자신을 위해 새로운 선율을 만들어내고 있다는 것을 깨달았다."
    - content:
        - fontWeight: bold
          content: "관중"
        - "「메지로 가문이 최고야! 둘 다 정말 노력했어!!」"
    - content:
        - fontWeight: bold
          content: "관중"
        - "「이번 레이스는 정말 잊지 못할 거야!!」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「나…… 나도……?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼……」"
    - "메지로 라이언이 고개를 돌리자, 여유로운 모습의 메지로 맥퀸이 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마지막까지 정말 최선을 다해 직선을 달리고 있었잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오히려 정말 너다운 모습이었어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네가 뒤에서 추격해 주지 않았다면, 아마 나도 이런 경지에 도달하지 못했을 거야.」"
    - "메지로 맥퀸은 메지로 라이언에게 손을 내밀었다."
    - "메지로 라이언은 그 손을 보고 잠시 멍하니 있다가, 이내 후련한 미소를 지으며 메지로 맥퀸이 내민 손을 맞잡았다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「어이! 오늘도 다들 응원해 줘서 정말 고마워!」"
    - divider: true
    - "타카라즈카 기념은 무사히 끝났고, %YOU%도 옆에서 두 사람이 관중석의 응원을 함께 나누는 모습을 지켜보았다."
    - "메지로 라이언과의 승부를 마치고 메지로 맥퀸과 함께 학원으로 돌아왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「봄 텐노상 이후에 해야 할 일들에 대해 어느 정도 생각이 정리된 것 같네요.」"
    -
    - acc: 1
      content: "「정말? 그게 뭔데?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음은…… 가을 텐노상이에요.」"
    - "메지로 맥퀸은 덤덤하게 이 한마디를 내뱉었다."
    - acc: 1
      content: "「그래?」"
    - "메지로 맥퀸은 %YOU%의 평범한 반응에 미간을 찌푸렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전혀 놀라지 않으시는 건가요?」"
    -
    - acc: 1
      content: "「아니, 난 그냥 어떤 레이스에서든 맥퀸이 1착으로 마무리할 거라고 믿고 있을 뿐이야.」"
    - "메지로 맥퀸은 살짝 놀란 듯 %YOU%을(를) 바라보더니 턱을 괴고 생각에 잠겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「텐노상에서 우승한 뒤로 미래에 대해 막막함을 느낄 때가 있었던 건 사실이에요.」"
    - "메지로 맥퀸은 무심코 석양 아래 트레센 학원의 학교 건물을 바라보며 숨을 크게 들이마셨다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할머님께서 제게 맡기신 사명을 완수했으니, 이제 새로운 길을 찾아봐야겠죠.」"
    - "오른손을 주먹 쥐어 가슴에 얹었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까—— 아무리 어렵더라도 가을 텐노상에서 우승해 『춘추 연패』를 반드시 해내겠어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「메지로 가문에게, 그리고 저를 응원해 주시는 팬들에게 보여주고 싶어요……」"
    - "%YOU%은(는) 옆에서 메지로 맥퀸의 확고한 눈빛을 말없이 지켜보았다."
    - "지금의 메지로 맥퀸은 분명 무엇이든 해낼 수 있을 것이다."
    - "%YOU%은(는) 메지로 맥퀸의 등을 두드려 주었다."
    - "「네가 하고자 하는 일이라면 난 언제나 널 응원할 거야.」"
    - "그것이 바로 %YOU% 본연의 임무이기 때문이다."
    - "메지로 맥퀸은 잠시 멍하니 있다가 이내 힘주어 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네……!」"
    - "그렇게 가을 텐노상이 다음 목표가 되었다."

tenn_sho:
  title: "마지막 순간까지 빛나며"
  lines:
    # 天皇賞（秋）前
    - "가을 텐노상이 열리는 오늘, 하늘에서는 아침부터 비가 내리고 있었다. 멈출 기미가 보이지 않는 빗줄기는 마치 불길한 예감을 불러일으키는 듯했고, 수많은 인파가 몰린 경기장의 분위기를 무겁게 가라앉혔다."
    - "지하 통로에는 삼 년 동안 줄곧 곁을 지킨 %YOU% 외에도 메지로 가문의 자매들이 함께하고 있었다."
    - "그곳에 모인 모든 이들이 메지로 맥퀸이 일궈 낼 기적을 지켜보기를 고대하고 있었다."
    - "모두를 등진 채 서 있던 메지로 맥퀸은 가슴에 손을 얹고 몇 번이고 심호흡을 반복했다."
    - "마침내 감았던 눈을 뜨고 사람들을 돌아보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「코스의 진흙탕도, 관중들의 시선도, 이제 그 어떤 것도 저를 긴장하게 만들지 못해요.」"
    - "메지로 맥퀸은 %YOU% 앞으로 걸어와 두 손으로 %YOU%의 손을 잡았다. 거친 피부의 감촉에 소중한 기억들이 스쳐 지나갔고, 메지로 맥퀸은 미소 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「일심동체가 된 %YOU%과(와) 승리를 위해 거듭해 온 노력, 라이언과 겨뤘던 추억…… 떠올리기만 해도 힘이 솟아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마지막까지 모두를 위해 승리를 쟁취하겠어요.」"
    - acc: 1
      content: "「너무 부담 갖지 마, 넌 이미 충분히 잘해왔어.」"
    - "메지로 맥퀸은 고개를 끄덕였다."
    - "이어 %SEX%는 뒤도 돌아보지 않고 지하 통로를 나섰다. 관중석과 라이벌들을 향해 아무 말 없이, 그저 팔에 찬 메지로 가문의 완장을 살짝 매만질 뿐이었다."
    - "그리고 당당한 발걸음으로 게이트 뒤편으로 걸어가 워밍업을 시작했다."

tenn_sho_win:
  title: "종막"
  lines:
    # 天皇賞（秋）後
    - "메지로 맥퀸이 결승선을 통과하는 순간, 긴장하며 기다리던 관중들의 함성이 단숨에 한 단계 더 높아졌다."
    - content:
        - fontWeight: bold
          content: "관중"
        - "「메지로 맥퀸!!! 메지로 맥퀸!!! 메지로 맥퀸!!!」"
    - "관중석의 환호는 경기장 전체에 울려 퍼졌다."
    - acc: 1
      content: "「메지로 맥퀸!」"
    - "메지로 맥퀸의 귀는 %YOU%의 목소리를 예리하게 포착했고, 이내 익숙한 실루엣을 향해 시선을 돌렸다. 하지만 %YOU%이(가) 관중석의 울타리를 넘어 메지로 맥퀸에게 달려오는 것을 보고 깜짝 놀랐다."
    - "이어서 자신의 시야가 위쪽으로 급격히 높아지는 것을 느끼게 되었다. %SEX%는 %YOU%에게 다리를 붙잡힌 채 들어 올려져, 어깨 위에 안정적으로 올라앉게 되었다."
    - "흥분에 찬 %YOU%은(는) 비어 있는 손으로 관중석을 향해 「브이」 포즈를 취했고, 상황을 겨우 파악한 메지로 맥퀸은 약간 수줍어하며 관중석을 향해 손을 흔들었다."
    - divider: true
    - acc: 1
      content: "「레이스 인생도 이제 거의 막바지에 다다른 것 같네.」"
    - "레이스가 끝난 뒤 위닝 라이브 무대까지 마치고 나서, %YOU%과(와) 메지로 맥퀸은 모두 조금 지친 기색으로 돌아가는 길을 걷고 있었다."
    - "1착이라는 성적으로 1년에 한 번뿐인 봄 가을 텐노상 연패를 달성했다."
    - "짧은 3년이라는 세월 전체를 놓고 보아도 전혀 후회가 없는 순간이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러게요.」"
    - acc: 1
      content: "「맥퀸, 한 번 안아봐도 될까.」"
    - "메지로 맥퀸은 조금 놀란 듯했지만, 이내 %YOU%의 포옹을 받아들였다."
    - acc: 1
      content: "「나에게 영광을 가져다줘서 고마워……」"
    - "비록 뒤에서 레이스 %UMA%를 지도했을 뿐인 %YOU%이었지만 말이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%…… 제가 오히려 감사드려야죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당신이 저를 이끌어주지 않았다면 전 예전의 실수를 반복했을지도 몰라요. 당신이 없는 상황에서 제가 메지로 가문의 영광을 계승할 수 있었을지 도저히 상상조차 할 수 없거든요.」"
    - "%YOU%과(와) 메지로 맥퀸은 매우 가까운 거리에서 서로를 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기…… 잠시 실례할게요……」"
    - "메지로 맥퀸은 매우 빠른 속도로 %YOU%의 뺨에 입을 맞췄다."
    - "%YOU%은(는) 무의식중에 입맞춤을 받은 곳을 손으로 가렸고, 상황을 파악한 뒤 미소를 지었다."
    - acc: 1
      content: "「이제 가자.」"

new_year:
  title: "새해"
  lines:
    # クラシック級
    - "오늘은 새해다. %YOU%이(가) 평소처럼 트레이너실에 들어가자, 책상에는 요 며칠 새해 행사에 쓴 물건들이 놓여 있었고 메지로 맥퀸도 와 있었다."
    - "메지로 맥퀸은 %YOU%이(가) 오는 것을 보고 기쁘게 예를 갖춰 인사했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「새해 복 많이 받으세요, %CALLNAME%.」"
    - acc: 1
      content: "「새해 복 많이 받아, 맥퀸.」"
    - "메지로 맥퀸은 품에서 종이 같은 것을 한 장 꺼내 %YOU%에게 건넸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「올해의 목표에 대해 스스로 고민해 본 뒤에 연하장을 써서 가져왔어요. 받아주세요.」"
    - "메지로 맥퀸의 손에서 연하장을 받아들었다. 거기에는 새해 인사와 목표가 적혀 있었다."
    - "그리고 그중 목표란에는 이렇게 적혀 있었다. —— 국화상 제패."
    - acc: 1
      content: "「목표를 확실히 정했구나.」"
    - acc: 2
      content: "「정말 메지로 가문 %UMA%다운 스타일이네.」"
    - "지금 %SEX%의 목표는 봄 텐노상 제패이지만, 그전에 몇몇 레이스에 참가해야 봄 텐노상 출주 자격을 더 쉽게 얻을 수 있다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「레이스 %UMA%로서 역시 삼관 레이스를 동경하게 되네요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 국화상에서 이긴다면 봄 텐노상의 승리 가능성도 증명해낼 수 있을 거예요.」"
    - acc: 1
      content: "「그래, 반드시 국화상에서 이기자.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 새로운 한 해도 %YOU%, 잘 부탁드릴게요.」"

valentine:
  title: "발렌타인데이"
  lines:
    # クラシック級
    - "트레이닝실에서 업무를 보고 있을 때……"
    - "%YOU%은(는) 밖에서 들려오는 노크 소리를 듣고 들어오라고 말했다."
    - "들어온 사람은 늘 함께하는 담당 —— 메지로 맥퀸이었다."
    - "메지로 맥퀸은 %YOU%이(가) 실내에 있는 것을 보고 꼬리를 기쁘게 흔들었으며, 등 뒤에 무언가를 숨기고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%.」"
    - "메지로 맥퀸은 가까이 다가오며 등 뒤에 숨겼던 것을 꺼냈다. 말할 것도 없이 정성스럽게 포장된 초콜릿이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「발렌타인데이 축하해요. 지금까지 가르쳐 주신 %CALLNAME%의 은혜에 보답하기 위해 이 초콜릿을 선물하고 싶어요.」"
    - acc: 1
      content: "「고마워.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말 인기 있는 초콜릿이에요. 구하려면 반년 전부터 예약해야 하거든요.」"
    - "반년 전이라니, 그렇다면 작년부터 이미……"
    - "손에 든 초콜릿 상자를 보니, 단 한마디 말로도 메지로 맥퀸이 이 선물을 준비한 마음이 얼마나 귀한지 알 수 있었다."
    - "%YOU%은(는) 손에 든 초콜릿을 보고 이렇게 하기로 했다. ——"
    - acc: 1
      key: select
      content: "간직한다. (아이템 【발렌타인 초콜릿】 획득)"
      lines:
        - "「으음…… 맥퀸이 준 발렌타인 선물, 너무 귀중하네. 역시 먹지 말고 간직하는 게 좋겠어.」"
        - "거기까지 생각한 %YOU%은(는) 초콜릿을 자신의 가방 안에 넣었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「에?」"
        - "오히려 메지로 맥퀸 쪽에서 깜짝 놀라더니, 이내 불만스러운 듯 미간을 찌푸리며 말했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「준비할 때부터 %CALLNAME%께서도 이 한정판 초콜릿을 꼭 맛보셨으면 하는 마음이었단 말이에요.」"
        - "아, 아무래도 %YOU%의 행동은 메지로 맥퀸이 기대한 것과는 달랐던 모양이다."
        - "메지로 맥퀸의 불만스러운 표정을 본 %YOU%은(는) 머리를 굴려 이렇게 말했다."
        - acc: 1
          content: "「맥퀸이 준 거니까 집에 소중히 장식해두고 기념하고 싶어서 그렇지.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「으음…… 그것도 나쁘진 않네요.」"
        - "%YOU%의 말에 마음을 돌린 메지로 맥퀸의 얼굴에 다시 기쁜 기색이 돌았고, 그렇게 평범한 발렌타인데이가 끝났다."
    - acc: 2
      content: "그 자리에서 초콜릿을 맛본다. (체력 +200)"
      lines:
        - "그렇게 생각한 %YOU%은(는) 초콜릿 상자를 열어 한 알을 입에 넣고 천천히 음미했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어때요……?」"
        - "한정판 초콜릿의 특별함을 느낀 것인지, 눈을 반짝이는 %YOU%은(는) 엄지를 치켜세우고 초콜릿 한 알을 다 먹은 뒤 말했다."
        - acc: 1
          content: "「정말 맛있네. 역시 맥퀸이 말한 한정판 초콜릿다워.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후훗! %CALLNAME%께 꼭 맛보여 드리고 싶었거든요.」"
        - "메지로 맥퀸이 활짝 웃었다."
        - "「응, 맥퀸이 곁에 있으면 항상 좋은 것들을 맛볼 수 있는 것 같아.」"
        - "그리고 %YOU%은(는) 눈앞의 메지로 맥퀸을 한 번, 초콜릿을 한 번 번갈아 보았다."
        - "「맥퀸 너도 좀 먹어볼래?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「에, 저요?」"
        - "메지로 맥퀸은 초콜릿을 먹게 될 생각에 꼬리 흔드는 속도가 빨라졌지만, 이내 자신의 살찌기 쉬운 체질이 생각나 주춤거렸다."
        - "하지만 메지로 맥퀸의 마음을 꿰뚫어 본 %YOU%은(는) 한발 더 다가갔다."
        - acc: 1
          content: "「괜찮아, 딱 한 알만 먹고 기분 전환하자?」"
        - "%YOU%은(는) 미소를 지으며 초콜릿 한 알을 메지로 맥퀸의 눈앞에 가져다 댔다."
        - "마치 장난감을 본 고양이처럼, 초콜릿이 눈앞에 놓이자 메지로 맥퀸은 그것에서 눈을 떼지 못했다."
        - "결국 메지로 맥퀸은 참지 못하고 초콜릿을 한입에 먹어 치웠다."
        - "이어서 달콤한 맛을 음미하다가 무언가 깨달은 듯, 다시 훈계하듯 화난 표정으로 바뀌었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말이지, %CALLNAME%. 저를 너무 응석받이로 만드시는 거 아닌가요?」"
        - "그러고는 볼을 부풀리며 고개를 돌렸지만, 등 뒤의 꼬리는 즐겁게 흔들리고 있었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하지만…… 한정판 초콜릿을 맛봤으니 한 입이라도 만족해요.」"
        - "%YOU%은(는) 그 광경을 보며 웃으면서 메지로 맥퀸을 달래주었다. 발렌타인데이만의 특별한 일상이 그렇게 마무리되었다."

halloween:
  title: "할로윈"
  lines:
    # クラシック級
    - "오늘은 일 년에 한 번뿐인 할로윈이다. 한창 청춘인 %UMA%들의 취향에 맞춰 학원 안은 온통 할로윈 스타일로 장식되어 있었다."
    - "게다가 트레센 안뜰에서는 코스프레 행사도 열리고 있었는데, 안뜰에서 각양각색으로 차려입은 %UMA%들에 비하면 여전히 작업복 차림인 %YOU%은(는) 조금 어울리지 않아 보였다."
    - content:
        - fontWeight: bold
          content: %UMA%
        - 「Trick or Treat！」
    - "행사장 밖에 있어도 학원의 %UMA%들이 %YOU%을(를) 알아보고, 호박 모양 바구니를 내밀며 사탕을 달라고 했다."
    - acc: 1
      content: "「여기 있어.」"
    - "다행히 %YOU%은(는) 사탕을 준비해 두었다. %SEX%들은 고맙다고 인사하고 웃으며 달려갔다."
    - "정말 청춘이네."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - 「Trick or Treat！！」
    - "이어서 다른 방향에서 또 소리가 들려왔다. 게다가 아주 기세 좋은 요청이었다!"
    - "%YOU%이(가) 급히 고개를 돌려보니 눈앞에 메지로 맥퀸이 서 있었다."
    - "그것도 마녀 차림을 한 메지로 맥퀸이었다."
    - "지금 메지로 맥퀸은 한 손은 허리에 얹고, 다른 한 손에는 「마법 지팡이」를 들고 가볍게 휘두르고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사탕을 안 주면 장난칠 거예요.」"
    - "%YOU%은(는) 마녀로 분장한 담당 %UMA%를 보며 미소 지었고, %SEX%를 위해 따로 준비해둔 사탕 주머니를 꺼냈다."
    - "아니나 다를까, 메지로 맥퀸의 눈은 사탕을 뚫어지게 쳐다보고 있었고, 엄지와 검지 사이에 지팡이를 끼운 채 두 손을 모아 받들 준비를 했다. %YOU%은(는) 그 사탕 주머니를 메지로 맥퀸의 손 위에 올려주었다."
    - "「할로윈 며칠 전부터 집에서 직접 만들어 본 건데, 네 입맛에 맞을지 모르겠네?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%께서 직접 만드신 거라니……?」"
    - "메지로 맥퀸은 먼저 놀란 눈으로 %YOU%을(를) 보더니, 아까 다른 %UMA%들에게 건넸던 사탕을 떠올렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 아까 다른 분들에게 드린 건……?」"
    - acc: 1
      content: "「그건 그냥 아무 가게에서나 산 사탕이야.」"
    - "아무래도 자신의 담당 %UMA%에게는 조금 편애를 하게 되기 마련이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇군요……」"
    - "봉지에서 사탕 하나를 꺼내 포장지를 벗기자, 사탕 겉면에는 사탕을 보호하기 위한 얇은 식용 녹말 종이가 붙어 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맛있어요~」"
    - "그렇게 메지로 맥퀸은 사탕을 즐기며 %YOU%과(와) 함께 안뜰 밖에서 할로윈 행사를 지켜보았다."
    - acc: 1
      content: "「맥퀸 %YOUNG_LADY%께서 할로윈 행사에 참여하실 줄은 몰랐네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「무슨 말씀을 그렇게 하세요. 저도 결국은 아이인걸요.」"
    - "그러고 보니 그렇다."
    - "학생인 메지로 맥퀸도 다른 친구들과 다를 바 없는 생활을 하고 있으니, 어떤 행사에도 참여하지 않는다면 오히려 너무 튀어 보였을 것이다."
    - acc: 1
      content: "「마녀 옷이 정말 잘 어울려.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「감사합니다.」"
    - "이어 메지로 맥퀸은 만화영화 속 마녀처럼 지팡이를 휘두르며 %YOU%에게 윙크를 날렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서, 이 차림이 당신의 마음을 사로잡았나요?」"
    - acc: 1
      content: "「메지로 맥퀸에게 마음을 사로잡힌 거라면, 아마 평생의 가치가 있겠지.」"
    - "%YOU%은(는) 마치 공격이라도 받은 듯 자신의 심장을 부여잡았다."
    - "그러자 메지로 맥퀸은 %YOU%의 말에 즐거운 듯 웃음을 터뜨렸다."
    - acc: 1
      content: "「아무튼, 할로윈 축하해 맥퀸!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 즐거운 할로윈이에요.」"

mejiro_family:
  title: "메지로 가문의 초대"
  lines:
    # 天皇賞（春）勝利劇情のあと
    - "메지로 맥퀸이 텐노상(봄)에서 우승한 뒤, 트레이너실에서 일하던 %YOU%에게 갑자기 전화가 걸려 왔다."
    - acc: 1
      content: "「여보세요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「%CALLNAME%, 안녕하세요.」"
    - "%YOU%은(는) 곧바로 메지로 맥퀸의 목소리임을 알아차렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「텐노상(봄)에서 우승해서, 메지로 가문에서 축하 만찬을 열려고 한대요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 초대하고 싶어서요. 참석해 주시겠어요?」"
    - acc: 1
      content: "「물론이지. 메지로 가문의 만찬이라니 흥미로운걸.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다행이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「집사에게 부탁해서 정장을 보내 드릴게요. 만찬은 다음 주로 예정되어 있어요. 때가 되면 정장을 입어 주세요. 집사가 모시러 갈 거예요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「기대하고 있을게요.」"

mejiro_party:
  title: "메지로 가의 연회"
  lines:
    # 天皇賞（春）勝利ターンの翌ターン、休息後に自動発生
    # 89恋慕前の恋慕ロック
    - "짧지 않은 여정 끝에, 집사가 직접 운전하는 차가 마침내 교외의 메지로 저택에 도착했다."
    - "집사가 차에서 내려 %YOU%을(를) 위해 문을 열어주었다. %YOU%은(는) 조심스럽게 차에서 내린 뒤, 집사에게 감사 인사를 전하고 가슴을 펴 당당한 자세를 취했다."
    - "%YOU%은(는) 눈앞에 펼쳐진 거대한 저택을 보고 깜짝 놀랐지만, 이내 이 거대한 메지로 저택 안으로 발을 들여놓았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%.」"
    - "문 너머에서 메지로 맥퀸의 목소리가 들려왔다. 메지로 맥퀸은 이미 이곳에서 %YOU%을(를) 기다리고 있었던 것이 분명했다."
    - "상류층의 모임에 처음 온 데다 평생 대부분의 시간을 격식 없이 지내온 %YOU%은(는) 다소 경직된 태도로 고개를 돌렸으나, 이내 메지로 맥퀸의 옷차림을 보고 넋을 잃고 말았다."
    - "왼쪽 귀의 평범한 리본 장식은 값비싼 귀걸이로 바뀌어 있었고, 평상복 대신 자신의 머리색과 같은 연보라색 드레스를 입은 모습은 평소와는 전혀 다른 사람처럼 보였다."
    - "%YOU%은(는) 입을 약간 벌린 채 멍하니 있다가, 점차 얼굴에 놀라움과 기쁨의 기색을 띠었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안녕하세요.」"
    -
    - acc: 1
      content: "「안녕!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기…… 제 옷차림은 어떤가요?」"
    - "메지로 맥퀸은 살짝 얼굴을 붉히며 시선을 피한 채 %YOU%에게 물었다."
    -
    - acc: 1
      content: "「예뻐, 정말 예뻐!」"
    -
    - "%YOU%은(는) 고개를 두 번 연속으로 끄덕이며 메지로 맥퀸의 옷차림을 칭찬했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후훗……」"
    - "메지로 맥퀸은 기쁜 듯 나지막하게 웃었고, 귀도 쫑긋거리며 떨렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오히려 %YOU%(이)야말로 정장을 입으니 정말 멋지네요.」"
    - "메지로 맥퀸은 두 손을 정중하게 가슴 앞에 모으고 %YOU%과(와) 나란히 연회장으로 향하는 길을 걸었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 그렇게 긴장하실 필요 없어요. 일주일 전에 저와 함께 큰 공을 세우셨으니, 이 연회의 주인공이 될 자격이 충분하시니까요.」"
    - "%YOU%은(는) 조금 쑥스러운 듯 웃으며 설명했다."
    - acc: 1
      content: "「네 트레이너, %YOU%(이)잖아. 메지로 맥퀸이 할 수 있는 일이라면 나도 할 수 있어야지.」"
    - "두 사람은 거대한 저택 안을 걸으며 가벼운 대화로 침묵을 깼다."
    - "연회장에 들어서자 %YOU%은(는) 화려한 장식에 압도되어 그 자리에 멍하니 멈춰 섰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 %CALLNAME%, 연회를 마음껏 즐겨주세요.」"
    - "메지로 맥퀸의 말이 끝나기 무섭게, 방금 %YOU%을(를) 데려왔던 집사가 갑자기 두 사람의 곁에 나타났다."
    - content:
        - fontWeight: bold
          content: "집사"
        - "「%CALLNAME%, 가주님께서 잠시 대화를 나누고 싶어 하십니다.」"
    - "그러자 메지로 맥퀸의 평온하던 표정에 놀란 기색이 스쳤고, 걱정스러운 눈빛으로 %YOU%을(를) 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - acc: 1
      content: "「다녀올게.」"
    - "승낙을 받은 집사는 %YOU%을(를) 어느 방으로 안내했다."
    - content:
        - fontWeight: bold
          content: "집사"
        - "「가주님께서 안에서 기다리고 계십니다. 즐거운 대화 나누시길 바랍니다.」"
    - "%YOU%은(는) 고개를 끄덕인 뒤 문 쪽을 바라보았다."
    - "문은 %YOU%을(를) 위해 틈이 살짝 벌어져 있었지만, 예의를 갖추기 위해 손으로 문을 두드렸다."
    - "안에서는 대답이 없었지만, 이는 들어와도 좋다는 묵시적인 허락 같았다."
    - "안으로 들어가자 화려한 정통 유럽풍 방에 눈길을 빼앗겼다."
    - "집사가 말한 「가주님」은 %YOU%의 정면 책상 앞에 앉아 있었다. 그녀는 밤 풍경이 내려다보이는 통창을 등지고 귀부인 모자를 쓰고 있어 얼굴이 잘 보이지 않았으나, 그녀가 뿜어내는 위엄에 %YOU%은(는) 자신도 모르게 허리를 곧게 폈다. 이분이 바로 메지로 가문의 가주임을 확신했다."
    - acc: 1
      content: "「안녕하십니까……?」"
    - "두 사람 사이에 잠시 침묵이 흐른 뒤, 눈앞의 메지로 가주가 입을 열었다."
    - content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「처음 뵙는군요, 맥퀸의 %CALLNAME%.」"
    # FLAGNAME:15 = 現在の名声
    - if: era.get('flag:15') < 500
      content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「얼굴을 뵈니 예전에 만난 적은 없는 것 같네요. %YOU% 씨는 최근에 트레이너의 길에 들어서신 건가요?」"
    - if: era.get('flag:15') >= 500 && era.get('flag:15') < 2000
      content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「당신을 알고 있습니다. 신문과 TV에서 당신에 관한 소식을 보았죠. 당신이 훈련시킨 레이스 %UMA%들이 모두 훌륭한 성적을 거두고 있더군요.」"
    - if: era.get('flag:15') >= 2000
      content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「당신이 바로 트레센에서 모르는 이가 없다는 그 트레이너군요? 당신의 손을 거친 레이스 %UMA% 중에 초라한 성적을 남긴 아이는 단 한 명도 없다고 들었습니다.」"
    -
    - "%YOU%은(는) 눈앞에 있는 메지로 가주의 안목에 내심 감탄하며 긍정의 의미로 고개를 끄덕였다."
    -
    - acc: 1
      content: "「네, 만나 뵙게 되어 영광입니다.」"
    -
    - "이어서 메지로 가주는 지팡이를 짚고 벽에 있는 장식장 앞으로 걸어갔다."
    - "%YOU%도 호기심에 이끌려 조심스럽게 가주의 곁으로 다가갔다."
    - "그곳에는 메지로 맥퀸이 봄 텐노상에서 우승하고 받은 방패가 놓여 있었다."
    - "그뿐만 아니라 다른 두 개의 방패도 있었는데, 거기에는 익숙한 두 이름이 적혀 있었다."
    - "메지로 아사마, 메지로 티탄……"
    - content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「이것들은 선대들이 가문을 위해 쟁취한 영광입니다.」"
    - "마지막으로 「메지로 맥퀸」의 방패가 앞선 두 방패와 나란히 놓였다."
    - content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「이번 레이스, 아주 만족스러웠습니다.」"
    - content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「맥퀸은 이번에 자신의 우수함을 증명했고, 이제 가문의 자랑이 되었습니다.」"
    - "메지로 가주가 당신을 바라보았다. 그녀의 얼굴에는 세월의 흔적이 역력했다."
    - if: era.get('flag:15') < 500
      content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「물론, 봄 텐노상에서 우승한 것은 당신의 뛰어난 재능을 증명하는 것이기도 하지요.」"
    - if: era.get('flag:15') >= 500 && era.get('flag:15') < 2000
      content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「물론, 봄 텐노상에서 우승한 것은 당신이 훌륭한 트레이너라는 사실을 다시 한번 증명한 셈입니다.」"
    - if: era.get('flag:15') >= 2000
      content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「물론, 봄 텐노상에서 우승한 이번 레이스는 당신의 명성에 걸맞은 훌륭한 레이스였습니다.」"
    -
    - acc: 1
      content: "「과찬이십니다. 저는 그저 레이스 %UMA%의 꿈을 이뤄주는 트레이너 본연의 임무를 수행했을 뿐입니다.」"
    - "%YOU%은(는) 미소를 지으며 대답했다."
    - content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「겸손함이 몸에 배어 있군요. 보기 좋습니다.」"
    - content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「이제 당신도 메지로 가문이 인정한 트레이너입니다. 밖에서도 언행에 각별히 주의해 주십시오. 과음이나 도박 같은 불량한 습관은……」"
    - if: era.get('love:13') >= 75
      lines:
        - content:
            - fontWeight: bold
              content: "메지로 가주"
            - "「특히 맥퀸과 가까이 지낼 때라면 더욱……」"
        - content:
            - fontWeight: bold
              content: "메지로 가주"
            - "「봄 텐노상에서 우승했으니, 저도 당신들의 관계에 사사건건 간섭하고 싶지는 않습니다. 두 사람의 관계를 유지하는 것은 허락하죠. 하지만 만약 맥퀸에게 상처를 주는 일을 한다면……」"
        - content:
            - fontWeight: bold
              content: "메지로 가주"
            - "「만약 제 귀에 그런 소식이 들려온다면, 언제든 당신을 맥퀸의 곁에서 떼어놓을 수 있다는 걸 명심하십시오.」"
    - "강한 오한이 %YOU%의 등줄기를 훑었다. 한마디 한마디가 칼날처럼 마음에 새겨졌다."
    - acc: 1
      content: "「명심하겠습니다…… 가주님.」"
    - "%YOU%은(는) 긴장한 채 대답했다."
    - "만족스러운 대답을 들은 뒤에야 메지로 가주는 압도적인 기운을 거두었다."
    - "가주는 %YOU%의 어깨를 가볍게 두드리며 인자하게 말했다."
    - content:
        - fontWeight: bold
          content: "메지로 가주"
        - "「시간이 늦었군요. 자세한 이야기는 다음에 천천히 나누기로 하죠. 오늘의 주인공은 당신과 맥퀸이라는 사실을 잊지 마십시오.」"
    -
    - acc: 1
      content: "「그럼…… 이만 물러가겠습니다.」"
    -
    - "%YOU%은(는) 가볍게 묵례한 뒤, 문 앞에서 메지로 가주를 한 번 바라보고 방을 나섰다."
    -
    - "연회장으로 돌아온 %YOU%은(는) 주변을 둘러보았다."
    - "연회는 이미 시작되어 감미로운 음악이 흐르고 있었고, 화려한 예복을 입은 신사 숙녀들이 삼삼오오 모여 담소를 나누고 있었다. 고위 관계자들의 풍모가 물씬 느껴지는 그들 사이에서 자신의 트레이너라는 신분은 작게만 느껴졌다."
    - "어째서인지 마음이 조금 복잡해진다……"
    - "%YOU%은(는) 그런 생각을 떨쳐내며 연회장 안으로 들어갔다."
    - "만찬장에서 유일하게 의지할 사람은 메지로 맥퀸이었다. %YOU%의 머릿속은 「맥퀸을 찾아야 해」라는 생각으로 가득했다."
    - "%YOU%은(는) 수많은 인파를 헤치며 메지로 맥퀸의 실루엣을 찾았다."
    - "이번 만찬의 주인공 중 하나인 만큼 말을 걸어오는 사람도 적지 않았지만, %YOU%은(는) 하나하나 피했다."
    - acc: 1
      content: "「죄송합니다! 제가 맥퀸을 좀 찾아야 해서요!」"
    - "%YOU%은(는) 실내를 쭉 둘러보았다. 하지만 그 눈에 띄는 연보라색 모습은 없었다."
    - "무심코 발코니 쪽을 바라보자 그곳에 메지로 맥퀸이 있었다. 그녀는 왠지 먼 곳을 응시하고 있었다."
    - "%YOU%은(는) 서둘러 그녀가 있는 곳으로 향했다."
    - acc: 1
      content: "「맥퀸.」"
    - "메지로 맥퀸은 %YOU%의 부름을 듣고 %YOU%을(를) 바라보았다."
    - acc: 1
      content: "「여기 있었구나.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할머님과 대화는 잘 끝났나요?」"
    - "%YOU%은(는) 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기…… 할머님께서 뭐라고 하시던가요?」"
    - "%YOU%은(는) 잠시 생각에 잠겼다."
    - acc: 1
      content: "「네가 아주 훌륭하다고 칭찬하시더라.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말인가요……?」"
    - "%YOU%은(는) 가볍게 고개를 끄덕여 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……어릴 때부터 해온 노력이 헛되지 않았네요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 제 노력뿐만 아니라, 데뷔 전의 제가 사람을 보는 눈도 틀리지 않았던 것 같아요.」"
    - "메지로 맥퀸은 기쁜 미소를 살짝 지어 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레센에 입학했을 때부터 봄 텐노상 제패 축하 파티를 열고 있는 지금까지, 이 모든 게 당신 덕분이에요.」"
    - acc: 1
      content: "「직접 뵙기 전에는 굉장히 엄격하신 분인 줄 알았어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「거봐요, 제가 그랬잖아요. 사실 할머님은 아주 정이 많으신 분이라고요. 사람들이 생각하는 그런 모습이 절대 아니에요.」"
    - "하지만 정말 그럴까?"
    - "어쩌면 가주의 다정함은 가문의 %UMA%들에게만 허락된 것일지도 모른다."
    - "대화가 잠시 끊기자 두 사람은 나란히 서 있었다."
    - acc: 1
      content: "「그런데 맥퀸, 왜 계속 발코니에만 있는 거야?」"
    - "정곡을 찔린 듯 메지로 맥퀸은 움찔하더니 억지 미소를 지으며 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 이유를 말하자면 메지로 가문의 품격과는 좀 거리가 멀어질 텐데요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안에 계신 어르신들이 자꾸만 말을 걸어오셔서 조금 번거로웠거든요. 그래서 바람 좀 쐬려고 나온 거예요.」"
    - "밤바람에 머릿결이 휘날리고 눈썹을 살짝 늘어뜨린 메지로 맥퀸의 모습은 넋을 잃게 만들 정도로 매혹적이었다."
    - acc: 1
      content: "「우리 처지가 비슷하네.」"
    - "자신 역시 수많은 권유와 인사를 받았기에 하는 소리였다."
    - "%YOU%은(는) 메지로 맥퀸에게 손을 내밀었다."
    - acc: 1
      content: "「그럼 맥퀸, 나와 함께 연회를 즐겨주지 않을래? 우리가 같이 있으면 다른 사람들이 쉽게 말을 걸지 못할 거야.」"
    - "%YOU%의 요청에 메지로 맥퀸은 당신의 손을 바라보다가, 진심 어린 눈빛을 확인하고는 망설임 없이 수락했다. 그리고 발코니를 떠나 다시 실내로 향했다."
    - "실내로 돌아오자마자 드레스를 입은 낯익은 %UMA%가 두 사람 앞을 가로막았다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: ？？？
        - "「맥퀸, 그리고 %CALLNAME%!」"
    - "「라이언?」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「저예요! 설마 저를 잊어버린 건 아니죠?」"
    - "「그럴 리가. 다만 라이언이 드레스를 입은 모습은 정말 적응이 안 돼서 그래.」"
    - "뜻밖의 평가를 받은 메지로 라이언은 쑥스러운 듯 웃음을 지었다."
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「그렇죠? 역시 저한테는 트레이닝복이 더 잘 어울리는 것 같아요. 그래도 연회니까 이렇게 입는 게 예의겠죠.」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「그건 그렇고, 여기서 뭐 하고 계시는 건가요? 연회 분위기도 좀 즐기고 활동적으로 움직여야죠!」"
    - "%YOU%은(는) 가볍게 고개를 끄덕였다."
    - acc: 1
      content: "「안 그래도 그러려던 참이었어!」"
    - color: %COLOR_27%
      content:
        - fontWeight: bold
          content: %RYAN%
        - "「좋아요! 맥퀸, 좋은 시간 보내. 방해 안 할 테니까!」"
    - "멀어지는 라이언의 뒷모습을 보며 %YOU%이(가) 물었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 우리는 어디로 갈까요?」"
    - acc: 1
      content: "「맛있는 걸 먹으러 가자.」"
    - "%YOU%의 제안에 메지로 맥퀸도 곧바로 찬성했다."
    - "두 사람은 무도회장 바깥쪽, 음식이 차려진 테이블로 향해 흥미로운 요리들을 찾기 시작했다."
    - "그러다 %YOU%은(는) 초콜릿 분수 옆에서 발걸음을 멈췄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%?」"
    - "%YOU%은(는) 옅은 미소를 지었다."
    - "「어릴 때 이걸 처음 본 적이 있었어.」"
    - "「그때는 철이 없어서 입을 대고 직접 핥으려다가 초콜릿은 못 먹고 머리카락만 초콜릿 범벅이 됐었지.」"
    - "%YOU%은(는) 옆에 놓인 마시멜로와 꼬치를 집어 마시멜로를 꽂은 뒤 초콜릿 분수에 갖다 댔다."
    - "「그때 깨달았어. 이렇게 마시멜로 같은 걸 찍어서 먹는 게 올바른 방법이라는 걸 말이야.」"
    - "메지로 맥퀸은 그 이야기를 듣고 입을 가리며 작게 웃었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%께 그런 과거가 있었다니 재미있네요.」"
    - "두 사람은 즐겁게 농담을 주고받으며 맛있는 음식들을 음미했다."
    - acc: 1
      content: "「춤을 춰 보자.」"
    - "%YOU%의 제안에 메지로 맥퀸은 깜짝 놀란 눈치였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「춤을 추자고요?」"
    - "「하지만 사실 나 춤출 줄 몰라.」"
    - "%YOU%은(는) 쑥스러운 듯 덧붙였다."
    - "그럼에도 불구하고 메지로 맥퀸은 %YOU%의 손을 이끌어 무도회장 안으로 들어갔다."
    - "메지로 맥퀸과 %YOU%은(는) 마주 서서 한 손을 맞잡고 옆으로 뻗었다. 메지로 맥퀸의 다른 한 손은 %YOU%의 팔을 타고 전완부를 잡았고, %YOU%의 손은 맥퀸의 조언에 따라 체격 차이 때문에 그녀의 등에 살짝 닿는 정도가 되었다."
    -
    - "「인터넷 영상에서 자주 보던 동작 같네.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「원래 이렇게 하는 거예요.」"
    - "메지로 맥퀸은 의기양양하게 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건 시작일 뿐이라고요.」"
    - "메지로 맥퀸의 작은 조언에 따라 %SEX%의 스텝을 흉내 냈다."
    - "메지로 맥퀸이 %YOU%의 팔을 잡고 낚싯대를 던지듯 밖으로 턴을 하며 다른 팔을 바깥으로 펼쳤다가, 다시 두 사람은 가까이 모여들었다."
    - "두 사람은 서로 엇갈려 걷다가 다시 손을 뻗어 서로를 끌어당겼다."
    - "메지로 맥퀸이 한 바퀴 회전하는 순간 %YOU%이(가) 그녀의 허리를 받쳐 주었고, 맥퀸은 자연스럽게 %YOU%의 품에 몸을 맡겼다."
    - "마지막 순간 메지로 맥퀸이 살짝 놀란 표정을 지었고, %YOU%은(는) 그제야 정신을 차리고 주변을 둘러보았다."
    - "춤에 몰입하느라 조명이 자신들을 비추고 있었다는 것도, 주변에 수많은 사람이 모여 있었다는 것도 눈치채지 못했던 것이다."
    - "조명이 다시 원래대로 돌아왔다."
    - "그리고 서서히 주변 사람들의 박수갈채가 쏟아지기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「바보.」"
    - "메지로 맥퀸은 작게 투덜거렸지만, 아주 뿌듯한 표정으로 %YOU%을(를) 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이래도 춤을 못 춘다고 하실 건가요?」"
    -
    - acc: 1
      content: "「그냥 인터넷에서 이래저래 본 게 다인걸.」"
    -
    - "두 사람은 춤을 마친 뒤에도 여전히 그 여운에 젖어 있었다."
    - "「맥퀸에게 배워야 할 기술이 아직 많이 남은 것 같네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음에 시간이 날 때 다시 가르쳐 드릴게요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저 때문에 앞으로도 연회에 참석할 일이 많으실 테니까, 미리 요령을 익혀 두셔야죠.」"
    - divider: true
    - "두 사람이 연회의 다양한 활동을 즐기는 사이, 연회는 어느덧 마무리 단계에 접어들었다."
    - "두 사람은 연회장의 발코니로 나왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「연회는 어땠나요?」"
    -
    - acc: 1
      content: "「이런 자리를 딱히 좋아하는 건 아니지만, 적어도 네가 함께 있어 줬으니까 좋았어.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 당신은 정말……」"
    - "메지로 맥퀸은 웃으며 %YOU%을(를) 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예전에 메지로 가문의 여러 행사에 참석할 때면 늘 저 혼자였거든요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「혼자였으니까, 곁에 있어 준 건 %SIBLINGS%들뿐이었어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 오늘 %CALLNAME%과(와) 함께 연회를 즐길 수 있어서 정말 신선하고 특별한 기분이었어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고마워요, %CALLNAME%. 오늘 연회는 정말 행복했어요.」"
    - "메지로 맥퀸은 수줍은 듯 곁에서 속삭였다."
    - acc: 1
      content: "「천만에.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 밤은 집사 할아버지께 부탁해 객실을 하나 준비해 두었으니 편히 쉬어 주세요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 그리고 봄 텐노상이라는 무거운 짐을 이제 무사히 내려놓았잖아요. 그러니까 앞으로의 우리 관계, 아주 기대하고 있을게요.」"
    - "(그 말은, 맥퀸과 더 깊은 관계로 나아갈 수 있다는 뜻일까?)"
    - acc: 1
      content: "「알겠어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 %CALLNAME%, 안녕히 주무세요.」"
    - "그 뒤 %YOU%은(는) 집사의 안내를 받아 깔끔하게 정돈된 객실로 향했다. 몸을 씻고 잠옷으로 갈아입은 뒤 침대에 누워 깊은 잠에 빠져들었다."

want_dessert:
  title: "디저트가 먹고 싶어"
  lines:
    # 商店街
    - "맥퀸과 함께 외출하던 중 우연히 디저트 가게 앞을 지나게 되었고, 그 가게가 맥퀸의 시선을 단단히 사로잡았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 저기……」"
    - "얼굴 정면은 보이지 않았지만, %SEX%의 눈은 별처럼 반짝이고 있을 것이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음……」"
    - "%YOU%에게 폐를 끼치고 대외적인 이미지에도 영향을 줄 수 있다는 걸 아는지, 디저트의 유혹을 필사적으로 참고 있었다."
    - acc: 1
      key: select
      content: "「우리 가서 하나 먹고 갈까?」 (컨디션 +1, 호감도 +10)"
      lines:
        - "생각지도 못한 제안에 맥퀸은 깜짝 놀란 듯 %YOU%을(를) 바라보았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말인가요? %CALLNAME%?」"
        - "결심을 굳힌 %YOU%이(가) 고개를 끄덕였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 사양하지 않을게요.」"
        - "그리하여 맥퀸과 %YOU%은(는) 디저트 가게에서 행복한 휴식 시간을 보냈다."
    - acc: 2
      content: "「이제 가야지.」 (근성 +10)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아…… 네.」"
        - "맥퀸은 당신을 바라보며 아무 말 없이 고개를 끄덕였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「레이스를 위해서라면 아직은 더 참아야겠죠……」"
        - "돌아가는 길에 맥퀸은 나직이 혼잣말을 중얼거렸다."
