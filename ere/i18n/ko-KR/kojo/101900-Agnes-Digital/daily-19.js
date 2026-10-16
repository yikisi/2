/**
 * @file アグネスデジタル - 日常
 * @author 片手虾好评发售中！
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  good_morning(digital, callname) {
    if (Math.random() < 0.5) {
      digital.say([
        '하앗! ',
        digital.name,
        ', 등장! 우주에서 가장 고귀한 ',
        digital.uma_sex_title,
        '의 힘을 찾아 나서겠어요!',
      ]);
    } else {
      digital.say(['우후후, ', callname, '! 오늘도 덕질 파워를 쌓으러 가요!']);
    }
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   * @param {PrintedSpan} call_13 アグネスデジタルのメジロマックイーンへの呼び方
   */
  select(digital, callname, call_13) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say([
          '맞아요! 무슨 일이 있어도 전력으로 덕질하는 거예요! ',
          callname,
          '！',
        ]),
      () => digital.say('우후후, 너무 고귀해서 더는 못 버티겠어요……'),
      () => digital.say('잔디! 더트! 모두 저의 전장이에요!'),
    );
    if (era.get('relation:19:0') > 375) {
      buffer.push(() =>
        digital.say([
          callname,
          '! 함께 ',
          digital.uma_sex_title,
          '짱들을 덕질할 수 있어서 정말 다행이에요!',
        ]),
      );
    }
    switch (era.get('mark:19:欢愉')) {
      case 1:
        buffer.push(() =>
          digital.say(
            '아하하하…… 에? 다리가 떨린다고요? 괜찮아요, 괜찮아! 디지땅, 아주 멀쩡하다고요!',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            '구헤헤헤, 아직도 물으시는 건가요? ',
            callname,
            '이(가) 가장 잘 아시잖아요…… 츄릅……',
          ]),
        );
    }
    switch (era.get('mark:19:同心')) {
      case 1:
        buffer.push(() =>
          digital.say([
            '일심동체…… ',
            call_13,
            '님이 말씀하신 멋진 미래를 조금씩 알 것 같아요……',
          ]),
        );
        break;
      case 2:
      case 3:
        buffer.push(() => digital.say('메지로 시티에 가실 건가요? 가실 거죠!'));
    }
    switch (era.get('mark:19:苦痛')) {
      case 1:
        buffer.push(() =>
          digital.say([
            '에, 아, ',
            callname,
            '이셨군요…… 오늘은 무슨 일이세요?',
          ]),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('우우우…… 히익! 아뇨 아뇨, 괜찮아요, 괜찮아!'),
        );
    }
    switch (era.get('mark:19:羞耻')) {
      case 1:
        buffer.push(() =>
          digital.say('저기요, 디지땅도 이런 건 조금 부끄럽다고요.'),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('히야아, 아무리 그래도 이건 너무한 거 아닌가요?!'),
        );
    }
    switch (era.get('mark:19:反抗')) {
      case 1:
        buffer.push(() =>
          digital.say(['응? ', callname, '이셨군요. 에, 뭐, 뭘 하시려고요?']),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say([
            '으음, ',
            callname,
            ', 요즘 좀 동지답지 않으신 것 같은데요?',
          ]),
        );
    }
    switch (era.get('mark:19:淫纹')) {
      case 1:
        buffer.push(() =>
          digital.say(
            '낯익으면서도 묘한 게 제 몸에 생기다니…… 소재로 쓸 수는 있겠죠?',
          ),
        );
        break;
      case 2:
      case 3:
        buffer.push(() =>
          digital.say('멋지다면 멋지긴 한데…… 설마 진짜로 진화하는 건가요?!'),
        );
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async office_study(digital) {
    const buffer = [];
    buffer.push(
      () =>
        digital.say_and_wait(
          `에? 왜 ${digital.uma_sex_title}짱들에 관한 지식이 많냐고요? 팬이라면 당연하잖아요!`,
        ),
      () =>
        digital.say_and_wait(
          '사실 트레센 학원에 들어오려고 여러 방면으로 노력했거든요…… 그래서 공부는 별로 어렵지 않아요. 제 입으로 말하긴 좀 그렇지만요.',
        ),
      () =>
        digital.say_and_wait(
          `가끔 공부가 서툴러 보충 수업에 끌려가는 ${digital.uma_sex_title}짱들도 있잖아요? 어떻게 하면 ${
            digital.couple_title
          }에게 도움이 될 수 있을까요……`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async talk(digital) {
    if (era.get('base:19:体力') < era.get('maxbase:19:体力') / 3) {
      if (Math.random() < 0.5) {
        await digital.say_and_wait(
          `하아…… 다 타버렸어. 힘이 없어…… 덕질할 수가 없어……`,
        );
      } else {
        await digital.say_and_wait(
          `이런 모습이라니, 최애 ${digital.uma_sex_title}짱들한테 미안하네요.`,
        );
      }
    } else {
      const buffer = [];

      switch (era.get('cflag:19:干劲')) {
        case -2:
          buffer.push(
            () =>
              digital.say_and_wait(
                '우오오, 덕질 파워가 부족해요. 당장 보충해야……',
              ),
            () =>
              digital.say_and_wait(
                `이런 모습, 최애들한테는 절대 보이고 싶지 않아요……`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              digital.say_and_wait(
                '아아…… 왠지 힘이 안 나요. 덕질 파워가 부족한 걸까요?',
              ),
            () =>
              digital.say_and_wait(
                `아뇨, 방금 ${digital.uma_sex_title} 생각을 하고 있었거든요……`,
              ),
          );
          break;
        case 0:
          buffer.push(
            () => digital.say_and_wait(`스읍…… 하아…… 더 많은 덕질 파워를!`),
            () =>
              digital.say_and_wait(
                `아직 부족해요. 턱없이 부족해요! 더 많은 ${digital.uma_sex_title} 덕질 파워를 흡수해야 해요!`,
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              digital.say_and_wait(
                `컨디션이 딱 좋아요! 함께 ${digital.uma_sex_title} 덕질 파워를 흡수하며 덕을 쌓아요!`,
              ),
            () =>
              digital.say_and_wait(
                `사랑이에요! ${digital.uma_sex_title}짱들을 사랑하니까 이런 힘을 낼 수 있는 거예요!`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              digital.say_and_wait(
                `와아아아! 이쪽도 저쪽도 ${digital.uma_sex_title}짱들이에요! 지금이라면 뭐든 할 수 있을 것 같아요!`,
              ),
            () => digital.say_and_wait(`하앗! 덕질 파워가 하늘을 뚫었어요!`),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async office_gift(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait([
        '이런 선물을 고르다니, 역시 ',
        callname,
        '!',
      ]);
    } else {
      const items = [
        '타백 선생님의 사인본',
        '카렌짱 사진집',
        '팔코 악수권',
        '마야짱 인형',
        '메지로 가문과 같은 찻잔',
        '타키온×카페 테마 머그컵',
        digital.uma_sex_title + '의 러닝화 모형',
        digital.uma_sex_title + ' 한정 콜라보 굿즈',
        digital.uma_sex_title + '의 사인이 든 귀 덮개와 스타킹',
      ];
      const gift = get_random_entry(items);
      await digital.say_and_wait([
        '와아, ',
        gift,
        '! 여기서 ',
        digital.uma_sex_title,
        ' 덕질 파워를 듬뿍 흡수할게요!',
      ]);
    }
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async office_cook(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `담당 ${digital.uma_sex_title}를 향한 사랑을 담아 만드는 건가요…… 트레이너님에게도 그런 신조가 있다니, 저도 배워야겠어요!`,
        ),
      () =>
        digital.say_and_wait(
          `평소에 부모님이랑 캠핑을 자주 다녔거든요. 이래 봬도 요리 솜씨는 제법이랍니다.`,
        ),
      () =>
        digital.say_and_wait(
          `${digital.uma_sex_title}짱들의 풋풋한 마음을 직접 말하지 못하고 도시락에 담아 전한다니! 너무 고귀하잖아요!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async office_rest(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `후우…… 귀여운 ${digital.uma_sex_title}짱의 힐링 ASMR을 듣고 있으니 온몸이 녹을 것 같아요……`,
        ),
      () =>
        digital.say_and_wait(
          `이렇게 당신과 별다른 목적 없이 ${digital.uma_sex_title} 이야기를 나누는 것도 좋네요.`,
        ),
    ];
    if (era.get(`relation:${this.id}:0`) > 375) {
      buffer.push(() =>
        digital.say_and_wait(
          `무릎베개요? 아뇨 아뇨, 제 가느다란 다리를 베개로 써봤자 불편하실 텐데…… 역시 좀 부끄럽네요……`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async office_game(digital, callname) {
    if (Math.random() < 0.5) {
      await digital.say_and_wait(
        `이 『${digital.uma_sex_title} 올스타 대난투』, 해 보실래요? 캐릭터는 랜덤으로 할게요. 전 모두 다 좋아하니까요!`,
      );
    } else {
      await digital.say_and_wait([
        '에헤헤! ',
        callname,
        ', 아무리 그래도 이 게임만큼은 꽤 자신 있다고요.',
      ]);
    }
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async s_a_tree_hollow(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `항상 ${digital.uma_sex_title}들에게 레이스의 냉혹함, 훈련의 고됨, 복잡한 감정을 털어놓게 해 주는 당신! 제가 왜 고민을 들어 주는 대나무 숲을 질투하는 걸까요!`,
        ),
      () =>
        digital.say_and_wait(
          `저기요, 왜 레이스에는 승자와 패자가 나뉘는 걸까요…… ${digital.uma_sex_title}짱들이 전부 승자라면 좋을 텐데……`,
        ),
      () =>
        digital.say_and_wait(
          `제 각오는 아직 부족해요. 라이벌로서의 각오도, ${digital.uma_sex_title}로서의 각오도……`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async s_a_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `……왠지 ${digital.uma_sex_title}짱들이 저희를 많이 쳐다보네요. 어디 숨고 싶어요……`,
        ),
      () =>
        digital.say_and_wait(
          `이 큰 리본요? 어릴 때부터 계속 하고 다녔던 것 같은데…… 에? 눈에 띈다고요? 히야아, 확실히 문제네요.`,
        ),
      () =>
        digital.say_and_wait([
          callname,
          ', 제가 귀찮다고 생각하시진 않나요…… 계속 같이 다니면서 응원 활동을 하시고…… 에? 아니라고요?',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async s_r_lunch(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '……팔코의…… 가장 빛나는 무대? ',
          callname,
          ', 숨은 고수였나요? 이 재현도는 저도 감탄할 정도예요!',
        ]),
      () =>
        digital.say_and_wait(
          `으음, 귀여운 ${digital.uma_sex_title}짱을 어떻게 입에 넣겠어요……`,
        ),
      () =>
        digital.say_and_wait([
          '보세요! ',
          callname,
          ', 이 디자인에는 제 심혈이 담겼다고요! 특허라도 낼까요? 우헤!',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   * @param {PrintedSpan} call_20 アグネスデジタルのセイウンスカイへの呼び方
   */
  async o_r_fishing(digital, callname, call_20) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '우와, ',
          call_20,
          '…… 저쪽에는 안 가는 게 좋겠죠……',
        ]),
      () =>
        digital.say_and_wait([
          '오오오, 잡았어요, 잡았어! 캠핑 중이라면 구워 먹을 수 있겠네요, ',
          callname,
          '!',
        ]),
      () =>
        digital.say_and_wait(
          `신경 쓰지 마세요! 이기고 지는 건 흔한 일이잖아요. 대협, 한 번 더 도전하시죠…… 빈손으로 돌아가는 것도 뽑기에서 꽝이 나오는 것과 같아요!`,
        ),
    ];
    await get_random_entry(buffer);
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   * @param {PrintedSpan} call_8 アグネスデジタルのウオッカへの呼び方
   * @param {PrintedSpan} call_9 アグネスデジタルのダイワスカーレットへの呼び方
   * @param {PrintedSpan} call_46 アグネスデジタルのスマートファルコンへの呼び方
   * @param {PrintedSpan} call_58 アグネスデジタルのメイショウドトウへの呼び方
   */
  async o_r_walking(digital, callname, call_8, call_9, call_46, call_58) {
    const buffer = [
      () =>
        digital.say_and_wait([
          call_46,
          ', ',
          call_46,
          '! 꼭 저쪽으로 가야 해요!',
        ]),
      () =>
        digital.say_and_wait([
          call_9,
          '과(와) ',
          call_8,
          ' 발견! ',
          digital.couple_title,
          '은 저기서 뭘 하는 걸까~요!',
        ]),
      () =>
        digital.say_and_wait([
          '와앗! ',
          call_58,
          '이(가) 넘어졌어요. 도와드려야…… 일어났다! 우오오, 정말 부지런하셔……',
        ]),
      async () => {
        await era.printAndWait([
          '강변 산책은 ',
          digital.get_colored_name(),
          '에게 성지순례와도 같았다.',
        ]);
        await era.printAndWait(
          `어느 모퉁이에서든 ${digital.uma_sex_title}를 만날 수 있기 때문이다.`,
        );
        await era.printAndWait(
          `노래를 연습하는 자그마한 ${digital.uma_sex_title} 아이돌부터, 더트에 적응하려고 애쓰는 노력가까지.`,
        );
        await era.printAndWait(
          `다행히 이번에는 ${digital.sex}도 그 고귀함에 혼이 빠지지는 않았다.`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} call_46 アグネスデジタルのスマートファルコンへの呼び方
   */
  async o_s_arcade(digital, call_46) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '우오오오, ',
          call_46,
          '의 신곡이 나왔어요! 장갑을 가져오길 잘했네요!',
        ]),
      () => digital.say_and_wait(`뽑았어요, 뽑았어! 저 승부복 한정 인형을요!`),
      () =>
        digital.say_and_wait(
          `포인트를 모아서 경품으로 바꿔요! 저 한정 피규어를 받을 수 있겠어요!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} call_32 アグネスデジタルのアグネスタキオンへの呼び方
   */
  async o_s_drawing(digital, call_32) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '당근에 당첨됐어요! ',
          call_32,
          '에게 가져다줘야겠어요. 식사는 제대로 챙겼으면 좋겠는데. 그러다 몸 상한다고요! 안 돼요, 안 돼!',
        ]),
      () => digital.say_and_wait(`크크크, 후후후, 나왔어요. 바로 그거예요!`),
      () => digital.say_and_wait(`휴지인가요…… 역시 단차로는 안 나오는군요.`),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async o_s_ktv(digital, callname) {
    const buffer = [
      () => digital.say_and_wait(`오늘 승리의 여신은 나에게만 입맞춤을……`),
      () =>
        digital.say_and_wait(
          `위닝 라이브는 우승한 ${digital.uma_sex_title}짱에게만 주는 포상이 아니에요. 저희 팬들에게 주는 포상이기도 하다고요!`,
        ),
      () =>
        digital.say_and_wait([
          '응 하이, 에 하이! 오오——하이——! ',
          callname,
          '! 응원봉이 한 박자 늦어요!',
        ]),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} digital アグネスデジタル */
  async o_s_movie(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `너무 고귀해요! 감독님, 뭘 좀 아시네요! ${digital.uma_sex_title}짱의 고귀한 매력을 전부 담아내셨어요!`,
        ),
      () =>
        digital.say_and_wait(
          `우오오오오, 감동했어요. 이 분함, 이 분투…… 현실의 ${digital.uma_sex_title}짱들 같아요!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  o_c_pray: (() => {
    const title = '덕을 쌓고…… 복을 모으고?';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_98 アグネスデジタルのコパノリッキーへの呼び方
     */
    const f = async (digital, you, callname, call_98) => {
      await era.printAndWait([
        '신사 앞에서 두 번 절하고 두 번 손뼉을 친 뒤, ',
        you.get_colored_name(),
        '과(와) ',
        digital.get_colored_name(),
        '은(는) 손을 모아 기도했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 당연히 담당 ',
        digital.uma_sex_title,
        '의 건강을 빌었다. 그렇다면 ',
        digital.get_colored_name(),
        '은(는) 무엇을 빌고 있을까?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 슬쩍 ',
        digital.get_colored_name(),
        '을(를) 바라보았다. ',
        digital.sex,
        '는 여전히 눈을 감고 작은 두 손을 비비며, 귀를 쫑긋 세운 채 중얼거리고 있었다. 보통 사람도 저만큼 정성을 다할 수 있을까?',
      ]);
      await era.printAndWait([
        '잠시 뒤 ',
        digital.sex,
        '는 몸을 돌려 진지하게 말했다.',
      ]);
      await digital.say_and_wait([
        '신께서 모든 ',
        digital.uma_sex_title,
        '를 지켜 주시도록, 제가 할 수 있는 한 가장 정성껏 기도해야 해요.',
      ]);
      await digital.say_and_wait(
        '실제로 이루어지는지는 몰라도, 이렇게 하면 저 자신을 다시 이성적으로 돌아볼 수 있거든요. 덤으로 덕도 쌓고요!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 의외라고 생각했지만, ',
        digital.sex,
        '의 말에도 일리가 있다고 느꼈다. 그래서 ',
        you.get_colored_name(),
        '도 잡념을 버리고 다시 기도하려 했다.',
      ]);
      if (Math.random() < 0.5) {
        await era.printAndWait([
          '서서히 ',
          you.get_colored_name(),
          '은(는) 세 줄기의 맑은 물이 머릿속을 흐르는 것처럼 느꼈다. ',
          you.get_colored_name(),
          '은(는) 놀라 눈을 떴다. 산들바람이 나뭇잎과 신사를 스치며 ',
          you.get_colored_name(),
          '의 마음을 가라앉혔다.',
        ]);
        await digital.say_and_wait([
          call_98,
          '이(가) 추천해 준 아주 영험한 신사거든요. 그래서 아까부터 말을 많이 못 했어요~',
        ]);
        await era.printAndWait('정말 이런 일이 일어날 수 있는 건가?');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 옆에 있는 ',
          digital.get_colored_name(),
          '도 같은 경지에 빠져 있음을 알아차렸다.',
        ]);
        await digital.say_and_wait('이건 세 여신의 은총이에요!');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 신사에서 기도했는데 왜 은총을 내리는 건 세 여신이냐고 묻고 싶었다. 그래도 적어도 마음에는 효과가 있으니, 괜찮겠지.',
        ]);
      } else {
        await era.printAndWait([
          '미간에 의식을 모으고 어떻게 정성껏 기도할지 고민했지만, 그 방법 자체가 문제였다. 아무래도 ',
          you.get_colored_name(),
          '은(는) 아직 잡념을 떨치는 데 서툰 모양이다.',
        ]);
        await digital.say_and_wait(
          '괜찮아요. 저도 연습을 많이 해서 이 경지에 이르렀거든요. 동지, 더 연습하셔야겠네요!',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 이 기술을 어디에 써먹을 수 있을지 궁금해졌다. 레이스 중 집중하기 쉬워진다는 걸까?',
        ]);
        await era.printAndWait([
          '다만 ',
          you.get_colored_name(),
          '도 때로는 마음을 가라앉히는 연습이 필요하다는 사실을 깨달았다. 다음에 다시 도전해 봐야겠다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} digital アグネスデジタル */
  async o_s_restaurant(digital) {
    const buffer = [
      () =>
        digital.say_and_wait(
          `당근처럼 ${digital.uma_sex_title}짱들이 좋아하는 음식을 좋아하는 건, ${digital.uma_sex_title}짱들을 좋아해서일까요? 아니면 저도 ${digital.uma_sex_title}라서 그런 걸까요……`,
        ),
      () =>
        digital.say_and_wait(
          `파르페♪ 파르페♪ 멜론 파르페♪ 벌꿀♪ 벌꿀♪ 특농 벌꿀♪ 거기에 딸기 찹쌀떡까지♪ 최애들을 따라 하면 운이 좋아질 것 같아요!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
   */
  async o_s_dating(digital, callname) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '아하하하, ',
          callname,
          ', 함께 걸으니까 오히려 어디로 가야 할지 고를 수가 없네요……',
        ]),
      () =>
        digital.say_and_wait(
          `에? 제가 장소를 골라요? 어차피 ${digital.uma_sex_title}와 관련된 곳으로 가게 될 것 같은데……`,
        ),
      () =>
        digital.say_and_wait([callname, '! 저쪽으로 성지순례 한 번 더 가요!']),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} digital アグネスデジタル
   * @param {PrintedSpan} call_25 アグネスデジタルのマンハッタンカフェへの呼び方
   * @param {PrintedSpan} call_33 アグネスデジタルのアドマイヤベガへの呼び方
   */
  async o_s_shopping(digital, call_25, call_33) {
    const buffer = [
      () =>
        digital.say_and_wait([
          '으으으! 이 ',
          call_25,
          '과(와) 같은 커피잔, 저쪽의 메지로 홍차잔…… 어떻게 고르라는 거죠?! 당연히 전부 사야죠!',
        ]),
      () =>
        digital.say_and_wait([
          call_33,
          '이(가) 광고하는 건조기라고요? 이건…… 조금…… 아니에요, 사야 해요!',
        ]),
      () =>
        digital.say_and_wait(
          `에? 왜 굿즈를 세 세트씩 사냐고요? 당연히 하나는 실사용, 하나는 보관, 하나는 포교용이죠!`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  big_fish: (() => {
    const title = '대어를 낚았다. 다만 물고기가 그리 우호적이지 않다';
    /**
     * @param {CharaTalk} digital アグネスデジタル
     * @param {CharaTalk} spe スペシャルウィーク
     * @param {CharaTalk} sky セイウンスカイ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスデジタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_20 アグネスデジタルのセイウンスカイへの呼び方
     * @param {PrintedSpan} callname_20 セイウンスカイのプレイヤーへの呼び方
     * @param {PrintedSpan} s_call_s セイウンスカイのスペシャルウィークへの呼び方
     * @param {PrintedSpan} s_call_d セイウンスカイのアグネスデジタルへの呼び方
     */
    const f = async (
      digital,
      spe,
      sky,
      you,
      callname,
      call_20,
      callname_20,
      s_call_s,
      s_call_d,
    ) => {
      const ret = [];
      await era.printAndWait(
        `강변 낚시는 한가한 ${digital.uma_sex_title}들이 즐기는 활동 중 하나다.`,
      );
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '의 담당 ',
        digital.uma_sex_title,
        ' ',
        digital.get_colored_name(),
        '은(는) 조금 달랐다. 직접 낚시하기보다는 ',
        digital.sex,
        '는 남이 낚시하는 모습을 구경하길 좋아했다.',
      ]);
      await era.printAndWait(
        `아니…… ${digital.uma_sex_title}를 구경하는 걸 좋아한다고 해야 정확하겠지.`,
      );
      await era.printAndWait(
        `그래서 정말로 ${digital.sex}가 작은 의자에 앉아 낚싯대를 쥔 채 조용히 기다리는 모습은 무척 드물었다.`,
      );
      await digital.say_and_wait(
        `그렇군요…… 낚시란 이런 거였네요. 여가 활동일 텐데, 왜 이렇게 힘이 드는 걸까요……`,
      );
      await digital.say_and_wait(
        `낚시하는 다른 ${digital.uma_sex_title}짱들은 대체 무슨 생각을 하고 있을까요……`,
      );
      await you.say_and_wait(
        `${digital.couple_title}은 낚시 그 자체를 즐기는 거겠지. 주위를 한번 둘러볼래?`,
      );
      await digital.say_and_wait('에?');
      await era.printAndWait([
        digital.get_colored_name(),
        '은(는) 주위를 둘러보았다. 마침 강 건너편에서도 ',
        digital.uma_sex_title,
        '가 낚시를 하고 있었다.',
      ]);
      await era.printAndWait(`낚시보다는 낮잠에 가까웠다.`);
      await digital.say_and_wait(
        `정말이네요. 느껴져요. ${digital.sex}는 지금 더없이 편안한 상태예요.`,
      );
      await digital.say_and_wait(
        `우와, 낚시하는 ${digital.uma_sex_title}짱이 끝없는 고요 속에 누워 있어요. 물고기가 낚여도 ${
          digital.sex
        }를 조금도 깨우지 못하겠네요……`,
      );
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([
          '이런이런, ',
          callname_20,
          '이(가) 오늘은 틈을 내서 ',
          s_call_d,
          '이랑 낚시하러 왔네요. 요호호, 저랑 온 게 아니었군요…… 훌쩍훌쩍.',
        ]);
        await era.printAndWait([
          '등 뒤에서 익숙한 목소리가 들렸다. ',
          sky.get_colored_name(),
          '였다.',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          '는 작은 손으로 눈을 비비며 가련한 눈빛을 보냈다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 인정할 수밖에 없었다. ',
          sky.get_colored_name(),
          '의 연기는 정말 훌륭했다. 만약 ',
          you.get_colored_name(),
          '이(가) ',
          digital.sex,
          '의 잔꾀에 익숙하지 않았더라면 정말 속았을지도 모른다.',
        ]);
        await digital.say_and_wait(
          '와와왓! 고의가 아니었어요. 지금 바로 비킬게요!',
        );
        await era.printAndWait([
          digital.get_colored_name(),
          '은(는) 몹시 당황하며 손을 내젓고 일어나려 했다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 슬그머니 ',
          sky.get_colored_name(),
          '의 곁으로 가서, 남몰래 ',
          sky.get_colored_name(),
          '의 등을 세게 꼬집었다. 부드러웠다.',
        ]);
        await sky.say_and_wait('아야! 농담이에요, 농담~');
      } else {
        await sky.say_and_wait([
          '이런이런, ',
          s_call_d,
          '이잖아. 강가에서 다른 ',
          digital.uma_sex_title,
          '가 낚시하는 걸 구경하는 게 아니었어?',
        ]);
        await sky.say_and_wait([
          '그리고…… ',
          s_call_d,
          '의 트레이너',
          you.adult_sex_title,
          ', 유명한 분이네요~',
        ]);
        await era.printAndWait([
          '등 뒤에서 나른한 목소리가 들렸다. 이 목소리는 ',
          you.get_colored_name(),
          '에게도 조금 익숙했다.',
        ]);
        await digital.say_and_wait([call_20, '?!']);
        await era.printAndWait([
          '깜짝 놀라 ',
          digital.get_colored_name(),
          '의 손에서 낚싯대가 떨어졌고, 튀어 오른 물이 몸에 닿았다.',
        ]);
        await sky.say_and_wait(
          '어라? 낚싯대까지 떨어뜨리다니, 세이 화낼 거야!',
        );
        await digital.say_and_wait([
          '아뇨 아뇨, 제 잘못이에요! 제가 여기 와서 ',
          digital.uma_sex_title,
          '짱이랑 같이 낚시하는 게 아니었는데……',
        ]);
      }
      await sky.say_and_wait([
        '그럼, ',
        s_call_d,
        ', 내가 손을 잡고 가르쳐 줄까? 에헤!',
      ]);
      await digital.say_and_wait('히익!');
      await era.printAndWait([
        '순식간에 ',
        sky.get_colored_name(),
        '는 도망치려는 ',
        digital.get_colored_name(),
        '을(를) 붙잡았다. ',
        digital.get_colored_name(),
        '은(는) 석화 마법에라도 걸린 듯 몸이 굳었다.',
      ]);
      await sky.say_and_wait('쿠헤헤!');
      await era.printAndWait([
        '입꼬리가 올라갔다. ',
        sky.get_colored_name(),
        '의 작은 두 손이 그보다 더 자그마한 ',
        digital.get_colored_name(),
        '의 왼손을 먼저 감싸 쥐었다.',
      ]);
      await digital.say_and_wait('아바아바……');
      await sky.say_and_wait('자자, 의자에 앉아 봐~');
      await era.printAndWait([
        '단번에 ',
        digital.get_colored_name(),
        '을(를) 의자로 끌어당기고, 손을 ',
        digital.sex,
        '의 어깨에 얹자……',
      ]);
      await era.printAndWait([
        '그러자 ',
        digital.get_colored_name(),
        '은(는) 이번엔 몸을 흐물흐물하게 만드는 마법에 걸린 듯, 담요처럼 의자에 주저앉았다.',
      ]);
      await sky.say_and_wait('자, 이 낚싯대를 잡고 찌를 저쪽으로……');
      await digital.say_and_wait('아바아바……');
      await era.printAndWait([
        '아무리 봐도 ',
        digital.get_colored_name(),
        '의 영혼은 진작 재가 되어 바람에 흩어진 모양이었다.',
      ]);
      era.drawLine({ content: '잠시 후' });
      await digital.say_and_wait('……！');
      await digital.say_and_wait('우에에…… 안 되겠어요. 정말 무리예요……');
      await era.printAndWait([
        '흙바닥에 힘없이 누운 ',
        digital.get_colored_name(),
        '. 오늘 ',
        digital.sex,
        '는 정말 한계인 모양이었다.',
      ]);
      await sky.say_and_wait('아하, 재밌는 사람이네.');
      await era.printAndWait([
        digital.get_colored_name(),
        '과(와) 정반대로 ',
        sky.get_colored_name(),
        '는 기운이 넘쳤다. 신종 흡성대법인가?',
      ]);
      era.println();
      if (era.get('cflag:20:招募状态') === recruit_flags.yes) {
        await sky.say_and_wait([callname_20, ', 있잖아요!']);
        await era.printAndWait([
          sky.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '에게 몸을 돌렸다. 방금까지 크게 웃던 표정을 금세 가라앉히고, 가만히 ',
          you.get_colored_name(),
          '을(를) 바라보았다.',
        ]);
        await sky.say_and_wait([
          '기분이 어때요? 당신도 ',
          digital.sex,
          '도 저를 따돌리는 것 같은데~',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          '… ',
          digital.sex,
          '는 그냥 속마음을 떠보려는 걸까?',
        ]);
        await sky.say_and_wait([
          '이런이런, ',
          callname_20,
          '도 질투하는 거예요? 질투해야 할 쪽은 저 아닌가요?',
        ]);
        era.printButton('한발 물러선다 (세이운 스카이 호감+40)', 1);
        era.printButton('본론으로 들어간다 (아그네스 디지털 호감+40)', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait(
            '알았어, 알았어. 그럼 다음에는 너랑 낚시하러 올게.',
          );
          await era.printAndWait('일단 적당히 넘기고 보자.');
          await sky.say_and_wait(
            '에헤, 그럼 장비도 새로 사 줘요~ 트레이너 월급, 적지 않잖아요?',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            '는 한 손을 머리에 얹고 분홍빛 혀를 내밀었다. ',
            you.get_colored_name(),
            '은(는) 문득 어떤 이모티콘을 떠올렸다.',
          ]);
          await era.printAndWait(
            '허리를 펴며 스마트폰 속 우마코인 잔액을 떠올렸다. 장비 교체 정도는…… 괜찮겠지?',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            '도 사양하지 않고 작은 의자를 가져와 ',
            you.get_colored_name(),
            '의 곁에 앉더니, ',
            you.get_colored_name(),
            '의 어깨에 기댔다.',
          ]);
          await era.printAndWait(
            '곁눈질로 보니 푸른 머리카락이 땀에 살짝 젖어 있었고, 매끈한 목덜미에 땀방울이 맺혀 있었다.',
          );
          await era.printAndWait([
            sky.get_colored_name(),
            '는 스마트폰을 조작했다. 상품들이 ',
            sky.get_colored_name(),
            '의 손끝을 따라 흘러갔다. 숫자를 본 ',
            you.get_colored_name(),
            '은(는) 갑자기 불길한 예감이 들었다.',
          ]);
          await you.say_and_wait('잠깐, 멈춰 봐. 그만, 잠깐만.');
          await sky.say_and_wait('에? 본인이 먼저 말했으면서~');
          await era.printAndWait(
            '가격을 보니 고급형을 넘어 거의 최상위 제품 수준이었다.',
          );
          await era.printAndWait(
            '트레이너의 월급이 적지는 않지만, 이런 물건을 선뜻 살 정도는 아니었다.',
          );
          await sky.say_and_wait('네네, 농담은 여기까지. 잡담 끝!');
          await era.printAndWait([
            '스마트폰을 집어넣은 ',
            sky.get_colored_name(),
            '는 본론으로 들어갈 모양이었다.',
          ]);
          await sky.say_and_wait([
            s_call_d,
            '이(가) 달리는 이유를 찾아줘요! 오오오!',
          ]);
          await era.printAndWait([
            '진지한 이야기일 텐데, ',
            sky.get_colored_name(),
            '의 입에서 나오니 영 기운 없는 외침이 되었다……',
          ]);
          await era.printAndWait([
            digital.get_colored_name(),
            '을(를) 슬쩍 바라보았다. ',
            digital.sex,
            '는 아직 혼이 돌아오지 않았다.',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            '는 농담을 빌려 지금 ',
            you.get_colored_name(),
            '이(가) 서둘러 해야 할 일을 전하고 있었다…… 낚싯대도 아마 그 일환이겠지.',
          ]);
          await era.printAndWait([
            '다음에는 ',
            digital.sex,
            '에게 선물을 사 주자. 이 낚싯대는 관두는 게 좋겠다……',
          ]);
        } else {
          await you.say_and_wait('본론을 말해 줘. 널 잘 아니까.');
          await era.printAndWait([
            '어차피 ',
            sky.get_colored_name(),
            '에게는 ',
            digital.sex,
            ' 나름의 속셈이 있다.',
          ]);
          await era.printAndWait([
            '몸을 휙 돌린 ',
            sky.get_colored_name(),
            '는 석양을 향해 등을 보였다.',
          ]);
          await sky.say_and_wait(['아직 ', s_call_s, '을(를) 기억해요?']);
          await you.say_and_wait('무슨 소리야. 기억하고 말고 할 게 어디 있어.');
          await era.printAndWait(
            '그때의 일이었다. 자신이 무엇을 해야 하는지, 무엇을 목표로 삼고 어떻게 나아가야 하는지 잊었던 때.',
          );
          await sky.say_and_wait([
            s_call_s,
            '은(는) 찾았어요. ',
            digital.sex,
            '만의 따뜻한 안식처를요.',
          ]);
          await era.printAndWait([
            '그 이야기는 꽤 널리 퍼져 좋은 본보기가 되었다. 다행히 ',
            spe.get_colored_name(),
            ' 본인은 신경 쓰지 않았다.',
          ]);
          await era.printAndWait(
            '동경 그 자체가 영원히 나아갈 목표가 될 수는 없다.',
          );
          await era.printAndWait([
            digital.get_colored_name(),
            ', ',
            digital.sex,
            '는 곧 깨달을 것이다. ',
            digital.sex,
            '는 누구보다 강해질 것이고, ',
            digital.sex,
            '는 한때 동경했던 상대의 꿈을 부수게 되리라는 것을.',
          ]);
          await you.say_and_wait([
            '함께 찾아낼 거야. ',
            digital.sex,
            '만의 전당을, ',
            digital.sex,
            '와 함께.',
          ]);
          await sky.say_and_wait('역시 제 트레이너 쌤이네요!');
          await you.say_and_wait('응.');
        }
      } else {
        await sky.say_and_wait([s_call_d, '의 트레이너라니——']);
        await era.printAndWait([
          sky.get_colored_name(),
          '는 고개를 ',
          you.get_colored_name(),
          '에게 돌렸다.',
        ]);
        await era.printAndWait([
          '잔꾀가 많다. 세상 사람들…… 적어도 ',
          digital.sex,
          '의 동급생들이 ',
          digital.sex,
          '에게 내린 평가다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          sky.get_colored_name(),
          '를 잘 알지는 못하지만, ',
          digital.sex,
          '의 평판은 들어 보았다…… 레이스를 위해서라면 수단을 가리지 않는다던가?',
        ]);
        await era.printAndWait([
          sky.get_colored_name(),
          '와는 ',
          digital.sex,
          '의 레이스가 겹칠 일도 없을 텐데. 그렇다면 ',
          digital.sex,
          '는 여기서 무엇을 하려는 걸까?',
        ]);
        era.printButton('우선 이야기한다 (호감+40)', 1);
        era.printButton('디지털을 서둘러 데리고 돌아간다 (연모+5)', 2);
        ret.push(await era.input());
        if (ret[0] === 1) {
          await you.say_and_wait('세이운 스카이…… 너에 대해선 알고 있어.');
          await sky.say_and_wait('냐하하, 제 이름이 꽤 알려졌나 보네요~');
          await era.printAndWait([
            '머리 뒤로 손을 돌린 ',
            sky.get_colored_name(),
            '는 제 유명세가 자랑스러운 모양이었다.',
          ]);
          await you.say_and_wait(
            '앉아서 이야기하자. 디지털에 관해 생각해 둔 게 있겠지.',
          );
          await sky.say_and_wait(
            '아뇨 아뇨, 저는 동성 쪽은 아닌걸요. 오히려 남녀 커플 쪽이 취향이랄까~',
          );
          await era.printAndWait('말 돌리기. 늘 쓰는 수법이다.');
          await you.say_and_wait('……');
          await sky.say_and_wait(
            '정말 듣고 싶어요? 세이의 생각이 의외로 순수할지도 모르는데?',
          );
          await era.printAndWait([
            '곁에 있는 ',
            digital.get_colored_name(),
            '을(를) 바라보았다. ',
            digital.sex,
            '는 아직도 강가에 누워, 행복에 겨워 혼이 빠져 있었다.',
          ]);
          await you.say_and_wait([
            '디지털…… ',
            digital.sex,
            '는 아직 너무 순수해. 경기장에서 한 치도 양보하지 않고 다투는 분위기를 모르지.',
          ]);
          await sky.say_and_wait([
            '맞아요. ',
            s_call_s,
            '이(가) 한때 그랬듯, ',
            s_call_d,
            ', ',
            digital.sex,
            '에게도 전장에 나설 이유가 부족해요.',
          ]);
          await era.printAndWait([
            '전장에…… 레이스에 나설 이유. ',
            digital.get_colored_name(),
            '은(는) 지금까지 줄곧 평범한 ',
            digital.uma_sex_title,
            '일 뿐이라고 말해 왔다. ',
            digital.sex,
            '는…… 적어도 지금은 ',
            digital.uma_sex_title,
            '가 달리는 모습을 가장 가까이서 보고 싶을 뿐이다.',
          ]);
          await you.say_and_wait([
            digital.sex,
            '는 찾아낼 거야. 내가 그 이유를 ',
            digital.sex,
            '와 함께 찾아내겠어.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '이(가) 그렇게 말할 때까지 ',
            sky.get_colored_name(),
            '는 깊은 눈빛으로 ',
            you.get_colored_name(),
            '을(를) 바라보았다. 그 말을 듣자 ',
            digital.sex,
            '는 웃었다.',
          ]);
          await sky.say_and_wait('아하하, 재미있는 대답을 들어 버렸네요!');
          await era.printAndWait([
            you.get_colored_name(),
            '의 대답이 ',
            digital.sex,
            '를 만족시켰는지, 아니면 더 말할 필요가 없다고 생각했는지.',
          ]);
          await sky.say_and_wait(
            '그럼 방해하지 않을게요? 세이는 마저 낚시하러 가야겠네요.',
          );
          await era.printAndWait([
            '열기를 잃은 태양은 흰빛에서 붉은빛으로 바뀌며, ',
            you.get_colored_name(),
            '과(와) ',
            digital.get_colored_name(),
            '을(를) 강가의 흙바닥에 남겨 놓았다.',
          ]);
          await era.printAndWait('디지털을 데리고 돌아가자……');
          await you.say_and_wait('어떻게 데려가지……', true);
        } else {
          await you.say_and_wait(
            '세이운 스카이, 조금 더 이야기하고 싶긴 한데……',
          );
          await you.say_and_wait([
            '디지털은 당분간 못 일어날 것 같아. 시간도 늦었으니 ',
            digital.sex,
            '를 데리고 돌아가야겠어.',
          ]);
          await era.printAndWait([
            sky.get_colored_name(),
            '는 ',
            you.get_colored_name(),
            '을(를) 바라보며 하품했다.',
          ]);
          await sky.say_and_wait('그것도 그렇네요. 낚시를 못 한 건 아쉽지만.');
          await era.printAndWait([
            digital.sex,
            '에게 작별 인사를 하고 ',
            digital.get_colored_name(),
            '을(를) 업으려던 순간, ',
            you.get_colored_name(),
            '은(는) 귓가에 스치는 숨결을 느꼈다……',
          ]);
          await sky.say_and_wait([digital.sex, '가 달리는 이유를 찾아줘요……']);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 눈을 감고 고맙다는 말밖에 할 수 없었다.',
          ]);
          era.println();
          await era.printAndWait([
            digital.get_colored_name(),
            '은(는) 유난히 자그마했지만, ',
            you.get_colored_name(),
            '은(는) ',
            digital.sex,
            '를 업고 나서야 ',
            digital.sex,
            '의 몸무게가 생각보다도 가볍다는 걸 알았다.',
          ]);
          await era.printAndWait([
            '부드러운 몸과 희미한 숨결이 ',
            you.get_colored_name(),
            '의 목에 닿아, ',
            you.get_colored_name(),
            '은(는) 조금 간지러웠다.',
          ]);
          await era.printAndWait([
            '돌아온 뒤, ',
            digital.get_colored_name(),
            '은(는) ',
            you.get_colored_name(),
            '에게 거듭 사과했다.',
          ]);
        }
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
};
