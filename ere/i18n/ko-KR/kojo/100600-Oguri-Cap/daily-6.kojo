# @file オグリキャップ - 日常
# @author 雞雞
# @author Claude (翻訳)
good_morning:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: "오구리 캡"
            - "「학원에 처음 왔을 때는 정말 아무것도 몰랐지…… 네가 있어서 정말 큰 도움이 됐어.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: "오구리 캡"
            - "「고향의 모두를 기쁘게 하기 위해…… 나도 노력해야 해.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: "오구리 캡"
            - "「나보다 더 빨리 달리는 우마무스메들이 많이 있다고 생각하니, 가슴이 두근거리기 시작하는군……!」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: "오구리 캡"
            - "「같이 밥 먹으러 가자.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: "오구리 캡"
            - "「레이스를 할 때면 항상 트레이너가 나와 함께 달리고 있다는 기분이 들어. ……그게 내 마음을 정말 든든하게 해줘.」"

select:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: "오구리 캡"
            - "「나는 오구리 캡이다. 잘 부탁한다.」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: "오구리 캡"
            - "「트레이너…… 부탁할게.」"

talk:
  # BASENAME:0 = 体力
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「음…… 아무래도 좀 지친 모양이다.」"
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「미안하지만, 잠시 쉬게 해줘.」"
  # CFLAGNAME:66 = 募集状態
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「방금 타마랑 싸웠어…… 하지만 내 말 좀 들어봐. 오징어 구이라고 하면 통오징어 구이가 떠오르는 게 정상이잖아……?」"
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「음…… 방금 복도에서 크릭이 머리를 쓰다듬어 주던데…… 내 머리가 자다 깨서 엉망이었나……?」"
  - if: era.get('base:6:0') <= era.get('maxbase:6:0') * .45 && era.get('cflag:34:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「방금 이나리와 점심 먹고 왔는데, 밥 먹는 속도가 정말 빠르더라. 그렇게 먹으면 몸에 안 좋을 텐데……」"
  # CFLAGNAME:40 = やる気
  - if: era.get('cflag:6:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「훗! 훗! 우이후! 이거 말이야? 상태가 아주 좋을 때는 이렇다. 그러니 마음껏 기대해!」"
  - if: era.get('cflag:6:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「이 느낌…… 음. 정말 트레이닝이 기대되는군!」"
  - if: era.get('cflag:6:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「많이 먹었다. 오늘도 상태가 아주 좋아!」"
  - if: era.get('cflag:6:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「음…… 오늘 기분이 좋군. 강도 높은 트레이닝을 시작하자!」"
  - if: era.get('cflag:6:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「자, 오늘은 어떻게 훈련할 거야?」"
  - if: era.get('cflag:6:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「좋아, 오늘도 힘내자.」"
  - if: era.get('cflag:6:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「아무래도 컨디션이 계속 좋지 않군. 잠이 부족해서 그런 걸까……」"
  - if: era.get('cflag:6:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「으으…… 힘이 나질 않아. 좀 더 먹어둬야 했던 걸까……」"
  - if: era.get('cflag:6:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「음음…… 아, 미안. 도무지 의욕이 나질 않아서……」"
  - if: era.get('cflag:6:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「최근 몸이 무겁게 느껴지네…… 이런 건 하지 않는 게 좋겠어……」"

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「정말 이것만으로 배가 불러?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「오오, 이것이 설마 전설의 암연소혼반인가!」"
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「트레이너…… 소스를 좀 더 뿌려줘♡ 물론 하얀색 소스로 말이지♡」"

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「트레이너…… 이 컨트롤러 대체 어떻게 조작하는 거야?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「으으, 또 졌다…… 실제 레이스였다면 내가 분명 이겼을 텐데!」"
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「트레이너♡ 내가 지면, 나를 따끔하게 벌해줘♡」"

office_gift:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: "오구리 캡"
      - "「선물인가? 먹을 것인지 궁금하네…… 아무튼 상하게 할 수는 없으니, 열어보게 해줘. 트레이너.」"

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「모두의 염원을 내 힘으로……!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「고맙다. 확실히 성장한 게 느껴지네.」"
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「……트레이너 특제 밀크 에너지 드링크를 좀 마셔도 되겠지♡?」"

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「최근 정말 많은 일이 있었군……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「손톱을 깎아줄게. 이래 봬도 꽤 자신 있거든.」"
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「트레이너, 손톱 정리 끝났어. 이제 네 손가락이 활약할 차례네♡」"

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「……음. 이번 시험도 문제를 다 풀기 전에 끝나버렸네.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「내 예전 꿈은 소힘줄찜이 되는 것이었지…… 말을 돌리지 말라고? 으으……」"
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「트레이너, 내 이번 시험 성적은 69점이야……♡」"

out_church:
  - "어느 날, %YOU%은(는) 오구리 캡의 손에 이끌려 트레센 근처의 신사로 오게 되었다…… %YOU%은(는) 궁금하여 물었다."
  -
  - acc: 1
    content: "「왜 신사에 온 거야?」"
  -
  - "%SEX%는 미간을 찌푸리며 바닥을 보았고, 귀도 힘없이 처졌다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: "오구리 캡"
      - "「사실 요즘 몸 상태가 좀 좋지 않아서……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: "오구리 캡"
      - "「뭐를 하든 어긋나고, 아무튼 컨디션이 엉망이야…… 그런데 고향의 마사 아저씨가 『곤란할 때는 신령님께 빌어보렴』이라고 하셨던 게 생각나서 말이지.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: "오구리 캡"
      - "「그리고 고향에 있을 때도 경기장 안에 있는 작은 신사에서 기도를 하고 나서 레이스에 이기곤 했거든.」"
  -
  - acc: 1
    content: "「그래서 나를 부른 거구나…… 그럼 같이 기도하자.」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: "오구리 캡"
      - "「그래도 되겠어? 정말 고마워. %YOURNAME%.」"

  - "당신들은 익숙하게 새전함에 돈을 넣고 정성스럽게 신의 가호를 빌었다……"
  - "그 후, 오구리 캡이 무언가 이상한 점을 느낀 듯한데……"
  -
  - if: d.dice > 0.5
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「이건…… 라면 가게의 무료 면 추가권! 복이 벌써 찾아올 줄이야!」"
      -
      - "오구리 캡은 깜짝 놀라며 주머니에서 종이 한 장을 꺼냈지만, %YOU%이(가) 보기에는 그냥 주머니에 넣어두고 잊어버렸던 것 같다."
      - "하지만 어찌 됐든 %SEX%의 웃는 얼굴을 보니, 굳이 분위기를 깰 필요는 없을 것이다."
  - if: d.dice < 0.5
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「이건…… 라면 가게의 무료 면 추가권! 복이 벌써 찾아올 줄이야! 으…… 유효기간이 지났네……」"
      -
      - "오구리 캡은 깜짝 놀라며 주머니에서 종이 한 장을 꺼냈지만, 무료 쿠폰의 유효기간은 이미 한참 지나 있었다."
      - "아까보다 더 침울해진 오구리 캡을 보며, %YOU%은(는) 사비로 라면을 사주기로 결심했다…… 어쩌면 그 이상을 먹게 될지도 모르지만."

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「낚아 올린 물고기는 어떻게 요리하는 게 좋을까?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「오오! 정말 물고기가 많네! ……왜 그런 눈으로 나를 봐?」"

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「음…… 공기가 좋네. 역시 나는 야외가 좋아. 아주 상쾌한 기분이 들어.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「트레이너, 달리고 싶어졌어! 내 속도를 따라올 수 있겠어?」"

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「인형 뽑기 기계 안에 있는 저건…… 몬스터 버전의 나인가?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「왜 집게의 힘이 이렇게 약한 거지……!」"
  - if: era.get('cflag:21:66') === 1 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「저 타마 인형을 뽑고 싶네. 크릭에게 선물하면 분명 아주 좋아할 거야.」"

o_s_drawing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「경품 추첨인가…… 먹을 게 당첨되면 좋겠네.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「도시에서도 이런 회전식 추첨기를 쓰는구나.」"

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「우리는 용감한 보병대, 성큼성큼 나아가는 열혈 결사대~♪」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「노래 부르는 것도 레이스만큼이나 피를 끓게 만드네.」"
  - if: era.get('cflag:21:66') === 1 && era.get('cflag:45:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「크릭은 자주 타마에게 동요를 불러주곤 해……」"

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「포스터에 있는 저 사람은 마야노 탑건의 아버지 같은데…… 예순이 넘었다고?!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「으으, 하치…… 으와아아앙——」"

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「언제라도 『잘 먹겠습니다』라고 말하는 걸 잊어서는 안 돼.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「정말 맛있네—— 잘 먹었다.」"

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「옷이 예뻐……? 고마워……♡」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「음…… 정말 번화한 곳이군. 시골과는 전혀 달라.」"
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「아무 말도 하지 말고, 지금 이 시간을 충분히 즐기자.」"

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「트레이너, 사진 좀 찍어 줘. 가족들에게 보내주고 싶은데…… 나는 어떻게 찍는지 잘 몰라서 말이지……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「이건…… 사람이 상자 안에 갇혀 있는 건가?! ……이 농담은 역시 너무 낡았나?」"
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「내 낡은 편자를 장식품으로 만들고 싶다고? 그럼 라이언에게 부탁하면 되겠네. 『어떤 일은 주변 사람들에게 알리지 않는 게 좋다……』고?」"

s_a_tree_hollow:
  - "%YOU%과(와) 오구리 캡은 함께 안뜰의 고목나무 구멍으로 왔다. 구멍을 향해 포효하는 %SEX%의 모습을 보며, %YOU%도 오구리 캡을 최강으로 만들겠다는 결심을 굳혔다."

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「교내에서 데이트인가…… 왠지 좀 부끄럽네.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「시선이 느껴지는군. 계속 우리를 쳐다보고 있어……」"
  - if: era.get('love:6') >= 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「저기…… 뽀뽀해도 돼?」"

s_r_lunch:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「고기 만두는 역시 따끈할 때 먹어야지!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「트레이너가 해준 밥은 정말 맛있네. 너는 나중에 분명 좋은 아내가 될 거야.」"
  - if: era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: "오구리 캡"
          - "「저기, 타마에게 타코야키 만드는 법을 배웠는데…… 한번 먹어볼래?」"
