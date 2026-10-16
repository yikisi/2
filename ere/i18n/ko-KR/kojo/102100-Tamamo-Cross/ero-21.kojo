# @file タマモクロス - 調教
# @author 雞雞
tied_heart:
  title: 묶인 마음
  lines:
    #トレーナー室内
    #イベント名：縛られた心
    #トリガー：恋慕状態後にランダム発生
    - 아무것도 보이지 않는다…… 반쯤 감긴 눈꺼풀 너머로, 빛이 눈동자에 스며드는 느낌만 있을 뿐이다.
    - 눈이 건조하다. %CHARA%은(는) 몇 번이고 눈을 깜빡이며 눈물로 촉촉하게 적셨다.
    - %TEEN%은 천천히 의식을 되찾고, 고향보다 더 익숙한 트레이너실 소파에 기진맥진한 채 앉아 있는 자신을 깨닫는다.
    - %CHARA%은(는) 양손을 바라본다. 좌우 각각 튼튼한 철고리에 묶여 있어, 팔을 자유롭게 뻗을 수 없다.
    - 낯선 곳에 묶여 있는 것은 아니라는 사실에, %SEX%는 다소 안도했다.
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「이게 뭐고——!」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「같은 반응 듣고 싶었던 기가? 그럼, 어서 수갑이나 풀어도——」
    - %SEX%의 시선이, 옆에서 재미있다는 듯이 이 비참한 모습을 지켜보고 있는 %YOU%에게로 향한다.
    - acc: 1
      content: 「그건 안 돼. 요즘 타마는 말을 안 듣거든……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그기 무슨 말이고, 헛소리 말래이!」
    - %YOU%은(는) 몸을 기울여 얼굴을 %CHARA%의 눈앞까지 가까이 대었다
    - %YOU%의 뜨거운 숨결이 소녀의 피부에 닿자, %SEX%도 무심코 숨을 깊게 들이마셨다.
    - acc: 1
      content: 「하지만, 타마는 항상 나를 유혹하는 듯한 표정을 짓고 있잖아……」
    -
    - acc: 1
      content: 「달릴 때는 필사적으로 엉덩이를 흔들어 보여주고, 운동이 끝나면 몸을 밀착시켜 암컷의 냄새를 뽐내고…… 내가 얼마나 참아왔는지, 알겠어?」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「그게 내랑 무슨 상관이고…… 네 취향이 이상한 거 아이가!」
    - %SEX%는 얼굴이 새빨개지며 반박한다. 하지만 스포츠 브라 아래의 가련한 젖꼭지는 제멋대로 발기해 있었고, 하복부까지 뜨거워져 있었다.
    - %YOU%은(는) 윗입술을 핥으며, %CHARA%을(를) 소파에 밀어 넘어뜨리고, 상대의 양팔 사이로 머리를 밀어 넣는다.
    - acc: 1
      content: 「그럼, 나를 밀쳐내 봐.」
    - 지금 %CHARA%은(는) 양손이 수갑으로 묶여 있을 뿐이다. %UMA%의 신체 능력이라면 다리로 저항하는 것도, 도망치는 것도 식은 죽 먹기일 텐데……
    - if: era.get('relation:21:0') > 225
      content:
        - %CHARA%은(는) 입을 열려고 했지만 적절한 말이 떠오르지 않아, 그대로 양팔로 %YOU%의 목을 감싸 안았고, 두 사람은 깊은 키스에 빠져들었다.
    - if: era.get('relation:21:0') <= 225
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - 「참말로, 지독한 어른이네……」
        - %CHARA%은(는) 혀를 차며, 마지못해 양팔로 %YOU%의 목을 감싸 안고, 깊은 키스를 나누었다.

mark_pleasure:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「잠, 잠깐만 기다려 봐라, 몸이…… 몸이 뜨겁다…… 참말로 이상하네……」
  - if: d.level === 2
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……하아…… 저기…… 한 번 더…… 해도 되나?」
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「꼬맹이들아, 미안타. 내, 이제 이 사람한테서 못 떨어지는 모양이다……」
      - %CHARA%의 몸은 완전히 타락했다.

mark_meek:
  - if: d.level === 1
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「하아…… 하아……」
      - %CHARA%의 붉게 달아오른 얼굴이 다가오자, 등 뒤로 몇 가닥의 쾌감이 스치는 것이 느껴진다
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%이(가) 기뻐해 준다면, 내도 좋고……」
      - %CHARA%은(는) 가냘픈 몸을 기대며 천천히 아래로 이동해 
      - 가슴, 옆구리, 허벅지, 그리고 쾌감을 느끼게 하는 모든 곳을 오가며 비빈다.
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「그라니까…… %CALLNAME%이(가) 좋아하는 점, 좀 더 알려줄 수 없나……?」
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「있잖아, 다음엔 내한테 뭐 시키고 싶은데? 뭐 하면 되나?」
      - %CHARA%의 부드러운 다리가 마치 살아있는 생물처럼 %YOU%의 허리에 감긴다.
      - %SEX%의 두 다리는 천천히, 서두르지 않으면서도 먹이가 도저히 도망칠 수 없는 힘으로 %YOU%의 하반신을 계속 비비며……
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「지금이라면, 내한테 뭐 해도 괜찮다❤️」

mark_pain:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「괜찮다…… 얼라들을 위해서라믄 내가 참아야제……」"
  - if: d.level === 2
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「미, 미안타…… 내, 뭐든지…… 할 테니까…… 부, 부탁한대이…… 쪼매만 살살 해 도……」"
  - if: d.level === 3
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「엄마……!」"

mark_shame:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「보…… 보지 마……!」

mark_hate:
  - if: d.level === 1
    color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「뭐 하는 기고! 내도 화낼 줄 안대이!」"
  - if: d.level === 2
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「돈 냈다고 내를 장난감처럼 맘대로 해도 된다 생각하지 마라!」"
      - "%CHARA%의 차가운 시선 깊숙한 곳에 분노가 배어 있다."
  - if: d.level === 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「쓰레기……」"
      - "%CHARA%의 차가운 눈동자는 텅 비어 있다. %YOU%의 모습은 %CHARA%의 눈에 전혀 비치지 않는다."
      - "완전히 닫혀 버린 마음은 아마 다시는 누구에게도 열리지 않을 것이다."
