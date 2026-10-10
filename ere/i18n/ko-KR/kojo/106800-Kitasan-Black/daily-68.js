/**
 * @file キタサンブラック - 日常
 * @author 小黑（原作）
 * @author 黑奴一号 黑奴队长（改编）
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} daiya サトノダイヤモンド
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_3 キタサンのトウカイテイオーへの呼び方
   * @param {PrintedSpan} call_7 キタサンのゴールドシップへの呼び方
   * @param {PrintedSpan} call_44 キタサンのトランセンドへの呼び方
   * @param {PrintedSpan} call_67 キタサンのサトノダイヤモンドへの呼び方
   * @param {PrintedSpan} call_98 キタサンのコパノリッキーへの呼び方
   * @param {PrintedSpan} call_301 キタサンの駿川たづなへの呼び方
   */
  good_morning(
    kita,
    daiya,
    you,
    callname,
    call_3,
    call_7,
    call_44,
    call_67,
    call_98,
    call_301,
  ) {
    const buffer = [];
    buffer.push(
      () =>
        kita.say([
          '오늘도 몸에는 이상 없어요. ',
          callname,
          ', 트레이닝 시작해요!',
        ]),
      () =>
        kita.say([call_3, '만큼 강하지는 않지만, 열심히 강해져서 증명할게요!']),
      () =>
        kita.say([
          '레이스 같은 중요한 날을 위해서 ',
          callname,
          ', 사정없이 단련해서 저만의 무기를 만들어 주세요.',
        ]),
      () => {
        kita.say([
          '요즘 ',
          call_67,
          ' 말이에요. ',
          kita.sex,
          '가 자꾸 저를 데리고 특이한 음식을 먹으러 가요. 시금치 카레라든가, 초콜릿 전골이라든가……',
        ]);
        kita.say([
          '……다 재미있는 음식이긴 한데, ',
          call_67,
          '이(가) 데려가는 가게는 좀 지나치게 독특하지 않아요?',
        ]);
        era.print([
          kita.get_colored_name(),
          '은 살짝 부푼 배를 누르며 의아한 표정을 지었다.',
        ]);
      },
      () => {
        kita.say([call_44, ', 요즘 연금술까지 배운 모양이에요. 굉장하네요~']);
        era.print([
          kita.get_colored_name(),
          '은 방긋 웃으며 ',
          you.get_colored_name(),
          '에게 주변에서 있었던 일을 이야기했다.',
        ]);
      },
      () => {
        kita.say([
          callname,
          ', 요즘 조금 운이 나쁜 것 같지 않아요? 이럴 때는 믿음직한 ',
          call_98,
          '에게 가서 운을 틔워 달라고 해야죠!',
        ]);
        era.print([
          '혼자 그렇게 말하더니 ',
          kita.get_colored_name(),
          '은 타다닥 달려갔다.',
        ]);
      },
      () => {
        kita.say([
          call_3,
          '이(가) 제 트레이닝을 보고 있는 것 같아요. 좋아, 저도 지지 않도록 힘낼게요!',
        ]);
        era.print([
          '투지에 불이 붙은 ',
          kita.get_colored_name(),
          '은 진지하게 오늘의 트레이닝을 준비하기 시작했다.',
        ]);
      },
      () => {
        kita.say([
          '요즘 ',
          call_301,
          '이(가) 새 헤어 제품을 산 것 같아요. ',
          callname,
          '은(는) 머리카락 잘 관리하고 계세요?',
        ]);
        era.print([
          you.get_colored_name(),
          '의 머리카락을 만지작거리며 ',
          kita.get_colored_name(),
          '은 태양처럼 뜨거운 미소를 지었다.',
        ]);
      },
    );
    if (era.get('love:68') >= 90) {
      buffer.push(
        () => {
          kita.say([
            '요즘은 ',
            callname,
            '이(가) 지도해 주는 목소리 없이는 안 될 것 같아요.',
          ]);
          kita.say(
            '지시를 받을 때마다 가슴이 두근거리고, 지시대로 해내면 칭찬받고 싶어져요. 축제 때처럼 들떠 버려요.',
          );
          era.print([
            kita.get_colored_name(),
            '은 손끝을 맞대며 뺨을 살짝 붉혔다.',
          ]);
        },
        () => {
          kita.say([
            '요즘 꼬리로 바벨을 들 수 있을지 도전하고 있어요. ',
            callname,
            ', 같이 해 보실래요?',
          ]);
          era.print([
            '꼬리로 ',
            you.get_colored_name(),
            '의 종아리를 감싼 ',
            kita.get_colored_name(),
            '은 장난스럽게 ',
            you.get_colored_name(),
            '에게 말했다.',
          ]);
        },
        () => {
          kita.say('이야~ 준비 운동을 했더니 온몸에 땀 냄새가 나네요~');
          kita.say('오늘 밤에도 얼른 목욕해서 구석구석 깨끗이 씻어야겠어요!');
          era.print([
            kita.get_colored_name(),
            '은 팔을 들어 겨드랑이 냄새를 맡았다. 땀에 젖어 반짝이는 매끄러운 겨드랑이가 ',
            you.get_colored_name(),
            '의 앞에 드러났다.',
          ]);
        },
        () => {
          kita.say([
            callname,
            ', 이번 주말에 같이 설산에서 트레이닝해요! ',
            '괜찮아요. 시간에 못 맞출 것 같으면 제가 트레이너를 안고 달려서 돌아올게요! 절대로 안 늦어요!',
          ]);
          era.print([
            '신이 난 ',
            kita.get_colored_name(),
            '은 ',
            you.get_colored_name(),
            '에게 달라붙어 스스럼없이 장난을 치기 시작했다.',
          ]);
        },
      );
    } else if (era.get('love:68') >= 75) {
      buffer.push(
        () => {
          kita.say([
            '깊은 하늘의 검은 불꽃! 마법 소녀 현색! 이런 등장 대사, ',
            call_44,
            '도 좋아해 줄까요?',
          ]);
          era.print([
            kita.get_colored_name(),
            '은 빙글 돌며 올해 프리큐어의 변신 자세를 취했다.',
          ]);
        },
        () => {
          kita.say(
            '다음 레이스를 향해 두 배로 노력해서 저만의 무기를 갈고닦을 거예요!',
          );
          era.print([
            '투지를 불태운 ',
            kita.get_colored_name(),
            '은 오늘의 트레이닝 준비를 마쳤다.',
          ]);
        },
        () => {
          kita.say(
            '요즘 키류인 트레이너가 「강철 같은 의지」를 아무도 배우려 하지 않는다고 고민하시는 것 같아요.',
          );
          kita.say([
            '어째서인지 ',
            call_67,
            '까지 진지한 얼굴로 맞장구치던데, 왜 그럴까요?',
          ]);
        },
        () => {
          kita.say([
            callname,
            '은(는) 저의 도움 대장이에요. 그러니까 항상 고마워요, ',
            callname,
            '! 에헤헤!',
          ]);
          era.print([
            kita.get_colored_name(),
            '은 웃으며 다가왔고, 검은 말 귀가 팔랑팔랑 ',
            you.get_colored_name(),
            '의 목덜미를 두드렸다.',
          ]);
        },
      );
    } else if (era.get('love:68') >= 50) {
      buffer.push(
        () => {
          kita.say([
            callname,
            '의 냄새만 맡아도 가슴이 아기 사슴처럼 계속 뛰어요.',
          ]);
          kita.say('이 기분은 대체 뭘까요?');
          era.print([
            kita.get_colored_name(),
            '은 꼬리로 ',
            you.get_colored_name(),
            '의 종아리를 톡톡 치며 말로 표현하기 힘든 표정을 지었다.',
          ]);
        },
        () => {
          kita.say([
            '음, 어제 ',
            call_7,
            '와(과) 나란히 달리고 나서 발이 조금 아파요……',
          ]);
          kita.say([callname, ', 좀 봐 주실래요?']);
          era.print([
            '부츠를 벗은 ',
            kita.get_colored_name(),
            '은 통통하고 하얀 작은 발을 ',
            you.get_colored_name(),
            '의 앞으로 들어 올렸다.',
          ]);
        },
        () => {
          kita.say([
            '트레센 학원에 있는 동안 ',
            callname,
            '은(는) 늘 저를 잘 돌봐 주셨어요!',
          ]);
          kita.say(
            '하지만 졸업하면 이렇게 챙겨 주시는 시간도 끝나겠죠. 그러니까 졸업할 때까지 제대로 보답해야 해요!',
          );
          era.print([
            '문득 감회에 젖은 표정을 보인 ',
            kita.get_colored_name(),
            '은 ',
            you.get_colored_name(),
            '을(를) 위해 더욱 열심히 노력하게 되었다.',
          ]);
        },
      );
      if (kita.sex_code !== 1) {
        buffer.push(() => {
          kita.say([
            '最近、',
            call_67,
            '、毎晩布団を被ってベッドで変な声を出してるみたい',
          ]);
          kita.say(['胸もずいぶん大きくなったし、学校が寂しすぎるのかな？']);
          era.print([
            '순진한 표정의 ',
            kita.get_colored_name(),
            '은 ',
            daiya.get_colored_name(),
            '가 오기 전에 성큼성큼 걸어갔다.',
          ]);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  select(kita, you, callname) {
    if (era.get('base:68:体力') < era.get('maxbase:68:体力') / 3) {
      kita.say('어라…… 제 체력, 아직 괜찮을 텐데요?');
      era.print([
        kita.get_colored_name(),
        '은 숨을 크게 헐떡이며 더는 트레이닝할 힘이 없어 보였다.',
      ]);
    } else {
      const buffer = [];
      buffer.push(
        () => {
          kita.say([
            '으으으…… 죄송해요, ',
            callname,
            '! 발을 삔 스모 선수가 도와 달라고 해서 늦었어요!',
          ]);
          era.print([
            kita.get_colored_name(),
            '은 두 손을 모아 사과하면서도 누군가를 도와줬다는 사실이 꽤 뿌듯한 눈치였다.',
          ]);
        },
        () => {
          kita.say([
            '오늘은 제시간에 맞췄네요, ',
            callname,
            '~ 그럼 바로 트레이닝 시작해요!',
          ]);
          era.print([
            '이미 땀투성이가 된 ',
            kita.get_colored_name(),
            '은 방긋 웃으며 ',
            you.get_colored_name(),
            '에게 말했다.',
          ]);
        },
      );
      if (era.get('love:68') >= 75) {
        buffer.push(() => {
          kita.say('요즘 트레이너의 지시를 받고 나면 몸이 뜨거워져요……');
          kita.say([callname, ', 저한테 더 많은 걸 요구해 주실래요?']);
          era.print([
            kita.get_colored_name(),
            '의 뺨이 살짝 붉어졌고, ',
            you.get_colored_name(),
            '에게 지적받자 당황해서 얼굴을 가리고 달아났다.',
          ]);
        });
      } else if (era.get('love:68') >= 50) {
        buffer.push(
          () => {
            kita.say([
              '영차, 영차, 헤헤~ 오늘 ',
              callname,
              '이(가) 준비한 트레이닝도 대단하네요. 그래도 전 지지 않아요!',
            ]);
            era.print([
              kita.get_colored_name(),
              '은 요즘 트레이닝에 무척 진지했다. 지시를 받으면 곧바로 다음 지시를 받고 싶어 했다.',
            ]);
          },
          () => {
            kita.say(['요즘 ', callname, '에게 첫눈에 반한 것 같아요……']);
            kita.say([callname, '도 저, 키타한테 같은 마음일까요?']);
            era.print([
              you.get_colored_name(),
              '의 곁에서 작게 무언가 중얼거리던 ',
              kita.get_colored_name(),
              '은 ',
              you.get_colored_name(),
              '이(가) 다가오자 고개를 저으며 웃고는 달려갔다.',
            ]);
          },
        );
      } else {
        buffer.push(() => {
          kita.say([
            callname,
            '에게 칭찬받고 싶고, ',
            callname,
            '이(가) 제가 이기면 웃어 줬으면 해요.',
          ]);
          kita.say([
            '그러니까 ',
            callname,
            ', 오늘 트레이닝도 봐주지 말고 부탁드려요!',
          ]);
          era.print([
            '미소 짓는 ',
            kita.get_colored_name(),
            '은 언제나처럼 변함없어 보였다.',
          ]);
        });
      }
      get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} kita キタサンブラック */
  async office_study(kita) {
    const buffer = [
      () =>
        kita.say_and_wait(
          '문학을 가르쳐 주실 거예요? 네, 두 배로 열심히 할게요!',
        ),
      () =>
        kita.say_and_wait(
          '으으으…… 아무리 노력해도 수학은 수학이라, 역시 모르겠어요……',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} teio トウカイテイオー
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async office_prepare(kita, teio, you, callname) {
    const buffer = [
      async () => {
        await kita.say_and_wait(
          '꿀 작은술 하나, 파파야를 썰어서 넣고…… 좋아! 레이스 전 준비 하나 끝!',
        );
        await era.printAndWait([
          '그렇게 웃으며 ',
          you.get_colored_name(),
          '에게 말한 ',
          kita.get_colored_name(),
          '은 나중에 음식을 남기면 안 된다며 꿀물을 전부 ',
          teio.get_colored_name(),
          '에게 마시게 했다.',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          '이(가) 편자를 박아 주시는 거예요? 에헤헤~ 이런 건 제가 할게요~',
        ]);
        await era.printAndWait([
          '그렇게 말하며 ',
          kita.get_colored_name(),
          '은 손가락으로 편자 못을 하나씩 눌러 박았다.',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '가속할 때는 무게중심을 낮추는 거군요. 알겠어요. 해내면 다음엔 이길 수 있겠네요.',
        );
        await era.printAndWait([
          '화이트보드의 계획을 진지하게 살펴본 ',
          kita.get_colored_name(),
          '은 ',
          you.get_colored_name(),
          '의 제안대로 바로 밖으로 한 바퀴 달리러 갔다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async talk(kita, callname) {
    const buffer = [];
    switch (era.get('cflag:68:干劲')) {
      case -2:
        buffer.push(
          () => kita.say_and_wait('어라? 제 장점은 근성…… 아니었나요?'),
          () =>
            kita.say_and_wait([
              '죄송해요, ',
              callname,
              '. 평소 트레이닝하던 힘이…… 사라진 것 같아요……',
            ]),
        );
        break;
      case -1:
        buffer.push(
          () => kita.say_and_wait('으으음…… 힘이 안 들어가요. 이상하네……'),
          () => kita.say_and_wait('저기…… 왠지 붕 뜬 것 같은데요?'),
        );
        break;
      case 0:
        buffer.push(
          () => kita.say_and_wait('어떤 트레이닝이든 척척 해내자고요!'),
          () =>
            kita.say_and_wait([callname, ', 트레이닝 시작해요! 준비됐어요!']),
        );
        break;
      case 1:
        buffer.push(
          () =>
            kita.say_and_wait('평소보다 훨씬 힘든 트레이닝이라도 끄떡없어요!'),
          () =>
            kita.say_and_wait([
              '근성만큼은 지지 않으니까, ',
              callname,
              ', 병기처럼 단련해 주세요!',
            ]),
        );
        break;
      case 2:
        buffer.push(
          () => kita.say_and_wait('후후, 이 기세라면 뭐든 할 수 있어요!'),
          () =>
            kita.say_and_wait(
              '발은 가볍고 머리는 잘 돌아가고, 오늘 키타는 굉장해요!',
            ),
        );
        break;
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async office_cook(kita, you, callname) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          callname,
          ', 끼니를 제대로 안 챙기고 컵라면으로 때우면 안 돼요. 드실 거면 채소라도 넣으세요.',
        ]);
        await era.printAndWait([
          '엄마 같은 모습으로 ',
          kita.get_colored_name(),
          '은 ',
          you.get_colored_name(),
          '의 허락을 받고 시금치와 배추를 작은 냄비에 넣었다.',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '네에? 트레이너실에서 전골을요? 역시 어른은 대담하네요.',
        );
        await era.printAndWait([
          '발열제로 데우는 냄비를 경외의 눈으로 바라보는 ',
          kita.get_colored_name(),
          '은 신기한 것을 본 작은 검은 고양이 같았다.',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '상점가 분들이 유통기한이 얼마 안 남은 빵이랑 우유를 주셨어요. 같이 샌드위치 만들래요?',
        );
        await era.printAndWait([
          '그렇게 말하며 ',
          kita.get_colored_name(),
          '은 유통기한이 임박한 빵을 상자째 꺼내 왔다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async office_rest(kita, you, callname) {
    const buffer = [
      async () => {
        await kita.say_and_wait(
          '쉬라고요? 괜찮아요, 괜찮아요. 키타는 몸이 튼튼하니까요.',
        );
        await kita.say_and_wait(['그보다 ', callname, ', 트레이닝 계속해요!']);
        await era.printAndWait([
          '그렇게 가슴을 두드리며 웃던 ',
          kita.get_colored_name(),
          '도 ',
          you.get_colored_name(),
          '의 지시에는 얌전히 쉬었다.',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          ', 정말 안 피곤해요…… 그러니까 낮잠 안 자도 되는데……',
        ]);
        await era.printAndWait([
          '작게 중얼거리던 ',
          kita.get_colored_name(),
          '은 누운 지 얼마 되지 않아 잠들어 버렸다.',
        ]);
      },
      async () => {
        await kita.say_and_wait('짜라란~ 오늘도 착실하게 트레이닝~');
        await kita.say_and_wait('너무 쉬다가 게을러지면 안 돼요~ 짜라란~');
        await era.printAndWait([
          '소파에 누워 유성 펜을 마이크처럼 쥔 ',
          kita.get_colored_name(),
          '은 나지막이 노래하기 시작했다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_67 キタサンのサトノダイヤモンドへの呼び方
   */
  async office_game(kita, you, callname, call_67) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          '으으…… ',
          call_67,
          ' 집에서 만든 게임을 하는 거군요……',
        ]);
        await era.printAndWait([
          '의욕이 넘치던 ',
          kita.get_colored_name(),
          '는 Ｓ◯ＧＡ 게임기인 것을 확인하자마자 눈에 띄게 귀를 축 늘어뜨렸다.',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '우오오오~ 일반 소환, 드래곤메이드 라도리! 덱에서 무작위로 세 장을 묘지로!',
        );
        await era.printAndWait([
          '그렇게 말하며 ',
          kita.get_colored_name(),
          '은 드래곤메이드 라도리를 필드에 엎어 놓고 빛의 창조신을 묘지로 보냈다.',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          '',
          callname,
          '! 주사위 놀이 해요! 재미있어요!',
        ]);
        await kita.say_and_wait(
          '고향에 있을 때 동성회 오빠들이랑 자주 했거든요. 에헤헤~',
        );
        await era.printAndWait([
          '손가락으로 주사위를 잡은 ',
          kita.get_colored_name(),
          '은 ',
          you.get_colored_name(),
          '의 앞에서 ',
          you.get_colored_name(),
          '이(가) 한 번도 본 적 없는 「떠올리기」 주사위 기술을 선보이기 시작했다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async o_r_fishing(kita, you, callname) {
    await era.printAndWait([
      '오늘은 ',
      kita.get_colored_name(),
      '과 낚시하러 가기로 약속했다……',
    ]);
    const buffer = [
      async () => {
        await kita.say_and_wait('소란, 소란, 소란! 영차~!');
        await era.printAndWait(
          '어째서인지 낚시가 참치잡이 배를 타고 참치를 잡는 일이 되어 있었다!?',
        );
        await era.printAndWait([
          '파도에 따라 높이가 육 미터나 오르내리는 어선 위에서 ',
          kita.get_colored_name(),
          '은 어마어마한 힘으로 그물을 끌어 올렸다.',
        ]);
        await era.printAndWait([
          '장관이라 부를 만한 그 모습과 몇 달에 걸친 일은 영원히 ',
          you.get_colored_name(),
          '의 머릿속에 새겨졌다.',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          '또 한 마리 잡았다! ',
          callname,
          ', 보셨어요?',
        ]);
        await era.printAndWait([
          '「역시 블랙 ',
          kita.elder_sibling_sex_title,
          ', 굉장해!」 어린 목소리의 찬사가 끊이지 않았다.',
        ]);
        await era.printAndWait([
          kita.get_colored_name(),
          '은 신나게 꼬리를 흔들며 분홍색 어린이용 낚싯대를 휘둘러 찌를 물에 던졌다.',
        ]);
        await kita.say_and_wait('에헤야~ 영차~ 소란, 소란!');
        await era.printAndWait([
          '고기잡이 노래를 부르는 ',
          kita.get_colored_name(),
          '의 뜨겁고 눈부신 모습이 ',
          you.get_colored_name(),
          '의 눈에 깊이 새겨졌다.',
        ]);
      },
      async () => {
        await kita.say_and_wait('흠흠흠~ 흠흠흠흠흠~');
        await era.printAndWait([
          kita.get_colored_name(),
          '은 작게 콧노래를 부르며 조용히 물고기가 물기를 기다렸다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  async o_r_walking(kita, you, callname) {
    const buffer = [
      () =>
        kita.say_and_wait(
          '강가의 공기가 맑고 시원하네요. 이런 날씨가 달리기 제일 좋아요~',
        ),
      () =>
        kita.say_and_wait(
          '강가에 갈대밭이 있어요! 꼭 고향에 돌아온 것 같네요.',
        ),
      async () => {
        await kita.say_and_wait(
          '강변을 산책하다가도 넘어진 격투가를 만나네요. 옮기는 건 저한테 맡기세요!',
        );
        await kita.say_and_wait([
          '네? 넘어진 게 아니라 맞은 것 같다고요? ',
          callname,
          ', 농담도 잘하시네요~ 그냥 발목을 삔 거예요~',
        ]);
        await era.printAndWait([
          '말을 돌린 ',
          kita.get_colored_name(),
          '은 다친 격투가를 업고 폭이 몇 미터나 되는 강을 가볍게 뛰어넘었다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_3 キタサンのトウカイテイオーへの呼び方
   * @param {PrintedSpan} call_13 キタサンのメジロマックイーンへの呼び方
   */
  async o_s_arcade(kita, you, callname, call_3, call_13) {
    const buffer = [
      async () => {
        await kita.say_and_wait([callname, ', 갑니다! 화조풍워어어얼!']);
        await era.printAndWait([
          '경쾌하게 버튼을 누르자 ',
          kita.get_colored_name(),
          '이 조종하는 꽃의 요괴가 한 번 뛰어올라 흑요의 무도가의 갈비뼈를 부러뜨렸다.',
        ]);
      },
      async () => {
        await kita.say_and_wait('으으으, 이 집게의 조이는 힘은……');
        await era.printAndWait([
          '몇 분이나 인형 뽑기 기계에 뺨을 붙이고 살펴보던 ',
          kita.get_colored_name(),
          '은 마침내 동전을 꺼내 넣었다.',
        ]);
      },
      async () => {
        await era.printAndWait([
          '오늘은 ',
          kita.get_colored_name(),
          '과 게임 센터에 갔다……',
        ]);
        await kita.say_and_wait([
          call_3,
          '와(과) ',
          call_13,
          '의 인형이에요! 트레센 근처 인형 뽑기 기계에도 드디어 들어왔어요!',
        ]);
        await era.printAndWait(
          '하지만 목적은 게임 센터 자체가 아니라 안에 있는 인형 뽑기 기계였다.',
        );
        await era.printAndWait([
          '길게 늘어선 인파를 헤치고도 의욕이 넘치는 ',
          kita.get_colored_name(),
          '은 투입구에 동전 몇 개를 밀어 넣었다.',
        ]);
        await era.printAndWait([
          '하지만 다소 서툰 솜씨에 ',
          you.get_colored_name(),
          '은(는) 걱정이 되었다. ',
          kita.get_colored_name(),
          '은 인형 뽑기 초보로 보인다. 정말 원하는 인형을 뽑을 수 있을까……?',
        ]);
        await kita.say_and_wait(
          '오늘 키타는 지갑을 다 비워서라도 뽑을 생각으로 왔어요! 못 뽑고 갈 수는 없죠!',
        );
        await era.printAndWait([
          kita.get_colored_name(),
          '의 기세를 보며 ',
          you.get_colored_name(),
          '은(는) 저도 모르게 한숨을 쉬고 ',
          kita.teen_sex_title,
          '의 곁으로 다가가 ',
          kita.sex,
          '를 대신해 조종간을 잡았다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_44 キタサンのトランセンドへの呼び方
   * @param {PrintedSpan} call_67 キタサンのサトノダイヤモンドへの呼び方
   * @param {boolean} hot_spring 温泉旅行券を引いたか
   */
  async o_s_drawing(kita, you, callname, call_44, call_67, hot_spring) {
    await era.printAndWait([
      '와 ',
      kita.get_colored_name(),
      '은 상점가 추첨 행사에 참가했다……',
    ]);
    if (hot_spring) {
      await kita.say_and_wait(
        '으으, 늘 상점가 분들 일을 도와드려서 공짜로 받은 추첨 기회…… 놓치지 않을 거예요!',
      );
      await era.printAndWait('빙글빙글빙글빙글……');
      await era.printAndWait('슝~');
      await era.printAndWait('상점가 경품 획득: 【온천 여행권】!');
      await kita.say_and_wait('해냈다! 특상! 특상이에요, 트레이너! 하하하하!');
      await kita.say_and_wait(
        '아, 하지만 이거 상점가 분들이 호의로 주신 추첨권인데…… 이렇게 좋은 걸 받아도 될까요?',
      );
      await era.printAndWait([
        '상점가 사람들의 다정한 미소에 마음이 놓인 ',
        kita.get_colored_name(),
        '은 조금 쑥스러워하며 온천 여행권을 받았다.',
      ]);
    } else {
      const buffer = [
        async () => {
          await kita.say_and_wait(
            '지나가던 하나야마 조직의 형님이 주신 추첨권…… 뭐가 나올까요?',
          );
          await era.printAndWait('빙글빙글빙글빙글……');
          await era.printAndWait('슝~');
          await era.printAndWait('상점가 경품 획득: 【평범한 티슈】!');
          await kita.say_and_wait(
            '아우, 티슈네요. 경품으로 나쁜 건 아니지만……',
          );
          await kita.say_and_wait(
            '역시 추첨기는 물론이고 책상까지 부술 기세로 돌려야 하나……',
          );
          await era.printAndWait([
            kita.get_colored_name(),
            '은 티슈를 받아 들고 풀이 죽어 고개를 떨구었다.',
          ]);
        },
        async () => {
          await kita.say_and_wait([
            call_67,
            '이(가) 상점가에서 쇼핑하고 주신 추첨권이에요. 한번 해 볼게요!',
          ]);
          await era.printAndWait('빙글빙글빙글빙글……');
          await era.printAndWait('슝~');
          await era.printAndWait('상점가 경품 획득: 【당근】!');
          await kita.say_and_wait(
            '으…… 당근 한 개뿐이에요? 너무 싼 것 같아서 조금 아쉬운데……',
          );
          await kita.say_and_wait(
            '아! 하지만 당근을 라이브 마이크로 써도 되겠네요! 에헤헤~',
          );
          await era.printAndWait([
            '당근을 쥐고 거리에서 즐겁게 노래하던 ',
            kita.get_colored_name(),
            '은 그 뒤 그 당근을 아삭아삭 먹어 버렸다.',
          ]);
        },
        async () => {
          await kita.say_and_wait(
            '와, 추첨 행사네요~ 마침 동네 아주머니가 주신 표가 있어요. 트레이너, 해 봐요!',
          );
          await era.printAndWait('빙글빙글빙글빙글……');
          await era.printAndWait('슝~');
          await era.printAndWait('상점가 경품 획득: 【당근 한 바구니】!');
          await kita.say_and_wait('대, 대단해요! 한두 끼는 먹을 수 있겠어요!');
          await era.printAndWait([
            '당근 더미 주위를 돌며 모두에게 나눠 주기로 한 ',
            kita.get_colored_name(),
            '을 보고 ',
            you.get_colored_name(),
            '은(는) 몰래 하나를 빼 두었다. ',
            kita.teen_sex_title,
            '이(가) 자기 몫까지 잊지 않도록.',
          ]);
        },
        async () => {
          await kita.say_and_wait([
            '에헤헤, ',
            call_44,
            '이(가) 생리대를 사고 주신 추첨권이에요. 뭐가 나올까요?',
          ]);
          await era.printAndWait('빙글빙글빙글빙글……');
          await era.printAndWait('슝~');
          await era.printAndWait(
            '상점가 경품 획득: 【특등 당근 함박스테이크】!',
          );
          await kita.say_and_wait(
            '호쾌한 요리네요! 양도 엄청나요! 커다란 냄비만 한데요!',
          );
          await era.printAndWait([
            '이렇게 커다란 고기는 대체 어디서 난 거야! ',
            you.get_colored_name(),
            '은(는) 그렇게 태클을 걸면서도 ',
            kita.get_colored_name(),
            '의 재촉에 휴대폰으로 다른 이들을 불러 고기를 해치우러 갔다.',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_44 キタサンのトランセンドへの呼び方
   */
  async o_s_ktv(kita, you, callname, call_44) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          '아아아~ 좋아요! 발성 정상! ',
          callname,
          ', 저, 노래 트레이닝 시작할게요!',
        ]);
        await era.printAndWait([
          '마이크를 꼭 쥔 ',
          kita.get_colored_name(),
          '은 평소처럼 고향에서 부르던 엔카를 부르기 시작했다.',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          '오늘은 노래뿐 아니라 스텝도 연습할 거예요. ',
          callname,
          ', 보고 계세요! 샤바다다다다~',
        ]);
        await era.printAndWait([
          '발끝으로 서서 빙글 돈 ',
          kita.get_colored_name(),
          '은 통통 뛰며 테이오의 스텝을 흉내 냈다.',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          call_44,
          '에게 블랙 메탈을 추천받았어요. 아직 들어 본 적은 없지만 오늘은 불러 보려고요…… ',
          '네, 안 된다고요? 왜요, ',
          callname,
          '？',
        ]);
        await era.printAndWait([
          '다른 음악에 도전하고 싶었던 ',
          kita.get_colored_name(),
          '은 입을 삐죽이며 말했다.',
        ]);
      },
    ];
    if (era.get('love:68') >= 75) {
      buffer.push(async () => {
        await kita.say_and_wait([
          '으아아아…… 이…… 이 노래, 너무해요! ',
          callname,
          ', 들으시면 안 돼요!',
        ]);
        await era.printAndWait([
          '야한 가사를 듣고 나서 ',
          you.get_colored_name(),
          '와(과) ',
          kita.get_colored_name(),
          '은 서둘러 노래를 바꿨다.',
        ]);
      });
    } else if (era.get('love:68') >= 50) {
      buffer.push(
        async () => {
          await kita.say_and_wait([
            '어때요, ',
            callname,
            ', 키타의 노랫소리에 깜짝 놀라셨어요? ',
            '왜 그런 표정이에요? 제가 뭐 잘못했나요?',
          ]);
          await era.printAndWait([
            kita.get_colored_name(),
            '이 몇 번이나 자각 없이 ',
            you.get_colored_name(),
            '에게 사랑 노래를 불러 주는 것을 듣고 ',
            you.get_colored_name(),
            '은(는) 무언가를 각오한 듯한 표정이 되었다.',
          ]);
        },
        async () => {
          await kita.say_and_wait([callname, ', 제 노래 어땠어요? 에헤헤……']);
          await era.printAndWait([
            you.get_colored_name(),
            '의 진심 어린 칭찬을 받은 뒤, 꼬리로 ',
            you.get_colored_name(),
            '을(를) 톡톡 치던 ',
            kita.get_colored_name(),
            '은 두 다리를 모으고 살며시 비볐다.',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_98 キタサンのコパノリッキーへの呼び方
   * @param {number} dice 祈祷の出目、0-1 の小数、小さいほど良い
   */
  async o_c_pray(kita, you, callname, call_98, dice) {
    await era.printAndWait([
      '오늘 ',
      you.get_colored_name(),
      '은(는) ',
      kita.get_colored_name(),
      '과 신사로 향했다. 쉬는 날이었지만 ',
      you.get_colored_name(),
      '은(는) 담당과 함께 신사 입구까지 왔다.',
    ]);
    await era.printAndWait(
      '의욕이 넘치는 담당을 위해서이기도 하고 다음 레이스의 승리를 빌기 위해서이기도 하니, 조금 바빠도 괜찮다.',
    );
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 그렇게 생각하며 도리이를 지나 ',
      kita.get_colored_name(),
      '이 ',
      you.get_colored_name(),
      '을(를) 데리고 온 신사로 들어갔다.',
    ]);
    era.println();
    era.printButton('「사람이 별로 없네.」', 1);
    await era.input();
    await era.printAndWait('낡아 보이는 신사는 지금 무척 한산했다.');
    await era.printAndWait([
      '찾아온 사람은 ',
      you.get_colored_name(),
      '와(과) ',
      kita.get_colored_name(),
      ' 둘뿐이었고, 신관이나 무녀의 모습도 보이지 않았다.',
    ]);
    await era.printAndWait('여기, 정말 괜찮은 곳일까……? 그런 의문이 들었다.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 말없이 있던 담당이 동전 몇 개를 꺼내 새전함에 넣고 손뼉을 친 뒤 두 손을 모아 작게 무언가 비는 모습을 지켜봤다.',
    ]);
    if (dice < 0.6) {
      await kita.say_and_wait('후아, 다행이다~');
      await era.printAndWait([
        '검은 머리의 ',
        kita.uma_sex_title,
        '는 안도의 숨을 내쉬며 기쁜 듯 가슴을 두드리고 햇살 같은 미소를 보였다.',
      ]);
      await kita.say_and_wait([
        call_98,
        '이(가) 추천해 준 특별히 영험한 신사라서 아까까지 말을 많이 못 했어요~',
      ]);
      await era.printAndWait('그래서 조용했던 거구나……');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한숨을 쉬고 곁에 선 담당의 머리를 가볍게 톡 쳤다.',
      ]);
      await era.printAndWait([
        '기분 탓인지 ',
        you.get_colored_name(),
        '은(는) 몸이 한결 가벼워진 느낌이 들었다.',
      ]);
      await era.printAndWait([
        '다음에도 참배하러 와야겠다고 ',
        you.get_colored_name(),
        '은(는) 저도 모르게 생각했다.',
      ]);
    } else {
      await kita.say_and_wait([
        '그다지 좋지 않은 운세가 나왔네요…… 그래도 괜찮아요. ',
        call_98,
        '에게 가서 개운 의식을 부탁하면 되니까요!',
      ]);
      await era.printAndWait([
        '늘 그렇듯 기운찬 ',
        kita.get_colored_name(),
        '을 보며 ',
        you.get_colored_name(),
        '은(는) 밀려오는 안도감을 느꼈다.',
      ]);
      await era.printAndWait('……하지만 조금은 짜증도 났다.');
    }
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_67 キタサンのサトノダイヤモンドへの呼び方
   * @param {PrintedSpan} call_98 キタサンのコパノリッキーへの呼び方
   */
  async o_s_restaurant(kita, you, callname, call_67, call_98) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          '후아아~ ',
          call_67,
          '이(가) 추천해 준 라멘집, 역시 양이 많네요. 잘 먹겠습니다!',
        ]);
        await era.printAndWait([
          '쇠고기 라멘을 와구와구 먹으며 ',
          kita.get_colored_name(),
          '은 행복한 표정을 지었다.',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          '저기가 ',
          call_98,
          '이(가) 추천해 준 중국집이에요. ',
          callname,
          ', 오늘은 여기서 볶음밥 먹어요!',
        ]);
        await era.printAndWait([
          '억지로 낡은 가게 안으로 끌려 들어간 뒤, ',
          you.get_colored_name(),
          '와(과) ',
          kita.get_colored_name(),
          '은 벽을 짚으며 밖으로 나왔다.',
        ]);
      },
      async () => {
        await kita.say_and_wait(
          '에헤헤, 요즘 상점가 일을 도와드리고 고깃집 쿠폰을 받았어요. 같이 가실래요?',
        );
        await era.printAndWait([
          '기름이 오른 뜨끈한 불고기 덮밥을 곱빼기로 먹고 나자 ',
          kita.get_colored_name(),
          '의 기분은 눈에 띄게 좋아졌다.',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          callname,
          '! 지난주에 옆 거리에 새 돈가스집이 생겼어요.',
        ]);
        await kita.say_and_wait(
          '양도 많고 하나야마 조직의 형님도 박수를 치셨대요. 가 봐요!',
        );
        await era.printAndWait([
          '담당이 추천한 곳은 확실히 양도 푸짐한 좋은 가게였다. 하지만 그 좋은 기분은 ',
          kita.get_colored_name(),
          '의 불룩해진 배를 보는 순간 흔적도 없이 사라졌다.',
        ]);
      },
    ];
    if (era.get('love:68') >= 90) {
      buffer.push(async () => {
        await kita.say_and_wait([
          '오늘은 장어덮밥이네요…… 헤헤, ',
          callname,
          ', 기운 내세요~',
        ]);
        await era.printAndWait([
          '옆자리에 앉은 ',
          kita.get_colored_name(),
          '은 ',
          you.get_colored_name(),
          '의 어깨에 기대며 ',
          you.get_colored_name(),
          '이(가) 보지 못하는 곳에서 수줍은 표정을 지었다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_3 キタサンのトウカイテイオーへの呼び方
   * @param {PrintedSpan} call_13 キタサンのメジロマックイーンへの呼び方
   * @param {PrintedSpan} call_67 キタサンのサトノダイヤモンドへの呼び方
   */
  async o_s_dating(kita, you, callname, call_3, call_13, call_67) {
    const buffer = [
      async () => {
        await kita.say_and_wait([
          '우와~ 오늘 상점가에서 볼더링 대회를 한대요~ ',
          callname,
          ', 해 보실래요?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 멀리서 준비 운동하는 스모 선수를 보고, 신청하러 가려던 ',
          kita.get_colored_name(),
          '을 간신히 말렸다.',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          '저기가 ',
          call_67,
          '이(가) 자주 가는 미용실이에요. 헤헤~ 조금 관심이 생기는데……',
        ]);
        await era.printAndWait([
          '입구에서 안을 기웃거리던 ',
          kita.get_colored_name(),
          '은 결국 미용실 안으로 들어갈 결심을 하지 못했다.',
        ]);
      },
      async () => {
        await kita.say_and_wait([
          '예쁜 기념품 가게네요. ',
          call_3,
          '와(과) ',
          call_13,
          '의 기념품도 있을까요?',
        ]);
        await era.printAndWait([
          '가게는 조금 낡아 보였지만 ',
          kita.get_colored_name(),
          '이 관심을 보이니 같이 둘러보기로 했다.',
        ]);
      },
    ];
    if (era.get('love:68') >= 90) {
      buffer.push(async () => {
        await kita.say_and_wait([
          callname,
          '와(과) 함께 거리를 걷기만 해도 정말 마음이 놓여요~ 흠흠흠~',
        ]);
        await kita.say_and_wait([callname, ', 좀 더 같이 걸어 주실래요?']);
        await era.printAndWait([
          you.get_colored_name(),
          '의 팔을 살며시 끼고 ',
          kita.get_colored_name(),
          '은 행복한 표정으로 ',
          you.get_colored_name(),
          '의 어깨에 기댔다.',
        ]);
      });
    } else if (era.get('love:68') >= 75) {
      buffer.push(async () => {
        await kita.say_and_wait([
          '이 시간에는 상점가에 사람이 많아요. ',
          callname,
          ', 떨어지지 않게 조심하세요.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 손을 살며시 잡은 ',
          kita.get_colored_name(),
          '은 귀를 살랑이며 검은 안내견처럼 ',
          you.get_colored_name(),
          '의 앞에서 걸었다.',
        ]);
      });
    } else if (era.get('love:68') >= 50) {
      buffer.push(async () => {
        await kita.say_and_wait(
          '트레센 근처에 목장이 있다니. 다음에 같이 보러 가요~',
        );
        await era.printAndWait([
          '발끝으로 서서 울타리 안을 들여다보던 ',
          kita.get_colored_name(),
          '은 신이 나서 콧노래를 부르기 시작했다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
   */
  good_night_normal(kita, you, callname) {
    era.print([
      '바쁜 하루가 끝나고 ',
      you.get_colored_name(),
      '은(는) ',
      kita.get_colored_name(),
      '을 학생 기숙사 입구까지 바래다주었다……',
    ]);
    if (era.get('love:68') >= 50) {
      kita.say(['에헤헤, ', callname, ', 내일 또 봬요!']);
      era.print([
        '그렇게 말하며 ',
        kita.get_colored_name(),
        '은 힘껏 ',
        you.get_colored_name(),
        '에게 몸을 부볐다가 타다닥 달려갔다.',
      ]);
    } else {
      kita.say([callname, ', 오늘 정말 수고하셨어요. 내일도 열심히 할게요.']);
      era.print([
        kita.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '에게 깊이 고개를 숙였고, ',
        you.get_colored_name(),
        '은(는) ',
        kita.get_colored_name(),
        '의 머리를 쓰다듬어 주었다. ',
        kita.sex,
        '가 기숙사에 들어가는 모습을 지켜본 뒤에야 돌아섰다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kita キタサンブラック
   * @param {CharaTalk} you プレイヤー
   * @param {1|2} check おやすみ求愛判定、=2 は大成功で拒否不可
   */
  async good_night_sex(kita, you, check) {
    era.print([
      '바쁜 하루가 끝나고 ',
      you.get_colored_name(),
      '은(는) ',
      kita.get_colored_name(),
      '을 학생 기숙사 입구까지 바래다주었다……',
    ]);
    era.print([
      you.get_colored_name(),
      '은(는) 평소처럼 헤어지려 했지만 ',
      kita.get_colored_name(),
      '은 드물게도 ',
      you.get_colored_name(),
      '을(를) 돌려보내 주지 않았다.',
    ]);
    era.printButton('눈짓의 뜻을 받아들인다', 1);
    era.printButton('모르는 척한다', 2, { disabled: check === 2 });
    return await era.input();
  },
  punishment_1: (() => {
    const title = '벌을 받은 뒤';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await kita.say_and_wait(
        '우와~ 트레이너가 우마무스메가 됐어요! 귀여워요~',
      );
      if (kita.sex_code !== 1) {
        await kita.say_and_wait(
          '에헤헤~ 같은 우마무스메가 되니까 전보다 덜 부끄러운 것 같아요~',
        );
      }
      await era.printAndWait([
        you.get_colored_name(),
        '을(를) 안고 친근하게 폴짝폴짝 뛰며 은근히 들뜬 표정을 보이던 ',
        kita.get_colored_name(),
        '은 웃었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  punishment_3: (() => {
    const title = '벌을 받은 뒤';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await kita.say_and_wait(
        '괴롭힘받는 걸 좋아하는 건 키타인데, 흐흥~ 그래도 트레이너는 저보다 더 괴롭힘받고 싶은 모양이네요.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 귓가에 살며시 그렇게 말하며, 검은 ',
        kita.uma_sex_title,
        '은 먹잇감을 보는 듯한 눈빛을 했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_valentine: (() => {
    const title = '밸런타인의 맑은 향기';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        '밸런타인데이, 달리 성 발렌티노의 날이라고도 하는 이날은 서로 좋아하는 남녀가 선물을 주고받는 기념일이다.',
      );
      await era.printAndWait(
        '사회에서는 남녀 연인들이 서로 어리광을 부리며 달콤하게 달라붙는 하루가 된다.',
      );
      await era.printAndWait(
        '하지만 학원에서는 과자를 자랑하고 누구에게나 초콜릿을 나눠 주는 날이기도 하다. 모두 즐겁게 단것을 먹으며 선생님 몫도 잊지 않는다.',
      );
      await era.printAndWait([
        '돌봐 주던 학생들과 동료들에게 받은 초콜릿 일고여덟 상자를 내려놓은 뒤, ',
        you.get_colored_name(),
        '은(는) 책상 뒤에 앉아 일을 시작할 준비를 했다.',
      ]);
      await kita.say_and_wait([callname, ', 계세요?']);
      await kita.say_and_wait([
        '헤헤헤~ 해피 밸런타인, ',
        callname,
        '! 이건 키타가 ',
        callname,
        '에게 드리는 선물이에요!',
      ]);
      await era.printAndWait([
        '그렇게 말하며 ',
        kita.get_colored_name(),
        '은 손에 든 선물을 ',
        you.get_colored_name(),
        '에게 건넸다. ',
        you.get_colored_name(),
        '은(는) 포장을 풀고 안에 든 검은 초콜릿을 꺼냈다.',
      ]);
      await era.printAndWait([
        '꽤 근사한 선물이다. ',
        kita.get_colored_name(),
        '이 기대에 찬 눈으로 바라보는 가운데 ',
        you.get_colored_name(),
        '은(는) 초콜릿을 한 입 베어 물고 ',
        kita.teen_sex_title,
        '의 작은 머리를 가볍게 쓰다듬었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = '크리스마스 특별 메뉴';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        '크리스마스의 트레센은 지난 십수 년간 그래 왔듯이 시끌벅적했다.',
      );
      await era.printAndWait([
        '지금 ',
        you.get_colored_name(),
        '와(과) ',
        kita.get_colored_name(),
        '도 다른 사람들처럼 식당에서 명절을 기념하며 휴일 특별 메뉴를 즐기고 있었다.',
      ]);
      await kita.say_and_wait(
        '으음…… 감자튀김 큰 걸로 두 접시, 치킨 너겟이랑 치킨버거 네 개, 콜라 두 잔……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 옆에서 ',
        you.get_colored_name(),
        '의 담당은 발끝으로 서서 카운터 뒤 메뉴를 보며 칼로리가 높은 음식을 거리낌 없이 주문하고 있었다.',
      ]);
      await era.printAndWait([
        '앞으로 트레이닝 강도를 높여야겠네…… ',
        you.get_colored_name(),
        '은(는) 마음속 수첩에 조용히 한 줄을 적었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  slave_end: (() => {
    const title = '지옥의 엔카 축제';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait('타닥, 타닥, 타닥.');
      await era.printAndWait([
        kita.get_colored_name(),
        '의 발소리가 평소처럼 제시간에 문밖에서 울렸고, 함께 들려오는 것은 ',
        kita.uma_sex_title,
        '의 밝은 노랫소리였다.',
      ]);
      await kita.say_and_wait([
        callname,
        ', 안녕하세요. 식사는 제대로 하고 계세요?',
      ]);
      await era.printAndWait(
        '미닫이문이 양옆으로 열리자 눈에 들어온 것은 햇살처럼 따뜻한 키타의 표정이었다.',
      );
      await era.printAndWait([
        '하지만 동시에 그것은 ',
        you.get_colored_name(),
        '의 가장 큰 채권자가 짓는, 너무나 즐거워서 ',
        you.get_colored_name(),
        '에게 중압감을 주는 미소이기도 했다.',
      ]);
      await kita.say_and_wait(
        '으헤헤~ 앞으로 몇 달이면 평소 생활로 돌아가서 트레센 학원에도 복귀할 수 있을 것 같아요.',
      );
      await kita.say_and_wait(
        '빚이 이 정도라 다행이에요. 아직 키타가 어떻게든 할 수 있는 범위니까요.',
      );
      await kita.say_and_wait(
        '하지만 앞으로 돈이 필요하면 키타한테 빌리세요. 다른 데서 빌리는 건 별로 정상적으로 보이지 않으니까요.',
      );
      await era.printAndWait([
        '미소를 지으며 천천히 ',
        you.get_colored_name(),
        '의 손을 맞잡는 『대가 없는 친절』 ',
        kita.get_colored_name(),
        '. 그녀가 짓는 표정은 결코 ',
        you.get_colored_name(),
        '이(가) 아무런 대가 없이 해피엔딩을 맞이하도록 두지 않을 것임을 암시하고 있었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
