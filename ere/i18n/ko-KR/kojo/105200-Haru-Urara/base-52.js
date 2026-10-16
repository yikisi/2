/**
 * @file ハルウララ - 地下室
 * @author 99
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async first_prison(urara, inner_urara, you, callname) {
    era.drawLine();
    await inner_urara.say_as_unknown_and_wait(
      '하아, 당신…… 어쩌다 이렇게 된 건가요?',
    );
    await inner_urara.say_as_unknown_and_wait([
      '다행히 우라라는 트레이너 ',
      urara.uma_sex_title,
      ', 즉 당신에게 그렇게까지 잔인해질 수는 없나 봐요. 다른 아이들과는 다른 모양이네요……',
    ]);
    era.drawLine();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 어리둥절해하며 침대에서 상체를 일으킨다. 낯선 침구, 눈앞에는 어두운 천장뿐이다. 하지만 곁에서는 끊어질 듯한 흐느낌이 계속 들려온다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 깨어난 걸 알아차리고, 침대 가장자리에서 웅크리고 있던 작은 ',
      urara.uma_sex_title,
      '는 황급히 힘없이 귀를 세운다. 울어서 붉어진 작은 얼굴을 문지르며 ',
      you.get_colored_name(),
      '에게서 등을 돌렸다.',
    ]);
    await urara.say_and_wait([
      '미안해. 그래도 이번만! 남아 줄래? 나중에는 우라라, 다시 착한 아이가 될게! 그러니까……!',
    ]);
    await era.printAndWait([
      '끌어안은 무릎 위로 눈물이 끊임없이 떨어져도, 그 말이 뻔히 보이는 덫 같아도 ',
      urara.teen_sex_title,
      "는 끝내 '비열해질' 수는 없었다.",
    ]);
    await era.printAndWait([
      '적어도 밀실의 반쯤 열린 문에는 자물쇠가 걸려 있지 않다.',
    ]);

    era.println();

    await inner_urara.say_as_unknown_and_wait([
      '……하아…… 그럼 트레이너 ',
      you.adult_sex_title,
      ', 즉 당신의 선택은──',
    ]);
    era.printButton('여기에 남는다', 1);
    era.printButton('등을 돌리고 나간다', 2);
    const ret = await era.input();
    if (ret === 1) {
      await era.printAndWait([
        '천천히, ',
        urara.uma_sex_title,
        '의 등 뒤로 다가가',
        you.get_colored_name(),
        '은(는)  뒤에서',
        urara.sex,
        '의 작고 차가운 손을 잡아주었다.',
      ]);
      await urara.say_and_wait([
        '에?',
        callname,
        '이(가) 곁에 있어 주는 거야? 정말? 우라라, 정말로, 나쁜 아이가 되어버려도 되는 거야?',
      ]);
      await era.printAndWait([
        '울다 지친 채, 젖은 뺨을 거칠게 닦아내고, 눈물 속에서 웃어보인 ',
        urara.get_colored_name(),
        '는 몸을 돌려, ',
        you.get_colored_name(),
        '을(를) 부드럽게 눕힌다. ',
      ]);
      await urara.say_and_wait(['']);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '보이다시피, 이곳으로 끌려와서도',
        urara.sex,
        '는 마음을 완전히 정하지 못했어. 어쨌든, 잘 쉬다 가. ',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '나갈 거라면 우라라를 잘 재워주고 가는 게 좋을 거야? ',
        urara.sex,
        ', 오늘 꽤 많이 울었으니까.',
      ]);
    } else {
      await era.printAndWait([
        urara.get_colored_name(),
        '를 바라보지 않은 채 ',
        you.get_colored_name(),
        '은(는) 말없이 일어서서, 뒤돌아보지 않고 방 안쪽의 문으로 향했다.',
      ]);
      await urara.say_and_wait([
        '……우라라, 알았어. 나쁜 아이가 되면 안 되겠지. 미안해…… 그래도 ',
        callname,
        '을(를) 다른 애들한테……',
      ]);
      await urara.say_and_wait([
        '그래도 곁에 있는 하나만으로도 괜찮으니까……',
        callname,
        ', 다음이 있다면, 혹시 다음이 있다면……!',
      ]);
      await era.printAndWait([
        '무거운 문이 밀려 열리고 둔탁하게 튕기는 소리가 울린다. 대답을 받지 못한 작은 ',
        urara.uma_sex_title,
        '는 구멍투성이 어둠 속에 홀로 남겨졌다.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        "……너무 다정했던 걸까요. '마음먹고 비열해진다'는 건 ",
        urara.sex,
        '에게는 아직 너무 어려운 일이네요……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '당신도 너무했어요. 알고 계시겠죠? 우라라가 정말 무슨 짓을 한다면, 저는 대개 당신 편을 들지 않을 거예요.',
      ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  welcome(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      '이런 일은 결국 처음 한 번과 그 뒤의 셀 수 없는 반복…… 게다가 선택권도 없죠.',
    );
    inner_urara.say_as_unknown(
      '너무 조급해하지 마세요. 이미 이렇게 된 이상, 우라라의 응석을 좀 받아줘 보는 건 어떤가요?',
    );
    era.drawLine();
    era.print([
      '낯선 듯하면서도 익숙한 천장이다.',
      you.get_colored_name(),
      '이(가) 있는 어스름한 공간은 의외로 따스하다. 곁에 누워 있는 ',
      urara.get_colored_name(),
      '의 발그레한 벚꽃색 눈동자는 뜨겁고, 끈적하다.',
    ]);
    urara.say([
      '우라라, 결국 나쁜 아이가 되어버렸어. 그렇다면 더 제멋대로 굴어도 괜찮겠지? 그러니까 ',
      callname,
      '……',
    ]);
    urara.say([
      '이번엔 더 오래 같이 있어 줘. 게다가……',
      callname,
      '한텐, 거절할 권리 같은 건 없다고?',
    ]);
    era.print([
      you.get_colored_name(),
      '의 대답을 기다리지 않고, 작은',
      urara.uma_sex_title,
      '의 두 팔이 힘차게 ',
      you.get_colored_name(),
      '을(를) 아래에서 끌어안으며, 천진난만한 미소가 서서히 붉게 물들어갔다.',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      '미안해요. 우라라는 결국 나쁜 아이가 되고 말았네요. 이렇게 되면 저도 어쩔 수 없어요. ',
    ]);
    inner_urara.say_as_unknown([
      '당신이 무언가 하고 싶다면, 대부분은 못 본 척할게요. 즐겁게 지내다 가세요.',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async ask_release_agree(urara, inner_urara, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      '의 말에 일리가 있으면 ',
      urara.get_colored_name(),
      '는 대체로 고개를 끄덕인다. 감옥 안에서도 그런 미묘한 교감은 이어진다.',
    ]);
    await urara.say_and_wait([
      '응! 괜찮아. ',
      callname,
      '이(가) 그렇게 말하는 것도 우라라를 위해서지? 그럼 지금은 더 이상 떼쓰면 안 되겠네……',
    ]);
    await urara.say_and_wait([
      callname,
      ', 밖에 나가면 우라라가 당분간 지켜 줄 수 없어. 그러니까 조심해! 내일 또…… 볼까?',
    ]);
    await era.printAndWait([
      '눈물을 참으며 ',
      urara.get_colored_name(),
      '는 붉어진 눈가를 살짝 문지르고, 아쉬운 듯 ',
      you.get_colored_name(),
      '을(를) 위해 문의 장치를 풀어 주었다.',
    ]);
    await era.printAndWait([
      '그늘 속 쓸쓸한 작은 ',
      urara.uma_sex_title,
      '를 보고 잠깐 ',
      you.get_colored_name(),
      '은(는) 조금만 더 ',
      urara.sex,
      '하고 함께하고 싶은 마음이 들었나?',
    ]);
    await era.printAndWait([
      '하지만 지금은 더 이상 남을 수 없다. 무거워진 발을 끌며 ',
      you.get_colored_name(),
      "은(는) 조금 공허한 '자유'를 향해 나아갔다……",
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '그래도 우라라의 말대로 조심하세요. 쉽게 이곳으로 돌아오지는 않는 게 좋을 거예요.',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   */
  async ask_release_reject(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      '너무 짧아요. 자질구레한 일은 잠깐 잊으세요. 적어도 지금은 쉽게 입을 열게 두지 않을 거예요.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      "당신이 무엇을 추구하든, 제게는 '지금의 우라라'보다 중요한 건 없어요. ",
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '좋아요. 당분간 나갈 생각은 버리세요. 이제 숨 쉬어도 돼요.',
    ]);
    await era.printAndWait([
      '선언이 끝날 무렵, 숨을 막고 있던 힘이 ',
      you.get_colored_name(),
      '의 말하려던 목을 놓아준다. 하지만 등 뒤에서 노려보는 서늘한 감각이 목덜미를 타고 올라왔다.',
    ]);
    await era.printAndWait([
      "곁눈질로 뒤를 돌아본다. 잿빛으로 검게 비쳐 거의 주변에 녹아든 '",
      inner_urara.get_colored_actual_name(),
      "'이(가) 차가운 눈으로 ",
      you.get_colored_name(),
      '을(를) 마주 보고 있었다.',
    ]);
    await era.printAndWait(['계략과 핑계뿐 아니라 인내도 빼놓을 수 없다……']);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {string} cur_time 現在時刻
   */
  async ask_time(urara, callname, cur_time) {
    await urara.say_and_wait([
      '응? 아, 잠깐만…… 지금 시간은 ',
      cur_time,
      '이야.',
    ]);
    await urara.say_and_wait([
      callname,
      ', 중요한 일이 생각났어? 미안해. 우라라는 평소에도 시간을 잘 못 지키고, 지금도 거기까지는 생각 못 했어……',
    ]);
    await urara.say_and_wait([
      '그래도 모처럼 남아 줬으니까 조금만 더 우라라랑 있어 줄래? 우라라는 아직……',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  back_basement(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      '이런 일은 결국 처음 한 번과 그 뒤의 셀 수 없는 반복…… 게다가 선택권도 없죠.',
    );
    inner_urara.say_as_unknown(
      '너무 조급해하지 마세요. 이미 왔으니 우라라의 어리광에 어울려 주는 건 어때요?',
    );
    era.drawLine();
    era.print([
      '낯선 듯하면서도 익숙한 방에서 눈을 뜬다. ',
      you.get_colored_name(),
      '은(는) 따뜻한 어둠 속에서 상체를 일으키지만, 방에는 아무도 없다.',
    ]);
    era.print([
      you.get_colored_name(),
      '이(가) 주범은 누구일까 의아해하던 그때, 바라보던 문 너머에서 잔발걸음 소리가 나더니 자물쇠 소리가 이어졌다.',
    ]);
    urara.say([
      callname,
      ', 일어났구나! 에헤헤…… 이번에도 더 오래 같이 있어 줘!',
    ]);
    era.print([
      '분홍빛의 작은 주범이 폴짝 뛰듯, 힘차게 웃으며 달려드는 걸 보고 ',
      you.get_colored_name(),
      '은(는) 막 깨어난 정신이 다시 아찔해졌다.',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      '미안해요. 우라라는 결국 나쁜 아이가 되고 말았네요. 이렇게 되면 저도 어쩔 수 없어요.',
    ]);
    inner_urara.say_as_unknown([
      '당신이 무언가 하고 싶다면, 대부분은 못 본 척할게요. 즐겁게 지내다 가세요.',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   */
  async battle_escape(urara, inner_urara, you) {
    await era.printAndWait([
      '온 힘을 다해 ',
      urara.get_colored_name(),
      '가 붙드는 것을 뿌리치고 ',
      you.get_colored_name(),
      '은(는) 무거운 몸을 이끌어 마지막 장치 앞으로 왔다.',
    ]);
    await era.printAndWait([
      '다행히 남은 기력은 아직 이곳을 빠져나가기에는 충분했다. 무거운 문을 밀고 ',
      you.get_colored_name(),
      '은(는) 멀리 자유를 알리는 작은 빛을 향해 한 걸음을 내디딘다.',
    ]);
    await era.printAndWait([
      '방을 나서는 순간, 머릿속으로 곧장 파고드는 낮은 신음과 함께  까닭 모를 오한이 뒤에서 ',
      you.get_colored_name(),
      '의 등을 타고 올라왔다.',
    ]);
    await era.printAndWait([
      '뒤돌아본 순간 ',
      you.get_colored_name(),
      '은(는) 또 다른 ',
      inner_urara.get_colored_name(),
      '가 문가에 서서 원망 서린 한기를 풍기고 있는 것 같았다.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '이렇게 주인공은 무책임하게 도망쳤답니다. 오래오래 행복하게 살았을까요?',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '……달리세요. 이번에는 제가 잡는 걸 놓친 셈으로 해 드리죠.',
    ]);
    await era.printAndWait([
      '등을 찌르는 시선을 받으며 ',
      you.get_colored_name(),
      '은(는) 필사적으로 지하실에서 도망쳐 나와 단단한 바닥에 쓰러지고서야 겨우 한숨 돌렸다.',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async battle_prison(urara, inner_urara, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 뜻밖에도, 순조롭게 ',
      urara.get_colored_name(),
      '가 붙드는 것을 뿌리치고 마지막 장치 앞으로 왔다. 이것만 풀면──',
    ]);
    await you.say_and_wait('……');
    await era.printAndWait([
      '안타깝게도 그 자리에서 굳어 버린 ',
      you.get_colored_name(),
      '은(는) 아무리 해도 풀지 못한다. 잔인할 정도로 참 단순한 장치인데도.',
    ]);
    await era.printAndWait([
      "무겁게 닫힌 문 옆에는 '",
      callname,
      "'하고 '우라라'의 사진이 있다. 두 사람의 미소는 햇빛 아래 매미 날개처럼 얇고 여리다.",
    ]);
    await era.printAndWait(["뒤이어 들려오는 것은 '악마의 조롱'이다."]);
    await inner_urara.say_as_unknown_and_wait([
      '간단해요. 트레이너는 한 쪽을 잡고, 이 사진을 우라라 쪽부터 찢으면 돼요.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '음, 망설이고 있나요? 우라라에게 폭력을 휘두르는 당신이라면 별것도 아니잖아요?',
    ]);
    await era.printAndWait([
      '사진 속 미소를 바라보며 ',
      you.get_colored_name(),
      '은(는) 힘없이 떨리는 손을 거두었다. 귓가의 저주도 냉소 뒤로 사라져 간다.',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   * @param {boolean} is_back ハルウララが戻ってきたばかりか、目覚めたばかりか
   */
  find_escape(urara, inner_urara, you, callname, is_back) {
    if (is_back) {
      era.print([
        urara.get_colored_name(),
        '가 없는 틈을 타서 ',
        you.get_colored_name(),
        '은(는) 서둘러 달아나려 했다. 하지만 겹겹의 장치 때문에 머리를 싸매고 있던 중, 문이 갑자기 열렸다.',
      ]);
      urara.say([
        '응? ',
        callname,
        ', 이것도 못 풀어? 우라라가 한동안 없었는데도 못 도망갔구나!',
      ]);
      era.print([
        '문이 천천히 닫히며 바깥의 빛을 가린다. ',
        urara.teen_sex_title,
        '의 작고 천진한 얼굴도 어둠에 싸여, 아주 조금 장난기와 비웃음을 띠었다.',
      ]);
    } else {
      era.print([
        urara.get_colored_name(),
        '가 아직 깨어나지 않은 사이에 ',
        you.get_colored_name(),
        '은(는) 달아나기로 했다. 하지만 겹겹의 장치 때문에 머리를 싸매고 있던 중 뒤에서 ',
        urara.teen_sex_title,
        '의 목소리가 들렸다.',
      ]);
      urara.say([
        '응? ',
        callname,
        ', 아직도 못 풀었어? 우라라는 벌써 일어났는데? ',
        callname,
        '은(는) 우라라보다 머리가 나쁜 거야?',
      ]);
      era.print([
        '조용히 뒤에서 ',
        you.get_colored_name(),
        '이(가) 헛수고하는 걸 바라보는 ',
        urara.teen_sex_title,
        '의 작고 천진한 얼굴은 어둠 속에서 장난기와 비웃음을 띠고 있다.',
      ]);
    }
    urara.say([
      callname,
      ', 굳어 버렸네. 변명은 생각 안 해도 돼! 화난 거 아니니까.',
    ]);
    era.print([
      '작은 어른처럼 ',
      you.get_colored_name(),
      ' 앞에 멈춰 선 ',
      urara.get_colored_name(),
      "는 장난꾸러기 학생을 타이르는 선생님처럼 '흥미롭다'는 눈길을 보냈다.",
    ]);
    era.print([
      '그렇게 가볍게 말하면서도 그 뒤로 웃는 얼굴에 웃음기가 없는 ',
      urara.get_colored_name(),
      '는 ',
      you.get_colored_name(),
      '에게 한층 더 꼭 붙어 있었다.',
    ]);
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  async flatter(urara, you, callname) {
    if (Math.random() < 0.5) {
      await urara.say_and_wait([
        '에?',
        callname,
        ', 진심이야? 그래도 그렇게 말해주는 것만으로도 기뻐. 그러니까…… 쪽…… 하아……',
      ]);
      await urara.say_and_wait([
        '헤헤~ ',
        callname,
        '에게 주는 선물이야. 트레이너가 우라라를 더 좋아하게 된다면 정말 기쁠 것 같아!',
      ]);
      await era.printAndWait([
        '얼굴을 붉히며 ',
        you.get_colored_name(),
        '의 무릎 위로 쓰러지듯 앉아, 작은 ',
        urara.uma_sex_title,
        '는 촉촉하고 깊은 키스로 ',
        you.get_colored_name(),
        '의 달콤한 말을 막았다.',
      ]);
    } else {
      await urara.say_and_wait([
        '응? 아! ',
        callname,
        '이(가) 무슨 말을 하려는지 알아. 진심이 아니어도 괜찮아. 우라라도 잘못한 게 있으니까.',
      ]);
      await urara.say_and_wait([
        '우라라는 ',
        callname,
        '하고 같이 있는 것만으로도 행복해. 그래도 바깥일을 생각하면 불안해져……',
      ]);
      await urara.say_and_wait([
        '지금 ',
        callname,
        '이(가) 좋다고 해 준다면…… 우라라도 잠깐은 걱정을 잊을 수 있겠지?',
      ]);
    }
  },
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
   */
  get_up(urara, inner_urara, you, callname) {
    inner_urara.say_as_unknown(
      '이런 일은 결국 처음 한 번과 그 뒤의 셀 수 없는 반복…… 게다가 선택권도 없죠.',
    );
    inner_urara.say_as_unknown(
      '너무 조급해하지 마세요. 이미 왔으니 우라라의 어리광에 어울려 주는 건 어때요?',
    );
    era.drawLine();
    era.print([
      '낯선 듯하면서도 익숙한 방에서 눈을 뜬다. 곁에 느껴지는 온기를 따라 눈을 돌리면, 작은 ',
      urara.uma_sex_title,
      '가 자는 중에도 ',
      you.get_colored_name(),
      '의 몸을 꽉 껴안고 있었다.',
    ]);
    era.print([
      you.get_colored_name(),
      '의 깨어남에 이끌리듯, 길게 묶었던 머리를 풀어헤친 ',
      urara.get_colored_name(),
      ' 또한 어둠 속에서, 촉촉하게 젖어 있으면서도 어두운 벚꽃색 눈을 서서히 떠간다.',
    ]);
    urara.say([
      '음~ ',
      callname,
      ', 잘 잤어? 지금 몇 시더라? 좀 더 자자? 헤헤~ 쪽……',
    ]);
    era.print([
      '몸을 돌려 ',
      you.get_colored_name(),
      '의 위로 올라타, 입을 열 틈조차 주지 않은 채, ',
      urara.teen_sex_title,
      '는 부드러운 입술과 혀로, 거부할 수 없게끔 다정하면서도 단호하게 그 입을 막아버렸다.',
    ]);
    era.drawLine();
    inner_urara.say_as_unknown([
      '미안해요. 우라라는 결국 나쁜 아이가 되고 말았네요. 이렇게 되면 저도 어쩔 수 없어요.',
    ]);
    inner_urara.say_as_unknown([
      '당신이 무언가 하고 싶다면, 대부분은 못 본 척할게요. 즐겁게 지내다 가세요.',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   */
  async strike_success(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      '이렇게 트레이너 ',
      you.adult_sex_title,
      ', 즉 당신은 작은 담당을 기습해서 지하실을 탈출했답니다…… 하아……',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '……어떻게 손을 댈 수 있었을까요. 그래도 당신이 선택한 이상 제가 이래라저래라 할 일은 아니겠죠.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '그럴 필요가 어디 있었는지는 모르겠지만, 뭐 좋아요. 당분간 당신 얼굴도 보고 싶지 않네요.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '……걱정하지 마세요. 우라라는 제가 달래 줄게요. 원래대로 돌아올 거예요. 전부……',
    ]);
  },
  /**
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} you プレイヤー
   */
  async strike_fail(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      '이렇게 트레이너 ',
      you.adult_sex_title,
      ', 즉 당신은 작은 담당을 기습하려다 예상대로 얻어맞고 날아가 기절했답니다.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      'GAME OVER. 뒤에 나오는 무슨무슨 도장…… 그런 건 없고, 있더라도 건설적인 조언은 없어요.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '잘 생각해 보세요. 우라라도 줄곧 성장세를 이어 가고 있는 ',
      inner_urara.uma_sex_title,
      '예요. 이런 결과도 이상할 건 없잖아요?',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '마지막으로…… 미안해요. 먼저 잘못한 건 당신이어도, 우라라가 힘 조절을 못 했다는 건 제대로 ',
      inner_urara.sex,
      '에게 말해 둘게요……',
    ]);
  },
};
