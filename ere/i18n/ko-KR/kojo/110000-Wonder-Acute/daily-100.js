/**
 * @file ワンダーアキュート - 日常
 * @author 夕阳红艺术团小组长-赤红彗星红桃爵士Q先生
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {number} slavery 隷属タイプ。0=通常、1=相手を隷属、2=強姦済み/調教中、3=隷属されている（性奴/孕袋）
   */
  good_morning(acute, callname, slavery) {
    const buffer = [
      () =>
        acute.say(
          '어머나…… 열심히 일하고 있구나~ 갓 재운 설탕 토마토 좀 먹으련? 당분을 든든히 보충하면 오후 트레이닝도 힘이 날 거란다.',
        ),
      () =>
        acute.say([
          callname,
          '의 옷이 너무 얇구나…… 가을이 오면 조금 더 두껍게 입으렴. 얇게 입고 다니다 감기에 걸리면 정말 힘들단다.',
        ]),
      () =>
        acute.say([
          '트레이닝이 끝나면 단무지를 담그려고 한단다. 그러면 내일 ',
          callname,
          '이(가) 다른 착한 아이들에게도 나눠 주고, ',
          acute.couple_title,
          '과 친해질 수 있겠지?',
        ]),
      () =>
        acute.say([
          '어머나…… 기운이 좋아 보이는구나, ',
          callname,
          '. 무슨 좋은 일이라도 있었니? 후후후…… 팥밥을 준비해야겠구먼~',
        ]),
      () =>
        acute.say([
          '어머나…… 기운이 좋아 보이는구나, ',
          callname,
          '. 무슨 좋은 일이라도 있었니? 후후후…… 설탕 토마토를 준비해야겠구먼~',
        ]),
      () =>
        acute.say([
          '어머나…… 기운이 좋아 보이는구나, ',
          callname,
          '. 무슨 좋은 일이라도 있었니? 후후후…… 잉어 조림을 준비해야겠구먼~',
        ]),
      () =>
        acute.say([
          '어머나…… 기운이 좋아 보이는구나, ',
          callname,
          '. 무슨 좋은 일이라도 있었니? 후후후…… 단무지를 준비해야겠구먼~',
        ]),
    ];
    switch (slavery) {
      case 1:
        buffer.push(() => {
          acute.say(
            '실내든, 옥상이든, 역이든, 트레이닝장이든. 어디라도 괜찮단다?',
          );
          era.print([
            '다른 아이가 필요하다면 내가 도와줄게. 다른 아이들에게는 처음이라 조금 아플지도 모르지만, 부드럽게 대해 주면 본능적으로 ',
            callname,
            '의 매력을 알게 될 거란다.',
          ]);
        });
        break;
      case 2:
        buffer.push(() =>
          acute.say(
            '후후~ 이번에는 그렇게 쉽게 깔아 눕히게 두지 않을 거란다? 권법에는 제법 자신이 있거든.',
          ),
        );
        break;
      case 3:
        buffer.push(() =>
          acute.say([
            '오늘 먹을 단무지는 벌써 담가서 냉장고에 넣어 두었단다. 제때 챙겨 먹으렴? 또 영양 부족에 탈수까지 와서 쓰러지면 안 되니까, ',
            callname,
            '❤️～',
          ]),
        );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {number} slavery 隷属タイプ。0=通常、1=相手を隷属、2=強姦済み/調教中、3=隷属されている（性奴/孕袋）
   */
  select(acute, you, callname, slavery) {
    const buffer = [
      () =>
        acute.say([
          '어머나…… ',
          callname,
          '~ 다른 젊고 귀여운 아이들과는 이야기하지 않는 게니?',
        ]),
      () => {
        acute.say('좋은 아침이구나. 아침밥은 먹었니? 거르면 안 된단다.');
        acute.say(
          '아직이라면 낫토밥이나, 죽에 단무지를 곁들여 먹으렴~ 몸에 좋으니까.',
        );
      },
    ];
    switch (slavery) {
      case 1:
        buffer.push(() => {
          acute.say('후후후~ 오늘도 산책이니? 그럼 다른 아이들도 데려가겠니?');
          era.print([
            '알몸인 ',
            acute.get_colored_name(),
            '은(는) 조용히 바닥에 엎드려 있다가, ',
            you.get_colored_name(),
            '이(가) 다가오고 나서야 ',
            acute.sex,
            '는 귀를 좌우로 살랑이며 입에 문 목줄을 ',
            you.get_colored_name(),
            '의 손에 내밀었다.',
          ]);
        });
        break;
      case 2:
        buffer.push(() => {
          acute.say('으음……패자는 승자를 따르는 법. 자연의 섭리란다.');
          era.print([
            '그렇게 말하며 ',
            acute.get_colored_name(),
            '은(는) 태연하게 오늘 몫의 목줄을 스스로 찼다.',
          ]);
        });
        break;
      case 3:
        buffer.push(() => {
          acute.say(['어머어머……조금만 참으렴?', callname, '～']);
          era.print([
            you.get_colored_name(),
            '의 뜨거운 아랫배를 누르며 이따금 아래쪽을 더듬는 ',
            acute.get_colored_name(),
            '의 얼굴에 의미심장한 미소가 떠오른다.',
          ]);
        });
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   */
  async office_study(acute, you) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait('공부하려는 거니~? 으음…… 열심히 노력해야겠네~');
      await era.printAndWait([
        '거실에 앉아 「5년 레이스, 3년 모의고사」 문제집을 펼쳐 든 ',
        you.get_colored_name(),
        '이(가) ',
        acute.get_colored_name(),
        '에게 차근차근 문제를 설명해 주고 있다——',
      ]);
    } else {
      await acute.say_and_wait(
        '우아아아~ 공부라는 건 원래 이렇게 어려운 거였구먼……',
      );
      await era.printAndWait([
        '눈앞에 펼쳐진 「5년 레이스, 3년 모의고사」를 마주하고, 언제나 온화하던 ',
        acute.get_colored_name(),
        '가 난처한 표정을 짓고 있다.',
      ]);
      await era.printAndWait([
        '그 모습이 신선하기도 하고 귀엽기도 하여, ',
        you.get_colored_name(),
        '은(는) 자신도 모르게 풉 하고 쓴웃음을 흘렸다——',
      ]);
    }
  },
  /** @param {CharaTalk} acute ワンダーアキュート */
  async office_prepare(acute) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(
        '다음 레이스 말이니?…… 음~ 어떤 전술로 가 볼까.',
      );
    } else {
      await acute.say_and_wait(
        '어머? 다음 레이스가 열릴 경기장을 보러 가는 게니?',
      );
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} call_301 ワンダーアキュートの駿川たづな/ハープスターへの呼び方
   * @param {number} slavery 隷属タイプ。0=通常、1=相手を隷属、2=強姦済み/調教中、3=隷属されている（性奴/孕袋）
   */
  async talk(acute, you, callname, call_301, slavery) {
    const buffer = [];
    if (era.get('cflag:100:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:100:干劲')) {
        case -2:
          buffer.push(
            () => acute.say_and_wait('……후우…… 도통 힘이 들어가질 않는구나~'),
            () =>
              acute.say_and_wait(
                '으음…… 그런데, 이다음에는 뭘 하기로 했더라. 오늘은 정신이 멍해서 깜빡 잊었구먼.',
              ),
            () =>
              acute.say_and_wait(
                '후후…… 하마터면 잠들 뻔했구나. 이러면 안 되지. 코밑에 청량한 연고를 조금……',
              ),
            () =>
              acute.say_and_wait(
                '쿵…… 어머, 개구리를 밟을 뻔했구나 (넘어졌다)~',
              ),
            () =>
              acute.say_and_wait(
                '음…… 돌아가면 단무지도 담가야 하니까, 정신을 차려야지~',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              acute.say_and_wait('후우…… 꾸준함이 힘이 되는 법이지. 괜찮단다.'),
            () => acute.say_and_wait('에헤헤…… 조금 힘이 안 들어가는구나.'),
            () => acute.say_and_wait('후후후, 또래들처럼 열심히 해야지.'),
            () =>
              acute.say_and_wait(
                '심호흡——후우, 후우~ 계속 긴장을 놓지 말아야지.',
              ),
            () =>
              acute.say_and_wait(
                '눈앞에서 윙윙 날아다니는 작은 파리 때문에…… 집중이 흐트러졌구먼——',
              ),
          );
          break;
        case 0:
          buffer.push(
            () =>
              acute.say_and_wait('영차~ 벽에 등을 한 번 쿵. 기운이 났구나.'),
            () => acute.say_and_wait([callname, ', 트레이닝을 시작하자꾸나~']),
            () => acute.say_and_wait('가슴 운동은——벌써 끝냈단다~'),
            () =>
              acute.say_and_wait('오늘도 착실하게, 한 걸음씩 힘내 보자꾸나~'),
            () => acute.say_and_wait(['가자꾸나, ', callname, '.']),
          );
          break;
        case 1:
          buffer.push(
            () =>
              acute.say_and_wait([
                '그래~ 그러면, ',
                callname,
                ', 오늘은 어떤 트레이닝이니~?',
              ]),
            () =>
              acute.say_and_wait(
                '어떤 트레이닝이든, 나는 진지하게 임할 거란다.',
              ),
            () =>
              acute.say_and_wait(
                '염분을 보충하는 것도 중요하지. 단무지를 조금 먹으렴~',
              ),
            () =>
              acute.say_and_wait(
                '흐음, 흐음~ 스트레칭 준비 완료~ 이제부터 제대로 해 볼까.',
              ),
            () =>
              acute.say_and_wait(['어머~ ', callname, ', 방금 뭐라고 했니?']),
          );
          break;
        case 2:
          buffer.push(
            () => acute.say_and_wait('후후후~ 더 힘든 트레이닝도 괜찮단다.'),
            () => acute.say_and_wait('어머나…… 벌써 트레이닝 시간이구나~'),
            () =>
              acute.say_and_wait(
                '오늘은 날씨가 좋구나~ 해님을 보고 있자니 의욕이 샘솟는구먼~',
              ),
            () =>
              acute.say_and_wait(
                '어머나…… 코스가 보이니까 가슴이 근질근질하구나~',
              ),
            () =>
              acute.say_and_wait([
                '트레이닝이 끝나면 이불을 널고 싶구나~',
                callname,
                ', 나중에 함께해 주겠니?',
              ]),
          );
      }
    } else {
      buffer.push(() =>
        era.printAndWait([
          acute.get_colored_name(),
          '는 여느 때처럼 편안한 표정을 짓고 있다.',
        ]),
      );
    }
    switch (slavery) {
      case 1:
        buffer.push(async () => {
          await acute.say_and_wait(
            '어머나…… 오늘도 트레센 안을 산책하는 게니?',
          );
          await acute.say_and_wait(
            "알몸으로 목줄과 고삐에 매인 채 사람들이 있는 곳을 걷게 되니 가슴이 두근거려서……이런 게 젊은 사람들이 말하는 '로망'인 걸까.",
          );
          await acute.say_and_wait(
            '근성도 단련하고, 로망도 쾌감도 느낄 수 있다니. 이렇게 훌륭한 조교법을 널리 알리지 않으면 아깝겠구나.',
          );
          await acute.say_and_wait([
            call_301,
            ', 이사장님',
            acute.couple_title,
            '이라니, 금방 가라앉을 것 같구나.',
          ]);
        });
        break;
      case 2:
        buffer.push(async () => {
          await acute.say_and_wait(
            '어머…… 오늘은 햇볕이 참 좋구나. 밀린 집안일을 한꺼번에 해치우기 딱 좋겠어.',
          );
          await acute.say_and_wait(
            '빨래하고, 이불 널고, 단무지 담그고…… 후후, 오늘 할 일이 생각보다 많구먼.',
          );
          await acute.say_and_wait([
            '그러니까 ',
            callname,
            '. 오늘은 나를 덮치면 안 된단다?',
          ]);
          await acute.say_and_wait(
            '모두가 트레이닝하는 중에 중정의 고목 구멍으로 데려가는 것도, 점심시간에 옥상으로 데려가는 것도, 오후에 외출해서 역 골목으로 데려가는 것도 오늘은 안 된단다?',
          );
        });
        break;
      case 3:
        buffer.push(async () => {
          await acute.say_and_wait(
            '오늘은 몸 상태가 아주 좋으니, 밤에는 내가 너를 귀여워해 줄게.',
          );
          await acute.say_and_wait([
            '그러니까 ',
            callname,
            '. 몸 구석구석 깨끗이 씻고 기다리고 있으렴.',
          ]);
          await era.printAndWait(
            '평소와 같은 미소인데도 거절할 수 없는 박력이 느껴진다.',
          );
          await era.printAndWait([
            '오늘 밤, ',
            you.get_colored_name(),
            '은(는) 어떻게 되어 버리는 걸까……',
          ]);
        });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async office_gift(acute, callname) {
    const love = era.get('love:100');
    if (love >= 90) {
      await acute.say_and_wait(
        '어머나, 날 위해 준비해 준 선물이야? 그렇게 무리해서 신경 쓰지 않아도 괜찮은데 말이지~',
      );
      await acute.say_and_wait([
        '그나저나, ',
        callname,
        ', 전에 말했던 피임 도구……',
      ]);
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        '의 목소리가 순간 기어들어 가듯 낮아졌다.',
      ]);
      await acute.say_and_wait('그거…… 챙겨왔니?');
      await acute.say_and_wait('……어떤 걸 「챙겨왔냐」고?');
      await acute.say_and_wait('으으…………');
      await era.printAndWait([
        acute.get_colored_name(),
        '는 조금 삐친 듯이 입술을 내밀었다.',
      ]);
      await era.printAndWait([
        '늘 침착하고 동요하지 않던 ',
        acute.get_colored_name(),
        '도 이런 때만큼은 또래다운 수줍음을 띤 ',
        acute.teen_sex_title,
        '가 된다.',
      ]);
      await era.printAndWait([
        '저도 모르게 ',
        acute.sex,
        '를 놀리고 싶은 짓궂은 마음이——',
      ]);
      await acute.say_and_wait('……………………');
      await era.printAndWait([
        '푸른 하늘 아래에서, 부끄러워하는 ',
        acute.get_colored_name(),
        '와 함께 즐거운 시간을 보냈다.',
      ]);
    } else if (love >= 75) {
      await acute.say_and_wait(
        '어머나, 날 위해 준비해 준 선물이야? 그렇게 무리해서 신경 쓰지 않아도 괜찮은데 말이지~',
      );
      await acute.say_and_wait([
        '그나저나, ',
        callname,
        ', 피임 도구는 잘 챙겨 쓰고 있니?',
      ]);
      await acute.say_and_wait([
        '젊음이 넘치는 건 좋은 일이지만, 트레이너와 담당 ',
        acute.uma_sex_title,
        ' 사이에는 절도도 중요하단다~',
      ]);
      await acute.say_and_wait(
        '졸업하고 나면, 그때 진짜로 진검승부를 펼치도록 하렴~',
      );
      await acute.say_and_wait([
        '그때가 되면, 잊지 말고 내가 ',
        callname,
        '의 아이를 안아보게 해 줘야 한단다~',
      ]);
      await era.printAndWait([
        '……평온하고 온화한 ',
        acute.get_colored_name(),
        '와 함께, 출산과 육아에 관한 이야기를 나누었다.',
      ]);
      await era.printAndWait('…………얼굴이 화끈거려 견딜 수가 없다.');
    } else if (Math.random() > 0.5) {
      await acute.say_and_wait(
        '어머나, 날 위해 준비해 준 선물이야? 정말 고마워서 어쩌나~',
      );
      await acute.say_and_wait(['자, 여기 와서 앉으렴, ', callname, '.']);
      await acute.say_and_wait(
        '어디 가지 말고 가만히 기다리렴. 방금 막 절여둔 무를 가져올 테니 같이 먹자꾸나.',
      );
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        '와 함께 쌉싸름하면서도 아삭아삭한 무를 나누어 먹었다.',
      ]);
    } else {
      await acute.say_and_wait(
        '어머나, 날 위해 준비해 준 선물이야? 정말 고마워서 어쩌나~',
      );
      await acute.say_and_wait([
        '그러고 보니, 하야카와 씨가 그러더구나. ',
        acute.sex,
        ' 말로는 오늘 비가 올 것 같대.',
      ]);
      await acute.say_and_wait([callname, ', 우산 안 챙겨왔지?']);
      await acute.say_and_wait(
        '나한테 여분 우산이 있으니까~ 이거 가져가서 쓰렴.',
      );
      await era.printAndWait([
        '……',
        acute.get_colored_name(),
        '에게 얼떨결에 튼튼한 우산 하나를 받았다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async office_cook(acute, callname) {
    if (Math.random() > 0.5) {
      await era.printAndWait([
        '저녁 무렵, ',
        acute.get_colored_name(),
        '에게 맛있는 「단무지」를 만드는 비법을 가르쳐 달라고 청했다——',
      ]);
      await acute.say_and_wait(
        '무를 말리는 비법 말이니? 으음…… 굳이 비법이라고 한다면, 역시 좋은 항아리를 쓰는 게 첫걸음이란다……',
      );
      await era.printAndWait('………………');
      await era.printAndWait(
        '「절임」에 관한 여러 가지 지식을 배웠다.',
      );
    } else {
      await era.printAndWait([
        '',
        acute.get_colored_name(),
        '와 함께 요리를 하려고 했으나……',
      ]);
      await era.printAndWait(
        '「내가 할 테니 신경 쓰지 마렴」이라는 말에 밀려 부엌에서 쫓겨나고 말았다.',
      );
      await acute.say_and_wait([
        '도와주지 않아도 괜찮단다, ',
        callname,
        '. 너는 그냥 거실에 편하게 앉아있으렴. 밥은 금방 다 되니까~? 조금만 기다려 주겠니~',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait(
        '문득 눈앞의 그녀에게서 어머니의 모습이 겹쳐 보였다.',
      );
    }
  },
  /** @param {CharaTalk} acute ワンダーアキュート */
  async office_game(acute) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait(
        '게임 말이니…… 사실 난 기계를 어떻게 다루는지 잘 모르겠구나——',
      );
      await era.printAndWait([
        '화면과 컨트롤러를 끊임없이 번갈아 쳐다보던 ',
        acute.get_colored_name(),
        '가, 검지손가락 두 개를 꼿꼿이 세워 바닥에 놓인 패드를 콕콕 건드리고 있다.',
      ]);
      await era.printAndWait('……솔직히 말해서, 정말이지 무지하게 귀엽다.');
    } else {
      await acute.say_and_wait(
        '게임기—— 아, 예전에 고향 이웃집 아이한테 들은 적이 있단다. 그 배틀 시티 같은 걸 할 수 있는 그거구먼?',
      );
      await era.printAndWait('풉—— 하마터면 웃음이 터질 뻔했다.');
      await era.printAndWait(
        '배틀 시티라니…… 대체 몇 년 전 이야기를 하는 걸까?',
      );
    }
  },
  /** @param {CharaTalk} acute ワンダーアキュート */
  async s_a_tree_hollow(acute) {
    await era.printAndWait([
      '중정 안쪽의 고목 구멍에서는 레이스를 앞둔 ',
      acute.uma_sex_title,
      '들이 구멍을 향해 소원을 외치며 부담감을 털어놓는 모습을 자주 볼 수 있다.',
    ]);
    await era.printAndWait([
      '하지만 평소 느긋해 보이는 ',
      acute.get_colored_name(),
      '는 구멍 안에 앉아 있는 쪽을 더 좋아하는 듯하다.',
    ]);
    await acute.say_and_wait('음…… 여기는 정말 조용하구나~');
    await era.printAndWait([
      acute.get_colored_name(),
      '는 여전히 온화하게 말했지만, 얼굴 표정은 조금 달라진 듯했다……',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   */
  async s_a_dating(acute, you) {
    await era.printAndWait([
      '사람이 많이 오가는 중정에서 다른 ',
      acute.uma_sex_title,
      '들의 시선을 견디며 데이트하려면 상당한 각오가 필요할 듯하다……',
    ]);
    await acute.say_and_wait('어머…… 여기서 데이트하는 거니? 나는 괜찮단다~');
    await era.printAndWait([
      acute.get_colored_name(),
      '는 주위 ',
      acute.uma_sex_title,
      '들의 시선 따위 신경 쓰지 않는 듯했다……',
    ]);
    if (era.get('love:100') >= 90) {
      await era.printAndWait('………………');
      await era.printAndWait(
        '사람이 많이 오가는 중정 한쪽에서, 서로 사랑하는 두 사람이 끌어안는다——',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        '와 아주 좋은 한낮을 보냈다.',
      ]);
    } else {
      await era.printAndWait([
        '정작 한 걸음을 내딛지 못하는 건 ',
        you.get_colored_name(),
        ' 자신이다.',
      ]);
      await era.printAndWait([
        '——',
        acute.get_colored_name(),
        '의 기대 어린 눈빛이 느껴진다.',
      ]);
      await era.printAndWait(
        '이다음은 「사랑」이 더 깊어지고 나서 알아보자. (쓴웃음)',
      );
      await era.printAndWait('………………');
      await era.printAndWait(
        '참고로——사람이 많이 오가는 중정에서 이 한 걸음을 내딛으려면 강철 같은 의지가 필요하다——',
      );
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   */
  async s_r_lunch(acute, you) {
    await era.printAndWait([
      '점심시간, 옥상에서 ',
      acute.get_colored_name(),
      '와 함께 도시락을 먹고 있다.',
    ]);
    await era.printAndWait('아작, 아작, 아작——');
    if (Math.random() < 0.5) {
      await era.printAndWait(
        '늘 먹던 기분 좋은 아삭한 식감——',
      );
      await acute.say_and_wait(
        '후후~ 괜찮단다, 여기 아직 많이 있으니까 마음껏 먹으렴~',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        '의 미소를 보자 가슴이 행복으로 가득 찼다.',
      ]);
    } else {
      await era.printAndWait('평소보다 조금 더 짭조름한 맛——');
      await acute.say_and_wait([
        '요즘 날씨가 부쩍 더워졌잖니. 땀을 많이 흘리면 몸에 염분이 부족해진단다? 그래서 소금을 조금 더 쳤는데—— ',
        you.get_colored_name(),
        ', 입맛에 맞니?',
      ]);
      await era.printAndWait('말해 뭐하겠는가? 당연히 아주 마음에 든다.');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {number} jpy 釣れた魚の価値
   */
  async o_r_fishing(acute, you, jpy) {
    await era.printAndWait([
      acute.get_colored_name(),
      '와 강으로 낚시를 하러……',
    ]);
    if (Math.random() < 0.5) {
      await acute.say_and_wait('어머나, 날씨가 좋구나~');
      await era.printAndWait([
        '낚싯대를 든 ',
        acute.get_colored_name(),
        '는 떠가는 구름과 해를 향해 온화하게 미소 짓는다.',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        ' 주위에는 모든 걸 내려놓아도 될 것 같은 나른한 분위기가 감돈다.',
      ]);
      await era.printAndWait([
        '……',
        you.get_colored_name(),
        '과(와) ',
        acute.get_colored_name(),
        '는 낚시가 아니라 일광욕을 하러 온 것 같다.',
      ]);
    } else {
      await era.printAndWait([
        '——그렇기는 해도, ',
        acute.get_colored_name(),
        '는 낚싯대를 들지 않았다. 찌와 바늘이 달린 낚싯줄에 미끼를 끼우고, 손에 쥔 채 물로 던져 넣었다.',
      ]);
      await acute.say_and_wait(
        '영차…… 후우~ 이러면 됐구나~ 이제 물고기가 걸리기를 기다렸다가 한꺼번에 잡으면 되겠어~',
      );
      await era.printAndWait('……이렇게 해서 잡히긴 하나?');
      if (jpy > 0) {
        await era.printAndWait(
          '——그런 생각을 한 순간, 찌가 빙빙 돌며 가라앉기 시작했다.',
        );
      }
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async o_r_walking(acute, callname) {
    if (Math.random() < 0.5) {
      await acute.say_and_wait(
        '영차~ 바람이 왔네, 비가 왔네, 천둥님이 북을 두드리며 오셨네.',
      );
      await era.printAndWait([
        '기분 좋은 듯 ',
        acute.get_colored_name(),
        '는 강가에서 콧노래를 흥얼거린다.',
      ]);
      await era.printAndWait([
        '……어째서인지 ',
        acute.get_colored_name(),
        '의 콧노래를 듣고 있자니 졸음이 온다.',
      ]);
    } else {
      await acute.say_and_wait([
        callname,
        ', 강가 산책은 운치 있지만 물가에 너무 가까이 가면 안 된단다. 빠지면 큰일이니까.',
      ]);
      await era.printAndWait([
        '강가를 걷던 ',
        acute.get_colored_name(),
        '는 드물게 진지한 표정으로 주의를 준다.',
      ]);
      await era.printAndWait([
        '……그래도 ',
        acute.get_colored_name(),
        '는 즐거워 보인다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async o_s_arcade(acute, you, callname) {
    await era.printAndWait([acute.get_colored_name(), '와 오락실에……']);
    await acute.say_and_wait([
      '어머나~ ',
      callname,
      ', 괜찮다면 펀치 머신을 해 봐도 되겠니?',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      '는 오른팔을 풀고 상체를 살짝 숙인 채 펀치 머신에 온 신경을 집중한다. 늘 온화하던 ',
      acute.sex,
      '의 눈에 지금은 투지가 타오르고 있다.',
    ]);
    await era.printAndWait([
      '……',
      acute.get_colored_name(),
      '의 또 다른 모습을 본 것 같았다.',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {PrintedSpan} call_301 ワンダーアキュートの駿川たづな/ハープスターへの呼び方
   * @param {boolean} special_item 闘魂注入鞭を引いたか
   */
  async o_s_drawing(acute, you, callname, call_301, special_item) {
    await era.printAndWait([
      acute.get_colored_name(),
      '와 상점가의 경품 추첨에 참가했다……',
    ]);
    await acute.say_and_wait('싱싱한 무가 당첨되면 좋겠구나~');
    await era.printAndWait('빙글빙글빙글빙글……');
    await era.printAndWait('휙~');
    if (special_item) {
      await era.printAndWait('상점가 경품 【투혼 주입 채찍(S용)】을 얻었다!');
      await era.printAndWait(
        '야야야야! 누가 전 연령 대상 상점가 추첨에 어린이용도 아닌 물건을 넣은 거야!?',
      );
      await era.printAndWait('이런 건 성인 거리의 추첨기에나——');
      await acute.say_and_wait('어머나, 멋진 구절편이구나~');
      await era.printAndWait([
        '용도를 오해한 건가? 투혼 주입 채찍(S용)을 받아 든 ',
        acute.get_colored_name(),
        '의 눈이 반짝인다……',
      ]);
      await acute.say_and_wait([
        '음…… ',
        callname,
        '은(는) 이런 도구에 무척 익숙할 것 같구나——',
      ]);
      era.printButton(
        `「${call_301.content}에게 찍힐 만한 말은 하지 말아 주세요.」`,
        1,
      );
      await era.input();

      await acute.say_and_wait(['응? 어째서 ', call_301, '에게 찍히는 게니?']);
      era.printButton('「아, 그건……」', 1);
      await era.input();
      await era.printAndWait('………………');
      await era.printAndWait([
        '일단 「왜 ',
        call_301,
        '에게 찍히는지」는 설명하지 않고 얼버무렸다.',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        '에게 받은 투혼 주입 채찍(S용)은 우선 트레이닝실 창고의 거미줄 친 구석에 두었다.',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait([
        '참고로 ',
        acute.get_colored_name(),
        "이(가) 투혼 주입 채찍(S용)의 올바른 사용법을 안 뒤 '대활약'하는, 따갑고 화끈거리는 데다 분홍빛 엉덩이까지 등장하는 후일담은 또 다른 이야기——",
      ]);
    } else {
      const buffer = [
        async () => {
          await era.printAndWait('상점가 경품 【뽑아 쓰는 휴지】를 얻었다!');
          await acute.say_and_wait([
            '어머나~ ',
            callname,
            '이(가) 밤에 쓰면 되겠구나~',
          ]);
          await you.say_and_wait('………………');
          await era.printAndWait('아니, 아니! 안 쓰거든!?');
        },
        async () => {
          await era.printAndWait('상점가 경품 【일반 휴지】를 얻었다!');
          await acute.say_and_wait(
            '일반 휴지라…… 음식 밑에 깔아 두면 되겠구나~',
          );
          await era.printAndWait([
            '가장 낮은 등수의 경품인데도 ',
            acute.get_colored_name(),
            '는 기뻐하며 점원에게 휴지를 받아 들었다——',
          ]);
        },
        async () => {
          await era.printAndWait('상점가 경품 【당근】을 얻었다!');
          await acute.say_and_wait('어머? 추첨에서 정말 무가 나오는구나~');
          await era.printAndWait([
            acute.get_colored_name(),
            '의 얼굴에 기쁨이 번진다——',
          ]);
        },
        async () => {
          await era.printAndWait('상점가 경품 【당근 한 바구니】를 얻었다!');
          await acute.say_and_wait(
            '하나, 둘, 셋…… 어머나, 이만큼이면 일주일 치 단무지를 담글 수 있겠구나.',
          );
          await acute.say_and_wait([
            '단무지가 다 되면, ',
            callname,
            ', 트레센의 모두에게 나눠 주지 않으련?',
          ]);
          await era.printAndWait([
            acute.get_colored_name(),
            '는 돌아보았다. 온화한 미소에 부처님의 후광이 비쳤다——',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} acute ワンダーアキュート */
  async o_s_ktv(acute) {
    if (Math.random() > 0.5) {
      await acute.say_and_wait('다가오는~ 제왕이여~ 바빌론의 군단~');
      await era.printAndWait(
        '시대의 향기가 느껴지는 노래다. 어느 특촬물의 주제가일까.',
      );
      await era.printAndWait([
        '눈을 감으면 오토바이에 올라탄 ',
        acute.get_colored_name(),
        '가 무언가를 쫓고 있다——',
      ]);
    } else {
      await acute.say_and_wait(
        '노리는 것은~ 어둠의 그림자~ 세 여신의 평화를 지킨다~',
      );
      await era.printAndWait(
        '소년의 마음을 간질이는 노래다. 옆에서 단무지를 맛보기에 딱 좋다.',
      );
      await era.printAndWait([
        '눈을 감으면 ',
        acute.get_colored_name(),
        '가 허리에 손을 얹고 난간에 선 모습이 보인다——',
      ]);
      await era.printAndWait('……잠깐! 정말 올라가지 마!');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async o_s_movie(acute, callname) {
    await era.printAndWait([acute.get_colored_name(), '와 영화를 보러……']);
    if (Math.random() < 0.5) {
      await era.printAndWait([
        '선천적으로 몸이 불편한 ',
        acute.uma_sex_title,
        '가 스스로를 단련하고 패배해도 다시 일어서는 분투 끝에 세 여신의 가호를 받아, 여러 레이스에서 기적을 일으키는 이야기——',
      ]);
      await acute.say_and_wait([
        '음…… 가슴이 뜨거워지는 이야기구나, ',
        callname,
        '——돌아가면 추가 트레이닝을 좀 더 해도 되겠니?',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        '의 피가 끓어오른 모양이다……',
      ]);
    } else {
      await era.printAndWait([
        '서른 살의 ',
        acute.uma_sex_title,
        '가 젊은 시절 세상을 떠난 트레이너 반려자와 약속했던 세계 일주를 이루기 위해, 길에서 만난 간사이의 어린 ',
        acute.uma_sex_title,
        '와 세계를 누비는 전설——',
      ]);
      await acute.say_and_wait(
        '음…… 낭만적인 이야기구나~ 나도 할 수 있다면 이런 여행을 해 보고 싶어——',
      );
      await era.printAndWait([
        '그 말 뒤로 영화가 끝날 때까지, ',
        acute.get_colored_name(),
        '의 시선이 계속 느껴졌다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {number} dice 祈祷の出目。0-1の小数で、小さいほど良い
   */
  async o_c_pray(acute, you, callname, dice) {
    await acute.say_and_wait('어머나…… 신사에 참배하러 가는 게니?');
    await era.printAndWait([
      '쉬는 날 전날, ',
      acute.get_colored_name(),
      '에게 함께 신사에 참배하러 가자고 제안했다.',
    ]);
    await acute.say_and_wait(
      '그렇구나…… 신사에 간다면~ 준비를 단단히 해야겠어……',
    );
    await era.printAndWait([
      '예상대로, 어딘가 나이 지긋한 구석이 있는 ',
      acute.get_colored_name(),
      '는 「참배」 같은 행사에 무척 열의를 보였다.',
    ]);
    await acute.say_and_wait('다만…… 신사에 가려면 일찍 나서야 하니까……');
    await acute.say_and_wait('세뱃돈과 향도 미리 준비하고……');
    await acute.say_and_wait(
      '공물도…… 어머나, 오늘 밤에는 단무지를 담가야겠구나……',
    );
    await acute.say_and_wait('……조금 지나치게 의욕적인 걸까.');
    await acute.say_and_wait(
      '신사 참배는 이를수록 좋단다. 이를수록 정성도 깊은 거니까. 그러니 내일은 두 시간 일찍 일어나서 준비를——',
    );
    await acute.say_and_wait([
      '아, ',
      callname,
      '은(는) 그렇게 일찍 일어나지 않아도 된단다? 준비는 내가 할 테니까. 젊은 사람은 잠을 더 자야지~ 출발할 때 깨우러 가마~',
    ]);
    await era.printAndWait([
      '어쩐지 ',
      you.sex_code === 1 ? '손자' : '손녀',
      ' 취급을 받는 것 같다……',
    ]);
    await era.printAndWait([
      '아니, 애초에 ',
      acute.get_colored_name(),
      '도 젊잖아.',
    ]);
    if (dice < 0.5) {
      await acute.say_and_wait('어머나, 대길이니? 좋은 일이 생기겠구나~');
      await era.printAndWait([
        '대길이 적힌 운세 쪽지를 쥔 ',
        acute.get_colored_name(),
        '는 온화하게 미소 짓는다.',
      ]);
      await era.printAndWait(
        '당연하겠지. 일부러 두 시간이나 일찍 일어나 참배를 준비했으니까.',
      );
      await acute.say_and_wait(
        '하늘은 부지런한 사람에게 보답한다——바로 그런 뜻이란다.',
      );
      await acute.say_and_wait(['왜 그러니, ', callname, '? 기뻐 보이는구나.']);
      await era.printAndWait('……얼굴에 떠오른 미소를 들켰나.');
    } else {
      await acute.say_and_wait(
        '대흉이라…… 당분간 착한 일을 더 많이 해서 공덕을 쌓아야겠구나~',
      );
      await era.printAndWait([
        '대흉이 적힌 운세 쪽지를 쥔 ',
        acute.get_colored_name(),
        '는 여느 때처럼 온화하게 말한다. 대흉도 ',
        acute.sex,
        '의 마음을 흔들지는 못한 모양이다.',
      ]);
      await era.printAndWait('……그렇기는 해도, 영 화가 난다.');
      await era.printAndWait('두 시간이나 일찍 일어나 참배를 준비했는데……');
      await acute.say_and_wait([
        '왜 그러니, ',
        callname,
        '? 기분이 좋지 않은 모양이구나.',
      ]);
      await era.printAndWait('……얼굴에 드러난 짜증을 들켰나.');
    }
    await era.printAndWait('일단 적당한 이유를 대서 얼버무리자.');
    await era.printAndWait([
      '어쨌든 ',
      acute.get_colored_name(),
      '에게 이런 어린애 같은 모습을 보일 수는 없다……',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async o_s_restaurant(acute, you, callname) {
    if (Math.random() < 0.5) {
      await era.printAndWait([
        acute.get_colored_name(),
        '와 역 앞에서 김이 모락모락 나는 유부를 맛보았다……',
      ]);
      await acute.say_and_wait('후우, 후우…… 앙~ 냠~ 냠냠❤️~');
      await era.printAndWait('뜨거운 유부를 불어 가며 조금씩 베어 문다.');
      await era.printAndWait([
        '김이 ',
        acute.get_colored_name(),
        '의 입에서 천천히 흩어지고, 혀와 목이 살짝 움직인다.',
      ]);
      await acute.say_and_wait('꿀꺽~ 음…… 하아——');
      await era.printAndWait([
        acute.get_colored_name(),
        '의 맞은편에 앉아 있자니, 예의를 지키려고 일부러 작게 삼킨 소리까지 들린다……',
      ]);
      await acute.say_and_wait('……？');
      await era.printAndWait([
        '아, 큰일이다.',
        acute.get_colored_name(),
        '의 입가와 혀끝, 피어오르는 김에 너무 넋을 놓고 있었더니 ',
        acute.get_colored_name(),
        '에게 들켰다……',
      ]);
      await acute.say_and_wait('…………');
      await era.printAndWait([
        acute.sex,
        '는 ',
        you.get_colored_name(),
        '의 그릇에 그대로 남아 있는 유부를 보더니, 못마땅한 듯 미간을 살짝 찌푸렸다.',
      ]);
      await era.printAndWait(
        '먹는 중이라 소리를 내지는 못하고, 뺨을 부풀려 작게 항의한다.',
      );
      await era.printAndWait([
        '그러고는 그릇을 들지 않은 왼손을 뻗어, ',
        you.get_colored_name(),
        '의 다소 무례한 시선을 피하듯 김이 피어오르는 입술 앞을 가렸다.',
      ]);
      await era.printAndWait([
        '그렇게 미간을 살짝 찌푸린 ',
        acute.get_colored_name(),
        '는 김이 피어오르는 얼굴의 절반을 손으로 가렸다——',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait([
        acute.get_colored_name(),
        '는 어쩌면 그쪽 방면의 천재일지도 모른다.',
      ]);
    } else {
      await era.printAndWait([
        acute.get_colored_name(),
        '와 역 앞 편의점에서 특가 단무지를 맛보았다……',
      ]);
      era.printButton('「아삭——」', 1);
      await era.input();
      await era.printAndWait(
        '음, 처음 씹히는 느낌은 괜찮다. 편의점 단무지치고는 상당히 선전하고 있다……',
      );
      era.printButton('「아삭아삭——」', 1);
      await era.input();
      await era.printAndWait([
        '하지만 천천히 맛을 음미해 보니, 역시 ',
        acute.get_colored_name(),
        '의 단무지에는 한참 못 미친다……',
      ]);
      await era.printAndWait(
        '너무 오래 두어 수분이 부족한 탓에 좀 딱딱하게 씹히는 것도 그렇고, ',
      );
      await era.printAndWait(
        '유통기한을 늘리려고 그랬는지, 대중이 좋아하는 진한 맛을 노렸는지 지나치게 짜게 절인 것도……',
      );
      await era.printAndWait('아삭아삭아삭——');
      await era.printAndWait('씹을수록 짠맛이 입안에 퍼진다.');
      await era.printAndWait(
        '원래도 수분이 적은 단무지가 이 짠맛 속에서, 조금이나마 나온 침마저 빼앗아 간다……',
      );
      await acute.say_and_wait([callname, ', 물은 여기 있단다~']);
      await era.printAndWait([
        acute.get_colored_name(),
        '가 보온병 뚜껑에 따라 준 미지근한 물을 받아 단숨에 마신다.',
      ]);
      era.printButton('「꿀꺽, 꿀꺽——」', 1);
      await era.input();
      await era.printAndWait([
        '하아……',
        acute.get_colored_name(),
        ' 덕분에 살았다.',
      ]);
      await era.printAndWait(
        '젠장, 특가 단무지로 달콤한 페트병 음료를 팔아먹으려는 편의점의 음모에 하마터면 넘어갈 뻔했다!',
      );
      await era.printAndWait('단무지는 저런 음식이 아니다.');
      await era.printAndWait(
        '조금 짭짤해도, 먹고 나서 지나치게 목이 마르지 않아야 한다.',
      );
      await era.printAndWait(
        '침샘을 자극하면서도 몸의 수분을 빼앗지 않아야 한다.',
      );
      await era.printAndWait(
        '아삭하고 짭짤하면서도 먹기 편해야 한다. 트레이닝 뒤 많은 물을 마실 수 없을 때 적당히 침이 나오게 해 갈증을 덜어 주는, 맛있고 영양가 있으며 트레이닝에도 도움이 되는 음식이어야 한다!',
      );
      await era.printAndWait(
        '맛있고 영양가 있는 단무지를 이런 음모 가득한 공산품으로 만들다니…… 편의점, 용서 못 해——',
      );
      await acute.say_and_wait([
        '저기, ',
        callname,
        '. 돌아가면 내 방에서 단무지 좀 먹고 가지 않으련?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 속마음을 꿰뚫어 본 듯, 곁에 있던 ',
        acute.get_colored_name(),
        '가 서두르지 않고 딱 알맞은 순간에 ',
        you.get_colored_name(),
        '의 독백 사이로 끼어들었다.',
      ]);
      era.printButton('「하! 두말하면 잔소리지!!」', 1);
      await era.input();
      await era.printAndWait([
        acute.get_colored_name(),
        '의 초대를 호쾌하게 받아들여, 그날 밤에는 ',
        acute.get_colored_name(),
        '의 방에서 배불리 먹었다.',
      ]);
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   * @param {boolean} do_sex 性愛するか
   */
  async o_s_dating(acute, you, callname, do_sex) {
    await era.printAndWait([
      '쉬는 날에 ',
      acute.get_colored_name(),
      '과(와) 역에서 데이트하기로 약속했다——',
    ]);
    await acute.say_and_wait('음…… 요즘 허리가 조금 아프구나~');
    await era.printAndWait([
      '아무 예고도 없이 ',
      acute.get_colored_name(),
      '이(가) 갑자기 그렇게 말했다.',
    ]);
    if (do_sex) {
      await acute.say_and_wait([callname, ', 오늘 밤에 좀 풀어 주겠니?']);
      await era.printAndWait([
        '그렇게 말하며 ',
        acute.get_colored_name(),
        '은(는) 길거리에서 거리낌 없이 ',
        you.get_colored_name(),
        '의 허리를 두드리고 의미심장한 미소를 지었다.',
      ]);
      await era.printAndWait('………………');
      if (era.get('item:斗魂注入鞭（S用）') > 0) {
        await acute.say_and_wait([
          '저기, ',
          callname,
          '. 오늘 밤에는……【그거】를 써도 되겠니?',
        ]);
        await era.printAndWait([
          '분홍빛 입술에 투명한 물기가 반짝이고, ',
          acute.teen_sex_title,
          '라는 맹수가 ',
          acute.sex,
          '의 송곳니를 드러냈다.',
        ]);
        await era.printAndWait([
          '눈치를 채고 ',
          acute.get_colored_name(),
          '을(를) 역의 인적 드문 구석으로 몰래 데려간다……',
        ]);
        await era.printAndWait('맹수를 길들이는 투혼 주입 채찍을 꺼냈다——');
        await acute.say_and_wait('…………');
        await acute.say_and_wait('！');
        await acute.say_and_wait('————');
        await acute.say_and_wait('❤️～');
      } else {
        await era.printAndWait('말을 마치기도 전에 이미 끌어안겨 있었다.');
        await era.printAndWait([
          acute.teen_sex_title,
          '라는 맹수에게 세게 안겨, 빠져나갈 틈이 없다.',
        ]);
        await era.printAndWait(
          "예부터 '짐승'을 길들이는 일 가운데 먹이를 주는 일은 지극히 위험했다.",
        );
        await era.printAndWait(
          '상대를 만족시키지 못하면, 먹이를 주던 쪽이 맹수의 먹이가 된다——',
        );
        await acute.say_and_wait('❤️——————');
        await era.printAndWait('깊은 눈동자에서 분홍빛이 흩어진다.');
        await era.printAndWait([
          '그것이 ',
          acute.get_colored_actual_name(),
          "라는 맹수의 '포식' 신호다.",
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('오늘 밤은 생사를 가르는 결투가 될 것 같다.');
      }
    } else {
      await era.printAndWait([
        '마사지를 해 주겠다고 제안했지만 ',
        acute.get_colored_name(),
        '에게 거절당했다……',
      ]);
      await acute.say_and_wait(
        '그래……부드러운 마사지보다는 좀 더 자극적인 치료가 좋겠구나——',
      );
      await era.printAndWait([
        acute.get_colored_name(),
        '은(는) 평소처럼 나긋나긋하게 말하며 역 구석의 SM 용품점으로 시선을 돌린다.',
      ]);
      await era.printAndWait('………………');
      await era.printAndWait('기분 탓이겠지.');
    }
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async o_s_shopping(acute, you, callname) {
    await era.printAndWait([
      acute.get_colored_name(),
      '와 역 앞 쇼핑몰을 둘러보았다……',
    ]);
    await acute.say_and_wait('단무지~ 단무지~');
    await era.printAndWait([
      '경쾌하게 콧노래를 흥얼거리며 ',
      acute.get_colored_name(),
      '는 할인 코너를 믿기 어려울 만큼 빠르게 누비고, 방금 가격표가 내려간 물건들을 바구니에 던져 넣는다.',
    ]);
    await era.printAndWait(
      '「이거 트레이닝에 써먹을 수 있겠는데」 하고 감탄하기도 전에 바구니는 이미 가득 찼다.',
    );
    era.drawLine();
    const buffer = [];
    buffer.push(
      async () => {
        await era.printAndWait('바구니에는 할인 식재료가 산처럼 쌓여 있다.');
        await era.printAndWait(
          '아무거나 하나 집어 보니 초록색 「-60％」 꼬리표가 눈에 띈다.',
        );
        await acute.say_and_wait([
          '아하하, 마이너스 99％인 당근이구나~ 오늘 밤은 ',
          callname,
          '이(가) 먹을 복이 있겠어~',
        ]);
        await era.printAndWait(
          '말이 채 끝나기도 전에 초록색 꼬리표가 달린 식재료가 또 바구니로 들어간다——',
        );
      },
      async () => {
        await era.printAndWait('바구니에는 운동용 식품이 산처럼 쌓여 있다.');
        await era.printAndWait(
          '아무거나 하나 집어 보니, 「하루 두 번으로 지방 연소! 한 달 만에 여덟 개의 복근!」 같은 과장 광고가 인쇄되어 있다.',
        );
        await era.printAndWait([
          '……머릿속에 복근이 여덟 개나 있는 ',
          acute.get_colored_name(),
          '의 모습이 떠오르기 시작한다.',
        ]);
        await acute.say_and_wait([
          '음…… 역시 ',
          callname,
          '은(는) 근육량을 조금 더 늘려야겠구나~',
        ]);
        await era.printAndWait([
          '——뭐야, ',
          you.get_colored_name(),
          '을(를) 위해 사는 거였나.',
        ]);
        await era.printAndWait(
          '머릿속의 차마 못 볼 그림을 황급히 지우고 안도의 한숨을 내쉰다.',
        );
        await era.printAndWait('………………');
        await era.printAndWait([
          '계산할 때는 ',
          acute.get_colored_name(),
          '보다 먼저 나섰다.',
        ]);
        await era.printAndWait([
          '바구니에 든 물건은 대부분 자신을 위한 것이다.',
          acute.get_colored_name(),
          '에게 계산하게 할 수는 없다.',
        ]);
        await era.printAndWait(
          '가족에게 받은 검은 지갑을 꺼내고, 전에 실수로 찢어진 구멍을 왼손으로 가린다. 계산대의 숫자를 긴장하며 지켜보면서 지갑에 얼마 남지 않은 고액권을 아쉬운 마음으로 센다——',
        );
        await acute.say_and_wait([
          '복근이 여덟 개나 있는 ',
          callname,
          '……에헤헤~',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('방금 묘한 말을 들은 것 같다.');
        await era.printAndWait([
          '돌아보니——',
          acute.get_colored_name(),
          '은(는) 변함없이 다정하게 이쪽을 바라보고 있다. 온화한 미소는 여전한데, 입가에는 어째서인지 물기 자국이 남아 있다.',
        ]);
        await era.printAndWait('………………');
        await era.printAndWait('기분 탓이겠지.');
      },
    );
    if (era.get('love:100') >= 75) {
      buffer.push(async () => {
        await era.printAndWait('부추, 간, 달걀……');
        await era.printAndWait('간, 달걀, 부추……');
        await era.printAndWait('달걀, 부추, 간……');
        await era.printAndWait('반값 부추, 신선한 간, 맑게 풀어 놓은 달걀……');
        await era.printAndWait('……전부 「신장」을 보하는 식재료잖아.');
        await era.printAndWait([
          '멈춰 설 틈도 없이 조심스레 ',
          acute.get_colored_name(),
          '을(를) 바라본다. 돌아온 것은 ',
          acute.get_colored_name(),
          '의 조금 의미심장한 미소——',
        ]);
        await era.printAndWait('…………');
        await era.printAndWait('오늘 밤은 길어질 것 같다——');
      });
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async possessive(acute, callname) {
    await acute.print_and_wait(['또 고목 구멍으로 왔다……']);
    await acute.print_and_wait([callname, '의 몸에 흔적을 남기고 싶다.']);
    await acute.print_and_wait(['입맞춤만이 아니라, 다른 곳에도.']);
    await acute.print_and_wait([
      '귓불, 뺨, 턱, 목, 가슴……모든 곳에 내 흔적을 남기고 싶다.',
    ]);
    await acute.print_and_wait([
      '이런 게 소유욕이라는 걸까. 솔직히 잘 모르겠다.',
    ]);
    await acute.print_and_wait([
      callname,
      '의 입술에 다가가고 싶다. 코와 입술에서 새는 숨결을 맞대고 싶다. 왼쪽 가슴이 두근거려, 무엇 하나 견디기 힘들다.',
    ]);
    await acute.print_and_wait(['연인끼리의 입맞춤……위험한 일이구나.']);
    await acute.print_and_wait([
      '정말 입을 맞췄다가, 몸이 ',
      callname,
      '에게 의존하게 된다면, 그때……나는 어떻게 되는 걸까.',
    ]);
    await acute.print_and_wait([callname, '……책임져 주겠니.']);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} tama タマモクロス
   * @param {CharaTalk} you プレイヤー
   */
  async kiss(acute, tama, you) {
    tama.name = '어느 간사이의 ' + acute.uma_sex_title;
    await era.printAndWait([
      '사람이 많이 오가는 중정에서 다른 ',
      acute.uma_sex_title,
      '들의 시선을 견디며 데이트하려면 상당한 각오가 필요하다……',
    ]);
    await acute.say_and_wait('어머…… 여기서 데이트하는 거니? 나는 괜찮단다~');
    await era.printAndWait([
      acute.get_colored_name(),
      '은(는) 주위 ',
      acute.uma_sex_title,
      '들의 시선 따위 신경 쓰지 않는 듯했다……',
    ]);
    await era.printAndWait([
      '——',
      acute.get_colored_name(),
      '의 기대 어린 눈빛이 느껴진다.',
    ]);
    await era.printAndWait('………………');
    await era.printAndWait(
      '사람이 많이 오가는 중정에서, 사랑하는 두 사람이 서로를 원한다.',
    );
    await era.printAndWait(
      '이제 주위의 시선은 아랑곳하지 않고, 뜨겁게 타액을 주고받으며 서로의 사랑을 맹세한다.',
    );
    await acute.say_and_wait('……❤️');
    await era.printAndWait([
      '작은 두 손이 ',
      you.get_colored_name(),
      '의 머리를 감싸고, 분홍빛으로 빛나는 시선은 밤낮으로 ',
      you.get_colored_name(),
      '만을 바라본다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '도 가장 뜨거운 사랑과 가장 격렬한 입맞춤으로 화답한다——밤낮으로 서로를 힘껏 끌어안으며——',
    ]);
    await era.printAndWait('………………');
    await you.say_as_passer_by_and_wait(
      '타임라인 이용자',
      '저 두 사람, 얼마나 계속 저러고 있는 거야?',
    );
    await you.say_as_passer_by_and_wait(
      '우마 계정 이용자',
      '모르겠어…… 벌써 두 시간은 지났지 않아?',
    );
    await tama.say_and_wait(
      '야, 이 바보들아. 하늘도 어두워지는데 아직 여기서 뽀뽀하고 있나. 뭐고, 진짜 중정에서 파티라도 할 셈이가?',
    );
    await era.printAndWait('………………');
    await era.printAndWait('낮에도 밤에도, 봄 여름 가을 겨울에도.');
    await era.printAndWait([
      '앞으로의 인생은 더 이상 ',
      acute.sex,
      '와 떨어지지 않는다.',
    ]);
  },
  /**
   * @param {CharaTalk} acute ワンダーアキュート
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
   */
  async boxing(acute, you, callname) {
    await era.printAndWait([acute.get_colored_name(), '과(와) 오락실에……']);
    await acute.say_and_wait([
      '어머나~ ',
      callname,
      ', 괜찮다면 펀치 머신을 해 봐도 되겠니?',
    ]);
    await era.printAndWait([
      acute.get_colored_name(),
      '은(는) 오른팔을 풀고 상체를 살짝 숙인 채 펀치 머신에 온 신경을 집중한다. 늘 온화하던 ',
      acute.sex,
      '의 눈에 지금은 투지가 타오르고 있다.',
    ]);
    await era.printAndWait([
      '……뒤에서 몸을 숙이며 올라간 ',
      acute.get_colored_name(),
      '의 풍성한 엉덩이를 보자 마음속에 사악한 생각이 솟는다.',
    ]);
    await era.printAndWait([
      '펀치 머신에 집중하고 있는 ',
      acute.get_colored_name(),
      '에게 살며시 다가가, ',
      acute.sex,
      '가 주먹을 휘두르려고 엉덩이를 내민 틈에 죄 많은 오른손에 조용히 힘을 모은다——',
    ]);
    era.printButton('「찰싹!」', 1);
    await era.input();
    await acute.say_and_wait('꺄앗~!?');
    await era.printAndWait('부끄러움에 어딘가 흥분까지 섞인 떨리는 목소리.');
    await era.printAndWait([
      '평소라면 나이 지긋한 ',
      acute.get_colored_name(),
      '이(가) 이렇게 어린 ',
      acute.child_sex_title,
      ' 같은 목소리를 낼 줄은 상상도 못 했을 것이다.',
    ]);
    await era.printAndWait(
      '풍성한 엉덩이의 탄력 있는 감촉이 아직도 생생해 잊히지 않는다. 만족감과 죄책감이 뒤섞인 가학심에 가슴의 고동이 가라앉지 않는다.',
    );
    await era.printAndWait([
      '하지만 아직 가슴에 감동이 남아 있을 때, ',
      acute.get_colored_name(),
      '이(가) 준비하던 주먹이 소리 없이 뻗어 나갔다.',
    ]);
    await era.printAndWait('쾅!!!!!!!');
    await era.printAndWait('엉덩이를 때렸을 때보다 훨씬 요란한 소리.');
    await era.printAndWait(
      '기계의 팔은 휘고 액정은 깨졌으며, 펀치 머신에서 탄내 나는 흰 연기가 피어올랐다.',
    );
    await era.printAndWait('……어라?');
    await era.printAndWait([
      acute.get_colored_name(),
      '의 주먹이 이렇게 강했나.',
    ]);
    await era.printAndWait(
      '전에 오락실에 왔을 때는 순위도 트레센 학원에서 중상위 정도로, 운동부 출신 인간도 도달할 만한 수준이지 않았나.',
    );
    await era.printAndWait([
      '한 방에 펀치 머신을 부순다고? 어, 설마 ',
      acute.get_colored_name(),
      '은(는) 지금까지 힘을 숨기고 있었던……',
    ]);
    await acute.say_and_wait('으으~ 으음——!');
    await era.printAndWait([
      '한 손으로 자신의 풍성한 엉덩이를 감싼 ',
      acute.get_colored_name(),
      '이(가) 천천히 돌아본다. 눈물이 맺혔지만 울지는 않고, 부끄러움인지 불쾌함인지 한마디로 표현하기 어려운 기색이 뒤섞여 있다.',
    ]);
    await era.printAndWait([
      acute.sex,
      '는 입술을 삐죽 내밀고 작게 숨을 불어 볼을 부풀린다.',
      acute.sex,
      '가 가장 생기 있고 또래답게 귀여워 보이는 순간이다.',
    ]);
    await era.printAndWait(
      '——천천히 주먹을 쥐고 치켜드는 오른손만 없었다면 말이다.',
    );
    era.drawLine();
    await era.printAndWait([
      '아무튼 일이 끝난 뒤에는 잔소리를 듣는 것으로, 어떻게든 ',
      acute.get_colored_name(),
      '에게 용서를 받았다.',
    ]);
    await era.printAndWait([
      '다만 그날부터 트레이닝 중에 ',
      acute.get_colored_name(),
      '이(가) 가끔 ',
      you.get_colored_name(),
      '에게 묘한 시선을 보내는 것만 같다.',
    ]);
    await era.printAndWait(['……', you.get_colored_name(), '의 기분 탓이겠지.']);
  },
  basement_end: (() => {
    const title = '애정의 감옥';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait('도망칠 문은 봉쇄되었다.');
      await era.printAndWait(
        '자물쇠로 잠근 게 아니다. 순수한 완력으로 막았다.',
      );
      await era.printAndWait(
        '손잡이를 중심으로 문 전체가 안쪽으로 뒤틀려, 소용돌이처럼 변형되어 있다.',
      );
      await era.printAndWait(
        '더 무서운 것은 문이 떨어져 나가지 않았다는 점이다——문과 벽의 약한 연결부는 아직 멀쩡하고, 문과 함께 뒤틀린 것은 벽면 자체였다.',
      );
      await era.printAndWait(
        '그렇다…… 철근으로 형태를 잡은 콘크리트 벽이 반죽처럼 부드럽게 변형되어 있다!',
      );
      await era.printAndWait(
        '콘크리트를 부수기만 해서는 이렇게 할 수 없다. 굳은 콘크리트 구조를 망가뜨리지 않고, 어떤 힘으로 벽에 끈질긴 탄성을 주어 철근째 벽면 전체를 용수철 주무르듯 소용돌이 모양으로 비틀어 버린 것이다……',
      );
      await era.printAndWait(
        '게다가 용수철을 주무른 것조차 아니다——벽 전체를 끌어안은 게 아니다. 손잡이만 잡았을 뿐이다!',
      );
      await era.printAndWait(
        '물리학의 기적…… 아니, 기적이라는 말로도 부족하다. 이 닫힌 방에는 물리학이 더 이상 존재하지 않는다!',
      );
      await acute.say_and_wait([
        '저기, ',
        callname,
        ', 알고 있니. 나는 이제 번거로운 규칙들이 지긋지긋하단다.',
      ]);
      await era.printAndWait(
        '이쪽은 아직 공포에 빠져 있는데, 기적 같은 문 앞의 잿빛 그림자는 여느 때와 같다. 온화한 목소리가 닫힌 방 안에 울려 퍼진다.',
      );
      await acute.say_and_wait([
        '사실 말이야, ',
        callname,
        '. 나는 계속 참아 왔단다? 너를 다치게 하고 싶지 않아서 횟수도 빈도도 스스로 줄이고 있었지.',
      ]);
      await acute.say_and_wait([
        '그런데도 ',
        callname,
        '은(는) 다른 아이들과 정답게 지내고 싶다고 생각하는구나……',
      ]);
      await acute.say_and_wait([
        callname,
        '이(가) 자기 마음에 솔직해지겠다면……',
      ]);
      await acute.say_and_wait('나도 조금은 진심을 내보여도……되겠지?');
      await era.printAndWait([
        '그렇게 말하며 ',
        acute.get_colored_name(),
        '는 주머니에서 접으면 엄지손가락 하나 길이쯤 되는, 분해된 작은 우산을 꺼냈다.',
      ]);
      await era.printAndWait([
        '그러고는 가느다란 두 손을 ',
        you.get_colored_name(),
        '의 눈앞으로 뻗어, 손가락 하나 두께의 작은 우산을 엄지와 검지로 집어 ',
        you.get_colored_name(),
        '의 앞에 내밀었다.',
      ]);
      await era.printAndWait('「찌지직……」');
      await era.printAndWait(
        '고무 제품에서 고무라면 절대 나지 않을 소리가 났다.',
      );
      await era.printAndWait([
        '손가락 하나 두께의 고무 우산이 ',
        you.get_colored_name(),
        '의 눈앞에서 두 동강이 나, 부스러기처럼 바닥에 떨어졌다.',
      ]);
      await acute.say_and_wait(
        '……오늘은 내가 만족할 때까지 절대로 쉬게 두지 않을 거란다.',
      );
      await acute.say_and_wait([callname, { color: 'pink', content: '❤️～' }]);
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');
      await era.printAndWait('어두운 눈동자에 분홍빛 고리가 빛난다.');
      await era.printAndWait('곧 닫힌 방 곳곳에 새하얀 피가 흐르리라……');
    };
    f.title = title;
    return f;
  })(),
  slave_end: (() => {
    const title = '돈의 노예';
    /**
     * @param {CharaTalk} acute ワンダーアキュート
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ワンダーアキュートのプレイヤーへの呼び方
     */
    const f = async (acute, you, callname) => {
      await era.printAndWait(
        '돈은 만능열쇠다. 이 열쇠를 잃으면 모든 문이 닫힌다.',
      );
      await era.printAndWait([
        '어른으로서 ',
        you.get_colored_name(),
        '은(는) 그 이치를 잘 알고 있다.',
      ]);
      await era.printAndWait([
        '그런데도 ',
        you.get_colored_name(),
        '은(는) 교육자로서 내디뎌서는 안 될 한 걸음을 내딛고 말았다.',
      ]);
      await era.printAndWait(
        '전 재산을 새로 출시된 트레이딩 카드 게임 【다크 트레센】에 쏟아붓고, 나아가 번호 100, 전 세계 한정 100장인 UR 미러 골드 레어 【잿빛 눈의 그림 여인】을 얻으려고 어느 경매 사이트에서 순간의 흥분을 이기지 못해, 끝내 백삼억 이천만 엔에 그 희귀품을 낙찰받은 것이다.',
      );
      await era.printAndWait([
        '하지만 말할 것도 없이 ',
        you.get_colored_name(),
        '에게 백삼억 이천만 엔 따위는 없다.',
      ]);
      await era.printAndWait(
        '그저 경매 놀이인 줄 알았다. 낙찰받더라도 나중에 상대에게 돈이 없다고 말하고, 소액의 위약금을 낸 뒤 다시 경매에 부치면 된다고……',
      );
      await era.printAndWait([
        '오늘 아침 변호사 통지서와 법원 소환장이 동시에 도착하고서야 ',
        you.get_colored_name(),
        '은(는) 사태의 심각성을 깨달았다.',
      ]);
      await era.printAndWait(
        '기한 안에 백삼억의 잔금을 내지 못하면 경매 사이트는 「경매 질서 교란」을 이유로 자신을 법정에 세울 것이고, 최고 삼 년 이상의 징역형을 받게 된다.',
      );
      await era.printAndWait([
        '이 재판이 유죄로 끝난다는 보장은 없다. 하지만 교직원으로서 법정에 선다는 사실 자체가 사회적 죽음이다. 그러니 돈이 없어도 ',
        you.get_colored_name(),
        '은(는) 어떻게든 백삼억 이천만 엔을 마련해야 한다.',
      ]);
      await era.printAndWait('하지만 어떻게 마련하지.');
      await era.printAndWait('은행 대출은 이미 한도에 도달했다.');
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 곤란해하고 있자, 늘 속마음을 꿰뚫어 보는 ',
        acute.get_colored_name(),
        '가 살며시 다가왔다.',
      ]);
      await acute.say_and_wait([
        callname,
        ', 무슨 고민이 있니?…… 어머, 돈 때문이려나.',
      ]);
      await era.printAndWait([
        '법원의 독촉장을 뒤에 나타난 ',
        acute.get_colored_name(),
        '에게 그만 들키고 말았다.',
      ]);
      await acute.say_and_wait(
        '금액은 적혀 있지 않지만, 아주 큰돈인 모양이구나.',
      );
      await acute.say_and_wait('돈이라면 나도 여유가 있단다…… 조금 더 줄까.');
      await era.printAndWait([
        '전에도 ',
        acute.get_colored_name(),
        '에게 돈을 빌린 적은 있다. 하지만 이런 금액은 아니었다.',
      ]);
      await era.printAndWait([
        '이성은 말한다. 교직원으로서 담당 ',
        acute.uma_sex_title,
        '와 이 이상 썩은 금전 관계를 맺어서는 안 된다고.',
      ]);
      await era.printAndWait('하지만 이 빚은……');
      await acute.say_and_wait([
        '괜찮단다, ',
        callname,
        '. 평소처럼 집안일로 갚으렴~',
      ]);
      await era.printAndWait([
        '그 순간, ',
        you.get_colored_name(),
        '의 얼굴에 편안하면서도 ',
        you.get_colored_name(),
        '이(가) 거절할 수 없는 미소가 떠올랐다……',
      ]);
      await era.printAndWait('…………');
      await era.printAndWait('………');
      await era.printAndWait('……');
      await era.printAndWait(
        '돈은 만능열쇠다. 이 열쇠를 얻으면 모든 문이 열린다.',
      );
      await era.printAndWait([
        '그것이 ',
        acute.get_colored_name(),
        '가 최근에야 깨달은 이치다.',
      ]);
      await era.printAndWait(
        '평범한 뽑기로 얻은, 왠지 희귀해 보이는 카드 한 장이 경매 사이트에서 백삼억 이천만 엔이나 될 줄은 몰랐다.',
      );
      await era.printAndWait([
        '그 경매 덕분에 ',
        acute.get_colored_name(),
        '는 큰 재산을 얻어, ',
        you.get_colored_name(),
        '의 빚을 갚아 줄 수 있었다.',
      ]);
      await era.printAndWait([
        '이제 ',
        acute.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 금전적 주인이다.',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        '가 만든 집안일 임금표에 따르면, ',
        you.get_colored_name(),
        '이(가) 일을 하나 끝낼 때마다 ',
        acute.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 빚을 일부 탕감해 준다.',
      ]);
      await era.printAndWait(
        '예를 들면 요리, 설거지, 함께 운동하기, 손잡고 산책하기.',
      );
      await era.printAndWait([
        '그리고 이야기 나누기, 머리 쓰다듬기, 등 마사지, 혀 깨물기…… 물론 ',
        acute.get_colored_name(),
        ' 쪽에서 ',
        you.get_colored_name(),
        '에게 해 주는 것이다.',
      ]);
      // 二人とも男性ではない
      if (acute.sex_code * you.sex_code !== 1) {
        await era.printAndWait(
          '거기에 입맞춤, 애무, 출산, 육아, 둘째, 셋째 같은 추가 수당까지……지금은 가사 임금표에 대놓고 적혀 있지 않지만, 머지않아 적히게 될 것이다.',
        );
      }
      await era.printAndWait([
        '이 집안일 임금표대로 ',
        you.get_colored_name(),
        '이(가) 매일 열 번씩 해낸다면, 앞으로 삼십 년이면 ',
        you.get_colored_name(),
        '은(는) 빚을 전부 갚을 수 있을 것이다.',
      ]);
      await era.printAndWait([
        '그때까지 ',
        you.get_colored_name(),
        '도 권법을 익혀야 한다. 은퇴 뒤 ',
        acute.get_colored_name(),
        '가 ',
        you.get_colored_name(),
        '을(를) 고향으로 데려갔을 때, 아버지에게 인정받아야 하니까.',
      ]);
      await era.printAndWait([
        acute.get_colored_name(),
        '에게는 나쁘지 않은 결말의 시작일지도 모른다. 하지만 ',
        you.get_colored_name(),
        '에게는 이만한 빚을 진 시점에 결말이 이미 정해졌던 것인지도 모른다.',
      ]);
      await era.printAndWait([
        '돈의 관계에 얽매여 ',
        you.get_colored_name(),
        '은(는) 결말을 맞았다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
};
