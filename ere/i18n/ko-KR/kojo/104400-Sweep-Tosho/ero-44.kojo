# @file スイープトウショウ - 調教
# @author アグネスデジタル会社
# @author Claude (翻訳)

# 和姦
ero_start_normal:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「채……『채워라』……」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「으으~ 정말…… %CALLNAME%은(는) 언제부터 이런 일을 주인에게 의지하게 된 거야?!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……그래도, 뭐 좋아! %CALLNAME%의 욕망을 채워 주는 것도…… 주인의 의무 중 하나니까!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「어디까지나 의무야! %CALLNAME%, 쓸데없는 말은 하지 마! 묻지 마!!」
  - 스윕 토쇼는 기대 때문인지 평소의 보폭 때문인지 알 수 없는 발걸음으로 %YOU%을(를) 휴게실로 데려갔다


# 強姦
es_rape:
  - if: era.get('love:44') < 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「싫어, 싫어! %CALLNAME%이(가) 주인님한테 대들다니, 용서 못 해……!!」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「게다가…… 이렇게 억지로…… 책에 나오는 마법소녀 같잖아!!」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「으읏—— 아파……! 주인은 지지 않아!! 그치만 아파……」
      - 모순된 말 속에서 %SEX%는 눈물을 글썽이며 %YOU%에게 밀려 넘어진다
      - 상대가 벗어나기 전에, 가능한 한 꽉 붙잡아 두자
  - if: era.get('love:44') >= 50
    lines:
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「싫어, 싫어! %CALLNAME%이(가) 주인님한테 대들다니, 용서 못 해……!!」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「설령 우리가 그런 관계라 해도…… 아니야, 아니야, 그냥 주인과 %CALLNAME%일 뿐이니까!!」
      - color: %COLOR%
        content:
          - fontWeight: bold
            content: %CHARA%
          - 「으읏…… 주인을 계속 아프게 하면…… 화낼 거야, 절대로!!!」
      - 받아들이는 듯하면서도 받아들이지 않는 말 속에서, %SEX%는 눈물을 글썽이며 %YOU%에게 밀려 넘어진다
      - 상대가 마음을 바꾸기 전에, 최대한 제압해 두자


# 初回の強姦 Play
# 合意の計算では、恋慕70以上は強姦 Play（和姦できるが強姦値が有効な場合）
es_rape_play_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「이런 놀이…… 마법소녀 책에서도 본 적 없어!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……아니야, 아니야! 주인은 그런 책, 안 읽었어! 이상한 상상은 하지 마!!!」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……어쨌든, 이렇게 하면 %CALLNAME%은(는) 괜찮은 거지?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「흠흠~ 지금은 연기만 하고 있을 뿐이라도, %CALLNAME%은(는) 결국 스위피 님께 이길 수 없으니까~!」


# 以降の強姦
es_rape_play:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「이렇게 하면 %CALLNAME%, 괜찮지?」
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「흠흠~ 천재 %MOHOSHOJO% 스위피라면 뭐든지 할 수 있어! %CALLNAME%한테 배운 게 아니야!!」


# 薬による迷姦
es_drug:
  - %YOU%은(는) %CHARA%에게 약효가 나타나기를 기다렸다


# 薬による迷姦 - ウマ跳びS - 初回
es_drug_umz_s_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「응…… 읏……%CALLNAME%, 너, 설마……」
  - 말을 다 마치기도 전에 %CHARA%은(는) 천천히 %YOU%의 품에 쓰러졌다


# 薬による迷姦 - ウマ跳びS - 再発
es_drug_umz_s:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「응…… 읏……%CALLNAME%, 왜 항상……」
  - 말을 다 마치기도 전에 %CHARA%은(는) 천천히 %YOU%의 품에 쓰러졌다


# 薬による迷姦 - 超ウマ跳びZ - 初回
es_drug_super_z_first:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……응……주인, 어떻게든 갖고 싶어……」
  - 언뜻 보기에는 매우 청순해 보이는 소녀라도, 몸을 비틀며 무의식적으로 두 다리를 오므린다
  - 어떤 의미에서는, 그것도 약의 매력 중 하나다
  -
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……! 아니야, 이건…… %CALLNAME%!!!」
  - 하지만 남아 있는 이성이 이 아이에게 무언가를 깨닫게 한다
  - 양 볼을 새빨갛게 달아오르면서도 필사적으로 이를 드러내는 표정은, 약의 영향인지 분노 때문인지 알 수 없다
  -
  - 적어도, %YOU%이(가) 다가올수록
  - %CHARA%의 얼굴에는 조금씩 두려움이 스친다
  -
  - 입속으로 마법을 외쳐도 소용이 없다
  - 더 이상 참지 못한 %CHARA%은(는) 마침내 눈물을 글썽이며 스스로 %YOU%에게 달려들었다


# 薬による迷姦 - 超ウマ跳びZ - 再発
es_drug_super_z:
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……응 …왜 이렇게 갑자기 욕구가…… 저기……」
  - 양 볼이 서서히 붉어지자, %CHARA%은(는) 무의식적으로 두 다리를 모으고, 표정도 미묘하게 변한다
  - color: %COLOR%
    content:
      - fontWeight: bold
        content: %CHARA%
      - 「……아, 아니야! 사역마—— 또 너 때문이야!!!」
  -
  - 분노인지, 두려움인지, 부끄러움인지, 더 이상 구분할 수 없다
  - 적어도, 모든 것을 깨달은 %CHARA%은(는) 얼마 지나지 않아 저항을 멈추고, 몸의 본능에 맡겼다
