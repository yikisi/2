/**
 * @file 調教の地の文 - 睡姦
 * @author O口口口口口
 * @author 黑奴队长
 */
const era = require('#/era-electron');

module.exports = {
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('입을 맞춰 버렸다.');
      await attacker.print_and_wait([
        '잠결에 무의식적으로 살짝 벌어진 ',
        a_call_d,
        '의 입술이 너무나 입 맞추고 싶게 보였기 때문이다.',
      ]);
      await defender.say_and_wait('으응……');
      await attacker.print_and_wait(
        '튕겨 올라오려던 오른손을 눌러 돌려놓는다. 몸을 기울여 더 깊이 덮치면, 이 입술의 온기를 독차지할 수 있다.',
      );
      await attacker.print_and_wait('다만……혼자뿐이면 역시 조금 쓸쓸하다.');
    } else {
      await defender.say_and_wait('응——');
      await attacker.print_and_wait(
        '고개가 무의식적으로 흔들리기 시작하고 얼굴에도 홍조가 어린다. 호흡이 조금 빨라진 모양이다.',
      );
      await attacker.print_and_wait('슬슬 그만둘까……아니면 다른 걸 해 볼까.');
      await defender.say_and_wait('쪽……');
      await attacker.print_and_wait('그럼 마지막으로 한 번만 더……?');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async french_kiss(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '얼굴을 받쳐 더 깊이 입을 맞췄는데도 오히려 허전함이 남는다……',
      );
      await attacker.print_and_wait([
        '눈앞에 있는 ',
        a_call_d,
        '의 입술과 이 사이에 자신의 냄새를 잔뜩 남겼다. 몰래 하는 일로서는 대성공일 텐데……',
      ]);
      await attacker.print_and_wait([
        '하아……그래도 차라리 ',
        a_call_d,
        '이(가) 이대로 깨어나 당황해서 이쪽을 바라봐 준다면……재미있겠네ㅋㅋ',
      ]);
    } else {
      await defender.say_and_wait('하아……하아……');
      await attacker.print_and_wait('굳어지고, 저항하다가, 이윽고 포기한다.');
      await attacker.print_and_wait([
        '얼굴을 붙들린 채 혀에 짓궂게 시달려 붉어진 ',
        a_call_d,
        '의 몸은 뜻밖일 만큼 알기 쉽다.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_ear(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('좋네……');
      await attacker.print_and_wait(
        '부드럽고 따뜻하고, 게다가……지금은 도망칠 수도 없다.',
      );
      await defender.say_and_wait('으응……');
      await attacker.print_and_wait(
        '괴로운 듯 살짝 벌어진 입술에서 새는 숨소리를 들으면, 이 귀가 두 손에 어떻게 다뤄지고 싶어 하는지 충분히 알 수 있다.',
      );
    } else {
      await defender.say_and_wait('하아……❤️');
      await attacker.print_and_wait(
        '처음에는……그저 이 따뜻한 귀가 손에 너무 잘 감겨 놓을 수 없었을 뿐인데.',
      );
      await attacker.print_and_wait([
        '이윽고 깊이 잠든 ',
        a_call_d,
        '이(가) 무의식적으로 드러내는 사랑스러운 표정과 목소리를 가능한 한 많이 모으고 싶어진다.',
      ]);
      await attacker.print_and_wait('괜찮아……시간은 아직 많으니까.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pull_ear(attacker, defender, a_call_d) {
    const is_trainer = attacker.id === 0 && !attacker.race && attacker.race > 0;
    await attacker.print_and_wait('이건 좋지 않아……');
    await attacker.print_and_wait(
      is_trainer
        ? '……연인으로서도, 트레이너로서도 해서는 안 되는 일이야……'
        : '……연인으로서 해서는 안 되는 일이야……',
    );
    await attacker.print_and_wait('……하지만');
    await attacker.print_and_wait([
      '눈앞의 ',
      a_call_d,
      is_trainer
        ? '이(가) 무방비하게 괴로운 잠든 얼굴을 보이고 있으면, 트레이너 실격인 이 장난을 도저히 멈출 수 없다.'
        : '이(가) 무방비하게 괴로운 잠든 얼굴을 보이고 있으면, 이 장난을 도저히 멈출 수 없다.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_breast(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '조심할 필요는 없다. 호흡에 맞춰 얕게 오르내리는 가슴은 이 두 손에서 달아날 수 없으니까.',
      );
      await attacker.print_and_wait(
        '그러니 손가락을 마음껏 벌려, 틈새로 흘러넘칠 듯한 부드러움과 온기를 즐기면 된다.',
      );
      await attacker.print_and_wait(
        '입과 코까지 가까이 대고, 낮이라면 절대 허락되지 않을 젖내를 들이마셔도 거부당하지 않는다.',
      );
    } else {
      await attacker.print_and_wait([
        '꼴사납다. 잠든 ',
        a_call_d,
        '을(를) 아래에 누르고 두 손을 그 부드러움에 파묻은 채 빠져나오지 못하는 자신이.',
      ]);
      await attacker.print_and_wait([
        a_call_d,
        '의 찌푸려지는 눈썹도, 아래에서 열기를 더해 가는 부드러운 몸도 못 본 척한다……',
      ]);
      await attacker.print_and_wait(
        '이 움직임에는 허락도, 부끄러운 묵인조차도 없다……',
      );
      await attacker.print_and_wait('……큰일이다. 갑자기 더 흥분되기 시작했다.');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_nipple(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('으음……기분 탓인가……');
      await attacker.print_and_wait(
        '유두가 단단해지는 속도가 깨어 있을 때보다 느린 것 같다.',
      );
      await attacker.print_and_wait(
        '불평도 없고 본능적인 저항에 뿌리쳐질 일도 없다. 옅은 빛의 돌기를 위로 집어 올리는 두 손가락은 우아하고 능숙하다.',
      );
      await attacker.print_and_wait('어……그러니까……');
      if (!attacker.race && attacker.race > 0) {
        await attacker.print_and_wait([
          '아래에 있는 ',
          a_call_d,
          '이(가) 유두를 집혔을 때 어떤 야릇한 생각을 하는지 헤아리려 하며, 실격이나 다름없는 저속한 트레이너는 눈을 가늘게 뜨고 웃는다.',
        ]);
      } else {
        await attacker.print_and_wait([
          '아래에 있는 ',
          a_call_d,
          '이(가) 유두를 집혔을 때 어떤 야릇한 생각을 하는지 헤아리려 하며, ',
          attacker.get_colored_name(),
          ' ',
          '은(는) 눈을 가늘게 뜨고 웃는다.',
        ]);
      }
    } else {
      if (defender.sex_code === 1) {
        await attacker.print_and_wait(
          '눈앞의 음란한 유두는 끊임없는 애무에 단단하게 팽팽해져 있다.',
        );
        await attacker.print_and_wait(
          '몸까지 그렇게 굳히고 있으니 마치 이렇게 말하는 것 같다……',
        );
      } else {
        await attacker.print_and_wait('이대로 젖까지 짤 수 있겠는데……');
        await attacker.print_and_wait(
          '끊임없는 애무에 단단하게 팽팽해진 눈앞의 음란한 유두가 그런 생각을 들게 한다……',
        );
        await attacker.print_and_wait(
          '게다가 몸까지 그렇게 굳히고 있으니 마치 이렇게 말하는 것 같다……',
        );
      }
      await defender.used_to_say_and_wait(
        '여기는 만지면 안 되는 민감한 급소야!',
      );
      await attacker.print_and_wait('너무 귀여워ㅋㅋ');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_clitoris(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '기억하지 못할 테니 지금 돌아서면 아직 늦지 않았다……',
      );
      await attacker.print_and_wait([
        '눈앞의 요염한 광경을 몰래 눈에 담고, 서둘러 ',
        a_call_d,
        '의 옷을 여며 줄 수도 있다.',
      ]);
      await attacker.print_and_wait(
        '손가락으로 옅은 살점을 덮은 포피를 문질러 벌린다. 공기에 드러난 민감한 음핵이 사랑스러운 분홍빛에서 더욱 요염하게 충혈된 붉은빛으로 변하는 것을 지켜본다.',
      );
      await attacker.print_and_wait([
        '배덕감 어린 흥분에 몸을 미세하게 떠는 ',
        attacker.get_colored_name(),
        '은(는) 역시 계속하는 쪽을 택한다.',
      ]);
    } else {
      await defender.say_and_wait('으응……');
      await attacker.print_and_wait(
        '아아, 정신을 차리고 보니 이렇게 빨갛게 부어오른 가련한 모습이 되어 있었다.',
      );
      await attacker.print_and_wait([
        '가볍게 건드리고 조금 기다리면, 이 작고 민감한 돌기는 잠든 ',
        a_call_d,
        '의 순진한 몸을 더욱 흐트러지게 움직인다……',
      ]);
      await attacker.print_and_wait('사락사락……');
      await attacker.print_and_wait(
        '의식 없이 쾌감에만 이끌리는 몸이 시트에 비비며 괴로움을 달래려 한다.',
      );
      await attacker.say_and_wait('정말 미안해……', true);
      await attacker.say_and_wait(
        '하지만 한 번만 더 보여 줘. 마지막으로 한 번만.',
        true,
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   */
  async finger_fuck(attacker) {
    await attacker.print_and_wait('그렇구나……이런 거였구나……');
    await attacker.print_and_wait(
      '상상했던 것처럼 조이고 축축한 질의 살이 손끝을 밀어내려는 저항은 전혀 없다.',
    );
    await attacker.print_and_wait(
      '이성의 제지가 사라진 음부는 솔직하게, 얕게 들어온 손가락에 뜨겁게 입을 맞추고 있다.',
    );
    await attacker.print_and_wait(
      '위를 향해 굽히고, 아래로 문지르고, 질의 꿈틀거림에 맞춰 좌우로……',
    );
    await attacker.print_and_wait(
      '하아……다리를 그렇게 오므리면 계속할 수가 없잖아.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async prepare_virgin(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '숨길 필요도, 분명 얼굴을 붉힐 ',
      a_call_d,
      '의 기분을 헤아릴 필요도 없다.',
    ]);
    await attacker.print_and_wait(
      '지금 이 순간, 마음대로 할 수 있는 무방비한 몸이 눈앞에 있다.',
    );
    await attacker.print_and_wait(
      `할 일은 호흡에 맞춰 얕게 오르내리는 좁은 틈의 음부를 실컷 바라본 다음, 양손의 손끝에 조금 힘을 주어 ${defender.sex}를 더욱 요염하고 촉촉한 모양으로 벌리는 것뿐이다.`,
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async stimulate_g_spot_by_finger(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        defender.sex,
        '를 더 기분 좋게 해 주고 싶다.',
        defender.sex,
        '의 음부를 더 부드럽게 만들고 싶다. 이 아름다운 몸이 자신의 움직임에 더욱 정신없이 뒤틀리게 하고 싶다……',
      ]);
      await attacker.say_and_wait('하아……하아……');
      await attacker.print_and_wait(
        '손가락을 움직일 뿐인데도 머릿속에서 날뛰는 욕망이 숨을 거칠게 만든다.',
      );
      await attacker.print_and_wait('어디지……이제 가까울 텐데……');
      await defender.say_and_wait('………');
      await defender.say_and_wait('————❤️');
      await attacker.print_and_wait([
        '주변의 질벽보다 살짝 솟은 부분이 저절로 손가락을 끌어당기며 그 미세한 융기만이 지닌 열기와 끈적함을 전한다……정답임을 알려 준 것은 솔직해진 ',
        a_call_d,
        '이(가) 갑자기 치켜드는 아랫배였다.',
      ]);
      await attacker.print_and_wait('……찾았다.');
    } else {
      await attacker.print_and_wait('눌러 뭉갠다.');
      await attacker.print_and_wait('문지른다.');
      await attacker.print_and_wait('찌른다.');
      await attacker.print_and_wait('뭉툭한 손톱으로 더듬는다.');
      await attacker.print_and_wait(
        '의식이 없기에 언제, 어디를 만지든 땀에 젖어 부드러워진 몸은 손가락에 가장 솔직하고 격렬한 대답을 돌려준다.',
      );
      await attacker.print_and_wait('질리면 그만둘 거야……');
      await attacker.print_and_wait(
        '하지만 정말 그만둘 수 있는 때가 오기는 할까……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_anal(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait(
        '아아, 역시 잠들어 있어도 여기만큼은 유독 신경 쓰는구나……',
      );
      await attacker.print_and_wait([
        attacker.get_colored_name(),
        '의 손가락이 은근하게 다가가, 몸이 딱 경계할 정도의 거친 감촉으로 작은 구멍의 가장자리를 둥글게 어루만진다. ',
        a_call_d,
        '의 조금 전까지 느긋하던 두 다리가 황급히 침대 위에서 곧게 뻗으며 굳어진다.',
      ]);
    } else {
      await defender.say_and_wait('……❤️');
      await attacker.print_and_wait('마침내, 라고 해야 하나……?');
      await attacker.print_and_wait([
        '몸을 계속 굳히고 있을 수는 없어 은근한 애무에 녹아내린 ',
        a_call_d,
        '의 항문은 본인이 기억하지 못하는 사이에 조용히 풀리며, 무엇이든 삼킬 듯한 성애의 구멍으로 변해 간다.',
      ]);
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   */
  async prepare_anal(attacker) {
    await attacker.print_and_wait([
      '눈앞에서 벌어졌다 닫히는 구멍이 내뿜는 유혹의 열기를 손바닥으로 받으며, ',
      attacker.get_colored_name(),
      '의 네 손가락은 말뚝처럼 수줍어하는 살구멍이 닫히지 못하게 하고, ',
      attacker.get_colored_name(),
      '의 시선에서 달아나려는 엉덩이 살을 고정한다.',
    ]);
    await attacker.print_and_wait(
      '유독 길고 굵은 가운뎃손가락만은 다른 할 일이 있다. 전갈의 꼬리처럼 살짝 굽혀 항문에 조금씩 다가갔다가, 천천히 그러나 단호하게 들어간다.',
    );
    await attacker.print_and_wait('저항이 거세다.');
    await attacker.print_and_wait([
      '스스로 꿈틀거리는 구멍의 살은 생물처럼 숨 쉬며 ',
      attacker.get_colored_name(),
      '의 손가락을 거부한다. 옆의 음부처럼 성애를 위해 존재하는 음란한 살도 아닌데, 지금 ',
      attacker.get_colored_name(),
      '의 손가락에는 뜻밖일 만큼 적극적이다.',
    ]);
    await attacker.print_and_wait('겁내는 걸까……기뻐하는 걸까……?');
    await attacker.print_and_wait(
      '아쉽게도 지금은 여주인공의 입으로 대답을 들을 수 없다……',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   */
  async pet_leg(attacker, defender, is_first) {
    if (is_first) {
      if (attacker.id === 0 && defender.race > 0) {
        await attacker.print_and_wait(
          '트레이너로서 눈앞에 있는 담당의 두 다리를 성적인 의미로 바라보고 어루만진다……',
        );
        await attacker.print_and_wait(
          '지금 하는 일을 절제된 말로 표현하기만 해도 몸을 식히는 배덕감이 오한이 되어 온몸을 달린다.',
        );
        await attacker.print_and_wait(
          '훈련이 끝난 뒤 상태를 살피려고 손을 대는 친밀함은 이따금 있었을 텐데……',
        );
        await attacker.print_and_wait(
          '이상하게도 지금 머릿속에서는 이 두 다리와 「레이스」를 연결할 수가 없다.',
        );
      }
      await attacker.print_and_wait('지금 자신의 머릿속에 있는 것은……');
      await attacker.print_and_wait(
        '이 다리를 교차해 허리에 감으면 분명 견딜 수 없을 것이라는 생각이다.',
      );
      await attacker.print_and_wait('하아……지금 잠들어 있어서 다행이야.');
    } else {
      await attacker.print_and_wait('부드럽고 탄력 있다.');
      await attacker.print_and_wait('곡선은 우아하고 길다.');
      await attacker.print_and_wait(
        '손가락의 애무에 떨릴 만큼 감도도 최상이다.',
      );
      if (defender.race > 0) {
        await attacker.print_and_wait('아깝네……');
        await attacker.print_and_wait(
          '이런 두 다리가 레이스만을 위해 있다니……',
        );
      }
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pet_tail(attacker, defender, a_call_d) {
    await attacker.print_and_wait('이건……곤란하네……');
    await attacker.print_and_wait([
      '눈앞의 감촉 좋은, ',
      a_call_d,
      '의 체향을 잔뜩 머금은 꼬리털만을 두고 하는 말이 아니다.',
    ]);
    await attacker.print_and_wait([
      '잠든 ',
      a_call_d,
      '을(를) 침대 위에서 뒤집어 엉덩이를 들게 하고 옷까지 벗겨, ',
      defender.teen_sex_title,
      '의 은밀한 곳을 이렇게 난폭한 방식으로 마음껏 바라보는 자신을 두고 하는 말이다……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async pull_tail(attacker, defender, a_call_d) {
    await defender.say_and_wait('응——');
    await attacker.print_and_wait(
      '힘을 조금만 더 주면 엉덩이가 올라가고, 여기서 손을 놓으면 허리까지 내려앉는다……',
    );
    await attacker.print_and_wait([
      '이봐……지금 내 앞에서 어떤 움직임을 보여 주는지 알고 있어, 가련한 ',
      a_call_d,
      '？',
    ]);
    await attacker.print_and_wait('동시에 묘하게 아쉬운 기분도 든다.');
    await attacker.print_and_wait('그야……');
    await attacker.say_and_wait(
      [a_call_d, '이라면 이 조금 거친 장난에 더 많이 반응해 줄 텐데……'],
      true,
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async cunnilingus(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait([
        '이성에 지배당하지 않기에, 뜨거운 숨결을 머금은 입술이 다가와도 아무것도 몰라 두려움도 없는 ',
        a_call_d,
        '의 음부는 아랫배의 오르내림에 맞춰 얕게 숨 쉴 뿐이다.',
      ]);
      await attacker.print_and_wait(
        '심장을 빠르게 뛰게 하는 냄새……혀끝에서 온몸으로 녹아드는 새콤달콤한 비릿함……',
      );
      await attacker.print_and_wait(
        '휘파람을 불 듯 오므린 입술 모양에 말려 질 안으로 천천히 나아가는 혀와, 따뜻한 애무에 서툴게 꿈틀거리며 저항하는 구멍……',
      );
      await attacker.print_and_wait([
        '두 사람의 숨소리 속에서 혼자만 보는 음란한 광경을 독차지한 ',
        attacker.get_colored_name(),
        '의 혀끝은 조금씩, 부지런히 앞으로 나아간다.',
      ]);
    } else {
      await attacker.print_and_wait(
        '처음 좁은 틈으로 닫혀 있던 청초한 모양은 이제 잘 떠오르지도 않는다. 맞이하러 온 혀에 안팎까지 젖은 구멍은 지금 밖으로 벌어진 채 미세하게 떨고 있다……',
      );
      await attacker.print_and_wait(
        '침대 위에서 느슨하게 벌어져 있던 양발은 사타구니의 축축한 쾌감에 어떻게 반응해야 할지 몰라, 떨리는 채로 못된 이의 어깨를 세게 감싼다.',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('눈앞의 광경은 정말 죄책감이 들게 한다……');
      await attacker.say_and_wait([
        '하아……',
        a_call_d,
        '이(가) 잠든 틈을 타 손을 댄 자신은……정말……',
      ]);
      if (defender.race > 0 && attacker.sex_code !== 1) {
        await attacker.print_and_wait([
          '우마무스메와 육봉. 거의 어울릴 일 없을 두 단어가 지금 ',
          attacker.get_colored_name(),
          '의 입술에서 끈적하게 이어지고 있다……',
        ]);
      }
      await attacker.print_and_wait([
        '잠들어 있어도 봉사에 맞춰 허리를 들어 올릴 정도의 본능은 있다. ',
        attacker.get_colored_name(),
        '의 양 입술은 스스로 움직이는 육봉에 억지로 벌어진다. 원래 영양을 섭취할 곳을 단단히 일어선 위험한 물건이 차지한 채, 몸을 이상하게 만드는 저속한 냄새를 제멋대로 뿌리고 있다.',
      ]);
      await attacker.print_and_wait(
        '눈앞의 잠든 얼굴에 더욱 부끄러워지는가……물론 그렇다.',
      );
      await attacker.print_and_wait(
        '하지만 그렇기에 멈출 수 없는 욕망도 있다……',
      );
    } else {
      await attacker.say_and_wait('츄릅츄릅～');
      await attacker.print_and_wait('어느새 조금 능숙해졌다……');
      await attacker.print_and_wait(
        '고개를 조금 젖히면 눈앞의 육봉을 더 깊이 물 수 있다……',
      );
      await attacker.print_and_wait(
        '눌린 혀로 옆에서 살짝 핥으면 기분 좋은 듯 떨린다.',
      );
      await attacker.print_and_wait('입술을 잘 쓰면……빨아들여서……');
      await attacker.print_and_wait(
        '콜록……짙게 밀려드는 부끄러운 냄새에 머리가 어질어질하다……',
      );
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async deep_blow_job(attacker, defender, a_call_d) {
    await attacker.say_and_wait('더 깊이……');
    await attacker.print_and_wait([
      '탐욕스러운 잠꼬대를 흘리며 쾌감을 찾는 본능에 지배당한 ',
      attacker.get_colored_name(),
      '은(는) 고개를 숙인다.',
    ]);
    await attacker.say_and_wait('츄릅츄릅……');
    await attacker.print_and_wait([
      '……이렇게 ',
      attacker.get_colored_name(),
      '의 작은 입은 이 순간부터 영양 섭취 이외의 의미를 부여받고, 끈적한 소리를 내며 육봉에 달라붙는 저속한 성기로 타락했다. 이제 돌이킬 수 없다❤️',
    ]);
    await attacker.print_and_wait(
      '목구멍의 부드러운 살로 귀두를 맞이하고, 능숙한 혀끝으로 육봉의 충혈된 혈관을 어루만지며, 빈틈없이 조여 육봉을 받친다……',
    );
    await attacker.print_and_wait([
      '무엇을 배우고, 무엇을 기억하며, 어떤 모습이 되어 갈까……지금 ',
      a_call_d,
      '의 곁에 웅크린 ',
      attacker.get_colored_name(),
      '은(는)……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async force_deep_blow_job(attacker, defender) {
    await attacker.print_and_wait('눈앞의 광경은 정말 죄책감이 들게 한다……');
    if (defender.sex_code === 0 && defender.race > 0) {
      await attacker.print_and_wait(
        '우마무스메와 육봉. 거의 어울릴 일 없을 두 단어가 지금 끈적하게 이어지고 있다……',
      );
    }
    await attacker.print_and_wait([
      defender.teen_sex_title,
      '의 양 입술은 육봉에 억지로 벌어진다. 원래 영양을 섭취할 곳을 단단히 일어선 위험한 물건이 차지한 채, 몸을 이상하게 만드는 저속한 냄새를 제멋대로 뿌리고 있다.',
    ]);
    await attacker.print_and_wait(
      '눈앞의 잠든 얼굴에 더욱 가엾은 마음이 드는가……물론 그렇다.',
    );
    await attacker.print_and_wait('하지만 그렇기에 멈출 수 없는 욕망도 있다……');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async hand_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '잠든 ',
      a_call_d,
      '은(는) 아무 말도 하지 않는다. 그래도 눈앞에서 빨갛게 부풀어 충혈된 육봉을 바라보는 ',
      attacker.get_colored_name(),
      '의 이미 따뜻해지기 시작한 열 손가락은 자신이 무엇을 해야 하는지 완전히 알고 있다.',
    ]);
    await defender.say_and_wait('응——');
    await attacker.print_and_wait([
      '그 뜨거움에 놀라 ',
      attacker.get_colored_name(),
      '이(가) 육봉에 댄 손이 본능적으로 뒤로 물러난다. 그러고는 겨울에 양발을 이불 속에 넣듯 조금씩 다시 가까이 간다.',
    ]);
    await attacker.print_and_wait(
      '상당히 흉악하다……여자의 아랫배를 들썩이게 만드는 모양인데……',
    );
    await attacker.print_and_wait(
      '그런데……손가락으로 고리를 만들어 가볍게 훑으면 손가락 사이에서 쿠퍼액이 춤추는 모습은……조금 귀엽다.',
    );
    await defender.say_and_wait('하아……하아……응——');
    await attacker.print_and_wait('무슨 뜻인지 알 것 같아……');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {boolean} is_first 連続行動の初回か
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async hand_and_blow_job(attacker, defender, is_first, a_call_d) {
    if (is_first) {
      await attacker.print_and_wait('뭔가');
      await attacker.print_and_wait('뜻밖일 만큼 자연스러운 움직임이다……');
      await attacker.print_and_wait(
        '양손으로 육봉을 받친 뒤 머리는 어느새 가까이 다가간다.',
      );
      await attacker.print_and_wait(
        '손가락의 체온으로 데우고 문질러 벌린 다음……',
      );
      await attacker.say_and_wait('쪽～');
      await attacker.print_and_wait('너무 진해……');
      await attacker.print_and_wait(
        '완전히 몰래 훔쳐 먹는 호색한이 되어 버렸다……',
      );
    } else {
      await attacker.print_and_wait(
        '육봉을 옆으로 당겨 얼굴을 기울이고 위에서 아래까지 정성껏 핥는다. 모서리가 녹아 떨어지는 아이스크림을 다루듯이.',
      );
      await attacker.say_and_wait('츄릅츄릅——');
      await attacker.print_and_wait([
        a_call_d,
        '의 귀두는 윤기 있게 빛난다. 그 젖은 흔적은 어느 쪽이 얼마나 잘못한 탓일까……',
      ]);
      await attacker.print_and_wait('이제……전혀 모르겠어……❤️');
    }
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async fuck_tit(attacker, defender, a_call_d) {
    await attacker.print_and_wait('멋지다고 생각하지 않아?');
    await attacker.print_and_wait([
      '자신의 아래에서 고개를 숙인 ',
      a_call_d,
      '이(가) 손으로 ',
      defender.teen_sex_title,
      '만의 부드러움을 바쳐 뜨거운 육봉을 감싸는 모습……',
    ]);
    await defender.say_and_wait('으응……');
    await attacker.print_and_wait(
      '제대로 전해지는 모양이다. 육봉의 귀두에서 피어오르는 애욕을 가득 실은 뜨거운 흰 김이.',
    );
    await attacker.print_and_wait(
      '숨기려 드는 깨어 있을 때보다, 완전히 무방비한 잠든 얼굴은 너무나 솔직해 흥분된다.',
    );
    await attacker.print_and_wait(
      '응, 충분히 맛있는 표정이 되도록 열기가 배어 있었다.',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async tit_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait(
      '그런 요구를 들은 것도 아닌데 스스로 윗옷을 내려 가슴을 드러냈다……',
    );
    await attacker.say_and_wait(
      '나는 대체 육봉에 어디까지 굴복할 셈인가……',
      true,
    );
    await attacker.print_and_wait(
      '부드러움에 감싸인 육봉은 음부를 손쉽게 떨리게 만드는 모양으로 당당하게 솟아 있다.',
    );
    await attacker.print_and_wait([
      '양손으로 가슴을 모은 채 얼굴을 들지 못하는 ',
      attacker.get_colored_name(),
      '은(는) 깨어 있었다면 ',
      a_call_d,
      '이(가) 어떤 얼굴을 할지 상상한다.',
    ]);
    await attacker.print_and_wait([
      '어떤 얼굴을 예상한 것인지, 조용한 방 안에서 ',
      attacker.get_colored_name(),
      '의 가슴이 두근두근 울린다.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async tit_and_blow_job(attacker, defender) {
    await attacker.print_and_wait([
      defender.race > 0
        ? '가슴 사이에 낀 육봉을 기분 좋게 세우는 것만으로는 부족한 걸까……평소 담당을 대체 어떤 눈으로 보는 것인가……'
        : '가슴 사이에 낀 육봉을 기분 좋게 세우는 것만으로는 부족한 걸까……평소 동료를 대체 어떤 눈으로 보는 것인가……',
    ]);
    await attacker.say_and_wait('츄릅츄릅츄릅……');
    await attacker.print_and_wait([
      '가슴 살은 육봉의 기둥에 떨어진 쿠퍼액으로 미끄러워져 윤기 있게 빛난다. 애쓰는 가슴보다 가장 뜨겁게 부푼 귀두를 ',
      attacker.get_colored_name(),
      '은(는) 양손으로 입에 맞이한다.',
    ]);
    await defender.say_and_wait('으응……');
    await attacker.print_and_wait(
      '혀가 말을 듣지 않게 된다. 입 위의 귀두가 조금이라도 외로워 보이면 유두를 모아 육봉에 봉사하는 움직임을 멈출 수 없다……',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   */
  async suck_nipple(attacker, defender) {
    await attacker.print_and_wait([
      '그 ',
      era.get(`talent:${defender.id}:乳头类型`) > 0
        ? '옅은 빛의 예쁜 유두'
        : '갈색의 예쁜 유두',
      '를 가까이 오는 ',
      attacker.get_colored_name(),
      '에게서 피하려는 본능은 전혀 없다. 얕게 오르내리는 ',
      defender.teen_sex_title,
      '의 부드러움은 못된 이의 입에 순순히 들어간다.',
    ]);
    await attacker.say_and_wait('스읍——');
    await attacker.print_and_wait([
      '이윽고 혀끝에서 스스로 열을 띠는 붉은 점이 단단하게 남고, ',
      attacker.get_colored_name(),
      '은(는) 조심스럽게 이 사이에 그 살점을 문 뒤 후욱 빨아들인다——',
    ]);
    await defender.say_and_wait('응——');
    await attacker.print_and_wait('하아……이제 저항하려 해도 늦었어ㅋㅋ');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async bite_nipple(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '단단한 젖꼭지를 이 사이에 문 순간, 똑바로 누워 있던 ',
      a_call_d,
      '의 몸이 단번에 굳어진다.',
    ]);
    await attacker.print_and_wait('어……그렇구나……');
    await attacker.print_and_wait(
      `이를 부드럽게 써서 민감한 유두 둘레에 불규칙한 붉은 자국을 남긴다……그러면서 품 안의 ${defender.teen_sex_title}의 몸을 끊임없이 떨리게 한다……`,
    );
    await attacker.print_and_wait([
      '다음에 무엇을 할지 안 모양이다. 유두를 혀로 정성껏 핥아 적신 순간, ',
      a_call_d,
      '의 두 다리가 ',
      attacker.get_colored_name(),
      '의 허리에 감긴다……',
    ]);
    await defender.say_and_wait('응——');
    await attacker.print_and_wait('귀여워.');
    await attacker.print_and_wait([
      '품 안의 ',
      a_call_d,
      '뿐만이 아니다. 빨갛게 부은 자국이 남은 유두도.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async force_armpit_intercourse(attacker, defender, a_call_d) {
    await attacker.print_and_wait([
      '잠든 ',
      a_call_d,
      '의 무방비한 손이 성욕에 머리가 흐려진 ',
      attacker.get_colored_name(),
      '에게 곧게 위로 들린다.',
    ]);
    await attacker.print_and_wait([
      '그러고는 ',
      a_call_d,
      '의 겨드랑이를 육봉의 커다란 귀두가 책임지듯 꼼꼼히 훑는다.',
    ]);
    await attacker.print_and_wait(
      '김이 피어오르는 겨드랑이 살은 드나드는 움직임에 맞춰 붉은빛을 띤다. 정말 성과 관련된 음란한 기관이 된 듯하다……',
    );
    await attacker.print_and_wait([
      '아직 그것을 완전히 당연하게 여기지는 못한다. ',
      attacker.get_colored_name(),
      '의 움직임에는 얼마간 망설임이 있다……',
    ]);
    await attacker.print_and_wait([
      '……망설이면서도 등을 돌린 ',
      a_call_d,
      '의 겨드랑이 틈에 육봉을 문지르며 드나든다……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async force_foot_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait('후……완전히 말 그대로 변태네.');
    await attacker.print_and_wait([
      '잠든 ',
      a_call_d,
      '의 양발을 손으로 받쳐 자신의 육봉에 봉사시킨다. 의식 없는 ',
      a_call_d,
      '이(가) 곧장 혐오의 눈길을 보낼 수 없다는 걸 알기에 낼 수 있는 용기일까……',
    ]);
    await attacker.print_and_wait([
      '처음 낯선 열기에 닿은 양발은 겁먹고 달아나려 했지만, ',
      attacker.get_colored_name(),
      '의 양손에 다시 끌려온다.',
    ]);
    await attacker.print_and_wait('그러고는 알아차린 모양이다.');
    await attacker.print_and_wait(
      '자신의 발바닥을 침범하는 이 육봉이 나약한 물건은 아니라는 것을.',
    );
    await attacker.print_and_wait([
      a_call_d,
      '이(가) 육봉을 밟는 움직임은 한결 자연스러워졌다.',
    ]);
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      '의 육봉을 발바닥으로 밟는 것이 타고난 재능인 것처럼.',
    ]);
    await attacker.print_and_wait('읏……');
    await attacker.print_and_wait([
      '그 생각만 했는데도 ',
      attacker.get_colored_name(),
      '의 아랫배는 다시 뜨거워진다.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   */
  async foot_job(attacker) {
    await attacker.print_and_wait(
      '침대 위에 일어서자 시야 속에서 작아진 육봉까지 퍽 귀여워 보인다.',
    );
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      '은(는) 발을 들어 빨갛게 부푼 육봉을 발밑에 짓누른다.',
    ]);
    await attacker.print_and_wait(
      '어……이렇게 강한 육봉도 발바닥에 밟히면 이렇게 귀엽게 흔들리는구나ㅋㅋ',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async tail_job(attacker, defender, a_call_d) {
    await attacker.print_and_wait('능숙하네……');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      '의 예상을 뛰어넘는 민첩함으로 굽은 털결의 말꼬리가 육봉을 감싼다.',
    ]);
    await attacker.print_and_wait([
      '머리가 어질어질할 만큼 짙은 육봉의 냄새는 꼬리에 가려지지만, 그것이 오히려 ',
      a_call_d,
      '의 육봉을 어느 때보다 흥분시킨다.',
    ]);
    await attacker.print_and_wait([
      '그렇구나……',
      defender.uma_sex_title,
      '들의 꼬리로 정말 이런 것도 할 수 있구나……',
    ]);
    await attacker.print_and_wait([
      '……이 날뛰는 열기를 느끼며 등을 돌리고 엉덩이를 든 ',
      attacker.get_colored_name(),
      '의 붉어진 귀가 움직이는 모습까지 사랑스러워진다.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {boolean} is_vagina 性交か尻穴か
   */
  async missionary(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait(
      '이게……서로의 체온을 가장 잘 느낄 수 있는 자세겠지.',
    );
    await attacker.print_and_wait([
      '이른바 정상위, 또는 미셔너리. 서로 얽힌 두 사람을 앞에서 보면 ',
      attacker.get_colored_name(),
      '이(가) 품에 파고들어 모유를 빠는 모습처럼도 보인다.',
    ]);
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      '의 몸이 ',
      a_call_d,
      '의 몸을 덮고, 단단한 육봉이 거침없이 ',
      is_vagina ? '음부' : '항문',
      '에 들어간다. 의식 없는 ',
      a_call_d,
      '의 길고 가늘게 단련된 다리는 조금 꼴사나운 자세로 ',
      attacker.get_colored_name(),
      '의 허리 양옆에서 뻗어 나와 발바닥이 하늘을 향하도록 팽팽하게 굳는다……',
    ]);
    await attacker.print_and_wait([
      '믿기지 않을 만큼 순종적으로 ',
      a_call_d,
      '의 몸은 사뿐히 자신의 품 안으로 파고든다.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async doggy_style(attacker, defender, a_call_d) {
    await attacker.print_and_wait('강아지처럼……');
    await attacker.print_and_wait(
      '저 두 다리……앞발바닥을 쭉 펴고 무릎을 굽혀, 젖은 허리를 높이 치켜든 두 다리……',
    );
    await attacker.print_and_wait(
      '그 위에 받쳐져 있는 것은……강아지처럼 무의식적으로 흔들리는 엉덩이.',
    );
    await attacker.print_and_wait([
      '조금 아쉽다. ',
      a_call_d,
      '이(가) 아직 깨어나지 못했기에 이 자세는 온전히 허리를 끌어안은 ',
      attacker.get_colored_name(),
      '의 두 손에 의지하고 있다.',
    ]);
    await attacker.print_and_wait([
      '선정적인 모습 그대로 인형처럼 침대에서 안아 올려진 ',
      a_call_d,
      '의 몸은 떨림을 멈추지 않는다. 보고 있으면 마른 입술을 핥지 않을 수 없다.',
    ]);
    await attacker.print_and_wait('완전히 일방적인 난폭한 짓 같아……');
    await attacker.print_and_wait('하지만……그거면 돼……');
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async stimulate_g_spot(attacker, defender, a_call_d) {
    await attacker.print_and_wait('더 깊이.');
    await attacker.print_and_wait([
      a_call_d,
      '의 애원은 들리지 않으니, 육봉이 뿌리까지 잠기도록 마음껏 집어넣고 잠든 ',
      a_call_d,
      '을(를) 자신의 몸에 파고들게 할 수 있다.',
    ]);
    await attacker.print_and_wait([
      '만족을 모르는 ',
      attacker.get_colored_name(),
      '은(는) 서로의 거리가 사라져도 망설이지 않는다. 다리 사이의 육봉이 젖힌 허리와 함께 단단하게 앞으로 나아가, 여자의 입술도 음부도 자궁도 거기에 홀린 신음을 내게 한다……',
    ]);
    await defender.say_and_wait('————❤️❤️');
    await attacker.print_and_wait(
      '이른바 G스폿이란 이런 것이다. 그전까지 어떤 여자였든, 상냥했든 명랑했든, 수컷 냄새를 머금은 단단한 육봉이 그 주름을 밀어 벌리면 단번에 성애에 홀린 저속한 암컷으로 타락한다.',
    );
    await attacker.print_and_wait(
      '균형 잡힌 몸은 육봉의 충돌에 웅크러지고, 목에는 탁한 음란한 소리만 남으며, 바로 가까이에 있는 자궁만 뜨겁게 맥동한다.',
    );
    era.println();
    await attacker.print_and_wait(
      '…………하지만 여자가 잠든 틈에 몰래 육봉과 쾌감으로 몸을 길들이는 이런 방식은……',
    );
    await attacker.say_and_wait(
      '하는 사람이 자신이라 해도 비겁하다고 인정할 수밖에 없다❤️',
    );
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   */
  async stimulate_womb(attacker, defender, a_call_d) {
    await attacker.print_and_wait('육봉 없이 음부를 기분 좋게 만드는 마법.');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      '은(는) 자신만만하게 웃으며 다섯 손가락을 벌려 넓은 손바닥으로 아랫배를 덮는다.',
    ]);
    await attacker.print_and_wait('분명 따뜻한 감촉이다. 하지만……');
    await defender.say_and_wait('으홋, 응——');
    await attacker.print_and_wait('꼴사나운 소리가 갑자기 새어 나왔다——');
    await attacker.print_and_wait([
      defender.get_colored_name(),
      '의 평온한 잠든 숨소리가 갑자기 다급하게 빨라진다.',
    ]);
    await attacker.print_and_wait([
      '파묻힐 것 같아……',
      attacker.get_colored_name(),
      '의 손바닥이……',
    ]);
    await attacker.print_and_wait('대조적으로 자궁만이 두근두근 흥분한다……');
    await attacker.print_and_wait([
      attacker.get_colored_name(),
      '의 마술 같은 손에 붙잡힌 듯……',
    ]);
    await defender.say_and_wait('————❤️');
    await attacker.print_and_wait([
      '깨어난 뒤에도 ',
      a_call_d,
      '은(는) 두 다리를 끊임없이 떨리게 하는 이 쾌감을 떠올릴 수 있을 것이다.',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {boolean} is_vagina 性交か尻穴か
   */
  async cowgirl(attacker, defender, a_call_d, is_vagina = true) {
    await attacker.print_and_wait('삼켜 버렸어……');
    await attacker.print_and_wait([
      '똑바로 누운 ',
      a_call_d,
      '과(와) 마음 가는 대로 열 손가락을 깍지 끼고, ',
      attacker.get_colored_name(),
      '의 조이고 탄력 있는 매끄러운 두 다리가 아래로 내려앉는다. 구멍 입구로 문지르며 육봉의 커다란 귀두를 받아들일 틈을 찾는다……',
    ]);
    if (!is_vagina) {
      await attacker.print_and_wait('여기는 몰래……항문으로……❤️');
    }
    await attacker.print_and_wait([
      '이번에는 ',
      a_call_d,
      '의 느리고 다정한 움직임을 기다리지 않아도 된다. 조이는 질에 삼켜진 육봉이 민감한 질벽을 살짝 찌르기만 해도 달아날 곳 없는 ',
      attacker.get_colored_name(),
      '의 허리는 태엽이 감긴 것처럼 쉬지 않고 ',
      a_call_d,
      '의 앞에서 춤추기 시작한다……',
    ]);
  },
  /**
   * @author O口口口口口
   * @param {CharaTalk} attacker 主動側
   * @param {CharaTalk} defender 受動側
   * @param {PrintedSpan} a_call_d 主動側から受動側への呼び方
   * @param {boolean} is_vagina 性交か尻穴か
   */
  async stimulate_glans_by_hole(
    attacker,
    defender,
    a_call_d,
    is_vagina = true,
  ) {
    await attacker.print_and_wait('솔직히……지금 이것만으로도 승천할 것 같아……');
    await attacker.print_and_wait([
      '엉망이다……범해지고 있는 ',
      is_vagina ? '음부' : '항문',
      '의 상태도, 너무 기분 좋아 어쩔 줄 모르는 몸도……',
    ]);
    await attacker.print_and_wait([
      '게다가 ',
      attacker.get_colored_name(),
      '을(를) 이렇게 만드는 것은 잠에 취해 몽롱한 ',
      a_call_d,
      '의 육봉뿐이라는 건가❤️',
    ]);
    await attacker.print_and_wait('하아……깊게 빨아들이면……');
    await attacker.print_and_wait([
      '「쪽」 하고 오므라들었다. 일 초도 버티지 못하고 몸이 경련하며 무너져 내렸지만, 그 찰나에 ',
      attacker.get_colored_name(),
      '의 ',
      is_vagina ? '음부' : '항문',
      '은(는) 정을 담아 ',
      a_call_d,
      '의 귀두에 입을 맞췄다.',
    ]);
    await attacker.print_and_wait(
      '하아……귀두가 맥동하고 있어. 기뻐하는 거겠지……',
    );
    await attacker.print_and_wait([
      a_call_d,
      '에게 올라타 자세로는 주도권을 쥐고 있을 텐데도 ',
      attacker.get_colored_name(),
      '의 얼굴은 지금 동요로 붉게 물들어 있다.',
    ]);
  },
};
