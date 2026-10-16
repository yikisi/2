# @file シュヴァルグラン - 地下室
# @author 無奈
first_time:
  sync: true
  lines:
    - "좁은 공간에 문을 두드리는 소리와 도와 달라는 외침이 울려 퍼진다. 돌아오는 것은 차가운 감촉과 침묵뿐이다."
    - "어두운 방에 오래 머물수록 시간 감각이 희미해진다. 남는 것은 머릿속을 맴도는 무수한 의문뿐."
    -
    - "「콜록…… 콜록, 콜록……」"
    -
    - "목을 너무 쓴 탓에 터져 나오는 기침을 억누르며, %YOU%은(는) 최대한 침착하려 애쓴다."
    - "누군가에게 납치된 것이라면 정면으로 부딪치는 일을 피할 수는 없을 것이다."
    - "지금은 생각을 정리하고 잠시 쉬어야 할지도 모른다."

welcome:
  sync: true
  lines:
    - if: era.get('exp:89:监禁次数') === 1
      lines:
        - "차가운 공기가 잠들어 있던 의식을 깨운다. %YOU%의 눈에 낯선 천장이 흐릿하게 들어온다."
        - "익숙한 것을 찾아 헤매던 시선에 작고 하얀 모습이 잡혔다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아……! 다행이다, %CALLNAME%! 깨어나셨군요!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……몸은…… 어디, 아픈 데는 없으세요?」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「히, 힘을 얼마나 줘야 할지 몰라서…… 맞아서 기절하셨으니까, 아프셨겠죠……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……여기는?」"
        -
        - "잠깐의 침묵."
        - "어리둥절해하던 %YOU%의 시선이 %CHARA%과 마주친다."
        - "빛을 잃고 탁해진 푸른 눈동자에서 깊은 미안함이 배어 나온다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「죄송해요…… %CALLNAME%께는, 말씀드릴 수 없어요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……하, 하지만! 그냥 %CALLNAME%하고 이야기하고 싶었을 뿐이에요. 다치게 하지는 않을게요……!」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「그러니까…… %CALLNAME%, 여기 있어 주세요. 아무 데도 가지 마세요.」"
    - if: era.get('exp:89:监禁次数') !== 1
      lines:
        - "%YOU%은(는) 눈을 번쩍 떴다. 익숙한 천장은 두려워하던 일이 현실이 되었다는 뜻이었다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「아, %CALLNAME%, 깨어나셨네요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「왜…… 잘못이라도 하신 것 같은 표정을, 짓고 계세요?」"
        -
        - "무겁고 탁한 잿빛 침묵."
        - "그 푸른 눈동자에 잠긴 %YOU%은(는) 그 안에서 죄책감에 흔들리는 자신을 보았다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%을(를) 탓하려는 게 아니에요. 이렇게 된 건…… 전부, 제 잘못이에요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「계속, 제가 %CALLNAME%께 너무 의지했어요…… 어리광만 부리고……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말 좋아하는 %CALLNAME%께서 슬퍼하시는 모습을 보는 게 괴로워서…… 도망치기만 했어요.」"
        -
        - "그 모든 것을 지켜보던 %CHARA%은 %YOU%의 뺨을 살며시 쓰다듬고 다시 입을 연다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「하지만 이번에는…… 아무리 마음이 아파도, 저, 힘낼게요. 힘내야 해요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「이제 누구에게도 기대지 않을게요. 울지 않을게요. 도망치지 않을게요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「당신의 몸도, 냄새도, 체온도, 똑같이 좋아해요.」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%, 사랑해요.」"

flatter_after_strike:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……부, 붕대는 다 감았어요. 장롱이…… 넘어질 줄은, 몰랐어요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저기, %CALLNAME%…… 왜 저를 지켜 주셨어요? 아무것도 하지 않으셔도 됐는데……」"
  -
  - "진실을 말할 수 없는 %YOU%은(는) 트레이너의 의무라며 둘러댄다."
  - "죄책감에 젖은 %CHARA%의 얼굴을 보니, %YOU%의 행동이 %SEX%의 결심을 상당히 흔들어 놓은 모양이다."

flatter_after_battle:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%…… 쉬, 쉬실래요? 요즘…… 피곤해 보이셔서요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「제, 제가 무릎, 무릎베개, 해 드릴게요……」"
  -
  - "%CHARA%의 수줍은 부탁에 따라, %YOU%은(는) %TEEN%의 따뜻하고 부드럽고 도톰한 허벅지에 천천히 머리를 기댔다."
  - "하지만 이유를 묻자 「식사하실 때마다 잠드셔서요」라는 대답이 돌아와, %YOU%은(는) 조금 고개를 갸웃거린다."

flatter_no_escape_first:
  - "긴장을 늦추지 않고 비위를 맞추는 %YOU%에게 %CHARA%은 마음이 풀린 모양이다. 자그마한 %UMA%는 침대 끝에 얌전히 앉아 평소처럼 수줍게 웃는다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「단둘이 있는 방…… 왜인지, 무척…… 그리워요.」"
  -
  - "시간을 꿰뚫고 들려오는 그 목소리에는 외면할 수 없는 쓸쓸함이 담겨 있다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「예전에는, 둘만의 일상이 계속될 거라고, 생각했어요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「언제부터였을까요…… %CALLNAME% 곁에…… 저 말고 다른 사람이, 나타났어요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「질투해서…… 용서받지 못할 짓을 했어요…… 우리 관계는 이제, 어떻게 해도 예전으로는 돌아갈 수 없겠죠……」"

flatter_no_escape_second:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「사실은…… 저도 후회했어요. %CALLNAME%을(를) 가두지 말았어야 했다고요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……하지만…… 도저히, 떨어지고 싶지 않아요.」"
  -
  - "%CHARA%은 말없이 고개를 숙인다. 모자챙이 표정을 가리지만, 떨리는 손끝까지 숨길 수는 없다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「자유를 빼앗고, 여기에 가두고. 이런 제가 싫어지실 거라는 건 알아요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하지만, 알고 있어요…… 아무것도 하지 않으면, 다시는 저를 만나러 와 주지 않으실지도 모른다는 걸……!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「부탁이에요…… %CALLNAME%…… 곁에, 있게 해 주세요……」"

flatter_no_escape_third:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저기, %CALLNAME%…… 웃어 주세요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이렇게…… 날이 갈수록 야위어 가시는 모습을 보는 건…… 저, 견딜 수 없어요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「예전처럼, 머리를 쓰다듬어 주세요…… 제 좋은 점을, 좋아한다고 말해 주세요……」"
  -
  - "%YOU%은(는) 억지로 웃었다. 하지만 그 모습을 본 %CHARA%의 얼굴이 일그러진다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아니야…… 이건, 아니야…… 내가 원했던 건…… 이런 당신이……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……알았더라면…… 이렇게, 될 줄 알았더라면…… 흑…… 으으…… 으으……」"

flatter:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……%CALLNAME%, 억지로 저와 이야기하지 않으셔도, 괜찮아요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이제…… 어떻게 해야…… 당신을, 붙잡을 수 있을까요……?」"
  -
  - "지키려 애쓰던 어른으로서의 자존심은 몸과 함께 손쉽게 무너졌다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……좋아해 주시기만 한다면…… 몸뿐이라도.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%…… 제가…… 소중히 해 드릴게요❤️」"

strike_success:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%, 다녀왔어요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「어—— 읍!」"
  -
  - "문을 열어도 %YOU%이(가) 보이지 않자 %CHARA%은 그 자리에 굳어 버렸다."
  - "문 뒤에 숨어 있던 %YOU%은(는) 틈을 노려 수면제 가루를 적신 천으로 %CHARA%의 입과 코를 막았다."
  - "품 안의 %CHILD%는 잠깐 몸부림치더니 이내 조용해졌다."
  -
  - "「하아……」"
  -
  - "계획대로 된 %YOU%은(는) 절반 가까이 찢어 낸 소매를 보며 호흡을 가다듬고 한숨을 내쉰다."
  - "위험한 방법이지만, %CHILD%의 몸을 다치게 하지 않을 유일한 방법이기도 했다."
  -
  - "「푹 쉬어.」"
  -
  - "품 안에 안긴 %CHILD%의 얼굴에는 옅은 화장으로 가린 다크서클이 보인다. 이제 %SEX%를 죄책감에서 풀어 줄 때다."
  - "힘이 풀린 %CHARA%을 침대에 눕히고, %YOU%은(는) 메모를 남긴다. 언젠가 얼굴을 마주하고 사과하고 싶다."
  - "그렇게 마친 뒤, %YOU%은(는) %CHARA%의 주머니에서 꺼낸 열쇠로 문을 열고 사랑으로 지어진 감옥에서 벗어났다."

strike_fail:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「영차…… 영차……」"
  -
  - "무방비하게 방을 정리하는 %CHARA%의 등을 노려보며, %YOU%은(는) 극도로 긴장한 채 설치한 함정을 흘끗 본다."
  - "식탁 의자에 앉으면 의자가 부서지는 동시에 뒤에 있는 장롱이 넘어진다."
  - "그러면 %UMA%도 한동안 움직이지 못할 것이다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%의 침대를 정리하고 있으면…… 왠지…… 가, 가족이 된 것 같아서…… 에헤헤.」"
  -
  - "조금만 더 앞으로——"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「혼자서 자주 상상해요…… %CALLNAME%하고 가족이 되는 모습을요.」"
  -
  - "그 의자에 앉기만 하면——"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하지만 %CALLNAME%을(를) 가둔 순간부터, 그 상상은 현실이 될 수 없겠죠……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저기, %CALLNAME%…… 식사, 준비했어요——」"
  -
  - "「——야!!」"
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「——앗, %CALLNAME%!」"
  -
  - "뼈가 울리는 소리와 %TEEN%의 비명이 날카로운 화음을 이룬다."
  - "%CHARA%을 밀쳐 내고 대신 장롱에 깔린 %YOU%은(는) 어째서인지 안도하고 있었다."

battle_fail:
  - if: d.time <= 3
    content: "%YOU%은(는) 철사로 소맷부리를 찢고 셔츠 안쪽에서 가루약이 듬뿍 든 봉지 하나를 꺼낸다."
  - if: d.time > 3
    content: "%YOU%은(는) 어째서인지 커다란 구멍이 뚫린 소매에 손을 넣어 셔츠 안쪽에서 작은 가루약 봉지를 꺼낸다."
  - "트레이너 회의에서 나눠 준 「%UMA%용 수면제」 견본. 정말 쓰게 될 날이 올 줄이야."
  - "강사의 말에 따르면, 이 약은 %UMA%가 폭행 당시의 기억을 잊고 평범한 파트너 관계로 돌아가도록 하기 위한 것이다."
  - "「대단한 발명이군」 하고 혀를 차며 감탄하면서, 식기를 찾는 %CHARA%의 등을 확인한다."
  - if: (t = Math.random() < 0.1)
    lines:
      - "「아…… 에취!!」"
      -
      - "하지만 %YOU%이(가) 가루약을 꺼낸 순간, %CHARA%의 털 한 가닥이 코끝을 스쳤다."
      - "조금 들이마신 것 같은데…… 뭐, 「%UMA%…… 용…… 수면…… 제……」니까."
  - if: "!t && era.get('relation:89:0') >= 100"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저기…… 제, 제가 %CALLNAME%께 먹여 드릴게요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아—— 아~」"
      -
      - "음식을 %YOU%의 입가로 가져오는 %CHARA%. 예상 밖이지만 치명적인 문제는 아니다."
      - "「%UMA%용」 특효약이라고 생각했기에 %YOU%은(는) 거절하지 않았다."
  - if: "!t && era.get('relation:89:0') < 100"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「자, 잘 먹겠습니다……」"
      - "「잘 먹겠습니다.」"
      -
      - "%YOU%은(는) %CHARA%이 움직일 수 없게 된 뒤의 계획을 생각하며 숟가락 하나 가득 음식을 떠서 입으로 가져간다."
  -
  - 「……？」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「어……? %CALLNAME%……?」"
  -
  - "빨려 들어갈 듯한 졸음이 밀려오더니 사고가 순식간에 깊은 바다로 가라앉는다."
  - "장난하나…… 「%UMA%용」이라는 게 「%UMA%에게도 통할 만큼 강하다」는 뜻이었어……?"
  - "이런 약을 만든 자를 속으로 저주하며, %YOU%은(는) 힘없이 %CHARA%의 품에 쓰러져 저항하지 못하고 잠든다."

battle_escape:
  - "%CHILD%를 안아 침대에 눕힌 뒤, %YOU%은(는) 천사 같은 %CHARA%의 잠든 얼굴을 보며 한숨을 내쉰다."
  - "예전에는 %SEX%가 늘 천사처럼 웃곤 했다. 그 모습을 바꿔 버린 것은 다름 아닌 %YOU%다."
  - "두꺼운 철문은 이미 열려 있다. %TEEN%의 노력은 이제 재가 되어 사라지려 한다."
  -
  - "「미안하다, %CALL_89%.」"
  -
  - "%CHARA%에게 사과하고 돌아서려는 순간, 소맷부리를 붙잡혔다."
  - "붙잡힌 소매를 통해 %CHILD%의 작은 손이 불안하게 떨리는 것이 느껴진다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「가지 마세요…… %CALLNAME%……」"
  -
  - "잠들어 있을 자그마한 %UMA%가 꿈속에서 %YOU%의 이름을 부른다."
  - "%SEX%는 무슨 꿈을 꾸고 있을까."
  - "꿈속의 %YOU%도 똑같이 %SEX%를 두고 떠나는 걸까."
  -
  - 「……」
  -
  - "여기서 머뭇거릴 시간은 없다."
  - "%CHARA%이 또 울면서 붙잡으면, %YOU%은(는) 자신이 어떤 결정을 내릴지 알 수 없다."
  - "%YOU%은(는) 잠든 %CHARA%에게 살며시 이불을 덮어 주고 지하실을 나섰다."

battle_prison:
  - "침대에서 잠든 %CHARA%을 보며, %YOU%은(는) %UMA%용 수면제를 준비해 두길 잘했다고 생각한다."
  - "수면제라고는 하지만 지속 시간은 짧다. 오 분 정도면 효과가 사라진다."
  -
  - "%YOU%은(는) 서둘러 열쇠 구멍에 철사를 가져다 댄다. 하지만 철사가 한계까지 휘어도 철문은 꿈쩍하지 않는다."
  -
  - "「쳇, 어쩌면 좋——」"
  -
  - "느닷없이 뒷덜미에 커다란 충격이 가해진다."
  - "몸이 바닥으로 떨어진다. 그런데도 깃털 이불에 엎드린 듯 의식이 아득해진다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……%CALLNAME%, 죄송해요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저도, 이런 건 싫어요…… 착하게 굴어서, 사랑받고 싶었어요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「괴로워하시는 모습을 보면…… 저도 아파요. 지금처럼요.」"
  -
  - "흐릿해진 시야 속에서 %YOU%의 눈이 죄책감으로 가득 찬 그 눈동자와 마주친다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「분명 %CALLNAME%께는, 책임지고 싶은 일들이, 많이 있으시겠죠……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「제가…… 그 괴로운 일들을, 잊게 해 드릴게요————」"
  -
  - "%YOU%의 의식은 계속 가라앉고, %CHARA%의 목소리는 멀어졌다가…… 가까워진다."

find_escape_out:
  sync: true
  lines:
    - "무심코 움직인 철사가 자물쇠 속 무언가에 닿은 것 같았다."
    - "%YOU%은(는) 철사를 움켜쥐고 세게 돌린다. 자물쇠 안쪽이 매끄럽게 돌아가는 감촉이 느껴졌다."
    - "%YOU%은(는) 속으로 환호하며 철문을 밀고 좁은 통로로 나선다. 여기만 빠져나가면——"
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……%YOU%, 어디 가세요?」"
    -
    - "소름이 돋는 듯한 오한이 온몸을 훑고, 목에서 등까지 식은땀으로 젖는다."
    - "통로 건너편에서 들려온 목소리는 거의 들리지 않을 만큼 가냘프다. 하지만 그 뜻만큼은 선명하게 전해진다."
    - "다가오는 %UMA%는 %YOU%에게 묻는 것이 아니다. 모든 것을 알고서 「확인」하고 있을 뿐이다."
    -
    - "「이, 이것도 %CALL_89%을 위해서……」"
    -
    - if: (t = era.get('exp:89:监禁次数')) === 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「정말 저를 위해서라면…… 그런 말로 대답하지 말아 주세요.」"
        -
        - "문 안쪽으로 몰린 %YOU%. 바로 앞에 있는 담당 우마무스메. 불길한 예감이 퍼진다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저한테는, %CALLNAME%이(가) 가장 소중하고, 전부예요……」"
    - if: t !== 1
      lines:
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%…… 그런 말로, 얼버무리실 생각이세요……」"
        -
        - "문 안쪽으로 몰린 %YOU%. 바로 앞에 있는 담당 우마무스메. 불길한 예감이 퍼진다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「저…… 비블로스처럼 똑똑하지는 않아도, 쉽게 속아 넘어가는 바보는 아니에요.」"
    -
    - "찰칵—— 자물쇠가 돌아가는 차가운 소리가 고요한 방에 남는다."
    - "다시는 바깥세상과 접할 수 없는 이곳에서, %YOU%은(는) 체념한 듯 눈을 감았다."

find_escape:
  sync: true
  lines:
    - "달칵, 달칵——"
    -
    - "「쳇……」"
    -
    - "겨우 찾아낸 철사가 자물쇠 속에서 부러졌다."
    - "몇 번이고 실패해 온 %YOU%에게 실패 자체는 익숙하다. 하지만 남은 조각은 도망치려 했다는 증거가 된다."
    -
    - "「이거…… 안 빠져……!」"
    -
    - "언제부터 잘못된 걸까."
    - "어쩌다 여기까지 와 버린 걸까."
    - "머릿속에 자그마한 %UMA%의 천사 같은 미소가 환영처럼 떠오른다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - 「……%CALLNAME%？」
    -
    - "가냘픈 목소리가 %YOU%의 움직임을 멈추고, 충동적인 탈옥 놀이는 여기까지라고 알린다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「죄송해요, %CALLNAME%……」"
    -
    - "%YOU%은(는) 돌아서서 %CHILD%의 얼굴을 확인하지도 못한 채, 다시 침대로 끌려갔다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「전부 제 잘못이에요… %CALLNAME%을(를) 제대로 돌봐 드리지 못해서, 나가고 싶게 만들었어요.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「……%CALLNAME%께, 제 마음을, 느끼게 해 드려야겠어요…」"

get_up:
  sync: true
  lines:
    - "%CHARA%은 %YOU%의 이름을 부르며 꿈에서 벌떡 깨어나, 다급히 %YOU%의 모습을 찾는다."

back_basement:
  sync: true
  lines:
    - if: d.start
      lines:
        - "%YOU%이(가) 저항할 방법을 찾던 중, 자물쇠에서 갑자기 「찰칵」 하는 소리가 났다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%…… 깨어나셨네요……」"
        -
        - "하지만 문간에 나타난 모습은 상상했던 흉악한 범인이 아니었다."
        - "자그마한 %UMA%가 손을 뒤로 돌리자, 자물쇠가 다시 반대 방향으로 돌아가며 메마른 소리를 낸다."
        - "귀마개 아래의 작은 귀가 한 번 흔들리더니, 주인과 함께 다가와 %YOU% 앞에 멈춘다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「거기…… 아프셨죠……」"
        -
        - "%TEEN%는 떨리는 작은 손을 %YOU%의 뒤통수로 뻗다가 잠깐 멈추고, 대신 모자챙을 내렸다."
        -
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「……죄송해요…… 제대로, 설명할게요……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「할 수만 있다면…… 이런 짓은, 하고 싶지 않았어요……」"
        - color: %COLOR%
          content:
            - fontWeight: bold
              content: %CHARA%
            - "「%CALLNAME%을(를) 다치게 하지 않으려면…… 이번에는…… 이제, 곁에서 떠나지 말아 주세요……」"
    - if: '!d.start'
      lines:
        - if: true
          random: true
          lines:
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「저기…… %CALLNAME%, 다녀왔어요.」"
            -
            - "철문을 열고 나타난 자그마한 %UMA%는 종이봉투를 들고 있다. 포장을 보니 「광조」의 고기만두다."
            - "함께 먹자는 %YOU%의 권유에 %TEEN%는 작게 고개를 젓는다."
            - "벌써 먹은 걸까. %YOU%이(가) 이유를 짐작하며 첫입을 베어 물기도 전에, %TEEN%의 배에서 먼저 소리가 났다."
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「……%CALLNAME%께서 여기 갇혀 계시는데, 저만 고기만두를 먹는 건……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「그렇게 생각하면…… 왠지…… 아무것도, 먹을 수 없어서요.」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「저는 신경 쓰지 않으셔도 돼요…… %CALLNAME%께서 기뻐해 주시면…… 그것만으로……」"
        - if: true
          random: true
          lines:
            - "밖에서 빗소리가 희미하게 들려온다. %YOU%은(는) 축축하고 차가운 공기를 깊이 들이마시고, 초조함이 섞인 한숨을 내쉰다."
            - "두꺼운 문이 갑자기 열리고, 이어서 물방울이 바닥에 떨어지는 소리가 난다."
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「다녀왔어요…… %CALLNAME%.」"
            -
            - "흠뻑 젖은 교복이 자그마한 %UMA%의 몸 곳곳에 달라붙어 있다."
            - "수병 모자는 비에 젖어 색이 짙어졌고, 보송보송하고 멋지던 짧은 머리카락은 추위에 붉어진 뺨에 들러붙어 있다."
            -
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「……이런 날씨에는…… 여기도, 습하겠죠……」"
            - color: %COLOR%
              content:
                - fontWeight: bold
                  content: %CHARA%
                - "「제가…… %CALLNAME%의…… 귀, 파 드릴게요…… 에헤헤……」"
            -
            - "발밑에 벌써 물웅덩이가 생긴 슈발 그랑은 그래도 남의 일처럼 태연한 얼굴이다."
            - "%YOU%은(는) 인형 같은 %TEEN%를 억지로 침대로 끌어당겨, %SEX%에게 이불을 덮어 주었다."

out:
  sync: true
  lines:
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「응……? 벌써…… 수업 시간인가 봐요……」"
    -
    - "멍하니 얼굴을 들자 휴대전화 불빛이 %TEEN%의 지치고 창백한 얼굴을 비춘다."
    - "%SEX%에게는 몸도 마음도 상당한 부담일 것이다."
    -
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「아…… 고마워요…… 아직도, 걱정해 주셔서…… %CALLNAME%.」"
    - color: %COLOR%
      content:
        - fontWeight: bold
          content: %CHARA%
        - "「하지만…… %CALLNAME%의 마음이 돌아오기만 한다면, 이 정도는…… 괜찮아요……」"

ask_release_agree_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……네.」"
  - "여기서 나가고 싶다는 %YOU%의 부탁을 듣고, %CHARA%은 한참을 망설이다가 겨우 작게 고개를 끄덕였다."
  -
  - if: d.another > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「요즘…… 그 사람이 그러더라고요…… %CALLNAME%을(를) 외국으로 데려가겠다고요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%SEX%는, 거기로 가면…… 언제까지나 %CALLNAME%을(를) 독차지할 수 있대요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「『영원히』라는 건…… 정말…… 정말, 매력적이에요.」"
      -
      - "%CHARA%은 씁쓸하게 웃는다."
      - "기억하는 한, 이 지하실에 온 뒤로 %TEEN%는 늘 씁쓸하게 웃고 있다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하지만…… 추억이 가득한 이곳을, 떠나는 건, 싫어서요.」"
  - if: '!(d.another > 0)'
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「요즘…… 베르시나와 비블로스가 뭔가 눈치챈 것 같아서, 계속 포기하라고 해요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「%THEY%이 저를 위해 그러는 건 알아요. 하지만, 그건…… 여기도 이제 위험하다는 뜻이기도 해서……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이제 곧, 구조대가…… 여기를 찾아낼 거예요.」"
      -
      - "%CHARA%은 씁쓸하게 웃는다."
      - "기억하는 한, 이 지하실에 온 뒤로 %TEEN%는 늘 씁쓸하게 웃고 있다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하지만…… 저…… 그것 때문에 %CALLNAME%을(를) 보내 드리는 건, 아니에요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「조금만 사랑받아도 괜찮아, 전부 버려도 괜찮아…… 이제 손을 놓지 않겠다고 생각했어요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「제 손으로 %CALLNAME%을(를) 망가뜨리게 되더라도, 곁을 떠나고 싶지 않았어요.」"
  -
  - "거기까지 말한 %CHARA%은 무의식중에 작은 주먹을 쥔다."
  - "하지만 %YOU%과(와) 눈이 마주치자 %CHILD%는 서서히 손을 풀었다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……하지만…… 얼마 전부터, %CALLNAME%하고 함께했던…… 여러 일을, 떠올려 봤어요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「역시…… %CALLNAME%을(를) 제 눈앞에 묶어 두는 것보다——」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「제가 가장 좋아하는 건, %CALLNAME%의 웃는 얼굴이에요.」"
  -
  - "그렇게 말한 %CHARA%은 주머니에서 열쇠 꾸러미를 꺼낸다. 두 사람의 만남을 지켜본 물건이다."
  - "%SEX%는 떨리는 작은 손으로 열쇠 하나를 골라 자물쇠에 꽂는다."
  - "「찰칵」 소리와 함께 무겁고 숨 막히던 자물쇠가 마침내 열렸다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이렇게 자유를 돌려 드리면…… 다시, 저를 좋아해 주실까요……?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……그럴 리 없겠죠. 불가능하다는 걸 알면서도, 기대하지 않을 수가 없어서……」"
  -
  - "%YOU%은(는) 알아차린다. %CHARA%의 두 손은 자기 치마를 꼭 움켜쥐고 있다."
  -
  - if: d.another > 0
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「어서 가세요, %CALLNAME%…… 다른 사람이 돌아오기 전에요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「저는 걱정하지 않으셔도 돼요…… 괘, 괜찮으니까요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「게다가, 이런 저는, 걱정해 주실 가치도……」"
      -
      - "그래도 %CHARA%은 무거운 문을 밀어 열고, %YOU%을(를) 재촉해 내보낸다."
  - if: '!(d.another > 0)'
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「제가 한 짓이…… 사과한다고 끝날 일이 아니라는 건, 알고 있어요.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그래도…… 죄송해요, %CALLNAME%.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그리고, 안녕히 가세요…… %CALLNAME%.」"
      -
      - "그래도 %CHARA%은 억지로 미소를 지어 %YOU%을(를) 배웅한다."
  - acc: 1
    key: select
    content: "혼자 나간다"
    lines:
      - 「……！」
      -
      - "무언가 말하고 싶었다. 하지만 바싹 마른 목 때문에 입을 벙긋거릴 수밖에 없었다."
      - "눈앞의 %CHARA%이 아무리 걱정되어도, 몸과 마음 모두 한계에 가까웠다."
      - "이번 행동은 충동적이었을지도 모른다…… 하지만 %CHILD%를 보기만 해도 두려워지는 마음은, 깨진 거울을 되돌릴 수 없다는 증거다."
      - "지상으로 돌아간 뒤 %CHILD%의 이번 폭행을 덮어 주는 것만이, %YOU%이(가) 할 수 있는 유일한 일일지도 모른다."
      -

      - "(젠장……)"
      -
      - "한심한 자신을 저주하며, %YOU%은(는) 벽을 짚고 간신히 지하실을 나섰다."
  - if: d.leave_together
    acc: 2
    content: "%SEX%에게 함께 나가자고 한다"
    lines:
      - "철문과 %CHILD% 사이를 오가던 시선 끝에, %YOU%은(는) 마음을 정했다."
      -
      - "「%CALL_89%…… 네 꿈, 기억하고 있어?」"
      -
      - "%CHARA%의 태도를 보면, 이번의 과격한 행동은 충동에 불과하다."
      - "누구나 잘못은 한다. 어른으로서 %SEX%에게 다시 시작할 기회를 줄 필요가 있다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「네……?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「제, 제 꿈……」"
      -
      - "%CHARA%은 우물거리며 좀처럼 말을 잇지 못한다. 처음 만났을 때와 똑같다."
      - "그때 %CHILD%의 꿈을 이루어 주겠다고 약속했다. 이런 일로 포기할 수는 없다."
      -
      - "「그 꿈, 계속 이어 가자.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……네?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그건…… 저, 저도, 아직 %CALLNAME% 곁에 있어도 된다는 뜻인가요?」"
      - "「물론이지. %CALL_89%은 내 담당 우마무스메잖아.」"
      -
      - "그 말에 %CHARA%은 먼저 놀라더니, 이내 복잡한 표정을 짓는다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하지만…… 하지만 저는, %CALLNAME%을(를) 다치게 했잖아요!」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「게다가 %CALLNAME%께서 이렇게 오래 안 계셨으니…… 다들, 벌써——」"
      -
      - "%CHARA%의 말은 중간에 들이켠 숨에 삼켜졌다."
      - "%YOU%이(가) 정면에서 %CHILD%의 두 손을 잡아 가슴 앞으로 끌어 올렸기 때문이다."
      -
      - "「넌 아무것도 하지 않았어. 내가 증명할게.」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「……！」
      - "「당사자가 그렇게 말하잖아. 이보다 설득력 있는 말이 있겠어?」"
      -
      - "%YOU%은(는) 예전처럼 %CHARA%의 얼굴을 자신의 가슴에 묻어, %SEX%가 괴로운 생각을 하지 못하게 한다."
      -
      - "「누구나 악몽은 꿔. %CALL_89%은 잠버릇이 조금 고약했을 뿐이야.」"
      - "「깨어나면 끝이야. 그뿐이야.」"
      - "「애초에 %CALL_89%이 이런 일을 하게 만든 내가 원흉이지…… 용서해 줄래?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「%CALLNAME%……%CALLNAME%……！」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「으으윽…… 으으아아아……」"
      -
      - "%CHARA%은 %YOU%의 품에서 「용서할게요」를 몇 번이고 되풀이하며 한참을 울었다."
      - "진정된 뒤, %YOU%은(는) %CHILD%의 손을 잡고 지하실을 나섰다."

ask_release_agree:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네…… %CALLNAME%을(를), 보내 드릴게요.」"
  -
  - "%YOU%의 끈질긴 간청 끝에, %CHARA%은 한참을 침묵하다 마침내 마음을 꺾었다."
  - "하지만 이내 모자챙 아래의 눈동자로 %YOU%을(를) 똑바로 바라보며 조건을 말한다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하지만…… 이번에는, %CALLNAME%, 저를 제대로 봐 주세요.」"
  -
  - "%TEEN%의 조건에 %YOU%은(는) 망설임 없이 같은 잘못을 되풀이하지 않겠다고 몇 번이고 맹세한다."
  - "무의미한 맹세일지라도, %CHARA%은 기뻐하며 작게 고개를 끄덕인다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네…… %CALLNAME%을(를) 믿어요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하지만 이번에는…… 다시는 %CALLNAME%을(를), 제 시야에서 놓치지 않을 거예요.」"
  -
  - "풀려났다고 생각했던 %YOU%은(는) 그 한마디에 아직 끝난 것이 아님을 깨닫는다."
  - "앞으로의 불안과…… 뒤에서 따라오는 시선을 짊어진 채, %YOU%은(는) 지하실을 나섰다."

ask_release_reject_first:
  - if: d.ask_time <= 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「안 돼요——」"
      -
      - "거절한 뒤, 무언가 말하려다 멈춘 %TEEN%는 고개를 숙인다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「조금만 더, 시간을 주세요…… 부탁이에요…… %CALLNAME%……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「다시 한번…… 사랑받을, 기회를 주세요……」"
      -
      - "%CHARA%은 그렇게 말하며 %YOU%에게 안겼다."
      - "어리광이라기보다는 구속에 가까운 힘이다."
      - "어떻게 반응해야 할지 모르는 %YOU%은(는) 자그마한 %UMA%가 만족할 때까지 가만히 기다린다."
  - if: d.ask_time > 3
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「안 돼요——」"
      -
      - "거절한 뒤, %TEEN%의 눈가가 붉어진다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「이렇게 %CALLNAME%을(를) 가두고… 분명, 저를 원망하시겠죠……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「하지만 보내 드리면, 다시는 %CALLNAME%을(를) 만나지 못할지도 몰라요……!」"
      -
      - "%CHARA%은 그렇게 말하며 %YOU%에게 안겨 가슴에 얼굴을 묻는다."
      -
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「그건 안 돼요… 멀리서 바라보는 것조차 허락되지 않는다면, 제가 어떻게 될지 모르겠어요……」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「……부탁이에요, %CALLNAME%…… 저를 두고 가지 마세요……」"
      -
      - "%CHARA%이 울면서 붙잡아도, %YOU%은(는) 처음부터 대화의 여지 따위 없었다는 것을 알고 있다."
      - "그래서 %YOU%은(는) %SEX%를 마주 안고 진정될 때까지 기다렸다."

ask_release_reject:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「안 돼요.」"
  -
  - "나가고 싶다는 부탁은 단호히 거절당했다."
  - "반론을 허락하지 않는 %TEEN%의 얼굴을 보며, %YOU%은(는) 이제 할 수 있는 일이 거의 없다는 것을 깨닫는다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「알고 있어요. 이제 %CALLNAME%은(는), 훨씬 더 경계하시겠죠……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「여기를 나가시면…… 이제, 찾을 수 없어요.」"
  -
  - "%CHARA%은 그렇게 말하며 %YOU%에게 안겼다."
  - "어리광이라기보다는 구속에 가까운 힘이다."
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이번에는 제 시야에서 놓치지 않을 거예요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……독차지하기 위해서라면, 제가 무슨 짓을 할지 모르겠어요.」"

ask_time:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……! 지…… 지금, 볼게요…… 아, 저기……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「지금은 %TIME%예요…… %CALLNAME%의 일정을, 망쳐 버렸네요…… 죄송해요……」"