# @file メジロアルダン - 日常
# @author 洛洛
good_morning:
  sync: true
  lines:
    - if: era.get('love:71') < 75
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「모두가 꿈을 향해 분투하는 모습은 정말 눈이 부실 정도로 빛나네요.」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「오늘 상점가에서 무언가 행사를 하는 모양이에요. %CALLNAME%, 같이 가보시겠어요?」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「후훗, %CALLNAME%. 당신을 보고 있으니 마음이 무척 편안해져요.」"
        # STATUSNAME:1 = 熬夜
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「늦게까지 깨어 있다가 지각할 뻔해서 %CALLNAME%께 걱정을 끼쳤네요. 죄송해요.」"
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「죄송해요, %CALLNAME%. 어젯밤 역사책에 너무 빠져들어서 조금 늦게 잠들었어요.」"
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「정말 죄송해요. 어젯밤에는 제시간에 누웠지만, 몸이 좋지 않아 푹 자지 못했어요.」"
    - if: era.get('love:71') >= 75
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「오늘도 저희만의 빛을 함께 그려나가요, 제 사랑🎵」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「이렇게 고요한 밤에는 산책을 하고 싶어져요. 제 사랑, 저와 동행해 주시겠어요?」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「제 사랑이 아침에 끓여 주신 수프는 정말 따뜻했어요. 마시자마자 몸의 세포 하나하나가 환호하는 것만 같았답니다.」"
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「늦게까지 깨어 있다가 지각하고 말았네요. 제 사랑, 미안해요.」"
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「제 사랑, 미안해요. 어젯밤에도 역사책에 빠져들어서 조금 늦게 잠들었어요.」"
        - if: era.get('status:71:1') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「어젯밤 몸이 좋지 않아서 제 사랑께 고생을 끼쳤네요. 점심시간에 함께 낮잠을 자지 않으실래요?」"

select:
  sync: true
  lines:
    # STATUSNAME:10 = 沉睡
    # STATUSNAME:39 = 马跳S
    - if: era.get('status:71:10') === 0 && era.get('status:71:39') === 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            # CFLAGNAME:48 = 育成回合计时
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「안녕하세요, %CALLNAME%. 오늘도 함께 힘내도록 해요.」"
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「%CALLNAME%, 오늘 상점가에 새 카페가 생겼대요. 트레이닝이 끝나면 함께 커피를 마시러 가요.」"
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「얼마 전 언니와 제 어린 시절 사진을 찾았어요. 그리운 추억이네요.」"
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「좋은 아침이에요, %CALLNAME%. 요즘은 어떻게 지내세요?」"
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「%CALLNAME%, 한동안 뵙지 못했네요. 그래도 건강해 보이셔서 안심했어요.」"
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「%CALLNAME%, 오랜만이에요. 그때 보내 주신 지원과 도움, 정말 감사했어요.」"
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「좋은 아침이에요, %CALLNAME%. 잠이 깨도록 홍차 한 잔 내려 드릴까요?」"
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「%CALLNAME%, 다음 휴일에는 메지로 가문의 피서지로 함께 가지 않으실래요?」"
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「%CALLNAME%, 피곤해 보이시네요. 제가 마사지해 드릴게요. 천천히 몸을 풀어 봐요.」"
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「제 사랑, 오늘 아침은 뭘 드시고 싶으세요? 제가 준비할게요🎵」"
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「제 사랑, 요즘 피곤해 보이시네요. 자~ 당신만을 위한 무릎베개예요. 제 품에서 푹 쉬세요🎵」"
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「후후, 제 사랑과 보내는 하루하루가 이렇게나 행복하다니. 당신을 만난 일이야말로 세 여신님께서 제게 주신 가장 큰 축복이에요🎵」"
                - random: true
                  lines:
                    - color: %COLOR%
                      content:
                        - fontWeight: bold
                          content: %CHARA%
                        - "「제 사랑, 그렇게 무리하시면 안 돼요. 얍🎵 저만의 밤샘 방지법이랍니다.」"
    - if: era.get('status:71:10') > 0 || era.get('status:71:39') > 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - "소파에서 잠든 아르당은 아름답고 고요한 한 폭의 그림 같아서, %YOU%의 움직임마저 부드러워진다."
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - "피곤해진 메지로 아르당이 작게 하품했다."
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('cflag:71:48') < 3 * 48
              lines:
                - "너무 지쳐 %YOU%에게 기대어 잠든 아르당은 보금자리를 찾은 작은 새 같다."
            - if: era.get('cflag:71:48') >= 3 * 48
              lines:
                - "아르당은 휴게실 침대에서 편안히 잠들어 있다."

select_in_birthday:
  # 今日はトレーナーの誕生日
  sync: true
  lines:
    - if: era.get('love:71') < 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「생일 축하드려요~ %CALLNAME%. 제가 당신을 위해 생일 파티를 준비해 두었답니다.」"
    - if: era.get('love:71') >= 75
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「생일 축하드려요~ %CALLNAME%🎵 제가 당신을 위해 생일 파티를 준비해 두었답니다. 파티가 끝난 후에는 오직 저희 두 사람만의 축하 모임도 기다리고 있어요🎵」"

office_study:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「역시 %CALLNAME%이세요. 이토록 명쾌하고 간단하게 설명해 주시다니, 그만큼 많은 노력을 기울이셨겠지요.」"

talk:
  # CFLAGNAME:40 = 干劲
  - if: era.get('cflag:71:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어째서일까요, 지금이라면 어디까지든 달릴 수 있을 것만 같은…… 아니, 달리고 싶어요. 제 한계를 뛰어넘어 보고 싶답니다……!」"
  - if: era.get('cflag:71:40') === 2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「1분, 1초, 단 한 순간…… 아주 짧은 순간에도 정신을 집중할 수 있을 것만 같아요. 그렇다면, 분명……」"
  - if: era.get('cflag:71:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하나, 둘, 셋…… 후우. 체온, 심박수, 근육 상태 모두 좋습니다. 자, 오늘은 무얼 할까요?」"
  - if: era.get('cflag:71:40') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「다리 상태가 최상이에요. 온 힘을 다해 트레이닝에 임할 수 있겠어요…… 그것만으로도 무척 가슴이 벅차오르네요.」"
  - if: era.get('cflag:71:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「평범하고 아무 일도 없는 날이 제게는 최고의 날이랍니다…… 하지만 『지금』은 더 높은 경지를 향해 나아가야겠지요.」"
  - if: era.get('cflag:71:40') === 0
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「눈앞의 한순간 한순간을 소중히 여기며…… 꼼꼼하고 성실하게 트레이닝에 임하도록 해요.」"
  - if: era.get('cflag:71:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「발걸음이 무겁네요…… 하지만 그렇다고 낙담해선 안 되겠지요. 제 자신을 믿어야 해요…… 여태껏 쌓아 올린 수행을요.」"
  - if: era.get('cflag:71:40') === -1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후우…… 살다 보면 이런 날도 있는 법이지요. 조급해하지 말고…… 차라도 한 잔 마시며 기분 전환을 해 볼까요?」"
  - if: era.get('cflag:71:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%…… 오늘 컨디션으로는…… 조금 조절하는 편이 좋겠어요…… 트레이닝 메뉴를요……」"
  - if: era.get('cflag:71:40') === -2
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「지금의 저는 살아온 증거를 남길 수 있을까요…… 아니요, 결코 조급해해선 안 돼요. 심호흡을…… 마음을 가라앉히고, 깊게 숨을 들이쉬고……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「유모 할머니께서 직접 가르쳐 주신 수제 과자를 구워 왔어요. 그 따스한 풍미를 당신도 느껴보셨으면 좋겠네요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「병원에 입원해 있을 때 꿈꾸었던 그 의상…… 지금 이렇게 몸에 걸치고 있다니…… 그 시절의 저에게 보여주고 싶을 정도예요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가슴팍의 브로치는 아버님께서 선물해 주신 목걸이를 참고해서 디자인한 것이랍니다…… 만지고 있으면 마음이 차분해져요.」"
  # CFLAGNAME:66 = 招募状态
  - if: era.get('cflag:69:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「매일 아침 %CALL_69%를 깨우는 평범한 나날들…… 제게는 더없이 행복한 시간이에요.」"
  - if: era.get('cflag:64:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「조금 전에 해바라기 꽃다발을 안고 있는 %CALL_64%를 만났답니다…… %SEX%의 미소는 정말 해바라기를 쏙 빼닮았어요🎵」"
  - if: era.get('cflag:86:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「얼마 전 %CALL_86%의 어릴 적 사진을 발견했어요. 어린 나이에도 무척 기품 있고 아름다워서…… 정말 눈이 부시더군요.」"
  - if: era.get('cflag:21:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그거 아시나요? %CALL_21%의 사람을 설득하는 모습에서는…… 세상 돌아가는 이치를 엿볼 수 있어서, 마치 라쿠고를 감상하는 기분이 든답니다.」"
  - if: era.get('cflag:69:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「매일 아침 %CALL_69%를 깨우는 평범한 나날들…… 제게는 더없이 행복한 시간이에요.」"
  - if: era.get('cflag:72:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALL_72%는 참 아름답네요, 라는 말을 꺼냈더니…… 후훗, 두 동급생의 뺨이 벚꽃처럼 붉게 물들었지 뭐예요.」"
  - if: era.get('cflag:6:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALL_6% 씨가 음식을 먹는 모습은 저도 모르게 넋을 잃고 보게 돼요. 덕분에 저도 평소보다 조금 더 먹게 된답니다.」"
  - if: era.get('cflag:32:66') === 1
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALL_32% 씨와 함께 밤에 함께 차를 마셨는데, 홍차가 빛을 내뿜어서…… 후훗, 참으로 신기한 경험이었답니다🎵」"

office_gift:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「선물해 주셔서 감사합니다. 조만간 정성 어린 보답을 준비할 테니 기대해 주세요🎵」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「제게 주시는 선물인가요? 고맙습니다, 소중히 간직할게요.」"

office_cook:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후훗, 이렇게 함께 요리를 하니 무척 신기하고 즐거운 기분이 드네요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%께서는 중국 요리도 하실 줄 아는군요? 나중에 제게도 가르쳐 주실 수 있나요?」"
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어머나…… 저와 제 사랑의 호흡이 벌써 이렇게나 잘 맞다니, 마치 수십 년을 함께 산 노부부 같네요, 후훗🎵」"

office_rest:
  - random: true
    lines:
      - "조금 졸려서 잠시 쉬려던 것이 그만 잠들고 말았다."
      - "고개를 들어 보니 아르당 역시 소파에 기대어 잠들어 있었다."
      - "%YOU%은(는) %SEX%가 감기에 걸리지 않도록 겉옷을 가만히 덮어주었다."
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어떠신가요? 제 사랑, 시원하셔요?」"
      - "%YOU%은(는) 아르당의 무릎을 베고 누웠고, %SEX%는 면봉으로 %YOU%의 귀를 조심스레 파주고 있었다."
      - "머리로 전해지는 부드러운 감촉과 %SEX%에게서 풍겨오는 은은한 향기가 %YOU%의 신경을 간지럽혔다."
      - "%SEX%는 %YOU%의 당혹감을 눈치챈 듯 짓궂은 미소를 지으며, 면봉을 치우고는 %YOU%의 귓가에 가볍게 바람을 불어 넣었다."

office_game:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「세상에, 그런 공략 방법도 있었군요? 정말 대단하셔요.」"
      - "%YOU%의 문득 떠올린 아이디어가 좋은 결과로 이어지자, 곁에 있던 아르당은 감탄을 금치 못했다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「왠지 모르게 %CALLNAME%과는 호흡이 참 잘 맞는 것 같아요. 이런 감각, 무척 근사하네요.」"
      - "평소 비디오 게임을 접할 기회가 드물었던 아르당이었지만, %YOU%과(와) 함께 협동 게임을 플레이하며 뜻밖에도 좋은 호흡을 보여 주었다."

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……전…… 전 증명해 보이고 싶어요…… 제가 언니에게 뒤처지지 않는다는 것을요! 그저 그분의 여동생이 아닌, 오롯이 저 자신— 메지로 아르당 이라는 것을 모두에게 증명하겠어요!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「제 한계를 돌파하여 아직 보지 못한 풍경을 마주하고, 저만의 온전한 빛을 꽃피우고 싶답니다!」"

s_a_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후훗, 학원 교정에서 이렇게 손을 잡고 모두에게 보여주는 일은 꽤 색다른 기분이 드네요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%? 너무 긴장하신 것 같아요. 자~ 저와 함께 심호흡을 하며 긴장을 풀어보아요.」"

s_r_lunch:
  - random: true
    lines:
      - "오늘 아르당과 함께 도시락을 먹게 되었는데, 아르당이 특별히 %YOU%의 몫까지 도시락을 준비해 주었다."
      - "정갈하고 풍성하게 채워진 도시락을 보며 %YOU%은(는) 아르당이 훗날 분명 훌륭한 현모양처가 될 것이라며 감탄을 아끼지 않았다."
      - "%YOU%의 칭찬에 아르당은 부끄러움으로 붉어진 뺨을 감추려는 듯 슬며시 고개를 돌렸다."
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「제 사랑, 아~~ 해 보세요.」"
      - "선을 넘어서며 깊은 관계로 발전한 이후로, 두 사람 사이에는 서로 음식을 먹여주는 행동이 일상이 되었다."
      - "식사 시간은 예전보다 조금 더 길어졌을지 모른다."
      - "하지만 두 사람은 서로와 함께하는 이 시간을 더없이 소중히 여기고 있었다."

o_r_fishing:
  - random: true
    lines:
      - "%YOU%은(는) 낚싯대를 강으로 드리우고 물고기가 미끼를 물기를 기다린다. %CHARA%는 곁에 앉아 조용히 %YOU%과(와) 함께한다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「와아, 축하드려요, %CALLNAME%. 이렇게나 커다란 물고기를 낚으시다니요.」"

o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이렇게 강변을 산책하는, 고요하고 평범한 일상 또한 제게는 커다란 기쁨을 주네요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「강바람이 스쳐 지나가니 정말 상쾌하네요. 다음번에는 이곳으로 같이 가벼운 조깅을 하러 와요, %CALLNAME%.」"

o_s_arcade:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「힘내셔요, %CALLNAME%. 혹시 코인이 부족하시다면 제게도 아직 있으니 말씀해 주세요.」"
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저 인형을 갖고 싶으신가요? 사실 저도 무척 탐나던 참이었어요. 우리 함께 노력해 봐요. 당신이 제 곁에 있어 주기만 한다면, 무슨 일이든 해낼 수 있을 것 같아요.」"

o_s_drawing:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「후훗, 과연 어떤 상품을 뽑게 될지 기대되네요🎵」"

o_s_ktv:
  - "위닝 라이브를 연습하기 위해, %YOU%과(와) 아르당은 가라오케를 찾았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「높은 하늘을 넘어, 꿈을 손에 쥐고, 마치 생명을 태우듯 찬란하게 빛나리니~🎵」"
  - "%SEX%의 감미롭고 부드러운 목소리에 %YOU%은(는) 저도 모르게 넋을 잃고 빠져들어, 점차 시간 가는 것조차 잊어버렸다."

o_s_movie:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후훗, 배우분들의 연기가 무척 흥미롭네요. 그리고 귀신도 꽤 기발하네요.」"
      - "%YOU%은(는) 공포 영화의 갑작스러운 점프 스케어 연출에 저도 모르게 몸을 움츠렸으나, 곁에 있던 아르당은 오히려 흥미진진하게 감상하고 있었다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「추리 영화인가요? 작중에서 펼쳐지는 두뇌 싸움을 보고 있으면 참 즐거워져요. 저도 이따금 주인공의 입장에 몰입해서 범인을 추리해 보곤 한답니다.」"
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「로맨스 영화인가요? 후후🎵 당신과 함께 감상할 수 있다니 무척 기대되는 걸요. 이렇게 하면 제 사랑이 연애를 어떻게 생각하는지 조금 더 잘 알 수 있을 테니까요.」"
      - "아르당은 %YOU%의 팔에 슬며시 팔짱을 끼며 행복한 미소를 지었다."

o_c_pray:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후후, %CALLNAME%과(와) 신사에 기도하러 오다니. 가족과 올 때와는 전혀 다른 기분이네요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레센의 역사에는 부상이나 병으로 은퇴한 우마무스메가 많아서, 생각하면 두려워져요. 하지만 한정된 시간 속에서도 저만의 빛깔을 새기고 싶어요.」"

o_s_restaurant:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후훗, %CALLNAME%께서 추천해 주신 가게는 정말 훌륭하네요. 저도 모르게 조금 과식해 버렸어요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음~ 이 가게의 당근 스튜는 정말 독특한 풍미가 있네요. 대접해 주셔서 감사합니다, %CALLNAME%.」"

o_s_dating:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「기다리게 해서 죄송해요, %CALLNAME%. 오늘 저희는 어디로 향하나요?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%께서는 언제나 저를 많이 도와주셨지요. 이번만큼은 저 역시 %CALLNAME%을(를) 위해 무언가 힘이 되어 드리고 싶어요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이렇게 가족이 아닌 다른 누군가와 거리를 거니는 것은 처음이라, 무척 색다른 기분이 드네요.」"
  - if: era.get('love:71') >= 75
    random: true
    lines:
      - "아르당이 %YOU%의 팔짱을 낀 채 거리를 걷자, 주변에서 쏟아지는 수많은 시선에 %YOU%은(는) 내심 어색해했으나, 아르당은 도리어 무척이나 즐거워 보였다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후훗~ 제 사랑🎵 긴장하셨나요?」"
      - "당신의 긴장을 알아챈 듯, 아르당은 장난기 어린 목소리로 물어보며 팔을 더욱 꼭 끌어안았다."

o_s_shopping:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「제가 입은 이 옷, 어떤가요? %CALLNAME%.」"
      - "옷을 갈아입은 아르당이 앞으로 나와 우아한 자세로 묻는다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저편의 매장에서 세일 행사를 진행하는 모양이에요. 같이 가보실래요?」"

good_night_normal:
  sync: true
  lines:
    - if: era.get('status:71:10') === 0 && era.get('status:71:39') === 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「오늘도 수고하셨어요, %CALLNAME%. 내일 또 만나요!」"
            - "메지로 아르당과 하루의 트레이닝을 마친 %YOU%은(는) 기숙사 현관 밖에 서서 아르당이 돌아가는 모습을 배웅한다."
            - "미소 지으며 손을 흔드는 메지로 아르당을 보고, %YOU%도 미소와 손짓으로 답한다."
        - if: era.get('love:71') >= 75
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「오늘도 수고하셨어요, 제 사랑🎵 마사지로 긴장을 풀어 드릴까요?」"
            - "메지로 아르당과 하루의 일과를 마치자, 메지로 아르당은 %YOU%의 뒤로 돌아가 적당한 힘으로 %YOU%의 어깨를 주무르기 시작한다."
            - "「고마워, 아르당. 너도 오늘 힘들었지. 이따가 나도 주물러 줄게.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그럼 부탁드릴게요, 제 사랑🎵」"
    - if: era.get('status:71:10') > 0 || era.get('status:71:39') > 0
      lines:
        - if: era.get('love:71') < 75
          lines:
            - if: era.get('status:71:39') === 0
              content: "「오늘은 %SEX%를 조금 무리시켰네.」"
            - "%YOU%은(는) 살며시 %SEX%의 어깨를 두드린다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「응……~ 어머? 저도 모르게 잠들었네요!」"
            - "「오늘 트레이닝은 끝이야. 수고했어. 데려다줄게.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「감사해요, %CALLNAME%. 신세를 끼치네요.」"
            - "%YOU%은(는) 이따금 하품하는 메지로 아르당을 %SEX%의 기숙사까지 데려다주고, 사쿠라 치요노 오에게 맡긴 뒤 안심하고 돌아간다."
        - if: era.get('love:71') >= 75
          lines:
            - if: era.get('status:71:39') === 0
              content: "「오늘도 수고했어, 아르당.」"
            - "%YOU%의 곁에서 편안히 잠든 메지로 아르당을 보며, %YOU%은(는) 작은 목소리로 말한다."
            - "「좋은 꿈 꿔. 잘 자.」"
            - "%YOU%은(는) %SEX%가 미리 비워 둔 자리에 나란히 눕는다. 메지로 아르당은 %YOU%이(가) 눕는 것을 느끼자 곧바로 %YOU%을(를) 끌어안았다."
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「안녕히 주무세요. 여신님께서 제게 주신 보물.」"

cl_new_year:
  title: "새해"
  lines:
    - "새해 첫날. 곳곳이 명절의 즐거움으로 가득하다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 새해 복 많이 받으세요~」"
    - acc: 1
      content: "「새해 복 많이 받아, 아르당.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 함께 신사에 새해 참배를 하러 가지 않으실래요?」"
    - acc: 1
      content: "「물론이지~」"
    - "%YOU%은(는) 아르당의 초대를 받아 함께 신사를 찾는다. 서로를 위한 소원을 빈 뒤, 새해의 소소한 놀이도 함께 즐겼다."

cl_valentine:
  title: "밸런타인데이"
  lines:
    - "오늘은 밸런타인데이. 사랑에 빠진 소녀들은 마음에 둔 상대에게 진심을 담은 초콜릿을, 평범한 친구에게는 의리 초콜릿을 건넨다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「누군지 아시겠어요🎵」"
    - acc: 1
      content: "「아르당.」"
    - "%YOU%이(가) 뒤에 있는 사람의 이름을 정확히 부르자, 시야를 가리던 손이 떨어진다."
    - "아르당이 %YOU% 앞으로 나와 행복한 미소와 함께 예쁘게 포장한 초콜릿을 내밀었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「해피 밸런타인, %CALLNAME%. 직접 만든 거라 부족한 점도 있을지 몰라요. 드시면서 푹 쉬세요.」"
    - acc: 1
      content: "「고마워, 아르당.」"

cl_fans:
  title: "팬 감사제"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘은 팬 감사제네요. 음……팬 여러분을 어떻게 맞이하면 좋을까요? %CALLNAME%.」"
    - "아르당이 조금 불안한 표정으로 %YOU%에게 어떤 방식으로 감사를 전하면 좋을지 묻는다."
    - acc: 1
      content: "「아르당다운 방식으로 팬들의 마음을 사로잡는 거야!」"
    - "%YOU%의 대답을 듣고 아르당은 미소 지으며 자신감을 되찾는다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……후후, %CALLNAME%의 말씀은 언제나 재미있으면서도……제게 힘을 주네요.」"
    - "그 뒤 팬 감사제는 무사히 끝났다."

cl_temple_fair:
  title: "축제"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 축제가 열린대요. 밤늦게는 담력 시험도 한다던데, %CALLNAME%, 함께 가지 않으실래요?」"
    - "아르당이 기대에 찬 눈으로 %YOU%을(를) 바라본다. %YOU%은(는) 거절할 수가 없다."
    - "축제를 함께 둘러보며 즐거운 시간을 보낸 뒤, %YOU%과(와) %SEX%는 담력 시험으로 향한다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후후, 담력 시험이라니. 분명 재미있겠죠.」"
    - acc: 1
      content: "「무서워하지 않네. 오히려 신이 났어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네. 몸 때문에 이런 행사에는 별로 참여하지 못했거든요. 하지만 이제는 %CALLNAME% 덕분에 예전에 하고 싶었던 일들을 할 수 있어요.」"
    - "%YOU%은(는) 아르당의 손을 잡고 함께 담력 시험에 들어간다. 아르당은 %YOU%의 곁에서 내내 행복하게 웃으며, 이따금 %YOU%에게 눈길을 보낸다."

cl_halloween:
  title: "핼러윈"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트릭 오어 트리트🎵」"
    - "핼러윈 당일, 사무실에 있던 %YOU%은(는) 노크 소리를 듣고 문을 연다. 그곳에는 흡혈귀로 분장한 아르당이 서 있었다."
    - "의상에서는 유혹적인 분위기와 고귀함이 살짝 묻어났고, 겁주려는 모습은 오히려 귀여웠다."
    - acc: 1
      content: "「해피 핼러윈, 아르당.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후후, 해피 핼러윈, %CALLNAME%. 이 차림은 어떤가요?」"
    - "「정말 좋아. 넋을 놓고 봤어. 완전히 사로잡혔네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후후, 그럼 첫 포옹을 선사해 드릴게요, %CALLNAME%🎵」"

cl_christmas:
  title: "크리스마스"
  lines:
    - "%YOU%은(는) 아르당의 초대를 받아 메지로 가문에서 여는 크리스마스 파티에 참석한다."
    - "밤이 되자 %SEX%의 친구들은 각자 돌아갔다——"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 저와 『2차』를 즐겨요.」"
    - acc: 1
      content: "「좋아.」"
    - "%YOU%은(는) 아르당의 초대를 받아 %SEX%와 밤거리를 걷는다. 오늘만 볼 수 있는 풍경을 눈에 담았다."
    - "%YOU%과(와) 아르당은 플라네타리움에 가서 함께 별을 본다."
    - "헤어질 때 내년 크리스마스도 함께 보내자고 약속하며, 행복한 하루를 마쳤다."

birthday:
  title: "생일"
  lines:
    - "오늘은 메지로 아르당의 생일이다."
    - acc: 1
      content: "「생일 축하해, 아르당.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「축하해 주셔서 감사합니다, %CALLNAME%.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘 밤에 모두를 초대해서 즐거운 파티를 열었으면 해요.」"
    - "%YOU%은(는) 아르당의 제안에 기꺼이 동의하고 파티를 위한 만반의 준비에 착수했다."
    - "저녁이 되자 집 안에서 성대한 생일 파티가 열렸고, 즐거운 소란은 밤이 아주 깊어질 때까지 이어졌다."

# 恋慕が依存
# 一度きり
birthday_dependence:
  title: "생일"
  lines:
    - acc: 1
      content: "「생일 축하해, 아르당.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「축하해 주셔서 감사해요, 제 사랑.」"
    - "오늘은 아르당의 생일날. %YOU%은(는) 정성 어린 선물을 전달했고, 아르당의 친구들과 힘을 합쳐 %SEX%를 위한 성대한 생일 연회를 베풀었다."
    - "아르당의 얼굴에 피어난 행복한 미소를 바라보며, %YOU%은(는) 그동안 애쓴 보람을 느꼈다."
    - ………………
    - "파티가 끝나자 아르당은 참석한 친척과 친구들에게 차례로 손을 흔든다. 마지막 사람이 떠난 뒤, 아르당은 %YOU%의 곁으로 와서 %YOU%의 손을 잡았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……제 사랑, 전 당신과 함께 더 많은, 훨씬 더 많은 『지금』의 날들을 쌓아가고 싶어요. 괜찮으시다면…… 아주 조금만 더 제 곁에 머물러 주시겠어요? 오직 저희 두 사람만의 시간으로요.」"
    - "그 후 메지로 아르당은 %YOU%의 손을 이끌고 메지로 저택의 뒷산 산등성이로 향했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제 사랑, 이곳이 바로 제가 밤에 가장 즐겨 찾는 곳이랍니다. 여기에 서서 하늘을 올려다보면 눈이 부실 정도로 찬란한 별바다를 마주할 수 있거든요.」"
    - "아르당의 감성 어린 말에 %YOU% 역시 고개를 들어 밤하늘을 우러러보았다. 도심의 인공적인 불빛에서 멀리 떨어진 덕분에, 밤하늘의 무수한 별들이 선명하게 제 빛을 발하고 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 이 우주는 마치 우마무스메들의 유구한 역사와도 닮았어요. 저기 반짝이는 별 하나하나는 모두 역사 속에 찬란한 궤적을 남긴 위대한 우마무스메 선배님들을 상징하는 것만 같아요. %SEX%들은 이토록 눈부시고 아름답게 빛나고 있으니까요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그것이 바로 제가 밤마다 이곳에 와서 별을 바라보는 이유랍니다. 마치 역사라는 기나긴 강물 속에서 선배님들이 남기신 찬란한 빛을 온몸으로 받는 기분이 들거든요.」"
    - acc: 1
      content: "「너 역시 너만의 찬란한 빛을 이미 가지고 있어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……！」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후훗, 당신의 말씀은 절반만 정답이네요. 제 생각에 제가 가진 빛은 오롯이 저만의 것이 아니라, 제 사랑과 저, 우리 두 사람이 함께 그려 낸 빛이라고 생각해요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「서로를 비추는 등불이 되어, 우리만의…… 공동의…… 세상에 단 하나뿐인 빛을 피워내는 것이랍니다🎵」"
    - "메지로 아르당은 %YOU%의 어깨에 조용히 몸을 기대었고, %YOU%과(와) 함께 이 광활한 별바다를 올려다보며 같은 리듬으로 뛰는 서로의 심장 소리를 느꼈다."
    - "무수한 별빛이 자아내는 은하수의 캔버스 아래, 두 사람은 서로에게 몸을 기댔다."
