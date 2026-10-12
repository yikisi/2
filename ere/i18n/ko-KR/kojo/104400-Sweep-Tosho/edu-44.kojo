# @file スイープトウショウ - 育成
# @author アグネスデジタル会社
# @author Claude (翻訳)
train:
  # 低体力
  - if: t = [false, false, false], t[0] = (era.get('base:44:体力') / era.get('maxbase:44:体力') < 0.4)
    lines:
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より前
      - if: era.get('cflag:44:育成回合计时') < 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「으으……왜 못 움직이겠지……싫어, 싫어! %CALLNAME%, 오늘은 그만 돌아가서 쉴 거야!!」"
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「으으……힘들어! 싫어, 싫어!! %CALLNAME%, 주인을 부려 먹고 쉬게도 안 해 주다니, 이제 안 봐줄 거야!!!」"
  # 大魔法使いの約束
  - if: t[1] = era.get('cflag:44:育成用变量')?.agreement > 0, !t[0] && t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「멍하니 있지 마! 다음 연습은 뭐야? 빨리 말해!!!」"
  # 低やる気
  - if: t[2] = era.get('cflag:44:干劲') < 0, !t[0] && !t[1] && t[2]
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 사역마가 주인에게 이렇게 심한 짓을 하다니, 오늘은 연습하기 싫어……아냐! 아무튼 오늘은 연습하기 싫다구!!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 대마법사가 되려는 내가 왜 이런 상태로 이런 연습을 해야 해!」"
  - if: '!t[0] && !t[1] && !t[2]'
    lines:
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: (t = era.get('cflag:44:育成回合计时')) > 47 + 42
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「빨리, 빨리! 연습이 끝나면 새 마법 연구도 해야 하거든!!」"
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「빨리, 빨리! %CALLNAME%처럼 꾸물거리면 천재 %MOHOSHOJO% 스위피의 독창적인 마법을 모두에게 제대로 보여 줄 수 없잖아!」"
          # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「대마법사가 되려면 제자가 필요해……제자를 얻으려면 %SEX%들에게 내 마법을 보여 줘야지.」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「%CALLNAME%, 오늘 연습은 뭐야?」"
          # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「아무 %CALLNAME%한테나 주인을 부려 먹을 권리가 있는 건 아니야!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「그 목표에 도달할 때까지……이건 %CALLNAME%의 특권이니까!」"
      - if: t <= 47 + 42
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「빨리, 빨리! 해 지기 전에 연습을 끝내야 마법 연구를 할 거 아냐!?」"
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「빨리, 빨리! 아침의 마력으로 연습할 기회는 엄청 소중하다구!!」"
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「오늘 연습이 끝나면 『치유초』랑 『물의 꽃』을 찾으러 갈 거야. 알았지, %CALLNAME%!?」"


ts_add:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「있잖아! 사역마! 아까 연습하다가……새 마법이 떠올랐어!!」"
  - "트레이닝이 끝나 갈 무렵, 스윕 토쇼가 갑자기 달려온다"
  - "그러고는 자신만만한 눈으로 %YOU%을(를) 바라본다"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「조금만 더 노력하면……쓸 수 있을지도 몰라!」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「해가 지려고 하긴 하지만!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그래도! 주인이 익힐 때까지 사역마는 당연히 계속 함께할 거지!?」"
  - "그렇게 물어온다"
  -
  - "그에 대한 %YOU%의 대답은——"
  - acc: 1
    content: "「스윕과 함께할게.」(동의)"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「흐흥~ 역시 내 사역마야!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「해가 지고 %MAJO%의 시간이 될 때까지 돌아가면 안 돼!」"
      - "그 뒤 스윕 토쇼와 함께 추가 트레이닝을 했다"
  - acc: 2
    content: "「스윕……드디어 추가 트레이닝을 해 주는 거야?」"
    lines:
      - "%YOU%의 입에서 「드디어」라는 말이 나오는 순간"
      - "스윕 토쇼의 살짝 올라갔던 입꼬리가 어째서인지 내려간다"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……아. 응. 주인. 응. 그래, 『드디어』 그럴 마음이 들었어.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……하지만 지금은 없어.」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「왜인지는 묻지 마! 직접 생각해 봐, 사역마!!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「주인이 지금부터 명령할게. 당장 주인을 업고 돌아가!!!」"
      - "갑자기 마음이 바뀐 스윕 토쇼는 결국 %YOU%에게 업힌 채 바로 근처 기숙사 입구까지 돌아갔다……"


rs_common:
  - if: era.get('status:44:疲惫') >= 3
    lines:
      - "%CHARA%와(과) 함께 준비실에 왔다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어! 힘들어! 힘들다구!!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「주인이 여기 오긴 했지만, 힘든 것도 사실이야!!」"
      - "그렇게 불평한다"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「주인은 출전할 거야! 하지만 사역마가 레이스가 끝난 뒤에 디저트를 안 사 오면——」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「주인이 너를 강아지로 만들어 버릴 거야. 알겠어!?」"
      -
      - "그 뒤 %CHARA%은(는) 준비실을 나와 코스로 내려갔다"
      - "눈을 감고 명상을 하는지 멍하니 있는지, 잠시 뒤 %CHARA%은(는) 대열 맨 뒤에서 천천히 게이트로 들어갔다"
  - if: era.get('status:44:疲惫') < 3
    lines:
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: (t = era.get('cflag:44:育成回合计时')) >= 95 + 25
        lines:
          - "%CHARA%와(과) 함께 준비실에 왔다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 출전하는 건 알지만 그래도 오기 싫다구!!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「주인의 기력에는 한계가 있어. 그런 건 사역마라면 알아야 하잖아!」"
          - "오기는 했어도 이렇게 불평한다"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흥! 좋아, 주인은 제대로 달릴 거야! 『마법』을 위해서니까!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「하지만 사역마, 레이스가 끝나고 디저트를 잊으면 주인이 화낼 거야!?」"
          -
          - "그 뒤 %CHARA%은(는) 준비실을 나와 코스로 내려갔다"
          - "그 자리에 서서 관객을 가만히 바라본 뒤, %CHARA%은(는) 대열 맨 뒤에서 천천히 게이트로 들어갔다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より前、新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: t < 95 + 25 && t > 47 + 42
        lines:
          - "%CHARA%와(과) 함께 준비실에 왔다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야, 뭐야! 왜 내가 이런 마법 경기에 나와야 해!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그러니까, 이런 경기에서 다들 내 마법을 제대로 못 알아보면 어쩔 거야?!」"
          - "오기는 했어도 이렇게 불평한다"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흥! 좋아! 어차피 경기라면 스위피 님의 마법을 쓸 수 있으니까」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「혹시 몰라 말하는데, 사역마, 똑똑히 지켜봐!」"
          -
          - "그 뒤 %CHARA%은(는) 준비실을 나와 코스로 내려갔다"
          - "눈을 감고 제멋대로 지팡이를 휘두른 뒤, %CHARA%은(는) 대열 맨 뒤에서 천천히 게이트로 들어갔다"
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
      - if: t <= 47 + 42
        lines:
          - "%CHARA%와(과) 함께 준비실에 왔다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야, 뭐야! 왜 이렇게 의미 없는 경기에 출전한 거야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이럴 시간이 있으면 책에 있는 마법을 더 배울 수 있었을 텐데!」"
          - "오기는 했어도 이렇게 불평한다"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흥! 좋아! 어차피 천재 %MOHOSHOJO% 스위피라면 뭐든 할 수 있으니까」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「사역마는 잘 지켜보고 주인이 돌아오기만 기다리면 돼!」"
          -
          - "그 뒤 %CHARA%은(는) 준비실을 나와 코스로 내려갔다"
          - "한참 동안 주문을 외운 뒤, %CHARA%은(는) 대열 맨 뒤에서 천천히 게이트로 들어갔다"


re_win:
  - if: era.get('status:44:疲惫') >= 3
    lines:
      - "레이스 후 절차를 마치고, %CHARA%와(과) 나란히 귀갓길을 걷는다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음, 음……이 디저트, 맛은 그럭저럭이네.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「사역마가 주인을 너무 부려 먹은 데 대한 작은 보상으로는 적당해.」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하지만! 그렇다고 주인을 마구 부려 먹어도 된다는 건 아니야!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「다음에도 이러면 주인은 레이스 안 나가!!」"
      -
      - "그 뒤 %YOU%와(과) %CHARA%은(는) 함께 트레센 학원으로 돌아갔다"
  - if: era.get('status:44:疲惫') < 3
    lines:
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: (t = era.get('cflag:44:育成回合计时')) >= 95 + 25
        lines:
          - "레이스 후 절차를 마치고, %CHARA%와(과) 나란히 귀갓길을 걷는다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「음, 음……이 디저트, 맛은 그럭저럭이네.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「사역마, 주인이 살찔까 봐 안 사 주는 일은 안 하는구나.」"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……왜 그렇게 걱정스럽게 봐? 살이 찔 리 없잖아!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「살찌면 그건 사역마가 트레이닝을 잘못 짠 탓이야!」"
          -
          - "그 뒤 %YOU%와(과) %CHARA%은(는) 함께 트레센 학원으로 돌아갔다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より前、新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: t < 95 + 25 && t > 47 + 42
        lines:
          - "레이스 후 절차를 마치고, %CHARA%와(과) 나란히 귀갓길을 걷는다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흥! 말했잖아. 천재 %MOHOSHOJO%한테 이기지 못할 경기 같은 건 없어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어떤 상대든 스위피 님이 전부 쓸어버릴 거야」"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「사역마, 어떤 레이스든 좋아」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「다음엔 천재 %MOHOSHOJO% 스위피가 마법을 더 많이 쓸 수 있는 경기를 골라!」"
          -
          - "그 뒤 %YOU%와(과) %CHARA%은(는) 함께 트레센 학원으로 돌아갔다"
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
      - if: t <= 47 + 42
        lines:
          - "레이스 후 절차를 마치고, %CHARA%와(과) 나란히 귀갓길을 걷는다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흥! 말했잖아. 천재 %MOHOSHOJO%한테 이기지 못할 경기 같은 건 없어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어떤 상대든 스위피 님이 전부 쓸어버릴 거야」"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「사역마, 주인이 출전하면 안 된다고 한 건 아니야」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「하지만 다음에는 더 대단한 경기를 골라!」"
          -
          - "그 뒤 %YOU%와(과) %CHARA%은(는) 함께 트레센 학원으로 돌아갔다"


re_lose:
  - if: era.get('status:44:疲惫') >= 3
    lines:
      - "레이스 후 절차를 마치고, %CHARA%와(과) 나란히 귀갓길을 걷는다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음, 음……이 디저트, 맛은 그럭저럭이네.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「사역마가 주인을 너무 부려 먹은 데 대한 작은 보상으로는 적당해.」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「응? 주인이 레이스에서 졌다고?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그런 건 아무래도 좋아! ……그러니까 사역마가 주인을 부려 먹은 탓이잖아!?」"
      -
      - "그 뒤 %YOU%와(과) %CHARA%은(는) 함께 트레센 학원으로 돌아갔다"
  - if: era.get('status:44:疲惫') < 3
    lines:
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: (t = era.get('cflag:44:育成回合计时')) >= 95 + 25
        lines:
          - "레이스 후 절차를 마치고, %CHARA%와(과) 나란히 귀갓길을 걷는다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「음, 음……이 디저트, 맛은 그럭저럭이네.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「사역마, 주인이 졌다고 안 사 주는 일은 안 하는구나.」"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……알았어, 알았어! 이 디저트를 다 먹으면 주인도 열심히 할게!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「다음엔 꼭 그 녀석들 앞에서 『마법』의 의미를 증명하겠어!」"
          -
          - "그 뒤 %YOU%와(과) %CHARA%은(는) 함께 트레센 학원으로 돌아갔다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より前、新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: t < 95 + 25 && t > 47 + 42
        lines:
          - "레이스 후 절차를 마치고, %CHARA%와(과) 나란히 귀갓길을 걷는다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 말도 안 돼. 그럴 리가 없어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「내 마법이 실패할 리 없잖아!!」"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흥! 좋아! 어차피 새로 만든 마법이니까」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이번엔 실패했지만……다음엔 고칠 수 있어. 틀림없어!」"
          -
          - "그 뒤 %YOU%와(과) %CHARA%은(는) 함께 트레센 학원으로 돌아갔다"
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
      - if: t <= 47 + 42
        lines:
          - "레이스 후 절차를 마치고, %CHARA%와(과) 나란히 귀갓길을 걷는다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 왜, 왜 지는 거야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「말도 안 돼, 말도 안 돼! 주인 탓일 리 없어!!」"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그냥 사역마가 고른 이 레이스가 시시했을 뿐이야.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「주인은 이번에 힘을 십 분의 일도 안 썼거든!」"
          -
          - "그 뒤 %YOU%와(과) %CHARA%은(는) 함께 트레센 학원으로 돌아갔다"


# 募集成功後の当週ターン終了
# スタミナ&賢さ+5
we_blue_enchan_tress:
  title: "알쏭달쏭한 블루 인챈트리스"
  lines:
    - "트레센 학원에는 저마다 뚜렷한 개성을 지닌 %UMA%가 많다"
    -
    - "쉬는 시간에 동화를 읽는 아이도 있고, 귀여운 소품을 모으는 아이도 있다"
    - "틈틈이 그림을 그리는 아이도 있고, 학원 화단에 꽃을 잔뜩 심는 아이도 있다"
    - "그런 건 아직 흔한 개성에 속한다"
    -
    - "달리는 소리로 록 음악을 만든다거나, 여러 언어로 자기 별명을 백 개나 짓는다거나"
    - "야키소바에 머스터드를 넣는다거나, 한 끼에 학생 식당을 거덜 낸다거나"
    - "그에 비하면 마법을 좋아하는 정도는 특별하게 여기기도 어려운 개성일 것이다"
    -
    - "하지만……"
    - "%CHARA%은(는) %YOU%이(가) 상상했던 것처럼 평범하게 마법을 좋아하는 %UMA%가 아니었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어! 이런 거 하기 싫어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너는 내 %CALLNAME%이잖아?! 이런 건 %CALLNAME%이(가) 주인 대신 하면 되잖아!?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어, 싫어! 이런 책 보기 싫어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사——역——마——!!! 왜 주인 과제를 대신 안 해 주는 거야!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어, 싫어, 싫어! 엉터리 연습은 전부 재미없어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%, 이 연습 대신 끝내 주면 안 돼?」"
    -
    - "불과 며칠 함께했을 뿐인데, %YOU%은(는) %CHARA%의 입에서 상상도 못 한 요구를 잇달아 들었다"
    - "각오했다고 생각했지만, %YOU%은(는) 늘 따라가지 못하고 대응하기에 바쁘다"
    -
    - "무엇보다 중요한 건 %CHARA%의 요구가 말뿐이 아니라는 점이다——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! 이렇게 쓸모없는 사역마는 필요 없어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「계속 이러면 %CALLNAME%하고 계약을 해지하고 다음 사역마를 찾을 거야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「봐, 저기 새끼 고양이 괜찮지 않아!」"
    -
    - "대응을 잘못하면 %CHARA%에게서 단순명쾌한 협박이 날아온다"
    - "지금까지 %CHARA%이(가) 어떤 트레이너와도 계약하지 못한 이유를 알 것 같다……"
    -
    - "평범한 주말이었다"
    - "트레이너실에 앉아 있던 %YOU%에게 %CHARA%이(가) 갑자기 찾아온다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아. %CALLNAME%.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「따라와.」"
    - "당연하다는 듯한 말투로 영문 모를 명령을 내리더니, 팔짱을 끼고 그 자리에서 움직이지 않는다"
    -
    - "……또 이렇다"
    - "갖가지 고집에 익숙해졌다고 생각했지만, 역시 막막한 기분은 남는다"
    -
    - "어디로 가는지, 뭘 할 건지도 알려 주지 않는다"
    - "이때의 %YOU%은(는) 그저 말없이 %CHARA%의 뒤를 따라간다"
    -
    - "학원 뒷문을 지나, %YOU%은(는) %CHARA%에게 이끌려 천천히 뒷산으로 들어간다"
    -
    - acc: 1
      content: "「저기……오늘은 대체 뭘 하러 가는 거야?」"
    - "조심스럽게 묻는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! %CALLNAME%, 일일이 묻지 마!」"
    - "대답할 생각은 전혀 없다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「주인만 따라오면 돼!」"
    -
    - "「하지만……적어도 어디로 가는지 정도는……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「바보 %CALLNAME%! 천재 %MOHOSHOJO% 스위피가 가는 곳에는 %CALLNAME%도 꼭 따라와야 해!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이렇게 간단한 것도 몰라!」"
    -
    - 「……」
    - "%CHARA%의 뾰로통한 얼굴을 보고 %YOU%은(는) 어쩔 수 없이 다시 말없이 따라간다"
    -
    - "그런데 갑자기 가시덤불이 %YOU%와(과) %CHARA%의 앞길을 막았다"
    -
    - "「이러면 어쩔 수 없겠네……」"
    - "적어도 이 길로는 못 갈 것 같다. %YOU%은(는) 돌아서려 한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! 역시 %CALLNAME%은(는) %CALLNAME%네. 이런 어려움도 해결할 방법을 못 떠올리다니」"
    - "%YOU%이(가) 물러선 데 조금 불만스러워한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이럴 때야말로 위대한 『마법』의 출동이지!」"
    -
    - acc: 1
      content: "「스윕의 『마법』……그런 것도 할 수 있어?」"
    - "%YOU%은(는) 살짝 의문을 품었을 뿐이다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「바보 %CALLNAME%! 네가 마법을 못 쓰는 것뿐이잖아!」"
    - "곧바로 받아친다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피는 대마법사인 그랜마의 제자야. 어떤 마법이든 식은 죽 먹기라구!」"
    -
    - acc: 1
      content: "「그럼 부탁해도 될까?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ %CALLNAME%이(가) 그렇게 말한다면 잘 봐~」"
    - "보여 주고 싶어 하는 %CHARA%은(는) 허리에 꽂아 둔 지팡이를 꺼내 가시덤불을 향해 휘두른다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Rosa★Gladiolus！」
    -
    - "가시덤불은 아무 반응도 없다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……Rosa★Gladiolus！！！」
    -
    - "바람은 불어도 가시덤불은 흔들리지 않는다."
    -
    - "눈앞의 자그마한 %UMA%는 곧 고민에 빠져, 왜 안 되는지 분한 표정으로 생각한다"
    - "그런데 다음 행동은 뜻밖이었다——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……있잖아. %CALLNAME%.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「업어 줘.」"
    - "%CHARA%은(는) 앞쪽으로 몇 미터나 이어진 가시덤불을 가리키며, %YOU%에게 %SEX%를 업고 건너가라는 뜻을 전한다"
    -
    - "가시덤불은 빈틈없이 빽빽하다. 가로세로로 얽힌 가지들이 햇볕 아래 얼룩진 그림자를 드리우고, 날카로운 가시는 파수꾼처럼 늘어서 있다"
    - "이렇게 위험한 길을 %CHARA%을(를) 업고 가기는커녕, 혼자서도……"
    - acc: 1
      content: "「……다른 길로 가면 안 될까?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여기로 갈 거야.」"
    - "%CHARA%은(는) 망설임 없이 대답한다. 타협의 여지라곤 없는 고집스러운 말투다"
    -
    - "그렇게 %YOU%은(는) 자그마한 %UMA%를 업은 채 빽빽한 가시밭길 앞에 설 수밖에 없었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가.」"
    - "작은 발로 가볍게 툭 차는 힘이 느껴진다"
    -
    - "이를 악문 %YOU%은(는) 돌아올 때 팔과 다리에 붕대를 칭칭 감고 있을 자기 모습을 떠올리며 발을 내디뎠다——"
    -
    - "하지만 예상했던 고통은 찾아오지 않는다"
    - "%YOU%의 발걸음이 의외로 가벼웠던 건지, %YOU%의 움직임이 절묘했던 건지"
    - "빽빽한 가시덤불을 통과하는 동안 덩굴 하나도 %YOU%의 팔다리에 닿지 않았다"
    - "설마 정말로——"
    - "「마법」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「와——」"
    - "바위틈에 홀로 피어난 푸른 장미를 보고"
    - "땅에 내려선 %CHARA%의 눈이 반짝인다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 드디어 찾았다! 전설의 마녀의 꽃!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「매일매일 나와 함께하면서, 내가 가장 위대한 대마법사가 되는 걸 지켜보게 할 거야!」"
    -
    - acc: 1
      content: "「예쁘네」"
    - "%YOU%도 저도 모르게 감탄한다"
    -
    - "「하지만 여기가 이 아이의 집이잖아」"
    - "어째서인지 그런 말이 나왔다"
    - "「꺾어서 데려가면 집이 그리워지지 않을까?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그만둘래.」"
    - "고개를 옆으로 돌린다"
    -
    - 「……？」
    - "%CHARA%의 갑작스러운 말에 놀란다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그만둔다면 그!만!둬!」"
    - "%CHARA%은(는) 화를 내며 발을 구른다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 돌아갈 거야!!!」"
    -
    - "그렇게 반나절을 걸은 %YOU%와(과) %CHARA%은(는) 빈손으로 트레센 학원에 돌아왔다"


# 次のターン終了
# スタミナ&根性+5
ws_yellow_orchid:
  title: "여정의 시작, 노란 난초"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%! 들었는데……!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%! 요즘 알게 됐는데……!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아! %CALLNAME%! 갑자기 생각났는데……!」"
    -
    - "어째서인지 지난 모험 이후로, %YOU%은(는) 트레이닝 틈틈이 %CHARA%에게 이끌려 온갖 장소에서 마법 물건을 찾게 되었다"
    - "듣기만 하면 황당한 이야기인데도, 어째서인지 설명에 들어맞는 물건은 발견되곤 한다"
    -
    - "가는 길에는 기묘한 문제도 여러 번 생긴다"
    - "그런데도 어째서인지 늘 해결되고 만다——"
    -
    - "설마 정말 「마법」인 걸까?"
    - "%YOU%은(는) 이따금 생각한다"
    -
    - "하지만 그런 생각보다 중요한 건……"
    - "%CHARA%은(는) %YOU%의 담당 우마%UMA%다"
    - "%YOU%은(는) %SEX%의 담당 트레이너일 것이다"
    -
    - "즉……"
    - "%CHARA%은(는) 메이크 데뷔를 준비해야 한다."
    -
    - "다시 찾아온 주말, 트레이닝 시간이 아닐 때 %YOU%이(가) 먼저 %CHARA%을(를) 트레이닝장으로 불러낸다"
    - acc: 1
      content: "바라본다"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「? 왜 그래, %CALLNAME%? 왜 그런 눈으로 봐?」"
        - "의아한 눈으로 마주 본다. 갈색 털의 자그마한 %UMA%는 뭔가를 생각하는 듯하다"
        -
        - "어떻게 %SEX%를 연습에 끌어들일지 고민한다. 평소의 %CHARA%이라면 분명——"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아! 알겠다! %CALLNAME%, 주인이 연습하는 모습이 보고 싶은 거지!」"
        - "결국 아무 말도 하기 전에 예상과는 다른 말을 들었다"
    -
    - "「스윕, 갑자기 연습하고 싶어진 거야?」"
    - "적잖이 놀라 일단 그런 말이 튀어나왔다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜 그래? 아무리 천재 마법사라도 연습이 필요할 때쯤은 있잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ %CALLNAME%에게 보여 줄게. 천재 %MOHOSHOJO% 스위피의 실력을!」"
    -
    - "하지만 십여 분 뒤——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어, 싫어, 싫어! 이런 연습 하기 싫어~!!」"
    - "……%CHARA%은(는) 벌써 트레이닝을 싫어하고 있었다"
    -
    - "「스윕은……내가 말한 『달리기의 마법』을 찾아보기로 하지 않았어?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당연히 그럴 거야! 하지만 이렇게 재미없는 연습만 해서 『마법』을 배울 수 있을 리 없잖아!?」"
    -
    - "또 「마법」 이야기로 돌아왔다……"
    - "생각해 보면 처음 %CHARA%을(를) 영입할 때부터 그 뒤의 기묘한 탐험까지"
    - "이 아이의 행동 동기는 거의 전부 「마법」을 중심으로 돌아간다"
    - "어쩌면 %SEX%의 동기를 알면 「마법」의 의미도 이해할 수 있을 것이다——"
    -
    - "「스윕은 왜 그렇게 마법을 좋아해?」"
    - "부드럽게 묻는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……뭐야, 그런 것도 몰라?」"
    - "못마땅한 듯 %YOU%을(를) 힐끗 본다"
    - "그러더니 일부러 헛기침을 해 목을 가다듬고 뭔가를 말하기 시작한다——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마법은 재밌으니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「순식간에 꽃다발을 꺼내고, 두 번 만에 병을 낫게 하고, 단숨에 사람을 웃게 하잖아. 대단하지 않아?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고! 남들이 못 배우는 걸 배운다는 건 원래 부러워할 일이잖아!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 그랜마처럼 세상의 마법을 전부 익히면——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피인 나는 위대한 대%MAJO%로 추앙받을 거야!」"
    -
    - "이유는 상상했던 것만큼 복잡하지 않았다"
    - "「그럼……나는……」"
    - "잠시 생각한다"
    -
    - "「……칠월부터 레이스가 몇 개 열린대」"
    - "「그중 하나라도 이기면 우승자는 마법 등급을 인정받을 수 있어」"
    - "「스윕이라면 어쩌면……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    - "귀가 쫑긋 선다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말!? %CALLNAME%! 그렇게 중요한 걸 왜 진작 말해 주지 않았어!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 이제 아무 말 안 해도 돼! 천재 %MOHOSHOJO% 스위피로서 이 정도 시련에는 당연히 나가야지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「멍하니 있지 마, %CALLNAME%! 그날 최고의 마법을 보여 주려면 주인은 지금부터 연습해야 해!」"
    -
    - "아무튼 눈앞의 자그마한 %UMA%의 연습 의욕은 겨우 끌어냈다"
    - "적어도 메이크 데뷔가 끝날 때까지는 %YOU%이(가) 매일 %CHARA%의 트레이닝 때문에 머리를 싸맬 필요는 없다……"


rs_begin_race:
  title: "메이크 데뷔 전·마법 준비"
  lines:
    - "메이크 데뷔를 철저히 준비하기 위해 %YOU%은(는) 레이스 전에 %CHARA%와(과) 함께 준비실에 왔다"
    -
    - "레이스 진행에 관해 조금 더 설명해 줄 생각이었지만……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「시끄러, 시끄러! %CALLNAME% 주제에 또 뭘 걱정하는 거야!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%! 그럴 시간 있으면 짐이나 들어 주지?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭘 봐? 지팡이랑 모자를 잘 들고 있으라고 했잖아!」"
    - "어느새 또 이렇게 되었다"
    -
    - "이야기를 꺼내 보려는 시도는 거의 헛수고로 끝난다"
    - "말을 보태면 곧바로 쏘아붙이니, 설명할 틈이 거의 없다"
    - "결국 멍하니 옆에 서서 %CHARA%의 지시대로 짐을 들고 있을 수밖에 없다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「준비 완벽, 만사 오케이~!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! 모자랑 지팡이 줘!」"
    -
    - "그 한마디에 %YOU%은(는) 곧바로 마법 모자와 지팡이를 챙겨 건넨다"
    - "%CHARA%은(는) 모자를 받아 머리에 제대로 쓰고 지팡이를 허리에 꽂는다"
    -
    - "「……정말 그 모자를 쓰고 달릴 거야?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「바보 %CALLNAME%! 이렇게 간단한 것도 몰라!」"
    - "%CHARA%에게 핀잔을 듣는다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 모자는 그랜마가 직접 만들어 준 마법 도구야! 안 쓰면 어떻게 마법을 제대로 쓰겠어?!」"
    -
    - "설득해 봐도 소용없었다"
    - "%YOU%은(는) 모자를 쓴 자그마한 %UMA%가 천천히 게이트에 들어가는 모습을 멀리서 지켜볼 수밖에 없었다……"


re_begin_race_win:
  title: "메이크 데뷔 후·마법 등급 인정식"
  lines:
    - "겨우 %CHARA%의 메이크 데뷔를 무사히 마쳤다……"
    - "%SEX%와 한 약속대로, %YOU%은(는) 미리 사람들에게 부탁해 %CHARA%의 마법 등급 인정식을 준비해 두었다"
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - "「그럼, 이제부터 당신은 정식으로 인정받은 마법 수습생입니다!」"
    - "%CHARA%은(는) 임시 수여대 위에 서 있고, 옆에서는 %FUJI%이(가) 정중한 태도로 소개하고 있다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어, 싫어! 왜 겨우 마법 수습생이야!」"
    - "%CHARA%은(는) 완전히 만족한 건 아닌 모양이다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「난 단번에 마법의 대가로 인정받을 생각이었는데!」"
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - "「그럼 앞으로도 정진해 주세요」"
    - "%FUJI%은(는) 미소를 지으며 응한다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "지나가던 우마%UMA%"
        - "「있잖아, 마법 실력을 증명하려고 달린다니 바보 같지 않아?」"
    - "단 아래의 우마%UMA%는 깔보는 표정이다"
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "지나가던 우마%UMA%"
        - "「애초에 『마법』 같은 건 『어린애』나 믿는 거 아니야?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지금 뭐라고 했어!!?」"
    - "곧바로 반응하며 그 우마%UMA%를 노려본다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "지나가던 우마%UMA%"
        - "「흥. 그렇게 불만이면 한신 쥬버나일 필리스에서 겨뤄 보든가」"
    - "지나가던 우마%UMA%는 그 말만 남기고 떠난다"
    -
    - "단 위에서 화를 내며 발을 구르는 %CHARA%을(를) 보며 %YOU%은(는) 저도 모르게 식은땀을 흘린다"
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - "「『마법』을 위해 달린다라……」"
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - "「후후, 그것도 나쁘지 않네요」"
    -
    - "적어도 다음 레이스에 %CHARA%을(를) 제대로 출전시킬 걱정은 안 해도 되겠다……"
    - "한신 쥬버나일 필리스까지 %SEX%의 연습 의욕이 잘 올라 주면 좋으련만……"


re_begin_race_lose:
  title: "메이크 데뷔 후·이루지 못한 의식"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아~ %CALLNAME%, 약속했던 마법 인정식은 어디 있어?」"
    - "돌아온 뒤, 어째서인지 %CHARA%와(과) 미묘하게 얼굴을 마주 보고 있다"
    -
    - "「아, 그건……」"
    - "「이겼을 때만 열리거든……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 주인은 골인했으니까, 아슬아슬하게 『이겼다』고 할 수 있잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데 왜 마법 인정식에 참가할 수 없어?」"
    -
    - "「골인은 했을지도 몰라」"
    - "「하지만 골인했을 때 네 앞에 다른 %UMA%가 있었잖아」"
    - "「마법 인정식에는 이미 %SEX%들이 참가했을지도 몰라……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어, 싫어, 싫어!! 왜, 왜냐구!!!」"
    - "갑자기 마구 떼를 쓰기 시작한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%——이건 분명 네 실수야!!!!!」"
    -
    - "「내 실수일지도 몰라. 하지만 진정해……」"
    - "「기회는 아직 많아. 계속 출전하면——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「칠월 이후에 『레이스 몇 개』가 있다고 했잖아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음은 언제야? 빨리 말해!!!」"
    -
    - "「마법 인정식」을 미룰 명분은 생겼지만, 이대로는 %CHARA%도 기뻐하지 않겠지……"
    - "아무튼 우선 미승리전 돌파를 목표로 나아가자"

rs_hans_fil:
  title: "한신 쥬버나일 필리스 전·선전포고의 벌노랑이"
  lines:
    - "아침에 %CHARA%을(를) 만났을 때부터 평소와는 전혀 다른 분위기가 느껴졌다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    -
    - "어째서인지 줄곧 %YOU%을(를) 바라보면서도 아무것도 하지 않는다. 그저 말이 없다"
    - "평소의 불평도, 재촉하는 목소리도 없다"
    -
    - "스스로 아주 당연하다는 듯 %YOU%을(를) 지하철에 태워 한신 경기장까지 데려왔다"
    - "준비실에 들어온 지금까지 한마디도 하지 않는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 「……」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - 「……」
    - "일 초가 일 년 같은 침묵에 빠진다……"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「계속 거기 서 있기만 하고, 오늘이 무슨 날인지는 알아, %CALLNAME%?」"
    - "준비실 반대편에서 팔짱을 끼고 서 있던 %CHARA%이(가) 갑자기 입을 연다"
    -
    - "드디어 말을 했다……"
    - "이럴 때는 이렇게 대답해야 한다——"
    - acc: 1
      content: "「복수의 날」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아냐! 복수 같은 거 아니거든!! 천재 %MOHOSHOJO% 스위피가 언제 그렇게 속이 좁았어!!!」"
    - acc: 2
      content: "「레이스의 날」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「왜 그렇게 특별한 느낌도 없이 말하는 거야, %CALLNAME%!」"
    - acc: 3
      content: "「침묵의 날」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「무슨 침묵의 날이야, %CALLNAME%! 침묵의 날은 아직 멀었어!!」"
        - "정말 침묵의 날이 있긴 한 건가……"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘……사실은——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피가 마법사로서 숙적을 토벌하는 날이잖아!!」"
    - "이를 악물고 말한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「미래의 대마법사를 얕보다니, 앞으로 그 애가 한마디도 못 하게 만들 거야!!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그!러!니!까!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「주인의 모자랑 지팡이를 가져와야 한다는 것도 몰라, %CALLNAME%!!!」"
    -
    - "역시 그 때문이었나……"
    - acc: 1
      content: "건넨다"
    - acc: 2
      content: "아무튼 건네고 본다"
    - "%YOU%은(는) 손에 들고 있던 모자와 지팡이를 %CHARA%에게 건넨다"
    -
    - "%CHARA%은(는) 모자를 제대로 쓰고 지팡이를 허리에 꽂는다"
    -
    - "코스로 내려간 %CHARA%은(는) 대열의 거의 맨 뒤에 있었다"
    - "게이트에 들어갈 때까지, 전에 %SEX%와 말다툼했던 그 우마%UMA%를 계속 노려보고 있었다……"


re_hans_fil_win:
  title: "한신 쥬버나일 필리스 후·레이스 뒤의 새로운 승부"
  lines:
    - "%CHARA%은(는) %YOU%이(가) 원래 계획했든 아니든 어차피 나가겠다고 떼썼을 이 레이스에서 깔끔하게 승리했다"
    - "얼마 지나지 않아 레이스 후 시상 시간이 되었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! 말했잖아. 내 마법은 너 같은 애가 절대 이해 못 한다고!」"
    - "시상대에 선 %CHARA%은(는) 아래에서 분한 듯 이를 드러내는 우마%UMA%를 깔보는 눈으로 내려다본다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "패배한 우마%UMA%"
        - 「……」
    - "그저 단 위의 %CHARA%을(를) 뚫어지게 바라본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - "한층 더 깔보는, 확신에 찬 눈으로 빤히 마주 본다"
    -
    - "레이스 후의 귀중한 시간이 치열한 눈싸움 대회로 변하지 않도록"
    - "%YOU%은(는) 서둘러 %CHARA%을(를) 데리고 자리를 떠났다……"


re_hans_fil_lose:
  title: "한신 쥬버나일 필리스 후·레이스 뒤의 새로운 승부"
  lines:
    - "%CHARA%은(는) 투지에 불타 이 레이스에 출전했다"
    - "안타깝게도 %SEX%가 말한 것처럼 숙적을 토벌하지는 못했다"
    -
    - "다행히도 전에 %SEX%와 말다툼했던 그 우마%UMA% 역시 우승하지 못했다"
    - "지금 %CHARA%와(과) 그 우마%UMA%는 어째서인지 시상대 아래에서 나란히 서 있다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "지나가던 우마%UMA%"
        - 「……」
    - "주로 단 위의 우승한 %UMA%를 보고 있지만, 옆의 %CHARA%도 두어 번 힐끗 본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - "팔짱을 끼고 신경 쓰지 않는 척하면서도, 날카로운 곁눈질을 돌려주는 건 잊지 않는다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "지나가던 우마%UMA%"
        - 「……」
    - "고개를 돌려 %CHARA%을(를) 본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - "마찬가지로 고개를 돌려 정면으로 마주 본다"
    -
    - "레이스 후의 귀중한 시간이 치열한 눈싸움 대회로 변하지 않도록"
    - "%YOU%은(는) 서둘러 %CHARA%을(를) 데리고 자리를 떠났다……"


# クラシック級第1週開始
ws_new_year_c:
  title: "새해 계획"
  lines:
    - "%YOU%의 지도 아래 %CHARA%은(는) 무사히 주니어급을 마쳤다"
    -
    - "클래식급에 들어선다는 것은 %CHARA%이(가) 더 높은 수준의 레이스에 출전하고 더 강한 상대와 만난다는 뜻이기도 하다"
    - "%CHARA%의 실력은 믿지만, %SEX%를 꾸준히 출전시키는 방법은 여전히 %YOU%의 골칫거리다"
    - acc: 1
      content: "(아무튼, 우선 새해부터 잘 보내자——)"
    - "이른 아침인데도 신사 입구에는 벌써 긴 줄이 생겼다. 줄 끝은 신사로 올라가는 계단까지 닿을 듯하다"
    - "%YOU%와(과) 모자를 쓴 자그마한 %UMA%는 줄을 따라 천천히 나아간다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐야, 뭐야! 이런 데 데려와서는 또 소원을 빌기만 하려는 거야?」"
    - "줄을 서 있는 동안 이야기를 나눈다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「소원 같은 막연한 게 무슨 의미가 있어? 마법으로 한 번에 이루면 되잖아?」"
    - "아무래도 소원 빌기는 %SEX%의 마법 범주에 들지 않는 모양이다……"
    -
    - "하지만 온 이상 %SEX%도 제대로 소원을 빌게 해 보자"
    - "줄을 서는 게 조금 짜증스러운 자그마한 %UMA%의 뒷모습을 바라보며 말한다"
    -
    - "「소원을 비는 건 다들 전통이라고 생각하니까……」"
    - "「예전부터 모두 그렇게 해 왔어」"
    -
    - "「새해 첫날에는 소원이 있는 사람들이 『모두』 신사에 와」"
    - "「우리도 지금 그러고 있는 거야——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……잠깐! 소원이 있는 사람은 『모두』 신사에 온다고?」"
    - "갑자기 %YOU%의 말 일부를 되풀이한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그러니까……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너도 소원이 있어!??」"
    - "어째서인지 관심이 미묘하게 다른 곳으로 향한 %CHARA%은(는) 뒤돌아 똑바로 이쪽을 본다"
    -
    - "「아, 그건——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「말 안 해도 돼! %CALLNAME%의 소원을 이루어 주는 건 마법사의 책임이니까!」"
    - "문득 생각이 난 %CHARA%이(가) 지팡이로 가리키며 재촉하듯 말을 끊는다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「프리지어★도그우드, 말해라~!」"
    -
    - "원래는 %CHARA%에게 소원을 빌게 해 조금 조용히 시킬 생각이었다"
    - "그런데 소원을 비는 사람부터 달라졌고, %CHARA%도 조용해지기는커녕 기대에 찬 눈으로 대답을 기다리고 있다"
    - "대체 무슨 전개란 말인가"
    -
    - "이럴 때는——"


ws_ny_sub_select:
  - acc: 1
    key: select
    content: "말한다"
    # ws_ny_sub_option
  - if: d.reject < 3
    acc: 2
    content: "고개를 젓는다"
    # ws_ny_sub_reject
  - if: d.reject < 3
    acc: 3
    content: "「소원은 말하면 이루어지지 않아……」"
    # ws_ny_sub_reject


ws_ny_sub_option:
  - "지금 %YOU%이(가) 가장 이루고 싶은 소원은——"
  - acc: 1
    key: select
    content: "「스윕이 레이스에서 이기는 것」(모든 능력+20)"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「? 그 소원은?」"
      - "조금 놀란 모양이다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야! 왜 그런 소원을 비는 거야!?」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어, 싫어! 하려면 힘들어! 아니, 듣기만 해도 재미없어!! 네 말대로 하기 싫어!!!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 주인이랑 상관없는 소원으로 다시 골라!!!」"
      -
      - "%YOU%은(는) %CHARA%에게 도움이 될 소원이라 생각했는데, 왜 이렇게 매력이 없는 걸까……"
      - "적어도 조금 칭찬해 주는 대가로, %YOU%은(는) %CHARA%이(가) %SEX% 나름대로 받아들일 수 있는 방식으로 한동안 연습을 늘리게 했다"
  - acc: 2
    content: "「스윕이 공부를 더 잘하게 되는 것」(스킬 Pt+100)"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「? 그 소원은?」"
      - "조금 놀란 모양이다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야! 왜 그런 소원을 비는 거야!?」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어, 싫어! 하려면 힘들어! 아니, 듣기만 해도 재미없어!! 네 말대로 하기 싫어!!!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 주인이랑 상관없는 소원으로 다시 골라!!!」"
      -
      - "%YOU%은(는) %CHARA%에게 도움이 될 소원이라 생각했는데, 왜 이렇게 매력이 없는 걸까……"
      - "적어도 도서관에 새로 들어온 동화를 %CHARA%와(과) 함께 읽고 나니, %SEX%도 그렇게 싫어하지는 않는 모양이었다"
  - acc: 3
    content: "「스윕이 건강하게 지내는 것」(체력+400)"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「? 그 소원은?」"
      - "조금 놀란 모양이다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야! 왜 그런 소원을 비는 거야!?」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어, 싫어! 하려면 힘들어! 아니, 듣기만 해도 재미없어!! 네 말대로 하기 싫어!!!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 주인이랑 상관없는 소원으로 다시 골라!!!」"
      -
      - "%YOU%은(는) %CHARA%에게 도움이 될 소원이라 생각했는데, 왜 이렇게 매력이 없는 걸까……"
      - "적어도 %CHARA%을(를) 디저트 가게에 데려가고 나니, %SEX%도 얌전히 조용해졌다"


ws_ny_sub_reject:
  - if: d.reject === 0
    lines:
      - "%CHARA%은(는) 눈살을 찌푸리더니 다시 마법 지팡이를 휘두른다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「프리지어★도그우드, 말해라~!」"
  - if: d.reject === 1
    lines:
      - "%CHARA%의 지팡이를 쥔 손이 확연히 떨렸다"
      - "눈썹을 모으고 헛기침을 한 %CHARA%은(는) 다시 마법 지팡이를 휘두른다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「프리지어★도그우드, 말해라~!」"
  - if: d.reject === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「말하라면 말해!!!」"
      - "목소리가 단번에 커진다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%!!! 주인한테 소원을 말하라구!!!!!」"


# クラシック級第1週終了
we_new_turn:
  title: "새로운 여정의 엉겅퀴"
  lines:
    - "새해가 밝았으니 %CHARA%의 클래식급 레이스 계획도 세워야 한다"
    -
    - "신체 능력, 각질, 거리 적성을 종합하면……"
    - "%CHARA%에게 가장 잘 맞는 노선은 아마——"
    - acc: 1
      content: "「티아라 3관.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「티아라 3관……? 그게 뭔데?」"
    - "트레이너실에서 눈앞의 자그마한 %UMA%가 어리둥절한 표정을 짓는다"
    -
    - "「여러 마법 재료의 이름을 딴 세 레이스를 통틀어 부르는 말이야.」"
    - "천천히 말한 뒤 잠시 멈춘다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「! %CALLNAME%, 말 끊지 말고 빨리 계속해!」"
    - "%CHARA%은(는) 단번에 관심을 보였다"
    -
    - "「『벚꽃상』, 『오크스』, 『추화상』」"
    - "「봄의 왕벚나무, 여름의 잉글리시 오크, 가을의 온갖 꽃에 대응하지」"
    - "「계절마다 다른 마법의 힘을 전부 모으면——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아, 좋아, 아주 좋아, %CALLNAME%! 그걸로 결정이야!」"
    - "%YOU%의 말이 끝나기도 전에 끼어든다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피는 티아라 3관을 목표로 『마법 3관』을 차지하겠어!」"
    -
    - "표현도 조금 기묘하고, %CHARA%이(가) 이 세 레이스의 난이도와 가치를 이해하는지는 전혀 알 수 없다"
    - "하지만 아무튼, 적어도 %CHARA%에게 뚜렷한 목표는 생겼다……"


# 好感+20、恋慕+1、やる気+1、スキルPt+50
ws_valentine_c:
  title: "멈출 수 없는 초콜릿?!"
  lines:
    - "오늘은 일 년에 한 번 돌아오는 발렌타인 데이다. 트레센 학원의 전통에 맞춰 %YOU%은(는) 초콜릿 상자를 준비했다"
    - acc: 1
      content: "「초콜릿은……한 명씩 모두에게 나눠 줘야 할까, 한 사람에게 줘야 할까……」"
    -
    - "트레센 학원의 관례에 따라 %YOU%은(는) 올해는 어떻게 할지 고민한다"
    - "길을 걷다가 갑자기 %CHARA%을(를) 발견한다"
    -
    - acc: 1
      content: "(인사해 두자.)"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%! 마침 찾고 있었어.」"
    - "결국 %CHARA% 쪽에서 먼저 말을 걸어왔다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 사람들, 정말! 온종일 마법 같은 건 없다는 말만 하고」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그냥 자기가 마법을 배울 재능이 없는 것뿐이면서!」"
    - "곧바로 불평을 시작한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하아……! 덕분에 밤새 잠도 못 자고 마법 연습도 못 했어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%, 지금 당장 디저트가 먹고 싶어! 빨리 디저트 가게 찾아~!!」"
    - "결국 고집 부리는 이야기로 돌아왔다……"
    -
    - "%YOU%이(가) 아침부터 식은땀을 살짝 흘리고 있자, %CHARA%이(가) 갑자기 뭔가를 알아차린다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……잠깐, %CALLNAME%, 손에 든 거 디저트지?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「계속 들고만 있고 먹지도 않다니……혹시 숨겨 둔 마법 디저트야!?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마침 잘됐어. 아침은 %MAJO%가 마력을 보충하는 시간이야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%, 이 디저트는 주인이 먹어도 괜찮지?」"
    - "%CHARA%은(는) 반짝이는 눈으로 %YOU%을(를) 본다"
    -
    - acc: 1
      content: "「그건……좀……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! %CALLNAME%이(가) 그렇게 쉽게 양보할 리 없다는 건 알고 있었어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어, 싫어! 이 디저트는 꼭 먹을 거야!!」"
    - "%CHARA%은(는) %YOU% 앞에서 계속 졸라 댄다"
    -
    - acc: 1
      content: "「그럼……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아! 역시 허락했구나! 역시 내 %CALLNAME%이야!」"
    -
     - "……사실 그런 뜻은 아니었는데, %CHARA%은(는) %YOU%이(가) 설명하기도 전에 %YOU%의 손에서 초콜릿을 빼앗는다"
    - "그러고는 거리낌 없이 %YOU%이(가) 준비한 예쁜 상자를 열어 버린다……"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 디저트, 맛있는 디저트~」"
    - "%CHARA%은(는) 콧노래를 부르며 초콜릿 포장을 벗긴다……"
    -
    - acc: 1
      content: "「오늘은 발렌타인 데이야……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맞아! 오늘은 전설의, 일 년 중 사랑의 마력이 가장 충만한 순간이야!」"
    - "%CHARA%은(는) 초콜릿 한 알을 아무렇게나 입에 넣는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그랜마가 그랬어. 이때 상대에게 『마력이 가득한 음식』을 먹이면 강력한 사랑의 마법을 쓸 수 있어서, 두 사람은 다시는 헤어지지 않게 된대!」"
    - "%CHARA%은(는) %YOU%의 초콜릿을 와작와작 씹고 있다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「주방만 빌릴 수 있으면 나도 분명 그런 음식을 만들 수 있어!」"
    - "%CHARA%은(는) 순식간에 %YOU%의 초콜릿을 다 먹어 버렸다"
    - acc: 1
      content: "「그럼 스윕은 어떤 음식을 만들고 싶어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 물어볼 것도 없지, 당연히——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！！」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사……%CALLNAME%!!!!!」"
    - "뭔가 떠올랐는지 양 볼이 새빨개진다"
    -
    - "%CHARA%은(는) 이를 드러내며 %YOU%을(를) 본다"
    - "그러고는 황급히 지팡이를 꺼내 %YOU%에게 휘두른다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「포피★아스포델, 전부 잊어버려!!」"
    -
    - acc: 1
      content: "「뭐!?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어때? 방금 있었던 일은 전부 잊었지, %CALLNAME%!」"
    - "%CHARA%은(는) 긴장과 걱정이 뒤섞인 눈으로 %YOU%을(를) 본다"
    -
    - acc: 1
      content: "「아……응……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하——하아! 정말!」"
    - "조금 안심한 모양이다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음부터는 발렌타인 데이에 주인한테 초콜릿을 잔뜩 가져오지 마. 알겠어!!」"
    -
    - acc: 1
      content: "「알겠어???」"
    - "어째서인지 아직도 빨간 %CHARA%의 양 볼을 보며 %YOU%은(는) 그저 장단을 맞출 뿐이었다"
    -
    - "그렇게 %YOU%의 발렌타인 선물은 아침부터 전부 %CHARA%의 배 속으로 사라져 버렸다……"

rs_oka_sho:
  title: "벚꽃상 전·온화한 벚꽃"
  lines:
    - "「벚꽃상」, 티아라 3관의 첫 번째 경기. 벚꽃이 피는 계절에 열리는 G1 마일 레이스다"
    - "동시에 %CHARA%이(가) 클래식급에 올라 처음으로 진지하게 임하는 레이스이기도 하다"
    -
    - "%CHARA%의 마음이 갑자기 바뀌지 않기를 바라며 일찌감치 %SEX%를 준비실로 데려왔다"
    -
    - "%CHARA%은(는) 준비실 책상에 모자를 올려놓고, 지팡이를 휘두르며 입속으로 무언가를 외우고 있다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「체리 블로섬★아잘레아, 벚꽃의 손길을 받아라!」"
    - "그렇게 말한 뒤, %CHARA%은(는) 책상 위의 마법 모자를 지팡이로 똑바로 가리킨다"
    -
    - "「정말……모자에 그런 걸 해야 해?」"
    - "%YOU%은(는) 조용히 묻는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당연하지. 그랜마가 준 모자도 기분이 나빠질 수 있거든!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「토라지기 시작하면 그랜마만 달랠 수 있게 되면 곤란하잖아!」"
    -
    - 「……」
    - "%YOU%은(는) 말없이 옆에 서서 다음 지시를 기다린다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……%CALLNAME%, 왜 그렇게 죽은 것 같은 표정이야?」"
    - "결국 지목당했다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「혹시——」"
    - "또 뭔가 떠올랐나 보다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%도 마법 부여가 부족한 거야!?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「체리 블로섬★크라운 임페리얼, 벚꽃의 손길을 받아라!」"
    - "갑자기 표적을 바꾼 %CHARA%은(는) 지팡이를 휘둘러 %YOU%을(를) 똑바로 가리킨다"
    -
    - "「아아……힘이……차오른다……!」"
    - "마법에 걸린 것처럼 반응한다"
    - "「골인할 때 더 크게 응원할 수 있겠어!!」"
    -
    - "어딘가 너무 가벼운 것 같기도 하다"
    - "하지만 아무튼 %CHARA%에게 출전할 의욕이 있다는 게 무엇보다 좋다"
    -
    - "%YOU%은(는) 모자를 쓴 %CHARA%이(가) 대열 맨 뒤에서 천천히 게이트로 들어가는 모습을 지켜본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "상태를 얻었다: "
        - content: "[상냥한 벚꽃의 마법]"
          title: "침착해졌다! ……아마도? 지능이 조금 올랐다……?"
          # 賢さ+5%


re_oka_sho_win:
  title: "벚꽃상 후·벚꽃의 마력"
  lines:
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: "「……여기는 어디야?」"
    - fontStyle: italic
      content: "어느새 레이스는 조용히 끝나 있었다"
    - fontStyle: italic
      content: "%CHARA%이(가) 정신을 차려 보니, %SEX%가 와 본 적 없는 곳에 있었다"
    - fontStyle: italic
      content: "주변에는 벚꽃 향기가 감돌고, 벚나무들이 둘러서 있다"
    -
    - fontStyle: italic
      content: "%CHARA%은(는) 호기심과 의문이 섞인 눈으로 조금 앞쪽의 하늘을 바라본다"
    - fontStyle: italic
      content: "그 순간——"
    -
    - fontStyle: italic
      content: "%SEX%가 바라보던 하늘에 갑자기 꽃잎이 흩날리더니, 마법사 한 명이 나타난다——"
    - fontStyle: italic
      content: "그녀는 벚꽃 빛깔 옷을 입고 하늘에서 천천히 내려온다"
    - fontStyle: italic
      content: "등장하는 것만으로도 온화한 인상을 준다"
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          color: %COLOR%
          content: "「! 너는!?」"
    - fontStyle: italic
      content: "%CHARA%은(는) 놀랍고 기쁜 눈으로 눈앞의 마법사를 본다"
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「나는……벚꽃 마법의 힘을 지닌 자……」"
    - fontStyle: italic
      color: rgba(213, 126, 206, 1)
      content: "땅에 내려선 뒤, 다정한 말투로 %CHARA%에게 말한다"
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「그대가 사악한 마법사들을 물리쳐 준 덕분에 벚꽃 마법의 힘은 지켜졌어요……」"
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「이 영광과 힘은 틀림없이 그대의 것」"
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「이제 전설의 벚꽃 마법의 힘을 그대에게 전할게요」"
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「아아, 작은 마법사여. 그대야말로 『마법』의 미래——」"
    -
    - fontStyle: italic
      content: "미래——"
    - fontStyle: italic
      content: "축복하는 목소리가 귓가에 울리는 듯했다——"
    -
    - divider: true
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 흥~!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피! 오늘부터!! 『벚꽃 마법의 힘』을!! 거머쥔 몸이야!!!」"
    -
    - "벚꽃상에서 훌륭하게 우승한 %CHARA%은(는) 갑자기 의기양양하게 관객을 향해 지팡이를 치켜들고 무언가 외친다"
    - "옆에서 %SEX%가 받으려 하지 않는 우승기를 대신 들고 식은땀을 흘리는 직원 같은 건 전혀 신경 쓰지 않는다……"


re_oka_sho_lose:
  title: "벚꽃상 후·마법의 또 다른 이면"
  lines:
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          color: %COLOR%
          content: "「……여기는 어디야?」"
    - fontStyle: italic
      content: "어느새 레이스는 조용히 끝나 있었다"
    - fontStyle: italic
      content: "%CHARA%이(가) 정신을 차려 보니, %SEX%가 와 본 적 없는 곳에 있었다"
    - fontStyle: italic
      content: "주변에는 떨어진 꽃잎이 깔려 있고, 벚나무들이 둘러서 있다"
    -
    - fontStyle: italic
      content: "조금 앞쪽에는 벚꽃 빛깔 옷을 입은 온화하고 조용한 마법사가 엎드려 있다"
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「작은 마법사여……드디어 와 주었군요……」"
    - fontStyle: italic
      content: "%CHARA%이(가) 온 것을 알아차린 마법사는 힘을 짜내 천천히 고개를 들고 %CHARA%을(를) 본다"
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          color: %COLOR%
          content: "「너는……누구야?」"
    - fontStyle: italic
      content: "%CHARA%은(는) 눈앞의 쇠약해진 마법사를 조심스럽게 본다"
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「나는……한때 벚꽃 마법의 힘을 지녔던 자……」"
    - fontStyle: italic
      content: "온화한 마법사는 가만히 숨을 고르며 천천히 말한다"
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「지금은 사악한 마법사에게 패해 그 힘을 잃었어요……」"
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「아아……내 목숨도……이 벚꽃처럼 얼마 남지 않았군요……」"
    - fontStyle: italic
      content: "숨이 끊어질 듯한 마법사는 다정하면서도 아쉬움이 묻어나는 말투로 계속 말한다"
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「벚꽃의 힘을 받고도 지켜 내지 못한 대가일지도 모르겠어요……」"
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「작은 마법사여, 그대가 이 힘을 받는다면 어떻게 될까요……」"
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「그대가 걸어 준 덧없는 벚꽃의 마법이 흩어져 보호를 잃는다면——」"
    -
    - content:
        - color: rgba(213, 126, 206, 1)
          fontWeight: bold
          content: "벚꽃 같은 마법사"
        - fontStyle: italic
          color: rgba(213, 126, 206, 1)
          content: "「그대의 %CALLNAME%에게는——」"
    -
    - divider: true
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    - "무슨 생각을 했는지 눈앞의 자그마한 %UMA%의 얼굴이 단숨에 창백해진다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫!다!구!」"
    - "갑자기 엉뚱한 말을 한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「벚꽃의 마법도 재료도 주인은 이제 필요 없어!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 빨리 해주 마법을 준비해야 해!!!」"
    - "어째서인지 레이스에서 패배한 %CHARA%은(는) 다급히 %YOU%을(를) 이끌고 트레센 학원으로 돌아갔다"
    - "그 뒤로 줄곧 %YOU%을(를) 향해 갖가지 기묘한 주문을 외웠다……"


rs_yush_him:
  title: "오크스 전·두려움 없는 참나뭇잎"
  lines:
    - "오크스. 생명력이 넘치는 날에 열리는 중거리 G1이다"
    - "동시에 티아라 3관 중 가장 주목받고 무게감 있는 레이스이기도 하다"
    -
    - "이런 레이스를 앞두고 %CHARA%의 알 수 없는 기분에 계속 휘둘리느니"
    - "먼저 움직이는 편이 낫다——"
    -
    - "%CHARA%의 마법 모자를 잠시 맡아 둔 %YOU%은(는) 모자를 준비실 책상 위에 가지런히 놓는다"


rs_yh_select:
  - if: d.decorate < 3
    acc: 1
    content: "장식을 더한다"
    lines:
      - "싱싱한 참나뭇잎을 몇 장 찾아 %CHARA%의 모자에 장식을 단다"
      # リプレイ
  - acc: 2
    content: "(이 정도면 됐겠지)"
    lines:
      - if: d.decorate < 3
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……? 이게 무슨 뜻이야, %CALLNAME%?」"
          - "나뭇잎으로 장식된 마법 모자를 보고 %CHARA%은(는) 조금 어리둥절해한다"
          - acc: 1
            content: "「이건……주인을 위해 준비한 마법 부여인데……」"
          - "%YOU%은(는) 조심스럽게 답한다"
          - acc: 1
            content: "「참나무 마법 재료의 힘을 쓰면 스윕의 힘이 더 강해질지도 몰라——」"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……뭐야! 마법 재료를 그렇게 쓰는 거야?」"
          - "조금 놀라며 %YOU%의 설명을 끊는다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「오크★헬리오트로프! 이제 됐어!」"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「주인이 이 재료는 직접 모아서 전부 잘 보관할게!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「돌아가면 이걸로 만든 마법약을 %CALLNAME%에게 한 병 줄게. %CALLNAME%이(가) 주인을 신경 써 준 상이야!」"
          -
          - "이야기의 결론이 완전히 엇나가 버렸다……"
          -
          - "그 뒤 %YOU%은(는) 관중석으로 가서 모자를 쓴 %CHARA%이(가) 대열 맨 뒤에서 천천히 게이트로 들어가는 모습을 지켜본다"

      - if: d.decorate === 3
        lines:
          - "결과적으로 지금 이런 모습이 되었다"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「…… 」
          - "거의 나뭇잎 모자가 된 마법 모자를 보고 스윕 토쇼는 어째서인지 입을 다문다"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……이게 대체 무슨 뜻이야, 사역마?」"
          - "말투가 유난히 무거워졌다……"
          -
          - acc: 1
            content: "「아, 그건……」"
          - "조금 말문이 막힌다"
          - "「신나서 하다 보니 이렇게 돼서……」"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「오크★버베인! 빨리 주인의 모자 정리해, 사역마!!」"
          - "강하게 명령한다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「안 그러면——」"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이 나뭇잎을 전부 마법약으로 만들어서 사역마한테 먹일 거야!!!」"
          -
          - "%CHARA%의 협박에 %YOU%은(는) 곧바로 정리하기 시작했다……"
          -
          - "그 뒤 %YOU%은(는) 관중석으로 가서 모자를 쓴 %CHARA%이(가) 대열 맨 뒤에서 천천히 게이트로 들어가는 모습을 지켜본다"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "상태를 얻었다: "
          - content: "[용감한 참나무의 마법]"
            title: "대담해졌다! ……아마도? 파워가 조금 올랐다……?"
            # パワー+5%


re_yush_him_win:
  title: "오크스 후·제멋대로인 참나뭇잎"
  lines:
    - "%CHARA%은(는) 오크스에서 훌륭하게 우승했다"
    - "즉, %SEX%는 티아라 3관 도전자들 가운데서도 뛰어난 실력을 증명하고, 이른바 「참나무 마법의 힘」을 손에 넣었다"
    -
    - "그런 %UMA%의 인터뷰 모습은——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『왜 그렇게 달렸냐고』? 흐흥~ 보여 주려면 당연히 그 마법을 써야지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『이겨서 기쁘냐고』? 당연해! 천재 %MOHOSHOJO% 스위피는 이 마법 경기를 위해 쭉 준비해 왔으니까!」"
    - "의욕적으로 대답하고 있다"
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『그 달리기에 어떤 의미가 있냐고』? ……천재 %MOHOSHOJO%인 내가 그 마법을 멋있다고 생각했으니까.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『여기 서서 기쁘냐고』? ……기뻐. 천재 %MOHOSHOJO%인 나는 잔뜩 연습했으니까.」"
    - "비슷한 질문에는 되도록 같은 표현으로 답한다"
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『그 달리기의 장점은』……? ……예쁘다고 생각해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……『그렇게 달리면 재밌냐고』……? ……아마도. 계속 준비해 왔으니까.」"
    - "또 거의 같은 질문이다. 다만 말투는 점점 식어 간다"
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……싫어.」"
    - "인터뷰 도중 갑자기 엉뚱한 말을 한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어, 절대 싫어! 너희 질문은 왜 하나도 『마법』이랑 상관없어!?」"
    - "일부러 조금 화난 기색을 드러낸다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이긴 %UMA%가 제대로 마법 모자도 쓰고 지팡이도 들고 있잖아?!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「평범하고 똑같은 질문만 앵무새처럼 전부 대답하는 건 싫어!!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! 이렇게 재미없을 바에는 돌아가서 %CALLNAME%한테 마법약을 만들어 주는 게 낫겠어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「질문하고 싶으면 간단히! 직접적으로! 빙빙 돌리지 마!!」"
    - "%CHARA%의 직설적인 요구에 기자 몇 명은 확실히 조금 자제했다"
    -
    - "그 뒤 %CHARA%은(는) %SEX% 나름의 방식으로 레이스 후 절차를 무사히 마쳤다"
    - "그리고 돌아와서는 마음이 쓰였는지 %YOU%에게 (참나뭇잎으로 만든 건 아닌) 진한 「마법약」을 만들어 주었다……"


re_yush_him_lose:
  title: "오크스 후·안 마셔도 될 좋은 약은 입에 쓰다"
  lines:
    - "%CHARA%은(는) 안타깝게도 오크스에서 패배했다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어, 싫어! 왜, 왜냐구!」"
    - "지하 통로를 나서며 패배에 대한 불만을 뚜렷이 드러낸다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아냐, 아냐! 천재 %MOHOSHOJO% 스위피가 이렇게 질 리 없어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%! 너, 대체 어떻게 된 거야!??」"
    -
    - "이 초조함에 %YOU%이(가) 해야 할 대답은——"
    - acc: 1
      content: "「미안해……내 탓이야」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「말해! %CALLNAME%, 네 탓이면 어떻게 보상할 거야?!!」"
        - "%YOU%의 옆을 걷던 %CHARA%이(가) 바짝 다가와 다급한 눈으로 %YOU%을(를) 본다"
        -
        - acc: 1
          content: "「어떤 마법약이든 마실게……」"
          lines:
            - "%YOU%은(는) 그렇게 사과할 뿐이었다"
            -
            - "그런데 %YOU%의 말이 끝나자 %CHARA%은(는) 어째서인지 걸음을 멈춘다"
            - "그러고는 몸을 완전히 돌려 다시 %YOU%을(를) 본다"
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「……」
            - "그렇게 서로 바라보며 묘하고 짧은 정적에 빠진다"
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「……흐음. 그래. 몰랐네.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「%CALLNAME%, 정말 마시고 싶었던 거구나.」"
            - "이상한 생물을 보는 듯한 눈빛이다……"
            -
            - "설마……원래는 「%YOU%에게 마법약을 먹일」 생각이 없었던 건가……!?"
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그럼 얘기가 빠르겠네. 주인이 돌아가면 %CALLNAME%한테 마법약을 만들어 줄게.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「도망가면 안 돼!!」"
            -
            - "돌아온 뒤, %YOU%은(는) 눈물을 참으며 (참나뭇잎으로 만든 건 아닌) 진한 「마법약」을 마셨다……"


# スピード&賢さ+5
ws_summer_start_c:
  title: "여름 합숙 시작·골칫거리"
  lines:
    - "여름이 조용히 찾아왔다"
    - "아침부터 태양이 조금씩 빛을 흩뿌리며 세상의 온도를 높여 간다"
    -
    - "이런 날에는 더위를 타는 아이도, 『여름의 여자』라 불리는 우마%UMA%도"
    - "트레센 학원의 학생이라면 누구나 학원이 마련한 최고 수준의 시설을 이용할 기회가 있다"
    -
    - "필요한 건——여름 합숙에 참가하는 것."
    -
    - "%CHARA%도 학원의 좋은 시설에서 연습하게 해 주기 위해"
    - "%SEX%와 함께 탈것을 타고 여름 합숙 장소로 갈 계획을 세운다——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「버스? 싫어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「차? 전기차? 그런 게 뭐가 좋아!?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜 빗자루는 못 타는데!!??」"
    - "결국 합숙이 시작되기도 전에 난관에 부딪혔다……"
    -
    - acc: 1
      content: "「너무 눈에 띄면 소란이 생겨……」"
      lines:
        - "%YOU%은(는) 설득을 시도할 뿐이었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 어떡해! %CALLNAME%——!! 다른 방법은 없어!???」"
    - "트레이너실에서 %CHARA%은(는) 눈을 굴리며 다급히 무언가를 찾는다"
    - "접이식 자전거, 스포츠용 스케이트보드, 강아지 봉제 인형——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「! 잠깐!」"
    - "시선이 갑자기 돌아와 %YOU%에게 향한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마법사에게 제일 좋은 탈것이 눈앞에 있잖아?」"
    - "%CHARA%의 눈이 빛난다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이랴, 이랴!」"
    - "%YOU%의 등에 올라타 양발로 등을 가볍게 찬다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「빨리, 빨리, 더 빨리——!!!」"
    -
    - "길가에서 쏟아지는 미묘한 시선은 무시한다"
    - "아무튼 적어도 %CHARA%을(를) 합숙 장소까지 제대로 데려올 수는 있었다……"

# 夏合宿終了の対応トリガー時刻。夏合宿に参加しなかった場合も、この節点または対応ターン終了で発火
# パワー&根性+5
we_summer_end_c:
  title: "마녀의 밤 예고"
  lines:
    - if: era.get('cflag:0:位置') === era.get('cflag:44:位置')
      lines:
        - "어느새 트레센으로 돌아갈 날이 되었다"
        - "분주한 여름 합숙을 마친 %YOU%은(는) 짐을 챙겨 담당 우마%UMA%들과 함께 트레센 학원으로 돌아왔다"
        - "그리고 오랫동안 닫혀 있던 트레이너실 문을 연다——"
    - if: era.get('cflag:0:位置') !== era.get('cflag:44:位置')
      lines:
        - "어느새 여름 합숙에 갔던 우마%UMA%들이 학원으로 돌아와 있었다"
        - "또 바쁜 하루를 마치고 트레이닝장에서 돌아온 %YOU%은(는) 평소처럼 사무실 쪽으로 걷는다"
        - "그리고 트레이너실 문을 살며시 연다——"

    - "평소와 거의 다르지 않아 익숙하고 마음이 놓인다"
    - "저녁 햇살이 커튼 틈과 창문을 지나 트레이너실의 의자와 책상을 비추고 있다"
    -
    - "그리고 책상 위, 아주 소박한데도 어째서인지 %YOU%의 시선을 강하게 끄는 편지 한 통을 비춘다."
    -
    - "마법 괴도의 예고장일까, 마법 학원의 초대장일까?"
    - "아무튼 이 편지는 어찌 된 일인지 트레이너실에 들어와 조용히 %YOU%의 책상 위에 놓여 있다"
    -
    - "집어 들어 살펴보자"
    - "그렇게 생각하는데 %CHARA%이(가) 트레이너실로 따라 들어온다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아, %CALLNAME%——」"
    - "%YOU%은(는) 책상을 조금 정리하고 편지를 집어 든다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그게 뭐야? 편지?」"
    - "%YOU%은(는) 봉투를 들어 글씨가 있는 면을 %CHARA%에게 보여 준다"
    -
    - "거기에는 이렇게 적혀 있다:"
    - "사랑하는 손녀에게"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「! 그랜마!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! 뭐라고 쓰여 있어, %CALLNAME%! 빨리 읽어 줘!」"
    -
    - "왜 직접 읽지 않고 남에게 읽어 달라고 해야 하는 걸까……"
    - "그렇게 생각하며 가까이 다가온 작은 머리 앞에서 천천히 봉투를 연다——"
    -
    - "편지에 적힌 짧고 단정한 글을 읽어 준다:"
    -
    - content: "손녀야. 요즘 잘 지내니?"
      fontStyle: italic
      align: center
    - content: "어느새 온갖 꽃이 피는 계절이 되어 할머니 정원의 꽃도 한층 무성해진 것 같구나"
      fontStyle: italic
      align: center
    - content: "그러다 몇 달 전 너와 잠깐 이야기를 나눴던 일이 생각났단다"
      fontStyle: italic
      align: center
    - content: "너만의 %CALLNAME%을(를) 얻었을 뿐 아니라 『달리기의 마법』이라는 대단한 마법도 익혔다고 했지"
      fontStyle: italic
      align: center
    - content: "그 뒤로 시간이 조금 더 흘렀지만, 괜찮다면"
      fontStyle: italic
      align: center
    - content: "그때 내가 너에게 말했던 『마녀의 밤』 약속을 기억해 줬으면 좋겠구나"
      fontStyle: italic
      align: center
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！！」
    - "귀가 쫑긋 서고 동공이 눈에 띄게 좁아진다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%!! 다음 레이스는 언제야!? 빨리 말해!!」"
    - "다급히 %YOU%에게 묻는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「적어도……『마녀의 밤』 전에는 먼저……!」"
    - "무언가를 중얼거린다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "상태를 얻었다: "
        - content: "[대마법사의 약속]"
          title: "아무래도 중요한 약속인 모양이다. 약속을 지키기 위해 의욕이 올라 있다."


rs_shuk_sho:
  title: "추화상 전·기대의 아네모네"
  lines:
    - "추화상. 온갖 꽃이 피는 날에 열리는 마일 G1이다"
    - "동시에 원래 계획대로라면 %CHARA%이(가) 클래식급에서 출전할 마지막 G1이기도 하다"
    -
    - "어째서인지 전날 %CHARA%에게 %YOU% 혼자 먼저 경기장에 오라는 명령을 받았다"
    - "준비실에 들어간 %YOU%은(는) 바로 그곳에 서 있는 %CHARA%을(를) 발견한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『마법 3관』의 마지막……『추화상』……」"
    - "눈앞의 갈색 털을 지닌 자그마한 %UMA%는 무언가 생각하며 혼잣말을 시작한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 마법까지 손에 넣으면……『마녀의 밤』에도 더 희망이……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러고 나서 천재 %MOHOSHOJO% 스위피가 『마녀의 밤』에 멋지게 마법을 쓰면……」"
    - "말할수록 들떠 점점 웃음이 번진다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그다음엔 그랜마가 직접 인정해 줄 거야. 천재 %MOHOSHOJO%인 내가 어엿한 대——!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……! 왜 주인의 혼잣말을 엿듣고 있어!」"
    - "바로 곁에 있는 %YOU%을(를) 보고 %CHARA%은(는) 눈에 띄게 놀란다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너……너는 할 일도 없어, %CALLNAME%!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『주인 일은 %CALLNAME%의 일이기도 하니까 알아야지』……?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어, 싫어! 마법 경기 전에 주인을 방해하는 건 용서받지 못할 죄야! 아네모네★주니퍼! %CALLNAME%, 물러가라!!」"
    -
    - "힘을 주지는 않고 천천히 %YOU%을(를) 준비실 밖으로 밀어낸다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음부터 %CALLNAME%이(가) 인사도 없이 주인 앞에 서는 건 금지야!!!」"
    -
    - "『마녀의 밤』이 정확히 뭘 뜻하는지는 아직 모르지만, %CHARA%의 출전 의욕이 높다는 건 분명하다"
    - "지금 %YOU%은(는) 관중석에서 마법 모자를 쓴 %CHARA%이(가) 대열 맨 뒤에서 삼 분쯤 주문을 외우다가 천천히 게이트로 들어가는 모습을 지켜본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "상태를 얻었다: "
        - content: "[기대의 가을 마법]"
          title: "만개한 꽃들과 그에 걸맞은 수확……? 스피드가 오른 모양이다."
        # スピード+5%


re_shuk_sho_win:
  title: "추화상 후·미래를 바라는 마법"
  lines:
    - "높아진 의욕과 오랜 노력 덕분에 %CHARA%은(는) 『마법 3관』의 마지막 관문에서 멋지게 우승했다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이러면……『마녀의 밤』도……」"
    - "지금 코스를 나온 %CHARA%은(는) 고개를 숙여 무언가 생각하며 희미하게 웃는 듯하다"
    -
    - "하지만 곧 곁의 %YOU%을(를) 곁눈질로 깔보듯 힐끗 보고는 고개를 든다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! 아무 말도 안 했어! 이번에는 %CALLNAME%한테 안 들려줄 거야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가을의 마법을 배우기에는 %CALLNAME%은(는) 아직 멀었어!!」"
    -
    - "아무튼 콧노래를 부르며 걷는 %CHARA%은(는) 『마법 3관』의 마지막 레이스에서 이긴 뒤 정말 기뻐 보인다"
    - "『마녀의 밤』에 또 한 걸음 가까워진 것이겠지——"


re_shuk_sho_lose:
  title: "추화상 후·미지를 향하는 마법"
  lines:
    - "높아진 의욕과 오랜 노력에도 불구하고, 일이 엇갈려 %CHARA%은(는) 『마법 3관』의 마지막 관문에서 우승하지 못했다"
    - "왜 안 됐는지 분해하는 자그마한 %UMA%는 지금 %YOU%와(과) 나란히 걸으며 양손 손가락으로 관자놀이를 누르고 있다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으음……음! 왜……왜……!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이렇게 했는데도, 아직 못 하다니……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「설마 난 정말 그냥……」"
    - "어째서인지 말이 잠시 끊기며 시선이 조금 내려간다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아냐! 아냐! 그럴 리 없어!」"
    - "스스로 말을 끊고 곧바로 마음을 다잡는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! 어차피……아직 『마녀의 밤』은 아니니까……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번에 잘 안 됐어도……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그날 할 수 있으면……그러면……」"
    - "%CHARA%은(는) 미묘하게 무언가를 중얼거린다"
    -
    - "패배해도 『마녀의 밤』은 계속 다가오는 모양이다——"
    - "%YOU%은(는) 어째서인지 말수가 조금 줄어 그저 %YOU%와(과) 함께 말없이 학원으로 돌아가는 자그마한 %UMA%를 바라본다"


# 発火条件：秋華賞の翌週
# 根性&スタミナ+5
ws_truth:
  title: "마녀의 밤의 진상"
  lines:
    - "그랜마에게서 편지를 받은 뒤로 %CHARA%은(는) 눈에 띄게 적극적으로 트레이닝에 임하고 레이스에도 열을 올렸다"
    - "분명한 의도가 있어 보인다"
    -
    - "그리고 %CHARA%이(가) 줄곧 입에 올리는, 그 의도 한가운데 있는 말은——"
    - "역시 『마녀의 밤』일 것이다"
    -
    - "지금까지도 여러 방법으로 『마녀의 밤』의 진짜 의미를 추측해 왔다"
    - "하지만 간접적으로 정보를 모으는 일, 특히 %CHARA%을(를) 상대로 정보를 모으기는 역시 너무 어렵다"
    -
    - "아마……직접 묻는 편이 더 확실할 것이다"
    - acc: 1
      content: "「『마녀의 밤』이 대체 뭐야……?」"
    - "%CHARA%이(가) 연습 성과에 기분이 조금 풀렸을 때 조심스럽게 질문을 꺼낸다"
    -
    - "입 밖에 내서는 안 되는 비밀일 거라 생각해 다른 단서나 조금 얻을 셈이었는데——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐야, %CALLNAME%. 이것도 모르고 저것도 모르네. 그러니까 주인 마법을 엿보는 걸 좋아하지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~! %CALLNAME%이(가) 그렇게 모른다면 주인이 가르쳐 줄게!」"
    - "뜻밖에도 순조로웠다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『마녀의 밤』은 말하자면 대마법사들이 만나는 밤이야」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그날에는 전 세계의 마법사가 모여……」"
    - "천천히 이야기한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그날 그랜마가 직접 『엘리자베스 여왕배』에 와서 내 마법을 보는 거야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어때? %CALLNAME%, 놀랐지!?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네가 말한 『달리기의 마법』을 익혀서 어엿한 대%MAJO%가 될 수 있다는 걸 그랜마한테 보여 줄 절호의 기회야!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 그랜마가 그랬어. 내가 레이스에서 이기면 밤에 교문에서 기다려 주겠대!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 그랜마가 역시 천재 %MOHOSHOJO% 스위피라고 말해 줄 때……」"
    - "말을 하며 갈색 털의 자그마한 %UMA%는 다시 미래의 상상에 잠긴다"
    -
    - "이렇게 되니 %CHARA%의 목표는 아주 뚜렷해졌다"
    - "클래식급에 엘리자베스 여왕배에서 우승하는 것……"
    -
    - "여러 걱정은 있지만 %CHARA%이(가) 하고 싶어 한다면 분명 해낼 수 있겠지"
    - "%YOU%은(는) 그렇게 생각할 뿐이었다"


rs_eliz_cup_c:
  title: "엘리자베스 여왕배 전·갈망의 마법"
  lines:
    - "오랜 시간이 흘렀다. 마법의 인도인지, 아니면 보이지 않는 필연인지"
    - "%YOU%와(과) %CHARA%의 트윙클 시리즈 여정은 어느새 시니어급의 영역에 접어들려 한다"
    - "그리고 시니어급의 영역에 발을 들인다는 건 대체 무엇을 뜻할까——"
    -
    - "엘리자베스 여왕배. 시니어급의 중거리 G1이다"
    -
    - "『티아라 3관』……혹은 『마법 3관』에 비하면 엘리자베스 여왕배는 결코 『완벽하게 공평한 레이스』가 아니다"
    - "즉, 이 레이스에는 %CHARA%보다 훨씬 경력이 많고, 티아라 3관을 모두 차지한 적도 있으며, 시니어급에서 치열한 경쟁을 거듭해 온 선배들이 출전한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「괜찮아, 괜찮아. 천재 %MOHOSHOJO% 스위피라면 뭐든 할 수 있어.」"
    - "%YOU%와(과) 함께 경기장에 온 %CHARA%은(는) 휴게실을 왔다 갔다 할 뿐이다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%!」"
    - "갑자기 %YOU%을(를) 부른다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……있지, 만약 주인이 지면 어떻게 할 거야?」"
    -
    - "마음속에는 %SEX%와 같은 불안이 있을지도 모른다"
    - "하지만 아무튼, 역시 이렇게 대답해야 한다——"
    - - acc: 1
        content: "「스윕은 누구에게도 지지 않아」"
    - "짧고 분명하게 대답한다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……흥. 그거면 돼.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번에야말로, 반드시……」"
    - "혼잣말을 한다"
    -
    - "얼마 뒤 %YOU%은(는) 관중석으로 간다"
    - "조금 앞에서 %CHARA%은(는) 마법 모자를 쓰고 지팡이를 꽂은 채 대열 맨 뒤에서 계속 주문을 외운다"
    - "누군가 재촉하자 %CHARA%은(는) 잠깐 멈췄다가 천천히 게이트로 향한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "상태를 얻었다: "
        - content: "[갈망하는 기적의 마법]"
          title: "기적을 일으켜 인정받고 싶다. 근성이 올랐을지도 모른다."
          # 根性+5%


re_eliz_cup_win_c:
  title: "엘리자베스 여왕배 후·마녀의 밤의 진상?"
  lines:
    - "%CHARA%은(는) 엘리자베스 여왕배에서 멋지게 우승했다"
    - "원래라면 이렇게 뛰어난 신성에게는 상당히 긴 인터뷰가 이어질 것이다"
    -
    - "하지만 %CHARA%은(는) 그런 것에 전혀 관심이 없다"
    -
    - "약속대로 경기장을 나서자마자 %CHARA%와(과) 함께 교문으로 왔다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잘 봐, %CALLNAME%! 대마녀를 처음 만나는 감동은 평생 못 잊을 거야!」"
    - "오는 내내 들떠서 온갖 선언을 늘어놓고 있다"
    -
    - "마침내 둘은 교문의 가로등 아래에 멈춰 서서 그랜마가 오기를 말없이 기다린다"
    -
    - "그저 조용히 기다린다."
    -
    - "오후"
    - "……아무도 오지 않는다"
    -
    - "해 질 녘"
    - "……아무도 오지 않는다"
    -
    - "땅거미가 질 무렵"
    - "……아무도 오지 않는다"
    -
    - "저녁"
    - ……
    -
    - "밤이 될 때까지"
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - "귀가 축 처지고, 모자챙은 날아갈 듯 바람에 팔랑거린다"
    -
    - "어스름한 불빛 아래, %YOU%은(는) 조금 떨어진 모퉁이에서 살짝 내민 양장 모자와 그곳에서 던져진 종이를 본 듯했다——"
    - "바람을 타고 날아온 종이가 갑자기 %YOU%의 시야를 가린다"
    - - acc: 1
        content: 「……！！」
    - "종이를 붙잡아 손에 올리니 단정한 글씨가 적혀 있다"
    -
    - content: "정말 미안하구나. 할머니가 오늘 일이 생겨 못 가는 바람에 입구에서 기다리게 했네"
      fontStyle: italic
      align: center
    - content: "『달리기의 마법』은 아주 대단하지. 하지만 그것만이 전부는 아닐지도 몰라"
      fontStyle: italic
      align: center
    - content: "앞으로도 『달리기의 마법』을 계속 좇아 주렴"
      fontStyle: italic
      align: center
    - content: "너의 %CALLNAME%와(과) 함께 계속 나아가렴——"
      fontStyle: italic
      align: center
    -
    - "%CHARA%의 초조한 시선 아래, %YOU%은(는) 적힌 말을 한 글자씩 읽어 준다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으으……! 무슨 뜻이야!!」"
    - "곧바로 초조해한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『달리기의 마법』……그런 뜻 아니었어!??」"
    - "고개를 숙이고 양손 손가락으로 관자놀이를 누른다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아냐, 아냐, 아냐!!!」"
    - "갑자기 고개를 들더니 지팡이를 꺼내 %YOU%을(를) 가리킨다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전부 네 탓이야, %CALLNAME%!!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네가 아무 말이나 하지 않았으면……난 분명 그랜마가 생각하는 『달리기의 마법』의 정수를 깨우쳤을 텐데!!!」"
    -
    - content: "부디 마음을 가라앉히렴"
      fontStyle: italic
      align: center
    - content: "%CALLNAME%이(가) 곁에 있는 한, 언제든"
      fontStyle: italic
      align: center
    - content: "너는 반드시 너만의"
      fontStyle: italic
      align: center
    - content: "『달리기의 마법』을 찾을 거야"
      fontStyle: italic
      align: center
    -
    - "종이에는 %YOU%이(가) 아직 다 읽지 못한 그런 말도 있었다"

re_eliz_cup_lose_c:
  title: "엘리자베스 여왕배 후·마녀의 밤의 자기모순"
  lines:
    - "%CHARA%은(는) 끝내 경력이 풍부한 선배들을 이기지 못하고 엘리자베스 여왕배에서 패했다"
    - "레이스가 끝난 뒤 %YOU%은(는) 출구에서 말없이 %CHARA%을(를) 기다린다"
    -
    - "얼마 지나지 않아 경기장에서 천천히 걸어 나오는 %CHARA%와(과) 마주친다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - "%CHARA%은(는) 멀리서 %YOU%을(를) 바라본다"
    - "%YOU%도 %SEX%의 조금 멍한 표정을 본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사——역——마——!!!!!」"
    - "갑자기 몸을 떨며 이를 꽉 악문다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥!!!!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흑……흐으으으으……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나 이제 %CALLNAME% 필요 없어!!!!!」"
    - "%CHARA%은(는) 팔로 눈을 가리고 달려가 %YOU%의 곁을 스쳐 지나간다——"
    -
    - "%YOU%은(는) 터널 너머로 작아지는 %SEX%의 뒷모습을 바라본다"
    -
    - "그날 오후, 트레이너실에서 기다리던 %YOU%은(는) 트레센 측으로부터 %CHARA%이(가) 직접 계약 해지를 요청했다는 통보를 받는다"
    -
    - "밤에 기분 전환을 하러 %SEX%가 가장 있을 법한 곳에 간 %YOU%은(는) 트레센 학원 입구에서 %CHARA%와(과) %SEX%의 할머니를 본다"
    -
    - acc: 1
      key: be
      content: "(조금만 더 지켜볼 수 있다면……)"
      lines:
        - "끝내 %CHARA%의 솔직한 바람을 이루어 주지 못하고, 결국 %YOU%이(가) %CHARA%와(과) 이 삼 년을 함께 달리지 못하더라도"
        - "이 순수하고 고집스러운 모습은 조금 더 보고 싶었다"
        -
        - "그렇게 생각하며 %YOU%은(는) 교문 안쪽에서 살며시 고개를 내밀고, 어스름한 불빛 아래 조금 떨어진 곳의 나이 든 우마무스메와 자그마한 %UMA%를 본다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「흑……흐으……」"
        - "%CHARA%은(는) 나이 든 우마무스메의 품에 꼭 안겨 있다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「미안해, 그랜마……나……못 했어……」"
        - "%CHARA%의 붉어진 눈가에서 눈물이 천천히 흘러내린다"
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: "할머니"
            - "「괜찮아, 괜찮단다」"
        - "할머니는 품에 안긴 %CHARA%의 머리를 쓰다듬는다"
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: "할머니"
            - "「물론 『달리기의 마법』은 대단한 마법이지」"
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: "할머니"
            - "「하지만 대마법사가 『달리기의 마법』밖에 못 쓴다면 재미없지 않겠니?」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하지만……『달리기의 마법』조차 못 익히면……나……어떻게……」"
        - "%CHARA%은(는) 말을 잇다 끊기를 반복한다"
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: "할머니"
            - "「혼자라면 확실히 어려울지도 모르지……」"
        - "그저 미소 짓고 있다"
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: "할머니"
            - "「하지만 천재 %MOHOSHOJO%에게는 언제나 자기 %CALLNAME%이(가) 있지 않니?」"
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: "할머니"
            - "「보렴, 너의 %CALLNAME%」"
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: "할머니"
            - "「지금도 곁에 있단다」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……！！」
        - "할머니의 다정한 시선을 따라 %CHARA%은(는) %YOU%이(가) 있는 구석을 본다"
        -
        - "갑자기 할머니의 품에서 떨어져 붉어진 눈가의 눈물을 닦는다"
        - "%CHARA%은(는) 얼른 옆으로 돌아서 팔짱을 낀다"
        -
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: "할머니"
            - "「후후……예전과 다를 게 없구나」"
        - color: #対応キャラの色
          content:
            - fontWeight: bold
              content: "할머니"
            - "「그럼, 이 아이를 잘 부탁드려요」"
        -
        - "%CHARA%의 할머니와 %YOU%은(는) 가볍게 손을 흔들며 헤어진다"
        - "옆에 있는 %CHARA%은(는) 이따금 그 모습을 훔쳐본다"
        -
        - "할머니의 모습이 보이지 않게 될 때까지"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「레인플라워★로터스!!! %CALLNAME%, 방금 일은 전부 잊어버려!!!!!」"
        - "달려와 지팡이를 %YOU%에게 똑바로 겨눈다"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「천재 %MOHOSHOJO% 스위피는 반드시 마법의 정수를 찾아서 가장 위대한 대마법사가 될 거야!」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그때까지 %CALLNAME%은(는) 지금처럼 주인 곁에 있어. 알겠어!!!」"
        -
        - "아무튼 %CHARA%은(는) 원래의 결정을 철회한 모양이다"
        - "뜻밖에도 투지가 넘쳐 보인다. 좋은 일이겠지"
    - acc: 2
      content: "(아마……붙잡아도 소용없겠지)"
      lines:
        - "%YOU%은(는) %CHARA%의 이토록 솔직한 바람을 %SEX%를 위해 이루어 주지 못했다"
        - "이제 와서 붙잡아도 의미는 없을 것이다"
        - "그렇게 생각하며 %YOU%은(는) 무거운 발걸음으로 트레이너실에 돌아와 조용히 앉아, 또 앉아 있다"
        -
        - "하지만 어떤 일도 확정된 것은 아닌 모양이다"
        -
        - "이를테면 지금 어째서인지 갑자기 마음을 바꾸어 %YOU%의 트레이너실로 돌아온 이 자그마한 %UMA%처럼"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……흥!」"
        -
        - "구석의 작은 의자에 앉아 벽을 보며 고집스러운 태도를 꾸미면서도 이따금 %YOU%을(를) 훔쳐본다"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……왜 그런 눈으로 봐?」"
        -
        - acc: 1
          content: "「내일 연습 일정은……어떻게 할까?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「싫어, 싫어, 싫어! 지금은 그 얘기 하기 싫어!!」"
        - "변함없이 그런 모습이다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「너는 %CALLNAME%이야! %CALLNAME%은(는) 주인 명령을 잘 들어야 해!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%, 명령이야. 지금은 연습 얘기 하지 마!!」"
        -
        - acc: 1
          content: "「그럼……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……왜 또 그렇게 처량한 눈으로 봐?」"
        -
        - acc: 1
          content: "「……내일은 제대로 연습할 거지?」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……알았어, 알았어! 약속 어기면 강아지야!」"
        - "%CHARA%은(는) 일어나 온 힘을 다해 %YOU%을(를) 밖으로 밀어낸 뒤 재빨리 문을 잠근다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내일 %CALLNAME%이(가) 데리러 안 오면……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%을(를) 강아지로 만들어 버릴 거야!!!」"
        - "방 안에서 흐느낌이 조금 섞인 목소리가 들린다"
    - acc: 3
      content: "(아니, 처음부터 한 사람밖에——)"
      comment:
        - fontWeight: bold
          fontSize: 0.8rem
          color: red
          content: "【이것은 「만약」의 세계선에 존재하는 짓궂은 가능성입니다! 게임이 곧바로 엔딩에 들어갑니다!】"
      lines:
        - "눈을 비빈 %YOU%은(는) 방금 확실히 잘못 봤다는 걸 깨닫는다"
        - "불빛 아래에는 나이 든 우마무스메 한 사람뿐이었다. 누군가 오기를 외로이 기다리고 있다"
        -
        - "그 갈색 털의 자그마한 %UMA%는 역시 슬픔에 잠겨, 지금 교문으로 와서 %SEX%의 할머니를 만날 리 없다"
        - "여기서 %CHARA%와(과) %SEX%의 할머니가 이야기하는 모습을 봤다는 건 아마 %YOU%의 착각일 것이다——"


be_dream_end:
  title: "꿈의 끝"
  lines:
    - "%CHARA%와(과) 헤어진 뒤 %YOU%은(는) 조금 멍해졌지만, 곧 모든 것은 일상으로 돌아왔다"
    - "%YOU%은(는) 여전히 트레센의 트레이너로서 우마%UMA%들을 발굴하고 가르쳐 코스에서 빛나게 하고 있다"
    -
    - "그 틈틈이 이따금 길가에서 이런 말을 듣는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그냥 마법도 모르는 평범한 사람이잖아! 왜 내 마법에 의미가 없다고 말하는 거야!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전부 사악한 마법사의 음모야! 내가 마법을 버리면 자기 마법으로 나를 이길 수 있을 줄 아는 거지!! 절대 안 그래!!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「분명……분명 어둠의 마법이 방해하는 거야!!! 그렇지 않고서야 내 마법이 이렇게……」"
    -
    - "한참 뒤의 일이었다. %CHARA%이(가) %YOU%와(과) 계약을 끊은 지 몇 달이나 지났는지도 알 수 없다"
    -
    - "트레이닝실을 나서는 길에 %YOU%은(는) 운동장 벤치에 앉아 있는 %CHARA%을(를) 본다"
    - "마법 모자는 쓰지 않고, 모자와 지팡이를 옆에 가지런히 놓아두었다"
    - "계속 고개를 숙인 채 이따금 얼굴을 들어 주위를 본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아아……. 너구나.」"
    - "마침내 고개를 들었을 때 멈춰 서 있던 %YOU%을(를) 발견한다"
    - "하지만 천천히 고개를 옆으로 돌리고 %YOU%을(를) 보려 하지 않는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜? 너도 나를 비웃으러 왔어?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……웃고 싶으면 웃어」"
    - "그저 중얼거린다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어차피 전부 거짓말, 거짓말, 전부 거짓말……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너도 거짓말, 나도 거짓말, 모두 거짓말, 그 뭐든 처음부터 거짓말……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……아직도 거기 서서 나를 보고 뭐 해? 너는 할 일도 없어?」"
    - "%CHARA%은(는) %YOU%을(를) 한 번 본다"
    -
    - "……확실히 하고 싶은 말은 있다"
    - acc: 1
      content: "「그렇게 생각하지 마」"
    -
    - "「이제 네 트레이너도, 네 %CALLNAME%도 아닐지 몰라」"
    -
    - "「하지만」"
    -
    - "「너는 언제나 그 천재 마——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아아아아아 시끄러, 시끄러, 시!끄!러!!!!!!」"
    - "말을 가로막더니 어째서인지 갑자기 격앙되어 히스테릭하게 외친다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: "스윕 토쇼?"
        - "「네가 믿는 게 나랑 무슨 상관이야! 남들이랑 무슨 상관인데!! 믿어 봤자 무슨 의미가 있어!!!!!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: "스윕 토쇼?"
        - "「아직도 %CALLNAME%, %CALLNAME%이라니, 이 세상에 %CALLNAME% 같은 건 처음부터 없잖아!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: "스윕 토??"
        - "「천……재……그, 뭐……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: "스윕 토??"
        - "「너야말로 그 뭐든 해! 네 아빠도 엄마도 할아버지도 할머니도 남동생도 여동생도 오빠도 언니도 전부 그렇다구!!!!!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: "스윕???"
        - "「나, 나는……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: "스윕???"
        - "「나는……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？？
        - "「흐으으……흐으으으으으으으으……」"
    - "%CHARA%이라는 이름을 지닌 갈색 털의 자그마한 %UMA%는 벤치에서 몸을 웅크린다"
    -
    - acc: 1
      content: 「……」
    -
    - "아무튼 %YOU%은(는) 아직 트레이너이며, 담당 우마%UMA%들을 가르쳐야 한다"
    - "아마 이런 작은 일화는 내일이면 잊힐 것이다"
    -
    - "아마도"
    - "사람은 앞으로 나아가야 한다."


# エリザベス女王杯出走後のターン終了
# スピード&パワー+5、日常口上変化
we_asphodel:
  title: "새로 태어나는 아스포델"
  lines:
    - "엘리자베스 여왕배가 끝나고 얼마 뒤, %YOU%는 %CHARA%에게 이끌려 도서관에 왔다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건…… 아니야. 저것도…… 아니고.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아, %CALLNAME%! 저 책 좀 내려 줘.」"
    - "%YOU%에게 올라탄 채, %CHARA%(은)는 높은 도서관 책장에서 핀란드어로 쓰인 옛 약초 서적을 꺼낸다"
    -
    - "책을 받아 들자마자 다급히 페이지를 넘긴다"
    - "하지만 별다른 소득은 없어 보인다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으으! 못 읽겠어, 하나도 못 읽겠다고!!」"
    - "양손 검지로 계속 관자놀이를 문지른다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시…… 마법은……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아냐 아냐 아냐! 그럴 리 없어!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 이 도서관에 있는 마법책 전부 가져와!!!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「금방 배울 수 있는 새로운 마법이 분명 있을 거야!」"
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - "「저기……」"
    - "사서이자 %CHARA%의 선배인 %ZOB_ZOY%(이)가 곁에서 천천히 입을 연다"
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - "「스윕 씨, 왜 그렇게 책에 나온 마법을 배우고 싶어 하시나요?」"
    -
    - "이쪽을 바라보는 %ZOB_ZOY%의 시선에 %CHARA%도 관심을 보인다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 당연하잖아. 내가 쓸 수 있는 마법은 이미 전부 통달했으니까.」"
    - "뒤돌아보며 일부러 자신만만하게 대답한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이제 이런 시시한 책에서, 원래는 거들떠보지도 않던 마법을 찾아야 할 때가 된 거야~」"
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - "「그렇다면……」"
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - "「스윕 씨처럼 대단한 분이라면,"
        - fontWeight: bold
          content: "『자신만의 마법을 만드는 것』"
        - "은 어떨까요?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    -
    - "%YOU%는 새로운 생각이 떠오른 이 작은 %UMA%에게 끌려 또다시 트레이닝장으로 돌아왔다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그랜마가 말한 『달리는 마법』 같은 건 아무래도 좋아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘부터 천재 %MOHOSHOJO% 스위피는 나만의 마법을 『만들』 거니까!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 그랜마는 내 『마법을 만드는』 재능을 알아보고 그런 말을 한 게 틀림없어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잘 봐, %CALLNAME%! 지금부터 보여 줄 마법은 딱 한 번만 쓸 거니까!」"
    -
    - "%CHARA%(은)는 모자를 쓰고 트레이닝장 코스에 서서 출발 자세를 취한다——"
    -
    - "그 기적 같은 속도는 몇 번을 보아도 한 가지 사실을 확신하게 한다."
    - "「이것이 『마법』——」"
    -
    - "%YOU%의 뒤를 따른 마법도, 다른 누군가에게 배운 마법도 아니다"
    - "%CHARA%의 『자신만의 마법』이다"

# シニア級第1週ターン開始
ws_new_year_s:
  title: "새해 참배"
  lines:
    - "시간은 화살처럼 흐르고, 세 여신은 그 틈을 누빈다"
    - "오늘부터 %CHARA%(은)는 정식으로 시니어급에 들어선 우마%UMA%가 되었다"
    -
    - "시니어급 레이스에 자리 잡은 이들은 수많은 단련과 경쟁을 거쳐 선별된 강자들이다"
    - "「앞으로는 까다로운 상대가 점점 더 많아지겠지——」"
    -
    - "하지만 %CHARA%(이)가 이기고자 한다면, %SEX%에게는 클래식 3관으로 이름을 떨친 선수들에게도 뒤지지 않는 의지와 실력이 있다"
    - "어떤 상대를 만나든, 게이트 앞에서 하는 %SEX%의 혼잣말이 얼마나 눈길을 끌든"
    - "코스에서 이기고자 하는 %SEX%는 모든 것을 휩쓸 수 있다——"
    -
    - "……우선은 %SEX%가 이기고 싶어 해야 한다"
    - "아무튼 %SEX%가 새해를 잘 맞이하고 확실한 새 목표를 찾도록 돕는 것을 우선으로 하자"
    -
    - "클래식급 때와 마찬가지로 %CHARA%(을)를 신사에 데려간다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐야 뭐야 뭐야! %CALLNAME%, 넌 왜 그렇게 소원 빌러 오는 걸 좋아해!」"
    - "줄을 서서 기다리던 %CHARA%(이)가 늘 그렇듯 짜증을 내기 시작한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「주인님은 이런 신사만 안 왔어도 새로운 독창적인 마법을 연구할 수 있었는데!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래도 뭐, 됐어.」"
    - "이번에는 전개가 조금 다른 모양이다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피가 이번엔 직접 『소원의 마법』을 만들어 왔거든. %CALLNAME%의 소원, 한꺼번에 이루어 줄게!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「콘플라워★화이트 헤더, 어떤 소원이든 이루어져라~!!」"
    - "%CHARA%(은)는 자신만만한 표정으로 지팡이를 들어 한 번 휘두른 뒤, 곧장 %YOU%를 가리킨다"
    -
    - acc: 1
      content: "「정말…… 어떤 소원이든 이루어져?」"
    - "%YOU%는 가볍게 묻는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐야, %CALLNAME%! 주인님의 신작 마법을 의심하는 거야!!」"
    - "볼을 부풀리고 %YOU%를 바라본다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「소원만 큰 소리로 말하면 돼. 다른 말은 금지!!!」"
    -
    - "「……그럼 소원을 빌게——」"
    - "이어서 할 말은——"
    - acc: 1
      key: select
      content: "「스윕이 레이스에서 이기기를」(모든 능력+30)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - "갑자기 미묘한 침묵이 흐른다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「문워트★애더스 텅, 어떤 소원이든 지금 당장, 곧바로 사라져라——!!!!!」"
        - "%CHARA%(은)는 몹시 다급하게 지팡이를 들어 한 번 휘두르고, 다시 곧장 %YOU%를 가리킨다"
        -
        - "소원을 이루는 마법의 효과가 사라지게 하는 마법보다 강했던 모양이다"
        -
        - "계속 싫다고 투덜거리면서도, 돌아온 %CHARA%(은)는 %YOU%의 소원대로 얌전히 추가 훈련을 했다"
        - "다만 훈련을 시작하기 전에는 트레이닝장 한쪽에 서서 오랫동안 분해했다"
    - acc: 2
      content: "「스윕이 공부를 더 잘하기를」(스킬 Pt+200)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - "갑자기 미묘한 침묵이 흐른다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「문워트★애더스 텅, 어떤 소원이든 지금 당장, 곧바로 사라져라——!!!!!」"
        - "%CHARA%(은)는 몹시 다급하게 지팡이를 들어 한 번 휘두르고, 다시 곧장 %YOU%를 가리킨다"
        -
        - "소원을 이루는 마법의 효과가 사라지게 하는 마법보다 강했던 모양이다"
        - "%CHARA%(은)는 몹시 분한 표정으로 트레이너실에서 %YOU%가 %SEX%에게 건넨 『달리는 마법 개량 이론』을 읽기 시작한다"
        - "자신의 마법을 개량할 수 있다는 점은 조금 기쁜 듯하지만, 여전히 싫다고 투덜거린다"
    - acc: 3
      content: "「스윕이 건강하기를」(체력+800)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「……」
        - "갑자기 미묘한 침묵이 흐른다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「문워트★애더스 텅, 어떤 소원이든 지금 당장, 곧바로 사라져라——!!!!!」"
        - "%CHARA%(은)는 몹시 다급하게 지팡이를 들어 한 번 휘두르고, 다시 곧장 %YOU%를 가리킨다"
        -
        - "소원을 이루는 마법의 효과가 사라지게 하는 마법보다 강했던 모양이다"
        - "그리하여 위대한 천재 %MOHOSHOJO%도 평범한 사람들의 식사 문제로 고민하기 시작한다"
        - "며칠 동안 영양식을 먹으며 투덜대던 %CHARA%(은)는 마침내 %YOU%의 허락을 받고 아이스크림을 먹을 수 있었다"


# シニア級第1週ターン終了時
we_magic_stage:
  title: "마법의 무대"
  lines:
    - "새해가 밝았으니 %CHARA%(과)와 함께 시니어급의 레이스 계획도 세워야 한다"
    -
    - "「스윕의 마법은 이러이러하니까…… 저렇게 하는 편이 좋아. 그러니까 이러이러하게——」"
    - "눈앞의 갈색 머리 작은 %UMA%에게 %SEX%가 시니어급에서 출전할 만한 레이스들을 설명해 본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐음. 응. 알았어. 그렇구나.」"
    - "듣고는 있지만, 너무 건성인 것 같다……"
    -
    - "「그러면……」"
    - "%YOU%는 조심스럽게 말을 꺼낸다"
    - "「스윕은 앞으로 마법 대회에 나가서 『달리는 마법』을 어떻게 보여 줄 생각이야……?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그럼 주인님이 그 대회에 나가면 되잖아?」"
    - "아주 간단하게 대답한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 『야스다 기념』이랑 저 『타카라즈카 기념』, 가을 『텐노상』 같은 건 다들 보잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나, 여기에 나갈래.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 그리고! 그 『엘리자베스 여왕배』! %CALLNAME%, 주인님 출전 신청을 깜빡하기만 해 봐!!!」"
    -
    - "결국 %CHARA%(은)는 예상 밖으로 적극적으로 레이스를 골랐다——"
    - "어쩌면 머지않아 %SEX%는 정말로 그중 몇몇 레이스에서 『마법』을 선보여 모두에게 무언가를 증명할지도 모른다"


rs_yasu_kin_s:
  title: "야스다 기념 전·긍정의 레드 클로버"
  lines:
    - "야스다 기념. 시니어급의 G1 마일 레이스로, 마일 %UMA%에게는 최고의 실력 증명 무대 중 하나다"
    - "매년 야스다 기념에는 다양한 강자들이 도전하러 온다"
    -
    - "이번에는 수많은 일본 시니어 우마%UMA%뿐 아니라 홍콩의 최정상 우마%UMA%도 참가한다"
    - "경쟁의 치열함을 얕볼 수는 없다"
    -
    - "%CHARA%의 요청대로 일찌감치 경기장 대기실에 도착한다"
    - "그런데 %CHARA%(은)는 %YOU%보다 먼저 대기실에 와 있었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜 이렇게 늦었어, %CALLNAME%! 이번에는 일찍 오라고 했잖아!」"
    - "%YOU%를 보자마자 %CHARA%(이)가 꾸짖기 시작한다"
    -
    - "「스윕…… 이번에도 가을 때처럼…… 일찍 와야 했어?」"
    - "%YOU%는 시간을 확인한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당연하지! 일찍 와야 사람들이 내 마법을 여러 번 볼 수 있잖아!」"
    - "그렇게 대답할 뿐이었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아, %CALLNAME%! 모자랑 지팡이 정리해 줘!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번엔 모두에게 똑똑히 보여 주겠어. 천재 %MOHOSHOJO% 스위피의 독창적인 마법을!」"
    -
    - "얼마 뒤, %YOU%는 관중석에서 코스로 내려간 갈색 머리의 작은 우마%UMA%를 바라본다"
    - "예상과 달리 %CHARA%(은)는 줄 맨 뒤에 서지 않고 번호 순서대로 게이트에 들어갔다"


re_yasu_kin_win_s:
  title: "야스다 기념 후·제멋대로인 큰소리"
  lines:
    - "%CHARA%(은)는 홍콩의 최정상 우마%UMA%를 비롯한 수많은 강자가 출전한 야스다 기념에서 우승했다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「봐 봐! 천재 %MOHOSHOJO% 스위피의 마법은 이런 거라고~!!」"
    - "시상대에 오른 %CHARA%(은)는 잔뜩 들떠 지팡이로 관객들을 가리키며, 드물게도 우승기를 제대로 두르고 있다"
    - "이어지는 인터뷰에서도 마법 이야기가 끊이지 않는다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아마 『마법』에 대한 생각은 사람마다 다르겠지.」"
    - "어째서인지 인터뷰 도중 갑자기 새로운 화제를 꺼낸다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 말해 두겠어.」"
    - "방금 달리기가 아닌 마법 이야기만 한다며 술렁이던 관객들을 지팡이로 가리킨다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런데도 천재 %MOHOSHOJO% 스위피가 보여 준 마법을 믿지 않는 몇몇 녀석들——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너희는 『타카라즈카 기념』에서」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더 많은 나만의 마법, 그 『기적』을 목격하게 될 거야.」"
    -
    - "작은 %UMA%는 거창하게 큰소리를 쳤다"
    - "하지만 이 컨디션과 적극성이 있다면"
    - "어쩌면 다음 레이스에서는 정말로——"
    - "%YOU%는 %SEX%에 대해, 어쩌면 %SEX% 본인보다도 더 집요한 확신을 품고 있다"


re_yasu_kin_lose_s:
  title: "야스다 기념 후·제멋대로 앞으로"
  lines:
    - "강자들이 모이는 야스다 기념은 역시 쉽게 이길 수 있는 레이스가 아니었다"
    - "%CHARA%(은)는 수많은 강자가 겨루는 야스다 기념에서 안타깝게 패배했다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으으…… 뭐가 잘못된 거야!?」"
    - "양손가락으로 관자놀이를 누르며, %CHARA%(은)는 혼잣말을 하면서 %YOU%(과)와 함께 경기장을 나선다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! 됐어. 새로 개량한 마법이 바로 효과를 안 내는 건 당연하잖아!」"
    - "고개를 번쩍 든다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음 『타카라즈카 기념』에서는 저 녀석들도 그렇게 운이 좋지는 않을 거야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「반드시 보여 주겠어. 천재 %MOHOSHOJO%의 마법, 그 『기적』을.」"
    -
    - "%YOU%를 탓하지도, 자책하거나 슬퍼하지도 않는다"
    - "이번에 졌더라도 이 컨디션과 적극성이 있다면"
    - "어쩌면 다음 레이스에서는 정말로——"
    - "%YOU%는 %SEX%에 대해, 어쩌면 %SEX% 본인보다도 더 집요한 확신을 품고 있다"


rs_takz_kin_s:
  title: "타카라즈카 기념 전·확신의 프로테아"
  lines:
    - "타카라즈카 기념. 시니어급의 굵직한 중거리 G1 레이스다"
    - "티아라 3관에 집중하는 선수들뿐 아니라 클래식 3관에 출전했던 선수들도 이 레이스에는 적극적으로 참가한다"
    -
    - "하트 크라이, 링컨, 탭 댄스 시티. 모두 클래식 레이스에서 두각을 나타낸 선수들이다"
    - "그중에서도 가장 기대를 모으는 선수라면 지난가을 두각을 드러낸 %ZOB_ZOY%——젠노 롭 로이를 빼놓을 수 없다"
    -
    - "겉모습만으로는 짐작하기 어려운 그 절묘한 실력은 아마 이렇게 표현할 수 있을 것이다——"
    - acc: 1
      content: "「롭 로이 학자가 자신의 검을 들었어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「학자? 검? ……그게 뭐야! 무슨 소리야!?」"
    - "지하 통로에서 어리둥절한 얼굴로 %YOU%의 이야기를 듣는 %CHARA%의 모습은 경기장의 긴장된 분위기와 사뭇 어울리지 않는다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어 싫어! %CALLNAME%가 그렇게 말하니까 마법을 쓸 기운까지 없어지겠잖아!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「쓸 수 있을지는 둘째 치고…… 그러니까,」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런 마법을 내 마법이랑 같은 수준으로 취급할 수는 없잖아!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무튼 %CALLNAME%가 알아 두면 되는 건 딱 하나야——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어떤 녀석이든——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피의 독창적인 마법 앞에서는 전부 휩쓸리고 말 거야.」"
    - "그렇게 대답할 뿐이었다"
    -
    - "코스로 나간 %CHARA%(은)는 게이트 앞에서 잠시 멈춘다"
    - "주변의 상대들을 둘러보더니 조금 깔보는 듯한 태도로 기묘한 주문을 외우고 천천히 게이트에 들어간다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "상태 획득: "
        - content: "[격앙된 대결 마법!]"
          title: "반드시 이길 수 있다고 믿는다! 적어도 근성은 올랐다!"
          # 全能力+5%、根性追加+10%


re_takz_kin_win_s:
  title: "타카라즈카 기념 후·새로운 약속"
  lines:
    - "전광석화처럼 치열했던 레이스는 순식간에 끝났다"
    -
    - "레이스 후 축하 행사가 끝나고 %CHARA%(과)와 함께 경기장 밖으로 나온다"
    - "문득 조금 떨어진 곳에서 기다리는, 서양식 모자를 쓴 우마무스메 할머니가 눈에 들어온다——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앗! 그랜마!」"
    - "눈이 단숨에 반짝인다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 역시 그랜마도 천재 %MOHOSHOJO% 스위피의 특별한 마법에 감동해서, 마법까지 써 가며 보러 온 거구나!」"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「후후, 역시 여전하구나……」"
    - "할머니는 그저 미소를 지으며 %CHARA%(을)를 바라본다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「……괜찮다면,」"
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「다음 주에 시간을 내서 할머니 집에 와 주겠니?」"
    - "그러더니 화제를 바꾸어, 어째서인지 그런 부탁을 한다"
    -
    - "%CHARA%(과)와 함께 망설임 없이 할머니의 부탁을 받아들이고, 얼마 뒤 작은 %UMA%와 트레센 학원으로 돌아왔다"


re_takz_kin_lose_s:
  title: "타카라즈카 기념 후·새로운 기대"
  lines:
    - "전광석화처럼 치열했던 레이스는 순식간에 끝났다"
    -
    - "레이스 후 축하 행사가 끝나고 %CHARA%(과)와 함께 경기장 밖으로 나온다"
    - "문득 조금 떨어진 곳에서 기다리는, 서양식 모자를 쓴 우마무스메 할머니가 눈에 들어온다——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앗! 그랜마!」"
    - "눈이 단숨에 반짝인다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 예고도 없이 갑자기 천재 %MOHOSHOJO% 스위피를 찾아오다니, 역시 내 실력을 인정한 거지!」"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「후후, 역시 여전하구나……」"
    - "할머니는 그저 미소를 지으며 %CHARA%(을)를 바라본다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「아마 앞으로도 계속 이렇게 지낸다면, 천재 %MOHOSHOJO%는 자기 길을 찾아낼 테지.」"
    - "어째서인지 무언가 중얼거린다"
    -
    - "할머니와 그리 오래되지도 않은 추억 이야기를 잠시 나눈 뒤, %CHARA%(과)와 트레센 학원으로 돌아왔다"

# 宝塚記念に勝った場合、宝塚記念の対応ターンの翌週開始
ws_magic_dream_w:
  title: "마법의 꿈"
  lines:
    - "여름날 아침 햇살은 뜨겁지 않아, 몸에 닿아도 의외로 따스하기만 하다"
    -
    - "%CHARA%의 재촉에 이른 아침부터 할머니 집으로 향한다"
    - "얼마 뒤, %YOU%의 눈에 일곱 빛깔 꽃바다 위로 떠오른 듯한 작은 집이 들어온다"
    - "꽃바다 한가운데 우마무스메 할머니가 서 있다"
    - "꽃차의 향기는 꽃들의 향과 뒤섞여서도 백 미터 밖까지 풍겨 온다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「후후, 역시 와 주었구나……」"
    - "거의 달려들듯 안겨 오는 %CHARA%(을)를 보며 할머니는 옅게 미소 짓는다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「오늘 부른 건 중요한 이야기가 있어서란다.」"
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「아마 그리 가슴 뛰는 이야기는 아니겠지만, 중요한 이야기야.」"
    -
    - "할머니는 한 번 하늘을 올려다보고, 다시 고개를 내려 %CHARA%(을)를 바라보며 말을 잇는다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「……지금껏 내가 말해 온 마법에 관한 이야기야.」"
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「……사실 할머니는 줄곧 너를 속이고 있었단다.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……속여? 뭘?」"
    - "작은 %UMA%가 어리둥절한 표정을 짓는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「레이스가 끝나고 굳이 여기까지 오라고 한 것도……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앗! 알겠다!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그랜마는 그냥 대%MAJO%가 아니라, 세상 모든 마법을 처음 만들어 낸 사람이라는 거지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 알고 있었어——」"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「아니, 내 말은……」"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「마법은,」"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「처음부터 존재하지 않았단다.」"
    -
    - "할머니는 %CHARA%의 머리에서 모자를 살며시 벗긴다"
    -
    - "태엽 열쇠를 꺼내 모자의 작은 틈에 꽂고 돌린다"
    -
    - "모자 꼭대기가 분리된다"
    - "그 안에 있는 것은——"
    - "천천히 돌아가는 기계 톱니바퀴"
    - "정밀한 센서"
    - "그에 맞물려 움직이는 구동축"
    - "모든 기계 장치의 구조가 한눈에 드러난다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    - "저도 모르게 눈동자가 움츠러들고, 몸은 감전된 듯 그 자리에 굳어 버린다"
    -
    - "한순간 시간이 멈춘 듯했다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어 싫어 싫어! 마법이 없다니, 인정 못 해!!!」"
    - "격렬하게 반응하며 %CHARA%(은)는 필사적으로 무언가를 부정한다"
    -
    - "그러더니 고개를 옆으로 돌리고 깔보는 듯한 표정을 짓는다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! 마법이 없다는 소리나 하는 그랜마도 결국 그냥 어린애잖아!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「애초에 마법이 없다면——」"
    # setToBottom、continue
    # ws_md_w_1


# 幼いころの記憶
ws_md_w_1:
  sync: true
  lines:
    - content:
        - color: #対応キャラの色
          fontWeight: bold
          content: "아버지"
        - fontStyle: italic
          content: "「스윕…… 이 영어 동화책…… 관심 있니……?」"
    - fontStyle: italic
      content: "아버지가 조심스럽게 묻는다"
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: "「싫어.」"
    - fontStyle: italic
      content: "아니나 다를까, 여지없는 대답이 돌아왔다"
    -
    - content:
        - color: #対応キャラの色
          fontWeight: bold
          content: "어머니"
        - fontStyle: italic
          content: "「스윕, 이 봉제 인형 갖고 싶어?」"
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……」
    - fontStyle: italic
      content: "그저 선 채로 움직이지 않는다"
    -
    - content:
        - color: #対応キャラの色
          fontWeight: bold
          content: "할머니"
        - fontStyle: italic
          content: "「후후…… 아이들은 역시 언제나 기운이 넘치는구나……」"
    - content:
        - color: #対応キャラの色
          fontWeight: bold
          content: "할머니"
        - fontStyle: italic
          content: "「할머니도 좋은 걸 보여 주고 싶구나.」"
    -
    - fontStyle: italic
      content: "살짝 짜증이 난 %CHARA%의 눈앞에서, 할머니는 일부러 신비로운 표정을 지으며 소매 안으로 손을 넣는다"
    -
    - fontStyle: italic
      content: "소매에서 한 번 손을 빼내자——"
    -
    - fontStyle: italic
      content: "눈앞에 선명한 장미가 수없이, 수없이 나타났다"
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……！！！」
    - fontStyle: italic
      content: "눈이 단숨에 밝아진다"
    # setToBottom、continue
    # ws_md_w_1_end


ws_md_w_1_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그랜마가 눈앞에서 꽃을 꺼냈을 때, 그 어지러울 만큼 두근거리던 기분은……」"
  - # ws_md_w_2


  # 茨の記憶
ws_md_w_2:
  sync: true
  lines:
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: "「……있잖아. %CALLNAME%.」"
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: "「업어 줘.」"
    - fontStyle: italic
      content: "%CHARA%은(는) 앞쪽으로 몇 미터나 이어진 가시덤불을 가리키며, %YOU%에게 %SEX%를 업고 건너가라는 뜻을 전한다"
    -
    - fontStyle: italic
      content: "가시덤불은 빈틈없이 빽빽하다. 가로세로로 얽힌 가지들이 햇볕 아래 얼룩진 그림자를 드리우고, 날카로운 가시는 파수꾼처럼 늘어서 있다"
    - fontStyle: italic
      content: "이렇게 위험한 길을 %CHARA%을(를) 업고 가기는커녕, 혼자서도……"
    - fontStyle: italic
      content: "「……다른 길로 가면 안 될까?」"
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: "「싫어.」"
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: "「여기로 갈 거야.」"
    - fontStyle: italic
      content: "%CHARA%은(는) 망설임 없이 대답한다. 타협의 여지라곤 없는 고집스러운 말투다"
    -
    - fontStyle: italic
      content: "그렇게 %YOU%은(는) 자그마한 %UMA%를 업은 채 빽빽한 가시밭길 앞에 설 수밖에 없었다"
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: "「가.」"
    - fontStyle: italic
      content: "작은 발로 가볍게 툭 차는 힘이 느껴진다"
    -
    - fontStyle: italic
      content: "이를 악문 %YOU%은(는) 돌아올 때 팔과 다리에 붕대를 칭칭 감고 있을 자기 모습을 떠올리며 발을 내디뎠다——"
    # setToBottom、continue
    # ws_md_w_2_end


ws_md_w_2_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「지금까지 %CALLNAME%가 내 이런저런 부탁을 전부 들어준 건……」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「어떻게 설명할 건데……!!」"
  - "%CHARA%(은)는 화가 나서 발을 구른다"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「싫어 싫어! 절대 인정 못 해!!」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그랜마가 마법은 없다고 한다면……」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「천재 %MOHOSHOJO% 스위피인 내가……」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「직접——」"
  # ws_md_w_3


# 宣言の記憶
ws_md_w_3:
  sync: true
  lines:
    - content:
        - color: %COLOR_47%
          fontWeight: bold
          content: %ZOB_ZOY%
        - fontStyle: italic
          content: "「스윕 씨처럼 대단한 분이라면,"
        - fontWeight: bold
          fontStyle: italic
          content: "『자신만의 마법을 만드는 것』"
        - fontStyle: italic
          content: "은 어떨까요?」"
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: 「……！」
    -
    - fontStyle: italic
      content: "%YOU%는 새로운 생각이 떠오른 이 작은 %UMA%에게 끌려 또다시 트레이닝장으로 돌아왔다"
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: "「그랜마가 말한 『달리는 마법』 같은 건 아무래도 좋아.」"
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: "「오늘부터 천재 %MOHOSHOJO% 스위피는 나만의 마법을 『만들』 거니까!」"
    -
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: "「흐흥~ 그랜마는 내 『마법을 만드는』 재능을 알아보고 그런 말을 한 게 틀림없어!」"
    - content:
        - color: %COLOR%
          fontWeight: bold
          content: %CHARA%
        - fontStyle: italic
          content: "「잘 봐, %CALLNAME%! 지금부터 보여 줄 마법은 딱 한 번만 쓸 거니까!」"
    -
    - fontStyle: italic
      content: "%CHARA%(은)는 모자를 쓰고 트레이닝장 코스에 서서 출발 자세를 취한다——"
    -
    - fontStyle: italic
      content: "그 기적 같은 속도는 몇 번을 보아도 한 가지 사실을 확신하게 한다."
    - fontStyle: italic
      content: "「이것이 『마법』——」"
    -
    - fontStyle: italic
      content: "%YOU%의 뒤를 따른 마법도, 다른 누군가에게 배운 마법도 아니다"
    - fontStyle: italic
      content: "%CHARA%의 『자신만의 마법』이다"
  # setToBottom、continue
  # ws_md_w_3_end


ws_md_w_3_end:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「『마법을 만들』 거야!」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「흐흥~ 이러면 그랜마도 더는 마법이 없다고 못 하겠지!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「천재 %MOHOSHOJO% 스위피도 위대한 대마법사로서, 사람들에게 오래오래 칭찬받을 거니까!」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「있잖아, %CALLNAME%.」"
  - "무언가 깨달은 듯 미소 짓는 할머니의 손에서 %CHARA%(이)가 원래대로 돌아온 모자를 받아 든다"
  - "그리고 천천히, 단정하게 머리에 쓴다"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%라면 주인님이 어떤 결정을 하든 계속 따라올 거지?」"
  - "눈앞의 작은 우마%UMA%는 %YOU%에게 신뢰 어린 눈빛을 보낸다. 그 안에는 마법이 깃든 것만 같다"
  -
  - acc: 1
    content: "「물론이지.」"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「흐흥, 역시 내 %CALLNAME%야!」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「일 년이든, 십 년이든, 백 년이든……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「언젠가 대%MAJO%가 되어서 그랜마 곁으로 돌아와, 그랜마도 깜짝 놀라게 할 거야!」"
  - acc: 2
    content: "「그러고 싶어도 이제 와서 거절할 수는 없겠네.」"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야! %CALLNAME%, 그 태도는 뭐야~!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「다음부터는 주인님한테 불만이 있어도 입 밖에 내지 마, 알겠어!!」"
  -
  - "그 뒤에는 아무 일도 없었다는 듯 할머니와 평온하게 차를 마신다"
  - "%CHARA%(이)가 동화를 들려 달라고 조르자, 할머니도 웃으며 %SEX%에게 이야기를 들려주었다"
  -
  - "얼마 뒤, 아쉬운 마음으로 할머니와 작별한다"
  # 全能力+5、PT+100


# シニア級宝塚記念に負けた、または未出走の場合、宝塚記念の対応ターンの翌週開始
ws_magic_dream_l:
  title: "마법의 꿈"
  lines:
    - "여름날 아침 햇살은 뜨겁지 않아, 몸에 닿아도 의외로 따스하기만 하다"
    - "이런 날에도 %YOU%는 %CHARA%(과)와 평소처럼 훈련을 이어 가고 있었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「빨리 빨리! 얼른 훈련을 끝내야 마법 연구를 할 거 아냐!!」"
    -
    - "그런데 갑자기 마법 모자에 문제가 생긴 듯하다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    -
    - "귀 부분이 삐걱거리는 소리를 내며 계속 돌아간다"
    - "마침내 뒤틀려 기묘한 각도로 꺾이고 만다——"
    -
    - "%CHARA%의 말로는 그랜마만 고칠 수 있는 『마법의 혼란』이라고 한다"
    -
    - "할머니에게 전화를 드린 뒤, %CHARA%의 안내를 받아 할머니 집으로 간다"
    - "꽃바다 한가운데 우마무스메 할머니가 서 있다"
    - "꽃차의 향기는 꽃들의 향과 뒤섞여서도 백 미터 밖까지 풍겨 온다"
    -
    - "다만 할머니는 %CHARA%에게는 작업 현장에 오지 말아 달라고 당부했다"
    - "그래서 %CHARA%(을)를 멀리서 기다리게 하고, %YOU% 혼자 모자를 들고 %CHARA%의 할머니를 만난다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「그렇구나…… 확실히 가끔 이런 일이 생기곤 하지.」"
    - "어째서인지 사정을 들은 할머니는 예상 밖으로 조금 진지한 표정이다"
    -
    - "우마무스메 할머니는 집에 들어가 공구함을 가져와, 그 안에서 태엽 열쇠를 꺼낸다"
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「지금부터 보게 될 것은 그 아이에게 말하지 말아 주세요.」"
    -
    - "할머니는 태엽 열쇠를 모자의 작은 틈에 꽂고 돌린다"
    -
    - "모자 꼭대기를 열자 그 안에 있는 것들이"
    - "천천히 돌아가는 기계 톱니바퀴"
    - "정밀한 센서"
    - "그에 맞물려 움직이는 구동축"
    - "한눈에 드러난다."
    -
    - "할머니는 공구함에서 도구를 더 꺼내, 몰두한 채 달그락거리며 분해하고 다시 조립한다"
    - "집중하는 모습을 보니 주변 일은 전혀 신경 쓰지 않는 듯하다"
    - "얼마 지나지 않아 모자는 한 번도 열린 적이 없는 것처럼 원래 모습으로 돌아왔다"
    -
    - "고친 모자를 들고 꽃바다를 나서는데, 출구에서 우마귀 한 쌍이 황급히 숨는 모습이 보인다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아…… %CALLNAME%.」"
    - "%YOU%를 보자마자 어딘가로 시선을 피하려는 눈치다"
    - "모자를 %SEX%에게 건네자 황급히 받아 든다"
    -
    - "돌아가는 길에도 평소와 달리 %YOU%의 얼굴을 똑바로 보지 못한다"
    - "아마 %CHARA%(은)는 이미……"
    -
    - "말없이 트레센 학원으로 돌아온다"
    -
    - acc: 1
      content: "「……미안해.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……? 왜 사과하는데……?」"
    - "뜻밖에도 차분하게 대답한다"
    -
    - acc: 1
      content: "「마법은 실제로 존재하지 않아……」"
    -
    - "평소라면 이 말을 들은 %CHARA%(은)는 %YOU%를 호되게 꾸짖었을 것이다"
    - "하지만 지금의 %CHARA%(은)는 그러지 않는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - "그저 침묵할 뿐이다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「바보 %CALLNAME%.」"
    - "갑자기 그렇게 말한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마법은 당연히 존재하잖아.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「옛날에도, 지금도, 아주 먼 미래에도,」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마법은 언제나 정말로 존재해.」"
    # setToBottom、continue
    # ws_md_w_1
    # ws_md_l


ws_md_l:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그때처럼.」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그리고 정말로 마법이 없다면……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이 모자를 썼을 때 느껴지는 안도감은……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「내가 말도 안 되게 화풀이해도 %CALLNAME%가 아무 말 없이 받아 줄 때, 가슴이 따뜻해지는 건……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「어떻게 설명할 건데!!」"
  - "%CHARA%(은)는 화가 나서 발을 구른다"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「잘 들어! %CALLNAME%!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「앞으로는 절대로 『마법은 없다』 같은 말 하지 마!」"
  - "지팡이를 꺼내 곧장 %YOU%를 가리킨다"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그랜마의 마법은 세상에서 가장 위대한 마법이야!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「내가 『마법을 만드는 법』을 배워도 그건 달라지지 않아!」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하지만 그랜마가 자신의 마법을 사람들에게 보여 주고 싶지 않다면……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「흐흥~ 천재 %MOHOSHOJO% 스위피인 나만이 『나만의 마법』으로 모두에게 『마법은 있다』는 걸 알려 줄 수 있는 거야!」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그때는 그랜마도 세상에서 가장 위대한 대마법사로 인정받는 내가 부러울지도 모르겠네!」"
  -
  - "그 뒤 %CHARA%(과)와 학원으로 돌아가 평소의 훈련 계획을 이어 간다"
  - "그저 트윙클 시리즈의 소중한 하루하루를 계속 살아간다——"
  # 全能力+5、PT+100

ws_summer_start_s:
  title: "여름 합숙 전·여전한 골칫거리"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이랴, 이랴! 멈춰——」"
    -
    - "어느새 또다시 여름 합숙을 떠나는 날이 되었다"
    - "%CHARA%(이)가 만족스럽게 여름 합숙을 시작할 수 있도록, 가능한 한 %SEX%의 요구를 들어준다"
    - "지금 %CHARA%(은)는 어째서인지 또 %YOU%의 등에서 가볍게 발을 구르고 있다"
    -
    - "지각은 피할 수 없을 것 같지만, 조금이라도 덜 늦고 싶다——"
    - "%YOU%는 최대한 빨리 %CHARA%(을)를 업고 여름 합숙 집합 장소로 달려간다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잘 들어! 결국 패배자가 될 마법사들아!」"
    - "%YOU%의 등에서 내려오자마자 눈앞의 모두에게 자신만만하게 지팡이를 휘두르며 큰 소리로 말한다"
    - "여름 합숙에 참가한 %UMA%들은 서로 얼굴을 마주 보다가 어리둥절하게 %CHARA%(을)를 보며 눈만 깜빡인다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너희가 어떤 엉터리 속임수를 쓰든, 대단하다고 생각하는 마법을 쓰든,」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 몸! 천재 %MOHOSHOJO% 스위피가 앞으로의 마법 대회에서 반드시——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「읍—— 으으읍—— 왜 이러는 거야——!!! 안 돼 안 돼 안 돼~ 아직 말 안 끝났단 말이야~~~!!!」"
    - "아무튼 진행에 방해가 되지 않도록, %YOU%는 서둘러 %SEX%의 입을 막고 %CHARA%(을)를 자신의 트레이닝장 쪽으로 데려갔다……"


rs_tenn_sho_s:
  title: "텐노상(가을)·침묵의 아보비타이"
  lines:
    - "텐노상(가을). 강자들이 모이는 중거리 G1이자, 수많은 시니어급 선수가 겨루는 가을 레이스다"
    - "동시에 가을 시니어 우마%UMA% 3관의 첫 번째 관문이기도 하다"
    -
    - "이런 레이스에는 %ZOB_ZOY%, 하트 크라이, 댄스 인 더 무드 같은 유명한 강자들뿐 아니라"
    - "실력을 감춘 우마%UMA%들도 우승의 영광을 노리고 있다"
    -
    - "이토록 큰 부담을 앞두고——"
    - "「스윕을 위해 뭔가 더 해 줘야 할까?」"
    - "%SEX%와 함께 일찌감치 도착했는데도 %YOU%는 여전히 %CHARA%(이)가 걱정된다"
    -
    - "「모자랑 지팡이, 미리 맡아 줄까?」"
    -
    - 「——」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 시끄러 시끄러 시끄러!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이브닝 프림로즈★플록스, 당장 조용히 해!」"
    - "일찍 도착하고도 준비실에 줄곧 서 있기만 하던 %CHARA%(이)가 갑자기 지팡이를 휘둘러 %YOU%를 가리킨다"
    -
    - "「아……!」"
    - "어째서인지 정말로 잠시 말문이 막혀, 마법에 걸린 것처럼 말을 할 수가 없다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 이제 말 못 하겠지~ 천재 %MOHOSHOJO% 스위피의 마법은 역시 쓸모가 있다니까!」"
    - "단숨에 의기양양한 미소를 짓는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잘 들어, %CALLNAME%! 왜 그렇게 안달인지 나는 모르겠지만,」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피는 이 정도 사소한 마법의 시련에 겁먹지 않아!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「바보 %CALLNAME%는 잘 보고만 있어. 『마법이 뭔지』 보여 줄 테니까!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 흐흥~ 대마법사 스위피를 칭찬하는 사람들 앞에서 어떤 표정을 지을지나 생각해 둬~!」"
    -
    - "대기실에서 준비를 마친 %CHARA%(은)는 코스로 내려간 뒤 줄곧 대열 맨 뒤에 있다"
    - "다른 우마%UMA%들이 들어간 뒤, %SEX%는 또 관객들을 향해 지팡이를 흔들며 무언가 선언하고서 천천히 게이트에 들어갔다"


re_tenn_sho_win_s:
  title: "텐노상(가을) 후·앞으로 나아가는 마법"
  lines:
    - "%CHARA%(은)는 %SEX%가 말한 대로 텐노상(가을)에서 멋지게 우승했다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「봐 봐! 이게 바로 『마법』의 힘이야!」"
    - "우승기를 단정하게 두르고도 시상대에서 그렇게 떠들고 있다"
    -
    - "그 뒤에도 늘 그렇듯 기자 회견에서 「마법」의 감각에 대해 떠벌린다"
    - "시끄럽게 구는 기자들에게는 거리낌 없이 화를 낸다"
    - "하나하나 레이스 후 일정을 모두 마친다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%, 오늘 주인님 어땠어?」"
    - "나란히 돌아가는 길을 걸으며, 기대에 찬 눈으로 %YOU%의 대답을 기다린다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「미리 말해 둘게! 주인님이 대회에서 이겼으니까 절~대로 혼내면 안 돼!」"
    -
    - "이런 부탁에 어떻게 대답할까——"
    - acc: 1
      content: "「정말 잘했어.」"
      lines:
        - "「이제 디저트가 먹고 싶으면 원하는 만큼 먹어도 되겠지——」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……뭐야! 원하는 만큼이라니, 꼭 『끝』난 것처럼 말하지 마!」"
        - "%YOU%의 대답이 조금 못마땅한 듯 걸음을 멈춘다"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내 %CALLNAME%로서 그런 태도는 용납 못 해!」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「왜냐하면 앞으로…… 더 중요한 『마법』을 쓸 거니까.」"
        - "%YOU%(과)와 눈이 마주친다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%! 명령이야. 주인님이 이번에 이겼더라도,」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「앞으로도 주인님을 더 똑똑히 지켜봐!」"
        - "어딘가 『마법』이 깃든 듯한 %CHARA%의 눈은 그저 확고하게 %YOU%를 바라본다"
    -
    - "다음 레이스는 「엘리자베스 여왕배」."
    - "시니어급이 된 지금, 다시 이 레이스에 나가면 어떤 일이 생길까——"
    - "앞으로 어떻게 되든, %YOU%는 그저 『믿을』 생각이다"


re_tenn_sho_lose_s:
  title: "텐노상(가을) 후·약속의 마법"
  lines:
    - "%CHARA%(은)는 안타깝게도 텐노상(가을)에서 패배했다"
    - "패자로서 레이스 후 일정을 마치고, %YOU%(과)와 %CHARA%(은)는 그저 돌아가는 길을 걷는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아~ %CALLNAME%, 오늘 주인님 어땠어?」"
    - "그저 조용히 곁을 걸으며 기대에 찬 눈으로 %YOU%의 대답을 기다린다"
    -
    - "평소처럼 위로해 주면 된다"
    - acc: 1
      content: "「스윕, 오늘도 정말 잘했어.」"
      lines:
        - "위로의 말을 듣자 %CHARA%의 귀가 곧바로 쫑긋 선다"
        -
        - "하지만 좋은 말만 해 주면 너무 응석을 받아 주는 셈이다"
        - acc: 1
          content: "「그런데 %CALLNAME%는 한마디 더 할 게 있어.」"
          lines:
            - "%YOU%는 말을 덧붙인다"
            - "「이번에는 졌으니까 다음 레이스를 위해 디저트는 조금 줄이자.」"
            -
            - "쫑긋 섰던 %CHARA%의 귀가 조금 처진다"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「으으~! 주인님은 위로해 달랬는데 왜 그런 이야기가 나오는 거야??」"
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「흥! 됐어! %CALLNAME%의 충고니까 주인님도 일단 들어 줄게!」"
            -
            - "%CHARA%(은)는 걸음을 멈추고 지팡이를 꺼내 제멋대로 휘두르기 시작한다"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「박스우드★펀, 욕망아 사라져라!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「좋아! 이제 주인님은 절~대로 디저트를 너무 많이 먹지 않을 거야!」"
            -
            - "그러더니 갈색 머리의 작은 %UMA%는 보랏빛 눈으로 %YOU%(과)와 눈을 맞춘다"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「대신…… 다음 『그』 레이스에서는 %CALLNAME%가 제대로 지켜봐야 해!」"
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「%CALLNAME%는 내가 마법을 쓰고, 스퍼트를 올리고, 가장 먼저 골인하는 모습을,」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「하나하나 전부 머릿속에 새겨 둬.」"
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그래야 주인님이 『디저트』를 포기한 보람이 있지!」"
    -
    - "어째서인지 패배했는데도 분위기는 의외로 가볍다"
    - "하지만 그 가벼운 분위기 속에서도, 어딘가 『마법』이 깃든 %CHARA%의 눈빛은 여느 때처럼 확고하다"
    - "다음 레이스가 어떻게 되든, %YOU%는 그저 『믿을』 생각이다"


rs_eliz_cup_s:
  title: "엘리자베스 여왕배·기적의 스타게이저 릴리"
  lines:
    - "어느새 『마녀의 밤』이 열린 지 일 년이 다 되어 간다"
    - "%CHARA%(은)는 이미 시니어급에서 수많은 레이스를 경험했다"
    - "다시금 이 『시니어의 상징』을 맞이하면 과연 어떻게 될까"
    -
    - "어떤 준비를 해 왔든, 이 순간에 더 많은 말은 필요 없다"
    - acc: 1
      content: "「만들어 봐. 『너만의 마법』을.」"
    - "지하 통로에서 %CHARA%에게 그렇게 말할 뿐이었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……왜 갑자기 그렇게 감동적인 말을 하는 건데!?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아까까지는 주인님한테 게이트에 좀 더 일찍 들어가라고 혼냈으면서??!」"
    - "아무튼 조금 심통이 난 %CHARA%(과)와 간단히 인사를 나누고 관중석으로 향한다"
    -
    - "패독을 천천히 걷는 %CHARA%(은)는 이따금 관객들을 바라본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……! 그랜마!?」"
    - "%CHARA%(이)가 갑자기 무언가 외치더니 한 곳에 뚜렷이 시선을 모은다"
    -
    - "조금 떨어진 다른 관중석에 우마무스메 할머니가 그저 미소를 지으며 서 있다"
    - "%CHARA%의 시선을 알아차린 듯 가볍게 손을 흔든다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……흥!」"
    - "할머니가 손을 흔들자마자 곧바로 고개를 옆으로 돌린다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말, 뭐가 대마법사야! 마법을 조금 더 많이 쓸 수 있을 뿐이잖아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러면서 천재 %MOHOSHOJO% 스위피를 몰래 훔쳐보다니!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안됐네, 그런 잔재주가 전부라면——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앞으로 모두가 알게 될 마법의 창시자는 천재 %MOHOSHOJO% 스위피뿐일지도 몰라~」"
    -
    - "%CHARA%(은)는 돌아서서 지팡이를 꺼내, 자신만만한 미소를 띤 채 곧장 %YOU%를 가리킨다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%。」
    -
    - "그리고 우마무스메 할머니를 가리킨다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그랜마.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 여기 있는 모두.」"
    - "지팡이로 관객들을 쭉 훑으며 가리킨다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다들 똑똑히 봐.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지금부터 보여 줄 마법은 절대로, 절대로——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뼛속까지 새겨서 잊지 못하게 해 줄 테니까.」"
    -
    - "모든 시선이 쏠린 가운데 중얼거리던 %CHARA%(은)는 대열 맨 뒤에서 천천히 게이트에 들어간다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "상태를 얻었다: "
        - content: "[믿음의 기적 마법]"
          title: "만들어 낸 「기적」이야말로 마법"
        # 全能力+20%


re_eliz_cup_win_s:
  title: "엘리자베스 여왕배 후·기적과 지금"
  lines:
    - "정말 『마법』이었을까, 아니면 『기적』이었을까. 어쨌든 %CHARA%(은)는 엘리자베스 여왕배에서 우승했다"
    - "아무리 의심하는 목소리가 있었어도, 이 명백한 질주 앞에는 놀라움 섞인 찬사만이 남는다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「후후…… 역시 천재 %MOHOSHOJO%는 뭐든 할 수 있구나……」"
    - "멀리 있는 우마무스메 할머니는 이쪽을 바라보며 미소 짓고 고개를 끄덕이며 무언가 혼잣말을 한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후…… 후…… 하…… 역시…… 역시 이거야……」"
    - "레이스가 막 끝난 코스에서 숨을 고르며, %CHARA%(은)는 주위의 함성을 듣고 있다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『나의 마법』…… 당연히 너희 모두에게 알려 줄 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『마법』의 가치. 『마법』의 존재. 내가…… 『대마법사』가 될 자격이 있다는 걸 증명할 거야.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%! ……오늘 주인님 어땠어?」"
    - "얼마 쉬지도 않고, %CHARA%(은)는 %YOU%를 보자마자 이미 코스 밖으로 내려와 있던 %YOU%에게 달려온다"
    - "보랏빛 눈으로 %YOU%의 눈을 똑바로 바라보며 %YOU%의 대답을 기다린다"
    -
    - acc: 1
      content: "(생각해 보자. 이번에는 어떻게 대답해야 할까——)"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「흥! 말 안 해도 돼! 주인님은 이미 다 아니까!」"
        - "아직 할 말을 고르는 %YOU%의 입술을 보고, %CHARA%(은)는 그저 %YOU%의 생각을 끊는다"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어차피 %CALLNAME%는 온종일 똑같은 칭찬만 하잖아!」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그러면…… 주인님이 돌아가면……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「잊지 마! 주인님한테 디저트 사 와!」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「안 그러면—— 안 그러면 주인님이——」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「벌로 %CALLNAME%한테 주인님이 산 디저트를 먹일 거야! 메롱!」"
        - "갑자기 %YOU%에게 메롱을 한 뒤, %CHARA%(은)는 돌아서서 떠나간다"
    -
    - "그 뒤 %CHARA%(은)는 레이스 후 일정을 제대로 마치고 %YOU%(과)와 함께 학원으로 돌아왔다"
    - "그저 함께 트윙클 시리즈의 소중한 하루하루를 이어 간다——"


re_eliz_cup_lose_s:
  title: "엘리자베스 여왕배 후·매 순간의 기적"
  lines:
    - "그토록 노력하고 준비했지만,"
    - "%CHARA%(은)는 안타깝게도 시니어급 엘리자베스 여왕배에서 패배했다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그랜마!」"
    - "레이스가 끝나자 %CHARA%(은)는 코스 밖으로 내려와 있던 우마무스메 할머니에게 달려갈 뿐이었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! 오늘 나…… 어땠어?」"
    - "할머니에게 그렇게 묻고 기대에 찬 눈으로 바라본다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「후후…… 천재 %MOHOSHOJO%는 언제나, 물론 최고지.」"
    - "미소를 지으며 조용히 대답한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만…… 나 레이스에서 졌어……」"
    - "귀가 조금 처진다. 살짝 낙담한 듯하지만 그 이상 큰 반응은 없다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「이번 대회에서는 졌을지도 모르지……」"
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「하지만 천재 %MOHOSHOJO%의 목표는 분명 그것만이 아니잖니?」"
    - "우마무스메 할머니는 눈앞의 작은 %UMA%를 바라보며 미소 지을 뿐, 더는 아무 말도 하지 않는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……흥! 물어볼 것도 없잖아!」"
    - "갑자기 고개를 옆으로 돌리더니 잠깐 눈을 감는다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피는 여기서 멈추지 않을 거야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그랜마는 내가 『대마법사』가 될 때까지 계속 지켜봐 줘야 해!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%!」"
    - "곁에 있는 %YOU%를 돌아본다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아까 내가 어땠든…… 네가 『형편없다』고 생각하더라도……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「주인님을 기운 나게 해 줘!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「넌 내 %CALLNAME%야. 내가 세계 최고의 『대마법사』가 될 때까지 어디도 가면 안 돼!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「앞으로도 머리를 짜내서 내 컨디션을 최고로 만들어 줘! 알겠어!!」"
    -
    - "레이스에서는 졌지만, %CHARA%의 마법은 그 때문에 흩어지지 않았다."
    - "레이스 후 일정을 제대로 마치고 %YOU%(과)와 함께 학원으로 돌아간다"
    - "그저 함께 트윙클 시리즈의 소중한 하루하루를 이어 간다——"

rs_arim_kin_s:
  title: "아리마 기념 전·마지막 마법?"
  lines:
    - "아리마 기념. 일본 전역의 관심이 집중되는 시니어급 장거리 G1이다"
    - "이토록 주목받는, %CHARA%(이)가 꿈꿔 왔을 법한 레이스에서——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어 싫어 싫어!!! 언제 장거리 레이스에 출전 신청을 한 거야!!!」"
    - "나카야마 경기장의 게이트 옆에, 드물게도 트레이너와 %UMA%가 함께 모습을 드러냈다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "스태프"
        - "「스윕 씨, 더 늦게 게이트에 들어가면 다른 우마%UMA%들에게도 지장이 생겨요!」"
    - "스태프는 고개를 기울이며 조금 떨어진 갈색 머리의 자그마한 우마%UMA%를 가리키는 듯했다"
    -
    - "「천재 %MOHOSHOJO% 스위피라면 갑작스러운 출전도 전혀 문제없잖아.」"
    - "계속해서 %CHARA%(을)를 설득한다"
    - "「게다가 모두에게 『마법은 있다』는 걸 알려 주고 싶다면——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    - "역시 이 방법은 통한다. 귀가 쫑긋 선다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ %CALLNAME%도 가끔은 믿음직하네~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇다면 대마법사로서, 천재 %MOHOSHOJO% 스위피인 내가 모두에게 『나만의 마법』을 보여 줄 필요가 있겠네!」"
    -
    - "%CHARA%(은)는 경기장 모든 관객의 시선을 받으며 게이트에 들어갔다"


# 好感+30、やる気+1、スキルPt+50
ws_christmas_s:
  title: "천재 산타클로스"
  lines:
    - "크리스마스이브에 %CHARA%(이)가 갑자기 %YOU%의 트레이너실로 뛰어 들어온다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%, 따라와!」"
    -
    - acc: 1
      content: "「선물 받으러 가는 거야?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「무슨 소리야, %CALLNAME%. 그거잖아, 당연히 그거!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「크리스마스이브 하면 산타클로스잖아!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「산타클로스는 줄곧 『정체불명』의 존재였어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피라면 오늘 반드시 산타클로스를 찾아내야지!」"
    -
    - "크리스마스이브 외출에 필요한 물건을 간신히 챙긴 %YOU%는 %CHARA%에게 이끌려 학원 밖으로 나간다"
    -
    - "십이월 하순이지만 함박눈이 휘날리는 날은 아니었다"
    - "하얀 눈이 쌓이고 나무 그림자가 겹쳐지며, 거리는 사람들로 가득하고 가로등이 드문드문 빛난다"
    -
    - "이렇게 뜻깊은 날, 평소와 다른 방식으로 밖을 걸어 다니는 것도 나쁘지 않다"
    - "어째서인지 그런 생각이 든다"
    -
    - "하지만……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피가 장담할게! 당신들 집에는 분명 산타클로스가——!」"
    - "그렇게 말하고 집주인의 허락을 받은 %SEX%는 곧장 남의 집으로 들어간다……"
    -
    - acc: 1
      content: "「아아……」"
    - "남의 집에 들어가 돌아다니고, 처음 만난 사람과 스스럼없이 이야기하며, 핼러윈 때처럼 크리스마스 케이크를 졸라 대는 %CHARA%(을)를 보자"
    - "%YOU%는 관자놀이를 문지르고 싶은 충동을 느낀다"
    -
    - "「정말 실례했습니다……」"
    -
    - "「저기…… 괜찮으시면 사과의 뜻으로 이걸……」"
    - "방해를 받은 상대도 즐거워 보이지만, 예의상 떠날 때는 미리 준비한 선물을 집주인에게 건넨다"
    -
    - "제멋대로 길을 안내하는 작은 마녀를 바라보며 생각한다"
    - "크리스마스든 핼러윈이든 이제는 아무래도 좋다. 어쨌든 즐겁게 보내기만 하면 되겠지……"
    -
    - "그 뒤로도 %CHARA%(은)는 끈질기게 이곳저곳 산타클로스를 찾아다니며, 당연하다는 듯 여러 집을 귀찮게 했다"
    -
    - "남들에게 실질적인 피해를 준 건 아닐지도 모른다"
    - "하지만 %YOU%는 목적지도 모르는 길을 따라가며 몇 번이나 현기증을 느꼈다……"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말 정말 정말! 산타클로스 따위를 왜 못 찾는 거야!!」"
    - "한참을 걸어도 원하는 답은 찾을 수 없다"
    -
    - "%CHARA%에게도 %YOU%에게도 이대로는 좋지 않을 것 같다……"
    - "관자놀이를 문지르며 생각한다"
    - "「사실은…… 못 찾는 게 아니라……」"
    -
    - "「왜냐하면……」"
    -
    - "「나도 산타클로스 중 한 명일지도 모르거든??」"
    -
    - "어떤 마음으로 그런 말을 꺼냈는지 모르겠다"
    - "그래도 지금까지 수많은 선물을 나누어 주었으니, 어느 정도 증거는 된다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……뭐? 네가? %CALLNAME%가?」"
    - "잠시 혼란과 놀라움이 스친다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……아, 그런 거였구나. 결국 산타클로스도 이런 녀석이었네.」"
    - "곧이어 깔보는 표정을 짓는다"
    -
    - "그렇게 노골적으로 이 산타클로스를 싫어하지는 않아도 될 텐데……"
    - "「산타클로스는 크리스마스이브에 사람들에게 선물을 나누어 주는 존재잖아……」"
    - "「게다가 듣기로는 처음에는 한 명뿐이었지만,」"
    - "「나중에는 단체가 되어 계속 새 회원이 늘어났대……」"
    - "「나는 아마 신입 회원인 거지.」"
    - "스스로 회원이라고 주장해도 회원은 회원이다. 아무튼 문제없다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐야 그게! 산타클로스가 계속 옆에 있었는데, 심지어 내 %CALLNAME%라니, 시시해!!」"
    - "실망한 눈치다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……잠깐, 산타클로스가 내 %CALLNAME%…… 나는 산타클로스의 주인……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 말은——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「혹시 나도 산타클로스가 될 수 있다는 거야!??」"
    - "갑자기 눈이 반짝반짝 빛난다"
    -
    - "어떻게 거기까지 생각이 이어진 걸까……"
    - acc: 1
      content: "「조금 너무 어리지 않을까……?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「상관없어! %CALLNAME%, 그게 무슨 뜻인지 알아!!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피는 크리스마스이브가 되면 『크리스마스 마법』을 써서, 만인의 존경을 받는 산타클로스로 변신할 수 있다는 뜻이야!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자, 어서! 빨리 같이 선물 나눠 주러 가자! 산타클로스 두 번째!!!」"
    -
    - "굳이 두 번째라고 강조하지는 않아도 되는데……"
    -
    - "아무튼 그 뒤로 함께 많은 사람에게 선물을 나누어 주고, 수많은 감사 인사를 받았다"
    - "곁에 있는 작은 %UMA%는 무척 기뻐 보였다"


# エンディング。3つのG1に勝っていない場合（2G1以下）
ending_majo_journey:
  title: "%MAJO%의 여행"
  lines:
    - "%CHARA%(과)와 트윙클 시리즈에서 함께 달린 삼 년은 순식간에 지나갔다"
    - "그 삼 년 동안 두 사람은 참 많은 일을 함께 겪은 것 같다"
    - "묘한 계약에서 시작해, 진정한 우마%UMA%가 되는 여정으로 나아가고,"
    - "성장하고, 라이벌을 만나고, 강자에게 도전하며 온갖 기묘한 일을 겪었다"
    - "심지어 엄청난 사실까지 알게 된 듯하다——"
    -
    - "그 뒤에도 달리고, 또 달리고……"
    - "마침내 또 얼마의 시간이 흘렀는지 모를 무렵, %CHARA%(은)는 비로소 멈춰 서서 평범하면서도 전혀 평범하지 않은 은퇴식을 마쳤다."
    -
    - "그 뒤——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아. %CALLNAME%.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「따라와.」"
    - "은퇴 후 어느 날, 갑자기 트레이너실로 뛰어들어 당연하다는 말투로 영문 모를 명령을 내린다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어디냐고? 그렇게 꼬치꼬치 묻지 마!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「바보 %CALLNAME%! 천재 %MOHOSHOJO% 스위피가 가는 곳이라면 %CALLNAME%도 당연히 따라와야지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「갈 곳을 안 정한 건 아니거든!」"
    -
    - "이 당당한 태도는 마치 시간이 한참 전으로 돌아가 %YOU%(과)와 %CHARA%(이)가 처음 만났을 때 같기도 하다……"
    - "그래도 이른바 「주인」의 명령이라면, 한가할 때 가볍게 발길 닿는 대로 떠나는 것도 나쁘지 않다"
    - "그렇게 때때로 %CHARA%(과)와 지하철을 타고, 틈틈이 일본 곳곳을 찾아간다——"
    -
    - "한참 전 어느 주말——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐야 뭐야? 이 인형의 머리카락…… 유명한 %UMA%의 머리카락으로 만들었다고……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……싫어 싫어?! %CALLNAME%, 빨리 다음 장소로 가!!」"
    -
    - "한참 전, 또 다른 주말——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내 %CALLNAME%가 이런 것도 모르다니! 여기는 당연히 전설 속 『하늘을 나는 섬나라』지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『하늘을 나는 섬 같은 건 없다』고……? 그런 건 아무래도 좋아!」"
    -
    - "그 뒤, 드물게 시간이 빈 어느 주말——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여기서는 %CALLNAME%든 평범한 사람이든 진실만 말해야 해!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「주인님 마음이 바뀔 때까지는 그게 여기 규칙이야!」"
    -
    - "……그리고 기묘한 만남"
    - color: %COLOR_135%
      content:
        - fontWeight: bold
          content: %STAY%
        - "「아아…… 당신들도…… 여기 오셨군요……?」"
    - color: %COLOR_135%
      content:
        - fontWeight: bold
          content: %STAY%
        - "「아직 일본 안이기는 하지만, 이곳 풍경도 제법……」"
    - "사실 풍경을 보러 온 건 아닌데……"
    -
    - "그렇게 앞으로도 종종 시간을 내어 %CHARA%에게 이끌려 이상한 장소들을 찾아다닌다. 일 때문도, 명예나 이익 때문도 아니다"
    - "그저 느긋하게, %SEX%의 표현을 빌리면—— 「여행」이다"
    - "굳이 목적을 말하자면, 오직—— 「마법」을 위해서다"
    -
    - "온갖 환상으로 물든, 별다른 의미도 없는 집 근처의 여행이 언젠가는 기록될지도 모른다"
    - "트레센 %UMA%의 은퇴 후 일상도, 평범한 %UMA%의 수필 기행문도 아닌,"
    -
    - "어쩌면 이런 환상적인 작품이 될지도 모른다"
    -
    - "—— 「%MAJO%의 여행」"


# エンディング。3つ以上のG1に勝った場合
ending_forever_eyebright:
  title: "영원한 아이브라이트"
  lines:
    - "「저기——」"
    -
    - "「괜찮으시면 참석해 주세요——」"
    - "전화를 건다"
    - "「네, 그렇습니다.」"
    -
    - "「괜찮으시면 참석해 주세요——」"
    - "지나가는 우마%UMA%에게 전단을 나누어 준다"
    - "「부탁드립니다……」"
    -
    - "「괜찮으시면 참석해 주세요——」"
    - "아는 우마%UMA%들을 초대해 본다"
    -
    - "%CHARA%(과)와 트윙클 시리즈에서 함께 달린 삼 년은 순식간에 지나갔다"
    - "그 삼 년 동안 두 사람은 참 많은 일을 함께 겪은 것 같다"
    - "묘한 계약에서 시작해, 진정한 우마%UMA%가 되는 여정으로 나아가고,"
    - "성장하고, 라이벌을 만나고, 강자에게 도전하며 온갖 기묘한 일을 겪었다"
    - "심지어 엄청난 사실까지 알게 된 듯하다——"
    -
    - "그 뒤에도 달리고, 또 달리고……"
    - "마침내 또 얼마의 시간이 흘렀는지 모를 무렵, %CHARA%(은)는 비로소 멈춰 서서 평범하면서도 전혀 평범하지 않은 은퇴식을 마쳤다."
    -
    - "이제 한숨 돌렸다고 생각했다"
    - "그런데 예상 밖의 부탁이 날아왔다——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어 싫어 싫어! 난 대마법사가 되어야 한단 말이야!!!」"
    -
    - "%SEX%는 대마법사가 되고 싶어 한다."
    - "바닥을 구르며 대마법사가 되고 싶다고 조르는 %CHARA%(을)를 보며, %YOU%는 그저 식은땀을 흘린다"
    -
    - "대마법사, 대마법사…… 어떻게 해야 할까?"
    -
    - "아마 이렇게 하면——"
    -
    - "트레센 학원에 햇살이 환하게 내리쬐는 어느 날"
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - "「이로써 당신을 마법의 대가로 인정합니다!」"
    - "%CHARA%(은)는 정성껏 꾸민 수여식 단상에 서 있고, 곁에서는 %FUJI%(이)가 예의를 갖춰 소개하고 있다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "지나가던 %UMA% A"
        - "「들었어? 저 %UMA%는 전설적인 달리는 마법을 가진 사람 중 하나래……」"
    - "초대받지는 않았지만 우연히 지나가던 %UMA%들이 서로 이야기를 나눈다"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "지나가던 %UMA% B"
        - "「뭐!? 정말!? 그래서 대마법사로 인정받은 거구나!」"
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "지나가던 %UMA% B"
        - "「부럽다! 나도 언젠가 달리는 마법을 배우고 싶어……!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 알고 있었어. 천재 %MOHOSHOJO% 스위피의 마법은 반드시 인정받을 거라고!」"
    -
    - "%ZOB_ZOY%(은)는 단상 아래에서 %CHARA%(이)가 직접 쓴 마법 홍보 책자를 두고 다른 사람들과 이야기하고 있다"
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - "「고전 문학과는 작풍이 다르지만…… 독자적인 견해도 담겨 있네요.」"
    - content:
        - fontWeight: bold
          content: "갈색 머리의 자그마한 우마%UMA%"
        - "(반은 의아하고 반은 호기심 어린 눈으로 돌아가며 읽는 마법 소책자를 보고 있지만, 읽을 수 없어 조금 망설인다)"
    -
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "지나가던 %UMA% C"
        - "「저기…… %ZOB_ZOY% 선배……」"
    - "이쪽도 곤란한 표정이다"
    - color: #対応キャラの色
      content:
        - fontWeight: bold
          content: "지나가던 %UMA% C"
        - "「마법 서적에도 박식하시다고 들었는데, 무슨 내용인지 알려 주실 수 있나요?」"
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - "「겉으로는 조금 복잡해 보이지만…… 다른 책의 내용과 연결하면 전혀 어렵지 않아요!」"
    - "신이 난 모양이다"
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - "「그러니까…… 이 저작은 『마리베르트』의 마법 체계를 따르지만, 원래의 흐름으로는 전혀 설명하지 않는 거예요——!」"
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - "「이러이러해서, 저러저러하게——」"
    -
    - "%ZOB_ZOY%(이)가 온갖 자료를 인용하며 거침없이 설명하자, 단상 위 작은 %UMA%를 포함한 모두에게 미묘한 침묵이 내려앉는다……"
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - "「그러니까 이 구절은——!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어 싫어 싫어! 그러니까 여기는 원래 내 무대잖아!」"
    - "마침내 말을 끊는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사——역——마——!! 빨리 올라와!!!」"
    - "%CHARA%의 부름에 %YOU%는 서둘러 단상으로 올라갈 수밖에 없다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「손 내밀어. 지팡이를 잡아.」"
    - "모두가 지켜보는 앞에서 %YOU%는 %CHARA%의 지팡이에 손을 포갤 수밖에 없다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「같이 외치는 거야——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마법을—— 위하여!!!」"
    -
    - acc: 1
      content: "「마법을…… 위하여!!」"
    - acc: 2
      content: "「마법을…… 위하여??」"
    - "그 자리에 있던 모두가 일제히 그 말을 외친다"
    -
    - "도대체 어쩌다 이 작은 %UMA%의 소동 때문에 세상이 점점 마법으로 가득해진 걸까……"
    - "%YOU%는 아무리 생각해도 알 수 없다"
    -
    - "모르겠다면 받아들일 수밖에 없다"
    -
    - "이 「마법」으로 가득한 세상을."

be_dull_dream:
  title: "평범한 꿈"
  lines:
    - "아마 이것도 하나의 결말일 것이다."
    - "어떤 직업이든 결국 끝은 있다."
    -
    - "%YOU%는 중앙 트레이너로서 상사의 눈치를 보지 않아도 된다는 사실을 다행으로 여겼다"
    - "트레센이라는 이상적인 곳에서는 직장의 여러 폐해를 걱정하지 않아도 될 것 같았다"
    - "그러나 그것은 결국 %YOU%의 상상에 불과했다"
    -
    - "위기."
    - "어째서 일어난 걸까? %YOU%는 모른다."
    - "%YOU%가 아는 것은 어느 날 아침 일어나 보니 「능력이 클수록 책임도 커야 한다」는 말이 갑자기 언론을 뒤덮었다는 사실뿐이다"
    - "인터넷에서는 %YOU%의 온갖 일을 두고 격렬한 논쟁과 심지어 욕설까지 이어지고 있다"
    -
    - if: era.get('flag:当前声望') > 500
      content: "지금껏 쌓아 온 %YOU%의 명성이 적잖은 비난을 보이지 않는 곳에서 막아 주고 있어도,"
    - if: d.team_count > 1
      content: "%YOU%의 팀에 속한 우마%UMA%들이 최선을 다해 %YOU%를 옹호해도,"
    - "선동된 팬들은 여전히 %YOU%의 담당 우마%UMA%들이 더 좋은 지원을 받고 더 나은 성적을 거뒀어야 한다고 생각한다"
    - "즉——"
    - "%YOU%는 직무를 태만히 했다는 것이다."
    -
    - "이 고발이 사실인지는 둘째 치고, 트레센 측은 몹시 골치 아픈 태도를 보였다"
    - "이사회 내부에서는 논쟁이 끊이지 않지만, 한쪽 파벌이 확실히 우세하다"
    - "그들은 단 하나의 요구를 고집한다"
    - "—— 「%TITLE% 트레이너」인 %YOU%를 중앙 트레이너 명단에서 제명하라."
    -
    - "아키카와 이사장은 끝까지 그 제명 통지서에 자신의 이름을 쓰려 하지 않았다"
    - "하지만 제명 통지서에는 어째서인지 아키카와 이사장보다 더 무게 있는 이름이 올라와 있었다—— 학원의 전 이사장이었다."
    -
    - "누가 서명했는지, 어떻게 했는지는 어쨌든,"
    - "결국 담당 %UMA%들과 헤어질 때가 온 모양이다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……왜?」"
    - "이 사실을 알게 된 %CHARA%(은)는 의외로 차갑게 질문 하나만 던진다"
    -
    - acc: 1
      content: "「설명에 따르면 『직무 태만』이래. %CALLNAME%가——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그걸 묻는 게 아니야.」"
    - "설명을 가로막는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……누가 그랬어?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「할아버지들? 평범한 인간들 무리? 아니면——」"
    - "예상 밖의 말을 꺼낸다"
    -
    - acc: 1
      content: "「아니야…… 아니야……」"
    - "%CHARA%(이)가 직접 꺼낸 말에 %YOU%는 순간 큰 충격을 받아 무의식적으로 부정한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……주인님은 알겠어.」"
    - "어째서인지 어떤 결론에 도달한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 기다려. 주인님 금방 돌아올게.」"
    -
    - "%YOU%가 말을 더 꺼내기도 전에 %CHARA%(은)는 돌아서서 %UMA%의 속도로 멀리 달려 나간다"
    - "그 방향은 분명 학원 고위 관계자들의 회의실이다——"
    -
    - "상황이 더 악화하기 전에 %YOU%는 전력을 다해 학원 회의실 입구로 달려간다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜——?! 내 %CALLNAME%를—— 왜 그런 짓을 해도 되는 건데——!!」"
    - "여러 %UMA%가 힘을 합쳐 막아도 %CHARA%(은)는 여전히 목이 터져라 외친다"
    -
    - "아니, 여러 %UMA%가 동시에 붙잡고 있지 않았다면"
    - "%CHARA%(은)는 정말 안으로 뛰어들어 한바탕 난동을 부렸을 것이다"
    -
    - "얼마 뒤, 정식으로 퇴직하기 전날이 되었다——"
    -
    - "트레이닝장을 나와 교문으로 향하며 트레센 학원과 작별하려는 %YOU%의 뒤를 작은 %UMA%가 줄곧 따라온다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으으…… 으으으……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으으으…… 으으으으……」"
    - "모른 척할 수 없는 소리를 계속 낸다"
    -
    - acc: 1
      content: 「……」
    - "%YOU%는 걸음을 멈추고 돌아서서 이 작은 %UMA%를 바라본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……왜 그렇게 빤히 봐. 안 울거든!」"
    - "%YOU%가 돌아본 것을 알아차리고, 곧바로 어떤 행동을 멈추려 한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「눈에 모래가 들어갔을 뿐이야!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으으…… 으으으으으으……」"
    - "하지만 얼마 지나지 않아 다시 눈을 계속 비빈다"
    -
    - "「괜찮다면……」"
    - "%YOU%는 결국 입을 연다"
    - "「……%CALLNAME%와 한 가지만 약속해 줄래?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……또 뭘 부탁하려고…… %CALLNAME%.」"
    - "붉어진 눈을 비비며 대답한다"
    - # 【魔法の夢】より前の差分
      # 魔法の夢は宝塚のあと。宝塚は毎年第24週、第25週開始で魔法の夢が発火
    # 実際、ファン襲撃は強制BEか育成終了の可能性があり、強制BEには専用結末があるため、この結末は育成終了でしか発火しない。つまり差分は常に魔法の夢のあと
    - if: era.get('cflag:44:育成回合计时') <= 95 + 25
      content: "「기회가 된다면…… 텔레비전에서 다시 보여 줬으면 해.」"
    # 【魔法の夢】より後の差分
    - if: era.get('cflag:44:育成回合计时') > 95 + 25
      content: "「기회가 된다면…… 모두에게 증명해 줬으면 해.」"
    -
    - "「너의 『마법』을——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……알았어, 알았다고!」"
    - "억지로 눈물을 닦은 %CHARA%(은)는 고개를 들어 %YOU%를 바라본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……꼭 볼 거지. 반드시.」"
    - "%YOU%의 대답을 기다리지 않고 %CHARA%(은)는 왼손 새끼손가락을 내민다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「손가락 걸어.」"
    -
    - acc: 1
      content: "새끼손가락을 내민다"
    - "%YOU%(과)와 %CHARA%(은)는 새끼손가락을 걸고 맹세한다. 어기는 사람은 강아지다."
    -
    - "그 뒤의 일은——"
    - "모두 그 뒤의 일이다"
    -
    - "그 후의 인생이 얼마나 빛났든 처참했든, %CHARA%(이)가 그 가능성의 건너편에 도달했든 아니든,"
    - "%YOU%가 기억하는 것은 이것이 중앙 트레센 트레이너로서 %YOU%의 삶이 끝난 순간이라는 사실뿐이다."


######## ランダムイベント ########
# ジュニア級4月以降、ターン終了
# 好感+30～50、スピード&スタミナ+5
we_slave_and_master:
  title: "사역마와 주인"
  lines:
    - "또다시 영문 모를 탐험이다. 훈련 중 쉬는 시간에 %YOU%는 %CHARA%에게 억지로 이끌려 숲에 왔다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%! 빨리 따라와!」"
    - "%CHARA%에게 부지런히 부림을 당하며, 지금 %YOU%(과)와 %CHARA%(은)는 숲속 오솔길을 걷고 있다"
    -
    - "「자연의 마법」에 관한 단서를 찾겠다고 했지만, 두 사람 모두 아는 것은 없다"
    - "숲을 걸으며 주변의 아주 작은 단서라도 찾아볼 수밖에 없다"
    -
    - "걸어갈수록 숲은 점점 울창해진다"
    - "햇빛이 나뭇잎 사이로 스며들어 땅 위에 얼룩진 빛과 그림자를 드리운다"
    -
    - "햇빛이 얼룩진 나무 그늘 아래, 덤불 뒤에서 무언가 부스럭거린다"
    - "그러더니 갑자기 검은 그림자가 튀어나온다——!"
    -
    - "작은 여우였다."
    - "몸을 털고 이쪽을 바라본다"
    -
    - acc: 1
      content: "「여우네……」"
    - "적어도 맹수는 아니다. %YOU%는 한숨 돌린다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여우라니, 대단하지 않아?」"
    - "%CHARA%의 생각은 전혀 다른 모양이다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「일부러 내 앞까지 오다니, 천재 %MOHOSHOJO% 스위피에게 관심이 생겨 내 %CALLNAME%가 되고 싶은 게 틀림없어!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥! 천재 %MOHOSHOJO%에게 %CALLNAME%가 딱 한 명뿐일 리 없잖아. 이런 천재일우의 기회를 놓칠 순 없지!」"
    -
    - "%CHARA%(은)는 마법 지팡이를 꺼내 휘두른다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아이리스★이포모이아, 나의 %CALLNAME%가 되어라!」"
    -
    - "여우는 그저 가만히 바라본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아이리스★이포모이아, 나의 %CALLNAME%가 되어라!!!」"
    -
    - "여우는 몸을 긁는다"
    - acc: 1
      content: "「아무래도 네 %CALLNAME%가 되고 싶지는 않은 것 같은데……」"
    - "꿈쩍도 하지 않는 여우를 보며 %YOU%는 조금 난감하게 말한다"
    -
    - "%YOU%가 그렇게 말하자, 얌전히 서 있던 여우가 묘하게 %YOU%에게 관심을 보인다"
    - "몸을 낮추더니 %YOU%에게 달려든다……!"
    -
    - 「……！」
    - "하지만 어째서인지 긴장해서 내민 %YOU%의 두 팔 위로 뛰어오를 뿐이었다"
    - "결국 %YOU%가 두 손으로 안은 품 안에서 조용히 머문다. 잠든 것 같다"
    - acc: 1
      content: "「이 여우도 마법을 쓸 수 있나 봐……」"
    - "품 안에서 가볍게 비비적대는 여우를 느끼며 %YOU%는 묘한 편안함을 느낀다"
    -
    - "어째서인지 그 말을 듣자, 시큰둥하게 바라보던 %CHARA%의 눈동자가 움츠러들고 귀가 쫑긋 선다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「! 싫어 싫어 싫어! 넌 오직 내 %CALLNAME%잖아!!!」"
    -
    - "%CHARA%(은)는 %YOU% 앞으로 달려들어, 품 안의 여우와 %YOU%를 두고 다툰다"
    - "결국 여우는 당연히 놀라서 빠져나가고, 순식간에 숲속으로 사라졌다……"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%, 날 보고 대답해! 난 너한테 뭐야!」"
    - "%CHARA%(이)가 다급하게 묻는다"
    -
    - acc: 1
      content: "「주인님.」"
    - acc: 2
      content: "「담당…… 주인님.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후…… 깜짝 놀랐잖아……」"
    - "한숨을 내쉰다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잘 들어, %CALLNAME%. 앞으로 동물한테 길들여지면 안 돼, 알겠어!」"
    - "애초에 사람이 어떻게 동물에게 길들여진다는 걸까…… 이해하지 못한 %YOU%는 일단 %CHARA%의 부탁을 받아들였다"


# ジュニア級4月以降、ターン開始
# 好感+30～50、スタミナ&根性+5
ws_phalaenopsis:
  title: "단 한 송이의 호접란"
  lines:
    - "%CHARA%(이)가 꽃에 관심이 있을지도 모른다는 생각에 %CHARA%(을)를 꽃집으로 데려간다"
    -
    - "꽃집의 붉은 장미들에 %CHARA%의 시선은 한순간도 머물지 않는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜 그래, %CALLNAME%? 왜 이런 어디에나 있는 꽃을 보여 주는 거야?」"
    -
    - "수없이 피어난 히아신스가 눈앞에 나타나도 %CHARA%(은)는 덤덤하다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어! 어차피 마력도 없는 꽃이잖아?」"
    -
    - "눈앞에 가득한 푸른 장미를 보아도 %CHARA%(은)는 동요하지 않는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건 마녀의 꽃이 아니야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 한 송이뿐이라고.」"
    -
    - "결국 조금도 관심이 없는 모양이다……"
    -
    - "아무튼 여기까지 왔으니 빈손으로 돌아갈 수는 없다"
    - "%CHARA%(이)가 미묘한 눈빛을 보내도, %YOU%는 호접란 화분 하나를 샀다"
    -
    - acc: 1
      content: "「말을 걸어 주면 네가 가르치는 마법을 조금은 이해할지도 모르잖아?」"
    - "그렇게 말한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥.」"
    - "대놓고 깔보는 표정을 지으면서도 %CHARA%(은)는 %YOU%가 산 화분을 받아 든다"
    -
    - "돌아오는 길에 이따금 꽃에게 영문 모를 이야기를 하는 %CHARA%"
    - "그 뒤로는 드물게도 기숙사에서 호접란을 정성껏 돌보았다……"


# ジュニア級4月以降、ターン開始
# 好感+20～30
# プレイヤー体力+100、気力+200
ws_witch_potion:
  title: "마녀의 마법약"
  lines:
    - "평범한 어느 날, %YOU%는 트레센 학원 운동장을 걷고 있다"
    - "멀리서 작은 %UMA%가 맹렬한 속도로 %YOU%에게 달려온다"
    - "%SEX%의 손에는 꿈틀거리며 묘하게 흐르는 초록색 물질이 든 유리병이 들려 있다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%~! 빨리 마셔, 빨리 마셔——!」"
    - "곁에 오자마자 대뜸 기묘하기 짝이 없는 말을 한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피가 발명한 이 약을 마시면…… 숲이 너와 함께할 거야!」"
    -
    - "%CHARA%(은)는 유리병을 흔들며, 진하고 수상한 초록색 약을 온 힘을 다해 %YOU%에게 권한다"
    - "뜨거워 보이지는 않는데, 어째서인지 안에서는 여전히 무언가 끓어오르는 것 같다"
    -
    - acc: 1
      content: "「어디서…… 만든…… 거야……?」"
      lines:
        - "%YOU%는 그 말을 더듬더듬 내뱉을 뿐이었다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「당연히 기숙사에서지.」"
    - acc: 2
      content: "「이건…… 어디서…… 가져온…… 거야……?」"
      lines:
        - "%YOU%는 그 말을 더듬더듬 내뱉을 뿐이었다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내가 직접 발명했어.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALL_5%가 어디서 구해 온, 딱 봐도 날 적당히 달래려는 낡은 쇠 냄비에 마법을 걸었더니,」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「주인님도 기숙사 주방에서 질 좋은 약을 만들 수 있게 됐지!」"
    -
    - "기숙사 사감의 허락까지 받은 건가……"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이야기는 그만! %CALLNAME%, 우선 이게 어떤지 시험해 봐!?」"
    - "%CHARA%(은)는 약병을 %YOU% 앞으로 더 들이민다——"
    -
    - "결국 %YOU%는 그 짙은 초록색 액체를 천천히 목으로 넘겼다"
    - "그러자 곧 트레센 학원 운동장에 드넓은 숲과 끝없는 정령들이 보이는 것 같았다"

# ジュニア級4月以降、ターン終了
# 好感+20～30、賢さ+10
we_sweet_carrot:
  title: "세상에서 가장 달콤한 당근"
  lines:
    - "「옛날 옛적에 토끼 한 마리가 살았어."
    - "토끼에게는 토끼 할머니가 있었는데, 할머니는 매일 밖에 다녀와서 %SEX%에게 아주 달콤한 당근을 몇 개씩 주었지."
    - "그러던 어느 날 토끼는 생각했어. 할머니가 이렇게 달콤한 당근을 찾을 수 있다면 자기도 찾을 수 있을 거라고."
    - "그래서 집을 나섰어."
    -
    - "토끼는 길에서 여우 한 마리를 만났어."
    - "여우가 말했어. 그렇게 빨리 달릴 수 있으면서 왜 세상에서 가장 달콤한 당근을 찾으려는 거야?"
    - "토끼가 말했어. 당근은 정말 달콤해. 먹어 보면 알 거야."
    - "여우가 말했어. 난 당근 안 먹어."
    - "토끼가 가지고 있던 당근을 여우의 입에 밀어 넣자, 여우는 달콤하다고 말할 수밖에 없었지."
    -
    - "토끼는 여우를 데리고 세상에서 가장 달콤한 당근을 계속 찾아다녔어."
    - "토끼는 늘 너무 빨리 달려서, 뒤를 돌아볼 때마다 숨을 헐떡이며 따라오는 여우를 혼냈지."
    - "마침내 둘은 어느 산에서 전설 속 가장 맛있는 당근을 찾아냈어."
    - "토끼는 기뻐하며 집에 가져가 토끼 할머니에게 보여 드렸어."
    - "토끼 할머니는 미소를 지으며 둘을 부엌으로 데려가, 토끼와 여우를 위해 맛있는 음식을 만들어 주겠다고 했어."
    -
    - "토끼는 기다리고 또 기다리다가 조바심이 났어."
    - "살며시 부엌에 다가가 보니, 토끼 할머니가 몰래 당근을 바꾸고 있었지."
    - "토끼가 가져온 당근은 어느새 할머니 텃밭에 심겨 있었어."
    -
    - "가장 달콤한 당근은 처음부터 토끼 할머니의 텃밭에 있었던 거야."
    - "토끼 할머니는 언제나 동이 트기 전에 몰래 나가 당근에 가장 신선한 이슬을 뿌려 주었고,"
    - "토끼 할머니는 언제나 동이 트기 전에 몰래 나가 당근에 줄 가장 좋은 거름을 찾았어."
    - "토끼 할머니는 여우에게 토끼를 데리고 모험을 떠나 달라고 부탁해서, 이곳의 비밀을 알아차리지 못하게 했던 거야."
    -
    - "토끼는 결심했어."
    - "자기 손으로 당근밭을 만들겠다고."
    - "매일 가장 신선한 이슬을 뿌리고 가장 좋은 거름을 주며 가꾸는 거야."
    - "여우에게 동이 트기 전에 자기를 깨우게 하고, 밖으로 끌고 나가 가장 달콤한 당근을 만드는 방법을 찾아다녔지."
    - "그러면서도 매일 토끼 할머니에게 가장 달콤한 당근을 먹고 싶다고 졸랐어."
    - "마침내 당근밭에 결실이 맺혔을 때, 여우를 비롯한 작은 동물들은 모두 인정했어."
    - "토끼가 기른 당근이야말로 세상에서 가장 달콤한 당근이라고——」"
    -
    - acc: 1
      content: "「대충 이런 이야기야.」"
    - "이야기를 듣고 싶다는 %CHARA%의 갑작스러운 요구를 마침내 들어주었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……이게 끝이야?」"
    - "그런데 몹시 불만스러워 보인다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐야…… 싫어, 재미없어! 고양이 마법사가 마법 물고기를 찾는 이야기로 바꿔도 똑같잖아!!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사——역——마——!!! 다른 이야기는 없어?!!!」"
    -
    - "%CHARA%의 요구에 %YOU%는 이야기책에서 다른 이야기를 찾아 %CHARA%에게 들려줄 수밖에 없었다……"


# クラシック級以降、ターン終了
# +下校後のスペシャリスト
we_in_school:
  title: "수업 중의 즐거움"
  lines:
    - "평범한 평일, %YOU%는 언제나처럼 길을 걷고 있다"
    -
    - "맞은편에서 낯익은 갈색 머리의 작은 %UMA%가 다가온다——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, %CALLNAME%. 마침 찾고 있었어.」"
    -
    - "%CHARA%다. 마침 오늘 훈련 계획에 관해 %SEX%와 이야기해야 했다"
    - "%YOU%는 고개를 들어 머리 위의 태양을 보고, 곁에서 %UMA%들이 빼곡히 앉아 있는 교실 건물을 바라본다"


wis_loop:
  -
  - acc: 1
    content: "(꽤 일찍 왔네.)"
    lines:
      - "%CHARA%의 평소 성격을 생각하면 이렇게 일찍 와 준 것만으로도 고마운 일이다"
      - "그런데 뭔가 이상하지 않나??"
  - acc: 2
    content: "(%UMA%들도 수업 부담이 꽤 크구나.)"
    lines:
      - "%CHARA%(은)는 수업을 제대로 듣고 있을까. 의외로 얌전한 면도 있을지 모른다"
      - "그런데 뭔가 이상하지 않나??"
  - acc: 3
    content: "「지금 수업 시간 아니야——??」"
    lines:
      - "문제를 깨달은 %YOU%는 곧바로 소리를 높인다"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「쉿——!!!」"
      - "%CHARA%(은)는 급히 달려와 양손으로 %YOU%의 입을 막는다"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%! 왜 그렇게 큰 소리로 말해!!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「선생님이 오시면 나 돌아가야 하잖아!?」"
      -
      - "수업을 빼먹고 있다는 걸 알고 있었나!?"
      -
      - acc: 1
        content: "「수업…… 안 들어갔어??」"
        lines:
          - "%YOU%는 목소리를 조금 낮춰 묻는다"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「수업을 안 듣는 게 아니야!」"
      - acc: 2
        content: "「……기어이 수업을 빼먹은 거야??」"
        lines:
          - "%YOU%는 목소리를 조금 낮춰 묻는다"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐가 땡땡이야! 장소를 옮겨서 마법을 배우는 것뿐이야!」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그러니까 영어 수업에 굳이 교실에 있을 필요가 있어?」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「무슨 말인지 전부 아는데, 맨날 마법이랑 상관없는 지루한 이야기뿐이잖아.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그 시간이면 새로운 마법을 하나 더 익힐 수 있다고!」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 오늘 훈련은 뭐야? 빨리 알려 줘!」"
      -
      - "훈련에는 좋은 일이지만, %CHARA%의 선생님은 어떻게 생각하실까……"
      - "나중에 %CHARA%(이)가 영어 시험에서 매번 전설적인 만점을 받는다는 것을 알고, %SEX%를 조금 다시 보게 되었다"


# クラシック級以降、一緒にゲーム
# 好感+20～30、賢さ+10、Pt+50
og_phantom_thief:
  title: "천재 괴도 스윕"
  lines:
    - "%CHARA%(과)와 함께 롤플레잉 게임을 하고 있다"
    - "화면에 멋진 클로즈업 애니메이션이 흐르자, %CHARA%(은)는 게임의 핵심 설정에 큰 관심을 보였다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뒤틀린 욕망을 훔쳐서 개심시킨다니…… 뭐야 뭐야! 이거 마법이잖아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이렇게 대단한 마법을 게임 속에서만 일어나는 일로 두다니, 너무 아깝잖아?!」"
    - "%SEX%는 컨트롤러를 내려놓고 조금 불만스레 중얼거린다"
    -
    - acc: 1
      content: "「현실에서는 게임처럼 사람 마음속에 잠입하기 어려우니까……」"
    - "%YOU%는 상식적인 말로 %SEX%에게 대답해 본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「바보 %CALLNAME%! 네가 못 한다고 천재 %MOHOSHOJO% 스위피도 못 하는 건 아니야!」"
    - "오히려 묘한 승부욕을 자극한 것 같다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마법이라면 현실에서도 반드시 재현할 수 있어!」"
    - "%CHARA%(은)는 화면을 보며 잠시 생각하더니 천천히 %YOU%에게 시선을 돌린다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%, 잘 들어! 주인님이 아주 좋은 마법 의식이 떠올랐어!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「넌 내 %CALLNAME%니까 당연히 주인님과 함께해야겠지? 이렇게 하는 거야——」"
    -
    - "새로운 날, 가면을 쓰고 당당하게 트레센 학원 안에 나타난다"
    - "……두 사람은 %KITA% 앞에서 미리 연습한 포즈를 함께 취하고 있다"
    -
    - acc: 1
      content: "「나는…… 조커.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「나는…… 스윕.」"
    -
    - color: %COLOR_68%
      content:
        - fontWeight: bold
          content: %KITA%
        - "「? 저, 저는…… 블랙!??」"
    - "영문도 모른 채 대답한다"
    -
    - "%KITA%에게 미리 준비한 가면을 나누어 준다"
    -
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「셋, 둘, 하나——」"
    - acc: 1
      content: "「우리는 전설의 『괴도단』.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「세상 사람들이 『속세』에 물들어 뒤틀린 욕망을 훔치기 위해——」"
    - color: %COLOR_68%
      content:
        - fontWeight: bold
          content: %KITA%
        - "「사람들이 자신의 의지로 개척하고 선택할 미래를 위해——」"
    -
    - acc: 1
      content: "「순수하고 용감한 『마야』여, 우리는 그대의 도움이 필요하다!」"
    -
    - color: %COLOR_24%
      content:
        - fontWeight: bold
          content: %MAYA%
        - 「？？？？？？」
    - color: %COLOR_24%
      content:
        - fontWeight: bold
          content: %MAYA%
        - "「이게…… 이게 어른이 되는 새로운 방법이야!??」"
    - "양손가락으로 열심히 관자놀이를 누르며 생각하고 있다"
    -
    - "%MAYA%에게 미리 준비한 가면을 나누어 준다"
    -
    - ……
    -
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - "「좋은 이야기로 들리는걸.」"
    - color: %COLOR_5%
      content:
        - fontWeight: bold
          content: %FUJI%
        - "「필요하다면 나도 참가시켜 줘.」"
    - "%FUJI%에게 미리 준비한 가면을 나누어 준다"
    -
    - ……
    -
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - "「저기……」"
    - color: %COLOR_47%
      content:
        - fontWeight: bold
          content: %ZOB_ZOY%
        - "「설정 자료집도 아직 읽지 못해서……」"
    - "그래도 %ZOB_ZOY%에게 가면을 건넨다"
    -
    - ……
    -
    - "해 질 무렵이 되자 「괴도단」은 상당히 거대한 규모로 성장해 있었다"
    -
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: "지나가던 %UMA% A"
        - "「요…… 요즘이 백귀야행 철이야!?」"
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: "지나가던 %UMA% B"
        - "「백귀야행이 뭔데!?」"
    -
    - ……
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아쉽지만 밤이 되면 천재 괴도 스윕도 %SEX%의 본업으로 돌아가야 해.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피로서 마법을 연구하는 거야!!」"
    - "%CHARA%(은)는 %YOU%의 트레이너실에서 제멋대로 일기를 쓰고 있다"
    -
    - "이 끝없는 역할놀이는 언제까지 계속될까"
    - "적어도 이번에는 이틀쯤 지나면 싫증 내겠지……"


# クラシック級11月第2週以降、ターン開始
# 好感度+20～30、スキルPt+20
ws_magic_origin:
  title: "마법의 기원"
  lines:
    - "바람도 햇살도 좋은 어느 날, %CHARA%(이)가 또 갑자기 %YOU%의 트레이너실로 뛰어 들어온다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아. %CALLNAME%. 따라와.」"
    -
    - "%YOU%를 지하철에 태운다. 목적지는 %CHARA%의 할머니 집인 모양이다"
    -
    - acc: 1
      content: "「우리…… 뭘 하러 가는 거야?」"
    - "가볍게 묻는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 당연히—— 그랜마를 깜짝 놀라게 하려고!」"
    - "아주 단도직입적으로 대답한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그랜마는 대마법사면서 맨날 말을 뒤집잖아!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번에는 눈치채기 전에 기습해 버릴 거야!!」"
    -
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「후후, 왔구나. 차는 이미 준비해 두었단다.」"
    - "정원의 둥근 탁자 위에 정교한 찻잔들이 놓여 있다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어 싫어 싫어, 내가 올 줄 어떻게 알았어!!」"
    - "예상 밖의 환영에 화가 난 모습을 보인다"
    -
    - "할머니는 미소를 지으며 슬쩍 %YOU%를 바라본다"
    -
    - "그 뒤 %CHARA%, 할머니와 둥근 탁자에 둘러앉아 꽃향기 속에서 차를 마시며 이야기를 나눈다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아, 그랜마. 그거, 아직 안 했잖아? 그거.」"
    - "갑자기 화제를 꺼낸다"
    -
    - "말투도 표정도 일부러 차갑게 하고 있지만, 바라는 것이 무엇인지는 분명하다"
    -
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「아아, 그거 말이구나.」"
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「후후…… 돌아오면 역시 그게 가장 하고 싶구나.」"
    - "%CHARA%의 의도를 바로 알아차린 할머니는 의미심장하게 웃는다"
    -
    - "할머니는 천천히 집에 들어가 서랍을 열고 먼지 쌓인 책 한 권을 꺼내 들고 나온다"
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「그럼 시작해 볼까.」"
    -
    - "하지만 책은 펼치지 않고 그저 먼지만 털어 낸다"
    - "그리고 거침없이 이야기를 시작한다——"
    -
    - "이야기를 들려준다기보다는 실제로 있었는지 모를 경험을 떠올리는 듯하다"
    -
    - "책 속에 나오는 마법사들의 낭만적인 만남,"
    - "옛날부터 전해 내려오는, 아이가 어머니의 병을 고치기 위해 마법약을 구하는 이야기,"
    - "그리고 마법에 관한 순수한 상상——"
    -
    - color: 对应角色颜色
      content:
        - fontWeight: bold
          content: "할머니"
        - "「역시 언제나 할머니가 어릴 적과 똑같구나.」"
    - "어째서인지 웃으며 중얼거리자, 어느새 이야기 시간이 끝나 있었다"
    -
    - "%CHARA%(과)와 돌아가면서 몰래 뒤돌아 집 안의 우마무스메 할머니를 바라본다"
    -
    - "할머니는 책을 들고 천천히 책상 곁으로 가서 서랍을 연다"
    - "하지만 바로 책을 넣지 않고 말없이 표지를 바라본다"
    -
    - "마지막으로 책에 묻은 먼지를 턴 뒤 소중하게 서랍에 넣는다"
    - "서랍 안에는 아직 먼지 쌓인 책들이 많이 있는 것 같다"


# クラシック級11月第2週以降、ターン開始
# スキルPt+50、スタミナ+5、賢さ+5
ws_paper_plane:
  title: "마법의 종이비행기"
  lines:
    - "새로운 날에는 새로운 일이 있다"
    - "특별한 사정으로 학원 고위 관계자들이 %YOU%에게 %UMA%들의 건의 사항을 처리해 달라고 요청했다"
    - "하지만 어디까지 처리해야 하는지는 명확히 말해 주지 않는다"
    -
    - acc: 1
      content: "「아마 이게 『현실』이겠지……」"
    - "학원 관계자와 %UMA%들 양쪽의 사정을 이해하며, %YOU%는 서류를 읽기 시작한다"
    -
    - "그때 트레이너실 문이 열린다——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%, 따라와——」"
    - "%CHARA%다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아——!」"
    - "%YOU%는 바로 %SEX%에게 대답하지 않는다"
    -
    - acc: 1
      content: "「미안한데, 이 서류를 먼저 처리해야 해서……」"
    - "%YOU%는 천천히 고개를 들어, 두껍지는 않아도 제법 쌓인 건의서를 가리킨다"
    - "%CHARA%의 제안을 일단 거절했다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……『서류』? ……평범한 인간들의 『마법 제안』?」"
    - "조금 놀란다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피의 %CALLNAME%가 그런 일에 시달리는 거야??」"
    -
    - acc: 1
      content: "「이건…… 『윗분들』의 지시라서……」"
    - "%YOU%는 그렇게 설명할 뿐이었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「윗분들? 이사장? 대마법사? 천재 %MOHOSHOJO% 스위피보다 대단해?」"
    - "%CHARA%(은)는 압박감을 주는 눈빛으로 이쪽을 바라본다……"
    -
    - "%SEX%를 화나게 하기보다는 %SEX%를 조금 진정시키는 편이 좋겠다……"
    - acc: 1
      content: "「스윕만큼 대단하지는 않지……」"
    - "마음에도 없는 말을 한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그거면 됐어, %CALLNAME%!」"
    - "눈빛이 부드러워지며 곧바로 평온한 상태로 돌아온다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피와 함께라면 이런 잡무에 시달려서는 안 돼!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이런 엉망진창 마법 제안은 이렇게 하는 거야——」"
    - "%CHARA%(은)는 갑자기 책상으로 다가가 서류를 끌어안고 맹렬한 속도로 넘기기 시작한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『화단에 당근 심기 등등』, 『학원 벽에 낙서하기 등등』, 『식당의 새 메뉴 등등』……」"
    - "%CHARA%(은)는 흰 종이 한 장을 꺼내 맹렬한 속도로 글을 쓴다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 시시한 인간들의 제안을 전부 정리하는 거야.」"
    - "그 종이에는 세부 내용 하나 빠뜨리지 않은 제안별 요약이 가지런히 적혀 있다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고——」"
    -
    - "%CHARA%(은)는 %SEX%가 방금 정리한 건의 사항을 종이비행기로 접는다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아네모네★월플라워, 저기로 날아가라!」"
    - "입김을 불어넣은 %CHARA%(은)는 트레이너실 창밖으로 종이비행기를 힘껏 던진다——"
    -
    - "종이비행기는 바람을 타고 이리저리 흔들리며 계속 빙글빙글 돈다"
    - "그런데 어째서인지 한 곳을 향해 꾸준히 나아간다"
    - "마침내 한 치의 오차도 없이 열린 이사장실 창문으로 날아들어 책상 위에 내려앉는다"
    -
    - acc: 1
      content: "「이건……?」"
    - "%YOU%는 그저 놀랄 뿐이었다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐야, 바보 %CALLNAME%! 정말로 저 사람들 일을 전부 네가 결정할 생각이었어!?」"
    - "곧바로 쏘아붙인다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마법도 못 쓰는 %CALLNAME%가 어떻게 평범한 사람들을 행복하게 해 주겠어!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「따라와, %CALLNAME%!」"
    - "반박의 여지도 주지 않고 말을 이어 간다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇게 마법이 배우고 싶다면 주인님이 조금 가르쳐 줄게!」"
    -
    - "그 뒤 %CHARA%에게 이끌려 행사장으로 간다"
    - "그곳에서 %CHARA%(과)와 호흡을 맞춰 사람들에게 마술을 보여 주었다"

# シニア級7月第1週以降、ターン終了
# 好感度+20～30、スピード+5、スタミナ+5
we_buttercup:
  title: "영원한 버터컵"
  lines:
    - "평범한 오후, %YOU%(과)와 %CHARA%(은)는 그저 함께 학원 안을 걷고 있다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아. %CALLNAME%, 이거 들고 있어.」"
    - "%CHARA%(은)는 어째서인지 갑자기 모자를 벗어 %YOU%에게 건네려 한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐야? 천재 %MOHOSHOJO% 스위피는 쉬는 중이야. 지금은 %SEX%의 다른 인격인 %CHARA%(이)가 너랑 이야기하는 거라고!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……왜 그래? %CHARA%도 그냥 작은 %UMA%잖아?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥. 들기 싫으면 내가 들게. 메롱.」"
    - "%CHARA%(은)는 모자를 홱 빼앗아 들고, 한쪽 눈꺼풀을 내리며 %YOU%에게 메롱을 한다"
    -
    - "%CHARA%(은)는 화단 가장자리에 앉아 살며시 눈을 감고, 천천히 두 다리를 앞뒤로 흔든다"
    - "햇살이 %SEX%의 얼굴을 비춘다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! 너! 나 좀 잘게.」"
    - "갑자기 명령한다"
    -
    - "그렇게 %CHARA%(은)는 %YOU%의 허벅지에 머리를 올리고 말없이 눈을 감은 채 조용히 눕는다"
    - "갈색 두 귀가 이따금 작게 움직인다"
    -
    - "어째서인지 천천히 눈을 뜨더니 %YOU%(과)와 눈이 마주친다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……뭐라고 안 해? 내가 이러고 있는 거.」"
    - "차갑지만 의외로 조금 부드러운 말투다"
    -
    - acc: 1
      content: "「딱히 할 말은 없는데.」"
      lines:
        - "「확실히 어린애 같네……」"
        - "저도 모르게 난감한 표정을 짓는다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「흥. 어른들은 그렇지. 맨날 어린애를 얕잡아 봐.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「한 번이라도 어린애였던 적이 있다면 알 텐데.」"
        -
        - "차가운 대답을 한 뒤, %CHARA%(은)는 다시 말없이 눈을 감고 %YOU%의 다리 위에 조용히 눕는다"
        - "햇살이 %YOU%(과)와 %CHARA%에게 쏟아진다"
        -
        - "해 질 무렵이 되어서야 %CHARA%(은)는 일어나 모자를 쓰고 %YOU%를 트레이닝실로 데려갔다"
    - acc: 2
      content: "「어차피…… 처음부터 어느 쪽 %CHARA%든 늘 이랬으니까……」"
      lines:
        - "저도 모르게 난감한 표정을 짓는다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……! 뭐, 뭐야 그게!?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「있잖아! 똑바로 말해, %CALLNAME%! 난 원래 이! 렇! 다! 고!!」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「흥!」"
        - "%CHARA%(은)는 벌떡 일어나 조금 화가 난 채 곁에 둔 모자를 쓴다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「휴식 끝! %CHARA%(이)라는 작은 %UMA%는 돌아갔어!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「지금은 "
            - fontWeight: bold
              content: "처음의"
            - " 천재 %MOHOSHOJO% 스위피가 너랑 이야기하는 거야!」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%SEX%와 또 이야기하고 싶으면, %CALLNAME%, 다음엔 네가 기회를 소중히 해!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「안 그러면 앞으로 못 만날지도 몰라!」"
        -
        - "그렇게 %YOU%는 또다시 %CHARA%에게 떠밀려 트레이닝실로 돌아갔다……"


# シニア級7月第1週以降、淫紋所持、ターン開始
ws_night_shade:
  title: "입에 담을 수 없는 Nightshade!"
  lines:
    - "새로운 하루, %YOU%이 사무실에서 일하고 있는데 작은 %UMA%이 두꺼운 책 한 권을 들고 들어온다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기, 이 책 좀 가져가.」"
    - "대뜸 부탁한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「얼마 전에 누가 줬어. 왜인지는 몰라도 꼭 읽어 줬으면 하는 눈치더라. 근데 읽기 싫어.」"
    -
    - "표지를 보니 『마법의 본질과 실천』이라고 쓰여 있다"
    -
    - acc: 1
      content: "「괜찮은 책 같은데, 왜 안 읽어?」"
    - "%YOU%은 그렇게 대답한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어. 이 책, 왠지 음침해. 이렇게 음침한 책은 읽기 싫다고.」"
    - "무언가 직감이라도 한 듯, %CHARA%은 거절하는 이유를 댄다"
    -
    - "……사실 트레이너인 %YOU%은 이 책을 읽어 본 적이 있다"
    - "예전에 %CHARA%에게 보여 주기에는 조금 일렀을지도 모르지만, 이제라면 %SEX%에게 조금쯤 알려 줘도 되겠지——"
    -
    - "「안 읽을 거면 가져온 의미가 없잖아」"
    - "이어서 그렇게 말한다"
    - "「그래도 마법의 본질을 알면 천재 %MOHOSHOJO%sweepy에게 큰 도움이 되지 않을까?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……뭐야! 너까지 그런 태도야!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! %CALLNAME%이 그렇게 말한다면, 어떤 책인지 잠깐만 봐 줄게.」"
    - "%YOU%의 격려에 %CHARA%은 마지못한 척 책을 펼쳐 목차부터 읽기 시작한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「목차, 제1장, 관계의 마법.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제1절, 음문의 종……류……와……」"
    -
    - "어째서인지 %CHARA%의 책 읽는 목소리는 점점 작아지고, 눈빛도 점점 어두워진다"
    - "그렇게 뭐라 표현하기 힘든 침묵 속에서 제1절 끝까지 읽고 만다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……저기~! %CALLNAME%! 갑자기 생각난 건데——!」"
    - "어째서인지 갑자기 애교를 부리기 시작한 %CHARA%은 %UMA%의 힘으로 %YOU%를 억지로 탐험에 끌고 갔다……"
    -
    - "%FUJI% 사감의 말에 따르면, 늘 밤늦게까지 마법을 연구하던 %CHARA%은 그 뒤 일주일 동안 매일 밤 반듯이 누워 꼬박꼬박 잠을 잤다고 한다"
    - "무척 평온해 보였다……"
  # we_gypsonphila


# ws_night_shade と同ターン、ターン終了
# +熱視線
we_gypsonphila:
  title: "추구해야 할 안개꽃!"
  lines:
    - "평범한 어느 날, 수업이 끝나 떠들썩한 교실에서"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아. 다들 잘 들어.」"
    - "작은 %UMA%가 갑자기 자리에서 교탁으로 달려가 선언하기 시작한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「마법의 본질에 관해 모두에게 전할 소식이 있어……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너희 중 몇몇은 아마 전설적인 『마법』의 참뜻을 알고 있겠지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아마 몇몇은 이 『마법』으로 이득을 보려 하고 있을 거야……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만!」"
    - "%CHARA%(은)는 갑자기 교탁 위로 올라간다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런 『마법』은 결국 『흑마법』일 뿐이야!!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「천재 %MOHOSHOJO% 스위피의 연구에 따르면, 마법에는 더 좋은 면이 있어!」"
    - "%CHARA%(은)는 교탁에서 뛰어내려 분필을 쥐고 칠판에 영문 모를 주문을 빼곡히 쓴다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이렇게, 저렇게, 그리고 이거——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 모든 게 바로 진정한——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어 싫어 싫어! 끝까지 말하게 해 줘~!!!」"
    - "결국 멋대로 소란을 피운 %CHARA%(은)는 그 자리에서 선생님에게 붙잡혀, 수업 중 몰래 옆자리 친구에게 %SEX%의 마법 이론을 전파할 수밖에 없었다"


# 好感+20～30、スキルPt+50、体力&気力+600
ws_strange_day:
  title: "이상한 날"
  lines:
    - "어느 날 아침, %YOU%는 어딘가 이상하다고 느끼면서도 알찬 하루를 맞이하려 했다."
    - 「(ง •̀_•́)ง」
    - "%YOU%는 크게 신경 쓰지 않고 준비를 마친 뒤 밖으로 나간다"
    - color: %COLOR_301%
      content:
        - fontWeight: bold
          content: %MINORU%
        - 「Y(^_^)Y」
    - "%SEX%는 여전히 교문에서 한 사람 한 사람을 맞이하고 있다"
    - ……？
    - 「눈_눈」
    - "%YOU%는 조금 이상하다고 느끼지만 말로 표현할 수 없다"
    - color: %COLOR_58%
      content:
        - fontWeight: bold
          content: %DOTOU%
        - 「(๑•́ωก̀๑)」
    - "%SEX%는 또 울고 있다"
    - color: %COLOR_24%
      content:
        - fontWeight: bold
          content: %MAYA%
        - 「(～0～)」
    - "이 꼬마 악마, 또 밤을 새웠구나"
    - color: %COLOR_20%
      content:
        - fontWeight: bold
          content: %SKY%
        - 「<(★ΦωΦ★)>」
    - "……이 표정은 뭐지."
    - ……！
    - 「(#ﾟДﾟ)」
    - "%YOU%는 마침내 깨닫는다. %YOU%는 오는 내내 한마디도 듣지 못했고, 대신 머릿속에 이모티콘이 떠올랐다."
    -
    - "어쩌지……"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「(｢･ω･)｢ 헤이」"
    - "길에서 %CHARA%(을)를 만난다"
    -
    - acc: 1
      content: "「(｢･ω･)｢ 헤이」"
    - acc: 2
      content: "「(＾。^★)/ 안녕」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「(O_ｏ) 어?」"
    - "아무래도 %YOU%가 뭘 하는지 모르는 모양이다."
    -
    - acc: 1
      content: "지금 상태를 %SEX%에게 설명한다"
      lines:
        - (「(´ﾟωﾟ｀)」)
        - "(「⁽⁽◝( •௰• )◜⁾⁾，₍₍◞( •௰• )◟₎₎ (팔다리를 휘젓는다)」)"
        -
        - (「╮（╯＿╰）╭」)
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(┯_┯)」
    - "한참 뒤에야 겨우 뜻을 이해했다"
    - "그런데 트레이너실로 끌려간다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(★^ω^★)/♪∪」
    - "지팡이로 끈적한 약초즙이 든 병을 가리킨다"
    -
    - acc: 1
      content: 「(●—●)」
    - "%YOU%는 그저 망설인다……"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(┯_┯)/ ∪」
    - "지팡이로 정체불명의 병을 똑똑히 가리킨다"
    -
    - acc: 1
      content: 「(๑˙ー˙๑)」
    -
    - "한 시간도 안 되는 동안 계속 약을 시험한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(★^ω^★)/
        - color: rgba(72, 217, 70, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「( ^ _ ^ )/
        - color: rgba(191, 8, 173, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「( ｰ̀ д ｰ́ )/
        - color: rgba(28, 8, 204, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「( 눈 _ 눈 )/
        - color: rgba(239, 223, 6, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「(  ◣д◢ )/
        - color: rgba(225, 32, 2, 1)
          content: ∪
        - 」
    - 「(´×ω×`)」
    - "전혀 효과가 없다"
    -
    - "영문 모를 저주를 풀려는 것이 분명한데,"
    - "어째서인지 실험용 모르모트가 된 기분이다……"
    -
    - if: era.get('cflag:32:招募状态') === 1
      lines:
        - "……잠깐, 저주인지는 알 수 없다"
        - "「모르모트」라고 하니——"
        -
        - "%TACHYON%(이)라는 %UMA%가 떠오른다"
        - "아마 또 아무 말 없이 실험한 거겠지……"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「(◣д◢)」
        - "가라앉지 않는 이 분노를 이용해도 좋을 것 같다"
        -
        - "%TACHYON%의 실험실로 가니, 역시 흰 가운을 입은 %UMA%가 있었다"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「╰（‵□′）╯」
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - 「( ^ω^ )」
        -
        - acc: 1
          content: (「╭( ′• o •′ )╭☞( ^ω^ )」)
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - 「(눈_눈)」
        -
        - acc: 1
          content: (「(～￣▽￣)→(눈_눈)」)
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「（╯‵□′）╯︵┴─┴(눈_눈)」
        -
        - "쿵쿵쾅! 우르르르릉!!"
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - "「꺄(∩∀°╭꺄∀∀꺄∀∀°)꺄꺄」"
        - "(톰 선생님의 더빙에 감사드립니다)"
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: %TACHYON%
            - 「( ✘_✘ )」
        -
        - "%YOU%(과)와 %CHARA%의 합동 제압에, 눈앞의 밤색 머리 %UMA%는 이내 이번 해독제를 내놓겠다고 약속했다"
        - "그 뒤 %YOU%의 생활은 완전하지는 않지만 어느 정도 정상으로 돌아왔다"
    - if: era.get('cflag:32:招募状态') !== 1
      lines:
        - "……잠깐, 저주인지는 알 수 없다"
        - "전에 학원 매점에서 공짜 음료를 받았던 일이 떠오른다——"
        -
        - acc: 1
          content: (「(◣д◢)」)
        -
        - "아직 화가 난 %CHARA%(을)를 데리고 매점에 가니, 흰 가운을 입은 밤색 머리의 %UMA%가 있었다"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「╰（‵□′）╯」
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - 「(★∩ω∩)」
        -
        - acc: 1
          content: (「╭( ′• o •′ )╭☞(★∩ω∩)」)
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - 「(눈_눈)」
        -
        - acc: 1
          content: (「(～￣▽￣)→(눈_눈)」)
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「（╯‵□′）╯︵┴─┴(눈_눈)」
        -
        - "쿵쿵쾅! 우르르르릉!!"
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - "「꺄(∩∀°╭꺄∀∀꺄∀∀°)꺄꺄」"
        - "(톰 선생님의 더빙에 감사드립니다)"
        -
        - color: %COLOR_32%
          content:
            - fontWeight: bold
              content: ？？？
            - 「( ✘_✘ )」
        -
        - "%YOU%(과)와 %CHARA%의 합동 제압에, 눈앞의 밤색 머리 %UMA%는 이내 해독제를 내놓았다"
        - "그 뒤 %YOU%의 생활은 정상으로 돌아왔다"

# スイープトウショウ、オルフェーヴル、デュランダル、カレンチャン、ドリームジャーニーの五名が入隊したあと、ターン経過でランダム発火
# +やる気
ws_branches:
  title: "나뭇가지"
  lines:
    - "하루하루 시간이 흐르면서 %YOU%가 담당하는 %UMA%들도 점점 늘어났다"
    - %CHARA%、%ORFEVRE%、%DURANDAL%、%CURREN%、%JOURNEY%
    -
    - "어느새 %YOU%는 이렇게나 뛰어난 우마%UMA%들을 담당하고 있다"
    -
    - "우마%UMA%들의 재능을 헛되이 하지 않도록, 새로운 날에도 여느 때처럼 운동장에 우마%UMA%들을 모아 %THEY%의 훈련을 지도한다——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「왜! 내가 왜 다른 사람이랑 같이 훈련해야 하는데!」"
    - "달래는 건 나중이다. 일단 %SEX%를 현장에 있게 하자……"
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - "「신하가 짐에게 이 자리에 함께한 백성들과 일을 함께하라 한다? 무엇이 재미있단 말이냐?」"
    - "듣자마자 걱정되는 말을 꺼낸다"
    - "그래도 거절보다는 사실 호기심 쪽이 더 클 것이다……"
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "「주군! 오늘은 이 날카로운 검으로 지켜 드리겠습니다!」"
    - "손에 잘 맞는 나뭇가지를 찾았는지 몹시 들떠 있다"
    - "훈련할 때는 잠시 옆에 내려놓아 주면 좋겠는데……"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「%CALLNAME_38%, 카렌은 뭐든 들을게~♪」"
    - "그저 단도직입적으로 믿음직한 말을 한다"
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - "「여정에 얼마나 많은 풍경이 있든, 당신이 돌아갈 곳은 오직 하나, 행복한 곳이라고 믿습니다……」"
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - "「……후후, 작은 소망일 뿐입니다. 신경 쓰지 마세요……」"
    - "그저 머리가 어질어질해지는 이야기를 한다"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「에에~~ 저니 선배, 그런 말을 하는구나~」"
    - "어째서인지 %JOURNEY%의 말에 곧바로 반응한다"
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「조금은 『나누는 마음』이 부족한 거 아니야——」"
    -
    - "%CURREN%(과)와 %JOURNEY%(은)는 미묘한 눈싸움을 시작한다……"
    - "훈련을 시작하면 멈출 테니 지금은 안심하자……"
    -
    - "%CURREN%(과)와 %JOURNEY%에게 먼저 훈련 일정을 알려 준다"
    - "뒤돌아보니 %DURANDAL%, %ORFEVRE%, 그리고 %CHARA%(이)가 각자 나뭇가지를 들고 결투를 벌이고 있다……!"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%——! 주인님의 싸움을 왜 도우러 안 오는 거야!!」"
    - "이쪽에서 보고 있다는 걸 알아차렸는지 싸우면서 외친다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「로사★시슬, 천재 %MOHOSHOJO% 스위피의 검 앞에 쓰러져라!!!」"
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "「크윽……!」"
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "「죄송합니다, 주군…… 이제 신은 더 이상 모실 수 없습니다……」"
    - "%DURANDAL%(은)는 마법검과 왕의 검에 동시에 맞아 HP가 바닥이 되었다……"
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - "「이로써 가장 강한 반역자는 사라졌다—— 임시 동맹의 조건은 끝났다.」"
    - "%ORFEVRE%(은)는 어디서 가져왔는지 모를 띠에 나뭇가지를 꽂는다"
    - "%SEX%는 나뭇가지를 든 %CHARA%에게 냉정하면서도 위엄을 잃지 않고 말한다"
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - "「너를 제거하는 것 또한 왕이 되는 길에서 필연적인 선택이다.」"
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - "「그대는 짐의 백성들에게 기억될 것이다——」"
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - "「반역자의 모습으로.」"
    -
    - "%CHARA%(과)와 %ORFEVRE%(은)는 나뭇가지를 겨누고 서로를 향해 돌진한다"
    - "찰나의 공방——"
    -
    - "%CHARA%의 손에 들린 나뭇가지가 마른 소리를 내며 두 동강 난다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！！」
    -
    - "무기를 잃은 (검객) 마법사는 다가오는 왕 앞에서 무의식적으로 뒷걸음질한다……!"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「에에~~~ 벌써 끝이야~」"
    - "%CURREN%(이)가 어느새 %CHARA% 곁에 나타나 있다"
    -
    - "%CHARA%에게 새 나뭇가지를 하나 건넨다"
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「『위엄 있는 왕』이 되고 싶다면——」"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「『카와이한 카렌』은 왕위를 양보하지 않을 거야?」"
    - if: era.get('cflag:38:性别') === 1
      content: "가볍게 상대에게 나뭇가지를 겨누고, 왕과 그의 (검객) 마법사는 태세를 갖춘다……!"
    - if: era.get('cflag:38:性别') !== 1
      content: "가볍게 상대에게 나뭇가지를 겨누고, 여왕과 그녀의 (검객) 마법사는 태세를 갖춘다……!"
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - "「……그럼 저도 전투에 가담하는 것을 허락해 주시지요——」"
    - "%JOURNEY%(은)는 %SEX%의 나뭇가지를 들고 %ORFEVRE% 곁에 선다"
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - "「지금 이 순간, 저는…… 왕의 기사입니다.」"
    - "왕과 %SEX%의 기사는 엄숙하게 기다린다……!"
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "(젠장, 역적이 기사가 되다니!)"
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "(하지만 지금 부활하면 포위당할지도……!!)"
    - "%DURANDAL%의 눈에 초조함이 스민다……"
    -
    - "「그러니까 이게……」"
    -
    - "「트레센 학원이구나……」"
    -
    - "아마, 어쩌면, 분명히 %YOU%의 담당 우마%UMA%들이 우연히 전부 별난 것뿐일 것이다……"
    - "분명 그럴 것이다……"


# 発火条件：スイープトウショウ＋カレンチャン入隊、デュランダル＋オルフェーヴル＋ドリームジャーニー入学後、ターン経過でランダム発火
# スイープトウショウとカレンチャンの相互好感+50、プレイヤーへの好感も各+50、やる気は双方上昇
ws_mother:
  title: "엄마"
  lines:
    - "평범한 아침, 트레이너실 책상 위에 「스위피에게」라고 적히고 귀여운 낙서가 그려진 편지 한 통이 놓여 있었다"
    -
    - "봉투를 열자 편지지에는 다정한 안부와 귀여운 그림들이 가득하다"
    -
    - "편지의 맺음말은 이렇다."
    - "「——너의 엄마,"
    - "카와이한 카렌♥」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어 싫어! 언제 엄마가 늘어난 거야?!!!」"
    - "편지를 본 %CHARA%(은)는 거의 즉시 %CURREN%에게 달려간다"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「에에~~ 스위피, 뭐가 마음에 안 들어? 카렌은 좋은 것 같은데~?」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「멋대로 남의 엄마가 되는 사람이 어디 있어?!」"
    - "%CHARA%(은)는 곧바로 반박한다"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「카렌은 전에 스위피를 따라서 %MOHOSHOJO% 수행을 마쳤으니까……」"
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「그러니까—— 이제 스위피의 소원을 이루어 주고 %SEX%의 엄마가 되는 거야!」"
    - "확신에 차서 대답한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그게 무슨 이유야!?」"
    - "태클이 멈추지 않는다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어! 절대 싫어! 그런 소원 빈 적 없어! 그렇게 돌봄이 필요한 것도 아니고!?」"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「우우…… 스위피, 정말 카렌이 엄마인 건 싫어?」"
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "(울먹울먹)"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 갑자기 울지 말라고!??」"
    - "%CHARA%(이)가 어쩔 줄 몰라 하는 사이,"
    - "%CURREN%(은)는 눈물을 닦는다"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「이렇게 하자! 스위피…… 정말로 카렌을 대신할 엄마를 찾을 수 있다면,」"
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「카렌이 엄마 자리를 양보해 줄게!」"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「대신 조건이 하나 있어——」"
    - "%CURREN%(은)는 세 사람의 이름이 적힌 종이를 %CHARA%에게 건넨다"
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「잊지 말고, 잃어버리지 마♪」"
    -
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐야 뭐야! 왜 내가 정해진 사람들을 찾아다녀야 하는데!」"
    - "%CURREN%에게 전부 떠맡겨진 뒤, 길을 걸으며 그렇게 혼잣말한다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흥! 좋아! %THEY% 중 한 명한테 하루 동안 『엄마』를 시키면 되잖아! 천재 %MOHOSHOJO%라면 반드시 할 수 있어!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! 거기! ……『뒤랑달』, 네가 명단의 첫 번째야.」"
    - "%CHARA%(은)는 %YOU%의 안내를 받아 %DURANDAL%에게 다가간다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……이상한 이야기지만,」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너, 내 『엄마』 해 줄래?」"
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "(엄마?! 엄마!?? 왜 나지!?)"
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "(나…… 정말 엄마로서의…… 소질이 있나……?)"
    - "어째서인지 %DURANDAL%의 얼굴에는 어색함과 부끄러움이 반씩 섞인 홍조가 떠오른다……"
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "(안 돼! 이건 절대로 안 돼! 후배에게 엄마 취급을 받다니!)"
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "(무슨 일이 있어도…… 『기사』여야 해……!)"
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "「문제없습니다! 후배의 부탁이라면 물론 문제없습니다!」"
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "(아니야! 왜 받아들인 거야!??)"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「동의했다면…… 시험해 볼게…… 날 태우고 걸어 줘.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잘되면 그 회색 머리 녀석한테 갈 거야! 문제 일으키지 마!」"
    -
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "(윽…… 어떻게든 만회해야 해……!)"
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "「예! 알겠습니다! 오늘의…… 『주군』!」"
    - color: %COLOR_121%
      content:
        - fontWeight: bold
          content: %DURANDAL%
        - "「제가 지금 바로 주군을 목적지까지 모시겠습니다!!」"
    -
    - "그렇게 말한 %DURANDAL%(은)는 %CHARA%(을)를 업고 바람처럼 달린다——"
    - "다만 방향이 맞는지는 둘째 치고, 일단 속도가 너무 빠르다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「！？？？？？」
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「시——러~~~~~!!!」"
    - "%CHARA%의 비명이 끝나기도 전에 %DURANDAL%(이)가 돌부리에 걸려, 둘이 함께 부드러운 잔디 위로 넘어진다"
    - "그 뒤 %CHARA%(은)는 종이에 적힌 %DURANDAL%의 이름에 힘껏 줄을 그어 지웠다"
    -
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……『오르페』……구나.」"
    - "길을 걸으며 명단의 다음 이름에 난감한 표정을 짓는다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『오르페』한테 내 엄마를 시키라니.」"
    -
    - "아무튼 %CHARA%(을)를 데리고 %ORFEVRE%(을)를 만나러 간다"
    - "키가 큰 황금빛 머리의 %UMA%가 서 있다. 눈을 맞추려면 고개를 들어야 한다"
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - "그리고 끝없는 침묵"
    -
    - color: %COLOR_115%
      content:
        - fontWeight: bold
          content: %ORFEVRE%
        - "「알현하러 왔다면, 짐은 신하를 맞이하겠다.」"
    - "%ORFEVRE%(은)는 침묵을 깨고 %CHARA%에게 한 손을 내민다"
    - "%CHARA%(은)는 그 손을 보는 것만으로도 복잡한 표정이 된다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……%CALLNAME%, 주인님이 돌아오지 못하면 아빠랑 엄마를 부탁해.」"
    - "그러더니 죽음을 각오한 눈빛으로 %ORFEVRE%의 손 위에 자신의 손을 포갠다——"
    -
    - "%ORFEVRE%(은)는 그저 %CHARA%(과)와 정중하게 악수했다"
    - "하지만 금방이라도 울 것 같은 %CHARA%(은)는 %YOU%를 끌고 돌아서서 곧바로 도망친다"
    - "%CHARA%(은)는 %ORFEVRE%(과)와 이야기를 나누기도 전에 종이에서 %ORFEVRE%의 이름을 지웠다"
    -
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아아. 다음은…… 이 사람…… 아…… 응……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX%에게 그 『엄마』라는 걸 부탁하려면……」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우선……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「『접촉』부터……」"
    -
    - "%CHARA%(은)는 허리에 찬 지팡이를 손에 쥔다"
    - "지팡이를 든 손 쪽으로 무게중심을 기울이고, 한 발로 땅을 딛고 버티며 다른 발은 발끝만 땅에 댄다"
    - "조심스럽게 몸을 기울여 지팡이를 뻗는다——"
    -
    - "쿡. 쿡."
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - "「괜찮습니다만……?」"
    - "이렇게 조심스러운 「탐색」에도 %JOURNEY%(은)는 싫어하는 기색이 없다"
    -
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - "「누군가와의 내기…… 혹은 단순한 고집 때문이라면……」"
    - color: %COLOR_119%
      content:
        - fontWeight: bold
          content: %JOURNEY%
        - "「제가…… 가능한 범위에서는 조금 도와드리지요.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어! 왜 그 회색 머리 녀석처럼 내가 무슨 생각을 하는지 다 아는 것 같아!??」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이런 『엄마』는 필요 없어!!」"
    - "%CHARA%(은)는 단호하게 종이에서 %JOURNEY%의 이름을 지웠다"
    -
    -
    - "아무튼 %CURREN%에게 돌아간다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「싫어 싫어 싫어! 왜 이렇게 다들 극단적인 거야——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「애초에 네가 고른 사람들 중에 남을 돌볼 줄 아는 사람은 하나도 없잖아!??」"
    - "%SEX% 자신의 감상을 단도직입적으로 말한다"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「그~럴 리가! 뒤랑달, 오르페, 저니는 경기에서 『엄청 믿음직』하잖아?」"
    - "그렇게 대답할 뿐이었다"
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「만약 %THEY%도 스위피를 만족시킬 수 없다면——」"
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「카렌이 세상에서 제일 좋은 엄마라는 뜻 아니겠어!?」"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - "「카렌은 실컷 응석 부리는 것도, 쓰다듬어 달라고 부탁하는 것도 전부 괜찮아♪」"
    - "엄마답지 않은 말을 하는 %CURREN%의 표정은 계획이 성공했다는 듯하다"
    - "%CHARA%(은)는 양손가락으로 관자놀이를 누르며 필사적으로 생각한다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……아니야. 아직 방법이 있어.」"
    - "갑자기 확신에 차서 결론을 내린다"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「？」
    - "예상 밖의 전개에 조금 놀란 듯하다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……나도 그 종이에 내 이름을 썼어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네가 『잃어버리지 마』라고 했으니까.」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「봐.」"
    - "%CHARA%(은)는 종이를 들어 올린다. 오른쪽 아래에 표시 삼아 작게 쓴 이름이 있다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네가 설명하기 전에 쓴 거야. 그러니까 『종이에 있는 사람은 고를 수 있다』고 했을 때 이미 적혀 있었어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까! 『%CHARA%』도 "
        - fontWeight: bold
          content: "고를 수 있는 상대야——」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「즉——」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「즉, 오늘부터 나는 내 엄마야!!」"
    -
    - color: %COLOR_38%
      content:
        - fontWeight: bold
          content: %CURREN%
        - 「？？？」
    -
    - acc: 1
      content: "「사실 너 자신도 『골칫거리』인데……」"
    - "%YOU%는 %CHARA%에게 그렇게 덧붙일 뿐이었다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그런 말 하면 안 돼! %CALLNAME%——!!!」"
    - "곧바로 쏘아붙인다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무튼 이상한 회색 머리 %UMA% 따위는 내 엄마로 삼지 않을 거야!!!」"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%! 『엄마』는 오늘 『아이』한테 아이스크림을 더 줄 거야. 알겠어?!」"
    - "왜 %YOU%가 부담해야 하는 걸까……"
    -
    - "나중에 %CURREN%(은)는 사과의 뜻으로 %YOU%, %CHARA%(과)와 함께 디저트를 먹었다"


# スティルインラブ入隊、ジュニア級4月以降
# スイープトウショウとスティルインラブの相互好感+75、プレイヤーへの好感も同時に+75、やる気は双方上昇
ws_tea_party:
  title: "마녀와 뱀파이어의 다과회"
  lines:
    - "평온한 오후, %SIL%(과)와 함께 찻상 곁에 앉아 있다"
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - "「그러고 보니 트레이너님은 어째서 갑자기 저와 차를 마시고 싶으셨나요?」"
    -
    - acc: 1
      content: "「시간이 나서…… 몇 명 모여 볼까 했어.」"
    - "그렇게 대답하고 %SIL%(과)와 함께 기다린다"
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - "「아아……! 이분은……」"
    - "%SIL%(은)는 조금 떨어진 곳에서 걸어오는 작은 %UMA%를 바라본다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아! %CALLNAME%! 왜 갑자기 오후 티타임에 부르는 거야!」"
    - "평소와 같은 모습이다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……『다른 사람도 있다』고? 무슨 뜻이야?」"
    - "탁자 주변을 둘러보던 %CHARA%(은)는 우연히 %SIL%의 짙은 붉은 눈과 잠깐 눈이 마주친다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐……」"
    - "낯빛이 순식간에 이상해진다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「있잖아~ %CALLNAME%~ 오늘 오후 티타임은 주인님이 일단 빠져도 될까?」"
    - "갑자기 어리광을 부리기 시작한다——"
    -
    - "아무튼 %SIL%, %CHARA%(과)와 함께 찻상 곁에 앉았다"
    - "%YOU%가 부지런히 차를 우리는 것 외에는, 두 사람 사이에 어째서인지 미묘한 침묵이 흐른다"
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - 「……」
    - "원래도 강하지 않은 존재감이 스스로 자제하는 탓에 더욱 옅어진 듯하다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - "조금 쓴 꽃차를 마셔도 이제는 반응이 없다"
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - "「저기……」"
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - "「스윕 씨…… 이 차를 마셔 보시겠어요?」"
    - "그래도 침묵을 깬다"
    -
    - "%SIL%(은)는 좋아하는 홍차가 든 주전자를 집어 %CHARA%에게 한 잔 따라 준다"
    - "선명하게 붉은 액체가 %CHARA% 앞에 놓인다"
    -
    - "조금 망설이던 %CHARA%(은)는 %YOU%를 한 번 보고 다시 %SIL%(을)를 바라본다"
    - "그저 찻잔을 들어 조금 입에 댄다"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음…… 으……」"
    - "별말은 하지 않지만, 이 맛이 싫다는 표정이 역력하다"
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - "「아아……!」"
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - "「깜빡했어요. 스윕 씨는 쓴 걸 별로 좋아하지 않으시죠……」"
    - "조금 미안한 듯하다"
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - "「그러고 보니…… 전에 트레이너님께도 알려 드린 조합이 있는데요……」"
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - "「아마 스윕 씨에게는 조금 더 나을지도 모르겠어요……」"
    -
    - "%SIL%(은)는 탁자 위 찻통 옆에서 음료 한 병을 집어 조금 기울이고, 찻잔에 섞어 넣는다"
    - "완성된 음료는 더욱 짙은 붉은색이다——"
    -
    - "그 짙은 붉은 액체를 보자 %CHARA%의 낯빛이 조금 창백해진다"
    - "하지만 조금 주눅 들고 실망한 %SIL%의 눈빛을 알아차린 작은 %UMA%는 찻잔을 받아 든다"
    - "천천히, 아주 천천히 한 모금 마신다"
    -
    - color: %COLOR_97%
      content:
        - fontWeight: bold
          content: %SIL%
        - "「……조금 나아졌나요?」"
    - "%SIL%(이)가 작은 목소리로 묻는다"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……응. 그럭저럭……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「쓰지만, 달아졌어……」"
    - "%CHARA%(은)는 그렇게 말하면서 또 살며시 한 모금 마신다"
    -
    - "두 %UMA%와 함께 느긋하고 평온한 오후 티타임을 보냈다"
    - "그 뒤 트레센 학원에는 「%MAJO%」와 「요정님」과 「이야기 속 사람」의 다과회 전설이 퍼졌다"
