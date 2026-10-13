# @file メジロブライト - 育成
# @author KUN
train:
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「네~ 이미 준비해 두었답니다~」"
      - "여전히 느긋한 어조였지만, 준비는 무척 빨랐다."
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%과 함께라면, 어떤 트레이닝이든 문제없어요~」"
  - random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%, 함께 힘내요~」"
  - if: era.get('love:74') === 100
    random: true
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%~ 저희 느긋하게 시작해 볼까요~」"

# --------------------------------
# 主線
# --------------------------------
# 募集後
at_my_side:
  title: "당신이 제 곁에 있기에"
  lines:
    - "맑은 바람이 안뜰을 지나가며 약간의 한기를 불러왔다."
    - "%CHARA%는 얼굴에 붙은 머리카락을 가볍게 쓸어 넘기며, 아무도 없는 나무 구멍을 멍하니 바라보고 있었다."
    - acc: 1
      content: "「무슨 생각 해?」"
    - "%YOU%의 목소리에 회상에서 깨어난 %CHARA%가 고개를 돌렸으나, 그 얼굴에는 평소의 미소가 보이지 않았다."
    - "다시금 그 나무 구멍으로 시선을 돌리며, %CHARA%가 조용히 입을 열었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여기는 %UMA%들이 마음속 깊은 이야기를 털어놓는 곳이라는 걸, %CALLNAME%도 알고 계시지요?」"
    - "그 사실은 %YOU%도 당연히 알고 있었다. 아니, 학원 전체가 다 아는 상식에 가까웠다."
    - "하지만 %CHARA%의 눈동자 속에는 다른 무언가가 깃들어 있었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「예전에 제가 집에 있을 때, 집사 분께 들은 적이 있답니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「가끔 이곳에서, 무척이나 슬퍼하는 %ELDER_SISTER%들이 계속해서 이름을 외치는 모습을 보았다고요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자주 그런 일이 있었다고 들었어요……」"
    - "%CHARA%의 목소리를 들으며, %YOU%은(는) 나이가 지긋했던 메지로 가문의 집사를 떠올렸다."
    - "그렇다면 %SEX%가 말하는 이들은 필시 메지로 가문의 어느 대선배들이리라."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그래서인지, 가끔 저도 여기서 보인답니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 직접 본 적은 분명 없는데도, 자꾸만 보여요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALL_27%、%CALL_64%、%CALL_13%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%SEX%들이 이곳에서 울고 있는 모습이, 자꾸만 눈에 밟히네요.」"
    - "나무 구멍에서 %YOU%에게로 시선을 옮긴 그녀가 가볍게 눈을 깜빡였다."
    - "짧은 침묵 속에서 눈을 맞춘 후, %CHARA%의 표정은 한결 홀가분해진 듯했다."
    - "마치 어떤 망상으로부터 해방된 것처럼, 다시금 말랑말랑한 미소를 머금었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당신이 제 곁에 계셔주신다면, 저는 이곳에서 울지 않아도 되겠죠?」"
    - "%YOU%의 조금 벙찐 얼굴을 바라보며, 그녀는 한없이 순수한 미소를 지어 보였다."

# ジュニア級6月3週、ときめき以上、同チームにメジロなし
mejiro_tea:
  title: "메지로 가문의 티타임"
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 메지로 저택에 오시지 않겠나요?」"
    - "여느 때와 다름없는 평범한 날, %CHARA%가 갑작스럽게 %YOU%을(를) 찾아왔다."
    - "서류 작업을 막 끝낸 참에 들은 %CHARA%의 초대에 %YOU%은(는) 어쩐지 현실감이 들지 않았다."
    - acc: 1
      content: "「……어? 내가?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네에~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%를 %ELDER_SISTER%들께 소개해 드리고 싶어서요오~」"
    - "%CHARA%의 얼굴에 가득한 밝은 미소에는 거짓말이나 장난의 기색이 전혀 없었다."
    - acc: 1
      key: relation
      content: "「갈 수야 있긴 한데……」（호감도+8）"
    - acc: 2
      content: "「기꺼이 갈게! 꼭 데려가 줘!」（호감도+4, 애정도+1）"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「좋아요~」"
    - "그리 오래 기다리지 않아 문밖에서 고급 승용차의 엔진 소리가 들려왔다."
    - "마침 일이 적은 날이라 시간을 내어 %CHARA%와 함께 뒷좌석에 올랐다."
    - "메지로 저택의 정원에 도착해 이미 테이블에 앉아 기다리고 있는 %UMA%들을 본 순간, %YOU%의 가슴이 덜컥 내려앉았다."
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - "「어라, 브라이트의 트레이너 %SIR%인가요?」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「저희 다과회에 온 걸 환영해요~」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「아, 그렇게 긴장할 필요 없어요. 편하게 있으셔도 괜찮으니까요.」"
    - "두 %YOUNG_LADY%는 원형 테이블 맞은편의 빈 의자 두 개를 가리켰다."
    - "눈앞의 테이블에 차려진 과자와 찻주전자를 바라보며, %YOU%의 몸짓은 어딘가 부자연스럽게 굳어버렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「자아~ %CALLNAME%, 이쪽에 앉으세요~」"
    - "테이블 쪽으로 종종걸음 친 %CHARA%가 바깥쪽 의자를 내어주었다."
    - "평소의 느긋한 모습과 달리, 활기찬 몸짓으로 %YOU%을(를) 이끌어 자리에 앉혔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 홍차 한 잔 드시겠어요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「여기 있는 단 과자를 곁들이면 무척 맛있답니다~」"
    - acc: 1
      content: "「아, 정말이네……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그쵸~ 마시고 나면 몸이 따스해지는 기분이 들 거예요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 참고로 이건 도베르가 가르쳐 준 거랍니다~」"
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - "「……두 사람, 사이가 참 좋군요.」"
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - "「하지만 메지로 가문의 일원으로서, 밖에서는 그런 행동을 삼가 주시겠어요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「밖에서요?」"
    - "%YOU%의 곁에 앉아 있던 %CHARA%는 무슨 말인지 전혀 이해하지 못한 듯 멍한 표정을 지었다."
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「맥퀸, 그렇게 말해도 브라이트는 못 알아들어……」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「아무튼, 너무 바짝 붙지 말라는 뜻이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아~ 그런 거였군요~」"
    - "뒤늦게 깨달았다는 듯 고개를 끄덕인 %CHARA%는 그제야 %YOU%에게 밀착했던 손을 떼어냈다."
    - "자세를 바르게 고쳐 앉으니 비로소 %YOUNG_LADY%다운 기품이 묻어났다."
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「자, 이제 슬슬 레이스에 대해 이야기해 볼까?」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「브라이트 너도 너무 트레이너 선생님만 귀찮게 굴지 말고~」"
    - "그 말을 듣고 나서야 %YOU%은(는) 데뷔전이 코앞으로 다가왔다는 사실을 실감했다."
    - "%YOU%는 %CHARA%의 실력을 크게 걱정하지 않았지만, 그래도 조금은 마음이 흔들렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 맞다. 레이스라고 하니 생각난 건데요——」"
    - "조금 전까지 감돌던 졸린 눈을 지우고, 그녀는 사뭇 진지한 어조로 말하기 시작했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저는 %CALL_13%의 달리기를 무척 좋아한답니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「달리는 그 자태가 너무나도 아름다워서……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우아하고 화려하면서도 이상적이라, 넋을 잃고 보게 돼요~」"
    - "빈말이나 아첨이 아닌, 진심 어린 감탄이 묻어나는 목소리였다."
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「아, 무슨 뜻인지 알 것 같아!」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「맥퀸이 달릴 때의 모습은 확실히 정말 예쁘지!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후후, %CALL_27%의 달리기도 무척 좋아하고요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「강인하고 힘차서, 마치 대지를 딛고 도약하는 것 같아서 말이죠……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이기고 싶어 하는 %ELDER_SISTER%의 열망이 그대로 전해지는 느낌이에요!」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「그건 너무 과찬이야……」"
    - "맞은편의 두 선배는 쑥스러운 듯 찻잔을 들어 얼굴을 슬그머니 가렸다."
    - "오직 %CHARA%만이 들고 있던 잔을 내려놓고 진지하게 고개를 들었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만, 늘 저는 느릿느릿한 모습 탓에 이렇다 할 성과를 보여드리지 못해서……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「많은 분께서 그런 제게 실망하셨죠. 하지만……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……저도 %ELDER_SISTER%처럼 달리고 싶어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「사람들의 마음을 세차게 뛰게 만드는, 그런 레이스를요.」"
    - acc: 1
      content: "「가슴을 뛰게 만드는 레이스라……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제 자신을 증명하기 위해서, 그리고 동시에……」"
    - "맞은편 두 사람의 시선을 의식한 듯, %CHARA%는 느긋하게 고개를 돌려 %YOU%을(를) 정면으로 바라보며 옷깃을 여몄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저 역시 메지로 가문의 명예를 위해……」"
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - "「잠깐만요, 브라이트.」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「맥퀸?」"
    - "갑자기 %CHARA%의 말을 끊은 %M_NAME%는 손에 들고 있던 홍차를 내려놓았다."
    - color: %M_COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - "「브라이트…… 당신은 우선 당신만의 스타일대로 달리면 돼요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %M_NAME%
        - "「생각이 너무 많으면 오히려 컨디션에 독이 되는 법이죠.」"
    - acc: 1
      content: "「맞아, 우선은 네 모습 그대로 해보자.」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「두 사람 말도 일리가 있어, 브라이트.」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「우선은 당장 눈앞의 레이스를 차근차근 준비하자.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%ELDER_SISTER%…… %CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네에, 알겠습니다!」"
    - "조금 전의 진지하고 엄숙했던 표정을 거두고, 그녀는 다시금 특유의 나른한 미소를 되찾았다."
    - "긴장이 풀려서인지, 그녀의 손이 자연스럽게 %YOU%의 옷자락을 가만히 쥐어 왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……앞으로의 시간들도 잘 부탁드려요오, %CALLNAME%~」"
    - "%CHARA%의 맑은 눈망울과 마주하자, %YOU%의 입가에도 자연스레 미소가 번졌다."
    - acc: 1
      content: "「좋아, 나만 믿어!」"
    - "덧붙이자면, 남은 다과들은 평화로운 분위기 속에서 %M_NAME%이 전부 맛있게 해치웠다."

# メイクデビュー前
begin_race:
  - "데뷔전의 순간이 다가오자, %CHARA%는 게이트 입구에 서서 눈앞의 트랙을 바라보며 조용히 두 눈을 감았다."
  - "가볍게 심호흡을 한 번 하고 다시 눈을 떴을 때, 그녀의 얼굴에서 평소의 나른한 기색은 찾아볼 수 없었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「데뷔전……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「마침내, 다가왔군요.」"
  - acc: 1
    content: "「그렇게 긴장할 필요 없어.」"
  - acc: 2
    content: "「네 방식대로 달리고 오면 돼.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네에, 명심하겠습니다!」"
  - "평소의 느긋한 템포는 완전히 지워버린 채, 그녀는 당당하게 전장을 향해 발걸음을 내디넜다."
  - "%CHARA%라는 이름의 새로운 별이, 트랙 위로 피어나기 시작했다."

# メイクデビュー後
begin_race_end:
  - "마지막으로 결승선을 통과하고 나서야 %CHARA%는 비로소 현실로 돌아온 듯했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「1착…… 후와아~」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저, 해냈어요!」"
  - "전광판에 커다랗게 박힌 1착이라는 글자를 보며, %CHARA%는 두 손을 번쩍 들고 아이처럼 기뻐했다."
  - "오롯이 %SEX%만의 전설이 이제 막 막을 올린 것이다——"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALL_27% 언니…… %CALLNAME%……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저, 앞으로도 정말 열심히 할게요!」"

# ジュニア級8月1週、ライアンが育成中でない
inherit:
  title: "그 의지를 이어받아"
  lines:
    - "데뷔전이 끝난 후, %CHARA%와 %YOU%은(는) 다시 평화로운 트레이닝 일상으로 돌아왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 오늘도 고생 많으셨어요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 혹시 같이 돌아가실 건가요?」"
    - "트레이닝 시간이 끝나고 %YOU%이(가) 훈련장을 나서려던 찰나, 누군가가 뒤에서 말을 걸어왔다."
    - "%YOU%가 돌아보자 %R_NAME%가 천천히 앞으로 다가왔다."
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「아, 혹시 방해한 걸까?」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「두 사람 시간을 뺏어서 미안해. 하지만…… 아무래도 꼭 해두고 싶은 말이 있어서 말이지.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALL_27% 언니?」"
    - acc: 1
      content: "「해두고 싶은 말이라니?」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「네, 실은……」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「미안해, 브라이트. 트레이너 %SIR%하고 잠깐 둘이 이야기해도 될까?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「에에? %CALLNAME%만 괜찮으시다면야……」"
    - "%CHARA%의 약간 머뭇거리는 허락이 떨어지자마자, %R_NAME%는 서둘러 %YOU%을(를) 이끌고 몇 걸음 물러섰다."
    - "그 자리에서 고개를 갸웃하는 %CHARA%를 한번 보고는, %YOU% 곁으로 다가가 작은 목소리로 이야기를 시작했다."
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「사실은 브라이트에 관한 이야기인데요……」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「예전에 브라이트가 제 달리기 스타일을 좋아한다고 말했던 거 기억하시나요?」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「과거의 저는, 솔직히 누군가의 동경 대상이 될 만한 우마무스메는 아니라고 생각했거든요.」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「맥퀸처럼 우아하지도 않고, 파머처럼 대범하지도 못하니까……」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「레이스에서도 매번 온 힘을 다하긴 했지만 늘 한 끗이 모자랐고요.」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「하지만 브라이트는 늘 제게 자기 생각을 말해주면서 한결같이 지지해 줬어요. 덕분에 저도 저 자신을 믿을 수 있게 된 거죠.」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「그런 브라이트 선택한 트레이너시니까, 분명 그럴 만한 확실한 이유가 있어서겠죠?」"
    - acc: 1
      content: "「확실한 이유라니……」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「그러니까 저희 브라이트, 앞으로도 잘 부탁합니다!」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「……그리고, 이건 그냥 제 작은 소망인데, 정말로……」"
    - "말을 멈춘 %R_NAME%가 고개를 돌려 %CHARA%의 동태를 살폈고, 들리지 않는다는 것을 확인한 뒤에야 말을 이어 나갔다."
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「부디 브라이트를 이기게 해 주세요. 부탁드립니다.」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「비록 그때의 저는 해내지 못했지만…… 브라이트만큼은 꼭 해내기를 바라고 있어요.」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「그야 %SEX%는 내가 자랑하는 %YOUNGER_SISTER%인걸. 에헤헤~」"
    - acc: 1
      content: "「……조금 어려울지도 모르겠는데?」"
    - acc: 2
      content: "「무슨 뜻인지 알았어, 내게 맡겨줘.」"
    - color: %R_COLOR%
      content:
        - fontWeight: bold
          content: %R_NAME%
        - "「고마워요…… 자, 그럼 이제 브라이트를 너무 오래 기다리게 하지 말죠.」"
    - "미소를 거둔 %R_NAME%이 %YOU%의 어깨를 툭툭 치며, 등을 떠밀어 %YOU%을(를) 다시 %CHARA%의 곁으로 돌려보냈다."
    - "시원섭섭한 표정으로 떠나가는 %R_NAME%의 뒷모습을 보며, %YOU%은(는) 가볍게 한숨을 내쉬었을 뿐 선뜻 입이 떨어지지 않았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%？」
    - acc: 1
      content: "「으음…… 이걸 어떻게 설명해야 하나.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……혹시 레이스에 관한 이야기인가요?」"
    - "마치 %YOU%의 속마음을 꿰뚫어 본 것처럼, 그녀는 생글생글 웃으며 운을 뗐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 제 짐작이 맞았군요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALL_27%라면……제가 어떤 레이스에 나갔으면 한다는, 그런 이야기겠지요?」"
    - acc: 1
      content: "「라이언에 대해 참 잘 아네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALL_27%의 레이스는 전부 기억하고 있어요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그야 %CALL_27%는……제가 가장 좋아하는 가족인걸요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%ELDER_SISTER%를 위해서도, 그리고 저 자신을 위해서도…… 반드시 이기고 싶어요.」"
    - acc: 1
      content: "「그렇구나.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네에~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 앞으로도 잘 보살펴주세요, %CALLNAME%~」"
    - "부드러운 미소와 함께, %CHARA%가 %YOU%의 손을 살포시 쥐어 왔다."
    # 好感+20

# ジュニア級11月1週
my_way:
  title: "스스로 선택한 길"
  lines:
    - "트레이닝이 끝났음에도 %CHARA%는 평소처럼 곧장 떠나지 않고, 훈련장 가장자리에 조용히 멈춰 서서 다른 이들이 달리는 모습을 가만히 지켜보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……오늘도 다들, 참 열심히네요.」"
    - "눈앞에서 매일같이 땀 흘리는 %UMA%들을 바라보며, %CHARA%의 꼬리가 살랑살랑 가볍게 흔들렸다."
    - acc: 1
      content: "「왜 그래? 기분이 별로야?」"
    - "%CHARA%의 앞에 선 %YOU%은(는) 굳이 신체적 접촉을 하지 않은 채, 그녀의 눈앞에서 손을 가볍게 흔들어 보였다."
    - "귀를 쫑긋 움직인 %SEX%는 그제야 천천히 고개를 돌려 %YOU%의 얼굴을 바라보았고, 이내 평소와 다름없는 표정을 지어 보였다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아니랍니다~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그저, 조금만 더 달리고 싶어서 그랬어요.」"
    - acc: 1
      content: "「너 거짓말 진짜 못하네. 딱 보면 다 티 나거든?」"
    - acc: 2
      content: "「내게 숨겨야 할 거짓말이 뭐가 있을까?」"
    - "%YOU%의 말에 %CHARA%는 순간적으로 조금 당황하더니, 이내 부끄러운 듯 뺨을 슥슥 긁적였다."
    - acc: 1
      content: "「대체 무슨 생각을 하고 있었던 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「들켜버렸네요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……요즘 들어, 무언가 원동력이 부족해진 기분이라서요.」"
    - "트레이닝을 게을리한 적은 단 한 번도 없었음에도, %CHARA%는 자신이 충분히 진지하게 임하지 못하고 있다며 자책 섞인 말을 내뱉었다."
    - "어느덧 석양이 빠르게 가라앉았고, 훈련장의 다른 %UMA%들도 저마다의 일정을 마치고 떠날 채비를 하고 있었다."
    - acc: 1
      content: "「혹시 지친 거야?」"
    - "이미 텅 비어버린 트랙에서 시선을 거둔 그녀는 멍하니 자신의 두 다리를 내려다보았다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아마도 그렇겠지요, 아하하……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그냥 아주 조금 피곤해진 것뿐이에요……」"
    - "%CHARA%의 얼굴에 서린 낯선 그늘을 보며, %YOU%은(는) 지난 일련의 상황들과 다른 선배 우마무스메들에게 전해 들었던 가문의 이야기들을 떠올렸다."
    - "어쩌면 메지로 가문이 짊어진 기나긴 역사가 %CHARA%에게 가볍지 않은 압박감으로 다가왔을지도 모른다."
    - acc: 1
      content: "「집안에서 오는 압박감이 큰 거야?」"
    - acc: 2
      content: "「그런 부담감을 짊어지고 버티느라 고생 많았어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇지 않답니다.」"
    - "예상 밖의 단호한 부정이었다."
    - "흐릿했던 그녀의 눈동자에 점차 힘이 실리더니, 고개를 들어 %YOU%의 눈을 똑바로 응시했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%ELDER_SISTER%들이 과거에 헌신하여 일궈낸, 메지로 가문의 모든 것들.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저는 가문의 모든 분을 진심으로 사랑하니까, 다들 이룩하신 그 영광스러운 역사를 계속해서 이어 나가고 싶어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니 쓰러지지 말고 나아가야만 해요……!」"
    - acc: 1
      content: "「그렇다면 나 역시 뒤처지지 않도록 더 노력해야겠네.」"
    - "%YOU%의 든든한 대답을 들은 %CHARA%의 얼굴에 마침내 특유의 몽글몽글한 미소가 다시금 피어올랐다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네에! %CALLNAME%!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「함께 발맞추어 나아가요!」"
    # 好感+15

# ホープフルステークス前
hope_sta:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……후와.」"
  - "평소처럼 레이스가 시작되기 전에 자신의 호흡을 가다듬는다."
  - "평소의 둥실둥실한 느낌을 흉내 내보려 하지만, 좀처럼 진정되지 않는다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「으음…… 몸의 떨림이 멈추지 않네요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「평소에는 이러지 않았는데 말이죠……」"
  - acc: 1
    content: "「긴장하고 있어?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아, %CALLNAME%~」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……어쩌면 정말로 긴장하고 있는 걸지도 모르겠네요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그도 그럴게, 이번이 주니어 시즌 마지막 G1 레이스니까요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「긴장하는 것쯤은…… 당연한 일이에요.」"
  - acc: 1
    content: "「그렇게 조급하게 생각할 필요 없어.」"
  - "%CHARA%의 귀가 몇 번 쫑긋거리며, %YOU%의 목소리에 진지하게 귀를 기울인다."
  - "꼬리가 다소 불안한 듯 좌우로 살랑거리고, 그에 맞춰 양손의 손가락도 끊임없이 꼼지락거린다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「조급한 생각…… 말인가요?」"
  - acc: 1
    content: "「평소의 너라면 어떻게 할지 그것만 생각하면 돼.」"
  - "%YOU%의 말대로, 지금은 그저 평소의 느긋한 리듬을 잃어버렸을 뿐이다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「평소라면……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「홍차를 한 잔 준비했겠지요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「레이스가 끝난 뒤에 도베르 일행과 함께……」"
  - acc: 1
    content: "「그럼 지금 기분은 어때?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「기분이 어떤가, 말인가요?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「정말로 마음이 차분해졌어요……」"
  - "떨림이 멈춘 자신의 양손을 바라보며, %CHARA%는 잠시 멍하니 있는다."
  - "하지만 이내, 다시 미소를 짓는다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「정말로 평소처럼 돌아왔네요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「고마워요, %CALLNAME%.」"
  - "평소와 다름없는 모습으로 자리에서 일어나, 차분하게 경기장으로 걸어 나간다."

# ホープフルステークス勝利
hope_sta_win:
  - "평정심을 유지하며, 별다른 위기 없이 연말 마지막 전투의 승리를 거두었다."
  - "온몸이 땀으로 흠뻑 젖었음에도, 얼굴에는 여전히 특유의 둥실둥실한 미소가 머물러 있다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%~ 저 이겼어요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「평정심을 유지하는 건 역시 멋진 일이네요.」"
  - "평정심을 유지한 채 승리한 %CHARA%가 느릿느릿 %YOU%의 곁으로 돌아온다."
  - acc: 1
    content: "「평소처럼 했던 거네, 그렇지?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네, 맞아요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아, 평소처럼이라고 하니……」"
  - "발소리를 죽여 %YOU%의 곁을 지나쳐 대기실로 쏙 들어간다."
  - "땀에 젖은 옷을 벗으며, 가볍게 웃는 얼굴로 %YOU%을(를) 바라본다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「위닝 라이브가 끝나면 같이 다과회에 가요.」"

# ホープフルステークス敗北
hope_sta_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「후와……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「다들 정말 대단하시네요……」"
  - "조금 낙담한 듯 코스 위에 서서 하늘을 바라보며, 땀방울이 흘러내리도록 내버려 둔다."
  - "얼굴의 물기를 닦아내며 지하 통로 쪽을 바라본다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아……」"
  - "저 멀리 입구에 선 %YOU%이(가) 평소와 다름없는 눈빛으로 지켜보고 있다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%, 아직 보고 계시는 건가요?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……평정심을 유지할 수 있도록 더 노력해야겠어요.」"

# クラシック級3月3週
light:
  title: "마음속에 밝혀진 자신감"
  lines:
    - "클래식 삼관의 첫 번째 레이스가 다가오고 있지만, %CHARA%는 트레이닝 공간에 나타나지 않고 집무실에서 %YOU%을(를) 기다리고 있다."
    - "%YOU%이(가) 방금 준비를 마친 서류를 들고 나오자마자, %CHARA%에게 등을 떠밀려 학원 밖으로 걸어 나가게 된다."
    - acc: 1
      content: "「저기, %CHARA_FULL%?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, %CALLNAME%~」"
    - "%YOU%의 목소리에 대답은 하면서도, 손으로는 여전히 등을 계속 앞으로 밀어댄다."
    - "정문을 지나 뒷산으로 향하는 시점에서야 비로소 목적지가 어디인지 눈치챈다."
    - acc: 1
      content: "「신사인가…… 과연 그렇군.」"
    - acc: 2
      content: "「너도 이런 걸 신경 쓸 줄은 몰랐네.」"
    - "우마무스메들이 마음의 위안을 얻기 위해 자주 찾는 신사를 보며, %YOU%도 이번 걸음의 이유를 대강 짐작한다."
    - "토리이를 통과하고 나서야 %CHARA%가 조심스럽게 입을 연다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「죄송해요, %CALLNAME%.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그저 누군가와 함께 오고 싶었을 뿐이에요. 역시…… 조금은 긴장되니까요.」"
    - "언제나 안정적이던 표정에 미세한 변화가 생기며, 눈치를 보듯 %YOU%을(를) 흘금거린다."
    - acc: 1
      content: "「안심해, 대길이 나오지 않더라도 난 네가 이길 거라고 믿어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네!」"
    - "자신 없어 하던 표정이 뺨을 타고 번진 붉은 홍조 뒤로 숨어버리고, 그에 맞춰 꼬리도 신이 난 듯 좌우로 세차게 흔들린다."
    - "가볍게 심호흡을 한 뒤, %CHARA%는 돌아서서 눈앞의 신당을 바라보며 조심스럽게 동전 한 닢을 던진다."
    - "댕그랑──"
    - "방울의 청아한 소리가 울려 퍼지고, %CHARA%는 차분하게 점괘 가판대에서 나무 막대 하나를 뽑아 든다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어머나~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이거, %CALLNAME%의 행운을 빌린 게 아닐까요.」"
    - "가느다란 나무 막대를 양손으로 쥔 채 %YOU%의 눈앞에 보여주며 자랑한다."
    - acc: 1
      content: "「잘됐네, 대길이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러게요~ %CALLNAME% 덕분이에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼, 이제 돌아갈 준비를 할까요.」"
    - "%CHARA%의 가벼운 발걸음을 바라보며 %YOU%도 자연스레 미소를 짓는다."
    - acc: 1
      content: "「벌써 돌아가는 거야?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네~ 겨우 이 점괘 하나에만 의지할 수는 없으니까요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저도 계속해서 트레이닝에 힘써야만 해요!」"
    - "그 표정을 바라보며 %YOU%도 %CHARA%와 함께 웃으며 트레센 학원으로 발걸음을 돌린다."
    # 好感+20

# 皐月賞
sats_sho:
  - "삼관의 첫 레이스, 사츠키상."
  - "평소에는 멍하니 있던 %CHARA%가 눈앞의 경기장을 바라보며 평소와는 사뭇 다른 분위기를 풍긴다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「삼관……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%ELDER_SISTER%들이 바라보던 목표를, 이제 제가……」"
  - acc: 1
    content: "「준비는 됐어?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네, %CALLNAME%~」"
  - "진지하게 정면을 응시하며, 양손을 꽉 쥐었다가 다시 가볍게 푼다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이미 준비는 끝났어요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「메지로의 이름을, 저는 반드시 훌륭하게 이어 나가겠어요!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「부디 저를 똑똑히 지켜봐 주세요, %CALLNAME%.」"
  - "통로 입구에 서서, %YOU%이(가) 있는 방향을 돌아본다."
  - "진지함이 서린 얼굴 위로, 전장으로 향하는 자의 미소가 피어오른다."

# 皐月賞勝利
sats_sho_win:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이겼어요…… 제가 이겼다고요! %CALLNAME%!」"
  - "전광판 아래에 선 %CHARA%는 양팔을 크게 과장되게 흔들며 기쁜 듯 깡총깡총 뛰어오른다."
  - "관람석에 있는 %YOU%을(를) 향해 환호성을 지르다가, 뒤에서 다른 이가 다가와 퇴장 시간임을 상기시켜 줄 때까지 멈추지 않는다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「첫 번째 레이스, 이겼네요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「에헤헤…… 역시 %CALLNAME% 덕분이에요.」"

# 皐月賞敗北
sats_sho_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「후와……」"
  - "귀가 양옆으로 푹 처진 채, 멍한 표정으로 거대한 전광판을 바라본다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저, 지고 말았네요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%께서 그렇게나 열심히 도와주셨는데 말이죠.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%ELDER_SISTER%들께도 많은 걸 배웠는데.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저는 아직 더 노력해야겠어요……」"

# 日本ダービー
toky_yus:
  - "일생에 단 한 번뿐인 무대, 일본 더비."
  - "승부복을 갖춰 입은 %CHARA%가 %YOU%의 곁에 기댄 채, 나지막이 노래를 흥얼거린다."
  - "주변 관람석은 이미 수많은 인파로 가득 차 있으며, 모두가 이 레이스를 고대하고 있다."
  - "하지만 이 긴장감 넘치는 경기장 분위기와는 대조적으로, 시작을 앞둔 %CHARA%는 여전히 고요하기만 하다."
  - acc: 1
    content: "「슬슬 시작할 시간이야.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네~」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저도 진작에 준비를 마쳤답니다.」"
  - "%YOU%의 곁에서 떨어져, 느린 걸음으로 통로 입구까지 걸어간다."
  - "관람석으로 향하려는 %YOU%을(를) 향해 천천히 돌아서더니, 오직 자신에게만 들릴 법한 아주 작은 목소리로──"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「힘낼게요, %CALLNAME%.」"
  - "오른손을 가볍게 들어 올려 검지와 엄지를 교차하며 작은 하트를 만들어 보인다."

# 日本ダービー勝利
toky_yus_win:
  - "가장 긴 2400m 중거리 레이스에서 %CHARA%가 당당히 1위를 차지했다."
  - "메지로가의 이름을 짊어지고 역사에 자신의 발자취를 깊게 새겨 넣었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%～」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「일본 더비, 제가 이겼어요.」"
  - "다른 이들과는 분위기가 사뭇 다르게, 승리한 %CHARA%는 그 자리에 멈춰 서서 정면의 관람석을 향해 부드럽게 손을 흔들 뿐이다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「제가 이겼어요.」"

# 日本ダービー敗北
toky_yus_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「후와……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「역시 중거리는…… 트레이닝을 더 해야겠네요.」"
  - "천천히 속도를 줄여 관람석 앞에 멈춰 서더니, 한 걸음씩 %YOU%을(를) 향해 걸어온다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저, 이 정도면 열심히 노력한 걸까요?」"
  - "낙담했을지언정, 얼굴에는 여전히 아가씨다운 여유로운 미소가 감돌고 있다."

# 菊花賞
kiku_sho:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「3000m…… 처음으로 치르는 장거리 G1 레이스네요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「다들 무척 북적거리며 기대하고 있는 모양이에요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「국화상…… 저, 잘 해낼 수 있을까요?」"
  - "대기실에 앉은 %CHARA%가 자그마한 인형을 품에 안은 채 스스로에게 질문을 던진다."
  - "보드라운 얼굴에는 평소와 같은 미소가 서려 있고, 금빛 눈동자는 인형의 작은 얼굴을 비추고 있다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALL_13%도 그때는 이런 분위기 속에서 출전하셨겠지요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「정말로 대단하세요.」"
  - "바깥은 이미 관중들의 기대 섞인 소음으로 가득 차 있어, 출주하는 사람이라면 누구나 적잖은 압박감을 느끼고 있을 터이다."
  - "그럼에도 불구하고, %CHARA%는 자신만의 느긋한 리듬을 잃지 않는다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하지만 말이죠.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저도 메지로가의 일원인 데다, 이런…… 이런 거리에는 꽤 자신이 있답니다.」"
  - acc: 1
    content: "「준비가 다 된 모양이네.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그러니 물러서지 않겠어요…… %CALLNAME%.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저는 %CHARA%이니까요.」"
  - "%YOU%의 말에 가볍게 웃으며 답한 뒤, %CHARA%는 확고한 눈빛을 띤 채 삼관의 마지막 전투를 시작한다."

# 菊花賞勝利
kiku_sho_win:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「후우, 후우……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저…… 해냈어요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALL_13%님처럼 멋지게 승리했답니다.」"
  - color: %COLOR%
    content: "결승점에 멈춰 선 채, 둘 곳을 잃은 손을 가슴에 얹고 가쁜 숨을 몰아쉬며 가슴을 들썩인다."
  - color: %COLOR%
    content: "다소 피로해진 눈빛으로 관람석을 훑으며 %CALLNAME%의 모습을 찾는다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「전부 %CALLNAME% 덕분이에요……」"
  - color: %COLOR%
    content: "세차게 뛰는 심장이 진정되지 않고 가슴을 계속해서 두드려댄다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「마음속이…… 가라앉지를 않네요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「돌아가면 %CALLNAME%, 그리고 %ELDER_SISTER%들과 함께 다과회를 열어요~」"
  - color: %COLOR%
    content: "얼굴에 붉은 홍조를 띤 채, 멀리 관람석에 있는 %CALLNAME%를 가만히 바라본다."
  - if: era.get('love:74') >= 50
    lines:
      - color: %COLOR%
        content: "레이스가 끝난 지 한참이 지났음에도 가슴속의 고동은 멈추지 않는다."
      - color: %COLOR%
        content: "가슴속의 울림이 여전히 이어지고 있다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어머나……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이 느낌은 무엇일까요?」"
      - color: %COLOR%
        content: "피로한 몸 위로 미묘한 조급함이 잠시 피어올랐으나, 이내 다시 사라진다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「왜 이럴까요?」"
      - color: %COLOR%
        content: "의아한 듯 고개를 살짝 갸웃거리며 자신의 가슴팍을 내려다본다."
      - color: %COLOR%
        content: "당연히, 그저 바라보는 것만으로는 아무것도 알아낼 수 없다."

# 菊花賞敗北
kiku_sho_lose:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……지고 말았네요.」"
  - color: %COLOR%
    content: "결승점에 서서 자신의 순위를 바라본다."
  - color: %COLOR%
    content: "사소한 일에는 연연하지 않는 %CHARA%라 할지라도, 밀려드는 아쉬움은 감출 수가 없다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「스태미나가 완전히 부족했나 봐요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저 역시 메지로가의 일원인데도 이렇게 보기 흉한 모습을 보이다니……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「죄송해요…… %CALLNAME%.」"

# ステイヤーズステークス
stay_sta:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「스테이어스 스테이크스……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「3600미터의 장거리, 저……」"
  - "혼자 문가에 서 있던 %CHARA%는 벽에 기댄 채 숨을 고른다."
  - "%YOU%이(가) 문을 열고 들어와 %CHARA%의 어깨를 토닥이고 나서야 비로소 정신을 차린다."
  - acc: 1
    content: "「이거야말로 네가 잘하는 거리잖아.」"
  - "비록 G2 레이스에 불과하지만, G1 못지않게 정직한 체력을 요구하는 곳이다."
  - "장거리 레이스에 특화된 %CHARA%에게 있어서, 이곳이야말로 자신을 위한 무대이다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그렇네요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「결국 메지로가의 강점은 바로 이것이니까요.」"
  - "어깨를 가볍게 풀고 나더니, 몸을 돌려 대기실 문을 밀어젖힌다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「어떤 레이스든 저는 전력을 다할 것입니다.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%, 똑똑히 지켜봐 주세요.」"

# シニア級4月2週
for_tenn_spr:
  title: "텐노상에 대한 집착"
  lines:
    - "텐노상이 임박함에 따라 %CHARA%의 트레이닝 시간도 한층 더 늘어났다."
    - "어느 날 추가 트레이닝 시간이 끝났을 때, %CHARA%는 곧바로 자리를 떠나지 않고 가만히 멈춰 서 있는다."
    - "트레이닝 장소에는 사람의 흔적이 드물었고, 가장 바깥쪽 코스에는 오직 %YOU%과(와) %CHARA% 두 사람만이 남아 있다."
    - acc: 1
      content: "「많이 힘들어?」"
    - acc: 2
      content: "「요 며칠간 고생 많았어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, %CALLNAME%도 고생 많으셨습니다.」"
    - "다소 숨을 헐떡이면서도 여전히 미소를 잃지 않는다."
    - "어느덧 노을이 지기 시작하는 하늘을 배경으로, 금빛 눈동자가 %YOU%의 모습을 비춘다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%…… 오늘 저와 함께 조금 걸어주시겠어요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저, %CALLNAME%와 이야기를 나누고 싶습니다.」"
    - "눈을 내리깐 %CHARA%를 보고, %YOU%는 군말 없이 %SEX% 곁으로 갔다."
    - "두 사람은 보폭을 맞춰 트레이닝장을 벗어나 나란히 길을 걷기 시작한다."
    - acc: 1
      content: "「몸 상태는 어때, 괜찮아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무 문제 없어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%는 정말 다정하시네요…… 하지만 솔직하게 말씀하셔도 괜찮답니다.」"
    - "화제를 바꾸려던 %YOU%은(는) 잠시 멈칫했으나, 이내 원래의 표정으로 돌아온다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「봄 텐노상……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저, 반드시 이겨내겠어요.」"
    - acc: 1
      content: "「두렵지는 않아?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……아니요, 전혀 그렇지 않아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이 레이스는 메지로가의 오랜 숙원입니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「줄곧 알고 있던 사실이기에, 저 역시 두려워하지 않을 거예요……」"
    - "그렇게 말하며 %CHARA%는 가볍게 고개를 돌린다."
    - "서로 눈이 마주친 두 사람은 자연스럽게 미소를 짓는다."
    - if: era.get('love:74') >= 50
      lines:
        - "미소가 잦아들 무렵, %CHARA%의 손이 슬그머니 옆으로 뻗어온다."
        - "손과 손이 부드럽게 맞닿은 순간, 비로소 %CHARA%의 미세한 떨림이 %YOU%의 마음으로 전해진다."
        - acc: 1
          content: "「역시 긴장하고 있잖아.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「에헤헤.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%도 조금은 그렇지 않으신가요?」"
        - "마음속 불안감을 지적당한 %YOU%은(는) 민망한 듯 툴툴대면서도 그저 엷은 미소를 지을 뿐이다."
        - acc: 1
          key: 'relation'
          content: "「결국 네 대무대니까 그렇지.」（호감+15）"
        - acc: 2
          content: "「내 귀여운 담당이 큰 경기에 출주하는데, 어떻게 걱정이 안 되겠어.」（애정도+2）"
        - "%CHARA%의 앳된 얼굴이 잠시 멍해지더니, 이내 %YOU%의 곁으로 한층 더 바짝 다가온다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「네, %CALLNAME%의 기대에 부응하도록 할게요.」"

# 天皇賞（春）
tenn_spr:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……드디어 다가왔군요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「텐노상.」"
  - "미세하게 떨리는 자신의 몸을 바라보며, %CHARA%는 서서히 불안감에 휩싸이기 시작한다."
  - "진작부터 출주할 각오는 다지고 있었으나, 무겁게 짓누르는 압박감만큼은 고스란히 어깨 위에 내려앉는다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「봄 텐노상의 영광을, 저는 반드시……」"
  - color: %M_COLOR%
    content:
      - fontWeight: bold
        content: %M_NAME%
      - "「그렇게 긴장할 필요 없어요.」"
  - "%CHARA%가 알아차리기도 전에 대기실 문이 부드럽게 열려 있었다."
  - color: %M_COLOR%
    content:
      - fontWeight: bold
        content: %M_NAME%
      - "「당신은 언제나 성실히 노력해 왔으니, 이번 레이스가 분명 그 결실을 보답해 줄 거예요.」"
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - "「맞아, 그저 평소에 하던 대로 달리면 돼!」"
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - "「그렇게 안절부절못하는 모습은 너답지 않다고!」"
  - "두 %ELDER_SISTER%가 대기실로 들어와 %CHARA%의 어깨를 다정하게 몇 번 두드렸다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALL_13%…… %CALL_27%……」
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - "「아하하, 하고 싶은 말은 이미 다 빼앗겨 버린 모양이네.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - "「하지만 우리 모두 너를 깊이 신뢰하고 있으니, 그저 마음껏 달리렴.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALL_64%……네, 알겠어요!」"
  - "세 사람의 따뜻한 시선 속에서 %CHARA%는 다시금 양손을 움켜쥔다."
  - "레이스를 향한 투지를 불태우며, 이 모든 과정을 지켜보던 %YOU%을(를) 향해 고개를 가볍게 끄덕인다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「%CALLNAME%……」
  - acc: 1
    content: "「이 상황 전개라면 내가 더 덧붙일 말은 없겠네.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아니요, 트레이너님의 그 말씀 한마디면 충분합니다.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「전력을 다해 임하겠습니다…… 메지로의 이름을 위하여!」"
  - acc: 1
    content: "「그럼 가자.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네!」"

# 天皇賞（春）勝利
tenn_spr_win:
  - "승리의 순간, %CHARA%를 향한 뜨거운 환호성이 관람석을 뒤흔들며 경기장 전체를 가득 메운다."
  - "천천히 속도를 줄이던 %CHARA%는 전광판을 바라보고, 주변의 함성을 다시금 확인하고 나서야 비로소 기쁨의 환호를 내지른다."
  - "봄 텐노상의 방패가 다시 한번 메지로가의 손에 쥐어지는 순간이다."
  - "역시 %CHARA%답다는 생각이 관람석에 있던 %YOU%의 머릿속에 스치고, 곁에서 마찬가지로 흥분해 있는 메지로가의 일원들과 함께 그녀를 향해 아낌없는 박수를 보낸다."
  - "바로 그 순간, 마치 %YOU%의 생각을 감지하기라도 한 듯 %CHARA%가 관람석 쪽을 돌아본다."
  - "파트너인 두 사람의 시선이 허공에서 맞닿고, 이내 묵직한 유대감 속에서 함께 미소를 공유한다."
  - if: era.get('love:74') >= 50
    lines:
      - "환한 미소를 띤 채 %YOU%이(가) 있는 곳을 향해 다다다 달려온다."
      - "일부러 그러는 듯 %YOU% 곁의 %SIBLINGS%는 모른 척하고, 작은 목소리로 불렀다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%～」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저, 해냈습니다.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……돌아가면 함께 초콜릿을 먹으러 가요.」"
      - "느닷없는 제안에 %YOU%은(는) 잠시 당황했으나, 이내 그녀의 의도를 파악하고 만다."
      - "결국 그녀도 은근히 장난기가 넘치는 %CHARA%이기 때문이다."

# シニア級5月1週、天皇賞（春）一着
mejiro_name:
  title: "메지로의 이름"
  lines:
    - "값진 승리 이후, 어깨를 짓누르던 무형의 압박감이 서서히 허공으로 흩어진다."
    - "단둘만 남은 집무실 안에서 %CHARA%는 소파에 편안히 몸을 묻고 있다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후와~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「무어라 해야 할지, 무척 홀가분한 기분이네요~」"
    - "승리에 따른 포상으로 오늘은 엄연히 %CHARA%의 휴일이어야 했다."
    - "그럼에도 그녀는 얌전히 집무실에 머무르며 조용히 %YOU%의 일거수일투족을 눈으로 좇는다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%은 쉬지 않으시나요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇게 일만 하시다가는 몸이 버텨내지 못할 거예요.」"
    - "소파에서 일어난 그녀는 %YOU%의 등 뒤로 다가와 가만히 지켜본다."
    - "쓸쓸히 비어 있던 양손을 의자 등받이에 얹은 채 고개를 살짝 갸웃거린다."
    - "부드러운 숨결이 %YOU%의 뒷목에 와닿자, 피부 위로 은근한 소름이 돋아난다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%? 업무는 끝난 건가요?」"
    - "%YOU%의 손가락 움직임이 멈춘 것을 보고 %CHARA%가 순진하게 묻는다."
    - acc: 1
      content: "「아니, 아무것도 아니야……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저기 말이죠, %CALLNAME%……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「봄 텐노상도 드디어 끝이 났네요.」"
    - acc: 1
      content: "「그러네.」"
    - "%CHARA%의 화제 전환이 다소 어색했음에도 %YOU%은(는) 자연스럽게 대화를 이어간다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「이제는 목표를 어디에 두어야 할까요……」"
    - acc: 1
      content: "「다음 레이스보다 우선 좀 쉬는 게 어때?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아니요, 휴식이라면 알아서 잘 취할 거예요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만…… 명확한 목표를 정해두지 않으면 시간이 순식간에 흘러가 버릴 것만 같아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「게다가 이것은 메지로가를 위한 일이기도 하니까요.」"
    - acc: 1
      content: "「브라이트, 넌 정말 가문의 이름을 신경 많이 쓰는구나.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그야 당연한 일입에요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%ELDER_SISTER%들과 약속했으니까요.」"
    - "의자 등받이에 보드랍게 기대어 있던 %CHARA%가 천천히 고개를 든다. 허공을 바라보는 그녀의 눈빛은 마치 머나먼 미래를 꿰뚫어 보는 듯하다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그리고 저 역시 그것을 바라고 있어요…… 메지로의 이름을 영원히 이어 나가는 것을 말이죠.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「레이스도 그렇고, 다른 모든 일들도 마찬가지에요.」"
    - "정면을 응시하던 시선이 서서히 아래로 향하며 고개를 돌린 %YOU%의 얼굴과 마주한다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%는 제 곁에 계속 머물러 주실 건가요?」"
    - acc: 1
      key: relation
      content: "「난 네 트레이너잖아, 그런 건 당연한 소리지.」（호감도+20）"
    - acc: 2
      content: "「네 곁에 항상 있어 줄게, 브라이트!」（애정도+3）"
    - "%YOU%의 답변을 들은 %CHARA%는 깜짝 놀란 듯 두 눈을 동그랗게 뜬다."
    - "하지만 이내, 피어오르는 미소 뒤로 그 표정을 감춘다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아…… 네!」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우리 두 사람이 함께 메지로의 이름을 영원히 이어 나가도록 해요~」"

# 宝塚記念
# ドーベル出走あり
takz_kin:
  - "타카라즈카 기념을 논함에 있어서 메지로의 이름은 결코 빼놓을 수 없다."
  - "그런 자부심을 품은 채, 현재 %CHARA%는 경기장에 서서 아지랑이가 피어오르는 코스를 바라보고 있다."
  - "어째서인지 이번 무대만큼은 묘하게 마음이 술렁거린다."
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - "「저기, 브라이트? 상태가 조금 이상한데……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아니요, 저는 아무렇지도 않답니다?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「도베르야말로 어떤가요? 타카라즈카 기념에 출주하는 사람들은 모두 쟁쟁한 우마무스메들이니까요.」"
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - "「난 딱히 별로 신경 안 쓰이는데……」"
  - "두 사람은 게이트 앞에 서서 잔디 위로 불어오는 뜨거운 바람을 마주한다."
  - "원인 모를 조급함에 휩싸인 %CHARA%가 어깨를 움직이자 가벼운 마찰음이 울린다."
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - "「저기, 브라이트?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네? 무슨 일이신가요?」"
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - "「그러니까, 그…… 게이트 좀 그만 건드려.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「어라, 제가 그랬나요?」"
  - "잡념에서 깨어난 %CHARA%는 옆 칸에서 고개를 내민 %D_NAME%를 향해 멍하니 고개를 갸웃거린다."
  - "%CHARA%가 자신도 모르게 부딪쳐 남긴 작은 자국은 아무도 알아차리지 못했다."

# 天皇賞（秋）
tenn_sho:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「흠……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「가을 텐노상이군요.」"
  - "대기실 벽에 붙은 포스터를 바라보며 %CHARA%는 곁에 있던 %YOU%에게 슬그머니 몸을 기대어 온다."
  - "꼬리가 부드럽게 몇 번 살랑거리자 보드라운 털끝이 %YOU%의 팔뚝에 닿아 간지러운 느낌을 자아낸다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저기 말이죠, %CALLNAME%.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「중거리 레이스에서…… 제가 이길 수 있을까요?」"
  - "장거리 무대에 특화된 %CHARA%에게 있어서, 중거리로 치러지는 가을 텐노상은 스스로의 한계를 시험하는 하나의 도전과도 같다."
  - acc: 1
    content: "「이길 수 있어.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네, 저 역시 그렇게 믿고 있어요.」"
  - "%YOU%의 확신에 찬 목소리를 들은 %CHARA%의 귀가 기쁜 듯 쫑긋거린다."
  - if: era.get('love:64') >= 50
    lines:
      - "포스터에서 시선을 거둔 그녀가 고개를 살짝 들어 %YOU%의 옆모습을 가만히 응시한다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「고맙습니다, %CALLNAME%……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「메지로의 이름을 저는 계속해서 증명해 나갈 거예요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그때가 오면 %CALLNAME%도 저와 함께……」"
      - "말이 잠시 끊기고, 그녀의 금빛 눈동자에는 온전히 %YOU%의 실루엣만이 담긴다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「부디 저와 함께 메지로가에서……」"
  - "마침내 레이스 준비를 알리는 안내 방송이 울려 퍼지기 시작한다."
  - "의자에서 일어난 그녀는 인형 옷 같은 긴 스커트를 가볍게 털어낸다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저, 전력을 다해 임하겠습니다!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「가을 텐노상!」"

# 天皇賞（秋）勝利
tenn_sho_win:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하아, 하아……」"
  - "익숙한 장거리 무대와는 다르게 중거리 특유의 빠른 템포 탓에, 타고난 체력이 무색하게도 %CHARA%는 거친 숨을 몰아쉬며 가슴을 들썩인다."
  - "그러나 사방에서 밀려드는 관중들의 뜨거운 함성은 지금 몸에 새겨진 피로가 결코 헛되지 않았음을 증명해 준다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「여러분……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이러면……%ELDER_SISTER%들도, 할머님도 기뻐하시겠지요.」"
  - "맑은 미소를 지어 보인 %CHARA%는 환호하는 관중들을 향해 특유의 부드러운 몸짓으로 손을 흔들며 화답한다."

# 有馬記念
arim_kin:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - acc: 1
    content: 「……」
  - "연말 마지막 레이스인 아리마 기념."
  - "승부복으로 갈아입은 %CHARA%는 긴장한 채 지하 통로 입구에 서서 깊이 숨을 들이쉰다."
  - "등 뒤에서 익숙한 목소리가 들려오고 나서야 비로소 %CHARA%의 굳어 있던 움직임이 풀린다."
  - color: %P_COLOR%
    content:
      - fontWeight: bold
        content: %P_NAME%
      - "「정말 그리운걸~ 아리마 기념!」"
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - "「그렇게 긴장할 필요 없어, 브라이트. 장거리 레이스는 네가 잘하는 분야잖아?」"
  - color: %M_COLOR%
    content:
      - fontWeight: bold
        content: %M_NAME%
      - "「라이안, 정작 긴장한 사람은 본인이면서 말이야~」"
  - color: %R_COLOR%
    content:
      - fontWeight: bold
        content: %R_NAME%
      - "「무슨 소리야, 난 그저 브라이트를 응원하고 있을 뿐이라고!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네~ 그 마음 확실히 전해 받았답니다~」"
  - "%ELDER_SISTER%들의 장난 섞인 대화 속에서, 긴장감으로 미세하게 떨리던 몸이 점차 안정을 되찾는다."
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - "「저기, 브라이트.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네? 무슨 일이신가요?」"
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - "「……힘내.」"
  - color: %D_COLOR%
    content:
      - fontWeight: bold
        content: %D_NAME%
      - "「우리가 계속 응원할 테니까!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「알겠습니다~」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「메지로의 이름에 부끄럽지 않은 주행을 선보이겠어요~」"
  - "얼굴을 붉힌 채 응원을 건네는 %D_NAME%를 보며 %CHARA%는 가볍게 미소를 지어 보인다."
  - "몸을 돌려 이제 한 걸음만 더 내딛으면 화려한 주행이 펼쳐질 경기장이다."
  - acc: 1
    content: "「힘내자!」"
  - "벽에 기대어 서 있던 %YOU%이(가) %CHARA%를 향해 말을 건넨다."
  - acc: 1
    content: "「메지로가의 이름 때문만이 아니라, 브라이트 너 자신을 위해서도 말이야——」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「후훗, %CALLNAME%께서 그런 말씀을 하시다니 조금 의외네요~」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「잘 알겠습니다. 그렇다면 %CALLNAME%께서 마음속으로 그리시던——」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그 %CHARA%의 모습을 똑똑히 보여드리도록 하죠!」"
  - "힘차게 발걸음을 내딛으며 아리마 기념의 무대로 당당히 걸어 나간다."

# 有馬記念勝利
arim_kin_win:
  - content:
      - fontWeight: bold
        content: "해설"
      - "「아리마 기념의 우승자는——%CHARA%입니다!」"
  - "환성이 %CHARA% 곁까지 밀려들었다."
  - "메지로의 이름에 부끄럽지 않게, %SEX%만의 승리를 달려 냈다."
  - "가문을 위해 스스로 족쇄를 채웠던 %CHARA%는 이제 그 책임을 완전히 내려놓았다."
  - "대기실로 돌아온 %CHARA%는 단정히 앉아 있었지만, 꼬리는 기쁜 듯 좌우로 흔들렸다."
  - "길게 솟은 머리카락은 생명이라도 깃든 듯, 흥얼거리는 콧노래에 맞춰 위아래로 들썩였다."
  - "%YOU%는 매끄러운 긴 머리를 살며시 빗어 주며 평소처럼 윤기 나게 정돈했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「역시 %CALLNAME%시네요~」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「정말 기분 좋아요~」"
  - if: era.get('love:74') >= 90
    lines:
      - "%YOU%의 손길에 맞추느라 상체는 마음대로 움직일 수 없었지만, 꼬리는 벌써 장난을 시작하고 있었다."
      - "갈색 털이 %YOU%의 종아리를 살며시 감더니 앞으로 몇 번 가볍게 당겼다."
      - acc: 1
        content: "「멋진 레이스였어.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후후~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%께서 가르쳐 주셨으니까요~」"
      - acc: 1
        content: "「말 한번 잘하네.」"
      - acc: 2
        content: "「그것뿐이야?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「후~아아~」"
      - "의자가 낮지만 않았다면, 지금쯤 %CHARA%의 다리가 앞뒤로 흔들리고 있었을 것이다."
      - "긴 머리를 모두 정돈한 뒤에야 흔들리는 작은 머리를 놓아주었다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으음……정말 기분 좋아요~」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「역시 %CALLNAME%는 이런 일을 참 잘하시네요~」"
      - "의자에 앉은 %CHARA%는 몸을 돌려 %YOU%를 바라보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이제 레이스도 끝났네요……」"
      - acc: 1
        content: "「응. 당분간은 쉴 수 있겠네.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이제……%CALLNAME%, 저와 함께 돌아가 주실래요?」"
      - "가슴이 작게 오르내리는 속도가 점점 빨라졌다. 조용한 공간에서는 심장 뛰는 소리까지 들리는 듯했다."
      - "우승한 %CHARA%를 위한 만찬을 준비하러 회장으로 간 자매들은 지금 나타나지 않을 것이다——"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저……드물게도, 조금 서두르고 싶어졌어요~」"
      - acc: 1
        key: sex
        content: "「너답지 않은데. 돌아가서 할까?」（연모+5）"
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「저답지 않나요……」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「후후~ %CALLNAME%도 느긋하게 지내는 걸 좋아하시네요~」"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「……그럼 저는 계속 %CALLNAME%를 기다릴게요.」"
          - "평소와 다름없는 미소를 띤 채 단정히 일어나, 천천히 %YOU% 앞으로 다가왔다."
          - "살며시 %YOU%의 얼굴에 맑은 향기를 남겼다——"
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「부디 이것도 일정에 넣어 주셔요~」"
      - acc: 2
        content: "「모처럼이니, 어울려 줄게……」"
        lines:
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「네~」"
          - "나긋한 목소리로 대답하며 살며시 일어났다."
          - "도톰한 뺨을 %YOU%의 가슴에 묻고, %YOU%만의 감촉을 만끽했다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「더 늦기 전에……」"
          - "가느다란 손가락이 승부복의 옷깃을 당겨 하얀 속옷을 드러냈다."
          - "비어 있는 다른 손은 %YOU%의 손바닥을 천천히 자신의 가슴에 얹었다."
          - "%YOU%의 손이 따뜻하고 부드러운 살결을 단단히 움켜쥐었다."
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - 「%CALLNAME%……」
          - color: %COLOR%
            content:
              - fontWeight: bold
                content: %CHARA%
              - "「부디……서둘러~ 주셔요~」"
          # 馬跳び

arim_kin_sex:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아…… 무척 묵직한 느낌이네요~」"
  - "피로감이 들이닥친 아랫배를 양손으로 소중히 감싸 안으면서도, 얼굴에는 여전히 멍하니 행복한 미소가 가득하다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아무래도 제가 조금 과하게 서둘렀던 것일까요? 후후~」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하지만 저는 %CALLNAME%을 절대 미워하지 않는답니다?」"
  - "휴식 시간이 거의 끝나갈 무렵이 되어서야 %YOU%은(는) 서둘러 %CHARA%의 옷매무새를 단정히 정돈해 준다."
  - "비록 시간이 아슬아슬해진 원인은 온전히 %YOU%에게 있었지만 말이다."

# week_end
# 終了後1月4週、主線イベント発火数>4
accel_era:
  title: "점차 가속하는 시대"
  lines:
    - "3년이라는 약속된 시간이 흐르고, %CHARA%와 %YOU%은(는) 평화로운 어느 휴일에 처음 만났던 그날처럼 공원 벤치에 나란히 앉아 있다."
    - "두 사람 사이로 고요히 흘러가는 시간을 만끽하면서도, 눈앞에서 아침 훈련에 매진하고 있는 %UMA%들의 모습을 가만히 눈에 담는다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「지금 느끼는 이 감정, 무척 낯이 익네요~」"
    - "목소리에는 여전히 특유의 나른함이 묻어나지만, 어딘가 매끄럽지 못한 아쉬움이 교차한다."
    - "느긋한 템포에 익숙한 %CHARA%의 입장에서, 눈앞에서 무서운 속도로 질주하는 신인 %UMA%들의 가속을 지켜보는 것은 과연 어떤 심정일까."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 저와 보조를 맞추며 저 나뭇잎이 떨어지기를 함께 기다려주신 분은 오직 %CALLNAME%뿐이셨어요~」"
    - acc: 1
      content: "「과연 그럴까……」"
    - "오랜 시간 파트너로서 함께 지내온 세월 덕분에 %YOU%은(는) %CHARA%가 이 타이밍에 진정으로 건네고자 하는 속마음을 어렴풋이 이해했으나, 굳이 대놓고 들춰내지는 않는다."
    - "스태미나보다 극단적인 스피드를 요구하는 현대의 레이스는 본래 %CHARA%가 진가를 발휘할 무대가 아니기 때문이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「푸른 잎사귀로군요~」"
    - acc: 1
      content: "「올해는 새싹이 돋아나는 시기가 유독 빠르네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그렇네요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「오늘은 마른 낙엽을 찾아보기 힘들 것 같네요.」"
    - "목소리에 짙은 섭섭함이 묻어나지만, 결코 겉으로 크게 내색하지는 않는다."
    - acc: 1
      content: "「모든 것이 전부 빨라지고 있어……」"
    - "%CHARA%의 곁에 나란히 앉아 있던 %YOU%은(는) 그녀의 시선을 따라 위를 올려다보았고, 나뭇가지에는 처음 만났을 때 보았던 마른 낙엽의 흔적 따위는 더 이상 남아 있지 않음을 확인한다."
    - "%SEX%의 말마따나, 나뭇가지 끝에는 파릇파릇한 새싹이 돋아나 있을 뿐이다."
    - acc: 1
      content: "「이제는 식물마저 가속하는 모양이야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 그렇게 돌려서 말씀하지 않으셔도 괜찮답니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저라 해도 최근의 레이스는 꼬박꼬박 챙겨보고 있으니까요……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「다들 이제는 마일 단거리에서 활약하는 아이들에게 관심을 쏟기 시작했지요?」"
    - "언제부터였을까, 곁에 머물던 그녀의 맑은 금빛 눈동자가 온전히 %YOU%을(를) 향해 고정되어 있다."
    - "아쉬움과 애상적인 감정이 서려 있으면서도, 그 시선만큼은 단호하다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「언젠가는 메지로가에서도 저런 단거리 무대에서 당당히 활약할 아이가 등장하겠죠……」"
    - acc: 1
      content: "「응, 분명 그럴 거야.」"
    - acc: 2
      content: "「반드시 나타날 거야.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고맙습니다……」"
    # 好感+50

# --------------------------------
# 発火イベント
# --------------------------------
# out_shopping
# 熱恋以上、シニア級新年
hot_spring_ticket:
  title: "온천 여행권……?"
  lines:
    - "새해를 맞이한 상점가는 사방이 축제 분위기로 북적였고, 평소에 늘 나른하던 %CHARA%마저 덩달아 흥이 났는지 %YOU%의 손을 잡고 자연스레 걸음을 재촉한다."
    - "포장마차에서 갓 구워낸 타코야키를 건네받고는, 피어오르는 뜨거운 김을 입으로 살포시 불어낸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, %CALLNAME%도 한입 드셔보시겠어요?」"
    - "연초의 싸늘한 공기 탓에 %CHARA%의 입가에서는 온기가 담긴 하얀 입김이 끊임없이 뿜어져 나온다."
    - "꼬챙이로 푹 찌른 김이 모락모락 나는 타코야키를 %YOU%의 입가 앞으로 쏙 내밀어 온다."
    - "상황이 이렇게 되자 %YOU% 역시 별 생각 없이 목도리를 내리고 입을 벌려 한 알을 받아먹는다……"
    - "그러나 너무 뜨거웠던 탓에 입안을 데이고 말았고, 결국 눈물이 고인 채 혀를 내밀 수밖에 없게 된다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 자요, 시원한 음료수랍니다~」"
    - "데인 혀를 어찌할 바 몰라 고통스러워하는 %YOU%의 앞으로, %CHARA%가 재빨리 차가운 과일 주스를 내민다."
    - "새콤달콤한 맛이 화끈거리는 통증을 부드럽게 가라앉히자, %YOU%의 얼굴에 서려 있던 고통도 서서히 잦아든다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, %CALLNAME%, 저기 좀 보세요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아무래도 경품 추첨 행사를 하는 모양이에요?」"
    - "%SEX%가 손가락으로 가리킨 곳은 상점가 입구 근처에 마련된 화려한 부스였다."
    - "방금 전 구매한 음료수 영수증까지 합산하면 충분히 추첨에 참여할 수 있는 금액이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「추첨권은 이미 교환해 두었답니다~」"
    - "%YOU%이(가) 미처 대답을 가다듬기도 전에, %CHARA%는 이미 %YOU%의 소매를 이끌고 추첨 대기 줄을 향해 걸어가고 있다."
    - acc: 1
      content: "（대체 언제 교환한 거지……）"
    - "%CHARA%의 귀가 기쁜 듯 쫑긋거리며, 줄을 서 있는 동안에도 몇 번이고 고개를 돌려 %YOU%의 안색을 살핀다."
    - "조용히 줄을 따라 앞으로 나아가다 보니 어느덧 두 사람의 차례가 찾아온다."
    - "눈앞에서 기대감으로 눈을 반짝이는 %CHARA%를 보며 %YOU%은(는) 자연스레 손을 뻗어 경품 추첨기의 손잡이를 함께 쥐고 천천히 돌리기 시작한다."
    - "드르륵거리며 통이 구르는 소리와 함께, %CHARA%의 늘어져 있던 귀가 순간 번쩍 솟아오른다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: "상점가 직원"
        - "「오오, 축하합니다! 무려 온천 여행권 당첨입니다!」"
    - acc: 1
      content: "「어라? 정말로?」"
    - "깜짝 놀란 %YOU%이(가) 수거함을 내려다보니, 새하얀 받침대 정중앙에 영롱한 금색 구슬 하나가 대굴대굴 구르고 있다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어라, 온천 여행권이네요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 지금은 한창 레이스를 준비해야 할 시기이니, 당장 가기는 조금 어렵겠죠~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……그래도 훗날, %CALLNAME%께서 꼭 저와 함께 가주실 거죠?」"
    - "거절할 틈도 주지 않고 여행권을 %YOU% 앞으로 내밀었다."
    - "이 상황에서는 얌전히 받아들이는 수밖에 없다."

# out_start
# 四年目2月2週、温泉券あり
hot_spring:
  title: "온천~ 나른하고 포근하게~"
  lines:
    - "치열했던 레이스의 나날들이 마침내 일단락되었고, 은퇴와 관련된 행정 절차도 대부분 마무리가 되었다."
    - "무거운 짐을 내려놓은 %YOU%과(와) %CHARA%는 오랜만의 해방감에 안도의 한숨을 내쉬며, 푹 쉬기 위해 일전에 방문했던 상점가 근처를 다시 찾는다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, 그러고 보니……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 시절, 바로 이곳에서 당첨되었었죠?」"
    - "낯익은 추첨 부스 앞을 지나갈 때, %CHARA%가 문득 생각났다는 듯 툭 한마디를 던진다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 혹시 지금 소지하고 계시나요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「저희 두 사람의 온천 여행권 말이에요~」"
    - "마치 오늘 외출의 진짜 목적이 이 이야기를 꺼내기 위함이었던 것처럼, 정확히 이 장소로 이끌었던 것이다."
    - "당연하게도 그 여행권은 지금 이 순간에도 %YOU%의 지갑 한구석에 소중히 보관되어 기회를 엿보고 있었다."
    - acc: 1
      content: "「당연히 챙겼지. 설마 지금 당장 가고 싶어서 그래?」"
      lines:
        - "지갑에서 조심스레 온천 여행권을 꺼내어 보여주자, %CHARA%의 반쯤 감겨 있던 눈이 살짝 동그래진다."
        - "티켓 표면에 적힌 유효기간을 빤히 쳐다보더니, 다소 호들갑스러운 몸짓으로 %YOU%의 손을 붙잡아 온다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어라, 유효기간이 얼마 남지 않은 모양이에요……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이왕 이렇게 된 거, 저희 오늘 곧바로 출발하는 것은 어떨까요?」"
        - "미심쩍은 기분에 %YOU%이(가) 여행권을 뒤집어 확인해 보니, 정말로 만료일까지 고작 며칠밖에 남지 않은 상태였다."
        - "사정이 이렇다면 굳이 미룰 이유가 없으니 곧장 출발하기로 결심한다."
    - acc: 2
      content: "「아차, 깜빡하고 안 가져왔는데. (국어책 읽기)」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어쩜 그러실 수가 있나요오~」"
        - "%CHARA%가 특유의 귀여운 억양으로 어미를 길게 빼며 탄식하지만, 주의 깊게 들으면 일부러 서운한 척 연기하고 있음을 눈치챌 수 있다."
        - "의도가 빤히 보이는 장난인 만큼, 당연히 뒤이어 꿍꿍이가 있을 터였다."
        - "가볍게 두세 걸음 다가온 %CHARA%가 %YOU%의 옷소매를 잡고 살며시 잡아당기며, 마치 어린아이처럼 응석 부리는 눈빛을 보내온다."
        - "뻔히 연기라는 것을 알면서도, 평소에는 좀처럼 보기 힘든 촉촉하게 젖은 큰 눈망울을 마주하자 %YOU%은(는) 본래 장난스레 놀려주려던 마음에 묘한 죄책감이 든다."
        - "결국 짓궂은 생각을 접고 지갑을 열어 다시 확인하는 시늉을 하며 조용히 온천권을 꺼내 든다."
        - acc: 1
          content: "「아, 여기 찾았네. (국어책 읽기)」"
        - "꺼내 든 여행권을 확인하던 %YOU%은(는) 문득 무언가 이상함을 감지한다."
        - "%CHARA%의 기대 섞인 시선 속에서 %YOU%이(가) 온천권의 상세 내역을 꼼꼼히 뜯어보자——"
        - acc: 1
          content: "「이거 유효기간이 고작 사흘밖에 안 남았잖아?!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어머나~」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「소중한 기회를 그냥 날려버릴 수는 없으니, 지금 당장 함께 가도록 해요?」"
        - "동글동글하고 귀여운 얼굴을 살짝 기울이며 %YOU%의 어깨 부근에 조심스레 기댄다."
        - "이 지경에 이르렀으니 도저히 거절할 방도가 없다."
    - "우마무스메 트위터에서 대단히 뜨거운 반응을 얻고 있는 유명 온천 여관에 도착하자, %CHARA% 역시 긴장했는지 무의식중에 %YOU%의 손을 꽉 쥔다."
    - "손끝에 실린 힘을 느끼고 고개를 돌리자, 마침 눈앞에서 생기 가득한 빛을 띠고 있는 %CHARA%의 두 눈과 정면으로 마주친다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 어서 함께 안으로 들어가요~」"
    - "말을 마친 %CHARA%는 %YOU%의 손을 이끌고 로비로 향하더니, 제법 익숙한 태도로 프런트에서 체크인 절차를 밟는다."
    - "그녀의 등 뒤에서 이 모든 과정을 묵묵히 지켜보던 %YOU%의 입가에도 자연스레 부드러운 미소가 번진다."
    - divider: true
    - "따스한 탕 안으로 몸을 담그자, %YOU%의 입에서 기분 좋은 탄성이 절로 터져 나온다."
    - "과연 소문대로 우마무스메 트위터에서 엄청난 호평을 받는 데에는 그만한 명백한 이유가 있었다."
    - "뜨끈한 온천수에 몸을 깊숙이 묻은 채 부드러운 물살의 흐름을 느끼며 피로를 녹여낸다……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「우와~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「포근하고 따뜻하네요~」"
    - "자욱한 물안개 너머로 들려오는 %CHARA%의 나른한 목소리가 이번 휴식에 편안함을 한층 더해준다."
    - "하지만 흘러가는 시간과 함께, 이 평화로움은 서서히 묘한 긴장감으로 변하기 시작한다."
    - acc: 1
      content: "「음? 브라이트는 어디 갔지?」"
    - "온기 탓에 머리가 다소 몽롱해진 %YOU%이(가) 자리에서 일어나 대욕탕을 나가려던 순간, 무언가 이질감을 느끼고 걸음을 멈춘다."
    - "%CHARA%가 먼저 탕을 빠져나가는 모습을 본 기억이 전혀 없기 때문이다."
    - "덜렁거리는 담당 우마무스메가 혹시 물속에서 쓰러지기라도 했을까 염려되어, %YOU%은(는) 급히 수건을 챙겨 다른 탕을 살피려다 바로 곁에서 익숙한 긴 머리칼을 발견한다."
    - "이 정도로 가까운 거리라면, 사실상 서로의 실루엣이 전부 노출된 것이나 다름없다."
    - acc: 1
      content: "그냥 브라이트가 워낙 천연 마이페이스라 그런 것이라 믿자, 음."
    - acc: 2
      content: "이건 분명 의도적인 연출이 틀림없어……"
    - "쓸데없는 잡념을 지워버리고, 서둘러 자세를 낮춰 %CHARA%의 상태를 살핀다."
    - "정작 %CHARA% 본인에게 있어서는 무척이나 자연스러운 상황인 모양이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후아아……」"
    - "온천의 따스한 기운에 몸이 깊이 이완되어 평온하게 수면을 취하고 있었던 모양이다."
    - "탕 속에 잠겨 있던 그녀의 몸을 조심스레 붙들어 일으키며, 최대한 시선을 먼 곳으로 돌린 채 황급히 수건을 덮어준다……"
    - acc: 1
      content: "「정말이지, 한시도 마음을 놓을 수가 없네.」"
    - "입으로는 나지막이 불평을 늘어놓으면서도 %YOU%은(는) 얌전히 %CHARA%를 부축해 탕 밖으로 나왔고, 두 사람은 온천 바닥 가에 나란히 걸터앉는다."
    - "%YOU%이(가) 조심스러운 손길로 그녀의 피부에 맺힌 물방울을 닦아주자, %CHARA% 역시 서서히 두 눈을 깜빡이며 의식을 되찾는다."
    - "곁에 있는 사람이 누구인지 확인한 순간, 망설임 없이 몸을 붙여 왔다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「머리가 어질어질하네요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 다행히도 %CALLNAME%께서 제 곁에 계셔주셨군요~」"
    - "망설임 없이 %YOU%의 가슴팍으로 파고들며, 동글동글한 얼굴을 %YOU%의 복부 부근에 폭 기댄다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……어라라?」"
    - "%YOU%의 품에 안겨 있던 %CHARA%가 순간 미세하게 몸을 떨더니, 천천히 고개를 들어 올려다본다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어쩐지 무척 뜨거운 열기가 느껴지는데 말이죠?」"
    - "마치 속내를 전부 알고 있으면서 짐짓 모르는 척 묻는 듯한 태도로, %CHARA%는 가냘픈 손길로 %YOU%의 몸을 가리고 있던 수건을 살며시 쥐어쥔다."
    - "하얀 수건이 아래로 미끄러져 내리는 순간, %CHARA%의 얼굴은 이미 붉은 홍조로 가득 물든다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%…… 무척 흥분하신 모양이네요……」"
    - "온천의 뜨거운 열기 때문인지, 혹은 다른 이유에서인지 %CHARA%의 뺨은 붉게 상기되어 있으며 부끄러운 듯 슬그머니 시선을 회피한다."
    - acc: 1
      content: "「그게 누구 때문인데 그래.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저 때문에……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하지만 %CALLNAME%께서도 결코 싫지만은 않으시죠?」"
        - "스스로 몸을 살짝 뒤로 물리며, 평소의 온화한 모습과는 다소 거리가 먼 대담한 도발을 던진다."
        - "무의식중에 대형 사고를 치고도 능청스럽게 구는 %CHARA%에게 가벼운 벌을 주겠다는 듯, %YOU%은(는) 수건을 내던지고 앞으로 다가서서——"
        - "부드러운 거짓말을 자아내던 그녀의 입술을 거칠게 훔쳐 막아버린다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「읍, 으읍!」"
    - acc: 2
      content: "「괜찮아, 브라이트.」"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하지만 %CALLNAME%, 무척 힘겨워 보이시는걸요……」"
        - "%CHARA%의 지적대로 %YOU%은(는) 비록 겉으로는 미소를 지어 보이고 있었으나, 솔직한 신체 반응만큼은 결코 속일 수 없었다."
        - "과하게 붉어진 안색은 더 이상 온천의 이로운 온도 때문이 아니었다."
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아니요……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이것이 저로 인해 비롯된 일이라면, 제가 온전히 책임을 져야 마땅하겠죠!」"
        - "이번만큼은 평소와 다르게 이례적일 정도로 빠른 판단을 내리며, 중심을 잃고 비틀거리던 %YOU%을(를) 기습적으로 밀쳐 눕힌다."
        - "귓가를 가득 채우는 거친 숨소리를 들으며, %YOU%은(는) 마침내 결단을 내린다——"
        - acc: 1
          content: "「더는 못 참아!」"

hot_spring_sex:
  - "객실로 다시 돌아왔을 때, %YOU%과(와) %CHARA%는 얼굴이 나란히 새빨갛게 익은 채 그 누구도 먼저 선뜻 입을 열지 못한다."
  - "%YOU%이(가) 손을 뻗어 얼굴에 묻은 땀방울을 닦아내는 사이, %CHARA%는 이미 방석 위에 다소곳이 앉아 깊은 숨을 들이쉬고 있었다."
  - acc: 1
    content: "「역시 온천탕 내부에서 그런 짓을 벌이는 것은 다소 무리가 따르네~」"
  - "곁에 있던 %CHARA%가 땀을 가볍게 훔쳐내고, 안색의 붉은 기운이 어느 정도 가라앉은 뒤에야 %YOU%을(를) 향해 온화한 미소로 화답한다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「정말 그렇네요~」"
  # 恋慕+2

# week_end
# hot_spring後、良縁以上
wish:
  title: "소원"
  lines:
    - "자기 자리에 다시 앉은 %YOU%는 길게 숨을 내쉬었다."
    - "이번 온천 여행의 추억은 무척 즐거웠으나, 아무리 돌이켜봐도 지나칠 정도로…… 철저한 계획하에 움직였다는 인상을 지울 수 없다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%~ 지금 혹시 시간 괜찮으신가요?」"
    - "문 너머로 특유의 나른하고 부드러운 음성이 들려오고, %YOU%이(가) 들어오라는 허락을 건네자 이내 손잡이가 부드럽게 돌아가는 소리가 울린다."
    - "집무실 안으로 걸어 들어온 %CHARA%는 일말의 망설임도 없이 %YOU%의 곁으로 다가오더니, 근처에 있던 작은 의자를 끌어당겨 다소곳이 가깝게 앉는다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%…… 제 생각에는 역시 어떤 일들은 명확하게 말씀드리는 편이 좋을 것 같아서요.」"
    - "평소의 멍한 모습은 간데없이, 진지하고 올곧은 시선으로 %YOU%을(를) 정면으로 바라본다."
    - acc: 1
      content: "「지난번 온천 여행 때 있었던 일 때문이지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 %CALLNAME%이십니다~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「과연 저에 대해 무척이나 잘 알고 계시네요!」"
    - "사실 그 상황에서는 알아채지 못하는 편이 훨씬 더 어려웠을 터였다."
    - "사전에 깔아둔 판이 지나치게 노골적이었기 때문이다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그 여관은 사실 이번에 처음 방문한 것이 아니랍니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제가 아직 어린아이였을 무렵, 메지로가에서 가끔 가문 차원의 여행을 떠날 때면 늘 선택하던 온천 여관이었어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그래서 전부터 줄곧 %CALLNAME%과 함께 그곳을 다시 찾고 싶다는 소망을 품고 있었답니다……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「결과적으로는 제가 조금 과하게 조급했던 모양이지만요~」"
    - "어조 자체는 여전히 나른하고 평온했으나, %YOU%은(는) 그녀의 음성 깊은 곳에 자그마한 쓸쓸함이 서려 있음을 알아챈다."
    - acc: 1
      content: "「아직 내게 전하지 못한 본심이 남아 있는 거지?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「역시 당신에게는 숨길 수가 없군요~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「제게 있어서 온천 여관이란 오직 가족들과 함께하는 소중한 장소였어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그러니까 %CALLNAME%……」"
    - "말문이 잠시 막히고, 금빛 눈동자가 %YOU%의 시선과 고요하게 얽힌다."
    - "%CHARA%의 하얀 얼굴 위로 서서히 붉은 수줍음이 피어오르고 나서야, 비로소 멈추었던 고백이 이어지기 시작한다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「원래 이 대사는 그 여관에서 근사하게 건넬 예정이었는데 말이죠……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%YOUR_NAME%, 당신께서는 진정 저의 가족이 되어주실 건가요?」"
    - acc: 1
      content: "「네 소원대로 해줄게, 브라이트.」"
    - "한층 더 짙어진 홍조가 그녀의 감격스러운 표정을 더욱 아름답게 돋보이게 한다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「기쁩니다…… 정말로 기뻐요! %CALLNAME%!」"
  # 好感+50

# week_start
# 愛欲以上、トレーニング不足
where_is_time:
  title: "시간은…… 어디로 사라진 걸까요?"
  lines:
    - "학원 안뜰의 벤치에 앉아, %CHARA%는 홀로 고요하고 평화로운 시간을 만끽하고 있다."
    - "어느덧 시간이 얼마나 흘렀는지 모를 무렵이 되어서야 %YOU%은(는) 겨우 안뜰 한구석에서 그녀를 찾아낸다."
    - acc: 1
      content: "「……브라이트?」"
    - "%YOU%의 목소리를 들은 %CHARA%가 다소 멍한 표정으로 고개를 돌려 등 뒤를 바라본다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, %CALLNAME%~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「언제 이곳까지 찾아오신 건가요?」"
    - acc: 1
      content: "「방금 막 찾아냈어.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「방금 전…… 이라는 말씀은?」"
    - "무언가 위기감을 감지한 %CHARA%가 천천히 시선을 들어 주변의 풍경을 부드럽게 훑어본다."
    - "정수리를 곧게 내리쬐던 태양은 어느덧 서쪽 하늘을 향해 크게 기울어 있었고, 이는 황금 같은 오후 시간이 통째로 흘러가 버렸음을 의미했다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「어머나……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「대단히 죄송합니다, %CALLNAME%. 제가 이런 실수를……」"
    - acc: 1
      content: "「괜찮아, 신경 쓰지 마.」"
    - "시무룩해진 탓에 축 늘어진 %CHARA%의 귀와는 대조적으로, %YOU%은(는) 그저 미소를 지으며 그녀의 동글동글한 머리를 다정하게 몇 번 쓰다듬어 줄 뿐이다."
    - acc: 1
      content: "「제때 너를 찾아내지 못한 내게도 책임이 있으니까.」"
    -
    - acc: 1
      content: "「가끔은 오늘처럼 평화롭게 하루를 보내는 것도 나쁘지 않네.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「%CALLNAME%……」
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 알겠습니다!」"
    - "부드러운 귀가 가볍게 움직이며, %YOU%가 %CHARA%의 머리에 올려놓은 손을 양옆에서 감쌌다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그럼 이왕 이렇게 된 거, 저와 함께 아주 느긋하게 이 시간을 즐기도록 해요, %CALLNAME%~」"
    # スタミナ+10、賢さ+10

# week_start
# 愛欲以上、徹夜
sleep:
  title: "자, 편안하게 숙면을 취하도록 해요"
  lines:
    - "유난히 졸음이 쏟아지는 평일을 보내고, %YOU%는 마침내 퇴근 시간을 맞았다."
    - "지난밤의 밤샘이 이제 정신을 덮쳐 와 의자에서 그대로 잠들 것만 같았다. 몸을 버티며 눈앞의 트레이닝 계획을 계속 살펴볼 수밖에 없었다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후아…… %CALLNAME%~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……어라라?」"
    - "누적된 피로 탓에 %YOU%은(는) %CHARA%가 집무실 안으로 걸어 들어오는 소리조차 인지하지 못한 채 업무에만 몰두하고 있었다."
    - "%CHARA%의 상황 파악 능력이 다소 느린 편이기는 하나, 현재 눈앞에 펼쳐진 광경만 보고도 트레이너에게 어떤 문제가 발생했는지 한눈에 직감한다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 또 밤을 새워 무리하게 업무를 보신 모양이군요……」"
    - "조용히 %YOU%의 등 뒤로 걸어와 책상 위의 서류들을 대강 훑어보더니, 입가에 부드러운 미소를 짓는다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 정말로 고생 많으셨습니다~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만 굳이 이렇게까지 스스로의 몸을 해쳐가며 무리하실 필요는 없답니다……」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잠시 휴식을 취하도록 해요…… 아니, 이대로 영원히 쉬시는 것도 무척 좋은 선택이겠네요.」"
    - "가냘픈 두 팔로 %YOU%의 목을 뒤에서 부드럽게 감싸 안으며, 그대로 자신의 가슴팍을 향해 서서히 끌어당긴다."
    - "깃털처럼 부드러운 뒷머리가 자신의 흉가에 와닿는 감촉을 만끽하며 %CHARA%는 나지막이 미소 지었고, %YOU%의 정수리에 대고 얼굴을 살며시 비벼온다."
    - acc: 1
      content: "「브라이트……」"
    - "몽롱해진 %YOU%는 등 뒤의 부드러움을 느꼈고, 거센 졸음이 눈앞으로 밀려왔다."
    - "눈꺼풀이 천근만근 무거워지더니, 이내 시야가 완전히 암전된다……"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「부디 편안히 잠들도록 하세요, %CALLNAME%~」"
    - "다시금 서서히 눈을 떴을 때, %YOU%의 눈앞에 펼쳐진 것은 서류로 가득했던 지저분한 책상이 아닌, 짙은 남빛의 트레센 학원 교복이었다."
    - "%YOU%가 왜 이런 광경이 펼쳐졌는지 이해하기도 전에, 눈앞의 짙은 남빛이 먼저 움직이며 살랑거렸다."
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, %CALLNAME%~」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「기분 좋게 잘 주무셨나요? 사실 다른 이에게 무릎베개를 해주는 것은 저도 이번이 평생 처음이랍니다~」"
    - "%CHARA%가 위쪽에서 얼굴을 비스듬히 내밀며, 세상을 다 가득 채울 듯 인자하고 다정한 미소를 건네어 온다."
