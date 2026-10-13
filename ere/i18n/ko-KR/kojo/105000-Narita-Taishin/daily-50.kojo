# @file ナリタタイシン - 日常
# @author 卡特曼
# @author Claude (翻訳)
select_after_recruit:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - "「담당 계약했다고 그걸로 끝이라고 생각하지 마.」"
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - "「말했잖아. 날 이기게 할 방법을 찾겠다고.」"
    - color: %COLOR%
      content:
        - fontSize: bold
          content: %CHARA%
        - "「진심인지 빈말인지는 앞으로 삼 년 동안 증명해 줘.」"

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「선생님은 이론도 레이스의 일부라는데, 역사 수업이 레이스에 도움이 되기는 해?……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「성적은 나쁘지 않지만 눈에 띌 정도도 아니야. 하야히데는 시험만 보면 늘 상위권이고…… 티켓? %SEX% 성적은 나보다 낮을걸.」"

office_prepare:
  - if: era.get('cflag:50:干劲') >= 1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「아직 시작 안 해? 긴장한 게 아니라 지금 컨디션을 놓치기 싫어서 그래.」"
  - if: era.get('cflag:50:干劲') <= -1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「벌써 시작이야…… 몸을 추스를 틈도 없네. 할 수 있는 건 다 하겠어!」"
  - if: era.get('cflag:50:干劲') === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「컨디션? 뭐, 평범해. 정한 대로 달리면 돼.」"

talk:
  - if: era.get('base:50:体力') < era.get('maxbase:50:体力') / 3
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「괜찮다고 했잖아. 쉴 필요 없어.」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「이 정도로 멈출 순 없지.」"
  - if: era.get('base:50:体力') >= era.get('maxbase:50:体力') / 3
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「컨디션은 나쁘지 않아. 오늘 일정은?」"
      - random: true
        if: era.get('love:50') >= 100 && era.get('cflag:50:育成回合计时') >= 144
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「요즘 소감이 어떠냐고?」"
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「음…… 지난 삼 년 동안 정말 많은 일이 있었네.」"
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「이겼던 것도 졌던 것도 나한테는 소중한 추억이야.」"
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「앞으로는 어떻게 될지 몰라. 그래도 네가 곁에 있다고 생각하면 안심돼……」"
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「잠깐, 그 표정은 뭔데!」"
          - "순간 타이신의 행복한 미소가 쑥스러운 눈초리로 바뀌었다."
      - random: true
        if: era.get('love:50') >= 90 && era.get('status:0:熬夜') > 0
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「정신 좀 차려. 어제도 밤샜지?」"
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「정말, 몸 좀 챙기라고 몇 번을 말해야 알아들어?」"
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「자꾸 걱정시키지 마……」"
      - random: true
        if: era.get('love:50') >= 75
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「자, 이거 가져왔어.」"
          - "타이신이 %YOU%에게 캔 하나를 건넸다."
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「뭐? 단 음료만 마시면 살찐다고?」"
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「마시기 싫으면 돌려줘.」"
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「그런 눈으로 보지 마. 체중 관리는 제대로 하고 있으니까.」"
      - random: true
        if: era.get('love:50') >= 50
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「모바일 게임 새 이벤트, 할 게 너무 많아. 밤새워야 다 모으겠는데.」"
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「안 돼. 그런 것 때문에 트레이닝을 소홀히 할 순 없어.」"
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「그래도 이번 한정 아이템을 놓치면 한참 기다려야 하는데.」"
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「윽, 못 고르겠어……」"
      - random: true
        if: era.get('cflag:50:干劲') === 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「이 컨디션이면 할 수 있어!」"
      - random: true
        if: era.get('cflag:50:干劲') === 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「준비됐어. 빨리 시작하자, %CALLNAME%!」"
      - random: true
        if: era.get('cflag:50:干劲') === 1
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「컨디션? 나쁘지 않아. 계획대로 하면 돼.」"
      - random: true
        if: era.get('cflag:50:干劲') === 0 && era.get('cflag:50:育成回合计时') < 144
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「오늘 트레이닝은 뭐야? 늘 하던 대로?」"
      - random: true
        if: era.get('cflag:50:干劲') === -1
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「좀 피곤하긴 한데, 조금은 더 버틸 수 있어.」"
      - random: true
        if: era.get('cflag:50:干劲') === -2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「젠장, 다리가 왜 이렇게 무겁지……」"
      - random: true
        if: era.get('cflag:50:干劲') === -2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「아니, 괜찮아. 트레이닝은 계속할 거야.」"
      - random: true
        if: era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「점점 따뜻해지네. 점심에는 어디서 잠깐 눈 좀 붙여야겠다.」"
      - random: true
        if: era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「봄이라…… 벚꽃이 피려나. 시간 나면 공원이나 걸을까.」"
      - random: true
        if: era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「아, 더워…… 트레이닝도 시작 안 했는데 땀 나네. 운동장 애들까지 시끄러우니까 더 더워.」"
      - random: true
        if: era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「여름만 되면 사방에서 매미가 울어. 여름답기는 한데 가끔은 시끄러워.」"
      - random: true
        if: era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「길 양쪽에 낙엽이 쌓이면 가을이구나 싶어. 따뜻하게 입어야겠다.」"
      - random: true
        if: era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「가을 오후에는 잠이 와. 오늘도 수업 시간에 선생님한테 혼났어…… 뭐? 어젯밤엔 안 샜거든!」"
      - random: true
        if: era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「겨울에도 우리 집 꽃집은 바빠. 한 해 동안 밀린 일도 정리하고 내년 준비도 해야 하니까. 코타츠에서 귤만 까먹고 있을 순 없어.」"
      - random: true
        if: era.get('love:50') >= 50 && (era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2)
        lines:
          - color: %COLOR%
            content:
              - fontSize: bold
                content: %CHARA%
              - "「눈 오네. 눈 오는 날엔 집에 있고 싶어. 푸짐하게 전골이나 끓여서…… 응? 너도 먹고 싶어? 당연히 네 몫도 있지, 바보.」"

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「후우…… 이런 휴일도 필요하지. 너도 가끔은 쉬어, %CALLNAME%.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「적당히 쉬면 트레이닝 효과도 배가 된다며. 너도 하야히데도 비슷한 말을 했어.」"

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「같이 게임하자고? 좋아. 져도 삐치기 없기야.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「대전보다는 혼자 하는 게 좋아. 그래도 너랑은 나쁘지 않아. 잠깐, 뭘 실실 웃어!」"

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「다음 레이스는 꼭 이길 거야!」"
  - if: era.get('cflag:50:育成回合计时') >= 48 && era.get('cflag:50:育成回合计时') < 144
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「지금의 나를 똑똑히 보여주겠어!」"
  - if: era.get('love:50') >= 50 && era.get('love:50') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「왜 머릿속에 그 바보 생각뿐인 거야!」"

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「오늘은 어디로 데려갈 건데? 나한테 아이디어는 기대하지 마. 내가 가는 데는 조용한 곳뿐이라 데이트하기엔 좀…… 같이 있으면 된다고? ……마음대로 해.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「저기, %CALLNAME%. 저쪽에 괜찮은 꽃집이 있는데 같이 가 줘.」"

school_rooftop:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「음…… 여기서 낮잠 자는 건 더 못 숨기겠네. 됐어. 어차피 티켓이 조만간 떠들고 다닐 테니까.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「바람 좋네. 조금만 더 여기 있고 싶어.」"

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「낚시에서 중요한 건 침착함이야. 참고 기회를 기다리는 거지. 중반에 돌파구를 찾는 것처럼.」"
      - "%CHARA%는 능숙하게 낚싯대를 들어 물고기 한 마리를 낚았다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「낚시하고 있으면 자연과 하나가 된 기분이야. 아무도 날 눈치 못 채지. 이런 느낌, 좋아.」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「뭐? 아무도 눈치 못 채는 건 물고기가 안 잡혀서라고?」"

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「후아, 여기 공기 좋네. 기분이 좀 나아졌어.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「저 벤치에 앉자. 뭐? 무릎베개 해 달라고?」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「또 걷어차이고 싶어?」"

o_s_arcade:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - "「리듬 게임, 같이 할래? 좋아. 쉬운 곡으로 해 줄게……」"
  - "하지만 쉬운 곡이어도 이런 게임을 해 본 적 없는 %YOU%는 상대가 되지 않았다."
  - "한편 타이신의 화면에는 커다란 FULL COMBO가 떠 있었다."

o_s_drawing:
  - "계산을 마치고 돌아가려는 %YOU%를 가게 주인이 불러 세웠다."
  - "가게 주인 「잠시만요, 손님.」"
  - "주인은 옆 탁자에서 작은 종이 한 장을 꺼내 건넸다."
  - "가게 주인 「무료 추첨권입니다. 저쪽에서 뽑으시면 돼요. 행운을 빕니다.」"
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - "「추첨이네. 요즘 게임 뽑기 운이 없으니까 네가 뽑아, %CALLNAME%.」"
  - "추첨권을 건넨 %YOU%는 천천히 추첨기의 손잡이를 돌렸다……"
  -
  - if: d.dice === 0
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「이, 일등!? 별일이네.」"
      - "가게 주인 「축하합니다. 운이 좋으시네요. 자, 두 분이 가실 수 있는 온천 여행권입니다. 받으세요.」"
      - "%YOU%는 주인에게 여행권을 받았다."
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「둘이 가는 온천 여행이라. 누구랑 갈지 정했어?」"
      - 「……」
      - "「타이신이랑 같이 뽑았으니까 당연히 타이신이랑 가야지!」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「어? 자, 잠깐만!」"
      - "「가기 싫어?」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「그런 건 아니지만…… 정말, 너는!」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「먼저 가족이랑 상의해야 해……」"
      - "「그럼 같이 간다는 거지?」"
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「시끄러워!」"
      - "%YOU%는 능숙하게 %CHARA%의 발길질을 피했다."
  - if: d.dice === 1
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「햄버그 크네. 혼자선 다 못 먹겠어…… 같이 먹자, %CALLNAME%.」"
      - "%CHARA%와 함께 햄버그를 먹었다."
  - if: d.dice === 2
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「무가 이렇게나…… 어떡하지. 돌아가면 하야히데랑 티켓, %THEY%랑 나눠야겠어.」"
  - if: d.dice === 3
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「당근? 마침 배고팠는데.」"
  - if: d.dice === 4
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「쳇…… 없는 것보단 낫네.」"
      - "그렇다 해도 꼴등 상품만 뽑은 것은 운이 없었다고 할 수밖에 없다."

o_s_ktv:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - "「노래? 별로 못해. 위너스 스테이지 정도가 한계야. 다음엔 네가 불러, %CALLNAME%.」"

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「『시끌벅적한 우리의 레이스장』. 지방 우마%UMA%가 주인공인 이야기네. 나쁘지 않겠어. 이걸로 하자.」"
      - divider: true
        content: "⏰영화가 끝난 뒤⏰"
        position: left
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「영화라지만 각색이 너무 심하지 않아?……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「『우주의 끝까지』. 오랜만에 SF가 보고 싶어. 이걸로.」"
      - divider: true
        content: "⏰영화가 끝난 뒤⏰"
        position: left
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「……왜 절반 이상이 연애 이야기야? 쳇, 제목에 속았네.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontSize: bold
            content: %CHARA%
          - "「『마지막 백기사』. 어두운 시대, 금발의 %UMA%가 일어나 손에 든 창으로 어둠을 꿰뚫는다…… 저기, %CALLNAME%. 아무것도 안 타는데 왜 기사야?……」"
      - "갑자기 불길해진 %YOU%는 %CHARA%의 손을 잡고 다른 영화를 골랐다."

# 50 恋慕以上
o_s_restaurant:
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - "「잘 먹겠습니다.」"
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - "「응? 왜 이것만 시키냐고?」"
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - "「둘이면 이 정도면 충분하잖아. 이제 폭식 안 할 거야.」"
  - color: %COLOR%
    content:
      - fontSize: bold
        content: %CHARA%
      - "「전에 네가 일부러 말해 줬으니까, 나도 제대로 신경 쓸게.」"
