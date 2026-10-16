/**
 * @file マチカネフクキタル - 日常
 * @author ALEX
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const get_gradient_color = require('#/utils/gradient-color');
const { get_random_entry } = require('#/utils/list-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {PrintedSpan} call_58 マチカネフクキタルのメイショウドトウへの呼び方
   * @param {PrintedSpan} call_98 マチカネフクキタルのコパノリッキーへの呼び方
   */
  good_morning(kitaru, you, callname, call_58, call_98) {
    const buffer = [];
    if (era.get('base:56:体力') <= era.get('maxbase:56:体力') / 3) {
      buffer.push(
        () => {
          kitaru.say('오늘의 운세……지쳤어요……');
          era.print([
            you.get_colored_name(),
            '이(가) 훈련장에 오자, ',
            kitaru.get_colored_name(),
            '는 벌써 잔디밭에 드러누워 있었다.',
          ]);
        },
        () => {
          kitaru.say(
            '이젠 뭐든 좋아요……운명의 사람의 부탁이라면 온 힘을 다할 테니까요.',
          );
          era.print([
            kitaru.get_colored_name(),
            '는 웃으며 ',
            you.get_colored_name(),
            '에게 손을 흔들었다. 하지만 꼬리는 분명 두 다리 사이로 축 처져 있다.',
          ]);
        },
      );
    } else if (era.get('cflag:56:干劲') < 0) {
      buffer.push(
        () => {
          kitaru.say('음……');
          era.print([
            '울타리에 엎드려 있던 ',
            kitaru.get_colored_name(),
            '는, ',
            you.get_colored_name(),
            '을(를) 보자 형식적으로 귀를 까딱였다.',
          ]);
        },
        () => {
          kitaru.say(['안녕…… ', callname, '.']);
          era.print([
            kitaru.get_colored_name(),
            '의 기분은 그다지 좋아 보이지 않는다.',
          ]);
        },
      );
    } else {
      if (era.get('mark:56:欢愉') || era.get('mark:56:淫纹') === 1) {
        buffer.push(() => {
          kitaru.say(['음! 아침의 ', callname, '도 활기차시네요!']);
          kitaru.say([
            '그저 ',
            callname,
            '이(가) 바라봐 주는 것만으로도 조금 흥분돼요……',
          ]);
        });
      } else if (era.get('mark:56:欢愉') || era.get('mark:56:淫纹') === 2) {
        buffer.push(() => {
          kitaru.say('하아……하아!');
          kitaru.say([
            '다리에 힘이 조금 풀려서……',
            callname,
            '이(가) 보는 것만으로 이렇게……',
          ]);
        });
      } else if (era.get('mark:56:欢愉') || era.get('mark:56:淫纹') === 3) {
        buffer.push(() => {
          kitaru.say(['원해요……', callname, '……']);
          era.print([
            '그렇게 말하며 아침 달리기로 체온이 오른',
            kitaru.teen_sex_title,
            '가 ',
            you.get_colored_name(),
            '에게 안겼다.',
          ]);
        });
      }
      if (era.get('love:56') > 75 && era.get('relation:56:0') > 400) {
        buffer.push(
          () => {
            kitaru.say('하아……조금 너무 일찍 일어났네요!');
            era.print([
              you.get_colored_name(),
              '앞에서 기지개를 켜자 체육복 아래의 가슴이 유난히 존재감을 드러낸다.',
            ]);
          },
          () => {
            kitaru.say('역시! 매일 운명의 사람을 봐야 안심이 돼요.');
            kitaru.say([callname, '도 그렇게 생각하시나요?']);
            era.print([
              you.get_colored_name(),
              '의 팔에 매달리자 밤색의 가느다란 귀가 ',
              you.get_colored_name(),
              '의 어깨를 두드린다.',
            ]);
          },
          () => {
            kitaru.say([
              '점을 봤더니, ',
              callname,
              '에게 오늘은 연애운이 들어왔어요!',
            ]);
            kitaru.say('거봐요, 제가 곁에 있잖아요?');
            era.print([
              '발끝으로 서자, ',
              kitaru.sex,
              '의 숨결이 ',
              you.get_colored_name(),
              '의 목덜미에 닿는다.',
            ]);
          },
          () => {
            kitaru.say(['오늘은 ', callname, ', 제 곁에서 떨어지면 안 돼요!']);
            kitaru.say('왜냐하면! 오늘의 행운 아이템은 후쿠니까요!');
          },
          () => {
            era.print([
              kitaru.get_colored_name(),
              '는 울타리에 기대어, ',
              you.get_colored_name(),
              '에게 등을 보이고 있다……교복 치마가 울타리에 걸려 들린 것도 전혀 모르고 있다.',
            ]);
            kitaru.say(['에헤헤, ', callname, ', 보셨나요?']);
            era.print([
              '여우처럼 요염한 미소를 띠며, ',
              kitaru.teen_sex_title,
              '는 서두르지 않고 치맛자락을 바로잡는다. 흰 팬티에 감싸인 엉덩이가 선명하게 보였다.',
            ]);
          },
        );

        if (era.get('love:56') > 89 && era.get('relation:56:0') > 400) {
          buffer.push(
            () => {
              era.print([
                kitaru.get_colored_name(),
                '는 울타리에 기대어, ',
                you.get_colored_name(),
                '에게 등을 보이고 있다……교복 치마가 울타리에 걸려 들린 것도 전혀 모르고 있다.',
              ]);
              kitaru.say(['저기……', callname, ', 마음에 드세요?']);
              era.print([
                '요염한 여우 같은 미소와 함께, ',
                kitaru.teen_sex_title,
                '는 치맛자락을 조금 들어 올렸다. 풍만한 엉덩이를 반쯤 감싼 흰 레이스 팬티 너머로 살빛이 비친다.',
              ]);
            },
            () => {
              era.print([
                kitaru.get_colored_name(),
                '는 울타리에 기대어, ',
                you.get_colored_name(),
                '에게 등을 보이고 있다……교복 치마가 울타리에 걸려 들린 것도 전혀 모르고 있다.',
              ]);
              kitaru.say(['저기……', callname, ', 마음에 드세요?']);
              era.print([
                '요염한 여우 같은 미소와 함께, ',
                kitaru.teen_sex_title,
                '는 치맛자락을 조금 들어 올렸다. 약간 꽉 끼는 검은 팬티가 후쿠키타루의 풍만한 엉덩이에 유혹적인 골을 만든다.',
              ]);
            },
            () => {
              era.print([
                kitaru.get_colored_name(),
                '는 울타리에 기대어, ',
                you.get_colored_name(),
                '에게 등을 보이고 있다……교복 치마가 울타리에 걸려 들린 것도 전혀 모르고 있다.',
              ]);
              kitaru.say(['저기……', callname, ', 마음에 드세요?']);
              era.print([
                '요염한 여우 같은 미소와 함께, ',
                kitaru.teen_sex_title,
                '는 치맛자락을 조금 들어 올렸다. 가느다란 천뿐인 이벤트용 팬티가, ',
                kitaru.get_colored_name(),
                '의 엉덩이 살을 거의 드러내고 있다.',
              ]);
            },
            () => {
              era.print([
                kitaru.get_colored_name(),
                '는 울타리에 기대어, ',
                you.get_colored_name(),
                '에게 등을 보이고 있다……교복 치마가 울타리에 걸려 들린 것도 전혀 모르고 있다.',
              ]);
              kitaru.say('꺄아악!!!');
              era.print([
                kitaru.get_colored_name(),
                '가 알아차리기 전에, ',
                you.get_colored_name(),
                '이(가) 장난스럽게 두드리자, ',
                kitaru.teen_sex_title,
                '는 참지 못하고 귀여운 소리를 냈다.',
              ]);
            },
          );
        }
      }

      if (era.get('love:56') >= 50 && era.get('relation:56:0') >= 226) {
        buffer.push(
          () => {
            kitaru.say('운명의 사람! 오늘 훈련 계획은 뭔가요?');
            era.print([
              '그렇게 말하며, ',
              kitaru.sex,
              '의 꼬리가 ',
              you.get_colored_name(),
              '의 다리를 감쌌다.',
            ]);
          },
          () => {
            kitaru.say('맞다! 훈련이 끝나면 같이 노점을 열지 않을래요?');
            kitaru.say(['마침 ', call_58, '은(는) 오늘 한가하지 않거든요!']);
          },
          () => {
            kitaru.say([
              callname,
              '이(가) 운세를 바꾸려면 제가 ',
              call_98,
              '보다 조금은 더 잘할 수 있어요!',
            ]);
            era.print([
              kitaru.get_colored_name(),
              '는 최근 소문에 조금 뾰로통하게 대답했다.',
            ]);
          },
          () => {
            kitaru.say(['오늘, ', callname, '에게 아침을 만들어 봤어요!']);
            kitaru.say('맛은 너무 기대하지 마세요.');
            era.print([
              kitaru.get_colored_name(),
              '는 ',
              you.get_colored_name(),
              '에게 손에 든 도시락을 들어 보였다.',
            ]);
          },
          () => {
            kitaru.say(['저기, ', callname, '！']);
            kitaru.say('끝나고 상점가에서 저녁 먹는 건 어때요?');
          },
          () => {
            era.print([
              kitaru.get_colored_name(),
              '는 울타리에 기대어, ',
              you.get_colored_name(),
              '에게 등을 보이고 있다……교복 치마가 울타리에 걸려 들린 것도 전혀 모르고 있다.',
            ]);
            kitaru.say(['어! 엉큼한 ', callname, '！']);
            era.print([
              '말을 걸기도 전에 발소리로 들키고 말았다. 뺨을 붉힌',
              kitaru.teen_sex_title,
              '는 의외로 차분하게 치맛자락을 바로잡는다.',
            ]);
          },
        );
      } else if (era.get('love:56') < 50 || era.get('relation:56:0') < 226) {
        buffer.push(
          () => kitaru.say('음……어디서 훈련할지 점을 쳐 볼까요?'),
          () =>
            kitaru.say([
              '좋은 아침이에요! ',
              callname,
              ', 오늘 훈련 계획은 뭔가요?',
            ]),
          () => kitaru.say([callname, '! 오늘 운세를 봐 드릴까요?']),
        );
      }
      if (era.get('relation:56:0') >= 226) {
        buffer.push(
          () => {
            kitaru.say('오늘 운세는 아주 좋아요! 그러니……');
            kitaru.say(['……부디 ', callname, ', 마음껏 부려 주세요!']);
            era.print([
              '텔레비전에서 본 것을 흉내 내며, ',
              kitaru.sex,
              '는 ',
              you.get_colored_name(),
              '에게 조금 어설프게 인사했다.',
            ]);
          },
          () => {
            kitaru.say(
              '달마 씨가 떨리고 있어요. 오늘은 영력이 가득한 모양이에요!',
            );
            era.print([
              kitaru.sex,
              '는 ',
              you.get_colored_name(),
              '에게 왼쪽 귀의 붉은 달마 장식을 가리켰다.',
            ]);
          },
          () => {
            kitaru.say('미리 점을 봐 뒀어요!');
            kitaru.say([callname, '의 오늘 운세는 대길이에요!']);
          },
        );
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async select(kitaru, you, callname) {
    const buffer = [];
    if (era.get('relation:56:0') > 375) {
      buffer.push(
        () =>
          kitaru.say([
            '역시, ',
            callname,
            '이(가) 제 운명의 사람이에요! 점괘도 제 마음도 그렇게 말해요!',
          ]),
        () =>
          kitaru.say([
            '저는, ',
            callname,
            '을(를) 완전히 믿어요! 운명의 사람이니까요!',
          ]),
      );
    } else {
      buffer.push(
        () =>
          kitaru.say([
            '점괘와 ',
            callname,
            '을(를) 믿으면! 분명 괜찮을 거예요!',
          ]),
        () => kitaru.say([callname, '의 오늘 뜻은 무엇인가요?!']),
      );
    }
    switch (era.get('mark:56:淫纹')) {
      case 1:
        buffer.push(() => kitaru.say('음문……이야기 속 타락 같은 거네요……'));
        break;
      case 2:
        buffer.push(() =>
          kitaru.say('또 빛나고 있어요. 한 겹 더 입는 게……하아……더워요……'),
        );
        break;
      case 3:
        buffer.push(() =>
          kitaru.say(
            '참배객을 위해 기도하다 보면 음문이 가끔 분위기에 안 맞게 뜨거워져요……',
          ),
        );
    }

    switch (era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) {
      case 1:
        buffer.push(() =>
          kitaru.say([callname, '! 저기……오늘 밤은 어떠세요?']),
        );
        break;
      case 2:
        buffer.push(() =>
          kitaru.say([callname, '을(를) 보면 몸이 반응한다고 해야 할까요?']),
        );
        break;
      case 3:
        buffer.push(() => {
          kitaru.say('팬티를 갈아입어야……');
          kitaru.say(['음……', callname, ', 또 알면서 물으시네요.']);
        });
    }

    switch (era.get('mark:56:同心')) {
      case 1:
        buffer.push(() =>
          kitaru.say([
            '매일 아침 눈을 뜨면 ',
            callname,
            '이(가) 있다니, 이거야말로 대길이죠!',
          ]),
        );
        break;
      case 2:
        buffer.push(() =>
          kitaru.say([callname, '! 후쿠의 개운 포옹, 해 드릴까요?']),
        );
        break;
      case 3:
        buffer.push(() =>
          kitaru.say([
            '저와 ',
            callname,
            '이(가) 이렇게 붙어 있으면 시라오키님도 분명 기뻐하실 거예요!',
          ]),
        );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} sp スペシャルウィーク
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async office_study(kitaru, sp, you, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait(
          '지난번에는 재시험을 볼 뻔했어요! 시라오키님의 가호 덕분이에요!',
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 점술용 연필을 압수한 뒤, ',
          you.get_colored_name(),
          '은(는) 다음 시험의 요점을 함께 정리하기 시작했다.',
        ]);
        await era.printAndWait([
          '그런데 같은 점술용 연필을 썼는데 왜 ',
          sp.get_colored_name(),
          '는 재시험을 보게 되는 걸까?',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('네! 저 서예 단증도 있어요!');
        await kitaru.say_and_wait('그러니까 이쪽은 자신 있어요!');
      },
      async () => {
        await kitaru.say_and_wait([callname, '! 이 그림 어때요?']);
        await era.printAndWait([
          '그렇게 말하며, ',
          kitaru.teen_sex_title,
          '는 신의 뜻이 깃든 듯한 선으로 그린 그림을 ',
          you.get_colored_name(),
          '에게 들어 보였다.',
        ]);
      },
      () =>
        kitaru.say_and_wait([
          '음! 달리기 말고도, ',
          callname,
          '은(는) 여러 가지를 잘 아시네요!',
        ]),
      async () => {
        await kitaru.say_and_wait(['오오! 이 책 말인가요!']);
        await kitaru.say_and_wait([
          '예전에 다락방에 숨어 있을 때 읽어 본 적 있어요!',
        ]);
      },
      async () => {
        await kitaru.say_and_wait([
          '이 잡지에, ',
          callname,
          '은(는) 관심 있으세요?',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 눈앞의 『The Rhode Island Journal of Astronomy』의 점술란을 가리켰다.',
        ]);
      },
      async () => {
        await kitaru.say_and_wait([
          '블루 타입, 그린 타입……? 처음 듣는 개념이네요?',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 표지에 연푸른 오망성이 그려진 책을 가리키며, ',
          you.get_colored_name(),
          '에게 물었다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async office_prepare(kitaru, callname) {
    const buffer = [
      () =>
        kitaru.say_and_wait([
          '감사합니다, ',
          callname,
          '! 개운 의식에 이제 조수만 있으면 돼요!',
        ]),
      () =>
        kitaru.say_and_wait([
          '이 의식에 필요한 건……아, ',
          callname,
          ', 도와주셔서 살았어요!',
        ]),
      () =>
        kitaru.say_and_wait([
          callname,
          '! 이 강신술은 당신의 POW 수치를 더하면 분명 괜찮을 거예요!',
        ]),
      () =>
        kitaru.say_and_wait(
          '윤달을 두는 의식이요? 하면 굉장히 밝아질 것 같아요……',
        ),
      () =>
        kitaru.say_and_wait('교신술, 강신술, 파마술……이 의식은 어느 쪽일까요?'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {number} luck_train 開運トレーニングの種類。1〜5 はスピード〜賢さ
   */
  async talk(kitaru, you, callname, luck_train) {
    const buffer = [];
    if (era.get('mark:56:淫纹') === 1) {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.sex,
          '는 ',
          you.get_colored_name(),
          '에게 음문이 새겨진 아랫배를 가리켰다.',
        ]);
        await kitaru.say_and_wait(
          '저기, 훈련 중에 남들이 볼까 봐 계속 신경 쓰여서……',
        );
      });
    } else if (era.get('mark:56:淫纹') >= 2) {
      buffer.push(async () => {
        await era.printAndWait([
          '주위를 둘러본 뒤, ',
          kitaru.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '에게 옷자락을 걷어 아랫배를 보여 주었다.',
        ]);
        await era.printAndWait([
          '분홍빛 문양이, ',
          kitaru.teen_sex_title,
          '의 몸에서 충실하게 제 역할을 하고 있다.',
        ]);
      });
    }

    if ((era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) === 1) {
      buffer.push(async () => {
        await kitaru.say_and_wait([
          '저기, ',
          callname,
          ', 훈련이 끝난 뒤 시간 있으세요?',
        ]);
      });
    } else if ((era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) === 2) {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 얼굴이 눈에 띄게 붉어졌다. 두 손으로 체육복 너머의 아랫배를 눌렀다.',
        ]);
        await kitaru.say_and_wait(['읏, 전부 ', callname, '탓이에요!']);
      });
    } else if ((era.get('mark:56:欢愉') || era.get('mark:56:淫纹')) === 3) {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 점점 짓궂어지는 요구에 응해 입을 맞췄다.',
        ]);
        await kitaru.say_and_wait('윽……');
        await era.printAndWait([
          kitaru.sex,
          '의 손끝이, ',
          you.get_colored_name(),
          '의 사타구니를 닿을 듯 말 듯 훑는다.',
        ]);
      });
    }

    if (era.get('mark:56:同心') === 1) {
      buffer.push(async () => {
        await era.printAndWait([
          '운이 열린다며 호들갑을 떨고, ',
          kitaru.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '에게 뛰어들었다.',
        ]);
      });
    } else if (era.get('mark:56:同心') >= 2) {
      buffer.push(async () => {
        await kitaru.say_and_wait([
          '일심동체! ',
          callname,
          ', 저는 계속 곁에 있을 거예요!',
        ]);
      });
    }

    if (era.get('base:56:体力') < era.get('maxbase:56:体力') * 0.45) {
      buffer.push(
        () => kitaru.say_and_wait('오늘은 휴식이 길할 것 같네요……'),
        async () => {
          await era.printAndWait('눈동자의 별빛이 흐릿해졌다.');
          await era.printAndWait([
            kitaru.sex,
            '를 쉬게 해 줄 때가 된 모양이다.',
          ]);
        },
      );
    }
    switch (era.get('cflag:56:干劲')) {
      case -2:
        buffer.push(async () => {
          await kitaru.say_and_wait(
            '운세는 꼴찌에…… 제비뽑기는 대흉…… 거기다 검은 고양이가 앞을 가로질러 가다니, 저, 전 이제 끝이에요~!',
          );
        });
        break;
      case -1:
        buffer.push(async () => {
          await kitaru.say_and_wait(
            '제비뽑기에서 흉이 나왔어요…… 불길한 일이 생기면 어쩌죠?',
          );
        });
        break;
      case 0:
        buffer.push(async () => {
          await kitaru.say_and_wait('오늘 운세는 좋지도 나쁘지도 않네요……');
          await kitaru.say_and_wait('평범한 것도 나름 괜찮을지도요?');
        });
        break;
      case 1:
        buffer.push(async () => {
          await kitaru.say_and_wait(
            '준비 작업과 점술도 모두 끝났어요, 자, 시작해 보죠……',
          );
        });
        break;
      case 2:
        buffer.push(async () => {
          await kitaru.say_and_wait([
            callname,
            ', 제 말 좀 들어보세요! 지금 제 운세는 대길을 초월한 초길이라고요!',
          ]);
          await kitaru.say_and_wait('후후후, 지금의 저는 완전 무적이에요!');
        });
    }
    await get_random_entry(buffer)();
    if (luck_train > 0) {
      era.drawLine();
      await era.printAndWait([
        kitaru.get_colored_name(),
        '가 책상에 남겨 놓은 메모를 발견했다.',
      ]);
      switch (luck_train - 1) {
        case attr_enum.speed:
          await kitaru.used_to_say_and_wait(
            '맞다, 오늘은 스피드 훈련이 길한 것 같아요!',
          );
          break;
        case attr_enum.endurance:
          await kitaru.used_to_say_and_wait('오늘은 스태미나 훈련이 길해요!');
          break;
        case attr_enum.strength:
          await kitaru.used_to_say_and_wait('파워 훈련이 좋아 보여요!');
          break;
        case attr_enum.toughness:
          await kitaru.used_to_say_and_wait(
            '근성 훈련이 더 잘 맞을지도 몰라요!',
          );
          break;
        case attr_enum.intelligence:
          await kitaru.used_to_say_and_wait('지능 훈련은 대길이에요!');
      }
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async office_gift(kitaru, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait('오오────!');
        await kitaru.say_and_wait('머리맡에 장식할게요!');
      },
      async () => {
        await kitaru.say_and_wait('감사합니다!');
        await kitaru.say_and_wait([
          '답례로, ',
          callname,
          '은(는) 뭔가 갖고 싶은 게 있으세요?',
        ]);
      },
      async () => {
        await kitaru.say_and_wait([
          callname,
          '이(가) 뭘 주셨는지는 점으로도 알 수 없어요!',
        ]);
        await kitaru.say_and_wait('돌아가서야 열어 볼 수 있거든요……');
      },
    ];
    if (era.get('love:56') >= 75) {
      buffer.push(async () => {
        await kitaru.say_and_wait(['만약 ', callname, '이(가) 원하신다면!']);
        await kitaru.say_and_wait('답례로 후쿠 자신을 드려도 좋아요!');
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async office_cook(kitaru, you, callname) {
    const buffer = [];
    if (era.get('love:56') > 84) {
      buffer.push(() =>
        kitaru
          .say_and_wait(['후쿠의 된장국을 드셔 보실래요!'])
          .then(() =>
            kitaru.say_and_wait([
              '마음에 드시면! 매일 ',
              callname,
              '에게 만들어 드릴 수 있어요!',
            ]),
          ),
      );
    } else if (era.get('love:56') > 75) {
      buffer.push(() =>
        kitaru
          .say_and_wait('돕게 해 주세요! 이번에는 분명 괜찮을 거예요!')
          .then(() =>
            era.printAndWait([
              kitaru.get_colored_name(),
              '는 최근에 여러 가지를 배운 모양이다.',
            ]),
          ),
      );
    } else if (era.get('love:56') > 49) {
      buffer.push(() =>
        kitaru
          .say_and_wait('음, 이번에는 옆에서 보고 배우기만 할게요!')
          .then(() =>
            kitaru.say_and_wait('나중에 쓸 일이 생길지도 모르니까요!'),
          )
          .then(() =>
            era.printAndWait([
              you.get_colored_name(),
              '의 표정을 보고, ',
              kitaru.get_colored_name(),
              '는 그렇게 말했다.',
            ]),
          ),
      );
    } else {
      buffer.push(() =>
        kitaru
          .say_and_wait([callname, '이(가) 괜찮으시다면 저도 도울 수 있어요!'])
          .then(() =>
            era.printAndWait([
              kitaru.get_colored_name(),
              '의 온갖 기발한 생각 때문에 요리는 오히려 더뎌졌다.',
            ]),
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async office_rest(kitaru, you, callname) {
    if (era.get('love:56') > 49) {
      await you.say_and_wait('이제 됐어, 후쿠?');
      await kitaru.say_and_wait('으──응～');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '이라는 밤색 털 뭉치가, ',
        you.get_colored_name(),
        '위에 엎드려 있다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는)',
        kitaru.sex,
        '의 부탁대로 담당',
        kitaru.uma_sex_title,
        '의 부드러운 머리칼을 빗고 있다.',
      ]);
      await era.printAndWait([
        '손끝이 ',
        kitaru.get_colored_name(),
        '의 민감한 귀 밑동을 스칠 때마다, ',
        kitaru.sex,
        '의 몸이 작게 떨린다.',
      ]);
      await kitaru.say_and_wait(['후후……', callname, '……']);
      await era.printAndWait([
        kitaru.sex,
        '가 충분히 쉴 때까지는 아직 한참 걸릴 것 같다.',
      ]);
    } else {
      await kitaru.say_and_wait('후……후……');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 드물게 조용해져 절의 불상처럼 선정에 들었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 앞서 둘이 사 온 사과를 준비하기 시작했다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {number} game_times フクキタルと遊んだ回数
   */
  async office_game(kitaru, you, callname, game_times) {
    const buffer = [
      () =>
        kitaru.say_and_wait(
          '글을 쓰면 원하는 대로 된다고요? 재미있는 설정이네요!',
        ),
      () =>
        kitaru.say_and_wait(
          '은빛으로 빛나는 대기……제 꿈에도 비슷한 풍경이 나올 때가 있어요!',
        ),
      () =>
        kitaru.say_and_wait('제 영력으로도 염동력을 쓸 수 있으면 좋을 텐데요!'),
      () =>
        kitaru.say_and_wait(
          '……의지를 시험받고 있어요……음, 그야말로 운에 맡길 때네요!',
        ),
      () =>
        kitaru.say_and_wait(
          '백사 신사라……저희 신사보다 더 외진 곳이네요. 참배객이 올까요!',
        ),
      () => kitaru.say_and_wait('운명 COOP, 같은 일을 하는 분이군요!'),
    ];
    if (game_times >= 5) {
      buffer.push(() =>
        kitaru.say_and_wait(
          '후후……점으로 커맨드를 읽는 건 역시 정말 편리해요!',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} kitaru マチカネフクキタル */
  async s_a_tree_hollow(kitaru) {
    const buffer = [];
    buffer.push(async () => {
      await kitaru.say_and_wait(
        '시라오키님, 제 기도가 닿기를. 오늘 운세가 더 좋아지기를!',
      );
      if (era.get('cflag:56:育成回合计时') > 120) {
        await kitaru.say_and_wait('음! 물론 그렇지 않아도 저는 노력할 거예요!');
      }
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 바닥이 보이지 않는 고목의 구멍을 향해 외쳤다.',
      ]);
    });
    if (era.get('cflag:56:育成回合计时') > 42) {
      // いわゆる白興様についての判定
      buffer.push(async () => {
        await kitaru.say_and_wait([
          kitaru.elder_sibling_sex_title,
          '! 저, 훌륭한 ',
          kitaru.uma_sex_title,
          '가 될 테니까요!',
        ]);
        await kitaru.say_and_wait('그러니까……흑……제대로 지켜봐 주세요!');
        if (era.get('love:56') >= 75) {
          await kitaru.say_and_wait('게다가……함께 걸어갈 사람도 찾았어요!');
          await kitaru.say_and_wait('이제 걱정하지 않아도 돼요!');
        }
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   */
  async s_a_dating(kitaru, you) {
    const buffer = [];
    buffer.push(async () => {
      await kitaru.say_and_wait(
        '학원 안의 기운 좋은 장소들을 같이 돌아볼까요?',
      );
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 안내에 따라, ',
        you.get_colored_name(),
        '은(는) ',
        kitaru.sex,
        '와 학원을 한 바퀴 돌았다.',
      ]);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 목적을 이루었는지는 알 수 없다. 다만 담당의 꼬리에 안겨 있던 ',
        you.get_colored_name(),
        '은(는) 오늘 트레센 게시판의 화제가 되었다.',
      ]);
    });
    if (era.get('love:56') >= 75) {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '의 팔을 잡고 학생들 사이를 걷는다.',
        ]);
        await kitaru.say_and_wait('많이들 쳐다보네요……');
        await era.printAndWait([
          '그렇게 말하면서도, ',
          you.get_colored_name(),
          '은(는) ',
          kitaru.get_colored_name(),
          '의 행동이 더욱 대담해졌음을 알아차렸다.',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async s_r_lunch(kitaru, you, callname) {
    const buffer = [];
    buffer.push(async () => {
      await kitaru.say_and_wait('오오오오옷!!!');
      await kitaru.say_and_wait([callname, '의 도시락, 정말 맛있어 보여요!']);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 결국, ',
        kitaru.get_colored_name(),
        '의 뜨거운 시선에 져서 도시락을 ',
        kitaru.sex,
        ' 앞으로 밀어 주었다.',
      ]);
    });
    if (era.get('love:56') >= 50) {
      buffer.push(async () => {
        await kitaru.say_and_wait([
          '저기, ',
          callname,
          '의 젓가락을 잠깐 빌려주세요!',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 나무젓가락이, ',
          kitaru.get_colored_name(),
          '의 손안에서 딱 하고 갈라졌다.',
        ]);
        await kitaru.say_and_wait([
          '오오! 이 점괘를 보니, ',
          callname,
          '의 오늘 운세가 좋아 보여요!',
        ]);
      });
    }
    if (era.get('love:56') >= 75) {
      buffer.push(async () => {
        await kitaru.say_and_wait('트레──이너──니──임! 주세요!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 부드러운 몸이 ',
          you.get_colored_name(),
          '에게 달라붙고, 촉촉한 눈으로 ',
          you.get_colored_name(),
          '을(를) 바라본다.',
        ]);
        await era.printAndWait([
          '고기 한 점을 집어, ',
          kitaru.sex,
          '의 입을 막았다.',
        ]);
        await kitaru.say_and_wait('음……이것도 나쁘지 않네요!');
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   */
  async o_r_fishing(kitaru, you) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait('……');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 수면을 뚫어져라 바라보는 ',
          kitaru.get_colored_name(),
          '를 보았다.',
        ]);
        await era.printAndWait([
          '드물게 조용한 ',
          kitaru.get_colored_name(),
          '는 평소와 전혀 다른 모습을 보인다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그 엄숙한 모습에서 아주 약간의 신성함마저 느꼈다.',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('낚시는 칠 할이 운이에요!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 그렇게 말하며 미끼를 물에 넣었다.',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('뭔가 재미있는 게 낚이지 않을까요!');
        await kitaru.say_and_wait('신화처럼요!');
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_r_walking(kitaru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await kitaru.say_and_wait(
          '흐르는 물은 영체의 움직임을 막을 수 있대요!',
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 앞서 걸으며 어디서 배웠는지 모를 지식을 ',
          you.get_colored_name(),
          '에게 설명하고 있다.',
        ]);
        await kitaru.say_and_wait([callname, ', 듣고 계시죠?']);
      },
      async () => {
        await kitaru.say_and_wait(
          '시라오키님은 하루 중 한 시각을 관장하셨던 적도 있대요!',
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 앞서 걸으며 어디서 배웠는지 모를 지식을 ',
          you.get_colored_name(),
          '에게 설명하고 있다.',
        ]);
        await kitaru.say_and_wait([callname, ', 듣고 계시죠?']);
      },
      async () => {
        await kitaru.say_and_wait(
          '여러 사람이 꾸준히 믿음을 보내는 것이 기운 좋은 장소가 생기는 것과 관련이 있대요!',
        );
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 앞서 걸으며 어디서 배웠는지 모를 지식을 ',
          you.get_colored_name(),
          '에게 설명하고 있다.',
        ]);
        await kitaru.say_and_wait([callname, ', 듣고 계시죠?']);
      },
    );
    if (era.get('love:56') >= 50) {
      buffer.push(async () => {
        await kitaru.say_and_wait('음! 조금 차가워요!');
        await era.printAndWait([
          '신발과 양말을 벗은 ',
          kitaru.get_colored_name(),
          '가 맨발을 물에 담그자 고운 윤기가 자연스레 번진다.',
        ]);
        await kitaru.say_and_wait([callname, '도 해 보실래요!']);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_arcade(kitaru, you, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait(
          '오오옷! 역시 대길이에요! 인형 하나 뽑는 데 이렇게 운이 좋다니!',
        );
        await era.printAndWait([
          '신이 난 ',
          kitaru.get_colored_name(),
          '가 인형 뽑기 기계에 부딪칠 뻔하자, ',
          you.get_colored_name(),
          '은(는) 재빨리 ',
          kitaru.sex,
          '를 잡아당겼다.',
        ]);
        await kitaru.say_and_wait('에헤헤~죄송해요!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 모습을 보고, ',
          you.get_colored_name(),
          '은(는) 저도 모르게 웃었다.',
        ]);
      },
      async () => {
        await kitaru.say_and_wait([
          '음! 새로운 격투 게임인가요? 대전해 볼까요, ',
          callname,
          '?',
        ]);
        await era.printAndWait([
          '연패한 뒤, ',
          kitaru.get_colored_name(),
          '가 앞일을 내다보듯 조작하는 바람에, ',
          you.get_colored_name(),
          '은(는) 항복할 수밖에 없었다.',
        ]);
        await kitaru.say_and_wait('어머, 시라오키님의 가호 덕분이에요!');
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_drawing(kitaru, you, callname) {
    await kitaru.say_and_wait([callname, ', 저쪽에 추첨 행사가 있어요!']);
    if (era.get('love:56') > 49 && kitaru.sex_code !== 1) {
      await era.printAndWait([
        '말할 것도 없이, ',
        you.get_colored_name(),
        '과(와) ',
        kitaru.get_colored_name(),
        '는 함께 추첨 노점으로 걸어갔다.',
      ]);
      await kitaru.say_and_wait([callname, '의 행운을 조금 나눠 주세요!']);
      await era.printAndWait([
        '곧 따뜻한 감촉과 탄력이 동시에 전해졌다.',
        kitaru.get_colored_name(),
        '가 ',
        you.get_colored_name(),
        '의 팔에 매달려 놓을 생각을 하지 않는다.',
      ]);
      await kitaru.say_and_wait('에헤헤～!');
      await era.printAndWait([
        '자신의 가슴이 ',
        you.get_colored_name(),
        '의 팔에 눌리고 있다는 것도 모르는 듯, ',
        kitaru.get_colored_name(),
        '는 상자에 손을 넣었다.',
      ]);
    } else {
      await era.printAndWait([
        kitaru.get_colored_name(),
        '의 간곡한 부탁에, ',
        you.get_colored_name(),
        '은(는)',
        kitaru.sex,
        '와 노점 앞으로 올 수밖에 없었다.',
      ]);
      await kitaru.say_and_wait('아아앗! 시라오키님, 가호를!');
      await kitaru.say_and_wait('핫!');
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 상자에 손을 넣었다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_ktv(kitaru, you, callname) {
    const buffer = [];
    if (era.get('love:56') > 49 && kitaru.sex_code !== 1) {
      buffer.push(
        async () => {
          await kitaru.say_and_wait('후……하! 제 노래 어땠어요!');
          await era.printAndWait([
            '여러 곡을 부른 뒤, ',
            kitaru.get_colored_name(),
            '는 숨을 헐떡이며 ',
            you.get_colored_name(),
            '을(를) 바라본다. 평가를 기다리고 있다.',
          ]);
          await era.printAndWait(
            '땀에 젖은 흰 셔츠 아래로 풍만한 가슴이 어렴풋이 보인다.',
          );
        },
        async () => {
          await kitaru.say_and_wait('하아……하! 제 노래 어땠어요!');
          await era.printAndWait([
            '여러 곡을 부른 뒤, ',
            kitaru.get_colored_name(),
            '는 숨을 헐떡이며 ',
            you.get_colored_name(),
            '을(를) 바라본다. 평가를 기다리고 있다.',
          ]);
          await era.printAndWait(
            '옷자락과 흰 니삭스 사이의 맨살이 땀에 젖어 반들거린다.',
          );
        },
      );
    } else {
      buffer.push(async () => {
        await era.printAndWait([
          kitaru.get_colored_name(),
          '에게 노래방의 난도는 신사에서 노래하고 춤추는 제례무에 비할 바가 아니다.',
        ]);
        await kitaru.say_and_wait([callname, '도 한 곡 해 주세요!']);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_movie(kitaru, you, callname) {
    await era.printAndWait([
      '두 번 다시 똑같이 재현하지 못할 것 같은 점술 동작을 마친 뒤, ',
      kitaru.get_colored_name(),
      '는 홍보 포스터 하나를 가리켰다.',
    ]);
    const buffer = [
      async () => {
        await era.printAndWait(
          '형언할 수 없는 공포를 주제로 한 민속 공포 영화.',
        );
        await era.printAndWait([
          '끝난 뒤 다리에 힘이 풀린 ',
          kitaru.get_colored_name(),
          '가 제법 진지한 얼굴로 ',
          you.get_colored_name(),
          '에게 원령을 물리치는 방법을 알려 주었다.',
        ]);
      },
      async () => {
        await era.printAndWait('외계 행성이 배경인 SF 영화.');
        await kitaru.say_and_wait(
          '음! 주인공의 예지 능력이 부럽다고 해야 할까요?',
        );
      },
      async () => {
        await era.printAndWait('머리를 쓰는 추리 영화.');
        await kitaru.say_and_wait('……점괘와 똑같네요?');
      },
    ];
    if (era.get('love:56') >= 50) {
      buffer.push(async () => {
        await era.printAndWait('달콤한 로맨틱 코미디.');
        await kitaru.say_and_wait([
          '하하하! 이런 건 저도, ',
          callname,
          '에게 해 본 적 있어요!',
        ]);
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {0|1|2|3} luck 運勢の値
   */
  async out_church(kitaru, you, callname, luck) {
    await era.printAndWait([
      '담당과 함께, ',
      kitaru.couple_title,
      '의 집안 신사에 왔다.',
    ]);
    await kitaru.say_and_wait('그럼 운세 뽑기 시간이에요!');
    await kitaru.say_and_wait('어디 보자! 오늘의 운세는!');
    await kitaru.say_and_wait('시라오키님~시라오키님~');
    await era.printAndWait([
      kitaru.get_colored_name(),
      '는 독특한 방식으로 통을 흔들며 주문을 외웠고, 종이 제비 하나가 통에서 미끄러져 나왔다.',
    ]);
    await kitaru.say_and_wait('에잇!');
    switch (luck) {
      case 0:
        await era.printAndWait('(소길!)');
        await kitaru.say_and_wait('나쁘지 않네요!');
        break;
      case 1:
        await era.printAndWait('(중길!)');
        await kitaru.say_and_wait('오오!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '에게 미소를 보였다.',
        ]);
        break;
      case 2:
        if (era.get('love:56') >= 50) {
          await era.printAndWait([
            kitaru.get_colored_name(),
            '는 종이 제비를 ',
            you.get_colored_name(),
            '에게 건네며 읽어 달라는 눈짓을 했다. 대길이라는 말을 듣자, ',
            kitaru.sex,
            '는 기뻐하며 ',
            you.get_colored_name(),
            '에게 뛰어들었다.',
          ]);
          await kitaru.say_and_wait([
            '행운을 저에게도 나눠 주세요! ',
            callname,
            '!',
          ]);
          await era.printAndWait([
            kitaru.get_colored_name(),
            '는 ',
            you.get_colored_name(),
            '의 허리를 힘껏 끌어안았고, ',
            you.get_colored_name(),
            '은(는) ',
            kitaru.sex,
            '의 체온과 심장 박동을 느꼈다.',
          ]);
        } else {
          await kitaru.say_and_wait('와아! 대길이에요!');
          await kitaru.say_and_wait([callname, '! 보셨나요?']);
          await era.printAndWait(
            '오히려 이 신사의 무녀가 대길을 뽑지 못하는 쪽이 훨씬 이상하다.',
          );
        }
        break;
      case 3:
        await era.printAndWait('(흉)');
        await kitaru.say_and_wait('음……');
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 어떻게 위로할지 생각하는데 돌풍이 불어, ',
          kitaru.get_colored_name(),
          '의 손에 있던 종이 제비를 낚아챘다.',
        ]);
        await kitaru.say_and_wait('시라오키님, 가호를……');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 날아간 종이 제비를 바라보며 중얼거린다.',
          you.get_colored_name(),
          '은(는) 무슨 말을 해야 할지 몰랐다.',
        ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_restaurant(kitaru, callname) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait([
          callname,
          ', 저 가게의 애플파이 맛있어 보여요!',
        ]);
        await kitaru.say_and_wait('먹어 볼까요?');
      },
      async () => {
        await kitaru.say_and_wait('지금이 식사하기 길한 시간이에요!');
        await kitaru.say_and_wait('같이 먹으러 가지 않을래요?');
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async o_s_dating(kitaru, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await kitaru.say_and_wait(
          '음! 너무 딱딱한 옷차림은 저에게 안 맞는 것 같아요!',
        );
        await kitaru.say_and_wait('물론 무녀복은 별개예요!');
        await kitaru.say_and_wait('이건 어떤가요?');

        const buffer2 = [];
        buffer2.push(
          async () => {
            await era.printAndWait([
              '귀여운 무늬의 원피스를 입고 탈의실에서 나온 ',
              kitaru.get_colored_name(),
              '가, 그렇게 ',
              you.get_colored_name(),
              '에게 물었다.',
            ]);
            await era.printAndWait([
              '조금 시원한 옷차림이, ',
              kitaru.sex,
              '의 유혹적인 흰 어깨를 드러낸다.',
            ]);
          },
          async () => {
            await era.printAndWait([
              '직장인 같은 셔츠에 넥타이를 매고 탈의실에서 나온 ',
              kitaru.get_colored_name(),
              '가, 그렇게 ',
              you.get_colored_name(),
              '에게 물었다.',
            ]);
            await era.printAndWait(
              '다리에는 업무용 검은 스타킹을 신었다. 적당한 두께라 살빛이 은근하게 비친다.',
            );
          },
          async () => {
            await era.printAndWait([
              '격식 있는 자리에 어울리는 드레스를 입고 탈의실에서 나온 ',
              kitaru.get_colored_name(),
              '가, 그렇게 ',
              you.get_colored_name(),
              '에게 물었다.',
            ]);
            await era.printAndWait([
              '옷자락이',
              kitaru.sex,
              '의 회전에 맞춰 날리고, 가터가 살집 있는 허벅지에 선명한 자국을 남긴다.',
            ]);
          },
        );
        if (kitaru.sex_code !== 1) {
          buffer2.push(async () => {
            await era.printAndWait([
              '어디서 꺼냈는지 모를 치파오를 입고 탈의실에서 나온 ',
              kitaru.get_colored_name(),
              '가, 그렇게 ',
              you.get_colored_name(),
              '에게 물었다.',
            ]);
            await era.printAndWait([
              '상당히 몸에 붙는 치파오다. 가슴 부분의 천이 비명을 지르는 소리가 희미하게 들리는 듯하다.',
            ]);
          });
        }
        await get_random_entry(buffer2)();

        await kitaru.say_and_wait([
          '잠깐만요! ',
          callname,
          ', 어딜 보고 계세요?',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('에잇!');
        await kitaru.say_and_wait('악수의 술법이에요!');
        await kitaru.say_and_wait('다른 사람에게 운을 전해 줄 수 있대요!');
        await era.printAndWait(
          '그 뒤 주위의 시선 속에서 연인처럼 점점 가까워졌다.',
        );
      },
    );
    if (era.get('love:56') >= 50 && era.get('exp:56:接吻次数') > 0) {
      buffer.push(async () => {
        await kitaru.say_and_wait(['저기……', callname, '！']);
        await kitaru.say_and_wait('쪽!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 ',
          you.get_colored_name(),
          '에게 입을 맞췄다.',
        ]);
        await era.printAndWait(
          '입맞춤이라기보다 입술끼리 부딪쳤다는 표현이 더 어울린다.',
        );
      });
    }
    await get_random_entry(buffer)();
  },
  haircut: (() => {
    const title = '후쿠키타루의 머리 모양';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
     * @param {PrintedSpan} call_2 マチカネフクキタルのサイレンススズカへの呼び方
     * @param {PrintedSpan} call_62 マチカネフクキタルのマチカネタンホイザへの呼び方
     * @param {PrintedSpan} call_58 マチカネフクキタルのメイショウドトウへの呼び方
     * @param {PrintedSpan} call_74 マチカネフクキタルのメジロパーライトへの呼び方
     */
    const f = async (
      kitaru,
      you,
      callname,
      call_2,
      call_58,
      call_62,
      call_74,
    ) => {
      await era.printAndWait([
        '또 ',
        kitaru.get_colored_name(),
        '와 상점가의 미용실 앞을 지났다.',
      ]);
      await era.printAndWait(
        '가게 앞을 지나며 포스터에 저도 모르게 시선이 몇 초 머물렀다.',
      );
      await kitaru.say_and_wait(['어! ', callname, ', 뭘 보고 계세요?']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 시선을 따라 포스터 속 정성껏 머리를 손질한 ',
        kitaru.uma_sex_title,
        ' 모델을 보더니 무의식적으로 평소의 부스스한 머리를 만졌다.',
      ]);
      await kitaru.say_and_wait(
        '어머! 평소에는 제 머리 모양 같은 건 별로 신경 안 쓰거든요……',
      );
      await kitaru.say_and_wait([
        call_62,
        ', ',
        call_74,
        ', ',
        call_2,
        '의 머리 모양은……',
      ]);
      await kitaru.say_and_wait([call_58, '도 저랑 비슷해요.']);
      await era.printAndWait([
        '확실히, ',
        you.get_colored_name(),
        '의 담당 ',
        kitaru.get_colored_name(),
        '는 머리 손질에 크게 신경 쓰지 않는 편이다.',
        kitaru.uma_sex_title,
        '특유의 탄력 있는 머릿결 덕분에 대강의 모양만 유지되는 정도다.',
      ]);
      await kitaru.say_and_wait([
        '그러고 보니, ',
        callname,
        '은(는) 제 긴 머리가 보고 싶으세요?',
      ]);
      await kitaru.say_and_wait([
        '초등학교 때 길러 본 적은 있어요. 하지만 거울을 보면 자꾸 사진 속 ',
        kitaru.elder_sibling_sex_title,
        '가 떠올라서요.',
      ]);
      await kitaru.say_and_wait(['그래도, ', callname, '이(가) 좋아하신다면!']);
      await era.printAndWait([
        kitaru.get_colored_name(),
        '는, ',
        you.get_colored_name(),
        '의 무심한 행동에 알 수 없는 위기감을 느낀 모양이다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} kitaru マチカネフクキタル */
  get_haircut_confirm: (kitaru) => [
    kitaru.get_colored_name(),
    '를 미용실에 데려갈까요?',
  ],
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async haircut_intro(kitaru, you, callname) {
    await kitaru.say_and_wait([callname, ', 또 제 머리 모양을 바꾸고 싶으세요?']);
    switch (era.get('cstr:56:后发')) {
      // ロングストレート
      case 'long_straight':
        await era.printAndWait([
          '폭포처럼 곧게 흐르는 주황빛 긴 머리의 ',
          kitaru.get_colored_name(),
          '가 돌아서서 ',
          you.get_colored_name(),
          '을(를) 바라본다.',
        ]);
        break;
      // ショート／肩につくストレート
      case 'shor_hair':
        await era.printAndWait([
          kitaru.get_colored_name(),
          '가 돌아서서 ',
          you.get_colored_name(),
          '을(를) 바라본다. 단정한 주황빛 머리카락이 어깨에 닿아 있다.',
        ]);
        break;
      // 外ハネ
      case 'wing_style':
        await era.printAndWait([
          kitaru.get_colored_name(),
          '가 돌아서서 ',
          you.get_colored_name(),
          '을(를) 바라본다. 뺨 주변에 땀에 젖은 머리카락 몇 가닥이 붙어 있다.',
        ]);
    }
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   */
  async haircut_select(kitaru, you) {
    await era.printAndWait([
      '그럼, ',
      you.get_colored_name(),
      '은(는) ',
      kitaru.sex,
      '에게 어떤 머리 모양을 권할까?',
    ]);
    era.printButton('어깨에 닿는 생머리', 1);
    era.printButton('허리까지 내려오는 긴 생머리', 2);
    era.printButton('「지금 머리가 후쿠키타루에게 가장 잘 어울려.」', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        await era.printAndWait([
          you.get_colored_name(),
          '의 제안으로, ',
          kitaru.get_colored_name(),
          '는 어깨에 닿는 생머리를 했다.',
        ]);
        await kitaru.say_and_wait('어때요?');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 고개를 기울여 ',
          you.get_colored_name(),
          '을(를) 바라본다. 어깨까지 내려오는 부드러운 머리카락이 꿀 같은 주황빛으로 반짝인다.',
        ]);
        break;
      case 2:
        await era.printAndWait([
          you.get_colored_name(),
          '의 제안으로, ',
          kitaru.get_colored_name(),
          '는 허리까지 내려오는 긴 생머리를 했다.',
        ]);
        await kitaru.say_and_wait('긴 머리는……역시 아직 익숙하지 않네요!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 허리까지 늘어진 머리카락을 무심코 손가락으로 쓸어 모았다.',
        ]);
        await era.printAndWait('이렇게 보니 확실히 차분한 인상이 되었다.');
        break;
      case 3:
        await era.printAndWait([
          you.get_colored_name(),
          '의 제안으로, ',
          kitaru.get_colored_name(),
          '는 머리 모양을 바꾸지 않았다.',
        ]);
        await kitaru.say_and_wait('네! 역시 이게 좋아요!');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '의 모습을 보고, ',
          you.get_colored_name(),
          '은(는) 저도 모르게 손을 뻗어 푹신한 주황색 머리의 감촉을 확인했다.',
        ]);
    }
    return ret;
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_shopping(kitaru, you) {
    const buffer = [
      async () => {
        await kitaru.say_and_wait('오오! 새로운 점술 도구예요!');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 역대의 명',
          kitaru.uma_sex_title,
          '를 소재로 한 타로를 가리키는 ',
          kitaru.get_colored_name(),
          '를 보았다.',
        ]);
      },
      async () => {
        await kitaru.say_and_wait('제 긴 머리가 보고 싶으세요?');
        await kitaru.say_and_wait('……죄송해요.');
        await era.printAndWait([
          '미용실 앞을 지나던 중, ',
          kitaru.get_colored_name(),
          '는, ',
          you.get_colored_name(),
          '이(가) 꺼낸 화제를 얼버무리며 피했다.',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  good_night_normal(kitaru, you, callname) {
    era.print([
      '바쁜 하루가 끝나고, ',
      kitaru.get_colored_name(),
      '를 학생 기숙사 입구까지 데려다주었다.',
    ]);
    const buffer = [];
    if (era.get('love:56') >= 75) {
      buffer.push(
        () => {
          era.print([
            you.get_colored_name(),
            '이(가) 눈치채지 못한 사이, ',
            kitaru.get_colored_name(),
            '가 갑자기 안겨 왔다.',
          ]);
          kitaru.say('쪽……');
          kitaru.say('성공했네요!');
          era.print([
            you.get_colored_name(),
            '이(가) 반응하기 전에, ',
            kitaru.get_colored_name(),
            '는 이미 기숙사 안으로 뛰어 들어갔다.',
          ]);
          era.print(['입술에는, ', kitaru.sex, '의 달콤한 향이 남아 있다.']);
        },
        () => {
          kitaru.say([callname, '과(와) 함께하는 시간은 늘 이렇게 빠르네요!']);
          era.print([
            '환하게 웃는 ',
            kitaru.get_colored_name(),
            '와 눈이 마주쳤다. 그러더니 그녀가 갑자기 ',
            you.get_colored_name(),
            '에게 입을 맞췄다.',
          ]);
          era.print([
            '다른 ',
            kitaru.uma_sex_title,
            '들이 수군거리며 손가락질했다.',
          ]);
        },
      );
    } else if (era.get('love:56') >= 50) {
      buffer.push(() => {
        kitaru.say('내일 봬요!');
        era.print([
          you.get_colored_name(),
          '에게 달려들어 남들의 눈길을 끌 만큼 꼭 안긴 뒤, ',
          kitaru.get_colored_name(),
          '는 기숙사로 뛰어 들어갔다.',
        ]);
      });
    } else {
      buffer.push(() => {
        kitaru.say('오늘도 수고 많으셨어요!');
        era.print([
          kitaru.sex,
          '는 ',
          you.get_colored_name(),
          '에게 손을 흔들고 종종걸음으로 기숙사에 들어갔다.',
        ]);
      });
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   * @param {1|2} check 求愛判定。2＝大成功、断ると押し切られる
   */
  async good_night_sex(kitaru, you, callname, check) {
    era.print([
      '바쁜 하루가 끝나고, ',
      kitaru.get_colored_name(),
      '를 학생 기숙사 입구까지 데려다주었다.',
    ]);
    const buffer = [];
    buffer.push(async () => {
      era.print([
        '평소처럼 헤어지려는데, ',
        kitaru.get_colored_name(),
        '가 평소와 달리, ',
        you.get_colored_name(),
        '의 손을 잡고 있었다.',
      ]);
      kitaru.say(
        '저기! 점을 보니 오늘은 길일이라 외박 신청은 이미 해 뒀어요……',
      );
      era.print([
        '뺨을 붉힌 ',
        kitaru.get_colored_name(),
        '는 무릎을 비비며 손끝으로 ',
        you.get_colored_name(),
        '의 옷을 잡고 있다.',
      ]);
    });
    if (kitaru.sex_code !== 1) {
      buffer.push(async () => {
        era.print([
          '평소처럼 헤어지려는데, ',
          kitaru.get_colored_name(),
          '가 평소와 달리, ',
          you.get_colored_name(),
          '의 손을 잡고 있었다.',
        ]);
        kitaru.say('저기……');
        era.print([
          '뺨을 붉힌 ',
          kitaru.get_colored_name(),
          '가 체육복 지퍼를 내린다. 눈앞에 나타난 두 풍만한 가슴이, ',
          kitaru.sex,
          '의 점점 불안정해지는 자세에 맞춰 수줍게 흔들린다.',
        ]);
        kitaru.say([callname, ', 아시겠죠……?']);
      });
    }
    await get_random_entry(buffer)();
    era.print([
      '이제 하트가 된 별 모양 눈동자가 뜨겁게 ',
      you.get_colored_name(),
      '을(를) 바라본다.',
    ]);
    era.printButton('받아들인다', 1);
    era.printButton('거절한다', 2);
    const ret = await era.input();
    if (ret === 2) {
      if (check === 2) {
        await kitaru.say_and_wait('……정말, 정말 안 되나요? 지금 대길인데요?');
        await era.printAndWait([
          '아이언 클로를 쓰려던 오른손목을 발끝으로 선 ',
          kitaru.get_colored_name(),
          '가 잡았다. 뼈 소리가 난 것 같다. 그래도 환하게 웃는 주황빛',
          kitaru.uma_sex_title,
          '가 강제로 ',
          you.get_colored_name(),
          '을(를) 학생 기숙사에서 끌고 갔다.',
        ]);
      } else {
        await kitaru.say_and_wait('다음에는……먼저 점을 보는 게 좋을까요?');
        await kitaru.say_and_wait('아니면 저도 조금 더 강하게 나가야 할까요?');
        await era.printAndWait([
          kitaru.get_colored_name(),
          '가 학생 기숙사로 돌아가는 것을 바라보며, ',
          you.get_colored_name(),
          '은(는)',
          kitaru.sex,
          '가 그렇게 중얼거리는 것을 들었다.',
        ]);
      }
    }
    return ret;
  },
  punishment_1: (() => {
    const title = '징계 후';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait([
        '으아앗! 운명의 사람이',
        kitaru.uma_sex_title,
        '가 되어 버린 건가요!',
      ]);
      await kitaru.say_and_wait([
        '걱정하지 마세요! ',
        callname,
        ', 익숙해질 때까지 도와드릴게요!',
      ]);
      await kitaru.say_and_wait('그런데……아직 트레이너님이라고 불러도 되나요?');
      await kitaru.say_and_wait('언니라고 부르는 건 어때요?');
    };
    f.title = title;
    return f;
  })(),
  punishment_2: (() => {
    const title = '징계 후';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kitaru, you) => {
      await kitaru.say_and_wait('음! 언니는 뭘 하고 싶으세요?');
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 저항하며 내민 아이언 클로는 간단히 붙잡혔다.',
      ]);
      await era.printAndWait([
        '그 뒤, ',
        kitaru.get_colored_name(),
        '의 반쯤 강제적인 부탁으로, ',
        kitaru.sex,
        '와 똑같은 옷으로 갈아입혀졌다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  punishment_3: (() => {
    const title = '징계 후';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await kitaru.say_and_wait('괜찮아요……');
      await kitaru.say_and_wait([
        '이렇게 되어도 저는 ',
        callname,
        '을(를) 버리지 않을 거예요……',
      ]);
      await kitaru.say_and_wait('약속했으니까요……');
      await kitaru.say_and_wait('후우……');
      await era.printAndWait([
        '목욕을 마쳐 젖어 있는 ',
        you.get_colored_name(),
        '의 귀를 펴서 닦아 준 뒤, 주황빛',
        kitaru.uma_sex_title,
        '는 귀 장식을 ',
        you.get_colored_name(),
        '의 귀에 달아 주었다.',
      ]);
      await era.printAndWait([
        '귀가 너무 민감해서인지, ',
        you.get_colored_name(),
        '의 시야가 점점 촉촉해진다.',
      ]);
      await era.printAndWait([
        '꼬리가 주인을 기억하는 것처럼, ',
        kitaru.get_colored_name(),
        '의 허리를 감았다……',
      ]);
      await era.printAndWait([
        '예전에는 한 손으로 ',
        kitaru.get_colored_name(),
        '를 제압하던 ',
        you.get_colored_name(),
        '에게 이런 일이 생기리라고는 상상도 못 했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} kitaru マチカネフクキタル
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
   */
  async load_talk(kitaru, you, callname) {
    if (era.get('cflag:56:妊娠阶段') >> pregnant_stage_enum.embryo > 0) {
      await kitaru.print_and_wait([
        you.get_colored_name(),
        '이(가) 떠난 뒤, ',
        kitaru.get_colored_name(),
        '는 줄곧 집안의 서고에 틀어박혀 있었다.',
      ]);
      await kitaru.say_and_wait('맞아요! 맞아요! 찾았어요!');
      await era.printAndWait(
        [
          kitaru.get_colored_name(),
          {
            color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
            content:
              '「찾았어 찾았어 찾았어 찾았어 찾았어 찾았어 찾았어!!!!!」',
            fontWeight: 'bold',
          },
        ],
        { fontSize: '1.5rem' },
      );
      await kitaru.say_and_wait([
        '제물로 아이의 피가 필요해요. 그러면 ',
        callname,
        '을(를) 쫓아갈 수 있어요!',
      ]);
      await kitaru.print_and_wait([
        '조금 부푼 배를 쓰다듬으며 머리가 헝클어진 ',
        kitaru.get_colored_name(),
        '의 얼굴에는 일그러졌다고밖에 할 수 없는 미소가 떠올라 있었다.',
      ]);
    } else if (era.get('love:56') < 49) {
      await kitaru.say_and_wait([
        '이 알람 시계는 ',
        callname,
        '의 개운 도구인가요?',
      ]);
      await kitaru.say_and_wait('음!');
      await kitaru.say_and_wait('지금 돌려드릴게요!');
    } else if (era.get('love:56') > 89) {
      await kitaru.say_and_wait('사라졌어……');
      await kitaru.say_and_wait('운명의 사람이……사라졌어……');
      await era.printAndWait(
        [
          kitaru.get_colored_name(),
          {
            color: get_gradient_color(kitaru.color, '#ff0000', 0.5),
            content: '「싫어……싫어 싫어 싫어 싫어 싫어 싫어 시러어어어!」',
            fontWeight: 'bold',
          },
        ],
        { fontSize: '1.5rem' },
      );
    }
  },
  cl_temple_fair: (() => {
    const title = '축제';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait([
        '오늘은 ',
        kitaru.get_colored_name(),
        '와 여름 합숙의 축제에 갔다.',
      ]);
      await era.printAndWait([
        '연두색 유카타를 입은 ',
        kitaru.get_colored_name(),
        '가 ',
        you.get_colored_name(),
        '앞을 걷고 있다. 넉넉하지만 두껍지 않은 유카타는 활기찬',
        kitaru.sex,
        '에게 상당한 단정함을 더해 준다.',
      ]);
      await era.printAndWait([
        '흰 발등을 드러낸 나막신이, ',
        kitaru.get_colored_name(),
        '의 가벼운 발걸음에 맞춰 경쾌한 소리를 낸다.',
      ]);
      await era.printAndWait([
        kitaru.teen_sex_title,
        '는 요염하게 웃으며 ',
        you.get_colored_name(),
        '을(를) 바라보고 몸을 기울였다. 원래도 아름다운 엉덩이 선이 한층 도드라진다.',
      ]);
      await kitaru.say_and_wait(['어때요! ', callname, '！']);
      era.printButton('마치카네 후쿠키타루의 허리를 감싼다', 1, {
        disabled: era.get('love:56') < 75,
      });
      era.printButton('「좋아해.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '손을 ',
          kitaru.get_colored_name(),
          '의 허리에 얹자, ',
          kitaru.teen_sex_title,
          '의 몸이 작게 떨렸다.',
        ]);
        await era.printAndWait([
          '주황색 꼬리는 오히려 스스로 올라와 연인을 끌어안듯 ',
          you.get_colored_name(),
          '의 팔을 감쌌다.',
        ]);
        await kitaru.say_and_wait('어!');
        await era.printAndWait([
          '그 뒤 손을 올려 탄탄하고 둥근 엉덩이를 가볍게 두드리자, ',
          kitaru.teen_sex_title,
          '는 거기에 맞춰 귀여운 소리를 냈다.',
        ]);
        await kitaru.say_and_wait('힛!');
        await era.printAndWait([
          '엉덩이 골을 따라 안쪽으로 미끄러뜨려, ',
          kitaru.sex,
          '의 두 다리 사이에 들어가 팬티 너머의 민감한 곳을 애태우듯 몇 번이고 만진다.',
        ]);
        await kitaru.say_and_wait('주위에……주위에 사람이……꺄앗!');
        await era.printAndWait(
          '말리려 해도 아래에서 오는 자극에 말이 되지 않는다.',
        );
        await era.printAndWait([
          '점점 더 ',
          you.get_colored_name(),
          '의 가슴에 기대며, 주변에는 담당과 트레이너가 조금 지나치게 붙어 있는 연인으로 보이기만을 바란다.',
        ]);
        await kitaru.say_and_wait('읏!');
        await era.printAndWait([
          '일부러 억누른 숨소리와 함께, 뜨겁고 끈적한 감촉이 ',
          you.get_colored_name(),
          '의 손끝에 닿은 천 너머로 전해졌다.',
        ]);
        await era.printAndWait([
          kitaru.get_colored_name(),
          '는 완전히 ',
          you.get_colored_name(),
          '의 품에서 무너졌고, 두 다리가 작게 떨리며 별 모양 눈동자에도 물기가 어렸다.',
        ]);
        await kitaru.say_and_wait([callname, '……좋아요……']);
        await era.printAndWait([
          kitaru.get_colored_name(),
          '를 안은 채, ',
          you.get_colored_name(),
          '은(는) 곁에 있는 인적 없는 숲으로 들어갔다.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '에게 칭찬받은',
          kitaru.teen_sex_title,
          '는 몇 바퀴나 돌며 많은 시선을 모았다.',
        ]);
        await era.printAndWait([
          '이렇게 단정한 옷을 입고 있어도, ',
          kitaru.sex,
          '는 여전히 깜짝깜짝 놀라며 들뜨는 ',
          kitaru.get_colored_name(),
          '그대로다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  cl_halloween: (() => {
    const title = '핼러윈';
    /**
     * @param {CharaTalk} kitaru マチカネフクキタル
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マチカネフクキタルのプレイヤーへの呼び方
     */
    const f = async (kitaru, you, callname) => {
      await era.printAndWait(
        '핼러윈 밤, 트레센 학원과 주변 상점가는 핼러윈다운 장식으로 가득하다.',
      );
      await era.printAndWait([
        '거대한 박쥐 장식과 호박 머리의 그림자 아래, ',
        kitaru.uma_sex_title,
        '들도 팬 감사제처럼 노점을 열었다.',
      ]);
      await kitaru.say_and_wait(['아! ', callname, '이네요!']);
      await kitaru.say_and_wait('HAPPY HALLOWEEN！');
      await era.printAndWait([
        you.get_colored_name(),
        '의 담당이 운영하는 점술 오두막 안, 점술 탁자 너머에 앉은 ',
        kitaru.get_colored_name(),
        '는 핼러윈을 위해 준비한 옷을 입고 있다.',
      ]);
      await era.printAndWait(
        '검정을 바탕으로 흰색을 더한 수녀복은 소박하면서도 충분히 청초하다.',
      );
      await era.printAndWait(
        '선명한 주황빛 머리와 별 모양 눈동자가 무거운 옷의 분위기를 적당히 덜어 주고, 오히려 여우 같은 요염함이 은근하게 감돈다.',
      );
      await kitaru.say_and_wait('어머, 어머, 어머!');
      await kitaru.say_and_wait('색다르죠!');
      await kitaru.say_and_wait(
        '여기 장식도 고해실처럼 하고 싶었는데 시간이 부족했어요!',
      );
      era.printButton('「그 옷 잘 어울려.」', 1);
      await era.input();
      await kitaru.say_and_wait('네! 둘 다 성직자라서 그런 걸까요!');
      await kitaru.say_and_wait([
        '그럼! ',
        callname,
        ', 후쿠에게 고해하고 싶은 일이 있나요?',
      ]);
      await era.printAndWait([
        '두 손을 모으는 동작을 하자 수녀의 십자가 같은 눈동자가 ',
        you.get_colored_name(),
        '을(를) 응시한다.',
      ]);
      era.printButton('사탕을 건넨다', 1);
      era.printButton('마치카네 후쿠키타루에게 입 맞춘다', 2, {
        disabled: era.get('love:56') < 50,
      });
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '준비해 둔 사탕을 ',
          kitaru.get_colored_name(),
          '에게 건네고 수녀의 기도 소리를 뒤로한 채 돌아왔다.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 몸을 조금 앞으로 기울이자, 뜻을 알아챈 ',
          kitaru.get_colored_name(),
          '도 의자를 앞으로 당겼다.',
        ]);
        await kitaru.say_and_wait('읏, 윽!');
        await era.printAndWait([
          '두 사람의 혀가 얽히고 담당의 혀끝이 ',
          you.get_colored_name(),
          '의 입안을 훑으며 핼러윈 사탕의 갖가지 맛을 전한다.',
        ]);
        await kitaru.say_and_wait('하아!');
        await era.printAndWait('침의 실이 수녀복 위로 떨어졌다.');
        await kitaru.say_and_wait(['……', callname, '.']);
        await kitaru.say_and_wait('으…… 조금 너무 대담했네요.');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
