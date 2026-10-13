# @file キングヘイロー - 育成
# @author 牛蛙煲
# @author Claude (翻訳)

# 「自暴自棄」状態の説明：
# この状態は育成終了前に出走した短距離・マイルのレースに関わる。勝てば軽度は消失、中度は軽度、重度は中度へ。
# 負ければ逆。重度がさらに悪化すると、追い出されBEへ。
# 育成終了時にいずれかの段階の「自暴自棄」が残っていると、追い出されBEへ。
# 「自暴自棄」中は、育成系の特殊口上イベントは発生しない。
# 軽度／中度／重度の効果は、やる気上限が普通／不調／絶不調に固定されること。

# トレーニング
train:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「일류 %UMA%라면 트레이닝도 일류여야지!」"
  - "%CHARA%는 기세 좋게 트레이닝에 뛰어들었다."

# トレーニング成功
ts_content:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후우…… 아직 할 수 있어!」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「일류에 또 한 걸음 가까워졌어!」"

ts_add:
  title: "추가 트레이닝"
  lines:
    - acc: 1
      content: "「오늘 트레이닝은 여기까지야. 수고했어, 킹.」"
    - "%YOU%는 손에 든 초시계를 가볍게 흔들며 숨을 헐떡이고 달려온 킹 헤일로에게 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「드디어 끝났네…… 수건 좀 줄래?」"
    - "땀을 닦던 킹 헤일로가 문득 멈춰 트레이닝장 한쪽을 바라봤다."
    - "%YOU%가 %SEX%의 시선을 따라가 보니 아직도 몇몇 %UMA%가 추가 트레이닝을 하고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 킹의 추가 트레이닝을 계획할 권리를 주겠어!」"
    - "%YOU%가 돌아보자 킹 헤일로의 흔들림 없는 시선과 마주쳤다."
    - "일류를 추구하는 킹 헤일로를 앞에 두고 %YOU%는——"
    - acc: 1
      key: train
      content: "「그럼 일류 추가 트레이닝을 함께하자!」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오호호호! 그럼 가자!」"
        - "%YOU%는 킹 헤일로와 마지막 순간까지 함께 트레이닝했다."
    - acc: 2
      content: "「일류 %UMA%일수록 훈련과 휴식의 균형이 중요해.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「훈련과 휴식의 균형……」"
        - "「맞아, 무리해서 다치면 일류라고 할 수 없지.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「늘 최상의 상태를 유지하는 것. 그게 일류 %UMA%의 의무야. %CALLNAME% 말이 맞아.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「계속 일류이기 위해 오늘은 푹 쉬겠어!」"

train_fail:
  title: "트레이닝 실패"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「꺅!」"
    - "멀리서 킹 헤일로가 갑자기 넘어지자 %YOU%는 황급히 달려가 %SEX%를 일으켰다."
    - acc: 1
      content: "「킹, 괜찮아? 너무 무리한 거 아니야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아니, 난 괜찮아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「일류 %UMA%가 이 정도 상처로 쓰러질 리 없어……」"
    - "킹 헤일로는 태연한 척했지만 가끔 숨을 삼키는 소리가 거짓말을 들춰냈다."
    - acc: 1
      content: "「미안해, 킹. 훈련량이 너무 많았어. 의무실로 가자.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괜찮아, 정말…… 읏……」"
    - acc: 1
      content: "「정말 무슨 일이라도 생기면 평생 후회할 거야.」"
    - "그 말을 들은 킹 헤일로는 더 고집부리지 않았다. 고개를 숙인 채 순순히 %YOU%의 부축을 받아 의무실로 향했다."

race_start:
  title: "레이스 전"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이것도 킹이 일류로 나아가는 길에서 거둘 사소한 승리 중 하나일 뿐이야!」"

race_end_win:
  title: "레이스 승리"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오호호호, 당연한 승리야!」"

race_end_5:
  title: "레이스 입상"
  lines:
    - "%YOU%는 킹 헤일로의 상태가 이상하다는 걸 알아챘다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어째서…… 이럴 리가……」"
    - "「킹, 이 순위도 충분히 대단해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아니, %CALLNAME%. 우승, 완전한 승리만이 킹에게 어울리는 수준이야!」"
    - "킹 헤일로는 주먹을 꼭 쥐었다."
    - "「그럼 이번 레이스에서 반성할 점을 정리하자.」"

race_end_lose:
  title: "레이스 패배"
  lines:
    - "결과가 나왔다. 킹 헤일로는 입상조차 하지 못했다."
    - "%YOU%도 침울했다. 하지만 그보다 킹 헤일로의 마음이 걱정됐다."
    - "「괜찮아, 킹. 다음에는……」"
    - "그런데 킹 헤일로가 가벼운 말투로 %YOU%의 말을 끊었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 킹을 그렇게 나약하게 보지 마. 일류 킹의 그릇도 일류니까!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음에는 반드시 눈부신 승리로 내가 여전히 일류라는 걸 증명하겠어!」"

# 募集後・最初の週
ws_cloudy:
  title: "그늘"
  lines:
    - "%YOU%가 킹 헤일로의 트레이너가 된 지 벌써 일주일이 지났다."
    - "성격은 조금 요란하지만 %YOU%가 짜 준 과제에는 백이십 퍼센트의 각오로 임한다. 그 점은 인정할 수밖에 없다."
    - "덕분에 킹 헤일로에 대한 첫인상은 꽤 좋았다."
    - "그런 생각을 하며 트레이닝장으로 서두르니 킹 헤일로는 이미 기다리고 있었다."
    - "하지만 %SEX%는 %YOU%를 알아채지 못한 채 누군가와 통화 중이었다."
    - "%YOU%는 말을 걸지 않고 조용히 다가갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어머니? 저한테 맞는 트레이너를 찾았어요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹에게 가장 어울리는 일류 트레이너예요!」"
    - "들뜬 얼굴로 자신을 칭찬하는 말을 듣고 %YOU%는 속으로 흐뭇해했다."
    - "하지만 잠시 뒤 킹 헤일로의 얼굴에 그늘이 드리우기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『남에게 폐를 끼친다』고요? 어머니 눈에는 제가 그 정도로 보여요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저와 %CALLNAME%는 서로를 선택하고 함께 성장하는 관계예요. 왜 저 혼자 폐를 끼치는 것처럼 말씀하세요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여보세요? 여보세요!」"
    - "킹 헤일로의 어머니가 전화를 끊은 모양이다. 킹 헤일로만 멍하니 그 자리에 서 있었다."
    - "%YOU%는 서둘러 이제 막 도착한 척했다."
    - acc: 1
      content: "「킹, 벌써 와 있었네. 자, 트레이닝을 시작하자!」"
    - "킹 헤일로는 휴대폰을 넣고 아무 일도 없었다는 듯 손을 흔들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 시작하자! 킹의 일류의 길을 향해 또 한 걸음!」"

# 募集後・二週目
ws_golden_gen:
  title: "황금 세대, 등장"
  lines:
    - "요즘 외부 신문에서 「황금 세대」라는 말을 대대적으로 홍보하는 모양이다."
    - "그 황금 세대 중 하나가 다름 아닌 %YOU%의 담당 킹 헤일로였다."
    - "이에 기자들이 학원의 허가를 받고 「황금 세대」 %UMA%들의 취재를 요청했다."
    - "그날 %YOU%가 트레이닝장에 갔을 때 킹 헤일로는 아직 오지 않았다. 주변을 둘러봤다."
    - "그러자 같은 「황금 세대」 몇 명이 눈에 들어왔다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「으아아아! 취, 취재요!? 저, 저는 아무것도 몰라요!?」"
    - content:
        - fontWeight: bold
          content: "기자"
        - "「진정하세요. 최근 트레이닝은 어떤지 여쭤보고 싶을 뿐이에요.」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「트레이닝은 순조로운데요? 다만 끝나면 배가 고파서 매일…… 앗, 왜 밥 이야기로 샜지!?」"
    - "옆에서 구경하던 그래스 원더, 엘 콘도르 파사, 세이운 스카이가 거리낌 없이 쿡 웃었다."
    - "%YOU%도 스페셜 위크를 보고 덩달아 웃을 뻔했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호!」"
    - "돌아보지 않아도 알 수 있다. 담당 킹 헤일로의 등장이었다."
    - "그 성격이라면 다음에는 분명——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「취재는 전부 나한테 하도록 해!」"
    - "예상대로 방금까지 스페셜 위크에게 몰려 있던 기자들이 곧바로 킹 헤일로에게 돌아섰다."
    - "킹 헤일로는 카메라를 향해 「취재용 일류 포즈」를 취했다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「고마워요, 킹…… 정말 살았어요……」"
    - "이어 세이운 스카이가 다가와 스페셜 위크의 손을 잡았다."
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「자자, 가자. 킹이 시선을 끌어 주고 있으니까 몰래 트레이닝하자고!」"
    - "세이운 스카이는 일부러 크게 말했다. 당연히 킹 헤일로에게도 들렸다."
    - "%YOU%는 속으로 큰일 났다고 생각했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너희들! 기다려! 킹을 두고 멋대로 트레이닝할 생각이야!?」"
    - "예상대로 킹 헤일로는 취재도 잊고 동료들의 트레이닝을 따라갔다."
    - content:
        - fontWeight: bold
          content: "기자"
        - "「%CHARA_FULL%! 기다려 주세요! 취재는…… 아직 시작도 안 했어요!?」"
    - "기자는 힘없이 킹 헤일로의 등을 향해 외쳤다."
    - "그리고 원망 가득한 얼굴로 %YOU%를 돌아봤다."
    - "%YOU%는 난처해졌다고 생각했다."
    - acc: 1
      content: "「그럼 저를 취재하세요. 킹의 트레이너이기도 하니까요.」"
    - "시험 삼아 그렇게 말하자 기자의 눈이 단번에 빛났다."
    - content:
        - fontWeight: bold
          content: "기자"
        - "「그럼 묻겠습니다. 킹 헤일로의 트레이닝은 순조로운가요?」"
    - content:
        - fontWeight: bold
          content: "기자"
        - "「%SEX%에게는 어머니 같은 탁월한 재능이 있나요?」"
    - content:
        - fontWeight: bold
          content: "기자"
        - "「어머니가 정한 진로를 떠나 혼자 트레센에 온 것은 가출이나 다름없지 않나요?」"
    - ……
    - "역시 전문 기자였다. 쏟아지는 질문에 %YOU%는 정신이 아득해질 지경이었다."
    - "어떻게든 얼버무리고 겨우 기자를 돌려보냈다."
    - "이마의 땀을 닦고 멀리서 달리기에 열중한 킹 헤일로를 본 %YOU%는 앉아서 훈련이 끝나기를 기다렸다."
    - "잠시 뒤 충분히 달렸는지 킹 헤일로가 이쪽으로 걸어왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「수고했어, %CALLNAME%. 기자가 뭘 물었어?」"
    - "%YOU%는 거의 추궁에 가까웠던 질문 중 몇 가지를 적당히 골라 전했다."
    - "그러자 킹 헤일로의 얼굴이 순식간에 어두워졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시! 기자들은 언제나 나랑 어머니를 한데 묶으려 해! 내가 어머니의 부속품이라도 되는 것처럼!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「언젠가는 사람들이 나를 말할 때 『일류 킹』이라고 부르게 할 거야. 『그 사람의 자녀』 따위가 아니라!」"
    - "그 탓에 킹 헤일로는 하루 종일 기분이 나빴다."

before_begin_race:
  title: "메이크 데뷔 전"
  lines:
    - acc: 1
      content: "「드디어 정식 데뷔야. 컨디션은 어때?」"
    - "킹 헤일로의 메이크 데뷔를 앞두고 %YOU%는 %SEX%를 격려하러 대기실에 갔다."
    - "킹 헤일로는 듣고 있지 않았다. 초점 없는 눈으로 어딘가 한곳을 바라보고 있었다."
    - "잠시 뒤 %SEX%는 꿈에서 깬 듯 돌아봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「최고야! 킹이 일류로 향하는 첫걸음, 절대 헛디디지 않겠어!」"
    - acc: 1
      content: "「레이스를 앞두고 긴장돼?」"
    - "킹 헤일로는 굳은 미소를 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「일류 킹이 긴장할 리 없잖아?」"
    - "하지만 %YOU%는 킹 헤일로의 팔이 조금 떨리는 것을 알아챘다."
    - "%YOU%는 한숨을 쉬고 못 본 척했다."
    - acc: 1
      content: "「그럼 다녀와, 킹! 우승을 가져와!」"

begin_race_win:
  title: "메이크 데뷔 후·일류의 시작"
  lines:
    - "%YOU%는 관중석에서 킹 헤일로의 레이스를 처음부터 끝까지 지켜봤다."
    - "출발부터 스퍼트까지 한 걸음 한 걸음이 거의 완벽했다."
    - "숨은 보물을 찾은 듯한 기쁨을 품고 %YOU%는 스포츠음료를 챙겨 대기실로 향했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아아아! 피곤해! %CALLNAME%, 어서 음료수 줘!」"
    - "코스에서는 당당하던 킹 헤일로가 아무도 없는 대기실에 오자마자 딴사람처럼 변했다."
    - "%SEX%는 의자에 주저앉아 쉴 새 없이 부채질했다. 이마의 땀을 닦을 겨를도 없는 모양이다."
    - "%YOU%는 음료와 수건을 건넸다."
    - "킹 헤일로는 병을 들어 벌컥벌컥 마시고 힘껏 땀을 닦은 뒤에야 살아났다는 듯 숨을 내쉬었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹이 멋지게 이겼어. 하지만 그래도 피곤하네……」"
    - "무언가 더 말하려던 순간 갑작스러운 벨 소리가 가로막았다."
    - "킹 헤일로는 눈살을 찌푸리며 휴대폰을 들었다. 화면에는 「반드시 뛰어넘을 사람」이라고 떴다."
    - "%YOU%는 자리를 비켜 주려 했지만 킹 헤일로는 눈짓으로 남으라 하고 거리낌 없이 스피커를 켰다."
    - "어쩔 수 없이 %YOU%는 자리에 남았다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「킹?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 저예요. 무슨 일이세요?」"
    - "킹 헤일로의 목소리에는 감정이 거의 실리지 않았다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「메이크 데뷔에서 이겼다면서?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 이겼어요. 보셨어요? 마지막 스……」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「왜 이 시기에 데뷔했니?」"
    - "어머니의 갑작스러운 추궁에 킹 헤일로의 들뜬 말이 끊겼다."
    - "%YOU%는 킹 헤일로가 딱 굳는 모습을 봤다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「요즘은 강한 선수가 많아. 같은 세대의 데뷔전을 여럿 봤어. 뛰어나더구나.」"
    - "킹 헤일로의 입술이 움직였다. 무언가 말하고 싶은 듯했다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「무모해. 이 시기에 나서면 짓눌릴 거야.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「네 미래를 생각하렴. 어리석은 짓은 그만하고.」"
    - "킹 헤일로의 어머니는 전화를 끊었다."
    - "%YOU%와 킹 헤일로는 동시에 멍해졌다."
    - "솔직히 지난 통화를 엿들은 뒤로 둘의 관계가 팽팽하다는 건 짐작했다."
    - "하지만 이건 「팽팽하다」는 수준을 한참 넘어섰다."
    - "얼마 뒤 킹 헤일로도 정신을 차렸다."
    - "%SEX%는 오른손을 꼭 쥐었다가 한참 후에야 폈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「언젠가 반드시 뛰어넘겠어. 그때는…… 똑똑히 보여 주겠어!」"
    - acc: 1
      content: "「일류 킹이라면 분명 할 수 있어. 다음 계획을 의논해 볼까?」"
    - "기분을 전환하려고 %YOU%는 서둘러 새 화제를 꺼냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음이라고? 오——호호호! 일류 킹은 진작 생각해 둔 게 있어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「바로——클래식 3관이야!」"
    - "그 말을 듣고 %YOU%는 눈앞이 캄캄해졌다."
    - acc: 1
      content: "「그건 클래식급 레이스야. 다른 목표를 찾는 게……」"
    - "클래식 3관 자체가 터무니없는 목표는 아니다. 하지만 킹 헤일로는 생애 두 번째 레이스부터 3관에 도전할 생각인 듯했다……"
    - "그러니 주니어급에서 몇 차례 이겨 자신감을 쌓고 클래식급으로 가는 발판을 마련해야 한다."
    - "막 데뷔한 주니어 %UMA%라면 OP부터 시작해 G3, 나아가 G2로 올라가는 것도 자연스럽다……"
    - "킹 헤일로는 장래가 촉망되는 신예다. %YOU%는 G2가 좋은 출발점이라 생각했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맞아! 주니어급은 팬들에게 킹을 알릴 절호의 기회야. 놓칠 수 없어!」"
    - acc: 1
      content: "「그렇지? 그럼 서막으로 어떤 G2가 좋을까?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「G2？」
    - "킹 헤일로는 의아하게 되물었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「G2라면 이류 레이스라는 뜻 아니야?」"
    - "%YOU%는 다시 아찔해졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정했어! 킹의 일류의 길은 G1 승리로 막을 올려야 해!」"
    - "킹 헤일로는 G1을 「일류 레이스」라고 단정한 모양이다. 그렇다면 목표를 바꿀 여지는 없다."
    - "낙담하면서도 %YOU%는 진지하게 실현 가능성을 따져 보기 시작했다."
    - "메이크 데뷔 다음 첫 승리가 G1이라면 킹 헤일로가 같은 세대의 선두 주자라는 데 아무도 반박하지 못할 것이다."
    - "다만 진다면……"
    - "%YOU%는 킹 헤일로의 어머니를 떠올렸다."
    - "하지만 킹 헤일로의 우수함은 직접 봤다. 그렇다면 %SEX%와 한 번 승부를 걸어 봐도 좋지 않을까?"
    - "그렇게 생각하는 동안 결심은 점점 굳어졌다."
    - acc: 1
      content: "「그럼 『호프풀 스테이크스』는 어때?」"

# 11月第2週
ws_first_class_day:
  title: "초일류의 날"
  lines:
    - "%YOU%는 트레이너실 책상에서 트레이닝 계획에 몰두하다 요란하게 문 열리는 소리에 펄쩍 뛰었다."
    - "고개를 드니 잔뜩 들뜬 킹 헤일로가 있었다."
    - "킹 헤일로는 책상 앞으로 와 달력을 집고 오늘 날짜를 찾았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 초일류야!」"
    - "%YOU%가 아직 고개를 갸웃거리자 킹 헤일로는 달력을 건네며 「11.11」을 가리켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「보여? 1 하나면 일류. 오늘은 11.11이니까 틀림없는 초일류의 날이야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹에게 가장 어울리는 기념일이라고 할 수 있지!」"
    - if: era.get('love:61') < 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%! 오늘은 두말할 것 없이 킹이 주인공인 날이야.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「초일류 킹을 마음껏 찬양할 권리를 주겠어!」"
        - acc: 1
          content: "「음…… 오늘 킹도 눈부시네. 어제도 그랬지만 오늘은 한 단계 더 올라갔어.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「흥, 나쁘지 않아! 킹은 만족이야!」"
        - acc: 1
          content: "「그럼 초일류 킹, 초일류 트레이닝하러 가자.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 가자. 어제보다, 그제보다, 어느 날보다 멋진 킹을 보여 주겠어!」"
    - if: era.get('love:61') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「마침 1이 네 개네. 킹이 자비를 베풀어 %CALLNAME%에게 두 개 나눠 줄게.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이제 %CALLNAME%도 킹도 1이 두 개씩이야. 둘 다 『조금 초일류』네.」"
        - acc: 1
          content: "「어? 아, 고마워. 별로 필요하지는 않았지만……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%가 킹 뒤만 따라오는 건 용납 못 해. %CALLNAME%에게는 언제나 킹과 나란히 걸을 의무가 있어.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「알겠지? 나의 조금 초일류인 트레이너?」"
        - acc: 1
          content: "「더없는 영광이야! 내친김에 안아서 트레이닝장까지 데려가게 해 줘!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「허락하겠어! 모두에게 킹의 조금 초일류인 힘을 보여 주자!」"

ws_race_clothe:
  title: "승부복"
  lines:
    - "레이스 전날 밤, 킹 헤일로가 특별 주문한 승부복이 드디어 도착했다."
    - "%YOU%는 트레이너실에서 세 시간째 「결승 포즈」를 취하는 킹 헤일로를 보고 말을 잃었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%! 이 포즈가 아까 두 개보다 킹의 품격을 더 돋보이게 하지!?」"
    - "%YOU%는 적당히 맞장구쳤다."
    - "다음 순간 킹 헤일로는 또 새로운 고민에 빠졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 한 시간 전 동작이 더 어울려.」"
    - acc: 1
      content: "「킹, 더 입고 있으면 승부복에 주름 생겨. 구겨진 승부복으로 무슨 일류야?」"
    - "예상대로 킹 헤일로는 순순히 멈췄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그것도 그렇네…… 그럼 승부복은 벗을게!」"
    - "%YOU%는 안도의 한숨을 내쉬었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%는 여기서 떠나지 마. 킹은 이제 트레이닝복으로 결승 포즈 연습을 계속할 거니까!」"
    - "%YOU%는 다시 숨이 막혔다."

before_hope_sta:
  title: "호프풀 스테이크스 전"
  lines:
    - "%YOU%는 킹 헤일로의 대기실로 %SEX%를 격려하러 갔다."
    - "그런데 킹 헤일로는 별로 긴장하지 않은 듯했다."
    - "노크하고 들어가니 %SEX%는 거울 앞에서 승부복을 입은 자신의 모습을 보고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%…… 킹이 이 레이스를 멋지게 이기면 진짜 일류가 될 수 있겠지?」"
    - "%YOU%는 생각하다 긍정하려 했지만 킹 헤일로가 말을 끊었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후후, 알아. 레이스 하나로 킹이 영원히 일류일 수는 없지. 게다가 주니어급 경기인걸.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내 생각은 이 레이스를 킹의 일류의 길에서 진정한 데뷔전으로 삼겠다는 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러면 킹의 미래는 틀림없이 일류를 향해 나아가기 시작할 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「만나러 와 줘서 고마워, %CALLNAME%. 지켜봐. 이 승리도 손에 넣겠어……」"
    - "말을 마친 킹 헤일로는 옷을 정돈하고 가슴을 펴 코스로 향했다."

# 勝利
hope_sta_win:
  title: "호프풀 스테이크스 후·여정을 향해"
  lines:
    - "킹 헤일로는 예정대로 선두로 결승선을 통과했다. %YOU%와 %SEX%가 예상한 그대로였다."
    - "아쉽게도 그 순간을 지켜본 것은 뜨겁다고 하기 어려운 박수와 몇몇 수습 기자뿐이었다."
    - "주니어급 레이스는 주목도 높은 G1이라 해도 인기가 그리 높지는 않다."
    - "예상은 했다. 그래도 킹 헤일로의 눈빛이 기대에서 실망으로 바뀌는 것을 보니 마음이 아팠다."
    - "그래서 %YOU%는 %SEX%의 기분을 돌려 주려고 대기실로 향했다."
    - "숨을 헐떡이는 킹이 막 대기실 앞에 도착한 참이었다."
    - "문을 여는 손까지 떨리는 것을 보고 %YOU%는 서둘러 대신 문을 열었다."
    - "킹 헤일로는 의자를 더듬어 찾아 앉고서야 조금 편안해졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼, %CALLNAME%도 내 레이스를 봤겠지?」"
    - "%YOU%는 고개를 끄덕였다."
    - acc: 1
      content: "「완벽했어, 킹.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 킹이 나섰는데 질 리가 없잖아!」"
    - "완전히 지쳤어도 킹 헤일로는 특유의 호탕한 웃음을 잊지 않았다."
    - "실컷 웃게 놔둔 뒤 화제를 바꾸려 했다. 그런데 킹 헤일로는 생각보다 훨씬 담담했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 분위기는 그리 뜨겁지 않았네. 출전한 사람들이 경험이 적은 후배들뿐이라 그런 거겠지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹이 클래식급과 시니어급 레이스를 정복하면 이 풍경도 완전히 달라지겠지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「클래식급과 시니어급에서도 이렇게 계속 이길 수 있다면——그때의 킹이야말로 진정한 일류라고 할 수 있겠지.」"
    - "크게 신경 쓰지 않는 듯해서 %YOU%도 안심했다."
    - acc: 1
      content: "「그럼 킹, 다음 목표는?」"
    - "%YOU%의 마음속에는 이미 답이 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당연히 『사츠키상』이지! 일류 킹이 본격적으로 3관 노선에 나서는 거야!」"
    - "%YOU%의 생각과 정확히 같았다. 이 G1에서 우승했다면 클래식 3관에 도전할 실력은 있을 것이다."
    - acc: 1
      content: "「그럼 사츠키상을 목표로 함께 힘내자!」"

# 入着
hope_sta_5:
  title: "호프풀 스테이크스 후·권토중래"
  lines:
    - "킹 헤일로는 온 힘을 다했다. 하지만 마지막 스퍼트에서 스태미나가 바닥나 우승을 놓쳤다."
    - "우승은 놓쳤지만 경험도 체격도 한창 성장 중인 주니어급 %UMA%로서는 나쁘지 않은 결과다."
    - "그렇게 말하려는데 %SEX%가 발을 구르며 말을 끊었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼! 완전한 승리만이 킹의 격에 맞는 결과야!」"
    - "이번 패배가 꽤 마음에 걸리는 모양이다."
    - "주니어급에서 이름을 떨치려던 계획은 이루지 못한 듯하다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만! 나는 여전히 일류인 나야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번 작전에 실수가 있었어…… 일류 킹은 교훈을 얻고 다음 레이스에서 절대 같은 잘못을 반복하지 않을 거야!」"
    - "킹 헤일로가 %YOU%의 옷자락을 꼭 붙잡았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%! 지금 당장 킹의 추가 트레이닝을 계획할 권리를 주겠어. 사츠키상에서 다시 실력을 증명할 거야!」"
    - "벌써 스스로 마음을 다잡은 킹 헤일로를 보고 %YOU%는 조금 안심했다."

# 未入着
hope_sta_lose:
  title: "호프풀 스테이크스 후·재정비"
  lines:
    - "일류 킹 헤일로라도 G1급의 큰 무대에서는 긴장을 피할 수 없는 모양이다."
    - "그 긴장 때문에 치명적인 판단 실수가 이어졌다."
    - "결국 킹 헤일로는 입상조차 하지 못했다."
    - "%YOU%는 판단 실수가 나온 순간부터 레이스가 끝날 때까지 모두 지켜봤다."
    - "다음에는 스퍼트 트레이닝을 보강하면 분명 나아질 것이다——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%? 레이스는 벌써 끝났어. 거기서 뭘 그렇게 멍하니 보고 있어?」"
    - "정신을 차리니 킹 헤일로가 눈앞에서 걱정스러운 얼굴로 이쪽을 보고 있었다."
    - "%YOU%는 고개를 저어 괜찮다는 뜻을 전했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후후, 그럼 돌아가자.」"
    - "킹 헤일로는 결과 따위 전혀 신경 쓰지 않는다는 듯 %YOU%의 손을 잡고 밖으로 향했다."
    - acc: 1
      content: "「그런데…… 정말 괜찮아?」"
    - "킹 헤일로는 걸음을 멈추고 돌아서서 진지한 눈으로 %YOU%를 봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「한 번 졌을 뿐이야. 여기에 매달리면 다음에도 질 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그보다는 분함을 힘으로 바꿔서 다음 레이스에서 증명하는 게 더 어울리잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 이번 레이스에는 관객도 기자도 많지 않았어. 다들 크게 주목하지 않았다는 뜻이지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 킹이 졌다는 것도 모를 거야. 이렇게 조용히 노력하다 다음 레이스에서 모두를 놀라게 하면 돼.」"
    - "킹 헤일로가 등을 돌렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「돌아가자, %CALLNAME%. 트레이닝을 계속해야지!」"

ws_new_year_c:
  title: "클래식급·새해"
  lines:
    - "새해가 다가오자 학원에는 연말 분위기가 짙게 깔렸다."
    - "%YOU%는 산더미 같은 서류에서 고개를 들고서야 새해가 가까워졌다는 것을 깨달았다."
    - "하지만 그게 자신과 무슨 상관이란 말인가."
    - "눈앞의 일을 멈출 이유는 찾을 수 없었다."
    - "새해를 챙기지 않아도 상관없다. 하지만 이사장이 맡긴 일은……"
    - "학생 시절 생활비가 바닥나 컵라면을 씹어 먹던 날들이 스쳤다."
    - "회사 노예가 되어 가는구나——아니, 이미 전형적인 회사 노예가 되었는지도 모른다."
    - "자조하며 다시 일하려던 참이었다."
    - "그때 트레이너실 문에서 얻어맞는 듯한 소리가 났다. 노크라고는 할 수 없었다."
    - "%YOU%는 한숨을 쉬고 일어나 문을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹을 문밖에서 기다리게 할 셈이야? 모처럼 안부를 보러 와 줬는데!」"
    - "담당인 킹 헤일로가 한 손에 봉투를 들고 문틈으로 비집고 들어왔다."
    - "%YOU%는 눈을 동그랗게 뜬 채 한동안 %SEX%가 무슨 생각인지 알 수 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹을 빤히 보고 뭐 하는 거야? 빨리 닫아! 얼어 죽겠어!」"
    - "%YOU%는 서둘러 문을 닫았다."
    - "킹 헤일로는 거리낌 없이 서류를 바닥으로 치우고 책상에 봉투를 놓았다."
    - "다음 순간 그리 넓지 않은 트레이너실에 설 음식 냄새가 퍼졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「쳇. 부지런하다고 칭찬해야 할지, 새해 분위기도 모른다고 타박해야 할지……」"
    - "킹 헤일로는 팔짱을 끼고 못마땅한 듯 트레이너실을 둘러봤다."
    - acc: 1
      content: "「그런데…… 킹은 여기에 어쩐 일이야?」"
    - "줄곧 품고 있던 의문을 겨우 입 밖에 냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자기 트레이너를 챙기는 것도 일류의 행동이야!」"
    - "그렇게 말한 킹 헤일로는 더 상대하지 않고 멋대로 설 음식을 차리기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자, 먹어! 킹이 직접 만들지는 않았지만 직접 고른 음식이야!」"
    - "그렇게 %YOU%는 책상 옆으로 끌려가 영문도 모른 채 설 음식을 대접받게 됐다."
    - "아직 상황은 이해하지 못했다. 그래도 맛있는 음식은 확실히 마음을 위로해 줬다."
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「새해 포부? 음, 생각해 볼게……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 계속 일류를 추구하는 거겠지. 그리고 클래식 3관을 손에 넣어서 그분에게 킹의 실력을 보여 주겠어!」"
    - "킹 헤일로는 아무렇지 않게 %YOU%의 접시에서 고기 한 점을 집어 가며 대답했다."
    - "곧 %SEX%가 미간을 찌푸렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 %CALLNAME%의 새해 포부는 뭔데?」"
    - "되돌아온 질문에 빼앗긴 고기는 잠시 잊고 %YOU%는 생각했다."
    - acc: 1
      key: select
      content: "「널 모두가 존경하는 %UMA%로 키우는 거야.」(호감+10, 스킬 Pt+30)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「모두가 존경한다고? 일류 %UMA%가 이뤄야 할 일처럼 들리네.」"
        - "킹 헤일로는 흥미를 보였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 %CALLNAME%에게는 계획이 있어?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이따가 연습을 시작할까?」"
        - divider: true
          content: ⏰
          position: left
        - "킹 헤일로는 오랫동안 %YOU%에게 질문을 쏟아 냈다."
        - "그래도 킹 헤일로 덕분에 이번 새해는 제법 즐겁게 보냈다."
    - acc: 2
      content: "「설에 살이 찌지 않는 %UMA%로 키우는 거야.」(연모+2, 스피드+20)"
      lines:
        - "그 대답에 킹 헤일로가 갑자기 사레들린 듯 기침했다."
        - "겨우 진정한 %SEX%는 한층 더 못마땅한 눈으로 %YOU%를 봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%가 나를? 본인이 먹는 양부터 성장기 %UMA%를 따라잡겠는데!」"
        - "%YOU%는 자기 앞에 쌓인 뼈를 내려다보고 킹 헤일로의 앞도 봤다. 확실히 비슷한 크기다."
        - "킹 헤일로는 여유로운 얼굴로 대답을 기다렸다."
        - "%YOU%는 행동으로 답했다——휘파람을 불며 뼈 더미를 킹 헤일로 앞으로 밀었다."
        - acc: 1
          content: "「사실 킹이 제일 많이 먹은 거잖아? 먹는 양만 보면 성장기 %UMA% 두 명분이네!」"
        - "킹 헤일로는 눈을 깜빡이며 %YOU%를 보고 자기 앞을 봤다."
        - "그러더니 일어나 %YOU%의 뒤로 돌아가 귀를 붙잡았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%——적당히 해!」"
        - divider: true
          content: ⏰
          position: left
        - "킹 헤일로는 오랫동안 %YOU%에게 달라붙어 소란을 피웠다."
        - "그래도 킹 헤일로 덕분에 이번 새해는 제법 즐겁게 보냈다."

before_sats_sho:
  title: "사츠키상 전"
  lines:
    - "드디어 시작된다. 「클래식 3관」의 첫 번째 레이스, 사츠키상."
    - "킹 헤일로는 대기실에 앉아 살짝 떨고 있었다."
    - "이 레이스의 무게는 남다르다. 관객의 열기와 빽빽한 기자들이 일으키는 파도는 자신감이 부족한 출전자라면 누구든 집어삼킬 만했다."
    - "하지만 이 레이스에서 얻을 수 있는 팬 수도 무서울 정도다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「클래식급 첫 대결이야. 반드시 킹의 기세를 보여 주겠어!」"
    - "킹 헤일로는 스스로 기합을 넣기 시작했다."
    - "이내 마음을 가다듬고 가슴을 편 채 코스로 나가 관객석 앞에 섰다."
    - "관객들이 킹 헤일로의 지금까지 전적을 수군거리며 분위기가 달아올랐다."
    - "완벽한 등장——단, 그러려면……"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「으아아~! 어라? 킹도 있었네. 우연이네~」"
    - "동기이자 「황금 세대」의 일원인 세이운 스카이가 느긋한 걸음으로 킹 헤일로의 뒤를 지나갔다."
    - "기지개를 켜는 %SEX%는 도무지 레이스를 하러 온 사람처럼 보이지 않았다."
    - "관객들의 시선이 곧장 세이운 스카이에게 쏠렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스카이! 너——」"
    - "겨우 유지하던 분위기가 순식간에 무너졌다."
    - "킹 헤일로는 품위고 뭐고 내던지고 세이운 스카이를 쫓아 달려갔다."

# 皐月賞・一着
sats_sho_win:
  title: "사츠키상 후·개선"
  lines:
    - content:
        - fontWeight: bold
          content: "실황"
        - "「%UMA%들, 출발했습니다! 모두 훌륭한 출발입니다!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「선두는 세이운 스카이 선수. 도주 %UMA%로서 아주 정석적인 선택이죠.」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「그 뒤는 킹 헤일로 선수입니다. 세이운 스카이와 나란히 우승 후보로 꼽힙니다.」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「세이운 스카이 선수, 무언가 작전이 있는 듯합니다. 속도를 높이지 않고 두 번째 선수와 반 마신 차이를 유지하고 있습니다……」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「두 번째 선수가 추월하려 할 때마다 세이운 스카이가 가속해 선두를 지킵니다…… 이렇게 되면 두 번째 선수의 소모가 상당히 커지겠는데요……」"
    - "공교롭게도 두 번째 선수는 킹 헤일로였다."
    - "그 광경을 보며 %YOU%는 킹 헤일로를 걱정해 손에 땀을 쥐었다."
    - "책략가로 이름난 세이운 스카이다웠다. 출발 직후부터 이미 계책을 펼치고 있다."
    - "하지만 킹 헤일로도 얌전히 끌려다니기만 할 상대가 아니다……"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「킹 헤일로 선수, 두 번째 위치로는 만족할 수 없나 봅니다. %SEX%, 가속하기 시작합니다!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「세이운 스카이도 가속! 선두를 내줄 생각이 없는 모양입니다!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「하지만 킹 헤일로의 가속이 확실히 더 강합니다! 추월했습니다!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「그런데 킹 헤일로가 속도를 줄이지 않습니다! 아직 종반도 아닌데요?」"
    - "%YOU%는 몸을 떨며 킹 헤일로의 선발 레이스를 떠올렸다."
    - "세이운 스카이의 계책을 피하려고 킹 헤일로는 극단적인 작전을 택할 수밖에 없었던 모양이다."
    - "결과는 나쁘지 않아 보였다. 선두를 되찾으려고 세이운 스카이가 무리하게 가속하자 뒤따르던 무리도 속도를 높일 수밖에 없었다."
    - content:
        - fontWeight: bold
          content: "실황"
        - "「종반에 들어섰습니다! 킹 헤일로는 여전히 스퍼트 중, 세이운 스카이가 따라잡을 수 있을까요?」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「킹 헤일로, 확연하게 속도가 떨어집니다! 스태미나가 다한 듯합니다!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「세이운 스카이, 따라잡나요? 아, 킹 헤일로가 다시 가속합니다! 아까 지친 모습은 눈속임이었습니다!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「곧 결승선입니다. 선수들이 상당히 지쳐 있습니다!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「역시 킹 헤일로의 실력이 한 수 위였습니다! 사츠키상 우승은 킹 헤일로가 차지합니다!」"
    - "세이운 스카이의 계책에 킹 헤일로의 스태미나가 상당히 깎였다. 하지만 평소의 혹독한 트레이닝 덕분에 끝까지 힘을 쓸 여력이 남아 있었다."
    - "지쳤어도 기쁜 얼굴로 결승선을 통과하는 킹 헤일로를 보며 %YOU%도 가슴이 뜨거워졌다."
    - "곧 레이스 후 기자 인터뷰 시간이 되었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 마음껏 킹을 인터뷰할 권리를 주겠어!」"
    - "아직 숨이 가쁘다. 그래도 %SEX%는 꽤 화려하게 인터뷰에 응했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 이건 첫걸음일 뿐이야. 일류 킹은 클래식 3관을 모두 손에 넣을 생각이니까!」"
    - "기자들이 술렁였다."
    - content:
        - fontWeight: bold
          content: "기자 A"
        - "「우선 우승 축하드립니다. 그리고 『명문가의 영애』로서 어머니가 걸으셨던 노선을 따라갈 생각이신가요?」"
    - content:
        - fontWeight: bold
          content: "기자 B"
        - "「오늘 승리는 어머니의 지도 덕분이라고 할 수 있을까요?」"
    - "킹 헤일로의 표정이 눈에 띄게 굳자 %YOU%는 기자들을 위해 기도하기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「끝까지 저를 『명문가의 영애』라고 부르실 생각이라면 오늘 인터뷰는 여기까지 하겠어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 이번 우승은 전적으로 제 노력과 %CALLNAME%의 지도 덕분이에요.」"
    - "말을 마친 킹 헤일로는 곧장 자리를 떠났다."
    - "%YOU%는 물을 끼얹은 듯 조용해진 기자들에게 가볍게 목례하고 킹 헤일로를 따라갔다."

# 皐月賞・非一着
sats_sho_lose:
  title: "사츠키상 후·분발"
  lines:
    - content:
        - fontWeight: bold
          content: "실황"
        - "「%UMA%들, 출발했습니다! 모두 훌륭한 출발입니다!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「선두는 세이운 스카이 선수. 도주 %UMA%로서 아주 정석적인 선택이죠.」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「그 뒤는 킹 헤일로 선수입니다. 세이운 스카이와 나란히 우승 후보로 꼽힙니다.」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「세이운 스카이 선수, 무언가 작전이 있는 듯합니다. 속도를 높이지 않고 두 번째 선수와 반 마신 차이를 유지하고 있습니다……」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「두 번째 선수가 추월하려 할 때마다 세이운 스카이가 가속해 선두를 지킵니다…… 이렇게 되면 두 번째 선수의 소모가 상당히 커지겠는데요……」"
    - "공교롭게도 두 번째 선수는 킹 헤일로였다."
    - "그 광경을 보며 %YOU%는 킹 헤일로를 걱정해 손에 땀을 쥐었다."
    - "책략가로 이름난 세이운 스카이다웠다. 출발 직후부터 이미 계책을 펼치고 있다."
    - "침착하라고 큰 소리로 외치고 싶었다. 하지만 그럴 수 있을 리 없었다."
    - "곧 킹 헤일로가 세이운 스카이의 계책에 말려들어 지친 모습을 보이기 시작했다."
    - "그제야 %SEX%도 함정에 빠졌음을 깨달은 듯했다."
    - "하지만 너무 늦었다. 남은 스태미나로는 더 이상 빠른 스퍼트를 버틸 수 없었다."
    - "결과는 명백했다. 킹 헤일로는 우승을 놓쳤다."
    - "이기지 못한 킹 헤일로는 기자회견에도 나가지 않고 %YOU%의 손을 잡고 조용히 경기장을 떠났다."
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그러니까 제발 스태미나 트레이닝을 늘려 줘.」"
    - "그날 밤, 트레이너실."
    - "킹 헤일로는 크게 결심한 듯 %YOU%에게 부탁했다."
    - "%YOU%는 한동안 망설였다. 킹 헤일로는 본래 스태미나가 뛰어난 유형이 아니다. 스태미나에 투자해도 획기적인 변화가 생기기는 어렵다……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「부탁이야. 사츠키상은 이천 미터인데도 그렇게 힘들었어. 앞으로 나갈 이천사백 미터의 일본 더비는 더 힘들겠지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹에게는 더비 우승이 필요해. 오늘의 굴욕을 씻어 내기 위해서. 그러니까 %CALLNAME%, 스태미나 트레이닝을 늘려 줘.」"
    - "눈물이 맺힌 눈을 보고 %YOU%는 %SEX%에게 고개를 끄덕였다."

before_toky_yus:
  title: "일본 더비 전"
  lines:
    - "킹 헤일로가 무엇보다 기다렸던 일본 더비가 곧 시작된다. %YOU%는 대기실에서 %SEX%의 마지막 준비를 함께하고 있었다."
    - "초점 없는 눈으로 거울 속 자신을 바라보고 있다. 무슨 말이라도 해서 분위기를 풀어 주고 싶었다."
    - acc: 1
      content: "「킹, 긴장했구나. 그렇게……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「긴장했다고? 킹이 긴장할 리 없잖아. 난 그냥…… 멍하니 있었을 뿐이야!」"
    - "킹 헤일로는 곧바로 「일류 킹」 모드에 들어가 긴장했다는 말을 단호하게 부정했다."
    - "다시 기운을 차린 듯한 킹 헤일로를 보고 %YOU%는 속으로 안도의 한숨을 쉬었다."
    - acc: 1
      content: "「마음 놓고 다녀와. 준비는 충분히 했잖아, 그렇지?」"
    - "사츠키상 이후 %YOU%는 더비를 내다보며 스태미나 추가 훈련을 상당히 쌓아 왔다."
    - "이제 승패를 단정할 수는 없어도 킹 헤일로의 실력은 더비 우승을 노릴 수준에 이르렀다."
    - "「일류 %UMA%」인 킹 헤일로 자신도 그 사실을 잘 알고 있다."
    - "%SEX%가 긴장하는 건 자신의 실력보다 상대 선수 때문인 면이 크다."
    - "옆 대기실에는 동기이자 「황금 세대」의 일원이며 중장거리에 천부적인 재능을 지닌 스페셜 위크가 있다."
    - "킹 헤일로의 중거리 적성도 나쁘지 않다. 하지만 일본 더비는 이천사백 미터로, 중거리와 장거리의 경계에 거의 걸쳐 있다."
    - "그 거리에서 중장거리가 특기인 스페셜 위크를 이기려면 남다른 스태미나와 의지가 필요하다."
    - "사츠키상이나 호프풀 스테이크스 때보다 훨씬 긴장하는 이유도 그것이다."
    - acc: 1
      content: "「미래의 더비 %UMA%, 지금의 일류 킹. 모두에게 완벽한 레이스를 보여 줘.」"
    - "킹 헤일로는 마음을 굳히고 대기실을 나섰다."
    - "그러다 옆방의 스페셜 위크와 마주쳤다."
    - "%SEX%는 킹 헤일로보다 더 긴장한 듯했다. 잔뜩 골똘해진 얼굴이었다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「일본 제일…… 일본 제일…… 일본…… 앗!」"
    - "무언가를 중얼거리던 스페셜 위크가 킹 헤일로와 부딪혔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잠깐, 집중 좀 해!」"
    - "킹 헤일로는 어이없어하며 스페셜 위크의 어깨를 잡고 가볍게 흔들었다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「으으, 미안해요…… 레이스 생각만 하다가 너무 긴장해서 킹과 부딪혀 버렸네요……」"
    - "오히려 킹 헤일로가 조금 호기심을 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜 긴장하는 거야? 너는 이 거리가 특기잖아.」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「킹이 너무 강하니까 긴장되는 거예요……」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「으아아, 엄마한테도 더비에서 이기겠다고 약속했는데……」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「이렇게 해요. 같이 골인해서 함께 더비에서 우승해요!」"
    - "킹 헤일로는 그만 웃음을 터뜨렸다."
    - "하지만 이 작은 해프닝 덕분에 긴장이 한결 풀린 것도 사실이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 함께 힘내자.」"

# 一着
toky_yus_win:
  title: "일본 더비 후·일류를 향해"
  lines:
    - content:
        - fontWeight: bold
          content: "실황"
        - "「올해의 더비 %UMA%는——킹 헤일로!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「이 선수는 반론의 여지 없는 실력과 완벽한 질주로 경기를 압도하며 우승을 차지했습니다!」"
    - "결승선을 통과하는 킹 헤일로를 보고 %YOU%의 가슴이 거세게 뛰었다."
    - "서둘러 대기실로 먼저 가 레이스 후 쉴 준비를 했다."
    - "곧 킹 헤일로가 거친 숨을 몰아쉬며 문을 밀고 들어와 소파에 털썩 주저앉았다."
    - acc: 1
      content: "「수고했어. 정말 완벽한 승리였어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아, 하아, 당연하지. 킹이 나서면 반드시……」"
    - "갑자기 요란한 벨 소리가 울려 작은 축하 자리를 끊었다."
    - "자기 휴대폰인 것을 알아챈 킹 헤일로가 서둘러 꺼냈다."
    - "또 어머니에게서 온 전화임을 안 %YOU%는 수건을 건네고 자리를 비켜 주려 했다."
    - "이번에도 킹 헤일로는 남아 달라는 눈짓을 했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「일본 더비도 손에 넣었어요.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그래, 그래. 봤어.」"
    - "킹 헤일로의 얼굴이 환해졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 달리는 모습도 보셨나요? 출발, 가속, 스퍼트, 그리고……」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「『스페셜 위크』라는 %UMA%, 잘 달리더구나.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……네?」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「%SEX%의 출발, %SEX%의 가속, %SEX%의 스퍼트, 모두 완벽했어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 레이스에서 이긴 건 저인데요?」"
    - "킹 헤일로의 얼굴이 조금 창백해졌다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「하지만 매번 이렇게 운이 좋지는 않을 거야.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「추태를 부리며 밑천을 드러내기 전에 얼른 돌아오렴.」"
    - "말을 마친 어머니가 전화를 끊었다."
    - "%YOU%와 킹 헤일로는 서로를 바라본 채 말을 잃었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「설마…… 더비조차 어머니 눈에는 들어오지 않는 건가요?」"
    - "킹 헤일로는 말할수록 분해했다."
    - acc: 1
      content: "「괜찮아, 킹. 계속 나아가면 돼. 언젠가 반드시 보여 줄 수 있어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME% 말이 맞아. 더비로도 제대로 봐 주지 않는다면 국화상에서 우승해서 클래식급의 명실상부한 주인공이 되겠어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때도 내 성과를 못 본 척할 수는 없겠지!」"
    - "평소처럼 맞장구치려던 순간 문득 무언가를 깨닫고 입을 열지 못했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나의 일류 %CALLNAME%, 어떻게 생각해?」"
    - "%YOU%는 바로 대답하지 않았다. 평소 지구력 달리기에서 힘들어하던 킹 헤일로의 모습과 일본 더비 마지막에 기진맥진했던 스퍼트가 떠올랐다."
    - "이천사백 미터도 그렇게 힘들어했다. 국화상의 삼천 미터라면 어떻게 될까?"
    - acc: 1
      content: "「킹, 장거리에 섣불리 도전하는 게…… 정말 괜찮을까?」"
    - "%YOU%는 걱정스럽게 의문을 꺼냈다."
    - "킹 헤일로는 진지한 얼굴로 %YOU%의 어깨를 붙잡았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「알고 있어. 내 몸인걸.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 국화상은 이겨야 해. 그분이 걸었던 길이니까. 내가 그분보다 뛰어나다고 증명하려면 국화상에서 우승해야 해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스태미나 트레이닝을 계속 늘려 줘. 일류 킹은 결코 쉽게 포기하지 않아.」"
    - "흔들리지 않는 눈을 보고 %YOU%는 깊이 숨을 들이마셨다."
    - acc: 1
      content: "「원하는 대로 하자, 킹.」"

# 非一着
toky_yus_lose:
  title: "일본 더비 후·다시 앞으로"
  lines:
    - "아쉬웠다. 킹 헤일로는 질 수 없다는 기세를 보여 줬지만 결국 다른 선수에게 우승을 빼앗겼다."
    - "안타깝지만 결과는 이미 정해졌다. %YOU%는 킹 헤일로의 대기실로 향했다."
    - "킹 헤일로는 소파에 털썩 주저앉아 거친 숨을 몰아쉬었다. 눈에는 분함이 가득했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더비를 놓쳤어…… 이렇게 된 이상 일류를 증명하려면 국화상뿐이야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「일류 킹이 받아야 할 사랑과 찬사는 국화상에서 손에 넣어야 해……」"
    - "킹 헤일로가 허공으로 손을 뻗어 꽉 움켜쥐었다."
    - "무언가 말하려는 순간 갑자기 울린 벨 소리에 막혔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 또 그분이네. %CALLNAME%, 가지 말아 줄래?」"
    - "킹 헤일로는 휴대폰을 꺼내 슬쩍 보고는 바로 %YOU%에게 남아 달라고 부탁했다."
    - "%YOU%는 고개를 끄덕이고 앉았다."
    - "킹 헤일로는 잠시 망설인 뒤에야 전화를 받았다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「일본 더비에서 졌더구나.」"
    - "킹 헤일로의 기세가 단숨에 꺾였다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「벽에 부딪혔다면 얼른 돌아오렴.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「더는 망신을 당하지 말고.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만……」"
    - "전화가 끊겼다."
    - "킹 헤일로는 금방이라도 부서질 것처럼 휴대폰을 세게 움켜쥐었다."
    - "그러고는 %YOU% 쪽으로 돌아봤다. 놀랍게도 눈에는 벌써 눈물이 일렁였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 나는 반드시 국화상을 손에 넣을 거야.」"
    - "지구력 달리기 훈련에서 킹 헤일로가 기진맥진하던 모습이 떠올라 장거리 적성이 그리 좋지 않을지도 모른다고 생각했다."
    - "하지만 저 표정을 보고는 그 사실을 쉽게 꺼낼 수 없었다."
    - "그래서 %YOU%는 진지하게 고개를 끄덕였다."
    - acc: 1
      content: "「그럼 스태미나 추가 트레이닝을 계속하자.」"

ws_summer_start_c:
  title: "클래식급·합숙 시작"
  lines:
    - "학원의 관례대로 %YOU%와 킹 헤일로는 합숙지로 가 연례 여름 합숙을 시작했다."
    - "버스가 합숙지 숙소에 도착하자마자 킹 헤일로가 기다렸다는 듯 뛰어내렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이렇게 좁고 붐비는 공간은 킹의 일류 품격에 전혀 어울리지 않아!」"
    - "%YOU%는 말없이 고개를 끄덕였다. 장거리 버스가 즐거운 경험일 리 없었다."
    - "옆에서 킹 헤일로가 요란하게 기지개를 켠 뒤 돌아서서 트레센 학원 소유의 숙소를 바라봤다."
    - "역사의 무게가 정면에서 밀려온다고나 할까."
    - "%YOU%는 고개를 갸웃하며 킹 헤일로의 표정이 나른함에서 놀라움으로, 이윽고 불만으로 바뀌는 것을 지켜봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 건물, 상당히 낡았네! 정말 여기서 묵는 거야?」"
    - "당황한 얼굴을 보자 %YOU%는 문득 놀리고 싶어졌다."
    - acc: 1
      content: "「실은 말이야, 킹. 뭐든 겉과 속 양쪽에서 봐야 하는 법이야.」"
    - "%YOU%는 뒷짐을 지고 사뭇 심오한 표정을 지었다."
    - "예상대로 그 모습에 압도된 킹 헤일로가 다시 숙소로 시선을 돌렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안은 호화롭다는 뜻이야? 오——호호호! 그럼 킹도 사양하지 않겠어!」"
    - "킹 헤일로는 의심 없이 기뻐하며 짐을 들고 뛰어들어 갔다."
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까…… 안도 이렇게 낡았다는 거야?」"
    - "킹 헤일로는 얼룩진 벽을 한동안 바라보다 뒤늦게 깨달았다는 듯 %YOU%의 어깨를 잡았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%가 안은 호화롭다고 했잖아? 그런데 왜……」"
    - "%YOU%는 미소 지으며 그 움직임을 막았다."
    - acc: 1
      content: "「안이 호화롭다고는 한마디도 안 했어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 아까 %CALLNAME%가 한 말은……」"
    - acc: 1
      content: "「양쪽을 봐야 비로소 안다는 거지. 이 건물은 겉과 속이 똑같다는 걸.」"
    - "킹 헤일로가 폭발할 것 같아서 %YOU%는 서둘러 %SEX%를 앉혔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여기는 일류로 보이지 않아. 하지만 킹의 사전에 포기란 없어!」"
    - "킹 헤일로는 낡은 숙소 안을 다시 한번 둘러봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「증명하겠어. 이런 환경에서도 킹은……」"
    - "긴 연설을 각오하던 %YOU%는 %SEX%가 갑자기 말을 멈추자 고개를 갸웃했다."
    - "킹 헤일로는 화가 나 발을 구르고 이마에 맺힌 땀을 닦았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹이 이름을 떨치면 반드시 여기에 냉방 시설을 설치하게 할 거야…… 더워!」"
    - "%YOU%는 올라가는 입꼬리를 필사적으로 누르며 벌써 김이 나기 시작한 킹 헤일로를 해변으로 데려가 열을 식혀 줬다."

ws_temple_fair_c:
  title: "클래식급·여름 축제"
  lines:
    - "연일 이어진 트레이닝의 피로를 풀려고 %YOU%는 킹 헤일로에게 축제에 가자고 했다."
    - "합숙지 축제는 인기가 많아 %YOU%와 킹 헤일로는 인파에 휩쓸려 헤어질 뻔했다."
    - if: era.get('love:61') >= 50
      lines:
        - "그러자 킹 헤일로가 %YOU%의 손을 꼭 잡았다."
        - "이윽고 %SEX%는 내친김에 %YOU%의 팔을 통째로 품에 끌어안았다."
        - "살짝 저항해 봤지만 오히려 더 세게 안겼다."
        - "결국 %YOU%는 포기하고 킹 헤일로에게 끌려 축제장을 누볐다."
    - if: era.get('love:61') < 50
      lines:
        - "그러자 킹 헤일로가 %YOU%의 소매를 꼭 붙잡았다."
        - "팔을 흔들어 봤는데 다행히 움직임에 크게 지장은 없었다."
    - "헤어지지 않도록 대비한 뒤에야 두 사람은 축제 분위기를 즐기기 시작했다."
    - acc: 1
      content: "「그러고 보니 이렇게 마음 편히 놀러 나온 것도 오랜만이네.」"
    - "옆의 킹 헤일로가 가볍게 콧방귀를 뀌었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다 %CALLNAME% 때문이야. 요 며칠 스태미나 트레이닝만 했잖아. 끝나면 힘이 하나도 안 남아서 돌아가 잠만 잘 수밖에 없어.」"
    - "%YOU%는 겸연쩍게 뒤통수를 긁었다."
    - acc: 1
      content: "「그럼 강도를 낮출까?」"
    - "그런데 킹 헤일로는 고개를 저었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그건 안 돼. 킹이 일류로 가는 길에 스태미나 트레이닝은 꼭 필요해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 잊었어? 국화상에서도 계속 이겨야 모두가 진정으로 킹을 인정할 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「특히…… 그분이.」"
    - "킹 헤일로의 목소리가 갑자기 차분해졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아직 %CALLNAME%에게는 얘기하지 않았지. 킹이 트레센에 온 이유를.」"
    - "%YOU%는 고개를 끄덕였다."
    - acc: 1
      content: "「킹만 괜찮다면 지난 이야기를 듣고 싶어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹의 트레이너로서 킹의 모든 것을 알아야 할 의무도 있지. 그럼 천천히 이야기해 줄게.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이미 알겠지만 우리 어머니는 한때 우마무스메로서 코스에서 전설적인 성적을 남기셨어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「은퇴 후에는 혼자 힘으로 의류 회사를 세워 다시 크게 성공하셨지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 사업으로 바빠 나와 함께할 시간은 거의 없었어. 나도 그분에게 늘 그다지 정이 없었고.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데도 거의 비현실적인 목표만 요구하셨어. 내가 그걸 이룰 힘이 있는지는 신경도 쓰지 않고.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「난 그런 그늘 아래서 자랐어.」"
    - "말을 마친 킹 헤일로가 어쩔 수 없다는 듯 한숨을 쉬었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트윙클 시리즈의 정식 무대에 나서려고 했을 때, 그분은 내게 경영을 배워 장차 회사를 물려받으라고 하셨어……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그전까지는 엄격한 요구에도 거스르지 못했어. 하지만 그때만큼은 도저히 이해할 수 없었지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이유를 물었더니 『크게 성공하기는 어려울 테니까』라고만 하셨어. 그 밖의 이유는 없었어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 크게 싸우고 집을 뛰쳐나왔어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다행히 학원에서 받아 줘서 선수로서 트윙클 시리즈 무대에 정식으로 설 수 있었지.」"
    - "킹 헤일로는 무언가 떠올리고 %YOU%를 슬쩍 봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 %CALLNAME% 덕분에 일류라고 할 만한 성적도 몇 번 남겼어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 뒤로 어머니는 몇 번이나 전화하셨어. 그 말들 뒤에는 늘 곁으로 돌아오라는 뜻이 가득했지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그분 입장에서는 애원할 수 없잖아. 그래서 그런 말로 킹의 자신감을 꺾는 수밖에 없었겠지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 최근 통화에서는 확실히 누그러진 기색이 보였어. 킹에게 협상할 만한 힘이 생겼기 때문일 거야.」"
    - "거기까지 말한 킹 헤일로가 조금 자랑스럽게 웃었다."
    - "%YOU%는 왠지 불안해졌다."
    - acc: 1
      content: "「그럼 킹은 어머니 곁으로 돌아갈 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 무슨 농담이야? 그분은 아직 킹을 인정하지도 않았어. 게다가 킹에게는 이루고 싶은 꿈도 없는 줄 알아?」"
    - "킹 헤일로는 상당히 놀란 듯했다."
    - if: era.get('love:61') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그리고…… 킹도 %CALLNAME%와 헤어지고 싶지 않아.」"
        - "킹 헤일로가 더 세게 달라붙었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무튼 그분이 정식으로 나를 인정할 때까지는 안 돌아가!」"
    - "킹 헤일로가 고개를 들어 하늘을 봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 와중에도 기자들은 나를 『명문가의 영애』로만 대하려 해. 일류 킹으로서는 절대 받아들일 수 없어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더 많은 레이스에서 이기고 더 많은 사랑과 찬사를 모아서 진정한 일류 킹이 된 다음에 돌아갈지 생각할 거야!」"
    - acc: 1
      content: "「그럼 국화상은 반드시 이겨야겠네!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 물론이지! %CALLNAME%, 계속 킹의 스태미나 트레이닝을 계획해 줘!」"

# クラシック級・合宿終了
ws_summer_end_c:
  title: "드리우는 그늘"
  lines:
    - "어느새 여름 합숙도 끝나 가고 있었다."
    - "다른 %UMA%들은 훈련을 마치고 해변에서 자유롭게 놀고 있다. 킹 헤일로만 아직 추가 트레이닝 중이었다."
    - "끝없이 펼쳐진 모래사장과 바다를 바라보며 %YOU%는 어쩔 수 없이 한숨을 쉬었다."
    - "%YOU%도 쉬고 싶다. 하지만 킹 헤일로가 추가 트레이닝을 강하게 요구했다."
    - "그래서 결국 지구력 달리기를 반복하는 킹 헤일로를 지켜볼 수밖에 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아…… 하아…… 내 기록은 어때?」"
    - "옆의 초시계를 슬쩍 봤다. 별로 나아지지 않은 듯했다."
    - "%YOU%는 몰래 초기화 버튼을 눌렀다."
    - acc: 1
      content: "「나쁘지 않아! 힘내, 킹!」"
    - "킹 헤일로는 눈살을 찌푸리며 다가와 초시계를 빼앗았다. %YOU%는 시치미를 뗐다."
    - acc: 1
      content: "「정말이야. 얼른 쉬어.」"
    - "킹 헤일로는 몇 번 더 눌러 보더니 불만스러운 얼굴로 %YOU%에게 던져 돌려줬다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아직 할 수 있어. 한 바퀴 더……」"
    - "하지만 가쁜 숨소리가 이미 거짓말을 들춰내고 있었다."
    - "%YOU%는 한숨을 쉬며 일어나 킹 헤일로의 어깨를 받쳤다."
    - acc: 1
      content: "「조금 쉬어. 몸을 망치면 일류라고 할 수 없어.」"
    - "그 말에 킹 헤일로는 마지못해 앉았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹은 전혀 안 지쳤어. 여기서 쉬는 건 시간 낭비야……」"
    - "%YOU%의 신경은 불만스러운 중얼거림에서 곧 %SEX%의 다리로 옮겨 갔다."
    - "킹 헤일로의 다리는 장시간 높은 부하를 견디기에 분명 적합하지 않다. 지금도 가늘게 떨리고 있다."
    - "킹 헤일로는 스퍼트에 적합한 유형이다. 장거리 지구력 싸움에 섣불리 나서는 건 약점을 드러내는 것이나 다름없다……"
    - "이런데 국화상이 정말 올바른 선택일까?"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹이 말하고 있잖아! 어딜 보는 거야!」"
    - "%YOU%는 황급히 고개를 들었다가 조금 화난 킹 헤일로와 눈이 마주쳤다."
    - "오해를 피하려면 머릿속 생각을 털어놓는 수밖에 없었다."
    - acc: 1
      content: "「킹, 너는 아마……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹은 의견을 말할 권리를 거두겠어.」"
    - "킹 헤일로는 아주 단호하게 %YOU%의 말을 끊었다."
    - acc: 1
      content: "「……어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사실 아까 트레이닝하면서도 느꼈어. 무겁고 괴로운 그 감각을.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 정통 클래식 3관 노선에서 나를 증명하지 않으면 그분은 날 인정하지 않을 거야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래야 비로소 그분이 남긴 그늘에서 벗어나 모두가 존경하는 킹이 될 수 있어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 그런 말은 하지 말아 줘. 국화상에는 반드시 나갈 거야. 그리고 반드시 이길 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 이제 알겠지?」"
    - "킹 헤일로는 간절한 눈빛으로 %YOU%를 봤다."
    - "%YOU%는 오랫동안 말없이 있다가 마침내 결심했다."
    - acc: 1
      content: "「알겠어. 스태미나 트레이닝은 계속하자.」"
    - "킹 헤일로는 얼굴을 밝히며 일어서려 했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아. 그럼 킹의 일류 트레이닝을 계속…… 윽……」"
    - "강도가 지나쳐 근육통이 생긴 듯했다. 걷는 것조차 뜻대로 되지 않았다."
    - if: era.get('love:61') >= 75
      lines:
        - "킹 헤일로는 당연하다는 듯 %YOU%에게 손을 뻗었다."
        - "그 모습을 보고 %YOU%는 몸을 숙여 담당을 안아 올릴 수밖에 없었다."
        - "숙소로 돌아가는 내내 당연하게도 사람들의 손가락질을 받았다."
    - if: era.get('love:61') < 75
      lines:
        - "%YOU%는 킹 헤일로를 부축해 겨우 일으켰다."
        - "두 사람은 그대로 거북이 같은 속도로 숙소에 돌아갔다."

before_kiku_sho:
  title: "국화상 전"
  lines:
    - "평소처럼 %YOU%는 대기실에서 곧 출전할 킹 헤일로의 곁을 지켰다."
    - "하지만 이번은 지금까지와 전혀 다르다."
    - "이전 레이스도 불확실한 점은 있었다. 그래도 %YOU%는 킹 헤일로의 실력과 의지를 온전히 믿었다."
    - "이번은 다르다. %YOU%도 킹 헤일로 자신도 장거리에 맞지 않는다는 사실을 잘 안다."
    - "지옥 같은 스태미나 트레이닝을 쌓아 왔다. 하지만 그저 다른 선수들과 격차를 조금 좁혔을 뿐이다."
    - "걱정스러워 슬쩍 보니 %SEX%의 얼굴은 몹시 창백했다."
    - "온몸이 긴장으로 떨리고 있었다."
    - "%YOU%는 말없이 차가운 손을 잡고 자신의 온기로 격려했다."
    - acc: 1
      content: "「킹, 몸은 괜찮아? 어디 불편한 데는 없어?」"
    - "킹 헤일로는 애써 웃어 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전혀 없어. 지금 킹은 아주 강해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고작 삼천 미터인 국화상이 킹 헤일로의 상대가 되겠어?」"
    - "킹 헤일로는 무리해서 두려움 없는 표정을 지었다."
    - acc: 1
      content: "「그래, 믿어. 최선을 다하면 돼.」"

# 一着
kiku_sho_win:
  title: "국화상 후·진정한 일류?"
  lines:
    - content:
        - fontWeight: bold
          content: "실황"
        - "「레이스는 마지막 스퍼트에 돌입합니다! %UMA%들이 일제히 가속합니다. 장관이네요!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「선두는 킹 헤일로 선수입니다.」"
    - content:
        - fontWeight: bold
          content: "해설"
        - "「신기하군요. 본래 킹 헤일로 선수는 중·단거리에 적합합니다. 국화상은 엄연한 장거리인데요.」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「네, 게다가 %SEX%는 시종 필사적으로 달렸습니다. 장거리를 시험해 보는 게 아니라 진심으로 우승하러 온 것 같습니다.」"
    - content:
        - fontWeight: bold
          content: "해설"
        - "「어머니 때문일까요? 클래식 3관의 마지막 관문에서 그분을 따라잡으려는 걸까요?」"
    - "표정은 보이지 않는다. 하지만 해설을 들은 킹 헤일로의 속이 편치는 않을 것이라고 %YOU%는 짐작했다."
    - content:
        - fontWeight: bold
          content: "실황"
        - "「다만 너무 무리한 것 같은데요?」"
    - "%YOU%는 황급히 코스로 시선을 돌렸다. 킹 헤일로는 여전히 선두를 굳게 지키고 있다. 하지만 보폭이 흐트러지기 시작했다."
    - "뒤의 %UMA%들과는 아직 거리가 있다. 하지만 그들의 보폭은 안정적이고 여력이 남아 보였다."
    - "%YOU%는 말없이 기도했다."
    - "곧 뒤쪽 %UMA%들이 속도를 높여 거리를 좁혔고 금방이라도 추월할 듯했다."
    - content:
        - fontWeight: bold
          content: "실황"
        - "「킹 헤일로는 역시 장거리 체질이 아닙니다! 패색이 짙어지나요!?」"
    - "%YOU%는 눈을 감았다. 추월당하는 순간을 보고 싶지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「야아아아아아아아——」"
    - "킹 헤일로의 외침이 들렸다. 너무나 선명해서 가슴속에서 울린 듯했다."
    - "조심스레 눈을 뜨니 창백하던 얼굴이 비정상적일 만큼 붉게 달아올라 있었다."
    - "%SEX%는 다시 가속해 두 번째 선수를 힘껏 따돌리고 결승선을 밟았다."
    - "%YOU%는 무의식적으로 옆의 관객을 밀치고 관객석 난간을 넘었다."
    - content:
        - fontWeight: bold
          content: "실황"
        - "「거기 관객분, 코스에 들어오지 마세요! 아직 레이스가 끝나지 않았습니다!」"
    - "%YOU%는 듣지 않고 킹 헤일로에게 달려가 초점 없는 눈을 한 %SEX%를 부축했다."
    - acc: 1
      content: "「저는 킹 헤일로의 트레이너입니다. 지금 킹 헤일로는 인터뷰를 할 수 없습니다. 양해 부탁드립니다.」"
    - "눈을 동그랗게 뜬 관객들에게 재빨리 설명하고 킹 헤일로를 부축해 대기실로 향했다."
    - divider: true
      content: ⏰
      position: left
    - "%YOU%는 킹 헤일로를 대기실로 데려가 서둘러 소파에 앉혔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%…… 해냈어……」"
    - "킹 헤일로는 괴로워하면서도 조금 들뜬 목소리로 말했다."
    - acc: 1
      content: "「잘했어. 지금은 푹 쉬어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼…… 킹은 아직 할 일이……」"
    - "킹 헤일로는 휴대폰을 가져다 달라는 손짓을 하고 힘겹게 몸을 일으켜 전화를 걸었다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「킹? 무슨 일이니?」"
    - "뜻밖이었다. 어머니는 이 레이스를 보지 않은 듯했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「국화상에서 우승했어요. 저는……」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그래, 이제 인정해 줄게. 다른 용건은?」"
    - "그리고 전화가 끊겼다."
    - "%YOU%와 킹 헤일로는 휴대폰을 든 채 서로를 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「진작 알아챘어야 했는데……」"
    - "킹 헤일로는 씁쓸하게 웃으며 %YOU%에게 고개를 저었다."
    - "그러고는 더 이상 의식을 붙들지 못하고 %YOU%의 품에서 쓰러졌다."
    - acc: 1
      content: "「킹? 킹?」"
    - "%YOU%는 서둘러 경기장의 응급 의료를 맡은 구조대를 불렀다."
    - "다행히 힘을 지나치게 써서 쓰러진 것이었다. 한동안 안정을 취하면 된다고 했다."
    - "하지만 마음에 남은 상처는 그렇게 쉽게 낫지 않을지도 모른다……"

# 非一着
kiku_sho_lose:
  title: "국화상 후·이름 없는 자"
  lines:
    - content:
        - fontWeight: bold
          content: "실황"
        - "「레이스는 마지막 스퍼트에 돌입합니다! %UMA%들이 일제히 가속합니다. 장관이네요!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「선두는 킹 헤일로 선수입니다.」"
    - content:
        - fontWeight: bold
          content: "해설"
        - "「신기하군요. 본래 킹 헤일로 선수는 중·단거리에 적합합니다. 국화상은 엄연한 장거리인데요.」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「네, 게다가 %SEX%는 시종 필사적으로 달렸습니다. 장거리를 시험해 보는 게 아니라 진심으로 우승하러 온 것 같습니다.」"
    - content:
        - fontWeight: bold
          content: "해설"
        - "「어머니 때문일까요? 클래식 3관의 마지막 관문에서 그분을 따라잡으려는 걸까요?」"
    - "표정은 보이지 않는다. 하지만 해설을 들은 킹 헤일로의 속이 편치는 않을 것이라고 %YOU%는 짐작했다."
    - content:
        - fontWeight: bold
          content: "실황"
        - "「다만 너무 무리한 것 같은데요?」"
    - "%YOU%는 황급히 코스로 시선을 돌렸다. 킹 헤일로는 여전히 선두를 굳게 지키고 있다. 하지만 보폭이 흐트러지기 시작했다."
    - "뒤의 %UMA%들과는 아직 거리가 있다. 하지만 그들의 보폭은 안정적이고 여력이 남아 보였다."
    - "%YOU%는 말없이 기도했다."
    - "곧 뒤쪽 %UMA%들이 속도를 높여 거리를 좁혔고 금방이라도 추월할 듯했다."
    - content:
        - fontWeight: bold
          content: "실황"
        - "「킹 헤일로는 역시 장거리 체질이 아닙니다! 패색이 짙어지나요!?」"
    - "킹 헤일로는 온 힘을 다했다. 하지만 장거리에 특화된 다른 %UMA%들은 손쉽게 킹 헤일로를 추월했다."
    - "레이스가 끝났다."
    - "코스에서 눈빛을 잃은 킹 헤일로를 보니 %YOU%도 가슴이 무거워졌다."
    - "하지만 목숨을 건 듯한 스퍼트를 지켜봤다. 그렇기에 레이스 후 쉴 준비를 해야 했다."
    - "%YOU%는 먼저 킹 헤일로의 대기실로 향했다."
    - "곧 킹 헤일로가 극도로 지친 걸음으로 대기실에 들어왔다."
    - acc: 1
      content: "「킹, 얼른 쉬어.」"
    - "킹 헤일로는 지친 눈으로 %YOU%를 한번 보더니 그 자리에서 쓰러졌다."
    - "%YOU%는 서둘러 경기장의 응급 의료를 맡은 구조대를 불렀다."
    - "다행히 힘을 지나치게 써서 쓰러진 것이었다. 한동안 안정을 취하면 된다고 했다."
    - "깊은 집념 때문인지 킹 헤일로는 곧 눈을 떴다."
    - "%YOU%는 서둘러 곁으로 다가갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어머니한테서 전화 왔어?」"
    - "%YOU%는 순간 굳었다. 눈을 뜨자마자 하는 말이 그거일 줄은 몰랐다."
    - "킹 헤일로의 휴대폰은 대기실에 있었지만 한 번도 울리지 않은 듯했다."
    - "그래서 %YOU%는 킹 헤일로에게 고개를 저었다."
    - acc: 1
      content: "「그럼 지금 걸어 볼까?」"
    - "킹 헤일로는 오랫동안 말없이 있다가 결국 씁쓸하게 웃으며 고개를 저었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괜찮아. %CALLNAME%, 고마워.」"

# クラシック級・11月第1週
ws_determination:
  title: "일류의 결심"
  lines:
    - "국화상 이후 어느 날, 킹 헤일로가 트레이너실을 찾아왔다."
    - acc: 1
      content: "「킹? 무슨 일이야?」"
    - "%YOU%는 하던 일을 멈췄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 오늘 킹은 중요한 상담을 하러 왔어.」"
    - "킹 헤일로는 마치 이곳이 %SEX%의 성이라도 되는 듯 거리낌 없이 소파에 앉았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%도 봤지? 국화상 마지막 스퍼트에서 킹이 달리던 모습을.」"
    - "%YOU%는 고개를 끄덕였다."
    - acc: 1
      content: "「결심이 담긴 스퍼트였어.」"
    - "그 대답을 들은 킹 헤일로가 오히려 잠깐 굳었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잠깐! 그런 뜻이 아니잖아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 %CALLNAME%라면 알 거야. 마지막에는 내 스태미나가 거의 남아 있지 않았다는 걸.」"
    - "전력을 다한 스퍼트와 무서울 만큼 창백하던 그때의 얼굴이 스쳤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 장거리는 킹에게 어울리는 일류의 길이 아니야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스태미나 훈련을 충분히 쌓으면 부족한 적성을 극복할 수 있다고 생각했어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「결과는 %CALLNAME%도 봤잖아. 고작 삼천 미터인 국화상에서 힘이 다해 쓰러지기까지 했지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이른바 정통 노선이라면 다음은 연말의 아리마 기념과 시니어급 텐노상(봄)이겠지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아리마 기념은 그렇다 쳐도 삼천이백 미터인 텐노상(봄)은 킹도 이길 자신이 없어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 지금이야말로 진지하게 상의하고 어려운 결정을 내려야 할 때야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹은 이른바 정통 노선을 버리고 단거리 레이스에 도전하겠어.」"
    - "솔직히 %YOU%는 그 결정이 놀랍지 않았다."
    - "영입할 때부터 알고 있었다. 날카로운 스퍼트야말로 킹 헤일로만의 확실한 승리의 무기라는 것을."
    - "클래식급에서는 그 재능을 펼칠 기회가 적었다. 그래서 「황금 세대」 중 가장 존재감이 옅은 선수가 되어 있었다."
    - "이제 단거리로 전향하겠다는 것은 스퍼트 재능을 극한까지 살릴 좋은 기회다."
    - "그래서 %YOU%는 그 결정을 적극 지지했다."
    - "하지만 곧 다음 문제가 생겼다."
    - "우선 이 결정을 외부에 어떻게 알릴 것인가."
    - "킹 헤일로는 태연하게 손을 내저었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「걱정 마. 일류 킹에게는 다 방법이 있어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 맞아! %CALLNAME%, 요즘 무슨 레이스가 있어? 유명한 걸로!」"
    - "의도는 알 수 없었다. 그래도 %YOU%는 경기 일정을 확인해 곧 「엘리자베스 여왕배」라는 G1이 열린다는 것을 알았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 그날은 %CALLNAME%가 경기장까지 함께 가 줘야겠어!」"
    - "%YOU%는 뒤통수를 긁으며 점점 더 영문을 알 수 없었다."
    - acc: 1
      content: "「우선 지금은 출전 등록이 늦었어. 게다가 그건 중거리 레이스야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹은 그 레이스에 나가려는 게 아니야! 아무튼 그때는 같이 가 줘!」"
    - "말을 마친 킹 헤일로는 제멋대로 트레이너실을 나갔다."

# クラシック級・11月第2週
ws_the_way:
  title: "일류의 결심을 알리는 방법"
  lines:
    - "엘리자베스 여왕배가 열릴 무렵, %YOU%는 트레이너실에서 킹 헤일로를 기다렸다."
    - "마침내 킹 헤일로가 문을 두드렸다."
    - "%YOU%는 조금 놀랐다. 승부복을 입고 온 것이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 가자.」"
    - "이유를 물을 틈도 주지 않고 킹 헤일로는 %YOU%의 손을 잡아 밖으로 나갔다."
    - divider: true
      content: ⏰
      position: left
    - "엘리자베스 여왕배는 클래식 3관만큼 인기가 높지는 않다. 그래도 중거리 G1답게 많은 관객과 기자가 모여 있었다."
    - "킹 헤일로는 그 자리에 있으라고 하고 가슴을 편 채 장비를 조정하던 기자들에게 걸어갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「기자 여러분!」"
    - "기자들은 흠칫하며 고개를 들었다. 킹 헤일로인 것을 알고 어리둥절하면서도 호기심을 보였다."
    - content:
        - fontWeight: bold
          content: "기자 A"
        - "「제 기억이 맞는다면 이번 레이스에는 출전 등록을 하지 않으셨죠?」"
    - "킹 헤일로가 살짝 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘은 레이스 때문이 아니에요. 여러분의 힘을 빌려 중요한 결정을 알리고 싶어요!」"
    - "진지한 모습을 보고 기자들은 서둘러 장비를 설치했다."
    - content:
        - fontWeight: bold
          content: "기자 B"
        - "「말씀하시죠. 다만 기자회견 대신 이런 방식을 택하신 건 조금 특이하네요.」"
    - "킹 헤일로가 헛기침했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「줄곧 저를 지켜봐 주신 팬 여러분!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저는 킹 헤일로. 오늘 여러분께 일류의 결심을 전하겠어요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「클래식급에서는 클래식 3관 레이스에 출전했어요. 그래서 여러분은 제가 정통 중장거리 노선을 계속 파고들 거라고 생각하셨을지도 몰라요. 어머니처럼요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 국화상에서 알게 됐어요. 킹에게 가장 어울리는 길은 중장거리가 아니에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 트레이너와 신중히 상의한 끝에 시니어급에서는 단거리로 나아가기로 했어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저의 다음 레이스는 시니어급에서 열리는 『타카마츠노미야 기념』이에요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 이른바 『어머니의 팬』들의 시선은 그리 신경 쓰지 않겠어요. 여러분께서 알아주셨으면 해요. 저는 킹 헤일로, 일류 킹이에요. 어머니의 부속품이 아니에요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앞으로도 제 레이스를 봐 주세요. 킹이 일류를 이루는 순간을 지켜봐 주세요!」"
    - "말을 마친 킹 헤일로는 인사하고 %YOU% 쪽으로 걸어왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가자, %CALLNAME%!」"
    - "%YOU%는 뒤에서 멍하니 서 있는 기자들을 봤다."
    - acc: 1
      content: "「남아서 질문에 답하지 않아도 돼?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러면 킹의 선언이 늘어지잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 오늘 주인공은 킹이 아니야. 출전 선수들의 주목을 빼앗을 수는 없지!」"
    - "몇몇 기자가 정신을 차리고 쫓아오려 하자 킹 헤일로는 서둘러 %YOU%의 손을 잡고 자리를 떠났다."

# クラシック級・11月第3週、イベント後やる気-2
ws_break:
  title: "결렬"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 스피드 트레이닝을 늘려야겠어.」"
    - "킹 헤일로는 %YOU%의 책상에 바짝 붙어 %SEX%의 계획을 짜는 %YOU%를 지루한 듯 바라봤다."
    - "단거리 전향을 요란하게 선언한 뒤로 %YOU%는 단거리 훈련 계획을 짜느라 바빴다."
    - "스태미나 트레이닝을 줄인 뒤 킹 헤일로의 상태는 눈에 띄게 좋아졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데 %CALLNAME%, 스카이%THEY%는 요즘 뭘 하는지 알아?」"
    - acc: 1
      content: "「아마 아리마 기념과 텐노상을 착실히 준비하고 있겠지.」"
    - "%YOU%는 잠시 일을 놓고 생각했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 그럼 단거리에서는 킹이 유일한 강자라는 뜻이네!」"
    - "상상에 빠진 킹 헤일로를 슬쩍 봤다. 벌써 우승 순간을 그리는지도 모른다."
    - "상대하지 않고 일로 돌아가려던 순간 킹 헤일로의 휴대폰이 갑자기 울렸다."
    - "킹 헤일로는 황급히 꺼내 잠시 망설였다."
    - "그래도 전화를 받았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여보세요……?」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「너, 무슨 짓을 하는 거니?」"
    - "지금까지의 차가운 목소리와는 달랐다. 어머니는 상당히 화가 난 듯했다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「네가 무슨 짓을 했는지 아니? 클래식 3관에서 갑자기 단거리로 뛰어들다니, 어떻게 그런 상식 밖의 결정을 할 수 있니?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우선 저는……」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「이제 너 혼자만의 문제가 아니야. 내 체면까지 깎이는 일이야!」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「지난 몇 년 동안 조금도 반성하지 않았니?」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「킹 헤일로, 실망했다!」"
    - "어머니의 빠르고 거센 말에 킹 헤일로는 거의 끼어들지 못했다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「얼른 집으로 돌아오렴. 단거리에 나가 봐야 망신만 당할 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어요. 저는 절대 돌아가지 않겠어요.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「뭐라고?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레센에 남아서 타카마츠노미야 기념에 나가고 단거리를 제패하겠어요!」"
    - "킹 헤일로는 더 이상 참을 수 없었던 모양이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「늘 위에서 내려다보며 꾸짖기만 하고 제 성과에는 한 번도 관심을 주지 않으셨잖아요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「처음부터 끝까지 제 성장은 보려 하지도 않고 결정에 간섭하며 마음을 흔들기만 하세요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럴 거라면 이제 제 삶에서 사라져 주세요!」"
    - "말이 채 끝나기도 전에 킹 헤일로가 먼저 전화를 끊었다."
    - "그러고는 공허한 얼굴로 그 자리에 주저앉았다."
    - "%YOU%는 서둘러 일어나 킹 헤일로를 일으키려 했다."
    - if: era.get('love:61') >= 75
      lines:
        - "곁에 다가가기도 전에 %SEX%가 벌떡 일어나 %YOU%를 끌어안고 어깨에 얼굴을 묻었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%…… 이제 내 곁에는 너밖에 없어. 제발 떠나지 말아 줘……」"
        - "%YOU%는 킹 헤일로를 끌어안고 계속 등을 쓰다듬었다."
        - acc: 1
          content: "「떠나지 않을게. 약속해.」"
        - "킹 헤일로의 몸이 떨리기 시작하고 어깨에 축축함이 전해졌다."
        - "강하고 밝고 자신감 넘치던 킹 헤일로가 울고 있다."
        - "금세 왼쪽 어깨의 옷이 흠뻑 젖었다."
        - acc: 1
          content: "「킹, 끝까지 함께할게. 어서 기운 내.」"
        - "킹 헤일로는 아쉬운 듯 팔을 풀었다."
        - "그때 %SEX%의 눈은 너무 울어서 심하게 붉게 부어 있었다."
        - "%YOU%는 안쓰러워 머리를 쓰다듬었다."
        - acc: 1
          content: "「오늘은 돌아가서 쉬어. 단거리 계획은 내가 계속 짤게.」"
        - "킹 헤일로가 힘주어 고개를 끄덕였다."
    - if: era.get('love:61') < 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%…… 킹의 트레이닝 계획을 계속 짜 줘.」"
        - acc: 1
          content: "「킹, 정말 괜찮아?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……계속해 줘. 나는…… 괜찮아.」"
        - "%YOU%는 말없이 앉아 스퍼트 중심의 계획을 계속 썼다."
        - "킹 헤일로는 말없이 일어나 트레이너실을 나갔다."
        - "%SEX%의 쓸쓸한 뒷모습이 따라오지 말라고 말하고 있었다."

oc_new_year_s:
  title: "시니어급·새해"
  lines:
    - "세월은 빨라 어느새 %YOU%는 킹 헤일로와 삼 년째를 맞이했다."
    - "시니어급이 %UMA%에게 얼마나 중요한지는 말할 필요도 없다. 강적들이 즐비한 한편 이름을 떨칠 최고의 기회이기도 하다."
    - "킹 헤일로에게는 더욱 그렇다."
    - "%SEX%는 단거리 전향을 결심했다. 시니어급의 단거리 레이스들이야말로 적성을 시험할 마지막 시험이 될 것이다."
    - "하지만 그 전에 마음을 충분히 풀어 줄 필요도 있다."
    - "그래서 %YOU%는 킹 헤일로를 학원 근처 신사에 데려가 새해 참배를 했다."
    - "역시 가장 기대되는 것은 운세 뽑기일 것이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 묻잖아. %CALLNAME%가 집에서 나올 때부터 안고 있는 그 상자는 뭐야?」"
    - "킹 헤일로는 오는 내내 참다가 신사 앞에 이르러서야 물었다."
    - "%YOU%는 장난스럽게 눈을 깜빡였다."
    - acc: 1
      content: "「곧 알게 돼.」"
    - "원하는 답을 얻지 못한 킹 헤일로는 뾰로통하게 앞장서며 %YOU%를 뒤에 남겨 뒀다."
    - divider: true
      content: ⏰
      position: left
    - "곧 참배를 마치고 킹 헤일로는 소매를 걷어붙인 채 운세 뽑기 차례를 맞았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 킹의 일류 감이 확실히 말해 주고 있어! 이번에는 대길이야!」"
    - "뽑기 전 연설을 마친 킹 헤일로는 진지한 얼굴로 상자에 손을 넣었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「반드시 대길…… 어?」"
    - "「흉」이었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼, 한 번 더!」"
    - "킹 헤일로가 하나 더 뽑았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「농담이지?」"
    - "이번에는 「대흉」이었다."
    - "킹 헤일로는 화가 나 몇 번이나 뽑았다. 하지만 끝내 「대길」은 나오지 않았다."
    - "폭발할 기미가 보이자 %YOU%는 서둘러 그 상자를 꺼냈다."
    - acc: 1
      content: "「킹, 『일류 운세 뽑기』를 해 볼래?」"
    - "그 두 글자에는 마력이 있는 모양이다. 다시 뽑으려던 손이 딱 멈췄다."
    - "%SEX%는 순식간에 준비해 둔 「일류 뽑기 상자」 앞으로 다가왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이런 뽑기, 애들 장난이잖아! 시시하기 짝이 없어!」"
    - "투덜거리면서도 손은 순순히 상자로 들어갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「또 흉은 아니겠지?」"
    - "킹 헤일로는 조심스럽게 %YOU%를 한번 보고 천천히 손안의 제비를 봤다."
    - "거기에는 「일류」라고 쓰여 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 일류! 역시 일류 %UMA%는 나뿐이네!」"
    - "앞서 뽑은 나쁜 운세 따위는 순식간에 잊었다. 손의 제비를 치켜들고 기분 좋게 신사를 뛰어나갔다."
    - "%YOU%는 한숨을 쉬며 뽑기 상자를 안고 뒤쫓았다."
    - "상자 안의 제비에는 모두 「일류」라고 쓰여 있었다."
    - "평소 킹 헤일로의 머리라면 속임수를 금세 알아챘을 것이다."
    - "하지만 오늘의 킹 헤일로는 머리가 조금 덜 돌아가는 모양이다……"
    - "어쨌든 꽤 기억에 남을 새해였다."

before_takm_kin:
  title: "타카마츠노미야 기념 전"
  lines:
    - "긴장된 트레이닝이 이어지는 가운데 예정대로 타카마츠노미야 기념이 찾아왔다."
    - "스피드와 스퍼트 준비는 충분했다. 그래도 갑자기 노선을 바꾼 도박에 %YOU%는 아직 불안했다."
    - "킹 헤일로에게도 평소의 자신감과 결의가 보이지 않았다."
    - "전용 대기실에서 킹 헤일로는 의자에 앉아 거의 미친 듯이 머리를 빗고 있었다."
    - "점점 손길이 거칠어져 고운 머리카락까지 뽑히고 있었다. 어쩔 수 없이 %YOU%가 나섰다."
    - "킹 헤일로의 손을 잡아 두 손으로 감쌌다."
    - "킹 헤일로는 흠칫하더니 이윽고 진정했다."
    - "%SEX%는 어리둥절하게 손안의 머리카락을 보고서야 %YOU%가 손을 꼭 잡고 있다는 것을 알아챘다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나는……」"
    - "충혈된 눈을 보고 %YOU%는 다시 한숨을 쉬었다."
    - "단거리 전향을 결정한 뒤로 킹 헤일로의 심리적 부담은 극에 달했다."
    - "자신만만한 킹 헤일로라도 이토록 큰 도박 앞에서는 잠도 못 자고 음식도 넘기지 못한다."
    - "킹 헤일로에게 타카마츠노미야 기념에서 단거리의 발판을 마련하지 못한다는 것은 선수 생명이 끝나는 것이나 다름없었다."
    - "그래도 엄청난 압박 속에서 %YOU%가 준 과제를 모두 훌륭하게 해냈다."
    - "실력만 보면 우승할 자격은 충분하다고 %YOU%는 생각했다."
    - "하지만 마음의 긴장은 그렇게 쉽게 풀리지 않는다……"
    - "%YOU%는 손을 계속 꼭 잡았다. 긴장으로 차가워진 손이 체온으로 따뜻해질 때까지."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「미안해…… 이렇게 중요한 순간에 내가…… 이래서는 일류가 아니야!」"
    - "킹 헤일로가 주먹을 꽉 쥐었다. 눈가가 붉어져 있었다."
    - acc: 1
      content: "「최선을 다하면 돼. 일류 킹이라면 반드시 해낼 거야!」"
    - "킹 헤일로도 %YOU%의 손을 힘껏 마주 잡았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「걱정 마. 킹은 반드시 우승을 손에 넣을 거야!」"
    - "킹 헤일로는 깊이 숨을 들이마신 뒤 일어나 코스로 향했다."
    - "%YOU%는 뒷모습이 사라진 곳을 바라보며 오랫동안 움직이지 못했다."

# 一着
takm_kin_win:
  title: "타카마츠노미야 기념 후·일류란"
  lines:
    - "레이스가 끝났다. 경기장은 고요했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아…… 하아……」"
    - "킹 헤일로가 고개를 들었다. 눈부신 햇살에 눈을 가늘게 떴다."
    - "하지만 순위판의 우승 기록은 거짓말을 하지 않았다."
    - "질 수 없는 이유를 짊어진 킹 헤일로는 마침내 타카마츠노미야 기념 우승을 손에 넣었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나…… 해냈어!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「타카마츠노미야 기념의 승자는——킹 헤일로!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「이 일류 %UMA%는 클래식급에서 익숙해진 중거리를 과감히 버리고 단거리에 도전해 크게 성공했습니다!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「과연 『일류 킹』입니다.」"
    - "%YOU%와 킹 헤일로의 예상과 달리 실황은 처음으로 「명문가의 영애」라는 수식어를 붙이지 않았다."
    - content:
        - fontWeight: bold
          content: "실황"
        - "「우리는 미래와 명성을 건 한판 승부를 지켜봤습니다! 마지막 승리는 의심할 여지 없이 킹 헤일로의 것입니다!」"
    - "그제야 관객석에서 해일 같은 함성이 터졌다."
    - content:
        - fontWeight: bold
          content: "관객 A"
        - "「킹, 잘했어!」"
    - content:
        - fontWeight: bold
          content: "관객 B"
        - "「단거리에서도 이렇게 멋지다니, 이게 일류지!」"
    - content:
        - fontWeight: bold
          content: "관객 C"
        - "「킹, 여기예요! 저는 당신의 충실한 팬이에요!」"
    - "함성의 물결 한가운데서 %YOU%는 이미 눈시울이 뜨거워졌다."
    - "관객석 아래의 킹 헤일로도 마찬가지였다."
    - "남들 앞에서의 체면을 무엇보다 중요하게 여기는 %SEX%가 울고 있다."
    - "킹 헤일로는 흐느끼느라 말을 거의 못 했다. 그저 관객석을 향해 깊이 고개를 숙였다."

# 非一着。キングヘイロー離隊。恋慕75未満かつ好感225未満なら、追い出されBEへ直行
takm_kin_lose:
  title: "타카마츠노미야 기념 후·위기"
  lines:
    - "킹 헤일로가 따라잡히고 추월당했을 때 %YOU%는 얼음 구덩이에 떨어진 듯했다."
    - content:
        - fontWeight: bold
          content: "실황"
        - "「킹 헤일로, 역전당했습니다! 모든 것을 건 전직 중거리 선수에게 재역전의 여지는 남아 있을까요?」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「희망이 희박합니다! 결승선은 코앞인데 격차는 계속 벌어집니다!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「정말 안타깝습니다. 킹 헤일로 선수의 단거리 꿈이 여기서 깨질 듯합니다!」"
    - "패배가 확실해졌다. 주변 관객들은 승자를 향해 환호하기 시작했다."
    - "%YOU%는 의자에 주저앉아 주변 소음을 듣지 못했다."
    - "함성이 머뭇거리는 수군거림으로 바뀔 때까지."
    - content:
        - fontWeight: bold
          content: "실황"
        - "「킹 헤일로 선수? 어디로 가십니까! 돌아오세요!」"
    - "%YOU%는 벌떡 일어났다. 마침 킹 헤일로가 난간을 넘어 경기장 밖으로 달려가는 뒷모습이 보였다."
    - acc: 1
      content: "「킹——」"
    - "한순간도 망설이지 않고 뒤쫓으려 했다. 하지만 주변 인파가 가로막았다."
    - "겨우 인파를 빠져나왔을 때는 킹 헤일로의 모습이 완전히 사라진 뒤였다."

# シニア級・4月第1週。高松宮記念一着でのみ発生
ws_special_letter:
  title: "특별한 감사 편지"
  lines:
    - "출근길에 %MINORU%와 마주쳤다."
    - "%SEX%는 킹 헤일로와 %SEX%의 트레이너 앞으로 팬의 감사 편지가 와서 이미 %YOU%의 트레이너실에 가져다 두었다고 말했다."
    - "%YOU%는 잠깐 멈칫했다가 들떠서 %MINORU%에게 감사했다."
    - "헤어진 뒤 서둘러 트레이너실로 가 문을 열었다."
    - "역시 책상 위에 흰 봉투가 있었다."
    - "집어 들고 보낸 사람의 주소를 보더니 묘한 표정으로 다시 내려놓았다."
    - "그러고는 킹 헤일로의 다음 훈련을 계획하며 %SEX%를 기다렸다."
    - "곧 킹 헤일로가 왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 일류 킹 헤일로, 등장!」"
    - "평소처럼 요란한 모습을 보고 웃음을 참으며 손의 봉투를 슬쩍 보여 줬다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건 뭐야?」"
    - acc: 1
      content: "「팬이 보낸 감사 편지야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐라고? 빨리 킹한테 보여 줘!」"
    - "예상대로 감사 편지라는 말만 듣고 들떠서 책상 앞으로 와 편지를 빼앗았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「누가 보냈을까…… 어? 오사카시 구치소?」"
    - "들뜬 표정이 그대로 굳었다."
    - "그 모습을 보고 %YOU%는 웃음을 터뜨렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜 구치소야. 킹의 팬들은 변변찮은 사람들뿐이라는 거야?」"
    - "킹 헤일로의 기세가 단번에 꺾였다."
    - "%YOU%는 웃음을 거두고 열어 보라고 손짓했다."
    - "킹 헤일로는 투덜거리며 봉투를 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레센 학원의 %CHARA_FULL%와 %SEX%의 트레이너님께.」"
    - "킹 헤일로는 고개를 들어 %YOU%를 한번 보고 계속 읽었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저는 오사카시 구치소에 있는 당신의 팬입니다. 얼마 전 타카마츠노미야 기념 영상을 봤습니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그전까지는 당신이 계속 중거리에서 달릴 줄 알았습니다.」"
    - ……
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그 후 곰곰이 생각했습니다. 킹 헤일로가 시니어급에 과감히 단거리로 전향하고 노력으로 우승을 거둔 것이 얼마나 존경할 만한 일인지요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 레이스에 진심으로 감동했습니다. 저도 하루빨리 갱생해 사회로 돌아가 다시 킹 헤일로를 응원하고 싶습니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「진심을 담아. 구원받은 사람 올림.」"
    - "특별한 팬레터를 다 읽자 트레이너실에 침묵이 내려앉았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내 팬…… 상당히 특별하네?」"
    - "킹 헤일로도 어떻게 받아들여야 할지 모르는 듯했다."
    - acc: 1
      content: "「그러니까 킹이 자기 실력으로 누군가의 세상에 빛이 되어 줬다는 거야.」"
    - "그 말에 킹 헤일로는 잠시 굳었다."
    - "그러더니 활짝 웃으며 손의 편지를 흔들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 일류인 나만 할 수 있는 일이네!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 앞으로 %CALLNAME%는 더 일류다운 트레이닝을 짜 줘. 나도 더욱 일류가 될 테니까!」"

# 高松宮記念非一着。シニア級・4月第1週。恋慕75以上、または好感225以上
ws_crisis:
  title: "위기와 전환점"
  lines:
    - "타카마츠노미야 기념에서 패한 킹 헤일로는 말없이 사라졌고 바깥의 폭풍은 고스란히 %YOU%에게 쏟아졌다."
    - "골치 아픈 일임에는 변함없었다."
    - "킹 헤일로의 행방을 찾느라 학원에 돌아가지도 못했다."
    - "%TASTE%와 %MINORU%도 말했다. 킹 헤일로의 어머니가 몇 번이나 학원에 항의하며 %YOU%의 해고를 요구하고 있다고."
    - "학원 측은 오랜 명예를 걸고 반드시 찾아내겠다고 어머니에게 약속했다고 한다."
    - "그 때문에 %YOU%의 부담은 더 커졌고 연일 계속된 수색에 기진맥진해졌다."
    - "유일한 단서는 떠난 대략적인 방향뿐이었다. 그 밖에는 아무것도 없었다."
    - "그래서 결국 익숙한 트레이너실로 돌아와 잠시 쉬며 앞으로의 일을 생각했다."
    - "정신이 극도로 지쳐 있었다. 책상 위의 종이 한 장을 발견하기 전까지는."
    - "%YOU%의 심장이 멎는 듯했다."
    - "아직 읽지도 않았다. 하지만 직감이 말해 줬다. 이 종이가 킹 헤일로를 찾을 마지막 기회라고."
    - "거의 책상으로 달려들다시피 해서 종이를 집었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 정말 미안해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「타카마츠노미야 기념이 끝나고 내가 그런 행동을 해서 많이 곤란했겠지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「경솔한 행동을 용서해 줘. 그럴 생각은 아니었어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나는 그저…… 앞으로 쏟아질 비난과 조롱을 마주할 수 없었어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어머니도 학원에 오셨겠지. 제발 너에게 심한 짓은 하지 않으셨으면 좋겠어……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 편지를 그분에게 전해 줘. 모두 내 책임이고 너와는 상관없다고.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 이제 나를 신경 쓰지 말아 줘.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나는 곧 여기를 떠날 거야. 부디 나를 잊고 더 뛰어난 아이를 찾아 줘.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「일류가 아닌 %CHARA%가」"
    - "생각할 틈도 없었다. 종이를 움켜쥐고 트레이너실을 뛰쳐나갔다."

# 前イベントの続き。場所は駅
os_give_up:
  title: "자포자기"
  lines:
    - "「떠난다」고 쓰여 있던 것을 단서로 %YOU%는 무의식적으로 역으로 향했다."
    - acc: 1
      content: "「갈색 머리의 %UMA%를 보셨나요?」"
    - content:
        - fontWeight: bold
          content: "매표소 직원"
        - "「봤어요! %SEX%는 저쪽 버스 정류장으로 갔어요.」"
    - "이렇게 빨리 단서를 찾을 줄은 몰랐다."
    - "직원에게 몇 번이나 감사하고 가리킨 정류장으로 향했다."
    - "길에는 사람이 없었다. 하늘에는 납빛의 두꺼운 구름이 빠르게 모여들었다."
    - "정오 무렵인데도 밤처럼 어두웠다."
    - "갑자기 구름 너머에서 천둥이 울렸다."
    - "억수 같은 비가 순식간에 %YOU%를 머리부터 적셨다."
    - "알아채지도 못한 듯 앞으로 나아갔다. 흐릿한 시야에 그림자 하나가 나타날 때까지."
    - acc: 1
      content: "「키——잉——!」"
    - "며칠간의 압박을 있는 힘껏 외쳐 쏟아 냈다."
    - "그 그림자가 크게 움찔했다. 하지만 돌아보지 않았다."
    - "점점 짙어지는 빗줄기를 뚫고 킹 헤일로의 곁으로 달렸다."
    - acc: 1
      content: "「킹…… 드디어 찾았다……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제발…… 돌아가 줘. 일류도 아닌 나에게 시간을 쓸 필요는 없어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%의 믿음도 팬들의 믿음도 저버렸어. 나는 이제…… 이제……」"
    - "킹 헤일로의 몸이 거세게 떨렸다. 벌써 울기 시작한 모양이다."
    - if: era.get('love:61') >= 75
      lines:
        - acc: 1
          content: "「딱 한 번만 더 고집부리게 해 줘…… 돌아와, 킹!」"
        - "문득 무언가 떠오른 듯 주머니에서 구겨진 작은 종이를 꺼냈다."
        - "거기에는 「킹에게 무엇이든 시킬 권리. 해석은 킹에게 달려 있음」이라고 쓰여 있었다."
        - acc: 1
          content: "「킹, 내 곁으로 돌아와 줘!」"
        - "종이를 본 킹 헤일로가 굳었다."
        - "잠시 뒤 %SEX%의 눈물이 터져 나왔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「해석은 내 마음이야, %CALLNAME%…… 돌아가 줘. 이대로…… 나를 잊어 줘……」"
        - "킹 헤일로는 독하게 마음먹고 등을 돌려 떠나려 했다."
        - "아득해진 정신 속에 다시는 만나지 못할 비참한 미래가 보였다."
        - "그래서 한 걸음 나아가 킹 헤일로의 손을 잡았다."
        - acc: 1
          content: "「킹, 네가 없는 날들은 상상할 수 없어……」"
        - "코끝이 찡해지며 %YOU%도 울었다."
        - "킹 헤일로는 조금 힘을 줬지만 결국 손을 뿌리치지 못했다."
        - acc: 1
          content: "「이번에 진 건 괜찮아. 돌아가자. 다시 준비해서 앞으로 나아가자!」"
        - "킹 헤일로가 갑자기 돌아서 %YOU%를 끌어안았다."
        - "몸에 묻은 비에 젖지 않게 물러나려 했지만 킹 헤일로는 꼭 끌어안고 있었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 약속해! %CALLNAME%는 내가 자신감을 되찾을 때까지 곁에서 떠나지 않을 거라고!」"
        - "%YOU%는 말없이 똑같이 힘껏 끌어안았다."
        - "비는 점점 거세졌다. 하지만 두 사람 모두 상대를 놓아줄 생각은 전혀 없었다."
        # 軽度の自暴自棄を得る。やる気上限は普通のまま
    - if: era.get('love:61') < 75
      lines:
        - acc: 1
          content: "「진심으로 킹을 믿어.」"
        - "먼 옛날의 선발 레이스가 떠올랐다."
        - acc: 1
          content: "「킹, 전문 트레이너인 내 안목을 믿어 줘.」"
        - "킹 헤일로는 눈물 어린 눈으로 %YOU%를 봤다."
        - "잠시 뒤 %SEX%의 눈물이 터져 나왔다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말 나를 믿어 줘? 이제 아무것도 남지 않은 나를?」"
        - "%YOU%는 진지하게 고개를 끄덕였다."
        - "킹 헤일로가 손등으로 눈물을 닦았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼…… 돌아가자. %CALLNAME%, 그렇게 젖어 있으면 감기 걸려.」"
        # 中度の自暴自棄を得る。やる気上限は不調のまま

ws_legend:
  title: "전설의 시작"
  lines:
    - "타카마츠노미야 기념은 한참 전에 끝났다. 하지만 이 레이스가 킹 헤일로의 선수 생활에 얼마나 중요한지는 말할 필요도 없다."
    - "우선 단거리 적성을 증명할 수 있다."
    - "그리고 「킹만의」 일류 팬들을 만들 수 있다."
    - "그렇다면 다음 레이스를 고르는 일도 시작해야 한다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 일류 킹, 등장!」"
    - "킹 헤일로는 여전히 자연스럽게 트레이너실 문을 열고 크게 웃으며 들어왔다."
    - "그러더니 거리낌 없이 바짝 다가왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭘 하고 있어, 나의 일류 트레이너?」"
    - "%YOU%는 들고 있던 경기 일정을 킹 헤일로에게 건넸다."
    - acc: 1
      content: "「킹은 나가고 싶은 레이스가 있어?」"
    - "킹 헤일로가 일정을 받아 살폈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 이 야스다 기념은 어때?」"
    - "%YOU%는 생각했다. 야스다 기념은 천육백 미터의 G1으로 마일 레이스다."
    - "킹 헤일로가 지금까지의 성과를 이어 다음 단계로 나아갈 목표로 상당히 적합하다."
    - "그래서 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 킹의 안목은 정확하네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데 스카이%THEY%는 요즘 어떻게 지내는지 모르겠네.」"
    - "%YOU%는 생각했다. 「황금 세대」 중 중장거리가 서툰 건 킹 헤일로 정도인 듯하다."
    - acc: 1
      content: "「텐노상(봄)을 준비하고 있지 않을까?」"
    - "확실히 텐노상(봄)은 이름난 장거리 레이스로 장거리 적성이 있다면 대부분 거치는 길이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇다면…… 오——호호호!」"
    - "킹 헤일로가 갑자기 귓가에서 크게 웃기 시작했다."
    - "%YOU%는 아직 울리는 귀를 감싸고 영문을 모르겠다는 듯 킹 헤일로를 봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스카이%THEY%는 텐노상(봄)에 집중하고 있어. 그럼 단거리와 마일에 남는 건 킹뿐이잖아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「강적들이 방해하지 않는다면 올해 단거리와 마일은 킹이 싹쓸이하겠어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇게 되면 킹은 명실상부한 주인공이야!」"
    - "%YOU%는 생각했다. 타카마츠노미야 기념에서의 질주는 강했다. 올해 단거리와 마일을 제패해 진정한 일류가 될 가능성은 충분하다."
    - acc: 1
      content: "「기대할게. 계속 힘내!」"
    - "킹 헤일로는 크게 웃으며 트레이너실을 나갔다."

# 安田記念一着。高松宮記念一着でのみ発生
yasu_kin_win_s:
  title: "야스다 기념 후·킹의 길"
  lines:
    - "마일급 레이스는 처음이었다. 그래도 날카로운 가속과 스퍼트가 킹 헤일로를 우승으로 이끌었다."
    - content:
        - fontWeight: bold
          content: "실황"
        - "「킹 헤일로! 승자는 킹 헤일로입니다! 타카마츠노미야 기념 우승의 기세를 이어 마일에서도 다시 이겼습니다!」"
    - "킹 헤일로가 결승선을 통과하자마자 관객석에서 전례 없는 환호가 터졌다."
    - "모두가 환호하며 뛰어올랐다. 또 한 명의 단거리·마일 왕자가 탄생하는 순간을 목격한 기쁨에 들떠 있었다."
    - "킹 헤일로에게도 이 엄청난 함성이 들리는 모양이다. 꼿꼿이 선 귀의 미세한 떨림이 지금의 마음을 말해 줬다."
    - "하지만 %SEX%는 담담하게 관객석에 인사하고 자리를 떠났다."
    - "그 태도에 조금 어이없으면서도 진심으로 기뻤다."
    - "그래서 %YOU%는 대기실로 먼저 가 킹 헤일로를 기다렸다."
    - "곧 킹 헤일로가 대기실 문을 열고 들어와 건네준 수건과 음료를 받았다."
    - acc: 1
      content: "「달려 보니 어땠어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「초일류의 경험이었어!」"
    - "킹 헤일로는 손발을 움직여 가며 레이스의 전말을 이야기하기 시작했다."
    - "이번 레이스를 진심으로 즐긴 모양이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……마지막에는 따라붙어서……」"
    - "갑자기 대기실 문을 두드리는 소리가 났다."
    - content:
        - fontWeight: bold
          content: "직원"
        - "「킹 헤일로 선수, 괜찮으실까요? 열렬한 팬이라는 분들이 몇 분 만나고 싶다고 하셔서…… 거의 막을 수가 없네요…… 죄송합니다.」"
    - "%YOU%와 킹 헤일로는 눈을 마주치며 서로의 기쁨을 읽었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「들어오세요, 어서요!」"
    - "들뜬 얼굴의 팬 몇 명이 문을 열더니 입구에서 서로 먼저 들어가라며 양보하기 시작했다."
    - "킹 헤일로는 이마를 짚고 일어나 문 앞으로 갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 밖에서 이야기하죠.」"
    - content:
        - fontWeight: bold
          content: "팬 A"
        - "「킹과 킹의 트레이너 %SIR%, 저희는 열성 팬입니다! 이번 레이스 우승을 축하드려요!」"
    - content:
        - fontWeight: bold
          content: "팬 B"
        - "「네, 저희는 타카마츠노미야 기념부터 킹을 지켜봤어요. 그동안 정말 수고하셨어요!」"
    - "그 말에 킹 헤일로는 잠시 굳었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까…… 타카마츠노미야 기념부터 저를 봐 주셨다고요?」"
    - "그 말을 들은 팬들은 조금 부끄러운 듯 고개를 숙였다."
    - content:
        - fontWeight: bold
          content: "팬 C"
        - "「킹의 멋진 막판 스퍼트에 반했거든요…… 그래도 걱정 마세요. 이전 레이스 영상도 여러 번 봤어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 부끄러워할 필요 없어요! 타카마츠노미야 기념 이후의 킹이야말로 진짜 킹이니까요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「클래식급에도 팬은 많았어요. 하지만 다들 원래 어머니의 팬이었고 저도 어머니와 같은 정통 노선으로 갈 거라고 생각했죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 단거리로 전향한다고 하자 『길을 잘못 들었다』며 화내고 떠났어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어머니의 명성을 보고 온 사람들을 제 팬이라고 부르고 싶지는 않아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니 킹의 단거리 레이스를 보고 킹을 인정해 주신 여러분 같은 분들이야말로 제가 정말 원했던 팬이에요.」"
    - "킹 헤일로는 상당히 감동한 채 이유를 설명했다."
    - content:
        - fontWeight: bold
          content: "팬 A"
        - "「더없는 영광입니다! 앞으로도 킹을 따르고 언제까지나 응원하겠습니다!」"
    - content:
        - fontWeight: bold
          content: "팬 B"
        - "「킹이 계속 달리면서 모두에게 멋진 일류 레이스를 보여 주셨으면 좋겠어요.」"
    - content:
        - fontWeight: bold
          content: "팬 C"
        - "「맞아요. 킹, 트레이너 %SIR%. 다음은……?」"
    - "킹 헤일로도 같은 것이 궁금했던 모양이다. %SEX%와 팬들이 일제히 %YOU%를 봤다."
    - acc: 1
      content: "「킹은 단거리에서 충분히 압도적인 실력을 보여 줬어요. 그렇다면 그걸 더 넓혀야겠죠?」"
    - content:
        - fontWeight: bold
          content: "팬 A"
        - "「하반기의 『스프린터스 스테이크스』 말씀이시죠?」"
    - "팬들은 관련 레이스를 잘 아는 모양이다. 곧바로 맞혔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맞아요! 그 레이스에서 우승하면 단거리에서 킹의 일류 위상이 완전히 굳어질 거예요!」"
    - content:
        - fontWeight: bold
          content: "팬 B"
        - "「그럼 꼭 응원하러 갈게요!」"
    - content:
        - fontWeight: bold
          content: "팬 C"
        - "「킹과 트레이너 %SIR%, 계속 힘내세요!」"
    - divider: true
      content: ⏰
      position: left
    - "팬들은 떠났지만 %YOU%와 킹 헤일로의 벅찬 마음은 오랫동안 가라앉지 않았다."

# 高松宮記念勝利でのみ発生
ws_temple_fair_s:
  title: "시니어급·여름 축제"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「빨리 가자!」"
    - "트레이닝이 끝나자 킹 헤일로는 기다릴 수 없다는 듯 %YOU%의 손을 잡고 축제로 향했다."
    - "올해 킹 헤일로는 작년보다 훨씬 기운차다. 훈련 계획을 바꾼 덕분일지도 모른다."
    - "킹 헤일로는 지구력 달리기에 맞지 않는다. 작년 합숙은 거의 스태미나 트레이닝뿐이었다."
    - "지금은 스피드와 스퍼트가 중심이다. 그래서 끝난 뒤에도 체력이 꽤 남는다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 무슨 생각이야? 분명 트레이닝 생각이지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 오늘은 쓸데없는 생각을 할 권리를 거두겠어! 마음껏 킹과 놀아 줘.」"
    - "킹 헤일로의 말에 생각에서 벗어나 현실로 돌아왔다."
    - "이미 충분한 성적을 거뒀다. 푹 쉬어도 될 것이다."
    - "그렇게 생각하며 반쯤 끌려가듯 축제장에 도착했다."
    - "올해는 작년보다 축제 분위기가 짙게 느껴졌다. 지나치게 서두르는 목표가 없어서일까."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 봐! 저기서 킹의 레이스 영상을 보고 있어!」"
    - "킹 헤일로가 가리킨 곳을 보고 %YOU%는 말을 잃었다."
    - "그 노점에는 「황금 세대」 간판이 걸려 있는데 아무것도 팔지 않았다."
    - "대신 화면 다섯 개가 나란히 놓여 황금 세대의 다섯 %UMA%가 시니어급에서 뛴 레이스 영상을 각각 보여 주고 있었다."
    - "다만 킹 헤일로가 출전한 타카마츠노미야 기념은 단거리다. 그래서 킹 헤일로의 영상이 가장 먼저 끝났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 내가 %THEY%보다 먼저 골인했네! 역시 일류 킹이야!」"
    - "%YOU%는 옆의 이 사람을 상대하지 않기로 했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데…… %THEY%를 못 본 지도 꽤 됐네.」"
    - "황금 세대의 다른 멤버들은 중장거리가 중심이다. 코스에서는 만나기 어렵다."
    - "다들 다음 레이스 준비로 바빠 경기장 밖에서도 거의 만나지 못할 것이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가끔은 킹도 데뷔 전에 %THEY%와 나란히 달리던 때가 그리워져.」"
    - "%YOU%와 킹 헤일로가 알아채지 못하는 곳에서 회색 머리 %UMA%의 귀가 몇 번 살짝 떨렸다."
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: "수수께끼의 %UMA%"
        - "「어라~~ 킹도 가끔 그런 생각을 하는구나. 그럼 %SEX%와 상의해 볼까~」"

ws_summer_end_s:
  title: "시니어급·합숙 종료"
  lines:
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「그럼 그렇게 해도 되지?」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「네! 저도 그런 결말이 기대돼요!」"
    - "두 %UMA%는 일찌감치 짐을 꾸리고 몰래 킹 헤일로의 트레이닝을 지켜봤다."
    - "%THEY%는 무언가 큰 계획을 실행하려는 모양이다."
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「일류 트레이닝, 완벽하게 끝났어!」"
    - acc: 1
      content: "「좋아, 끝났으면 짐을 챙길까?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아직 시간은 있어. 킹의 추가 트레이닝을 짤 권리를 주겠어!」"
    - "킹 헤일로는 짐을 챙겨 학원으로 돌아갈 생각이 없는 듯했다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「킹——킹!」"
    - "뭐라고 설득할지 고민하던 차에 같은 황금 세대인 스페셜 위크와 세이운 스카이가 어디선가 나타났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스페셜 위크? 스카이? 이게 무슨……」"
    - "킹 헤일로도 꽤 놀란 듯했다."
    - "그래도 이제 추가 트레이닝을 조를 걱정은 없어졌다."
    - "세이운 스카이가 이쪽에 장난스럽게 웃어 보인 것 같았다."
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「있지, 킹. 황금 세대의 황금 같은 시간도 이제 끝나 간다는 생각 안 들어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「무슨 소리야! 킹은 언제까지나 일류로 남을 거야!」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「아~ 그런 뜻은 아닌데.」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「사실은요! 저랑 스카이가 상의해서 우리 시대를 기념할 레이스를 하기로 했어요!」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「맞아. 킹, 그런 것도 의미 있지 않겠어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「갑자기 왜 그런 얘기를 하는 거야!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「에헤헤, 킹에게 알려 주려고요. 그리고 정한 레이스는 『텐노상(가을)』이에요!」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「킹, 그때 응원하러 와 줘. 세이 쨩이 제일 먼저 골인하면 킹 이름을 크게 불러 줄게~」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「아직 시작도 안 했잖아요! 스카이, 너무 자신만만해하지 마세요!」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「늦는 사람이 당근 케이크 사기!」"
    - "스페셜 위크는 이를 드러낼 기세로 세이운 스카이를 뒤쫓았다."
    - "%YOU%와 킹 헤일로는 말없이 %THEY%가 멀어지는 것을 봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말이지, 손이 많이 가는 동기들이야! 장난도 정도껏 해야지!」"
    - "그렇게 말하면서도 킹 헤일로는 두 동기가 떠난 방향을 계속 멍하니 바라봤다."
    - "이 년 넘게 담당한 %YOU%라면 킹 헤일로의 생각을 대충 읽을 수 있다."
    - acc: 1
      content: "「킹, 우리도……?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 역시 킹의 일류 트레이너야! 나도 %THEY%와 한번 진심으로 겨뤄 보고 싶었어.」"
    - "킹 헤일로도 호흡을 맞추듯 %YOU%의 생각을 알아챘다."
    - "하지만 텐노상(가을)은 중거리다. 그렇다면……"
    - acc: 1
      content: "「돌아가면 스태미나 추가 트레이닝이네?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「돌아가서? 안 돼! 지금 여기서 킹에게 지구력 달리기를 한 바퀴 시켜 줘! 오——호호호!」"
    - "결국 추가 트레이닝에서 벗어나지는 못했다."

# 高松宮記念一着でのみ発生
before_sprt_sta_s:
  title: "스프린터스 스테이크스 전"
  lines:
    - "텐노상에 출전하기로 했어도 스프린터스 스테이크스 훈련을 소홀히 할 수는 없다."
    - "다만 타카마츠노미야 기념의 훌륭한 경험이 있다. 이번에는 그때만큼 긴장하지 않아도 된다."
    - "킹 헤일로는 대기실 의자에서 평소처럼 강적을 앞둔 표정조차 짓지 않았다."
    - acc: 1
      content: "「킹, 전혀 긴장 안 돼? G1인데.」"
    - "킹 헤일로는 스위치라도 눌린 듯 크게 웃었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 전혀 긴장 안 돼! 이것도 킹이 거둘 또 하나의 승리일 뿐이야.」"
    - "꽤 자신만만한 모양이다."
    - "%YOU%도 안심하고 일찌감치 킹 헤일로에게 인사하고 나왔다."
    - "지금까지는 레이스 전에 긴장하는 킹 곁에 오래 머물렀다. 전 과정을 볼 기회는 거의 없었다."
    - "대기실에서 관객석까지 꽤 돌아가야 하기 때문이다."
    - "하지만 이번에는 전 과정을 볼 기회가 있다."

# スプリンターズS一着。高松宮記念勝利後のみ
sprt_sta_win_s:
  title: "스프린터스 스테이크스 후·필연적인 결말"
  lines:
    - content:
        - fontWeight: bold
          content: "실황"
        - "「단거리 왕자의 자리를 완전히 굳혔습니다!」"
    - "킹 헤일로는 예상대로 레이스에서 우승했다."
    - "관객들도 환호하기 시작했다."
    - "주변을 보니 타카마츠노미야 기념 때보다 분명히 많아졌다. 기뻤다."
    - "게다가 모두 킹 헤일로를 보러 온 듯했다."
    - content:
        - fontWeight: bold
          content: "팬 A"
        - "「감동이에요. 킹은 중장거리에서 단거리로 완전히 전향하는 데 성공했네요!」"
    - content:
        - fontWeight: bold
          content: "팬 B"
        - "「킹, 또 우승한 걸 축하해요!」"
    - content:
        - fontWeight: bold
          content: "팬 C"
        - "「킹, 다음 승리는 어떤 레이스인가요?」"
    - "킹 헤일로는 그 팬의 질문을 놓치지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 여러분, 잠시 조용히 해 주세요!」"
    - "경기장은 금세 조용해졌다."
    - "킹 헤일로가 만족스럽게 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음으로 또 하나의 일류 결정을 여러분께 전하겠어요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「단거리에서 두 번 연속 우승했지만 제 다음 목표는——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「텐노상(가을)이에요!」"
    - "그 결정은 잔잔한 바다에 거대한 폭탄을 던진 듯했다. 관객들의 이야기 소리가 한꺼번에 들끓었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때도 여러분이 응원하러 와 주세요!」"
    - "킹 헤일로는 관객석을 향해 정중히 인사하고 여전히 수군거리는 관객들을 남긴 채 조용히 떠났다."

# スプリンターズS非一着。高松宮記念勝利後のみ
sprt_sta_lose_s:
  title: "스프린터스 스테이크스 후·포기하지 않아"
  lines:
    - "모두가 킹 헤일로의 당당한 우승을 예상했다. 하지만 이변이 일어났다."
    - "관객과 실황, 해설, 그리고 %YOU%가 놀라 지켜보는 가운데 킹 헤일로가 역전당했다."
    - "실황은 결과를 알리는 것도 잊을 뻔했다."
    - "우승을 놓친 킹 헤일로는 팬들과 교류할 마음이 사라졌다."
    - "%SEX%는 귀를 내리고 의심과 안타까움이 담긴 수많은 시선에서 벗어나려 했다."
    - content:
        - fontWeight: bold
          content: "팬 A"
        - "「킹! 다음에는 더 잘할 수 있어!」"
    - "갑자기 팬 한 명이 킹 헤일로의 등을 향해 외쳤다."
    - content:
        - fontWeight: bold
          content: "팬 B"
        - "「맞아요! 일류 킹이 여기서 쓰러질 리 없잖아요!」"
    - content:
        - fontWeight: bold
          content: "팬 C"
        - "「꼭 계속 달려 주세요!」"
    - "팬들이 자발적으로 킹 헤일로를 격려하기 시작했다."
    - "킹 헤일로는 눈빛을 밝히며 돌아서서 점점 떠들썩해지는 관객석을 봤다."
    - "%SEX%는 지지해 주는 모두에게 깊이 고개를 숙였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「적성이 그리 좋지는 않을지도 몰라요. 하지만 다음에는 텐노상(가을)에 나가겠어요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그때도 여러분이 응원하러 와 주세요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여러분, 고마워요!」"
    - "킹 헤일로는 다시 관객석을 향해 정중히 인사하고 여전히 수군거리는 관객들을 남긴 채 조용히 떠났다."

# 自暴自棄状態を解消したときに発生
race_end_rise_again:
  title: "재기"
  lines:
    - "%YOU%는 관객석에 앉아 코스를 질주하는 킹 헤일로를 긴장하며 지켜봤다."
    - "타카마츠노미야 기념에서 패한 뒤 얼마나 많은 트레이닝과 대화를 함께했는지 모른다. 그 끝에 찾아온 반격의 기회였다."
    - "킹 헤일로의 상태는 전보다 훨씬 좋다. %YOU%가 보기에는 이번 레이스에서 이기면 예전 상태를 완전히 되찾을 수 있다."
    - "레이스 상황을 보니 킹 헤일로는 이미 크게 앞서 있었다."
    - content:
        - fontWeight: bold
          content: "실황"
        - "「킹 헤일로가 옵니다! 노선을 바꿨다가 패하고 이제 재정비한 이 %UMA%는 최후의 승리를 차지해 과거의 굴욕을 씻을 수 있을까요?」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「최후의 승자는 킹 헤일로!」"
    - "%YOU%는 온몸에 힘이 풀려 의자에 주저앉았다."
    - "킹 헤일로가 주변 관객과 실황의 비명을 무시하고 난간을 넘어 관객석으로 올 때까지."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 일류 킹 헤일로가 돌아왔어!」"
    - "고개를 드니 자신감 넘치는 미소가 있었다. 덩달아 %YOU%도 웃었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가자, 학원으로 돌아가자!」"
    - "킹 헤일로는 주변의 놀란 시선 속에서 %YOU%를 일으켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자신감을 되찾은 건 %CALLNAME% 덕분이기도 해. 내가 부축해서 데려갈게!」"

# シニア級・10月第1週。自暴自棄なし
ws_breaking_dawn:
  title: "새벽"
  lines:
    - "%YOU%가 트레이너실에서 다음 훈련을 계획하던 중 갑자기 문을 세게 두드리는 소리가 났다."
    - "킹 헤일로가 몹시 다급하게 뛰어들어 왔다. 평소처럼 노크하며 기다리지도 않았다."
    - "%SEX%는 아직 휴대폰을 들고 있었다. 지금도 전화가 오고 있다."
    - "킹 헤일로의 어머니였다."
    - "의아하게 보고 있자 킹 헤일로가 곁에 다가와 통화 버튼을 눌렀다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「무슨 일이세요?」"
    - "킹 헤일로의 목소리는 상당히 차가웠다."
    - "전화 너머의 어머니는 잠시 침묵하다 입을 열었다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「단거리에서 몇 번 이겼다면서?」"
    - "말은 여전히 딱딱했지만 목소리는 전보다 조금 누그러졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 몇 번 이겼어요.」"
    - "킹 헤일로는 신중하게 말했다. 예전처럼 어떻게 이겼는지 서둘러 설명하지 않았다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「단거리에서 우위를 차지하다니, 길을 잘못 들었구나!」"
    - "말을 마친 어머니가 전화를 끊었다."
    - "킹 헤일로는 휴대폰을 든 채 잠시 굳어 있다가 갑자기 크게 웃기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 결국 내가 이겼네!」"
    - "%YOU%는 조금 이해가 가지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그분은 쉽게 굽힐 사람이 아니야. 그렇게 말한 건 일단 성적은 인정했다는 뜻이지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「체면을 지키면서 할 수 있는 최대한의 양보야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「결국 일류 킹이 확실한 실력으로 그분의 의심을 눌러 버렸다는 거네.」"
    - "킹 헤일로는 다시 의기양양하게 트레이너실을 나갔다."
    - "마음 깊이 묻어 둔 걱정 하나가 아무래도 원만히 풀린 듯했다."

# 自暴自棄なし
before_tenn_sho_s:
  title: "텐노상(가을) 전"
  lines:
    - "킹 헤일로와 스페셜 위크, 세이운 스카이가 함께 패독에 나타나자 경기장은 순식간에 환호에 잠겼다."
    - "그 물결 한가운데 있는 세 %UMA%는 이미 이런 광경에 익숙했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스페셜 위크, 스카이. 중거리는 그리 자신 없지만 지켜봐. 내가 제일 먼저 골인하는 순간을!」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「다들 기운이 넘치네. 그럼 세이 쨩은 겁먹고 우승을 양보할까? 농담이야~」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「이번 승리는 절대 양보하지 않겠어요!」"
    - "세 %UMA%는 거의 동시에 선전 포고했다."
    - "그러고 잠시 굳어 있다가 일제히 웃음을 터뜨렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번 레이스가 기대돼. 꼭 최선을 다해 달려 줘!」"

# 自暴自棄なし
tenn_sho_end_s:
  title: "텐노상(가을) 후·우정은 마법"
  lines:
    - "레이스가 끝났다."
    - "「황금 세대」의 세 %UMA%는 결승선 너머에서 거친 숨을 몰아쉬며 흥분을 가라앉혔다."
    - "관객 누구의 눈에도 이번 승부에 전력을 다했음이 분명했다."
    - "정작 %THEY%는 승패를 별로 신경 쓰지 않는 듯했다."
    - "다만 가장 지친 것은 중거리 적성이 뛰어나다고 할 수 없는 킹 헤일로일 것이다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「다들 최선을 다했네요.」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「세이 쨩은 작전으로 이기려 했는데 다들 너무 강하더라. 이래서는 나도 전력을 다할 수밖에 없지.」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「에헤헤, 전력을 다하는 스카이도 꽤 무서워요.」"
    - "스페셜 위크가 혀를 내밀었다."
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「그런데 킹, 왜 말이 없어? 우리 기세에 눌렸어?」"
    - "세이운 스카이는 눈을 굴리며 아직 숨을 고르는 킹 헤일로에게 말을 걸었다."
    - "그 말을 들은 킹 헤일로는 돌아서더니 무표정하게 스페셜 위크와 세이운 스카이 쪽으로 걸어왔다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「킹, 뭘 하려는 거예요? 무서워요……」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「저기, 레이스는 이미 끝났어. 킹도 쉬는 게 좋지 않을까?」"
    - "킹 헤일로는 조금 긴장한 두 사람의 시선을 받으며 %THEY% 앞까지 걸어갔다."
    - "그러고는 양팔을 뻗어 스페셜 위크와 세이운 스카이를 끌어안았다."
    - "두 %UMA%의 몸이 순식간에 굳었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고마워. 내 상대가 되어 줘서.」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「저기, 우리도 킹에게 고마워하고 있는데?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스카이와의 사츠키상, 스페셜 위크와의 일본 더비. 둘 다 잊을 수 없는 레이스야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 레이스에 너희가 없었다면 단거리로 전향할 생각을 못 했을지도 몰라.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「결심할 용기를 줬고 진정으로 어울리는 길을 찾도록 도와줬어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「같은 해에 데뷔해서 함께 달릴 수 있었던 걸 영광으로 생각해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「부디 앞으로도 함께 달려 줘. 앞으로도 잘 부탁해.」"
    - "말을 마친 킹 헤일로는 두 사람을 놓아주고 %THEY%에게 정중히 인사했다."
    - "관객석에서 거세고 긴 함성이 터졌다."

ws_until_end:
  title: "마지막 순간까지"
  lines:
    - "킹 헤일로가 중거리로 돌아와 텐노상의 방패를 손에 넣은 뒤로 %SEX%의 명성은 나날이 높아졌다."
    - "%YOU%는 등받이에 기대 기지개를 켰다. 옆에서는 킹 헤일로가 체면도 잊고 소파를 차지하고 있었다. 생각에 잠겼다."
    - acc: 1
      content: "「킹, 텐노상도 이겼잖아. 이제 조금 힘을 빼도 되지 않을까?」"
    - "솔직히 성적은 이미 충분히 눈부시다. 잠시 레이스를 잊고 생활을 즐길 때라고 생각했다."
    - "그런데 킹 헤일로가 소파에서 벌떡 일어나 %YOU% 앞에 섰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 무슨 소리야? 시니어급은 아직 두 달이나 남았어. 사람들이 킹을 잊게 둘 수는 없지!」"
    - "아직 쉴 생각은 없는 모양이다."
    - acc: 1
      content: "「그럼 마일 챔피언십에 나가고 싶어?」"
    - "그 레이스는 십일월 후반이다. 눈에 띄는 강적도 없고 킹 헤일로에게 어울린다."
    - "그런데 킹 헤일로가 고개를 저었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 레이스는 주목도가 한정적이야. 있다는 것조차 모르는 사람도 있을지 몰라.」"
    - "%YOU%는 더 생각했다."
    - acc: 1
      content: "「설마 재팬컵이야?」"
    - "역사 깊은 중거리 G1으로 거리는 이천사백 미터다. 국내외의 관심도 높다."
    - "하지만 일본 더비 때의 킹 헤일로가 아직 눈에 선했다. 이 거리를 버틸 수 있을지 의문이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「재팬컵은 확실히 나쁘지 않은 선택이야. 스페셜 위크도 이번 재팬컵에 나간다고 했어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 그 레이스는 킹의 후보에 없어.」"
    - "%YOU%는 조금 맥이 빠졌다."
    - acc: 1
      content: "「남은 건 더트나 장거리, 별로 유명하지 않은 레이스네.」"
    - "그런데 킹 헤일로의 눈이 반짝였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맞아! %CALLNAME%가 맞혔어! 역시 내 트레이너야.」"
    - acc: 1
      content: "「더트? 킹, 제정신이야?」"
    - "%YOU%는 손을 뻗어 이마를 짚었다. 열은 없다."
    - "킹 헤일로는 화를 내며 손을 피했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더트라니! 이상한 건 %CALLNAME% 쪽이야!」"
    - "킹 헤일로는 조금 마음을 가라앉혔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹이 말한 건 장거리야!」"
    - "%YOU%는 생각했다. 연말, 장거리, 유명세——이 셋을 충족하는 레이스는 아마……"
    - acc: 1
      content: "「아리마 기념?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맞아! 아리마 기념! 킹은 아리마 기념에 나갈 거야!」"
    - "%YOU%는 더욱 제정신이 아닌 것 같았다."
    - acc: 1
      content: "「그건 장거리잖아. 작년 국화상을 잊었어?」"
    - "반년 동안 지구력 달리기로 고생한 끝에 탈진해 쓰러지게 만든 바로 그 레이스다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잊을 리가 없잖아! 하지만 국화상은 삼천 미터, 아리마 기념은 이천오백 미터야. 게다가 킹은 일 년 전의 킹이 아니야!」"
    - "그 이유는 별로 설득력 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 아리마 기념은 무척 유명해. 우승하면 모두가 킹을 영원히 기억할 거야!」"
    - "킹 헤일로의 진짜 목적처럼 들리지는 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「무엇보다 스페셜 위크, 스카이, 그래스 원더, 엘 콘도르 파사가 모두 그 레이스에 나가!」"
    - "%YOU%는 딱 굳었다."
    - "킹 헤일로가 무엇보다 소중히 여기는 네 라이벌이 아리마 기념에서 치열하게 겨루는데 킹 헤일로만 관객으로 응원한다……"
    - "그건 확실히 괴롭다."
    - "오랫동안 생각한 끝에 결심했다."
    - acc: 1
      content: "「그럼 스태미나 트레이닝을 일정에 넣자.」"
    - "스태미나 트레이닝이라는 말을 듣자 킹 헤일로는 무의식적으로 반걸음 물러났다."
    - "하지만 동기들과 같은 무대에 서고 싶은 마음이 두려움을 이겼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아. 세상에 증명하겠어. 킹 헤일로야말로 의심할 여지 없는 황금 세대 최고의 %UMA%라는 걸!」"

# 自暴自棄なし＆天皇賞（秋）一着でのみ
before_arim_kin_s:
  title: "아리마 기념 전"
  lines:
    - "「황금 세대」가 모두 아리마 기념에 출전한다는 소식은 금세 퍼졌다. 수많은 팬이 「마지막 축제」를 보려고 몰려들었다."
    - "다섯 %UMA% 모두 실력과 눈부신 전적을 갖췄고 각각 거대한 팬층을 거느렸다."
    - "그래서 관객석은 사람들로 넘쳤다."
    - "트레이너에게 우선 입장이 허용돼 다행이었다. 그렇지 않았다면 열광하는 팬들 사이에서 앞자리는 잡지 못했을 것이다."
    - "곧 레이스 전 입장이 시작되고 「황금 세대」 다섯 명이 패독에 나타났다."
    - "경기장 분위기가 단번에 달아올랐다. 거의 모든 관객이 일어나 크게 외쳤다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「어머, 상당히 북적이네요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹의 매력은 보통이 아니네!」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「우와아아, 사람이 정말 많아요! 다들 엄청 인기 있네요.」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「우리의 마지막 무대니까. 이후에는 이런 기회가 없잖아.」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「그런 슬픈 말은 하지 마세요!」"
    - "다섯 %UMA%가 웃었다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「그러고 보니 지금처럼 모두 함께 달리는 것도 정말 오랜만이네요.」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「그러니까 이번에는 놓치지 말자.」"
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「그럼 제대로 승부해 볼까요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 킹이 이길 미래가 벌써 보이네!」"
    - "다섯 %UMA%는 해일 같은 함성 속에서 패독을 떠나 차례로 게이트에 들어갔다."

# 有馬記念一着。天皇賞（秋）一着。自暴自棄なし
arim_kin_win_s:
  title: "아리마 기념 후·영원한 일류"
  lines:
    - content:
        - fontWeight: bold
          content: "실황"
        - "「최후의 승자는 킹 헤일로! 황금 세대의 최강자가 지금 탄생했습니다!」"
    - "실황의 목소리는 거의 이성을 잃을 만큼 격앙됐다."
    - "레이스 전보다 훨씬 뜨거운 환호가 경기장을 휩쓸었다."
    - "하지만 자세히 들으면 레이스 전과는 다르다——"
    - "「일류! 일류! 일류!」"
    - content:
        - fontWeight: bold
          content: "실황"
        - "「경기장 전체가 『일류』를 연호하고 있습니다! 킹 헤일로 선수가 진정한 일류의 실력을 보여 줬군요!」"
    - "코스의 킹 헤일로는 가쁜 숨을 겨우 고른 참이었다. 실황의 말을 듣고서야 관객들이 「일류」를 연호하고 있음을 알아챘다."
    - "천천히 일류 장거리 선수 킹 헤일로의 입이 벌어지며 얼빠진 미소가 떠올랐다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「우와! 킹이 고장 났어요!」"
    - "엘 콘도르 파사가 무척 과장되게 외쳤다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「엘? 예의를 잊으면 안 되겠죠?」"
    - "엘 콘도르 파사는 막판 질주력을 발휘해 달아났다. 하지만 그래스 원더도 여력이 남은 모양이다. 두 %UMA%는 점점 멀어졌다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「잠깐만요, 그래스랑 엘! 진정하세요!」"
    - "스페셜 위크는 아직 얼빠진 얼굴의 킹 헤일로와 멀어지는 두 사람을 번갈아 보고 발을 구르며 뒤쫓았다."
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「역시 세이 쨩이 제일 침착하네~」"
    - "세이운 스카이는 휘파람을 불며 다른 이들이 떠난 방향으로 천천히 걸었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「스카이.」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「어, 일류 킹, 정신 차렸어? 응? 뭐 하는…… 잠깐!」"
    - "정신을 차린 킹 헤일로는 단거리 선수의 스퍼트로 세이운 스카이에게 달려들어 미처 피하지 못한 %SEX%를 끌어안았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고마워. 내 상대가 되어 줘서, 이렇게 성대하고 영광스러운 무대를 선물해 줘서.」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「으아, 세이 쨩도 알겠으니까 일단 놓아주면 안 될까……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「놓아 달라고?」"
    - "킹 헤일로가 되물었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「조급해하지 마.」"
    - "말을 마치고 멀리 있는 세 사람의 뒷모습을 턱짓했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「봐, %THEY%는 저렇게 멀리 있잖아. 그러니 너를 안는 수밖에 없어.」"
    - "품 안에서 굳어 버린 세이운 스카이의 얼굴을 보고 킹 헤일로가 웃음을 터뜨렸다."
    - "그러고 한 번 힘껏 안은 뒤 놓아줬다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「알잖아. 난 장거리가 특기가 아니야. 지금은 완전히 지쳤어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니 너희에게 전할 고마움을 모두 네게 맡길게. 내 감사를 가지고 %THEY%를 따라가 줄래? 내가 한 것처럼 열정적으로 전해 줘.」"
    - "세이운 스카이는 어쩔 수 없다는 듯 어깨를 으쓱했다."
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「설마 세이 쨩이 전령 노릇까지 하게 될 줄이야…… 그래도 오늘은 따를게. 일류 킹이니까~」"
    - "세이운 스카이는 두어 마디 놀린 뒤 화가 나 쫓아오는 킹 헤일로를 피하며 연기처럼 달아났다."
    - "킹 헤일로는 네 동기의 뒷모습을 보고 다시 참지 못하고 크게 웃었다."

# 有馬記念非一着。天皇賞（秋）一着。自暴自棄なし
arim_kin_lose_s:
  title: "아리마 기념 후·끝없는 모색"
  lines:
    - "역시 장거리 적성의 부족은 생각보다 가벼운 약점이 아니었다."
    - "%SEX%는 온 힘을 다해 스퍼트했다. 하지만 오랫동안 장거리에서 실력을 갈고닦은 동기들이 손쉽게 추월했다."
    - "레이스가 끝났다. 킹 헤일로는 우승하지 못했다."
    - "관객들은 당연히 승자에게 환호했다."
    - "하지만 킹 헤일로의 얼굴에는 좌절도 분함도 보이지 않았다."
    - "오히려 상당히 만족스러워했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「놀랐어. 다들 이렇게 강해졌구나.」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「당연하죠! 지금의 엘은 그래스의 마수에서도 벗어날 수 있다고요!」"
    - "엘 콘도르 파사는 전광석화처럼 옆의 그래스 원더의 꼬리를 잡아 둘로 나누고 묶기 시작했다."
    - color: %COLOR_11%
      content:
        - fontWeight: bold
          content: %GRASS%
        - "「에……엘?」"
    - "다 묶기도 전에 그래스 원더가 돌아봤다."
    - "엘 콘도르 파사는 즉시 판단하고 튀어나갔다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「보세요, 이게 엘의 스피드예요!」"
    - "그래스 원더가 무서운 기세로 쫓아갔다. 두 사람의 뒷모습은 점점 멀어졌다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「잠깐만요, 그래스랑 엘! 진정하세요!」"
    - "스페셜 위크는 멀어지는 두 사람을 보고 발을 구르며 뒤쫓았다."
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「어? 벌써 세이 쨩이랑 킹만 남았어?」"
    - "세이운 스카이도 킹 헤일로도 조금 어이없어했다."
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「그런데 킹, 진 건 별로 신경 안 쓰는 것 같네?」"
    - "킹 헤일로가 웃었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사실 이번에는 그저 모두와 다시 한번 달리고 싶었어. 승패는 그리 중요하지 않아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 킹의 주 무대는 단거리잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐, 결과도 정해져 있었으니 슬퍼할 건 없어.」"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - "「킹, 꽤 달관했네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다만 완벽한 레이스로 완벽한 마침표를 찍지 못했으니 완벽한 커튼콜로 완벽한 마침표를 찍겠어! 가자, 스카이!」"
    - "킹 헤일로는 웃음을 거두고 정중하게 승부복을 가다듬은 뒤 라이벌들이 떠난 방향으로 걸어갔다."

# 有馬記念一着。天皇賞（秋）一着。自暴自棄なし。有馬記念の翌週
ws_dawn:
  title: "여명"
  lines:
    - "모두가 주목한 아리마 기념이 막을 내린 뒤 어느 날, 킹 헤일로가 트레이너실을 찾아왔다."
    - "%YOU%는 고개를 들어 조금 의아하게 %SEX%를 봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 이리 와.」"
    - "일어나 곁으로 가자 %SEX%는 휴대폰을 열어 「어머니」라고 저장된 연락처를 골라 전화를 걸었다."
    - "그런데 상대는 곧바로 전화를 받았다."
    - "킹 헤일로가 휘청거렸다. 준비한 말을 전부 잊은 듯했다."
    - "어머니도 마찬가지로 침묵했다."
    - "잠시 뒤 킹 헤일로가 겨우 입을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어머니, 아리마 기념에서 우승했어요. 지금의 저는 모든 거리에 진정으로 어울리는 천재예요!」"
    - "킹 헤일로는 한 박자 쉬고 계속 자랑했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「단거리로 전향한 건 길을 잘못 들어서가 아니에요. 어머니 앞에서 제 자신을 증명하고 싶었을 뿐이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이제 어머니의 인정은 필요 없어요. 저는 새로운 세대의 정점으로 성장했어요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아요, 할 말은 다 했어요. 그럼 이만!」"
    - "어머니에게 말할 틈도 주지 않고 킹 헤일로가 전화를 끊었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번에는 그분 앞에서 실컷 자랑했어!」"
    - "킹 헤일로는 몹시 기뻐 보였다."
    - "휴대폰이 다시 울릴 때까지는."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응? 이번에는 누구……」"
    - "집어 들고 놀랐다. 어머니가 다시 전화한 것이다."
    - "%SEX%는 잠시 망설이다가 그래도 받았다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그래, 사실 그날 현장에 있었어. 봤단다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐라고요?」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「아리마 기념 날 현장에 있었어. 잘 달리더구나.」"
    - "%CHARA%는 입을 다물었다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「줄곧 그렇게 엄하게 대해서…… 이제 생각해 보니 정말 미안하구나.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「사업과 명예를 내 아이보다 중시하면 안 됐어. 네가 집을 나간 뒤에도 마음을 돌리려 하지 않고 계속 꾸짖은 것도 잘못이었어.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「용서해 주렴, 킹.」"
    - "킹 헤일로는 여전히 말이 없었다. 하지만 눈에는 눈물이 일렁였다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그래서 이제 엄마로서 부탁할게. 내 곁으로 돌아오지 않을래?」"
    - "%YOU%는 걱정스럽게 킹 헤일로를 봤다."
    - "삼 년을 함께했다. 하지만 어머니가 %SEX%와 보낸 시간에는 분명 비할 수 없다."
    - "잠시 뒤 킹 헤일로가 입을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어머니, 그걸 깨달아 주셔서 기뻐요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 거절하겠어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그동안 무시하고 꾸짖고 오만하게 대하신 건 용서할 수 있어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 트레센에서 뜻을 같이하는 사람들과 화목한 분위기를 만났어요.」"
    - if: era.get('love:61') >= 75
      lines:
        - "킹 헤일로는 %YOU%를 한번 보고 손을 잡았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그리고 무엇보다 여기에는 제 %CALLNAME%가 있어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니 이제 돌아가지 않겠어요.」"
    - "어머니는 오랫동안 침묵했다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「알겠다. 부디 몸 잘 챙기렴.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럴게요. 그럼 안녕히 계세요, 어머니.」"
    - "킹 헤일로가 전화를 끊었다."
    - "그러고는 %YOU%의 얼굴에 남은 걱정을 발견하고 웃음을 터뜨렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%는 내가 돌아갈 줄 알았어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「걱정 마. 킹은 절대 트레센을 떠나지 않을 거야!」"
    - "그제야 %YOU%는 조금 안심했다."

# ランダムイベント
os_ramen:
  title: "킹 헤일로와 라멘"
  lines:
    - "%YOU%와 킹 헤일로는 외식할 곳을 의논하고 있었다."
    - "킹 헤일로가 무언가 떠오른 듯 %YOU%의 손을 잡았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%! 라멘 먹으러 가자!」"
    - "%YOU%는 킹 헤일로의 눈을 한동안 바라봤다."
    - acc: 1
      content: "「정말? 더 일류다운 요리를 고를 줄 알았는데.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이상한 일이지만 킹은 라멘을 먹어 본 적이 없는 것 같아…… 그런데 스페셜 위크가 몇 번이나 추천하길래 먹어 보고 싶어졌어.」"
    - acc: 1
      content: "「그럼 같이 가자. 킹이 라멘을 처음 먹는다는 건 확실히 의외네.」"
    - "그 뒤 스페셜 위크가 추천한 가게를 찾았다."
    - "「전설의 대식가」의 안목은 확실히 정확했다."
    - "%YOU%도 킹도 맛에 빠져 헤어나오지 못했다."
    - "이내 면이 바닥났다. 킹 헤일로는 입을 닦고 일어났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 계산은 내가 할게! 이번 식사는 킹이 사겠어!」"
    - "그렇게 말하고 앞으로 끼어들었다."
    - "%YOU%는 서둘러 남은 음식을 먹고 뒤따랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 봐. 은행의 VIP 카드야! 어느 고급 가게에서든 바로 쓸 수 있어.」"
    - "킹 헤일로는 검은 카드를 자랑스럽게 흔들더니 대꾸하기도 전에 계산대로 달려갔다."
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 카드는 못 쓴다고요?」"
    - "점원이 식은땀을 닦으며 다시 말했다."
    - content:
        - fontWeight: bold
          content: "점원"
        - "「정말 죄송합니다. 저희 가게는 현금만 받아서 카드는……」"
    - "%YOU%는 서둘러 나서서 현금으로 킹 헤일로의 곤경을 해결했다."
    - "하지만 학원으로 돌아가는 내내 킹 헤일로는 한마디도 하지 않았다."
    - acc: 1
      content: "「저기, 그래도 라멘은 맛있었지?」"
    - "적당히 화제를 꺼내려 했는데 입을 열자 라멘 이야기가 나와 버렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말 맛있었어! 다음에도 %CALLNAME%가 킹을 데려가 줘.」"
    - "그 작은 소동은 전혀 신경 쓰지 않았던 모양이다."
    - "%YOU%는 조용히 숨을 내쉬었다."

# ラーメンイベント後に発生。条件を満たせば同様にランダム
os_for_king:
  title: "킹을 위한 메뉴"
  lines:
    - "요즘 킹 헤일로는 무언가에 홀린 것처럼 라멘을 찾는다."
    - "그래서 %YOU%는 %SEX%와 다시 그 가게에 갔다."
    - "자리에 앉히고 곧바로 주문했다."
    - "킹 헤일로는 아직 고민하고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기, 잠깐 이리 와 주시겠어요?」"
    - "고르지 못해 옆의 점원에게 손짓한 모양이다."
    - content:
        - fontWeight: bold
          content: "점원"
        - "「추천 메뉴가 궁금하신가요?」"
    - content:
        - fontWeight: bold
          content: "점원"
        - "「손님은 %UMA%시니 숨겨진 메뉴, 일류 손님만을 위한 『킹 특선·초대형 초호화 라멘』은 어떠세요?」"
    - "점원은 말하면서 대략적인 그릇 크기를 보여 줬다."
    - "그 이름을 듣는 순간 %YOU%는 불길한 예감이 들었다."
    - "아니나 다를까 「일류」와 「킹」을 들은 킹 헤일로의 눈이 빛나기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 어때? 이 라멘, 킹의 품격에 어울리지 않아?」"
    - "기대 어린 눈을 보고 그 초대형 라멘의 양을 떠올렸다."
    - acc: 1
      key: select
      content: "「과식은 일류답지 않아.」(체력+10%, 체중 증가)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그것도 그렇네.」"
        - "킹 헤일로는 그릇 크기를 생각하고 진정했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 %CALLNAME%와 같은 라멘 하나 주세요.」"
        - "곧 보기에도 먹음직스럽고 향도 좋은 라멘 두 그릇이 나왔다."
    - acc: 2
      content: "「실력을 증명해 봐!」(체력+30%, 체중 대폭 증가)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오——호호호! 『킹 특선·초대형 초호화 라멘』 주세요!」"
        - "점원이 주문을 받고 떠나고서야 킹 헤일로가 조금 냉정해졌다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「킹이 일류 %UMA%인 건 사실이야. 하지만 저 그릇, 아무리 봐도 무서울 만큼 크지 않아?」"
        - "고민을 끝내기도 전에 초대형 초호화 라멘이 나왔다."
        - "대야라고 해야 할 그릇과 산더미 같은 면과 고명을 보고 둘 다 조금 놀랐다."
        - content:
            - fontWeight: bold
              content: "점원"
            - "「많아 보이지만 전에 세 분이 가볍게 다 드셨어요. 참고로 그 세 분도 모두 %UMA%세요.」"
        - "먼저 정복한 사람이 있다는 말에 킹 헤일로는 조급해져 아까의 의심을 접었다."
        - "주저 없이 정복의 여정에 뛰어든 킹 헤일로를 보고 %YOU%는 더욱 놀랐다."
        - "결과는 분명했다. 킹 헤일로는 과식했다."
        - "눈앞의 그릇은 비었고 절반도 안 되는 국물만 남았다."
        - "마지막 국물까지 마시려 했지만 이미 한계였다."
        - "점원이 「초대형 라멘 정복 성공 명단」에 킹 헤일로를 올리겠다고 약속하고서야 안심하고 가게를 나왔다."
        - "옆에서 배를 불룩하게 내민 킹 헤일로를 보고 %YOU%는 한숨을 쉬었다."
        - "체중 감량을 위한 트레이닝을 추가해야 할 것 같다."

# ランダム
ws_fc_train:
  title: "일류 트레이닝 종목"
  lines:
    - "%YOU%는 트레이닝장에 서서 시간을 확인했다."
    - "약속보다 오 분이 지났다. 킹 헤일로는 아직 나타나지 않았다."
    - "더 기다리기 힘들어질 무렵에야 나타났다."
    - "예상과 달리 트레이닝복이 아니라 평소 교복 차림이었다."
    - acc: 1
      content: "「킹, 왜……」"
    - "킹 헤일로가 조금 다급하게 말을 끊었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 오늘 달리기는 일류 종목이 아니야. 달리기 말고 다른 걸 계획해 줘!」"
    - "그 요구를 듣고 한동안 이해하지 못했다."
    - acc: 1
      content: "「몸이 안 좋아? 오늘은 쉬어도 돼.」"
    - "킹 헤일로의 얼굴이 조금 붉어졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹은 멀쩡해! 아주 건강해!」"
    - "그 모습에 더욱 짐작할 수 없었다."
    - "그때 룸메이트 하루 우라라가 느긋하게 걸어왔다."
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - "「킹이랑 %CALLNAME_52%, 안녕~. 어라, 킹은 왜 교복이야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잠깐, 우라라——」"
    - "큰일 났다는 것을 깨닫고 서둘러 달려들어 하루 우라라의 입을 막으려 했다."
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - "「우라라, 생각났어~. 킹, 어제 트·레·이닝복을 전부 빨았잖아?」"
    - "한발 늦었다. %SEX%의 비밀은 하루 우라라가 낱낱이 밝혀 버렸다."
    - color: %COLOR_52%
      content:
        - fontWeight: bold
          content: %URARA%
        - "「에헤헤, 그럼 킹 트레이닝 방해 안 할게~. 안녕!」"
    - "하루 우라라는 재빨리 달아났다. 굳어 버린 킹 헤일로와 어쩔 줄 모르는 %YOU%만 남았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아. 이제 %CALLNAME%도 사정을 알겠네. 그럼 다음은 어떻게 할 거야?」"
    - "킹 헤일로는 어이없는 얼굴로 하루 우라라의 뒷모습을 한동안 바라보다 체념한 듯 돌아서 %YOU%를 봤다."
    - "교복 차림의 킹 헤일로를 보고 생각했다."
    - acc: 1
      key: select
      content: "「그럼 스태미나 트레이닝이야.」(스태미나+15)"
      lines:
        - "타이어를 끌고 왕복하는 훈련을 계획했다."
        - "교복 차림의 킹 헤일로는 많은 시선을 모았다."
    - acc: 2
      content: "「그럼 파워 트레이닝이야.」(파워+15)"
      lines:
        - "웨이트 트레이닝을 계획했다."
        - "교복 차림의 킹 헤일로는 많은 시선을 모았다."
    - acc: 3
      content: "「그럼 근성 트레이닝이야.」(근성+15)"
      lines:
        - "계단 뛰기를 계획했다."
        - "교복 차림의 킹 헤일로는 많은 시선을 모았다."
    - acc: 4
      content: "「그럼 지능 트레이닝이야.」(지능+15)"
      lines:
        - "킹 헤일로를 트레이너실로 데려가 레이스 영상을 보는 훈련을 계획했다."
    - acc: 5
      content: "「하지만 킹이 달리는 모습을 보고 싶어.」(스피드+15, 호감-5)"
      lines:
        - "킹 헤일로는 못마땅하게 %YOU%를 한번 봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「기다려!」"
        - "킹 헤일로가 사라졌다."
        - "곧 다시 나타났다. 이번에는 승부복 차림이었다."
        - "스퍼트 달리기를 계획했다. 승부복 차림의 킹 헤일로도 많은 시선을 모았다."

# 好感+10、賢さ+10、ランダム
os_auto_graph:
  title: "킹의 사인회?"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「빨리! 꾸물거리는 건 일류답지 않아!」"
    - "%YOU%는 킹 헤일로에게 끌려 놀이공원 입구까지 갔다."
    - acc: 1
      content: "「잠깐, 킹. 일정에 이런 건 없는데! 뭐, 가끔은 쉬는 것도——」"
    - "투덜거리면서도 현실을 받아들였다. 긴장을 풀고 놀려던 참에 뒤에서 옷자락을 잡혔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘은 놀러 온 게 아니야! 제대로 볼일이 있어.」"
    - "그 말에 %YOU%는 혼란스러웠다."
    - "곰곰이 생각해도 오늘 일정과 놀이공원의 관계를 알 수 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 생각났지? 그렇게 중요한 일을 잊을 리 없잖아.」"
    - "기대 가득한 시선을 받자 조금 불편했다."
    - "그래서 깊이 생각하는 척하다가 번뜩 깨달은 표정을 지었다."
    - acc: 1
      content: "「알았어! 킹이 이상해졌구나! 기억이 뒤죽박죽이야!」"
    - "고심 끝에 내린 결론이 그것인 것을 보고 킹 헤일로는 화가 나 한 대 걷어찼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말! 저길 봐!」"
    - "가리킨 곳을 보니 「킹 헤일로 일류 사인회」 포스터가 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「생각났지? 오늘은 킹의 사인회야! 이렇게 중요한 일을 잊다니 킹은 화났어!」"
    - "%YOU%는 다시 의아해졌다."
    - "뾰로통한 킹 헤일로는 상대하지 않고 일정표를 펼쳤다."
    - "「중요」 표시가 붙은 「킹 사인회」 날짜는 내일이었다."
    - "일정표와 토라져 고개를 돌린 킹 헤일로를 번갈아 보고 웃음을 터뜨렸다."
    - acc: 1
      content: "「알았어, 알았어. 미안해. 그럼 갈까?」"
    - "일부러 놀리며 웃음을 참고 예정된 장소로 데려갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥, 그거면 됐어!」"
    - "킹 헤일로는 사인용 책상 뒤의 의자에 털썩 앉아 도도한 자세로 팬들을 기다렸다."
    - "한 시간이 지나도록 팬은 한 명도 오지 않았다. 그래도 자세를 바꾸지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜 아무도 안 오는 거야? 일류 킹이 그렇게 인기가 없다고?」"
    - "그제야 이상하다는 것을 알아챘다."
    - "그때 %YOU%가 앞으로 다가가 일정표를 보여 줬다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건 뭐…… 잠깐, 내일?」"
    - "웃음도 가라앉던 참이었다. 하지만 얼떨떨한 얼굴을 보자 또 웃음이 터졌다."
    - "킹 헤일로는 굳은 얼굴로 계속 웃는 %YOU%를 봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「웃지 마! 사실 오늘은 사인회 현장을 답사하러 온 거야. 이 장소, 킹은 마음에 들어!」"
    - "벌써 빠져나갈 구실까지 마련했다니 조금 놀랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%가 이렇게 오래 답사에 함께한 걸 봐서 킹을 비웃은 죄는 묻지 않겠어! 학원으로 돌아가자!」"
    - "그 말을 듣고 서둘러 상처만 남은 이곳에서 킹 헤일로를 데리고 나왔다."

# 根性+20、賢さ-10、ランダム
ws_laugh:
  title: "소리 높여 웃기"
  lines:
    - "킹 헤일로는 평소처럼 트레이너실 문을 열었다. 하지만 %YOU%는 무언가 이상하다고 느꼈다."
    - "평소의 활기가 없다."
    - acc: 1
      content: "「왜 그래, 킹? 몸이 안 좋아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「일류 킹이 감기에 걸렸어…… 목도 쉬었어!」"
    - "목소리가 평소보다 훨씬 낮았다."
    - "그 말을 듣고 서둘러 따뜻한 물을 따라 줬다."
    - acc: 1
      content: "「오늘은 쉬어. 빨리 낫는 게 우선이야.」"
    - "킹 헤일로는 고맙다는 눈길을 보내며 물을 받았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 무엇보다 예전처럼 소리 높여 웃을 수 없는 게 제일 문제야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호…… 콜록……」"
    - "눈빛이 조금 어두워졌다."
    - "무슨 말을 하기도 전에 킹 헤일로가 기세를 되찾았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「감기에 걸려도 일류의 웃음을 내 보이겠어!」"
    - "말릴 틈도 없이 킹 헤일로가 웃기 시작했다."
    - "들려던 손을 힘없이 내렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호…… 콜록……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오…… 콜록……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호호호! 콜록……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하하, 킹, 성공이야! 콜록……」"
    - "이상할 만큼 기뻐하는 킹 헤일로를 보고 조만간 지능 트레이닝을 추가하기로 했다."

# 好感+20、賢さ+5、ランダム
os_art_exhibit:
  title: "일류 미술 전시회"
  lines:
    - "킹 헤일로에게 손을 끌려 근처 미술관의 전시회에 갔다."
    - "작품에 담긴 진정한 의미는 도무지 알 것 같지 않다. 그런데도 킹 헤일로가 억지로 데려왔다."
    - "주변 그림을 훑어보고 하품했다."
    - "의욕 없는 %YOU%를 보고 킹 헤일로는 조금 언짢아졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잠깐! 정신 좀 차려!」"
    - acc: 1
      content: "「일류 킹에게 이 그림들을 설명받고 싶어!」"
    - "좋은 생각이 떠올랐다."
    - "킹 헤일로는 생각하다가 품위를 지키며 고개를 끄덕였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 킹이 설명해 주겠어! 잘 들어!」"
    - divider: true
      content: ⏰
      position: left
    - "인정할 수밖에 없었다. 킹 헤일로에게는 안목이 있었고 내내 해 주는 설명도 상당히 통찰력 있었다."
    - "마지막으로 화려한 색채의 그림 앞에서 걸음을 멈췄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 잘 봐! 이 그림은 추상화풍으로 색과 선의 조합을 중시하고 있어. 뜻이 상당히 깊다고 할 수 있지.」"
    - "설명을 듣고 앞으로 다가가 살폈다."
    - "색은 선명하고 선은 거칠고 자유분방하며……"
    - acc: 1
      content: "「그래서 뭘 그린 건데?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「추상이라는 건 구체적인 형상이 없는 거야.」"
    - "킹 헤일로가 조금 어이없다는 듯 설명했다."
    - "%YOU%는 옆의 설명문을 봤다."
    - acc: 1
      content: "「작가가 유치원생? 제목은 『사랑하는 아빠와 엄마』?」"
    - "눈을 크게 뜨고 여전히 유창하게 설명하는 킹 헤일로와 그림을 번갈아 봤다."
    - "그러고 보니 선은 확실히 어른 두 명이 아이 한 명의 손을 잡은 모습 같았다."
    - "%YOU%는 킹 헤일로를 살짝 찔렀다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「멋대로 킹의 말을 끊지 마!」"
    - "설명문을 가리켰다."
    - "킹 헤일로가 침묵했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 아이는 어린 나이에 추상화의 정수를 깨달았네! 대단해.」"
    - "%YOU%는 그 수습 능력에 엄지를 치켜들었다."

# 恋慕90以上の結末
ge_love:
  title: "진심은 여기에"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기, 트레이너. 이리 와 줘.」"
    - "모든 일이 끝난 뒤의 평범한 어느 날, 킹 헤일로가 갑자기 트레이너실로 뛰어들었다."
    - "영문도 모른 채 일어나 곁으로 갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너무 가까워! 킹에게서 떨어져!」"
    - "정말 화내기 전에 조금 거리를 뒀다."
    - "킹 헤일로는 조금 못마땅하게 한번 보고 멋대로 휴대폰을 꺼냈다."
    - acc: 1
      content: "「그러니까 그게 목적이었어? 전화 한 통?」"
    - "더욱 이해가 안 됐다. 굳이 트레이너실에 와서…… 전화를 하려고?"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「서두르지 마. 킹에게는 다 생각이 있어. 일단 듣고 있어.」"
    - "킹 헤일로는 장난스럽게 눈을 깜빡이며 전화를 걸었다."
    - "뚜…… 뚜……"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「킹이구나. 요즘 레이스가 있었던 것 같지는 않은데 웬일이니?」"
    - "전화 너머는 어머니였다. 왜 이런 사적인 전화를 굳이 트레이너실에서 하는지 %YOU%도 알 수 없었다."
    - "게다가 %SEX%는 보란 듯이 스피커폰을 켜 놓았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 어머니. 이번에는 레이스 때문이 아니에요.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그럼 뭔데? 학원이 마음에 안 들어서 집으로 돌아오고 싶니?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전혀 아니에요. 이번에 전화한 건 어머니께 한 가지 알려 드리고 싶어서예요.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「빨리하렴. 시간이 없어.」"
    - "킹 헤일로는 깊이 숨을 들이마시고 돌아서서 %YOU%를 한번 봤다. 무언가 결심한 듯했다."
    - "%YOU%는 갈수록 알 수 없었다. 뭘 알리려는 거지. 레이스 이야기인가?"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어머니, 저는…… 제 트레이너와 결혼하겠어요. 의견을 여쭈려는 게 아니에요. 사실을 알리는 것뿐이에요.」"
    - "전화 너머가 조용해졌다. 트레이너실도 마찬가지였다."
    - "%YOU%는 눈을 크게 떴다. 킹 헤일로가 어머니에게 둘의 관계를 직접 알릴 줄은 전혀 예상하지 못했다."
    - "더구나 평소 사이가 그리 좋지 않은 어머니에게 결혼을 직접 꺼내다니."
    - "외향적이고 밝은 킹 헤일로도 그 말을 한 뒤에는 조금 주눅이 들었다."
    - "%SEX%의 얼굴은 새빨갰고 당황한 시선이 %YOU%의 얼굴과 화면 사이를 오갔다."
    - "결국 침묵을 깬 것은 어머니였다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「트레이너 %SIR%는 옆에 있겠지? 전화 바꿔 주렴. %YOURSEX%와 이야기하고 싶구나.」"
    - "킹 헤일로는 무언가 작게 중얼거렸지만 그래도 휴대폰을 건넸다."
    - "%SEX%는 몹시 걱정스럽게 바라봤다. 어머니가 몰아붙일까 봐 염려하는 듯했다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「킹, 먼저 나가 주렴. 트레이너 %SIR%와 둘이 이야기할게.」"
    - "킹 헤일로는 움직이지 않고 초조한 눈으로 %YOU%를 바라봤다."
    - "등을 가볍게 두드리며 괜찮다고 했다. 그제야 불안한 기색으로 트레이너실을 나갔다."
    - "문이 닫히는 소리와 함께 어머니가 입을 열었다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「당신이 킹의 트레이너군요?」"
    - acc: 1
      content: "「네.」"
    - "생각하고 깊이 숨을 들이마신 뒤 용기를 내 한마디 더했다."
    - acc: 1
      content: "「동시에…… %SEX%의 연인이기도 합니다.」"
    - "아까의 대담한 선언에 대한 분명한 입장 표명이었다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그래요, 킹과 함께 그렇게 눈부신 성과를 남기느라 수고했어요.」"
    - "예상과 달리 작은 도발에는 아무 말도 하지 않았다."
    - acc: 1
      content: "「그럼 반대하지 않으시는 건가요?」"
    - "너무 놀라 속마음이 그대로 입 밖에 나왔다."
    - "강하게 반대할 줄 알았다. 킹을 데리고 사랑의 도피라도 할까 생각했을 정도다……"
    - "하지만 어머니는 듣고도 별다른 감정의 변화를 보이지 않았다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그 아이는 이제 나를 신경 쓰지 않게 됐군요. 이렇게 중요한 일도 상의하지 않고 통보하듯 선언하다니……」"
    - "어머니가 갑자기 회한 어린 목소리로 말했다."
    - "입을 열어 무언가 말하려 했지만 결국 말이 나오지 않았다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「트레이너 %SIR%, 무슨 말을 하려는지 대충 알아요. 나는 실패한 엄마죠?」"
    - "잘못을 그토록 솔직하게 인정해서 조금 놀랐다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「원래는 내가 가장 가까운 사람이었어야 했어요. 키워 주고 코스로 이끌고, %SEX%는 나를 우상으로 삼고……」"
    - "어머니는 멈추지 않고 혼잣말처럼 이어 갔다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그런데 마땅한 관심은 주지 않고 오히려 내 생각으로 %SEX%를 옭아매려 했어요.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그래서 %SEX%는 가출하듯 트레센으로 갔죠.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「마음을 되돌릴 기회는 남아 있었어요. 안타깝게도 그때의 나는 아직 정신을 차리지 못했죠. %SEX%가 계속 이겨도 성장을 기뻐하지 않고……」"
    - "전화 너머가 몇 초간 조용해졌다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「불합리하다고 할 만한 비난과 조롱을 그 성적에 퍼부었어요.」"
    - "%YOU%는 말없이 들었다. 자신도 그 자리에 있었기 때문이다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그때는 아무렇지도 않았어요. 이제 돌아보니 부끄러울 뿐이네요.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「%SEX%는 몇 번이나 기회를 줬어요. 나는 하나씩 쳐내고 갈수록 더 매정해졌죠.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그래서 결국 %SEX%는 더 이상 기회를 주지 않게 됐어요.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그 뒤에 관계를 회복하려 하지 않은 건 아니에요. 다만 이미 가능성이 없었죠.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「후후, 안타깝다기보다 자업자득이라는 말이 어울리겠네요.」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「원래 가장 가까웠어야 할 가족이 지금은 남이나 다름없으니……」"
    - "어머니는 꿈꾸듯 이야기했다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그러니 킹의 트레이너.」"
    - "갑자기 목소리가 단단해졌다. %YOU%는 무의식적으로 귀를 기울여 집중했다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「부디 %SEX%를 소중히 대해 줘요. 나에게는 그 기회가 없다는 걸 알아요. 그러니 나 대신 %SEX%를 사랑해 줘요……」"
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그게 유일한 요구예요. 아니, 부탁이에요.」"
    - acc: 1
      content: "「맡겨 주세요. 꼭 소중히 대하겠습니다. %SEX%는 제게도 무엇과도 바꿀 수 없는 존재니까요……」"
    - "%YOU%는 진지하게 말했다."
    - "전화 너머에서 희미한 웃음이 새어 나왔다."
    - content:
        - fontWeight: bold
          content: "%CHARA%의 어머니"
        - "「그래요, 이제 안심이 되네요. 행복해요. 볼일이 있어서 이만 끊겠어요.」"
    - "말을 마친 어머니가 전화를 끊었다."
    - "후회와 부끄러움을 말해도 뼛속까지 도도한 사람인 모양이다."
    - "그렇게 생각하며 킹 헤일로의 휴대폰을 조심히 내려놓았다."
    - acc: 1
      content: "「킹, 들어와도 돼.」"
    - "곧 킹 헤일로가 문을 열고 들어왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 어머니는 뭐라고 하셨어?」"
    - "킹 헤일로가 기대며 팔을 끌어안았다."
    - acc: 1
      content: "「기밀이야.」"
    - "어머니의 말을 떠올리며 장난스럽게 눈을 깜빡였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹한테 숨길 셈이야? 벌을 주겠어——」"
    - "킹 헤일로는 발끈하며 거리낌 없이 무릎에 앉아 귀를 잡아당기려 했다."
    - "볼품없이 계속 피했다. 두 사람 모두 기진맥진할 때까지."
    - "옆에서 노려보는 킹 헤일로를 보자 문득 어머니의 당부가 떠올랐다."
    - "갑자기 손을 뻗어 킹 헤일로를 끌어안았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응?」"
    - "반응하기도 전에 품으로 당겼다."
    - "이어서 조금 강하게 입술을 포갰다."
    - "%SEX%는 당황해 저항하려 했다. 하지만 꼭 끌어안고 놓아주지 않았다."
    - "물론 %UMA%가 진심으로 벗어나려 한다면 트레이너의 힘으로는 도저히 막을 수 없다."
    - "곧 킹 헤일로는 저항을 멈추고 똑같이 끌어안으며 이쪽보다 더 뜨겁게 입맞춤을 돌려줬다."
    - "얼마나 지났는지 모른다. 이윽고 팔을 풀자 %SEX%가 자연스럽게 어깨에 기댔다."
    - acc: 1
      content: "「킹.」"
    - "갑자기 연인의 이름을 불러 트레이너실의 달콤한 고요를 깼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응?」"
    - "킹 헤일로가 나른하게 대답했다."
    - acc: 1
      content: "「사랑해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나도…… 나도 그래.」"
    - "킹 헤일로는 순간 굳은 듯했다. 잠시 뒤 아주 작은 목소리로 그렇게 답했다."
    - "%YOU%는 살짝 몸을 기울여 긴 머리카락의 향기를 맡았다."
    - "처음부터 이렇게 있어야 했던 것 같은 기분이 들었다."

normal_end:
  title: "서로를 빛내며"
  lines:
    - "삼 년, 천 번이 넘는 낮과 밤 끝에 %YOU%와 킹 헤일로는 일류 이야기의 끝을 맞았다."
    - "킹 헤일로는 수많은 레이스에서 연이어 우승했다. 그것만으로도 꿈꾸던 일류 %UMA%가 되기에는 충분했다."
    - "아쉽게도 한 시대의 전설에게도 막은 내려온다."
    - "킹 헤일로는 강하게, 때로는 그리 강하지 않게 레이스에 데려가 달라고 부탁했다. 하지만 이제 어렵다는 것을 알고 있었다."
    - "한때의 풍운아는 일선에서 물러나고 뒤따르는 새 세대가 바통을 받아 계속 빛난다."
    - "그것이 이른바 세대의 의미일지도 모른다."

# BE。高松宮記念非一着かつ恋慕75未満・好感225未満、または重度の自暴自棄がさらに悪化、または任意の自暴自棄を育成終了まで残した場合
be_force:
  title: "쫓겨나다"
  lines:
    - "%CHARA%는 %YOU%의 삶에서 사라졌다. 처음부터 없었던 것처럼."
    - "%YOU%는 아무것도 할 수 없었다."
    - "담당 %UMA%를 이런 식으로 잃은 트레이너는 틀림없이 쫓겨나 세상의 손가락질을 받을 것이다."
    - "갑자기 요란한 알림음이 울려 펄쩍 뛸 뻔했다."
    - "조금 진정하고 휴대폰을 열었다."
    - divider: true
      content: "아키카와 이사장(6)"
      position: left
    - "「%YOURNAME% 트레이너. 근무 중 중대한 직무 태만으로 학원 이사회는 만장일치로 귀하의 해고에 동의했습니다.」"
    - "「금일 이사장실에서 서면 해고 통지서를 수령해 주십시오.」"
    - "「영업일 기준 사흘 이내에 개인 짐을 정리하고 하야카와 비서에게 업무를 인계해 주십시오.」"
    - "「학원 내의 어떠한 사안도 외부에 공개하지 않기를 바랍니다. 트레센 학원은 책임을 물을 권리를 유보합니다.」"
    - "「귀하의 태만이 중대한 결과를 초래했으므로 이후 입사 지원은 받지 않겠습니다.」"
    - "「트레센 학원 이사장, 아키카와 야요이.」"
    - divider: true
    - "%YOU%는 손가락 마디가 하얘질 때까지 휴대폰을 꽉 움켜쥐었다."
    - "이렇게 몰락하리라는 것은 이미 예상했다. 하지만 막상 닥치니 너무나 갑작스러웠다."
    - "한때 익숙했지만 이제는 몹시 쓸쓸한 트레이너실을 마지막으로 한번 더 둘러봤다. 긴 한숨을 내쉬고 얼마 안 되는 짐을 들고 나갔다."
    - "이렇게 떠나는 것이 가장 나은 선택일지도 모른다."
