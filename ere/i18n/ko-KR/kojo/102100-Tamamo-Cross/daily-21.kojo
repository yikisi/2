# @file タマモクロス - 日常
# @author 雞雞
select:
  sync: true
  lines:
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오, 내는 %CHARA%다!」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「컨디션은 좀 어떻나? 밥은 뭇고? 밥 묵고 가만히 있으믄 소 된다 카더라! 아하하!」"

good_morning:
  sync: true
  lines:
    # CFLAGNAME:66 = 募集状態
    - if: era.get('cflag:45:66') === 1
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALL_45% 주머니는 대체 우찌 된 기고……? 와 %SEX% 주머니에선 사탕이 끝도 없이 나오나!? 내 무섭다……!」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「기숙사는 참 좋대이. 항상 누군가 있으니까 마음이 놓인다. 꼭 고향 집 같구마~」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「보케짓 받아쳐 줄 사람이 억수로 모자란다이가…… 그보다 여기 아들은 보케 짓도 참 희한하게 하네야……!!」"
    - if: era.get('relation:21:0') >= 76
      random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「처음에 그렇게 대들어서 미안타. 그럴 때 내한테 말 걸어줘서 참말로 고맙데이!」"
    - random: true
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「『하얀 번개』 등장! 이라믄…… 헤헤, 내 좀 멋있나?」"

talk:
  # BASENAME:0 = 体力
  - if: era.get('base:21:0') < era.get('maxbase:21:0') * 0.45
    random: true
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「큰일이네, 힘이 안 들어간다. 쪼매만 기다려 봐라……」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「지금이 이 악물고 버티야 할 때라는 건 알지마는……」"
  - if: era.get('base:21:0') >= era.get('maxbase:21:0') * 0.45
    random: true
    lines:
      # CFLAGNAME:40 = やる気
      - if: era.get('cflag:21:40') === 2
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「의욕이랑 기운이 팍팍 솟는다! 조타~~!!」"
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「기운이 번쩍번쩍한다!! 내는 바로 번개니까네!!」"
      - if: era.get('cflag:21:40') === 1
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「파바박 준비해가, 슈슉 훈련하고, 딱 끝내버리믄 된다!」"
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「오늘 기분 좋다, 쪼매 엄격하게 해도 괜찮데이!」"
      - if: era.get('cflag:21:40') === 0
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「준비 OK데이! 함 시작해 보까!」"
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「야무지게 가보자! 내만 따라온나!」"
      - if: era.get('cflag:21:40') === -1
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「우째 미적지근한 게…… 뭐가 좀 안 맞나 싶네.」"
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「우째 이래 텐션 좀 팍 올릴 수 있으믄 좋겠는데……」"
      - if: era.get('cflag:21:40') === -2
        random: true
        lines:
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「오기로…… 버티자…… 함 버텨보자……」"
          - random: true
            lines:
              - color: %COLOR%
                content:
                  - fontWeight: bold
                    content: %CHARA%
                  - "「니 코스에 있는 저 풀떼기 묵어도 되는 거 아이가……」"

office_gift:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「선물이가! 완전 럭키네! 얼른 열어보재이!」"

o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「동생들 특식으로 줄 만한 거 낚으믄 좋겠네~🎵」"
  # CFLAGNAME:66 = 募集状態
  - if: era.get('cflag:20:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저기 누워있는 거 고양이가? 아이네! 아무리 봐도 %CALL_20% 아이가?」"
  # EXPNAME:25 - 26 = 性交回数 - 睡姦回数
  - if: era.get('love:21') >= 75 && era.get('exp:21:25') > era.get('exp:21:26')
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저기…… 오늘은 자라 묵고 정력 좀 보충할래……♥?」"

o_r_walk:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이야, 오늘 날씨 참—— 뭐? 그냥저냥이라니 그기 무슨 소리고! 완전 쨍쨍한데!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「밥 묵고 나서 산책하면서 소화시키는 것도 중요하데이~」"

o_s_arcade:
  - if: era.get('cflag:6:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「내 동생 주게 저 괴물 %CALL_6% 인형 뽑을 끼다!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으아악—! 이거 와 이리 어렵노! 빌어먹을 SE〇A!」"

o_s_drawing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「나오나! 나오나! 제발 좀 나오나!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음~ 기대 안 하믄 실망도 없다…… 됐나?」"

o_s_ktv:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「노래방 세트 메뉴 억수로 맛있네!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가난한 진수부는 무법지대~🎵 야마토는 안 나오네 야마토는 안 나와~🎵」"

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「영화? 내는 걍 티비에서 재방송해 주는 거나 봤대이……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「팝콘 와 이리 비싸노……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「담에는 동생들도 데꼬 같이 와 보까……?」"

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐라카노? 니가 이래 비싼 걸 사주겠다고?! 그러면 안 된다!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「내는 그냥 이 콩나물밥 소자에 단무지나 묵을란다…… 뭐? %CALLNAME%이(가) 안 된다꼬?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「남은 거는 우리 동생들 갖다주게 포장 좀 해도 되나?」"

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그, 저기…… 역시 니 로리콘이가……」"
  - if: era.get('love:21') >= 50 && era.get('love:21') < 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "（설마…… 나 같은 놈도 사랑받을 수 있는 기가……?）"
  - if: era.get('love:21') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%♥, 내 손 쪼매만 더 꽉 잡아도♥」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이렇게 트레이닝 안 하고 놀아도 되는 기 맞나……?」"

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「내한테 이래 귀한 선물을 주겠다고……? 마음만 받을게……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저 옷, 동생들이 좋아할랑가 모르겠네?」"

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「진짜 열받네!! 내 키 작은 기 뭐 우쨌다고!!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으아아아아악!!! 내는 반드시 《하얀 번개》가 될 %UMA% 란 말이다!!」"

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저기…… 우리 너무 눈에 띄는 거 아이가……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하, 내 진짜 잘못 걸려들었구마……」"

s_r_lunch:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「꼬매이들 거 만들 때 같이 만든 기다……무 봐라.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「역시네, 억수로 맛있다!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「있제, %CALLNAME%. 내한테 반찬 너무 많이 주는 거 아이가.」"

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이래 좋은 재료 팍팍 써서 요리해 보는 거 진짜 오랜만이구마……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐라카노, 컨디션 관리해야 된다고 닭가슴살만 묵어야 된다꼬?!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그라믄 %CALLNAME% 한테 내 전공인 콩나물무침 솜씨 함 보여주께!」"

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어라, 내는 뛰러 왔는데 와 미적분을 배워야 되는 기고?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아 내 안 잤다, 안 잤다니까네……」"

office_rest:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(%YOURSEX% 자는 얼굴, 쪼매 귀엽네……)"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으으음, 내는 이제 더 몬 묵는다……」"

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그렇구마…… 내 다 이해했다! 그러니까 뒤에서 콱 치고 올라가라는 기지?!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「알았다! 고맙데이!」"

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「우리 동생들은 이제 게임기 안 하드라…… 다들 폰 하나 가지고 싸우면서 놀데.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오오, 요즘 게임기는 화면이 와 이리 뻔쩍뻔쩍하노!」"

out_church:
  - "기운이 없는 %CHARA%에게 의욕을 불어넣어 주기 위해, 당신은 특별히 신사로 기도를 드리러 왔다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하느님, 부처님, 잘 부탁드립니더! 내 이제 좀 안 막히게 도와주이소!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「부탁드립니더—! 컨디션 좀 좋게 해주이소—!」"
  -
  - "잠시 후, %SEX%의 휴대전화가 울렸다."
  - "%CHARA%는 눈을 동그랗게 뜨더니 꼬리까지 바짝 세웠다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이거…… 저번에 겨우 신청했던 소비쿠폰 당첨 통지 아이가?!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「보자…… 우와! 됐다! 내 당첨됐다!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「감사합니더, 진짜 감사합니더—!」"
  -
  - "정말 이런 우연이 있을까? %YOU%은(는) 기뻐서 소리치는 %CHARA%를 보며 생각에 잠겼다."
  - if: d.dice > 0
    content: "당첨된 덕분인지, %CHARA%의 기운이 부쩍 돌아온 것 같다! 잘됐네 잘됐어……"
  - if: d.dice === 0
    content: "당첨은 됐지만, 역시 %CHARA%의 상태와는 별개인 모양이다……"
