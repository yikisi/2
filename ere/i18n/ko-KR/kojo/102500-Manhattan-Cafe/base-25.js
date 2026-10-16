/**
 * @file マンハッタンカフェ - 地下室
 * @author Necroz
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  welcome(coffee, you, callname) {
    era.print([
      '……',
      you.get_colored_name(),
      '은(는) 천천히 눈을 떴다. 내던져진 듯한 자세로 침대에 누워 있었고, 몸이 몹시 쑤셨다. 머리도 무겁게 부풀어 오른 듯 욱신거렸다.',
    ]);
    era.print([
      '낯선 천장을 감상할 겨를도 없이 익숙한 얼굴이 ',
      you.get_colored_name(),
      '의 시야에 끼어들었다.',
    ]);
    era.println();

    coffee.say([
      '……좋은 아침이에요, ',
      callname,
      '. 벌써 점심때일지도 모르지만요……',
    ]);
    coffee.say(['왜 여기서 눈을 뜨셨냐고요……?']);
    coffee.say([
      '오늘은 트레센을 온통 찾아다녀도 ',
      callname,
      '이(가) 보이지 않아서…… 마지막에는 친구가 이끄는 대로 가서야…… 어디 계신지 알았어요……',
    ]);
    coffee.say(['……그렇게 대답하면…… 믿어 주실 건가요?']);
    era.println();

    era.print([
      '아직 욱신거리는 뒤통수를 느끼며 ',
      coffee.get_colored_name(),
      '의 그런 설명에 ',
      you.get_colored_name(),
      '은(는) 납득할 수 없었다.',
    ]);
    era.println();

    coffee.say([
      '……요즘은 ',
      callname,
      '과(와) 단둘이 있을 시간이…… 줄었네요……',
    ]);
    era.println();

    era.print([
      coffee.get_colored_name(),
      '는 부드럽게 ',
      you.get_colored_name(),
      '의 관자놀이를 누르며 귓가에 낮게 속삭였다.',
    ]);
    era.println();

    coffee.say([
      '……',
      callname,
      '의 사정은…… 이해해요. 트레센 학원의 트레이너라면…… 피곤하신 게 당연하죠……',
    ]);
    coffee.say([
      '……하지만 피곤하셔도…… 우리의 약속은 잊지 말아 주세요. 도망치실 생각이라면…… 뒤쫓는 것에는, 조금 자신이 있거든요……',
    ]);
    coffee.say(['……여기서 잠시 쉬면서…… 피로를 푸시는 건 어떨까요……?']);
    coffee.say([
      '처음에 한 말도…… 거짓말은 아니에요…… ',
      callname,
      '을(를) 여기로 데려온 건…… 『저』가 아니거든요. 반대하지도 않았지만요……',
    ]);
    coffee.say(['그러면…… 제가 만족할 때까지…… 잠시 여기 계셔 주세요……']);
    era.println();

    era.print([
      coffee.get_colored_name(),
      '의 말이 끝나자 지하실의 냉기가 조용히 퍼져 나갔다……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async ask_release_agree(coffee, you, callname) {
    await coffee.say_and_wait(['나가고…… 싶으신가요……']);
    era.println();

    await era.printAndWait([
      you.get_colored_name(),
      '의 부탁을 듣고 ',
      coffee.get_colored_name(),
      '는 조금 곤란한 표정을 지었다.',
    ]);
    era.println();

    await coffee.say_and_wait([
      '좋아요…… ',
      callname,
      '이(가) 여기 오신 것 자체가 우연이었고…… 저도 이제 충분하니까요……',
    ]);
    await coffee.say_and_wait(['문은…… 저쪽이에요. 자유롭게……']);
    await coffee.say_and_wait([
      '열어 달라고요……? 잠금장치 같은 건…… 처음부터 잠겨 있지 않았어요……',
    ]);
    era.println();

    await era.printAndWait(['정말이야……?']);
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 문고리를 돌리자 달칵 소리와 함께 문이 손쉽게 열렸다.',
    ]);
    await era.printAndWait([
      '……이 순간, 지금까지 문을 열려고 애쓴 일이 꿈처럼 느껴졌다.',
    ]);
    era.println();

    await coffee.say_and_wait(['……', callname, '.']);
    era.println();

    await era.printAndWait([
      coffee.get_colored_name(),
      '의 목소리가 등 뒤에서 들려왔다.',
    ]);
    era.println();

    await coffee.say_and_wait(['부디…… 우리의 약속을…… 잊지 말아 주세요……']);
    await coffee.say_and_wait([
      '다음에는…… 어쩌면 제가 직접…… ',
      callname,
      '을(를) 여기로 데려올지도 모르니까요……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {boolean} is_first 解放を初めて拒まれたかどうか
   */
  async ask_release_reject(coffee, you, callname, is_first) {
    if (is_first) {
      await coffee.say_and_wait([
        '좋아요…… 처음부터 제가 ',
        callname,
        '을(를) 데려온 것도 아니니까요……',
      ]);
      era.println();

      await era.printAndWait(['끼익 소리를 내며 고대하던 문이 저절로 열렸다.']);
      await era.printAndWait([
        '밖으로 이어지는 계단을 보고 ',
        you.get_colored_name(),
        '은(는) 눈물이 날 만큼 감격하여 곧바로 문밖으로 발을 내디뎠다.',
      ]);
      await era.printAndWait([
        '두 칸씩 뛰어오르고, 모퉁이를 몇 번이나 돌았다……',
      ]);
      await you.say_and_wait(['어라……'], true);
      await you.say_and_wait(['계단이 너무 길지 않나?'], true);
      era.println();

      await era.printAndWait([
        '지하실에서 벗어났다는 흥분이 가라앉자 머리가 조금씩 차분해졌다.',
      ]);
      await you.say_and_wait(['나는…… 계단에 얼마나 있었던 거지?'], true);
      await era.printAndWait([
        '그 생각과 동시에 ',
        you.get_colored_name(),
        '은(는) 깨달았다. 지하실에서 줄곧 달라붙어 있던 냉기가 자신의 곁에서 한 번도 사라진 적이 없었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 미친 듯이 계속 위로 달렸다. 기분 탓이야, 트레센에 이렇게 깊은 지하실이 있어도 이상할 것 없어——스스로에게 그렇게 되뇌면서.',
      ]);
      await era.printAndWait([
        '그러다 ',
        you.get_colored_name(),
        '은(는) 발을 헛디뎌 계단 아래로 굴렀고, 벽에 부딪히고서야 멈췄다.',
      ]);
      era.println();

      await era.printAndWait([
        '이상하다…… 계단에서 떨어졌는데도 전혀 아프지 않다……',
      ]);
      await era.printAndWait([
        '고개를 들어 계단 아래를 보니 지하실 문은 활짝 열린 채, 자신이 떠났을 때와 조금도 달라지지 않았다.',
      ]);
      await era.printAndWait([
        '한참을 걸었을 텐데 순식간에 지하실 앞으로 돌아와 있다……',
      ]);
      await era.printAndWait([
        '돌아와, 돌아와——귓가에서 그런 속삭임이 들린 듯했다.',
      ]);
      await era.printAndWait([
        '긴 침묵 끝에 ',
        you.get_colored_name(),
        '은(는) 결국 지하실로 돌아왔다.',
      ]);
      era.println();

      await coffee.say_and_wait(['돌아오셨군요, ', callname, '……']);
      era.println();

      await era.printAndWait([
        '결말을 알고 있었다는 듯 ',
        coffee.get_colored_name(),
        '는 미소를 지으며 조용히 ',
        you.get_colored_name(),
        '을(를) 바라보고 있었다.',
      ]);
      await era.printAndWait(['등 뒤의 문이 천천히 닫혔다.']);
    } else {
      await coffee.say_and_wait([callname, '……다시 한번…… 해 보시겠어요?']);
      era.println();

      await era.printAndWait([
        '지난번 일을 떠올리자 ',
        you.get_colored_name(),
        '은(는) 등골이 오싹해졌다.',
      ]);
      era.println();

      await coffee.say_and_wait([
        '후훗…… 아직 만족하지 못했거든요, ',
        callname,
        '……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee
   * @param {string} cur_time
   */
  async ask_time(coffee, cur_time) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait(['시간인가요…… 지금은 ', cur_time]);
      await coffee.say_and_wait('걱정하지 마세요. 시간은…… 충분하니까요……');
    } else {
      await coffee.say_and_wait([cur_time, '……무슨 일이신가요?']);
      await coffee.say_and_wait(
        '급한 일이 있으시다면…… 『누군가』가 대신 끝내 줄 거예요.',
      );
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   */
  async battle_success(coffee, you) {
    await era.printAndWait([
      '마음속으로 미안하다고 중얼거리며 ',
      you.get_colored_name(),
      '은(는) 그대로 ',
      coffee.get_colored_name(),
      '를 침대에 밀어 눕혔다.',
    ]);
    await era.printAndWait([
      '기대에 젖은 상대의 시선을 받으며 하얀 목에 두 손을 얹었다……',
    ]);
    era.println();
    await era.printAndWait(['……성공했다.']);
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 처음부터 저항하지 않았고, 오히려 ',
      you.get_colored_name(),
      '의 팔뚝에 손을 얹고 있었다.',
    ]);
    await era.printAndWait([
      '격렬한 전희라고 ',
      coffee.sex,
      '는 생각했을지도 모른다……',
    ]);
    await era.printAndWait([
      '자신을 사랑해 주는 담당을 제 손으로 기절시키다니…… 뭐라고 해야 할까……',
    ]);
    await era.printAndWait(['…………어쨌든 먼저 달아나자.']);
  },
  /** @param {CharaTalk} you プレイヤー */
  async battle_escape(you) {
    await era.printAndWait([
      '한동안 살펴보고 나서야 ',
      you.get_colored_name(),
      '은(는) 깨달았다. 문은 애초에 잠겨 있지 않았다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 문고리를 돌리려 할 때마다 반대편 손잡이를 엄청난 힘이 꽉 붙들고 있었던 것이다.',
    ]);
    await era.printAndWait([
      '소리도 내지 않고 그럴 수 있는 존재…… ',
      you.get_colored_name(),
      '이(가) 아는 것은 하나뿐이었다.',
    ]);

    era.printButton('「친구…… 맞지?」', 1);
    await era.input();

    await era.printAndWait(['대답은 없었다.']);

    era.printButton('「카페의 상태를 알아차리지 못한 건 내 잘못이야……」', 1);
    era.printButton(
      '「하지만 나를 지하실에 가둔다고 해결되지는 않아. 바로잡을 기회를 줘……!」',
      2,
    );
    await era.input();

    await era.printAndWait(['문고리가 저절로 돌아가더니 문이 천천히 열렸다.']);
    era.println();

    era.printButton('「고마워, 나는——」', 1);
    await era.input();

    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 감사 인사를 마치기도 전에 힘껏 걷어차여 문밖으로 나동그라졌고, 문은 「쾅」 닫혔다.',
    ]);
    await era.printAndWait([
      '엉덩이를 문지르며 ',
      you.get_colored_name(),
      '은(는) 지하실을 나왔다.',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async battle_prison(coffee, you, callname) {
    await era.printAndWait([
      '이런 잠금장치는 ',
      you.get_colored_name(),
      '도 처음 봤다……',
    ]);
    await era.printAndWait([
      '이미 풀렸어야 할 위치까지 돌렸는데도 문고리는 용접이라도 된 듯 꿈쩍하지 않았다.',
    ]);
    await era.printAndWait([
      '……',
      you.get_colored_name(),
      '은(는) 일단 포기할 수밖에 없었다.',
    ]);
    era.println();
    await coffee.say_and_wait([
      callname,
      ', 분풀이를 끝내셨다면…… 다음은 제 차례예요……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async battle_fail(coffee, you, callname) {
    await era.printAndWait([
      '마음속으로 미안하다고 중얼거리며 ',
      you.get_colored_name(),
      '은(는) 그대로 ',
      coffee.get_colored_name(),
      '를 침대에 밀어 눕혔다.',
    ]);
    await era.printAndWait([
      '기대에 젖은 상대의 시선을 받으며 하얀 목에 두 손을 얹었다……',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      coffee.uma_sex_title,
      '의 몸을 얕봤다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 힘을 다 썼는데도 ',
      coffee.get_colored_name(),
      '는 예상과 달리 기절하지 않았다.',
    ]);
    await era.printAndWait([
      '촉촉한 눈동자, 붉게 달아오른 뺨…… 아무리 봐도 ',
      you.get_colored_name(),
      '이(가) 발정하게 만들었을 뿐이다……',
    ]);
    era.println();

    await coffee.say_and_wait([
      callname,
      ', 분풀이를 끝내셨다면…… 다음은 제 차례예요……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {boolean} is_back マンハッタンカフェが戻ってきたのか、目覚めたのか
   */
  find_escape(coffee, you, callname, is_back) {
    era.print(['젠장, 이 자물쇠는 왜 이렇게 안 열려!']);
    era.print([
      you.get_colored_name(),
      '이(가) 문 잠금장치에 집중하고 있을 때, 바로 옆에서 얼굴이 불쑥 나타났다.',
    ]);
    era.println();

    coffee.say([callname, '……뭘 하고 계신가요?']);
    era.println();

    era.print('카페!?');
    if (is_back) {
      era.print(['언제 돌아온 거야? 계속 문 앞에 있었는데!']);
    } else {
      era.print(['언제 깨어난 거야? 큰일인데……']);
    }
    era.print([
      you.get_colored_name(),
      '은(는) 펄쩍 뛰었고 다리에 힘이 풀렸다. ',
      coffee.get_colored_name(),
      '가 마침 받쳐 주지 않았다면 그대로 무릎을 꿇었을 것이다.',
    ]);
    era.println();

    coffee.say(['이상한 짓은 하지 말아 주세요…… 곤란하니까요……']);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   */
  async flatter(coffee, you) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 먼저 ',
        coffee.get_colored_name(),
        '에게 다가가 ',
        coffee.sex,
        '의 부드러운 긴 머리카락을 쓰다듬었다.',
      ]);
      await era.printAndWait([
        '마음에 든 모양이다. 편한 자세를 잡고 ',
        you.get_colored_name(),
        '의 어깨에 기대 왔다. 머리카락에서 풍기는 은은한 향기에 ',
        you.get_colored_name(),
        '은(는) 잠시 멍해졌다.',
      ]);
    } else {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '에게 달콤한 말을 늘어놓았다. 스스로도 얼굴이 달아오를 만큼 낯간지러운 내용이었다.',
      ]);
      await era.printAndWait([
        '그런 말씀을 하셔도…… 소용없어요——',
        coffee.get_colored_name(),
        '의 눈이 그렇게 말하고 있었다.',
      ]);
      await era.printAndWait([
        '……하지만 ',
        coffee.sex,
        '의 뒤에서 흔들리는 꼬리를 보면 사실은 다른 모양이다.',
      ]);
    }
  },
  /**
   * PlanB タキオンの地下室からプレイヤーを救出する限定イベント
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {PrintedSpan} c_call_t マンハッタンカフェがアグネスタキオンを呼ぶときの呼称
   */
  async rescue_from_tachyon(coffee, you, callname, c_call_t) {
    await coffee.say_and_wait(
      '이제 와서 진심을 보이시는 건가요…… 그 모습…… 보기 흉해요……',
    );
    await coffee.say_and_wait('비난, 의문, 규탄…… 저주……');
    await coffee.say_and_wait([
      '당신의 독단 때문에…… ',
      callname,
      '이(가) 얼마나 힘겨워하고…… 잠 못 이루는 밤을 보냈을 것 같나요……',
    ]);
    await coffee.say_and_wait([
      you.sex,
      '는 당신의 희생양도…… 꿈을 이루기 위한 『모르모트』도 아니에요. 먼저 손을 놓은 건…… 당신이에요……',
    ]);
    await coffee.say_and_wait([
      callname,
      '의 곁을 지킨 건…… 저예요…… ',
      c_call_t,
      '……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   */
  async strike_success(coffee, you) {
    await era.printAndWait(['믿을 수 없어……']);
    await era.printAndWait([
      you.get_colored_name(),
      '의 갑작스러운 손날 공격에 ',
      coffee.get_colored_name(),
      '는 작게 신음하며 그 자리에 쓰러졌다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '의 상태를 살폈다. 확실히 기절해 있었다.',
    ]);
    await era.printAndWait([
      coffee.uma_sex_title,
      '는 이렇게 약했던가…… 아니면 누군가 도와주고 있는 걸까.',
    ]);
    await era.printAndWait(['……어쨌든 먼저 달아나자.']);

    await era.printAndWait(['지하실의 냉기가 조금 누그러진 것 같았다.']);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async strike_fail(coffee, you, callname) {
    await era.printAndWait(['지금이다!']);
    await era.printAndWait([
      coffee.get_colored_name(),
      '의 빈틈을 노려 ',
      you.get_colored_name(),
      '은(는) 손날을 ',
      coffee.sex,
      '의 뒷목에 내리쳤다……',
    ]);
    await era.printAndWait(['성공…… 했나?']);
    era.println();

    await coffee.say_and_wait([callname, '……']);
    era.println();

    await era.printAndWait([
      '팔을 거두기도 전에 ',
      coffee.get_colored_name(),
      '에게 단단히 붙잡혔다.',
    ]);
    era.println();

    await coffee.say_and_wait([
      '상대가 당신을 사랑하는 제가 아니었다면…… ',
      coffee.uma_sex_title,
      '에게 그런 공격을 하는 건…… 아주 위험한 일이에요……',
    ]);
    await coffee.say_and_wait([
      '……하지만 이런 행동을…… 그냥 넘어갈 수도 없겠네요……',
    ]);
    await coffee.say_and_wait([
      '누가 누구의 소유물인지…… 다시 한번…… 설명해 드려야겠어요……',
    ]);
    era.println();

    await era.printAndWait([
      '지하실의 냉기가 ',
      you.get_colored_name(),
      '의 팔다리를 타고 올라와 감각이 얼어붙어 갔다……',
    ]);
  },
};
