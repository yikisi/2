/**
 * @file マンハッタンカフェ - 日常
 * @author Necroz
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { buff_colors } = require('#/data/color-const');

module.exports = {
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {number} b_escape 地下室からの脱出手段。0 のときは通常
   */
  good_morning(coffee, callname, b_escape) {
    if (b_escape > 0) {
      coffee.say([callname, '……잘 쉬셨나요?']);
      coffee.say('……멋대로 나가 버리셨지만…… 아무 짓도 하지 않을게요……');
    } else {
      const buffer = [];
      if (era.get('base:25:体力') < era.get('maxbase:25:体力') * 0.45) {
        buffer.push(
          () => coffee.say('저는…… 이제 무리할 수 없을 것 같아요……'),
          () =>
            coffee.say('잠시만…… 시간을 주세요. 커피를 한 잔 마시고 싶어서요.'),
          () => coffee.say('다리가 무거워요…… 뿌리가 내린 것처럼……'),
        );
      } else {
        buffer.push(
          () => coffee.say('그 아이를…… 따라잡기 위해서.'),
          () =>
            coffee.say(
              '별을 붙잡으려 한다면…… 하늘을 날 수 있을지도 몰라요……!',
            ),
          () => coffee.say('뒤쫓아야 할 그림자는…… 이미 보이고 있어요.'),
          () => coffee.say('……시작하죠. 친구도…… 그렇게 말하고 있어요……'),
          () => coffee.say('용에게는 날개가, 저에게는 커피가…… 후훗.'),
        );
      }
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {boolean} c_awake カフェが起きているか
   * @param {number} b_escape 地下室からの脱出手段。0 のときは通常
   */
  select(coffee, callname, c_awake, b_escape) {
    if (!c_awake) {
      era.print([
        '……',
        coffee.get_colored_name(),
        '가 지금 깊이 잠들어 있다. 속눈썹이 파르르 떨리고 있는데, 무슨 꿈이라도 꾸고 있는 걸까?',
      ]);
    } else if (b_escape > 0) {
      coffee.say([callname, '……잘 쉬셨나요?']);
      coffee.say('……멋대로 나가 버리셨지만…… 아무 짓도 하지 않을게요……');
    } else {
      const buffer = [
        () => coffee.say([callname, ', 저 여기 있어요.']),
        () => coffee.say('……네, 평소와 같아요.'),
        () => coffee.say(['오늘도…… ', callname, '에게 신세를 지겠네요.']),
      ];
      get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_study(coffee, callname) {
    await coffee.say_and_wait([
      '그렇군요…… ',
      callname,
      '은 보기보다 대단하시네요……',
    ]);
    await era.printAndWait('이거 칭찬 들은 거 맞나……');
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_prepare(coffee, callname) {
    if (era.get('love:25') >= 75) {
      if (Math.random() > 0.5) {
        await coffee.say_and_wait([
          '친구를 따라잡기 위해서, 그리고…… ',
          callname,
          '을(를) 위해서…… 최선을 다할게요……!',
        ]);
      } else {
        await coffee.say_and_wait([
          '지금의 제가 있는 건…… ',
          callname,
          ' 덕분이에요. 그러니 저도……',
        ]);
      }
    } else {
      await coffee.say_and_wait('친구를 따라잡기 위해…… 최선을 다할게요……!');
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {boolean} c_awake カフェが起きているか
   */
  async talk(coffee, callname, c_awake) {
    if (!c_awake) {
      await era.printAndWait([
        '……잠든 ',
        coffee.get_colored_name(),
        '의 얼굴을 자세히 관찰해 보았다. 인형처럼 하얗고 정교한 얼굴이 완전히 긴장을 풀고, 가느다란 숨소리를 내고 있다.',
      ]);
    } else {
      const buffer = [];
      switch (era.get('cflag:25:干劲')) {
        case -2:
          buffer.push(
            () =>
              coffee.say_and_wait([
                callname,
                ', 『그들』이 와요……! 제 곁에서…… 떨어지지 마세요……!',
              ]),
            () =>
              coffee.say_and_wait(
                '상태가…… 좋지 않아요. 그림자에…… 삼켜질 것만 같아요.',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              coffee.say_and_wait([
                callname,
                '……죄송해요, 지금은 상태가…… 커피 한 잔만 있으면……',
              ]),
            () =>
              coffee.say_and_wait(
                '어쩌면…… 우리가 겪어 온 모든 일이…… 신기루 같은 꿈일지도……',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              coffee.say_and_wait(
                '시간은 되돌릴 수 없어요…… 할 수 있는 건, 지금에 최선을 다하는 것뿐이에요.',
              ),
            () =>
              coffee.say_and_wait(
                '……당신은 그들에게 씌기 쉬운 것 같아요…… 이상한 일이 생기면, 바로 알려 주세요.',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              coffee.say_and_wait(
                '어릴 때부터…… 친구는 제 곁에 있었어요. 계속 그 등을 쫓아온 저도…… 언젠가는, 분명……',
              ),
            () =>
              coffee.say_and_wait(
                '친구가 지금 어디 있냐고요……? 후훗…… 뒤를 보시겠어요?',
              ),
            () =>
              coffee.say_and_wait(
                '방금…… 당신의 그림자가 혼자 움직였어요…… 후훗, 농담이에요.',
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              coffee.say_and_wait(
                '고래가 일곱 빛깔 날개를 달고…… 청금석빛 하늘로 날아가요…… 후훗, 꿈속 세상은 재미있네요.',
              ),
            () =>
              coffee.say_and_wait([
                callname,
                ', 지금 당신은…… 네, 상태가 좋아요. 그들과 마주칠 것 같지는 않네요.',
              ]),
            () =>
              coffee.say_and_wait(
                '오늘을 위해 고른…… 특별한 커피예요. 줄무늬 마노처럼 윤기가 나죠…… 괜찮으시면, 함께 드셔 보시겠어요?',
              ),
          );
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_gift(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        '이건…… 저에게 주시는 건가요? 선물…… 감사해요, ',
        callname,
        '。',
      ]);
    } else {
      await coffee.say_and_wait(
        '저에게 주시는…… 선물……? 앗, 친구……! 멋대로 열지 마……!',
      );
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_cook(coffee, you, callname) {
    await coffee.say_and_wait([
      '오늘은 비프 스튜를 만드는 게 어떨까요, ',
      callname,
      '……?',
    ]);
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 의외로 요리에 능숙해서, ',
      you.get_colored_name(),
      '은(는) 옆에서 거의 거들 틈조차 없었다.',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_rest(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        callname,
        '은(는) 커피나무의 꽃말을 아시나요? 『함께 쉬어요』예요. 쉴 때 커피를 마시는 데서…… 유래했대요……',
      ]);
    } else {
      await coffee.say_and_wait([
        callname,
        ', 사람의 심장 소리를…… 들어 보셨나요? 심장이 연주하는 소리에는…… 사람을 잠들게 하는 힘이 있대요. 그러니…… ',
        callname,
        ', 지금…… 가슴에 귀를 대게 해 주세요……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async office_game(coffee, callname) {
    await coffee.say_and_wait([callname, ', 지지 않겠어요……!']);
    await era.printAndWait([
      coffee.get_colored_name(),
      '가 묘한 승부욕을 불태우고 있다.',
    ]);
  },
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async s_a_tree_hollow(coffee) {
    await coffee.say_and_wait('친구를…… 반드시 뛰어넘어 보이겠어요……!');
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async s_a_dating(coffee, you, callname) {
    if (era.get('love:25') >= 75) {
      await coffee.say_and_wait([callname, ', 이제…… 어디로 갈까요……']);
      await era.printAndWait([
        '주변의 ',
        coffee.uma_sex_title,
        '들과 트레이너들의 시선도 신경 쓰지 않고, ',
        coffee.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 팔에 꼭 매달려 귓가에 속삭였다.',
      ]);
    } else {
      await coffee.say_and_wait([callname, ', 트레센 안에서는…… 역시……']);
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 당황해서 주위를 두리번거렸다. 학원 안에서 데이트하는 것은 ',
        coffee.sex,
        '에게 아직 부담스러운 걸까……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async s_r_lunch(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([
        callname,
        ', 오늘 점심은…… 샌드위치와 커피예요. 드세요……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 시선을 받으며 점심을 맛있게 먹었다.',
      ]);
    } else {
      await coffee.say_and_wait([
        callname,
        '이(가) 만든 애플파이…… 정말 맛있어요……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 애플파이를 먹으며 커피를 조금씩 머금었다. 참으로 ',
        coffee.get_colored_name(),
        '다운 조합이다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async o_r_fishing(coffee, you, callname) {
    await era.printAndWait([
      coffee.get_colored_name(),
      '와 함께 강으로 낚시를 하러 갔다……',
    ]);
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([callname, ', 낚시를…… 잘하시네요……']);
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 이렇게 조용히 시간을 보내는 것이 마음에 드는 모양이다. 낚싯대도 들지 않았으면서 옆에 앉아 즐거운 듯 함께해 주었다.',
      ]);
      await era.printAndWait([
        '……다만 ',
        coffee.sex,
        '가 가끔 이쪽을 쳐다보는 것 같았다.',
      ]);
    } else {
      await coffee.say_and_wait([
        callname,
        ', 이 강은…… 『그들』로 가득해요……',
      ]);
      await era.printAndWait('뭐? 농담이지?');
      await era.printAndWait([
        '하지만 물결 속에서 죽은 듯 꼼짝하지 않는 찌를 보자, ',
        you.get_colored_name(),
        '은(는) 결국 ',
        coffee.get_colored_name(),
        '의 곁으로 다가갔다……',
      ]);
    }
  },
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async o_r_walking(coffee) {
    await era.printAndWait([
      coffee.get_colored_name(),
      '와 함께 강둑을 산책했다……',
    ]);
    if (Math.random() < 0.5) {
      await coffee.say_and_wait(
        '……있잖아, 나를 알아봐 줘, This is my love song♪……',
      );
      await era.printAndWait([
        '곁에서 작은 콧노래가 들려왔다. ',
        coffee.get_colored_name(),
        '는 즐거워 보였다.',
      ]);
    } else {
      await era.printAndWait(
        '갑자기 얼음처럼 차가운 무언가가 손을 붙잡았다. 돌아봐도 아무것도 없었다.',
      );
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 아무 반응도 보이지 않았다. 그렇다면 친구인가. 조금은 익숙해진 것 같다……',
      ]);
      await era.printAndWait(
        '그렇게 생각하는 순간 다른 쪽 손도 붙잡혔다. 이번에는 따뜻했다.',
      );
      await era.printAndWait([
        '힐끗 보니 ',
        coffee.get_colored_name(),
        '의 하얀 손이 있었다. ',
        coffee.sex,
        '는 고개를 숙이고 있어 표정을 읽을 수 없었다.',
      ]);
      await era.printAndWait('……이대로 계속 걷자.');
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async o_s_arcade(coffee, you, callname) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        coffee.get_colored_name(),
        '와 함께 인형 뽑기를 시작했다……',
      ]);
      await era.printAndWait([
        '둘이서 기계 안의 ',
        coffee.get_colored_name(),
        ' 인형을 몇 번이나 노렸지만 실패했다. 포기하려는 순간, 인형이 갑자기 혼자 움직여 출구로 뛰어들었다.',
      ]);
      await coffee.say_and_wait([
        '친구가 한 일이에요…… 돌려놓는 게 좋을까요, ',
        callname,
        '？',
      ]);
      await era.printAndWait(
        '점원을 곤란하게 하지 않도록 결국 인형은 가져가기로 했다.',
      );
    } else {
      await era.printAndWait([
        coffee.get_colored_name(),
        '와 함께 오락실에서 대전 게임을 했다……',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 이런 게임에 그리 익숙하지 않은 모양이다. 화면 속에서 ',
        coffee.sex,
        '의 캐릭터가 일방적으로 공격당하고 있었다. ',
        you.get_colored_name(),
        '이(가) 마지막 일격을 날리려는 순간——반응이 없다?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 캐릭터가 화면 한가운데 멈춰 섰고, 곧바로 기세를 되찾은 ',
        coffee.get_colored_name(),
        '에게 맥없이 쓰러졌다.',
      ]);
      await era.printAndWait('……또 친구인가?');
      await era.printAndWait([
        '맞은편의 ',
        coffee.get_colored_name(),
        '를 곁눈질했다. ',
        coffee.sex,
        '는 무슨 일이 일어났는지 눈치채지 못한 듯 자신의 승리에 미소 짓고 있었다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '가 즐겁다면 그걸로 된 것 아닐까.',
      ]);
    }
  },
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async o_s_drawing(coffee) {
    await coffee.say_and_wait(
      '제비뽑기인가요…… 무엇이 나올까요. 앗, 친구…… 방해하지 마……!',
    );
  },
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async o_s_ktv(coffee) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait('노래요? 그다지…… 자신은 없는데……');
      await era.printAndWait([
        '처음에는 내키지 않는 듯했지만, 격려해 주자 ',
        coffee.get_colored_name(),
        '는 소리를 내어 노래하기 시작했다.',
      ]);
    } else {
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 앞에서 노래를 부르자, ',
        coffee.get_colored_name(),
        '는 미소를 띠고 박자를 맞췄다.',
      ]);
    }
  },
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async o_s_movie(coffee) {
    await coffee.say_and_wait('영화라면…… 『트레센의 다섯 밤』은 어떨까요?');
    await era.printAndWait([
      coffee.get_colored_name(),
      '와 공포 영화를 봤다. 하지만 ',
      coffee.get_colored_name(),
      '의 곁에 있으면 이런 영화도 그다지 무섭지 않은 것 같다……',
    ]);
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {number} dice 祈祷の出目。0-1 の小数で、小さいほど良い
   */
  async o_c_pray(coffee, you, callname, dice) {
    await era.printAndWait([
      coffee.get_colored_name(),
      '와 외출하던 중 신사 앞을 지나갔다.',
    ]);
    await coffee.say_and_wait(['……', callname, ', 안을…… 구경해도 될까요?']);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      coffee.get_colored_name(),
      '의 부탁을 받아들였다.',
    ]);
    await era.printAndWait('신사 안에는 사람이 그리 많지 않았다.');
    await era.printAndWait([
      coffee.get_colored_name(),
      '는 들어서자마자 무언가를 찾기 시작하더니, 이윽고 운세 제비를 뽑는 곳에 멈춰 서서 ',
      you.get_colored_name(),
      '에게 손짓했다.',
    ]);
    await coffee.say_and_wait([
      callname,
      '……운세를 뽑고 나면…… 조금 기묘한 일이 생길지도 몰라요. 놀라지 마세요.',
    ]);
    await era.printAndWait([
      '산전수전 다 겪은 ',
      you.get_colored_name(),
      '은(는) 고개를 끄덕이고, 곁에서 ',
      coffee.get_colored_name(),
      '가 제비를 하나 뽑는 모습을 지켜보았다. 결과는——',
    ]);
    if (dice < 0.5) {
      await era.printAndWait('대길.');
      if (era.get('love:25') >= 75) {
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 안도한 듯했다. 하지만 ',
          you.get_colored_name(),
          '이(가) 축하하기도 전에 눈앞에 기묘한 광경이 펼쳐졌다.',
        ]);
        await era.printAndWait([
          '그 주인공은 ',
          you.get_colored_name(),
          '와(과) ',
          coffee.get_colored_name(),
          '였다. 지금보다 몇 살은 더 들어 보였고, 장소는 낯선 방이었다.',
        ]);
        await era.printAndWait('하지만 중요한 건 그게 아니었다.');
        await era.printAndWait([
          '눈앞의 ',
          you.get_colored_name(),
          '와(과) ',
          coffee.get_colored_name(),
          '는 실오라기 하나 걸치지 않은 채 방 안에서 격렬하게 몸을 섞고 있었다.',
        ]);
        if (you.sex_code > 0 && coffee.sex_code !== 1) {
          await era.printAndWait([
            '창을 통해 들어온 희미한 햇살이 두 사람을 비추자 땀방울이 금빛으로 반짝였다. 하지만 그 광경에는 신성함이라곤 없었다. 지금 ',
            coffee.get_colored_name(),
            '는 ',
            you.get_colored_name(),
            '에게 뒤에서 격렬하게 박히고 있었으며, 말뚝을 박는 듯한 그 속도에 살아 있는 춘화를 보고 있는 당사자인 ',
            you.get_colored_name(),
            '조차 간담이 서늘해졌다.',
          ]);
          await era.printAndWait([
            coffee.get_colored_name(),
            '의 표정은 평소와 딴판이었다. 눈가에는 눈물과 땀, 그리고 이상한 액체의 흔적…… 그래, 정액이 뒤섞여 있었다. 혀는 힘없이 입 밖으로 늘어져 몸이 앞뒤로 흔들릴 때마다 함께 흔들렸다.',
          ]);
        }
        await era.printAndWait([
          '그렇게 ',
          you.get_colored_name(),
          '은(는) 자신과 ',
          coffee.get_colored_name(),
          '의 소리 없는 교합을 지켜보았다. 도중에 몇 번이나 체위를 바꾸더니, 마지막에는 ',
          coffee.get_colored_name(),
          '가 여운에 잠긴 얼굴을 비추며 끝났다……',
        ]);
        await era.printAndWait([
          '신사 안의 ',
          you.get_colored_name(),
          '와(과) 얼굴이 새빨개진 ',
          coffee.get_colored_name(),
          '는 눈을 마주쳤다가 천천히 피했고, 둘 다 말이 없었다.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '와의 사이가 묘한 방식으로 깊어졌다……',
        ]);
      } else {
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 안도한 듯했다. 하지만 ',
          you.get_colored_name(),
          '이(가) 축하하기도 전에 눈앞에 기묘한 광경이 펼쳐졌다.',
        ]);
        await era.printAndWait([
          '그 주인공은 ',
          you.get_colored_name(),
          '와(과) ',
          coffee.get_colored_name(),
          '였다. 나이는 지금과 크게 다르지 않았고, 트레이너 제복과 트레센 교복 차림 그대로 익숙한 트레이너실 안에 있었다.',
        ]);
        await era.printAndWait('하지만 중요한 건 그게 아니었다.');
        await era.printAndWait([
          '눈앞의 ',
          you.get_colored_name(),
          '와(과) ',
          coffee.get_colored_name(),
          '는 트레이너실 소파에 바짝 붙어 앉아 있었다. ',
          you.get_colored_name(),
          '은(는) 뒤에서 ',
          coffee.get_colored_name(),
          '를 끌어안고 얼굴을 ',
          coffee.get_colored_name(),
          '의 목덜미에 묻은 채 냄새를 깊이 들이마시며, 가만히 있지 못하는 두 손으로 가슴과 다리 사이를 마구 더듬고 있었다.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 촉촉하게 달아오른 얼굴이었다. 교복은 흐트러져 있었고 붉어진 뺨에는 욕정과 기대가 고스란히 드러나 있었다.',
        ]);
        await era.printAndWait('누가 봐도 이다음에 무슨 일이 벌어질 분위기다!');
        await era.printAndWait([
          coffee.get_colored_name(),
          '의 옷이 완전히 벗겨지려는 순간, 광경이 사라졌다.',
        ]);
        await era.printAndWait([
          '신사 안의 ',
          you.get_colored_name(),
          '와(과) 얼굴이 새빨개진 ',
          coffee.get_colored_name(),
          '는 눈을 마주친 채 말이 없었다.',
        ]);
        await era.printAndWait([
          coffee.get_colored_name(),
          '와의 사이가 묘한 방식으로 깊어졌다……',
        ]);
      }
    } else {
      await era.printAndWait('……대흉.');
      if (era.get('love:25') >= 50) {
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 조금 풀이 죽었다. ',
          you.get_colored_name(),
          '이(가) 위로하기도 전에 눈앞에 기묘한 광경이 펼쳐졌다.',
        ]);
        await era.printAndWait([
          '그 주인공은 ',
          you.get_colored_name(),
          '와(과) ',
          coffee.get_colored_name(),
          '였다. 나이는 지금과 크게 다르지 않았고, 트레이너 제복과 트레센 교복 차림 그대로 익숙한 트레이너실 안에 있었다.',
        ]);
        await era.printAndWait('하지만 중요한 건 그게 아니었다.');
        await era.printAndWait([
          '눈앞의 ',
          you.get_colored_name(),
          '은(는) ',
          coffee.get_colored_name(),
          '와 다투고 있는 듯했다. ',
          you.get_colored_name(),
          '의 얼굴은 차가웠고, ',
          coffee.get_colored_name(),
          '는 눈물 자국으로 가득했다. 옆 책상에는 무언가 찍힌 사진이 놓여 있었다——',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 사진의 내용을 알아보기도 전에 광경이 갑자기 사라졌다.',
        ]);
        await era.printAndWait([
          '신사 안의 ',
          you.get_colored_name(),
          '이(가) 정신을 차렸을 때, ',
          coffee.get_colored_name(),
          '는 무표정하게 손에 든 운세 종이를 잘게 찢은 뒤 어디서 꺼냈는지 모를 라이터로 조각들을 남김없이 태우고 있었다. 그동안 환청인지도 모를 가느다란 비명이 들려왔다.',
        ]);
        await era.printAndWait([
          '돌아오는 길에 ',
          you.get_colored_name(),
          '은(는) 몇 번이나 조심스럽게 ',
          coffee.get_colored_name(),
          '에게 아까 그게 무엇이었는지 물었지만, 그때마다 ',
          coffee.get_colored_name(),
          '는 얼버무렸다.',
        ]);
        await era.printAndWait([
          '결국 무슨 일이 일어났는지 ',
          you.get_colored_name(),
          '에게는 알 길이 없었다.',
        ]);
      } else {
        await era.printAndWait([
          coffee.get_colored_name(),
          '는 조금 풀이 죽었고, ',
          you.get_colored_name(),
          '은(는) 다가가서 ',
          coffee.sex,
          '를 위로했다.',
        ]);
        await era.printAndWait([
          '트레센으로 돌아오는 길에 ',
          coffee.get_colored_name(),
          '는 한마디도 하지 않았고, ',
          you.get_colored_name(),
          '도 눈치껏 ',
          coffee.sex,
          '를 가만히 내버려 두었다.',
        ]);
        await era.printAndWait('신사의 비밀은 다음 기회에 알아보기로 하자.');
      }
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async o_s_restaurant(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([callname, ', 뭐 좀 드실래요?']);
      await era.printAndWait([
        coffee.get_colored_name(),
        '와 카페에서 커피와 간단한 식사를 즐겼다.',
      ]);
    } else {
      await coffee.say_and_wait('후우…… 역시 커피가…… 제일 좋아요……');
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 커피잔을 두 손으로 감싸 쥔 채 조금씩 음미했다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async o_s_dating(coffee, you, callname) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        coffee.get_colored_name(),
        '와 손을 잡고 거리를 걸었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 진짜인지 확인하려는 듯 ',
        coffee.get_colored_name(),
        '는 이따금 살며시 손을 쥐었다. ',
        coffee.sex,
        '의 가느다란 손가락이 위에서 아래로 ',
        you.get_colored_name(),
        '의 손끝을 쓸어내려 희미한 간지러움을 남겼다.',
      ]);
      await era.printAndWait([
        '그에 답하듯 ',
        you.get_colored_name(),
        '도 ',
        coffee.sex,
        '의 손을 꼭 쥐었다.',
      ]);
    } else {
      await era.printAndWait([
        '갑자기 부드러운 감촉이 느껴졌다. 눈을 돌리니 ',
        coffee.get_colored_name(),
        '가 ',
        you.get_colored_name(),
        '의 팔에 매달려 있었고, 살짝 부푼 가슴이 팔에 밀착되어 있었다.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '에게도 가슴이 조금은 있구나, 하고 ',
        you.get_colored_name(),
        '은(는) 무심코 생각했다.',
      ]);
      await coffee.say_and_wait([
        callname,
        ', 실례되는 생각을…… 하고 계신 건 아니죠……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   */
  async o_s_shopping(coffee, callname) {
    if (Math.random() < 0.5) {
      await coffee.say_and_wait([callname, ', 뭐 좀 드실래요?']);
    } else {
      await coffee.say_and_wait('인스턴트커피인가요…… 네…… 그건 조금……');
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {boolean} y_awake プレイヤーが起きているか
   * @param {boolean} c_awake マンハッタンカフェが起きているか
   */
  good_night_normal(coffee, you, callname, y_awake, c_awake) {
    if (y_awake && c_awake) {
      era.print([
        '바쁜 하루가 끝나고 ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '를 미호 생활관 입구까지 데려다주었다.',
      ]);
      coffee.say(['감사했어요, ', callname, '……저도, 친구도요.']);
    } else if (y_awake) {
      era.print([
        '갑자기 누군가 옷자락을 잡아당긴 것 같아 돌아보니 ',
        coffee.get_colored_name(),
        '가 조금 떨어진 휴게용 의자에서 잠들어 있었다. 쉬는 것을 방해하기가 안쓰러워 ',
        you.get_colored_name(),
        '은(는) 겉옷을 덮어 주고 ',
        coffee.sex,
        '를 두 팔로 안아 생활관에 데려다주었다.',
      ]);
    } else {
      coffee.say([
        callname,
        '……? 아…… 잠들었네요. 너무 무리했나 봐요…… 안녕히 주무세요, ',
        callname,
        '. 맥에게 먹히지 않을…… 좋은 꿈 꾸세요.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
   * @param {number} check 求愛判定値。大成功なら同意扱い
   */
  async good_night_sex(coffee, you, callname, check) {
    era.print([
      '오늘 일정이 끝나고 ',
      you.get_colored_name(),
      '은(는) 평소처럼 ',
      coffee.get_colored_name(),
      '를 ',
      coffee.sex,
      '의 생활관으로 데려다주려 했다. 막 움직이려는데 ',
      coffee.get_colored_name(),
      '가 소매를 붙잡았다.',
    ]);
    era.print([
      '돌아보니 마침 ',
      coffee.get_colored_name(),
      '의 촉촉한 눈동자와 눈이 마주쳤다.',
    ]);
    coffee.say([callname, ', 외박 신청은…… 이미 해 뒀어요. 그러니까……']);
    era.print([
      coffee.sex,
      '는 끝까지 말하지 않았지만 뜻은 분명했다. ',
      you.get_colored_name(),
      '은(는)——',
    ]);
    let ret;
    if (check === 2) {
      ret = 1;
    } else {
      era.printButton('승낙한다', 1);
      era.printButton('거절한다', 2);
      ret = await era.input();
    }
    if (ret === 1) {
      era.print([
        coffee.get_colored_name(),
        '를 다정하게 끌어안자 얼굴에 닿는 귀를 통해 ',
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '의 기쁨을 느낄 수 있었다.',
      ]);
      await coffee.say_and_wait([callname, '……오늘 밤은…… 잘 부탁드려요……']);
    } else {
      era.print('——미안해.');
      era.print([
        you.get_colored_name(),
        '의 얼굴에서 ',
        coffee.get_colored_name(),
        '는 그 뜻을 읽어 냈다.',
      ]);
      coffee.say([
        callname,
        ', 오늘은 너무 지치셨죠…… 오늘 밤은…… 푹 쉬세요……',
      ]);
      era.print([
        coffee.get_colored_name(),
        '의 얼굴에 떠오른 작은 실망을 ',
        you.get_colored_name(),
        '은(는) 놓치지 않았다. 다음에 만회하자……',
      ]);
    }
    return ret;
  },
  cl_fans: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, you, callname) => {
      await era.printAndWait('팬 감사제 당일. 이날만큼은 트레센 안에서……');
      await era.printAndWait('——딸랑딸랑.');
      await coffee.say_and_wait('……어서 오세요.');
      await era.printAndWait(
        '평소에는 없는, 차분한 분위기의 카페만이 문을 연다.',
      );
      await coffee.say_and_wait([
        callname,
        '……기다리셨죠. 특별히 로스팅한…… 맨하탄 특제 커피예요.',
      ]);
      await coffee.say_and_wait('한번…… 드셔 보세요……');
      await era.printAndWait('빤히——');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '의 뜨거운 시선이 느껴지는 듯했다.',
      ]);
      era.printButton('「……다른 손님은 응대하지 않아도 돼?」', 1);
      await era.input();
      await coffee.say_and_wait(
        '다른 손님은…… 오지 않아요. 이 고요함이야말로 이곳의 매력이니까요. 그리고……',
      );
      await coffee.say_and_wait(
        '아무도…… 여기를 찾지 못할 거예요. 입구로 들어와도…… 출구로 나가게 되니까……',
      );
      await era.printAndWait('그런 카페를 열어서 무슨 의미가 있나……');
      await era.printAndWait(
        '속으로 투덜거리면서도 눈앞의 커피를 찬찬히 음미했다.',
      );
      await era.printAndWait('——딸랑딸랑.');
      await coffee.say_and_wait('어라…… 다른 사람도……');
      await era.printAndWait('——딸랑딸랑딸랑딸랑……');
      era.printButton('「……한꺼번에 잔뜩 들어왔네!」', 1);
      await era.input();
      await you.say_as_passer_by_and_wait('남성', [
        '오, 여기다! 그 ',
        coffee.get_colored_name(),
        '가 운영하는 카페!',
      ]);
      await you.say_as_passer_by_and_wait('여성', [
        '와, 분위기 좋다~! 인테리어도 예뻐~! 저, ',
        coffee.sex,
        '의 팬이에요~',
      ]);
      await coffee.say_and_wait('이건……');
      era.printButton('「결국 다들 찾아냈네.」', 1);
      await era.input();
      await coffee.say_and_wait(
        '네…… 그런데 어떻게 된 걸까요……? 어떻게…… 찾은 걸까요?',
      );
      era.printButton('「그만큼 다들 열심히 찾았다는 거지.」', 1);
      await era.input();
      await era.printAndWait([
        coffee.get_colored_name(),
        '는 요즘 부쩍 눈에 띄고 있다. ',
        coffee.sex,
        '의 인기도 그에 따라 높아지고 있다.',
      ]);
      await era.printAndWait([
        coffee.sex,
        '의 유명세가 팬들을 불러 모은 것이겠지.',
      ]);
      await coffee.say_and_wait([
        '사람이 많기는 하지만…… 찾아와 주신 이상, 손님이니까요…… 열심히 할게요.',
      ]);
      await era.printAndWait([
        '몇 분 뒤, 눈코 뜰 새 없이 바빠진 ',
        coffee.get_colored_name(),
        '를 보고 손님이었던 ',
        you.get_colored_name(),
        '도 임시 점원을 맡게 되었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  /** @param {CharaTalk} coffee マンハッタンカフェ */
  async end_talk(coffee) {
    if (era.get('flag:变态行为') === 0) {
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          '카페를…… 열어 보시는 건 어떨까요……? 모든 게 끝나면…… 만나러 갈게요.',
        );
      } else if (era.get('cflag:32:育成用变量')?.plan_b > 0) {
        await coffee.say_and_wait(
          '우리의 약속을 무시하고…… 까다로운 상대에게 눈을 돌리셨죠…… 결말은…… 이렇게 됐네요……',
        );
      } else {
        await coffee.say_and_wait(
          '저에게서, 그들에게서 멀어지는 것…… 당신에게는…… 좋은 일일지도 몰라요……',
        );
      }
    } else {
      if (era.get('love:25') >= 75) {
        await coffee.say_and_wait(
          '횟수가…… 역시 너무 많네요…… 친구도 그렇게 생각해요……',
        );
      } else if (era.get('cflag:32:育成用变量')?.plan_b > 0) {
        await coffee.say_and_wait([
          '이렇게 약속에서 벗어나려는 건가요……? ……벗어날 수 없어요. 저도, ',
          coffee.sex,
          '도……',
        ]);
      } else {
        await coffee.say_and_wait(
          '앞으로도…… 부디 조심하세요. 그들은…… 아직 당신 곁에 있어요……',
        );
      }
    }
  },
  basement_end: (() => {
    const title = '새로운 「친구」';
    /**
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {PrintedSpan} callname マンハッタンカフェがプレイヤーを呼ぶときの呼称
     */
    const f = async (coffee, callname) => {
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 트레이너가 실종된 지 벌써 며칠이 지났다. 경찰이 학원 구석구석을 뒤졌지만, 여전히 아무런 단서도 찾지 못했다.',
      ]);
      await era.printAndWait([
        '담당 ',
        coffee.uma_sex_title,
        '인——',
        coffee.get_colored_name(),
        '가 유력한 용의자로 지목되었으나, 상세한 조사와 심문 끝에 결국 ',
        coffee.sex,
        '의 혐의는 풀리게 되었다.',
      ]);
      await era.printAndWait('현재 조사는 계속 진행 중이지만……');
      await era.printAndWait(
        '미호 생활관의 어느 방 안, 탁한 황색 눈동자가 창밖에서 분주히 움직이는 경찰들을 지켜보고 있다.',
      );
      await coffee.say_and_wait([
        {
          color: buff_colors[3],
          content: '——모두 당신을 찾고 있어요, ',
        },
        callname,
        {
          color: buff_colors[3],
          content: '. 하지만 그들은 당신을 찾을 수 없겠죠.',
        },
      ]);
      await coffee.say_and_wait([
        { color: buff_colors[3], content: '왜냐하면……' },
      ]);
      await coffee.say_and_wait([
        {
          color: buff_colors[3],
          content: '「……조금 이따가 위닝 라이브가 있어」',
        },
      ]);
      await coffee.say_and_wait([
        callname,
        {
          color: buff_colors[3],
          content: '은(는) 저에게만 보이는 『친구』니까요.',
        },
      ]);
      await era.printAndWait([
        '서서히 커튼이 쳐지고, 칠흑 같은 방 안에서 ',
        coffee.get_colored_name(),
        '는 등 뒤에 있던 흐릿한 영체를 품속에 끌어안았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
