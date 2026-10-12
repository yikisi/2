/**
 * @file マチカネフクキタル - 調教
 * @author ALEX
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { location_enum } = require('#/data/locations');

module.exports = {
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async kiss(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.say_and_wait("읏……");
      await you.print_and_wait(
        "바로 코앞에서 마주한 별빛 눈동자에 물기가 어린 것이 보인다.",
      );
      await kitaru.say_and_wait([callname, '……']);
      await you.print_and_wait([
        "무의식적으로 팔을 둘러 ",
        y_call_k,
        "을(를) 끌어안고, 입안으로 들어온 혀에 온 힘을 다해 응한다.",
      ]);
      await you.print_and_wait([
        "입술이 떨어지자 두 사람의 혀 사이에 은빛 다리가 놓였다가, 뜨거운 숨결에 끊어져 떨어진다.",
      ]);
      await kitaru.say_and_wait("으하…… 쪽하……❤️");
      await you.print_and_wait([
        "겨우 한숨 돌린 ",
        y_call_k,
        "이(가) 다시 입맞춤을 청해 온다.",
      ]);
    } else {
      await kitaru.say_and_wait("츄릅…… 읏…… 푸하…… 츄릅…… 꿀꺽");
      await kitaru.print_and_wait([
        "장거리를 달리는 ",
        kitaru.uma_sex_title,
        "이니, 주도권은 제게 있어야 할 텐데……",
      ]);
      await kitaru.print_and_wait([
        "운명의 사람에게서 나는 어른스럽고 안심되는 향기가, 서로 나눈 침과 숨결을 타고 몸속으로 흘러들면……",
      ]);
      await kitaru.print_and_wait(["……노…… 녹아 버릴 것 같아요……"]);
      await you.print_and_wait([
        "가끔 입술이 떨어져 쉬는 동안, 얼굴이 온통 붉어진 ",
        y_call_k,
        "은(는) 입을 작게 벌려 뜨거운 숨을 내쉬고, 눈꼬리에는 눈물 한 방울을 매달고 있다.",
      ]);
      await kitaru.say_and_wait([callname, "……좋아해요……"]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async french_kiss(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait("살짝 맛보는 것만으로는 부족하다.");
      await you.print_and_wait([
        "그래서 혀를 더 깊이 밀어 넣어 ",
        y_call_k,
        "의 입안을 마음껏 유린한다.",
      ]);
      await you.print_and_wait("찰박찰박, 움직이는 혀가 질척한 물소리를 낸다.");
      await kitaru.say_and_wait("읏!❤️");
      await you.print_and_wait([
        "두 사람의 혀가 얽히자, 품 안의 밤색 머리 ",
        kitaru.uma_sex_title,
        "이(가) 목구멍에서 끈적한 대답을 흘린다.",
      ]);
      await you.print_and_wait([
        "몸도 빈틈없이 밀착한다. 혀와 혀, 점막과 이가 맞닿으며 쾌감이 상대에게 전해지고, 거기에 응하려는 ",
        y_call_k,
        "의 몸은 떨림을 멈추지 못한다.",
      ]);
      await you.print_and_wait([
        callname,
        "의 거침없는 입맞춤을 받아들일 수밖에 없다.",
      ]);
    } else {
      await kitaru.say_and_wait("읏…… 츄릅…… 꿀꺽……");
      if (!you.race) {
        await kitaru.print_and_wait([
          callname,
          "은(는) 인간이신데…… 폐활량이 반칙이에요……",
        ]);
      }
      await kitaru.print_and_wait([
        "혀가 의식을 치르듯 이를 하나씩 핥고, 제 혀에 얽혀 혀뿌리를 문질러요……",
      ]);
      await kitaru.print_and_wait([
        "입안으로 흘러들어 오는 ",
        callname,
        "의 끈적한 침……",
      ]);
      await kitaru.say_and_wait("꿀꺽…… 으하……❤️");
      await kitaru.print_and_wait([
        "입맞춤의 여운 속에서 짧게 숨을 내쉬며 ",
        callname,
        "의 호르몬 냄새를 온몸에 퍼뜨려요.",
      ]);
      await kitaru.say_and_wait("저기, 아직 더 하고 싶어요……❤️", true);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async talk(kitaru, you, callname, y_call_k) {
    if (Math.random() < 0.5) {
      await you.say_and_wait("후쿠키타루는 강아지 타입일까, 고양이 타입일까.");
      await kitaru.say_and_wait("네! 그런 질문이었나요!");
      await you.say_and_wait("……오히려 여우 타입인가?");
      you.print(["본성을 꿰뚫린 ", y_call_k, "의 얼굴이 더욱 붉어진다."]);
    } else {
      await you.say_and_wait("시라오키님에게서 사람을 빼앗아 오는 것 같네……");
      await you.print_and_wait([
        "벚꽃빛으로 물든 ",
        y_call_k,
        "을(를) 보고 무심코 그렇게 말했다.",
      ]);
      await you.print_and_wait("……발로 차이지도 않는다. ……대답도 없다.");
      you.print("……하지만 얼굴은 무척 빨갛다.");
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_success 色仕掛けが成功したか
   */
  async lure(kitaru, you, callname, y_call_k, is_success) {
    await you.say_and_wait([y_call_k, '。']);
    await you.print_and_wait(
      "가느다란 귀에 대고, 눈앞에 있는 담당의 이름을 나직이 부른다.",
    );
    if (is_success || era.get(`tcvar:${kitaru.id}:发情`) > 0) {
      await kitaru.say_and_wait(["아…… 저기, ", callname, '。']);
      await you.print_and_wait([
        y_call_k,
        "은(는) 옷자락을 붙잡고 여우처럼 가슴에 바싹 달라붙어, 기대 어린 눈빛으로 응한다.",
      ]);
      await you.print_and_wait(["무슨 말이라도 해야 할 때일까."]);
      if (kitaru.sex_code !== 1) {
        await you.print_and_wait([
          "그래도 ",
          y_call_k,
          "의 부드러운 몸을 안고 있는 지금은 꽤 기분이 좋다. 커다란 손이 점술가의 몸을 더듬는다. 넉넉한 엉덩이 살도, 평소 옷 속에 갇혀 있던 풍만한 가슴도, 적당히 살집 있는 다리도.",
        ]);
      }
      await you.print_and_wait([
        y_call_k,
        "의 별빛 눈동자가 자신의 움직임에 맞춰 깜빡이는 것이 보인다.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async pet_ear(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        "벌을 주려고 ",
        y_call_k,
        "의 귀를 만진 적은 여러 번 있다.",
      ]);
      await you.print_and_wait([
        "하지만 지금처럼 ",
        kitaru.uma_sex_title,
        "중에서도 긴 편인 그 귀를 성적인 뜻을 담아 마음대로 주무르고 희롱하는 것은 별개의 일이다.",
      ]);
      await kitaru.say_and_wait(["으냐앗❤️……"]);
      await you.print_and_wait([
        "밤색 꼬리가 갑자기 곧게 뻗고, 혀끝까지 삐져나와 위아래로 떨린다.",
      ]);
      await you.print_and_wait(["오른쪽 귀가 더 민감한 모양이다."]);
    } else {
      await kitaru.print_and_wait([
        "처음에는 귓가를 가볍게 집었다가, 이윽고 ",
        callname,
        "이(가) 안쪽으로 손가락을 넣었다.",
      ]);
      await kitaru.say_and_wait(["히얏❤️!"]);
      await kitaru.print_and_wait([
        "쓰다듬던 손길이 주무르는 손길로 바뀌고, 손가락이 장난스럽게 솜털을 문지르자 귀에서 따끈한 감각이 전해져요.",
      ]);
      await kitaru.print_and_wait([
        "도망치고 싶은데, 배신한 귀는 제멋대로 쭉 펴져 ",
        callname,
        "에게 구석구석 희롱당했어요.",
      ]);
      await kitaru.print_and_wait([
        "자극이 너무 강해서 시야가…… 점점 흐려져요……",
      ]);
      await kitaru.print_and_wait([
        "꼭 모은 두 다리 사이도 미끈거려요.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async pull_ear(kitaru, you, y_call_k) {
    await you.print_and_wait(["조금 잡아당기면……"]);
    await you.print_and_wait([
      "시늉만 하려던 참이었다. 하지만 ",
      y_call_k,
      "도 똑같이 기대하는 눈빛으로 바라보는 것을 보고 나니, 상상이 현실이 되었다.",
    ]);
    await you.print_and_wait([
      "사육장의 토끼를 다루듯 거칠게 ",
      kitaru.sex,
      "의 턱을 들게 한다.",
    ]);
    await you.print_and_wait([
      "민감한 귀 뿌리가 ",
      you.get_colored_name(),
      "의 손에 잡히자 ",
      y_call_k,
      "의 뇌로 쾌감으로 잘못 받아들여진 통증이 전해진다.",
    ]);
    await kitaru.say_and_wait(["으읏❤️…… 읏❤️……"]);
    await you.print_and_wait(["너무 심했을까."]);
    await you.print_and_wait([
      "손을 놓자 잡아당겨져 체리빛이 된 밤색 귀가 기쁘게 흔들리며, 주인의 기분이 좋다는 것을 말해 준다.",
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async pet_breast_from_back(kitaru, you, y_call_k) {
    await you.print_and_wait([
      "평소 옷 아래 숨겨진 풍만한 가슴을 거의 난폭하게 주무른다. 땀으로 미끄럽고 탄력 있는 가슴을 원하는 모양으로 바꾸고, 손가락으로 가끔 딸기 같은 유두를 스친다.",
    ]);
    await kitaru.say_and_wait(["읏……!❤️ 여기……!❤️❤️"]);
    await you.print_and_wait([
      "급소를 붙잡힌 ",
      y_call_k,
      "은(는) 달콤한 신음과 함께 몸을 젖혔다가, 마지막에는 숨을 흘리며 품 안으로 무너져 내렸다.",
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async pet_breast(kitaru, you, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        y_call_k,
        "의 가슴에 달린 묵직한 덩어리가 지금 손바닥에 얹힌다.",
      ]);
      await you.print_and_wait([
        "평소에는 옷 너머로 그렇게 커 보이지 않는다. 하지만 손바닥으로 끊임없이 전해지는 풍만함은, 담당이 숨겨진 거유를 가진 음란한 우마무스메라는 확신을 더해 준다.",
      ]);
      await kitaru.say_and_wait(["으응……❤️"]);
      await you.print_and_wait([
        "말랑말랑하게 주무르며, 두 손 사이에서 따뜻하고 촉촉하게 출렁이는 살결을 만끽한다.",
      ]);
      await you.print_and_wait([
        "손가락이 부드러운 살 속으로 파고들 때마다 흥분한 ",
        y_call_k,
        "이(가) 움찔움찔 반응하며 목구멍으로 달콤한 소리를 흘린다.",
      ]);
    } else {
      await you.print_and_wait([
        "거의 젖어 있는 황옥빛 눈동자와, 코로 흘리는 유혹적인 소리.",
        y_call_k,
        "의 가슴은 꽤 민감한 모양이다.",
      ]);
      await you.print_and_wait(["그만할까. 손놀림을 조금 늦췄다."]);
      await kitaru.say_and_wait(["하아❤️…… 어……"]);
      await kitaru.say_and_wait(["저기, 계속하셔도 돼요……"]);
      await you.print_and_wait(["욕정 어린 목소리로 애원해 왔다."]);
      await you.print_and_wait([
        "그래서 거의 모양을 유지하지 못할 만큼 부드러운 가슴을 더 잡아 늘려 원하는 모양으로 만들고, 하얀 가슴살에 붉은 손자국을 남긴다…… 끝난 뒤에도 자국이 남을까.",
      ]);
      await kitaru.say_and_wait(["으하……❤️"]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async kitaru_pet_breast_first(kitaru, callname) {
    await kitaru.print_and_wait([
      "무엇을 해야 할지 몰라 검지로 ",
      callname,
      "의 가슴에 원을 그려요.",
    ]);
    await kitaru.print_and_wait(["눈치채셨나요?"]);
    await kitaru.print_and_wait([
      "그래서 용기를 내어 남자의 가슴에 얼굴을 묻고, 어리광을 부리듯 비볐어요.",
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async pet_nipple(kitaru, you, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        "가슴에 손을 대기만 해도 이렇게 민감한 ",
        y_call_k,
        "은(는) 유두를 건드리면 어떻게 될까.",
      ]);
      await you.print_and_wait([
        "부풀어 모양이 일그러진 듯한 유두를 직접 집어, 액막이 콩을 굴리듯 비빈다.",
      ]);
      await kitaru.say_and_wait(["아아~!…… 하아❤️, 하아, 읏~❤️"]);
      await you.print_and_wait([
        "담당의 목소리가 점점 높아지고, 쾌감에 젖은 표정이 얼굴에 드러난다.",
      ]);
      await you.print_and_wait(["그렇다면 조금 잡아당기면 어떨까."]);
      await you.print_and_wait([
        "그러자 ",
        y_call_k,
        "은(는) 감전된 듯 턱을 들더니 웅얼거리며 이쪽에 기대 왔다.",
      ]);
    } else {
      await kitaru.say_and_wait(["……야아~❤️"]);
      await you.print_and_wait(["장난스럽게 담당의 민감한 유두만을 희롱한다."]);
      await you.print_and_wait([
        "꼼지락거리는 유두를 엄지와 검지로 집어 ",
        y_call_k,
        "의 승부복에 달린 염주를 굴리듯 좌우로 비틀며, 단단하게 튀어 오르는 감촉을 즐긴다.",
      ]);
      await kitaru.say_and_wait(["……아아❤️~ 읏, 으~ 야아❤️"]);
      await you.print_and_wait([
        y_call_k,
        "은(는) ",
        you.get_colored_name(),
        "의 움직임에 맞춰 몸을 비틀며, 기도문을 외듯 박자 있는 달콤한 소리를 입에서 흘린다.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   */
  async finger_fuck(kitaru, you) {
    await you.print_and_wait([
      "손가락이 살짝 스쳤을 뿐인데, 눈앞의 ",
      kitaru.get_colored_name(),
      "의 구멍 입구가 곧바로 더 축축해졌다.",
    ]);
    await kitaru.say_and_wait(["야앗……"]);
    await you.print_and_wait(["자신의 무녀가 내는 촉촉하고 요염한 목소리가 귓가를 맴돈다."]);
    await you.print_and_wait([
      "먼저 검지, 그다음은 중지. 가끔 손끝을 구부려 주름진 내벽을 자극한다.",
    ]);
    await kitaru.say_and_wait(["후, 후후, 아…… 운명의 사람…… 손가락이 대단해요."]);
    await you.print_and_wait([
      "미끈거리는 구멍 속에서 이제는 ",
      you.get_colored_name(),
      "의 손가락이 살을 휘젓는 건지, 자극을 원하는 내벽이 스스로 손가락을 빨아들이는 건지 알 수 없다.",
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        "무녀는 여러 가지 의식을 익혀야 해요. 하나를 보고 다른 것에도 응용하는 능력은 꼭 필요하죠. 하지만…… 이런 데에 쓰게 될 줄은 몰랐어요.",
      ]);
      await kitaru.print_and_wait([
        "당근이라고 생각하며 혀끝으로 기둥을 살짝 건드린 다음, 혀를 휘감아 핥으며 ",
        callname,
        "의 남성 호르몬 맛을 음미해요.",
      ]);
      await kitaru.say_and_wait(["하, 읏, 츄릅……"]);
      await kitaru.print_and_wait([
        "입으로 자지를 삼키고 핥으며, 음란하고 방탕한 빠는 소리를 흘려요.",
      ]);
    } else {
      await you.say_and_wait(["배우는 게 빠르네."]);
      await kitaru.print_and_wait([
        callname,
        "은(는) 단단한 물건을 쪽쪽 빨며 봉사하는 저를 보며, 머리를 쓰다듬고 칭찬해 주셨어요.",
      ]);
      await kitaru.print_and_wait(["음…… 후후, 기분 좋으시죠?"]);
      await kitaru.print_and_wait([
        "음란한 혀를 내밀어 요도 입구를 조금씩 핥거나, 귀두를 입에 머금고 혓바닥으로 가볍게 누르거나, 소악마처럼 이로 ",
        you.get_colored_name(),
        "의 민감한 곳을 살짝 스쳐요.",
      ]);
      await kitaru.print_and_wait([
        callname,
        "이(가) 반응하실 때마다 저도 기뻐서 웃고 말아요.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.say_and_wait(["입으로요?"]);
      await kitaru.say_and_wait(["네, 최선을 다할게요."]);
      await kitaru.print_and_wait([
        "바닥에 무릎을 꿇고 고개를 가까이 대어 자지에 숨을 불어 넣어요. 또 커진 것 같네요.",
      ]);
      await kitaru.print_and_wait(["그리고……"]);
      await kitaru.say_and_wait(["읏!"]);
      await kitaru.print_and_wait([
        "한 번에 자지를 입으로 삼킨다. 참배할 때 기도문을 외던 작은 입이 자지로 가득 차고, 질척질척한 소리와 함께 자신의 ",
        callname,
        "에게 입으로 봉사한다.",
      ]);
      await kitaru.print_and_wait([
        "무녀는 여러 가지 의식을 익혀야 해요. 하나를 보고 다른 것에도 응용하는 능력은 꼭 필요하죠. 하지만…… 이런 데에 쓰게 될 줄은 몰랐어요.",
      ]);
      await kitaru.print_and_wait([
        "당근이라고 생각하며 혀끝으로 기둥을 살짝 건드린 다음, 혀를 휘감아 핥으며 ",
        callname,
        "의 남성 호르몬 맛을 음미해요.",
      ]);
      await kitaru.say_and_wait(["하, 읏, 츄릅……"]);
      await kitaru.print_and_wait([
        "입으로 자지를 삼키고 핥으며, 음란하고 방탕한 빠는 소리를 흘려요.",
      ]);
    } else {
      await kitaru.say_and_wait(["알았어요, 알았다고요."]);
      await you.print_and_wait(["조금 멍한 채로 자지를 삼켰다."]);
      await kitaru.say_and_wait(["……크앗, 꿀꺽, 쪽, 읏!"]);
      await you.print_and_wait([
        "준비가 되지 않았던 모양이다. 뱉어 내려고 하는 ",
        y_call_k,
        "은(는) 코로 숨을 내쉬며 단단한 물건을 조금씩 입에서 빼냈다.",
      ]);
      await you.print_and_wait([
        "그래도 벌름거리는 콧방울과 흔들리는 꼬리를 보니, 꽤 즐기는 듯하다.",
      ]);
      await you.say_and_wait(["배우는 게 빠르네."]);
      await kitaru.print_and_wait([
        callname,
        "은(는) 단단한 물건을 쪽쪽 빨며 봉사하는 저를 보며, 머리를 쓰다듬고 칭찬해 주셨어요.",
      ]);
      await kitaru.print_and_wait(["음…… 후후, 기분 좋으시죠?"]);
      await kitaru.print_and_wait([
        "음란한 혀를 내밀어 요도 입구를 조금씩 핥거나, 귀두를 입에 머금고 혓바닥으로 가볍게 누르거나, 소악마처럼 이로 ",
        you.get_colored_name(),
        "의 민감한 곳을 살짝 스쳐요.",
      ]);
      await kitaru.print_and_wait([
        callname,
        "이(가) 반응하실 때마다 저도 기뻐서 웃고 말아요.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async force_blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await you.say_and_wait("입 벌려.");
      await kitaru.print_and_wait(
        "저항하면 통할지도 몰라요…… 그렇게 생각했는데도 몸은 조금씩 그 손에 눌려 내려가요……",
      );
      await kitaru.say_and_wait("읏……");
      await kitaru.print_and_wait([
        "무녀는 여러 가지 의식을 익혀야 해요. 하나를 보고 다른 것에도 응용하는 능력은 꼭 필요하죠. 하지만…… 이런 데에 쓰게 될 줄은 몰랐어요.",
      ]);
      await kitaru.print_and_wait([
        "당근이라고 생각하며 혀끝으로 기둥을 살짝 건드린 다음, 혀를 휘감아 핥으며 ",
        callname,
        "의 남성 호르몬 맛을 음미해요.",
      ]);
      await kitaru.say_and_wait(["하, 읏, 츄릅……"]);
      await kitaru.print_and_wait([
        "입으로 자지를 삼키고 핥으며, 음란하고 방탕한 빠는 소리를 흘려요.",
      ]);
    } else {
      await kitaru.say_and_wait("하아……", true);
      await kitaru.say_and_wait("아직…… 계속하시나요……", true);
      await you.say_and_wait(["배우는 게 빠르네."]);
      await kitaru.print_and_wait([
        callname,
        "은(는) 단단한 물건을 쪽쪽 빨며 봉사하는 저를 보며, 머리를 쓰다듬고 칭찬해 주셨어요.",
      ]);
      await kitaru.print_and_wait(["음…… 후후, 기분 좋으시죠?"]);
      await kitaru.print_and_wait([
        "음란한 혀를 내밀어 요도 입구를 조금씩 핥거나, 귀두를 입에 머금고 혓바닥으로 가볍게 누르거나, 소악마처럼 이로 ",
        you.get_colored_name(),
        "의 민감한 곳을 살짝 스쳐요.",
      ]);
      await kitaru.print_and_wait([
        callname,
        "이(가) 반응하실 때마다 저도 기뻐서 웃고 말아요.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async deep_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.print_and_wait(["후…… 이렇게 숨 쉬려니 조금 힘드네요."]);
      await kitaru.print_and_wait([
        "고개를 더 뒤로 젖히고 작은 혀를 힘껏 움츠려, 자지가 입안으로 밀려 들어올 공간을 만들어요.",
      ]);
      await kitaru.print_and_wait(["아직도 끝부분인가요?"]);
      await kitaru.print_and_wait([
        "눈을 감은 채 헝클어진 털이 코를 찌르는 간지러움과, 점점 선명해지며 까닭 없이 취하게 만드는 냄새를 느낄 때까지.",
      ]);
      await kitaru.print_and_wait([
        "머릿속이 새하얘요. 이대로 더 깊이 받아도 괜찮겠죠?",
      ]);
      await kitaru.print_and_wait([
        "머리를 쓰다듬는 감촉.",
        callname,
        "의 커다란 손이 폭신한 주황빛 머리 위에 부드럽게 얹혀, 격려하듯 쓰다듬어요. 제 움직임에 맞춰 이미 힘없이 처진 두 귀에도 가끔 손이 닿아요.",
      ]);
      await kitaru.print_and_wait([
        "마치…… 으, 아니에요…… 이 자세는 누가 봐도 ",
        callname,
        "의 반려동물 같아요. 작은 여우가 된 건가요?",
      ]);
      await kitaru.print_and_wait([
        "그래서 자지 냄새에 길들여진 저는 주인의 신호를 하나도 빠짐없이 이해해요.",
      ]);
      await kitaru.print_and_wait([
        "왼쪽 귀를 당기면 입술을 오므려 자지를 누르고, 젖은 분홍빛 혀로 민감한 귀두를 감싸요.",
      ]);
      await kitaru.print_and_wait([
        "오른쪽 귀를 당기면 고개를 좌우로 흔들며, 볼 안쪽의 부드러운 살과 혀로 자지를 모셔요.",
      ]);
      await kitaru.print_and_wait([
        callname,
        "이(가) 짧게 머리를 쓰다듬으면 끝부분을 세게 빨아 볼을 음란하게 움푹 들이고, 혀끝으로 요도 입구를 문질러요.",
      ]);
      await kitaru.say_and_wait(["으읍──"]);
      await kitaru.print_and_wait([
        "다리가 힘을 잃고 떨리며, 작은 머리는 멍해진 채 자지를 삼켰다 뱉는 속도를 높였다.",
      ]);
    } else {
      await kitaru.say_and_wait(["꿀꺽─!"]);
      await kitaru.print_and_wait([
        "별빛 눈동자는 이미 살짝 뒤집혀 있는데도, 목구멍은 쉴 새 없이 열리고 닫힌다. 평소에는 공기밖에 닿지 않던 목 안의 살로 귀두를 조이며 자극한다.",
      ]);
      await kitaru.say_and_wait(["읏~ 츄릅~ 읏─!"]);
      await kitaru.print_and_wait([
        "음모에 밀착한 분홍빛 입술과 자지 사이로 색정적인 숨이 새어 나오고, 치켜든 밤색 꼬리는 공을 자랑하듯 흔들린다.",
      ]);
      await kitaru.say_and_wait(["으읍──"]);
      await you.print_and_wait([
        "두 다리가 힘을 잃고 떨리며, 장거리를 달릴 수 있는 몸조차 지탱하기 힘든 듯 앞으로 기운다. 귀여운 얼굴이 자지 뿌리에 점점 가까워진다.",
      ]);
      await you.print_and_wait([
        "자지 냄새에 제대로 뜨지 못하는 별빛 눈동자를 가늘게 뜬다. 숨을 쉴 때마다 입가에서 자지 냄새가 옅게 밴 침이 흘러나와, 곧고 하얀 목을 타고 가슴에 떨어진다.",
      ]);
      await you.say_and_wait([y_call_k, '？']);
      await kitaru.say_and_wait(["읏…… 으으응……"]);
      await you.print_and_wait([
        "아래에 있는 상대의 상태를 시험 삼아 물어도 웅얼거리는 대답만 돌아오고, 작은 얼굴은 완전히 ",
        you.get_colored_name(),
        "의 사타구니 음모 속에 파묻혔다.",
      ]);
      await you.print_and_wait([
        "뭐, 무사하다면 계속한다. 담당의 머리를 사타구니에 단단히 누르고 허리를 앞뒤로 움직이며, 정말로 ",
        y_call_k,
        "의 입을 박는 것처럼 자지로 담당의 작은 입과 목구멍을 범하는 쾌감을 즐긴다.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_deep_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait("더 깊이……");
      await kitaru.print_and_wait([
        "욕심껏 중얼거리며 쾌감에 지배당한 ",
        callname,
        "이(가) 허리를 밀어 올린다.",
      ]);
      await kitaru.print_and_wait("더 깊이 머금었어요……");
      await kitaru.print_and_wait("안쪽까지 닿았어요……");
      await kitaru.print_and_wait(["후…… 이렇게 숨 쉬려니 조금 힘드네요."]);
      await kitaru.print_and_wait([
        "고개를 더 뒤로 젖히고 작은 혀를 힘껏 움츠려, 자지가 입안으로 밀려 들어올 공간을 만들어요.",
      ]);
      await kitaru.print_and_wait(["아직도 끝부분인가요?"]);
      await kitaru.print_and_wait([
        "눈을 감은 채 헝클어진 털이 코를 찌르는 간지러움과, 점점 선명해지며 까닭 없이 취하게 만드는 냄새를 느낄 때까지.",
      ]);
      await kitaru.print_and_wait([
        "머릿속이 새하얘요. 이대로 더 깊이 받아도 괜찮겠죠?",
      ]);
      await kitaru.print_and_wait([
        "머리를 쓰다듬는 감촉.",
        callname,
        "의 커다란 손이 폭신한 주황빛 머리 위에 부드럽게 얹혀, 격려하듯 쓰다듬어요. 제 움직임에 맞춰 이미 힘없이 처진 두 귀에도 가끔 손이 닿아요.",
      ]);
      await kitaru.print_and_wait([
        "마치…… 으, 아니에요…… 이 자세는 누가 봐도 ",
        callname,
        "의 반려동물 같아요. 작은 여우가 된 건가요?",
      ]);
      await kitaru.print_and_wait([
        "그래서 자지 냄새에 길들여진 저는 주인의 신호를 하나도 빠짐없이 이해해요.",
      ]);
      await kitaru.print_and_wait([
        "왼쪽 귀를 당기면 입술을 오므려 자지를 누르고, 젖은 분홍빛 혀로 민감한 귀두를 감싸요.",
      ]);
      await kitaru.print_and_wait([
        "오른쪽 귀를 당기면 고개를 좌우로 흔들며, 볼 안쪽의 부드러운 살과 혀로 자지를 모셔요.",
      ]);
      await kitaru.print_and_wait([
        callname,
        "이(가) 짧게 머리를 쓰다듬으면 끝부분을 세게 빨아 볼을 음란하게 움푹 들이고, 혀끝으로 요도 입구를 문질러요.",
      ]);
      await kitaru.say_and_wait(["으읍──"]);
      await kitaru.print_and_wait([
        "다리가 힘을 잃고 떨리며, 작은 머리는 멍해진 채 자지를 삼켰다 뱉는 속도를 높였다.",
      ]);
    } else {
      await kitaru.print_and_wait([
        "목구멍으로 자지를 감싸 봉사하면서도 꼬리를 흔들 여유가 조금씩 생겼다.",
        kitaru.get_colored_name(),
        "은(는) 이 방면에서 ",
        you.phy_sex_title,
        "의 예상보다 재능이 있다.",
      ]);
      await kitaru.print_and_wait([
        "곁눈으로 ",
        callname,
        "이(가) 숨을 들이쉬며 턱을 드는 모습을 보고, 노래할 틈도 없는 ",
        kitaru.get_colored_name(),
        "은(는) 알아보기 쉽게 귀를 파르르 떤다.",
      ]);
      await kitaru.print_and_wait("어떠세요~");
      await kitaru.print_and_wait([
        "지금 작은 입에는 말을 할 여유가 없다. 하지만 담당과 거리가 마이너스가 될 만큼 맞닿아 있는 ",
        callname,
        "은(는) 혀끝이 귀두에 그려 낸, 공을 자랑하는 말을 완벽히 이해했다.",
      ]);
      await kitaru.say_and_wait(["꿀꺽─!"]);
      await kitaru.print_and_wait([
        "별빛 눈동자는 이미 살짝 뒤집혀 있는데도, 목구멍은 쉴 새 없이 열리고 닫힌다. 평소에는 공기밖에 닿지 않던 목 안의 살로 귀두를 조이며 자극한다.",
      ]);
      await kitaru.say_and_wait(["읏~ 츄릅~ 읏─!"]);
      await kitaru.print_and_wait([
        "음모에 밀착한 분홍빛 입술과 자지 사이로 색정적인 숨이 새어 나오고, 치켜든 밤색 꼬리는 공을 자랑하듯 흔들린다.",
      ]);
      await kitaru.say_and_wait(["으읍──"]);
      await you.print_and_wait([
        "두 다리가 힘을 잃고 떨리며, 장거리를 달릴 수 있는 몸조차 지탱하기 힘든 듯 앞으로 기운다. 귀여운 얼굴이 자지 뿌리에 점점 가까워진다.",
      ]);
      await you.print_and_wait([
        "자지 냄새에 제대로 뜨지 못하는 별빛 눈동자를 가늘게 뜬다. 숨을 쉴 때마다 입가에서 자지 냄새가 옅게 밴 침이 흘러나와, 곧고 하얀 목을 타고 가슴에 떨어진다.",
      ]);
      await you.say_and_wait([y_call_k, '？']);
      await kitaru.say_and_wait(["읏…… 으으응……"]);
      await you.print_and_wait([
        "아래에 있는 상대의 상태를 시험 삼아 물어도 웅얼거리는 대답만 돌아오고, 작은 얼굴은 완전히 ",
        you.get_colored_name(),
        "의 사타구니 음모 속에 파묻혔다.",
      ]);
      await you.print_and_wait([
        "뭐, 무사하다면 계속한다. 담당의 머리를 사타구니에 단단히 누르고 허리를 앞뒤로 움직이며, 정말로 ",
        y_call_k,
        "의 입을 박는 것처럼 자지로 담당의 작은 입과 목구멍을 범하는 쾌감을 즐긴다.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async force_deep_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait("고개 들어.");
      await kitaru.print_and_wait("더 깊이 머금었어요……");
      await kitaru.print_and_wait("여전히 온기라고는 없는 짧은 명령이에요.");
      await kitaru.print_and_wait([
        "그런데도 ",
        kitaru.get_colored_name(),
        "의 몸은 거스를 수 없이 그 명령에 지배당해요.",
      ]);
      await kitaru.print_and_wait(["후…… 이렇게 숨 쉬려니 조금 힘드네요."]);
      await kitaru.print_and_wait([
        "고개를 더 뒤로 젖히고 작은 혀를 힘껏 움츠려, 자지가 입안으로 밀려 들어올 공간을 만들어요.",
      ]);
      await kitaru.print_and_wait(["아직도 끝부분인가요?"]);
      await kitaru.print_and_wait([
        "눈을 감은 채 헝클어진 털이 코를 찌르는 간지러움과, 점점 선명해지며 까닭 없이 취하게 만드는 냄새를 느낄 때까지.",
      ]);
      await kitaru.print_and_wait([
        "머릿속이 새하얘요. 이대로 더 깊이 받아도 괜찮겠죠?",
      ]);
      await kitaru.print_and_wait([
        "머리를 쓰다듬는 감촉.",
        callname,
        "의 커다란 손이 폭신한 주황빛 머리 위에 부드럽게 얹혀, 격려하듯 쓰다듬어요. 제 움직임에 맞춰 이미 힘없이 처진 두 귀에도 가끔 손이 닿아요.",
      ]);
      await kitaru.print_and_wait([
        "마치…… 으, 아니에요…… 이 자세는 누가 봐도 ",
        callname,
        "의 반려동물 같아요. 작은 여우가 된 건가요?",
      ]);
      await kitaru.print_and_wait([
        "그래서 자지 냄새에 길들여진 저는 주인의 신호를 하나도 빠짐없이 이해해요.",
      ]);
      await kitaru.print_and_wait([
        "왼쪽 귀를 당기면 입술을 오므려 자지를 누르고, 젖은 분홍빛 혀로 민감한 귀두를 감싸요.",
      ]);
      await kitaru.print_and_wait([
        "오른쪽 귀를 당기면 고개를 좌우로 흔들며, 볼 안쪽의 부드러운 살과 혀로 자지를 모셔요.",
      ]);
      await kitaru.print_and_wait([
        callname,
        "이(가) 짧게 머리를 쓰다듬으면 끝부분을 세게 빨아 볼을 음란하게 움푹 들이고, 혀끝으로 요도 입구를 문질러요.",
      ]);
      await kitaru.say_and_wait(["으읍──"]);
      await kitaru.print_and_wait([
        "다리가 힘을 잃고 떨리며, 작은 머리는 멍해진 채 자지를 삼켰다 뱉는 속도를 높였다.",
      ]);
    } else {
      await kitaru.print_and_wait([
        "말없이 재촉하며 ",
        you.phy_sex_title,
        "은(는) 다시 손에 힘을 주어 눈앞의 ",
        kitaru.teen_sex_title,
        "을(를) 사타구니에 고정했다. 자신이 만족할 때까지.",
      ]);
      await kitaru.say_and_wait(["꿀꺽─!"]);
      await kitaru.print_and_wait([
        "별빛 눈동자는 이미 살짝 뒤집혀 있는데도, 목구멍은 쉴 새 없이 열리고 닫힌다. 평소에는 공기밖에 닿지 않던 목 안의 살로 귀두를 조이며 자극한다.",
      ]);
      await kitaru.say_and_wait(["읏~ 츄릅~ 읏─!"]);
      await kitaru.print_and_wait([
        "음모에 밀착한 분홍빛 입술과 자지 사이로 색정적인 숨이 새어 나오고, 치켜든 밤색 꼬리는 공을 자랑하듯 흔들린다.",
      ]);
      await kitaru.say_and_wait(["으읍──"]);
      await you.print_and_wait([
        "두 다리가 힘을 잃고 떨리며, 장거리를 달릴 수 있는 몸조차 지탱하기 힘든 듯 앞으로 기운다. 귀여운 얼굴이 자지 뿌리에 점점 가까워진다.",
      ]);
      await you.print_and_wait([
        "자지 냄새에 제대로 뜨지 못하는 별빛 눈동자를 가늘게 뜬다. 숨을 쉴 때마다 입가에서 자지 냄새가 옅게 밴 침이 흘러나와, 곧고 하얀 목을 타고 가슴에 떨어진다.",
      ]);
      await you.say_and_wait([y_call_k, '？']);
      await kitaru.say_and_wait(["읏…… 으으응……"]);
      await you.print_and_wait([
        "아래에 있는 상대의 상태를 시험 삼아 물어도 웅얼거리는 대답만 돌아오고, 작은 얼굴은 완전히 ",
        you.get_colored_name(),
        "의 사타구니 음모 속에 파묻혔다.",
      ]);
      await you.print_and_wait([
        "뭐, 무사하다면 계속한다. 담당의 머리를 사타구니에 단단히 누르고 허리를 앞뒤로 움직이며, 정말로 ",
        y_call_k,
        "의 입을 박는 것처럼 자지로 담당의 작은 입과 목구멍을 범하는 쾌감을 즐긴다.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async hand_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.say_and_wait([
        "저기, ",
        callname,
        "……저, 잘하고 있나요?",
      ]);
      await kitaru.print_and_wait([
        "대답은 들리지 않아요. 하지만 ",
        callname,
        "의 허리가 조금 들리는 것은 보였어요.",
      ]);
      await kitaru.say_and_wait(["그럼 계속할게요……"]);
      await kitaru.print_and_wait([
        "오른손의 새끼손가락과 검지로 자지를 가볍게 감싸 고리를 만들고 천천히 훑어요. 가끔 다른 손의 손가락 끝으로 귀두의 홈을 문질러, 두 사람의 몸이 떨릴 만큼 촉촉한 마찰음을 내요. 새빨간 귀두에서 떨어지는 투명한 쿠퍼액으로 두 손은 이미 미끈거려요.",
      ]);
      await kitaru.say_and_wait(["음…… 이러고 있으니 참배하기 전에 손을 씻는 것 같아요."]);
      await kitaru.print_and_wait([
        "무녀의 정성 어린 봉사를 받은 자지도 더 많은 쿠퍼액을 흘리며 화답한다.",
      ]);
    } else {
      await kitaru.print_and_wait([
        "왼손으로 더욱 부푼 기둥을 살며시 받치고, 앞선 봉사로 이미 미끈거리는 오른손을 번들거리는 귀두에 직접 덮는다.",
      ]);
      await kitaru.print_and_wait([
        "타로 카드를 섞을 때는 더없이 재빠르던 가느다란 다섯 손가락이 굴복한 듯 힘없이 늘어지며, 하얗고 부드러운 손바닥을 사나운 귀두에 단단히 고정한다.",
      ]);
      await kitaru.print_and_wait([
        "손으로 훑는 속도를 높이자 눈앞의 남자는 저도 모르게 허리를 더 들어 올린다.",
      ]);
      await kitaru.print_and_wait(["하아……", callname, "도 기쁘신 것 같아요……"]);
      await kitaru.print_and_wait([
        "제 아랫배도 움찔거리고 있으니까, 어서 싸 주세요……",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_hand_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        "바라보기만 해도 아랫배가 움찔거리는 ",
        callname,
        "의 물건을 응시하며, 열 손가락이 평소 신의 계시를 받았을 때처럼 율동하기 시작한다.",
      ]);
      await kitaru.say_and_wait(["저기, 손으로 해 드릴까요?"]);
      await kitaru.print_and_wait([
        "말씀하지 않으셔도 점으로 알 수 있어요. 손을 뻗어 핏줄이 불거진 자지를 달래요. 제 구멍을 음란한 모양으로 벌리는 괴물이 될 때까지.",
      ]);
      await kitaru.say_and_wait([
        "저기, ",
        callname,
        "……저, 잘하고 있나요?",
      ]);
      await kitaru.print_and_wait([
        "대답은 들리지 않아요. 하지만 ",
        callname,
        "의 허리가 조금 들리는 것은 보였어요.",
      ]);
      await kitaru.say_and_wait(["그럼 계속할게요……"]);
      await kitaru.print_and_wait([
        "오른손의 새끼손가락과 검지로 자지를 가볍게 감싸 고리를 만들고 천천히 훑어요. 가끔 다른 손의 손가락 끝으로 귀두의 홈을 문질러, 두 사람의 몸이 떨릴 만큼 촉촉한 마찰음을 내요. 새빨간 귀두에서 떨어지는 투명한 쿠퍼액으로 두 손은 이미 미끈거려요.",
      ]);
      await kitaru.say_and_wait(["음…… 이러고 있으니 참배하기 전에 손을 씻는 것 같아요."]);
      await kitaru.print_and_wait([
        "무녀의 정성 어린 봉사를 받은 자지도 더 많은 쿠퍼액을 흘리며 화답한다.",
      ]);
    } else {
      await kitaru.print_and_wait([
        "왼손으로 더욱 부푼 기둥을 살며시 받치고, 앞선 봉사로 이미 미끈거리는 오른손을 번들거리는 귀두에 직접 덮는다.",
      ]);
      await kitaru.print_and_wait([
        "타로 카드를 섞을 때는 더없이 재빠르던 가느다란 다섯 손가락이 굴복한 듯 힘없이 늘어지며, 하얗고 부드러운 손바닥을 사나운 귀두에 단단히 고정한다.",
      ]);
      await kitaru.print_and_wait([
        "손으로 훑는 속도를 높이자 눈앞의 남자는 저도 모르게 허리를 더 들어 올린다.",
      ]);
      await kitaru.print_and_wait(["하아……", callname, "도 기쁘신 것 같아요……"]);
      await kitaru.print_and_wait([
        "제 아랫배도 움찔거리고 있으니까, 어서 싸 주세요……",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async force_hand_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait([y_call_k, ", 손 벌려."]);
      await kitaru.print_and_wait([
        callname,
        "은(는) 꽤 강압적으로 벌린 두 손 사이에 자지를 내밀었어요. 짙은 냄새를 맡기만 해도 머리가 뜨거워져요.",
      ]);
      await kitaru.print_and_wait([
        "싫은 표정을 지어야겠죠? 이렇게 강하게 명령하시니까요.",
      ]);
      await kitaru.print_and_wait([
        "그런데도 오른손은 무척 경건하게 귀두의 민감한 홈을 쓰다듬기 시작하고, 왼손은 부푼 주머니와 함께 ",
        callname,
        "의 자지를 부드러운 손바닥에 받치고 있어요.",
      ]);
      await kitaru.say_and_wait([
        "저기, ",
        callname,
        "……저, 잘하고 있나요?",
      ]);
      await kitaru.print_and_wait([
        "대답은 들리지 않아요. 하지만 ",
        callname,
        "의 허리가 조금 들리는 것은 보였어요.",
      ]);
      await kitaru.say_and_wait(["그럼 계속할게요……"]);
      await kitaru.print_and_wait([
        "오른손의 새끼손가락과 검지로 자지를 가볍게 감싸 고리를 만들고 천천히 훑어요. 가끔 다른 손의 손가락 끝으로 귀두의 홈을 문질러, 두 사람의 몸이 떨릴 만큼 촉촉한 마찰음을 내요. 새빨간 귀두에서 떨어지는 투명한 쿠퍼액으로 두 손은 이미 미끈거려요.",
      ]);
      await kitaru.say_and_wait(["음…… 이러고 있으니 참배하기 전에 손을 씻는 것 같아요."]);
      await kitaru.print_and_wait([
        "무녀의 정성 어린 봉사를 받은 자지도 더 많은 쿠퍼액을 흘리며 화답한다.",
      ]);
    } else {
      await kitaru.print_and_wait([
        "왼손으로 더욱 부푼 기둥을 살며시 받치고, 앞선 봉사로 이미 미끈거리는 오른손을 번들거리는 귀두에 직접 덮는다.",
      ]);
      await kitaru.print_and_wait([
        "타로 카드를 섞을 때는 더없이 재빠르던 가느다란 다섯 손가락이 굴복한 듯 힘없이 늘어지며, 하얗고 부드러운 손바닥을 사나운 귀두에 단단히 고정한다.",
      ]);
      await kitaru.print_and_wait([
        "손으로 훑는 속도를 높이자 눈앞의 남자는 저도 모르게 허리를 더 들어 올린다.",
      ]);
      await kitaru.print_and_wait(["하아……", callname, "도 기쁘신 것 같아요……"]);
      await kitaru.print_and_wait([
        "제 아랫배도 움찔거리고 있으니까, 어서 싸 주세요……",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async hand_and_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.print_and_wait(["자지가 또 커졌어요……"]);
      await kitaru.print_and_wait(["저를 흐트러뜨리는, 중독될 것 같은 냄새도……"]);
      await kitaru.print_and_wait([
        "기둥을 쥔 두 손을 조금 뒤로 옮겨 단단한 귀두를 드러내고, 입술로 살짝 머금어요. 혀끝의 열기를 제 체온이 담긴 숨결과 함께 ",
        callname,
        "의 기둥으로 보내요.",
      ]);
      await kitaru.say_and_wait(["쪽~"]);
      await kitaru.print_and_wait([callname, ", 이런 걸 좋아하시는 것 같아요."]);
    } else {
      await kitaru.say_and_wait(["츄릅츄릅──"]);
      await you.print_and_wait([
        "아래에 있는 ",
        y_call_k,
        "은(는) 뺨을 조금 들어 기둥 옆면을 핥고, 혀끝에 힘을 주어 귀두의 테두리와 요도 입구를 가볍게 찌른다.",
      ]);
      await you.print_and_wait([
        "가끔 입술을 뗄 수밖에 없을 때면 기다리던 두 손이 빈자리를 메운다. 가느다란 손가락이 온 힘을 다해 기둥을 쓰다듬으며 번갈아 쾌감을 전한다.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_hand_and_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait(["핥아 봐."]);
      await kitaru.print_and_wait([
        callname,
        "에게 그런 지시를 받고, 의심 없이 혀끝을 내밀어 요도 입구에서 떨어지는 액체를 말아 삼켜요.",
      ]);
      await kitaru.print_and_wait([
        "하아, 괜찮죠? 혀까지 미끈거려요…… 네! 더 대담하게요?",
      ]);
      await kitaru.print_and_wait([
        "손으로 각도를 고쳐 잡고, 보석을 다루듯 혀끝으로 귀두와 그 테두리의 홈을 계속 핥아요.",
      ]);
      await kitaru.print_and_wait(["자지가 또 커졌어요……"]);
      await kitaru.print_and_wait(["저를 흐트러뜨리는, 중독될 것 같은 냄새도……"]);
      await kitaru.print_and_wait([
        "기둥을 쥔 두 손을 조금 뒤로 옮겨 단단한 귀두를 드러내고, 입술로 살짝 머금어요. 혀끝의 열기를 제 체온이 담긴 숨결과 함께 ",
        callname,
        "의 기둥으로 보내요.",
      ]);
      await kitaru.say_and_wait(["쪽~"]);
      await kitaru.print_and_wait([callname, ", 이런 걸 좋아하시는 것 같아요."]);
    } else {
      await kitaru.say_and_wait(["츄릅츄릅──"]);
      await you.print_and_wait([
        "아래에 있는 ",
        y_call_k,
        "은(는) 뺨을 조금 들어 기둥 옆면을 핥고, 혀끝에 힘을 주어 귀두의 테두리와 요도 입구를 가볍게 찌른다.",
      ]);
      await you.print_and_wait([
        "가끔 입술을 뗄 수밖에 없을 때면 기다리던 두 손이 빈자리를 메운다. 가느다란 손가락이 온 힘을 다해 기둥을 쓰다듬으며 번갈아 쾌감을 전한다.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async force_hand_and_blow_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait(["손과 입으로 동시에 해. 할 수 있지?"]);
      await kitaru.print_and_wait([
        "내려다보는 ",
        callname,
        "의 시선에 맞춰 두 다리가 저절로 M자로 크게 벌어지고, 자지는 혀끝을 내밀면 닿을 자리에 있어요.",
      ]);
      await kitaru.print_and_wait([
        "으, 태도가 너무 나빠요. 속으로 투덜거리면서도 심한 마조인 저는 이미 자지의 불거진 핏줄을 조심스럽게 쓰다듬으며, 혀끝으로 요도 입구를 가볍게 찌르고 있어요.",
      ]);
      await kitaru.print_and_wait(["읏…… 물론 할 수 있어요."]);
      await kitaru.print_and_wait(["자지가 또 커졌어요……"]);
      await kitaru.print_and_wait(["저를 흐트러뜨리는, 중독될 것 같은 냄새도……"]);
      await kitaru.print_and_wait([
        "기둥을 쥔 두 손을 조금 뒤로 옮겨 단단한 귀두를 드러내고, 입술로 살짝 머금어요. 혀끝의 열기를 제 체온이 담긴 숨결과 함께 ",
        callname,
        "의 기둥으로 보내요.",
      ]);
      await kitaru.say_and_wait(["쪽~"]);
      await kitaru.print_and_wait([callname, ", 이런 걸 좋아하시는 것 같아요."]);
    } else {
      await kitaru.say_and_wait(["츄릅츄릅──"]);
      await you.print_and_wait([
        "아래에 있는 ",
        y_call_k,
        "은(는) 뺨을 조금 들어 기둥 옆면을 핥고, 혀끝에 힘을 주어 귀두의 테두리와 요도 입구를 가볍게 찌른다.",
      ]);
      await you.print_and_wait([
        "가끔 입술을 뗄 수밖에 없을 때면 기다리던 두 손이 빈자리를 메운다. 가느다란 손가락이 온 힘을 다해 기둥을 쓰다듬으며 번갈아 쾌감을 전한다.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async tit_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await you.print_and_wait([
        "눈앞의 담당이 자지를 가슴골에 뿌리까지 밀어 넣고, 평소 제복 아래 숨겨져 있던 크고도 발랄한 두 마리의 흰 토끼를 온 힘을 다해 밀착시킨다.",
      ]);
      await kitaru.say_and_wait([
        "으음~ 읏, 후, 으음~",
        callname,
        ", 감촉은…… 괜찮으세요?",
      ]);
      await you.print_and_wait([
        "그래서 봉사하는 상대의 머리를 다정하게 쓰다듬으며, 선명한 주황빛 머리카락 위로 손바닥을 앞뒤로 움직였다.",
      ]);
      await you.print_and_wait(["쓰읍…… 더 힘이 들어갔네."]);
    } else {
      await kitaru.print_and_wait([
        "자지가 움찔거려요. 봉사가 효과를 보는 모양이에요. 하지만 ",
        callname,
        "이(가) 불쾌해하시지는 않을까 늘 걱정돼요.",
      ]);
      await kitaru.print_and_wait([
        "그래서 이미 단단히 선 두 체리를 자지에 대고, 딱딱한 유두로 가슴 봉사에 다른 감촉을 더해 봐요.",
      ]);
      await kitaru.print_and_wait([
        "유두가 더욱 뜨거운 자지에 닿자 전류가 머리를 마비시키고, 사타구니가 미끈거리기 시작했어요.",
      ]);
      await kitaru.print_and_wait([
        "하…… 하아, 이렇게 보니 저도 즐기고 있네요.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_tit_job(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        "자신의 점술가의 가슴에서 움직임에 맞춰 흔들리는 둥근 살덩이를 바라본다. 꼿꼿이 선 유두 주위는 건강한 분홍빛이다.",
      ]);
      await you.print_and_wait(["저 가슴으로 자지를 감싸면 어떨까."]);
      await kitaru.say_and_wait(["좋아요~!"]);
      await you.print_and_wait([
        "입 밖에 내기도 전에 담당의 익숙한 대답이 들렸다.",
        y_call_k,
        "은(는) 그런 눈치 빠른 우마무스메다.",
      ]);
      await you.print_and_wait([
        "눈앞의 담당이 자지를 가슴골에 뿌리까지 밀어 넣고, 평소 제복 아래 숨겨져 있던 크고도 발랄한 두 마리의 흰 토끼를 온 힘을 다해 밀착시킨다.",
      ]);
      await kitaru.say_and_wait([
        "으음~ 읏, 후, 으음~",
        callname,
        ", 감촉은…… 괜찮으세요?",
      ]);
      await you.print_and_wait([
        "그래서 봉사하는 상대의 머리를 다정하게 쓰다듬으며, 선명한 주황빛 머리카락 위로 손바닥을 앞뒤로 움직였다.",
      ]);
      await you.print_and_wait(["쓰읍…… 더 힘이 들어갔네."]);
    } else {
      await kitaru.print_and_wait([
        "자지가 움찔거려요. 봉사가 효과를 보는 모양이에요. 하지만 ",
        callname,
        "이(가) 불쾌해하시지는 않을까 늘 걱정돼요.",
      ]);
      await kitaru.print_and_wait([
        "그래서 이미 단단히 선 두 체리를 자지에 대고, 딱딱한 유두로 가슴 봉사에 다른 감촉을 더해 봐요.",
      ]);
      await kitaru.print_and_wait([
        "유두가 더욱 뜨거운 자지에 닿자 전류가 머리를 마비시키고, 사타구니가 미끈거리기 시작했어요.",
      ]);
      await kitaru.print_and_wait([
        "하…… 하아, 이렇게 보니 저도 즐기고 있네요.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async tit_and_blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        "허리를 위아래로 움직여, 자지를 끼운 부드러운 골에 번들거리는 쿠퍼액을 고르게 바른다. 가슴골과 자지의 열기에 액체가 증발하며 머리까지 멍해진다.",
      ]);
      await kitaru.print_and_wait(["냄새가…… 평소보다 짙은 것 같아요."]);
      await kitaru.print_and_wait([
        "조심스럽게 위치를 고쳐, 쿠퍼액을 계속 흘리는 귀두만 입 앞에 드러내요. 몸을 조금 앞으로 기울여 머금자 혀가 딱 귀두의 테두리에 닿아요.",
      ]);
      await kitaru.print_and_wait([
        "아…… 맛있다고는 도저히 못 하겠네요. 그래도…… 조금만 더 삼킬게요.",
      ]);
    } else {
      await kitaru.say_and_wait(["츄르릅……"]);
      await kitaru.print_and_wait([
        "떨어지는 짭짤한 액체를 한 방울도 낭비하지 않고 삼켜요. 가끔 귀두가 입에서 빠져나가면 분홍빛 혀도 따라가, 이미 미끈하게 번들거리는 가슴에 떨어지기 전에 받아 내요.",
      ]);
      await kitaru.print_and_wait([
        "머릿속이 이 음란한 냄새로 가득 찰 때까지.",
      ]);
      await kitaru.print_and_wait([
        "왜냐하면……",
        callname,
        "이(가) 저를 인정해 주신 상이니까요.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_tit_and_blow_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        "가슴살 사이에서 고개를 내민 ",
        callname,
        "의 귀두가 조금 기운 없어 보인다.",
      ]);
      await kitaru.print_and_wait(
        "당사자도 알아보기 쉽게 손바닥을 모아 부탁하고 있다.",
      );
      await kitaru.print_and_wait([
        "허리를 위아래로 움직여, 자지를 끼운 부드러운 골에 번들거리는 쿠퍼액을 고르게 바른다. 가슴골과 자지의 열기에 액체가 증발하며 머리까지 멍해진다.",
      ]);
      await kitaru.print_and_wait(["냄새가…… 평소보다 짙은 것 같아요."]);
      await kitaru.print_and_wait([
        "조심스럽게 위치를 고쳐, 쿠퍼액을 계속 흘리는 귀두만 입 앞에 드러내요. 몸을 조금 앞으로 기울여 머금자 혀가 딱 귀두의 테두리에 닿아요.",
      ]);
      await kitaru.print_and_wait([
        "아…… 맛있다고는 도저히 못 하겠네요. 그래도…… 조금만 더 삼킬게요.",
      ]);
    } else {
      await kitaru.say_and_wait(["츄르릅……"]);
      await kitaru.print_and_wait([
        "떨어지는 짭짤한 액체를 한 방울도 낭비하지 않고 삼켜요. 가끔 귀두가 입에서 빠져나가면 분홍빛 혀도 따라가, 이미 미끈하게 번들거리는 가슴에 떨어지기 전에 받아 내요.",
      ]);
      await kitaru.print_and_wait([
        "머릿속이 이 음란한 냄새로 가득 찰 때까지.",
      ]);
      await kitaru.print_and_wait([
        "왜냐하면……",
        callname,
        "이(가) 저를 인정해 주신 상이니까요.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async foot_job(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.say_and_wait([callname, "~이렇게…… 괜찮으세요?"]);
      await you.print_and_wait([
        "가늘게 뜬 주황빛 눈동자에 장난기가 살짝 비치고, 뛰어난 막판 스퍼트를 낼 수 있는 두 발이 ",
        you.get_colored_name(),
        "의 자지 위에 올라왔다.",
      ]);
      await you.print_and_wait([
        "한쪽 발로 귀두를 쓰다듬고 다른 쪽으로 기둥을 받친다. 보송한 발바닥과의 마찰로 귀두가 따뜻해지자, 붉게 부푼 자지의 굵은 핏줄을 따라 감각이 둔한 뿌리 쪽으로 더듬어 내려간다.",
      ]);
      await kitaru.say_and_wait(["……정말 뜨거워요…… 녹을 것 같아요……"]);
      await you.print_and_wait([
        "우마무스메가 소중히 여기는 두 발이 정사의 유희에 거리낌 없이 쓰인다. 귀두 끝의 끈적한 쿠퍼액도 더 많이, 더 빠르게 만들어진다.",
      ]);
    } else {
      await kitaru.print_and_wait([
        "선입이 특기인 저는 레이스에서도 주변을 살펴야 하기 때문일까요.",
      ]);
      await kitaru.print_and_wait([
        "그래서 두 발로 정성껏 ",
        callname,
        "의 자지를 돌보면서도 ",
        callname,
        "의 상태를 살필 여유가 있어요.",
      ]);
      await kitaru.print_and_wait([
        "처음에는 발바닥 사이에 자지를 끼워 훑다가 ",
        callname,
        "의 숨이 점점 거칠어지면 자세를 바꾸어 민감한 곳을 계속 자극해요.",
      ]);
      await kitaru.print_and_wait([
        "부드러운 발바닥 가운데로 귀두를 누르다가 자지가 떨리기 시작하면, 짓궂게 문지르기를 멈추고 발가락을 굽혀 귀두를 붙잡아요.",
      ]);
      await kitaru.say_and_wait(
        [
          "하아……",
          callname,
          "의 단단한 자지를 발밑에 두고 있다는, 알 수 없는 우월감.",
        ],
        true,
      );
      await kitaru.say_and_wait(
        ["……이상해요. 발로 해 드릴 뿐인데 심장이 빨리 뛰고 몸도 뜨거워요."],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async missionary(kitaru, you, callname, y_call_k) {
    await kitaru.say_and_wait("읏…… 좋아요.");
    await you.print_and_wait([
      "두 팔을 ",
      callname,
      "의 등에 두르고, 붉어진 뺨을 보이기 싫은 듯 머리를 ",
      callname,
      "의 어깨에 기댔다.",
    ]);
    await you.print_and_wait([
      "자지가 음란한 물소리와 함께 ",
      y_call_k,
      "의 구멍으로 들어가자 등에 두른 손이 무의식중에 힘을 주고, 모은 두 다리도 뒤에서 갑자기 팽팽해져 자지가 더욱 깊이 파고든다.",
    ]);
    await kitaru.say_and_wait("으읏! 뜨거워요……❤️");
    await you.print_and_wait([
      "고개를 옆으로 돌려도 소용없다. 귓가에서 새어 나오는 ",
      y_call_k,
      "의 귀여운 숨소리를 듣기만 해도, 뜨거운 자지가 주는 갑작스러운 쾌감에 눈이 뒤집힌 밤색 머리 우마무스메의 모습이 선명하게 떠오른다.",
    ]);
    await kitaru.say_and_wait("……하아앙❤️");
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async doggy_style(kitaru, you, callname) {
    await kitaru.say_and_wait(["……이렇게 엎드리면 되나요?"]);
    await kitaru.print_and_wait([
      callname,
      "의 지시대로 강아지처럼 바닥에 엎드려요.",
    ]);
    await kitaru.print_and_wait([
      "음…… 따로 연습한 기억은 없는데, 신비한 계시를 받은 것처럼 둥근 엉덩이를 알맞은 높이로 들고 젖은 꼬리를 옆으로 치워, 아래의 굶주린 구멍을 드러내는 법까지 알겠어요.",
    ]);
    await kitaru.print_and_wait([callname, "의 얼굴이 보이지 않아요."]);
    await kitaru.print_and_wait(["그런데도…… 읏…… 흥분돼요."]);
    await kitaru.say_and_wait("으아……");
    await kitaru.print_and_wait([
      "자지가 단숨에 깊이 들어오자, 아래가 팽팽하게 차오르는 충만감이 신경을 타고 뇌로 전해져요. 입가에는 행복에 녹아내리는 미소가 걸려요.",
    ]);
    await kitaru.print_and_wait(["이, 이제 완전히 강아지네요."]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async sitting(kitaru, you, callname, y_call_k) {
    await you.print_and_wait([
      y_call_k,
      "의 엉덩이 살이 허벅지에 얹히며 솜사탕 같은 감촉을 전한다.",
    ]);
    await you.print_and_wait([
      "가슴의 두 흰 토끼도 ",
      callname,
      "의 왕복 운동에 맞춰 뛰어오르고, 단단한 유두도 마찬가지다.",
    ]);
    await you.print_and_wait([
      "그뿐만이 아니다. 이 체위의 장점은 별빛 눈동자가 하트로 바뀌어 가는 모습까지 똑똑히 볼 수 있다는 것이다.",
    ]);
    await kitaru.say_and_wait(["크하……", callname, ' ❤️']);
    await you.print_and_wait([
      "아랫배에 자지의 윤곽이 선명하게 드러난 ",
      y_call_k,
      "이(가) 조금 멍하고 귀여운 표정을 짓는다.",
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async hug_sitting(kitaru, you, callname) {
    await kitaru.print_and_wait([
      "움직임에 맞춰 천천히 내려앉자, 충혈된 귀두가 엉덩이 사이로 들어와 살을 벌리고……",
    ]);
    await kitaru.say_and_wait(["하아❤️ 아아~"]);
    await kitaru.print_and_wait([
      "자지는 예고도 없이 치솟아, 발정으로 젖은 구멍을 단번에 뚫고 지나갈 듯해요.",
    ]);
    await kitaru.say_and_wait("읏…… 으❤️…… 하아…… 하아……❤️");
    await kitaru.print_and_wait([
      "자포자기한 듯 고개를 뒤에 있는 ",
      callname,
      "의 가슴에 기대고, 뒤에서 움직이는 허리에 몸을 맞춰요.",
    ]);
    await kitaru.print_and_wait([
      "그래도 이 자세라면 제 엉망인 얼굴을 ",
      callname,
      "에게 들킬 걱정은……",
    ]);
    await kitaru.print_and_wait([
      "입에서 새어 나오는 음란한 소리, 쾌감으로 팽팽해진 귀, 트레이너의 허리에 솔직하게 휘감긴 꼬리.",
    ]);
    await kitaru.print_and_wait([
      "뒤에 있는 사람이 아무리 둔해도 제가 지금 어떤 꼴인지는 알겠죠.",
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async standing(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await you.print_and_wait([
        y_call_k,
        "의 오른쪽 발목을 잡고 다리를 들어 올리자 곧바로 균형을 잃고, 가슴의 묵직한 덩어리가 흔들린다.",
      ]);
      await kitaru.say_and_wait(["우와…… 이 자세로 하는 건가요?"]);
      await you.print_and_wait([
        "카구라를 추며 단련한 덕분에 간신히 한쪽 다리로 균형을 잡은 ",
        y_call_k,
        "이(가) ",
        callname,
        "의 곧게 선 사타구니를 바라본다.",
      ]);
      await kitaru.print_and_wait(["자, 잠깐…… 기다려, 앗❤️!"]);
      await you.print_and_wait([
        "우마무스메 특유의 유연성 덕분에 ",
        callname,
        "은(는) 모은 허벅지를 구멍 옆까지 손쉽게 밀어 올렸다. 이어 자지가 질척거리며 ",
        y_call_k,
        "의 질척한 구멍 속으로 들어갔다.",
      ]);
      await you.print_and_wait([
        "찰박거리는 작고 음란한 물소리와 함께 ",
        callname,
        "은(는) ",
        y_call_k,
        "에게 한쪽 다리로 균형을 잡고 춤추는 기술을 훈련시키기 시작했다.",
      ]);
    } else if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait(["하아~ 으하~❤️"]);
      await you.print_and_wait([
        "눈의 초점이 풀린 ",
        y_call_k,
        "이(가) ",
        callname,
        "의 목에 팔을 두른다. 밤색 두 귀는 머리 위에서 말려 있고, 팔에 얹힌 다리도 떨린다.",
      ]);
      await you.print_and_wait([
        "이 체위에서는 자지가 더 깊이 닿는다. 구멍은 용서를 비는 듯 자지에 입 맞추고, 왕복할 때마다 어깨에 고개를 기댄 ",
        y_call_k,
        "이(가) 박자에 맞춰 귓가에 부드러운 소리를 흘린다.",
      ]);
      await kitaru.say_and_wait("빠…… 빨라요❤ 운명의 사람…… 이렇게 빠르면❤");
      await you.print_and_wait([
        "조금 당황한 표정의 ",
        y_call_k,
        "이(가) 오히려 ",
        callname,
        "의 가학심을 부추긴다. 엉덩이를 받쳐 용서를 비는 우마무스메를 조금 들어 올리고 다시 허리를 밀어 넣어, 가장 깊은 곳에 겹친 질벽을 헤치고 무녀의 신성한 자궁 입구에 닿아 문지르며 돌린다.",
      ]);
      await kitaru.say_and_wait("가요~ 가 버려요~❤️");
    } else {
      await you.print_and_wait([
        "키 차이 덕분에 ",
        callname,
        "에게 다리를 받쳐진 채 박히는 ",
        y_call_k,
        "은(는) 발끝만 간신히 바닥에 닿는다.",
      ]);
      await kitaru.say_and_wait(["아, 안아 주세요❤️."]);
      await you.print_and_wait([
        "부탁을 받고 ",
        y_call_k,
        "의 허리를 꽉 끌어안아 힘껏 밀어 넣는다. 가장 깊은 곳에 닿을 때마다 ",
        y_call_k,
        "은(는) 아랫배에 전해지는 충격에 요염하게 신음한다.",
      ]);
      await kitaru.say_and_wait("으앗…… 하아아앗……");
      await you.print_and_wait([
        "평소 활기가 넘치던 귀여운 얼굴은 지금 음란함으로 가득하다.",
      ]);
      await you.print_and_wait([
        callname,
        "의 팔에 얹힌 다리는 쉼 없이 떨리고, 끈적한 애액이 결합한 곳에서 끊임없이 떨어진다.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async hug_standing(kitaru, you, callname, y_call_k, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        "이렇게 어려운 자세가 된 채로, ",
        callname,
        "은(는) 다음에 무엇을 하실까요.",
      ]);
      await kitaru.print_and_wait([
        "민감한 귀 끝? 들린 엉덩이? 저조차 음란하다고 생각하는 가슴? 아니면……",
      ]);
      await kitaru.print_and_wait([
        "다리에 힘이 풀려 당장이라도 쓰러질 것 같은 지금, 뒤에 있는 운명의 사람이 무엇을 하실지는 도무지 점칠 수 없어요……",
      ]);
      await kitaru.say_and_wait(["히이이── 야앗❤️!"]);
      await kitaru.print_and_wait([
        callname,
        "의 뜨거운 자지가 질척거리며 제 구멍에 뿌리까지 들어왔어요.",
      ]);
      await kitaru.print_and_wait([
        "용서를 비는 소리조차 나오지 않아요. 현실을 받아들인 몸은 본능적으로 허리를 굽혀 엉덩이를 더욱 ",
        callname,
        "쪽으로 내밀어요.",
      ]);
    } else if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait(["히이이── 야앗❤️!"]);
      await you.print_and_wait([
        "담당의 두 팔을 붙잡고 쉬지 않고 허리를 움직인다. 왕복할 때마다 흔들리는 허리와 복숭아 같은 엉덩이 살이 격렬하게 부딪친다.",
      ]);
      await you.print_and_wait([
        "뛰어난 막판 스퍼트를 낼 수 있는 탄탄한 다리도 서 있지 못할 만큼 경련하고, 부드러운 열 발가락도 오므라든다. 자지가 빠져나올 때마다 애액이 격렬하게 맞닿는 사이로 음란한 은실을 늘어뜨린다.",
      ]);
      await kitaru.say_and_wait("읏…… 으하……❤️");
      await you.print_and_wait([
        "아쉽게도……",
        y_call_k,
        "의 얼굴은 보이지 않는다. 하지만 입에서 새어 나오는 소리만 들어도 절정까지 한 걸음 남았다는 것을 알 수 있다.",
      ]);
    } else {
      await kitaru.print_and_wait([
        "기…… 깊어요, 몸속에……",
        callname,
        "의 감촉이…… 대단해요.",
      ]);
      await kitaru.print_and_wait([
        "살짝 말린 귀 안으로, 젖은 액체가 허리와 엉덩이의 느린 부딪침에 찰박이는 소리가 끊임없이 들어와요.",
      ]);
      await kitaru.print_and_wait([
        "유린당한 아랫배에서 안심되는 충만감이 전해져요.",
      ]);
      await kitaru.print_and_wait(["조금 빨라도 괜찮아요……"]);
      await kitaru.print_and_wait([
        "그래서 운명의 사람의 허리에 감긴 꼬리에 조금 힘을 줬어요.",
      ]);
      await kitaru.say_and_wait("으엣?!!❤️ 오오……!❤️");
      await kitaru.print_and_wait([
        "쾌감이 둑 터진 듯 머릿속으로 밀려들어, 멈추라고 외치려 해도 소리가 나오지 않아요. 자업자득인 저는 뒤에 있는 사람의 품에서 격렬하게 박힐 수밖에 없어요.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async suspended_congress(kitaru, you, callname, y_call_k) {
    await kitaru.say_and_wait(["으냐앗!"]);
    await you.print_and_wait([
      "아직 환상에 젖어 있던, 저릿해진 몸을 ",
      callname,
      "이(가) 단숨에 안아 올린다. 갑자기 균형이 무너지자 앞으로 ",
      callname,
      "의 몸통을 끌어안고, 윤기 나는 살집 있는 두 다리도 자연스럽게 ",
      callname,
      "의 허리를 감아 잠갔다.",
    ]);
    await kitaru.say_and_wait(["으오오오❤️!"]);
    await you.print_and_wait([
      "중력을 이용해 담당의 몸을 흔들며, 단단한 자지를 한 번에 젖은 구멍에 뿌리까지 묻고 자궁 입구에 세게 부딪친다. 골과 자지가 빈틈없이 밀착하고, ",
      y_call_k,
      "의 아랫배에는 얕게 솟은 윤곽이 보인다.",
    ]);
    await you.print_and_wait([
      "자지가 빠질 것 같을 때마다 ",
      callname,
      "의 허리를 감싼 두 다리가 아쉬운 듯 조금 펴졌다가, 다음번 격렬한 삽입에 다시 원래대로 감긴다.",
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async hug_suspended_congress(kitaru, you, callname) {
    await kitaru.print_and_wait([
      callname,
      "에게 벌려진 채 받쳐진 두 다리와, 몹시 어색한 자세로 그의 목에 두른 두 팔.",
    ]);
    await kitaru.print_and_wait([
      '이건…… 마치 아이 기저귀를 갈아주는 것처럼, 다음 순간에도 균형을 잃고 떨어질 것 같은, 부끄러운 자세……',
    ]);
    await kitaru.say_and_wait(["질척──❤️"]);
    await kitaru.print_and_wait([
      "자지가 들어오는 순간, 날아갈 듯 몸을 젖혀요. 하지만 중력 때문에 휘청거리며 ",
      callname,
      "의 자지를 받침점으로 삼은 허공의 의자에 다시 내려앉아요.",
    ]);
    await kitaru.print_and_wait(["하아❤️…… 하아❤️ 이렇게 되니."]);
    await kitaru.print_and_wait([
      callname,
      "의 표정은 보이지 않아요. 하지만 무중력감과 쾌감이 함께 밀려오는 가운데, 몸은 그 대단한 자지의 모양을 이미 똑똑히 기억하고 있어요.",
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async ask_cowgirl(kitaru, you, callname, y_call_k) {
    await kitaru.say_and_wait(["제가 직접 하는 건가요?"]);
    await kitaru.say_and_wait(["읏……"]);
    await kitaru.print_and_wait([
      callname,
      "이(가) 위로 솟은 늠름한 물건을 보기만 해도 얼굴이 붉어지고 숨이 빨라져요.",
    ]);
    await kitaru.print_and_wait(["곧 제가 이 위에 올라탄다고 생각하면……"]);
    await you.say_and_wait([y_call_k, '？']);
    await kitaru.say_and_wait(["쥬르── 음?"]);
    await kitaru.print_and_wait([
      callname,
      "에게 재촉받고서야 제 입가에서 침이 흐르고 있다는 것을 깨달아요.",
    ]);
    await kitaru.print_and_wait([
      "제가 이렇게 음란한 줄은 몰랐어요.",
    ]);
    await kitaru.print_and_wait([
      "일 초도 기다리지 못하고 떨리는 허리가 쿵 하고 내려앉아요. 아래에 있는 ",
      callname,
      "을(를) 미소 지으며 내려다보고, 눈치껏 허리로 제례의 동작을 해요. 미끈거리는 내벽이 자지를 안내해 구멍 구석구석을 탐색하게 해요.",
    ]);
    await kitaru.print_and_wait([
      "그러는 김에 기억력 좋은 제 구멍도 자지의 모양을 다시 철저히 복습해요.",
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async ask_stimulate_glans_by_virgin(kitaru, you, callname) {
    await kitaru.print_and_wait(["몸속의 자지는 아직 이렇게 단단한데……"]);
    await kitaru.print_and_wait([
      callname,
      "은(는) 짓궂게 웃으며 멈추고 제 허벅지를 두드렸어요.",
    ]);
    await kitaru.print_and_wait([
      "으, 트레이너님은 그렇게 저를 괴롭히고 싶으신가요?",
    ]);
    await kitaru.print_and_wait([
      "화를 내며 빼 버려서…… 몸속의 말썽꾸러기를 조금 진정시키는 건 어떨까요?",
    ]);
    await you.say_and_wait(["질척질척~"]);
    await kitaru.print_and_wait([
      "허리가…… 제 허리가 벌써 흔들리고 있나요? 하…… 하아……",
    ]);
    await kitaru.print_and_wait(["원해요……"]);
    await kitaru.print_and_wait([
      "힘 빠진 근육을 재촉해 움직이며 ",
      callname,
      "의 자지에 봉사하게 해요. 화가 난다고 빼 버리는 건 절대로, 절대로 대흉이니까요!",
    ]);
    await kitaru.print_and_wait("하얀 엉덩이가 젖은 꼬리의 반주에 맞춰 춤춘다.");
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   */
  async stimulate_g_spot(kitaru, you, y_call_k) {
    await you.print_and_wait([
      "허리를 더 밀어 올려 사타구니의 자지를 구멍 깊이 문지른다. 귀두가 조금 까슬한 부드러운 살을 스칠 때마다 ",
      y_call_k,
      "이(가) 웅얼거리며 떨린다.",
    ]);
    await kitaru.say_and_wait(["크앗❤️~ 아아"]);
    await you.print_and_wait([
      "우마무스메의 몸속을 휘젓는 자지 요괴는 이렇게 ",
      kitaru.get_colored_name(),
      "라는 무녀의 약점을 찾아냈다.",
    ]);
    await kitaru.say_and_wait(["히아아아❤️~"]);
    await you.print_and_wait([
      "멈추지 않고 경련하는, 음란한 물에 번들거리는 풍만한 두 다리. 쾌감에 팽팽해진 꼬리와 두 귀. 눈동자의 별마저 분홍빛으로 빛나는 하트에 밀려난다.",
    ]);
    await you.print_and_wait([
      "말할 것도 없다. 눈앞의 현인신이라 불러도 좋을 상대는 이제 침을 흘리는 발정 난 암말로 전락했다.",
    ]);
    await you.print_and_wait([
      "자지가 ",
      y_call_k,
      "의 부드러운 자궁에 닿을 때마다, 향기로운 혀를 반쯤 내민 상대는 이쪽의 움직임에 맞춰 엉덩이를 들며 큰 소리로 신음한다.",
    ]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async ask_fuck(kitaru, you, callname) {
    await kitaru.say_and_wait(["원해요……"]);
    await kitaru.say_and_wait(["앗!"]);
    await kitaru.print_and_wait([
      "곧바로 입을 막았어요. 신사의 무녀인 제가 이런 말을 입에 올렸다니 믿을 수 없어요. 마치…… 다른 무언가에 씐 것 같아요.",
    ]);
    await kitaru.print_and_wait([
      "정신을 차려 보니 풍만하고 부드러운 두 다리는 저절로 벌어져 있고, 끈적한 구멍의 꽃잎 사이에는 짙은 은실이 걸린 채 입구가 쓸쓸한 듯 열렸다 닫혀요.",
    ]);
    await kitaru.print_and_wait([
      "음…… 제 몸이 정말 야해요. 하지만 대단한 자지를 가진 ",
      callname,
      "이라면 이해해 주시겠죠……",
    ]);
    await kitaru.say_and_wait(["넣어 주세요……"]);
    await kitaru.print_and_wait([
      "오른손 검지와 중지로 번들거리는 음순을 조금 힘주어 벌려, 안에서 애타는 분홍빛 내벽을 ",
      callname,
      "에게 보여요. 삽입을 애원하는 동작의 마지막 조각을 채워요.",
    ]);
    await kitaru.say_and_wait(["오늘의 대길을 위해…… 넣어 주세요."]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async cowgirl(kitaru, you, callname) {
    await kitaru.print_and_wait([
      "두 손을 ",
      callname,
      "의 가슴에 얹고 위에서 그의 얼굴을 바라봐요.",
    ]);
    await kitaru.print_and_wait(["제가 우위에 선 기분이에요."]);
    await kitaru.print_and_wait([
      "그럼 늘 저를 괴롭히는 이 사람에게, 어떻게 순순히 용서를 빌게 할까요.",
    ]);
    await kitaru.print_and_wait([
      "좌우로? 위아래로? 원을 그리듯 허리를 돌릴까요? 아니면……",
    ]);
    await kitaru.say_and_wait(["히얏!~❤️"]);
    await kitaru.print_and_wait([
      "사람이 생각하는 중에 갑자기 움직이시면 반칙이에요!",
    ]);
    await kitaru.print_and_wait([
      "움직이지 마세요! 읏❤️! 그런데도……❤️ 히얏~❤️ 제가 위인데❤️!",
    ]);
    await kitaru.say_and_wait(["으읏~ 대단해요❤️!"]);
    await kitaru.print_and_wait(["흐트러진 신음이 열린 입에서 끊임없이 새어 나와요."]);
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async stimulate_glans_by_virgin(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait([
        "늘 ",
        callname,
        "에게 일방적으로 애써 달라고 하는 건 조금 미안한 것 같아요.",
      ]);
      await kitaru.print_and_wait([
        "현역 우마무스메와 트레이너에게는 배덕적인 이 행위에서도, 두 사람이 발을 맞춰야 한다는 원칙은 같을 테니까요.",
      ]);
      await kitaru.say_and_wait(["하아……❤️"]);
      await kitaru.print_and_wait([
        "충혈되어 단단해진 자지가 다음에 들어왔을 때 깊게 숨을 들이쉬고, 찰싹 달라붙는 구멍으로 자궁 입구에 닿은 충혈된 귀두를 쪽 빨아들여요.",
      ]);
      await kitaru.say_and_wait(["으아아아아……"]);
      await kitaru.print_and_wait([
        "뜨거운 자지를 조이는 구멍 속에서 순식간에 정신을 잃을 것 같은 쾌감이 밀려와요.",
      ]);
      await kitaru.print_and_wait([
        "자지가 더 세게 튀어 올랐어요. 그러니까 저도 도움이 된 거겠죠, ",
        callname,
        '。',
      ]);
    } else if (era.get(`tcvar:${you.id}:接近高潮`)) {
      await kitaru.print_and_wait(["안 돼요, 안 돼요, 안 돼요……"]);
      await kitaru.print_and_wait([
        callname,
        "의 박자에 맞추려다가, 한심하게도 안쪽 살이 얼마나 민감한지 잊고 있었어요.",
      ]);
      await kitaru.print_and_wait([
        "조임이 느슨해진 걸 알아챘는지, 자궁 입구 앞에 닿아 있던 귀두가 앞쪽의 부드러운 살을 노리고 무례하게 돌진하기 시작했어요.",
      ]);
      await kitaru.print_and_wait([
        "방금까지는 가끔 자지에 반격할 수 있었던 내벽이 굵고 뜨거운 자지에 완전히 짓눌리고, 커다란 귀두가 제 자궁 입구에 세게 부딪쳐요.",
      ]);
      await kitaru.print_and_wait(["가요…… 가 버려요……"]);
    } else {
      await kitaru.print_and_wait(["심호흡…… 심호흡……"]);
      await kitaru.print_and_wait([
        "온 힘을 다해 맞춰 드리고 싶은데, 동작을 한 번이라도 끝까지 해냈는지 모르겠어요. 몸속의 자지가 조금만 움직여도 쾌감으로 가득한 머릿속이 새하얘지고, 입에서는 히야히야 하는 음란한 소리가 나와요.",
      ]);
      await kitaru.print_and_wait([
        "그래도 질척질척한 음란한 소리를 들으면, 미끈거리는 구멍은 제대로 ",
        callname,
        "의 자지를 모시고 있는 것 같아요.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_stimulate_g_spot(kitaru, you, callname, is_first) {
    if (is_first) {
      await kitaru.print_and_wait(
        "자지가 구멍 속의 성감대를 스칠 때마다 중독될 것 같은 쾌감이 찾아오는 걸 알겠어요.",
      );
      await kitaru.say_and_wait("그러니까……");
      await kitaru.say_and_wait("부탁이에요……");
      await kitaru.print_and_wait(
        `${kitaru.uma_sex_title}로서 이렇게 꼴사나운 모습을……`,
      );
      await kitaru.print_and_wait([
        "하지만 참을 수 없어요── 침을 흘리며 ",
        callname,
        "의 귓가에서 쾌감을 애원해요.",
      ]);
      await kitaru.print_and_wait("왜냐하면 원하니까요──");
      await kitaru.print_and_wait(
        "자궁 속을 대단한 자지로, 아주 거칠게, 힘껏……",
      );
      await kitaru.print_and_wait("가장 깊은 곳까지 쪽 박혀서❤️");
      await kitaru.print_and_wait("몸이 움찔 말리고──");
      await kitaru.print_and_wait("세상에서 가장 기분 좋은 구멍이 되고 싶어서──");
      await kitaru.print_and_wait(
        `그러니까 부탁이에요…… 그 뒤에 시라오키님께 꾸중을 들어도 이제 괜찮아요.`,
      );
    } else if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait("하아❤️ 아아~");
      await kitaru.print_and_wait([
        kitaru.get_colored_name(),
        "의 몸이 뻔뻔하게 ",
        callname,
        "의 앞에서 경련하듯 격렬하게 뒤틀리며, 젖은 몸에 맺힌 따뜻하고 반짝이는 물방울을 사방으로 흩뿌린다.",
      ]);
      await kitaru.print_and_wait(
        "평소 활기 넘치던 얼굴에는 이제 욕정에 완전히 지배된 황홀한 표정만 남았다. 분홍빛 입술도 놀랄 만큼 O자로 벌어지고, 끊어지는 고백이 입에서 쉬지 않고 쏟아진다.",
      );
      if (era.get('love:56') > 75) {
        await kitaru.say_and_wait([
          "좋아해요, ",
          callname,
          "……가장 좋아해요, ",
          you.get_colored_actual_name(),
          '❤️',
        ]);
      } else {
        await kitaru.say_and_wait(["자지…… 좋아요…… 망가져, 망가져요❤️"]);
      }
      await kitaru.print_and_wait([
        "시라오키님을 향한 부끄러움이 아직 조금은 남아 있을지도 모른다. 하지만 그 부끄러움은 곧 연료가 되어, 몸을 더욱 음란하게 비틀며 자지에 맞추게 한다.",
      ]);
      await kitaru.say_and_wait(
        ["더 거칠어지셨네요, ", callname, '。'],
        true,
      );
      await kitaru.say_and_wait(
        "점술가이자 무녀라는 두 겹의 신비로운 신분을 가진 저를, 발정 난 암말로 전락시키는 샘물처럼 겹쳐 오는 쾌감.",
        true,
      );
      await kitaru.say_and_wait(
        "아니요…… 간단한 예언이라면 아직 할 수 있을지도 몰라요. 제가 곧 절정에 이른다는 사실 같은 건요.",
        true,
      );
      await kitaru.say_and_wait("가요…… 곧…… 가 버려요……");
      await kitaru.say_and_wait("으으으응❤️❤️❤️……");
    } else {
      await kitaru.say_and_wait("느리, 아하❤️, 천천히 해 주세요❤️~!");
      await kitaru.print_and_wait(
        "그렇게 애원해도 자지는 짧고 정확하게 약점을 계속 공략한다. 흐려진 눈동자는 성감대의 쾌감으로 주황빛을 거의 밀어낸 분홍빛에 잠긴다.",
      );
      await kitaru.print_and_wait([
        callname,
        "의 모양에 길들여진 구멍은 보답하듯 부드럽게 수축하며, 자신의 몸에 끝없는 쾌감을 주는 뜨거운 기둥을 기쁘게 한다.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async common_continue_fucking(kitaru, you, callname) {
    if (era.get('tcvar:56:接近高潮')) {
      await kitaru.say_and_wait("하아❤️ 아아~");
      await kitaru.print_and_wait([
        kitaru.get_colored_name(),
        "의 몸이 뻔뻔하게 ",
        callname,
        "의 앞에서 경련하듯 격렬하게 뒤틀리며, 젖은 몸에 맺힌 따뜻하고 반짝이는 물방울을 사방으로 흩뿌린다.",
      ]);
      await kitaru.print_and_wait(
        "평소 활기 넘치던 얼굴에는 이제 욕정에 완전히 지배된 황홀한 표정만 남았다. 분홍빛 입술도 놀랄 만큼 O자로 벌어지고, 끊어지는 고백이 입에서 쉬지 않고 쏟아진다.",
      );
      if (era.get('love:56') > 75) {
        await kitaru.say_and_wait([
          "좋아해요, ",
          callname,
          "……가장 좋아해요, ",
          you.get_colored_actual_name(),
          '❤️',
        ]);
      } else {
        await kitaru.say_and_wait(["자지…… 좋아요…… 망가져, 망가져요❤️"]);
      }
      await kitaru.print_and_wait([
        "시라오키님을 향한 부끄러움이 아직 조금은 남아 있을지도 모른다. 하지만 그 부끄러움은 곧 연료가 되어, 몸을 더욱 음란하게 비틀며 자지에 맞추게 한다.",
      ]);
      await kitaru.say_and_wait(
        ["더 거칠어지셨네요, ", callname, '。'],
        true,
      );
      await kitaru.say_and_wait(
        "점술가이자 무녀라는 두 겹의 신비로운 신분을 가진 저를, 발정 난 암말로 전락시키는 샘물처럼 겹쳐 오는 쾌감.",
        true,
      );
      await kitaru.say_and_wait(
        "아니요…… 간단한 예언이라면 아직 할 수 있을지도 몰라요. 제가 곧 절정에 이른다는 사실 같은 건요.",
        true,
      );
      await kitaru.say_and_wait("가요…… 곧…… 가 버려요……");
      await kitaru.say_and_wait("으으으응❤️❤️❤️……");
    } else {
      await kitaru.print_and_wait([
        "조금 마조인 저는 진작부터 트레이너님께 이렇게 지배당하기를 바랐는지도 몰라요.",
      ]);
      await kitaru.say_and_wait(["아하……❤️ 하후하……"]);
      await kitaru.print_and_wait([
        "꽉 조인 내벽이 다시 가차 없이 벌어지고, 뒤따르는 쾌감에 평소 복잡한 기도문도 외우던 머릿속이 새하얘져요.",
      ]);
      await kitaru.say_and_wait(["하…… 하…… 하아❤️"]);
      await kitaru.print_and_wait([
        "무녀의 청아하고 귀여운 얼굴이 자지님의 공세 아래 다시 아양 어린 미소를 지어요.",
      ]);
      await kitaru.say_and_wait(["자지……님?"], true);
      await kitaru.say_and_wait(
        ["이런 호칭이라니…… 시라오키님께서 분명 화내시겠죠?"],
        true,
      );
      await kitaru.print_and_wait([
        "그러면서도 발정 난 밤색 머리의 우마무스메 무녀는, 음란한 냄새가 나는 축축하고 뜨거운 몸을 ",
        callname,
        "에게 더욱 밀착시킨다.",
      ]);
      await kitaru.say_and_wait(["오나홀처럼 쓰셔도 괜찮아요……"]);
      await kitaru.print_and_wait([
        "뻔뻔하게 그렇게 말한다. 언제 내릴지 모를 천벌보다, 지금 머리를 멍하게 만드는 쾌감이 역시 더 소중하니까.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_insult(kitaru, you, callname, is_first) {
    if (is_first) {
      await you.say_and_wait("욕을 듣고 싶다고?");
      await you.print_and_wait([
        "청아한 ",
        kitaru.uma_sex_title,
        " 무녀에게서 그런 묘한 부탁을 받았다.",
      ]);
      await kitaru.say_and_wait([
        "저, 그게……",
        callname,
        "에게 거칠게 다뤄지는 느낌이 정말 좋아요……",
      ]);
      await you.print_and_wait([
        "담당은 역시 심한 마조인 모양이다. 그래서 음란한 무녀, 변기, 오나홀 점술가 같은 아프지도 않은 모욕을 눈앞의 밤색 머리 ",
        kitaru.uma_sex_title,
        "에게 퍼붓는다.",
      ]);
      await you.print_and_wait([
        kitaru.get_colored_actual_name(),
        "은(는) 꽤 효과를 보는 모습이다. 나중에는 더 심한 표현을 써 볼까.",
      ]);
    } else {
      await kitaru.print_and_wait([
        "귓가에서 점점 더 심한 욕설이 들려요. 하지만 더 무서운 건 점점 민감해져서 이런 행동에 쾌락을 느끼는 저 자신이에요.",
      ]);
      await kitaru.say_and_wait(["이 느낌을 멈추고 싶지, 멈추고 싶지 않아요……"], true);
      await kitaru.say_and_wait(
        [
          "하아, 저는 정말 구제할 길 없는 심한 마조인 ",
          kitaru.uma_sex_title,
          "이네요……",
        ],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} y_call_k プレイヤーのマチカネフクキタルへの呼び方
   * @param {boolean} is_first 連続行動の初回かどうか
   */
  async ask_hit_anal(kitaru, you, y_call_k, is_first) {
    if (is_first) {
      await you.say_and_wait(["그렇게 괴롭힘당하고 싶다면……"]);
      await you.print_and_wait([
        "손바닥으로 ",
        y_call_k,
        "의 둥근 엉덩이를 가볍게 두 번 쓰다듬자 ",
        kitaru.sex,
        "의 몸이 품 안에서 작게 떨린다. 두려운 건지 흥분한 건지는 알 수 없다.",
      ]);
      await you.print_and_wait(["짝!"]);
      await you.print_and_wait([
        "점점 뜨거워진 엉덩이가 아직 얼얼함이 가시지 않은 ",
        you.get_colored_name(),
        "의 손바닥에 가볍게 비벼진다. 좋은 모양이다.",
      ]);
    } else {
      await kitaru.say_and_wait(["아파요…… 그래도 좋아요……"], true);
      await kitaru.say_and_wait(["짝짝, 제 엉덩이를 때리시네요."], true);
      await kitaru.say_and_wait(["가끔은 가볍게 몇 번 주무르시기도 해요."], true);
      await kitaru.say_and_wait(
        [
          "통증과 쾌락을 구분할 수 없게 되어 가는 제게는, 둘 다 최고의 상이에요……",
        ],
        true,
      );
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async stimulate_sleep_glans_by_virgin(kitaru, you, callname) {
    await kitaru.print_and_wait(["하아…… 하……"]);
    await kitaru.print_and_wait([
      "어떻게든 익숙해질게요. 왜냐하면 ",
      callname,
      "의 자지는 아직 잠들어 있는 것 같으니까요.",
    ]);
    await kitaru.print_and_wait(["이럴 때는 제가 도와드려야죠."]);
    await kitaru.print_and_wait([
      "심호흡을 하고 아랫배에 조금 힘을 주어, 꿈틀거리는 구멍으로 ",
      callname,
      "의 자지를 깨워요.",
    ]);
    await kitaru.say_and_wait(["읏!!! 히얏!!!"]);
    await kitaru.print_and_wait([
      "깨어난 괴물 같은 자지는, 아직 ",
      callname,
      "의 박자를 따라갈 수 있었던 제게 정신을 잃을 것 같은 쾌감을 안겨 줬어요.",
    ]);
  },
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   * @param {PrintedSpan} callname
   */
  async ero_start(kitaru, you, callname) {
    const relation = era.get('relation:56:0');
    if (era.get('status:56:马跳Z') || era.get('status:56:超马跳Z')) {
      await kitaru.say_and_wait(["몸이…… 뜨거워요……"]);
      await era.printAndWait([
        "필사적으로 자신을 억누르려는 ",
        kitaru.get_colored_name(),
        "이(가) 무릎을 끌어안고 구석에 웅크려 있다. 분홍빛 쇄골에는 발정의 붉은 기가 어려 있다.",
      ]);
      await kitaru.say_and_wait(["하아❤️~ 하❤️"]);
      await era.printAndWait([
        "벌어진 입술 사이로 향기로운 혀가 드러나고, 움직이는 코끝은 끊임없이 ",
        you.get_colored_name(),
        "의 냄새를 들이마신다.",
      ]);
      await kitaru.say_and_wait(["원해요❤️ 원해요❤️ 원해요❤️ 원해요❤️"]);
      await era.printAndWait([
        "끝내 약에 저항하지 못하게 된 ",
        kitaru.get_colored_name(),
        "이(가) 비틀거리며 일어나고, 옷이 한 벌씩 바닥으로 떨어진다.",
      ]);
      if (kitaru.sex_code - 1) {
        await era.printAndWait([
          "우윳빛 경단이 ",
          you.get_colored_name(),
          "에게 눌려 온다. 옷 너머로도 ",
          kitaru.get_colored_name(),
          "의 단단한 유두가 느껴지고, 귓가로 뜨거운 숨이 전해진다.",
        ]);
      }
      await kitaru.say_and_wait([
        "이제…… 한계예요, ",
        callname,
        ", 먹어 주세요.",
      ]);
    } else if (era.get('status:56:发情')) {
      await kitaru.say_and_wait(["할까요?"]);
      await kitaru.say_and_wait(["그런데도…… 하아❤️ 뜨거워요……"]);
      await era.printAndWait([
        "발정기로 적극적이 된 ",
        kitaru.get_colored_name(),
        "이(가) 제멋대로 땀에 젖은 옷을 벗기 시작한다.",
      ]);
      await era.printAndWait([
        "붉은 입술은 쉴 새 없이 반쯤 벌어져 하얀 안개 같은 숨을 내쉬고, 욕정을 자극하는 호르몬이 방을 채운다.",
      ]);
      await kitaru.say_and_wait(["뜨거워요……"]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 스스로 옷을 벗고, 달콤한 체액이 끊임없이 흘러 똑똑 나무 바닥에 떨어진다.",
      ]);
      await era.printAndWait([
        "그러더니 초점 없는 눈으로 ",
        you.get_colored_name(),
        "의 품에 무너져 내린다. 밤색 꼬리도 ",
        you.get_colored_name(),
        "의 허벅지에 휘감긴다.",
      ]);
      await kitaru.say_and_wait(["도와주세요……", callname, '。']);
    } else if (era.get('flag:当前位置') === location_enum.restroom) {
      if (relation < 400) {
        await kitaru.say_and_wait(["음…… 저기, ", callname, '？']);
        await era.printAndWait([
          you.get_colored_name(),
          "에게 힘껏 안긴 ",
          kitaru.get_colored_name(),
          "이(가) 작게 떨고 있다. 귀는 눈에 띄게 팔랑팔랑 흔들린다.",
        ]);
        await kitaru.say_and_wait([
          "여기서 하는 건가요…… 선도부의 ",
          kitaru.couple_title,
          "에게 들키면 어떡하죠?",
        ]);
        await kitaru.say_and_wait(["꿀꺽! 쪽❤️…… 쪽하❤️"]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          "에게 돌아온 대답은 ",
          you.get_colored_name(),
          "의 입술이었다.",
        ]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            "손도 가만히 있지 않고 담당의 치마 속으로 들어가, 두 다리 사이의 부드러운 살을 주무르며 ",
            kitaru.sex,
            "의 팬티까지 적신다.",
          ]);
        }
        await era.printAndWait([
          "욕정이 달아오른 ",
          kitaru.get_colored_name(),
          "이(가) 눈꼬리에 눈물을 매단 채 ",
          you.get_colored_name(),
          "의 품에 기대 온다.",
        ]);
        await kitaru.say_and_wait(["어서 시작해 주세요……", callname, ' ❤️']);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "와(과) 눈이 마주친 ",
          kitaru.get_colored_name(),
          "은(는) 갑자기 무언가 알아챈 듯 밤색 꼬리를 흔들던 것을 멈췄다.",
        ]);
        await kitaru.say_and_wait(["……하고 싶으신가요?"]);
        await kitaru.say_and_wait(["그 눈빛은 점을 치지 않아도 알 수 있어요!"]);
        await kitaru.say_and_wait(["음, 아직 학원 안인데 들키면……"]);
        await era.printAndWait(["쿵!"]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            "입으로는 불평하면서도 제복 치마가 바닥에 떨어지고, 이어 상의가 벗겨지는 둔탁한 소리가 났다…… 마지막으로 스포츠 브라가 풀리자 그 안에 감싸여 있던 가슴이 단숨에 튀어나왔다.",
          ]);
          await era.printAndWait([
            "분홍빛이 짙어진 풍만한 가슴 위로, 유두가 기대감에 충혈되어 서 있다.",
          ]);
        }
        await kitaru.say_and_wait(["하아❤️~ 하❤️……"]);
        await era.printAndWait([
          "두 팔을 가볍게 ",
          you.get_colored_name(),
          "의 목에 두르고, ",
          kitaru.get_colored_name(),
          "은(는) 촉촉한 별빛 눈동자로 ",
          you.get_colored_name(),
          "을(를) 바라본다.",
        ]);
        await kitaru.say_and_wait([callname, "……기분 좋게 해 주세요."]);
      }
    } else if (era.get('flag:当前位置') === location_enum.home) {
      if (relation < 400) {
        await era.printAndWait([
          you.get_colored_name(),
          "의 집에서 행운을 부르는 배치를 고민하던 ",
          kitaru.get_colored_name(),
          "에게 뒤에서 다가간다.",
        ]);
        await kitaru.say_and_wait(["야앗……"]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            "두 손을 ",
            kitaru.get_colored_name(),
            "의 옷 속에 넣어 풍만한 가슴살을 스치자, 주황빛 머리의 상대가 작은 목소리로 항의한다.",
          ]);
          await kitaru.say_and_wait(["적어도 이것부터 내려놓게 해 주세요……"]);
          await era.printAndWait([
            "가만있지 못하는 손은 더 아래로 내려가 배 너머로, 더 강한 자극을 원하는 ",
            kitaru.get_colored_name(),
            "의 자궁을 가볍게 누른다.",
          ]);
        }
        await era.printAndWait([
          "그러자 ",
          kitaru.get_colored_name(),
          "은(는) 무의식적으로 뒤로 물러나, 바지 너머로 엉덩이 골을 스스로 ",
          you.get_colored_name(),
          "의 자지에 밀착시킨다.",
        ]);
        await kitaru.say_and_wait(["……단단해요."]);
        await kitaru.say_and_wait(["지금 할까요?"]);
        await kitaru.say_and_wait([callname, "도 꽤 참고 계시죠……"]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          "의 집에서 행운을 부르는 배치를 고민하던 ",
          kitaru.get_colored_name(),
          "을(를) 뒤에서 끌어안는다.",
        ]);
        await kitaru.say_and_wait(["으후후!!!"]);
        await kitaru.say_and_wait([
          callname,
          "은(는) 제게 뭘 하실 생각인가요…… 으음~❤️ 쪽~❤️",
        ]);
        await era.printAndWait([
          "눈치챈 듯 옆으로 돌아 턱을 들고 ",
          you.get_colored_name(),
          "의 입술을 막았다.",
        ]);
        await era.printAndWait([
          "두 사람의 입술과 이와 혀가 곧바로 격렬하게 얽히고, 차마 듣고 있기 힘든 음란한 물소리가 공기를 울린다.",
        ]);
        await kitaru.say_and_wait(["으음~❤️…… 쪽하❤️~ 쪽…… 읏❤️"]);
        await era.printAndWait([
          "갑자기 ",
          kitaru.get_colored_name(),
          "이(가) ",
          you.get_colored_name(),
          "의 손을 붙잡아 ",
          you.get_colored_name(),
          "을(를) ",
          kitaru.sex,
          "의 두 다리 사이로 이끌며, 팬티까지 내렸다.",
        ]);
        if (kitaru.sex_code - 1) {
          await era.printAndWait([
            "허벅지까지 번들거리는 물자국이 있어, 흠뻑 젖은 것이 눈에 보인다.",
          ]);
        }
        await kitaru.say_and_wait(["음…… 어차피 외박 신청은 해 뒀으니까, 그러니까~❤️"]);
        await kitaru.say_and_wait(["더…… 기분 좋게 해 주세요~❤️"]);
      }
    } else if (
      era.get('love:56') >= 50 &&
      era.get('flag:当前位置') !== location_enum.home
    ) {
      await kitaru.say_and_wait([callname, ", 하는 건가요?"]);
      await era.printAndWait([
        you.get_colored_name(),
        "에게 안긴 ",
        kitaru.get_colored_name(),
        "이(가) 뺨을 붉히며 말한다. 귀가 팔랑거리며 얼굴에 닿는다.",
      ]);
      await you.say_and_wait(["싫어?"]);
      await kitaru.say_and_wait([
        "네! 그럴 리가요!!! 절대로, 절대로 ",
        you.get_colored_name(),
        "을(를) 싫어하지 않아요!",
      ]);
      await era.printAndWait([
        kitaru.sex,
        "의 얼굴을 가볍게 쓰다듬고 머리를 토닥이자 ",
        you.get_colored_name(),
        "에게 버림받을까 두려워하던 ",
        kitaru.get_colored_name(),
        "이(가) 진정했다.",
      ]);
      await you.say_and_wait(["……먹어도 돼."]);
      await era.printAndWait([
        you.get_colored_name(),
        "의 품에 무너져 내린 ",
        kitaru.get_colored_name(),
        "이(가) 촉촉한 눈으로 ",
        you.get_colored_name(),
        "을(를) 바라본다.",
      ]);
      await kitaru.say_and_wait(["네……"]);
      await kitaru.say_and_wait(['……', callname, "의 마음대로 해 주세요."]);
    }
  },
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   */
  async orgasm_standing(kitaru, you) {
    if (era.get('nowex:0:阴茎高潮') > 0 && era.get('nowex:56:膣内精液') > 0) {
      await era.printAndWait([
        kitaru.get_colored_name(),
        "은(는) 몸속에서 날뛰는 자지도 움찔거리며 발사할 준비를 한다는 것을 느낀다.",
      ]);
      await era.printAndWait([
        "눈이 뒤집힌 ",
        kitaru.get_colored_name(),
        "의 허리와 엉덩이를 꽉 붙잡고, 발정으로 내려온 자궁에 자지를 대고 정액을 쏟는다. 구멍 안의 살도 빨아들이듯 귀두를 자극한다.",
      ]);
      await kitaru.say_and_wait("~으으으으응!!!");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 평소 활기찬 얼굴은 눈이 뒤집히고 입술이 크게 벌어져, 부드럽고 향기로운 혀를 내보인다.",
      ]);
      await era.printAndWait(["짙고 하얀 정액이 결합한 곳에서 똑똑 바닥에 떨어진다."]);
    } else {
      await kitaru.print_and_wait(["크허어어어~!!!"]);
      await era.printAndWait([
        "절정에 이른 ",
        kitaru.get_colored_name(),
        "은(는) 경련하는 발끝으로 균형조차 잡지 못한다.",
      ]);
      await era.printAndWait([
        "자지를 계속 밀어 넣는 ",
        you.get_colored_name(),
        "을(를) 더욱 끌어안고, 목구멍에서 용서를 비는 듯한 흐느낌을 흘린다.",
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru
   * @param {CharaTalk} you
   */
  async orgasm_hug_standing(kitaru, you) {
    if (era.get('nowex:0:阴茎高潮') > 0 && era.get('nowex:56:膣内精液') > 0) {
      await era.printAndWait([
        "발사 직전의 자지를 완전히 빼낸 뒤, 살집 있는 엉덩이를 조금 들어 각도를 고친다.",
      ]);
      await era.printAndWait([
        "자지가 단숨에 깊이 들어가 주름진 내벽을 문지르며 ",
        kitaru.get_colored_name(),
        "의 자궁 입구에 닿아 정액을 토해 낸다.",
      ]);
      await kitaru.say_and_wait("~~으읏, 뜨거워요…… 대단……해요……");
      await era.printAndWait([
        kitaru.get_colored_name(),
        "의 부드러운 몸은 거의 ",
        you.get_colored_name(),
        "에게 활처럼 휘어지도록 당겨진다. 고개가 높이 들렸다가 이내 ",
        you.get_colored_name(),
        "의 품에 기댄다. 밀려 나온 정액이 허벅지를 타고 흐르며, 늘어진 밤색 꼬리에도 제법 묻는다.",
      ]);
    } else {
      await kitaru.print_and_wait(["야…… 야앗❤️"]);
      await era.printAndWait([
        "몸을 주체하지 못하고 젖히며 백조처럼 하얀 목을 들어, 뒤에 있는 당신의 품에 기대 온다.",
      ]);
      await era.printAndWait([
        "밀려 나온 애액이 허벅지를 타고 흐르고, 밤색 꼬리에도 축축하고 짙은 자국이 늘어난다.",
      ]);
    }
  },
  /**
   * 快楽刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {number} level 刻印の等級
   */
  async mark_pleasure(kitaru, you, level) {
    const love = era.get('love:56');
    switch (level) {
      case 1:
        if (love >= 75) {
          await kitaru.say_and_wait("야앗!!!");
          await era.printAndWait([
            kitaru.get_colored_name(),
            "은(는) 시선을 피하다가 ",
            you.get_colored_name(),
            "이(가) 계속해도 되냐고 묻자 작게 고개를 끄덕였다.",
          ]);
          await era.printAndWait(
            "움직임에 맞춰 허리를 비틀며 혼자서는 맛볼 수 없는 쾌감을 즐긴다.",
          );
        } else {
          await kitaru.say_and_wait("으응! 하아하아……");
          await era.printAndWait([
            kitaru.get_colored_name(),
            "은(는) 고개를 갸웃하고 잠시 생각했다.",
          ]);
          await kitaru.say_and_wait("어째서…… 기분이 좋아요.");
        }
        break;
      case 2:
        if (love >= 75) {
          await kitaru.say_and_wait([
            "하아아앗!!!",
            you.get_colored_actual_name(),
          ]);
          await era.printAndWait([
            "절정 속에서 ",
            you.get_colored_name(),
            "의 이름을 큰 소리로 부른다. 평소 가끔 ",
            kitaru.get_colored_name(),
            "에게서 느낄 수 있었던 무녀로서의 청아함은 ",
          ]);
          await era.printAndWait("지금은 흔적도 없다.");
        } else {
          await kitaru.say_and_wait("하아…… 빨리! 빨리!");
          await era.printAndWait([
            "격렬한 절정에 떨림을 멈추지 못하면서도, 쾌감에 지배되기 시작한 ",
            kitaru.get_colored_name(),
            "은(는) ",
            you.get_colored_name(),
            "에게 계속 덮쳐 달라고 부탁한다.",
          ]);
        }
        break;
      case 3:
        if (love >= 75 && era.get('tcvar:0:阴茎接触部位')?.owner === 56) {
          await kitaru.say_and_wait("자지…… 더 격렬하게…… 자지님!!!");
          await era.printAndWait([
            "성애의 쾌감이 조금씩 ",
            kitaru.get_colored_name(),
            "의 의식을 덮어쓴다.",
          ]);
          await era.printAndWait([
            kitaru.uma_sex_title,
            "의 입에서 쏟아지는 음란한 말이 시라오키님의 완전한 패배를 말해 준다.",
          ]);
        } else {
          await kitaru.say_and_wait("으아아앗!!!");
          await era.printAndWait([
            "쾌감에 지배당한 ",
            kitaru.get_colored_name(),
            "이(가) 어디에 있는지도 모를 신을 넋 나간 눈으로 바라본다.",
          ]);
          await era.printAndWait([
            "입안에서 웅얼거리는 애원을 들으면, 몸이 완전히 굴복한 ",
            kitaru.sex,
            "이(가) 기도하는 대상은 이미 이 쾌감을 안겨 준 ",
            you.get_colored_name(),
            "으로 바뀌어 있다.",
          ]);
        }
    }
  },
  /**
   * 同心刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {number} level 刻印の等級
   */
  async mark_meek(kitaru, you, level) {
    switch (level) {
      case 1:
        await kitaru.say_and_wait("히앗~!");
        await era.printAndWait([
          kitaru.get_colored_name(),
          "은(는) ",
          you.get_colored_name(),
          "에게 기대어, 하는 대로 몸을 맡겼다.",
        ]);
        await era.printAndWait(
          "봄빛이 어린 얼굴로 부드러운 몸이 움찔움찔 튄다.",
        );
        break;
      case 2:
        era.println();
        await kitaru.say_and_wait("야아!!!");
        await kitaru.say_and_wait(
          "아, 아니에요, 괜찮아요~ 운명의 사람, 계속해 주세요!",
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          "의 물기 어린 주황빛 눈동자가 ",
          you.get_colored_name(),
          "을(를) 바라본다.",
        ]);
        await era.printAndWait([
          "가끔 ",
          kitaru.sex,
          "의 민감한 곳에 닿으면 ",
          kitaru.sex,
          "은(는) 그에 맞춰 귀여운 소리를 낸다.",
        ]);
        break;
      case 3:
        await era.printAndWait([
          "눈을 감은 ",
          kitaru.get_colored_name(),
          "이(가) 팔을 ",
          you.get_colored_name(),
          "의 목에 두르고 살짝 발돋움해, 입술을 ",
          you.get_colored_name(),
          "의 귀에 댄다.",
        ]);
        await kitaru.say_and_wait("주인님……");
        await kitaru.say_and_wait("에헤헤, 운명의 사람, 이 호칭이 좋으신가요?");
        await kitaru.say_and_wait(
          "그럼 이제 주인님께서 후쿠를 망가뜨리셔도 괜찮아요!",
        );
    }
  },
  /**
   * 苦痛刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {number} level 刻印の等級
   */
  async mark_pain(kitaru, you, level) {
    const love = era.get('love:56');
    switch (level) {
      case 1:
        if (love >= 75) {
          await kitaru.say_and_wait("하앗! 아파요!!!");
          await kitaru.say_and_wait("괜찮아요……");
          await kitaru.say_and_wait("그냥 조금만 더 부드럽게 해 주셨으면 할 뿐이에요……");
        } else {
          await kitaru.say_and_wait("으……");
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 표정이 고통으로 일그러진다. 그런데도 ",
            kitaru.sex,
            "은(는) 이를 악물고, 아주 작은 비명만 흘린다.",
          ]);
        }
        break;
      case 2:
        if (love >= 75) {
          era.println();
          await kitaru.say_and_wait("히앗~!?");
          await kitaru.say_and_wait(
            "제가 조금 마조이기는 하지만…… 이건 아무리 그래도 너무 심하지 않나요!?",
          );
        } else {
          await kitaru.say_and_wait("히앗~!?");
          await kitaru.say_and_wait("시라오키님…… 도와주세요……");
        }
        break;
      case 3:
        if (love >= 75) {
          await kitaru.say_and_wait("그만! 그만해 주세요!!!");
          await kitaru.say_and_wait("이런…… 운명의 사람이 이렇게 되시다니……");
          await era.printAndWait([
            kitaru.get_colored_name(),
            "의 몸이 고통에 쉼 없이 떨리고, 눈물이 뚝뚝 떨어진다.",
          ]);
        } else {
          await kitaru.say_and_wait('……');
          await era.printAndWait([
            "인형처럼 ",
            you.get_colored_name(),
            "이(가) 하는 대로 맡긴 채, ",
            kitaru.get_colored_name(),
            "라는 ",
            kitaru.uma_sex_title,
            "은(는) 다시 자신의 기억을 닫아 버리려 한다.",
          ]);
        }
    }
  },
  /**
   * 恥辱刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {number} level 刻印の等級
   */
  async mark_shame(kitaru, you, level) {
    switch (level) {
      case 1:
        await kitaru.say_and_wait("으…… 어, 어서 계속해 주세요……");
        await era.printAndWait([
          "정사 중인 ",
          kitaru.get_colored_name(),
          "은(는) 손으로 눈을 가리려 한다. 이런 행위는 아직 조금 부끄러운 모양이다.",
        ]);
        break;
      case 2:
        await kitaru.say_and_wait("음…… 아직 조금 부끄러워요……");
        await kitaru.say_and_wait("시라오키님께서 보시면 어떡하죠.");
        break;
      case 3:
        await kitaru.say_and_wait("아아앗, 이제 아무래도 좋아요……");
        await era.printAndWait([
          "자포자기한 듯 그렇게 말하고 ",
          kitaru.get_colored_name(),
          "은(는) 오히려 ",
          you.get_colored_name(),
          "의 점점 대담해지는 움직임에 맞추기 시작했다.",
        ]);
        await kitaru.say_and_wait("저…… 정말 뻔뻔한 짓을……");
    }
  },
  /**
   * 反抗刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {number} level 刻印の等級
   */
  async mark_hate(kitaru, you, callname, level) {
    const love = era.get('love:56');
    switch (level) {
      case 1:
        if (love >= 75) {
          await kitaru.say_and_wait([
            "이, 이게 ",
            callname,
            "이(가) 좋아하시는 일인가요?",
          ]);
          await kitaru.say_and_wait("조금 지나치세요……");
        } else {
          await kitaru.say_and_wait("아…… 거절해도 될까요?");
          await kitaru.say_and_wait([callname, ", 저도 가끔은 화낸다고요!"]);
        }
        break;
      case 2:
        if (love >= 75) {
          await kitaru.say_and_wait([
            "저기……",
            callname,
            ", 제가 싫어지셨나요?",
          ]);
          await kitaru.say_and_wait([
            "말씀 잘 들을게요…… 가르쳐 주세요, ",
            callname,
            "을(를) 어떻게 기쁘게 해 드리면 될지……",
          ]);
        } else {
          await kitaru.say_and_wait("그런 뜻인가요?");
          await era.printAndWait([
            "호박처럼 따뜻했던 눈동자가 차갑게 식고, 날카로운 십자별이 ",
            you.get_colored_name(),
            "을(를) 응시한다.",
          ]);
        }
        break;
      case 3:
        if (love >= 75) {
          await kitaru.say_and_wait("운명의 사람……");
          await kitaru.say_and_wait([
            '……',
            kitaru.elder_sibling_sex_title,
            ", 저……",
          ]);
          await kitaru.say_and_wait("어떻게 해야……");
          await era.printAndWait(
            "별이 박힌 호박빛 눈동자는 지금 빛을 잃었다.",
          );
        } else {
          await kitaru.say_and_wait(
            "꼭 이렇게 하셔야 하나요?",
          );
          await era.printAndWait([
            "순간 신에게 응시당하는 듯한 압박감이 ",
            you.get_colored_name(),
            "에게 내려앉았다.",
          ]);
          await kitaru.say_and_wait(
            "운명의 사람…… 지금은 이 호칭도 조금 불쾌하네요.",
          );
          await kitaru.say_and_wait(
            "그래도 점괘가 그렇게 나왔으니까요…… 그러니 앞으로는 이런 일, 하지 말아 주시겠어요?",
          );
        }
    }
  },
  /**
   * 淫紋刻印を得る
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {CharaTalk} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {number} level 刻印の等級
   */
  async mark_ero(kitaru, you, callname, level) {
    switch (level) {
      case 1:
        await era.printAndWait("아랫배의 복잡한 문양이 난자의 궤적을 나타내고 있다……");
        await era.printAndWait(
          "분홍빛으로 빛나는 선은 주인의 신분을 드러내듯, 신사의 도리이와 닮은 무늬를 그린다.",
        );
        await kitaru.say_and_wait([callname, "에게 이런 능력도 있으셨다니……"]);
        break;
      case 2:
        await kitaru.say_and_wait("음…… 문양이 더 복잡해졌네요……");
        await era.printAndWait([
          kitaru.get_colored_name(),
          "은(는) 말없이 자궁 위치에 있는 도리이 주변의 장식을 바라보고 있다……",
        ]);
        await kitaru.say_and_wait("시라오키님께서는 어떻게 생각하실까요.");
        break;
      case 3:
        await era.printAndWait(
          "한층 복잡한 모양이 되고, 임신 확률과 수태를 표시하는 기능까지 더해졌다……",
        );
        await era.printAndWait([
          "신에게 선택받은 무녀가 배꼽 아래를 쓰다듬으며 스스로 ",
          you.get_colored_name(),
          "에게 두 다리를 벌린다.",
        ]);
        await era.printAndWait(
          "실을 늘어뜨리는 구멍이 호흡에 맞춰 깜빡이는 음문의 박자에 따라 열렸다 닫힌다.",
        );
        await kitaru.say_and_wait("하…… 하……");
        await era.printAndWait([
          "분홍빛으로 빛나는 눈동자가 멍하니 ",
          you.get_colored_name(),
          "을(를) 바라본다.",
        ]);
    }
  },
};
