# @file セイウンスカイ - 日常
# @author Wolke
# @author Claude (翻訳)

good_morning:
  sync: true
  lines:
    - if: era.get('cflag:20:育成用变量')?.jess > 0
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋은 아침이에요, 트레이너 쌤. 오늘 할 일은 뭔가요……」"
    - if: "!(era.get('cflag:20:育成用变量')?.jess)"
      lines:
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「좋은 아침~ 오늘도 느긋하게, 적당히, 설렁설렁 보내요 (^ ･ ω ･ ^ =) ~」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「트레이너 쌤! 아침부터 기적이 일어났어요! 세이가 일찍 일어나서 학교에 왔다고요!」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「트레이너 쌤, 좋은 아침이에요─ 나왔어요─ 일어났어요─ 이제 돌아가도 되나요?」"
        - random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「좋은 아침~ 트레이너 쌤, 오늘은 늦잠 안 잤어요─ 뭐~ 십 분 정도는 더 잤지만요.」"
        - if: era.get('status:20:熬夜') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「졸려…… 어젯밤에 밤낚시를 너무 늦게까지 했나?」"
        - if: era.get('status:20:熬夜') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「하아…… 낮잠으로 보충해야겠네……」"

select:
  sync: true
  lines:
    - if: era.get('cflag:20:育成用变量')?.jess > 0
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음 일정은 뭔가요……」"
    - if: "!(era.get('cflag:20:育成用变量')?.jess)"
      lines:
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「서두르지 말고, 서두르지 말고~ 자기 속도에 맞춰 천천히 가요.」"
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「적당히 사는 게 최고죠─」"
        - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「트레이너 쌤, 낚시하러 가요, 낚시~ (/ = ^ ･ ω ･ ^ =)/ 」"
        - if: era.get('status:20:沉睡') > 0 || era.get('status:20:马跳S') > 0
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - 「(= ˘ ω ˘ =) ~ Z—Z—Z——」

office_study:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 좀 더 천천히…… 세이 머리가 과부하 걸리겠어요~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「깼어요, 깼어. 어디까지 얘기하셨죠?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음…… 역시 트레이너 쌤한테 처음부터 다시 부탁드려야겠네요, 에헤헤~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「헤헤~ 트레이너 쌤도 수업하기 힘드시죠~ 좀 쉴까요?」"

office_prepare:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 믿어 주세요. 세이의 작전은 쌤이 믿어 주시기만 하면 되니까……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어떤 전술이든 달릴 체력은 필요하죠. 후딱 끝내 볼까요!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「작전명은 『정성을 다해 적당히 농땡이 피우기』. 상대의 경계를 풀고 빈틈을 노려 이기는 거예요~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「준비는 진작 끝났어요. 자, 월척 한 마리 낚아 볼게요!」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「너무 무리하면 안 좋다고들 하잖아요. 그러니 평정심, 평정심~ 냐하하~」"

talk:
  # 直前に「一緒にゲーム」をした
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_game) && (t[0] = false), t[1]
    lines:
      - if: era.get('love:20') < 90
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하아, 게임이란 게 그렇죠. 뭔가 조금 아쉬운 느낌.」"
      - if: era.get('love:20') >= 90
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「게임만 하니까 심심하네요. 좀 더 짜릿한 거 안 할래요~」"
  # 直前に「一緒に差し入れ」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_cook) && (t[0] = false), t[1]
    lines:
      - if: era.get('love:20') < 90
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후아아~ 배부르다, 배불러~」"
      - if: era.get('love:20') >= 90
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흐흥~ 트레이너 쌤, 오늘 수프 어때요? 세이가 비장의 재료를 넣었거든요~」"
          - "(굴, 구기자, 닭 콩팥……)"
  # 直前に「一緒に休憩」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_rest) && (t[0] = false), t[1]
    lines:
      - if: era.get('love:20') < 50
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「아하~」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「둥실둥실─ 둥실둥실─」"
      - if: era.get('love:20') >= 50
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「조금만 더 안아 주세요…… 조금만 더…… 세이의 트레이너 에너지가 아직 가득 안 찼어요.」"
  # 直前に「トレーニング」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - if: era.get('cflag:20:干劲') < 2 && era.get('cflag:20:干劲') > -2
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘 훈련량, 어제보다 확실히 많잖아요! 항의합니다! 이건 우마무스메 괴롭히기예요!!!」"
      - if: era.get('cflag:20:干劲') === 2
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후아아~ 오늘 컨디션 좋네~ 평소의 백이십 퍼센트는 발휘하는 느낌이에요!」"
      - if: era.get('cflag:20:干劲') === -2
        color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 이번엔 꾀병 아니에요─ 정말 몸이 안 좋다고요─」"
  - if: t[0]
    lines:
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤, 오늘 햇살이 이렇게 좋은데 낚시하러 안 가면 아깝잖아요─」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「에이~ 일은 내일 해도 되잖아요. 물고기는 기다려 주지 않는다고요.」"
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤─ 뒷골목 고양이가 드디어 일광욕을 배웠어요. 지금의 세이처럼 꼼짝도 하기 싫어하더라고요.」"
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「레이스 날엔 감으로 달려 볼까요? 농담이에요…… 한 삼분의 일 정도는 농담, 냐하하~」"
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤~ 잠깐 누울게요. 급한 일이 있으면…… 일어난 다음에요~」"
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤~ 낚시 같이 가요. 쌤이 있으면 세이는 운이 좋아지거든요. 정말이에요……」"
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤, 고양이 잘 쓰다듬으시네요. 기분 좋아서 골골거리잖아요. 세이도 쓰다듬어 볼래요? 골골 소리가 날지도요~」"
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「다음 작전요? 트레이너 쌤~ 같이 생각해 주세요. 옆에 앉아 주시면 머리가 좀 돌아가거든요…… 아마도?」"
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「같이 잠깐 잘래요? 잠깐만요. 트레이너 쌤이랑 낮잠 자면 세이는 충전이 되거든요……」"
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤, 오늘 낚시하러 가요~ 도망은 금지! 이미 세이의 바늘에 걸렸으니까 평생 안 놓아줄 거예요─」"
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「일어나면 거기 있어 주세요. 눈을 뜨면 가장 먼저 트레이너 쌤이 보이게─ 안 그러면 계속 눈 감고 기다릴 거예요. 돌아와서 입맞춤해 주실 때까지 안 일어날래요.」"
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「아까 쌤 손을 계속 핥던 거 다 봤어요! 고양이 한 마리한테 질투하다니─ 트레이너 쌤, 세이도 쓰다듬어서 공평하게 해 주실래요?」"
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「그 작전은 안 적어도 돼요. 쌤이 생각하는 순간 알 수 있거든요.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「왜인지 알아요? 지금 머릿속이 온통 트레이너 쌤으로 가득하니까요.」"

office_gift:
  - if: era.get('love:20') < 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어라~ 어라~ 이거 세이한테 주는 선물인가요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「설마! 트레이너 쌤이 세이의 산타 할아버지였어요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그럼─ 띠링띠링…… 푸훗!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「축하해요! 세이의 호감도 +1이에요~ 냐하하~」"
  - if: era.get('love:20') < 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어라라? 트레이너 쌤, 드디어 눈치가 생기셨어요? 훈련 데이터만 보시는 줄 알았는데.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그럼 열어 볼게요…… 흐흥, 보는 눈이 있으시네요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그런데 갑자기 선물이라니, 트레이너 쌤─ 혹시 몰래 세이를 좋아하시나요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「농담이에요~ 냐하하~」"
  - if: era.get('love:20') < 50
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤! 이게 뭐예요? 세이한테 주시는 거예요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「맞혀 볼게요. 요즘 열심히 하니까 쌤이 안쓰러워서 기분 풀어 주시려는 거죠?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아니면…… 그냥 몰래 잘해 주고 싶어지셨나요? 세이가 의외로 인기가 많네요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「농담이에요, 고마워요. 정말 마음에 들어요. 오늘 트레이너 쌤, 유난히 다정하시네~」"
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤! 뭘 숨기고 계시네─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「세이한테 주시는 거예요? 에헤헤, 열어 봐도 돼요? 지금요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「와아! 트레이너 쌤! 이거 좋아하는 건 어떻게 아셨어요? 몰래 레이더라도 달아 놓으셨나요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음~ 이 선물, 꼭 안고 안 놓을래요.」"
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 너무해요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이렇게 정성 들인 선물을 주시면, 오늘은 미안해서 못 괴롭히잖아요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「잠깐…… 세이가 손해 보는 거 아닌가요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그럼 이렇게 해요─ 오늘 트레이너 쌤도 세이 거. 선물도 세이 거.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이의 있나요? 있어도 기각이에요. 흐흥~ 트레이너 쌤은 세이한테 잘해 주실 거죠, 네~」"
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「와아, 이거! 세이한테 주시는 거예요?!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어떡하지, 어떡해. 트레이너 쌤이 더 좋아지잖아요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이거 곤란한데요. 앞으로 선물 받을 때마다 이렇게 기쁘면─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「매번 트레이너 쌤 손아귀에서 못 벗어나는 거 아닌가요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(그래도…… 그것도 나쁘진 않을지도~)"
  - if: era.get('love:20') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어라? 이거─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「헤헤, 트레이너 쌤, 있잖아요─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그저께 훈련 끝나고 가게 앞을 지나갔는데요. 진열장에 이게 있더라고요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그때 생각했어요. 쌤이라면 이 색을 고르시겠구나 하고. 그런데 정말─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤…… 세이, 점점…… 쌤을 더 잘 알게 됐네요.」"
  - if: era.get('love:20') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤…… 있잖아요. 이젠 쌤한테 선물을 받아도 서둘러 열어 보지 않게 됐어요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「쌤이 제 사람이 된 뒤로는, 기다리는 일도 전부 달콤해진 것 같아요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「헤헤~ 욕심이 많아졌나요? 예전엔 선물만으로도 충분히 기뻤는데.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이젠 선물만으론 안 돼요. 트레이너 쌤까지 같이 받아야겠어요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그래도 안심하세요. 세이도 자신을 드릴 테니까. 게다가─ 쌤 쪽이 더 이득이에요~」"
  - if: era.get('love:20') >= 90
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 선물, 트레이너 쌤이 일부러 골라 주신 거예요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그럼 각오하세요─ 받고 나면 쌤한테 찰싹 붙어 있을 테니까.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이게 세이 곁에 있는 동안은 쌤도 곁에 있어 주세요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤의 향기는 세이만의 것. 쌤 머릿속도 세이 생각으로만 채워 주세요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「앞으로 주실 선물도 전부 세이한테만……」"

office_cook:
  # 直前に「一緒に休憩」をした
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_rest) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아하~암─ 후─」"
      - "세이운 스카이는 아기 고양이처럼 기지개를 켰다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤~ 지금 몇 시예요?」"
      - "%YOU%은(는) 멍하니 눈을 떴다."
      - "「서두를 것 없어. 아직 여섯 시…………」"
      - "「!? 여섯 시? 오후 내내 잔 거야?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「흐흥~ 트레이너 쌤, 완전 게으름뱅이……」"
      - "「오늘 밤은 밀린 일을 해야겠네.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「에이~ 서두를 것 없어요~ 먼저 뭐라도 먹어요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「서쪽 거리에 어묵 포장마차가 있었죠. 거기로 가요!」"
  # 直前に「学習指導」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_study) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「응? 시간 됐다! 밥이다, 밥!!!」"
      - "세이운 스카이는 고삐 풀린 길고양이처럼 문을 열고 뛰쳐나갔다……"
      - "(얘는 왜 공부하고 나면 식욕이 이렇게……)"
      - "「야, 천천히 가. 기다려!」"
  # 直前に「トレーニング」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아아~ 더는 못 하겠어…… 세이, 힘이 하나도 안 남았어요……」"
      - "세이운 스카이는 아기 고양이처럼 책상에 엎드려 꼼짝도 하지 않는다……"
      - "「뭐 먹고 싶어? 가져다줄게.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 왜 이렇게 잘해 주세요~ 세이, 너무 감동해서 눈물이 나요, 흐으으~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「함박스테이크 해물볶음밥에 차가운 콜라 한 병 부탁해요.」"
  - if: t[0]
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「히시 아마존이 만든 연어 주먹밥을 가져왔어요. 맛있어요~ 속도 꽉 찼고.」"
          - "「또 냉장고에 있던 걸 훔쳐 왔어?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「에이~ 신경 쓰지 마세요~ 본가에서 보내 준 조림으로 채워 놨으니까 %SEX%도 손해는 아니에요~」"
          - "「다음엔 말은 하고 가져와……」"
      - random: true
        lines:
          - "「응? 이건 뭐야?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「아, 그 병은 할아버지가 본가에서 보내 주신 오이절임이에요.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「좀 드실래요? 맛있어요.」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤, 도와주세요~」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「스페가 당근을 한 상자나 줬어요. 세이 혼자서는 다 못 먹겠어요.」"
          - "「%SEX%한테는 한 끼 분량 정도겠지만……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「스페가 먹는 양을 보면 좀 무서워져요……」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「음…… 음!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「역시 이맘때 꽁치가 제일 맛있어!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「다음 낚시에선 이걸 노려야겠어요! 배 터지게 먹어야지!」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「오늘 도시락은 플라워가 만들었어요. 어때요, 괜찮죠~」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「%SEX%는 여러 가지 요리를 할 줄 알거든요. 특히 케이크가 맛있어요!」"

office_rest:
  # 直前に「一緒に差し入れ」をした
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_cook) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후아아~ 배도 부르니 이제 푹 자기만 하면 되겠네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「인생은 이 정도면 충분하죠……」"
  # 直前に「ゲーム」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_game) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「게임하고 바로 자다니, 트레이너 쌤, 폐인으로 가는 지름길인데요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「세이요? 세이는 달라요. 쉬면서 상대가 지치길 기다리는 거죠. 세이만의 훈련법이에요~」"
  # 直前に「学習指導」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_study) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아아─ 베개야! 보고 싶었어!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 나쁜 사람! 너무 어렵잖아요! 세이 배터리가 바닥났어요!」"
  # 直前に「トレーニング」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아아~~~ 안 돼, 안 돼~~~ 힘들어 죽겠어~~~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 세이는 겨울잠 잘래요. 다음 주에 깨워 주세요……」"
  - if: t[0]
    lines:
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「오!? 트레이너 쌤이 먼저 쉬자고 하시다니!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「설마 쌤도 농땡이를 배우신 건가요─ 세이 때문에?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「냐하하~ 농담이에요. 트레이너 쌤이 제일─ 좋아요!」"
          - "세이운 스카이는 가볍게 뛰어와 자연스럽게 %YOU%의 어깨에 기대고 살며시 눈을 감았다."
      - if: era.get('love:20') < 50
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤, 여기 보세요, 여기─」"
          - "세이운 스카이는 %YOU%을(를) %SEX%의 비밀 낮잠 장소로 데려갔다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「잠자는 건 꽤 진지한 일이에요! 대충 때우면 절대 안 된다고요!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「딱 좋은 온도, 푹신한 잔디, 얼굴을 스치는 바람…… 완벽해!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이리 와요~ 낮잠의 달인이 고른 곳을 체험해 보세요~」"
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - "잠깐 쉬자는 말에 세이운 스카이가 기뻐하며 종종걸음으로 다가왔다."
          - "눕기 직전, 얼굴이 살짝 붉어진다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤…… 저…… 안겨서…… 자도 될까요?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「쌤 품에서 자면 세이는 더 푹 쉴 수 있거든요.」"
      - if: era.get('love:20') >= 50 && era.get('love:20') < 90
        random: true
        lines:
          - "%YOU%이(가) 소파에 눕자마자 세이운 스카이가 달려들었다."
          - "%YOU%의 어깨에 머리를 얹고 팔다리로 %YOU%을(를) 단단히 감싼다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「움직이면 안 돼요! 오늘 트레이너 쌤은 세이의 안는 베개니까요~」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「각오하세요~ 앞으로는 이게 일과가 될 테니까~」"
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「쉬고 싶으세요? 세이 특제 무릎베개 서비스는 어떠세요?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「안는 베개로 쓰셔도 좋아요. 하지만 너무 세게 안으면…… 복수할 거예요~」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「자, 어서요~ 무료는 이번뿐이에요~ 다음엔 유료라고요.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「요금이요? 헤헤~ 그때 알려 드릴게요~」"
      - if: era.get('love:20') >= 90
        random: true
        lines:
          - "휴식 시간이 끝나도 세이운 스카이는 %YOU%을(를) 꼭 안은 채 놓아주지 않는다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「조금만 더 안아 주세요…… 조금만 더……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「세이, 트레이너 쌤하고 더 가까이, 더 가까이 있고 싶어요……」"

office_game:
  # 直前に「一緒に差し入れ」をした
  - if: t = [true, false], (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_cook) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후─ 배부르다, 배불러~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 오후 훈련까지 아직 시간도 남았는데 두 판만 해요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「쌤이 이기시면 오후에 추가 훈련하기, 어때요?」"
  # 直前に「学習指導」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.office_study) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하하! 받아라, 받아라!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어때요, 대단하죠~ 아까 공부하다가 떠올랐어요~」"
  # 直前に「トレーニング」をした
  - if: (t[1] = era.get('cflag:20:育成用变量')?.action === d.eh.train) && (t[0] = false), t[1]
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아, 레벨 올랐다─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하아, 훈련도 게임처럼 금방 올랐으면 좋겠는데……」"
  - if: t[0]
    lines:
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「게임은 세이가 별로 잘 못하거든요. 그러니까─」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이기면 상으로 하루 종일 자도 되는 거죠~」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「하지만 지면 세이는 엄청 우울해질 텐데……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「아마 하루 종일 낚시하면서 이 슬픔을 달래야 할 거예요.」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「책략가라면 큰 판을 읽어야죠! 받아라!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흐흐흥~ 트레이너 쌤, 완전히 세이의 함정에 빠지셨네요~」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「식은 죽 먹기네요~ 트레이너 쌤, 이 정도예요? 허접~ 허접~」"
      - random: true
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「세이한테 장기로 도전하시겠어요?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「흐흐흥~ 트레이너 쌤! 오늘 보여 드릴게요!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「어쩌다 모략의 별이라는 이름이 붙었는지!」"

s_a_tree_hollow:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 다음 레이스 뒤에는 세이랑 스페 중 누가 여기 와서 소리칠 것 같아요? 세이는 안 올 거지만요~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으엑…… 안이 어둡고 좁네요. 잠잘 곳은 못 되겠어……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「심연을 들여다볼 때, 심연도 우리를 들여다본다……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이렇게 말하니까 책략가 같지 않나요? 냐하하~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「매일 누군가 여기 와서 푸념하죠…… 나무 구멍도 고생이네요……」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저번엔 고양이가 한 마리 튀어나와서 깜짝 놀랐어요.」"

s_a_dating:
  - if: era.get('love:20') < 50
    lines:
      - "%YOU%와(과) 세이운 스카이는 학원을 걷고 있다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(보지 마, 보지 마……)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(자연스럽게…… 더 자연스럽게……)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(좀 떨어지는 게 좋을까…… 아니, 아니, 피하면 오히려 이상하잖아……)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(으으~ 떨려…… 그냥 나란히 걷고 있을 뿐인데……)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(아아…… 내 심장 소리가 들려……)"
  - if: era.get('love:20') >= 50 && era.get('love:20') < 90
    lines:
      - "%YOU%와(과) 세이운 스카이는 학원을 걷고 있다."
      - "%SEX%는 살며시 %YOU%의 손을 잡았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(손 잡았다! 잡았어! 세이가 먼저! 우와…… 트레이너 쌤도 잡아 주셨어……)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(아까 쌤 볼에 입맞춤했을 때…… 굳어 버린 표정, 재밌었는데…… 헤헤~)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(근데 너무 빨리 도망쳐서 잘 못 봤어…… 아아아…… 다음엔 천천히……)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(더 걷고 싶어…… 기숙사 문이 닫힐 때까지라도……)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(내일도 이랬으면…… 모레도 이랬으면…… 매일 이랬으면……)"
  - if: era.get('love:20') >= 90
    lines:
      - "%YOU%와(과) 세이운 스카이는 학원을 걷고 있다."
      - "%SEX%는 %YOU%의 손을 꼭 잡고 있다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(트레이너 쌤은 평생 유일하게 게으름 피우고 싶지 않은 일이야……)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(쌤을 볼 때마다…… 가슴이 꽉 조여서 아파…… 너무 좋아…… 아플 만큼 좋아……)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(떨어질 수 없는 게 아니라…… 떨어지고 싶지 않아…… 아마…… 떨어질 수 없겠지……)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(세이의 트레이너 쌤…… 연인…… 세이만의…… 누구한테도 안 뺏겨……)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(손을 잡는 것만으론 부족해…… 안는 것만으론 부족해…… 입맞춤만으론 부족해…… 전부 부족해…… 쌤을 뼛속까지 새겨 넣고 싶어…… 그러면 영원히 세이 거니까……)"

school_rooftop:
  - random: true
    lines:
      - "세이운 스카이는 %YOU%의 손을 잡고 옥상에 올라가 익숙한 걸음으로 물탱크 그늘을 향했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「보세요, 세이의 특등석이에요!」"
      - "%SEX%는 낡은 방석이 깔린 구석을 가리켰다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「지난주에 찾았어요. 오후엔 햇빛이 딱 물탱크에 가려지거든요. 게다가─」"
      - "%SEX%는 손가락을 세워 쉿 하는 시늉을 했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「옆 정원 분수 소리 들리죠? 이 백색소음이 잠을 부른다니까요.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤도 여기 바람 쐬러 오시는군요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「맞혀 볼게요…… 하늘이랑 가장 가까워서요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아니면 여기서 아래에 있는 %UMA%의 실력을 보고 대책을 세우시려고요?」"
  - random: true
    lines:
      - "%YOU%와(과) 세이운 스카이는 옥상에서 점심을 먹었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤 도시락…… 달걀말이가 세이 것보다 두껍네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「교환─」"
      - "세이운 스카이는 재빨리 %YOU%의 도시락에서 한 조각을 집어 「앙」 하고 먹었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음~ 역시 쌤 게 더 맛있어요.」"
      - "자신의 달걀말이를 그쪽으로 밀어 놓았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「답례예요. 남기기 금지.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(……어차피 다 못 먹으니까.)"


# TODO
o_r_fishing:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤~ 오늘 세이 훈련 열심히 했죠~」"
      - "「응, 응…… 확실히 오늘은 효율이 좋았어. 말해 봐, 어디 놀러 가고 싶어?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그야 당연히─ 낚시죠!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그리고 놀러 간다니요! 물속에서 고생하는 생물들을 구하러 가는 거라고요~ 벌로 오늘은 같이 가 주세요!」"
      - "「그래, 그래~ 그럼 오늘은 어디로 구하러 갈까? 위대하신 스카이 성녀님……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음…… 어디 보자.」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤~~ 세이 보고 싶으셨어요~~」"
      - "「응? 오늘 쉬는 날 아니야? 밖에 나가서 좀 쉬지 않고?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「에이, 쌤이 너무 고생하시니까 특별히 같이 있어 드리러 왔죠~」"
      - "「잘됐다. 그럼 같이 데이터 정리하자.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어요! 트레이너 쌤도 주말까지 무리하지 마세요! 일할 땐 일하고 쉴 땐 쉬어야죠─」"
      - "「그것도 그렇네…… 그럼 둘이 낚시나 잠깐 할까?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「응? 좋은 생각이에요! 가요, 어디서 낚을까요?」"
  - random: true
    lines:
      - "「스카이! 가자! 출발이야!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「우와! 트레이너 쌤, 그 차림은 뭐예요? 오늘 뭐에 씌셨어요?」"
      - "「무슨 소리야. 지난번에 말했잖아. 레이스에서 이기면 낚시 데려가겠다고.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어…… 그래도 그렇게 들뜨실 것까지는 없잖아요. 이런 트레이너 쌤은…… 좀 낯선데……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그래도 쌤이 이렇게 열성적이시니 출발해요!」"
      - "「좋아! 오늘 교통비는 내가 낼게. 가고 싶은 곳 어디든 가도 돼.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「헤헤~ 오늘 쌤이 이렇게 후하시니 잘 생각해 봐야겠네요……」"


orf_loc:
  - acc: 1
    content: "개울(체력, 기력, 의욕, 스킬 포인트에 영향)"
  - if: era.get('cflag:20:育成回合计时') < 3 * 48
    acc: 2
    content: "하구(기초 능력치에 영향)"
  - acc: 3
    content: "호수(마폐에 영향)"
  - acc: 4
    content: "근해(명성에 영향)"


orf_creek:
  - "%YOU%와(과) 세이운 스카이는 근처 개울에 왔다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「여기로 정했어요! 트레이너 쌤, 힘내세요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「오늘 저녁은 우리 둘 실력에 달렸어요!」"
  - "%YOU%와(과) 세이운 스카이는 느긋하게 낚시를 시작했다."
  - ………
  - ……
  - …
  - "얼마 후"
  -
  - if: d.fish === 1
    lines: # 空军 20% 干劲-1
      - "스카이는 텅 빈 양동이를 바라보았다."
      - "「……아무래도 오늘은 방생하기 좋은 날이네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가요! 마트에서 한 마리 사 오게!」"
      - "세이운 스카이는 양동이를 들고 돌아갔다. 단호하고 거침없는 발걸음이었다."
      - "─ 베테랑 낚시꾼은 절대 빈손으로 돌아가지 않는다!"
  - if: d.fish === 2
    lines: # 小杂鱼 8% 体力精力恢复5% 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(양동이 속 오 센티미터도 안 되는 작은 물고기들을 보며 생각에 잠긴다.)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……튀김옷 입혀서 튀기죠.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「김가루 뿌리면 꽤 고소할 거예요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아니면 생선국을 끓이든가, 정 안 되면 고양이 밥으로……」"
      - "「어…… 그냥 놓아주는 게 어떨까……」"
  - if: d.fish === 3
    lines: # 雅罗鱼 8% 体力精力恢复10% 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘은 황어네요. 트레이너 쌤, 구이 드시고 싶지 않아요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「세이가 이런 생선 굽는 건 한 솜씨 하거든요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「먼저 소금으로 문질러 씻어서 흙내를 빼고, 꼬치에 꿰어 소금을 뿌린 뒤 숯불에 구우면 겉은 바삭하고 속은 부드럽죠─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음~~ 생각만 해도 군침이 도네. 정했어요, 소금구이!」"
  - if: d.fish === 4
    lines: # 白条鱼 8% 体力精力恢复15% 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「전부 작은 살치네요. 이번엔 간단하게 만들죠.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「손질한 다음 밑간해서 비린내를 잡고, 밀가루를 묻혀 튀기면 돼요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 오늘은 요리 맡길게요─」"
  - if: d.fish === 5
    lines: # 马口鱼 8% 干劲+1 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「풍년이다! 전부 끄리예요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 녀석들은 먹이에 엄청 달려들거든요. 스푼 루어를 던지면 바로 물고, 수도 많죠.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이렇게 많으면 한 번에 못 먹겠어요. 가져가서 다들 나눠 주고, 남은 건 달콤하게 조려야겠어요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「끄리는 살이 탄탄해서 달콤하게 조리면 밥반찬으로 딱이에요!」"
  - if: d.fish === 6
    lines: # 虾虎鱼 8% 干劲+1 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「우와! 왜 전부 작은 망둑어야! 오늘 빈 바늘만 그렇게 올라오더라니!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 조그만 녀석들이 미끼는 다 훔쳐 먹었네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이대로 봐줄 순 없죠. 트레이너 쌤! 오늘은 생선튀김 먹을래요!」"
  - if: d.fish === 7
    lines: # 宽鳍鱲 8% 减少一层疲劳 技能点数+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘은 전부 피라미네요. 꽤 많이 잡혔어요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 아세요? 저희 고향에선 피라미를 '시거'라고 부르는데, 번식기에는 색이 참 예뻐요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「식감이 끄리랑 비슷하니까 이것도 달콤하게 조릴까요?」"
  - if: d.fish === 8
    lines: # 石斑鱼（溪流种） 8% 减少一层疲劳 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「흐흥~ 어때요, 세이 대단하죠? 이런 개울의 민물 석반어는 바위틈에 숨길 좋아해서 원래 낚기 어렵거든요.」"
      - "「바다에 사는 바리류는 꽤 크던데.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음…… 그렇죠. 민물에 사는 건 아주 작아서 바다 녀석들이랑은 비교도 안 돼요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「살이 탄탄하고 은은하게 단맛이 나지만 가시가 많아서 회로 먹기는 번거롭죠.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그냥 짭짤하게 조려서 두고두고 먹어요.」"
  - if: d.fish === 9
    lines: # 香鱼 7% 感到神清气爽（清除药物残留） 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 보세요! 민물고기의 왕─ 은어예요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「역시 오늘 이쪽 물이 좋네요. 은어는 물이 아주 깨끗해야 살거든요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「무조건 소금구이예요! 이건 양보 못 해요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「내장도 빼지 않고 통째로 꼬치에 꿰어서, 소금만 뿌려 숯불에 굽는 거예요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「껍질은 고소하고 바삭하고, 살은 부드럽고 촉촉하죠. 내장의 은은한 쓴맛 뒤에 오는 단맛과 생선살의 담백한 단맛이 절묘하게 어우러져요. 이게 은어 요리의 최고 경지예요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「살짝 알려 드리자면, 세이는 은어의 열렬한 팬이랍니다~」"
  - if: d.fish === 10
    lines: # 虹鳟 7% 干劲恢复到最佳 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「무지개송어! 자연산 무지개송어예요! 트레이너 쌤, 보세요! 이렇게 크다니! 오늘 저녁은 푸짐하겠어요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「소금구이! 아니─ 팬에 굽자! 안 돼─ 회! 잠깐─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으아~ 뭘 골라야 할지 모르겠어요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아니! 하나만 고르는 건 어린애나 하는 거죠. 전부 먹을래요!」"
  - if: d.fish === 11
    lines: # 花羔红点鲑 7% 体力精力恢复20% 技能点数+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「설마! 설마! 전설의 냉수어 왕─ 곤들매기인가요!」"
      - "「그렇게 대단해? 어디 보자.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어어어! 잠깐만요! 아주 귀한 물고기예요! 살살 잡으세요.」"
      - "「너무하네……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「당연하죠! 계류 낚시의 최종 목표 중 하나라고요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「최고급 식재료이기도 하고요.」"
      - "「이건 어떻게 먹어?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「당연히 최고급 방식으로 즐겨야죠─ 초밥이요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 진수성찬은 다들 맛보게 해 줘야겠어요.」"
  - if: d.fish === 12
    lines: # 山女鱼 3% 感到精神焕发（消除偏头疼以及药物残留） 干劲恢复到最佳 技能点数+20
      - "세이운 스카이의 찌가 살짝 한 번, 또 한 번 까딱이더니 갑자기 물속으로 가라앉았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「응?! 물었다!」"
      - "세이운 스카이는 손목을 튕겨 물속 생물과 힘겨루기를 시작했다."
      - "낚싯줄이 조금씩 풀려 나갔다. 녀석은 서두르지도 않은 채 묵묵히 물밑으로 파고들었다."
      - "한동안 실랑이한 끝에 물고기를 천천히 상류 쪽으로 끌어올렸다."
      - "그때 수면에 작은 물보라가 일며 황갈색 그림자가 물속에서 스쳐 지나갔다─"
      - "유려하고 우아한 몸에는 무늬가 가지런히 나 있었고, 옆줄에는 아주 옅은 연지를 바른 듯 연분홍빛이 감돌았다. 차분한 황갈색 등과 새하얀 배가 그 정체를 알려 주었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「산천어……」"
      - "세이운 스카이는 멍하니 굳었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「산천어! 산천어예요! 트레이너 쌤! 산천어라고요!」"
      - "%SEX%가 갑자기 비명을 질렀다. 목소리가 갈라지고 꼬리는 뒤에서 정신없이 흔들리다가 옆의 물통까지 엎어 버렸다. %YOU%의 온몸에 물이 튀었다."
      - "「살살, 살살! 낚싯대 부러뜨리지 마!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「알아요, 알아, 안다고요─」"
      - "%SEX%는 크게 숨을 들이쉬고 필사적으로 진정하려 했지만, 낚싯대를 쥔 손도 입술도 떨리고 있었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「산천어예요, 트레이너 쌤…… 산천어가 얼마나 대단한 건지 아세요……」"
      - "세이운 스카이는 물고기의 움직임에 맞춰 줄을 조금 풀었다 감았다 하며 개울가를 십여 걸음 오갔다. 신발은 물로 가득하고 바지는 허벅지 위까지 젖었지만 %SEX%는 전혀 몰랐다."
      - "마침내 물고기의 힘이 빠지기 시작했다. 개울의 귀족이 천천히 물가로 끌려왔다. 세이운 스카이는 쪼그려 앉아 뜰채로 살며시 떠올렸다."
      - "나무 사이로 새어 든 노을빛이 산천어 위로 내려앉았다."
      - "길이는 삼십 센티미터를 조금 넘었고, 몸매는 길고 매끈했다. 짙은 청색 얼룩들이 은은한 훈장처럼 줄지어 있었으며, 옆구리의 연분홍 띠는 빛 아래 아른거렸다."
      - "작고 촘촘한 비늘은 반듯하게 늘어서서, 하나하나 노을빛을 부드럽게 반사했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이게 바로 계류의 여왕……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「정말 예쁘다……」"
      - "저도 모르게 눈물이 양 볼을 타고 흘렀다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤…… 숨도 못 쉬겠어요……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……이대로 평생 보고 싶어.」"
      - "%YOU%은(는) 휴대전화로 기념사진을 찍고 물었다."
      - "「그래서……」"
      - "「이건 어떻게 먹을 생각이야?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「먹기는 뭘 먹어요!」"
      - "세이운 스카이는 눈을 흘겼다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「세이보다도 귀한 물고기라고요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「당연히 놓아줘야죠.」"
      - "%YOU%에게 한소리 한 뒤, 세이운 스카이는 다시 홀린 듯 양동이 속 산천어를 바라보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「조금만 더 보자. 조금만 더 보고 놓아주자……」"


orf_river:
  - "%YOU%와(과) 세이운 스카이는 바다와 가까운 하구에 왔다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「트레이너 쌤, 서둘러요! 늦으면 좋은 자리가 없어요!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하구 낚시는 실력이 꽤 중요하거든요!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그러니까 세이가 평소 낚시하러 오는 것도 게으름 피우는 게 아니라 훈련이에요. 냐하하~」"
  - "%YOU%와(과) 세이운 스카이는 느긋하게 낚시를 시작했다."
  - ………
  - ……
  - …
  - "얼마 후"
  -
  - if: d.fish === 1
    lines: # 空军 20% 全属性-1
      - "스카이는 텅 빈 양동이를 바라보았다."
      - "「……아무래도 오늘은 방생하기 좋은 날이네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가요! 마트에서 한 마리 사 오게!」"
      - "세이운 스카이는 양동이를 들고 돌아갔다. 단호하고 거침없는 발걸음이었다."
      - "─ 베테랑 낚시꾼은 절대 빈손으로 돌아가지 않는다!"
  - if: d.fish === 2
    lines: # 小杂鱼 7% 全属性+1
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(양동이 속 오 센티미터도 안 되는 작은 물고기들을 보며 생각에 잠긴다.)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘 꽤 잡히긴 했는데, 큰 녀석이 없네요……」"
      - "「그래도 오늘 즐겁게 낚시했잖아……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 의외로 마음이 넓으시네요~」"
  - if: d.fish === 3
    lines: # 梭子魚 7% 全属性+1~2
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아침엔 가숭어가 많네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 녀석을 낚는 데는 세이만의 비법이 있거든요……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「보세요! 또 왔다! 자, 챈다!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「짜잔! 대단하죠~ 트레이너 쌤도 아직 배우실 게 많네요~」"
  - if: d.fish === 4
    lines: # 鲈鱼 7% 全属性+2
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「농어가 엄청 커요. 기숙사 아래 치즈 고양이보다 더 뚱뚱하네!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이건 어떻게 처리할지 생각 좀 해 봐야겠어요……」"
      - "「조림으로 해서 사람들을 더 불러 같이 먹으면 되겠네.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「좋은 생각이에요! 플라워를 불러요. %SEX%는 요리를 잘하거든요!」"
  - if: d.fish === 5
    lines: # 鲭鱼 6% 速度+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「와, 오늘 고등어가 많이 잡히네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 작아 보여도 살이 아주 탄탄해요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이런 생선은 가장 싱싱할 때 가장 신선한 방식으로 먹어야죠─ 회로요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「보통 가게에서 먹으면 비싼 고급 요리예요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하지만 오늘 세이네는 대박 할인 중! 마음껏 드세요!」"
  - if: d.fish === 6
    lines: # 竹荚鱼 6% 耐力+5
      - "낚시를 시작한 지 얼마 지나지 않아 %YOU%의 찌에 반응이 왔다."
      - "「이거 전갱이 아니야? 마트에서 사 본 적 있어.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 꽤 잘하시네요. 벌써 입질이 오다니.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘 운이 좋은가 봐요. 몇 마리 더 낚아서 저녁에 초밥 해 드릴게요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「살이 탄탄하고 맛이 깔끔해서 초밥으로 만들면 일품이죠!」"
  - if: d.fish === 7
    lines: # 河豚 6% 力量+5
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「우와! 복어예요. 이건 조심해야 해요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 잔뜩 부푼 모습이 스페 같지 않아요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하지만 이건 우리가 요리할 수 없어요. 자연산은 아무도 장담 못 하니까 그냥 놓아주죠.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「먹고 싶으면 이따 전문 식당에 가요.」"
  - if: d.fish === 8
    lines: # 多春鱼 6% 根性+5
      - "%YOU%은(는) 은빛 작은 물고기를 낚았다."
      - "「이건─ 알배기 생선인가?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「열빙어예요. 평소 보는 그 알배기 생선이 맞는데, 수입종이죠.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「조금 더 드문 시샤모라는 것도 있는데, 그게 진짜 이쪽 토종이에요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이런 작은 녀석은 낚는 족족 올라오죠.」"
  - if: d.fish === 9
    lines: # 鲻鱼 6% 智力+5
      - "%YOU%은(는) 온 힘을 다해 길이 일 미터 이십 센티미터짜리 숭어를 낚아 올렸다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이렇게 크다니……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으…… 분해…… 왜 제가 낚은 게 아닌 거죠……」"
      - "「스카이, 이렇게 큰 생선은 어떻게 먹어야 할까~」"
      - "세이운 스카이가 당신을 흘겨보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「흥, 알아서 하세요! 두고 봐요. 세이는 더 큰 걸 낚을 테니까!」"
  - if: d.fish === 10
    lines: # 黑鲷 5% 速度+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「감성돔이 엄청 크네요. 우리 둘 다 복이 많나 봐요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 물고기는 워낙 영리해서 『물속의 여우』라고도 불려요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「섬세한 채비에 정확한 물때 판단, 꾸준한 밑밥 운용이 필요하죠.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「쌤도 한 마리 낚으시면 그땐 하산하셔도 돼요~」"
  - if: d.fish === 11
    lines: # 香鱼 5% 耐力+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 은어 잡았어요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하구에 나타났다는 건 산란기가 됐다는 뜻이에요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어미는 죽고 치어는 바다로 가죠. 알을 낳은 뒤 어미 대부분은 힘이 다해 죽어요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그래서 은어는 민물의 여왕 말고도 『한 해를 사는 물고기』라고 불려요.」"
      - "「슬픈 이야기네……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그래도 그게 새로운 삶의 시작이기도 하잖아요.」"
  - if: d.fish === 12
    lines: # 河鳗 5% 力量+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「민물장어예요! 트레이너 쌤! 민물장어라고요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 녀석은 진흙이나 모래 바닥에 물살이 느린 곳, 바위틈이나 굴을 특히 좋아하죠.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「게다가 자연산 민물장어는 이제 많이 줄었어요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘 한 마리 낚았으니 더 바랄 게 없네요~」"
  - if: d.fish === 13
    lines: # 柳叶鱼 5% 根性+10
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이건─ 시샤모! 정말 오랜만이네.」"
      - "「열빙어랑 닮았네.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그렇죠. 하지만 이건 멸종위기종이고, 열빙어는 수입되는 흔한 생선이에요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「한 마리로는 둘이 나눠 먹기도 부족하니 그냥 놓아주죠.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「먹고 싶으면 나중에 열빙어 몇 마리 사면 돼요. 맛도 비슷해요~」"
  - if: d.fish === 14
    lines: # 石狗公 5% 智力+10
      - "%YOU%은(는) 적갈색 몸에 머리가 크고 가시투성이인 물고기를 낚아 바늘을 빼려 했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 뺄 때 조심해요. 쏨뱅이는 가시에 독샘이 있어요!」"
      - "세이운 스카이는 가방에서 장갑과 가위를 꺼냈다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「휴~ 이럴 땐 역시 세이가 있어야 한다니까~ 잘못 찔리면 손이 퉁퉁 부어요……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그런데 하구에 쏨뱅이가 있네? 우연히 들어왔나 봐요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「감히 트레이너 쌤을 찌를 뻔하다니, 소금구이 형에 처한다! 세이가 직접 집행하겠어요!」"
  - if: d.fish === 15
    lines: # 天竺鲷 4% 全属性+10
      - "하루 종일 낚시했지만 찌는 꼼짝도 하지 않았다."
      - "새벽부터 해 질 무렵까지 %YOU%와(과) 세이운 스카이는 하구 둑에 앉아 있었다. 포인트를 세 번, 미끼를 네 종류나 바꿨지만 양동이에는 끝내 물고기가 없었다."
      - "세이운 스카이는 처음의 들뜬 모습에서 점심 무렵엔 꾸벅꾸벅 졸더니, 오후에는 말이 없어졌다─"
      - "꼿꼿하던 %SEX%의 귀는 축 처졌고, 한가로이 흔들리던 꼬리도 땅바닥에 끌렸다."
      - "하늘이 조금씩 어두워졌다. 잿빛 푸르름이 강물의 금빛을 삼키고 멀리 가로등이 하나둘 켜졌다."
      - "%YOU%은(는) 휴대전화를 보고, 다시 수면을 뚫어지게 바라보는 세이운 스카이를 보았다."
      - "「스카이, 오늘은 이쯤 할까?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어요!」"
      - "「내일 훈련도 있고, 밤에는 잘 보이지도 않잖아.」"
      - "세이운 스카이는 몸을 돌려 가방에서 야간 낚시등 두 개를 꺼냈다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 밤낚시 조금만 더 하면 안 돼요……」"
      - "%YOU%은(는) 하루 종일 애썼지만 아무것도 낚지 못한 세이운 스카이를 바라보았다. %SEX%의 눈에는 애처로운 간청이 가득했다."
      - "「휴, 알았어. 오늘만이야~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「헤헤, 트레이너 쌤이 제일 좋아요~」"
      -
      - "밤낚시하는 강가는 고요했다."
      - "낚시등 불빛이 세이운 스카이의 옆얼굴을 따뜻한 주황빛으로 물들였다. 쥐구멍을 노리는 고양이처럼 초록빛을 뚫어지게 바라보고 있었다."
      - "%YOU%이(가) 막 졸기 시작하려던 순간, 세이운 스카이가 움직였다."
      - "「왔다!」"
      - "줄은 별다른 힘을 들이지 않아도 쉽게 감겼다. 큰 물고기는 아닌 듯했다."
      - "세이운 스카이는 살짝 미간을 찌푸렸다. %SEX%가 줄을 감는 속도를 높이자 수면에 가느다란 물결이 그어졌다."
      - "야광 찌는 이미 꽤 깊이 잠겨, 어둠 속에서 희미한 초록빛만 어렴풋이 흔들렸다."
      - "몇 초 뒤, 은빛이 물을 가르며 튀어나왔다."
      - "세이운 스카이는 둑 위에 떨어진 물고기를 받아 손바닥에 올렸다."
      - "「작은 물고기네. 그래도 오늘은 빈손이 아니어서 다행이야.」"
      - "세이운 스카이는 대답하지 않았다."
      - "「스카이?」"
      - "%YOU%이(가) 다시 불렀지만 세이운 스카이는 여전히 대답하지 않았다."
      - "%YOU%이(가) %SEX%의 곁으로 다가가자, %SEX%는 혼잣말을 중얼거리고 있었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……동갈돔.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「동갈돔을 잡았어……」"
      - "%YOU%은(는) 호기심에 세이운 스카이 손에 놓인 작은 물고기를 들여다보았다."
      - "물고기는 %SEX%의 손바닥 너비보다도 작았다. 반투명한 회백색 몸에는 눈에서 몸통까지 검은 줄이 나 있었다. 주둥이부터 꼬리까지 붓으로 단숨에 그은 듯한 매끈한 먹선과 꼬리자루의 검은 점이 단정하고 섬세했다."
      - "「이건……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「동갈돔을 낚았어요. 암보이나 동갈돔이에요!!!」"
      - "세이운 스카이가 갑자기 소리쳐 %YOU%은(는) 깜짝 놀랐다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 아세요? 암보이나 동갈돔이에요! 엄청 희귀하다고요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「실력도 운도 있어야 하는데! 제가 잡았어요!」"
      - "잠시 흥분을 터뜨린 뒤 세이운 스카이는 서서히 진정했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 보세요. 정말 예뻐요……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「지금…… 너무 행복해요……」"
      - "세이운 스카이는 그 귀한 암보이나 동갈돔을 조심스레 양동이에 넣고, 돌아서서 %YOU%을(를) 안았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 고마워요…… 같이 밤낚시해 주셔서……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘…… 정말…… 너무 행복해요!」"


orf_lake:
  - "%YOU%와(과) 세이운 스카이는 자연 호수에 왔다."
  - "「와, 호수 정말 예쁘다.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그러게요. 저희 고향 뒷산 호수 같아요. 큰 물고기가 분명 많을 거예요!」"
  - "「많이 잡히면 작은 좌판 펴고 팔아도 되겠네~」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그럼 둘 다 힘내요! 다음 간식값을 벌어 보자고요!」"
  - "%YOU%와(과) 세이운 스카이는 느긋하게 낚시를 시작했다."
  - ………
  - ……
  - …
  - "얼마 후"
  -
  - if: d.fish === 1
    lines: # 空军 20% 马币-5
      - "스카이는 텅 빈 양동이를 바라보았다."
      - "「……아무래도 오늘은 방생하기 좋은 날이네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가요! 마트에서 한 마리 사 오게!」"
      - "세이운 스카이는 양동이를 들고 돌아갔다. 단호하고 거침없는 발걸음이었다."
      - "─ 베테랑 낚시꾼은 절대 빈손으로 돌아가지 않는다!"
  - if: d.fish === 2
    lines: # 小杂鱼 7% +1马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(양동이 속 오 센티미터도 안 되는 작은 물고기들을 보며 생각에 잠긴다.)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어…… 이것들은 못 팔겠죠……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「휴…… 어쩔 수 없네. 작은 물고기들아, 오늘은 운 좋은 줄 알아.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가렴…… 크면 돌아와서 은혜 갚는 거 잊지 말고─」"
      - "돌아가는 길에 바람이 불더니, 마폐 한 장이 기적처럼 바람에 실려 당신들 손으로 날아왔다."
  - if: d.fish === 3
    lines: # 鲫鱼 7% +2马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「우와! 이 붕어 엄청 통통해요! 적어도 1근은 되겠는데!」"
      - "「나도 큰 녀석 잡았어!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘 입질이 좋네요! 얼른 계속해요!」"
  - if: d.fish === 4
    lines: # 鲤鱼 7% +3马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어, 잉어네……」"
      - "「왜, 너무 흔해?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그럴 리가요. 무슨 물고기든 잡으면 기쁘죠……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「잘 안 팔릴 것 같아서요. 이쪽에선 별로 안 먹으니까……」"
  - if: d.fish === 5
    lines: # 鲶鱼 7% +4马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……미끈미끈해서 잡을 수가 없네.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「헤헤~ 메기는 볼 때마다 웃기게 생겼다니까요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 두툼한 입술에 수염, 멍한 눈빛까지 보세요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이렇게 살찐 걸 보니 엄청 먹보인가 봐요.」"
      - "「들으면 상처받겠다……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「따뜻한 눈물은 차가운 마폐가 될 거예요~」"
  - if: d.fish === 6
    lines: # 黄颡鱼 7% +5马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후아! 대풍년이네! 동자개가 한 양동이 가득!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가요! 사 줄 임자를 찾으러.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「번 돈으로 오늘 저녁에 맛있는 걸 더 먹어요!」"
  - if: d.fish === 7
    lines: # 乌鳢 7% +6马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가물치가 엄청 커요! 적어도 두 근은 나가겠는데!」"
      - "「엄청 사납네. 끌어올릴 때 꼬리로 한 대 맞았어……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「괜찮아요? 안 아파요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가물치는 원래 공격성이 강해요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 오늘 고생하셨어요. 나중에 아이스크림 사 드릴게요~」"
  - if: d.fish === 8
    lines: # 公鱼 7% +7马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「열빙어가 엄청 많아요! 계속 올라오네!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘 우리 운이 좋은가 봐요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤도 힘내서 많이 낚으세요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「지난번에 사 가신 아저씨가 이걸 좋아하신댔거든요~」"
  - if: d.fish === 9
    lines: # 雅罗鱼 7% +8马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「황어네요. 요즘 꽤 자주 보이네요.」"
      - "「며칠 전에도 튀김집에서 먹었잖아.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「응? 그 말 들으니까 좋은 생각이 났어요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「몇 마리 더 낚아서 바로 가게로 가요. 요리해 달라고 하죠~」"
  - if: d.fish === 10
    lines: # 香鱼 6% +15马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤! 뭘 잡았는지 보세요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「계류의 왕─ 은어예요!」"
      - "「상태가 참 좋네. 이렇게 싱싱한 은어면 회로 먹을까?」"
      - "세이운 스카이는 냉큼 물고기를 거둬 양동이에 넣었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「싫어요! 학교 근처에 새로 생긴 고급 뷔페, 전부터 가고 싶었단 말이에요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 물고기가 제 뷔페 비용을 책임져야 해요! 쌤한테 안 줄 거예요~」"
  - if: d.fish === 11
    lines: # 青鱼 6% +16马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤! 살려 주세요! 빨리 도와주세요!!!」"
      - "「간다, 가! 버텨, 스카이!」"
      - "%YOU%와(과) 세이운 스카이는 한참 애쓴 끝에 10킬로그램짜리 거물을 끌어올렸다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아하~ 세상에, 무서워라. 이렇게 큰 민물고기라니, 딱 봐도 흑잉어네요……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 호수엔 빈둥대는 녀석이 없나 봐요……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 정도 무게면 시장 최저가로 팔아도 제법 벌겠어요~ 냐하하~」"
  - if: d.fish === 12
    lines: # 河鳗 6% +17马币
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「검은 민물장어 한 마리가 양동이 안에서 계속 몸부림쳤다.」"
      - "%YOU%와(과) 세이운 스카이는 양동이 옆에 쪼그려 앉아 그 모습을 바라보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 민물장어라니. 그것도 자연산이라 엄청 비싸요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「장어덮밥………………」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 이건 먹지 말고 돌아갈 때 시장에 가져가서 물어봐요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「장어덮밥………………」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「상태 좋은 자연산 민물장어는 한 마리에 만 엔 넘게 받을 수도 있어요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「장어덮밥………………」"
      - "「그럼…… 저녁에 내가 장어덮밥 사 줄까?」"
  - if: d.fish === 13
    lines: # 锦鲤 4% 马币获取+1%
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어! 비단잉어네요……」"
      - "「근처에 많이 놓아줘서 그런지 비단잉어가 꽤 많네.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그러게요. 그래도 다시 놓아주죠. 행운이 온다잖아요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「돌아가는 길에 복권 사서 대박 나면, 평생 편하게 먹고살 수 있을지도요. 냐하하~」"
  - if: d.fish === 14
    lines: # 远东哲罗鱼 2% 马币+30 马币获取+1%
      - "새벽부터 해 질 무렵까지 %YOU%와(과) 세이운 스카이는 호숫가에 꼬박 하루를 앉아 있었다."
      - "찌는 수면에 못 박힌 듯 꼼짝도 하지 않았다. 옆 양동이도 텅 비어, 작은 잡어 한 마리조차 없었다."
      - "세이운 스카이는 하품을 하고 낚싯대를 내려놓더니, 느릿느릿 %YOU% 곁으로 와 쪼그려 앉았다."
      - "%SEX%는 고개를 내밀어 %YOU%의 양동이를 들여다보았다. %SEX%의 것처럼 바닥까지 훤히 보였다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아무래도 오늘도 둘 다 마트에서 생선 사야겠네요. 냐하하~」"
      - "%SEX%는 자조적으로 웃으며 무릎에 턱을 괴고 양동이의 잔잔한 수면을 멍하니 바라보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 오늘 우리 둘이 상극인 걸까요? 같이 앉아 있으니까 하루 종일 입질도 없네요.」"
      - "「날씨 때문 아닐까?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그만 좀 해요. 아침엔 기압이 낮다, 점심엔 수온이 높다, 오후엔 햇볕이 세다더니─」"
      - "%SEX%는 손가락을 하나씩 접으며, 뒤에서 꼬리를 느긋하게 흔들고는 두서없이 이야기를 시작했다."
      - "어제는 운 좋게 한정 푸딩을 샀다느니, 니시노 플라워가 요즘 새로운 품종의 꽃을 키운다느니, 엘 콘도르 파사가 얼마 전 추첨으로 오천 엔을 땄다느니……"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……그러니까요, 트레이너 쌤. 행운도 총량이 정해져 있는 것 같아요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「쌤이 게임에서 뽑기 할 때마다 천장까지 가는 건, 세이를 만나는 데 운을 다 쓰셨기 때문이죠~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그러니까……」"
      - "「잠깐.」"
      - "%YOU%은(는) 갑자기 %SEX%의 말을 끊고 저도 모르게 몸을 굳혔다. 손에 쥔 낚싯대에서 심상치 않은 진동이 느껴졌다."
      - "「뭔가…… 물었나 봐. 왔다!」"
      - "%YOU%이(가) 반사적으로 낚싯대를 들어 올리자 끝이 팽팽히 당긴 활처럼 휘었다."
      - "물밑에서 거센 힘이 전해져 곧장 아래로 잡아당겼다. 팽팽해진 낚싯줄에서 불안한 삐걱임이 났다."
      - "%YOU%은(는) 두 손으로 손잡이를 꽉 잡았지만 몸이 앞으로 반 걸음 끌려가며 휘청했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「잠깐, 잠깐, 잠깐─ 정말이에요?!」"
      - "세이운 스카이는 잠시 멍해졌다가 벌떡 일어나 재빨리 옆의 뜰채를 집었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 버텨요! 줄 끊어지지 않게!」"
      - "「알아!」"
      - "릴에서 줄이 풀려 나가는 날카로운 소리가 울렸다. %YOU%은(는) 팔이 떨리는 것을 느꼈다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「무슨 물고기야─ 힘이 너무 세잖아─」"
      - "세이운 스카이는 뜰채를 안고 %YOU% 곁에 섰다. 끊임없이 흔들리는 꼬리에 감추지 못한 흥분이 드러났다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 점심에 몰래 에너지바라도 드셨어요? 아직도 안 끌려 내려가시네─」"
      - "「그만 떠들고─ 도와줘─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「돕고 있잖아요! 뜰채도 준비됐다고요!」"
      - "줄 풀리는 소리가 차츰 잦아들었다. %YOU%은(는) 그 틈에 한 바퀴씩 릴을 감았다. 물밑의 녀석도 지쳤는지 몸부림이 조금 줄었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘 우리 둘 운이 이 큰 물고기한테 다 몰렸나 봐요─」"
      - "세이운 스카이는 신나게 중얼거리며 낚싯줄의 움직임을 따라 몸을 좌우로 흔들었다. 꼬리는 프로펠러처럼 돌아갔다."
      - "마침내 물고기가 얕은 곳으로 끌려왔다. 검은 그림자가 물속에서 천천히 떠오르며 점점 크고 선명해졌다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「온다, 온다, 온다─」"
      - "세이운 스카이는 뜰채를 물에 넣고 물밑의 그림자를 뚫어지게 바라보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「머리 보인다! 엄청 커─」"
      - "갑자기 %SEX%의 말이 끊겼다. 뜰채도 물속에서 꼼짝도 하지 않았다."
      - "%YOU%은(는) 여전히 흥분해서 「떠! 빨리 떠!」 하고 외쳤다."
      - "물고기는 뜰채 입구까지 끌려왔다가 꼬리를 쳐서 거의 빠져나갈 뻔했다."
      - "「세이운 스카이!」"
      - "%YOU%이(가) 크게 외쳤다."
      - "세이운 스카이는 퍼뜩 정신을 차리고 뜰채를 확 들어 올려 물고기를 통째로 담은 뒤 재빨리 끌어당겼다."
      - "물가에서 %SEX%는 두 손으로 뜰채 자루를 끌어안고 두어 걸음 비틀거리다 하마터면 주저앉을 뻔했다."
      - "물고기가 그물 안에서 거세게 몸부림쳐 두 사람은 흠뻑 젖었다."
      - "세이운 스카이는 뜰채를 잡고 안을 내려다보았다. 눈은 휘둥그레지고 입만 뻐끔거릴 뿐 소리가 나오지 않았다."
      - "그러더니 %SEX%가 갑자기 비명을 질렀다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아아아아아아─! 트레이너 쌤, 트레이너 쌤, 트레이너 쌤─!」"
      - "「진정해─ 그냥 큰 물고기잖아─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「진정 못 하겠어요!!!」"
      - "뜰채를 바닥에 내려놓고 쪼그려 앉아, 여전히 펄떡이는 물고기를 뚫어지게 바라보았다. 목소리까지 떨렸다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「미안해요, 미안─ 아까 넋이 나갔어요. 잘못 본 줄 알았거든요─」"
      - "%SEX%는 숨을 크게 들이쉬고 %YOU%을(를) 돌아보았다. 놀랍게도 눈가가 살짝 붉어져 있었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 이게 무슨 물고기인지 아세요……」"
      - "%YOU%은(는) 그물 속 거물을 자세히 살폈다."
      - "길이는 칠십 센티미터를 넘었고, 몸은 굵고 둥글었다. 은회색에 갈색이 섞인 등에는 주홍색 작은 반점들이 흩어져 있었다."
      - "주둥이는 둥툭하고 입은 컸다. 살짝 올라간 입꼬리 때문에 조금 거만한 표정처럼 보였다."
      - "「잘 모르겠는데. 힘은 정말 세더라……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「사할린타이멘이에요, 트레이너 쌤.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「지금 일본에 야생 개체가 거의 남지 않은 『위급』 단계 멸종위기종이에요!」"
      - "「그럼 이 물고기는……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「─비싸냐 마냐의 문제가 아니에요. 포획과 거래가 엄격히 금지된 물고기라고요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그래도 한 번 낚아 보다니, 평생 잊지 못할 행운이에요……」"
      - "세이운 스카이는 눈가의 눈물을 닦고 마음을 가라앉혔다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그런데 생각해 보니─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오늘 우리 운이 정말 이 한 마리한테 다 몰렸네요.」"
      - "%SEX%는 텅 빈 양동이를 내려다보고, 다시 그물 안에서 아직 숨을 몰아쉬는 커다란 녀석을 보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하루 종일 꽝인 대신 사할린타이멘 한 마리라…… 트레이너 쌤, 이 정도면 손해는 아닌데요?」"


orf_sea:
  - "세이운 스카이가 강력하게 원해서 당신들은 바닷가로 왔다. 오는 내내 스카이는 짜증 난 표정으로 휴대전화를 넘겨 보았다."
  - "「왜 그래? 오는 내내 잔뜩 찌푸리고 있네.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「트레이너 쌤! 이거 보세요!」"
  - "세이운 스카이가 %YOU% 앞으로 휴대전화를 내밀었다. 낚시 동호회 단체 대화방에서 낚시꾼들이 근해에서 잡은 큰 물고기를 자랑하고 있었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「으…… 분하죠! 그렇죠?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「오늘 우리도 큰 거 한 마리 낚아서 제대로 이름을 날려요!!!」"
  - "(이렇게 투지가 넘치는 스카이는 드문데……)"
  - "%YOU%와(과) 세이운 스카이는 느긋하게 낚시를 시작했다."
  - ………
  - ……
  - …
  - "얼마 후"
  -
  - if: d.fish === 1
    lines: # 空军 20% -3声望
      - "스카이는 텅 빈 양동이를 바라보았다."
      - "「……아무래도 오늘은 방생하기 좋은 날이네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「가요! 마트에서 한 마리 사 오게!」"
      - "세이운 스카이는 양동이를 들고 돌아갔다. 단호하고 거침없는 발걸음이었다."
      - "─ 베테랑 낚시꾼은 절대 빈손으로 돌아가지 않는다!"
  - if: d.fish === 2
    lines: # 小杂鱼 7% +2声望
      - "세이운 스카이는 못마땅한 얼굴로 양동이 속 온갖 작은 잡어들을 바라보았다."
      - "「사진 찍어서 자랑 안 해?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「안 해요! 이건 제 실력이 아니에요! 절대로!」"
      - "「그럼…… 놓아줄까?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「놓아준다고요? 흐흥~ 작은 물고기들아~ 각오해라!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「너희는 초대형 물고기를 낚을 미끼가 될 것이다! 영광스러운 진화에 동참해라! 너희 한 마리 한 마리의 공로가 기록될 테니!」"
      - 「…………」
  - if: d.fish === 3
    lines: # 沙丁鱼 7% +2声望
      - "「스카이! 정어리 엄청 잡았어!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「꽤 잘하시네요~ 트레이너 쌤.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하지만…… 사진 올리는 건 말죠.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아마 『그거 바닷가에서 뜰채 한 번 뜨면 잡히잖아』라고 할걸요~」"
      - "「너무 매정하네……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어쩔 수 없어요…… 낚시의 세계는…… 이렇게 냉혹하니까……」"
  - if: d.fish === 4
    lines: # 竹荚鱼 7% +2声望
      - "「스카이! 봐─ 전갱이야!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「와, 축하해요, 축하해요. 짝짝~」"
      - "「너무 성의 없는 거 아니야~ 훌쩍~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음…… 그럼 좀 더 열정적으로─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤! 축하해요! 낚시 실력이 어린애 수준에 도달했네요~」"
      - "「더 슬퍼졌어. 흑흑……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「농담이에요~ 냐하하~」"
  - if: d.fish === 5
    lines: # 鲭鱼 7% +2声望
      - "「스카이, 잘 잡혀?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그저 그래요.」"
      - "세이운 스카이는 무심한 말투로 대답하며 옆의 묵직한 양동이를 툭 찼다."
      - "「이야, 이게 그저 그렇다고? 고등어가 한 통 가득하잖아.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이렇게 쉬운 건 별거 아니죠~ 제 목표는 바닷속 거물이라고요!」"
  - if: d.fish === 6
    lines: # 白姑鱼 7% +2声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「몸은 희고 아가미는 검고, 딱 봐도 보구치네요.」"
      - "「꽤 예쁘네. 물속에 넣으면 잘 안 보이겠어.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「나쁘지 않네요. 이 기세로 계속해요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하지만 이 녀석은 자랑거리보단 먹거리로 더 관심받겠죠~」"
  - if: d.fish === 7
    lines: # 海鲈鱼 7% +2声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「점농어 힘이 꽤 세네요. 바늘에서 빠질 뻔했어!」"
      - "「이건 꽤 귀하지?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음…… 그럭저럭이요…… 기념사진이나 찍죠~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「자, 트레이너 쌤. 제가 들 테니까 찍어 주세요.」"
      - "낚시꾼의 평: 「대단한데, 바다 농어가 이렇게 크다니.」"
  - if: d.fish === 8
    lines: # 黑鲷 6% +4声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오! 감성돔이네! 어쩐지 낚기 어렵더라.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 이리 와요. 이 각도에서요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음…… 잘 찍었네요~ 제목은 '감성돔쯤이야, 간단히 성공~'으로 하죠.」"
      - "낚시꾼의 평: 「솜씨가 좋네.」"
  - if: d.fish === 9
    lines: # 隆头鱼 6% +4声望
      - "「스카이, 와 봐. 너 닮은 물고기를 잡았어.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저를요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「놀래기잖아요. 잠깐…… 어디가 닮았다는 거예요!!!」"
      - "「지난번 나무에서 자다가 뒤척여서 떨어졌잖아. 머리에 혹 났을 때랑 똑같아~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으…… 두고 봐요! 쏨뱅이 낚아서 쌤한테 거울 대신 보여 드릴 테니까!」"
      - "낚시꾼의 평: 「놀래기 예쁘다. 어디서 잡았어?」"
  - if: d.fish === 10
    lines: # 真鲷 6% +4声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「오! 큰 거다!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤! 보세요! 참돔이에요!」"
      - "「붉고 흰 게 참 예쁜 물고기네.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「참돔을 잡으니까 꼭 설날 같네요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이건 게시판에 꼭 자랑해야겠어요~」"
      - "낚시꾼의 평: 「그 행운 받아 간다!」"
  - if: d.fish === 11
    lines: # 海鳗 6% +4声望
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으아아!!! 트레이너 쌤! 빨리 뜰채요!!!」"
      - "「간다, 가! 갯장어가 너무 사납잖아.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후─ 정말 힘드네. 트레이너 쌤, 제때 와 주셨으니 이 갯장어는 쌤 드릴게요~」"
      - "「바늘 빼고 줘……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이제 쌤 거니까 쌤이 빼셔야죠……」"
      - "「아니, 아니, 이런 영광은 잡은 행운아한테 돌려야지~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하지만…… 하지만……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「세이는 물릴까 봐 무섭단 말이에요…… 세이는 트레이너 쌤을 정말 존경하는데~ 쌤은 이렇─게 대단하시니까 좀 도와……」"
      - "「불쌍한 척해도 안 통해~ 그냥 줄을 자르자……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「흥─ 쪼잔해─」"
      - "낚시꾼의 평: 「독하네. 이 녀석 바늘도 빼려고 하다니.」"
  - if: d.fish === 12
    lines: # 海鞘 6% +4声望
      - "「해초? 산호? 이건 뭐야? 버리자, 버려……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「응? 트레이너 쌤, 잠깐만요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「산호가 아니라 멍게예요! 이걸 어떻게 낚으셨어요!?」"
      - "「묵직하길래 힘껏 당겼더니 올라왔는데?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「말도 안 돼. 사진 찍어서 트위터에 올려야겠어요~」"
      - "낚시꾼의 평: 「못 믿겠는데……」"
  - if: d.fish === 13
    lines: # 龙虾 6% +1%声望获取率
      - "「바닷가재네. 그냥 바늘에 걸려 올라온 건가? 저리 가라~」"
      - "옆으로 던져진 바닷가재는 낯선 육지 환경에 어리둥절해하며 정처 없이 돌아다니기 시작했다."
      - "걷다 보니 푸른 무언가가 이리저리 흔들리고 있었다."
      - "새로운 것에 대한 호기심이었을까, 정체 모를 물체에 대한 두려움이었을까."
      - "본능이 말했다. 저 푸른 물체를 집어라!"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으아!!!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤!!! 꼬, 꼬리!!! 무, 물렸어요─!!!」"
      - "소리를 듣고 %YOU%이(가) 달려가니 세이운 스카이가 필사적으로 꼬리를 흔들고 있었다. 바닷가재는 그네처럼 앞뒤로 흔들릴 뿐 집게는 꼼짝도 하지 않았다."
      - "%YOU%은(는) 얼른 다가가 떼어 주었다."
      - "돌아가는 길……"
      - "「스카이~ 정말 잘못했어. 화 좀 풀어 줘~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「흥─」"
      - "세이운 스카이는 꼬리를 끌어안고 고개를 돌렸다."
      - "「돌아가면 바닷가재 회 사 줄게! 꼭 복수하자!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그 정도는 해 주셔야죠~」"
  - if: d.fish === 14
    lines: # 横带石鲷 2% +10声望 +1%声望获取率
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 오늘 느낌이 엄청 좋아요.」"
      - "「응? 무슨 느낌?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「레이스에서 우승할 때 같은 느낌이요. 정말 좋은 예감~」"
      - "%YOU%은(는) 웃으며 힘내라고 했다."
      - "그 뒤 4시간 동안 세이운 스카이를 보며 %YOU%은(는) %SEX%가 정말 앞일을 내다보는 건 아닌지 의심하기 시작했다."
      - "온갖 물고기가 쉴 새 없이 올라왔고, 어린 방어까지 한 마리 잡혔다."
      - "반면 %YOU%의 양동이는 계속 비어 있었다. 가끔 찌가 내려가도 올려 보면 외로운 바늘뿐, 미끼는 이미 사라진 뒤였다……"
      - "세이운 스카이는 한 마리 낚을 때마다 들어서 %YOU%에게 흔들어 보였다. 얼굴에는 「봐요, 봐요, 봐요」라고 쓰여 있었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤─ 그쪽은 좀 어때요─」"
      - "방파제 저편에서 날아오는 %SEX%의 목소리에는 의기양양함이 뚜렷했다."
      - "「……기다리는 중이야.」"
      - "%YOU%은(는) 담담하게 대답했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그럼 입질도 없다는 거네요?」"
      - "세이운 스카이는 다시 미끼를 달고 낚싯대를 던졌다. 눈을 가늘게 뜨고 뒤에서 꼬리로 한가롭게 원을 그렸다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤~ 정말 못 낚겠으면 몇 마리 나눠 드릴까요~ 냐하하~」"
      - "세이운 스카이가 %YOU%에게 의기양양하게 자랑하던 순간, %SEX%의 낚싯대 끝이 확 가라앉았다."
      - "난간에 걸쳐 둔 낚싯대 뒤쪽이 튀어 올라 거의 날아갈 뻔했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어─!」"
      - "세이운 스카이의 몸이 %SEX%의 생각보다 먼저 반응했다. %SEX%는 몸을 날려 두 손으로 손잡이를 꽉 잡았지만, 갑작스러운 힘에 앞으로 끌려가며 휘청했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤─! 살려 주세요!!」"
      - "세이운 스카이가 말을 마치기도 전에 %YOU%은(는) 낚싯대를 내던지고 달려왔다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「낚싯대 잡아! 일단 고정해!」"
      - "%YOU%은(는) %SEX% 옆에 쪼그려 앉아 한 손으로 낚싯대 뒤를 누르고 다른 손으로 중간을 받쳤다."
      - "두 사람의 힘을 합쳐 겨우 낚싯대를 붙들었지만, 끝은 여전히 활처럼 휜 채 수면 위에서 거세게 떨렸다."
      - "드랙이 날카로운 비명을 질렀고, 낚싯줄은 미친 듯이 풀려 나갔다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뭐야…… 대체 뭐야……」"
      - "세이운 스카이의 목소리에는 조금 당황한 기색도 있었지만, 그보다 흥분이 더 컸다."
      - "십여 초 동안 울리던 드랙 소리가 마침내 멎었다."
      - "세이운 스카이는 한 바퀴씩 줄을 감기 시작했다. 빠르지는 않았지만 안정적이었다."
      - "절반쯤 감았을 때 다시 힘이 폭발했다. 이번에는 옆으로 치고 나가며 낚싯줄이 수면에 긴 물보라를 그렸다."
      - "「방향 바꿔! 녀석을 따라가!」"
      - "세이운 스카이는 몸을 틀어 물고기가 달리는 반대쪽으로 낚싯대를 눌렀다. 몸도 함께 방파제 위를 몇 걸음 움직였다."
      - "낚싯줄의 방향이 바뀌었다. 물밑의 녀석도 억지로 방향을 틀었지만 여전히 필사적으로 아래를 파고들었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「암초에 걸린 거 아니에요?」"
      - "세이운 스카이의 목소리에 긴장이 묻어났다."
      - "「아니, 아직 움직여─ 줄 감아. 멈추지 마.」"
      - "%SEX%는 입술을 깨물고 계속 릴을 감았다. 한 바퀴 돌릴 때마다 큰 힘이 들었다. 팔 근육은 팽팽히 당겨지고 이마의 땀이 관자놀이를 타고 흘렀다."
      - "물고기는 천천히 얕은 곳으로 끌려왔다. 한 번 더 저항했지만 이미 힘이 다한 뒤였다. 옆으로 기울어진 채 방파제 가장자리까지 끌려오며 단단한 등지느러미 가시가 수면에 잔물결을 냈다."
      - "%YOU%은(는) 뜰채를 들어 물고기 머리 쪽을 겨눴다. 세이운 스카이가 물고기를 입구로 유도하자 손목을 돌려 통째로 담았다."
      - "땀 때문에 세이운 스카이의 시야가 흐렸다. %SEX%가 땀을 닦고 나서야 %SEX%는 물고기의 온모습을 볼 수 있었다."
      - "길이는 사십 센티미터 남짓했다. 두꺼운 철판처럼 몸이 옆으로 납작하고 등은 갈색을 띤 은회색, 배는 희었다."
      - "가장 눈에 띄는 것은 등에서 배까지 뻗은 십여 개의 짙은 띠였다. 줄무늬 외투를 입은 것 같았다."
      - "갑자기 %SEX%는 낚싯대를 놓고 시멘트 바닥에 털썩 주저앉았다."
      - "「반 미터도 안 되는데 힘이 왜 이렇게 세지.」"
      - "「응? 스카이? 왜 그래?」"
      - "뜰채 속 물고기는 여전히 필사적으로 그물을 두드리며 몸부림쳤다. %SEX%의 얼굴에 바닷물이 튀었다."
      - "하지만 %SEX%는 피하지 않고 무릎을 꿇은 채 기어가 눈을 동그랗게 떴다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「돌돔.」"
      - "세이운 스카이의 목소리는 아주 먼 곳에서 들려오는 듯 붕 떠 있었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이게…… 갯바위 낚시의 제왕……」"
      - "%SEX%는 조심스레 손을 뻗어 등지느러미를 건드렸다가 단단한 가시에 찔려 바로 거두었다……"
      - "「트레이너 쌤……」"
      - "세이운 스카이의 목소리에 억누르지 못한 떨림이 묻어났다."
      - "%SEX%는 그물 속에서 아직 숨을 몰아쉬는 물고기를 바라보며 이 초쯤 침묵하다가, 갑자기 비명을 질렀다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「잡았다────!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「돌돔! 돌돔! 돌돔을 잡았어, 아아아!」"
      - "세이운 스카이는 두 손을 머리 위로 들어 올리고 바다를 향해 미친 듯이 외쳤다."
      - "주변 낚시꾼들이 돌아보았다. 벌써 휴대전화를 꺼내 촬영하는 사람도 있었다."
      - "%YOU%은(는) 옆에 쪼그려 앉아 완전히 흥분한 %SEX%의 모습을 보며 웃음을 참지 못했다."
      - "「오늘 예감이 정말 맞았네~」"
      - "%SEX%는 천천히 고개를 들었다. 환희로 가득하던 표정이 찔리는 표정으로, 다시 당당한 표정으로 바뀌었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이것도 예상했던 일이에요~」"
      - "낚시꾼의 평: 「운 대박이네! 돌아가면 그 낚싯대 모셔 둬!」"


o_r_walking:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「와~ 트레이너 쌤~ 강에 작은 물고기가 잔뜩 있어요~ 산책만 하기엔 시간이 아깝지 않아요?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 체력 좋으시네요. 다음에 같이 달려 볼래요?」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「강가에 아기 고양이가 있어요. 트레이너 쌤, 아세요? 세이는 고양이 말을 할 줄 안답니다~」"

o_s_drawing:
  - "주말 장터가 열린 상점가, 시끌벅적한 사람들 틈에서."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「트레이너 쌤, 저기요!」"
  - "천막에 화려한 손글씨 포스터가 걸려 있었다. 【당근 뷔페 개업 기념 추첨! 정체불명의 특별상 등장!】"
  - "%YOU%이(가) 대답하기도 전에 %SEX%는 이미 빠른 걸음으로 노점 앞으로 달려갔다."
  - "노점 앞에서 %YOU%은(는) 추첨 안내를 보았다─ 한 번에 30마폐, 무작위 특별상!"
  - "(비싸!)"
  - "%YOU%은(는) 고개를 저으며 그만 가자는 신호를 보냈다."
  - "세이운 스카이는 애처롭게 이쪽을 바라보았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「트레이너 쌤, 딱 한 번만요. 네?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……부탁이에요~~~」"
  - "세이운 스카이는 하늘을 향해 손가락을 세우고 맹세했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「다음 주! 다음 주엔 절대 농땡이 안 피울게요!」"
  - acc: 1
    key: arcade
    content: "「크흠─ 요즘 주머니 사정이 좀……」"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「알겠어요……」"
      - "세이운 스카이는 아쉬워하며 자리를 떴다."
  - if: era.get('flag:当前马币') >= 30
    acc: 2
    content: "「알았어. 딱 한 번만이야.」(마폐 -30)"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아싸! 트레이너 쌤, 정말 좋아해요!」"
      - "세이운 스카이는 추첨 상자를 뒤적여 공 하나를 꺼냈다. 열어 보니 당첨된 것은─"
      - if: d.dice === 4
        lines:
          - "아무것도 없다!!!" # 30% 報酬なし
          - "세이운 스카이는 아무것도 적히지 않은 종이를 보고 몇 초간 말이 없었다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……괜찮아, 괜찮아~ 액땜한 셈 치죠~」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤, 옆에서 진짜 당근이나 사요. 적어도 먹을 수는 있잖아요.」"
      - if: d.dice === 3
        lines:
          - "『왕』 당근 한 개!!!" # 30% 全能力+8
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「우와! 엄청 큰 당근이다!」"
          - "한 개뿐이지만 보통 당근보다 한층 컸다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「음…… 내일은 식당 안 가도 되겠네요~」"
      - if: d.dice === 2
        lines:
          - "커다란 무 한 상자!!!" # 20% 全能力+15 スキルPt+15
          - "세이운 스카이는 커다란 무가 가득 든 상자를 안고 있다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「많기도 하네…… 게다가 이렇게 크다니…… 언제 다 먹지……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤, 집에 절임통 있어요?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「없으면 다음 달은 당근만 먹겠는데요……」"
      - if: d.dice === 1
        lines:
          - "당근 함박스테이크 정식 일주일 이용권!!!" # 15% 全能力+25 スキルPt+25 やる気+2
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「와! 일등! 당근 함박스테이크 무제한, 일주일 무료……」"
          - "세이운 스카이의 눈이 빛났다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「잠깐…… 일주일 무료라……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「트레이너 쌤! 플라워랑 스페, 그래스, 스즈카, 엘까지 %THEY%도 불러요!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「딱 칠 일 치잖아요. 하루에 한 명씩!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이런 『행운』은 다 같이 나누는 게 더 재밌으니까요~」"
      - if: d.dice === 0
        lines:
          - "황금 당근!!!" # 5% 全能力+30 スキルPt+50 やる気+4 スタミナ&賢さ追加+20（一度のみ）
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「특등! 트레이너 쌤! 특등이에요!」"
          - "세이운 스카이는 흥분해서 %YOU% 쪽으로 폴짝 뛰어왔다."
          - "점원이 정체불명의 선물 상자를 내놓았다."
          - "세이운 스카이가 열어 보자─"
          - "황금 당근 한 개!"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「저기…… 황금 당근?」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「음……? 정말…… 금으로 만들었나?」"
          - "세이운 스카이는 망설이며 다가가 냄새를 맡고, 끝을 살짝 깨물었다."
          - "%SEX%는 갑자기 멈추더니 천천히 눈을 크게 뜨고 큼직하게 한 입 베어 물었다."
          - 「！？」
          - "「갑자기 먹으면 어떡해? 괜찮아!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……트레이너 쌤! 이거……!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「이거……!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「달아요!」"
          - 「……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「잠깐…… 뭔가…… 이상해!」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「사흘 동안 푹 잔 것 같으면서도…… 평생 가장 큰 물고기를 낚은 것 같아요.」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「세이─ 온몸에 힘이 넘쳐요!」"
          - "「그렇게 말하니까 더 걱정되는데……」"

o_s_movie:
  - "%YOU%와(과) 세이운 스카이는 팝콘을 들고 영화를 보러 갔다."
  - "「보고 싶은 거 있어?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「음…… 골라 볼게요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이걸로 해요!」"
  - acc: 1
    content: "「공포 영화」"
    lines:
      - "영화가 시작된 지 십 분 만에 세이운 스카이는 팝콘 통을 찌그러뜨렸다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……트레이너 쌤~~~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 귀신…… 발소리가 안 나요……」"
      - "마침 절정에 이르자 세이운 스카이는 갑자기 팔을 잡고 얼굴을 파묻었다."
      - "%YOU%은(는) 귀신보다 세이운 스카이 때문에 식은땀을 흘렸다……"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤…… 생각해 보니 오늘은…… 낚시하기 좋은 날이네요.」"
  - acc: 2
    content: "「로맨스 영화」"
    lines:
      - "남녀 주인공이 처음 만날 때 세이운 스카이는 지루한 듯 팝콘을 먹고 있었다. %SEX%는 심드렁한 표정이었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……억지스럽네……」"
      - "빗속의 고백 장면이 나오자 팝콘 통을 이쪽으로 밀어 놓고 화면에서 눈을 떼지 않았다."
      - "오해로 헤어지는 장면에서는 세이운 스카이가 %YOU%의 손을 꽉 잡았다. 손바닥에 땀이 맺혀 있었다."
      - "마지막에 화해하자 %SEX%는 작게 숨을 내쉬며 어깨의 힘을 풀었다."
      - "영화가 끝난 뒤에도 세이운 스카이는 아직 여운에서 벗어나지 못한 듯했다."
      - "한참 뒤 붉어진 얼굴로 %YOU%에게 말했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤…… 돌아갈 땐 팔짱 끼고 걸어요~」"
  - acc: 3
    content: "「애니메이션」"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 아세요─ 애니메이션도 공부가 된다니까요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 고양이가 덮치는 동작…… 출발 기술로 응용할 수 있겠는데.」"
      - "고양이가 우아하게 착지하자 세이운 스카이는 생각에 잠긴 듯 고개를 끄덕였다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음, 음…… 착지할 때 충격 흡수는 세이보다 낫네.」"
      - "상영이 끝난 뒤에도 세이운 스카이는 아쉬운 듯 뒤를 돌아보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤~ 내일은 저렇게 몸을 활처럼 굽혔다가 스퍼트해 보고 싶어요……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「농담이에요…… 아마도. 냐하하~」"
  - acc: 4
    content: "「액션 영화」"
    lines:
      - "세이운 스카이는 팝콘을 건넸다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 천천히 드세요. 박진감 넘치는 장면까지 남겨 두세요.」"
      - "주인공이 폭발 속에서 뛰쳐나오자 세이운 스카이의 눈이 빛났다."
      - "차량 추격전에서는 %SEX%가 몸을 살짝 앞으로 기울이고 팔걸이를 손가락으로 두드렸다."
      - "주인공이 악당을 상대로 역전하는 순간, %SEX%는 남은 팝콘을 이쪽 손에 떠맡겼다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후~ 트레이너 쌤, 굉장해요! 다음엔 세이도 관객이 숨 쉬는 걸 잊을 만큼 긴장감 있게 달릴래요!」"
      - "「그럼 그걸 목표로 훈련할까?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그건…… 오늘은 돌아가서 자고요. 내일 해요, 냐하하~」"
  - acc: 5
    content: "「서스펜스 영화」"
    lines:
      - "초반 삼십 분 동안 세이운 스카이는 팝콘을 든 채 먹는 것도 잊고 영화에 빠져들었다."
      - "새로운 단서가 나올 때마다 %SEX%의 귀가 살짝 움직였다."
      - "반전이 나오자 %SEX%는 미간을 찌푸리며 작게 중얼거렸다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……먼저 알아챘어야 했는데.」"
      - "결말에서 범인이 밝혀지자 %SEX%는 길게 숨을 내쉬고 등받이에 기댔다. 그러고는 득의양양하게 고개를 기울여 %YOU%을(를) 보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어때요, 트레이너 쌤. 세이의 추리가 맞았죠~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「쌤이라면 몇 분 만에 단서를 찾으셨을까요?」"
      - "「나라면…… 범인이 잡힌 다음일지도.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그것도 좋아요. 조금 허술한 트레이너 쌤이 더 귀엽거든요.」"

o_c_pray:
  - random: true
    lines:
      - "세이운 스카이는 신사의 석등 옆에 서서 흔들리는 소원패를 올려다보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤~ 이 소원들 중에서…… 레이스에서 이기게 해 달라는 건 얼마나 될까요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「세이가 뽑은 운세는 『자유자재』네요…… 늦잠을 권하는 것 같은데.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그래도 신이 그렇게 말씀하시니, 다음 레이스에서 이기면 공을 반쯤 돌려 드릴까요?」"
  - random: true
    lines:
      - "세이운 스카이는 잠시 새전함 틈새를 바라보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 오천 마폐 넣으면……」"
      - "「아마 하야카와 씨한테 육성비 낭비한다고 혼날걸.」"
      - "%YOU%은(는) 주머니에서 오 마폐를 꺼내 살며시 함에 넣었다."
      - "「이 정도면 충분해. 소원은…… 액수보다 마음이니까.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그것도 그렇네요~」"
  - random: true
    lines:
      - "세이운 스카이는 배전 옆에 서서 방울을 흔들며 기도하는 무녀의 뒷모습을 한동안 바라보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 무녀님의 기원 춤은 신성하네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「있잖아요…… 세이도 무녀복을 입으면 저렇게 신성해 보일까요?」"
      - "%YOU%은(는) 진지하게 생각했다. 머릿속에 무녀복을 입은 세이운 스카이의 모습이 떠올랐다."
      - "「아마 귀엽겠지.」"
      - "%YOU%은(는) 무심코 입 밖으로 말했다."
      - "세이운 스카이의 귀가 번쩍 섰다가 바로 누웠다."
      - "%SEX%는 얼굴을 돌려 소원패를 바라보았다. 목소리가 작아졌다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤도 참…… 이상한 말씀 하지 마세요……」"

o_s_restaurant:
  - "세이운 스카이는 먹거리 골목 입구에 서서 노점을 하나하나 둘러보았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「트레이너 쌤!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「왼쪽부터 먹을까요? 오른쪽부터? 어떡하지~ 못 고르겠어요~」"
  - "「제비뽑기로 정할까?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「좋아요!」"
  - random: true
    lines:
      - "라멘"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「뜨거, 뜨거! 후─ 후─」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음─ 이 육수…… 적어도 열두 시간은 끓였네요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 그쪽 차슈 맛있어 보여요. 한 입 주세요~」"
      - "%YOU%은(는) 다정하게 자신의 그릇에 든 차슈를 집어 %SEX%에게 주었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「역시 세이한테는 쌤이 제일 잘해 주시네요. 자, 맛달걀 드릴게요~」"
      - "%SEX%는 면을 몇 입 먹다가 문득 고개를 들어 이쪽을 보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 앞으로 서로 다른 걸 시키면 매번 이렇게 바꿔 먹을래요?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그러면 매번 두 가지 맛을 볼 수 있잖아요.」"
  - random: true
    lines:
      - "타코야키"
      - "세이운 스카이는 꼬치로 하나를 찍어 입가에서 후후 분 뒤 %YOU% 앞으로 내밀었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「자─ 아─」"
      - "%YOU%이(가) 건네받은 타코야키를 맛보는 모습을 보며 %SEX%는 나른하게 웃었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「헤헤~ 트레이너 쌤, 아셨어요? 타코야키는 첫 입이 제일 맛있거든요.」"
      - "%YOU%은(는) 맛을 보며 여러 번 고개를 끄덕이고 칭찬했다."
      - "세이운 스카이는 남은 타코야키를 보며 생각에 잠겼다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 제일 맛있는 한 입은 드렸어요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「나머지는 세이가 어쩔 수 없이 처리할게요~」"
  - random: true
    lines:
      - "크레페"
      - "세이운 스카이는 점원에게 딸기 크림 크레페를 받아 이리저리 살펴보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 이런 건…… 어떻게 먹어야 여기저기 안 묻을까요?」"
      - "%SEX%가 한 입 먹어 보자 반대편에서 크림이 삐져나와 코끝에 묻었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「실패~」"
      - "%YOU%은(는) 손을 뻗어 %SEX%의 코끝에 묻은 크림을 닦고 자연스럽게 입에 넣었다."
      - "세이운 스카이의 귀가 번쩍 섰다가 맥없이 누웠다."
      - "%SEX%는 얼굴을 돌렸다. 볼이 새빨개진 채 한참 만에 아주 작은 목소리로 「고마워요」를 겨우 꺼냈다."
      - "그 뒤로 가는 내내 %SEX%는 고개를 숙이고 크레페와 진지한 승부를 벌였다. 조심스럽게 조금씩 베어 물어 더는 크림이 새지 않았다."
  - random: true
    lines:
      - "어묵"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음─ 사장님! 이거랑, 이거랑, 이것도요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「자─ 트레이너 쌤, 이거 쌤 좋아하시는 거예요.」"
      - "세이운 스카이는 실곤약을 그릇에 넣고 무 한 조각을 집었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「무 드셔 볼래요? 어묵탕은 이게 제일 맛있어요!」"
      - "%SEX%는 자신의 그릇에서 무를 집어 자연스럽게 입 앞으로 내밀었다."
      - "그러다 뭔가 생각났는지 손이 허공에서 멈췄다. 목까지 단번에 붉어졌다."
      - "%SEX%는 서둘러 무를 그릇에 돌려놓고 고개를 숙였다. 목소리는 점점 작아졌다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저기…… 직접 집어 드세요…… 머, 먹여 드리는 건 부끄러우니까……」"

o_s_dating: # 順番に発火
  - if: d.dating === 0
    lines:
      - "(길을 잃은 척하다가 트레이너 쌤이 당황해서 길을 찾으면 구해 드리자. 앞으로 세이한테 의지하시게.)"
      - "%YOU%와(과) 세이운 스카이는 중정에 새로 난 오솔길을 걷고 있었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(흐흥~ 사전 답사는 끝났어. 일부러 갈림길로 가자.)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어라, 트레이너 쌤. 이쪽은 돌아가는 길이 아니네요. 이 근처는 아직 공사 중인데.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「있잖아요, 트레이너 쌤~ 길 아세요? 세이한테 부탁해 보실래요~」"
      - "세이운 스카이는 짓궂은 표정으로 %YOU%이(가) %SEX%에게 도움을 청하기를 기다렸다."
      - "이쪽은 태연하게 휴대전화를 꺼내 위치 안내를 켰다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「겁먹지 마. 지도 보니까 이 골목 지나면 편의점이네. 배고파?」"
      - "세이운 스카이는 굳어 버렸고 볼이 살짝 붉어졌다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……트레이너 쌤, 언제 지도 깔아 두셨어요?!」"
  - if: d.dating === 1
    lines:
      - "(고양이를 핑계로 다정한 이야기로 유도해서 트레이너 쌤이 더 솔직해지게 하자.)"
      - "%YOU%와(과) 세이운 스카이는 학교 밖 길고양이에게 먹이를 주고 있었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저 고양이, 애교가 많네요~ 트레이너 쌤도 저렇게 어리광 부려 주시면 좋을 텐데.」"
      - "%YOU%은(는) 쪼그려 앉아 고양이 턱을 긁어 주었다."
      - "「지난달에 중성화했거든. 중성화한 고양이는 특히 얌전해.」"
      - "세이운 스카이는 너무나 과학적인 대답에 말문이 막혀 순식간에 얼굴이 붉어졌다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……그런 지식은 그렇게 정확히 기억 안 하셔도 돼요!」"
  - if: d.dating === 2
    lines:
      - "(트레이너 쌤과 공포 영화를 보다가 놀라시는 틈에 안겨서 세이가 안심시켜 드리자.)"
      - "세이운 스카이는 %YOU%에게 공포 영화를 보자고 했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 귀신이 무서우면 이쪽으로 숨으셔도 돼요.」"
      - "그렇게 말하며 자신만만하게 가슴을 폈다."
      - "%YOU%은(는) 고개를 끄덕여 알겠다고 했다."
      - "영화가 절정에 이르자 창백한 그림자가 갑자기 튀어나왔다─"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으아아!!!」"
      - "O(≧ㅁ≦)O"
      - "세이운 스카이는 필사적으로 트레이너의 목에 매달렸다."
      - "(숨을 못 쉬겠어……)"
  - if: d.dating === 3
    lines:
      - "(자는 척 어깨에 기대서 트레이너 쌤을 부끄럽게 만들자.)"
      - "돌아오는 전철에서 세이운 스카이는 창가에, 이쪽은 %SEX% 옆에 앉았다."
      - "세이운 스카이가 갑자기 어깨에 기댔다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(흐흥~ 자는 척하기. 여자애가 어깨에 기대면 쌤도 얼굴 빨개지고 심장이 뛰겠지~)"
      - "한 정거장이 지나고……"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「Z～Z～Z～」
      -
      - "「스카이, 곧 도착해~ 일어나~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - ！！！
      - "세이운 스카이는 번쩍 눈을 떴다. 자신의 머리가 어깨에 기대어 있고 입가에는 희미한 물기가 남아 있음을 깨달았다."
      - "%SEX%는 벌떡 몸을 바로 세우고 입가를 닦았다. 얼굴이 눈에 띄게 새빨개졌다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트, 트레이너 쌤, 계속 베개가 되어 주신 거예요?!」"
      - "「편하게 자길래 깨우기 아까워서.」"
      - "세이운 스카이는 고개를 숙이고 작은 목소리로 답했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「고, 고마워요……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(이런 대본이 아니었는데……)"
  - if: d.dating === 4
    lines:
      - "(강력 접착제로 뚜껑을 붙여 두자. 쌤이 못 여시면 세이가 가볍게 열어 보이는 거야~ 참고: %UMA%는 힘이 아주 세다.)"
      - "두 사람은 거리를 걷고 있다."
      - "세이운 스카이는 갑자기 음료 두 병을 사러 갔다─ 그중 한 병의 뚜껑은 %SEX%가 몰래 강력 접착제로 붙여 두었다."
      - "돌아온 뒤 자연스럽게 다른 병을 집었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 물 드세요~」"
      - "%SEX%는 손을 써 둔 병을 %YOU% 앞으로 밀었다."
      - "%YOU%은(는) 병을 집어 가볍게 돌렸다……"
      - "열리지 않는다……"
      - "「응?」"
      - "%YOU%은(는) 힘을 주었다……"
      - "여전히 열리지 않는다……"
      - "세이운 스카이의 눈이 빛났다. 눈썹을 치켜올리며 짓궂게 웃었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「안 열려요? 세이가 도와드릴까요~」"
      - "「이상하네…… 이 물 뭔가 수상한데……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤이 약하신 것뿐이에요~ 세이가─」"
      - "세이운 스카이는 자연스레 병을 받아 힘주어 돌렸다─"
      - "열리지 않는다……"
      - "주변에 정적이 흘렀다……"
      - "다시 힘을 주어 돌렸다─"
      - "여전히 열리지 않는다……"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(우와! 접착제가 이렇게 강해!)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "(안 돼! 세이운 스카이! %UMA%의 명예를 걸고!)"
      - "세이운 스카이는 온 힘을 다해 돌렸다─"
      - "「펑!」"
      - "병이 가운데부터 터지며 음료가 두 사람에게 튀었다."
      - "%YOU%은(는) 곧바로 휴지를 꺼내 %SEX%를 닦아 주었다."
      - "%SEX%는 고개를 숙이고 귀를 늘어뜨렸다. 목소리가 잔뜩 가라앉았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「미안해요……」"
      - "「괜찮아. 내 힘이 부족했던 건데. 열어 줘서 고마워.」"
      - "%SEX%는 번쩍 고개를 들었다. 아직 붉은 얼굴에 조금 놀란 눈빛이 떠올랐다."
      - "입술이 달싹였지만 결국 작게 중얼거릴 뿐이었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음…… 트레이너 쌤, 너무 다정해요…… 반칙이야……」"
  # イベント「優雅なお茶会」解放後
  - if: d.dating === 6
    lines:
      - "(트레이너 쌤을 애프터눈 티에 데려가 제대로 즐기는 법을 알려 드리자. 세이의 박학다식을 보여 주는 거야.)"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「트레이너 쌤, 이 가게예요. 스즈카가 추천했거든요. 특별히 모시고 온 거예요~」"
      - "「그럼 잔뜩 기대해도 되겠네~」"
      - "잠시 뒤 점원이 찻주전자와 층층이 쌓인 디저트 접시를 탁자에 놓았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「왔다, 왔어~ 트레이너 쌤, 먼저 드세요~」"
      - "세이운 스카이가 짓궂게 웃으며 %YOU%을(를) 바라보았다. %YOU%은(는) 조금 의심스러웠지만 일단 찻잔을 들었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「푸훗! 틀렸어요!」"
      - "세이운 스카이가 갑자기 소리쳐 %YOU%은(는) 움찔했다."
      - "세이운 스카이는 눈썹을 치켜올리며 득의양양하게 말했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「찻잔 잡는 법─ 틀렸어요! 엄지와 검지로 손잡이를 집고 중지로 가볍게 받쳐요. 찻잔과 받침은 같이 들고요.」"
      - "「어…… 알았어……」"
      - "%YOU%은(는) 스카이가 알려 준 대로 어색하게 차를 마셨다."
      - "찻잔을 내려놓고 %YOU%은(는) 맨 위 디저트를 집었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「푸훗! 틀렸어요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「디저트는 맨 아래 짭짤한 샌드위치부터예요. 그다음 중간의 스콘, 마지막이 맨 위의 달콤한 디저트죠.」"
      - "「그래, 그래……」"
      - "득의양양한 세이운 스카이를 보고 %YOU%은(는) %SEX%의 오늘 목적을 대충 알아챘다."
      - "「스카이, 대단하네. 애프터눈 티 예절을 다 아는구나.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「흐흥~ 당연하죠~ 스즈카한테 오후 내내 특훈받았거든요!」"
      - "「그럼 우아하신 세이운 스카이 아가씨, 올바른 애프터눈 티 시범을 보여 주시겠어요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「네, 네~ 정말, 어쩔 수 없네요~」"
      - "그렇게 말한 세이운 스카이는 찻잔을 들고 제법 그럴듯하게 마시기 시작했다."
      - "%YOU%은(는) 평소와는 딴사람 같은 세이운 스카이를 보며 저도 모르게 칭찬했다."
      - "「오늘 세이운 스카이는 기품이 있네~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「！！！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「콜록!!」"
      - "%YOU%의 말에 세이운 스카이의 사고가 멈췄다. 차가 기도로 넘어가 %SEX%는 기침했다."
      - "「이것도 애프터눈 티 예절이야~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「콜록…… 쌤이 이상한 말씀을 하시니까 그렇죠!」"
      - "「하하~ 미안, 미안~ 자, 닦아……」"
      - "%YOU%은(는) 세이운 스카이를 달래며 %SEX%에게 휴지를 건넸다. 세이운 스카이는 냉큼 받아 갔다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「흥─ 아시면 됐어요……」"
      - "「오늘은 우아한 애프터눈 티를 체험했네.」"
      - "「그럼 이제 귀족 예절은 퇴장. 지금부터는 서민식으로 먹자.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「음─ 그것도 좋네요~ 트레이너 쌤! 저 마카롱이요!」"

good_night_normal:
  sync: true
  lines:
    - if: era.get('status:20:沉睡') > 0 || era.get('status:20:马跳S') > 0
      lines:
        - if: era.get('status:20:马跳S') === 0
          content: "「Z Z Z~ (세이운 스카이는 아기 고양이처럼 깊이 잠들어 있다……)」"
        - "%YOU%은(는) 잠든 세이운 스카이를 보고 %SEX%의 평소 낮잠과 다를 게 없다고 생각했다……"
        - "그래서 %YOU%은(는) 살며시 %SEX%를 업어 기숙사 앞까지 데려다주었다."
    - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「오, 별이 보이네요……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그 말은…… 밤낚시 준비를 해야겠네요!」"
        - "세이운 스카이는 %YOU%의 날카로운 시선을 느꼈다─"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어라, 아닌가요? 알았어요, 알았어……」"
        - ～ (= ^ - ω - ^ =) ～
    - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「기숙사네요. 트레이너 쌤, 그럼 들어갈게요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「내일 아침 훈련장에서─ 제시간에 갈게요……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「음…… 아마, 어쩌면요. 너무 기대 안 하시는 게 좋을걸요. 냐하하~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아무튼─ 안녕히 주무세요~」"
    - if: era.get('status:20:沉睡') === 0 && era.get('status:20:马跳S') === 0
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「있잖아요~ 트레이너 쌤, 방금 철학적인 의문이 떠올랐어요─」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%UMA%는 왜 오후에 훈련할까요? 고양이는 훈련 안 하는데…… 날듯이 달리잖아요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이거 중요한 문제예요! 인생을 생각해 봐야겠네요~ 오후 훈련요? 내일의 저한테 맡길게요~」"
        - "ฅ (^ ω ^ ฅ) ～ /"
        - "「이제 막 점심 먹었잖아!」"
        - "무력한 트레이너는 파트너가 오후 햇살 속으로 사라지는 모습을 바라볼 수밖에 없었다."


# 75 爱慕以上
# TODO
gn_sex:
  title: "발정의 소리"
  lines:
    - "바쁜 하루 일을 마치고 %YOU%은(는) 아파트로 돌아왔다."
    - "문을 열자마자 %YOU%에게 침실에서 나는 이상한 소리가 들려왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「킁킁~~ 킁킁~~」"
    - "%YOU%은(는) 곧바로 경계하며 살금살금 다가갔다. 이상한 소리가 점점 또렷해졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: ？？？
        - "「킁하~~ 킁하~~」"
    - "그때 %YOU%에게 익숙한 목소리가 들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으─ 후─ 으흥~~~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤 냄새, 좋아~~ 헤헤~~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아~ 좋아~ 좋아~ 좋아~ 좋아~」"
    - "(스카이인가……)"
    - "%YOU%은(는) 침실로 들어가 탁 하고 불을 켰다."
    - if: d.check === 2
      lines:
        - "하지만 %YOU%의 눈에 보이는 것은 흐트러진 침대 시트뿐, 찾던 사람은 없었다."
        - "쾅!"
        - "등 뒤의 문이 갑자기 닫혀 %YOU%은(는) 가슴이 철렁했다. 두 팔이 뒤에서 %YOU%을(를) 꼭 끌어안았다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너 쌤, 너무해요~ 이렇게 오랫동안 세이랑 애정 표현도 안 하시고……」"
        - "그렇게 말하곤 %YOU%을(를) 안은 채 침대로 뛰어들었다."
        - "「스카이─ 읍─」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「쉿─ 오늘은─ 아무도 못 도망가요~~」"
    - if: d.check < 2
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「우와!!」"
        - "세이운 스카이는 알몸에 %YOU%의 아직 빨지 않은 셔츠만 걸치고 있었다. 침대는 스카이가 뒤척인 탓에 엉망이었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「트레이너 쌤…… 저기……」"
        - "당신의 베개를 안고 부끄러운 듯 몸을 웅크렸다."
        - "파트너의 귀여운 모습을 본 %YOU%은(는)─"
        - acc: 1
          content: "더는 못 참아!"
        - acc: 2
          content: "말없이 문을 닫는다……(거절)"


birthday:
  title: "생일"
  lines:
    - "문을 연 세이운 스카이는 탁자 위 케이크를 보고 잠시 멈췄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「기억해 주는 사람도 있네요. 냐하하!」"
    - "%YOU%은(는) 문 뒤에서 나와 폭죽을 터뜨렸다."
    - "「펑! 생일 축하해! 오늘은 푹 쉬어~」"
    - "세이운 스카이는 놀라움 가득한 얼굴로 신나게 달려와 %YOU%을(를) 안았다."
    - "%YOU%은(는) 웃으며 %SEX%의 머리를 쓰다듬고, 주머니에서 라이터를 꺼내 초에 하나씩 불을 붙였다."
    - "「자, 생일의 첫 순서는─ 소원 빌기야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 네!」"
    - "세이운 스카이는 두 손을 모으고 눈을 감았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「내년엔 트레이너 쌤보다 큰 물고기를 낚고 싶어요!」"
    - "%SEX%는 한쪽 눈을 떠서 %YOU%을(를) 슬쩍 보더니 먼저 웃음을 터뜨렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「농담이에요~ 소원은 입 밖에 내면 안 이루어지잖아요.」"
    - "%SEX%는 입가에 미소를 머금은 채 다시 눈을 감았다. 이번에는 조금 더 오래 침묵했다."
    - "눈을 뜬 %SEX%는 한숨에 촛불을 껐다."
    - "「무슨 소원 빌었어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이번엔 비밀이에요~」"
    - "세이운 스카이는 장난스럽게 윙크하며 손가락 하나를 세워 답했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 오늘은─」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 먼저 한정 신상 미끼 사러 같이 가 주세요! 그다음엔 하루 종일 쇼핑백 들어 주시고! 그다음엔 특대 파르페 사 주세요!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고─」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고는 일단 아껴 둘래요. 케이크 먹고 나서요!」"

cl_new_year:
  title: "새해"
  lines:
    - "참배길 양옆은 사람들로 가득했다. 세이운 스카이는 %YOU%의 소매를 잡고 인파를 헤쳐 갔다. 다른 손에는 갓 산 오징어구이가 들려 있었다."
    - "「천천히 먹어.」"
    - "%YOU%은(는) %SEX%의 입가에 묻은 양념을 보고 주머니에서 휴지를 꺼냈다."
    - "세이운 스카이는 고개를 들고 기다렸다."
    - "%YOU%은(는) 어쩔 수 없다는 듯 웃으며 %SEX%의 입가를 닦아 주었다."
    - "「됐어, 가자.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응!」"
    - "%SEX%는 오징어를 한 입 베어 물고 갑자기 걸음을 멈췄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 트레이너 쌤! 운세 뽑는 데가 비었어요. 빨리, 빨리!」"
    -
    - "(운세 뽑는 곳)"
    - "세이운 스카이는 통을 흔들어 운세 막대를 꺼내고 내려다보며 눈썹을 치켜올렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤! 대길이에요!」"
    - "%SEX%는 %YOU% 앞에서 흔들어 보였다. 입꼬리가 득의양양하게 한껏 올라가 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「올해는 운이 좋겠네요~ 냐하하!」"
    - "%YOU%도 한 개를 뽑아 내려다본 순간 웃음이 굳었다."
    - "세이운 스카이가 다가와 거의 %YOU%의 어깨에 머리를 붙였다."
    - "글자를 확인한 %SEX%는 「휙」 하고 뒤로 크게 뛰었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「와─!!! 대대대대대흉?! 어떻게 그런 걸 뽑으셨어요?!」"
    - "%SEX%는 가슴 앞에 팔짱을 끼고 불길한 것이라도 보듯 %YOU%을(를) 노려보았다."
    - "「……『대』가 그렇게 많이 붙진 않았어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「조, 조금 떨어지세요! 액운 옮아요!」"
    - "%YOU%은(는) 손에 든 운세를 보며 침착한 척했다."
    - "「……크흠, 나무에 묶으면 액운이 떨어진대.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 빨리 묶어요!」"
    - "%YOU%은(는) 흰 종이들이 매달린 오래된 나무로 가서 까치발을 들고 낮은 가지에 운세를 묶었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「더 위에요! 더 위! 높을수록 효과가 좋아요!」"
    - "%YOU%은(는) 말없이 %SEX%를 바라본 뒤 까치발을 들어 더 높은 곳에 묶었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 네, 그 정도면 되겠네요…… 그래도 떨어져 계세요. 액운의 안전거리는 삼 미터라고요. 제가 알아요!」"
    - "묶기를 마친 %YOU%이(가) %SEX% 곁으로 돌아가자 세이운 스카이는 곧바로 한 걸음 물러났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「삼 미터! 경고! 세이랑 삼 미터 떨어지세요!」"
    - "%YOU%은(는) 큰 적이라도 만난 듯한 %SEX%의 모습에 웃음을 터뜨렸다."
    - "「넌 대길 뽑았잖아~ 뭐가 무서워. 가자~」"
    - "%YOU%은(는) 본전 쪽으로 향했다. 세이운 스카이는 고개를 갸웃하며 몇 초간 %YOU%을(를) 보더니 종종걸음으로 따라왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤…… 정말 괜찮으세요?」"
    - "「그냥 운세잖아.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 대흉이라고요! 제일 나쁜 거요! 대흉 뽑고 그 자리에서 운 사람도 있다던데!」"
    - "「그럼 나도 울까?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그건 됐어요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭐, 꼭 저주받는 것도 아니니까요. 할아버지가 그러셨어요. 운세는 운세일 뿐, 믿으면 있는 거고 안 믿으면 없는 거라고.」"
    - "「아까는 왜 그렇게 멀리 떨어졌는데?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그, 그건 트레이너 쌤이 걱정돼서요!」"
    - "%SEX%는 살짝 붉어진 얼굴로 걸음을 재촉해 앞서갔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「빨리, 빨리, 참배해서 액운을 떨쳐요!」"

cl_valentine:
  title: "밸런타인데이"
  lines:
    - "「오늘은 밸런타인데이네.」"
    - "트레이너실로 가던 %YOU%은(는) 곳곳에 감도는 분홍빛 분위기를 보고 무심코 중얼거렸다."
    - "「%UMA%들, 정말─ 들떴네.」"
    - "자료를 든 손에 힘이 들어갔다. %YOU%은(는) 하루 종일 낚시하고 잠만 자는 누군가를 떠올렸다."
    - "「세이운 스카이는─」"
    - "말을 꺼내려다 %YOU%은(는) 먼저 고개를 저었다."
    - "「됐어, 그럴 리 없지.」"
    -
    - "%YOU%이(가) 트레이너실 문을 열고 자료를 탁자에 놓은 뒤 막 앉자, 문이 갑자기 열렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤!」"
    - "세이운 스카이가 뛰어 들어왔다. 아직 숨이 조금 차 있었다."
    - "%SEX%는 정교한 상자를 등 뒤에 숨기고 있었지만, 상자가 너무 커서 전혀 가려지지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「헤헤헤─」"
    - "%SEX%는 앞으로 와서 상자를 탁자 위에 놓았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이거 세이가 마음을 듬뿍 담아서 만들었어요! 열심히 했다고요!」"
    - "%SEX%는 두 손을 탁자에 짚고 몸을 조금 앞으로 기울여 반짝이는 눈으로 이쪽을 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 트레이너 쌤, 세이의 마음을 맛봐 주실래요?」"
    - "%SEX%의 표정은 진지했고, 달려온 뒤의 붉은 기가 아직 남아 있었다."
    - "%YOU%은(는) %SEX%를 보며 굳어 버렸다."
    - "「네가 이런 걸 준비했다고?」"
    - "세이운 스카이가 미간을 찌푸렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤도 참─ 농담도 때와 장소를 가려 주세요.」"
    - "%YOU%은(는) 아차 싶어 바로 사과했다."
    - "「미안, 미안. 평소 같으면 고양이 캔을 준비해서 나더러 고양이 흉내 내라고 할 줄 알았거든.」"
    - "세이운 스카이는 불만스레 콧방귀를 뀌었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「너무 태연하시잖아요! 귀여운 %UMA%가 밸런타인데이에 초콜릿을 주고 있는데!」"
    - "「그래, 그래, 미안해.」"
    - "%YOU%은(는) 사과하며 기대에 차 상자를 열었다."
    - "안에는 고양이 캔 하나가 놓여 있었다."
    - ……
    - "%YOU%은(는) 고양이 캔을 삼 초 동안 바라보다가 고개를 들어 세이운 스카이를 보았다."
    - "%SEX%는 웃음을 참느라 눈이 초승달처럼 휘어 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「냐하하─!」"
    - "결국 %SEX%는 더 참지 못하고 몸을 앞뒤로 흔들며 소리 내 웃었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「장난 작전, 대성공!」"
    - "%YOU%은(는) 어이없다는 얼굴로 %SEX%를 보았다가 다시 고양이 캔을 내려다보았다."
    - "(……그럴 줄 알았지. 괜히 기대했네……)"
    - "웃음을 그친 세이운 스카이가 손을 뻗어 %YOU%의 어깨를 두드렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「포기하지 마세요─ 열어 보실래요?」"
    - "%YOU%은(는) 잠시 멈췄다가 손을 뻗어 고양이 캔을 꺼내 열었다."
    - "캔 안에는 수제 초콜릿 몇 개가 가지런히 놓여 있었다. 모양은 완벽하지 않았지만 정성을 들인 흔적이 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이건…… 정말 진지하게 만들었어요.」"
    - "%SEX%는 살짝 고개를 숙였다. 얼굴이 천천히 붉어졌고 목소리는 아까보다 훨씬 작았다."
    - "%YOU%은(는) 손에 든 초콜릿을 보고 다시 %SEX%를 보았다."
    - "「고마워. 잘 맛볼게.」"
    - "「이번 밸런타인데이, 정말 기쁘다……」"

cl_palace:
  title: "전당 주간"
  lines:
    - "전당 주간을 맞아 트레센 학원 전체가 엄숙한 분위기에 휩싸였다."
    - "%YOU%와(과) 세이운 스카이는 학원을 걸어 중앙의 세 여신상에 도착했다. 주변에는 이미 사람들이 모여 있었다."
    - "%UMA%들은 줄을 서서 차례로 동상 앞으로 나아가 두 손을 모으고 눈을 감아 기도했다."
    - "%YOU%은(는) 걸음을 늦추고 그 경건한 뒷모습을 보며 작게 말했다."
    - "「신성하네.」"
    - "「레이스에 나서는 %UMA%한테는 가장 중요한 날인가?」"
    - "세이운 스카이는 고개를 끄덕이며 멀리 있는 동상을 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 전설에 따르면 레이스에 나서는 %UMA%는 여신의 축복을 받은 정령이래요~」"
    - "%SEX%의 목소리는 작았다. 평소의 나른한 말투마저 거두고 유난히 엄숙했다."
    - "「그럼 우리도 기도하자.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네─」"
    - "두 사람은 줄 끝에 서서 앞의 %UMA%를 따라 조금씩 나아갔다."
    - "세이운 스카이는 드물게 조용했다. 줄 서는 게 지루하다고 투덜대지도, 잘 곳을 찾지도 않았다. %SEX%는 그저 %YOU% 곁에서 조금씩 가까워지는 동상을 바라보았다."
    - "마침내 차례가 왔다."
    - "세이운 스카이는 앞으로 나가 세 여신상 앞에 섰다. %YOU%은(는) %SEX%보다 조금 뒤에서 두 손을 모으고 눈을 감았다."
    - "주변은 고요했고 바람에 나뭇잎이 흔들리는 소리만 났다."
    - "%YOU%은(는) 마음속으로 살며시 빌었다─"
    - "눈을 뜨자 세이운 스카이는 이미 기도를 마친 뒤였다. 고개를 기울여 %YOU%을(를) 바라보며 입가에 옅은 미소를 띠고 있었다."
    - "기도를 마치고 돌아오는 길에 %YOU%이(가) 물었다."
    - "「무슨 소원 빌었어?」"
    - "세이운 스카이는 눈을 깜빡이더니 대답 대신 되물었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤은요? 그렇게 오래 비셨으면서─」"
    - "「네가 계속 이렇게 달릴 수 있기를. 자유롭게 달려 나갈 수 있기를.」"
    - "세이운 스카이의 꼬리가 살며시 흔들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「감사 인사였어요.」"
    - "%SEX%는 뒤돌아 세 여신상 쪽을 바라보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "(감사합니다. 만나게 해 주셔서……)"

cl_fans:
  title: "팬 감사제"
  lines:
    - "해마다 한 번 열리는 팬 감사제가 다시 시작되었다."
    - "오늘 트레센 학원은 특히 활기차서 어디나 사람들로 가득했다."
    - "운동장에는 임시 무대가 세워지고, 복도는 응원봉을 든 팬들로 붐볐다. 기자들은 카메라를 메고 구석구석 돌아다니며 인터뷰할 사람을 찾았다."
    - "입구의 사인회장 앞에는 긴 줄이 늘어서 있었다."
    - "탁자에 단정히 앉아 팬에게 사인해 주는 %UMA%도 있고, 기자들에게 둘러싸여 최근 훈련 이야기를 웃으며 하는 이도, 팬을 자신의 테마 가게로 데려가 먹으며 이야기하는 이도 있었다."
    - "%YOU%은(는) 이 소란 속을 천천히 걸었다. 귓가에는 셔터 소리와 환호성이 가득했다."
    - "(세이운 스카이라면 아마 %SEX%의 팬들을 가장 짙은 나무 그늘로 데려가서─ 다 같이 낮잠을 자겠지.)"
    - "(응, %SEX%답네.)"
    - "%YOU%은(는) 작게 웃으며 계속 걸었다."
    - "모퉁이를 돈 %YOU%의 눈에 교실을 꾸민 카페가 보였다. 입구에는 장식 글씨로 쓴 간판이 걸려 있었다─ 【황금 세대 카페】."
    - "(황금 세대 카페? 왠지……)"
    - "%YOU%은(는) 짐작 가는 바가 있어 문을 밀고 들어갔다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「어서 오세요!」"
    - "엘 콘도르 파사가 흑백 메이드복 차림으로 입구에 서 있었다. 한 손에는 빈 쟁반을 들고, 잡지 표지에서 튀어나온 듯한 미소를 짓고 있었다."
    - "(역시……)"
    - "엘은 %YOU%을(를) 보고 잠깐 멈췄다가 더욱 짙게 웃었다. 조금 짓궂은 기색이 섞여 있었다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「스카이─!」"
    - "%SEX%는 일부러 말끝을 길게 늘여 안쪽에 외쳤다."
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「이 손님, 자리로 안내해 주세요─」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네에에에─」"
    - "%YOU%에게 익숙한 나른한 목소리가 안쪽에서 들렸다. 그리고 %YOU%의 눈에 들어온 것은─"
    - "세이운 스카이는 청백색 메이드복을 입고 머리에 레이스 머리띠를 하고 있었다. 허리에 묶인 흰 앞치마의 리본은 좌우가 비대칭이었다."
    - "평소에 보기 힘든 차림 때문인지, %SEX%는 이불 속에서 끌려 나와 억지로 옷을 입혀진 듯 보였다."
    - "%SEX%는 눈을 가늘게 뜨고 쟁반을 든 채 나왔다. 평소엔 게으르지만 그래도 %SEX%는 맡은 일을 하려 애쓰고 있었다."
    - "그제야 %SEX%는 입구에 선 사람이 누구인지 알아보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「으아아!!! Σ(⊃ °Д °;)⊃」"
    - "%SEX%는 온몸을 움츠리며 반 걸음 물러났다. 쟁반의 잔들이 흔들리며 맑은 소리를 냈다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 아, 아─ 트레이너 쌤!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여긴 왜 오셨어요!」"
    - "「팬 감사제잖아.」"
    - "%YOU%은(는) 안으로 들어가 %SEX%의 반응을 못 본 척하며 옆의 빈 탁자로 향했다."
    - "「자, 우선 커피부터 마실까.」"
    - "세이운 스카이는 이 초 동안 굳어 있다가 홱 엘 쪽을 보았다."
    - "엘은 입구에서 다른 손님을 안내하다 %SEX%의 시선을 느끼고 돌아보았다. %SEX%에게 눈짓하며 엄지를 치켜들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……배신자.」"
    - "세이운 스카이는 작게 중얼거리고는 %YOU%에게 몹시 어색한 미소를 지었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 커피 금방 가져올게요……」"
    - "말을 마치자마자 도망치듯 가지러 갔다."
    - "%YOU%은(는) 주변을 둘러보았다. 손님을 응대하는 건 엘, 스페셜 위크, 세이운 스카이뿐이었다."
    - "(킹 헤일로와 사일런스 스즈카는 주방에 있나……)"
    - "그때 스페셜 위크가 커피를 가져와 탁자에 놓았다."
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「여기 커피 나왔습니다.」"
    - "「고마워. 그런데 아까 파란 머리 직원은?」"
    - color: %COLOR_1%
      content:
        - fontWeight: bold
          content: %SPE%
        - "「저기…… 스카이 씨가 꼭 제가 가져다드리라고 해서요……」"
    - "스페셜 위크는 쓴웃음을 지었다."
    - "「아아…… 참, 여기 대표 메뉴는 뭐야?」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「물론 오므라이스죠~ 맛있어지는 마법도 걸어 드려요~」"
    - "「하나 줘! 그리고─ 마법은 세이운 스카이한테 받을게.」"
    - color: %COLOR_14%
      content:
        - fontWeight: bold
          content: %CONDOR%
        - "「맡겨 주세요!」"
    - "엘이 옆에서 먼저 나섰다."
    - "말을 마치고 주방으로 뛰어갔다. 한바탕 격렬한 말다툼 끝에 세이운 스카이가 어두운 얼굴로 나왔다. 손에는 오므라이스 접시가 들려 있었다."
    - "황금빛 달걀이 밥을 감싸고, 위에는 케첩으로 삐뚤빼뚤한 웃는 얼굴이 그려져 있었다. 입이 조금 비뚤어져 한 대 맞은 것 같았다."
    - "접시 가장자리에는 브로콜리 조금과 토마토 두 조각이 놓였다. 섬세한 담음새는 아니었지만 신경 써서 놓은 티가 났다."
    - "세이운 스카이는 %YOU% 앞에 접시를 놓았다. 손이 아직 조금 떨렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오므라이스예요. 드세요.」"
    - "말을 마치자 도망가려 했다."
    - "「잠깐.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「…………이번엔 또 뭐예요.」"
    - "「뭔가 잊은 거 없어?」"
    - "세이운 스카이의 얼굴이 확 다시 붉어졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……싫어요.」"
    - "「손님은 왕이잖아.」"
    - "%YOU%은(는) 입구의 포스터를 가리켰다. 거기에는 『메이드 풀서비스 제공』이라고 적혀 있었다."
    - "세이운 스카이는 %YOU%이(가) 가리킨 곳을 보았다. 거부하던 표정이 절망으로 바뀌었다."
    - "%SEX%는 깊게 숨을 들이쉬고 눈을 감은 채 빠르게 말했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맛있어져라~! 모에, 모에, 큥……」"
    - "모기만 한 목소리였다."
    - "「안 들리는데. 이래선 오므라이스가 맛있어지지 않겠어.」"
    - "%SEX%는 %YOU%을(를) 노려보았다. 얼굴은 김이 날 만큼 빨갰고, 굳은 손가락으로 하트를 만들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맛있어져라~! 모에, 모에, 큥!」"
    - "%YOU%은(는) 한 입 맛보았다."
    - "「음─ 맛있어! 역시 스카이의 마법이네!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잘됐네요, 손님. 더 필요하신 게 없으시면……」"
    - "말도 다 끝내기 전에 세이운 스카이는 다시 주방으로 달려갔다."
    - "%YOU%이(가) 만족스럽게 식사를 마치자, 스페셜 위크가 %SEX%의 팬과 사진을 찍는 모습이 보였다. %YOU%에게 좋은 생각이 떠올랐다."
    - "「직원분! 잠깐 와 줘!」"
    - "%YOU%의 갑작스러운 부름에 세이운 스카이는 움찔하며 조심조심 다가왔다."
    - "「찰칵!」"
    - "%YOU%은(는) 갑자기 휴대전화를 꺼내 둘의 사진을 찍었다."
    - "화면 속 %YOU%은(는) 웃고 있었다. 세이운 스카이는 당황한 얼굴로 귀를 곧추세우고 입을 벌려 뭔가 말하려는 모습이었다. 렌즈를 가리려 뻗은 손은 중간에 멈춰 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 돼요! 이 사진 이상해─ 지워요, 지워─」"
    - "세이운 스카이는 휴대전화를 빼앗으려 달려들었지만 %YOU%은(는) 능숙하게 피했다."
    - "「괜찮잖아. 기념사진 허용하는 거지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤은 예외예요!」"
    - "%SEX%는 입술을 깨물고 %YOU%을(를) 응시했다. 눈에는 물기가 맺히고 꼬리는 솔처럼 부풀어 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 밖에는 공개하지 마세요!」"
    - "「공개 안 할게.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「맹세해요?」"
    - "「맹세해.」"
    - "그렇게 말하고 계산한 뒤 밖으로 향하다가, 나가기 전에 한마디 덧붙였다."
    - "「음, 트레이너실에 장식해 두면 괜찮겠네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤!」"

cl_halloween:
  title: "핼러윈"
  lines:
    - "문이 살짝 열렸다."
    - "%YOU%이(가) 고개를 들자 주황색 무언가가 비집고 들어왔다."
    - "%SEX%는 주황색과 흰색 줄무늬 양말에 같은 계열의 짧은 치마를 입고, 머리에는 고양이 귀 머리띠를 했다. 얼굴에는 아이라이너로 비뚤어진 수염 세 가닥이 그려져 있었다."
    - "주황색 담요를 망토처럼 두르고 뒤쪽 구멍으로 꼬리를 내놓았다. 꼬리 끝에는 작은 방울이 달려 움직일 때마다 딸랑딸랑 울렸다."
    - "「……그건 뭐야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「Trick or treat！！！」
    - "%SEX%는 두 손(발톱?)을 높이 들고 뒤에서 꼬리를 흔들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「빨리 과자 내놔라, 안 그러면 장난칠 거다냥!」"
    - "%YOU%은(는) %SEX%를 올려다보며 이 초 동안 굳었다."
    - "「……무슨 분장이야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 고양이 요괴죠!」"
    - "세이운 스카이는 의기양양하게 고개를 들고 허리에 손을 얹었다. %YOU%은(는) 자세히 살펴보았다."
    - "얼굴의 수염은 비뚤어졌고 고양이 귀 머리핀은 마트에서 산 싸구려로, 한쪽 귀가 반쯤 찌그러져 있었다. 음…… 꼬리의 방울은 잘 울렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다른 건 나중에! 사탕 내놔라냥!」"
    - "%YOU%은(는) 서랍에서 작은 물고기 모양 비스킷 한 봉지를 꺼냈다."
    - "%SEX%는 내려다보더니 다시 고개를 들어 %YOU%을(를) 보았다. 눈에 『그게 다예요?』라고 쓰여 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여긴 너무 가난하다냥……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 이 고양이 요괴가 베풀어 줄게요~」"
    - "%SEX%는 가방에서 손수 만든 종이봉투를 꺼내 %YOU%에게 안겼다."
    - "안에는 모양이 삐뚤빼뚤한 사탕들─ 그리고 아무리 봐도 오징어처럼 생긴 것이 하나 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「흐흥~ 대단하죠~」"
    - "%YOU%이(가) %SEX%의 전리품을 살펴보는 사이, %SEX%가 한 걸음에 바짝 다가왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼─」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「과자를 안 준 벌로 장난 시작이에요~ 각오해라냥!」"
    - "%YOU%이(가) 반응하기도 전에 %SEX%는 가방에서 화장용 펜을 꺼내고 다른 손으로 어깨를 눌렀다."
    - "「잠깐─」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「안 기다려요!」"
    - "펜 끝이 얼굴에 닿자마자 %SEX%는 소리 내 웃었다."
    - "차가운 감촉이 이마에서 코끝으로, 코끝에서 볼로 미끄러졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여기 한 획 더…… 음…… 이쪽도……」"
    - "%YOU%은(는) 눈을 감고 %SEX%가 얼굴 가득 솜씨를 발휘하는 것을 느꼈다. 가끔 멈춰 살펴보다가 다시 펜을 움직였다."
    - "「이제 됐어?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「서두르지 마세요. 거장의 작품에는 시간이 걸려요~」"
    - "조금 더 시간이 지났다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자, 눈 뜨고 이 고양이의 걸작을 보세요~」"
    - "%SEX%는 펜을 넣었다. 목소리에는 뿌듯함이 가득했다."
    - "%YOU%이(가) 눈을 뜨자 %SEX%가 거울을 들었다. 그 안에 %YOU%의 얼굴이 비쳤다─"
    - "이마에는 삐뚤어진 『바보』, 코끝에는 검은 칠, 양 볼에는 수염이 세 가닥씩, 턱에는 고양이 발바닥 자국이 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하하하하하하─ 트레이너 쌤, 고양이가 됐어요! 왕바보 고양이!」"
    - "%YOU%은(는) 비친 자기 얼굴을 바라보다가 웃느라 붉어진 %SEX%의 얼굴을 보았다."
    - "「취향 참 독특하네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「벌은 아직 안 끝났다냥~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다음은 같이 과자 받으러 가는 거예요!」"
    - "%YOU%은(는) 잠깐 멈칫했다."
    - "「내가? 지금? 이 얼굴로?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네!」"
    - "%SEX%는 당연하다는 듯 고개를 끄덕였다. 꼬리가 뒤에서 흔들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 분장 아주 좋아요. 사방을 깜짝 놀라게 할 거다냥!」"
    - "그렇게 말하며 %SEX%는 이미 입구까지 끌고 갔다. 문을 밀자 밤바람에 바깥의 희미한 소란이 실려 들어왔다."
    - "%SEX%가 돌아서서 %YOU%을(를) 보았다. 복도 불빛 아래 고양이 귀 머리띠가 흔들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가요, 가요. 꼬마들한테 보여 주자고요. 이게 진짜 고양이 요괴 콤비라고~」"

cl_christmas:
  title: "크리스마스"
  lines:
    - "크리스마스의 상점가는 온통 장식 전구로 반짝였고, 공기에는 군밤과 따뜻한 와인 향이 감돌았다."
    - "%YOU%은(는) 세이운 스카이에게 손목을 잡힌 채 인파 속을 힘겹게 나아갔다."
    - "오늘 %SEX%는 두꺼운 유백색 외투에 목도리를 느슨하게 두르고 있었다. 한 손으로 이쪽을 끌고, 다른 손에는 갓 산 사과 사탕을 들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤! 저기, 저기요!」"
    - "%YOU%은(는) %SEX%가 가리킨 곳을 보았다─ 어린 여자아이들로 가득한 장신구 가게였다. 진열장에는 순록 머리띠와 산타 모자가 걸려 있었다."
    - "십 분 뒤, %YOU%은(는) 머리에 빛나는 순록 뿔을 달고 가게를 나왔다."
    - "세이운 스카이가 뒤따라 나왔다. 머리의 미니 산타 모자 끝에 달린 작은 털방울이 %SEX%의 걸음에 맞춰 통통 흔들렸다."
    - "몇 걸음 가더니 %SEX%는 다시 따뜻한 와인을 파는 노점 앞에 멈췄다. 주인이 잔에 계피 막대를 꽂고 있었고, 향기가 멀리까지 퍼졌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음~ 좋은 냄새! 그런데 줄이 길다……」"
    - "%SEX%는 고개를 기울여 긴 줄을 보고, %YOU%을(를) 돌아보며 짓궂게 웃었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「트레이너 쌤, 줄 서 계세요. 세이는 저쪽부터 보고 올게요. 돌아오면 딱 마실 수 있겠네요.」"
    - "%YOU%이(가) 대답하기도 전에 %SEX%는 인파 속으로 파고들었다. 산타 모자가 불빛 속에서 한 번 흔들리고 사라졌다."
    - "%YOU%은(는) 이십 분을 기다려 따뜻한 와인 두 잔을 들고 %SEX%를 찾았다. %SEX%는 털모자를 파는 작은 노점 앞에 쪼그려 앉아 있었다."
    - "손에는 털모자가 두 개 있었다─ 하나는 분홍색 고양이 귀 모자, 다른 하나는 평범한 빨간 산타 모자였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응? 오셨어요? 수고하셨어요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「상으로 하나 드릴게요. 골라 보세요!」"
    - "%SEX%는 와인을 먼저 땅에 내려놓고 모자 두 개를 들어 보였다."
    - "「뿔은 이미 샀잖아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그건 크리스마스 선물로는 너무 성의 없으니까 하나 더요. 고양이 귀가 쌤한테 어울릴 것 같은데.」"
    - "%YOU%은(는) 귀여운 고양이 귀를 보고 조금 부끄러워졌다."
    - "「음…… 빨간 걸로 할게.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에─」"
    - "%SEX%는 말끝을 늘이면서도 빨간 모자를 손에 안겨 주었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「알았어요─ 쌤 원하시는 대로 해요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고양이 귀가 어울릴 거라고 생각했는데~」"
    - "그러고는 일어나서 오래 쪼그려 앉아 저린 다리를 두드렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「얼른 가요. 앞에도 가게가 많이 있어요.」"
    - "%SEX%가 %YOU%의 손을 잡았다. %SEX%의 보폭에 맞춰 걸었다."
    - "머리 위에서 장식 전구가 반짝였다. 손안에 든 %SEX%의 손가락은 따뜻하고 부드러웠다."
    - "%YOU%은(는) 갑자기 한 가지를 떠올렸다."
    - "와인 놓고 왔잖아!"


# プレイヤー誕生日 ターン開始時 好感200超で発火
ws_happy_birthday:
  title: "생일 축하해요!!!"
  lines:
    - "최근의 바쁜 업무로 %YOU%은(는) 몸도 마음도 지쳐 있었다."
    - "「하아…… 이 더미 다 고치면 또…… 열 더미……」"
    - "「요즘 일이 너무 많아…… 오후엔 세이운 스카이 훈련도 있는데……」"
    - "「점심은…… 샌드위치나 사 먹을까……」"
    -
    - "오후─"
    - "%YOU%은(는) 제시간에 트레이너실 앞에 도착했다. 세이운 스카이가 늦지 않기를 바라며 문을 열었다."
    - "펑!!!"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「생일 축하해요! 트레이너 쌤!!!」"
    - "「윽!」"
    - "%YOU%이(가) 문을 여는 순간 폭죽의 색종이가 쏟아졌다. 갑작스러운 소리에 %YOU%은(는) 그 자리에서 굳어 버렸다."
    - "%YOU%은(는) 방을 둘러보았다. 화려한 장식은 없었지만 탁자에 커다란 생일 축하 팻말이 서 있었고, 옆에는 모양은 다소 아쉬워도 재료를 아낌없이 넣은 케이크가 있었다."
    - "(생일?)"
    - "(아, 오늘 내 생일이구나……)"
    - "(스카이 녀석…… 기억하고 있었네……)"
    - "(이 케이크 모양 독특한데……)"
    - "(위에 올라간 건……)"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응? 저기─ 트레이너 쌤─ 여보세요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이상하네, 반응이 없어요. 폭죽이 머리에 맞았나?! 트레이너 쌤!!!」"
    - "큰일을 냈다고 생각한 세이운 스카이는 급히 %YOU%의 어깨를 흔들었다."
    - "「잠깐, 잠깐─ 스카이, 스카이, 괜찮아. 잠깐 멍해졌을 뿐이야……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음…… 정말, 괜찮으시면 반응 좀 해 주세요……」"
    - "세이운 스카이는 못마땅하다는 듯 %YOU%의 얼굴을 주물렀다."
    - "「하하, 미안, 미안. 요즘 바빠서……」"
    - "「스카이, 고마워. 기쁘다……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「음…… 그러게요…… 눈 밑이 그렇게 어두운 걸 보니 요즘 힘드셨죠……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「얼른 케이크 드세요! 직접 만들었어요~ 모양은 좀 부족할지 몰라도 재료는 아끼지 않았다고요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘은 느긋하게 쉬세요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 마지막으로 한 번 더─ 생일 축하해요! 트레이너 쌤!」"







