# @file ゼンノロブロイ - 募集
# @author 某不思議なオオハシ
# @author Claude (翻訳)
rec1:
  - "그 번뜩이는 빛은, 마치 지평선을 가를 것만 같았다. 그저 멀리서 바라보았을 뿐인데도, %YOU%은(는) 그 숭고하고도 거친 주법, 모든 것을 쏟아붓는 기백, 거침없이 나아가는 그 자태를 느낄 수 있었다."
  - "의심할 여지 없이, 그것은……"
  - acc: 1
    content: "(영웅……)"
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: "(……조교할 가치가 있는 암컷……)"
  - "관두자, 너무 깊게 생각하지 말자. 그렇게 대단한 %UMA%라면 진작에 계약을 맺었을 것이다."
  # FLAGNAME:15 = 名声
  - if: era.get('flag:15') < 500
    content: "얼른 데뷔전 자료를 정리하고, 신인 트레이너를 받아줄 만한 담당을 찾아보자."
  - acc: 1
    content: "(하지만 난 여전히 그 달리기를 한 번 더 보고 싶어)"
  - "오전 내내 자료를 정리했지만, 가능성 있는 %UMA%는 찾지 못했다."
  - if: era.get('flag:15') < 500
    content: "그럴 만도 하다. 잠재력 있는 %UMA%는 경험이 풍부한 트레이너와 계약하길 원할 테니까. 트레이너는 여러 세대의 %UMA%를 담당할 수 있지만, %UMA%에게 기회는 단 한 번뿐이다."
  - acc: 1
    content: "「%Y_CALL_301%에게 빌린 자료를 돌려줘야겠네. 도서관에 직접 반납하면 된다고 했던가?」"
  - "%YOU%은(는) 도서관으로 향했다. 부임할 때 %Y_CALL_301%에게 트레센의 훌륭한 시설에 관해 듣기는 했지만, 한 층을 통째로 차지한 도서관을 보니 역시 중앙이라는 생각이 새삼 들었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: ？？？
      - "「저, 저기, 전…… 오늘 당번인 도서위원인데요, 혹시 곤란한 일이라도 있으신가요?」"
  - "%YOU%이(가) 돌아보자 체구가 작은 %UMA%가 대출대 옆에 앉아 있었다. 책 더미가 %SEX%의 머리보다 높았다. 먼저 말을 걸어 주지 않았다면 여기 %UMA%가 있다는 사실조차 몰랐을 것이다."
  - "%SEX%가 일어나고서야 트레센 교복을 입은 작은 %UMA%의 얼굴이 보였다."
  - "잿빛이 살짝 도는 머리카락을 두 가닥의 하얀 리본과 함께 땋아 왼쪽 이마 옆으로 늘어뜨렸다. 코발트빛 보석 같은 눈동자에는 열정과 지성이 어려 있었다. 푸른 점이 박힌 난초 화환으로 오른쪽 귀를 장식했고, 커다란 안경은 귀여움과 차분함을 더했다. 작고 동그란 얼굴도 무척 귀여웠다. 큰 귀와 잘 움직이는 꼬리가 가볍게 흔들리는 모습은, 도서관에 사람이 찾아와 말동무가 생긴 것을 기뻐하는 듯했다."
  - acc: 1
    key: relation
    content: "「책을 반납하러 왔어」 (호감도+5)"
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - "「반납하시려고요? 반납하실 책을 제게 주시면 돼요……」"
      - "도서위원은 %YOU%의 손에서 책을 건네받고, 카운터에 있는 기계로 스캔한 뒤"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - "「하야카와 씨가 대출하신 책이군요, 자칫하면 반납 기한을 넘길 뻔했어요.」"
      - "%SEX%는 책을 몇 장 훌훌 넘겨보았다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - "「보관 상태가 아주 좋네요, 오염되거나 훼손된 곳이 전혀 없어요…… 당신도 책을 좋아하시나요? 만약 트레이너님이 %UMA% 트레이닝에 관한 책을 찾으신다면 제가 추천해 드릴 수도 있어요…… 저는 도서관에 앉아서 책을 자주 읽거든요.」"
      - acc: 1
        content: "「그래도 될까?」"
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - "「그럼요…… 하지만 그 대신, 나중에 당신과 담당 우마무스메의 이야기를 제게도 들려주셔야 해요.」"
  - acc: 2
    content: "「영웅을 찾으러 왔어」 (애정도+1)"
    lines:
      - "도서위원이 움찔했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - "「다, 당신도 영웅전기 같은 걸 좋아하시나요! 저도 영웅 서사시 같은 책을 정말 좋아해요. 역사적인 위업에 후세 사람들의 각색이 더해져, 허구와 진실이 뒤섞인 서사시야말로 신화적 색채를 지닌 진정한 영웅이라 부를 수 있죠!」"
      - "%YOU%은(는) 갑자기 말문이 터진 도서위원과 파르르 떨리는 귀를 보며, 이 소녀가 신화 전설이나 민속 서사시에 적잖은 흥미를 가지고 있다고 생각했다."
      - "「영웅 이야기를 꽤 좋아하나 보네.」"
      - "%YOU%은(는) %SEX%를 칭찬해 줄 생각이었지만, %SEX%의 귀가 갑자기 축 처지더니 얼굴에 긴장감이 번졌다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: ？？？
          - "「아…… 죄송해요…… 가, 갑자기 제멋대로 떠들어버려서. 민속 이야기는 이쪽에 있어요. 제가 안내해 드릴게요.」"
      - "%YOU%은(는) %Y_CALL_301%에게 빌린 책을 반납할 책 더미 위에 살며시 올려놓고, %SEX%를 따라갔다."
  - "도서 당번은 자리에서 일어나 해당 책장으로 안내하려 했다. 그러다 아직 이름을 말하지 않았다는 것이 생각나, 황급히 %YOU%을(를) 향해 돌아섰다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: "젠노 롭 로이"
      - "「죄송해요…… 자기소개하는 걸 깜빡했네요. 저는 중등부의 %CHARA%라고 해요. 미호 생활관에 묵고 있어요. 혹시…… 영웅 서사시 같은 것에 대해 궁금한 점이 있으시다면…… 제가 대답해 드릴 수 있어요.」"
  - if: era.get('cflag:47:0') !== 1
    lines:
      - "몸을 돌릴 때 너무 마음이 급했던 탓인지, 아니면 체구에 맞지 않는 발육 때문인지, %TEEN%의 가슴이 몸을 돌리는 반동으로 출렁거렸다."
      - "그제야 %YOU%은(는) %CHARA%라는 이름의 이 %UMA%가 나이에 맞지 않는 작은 키뿐만 아니라, 나이에 맞지 않는 풍만한 가슴과 엉덩이를 가지고 있다는 사실을 깨달았다."
      - acc: 1
        content: "(이 녀석, 키 클 영양분을 몸매에 다 쏟아부었나?)"
      - acc: 2
        content: "(훌륭한 가슴과 엉덩이, 다리까지. 완전 순산형 신붓감이네.)"
      - "%TEEN%는 %YOU%의 묘한 생각과 이리저리 힐끔거리는 시선을 눈치챘는지 헛기침을 했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%CALLNAME%은(는) 왜 영웅담 같은 책을 찾으시는 건지 여쭤봐도 될까요?」"
  - "%YOU%은(는) 그날 자신이 보았던, 마음을 뒤흔들었던 광경을 %SEX%에게 묘사했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「빛처럼 지평선을 가르는 영웅 같았다고요…… 단지 멀리서 한 번 봤을 뿐인데 몇 달 동안이나 찾아다녔단 말씀이신가요? %CALLNAME%은(는) 정말 로맨티스트시네요……」"
  - "서가 앞에 다다르자, %CHARA%는 뒤로 돌았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「여기가 바로 민속 문화 코너예요…… 저, 이런 말씀 드리기 좀 쑥스럽지만…… 저도 학원에서 그 영웅 같은 %UMA%를 찾는 걸 도와드려도 될까요?」"
  - "%CHARA%는 조금 들뜬 걸까? 눈이 반짝이기 시작했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저는…… 영웅 이야기에 대해 아주 잘 알고…… 학원 내에 아는 사람도 꽤 있어요…… 저도 그 영웅을 찾고 싶어요.」"
  - acc: 1
    content: "「하지만 트레센 학생의 본분은 달리는 거잖아. 이렇게 나를 도와주면 네 트레이닝에 방해되지 않을까?」"
  - "%CHARA%는 그 질문을 듣고 약간 횡설수설했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아…… 아니에요. 트레이닝도 있고 도서위원 일도 있지만, 저…… 저도 %CALLNAME%이(가) 『영웅』이라고 부르시는 그 %UMA%를 직접 보고 싶어요. 어째서 영웅이라 불리는지 알아보고 싶어서…… 저, 저도……」"
  - acc: 1
    content: "「저도?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아…… 아무것도 아니에요. 아무튼 앞으로 잘 부탁드릴게요, %CALLNAME%…… 내일부터 정보 수집을 시작할게요…… 일주일 뒤에도 제가 당번이니까, 그때 서로 정보를 교환하도록 해요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "(저도…… 영웅이 되고 싶거든요.)"

rec2:
  # 中庭
  - "%YOU%은(는) 약속대로 도서관에 와서 %CHARA%와 만났다."
  - "두 사람이 학원에서 함께 영웅을 찾고 다닌다는 소문은 이미 퍼져 있었다. 학원의 모든 사람들이 검은 뿔테 안경을 쓴 자그마한 %UMA%와 트레이너가 영웅을 찾아다닌다는 것을 알고 있었다. 당신들은 때로는 함께 조사하고, 때로는 흩어져서 행동했다. 인정할 수밖에 없는 것은, %CHARA%라는 이 %UMA%는 지식의 폭이 어찌나 넓은지 어떤 면에서는 이미 대학을 졸업한 %YOU%조차 뛰어넘는다는 점이었다."
  - "익숙하게 대문을 열고 들어가 책더미를 넘어가니, 조그만 %UMA%가 또다시 귀를 쫑긋거리며 무언가를 읽고 있는 모습이 보였다."
  - acc: 1
    content: "「안녕, 약속대로 왔어, 도서관의 영웅.」"
    lines:
      - "인사를 건네도 %CHARA%는 책에서 눈을 들지 않았다. %YOU%을(를) 알아차리지 못한 모양이었다."
      - acc: 1
        content: "(다가가서 %SEX%를 토닥인다)"
      - "%YOU%은(는) %SEX%의 등을 톡톡 치려고 했지만 손이 닿지 않았다. 어깨를 쳐보려 했지만 역시 닿지 않았다. 그래서 아예 책에 푹 빠진 작은 머리를 톡톡 두드려 주었다. 뭐랄까, 이 녀석 머릿결이 꽤 좋네."
      - "%CHARA%가 의아한 표정으로 고개를 들더니, 머리를 두드린 게 %YOU%이라는 것을 발견했다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「아…… %CALLNAME%이시네요. 언제 오셨나요? 제가 또 너무 집중해서 읽느라…… 죄송해요.」"
  - acc: 2
    content: "손을 뻗어 흔들거리는 커다란 귀를 두 번 쓰다듬는다."
    lines:
      - "감촉이 정말 좋네. 과연 롭 로이야."
      - "%CHARA%가 흠칫 떨더니, 곧바로 고개를 들어 손이 날아온 방향을 매서운 눈초리로 노려보았다. 하지만 상대가 %YOU%이라는 것을 확인하자 표정이 다시 부드러워졌다."
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - "「정말이지, %CALLNAME%…… %UMA%의 귀나 꼬리를 함부로 만지면 안 된다고 매뉴얼에서 배우지 않으셨나요? 다른 사람이었다면 당장 경비원분들을 불러서 끌어내라고 했을 거예요.」"
  -
  - acc: 1
    content: "「이번엔 또 무슨 민속 이야기를 읽고 있었어?」"
  - "%CHARA%는 고개를 저으며 손에 들고 있던 공책을 들어 흔들어 보였다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이건 제가 수집한, 그 『영웅』에 대한 정보예요. 우선, %CALLNAME%이(가) 그 %UMA%를 보셨던 시간은 자율 트레이닝 시간이었을 거예요. 그래서 그 시간대에는 많은 %UMA%들이 트레이닝 코스를 들락날락했죠. 관계자분께 부탁해서 트레이닝 코스 대여 기록을 확인해 보더라도 그 %UMA%를 찾기는 어려울 거예요……」"
  - "%CHARA%는 공책에 모은 정보를 보여주며 말했다."
  - acc: 1
    content: "「그럼 정말 방법이 없는 걸까?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아직 기회는 있어요. %CALLNAME%께서 그 %UMA%에 대한 인상이 깊으시다면, 코스에서 한눈에 알아볼 수 있을 거예요.」"
  - acc: 1
    content: "「하지만 난 전에도 트레이닝 코스에 며칠 동안이나 앉아 있었어. 매일 아침부터 저녁까지 죽치고 있었는데도, 그런 %UMA%는 한 번도 본 적이 없단 말이지.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「풉…… 학생들 사이에 돌던 『트레이닝 코스 관중석에 뜻을 이루지 못하고 유령이 되어버린 트레이너가 있다』는 괴담의 출처가 당신이셨군요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그럼 방법을 바꿔보죠. 제가 아는 %UMA% 중에도 『영웅』이라 부를 만한 애들이 몇 명 있거든요. 한 명씩 찾아가 보는 건 어때요? 예를 들면, 겉보기에도 신비로운 분위기를 풍기고, 우주에서 온 것 같고, 이름도 유명한 TCG의 필드 마법과 비슷한 아이라든가……」"
  - acc: 1
    content: "「영웅을 그렇게 많이 알고 있어?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아니에요! 제가 방금 말한 세 가지 묘사는 모두 같은 %UMA%를 가리키는 거예요. 제 같은 반 친구이자 절친인 네오 유니버스요. %CALLNAME%, 혹시 루돌프 회장님한테서 이상한 걸 배우신 건 아니죠?」"
  - "%CHARA%는 이야기를 끊고 소련 농담을 끼워 넣은 %YOU%을(를) 볼멘 표정으로 바라보았다."
  - "(볼을 부풀린 모습이 꽤 귀여운데)"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그리고, 아무리 해도 한 발짝 모자라더라도 온 힘을 다해 앞을 추월하려는 %UMA%……그다음은 제가 가장, 가장, 가장 존경하는——%C_NAME% 선배님이에요. 타고난 체격에 피나는 단련까지 더한 %SEX%를 정말 동경해서……아, 오늘도 %C_NAME% 선배님은 트레이닝장에 계실 거예요. 보러 가실래요?」"
  - "방과 후, %YOU%과(와) %CHARA%는 트레이닝 코스로 향했다. 비록 코스에 학생이 많았고 %YOU%도 입구에서 멀리 바라볼 뿐이었지만, 질주하는 그 녹색의 실루엣은 여전히 현장에 있는 사람들 대부분의 시선을 빼앗고 있었다."
  - acc: 1
    content: "「저 애가 네가 말한 그 선배야? 정말 빠르네.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「맞아요, 맞아요. %CALLNAME%, 조금 더 가까이 가서 %C_NAME% 선배님의 트레이닝을 구경해요.」"
  - "%CHARA%는 공책과 펜을 꺼내 들었고, 귀와 꼬리가 다시 흔들리기 시작했다."
  - acc: 1
    content: "(%SEX%의 주법…… 압도적인걸!)"
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: "(하지만 %SEX%는 내가 찾던 암컷이 아니야)"
  - "%YOU%은(는) 그날 본 것이 %SEX%가 아니었다고 %CHARA%에게 말해주려 했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「으음……발을 여덟 팔자 모양으로 벌리고, 안정적으로 달리고 계세요. 순항 속도일까요? 하지만 %C_NAME% 선배님은 벌써 이천사백 미터 가까이 달리셨어요……장거리를 준비하시는 걸까요? 호흡도 여전히 들이쉬고, 들이쉬고, 내쉬는 리듬이고 체력에도 여유가 있어요. %C_NAME% 선배님은 장거리 중상 레이스를 준비하시는 걸까요……」"
  - "%SEX%는 %C_NAME%의 주법과 남은 체력, 총 기록을 진지하게 분석하고 있었다. 귀와 꼬리가 흔들리는 폭도 점점 커졌다."
  - acc: 1
    content: "「너도 올라가서 몇 바퀴 뛰어보고 싶어?」"
  - "%CHARA%는 깜짝 놀란 듯했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아니…… 그게…… 전 오늘 자율 트레이닝은 쉬기로 했거든요…… 그래서 뛰지는 않을 거예요……」"
  - acc: 1
    content: "「어, 나와 함께 『영웅』을 조사해 주려고?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아……아니에요……저……그게……오늘은 이만할까요……%C_NAME% 선배님도 트레이너님이 찾으시는 『영웅』이 아니라면, 다음에는 네오 유니버스를 만나러 가요……그, 그럼 저는 이만 가 보겠슘니……（혀를 깨물었다）……」"
  - "(왜 갑자기 이렇게 횡설수설하는 거지? 내가 끌고 가서 트레이닝시킬까 봐 겁먹었나?)"
  - "(이건……)"
  - "%YOU%은(는) 바닥에 꽤 귀여운 공책이 한 권 떨어져 있는 것을 발견했다."
  - "(롭 로이 건가? 펼쳐서 주인을 확인해 봐야겠다)"
  - "공책에는 매번 %CHARA%가 다른 사람들과 병주한 후의 요약과 자율 트레이닝에서 얻은 경험들이 빼곡히 적혀 있었다. 미데뷔 %UMA%가 이 정도로 정리했다는 것은 의심할 여지 없이 훌륭한 수준이었다."
  - "(이렇게 달리기를 사랑하는 %UMA%가 왜 굳이 쉬면서까지 나랑 조사를 다니는 거지?)"
  - content:
      - fontWeight: bold
        content: "교관"
      - "「아, 거기 트레이너분, 혹시 %CHARA%의 전속 트레이너신가요?」"
  - "「어, 그건 아닌데요.」"
  - content:
      - fontWeight: bold
        content: "교관"
      - "「그렇군요. 롭 로이 학생이 예전에 부상 때문에 모의 레이스를 여러 번 놓쳤거든요. 다음 모의 레이스가 다가오니 또 불안해하기 시작했어요. 평소 트레이닝 기록도 전보다 훨씬 떨어졌고요. 그래서 체육대회 때 멋지게 활약해 보라고, 그러면 트레이너를 찾을 수도 있을 거라고 조언했지만, 최근 들어 또 의욕이 떨어져서 자주 쉬더라고요. 전 아예 포기하려는 줄 알았어요. 그런데 당신과 나란히 앉아 달리기 이야기를 나누는 걸 보고, 드디어 트레이너를 찾았나 싶어서 제멋대로 기뻐해 버렸네요. 정말 죄송합니다.」"
  - acc: 1
    content: "「최근 모습은 달리기를 포기하려는 것 같지 않던데요.」"

rec3:
  # 中庭
  - "%YOU%과(와) %CHARA%는 다시 도서관에서 정보를 교환했다. 하지만 진전은 없었다. 네오 유니버스도 그날 보았던 「영웅」이 아니었다. %YOU%은(는) 문득 모의 레이스 이야기를 떠올렸다."
  - acc: 1
    content: "「모의 레이스는 어떻게 하기로 했어?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「에? 어…… 아…… %CALLNAME%이(가) 그걸 어떻게 아시는 거죠?」"
  - "「교관님이 말해주셨어. 나도 그날 응원하러 갈 테니까, 힘내라구 %CHARA%!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아, 어째서…… 아, 아니, 싫은 건 아닌데…… 아니, %CALLNAME%이(가) 절 응원하러 와주시길 바라지 않는다는 게 아니에요…… 단지 저는 존재감도 희미하고, 달리기 성적도 좋지 않아서…… 그…… 그래서…… 보러 오셔도 저를 찾지 못하실 수도 있어요…… 저는 자주 그렇게 생각하거든요. 교관님도 말씀하셨겠지만, 요즘 제 컨디션도 정말 안 좋고요……」"
  - "%CHARA%는 고개를 푹 숙였고, %SEX%의 표정은 보이지 않았다."
  - "「아, 미안해. 부담을 주려던 건 아니었는데.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아니요, 아니요, 괜찮아요. 오히려 절 위해 경기를 보러 와주시는 분이 계시니, 전 정말 기뻐요…… 에헤헤……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저는 어릴 때부터 이렇다 할 특기도 없었고, 친구도 별로 없었어요. 부상도 잦았고…… 제 곁에 있어 준 건 책뿐이었죠……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저는 늘…… 아주 눈에 띄지 않는 아이였어요. 저도 눈에 띄지 않는 제 모습에 진작 익숙해졌고요…… 누군가 일부러 절 보러 와주신다면…… 오히려 쑥스러울 거예요…… 다른 사람의 기대를 짊어지게 되었으니 더 열심히 해야겠다고 생각하다가…… 그러다 보면 또다시 불안해지고…… 불안이 심해지면 다시 다치게 되고……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이야기 속 영웅은 등장하기만 해도 모든 시선을 끌어요. 저는 영웅과는 여전히 너무 멀어요……부끄러워요. 정말……『%CHARA%』라는 이름에 미안할 만큼……」"
  - "마지막 말을 할 즈음, %CHARA%의 목소리에는 울음기가 섞여 있었다. 아무리 목석같은 %YOU%일지라도 %CHARA%가 과도한 압박감에 무너지기 직전이라는 것을 눈치챌 수 있었다."
  - "「흑…… 죄송해요…… (흑) 불평만 잔뜩 늘어놓아서…… (히끅) 오늘은…… 이만 가볼게요.」"
  - "말이 끝나기 무섭게 %CHARA%는 도서실을 뛰쳐나갔다."
  - "%YOU%은(는) 뒤따라 나가려 했지만, 우마무스메의 달리는 속도를 따라잡을 수 없었다. %CHARA%의 뒷모습은 이미 복도 끝으로 사라진 뒤였다."
  - "(역시 사람이 우마무스메를 따라잡을 수는 없겠지)"
  - "%CHARA%는 지금 어디로 간 걸까?"
  - divider: true
    content: "훈련장"
  - acc: 1
    content: "「역시 여기 있었구나!」"
  - "「어, %CALLNAME%, 어떻게 찾으셨어요? 보통 이런 전개라면 집에 돌아갔을 거라고 생각하지 않나요?」"
  - acc: 1
    content: "「너는 다른 %UMA%들처럼 쉽게 포기하지 않을 테니까.」"
  -
  - acc: 1
    content: "「네 안에는 아직 꺾이지 않는 불꽃이 타오르고 있어.」（앞서 주운 공책을 꺼낸다）"
  -
  - acc: 1
    content: "「이 공책이 네가 지기 싫어한다는 증거야!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「어, 설마……내용을 보셨어요? 여자아이의 공책을 몰래 들춰보는 건 좋지 않아요, %CALLNAME%……」"
  - "「주인이 누구인지 확인하려고 펼쳐 봤어. 정말 미안해!」"
  - "지나치게 정중한 %YOU%의 태도에 %CHARA%는 그만 웃고 말았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아……아하하……당신이라면 괜찮아요……그래서, 어떻게 생각하셨나요……바보 같나요? 겉으로는 포기한 척하면서, 뒤에서는 병주와 트레이닝을 전부 공책에 정리하고……저는……아무것도 못 하는데……」"
  - "%CHARA%는 씁쓸하게 웃었다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「이상한 걸 보여 드려서 죄송해요. 버리셔도 괜찮아요. 아니, 버릴 거라면 제가 직접 할게요. 제 꿈은 제가……」"
  - acc: 1
    content: "「네 뜻에 맡길게. 다만 한 가지만 확인하고 싶어.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「뭔가요?」"
  - acc: 1
    content: "「%CHARA%, 네 꿈은 뭐야?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「저……말해도……정말 안 웃으실 거예요? 저는……아주 오래전부터, 제가 영웅이 된 모습을 보고 싶다고 꿈꿔 왔어요.」"
  - "%CHARA%는 깊이 숨을 들이쉬었다. 무언가 결심한 듯했다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「부상과 병치레 때문에 모의 레이스를 몇 번이나 놓쳐도. 아무런 결과를 내지 못해도. 누구의 눈에도 띄지 못해도. 저는……저는——영웅이 될 기회를 잡아서, 영웅이 되고 싶어요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「처음에 『영웅』을 찾았던 것도, 트레이닝을 전부 정리했던 것도, 지금 이렇게 레이스장으로 도망쳐 온 것도. 전부 영웅이 되고 싶어서예요……하지만……현실의 저는, 꼴사납고 차가운 꿈만 꾸고 있을 뿐이에요……」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「선배님도, 동급생도, 후배도. 저를 훨씬 뛰어넘는 사람들이 있어요. 모두 비슷하면서도 다른 꿈을 짊어지고 있죠. 가문의 긍지를 지키고 싶고, 응원해 주는 사람을 행복하게 하고 싶고, 불행을 극복하는 사람들에게 힘을 주고 싶다는 꿈이요.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하지만……저한테는 그런 게 없어요! 저는……그냥 더 주목받고 싶고, 더 눈에 띄고 싶고, 친구를 조금 더 사귀고 싶을 뿐이에요!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「%THEY%처럼 깊은 꿈도, 대단한 이야기도 없어요. 그러니까……그러니까 저는 %THEY%의 배경이 되는 거예요!」"
  - acc: 1
    content: "「그래도 영웅이 되고 싶어?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「……네. 영웅이 되는 꿈은 아직 버리고 싶지 않아요……」"
  - "「그럼 그 공책을 빌려줘.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「어, %CALLNAME%, 뭘 하시는 건가요??」"
  - "%YOU%은(는) 유성펜을 꺼내 공책 표지에 다섯 글자를 적었다. 「젠노영웅담」"
  - acc: 1
    content: "「롭 로이 작가님, 이걸 읽게 해 줘.」"
  - acc: 2
    content: "「네 손안에 있는 네 이야기는, 네가 직접 써야 해!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「정말인가요? 부상과 병치레도 많고, 성적도 없고, 수수해서……실망하실지도 모르는데……?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「정말……제 이야기를 읽어 주실 건가요……?」"
  - "「네가 바란다면 반드시 확실한 답이 돌아올 거야. 어린애처럼 훌쩍이지 마. 영웅이 될 거잖아, %UMA%. 영웅의 눈물은 그렇게 쉽게 떨어지지 않아.」"
  - "%CHARA%는 안경을 닦았다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「어른인 %CALLNAME%이(가) 울트라맨 대사를 따라 하는 게 더 어린애 같아요.」"
  - "「영웅」을 찾는 계획은 잠시 중단되었다."
  - "%YOU%이(가) 더 재미있는 이야기를 발견했기 때문이다."

rec4:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「하아…… 하아…… 어째서 이러지…… 어째서…… 랩 타임이…… 지난번보다 더 느려진 거지……」"
  - "「조금 쉬자 롭 로이. 내가 전에 해준 말 기억하지? 내가 널 응원하고 있어. 불안해하거나 긴장할 필요 없어. 자연스럽게 달리면 돼.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네, 그럼 몇 바퀴 더 연습해 볼게요. 기록 측정은 %CALLNAME%께 부탁드릴게요.」"
  - "비록 %CHARA%는 여전히 자신의 능력을 명확히 파악하지 못하고 있었지만, 우선 자신감부터 끌어올리는 것도 나쁘지 않았다."
  - divider: true
  - color: %COLOR%
    content: "%CHARA%는 혼자 『영웅』의 정보를 수집하고 있다."
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "（응, %CALLNAME%이(가) 찾는 『영웅』은 %C_NAME% 선배님일 거야. %YOURSEX%는 아니라고 생각하지만, 시간도 장소도 달리기도 다 맞아……）"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "（하지만……%CALLNAME%이(가) %YOURSEX%의 『영웅』을 찾아 버리면……우리 관계도 끝나겠지……정보를 교환할 때는 서로 솔직해야 하고, %CALLNAME%은(는) 내 조급함도 풀어 주셨지만……이 일만큼은……말하고 싶지 않아.）"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "（그래도……말해야 해……끝난 뒤에 %YOURSEX%에게 전하자……『영웅』에 관한 모든 것을……그 전에……반드시 %YOURSEX%가 나를 기억하게 해야 해.）"
  - divider: true
    content: "모의 레이스 당일"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "(망했어 망했어 망했어 망했어, 어째서 또 긴장해서 출발이 늦어진 거야!!!)"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "（%C_NAME% 선배님은 벌써 후반, 최종 직선에 가까워졌어. 이대로면 또 질 거야.）"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "(역시…… 이길 수 없는 걸까…… 그렇게나 많이 트레이닝했는데……)"
  - acc: 1
    content: "「이야기의 주인공, 힘내라구!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "（%CALLNAME%다! %YOURSEX%가 나를 발견했어……하지만 %C_NAME% 선배님이 이기고, %CALLNAME%이(가) %SEX%야말로 %YOURSEX%의 「영웅」이라는 걸 알게 되면, 다시 나를 만나러 와 주실까?）"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "（안 돼. 지더라도……내 유일한 독자를 실망시키고 싶지 않아. 박수도, 함성도, 시선도 없더라도……나는……%YOURSEX%만의 영웅이——되겠어!）"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「오오오오오오오오오오!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "(심장아, 불타올라라. 뇌야, 타올라라. 다리야 움직여줘. 난…… 이대로 무기력하게 지고 싶지 않아!!!)"
  - content:
      - fontWeight: bold
        content: "해설"
      - "「최종 직선, 최종 직선! %CHARA%가 최종 직선에서 무서운 기세로 따라붙습니다!」"
  - acc: 1
    content: "(저 주법! 저 자태!)"
  - "(틀림없어. 저건 그날 보았던—— 마치 지평선을 가를 듯한……)"
  - content:
      - fontWeight: bold
        content: "해설"
      - "「%C_NAME% 골인, 골인입니다! %CHARA%는 현역 %UMA% 못지않은 막판 스퍼트를 보여 주었지만, %C_NAME%를 넘어서지는 못했습니다!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "（역시……졌어……삶이란 그렇게 쉽게 풀리지 않는구나……이제는 %CALLNAME%에게 그날의 『영웅』이 %C_NAME% 선배님이었다고 설명할 차례야.）"
  - "「롭 로이! 내가 그날 본 『영웅』을 드디어 찾았어!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「역시 %C_NAME% 선배님이시죠……」"
  - "「너였어!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「네?」"
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - "「롭 로이, 방금 라스트 스퍼트 아주 훌륭했다…… 둘이서 뭔가 할 얘기라도 있나?」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「아, %C_NAME% 선배님, 마침 잘됐어요. 그날 오후 네 시 반쯤 잔디 코스를 쓰고 계셨던 건 선배님이시죠?」"
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - "「그래. 너와 병주를 했었지. 정확한 시간은 기억 안 난다만.」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「그렇죠, 그렇죠. 『영웅』은 역시 %C_NAME% 선배님이시죠!」"
  - acc: 1
    content: "「그러니까 너도 %C_NAME%와 병주하면서, 그때 잔디 코스를 쓰고 있었다는 거네.」"
  - "「너 그날 머리 풀고 있었지?」"
  - acc: 1
    content: "「넘어질 뻔할 때 휘청거리기도 했고」 (호감도+5 애정도+1)"
  - if: era.get('cflag:47:0') !== 1
    acc: 2
    content: "「넘어질 뻔할 때 가슴도 엄청나게 흔들렸고」 (애정도+2 명성-5)"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「에에, 그렇게 세세한 곳까지 다 보셨다고요!? 그게 아니라…… 그럼 %CALLNAME%이(가) 보신 건 설마……」"
  - acc: 1
    content: "「롭 로이, 네가 바로 나의 영웅이야! 나와 계약해서 담당소녀가 되어줘!」"
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - "「????????? 왜 이런 분위기에서 그런 드립을 치시는 건데요????」"
  - color: %C_COLOR%
    content:
      - fontWeight: bold
        content: %C_NAME%
      - "「역시, 둘이서 뭔가 할 얘기가 있는 것 같군.」"
  -
  - "%CHARA%, 영입 완료"
