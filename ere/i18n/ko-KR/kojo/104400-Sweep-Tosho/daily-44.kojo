# @file スイープトウショウ - 日常
# @author アグネスデジタル会社
# @author Claude (翻訳)

# 重要ノード：
# 難解な Blue Enchantress：募集後の当ターン終了。募集時期が不定なため、ジュニア級4月（育成回合計時>=12）以降に簡略化
# 新生の Asphodel：エリザベス女王杯の当ターン、すなわちクラシック級11月第2週（育成回合計時=47+42）ターン終了。以前は<=、以後は>
# 魔法の夢：宝塚記念の翌ターン、すなわちシニア級7月第1週（育成回合計時=95+25）ターン開始。以前は<、以後は>=

select:
  sync: true
  lines:
    - if: era.get('status:44:生日') > 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「알겠어? 알겠냐구? 오늘은 천재 %MOHOSHOJO% 스위피 님의 생일이야!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「얼간이 %CALLNAME%이(가) 뭘 할 수 있을지는 모르겠지만, 디저트가 있으면 빨리 내놔~!」"
    - if: t = era.get('cflag:44:育成用变量')?.agreement > 0 # 大魔法使いの約束の状態
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「『마녀의 밤』은 평소랑 완전히 달라! 말해도 너는 몰라!」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「『마녀의 밤』을 위해서라면 주인도 %CALLNAME%도 최선을 다해야 해」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「게으름 피우면……마법 쿠키, 이제 안 줄 거야!!」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그날에는, 제대로…………」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「……아무것도 아냐! 주인을 그런 눈으로 보지 마! 지금부터 연습할 거니까…!!」"
    - if: "!era.get('status:44:生日') && !t && era.get('status:44:熬夜') > 0"
      lines:
        # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
        - if: (t = era.get('cflag:44:育成回合计时')) <= 47 + 42
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「후……음……음……으음……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「음……! 맞아!! 그 %MOHOSHOJO%, 그 뒤에……!!!」"
            - "아무래도 %CHARA%은(는) 어젯밤 책을 읽느라 늦게까지 깨어 있었나 보다"
        # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後、魔法の夢（シニア級7月第1週ターン開始イベント）より前
        - if: t > 47 + 42 && t < 95 + 25
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「후……음……음……으음……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「음……! 아냐, 아냐! %CALLNAME%, 이 마법 좀 봐 봐!!」"
            - "아무래도 %CHARA%은(는) 어젯밤 무언가를 연구하느라 늦게까지 깨어 있었나 보다"
        # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
        - if: t >= 95 + 25
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「후……음……음……으음……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「음……! 싫어, 싫어! 오늘은 트레이닝 같은 거 안 할 거야~!!」"
            - "%CHARA%이(가) 어젯밤 무슨 일을 했든……아무튼 늦게까지 깨어 있었나 보다"
    - if: "!era.get('status:44:生日') && !t && !era.get('status:44:熬夜')"
      lines:
        # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
        - if: era.get('cflag:44:育成回合计时') >= 95 + 25
          lines:
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「있잖아! %CALLNAME%, 있지, 『치유초』랑 『불꽃의 꽃』은 시장에서 살 수 있을까?」"
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「밖에서 지팡이를 잔뜩 보고 왔는데, 역시 그랜마가 준 이게 최고야.」"
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「……미련 같은 건 없어!!」"
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「%CALLNAME%, 새 %CALLNAME%을(를) 데려왔어! 장난감 가게에서 샀어. 강아지야. 안 움직여. 푹신푹신해.」"
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「%CALLNAME%! 요즘 서점에 새 마법 연습장 나왔어!?」"
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「『마리벨트』 속편……? 싫어, 싫어! 그런 마법은 배우기 싫어~!!」"
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「얼마 전에……스틸……같은 반 애랑 새빨간 액체를 마시고 왔어!」"
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「차인데도 쓰더라구!! 그랜마가 끓여 준 거랑 전혀 달라!!!」"
        - if: era.get('cflag:44:育成回合计时') < 95 + 25
          lines:
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「봐 봐! %CALLNAME%, 저거 전설의 바람 정령이지!?」"
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「『좋은 아침』도 『안녕』도 『좋은 저녁』도 전부 틀렸어!」"
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「올바른 인사는 당연히 『스위피 님, 안녕하세요』잖아!」"
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「%CALLNAME%의 역할은 계속, 계~속 주인을 모시는 거야!」"
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「그러니까 매일매일 충성심을 보여야 해!」"
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「싫어, 싫어! 보자마자 일정 얘기부터 하지 마!」"
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「%CALLNAME%! 명령이야. 계획 세우기 전에 먼저 주인에게 이야기를 들려줘!!」"
            - if: era.get('cflag:97:招募状态') !== 1
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「들었어!? %CALLNAME%! 트레센 학원에는——사실 %UMA% 뱀파이어가 있대!」"
            - if: era.get('cflag:97:招募状态') === 1
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「%CALLNAME%! 어떻게 %UMA% 뱀파——아냐, 아냐! 스틸 여남작이랑 알게 된 거야? 빨리 말해!!」"
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「연금술? 그런 건 내 실력의 이 할 팔 푼 육 리밖에 안 돼! 최근에 배운 게 아니야!」"
            - random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「왜 그래!? %CALL_68%도 마시고 보건실에 간 약인데, 왜 %CALLNAME%한테는 먹이면 안 되는 거야!」"
            # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
            - if: era.get('cflag:44:育成回合计时') > 47 + 42
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「무슨 생각을 하는 거야, %CALLNAME%!」"
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「모자가 없어도 나는 천재 %MOHOSHOJO% 스위피거든!!」"
            - if: era.get('cflag:44:育成回合计时') > 47 + 42
              random: true
              lines:
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「%CALLNAME%! 마법 해설서 같은 건 이제 가져오지 마!」"
                - color: %COLOR%
                  content:
                    - fontWeight: bold
                      content: %CHARA%
                    - "「천재 %MOHOSHOJO% 스위피는 이제 혼자서도 독창적인 마법을 만들 수 있어!」"


office_study:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「있잖아! %CALLNAME%! 달리기의 마법을 더 잘 쓰는 요령 없어!?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「잡일? 진작 끝냈어.」"
      - "뜻밖의 대답이 돌아왔다"
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') < 95+25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 이런 책 읽기 싫다구!!」"
          - "결국 %YOU%이(가) 이쪽에서 읽어 주고, %CHARA%은(는) 저쪽에서 가만히 듣는……그런 상황이 되었다"
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「천재 %MOHOSHOJO% 스위피가 직접 이런 잡무를 처리해야 하다니!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「있잖아! %CALLNAME%! 왜 주인이 할 잡일을 네가 대신 끝내 주지 않는 거야~~!」"
          - "가르쳐 주는 정도는 할 수 있다……%CHARA%이(가) 그저 귀찮아하는 교과 숙제를 함께 해치웠다"
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 왜 잡일이 날마다 늘어나는 거야!!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『영어만 남았잖아』……? 할 줄 아는데 왜 또 해야 해!」"
          - "아무튼 %YOU%의 격려 덕분에 %CHARA%은(는) 십 분도 안 돼 영어 숙제를 끝냈다"
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') >= 95+25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「천재 %MOHOSHOJO% 스위피가 직접 이런 숙제를 끝내야 하다니!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「있잖아! %CALLNAME%! 왜 주인이 할 숙제를 네가 대신 끝내 주지 않는 거야~~!」"
          - "어째서 아직도 숙제하기 싫어하는 걸까……"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 숙제할 시간에 마법을 연구하면 한꺼번에 몇 개나 완성할 수 있을 텐데!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「있잖아! %CALLNAME%! 아무튼 전부 너한테 맡길게!!!」"
          - "도망가지 말아 줬으면 한다……"


office_prepare:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……그러니까 이건 이렇게……저건 저렇게……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……더 알려 줄 건 없어? ……그리고 주인의 지팡이랑 모자를 속여서 빼앗을 생각은 하지 마!!」"
          - "결국 레이스 때만큼은 벗자는 제안은 받아들이지 않았다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……알았어, 알았어! 그런 걸 천재 %MOHOSHOJO% 스위피가 모를 리 없잖아!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……왜 갑자기 말이 없어? ……계속해.」"
          - "아무튼 %CHARA%이(가) 들어 주기만 하면 된다"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! %CALLNAME%이(가) 주인 지팡이에 멋대로 손대게 둘 것 같아!!」"
          - "일단 모자와 지팡이를 뺀 소지품을 정리하는 방법을 %CHARA%에게 가르쳤다……"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 미래의 대마법사 모자를 %CALLNAME%이(가) 멋대로 만져도 될 리 없잖아!!!」"
          - "일단 모자와 지팡이를 뺀 소지품을 정리하는 방법을 %CHARA%에게 가르쳤다……"
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『이렇게 하면 레이스에서 마법을 더 잘 쓸 수 있어』……?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흐음. 알았어, 알았어.」"
          - "%CHARA%은(는) 말없이 %YOU%을(를) 따라 하며 레이스 준비를 한다"
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『마법 편자』는……아무리 높은 곳에서 뛰어내려도 상처 하나 안 생긴대!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「있잖아! %CALLNAME%! 명령이야. 그런 편자 찾아와!」"
          - "우선 눈앞의 편자 손질부터 마치자……"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이렇게 하면……내 신발도 마법의 신발이 될 거야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……『마법의 신발은 어디에 쓰는데』? 아무튼 엄청 쓸모 있거든!」"
          - "마법 물건을 늘려 가는 모양이다……"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME% 말은 인정하지만, 주인으로서 조금 고치고 싶어……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이렇게——그리고 이렇게, 마지막으로 이렇게 하는 거야!」"
          - "말만 들었을 때는 미덥지 않았지만, 실제로 해 보니 %CHARA%의 준비 방법은 의외로 효과가 있다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『이렇게 하면 레이스에서 마법을 더 잘 쓸 수 있어』……?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫다구——!! 주인 귀에 딱지 앉겠어——!!!」"
          - "아무튼 %YOU%이(가) 새로운 표현을 짜내느라 머리를 싸매는 동안, %CHARA%은(는) 스스로 레이스 준비를 시작했다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『마법 편자』는……아무리 높은 곳에서 뛰어내려도 상처 하나 안 생긴대!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「있잖아! %CALLNAME%! 우리도 그런 편자를 만들 수 없을까?」"
          - "직접 만드는 건 적당히 해 줬으면 한다……"


talk:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『마녀의 밤』을 위해서는 %CALLNAME%이(가) 주인을 더, 더 열심히 모셔야 해!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「언제 어디서든 주인에게 디저트를 가져올 수 있게 준비해 둬♪」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『마녀의 밤』을 위해서는 %CALLNAME%이(가) 주인을 더, 더 열심히 모셔야 해!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「주인이 대마법사에게 인정받을 때까지 한~ 발짝도 떨어지면 안 돼!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이렇게……그리고 이렇게……『마녀의 밤』이 되면 분명……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「거기! 멍하니 있지 마, %CALLNAME%! 이 방법이 맞는지 빨리 주인을 도와줘!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「주인이 소중히 간직해 온 마법 디저트가 드디어 쓰일 때가 왔어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「열심히 일하면 스위피 님의 마법 쿠키를 『마녀의 밤』이 끝난 뒤에 %CALLNAME%에게 몇 개 나눠 줄 수도 있어!」"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭔데, 뭔데!? 새 마법의 단서가 어디에 있어??」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「왜 갑자기 말이 없어!? 계속 말해, %CALLNAME%!!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭔데, 뭔데!? %CALLNAME%, 어두운 밤의 정령을 잡았어??」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「쥐네. 흐음.」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「열심히 일하면 주인한테 상을 받을 수 있어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「상은——%CALLNAME%이(가) 밖에 나가 주인의 디저트를 사 오는 거야!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이 마법약을 쓰면 %CALLNAME%은(는) 스물네 시간 내내 주인을 위해 일할 수 있어~♪」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……왜 그렇게 싫은 표정이야!!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「마법 연습이 아니면 절대 안 해! 마음에 안 드는 연습도 절대 안 해!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「하지만 %CALLNAME%이(가) 추천하는 연습이라면, 주인도 뭐, 생각해 줄 수는 있어!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「나보다 못한 사람을 봐도 먼저 나를 칭찬해. 나보다 뛰어난 사람을 봐도 먼저 나를 칭찬해!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%한테는 주인이 얼마나 대단한지 말할 권리밖에 없거든~!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 또 마법이랑 상관없는 얘기하고 있지!?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「안 들어, 안 들어! 듣길 바라면 %CALLNAME%, 먼저 주인에게 마법 얘기를 해~!」"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「나보다 못한 사람을 봐도 먼저 나를 칭찬해. 나보다 뛰어난 사람을 봐도 먼저 나를 칭찬해!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그래, 그래, 그렇게! 위대한 천재 %MOHOSHOJO% 스위피 님을 더 칭찬해!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭔데, 뭔데!? %CALLNAME%, 또 마법에 관한 단서를 들었어!?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흐흥~ 그럼 결정! 오늘 밤은 %CALLNAME%을(를) 데리고 거기 갈 거야!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「마법을 쓰려면 마력은 반드시 필요해!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그러니까 디저트는 빠질 수 없다는 뜻이지~♪」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「마법의 단서를 모으는 일은 게으름 피우면 안 돼!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「안 그러면 주인은 %CALLNAME%을(를) 데리고 어디로 가라는 거야!?」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이 책도, 저 책도」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「아무튼! 천재 %MOHOSHOJO% 스위피 님이 나중에 쓸 책, %CALLNAME%은(는) 똑똑히 외워 둬!」"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「열심히 일하면 주인한테 상을 받을 수 있어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「상은——%CALLNAME%이(가) 주인의 디저트를 살 때, 자기 것도 하나 더 사도 되는 거야!」"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이 마법약을 쓰면 %CALLNAME%은(는) 일할 때도 의욕이 충분히 넘칠 거야~♪」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……의욕이 백 배라고? 그렇게 맛없지는 않거든!」"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 네가 하는 그 얘기도, 그 얘기도, 너무 재미없어!!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『지어낸 얘기니까』……? 그럼 좀 더 재밌게 지어내면 되잖아!??」"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그랜마가 어떻게 생각하든, %CALLNAME%이(가) 나를 어떻게 보든……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「오늘은 꼭 그 디저트 가게의 신작 파르페를 먼저 차지할 거야!!」"


office_gift:
  - if: era.get('relation:44:0') < 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야, 뭐야! %CALLNAME%의 사과 선물은 이게 다야!?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「다음에도 이러면 %CALLNAME% 같은 건 모른 척할 거야!」"
      - "그래도 %CHARA%의 기분은 풀린 모양이다"
  # 大魔法使いの約束の期間
  - if: (t = (era.get('cflag:44:育成用变量')?.agreement > 0)) && era.get('relation:44:0') >= 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야, 뭐야! 이럴 때 또 주인 비위를 맞추려고!?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「『연습에 도움이 돼』……? 그럼 빨리 줘야지?!」"
      - "아무튼 %CHARA%은(는) %YOU%의 선물을 받아 주었다"
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
  - if: "!t && era.get('relation:44:0') >= 0 && era.get('cflag:44:育成回合计时') >= 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그래, 그래! 디저트라면 얼마든지 괜찮아~♪」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「으으~! 왜 그렇게 못마땅한 표정이야! 선물하는 거 아냐!?」"
          - "%CHARA%이(가) 살찌지 않겠다고 약속하고 나서야 %YOU%은(는) 안심하고 디저트를 건넸다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「잘했어, 잘했어! 천재 %MOHOSHOJO% 스위피, 오늘부터 책을 모을 거야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「올해 안에 그랜마보다 책을 더 많이 모을 거라구~!」"
          - "%CHARA%은(는) 기뻐하며 %YOU%이(가) 준 이야기책을 받았다"
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より前
  - if: "!t && era.get('relation:44:0') >= 0 && era.get('cflag:44:育成回合计时') < 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그래, 그래! 디저트라면 얼마든지 괜찮아~♪」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%이라면 주인이 살찌기 전에 최대한 많이 가져와!」"
          - "조금 걱정되기는 한다……하지만 디저트를 받은 %CHARA%은(는) 무척 기뻐 보인다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「잘했어, 잘했어! %CALLNAME%을(를) 더 많이 모으면」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그날이 왔을 때, 대%MAJO%가 된 천재 %MOHOSHOJO% 스위피가 세계를 지배할 수 있어!」"
          - "봉제 인형을 받은 %CHARA%은(는) 무척 기뻐 보인다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 왜 이상한 책이야!?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……! 이 책은!?」"
          - "새로 받은 동화책이 %CHARA%의 마음에 쏙 든 모양이다"
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그래, 그래! 디저트라면 얼마든지 괜찮아~♪」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%이라면 주인이 살찌기 전에 최대한 많이 가져와!」"
          - "조금 걱정되기는 한다……하지만 디저트를 받은 %CHARA%은(는) 무척 기뻐 보인다"
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「잘했어, 잘했어! 마법책을 더 모으면」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「천재 %MOHOSHOJO% 스위피가 빨리 대마법사가 되는 건 문제도 아니야~!」"
          - "%CHARA%은(는) 기뻐하며 %YOU%이(가) 준 이야기책을 받았다"


office_cook:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……『이걸 먹으면 마력을 보충할 수 있어』?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……흥. 이번만 %CALLNAME%을(를) 믿어 줄게.」"
      - "%CHARA%은(는) 말없이 %YOU%이(가) 가져온 도시락을 먹고 있다"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐 하는 거야, %CALLNAME%! 우리가 여기 온 의미가 있긴 해!?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……! 저거, 새로 나온 마법 디저트……?!」"
          - "일단 %CHARA%에게 디저트를 사 주었다"
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「있잖아, %CALLNAME%. 채소도 달게 만들 수 있어?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그리고 그 고기랑 생선 같은 것도 전부 사탕처럼 만들 수 없어?」"
          - "설탕을 너무 많이 먹어 충치가 생기고 살까지 찌는 이중고가 절로 떠오른다. 일단 이런저런 이유를 대며 %CHARA%의 부탁을 얼버무렸다……"
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%——! 왜 안에 파프리카가 들어 있어!!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어, 쓰고 맛없어!!」"
          - "결국 %CHARA%은(는) 도시락의 파프리카를 하나씩 골라내고, 나머지는 깨끗이 먹어 치웠다……"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「있잖아~ %CALLNAME%, 주인은 정말 디저트가 먹고 싶어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「다음 도시락에는 위에 아이스크림을 얹으면 어때? 응?」"
          - "그건 무리다……"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「있잖아~ %CALLNAME%, 파프리카는 안 삶는 게 훨씬 맛있대」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그렇게 주인한테 파프리카를 먹이고 싶으면 적어도 조리법은 바꿔~!」"
          - "%CHARA%은(는) 파프리카를 먹지 않을 그럴듯한 이유를 찾기 시작했다……"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 왜 이번 도시락은 전부 채소 샐러드야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「고기는 어디 있어? 생선은? 디저트는 어디 있냐구~~?!!」"
          - "마지막 요구만 아니었으면 지당한 말이다……"


office_rest:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……『일과 휴식을 병행해야 마법도 더 잘 늘어』?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……%CALLNAME%부터 자.」"
      - "일단 %YOU%은(는) 자는 척을 하다가 %CHARA%이(가) 정말 잠든 뒤에야 안심했다"
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') < 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! %CALLNAME%, 주인을 그렇게 신경 써서 어쩌려고!?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「포피★주니퍼, %CALLNAME%, 잠들어라!!」"
          - "결국 %CHARA% 자신이 먼저 졸기 시작했고, %YOU%와(과) 함께 낮잠을 잤다"
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! %CALLNAME%이(가) 졸리면 혼자 자면 되잖아!!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「천재 %MOHOSHOJO% 스위피는 낮에도 밤에도 잠의 정령 따위한테 안 져!」"
          - "그러니까 밤에는 제대로 안 잔다는 뜻이겠지……%CHARA%에게 눈을 감고 마법을 생각해 보라고 하자, 이내 %SEX%는 꾸벅꾸벅 졸기 시작했다"
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') >= 95 + 25"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어, 싫어! 졸려도 자기 싫단 말이야~~!!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『그럼 커피 마실래』……? 싫어, 싫어! 써, 잘게, 잔다구!!!」"
          - "%CHARA%은(는) 얌전히 휴게실에서 낮잠을 잤다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야, 뭐야! 왜 %CALLNAME%이(가) 쉬라고 하면 내가 멈춰야 하는 거야~!!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『%CALLNAME% 봐서라도』……? %CALLNAME% 얼굴에 언제부터 그런 힘이 있었는데~~!!!」"
          - "못마땅한 표정이었지만, %CHARA%은(는) 휴게실에서 얌전히 낮잠을 잤다"


office_game:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……『게임하자』? 이런 때 게임할 기분이야, %CALLNAME%——!!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어! %CALLNAME%이(가) 놀고 싶으면, 주인은 혼자 연습할 거야!!!」"
      - "%CHARA%은(는) 전혀 그럴 기분이 아닌 모양이다……"
  # ジュニア級4月より前
  - if: "!t && era.get('cflag:44:育成回合计时') < 12"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어, 싫어! 왜 주인이 %CALLNAME% 말을 들어야 해!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%이(가) 게임하고 싶으면 혼자 하면 되잖아!?」"
      - "결국 %CHARA%은(는) 옆에서 가만히 %YOU%의 게임을 지켜봤다……"
  # ジュニア級4月以降
  - if: "!t && era.get('cflag:44:育成回合计时') >= 12"
    lines:
      # 初回
      - if: "!d.game"
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%, 그렇게 게임이 좋아?」"
          - "게임을 하고 있는데, 옆에 가만히 서 있던 %CHARA%이(가) 갑자기 입을 열었다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……게임 실력은 주인보다 못하는 것 같은데.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야! 왜 그렇게 불만스러운 표정이야! 남들 앞에서 게임하면 평가받는 것도 당연하잖아!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『……그럼 나도 할래?』『……아무거나 괜찮아?』 당연히 괜찮지!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흐흥~ 그럼 %CALLNAME%에게 좀 보여 줄게. 천재 %MOHOSHOJO% 스위피의 『게임 마법』을!」"
      - if: d.game > 0
        lines:
          - random: true
            lines:
              - "%CHARA%와(과) 함께 RPG를 하고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「아니, 아니, 왜 하다가 갑자기 울기 시작하는 거야!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「아직 최강의 마법은 쓰지도 않았는데!!!」"
          - random: true
            lines:
              - "%CHARA%와(과) 함께 RPG를 하고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「싫어, 싫어, 싫어! 또 무슨 얘기를 하는 거야!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「말하는 틈에 그냥 마법을 쓰면 되잖아!?」"
          - random: true
            lines:
              - "%CHARA%와(과) 함께 RPG를 하고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「바보 %CALLNAME%! 여기서는 이렇게 해야지! 받아라——!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「왜 불 속성 대미지가 안 들어가!!」"
          - random: true
            lines:
              - "%CHARA%와(과) 함께 RPG를 하고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「흑……흑……흐으으으으으으으으」"
              - "아무래도 %SEX%의 마음을 울리는 이야기도 있나 보다……"
          - random: true
            lines:
              - "%CHARA%와(과) 함께 마법 학원 경영 게임을 하고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「봐, %CALLNAME%! 이 %MOHOSHOJO%의 지팡이, 내 거랑 닮지 않았어!?」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「흐흥~ 이 마법 주문은 벌써 외웠어!」"
          - random: true
            lines:
              - "%CHARA%와(과) 함께 가게 경영 게임을 하고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「이렇게, 저렇게——조합 완성! 흐흥~ 이런 마법 물약은 틀림없이 비싸게 팔릴 거야~!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「왜, 왜 마음에 안 든다고 돈을 안 내는 거야!!」"
          - random: true
            lines:
              - "%CHARA%와(과) 함께 RPG를 하고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「이 마법이랑……이 마법을 쓰면 금방 마왕을 쓰러뜨릴 수 있어!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「이번에야말로 최강의 마법사가 될 거야!!!」"
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「! 이 %MOHOSHOJO%도, 저 마법사도 얻을 수 있어!?」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「……돈이 들어? 그럼 얻을 수 있다는 거잖아! 갖고 싶어, 갖고 싶다구!!」"
              - "어떻게든 유료 게임에 과금하려는 %CHARA%을(를) 말렸다……"
          # クラシック級
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - "%CHARA%이(가) 탄막 게임을 하는 모습을 보고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「싫어, 싫어! 왜 이 탄막은 이렇게 어려워!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「폭탄 벌써 다 썼어!? 시~~~러~~~!!!」"
          # クラシック級
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - "%CHARA%와(과) 함께 꽤 어려운 액션 게임을 하고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「싫어, 싫어! 왜 두 대 맞았다고 쓰러지는 거야!!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「안 돼! 아무튼 체력에 40까지 찍고……!」"
          # クラシック級
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - "「이 몬스터부터 잡고 상점에서 방어력을 사면 되는데……」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「? 그런 공략법도 있어?」"
              - "서투른 마탑 계열 게임에서는 의외로 순순하다"
          # クラシック級
          - if: era.get('cflag:44:育成回合计时') >= 48
            random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「이렇게……저렇게……이 마법, 조합됐다!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「이름은……스위피류 몬스터 소환술!」"
              - "애초에 TRPG에서 소환만 해 봤자 별 도움이 안 되지 않을까……"
          # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - "%CHARA%와(과) 함께 격투 게임을 하고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「약해, 약해! 내 흑백 마법사가 네 홍백 마녀보다 강한 건 당연하지!!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「Tosho★Spark！！！」
          # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - "%CHARA%와(과) 함께 카드 게임을 하고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「싫어, 싫어, 싫어! 왜 패에서 발동하는 함정 카드를 그렇게 많이 넣은 거야!!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「왜 나는 한 장도 못 뽑는 거야!!!」"
          # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
          - if: era.get('cflag:44:育成回合计时') >= 95 + 25
            random: true
            lines:
              - "%CHARA%와(과) 함께 RPG를 하고 있다"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「싫어, 싫어, 싫어! 왜 학교에 가는 시간 같은 게 있어!」"
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「팰리스에 안 가고 어떻게 더 강한 페르소나를 얻으라는 거야!」"


borrow_money:
  # ジュニア級4月より前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - "%CHARA%에게 돈을 빌리고 싶다고 말했다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「돈을……빌린다고……?」"
      - "%CHARA%은(는) 잠시 어리둥절한 표정이다"
      - "하지만 금세 평소의 표정으로 돌아왔다"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「흥! %CALLNAME%한테 돈이 없는 건 %CALLNAME% 자신의 문제잖아!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「월급이 깎였다거나, 과자를 너무 많이 샀다거나, 갖고 싶은 장난감이 있다거나——」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그런 소원을 주인이 쉽게 들어줄 리 없잖아!」"
      - "아무튼 %CHARA%은(는) 돈을 빌려 달라는 부탁을 거절했다……"
  - if: era.get('cflag:44:育成回合计时') >= 12 && !d.borrow
    lines:
      - "%CHARA%에게 돈을 빌리고 싶다고 말했다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「돈을……빌린다고……?」"
      - "%CHARA%은(는) 잠시 어리둥절한 표정이다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 돈이 부족해?」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「맞혀 볼게……」"
      - "곧바로 추측하기 시작했다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 월급이 깎였어? 과자를 너무 많이 샀어? 갖고 싶은 장난감이 있어?」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「역시! 주인이 안 보고 있으면 돈 쓰는 것도 안심할 수 없다니까!」"
      - "대뜸 결론을 내렸다"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐, 좋아! 주인이 이번에는 너그럽게 봐서 %CALLNAME%을(를) 탓하지 않을게!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 기다려! 내일 주인이 네 문제를 해결해 줄게!」"
      -
      - "다음 날, %CHARA%은(는) %YOU%의 사무실에 와서 기숙사 구석구석을 뒤져 모은 새 돈과 낡은 돈을 책상 위에 와르르 쏟아 놓았다"
  - if: era.get('cflag:44:育成回合计时') >= 12 && d.borrow > 0
    lines:
      - "%CHARA%에게 돈을 빌리고 싶다고 말했다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……」
      - "어째서인지 %YOU%이(가) 빌리려는 액수를 듣고 나자 %CHARA%은(는) 입을 다물었다"
      -
      - "그러더니 갑자기 모자를 벗고 허리의 지팡이를 풀어 책상 위에 놓았다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……%CALLNAME%. 밖에 내다 팔아 봐. 그러면 아직 늦지 않았을지도 몰라」"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아니면……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「적어도……주인한테는 알리지 마——」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「네가 정말 누군가의 『그런 %CALLNAME%』이(가) 되어 버렸다……같은 건.」"
      -
      - "%CHARA%의 오해가 끝없이 커지기 전에, %YOU%은(는) 농담처럼 얼버무리며 %CHARA%에게 돈을 빌리겠다는 말을 거두었다"


s_a_tree_hollow:
  # ジュニア級4月より前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야, 뭐야! 학원 근처에 이렇게 사악한 게 있다고!?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「안 돼, 안 돼! 난디나 도메스티카★가르말라, 천재 %MOHOSHOJO% 스위피가 정화하겠어!!」"
      - "%YOU%의 설명을 들은 %CHARA%은(는) 마른 나무 구멍을 향해 지팡이를 휘두를 뿐이었다"
  - if: era.get('cflag:44:育成回合计时') >= 12 && !d.tree_hollow
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「원한이 짙은 곳은 %MOHOSHOJO%의 적이야! 이런 데는 천재 %MOHOSHOJO% 스위피가 다시는 안 와!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……%CALLNAME%, 주인 대신 근처에 사람이 있나 봐 줘. 시험 삼아 조금만 해 볼 거야.」"
      - "주변에 사람이 없는 걸 확인하자, %CHARA%은(는) 다른 사람들처럼 마른 나무 구멍에 대고 외치기 시작했다"
  - if: era.get('cflag:44:育成回合计时') >= 12 && d.tree_hollow > 0
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「바——보——사——역——마——→」"
          - "본인이 있는데 그런 말은 외치지 말아 줬으면 한다……"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「아——이——스——크——림——줘——→」"
          - "주변에 사람이 없는 걸 확인하고, %CHARA%은(는) 마른 나무 구멍에 대고 그렇게 외쳤다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「파——프——리——카——맛——없——어——→」"
          - "주변에 사람이 없는 걸 확인하고, %CHARA%은(는) 마른 나무 구멍에 대고 그렇게 외쳤다"
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「내——가——증——명——할——거——야——→」"
          - "주변에 사람이 없는 걸 확인하고, %CHARA%은(는) 마른 나무 구멍에 대고 그렇게 외쳤다"
      - if: era.get('cflag:44:育成回合计时') > 47 + 42
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「잘——지——켜——봐——→」"
          - "주변에 사람이 없는 걸 확인하고, %CHARA%은(는) 마른 나무 구멍에 대고 그렇게 외쳤다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「마——법——은——진——짜——야——↑」"
          - "주변에 사람이 없는 걸 확인하고, %CHARA%은(는) 마른 나무 구멍에 대고 그렇게 외쳤다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「사——역——마——도——망——가——지——마——→」"
          - "주변에 사람이 없는 걸 확인하고, %CHARA%은(는) 마른 나무 구멍에 대고 그렇게 외쳤다"


s_a_dating:
  # 大魔法使いの約束の期間
  - if: t = (era.get('cflag:44:育成用变量')?.agreement > 0)
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……『놀러 가자』? 이런 때 놀러 갈 기분이야, %CALLNAME%——!!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어! %CALLNAME%이(가) 혼자 돌아다니고 싶으면, 주인도 혼자 연습할 거야!!!」"
      - "%CHARA%은(는) 전혀 그럴 기분이 아닌 모양이다……"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: "!t && era.get('cflag:44:育成回合计时') <= 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「왜, 왜? %CALLNAME%, 학원에서 새 마법을 찾았어!?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……『아직 없어』? 곧 찾을 거란 뜻이지?!」"
          - "일단 %CHARA%와(과) 함께 안뜰을 걸었다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야, 뭐야! 왜 대나무가 없어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「참새가 만든 음료도, 달에서 내려온 아이도 대나무가 없으면 못 찾잖아?!」"
          - "일단 %CHARA%와(과) 함께 안뜰을 걸었다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「열심히 마법의 단서를 찾으면, 돌아가서 %CALLNAME%에게 맛있는 걸 줄게~!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……아냐!! 주인이 『매번』 %CALLNAME%의 상을 혼자 먹어 버렸다니, 그럴 리 없잖아!!!」"
          - "%CHARA%은(는) 화를 내며 %YOU%의 말에 반박했다"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: "!t && era.get('cflag:44:育成回合计时') > 47 + 42"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이런 전설도, 저런 전설도 분명 근거가 있어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흐흥~ 봐, %CALLNAME%. 학원에 새 %CALLNAME%이(가) 왔다고 했잖아!」"
          - "괴이한 소문을 따라간 %YOU%와(과) %CHARA%은(는) 정말로 새끼 고양이 한 마리를 발견했다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「학교 화단이야 결국 그 정도지!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「있잖아, %CALLNAME%. 학원에 부탁해서 천재 %MOHOSHOJO% 스위피 전용 재료 밭을 만들어 달라고 하면 어때!?」"
          - "%CHARA%와(과) 함께 안뜰을 천천히 걸었다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야, 뭐야! 겨우 그런 일로 주인을 그렇게 급하게 불러내야 해!?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「다음부터는 %CALLNAME%이(가) 납치되는 일 같은 게 아니면 긴급 연락 금지!!」"
          - "%CHARA%와(과) 함께 안뜰을 천천히 걸었다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이번 마법의 단서 찾기가 끝나면, 돌아가서 %CALLNAME%에게 맛있는 걸 줄게!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「입을 벌릴 때는 『아——』라고 하고, 다 먹으면 주인한테 『맛있어』라고 대답해!」"
          - "%CHARA%와(과) 함께 안뜰을 천천히 걸었다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야, 뭐야! %CALLNAME%의 그런 핑계는 어린애도 싫어하겠다?!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「주인이 말하자면, 오늘 이 『마법의 숲』에 온 건——」"
          - "%CHARA%와(과) 함께 안뜰을 천천히 걸었다"


out_disabled_in_agreement:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……『놀러 가자』? 이런 때 놀러 갈 기분이야, %CALLNAME%——!!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「싫어, 싫어! %CALLNAME%이(가) 혼자 돌아다니고 싶으면, 주인도 혼자 연습할 거야!!!」"
  - "%CHARA%은(는) 전혀 그럴 기분이 아닌 모양이다……"


o_r_fishing:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - "%CHARA%와(과) 함께 강둑에 가서 혼자 낚시를 했다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야, 뭐야! 낚시는 앉아서 기다리기만 하는 거야!?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「허니서클★페루비안 릴리, 물고기야, 잡혀라~!」"
          - "이유는 모르겠지만, %CHARA%이(가) 떠드는 동안에는 물고기가 조금 더 빨리 잡히는 것 같았다"
      - random: true
        lines:
          - "%CHARA%와(과) 함께 강둑에 가서 혼자 낚시를 했다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 왜 갑자기 낚시 같은 걸 시작하는 거야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%! 명령이야. 낚시하는 동안 주인하고 더 얘기해!!」"
          - "이유는 모르겠지만, %CHARA%와(과) 이야기하는 동안에는 물고기가 조금 더 빨리 잡히는 것 같았다"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - "%CHARA%와(과) 함께 강둑에 가서 혼자 낚시를 했다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야, 뭐야! %CALLNAME%, 왜 그렇게 낚시를 좋아하는 거야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%이(가) 대어를 낚게 저주를 걸겠어! 나스터튬★알스트로메리아, 대어야, 잡혀라~!」"
          - "이유는 모르겠지만, %CHARA%이(가) 떠드는 동안에는 평소보다 조금 더 큰 물고기가 잡히는 것 같았다"
      - random: true
        lines:
          - "%CHARA%와(과) 함께 강둑에 가서 %SEX%와 나란히 낚시를 했다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「낚시쯤이야 천재 %MOHOSHOJO% 스위피가 %CALLNAME%보다 잘하는 게 당연하지!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「봐 봐! 주인이 잡은 물고기가 역시 %CALLNAME% 것보다 커~!」"
          - "%CHARA%와(과) 이야기하며 낚시하다 보니 처음에 뭘 겨루고 있었는지 점점 잊어버렸다"


o_r_walking:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「왜, 왜? %CALLNAME%, 강가에서 새 마법을 찾았어!?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……『아직 없어』? 곧 찾을 거란 뜻이지?!」"
          - "일단 %CHARA%와(과) 함께 강둑을 걸었다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「밤이 깊고 바람이 세게 불 때……『불행의 검은 고양이』가 강에 마법의 물고기를 찾으러 온대!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%! 오늘은 여기서 잠복할 거야. 그 마법의 검은 고양이랑 마법의 물고기를 찾기 전에는 안 돌아가!!」"
          - "이런저런 이유를 대며 어떻게든 %CHARA%의 관심을 다른 데로 돌렸다……"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「강가의 수초도 놓치면 안 돼!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그중에 재료로 딱 좋은 약초가 있을지도 모르잖아——」"
          - "일단 %CHARA%와(과) 함께 강둑을 걸었다"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『강에 물귀신 같은 건 없어』라는 사람은 그냥 바보야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「봐 봐! %CALLNAME%, 저기 커다란 검은 그림자 봤어!?」"
          - "%CHARA%의 시선을 따라가 보니, 물속에는 정말 큰 물고기가 있었다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그래, 그래! 이렇게……그리고 저렇게 하면 물고기가 잔뜩 모여들어~!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『고양이가 물고기 구경하려는 것 같아』……? 고양이 아니거든!!!」"
          - "%CHARA%은(는) 화를 내며 %YOU%의 말에 반박했다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「들었어! 오늘 강가 노점에서 수제 『마법 과자』를 판대」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「오늘은 주인이 누구보다 먼저 갈 거야!!」"
          - "%CHARA%와(과) 함께 강둑을 걸었다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「들었어! 오늘 강가 노점에서 어릴 때 읽었던 『마법책』을 판대」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그 『마법책』에 깃든 힘도 모르다니! 천재 %MOHOSHOJO% 스위피가 그 책을 구해 낼 거야!」"
          - "%CHARA%와(과) 함께 강둑을 걸었다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「인간은 물의 힘을 두려워해……하지만 마법사는 물의 힘을 다룰 수 있어……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그래서 천재 %MOHOSHOJO% 스위피는 매일 강으로 산책을 오는 거야~!」"
          - "%CHARA%와(과) 함께 강둑을 걸었다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「인간이 물의 힘을 두려워하든 말든……마법사가 물을 다룰 수 있든 없든……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어느 쪽이든 천재 %MOHOSHOJO% 스위피가 매일 강으로 산책 오는 건 변함없어~!」"
          - "%CHARA%와(과) 함께 강둑을 걸었다"


o_s_arcade:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야, 뭐야! %CALLNAME%, 왜 그렇게 인형 뽑기를 좋아하는 거야!?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「! %CALLNAME%, 저거 갖고 싶어. 맞아, 저거!! 지금 당장, 꼭, 놓치면 안 돼!!!」"
          - "%CHARA%의 지시대로 %YOU%은(는) %SEX%가 갖고 싶어 하는 봉제 인형을 무사히 뽑았다"
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「무슨 게임이든 천재 %MOHOSHOJO% 스위피는 안 져~!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어, 싫어! %CALLNAME%!! 다음 판에서는 버튼 만지면 안 돼!!!」"
          - "%CHARA%에게 몇 번 이기고 나자 %SEX%는 조금 심통이 난 모양이다"
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「북 치기쯤이야 천재 %MOHOSHOJO% 스위피 님에게는 식은 죽 먹기야~!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 왜 이렇게 어려워!??」"
          - "%CHARA%은(는) 너무 어려운 게임에 머리를 싸맨다"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이렇게——그리고 저렇게 하면 사람을 구할 수 있어~!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「왜, 왜! 사람을 구했는데 전리품을 안 줘!?」"
          - "%CHARA%은(는) 게임의 보상 방식이 못마땅한 모양이다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이 기술을 피하고, 그다음 저 기술을 막고, 그러면——」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「받아라, 스위피 님의 절대 마법——!!」"
          - "%CHARA%은(는) 게임에서 필살기를 쓴 데 만족하는 모양이다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95+25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어떤 괴담이든 천재 %MOHOSHOJO%라면 이 총으로 해치울 수 있어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「절대로! 무……섭……지……않……아……」"
          - "그래도 %CHARA%은(는) 아케이드 게임의 공포 연출에 겁을 먹은 모양이다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95+25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어떤 차든 천재 %MOHOSHOJO% 스위피라면 능숙하게 몰 수 있어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「아니, 아니! 왜 부딪히고 나서 반대 방향으로 달릴 수 있는 거야!?」"
          - "%CHARA%은(는) 차의 방향을 바로잡는 데 꽤 오랜 시간이 걸렸다"


o_s_drawing:
  - if: "!d.drawing"
    lines:
      - "%CHARA%을(를) 데리고 (특별 제작한) 뽑기 가게에 들어갔다!"
      -
      - "당근도, 당근 함박스테이크도, 심지어 당첨될지도 모르는 특등상——온천 여행권까지 갖춰져 있다!"
      - "푸짐한 경품은 그야말로 우마%UMA%의 낙원——"
      -
      - "옆에서 %CHARA%이(가) 지팡이로 선반의 당근 함박스테이크를 살짝 찔렀다"
      - "함박스테이크가 아주 조금 뒤로 밀리며 옆면이 드러났다"
      -
      - "역시 당근에 관심이 생겼는지, %CHARA%은(는) 카운터 화판에 세워 놓은 당근을 하나 집어 들었다"
      - "앞뒤를 뒤집어 가며 뭔가 알아내려는 듯 빤히 살핀다"
      - "마지막에는 어째서인지 공중에서 손을 놓아 당근을 떨어뜨렸다"
      -
      - "사락——"
      - "사락——"
      -
      - "(부드러운 종이로 만든) 당근 한 개가"
      -
      - "살랑살랑 흔들리며"
      -
      - "천천히"
      -
      - "바닥으로 떨어졌다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……」
      - "자그마한 우마%UMA%는 바닥에 착 달라붙은 당근을 바라보며 어째서인지 말이 없어졌다"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「『종이 %CALLNAME%』.」"
      - "고개를 들고 지팡이로 %YOU%을(를) 살짝 가리킨다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이런 건 네게 영양분이 되겠지. 주인은 안 먹을 테니까 먼저 먹어.」"
      -
      - "적어도 그런 이상한 별명은 붙이지 말아 줬으면 한다……"
      - "아무튼 정성껏 준비한 이 시설에 %CHARA%을(를) 데려왔다"
  - if: d.drawing > 0
    lines:
      - "%CHARA%을(를) 데리고 (특별 제작한) 뽑기 가게에 들어갔다!"
      - "당근도, 당근 함박스테이크도, 심지어 당첨될지도 모르는 특등상——온천 여행권까지 갖춰져 있다!"
      - "푸짐한 경품은 그야말로 우마%UMA%의 낙원——"

osd_loop:
  -
  - acc: 1
    content: "(뽑기를 뽑는다!)"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야, 뭐야! 이번엔 뭘 뽑는 거야!?」"
      -
      - "%CHARA% 앞에서 %YOU%은(는) 뽑기 쪽지(종잇조각)를 천천히 펼쳐 안에 적힌 경품 이름을 보여 주었다"
      -
      - "당첨된 건——"
      - random: true
        lines:
          - "「휴지」!"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흐음.」"
          - "가장 실용적인 물건인데도 감상을 말하기조차 귀찮은 모양이다……"
      - random: true
        lines:
          - "「(납작한 판지) 당근 한 개」!"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 먹지도 못하는 당근을 어디에 쓰라는 거야!!」"
          - "일단 %CHARA%은(는) 그 작은 판지 당근을 입에 물고 위아래로 흔들고 있다"
      - random: true
        lines:
          - "「(납작한 판지) 당근 한 무더기」!"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「세 장을 합치면——진짜 당근 한 개가 될 거야~!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 마법을 걸었는데도 먹을 수 있을 것 같지가 않잖아!!」"
      - random: true
        lines:
          - "「(판지로 만든) 당근 버거」!"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……왜 뒷면에는 그림이 없어!!!」"
          - "%CHARA%은(는) 판지 뒷면에 자신만의 당근 버거를 그리기 시작했다……"
      - random: true
        lines:
          - "「(손으로 그린) 온천 여행권」!"
          -
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……%CALLNAME%이(가) 온천에 못 간다면 주인이 소원을 들어줄 수도 있어.」"
          - "%CHARA%은(는) 손으로 온천 여행권을 대량 생산하기 시작했다……"
  - acc: 2
    content: "(이제 돌아갈 시간이다)"
    lines:
      - "여전히 이상한, 혹은 조금 깔보는 눈길로 %YOU%을(를) 보고 있다"
      - "하지만 뽑기 가게에서 나온 %CHARA%의 기분은 확실히 좋아진 모양이다"


o_s_ktv:
  # ジュニア級4月より前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「노래……방……? 그런 데는 뭐 하러 가!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어! 왜 내가 %CALLNAME%하고 같이 노래해야 해!」"
      - "그래도 %CHARA%은(는) 곡을 고른 뒤 옆에 앉아 들으며, %YOU%에게 그 노래를 몇 번이고 부르게 했다……"
  # ジュニア級4月以降
  - if: era.get('cflag:44:育成回合计时') >= 12
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『무대 준비를 하자』『우마뾰이 전설』? 싫어, 싫어! 하기 싫어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「천재 %MOHOSHOJO% 스위피가 부를 노래는 당연히 이거——」"
          - "%YOU%의 원래 계획을 거절한 뒤, %CHARA%은(는) 당연하다는 듯 마법 소녀 애니메이션의 오프닝을 골랐다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『무대 준비를 하자』『채색 판타지아』? 싫어, 싫어! 부르기 싫어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「천재 %MOHOSHOJO% 스위피는 오늘 이것만 들을 거야——」"
          - "뜻밖에도 %CHARA%은(는) 가사가 있는 관현악곡을 골라 흥얼거리기 시작했다"

o_s_movie:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야, 뭐야! 이번엔 무슨 영화야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「사——역——마——! 내 팝콘은!?」"
          - "아무튼 %CHARA%와(과) 나란히 영화를 봤다"
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - "%CHARA%와(과) 함께 주로 어린이를 대상으로 한 영화를 봤다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 왜 세상이 바뀌었다고 마력이 없어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『우정은 마법』이라며!??」"
      # ジュニア級4月以降
      - if: era.get('cflag:44:育成回合计时') >= 12
        random: true
        lines:
          - "%CHARA%와(과) 함께 안내견이 나오는 영화를 보러 갔다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이제 주인도 곁에 있는 반려동물을 잘 아껴 줄게」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「우선 %CALLNAME%을(를) 아껴 주는 것부터 시작할 거야!」"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - "%CHARA%와(과) 함께 움직이는 성이 나오는 영화를 보러 갔다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「왜, 왜 저주에 걸리면 늙어야 해!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「『다들 너처럼 어른이 되기 싫어하는 건 아니야』……? 어린애 아니거든!!」"
      - random: true
        lines:
          - "%CHARA%와(과) 함께 로봇을 조종하는 영화를 봤다"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 왜 아빠가 로봇을 조종하라고 하면 해야 하는 거야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「세상이 멸망한다 해도……구할 다른 방법은 분명 있을 거야……!」"

o_c_pray:
  # ジュニア級4月より前
  - if: era.get('cflag:44:育成回合计时') < 12
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야, 뭐야! 왜 신사에 가는 거야!!!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「신? 신 같은 건 마법으로 대신하면 돼!!!」"
      -
      - "신단을 향해 주문을 외우는 것도 일종의 참배이긴 하겠지……"
  # ジュニア級4月以降
  - if: era.get('cflag:44:育成回合计时') >= 12
    lines:
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
      - if: era.get('cflag:44:育成回合计时') <= 47 + 42
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어떤 신이든 결국 마법에는 못 이겨!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……그러니까 %CALLNAME%, 이번에 뽑은 건 뭐……야?」"
      # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後、魔法の夢（シニア級7月第1週ターン開始イベント）より前
      - if: era.get('cflag:44:育成回合计时') > 47 + 42 && era.get('cflag:44:育成回合计时') < 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어떤 신이든 결국 마법에는 못 이겨!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「다음엔 천재 %MOHOSHOJO% 스위피 님에게 직접 부탁하면 되잖아!」"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어떤 신이든 결국 마법에는 못 이겨!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「다음에는 천재 %MOHOSHOJO% 스위피가 직접 만든 운세 제비로 뽑아야 해!」"
      - if: d.dice < 0.05
        content: "[대길]을 뽑았다!"
      - if: d.dice >= 0.05 && d.dice < 0.5
        content: "[길]을 뽑았다!"
      - if: d.dice >= 0.5 && d.dice < 0.95
        content: "[흉]을 뽑았다!"
      - if: d.dice >= 0.95
        content: "[대흉]을 뽑았다!"
      -
      - if: era.get('cflag:44:育成回合计时') < 47 + 42 && d.dice < 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그렇지, 그렇지! 천재 %MOHOSHOJO%의 %CALLNAME%이라면 운도 좋아진다고 했잖아~!」"
          -
          - "아마 그런 것과는 상관없을 것이다……"
      - if: era.get('cflag:44:育成回合计时') < 47 + 42 && d.dice >= 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「누군가에게 주워진다거나 그런 문제라면 주인한테 달려오지 마.」"
          -
          - "갑자기 운세를 믿기 시작한 %CHARA%와(과) 달리, %YOU%은(는) 갑자기 운세의 효험을 믿고 싶지 않아졌다……"
      - if: era.get('cflag:44:育成回合计时') >= 47 + 42 && era.get('cflag:44:育成回合计时') < 95 + 25 && d.dice < 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「말해 봐, 말해! 어떤 소원을 이루고 싶어, %CALLNAME%?」"
          -
          - "%YOU%은(는) 자신이 기도하는 신이 %CHARA%이라고는 별로 생각하지 않는다……"
      - if: era.get('cflag:44:育成回合计时') >= 47 + 42 && era.get('cflag:44:育成回合计时') < 95 + 25 && d.dice >= 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이렇게 나오면 %CALLNAME%의 소원은 이제 안 들어줄 거야!」"
          -
          - "%YOU%은(는) 자신이 기도하는 신이 %CHARA%이라고는 별로 생각하지 않는다……"
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25 && d.dice < 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그렇지, 그렇지? 역시 주인하고 있으면 운이 좋아져~!」"
          -
          - "그런 효과가 있을지도 모른다"
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25 && d.dice >= 0.5
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「싫어, 싫어! 안에 [대길]을 더 잔뜩 넣을 거야~!!!」"
          -
          - "아무튼 %CHARA%은(는) 끝내 실행에 옮기지는 않았다"


o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「왜, 왜! 왜 오므라이스에 케첩을 안 뿌리는 거야!?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%——! 거기 케첩 이리 내놔!!」"
      - "%CHARA%은(는) 오므라이스를 거의 케첩에 절이려 하고 있다……"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야, 뭐야! 주인에게 타이야키를 사 주다니, 무슨 생각이야!?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「왜 주인은 하나뿐인데 너는 두 개나 샀어!!?」"
      - "%CHARA%의 강한 요구에 %YOU%은(는) 더 산 것을 %CHARA%에게 건넸다"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「역시 오코노미야키는 달콤한 소스가 더 맛있어!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「다음에는 위에 꿀을 더하면 어떻게 되는지 주인이 시험해 볼게——」"
      - "자기 입맛에 맞는다면 그것도 나쁘지 않다……"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어! 왜 %CALLNAME% 크레이프에는 내 것보다 과일이 많아!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「같이 사 왔잖아!?」"
      - "%YOU%은(는) %CHARA%의 조금 질투 어린 시선을 받으며 크레이프를 먹었다"

o_s_dating:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: era.get('cflag:44:育成回合计时') <= 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「알았어, 알았어! %CALLNAME%, 거리에서 진짜 『대마법사』를 찾았구나!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흐흥~ 말 안 해도 돼! 바로 주인을 안내해!」"
          - "일단 %CHARA%와(과) 함께 역 앞 거리를 걸었다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%! 들었어, 요즘 이 거리에 『팔 척 괴인』이 나타난대……!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「천재 %MOHOSHOJO% 스위피 님이 반드시 정체를 밝혀내겠어!」"
          - "%CHARA%와(과) 이야기하며 역 근처 거리를 걸었다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%! 들었어, 요즘 새로운 종류의 %CALLNAME%이(가) 나타난대!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「지금 당장, 당장 그 %CALLNAME%이(가) 있는 곳으로 가는 거야!」"
          - "일단 %CHARA%의 제안대로 함께 봉제 인형 가게를 돌아봤다"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: era.get('cflag:44:育成回合计时') > 47 + 42
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어떤 괴담이든 천재 %MOHOSHOJO% 스위피라면 진상을 밝혀낼 수 있어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「하지만! %CALLNAME%이(가) 앞장서! 무서워서 그러는 거 아니거든!!」"
          - "%CHARA%와(과) 이야기하며 역 근처 거리를 걸었다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%! 『메리 씨의 전화』가 어떻게 된 건지 완전히 알아냈어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이렇게 전화를 받고, 그다음——여보세요——지금 네 뒤에 있어——!!」"
          - "%YOU%을(를) 놀라게 하지 못했다는 걸 깨닫자, %CHARA%은(는) 필사적으로 화난 척하기 시작했다"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%CALLNAME%! 들었어, 근처 케이크 가게에서 『마법 과자』를 판대!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「주인이 전에 가 본 적은 절~대 없으니까!」"
          - "일단 %CHARA%의 제안대로 함께 케이크 가게를 돌아봤다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「뭐야, 뭐야! %CALLNAME%이(가) 지어낸 그런 괴담은 어린애도 안 믿겠다!?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「천재 %MOHOSHOJO% 스위피가 보기에는 이렇게 해야 맞아——」"
          - "%CHARA%와(과) 이야기하며 역 근처 거리를 걸었다"
      # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
      - if: era.get('cflag:44:育成回合计时') >= 95 + 25
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「아니, 아니! 그런 결말은 전혀 아니야!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「주인이 말하자면, 그 사람은 빨간 망토도 파란 망토도 고르지 않고 직접 꺼낸 거야……」"
          - "%CHARA%와(과) 이야기하며 역 근처 거리를 걸었다"


o_s_shopping:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: (t = era.get('cflag:44:育成回合计时')) <= 47 + 42
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「천재 %MOHOSHOJO%에게는 최고의 빗자루 탈것이 필요해!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「여기 온 이상, %CALLNAME%, 명령이야. 지금 당장 여기서 제일 좋은 빗자루를 찾아!」"
      - "%CHARA%와(과) 함께 쇼핑몰을 둘러보기 시작했다"
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後、魔法の夢（シニア級7月第1週ターン開始イベント）より前
  - if: t > 47 + 42 && t < 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야, 뭐야! 왜 그렇게 꾸물거리며 걸어!?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘은 사야 할 마법 물건이 잔뜩 있단 말이야!」"
      - "%CHARA%은(는) 바로 %YOU%의 손을 잡아끌고 쇼핑몰을 돌아다녔다"
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
  - if: t >= 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘 쇼핑 계획은 주인이 진작 세워 뒀어!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「우선 마법 도구, 그다음은 마법책, 마지막은 당연히 디저트!」"
      - "%CHARA%은(는) 바로 %YOU%의 손을 잡아끌고 쇼핑몰을 돌아다녔다"


gn_normal_sleep:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……들고 있어……마……움직이……면……」"
        - "%CHARA%은(는) 벤치에 누워 잠들어 있으며, 잠꼬대를 하는 모양이다"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「음냐……천재 %MOHOSHOJO% 스위……마법……대단……」"
        - "%CHARA%은(는) 벤치에 누워 잠들어 있으며, 잠꼬대를 하는 모양이다"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……후……음……주인……곁에서……한 발짝도……떨어지면……」"
        - "%CHARA%은(는) 벤치에 누워 잠들어 있으며, 잠꼬대를 하는 모양이다"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후……후……그랜마……인……정해……내……마법……최……」"
        - "%CHARA%은(는) 벤치에 누워 잠들어 있으며, 잠꼬대를 하는 모양이다"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「음냐……천재 %MOHOSHOJO% 스위……역시……대마법사……」"
        - "%CHARA%은(는) 벤치에 누워 잠들어 있으며, 잠꼬대를 하는 모양이다"


# ジュニア級4月以降、おやすみ、プレイヤーが眠り込む、一度きり
# プレイヤー体力+100、気力+200
gn_rest:
  title: "사역마의 뜻밖의 낮잠"
  lines:
    - if: era.get('love:44') < 50
      lines:
        - "평소처럼 트레이너실에서 일하고 있다"
        - "하지만 최근의 수면 부족 때문인지, 과로 때문인지, 아니면 약의 영향인지"
        - "일하던 중 %YOU%은(는) 그대로 자리에 쓰러졌고, 그 뒤 무슨 일이 있었는지는 알 수 없다"
        -
        - ……
        -
        - "몽롱한 의식 속에서 사락사락 움직이는 소리, 물을 따르는 소리, 그리고 억양 있는 말소리가 들렸다"
        -
        - "천천히 눈을 뜨자, 어느새 트레이너실 소파에 반듯이 누워 담요까지 덮고 있었다"
        - "고개를 돌리니 소파 옆에 호기심과 긴장, 초조함이 뒤섞인 눈으로 %YOU%을(를) 바라보는 %CHARA%이(가) 있었다——"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「꺄아악!!! 조, 좀비——!!!」"
        -
        - "그나저나 입을 열자마자 이상한 말을 한다……"
        - acc: 1
          content: "「아직 살아 있어……」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아. 사……살아 있는 %CALLNAME%이었구나……!」"
        - "%CHARA%은(는) 안도의 한숨을 내쉬었다"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내 『사령술』이 정말 효과가 있었나 했네……」"
        -
        - "또 이상한 말을……"
        - "%YOU%은(는) %CHARA%의 트레이너잖아……『사령술』을 쓰면 안 되지……"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그런데 『사령술』이 효과가 없었다면……」"
        - "%YOU%이(가) 쓴웃음을 짓고 있자 %CHARA%은(는) 말을 이어 갔다"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그럼 내 『치유 마법』이 수련 끝에 엄청 늘었다는 거야!」"
        -
        - acc: 1
          content: "「『치유 마법……?』」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「맞아! 그랜마가 직접 가르쳐 준, 아픈 나도 금세 기운 차리게 해 주는 약이야!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「천재 %MOHOSHOJO% 스위피가 완벽하게 개량했으니까, 이제 %CALLNAME%한테도 치유 효과가 있어!」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「흐흥~ %CALLNAME%이(가) 그렇게 관심 있다면」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오늘부터 %CALLNAME%을(를) 위해 스위피 특제 마법약을 계속 만들어 줄게!」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이러면 %CALLNAME%이(가) 아무리 야근해도 안 쓰러질 거야!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「흐흥, 역시 천재 %MOHOSHOJO% 스위피!」"
        -
        - "그 뒤로 %CHARA%은(는) 거의 매일 비전의 어성초차 한 병을 들고 %YOU%을(를) 찾아온다"
        - "게다가 다 마시는 걸 직접 눈으로 확인하기 전에는 %YOU%을(를) 놓아주지 않는다……"
    - if: era.get('love:44') >= 50
      lines:
        - "평소처럼 트레이너실에서 일하고 있다"
        - "하지만 최근의 수면 부족 때문인지, 과로 때문인지, 아니면 약의 영향인지"
        - "일하던 중 %YOU%은(는) 그대로 자리에 쓰러졌고, 그 뒤 무슨 일이 있었는지는 알 수 없다"
        -
        - ……
        -
        - "몽롱한 의식 속에서 사락사락 움직이는 소리, 물을 따르는 소리, 그리고 작은 흐느낌이 들렸다"
        - "？？？？「흑……흐으……」"
        -
        - "천천히 눈을 뜨자——"
        - "어느새 트레이너실 소파에 반듯이 누워 담요까지 덮고 있었다"
        - "고개를 돌리니, 소파 옆에는 주변을 어질러 놓은 채 당황해서 울고 있는 갈색 털의 자그마한 우마%UMA%가 서 있었다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「꺄아악!! 조, 좀비——!!!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아니……%CALLNAME%!?」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……흑……흐으……이, 일어났다——!!!!」"
        - "갑작스러운 충격에 정신을 차리고 보니, %CHARA%은(는) 이미 %YOU%을(를) 꽉 끌어안고 있었다"
        - "게다가 끌어안는 힘이 조금 세서 척추가 삐걱거리는 듯하다"
        -
        - acc: 1
          content: "「저기……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「싫어! 움직이지 마!! 아픈 게 무슨 상관이야!!! 아파도 참아, 바보 %CALLNAME%!!!!!」"
        - "끌어안는 힘이 더 세진 것 같다……%YOU%은(는) 얼른 입을 다물었다"
        -
        - "한참이 지나서야 %CHARA%은(는) %YOU%을(를) 놓아주고 침대 끝으로 물러났다. 눈가에는 아직 눈물이 맺혀 있다"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말! 무사하면 더 일찍 일어나라구!!!」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「흑……안 울었어! %CALLNAME%이(가) 주인을 울릴 리 없잖아!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「게다가 애초에 전부 %CALLNAME% 탓이야!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「고작 %CALLNAME% 주제에 갑자기 쓰러져서 놀라게 하고, 대답도 안 하고!」"
        -
        - acc: 1
          content: "「혹시 걱정해 준——」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「걱정 안 했어! %CALLNAME%이(가) 주인을 곤란하게 만들려면 백 년은 일러!!」"
        - "곧바로 %YOU%의 말을 가로막았다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……어성초 우린 물을 큰 페트병으로 세 병이나 넣었더니 냉장고가 꽉 찼어」"
        - "혼잣말처럼 중얼거린다"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네 생각 같은 건 몰라! 마셔! 몇 주든 몇 달이든 알 게 뭐야! 지켜볼 거니까!! 후회하지 마!!」"
        -
        - "그 뒤로 %CHARA%은(는) 거의 매일 비전의 어성초차를 데워 %YOU%에게 따라 준다"
        - "게다가 다 마시는 걸 직접 눈으로 확인하기 전에는 %YOU%을(를) 놓아주지 않는다"


good_night_sex:
  - 어느 날, 훈련이 끝난 후, %CHARA%이(가) 갑자기 다가와 %YOU%의 옷자락을 잡아당겼다
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……%CALLNAME%. 따라와. 휴게실로. 네가 좋아하는, 그 일.」
  - 단도직입적으로 부탁해 왔다
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……그렇게 놀란 표정 짓지 마…… 갈 거야, 안 갈 거야?」
  - %CHARA%은(는) 얼굴에 번진 홍조를 필사적으로 감추며, 보라색 눈동자만으로 %YOU%을(를) 바라보고 있다
  -
  - %CHARA%의 부탁에, %YOU%의 대답은
  -
  - acc: 1
    key: sex
    content: 「수락한다」
    lines:
      - %CHARA%의 부탁을 받아들였다
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……흥. %CALLNAME%은(는) 역시 그런 녀석이구나.」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「후회하지 마.」
      - 그렇게 %YOU%은(는) 가벼운 발걸음인지 평소의 보폭인지 알 수 없는 %CHARA%의 뒤를 따라, 함께 휴게실로 들어갔다
  - acc: 2
    content: "「거절한다」"
    lines:
      - "일단 %CHARA%의 부탁은 거절했다"
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……흐응.」"
      - "의외로 차분하게 대답했다"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……그럼 나는——」"
      - if: d.check < 2 # 通常、ここで止まる
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「사역마에게 명령한다. 주인이 먹을 것 좀 사 와!!」"
              - "갑자기 화제를 돌렸다"
              -
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「왜냐면, 사역마가 그런 일을 하고 싶지 않다면—— 다른 부분에서 주인에게 보상해야 하니까!」
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「디저트를 아무리 많이 사 와도 주인은 용서 안 해…… 그래도 사 와야 돼!!」"
              -
              - "어쨌든 %CHARA%에게 당근 케이크 하나를 사다 주자, %SEX%은 더는 아무것도 하지 않았다"
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「싫어, 싫어! 인정 못 해! %CALLNAME%은……마법소녀 책에 나오는 악당 같아야 한단 말이야…!!」
              - 갑자기 소리를 질렀다.
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - 「……아냐, 아냐! 책 얘기 같은 건 안 했어! 아무튼 %CALLNAME%! 주인님의 명령이야, 오늘은 휴게실로 들어가!!!」
              -
              - "(바닥을 데굴데굴 구르는 %CHARA%이 의지력 판정을 걸어왔다!)"
              - "【의지가 단련되고 있다……】"
              - "【판정에 성공했다!】"
              -
              - %CHARA%이(가) 바닥을 구르더라도…… 그런 건 하고 싶을 때 바로 할 수 있는 게 아니다
              - %SEX%에게 디저트를 주겠다고 약속하고, 일단 그 자리는 얼버무렸다
      - if: d.check === 2 # 大成功で強姦へ
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「싫어, 싫어! 인정 못 해! %CALLNAME%은……마법소녀 책에 나오는 악당 같아야 한단 말이야…!!」
          - 갑자기 소리를 질렀다.
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「……아냐, 아냐! 책 얘기 같은 건 안 했어! 아무튼 %CALLNAME%! 주인님의 명령이야, 오늘은 휴게실로 들어가!!!」
          -
          - "(바닥을 데굴데굴 구르는 %CHARA%이 의지력 판정을 걸어왔다!)"
          -
          - "【의지가 단련되고 있다……】"
          - "【판정…… 실패했다!】"
          -
          - "디저트를 제안해도 상대는 받아들일 생각이 없는 모양이다"
          - "「의지력」으로 %SEX%과 오랫동안 맞선 끝에, %YOU%은 바닥을 데굴데굴 구르는 %CHARA%을 끝내 이기지 못했다"
          -
          - 결국 %YOU%은(는) 발걸음이 가벼운 건지 평소 걸음걸이인 건지 알 수 없는 %CHARA%의 뒤를 따라 휴게실로 들어갔다.


birthday:
  title: "생일"
  lines:
    - if: "!d.birthday"
      lines:
        - "%CHARA%의 생일, %YOU%은(는) %SEX%에게 직접 선물을 건네지도, 밖으로 놀러 데려가지도 않았다"
        - "대신 %SEX%의 손을 잡고 학원 안을 몰래 걸었다"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「뭐야, 뭐야, 사역마. 선물도 안 주고 말도 없이 뭘 하려는 거야——」"
        - "갈색 털의 자그마한 우마%UMA%는 소리치면서 %YOU%에게 이끌려 방 안으로 들어갔다"
        - "그리고 눈에 들어온 건 커다란 생일 현수막, 맛있어 보이는 생크림 케이크, 그리고 초대를 받고 모인 수많은 친구들이었다"
        -
        - color: #无
          content:
            - fontWeight: bold
              content: "친한 %UMA% A"
            - "「스윕, 생일 축하해!」"
        - color: #无
          content:
            - fontWeight: bold
              content: "친한 %UMA% B"
            - "「생일 축하해, 스윕!」"
        - "들어서는 순간 익숙한 축하 인사가 들려왔다"
        -
        - color: %COLOR_47%
          content:
            - fontWeight: bold
              content: %ZOB_ZOY%
            - "「저기……새……생일 축하해!」"
        - "열심히 축하하고 있다"
        -
        - acc: 1
          content: "「다음은——」"
        -
        - color: %COLOR_24%
          content:
            - fontWeight: bold
              content: %MAYA%
            - 「I Copy！」
        - "%YOU%의 목소리를 들은 %MAYA%는 곧바로 멋지게 경례했다"
        - "그리고 옆에 있던 조작 버튼을 눌렀다——"
        -
        - "딸깍!"
        - "방 안의 불이 꺼졌다"
        -
        - "누군가 라이터를 꺼내 케이크의 촛불을 하나씩 켠다——"
        - "작지만 안정적으로 타오르는 불꽃에 점차 방 안 모든 사람의 시선이 모인다"
        -
        - color: %COLOR_5%
          content:
            - fontWeight: bold
              content: %FUJI%
            - "「그럼, 다음은 드디어 오늘의 주인공 차례네요」"
        - "아직 입구 근처에 서 있는 %CHARA%에게 모두의 시선이 향한다——"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……뭐야, 사역마. 그리고 너희들.」"
        - "%CHARA%은(는) 작게 말하며 입꼬리를 살짝 올렸다"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%MOHOSHOJO% 스위피는 이런 속임수, 벌써 몇 번이고 봤거든.」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그래도……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「너희가 불쌍하니까 어울려 줘도 뭐, 나쁘지 않겠네!」"
        -
        - "%CHARA%은(는) 성큼성큼 케이크 앞으로 걸어갔다"
        - "허리에서 지팡이를 꺼내 불꽃이 타오르는 초를 향해 가볍게 휘두른다——"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「화이트 헤더★핑크 튤립, 소원이여 이루어져라!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내 소원은——」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「사역마랑 여기 있는 모두——」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「매년——이런 생일 파티를 열어 주는 거야!!」"
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후우——!!!!」"
        - "%CHARA%은(는) 촛불을 불어 껐다"
        -
        - "그렇게 %CHARA%의 소원과 함께, %YOU%이(가) %SEX%를 위해 준비한 생일 파티가 본격적으로 시작되었다!"
    - if: d.birthday > 0
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그래, 그래! 역시 생일에는 달콤한 걸 먹어야 해!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「오늘 모임은……과자를 안 주면 장난칠 거야~!」"
            - "파티의 주인공이라는 걸 이용해 %CHARA%은(는) 끊임없이 디저트를 요구했다"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「싫어, 싫어! 왜 케이크가 세 조각밖에 안 남았어!!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「네 조각 먹고 싶어! ……아니, 다섯 조각!」"
            - "생일 파티에서 %CHARA%은(는) 케이크를 더 달라고 외치고 있다"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「선물 갖고 싶어! 더 많이 줘!」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「사역마! 대단한 걸 바라는 건 아니야. 앞으로 몇십 년 치 생일 선물을 한꺼번에 줘!」"
            - "생일 파티에서 %CHARA%은(는) 선물 이야기를 외치고 있다"


# 連続2週間交流なしのあと、ターン終了時に発火【未交流状態は2週ごとに必ず！】
ws_no_action_2_weeks:
  # 新生のAsphodel（クラシック級11月第2週ターン終了イベント）より前
  - if: (t = era.get('cflag:44:育成回合计时')) <= 47 + 42
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어! %CALLNAME%, 또 어디서 길을 잃었던 거야!??」"
      - "길가에서 우연히 %CHARA%을(를) 마주치자, %SEX%는 곧바로 달려와 다급한 목소리로 %YOU%에게 외쳤다"
      - "%YOU%은(는) 그저 요즘 바빴다고 %CHARA%에게 설명했다"
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より前、新生のAsphodel（クラシック級11月第2週ターン終了イベント）より後
  - if: t > 47 + 42 && t < 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어! %CALLNAME%, 또 어디서 놀고 있었어!??」"
      - "길가에서 우연히 %CHARA%을(를) 마주치자, %SEX%는 곧바로 달려와 다급한 목소리로 %YOU%에게 외쳤다"
      - "%YOU%은(는) 그저 요즘 바빴다고 %CHARA%에게 설명했다"
  # 魔法の夢（シニア級7月第1週ターン開始イベント）より後
  - if: t >= 95 + 25
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어, 싫어! %CALLNAME%, 또 누구랑 놀러 갔어?!!」"
      - "길가에서 우연히 %CHARA%을(를) 마주치자, %SEX%는 곧바로 달려와 다급한 목소리로 %YOU%에게 외쳤다"
      - "%YOU%은(는) 그저 요즘 바빴다고 %CHARA%에게 설명했다"


load_talk:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「알겠어? 알겠냐구? 천재 %MOHOSHOJO% 스위피가 갑자기 예지 마법을 익혔어!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「흐흥~ 꿈도 중요할 때가 있는 거야!」"


end_talk:
  - if: "!d.hentai"
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……어른이란 그런 거구나. 약속했으면서……떠나지 않겠다고……」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……잊으면 안 돼. 너도, 나도. 손가락 걸고……」"
  - if: d.hentai
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……어른이란 그런 거구나. 시시한 일 때문에……헤어져야 한다 해도……」"
