/**
 * @file ゴールドシップ - 日常
 * @author 雞雞
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const gold_color = require('#/data/chara-colors').chara_colors[7][1];
const { escape_enum } = require('#/data/basement-const');

module.exports = {
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {number} b_escape 地下室からの脱出手段。0 のときは通常
   */
  good_morning(gs, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          gs.say('역시 협객이군, 골쉽의 빈틈을 노려 도망친 거냐.');
          gs.say([
            {
              color: gold_color,
              content: ' 흐흐, 다음엔 더 단단히 막아야겠네……',
            },
          ]);
          break;
        case escape_enum.beat:
          gs.say('제법인데, 골쉽 대마왕을 정면으로 쓰러뜨리다니.');
          gs.say([
            {
              color: gold_color,
              content:
                ' 그렇게 강한 용사라면 더 큰 도전도 두렵지 않겠지, 그렇지?',
            },
          ]);
          break;
        case escape_enum.strike:
          gs.say('크크크, 설마 네 녀석한테 당할 줄이야.');
          gs.say([
            {
              color: gold_color,
              content: '『다음』엔 좀 더 진심으로 해 주마.',
            },
          ]);
      }
    } else if (era.get('base:7:体力') < 0.45 * era.get('maxbase:7:体力')) {
      if (Math.random() < 0.5) {
        gs.say('지쳤다…… 매미 인생 둘째 주에 접어든 매미만큼 지쳤어……');
      } else {
        gs.say('이젠 무리야~ 부탁이다…… 오늘은 쉬게 해 줘.');
      }
    } else {
      const buffer = [
        () =>
          gs.say([
            {
              color: gold_color,
              content: 'RED·HOT·골쉽 등장! 이 세상을 새빨갛게 물들여 주마!!!',
            },
          ]),
        () => {
          gs.say('오늘 일정은 뭐냐? 스모 연습이냐?');
          gs.say([
            {
              color: gold_color,
              content: '좋아, 맡겨 둬!',
            },
          ]);
        },
        () => gs.say('다음엔 혀를 내밀고 달려 볼까.'),
        () =>
          gs.say([
            {
              color: gold_color,
              content: '오, 쉬는 거냐? 쉰다고!? 그럼 샹티이 숲으로 탐험 가자!',
            },
          ]),
        () =>
          gs.say([
            {
              color: gold_color,
              content:
                '처음엔 그냥 『한가해 보이는 녀석이 있네……』 싶었을 뿐이라구. 그래도 나를 만나고 나서 네 인생, 꽤 재밌어졌지?',
            },
          ]),
      ];
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   * @param {number|false} b_escape 地下室からの脱出手段。0 は通常、false はプレイヤーが寝ているため該当台詞なし
   */
  select_awake(gs, callname, b_escape) {
    if (b_escape > 0) {
      switch (b_escape) {
        case escape_enum.sneak:
          gs.say([
            callname,
            ', 넌 혼자 놀러 나갔다가 알아서 돌아오는 반려동물이냐?',
          ]);
          gs.say([{ color: gold_color, content: '뭐, 좋아. 수고를 덜었네.' }]);
          break;
        case escape_enum.beat:
          gs.say('크크크, 설마 네 녀석한테 당할 줄이야.');
          gs.say([
            {
              color: gold_color,
              content: '『다음』엔 좀 더 진심으로 해 주마.',
            },
          ]);
          break;
        case escape_enum.strike:
          gs.say(
            '어이어이, 자기 애마한테 그런 짓을 하다니 너무 매정한 거 아냐?',
          );
          gs.say([
            {
              color: gold_color,
              content: '그래도 골쉽은 배짱 있는 트레이너, 싫지 않다구❤️',
            },
          ]);
      }
    } else {
      if (Math.random() < 0.5) {
        gs.say('오! 골쉽 님한테 볼일 있냐?');
      } else {
        gs.say('골쉽 님을 따라와라!');
      }
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_study(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '그거 아냐? 도넛 반죽에 구멍만 뚫는 알바도 있다구. 그거 굉장해…… 허무하다는 점에서는……',
      );
    } else {
      await gs.say_and_wait(
        '그거 아냐? 연어는 빨갛게 보여도 생물학적으로는 흰살생선이래……',
      );
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_prepare(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '하이야~ 누구나 쿵푸를 익힐 수 있다네~ 쿵푸 앞에 겁쟁이는 없다네~',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '오늘, 나는 태양계 아홉 번째 행성에 발을 딛는다! 가자, 트레이너!',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async talk(gs) {
    if (era.get('base:7:体力') < 0.45 * era.get('maxbase:7:体力')) {
      if (Math.random() < 0.5) {
        await gs.say_and_wait(
          '지쳤다…… 매미 인생 둘째 주에 접어든 매미만큼 지쳤어……',
        );
      } else {
        await gs.say_and_wait('이젠 무리야~ 부탁이다…… 오늘은 쉬게 해 줘.');
      }
    } else {
      const buffer = [];
      switch (era.get('cflag:7:干劲')) {
        case -2:
          buffer.push(
            () => gs.say_and_wait('큰일인데…… 의식이 녹아내려……'),
            () => gs.say_and_wait('으아…… 졸려…… 볼일 끝나면 깨워 줘……'),
          );
          break;
        case -1:
          buffer.push(
            () =>
              gs.say_and_wait(
                '응…… 아, 트레이너……? 미안, 『eraUMA』 생각하고 있었어……',
              ),
            () => gs.say_and_wait('휙휙……! 안 돼…… 의욕이 안 난다!'),
          );
          break;
        case 0:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content: `오, 싸움이냐? 좋아, 덤벼!`,
                },
              ]),
            () =>
              gs.say_and_wait('어——? 일정이 있으면 뭐, 못 들어 줄 것도 없지.'),
          );
          break;
        case 1:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content: `야, 뭐 할 거 없으면 ${
                    era.get('cflag:7:性别') === 1 ? '나' : '나'
                  }는 마음대로 시내 구경하러 간다!`,
                },
              ]),
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content:
                    '어이어이, 이제 달려도 돼!? 안 달리게 하면 내 기운이 낭비된다구!',
                },
              ]),
          );
          break;
        case 2:
          buffer.push(
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content: '빨리…… 빨리 지시해! 못 기다리겠어, 서둘러!!!',
                },
              ]),
            () =>
              gs.say_and_wait([
                {
                  color: gold_color,
                  content:
                    '골드 쉽 대·폭·발! 의욕 MAX, 진짜 끝내주는 기분이다!!!',
                },
              ]),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_gift(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait('나으리, 짓궂으시구만~ 호호호~');
    } else {
      await gs.say_and_wait([
        '이럴 수가…… 골쉽한테 이렇게 비싼 선물을…… ',
        {
          content: '좋아! 그럼 나도 제대로 달려 주마!',
          color: gold_color,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_cook(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '응? 트레이너가 밥 사 주는 거냐? ',
        {
          color: gold_color,
          content: '뭐? 중등부 특유의 싸구려 영양 정식!? 그만둬어어어!!!',
        },
      ]);
    } else {
      await gs.say_and_wait([
        '트레이너, 소금 좀 줘! ',
        {
          color: gold_color,
          content: '우오, 맛있는 야키소바 냄새!',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_rest(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait('골쉽, 이제 마음이 꺾였다—— 안아 줘——');
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content: '——헉!!!',
        },
        '개미 세다가 나도 모르게 정신을 잃었어……',
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async office_game(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '트레이너~ 오늘은 뭐 할래? 『우마무스메 타이쿤』? 『URA2K』? 아니면…… ',
        { color: gold_color, content: '골·드·쉽?' },
      ]);
    } else {
      await gs.say_and_wait([
        '트레이너, ',
        { color: gold_color, content: '세가타 산시로가 창밖에서 보고 있다구.' },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async s_a_tree_hollow(gs) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '은 고목의 구멍으로 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        `${gs.uma_sex_title}이라면 말이야, 마지막 순간까지 울면 안 된다구……`,
      );
    } else {
      await gs.say_and_wait([
        '세 여신님, 듣고 계시면 말인데, ',
        {
          content: '고막은 아직 멀쩡하시냐?',
          color: gold_color,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async s_a_dating(gs) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '은 데이트를 하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '추억? ……함께 바닷속에서 보낸 이레 동안의 휴가가 그립네~',
      );
    } else {
      await gs.say_and_wait([
        '싫어~ 옷자락이 팔랑거려서 부끄럽단 말이야~',
        {
          color: gold_color,
          content: '야, 나 똑바로 보라구.',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async s_r_lunch(gs) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '은 도시락을 먹었다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait('이 감자 샐러드 맛있지? 가루 불려서 만든 거라구.');
    } else {
      await gs.say_and_wait([
        '봐라, 이 완벽한 고기의 오층탑을! 그야말로 정교함의 극치인 ',
        {
          color: gold_color,
          content: '……매실 장아찌를 넣은 삼겹살 조림이다.',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async o_r_fishing(gs) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '은 낚시하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '낚시에 필요한 건 정신력…… 자기 자신과의 싸움이지! 연못의 터줏대감을 낚아 올렸을 때, 내 마음은 『염소』를 이겨 낸 거라구!',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '후후~ 옷 안에 방탄조끼 입었거든. 하늘에서 작살이 떨어지든 연어가 떨어지든 흠집 하나 안 난다!',
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async o_r_walking(gs) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '은 산책하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '큰일이다, 방에서 키우는 도화지를 맡기는 걸 깜빡했어! 아아, 나 없으면 외로워할 텐데……',
        },
      ]);
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '코스 너머 하늘을 바라보면 이 몸의 고향, 황금별이 보이지 않을까…… 호호호……',
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async o_s_arcade(gs, callname) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '과 함께 게임 센터에 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '으랴! 집게 한 번으로 이것들 전부 잡아서…… 사라졌어!?',
      );
    } else {
      await gs.say_and_wait([callname, '! 총알 다 떨어졌다, 엄호해 줘! 우왓!']);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async o_s_drawing(gs, callname) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '은 뽑기를 하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        callname,
        {
          content: '! 돈 내놔, 10연차를 향한 내 마음은 이제 멈출 수 없어!!!',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait(
        '초소형 잠수함으로 타이타닉 잔해를 탐험하는 여행권, 안 나오려나?',
      );
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async o_s_ktv(gs, callname) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '은 노래방에 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '누구나 네게 눈길을 빼앗겨~♪ 너야말로 완벽하고 궁극의~',
        {
          content: '겟타!!!',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait([
        '요즘 젊은것들은 니코니코 초조곡도 모르더라…… ',
        callname,
        '도 아직 풋내기구만……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async o_s_movie(gs, callname) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '은 영화를 보러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '오! 쿠로후네 아빠가 나오는 영화잖아? ',
        callname,
        '도 볼래?',
      ]);
    } else {
      await gs.say_and_wait([
        '요즘 히어로 영화는 재미없네…… ',
        {
          content: '그래, 『돌아온 골드 쉽』이나 찍을까!',
          color: gold_color,
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {CharaTalk} you プレイヤー
   * @param {number} dice 祈りの出目。0-1 の小数、小さいほど良い
   */
  async o_c_pray(gs, you, dice) {
    await gs.say_and_wait([{ color: gold_color, content: '핫—— 휙휙!' }]);
    await era.printAndWait([
      gs.get_colored_name(),
      '은 남의 신사 문 앞에서 거센 바람에 흔들리는 풀처럼 몸을 흔들며 뭔가 중얼거리기 시작했다.',
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content: `${gs.uma_sex_title}를 내놔라! ${gs.uma_sex_title}를 내놔라!`,
      },
    ]);
    era.printButton('「뭐 하는 거야?」', 1);
    await era.input();
    await gs.say_and_wait([
      { color: gold_color, content: '보면 모르냐? 신을 부르는 거잖아.' },
    ]);
    await era.printAndWait([
      gs.sex,
      '의 의기양양한 얼굴에 ',
      you.get_colored_name(),
      '은(는) 조금 짜증이 났다. 하지만 ',
      gs.sex,
      '는 신경도 쓰지 않았다.',
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content: '예부터 신 앞에서 춤을 춰서 즐겁게 해 드리는 건 상식이잖아!',
      },
    ]);
    await gs.say_and_wait([
      {
        color: gold_color,
        content:
          '신의 사랑을 받는 골드 쉽이 디스코를 추는데, 신내림쯤이야 식은 죽 먹기지!',
      },
    ]);
    await era.printAndWait([
      '그때 ',
      gs.get_colored_name(),
      '의 몸이 굳고 눈이 번쩍 뜨였다!',
    ]);
    if (dice < 0.8) {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '예수님! 뜻을 알았습니다. 『잘 먹고 잘 자고, 밝은 마음으로 살라』는 거죠!',
        },
      ]);
      await era.printAndWait([
        '오른쪽 뺨을 씰룩거린 ',
        you.get_colored_name(),
        '은(는) 왜 신사에 예수가 있는지 따지고 싶었고, 그 계시가 말기 환자 돌봄 지침 같다는 말도 하고 싶었다.',
      ]);
      await era.printAndWait(
        `하지만 ${gs.sex}는 즐거워 보였다. 하고 싶은 대로 두자.`,
      );
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '부처님! 왜 저를 버리십니까! 『트레이너 말을 잘 들어라』라니……',
        },
      ]);
      await era.printAndWait([
        gs.get_colored_name(),
        '의 풀이 죽은 모습을 보고 ',
        you.get_colored_name(),
        '의 왼쪽 뺨 신경까지 씰룩거렸다.',
      ]);
      await era.printAndWait(
        `그래도 ${gs.sex}가 얌전히 말을 들어 준다면 나쁘지 않겠지……`,
      );
      await era.printAndWait('……안 되겠다, 역시 조금 짜증 난다.');
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async o_s_restaurant(gs) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '은 식사하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '커피 마실래? ',
        {
          color: gold_color,
          content: '우유 대신 고·추·기·름 넣어 줄게♪',
        },
      ]);
    } else {
      await gs.say_and_wait([
        '그러고 보니 라이스 녀석, 빵파라더라…… ',
        {
          color: gold_color,
          content: `설마 ${gs.sex}는 자기 자신의 안티인 거냐!?`,
        },
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async o_s_dating(gs) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '은 데이트를 하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait(
        '야, 백 년 뒤에 한가하냐? 한가하면 같이 우주에 가자.',
      );
    } else {
      await gs.say_and_wait([
        {
          color: gold_color,
          content:
            '골쉽한테서 눈 떼지 마라! 일 초 뒤에 무슨 일이 생길지는 나도 모르거든!',
        },
      ]);
    }
  },
  /**
   * @param {CharaTalk} gs ゴールドシップ
   * @param {PrintedSpan} callname ゴールドシップのプレイヤーへの呼び方
   */
  async o_s_shopping(gs, callname) {
    await era.printAndWait([
      '와 ',
      gs.get_colored_name(),
      '은 쇼핑몰에 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '있잖아, ',
        callname,
        ', 손잡을래? ',
        {
          color: gold_color,
          content: '……저쪽 가게, 커플은 이십 퍼센트 할인이라구!',
        },
      ]);
    } else {
      await gs.say_and_wait([
        callname,
        ', 아무리 나라도 맥도날드에서 오리지널 치킨을 시키진 않겠지?',
      ]);
    }
  },
  /** @param {CharaTalk} gs ゴールドシップ */
  async load_talk(gs) {
    if (Math.random() < 0.5) {
      await gs.say_and_wait([
        '『그것』을 사용할 거야? 너무 남용하진 마.',
        {
          content:
            '어쨌든 시공간에 장난치면 결국 시공간 연속성을 깨트린 대가를 받게 되니까.',
          color: gold_color,
        },
      ]);
    } else {
      await gs.say_and_wait([
        '『그것』이 정말 편리한 건 알아. 하지만 가끔은 ',
        {
          content: '자연스럽게 가는 게 더 재밌지 않아?',
          color: gold_color,
        },
      ]);
    }
  },
  slave_end: (() => {
    const title = '돈의 노예';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait([
        '사무실에서 ',
        you.get_colored_name(),
        '은(는) 책상 앞에 앉아 정장을 입고 안경을 쓴 채 계산기를 두드리는 ',
        gs.uma_sex_title,
        '를 난처한 얼굴로 바라보고 있었다.',
      ]);
      await era.printAndWait([
        gs.sex,
        '는 TN 액정에 뜬 숫자를 보고 고운 눈썹을 찌푸리더니 곤란하다는 듯 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      era.println();
      await gs.say_and_wait(
        '고객님, 그 정도 우마코인으로는 이번 달 이자에도 못 미치는데요.',
      );
      era.println();
      await gs.say_and_wait(
        '엎드려 울면서 꼭 갚겠다고 하셔도, 저희 회사는 이미 손실을 보고 있답니다.',
      );
      era.println();
      await era.printAndWait([
        gs.get_colored_name(),
        '이 입을 열었다. ',
        gs.sex,
        '의 손에 들린 계산기에는 간담이 서늘해지는 숫자가 떠 있었다.',
      ]);
      await era.printAndWait([
        gs.sex,
        '는 펜을 들어 폐지 뒷면에 마구 적었다. 내용은 온통 「매몰 비용」, 「자산 전용」, 「사무 수수료」 같은 것들뿐이었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 속수무책으로 고개를 떨구고 입을 다물었다. 애초에 반박할 여지가 없었다.',
      ]);
      era.println();
      await gs.say_and_wait('하아, 골쉽 은행은 자선 사업이 아니거든요.');
      era.println();
      await era.printAndWait([
        '그런데 ',
        gs.sex,
        '의 말투가 돌변했다. 고객을 걱정하는 척하던 말이 이제는 눈앞의 먹잇감을 함정으로 유인하는 달콤한 미끼가 된 것이다.',
      ]);
      era.println();
      await gs.say_and_wait([
        '「그런데, 관심 없으신가요…… ',
        {
          color: gold_color,
          content: '어쩌면 인생을 한 방에 뒤집을 수 있는 그런 게임에?」',
        },
      ]);
      era.println();
      await era.printAndWait([
        '대출금을 한꺼번에 갚을 유일한 동아줄을 붙잡기 위해 ',
        you.get_colored_name(),
        '은(는) 골드 쉽을 따라 『희망 골쉽호』라는 유람선에 올랐다……',
      ]);
      await era.printAndWait([
        '목숨을 건 도박에서 어떻게 살아 돌아올지는 이제 흐름에 몸을 맡긴 ',
        you.get_colored_name(),
        '의 손을 떠난 일이었다.',
      ]);
      era.println();
      await era.printAndWait([
        '돈으로 얽힌 인연에 사로잡혀 ',
        you.get_colored_name(),
        '은(는) 결말을 맞이했다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  basement_end: (() => {
    const title = '사랑의 감옥';
    /**
     * @param {CharaTalk} gs ゴールドシップ
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (gs, you) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 눈을 떴다. 주위는 어두컴컴했고 머리 위의 노란 전구만 열심히 빛을 내고 있었다.',
      ]);
      await era.printAndWait([
        '필사적으로 몸을 움직여 본 ',
        you.get_colored_name(),
        '은(는) 팔다리의 금속 족쇄가 힘만으로는 풀리지 않는다는 걸 깨달았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 정면에서 약간 왼쪽 바닥에는 낡은 브라운관 TV가 놓여 있었다. ',
        you.get_colored_name(),
        '은(는) 앞으로 무슨 일이 일어날지 벌써 알 것 같았다.',
      ]);
      era.println();
      await era.printAndWait(
        '아니나 다를까, 귀를 찌르는 딸깍 소리와 함께 화면이 켜졌다.',
      );
      await era.printAndWait([
        '그곳에 비친 것은 작은 ',
        gs.uma_sex_title,
        ' 인형이었다. 얼굴에는 기괴한 가면이 씌워져 있었다.',
      ]);
      await era.printAndWait([
        '인형이 어느 각도로 움직였을 때 ',
        you.get_colored_name(),
        '은(는) 그 아래에서 누군가 손으로 조종하는 모습을 보았다.',
      ]);
      era.println();
      await gs.say_as_unknown_and_wait([
        '안녕, ',
        you.get_colored_actual_name(),
        '. 게임을 시작하지——',
      ]);
      era.println();
      await era.printAndWait([
        '심하게 변조된 ',
        gs.sex_code === 1 ? '남자 목소리' : '여자 목소리',
        '였다. 하지만 ',
        you.get_colored_name(),
        '은(는) 프로그램의 도움 없이도 범인이 누구인지 짐작할 수 있었다.',
      ]);
      era.println();
      await gs.say_and_wait([
        '오랫동안 계약을 맺은 ',
        gs.uma_sex_title,
        '를 내버려 둔 탓에 ',
        gs.sex,
        '의 연심은 갈 곳을 잃었다.',
      ]);
      era.println();
      await gs.say_and_wait([
        {
          color: gold_color,
          content: `이제 그 ${gs.uma_sex_title}가 방에 들어가 네놈과 사투를 벌일 것이다.`,
        },
      ]);
      era.println();
      await era.printAndWait(
        '화면 속에서 대충 흔들리던 인형이 내려지고, 그 아래로 익숙한 모습이 나타났다.',
      );
      await era.printAndWait([
        gs.sex,
        '는 카메라를 향해 활짝 웃더니 우스꽝스러운 표정을 지었다.',
      ]);
      await era.printAndWait([
        gs.sex,
        '는 주먹을 폈다. 콘돔 봉지가 폭포처럼 쏟아진 뒤 촬영 범위 밖으로 사라졌다.',
      ]);
      era.println();
      await era.printAndWait('잠금장치가 풀렸다.');
      era.println();
      await era.printAndWait([
        '골드 쉽의 연정으로 만든 감옥에 갇혀 ',
        you.get_colored_name(),
        '은(는) 결말을 맞이했다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
