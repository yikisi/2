# @file ドリームジャーニー - 地下室
# @author 幽白書
# @author Claude (翻訳)
welcome:
  sync: true
  lines:
    - "%YOU%는 천천히 눈을 뜬다……"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「잘 주무셨나요, %CALLNAME%?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「푹 주무셨다니 다행이네요……신경이 굵어서요? 아니요, 그렇지 않아요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「그건 얕은 의식만으로도 이곳을 안심할 수 있는 장소……『집』이라고 인정하고 계신다는 뜻이랍니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아니라고요……하지만 제게는 그렇답니다.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「당신이 있는 곳만이 제가 돌아갈 곳이니까요.」"

flatter:
  - random: true
    lines:
      - "「미안해, %Y_CALL_119%. 분명 내가 뭔가 해서 %Y_CALL_119%의 기분을 상하게 했겠지. 고칠 테니까……」"
      -
      - "일단 먼저 사과부터 하자."
      - "말을 다 들은 %CHARA%가 %YOU%에게 다가왔다."
      - "그리고………손가락으로 %YOU%의 입을 눌렀다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「쉿……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「제가 가장 좋아하는 그 입으로, 그런 거짓말은 하지 말아 주세요……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「사실은 아무 잘못도 하지 않았다고 생각하고 계시죠?」"
      -
      - "%YOU%는 망설이다가, 그래도 고개를 끄덕였다."
      - "%CHARA%는 나무라는 듯한 표정으로 몸을 기울였다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「당신의 입술과 혀는 거짓말을 하라고 있는 게 아니에요……하지만 좋아요. 그 존재 의미를 제가 가르쳐 드릴게요……쪽……응……츄릅……」"
  - random: true
    lines:
      - "「미안해, %Y_CALL_119%. 아무리 생각해도 역시 모르겠어……나도 모르게 언제 네 기분을 상하게 해서 여기에 갇힌 건가?」"
      -
      - "무작정 사과해서 %CHARA%의 용서를 구하는 건 쉽다……"
      - "하지만 역시 %CHARA%를 속이는 건 좋지 않겠지……"
      - "적어도 무엇을 잘못했는지 알고 나서 사과해야 한다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%CALLNAME%……당신의 솔직함은 여전히 저를 기쁘게 해요……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하지만……아니요, 당신은 아무 잘못도 하지 않았어요. 그저 당신을 독차지할 수 없다는 불안이 제 마음을 초조하게 할 뿐이에요……」"
      -
      - "「하지만……」"
      -
      - "%YOU%가 말을 이으려던 입술이 막혔다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……응, 생각이 바뀌었어요……%CALLNAME%, 당신은 분명 잘못하고 있어요……그 입술이 너무 시끄럽거든요……부디 유일한 쓰임새에 충실해 주세요……제게 사랑을 속삭이는 데에❤️」"

strike_success:
  # EXPNAME:25 - 26 = 性愛回数 - 睡眠姦回数
  - if: t = (era.get('exp:119:25') - era.get('exp:119:26')) >= 10
    lines:
      # @author 黑奴队长
      - "%YOU%는 드림 저니의 몸을 너무도 잘 알고 있다"
      - "몇 번이고 %SEX%의 피부를 구석구석, 빠짐없이 탐해 왔으니까"
      - "그러니 지금처럼 한 곳을 살짝 건드리기만 해도 %SEX%가 얼굴을 붉히고 숨을 흐트러뜨리며 무너지는 것은 당연하겠지"
      - "%YOU%는 고개를 든다. 틈새로 자유라는 이름의 희미한 빛이 새어 나오는 철문. 고개를 숙이면, 눈앞에는 %YOU%의 성과이자 자랑, 가장 사랑하는 이이자 죄가 누워 있다"
      - "%YOU%는 절정의 여운으로 움직이지 못하는 자그마한 몸을 안고, 사랑의 보금자리이자 감옥인 이곳에서 천천히 나간다"
      - "적어도 %SEX%를 여기에 눕혀 둔 채 갈 수는 없다"
  - if: t < 10
    lines:
      # @author 幽白書
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「끝까지……저를 믿어 주지 않으셨군요?」"
      # CFLAGNAME:1 = 種族
      - if: "!era.get('cflag:0:1')"
        content: "인간의 힘이기는 해도, %CHARA%처럼 자그마한 %UMA%에게는 충분했다"
      - "%CHARA%는 슬픈 표정으로 천천히 쓰러진다……"
      - "%YOU%는 지하실에서 탈출했다……"

strike_fail:
  - "실패했다……"
  - "%CHARA%가 돌아본다. 화를 내려나?"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%……열심히 하셨네요……」"
  -
  - "%CHARA%가 살며시 %YOU%를 끌어안았다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「서툰 기술을 열심히 배우셨군요……정말로, 힘을 조금만 더 주셨다면 저를 잠깐 어지럽게 할 수 있었을 텐데요……」"
  - "%CHARA%의 자그마한 몸이 더욱 깊이 품으로 파고든다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하지만 인체에는 활용할 수 있는 약점이 더 있답니다……이를테면……」"
  -
  - "%CHARA%가 안고 있던 손으로 허리 한 곳을, 세지도 약하지도 않게 두드렸다."
  - "순간 몸이 움직이지 않는다……"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그럼 돌아가서 제대로 배워 보도록 하죠……인체에 관한 지식을요❤️」"
  -
  - "%YOU%는 어둠 속으로 떨어졌다……"

battle_escape:
  - "풀렸다."
  - "마지막 자물쇠……낯익은 열쇠 구멍 모양을 보고, %YOU%는 쓰러진 %CHARA%의 곁으로 돌아간다."
  - "그 낯익은 모양은 바로 %CHARA%의 귀 장식이 아닌가."
  -
  - "%YOU%는 상대를 깨우지 않도록 살며시 %CHARA%의 머리 장식을 빼내어 마지막 장치를 열었다."
  -
  - "장치가 열리자 말린 편지 한 장이 %YOU%의 손에 떨어졌다."
  - "편지에는 %YOU%를 향한 사랑과 사과가 적혀 있다."
  -
  - "……이것은 진심으로 쓴 고백일까."
  - "아니면 또 한 겹의 계산일까."
  - "아직 누워 있는 %CHARA%를 보며 %YOU%는 잠시 망설였다."
  - "%YOU%는 %CHARA%의 곁으로 돌아가 힘이 풀린 몸을 업었다."
  - "적어도 이 지하실은 %SEX%가 있을 곳이 아니다……"

battle_prison:
  - "앞서 있던 장치는 모두 풀었다."
  - "마지막 자물쇠……낯익은 열쇠 구멍 모양을 보면서도, %YOU%는 도무지 떠올릴 수 없다. 대체 어디서 보았을까."
  -
  - "시간은 느리게 흐르고, %YOU%는 힘껏 자물쇠를 잡아당기지만 아무 소용도 없다……"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「열리지 않나요, %CALLNAME%?」"
  -
  - "마침내 뒤에서 목소리가 들렸다."
  - "헛된 발버둥은 끝났다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……역시 저를 믿어 주시지 않는군요. 슬퍼요……」"
  -
  - "슬프다고 말하면서도 실망한 기색은 조금도 없다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하지만……신뢰는 쌓아 갈 수 있는 거예요. %CALLNAME%가 저를 더 잘 알게 되시면, 더욱 믿어 주시리라 생각해요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그러니 부디 제 몸을, 제 모든 것을 더 잘 알아 주세요……」"
  -
  - "저항할 틈도 없이 %YOU%는 %CHARA%에게 떠밀려 쓰러졌다……"
  - "남은 것은 어스름한 불빛 아래 은빛으로 빛나는 %CHARA%의 머리 장식뿐……"

find_escape:
  sync: true
  lines:
    - if: d.is_back
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「어머……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%……이 자물쇠를 열려고 하셨나요?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「열리지 않는다고요?……후후, 그거 기쁜 소식이네요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「당신처럼 올곧은 분은 절대 열 수 없는 자물쇠예요……저처럼 마음이 뒤틀린 사람을 위해 준비한 것이니까요……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그러니 당신이 이것을 열지 못한다는 사실에, 저는 진심으로 안심하고 기뻐한답니다.」"
    - if: "!d.is_back"
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「풀리지 않나요?」"
        -
        - "%CHARA%의 목소리를 듣자 %YOU%는 반사적으로 항복하듯 두 손을 들었다."
        - "%CHARA%는 서두르지 않고 %YOU%의 곁으로 다가와 철사 한 가닥으로 재빠르게 두 번 손을 놀렸다. %YOU%는 무슨 일을 한 건지 보지도 못했다."
        - "오랫동안 %YOU%를 가둬 두었던 자물쇠가 눈앞에서 허무하게 열린다."
        - "그러고는 다시 잠겼다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「후후……소일거리로는 만족스러우셨나요, %CALLNAME%?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「낙담하지 마세요……저마다 잘하는 일이 있는 법이죠. 아버지가 금세공사셔서, 이런 장치에는 조금 익숙할 뿐이에요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%도 더 잘하는 일이 있잖아요? 이를테면……잠자리에서 하는 일 같은 것❤️」"
    -
    - "%YOU%는 %CHARA%에게 이끌려 침대 곁으로 돌아왔다……"

get_up:
  sync: true
  lines:
    - "%CHARA%가 눈을 떴다……"
    - if: d.b_start
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「응……%CALLNAME%, 잘 주무셨나요?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「왜 여기 있느냐고요……그보다 안고 있으니 어떠세요? 누군가의 취향에 꼭 맞는, 이 자그마한 몸 말이에요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……기분 좋으셨……나요? 후후, 당신의 솔직함은 여전히 저를 기쁘게 해요.」"

back_basement:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「%CALLNAME%, 다녀왔어요.」"
    - if: d.b_start
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……아, %CALLNAME%, 깨어 계셨나요?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아무튼 다녀왔어요. 응……쪽……츄릅……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「뭘 하느냐고요? 귀가 의식이랍니다.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「지하실이요? 아니요, 집이란 당연히 당신을 말하는 거예요……제가 가장 사랑하는, 몸과 영혼의 안식처❤️」"

start_fixing:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아, %CALLNAME%, 좀 도와주시겠어요?」"
    # CFLAGNAME:6 = 身長
    - if: era.get('cflag:0:6') > era.get('cflag:119:6')
      color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「네, 붙잡아 주세요……이 사다리, 조금 흔들리네요……면목 없어요. 키가 모자라 이런 꼴을 보여 드리다니.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「후우……네, 고마워요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「뭘 하고 있느냐고요? 문에 새 자물쇠를 달고 있을 뿐이에요……도와주셔서 감사해요.」"
    -
    - "……진작 알았더라면 %SEX%를 돕지 않았을 텐데……"

out:
  sync: true
  lines:
    - "%CHARA%는 다른 볼일이 있어 곧 나가려 한다……"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「미안해요, %CALLNAME%……먼저 나가 봐야겠어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「고민이 있다면 나눌 수 있다고요……? 당신을 여기 가둬 둔 저를, 그래도 돕고 싶다고 하시는 건가요?」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「정말 착한 분이시네요……하지만 괜찮아요. 당신은 여기에 있어 주시면 돼요. 제 유일한 『돌아갈 곳』으로 있어 주시는 것이야말로 가장 큰 도움이니까요.」"

ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「제가 왜 당신을 붙잡아 두겠어요?」"
  -
  - "다행이다. %SEX%가 승낙했다."
  - "들뜬 %YOU%는 %SEX%가 마음을 바꾸기 전에 출구로 향한다."
  - "하지만……"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아, %CALLNAME%, 잠깐만요.」"
  -
  - "나가고 싶다."
  - "어서 바깥의 햇살을 보고 싶다."
  - "그 모든 바람이………갑자기 굳어 버린 두 다리 때문에 헛된 상상이 되었다."
  -
  - "%CHARA%가 곁으로 와서 %YOU%의 옷깃을 다듬고, 자신이 구겨 놓은 옷자락을 하나하나 바로잡으며, 며칠간 방 안에 갇혀 있는 동안 쌓인 먼지를 털어 낸다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「밖에는 벌레가 많아요. %CALLNAME%, 나가시면 부디 조심하세요……두 번 다시 벌레들이 달라붙지 않도록요.」"
  -
  - "「다시」 달라붙게 된다면, 그 뒤에는 무엇이 기다릴까."
  - "희미하게 웃는 입꼬리와 웃고 있지 않은 눈을 보면, 답은 분명하다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「다 됐어요, %CALLNAME%……계속 가세요.」"
  -
  - "허락의 말이 떨어진 뒤에야 몸이 다시 움직였다."
  - "%YOU%는 다시 출구로 향한다……이번에는 서두르지 않는다."
  - "지하실을 나가더라도 %YOU%의 마음은 %CHARA%의 지배에서 벗어날 수 없다."
  - "그 낙인이 %YOU%의 마음 깊이 새겨진 듯하다."

ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「제가 왜 당신을 붙잡아 두겠어요?」"
  -
  - "다행이다. %SEX%가 승낙했다."
  - "하지만 문에 다가갈수록 언제나 곁에 있던 향기가 옅어지고, 몸은 괴로워진다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「어머, 돌아오셨나요? 역시……제 곁에 계시는 편이 당신에게 더 맞겠죠?」"
  -
  - "%YOU%는 이제 %CHARA%를 떠날 수 없다——그 사실을 증명하려고 %YOU%를 보내 준 것만 같다."
  - "지하실의 지배자는 여유로운 미소를 지었다"

ask_time:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「지금 %CALLNAME%에게서 나는 냄새가 무척 마음에 들어요.」"
  - "질문에는 답하지 않은 채, %CHARA%가 %YOU%의 손목에 코를 댄다. 그곳에서 가장 짙은 향이 피어오른다."
  - "——오직 %CHARA%만의 것이다."
