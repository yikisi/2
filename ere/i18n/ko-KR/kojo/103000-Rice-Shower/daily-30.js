/**
 * @file ライスシャワー - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /** @param {CharaTalk} rice ライスシャワー */
  good_morning(rice) {
    const buffer = [];
    if (era.get('cflag:30:节日事件标记') === 1) {
      buffer.push(
        () => rice.say('곧 무슨 행사가 열리나 봐…… 어떤 걸 하게 될까?'),
        () =>
          rice.say(
            '지금 행사가 열리고 있나 봐…… 라이스, 폐 끼치지 않도록 할 테니까…… 살짝 구경하러 가도 될까……?',
          ),
      );
    } else {
      buffer.push(
        () => rice.say('부디…… 라이스를 잘 지켜봐 줘.'),
        () => rice.say('라이스도…… 분명 빛날 수 있을 거야……'),
      );
      if (!era.get('status:30:熬夜')) {
        buffer.push(
          () => {
            rice.say('어젯밤에 정말 멋진 꿈을 꿨어……!');
            rice.say('오라버니와 함께, 찬란한 별빛이 쏟아지는 초원에서……');
            rice.say('원래는 같이 훈련을 하려고 했는데……');
            rice.say('별이 너무 예뻐서, 도중에 같이 별을 보기로 했어.');
            rice.say('그래서, 일찍 일어나서 제대로 훈련해야겠다고 생각했어!');
          },
          () => {
            rice.say('라이스, 꽃집에 다녀왔어.');
            rice.say(
              '시원한 가게 안에서 꽃들에 둘러싸여 있으니 마음이 정말 차분해졌어.',
            );
            rice.say('후후~ 그러니까 오늘 훈련도 라이스, 열심히 할게!');
          },
        );
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {CharaTalk} you プレイヤー
   * @param {boolean} awake ライスが起きているか
   */
  select(rice, you, awake) {
    if (!awake) {
      era.print([
        rice.get_colored_name(),
        '는 그림책보다 더 예쁜 미소를 지으며 깊이 잠들어 있다.',
      ]);
    } else {
      const buffer = [];
      if (era.get('cflag:30:节日事件标记') === 1) {
        buffer.push(
          () => rice.say('곧 무슨 행사가 열리나 봐…… 어떤 걸 하게 될까?'),
          () =>
            rice.say(
              '지금 행사가 열리고 있나 봐…… 라이스, 폐 끼치지 않도록 할 테니까…… 살짝 구경하러 가도 될까……?',
            ),
        );
      } else {
        buffer.push(
          () =>
            era.print([
              rice.get_colored_name(),
              '는 정전기에 깜짝 놀라 귀를 쓰다듬고는 ',
              you.get_colored_name(),
              '의 지시를 조용히 기다렸다.',
            ]),
          () =>
            era.print([
              rice.get_colored_name(),
              '는 앞머리를 옆으로 넘기고 생기 어린 눈으로 ',
              you.get_colored_name(),
              '의 시선과 마주쳤다.',
            ]),
        );
      }
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async office_study(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '라이스가 고른 그림책이야. ',
          callname,
          ', 한번 읽어 봐.',
        ]),
      () =>
        rice.say_and_wait([callname, ', 레이스에 관한 건 뭐든 잘하는구나……']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async talk(rice, callname) {
    const buffer = [];
    if (era.get('base:30:体力') < era.get('maxbase:30:体力') / 3) {
      buffer.push(
        () => rice.say_and_wait('후우…… 어쩐지 조금 지친…… 것 같아……'),
        () => rice.say_and_wait('라이스는 괜찮아! 지치거나 하진…… 않았어……'),
      );
    } else if (era.get('cflag:30:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:30:干劲')) {
        case -2: //やる気極悪
          buffer.push(
            () =>
              rice.say_and_wait([
                '아우우! ',
                callname,
                '에게 폐를 끼치고 싶지 않았는데…… 미안해……',
              ]),
            () =>
              rice.say_and_wait('라이스…… 또 못난 아이로 돌아가 버리는 걸까……'),
          );
          break;
        case -1: //やる気不調
          buffer.push(
            () => rice.say_and_wait('응, 응…… 힘내라, 라이스…… 힘내……'),
            () => rice.say_and_wait('라이스가 도와줄 일은 없을까……'),
          );
          break;
        case 0: //やる気普通
          buffer.push(
            () => rice.say_and_wait('어떤 훈련을 할까?'),
            () => rice.say_and_wait('라이스, 실망시키지 않도록 열심히 할게.'),
          );
          break;
        case 1: //やる気好調
          buffer.push(
            () => rice.say_and_wait('힘낼게—! 오늘도 잘 부탁해.'),
            () =>
              rice.say_and_wait([
                callname,
                ', 훈련을 시작할까? 지금의 라이스라면 많이 해낼 수 있을 것 같아.',
              ]),
          );
          break;
        case 2: //やる気絶好調
          buffer.push(
            async () => {
              await rice.say_and_wait(
                '라이스, 지금이라면 정말 정말 열심히 할 수 있어!',
              );
              await rice.say_and_wait(['라이스를 믿어 줘, ', callname, '.']);
            },
            async () => {
              await rice.say_and_wait('저기, 라이스는 준비 운동 다 끝났어.');
              await rice.say_and_wait('그러니까 지금부터 뭘 해도 괜찮아.');
            },
          );
      }
    } else {
      buffer.push(
        () =>
          rice.say_and_wait(
            '매일 아주 조금씩이지만, 되고 싶은 모습에 가까워지는…… 기분이 들어.',
          ),
        () =>
          rice.say_and_wait([
            callname,
            '……저기, 말해도 될까…… 라이스는 매일 노력하고 있어…… 라이스도 달라질 수 있다고 믿어 줘.',
          ]),
        () =>
          rice.say_and_wait(
            '지금은 말이야…… 라이스, 예전만큼 자신이 싫지는 않아.',
          ),
        () =>
          rice.say_and_wait([
            '……저기, ',
            callname,
            '……오늘도 라이스를 자, 잘 돌봐 줄 거지……?',
          ]),
        () =>
          rice.say_and_wait([
            '사…… 사실 라이스, 초콜릿을 만들었어…… 라이스가 만든 초콜릿, 먹어 줄래……? 받아 준다면 라이스, 기쁠 거야.',
          ]),
        () =>
          rice.say_and_wait(
            '별님은 모두의 소원을 이루어 주고, 모두를 행복하게 해 줘. 정말 대단해. 라이스도…… 힘내야지.',
          ),
        () =>
          rice.say_and_wait([
            callname,
            '을(를) 만나고 나서 매일이 눈 깜짝할 사이에 지나가…… ',
            '라이스, 힘낼게!',
          ]),
        () => rice.say_and_wait('라이스한테 교복, 잘 어울려?'),
        () => rice.say_and_wait('그렇게 계속 바라보면…… 조금 부끄러워.'),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} rice ライスシャワー */
  async office_cook(rice) {
    const buffer = [
      () => rice.say_and_wait('에헤헤, 신혼부부 같네.'),
      () =>
        rice.say_and_wait('의외야? 라이스는 잘 먹는 편이라서 엄마한테 배웠어.'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async office_rest(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          callname,
          ', 저기…… 무릎베개…… 와앗, 라이스가 ',
          callname,
          '에게 해 주겠다는 뜻이야……',
        ]),
      () =>
        rice.say_and_wait(
          '정말, 겉옷을 라이스 이불로 쓰지 않아도 괜찮은데…… 좋은 냄새……',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async office_game(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '『',
          rice.uma_sex_title,
          '의 목욕은 즐거워』, 후후, ',
          callname,
          '도 좋아하는구나.',
        ]),
      () => rice.say_and_wait([callname, ', 모범생인데 게임도 정말 잘하네!']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async s_a_tree_hollow(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '울면…… 안 돼. ',
          callname,
          '과(와) 약속했어. 라이스는 강한 아이가 되겠다고.',
        ]),
      () => rice.say_and_wait('세 여신님, 라이스는 자신을 믿어 보기로 했어요.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} rice ライスシャワー */
  async s_a_dating(rice) {
    const buffer = [
      () => rice.say_and_wait('벤치에 있는 사람들, 대담하네…… 조금 부러워.'),
      () => rice.say_and_wait('트레센에도 이렇게 데이트하기 좋은 곳이 있구나.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} rice ライスシャワー */
  async s_r_lunch(rice) {
    await rice.say_and_wait(
      '라이스는 아침엔 빵을 먹는 편이지만, 도시락에는 조금 자신 있어!',
    );
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   * @param {number} jpy 釣りで売ったウマコイン。0は釣果なし
   */
  async o_r_fishing(rice, callname, jpy) {
    if (jpy > 0) {
      await rice.say_and_wait(
        '우아아! 낚시 금지 구역에서 이렇게 많이 잡다니, 정말 죄송해요!',
      );
    } else {
      await rice.say_and_wait([callname, ', 지금은 금어기잖아?']);
      await rice.say_and_wait(
        '어…… 한 사람당 낚싯대 하나, 낚싯줄 하나, 낚싯바늘 하나? 생태계 개선? 에에에?',
      );
    }
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_r_walking(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '예전에는 혼자 훈련하다 보면 외로울 때도 있었어. 하지만 ',
          callname,
          '과(와) 함께라면 마음이 위로받는 것 같아!',
        ]),
      () =>
        rice.say_and_wait([
          '라이스가 가장 마음이 놓이는 시간, 가장 자신다울 수 있는 시간은 ',
          callname,
          '과(와) 함께 이렇게 천천히 걷는 시간이야.',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_arcade(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait(
          '왜 오락실에서는 동전 대신 전용 코인을 쓰는 걸까? 점원분들이 번거롭지 않을까……',
        ),
      () =>
        rice.say_and_wait([
          callname,
          ', 이 기계, 고장 난 걸지도 몰라. 이렇게 느린 탄막을 ',
          callname,
          '이(가) 못 피할 리 없잖아?',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_drawing(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait(
          '라이스는 항상 휴지만 뽑혀…… 과정을 즐기라고? 그럼 라이스, 한 번 더 해 볼게.',
        ),
      () =>
        rice.say_and_wait([
          '저기, 돈은 라이스가 낼게. ',
          callname,
          '은(는) 행운을 나눠 줘!',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_ktv(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          callname,
          '에게 들려주는 노래라면 라이스, 몇 곡이든 부를 수 있어.',
        ]),
      () =>
        rice.say_and_wait(['라이스의 작은 소원, ', callname, '에게 닿았을까?']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_movie(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          callname,
          '. 어째서 좋아하는 사람을 미워하게 될 때도 있는 걸까?',
        ]),
      () =>
        rice.say_and_wait(
          '『나○토 극장판』에 라이스를 닮은 멋진 캐릭터가 나오는 거야? 기대된다!',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_restaurant(rice, callname) {
    const buffer = [
      () =>
        rice.say_and_wait([
          '머, 먹을 수 있다니…… 아, ',
          callname,
          '은(는) 밥을 좋아하는구나.',
        ]),
      () =>
        rice.say_and_wait(
          '역시 각자 내는 게 어떨까? 라이스도 자기가 얼마나 많이 먹는지 알고 있으니까.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_dating(rice, callname) {
    const buffer = [
      () => rice.say_and_wait('헤헤, 라이스, 그림책의 주인공이 된 기분이야.'),
      () => rice.say_and_wait([callname, ', 그런 타입의 여자가 좋은 거구나……']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} rice ライスシャワー
   * @param {PrintedSpan} callname ライスのプレイヤーへの呼び方
   */
  async o_s_shopping(rice, callname) {
    const buffer = [
      () => rice.say_and_wait('그림책 코너, 같이 둘러볼까?'),
      () =>
        rice.say_and_wait([
          '커플 한정…… 하지만 ',
          callname,
          '은(는) ',
          callname,
          '인걸.',
        ]),
    ];
    await get_random_entry(buffer)();
  },
};
