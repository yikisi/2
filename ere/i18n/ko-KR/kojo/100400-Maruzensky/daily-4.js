/**
 * @file マルゼンスキー - 日常
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  good_morning(maru, you, callname) {
    const buffer = [];
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say('으음~ 조금만 더 자게 해 줘.');
          maru.say('어제 그만 늦게까지 만화를 읽어 버렸어.');
          era.print([
            you.get_colored_name(),
            `은(는) 어쩔 수 없이 ${maru.name}를 흔들어 깨우고 전신 거울 앞에서 ${maru.sex}의 머리를 정돈해 주었다.`,
          ]);
        });
      } else {
        buffer.push(() => {
          maru.say('머리가 어질어질…… 이런 모습은 후배들에게 보일 수 없겠네.');
          era.print([maru.get_colored_name(), '은(는) 무척 졸려 보였다.']);
        });
      }
    } else {
      buffer.push(() => {
        maru.say('오늘 트레이닝 메뉴는 뭐야?');
        maru.say([
          maru.sex_code === 1 ? '핸섬한 남자' : '멋진 아가씨',
          '인 나는 벌써 준비됐어.',
        ]);
        era.print(`${maru.name}는 기대에 찬 얼굴이었다.`);
      });
      buffer.push(() => {
        maru.say('잔디 위를 달리는 느낌은 정말 기분 좋네.');
        maru.say(`어머, ${callname}이었구나. `);
        era.print([
          you.get_colored_name(),
          '이(가) 제시간에 코스에 도착했을 때, ',
          maru.get_colored_name(),
          '은(는) 이미 몇 바퀴나 달린 뒤였다.',
        ]);
      });
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say(`${callname}, 좋은 아침⭐`);
          maru.say('……왜 옆방까지 깨우러 왔냐고?');
          maru.say(
            `깨워 주는 다정한 ${
              maru.elder_sibling_sex_title
            }가 있다니, 행복하지 않니?`,
          );
          era.print([
            maru.get_colored_name(),
            '은(는) ',
            you.get_colored_name(),
            '의 이불을 걷어 내고 빨리 준비하라고 재촉했다.',
          ]);
        });
      } else if (era.get('love:4') >= 50) {
        buffer.push(() => {
          maru.say(
            `${callname}에게는 아직 눈뜨지 않은 힘이 잠들어 있는 것 같아.`,
          );
          maru.say('아직은 약하지만 곧 모습을 드러내지 않을까?');
          era.print([
            maru.get_colored_name(),
            '은(는) 생각에 잠긴 듯 ',
            you.get_colored_name(),
            '을(를) 살폈다.',
          ]);
        });
        buffer.push(() => {
          maru.say(
            `${callname}, 곤란한 일이 있으면 ${
              maru.elder_sibling_sex_title
            }에게 말해 줘.`,
          );
          maru.say(
            '계속 마음속에만 담아 두면 만능 열쇠라도 녹슨 열쇠 구멍에는 들어가지 못해.',
          );
          era.print([
            maru.get_colored_name(),
            '는 걱정스러운 눈으로 ',
            you.get_colored_name(),
            '을(를) 바라보았다.',
          ]);
        });
      } else {
        buffer.push(() => {
          maru.say(
            '전력으로 달리면 묘한 느낌이 들어. 둥실둥실, 잔디 위에 떠 있는 것처럼.',
          );
          maru.say(`……아, ${callname}, 좋은 아침.`);
          era.print(`잔디 위를 달리던 ${maru.name}은(는) 생각에 잠겨 있었다.`);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select(maru, you, callname) {
    const buffer = [];
    if (era.get('base:4:体力') < era.get('maxbase:4:体力') / 3) {
      buffer.push(() => {
        maru.say('「이 정도로는 부족해. 너는 더 잘할 수 있어」');
        maru.say(`이런~. ${callname}의 부탁이라면……`);
        era.print([
          maru.get_colored_name(),
          '은(는) 복잡한 표정으로 ',
          you.get_colored_name(),
          '을(를) 바라보았다.',
        ]);
      });
    } else {
      buffer.push(
        () => {
          era.print([
            maru.get_colored_name(),
            '은(는) 달릴 때 몸에 부딪치는 바람을 즐기고 있었다.',
          ]);
          maru.say(
            `${callname}에게 고민이 있으면 ${
              maru.elder_sibling_sex_title
            }에게 말해 줘.`,
          );
          era.print([
            maru.get_colored_name(),
            '은(는) 여유롭게 웃으며 ',
            you.get_colored_name(),
            '을(를) 바라보았다.',
          ]);
        },
        () => {
          maru.say(
            `오늘 메뉴는 뭐야? 뭐든 ${maru.elder_sibling_sex_title}에게는 식은 죽 먹기지.`,
          );
          era.print(
            `어느새 주위에 ${maru.uma_sex_title}가 모여 있었다. 이것이 ${
              maru.name
            }의 매력이다.`,
          );
        },
      );
      if (era.get('love:4') >= 75) {
        buffer.push(() => {
          maru.say(
            `${callname}, 트레이닝 끝나면 내 애마로 드라이브하지 않을래?`,
          );
          maru.say(
            `서늘한 밤바람을 맞으면 ${maru.uma_sex_title}도 사람도 기분이 좋아지거든.`,
          );
          era.print([
            maru.get_colored_name(),
            '은(는) 온몸으로 ',
            you.get_colored_name(),
            '의 팔에 기대었다. 어느새 꼬리도 ',
            you.get_colored_name(),
            '의 허벅지를 감싸고 있었다.',
          ]);
        });
      } else if (era.get('love:4') >= 50) {
        buffer.push(
          () => {
            maru.say(
              '으음~ 사계절의 바람은 저마다 다르지만, 하나를 고르라면 봄바람이 가장 좋아.',
            );
            maru.say(`${callname}은(는) 어느 계절의 바람을 좋아해?`);
            era.print([
              maru.get_colored_name(),
              '은(는) 미소를 지으며 ',
              you.get_colored_name(),
              '을(를) 바라보았다.',
            ]);
          },
          () => {
            maru.say(
              '「봄에는 마법 같은 힘이 있어. 더 나은 내가 되고 싶게 만드는 힘」',
            );
            maru.say(`${callname}은(는) 어떻게 생각해?`);
            era.print([
              '스트레칭을 하기 전, ',
              maru.get_colored_name(),
              '와(과) 잡담을 나누던 ',
              maru.sex,
              '가 ',
              you.get_colored_name(),
              '에게 그렇게 물었다.',
            ]);
          },
        );
      } else {
        buffer.push(() => {
          maru.say(
            `바람의 매력을 나를 동경하는 후배들에게. 희망의 바람의 화신, ${maru.name}야~.`,
          );
          maru.say(`후후, ${callname}, 이 대사 어때?`);
          era.print(`웃음을 띤 ${maru.name}는 기분 좋게 꼬리를 흔들고 있었다.`);
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select_after_recruit(maru, you, callname) {
    maru.say(
      `하이~ ${you.sex_code !== 1 ? '아가씨' : '핸섬 보이'}, 나는 ${maru.name}야.`,
    );
    maru.say(
      `레이스장에서 나를 동경하는 후배들에게 ${maru.elder_sibling_sex_title}의 멋진 뒷모습을 보여 주고 싶네.`,
    );
    maru.say(`그나저나 ${callname}, 참 귀엽네. 여름이 주는 느낌 그 자체야.`);
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  select_sister_annoyance(maru) {
    maru.say('더 큰 무대에서 달리면 마음까지 반짝이는 것 같아♪');
    maru.say(
      `무슨 일이 생기면 꼭 ${maru.elder_sibling_sex_title}에게 상담해 줘, 알았지?`,
    );
    maru.say('……우리 사이에는 비밀이 없으면 좋겠어.');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select_girls_blue(maru, callname) {
    maru.say('무릎이 전보다 훨씬 아파.', true);
    maru.say('앞으로 얼마나 더 버틸 수 있을까.', true);
    maru.say(`적어도 ${callname}에게는 들키지 않도록 해야겠지.`, true);
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  select_true_end(maru) {
    maru.say('같은 후회를 두 번 다시 하지 않기 위해.');
    maru.say('적어도 길을 잃은 후배들에게 참고할 만한 길을 남기기 위해.');
    maru.say('앞으로도 힘내야겠네!');
    maru.say('이렇게, 타타탁 백스텝이야!');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select_good_end(maru, you, callname) {
    maru.say(
      `괴로움도, 외로움도, ${callname}와(과) 함께라면 대수롭지 않은 것 같아.`,
    );
    maru.say(
      `우마무스메로 살아가며 ${callname}을(를) 만난 건 평생의 행운일지도 모르겠네.`,
    );
    maru.say('늘 도와줘서 고마워.');
    maru.say('앞으로도 같이 힘내야겠지?');
    maru.say(`음, ${callname}에게 너무 부담을 주는 걸까?`);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   * @param {number} wind マルゼンスキー育成用変数 wind の値
   * @returns {boolean} wind が特定値なら本文を出したので true、そうでなければ続行
   */
  select_by_wind(maru, you, callname, wind) {
    switch (wind) {
      case 1:
        maru.say(`앞으로도 잘 부탁해. ${callname}♪`);
        break;
      case 5:
        maru.say(
          `이건 ${maru.sex_code === 1 ? '핸섬한 남자' : '멋진 아가씨'}인 내게 주는 거야?`,
        );
        maru.say(`그럼, ${callname}, 고마워♪`);
        maru.say('후후~ 예쁘네.');
        break;
      case 10:
        maru.say(
          '잔디 위를 아무리 달려도 그때의 느낌이 돌아오지 않아. 사는 보람이 없네.',
        );
        maru.say('……');
        maru.say('바람이 멎었다.');
        break;
      case 15:
        maru.say(
          `트레센에서의 그 밤, 잔디 위를 달리던 ${maru.uma_sex_title}들.`,
        );
        maru.say(`응원해 주는 후배들과 곁에 있는 ${callname}。`);
        maru.say('진심으로 행복하다고 생각했어.');
        break;
      case 20:
        maru.say('하늘과 잔디, 그리고 그 사이를 거니는 우리.');
        maru.say('그리운 눅눅한 여름과 건조한 가을.');
        maru.say(
          `앞으로도 함께 걸어가자, 응? ${you.sex_code === 1 ? '트·레·이·너·군' : '트·레·이·너·양'}♪`,
        );
        break;
      default:
        return false;
    }
    return true;
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select_Self_contempt(maru, callname) {
    maru.say(`왜 그렇게 풀이 죽어 있니?`);
    maru.say('어서 기운 내!');
    maru.say(`나는 계속 ${callname}을(를) 기다리고 있으니까!`);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  select_happiness_day(maru, callname) {
    maru.say(`새파란 하늘, 새로 돋은 잔디. 어쩐지 그리운 느낌이 드네.`);
    maru.say(`어머, ${callname}, 언제 왔니?`);
    maru.say('그럼 멋진 하루를 함께 즐겨 보자.');
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_study(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          '여러 레이스에 나가려면 다양한 주법을 익히는 것도 중요하지…… 과감하게 드리프트 주법을 시도해 볼까?',
        ),
      () =>
        maru.say_and_wait(
          '뒤에서 이끌려 가기보다 이렇게 한 번에 결승선까지 달려가는 느낌, 참을 수 없이 좋네♪',
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            '역대 중상 레이스 영상을 보며 도주의 요점을 분석하고 실력을 높여 보자.',
          ),
        () =>
          maru.say_and_wait(
            `${callname}의 지도 덕분에 ${
              maru.elder_sibling_sex_title
            }도 많이 성장했어. 짱이야!`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_prepare(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait('후배들에게 멋지게 달리는 모습을 보여 줘야겠지.'),
      () =>
        maru.say_and_wait(`${callname}은(는) 조수석에서 바람의 춤을 즐겨 줘.`),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}에게 받은 불꽃을 후배들에게 보여 줄게.`,
          ),
        () =>
          maru.say_and_wait(
            `${callname}, 조금만 더 안고 있어도 될까? 뭐, 안 돼? 치사해.`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async talk(maru, callname) {
    const buffer = [];
    if (era.get('cflag:4:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:4:干劲')) {
        case -2:
          buffer.push(
            () =>
              maru.say_and_wait(
                '손에 반창고? 이런~. 오늘 아침에 직접 밥을 만들려다가 음악을 들으면서 그만 손가락을 베었어…… 땀 뻘뻘. 정말 괜찮아.',
              ),
            () =>
              maru.say_and_wait(
                `오늘은 왜 이렇게 늦었냐고? 머리도 엉망이고……? 일어나다가 상자를 쓰러뜨려 내용물을 다 쏟았는데, 다시 담느라 오래 걸려서 서둘러 왔어. 그래도 괜찮아. 오늘 메뉴는 뭐야?`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              maru.say_and_wait(
                `${callname}, 이 휴대폰 여는 방법 좀 봐 줄래? 어? 이렇게 간단해?`,
              ),
            () =>
              maru.say_and_wait(
                `어제 만화에 푹 빠져 버렸어. ${callname}, 미안해.`,
              ),
          );
          break;
        case 0:
          buffer.push(
            () => maru.say_and_wait(`${callname}, 오늘 일정은 뭐야?`),
            () =>
              maru.say_and_wait(
                `혹시 ${callname}에게 무슨 일이 생기면 내게 이야기해 줘. 아니, ${
                  maru.sex_code === 1 ? '핸섬한 남자' : '멋진 아가씨'
                }인 나는 언제든 대환영이야♪`,
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              maru.say_and_wait(
                `오늘 컨디션은 나쁘지 않네. ${callname}은(는) 어때?`,
              ),
            () =>
              maru.say_and_wait(
                `열심히 노력하는 아이들이 내 등을 보며 바람을 맞는 즐거움을 좇아 주면 좋겠어.`,
              ),
            () =>
              maru.say_and_wait(
                `${callname}, 트레이닝 끝나고 같이 주스 마실래?`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () => maru.say_and_wait(`헬로! ${callname}의 열기가 전해져 와♪`),
            () =>
              maru.say_and_wait(
                `최상의 컨디션! ${callname}은(는) 여기서 내가 지난 기록을 깨는 걸 지켜봐 줘♪`,
              ),
            () =>
              maru.say_and_wait(
                `내가 ${callname}의 안에 잠든 열기에 불을 붙여 줄게. 렛츠 고!`,
              ),
          );
      }
    }
    if (era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}, 봄바람의 기운이 느껴져? 대지의 속박을 벗어나 하늘에서 노니는 봄바람 말이야.`,
          ),
        () =>
          maru.say_and_wait(
            `귀여운 후배들이 봄꽃처럼 향기를 풍기네. ${
              maru.sex
            }들의 향기가 이 세상 구석구석까지 닿으면 좋겠어.`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8) {
      buffer.push(
        () =>
          maru.say_and_wait(
            '사계절 중 가장 끌리는 건 여름이야. 밤에 기온이 딱 좋을 때 애마와 함께 자유롭게 달리면, 나도 여름 바람과 하나가 된 것 같거든.',
          ),
        () =>
          maru.say_and_wait(
            `${callname}, 밤에 시간 있니? 트레이닝 끝나면 같이 바다에 가지 않을래? 촉촉한 바닷바람이 답답한 건조함을 날려 주고, 달빛 아래서 온몸이 씻겨 내려가는 것 같아.`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11) {
      buffer.push(
        () =>
          maru.say_and_wait(
            '으음~ 가을이네. 가을에는 이대로 잠들어 버리고 싶어지는 기운이 있어. 트레이닝 끝나고 트레이너실에서 잠깐 쉬어도 될까?',
          ),
        () =>
          maru.say_and_wait(
            `식욕의 가을, 독서의 가을. 가을에는 감성적인 분위기가 있지. 여름의 습기와 열기도 가을이 오면 조금씩 옅어져 가고.`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2) {
      buffer.push(
        () =>
          maru.say_and_wait(
            '만물이 쉬어 가는 겨울날, 바람의 정령만이 이 하얀 대지에서 춤추고 있어. 후배들도 잔디 위를 마음껏 달리고 싶은 모양이네.',
          ),
        () =>
          maru.say_and_wait(
            `${callname}, 너는 어쩐지 따뜻하네. 트레이닝 끝나고 상점가에서 따뜻한 음료 한 잔, 같이 어때?`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_gift(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait(`이 인형, 내게 주는 거야? ${callname}, 고마워.`),
      () =>
        maru.say_and_wait(`내가 좋아하는 코코넛 음료네. 고마워, ${callname}`),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `이건 답례를 생각해 봐야겠네. 정말 좋아. 밤에 돌아갈 때 ${
              maru.elder_sibling_sex_title
            }의 손맛을 보여 줄게.`,
          ),
        () =>
          maru.say_and_wait(
            `뭐?! 샴페인 잔에 담은 과일 초콜릿은 어떨 것 같냐고? ${callname}은(는) 언제나 신기한 발상을 하네…… 시간 날 때 만들어 볼까?`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_cook(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait('그리운 맛이네. 그럼 사양하지 않을게?'),
      () =>
        maru.say_and_wait(
          `${callname}은(는) 거기 앉아서 내가 요리하는 모습을 지켜봐…… 응? 같이 만들고 싶다고?`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}, 이 오므라이스 어때? 맛있지? ${callname}의 행복한 얼굴을 보고 있으니 나도 배가 부른 것 같아.`,
          ),
        () =>
          maru.say_and_wait(
            `${
              maru.elder_sibling_sex_title
            }를 위해 요리 한 가지 만들어 달라고…… 어질어질하네. 이게 행복의 맛일까? 지금 가슴이 두근두근, 멈추질 않아♪`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_rest(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `모처럼 쉬는 날이니까, ${callname}, 최신 유행 잡지 같이 볼래?`,
        ),
      () =>
        maru.say_and_wait(
          `${callname}, 수고했어. 아, 미안. 무심코 머리를 쓰다듬어 버렸네.`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}, 조금만 더 안고 있어도 될까? 너에게는 언제나 따뜻한 기운이 있어.`,
          ),
        () =>
          maru.say_and_wait(
            `${callname}은(는) 매일 이렇게 힘든데 내가 도울 일은 없니? 아니면 예전처럼 내 품에 머리를 묻고 싶어?`,
          ),
        () =>
          maru.say_and_wait(
            '착하지, 착해. 매일 수고가 많지? 내 품에서 잠깐 쉬렴.',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async office_game(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `${
            maru.elder_sibling_sex_title
          }는 게임에 서툴러. ${callname}, 추천해 줄 만한 게 있니?`,
        ),
      () =>
        maru.say_and_wait(
          `트레이너실에 앉아 있느니 밖에서 트레이닝을…… 수영복 차림이 보고 싶다고? ${callname}, 짓궂네. 그때를 기대해 줘♪`,
        ),
    );
    if (era.get('love:4') >= 75) {
      buffer.push(
        () =>
          maru.say_and_wait(
            `${callname}, 「가을○의 추억」이라는 게임 알아? 나도 해 본 적은 없지만 모처럼이니 같이 해 보자!`,
          ),
        () =>
          maru.say_and_wait(
            '그 여름의 바람을 다시 느끼고 싶네. 그 마을의 소년과 소녀가 처음 만났을 때처럼.',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  async s_a_tree_hollow(maru) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `고민? 후후, ${maru.elder_sibling_sex_title}에게는 지금은 없어.`,
        ),
      () =>
        maru.say_and_wait(
          `내 달리기는 ${maru.uma_sex_title}들에게 희망을 전해 주는 걸까, 아니면 더 깊은 절망을…… 아니, 아무것도 아니야⭐`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async s_a_dating(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `나도 방금 도착했어. 기다리지 않고 ${callname}을(를) 만났네.`,
        ),
      () => maru.say_and_wait(`직접 도시락을 준비했어. 소풍 가서 먹어 봐♪`),
    );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maru マルゼンスキー */
  async school_rooftop(maru) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `옥상에서 도시락을 먹으면 마음까지 바람처럼 자유로워져.`,
        ),
      () =>
        maru.say_and_wait(
          `이렇게 머리를 비우고 내가 잔잔한 봄바람이 되어 부드러운 햇살 아래 춤추는 모습을 상상하면, 기분까지 들뜨네.`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_r_fishing(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `음, ${
            maru.elder_sibling_sex_title
          }는 낚시에 서툴러. 그럼 ${callname}에게 부탁할게.`,
        ),
      () =>
        maru.say_and_wait(
          `후후, ${callname}의 진지한 얼굴을 보고 있으면 나도 기뻐.`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_r_walking(maru, callname) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `강가의 공기가 신선하네. ${callname}도 기분이 좋아지지 않았니?`,
        ),
      () =>
        maru.say_and_wait(
          `강가에서 노래를 연습하는 후배들의 열정을 보고 있으면 내 기분까지 정말 좋아져.`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_arcade(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`${callname}도 같이 춤추지 않을래?`);
        await era.printAndWait(
          `마루젠스키는 댄스 게임이 처음인데도 유연한 몸과 타고난 리듬감으로 금세 게임의 규칙을 익혔다.`,
        );
      },
      async () => {
        await maru.say_and_wait(`다음에는 저쪽 게임을 해 보자.`);
        await era.printAndWait(
          `${maru.name}은(는) 새로운 것을 만난 아이처럼 눈을 반짝였다.`,
        );
      },
      async () => {
        await maru.say_and_wait(`이렇게 열심인 트레이너라니, 귀엽네.`, true);
        await era.printAndWait([
          maru.get_colored_name(),
          '은(는) 웃으며 인형 뽑기를 조작하는 ',
          you.get_colored_name(),
          '의 긴장한 얼굴을 바라보았다.',
        ]);
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_drawing(maru, you, callname) {
    await maru.say_and_wait(`${callname}도 운을 시험해 볼래?`);
    await era.printAndWait(
      `${maru.name}은(는) 상점가 근처의 추첨기를 가리켰다.`,
    );
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`괜찮아. 다음 기회도 있잖아.`);
        await era.printAndWait([
          maru.get_colored_name(),
          '은(는) 휴지를 뽑은 ',
          you.get_colored_name(),
          '을(를) 위로했다.',
        ]);
      },
      async () => {
        await maru.say_and_wait(`저녁은 당근으로 하자.`);
        await era.printAndWait(`${maru.name}은(는) 뽑은 당근을 보며 말했다.`);
      },
      async () => {
        await maru.say_and_wait(
          `응, 당근이 이렇게 많으니 트레이너실에서 파티하자.`,
        );
        await era.printAndWait(
          `그 뒤 ${maru.name}는 테이오를 비롯한 ${
            maru.couple_title
          }을 트레이너실로 불러 당근 파티를 즐겼다.`,
        );
      },
      async () => {
        await maru.say_and_wait(`짱이야! 당근 버거!`);
        await era.printAndWait([
          '그날 밤, ',
          you.get_colored_name(),
          '와(과) ',
          maru.get_colored_name(),
          '은(는) 이 행운의 선물을 함께 맛보았다.',
        ]);
      },
      async () => {
        await era.printAndWait(`딸랑딸랑`);
        await maru.say_and_wait('！', true);
        await era.printAndWait(`추첨함 옆의 점원「축하합니다」`);
        await era.printAndWait([
          maru.get_colored_name(),
          '은(는) 온천 여행권을 뽑은 ',
          you.get_colored_name(),
          '을(를) 바라보았다.',
        ]);
        await maru.say_and_wait(`운이 좋네. 시간 날 때 같이 온천에 가자.`);
        await era.printAndWait(
          `그 뒤 두 사람은 기분 좋게 트레이너실로 돌아왔다.`,
        );
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_ktv(maru, you, callname) {
    await maru.say_and_wait(`${callname}, 이 최신 유행곡 한번 들어 봐.`);
    await era.printAndWait([
      maru.get_colored_name(),
      '은(는) 제법 옛날 노래를 고른 모양이었다. ',
      you.get_colored_name(),
      '은(는) 추억에 잠겼다.',
    ]);
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_movie(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(
          `요즘 개봉한 로맨틱 코미디가 평이 좋다더라. ${callname}, 같이 볼래?`,
        );
        await era.printAndWait(
          `${maru.name}은(는) 영화 추천 목록의 고전 명작 열 편 상영 안내를 가리키고 있었다.`,
        );
      },
      async () => {
        await maru.say_and_wait(
          `짜릿한 액션 영화 볼래? 그 막 펑펑 쾅쾅 하는 느낌 말이야.`,
        );
        await era.printAndWait(`두 사람은 최근 개봉한 영화 이야기를 나누었다.`);
      },
      async () => {
        await maru.say_and_wait(
          `${callname}……이제 안 되겠어. 아직도 다리가 떨려.`,
        );
        await era.printAndWait(
          `기분 내키는 대로 공포 영화에 도전한 두 사람은 서로 부축하며 상영관을 나왔다.`,
        );
      },
    );
    if (era.get('love:4') >= 75) {
      buffer.push(async () => {
        await maru.say_and_wait(`음…… 오늘은 로맨틱 코미디로 하자.`);
        await era.printAndWait(
          `바보 같은 연인은 영화가 절정에 이르렀을 때 주인공들처럼 입을 맞췄다.`,
        );
      });
    } else if (era.get('love:4') >= 50) {
      buffer.push(
        async () => {
          await maru.say_and_wait(
            `${callname}은(는) 대체 따뜻한 걸까, 건조한 걸까?`,
          );
          await era.printAndWait(
            `졸음이 쏟아지는 영화를 보던 중, ${maru.name}이(가) 갑자기 혼잣말을 시작했다.`,
          );
        },
        async () => {
          await maru.say_and_wait(
            `은행잎이 떨어지기 시작하는 가을보다 나는 촉촉한 여름이 더 좋아.`,
          );
          await era.printAndWait(
            `${maru.name}은(는) 추천 영화를 보며 중얼거렸다.`,
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} darley ダーレーアラビアン
   * @param {CharaTalk} godolphin ゴドルフィンバルブ
   * @param {CharaTalk} byerley バイアリーターク
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async out_church(maru, darley, godolphin, byerley, you, callname) {
    darley.name = '다정한 여신';
    godolphin.name = '지혜의 여신';
    byerley.name = '엄숙한 여신';
    await maru.say_and_wait(`${callname}, 다 왔어.`);
    await era.printAndWait(`어느 휴일, 두 사람은 신사에 참배하러 가기로 했다.`);
    await era.printAndWait(
      `전설에 따르면 세 여신이 지상에 내려왔을 때 이곳의 맑은 물을 마셨다고 한다. 그래서 이 산의 시내는 ${
        maru.sex
      }의 축복을 받았다.`,
    );
    await era.printAndWait(
      `옛사람들은 이 시내를 둘러싸고 신사를 세웠고, 참배객들은 일과 사랑이 이루어지기를 빌었다.`,
    );
    await maru.say_and_wait(
      `신사에 걸린 방울이 울리면 진심으로 기도한 사람은 세 여신의 축복을 받을 수 있대. ${
        maru.sex_code !== 1 ? '멋진 아가씨' : '핸섬한 남자'
      }인 나도 한번 해 보고 싶어.`,
    );
    await era.printAndWait(
      `일찍 일어나 찾아왔는데도 앞에는 드문드문 사람들이 모여 있었고 야영용 텐트까지 보였다.`,
    );
    await era.printAndWait(`아마 어젯밤부터 기다린 사람도 많은 모양이었다.`);
    era.printButton('그럼 우리도 얼른 줄을 서자', 1);
    await era.input();
    await era.printAndWait(
      `소원을 빌러 온 사람들은 새치기로 소란을 피워 세 여신의 노여움을 사고 싶지 않은지 가지런히 줄을 서 있었다.`,
    );
    await era.printAndWait(`도리이를 지나 이 세 여신의 신사에 들어갔다.`);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 앞서 참배한 사람들을 따라 새전함에 동전을 넣고 손뼉을 친 뒤, 두 손을 모아 눈을 감고 기도하기 시작했다.',
    ]);
    await maru.say_and_wait(`……`);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 살짝 ',
      maru.get_colored_name(),
      `을(를) 바라보았다. ${maru.sex}의 입술이 조금 벌어진 채 무언가 작게 중얼거리는 듯했다.`,
    ]);
    if (Math.random() < 0.5) {
      await era.printAndWait(`한동안 기다려도 방울 소리는 들리지 않았다.`);
      await maru.say_and_wait(`아쉽네.`);
      await era.printAndWait(
        `${maru.name}는 중요한 소원을 빈 모양인지 귀를 축 늘어뜨린 채 무척 아쉬워했다.`,
      );
      era.printButton(`${maru.sex}의 손을 잡는다`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        `은(는) ${maru.sex}의 손을 잡았다.`,
      ]);
      await maru.say_and_wait(`……${callname}, 고마워.`);
      await maru.say_and_wait(
        `그럼 내 애마로 드라이브하면서 이 기분을 날려 버리자.`,
      );
      await era.printAndWait([
        '그 뒤 ',
        you.get_colored_name(),
        '은(는) 의식이 흐릿해지는 가운데 세 여신의 미소를 본 것 같았다.',
      ]);
    } else {
      const buffer = [
        () => darley.say_and_wait('힘내렴, 아이들아.'),
        () => godolphin.say_and_wait('사랑스러운 아이들아, 행복하기를.'),
        () => byerley.say_and_wait('달리렴. 희망은 질주 너머에 있단다.'),
      ];
      await get_random_entry(buffer)();
      await era.printAndWait(`딸랑딸랑`);
      await era.printAndWait(`세 여신의 나직한 목소리가 들린 것 같았다.`);
      await era.printAndWait(`살며시 눈을 뜨고 ${maru.name} 쪽을 흘끗 보았다.`);
      await maru.say_and_wait(`……세 여신님, 고마워요, `);
      await era.printAndWait(
        `소원이 받아들여진 듯 ${maru.name}는 안도하는 미소를 지었다.`,
      );
      await maru.say_and_wait(`${callname}`);
      await era.printAndWait(
        `${maru.name}는 도리이를 나선 뒤 뒤에서 발을 멈췄다.`,
      );
      if (era.get('love:4') >= 90) {
        await era.printAndWait(
          `메마른 입술이 다른 입술에 젖었다. 당신은 자신도 모르게 ${maru.sex}의 가느다란 몸을 끌어안았다.`,
        );
        await era.printAndWait(
          `이제 두 심장의 고동은 마침내 같은 마음이 되었다.`,
        );
        await era.printAndWait(
          `시간도 명예도, 눈앞의 소중한 사람 외에는 모두 상관없었다.`,
        );
        await era.printAndWait(`지금은 이 다정함 속에 잠겨 있고 싶었다.`);
        await era.printAndWait(
          `숨이 가빠질 때까지 바람 속에서 춤추던 두 사람은 마침내 아쉬운 듯 떨어졌다.`,
        );
        await maru.say_and_wait(
          `${callname}, 어쩌면 네가…… 아니, 네가 바로 내가 계속 찾던 불꽃이야.`,
        );
        await era.printAndWait(
          `${maru.name}는 당신의 손을 힘껏 잡았다. 당신은 말없이 그 아픔을 견뎠다.`,
        );
        await era.printAndWait(`그리고 두 사람은 다시 입술을 겹쳤다.`);
        await era.printAndWait(`불꽃은 결국 그 메마름을 이겨 냈다.`);
      } else {
        await era.printAndWait(
          `촉촉한 기운이 느껴졌다. ${maru.name}는 뒤를 돌아보며 가슴의 두근거림을 가라앉히려 했다.`,
        );
        await era.printAndWait(
          `두 사람은 미묘한 분위기 속에서 학원으로 돌아왔다.`,
        );
      }
    }
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_restaurant(maru, you) {
    const buffer = [];
    buffer.push(
      () =>
        maru.say_and_wait(
          `이 근처에 평이 좋은 디저트 가게가 있대. 다음에 같이 가자.`,
        ),
      async () => {
        await maru.say_and_wait(`과일 파르페 한 잔 더♪`);
        await you.say_and_wait(`그렇게 많이 먹어도 괜찮아?`);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          maru.get_colored_name(),
          '의 위장이 버텨 줄지 조금 걱정되었다.',
        ]);
        await maru.say_and_wait(
          `걱정하지 마. 단것을 먹을 때는 단것 전용 위장이 따로 있거든⭐`,
        );
        await maru.say_and_wait(
          `${maru.name}는 과일 파르페를 한입 가득 떠먹고 있었다.`,
        );
      },
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_dating(maru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await maru.say_and_wait(`${callname}의 손은 따뜻하네.`);
        await era.printAndWait([
          you.get_colored_name(),
          '에게 ',
          maru.get_colored_name(),
          '은(는) 어떤 존재일까?',
        ]);
      },
      () =>
        maru.say_and_wait(
          `가능하면 ${callname}이(가) 계속 내게 의지해 주면 좋겠는데.`,
        ),
    );
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maru マルゼンスキー
   * @param {string} callname マルゼンスキーのプレイヤーへの呼び方
   */
  async o_s_shopping(maru, callname) {
    const buffer = [];
    buffer.push(
      () => maru.say_and_wait(`${callname}, 사고 싶은 게 있니?`),
      () =>
        maru.say_and_wait(
          `이 근처에 디저트 가게가 새로 생겼대. 이따 들러 보자.`,
        ),
    );
    await get_random_entry(buffer)();
  },
};
