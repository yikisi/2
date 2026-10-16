/**
 * @file キタサンブラック - 恋慕
 * @author 小黑
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '애욕';
    /** @param {CharaTalk} kita キタサンブラック */
    const f = async (kita) => {
      await kita.say_and_wait('아…… 으음…… 으으으……');
      await era.printAndWait([
        '몸이 달아오른 ',
        kita.get_colored_name(),
        '은 침대 위에서 스스로를 탐닉하며 절정에 도달했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = '열애';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait([
        '으응…… ',
        callname,
        '…… ',
        callname,
        '…… 아아……',
      ]);
      await era.printAndWait([
        '이불 속에서 ',
        you.get_colored_name(),
        '의 이름을 나직이 읊조리며, ',
        kita.get_colored_name(),
        '은 입술을 깨물며 절정했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, callname) => {
      await kita.say_and_wait([
        '으으…… 으으으…… ',
        callname,
        ', ',
        callname,
        ', 으우우웃~',
      ]);
      await era.printAndWait([
        kita.get_colored_name(),
        '은 민감한 곳을 열심히 문질러 댔고, 체취가 섞인 진한 애액이 이불 속에 흠뻑 뿜어져 나왔다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  m_kita_notify: (kita) => [
    kita.get_colored_name(),
    '을 몇 번 괴롭힌 뒤, 발정기에 역으로 가면 뜻밖의 일이 생길지도 모른다!',
  ],
  m_kita: (() => {
    const title = '괴롭힘받기 좋아하는 키타';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `교문에서 ${kita.name}과 만나기로 약속했고, 오늘은 함께 데이트할 예정이었다.`,
      );
      await era.printAndWait(
        `하지만 어째서인지 오늘 키타는 마스크를 쓰고 자꾸 주위를 둘러보았다.`,
      );
      await era.printAndWait(
        `담당이 ${you.name}을(를) 두고 여자 화장실을 몇 번이나 오간 뒤에야 ${you.name}은(는) 마침내 소녀를 붙잡고 무슨 일인지 물었다.`,
      );
      await kita.say_and_wait(`트레이너${you.adult_sex_title}……저, 그게……`);
      await kita.say_and_wait(`키타, 아마 발정기인 것 같아요…… 으으……`);
      await kita.say_and_wait(
        `약을 먹어도 소용없어요. 길에서 트레이너 ${you.adult_sex_title}의 냄새만 맡아도 하고 싶어져서, 어떻게 해야 할까요……`,
      );
      await era.printAndWait(
        `마스크를 벗자 키타의 무르익은 발정 냄새가 옷 속에 갇혀 있던 암컷의 체취와 섞여, 공기 속에서 눈에 보일 듯한 열기를 이루었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 숨을 들이쉬며 공기 중에 퍼진 키타의 짙은 땀 냄새를 맡았다. 하반신이 그 열기에 반응해 고개를 들었다.`,
      );
      await era.printAndWait(
        `JK${kita.uma_sex_title}A 「있잖아…… 공기에서 이상한 냄새 나지 않아?」`,
      );
      await era.printAndWait(
        `JK${kita.uma_sex_title}B 「아, 정말 그러네. 무슨 냄새지?」`,
      );
      await era.printAndWait(
        `지나가던 여중생 우마무스메가 코를 찡그리자, ${you.name}은(는) 황급히 옷으로 발정 중인 키타를 덮고 달아났다.`,
      );
      era.println();
      await era.printAndWait(
        `단둘뿐인 캡슐 호텔에서, 얼굴이 새빨개진 ${kita.name}은 ${you.name}의 다리 사이에 앉아 제 다리를 비비고 있다.`,
      );
      await era.printAndWait(
        `지금의 키타에게는 평소의 재치가 전혀 없었다. 예쁜 입을 살짝 벌리고, 발정한 여우처럼 음란한 표정을 짓고 있었다.`,
      );
      await era.printAndWait(
        `사복 차림인 탓도 있어, 통풍이 잘되는 흰 티셔츠는 이미 땀으로 완전히 비치고 있었다.`,
      );
      await era.printAndWait(
        `얇은 천이 몸의 곡선에 달라붙어 키타의 풍만하게 부푼 가슴살을 드러냈다.`,
      );
      await era.printAndWait(
        `평소에도 소중히 다뤄지던 음란하게 무르익은 두 가슴은 레이스용 브래지어에 꽉 감긴 채 서로 눌리며, 젖내가 섞인 땀을 배어 냈다.`,
      );
      await era.printAndWait(
        `트레이너의 시선을 알아차렸는지, 키타는 두 다리를 오므리고 흐느끼는 소리를 냈다.`,
      );
      await kita.say_and_wait(
        `응…… 으응…… 원해요…… 트레이너 ${you.adult_sex_title}를 원해요…… 앗……`,
      );
      await era.printAndWait(
        `갑자기 ${kita.name}이 가슴을 위아래로 흔들자, 살찐 흰 토끼 같은 두 가슴이 브래지어에서 튀어나왔다.`,
      );
      await era.printAndWait(
        `우마무스메는 거의 아양을 떠는 표정이었다. 조금 전까지 거칠게 숨 쉬던 소녀가 두 팔로 무거운 가슴을 받쳐 올렸다. 크고 도드라진 유두가 천 위로 뚜렷한 돌기를 만들었다.`,
      );
      await era.printAndWait(
        `그러자 ${you.name}은(는) 따뜻하고 부드러운 감촉과 조금 단단해진 유두가 손바닥을 스치는 감각을 느꼈다.`,
      );
      await era.printAndWait(
        `발정으로 눈의 초점이 흐려진 ${kita.name}은 혀를 내밀고 조금 얼빠진 표정으로 새하얀 부드러운 가슴을 받쳐 트레이너의 팔에 비볐다.`,
      );
      await era.printAndWait(
        `가슴이 눌리면서 소녀의 유혹적인 골이 더욱 깊어졌고, 묵직한 실감이 ${you.name}의 팔에 비벼졌다. 옅은 땀 냄새가 섞인 젖내가 코로 흘러들어 흥분을 부추겼다.`,
      );
      await you.say_and_wait(`내 담당은 정말 음란한 아이구나.`);
      await era.printAndWait(
        `작게 비웃으며, ${you.name}은(는) 손을 들어 ${kita.name}의 곧추선 유두를 집었다. 그녀는 얼굴을 위로 젖히며 차마 듣기 어려울 만큼 음란한 신음을 내질렀다.`,
      );
      await era.printAndWait(
        `살집 좋은 종아리가 살짝 들리고, 남자답다는 말을 듣던 키타의 입에서 암컷의 절정 소리가 터졌다. 고막을 찌를 만큼 큰 소리였다.`,
      );
      await era.printAndWait(
        `유두를 희롱당하는 우마무스메는 굴복한 표정으로, 트레이너의 장난 아래에서 그저 아무 쓸모 없는 암말로 전락했다.`,
      );
      await era.printAndWait(
        `비릿하고 끈적한 꿀물이 소파로 번졌다. 다리 사이의 애액을 억누르지 못하는 ${kita.name}은 커다란 엉덩이를 비틀더니, 유두가 손끝에 집힌 순간 환희의 신음을 터뜨렸다.`,
      );
      await kita.say_and_wait(
        `트레이너${you.adult_sex_title}, 가요, 가요, 이효오오오오우우우우!?`,
      );
      await era.printAndWait(
        `탁한 애액이 ${kita.name}의 다리 사이에서 뿜어져 나와, 우마무스메의 뇌를 돌이킬 수 없이 바꾸어 갔다.`,
      );
      await era.printAndWait(
        `트레이너가 소녀의 목을 세게 조르자, ${kita.name}은 등을 젖힐 수밖에 없었다. 죽은 물고기처럼 경련하며 엉덩이를 앞뒤로 흔들다가 오늘 첫 절정을 맞았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} you プレイヤー */
  async m_kita_end(you) {
    await era.printAndWait(
      `오늘은 이 정도면 될지도 모른다. ${you.name}은(는) 신음하는 소녀를 안아 침대에 눕히고, 소녀의 체취가 잔뜩 밴 자신을 타즈나 씨에게 어떻게 설명할지 생각했다.`,
    );
  },
  nyotaimori_notify: (kita) => [
    kita.get_colored_name(),
    '을 몇 번 괴롭힌 뒤 상점가로 가면 뜻밖의 일이 생길지도 모른다!',
  ],
  nyotaimori: (() => {
    const title = '「간단한」 식사';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `${kita.name}과 약속하고 상점가의 가게에서 간단히 식사할 예정이었다……`,
      );
      await era.printAndWait(
        `수상한 가게이기는 했지만 겉보기에는 문제가 없어 보였다.`,
      );
      await era.printAndWait(
        '종업원 「어머, 키타산 씨와 트레이너 씨시군요? 뇨타이모리 한 상이 준비되어 있어요.」',
      );
      era.println();
      era.printButton('「뇨타이모리!?」', 1);
      await era.input();
      await era.printAndWait(
        `뇨타이모리는 말 그대로 여성의 몸을 접시 삼아 음식을 차리는 것으로, 주로 생선회가 중심이다. 게이샤의 관습이라는 문화적 설명은 가능하지만……`,
      );
      await era.printAndWait(`아니, 아니, 아무리 그래도 이건 너무하잖아?`);
      await era.printAndWait(
        `전혀 말이 안 되잖아!? 들키면 트레센에서 쫓겨날 테고, 키타도 「트레이너가 변태」라는 오명을 쓰게 될 거야!`,
      );
      await era.printAndWait(
        `하지만 담당의 괴력이 ${you.name}을(를) 끌어당겼다. 돌아보니 키타가 진지하고 흔들림 없는 눈빛으로 바라보고 있었다.`,
      );
      era.println();
      await kita.say_and_wait(
        `트레이너${you.adult_sex_title}, 제가 고민할 때마다 도와주시고 단련해 주셔서 정말 감사해요!`,
      );
      await kita.say_and_wait(
        `그러니까 이번에는 트레이너께 키타의 존경하는 마음이 전해질 선물을 드리고 싶어요. 놀라지 마세요!`,
      );
      await era.printAndWait(
        `당황하는 ${you.name}을(를) 보며 ${kita.name}은 미소를 지으며 ${you.name}의 손을 잡았다. 보통 사람보다 높은 체온이 손바닥을 따뜻하게 감쌌다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 마음을 독하게 먹고 거절하려 했지만 담당의 부탁에 도저히 말을 꺼낼 수 없었다.`,
      );
      await era.printAndWait(
        `담당이 ${you.name}의 눈에 검은 천을 둘러 가린 뒤, ${you.name}은(는) 손에 이끌려 키타가 준비한 방으로 들어가 젓가락 한 짝을 건네받았다.`,
      );
      await era.printAndWait(
        `불안한 마음으로 자잘한 소리를 들으며 십 분쯤 기다린 뒤, ${you.name}은(는) 담당의 목소리에 그제야 안대를 벗었다.`,
      );
      era.println();
      era.printButton('「！？」', 1);
      await era.input();
      await era.printAndWait(
        `코를 찌르는 술 향기와 함께, 새하얀 나신이 나무 쟁반 위에 반듯이 누워 ${you.name}을(를) 마주하고 있다.`,
      );
      await era.printAndWait(
        `검은 머리의 소녀는 얼굴이 사랑스럽고, 몸은 풍만하면서도 유연했다. M자로 벌린 허벅지는 길고 곧게 뻗어 있었다.`,
      );
      await era.printAndWait(
        `하지만 ${you.name}의 바로 앞에 놓인 살집 좋은 둥근 엉덩이를 본 순간, 자신의 담당——${kita.name}이라는 것을 알아차렸다.`,
      );
      await kita.say_and_wait(`으응…… 하우…… 이히~`);
      await era.printAndWait(
        `투명한 물방울이 소녀의 드러난 목덜미를 천천히 흘러내렸다. 차가운 청주가 뿌려진 피부가 온도에 미세하게 떨리고, 담당은 괴로운 표정을 지었다.`,
      );
      await era.printAndWait(
        `허벅지를 단단히 끌어안아 V자를 만들고 트레이너 앞에서 엉덩이를 높이 든 ${kita.name}은 마치 먹음직스러운 칠면조 같았다. 보고만 있어도 식욕이 솟는다.`,
      );
      await era.printAndWait(
        `물방울은 언덕처럼 솟은 가슴 아래에서 멈춰 갈색 육즙과 섞였다. 하지만 ${you.name}의 눈은 식재료의 윤기에 이끌렸다.`,
      );
      await era.printAndWait(
        `탄력 있고 풍만한 가슴살 위에는 얇게 썬 것과 작게 자른 간장 소고기가 양쪽 가슴을 덮고, 분홍빛 유두만 드러내고 있었다.`,
      );
      await era.printAndWait(
        `벚꽃처럼 고운 젖꼭지가 공기 중에 드러나 있었다. 유륜은 소고기 아래에 가려져, 갓 딴 석류 알처럼 싱그러웠다.`,
      );
      await era.printAndWait(
        `가슴에서 시선을 내리자 선명하게 붉은 참치 살이 소녀의 몸 곡선을 따라 빈틈없이 붙어 있었다.`,
      );
      await era.printAndWait(
        `군살 없는 허리와 배가 모둠 요리의 중심이 되어, 잉어처럼 정돈된 모양을 이루고 있었다.`,
      );
      await era.printAndWait(
        `형형색색의 회와 게 내장이 키타의 작고 길쭉한 배꼽을 중심으로 붙어 있고, 향긋한 술방울 아래에서 독특한 냄새를 풍겼다.`,
      );
      await era.printAndWait(
        `${kita.name}의 소중한 자궁 위치에는 특별히 「여기를 마사지해 주세요❤️」라는 와인색 도장이 찍혀 있었다.`,
      );
      await era.printAndWait(
        `도장 양옆에는 소녀의 두툼하고 음란한 흰 엉덩이와 V자로 벌어진 길고 탄탄한 허벅지가 있었다.`,
      );
      await era.printAndWait(
        `${kita.name}의 움직임 아래에서 수컷에게 씨를 받는 쾌감을 추구하도록 진화한——아이를 낳는 데 특화된, 순산형 우마무스메의 두툼한 엉덩이가 아무것도 가리지 않은 채 ${you.name}의 앞에 드러나 있었다.`,
      );
      await era.printAndWait(
        `${you.name}의 침략적인 시선을 느꼈는지, 키타의 잘 익은 복숭아 같은 엉덩이가 ${you.name}의 앞에서 소용없는 가련한 저항을 보였다.`,
      );
      await era.printAndWait(
        `얇게 썬 참치가 소녀의 엉덩이 살빛을 비추며, 음란한 곡선에 밀착해 있었다.`,
      );
      if (era.get('relation:68:0') > 376) {
        await era.printAndWait(
          `허벅지에 밀려 만두처럼 도톰해진 은밀한 부위는 조금씩 벌어졌다 오므라들며 ${you.name}의 총애를 반겼다.`,
        );
        await era.printAndWait(
          `음란한 꿀물이 조개처럼 하얀 살 틈에서 넘쳐흘러, 소녀만의 색정적인 핑크빛을 적시고 있었다.`,
        );
        await era.printAndWait(
          `살짝 솟은 음핵은 ${you.name}의 젓가락 앞에서는 우스꽝스러운 작은 기사였다. 가볍게 찌르기만 해도 교태를 부리며 패배할 것 같았다.`,
        );
      } else {
        await era.printAndWait(
          `소녀의 다리 사이 소중한 은밀한 곳은 마치 꽃봉오리처럼 조심스럽게 가려져 있었다.`,
        );
        await era.printAndWait(
          `지금 수축하는 질 근육을 따라 새하얗고 향긋한 속살이 ${kita.name}의 음란한 핑크빛 속에서 들락날락하고 있었다.`,
        );
        await era.printAndWait(
          `안 그래도 농밀하고 꽉 조이는 하얀 속살이 우마무스메의 음란한 애액에 흠뻑 젖어 있는 모습은, 바라보는 것만으로도 범죄가 되는 기분이었다.`,
        );
        await kita.say_and_wait(`으음으……`);
        await era.printAndWait(
          `키타산의 겁먹은 신음과 함께, 색정적인 질 입구는 이제 부드러운 조개껍데기가 되어 맛있는 진주를 깊숙이 삼켜 버렸다.`,
        );
        await you.say_and_wait(
          '인어 공주님은 이렇게 귀한 보물을 별로 보여 주고 싶지 않은 모양이네.',
        );
        await era.printAndWait(`${you.name}은(는) 자기도 모르게 농담했다.`);
      }
      await era.printAndWait(
        `시선을 더 아래로 옮기자, ${kita.name}의 가장 큰 약점이 무방비하게 ${you.name}의 앞에 드러나 있었다.`,
      );
      await era.printAndWait(
        `${kita.name}의 아래에 있는 극도로 민감한 두 번째 성기로서, 키타의 항문은 두툼하고 부드러우며 탄력이 있었다.`,
      );
      await era.printAndWait(
        `${kita.name}의 앞쪽이 소중히 지켜진 비경이라면, 뒤쪽은 정액을 짜내는 천국이었다.`,
      );
      await era.printAndWait(
        `함몰 유두만큼이나 귀한, 살짝 돌출된 도넛 모양의 항문은 구멍 살의 흡착력만으로도 조루를 유발하기에 충분했다.`,
      );
      await era.printAndWait(
        `음란한 엉덩이 살의 압박까지 더해지면, 키타의 항문은 침대 위에서 사람을 잡는 마물 같은 무기라 해도 좋았다.`,
      );
      await era.printAndWait(
        `키타의 분홍빛 민감한 주름 위에는 맛있는 참치 대뱃살이 음란한 골을 따라 평평하게 깔려 있었다.`,
      );
      await era.printAndWait(
        `여주인의 뛰어난 칼솜씨로 가장 귀한 부위가 가늘게 썰려도 끊어지지 않은 채, 음란한 뒤뜰에서 꽃처럼 피어났다.`,
      );
      await era.printAndWait(
        `한 입도 되지 않는 작은 요리가 항문의 수축에 따라 꿈틀거렸다. 구석구석 정성껏 씻은 뒤라 ${kita.name}의 항문에는 더러운 곳이 하나도 없었다.`,
      );
      await era.printAndWait(
        `우마무스메의 분홍빛 항문은 오므라들었다 벌어지며, ${you.name}을(를) 기쁘게 하는 접시의 역할을 다하고 있었다.`,
      );
      await era.printAndWait(
        `${you.name}의 젓가락이 소녀의 배꼽 위를 맴돌았다. 담당이 귀엽게 저항하는 가운데, 이 풍성한 연회를 맛보려 했다.`,
      );
      await era.printAndWait('여러 의미로 맛있는 시간을 보낸 뒤, ');
      await era.printAndWait('결론부터 말하자면, 확실히 별미였다.');
    };
    f.title = title;
    return f;
  })(),
};
