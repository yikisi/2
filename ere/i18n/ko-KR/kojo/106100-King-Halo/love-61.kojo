# @file キングヘイロー - 恋慕
# @author 牛蛙煲
# @author Claude (翻訳)
49:
  title: "정작 본인은 모르는 법"
  lines:
    - color: %COLOR%
      content: "하루 트레이닝을 마친 킹 헤일로는 지친 몸으로 기숙사에 돌아왔다."
    - color: %COLOR%
      content: "룸메이트인 하루 우라라는 이미 꿈나라에 있었다."
    - color: %COLOR%
      content: "킹 헤일로는 기분 좋게 잠든 하루 우라라를 한번 보고 자신도 하품하며 졸음을 느꼈다."
    - color: %COLOR%
      content: "간단히 씻고 잠자리에 들 준비를 마친 킹 헤일로도 침대에 누웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잘 자, 우라라.」"
    - color: %COLOR%
      content: "킹 헤일로는 이미 잠든 하루 우라라에게 아주 작은 목소리로 밤 인사를 건넸다."
    - color: %COLOR%
      content: "그런데 하루 우라라가 뒤척이더니 헤실헤실 실없는 웃음을 흘리기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(정말, 또 잠꼬대네.)"
    - color: %COLOR%
      content: "킹 헤일로는 익숙하다는 듯 돌아누워 잠들려 했다."
    - if: era.get('cflag:52:招募状态') === 1
      lines:
        - color: %COLOR_52%
          content:
            - fontWeight: bold
              content: %URARA%
            - "「에헤헤…… 킹…… 이랑 %CALLNAME_52%……」"
        - color: %COLOR%
          content: "킹 헤일로의 졸음이 순식간에 사라졌다."
        - color: %COLOR%
          content: "%SEX%는 벌떡 일어나 벽을 향해 잠든 하루 우라라를 두려움 섞인 눈으로 바라봤다."
        - color: %COLOR_52%
          content:
            - fontWeight: bold
              content: %URARA%
            - "「왕자님이랑 공주님 같아…… 행복해…… 에헤헤……」"
        - if: era.get('love:52') >= 75
          color: %COLOR_52%
          content:
            - fontWeight: bold
              content: %URARA%
            - "「에헤……」"
        - if: era.get('love:52') >= 75
          color: %COLOR_52%
          fontSize: 0.8rem
          content:
            - fontWeight: bold
              content: %URARA%
            - "「으응……」"
    - if: era.get('cflag:52:招募状态') === 0
      lines:
        - color: %COLOR_52%
          content:
            - fontWeight: bold
              content: %URARA%
            - "「에헤헤…… 킹…… 이랑 %SEX%의 트레이너……」"
        - color: %COLOR%
          content: "킹 헤일로의 졸음이 순식간에 사라졌다."
        - color: %COLOR%
          content: "%SEX%는 벌떡 일어나 벽을 향해 잠든 하루 우라라를 두려움 섞인 눈으로 바라봤다."
        - color: %COLOR_52%
          content:
            - fontWeight: bold
              content: %URARA%
            - "「왕자님이랑 공주님 같아…… 행복해…… 에헤헤……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우라라? 아직 안 자는 거 아냐?」"
    - color: %COLOR%
      content: "하루 우라라는 뒤척이며 잠든 얼굴을 킹 헤일로 쪽으로 돌렸다."
    - if: era.get('cflag:52:招募状态') === 1 && era.get('love:52') >= 75
      color: %COLOR%
      content: "눈가가 조금 젖은 듯했지만 킹 헤일로는 보지 못했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(역시 잠꼬대야……)"
    - color: %COLOR%
      content: "킹 헤일로는 길게 한숨을 내쉬고 베개 위로 털썩 쓰러졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(얼른 자야 해…… 내일도 %CALLNAME%랑 트레이닝해야 하니까.)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - （%CALLNAME%……%CALLNAME%……）
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(정말, 우라라는 왜 그런 잠꼬대를…… 실례잖아!)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(그런데 %CALLNAME%을(를) 생각하면……)"
    - color: %COLOR%
      content: "킹 헤일로는 온몸을 말로 표현하기 어려운 열기가 감싸는 것을 느꼈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(왜…… %CALLNAME%을(를) 생각하는 것만으로 이렇게 뜨겁지……)"
    - color: %COLOR%
      content: "킹 헤일로는 침대에서 몇 번이나 뒤척이며 %YOU%을(를) 머릿속에서 쫓아내려 했다."
    - color: %COLOR%
      content: "하지만 실패했다."
    - color: %COLOR%
      content: "곧 킹 헤일로의 머릿속은 %YOU%의 목소리와 웃는 얼굴로 가득 찼다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(%CALLNAME%…… 킹의 머릿속에서 나가!)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(뜨거워…… 못 견디겠어……)"
    - color: %COLOR%
      content: "킹 헤일로는 조심스럽게 손을 아래로 뻗었다."
    - color: %COLOR%
      content: "%SEX%는 왜 그러는지 자신도 몰랐다. 그저 본능을 따랐을 뿐이었다."
    - color: %COLOR%
      content: "이어서 %SEX%의 손가락이 가만있지 못하고 움직이기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(아아…… %YOURNAME%……)"
    - color: %COLOR%
      content: "%SEX%는 완전히 이성을 잃고 온몸의 힘을 손가락에 집중했다."
    - color: %COLOR%
      content: "킹 헤일로의 몸이 경련하듯 활처럼 휘었다."
    - color: %COLOR%
      content: "%SEX%의 움직임은 점점 커졌고 고요한 밤에 희미한 물소리가 울렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(아아……)"
    - color: %COLOR%
      content: "마지막 절정이 찾아오자 킹 헤일로의 몸이 과할 만큼 크게 휘었다."
    - color: %COLOR%
      content: "넘쳐흐른 액체가 %SEX%의 옷과 침구를 적셨다."
    - color: %COLOR%
      content: "그 뒤 킹 헤일로는 침대에 힘없이 쓰러져 천천히 의식을 되찾았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(내가 무슨 짓을…… 부끄러워!)"
    - color: %COLOR%
      content: "방금 일어난 일을 깨달은 킹 헤일로는 저도 모르게 얼굴을 가렸다."
    - color: %COLOR%
      content: "%SEX%는 최대한 조용히 옷과 침구를 갈고 다시 잠들려 했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(게다가 왜 %CALLNAME%을(를) 떠올린 거지? 설마……)"
    - color: %COLOR%
      content: "킹 헤일로는 갑자기 정신이 번쩍 들어 반사적으로 몸을 일으켰다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「설마 정말 %YOURNAME%을(를) 좋아한다니——」"
    - color: %COLOR%
      content: "입 밖으로 말한 걸 깨달은 킹 헤일로는 황급히 입을 막았다."
    - color: %COLOR%
      content: "%SEX%는 곧바로 옆의 하루 우라라를 확인하고 아직 깊이 잠들어 있는 걸 보고 안심했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(우라라 말이 맞아. 스스로 눈치채지 못했어도 나는 이미 %YOURNAME%을(를) 좋아하고 있었어……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(하지만 %YOURNAME%은(는) 나를 어떻게 생각할까?)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(흥, 킹의 트레이너면서 킹을 좋아하지 않는다면 %YOURNAME%의 직무 태만이야!)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(이렇게 천천히 %YOURNAME%에게 킹의 진심을 보여 주자. 킹은 그렇게 쉽게 지지 않아!)"
    - color: %COLOR%
      content: "킹 헤일로는 의기양양하게 생각하며 이미 %YOU%와의 사랑을 기정사실처럼 여기고 있었다."
    - color: %COLOR%
      content: "그렇게 지칠 대로 지친 %SEX%는 돌아누워 깊이 잠들었다."

74:
  title: "두려움이 아닌 것"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 킹은 피곤해!」"
    - "트레이닝이 한 차례 끝나자 킹 헤일로는 일부러 바닥에 앉아 피곤하다고 호소했다."
    - "%YOU%은(는) 의아하게 트레이닝 계획을 다시 확인했다."
    - acc: 1
      content: "「킹, 이제 막 시작했잖아요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무튼 피곤해! %CALLNAME%에게 킹을 놀러 데려갈 권리를 주겠어! 어서 데려가!」"
    - "킹 헤일로는 일어날 생각이 없었다. %YOU%은(는) 어쩔 수 없이 %SEX%의 요구를 받아들였다."
    - divider: true
      content: ⏰
      position: left
    - acc: 1
      content: "「……그래서 킹은 이런 놀이를 좋아했던 건가요?」"
    - "%YOU%이(가) 고개를 끄덕이자 킹 헤일로는 %YOU%을(를) 끌고 가까운 상점가까지 뛰어가 어두컴컴한 건물 앞에서 멈췄다."
    - "옆의 킹 헤일로는 %YOU%의 팔을 꽉 잡고 태연한 척했지만 이미 떨기 시작했다."
    - "건물 입구의 간판에는 「초일류 귀신의 집」이라고 적혀 있었다."
    - "%YOU%은(는) 킹 헤일로가 여기에 오고 싶어 한 이유를 대충 짐작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가자! 초일류 킹은 하나도 안 무서워!」"
    - "그래서 %YOU%은(는) 어깨를 으쓱하고 누가 봐도 허세를 부리는 킹 헤일로와 귀신의 집에 들어갔다."
    - "「초일류 귀신의 집」이라는 이름답게 시작부터 충분히 무서웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「꺄아아아아아——!」"
    - "놀란 킹 헤일로가 %YOU%의 팔을 세게 붙잡았다."
    - acc: 1
      content: "「저건 그냥 소품이야!」"
    - "%YOU%은(는) 길을 막는 해골 소품을 발로 밀어 치웠다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 알고 있어! 킹은 %CALLNAME%의 담력을 시험한 것뿐이야!」"
    - "킹 헤일로는 그렇게 말하면서도 손에 준 힘을 조금도 풀지 않았다."
    - acc: 1
      content: "「그럼 나갈까요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼! 왔으면 정복해야지!」"
    - "%YOU%은(는) 허세 부리는 킹 헤일로를 크게 신경 쓰지 않고 팔을 두어 번 빼내려 했지만 꼼짝도 하지 않았다. 결국 그대로 안겨 있기로 했다."
    - "몇 번이나 놀란 킹 헤일로는 아예 눈을 감았다. 손에 들어간 힘은 더욱 강해졌다."
    - "하지만 킹 헤일로가 곁에 있어서인지 %YOU%은(는) 귀신의 집이 그다지 무섭지 않다고 느끼기 시작했다."
    - "더 무서운 장면에서는 %YOU%도 반사적으로 킹 헤일로를 끌어안았다."
    - "물론 곧 쑥스러워져 놓아줬다."
    - "하지만 돌아다니는 동안 %YOU%은(는) 킹 헤일로가 정말 무서워서만 이러는 건 아닌 것 같다고 계속 느꼈다."
    - "별로 무섭지 않은 장면에서도 킹 헤일로는 그럴듯한 비명을 지르고 틈을 타 %YOU%을(를) 더 세게 끌어안았다."
    - "또 %YOU%이(가) 중간에 나가자고 할 때마다 킹 헤일로는 단호하게 거절했다."
    - "킹 헤일로 자신도 귀신의 집 일부가 된 것 같다. 이렇게 이상하게 행동하다니."
    - "지금 킹 헤일로는 얌전했지만 %YOU%도 그 생각을 입 밖에 낼 용기는 없었다."
    - "게다가 이상한 행동을 보며 %YOU%은(는) 점차 대담한 추측을 하기 시작했다……"
    - divider: true
      content: ⏰
      position: left
    - "곧 관람을 마친 %YOU%과(와) 킹 헤일로는 다시 햇빛 아래로 나왔다."
    - "%YOU%은(는) 여전히 눈을 꼭 감고 집게처럼 팔을 조이는 킹 헤일로를 보고 난감해졌다."
    - acc: 1
      content: "「킹? 이제 밖이에요.」"
    - "킹 헤일로는 조심스레 눈을 뜨고 정말 귀신의 집 밖인 걸 확인한 뒤 평소 모습으로 돌아왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오——호호호! 킹이 이곳을 정복했네!」"
    - "%YOU%은(는) 어이가 없어 킹 헤일로 혼자 자랑하도록 두고 가려 했지만, 킹 헤일로는 여전히 다정하게 %YOU%을(를) 끌어안고 있었다."
    - "귀신의 집에서 있었던 일들을 떠올리자 %YOU%은(는) 조금 성급할지도 모를 대담한 결론에 이르렀다."
    - "그렇다면 솔직하게 이야기해야 할까."
    - acc: 1
      key: update
      content: "「사실 킹은 그렇게 무섭지 않았죠?」 (관계를 진전시킨다)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%, 무슨 소리야?」"
        - "킹 헤일로는 %YOU%의 말을 못 알아들은 척했다."
        - "이렇게 둘러대는 킹 헤일로의 마음을 열려면 진심을 전해야 할 것 같다."
        - acc: 1
          content: "「일류 킹이 정말 이 정도로 무서워할까요?」"
        - "%YOU%은(는) 아직도 몸을 꼭 감고 있는 킹 헤일로의 팔을 봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럴 리 없잖아. 이건 그냥……」"
        - acc: 1
          content: "「킹, 저도 좋아해요.」"
        - "이 밀고 당기기에서 %YOU%은(는) 과감한 공격을 선택했다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「나도 모르게…… 잠깐, 잠깐? 뭐라고?」"
        - "킹 헤일로는 먼저 멍해졌다가 믿을 수 없다는 듯 되물었다."
        - acc: 1
          content: "「킹도 같은 마음이죠? 끌어안을 때는 거의 한 몸이 될 것 같던데요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「으아아아! 잠깐, 잠깐! 너…… 너무 직구잖아! %CALLNAME%, 킹이 마음을 정리할 때까지 기다려!」"
        - "%YOU%의 과감한 공격은 킹 헤일로에게 상당한 치명타를 준 모양이다."
        - "%YOU%은(는) 새빨개진 킹 헤일로를 보고 더 참지 못해 손을 뻗어 끌어안았다."
        - "%YOU%에게 들킨 킹 헤일로는 조금 멋쩍게 고개를 숙였다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%이(가) 킹의 마음을 먼저 알아채다니! 일단 킹을 잘 알고 있다는 건 인정할게!」"
        - "킹 헤일로는 고개를 돌렸지만 더 뜨거운 포옹으로 %YOU%에게 답했다."
        - "킹 헤일로의 말을 빌리면 「일류의 사랑」은 그렇게 맺어졌다."
    - acc: 2
      content: "「일류 킹도 무서워하나요?」 (아직 진전시키지 않는다)"
      lines:
        - "%YOU%은(는) 지금은 감정을 억누르기로 했다."
        - "예상대로 킹 헤일로는 격분하며 곧바로 %YOU%을(를) 놓았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내가 무서워할 리 없잖아!」"
        - "%YOU%은(는) 킹 헤일로가 놓은 틈을 타 도망쳤다."
        - "곧 따라잡혔지만 킹 헤일로는 말다툼에 정신이 팔려 귀신의 집에서의 달콤함을 잊은 듯했다."
        - "하지만 %YOU%은(는) 킹 헤일로의 실망을 뚜렷이 느낄 수 있었다."

89:
  title: "서툴고 달콤한 계략"
  lines:
    - "오늘은 날씨가 좋아 %YOU%은(는) 트레센 학원의 길을 걸으며 기분이 좋았다."
    - "그런데 왜인지 오늘은 큰일이 생길 것 같은 예감이 떠나지 않았다."
    - "%YOU%은(는) 주변에서 장난치는 %UMA%들을 봐도 무슨 일이 생길지 짐작할 수 없었다."
    - "그러던 중 %YOU%이(가) 몰래 움직이는 킹 헤일로를 발견했다."
    - "%YOU%의 담당 %UMA%는 예쁘게 포장된 작은 상자를 안고 %UMA%들 사이를 달려가고 있었다."
    - acc: 1
      content: "「저기, 킹!」"
    - "%YOU%은(는) 킹 헤일로를 불러 세우려 했지만 %SEX%는 이미 멀어지고 있었다."
    - "아무래도 트레이너실 쪽으로 간 모양이다."
    - "%YOU%은(는) 서둘러 걸음을 빨리했다."
    - "하지만 트레이너실에 도착해도 킹 헤일로는 없었다."
    - "킹 헤일로가 들고 있던 작은 상자만 소파 위에 가지런히 놓여 있었다."
    - "%YOU%은(는) 집어 들어 살폈다. 겉면에는 별다른 단서가 없는 평범한 선물 상자였다."
    - "킹 헤일로가 없는 지금 %YOU%은(는) 선물을 도로 내려놨다."
    - "%YOU%과(와) 킹 헤일로는 이미 친밀한 사이지만 마음대로 %SEX%의 물건을 여는 건 역시 좋지 않다."
    - "그래서 %YOU%은(는) 평소처럼 일을 시작했다."
    - "그러던 중 트레이너실 문을 두드리는 소리가 났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%! 있어?」"
    - "대답을 듣자 킹 헤일로는 문을 열고 트레이너실로 들어왔다."
    - "%YOU%이(가) 고개를 들자 킹 헤일로의 작은 얼굴이 붉게 달아올라 있었다. 무척 들떠 보였다."
    - "%SEX%가 먼저 가져다 둔 작은 상자를 떠올리자 %YOU%에게 어떤 생각이 스쳤다."
    - "저 상자는 킹 헤일로가 %YOU%에게 주려고 가져온 선물이 아닐까?"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「와, 이건 뭐야!」"
    - "%YOU%이(가) 입을 열려던 순간, 킹 헤일로는 소파 위 선물 상자를 보고 몹시 놀란 척했다."
    - "하지만 누가 봐도 연기였다."
    - "%YOU%은(는) 눈살을 찌푸리며 무언가 말하려 했지만 킹 헤일로는 이미 상자로 달려들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%이(가) 킹에게 주는 선물이구나. 그럼 킹은 사양 않고 받을게!」"
    - acc: 1
      content: "「킹, 저는……」"
    - "%YOU%이(가) 말하려 하자 킹 헤일로가 돌아서 경고하는 눈빛으로 %YOU%을(를) 봤다."
    - "그래서 %YOU%은(는) 나머지 말을 삼켰다."
    - "%YOU%은(는) 조금 두려워하며, 킹 헤일로가 아까처럼 들뜬 모습으로 돌아가 서둘러 포장을 뜯는 모습을 지켜봤다."
    - "상자 안에는 작은 케이크가 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「와, %CALLNAME%은(는) 킹이 마침 이 맛의 케이크를 먹고 싶어 한 걸 어떻게 알았어!」"
    - "킹 헤일로는 곧바로 작은 케이크를 먹기 시작했다. 몹시 서두르는 것 같았다."
    - "%YOU%은(는) 옆에서 보며 남몰래 고개를 저었다."
    - "갑자기 킹 헤일로의 눈이 빛나더니 움직임이 멈췄다."
    - "%SEX%는 몰래 %YOU%을(를) 한 번 보고는 몹시 놀란 척 남은 케이크에 손가락을 넣었다."
    - "그리고 케이크 안에서 반짝이는 작은 물건을 꺼냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 이 선물에는 다른 뜻이 있었던 거야?」"
    - "그 작은 물건은 틀림없는 반지였다."
    - "이어서 킹 헤일로는 반지를 닦고 억지로 %YOU%의 손에 쥐여 줬다."
    - "%SEX%는 오른손을 %YOU%에게 내밀고 왼손으로 얼굴을 가려 몹시 부끄러운 척했다. 그러면서도 손가락 사이로 몰래 %YOU%을(를) 보고 있었다."
    - "%YOU%은(는) 킹 헤일로의 모습과 손에 쥔 반지를 보고서야 그 의도를 이해했다."
    - "킹 헤일로는 모든 것을 준비하고 %YOU%이(가) 빠져나갈 길조차 남기지 않았다……"
    - "이렇게 적극적이고 강하게 나서다니, 과연 킹 헤일로다."
    - "%YOU%은(는) 한숨을 내쉬고 반지를 든 채 킹 헤일로의 오른손을 살며시 잡았다."
    - acc: 1
      key: update
      content: "%SEX%의 약지에 반지를 끼웠다. (관계를 진전시킨다)"
      lines:
        - "킹 헤일로가 이만큼 연기한 이상 %YOU%도 대놓고 거절하기는 어려웠다."
        - "게다가 거절할 이유가 있을까."
        - "오늘 일이 없었더라도 %YOU%은(는) 언젠가 킹 헤일로에게 어떻게 청혼할지 고민하기 시작했을지도 모른다."
        - "그리고 오늘 일은 킹 헤일로의 마음을 확실하게 증명했다."
        - "그래서 %YOU%은(는) 킹 헤일로의 마음을 받아들이기로 했다."
        - acc: 1
          content: "「앞으로 평생 서로의 곁에서 함께해요!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응!」"
        - "모든 일을 주도한 것은 킹 헤일로였고 %YOU%은(는) 흐름에 따랐을 뿐이지만, 킹 헤일로의 눈은 이미 붉게 젖어 있었다."
        - "%YOU%은(는) 반지를 낀 킹 헤일로의 오른손을 소중한 물건처럼 조심스럽게 잡았다."
        - "그 뒤 %YOU%은(는) 킹 헤일로의 애정 어린 시선을 받으며 입을 맞췄다."
    - acc: 2
      content: "%SEX%의 엄지에 반지를 끼웠다. (아직 진전시키지 않는다)"
      lines:
        - "아쉽게도 킹 헤일로는 마지막 한 수를 미처 계산하지 못했다."
        - "%YOU%도 킹 헤일로를 깊이 사랑했지만 지금은 적절한 시기가 아닌 듯했다."
        - "그래서 %YOU%은(는) 이 상황에서 빠져나갈 수를 찾아냈다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%, 무슨 뜻이야? 엉뚱한 손가락에 끼웠잖아. 정말 어리석네!」"
        - "킹 헤일로도 %YOU%이(가) 이렇게 나올 줄은 몰랐는지 잠시 당황했다."
        - acc: 1
          content: "「아뇨, 킹. 잘못 끼운 게 아니에요.」"
        - "「엄지에 반지를 끼는 건 강자와 실력의 상징이잖아요?」"
        - "킹 헤일로는 억지로 %YOU%에게서 손을 빼고 원망스럽게 %YOU%을(를) 바라봤다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「낭만이 없어! 하나도 일류답지 않아!」"
        - "%YOU%이(가) 입을 열기도 전에 킹 헤일로는 곧장 트레이너실을 나갔다."
        - "%YOU%은(는) 킹 헤일로의 실망을 뚜렷이 느낄 수 있었다."

99:
  title: "진심은 작은 일에 깃든다"
  lines:
    - "최근 어떤 사정으로 %YOU%의 업무량이 크게 늘었다."
    - "기한 안에 끝내야 했기에 %YOU%은(는) 트레이너실에서 밤샘 야근을 해야 했다."
    - "며칠 동안 일에 매달린 끝에 %YOU%은(는) 마침내 모든 업무를 마치고 집에 가서 쉴 수 있게 됐다."
    - "하지만 지금 %YOU%의 의식은 이미 조금 몽롱했다."
    - "%YOU%은(는) 무거운 걸음으로 집에 도착해 열쇠를 꺼냈지만 아무리 해도 열쇠 구멍에 들어가지 않았다."
    - "열쇠 구멍이 %YOU%의 눈앞에서 갑자기 문만큼 커지며 부드러운 빛을 냈다."
    - "그리고 이제 그 한가운데에서 사람의 모습이 보였다."
    - "%YOU%은(는) 「이제 쉽게 맞출 수 있겠네」라고 생각하며 손에 든 열쇠를 눈앞의 사람에게 내밀었다."
    - "그런데 열쇠 구멍이 입을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: "「열쇠 구멍」"
        - "「%CALLNAME%, 왜 이제야 돌아오는 거야? 전화도 안 받고, 걱정돼 죽는 줄 알았잖아!」"
    - "%YOU%은(는) 깜짝 놀랐다. 열쇠 구멍이 말을 했다!"
    - "%YOU%은(는) 손에 든 열쇠를 꽉 쥐고 열쇠 구멍에 반격하려 했다."
    - "안타깝게도 %YOU%의 체력과 기력은 이미 바닥나 있었다."
    - "%YOU%은(는) 눈앞의 열쇠 구멍을 향해 그대로 쓰러졌다."
    - "의식이 사라지기 직전, %YOU%의 몸을 부드러운 무언가가 받아 냈다."
    - "동시에 다급하게 부르는 목소리가 들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: "「열쇠 구멍」"
        - "「%CALLNAME%? %CALLNAME%! 왜 그래!」"
    - "그 뒤 %YOU%은(는) 끝없는 어둠 속으로 떨어졌다."
    - divider: true
      content: ⏰
      position: left
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 내 목소리 들려?」"
    - "%YOU%은(는) 희미하게 의식을 되찾고 자신이 침대에 제대로 누워 있음을 깨달았다. 이어 익숙한 목소리가 들렸다."
    - "킹 헤일로는 %YOU%이(가) 움직이는 걸 보고 무척 기뻐했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「꿀물 타 왔어. 조금 마실래?」"
    - "킹 헤일로는 %YOU%을(를) %SEX%의 팔에 기대게 하고 다른 손으로 컵을 %YOU%의 입가에 가져갔다."
    - "조금 달았지만 온도는 딱 좋았다."
    - "킹 헤일로가 직접 온도를 확인하고 가져온 것이리라."
    - "%YOU%은(는) 킹 헤일로의 호의를 애써 전부 받아들였고 기분이 조금 나아졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%은(는) 이대로 쉬어. 킹이 여기 있어 줄게.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「일류 킹은 돌보는 것도 제일 잘하는 게 당연하잖아.」"
    - "킹 헤일로가 다정하게 %YOU%을(를) 눕히자 %YOU%은(는) 다시 잠에 빠졌다."
    - divider: true
      content: ⏰
      position: left
    - "얼마나 지났을까. %YOU%은(는) 갑자기 눈을 떴다."
    - "지난밤의 일은 어렴풋이 기억났지만 자세한 내용은 거의 사라져 있었다."
    - "정신은 아직 무척 피곤했지만 몸의 피로는 많이 가셨다."
    - "%YOU%이(가) 일어나려 하자 무언가가 가로막았다."
    - "%YOU%이(가) 고개를 돌리자 마침 킹 헤일로의 잠든 얼굴이 눈에 들어왔다."
    - "%SEX%는 기분 좋게 잠든 채 팔다리를 쭉 벌려 %YOU%을(를) 안고 있었다."
    - "%YOU%을(를) 혼자 둘 수 없어 함께 있기로 한 모양이다."
    - "%YOU%은(는) 살며시 손을 뻗어 %SEX%의 뺨을 쓰다듬었다."
    - "그러자 킹 헤일로가 작게 코를 울리며 눈을 떴다."
    - acc: 1
      content: "「킹, 저는……」"
    - "하지만 킹 헤일로는 탓하지 않고 %YOU%을(를) 더 세게 끌어안았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음에는 이렇게 무리하지 마. 킹을 생각해서라도, 응?」"
    - "킹 헤일로는 좀처럼 보기 어려운 수줍음을 드러냈다. %YOU%은(는) 눈을 뗄 수 없었다."
    - "하지만 %YOU%이(가) 반응하지 않자 %SEX%는 곧바로 본성을 드러냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 어젯밤은 정말…… 잠도 제대로 못 자고, 킹을 몇 번이나 깨워서 돌보게 했으니까!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 그렇게 피곤하면서 킹에게 손을 대려고 하다니!」"
    - "킹 헤일로의 얼굴이 조금 붉어졌다."
    - "%YOU%은(는) 그 말을 듣고 몹시 쑥스러웠다. 그 시간의 기억이 정말 하나도 없었기 때문이다."
    - "킹 헤일로는 화난 척 고개를 돌렸다."
    - "하지만 곧 다시 돌아보며 얼굴을 붉히고 기대 어린 눈으로 %YOU%을(를) 바라봤다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「보상으로 오늘은 킹이 위야!」"
    - "말이 끝나기도 전에 킹 헤일로는 놀란 %YOU%의 눈앞에서 %YOU%의 옷을 풀기 시작했다."
  # キングヘイロー主導の調教へ

# 恋慕75以上かつハルウララの恋慕が75に達したとき
fraternity:
  title: "일류의 박애……"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 왜 우라라에게 손을 댄 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이미 킹이 있는데?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜 왜 왜 왜 왜」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜 왜 왜 왜 왜 왜 왜 왜 왜」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「…………」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이제 네 마음은 되찾을 수 없는 것 같네……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇다면 이렇게 하자. 부디 우라라를 잘 돌봐 줘.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX%는 순진하고 솔직하고 다정해. 만나는 사람 누구에게나 따뜻함을 전해 줘.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 %SEX%에게 악의를 품지 마. 아무리 작은 악의라도.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「킹은 물론 너를 사랑해. 우라라도 분명 그럴 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「넓은 마음은 일류의 증거. 그러니 너희 관계를 너무 질투하지는 않을게.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 대신 다시 말할게. 부디, 부디 %SEX%를 소중히 대해 줘.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이걸로 됐어. 이제 나가 줄래?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나는…… 조금 조용히 있고 싶어.」"
