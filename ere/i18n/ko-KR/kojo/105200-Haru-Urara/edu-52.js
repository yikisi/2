/**
 * @file ハルウララ - 育成
 * @author 99
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { gacha, get_random_entry } = require('#/utils/list-utils');

const recruit_flags = require('#/data/event/recruit-flags');
const { attr_enum } = require('#/data/train-const');

module.exports = {
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {string} callname ハルウララからプレイヤーへの呼び方
   */
  async train(urara, callname) {
    const buffer = [
      () => urara.say_and_wait('맡겨 줘! 간다!'),
      () => urara.say_and_wait(`오! 간다, ${callname}！`),
      () => urara.say_and_wait('힘낼게!'),
      () => urara.say_and_wait('이번엔 될 것 같아! 시작한다!'),
      () => urara.say_and_wait('좋아! 우라라, 힘낼게!'),
    ];
    await get_random_entry(buffer)();
  },
  ts_add: (() => {
    const title = '추가 자율 트레이닝!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 ハルウララからテイエムオペラオーへの呼び方
     * @param {PrintedSpan} callname_15 テイエムオペラオーからプレイヤーへの呼び方
     */
    const f = async (urara, opera, you, callname, call_15, callname_15) => {
      await era.printAndWait([
        '오늘의 훈련이 끝난 후, ',
        urara.get_colored_name(),
        '와 ',
        you.get_colored_name(),
        '은(는) 함께 훈련장 트랙 옆으로 돌아와 휴식을 취했다.',
      ]);
      await urara.say_and_wait([
        '오늘도 정말 열심히 연습했네! ',
        callname,
        ', 이따가 같이 식당에…… 응? 저기 있는 사람?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '가 귀를 쫑긋거리는 방향을 따라, ',
        you.get_colored_name(),
        '은(는) 훈련장 한가운데 서 있는 또 다른 형체를 보았다.',
      ]);
      await urara.say_and_wait([
        '아! ',
        call_15,
        '이다! ',
        call_15,
        '도 이제 쉬러 가는 거야?',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '이(가) 상대 앞에서 멈춰 서자, 연극 같은 몸짓의 패왕도 ',
        you.get_colored_name(),
        '와(과) ',
        urara.get_colored_name(),
        '쪽으로 몸을 돌렸다.',
      ]);
      await opera.say_and_wait([
        '오! 이게 누구야, 우라라와 ',
        callname_15,
        '아냐? 나는 지금 막 달리러 가려던 참이었다! 금성과 함께!',
      ]);
      await urara.say_and_wait([
        '금성과 함께 달린다고? 정말 ',
        call_15,
        '다운걸. 게다가 엄청 대단해 보여!',
      ]);
      if (era.get('cflag:15:殿堂') > 0) {
        await opera.say_and_wait(
          '자, 무슨 일이지? 별이 빛나는 하늘 아래에서 다시금 빛을 갈고닦으러 왔나? 나태함 뒤에 남은 망설임을 떨쳐 내러 왔나?',
        );
        await urara.say_and_wait(
          '그렇구나! 우라라, 알겠어! 어른한테도 어른만의 힘든 일이 있구나~',
        );
      } else {
        await opera.say_and_wait(
          '그렇다! 별들의 빛으로 이 아름다움과 두 다리를 갈고닦는 것이다! 내일의 광채를 위해!',
        );
        await urara.say_and_wait([
          '그렇구나! 우라라, 알겠어! 그렇게 열심히 하는 ',
          call_15,
          ', 역시 대단해!',
        ]);
      }
      await urara.say_and_wait([
        '음…… 그렇다면 ',
        callname,
        ', 시간도 좀 남았는데 우리도 한번 해볼까?',
      ]);
      era.printButton('「가자, 한번 해보자.」', 1);
      era.printButton('「푹 쉬는 것도 중요하다구?」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) ',
          urara.get_colored_name(),
          '에게 대답하는 것을 듣자, ',
          opera.get_colored_name(),
          '은(는) 곧바로 분위기를 읽고 손가락을 튕겼다.',
        ]);
        await opera.say_and_wait([
          `환영하마! 하지만 가장 빛나는 왕좌${era.get('love:15') >= 90 ? '와 가장 사랑하는 권속' : ''}은 넘겨주지 않겠다——전력을 다해 빼앗으러 오너라!`,
        ]);
        await urara.say_and_wait([
          '응! ',
          call_15,
          '이(가) 그렇게 말한다면, 우라라도 전력을 다해서 따라잡을게!',
        ]);
        await opera.say_and_wait([
          '하──하하하! 오늘의 달리기는 꽤 재미있겠군! 그렇지 않나, ',
          callname_15,
          '？',
        ]);
        await era.printAndWait([
          '예상대로, ',
          opera.get_colored_name(),
          '의 페이스를 따라가지는 못했지만, ',
          urara.get_colored_name(),
          '은(는) 끝까지 버티며 추가 트레이닝을 완주했다.',
        ]);
      } else {
        await urara.say_and_wait([
          '어? 그래? ',
          callname,
          '은(는) 꼭 좋다고 할 줄 알았는데……',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '이(가) 고개를 갸웃하자, 곧바로 ',
          opera.get_colored_name(),
          '이(가) 다 안다는 듯한 말투로 타일렀다.',
        ]);
        await opera.say_and_wait(
          '그렇다! 쉬지 않는 자의 빛은 흐려지는 법. 나 또한 마찬가지다. 어제는 장미 꽃잎을 띄운 탕에서 느긋하게 쉬었지!',
        );
        await urara.say_and_wait(
          '오! 알겠어! 강해지려면 푹 쉬어야지! 그런데 장미 꽃잎을 띄운 탕……?',
        );
        await era.printAndWait([
          '마지막으로 ',
          opera.get_colored_name(),
          '이(가) 나중에 장미를 조금 나눠 주겠다고 약속하자, ',
          urara.get_colored_name(),
          '은(는) ',
          opera.get_colored_name(),
          '에게 손을 흔든 뒤, ',
          you.get_colored_name(),
          '의 손을 잡아끌고 식당으로 달려갔다……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {string} callname ハルウララからプレイヤーへの呼び方
   * @param {number} train トレーニング種別。0-5 はスピード・スタミナ・パワー・根性・賢さ
   */
  tf_message(urara, callname, train) {
    switch (train) {
      case attr_enum.speed:
        urara.say('에? 어째서 다리가……? 움직이지 않아……');
        break;
      case attr_enum.endurance:
        urara.say('……하아, 하아…… 머, 머리가 어지러워……');
        break;
      case attr_enum.strength:
        urara.say(['저, 저기 봐, ', callname, '. 하늘에 작은 별이 반짝여……']);
        break;
      case attr_enum.toughness:
        urara.say([callname, '……잡아당겨 줘~~']);
        break;
      case attr_enum.intelligence:
        urara.say('졸려…… 으윽……');
    }
  },
  train_fail: (() => {
    const title = '몸을 소중히!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '트레이닝 도중 ',
        urara.get_colored_name(),
        '의 상태가 이상하다는 것을 알아차린 ',
        you.get_colored_name(),
        '은(는) ',
        urara.sex,
        '을(를) 보건실로 데려가 살펴보았다.',
      ]);
      await era.printAndWait(
        '보건실에는 아무도 없었지만, 몸 상태를 살피는 정도라면 트레이너도 어떻게든 할 수 있다.',
      );
      await era.printAndWait([
        '다만 평소에 튼튼하던 작은 ',
        urara.uma_sex_title,
        '은(는), ',
        you.get_colored_name(),
        '의 걱정을 어딘가 남의 일처럼 여기고 있었다.',
      ]);
      await urara.say_and_wait([
        '우라라, 괜찮아. 이 정도는 아무것도 아니야!',
        callname,
        '은(는) 걱정이 많구나.',
      ]);

      await urara.say_and_wait(
        '걱정 안 해도 돼. 여기를 눌러도 우라라는……아야!',
      );
      era.printButton('「……꽤 아파 보이는데.」', 1);
      era.printButton('「역시 푹 쉬는 게 좋겠지?」', 2);
      const ret = await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 다리의 부은 듯한 곳을 살짝 누르자, 작은 ',
        urara.uma_sex_title,
        '은(는) 갑자기 아파하며 눈물이 고인 채 움직임을 멈췄다.',
      ]);
      await urara.say_and_wait(
        '아우……왜, 왜 그렇게 화내? 정말 하나도 안 아프다니까……',
      );
      await era.printAndWait([
        '갑자기 엄해진 ',
        you.get_colored_name(),
        '을(를) 풀이 죽은 눈으로 올려다보았다.',
        urara.get_colored_name(),
        '의 눈물 고인 눈동자는 여전히 어리둥절해 보였다.',
      ]);
      await urara.say_and_wait('봐! 이렇게 해도 아무렇지 않잖아……아야!');
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 버둥거리다 부딪친 발끝을 감싸 쥐는 동안, ',
        you.get_colored_name(),
        '은(는) 작은 ',
        urara.uma_sex_title,
        '의 이마를 가볍게 튕겼다.',
      ]);

      era.printButton(
        '「더 움직이면 정말 화낸다? 몸을 다치면 이길 수 없어.」',
        1,
      );
      await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '두 번이나 아팠던 데다 ',
          you.get_colored_name(),
          '의 주의까지 더해지자, 작은 ',
          urara.uma_sex_title,
          '의 가만있지 못하던 귀가 축 처졌다.',
        ]);
        await urara.say_and_wait(
          '……으, 알았어……조심할게! 우라라를 다치게 할 건 없어! 아픈 데가 없나……',
        );
        await urara.say_and_wait([
          '앗……',
          callname,
          ', 발끝이……아까부터 조금 아파……',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 곧바로 작은 ',
          urara.uma_sex_title,
          '의 발을 들어 확인했다. 역시 아까 부딪친 곳이 조금 부어 있었다……',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 새 상처에도 약을 바르고 붕대를 감아 준 뒤, ',
          you.get_colored_name(),
          '은(는) ',
          urara.sex,
          '을(를) 그날은 푹 쉬게 하기로 했다.',
        ]);
      } else {
        await era.printAndWait([
          '그렇게 말해도 작은 ',
          urara.uma_sex_title,
          '의 가만있지 못하던 꼬리는 오히려 더 세차게 흔들렸다.',
        ]);
        await urara.say_and_wait(
          '……알겠어! 달릴 때도 공부할 때도 우라라, 이제부터 조심할게!',
        );
        await urara.say_and_wait(
          '그러니까……트레이닝 계속해도 돼? 쉬운 거라면 이제 안 다치겠지!',
        );
        await urara.say_and_wait([
          '우라라도 꼭 1착 하고 싶은걸! 그러니까 ',
          callname,
          '도 우라라가 조심할 거라는 걸 알아줬으면 좋겠어!',
        ]);
        await era.printAndWait([
          '……그렇게까지 말한다면.',
          you.get_colored_name(),
          '은(는) 한숨을 쉬고, ',
          urara.get_colored_name(),
          '의 상처를 치료한 뒤 조심스럽게 트레이닝을 재개했다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '무리는 금물!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張るを選ぶと再び失敗するか
     */
    const f = async (urara, you, callname, fail_again) => {
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 트레이닝 도중 심하게 넘어져, ',
        you.get_colored_name(),
        '은(는) 곧바로 ',
        urara.sex,
        '을(를) 안아 들고 보건실로 옮겼다.',
      ]);
      await era.printAndWait([
        '조마조마한 마음으로 진찰받은 결과, 큰 문제는 없다는 말을 듣고 ',
        you.get_colored_name(),
        '도 ',
        urara.get_colored_name(),
        '도 어깨의 힘을 빼며 안도했다.',
      ]);
      await urara.say_and_wait(
        '후~ 가벼운 상처라 다행이다. 의사 선생님 얼굴이 엄청 무서워서 주사 맞는 줄 알았어!',
      );
      await urara.say_and_wait(
        '에헤헤~ 주사가 훨씬 아프니까, 이 정도 작은 상처는 괜찮아!',
      );

      await urara.say_and_wait([callname, ', 돌아가면 트레이닝 계속하자——']);
      era.printButton('「아무튼 지금은 푹 쉬자.」', 1);
      era.printButton('「무리는 안 돼. 오늘은 돌아가서 쉬어!」', 2);
      const ret = await era.input();
      await era.printAndWait([
        '아직도 걸음걸이가 어색한 ',
        urara.sex,
        '을(를) 보고, ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '의 말을 끝까지 듣지도 않고 곧바로 부탁을 거절했다.',
      ]);
      if (ret === 1) {
        await urara.say_and_wait(
          '쉬어? 하지만 우라라, 아직 기운 넘치는데. 트레이닝하면 안 돼?',
        );

        era.printButton('「그래도 걱정되는걸.」', 1);
        await era.input();

        await urara.say_and_wait('음……그렇구나. 알겠어! 우라라, 푹 쉴게!');
        await urara.say_and_wait([
          callname,
          '이(가) 그렇게 풀이 죽어 있으면 우라라도 슬퍼. 슬퍼하지 마, 응?',
        ]);
        await urara.say_and_wait(
          '그냥 푹 쉬는 것뿐인데……다들 트레이닝하고 있으니까 우라라만 뒤처지는 것 같아……',
        );
        await urara.say_and_wait(
          '그렇게 생각하면 온몸이 근질근질해. 쉬는 것도 주사 맞는 것만큼 힘들지도……',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 심심해했지만, 그 후 ',
          urara.sex,
          '의 상처는 확실히 나아졌다.',
        ]);
      } else {
        await urara.say_and_wait([
          '어?',
          callname,
          ', 왜, 왜 갑자기 화내는 거야?',
        ]);

        era.printButton(
          '「……선생님이 상처가 심해지면 주사보다 아프다고 하셨어.」',
          1,
        );
        await era.input();

        await urara.say_and_wait(
          '뭐야, 그런 거였어? 우라라도 이제 어린애가 아니야. 그렇게 아파도 괜찮아!',
        );
        if (fail_again) {
          await urara.say_and_wait([
            '그리고 ',
            callname,
            ', 봐! 이렇게 해도 우라라는 아무렇지도——우왓!',
          ]);
          await urara.say_and_wait(['……아, 아파……아파……', callname, '……']);
          await era.printAndWait([
            '그러게 말했잖아. 울기 시작한 작은 ',
            urara.uma_sex_title,
            '을(를) 일으켜 세우고, ',
            you.get_colored_name(),
            '은(는) 말없이 ',
            urara.sex,
            '을(를) 바로 근처의 보건실로 다시 데려갔다.',
          ]);
          await era.printAndWait([
            '예상대로, ',
            urara.get_colored_name(),
            '은(는) 무리하게 움직인 탓에 상처가 악화되어 낫는 데 걸리는 시간도 길어졌다.',
          ]);
        } else {
          await urara.say_and_wait([
            '……응?',
            callname,
            '? 갑자기 말이 없어졌네. 저, 정말 그렇게 심해……?',
          ]);

          era.printButton('「어린애가 아니라는 우라라는 어떻게 생각해?」', 1);
          await era.input();

          await urara.say_and_wait(
            '그런 건 너무해! 쉬는 건 심심하지만……주사보다 아프다니……주사보다……',
          );
          await urara.say_and_wait([
            urara.get_colored_name(),
            ', 금방 나을게! 그러니까 달릴 수 있을 때까지……',
            callname,
            ', 계속 곁에 있어 줄래……?',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '의 상처가 낫기까지는 꽤 오래 걸렸지만, ',
            urara.sex,
            '은(는) 무사히 기운을 되찾았다.',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start: (() => {
    const title = '레이스 전 응원';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, callname) => {
      const buffer = [
        () => urara.say_and_wait('좋아! 나간다──!'),
        () =>
          urara.say_and_wait('다들 대단해 보여! 그럼 우라라도 지지 않을 거야!'),
        () =>
          urara.say_and_wait(
            `${callname}! 이번에도 우라라가 달리는 모습 잘 봐 줘!`,
          ),
        () => urara.say_and_wait('평소처럼 달리면 되는 거지? 알겠어!'),
        () =>
          urara.say_and_wait(
            `걱정하지 마, ${callname}. 열심히 달리면 분명 할 수 있어!`,
          ),
      ];
      switch (era.get('cflag:52:干劲')) {
        case -1:
          buffer.push(() =>
            urara.say_and_wait(
              '레이스에 많이 나가면 재밌지만, 지금은 몸이 무거워……',
            ),
          );
          break;
        case -2:
          buffer.push(() => urara.say_and_wait('또 레이스네……우, 힘낼게……'));
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_start_high_moti: (() => {
    const title = '끓어오르는 투지';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait(['오——!', callname, '! 오늘은 힘이 넘쳐!']);
      await era.printAndWait([
        you.get_colored_name(),
        '의 곁에서, ',
        urara.get_colored_name(),
        '은(는) 눈을 반짝이며 앞을 바라보고 있었다.',
      ]);

      era.printButton('「그럼 이따 기합 넣고 가 보자!」', 1);
      era.printButton('「그래. 얼마나 성장했는지 모두에게 보여 줘.」', 2);
      await era.input();

      await urara.say_and_wait('응! 모두의 기대에 꼭 보답할게!');
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 통통 튀듯 한 걸음 뛰더니, 그대로 레이스가 열리는 곳으로 달려갔다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '레이스 승리!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      let buffer = [
        () =>
          urara.say_and_wait(
            `응? 어……해냈다! 이겼어! ${callname}! 봤어? 이겼어!`,
          ),
        () => urara.say_and_wait('와아……! 1착 했어! 정말 해냈어!'),
        () =>
          urara.say_and_wait(
            '해냈어! 1착이라는 건 모두의 기대가 전해졌다는 거겠지!',
          ),
        () => urara.say_and_wait(`${callname}! 봤어? 방금 슈웅 하고 골인했어!`),
        () =>
          urara.say_and_wait(
            `역시 평소대로 하면 되는구나! 이번에도 이겼어, ${callname}！`,
          ),
        () => urara.say_and_wait('해냈어……해냈어! 정말로 해냈어!'),
      ];
      await get_random_entry(buffer)();
      era.drawLine();
      await era.printAndWait([
        '얼굴의 땀을 닦고, ',
        urara.get_colored_name(),
        '은(는) 레이스가 끝나자마자 종종걸음으로 ',
        you.get_colored_name(),
        '이(가) 기다리는 울타리 앞으로 달려왔다.',
      ]);
      await era.printAndWait([
        '환호 속에서 햇살을 가득 받은 작은 얼굴을 들고, 작은 ',
        urara.uma_sex_title,
        '은(는) 수건과 물을 건네는 ',
        you.get_colored_name(),
        '에게 의기양양하게 웃어 보였다.',
      ]);
      await urara.say_and_wait(
        '에헤헤~ 아까 아저씨들이 만세라고 외친 것 같아. 우라라, 그렇게 대단해?',
      );

      await urara.say_and_wait([
        '있지, ',
        callname,
        '! 방금 봤어? 우라라, 이긴 것 같아!',
      ]);
      era.printButton('「그래, 우라라가 해냈어. 오늘은 1착이야!」', 1);
      era.printButton(
        '「다들 기뻐하고 있지? 하지만 다음엔 더 중요한 일이 있어!」',
        2,
      );
      if ((await era.input()) === 1) {
        await era.printAndWait([
          you.get_colored_name(),
          '에게 인정받자, ',
          urara.get_colored_name(),
          '은(는) 기쁜 듯 귀와 꼬리를 흔들며 귀여운 미소를 더욱 환하게 빛냈다.',
        ]);
        await urara.say_and_wait(
          '역시! 그럼 모두의 웃는 얼굴을 위해 다음에도 꼭 1착 할게!',
        );
        await urara.say_and_wait([
          callname,
          '도 마찬가지야! 지금 ',
          callname,
          '의 웃는 얼굴이 정말 멋지거든!',
        ]);
        await era.printAndWait(
          '의기양양하게 빛나는 벚꽃빛 눈동자에는 지금 미소 짓는 모두의 얼굴이 비쳤다.',
        );
      } else {
        await era.printAndWait([
          '얼굴의 땀을 쓱 닦고, ',
          urara.get_colored_name(),
          '은(는) 귀를 쫑긋 세웠다. 미소에도 굳은 의지가 담겼다.',
        ]);
        await urara.say_and_wait(
          '응! 우라라도 그렇게 생각해! 아직 더 달리고 싶거든!',
        );
        await urara.say_and_wait([
          callname,
          ', 다음엔 어떤 레이스야? 우라라, 기대해도 돼?',
        ]);
        await era.printAndWait([
          '의기양양하게 빛나는 벚꽃빛 눈동자에서, ',
          you.get_colored_name(),
          '은(는) 평소보다 더욱 뜨겁게 타오르는 불씨를 보았다.',
        ]);
      }
      era.drawLine();
      buffer = [
        () =>
          urara.say_and_wait(
            `라이브가 시작돼! ${callname}, 기대돼? 우라라도 기대돼!`,
          ),
        () => urara.say_and_wait('이따 꼭 봐 줘! 춤도 열심히 출 테니까!'),
        () =>
          urara.say_and_wait('다들 준비가 된 것 같아! 우라라도 두근두근해!'),
      ];
      if (era.get('love:52') >= 75) {
        buffer.push(() =>
          urara.say_and_wait(
            `우라라도 모두에게 지지 않을 거야! 꼭, 꼭 ${callname}을(를) 푹 빠지게 만들겠어!`,
          ),
        );
      }
      if (era.get('love:52') === 100) {
        buffer.push(() =>
          urara.say_and_wait(`${callname}! 무대 위에서도 우라라를 계속 봐 줘!`),
        );
      }
      await get_random_entry(buffer)();
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '입상!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {number} rank 着順
     */
    const f = async (urara, you, callname, rank) => {
      const buffer = [
        () =>
          urara.say_and_wait('다들 대단했어! 하지만 다음에는 절대 안 질 거야!'),
        () => urara.say_and_wait('1착은 못 했지만 역시 재밌었어! 또 달리자!'),
        () =>
          urara.say_and_wait(
            `에헤헤~ 이번에는 1착을 못 했지만 더 힘낼 테니까, ${callname}도 풀이 죽지 마!`,
          ),
      ];
      switch (rank) {
        case 2:
          buffer.push(() =>
            urara.say_and_wait(`봤어, ${callname}! 우라라, 2착이야──!`),
          );
          break;
        case 3:
          buffer.push(() => urara.say_and_wait('3착이야! 대단하지!'));
      }
      await get_random_entry(buffer)();
      await era.printAndWait([
        '축하하는 목소리 속에서, ',
        urara.get_colored_name(),
        '은(는) 여전히 웃는 얼굴로 ',
        you.get_colored_name(),
        '이(가) 있는 울타리까지 종종걸음으로 다가왔다.',
      ]);
      await urara.say_and_wait(
        '에헤헤~ 다들하고 레이스하는 건 역시 재밌어. 게다가 나도 강해졌다는 게 느껴져!',
      );
      await urara.say_and_wait(
        '지금의 우라라로는 1착 하기엔 아직 부족하지만……',
      );

      await urara.say_and_wait([
        callname,
        '은(는) 어떻게 생각해? 이번엔 아주 조금 차이였어!',
      ]);
      era.printButton('「수고했어, 우라라. 충분히 잘했어.」', 1);
      era.printButton('「먼저 쉬자. 이번엔 느낌이 어땠어?」', 2);
      if ((await era.input()) === 1) {
        await urara.say_and_wait([
          '고마워, ',
          callname,
          '! 그런데 이번엔 조금 분해. 뭐가 부족했을까?',
        ]);
        await urara.say_and_wait(
          '그래도 이대로 힘내면 다음에는 1착 할 수 있겠지!',
        );
      } else {
        await urara.say_and_wait(
          '이번엔 정말 재밌었어! 점점 따라잡을 수 있게 됐는데, 아직 조금 모자라!',
        );
        await urara.say_and_wait([
          '하지만 지금 ',
          callname,
          '에게 물어보는 건 이르겠지. 돌아가서 물어볼까?',
        ]);
      }
      era.printButton('「그래. 돌아가서 다음 대책을 함께 생각해 보자.」', 1);
      await era.input();

      await urara.say_and_wait(
        '응! 알겠어! 우라라, 더 힘낼게. 다음에 1착 하기 위해서!',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = '레이스 패배!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      const buffer = [
        () =>
          urara.say_and_wait('다들 대단했어! 하지만 다음에는 절대 안 질 거야!'),
        () => urara.say_and_wait('1착은 못 했지만 역시 재밌었어! 또 달리자!'),
        () =>
          urara.say_and_wait(
            `에헤헤~ 이번에는 1착을 못 했지만 더 힘낼 테니까, ${callname}도 풀이 죽지 마!`,
          ),
      ];
      await get_random_entry(buffer)();
      await era.printAndWait([
        '휘청거리며 ',
        you.get_colored_name(),
        '의 곁으로 다가왔다. 피곤한 탓인지, ',
        urara.get_colored_name(),
        '의 땀에 젖은 미소에는 어딘가 무리하는 기색이 보였다.',
      ]);
      await urara.say_and_wait('또 졌네. 조금 부끄럽다……');
      await urara.say_and_wait(
        '『오늘 다들 빠르네~』 하고 생각한 다음 순간 추월당했어!',
      );
      await urara.say_and_wait(
        '그래도 들었어! 우라라를 응원하는 소리가 계속 이어졌어!',
      );

      await urara.say_and_wait(
        '골인할 때까지 열심히 달렸는데, 우라라, 모두의 기대에 보답했을까……',
      );
      era.printButton('「풀이 죽지 마. 이번에도 잘했어.」', 1);
      era.printButton('「다음에는 결과로 보답하자.」', 2);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '의 도움을 받아 수건으로 얼굴의 땀을 닦고, 작은 ',
        urara.uma_sex_title,
        '은(는) ',
        you.get_colored_name(),
        '의 격려에 힘차게 고개를 끄덕였다.',
      ]);
      await urara.say_and_wait(
        '응! 한 번 진 것뿐인걸. 아직 달릴 수 있으니까 괜찮아. 다음 레이스에서 이길 수 있게 힘낼게!',
      );
      await era.printAndWait([
        '다음에 달리는 그날까지, ',
        you.get_colored_name(),
        '와(과) ',
        urara.get_colored_name(),
        '은(는) 「다음에는 꼭 모두를 추월하자」고 약속했다.',
      ]);
      await urara.say_and_wait(
        '에헤헤~ 지는 데 익숙해지면 안 된다고 다들 말하지만, 우라라는 아직 달릴 수 있어!',
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '다음엔 지지 않아!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait('달리는 건 재밌어. 하지만 조금 분하다……');

      await era.printAndWait([
        you.get_colored_name(),
        '의 곁에 풀이 죽은 채 다가왔다. 오늘의 ',
        urara.get_colored_name(),
        '은(는) 레이스에서 져서 평소의 미소를 잃고 있었다.',
      ]);
      await urara.say_and_wait('또 졌네……이번에는 괜찮을 줄 알았는데……');
      await urara.say_and_wait(
        '레이스는 재밌지만, 1착 했을 때의 기분은 역시 달라!',
      );
      await urara.say_and_wait(
        '가슴이 뜨겁고 답답해. 한 번 더 달릴 수 있으면 좋을 텐데……',
      );

      urara.say([callname, ', 이럴 때는 어떻게 해야 이길 수 있어?']);
      era.printButton('「마음을 가다듬고 다음번에 이겨서 만회하는 거야.」', 1);
      era.printButton('「초조해하지 마. 일단 돌아가서 트레이닝하자.」', 2);
      if ((await era.input()) === 1) {
        await urara.say_and_wait(
          '응! 속상한 마음을 투지로 바꾸면 되는 거지. 다들 그렇게 말하더라!',
        );
        await urara.say_and_wait([
          '이길 때까지 절대 느슨해지지 않을 거야!',
          callname,
          '도 같이 나쁜 버릇 고치자!',
        ]);
        await era.printAndWait([
          '돌아가는 길, 서로를 감시하기로 하면서 ',
          you.get_colored_name(),
          '의 간식까지 ',
          urara.get_colored_name(),
          '에게 줄이라는 말을 듣고 말았다.',
        ]);
      } else {
        await urara.say_and_wait(
          '그렇네. 지금부터 열심히 하면 다음엔 꼭 이길 수 있어!',
        );
        await urara.say_and_wait([
          '그러니까 ',
          callname,
          ', 지금 돌아가자! 서두르면 오늘도 트레이닝할 수 있겠지?',
        ]);
        await era.printAndWait([
          '돌아가는 길, ',
          urara.get_colored_name(),
          '은(는) 정말로 곧바로 ',
          you.get_colored_name(),
          '을(를) 잡아끌고 추가 트레이닝을 시작했다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  we_after_begin: (() => {
    const title = '우라라와 알아 가기';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await inner_urara.say_as_unknown_and_wait(
        '이야기는 여기서부터 본격적으로 시작된다.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '이것은 당신과 우리가 함께 써 내려가는, 당신과 우리의 이야기.',
      );
      era.drawLine();
      await era.printAndWait([
        '옷매무새를 가다듬고 들뜬 마음을 누르며, ',
        you.get_colored_name(),
        '은(는) 태연한 척 훈련장에 들어섰다.',
      ]);
      await era.printAndWait('새 담당과의 관계는 초반일수록 신중해야 한다.');
      await era.printAndWait(
        '과장처럼 들릴지 모르지만, 트레이너들 사이에서 입에서 입으로 전해지는 중요한 경험담이다.',
      );
      await era.printAndWait(
        '교과서에는 없지만, 맞선처럼 관계를 시작할 때 좋은 인상을 남기는 것이 중요하다는 이야기다.',
      );
      await era.printAndWait(
        '외부인이 「학생과의 관계를 맞선에 비유하는 건 위험하지 않나요?」라고 묻는다면, 대답은 한결같다.',
      );
      await era.printAndWait([
        '한창 사춘기인 ',
        urara.uma_sex_title,
        '와(과) 지내는 것은 사회적으로 외줄 타기나 다름없기 때문이다.',
      ]);
      await era.printAndWait([
        '하지만 운동장으로 향하는 가벼운 발걸음처럼, 이번의 ',
        you.get_colored_name(),
        '은(는) 걱정할 필요가 없다고 생각했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 나중에 문제를 깨닫고 후회하더라도, 그것은 아직 먼 훗날의 일이다.',
      ]);
      await era.printAndWait([
        '「천진한 작은 ',
        urara.uma_sex_title,
        '이(가) 순수한 꿈을 좇고 있다」. 이런 가슴 벅찬 모습에 무슨 위험이 있겠는가.',
      ]);
      await era.printAndWait([
        '게다가 ',
        urara.get_colored_name(),
        '은(는) 진심으로 「1착 하는 것」을 바라고 있다.',
        urara.sex,
        '그렇다면 의욕에 넘쳐 착실하게 연습해 줄 것이다!',
      ]);
      await era.printAndWait([
        '「',
        urara.get_colored_actual_name(),
        '」라는 이름의 작은 ',
        urara.uma_sex_title,
        '의 바람을 이루어 주고 싶은 마음을 품고, ',
        you.get_colored_name(),
        '은(는) 약속 장소로 향했다.',
      ]);
      await era.printAndWait('생각은 좋았지만……');
      await urara.say_and_wait(['앗, ', callname, '이다! 오늘부터 잘 부탁해!']);
      await era.printAndWait([
        '조금 늦게 나타난 ',
        urara.get_colored_name(),
        '은(는) 기운 넘치는 귀여운 미소로 손을 흔들며 ',
        you.get_colored_name(),
        '의 곁에 멈춰 섰다.',
      ]);

      era.printButton('「오늘부터 함께 힘내자!」', 1);
      await era.input();

      await urara.say_and_wait('응! 우라라, 간다!');
      await era.printAndWait([
        '준비 운동을 마치고, ',
        urara.get_colored_name(),
        '은(는) 오늘의 트레이닝을 시작했다. 하지만……',
      ]);
      await urara.say_and_wait([callname, '! 여기 예쁜 나비가 있어!']);
      await you.say_and_wait('아, 정말이네……응?');
      await urara.say_and_wait([callname, '! 저 구름, 뭔가 닮지 않았어?']);
      await you.say_and_wait('오! 잠깐, 그게 아니라……');
      await urara.say_and_wait([
        callname,
        '! 저기 물에 엄청 큰 물고기가 있어!',
      ]);
      await you.say_and_wait('잠깐, 이야기가 전혀 이어지지 않잖아?');
      await era.printAndWait([
        urara.get_colored_name(),
        '에게 페이스를 빼앗긴 ',
        you.get_colored_name(),
        '은(는) 수면에 비친 자기 모습을 몇 초간 바라보고서야 겨우 정신을 차렸다.',
      ]);
      await era.printAndWait(
        '지금……몇 바퀴째지? 아니, 애초에 왜 둘이 강가에 있는 거야?',
      );
      await era.printAndWait(
        '처음에는 트레센 훈련장에 있었을 텐데. 대체 무슨 일이……기억이 안 나잖아?!',
      );
      await era.printAndWait([
        '서쪽으로 기운 해를 멍하니 올려다보다가, 강에 뛰어들어 물고기를 쫓는 ',
        urara.get_colored_name(),
        '을(를) 보고 ',
        you.get_colored_name(),
        '은(는) 어쩔 수 없다는 듯 한숨을 쉬었다.',
      ]);
      await era.printAndWait([
        '하루 종일 ',
        urara.get_colored_name(),
        '을(를) 쫓아다닌 ',
        you.get_colored_name(),
        '은(는) 생각하기를 그만두고 담당과 함께 장난치며 놀았다.',
      ]);
      await era.printAndWait([
        '어차피 트레이닝 이야기는 할 수 없을 테니, 차라리 즐기는 편이 낫다.',
        you.get_colored_name(),
        '은(는) 그렇게 포기했다.',
      ]);

      await era.printAndWait(
        '장난을 치며 하루의 『귀중한 시간』을 모두 써 버린 트레이너와 담당은 잔디밭에 나란히 드러누웠다.',
      );
      await urara.say_and_wait([
        '음……중요한 걸 잊어버린 것 같아! 미안해, ',
        callname,
        '！',
      ]);
      await era.printAndWait([
        '잔디밭에서 몸을 일으키며, ',
        urara.get_colored_name(),
        '은(는) 그제야 무언가 떠올렸다. 작은 ',
        urara.uma_sex_title,
        '의 한발 늦은 반응에, ',
        you.get_colored_name(),
        '은(는) 웃을 수밖에 없었다.',
      ]);
      await era.printAndWait(
        '서두를 것 없다. 정식으로 함께하기 시작한 첫날이다. 친해지는 과정이라고 생각하면 된다.',
      );
      await era.printAndWait('그래도 본업은 본업이다.');
      await era.printAndWait([
        urara.get_colored_name(),
        '와(과) 석양이 비치는 잔디밭에 나란히 앉아, ',
        you.get_colored_name(),
        '은(는) 붉게 물드는 하늘을 바라보는 작은 ',
        urara.uma_sex_title,
        '에게 물었다.',
      ]);

      era.printButton('「우라라. 1착을 하고 싶은 진짜 이유가 뭐야?」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 말만 앞서는 귀여운 ',
        urara.child_sex_title,
        '이(가) 아니다.',
        urara.sex,
        '이(가) 하는 일은 무엇이든 진심이다.',
      ]);
      await era.printAndWait([
        '타고난 재능이 없다는 것은 안다. 달리고 싶어 하는 마음도 분명히 보인다. 그런데 지금은 ',
        urara.sex,
        '의 『승리』에 대한 집착을 찾기 어려웠다.',
      ]);
      await era.printAndWait([
        '1착을 ',
        urara.uma_sex_title,
        '의 전부로 삼는 것은 권하고 싶지 않다. 그래도 『이기겠다』고 결심한 ',
        urara.uma_sex_title,
        '은(는) 대개 1위에 강한 애착을 보인다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        urara.get_colored_name(),
        '에게는 그것이 희미하다. 아니, ',
        urara.sex,
        '의 마음에는 1위보다 중요한 것이 있는지도 모른다.',
      ]);
      await era.printAndWait([
        '그렇다면 그 중요한 것은 뭘까? ',
        urara.get_colored_name(),
        '이(가) 스스로를 얼마나 이해하는지는 알 수 없다. 그래도 한번 알아보기 위해, ',
        you.get_colored_name(),
        '은(는) 정면으로 질문을 던졌다.',
      ]);
      era.printButton('「우라라는 1위가 싫어?」', 1);
      await era.input();
      await era.printAndWait([
        '어른의 질문에 대답하는 대신, 작은 ',
        urara.uma_sex_title,
        '은(는) 오히려 ',
        you.get_colored_name(),
        '에게 다른 질문을 돌려주었다.',
      ]);
      await urara.say_and_wait([callname, ', 지금 즐거워?']);
      await era.printAndWait([
        '응? 함께 놀고 나니 확실히 즐겁다. 그런데 이건……? ',
        you.get_colored_name(),
        '이(가) 대답하기 전에, 작은 ',
        urara.uma_sex_title,
        '은(는) 웃으며 말을 이었다.',
      ]);
      await urara.say_and_wait(
        '우라라가 약하다는 건 알아. 그래도 달리고 싶어! 그러니까 1착을 목표로 하는 거야!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 곁에 살짝 기대어, ',
        urara.get_colored_name(),
        '은(는) 밝게 웃었다.',
        urara.teen_sex_title,
        '의 벚꽃빛 눈동자에 포근한 노을이 비쳤다.',
      ]);
      await urara.say_and_wait(
        '1위를 많이 하고 싶지만, 소중한 걸 잊어버리면 몇 번을 해도 의미 없는걸!',
      );

      era.printButton('「달리는 이유 말이야?」', 1);
      await era.input();

      await urara.say_and_wait('응! 달려서 모두를 웃게 해 주고 싶으니까!');
      await urara.say_and_wait(
        '그래도 우라라가 트레이닝을 피하고 싶은 건 아니야! 잠깐 한눈을 팔면 트레이닝 중이라는 걸 잊어버릴 뿐이야……',
      );
      await era.printAndWait([
        '그렇구나. 「',
        urara.get_colored_actual_name(),
        '」라는 ',
        urara.uma_sex_title,
        '은(는) 생각보다 손이 많이 간다. 그래도 ',
        urara.sex,
        '은(는) 자기가 원하는 것을 잘 알고 있다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 1착에 대한 애착은 경기에서 이기는 것 자체에 있지 않다.',
      ]);
      await era.printAndWait([
        '이기고 싶지 않은 것은 아니다. 하지만 ',
        urara.get_colored_name(),
        '에게 우승은 달리는 것 자체만큼 중요하지 않다. 그것이 ',
        urara.sex,
        '의 트레이닝을 어렵게 하는 이유 중 하나였다.',
      ]);
      await era.printAndWait([
        '달리는 것은 즐거워야 한다. 그래서 특별한 재능이 없어도 ',
        urara.sex,
        '은(는) 마음 편히 웃을 수 있다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '은(는) 다른 많은 이들처럼 『자신을 증명』하거나 『흐름을 따르려는』 것이 아니라, 경기장 밖 사람들에게 더 많은 마음을 전하고 싶은 것이다.',
      ]);
      await era.printAndWait(
        '즐거움, 희망, 고민에 잠긴 낯선 사람과 처음 만났을 때의 두근거림.',
      );
      await era.printAndWait(
        '하지만 남을 향한 감정에만 치우치는 것은 『위험하다』. 담당을 승리로 이끌어야 하는 트레이너의 역할마저 뒤로 밀릴 수 있다.',
      );
      await era.printAndWait(
        '생각은 아름답다. 하지만 마음이 『단단』하지 않다면, 언젠가는 의도했든 아니든 타인의 변화에도 자신의 변화에도 상처받을 것이다.',
      );
      await era.printAndWait([
        '지금의 ',
        urara.get_colored_name(),
        '은(는) 전력을 다하지 않으면 입상조차 할 수 없다. 이대로는 계속 달릴 수 없다.',
      ]);
      await era.printAndWait([
        '쉽게 산만해지고 작심삼일로 끝나는 것도 원인이다. 게다가 ',
        urara.get_colored_name(),
        '의 경쟁심을 제대로 일깨울 필요도 있다.',
      ]);
      await era.printAndWait('그렇다면……');

      era.printButton(
        '「우라라의 생각은 알겠어. 우라라에게 맞는 트레이닝 방침을 세울게.」',
        1,
      );
      await era.input();

      await era.printAndWait(
        '역시 확실하게 가려면 처음부터 대책을 짜는 것이 가장 좋다.',
      );
      await urara.say_and_wait('만화 주인공만의 전용 필살기 같은 거야?');

      era.printButton('「맞아. 만화 주인공의 전용 필살기처럼!」', 1);
      await era.input();

      await urara.say_and_wait([
        '응! 우라라도 기대돼! ',
        callname,
        '의 말 잘 들을게!',
      ]);
      await era.printAndWait([
        callname,
        '이(가) 진지하게 엄지를 치켜세우는 것을 보고, ',
        urara.get_colored_name(),
        '도 솔직한 미소로 답했다.',
      ]);
      await era.printAndWait([
        '이렇게 허물없이 순수한 모습은 참 좋다. 하지만 ',
        urara.sex,
        '은(는) 만난 지 얼마 되지도 않은 상대를 이렇게까지 믿어도 되는 걸까.',
      ]);
      await era.printAndWait([
        '앞으로 ',
        urara.sex,
        '을(를) 챙기는 일도 일정에 넣어야 할 것 같다.',
      ]);
      await era.printAndWait([
        '계획 실행은 ',
        urara.get_colored_name(),
        '에게 또 휘둘리지만 않으면 괜찮겠지. 잘 풀리면 좋을 텐데——?',
      ]);
      await era.printAndWait([
        '思考の流れで視線が横へ寄る。濡れたジャージの上着を脱いだ小さな',
        urara.uma_sex_title,
        'が、安心して ',
        you.get_colored_name(),
        ' のそばに寄りかかっていた。',
      ]);
      await era.printAndWait([
        urara.sex,
        'の、水遊びで透けたシャツの下から、小柄ながら健康的な肉付きの体が、はっきり見えてしまう……',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'の温もりを感じるより先に、',
        you.get_colored_name(),
        ' はぞっとした。何かがおかしい。',
      ]);

      era.printButton('「ウララ、その……下着は？」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        ' の震える声に、',
        urara.get_colored_name(),
        ' はきょとんとして、服の下から色が見えている柔らかい胸元を見下ろした。',
      ]);
      await era.printAndWait([
        '首を傾げて考えたあと、小さな',
        urara.uma_sex_title,
        'はやっと何かを思い出したように目を見開き、黙り込んだ ',
        you.get_colored_name(),
        ' に、少し恥ずかしそうな笑顔を向けた。',
      ]);
      await urara.say_and_wait([
        'あっ！ ごめんね、',
        callname,
        '！ きょう出かけるとき、下着、忘れちゃった！',
      ]);
      await era.printAndWait('わ、忘れた？ それをそのまま言うのか？！');
      await urara.say_and_wait([
        'どっちも忘れちゃったみたい。えへへ……朝、キングが忘れ物しないでって言ってたのに。ごめんね！',
      ]);
      await era.printAndWait([
        'あまりに無防備な小さな',
        urara.uma_sex_title,
        'に、',
        you.get_colored_name(),
        ' は完全に言葉を失った。',
      ]);
      await era.printAndWait([
        '小さな',
        urara.uma_sex_title,
        'の、どんどん密着してくる体と、少し困った笑顔を避けながら、',
        you.get_colored_name(),
        ' は夕陽を憂い顔で見つめ、',
        urara.get_colored_name(),
        ' への心配ばかりが目に浮かんだ。',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '와(과) 함께할 앞날은 어느 방면으로든 갈 길이 멀다……',
      ]);

      if (era.get('cflag:61:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '그나저나 ',
          urara.get_colored_name(),
          '의 룸메이트로서 『엄마』 역할까지 맡는 킹 헤일로도 정말 고생이 많겠다……',
        ]);
        await era.printAndWait([
          '어쩌면 ',
          urara.sex,
          '에게서라면 ',
          urara.get_colored_name(),
          '의 트레이닝에 도움이 될 이야기를 들을 수 있을지도 모른다.',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '아무튼 작은 ',
        urara.uma_sex_title,
        '와(과) 나란히 나아가는 시간은 이제 막 흐르기 시작했다.',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');

      await inner_urara.say_as_unknown_and_wait(
        '그러면 본격적으로 『우라라』와 함께해 보니 어떠셨나요?',
      );
      era.printButton(
        `「${urara.sex}에게 걸어 볼 가치는 있어. 그게 ${urara.sex}에게 보답하고 싶은 것이기도 하고.」(호감+20)`,
        1,
      );
      era.printButton(
        '「아직 잘 모르겠지만, 무방비한 작은 동물 같아서 의외로 귀여워.」(연모+5)',
        2,
      );
      const ret = await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '그런가요. 알겠습니다. 제가 할 말은 아닐지도 모르지만, 믿어 주세요……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '무슨 일이든 처음이 힘든 법입니다. 앞으로도 ',
        urara.sex,
        '을(를) 향한 인내와 믿음을 부디 잃지 말아 주세요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '화려하지는 않더라도 정성껏 자란다면, 구석의 작은 꽃도 봄에는 피어날 수 있을 테니까요.',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_after_begin: (() => {
    const title = '우라라식 트레이닝';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {CharaTalk} spe スペシャルウィーク
     * @param {PrintedSpan} sp_call_u スペシャルウィークからハルウララへの呼び方
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} sky セイウンスカイ
     * @param {PrintedSpan} callname_20 セイウンスカイからプレイヤーへの呼び方
     * @param {PrintedSpan} sk_call_u セイウンスカイからハルウララへの呼び方
     * @param {CharaTalk} rice ライスシャワー
     * @param {PrintedSpan} ri_call_u ライスシャワーからハルウララへの呼び方
     * @param {CharaTalk} doto メイショウドトウ
     * @param {PrintedSpan} d_call_u メイショウドトウからハルウララへの呼び方
     * @param {CharaTalk} halo キングヘイロー
     * @param {PrintedSpan} h_call_u キングヘイローからハルウララへの呼び方
     * @param {CharaTalk} road ナリタトップロード
     * @param {PrintedSpan} ro_call_u ナリタトップロードからハルウララへの呼び方
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      {
        spe,
        sp_call_u,
        opera,
        sky,
        callname_20,
        sk_call_u,
        rice,
        ri_call_u,
        doto,
        d_call_u,
        halo,
        h_call_u,
        road,
        ro_call_u,
      },
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '우라라가 달리는 모습을 보며, 트레이너인 ',
        you.adult_sex_title,
        '(당신)은 아직 ',
        urara.sex,
        '만을 위한 트레이닝 계획을 생각하고 있었다.',
      ]);
      era.drawLine();
      await urara.say_and_wait(['있지, 있지!', callname, '! 저기 봐——']);

      era.printButton('「지금은 트레이닝 중이야.」', 1);
      await era.input();

      await urara.say_and_wait('미안! 그럼 한 바퀴 더 뛰고 올게!');
      await era.printAndWait([
        '담당이 다시 트레이닝에 돌아가는 것을 보며, ',
        you.get_colored_name(),
        '은(는) 작은 ',
        urara.uma_sex_title,
        '의 행동 패턴을 계속 정리했다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 트레이닝에 함께하기 시작한 지 얼마간 시간이 흐르면서, ',
        you.get_colored_name(),
        '은(는) ',
        urara.sex,
        '의 현재 모습을 만든 사정을 조금씩 파악했다.',
      ]);
      await era.printAndWait([
        '우선, ',
        urara.sex,
        '은(는) 쉽게 한눈을 판다. 집중하지 못하는 것은 ',
        urara.sex,
        '의 성격 그 자체이기도 하다. 그렇기 때문에……',
      ]);
      await urara.say_and_wait([callname, ', 여기 애들이——']);

      era.printButton('「크흠.」', 1);
      await era.input();

      await urara.say_and_wait('미안해! 난 아직 트레이닝 중이니까 이따 봐!');
      await era.printAndWait([
        '이렇게 말을 걸면 ',
        urara.sex,
        '은(는) 반성한다. 하지만 금방 주의가 흐트러져 더 재미있는 쪽에 마음을 빼앗긴다.',
      ]);
      await era.printAndWait(
        '매일 트레이닝이 끊기는 데다 경쟁심도 부족하다. 이대로는 효과가 나지 않는다.',
      );
      await era.printAndWait([
        '실제로 ',
        you.get_colored_name(),
        '이(가) ',
        urara.get_colored_name(),
        '와(과) 친한 ',
        urara.uma_sex_title,
        '들에게 묻고 다녀 보니, ',
        urara.couple_title,
        '의 대답도 비슷비슷했다.',
      ]);
      era.println();

      const buffer = gacha(
        [
          () =>
            halo.say_and_wait([
              '일류를 목표로 하는 건 좋은 일이야. 하지만 ',
              h_call_u,
              '이(가) 트레이닝을 꾸준히 못 하는 건 ',
              urara.sex,
              '자신을 위해서도 좋지 않아.',
            ]),
          () =>
            sky.say_and_wait([
              '아~ 알겠어요, 알겠어.',
              callname_20,
              ', 요즘 ',
              sk_call_u,
              '의 안 좋은 버릇 때문에 고생하시죠?',
            ]),
          () =>
            spe.say_and_wait([
              sp_call_u,
              '이(가) 가져다주는 당근은 맛있어요! 다만 누구한테까지 나눠 줬는지 자주 잊어버리더라고요.',
            ]),
          () =>
            rice.say_and_wait([
              '어?',
              ri_call_u,
              '은(는) 달리는 걸 좋아하지만……끈기가 조금 부족한 것 같기도……',
            ]),
          () =>
            road.say_and_wait([
              ro_call_u,
              '은(는) 대단해요……아무튼 대단하다니까요! 공부를 조금 어려워할 뿐이에요!',
            ]),
          () =>
            opera.say_and_wait(
              '흐음, 흐음~ 꽃은 양분을 가려 먹는 법. 하지만 봉오리로만 남아 있는 것은 망설임의 일종일지도 모르지?',
            ),
          () =>
            doto.say_and_wait([
              d_call_u,
              '은(는) 늘 제 곤란한 일을 해결해 줘요. 가끔은 더 곤란해지기도 하지만요……',
            ]),
        ],
        3,
      );
      for (const talk of buffer) {
        await talk();
      }
      era.println();

      await era.printAndWait([
        '같은 반 친구들 사이에서도 ',
        urara.get_colored_name(),
        '의 자잘한 버릇은 유명했다.',
      ]);
      await era.printAndWait([
        '이론상으로는 ',
        urara.get_colored_name(),
        '의 『재미』를 충족시키면 된다. 하지만 무엇을 넣어야 할까……',
      ]);
      await era.printAndWait([
        '상상력이 부족하다. 대책을 세우려면 먼저 자신이 더 많이 ',
        urara.get_colored_name(),
        '을(를) 알아야 한다.',
      ]);
      await era.printAndWait([
        '사들인 생필품을 봉투에 담으며, ',
        you.get_colored_name(),
        '은(는) 생각에 잠긴 채 상점가의 다음 가게로 향했다.',
      ]);
      await urara.say_and_wait([
        '앗, ',
        callname,
        '! 어서 와! 여기 엄청 맛있는 사과가 있어! 살래?',
      ]);

      era.printButton('「으, 응? 우라라? 여기서……일을 돕는 거야?」', 1);
      await era.input();

      await urara.say_and_wait('응! 시간만 나면 여기 도와주러 와! 재밌어!');
      await era.printAndWait([
        '교복 위에 앞치마를 대충 묶은 ',
        urara.get_colored_name(),
        '은(는) 활짝 웃으며 다가왔다.',
      ]);

      const relation = era.get('relation:52:0');
      if (relation > 150) {
        await urara.say_and_wait([
          callname,
          ', 먹어 볼래? 괜찮아, 가게 아저씨가 먹어도 된댔어!',
        ]);
        await era.printAndWait([
          '가장 큰 사과를 다짜고짜 ',
          you.get_colored_name(),
          '의 손에 쥐여 주었다.',
          urara.get_colored_name(),
          '은(는) 지금 먹어 보라는 모양이었다.',
        ]);
        await era.printAndWait([
          '막 씻은 사과에 물방울이 반짝였고, 매끈한 껍질에는 ',
          urara.get_colored_name(),
          '의 사과보다 더 통통한 작은 얼굴이 비쳤다.',
        ]);
        await urara.say_and_wait(
          '오늘 사과는 가게 아저씨 추천이야! 분명 달 거야, 내가 보장해!',
        );
      } else {
        await urara.say_and_wait([
          '이거라면 ',
          callname,
          '에게 싸게 해 줄 수 있어! 물론 가게 아저씨도 괜찮다고 했어!',
        ]);
        await era.printAndWait([
          '미소는 진심이었지만, ',
          urara.get_colored_name(),
          '의 말에는 아직 약간 거리감이 있었다.',
        ]);
        await era.printAndWait([
          '그래도 ',
          urara.sex,
          '은(는) 큰 사과를 꺼내 ',
          you.get_colored_name(),
          '의 손에 쥐여 주었다.',
        ]);
        await urara.say_and_wait([
          '고민되면 ',
          callname,
          '먼저 먹어 봐도 돼! 맛있으니까!',
        ]);
      }
      await you.say_as_passer_by_and_wait(
        '상점가 사람',
        '오, 어서 와! 우라라 친구야? 그렇다면 덤을 줘야겠네!',
      );
      await urara.say_and_wait([
        '그냥 친구가 아니야, 아저씨! 이쪽은 우라라 트레이너야!',
      ]);
      await you.say_as_passer_by_and_wait(
        '상점가 사람',
        '오, 트레이너구나……트레이너?! 우라라의?',
      );
      await era.printAndWait([
        '목소리를 듣고 나온 가게 아저씨는 ',
        urara.get_colored_name(),
        '의 대답에 잠시 멍해지더니 갑자기 거리로 뛰어나갔다——',
      ]);
      await era.printAndWait([
        '오 분도 지나지 않아 상점가 이웃들이 ',
        you.get_colored_name(),
        '와(과) ',
        urara.get_colored_name(),
        '의 주위를 빼곡하게 둘러쌌다.',
      ]);
      await you.say_as_passer_by_and_wait(
        '상점가 사람',
        '어머, 우라라도 드디어 계약한 트레이너가 생겼구나! 경사 났네!',
      );
      await you.say_as_passer_by_and_wait(
        '상점가 사람',
        '이제 데뷔도 안심이야. 앞으로 우라라 레이스는 다 같이 응원하러 갈게!',
      );
      await you.say_as_passer_by_and_wait('상점가 사람', [
        '트레이너 ',
        you.adult_sex_title,
        '! 이 애가 조금 덜렁거리기는 해도 ',
        urara.sex,
        '은(는) 정말 열심히 한다고!',
      ]);

      era.printButton('「네! 앞으로는 제게 맡겨 주세요!」', 1);
      await era.input();

      await era.printAndWait([
        '물결처럼 밀려오는 축하와 기대에 답하면서, ',
        you.get_colored_name(),
        '은(는) 슬쩍 옆의 ',
        urara.get_colored_name(),
        '을(를) 바라보았다——',
      ]);

      if (relation > 150) {
        await you.say_as_passer_by_and_wait(
          '상점가 사람',
          '앞날이 보장된 건 좋지만, 우라라가 속고 있는 건 아니겠지?',
        );
        await you.say_as_passer_by_and_wait(
          '상점가 사람',
          '재수 없는 소리 하지 마. 애초에 우라라가 저렇게 기뻐하잖아.',
        );
        await you.say_as_passer_by_and_wait('상점가 사람', [
          '그래도 말이야, 트레센 트레이너들은 담당 ',
          urara.uma_sex_title,
          '와(과)……그런 소문도 들리던데……',
        ]);
        await you.say_as_passer_by_and_wait(
          '상점가 사람',
          '네가 호들갑 떨 일이냐. 뭐야, 우라라한테 좋아하는 사람이 생겨도 싫다는 거야?',
        );
        await era.printAndWait('음……이럴 때는 뭐라고 해야 하나……');
      } else {
        await you.say_as_passer_by_and_wait(
          '상점가 사람',
          '우라라 앞날이 순조로우면 좋겠는데, 아무래도 그렇지만은 않은 것 같아서?',
        );
        await you.say_as_passer_by_and_wait(
          '상점가 사람',
          '듣기 싫은 소리 그만해. 우라라 트레이너한테 그런 식으로 말해서야 되겠어?',
        );
        await you.say_as_passer_by_and_wait(
          '상점가 사람',
          '그래도 우라라가 별로 기뻐 보이지 않잖아……',
        );
        await you.say_as_passer_by_and_wait('상점가 사람', [
          '무슨 소리야. 네가 매번 우라라한테 일을 잔뜩 떠넘겨서 ',
          urara.sex,
          '을(를) 지치게 만드는 거잖아?',
        ]);
        await era.printAndWait('……지금은 쓸데없는 말을 안 하는 게 좋겠다……');
      }

      await era.printAndWait([
        '이 거리 사람들은 정말로 ',
        urara.get_colored_name(),
        '을(를) 좋아하는구나.',
        urara.get_colored_name(),
        '의 강점이 어디에 있는지 조금 알 것 같았다.',
      ]);
      await era.printAndWait([
        '그 후 상점가의 가게들은 「',
        urara.get_colored_name(),
        '이(가) 신세 지고 있으니까」라며 저마다 선물을 건넸다.',
      ]);
      await you.say_and_wait('그런데 이 선물, 너무 많은 것 아닌가……?', true);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 자신이 그만한 공을 세운 기억이 없었다. 오히려 처음에 돌봐 준 건 ',
        urara.get_colored_name(),
        '쪽이다.',
      ]);
      await era.printAndWait([
        '아무리 미안해도, ',
        you.get_colored_name(),
        '은(는) 한꺼번에 안겨진 엄청난 호의를 어떻게 거절해야 할지 떠오르지 않았다.',
      ]);
      await urara.say_and_wait([callname, ', 많이 받았네! 드는 거 도와줄게!']);
      await era.printAndWait([
        '상대가 곤란해한다는 것을 알아차린 ',
        urara.get_colored_name(),
        '은(는) 도와주겠다고 말하며 ',
        you.get_colored_name(),
        '의 주위에 쌓인 짐을 하나둘 자기 몸 위에 올렸다.',
      ]);

      era.printButton('「무리하지 마! 도와주려면 이것만 들어도 돼……」', 1);
      await era.input();

      await urara.say_and_wait([
        '괜찮아, 전부 맡겨 줘! 우라라는 ',
        urara.uma_sex_title,
        '인걸……우엑, 무겁다! 그래도 힘낼게!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 제안을 웃으며 거절하고, ',
        urara.get_colored_name(),
        '은(는) 자기 몸집만 한 짐을 온 힘을 다해 짊어졌다. 그 뒤 한 걸음 한 걸음을 유난히 진지하게 내디뎠다……',
      ]);
      await you.say_and_wait('응? 잠깐, 집중하고 있잖아? 이럴 때는?', true);
      await era.printAndWait([
        '드디어 알맞은 트레이닝 방법이 떠오른 ',
        you.get_colored_name(),
        '은(는) 아직 주위에 남아 있는 상점가 사람들에게 가볍게 말을 걸었다——',
      ]);
      era.println();
      await urara.say_and_wait(
        '응! 이 사과 상자를 저쪽으로 옮기면 되지? 빠를수록 좋다는 거지? 알겠어! 그런데……',
      );

      era.printButton('「그, 그런데?」', 1);
      await era.input();

      await urara.say_and_wait(
        '무리 안 해도 돼. 짐 옮기는 건 우라라 혼자서도 괜찮아!',
      );

      era.printButton(
        '「괘, 괘, 괜찮아. 같이 돕겠다고 했잖아. 나도 아직——」',
        1,
      );
      await era.input();

      await you.say_as_passer_by_and_wait('상점가 아이들', [
        '우라라',
        urara.elder_sibling_sex_title,
        '! 늦으면 시간에 못 맞춰!',
      ]);
      await urara.say_and_wait('앗! 다들 천천히 뛰어! 안전이 제일이야!');
      await era.printAndWait([
        you.get_colored_name(),
        '의 허리가 부러질 것 같아지기 직전, 상점가 근처의 작은 ',
        urara.uma_sex_title,
        '들이 ',
        you.get_colored_name(),
        '의 곁에서 ',
        you.get_colored_name(),
        '의 짐을 나눠 가져갔다.',
      ]);
      await era.printAndWait([
        '짐 상자를 짊어진 ',
        urara.get_colored_name(),
        '은(는) 작은 ',
        urara.uma_sex_title,
        '들의 걸음에 맞춰 진지하게 달리기 시작했다.',
        you.get_colored_name(),
        '은(는) 한 차례 일을 마치고 나자 바닥에 주저앉을 지경이었다.',
      ]);
      await era.printAndWait([
        '상점가 사람들의 도움으로 ',
        urara.get_colored_name(),
        '의 자발성을 끌어내는 트레이닝이 순조롭게 시작되었다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 트레이닝이 이어지지 않는 문제는 대체로 해결되었다. 성과도 곧 보일 것이다.',
      ]);
      await era.printAndWait([
        '매일 트레이닝이 끝나고 몸이 버티지 못하는 문제는……',
        you.get_colored_name(),
        '은(는) 누군가의 체력이 아직 부족하다는 점 말고는 문제가 없다고 생각했다.',
      ]);
      await era.printAndWait(
        '——거짓말이다. 이대로 계속하면 운 좋게 입원하지 않더라도 누군가는 직접 레이스에 나갈 수 있게 될 것이다.',
      );
      await era.printAndWait([
        '하지만 ',
        urara.get_colored_name(),
        '의 경쟁심을 어떻게 키울지는 또 다른 장기 과제다.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '물론 당신은 아직 모릅니다. 이 걱정은 미래의 어떤 일을 겪고 나면 자연스럽게 풀린다는 것을——',
      );
      await inner_urara.say_as_unknown_and_wait(
        '이런 귀띔이 마음에 들지 않겠지요. 그래도 적어도 처음에는 안심하셨으면 합니다.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '당신과 우리의 이야기에는 특별한 파란이 많지 않을지도 모릅니다. 그래도 부디 끈기 있게 앞으로 나아가 주세요.',
      );
    };
    f.title = title;
    return f;
  })(),
  before_begin_race_first: (() => {
    const title = '메이크 데뷔로!';
    /**
     * ジュニア級 6月4週 メイクデビュー
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '계약을 맺은 트레이너와 함께 오랫동안 시행착오를 겪은 두 사람은 마침내 제대로 준비를 마쳤다.',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.get_colored_actual_name(),
        '이라는 이름의 작은 ',
        urara.uma_sex_title,
        '이(가) 드디어 『메이크 데뷔』에 출전한다——',
      ]);
      era.drawLine();
      await urara.say_and_wait(
        '드디어 데뷔네? 그럼 오늘도 『우라라』답게 갈게!',
      );

      era.printButton('「우라라, 힘 빼. 너무 긴장하지 마.」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '와(과) 패독 통로에 나란히 서서, ',
        you.get_colored_name(),
        '은(는) 웃고 있으면서도 몸을 떠는 ',
        urara.get_colored_name(),
        '을(를) 달랬다.',
      ]);
      await era.printAndWait([
        '트레이닝의 성과를 확인할 날이 바로 오늘이다.',
        urara.get_colored_name(),
        '도 데뷔할 『기회』가 한정되어 있다는 것을 안다. 이길 수 있느냐가 무척 중요하다.',
      ]);
      await era.printAndWait(
        '경쟁심이 싹트는 것은 좋다. 하지만 너무 흥분하면 실력을 발휘하지 못하고, 긴장 때문에 출전조차 하지 못하는 경우도 적지 않다.',
      );
      await era.printAndWait([
        '그러니 아직 데뷔도 하지 않은 담당에게 열심히 설명하는 주변 동료들처럼 하기보다는, ',
        urara.sex,
        '이(가) 즐겁게 달리도록 하는 편이 낫다.',
      ]);
      await urara.say_and_wait('응! 맞아! 에헤헤~ 나도 모르게 긴장했네!');
      await era.printAndWait([
        you.get_colored_name(),
        '의 말을 듣고 어깨의 힘을 풀었다. 아직 어색했지만, ',
        urara.get_colored_name(),
        '은(는) 귀를 쫑긋 세우고 ',
        you.get_colored_name(),
        '에게 미소를 지었다.',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait(
          '그래도 드디어 데뷔할 수 있잖아! 지금 데뷔할 수 있다는 건 대단한 일인 것 같아!',
        );
        await urara.say_and_wait([
          '데뷔하면 더 많은 레이스에 나갈 수 있어! 1위를 많이 하면 ',
          callname,
          '도, 다들 기쁘겠지!',
        ]);
        await era.printAndWait([
          '꼬리를 힘껏 흔드는 ',
          urara.get_colored_name(),
          '의 아직 앳된 목소리에는 자신을 응원해 주는 사람들을 위한 투지가 분명히 담겨 있었다.',
        ]);
        await era.printAndWait([
          '영웅물의 주인공 같다.',
          urara.get_colored_name(),
          '은(는) 정말 대단한 애다……',
        ]);
      } else {
        await urara.say_and_wait(
          '그래도 이제 곧 데뷔야! 조금 이른 것 같기도 하지만, 앞으로 나아갈 때가 된 거지!',
        );
        await urara.say_and_wait('기운 낼게! 1위를 하면 다들 웃을 수 있겠지!');
        await era.printAndWait([
          '가슴속 투지를 스스로 북돋우듯, ',
          urara.get_colored_name(),
          '은(는) 꼬리를 힘차게 흔들었고 얼굴도 더욱 진지해졌다.',
        ]);
        await era.printAndWait([
          '자신감은 부족해도 자신을 챙겨 주는 모두를 위해 전력을 다한다.',
          urara.get_colored_name(),
          '은(는) 정말 착한 애다……',
        ]);
      }
      era.println();
      await urara.say_and_wait([
        '그리고 있지, 전보다 강해진 것 같아!',
        callname,
        '의 방법은 정말 효과가 좋아!',
      ]);
      await urara.say_and_wait(['아직 잘 모르겠지만, ', callname, '의 몸도——']);

      era.printButton(
        `「괜찮아. 몇 번이나 말했잖아? ${callname}은(는) 멀쩡해!」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '어? 정말? 그럼 ',
        callname,
        '도 힘 빼, 알겠지?',
      ]);

      era.printButton('「정말이야! 우라라는 안심해도 돼!」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '와(과) 레이스 전 잡담을 나누는 사이, ',
        urara.get_colored_name(),
        '의 긴장한 표정이 조금씩 풀렸다.',
      ]);
      await era.printAndWait([
        '이제 괜찮겠지. 아직도 심하게 떨리는 두 다리를 살짝 누르며, ',
        you.get_colored_name(),
        '은(는) 서 있기만 해도 힘든 몸의 자세를 바꿨다.',
      ]);
      await era.printAndWait(
        '지금도 온몸이 죽을 만큼 아프다. 그래도 노력이 헛되지 않았다면, 조금 고생한 보람은 있다.',
      );
      await era.printAndWait([
        '호흡을 가다듬고 체육복과 번호표를 고쳐 매고, ',
        urara.get_colored_name(),
        '은(는) 입장을 안내하는 장내 방송에 맞춰 한 걸음 앞으로 나섰다.',
      ]);

      era.printButton('「첫 무대야. 준비됐어?」', 1);
      await era.input();

      await urara.say_and_wait(
        '응! 오늘은 꼭 1착 할 것 같아! 아니, 꼭 이길 거야!',
      );
      await urara.say_and_wait([
        '그럼 출발! 질문!',
        callname,
        ', 우라라는 어떻게 달리면 돼——?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 빛을 받은 미소에, ',
        you.get_colored_name(),
        '은(는) 힘차게 대답했다.',
      ]);

      era.printButton('「어떻게 되든 즐겁게 달려——!」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '괜찮을까?';
    /**
     * 以降のメイクデビューと未勝利戦
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '우라라가 여기까지 온 것은 의외가 아니다. 그래도 마음으로 받아들이기는 쉽지 않다. 어느 모로 보나.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '당신도 ',
        urara.sex,
        '도 괜찮으신가요? 이야기가 이렇게 쉽게 끝나는 건, 저는 받아들일 수 없어요.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '곁의 담당을 걱정스럽게 바라보며, ',
        you.get_colored_name(),
        '은(는) 어떻게 말을 꺼내야 할지 고민했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 알고 있었다. 지금의 ',
        urara.get_colored_name(),
        '에게는 겉으로 보이는 만큼 여유가 없을 것이다. 하지만 데뷔를 택한 이상 눈앞의 장애물을 넘어야 한다.',
      ]);
      await era.printAndWait([
        '이대로 이기지 못하면 무엇이 기다리고 있는지 ',
        urara.sex,
        '에게 직접 말해야 할까. 역시 입이 떨어지지 않았다.',
      ]);
      await era.printAndWait([
        '게다가 지금 말하기에는 너무 늦었다.',
        urara.get_colored_name(),
        '이(가) 진작 눈치챘다고 해도, 지금 분명하게 말하면 부담만 더할 것이다.',
      ]);
      await era.printAndWait([
        '결국 할 수 있는 말은 ',
        urara.sex,
        '에게 평소처럼 즐겁게 달려 달라는 정도뿐이다. 하지만 그러면……',
      ]);
      await urara.say_and_wait([
        callname,
        ', 우라라는 걱정하지 마. 어떻게 달리면 되는지 알아!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 망설임을 알아챈 것인지, ',
        urara.get_colored_name(),
        '은(는) 곁의 ',
        you.get_colored_name(),
        '에게 다정하게 웃었다. 마치 ',
        urara.sex,
        '이(가) 담당을 배웅하는 트레이너인 것처럼.',
      ]);
      await urara.say_and_wait([
        callname,
        '은(는) 대단하니까! 그러니까 우라라는 꼭 잘할 수 있어!',
      ]);

      era.printButton('「……즐겁게 달리는 거지?」', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          '응! 결과가 어떻든 우라라는 달리기를 그만두지 않을 거야! 그러니까 ',
          callname,
          ', 걱정하지 마!',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 말에 답하며, ',
          urara.get_colored_name(),
          '은(는) 안심시키는 듯한 미소를 보였다.',
        ]);
        await urara.say_and_wait([
          '에헤헤~',
          callname,
          ', 우라라가 한 말을 기억하는구나. 역시 ',
          callname,
          ', 대단해!',
        ]);
        await era.printAndWait([
          '그래. 지금 걱정해 봐야 소용없다. 이따 달리는 일은 ',
          urara.get_colored_name(),
          '에게 맡기면 된다.',
        ]);
      } else {
        await urara.say_and_wait(
          '응! 그러니까 또 져도 우라라는 계속 달릴 거야!',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '쪽을 보고 있지는 않았지만, ',
          urara.get_colored_name(),
          '의 얼굴에는 그래도 미소가 떠올라 있었다.',
        ]);
        await urara.say_and_wait('그러니까 이제 열심히 달리기만 하면 돼!');
        await era.printAndWait([
          '그래, ',
          urara.get_colored_name(),
          '은(는) 이렇게나 강한 ',
          urara.uma_sex_title,
          '이다. 걱정해야 할 것은 ',
          urara.sex,
          '을(를) 온전히 믿지 못하는 자신 쪽이겠지……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '심호흡으로 마음을 가라앉히고, ',
        you.get_colored_name(),
        '도 ',
        urara.get_colored_name(),
        '와(과) 함께 웃었다. 굳이 말하자면 자조에 가까웠다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 레이스인데 자기가 달리기라도 하는 것처럼 굴었다. 방금까지 ',
        urara.get_colored_name(),
        '을(를) 어떻게 위로할지 생각했는데, 정작 위로받은 것은 자신이었다.',
      ]);
      await era.printAndWait([
        '그래도 ',
        you.get_colored_name(),
        '은(는) 깨달았다. 지금 망설일 필요는 없다.',
        urara.get_colored_name(),
        '은(는) 반드시 앞으로 나아갈 것이다.',
      ]);
      await era.printAndWait([
        '주변 트레이너와 담당들처럼 길게 대화를 나누지 않고, ',
        you.get_colored_name(),
        '은(는) 곁에 기대는 작은 ',
        urara.uma_sex_title,
        '와(과) 조용히 기다렸다. 입장을 알리는 방송이 나올 때까지 그 자리에 있었다.',
      ]);
      await urara.say_and_wait(['시간이야, ', callname, '! 다녀올게!']);

      era.printButton('「이번에야말로 그토록 바라던 1착을 해내!」', 1);
      await era.input();

      await urara.say_and_wait('응! 꼭 해낼게!');
      await era.printAndWait([
        '짧고 힘찬 대답을 남긴 뒤, 통로 밖의 햇살을 받으며 ',
        urara.get_colored_name(),
        '은(는) 다시 웃는 얼굴로 레이스장에 향했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  begin_race_win_first: (() => {
    const title = '첫 승리!';
    /**
     * ジュニア級 6月4週 メイクデビュー勝利
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        '이제 막 데뷔했을 뿐인데도 참 힘들었다.',
        urara.get_colored_actual_name(),
        '이라는 이름의 작은 ',
        urara.uma_sex_title,
        '이(가) 1위를 차지했다——',
      ]);
      era.drawLine();
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 골인한 순간, ',
        you.get_colored_name(),
        '은(는) 몸이 아픈 것도 잊고 벌떡 일어나 관중석 맨 앞으로 달려갔다.',
      ]);
      await era.printAndWait(
        '가슴을 짓누르던 돌덩이가 내려갔다. 근육통도, 1착이 확정될 때까지의 긴장도 담당이 가까워질수록 녹아내렸다.',
      );
      await era.printAndWait([
        '張りつめていた気が緩むと、',
        urara.get_colored_name(),
        ' を思いきり揉みくちゃにしたい気持ちも、抑えから解放された。',
      ]);
      await era.printAndWait([
        '周囲の目も構わず、祝福のついでに、',
        you.get_colored_name(),
        ' は手を伸ばして ',
        urara.get_colored_name(),
        ' の柔らかい頬と耳に触れた。',
      ]);
      await era.printAndWait([
        '汗で濡れた体操服から',
        urara.teen_sex_title,
        'の香りがする。初対面のときと違い、今日の香りには勝利の花の匂いも混じっていた。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' に揉まれながら、',
        urara.get_colored_name(),
        ' も小動物のように小さな手で ',
        you.get_colored_name(),
        ' をそっと掴む。汗に濡れた人形のような顔に、薄い赤みが差した。',
      ]);
      await era.printAndWait([
        'できれば今すぐこの柔らかい子を抱き上げて吸い付きたいくらいだ。だが残っていた理性が、間に合って ',
        you.get_colored_name(),
        ' を引き止めた。',
      ]);
      await you.say_and_wait(
        '역시 피로가 몰려오는 걸까. 그나저나 머리가 조금 어지럽다……',
        true,
      );
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          '에헤헤~',
          callname,
          ', 이제 그만 만져! 간지러워!',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 지나치게 들뜬 두 손을 쑥스러운 듯 떼어 내며, ',
          urara.get_colored_name(),
          '은(는) 꼬리를 세차게 흔들고 진심 어린 기쁨으로 활짝 웃었다.',
        ]);
        await urara.say_and_wait([
          '오늘 우라라는 1위야! 앞에 아무도 없는 건 처음 봤어! 위너스 서클에 서는 것도 처음이야!',
        ]);
      } else {
        await urara.say_and_wait([callname, '! 안 돼! 다들 보고 있잖아!']);
        await era.printAndWait([
          '쑥스러운 듯 입술을 삐죽이고, 아직도 볼을 만지는 ',
          you.get_colored_name(),
          '의 손을 털어 내자 ',
          urara.get_colored_name(),
          '의 부끄러워하던 얼굴에 마침내 미소가 피었다.',
        ]);
        await urara.say_and_wait([
          '에헤헤. 그래도 고마워, ',
          callname,
          '! 오늘 우라라는 정말 1위야~!',
        ]);
      }
      era.println();
      era.printButton(
        '「1착 해 본 기분은 어때? 앞에 펼쳐진 풍경이 멋지지?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '응! 상상했던 것보다 훨씬 즐거워! 더 많이 1위 하고 싶어!',
      );
      await urara.say_and_wait(
        '앞으로 더 많은 레이스에 나가는 거지? 우라라, 더 힘낼게!',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '의 승부욕은 이미 싹트기 시작했다. 이대로 계속하면 언젠가 크게 달라질 계기를 만날 수 있을 것이다.',
      ]);
      await era.printAndWait([
        '그렇게 되면 경기장 밖의 모두뿐 아니라, ',
        urara.sex,
        '자신도 다른 이들과 경쟁하면서 레이스 안에서 좇고 싶은 바람을 찾을 수 있을 것이다.',
      ]);
      await era.printAndWait([
        '왠지 조금 저릿한 관자놀이를 주무르면서, ',
        you.get_colored_name(),
        '은(는) 트레이너로서 계속 생각했다.',
      ]);
      await era.printAndWait(
        '앞으로 실력을 키우려면 우선 출전 경험을 쌓는 것을 목표 중 하나로 삼아도 나쁘지 않다.',
      );

      era.printButton('「좋아! 앞으로 레이스가 더 많아질 거야. 괜찮겠어?」', 1);
      await era.input();

      await urara.say_and_wait(['좋아——! 응?', callname, ', 저기!']);

      era.printButton('「왜 그래?」', 1);
      await era.input();

      await urara.say_and_wait('상점가 사람들이 왔어!');
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 바라보는 곳으로 눈길을 돌리자, 평소 작은 ',
        urara.uma_sex_title,
        '와(과) 친하게 지내던 상점가 사람들이 전부 모여 있었다.',
      ]);
      await era.printAndWait(
        '상점가 사람 「우라라가 이쪽을 봤다! 다들 준비——!」',
      );
      await era.printAndWait('상점가 사람들 「우라라! 데뷔 축하해!」');
      await era.printAndWait(
        '축하하는 목소리가 겹치는 가운데, 상점가 사람들은 바람을 받으며 『우라라, 데뷔 축하해』라고 적힌 현수막을 펼쳤다.',
      );
      await era.printAndWait(
        '상점가 사람 「우라라! 데뷔도 1위도 정말 잘했다!」',
      );
      await era.printAndWait(
        '상점가 사람 「앞으로도 마음껏 달려! 우리도 계속 응원할 테니까!」',
      );
      await era.printAndWait([
        '데뷔했을 뿐인데 축제라도 열린 것처럼 들떠 있었다.',
        urara.get_colored_name(),
        '을(를) 아끼는 마음은 알고 있었지만, ',
        you.get_colored_name(),
        '은(는) 깜짝 놀랐다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 눈에 들어갈 듯한 『땀』을 살짝 닦고, 웃으며 모두에게 온 힘을 다해 답했다.',
      ]);
      await urara.say_and_wait(
        '다들 고마워! 앞으로 우라라는 계속, 계속 달릴 거야!',
      );
      await era.printAndWait('상점가 사람들 「그래! 힘내라——!」');
      await era.printAndWait(
        '상점가 사람 「앞으로 우라라를 부탁한다! 트레이너도 힘내!」',
      );
      await era.printAndWait([
        '갑자기 모두의 축하에 둘러싸인 ',
        you.get_colored_name(),
        '은(는) 놀란 듯 그 자리에 굳어 버렸다.',
      ]);
      await era.printAndWait(
        '아니, 정말 놀란 것일지도 모른다. 생각해 보면 예전에 이런 기대를 받아 본 적이 있었던가.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 당황한 기색을 금방 알아차린 ',
        urara.get_colored_name(),
        '은(는) 웃으며 ',
        you.get_colored_name(),
        '의 손을 잡고 ',
        you.get_colored_name(),
        '을(를) 격려하기 시작했다.',
      ]);
      await urara.say_and_wait([callname, '! 이참에 다들한테 한마디 하자!']);
      era.printButton('「어? 아? 내가? 그런데 무슨 말을……」', 1);
      await era.input();

      await urara.say_and_wait(
        '괜찮아! 마음속에 있는 걸 힘껏 외치면 돼! 힘내!',
      );
      await era.printAndWait([
        '그렇다면 모두의 기대에 답하지 않을 수 없다.',
        urara.get_colored_name(),
        '의 반짝이는 시선을 받으며, ',
        you.get_colored_name(),
        '은(는) 숨을 깊이 들이쉬었다——',
      ]);
      await era.printAndWait([
        '하지만 첫마디조차 나오기 전에 너무 힘을 준 탓에 머릿속 마지막 의식이 끊기고, ',
        you.get_colored_name(),
        '은(는) 앞으로 고꾸라졌다.',
      ]);
      await urara.say_and_wait([
        '응?',
        callname,
        ', 왜 그래……어? 어어!',
        callname,
        '！',
        callname,
        '——',
      ]);
      await era.printAndWait([
        '전하지 못한 감사를 품은 채, ',
        urara.get_colored_name(),
        '와(과) 주변 사람들의 비명 속에서 체력을 다 써 버린 ',
        you.get_colored_name(),
        '은(는) 또 눈이 핑 돌아 쓰러졌다.',
      ]);
      await era.printAndWait([
        '젠장, 감동적인 장면이었는데 왜 이래. 스스로도 웃음을 참지 못하며, ',
        you.get_colored_name(),
        '은(는) 웃는 얼굴 그대로 눈을 감았다……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('스으……');
      await inner_urara.say_as_unknown_and_wait(
        '……그러니까. 메이크 데뷔, 수고하셨나요?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '결국 체력만으로는 해결할 수 없네요. 앞으로도 몸조심해 주세요……',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_lose_first: (() => {
    const title = '앞으로 나아가자!';
    /**
     * ジュニア級 6月4週 メイクデビュー敗北
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '예상했던 일이 결국 일어났습니다. 낙담하지 마세요. 당신이라면 다음에는……',
      );
      era.drawLine();
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 1착을 하지는 못했지만, 예상한 만큼 성장했다.',
        you.get_colored_name(),
        '은(는) 조금 어깨의 힘을 풀었고, 쌓였던 피로도 가벼워졌다.',
      ]);
      await era.printAndWait(
        '모두의 노력에 성과가 보인다. 시작은 힘들어도 나쁘지 않은 출발이다.',
      );
      await era.printAndWait([
        '오래 긴장한 탓에 머리는 아직 아프지만, ',
        urara.get_colored_name(),
        '의 데뷔에 비하면 아무것도 아니다.',
      ]);
      await era.printAndWait([
        '코스 옆에서 땀을 닦는 ',
        urara.get_colored_name(),
        '을(를) 보고, ',
        you.get_colored_name(),
        '은(는) 천천히 일어나 인파를 피해 앞줄의 ',
        urara.get_colored_name(),
        '에게 가장 가까운 자리로 향했다.',
      ]);

      era.printButton('「수고했어. 데뷔 첫 경기는 어땠어?」', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 손을 흔드는 것을 보고, ',
          urara.get_colored_name(),
          '은(는) 기운을 차려 평소처럼 웃으며 달려왔다.',
        ]);
        await urara.say_and_wait([
          '고마워, ',
          callname,
          '! 그리고 그렇게 힘들지는 않았어! 달리는 건 역시 재밌으니까!',
        ]);
        await urara.say_and_wait(
          '그런데 1위는 못 했네……그래도 끝까지 잘 달렸어!',
        );
        await era.printAndWait([
          '목소리에는 아쉬움이 남았다. 그래도 ',
          urara.get_colored_name(),
          '은(는) 바로 다음 순간 스스로 풀이 죽은 마음을 떨쳐 냈다.',
        ]);
        await urara.say_and_wait([
          callname,
          '! 앞으로 1위를 하면 더 많은 레이스에 나갈 수 있지?',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '의 모습을 보고, ',
          urara.get_colored_name(),
          '은(는) 얼굴의 짭짤한 물방울을 닦으며 ',
          you.get_colored_name(),
          '의 곁으로 달려왔다.',
        ]);
        await urara.say_and_wait([
          '고마워, ',
          callname,
          '. 그래도 그렇게 힘들지는 않았어. 달리는 건 역시 재밌어!',
        ]);
        await urara.say_and_wait(
          '다만……1위는 못 했네……그래도 이번에는 끝까지 잘 달렸어!',
        );
        await era.printAndWait([
          '목소리에는 아쉬움이 남았다. 그래도 ',
          urara.get_colored_name(),
          '은(는) 바로 다음 순간 스스로 미소를 되찾았다.',
        ]);
        await urara.say_and_wait(
          '계속 달리고 싶어! 그러니까 데뷔도 했으니 앞으로 1착 할 수 있겠지?',
        );
      }
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        '의 승부욕은 이미 싹트기 시작했다. 이대로 계속하면 언젠가 크게 달라질 계기를 만날 수 있을 것이다.',
      ]);
      await era.printAndWait([
        '그렇게 되면 경기장 밖의 모두뿐 아니라, ',
        urara.sex,
        '자신도 다른 이들과 경쟁하면서 레이스 안에서 좇고 싶은 바람을 찾을 수 있을 것이다.',
      ]);
      await era.printAndWait([
        '아직 둔하게 아픈 관자놀이를 주무르면서, ',
        you.get_colored_name(),
        '은(는) 트레이너로서 계속 생각했다.',
      ]);
      await era.printAndWait(
        '다만 앞으로 더 많은 레이스에 나가려면 우선 첫 승리를 빨리 거두는 편이 좋다.',
      );

      era.printButton('「좋아! 새로운 특훈이 시작될 거야. 괜찮겠어?」', 1);
      await era.input();

      await urara.say_and_wait(['좋아——! 응?', callname, ', 저기!']);

      era.printButton('「왜 그래?」', 1);
      await era.input();

      await urara.say_and_wait('상점가 사람들이 왔어!');
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 바라보는 곳으로 눈길을 돌리자, 평소 작은 ',
        urara.uma_sex_title,
        '와(과) 친하게 지내던 상점가 사람들이 전부 모여 있었다.',
      ]);
      await era.printAndWait(
        '상점가 사람 「우라라! 1위가 아니어도 대단했어!」',
      );
      await era.printAndWait(
        '상점가 사람 「앞으로도 마음껏 달려! 우리도 계속 응원할 테니까!」',
      );
      await era.printAndWait(
        '데뷔했을 뿐이고 1착조차 하지 못했는데도, 다들 축제처럼 들떠 있었다.',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 눈에 들어갈 듯한 『땀』을 살짝 닦고, 웃으며 모두에게 온 힘을 다해 답했다.',
      ]);
      await urara.say_and_wait(
        '다들 고마워! 다음에는 꼭 빨리 1착 하는 모습 보여 줄게!',
      );
      await era.printAndWait('상점가 사람들 「그래! 힘내라——!」');
      await era.printAndWait(
        '상점가 사람 「트레이너도 수고했어! 우라라를 돌봐 줘서 고마워!」',
      );
      await era.printAndWait([
        '갑자기 모두의 축하에 둘러싸인 ',
        you.get_colored_name(),
        '은(는) 놀란 듯 그 자리에 굳어 버렸다.',
      ]);
      await era.printAndWait(
        '아니, 정말 놀란 것일지도 모른다. 생각해 보면 예전에 이런 기대를 받아 본 적이 있었던가.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 당황한 기색을 금방 알아차린 ',
        urara.get_colored_name(),
        '은(는) 웃으며 ',
        you.get_colored_name(),
        '의 손을 잡고 ',
        you.get_colored_name(),
        '을(를) 격려하기 시작했다.',
      ]);
      await urara.say_and_wait([callname, '! 이참에 다들한테 한마디 하자!']);
      era.printButton('「어? 내가? 하지만 나도 딱히……」', 1);
      await era.input();

      await urara.say_and_wait([
        '괜찮아! 다음에는 꼭 할 수 있으니까, ',
        callname,
        ', 지금 마음속에 있는 걸 외쳐 봐!',
      ]);
      await era.printAndWait([
        '그렇다면 모두의 기대에 답하지 않을 수 없다.',
        urara.get_colored_name(),
        '의 반짝이는 시선을 받으며, ',
        you.get_colored_name(),
        '은(는) 숨을 깊이 들이쉬었다——',
      ]);
      await era.printAndWait([
        '하지만 첫마디조차 나오기 전에 너무 힘을 준 탓에 머릿속 마지막 의식이 끊기고, ',
        you.get_colored_name(),
        '은(는) 앞으로 고꾸라졌다.',
      ]);
      await urara.say_and_wait([
        '응?',
        callname,
        ', 왜 그래……어? 어어!',
        callname,
        '！',
        callname,
        '——',
      ]);
      await era.printAndWait([
        '전하지 못한 감사를 품은 채, ',
        urara.get_colored_name(),
        '와(과) 주변 사람들의 비명 속에서 체력을 다 써 버린 ',
        you.get_colored_name(),
        '은(는) 눈이 핑 돌아 쓰러졌다……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '후우. 우라라의 데뷔에 함께하는 것도 힘들었네요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '부디 몸조심해 주세요. 우라라가 1착 하기 전에 트레이너가 먼저 쓰러지면 안 되잖아요……',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '드디어, 처음으로……';
    /**
     * 以降のメイクデビューと未勝利戦の勝利
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '어쨌든 조마조마하던 마음도 첫 승리로 마침내 조금 쉴 수 있게 되었네요.',
      );
      era.drawLine();
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 가장 먼저 결승선을 통과하는 것을 보고, ',
        you.get_colored_name(),
        '도 뻣뻣한 두 어깨를 주무르며 자리에서 일어났다.',
      ]);
      await era.printAndWait(
        '몸은 아직 무겁다. 하지만 지난번보다는 가볍다. 담당이 무사히 1착을 하고 나니 한층 더 몸이 가벼워졌다.',
      );
      await era.printAndWait([
        '적어도 이번에는 사람들 앞에서 쉽게 쓰러지지 않을 것이다. 멀리서 달려오는 작은 모습을 보고, ',
        you.get_colored_name(),
        '은(는) 그 분홍빛을 향해 손을 들었다.',
      ]);
      await era.printAndWait([
        '땀에 젖은 체육복에서 ',
        urara.teen_sex_title,
        '의 향기가 났다.',
        you.get_colored_name(),
        '의 부름을 알아채고 반대편에서 달려온 작은 ',
        urara.uma_sex_title,
        '은(는) 의기양양한 미소를 띤 채 ',
        you.get_colored_name(),
        '의 앞에 멈춰 섰다.',
      ]);
      await urara.say_and_wait(['우와——! 1위!', callname, '! 1위 했어——!']);
      await urara.say_and_wait(
        '앗, 큰일이다! 위너스 서클에 들어와 버렸어. 괜찮으려나……',
      );

      era.printButton('「아니, 진정해 우라라. 네가 1착이야.」', 1);
      await era.input();

      era.println();
      if (high_relation) {
        await era.printAndWait([
          '작은 ',
          urara.uma_sex_title,
          '의 볼을 주물러 주면서, ',
          you.get_colored_name(),
          '은(는) 웃으며 첫 승리에 지나치게 들뜬 담당을 달랬다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 손길이 좋은 것인지, 볼을 만져 주자 조금씩 차분해진 ',
          urara.get_colored_name(),
          '도 기분 좋은 표정을 지었다.',
        ]);
        await urara.say_and_wait(
          '아, 정말이네! 우라라는 이제 예전의 우라라가 아니구나~',
        );
        await urara.say_and_wait([
          callname,
          ', 봤어? 방금 정말 맨 먼저 결승선을 통과했어!',
        ]);
      } else {
        await era.printAndWait([
          '숨을 몰아쉬는 작은 ',
          urara.uma_sex_title,
          '에게 수건과 스포츠음료를 건네며, ',
          you.get_colored_name(),
          '은(는) 아직도 휘청이는 담당에게 조용히 말을 걸었다.',
        ]);
        await era.printAndWait([
          '볼을 두드리고 물과 수건을 받아 든 뒤, ',
          urara.get_colored_name(),
          '은(는) 마침내 ',
          you.get_colored_name(),
          '에게 마음의 짐을 내려놓은 미소를 지었다.',
        ]);
        await urara.say_and_wait(
          '아, 정말이네! 이번엔 우라라가 정말 이긴 것 같아!',
        );
        await urara.say_and_wait([
          '엄청 피곤하지만, ',
          callname,
          ', 방금 정말 맨 먼저 들어온 거야?',
        ]);
      }

      era.printButton('「물론이지! 나뿐 아니라 보러 온 사람들도 다 봤어!」', 1);
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '이(가) 가리키는 곳을 보았다. 약속대로 상점가 사람들이 다시 응원 현수막을 펼치고 있었다.',
      ]);
      await era.printAndWait([
        '『우라라, 1위 축하해』. 아직 그날이 오기도 전에 ',
        urara.get_colored_name(),
        '의 승리를 믿고 다들 미리 이 현수막을 만들어 둔 것이다.',
      ]);
      await era.printAndWait([
        '계속 응원해 준 사람들을 향해 힘껏 손을 흔들었다.',
        urara.get_colored_name(),
        '의 미소는 그 어느 때보다 빛나 보였다.',
      ]);
      await era.printAndWait([
        '데뷔 후 첫 승리에 불과하더라도, ',
        urara.get_colored_name(),
        '와(과), ',
        urara.sex,
        '을(를) 응원하는 모두에게는 기념할 만한 경험이다.',
      ]);
      await era.printAndWait([
        '눈앞의 광경을 보며 드디어 궤도에 올랐다고 느낀 ',
        you.get_colored_name(),
        '도 마침내 눈을 감고 한숨 돌릴 수 있었다.',
      ]);
      await era.printAndWait([
        '선수 통로로 돌아와서도, ',
        urara.get_colored_name(),
        '은(는) 여전히 신이 나서 ',
        you.get_colored_name(),
        '에게 여러 가지 『처음』을 이야기했다.',
      ]);

      era.printButton('「우라라. 처음으로 맨 앞에 서 보니 역시 멋졌어?」', 1);
      await era.input();

      await urara.say_and_wait(
        '응! 맨 앞에서 달릴 때 보이는 풍경이 생각보다 멋졌어!',
      );
      await urara.say_and_wait(
        '선두의 바람은 엄청 세! 그래도 앞으로 달리면 바람이 저절로 길을 열어 주는 것 같아!',
      );
      await urara.say_and_wait(
        '그리고……1위 하는 건 역시 재밌어! 다들 웃는 얼굴을 보는 것도 재밌고!',
      );

      era.printButton('「그럼 다음 승리를 위해 다시 한번 해 보자.」', 1);
      await era.input();

      await urara.say_and_wait('응! 꼭 다시 1위 할게!');
      await urara.say_and_wait([
        callname,
        '! 앞으로도 이렇게 함께라면 더 멀리 갈 수 있을 거야!',
      ]);
      await era.printAndWait([
        '작은 담당이 내민 손을 잡았다.',
        urara.get_colored_name(),
        '와(과) ',
        you.get_colored_name(),
        '의 앞날은 이제 막 시작되었다.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '그렇게 된 것입니다. 메이크 데뷔, 수고하셨어요. 저도 조금 안심했어요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '당신은 어떠셨나요? 그럼 준비되셨나요? 우라라와 함께 걸어갈 나날을 맞이할 준비가.',
      );
    };
    f.title = title;
    return f;
  })(),
  os_34: (() => {
    const title = '모두가 좋아하는 미소?';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '오늘 어떤 행사의 시범 경주에 나선 우라라는, 또다시 의외이면서도 예상대로인 패배를 맛보았다.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '흔히 있는 전개입니다. 다만 트레이너인 ',
        you.adult_sex_title,
        '(당신)은 꽤 골머리를 앓고 있습니다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '왜일까요? 돌아가는 길에 답을 찾느라 넋을 놓는 사람도 있겠지요. 하지만……',
      );
      era.drawLine();
      await era.printAndWait([
        '실전에서는 이길 수 있는데, 왜 시범 경주에서는 다시 꼴찌가 되는 걸까.',
        urara.get_colored_name(),
        '은(는) 대충 하고 마는 ',
        urara.uma_sex_title,
        '이(가) 아니다.',
      ]);
      await era.printAndWait([
        '상대가 너무 강했을 수도 있다. 하지만 지금의 ',
        urara.get_colored_name(),
        '이라면 맨 뒤에서 크게 뒤처질 정도는 아닐 것이다.',
      ]);
      await era.printAndWait(
        '실전과 집중하는 정도가 다르다는 심리적 요인 외에도, 아직 경쟁심이 부족한 걸까. 그렇다면……',
      );
      await era.printAndWait([
        '드물게도 곁에 있는 담당의 얼굴을 보지 않은 채, ',
        you.get_colored_name(),
        '은(는) 시선과 생각을 더 멀리 있는 인파로 던졌다.',
      ]);
      await era.printAndWait([
        '몇 번을 져도 ',
        urara.get_colored_name(),
        '은(는) 낙관적인 태도를 유지한다. 그것이 전부 좋은 점은 아닐 것이다. 오히려 다른 위험도 있다.',
      ]);
      await urara.say_and_wait('계속 열심히 하면 다음엔 꼭 만회할 수 있어!');
      await era.printAndWait([
        '오늘의 레이스에 대해 ',
        urara.sex,
        '은(는) ',
        you.get_colored_name(),
        '에게 그렇게 말했다. 예전에 ',
        urara.sex,
        '의 친구들에게 들은 바로도, 질 때마다 늘 그랬다고 한다.',
      ]);
      await era.printAndWait([
        '다음에는 꼭 이긴다. 그건 누구를 위로하는 말일까. 이런 생각이 ',
        urara.get_colored_name(),
        '을(를) 자신의 편견으로 판단하려는 것은 아니다.',
      ]);
      await era.printAndWait([
        '레이스를 좀 더 일반적인 관점에서 보는 ',
        you.get_colored_name(),
        '의 마음은 차분하다. 하지만 다음엔 이긴다고 말하는 ',
        urara.get_colored_name(),
        '은(는) 정말 겉으로 보이는 것처럼 즐거운 걸까.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 작은 손을 잡고 인파 속을 걸으며, ',
        you.get_colored_name(),
        '은(는) 언젠가는 마주해야 할 질문을 생각했다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 언제까지나 밝고 긍정적으로 노력하며 계속 이겼으면 한다. 하지만 ',
        urara.sex,
        '와(과) 서로를 더 빨리 깊이 이해하려면 어떻게 해야 할까.',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          '길 안 잃어버려. 늘 이렇게 손잡고 있잖아?',
          callname,
          ', 그렇게 꽉 안 잡아도 돼!',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 곁에 바짝 붙어, ',
          urara.get_colored_name(),
          '은(는) 웃으며 ',
          you.get_colored_name(),
          '의 손가락을 살며시 맞잡았다.',
        ]);
        await urara.say_and_wait([
          '그리고 있지, 웃는 게 ',
          callname,
          '에게 더 어울리는 것 같아. 그러니까 인상 쓰면서 생각하지 마!',
        ]);
        await era.printAndWait([
          '담당의 미소를 보며, ',
          you.get_colored_name(),
          '은(는) 미간과 손가락의 힘을 풀고 ',
          urara.get_colored_name(),
          '에게도 미안한 듯 웃어 보였다.',
        ]);
        await era.printAndWait([
          '맞는 말이다. 무심코 잊고 있었다. 자신이 짊어질 일만 생각하느라, 가장 중요한 ',
          urara.sex,
          '본인이 곁에 있다는 사실을 잊을 뻔했다.',
        ]);
        await era.printAndWait(
          '언제부터였을까. 둘이서 걸을 때는 어디서든 자연스럽고 즐겁게 손을 잡게 되었다.',
        );
      } else {
        await urara.say_and_wait([
          callname,
          '? 너무 힘줬어. 우라라도 손이 아플 정도야!',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '에게 잡힌 손을 당기는 ',
          urara.get_colored_name(),
          '의 미소가 조금 억지스러워 보였다.',
        ]);
        await urara.say_and_wait(
          '길에 사람 많잖아? 조심하지 않으면 위험해. 즐겁게 돌아가는 게 좋겠지?',
        );
        await era.printAndWait([
          '불평 같으면서도 다정한 담당의 주의에 정신을 차린 ',
          you.get_colored_name(),
          '은(는) 황급히 몸의 힘을 풀었다.',
        ]);
        await era.printAndWait([
          '언제부터였을까. 마음이 흔들려도 ',
          urara.get_colored_name(),
          '은(는) 늘 자연스럽게 ',
          you.get_colored_name(),
          '의 손을 잡는다.',
        ]);
        await era.printAndWait([
          'いまの',
          urara.sex,
          'は、',
          you.get_colored_name(),
          ' にどんな気持ちを持っているのか。それとも',
          urara.sex,
          'は、まだ異性としての認識が足りないのか……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '多くの目には、保護者が子供の手を引いているだけに見えるだろう。だが ',
        you.get_colored_name(),
        ' には、別の意味がある。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' は ',
        urara.get_colored_name(),
        ' に心を動かされ、惹かれて、',
        urara.sex,
        'のトレーナーになった。だが今は',
        urara.sex,
        'と触れるたび、',
        you.get_colored_name(),
        ' の理性が削れていくようだ。',
      ]);
      await era.printAndWait([
        urara.sex,
        'とは自然に甘え、自然に抱き合う。その一方で、',
        urara.sex,
        'の無邪気で幼い体へ、自然に「興味」が生まれつつある。',
      ]);
      await era.printAndWait(
        'このままでは、大人としての人生が終わる気がする。まさか本当に——',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '하지만 트레이너인 ',
        you.adult_sex_title,
        '(당신)이 또 다른 의문에 잠기려던 때, 스쳐 지나가는 험담이 들렸다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '학생처럼 보이는 젊은 행인 둘이 ',
        urara.get_colored_name(),
        '의 이야기를 하고 있었다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '행인 A 「저쪽 ',
        urara.child_sex_title,
        ', 아까 레이스에서 꼴찌 한 애지?」',
      ]);
      await era.printAndWait([
        '행인 B 「하루 우라라였나? 어차피 시범 경주니까 적당히 뛰어도 되는 거 아냐?」',
      ]);
      await era.printAndWait([
        '행인 A 「그게 아니지. ',
        urara.sex,
        '은(는) 못 이기는 거야. 데뷔 전부터 계속 졌는데, ',
        urara.sex,
        '이(가) 어떻게 데뷔했는지도 모르겠어.」',
      ]);
      await era.printAndWait([
        '행인 B 「대단하네. ',
        urara.sex,
        ', 중앙 트레센에는 어떻게 들어간 거야?」',
      ]);
      await era.printAndWait([
        '행인 A 「아마 ',
        urara.sex,
        '의 트레이너가 뭔가 했겠지. 저렇게 사이좋아 보이는데, 트레센에서 흔히 있는……」',
      ]);
      await era.printAndWait(
        '행인 B 「진짜? 그 트레이너도 다루기 쉬워 보이는 애를 골랐네……」',
      );
      await era.printAndWait([
        '의미 없는 험담이라는 건 알지만, ',
        you.get_colored_name(),
        '은(는) 행인들의 헛소리가 이어질수록 조금씩 짜증이 났다.',
      ]);
      await era.printAndWait([
        '자신을 어떻게 평가하든 상관없다. 하지만 ',
        urara.get_colored_name(),
        '이(가) 약하더라도 이런 험담을 들을 이유는 없다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) ',
        urara.get_colored_name(),
        '을(를) 그 자리에서 데리고 벗어나려던 때, 작은 ',
        urara.uma_sex_title,
        '은(는) 고개를 들어 ',
        you.get_colored_name(),
        '의 숨기지 못한 표정을 보더니 먼저 손을 놓았다.',
      ]);

      era.printButton('「잠깐……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '의 움직임이 한발 늦었다. 알아차렸을 때, ',
        urara.get_colored_name(),
        '은(는) 이미 ',
        urara.sex,
        '의 험담을 하던 사람들 앞에 서 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 따라잡았을 때, ',
        urara.get_colored_name(),
        '은(는) ',
        urara.sex,
        '때문에 움츠러든 행인 둘에게 얼굴을 가까이 대고 있었다. 다행히 그 얼굴에는 다정한 미소가 떠올라 있었다.',
      ]);
      await urara.say_and_wait(
        '우라라 이야기 하고 있었지! 방금 레이스 봐 줬어?',
      );
      await era.printAndWait('행인 A 「어, 그게, 우리는……」');
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '은(는) 귀를 흔들었다. 맑은 벚꽃빛 눈동자에는 당황한 두 사람의 얼굴이 비쳤다.',
      ]);
      await era.printAndWait([
        '방금까지 자신을 험담하던 두 사람 앞에서도 ',
        urara.get_colored_name(),
        '의 표정은 평소처럼 봄날같이 온화했다.',
      ]);
      await urara.say_and_wait([
        '에헤헤~ 응! 우라라는 대단한 ',
        urara.uma_sex_title,
        '이(가) 아니야. 그렇게 빠르지도 않고, 거의 매번 져!',
      ]);
      await urara.say_and_wait(
        '그래도 모두의 목소리가 들리면 우라라는 다시 힘이 나!',
      );
      await era.printAndWait('행인 B 「그, 그런 걸 정말로……」');
      await urara.say_and_wait(
        '응! 믿고 있어! 달리는 게 정말 좋고 응원해 주는 모두가 있으니까, 다음엔 꼭 이길 거야!',
      );
      await era.printAndWait([
        '거의 말문을 잃은 두 사람 앞에서 ',
        urara.get_colored_name(),
        '은(는) 계속 꼬리를 흔들었다. 맑은 목소리에는 부정적인 기색이 전혀 없었다.',
      ]);
      await urara.say_and_wait(
        '그러니까 괜찮으면 다음에도 우라라 레이스 보러 와 줄래?',
      );
      await era.printAndWait('행인 A&B 「……응, 갈게, 갈 거야. 아마……」');
      era.println();
      if (high_relation) {
        await era.printAndWait([
          '두 사람의 더듬거리는 약속을 듣고, ',
          urara.get_colored_name(),
          '은(는) 먼저 기쁜 듯 고개를 끄덕였다가, 갑자기 따뜻한 다정함을 밀어내듯 진지한 목소리가 되었다.',
        ]);
        await urara.say_and_wait(
          '그리고 있지. 트레이너는 늘 우라라를 도와주는 사람이야. 앞으로는 트레이너를 나쁘게 말하지 말아 줘……응?',
        );
        await era.printAndWait('행인 A&B 「……!」');
        await era.printAndWait([
          '가엾은 두 사람이 부끄러워하다가 마음이 풀리고, 다시 놀라는 모습을 본 작은 ',
          urara.uma_sex_title,
          '은(는) 다시 귀여운 미소를 지었다.',
        ]);
        await urara.say_and_wait([
          '에헤헤~ 화난 건 아니야! 그냥 트레이너가 늘 그런 말을 들을지도 모른다고 생각하면, 조금 울컥할 뿐이야!',
        ]);
        await era.printAndWait('행인 A&B 「어……어어!」');
      }
      era.println();
      await urara.say_and_wait(
        '응! 그런 거야! 이야기 들어 줘서 고마워! 그럼 돌아갈게! 조심해서 가!',
      );
      await era.printAndWait([
        '말문을 잃은 두 행인에게 손을 흔들어 작별하고, ',
        urara.get_colored_name(),
        '은(는) 다시 ',
        you.get_colored_name(),
        '의 곁으로 달려왔다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '이(가) 방금 서 있던 곳을 보니, ',
        urara.get_colored_name(),
        '와(과) 이야기한 두 젊은이는 멍한 얼굴로 그 자리에 서 있었다.',
      ]);
      await era.printAndWait(
        '한참 서로의 얼굴을 바라보다가 겨우 정신을 차린 두 사람은 다시 말을 더듬으며 등을 돌려 떠났다.',
      );
      await era.printAndWait([
        '행인 A 「……나 저 애 응원할래. 왠지 ',
        urara.sex,
        ', 열심히 하는 것 같아……」',
      ]);
      await era.printAndWait(
        '행인 B 「나, 나도……저 애, 내 걱정까지 해 줬어……」',
      );
      await era.printAndWait('행인 A 「무슨 소리야. 그건 나한테 한 말이지……」');
      await era.printAndWait('행인 B 「아니야, 나한테 한 말이야……」');
      await era.printAndWait('……요즘 젊은이들은 다 이런가.');
      await era.printAndWait([
        '이상해진 두 사람의 뒷모습을 바라보며, ',
        you.get_colored_name(),
        '은(는) 어쩔 수 없다는 듯 고개를 젓고 다시 ',
        urara.get_colored_name(),
        '에게 주의를 돌렸다.',
      ]);

      era.printButton('「우라라, 괜찮아?」', 1);
      await era.input();

      await urara.say_and_wait([callname, ', 걱정하는 거야? 우라라는 괜찮아!']);

      era.printButton(
        '「그래도 우라라가 남의 말 때문에 상처받는 건 견딜 수 없어.」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '응! 그러니까 무슨 일이 있어도 우라라는 정말 ',
        callname,
        '에게 고마워!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 걱정에 작은 ',
        urara.uma_sex_title,
        '은(는) 다시 한번 ',
        you.get_colored_name(),
        '에게 티 없이 순수한 감사를 전했다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 마음 놓이는 미소를 독차지하며 아까의 두 사람을 떠올리던 ',
        you.get_colored_name(),
        '은(는) 문득 무언가 깨달은 듯했다.',
      ]);

      if (era.get('cflag:38:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '잠깐. 아까 그 둘이 ',
          urara.get_colored_name(),
          '와(과) 이야기를 마친 뒤 지었던 표정, 어디서 본 적 있지 않나.',
        ]);
        await era.printAndWait([
          '카렌짱에게 귀여움의 전도를 받고 그 귀여움에 빠진 사람들도 저런 표정이었다.',
        ]);
      }
      era.println();
      await era.printAndWait('……그렇구나. 정말 그런 거였나.');
      await era.printAndWait([
        urara.uma_sex_title,
        '에게 팬들의 응원은 중요하다. 그리고 ',
        urara.get_colored_name(),
        '에게는 사람들이 ',
        urara.sex,
        '을(를) 응원하고 싶어지게 만드는 특별한 성질이 있다.',
        you.get_colored_name(),
        '도 그중 하나다.',
      ]);
      await era.printAndWait([
        '그러니까 ',
        urara.sex,
        '은(는) 무의식적으로 자신의 무기를 쓰고 있는 건가.',
        urara.get_colored_name(),
        ' も、とんでもない魅魔だったりするのか。',
      ]);
      await era.printAndWait([
        '기분이 조금 복잡하다. 그래도 ',
        you.get_colored_name(),
        '도 안다. 그런 성질이 없더라도 이렇게 다정한 아이를 거부할 사람은 많지 않다.',
      ]);
      await era.printAndWait(
        '그렇다 해도 지금 두 사람이 서로를 이해하는 정도로는 처음에 떠올렸던 질문에 아직 답할 수 없다.',
      );
      await era.printAndWait([
        '서두르면 안 된다. 지금 가장 중요한 것은 우선 ',
        urara.sex,
        '이(가) 레이스에서 안정적으로 승리하는 것이다.',
      ]);
      await era.printAndWait([
        '그렇게 생각하며, ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '이(가) 내민 작은 손을 다시 잡았다. 길게 늘어진 그림자가 햇살 아래 다시 겹쳤다.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '큰일은 아니었지만, 의외로 불쾌했네요. 행인 여러분.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '그리고 죄송합니다. 조금만 더 시간을 내 주세요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '이번 문제는 가벼웠습니다. 하지만 앞으로 우라라가 해결할 수 없는 어려움을 만난다면, 당신은 어떻게 하실 건가요?',
      );
      era.printButton(
        '「담당의 마음과 몸도 트레이너가 돌봐야 할 일이야.」(호감+20)',
        1,
      );
      era.printButton(
        `「도망치지 않아. ${urara.sex}을(를) 지킬 거야.」(연모+5)`,
        2,
      );
      const ret = await era.input();
      await inner_urara.say_as_unknown_and_wait([
        '이유가 무엇이든 『',
        urara.get_colored_actual_name(),
        '』를 소중히 여겨 주시는군요. 그렇군요. 『내』가 믿은 당신은……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '알겠습니다. 안쪽에서는 당신에게 불평하지 않겠습니다. 그러니 바깥에서는 부디 ',
        urara.sex,
        '을(를) 앞으로도 지켜봐 주세요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '진심으로 바랍니다. 우라라가 걸음을 멈추는 날이 미래에 오지 않기를.',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47: (() => {
    const title = '뜻밖의 연말 상담!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララからプレイヤーへの呼び方
     * @param {PrintedSpan} call_30
     * @param {PrintedSpan} call_61
     * @param {boolean} high_relation 高好感か（良好以上かつ三周回ループ中でない）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_30,
      call_61,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        '오늘 우라라는 아무도 없는 트레이너실에 일찍 와 있었습니다. 혼자 있는 ',
        urara.sex,
        '에게는 무슨 고민이라도 있는 걸까요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그럼 ',
        urara.sex,
        '이(가) 트레이너인 ',
        you.adult_sex_title,
        '(당신)에게 무엇을 상담하고 싶은지는, 부디 직접 들어 주세요.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '축제가 끝난 뒤 혼자 거리를 걸으며, ',
        you.get_colored_name(),
        '은(는) 가끔 멈춰 쑤시는 손가락 마디를 주무르고는 비틀비틀 트레센으로 돌아갔다.',
      ]);
      await era.printAndWait(
        '남아 있는 축제 분위기와 여전히 열성적인 상점가 사람들에게 휩쓸린 탓에, 손에 든 짐은 또 한참 늘어나 있었다.',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 있었으면 좋았을 텐데. 짐이 줄기는커녕 더 늘었겠지만, 적어도 돌아가는 마음만큼은 가벼웠을 것이다.',
      ]);
      await era.printAndWait([
        '어쩔 수 없이 뻣뻣한 손을 비비며, ',
        you.get_colored_name(),
        '은(는) 트레이너실 문을 열었다. 하지만 예상했던 빈방의 서늘함은 느껴지지 않았다.',
      ]);
      await era.printAndWait(
        '먼저 온 사람이 벽난로와 조명을 켜 놓았고, 며칠 전 미처 치우지 못한 크리스마스 장식도 반짝이고 있었다.',
      );
      await era.printAndWait(
        '폭신한 겨울옷을 입은 분홍빛 작은 생물이 따뜻한 불빛 속에서 즐겁게 방을 정리하고 있었다.',
      );
      await era.printAndWait([
        '문을 열고 들어온 ',
        you.get_colored_name(),
        '을(를) 보고, 애타게 기다리던 작은 ',
        urara.uma_sex_title,
        '은(는) 소파에서 장난스럽게 몸을 일으켜 ',
        urara.sex,
        '의 트레이너를 향해 벚꽃빛 눈을 깜빡였다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 상점가에 갔다 왔구나! 얼른 들어와, 밖은 아직 추워!',
      ]);
      await era.printAndWait(
        '뜻밖의 반가움이었다. 방금까지 담당을 생각했는데, 바로 다음 순간 정말 눈앞에 나타났다.',
      );

      era.printButton('「어……응!」', 1);
      await era.input();

      await era.printAndWait([
        '달려와 짐을 들어 주는 작은 ',
        urara.uma_sex_title,
        '에게 대답하면서, ',
        you.get_colored_name(),
        '은(는) 어딘가 이상하다는 것을 깨달았다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 트레이너실을 정리하러 오는 건 이상하지 않다. 하지만 기다리기보다는 ',
        urara.sex,
        '은(는) 먼저 움직이는 쪽을 좋아한다.',
      ]);
      await era.printAndWait([
        '들어오기 전부터 책상에 놓여 있던 음료와 작은 산처럼 쌓인 쿠키를 봐도, 이번의 작은 ',
        urara.uma_sex_title,
        '은(는) 분명 ',
        you.get_colored_name(),
        '을(를) 기다리고 있었다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '도 ',
        you.get_colored_name(),
        '와(과) 크리스마스를 보내고 싶었던 걸까? 하지만 ',
        urara.get_colored_name(),
        '이(가) 그랬다면 당일에 왔을 것이다. 이건 무슨 준비일까?',
      ]);
      await urara.say_and_wait([
        callname,
        ', 왜 멍하니 있어! 방은 다 정리했어, 얼른 앉아!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 생각을 끊고, 작은 ',
        urara.uma_sex_title,
        '은(는) 멍하니 있는 손님을 의자에 앉힌 뒤 책상 위 쿠키 더미를 ',
        you.get_colored_name(),
        '앞으로 밀었다.',
      ]);
      await era.printAndWait([
        '눈앞의 모양이 묘한 쿠키는 겨우 무엇인지 알아볼 정도였지만, 축제 판촉품에서는 나지 않는 자연스러운 향기가 풍겼다.',
      ]);

      era.printButton('「음……이건?」', 1);
      await era.input();

      await urara.say_and_wait([
        '토끼! 이건 고양이! 이건 당근! 이건……',
        call_61,
        '와(과) ',
        call_30,
        '? 뭐, 그건 중요하지 않아!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 두 가지 뜻을 담은 질문을 듣고, ',
        urara.get_colored_name(),
        '은(는) 잠시 생각하다가 먼저 구체적인 쪽에 답했다.',
      ]);
      await era.printAndWait([
        '엄청난 게 섞여 있는 것 같기도 하지만, ',
        urara.get_colored_name(),
        '의 말대로 그것이 본론은 아니다.',
      ]);
      await era.printAndWait([
        '벚꽃빛 눈동자로 기대하는 담당의 시선을 받으며, ',
        you.get_colored_name(),
        '은(는) 접시에서 색이 잘 나온 쿠키 하나를 집어 입에 넣었다.',
      ]);
      await urara.say_and_wait([
        '에헤헤~ 이거 전부 우라라가 만들었어! 다른 사람들 몫은 벌써 전해 줬으니까, 이건 전부 ',
        callname,
        '거야!',
      ]);
      await urara.say_and_wait([callname, ', 우라라 쿠키 맛있어? 어때?']);
      await era.printAndWait([
        '달콤한 우유 맛이 혀에 퍼지자, 저도 모르게 ',
        you.get_colored_name(),
        '은(는) 접시의 다음 쿠키로 손을 뻗었다.',
      ]);
      await era.printAndWait([
        '정말 맛있다. 모양을 알아보기 어렵더라도 쿠키로서는 ',
        you.get_colored_name(),
        '이(가) 최근 먹은 수제 선물 어느 것에도 뒤지지 않았다.',
      ]);
      await era.printAndWait([
        '유일한 문제는 ',
        urara.get_colored_name(),
        '의 열성이 상점가 사람들 못지않다는 점일 것이다——양이 너무 많다.',
      ]);
      await era.printAndWait([
        '두 번째 쿠키를 조용히 삼키고, ',
        you.get_colored_name(),
        '은(는) 진지하게 기다리는 작은 ',
        urara.uma_sex_title,
        '에게 반쯤 농담으로 최고의 평가를 내렸다.',
      ]);

      era.printButton(
        '「이런 맛을 낼 수 있다면, 우라라는 나중에 좋은 아내가 되겠네.」',
        1,
      );
      await era.input();

      if (high_relation) {
        await urara.say_and_wait(
          '어? 아, 어? 응! 우라라, 나중에 좋은 아내가 될게!',
        );
        await urara.say_and_wait([
          '그러니까 ',
          callname,
          '도 나중에 좋은 남편이 되는 거야! 에헤헤~ 에헤헤……으으……',
        ]);
        await era.printAndWait([
          '부끄러워 귀를 접고, 점점 작아지는 목소리와 함께 ',
          urara.get_colored_name(),
          '의 원래도 작은 몸이 눈에 띄게 한층 더 움츠러들었다.',
        ]);
        await urara.say_and_wait(
          '잘은 모르지만 엄마가 그랬어. 이런 농담은 상대가 진심으로 받아들일지도 모른다는 걸 생각하고 해야 한대……알겠지?',
        );
        await era.printAndWait([
          '쿠키 더미 뒤로 긴장해서 새빨개진 작은 얼굴을 반쯤 내밀며, ',
          urara.get_colored_name(),
          '은(는) 조금 당황하고 훨씬 더 수줍어하는 기색으로 말했다.',
        ]);
        await era.printAndWait('……정말 모르는 건가?');
      } else {
        await urara.say_and_wait(['어? ', callname, '! 그런 말 하면 안 돼!']);
        await urara.say_and_wait(
          '잘은 모르지만 엄마가 그랬어. 이런 농담은 함부로 하면 안 된대!',
        );
        await era.printAndWait([
          '입으로는 모른다고 하면서도, ',
          urara.get_colored_name(),
          '의 몸은 솔직하게 붉어진 얼굴을 쿠키 더미 뒤로 숨겼다.',
        ]);
        await urara.say_and_wait([
          callname,
          ', 다른 사람들한테도 그런 말 하고 다니는 건 아니지? 안 돼! 다들 진심으로 받아들이면 곤란하잖아!',
        ]);
        await era.printAndWait([
          '칠칠치 못한 어른을 꾸짖듯, 가린 곳 뒤로 나온 분홍빛 이어 커버 한 쌍이 허둥지둥 ',
          you.get_colored_name(),
          '을(를) 향했다.',
        ]);
        await era.printAndWait('……알고 있잖아?');
      }
      era.println();
      await era.printAndWait([
        '잠깐, 방금은 말이 지나쳤던 게……아니! 지금 ',
        urara.get_colored_name(),
        '에게 무슨 말을 한 거야?!',
      ]);
      await era.printAndWait([
        '담당의 예상 밖으로 충격적인 대답을 듣고, ',
        you.get_colored_name(),
        '은(는) 묘한 기쁨이 조금 솟는 한편 자신의 발언에 살짝 화가 났다.',
      ]);
      await era.printAndWait([
        '오늘의 ',
        urara.get_colored_name(),
        '만으로도 충분히 이상한데, 자신까지 이렇게 대놓고 이상한 농담을 던져 대화를 망쳐 버린 것 아닌가?',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '이(가) 경솔함을 후회하는 사이, 맞은편의 ',
        urara.get_colored_name(),
        '이(가) 먼저 책상 위 쿠키 하나를 집었다.',
      ]);
      await urara.say_and_wait([
        '그러고 보니, ',
        callname,
        ', 왜 트레이너가 됐어?',
      ]);
      await era.printAndWait([
        '지금의 ',
        you.get_colored_name(),
        '은(는) 왜 이런 이야기를 꺼내는지 되묻고 싶어졌다. 하지만 묻는 상대가 작은 ',
        urara.get_colored_name(),
        '이라면, 서둘러 질문을 되돌려 줄 필요는 없다.',
      ]);
      await era.printAndWait([
        '지금 이해되지 않는 부분이 있어도, 나중에 의도를 알게 될 때가 온다.',
        urara.get_colored_name(),
        '와(과) 지내다 보면 늘 그렇다.',
      ]);

      era.printButton(
        '「먼저 확인할게. 흥미나 열정은 우라라가 듣고 싶은 대답이 아니지?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        callname,
        '의 마음을 의심하는 건 아니야. 하지만 ',
        callname,
        '이(가) 원하는 게 뭔지 알고 싶어!',
      ]);
      await era.printAndWait([
        '꿈이 아니라 욕망을 묻는 건가.',
        urara.get_colored_name(),
        '은(는) 이렇게 예리했나? 지금의 작은 ',
        urara.uma_sex_title,
        '은(는) 얕볼 수 없다.',
      ]);
      await era.printAndWait([
        '한창 자라는 청춘의 ',
        urara.teen_sex_title,
        '에게 어른의 세속적인 욕망을 이야기하는 건가. 음……',
      ]);
      await era.printAndWait([
        '생각을 가볍게 정리하고 한숨 같은 깊은 숨을 들이마신 뒤, ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '의 맑은 시선을 받으며 천천히 첫마디를 꺼냈다.',
      ]);

      era.drawLine({ content: 'お話の時間' });
      await era.printAndWait(
        '특별할 건 없어. 처음으로 돌아가면 그 사람이 원한 건 단순했어. 안정된 직장, 월급, 그러니까 돈이었나?',
      );
      await era.printAndWait([
        you.sex,
        '은(는) 나중에 진로를 고를 때, 전문 분야 중에서 가장 안정적이고 돈이 되는 직업을 택했을 뿐이야.',
      ]);
      await era.printAndWait(
        '적어도 그때는——지금도 그런가? 이 직업은 세상에서 아주 좋게 평가받았고, 그 사람에게는 조금 재능이 있었어.',
      );
      await urara.say_and_wait('그랬구나, 집에 돈이 부족했어?');
      await era.printAndWait(
        '아니야. 그 사람은 가난한 집안 출신도 아니고, 생활고에 시달리지도, 큰 외부 압박을 받지도 않았어. 다만……',
      );
      await era.printAndWait(
        '반짝이는 쇼윈도 앞을 몇 번이나 지나도, 갖고 싶은 걸 하나도 사지 못했어. 그뿐이야.',
      );
      await era.printAndWait([
        '그러니까, 음……결국 안정감과 만족감이 부족했던 거겠지.',
        you.sex,
        '은(는) 아마 예전부터 따라다니던 불안을 그렇게 떨쳐 내고 싶었을 뿐이야.',
      ]);
      await urara.say_and_wait('그래도 그 사람, 결국 소원을 이뤘잖아?');
      await era.printAndWait([
        '그런데 그 사람은 뜻이 굳세지 못하거든.',
        you.sex,
        '은(는) 지금까지 오는 동안 많이 고생했고, 도중에 몇 번이나 포기할 뻔했어.',
      ]);
      await era.printAndWait([
        '세 여신의 가호였을까? 아니면 ',
        you.sex,
        '이(가) 스스로를 포기하는 게 너무 무서웠던 걸까?',
      ]);
      await era.printAndWait(
        '결국 비틀거리며 나아간 그 사람은 그래도 중앙에 들어왔어. 너무 순조로울 정도였지.',
      );
      await urara.say_and_wait('그럼……그 사람은 지금 어떻게 생각해?');
      await era.printAndWait(
        '이 일은 괜찮아. 숙식도 제공되고, 대우나 사회적 지위도 나쁘지 않아. 급여 지급 방식이 조금 특이해도 만족하고 있어.',
      );
      await urara.say_and_wait('응, 응! 그러니까 그 사람도 1착 한 거네!');
      await era.printAndWait([
        '예전 같았으면 아니라고 했을지도 몰라. 하지만 지금은 ',
        you.sex,
        '은(는) 곧 자신이 원하는 1착을 찾을 수 있을 것 같아——',
      ]);
      era.drawLine();

      await you.say_and_wait(
        '그것도 지금 그 사람에게 특별한 담당이 있는 덕분이다.',
        true,
      );
      await era.printAndWait([
        '마지막 말을 입 밖으로 내지 못한 채, ',
        you.get_colored_name(),
        '은(는) 쓴웃음을 지으며 옛이야기를 끝냈다. 고개를 들자 예상했던 혐오, 동정, 이해하지 못하는 기색……',
      ]);
      await era.printAndWait([
        '그 어느 것도 보이지 않았다.',
        urara.get_colored_name(),
        '은(는) 평소처럼 곁눈질하지 않았고, ',
        urara.sex,
        '은(는) 그저 진지하게 ',
        you.get_colored_name(),
        '의 이야기를 듣고 있었다.',
      ]);
      await era.printAndWait([
        '하지만 이건 곤란하다. 표정을 읽을 수는 없어도, ',
        urara.sex,
        '은(는) 자기 트레이너가 이렇게 장황하고 속물적인 어른이라고 생각할 것이다……',
      ]);
      await urara.say_and_wait([
        '응! 우라라, 알겠어!',
        callname,
        ', 산뜻하네! 지구를 정복해도 경치만 구경하고 싶은 악당 보스 같아!',
      ]);
      await you.say_and_wait(
        '……뭐? 산뜻하다고?! 악당 보스는 또 뭐야? 우라라, 담당 트레이너는 잘 모르겠고, 이해도 잘 안 되는걸——',
        true,
      );
      await era.printAndWait([
        '안타깝게도 몇 번이고 굳어 버리는 ',
        you.get_colored_name(),
        '에게 직접적인 대답은 돌아오지 않았다.',
        urara.get_colored_name(),
        '은(는) 그저 기쁜 듯 웃고 있었다.',
      ]);
      await era.printAndWait([
        '과거 탓에 이해하기 어려워진 어른을 향한 혐오도 동정도 의아함도 없이, 그저 소중한 누군가를 위해 기뻐하는 순수한 미소였다.',
      ]);
      await urara.say_and_wait([
        '흥흥~',
        callname,
        '은(는) 『우라라』를 알고 우라라를 도와줬잖아. 오늘 우라라도 『',
        callname,
        '』를 더 많이 알게 됐어!',
      ]);
      await urara.say_and_wait([
        '이제 우라라도 알겠어. 어려운 이야기를 어떻게 해야 ',
        callname,
        '에게 전해지는지!',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '의 기쁜 미소를 보고, ',
        you.get_colored_name(),
        '은(는) 마침내 깨달았다. 뭐야, 쓸데없는 생각만 하는 어른이 바보였구나.',
      ]);

      era.printButton(
        '「우라라, 다음에 궁금한 게 있으면 바로 물어봐도 돼. 네 트레이너는 숨기지 않을 테니까.」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '그래도 이렇게 발맞춰 달리는 건 정말 좋아! ',
        call_30,
        '의 이야기 같아!',
      ]);
      await era.printAndWait([
        '이 애는 정말 천사인가? 작은 담당의 깊은 뜻이 담긴 듯한 말을 곱씹으며, ',
        you.get_colored_name(),
        '은(는) 접시의 다음 쿠키로 손을 뻗었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '와(과) 함께 잠시 멈춘 뒤, ',
        urara.get_colored_name(),
        '은(는) 마침내 용기를 낸 듯 다시 고개를 들어 ',
        you.get_colored_name(),
        '을(를) 바라보았다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 요즘 우라라는 우라라랑 아주 닮았는데, 무척 외로워 보이는 ',
        urara.uma_sex_title,
        '의 꿈을 꿨어.',
      ]);
      await urara.say_and_wait([
        '꿈속의 ',
        urara.sex,
        '은(는) 달리지도 않고, 다들하고도 조금 떨어져 있었어. 그래서 우라라가 ',
        urara.sex,
        '을(를) 같이 가자고 부르려고 했어.',
      ]);
      await urara.say_and_wait([
        '그런데 ',
        urara.sex,
        '의 미소가 정말 슬퍼 보였어. 몇 번이나 우라라한테서 멀어지다가, 결국 완전히 사라졌어.',
      ]);
      await urara.say_and_wait([
        '얼굴은 똑같은데, 우라라는 힘들면 울 수 있잖아.',
        urara.sex,
        '은(는) 그렇게 말없이 웃기만 해.',
      ]);
      await era.printAndWait([
        '자기 두 손을 내려다보는 얼굴에는 아직 미소가 남아 있었지만, ',
        urara.get_colored_name(),
        '의 귀는 이미 힘없이 처져 있었다.',
      ]);
      await urara.say_and_wait([
        '우라라는 아무리 생각해도 ',
        urara.sex,
        '을(를) 혼자 두고 싶지 않아. 하지만 ',
        urara.sex,
        '은(는) 그걸로 괜찮다고 생각하는 것 같아……',
      ]);
      await urara.say_and_wait([
        '어쩔 수 없다고 느껴질 때……',
        callname,
        '이라면 어떻게 할 거야?',
      ]);

      await inner_urara.say_as_unknown_and_wait([
        '……갑작스럽고도 중요한 상담이네요. 그렇다면 트레이너 ',
        you.adult_sex_title,
        '(당신)의 의견은?',
      ]);
      era.printButton(
        '「글쎄……아무리 어려워도 자신이 원하는 쪽으로 나아가자.」(잔디 적성 상승)',
        1,
      );
      era.printButton(
        '「음……지금의 어려움을 즐길 수 있게 되는 것도 행복의 한 모습이야.」(중거리&장거리 적성 상승)',
        2,
      );
      ret.push(await era.input());
      if (ret[0] === 1) {
        await urara.say_and_wait([
          '하지만 그러다가 ',
          urara.sex,
          '이(가) 더 슬퍼지면……',
        ]);
        await you.say_and_wait(
          '지금 우라라는 아직 납득하기 어려울지도 몰라. 그래도 언젠가는 사람과 부딪치는 일을 피할 수 없어.',
        );
        await you.say_and_wait([
          '게다가 우라라는 아직 그 ',
          urara.uma_sex_title,
          '에게 자신의 마음을 전하지 않았잖아? 시작도 안 했으니 겁낼 필요는 없어.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '의 일상과 같아. 마음을 가다듬었다면, 그다음에는 대담하게 나아가면 돼.',
        ]);
        await era.printAndWait([
          '접시에서 미소 짓는 듯한 「',
          call_61,
          '」 모양 쿠키를 집어, ',
          you.get_colored_name(),
          '은(는) 웃으며 ',
          urara.get_colored_name(),
          '의 작은 입에 넣어 주었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 말을 쿠키와 함께 천천히 곱씹다가 무언가 떠올린 ',
          urara.get_colored_name(),
          '의 눈도 차츰 밝아졌다——',
        ]);
      } else {
        await urara.say_and_wait('지금의 어려움을……?');
        await you.say_and_wait(
          '우라라는 친구를 사귀다가 처음 벽에 부딪쳤어. 하지만 그 어려움을 해결하고 돌아보면, 성장한 것 말고도 기쁨이 있을 거야.',
        );
        await you.say_and_wait(
          '게다가 우라라는 이대로 포기하지 않을 거잖아? 우라라의 목표는 다들 기뻐하게 해 주는 거지?',
        );
        await era.printAndWait([
          urara.get_colored_name(),
          '이(가) 나아가는 걸음과 같아. 이를 악물고 버티면 고민도 뿌듯한 미소로 바뀔 거야.',
        ]);
        await era.printAndWait([
          '접시에서 볼을 부풀린 듯한 「',
          call_30,
          '」 모양 쿠키를 집어, ',
          you.get_colored_name(),
          '은(는) 웃으며 ',
          urara.get_colored_name(),
          '의 손바닥에 올려 주었다.',
        ]);
        await era.printAndWait([
          '생각에 잠긴 듯 손바닥의 쿠키를 바라보던 ',
          urara.get_colored_name(),
          '은(는) 무언가 깨달은 듯 웃으며 입에 넣었다——',
        ]);
      }
      era.println();
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '은(는) 이미 마음속으로 답을 정한 모양이다. 만족스럽게 ',
        urara.get_colored_name(),
        '에게 고개를 끄덕인 뒤, ',
        you.get_colored_name(),
        '은(는) 다시 책상으로 눈길을 돌렸다.',
      ]);
      await era.printAndWait(
        '시간이 흐르는 동안, 마음의 거리처럼 두 사람 사이에 쌓였던 과자 더미도 서로 속마음을 털어놓는 사이 어느새 사라져 있었다.',
      );
      await era.printAndWait([
        '그래서 이제 시간도 늦었고, ',
        you.get_colored_name(),
        '와(과) 마찬가지로 그 사실을 깨달은 ',
        urara.get_colored_name(),
        '도 ',
        you.get_colored_name(),
        '의 어깨 너머 벽시계로 눈길을 돌렸다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 이따가……앗! 벌써 시간이 이렇게 됐네!',
      ]);
      await era.printAndWait([
        '시계를 보았다. 그래, 벌써 『기숙사 통금상』에 나설 시간이다.',
        you.get_colored_name(),
        '이(가) 허리를 펴는 것을 보고, ',
        urara.get_colored_name(),
        '도 알아차리고 자리에서 일어났다.',
      ]);
      await era.printAndWait([
        '하지만 트레이너실을 나와 달리기 전에, ',
        urara.get_colored_name(),
        '은(는) 아쉬운 듯 헤어지기 전 마지막 질문을 끼워 넣었다.',
      ]);
      await urara.say_and_wait([
        '그러고 보니! ',
        callname,
        ', 이제 곧 새해야! 오늘 밤처럼 보내도 돼?',
      ]);
      await urara.say_and_wait([
        '과자도 더 많이 준비할게! 그때 ',
        callname,
        ', 또 우라라랑 놀아 줄 수 있어?',
      ]);

      era.printButton('「우라라가 그러고 싶다면 언제든 좋아!」', 1);
      await era.input();

      await era.printAndWait([
        '두 사람이 떠들썩하게 찬바람 속으로 뛰쳐나가기 전, ',
        you.get_colored_name(),
        '은(는) 만족한 듯 ',
        urara.get_colored_name(),
        '에게 웃으며 대답했다.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '다만 다음에는 우라라가 준비하는 과자의 양이 조금만 적당하다면 더 완벽하겠네요……',
      );
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '오늘 당신을 더 잘 알게 된 우라라는 무척 만족하고 있습니다. 인내해 주신 것에도 다시 감사드립니다.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '하지만 우라라가 안심한 지금, 저도 한 가지 더 답해 주셨으면 하는 것이 있습니다.',
      );

      await inner_urara.say_as_unknown_and_wait(
        '아까 돈이니 뭐니 하신 말은, 당신의 속마음인가요? 아니면 실제 이야기인가요?',
      );
      era.printButton(
        '「사실이야——그렇게 말하면 속물이라고 혼나려나.」(호감+20)',
        1,
      );
      era.printButton(
        '「적어도 내가 가장 싫어하는……어른? 이 되지는 않았어.」(연모+5)',
        2,
      );
      ret.push(await era.input());
      await inner_urara.say_as_unknown_and_wait(
        '그렇군요. 그럼 우리 관계도 여기까지입니다——농담이에요. 저는 당신을 그렇게까지 싫어하지는 않아요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '네, 『싫어한다』고 했어요. 저는 대부분의 인간과 ',
        urara.uma_sex_title,
        '을(를) 싫어합니다. 당신을 그렇게까지 싫어하지 않을 뿐이에요. 적어도 당신은 솔직하니까요.',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '하아……눈치채셨겠지요. 지금 우라라의 몸에는 신비한 힘이 나타나고 있습니다.',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.uma_sex_title,
        '의 풀리지 않는 수수께끼는 별처럼 많습니다. 우라라의 가호가 무엇인지는 세 여신만이 말해 줄 수 있을지도 몰라요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '저는 근거 없는 기적을 좋아하지 않습니다. 어디서 왔는지도 모를 희망을 믿는 것 또한 사람을 상처 입힐 뿐이지요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '찬물을 끼얹으려는 건 아닙니다. 저도 한때는……죄송합니다. 숨기려는 게 아니라, 이 터무니없는 이야기를 어디서부터 꺼내야 할지……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '하지만 당신은 분명 담당의 미래를 이끌고 있습니다. 부디 자신의 선택에 최대한 책임을 져 주세요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '그리고 그 외로운 ',
        urara.uma_sex_title,
        '……비뚤어진 ',
        urara.sex,
        '은(는) 혼자서도 괜찮을 거예요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……익숙해지겠죠. 언젠가는 익숙해질 거예요. 전부, 전부……',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '새해 포부';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} opera テイエムオペラオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_15 ハルウララのテイエムオペラオーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     * @param {PrintedSpan} call_77 ハルウララのナリタトップロードへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (
      urara,
      inner_urara,
      opera,
      you,
      callname,
      call_15,
      call_30,
      call_61,
      call_77,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait(
        '다른 사람과 어떻게 지내는지는 평가하지 않겠습니다. 하지만 우라라와 함께라면, 당신은 의외로 행복한 사람이 될지도 모르겠네요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        "네? 우라라의 엄마…… 아니에요. 우라라의 '엄마들'이 화내겠어요.",
      );
      await inner_urara.say_as_unknown_and_wait(
        '죄송해요, 조금 들떴네요. 모처럼 새해니까요——',
      );
      era.drawLine();
      await urara.print_and_wait([
        '과자로 가득 찬 봉지를 들고 현관에 선 ',
        urara.get_colored_name(),
        '은(는) 골똘히 생각하며 귀를 까딱인다. ',
        callname,
        '을(를) 만나면 어떻게 깜짝 놀라게 해 줄까 고민하는 것이다.',
      ]);
      await urara.print_and_wait([
        call_61,
        '은(는) 중요한 감사 인사는 제대로 전해야 한다고 했다. 그래서 ',
        urara.get_colored_name(),
        '은(는) 이번 설에 ',
        callname,
        '에게 다시 한번, 자신의 마음을 제대로 전하고 싶다.',
      ]);
      await urara.print_and_wait(
        '이번에는 적당한 양의 쿠키만 준비했다. 그런데 둘이 먹기에 충분할까? 같은 걸 또 해도 깜짝 선물이 될까?',
      );
      await urara.print_and_wait([
        '그래도 지난번에도 칭찬받았고, ',
        callname,
        '이(가) 좋아하면 괜찮겠지!',
        call_30,
        '와(과) ',
        call_77,
        '도 선물은 마음이 중요하다고 했으니까!',
      ]);
      await urara.print_and_wait([
        '좋아! 선물도 준비했고, 감사 인사도 외웠으니 괜찮아! ',
        callname,
        ' 기습 준비 완료, 우라라 출발!',
      ]);
      await urara.print_and_wait([
        "심호흡을 하고, '제대로 감사 인사하기' 순서를 마음속으로 연습한 작은 ",
        urara.uma_sex_title,
        '은(는) 천천히 손을 뻗어 ',
        callname,
        '의 집 초인종을 누르려 한다……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '그때, 작은 ',
        urara.uma_sex_title,
        '이(가) 현관 앞에서 꼼짝하지 않는 걸 발견한 ',
        you.get_colored_name(),
        '이(가) 먼저 문을 연다. 성공한 기습은 상대도 깜짝 놀라게 한다.',
      ]);
      await urara.say_and_wait([
        '어? ',
        callname,
        '……새해 복 많이 받아! 저기…… 그리고! 작년에는 ',
        callname,
        '에게 신세 많이 졌어! 다, 다음은……',
      ]);

      era.printButton(
        '「고마워! 일단 어서 들어와! 밖은 추우니까, 무리하지 않아도 돼.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '들켜서 당황한 ',
        urara.teen_sex_title,
        '을(를) 따뜻한 실내로 들인 뒤, ',
        you.get_colored_name(),
        '은(는) 웃으며 따뜻한 손으로 추위에 빨개진 작은 ',
        urara.uma_sex_title,
        '의 얼굴을 감싼다.',
      ]);
      await era.printAndWait([
        '차가운 뺨이 녹아들면서, ',
        urara.get_colored_name(),
        '의 얼어붙었던 미소도 평소처럼 따뜻하고 밝은 곡선을 되찾는다.',
      ]);
      await urara.say_and_wait([
        '에헤헤~ 미안해, ',
        callname,
        '. 다음 말이 역시 생각 안 났어……',
      ]);

      era.printButton(
        "「괜찮아, 마음은 잘 받았어. 게다가 'Simple is best'잖아.」",
        1,
      );
      await era.input();

      if (era.get('abl:52:英语') < 2) {
        await urara.say_and_wait('심……? 으음…… 그게 무슨 뜻이더라?');
        await era.printAndWait([
          '적어도 ',
          urara.get_colored_name(),
          '이(가) 영어에 약하다는 건 예상대로다. 어쩔 수 없다는 듯 ',
          urara.teen_sex_title,
          '의 머리를 쓰다듬고, ',
          you.get_colored_name(),
          '은(는) ',
          urara.sex,
          '의 손에 들린 과자 봉지를 받아 든다.',
        ]);
      }
      await era.printAndWait([
        '재미있는 모양의 수제 쿠키와 신선한 귤을 식탁에 늘어놓는다. 옆에 놓인 작은 토스터도 떡을 구울 준비가 되어 있다.',
      ]);
      await era.printAndWait([
        '호기심 어린 눈으로 ',
        callname,
        '의 집을 둘러보던 작은 ',
        urara.uma_sex_title,
        '도 따뜻한 분위기 속에서 금세 처음의 어색함을 벗어 버린다.',
      ]);
      await era.printAndWait([
        '식탁에 둘러앉아 과자와 과일을 먹으며, 변함없는 편안함 속에서 ',
        you.get_colored_name(),
        '와(과) ',
        urara.get_colored_name(),
        '은(는) 이런저런 이야기를 나눈다.',
      ]);
      await era.printAndWait([
        '연말에 새해에도 함께하자고 약속했기에, ',
        urara.get_colored_name(),
        '을(를) 집으로 초대했다. 나쁘지 않은 판단이었다.',
      ]);
      await era.printAndWait([
        '부풀어 오르는 떡을 눈을 반짝이며 바라보는 ',
        urara.get_colored_name(),
        '을(를) 보니, ',
        you.get_colored_name(),
        '은(는) 또 귀여운 작은 동물을 보고 있는 기분이 든다.',
      ]);

      era.printButton(
        '「우라라, 새해에 앞으로의 나날을 위한…… 포부 같은 건 있어?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '다 구워진 떡 하나를 ',
        urara.get_colored_name(),
        '의 그릇에 집어 주며, ',
        you.get_colored_name(),
        '은(는) 젓가락으로 떡을 콕콕 찌르는 작은 ',
        urara.get_colored_name(),
        '와(과) 천천히 다음 이야기를 시작한다.',
      ]);
      await urara.say_and_wait("'포', '부'? 그게 뭐야…… 아, 혹시 슈크림?");
      await era.printAndWait([
        '길게 늘어난 떡을 입에 문 채, ',
        urara.get_colored_name(),
        '은(는) 고개를 갸웃하며 되묻는다.',
      ]);

      era.printButton(
        "「……알았어, 슈크림이 먹고 싶으면 다음에 사 줄게. 그런데 '포부'는 올해의 목표를 말하는 거야.」",
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '목표구나! 그럼 전에 말한 거랑 똑같아! 많이 달리고, 1착도 많이 하는 거!',
      );
      await urara.say_and_wait([
        '우라라, 열심히 달릴게!',
        callname,
        '도 앞으로 계속 우라라를 도와줄 거지! 다 같이 기뻐하게 하자!',
      ]);
      await era.printAndWait([
        '그건 계약한 뒤로 줄곧 해 온 일 아닌가? ',
        urara.get_colored_name(),
        '의 귀여운 미소 앞에서, ',
        you.get_colored_name(),
        '은(는) 조금 난감해진다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '의 표현은 여전히 막연하다. 아직 동심에 머물러 있는 건지, 생각은 있지만 너무 생략하는 건지.',
      ]);
      await era.printAndWait([
        '하지만 시간은 기다려 주지 않는다. 담당이 준비됐다고 한다면, 다음 행동 계획도 세우기 시작해야 한다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그렇다면 수수께끼 풀이에 능한 트레이너 ',
        you.adult_sex_title,
        '(당신)가 생각하기에, 가까운 시일 안에 우라라에게 가장 적합한 활동은——',
      ]);
      era.printButton(
        '「그러고 보니, 지난 연말 시험 성적은 어땠어? 좀 올랐어?」(근성+10)',
        1,
      );
      era.printButton(
        '「지금은 설이잖아. 모처럼 여유가 생겼으니 좀 더 쉴까?」(스태미나+10)',
        2,
      );
      era.printButton(
        '「그런데 우라라, 요즘 쉴 때 무슨 만화나 애니메이션을 봐?」(스킬 Pt+20)',
        3,
      );
      ret.push(await era.input());
      switch (ret[0]) {
        case 1:
          await urara.say_and_wait('에에에에에~!?');
          await era.printAndWait(
            '설에 공부 이야기를 꺼내다니, 실로 악마 같은 책략이다! 세상에서 가장 얄미운 어른도 이보다 더할 수는 없다!',
          );
          await era.printAndWait([
            callname,
            '의 아무렇지 않은 듯한 질문에, 언제나 밝던 ',
            urara.get_colored_name(),
            '마저 크게 동요한다!',
          ]);
          await era.printAndWait([
            '물론 ',
            you.get_colored_name(),
            '은(는) ',
            urara.get_colored_name(),
            "의 공부 상태를 진작 알고 있었다. 이 질문은 '작심삼일인 ",
            urara.teen_sex_title,
            "'에게 주는 작은 주의다.",
          ]);
          if (era.get('abl:52:英语') < 2) {
            await era.printAndWait(
              '게다가 그렇게 쉬운 영어도 모른다는 건 너무 위험하다. 교육자로서 그냥 둘 수는 없다.',
            );
          }

          era.printButton(
            '「겁먹지 마. 나무라려는 건 아니야. 아무튼 열심히 극복해 보자. 의지만 있으면 나아질 거야.」',
            1,
          );
          await era.input();

          await urara.say_and_wait(
            '우우…… 그래도 달리기랑 레이스가 더 재밌는걸! 그래도, 그래도…… 알았어……',
          );
          await era.printAndWait([
            urara.get_colored_name(),
            '、',
            callname,
            '을(를) 비겁하다고 생각하지 말아 줘. 담당을 곤란하게 하려는 건 아니다. 작심삼일로 끝내는 것보다 꾸준히 하는 편이 더 빨리 달릴 수 있단다.',
          ]);
          await era.printAndWait([
            '작은 ',
            urara.uma_sex_title,
            '의 눈에 떠오른 애처로운 벚꽃 두 송이와, 떡으로 햄스터처럼 부풀어 오른 작은 얼굴 앞에서, ',
            you.get_colored_name(),
            '은(는) 죄책감을 숨기며 시선을 돌린다.',
          ]);
          await urara.say_and_wait([
            '너무해…… 우라라, ',
            callname,
            '네 집에서 자고 가고 싶었는데……',
          ]);
          await you.say_and_wait('아니, 그러니까…… 응?!');
          break;
        case 2:
          await urara.say_and_wait(
            '응? 더 쉬라고? 그래도 우라라, 항상 잘 자는데!',
          );

          era.printButton(
            '「모처럼 설이잖아. 건강하게 보내는 게 제일이지. 여유가 있으면 서두를 필요 없어.」',
            1,
          );
          await era.input();

          await era.printAndWait([
            '훌륭한 경주 ',
            urara.uma_sex_title,
            '에게 가장 중요한 건 건강이다. 쉬는 데 소홀하면 평소에 아무리 쌓아 올려도, 다쳤을 때는 소용없다.',
          ]);
          await era.printAndWait([
            '게다가 앞으로는 훈련 강도도 높아질 것이다. 건강을 유지하는 건 아주 중요하다. 특히 ',
            urara.get_colored_name(),
            '에게는.',
          ]);
          await urara.say_and_wait([
            '그럼…… ',
            callname,
            '이(가) 그렇게 말한다면, 당분간은 더 자주 ',
            callname,
            '한테 가도 돼?',
          ]);
          await era.printAndWait([
            '말하고 싶었던 건, ',
            urara.get_colored_name(),
            '에게 요즘 잠을 더 자라는 뜻이었다. 아이들은 한창 자랄 때니까. 그래도 ',
            urara.sex,
            '이(가) 찾아온다면, ',
            you.get_colored_name(),
            '도 마다할 생각은 없다.',
          ]);
          await urara.say_and_wait([
            '그래서 오늘도 마침 ',
            callname,
            '네 집에서 자고 갈 준비를 해 왔어!',
          ]);
          await era.printAndWait([
            '그것도 나쁘지 않을지도…… 잠깐? ',
            urara.sex,
            '이(가) 방금 뭐라고 했지?',
          ]);
          break;
        case 3:
          await urara.say_and_wait([
            '으음…… 요즘은 ',
            call_15,
            '이(가) 추천해 준 애니메이션을 보고 있어! 레이싱 나오는 거! 그리고, 그리고……',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            '의 신난 설명을 들으며 휴대전화를 꺼낸 ',
            you.get_colored_name(),
            '은(는) 금세 그 레이싱 SF를 찾아낸다.',
          ]);
          await era.printAndWait(
            '레이서와 AI의 협력, AI가 주도할지 전력으로 지원할지를 둘러싼 신념의 충돌, 모든 걸 건 절친끼리의 대결……',
          );
          await era.printAndWait([
            '훈련에 활용할 만한 아이디어가 있을지도 모른다. 이걸로 하자! 하지만 ',
            opera.get_colored_name(),
            '이(가) 이런 애니메이션을 추천할 줄은 몰랐다.',
          ]);
          await urara.say_and_wait([
            '맞다, ',
            callname,
            '! 마침 오늘 밤 자고 갈 거니까, 밤에 같이 보자!',
          ]);

          era.printButton(
            '「좋아! 과자 다 먹고 같이 보자…… 아니, 뭐라고?」',
            1,
          );
          await era.input();
      }
      era.println();
      await urara.say_and_wait([
        '아! ',
        callname,
        '한테 말하는 걸 깜빡했어! 괜찮아, 우라라, 다들한테도 말했고 외박 신청서도 냈어!',
      ]);
      await era.printAndWait([
        '번뜩 정신을 차리고 놀란 ',
        you.get_colored_name(),
        '의 얼굴을 보자, 작은 ',
        urara.uma_sex_title,
        '은(는) ',
        you.get_colored_name(),
        '이(가) ',
        urara.sex,
        '의 준비가 부족할까 걱정하는 줄 알고, 서둘러 ',
        you.get_colored_name(),
        '에게 설명한다.',
      ]);

      era.printButton(
        '「아니, 잠깐만. 그런 뜻이 아니야. 그러니까…… 만약 담당 트레이너가 나쁜 사람이면 어쩌려고?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '어? 그럼 ',
        callname,
        '은(는) 자기가 나쁜 사람이라고 생각해?',
      ]);
      era.println();
      if (high_relation) {
        await era.printAndWait([
          '사실 ',
          you.get_colored_name(),
          '이(가) 하고 싶었던 말은, ',
          urara.get_colored_name(),
          '은(는) ',
          urara.uma_sex_title,
          '이라도 자신을 지킬 줄 알고, 안 지 반년밖에 안 된 어른을 쉽게 믿지 않았으면 한다는 것이었다.',
        ]);
        await era.printAndWait(
          '그런 사례는 세상에 얼마든지 있다. 아침저녁으로 함께하는 트레이너라도 속까지 안다는 보장은 없다.',
        );
        await era.printAndWait([
          '하지만 자신이 나쁜 사람인지 아닌지라…… 고개를 들어 ',
          urara.get_colored_name(),
          '의 웃는 얼굴을 보니, 설령 그렇더라도 ',
          urara.sex,
          '앞에서는 인정하기 어렵다.',
        ]);
        await era.printAndWait([
          'だが初めて出会ったとき、誰かがまだ見知らぬ小さな',
          urara.uma_sex_title,
          'に手を出そうとしていたのも確かだ……',
        ]);
      } else {
        await era.printAndWait([
          '본래는 ',
          urara.get_colored_name(),
          '에게 안 지 반년밖에 안 된 어른을 쉽게 믿지 말라고 하고 싶었다. 하지만 그 말이 ',
          you.get_colored_name(),
          '의 입에서 나오니 조금 어울리지 않는다.',
        ]);
        await era.printAndWait([
          '자신은 정말 나쁜 사람일까? 아무튼 ',
          urara.get_colored_name(),
          '에게 그런 충고를 할 때, ',
          you.get_colored_name(),
          '은(는) 지금까지 자신이 한 말과 행동을 떼어 놓고 생각할 수 없다.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 행동으로는 줄곧 친근하게 대하지만, ',
          you.get_colored_name(),
          '은(는) 알고 있다. ',
          urara.sex,
          '은(는) 얼굴에 띤 미소만큼 기쁘지는 않다는 걸.',
        ]);
        await era.printAndWait([
          '지금도 작은 ',
          urara.uma_sex_title,
          '은(는) 가라앉은 기분을 참고, ',
          urara.sex,
          '의 트레이너 곁에 기대고 있을 뿐인지도 모른다.',
        ]);
      }
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 말이 없어진 이유를 알아차린 걸까, ',
        urara.get_colored_name(),
        '은(는) 웃으며 젓가락을 내려놓고 의자를 끌어 ',
        you.get_colored_name(),
        '의 곁에 나란히 앉는다.',
      ]);
      await urara.say_and_wait([
        '나쁜 사람이어도 괜찮아. 우라라는 ',
        callname,
        '을(를) 믿고 싶으니까!',
      ]);

      era.printButton('「믿는다고 다 되는 문제가 아니야……」', 1);
      await era.input();

      await urara.say_and_wait([
        '하지만 자기 기분만으로 ',
        callname,
        '을(를) 밀어내고 싶지는 않다.',
        callname,
        '이(가) 나쁜 사람이어도, 우라라는 ',
        callname,
        '곁에 꼭 붙어 있을 거야!',
      ]);
      await urara.say_and_wait([
        '게다가 우라라를 도와주는 ',
        callname,
        '은(는) 그렇게 나쁜 사람일 리 없어! 그러니까 나쁜 사람이어도 분명 좋은 사람이 될 수 있어!',
      ]);
      await urara.say_and_wait([
        '그러니까 우라라랑 ',
        callname,
        ', 함께하는 거야! 둘이면 이인삼각……? 처럼 계속 갈 수 있잖아!',
      ]);
      await era.printAndWait([
        '지금 ',
        urara.get_colored_name(),
        '은(는) 특촬물의 히어로처럼 빛나고 있다. 어쩌면 ',
        urara.sex,
        '은(는) 줄곧 그런 모습이었는지도 모른다.',
      ]);
      await era.printAndWait([
        '그런데 이인삼각? ',
        urara.get_colored_name(),
        '이(가) 이런 말을 안다고? 누가 ',
        urara.sex,
        '에게 가르쳐 준 거지?',
      ]);
      if (
        era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数') ||
        era.get('love:52') >= 50
      ) {
        await urara.say_and_wait([
          'それに知り合って半年だけど、',
          callname,
          '、もうウララにたくさんいろんなことしたよね？',
        ]);
        await urara.say_and_wait([
          'ウララは怖くなかったのに、',
          callname,
          ' のほうが引いてるよ！ ',
          callname,
          '、恥ずかしいの？',
        ]);
        await era.printAndWait([
          'はぁ、これは ',
          urara.get_colored_name(),
          ' に急所を突かれた。その事実の前では、',
          you.get_colored_name(),
          ' も一時の苦笑で返すしかない。',
        ]);
      }
      era.println();
      era.printButton(
        '「うん……でももう一つある。担当トレーナーが、ウララを食べたいだけのオオカミだったら？」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '何かを思い出したのか、ただ話を続けたいだけなのか。より真剣な顔になって、',
        you.get_colored_name(),
        ' は問いを続ける。',
      ]);
      await urara.say_and_wait([
        'オオカミ、本当にこわいよ！',
        callname,
        '、本当にそんなことする？ ウララは赤ずきん？',
      ]);
      await urara.say_and_wait([
        'えへへ～',
        callname,
        ' がウララを食べるって言うなら、ウララ、期待していいの？',
      ]);
      if (era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数')) {
        await urara.say_and_wait(
          'あ、うっかり忘れてた！ オオカミ、もう赤ずきん食べちゃってるよ！',
        );
        await urara.say_and_wait([
          'じゃあオオカミ',
          you.adult_sex_title,
          '、ウララはおいしい？',
        ]);
      }
      era.println();
      await era.printAndWait([
        '思いのほか、すぐそばにいるのに、',
        urara.get_colored_name(),
        ' は無邪気に笑いながら、挑発みたいな切り返しをする。',
      ]);
      await era.printAndWait([
        'まったく信じていない無垢な顔で、',
        urara.get_colored_name(),
        ' は悪戯っぽく瞬き、「小さな',
        urara.sex_code - 1 ? '女の子' : '男の子',
        'の得意げ」でいっぱいだ。',
      ]);
      await era.printAndWait(
        '子供と言い負けるのはよくないが、ここは少し立場を取り戻さないとな。',
      );
      await era.printAndWait([
        '悪戯のつもりで立ち上がり、',
        urara.get_colored_name(),
        ' が反応する前に、',
        you.get_colored_name(),
        ' は手を伸ばして',
        urara.sex,
        'を抱き上げる。',
      ]);

      era.printButton(
        `「ウララがそう言うなら、トレーナーは今、${urara.sex}の味を見るぞ。」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(['え、え？ ', callname, '……？']);
      await era.printAndWait([
        urara.teen_sex_title,
        'の戸惑う反応を無視し、',
        you.get_colored_name(),
        ' はお姫さま抱っこで',
        urara.sex,
        'を持ち上げ、ベッドのある部屋へ軽く運ぶ。',
      ]);
      await era.printAndWait([
        '意外なほど軽い ',
        urara.get_colored_name(),
        ' を「ついで」にベッドへ投げ、',
        you.get_colored_name(),
        ' は後ろ手に「強く」寝室の扉を閉める。',
      ]);
      await era.printAndWait([
        '体がベッドに落ちた瞬間、',
        urara.teen_sex_title,
        'の顔は、さっきまでの羞じらい混じりの戸惑いから、恐怖の混ざった赤へ変わる。',
      ]);
      await era.printAndWait([
        '抵抗も忘れたみたいに、不埒な気配を前に、小さな',
        urara.uma_sex_title,
        'は耳を折り尻尾を挟み、ベッドの上で怖くて丸くなる。',
      ]);
      await urara.say_and_wait([
        callname,
        '？ 今ウララ、まだ寝たくないよ？ ',
        callname,
        '……？ うわあ～',
      ]);
      await era.printAndWait([
        'そのあと',
        urara.teen_sex_title,
        'の高い悲鳴のなか、慌ててどうしていいか分からない ',
        urara.get_colored_name(),
        ' は、',
        you.get_colored_name(),
        ' に両腕を掴まれ、乱暴にベッドへ押さえつけられる。',
      ]);
      await era.printAndWait([
        '普段いちばん近い大人の下に押され、包まれていく体を感じ、',
        urara.teen_sex_title,
        'の見開いた桜瞳に涙が溜まる。',
      ]);
      era.println();
      if (
        era.get('talent:52:喜欢痛苦') ||
        era.get('exp:52:受虐高潮次数') >= 2
      ) {
        await urara.say_and_wait(
          '食べられちゃう、早く抵抗しなきゃ……でも、体がまた言うこと聞かない……',
          true,
        );
        await urara.say_and_wait([
          '怒った ',
          callname,
          ' は、ウララに何するの？ 前よりひどいことする？',
        ]);
        await urara.say_and_wait([
          '今度は ',
          callname,
          ' に閉じ込められるかも。次にみんなに会うとき、体も心も壊れちゃってるかも。',
        ]);
        await urara.say_and_wait(
          'でもそれを考えると、体が止まらず興奮する。もう壊れちゃってるのかも……',
        );
        await urara.say_and_wait('……もっと優しくしてくれたらいいのに……', true);
      } else if (era.get('exp:52:性爱次数') > era.get('exp:52:睡奸次数')) {
        await urara.say_and_wait(
          [
            callname,
            '、ここでそんなことするの？ ',
            callname,
            ' の今の顔、変……',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            '今はだめなのに、体が柔らかくなっちゃう。それに ',
            callname,
            ' は、するときはいつも優しかったから……',
          ],
          true,
        );
        await urara.say_and_wait(
          'ウララ、乱暴にされる？ 痛い？ こわいことが起きる？',
          true,
        );
        await urara.say_and_wait(
          'でもなんで、ああされたりこうされたりするって思うと、体がこんなに熱いの？',
          true,
        );
        await urara.say_and_wait(
          ['もし ', callname, ' がどうしてもって言うなら、ウララも……'],
          true,
        );
      } else {
        await urara.say_and_wait(
          [
            '今は早く抜け出さなきゃ。',
            callname,
            ' でもだめなのに、なんで ',
            callname,
            ' を見てると、手足に力が入らない……',
          ],
          true,
        );
        await urara.say_and_wait(
          '胸が痛いくらい跳ねるのに、体はふにゃふにゃ。この人に食べられてもいいみたい……',
          true,
        );
        await urara.say_and_wait(
          [
            'このあと服を剥がされて、無理にされる。',
            call_30,
            ' が隠してる漫画の女の子みたいに……',
          ],
          true,
        );
        await urara.say_and_wait(
          [
            '大人の匂い、近い……',
            callname,
            ' の匂い、いい。気持ちよくて抵抗したくない。なんで……',
          ],
          true,
        );
        await urara.say_and_wait(
          ['これでいいの？ 体を ', callname, ' に預けるなんて……'],
          true,
        );
      }
      era.println();
      await era.printAndWait([
        '運命を受け入れたみたいに、',
        urara.teen_sex_title,
        'は ',
        you.get_colored_name(),
        ' の下で目を閉じる。',
      ]);
      await era.printAndWait([
        'だが小さな',
        urara.uma_sex_title,
        'が想像したひどい目は来ない。',
        urara.get_colored_name(),
        ' の手を放し、',
        you.get_colored_name(),
        ' は',
        urara.teen_sex_title,
        'の額を「ぱっ」と軽く弾く。',
      ]);
      await urara.say_and_wait('うえ？');
      await era.printAndWait([
        '涙の残る目を驚いて開け、',
        urara.get_colored_name(),
        ' が見るのは、いつもの顔に戻って苦笑しながらそばに立つ ',
        you.get_colored_name(),
        ' だ。',
      ]);

      era.printButton(
        `「だから、${urara.uma_sex_title}なら人間なんて簡単に押しのけられるだろ。今のは何だったんだ？」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        'でも……それは ',
        callname,
        ' が ',
        callname,
        ' だから……',
      ]);

      era.printButton(
        '「これから先、近くで付き合うほかの人が、オオカミだったら？」',
        1,
      );
      await era.input();

      await urara.say_and_wait('うぅ……それは……');
      await era.printAndWait([
        '本当に泣きそうな ',
        urara.get_colored_name(),
        ' を見て、',
        you.get_colored_name(),
        ' は仕方なく',
        urara.sex,
        'のそばに座り、',
        urara.sex,
        'の髪をそっと撫でる。',
      ]);
      await era.printAndWait([
        'しばらくなだめたあと、やっと落ち着いた ',
        urara.get_colored_name(),
        ' は疲れたみたいに、',
        you.get_colored_name(),
        ' のそばへ体を預ける。',
      ]);
      await era.printAndWait([
        'いじめすぎたか？ だが ',
        you.get_colored_name(),
        ' に押し倒されたとき、',
        urara.get_colored_name(),
        ' の顔は「交尾を欲しがる',
        urara.phy_sex_title,
        '」のようだった……',
      ]);
      await era.printAndWait([
        '目を強く擦り、柔らかく ',
        you.get_colored_name(),
        ' のそばに寄り添う小さな',
        urara.uma_sex_title,
        'は、潤んだ目で ',
        you.get_colored_name(),
        ' を見ている。',
      ]);

      await urara.say_and_wait([
        'じゃあ……',
        callname,
        '、本当にもうしないの？',
      ]);
      era.printButton(
        '「……착한 아이는 이제 세수하고 잘 시간이야. 난 책상을 치우고 밖에서 잘게.」(호감+20)',
        1,
      );
      era.printButton(
        '「……늑대라도 이런 때 빨간 망토를 잡아먹지는 않아.」(연모+5)',
        2,
      );
      ret.push(await era.input());

      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 자리를 떠나는 뒷모습을 보며, ',
        urara.get_colored_name(),
        '은(는) 무슨 말인가 하려는 듯 입을 열지만, 결국 ',
        you.get_colored_name(),
        '을(를) 따라 일어설 뿐이다.',
      ]);
      await era.printAndWait([
        '다시 ',
        you.get_colored_name(),
        '에게 안겨 방으로 돌아왔지만, 붙잡을 말은 꺼내지 못한 채 ',
        you.get_colored_name(),
        '이(가) 가볍게 불을 끄고 문 너머로 사라지는 것을 지켜본다.',
      ]);
      await urara.say_and_wait([
        '아직 머릿속이 뒤죽박죽이야…… 그래도 역시 우라라는 ',
        callname,
        '랑 나란히 있고 싶어……',
      ]);
      await urara.say_and_wait([
        '그런데 이번에도 ',
        callname,
        '한테 우라라 이야기를 꺼낼 기회를 못 찾았네……',
      ]);
      await urara.say_and_wait(['うぅ……ここ、全部 ', callname, ' の匂い……']);
      await urara.say_and_wait(
        'でもここはほかの人のベッドだから、自分で気持ちいいことしちゃだめ……',
      );
      await era.printAndWait([
        '少し惜しそうに小さく呟き、暖かさと安心に抵抗するのをやめた小さな',
        urara.uma_sex_title,
        'は、',
        you.get_colored_name(),
        ' の布団のなかでこっそり眠る。',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '오늘 밤, 우라라와 마음을 나눈 당신은 만족하셨나요?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '이인삼각. 낭만적이면서도 쓸모없는 표현이죠. 제가 가장 싫어하는 말 중 하나이기도 하고요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        "하지만 제 취향과는 별개예요. 이건 반드시 '당신'과 '",
        urara.get_colored_name(),
        "'이 함께 써 나갈 이야기가 될 테니까요.",
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '그럼 이야기가 본격적으로 중반에 접어든 지금, 당신은 「좋은 트레이너」 역할을 하고 있나요, 아니면 「나쁜 늑대」 역할을 하고 있나요?',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_6: (() => {
    const title = '마음을 담은 기습!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '밸런타인데이와 초콜릿은 결국 판촉 행사와 상품의 관계예요. 하지만 의외로 싫지는 않네요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '오해하지 마세요. 축제 분위기에 취한 바보 커플들을 구경하는 것보다는, 저는 초콜릿에 더 관심이 있어요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '네? 아니요. 초콜릿 맛을 특별히 좋아하는 건 아니에요.',
      );
      era.drawLine();
      await era.printAndWait(
        '아침에 일어나 세수하고 옷을 갈아입은 뒤, 아침밥을 서둘러 먹고 현관에서 달력도 슬쩍 확인한다.',
      );
      await era.printAndWait([
        '오늘은 밸런타인데이다. 하지만 예정된 일정이 있다. 옷매무새를 가볍게 다듬고, ',
        you.get_colored_name(),
        '은(는) 집 문을 연다.',
      ]);
      await era.printAndWait([
        '그러자 뜻밖의 작은 생물이 바로 밖에서 두 귀를 내밀더니, 너무도 이른 시간에 ',
        you.get_colored_name(),
        '의 오늘 일정에 끼어든다.',
      ]);
      await era.printAndWait([
        '주위에 봉지를 잔뜩 놓아두고 단단히 버티고 선 ',
        urara.get_colored_name(),
        '은(는) 문을 두드리려던 손을 내린다. 그리고 한 걸음 다가와 웃으며 ',
        you.get_colored_name(),
        '을(를) 껴안는다.',
      ]);
      await urara.say_and_wait([callname, '! 아침이야, 좋은 아침——!']);

      era.printButton('「어! 좋은 아…… 우라라?!」', 1);
      await era.input();

      await urara.say_and_wait('에헤헤~ 미안해, 갑자기 찾아와서——!');
      await era.printAndWait([
        urara.get_colored_name(),
        '을(를) 꼭 껴안은, 인간보다 체온이 조금 높은 작은 ',
        urara.uma_sex_title,
        '은(는) 겨울옷 너머로 자신의 ',
        callname,
        '에게 ',
        urara.sex,
        '만의 따뜻함을 전한다.',
      ]);
      await era.printAndWait([
        '2월의 공기는 아직 봄이라고 하기 어렵다. 하지만 달려온 덕분에 지금 작은 ',
        urara.uma_sex_title,
        '의 몸에서는 따뜻하고 활기찬 향기가 난다.',
      ]);
      await era.printAndWait([
        '今日の最初の親密のなかで、担当の少し幼い抱擁に包まれた ',
        you.get_colored_name(),
        ' は、いつものとは違う色っぽさも嗅ぎ取る。',
      ]);

      era.printButton('「잠깐, 갑자기 웬일이야?」', 1);
      await era.input();

      if (high_relation) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait([
            '왜일까~?',
            callname,
            ', 맞혀 볼래? 안 맞혀도 알겠지? 오늘은 특별한 날이니까!',
          ]);
          await era.printAndWait([
            '포옹을 풀고, 온화한 얼굴의 작은 ',
            urara.uma_sex_title,
            '은(는) 까치발을 들고 장난스럽게 ',
            you.get_colored_name(),
            '의 입술에 작고 달콤한 입맞춤을 남긴다.',
          ]);
          await urara.say_and_wait([
            callname,
            "이(가) 제일 좋아하는 뽀뽀야! 그리고 우라라 특제 '진심 초콜릿'…… 이렇게 말하는 거지?",
          ]);
          await era.printAndWait([
            '옷 안에서 예쁘게 포장한 작은 상자를 꺼낸 ',
            urara.get_colored_name(),
            '은(는) 아직 체온이 남은 초콜릿을 ',
            you.get_colored_name(),
            '의 손에 건넨다.',
          ]);
        } else {
          await urara.say_and_wait([
            callname,
            '이라면 알겠지? 우라라도 오늘 뭘 하는 날인지 기억하고 있다고!',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '에게서 떨어진 작은 ',
            urara.uma_sex_title,
            '은(는) 코트 주머니를 뒤져 예쁘게 포장한 작은 선물 상자를 꺼낸다.',
          ]);
          await urara.say_and_wait([
            '짜잔——!',
            callname,
            ', 안에 뭐가 들었는지 알겠어? 다들 기뻐할 만한 거야!',
          ]);
          await urara.say_and_wait([
            '오늘은 ',
            callname,
            '에게 우라라표 초콜릿을 줄게! 지금 바로 열어 봐!',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '어? ',
          callname,
          ', 오늘이 무슨 날인지 잊어버렸어? 으음…… 그럼 우라라가 ',
          callname,
          '에게 알려 줄게!',
        ]);
        await era.printAndWait([
          '조금 쑥스러운 듯 품에서 예쁜 작은 상자를 꺼낸 ',
          urara.get_colored_name(),
          '은(는) 아직 체온이 남은 초콜릿을 ',
          you.get_colored_name(),
          '의 손에 건넨다.',
        ]);
        await urara.say_and_wait([
          "밸런타인데이의 '진심 초콜릿'……? 이렇게 말하는 거지? 아무튼 ",
          callname,
          '거야! 그리고 이것도……',
        ]);
        await era.printAndWait([
          '초콜릿을 쥐여 주는 동시에 작은 ',
          urara.uma_sex_title,
          '은(는) 살짝 까치발을 들고, 틈을 보아 벚꽃빛 입술로 ',
          you.get_colored_name(),
          '의 뺨에 가볍게 입을 맞춘다.',
        ]);
      } else {
        await urara.say_and_wait(
          '오늘은 밸런타인데이잖아? 그래서 다들 줄 초콜릿을 잔뜩 만들었어! 잠깐만……',
        );
        await era.printAndWait([
          '옆에 놓인 봉지를 뒤진 뒤, ',
          urara.get_colored_name(),
          '은(는) 예쁘게 포장한 초콜릿 한 상자를 ',
          you.get_colored_name(),
          '의 손에 건넨다.',
        ]);
        await urara.say_and_wait(
          '으음…… 응! 의리야! 의리 초콜릿…… 다들 그렇게 말하라고 했어!',
        );
        await urara.say_and_wait([
          '그래도 우라라, ',
          callname,
          '에게 정말 고마우니까 이것도 특별히 만들었어! ',
          callname,
          ', 지금 열어 볼래?',
        ]);
      }
      await era.printAndWait([
        urara.get_colored_name(),
        '의 재촉하는 눈길을 받으며 포장을 열자, 안에서 나온 것은 선명한 주황색…… 아니, 짙은 주황색 초콜릿이다.',
      ]);
      await era.printAndWait(
        '이게 초콜릿 색이라고? 대체 뭘 넣어야 이렇게 선명해지는 거지……',
      );

      era.printButton('「색이 정말 대단하네……」', 1);
      await era.input();

      await urara.say_and_wait('어때? 맛있어 보이지?');
      await urara.say_and_wait(
        '밸런타인데이는 평소에 신세 진 사람들한테 초콜릿을 주는 날이잖아! 그래서 어젯밤에 열심히 만들었어!',
      );
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '의 마음을 다치게 하지 않기 위해, ',
        you.get_colored_name(),
        "은(는) '독이 있는 동식물의 경고색 같아'라는 뒷말을 억지로 삼킨다.",
      ]);

      era.printButton('「고마워. 그런데 이거…… 귤 맛이야?」', 1);
      await era.input();

      await urara.say_and_wait(
        '아니, 당근 맛이야! 잘 만들었지? 우라라가 아껴 뒀던 당근도 썼어!',
      );

      era.printButton('「당근……?」', 1);
      await era.input();

      await urara.say_and_wait('응, 당근! 그것도 특별히 고른 걸로!');
      await urara.say_and_wait([
        callname,
        '도 당근이 들어간 초콜릿을 좋아할 것 같아서 만들어 봤어!',
      ]);
      await era.printAndWait([
        '뭐라고 해야 할까. 예상 밖이면서도 말은 되는 답이다. 상자 안에서 주황색으로 빛나는 판을 보며, ',
        you.get_colored_name(),
        '은(는) 생각에 잠긴다.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        '이(가) 당근을 좋아하는 건 안다. 하지만 이런 물질을 만들어 내는 건 연금술의 영역이겠지……',
      ]);
      await era.printAndWait([
        '뭐, 됐다. ',
        urara.get_colored_name(),
        '에게 놀라는 건 진작 익숙해졌고, 밸런타인데이에 초콜릿을 받는 것 자체는 기쁘니까.',
      ]);

      era.printButton('「저기, 초콜릿 지금 먹어 봐도 돼?」', 1);
      await era.input();

      await urara.say_and_wait('에헤헤~ 별말씀을! 전부 먹어 버려도 돼!');
      await era.printAndWait([
        urara.get_colored_name(),
        '의 허락을 받은 ',
        you.get_colored_name(),
        '은(는) 상자 안의 초콜릿 한쪽을 조심스레 떼어 낸다. 색이 특별한 초콜릿은 평범하게 똑 부러지는 소리를 낸다.',
      ]);
      await era.printAndWait(
        "입에 넣자 먼저 당근 특유의 '채소 맛'이 느껴지고, 뒤이어 약간 쌉쌀하고 맑은 단맛이 퍼진다.",
      );
      await era.printAndWait([
        '다만 ',
        urara.get_colored_name(),
        "의 수제 쿠키와는 달리, 이 초콜릿은 맛있다기보다 '말차 맛 마파두부'처럼 독특한 쪽이다……",
      ]);
      await era.printAndWait(
        '하지만 색도 맛도 설명하기 어려운 것치고는, 그래도 먹을 수 있는 맛이다.',
      );
      await era.printAndWait([
        '……그나저나 말도 안 되는 재료로 이렇게 먹을 만한 맛을 내다니, ',
        urara.get_colored_name(),
        '은(는) 정말 천재인가……?',
      ]);

      await urara.say_and_wait([callname, ', 우라라 특제 초콜릿 맛이 어때?']);
      era.printButton(
        '「미…… 묘한 맛이지만, 이 초콜릿 의외로 괜찮은데……」(호감+20)',
        1,
      );
      era.printButton(
        '「응…… 응! 이런 맛의 초콜릿은 처음이야. 신선하네……」(연모+5)',
        2,
      );
      const ret = await era.input();

      await urara.say_and_wait([
        '그렇지! 이따가 상점가에도 나눠 주러 갈 거야!',
        callname,
        '도 같이 갈래? 다들 분명 좋아할 거야!',
      ]);

      era.printButton(
        '「안 갈 이유가 없지. 그런데 우라라, 초콜릿을 얼마나 준비했어?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '다들 줄 초콜릿은 벌써 준비해 뒀어! 전부 우라라가 직접 만든 거야!',
      );
      await era.printAndWait([
        '준비는 끝났다는 듯 뒤에 숨겨 둔 커다란 봉지 몇 개를 들어 올린 ',
        urara.get_colored_name(),
        '은(는) 웃으며 ',
        you.get_colored_name(),
        '에게 자랑한다.',
      ]);
      await urara.say_and_wait(
        '그리고! 다들 줄 초콜릿도 정말 잘 만들었어! 가게마다 맛이 다르다고!',
      );
      await era.printAndWait([
        '그래, 다른 맛…… 잠깐? 우라라의 천진한 미소를 보자, 불길한 예감이 ',
        you.get_colored_name(),
        '의 가슴속에서 끊임없이 솟아난다.',
      ]);
      await urara.say_and_wait(
        '이거야! 채소 가게에는 채소, 생선 가게에는 생선, 정육점에는 고기……',
      );
      await era.printAndWait([
        '떨리는 손으로 ',
        urara.get_colored_name(),
        '에게서 형언하기 어려운 뭔가가 들어 있을 법한 봉지를 받아 든 ',
        you.get_colored_name(),
        '은(는) 결국 안의 상자를 열어 확인할 용기를 내지 못한다.',
      ]);
      await era.printAndWait([
        '직접 먹어 보고도 ',
        urara.get_colored_name(),
        '을(를) 믿고 싶지 않은 건 아니다. 하지만 그 기묘한 재료와 초콜릿의 조합은 들으면 들을수록 불안하다.',
      ]);
      await era.printAndWait([
        '당근 맛이라면 예상할 수 있다. 하지만 저것들까지 맛을 보장한다면……',
        urara.get_colored_name(),
        '은(는) 정말 연금술사일 것이다……',
      ]);
      await era.printAndWait([
        '결국 ',
        you.get_colored_name(),
        '은(는) 무의미한 생각을 그만둔다——아무튼 ',
        urara.get_colored_name(),
        '은(는) 천재다. 그걸로 됐다!',
      ]);

      era.printButton('「음, 뭐, 그래, 우라라, 저, 정말 대단하네!」', 1);
      await era.input();

      await urara.say_and_wait('그렇지? 다들 웃는 얼굴을 볼 생각에 기대돼——');
      await era.printAndWait([
        '분명 볼 수 있을 것이다. 다들 ',
        urara.get_colored_name(),
        '을(를) 위해 애써 웃어 줄 테니까. 다만 그 뒤에는 위장이 무사하기를 빌 수밖에……',
      ]);
      await era.printAndWait([
        '망설임과 각오를 품은 채, ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        "와(과) 상점가로 향한다. '너무나도 떠들썩한' 밸런타인데이를 보낼 준비를 하며.",
      ]);
      await era.printAndWait(
        "오늘 원래 일정은…… '계획은 변화를 따라잡지 못한다'는 늘 있는 일로 치자.",
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '으음…… 갖가지 맛의 초콜릿이라. 초콜릿, 초콜릿……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '뭔가요, 그 눈빛은. 과자 취향이라면 저는 우라라처럼 유치하지 않거든요?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '네? 아직 묻지도 않았다고요? 아…… 쳇, 당신이란 사람은……',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_47_12: (() => {
    const title = '상점가의 아이돌!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     */
    const f = async (urara, nature, inner_urara, you, callname, call_61) => {
      await urara.say_and_wait([
        "에헴…… 다들 안녕! 이 상점가의…… '간판 경주 ",
        urara.uma_sex_title,
        "'? 가 된 우라라야!",
      ]);
      await urara.say_and_wait('아직 잘 모르겠지만, 열심히 할게! 잘 부탁해——!');
      await era.printAndWait([
        '상점가의 특설 무대에 선 ',
        urara.get_colored_name(),
        '은(는) 모두에게 힘차게 손을 흔들고, 무대 아래의 ',
        you.get_colored_name(),
        '에게도 살짝 눈을 찡긋한다.',
      ]);
      await era.printAndWait([
        '무대 아래 인파에 섞여 있던 ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '의 신호를 받고, 곧바로 슬쩍 ',
        urara.get_colored_name(),
        '에게 엄지를 세워 보인다.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '일의 시작은 며칠 전으로 거슬러 올라갑니다.',
      );
      era.drawLine();
      await era.printAndWait([
        '인기 있는 현역 ',
        urara.uma_sex_title,
        '을(를) 홍보 행사에 초청하는 일은 드물지 않다.',
        urara.get_colored_name(),
        '이(가) 초대받는 것도 예상했던 일이다.',
      ]);
      await era.printAndWait([
        '다만 ',
        urara.get_colored_name(),
        '에게 갑자기 들어온 의뢰들은 장소가 서로 달라도, 자세히 보면 모두 같은 지역에서 왔다.',
      ]);
      await era.printAndWait([
        '상점가 사람들은 정말 ',
        urara.get_colored_name(),
        '을(를) 아끼는구나. 그렇게 생각하며, ',
        you.get_colored_name(),
        '은(는) 두툼한 의뢰서 묶음을 책상 위에 가지런히 놓는다.',
      ]);
      await urara.say_and_wait(
        '으음…… 그러니까 다들 우라라가 도와주면 좋겠다는 거야?',
      );

      era.printButton(
        '「이번엔 정식으로 하는 일이야. 하지만 괜찮아, 우라라는 평소처럼 하면 돼.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '의 질문에 답하며, ',
        you.get_colored_name(),
        '은(는) 손에 든 의뢰서를 가까이 다가온 작은 ',
        urara.uma_sex_title,
        '에게 건넨다.',
      ]);
      await era.printAndWait('지금 두 사람에게는 거절할 이유가 없다.');
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 일상에서 ',
        urara.sex,
        '을(를) 돌봐 준 사람들에게 보답하고 싶어 한다. 진정한 상점가의 간판이 된다면, ',
        urara.sex,
        '은(는) 모두에게 더 구체적인 도움을 줄 수 있을 것이다.',
      ]);
      await era.printAndWait([
        '트레이너 입장에서도 일을 맡으면 인지도가 높아진다. 지금 ',
        urara.get_colored_name(),
        '에게 응원의 힘은 훈련 못지않게 중요하다.',
      ]);
      await era.printAndWait([
        '다만 선택은 같아도, ',
        urara.get_colored_name(),
        '은(는) 상황을 잘 모를 것이다. 어떻게 할까……',
      ]);
      if (era.get('cflag:60:招募状态') === recruit_flags.yes) {
        await era.printAndWait([
          '괜찮겠지? ',
          nature.get_colored_name(),
          '의 의견을 들어 볼까? ',
          urara.sex,
          '도 상점가에서 인기 있는 ',
          urara.uma_sex_title,
          '이니까.',
        ]);
        await era.printAndWait([
          '찾아가 볼까? 지금 ',
          urara.sex,
          '을(를) 번거롭게 하는 것도 내키지 않고, 이건 ',
          you.get_colored_name(),
          '와(과) ',
          urara.get_colored_name(),
          '의 일이다. 하지만 실패하면 골치 아플 텐데……',
        ]);
      }
      era.println();
      await era.printAndWait(
        '뭐, 고민만 해 봐야 소용없다. 닥치면 어떻게든 길이 생기겠지.',
      );
      await urara.say_and_wait([
        '그래도 ',
        call_61,
        "이(가) 그랬어. '일할 때는 예의를 지켜야 해!' 그래서 지금은 제대로 진지하게 하고 있다고!",
      ]);
      await urara.say_and_wait(
        '상점가 아저씨랑 아주머니들은 평소처럼 하면 된다고 했어. 그래도 조심할게!',
      );
      await era.printAndWait([
        '다시 상점가로 돌아와, ',
        you.get_colored_name(),
        '의 곁을 걸으며 ',
        urara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '옆에서 작은 목소리로 말한다.',
      ]);
      await era.printAndWait([
        '개회 인사는 무사히 마쳤고, 지금 ',
        urara.get_colored_name(),
        '은(는) 의뢰대로 상점가의 가게들을 하나씩 돌고 있다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 해야 할 일을 이미 알고 있다면 걱정할 필요는 없겠지.',
      ]);
      await urara.say_and_wait(
        '아, 아저씨 안녕! 오늘 물건도 신선하네! 응! 또 도와주러 올게!',
      );
      await urara.say_and_wait(
        '아주머니, 좋은 아침! 맞아, 채소 사서 돌아가는 거야! 우라라는 이게 좋아!',
      );
      await urara.say_and_wait([
        '도와줄게! 괜찮아, ',
        urara.uma_sex_title,
        '의 힘은 굉장하니까. 그럼 간다——!',
      ]);
      await urara.say_and_wait(
        '여기서 먼저 쭉 가다가 오른쪽으로 돌면 돼! 별말씀을! 언니들도 조심해서 가!',
      );
      await urara.say_and_wait(
        '울지 마. 남자아이가 씩씩해야지! 엄마는 아직 근처에 계실 거야…… 아! 찾았다! 여기야——!',
      );
      await urara.say_and_wait([
        '응? ',
        urara.elder_sibling_sex_title,
        '은(는) 경주 ',
        urara.uma_sex_title,
        '이야! 다음에 응원해 준다고? 고마워!',
      ]);
      await era.printAndWait([
        '아는 사람에게도 처음 만난 사람에게도 친근하게 말을 건네는 ',
        urara.get_colored_name(),
        '의 천진함은 어디를 가든 친근한 매력이 된다.',
      ]);
      await era.printAndWait([
        '그림책 속 동화처럼, ',
        urara.get_colored_name(),
        '이(가) 가는 곳마다 사람들이 모여들고 꽃이 핀 듯 활기가 넘친다.',
      ]);
      await era.printAndWait([
        '좋구나. 이렇게 따뜻한 광경을 본 게 언제였더라. 조금 떨어져 ',
        urara.get_colored_name(),
        '의 뒤를 걸으며 조용히 ',
        urara.sex,
        '을(를) 지켜보던 ',
        you.get_colored_name(),
        '은(는) 그렇게 생각한다.',
      ]);
      await era.printAndWait([
        '이만큼 사랑받는 데다 달리는 실력까지 한 단계 더 올라간다면, 언젠가는 ',
        urara.get_colored_name(),
        '의 소원도 이뤄지지 않을까.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 말한 것처럼, ',
        urara.sex,
        '이(가) 계속 달려 나간다면……',
      ]);
      await you.say_as_passer_by_and_wait(
        '상점가 주민',
        '저기, 그쪽 분이 우라라의 트레이너신가요?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 지금 상황을 생각하고 있을 때, 곁을 지나던 여성이 조용히 ',
        you.get_colored_name(),
        '을(를) 불러 세운다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 그 여성이 상점가 진흥 조직의 일원임을 알아본다.',
        urara.get_colored_name(),
        '의 입학 초기부터 ',
        urara.sex,
        '을(를) 지켜봐 온 지인이라고 한다.',
      ]);

      era.printButton('「네, 우라라에게 일을 맡겨 주셔서 감사합니다.」', 1);
      await era.input();

      await you.say_as_passer_by_and_wait(
        '상점가 주민',
        `감사는 저희가 드려야죠. 우라라가 와 준 덕분에, ${urara.sex}에게 정말 많은 도움을 받았어요.`,
      );
      await you.say_as_passer_by_and_wait(
        '상점가 주민',
        '우라라가 온 뒤로 이 상점가도 활기가 생겼어요. 전에는 정말 썰렁했거든요.',
      );
      await era.printAndWait([
        '감사의 말을 들으며, ',
        you.get_colored_name(),
        '도 이 거리에 관해 생각나는 것이 있다.',
      ]);
      await era.printAndWait(
        '복합 상업 지구가 발달하면서, 기능이 부족한 전통 상점가는 도시 안에서 설 자리를 점점 잃고 있다.',
      );
      await era.printAndWait([
        '발길이 줄어들면 한산해지고 쇠락하기 마련이다. 하지만 ',
        urara.get_colored_name(),
        '이(가) 찾아와 열심히 돌아다니면서 이 거리에 새로운 활력을 불어넣었다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 열정에는 다른 의도가 없다. 하지만 ',
        urara.sex,
        '은(는) 이미 오래전부터 자신도 모르게 이 거리의 모두를 돕고 있었다. 다만……',
      ]);
      await you.say_as_passer_by_and_wait(
        '상점가 주민',
        '……우라라는 실력이 그렇게 뛰어난 편은 아니죠? 전부터 들었어요. 그 아이는 늘 이기지 못한다고……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 생각을 끊으며, 눈앞의 여성은 망설이다가 다시 입을 연다.',
      ]);

      era.printButton('「그래도 우라라는 조금씩 강해지고 있어요.」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 나름 근거 있는 판단이라고 생각하지만, 분위기가 어딘가 이상하다.',
      ]);
      await you.say_as_passer_by_and_wait(
        '상점가 주민',
        `네, ${urara.sex}이(가) 열심히 한다는 건 믿어요. 하지만…… ${urara.sex}의 재능은 다른 아이들만 못하잖아요?`,
      );
      await you.say_as_passer_by_and_wait(
        '상점가 주민',
        '그러니까 천천히 가도 괜찮아요. 우라라가 계속 즐겁게 달려 주기만 하면 저희도 힘이 나거든요.',
      );
      await you.say_as_passer_by_and_wait(
        '상점가 주민',
        '다시 한번 감사드려요. 저희는 그것만으로도 충분히 기뻐요.',
      );
      await era.printAndWait([
        '그렇게 말하며 그녀는 다정하게 ',
        urara.get_colored_name(),
        '을(를) 바라본다. 부모가 자식을 생각하는 듯한, 걱정 어린 눈길이다.',
      ]);
      await era.printAndWait([
        '부모 같은 마음으로 작은 ',
        urara.uma_sex_title,
        "을(를) 지키는 사람들은 진심으로 ' ",
        urara.sex,
        "이(가) 즐겁게 달리면 그걸로 됐다'고 생각하는지도 모른다.",
      ]);
      await era.printAndWait([
        '하지만 정말 그것뿐이라면 최선의 답은 될 수 없다. 인사를 하고 떠나는 여성의 뒷모습을 지켜보며, ',
        you.get_colored_name(),
        '은(는) 복잡한 마음으로 고개를 젓는다.',
      ]);
      await era.printAndWait([
        '다른 사람의 선의를 부정하려는 건 아니다. 다만 ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '의 소원을 알고, 성장 중인 ',
        urara.sex,
        '이(가) 거기에 머무르지 않으리라는 것도 보인다.',
      ]);
      await era.printAndWait(
        '그래도 앞길은 멀다. 소원이 꽃피는 모습을 보여 주려면 계속 나아가는 것이 정답이다.',
      );
      await era.printAndWait([
        '방금 산 음료를 손에 들고, ',
        you.get_colored_name(),
        '은(는) 일을 마친 뒤 인파 속에서 ',
        you.get_colored_name(),
        '을(를) 찾는 ',
        urara.get_colored_name(),
        '에게 웃으며 손을 흔든다.',
      ]);

      era.printButton('「우라라, 수고했어!」', 1);
      await era.input();

      await urara.say_and_wait([
        callname,
        '! 오늘 우라라는 다들한테 도움이 됐어?',
      ]);
      await era.printAndWait([
        '일을 마치고 벤치에서 쉬던 ',
        urara.get_colored_name(),
        '은(는) 석양을 받으며, ',
        you.get_colored_name(),
        '이(가) 건넨 주스를 받아 든다.',
      ]);
      await era.printAndWait([
        '하루 종일 바쁘게 움직이다 이제야 한숨 돌린 ',
        urara.get_colored_name(),
        '옆에서, ',
        you.get_colored_name(),
        "은(는) 아까의 '하지만'을 다시 생각한다.",
      ]);
      await era.printAndWait(
        '……이건 단순히 성장만의 이야기가 아니다. 시대의 흐름이 바뀌는 문제와 맞닿아 있다.',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 해 줄 수 있는 일은 오래가지 못한다. 더 큰 전환점이 없다면 한 사람의 힘만으로는 감당할 수 없다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 옷자락이 당겨지는 걸 느낀다. 돌아보니 부드러운 석양이 ',
        urara.get_colored_name(),
        '에게 내려앉아, ',
        urara.sex,
        '의 차분한 작은 얼굴을 따뜻한 빛으로 물들이고 있다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 알고 있어. 거리 사람들이 힘든 것도, 지금 우라라로는 미래를 바꾸기 어렵다는 것도.',
      ]);
      await urara.say_and_wait(
        '그래도 언젠가 상점가가 없어지고 다들 흩어져도, 우라라가 하고 싶은 건 안 변해.',
      );
      await era.printAndWait([
        '멀리 붉은 해를 바라보는 작은 ',
        urara.uma_sex_title,
        '의 진지한 미소에는 반드시 해내겠다는 의지가 담겨 있다.',
      ]);
      await urara.say_and_wait(
        '다들한테 보여 줄 거야. 우라라는 여기의 아이돌로서, 상점가 사람들에게 웃음이랑 희망을 전해 줄 거야!',
      );
      await urara.say_and_wait(
        '그리고 트레센 친구들도 여기를 좋아해. 포기하지 않으면 언젠가 길이 생길 거야. 우라라가 다들한테 보여 줄게!',
      );
      await era.printAndWait([
        '마지막 망설임이 ',
        urara.get_colored_name(),
        '의 대답과 함께 사라진다. 어느새 태양은 눈부신 노을빛을 ',
        you.get_colored_name(),
        '에게도 드리우고 있다.',
      ]);

      era.printButton('「같이 돌아가자.」', 1);
      await era.input();

      await urara.say_and_wait('응, 돌아가자!');
      await era.printAndWait([
        '마음을 가다듬고, ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '에게 손을 내민다.',
        urara.get_colored_name(),
        '은(는) 웃으며 ',
        you.get_colored_name(),
        '의 손을 잡는다.',
      ]);
      await era.printAndWait([
        '계속 달리다 보면 언젠가 길은 생긴다. 강하지 않은 ',
        urara.get_colored_name(),
        '도, 긍정적으로 살아가는 주변 사람들도.',
      ]);
      await era.printAndWait([
        '석양을 받으며, ',
        you.get_colored_name(),
        '와(과) ',
        urara.get_colored_name(),
        '은(는) 돌아가는 길에 오른다.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '하지만 그것만으로, 노력만으로 정말 누군가를 구할 수 있을까요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '죄송해요, 또 하지 말아야 할 말을 했네요. 그럼 당신은 어떻게 생각하시나요?',
      );
      era.printButton(
        '「작년 연말에 이미 이야기했잖아?」(중거리&장거리 적성 상승)',
        1,
      );
      era.printButton(
        '「아직 시간은 있어. 해 보지 않으면 모르잖아.」(잔디 적성 상승)',
        2,
      );
      era.printButton(
        '「선택했으니 끝까지 책임질 거야.」(모든 능력+2, 훈련 특기율 상승)',
        3,
      );
      const ret = await era.input();
      await inner_urara.say_as_unknown_and_wait(
        "……의외라고 해야 할까요. 당신은 그렇게 생각하시는군요…… 사실 '우라라'도 대체로 같은 생각이에요.",
      );
      await inner_urara.say_as_unknown_and_wait([
        '제 생각은 변하지 않아요. 하지만 ',
        urara.sex,
        '이(가) 상처받게 하고 싶지는 않아요. 지금의 걸음으로 ',
        urara.sex,
        '을(를) 소중히 대해 주세요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '다만 가볍든 무겁든, 짊어진 것과 각오를 품고 나아가지 않으면 강해질 수는 없겠죠. 몇 번을 겪어도 싫네요……',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_47_27: (() => {
    const title = '응원회!?';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_61,
      high_relation,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '조금은 정확하지 않을지도 모르지만, 트레이너 ',
        you.adult_sex_title,
        '(당신)와 우라라는 상상도 하지 못했던 과거를 분명 뛰어넘어 왔어요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '부럽네요. 이야기의 주인공은 아직 강하다고 할 수 없지만, 길가의 사람들은 벌써 뒤에 남겨 두었군요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '그럼 뒤에 남겨진 사람들은…… 죄송해요, 지금 할 말은 아니네요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '지금은 어렵게 얻은 보답을 느긋하게 즐기세요.',
      );
      era.drawLine();
      await era.printAndWait([
        '상점가 홍보 일을 마친 어느 날, ',
        urara.get_colored_name(),
        '와(과) 함께 외출했다가 길에서 있었던 일이다.',
      ]);
      await urara.say_and_wait([
        '오늘 산책 재밌었어! ',
        callname,
        ', 이따가 같이 과자 먹자!',
      ]);

      era.printButton('「그 뒤에는 훈련도 제대로 해야 한다?」', 1);
      await era.input();

      await urara.say_and_wait('네에——');
      await era.printAndWait([
        you.get_colored_name(),
        '의 당부에 망설임 없이 대답하는, 한층 성장한 작은 ',
        urara.uma_sex_title,
        '에게서는 처음 훈련할 때의 망설임이 보이지 않는다.',
      ]);
      await era.printAndWait([
        '서로를 더 깊이 이해하게 되면서, ',
        you.get_colored_name(),
        '은(는) 작은 ',
        urara.uma_sex_title,
        '이(가) 발전의 길을 걷고 있음을 느낀다.',
      ]);
      await era.printAndWait([
        '그래도 아무리 달라져도, ',
        urara.get_colored_name(),
        '은(는) 모두를 위해 달리는 ',
        urara.get_colored_name(),
        '그대로다.',
      ]);
      await era.printAndWait([
        '돌아보니 파란불에 길 건너로 달려가 할머니를 부축하는 ',
        urara.get_colored_name(),
        '이(가) 보인다.',
        you.get_colored_name(),
        '도 익숙하다는 듯 ',
        urara.sex,
        '의 열성적인 발걸음을 뒤따른다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '와(과) 함께 다른 사람의 급한 일을 도와드린 뒤, ',
        you.get_colored_name(),
        '와(과) 작은 ',
        urara.uma_sex_title,
        '은(는) 다시 한번 ',
        urara.sex,
        '이(가) 이어 준 선의를 돌려받는다.',
      ]);
      await era.printAndWait([
        '할머니 「당신이 ',
        urara.sex,
        '의 보호자시죠? 이 아이 참 기운이 좋네요.」',
      ]);
      await urara.say_and_wait([
        '응, 우라라의 좋은 점은 기운이 넘친다는 거야! 하지만 ',
        callname,
        '은(는) 보호자가 아니라, ',
        callname,
        '이야!',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 말을 듣고 할머니는 빙그레 웃으며 ',
        you.get_colored_name(),
        '을(를) 바라보다가, 다시 옆의 벚꽃빛을 향해 다정한 시선을 돌린다.',
      ]);
      await era.printAndWait('할머니 「그렇구나…… 너는 트레센 학생이니?」');
      await urara.say_and_wait('응! 하루 우라라야. 데뷔한 지도 벌써 꽤 됐어!');
      await era.printAndWait(
        '할머니 「우라라…… 정말 우라라였구나. 다들 말하던 대로 금방 알아보겠네.」',
      );

      era.printButton('「그럼 전부터 우라라를 알고 계셨나요?」', 1);
      await era.input();

      await era.printAndWait(
        '할머니 「네, 그 상점가에 자주 가거든요. 거기 마스코트야 당연히 알죠.」',
      );
      await era.printAndWait(
        "할머니 「요즘 그쪽 가게 사람들이 '우라라 응원회'를 만든다더군요. 거리의 젊은 사람들까지 나서고 있어요.」",
      );

      era.printButton('「네? 응원회요?」', 1);
      await era.input();

      await era.printAndWait([
        '갑자기 ',
        you.get_colored_name(),
        '은(는) 뜻밖의 장소에서 뜻밖의 소식을 듣는다.',
        urara.get_colored_name(),
        '에게도 응원회가 생기는구나.',
      ]);
      await urara.say_and_wait([
        '응원회……? ',
        callname,
        ', 잘 모르겠어. 응원회는 뭘 하는 거야?',
      ]);

      era.printButton(
        '「어떻게 설명할까…… 특정한 사람을 응원하면서 자금 같은 여러 가지 지원을 해 주는 단체…… 려나.」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '그렇구나…… 응! 하나도 모르겠어! 아무튼 다들 더 응원해 주고 싶다는 거지?',
      );
      await era.printAndWait([
        '뭐, 억지로 이해시킬 필요는 없다.',
        urara.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '이니까.',
        urara.sex,
        '의 입장에서 보면 그런 이해도 틀리지는 않겠지.',
      ]);
      await era.printAndWait(
        '할머니 「그래도 우라라 말이 맞아. 신기한 아이네. 나도 응원회에 들어가 볼까?」',
      );
      await urara.say_and_wait([
        '어? 정말? 그럼…… ',
        callname,
        ', 그 응원회에 우라라도 들어가도 돼?',
      ]);

      inner_urara.say_as_unknown([
        '네? 그건…… 트레이너 ',
        you.adult_sex_title,
        '(당신)는 어떻게 생각하시나요——',
      ]);
      era.printButton(
        '「아니, 내가 들어가는 건 그렇다 치고, 네가 너 자신을 응원하려고?」(호감+10)',
        1,
      );
      era.printButton(
        '「들어가고 싶기는 한데, 우라라는 자기를 응원할 생각이야?」(연모+2)',
        2,
      );
      const ret = await era.input();

      await urara.say_and_wait([
        '응! 맞아…… 어라? 뭔가 이상한가? ',
        callname,
        ', 또 웃음거리 되는 거야?',
      ]);
      await era.printAndWait([
        '스스로도 이상하다는 걸 깨닫자, ',
        urara.get_colored_name(),
        '도 조금 쑥스러워한다.',
      ]);
      await era.printAndWait(
        '할머니 「후후후, 재미있는 아이네. 다들 이야기할 만도 하구나……」',
      );
      await era.printAndWait([
        '할머니의 웃는 얼굴이 달라지는 걸 보며, ',
        you.get_colored_name(),
        "은(는) 담당이 '얼마나 사랑받는지' 한층 더 깊이 이해한다.",
      ]);
      await era.printAndWait([
        { isBr: true },
        '도와드린 할머니와 헤어진 뒤, ',
        you.get_colored_name(),
        '에게 기댄 ',
        urara.get_colored_name(),
        "은(는) 아직도 '응원회'에 관해 생각하는 듯하다.",
      ]);
      if (high_relation) {
        await urara.say_and_wait(
          '모르는 사이에 셀 수도 없이 많은 사람들이 좋아해 주고 있었네.',
        );
        await urara.say_and_wait(
          '조금 부담스럽기도 해! 그래도 괜찮아. 더 열심히 하면 되지!',
        );
        await urara.say_and_wait([
          '그리고! 다들 응원해 줄 때는 정말 빨리 달리는 것 같아! ',
          callname,
          '은(는) 어떻게 생각해?',
        ]);
        await era.printAndWait([
          '정말 그럴지도 모른다.',
          urara.get_colored_name(),
          '의 웃는 얼굴을 보며, ',
          you.get_colored_name(),
          '은(는) ',
          urara.uma_sex_title,
          '에 관한 전승을 떠올린다.',
        ]);
      } else {
        await urara.say_and_wait(
          '다들 정말 열성적이네. 그래도 조금 부담스러워!',
        );
        await urara.say_and_wait([
          '하지만 괜찮겠지! ',
          call_61,
          '도 압박이 없으면 힘이 안 나온다고 했으니까!',
        ]);
        await urara.say_and_wait(
          '게다가 다들 응원해 주면 우라라도 더 빨리 달릴 수 있겠지?',
        );
        await era.printAndWait([
          '그렇겠지.',
          urara.get_colored_name(),
          '을(를) 앞에 두고, ',
          you.get_colored_name(),
          '은(는) 도시 전설 같은 이야기를 떠올린다.',
        ]);
      }
      era.println();
      await era.printAndWait([
        "'응원하는 사람이 많을수록 경주 ",
        urara.uma_sex_title,
        "의 힘은 커진다', '다른 사람의 축복을 자신의 힘으로 바꿀 수 있다'.",
      ]);
      await era.printAndWait([
        '초능력 만화의 설정 같지만, 정령 같은 ',
        urara.uma_sex_title,
        '이라면 무엇이든 가능하다.',
      ]);
      await era.printAndWait([
        '적어도 ',
        urara.get_colored_name(),
        '에게는 그 점이 뚜렷하게 드러난다.',
      ]);

      era.printButton(
        '「그래. 이대로 더 많은 사람들에게 우라라가 달리는 모습을 보여 주자.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '이대로, 즉 계속 팬을 늘려 가자는 것이다.',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '의 그런 힘을 의심한 적이 없다.',
      ]);
      await era.printAndWait(
        '계속 출전할지, 다시 훈련에 무게를 둘지, 어느 쪽이든 계획을 다시 짜야 할지도 모른다.',
      );
      await era.printAndWait([
        '하지만 ',
        urara.get_colored_name(),
        '은(는) 언제 어디서나 결국 ',
        urara.sex,
        '의 ',
        callname,
        '을(를) 믿고, 힘을 북돋는 미소를 보낸다.',
      ]);
      await urara.say_and_wait([
        '알았어! 평소처럼! 우라라는 ',
        callname,
        '와(과) 함께 나아갈 거야!',
      ]);
      if (era.get('love:52') >= 50) {
        era.println();
        await era.printAndWait([
          { isBr: true },
          '하지만 점점 더 많은 사람들에게 사랑받는 ',
          urara.get_colored_name(),
          '을(를) 보며, ',
          you.get_colored_name(),
          '의 가슴 깊은 곳에서는 자신도 모르게 초조함이 조금씩 커진다.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          ' は善意を平等に人へ向ける。なら',
          urara.sex,
          'がいつか、下心のある誰かに手元からさらわれてもおかしくない。',
        ]);
        await era.printAndWait([
          urara.sex,
          'に癒やされたトレーナーは、担当の成長を喜びながら、矛盾して',
          urara.sex,
          'が分ける「愛」に「嫉妬」する。',
        ]);
        await era.printAndWait(
          '考えが間違っていると分かっていても、負の感情は強くなくても、それでも独占したくなる。',
        );
        await era.printAndWait([
          'あの明るい笑顔を。あの小さく柔らかい体を。「',
          urara.get_colored_actual_name(),
          '」という名の春の光を。',
        ]);
        await era.printAndWait([
          '気づかないうちに、無邪気で幼い小さな',
          urara.uma_sex_title,
          'は、大切な人の心にもう一粒、「魔性」の種を植えたようだ……',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '그 뒤 응원회가 어떻게 됐는지는 알 수 없었지만, 우라라의 팬 수는 조용히 늘어났습니다.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '다만 지금까지의 경험 덕분에, 트레이너 ',
        you.adult_sex_title,
        '(당신)는 크게 놀라지 않았습니다.',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '과장해서 말하자면, 누구나 우라라를 좋아하게 되는 건 언젠가 당연한 일이 될까요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        '이(가) 평소대로 지내면서 바깥의 변화에 부담을 느끼지 않으면 되겠죠…… 뭐, 우라라니까요……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '제가 무슨 말을 하는 걸까요. 신○ 아카네도 아닌데 말이죠.',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '여름 합숙(클래식급) 시작';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '학교 소풍 같네요. 그래도 결국 훈련하러 가는 거잖아요?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '그래도 즐거우면 됐죠. 즐겁다면……',
      );
      era.drawLine();
      await era.printAndWait([
        '중앙 트레센은 매년 ',
        urara.uma_sex_title,
        '들의 실력을 키우는 여름 합숙을 연다. 이번에는 ',
        you.get_colored_name(),
        '도 ',
        urara.get_colored_name(),
        '의 참가를 신청했다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '에게는 실력을 키울 절호의 기회다. 다만 작은 ',
        urara.uma_sex_title,
        '의 마음속에서는 나들이에 대한 설렘이 훨씬 더 큰 듯하다.',
      ]);
      await era.printAndWait([
        '그래도 ',
        urara.get_colored_name(),
        '이(가) 이런 상태인 건 나쁘지 않다. 마음과 몸이 건강한 편이 무리한 훈련보다 훨씬 효과적이다.',
      ]);
      await era.printAndWait([
        '게다가 ',
        urara.sex,
        '은(는) 아직 완전히 어른이 되지는 않은 아이다……',
      ]);
      await urara.say_and_wait([
        callname,
        '! 저쪽 하늘은 정말 멀다! 어디까지 이어져 있는 거야?',
      ]);
      await urara.say_and_wait([
        '아! 바다가 조금 보였어! ',
        callname,
        ', 바닷가에서 달리면 기분 좋아?',
      ]);
      await era.printAndWait([
        '차창 밖을 보며, ',
        you.get_colored_name(),
        '옆에 앉은 ',
        urara.get_colored_name(),
        '은(는) 흥분을 감추지 못하고 연달아 ',
        you.get_colored_name(),
        '에게 질문한다.',
      ]);
      if (high_relation) {
        await urara.say_and_wait(
          '에헤헤~ 다 같이 자고 오는 거야! 우라라, 계속 기대하고 있었어!',
        );
        await urara.say_and_wait([
          callname,
          '도 즐거워? 우라라는 ',
          callname,
          '와(과) 매일 바다에서 놀고 싶어!',
        ]);
        await era.printAndWait([
          '부드러운 몸을 ',
          you.get_colored_name(),
          '에게 기대며, ',
          urara.get_colored_name(),
          '은(는) 분홍빛 작은 새처럼 ',
          you.get_colored_name(),
          '의 귓가에서 즐겁게 노래한다.',
        ]);
      } else {
        await urara.say_and_wait('응! 우라라는 다 같이 자고 오는 거 처음이야!');
        await urara.say_and_wait([
          callname,
          '도 다른 사람이랑 자고 온 적 있지? ',
          callname,
          '은(는) 그런 거 재밌어?',
        ]);
        await era.printAndWait([
          '말만큼 즐거워 보이지는 않지만, ',
          urara.get_colored_name(),
          '의 몸은 솔직하게 ',
          you.get_colored_name(),
          '에게 기대고 있다.',
        ]);
      }
      if (era.get('love:52') >= 50) {
        era.println();
        await urara.say_and_wait([
          'あとあと！ 使えるかは分からないけど、ウララ、',
          callname,
          ' といっぱいくっつける準備、してあるよ？',
        ]);
        await urara.say_and_wait([
          '砂浜でも、夜ふたりのときでも、ウララは大丈夫だよ～ ',
          callname,
          '、楽しみ？',
        ]);
        await era.printAndWait([
          callname,
          ' は、もう少し控えたほうがいいと思う。',
          urara.get_colored_name(),
          ' の無邪気で甘い笑顔に、向き合いたくない ',
          you.get_colored_name(),
          ' は黙って顔をそらす。',
        ]);
      }
      era.println();
      await era.printAndWait([
        '이 나이의 작은 ',
        urara.uma_sex_title,
        '이(가) 놀고 싶어 하는 건 좋다. 하지만 ',
        urara.get_colored_name(),
        '은(는) 너무 들떠 있다. 괜찮을까.',
      ]);
      await era.printAndWait([
        '불안해도 시간도, 작은 ',
        urara.uma_sex_title,
        '도 기다려 주지 않는다. 전력을 다할 수밖에.',
      ]);
      await era.printAndWait('여름 합숙, 시작!');
    };
    f.title = title;
    return f;
  })(),
  we_47_29: (() => {
    const title = '여름 합숙(클래식급) 도중';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     * @param {PrintedSpan} callname_30 ライスシャワーのプレイヤーへの呼び方
     * @param {PrintedSpan} r_call_u ライスシャワーのハルウララへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (
      urara,
      inner_urara,
      rice,
      you,
      callname,
      call_30,
      call_61,
      callname_30,
      r_call_u,
      high_relation,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        '『',
        urara.sex,
        "이(가) 즐거우면 그걸로 됐다.' 그래서 ",
        urara.sex,
        "은(는) 웃는 얼굴로 계속 달립니다. 그것이 ' ",
        urara.get_colored_actual_name(),
        "'입니다.",
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '하지만 그 겉모습 아래에는, ',
        urara.sex,
        '이(가) 아직 마주한 적 없는 자신도 있을지 모르죠……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '여름 합숙 중 어느 오후, 기분 전환을 하러 나온 ',
        you.get_colored_name(),
        '은(는) 바닷바람을 맞으며 ',
        urara.uma_sex_title,
        '들이 훈련하는 해변으로 온다.',
      ]);
      await era.printAndWait([
        '오늘 훈련은 이미 끝났다. 아무도 없을 터인 모래사장에서, ',
        you.get_colored_name(),
        '은(는) 외로운 작은 그림자를 발견한다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 수영복 차림으로 혼자 바닷가에 앉아, 풀린 리본을 손에 들고 있다. 젖은 벚꽃빛 머리카락에 노을빛이 반사된다.',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '은(는) 바다로 지는 해를 멍하니 바라보며, 훈련으로 뻣뻣해진 다리를 양손으로 주무르고 있다.',
      ]);
      await era.printAndWait([
        '낮에 있었던 2500미터 병주에서 ',
        urara.sex,
        '은(는) 참패했다.',
        you.get_colored_name(),
        '도 그 거리가 ',
        urara.sex,
        '에게 너무 길다는 걸 안다. 몸이 힘든 것도 당연하다.',
      ]);
      await era.printAndWait([
        '하지만 몸만의 문제는 아니다. 혼자 먼 곳을 바라보는 ',
        urara.get_colored_name(),
        '의 얼굴은 어떤 감정을 억누르는 듯하다.',
      ]);
      era.printButton(
        '「오늘 우라라는 별로 즐거워 보이지 않네. 무슨 일 있어?」',
        1,
      );
      await era.input();
      await era.printAndWait([
        urara.get_colored_name(),
        '의 곁으로 다가가, ',
        you.get_colored_name(),
        '은(는) 바닷물에 젖은 귀 커버를 살며시 벗겨 주고 작은 목소리로 ',
        urara.sex,
        '에게 묻는다.',
      ]);
      await era.printAndWait([
        '다가오는 발소리를 이미 들었는지, 작은 담당은 ',
        you.get_colored_name(),
        '의 등장에 놀라지는 않는다. 다만 급히 지어 낸 미소는 조금 어색하다.',
      ]);
      await urara.say_and_wait([
        '괜찮아, ',
        callname,
        '. 병주하고 나서 우라라, 그냥 생각을 좀 했어……',
      ]);
      era.printButton(
        '「병주 때문이야? 괜찮아, 그 거리는 너무 길었어. 힘들면 내일은 쉬어도 돼.」',
        1,
      );
      await era.input();
      await urara.say_and_wait([
        '아니야! 그냥…… ',
        callname,
        ', 우라라가 너무 많이 진 걸까?',
      ]);
      await era.printAndWait([
        '응? 너무 많이 졌다고…… 다른 사람이 그렇게 말한다면 이해할 수 있다. 하지만 ',
        urara.get_colored_name(),
        '이(가)?',
      ]);
      await era.printAndWait([
        '곰곰이 생각해 보니, ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '이(가) 지고 나서 유난히 풀이 죽은 모습을 본 적이 없는 것 같다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '와(과) 바닷가에 나란히 앉아, ',
        you.get_colored_name(),
        '은(는) 담당이 이야기를 꺼내기를 조용히 기다린다.',
      ]);
      await urara.say_and_wait([
        '사실 ',
        call_30,
        '때문이야. 하지만 ',
        call_30,
        '이(가) 이상한 말을 한 건 아니야. 그냥 우라라가 잘 모르겠어서.',
      ]);

      era.printButton(`「${call_30.content}? 라이스 샤워 말이야?」`, 1);
      await era.input();

      await urara.say_and_wait([
        '응. 그날 모의 레이스에서 지고 풀이 죽은 ',
        call_30,
        '을(를) 위로했더니, ',
        call_30,
        '이(가) 져도 슬퍼지지 않는 비결을 물어봤어.',
      ]);
      await urara.say_and_wait(
        '항상 말하지만, 달리지 않으면 1착은 못 하잖아? 우라라도 다들한테 이기는 모습을 보여 주고 싶어.',
      );
      await urara.say_and_wait(
        '그래서 생각했어. 이기면 다들 더 기뻐할 테니까, 이기고 싶다고!',
      );
      await urara.say_and_wait([
        '그런데 그렇게 말했더니, ',
        call_30,
        '이(가) 여태 생각해 본 적도 없는 질문을 잔뜩 했어……',
      ]);
      era.drawLine();
      await rice.say_and_wait([
        '그럼 지금 ',
        r_call_u,
        '이(가) 바라는 승리는 다른 사람만을 위한 거야……? ',
        r_call_u,
        ', 중요한 걸 놓치고 있는 게 아닐까……',
      ]);
      await rice.say_and_wait([
        r_call_u,
        '이(가) 틀렸다는 건 아니야. 남을 위해 이기고 싶다는 건 대단해. 라이스도 좋은 일이라고 생각해. 하지만 ',
        r_call_u,
        '이(가) 자신을 위해 바라는 건?',
      ]);
      await rice.say_and_wait([
        '다들 ',
        r_call_u,
        '이(가) 달리는 모습에 저마다 다른 기대를 걸어. 하지만 ',
        r_call_u,
        '자신이 어떻게 생각하는지도 중요해.',
      ]);
      await rice.say_and_wait([
        '그냥 최선을 다하면 됐다고만 생각한다면, 져도 풀이 죽지 않는 ',
        r_call_u,
        '은(는) ',
        r_call_u,
        '의 진짜 마음이 아닐지도 몰라……',
      ]);
      if (era.get('love:30') >= 50) {
        await rice.say_and_wait([
          '이기고 싶으면서 져도 괜찮다고 생각하는 것도, 오만한 거야.',
        ]);
        await rice.say_and_wait([
          r_call_u,
          '이(가) 져도 괜찮다면, ',
          callname_30,
          '을(를) 라이스한테 양보해도 되겠네…… 그렇지?',
        ]);
      }
      era.drawLine();
      await urara.say_and_wait([
        '그 뒤로 계속 ',
        call_30,
        '의 질문을 생각했어. 오늘 병주에서 다들한테 뒤처졌을 때까지.',
      ]);
      await urara.say_and_wait(
        '또 혼자 남아서 그 질문을 떠올리니까, 가슴이 너무 아팠어. 그런데 달릴 때 아픈 거랑은 달라……',
      );
      await urara.say_and_wait([
        callname,
        ', 우라라는 왜 이렇게 괴로운 걸까…… 아직 모르겠어……',
      ]);
      if (era.get('love:30') >= 50) {
        await era.printAndWait([
          urara.get_colored_name(),
          '와(과) 마찬가지로, ',
          you.get_colored_name(),
          '도 잠시 상황을 따라가지 못한다. 평소 다정한 ',
          rice.get_colored_name(),
          '이(가) 친구에게 그렇게 강하게 선언하다니.',
        ]);
        await era.printAndWait([
          "하지만 ' ",
          callname_30,
          '을(를) ',
          rice.sex,
          "에게 양보하라'니, ",
          rice.get_colored_name(),
          '은(는) 가끔 의외로 멋진 모습을 보인다.',
        ]);
        await era.printAndWait([
          rice.get_colored_name(),
          '이(가) 그렇게 된 이유는 아마 본인이 가장 잘 알겠지…… 이야기가 샜다. 다시 돌아가자.',
        ]);
      }
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 고민하면서도 문제의 존재를 알아차린 모습을 보니, ',
        you.get_colored_name(),
        '은(는) 오히려 조금 기쁘다.',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        '이(가) 친구로서 한 지적은 정확히 핵심을 짚었다. 지금은 ',
        rice.get_colored_name(),
        '에게 감사해야 한다.',
      ]);
      await era.printAndWait([
        '지고 나서 슬픈 건 당연하고, 오히려 중요한 감정이다. 하지만 ',
        urara.get_colored_name(),
        '은(는) 자신도 모르게 그 부분을 놓치고 있었다.',
      ]);
      await era.printAndWait([
        urara.sex,
        "이(가) '달리는 건 즐거워야 한다'고 생각해서, '져서 슬픈 마음'을 감춰 버렸는지도 모른다.",
      ]);
      await era.printAndWait([
        '건강한 태도라고 보기는 어렵다. 하지만 의젓한 아이는 크든 작든 스스로에게 무리하게 마련이다. 다행히 주변 사람들은 ',
        urara.sex,
        '에게 다정하게 대해 준다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        urara.get_colored_name(),
        '이(가) 놓치고 있던 경쟁심을 돌아보면, 쌓여 있던 압박감과 1착을 향한 갈망이 수면 위로 드러날 것이다.',
      ]);
      await era.printAndWait([
        '요컨대 다음 돌파구는 보인다. 다만 작은 ',
        urara.uma_sex_title,
        '의 마음과 몸에는 그리 다정한 길이 아닌 것 같다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그렇다고 해도 필요한 지도는 하실 거죠? 그렇다면 트레이너 ',
        you.adult_sex_title,
        '(당신)……',
      ]);
      era.printButton(
        "「우라라는 정말 모르겠어? 자신이 '1위를 원한다'는 건, '져도 괜찮다'는 뜻이 아니야.」(지능+10)",
        1,
      );
      era.printButton(
        '「분함에서 자라나는 압박감은 그런 거야. 받아들일 수 있다면 더 빨리 달릴 수 있어.」(스피드+10)',
        2,
      );
      ret.push(await era.input());
      if (high_relation) {
        await era.printAndWait([
          you.get_colored_name(),
          '의 대답이 무슨 뜻인지 알 것 같다.',
          urara.get_colored_name(),
          '의 눈에 져 있던 꽃도 조금씩 밝아진다.',
        ]);
        await urara.say_and_wait([
          '응! 슬픔을 힘으로 바꾸는 거…… 조금 다른가! 그래도 대충 그런 거지? ',
          call_61,
          '도 그렇게 말했어!',
        ]);
        await era.printAndWait([
          'そっと体と尻尾で ',
          you.get_colored_name(),
          ' に絡みつき、小さな',
          urara.uma_sex_title,
          'の薄い布一枚の体がすぐそこにある。',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          'の頬と肌は夕日で赤らんだように見え、塩気のある晩風のなかで ',
          you.get_colored_name(),
          ' へ湿った温もりを渡す。',
        ]);
        await urara.say_and_wait([
          '그리고 ',
          callname,
          '도 곁에 있잖아! 힘들어도 앞으로 분명 이겨 낼 수 있어——',
        ]);
      } else {
        await era.printAndWait([
          '표정에는 아직 망설임이 남아 있지만, 작은 ',
          urara.uma_sex_title,
          '의 마음은 이미 ',
          you.get_colored_name(),
          '의 대답을 받아들인 듯하다.',
        ]);
        await urara.say_and_wait(
          '분명 그럴 거야. 우라라가 1위를 하고 싶은 마음도 똑같아. 괴롭지만, 그래도……',
        );
        await era.printAndWait([
          '살며시 ',
          you.get_colored_name(),
          '에게 기대며, 쓰다듬어 주길 바라는 듯한 ',
          urara.get_colored_name(),
          '은(는) 머리와 귀를 ',
          you.get_colored_name(),
          '의 어깨에 기댄다.',
        ]);
        await era.printAndWait([
          '가느다란 작은 손이 ',
          you.get_colored_name(),
          '의 손가락에 살며시 닿는다. 작은 ',
          urara.uma_sex_title,
          '의 사람보다 조금 높은 체온이 손등에서 온몸으로 퍼진다.',
        ]);
        await urara.say_and_wait([
          '그래도 ',
          call_30,
          '이(가) 말한 것처럼, 내가 원하는 걸 받아들이는 건 분명 잘못이 아니야——',
        ]);
      }
      era.println();
      await era.printAndWait([
        '조금씩 풀리기 시작한 다리를 모래 위로 뻗으며, ',
        urara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '에게 다음 제안을 꺼낸다.',
      ]);

      await urara.say_and_wait([
        '그러니까 ',
        callname,
        ', 지금 두 바퀴만 더 달리고 싶어. 같이 훈련할래?',
      ]);
      era.printButton(
        '「그렇다면 저기에 쓸 만한 타이어가 있어. 한번 해 볼래?」(파워+10)',
        1,
      );
      era.printButton(
        '「좋아. 해가 지려면 아직 시간이 있어. 달릴까?」(근성+10)',
        2,
      );
      ret.push(await era.input());

      await era.printAndWait([
        '모래를 털며, ',
        urara.get_colored_name(),
        '와(과) ',
        you.get_colored_name(),
        '은(는) 석양이 드리운 모래사장에서 일어선다.',
      ]);
      await era.printAndWait([
        '평소와는 달리, 황금빛 바다를 앞에 둔 ',
        urara.get_colored_name(),
        '의 눈에 작은 투지가 깃든다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '이(가) 자신의 마음을 완전히 이해하려면 아직 시간이 필요하다. 그래서 지금 ',
        urara.teen_sex_title,
        '은(는) 가장 알기 쉬운 방법으로 첫걸음을 내디뎠다.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '우라라가 자신의 선택을 마주하게 한다…… 아니, 이것도 우라라 자신의 선택이겠죠.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '이래도 괜찮을까요. 저는 당신보다도 모르겠네요. 당신의 생각은…… 묻지 않아도 짐작이 가요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        "당신 눈에는 '패배주의자'로 보이겠죠. 하지만 언제나, '한창일 때 물러난다'는 선택지는 없어요.",
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '여름 합숙(클래식급) 종료';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} accept_sex 性愛を受け入れるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      accept_sex,
    ) => {
      await inner_urara.say_as_unknown_and_wait('……이래도 괜찮은 걸까요.');
      await inner_urara.say_as_unknown_and_wait(
        '그래요, 합숙은 곧 끝나요. 이 밤을 느긋하게 즐기세요……',
      );
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        '은 침묵과 어색함이 흐르는 밤이 될 줄 알았다. 그런데 지금 ',
        urara.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '의 곁에 웅크리고 앉아, 웃는 얼굴에 ',
        urara.teen_sex_title,
        '의 수줍음을 드러내고 있다.',
      ]);
      await era.printAndWait([
        '……침묵과 어색함이 사라진 건 아니다. 이 방에서 곁에 앉아 어쩔 줄 몰라 하는 건 ',
        you.get_colored_name(),
        '뿐이다.',
      ]);
      await era.printAndWait([
        '그렇다면 ',
        urara.get_colored_name(),
        '은? 별다른 이유도 없이 잠옷 차림으로 ',
        you.get_colored_name(),
        '의 방에 들어와서는 제멋대로 ',
        you.get_colored_name(),
        '을 붙들고 잠들 시간까지 놀았다.',
      ]);
      await era.printAndWait([
        '이제는 쫓아낼 수도 없는 작은 ',
        urara.uma_sex_title,
        '이 스스로 깐 이불에 누워, ',
        urara.sex,
        '의 ',
        callname,
        '과 하룻밤을 보내기로 마음먹은 모양이다.',
      ]);
      await era.printAndWait([
        '다른 사람에게 몰래 전화해서 작은 ',
        urara.uma_sex_title,
        '을 데려가 달라고 한다…… 그렇게 간단하면 좋으련만.',
      ]);
      await era.printAndWait([
        '얇은 이불 아래에서 뻗어 나온 작은 손이 잡아당기는 감촉에, ',
        you.get_colored_name(),
        '은 ',
        urara.get_colored_name(),
        '에게 퇴로를 막혔음을 깨닫는다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '이 무슨 생각을 하는지는 모르겠다. 하지만 휴대폰을 집어 드는 순간, 작은 ',
        urara.uma_sex_title,
        '에게 놀자는 명목으로 떠밀려 넘어지는 사고가 일어날 것 같다.',
      ]);
      await era.printAndWait([
        '그래도 이대로 있을 수는 없다. 「누군가 알아차릴지도 모른다」는 마지막 희망을 품고, ',
        you.get_colored_name(),
        '은 ',
        urara.get_colored_name(),
        '에게 작은 목소리로 확인한다.',
      ]);
      era.printButton('「저기…… 우라라, 다들 네가 여기 온 거 알아?」', 1);
      await era.input();
      await urara.say_and_wait(
        '몰라! 다들 알았으면 절대로 여기 못 오게 했을걸.',
      );
      await urara.say_and_wait([
        '그래도 괜찮아! 다들 모르는 건 우라라가 ',
        callname,
        '한테 간다는 것뿐이야!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 속셈을 눈치챈 모양이다.',
        urara.get_colored_name(),
        '은 눈을 깜빡이며, 미소 짓는 맹수처럼 말로 ',
        you.get_colored_name(),
        '의 퇴로를 막는다.',
      ]);
      await urara.say_and_wait([
        '그러니까 ',
        callname,
        ', 불을 껐는데 왜 아직 앉아 있어? 이제 잘 시간이잖아?',
      ]);
      await era.printAndWait([
        '역시 예상대로 고립무원이다. 작은 ',
        urara.uma_sex_title,
        '의 재촉에 따라, ',
        you.get_colored_name(),
        '은 포기하고 나란히 놓인 이불 위에 드러눕는다.',
      ]);
      await era.printAndWait([
        'とっくに分かっていたはずだ。普段は素直で可愛くても、この子の',
        urara.uma_sex_title,
        'としての本能は、噛みついて離さない伏兵のままだ……',
      ]);
      await urara.say_and_wait(
        '많이 놀았지. 바다에서 수영도 많이 했고, 다들하고 이야기도 잔뜩 했어!',
      );
      await urara.say_and_wait([
        '에헤헤~ 여름 추억이 많이 생겼네.',
        callname,
        ', 내년에도 올 거야?',
      ]);
      await era.printAndWait([
        '여름 추억이라. 마지막만 작은 ',
        urara.uma_sex_title,
        '의 막무가내 습격이 아니었다면 더 좋았을 텐데……',
        urara.get_colored_name(),
        '은(는) 원래 이런 아이가 아니었을 텐데.',
      ]);
      era.printButton(
        '「아마 괜찮을 거야. 그리고 훈련의 추억도…… 지금은 말 안 하는 게 나으려나……」',
        1,
      );
      await era.input();
      if (high_relation) {
        await urara.say_and_wait([
          '아니야! 훈련의 추억도 즐거워.',
          callname,
          '와(과) 함께하는 것도 즐거운 추억이야.',
        ]);
        await era.printAndWait([
          '二人の距離がもう少し近くなる。担当の小さな指が隣の布団へ入り、',
          you.get_colored_name(),
          ' の掌をくすぐる。',
        ]);
        await era.printAndWait([
          '小さな体が静かに ',
          you.get_colored_name(),
          ' の布団へ滑り込む。小さな',
          urara.uma_sex_title,
          'の柔らかい体を隔てて、どきどきがリズムのある温もりとして ',
          you.get_colored_name(),
          ' に届く。',
        ]);
        await era.printAndWait([
          '月がいい。視線を少しずらせば、月明かりに照らされた',
          urara.teen_sex_title,
          'の桜色の瞳と目が合うはずだ。',
        ]);
      } else {
        await urara.say_and_wait([
          '大丈夫！ トレーニングの思い出も大事。それに ',
          callname,
          ' も、ウララを助けてくれたよ？',
        ]);
        await era.printAndWait([
          'いつの間にかそっと寄り、',
          urara.get_colored_name(),
          ' の小さな手が隙間から入り、引っ込めようとした ',
          you.get_colored_name(),
          ' の手首をつかむ。',
        ]);
        await era.printAndWait([
          '静かに ',
          you.get_colored_name(),
          ' と同じ布団へもぐり込む。布の擦れる音のなか、',
          you.get_colored_name(),
          ' は',
          urara.teen_sex_title,
          'が徐々に ',
          you.get_colored_name(),
          ' の横顔へ向き直るのを感じる。',
        ]);
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'は部屋に差し込む月明かりで、複雑な目を ',
          you.get_colored_name(),
          ' の横顔へ向けている。',
        ]);
      }
      await era.printAndWait([
        '沈黙のなか、',
        urara.get_colored_name(),
        ' の手が徐々に ',
        you.get_colored_name(),
        ' の指に絡む。まだ夏なのに、',
        urara.get_colored_name(),
        ' の掌は冷たい。',
      ]);
      await era.printAndWait([
        '近づいていた視線が外れた瞬間、',
        you.get_colored_name(),
        ' に寄りかかる小さな',
        urara.uma_sex_title,
        'が、もう一度口を開く。',
      ]);
      await urara.say_and_wait(
        '계속 생각했어. 전에는 다들한테 웃는 모습만 보여 주던 우라라가, 왠지…… 왠지……',
      );
      await urara.say_and_wait(
        "왠지…… '흐름에 몸을 맡겼다'? 이런 말이지? 우라라, 잘못 말한 거 아니지?",
      );

      era.printButton(
        '「……우라라는 전의 자신이 흐름에 몸을 맡기고 있었다고 생각해?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '어떻게 해야 할지 잊어버릴 것 같았어…… 마음이랑 소원은 서로 부딪치지 않는다는 것도, 내가 원하는 것도.',
      );
      await urara.say_and_wait(
        '그래도 전에 항상 졌던 걸 떠올리면 가슴이 술렁거려서, 평소에도 긴장하게 돼……',
      );
      await era.printAndWait(
        '마음의 변화에 너무 민감해져 불안하니, 의지할 수 있는 어른에게 마음을 다잡도록 도와달라고 하고 싶었던 거구나. 그렇다면……',
      );

      era.printButton('「알았어. 힘들면 말해 줘. 그리고——」', 1);
      await era.input();

      await urara.say_and_wait([
        '그리고 ',
        callname,
        '은(는) 언제까지나 우라라랑 함께해 줄 거지? 에헤헤~ 알고 있어. 이미 약속한 거잖아.',
      ]);
      await era.printAndWait([
        '진작 알고 있던 답이어도 상관없는 모양이다.',
        you.get_colored_name(),
        '의 귓가로 ',
        urara.teen_sex_title,
        '의 만족스러운 작은 웃음소리가 들려온다.',
      ]);
      await era.printAndWait([
        urara.sex,
        'に近い腕を横から抱き、小さな',
        urara.uma_sex_title,
        'のやさしい吐息が、くすぐるように ',
        you.get_colored_name(),
        ' の耳を撫でる。',
      ]);
      await urara.say_and_wait([
        callname,
        ' が大変なのは分かってる。だから、これでいいよ？',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        ' を根拠なく疑いたくはない。だが、これではまた目的を疑わずにいられない。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の心配を「確かめる」ように、硬直した沈黙のなか、腕の中の小さな',
        urara.uma_sex_title,
        'は、親しい内緒話を続ける。',
      ]);

      await urara.say_and_wait([
        '저기…… ',
        callname,
        '은(는) 우라라가 성장했다고 생각해?',
      ]);
      era.printButton(
        '「햇볕에 탔냐고 묻는 거라면 우라라한테 답하기 어렵네.」(호감+10)',
        1,
      );
      era.printButton(
        '「전보다 어른스러워졌다고 하면 우라라는 기뻐할까?」(연모+2)',
        2,
      );
      if (era.get('love:52') >= 50 && accept_sex && urara.sex_code - 1 !== 0) {
        era.printButton(
          '「『特別な思い出』を残すなら、ウララはいいと言うか？」（好感+10、恋慕+2）',
          3,
        );
      }
      const ret = await era.input();
      if (ret !== 3) {
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 일부러 ',
          urara.teen_sex_title,
          '의 마음에 맞춰 주지 않는 답을 하자, ',
          urara.teen_sex_title,
          '은(는) 이불 아래에서 조금 불만스러운 듯 ',
          you.get_colored_name(),
          '의 손목을 살짝 꼬집는다.',
        ]);
        await era.printAndWait([
          '하지만 돌아보니, ',
          urara.get_colored_name(),
          '은(는) 이미 품 안에 파고들어 머리를 ',
          you.get_colored_name(),
          '의 어깨에 기대고 조용히 웃고 있다.',
        ]);
        await urara.say_and_wait([
          callname,
          ', 내일은 돌아가는 거지? 그럼 오늘은 조금 더 일찍 자는 게 좋겠다.',
        ]);
        await urara.say_and_wait([
          '에헤헤~ 특별한 밤이네. 다음에는 ',
          callname,
          '에게 달라진 우라라를 보여 줄 수 있으면 좋겠어……',
        ]);
        await urara.say_and_wait('잘 자, 알았지?');
        await era.printAndWait([
          '……의심이 사실로 확인되지는 않고 끝났다. 그것만으로도 다행이다.',
          urara.get_colored_name(),
          '이(가) 몸의 긴장을 풀자, ',
          you.get_colored_name(),
          '도 살짝 한숨을 내쉰다.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          ' の半分冗談の願いを聞くと、',
          urara.teen_sex_title,
          'はまず呆けたように目を見開き、それから羞恥が',
          urara.sex,
          'の頬を染める。',
        ]);
        await urara.say_and_wait([
          callname,
          ' は、いつも困らせることを言う。でも ',
          callname,
          ' が望むなら……',
        ]);
        await era.printAndWait([
          '薄い夏布団を体で持ち上げ、',
          urara.teen_sex_title,
          'の表情が潤む。',
          urara.sex,
          'は軽く ',
          you.get_colored_name(),
          ' の前に跨がり、自分のボタンへ手を伸ばす。',
        ]);
        await urara.say_and_wait([
          '夏合宿に青春は欠かせないって、みんな言うよね。ウララはよく分かんないけど、',
          callname,
          ' も期待してるんでしょ？',
        ]);
        await era.printAndWait([
          'パジャマが滑り落ち、',
          urara.teen_sex_title,
          'の香りが広がる。最後の隔たりを脱いだ小さな',
          urara.uma_sex_title,
          'の桜色の瞳に、',
          you.get_colored_name(),
          ' だけへ溢れる欲が映る。',
        ]);
        await era.printAndWait([
          '小さな声で純粋な欲を告げ、',
          urara.teen_sex_title,
          'は柔らかい光のなかで小さく息をつき、飾らない体を ',
          you.get_colored_name(),
          ' に見せる。',
        ]);
        await era.printAndWait(
          '敏感な乳首は恋人の前で遠慮なく立ち上がり、悦びに気絶するまで弄ばれる準備ができているようだ。',
        );
        if (era.get('talent:52:乳房尺寸') > 0) {
          await era.printAndWait([
            '大きな双丘がパジャマの束縛からようやく解放され、',
            urara.teen_sex_title,
            'の小さな体のうえで揺れ、',
          ]);
          await era.printAndWait(
            '母乳を搾るときに雌を屈服させる手順すら要らない。手にそっと乗せて舌先で少し弄れば、',
          );
          await era.printAndWait([
            '長く耐えた乳房は素直に、濃く粘る乳を、小さな',
            urara.uma_sex_title,
            'の失神した甘い嗚咽と一緒に押し出す。',
          ]);
        }
        await era.printAndWait(
          '背に回した十指が、性器として使う淫らな後穴へ落ち着きなく入り、恋人の前で我慢できずに激しく自らを慰める。',
        );
        await era.printAndWait([
          '普段の素直さも愛らしさも脱ぎ捨て、みんなのために走る小さなアイドルは、いまは ',
          callname,
          ' 専用の菊穴の奴隷でしかない。',
        ]);
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'が ',
          you.get_colored_name(),
          ' の下へ軽く押しつける幼い穴も、欲の汁を受け入れて吐き出すのを待ちきれないように微かに震え、',
        ]);
        await era.printAndWait([
          urara.teen_sex_title,
          'の熱い体が淫らに踊り、求愛される者の腹へ温かい銀糸を落とし続ける。',
        ]);
        await urara.say_and_wait([
          'はぁ～ いま、ウララに教えて……ん～ ',
          callname,
          '～ なにを期待してるの～？',
        ]);
        if (era.get('flag:惩戒力度') >= 2) {
          await era.printAndWait([
            '眼前で淫らに体を見せる小さな牝馬は、',
            you.get_colored_name(),
            ' より',
            era.get('flag:惩戒力度') === 2 ? '性奴' : '孕み袋',
            'らしいのかもしれない。',
            urara.sex,
            'は ',
            you.get_colored_name(),
            ' に蹂躙されるほうを望んでいるのかもしれない。',
          ]);
          await era.printAndWait([
            'だが',
            urara.sex,
            'は結局、',
            you.get_colored_name(),
            ' の「',
            urara.uma_sex_title,
            '様」だ。陵辱は、下賤な ',
            you.get_colored_name(),
            ' が',
            urara.sex,
            'を満たせるものではない。',
          ]);
          await era.printAndWait([
            'それでも',
            era.get('flag:惩戒力度') === 2 ? '性奴' : '孕み袋',
            'としてなら、',
            you.get_colored_name(),
            ' はまだ',
            urara.sex,
            'に快楽を与えられる。',
          ]);
          await era.printAndWait([
            '胸の谷間から覗くふたなり',
            urara.uma_sex_title,
            'の先を、やさしく味わうように含み、',
            you.get_colored_name(),
            ' は舌で慎重に担当の肉棒に仕える。',
          ]);
          await era.printAndWait([
            '大丈夫。',
            urara.sex,
            'が嬉しければいい。',
            urara.get_colored_name(),
            ' が楽しければいい。以前だって、こうではなかったか……',
          ]);
          await era.printAndWait(
            '舌先で口の中の包皮を少しずつ開き、跡が残る強さで吸い、舐める。すべて、体に刻まれた本能のようだ。',
          );
          await era.printAndWait([
            'だが、こうして懸命に仕える奴隷',
            urara.uma_sex_title,
            'を見て、',
            urara.get_colored_name(),
            ' の目に、言いようのない悲しみが一瞬よぎる。',
          ]);
          await era.printAndWait([
            urara.get_colored_name(),
            ' をどこかでつらくさせたのか。自分が間違えたのか。いや……もっと上手くやらなければ。こんなのは',
            urara.sex,
            'に似合わない……',
          ]);
          await era.printAndWait([
            '仕える相手の表情を見て、思考まで作り変えられた ',
            you.get_colored_name(),
            ' の頭に、便器失格の自己疑念がいくつも滑る。',
          ]);
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' が躊躇うと、',
            urara.get_colored_name(),
            ' は ',
            you.get_colored_name(),
            ' の口から肉棒をそっと抜き、逆にやさしく ',
            you.get_colored_name(),
            ' の体を押さえる。',
          ]);
          await urara.say_and_wait([
            '大丈夫。もう昔には戻れなくても……なら、ウララから、',
            callname,
            ' の期待に応えるね？',
          ]);
        }
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32_after_sex: (() => {
    const title = '';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {boolean} do_sex 性愛したか
     */
    const f = async (urara, inner_urara, you, do_sex) => {
      if (do_sex) {
        await era.printAndWait([
          you.get_colored_name(),
          ' のそばに縮こまり、小さな声でおやすみを言う。満たされた ',
          urara.get_colored_name(),
          ' は、ようやく安心して眠る。',
        ]);
        await era.printAndWait([
          'あの小さな',
          urara.uma_sex_title,
          'は成長したのか。その問いは、',
          urara.sex,
          '自身が答えたほうがいいのかもしれない……',
        ]);
        await era.printAndWait([
          '体に寄り添う優しさをそっと抱き、',
          you.get_colored_name(),
          ' もゆっくり目を閉じる。',
        ]);
        await era.printAndWait(
          'いずれにせよ、今年の意外に騒がしい夏は、もう終わりに近い。',
        );
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '……いいえ、よくありません。今の発言は撤回します……やはり、だめです……',
      );
      await inner_urara.say_as_unknown_and_wait('……うっ……');
    };
    f.title = title;
    return f;
  })(),
  ws_47_43: (() => {
    const title = '「변화」와 「선택」';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} m_summer1 クラシック級夏合宿開始イベントを踏んだか
     * @param {number} fans ファン数
     * @param {number} best_mvp これまでの重賞最高着順。Infinity は未出走
     * @param {PrintedSpan} negi_sta 根岸ステークス（色付き名）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      m_summer1,
      fans,
      best_mvp,
      negi_sta,
    ) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait([
        '우라라라는 경주 ',
        urara.uma_sex_title,
        '이(가) 있다고 해요. 몇 번을 져도 여전히 열심히 달린다고요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '경기장 여기저기에서 그런 이야기가 들리던 어느 날——',
      );
      era.drawLine();
      await urara.say_and_wait(
        "으음—— 결심했는데도 이기는 건 아직 어려워! 다들 '슉' 하고 앞으로 가 버려——",
      );
      await era.printAndWait([
        '모의 레이스 경기장. 또 어김없이 꼴찌가 된 ',
        urara.get_colored_name(),
        '이(가) 조금 뾰로통한 얼굴로 ',
        you.get_colored_name(),
        '의 품에 뛰어든다.',
      ]);
      await era.printAndWait(
        '패배의 분함을 드러낼 수 있게 된 뒤로, 이 복슬복슬한 분홍빛은 점점 작은 동물 같아졌다.',
      );
      if (!m_summer1) {
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 언제부터 이렇게 의욕이 넘치게 됐을까. 여름 합숙 중에 무슨 일이 있었던 걸까.',
        ]);
        await era.printAndWait([
          '다행히 큰 문제는 없었던 모양이다.',
          urara.get_colored_name(),
          '은(는) 혼자서도 잘 성장할 수 있구나. 착한 아이야……',
        ]);
      }
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        '의 몸을 정성껏 주물러 주며 마음이 풀린 표정을 짓는 ',
        you.get_colored_name(),
        '와(과), 품 안에서 아직도 토라져 있는 귀여운 생물은 대조적이다.',
      ]);
      await era.printAndWait([
        '물론 ',
        you.get_colored_name(),
        '은(는) 지금 ',
        urara.sex,
        '이(가) 평소 꼴찌를 하기 쉬운 이유도 안다. 원래 집중력을 오래 유지하기 어려워하고, 일상적인 레이스에서는 더욱 힘을 발휘하지 못한다.',
      ]);
      await era.printAndWait([
        '굳이 나무랄 필요는 없다.',
        urara.uma_sex_title,
        '의 몸에도 한계는 있다. 평소까지 긴장하며 지낼 필요는 없다.',
        urara.get_colored_name(),
        '에게는 그 점이 특히 중요하다.',
      ]);
      await era.printAndWait(
        '처음에는 고쳐야 할 문제라고 생각한 적도 있었다. 하지만 지금은 작은 담당에게 맞는 성장 방식을 대략 파악했다.',
      );
      await era.printAndWait([
        '실전 전에 이길 조건을 조금씩 쌓아 두고, 실전에서 결과를 낼 수 있다면 ',
        urara.get_colored_name(),
        '에게는 성공이다.',
      ]);

      era.printButton(
        '「조급해하지 않아도 돼. 우선 진정하자. 우라라는 어떻게 하면 이길 수 있을 것 같아?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '우라라 혼자 나가면 돼! 우라라만 달리면 1위는 무조건 우라라잖아!',
      );
      await era.printAndWait([
        '어? 뭐라고? ',
        urara.get_colored_name(),
        '이(가) 농담하는 건지 순간 알 수 없어서, ',
        you.get_colored_name(),
        '은(는) 훈련장 가장자리에서 발을 헛디딜 뻔한다.',
      ]);

      await inner_urara.say_as_unknown_and_wait(
        '당신, 아하…… 아무튼 뭐라도 말해 주세요……',
      );
      era.printButton(
        '「그 제안, 부회장을 한동안 드러눕게 만들겠는데.」(호감+15)',
        1,
      );
      era.printButton('「서, 설마 우라라는 정말 천재인 건가?」(연모+3)', 2);
      ret.push(await era.input());

      await urara.say_and_wait([
        '에헤헤~ ',
        callname,
        '한테 웃음거리 됐네! 그래도 그렇지. 그러면 레이스가 아니잖아.',
      ]);
      await urara.say_and_wait(
        '그래도 역시 나한테 조금 화가 나. 무리하지 않아도 된다는 건 알지만, 우라라는 아직 느려……',
      );
      await urara.say_and_wait(
        '아무리 져도 다들 변함없이 나무라지 않잖아. 그러니까 우라라가 스스로 빨리 달라져야 해.',
      );

      era.printButton(
        '「하지만 자기 마음을 인정하고 나서 우라라는 분명 강해졌잖아?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '응.',
        callname,
        '말대로 우라라도 강해졌어. 레이스에서 응원해 주는 사람도 늘었고.',
      ]);
      await urara.say_and_wait(
        '상점가 사람들이 응원회에 들어오는 사람도 점점 많아진대. 새로운 팬들도 마음껏 달려도 된다고 격려해 줘!',
      );
      await era.printAndWait([
        '확실히 최근 레이스에서는 낯선 얼굴도 ',
        urara.get_colored_name(),
        '의 응원에 합류하고 있다. 평소 행사 레이스에도 ',
        urara.sex,
        '을(를) 보러 오는 사람이 아주 많다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 컨디션이 일정하지 않다는 걸 알아도, 응원하는 사람들은 매번 ',
        urara.sex,
        '에게 필승을 기원해 준다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 열정에 감동했을 뿐 아니라, 거듭되는 패배 속에서 가장 소중한 승리를 거머쥐는 모습을 보고 싶은 것일지도 모른다.',
      ]);
      await urara.say_and_wait(
        '그런데 온 힘을 다해서 이기겠다고 했더니, 상점가 아저씨랑 아주머니들이 많이 걱정스러워하셨어.',
      );
      await urara.say_and_wait(
        '돌봐 주시는 분들은 아직 다칠까 봐 걱정되나 봐. 하지만 지금 우라라는 더 이상 망설이지 않아. 그러니까……',
      );
      await era.printAndWait([
        '아, 그 사람들이구나.',
        urara.get_colored_name(),
        '의 이야기를 듣고, ',
        you.get_colored_name(),
        '은(는) 홍보하던 날 오후에 말을 걸었던 여성을 곧바로 떠올린다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        urara.get_colored_name(),
        '이(가) 더 이상 망설이지 않는다면, 그 갈등이 풀리는 것도 시간문제다.',
      ]);

      era.printButton(
        '「만화에 나올 법한 대사지만, 다음 레이스에서 우라라의 결의를 보여 주면 돼.」',
        1,
      );
      await era.input();

      await urara.say_and_wait('응! 그렇지! 우라라, 더 열심히 할게——!');
      await era.printAndWait([
        "그렇다고 해도 아직 계기가 부족하다. '결의를 보여 주는 방법'을 생각하며, ",
        you.get_colored_name(),
        '은(는) 다시 깊은 생각에 잠긴다.',
      ]);
      await era.printAndWait([
        '언젠가 ',
        urara.get_colored_name(),
        '에게도 스스로 나가고 싶은 중요한 레이스가 생길 것이다. 그때 ',
        urara.sex,
        '은(는) 어떤 레이스를 고를까.',
      ]);
      await era.printAndWait([
        '게다가 시니어급 일정도 정해야 한다. 미래의 구상에 맞춰, ',
        you.get_colored_name(),
        '은(는) 노트 아래쪽을 훑어본다.',
      ]);
      await era.printAndWait([
        '연말에 뭘 할지는 정하기 어렵다. 하지만 내년 첫 단계의 목표라면…… 반드시 그럴 필요는 없지만, 우선 ',
        negi_sta,
        '을(를) 시험해 볼까.',
      ]);
      era.println();
      if (best_mvp === Infinity) {
        await era.printAndWait([
          '일 년 넘게 조정해 온 지금의 ',
          urara.get_colored_name(),
          '에게는 중상 레이스에서 겨룰 만한 실력이 있을 것이다.',
        ]);
        await era.printAndWait([
          '수준과 분위기를 가늠해 보는 의미에서도, 비슷한 레이스를 ',
          urara.get_colored_name(),
          '의 중상 도전 출발점으로 삼아도 좋겠다.',
        ]);
      } else if (best_mvp === 1) {
        await era.printAndWait([
          urara.uma_sex_title,
          '의 몸은 계속 변한다. 시니어급에서는 ',
          urara.get_colored_name(),
          '도 늘 겪던 변화에 맞춰 조정해야 할지도 모른다.',
        ]);
        await era.printAndWait([
          '지금의 ',
          urara.get_colored_name(),
          '에게 중상 레이스에 나갈 실력이 있다면, 중상으로 새로운 한 해를 가늠해 보는 것도 나쁘지 않다.',
        ]);
      } else {
        await era.printAndWait([
          '전에도 중상 레이스에 나간 적은 있다. 하지만 ',
          urara.get_colored_name(),
          '은(는) 전력을 다해도 이기지 못했다. 그때는 아직 일렀던 모양이다.',
        ]);
        await era.printAndWait([
          '지금의 ',
          urara.get_colored_name(),
          '이라면 준비가 충분할 것이다. 여기서 다시 도전해도 문제없다.',
        ]);
      }
      if (fans >= 25000) {
        era.println();
        await era.printAndWait(
          '게다가 지금까지 팬과 명성을 쌓아 온 방침도 여기서 도움이 된다. 예를 들면 팬 투표제다.',
        );
        await era.printAndWait(
          '주최 측이 인정하는 방식인 만큼, 팬들의 지지가 충분하다면 투표제를 통해 출전할 수 있는 레이스의 폭을 넓힐 수 있다.',
        );
        await era.printAndWait([
          '전에도 말했듯, 레이스에서 ',
          urara.sex,
          '을(를) 응원하는 사람이 많으면 ',
          urara.get_colored_name(),
          '은(는) 평소보다 빨리 달릴 수 있다.',
        ]);
        await era.printAndWait([
          '반칙처럼 들릴까. 하지만 그것도 ',
          urara.get_colored_name(),
          "의 실력 중 일부다. 적어도 '세 여신'이 허락한 부분일 것이다.",
        ]);
        await era.printAndWait([
          '그런데 ',
          urara.get_colored_name(),
          '의 팬이 지금 몇 명이지? 아, 찾았다…… 응?!',
        ]);
        await era.printAndWait(
          "중상…… 아니, 이만큼 지지를 받는다면 출전 가능한 중상은 물론이고, '아리마 기념'까지도……",
        );
        await era.printAndWait([
          '휴대전화의 정보를 조금씩 넘기던 ',
          you.get_colored_name(),
          '에게 대담한 가정이 떠오른다.',
        ]);
      }
      era.println();
      await era.printAndWait(
        '어떤 계획을 세우든 그 전에 본인의 생각부터 들어야 한다.',
      );
      await era.printAndWait([
        '노트와 휴대전화를 내려놓고, ',
        you.get_colored_name(),
        '은(는) 아까부터 훈련장을 달리는 동급생들을 멍하니 보던 ',
        urara.get_colored_name(),
        '을(를) 바라본다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 시선을 알아차리자, 작은 ',
        urara.uma_sex_title,
        '은(는) 기다렸다는 듯 의욕적인 신호를 보낸다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 이제 충분히 쉬었어! 지금 훈련 시작해도 돼?',
      ]);

      era.printButton(
        '「좋아. 그 전에 우라라는 내년 계획을 어떻게 생각하고 있어?」',
        1,
      );
      await era.input();

      urara.say(['내년 계획? 에헤헤~ ', callname, '도 슬슬 물어볼 것 같았어!']);
      era.printButton('더 먼 거리(중거리&장거리 적성 상승)', 1);
      era.printButton('잔디에 도전한다(잔디 적성 상승)', 2);
      ret.push(await era.input());
      if (ret[1] === 1) {
        await urara.say_and_wait(
          '더 멀리 달릴 수 있으면, 더 많은 사람들한테 우라라를 알릴 수 있겠지?',
        );
      } else {
        await urara.say_and_wait(
          '잔디에서도 달릴 수 있으면 더 많은 레이스에 도전할 수 있겠지?',
        );
      }

      await era.printAndWait('응? 대답이 빠르네. 언제 생각한 거지? 잠깐……');
      await era.printAndWait([
        urara.get_colored_name(),
        '의 망설임 없는 대답에 ',
        you.get_colored_name(),
        "은(는) 조금 안도하다가 곧 이상한 점을 알아차린다. ' ",
        callname,
        "도 슬슬 물어볼 것 같았다'니, 무슨 뜻이지?",
      ]);
      await era.printAndWait([
        '작은 ',
        urara.get_colored_name(),
        '에게 마음을 읽혔다고 해도 별일은…… 아닐 것이다.',
      ]);
      await era.printAndWait([
        '옆에 있는 작은 담당의 미소에 깊은 뜻이 담겼는지 확인할 용기가 나지 않았다.',
        you.get_colored_name(),
        '은(는) 도망치듯 트레이너 모드로 들어간다.',
      ]);

      era.printButton(
        '「좋아. 이따가 상점가에 가자. 지금은 우선 한 바퀴 달려 보자!」',
        1,
      );
      await era.input();

      await urara.say_and_wait('오! 우라라 출발——!');
      await era.printAndWait([
        you.get_colored_name(),
        '의 신호에 준비를 마친 작은 ',
        urara.uma_sex_title,
        '은(는) 한층 성장한 모습으로 훈련장을 달리는 사람들 속에 뛰어든다.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '——미래는 쉽게 보이지 않아요. 하지만 지금 ',
        urara.sex,
        '이(가) 성장하는 것은 결코 잘못이 아니에요.',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait([
        '우라라마저 때를 살펴 선택하게 될 줄이야. 당신은 ',
        urara.sex,
        '의 트레이너가 아닌가요?',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        '을(를) 언제까지나 지켜 주라고 말하는 건 아니에요. 다만 저는 그래도 괜찮다고 생각할 뿐이에요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '언젠가 ',
        urara.sex,
        '에게도 스스로 좇고 싶은 목표가 생기겠죠……',
      ]);
      await inner_urara.say_as_unknown_and_wait('……');
      if (fans >= 25000) {
        era.println();
        await inner_urara.say_as_unknown_and_wait(
          '죄송해요. 가시기 전에, 부디…… 한마디만 할게요.',
        );
        await inner_urara.say_as_unknown_and_wait([
          '우라라가 중상에 도전하면 안 된다는 건 아니에요. 하지만 계기 하나 때문에 ',
          urara.sex,
          '에게 닿을 수 없는 기대를 남길 필요는 없어요.',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          '지금까지 우라라가 여러 번 이길 수 있게 해 주신 건 감사해요.',
          urara.sex,
          '이(가) 이겼다는 것도 기쁘고요.',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          urara.sex,
          '을(를) 이용해 이득을 얻으려 하셔도 저는 눈감을 수 있어요. 하지만……',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          '정상에 서려 한다면 그 무게를 짊어질 각오가 필요해요.',
          urara.sex,
          '은(는)…… 당신이 생각하는 만큼 강하지 않아요.',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          '줄곧 노력해 온 당신에게 여력이 있더라도, ',
          urara.sex,
          '에게는 깃털 한 장의 무게조차 나눠 줄 수 없어요.',
        ]);
        await inner_urara.say_as_unknown_and_wait([
          urara.sex,
          '에게 너무 많은 희망을 주지 마세요.',
          urara.sex,
          '이(가) 바라는 건 그저 모두와 작은 행복을 나누는 것뿐이지 않나요?',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '부디 다시 한번 잘 생각해 주세요. 부탁드려요……',
        );
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '앞으로 나아갈 결심!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {number} best_mvp これまでの重賞最高着順。Infinity は未出走
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      best_mvp,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '어째서…… 말씀드렸는데…… 왜 아직도 이러시는 건가요…… 당신이란 사람은 정말……',
      );
      era.drawLine();
      await era.printAndWait([
        '넓은 선수 통로에서 ',
        urara.get_colored_name(),
        '은(는) 주위의 팽팽한 분위기와 어울리지 않게 두리번거린다.',
      ]);
      await era.printAndWait([
        '너무 들뜬 작은 ',
        urara.uma_sex_title,
        '옆에는 조금 머리를 감싸 쥔 ',
        urara.sex,
        '의 ',
        callname,
        '이(가) 서 있다.',
      ]);
      await urara.say_and_wait([
        callname,
        '! 우라라가 정말 ',
        arim_kin,
        '에 나가다니!',
      ]);
      await era.printAndWait([
        '실제로 많은 사람에게 예상 밖의 일이었다. 투표를 추진한 ',
        you.get_colored_name(),
        '본인도 팬 투표가 정말 통과될 줄은 몰랐다.',
      ]);
      await era.printAndWait([
        '대담한 생각은 그저 대담한 생각으로 끝날 줄 알았다. 하지만 ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '을(를) 좋아하는 사람들의 열정을 아직도 과소평가하고 있었다.',
      ]);
      await era.printAndWait([
        '주변의 ',
        urara.uma_sex_title,
        '와(과) 트레이너들의 살기등등한 얼굴을 슬쩍 보면 알 수 있다. 여기서 긴장하지 않은 건 아마 ',
        urara.get_colored_name(),
        '뿐이다.',
      ]);
      await urara.say_and_wait([
        '에헤헤~ 다들 표정이 엄청 긴장돼 보여…… 우라라도 좀 더 긴장해야 하나?',
      ]);
      await era.printAndWait([
        '주변 출전자들의 분위기에 맞춰 목소리를 낮추고, ',
        urara.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 옷자락을 살짝 당긴다.',
      ]);

      era.printButton(
        '「괘, 괜찮아. 우라라는 긴장하지 않아도 돼. 앞으로를 위한 연습이라고 생각하면……」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '어? ',
        callname,
        '은(는) 우라라가 다음에도 올 수 있다고 생각하는 거야? ',
        callname,
        '도 다들 우라라를 믿어 주는구나!',
      ]);
      await urara.say_and_wait([
        '하지만 이건 ',
        arim_kin,
        '이잖아! 다들 기대하고 있어. 그러니까 이길 수 있다면, 이길 수 있다면——!',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 이기고 싶다는 마음을 듣자, 이미 아프던 ',
        you.get_colored_name(),
        '의 머리는 죄책감으로 더욱 지끈거린다.',
      ]);
      if (best_mvp === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 정말 이길 생각이다. 가능할까. 모르겠다. 하지만 중상에서 이긴 적이 있다면 조금 기대를 걸어도……',
        ]);
        await era.printAndWait(
          '걸어도 뭐란 말인가. 문제가 크다. 같을 리가 없다. 세 여신에게 묻지 않아도, 이건 완전히 다르다.',
        );
      } else {
        await era.printAndWait([
          '승산이 희박하다는 말로도 부족하다. 지금 작은 ',
          urara.uma_sex_title,
          '이(가) 이 레이스에서 이기려면 기적이 필요할 것이다.',
        ]);
        await era.printAndWait([
          '세 여신이 작은 ',
          urara.uma_sex_title,
          '의 노력을 지켜본다고 해도, 지금 ',
          urara.sex,
          '에게 응답해 줄 수 있는 건 ',
          urara.sex,
          '을(를) 응원하는 사람들뿐이다.',
        ]);
      }
      era.println();
      await era.printAndWait(
        '이건 잘못됐다. 트레이너 실격이다. 지금 아리마에 참가한 건 역시 너무 빨랐다.',
      );
      await era.printAndWait([
        '승리를 노렸던 건 아니다. 하지만 적어도 이번에는 ',
        urara.get_colored_name(),
        '이(가) 충분히 준비를 마치고 왔더라면……',
      ]);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          '우라라는 괜찮아! ',
          callname,
          '은(는) 평소처럼 하면 돼. 이 기회, 헛되이 하지 않을게!',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 얼굴이 평소와 다르다는 걸 알아차리자, 작은 ',
          urara.uma_sex_title,
          '은(는) 망설임 없이 ',
          you.get_colored_name(),
          '을(를) 안고 아이를 달래는 엄마 같은 미소를 짓는다.',
        ]);
        await urara.say_and_wait([
          '첫 번째에 참패하면 두 번째에 다시 일어서면 돼. 우라라는 괜찮아! 그럼 ',
          callname,
          ', 이따 또 봐!',
        ]);
        await urara.say_and_wait('레이스 내내 우라라를 지켜봐 줘!');
      } else {
        await urara.say_and_wait([
          callname,
          ', 고민 중이야? 괜찮잖아. 우리, 여태 이런 무모한 일도 해 왔지?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 마음을 꿰뚫어 본 듯, ',
          urara.get_colored_name(),
          '이(가) 갑자기 조용히 안겨 온다. 미소는 다정하고, 어쩔 수 없다는 듯한 엄마 같다.',
        ]);
        await urara.say_and_wait([
          '게다가 벌써 출전할 시간이야! ',
          callname,
          '은(는) 평소처럼 관중석에서 다들하고 기다려 줘!',
        ]);
        await urara.say_and_wait('전이랑 똑같아. 눈 돌리면 안 돼!');
      }
      era.println();
      await era.printAndWait([
        '길게 느껴지는 한순간이 지나고, 작은 ',
        urara.uma_sex_title,
        '의 포옹은 갑자기 끝난다. 곧 ',
        you.get_colored_name(),
        '의 귀에 출전 안내가 들려온다.',
      ]);
      await urara.say_and_wait([
        '마음이 조금 진정됐어? 에헤헤~ ',
        callname,
        '은(는) 금방 부담을 쌓아 두네!',
      ]);
      await urara.say_and_wait([
        '그래도 ',
        callname,
        '만 할 수 있는 일도 있어. 우리는 ',
        callname,
        '와(과) 담당이니까!',
      ]);
      await era.printAndWait([
        '출전 전의 정해진 의식처럼, 통로 밖의 빛을 등지고 ',
        urara.get_colored_name(),
        '은(는) 웃으며 ',
        you.get_colored_name(),
        '에게 마지막으로 손을 흔든다.',
      ]);
      await era.printAndWait([
        '마찬가지로 손을 흔들며, ',
        urara.get_colored_name(),
        '이(가) 경기장으로 달려가는 걸 배웅한다. 그제야 ',
        you.get_colored_name(),
        '도 관자놀이를 꾹 누르고 자신이 가야 할 곳으로 몸을 돌린다.',
      ]);
      era.println();
      await era.printAndWait('하지만.');
      await inner_urara.say_as_unknown_and_wait(
        '……가시기 전에 하나만 더, 답해 주시겠어요?',
      );
      await era.printAndWait(
        '아무도 없는 선수 통로. 잿빛으로 물든 공간에서 시간은 멈춘 듯하다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '에게 곧장 다가오는 것은, 낯선 어두운 표정을 띤 가장 익숙한 벚꽃빛이다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        urara.sex,
        '은(는) ',
        urara.get_colored_name(),
        '이(가) 아니다. 목소리도 같고 화난 작은 얼굴도 같지만, ',
        urara.sex,
        '은(는) 절대로 ',
        urara.get_colored_name(),
        '이(가) 아니다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 낯설 만큼 예의 바르지도 않고, 이렇게 그늘지고 복잡한 표정을 짓지도 않는다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '은(는) 물론 ',
        urara.get_colored_name(),
        '이(가) 아니다. 지금 ',
        urara.get_colored_name(),
        '은(는) 이미 경기장으로 나갔다. 뒤에서 갑자기 나타날 리도, 아직 교복을 입고 있을 리도 없다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        urara.sex,
        "은(는) ' ",
        inner_urara.get_colored_actual_name(),
        "'일지도 모른다.",
        you.get_colored_name(),
        '은(는) ',
        urara.sex,
        '와(과) 꿈에서 몇 번이나 만났는지도 모른다. 다만 잠에서 깰 때마다 모든 것이 사라질 뿐——',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '분명 말씀드렸을 텐데요. 어째서 아직도 ',
        urara.sex,
        '에게 무리를 시키는 건가요……',
      ]);
      await era.printAndWait([
        '이성마저 얼어붙을 듯한 공간에서, 매서운 질문이 ',
        inner_urara.get_colored_name(),
        '의 모습을 한 채 ',
        you.get_colored_name(),
        '의 가슴팍까지 다가온다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '묻고 있잖아요. 왜 지금 ',
        urara.sex,
        '을(를) 달리게 하는 건가요…… 왜 지금 우라라를 아리마에 내보내는 거예요!',
      ]);
      await era.printAndWait([
        '멍한 망설임이 ',
        urara.teen_sex_title,
        '의 분노에 불을 붙인다. 쌓인 분노가 ',
        urara.uma_sex_title,
        '의 힘을 빌려 ',
        you.get_colored_name(),
        '을(를) 통로 벽에 밀어붙인다.',
      ]);
      await era.printAndWait([
        '부딪친 통증이 등에서 온몸으로 퍼지며, 망설이던 ',
        you.get_colored_name(),
        '의 정신을 자극해 조금 깨운다.',
      ]);
      await era.printAndWait([
        "얼어붙은 세계는 꿈이 아니다. 눈앞의 ' ",
        inner_urara.get_colored_actual_name(),
        "'도 분명 그곳에 있다.",
      ]);
      await era.printAndWait([
        '하지만 몸을 움켜쥔 압박은 몇 초밖에 이어지지 않는다. 작은 벚꽃빛 ',
        urara.uma_sex_title,
        '은(는) 울듯이 힘없이 ',
        you.get_colored_name(),
        '의 옷깃을 놓는다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '그러니까 둘 다 똑같아요. 그냥 두어도 자신을 해치면서까지 계속 변하고……',
      );
      await era.printAndWait([
        "흐느끼는 듯한 말은 이어지지 않는다. 슬픔을 억누른 미소를 지으며, ' ",
        inner_urara.get_colored_actual_name(),
        "'은(는) 고개를 들어 ",
        you.get_colored_name(),
        '의 옷자락을 정돈해 준다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '죄송해요. 제가 실례했어요. 처음부터 당신이 멈추기를 기대하지 말았어야 했는데……',
      );

      era.printButton(
        '「미안해. 무슨 일인지 모르겠지만, 담당의 레이스를 보러 가야 해……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '눈앞의 기묘한 상황에도, ',
        you.get_colored_name(),
        '은(는) 이상하리만큼 냉정하다. 눈앞의 ',
        urara.uma_sex_title,
        '을(를) 피해 ',
        urara.get_colored_name(),
        '의 레이스를 지켜보러 가려 할 뿐이다.',
      ]);
      await era.printAndWait([
        "지금 마주한 건 '이질적인 ",
        urara.get_colored_name(),
        "'뿐 아니라, 이름은 몰라도 오래전부터 알고 지낸 '성가신 친구'이기도 하다.",
      ]);
      await inner_urara.say_as_unknown_and_wait([
        "'우라라'가 걱정되시나요? 괜찮아요.",
        urara.sex,
        '은(는) 당신이 그렇게 서두르실 정도는 아니에요.',
      ]);

      era.println();
      if (high_relation) {
        await inner_urara.say_as_unknown_and_wait(
          '하지만 마음은 알겠어요. 당신은 정말 우라라를 소중히 여기네요. 우라라가 의지하는 것도 당연하겠죠.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '앞에 부드럽게 서서, 이름도 모르는 성가신 친구는 마음을 달래듯 작은 ',
          urara.uma_sex_title,
          '와(과) 같은 미소를 짓는다.',
        ]);
      } else {
        await inner_urara.say_as_unknown_and_wait([
          '평소에는 우라라에게 그렇게 신경 쓰지 않는 것 같더니, 왜 그리 조급해하시나요? 트레이너 ',
          you.adult_sex_title,
          '(당신)?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          "의 길을 끈질기게 막으며, 이름조차 모르는 '친구'는 까닭 없이 허둥대는 낙제한 어른을 비웃는다.",
        ]);
      }
      era.println();
      await inner_urara.say_as_unknown_and_wait([
        '이것이야말로 당신과 ',
        urara.sex,
        '이(가) 원하던 변화 아닌가요? 그러니 지금은 잠깐만 기다려 주세요.',
      ]);
      await era.printAndWait([
        urara.sex,
        '의 말이 맞을지도 모른다…… 아니, ',
        urara.sex,
        '이(가) 옳겠지. 고요한 공기 속에서 ',
        you.get_colored_name(),
        '은(는) 무조건 믿는 사람처럼 걸음을 멈춘다.',
      ]);
      await era.printAndWait([
        "뒤돌아보니 기쁨도 분노도 지운 '가면'을 쓴 ' ",
        urara.sex,
        "'이 그 자리에서 '당신'이 관심을 보이기를 기다린다.",
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '지금부터 짧은 이야기를 할게요. 시간은 거의 들지 않아요……',
      );
      await era.printAndWait([
        '한 걸음 앞으로 나와 ',
        you.get_colored_name(),
        '와(과) 나란히 서서 통로 밖을 바라본다. 벚꽃빛 ',
        urara.teen_sex_title,
        '은(는) 귀와 꼬리를 흔들며 개지 않은 하늘을 향해 손을 뻗는다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그건 더없이 작은…… ',
        urara.uma_sex_title,
        '의 이야기예요.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_end_c: (() => {
    const title = (inner_urara) => [
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      '의 모습',
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      '의 이름',
    ];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {number} rank 着順
     */
    const f = async (urara, inner_urara, you, callname, rank) => {
      await inner_urara.print_and_wait(
        '이 이야기는 어디서부터 시작하면 좋을까요.',
      );
      await inner_urara.print_and_wait([
        '그리 멀지 않은 옛날, 제멋대로인 성격에 재능도 평범한 작은 ',
        inner_urara.uma_sex_title,
        '이(가) 어느 목장에서 그저 되는대로 태어났어요.',
      ]);
      await inner_urara.print_and_wait([
        '그렇게 성가시고 평범한 ',
        inner_urara.child_sex_title,
        '에게, 처음으로 ',
        inner_urara.sex,
        '을(를) 사랑한 사람들은 축복 같은 귀여운 이름을 지어 주었죠.',
      ]);
      await inner_urara.print_and_wait([
        inner_urara.sex,
        '의 삶도 그 귀여운 이름처럼, 우연한 행운 뒤에 시대와 세 여신의 사랑을 받았어요.',
      ]);
      await inner_urara.print_and_wait([
        '달리던 나날 동안 한 번도 이기지 못했지만, ',
        inner_urara.sex,
        '은(는) 여러 번 사람들의 동정과 보살핌을 받았죠.',
      ]);
      await inner_urara.print_and_wait([
        '그래서 ',
        inner_urara.sex,
        '은(는) 달리는 것을 싫어하고, ',
        inner_urara.sex,
        '에게 기대는 인간도 싫어하고, 목숨을 가볍게 거는 동족들도 싫어했어요. 모두 똑같이 싫어했죠.',
      ]);
      await inner_urara.print_and_wait([
        '그래도 그렇게 겁 많고 별난 ',
        inner_urara.sex,
        "은(는) 스스로 진창으로 만든 길 위에서, 마지막으로 남은 두 가지 '작은 행복'을 주웠어요.",
      ]);
      await inner_urara.print_and_wait(
        '하나는 모두의 사랑으로 쌓아 올린, 어딘가 부족해도 몸을 둘 수 있는 평온함. 다른 하나는 세 여신의 작은 장난이었죠.',
      );
      await inner_urara.print_and_wait([
        "여행 도중, 축복받은 ' ",
        inner_urara.sex,
        "'은(는) 마찬가지로 사람들에게 사랑받는 ' ",
        urara.sex,
        "'와(과) 같은 열차에 탔어요.",
      ]);
      await inner_urara.print_and_wait([
        "축복받은 길을 걸으면서도 사실 아무것도 할 수 없는 ' ",
        inner_urara.sex,
        "'은(는), 약하면서도 희망이 되고 싶어 하는 ' ",
        urara.sex,
        "'와(과) 만났어요.",
      ]);
      await inner_urara.print_and_wait(
        '꿈처럼 행복한 동행 속에서, 서로 달랐을 두 사람은 조금씩 서로의 모습을 닮아 갔어요.',
      );
      await inner_urara.print_and_wait([
        inner_urara.sex,
        '은(는) 너무 눈부신 희망도 똑같이 싫어했어요. 하지만 그 햇살은 비뚤어진 ',
        inner_urara.sex,
        '의 마음속 가장 부드러운 풀밭까지 비췄죠.',
      ]);
      await inner_urara.print_and_wait([
        urara.sex,
        '이(가) 이대로 즐겁게 자라면 좋겠다.',
        urara.sex,
        '이(가), ',
        urara.sex,
        '이(가) 원하는 작은 행복을 얻으면 좋겠다……',
      ]);
      await inner_urara.print_and_wait([
        "하지만 이렇게 작으면서도 달리기를 선택한 벚꽃빛은, 자신조차 갖지 못한 '모두의 미소'를 어디서 찾으려는 걸까요.",
      ]);
      await inner_urara.print_and_wait([
        '그래도 ',
        inner_urara.sex,
        '은(는) 찾았어요. 작은 ',
        urara.uma_sex_title,
        "이(가) 행복을 찾고, 함께 이야기를 끝까지 써 내려갈 수 있는 '트레이너'를요.",
      ]);
      era.drawLine();
      await era.printAndWait([
        '話が落ちると、耳を傾ける ',
        you.get_colored_name(),
        ' を見つめ、寄り添う',
        inner_urara.teen_sex_title,
        'の冷たい頬に、粘るような紅が満ちる。',
      ]);
      await era.printAndWait([
        'いつの間にか始まった肌の触れあいのなかで爪先立ち、',
        inner_urara.teen_sex_title,
        'は柔らかい湿った桜色の唇を ',
        you.get_colored_name(),
        ' の唇へ重ねる。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '『',
        urara.sex,
        '』の『あなた』への気持ちは、ご自身で感じてください……',
      ]);
      await era.printAndWait([
        '温かい柔らかさが、ねっとりした水音と一緒に沈む。',
        urara.get_colored_name(),
        ' に似た小さな',
        inner_urara.uma_sex_title,
        'は、',
        inner_urara.sex,
        'の表情で ',
        you.get_colored_name(),
        ' に求めてくる。',
      ]);
      await era.printAndWait([
        urara.sex,
        'と、こんなことをしてはいけない。時間がない。早く',
        urara.sex,
        'を離せ。',
        urara.sex,
        'は ',
        urara.get_colored_name(),
        ' ではない。',
        urara.sex,
        'と、こんなことは……',
      ]);
      await era.printAndWait(
        '意識ははっきり保とうとするのに、体はもう片方の腕のなかへ滑っていく。',
      );
      await era.printAndWait([
        '感情とは関係ない。迷う必要もない。',
        urara.sex,
        'からはいちばん大事な担当の気配がする。「',
        urara.get_colored_name(),
        '」は、ここにいる……',
      ]);
      await era.printAndWait([
        'そして、',
        urara.sex,
        'が始め、',
        urara.sex,
        'が主導する恍惚のキスのなかで、',
        urara.teen_sex_title,
        'は沈みかけるもう一方の唇を強く噛む。',
      ]);
      await era.printAndWait(
        '痛みは興奮した神経に抑えられるが、甘い生臭さは二人の口のなかへ広がる。',
      );
      await era.printAndWait([
        '目を細めて、血の混じった欲を吸い、溺れる',
        urara.sex,
        'は、まだ ',
        you.get_colored_name(),
        ' の体と心を侵し続ける。',
      ]);
      await era.printAndWait(
        '逃げられないキスに含まれるのは、重い欲か、混じった謝意か、歪んだ嫌悪か。あるいは、そのすべてか。',
      );
      await era.printAndWait([
        '確かなのは、「あなた」を選んだ「',
        urara.sex,
        '」が、',
        you.get_colored_name(),
        ' のすべてを欲しがっていることだ。肉体から魂まで……',
      ]);
      await era.printAndWait([
        '報復のような深いキスをゆっくり終え、まさに捕食者の',
        urara.teen_sex_title,
        'は名残惜しそうに、口元に残る銀糸を舐める。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'こういうことです。分かりましたか。分からなくても構いません。あなたと',
        urara.sex,
        'には、まだ長い時間があります……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の腕からそっと抜け、目の前の',
        urara.sex,
        'は目の熱を収め、外向きの冷たい距離感へ戻る。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '제 이야기는 여기까지예요. 가기 전에 우라라의 현재에 대해서도 조금만 이야기할게요.',
      );
      if (rank === 1) {
        await inner_urara.say_as_unknown_and_wait(
          "모두가 바랐던 대로, 곧 기적을 보게 될 거예요. 우라라의 '최고'의 1착이에요.",
        );
        await inner_urara.say_as_unknown_and_wait(
          '인과관계는 있겠죠. 하지만 눈이 휘둥그레진 관객들에게는 이것이 기적이에요.',
        );
      } else if (rank <= 5) {
        await inner_urara.say_as_unknown_and_wait(
          '기적까지 딱 한 걸음 남았네요. 우라라는 정말 잘했어요. 당신의 직감도 줄곧 정확했고요.',
        );
        await inner_urara.say_as_unknown_and_wait(
          '우라라를 아끼는 사람들에게는 이 결과만으로도 충분히 눈물겨울 거예요.',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          '많은 사람이 예상한 대로예요. 그래도 다들 기뻐하고, 우라라도 만족하고 있어요. 그걸로 충분하지 않나요?',
        );
        await inner_urara.say_as_unknown_and_wait(
          '다만 제가 보기에는 이번의 당신은 조금 너무 서둘렀어요.',
        );
      }
      await inner_urara.say_as_unknown_and_wait(
        '다음에 우라라가 상처받는다면, 이야기를 이어 갈 권리는 제가 쥐겠어요.',
      );
      await era.printAndWait([
        "잠깐 뜸을 들인 뒤, 갑자기 나타났을 때처럼 눈앞의 ' ",
        inner_urara.get_colored_actual_name(),
        "'은(는) 또 제멋대로 등을 돌려 떠난다.",
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '그냥 따뜻한 빛을 받고 있으면 됐을 텐데, 작은 두 사람은 손을 잡고 태양을 좇으려 하네요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '그렇다면 저에게도 보여 주세요. 밀랍 날개가 녹기 전에, ',
        urara.sex,
        '와(과) 당신이 어디까지 태양에 다가갈 수 있을지——',
      ]);
      await era.printAndWait(
        '떠나기 전의 위협이 끝나자, 잿빛 시야에 색이 돌아온다. 다시 흐르기 시작한 공기가 들끓는 함성을 통로 안으로 밀어 넣는다.',
      );
      await era.printAndWait([
        '마침내 몸이 움직이자, ',
        you.get_colored_name(),
        '은(는) 빛 속으로 들어가려는 ',
        urara.uma_sex_title,
        '을(를) 황급히 붙잡으려 한다. 하지만 손은 ',
        urara.sex,
        '의 모습을 그대로 통과한다.',
      ]);
      era.printButton(
        '「잠깐! 수수께끼 같은 말은 그만해! 대체 이게 뭐야? 너는……」',
        1,
      );
      await era.input();
      await inner_urara.say_as_unknown_and_wait([
        '잘 생각해 보세요, 트레이너 ',
        you.adult_sex_title,
        '(당신). 제 이름을 모를 리 없잖아요.',
      ]);
      await era.printAndWait([
        '통로 출구에 서서, ',
        urara.teen_sex_title,
        '은(는) 의미심장한 한마디를 남기고 옅은 안개처럼 햇빛 아래로 사라진다.',
      ]);
      await era.printAndWait([
        '비틀거리며 그늘 밖으로 나와, 얼결에 출구를 뛰쳐나간 ',
        you.get_colored_name(),
        '은(는) 또 다른 ',
        inner_urara.get_colored_name(),
        '이(가) 말한 그대로의 레이스 결말을 목격한다.',
      ]);
      await era.printAndWait([
        '아직도 환호하는 사람들과 흩날리는 종잇조각의 장막 너머. 구름 사이로 내리쬐는 햇빛이 지금은 너무나 눈부시다.',
      ]);
      await you.say_and_wait('세 여신이시여……', true);
      era.drawLine();
      await era.printAndWait([
        '코스 바깥에서 안쪽 선수 대기실까지. 땀도 닦지 않은 채 들뜬 ',
        urara.get_colored_name(),
        '은(는) 여전히 ',
        you.get_colored_name(),
        '에게 레이스의 감상을 이야기하고 있다.',
      ]);
      if (rank === 1) {
        await era.printAndWait([
          "지금이라면 누구나 결과를 두고 열띤 이야기를 나눌 것이다. '멋지게 1위를 차지한' 것이 ' ",
          urara.get_colored_actual_name(),
          "'이니까.",
        ]);
        await urara.say_and_wait(
          '맞아! 그런데 이겼다는 게 조금 거짓말 같아. 어딘가 이상해——',
        );
        await era.printAndWait([
          '그 말대로다.',
          urara.get_colored_name(),
          '의 오늘 달리기는 훌륭한 정도가 아니라 평소와 완전히 다른 사람 같았다…… 그렇게 말하면 ',
          urara.sex,
          '에게 조금 미안하지만.',
        ]);

        era.printButton('「우라라, 한 번 더 해 볼까? 내년 아리마 기념.」', 1);
        await era.input();

        await urara.say_and_wait('응! 다들 별로 기뻐하지 않는 것 같으니까!');
        await era.printAndWait([
          '그건 아마 충격이 너무 컸기 때문일 것이다. 쓴웃음을 지으며 수건으로 ',
          urara.get_colored_name(),
          '의 웃는 얼굴을 닦아 주고, ',
          you.get_colored_name(),
          '은(는) 어쩔 수 없이 그렇게 생각한다.',
        ]);
      } else if (rank <= 5) {
        await era.printAndWait([
          '지금이라면 누구나 결과를 두고 열띤 이야기를 나눌 것이다.',
          urara.get_colored_name(),
          '이(가) 보여 준 달리기는 너무나 예상 밖이었으니까.',
        ]);
        await urara.say_and_wait(
          '으음—— 다들 조용하지만, 그때는 정말 조금만 더 하면 됐어!',
        );
        await era.printAndWait([
          '입착만으로도 충분히 대단하다. 나중에 영상을 다시 보면 되겠지. 그렇게 생각하며, ',
          you.get_colored_name(),
          '은(는) 수건과 물을 ',
          urara.get_colored_name(),
          '에게 건넨다.',
        ]);

        era.printButton('「그러니까 이대로 끝낼 수는 없겠지?」', 1);
        await era.input();

        await urara.say_and_wait(
          '응! 알았어! 다음에는 내 힘으로 이길 수 있을 것 같아!',
        );
        await era.printAndWait([
          '투지가 넘치는 ',
          urara.get_colored_name(),
          '와(과) 주먹을 맞대며, ',
          you.get_colored_name(),
          '은(는) 두 사람만의 호흡이 맞는다는 걸 확실히 느낀다.',
        ]);
      } else {
        await era.printAndWait([
          '응원해 주는 사람들의 웃는 얼굴을 본 덕분일까. 지금 ',
          urara.get_colored_name(),
          '은(는) 생일 선물을 받은 아이 같다.',
        ]);
        await urara.say_and_wait(
          '그래도 말이야…… 에헤헤~ 예상대로의 결과지? 늘 그렇던 느낌이 다시 돌아왔어……',
        );
        await era.printAndWait([
          '그 정도는 아니다. 그저 아리마는 ',
          urara.get_colored_name(),
          '에게 모든 면에서 부담이 너무 컸을 뿐이다. 그렇게 생각하며, ',
          you.get_colored_name(),
          '은(는) 웃으면서 작은 ',
          urara.uma_sex_title,
          '의 뺨을 조물거린다.',
        ]);

        era.printButton('「그러니까 시니어급의……」', 1);
        await era.input();

        await urara.say_and_wait(
          '응! 내년에 한 번 더 할래! 우라라가 성장한 걸 다들한테 보여 줄 거야!',
        );
      }
      await era.printAndWait([
        "'그 ",
        urara.sex,
        "'의 말대로다. 지금 ",
        you.get_colored_name(),
        '이(가) 멈추더라도, ',
        urara.get_colored_name(),
        '은(는) 이 레이스를 선택하겠지……',
      ]);
      await era.printAndWait([
        "잠깐. 맞다, '그 ",
        urara.sex,
        "'에 관한 일도 있다. 그런데…… 이걸 어떻게 ",
        urara.get_colored_name(),
        '에게 이야기하지?',
      ]);

      era.printButton('「아, 맞다, 우라라. 아까 뭔가…… 만난 것 같은데……」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 환상 같았던 일을 어떻게 ',
        urara.get_colored_name(),
        '에게 이야기할지 생각하던 중, 작은 ',
        urara.uma_sex_title,
        '의 짧은 비명이 들려온다.',
      ]);
      await urara.say_and_wait(['아, ', callname, '! 입술! 어디서 까진 거야?']);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 다급한 말을 듣고, ',
        you.get_colored_name(),
        '은(는) 뒤늦게 찾아온 통증에 반사적으로 손가락을 입술에 댄다.',
      ]);
      await era.printAndWait(
        'これは……血？ 傷から付いた、固まりかけの赤を見つめ、半覚醒だったあの痛いキスが、ようやく頭ではっきりする。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '의 걱정과 의문이 담긴 눈앞에서, ',
        you.get_colored_name(),
        "은(는) 잠시 침묵한다——' ",
        inner_urara.sex,
        "'은(는) 분명 여기에 왔었다……",
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_47_48: (() => {
    const title = (inner_urara) => [
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      '의 말, ',
      { color: inner_urara.color, content: `「${inner_urara.sex}」` },
      '의 이름',
    ];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {number} fans ファン数
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      call_30,
      fans,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '스스로 좇는 미래는 무슨 빛깔의 꿈일까요. 트레이너 ',
        you.adult_sex_title,
        '(당신)는 답을 알고 계신가요?',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '……하.',
        urara.sex,
        '을(를) 지키겠다고 했으면서……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '어느새 ',
        urara.get_colored_name(),
        '이(가) 클래식급에 도전하는 나날도 곧 끝난다. 만난 뒤로 두 해 동안 정말 여러 일이 있었다……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '와(과) 손을 잡고 거리를 걸으며 맑은 하늘을 바라본다. 겨울 공기도 그리 차갑지 않게 느껴진다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 속으로 생각하는 동안, 옆에서 두리번거리던 ',
        urara.get_colored_name(),
        '도 한산한 거리를 보며 새로운 감상을 입에 올린다.',
      ]);
      await urara.say_and_wait(
        '오늘은 조용하네. 거리에도 사람이 적어. 생각했던 거랑 조금 달라.',
      );

      era.printButton(
        '「아리마 기념이 막 끝났잖아. 추운 데 나오기보다는 집에서 레이스 이야기를 하는 사람이 많을지도 모르지.」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '에헤헤~ ',
        callname,
        '! 올해가 끝나면 우라라도 더 중요한 레이스에 나갈 수 있겠지?',
      ]);

      era.printButton('「오늘 우라라는 정말 기뻐 보이네.」', 1);
      await era.input();

      await urara.say_and_wait([
        '당연하지! 다들 응원해 주고, ',
        callname,
        '은(는) 계속 열심히 하고 있잖아. 내년에 우라라, 더 빨리 달릴게!',
      ]);
      await era.printAndWait([
        '그 말대로다.',
        urara.get_colored_name(),
        '와(과) 함께 해 온 일은 어느 것도 헛되지 않았다. 앞으로 멈추지만 않는다면——',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '잠깐만요. 이 불길한 예감은 뭘까요. 당신, 이상한 생각을 하고 있는 건 아니겠죠?',
      );
      await era.printAndWait([
        '등골에 어디선가 오싹한 기운이 스친다. 마찬가지로 불길한 예감을 느낀 ',
        you.get_colored_name(),
        '은(는) 서둘러 화제를 돌린다.',
      ]);

      era.printButton('「그런데 우라라는 왜 아리마 기념에 끌리는 거야?」', 1);
      await era.input();

      await era.printAndWait([
        '담당과 함께 거리의 대형 광고 화면에 나오는 레이스 영상을 바라본다.',
        you.get_colored_name(),
        '은(는) 다시 화면에 마음을 빼앗긴 ',
        urara.get_colored_name(),
        '에게 작은 목소리로 묻는다.',
      ]);
      await era.printAndWait([
        "그곳에 나오는 건 틀림없이 어제의 ' ",
        arim_kin,
        "'이다.",
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) ',
        you.get_colored_name(),
        '와(과) 함께 직접 보러 가고 싶다고 부탁했던 레이스이자, ',
        urara.get_colored_name(),
        "이(가) 모두 앞에서 '출전 선언'을 한 레이스이기도 하다.",
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 질문에 ',
        urara.get_colored_name(),
        "은(는) 시선을 떼지 않은 채, 오히려 '동문서답'하듯 입을 연다.",
      ]);
      await urara.say_and_wait([
        '으음—— ',
        callname,
        '은(는) 처음 우라라를 만났을 때부터 금방 부담을 쌓아 두더라!',
      ]);
      await urara.say_and_wait([
        '그래도 ',
        callname,
        '만 할 수 있는 일도 있어. 우라라도 다들 ',
        callname,
        '이(가) 필요해. 그건 변하지 않아!',
      ]);
      await urara.say_and_wait([
        '우라라는 벌써 선택했어. 그러니까 ',
        callname,
        '도 기운 내 줘!',
      ]);

      era.printButton('「결심했구나. 우라라는 아리마에 나가겠다고.」', 1);
      await era.input();

      await urara.say_and_wait([
        '결심했어. 우라라, ',
        arim_kin,
        '에 나갈 거야!',
      ]);
      await urara.say_and_wait(
        '트레센 친구들이 투표제를 쓸 수 있다고 알려 줬어. 열심히 하면 우라라도 할 수 있어!',
      );
      await urara.say_and_wait([
        '그리고 알고 싶어. 상점가 사람들, 우라라를 응원해 주는 사람들, 그리고 ',
        callname,
        '……',
      ]);
      await urara.say_and_wait(
        '모두의 희망에 보답하기 위해 우라라가 어디까지 날아갈 수 있을지——',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '의 시선을 돌리지 않는 옆얼굴에서, ',
        you.get_colored_name(),
        '은(는) ',
        urara.sex,
        '의 어린 얼굴에 여태 본 적 없는 날카로움을 발견한다.',
      ]);
      await era.printAndWait([
        "출발 게이트가 열리기 직전 경기장에 선 '백전노장의 경주 ",
        urara.uma_sex_title,
        "'에게 어울리는 얼굴이다.",
      ]);
      await era.printAndWait([
        '지금 많은 사람이 ',
        urara.get_colored_name(),
        '의 변덕을 의심할지도 모른다. 하지만 이 순간의 ',
        you.get_colored_name(),
        '은(는) ',
        urara.sex,
        '이(가) 한순간의 생각으로 이러는 게 아님을 확신한다.',
      ]);
      await era.printAndWait([
        '더 많은 말은 필요 없다.',
        you.get_colored_name(),
        '은(는) 다시 화면 속에서 질주하며 빛나는 사람들에게 눈을 돌린다.',
      ]);

      era.printButton(
        '「이 길은 힘들어. 즐겁기만 하리라는 보장도 없어. 각오는 됐어?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '응! 지금 우라라는 세상에서 제일 대담한 사람일지도 몰라!',
      );
      await era.printAndWait([
        '눈을 마주치지 않아도 담당의 결의는 남김없이 ',
        you.get_colored_name(),
        '의 가슴에 전해진다.',
      ]);
      await era.printAndWait([
        '지금 ',
        urara.get_colored_name(),
        '와(과) 빛나는 사람들 사이의 거리는 얇은 화면 한 장에 불과할지도 모른다.',
      ]);
      await era.printAndWait(
        '트레이너로서 목표 레이스가 정해진다는 건 기쁜 일이다. 닿기 어려운 목표라고 해도.',
      );
      await era.printAndWait([
        '게다가 ',
        urara.get_colored_name(),
        '에게도 스스로 도전하고 싶은 목표가 생겼다.',
        urara.sex,
        '의 결단이라면 진심으로 ',
        urara.sex,
        '을(를) 도와야 한다.',
      ]);
      await era.printAndWait([
        '진심으로 임하는 ',
        urara.get_colored_name(),
        '이(가) 기적을 일으킬 거라고 믿는가? 그것도 좋다. 처음 만났을 때부터 ',
        urara.sex,
        '은(는) 이미……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '그래요. 무슨 일이 생겨도 당신은 우라라를 계속 믿겠죠.',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        '이(가) 당신이 생각하는 만큼 강하지 않아도 마찬가지겠죠.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '와(과) 닮았으면서도 다른 목소리가 들린 순간, 주변은 일시 정지된 듯 굳어 버린다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 놀랄 줄 알았다. 하지만 몸도 마음도 이미 익숙하다는 듯 평소와 같다.',
      ]);
      await era.printAndWait([
        '희미한 의식 속에서 몇 번이나 꾼 꿈처럼, ',
        you.get_colored_name(),
        "은(는) 천천히 고개를 돌려 옆의 ' ",
        inner_urara.get_colored_actual_name(),
        "'와(과) 눈을 마주친다.",
      ]);
      await era.printAndWait(
        '드문드문 보이는 행인도 공기도 움직임을 멈췄다. 하지만 화면 속 조금 일그러진 질주의 그림자들은 결말을 아는 경쟁을 이어 간다.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '운명 같네요. 이를테면 당신과 저도 처음 만난 건 아니에요. 당신이 기억하지 못할 뿐이죠.',
      );
      await era.printAndWait([
        '같은 얼굴에 ',
        urara.get_colored_name(),
        '와(과) 닮았지만 더 어른스럽고 거리감 있는 미소가 떠오른다.',
        urara.sex,
        '은(는) 같은 자리에 선 채 ',
        you.get_colored_name(),
        '와(과) 이야기를 이어 간다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '당신과 ',
        urara.sex,
        '이(가) 그렇게 원한다면 저는 계속 기록하겠어요. 그 전에 잠깐 이야기해도 될까요?',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 대답을 기다리지 않고, 혹은 ',
        urara.get_colored_name(),
        '와(과) 마찬가지로 묵인을 알아차리고, ',
        urara.sex,
        "은(는) 이야기꾼처럼 '이야기'를 시작한다.",
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '당신은 이야기를 좋아하시나요? 이건 더없이 작은…… ',
        urara.uma_sex_title,
        '의 이야기예요——',
      ]);
      era.drawLine();
      await inner_urara.print_and_wait([
        '그리 멀지 않은 옛날, 제멋대로인 성격에 재능도 평범한 작은 ',
        inner_urara.uma_sex_title,
        '이(가) 어느 목장에서 그저 되는대로 태어났어요.',
      ]);
      await inner_urara.print_and_wait([
        '그렇게 성가시고 평범한 ',
        inner_urara.child_sex_title,
        '에게, 처음으로 ',
        inner_urara.sex,
        '을(를) 사랑한 사람들은 축복 같은 귀여운 이름을 지어 주었죠.',
      ]);
      await inner_urara.print_and_wait([
        inner_urara.sex,
        '의 삶도 그 귀여운 이름처럼, 우연한 행운 뒤에 시대와 세 여신의 사랑을 받았어요.',
      ]);
      await inner_urara.print_and_wait([
        '달리던 나날 동안 한 번도 이기지 못했지만, ',
        inner_urara.sex,
        '은(는) 여러 번 사람들의 동정과 보살핌을 받았죠.',
      ]);
      await inner_urara.print_and_wait([
        '그래서 ',
        inner_urara.sex,
        '은(는) 달리는 것을 싫어하고, ',
        inner_urara.sex,
        '에게 기대는 인간도 싫어하고, 목숨을 가볍게 거는 동족들도 싫어했어요. 모두 똑같이 싫어했죠.',
      ]);
      await inner_urara.print_and_wait([
        '그래도 그렇게 겁 많고 별난 ',
        inner_urara.sex,
        "은(는) 스스로 진창으로 만든 길 위에서, 마지막으로 남은 두 가지 '작은 행복'을 주웠어요.",
      ]);
      await inner_urara.print_and_wait(
        '하나는 모두의 사랑으로 쌓아 올린, 어딘가 부족해도 몸을 둘 수 있는 평온함. 다른 하나는 세 여신의 작은 장난이었죠.',
      );
      await inner_urara.print_and_wait([
        "여행 도중, 축복받은 ' ",
        inner_urara.sex,
        "'은(는) 마찬가지로 사람들에게 사랑받는 ' ",
        urara.sex,
        "'와(과) 같은 열차에 탔어요.",
      ]);
      await inner_urara.print_and_wait([
        "축복받은 길을 걸으면서도 사실 아무것도 할 수 없는 ' ",
        inner_urara.sex,
        "'은(는), 약하면서도 희망이 되고 싶어 하는 ' ",
        urara.sex,
        "'와(과) 만났어요.",
      ]);
      await inner_urara.print_and_wait(
        '꿈처럼 행복한 동행 속에서, 서로 달랐을 두 사람은 조금씩 서로의 모습을 닮아 갔어요.',
      );
      await inner_urara.print_and_wait([
        inner_urara.sex,
        '은(는) 너무 눈부신 희망도 똑같이 싫어했어요. 하지만 그 햇살은 비뚤어진 ',
        inner_urara.sex,
        '의 마음속 가장 부드러운 풀밭까지 비췄죠.',
      ]);
      await inner_urara.print_and_wait([
        urara.sex,
        '이(가) 이대로 즐겁게 자라면 좋겠다.',
        urara.sex,
        '이(가), ',
        urara.sex,
        '이(가) 원하는 작은 행복을 얻으면 좋겠다……',
      ]);
      await inner_urara.print_and_wait([
        "하지만 이렇게 작으면서도 달리기를 선택한 벚꽃빛은, 자신조차 갖지 못한 '모두의 미소'를 어디서 찾으려는 걸까요.",
      ]);
      await inner_urara.print_and_wait([
        '그래도 ',
        inner_urara.sex,
        '은(는) 찾았어요. 작은 ',
        urara.uma_sex_title,
        "이(가) 행복을 찾고, 함께 이야기를 끝까지 써 내려갈 수 있는 '트레이너'를요.",
      ]);
      era.drawLine();
      await era.printAndWait([
        '話が落ちると、耳を傾ける ',
        you.get_colored_name(),
        ' を見つめ、寄り添う',
        inner_urara.teen_sex_title,
        'の冷たい頬に、粘るような紅が満ちる。',
      ]);
      await era.printAndWait([
        'いつの間にか始まった肌の触れあいのなかで爪先立ち、',
        inner_urara.teen_sex_title,
        'は柔らかい湿った桜色の唇を ',
        you.get_colored_name(),
        ' の唇へ重ねる。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '『',
        urara.sex,
        '』の『あなた』への気持ちは、ご自身で感じてください……',
      ]);
      await era.printAndWait([
        '温かい柔らかさが、ねっとりした水音と一緒に沈む。',
        urara.get_colored_name(),
        ' に似た小さな',
        inner_urara.uma_sex_title,
        'は、',
        inner_urara.sex,
        'の表情で ',
        you.get_colored_name(),
        ' に求めてくる。',
      ]);
      await era.printAndWait([
        urara.sex,
        'と、こんなことをしてはいけない。時間がない。早く',
        urara.sex,
        'を離せ。',
        urara.sex,
        'は ',
        urara.get_colored_name(),
        ' ではない。',
        urara.sex,
        'と、こんなことは……',
      ]);
      await era.printAndWait(
        '意識ははっきり保とうとするのに、体はもう片方の腕のなかへ滑っていく。',
      );
      await era.printAndWait([
        '感情とは関係ない。迷う必要もない。',
        urara.sex,
        'からはいちばん大事な担当の気配がする。「',
        urara.get_colored_name(),
        '」は、ここにいる……',
      ]);
      await era.printAndWait([
        'そして、',
        urara.sex,
        'が始め、',
        urara.sex,
        'が主導する恍惚のキスのなかで、',
        urara.teen_sex_title,
        'は沈みかけるもう一方の唇を強く噛む。',
      ]);
      await era.printAndWait(
        '痛みは興奮した神経に抑えられるが、甘い生臭さは二人の口のなかへ広がる。',
      );
      await era.printAndWait([
        '目を細めて、血の混じった欲を吸い、溺れる',
        urara.sex,
        'は、まだ ',
        you.get_colored_name(),
        ' の体と心を侵し続ける。',
      ]);
      await era.printAndWait(
        '逃げられないキスに含まれるのは、重い欲か、混じった謝意か、歪んだ嫌悪か。あるいは、そのすべてか。',
      );
      await era.printAndWait([
        '確かなのは、「あなた」を選んだ「',
        urara.sex,
        '」が、',
        you.get_colored_name(),
        ' のすべてを欲しがっていることだ。肉体から魂まで……',
      ]);
      await era.printAndWait([
        '報復のような深いキスをゆっくり終え、まさに捕食者の',
        urara.teen_sex_title,
        'は名残惜しそうに、口元に残る銀糸を舐める。',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'こういうことです。分かりましたか。分からなくても構いません。あなたと',
        urara.sex,
        'には、まだ長い時間があります……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' の腕からそっと抜け、目の前の',
        urara.sex,
        'は目の熱を収め、外向きの冷たい距離感へ戻る。',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '그럼 마지막으로 우라라의 현재에 대해서도 조금 더 이야기할게요.',
      );
      if (fans < 25000) {
        await inner_urara.say_as_unknown_and_wait([
          '지금 우라라가 ',
          arim_kin,
          '에 나가고 싶다면, 먼저 뒷받침할 만한 중상 성적을 쌓아야 해요.',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '당신에게는 우라라와 함께 승리를 향해 나아갈 각오가 있어요. 그럼 우라라에게는 경기장에 나가기 전부터 압박을 견딜 각오가 있나요?',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          '그때 당신은 제 부탁을 들어주셨죠. 의지할 수 있는 분이에요. 그래서 우라라도 계속 기대는 거겠죠.',
        );
        await inner_urara.say_as_unknown_and_wait([
          '그러니 ',
          urara.sex,
          '이(가) ',
          arim_kin,
          '에 나가고 싶어 하는 걸 처음부터 당신이 말리리라고 기대하지 말았어야 했어요.',
        ]);
      }

      await inner_urara.say_as_unknown_and_wait(
        '다음에 우라라가 상처받는다면, 이야기를 이어 갈 권리는 제가 쥐겠어요.',
      );
      await era.printAndWait([
        "잠깐 뜸을 들인 뒤, 갑자기 나타났을 때처럼 눈앞의 ' ",
        inner_urara.get_colored_actual_name(),
        "'은(는) 또 제멋대로 등을 돌려 떠난다.",
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '그냥 따뜻한 빛을 받고 있으면 됐을 텐데, 작은 두 사람은 손을 잡고 태양을 좇으려 하네요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '그렇다면 저에게도 보여 주세요. 밀랍 날개가 녹기 전에, ',
        urara.sex,
        '와(과) 당신이 어디까지 태양에 다가갈 수 있을지——',
      ]);
      await era.printAndWait(
        '위협하는 말이 끝나자 잿빛 시야에 색이 돌아온다. 다시 흐르기 시작한 찬 바람이 바삐 움직이는 인파 속으로 스며든다.',
      );
      era.printButton(
        '「잠깐! 수수께끼 같은 말은 그만해! 대체 이게 뭐야? 너는……」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '마침내 몸이 움직이자, ',
        you.get_colored_name(),
        '은(는) 돌아서서 계속 물으려 한다. 하지만 보이는 건 옅은 안개 같은 미소뿐이다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '잘 생각해 보세요, 트레이너 ',
        you.adult_sex_title,
        '(당신). 제 이름을 모를 리 없잖아요.',
      ]);
      await era.printAndWait([
        '의미심장한 마지막 한마디를 남기고, ',
        urara.get_colored_name(),
        '의 얼굴을 덮었던 옅은 안개는 처음부터 없었던 것처럼 공기 속에 녹아든다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "곁에 남은 건 여전히 자신의 트레이너와 미래를 즐겁게 이야기하는 ' ",
        urara.get_colored_actual_name(),
        "'이다.",
      ]);
      await era.printAndWait('대낮에 유령이라니. 세 여신이시여——');
      await era.printAndWait([
        urara.sex,
        '의 말대로 지금 ',
        urara.get_colored_name(),
        '에게는 미래를 위한 준비가 부족할지도 모른다. 하지만 바로 그렇기 때문에 자신이 있는 것 아닌가.',
      ]);
      await era.printAndWait([
        '바람에 굳은 손가락을 쥐며, ',
        you.get_colored_name(),
        '은(는) 다시 옆에 있는 ',
        urara.get_colored_name(),
        '의 미소로 의식을 돌린다.',
      ]);
      await urara.say_and_wait(
        '……그리고 말이야, 처음 이런 레이스를 봤을 때 가슴이 정말 두근거렸어!',
      );
      await urara.say_and_wait([
        '에헤헤~ 하지만 이 이야기는 ',
        call_30,
        "이(가) '첫사랑처럼 들려서 오해받아'라고, 밖에서는 말하지 말랬어.",
      ]);
      await urara.say_and_wait([
        '그래도 ',
        callname,
        '한테는 말해야 해. 우라라, 처음 훈련을 봤을 때도 가슴이 정말 두근거렸거든……',
      ]);
      await era.printAndWait(
        '……조금 이상한 이야기를 들은 것 같다. 하지만 지금 중요한 건 그게 아니다.',
      );
      await era.printAndWait([
        "'그 ",
        urara.sex,
        "'의 말대로다. 지금 ",
        you.get_colored_name(),
        '이(가) 멈추더라도, ',
        urara.get_colored_name(),
        '은(는) 이 레이스를 선택하겠지……',
      ]);
      await era.printAndWait([
        "잠깐. 맞다, '그 ",
        urara.sex,
        "'에 관한 일도 있다. 그런데 이걸 어떻게 ",
        urara.get_colored_name(),
        '에게 이야기하지?',
      ]);

      era.printButton('「아, 맞다, 우라라. 아까 뭔가…… 만난 것 같은데……」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 환상 같았던 일을 어떻게 ',
        urara.get_colored_name(),
        '에게 이야기할지 생각하던 중, 작은 ',
        urara.uma_sex_title,
        '의 짧은 비명이 들려온다.',
      ]);
      await urara.say_and_wait(['아, ', callname, '! 입술! 어디서 까진 거야?']);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 다급한 말을 듣고, ',
        you.get_colored_name(),
        '은(는) 뒤늦게 찾아온 통증에 반사적으로 손가락을 입술에 댄다.',
      ]);
      await era.printAndWait(
        'これは……血？ 傷から付いた、固まりかけの赤を見つめ、半覚醒だったあの痛いキスが、ようやく頭ではっきりする。',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '의 걱정과 의문이 담긴 눈앞에서, ',
        you.get_colored_name(),
        "은(는) 잠시 침묵한다——' ",
        inner_urara.sex,
        "'은(는) 분명 여기에 왔었다……",
      ]);
    };
    f.title = title;
    return f;
  })(),
  async we_47_48_or_else(inner_urara, you) {
    await inner_urara.say_as_unknown_and_wait([
      '마지막으로 기억해 주세요. 트레이너 ',
      you.adult_sex_title,
      '(당신).',
    ]);
  },
  oc_95_1: (() => {
    const title = '새해 첫 참배';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait(
        '네. 특별히 할 말은 없지만, 우라라와 무사히 시니어급에 진입하신 걸 축하드려요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '……왜 그러시나요? 분위기가 달라졌다니, 착각이에요. 저는 아무것도 달라지지 않았어요.',
      );
      era.drawLine();
      await era.printAndWait([
        '정월을 맞아 북적이는 인파 속에서, ',
        you.get_colored_name(),
        '은(는) 신사의 긴 계단 아래에서 함께 참배하기로 약속한 동료를 기다리고 있었다.',
      ]);
      await era.printAndWait([
        '오늘의 ',
        urara.get_colored_name(),
        '는 드물게 늦었다. 약속 시간에서 고작 몇 분 지났을 뿐이지만, 평소 놀기를 좋아하는 ',
        urara.sex,
        '라면 외출할 때는 보통 더 일찍 도착하곤 했다.',
      ]);
      await era.printAndWait([
        '새해 인파에 휩쓸린 걸까.',
        urara.uma_sex_title,
        '이(가) 깔릴 걱정은 없지만, ',
        urara.get_colored_name(),
        '이(가) 길을 잃었다면……',
      ]);
      await era.printAndWait([
        '담당을 찾으러 되돌아가려던 그때, 바로 근처에서 ',
        urara.teen_sex_title,
        '의 익숙하고 맑은 부름이 들렸다.',
      ]);
      await urara.say_and_wait([
        callname,
        '! 나 여기 있어! 우라라는 여기 있다구!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 뒤를 돌아 찾는 사이, 홍백이 어우러진 벚꽃색 봄바람이 기온이 오르기도 전에 ',
        you.get_colored_name(),
        '의 품 안으로 불어닥쳤다.',
      ]);
      await era.printAndWait([
        '고개를 숙여 보니, 분홍빛이 섞인 명절 옷을 차려입은 ',
        urara.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '을(를) 향해 환하게 웃고 있었고, 벚꽃이 피어난 듯한 눈동자가 반짝거리고 있었다.',
      ]);

      urara.say([
        '헤헤~ 다들 제대로 격식을 차리는 게 좋다고 해서, 오늘은 준비하는 데 시간이 좀 걸렸어! ',
        callname,
        ', 어때?',
      ]);
      era.printButton('「응, 우라라 오늘 정말 예쁜걸!」（호감도+20）', 1);
      era.printButton('「응, 또 우라라에게 넋을 잃고 말았네!」(연모+5)', 2);
      ret.push(await era.input());
      if (ret[0] === 1) {
        await urara.say_and_wait([
          '에헤헤~ 정말? 다들 도와줘서 한참 동안 옷 입고 있었어!',
          callname,
          '도 좋아해 줘서 다행이야!',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 기쁜 듯 그 자리에서 빙글 돌았다. 넓은 소매와 긴 옷자락이 작은 새의 날개처럼 흔들렸다.',
        ]);
        await urara.say_and_wait([
          '그런데 귀여운 게 아니라 예쁜 거야? 혹시 ',
          callname,
          '은(는) 우라라가 이제 어른 같다고 생각한 거야?',
        ]);

        era.printButton(
          "「아니야. 어른이 돼서가 아니라, 우라라는 언제나 '어른들'보다 훨씬 예뻐.」",
          1,
        );
        await era.input();
      } else {
        await urara.say_and_wait(
          '그렇지! 다들 도와줘서 한참 동안 옷 입고 있었거든…… 어? 에에에——',
        );
        await era.printAndWait([
          '뜻밖의 대답에 ',
          urara.get_colored_name(),
          '은(는) 잠깐 멍해졌다가, 나들이옷의 넓은 소매로 빨개진 뺨을 서둘러 가렸다.',
        ]);
        await urara.say_and_wait([
          callname.substring(0, 1),
          '、',
          callname,
          ', 우라라가 잘 모르는 말 하지 마…… 기쁘긴 하지만! 우라라, 이제 어린애 아니니까……',
        ]);

        era.printButton(
          '「미안해, 앞으로 조심할게. 하지만 우라라한테 농담한 건 아니야.」',
          1,
        );
        await era.input();
      }
      await era.printAndWait([
        '그런 다음 부끄러워하는 ',
        urara.get_colored_name(),
        '의 작은 손을 잡고, ',
        you.get_colored_name(),
        '은(는) 담당과 함께 소원을 빌러 신사로 향하는 긴 돌계단을 오르기 시작했다.',
      ]);
      await era.printAndWait([
        '하지만 올라갈수록 ',
        you.get_colored_name(),
        '도 ',
        urara.get_colored_name(),
        '도 주변의 변화를 알아차린다——애초에 신사 계단이 이렇게 길었던가.',
      ]);
      await era.printAndWait(
        '신사 돌계단이 높다는 건 안다. 하지만 평소 기억으로는 끝이 안 보일 정도는 아니었을 텐데.',
      );
      await era.printAndWait(
        '어느새 주변의 참배객들은 사라져 가고, 주위의 나무들은 점점 빽빽해졌다.',
      );
      await era.printAndWait(
        '이르게 새잎을 틔운 나무도 있다. 아직 찬 바람이 남은 계절에는 어울리지 않는 풍경이었다.',
      );
      await era.printAndWait(
        '일상적인 기도의 장소에서도 가끔 신기한 일이 일어나지만, 오늘의 변화는 너무나 뚜렷했다.',
      );
      await era.printAndWait(
        '악의가 없다는 건 확실하다. 계단을 오르는 피로마저 사라져 버렸다.',
      );
      await era.printAndWait([
        '그렇다 해도 이 오르막은 지나치게 길었다. 앞쪽으로 지루할 만큼 곧게 뻗은 길을 올려다보며, ',
        you.get_colored_name(),
        '은(는) 깊은 한숨을 내쉬었다.',
      ]);
      await era.printAndWait(
        '지금이라도 되돌아갈까? 하지만 돌아가더라도 끝없는 계단만 이어질 것 같은데, 어쩌면 좋지……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 다음 행동을 고민하는데, 옆의 ',
        urara.get_colored_name(),
        '이(가) 뜻밖의 이야기를 꺼냈다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 사실 우라라는 알고 있어. 처음의 우라라의 모습으로는, 스스로의 힘으로 트레센에 올 수 없었을 거라는걸.',
      ]);
      await era.printAndWait([
        '갑작스러운 한마디에 뒤통수를 맞은 듯한 기분이 들어, ',
        you.get_colored_name(),
        '은(는) 계단에서 발을 헛디뎌 미끄러질 뻔했다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 입을 열자, ',
        you.get_colored_name(),
        '은(는) 작은 ',
        urara.uma_sex_title,
        '이(가) 꺼낼 이야기를 만 가지는 상상했지만, 진지하고 무거운 화제만큼은 예상하지 못했다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 긴장한 채 옆의 ',
        urara.get_colored_name(),
        '를 보았으나, 지금의 ',
        urara.sex,
        '는 시선의 끝보다 더 높은 곳을 조용히 바라보고 있었다.',
      ]);
      await urara.say_and_wait(
        '엄마가 예전에 말해줬어. 신사 계단을 이렇게 높게 만든 건, 신령님께 더 가까이 가기 위해서래!',
      );
      await urara.say_and_wait(
        '신령님은 역시 엄청 높은 곳에 사시는구나. 아, 그런데 엄마가 또 그랬어. 누군가를 찾아갈 때는 마음을 담은 선물을 준비하는 게 좋다고.',
      );
      await era.printAndWait([
        '위로 향했던 시선을 옆으로 돌려 어른의 손을 얌전히 잡은 채, ',
        urara.get_colored_name(),
        '는 차분하고 귀여운 미소로 ',
        you.get_colored_name(),
        '에게 제안을 건넸다.',
      ]);
      await urara.say_and_wait([
        '우라라가 조금 늦게 말하는 것 같지만, ',
        callname,
        ', 지금이라도 우라라의 옛날이야기를 들어줄래?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 깊은 눈빛과 마주하자 그 안에서 무언가를 읽어낸 ',
        you.get_colored_name(),
        '도 조용히 고개를 끄덕였다.',
      ]);
      era.drawLine();
      await urara.print_and_wait([
        '보이지 않는 친구, ',
        callname,
        '도 알고 있어? 맞아, 다들 그건 외로운 아이들만 만날 수 있는 친구라고들 하지.',
      ]);
      await urara.print_and_wait(
        '참 신기하지? 다들 보이지 않는 친구는 환상일 뿐이라고 하지만, 우라라는 꼭 그렇지만은 않다고 생각해.',
      );
      await urara.print_and_wait(
        '응! 우라라는 친구가 항상 많았지만, 그래도 보이지 않는 친구가 한 명 있었어! 우라라랑 똑같이 생긴 친구야!',
      );
      await urara.print_and_wait([
        '하지만 다들 말하는 다정한 친구들과는 다르게, ',
        urara.sex,
        '는 항상 슬픈 표정을 짓고는 멀리서 우라라를 지켜보기만 했어.',
      ]);
      await urara.print_and_wait([
        '이대로 ',
        urara.sex,
        '을(를) 그냥 둘 수 없다고 생각해서, 우라라가 먼저 만나러 갔어. 그다음에는 ',
        urara.sex,
        '을(를) 여러 곳에 데리고 다녔지.',
      ]);
      await urara.print_and_wait([
        '그러다가 계속 함께하는 친구가 됐어.',
        urara.sex,
        '은(는) 여전히 자주 풀이 죽어 있었지만, 점점 웃는 날도 많아졌어.',
      ]);
      await urara.print_and_wait([
        '어느 날 친구가 갑자기 우라라한테 물었어. 우라라의 소원은 뭐야? 말해 주면 ',
        urara.sex,
        '이(가) 온 힘을 다해서 이뤄 주겠대.',
      ]);
      await urara.print_and_wait([
        '그래서 우라라는 친구한테 말했어. 항상 슬픈 얼굴인 ',
        urara.sex,
        '이(가) 언젠가는 더 이상 슬프지 않을 만큼 행복해지면 좋겠다고!',
      ]);
      await urara.print_and_wait(
        '그런데 우라라의 대답을 들은 친구는 전보다 더 풀이 죽은 얼굴을 했어……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '미안해요. 그 소원만은 저 혼자서는 이룰 수 없어요. 저의 행복은 우라라가 행복한 것이니까요……',
      );
      await urara.say_and_wait(
        '응…… 그럼 우라라를 더 행복하게 만들어 볼까! 그러면 너도 기뻐질 수 있겠지?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '그럼 우라라가 바라는 행복은 뭔가요? 사람들에게 사랑받는 것? 편안한 생활? 아니면……',
      );
      await urara.say_and_wait(
        '다들 우라라가 달리는 걸 보면 웃어 주니까, 모두가 희망을 발견하고 기쁜 얼굴이 됐으면 좋겠어!',
      );
      await urara.print_and_wait([
        '우라라의 소원을 들은 친구는 엄청 놀랐어. 하지만 ',
        urara.sex,
        '은(는) 그래도 우라라의 소원을 들어주기로 했어.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        "알겠어요. 시간은 아직 충분해요. 협력자를 찾아서 우라라가 '우리의 이야기'를 써 나갈 수 있게 할게요.",
      );
      await urara.print_and_wait(
        '그 뒤는 우라라가 조금 더 자랐을 때, 엄마가 갑자기 트레센에 보내 준 이야기야.',
      );
      await urara.print_and_wait([
        '그다음은…… 에헤헤~ 우라라는 훈련장에 쓰러져 있던 ',
        callname,
        '을(를) 만났지!',
      ]);
      await urara.print_and_wait(
        '그런데 말이야! 트레센에 온 뒤로 항상 지기는 해도, 우라라는 많은 걸 한꺼번에 알게 됐어!',
      );
      await urara.print_and_wait(
        '엄마가 우라라를 트레센에 데려온 게 마침 봄이었거든. 그래서 우라라는 알았어. 나는 운이 좋구나 하고.',
      );
      await urara.print_and_wait(
        '우라라는 운이 좋아서 봄을 따라올 수 있었어. 다들 봄은 좋다고 생각하니까, 봄은 언제나 모두를 웃게 해 줘.',
      );
      await urara.print_and_wait(
        '그러니까 우라라가 고민하던 것들, 보이지 않는 친구가 상상인지, 우라라랑 같은 세상에 있는지 같은 건 사실 중요하지 않아!',
      );
      await urara.print_and_wait(
        '다들 믿을 수 있는 희망을 줄 수 있다면 전부 의미가 있을 테고, 모두 웃을 수 있으니까.',
      );
      await urara.print_and_wait([
        '그래서 ',
        callname,
        '이(가) 보는 것처럼, 우라라는 끝까지 달리는 걸로 친구와의 약속을 지키기로 했어!',
      ]);
      era.drawLine();
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '의 웃는 얼굴로 이야기가 끝나고, 어느새 ',
        you.get_colored_name(),
        '와(과) ',
        urara.get_colored_name(),
        '은(는) 평소보다 몇 배나 긴 돌계단의 꼭대기에 도착해 있었다.',
      ]);
      await era.printAndWait([
        '과연 그랬군. 이것이 ',
        urara.get_colored_name(),
        '와 「',
        urara.sex,
        '」의 관계였나. ',
        urara.get_colored_name(),
        '가 많은 디테일을 생략했을지도 모르지만, 대강의 흐름은 파악할 수 있었다.',
      ]);
      await era.printAndWait([
        '다만, ',
        urara.get_colored_name(),
        '의 소원을 들어주기로 해놓고 정작 행복의 정의는 자기 식대로 내세우다니, ',
        urara.sex,
        '는 어지간히 통제욕이 강한 부모 같은 성격인 모양이다.',
      ]);
      await era.printAndWait([
        '선명한 붉은색 토리이를 지나, ',
        you.get_colored_name(),
        '과(와) ',
        urara.get_colored_name(),
        '는 참배객이 한창 많아야 할 시기임에도 아무도 없는, 하지만 기괴함은 전혀 느껴지지 않는 신사 경내로 들어섰다.',
      ]);

      era.printButton(
        '「그런데 이제 와서 묻는 게 좀 뒷북 같긴 하지만…… 우라라가 중앙 트레센에 올 수 있었던 게 그 『보이지 않는 친구』 덕분이라고 생각해?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '그건 아마 엄마가 어떻게든 해주신 거 아닐까? 이웃집 사람들이 말하길, 엄마는 젊었을 때 아주 대단한 중앙 레이스 우마무스메였대.',
      );
      await urara.say_and_wait(
        '게다가 나를 트레센으로 데려가기 전에도 엄마는 방금 중앙에서 돌아오신 참이었고, 그때 우라라는 입학 테스트도 안 봤는걸……',
      );
      await era.printAndWait(
        '허, 망설임 없는 대답이군. 게다가 이 대답도 예상외로 조금 무서운 구석이 있었다……',
      );
      await urara.say_and_wait(
        '하지만 그게 전부는 아닐 거야. 엄마는 우라라의 보이지 않는 친구가 존재한다고 믿어준 유일한 사람이었으니까.',
      );
      await urara.say_and_wait([
        '어쩌면 엄마도 우라라의 친구를 볼 수 있어서, ',
        urara.sex,
        '와 이야기를 나눴을지도 몰라!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) 함께 새전함에 동전을 던지고 줄에 달린 방울을 울리며, ',
        urara.get_colored_name(),
        '는 미소를 띤 채 작은 소리로 말을 이어갔다.',
      ]);
      await urara.say_and_wait([
        '근데 ',
        callname,
        '는 가끔…… 정말로 잔소리가 심하다니까!',
      ]);

      era.printButton('「우라라?!」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 한 걸음 물러나다 미끄러질 뻔했지만, 다행히 신령님과 담당이 보는 앞에서 볼썽사나운 모습을 보이진 않았다.',
      ]);
      await era.printAndWait([
        '젠장, 이제는 ',
        urara.get_colored_name(),
        '까지 그렇게 생각하나. 게다가 ',
        you.phy_sex_title,
        '이(가) 조금 꼼꼼한 게 뭐가 문제야!',
      ]);
      await urara.say_and_wait([
        '헤헤~ 이제 소원을 적을 차례야! ',
        callname,
        ', 준비됐어?',
      ]);

      era.printButton(
        '「무, 문제없어. 우라라의 트레이너는 어엿한 어른이니까……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '성인으로서의 체면을 간신히 유지하며, ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '가 건네준 펜을 받아 들었다.',
      ]);
      urara.say(['그래서, ', callname, '는 어떤 소원을 빌 거야?']);
      era.printButton(
        '「일단 주변 사람들 모두 건강하기를?」（스태미나+30）',
        1,
      );
      era.printButton(
        '「하는 일마다 잘되기를…… 대충 그런 의미?」（전 능력치+5）',
        2,
      );
      era.printButton(
        '「새해에는 어떤 어려움도 쉽게 극복할 수 있기를?」（스킬 포인트+35）',
        3,
      );
      ret.push(await era.input());
      await era.printAndWait([
        '미리 생각했던 내용을 빠르게 적어 내려간 뒤 펜을 내려놓고, ',
        you.get_colored_name(),
        '은(는) 여전히 집중해서 소원을 쓰고 있는 ',
        urara.get_colored_name(),
        '쪽으로 몸을 돌렸다.',
      ]);

      era.printButton('「우라라는 어떤 소원을 빌고 있어?」', 1);
      await era.input();

      urara.say('응! 빌고 싶은 게 아주 많지만, 딱 하나만 고르라면 역시──');
      era.printButton('더 먼 거리 (중&장거리 적성 상승)', 1);
      era.printButton('잔디에 도전 (잔디 적성 상승)', 2);
      ret.push(await era.input());
      if (ret[2] === 1) {
        await urara.say_and_wait(
          "아리마는 거리가 기니까, '더 멀리 달릴 수 있게 되고 싶어요'!",
        );
      } else {
        await urara.say_and_wait(
          "아리마 기념은 잔디니까, '잔디에서 더 빨리 달리고 싶어요'!",
        );
      }
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 한 획씩 뜻밖의 소원을 써 내려가는 모습을 지켜보며, ',
        you.get_colored_name(),
        '은(는) 기쁘면서도 조금 복잡한 기분이 들었다.',
      ]);

      era.printButton(
        '「……의외로 진심이네. 목표가 정해지니까 의욕이 생겼어?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '맞아! 그런데 ',
        callname,
        ', 오늘 돌아가자마자 우라라를 훈련하러 끌고 가는 건 아니지?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 속내가 뻔히 드러나는 말을 듣고, 두 사람의 소원판을 다 건 ',
        you.get_colored_name(),
        '은(는) 돌아서서 어른이 장난칠 때의 능청스러운 미소를 지었다.',
      ]);

      era.printButton(
        '「원래는 안 그럴 생각이었어. 하지만 우라라가 그렇게 의욕이 넘친다면…… 방금 계단, 꽤 길어졌던데?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '거짓말이다.',
        urara.get_colored_name(),
        '이(가) 그렇게 의욕을 보이지 않아도, 지형을 활용한 훈련은 기세를 타고 시작되고 말 테니까.',
      ]);
      await urara.say_and_wait([
        '에에—— 지금부터 시작하지 마, ',
        callname,
        '! 신님의 친절을 그렇게 이용하면 안 돼!',
      ]);
      await urara.say_and_wait(
        '아래에 있는 노점에 놀러 못 가도 괜찮으니까, 적어도 신사 안에서 조금만 더 걷게 해 줘——',
      );
      await era.printAndWait([
        '응석부려도 안 된다!',
        urara.get_colored_name(),
        '은(는) 착한 아이이고, 착한 아이의 응석은 통하지 않는 법이다!',
      ]);

      era.printButton(
        '「좋아! 그럼 노점에서 놀고 싶다는 우라라의 소원을 이루기 위해 달리자! 발밑 조심해!」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '너무해! 신님이 화내실 거야! 돌아가서 같이 떡이랑 쿠키 먹으려고 했는데——',
      );
      await era.printAndWait([
        '울먹이며 말하면서도, ',
        urara.get_colored_name(),
        '은(는) 눈가를 훔치고 조금 토라진 채 먼저 돌계단을 달려 내려간 ',
        you.get_colored_name(),
        '의 뒤를 쫓았다.',
      ]);
      await era.printAndWait([
        '그건 아니겠지.',
        urara.get_colored_name(),
        '의 미래의 1착을 위해서라면 신님도 눈감아 주실 것이다.',
      ]);
      await era.printAndWait([
        '하지만 이렇게 계속 나아가기만 한다면 소원은 반드시 이루어질 것이고, 희망으로 가득 찬 ',
        urara.sex,
        '의 앞날도 충분히 기대할 만하지 않겠는가.',
      ]);
      await era.printAndWait([
        '자신을 앞질러 달려가는 홍백이 섞인 벚꽃색 뒷모습을 바라보며, ',
        you.get_colored_name(),
        '의 얼굴에 서린 미소도 점차 흐뭇함으로 변해갔다.',
      ]);
      await era.printAndWait(
        '어떤 면에서든 한 걸음 더 다가갈 수 있었으니, 새해 참배치고는 아주 훌륭하지 않은가.',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '우라라가 이상한 이야기를 많이 했네요. 하지만 지난번에는 저도 그만큼 지나쳤으니 이번에는 용서해 드리겠어요!',
      );
      await inner_urara.say_as_unknown_and_wait(
        "어때요, 가끔은 '우라라'의 말투를 흉내 내 보는 것도? 네, 안 닮았다고요? 으…… 당신이란 사람은……",
      );
      await inner_urara.say_as_unknown_and_wait(
        '네? 태도가 달라졌다고요? 그런 일 없어요. 착각이라고 몇 번이나 말씀드렸잖아요——',
      );
      await inner_urara.say_as_unknown_and_wait(
        '크흠, 실례했어요. 모처럼 새해라 저도 조금 들떴나 봐요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        "하지만 '지배욕이 강한' 건 당신도 마찬가지 아닌가요? 우라라 식으로 말하자면, 즐거우면 그걸로 된 거잖아요?",
      );
      await inner_urara.say_as_unknown_and_wait(
        '그리고 신사 일 말인데요. 그것도 제가 한 건 아니에요.',
      );
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_negi_sta: (() => {
    const title = '네기시 스테이크스를 향해!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} joined_g3 重賞出走済みか
     * @param {number|false} arim_kin_rank_c クラシック級有馬記念の着順。false は有馬記念未出走
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} negi_sta 根岸ステークス（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      joined_g3,
      arim_kin_rank_c,
      arim_kin,
      negi_sta,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '의욕이 안 나는 마음은 알겠지만……',
      );
      await inner_urara.say_as_unknown_and_wait('뭐, 대충 하지만 않으면 됐죠.');
      era.drawLine();

      era.printButton('「우라라, 준비됐어? 오늘 레이스 말이야.」', 1);
      await era.input();

      await urara.say_and_wait([
        '네에! 그런데 ',
        callname,
        ', 오늘은 중상 레이스야?',
      ]);

      era.printButton(
        '「오늘은 중상이야. 다른 사람들 분위기에 휩쓸리지 마.」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '응! 왠지 이번에 ',
        callname,
        '이(가) 고른 레이스는 전이랑 비슷한 점도 있고, 다른 점도 있는 것 같아……',
      ]);
      await urara.say_and_wait(
        '그런데 분, 위기……? 이 말, 이번에는 우라라가 틀리지 않았어! 에헤헤~',
      );

      era.printButton(
        '「……뜻밖의 부분에서 성장했네. 평소 페이스대로, 전처럼 기운차게 가자.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '선수 통로에 차분히 서서, ',
        you.get_colored_name(),
        '와(과) ',
        urara.get_colored_name(),
        '은(는) 레이스 전에 이런저런 잡담을 나누고 있었다.',
      ]);
      await era.printAndWait(
        "지나가는 사람이 고개를 갸웃할지도 모른다. '점심은 뭐 먹었어' 같은 대화를 나누는 지금이 정말 중상 레이스 직전이냐고.",
      );
      await era.printAndWait(
        "두 사람의 모습은 그다지 진지하지 않게 '그렇다'고 답하는 듯하지만, 적어도 기운이 빠진 건 아니다. 그저 좀처럼 긴장이 되지 않을 뿐이다.",
      );
      await era.printAndWait(
        '두 사람은 전에도 중상에 나가면 어떨지 여러 가지로 상상했다. 하지만 시니어급이 되어 실제로 코스 앞에 서니, 별것 아니었다.',
      );
      await era.printAndWait([
        '왜냐하면 ',
        urara.sex,
        "은(는) ' ",
        urara.get_colored_name(),
        "'이고, ",
        you.get_colored_name(),
        '은(는) ',
        urara.sex,
        "의 '트레이너'다. 지든 이기든 매번 전력을 다해 달리면 그걸로 됐다.",
      ]);
      await era.printAndWait([
        '다만 그 결과로 여기에 오기로 선택했을 뿐이다.',
        negi_sta,
        '。',
      ]);
      if (joined_g3) {
        await era.printAndWait([
          '온 이유는 전에 약속한 대로, ',
          urara.get_colored_name(),
          '와(과) 함께 시니어급의 수준을 가늠해 보기 위해서다.',
        ]);
        await era.printAndWait([
          '그래도 지금까지의 중상과는 달리, 이번에는 ',
          urara.get_colored_name(),
          '이(가) 조금이라도 편하게 달리길 바란다.',
        ]);
      } else {
        await era.printAndWait([
          '꼭 여기가 아니어도 됐지만, ',
          urara.get_colored_name(),
          '의 첫 중상인 만큼 ',
          urara.get_colored_name(),
          '에게 조금 수월한 것을 골랐다.',
        ]);
        await era.printAndWait([
          '다만 지금 ',
          urara.get_colored_name(),
          '의 상태라면, 져도 처음처럼 어찌할 줄 몰라 하지는 않을 것이다.',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await you.say_and_wait(
            '게다가 무엇보다 아리마는…… 이겼잖아? 이번에 제대로 의욕을 못 내도 아무도 나무라지 않겠지……?',
            true,
          );
        } else {
          await era.printAndWait([
            '이미 ',
            arim_kin,
            '에 출전한 적이 있으니, ',
            urara.get_colored_name(),
            '이(가) 좀처럼 긴장하지 않는 것도 예상한 일이다.',
          ]);
          await era.printAndWait([
            '그러니 지금 예상할 수 있는 건, 끝이 좋든 나쁘든 ',
            urara.get_colored_name(),
            '은(는) 이번에 크게 동요하지 않을 거라는 점이다.',
          ]);
        }
      }
      era.println();
      await urara.say_and_wait(['그럼 ', callname, ', 다녀올게──!']);
      await era.printAndWait([
        '등장 신호와 함께 울린 경쾌한 목소리 속에서, ',
        urara.get_colored_name(),
        '은(는) 한 걸음 앞으로 나와 ',
        you.get_colored_name(),
        '에게 손을 들어 보였다.',
      ]);

      era.printButton('「그래! 즐겁게 달리고 와!」', 1);
      await era.input();

      await era.printAndWait([
        '서로 가장 익숙한 손짓으로 답한 뒤, ',
        urara.get_colored_name(),
        '은(는) 다시 코스를 향해 달려 나갔다——',
      ]);
    };
    f.title = title;
    return f;
  })(),
  negi_sta_win: (() => {
    const title = '다음은?';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {number} best_g1 現在の G1 最高着順。Infinity は G1 未出走
     * @param {number|false} arim_kin_rank_c クラシック級有馬記念の着順。false は有馬記念未出走
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      best_g1,
      arim_kin_rank_c,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait('예상대로의 승리, 축하드려요?');
      await inner_urara.say_as_unknown_and_wait(
        '어쩌다 졌어도 탓하지는 않겠지만, 다음에는 조금 더 진지하게 해 주세요.',
      );
      era.drawLine();
      await era.printAndWait([
        '앞줄 가장자리에 도착하자마자, 코스 안에서 달려온 벚꽃빛 작은 생물이 폴짝폴짝 뛰며 ',
        you.get_colored_name(),
        '와(과) 하이파이브를 했다.',
      ]);
      await era.printAndWait(
        '울타리 너머로 내려다보니, 아직 땀도 닦지 않은 환한 미소가 기다리고 있었다.',
      );
      await urara.say_and_wait([callname, '! 1착이야, 1착이야──!']);
      await urara.say_and_wait(
        '에헤헤~ 특기인 단거리라서 그런가? 순식간에 끝나 버렸어!',
      );
      await urara.say_and_wait(
        '그래도 맨 앞에서 달리는 느낌은 전이랑 똑같아. 맨 앞에서 보는 풍경은 정말 예뻐~',
      );

      era.printButton('「응, 이번엔 잘했어. 소감은 어때?」', 1);
      await era.input();

      await urara.say_and_wait(
        '소감은 많아. 그래도 마지막에는 역시 온 힘을 다해 앞으로 뛰쳐나가는 게 우라라한테 제일 잘 맞는 것 같아!',
      );
      await urara.say_and_wait(
        '오늘 레이스 자체는 그렇다 치고…… 우라라, 더 높은 등급의 레이스에도 나갈 수 있을 것 같아!',
      );
      await era.printAndWait([
        '그렇다. 지금 ',
        urara.get_colored_name(),
        '은(는) 여전히 전술을 실행하는 능력이 상당히 제한적이다.',
      ]);
      await era.printAndWait([
        '하지만 다른 말도 맞다. 지금 ',
        urara.sex,
        '에게는 더 높은 등급의 레이스에 도전할 자격이 있다.',
      ]);

      era.printButton(
        `「그렇다면 선택지는 몇 가지 있지만…… 일단 페브러리 스테이크스를 추천할게. 어때?」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '페브러리…… 아! 교과서에서 배웠어! G1 레이스지?',
      );
      await urara.say_and_wait([
        '그럼 ',
        callname,
        '은(는) 다음에는 G1에 도전하는 게 좋겠다는 거야? 올해 아리마 기념을 위해 경험을 쌓는 거지?',
      ]);

      era.printButton(
        '「응…… 대략 그런 셈이지. 아무튼 다음 레이스를 준비하자!」',
        1,
      );
      await era.input();

      await urara.say_and_wait('응!');
      if (best_g1 === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          '본인이 말한 대로, 지금 ',
          urara.sex,
          '은(는) G1 우승 실적을 가진 강한 ',
          urara.uma_sex_title,
          '으로 성장해 있었다.',
        ]);
        await era.printAndWait([
          '처음에는 어리둥절해하며 훈련조차 어려워하던 작은 ',
          urara.uma_sex_title,
          '이(가) 늘 승리하는 ',
          urara.uma_sex_title,
          '이(가) 되다니, 상상하기 어려운 일이다.',
        ]);
        await era.printAndWait([
          '모두 잘못 짚었던 걸까. ',
          urara.get_colored_name(),
          '은(는) 알아보기 어려운 천재였던 걸까.',
        ]);
      } else {
        await era.printAndWait([
          '마지막 레이스를 준비하기 위해서만은 아니다. 더 중요한 건 ',
          urara.get_colored_name(),
          '이(가) 언젠가 반드시 G1이라는 벽을 넘어야 한다는 것이다.',
        ]);
        await era.printAndWait([
          '시니어급에 들어서면 ',
          urara.get_colored_name(),
          '에게 남은 시간도 그리 넉넉하지 않다. 그래도 이건 ',
          urara.sex,
          '이(가) 한 번은 통과해야 할 시험이다.',
        ]);
        await era.printAndWait([
          '적어도 달릴 수 있는 시간 동안 ',
          urara.sex,
          '에게 후회를 남기고 싶지는 않다.',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await era.printAndWait([
            "다만 ' ",
            arim_kin,
            "의 준비'라…… 본래 그런 뜻은 아니었지만, 한 번 이긴 이상 확실히 필요하다.",
          ]);
          await era.printAndWait([
            "중요한 레이스에서 한 번 우승하면 같은 무대의 경쟁자들에게 견제받는다. ' ",
            urara.get_colored_actual_name(),
            "이(가) 아리마에서 이길 수 있다'는 사실은 더더욱 무서운 반응을 일으킨다.",
          ]);
          await era.printAndWait(
            '이번 아리마가 어떻게 될지는 상상하기 어렵다. 그러니 그 전에 할 수 있는 걸 다할 수밖에 없다.',
          );
        } else {
          await era.printAndWait([
            '「',
            arim_kin,
            "의 준비'에 대해서는 ",
            urara.get_colored_name(),
            '이(가) 강조하지 않아도 트레이너인 ',
            you.get_colored_name(),
            '은(는) 반드시 기억할 것이다.',
          ]);
          await era.printAndWait([
            '다만 지금의 작은 ',
            urara.uma_sex_title,
            '은(는) 즐겁게 달리는 것 이상으로, 올해는 이기고 싶은 마음이 강할 것이다.',
          ]);
          await era.printAndWait(
            '하지만 아리마에서 이기는 건 역시…… 아무튼 트레이너로서 할 수 있는 걸 다할 수밖에 없다.',
          );
        }
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '이렇게 트레이너 ',
        you.adult_sex_title,
        '(당신)와 ',
        urara.get_colored_name(),
        '은(는) 다음 출전 목표를 정했습니다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '다만 ',
        urara.sex,
        '이(가) 어디까지 도전할 수 있을지는 세 여신만이 알고 계실지도 모릅니다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '다음에 만날 때는 이렇게 되지는 않겠죠……',
      );
    };
    f.title = title;
    return f;
  })(),
  negi_sta_lose: (() => {
    const title = '다음은?';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {number} best_g1 現在の G1 最高着順。Infinity は G1 未出走
     * @param {number|false} arim_kin_rank_c クラシック級有馬記念の着順。false は有馬記念未出走
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      best_g1,
      arim_kin_rank_c,
      arim_kin,
    ) => {
      await inner_urara.say_as_unknown_and_wait(
        '설마 정말 질 줄이야. 네…… 제가 처음에 뭐라고 말씀드렸죠.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '……다음에는 조금 더 진지하게 해 주세요.',
      );
      era.drawLine();
      await era.printAndWait([
        '차분히 코스 가장자리로 오자, ',
        you.get_colored_name(),
        '은(는) 멀리서 얼굴의 땀을 닦으며 달려오는 ',
        urara.get_colored_name(),
        '을(를) 보았다.',
      ]);
      await urara.say_and_wait(
        '후우—— 이번엔 금방 끝났네! 그런데 어쩌다 져 버렸어……',
      );
      await urara.say_and_wait(
        '그래도 이번엔 정말 즐겁게 달렸어! 또 신경 써야 할 게 있어?',
      );

      era.printButton(
        '「괜찮아. 조금 컨디션이 안 좋았을 뿐이야. 다음엔 꼭 이기자.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '웃는 얼굴이 조금 어색한 ',
        urara.get_colored_name(),
        '에게 수건을 건네고, ',
        you.get_colored_name(),
        '은(는) 웃으며 축 처진 귀를 살며시 쓰다듬었다.',
      ]);
      await era.printAndWait([
        '어떤 레이스에서도 평소의 자신을 유지하는 건 ',
        urara.get_colored_name(),
        '의 장점이지만, 지금은 분명 컨디션을 가다듬는 게 먼저였다.',
      ]);
      await era.printAndWait([
        '다음에는 모두가 진심으로 임하는 레이스에 나가 보자. 그러면 ',
        urara.get_colored_name(),
        '도 새로운 한 해의 리듬을 더 빨리 잡을 수 있을지 모른다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 선택한 목표에 대비하기 위해서라도 더 높은 등급의 레이스에 도전할 때다.',
      ]);

      era.printButton(
        `「우라라, 다음에는 더 높은 등급의 레이스에 도전해 볼래? 참고로 페브러리 스테이크스를 추천해.」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '페브러리…… 아! 교과서에서 배웠어! G1 레이스지?',
      );
      await urara.say_and_wait(
        '하지만 우라라는 이번에 졌잖아. 그래도 괜찮을까……',
      );

      era.printButton(
        '「괜찮아. 출전 자격은 있어. 컨디션을 가다듬으면 문제없어.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '그렇게 말하며, ',
        you.get_colored_name(),
        '은(는) 풀이 죽은 작은 ',
        urara.uma_sex_title,
        '을(를) 계속 달래면서 ',
        urara.sex,
        '이(가) 조금이나마 평소의 미소를 되찾을 때까지 곁에 있어 주었다.',
      ]);
      if (best_g1 === 1) {
        await era.printAndWait([
          '물론 ',
          you.get_colored_name(),
          '의 말은 단순한 위로가 아니다. 지금 ',
          urara.get_colored_name(),
          '에게는 G1에 도전해 이길 만한 실력이 있다.',
        ]);
        await era.printAndWait([
          '처음과는 이제 완전히 다르다. 한 번 졌다는 이유만으로 ',
          urara.sex,
          "을(를) '실패'로 설명할 수는 없다.",
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '은(는) 어떤 면에서는 정말 천재일지도 모른다.',
        ]);
      } else {
        await era.printAndWait([
          '마지막 레이스를 준비하기 위해서만은 아니다. 더 중요한 건 ',
          urara.get_colored_name(),
          '이(가) 언젠가 반드시 G1이라는 벽을 넘어야 한다는 것이다.',
        ]);
        await era.printAndWait([
          '시니어급에 들어서면 ',
          urara.get_colored_name(),
          '에게 남은 시간도 그리 넉넉하지 않다. 그래도 이건 ',
          urara.sex,
          '이(가) 한 번은 통과해야 할 시험이다.',
        ]);
        await era.printAndWait([
          '적어도…… 달릴 수 있는 시간 동안 ',
          urara.sex,
          '에게 후회를 남기고 싶지는 않다.',
        ]);
      }
      if (arim_kin_rank_c) {
        if (arim_kin_rank_c === 1) {
          await era.printAndWait([
            '그나저나 평소 ',
            urara.get_colored_name(),
            '에게 기복이 있는 건 사실이지만, ',
            urara.sex,
            '은(는) 이번에 대체 어떻게 진 걸까.',
          ]);
          await era.printAndWait([
            '그렇게 생각하자 ',
            you.get_colored_name(),
            '은(는) 다시 이마를 짚었다. 시간이 주니어급의 첫 훈련, 그 정신없던 오후로 돌아간 듯했다.',
          ]);
          await era.printAndWait(
            '아무튼 다음에는 이런 사고가 일어나지 않겠지, 그렇지?',
          );
        } else {
          await era.printAndWait([
            '「',
            arim_kin,
            "의 준비'에 대해서는 ",
            urara.get_colored_name(),
            '이(가) 강조하지 않아도 트레이너인 ',
            you.get_colored_name(),
            '은(는) 반드시 기억할 것이다.',
          ]);
          await era.printAndWait([
            '다만 지금의 작은 ',
            urara.uma_sex_title,
            '은(는) 즐겁게 달리는 것 이상으로, 올해는 이기고 싶은 마음이 강할 것이다.',
          ]);
          await era.printAndWait([
            '하지만 아리마에서 이기는 건 역시…… 일단 ',
            urara.get_colored_name(),
            '의 컨디션을 가다듬는 걸 최우선으로 하자.',
          ]);
        }
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '이렇게 트레이너 ',
        you.adult_sex_title,
        '(당신)와 ',
        urara.get_colored_name(),
        '은(는) 다음 출전 목표를 정했습니다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '다만 ',
        urara.sex,
        '이(가) 어디까지 도전할 수 있을지는…… 당신이 조금 더 ',
        urara.sex,
        '을(를) 독려해 주시는 수밖에 없겠네요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '다음에 만날 때는 이렇게 되지는 않겠죠……',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '마음을 담은 기습! II!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      const ret = [];
      await inner_urara.say_as_unknown_and_wait('……');
      era.drawLine();
      await era.printAndWait(
        '이른 아침. 일어나 세수하고 옷을 갈아입은 뒤 아침밥을 허겁지겁 먹고, 현관 앞에서 달력도 무심코 확인한다.',
      );
      await era.printAndWait([
        '날짜를 확인한 순간, ',
        you.get_colored_name(),
        '은(는) 진지해졌다. 오늘은 밸런타인데이. 언제든 긴장을 늦춰서는 안 되는 특별한 날이다.',
      ]);
      await era.printAndWait([
        '계획은 늘 변화를 따라잡지 못한다. 지금도 그렇다. 현관 앞에서 한숨을 쉬고, ',
        you.get_colored_name(),
        '은(는) 곧 노크 소리가 들릴 것 같은 문을 열었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        "의 예상대로 문 너머에서 고개를 내민 건 '지난번'과 같은 분홍색 귀 커버와 작은 생물의 귀여운 웃는 얼굴이었다.",
      ]);

      era.printButton('「이번에도 이렇게 일찍 왔네. 무리하지 않아도 돼.」', 1);
      await era.input();

      if (high_relation) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait(
            '무리 안 했어! 우라라, 오늘을 위해 잔뜩 준비했는걸. 다들 줄 초콜릿도 어제 벌써 전해 줬고!',
          );
          await urara.say_and_wait([
            callname,
            '그러니까 이번에는 더 제대로 하고 싶었어! 모처럼 밸런타인데이잖아!',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '에게 장난스럽게 웃으며, 작은 ',
            urara.uma_sex_title,
            '은(는) 손에 든 봉지를 흔들면서 ',
            you.get_colored_name(),
            '에게 다가가 기댔다. 묘한 분위기는 더욱 짙어졌다.',
          ]);
        } else {
          await urara.say_and_wait([
            '우라라, 무리 안 했어! 다들 줄 초콜릿은 어제 다 나눠 줬으니까 오늘은 ',
            callname,
            '뿐이야!',
          ]);
          await urara.say_and_wait([
            '다들 축제 분위기고, 오늘은 ',
            callname,
            '랑 우라라도 조금 더 놀아도 되겠지?',
          ]);
          await era.printAndWait([
            '천진하고 귀여운 미소를 지으며, 작은 ',
            urara.uma_sex_title,
            '은(는) ',
            you.get_colored_name(),
            '의 현관 앞에서 폴짝폴짝 뛰며 과자 봉지를 들어 보였다.',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '무리한 정도는 아닌걸? 우라라, 어제 다들한테 초콜릿을 나눠 줬는데, ',
          callname,
          '건…… 특별하거든!',
        ]);
        await urara.say_and_wait([
          '그리고 우라라도 ',
          callname,
          '와(과) 밸런타인데이를 보내고 싶어서…… 이거, ',
          callname,
          '거야!',
        ]);
        await era.printAndWait([
          '품에 든 종이봉투를 살짝 들어 보이며, 작은 ',
          urara.uma_sex_title,
          '은(는) 조금은 ',
          urara.teen_sex_title,
          '다운 묘한 분위기를 띠고 천천히 ',
          you.get_colored_name(),
          '에게 몸을 기댔다.',
        ]);
      } else {
        await urara.say_and_wait([
          '무리라고 할 정도는 아니야. 어제 초콜릿을 나눠 주다가 ',
          callname,
          '을(를) 깜빡했거든……',
        ]);
        await urara.say_and_wait([
          '그래서 오늘 ',
          callname,
          '초콜릿을 가져왔어. 그런데…… 밖이 조금 추워, ',
          callname,
          '……？',
        ]);
        await era.printAndWait([
          '작은 손에 입김을 불며, 작은 ',
          urara.uma_sex_title,
          '은(는) 품에서 초콜릿이 든 봉지를 꺼냈다.',
        ]);

        if (
          era.getAddedCharacters().filter((e) => era.get(`love:${e}`) >= 75)
            .length > 2
        ) {
          await urara.say_and_wait([
            '그리고 우라라, 알아챘어. 오늘은 인기 많은 ',
            callname,
            '한테 사람이 잔뜩 올 테니까, 우라라도 먼저 차지해 둬야지!',
          ]);
          await era.printAndWait([
            '응…… 어? 뭐? 갑자기 ',
            urara.get_colored_name(),
            '의 말에 뒤통수를 맞은 듯해서, ',
            you.get_colored_name(),
            '은(는) 너무 난처한 나머지 무슨 말을 해야 할지 알 수 없었다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '의 곤란한 얼굴을 알아차렸는지, ',
            urara.get_colored_name(),
            '은(는) 짓궂은 미소를 띤 채 적당한 순간에 화제를 끝냈다.',
          ]);
          await urara.say_and_wait([
            '에헤헤~ 아무것도 아니야. 우라라, 아무 말도 안 했어~',
            callname,
            ', 잘못 들은 거야~',
          ]);
          await era.printAndWait([
            '……정말 화제를 끝낼 생각이 맞는 걸까. 게다가 ',
            urara.sex,
            '은(는) 어른을 놀리는 방법을 대체 어디서 배운 거지……',
          ]);
        }
      }
      await era.printAndWait([
        you.get_colored_name(),
        '의 방에 경쾌하게 들어와 둘이 식탁에 앉자, ',
        urara.get_colored_name(),
        '은(는) 웃으며 종이봉투 속 내용물을 접시 위에 와르르 쏟았다.',
      ]);
      await era.printAndWait([
        '창의력이 지나쳤던 작년의 갖가지 맛 초콜릿에 비하면, 올해 작은 ',
        urara.uma_sex_title,
        '의 선물은 그리 어린애 같지는 않았다.',
      ]);
      await era.printAndWait([
        '하지만 눈앞에 산처럼 쌓인 하트 모양 초콜릿 쿠키를 보고 있자니, ',
        you.get_colored_name(),
        '의 기억은 만난 뒤 처음 함께했던 연말로 천천히 돌아간다……',
      ]);
      await urara.say_and_wait([
        callname,
        '이(가) 좋아하는 건 역시 우라라의 쿠키지? 그래서 또 만들었어!',
      ]);
      await urara.say_and_wait([
        callname,
        ', 지금 바로 한 입 먹어 봐! 이번에는 혀까지 녹아 버릴 만큼 맛있다고 보장할게!',
      ]);
      await era.printAndWait([
        '혀까지 녹는다니 무시무시한 말이다. 쿠키를 칭찬하는 말은 아니지 않은가. 아니면 ',
        urara.get_colored_name(),
        '이(가) 또 뭔가 넣은 걸까.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 기대 어린 재촉을 받으며, ',
        you.get_colored_name(),
        '은(는) 생각에 잠긴 채 아직 조금 따뜻한 쿠키로 손을 뻗었다.',
      ]);
      await era.printAndWait(
        '확실히…… 아주 맛있다. 모양은 여전히 흐트러지기 쉽지만, 맛은 첫 연말 때보다 섬세하고 달콤하다……',
      );
      await era.printAndWait([
        you.get_colored_name(),
        "의 얼굴에서 '혀가 녹을 듯한' 충격을 읽고, ",
        urara.get_colored_name(),
        '도 살며시 ',
        you.get_colored_name(),
        '옆에 앉았다.',
      ]);
      await urara.say_and_wait(
        '実はね、おいしい秘密があるんだ。本当は内緒なんだけど、ウララ、特別に教えてあげる！',
      );
      await urara.say_and_wait([
        callname,
        '、知りたいなら、耳をこっちに近づけて……？',
      ]);
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          you.get_colored_name(),
          ' が耳を傾けようとした次の瞬間、',
          urara.get_colored_name(),
          ' の顔色が変わった。いきなり ',
          you.get_colored_name(),
          ' の腰に跨がり、小さな',
          urara.uma_sex_title,
          'は ',
          you.get_colored_name(),
          ' を下に押し倒した。',
        ]);
        await era.printAndWait([
          '小さく柔らかい体で ',
          you.get_colored_name(),
          ' に覆いかぶさり、',
          urara.teen_sex_title,
          'の赤い頬と桜色の瞳には、恋人の情欲が咲いていた。',
        ]);
        await urara.say_and_wait([
          callname,
          ' への祝福も、',
          callname,
          ' への愛も、ウララ、いっぱい入れたよ……',
        ]);
        await urara.say_and_wait([
          'せっかく作ったんだから、',
          callname,
          '、ウララと一緒に食べてね？',
        ]);
        if (era.get('talent:52:乳房尺寸') > 0) {
          await urara.say_and_wait([
            'それに、',
            callname,
            ' への『愛』以外にも、みんなの噂どおり、ほかのものも入れたんだ……',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            ' に跨がったまま上着をそっと開き、小さな',
            urara.uma_sex_title,
            'は、発情で震え、ねばついて濡れた胸帯を外した。',
          ]);
          await era.printAndWait(
            '揺れて目に入ったのは、尖った先端から乳白色をこぼし続ける、柔らかい胸だった。',
          );
          await era.printAndWait([
            '小さな体に似合わない二つの胸を腕で支え、',
            urara.get_colored_name(),
            ' の赤くなった小さな顔には、大人の色気が加わっていた。',
          ]);
          await urara.say_and_wait([
            '唾液だけじゃないよ。ウララがクッキーに使ったミルクも、自分のだよ？ だから……',
            callname,
            '、たくさん食べてね？',
          ]);
        }
        await era.printAndWait([
          'クッキーを唇に挟み、小さな',
          urara.uma_sex_title,
          'は身をかがめ、柔らかく繊細な唇と舌、甘い涎を溶かしながら ',
          you.get_colored_name(),
          ' の口へ送った。',
        ]);
        await era.printAndWait([
          '相手を押しのけようと落ち着かないところから、吸い合ううちに思考まで溶けて十指を組むまで、',
          you.get_colored_name(),
          ' に絡む',
          urara.teen_sex_title,
          'は体の力を抜いていった……',
        ]);
        await era.printAndWait([
          '攻守が入れ替わり、目がうつろな小さな',
          urara.uma_sex_title,
          'は、',
          callname,
          ' の強い抱擁と甘い深い口づけの中で、柔らかな声を漏らした。',
        ]);
        await era.printAndWait([
          'バレンタインの罠に完全に落ちた ',
          you.get_colored_name(),
          ' の前で、小さな',
          urara.uma_sex_title,
          'は体の使い方を、安心して恋人に預けた……',
        ]);

        await era.printAndWait('今なら、何をしても許される……');
        era.printButton('ここでウララを……（恋慕+5）', 1);
        era.printButton('지금은 아무것도 하지 말자……(호감+20)', 2);
        ret.push(await era.input());
        if (ret[0] === 2) {
          await era.printAndWait([
            '首を振り、',
            you.get_colored_name(),
            ' は服の乱れた ',
            urara.get_colored_name(),
            ' を離した。だが ',
            you.get_colored_name(),
            ' の予想に反して、今の小さな',
            urara.uma_sex_title,
            'は不満を見せなかった。',
          ]);
          await era.printAndWait([
            '半脱げの服を静かに直し、小さな',
            urara.uma_sex_title,
            'は紅潮した小さな顔のまま、悪戯に失敗したときのいたずらな笑顔を見せた。',
          ]);
          await urara.say_and_wait([
            callname,
            ' の判断は正しいよ。朝からこんなの、ちょっとやりすぎだもん。でもせっかくのバレンタインだし、一緒に全部食べよ……？',
          ]);
          await urara.say_and_wait(
            'ほら、まだたくさんあるよ？ お口、開けて。このあとはきっと楽しいよ！',
          );
          await era.printAndWait([
            '案の定、まだ諦めていない ',
            urara.get_colored_name(),
            ' は、「調味料」を入れすぎた次のクッキーを手に取り、甘い笑顔でお菓子を口に含んだ。',
          ]);
          await era.printAndWait(
            'このバレンタインは、苦労して過ごす運命らしい……',
          );
        }
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '의 귓가에 살짝 입김을 불자, ',
          urara.teen_sex_title,
          '의 향기와 기념일의 축복이 함께 ',
          you.get_colored_name(),
          '의 귀에 닿았다.',
        ]);
        await urara.say_and_wait([
          '사실은…… 우라라가 마음을 잔뜩 담았어.',
          callname,
          '이(가) 매일 즐겁게 지냈으면 해서!',
        ]);
        await urara.say_and_wait(
          '그리고 다들 말하는, 마법의 주문을 완성하는 마지막 단계…… 쪽~',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '옆에서 귓속말할 만큼 가까이 머문 채, ',
          urara.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '의 뺨에 천사의 축복 같은 작은 입맞춤을 남겼다.',
        ]);
        await era.printAndWait([
          '아직 연인조차 아닌데, 작은 ',
          urara.uma_sex_title,
          '은(는) 이렇게 소중한 선물을 골랐다. 다들 ',
          urara.sex,
          '에게 대체 뭘 가르친 거지……',
        ]);
        await era.printAndWait([
          '곁눈질로 ',
          urara.teen_sex_title,
          '의 여전히 봄 같은 미소를 보자, ',
          you.get_colored_name(),
          '의 심장도 제멋대로 박자를 타기 시작한다.',
        ]);

        await urara.say_and_wait([
          '에헤헤~',
          callname,
          ', 어땠어? 우라라의 주문, 성공했어?',
        ]);
        era.printButton('「기뻐서 오늘 하루는 세수도 못 하겠네!」(연모+5)', 1);
        era.printButton('「응! 우라라의 마법, 대성공이야!」(호감+20)', 2);
        ret.push(await era.input());
        await urara.say_and_wait([
          '그렇지? ',
          callname,
          '을(를) 두근거리게 하고 기쁘게 만드는 마법, 역시 효과가 있네! 다들 예전부터 써 온 방법답다!',
        ]);
        await era.printAndWait([
          "이 '마법의 주문'은 역시 우정에 쓰는 건 아니겠지. 신이 난 작은 ",
          urara.uma_sex_title,
          '을(를) 보며, 뭔가를 눈치챈 ',
          you.get_colored_name(),
          '은(는) 시선을 돌렸다.',
        ]);
        await urara.say_and_wait([
          '그러니까 앞으로도 계속 ',
          callname,
          '을(를) 더 기쁘게 해 주려고, 우라라의 쿠키는 아직 잔뜩 있어!',
        ]);
        await urara.say_and_wait([
          callname,
          '! 우라라랑 함께, 앞으로의 행복한 기분을 먹어 버리자!',
        ]);
        await era.printAndWait([
          '축복을 담은 다음 밸런타인 선물을 웃으며 집어 든 ',
          urara.get_colored_name(),
          '은(는) 심장을 뛰게 하는 미소와 함께 그것을 ',
          you.get_colored_name(),
          '의 입에 넣어 주었다.',
        ]);
        await era.printAndWait([
          "어느새 묘해진 '우정'의 분위기 속에서, ",
          you.get_colored_name(),
          '와(과) ',
          urara.get_colored_name(),
          '은(는) 초콜릿 쿠키를 나누며 밸런타인데이 아침을 보냈다.',
        ]);
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait('저, 저는 괜찮아요……? ……');
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_febr_sta: (() => {
    const title = '페브러리 스테이크스를 향해!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await inner_urara.say_as_unknown_and_wait(
        '가끔은 저조차 운이나 운명 같은 것에도 정말 이치가 있는 게 아닐까 생각하게 돼요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '당신은 어떻게 생각하시나요? 하지만 ',
        urara.uma_sex_title,
        '들을 운명 너머로 이끄는 것도 트레이너 ',
        you.adult_sex_title,
        '(당신)의 사명이겠죠.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그렇다면 운명을 넘어서지 못하는 ',
        urara.uma_sex_title,
        '들은 ',
        urara.sex,
        '의 바람대로 함께 행복을 찾을 수 있을까요.',
      ]);
      era.drawLine();
      await era.printAndWait([
        urara.get_colored_name(),
        '와(과) 몇 번째인지도 모를 새로운 선수 통로에 나란히 서서, ',
        you.get_colored_name(),
        '은(는) ',
        urara.sex,
        '와(과) 습관처럼 레이스 전의 대화를 나누고 있었다.',
      ]);
      await era.printAndWait([
        '다만 이번에는 주변 분위기에 물든 걸까. 크게 긴장하지는 않았는데도 작은 ',
        urara.uma_sex_title,
        '에게 평소의 미소가 없었다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 밖에는 역시 사람이 많네. 여기 사람들 얼굴도 지난번보다 진지해.',
      ]);

      era.printButton('「그래도 우라라는 지난번처럼 별로 긴장 안 했지?」', 1);
      await era.input();

      await urara.say_and_wait('응. 우라라가 걱정하는 건 저쪽이야.');
      await era.printAndWait([
        '담당의 시선을 따라가자, ',
        you.get_colored_name(),
        '은(는) 훈련장에서 몇 번 마주친 적 있는 ',
        urara.uma_sex_title,
        '을(를) 발견했다.',
      ]);
      await era.printAndWait([
        '주변 분위기와 동떨어진 듯, ',
        urara.sex,
        '은(는) 통로 끝에서 혼자 준비 운동을 하고 있었다. 표정은 무서울 만큼 굳어 있었다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '은(는) ',
        urara.get_colored_name(),
        '의 친구일 것이다. 그런데 왜 혼자 여기 있지? 혼자 출전하러 온 건가.',
        urara.sex,
        '의 트레이너는 어디 있지.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 얼굴에서 의문을 읽은 ',
        urara.get_colored_name(),
        '은(는) 곧바로 ',
        you.get_colored_name(),
        '에게 사정을 설명하기 시작했다.',
      ]);
      await urara.say_and_wait([
        urara.sex,
        '은(는) 우라라 친구야. 자주 병주하다가 알게 됐어. 거리가 정말 잘 맞는 것 같아서.',
      ]);
      await urara.say_and_wait([
        '그런데 우라라랑 달리, ',
        urara.sex,
        '은(는) 전부터 엄청 강해서 트레이너 없이도 쭉 여기까지 달려왔어.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '와(과) 적성이 비슷하다면 함께 훈련하는 것도 자연스럽다. 다만 코스에서 만나는 건 이번이 처음일 것이다.',
      ]);
      await era.printAndWait([
        '그나저나 트레이너가 없다니. 데뷔 때부터 혼자 연습하고 혼자 출전해 왔단 말인가.',
      ]);
      await urara.say_and_wait([
        urara.sex,
        '은(는) 정말 지기 싫어하는 ',
        urara.uma_sex_title,
        '이고, 계속 G1이 목표였으니까 이번 레이스를 ',
        urara.sex,
        '은(는) 엄청 중요하게 생각할 거야.',
      ]);
      await urara.say_and_wait([
        '하지만 레이스 준비 때문에 ',
        urara.sex,
        '은(는) 벌써 오랫동안 즐거워 보이지 않았어. 이 레이스에서 ',
        urara.sex,
        '이(가) 이기면 조금 편해질까……',
      ]);
      await era.printAndWait(
        '그렇구나. 하지만 지금 바로 해결할 수 있는 문제는 아니다. 나중에 천천히 이야기할 기회를 만들 수는 있겠지만, 지금은……',
      );

      era.printButton(
        '「하지만 지금 우라라는 친구한테 1착을 양보하지 않을 거지?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '물론이지!',
        callname,
        '이(가) 무슨 말 하는지 알아. 우라라는 이미 결심했어. 열심히 해서 이길 거야!',
      ]);
      await urara.say_and_wait([
        '그냥 지금 ',
        urara.sex,
        '의 모습은 우라라도 역시 걱정돼……',
      ]);

      era.printButton(
        '「알았어. 일단 레이스에 전력을 다하자. 나머지는 나중에 생각하자.」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '그렇지. 걱정만 해서는 아무것도 해결되지 않아. 그럼 ',
        callname,
        ', 먼저 갈게!',
      ]);

      era.printButton('「응! 오늘도 힘내!」', 1);
      await era.input();

      await era.printAndWait([
        '입장 신호와 동시에 ',
        you.get_colored_name(),
        '에게 작게 손을 흔들고, 미소를 되찾은 ',
        urara.get_colored_name(),
        '이(가) 먼저 코스로 뛰어들었다.',
      ]);
      await era.printAndWait([
        '하지만 곧이어 ',
        urara.get_colored_name(),
        '의 친구가 뒤에서 ',
        you.get_colored_name(),
        '곁을 스쳐 지나갈 때, 공간은 색을 잃으면서 누군가 느리게 재생하는 듯 변했다.',
      ]);
      await era.printAndWait([
        '모습은 보이지 않는다. 하지만 악마의 등장에는 속삭임이 따르듯, 그 익숙한 말투가 다시 ',
        you.get_colored_name(),
        '의 귓가를 감쌌다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '걱정하실 필요 없어요. 우라라의 직감대로, 설령 우라라가 지더라도 ',
        urara.sex,
        '에게는 다음이 없을지도 모르니까요.',
      ]);
      await era.printAndWait([
        "오늘 ' ",
        inner_urara.sex,
        "'의 말은 조금 거슬린다. 배려 없는 발언에 온화한 대답이 돌아갈 리 없었다.",
      ]);

      era.printButton(
        '「그게 무슨 뜻이야. 모처럼 출전하는 건데, 누구한테든 좀 더 좋은 말을 해 줄 수는 없어?」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '오해하지 마세요. 말 그대로예요. 당신은 트레이너잖아요. 이 학생의 다리를 봐 주시겠어요?',
      );
      await era.printAndWait([
        '느려진 시간 속에서 ',
        you.get_colored_name(),
        '은(는) 희망에 다가가는 ',
        urara.teen_sex_title,
        '을(를) 받치는 다리를 보았다. 그리고 꿈이 부서지는 모습을 미리 본 듯 미간을 찌푸렸다.',
      ]);
      await era.printAndWait([
        '어떻게 말해야 할까…… 너무 심하게 표현하지 않자면, ',
        urara.sex,
        '이(가) 경주 ',
        urara.uma_sex_title,
        "로서 '유통기한'에 가까워지고 있다고 해야 할 것이다.",
      ]);
      await era.printAndWait([
        '확실히 트레이너가 없어도 ',
        urara.sex,
        '은(는) 여러 방면에서 잘해 낸다. 하지만 혼자 데뷔할 용기가 있어도, ',
        urara.sex,
        '은(는) 세 여신의 사랑을 받지는 못했다.',
      ]);
      await era.printAndWait(
        "또다시 피할 수 없는 이야기다. '평범함의 한계', '자질의 끝', 그리고 '바라는 대로 되지 않는 대다수'.",
      );
      await era.printAndWait([
        '하지만 지금 그걸 논할 때는 아니다.',
        you.get_colored_name(),
        '도 이제 ',
        urara.sex,
        '의 페이스에 휘말리지 않을 생각이었다.',
      ]);
      await era.printAndWait(
        '게다가 아무리 몰아붙여도, 세 여신만이 풀 수 있는 문제에 일개 트레이너가 답할 수는 없다.',
      );

      era.printButton(
        `「애초에 ${urara.sex}의 상태를 다른 사람이 주관적으로 단정할 일은 아니야. 게다가 ${urara.sex}도 겉보기와 다를 수 있고……」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '그러자 ',
        you.get_colored_name(),
        '이(가) 주도권을 잡으려 꺼낸 변명은, ',
        inner_urara.get_colored_name(),
        '의 맑은 웃음소리를 빌린 순전한 비웃음에 끊겼다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '당신의 생각은 싫지 않아요. 하지만 제가 가리키는 상대가 ',
        urara.sex,
        '와(과) 같은 무대에서 달릴 작은 노력가라는 건 아시죠?',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '이기기로 선택한 작은 우라라는, 결승선 앞에서 모든 걸 잃을지도 모르는 친구를 볼 각오가 되어 있나요?',
      );
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        "은(는) 곧 추락할 친구에게, 그 '완벽한 회장'조차 모두에게 주지 못한 미소를 전할 수 있을까요?",
      ]);
      await era.printAndWait(
        '몸속에서 무언가 타올랐다. 좋다, 그렇게 묻겠다는 거지. 어디서 나타난 꼬마 악마야——',
      );

      era.printButton(
        '「수수께끼에는 대답 안 해. 지금 우라라는 레이스 중이야. 떠들 만큼 떠들었으면 어서 나가.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '화가 나면서도 최소한의 예의는 지킨 채, ',
        you.get_colored_name(),
        '은(는) 그 ',
        { color: inner_urara.color, content: "'닿을 수 없는 우라라'" },
        '에게 나가라고 했다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '아, 그렇겠네요. 우라라는 아직 ',
        urara.sex,
        '의 친구가 어떻게 될지조차 모르니까요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        '이(가) 후회하는 얼굴을 보기 전에는 ',
        urara.sex,
        '의 트레이너 ',
        you.adult_sex_title,
        '도 답할 수 없겠죠. 화내시는 것도 무리는 아니에요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '그럼 또 봐요. 우라라를 잘 보살펴 주세요.',
      );

      era.printButton(
        '「몇 번이나 말했잖아, 보살핀다고! 그러니까 다음에 만날 땐 제대로 이야기해!」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '흐름을 되찾기 시작하는 공기 속에서, ',
        you.get_colored_name(),
        '은(는) 화가 나 돌아서며 뒤에서 희미해져 가는 목소리를 향해 주먹을 휘둘렀다.',
      ]);
      await era.printAndWait([
        '물론 ',
        you.get_colored_name(),
        '이(가) 있는 선수 통로에는 이제 아무도 없다. 아무 일도 일어나지 않는다……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  febr_sta_win: (() => {
    const title = '분해?';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} join_arim_kin_c ウララがクラシック級有馬記念に出走したか
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} elm_sta エルムステークス（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
      elm_sta,
    ) => {
      await era.printAndWait([
        '레이스가 끝나고, ',
        you.get_colored_name(),
        '와(과) ',
        urara.get_colored_name(),
        '은(는) 선수 대기실로 향하는 통로를 함께 걷고 있었다.',
      ]);
      await era.printAndWait([
        '아직 레이스의 열기에서 빠져나오지 못했는지, 방금 현장에서 지켜봤는데도 ',
        urara.get_colored_name(),
        '은(는) 자신이 어떻게 달렸는지 ',
        you.get_colored_name(),
        '에게 계속 이야기하고 있었다.',
      ]);
      await urara.say_and_wait(
        '에헤헤~ 다들 우라라를 위해 엄청 기뻐해 줬어! 1착 해서 정말 다행이야!',
      );
      await urara.say_and_wait([
        '우라라가 계속 달리면 다들 웃고 있어 주겠지?',
        callname,
        ', 다음에는 어떤 레이스에 나가?',
      ]);
      era.printButton(
        '「그러고 보니…… 우라라는 다음에 달리고 싶은 레이스가 있어?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '응? 이길 수 있으면 좋겠지만, 달릴 수만 있으면 뭐든 좋아——',
      );
      await era.printAndWait([
        '예상대로의 대답이다.',
        you.get_colored_name(),
        '은(는) 이제 ',
        urara.get_colored_name(),
        '스스로 레이스를 고르게 해도 좋겠다고 생각했지만, ',
        urara.sex,
        '의 성격으로는 결국 뚜렷하게 고르기 어려울 것이다.',
      ]);
      await era.printAndWait([
        "게다가 최종 목표를 ' ",
        arim_kin,
        "'으로 삼는다면, ",
        urara.get_colored_name(),
        '이(가) 선택할 수 있는 일정도 상당히 제한된다.',
      ]);

      era.printButton(`「그렇다면…… 다음은 '엘름 스테이크스'가 어때?」`, 1);
      await era.input();

      await era.printAndWait(
        '최선의 선택은 아닐지도 모르지만, 득실을 따져 본 결과 우선은 이 레이스를 잠정적으로 정해 둘 수밖에 없었다.',
      );
      await urara.say_and_wait([
        '응, 알았어! 상점가랑 응원회 사람들한테 다음은 ',
        elm_sta,
        '이라고 말하고 올게——',
      ]);

      era.printButton(
        `「참고로 정말 뛰게 되면 다들 응원하러 오기 힘들 거야. '엘름 스테이크스'는 홋카이도에서 하거든.」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '어? 그래!? 너무 멀잖아! 그래도 괜찮을지도 몰라. 다들 어디서든 우라라를 볼 수 있지!',
      );
      await urara.say_and_wait(
        '다들 우라라를 생각해 주면 전혀 문제없어. 그러니까 그날은 어떻게든 이기기만 하면 돼!',
      );

      era.printButton(
        '「그 전에 이따 라이브가 있어. 다들 우라라의 멋진 모습을 기다리고 있다고.」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '알았어! 그럼 우라라는 라이브 준비하러 갈게!',
        callname,
        '은(는) 볼일 있으면 먼저 가 있어!',
      ]);

      era.printButton(
        '「그래! 그럼 먼저 무대 뒤로 갈게. 무슨 일 있으면 바로 연락해!」',
        1,
      );
      await era.input();

      await urara.say_and_wait('네에——');
      era.drawLine();
      await urara.print_and_wait([
        callname,
        '와(과) 헤어져서, ',
        you.sex,
        '이(가) 시야에서 사라질 때까지 배웅한 뒤 대기실에 들어갔다.',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          callname,
          '이(가) 세 걸음마다 돌아보는 모습, 왠지 귀여워.',
          callname,
          '이(가) 아이고 우라라가 엄마 같아.',
        ]);
        await urara.print_and_wait([
          '매일 저렇게 ',
          callname,
          '이(가) 지켜봐 주면 좋겠다. 하지만 그건 응석일까?',
        ]);
      } else {
        await urara.print_and_wait([
          callname,
          ', 평소처럼 금방 가 버렸네. 한 번만 더 돌아서 우라라를 봐 주면 좋겠는데……',
        ]);
        await urara.print_and_wait([
          '그런데 우라라는 왜 그게 신경 쓰이지?',
          callname,
          '도 계속 우라라를 보고 있을 시간은 없잖아?',
        ]);
      }
      await urara.print_and_wait([
        '역시 어렵네…… 응? 저쪽 구석에 누가 웅크리고 있어. 안색도 나쁘고…… 아!',
        urara.sex,
        '이야……',
      ]);
      await urara.print_and_wait([
        'G1에서 이기지 못해서 풀이 죽은 걸까. 지기 싫어하는 ',
        urara.sex,
        '이(가) 이렇게 약해진 모습은 우라라도 처음 봐……',
      ]);
      await urara.print_and_wait([
        '그래도 이러면 그냥 둘 수 없어. 우라라는 ',
        callname,
        '처럼 잘할 수는 없지만…… 일단 말이라도 걸어 보자!',
      ]);
      await urara.say_and_wait('저기, 괜찮아? 어디 몸이 안 좋아?');
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「……아, 우라라…… 응, 걱정 마. 괜찮아……」',
      ]);
      await urara.say_and_wait(
        '그런데 얼굴이 괴로워 보여! 이따가 라이브잖아. 정말 괜찮아?',
      );
      await urara.say_and_wait(
        '무리하지 마. 우라라가 곁에 있을게. 다시 웃을 수 있을 때까지——',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「지금은 건드리지 마!」',
      ]);
      await urara.say_and_wait('……어? 아파……!');
      await urara.print_and_wait([
        '내민 손을 ',
        urara.uma_sex_title,
        '이(가) 힘껏 뿌리쳤다. 튕겨 나간 손등에 화끈거리는 열기가 퍼진다.',
      ]);
      await urara.print_and_wait([
        '고개를 드니 언제나 싱글벙글하던 ',
        urara.uma_sex_title,
        '이(가), 지금은 당혹스럽고 슬픈 얼굴로 우라라를 보고 있었다.',
      ]);
      await urara.print_and_wait([
        '이런 얼굴을 어떻게 대하면 좋을까. 하지만 지금 여기서 떠나면 ',
        urara.sex,
        '이(가) 더 상처받을 뿐이야.',
      ]);
      await urara.print_and_wait([
        '역시 떠나면 안 돼. 입술을 깨물고, 빨갛게 부어 아픈 오른손을 숨긴 채 ',
        urara.sex,
        '옆에 쪼그려 앉아 ',
        urara.sex,
        '의 다음 말을 기다렸다.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「웃을 수 있을 리 없잖아……!」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「겨우 G1에 나왔는데, 나도 무대 한가운데 서고 싶었어! 어렵게 얻은 기회인데, 이렇게 약하다니……」',
      ]);
      await urara.print_and_wait(
        '누군가 슬퍼할 때는 먼저 속마음을 끝까지 들어 줘야 해. 엄마도 늘 그렇게 가르쳐 주셨어.',
      );
      await urara.print_and_wait([
        '지금이라면 ',
        urara.sex,
        '도 조금 편해질까. 하지만 이 옆얼굴, 어디서 본 것 같아. 이게 어떤 얼굴이었지?',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「미안해…… 우라라, 일부러 그런 건 아니야…… 하지만 정말 웃을 수가 없어……」',
      ]);
      await urara.say_and_wait(
        '아니야, 우라라 하나도 안 아파! 너는 정말 괜찮아?',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「……우라라가 뭐가 안 아파. 얼굴이 울 것 같은데……」',
      ]);
      await urara.say_and_wait('어? 정말…… 아니야! 우라라 정말 괜찮아!');
      await urara.print_and_wait([
        '확실히 아프긴 해…… 그래도 아마 그렇게 아프지는 않아! 그런데 우라라의 얼굴을 보고 ',
        urara.sex,
        '의 떨리던 입꼬리가 조금씩 올라갔다.',
      ]);
      await urara.print_and_wait(
        '우라라가 바라던 대로 됐어. 그런데 울다가도 웃을 정도였나? 우라라의 얼굴이……',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「그런 뜻이 아니야…… 그래도 괜찮아. 무대에 올라가면 제대로 웃을 수 있을 거야.」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「우라라는 항상 내 이야기를 들어 주네. 이번에도 고마워. 그러니까 무대에 올라가기 전에 표정도 가다듬어!」',
      ]);
      await urara.say_and_wait(
        '응! 괜찮아! 몇 번이든 우라라가 이야기 들어 줄게!',
      );
      await urara.print_and_wait([
        '고맙다고 하고 먼저 일어선, 겨우 진정한 ',
        urara.sex,
        '이(가) 우라라의 손도 살며시 잡아 일으켜 주었다.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「맞아. 몇 번이든…… 다음엔 꼭…… 한가운데 설 거야!」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「분명…… 다음이 있어……!」',
      ]);
      await urara.print_and_wait([
        '「이따 봐」라고 말한 뒤, ',
        urara.sex,
        '은(는) 무언가를 숨기듯 몸을 돌려 떠나갔다.',
      ]);
      await urara.print_and_wait([
        '겉으로는 평소 표정으로 돌아왔는데도, ',
        urara.sex,
        '의 뒷모습은 활기가 빠져나간 듯 야위어 보였다.',
      ]);
      await urara.print_and_wait([
        urara.sex,
        "의 다리는 오래 쪼그려 앉아 있던 탓인지 저려 있었고, 비틀거리는 걸음걸이가 더욱 '빈 껍데기'처럼 보이게 했다.",
      ]);
      await urara.print_and_wait([
        '우라라는 ',
        urara.sex,
        '의 그런 모습을 처음 봤어. 아까 너무 슬퍼하던 얼굴도, 지금 풀이 죽은 뒷모습도.',
      ]);
      await urara.print_and_wait([
        '하지만 이제야 알겠어. 지금 ',
        urara.sex,
        '은(는) 인생의 마지막 기회를 놓치고도 괜찮은 척하는 것 같았어……',
      ]);
      await urara.print_and_wait(
        '되돌릴 수 없는 일이 일어난 것 같아. 우라라가 너무 예민한 걸까?',
      );
      await urara.print_and_wait([
        '그래도 ',
        urara.sex,
        '의 말대로 이따가 무대에 올라가야 해. 나머지는 끝난 다음에 생각하자!',
      ]);
      await urara.print_and_wait([
        '뺨을 두드려 다시 기운을 내고, 우라라도 돌아서서 ',
        urara.sex,
        '의 뒷모습을 쫓아 함께 라이브 무대 뒤로 달렸다.',
      ]);
      await urara.print_and_wait([
        '힘찬 발소리와 함께 앞서 걷는 ',
        urara.sex,
        '은(는) 다시 기운이 나 보였다.',
      ]);
      await urara.print_and_wait(
        '우라라가 잘못 본 걸까? 분명 너무 예민했던 것뿐이야…… 응, 분명 그럴 거야……',
      );
      era.drawLine();
      await era.printAndWait([
        '오늘 라이브는 순조로웠다. 무대 뒤에서 상점가와 응원회 사람들이 있는 객석으로 돌아온 ',
        you.get_colored_name(),
        '은(는) 안도했다.',
      ]);
      await era.printAndWait([
        '그렇다. 몇 착이든 어느 위치에 서든, ',
        urara.get_colored_name(),
        '은(는) 최고의 미소를 모두에게 보여 줄 수 있다.',
      ]);
      await era.printAndWait([
        '그래서 모두 ',
        urara.get_colored_name(),
        '을(를) 좋아한다. 지더라도, 이기지 못하더라도 밝게 웃는 ',
        urara.sex,
        '을(를) 좋아하는 것이다.',
      ]);
      await era.printAndWait([
        '매번 잘되지는 않겠지만, 지금 ',
        urara.sex,
        '에게는 레이스에서 이길 실력이 있다.',
      ]);
      await era.printAndWait([
        '상점가 주민 A 「……우라라 ',
        urara.sex,
        ', 정말 열심히 하네. 전에 하던 걱정도 이제 내려놔도 되겠어.」',
      ]);
      await era.printAndWait([
        '상점가 주민 B 「그렇지. ',
        urara.sex,
        '이(가) 즐겁기만 하면 된다고 생각해도, 그 마음에 발목만 잡힐 뿐이잖아.」',
      ]);
      await era.printAndWait([
        '상점가 주민 C 「지금 우라라는 이미 성장했어. 마침 ',
        arim_kin,
        '에서도 ',
        urara.sex,
        '의 웃는 얼굴을 보고 싶고.」',
      ]);
      await era.printAndWait([
        '뒤에서 조용히 귀 기울이니, ',
        urara.get_colored_name(),
        '을(를) 응원하는 사람들도 라이브를 보며 무언가 이야기하고 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 방침이 점점 들어맞는 모양이다. 계속 나아가면 ',
        urara.get_colored_name(),
        '을(를) 지지하는 사람들도 ',
        urara.sex,
        '의 전진을 인정하게 될 것이다.',
      ]);
      await era.printAndWait([
        '골칫거리가 어느새 풀려 간다…… 일단 기억해 뒀다가 돌아가는 길에 슬쩍 ',
        urara.get_colored_name(),
        '에게 알려 주자.',
      ]);
      await era.printAndWait([
        '상점가 주민 A 「그런데 우라라의 최종 목표는 ',
        arim_kin,
        '이라더군. 그 레이스는 선발이 꽤 까다롭잖아.」',
      ]);
      await era.printAndWait(
        '상점가 주민 C 「그래도 우리가 도울 수 있는 일은 없을까? 우라라를 보고만 있자니 가만히 있을 수가 없어.」',
      );
      await era.printAndWait(
        '상점가 주민 D 「사실 생각이 하나 있어. 전에 상점가를 활성화했을 때처럼……」',
      );

      if (join_arim_kin_c) {
        await era.printAndWait(
          '상점가 주민 C 「사람이 많을수록 힘이 된다는 거지? 그런데 우라라는 한 번 뽑혔잖아. 아직도 그게 필요해?」',
        );
        await era.printAndWait(
          '상점가 주민 D 「지나친 걱정일지도 모르지만, 만일의 사태는 피하고 싶잖아. 그 아이 일이니까……」',
        );
      }
      await era.printAndWait(
        '응? 무슨 이야기지? 다들 자신 몰래 뭔가 하고 있는 건가.',
      );
      await era.printAndWait([
        '직감은 ',
        you.get_colored_name(),
        '에게 중요한 이야기라고 알려 왔다. 하지만 더 귀를 기울이려던 순간 고개를 드니, 라이브도 거의 끝나 가고 있었다.',
      ]);
      await era.printAndWait([
        '사람들의 이야기도 궁금하지만, ',
        urara.get_colored_name(),
        '의 상태를 바로 확인하기 위해 ',
        you.get_colored_name(),
        '은(는) 대기실로 서둘렀다.',
      ]);
      await era.printAndWait([
        '무대 위 ',
        urara.get_colored_name(),
        "의 알아차리기 어려운 옅은 미소도, ' ",
        urara.sex,
        "'이 자주 나타나는 것도, 레이스 전에 본 그 풀이 죽은 ",
        urara.child_sex_title,
        '도.',
      ]);
      await era.printAndWait(
        '이제는 사람들의 비밀 이야기까지 불안하게 느껴진다. 왜 이러지. 요즘 왜 이렇게 예민한 걸까.',
      );
      await era.printAndWait(
        '언젠가 무슨 일이 생길 것 같다. 기분 탓이기를 바란다……',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('잠깐 이야기해도 될까요?');
      await inner_urara.say_as_unknown_and_wait([
        '그런데 트레이너 ',
        you.adult_sex_title,
        '(당신)도 알고 계시겠죠.',
        urara.uma_sex_title,
        '이(가) 달리면서 쌓인 손상은 낫기 어려워요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '타고난 신체 구조와 일부 체질 때문이기도 하고, 아직 설명할 수 없는 현상 때문이기도 하죠.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '게다가 직업 선수들은 종종 몸이 견딜 수 있는 부하를 넘어서는 무리를 해요. 그렇게 생긴 손상은 보통 방법으로는 거의 치료할 수 없죠.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '왜 갑자기 이런 이야기를 하냐고요? 별뜻 없어요. 그저 문득 우라라는 예전부터 운이 좋았다는 생각이 들었을 뿐이에요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '앞으로도 ',
        urara.sex,
        '을(를) 잘 보살펴 주세요.',
        urara.sex,
        '마저 길을 잃은 외톨이가 되게 하지 말아 주세요……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  febr_sta_lose: (() => {
    const title = '';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} join_arim_kin_c ウララがクラシック級有馬記念に出走したか
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} elm_sta エルムステークス（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
      elm_sta,
    ) => {
      await era.printAndWait([
        '레이스가 끝나고, 뜻하지 않게 승리를 놓친 탓인지 ',
        urara.get_colored_name(),
        '은(는) 조금 풀이 죽어 있었다.',
      ]);
      await era.printAndWait([
        '하지만 그런 상태는 오래가지 않았다. 모두를 떠올린 작은 ',
        urara.uma_sex_title,
        '은(는) 곧 귀를 다시 세우고 미소를 되찾았다.',
      ]);
      await urara.say_and_wait(
        '이래도 다들 기뻐해 주고 있어! 이따가 무대도 있으니까 지금은 풀이 죽어 있을 때가 아니야!',
      );
      await urara.say_and_wait([
        '아, 맞다!',
        callname,
        ', 다음에는 어떤 레이스에 나가?',
      ]);
      era.printButton(
        '「그러고 보니…… 우라라는 다음에 달리고 싶은 레이스가 있어?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '응? 이길 수 있으면 좋겠지만, 달릴 수만 있으면 뭐든 좋아——',
      );
      await era.printAndWait([
        '예상대로의 대답이다.',
        you.get_colored_name(),
        '은(는) 이제 ',
        urara.get_colored_name(),
        '스스로 레이스를 고르게 해도 좋겠다고 생각했지만, ',
        urara.sex,
        '의 성격으로는 결국 뚜렷하게 고르기 어려울 것이다.',
      ]);
      await era.printAndWait([
        "게다가 최종 목표를 ' ",
        arim_kin,
        "'으로 삼는다면, ",
        urara.get_colored_name(),
        '이(가) 선택할 수 있는 일정도 상당히 제한된다.',
      ]);

      era.printButton(`「그렇다면…… 다음은 '엘름 스테이크스'가 어때?」`, 1);
      await era.input();

      await era.printAndWait(
        '최선의 선택은 아닐지도 모르지만, 득실을 따져 본 결과 우선은 이 레이스를 잠정적으로 정해 둘 수밖에 없었다.',
      );
      await urara.say_and_wait([
        '응, 알았어! 상점가랑 응원회 사람들한테 다음은 ',
        elm_sta,
        '이라고 말하고 올게——',
      ]);

      era.printButton(
        `「참고로 정말 뛰게 되면 다들 응원하러 오기 힘들 거야. '엘름 스테이크스'는 홋카이도에서 하거든.」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '어? 그래!? 너무 멀잖아! 그래도 괜찮을지도 몰라. 다들 어디서든 우라라를 볼 수 있지!',
      );
      await urara.say_and_wait(
        '다들 우라라를 생각해 주면 전혀 문제없어. 그러니까 그날은 어떻게든 이기기만 하면 돼!',
      );

      era.printButton(
        '「그 전에 이따 라이브가 있어. 다들 우라라의 멋진 모습을 기다리고 있다고.」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '알았어! 그럼 우라라는 라이브 준비하러 갈게!',
        callname,
        '은(는) 볼일 있으면 먼저 가 있어!',
      ]);

      era.printButton(
        '「그래! 그럼 먼저 무대 뒤로 갈게. 무슨 일 있으면 바로 연락해!」',
        1,
      );
      await era.input();

      await urara.say_and_wait('네에——');
      era.drawLine();
      await urara.print_and_wait([
        callname,
        '와(과) 헤어져서, ',
        you.sex,
        '이(가) 시야에서 사라질 때까지 배웅한 뒤 대기실에 들어갔다.',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          callname,
          '이(가) 세 걸음마다 돌아보는 모습, 왠지 귀여워.',
          callname,
          '이(가) 아이고 우라라가 엄마 같아.',
        ]);
        await urara.print_and_wait([
          '매일 저렇게 ',
          callname,
          '이(가) 지켜봐 주면 좋겠다. 하지만 그건 응석일까?',
        ]);
      } else {
        await urara.print_and_wait([
          callname,
          ', 평소처럼 금방 가 버렸네. 한 번만 더 돌아서 우라라를 봐 주면 좋겠는데……',
        ]);
        await urara.print_and_wait([
          '그런데 우라라는 왜 그게 신경 쓰이지?',
          callname,
          '도 계속 우라라를 보고 있을 시간은 없잖아?',
        ]);
      }
      await urara.print_and_wait([
        '역시 어렵네…… 응? 저쪽 구석에 누가 웅크리고 있어. 안색도 나쁘고…… 아!',
        urara.sex,
        '이야……',
      ]);
      await urara.print_and_wait([
        'G1에서 이기지 못해서 풀이 죽은 걸까. 지기 싫어하는 ',
        urara.sex,
        '이(가) 이렇게 약해진 모습은 우라라도 처음 봐……',
      ]);
      await urara.print_and_wait([
        '그래도 이러면 그냥 둘 수 없어. 우라라는 ',
        callname,
        '처럼 잘할 수는 없지만…… 일단 말이라도 걸어 보자!',
      ]);
      await urara.say_and_wait('저기, 괜찮아? 어디 몸이 안 좋아?');
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「……아, 우라라…… 응, 걱정 마. 괜찮아……」',
      ]);
      await urara.say_and_wait(
        '그런데 얼굴이 괴로워 보여! 이따가 라이브잖아. 정말 괜찮아?',
      );
      await urara.say_and_wait(
        '무리하지 마. 우라라가 곁에 있을게. 다시 웃을 수 있을 때까지——',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「지금은 건드리지 마!」',
      ]);
      await urara.say_and_wait('……어? 아파……!');
      await urara.print_and_wait([
        '내민 손을 ',
        urara.uma_sex_title,
        '이(가) 힘껏 뿌리쳤다. 튕겨 나간 손등에 화끈거리는 열기가 퍼진다.',
      ]);
      await urara.print_and_wait([
        '고개를 드니 언제나 싱글벙글하던 ',
        urara.uma_sex_title,
        '이(가), 지금은 당혹스럽고 슬픈 얼굴로 우라라를 보고 있었다.',
      ]);
      await urara.print_and_wait([
        '이런 얼굴을 어떻게 대하면 좋을까. 하지만 지금 여기서 떠나면 ',
        urara.sex,
        '이(가) 더 상처받을 뿐이야.',
      ]);
      await urara.print_and_wait([
        '역시 떠나면 안 돼. 입술을 깨물고, 빨갛게 부어 아픈 오른손을 숨긴 채 ',
        urara.sex,
        '옆에 쪼그려 앉아 ',
        urara.sex,
        '의 다음 말을 기다렸다.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「웃을 수 있을 리 없잖아……!」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「겨우 G1에 나왔는데, 나도 무대 한가운데 서고 싶었어! 어렵게 얻은 기회인데, 이렇게 약하다니……」',
      ]);
      await urara.print_and_wait(
        '누군가 슬퍼할 때는 먼저 속마음을 끝까지 들어 줘야 해. 엄마도 늘 그렇게 가르쳐 주셨어.',
      );
      await urara.print_and_wait([
        '지금이라면 ',
        urara.sex,
        '도 조금 편해질까. 하지만 이 옆얼굴, 어디서 본 것 같아. 이게 어떤 얼굴이었지?',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「미안해…… 우라라, 일부러 그런 건 아니야…… 하지만 정말 웃을 수가 없어……」',
      ]);
      await urara.say_and_wait(
        '아니야, 우라라 하나도 안 아파! 너는 정말 괜찮아?',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「……우라라가 뭐가 안 아파. 얼굴이 울 것 같은데……」',
      ]);
      await urara.say_and_wait('어? 정말…… 아니야! 우라라 정말 괜찮아!');
      await urara.print_and_wait([
        '확실히 아프긴 해…… 그래도 아마 그렇게 아프지는 않아! 그런데 우라라의 얼굴을 보고 ',
        urara.sex,
        '의 떨리던 입꼬리가 조금씩 올라갔다.',
      ]);
      await urara.print_and_wait(
        '우라라가 바라던 대로 됐어. 그런데 울다가도 웃을 정도였나? 우라라의 얼굴이……',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「그런 뜻이 아니야…… 그래도 괜찮아. 무대에 올라가면 제대로 웃을 수 있을 거야.」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「우라라는 항상 내 이야기를 들어 주네. 이번에도 고마워. 그러니까 무대에 올라가기 전에 표정도 가다듬어!」',
      ]);
      await urara.say_and_wait(
        '응! 괜찮아! 몇 번이든 우라라가 이야기 들어 줄게!',
      );
      await urara.print_and_wait([
        '고맙다고 하고 먼저 일어선, 겨우 진정한 ',
        urara.sex,
        '이(가) 우라라의 손도 살며시 잡아 일으켜 주었다.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「맞아. 몇 번이든…… 다음엔 꼭…… 한가운데 설 거야!」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「분명…… 다음이 있어……!」',
      ]);
      await urara.print_and_wait([
        '「이따 봐」라고 말한 뒤, ',
        urara.sex,
        '은(는) 무언가를 숨기듯 몸을 돌려 떠나갔다.',
      ]);
      await urara.print_and_wait([
        '겉으로는 평소 표정으로 돌아왔는데도, ',
        urara.sex,
        '의 뒷모습은 활기가 빠져나간 듯 야위어 보였다.',
      ]);
      await urara.print_and_wait([
        urara.sex,
        "의 다리는 오래 쪼그려 앉아 있던 탓인지 저려 있었고, 비틀거리는 걸음걸이가 더욱 '빈 껍데기'처럼 보이게 했다.",
      ]);
      await urara.print_and_wait([
        '우라라는 ',
        urara.sex,
        '의 그런 모습을 처음 봤어. 아까 너무 슬퍼하던 얼굴도, 지금 풀이 죽은 뒷모습도.',
      ]);
      await urara.print_and_wait([
        '하지만 이제야 알겠어. 지금 ',
        urara.sex,
        '은(는) 인생의 마지막 기회를 놓치고도 괜찮은 척하는 것 같았어……',
      ]);
      await urara.print_and_wait(
        '되돌릴 수 없는 일이 일어난 것 같아. 우라라가 너무 예민한 걸까?',
      );
      await urara.print_and_wait([
        '그래도 ',
        urara.sex,
        '의 말대로 이따가 무대에 올라가야 해. 나머지는 끝난 다음에 생각하자!',
      ]);
      await urara.print_and_wait([
        '뺨을 두드려 다시 기운을 내고, 우라라도 돌아서서 ',
        urara.sex,
        '의 뒷모습을 쫓아 함께 라이브 무대 뒤로 달렸다.',
      ]);
      await urara.print_and_wait([
        '힘찬 발소리와 함께 앞서 걷는 ',
        urara.sex,
        '은(는) 다시 기운이 나 보였다.',
      ]);
      await urara.print_and_wait(
        '우라라가 잘못 본 걸까? 분명 너무 예민했던 것뿐이야…… 응, 분명 그럴 거야……',
      );
      era.drawLine();
      await era.printAndWait([
        '오늘 라이브는 순조로웠다. 무대 뒤에서 상점가와 응원회 사람들이 있는 객석으로 돌아온 ',
        you.get_colored_name(),
        '은(는) 안도했다.',
      ]);
      await era.printAndWait([
        '그렇다. 몇 착이든 어느 위치에 서든, ',
        urara.get_colored_name(),
        '은(는) 최고의 미소를 모두에게 보여 줄 수 있다.',
      ]);
      await era.printAndWait([
        '그래서 모두 ',
        urara.get_colored_name(),
        '을(를) 좋아한다. 지더라도, 이기지 못하더라도 밝게 웃는 ',
        urara.sex,
        '을(를) 좋아하는 것이다.',
      ]);
      await era.printAndWait([
        '매번 잘되지는 않겠지만, 지금 ',
        urara.sex,
        '에게는 레이스에서 이길 실력이 있다.',
      ]);
      await era.printAndWait([
        '상점가 주민 A 「……우라라 ',
        urara.sex,
        ', 정말 열심히 하네. 전에 하던 걱정도 이제 내려놔도 되겠어.」',
      ]);
      await era.printAndWait([
        '상점가 주민 B 「그렇지. ',
        urara.sex,
        '이(가) 즐겁기만 하면 된다고 생각해도, 그 마음에 발목만 잡힐 뿐이잖아.」',
      ]);
      await era.printAndWait([
        '상점가 주민 C 「지금 우라라는 이미 성장했어. 마침 ',
        arim_kin,
        '에서도 ',
        urara.sex,
        '의 웃는 얼굴을 보고 싶고.」',
      ]);
      await era.printAndWait([
        '뒤에서 조용히 귀 기울이니, ',
        urara.get_colored_name(),
        '을(를) 응원하는 사람들도 라이브를 보며 무언가 이야기하고 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 방침이 점점 들어맞는 모양이다. 계속 나아가면 ',
        urara.get_colored_name(),
        '을(를) 지지하는 사람들도 ',
        urara.sex,
        '의 전진을 인정하게 될 것이다.',
      ]);
      await era.printAndWait([
        '골칫거리가 어느새 풀려 간다…… 일단 기억해 뒀다가 돌아가는 길에 슬쩍 ',
        urara.get_colored_name(),
        '에게 알려 주자.',
      ]);
      await era.printAndWait([
        '상점가 주민 A 「그런데 우라라의 최종 목표는 ',
        arim_kin,
        '이라더군. 그 레이스는 선발이 꽤 까다롭잖아.」',
      ]);
      await era.printAndWait(
        '상점가 주민 C 「그래도 우리가 도울 수 있는 일은 없을까? 우라라를 보고만 있자니 가만히 있을 수가 없어.」',
      );
      await era.printAndWait(
        '상점가 주민 D 「사실 생각이 하나 있어. 전에 상점가를 활성화했을 때처럼……」',
      );

      if (join_arim_kin_c) {
        await era.printAndWait(
          '상점가 주민 C 「사람이 많을수록 힘이 된다는 거지? 그런데 우라라는 한 번 뽑혔잖아. 아직도 그게 필요해?」',
        );
        await era.printAndWait(
          '상점가 주민 D 「지나친 걱정일지도 모르지만, 만일의 사태는 피하고 싶잖아. 그 아이 일이니까……」',
        );
      }
      await era.printAndWait(
        '응? 무슨 이야기지? 다들 자신 몰래 뭔가 하고 있는 건가.',
      );
      await era.printAndWait([
        '직감은 ',
        you.get_colored_name(),
        '에게 중요한 이야기라고 알려 왔다. 하지만 더 귀를 기울이려던 순간 고개를 드니, 라이브도 거의 끝나 가고 있었다.',
      ]);
      await era.printAndWait([
        '사람들의 이야기도 궁금하지만, ',
        urara.get_colored_name(),
        '의 상태를 바로 확인하기 위해 ',
        you.get_colored_name(),
        '은(는) 대기실로 서둘렀다.',
      ]);
      await era.printAndWait([
        '무대 위 ',
        urara.get_colored_name(),
        "의 알아차리기 어려운 옅은 미소도, ' ",
        urara.sex,
        "'이 자주 나타나는 것도, 레이스 전에 본 그 풀이 죽은 ",
        urara.child_sex_title,
        '도.',
      ]);
      await era.printAndWait(
        '이제는 사람들의 비밀 이야기까지 불안하게 느껴진다. 왜 이러지. 요즘 왜 이렇게 예민한 걸까.',
      );
      await era.printAndWait(
        '언젠가 무슨 일이 생길 것 같다. 기분 탓이기를 바란다……',
      );
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('잠깐 이야기해도 될까요?');
      await inner_urara.say_as_unknown_and_wait([
        '그런데 트레이너 ',
        you.adult_sex_title,
        '(당신)도 알고 계시겠죠.',
        urara.uma_sex_title,
        '이(가) 달리면서 쌓인 손상은 낫기 어려워요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '타고난 신체 구조와 일부 체질 때문이기도 하고, 아직 설명할 수 없는 현상 때문이기도 하죠.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '게다가 직업 선수들은 종종 몸이 견딜 수 있는 부하를 넘어서는 무리를 해요. 그렇게 생긴 손상은 보통 방법으로는 거의 치료할 수 없죠.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '왜 갑자기 이런 이야기를 하냐고요? 별뜻 없어요. 그저 문득 우라라는 예전부터 운이 좋았다는 생각이 들었을 뿐이에요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '앞으로도 ',
        urara.sex,
        '을(를) 잘 보살펴 주세요.',
        urara.sex,
        '마저 길을 잃은 외톨이가 되게 하지 말아 주세요……',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_95_14: (() => {
    const title = '팬 감사제!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} join_arim_kin_c ウララがクラシック級有馬記念に出走したか
     */
    const f = async (urara, inner_urara, you, callname, join_arim_kin_c) => {
      await era.printAndWait([
        '객석 가장자리에 서서, ',
        you.get_colored_name(),
        '은(는) 평소처럼 운동장 저편에서 비틀비틀 다가오는 작은 ',
        urara.uma_sex_title,
        '을(를) 기다리고 있었다.',
      ]);
      await era.printAndWait([
        '오늘은 팬 감사제다.',
        urara.get_colored_name(),
        '은(는) 넘치는 활력을 살려 모두의 응원 속에서 여러 경기에 참가하고 있었다.',
      ]);
      await era.printAndWait([
        '하지만 생각은 좋아도 실전은 마음대로 되지 않는다. 눈앞에서 금방이라도 쓰러질 것 같은 작은 ',
        urara.uma_sex_title,
        '이(가) 그 증거다.',
      ]);
      await urara.say_and_wait([
        '후우, 후우……',
        callname,
        '! 끝났어…… 타이어 끌기! 꼴찌였지만——!',
      ]);
      await urara.say_and_wait(
        '아하하~ 훈련할 때도 많이 해 봤는데, 큰 타이어는 역시 무거워!',
      );

      era.printButton('「응, 수고했어. 잘 봤어.」', 1);
      await era.input();

      await era.printAndWait([
        '사실 타이어 끌기뿐만이 아니다.',
        urara.get_colored_name(),
        '은(는) 이번 경기들에서 거의 3착 안에 들지 못했다.',
      ]);
      await era.printAndWait([
        '자신의 팬 감사제에서도 작은 ',
        urara.uma_sex_title,
        '은(는) ',
        urara.sex,
        "의 '실전이 아니면 이기지 못한다'는 평소 법칙을 발휘하고 있었다.",
      ]);
      await urara.say_and_wait(
        '그래도 아직 못 이겨도, 다 같이 달리는 건 역시 즐겁네!',
      );
      await era.printAndWait([
        '얼굴의 땀을 닦고, ',
        urara.get_colored_name(),
        '은(는) 방금 함께 달린 ',
        urara.uma_sex_title,
        '팬들에게 손을 흔든 뒤 머리띠와 번호표를 벗었다.',
      ]);
      await era.printAndWait([
        '4월 날씨는 아직 따뜻하다고 하기는 어렵지만, 막 달리고 온 ',
        urara.get_colored_name(),
        '에게는 그래도 조금 후텁지근했다.',
      ]);
      await era.printAndWait([
        '汗で濡れたピンクの長い髪がほどけると、小さな',
        urara.uma_sex_title,
        'からは、青春の匂いを含んだ不思議な香りが漂った。',
      ]);
      await era.printAndWait([
        '汗で張りついた体操服の端が、',
        urara.teen_sex_title,
        'のまだ蕾のような体に食い込み、',
        urara.sex,
        'の幼いのに肉感のある曲線を描いていた。',
      ]);
      await era.printAndWait([
        'ゼッケンを外すと、陽の光で水を吸って半透明になった生地が、',
        urara.teen_sex_title,
        'の少し色っぽい輪郭をぼんやり透かしていた……',
      ]);
      await era.printAndWait([
        '주변의 뜨거운 시선과 의도가 의심스러운 카메라를 받으며, ',
        you.get_colored_name(),
        '은 말없이 무방비한 작은 ',
        urara.uma_sex_title,
        '에게 겉옷을 덮어 주었다.',
      ]);

      urara.say([
        '어? 우라라, 지금 온몸이 땀투성이야! ',
        callname,
        '의 겉옷이 더러워져!',
      ]);
      era.printButton(
        '「괜찮아. 아직 그렇게 따뜻하지도 않은데 우라라가 감기라도 걸리면 곤란하잖아」(호감+10)',
        1,
      );
      era.printButton(
        '「그건 안 돼. 내 담당의 몸을 다른 사람들이 함부로 보게 둘 수는 없어」(연모+2)',
        2,
      );
      const ret = await era.input();
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          'そばで無意識に色気をこぼす「小さな大人」に、跳ねる心臓を押さえ、',
          you.get_colored_name(),
          ' は ',
          urara.get_colored_name(),
          ' に首を振った。',
        ]);
        await era.printAndWait(
          '팬들에게 나쁜 마음이 없더라도, 이렇게 많은 사람 앞에서 경계심이 전혀 없으면 혼자 있을 때는 어쩌려고……',
        );
        await urara.say_and_wait([
          'え？ウララの体がほかの人に見えちゃうから、',
          callname,
          '、焦った……？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の返事を聞くと、わざと柔らかい体を預け、小さな',
          urara.uma_sex_title,
          'は赤い頬で、恥ずかしそうに、色っぽく上着の襟元を擦りつけた。',
        ]);
        await urara.say_and_wait([
          '大丈夫だよ。ウララ、大事な人にしか体見せないよ？ それに……ここ、全部 ',
          callname,
          ' の匂いだね～',
        ]);
        await era.printAndWait([
          '小さな恋人のかわいい笑顔を見ないようにし、今すぐ',
          urara.sex,
          'を舞台裏へ連れていく衝動をこらえ、',
          you.get_colored_name(),
          ' は固くなって話題をレースへ戻した。',
        ]);
      } else {
        await urara.say_and_wait([
          '그랬어? 에헤헤~ 전혀 몰랐네! 하지만 우라라한테는 ',
          callname,
          '가 있으니까 걱정 없어!',
        ]);
        await era.printAndWait([
          '乱れた鼓動をそっと抑え、',
          you.get_colored_name(),
          ' は小さな',
          urara.uma_sex_title,
          'の頭を軽く叩いた。危ない。自分が ',
          urara.get_colored_name(),
          ' を好きになりかけたと思った。',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '을(를) 노골적인 시선에서 지켜 주기는커녕, 트레이너까지 담당의 무방비한 모습에 마음을 빼앗겨서야 최악이다.',
        ]);
        await era.printAndWait([
          '금방이라도 안겨 올 듯한 ',
          urara.get_colored_name(),
          '과 거리를 유지하며, ',
          you.get_colored_name(),
          '은 ',
          urara.sex,
          '과 이다음 일정에 관해 이야기하기 시작했다.',
        ]);
      }
      era.printButton(
        '「그러고 보니 이따가 아직 경기가 남았지? 괜찮아? 조금 더 쉴래?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '의 몸이 아무리 튼튼해도 연속으로 경기를 치르는 부담은 크다. 그래서 ',
        you.get_colored_name(),
        '은(는) ',
        urara.sex,
        '에게 조금 더 쉬라고 권했다.',
      ]);
      await urara.say_and_wait(
        '괜찮아. 다들 기다리고 있고, 오늘은 팬 감사제잖아. 우라라, 많이 달리게 해 줘!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 걱정을 알면서도, 나갈 준비를 마친 작은 ',
        urara.uma_sex_title,
        '은(는) 웃으며 겉옷을 다시 ',
        you.get_colored_name(),
        '의 손에 쥐여 주었다.',
      ]);
      await urara.say_and_wait(
        "다음은 '더트 경기'야! 엄청 더러워지겠지만, 우라라 절대 안 다칠게!",
      );
      await urara.say_and_wait([
        '더트니까 우라라가 다 달리고 오면, ',
        callname,
        ', 이제 겉옷 덮어 주지 마!',
      ]);
      await era.printAndWait([
        '그러고 다시 코스로 달려 나간 ',
        urara.get_colored_name(),
        '은(는) 손을 흔들 때마다 ',
        urara.sex,
        '을(를) 응원하는 모두의 환호를 끌어냈다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '이(가) 경기에 나설 때마다 팬들은 열광한다. 몇 번을 져도 포기하지 않는 ',
        urara.sex,
        '의 모습을 다들 좋아하는 모양이다.',
      ]);
      await era.printAndWait([
        '지금 생각하면 굳이 말하지 않아도, ',
        urara.sex,
        '은(는) 아리마 기념에 필요한 팬 지지를 자연스럽게 확보할지도 모른다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '아직도 걱정되시는군요. 우라라를 향한 모두의 호감은 뜨거운데, ',
        urara.sex,
        '은(는) 아직 아무것도 모른다고요?',
      ]);
      await era.printAndWait([
        '갑자기 느려진 잿빛 세계 속에서, ',
        you.get_colored_name(),
        "의 곁에 이제는 '담당의 보호자'라 해도 될 만큼 익숙한 목소리가 다시 들려왔다.",
      ]);

      era.printButton(
        '「걱정이 안 될 리 없지. 원래부터 진흙투성이인 길이잖아. 그래도 자신은 있어.」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '네. 지금 진지하게 임하는 우라라를 보고 있으면, 저조차 쓸데없는 자신감이 생기네요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '게다가 ',
        urara.sex,
        '은(는) 드디어 이길 것 같아요. 비공식 경기에서 진심을 내는 건 오늘이 처음 아닌가요?',
      ]);
      await era.printAndWait([
        '느려진 시간 속에서, 진흙탕이 튀는 무거운 주로 위로 이를 악물고 선두를 지키는 작은 ',
        urara.uma_sex_title,
        '을(를) 보며, 엄격한 ',
        urara.sex,
        '마저 입꼬리를 조금 올렸다.',
      ]);
      await era.printAndWait([
        '하지만 생각에 잠긴 듯 관중석을 둘러본 뒤, ',
        urara.teen_sex_title,
        '의 표정에는 다시 심각한 그늘이 드리웠고, 그대로 몸을 돌려 떠났다.',
      ]);

      era.printButton(
        '「오늘은 왜 그렇게 서둘러? 조금 더 기다리지 그래. 적어도 우라라가 이기는 건 보고 가.」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        "더 말씀드릴 건 없어요. '잘못된 호의는 악의보다 다루기 어렵다.' 오늘은 그것만 전하러 왔어요.",
      );
      await era.printAndWait([
        '돌아보지 않은 채 관계없어 보이는 말로 ',
        you.get_colored_name(),
        '에게 답하고, 분홍빛에 잿빛이 섞인 ',
        urara.get_colored_name(),
        '은(는) 전처럼 흔적도 없이 사라졌다.',
      ]);
      await era.printAndWait([
        '멈췄던 시간이 다시 흐르고, 튀어 오른 진흙이 떨어질 무렵, ',
        urara.get_colored_name(),
        '이(가) 1착으로 결승선을 통과했다.',
      ]);
      await era.printAndWait([
        '코스의 열띤 중계와 관객들의 환호가 겹쳐지고, 전력을 다한 작은 ',
        urara.uma_sex_title,
        '은(는) 또 한 번 경기장의 열기를 끌어올렸다.',
      ]);
      await urara.say_and_wait('다들—— 앞으로도 열심히 달릴게, 계속 이길게——!');
      await era.printAndWait('관객들 「오오오오오——!!」');
      if (join_arim_kin_c) {
        await era.printAndWait([
          '이렇게 팬이 계속 늘면 아리마를 넘어서는 꿈에도 한 걸음 더 가까워진다.',
          urara.get_colored_name(),
          '이(가) 진심으로 임한 것도 아마 그 때문일 것이다.',
        ]);
        await era.printAndWait([
          "하지만 ' ",
          urara.sex,
          "'이(가) 떠나기 전에 말한 대로, 관객들의 반응을 자세히 보자 ",
          you.get_colored_name(),
          '도 지금 분위기의 이상함을 알아차렸다.',
        ]);
        await era.printAndWait([
          '일부 관객 「우라라는 여전히 귀엽네…… 그러고 보니 ',
          urara.sex,
          ', 아리마 기념에 벌써 한 번 나갔지?」',
        ]);
        await era.printAndWait(
          '일부 관객 「팬 투표 덕분이었잖아. 그런데 우라라한테 두 번째 아리마 기회가 있을까?」',
        );
        await era.printAndWait(
          '일부 관객 「나갈 수 있으면 충분하지. 우라라가 즐거우면 되는 거 아니야?」',
        );
        await era.printAndWait(
          '일부 관객 「응…… 그런 거라면 우라라의 상점가 응원단이 뭔가 하고 있다던데. 보러 가지 않을래……」',
        );
        await era.printAndWait(
          "쳇. 결국 아직도 꽤 많은 지지자가 '우라라도 이기고 싶다'는 마음을 진지하게 받아들이지 않는다는 뜻이다.",
        );
      } else {
        await era.printAndWait([
          '이렇게 팬이 계속 늘면 아리마에 나가는 꿈에도 한 걸음 더 가까워진다.',
          urara.get_colored_name(),
          '이(가) 진심으로 임한 것도 아마 그 때문일 것이다.',
        ]);
        await era.printAndWait([
          "하지만 ' ",
          urara.sex,
          "'이(가) 떠나기 전에 말한 대로, 관객들의 반응을 자세히 보자 ",
          you.get_colored_name(),
          '도 지금 분위기의 이상함을 알아차렸다.',
        ]);
        await era.printAndWait(
          '일부 관객 「우라라 인기 많네. 역시 귀여워서 그렇겠지——」',
        );
        await era.printAndWait([
          '일부 관객 「 ',
          urara.sex,
          ', 아리마 기념에 나가고 싶다고 했잖아. 이렇게 인기 많으면 팬 투표로 나갈 수도 있겠네.」',
        ]);
        await era.printAndWait([
          '일부 관객 「투표라…… 나도 ',
          urara.sex,
          '에게 투표할 것 같아. 왜냐하면 ',
          urara.sex,
          ', 귀엽기도 하고, ',
          urara.sex,
          '의 아리마도 보고 싶으니까.」',
        ]);
        await era.printAndWait(
          '일부 관객 「예상대로네. 그럼 우라라의 상점가 응원단이 뭔가 하고 있다던데. 보러 가지 않을래……」',
        );
        await era.printAndWait([
          '왜일까.',
          you.get_colored_name(),
          '은(는) 아직도 많은 지지자가 좋아하기 때문에 ',
          urara.get_colored_name(),
          "의 '소원을 들어주는' 것처럼 느낀다.",
        ]);
      }
      await era.printAndWait(
        '게다가 이 대화는 어디서 들은 것 같다. 모두 웃고 있는데, 가슴속 불안만 커져 간다……',
      );
      await urara.say_and_wait([
        callname,
        '、',
        callname,
        '! 다들 우라라랑 사진 찍고 싶대! 셋까지 세고 같이 찍을 거니까 카메라 부탁해——!',
      ]);
      await era.printAndWait([
        '담당이 부르는 소리가 ',
        you.get_colored_name(),
        '의 생각을 끊었다. 너무 기뻐서 얼굴의 진흙도 닦지 않은 채, ',
        urara.get_colored_name(),
        '은(는) 카메라를 들고 신이 나서 ',
        you.get_colored_name(),
        '에게 달려왔다.',
      ]);

      era.printButton('「아, 응, 맡겨 줘!」', 1);
      await era.input();

      await era.printAndWait([
        '마지막으로 관객 몇 명의 뒷모습을 흘끗 보고, ',
        you.get_colored_name(),
        '은(는) 어쩔 수 없다는 듯 고개를 저은 뒤 웃으며 ',
        urara.get_colored_name(),
        '의 카메라를 받아 들었다——',
      ]);
      await era.printAndWait([
        '아무튼 ',
        urara.get_colored_name(),
        '의 진지한 활약 속에서 팬 감사제는 이렇게 무사히 막을 내렸다.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_95_15: (() => {
    const title = '응원회, 폭주!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} join_arim_kin_c ウララがクラシック級有馬記念に出走したか
     * @param {number|false} febr_sta_rank フェブラリーステークスの着順。false は未出走
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} febr_sta フェブラリーステークス（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      join_arim_kin_c,
      febr_sta_rank,
      arim_kin,
      febr_sta,
    ) => {
      await inner_urara.say_as_unknown_and_wait([
        '당신은 우라라를 반드시 지키겠다고 하셨죠. 걱정 마세요. 트레이너 ',
        you.adult_sex_title,
        '(당신)를 의심하는 건 아니에요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '다만 때로는 몸으로 ',
        urara.sex,
        '의 앞을 막아설 수 있어도, 상처받은 마음은 어떻게 고치실 건가요?',
      ]);
      era.drawLine();
      await era.printAndWait([
        '상점가 사람들이 건넨 전단지를 보고, ',
        you.get_colored_name(),
        '은(는) 눈앞이 캄캄해졌다.',
      ]);

      era.printButton('「이게 다들 생각해 낸 방법인가요?」', 1);
      await era.input();

      await era.printAndWait([
        '상점가 주민 「응? 왜 그래, 트레이너 ',
        you.sex_code === 1 ? '총각' : '아가씨',
        '. 무슨 문제라도 있어? 우라라도 직접 나눠 주고 있는데?」',
      ]);
      await era.printAndWait([
        '얇은 종이를 떨리는 손으로 쥔 채, ',
        you.get_colored_name(),
        '은(는) 그 자리에서 폭발할 것 같은 감정을 필사적으로 억눌렀다.',
      ]);
      await era.printAndWait([
        "전단지에 인쇄된 것은 ' ",
        urara.get_colored_name(),
        "의 아리마 출전에 투표를'. 트레이너인 ",
        you.get_colored_name(),
        '의 감정은 갑작스러운 두통과 함께 터져 나왔다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 선의에서 비롯된 행동임을 알기에 끼어들기 어렵다. 불려 온 ',
        urara.get_colored_name(),
        '도 아마 상황을 전혀 모르고 있을 것이다.',
      ]);
      await era.printAndWait([
        '하지만 결국 금지된 일은 아니라 해도, 다른 ',
        urara.uma_sex_title,
        '의 노력을 부정하는 것이나 다름없는 방식은 잘못됐다.',
      ]);

      if (join_arim_kin_c) {
        await era.printAndWait([
          '지난번에도 이런 방식이었나. 게다가 이번에는 ',
          urara.get_colored_name(),
          '까지 불러서 함께 하게 만들고 있다.',
        ]);
        await era.printAndWait([
          '아저씨, 아주머니들.',
          urara.get_colored_name(),
          '의 트레이너가 여러분의 마음을 모르는 건 아닙니다. 하지만 이건 판촉 행사처럼 단순한 일이 아니에요……',
        ]);
      }
      era.printButton('「……우라라는 지금 어디 있나요?」', 1);
      await era.input();

      await era.printAndWait([
        '상점가 주민 「응? 거리를 찾아보면 보일 텐데…… 이봐, ',
        you.sex_code === 1 ? '총각' : '아가씨',
        ', 어딜 그렇게 서둘러 가?」',
      ]);

      era.printButton(
        '「죄송해요! 급한 일이 생각났어요. 짐은 여기 둘게요. 돌아와서 가져갈게요!」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '방금 산 채소와 손에 든 전단지를 내려놓고, ',
        you.get_colored_name(),
        '은(는) 가게 주인에게 급히 인사한 뒤 상점가 행사일의 인파 속으로 뛰어들었다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 성적이 좋아지면서 이 거리도 예전의 쇠락에서 벗어났다. 하지만 지금의 북적임은 ',
        you.get_colored_name(),
        '에게 뜻밖의 장애물이 되었다.',
      ]);
      await era.printAndWait([
        '사람이 가장 빽빽한 곳에서, ',
        you.get_colored_name(),
        '은(는) 멀리 오가는 사람들에게 둘러싸인 벚꽃빛 덩어리를 발견했다.',
      ]);
      await era.printAndWait([
        '안도는 잠시도 이어지지 않았다. 인파 속에서 다가오는 또 한 사람을 보자, 진정됐던 마음이 나락으로 떨어졌다.',
      ]);
      await era.printAndWait([
        '그 아이는 ',
        urara.get_colored_name(),
        "와(과) ' ",
        febr_sta,
        "'에서 겨뤘던 친구다. 하지만 지금 ",
        urara.sex,
        '의 두 다리에는 두꺼운 붕대가 감겨 있었다.',
      ]);
      await era.printAndWait([
        '모두에게 잊힌 듯, 어두운 얼굴의 ',
        urara.sex,
        '은(는) 상처투성이 다리를 끌면서도 놀랍도록 쉽게 인파를 빠져나왔다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '앞에서 멈춰 선 ',
        urara.sex,
        '의 힘없이 늘어진 손에는 구겨진 전단지가 쥐어져 있었다……',
      ]);
      await era.printAndWait([
        '곧 무슨 일이 벌어질지 알아차린 ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '을(를) 둘러싼 사람들 사이로 뛰어들려 했다. 하지만 무심한 인파에 휩쓸려 오히려 멀어졌다.',
      ]);
      await you.say_and_wait(
        '잠깐, 먼저 말하지 마. 이렇게 돼서는 안 돼. 피할 수 없더라도 잠깐만 기다려——',
      );
      await urara.say_and_wait(
        '——아, 오랜만이야! 우라라, 학교에서 너 한동안 못 봤어. 요즘 뭐 하고 지냈어?',
      );
      await urara.say_and_wait('아, 그리고 다리…… 다쳤어? 언제부터……');
      await era.printAndWait([
        urara.uma_sex_title,
        "A 「……괜찮아. 별일 아니야. 그런데 우라라, 이건 뭐야…… ' ",
        arim_kin,
        "'에 나가려고?」",
      ]);
      await era.printAndWait([
        '우라라의 반가운 인사를 차갑게 끊고, 복잡한 표정의 친구는 전단지를 작은 ',
        urara.uma_sex_title,
        '앞에 들어 보였다.',
      ]);
      await urara.say_and_wait([
        '응? 그런 거야? 다들 우라라의 ',
        arim_kin,
        '과(와) 관계있다고 해서 도와주러 왔어!',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A「',
        urara.get_colored_actual_name(),
        ', 역시 자기가 뭘 하는지도 모르는구나. 웃기지 마……」',
      ]);
      await urara.say_and_wait(
        '음, 우라라도 잘은 모르지만 다들 전단지 나눠 주는 걸 돕고 있는 거지?',
      );
      await urara.say_and_wait(
        '어? 왜 그래? 정말 괜찮아? 안색이 엄청 안 좋아……',
      );
      await era.printAndWait([
        '실망에서 절망, 그리고 무너지기까지는 몇 초밖에 걸리지 않았다. 부정적인 감정에 몸을 맡긴 ',
        urara.teen_sex_title,
        '은(는) 다가오려는 친구를 세게 밀쳐 냈다.',
      ]);
      await era.printAndWait(
        '이어서 큰 뺨 때리는 소리와, 이성을 잃은 듯 걷잡을 수 없는 질책이 쏟아졌다.',
      );
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「장난하지 마! 제발 이제 그런 어린애 같은 짓 좀 하지 마! 이 종이 제대로 봐! 네가 뭘 하는지 알기나 해?!」',
      ]);
      await era.printAndWait([
        '친구의 갑작스러운 폭력에, ',
        urara.get_colored_name(),
        '은(는) 손에서 흩어진 종이들과 함께 바닥에 주저앉았다.',
      ]);
      await era.printAndWait([
        '믿을 수 없다는 듯 빨갛게 달아오른 뺨을 감싸고, 작은 ',
        urara.uma_sex_title,
        '의 눈에는 어쩔 줄 모르는 눈물이 고였다.',
      ]);
      await era.printAndWait([
        '자기가 뭘 잘못했는지도 아직 모르는데, 터져 나온 감정은 말을 잃은 ',
        urara.sex,
        '에게 해명할 틈조차 주지 않았다.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「다들 나가고 싶은 레이스를 위해…… 이기고 싶은 레이스를 위해 노력해! 모든 걸 걸고 있단 말이야!」',
      ]);
      await era.printAndWait([
        '울면서 외치는 ',
        urara.teen_sex_title,
        '의 실의와 분함이 밑바닥에서부터 넘쳐흘렀다.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「그런데 지금 우라라는…… 사람들을 이용해서 편하게 꿈을 이루려고 하잖아……」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「몰랐다고 하면 되겠지. 하지만 그러면…… 자신을 불태우고 있는 사람들은 뭐가 돼!」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「우라라는 자신을 위해서라면 사기꾼도 될 수 있는 거잖아…… 그럴 거면 아예 레이스에 나오지 마!」',
      ]);
      await urara.say_and_wait('……아니야…… 우라라는, 아니야…… 미안…… 하지만……');
      await era.printAndWait([
        '억누르던 흐느낌은 친구의 비난 속에서 작은 울음이 되었고, 작은 ',
        urara.uma_sex_title,
        '의 무방비한 마음은 더 이상 눈가의 눈물을 막지 못했다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '은(는) 해명하고 싶었다. 하지만 충격으로 잠긴 목에서는 제대로 된 말이 하나도 나오지 않았다.',
      ]);
      await era.printAndWait([
        '절망적인 대치 속에서, 다친 ',
        urara.teen_sex_title,
        '이(가) 먼저 눈물을 닦고 말없이 ',
        urara.get_colored_name(),
        '에게 한 걸음 다가섰다……',
      ]);
      await era.printAndWait([
        '너무 갑작스러워 아무도 말리지 못했던 구경꾼들을 겨우 헤치고 나온 ',
        you.get_colored_name(),
        '은(는) 작은 ',
        urara.uma_sex_title,
        '에게 뻗은 손목을 붙잡았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 갑작스러운 행동에 놀라, 이성을 되찾아 가던 ',
        urara.uma_sex_title,
        '은(는) 죄책감과 함께 손을 거두고 불편한 다리를 원래 자리로 옮겼다.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「죄송해요. 당신이 우라라의 트레이너예요? 저는 ',
        urara.sex,
        '을(를) 일으켜 주려고 했을 뿐이에요……」',
      ]);

      era.printButton(
        '「진정하고 잘 생각해 봐. 지금 우라라에게 당신은 주변 구경꾼들만큼이나 무서운 존재야.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '분노를 필사적으로 억누르며, ',
        you.get_colored_name(),
        '은(는) 몸으로 둘 사이를 막고 떨고 있는 ',
        urara.get_colored_name(),
        '앞으로 등 뒤의 손을 내밀었다.',
      ]);

      era.printButton(
        '「그 마음을 모르는 건 아니야. 하지만 지금 친구를 상처 입히는 당신은 뭐라고 생각해?」',
        1,
      );
      await era.input();
      era.printButton(
        `「관계없는 친구에게 화풀이할 자격은 없어. 당장 우라라에게서 떨어져!」(호감+20)`,
        1,
      );
      era.printButton(
        `「${urara.sex}이(가) 받아 준다고 해서 ${urara.sex}에게 화를 쏟아내도 되는 건 아니야. 떠들 만큼 떠들었으면 당장 우라라에게서 떨어져!」(연모+5)`,
        2,
      );
      const ret = await era.input();

      await era.printAndWait(
        '눈앞의 어른이 억누르지 못하는 분노에 압도된 걸까, 상점가 사람들이 달려오는 발소리를 들은 걸까.',
      );
      await era.printAndWait([
        '자신의 충동으로 망가뜨려 되돌릴 수 없게 된 우정 앞에서, 풀이 죽은 ',
        urara.teen_sex_title,
        '은(는) 그제야 잠긴 목소리로 본래의 목적을 말했다.',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「……미안해. 트레센을 떠나기 전에 우라라를 만나고 싶었을 뿐인데, 이렇게 돼 버려서……」',
      ]);
      await era.printAndWait([
        urara.uma_sex_title,
        'A 「즐거운 이야기를 하고 제대로 작별 인사를 하려고 했어. 정말 미안해……」',
      ]);
      await era.printAndWait([
        '그 말을 마치고, ',
        urara.teen_sex_title,
        '은(는) 무거운 몸을 돌렸다. 절뚝이는 뒷모습은 조금씩 흩어지는 인파 속으로 사라졌다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 팔에 힘없이 기대어, 작은 ',
        urara.uma_sex_title,
        '은(는) 지금은 그 뒷모습을 쫓을 수도, 붙잡을 말도 찾을 수 없었다.',
      ]);
      await urara.say_and_wait([
        callname,
        '、',
        urara.sex,
        '……',
        urara.sex,
        ', 혹시……',
      ]);
      await era.printAndWait([
        '아직 제대로 된 말은 나오지 않지만, ',
        urara.get_colored_name(),
        '은(는) 그래도 목소리를 내어 친구가 떠나기 전에 한 말을 ',
        you.get_colored_name(),
        '에게 확인했다.',
      ]);

      era.printButton(
        `「……응.${urara.sex}의 다리는 이제 달릴 수 없어.${urara.sex}에게는…… 꿈을 이룰 다음 기회가 없어.」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        "유감이지만 이번의 '다시는 만날 수 없다'는 말은 불쾌한 농담이 아니다. 진실이 눈앞에 있는 이상, ",
        you.get_colored_name(),
        '도 있지도 않은 희망을 만들어 줄 수는 없었다.',
      ]);
      if (febr_sta_rank) {
        if (febr_sta_rank === 1) {
          await urara.say_and_wait([
            '그럼……',
            callname,
            ', 우라라가……',
            urara.sex,
            '의…… 우라라가……',
          ]);
          await urara.say_and_wait([
            '친구의 미소를 빼앗은 건…… 우라라가 직접……',
            urara.sex,
            '의 행복을……',
          ]);
        } else {
          await urara.say_and_wait([
            callname,
            '……우라라가 그랬어…… 아까는 우라라가……',
          ]);
          await urara.say_and_wait([
            '우라라가…… 친구의 미소를 더럽혔어…… 지금까지 대체……',
          ]);
        }
      }
      era.printButton('「우라라, 이제 그만 말해. 네 잘못이 아니야!」', 1);
      await era.input();

      await urara.say_and_wait([
        '하지만, 그래도……',
        urara.sex,
        '의 미소가, ',
        urara.sex,
        '의 행복이…… 왜 ',
        urara.sex,
        '이(가) 이런 일을……',
      ]);
      await urara.say_and_wait(
        '우라라가 해 온 모든 게…… 잘못된 거였어…… 어떻게 해야 다들……',
      );
      await urara.say_and_wait(
        '그렇다면…… 우라라의 달리기는…… 나는…… 레이스도……',
      );
      await era.printAndWait([
        '피를 토하듯, ',
        urara.get_colored_name(),
        '의 지금 한마디 한마디는 자신을 채찍질하는 부정이었다.',
      ]);
      await era.printAndWait([
        '그로 인해 피를 흘리는 건 ',
        urara.get_colored_name(),
        '만이 아니었다.',
        you.get_colored_name(),
        '도, ',
        urara.get_colored_name(),
        '을(를) 위해 온 그 자리의 모두도 작은 ',
        urara.uma_sex_title,
        '의 무너진 목소리 속에서 거의 숨을 쉴 수 없었다.',
      ]);
      await era.printAndWait([
        '모두 이것이 ',
        urara.sex,
        '의 잘못이 아님을 안다. 희망을 전하고 싶은 봄바람이 누군가를 상처 입히고 싶을 리 없다.',
      ]);
      await era.printAndWait([
        '하지만 지금 ',
        you.get_colored_name(),
        '이(가) 할 수 있는 건 ',
        urara.get_colored_name(),
        '을(를) 품에 감추고, 잠시 마음껏 슬픔을 쏟아내게 하는 것뿐이었다.',
      ]);
      await era.printAndWait([
        '다른 사람에게서 비롯된 이 슬픔은 본래 다정한 ',
        urara.sex,
        "의 것이 아니다. 이른바 '선의'를 제멋대로 ",
        urara.sex,
        '에게 떠넘긴 어른들의 것이다.',
      ]);
      await era.printAndWait([
        '상점가 주민 「 ',
        you.sex_code === 1 ? '총각' : '아가씨',
        ', 지금은 어떻게 해야 하지……」',
      ]);

      era.printButton(
        '「……아무튼 아까 뭘 하고 있었든, 무슨 일을 했든, 지금은 전부 멈춰 주세요……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '품 안에서 여전히 슬퍼하는 담당을 끌어안고, ',
        you.get_colored_name(),
        '도 자책 속에서 눈을 감았다.',
      ]);
      await era.printAndWait([
        '조금만 더 일찍 도착했다면, ',
        urara.get_colored_name(),
        '은(는)……',
      ]);
      era.drawLine();
      await era.printAndWait([
        '상점가의 ',
        urara.get_colored_name(),
        '아리마 홍보 행사는 그날 바로 중단되었다.',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        '을(를) 데리고 트레센으로 돌아갔다.',
      ]);
      await era.printAndWait([
        '온 힘을 다해 ',
        urara.get_colored_name(),
        '을(를) 달랬지만, 작은 ',
        urara.uma_sex_title,
        '의 마음이 꺾인 얼굴은 모두의 가슴에 깊이 남았다.',
      ]);
      await era.printAndWait([
        '그전까지 ',
        you.get_colored_name(),
        '은(는) ',
        urara.get_colored_name(),
        "을(를) '위험'에서 멀리할 방법을 수없이 생각했다. 하지만 아무 잘못 없이 닥친 이 재앙은 결국 ",
        urara.sex,
        '에게 쏟아졌다.',
      ]);
      await era.printAndWait([
        '왜 ',
        urara.get_colored_name(),
        '이어야 했을까.',
        urara.get_colored_name(),
        '의 마음에는 무엇이 남을까.',
        urara.sex,
        '은(는) 무엇을 잘못했을까……',
      ]);
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '의 마음속 상처를 메울 방법을 찾을 때까지, 잠 못 드는 사람이 많을 것이다……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '……보세요. 또 한 사람의 희망이 무너졌어요. 변하기로 결심하기 전, 우라라는 이런 건 생각하지 않았죠?',
      );
      await inner_urara.say_as_unknown_and_wait([
        '하지만 ',
        urara.sex,
        '은(는) 또 무리해서 평소처럼 행동하겠죠.',
        urara.sex,
        '은(는) 우라라니까요.',
        urara.sex,
        '은(는) 다른 사람에게 부담을 주고 싶지 않으니까요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그러니 이야기가 끝날 때까지 ',
        urara.sex,
        '의 마음을 조금씩 고쳐 나가는 수밖에 없어요. 다른 길은 없어요……',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '하지만 이야기는 여기서 끝나지 않아요. 부디 끝까지 버텨 주세요……',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_95_19: (() => {
    const title = '「심야의 대화」';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} halo キングヘイロー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {PrintedSpan} call_61 ハルウララのキングヘイローへの呼び方
     * @param {PrintedSpan} r_call_u ライスシャワーのハルウララへの呼び方
     * @param {PrintedSpan} callname_61 ハルウララのキングヘイローへの呼び方
     * @param {PrintedSpan} h_call_u キングヘイローのハルウララへの呼び方
     */
    const f = async (
      urara,
      inner_urara,
      rice,
      halo,
      you,
      callname,
      call_30,
      call_61,
      r_call_u,
      callname_61,
      h_call_u,
    ) => {
      const urara_say_in_lines = (content) =>
        era.printAndWait(
          [
            '「',
            ...(Array.isArray(content) ? content : [content]),
            '」',
            urara.get_colored_name(),
          ],
          { align: 'right', color: urara.color },
        );
      era.drawLine({
        content: '【5月XX日「ウララ」と「ライスシャワー」10：32】',
      });
      await rice.say_and_wait([
        r_call_u,
        ' 쪽은 아직 접속 중인 것 같은데…… 안 자?',
      ]);
      era.println();
      await urara_say_in_lines(
        '응! 요즘 좀 잠이 안 와서, 정신 차리면 늘 이 시간이야!',
      );
      await urara_say_in_lines([
        '그래도 벌써 이렇게 늦었는걸.',
        call_30,
        ', 무슨 일 있어?',
      ]);
      era.println();
      await rice.say_and_wait([
        '얼마 전 일 때문에,',
        r_call_u,
        ', 아직 힘들어?',
      ]);
      era.println();
      await urara_say_in_lines([
        '어? 어어? 우라라, 그렇지 않은데?',
        call_30,
        ', 왜 그렇게 생각해?',
      ]);
      era.println();
      await rice.say_and_wait([
        r_call_u,
        '는 자기 마음을 잘 못 숨기니까…… 요즘 내내 기운이 없어서, 라이스가 매일 뒤따라가도 눈치 못 챘는걸?',
      ]);
      era.println();
      await urara_say_in_lines('어, 뒤따라왔어? 그랬어? 전혀 몰랐어!');
      era.println();
      await rice.say_and_wait([
        '미안해! 저기,',
        r_call_u,
        '가 요즘 기운이 없어 보여서, 그런데 말을 걸 기회가……',
      ]);
      era.println();
      await urara_say_in_lines([
        '괜찮아!',
        call_30,
        '는 잘못한 거 없어! 그런데 우라라도 잘 모르겠어서, 어떻게 해야 할지 모르겠어.',
      ]);
      await urara_say_in_lines(
        '이대로는 안 된다고 생각해. 그런데 그날 일이 떠오르면 또 눈물이 나……',
      );
      era.println();
      await rice.say_and_wait([
        '미안해!',
        r_call_u,
        ', 너무 힘들면 일단 진정하자!',
      ]);
      await rice.say_and_wait([
        '그리고…… 라이스도 그다지 믿음직하지는 않지만,',
        r_call_u,
        '가 괜찮다면 라이스 얘기, 들어 줄래?',
      ]);
      era.println();
      await urara_say_in_lines([
        call_30,
        ', 정말 침착하네.',
        call_30,
        ', 이런 일이 자주 있어?',
      ]);
      era.println();
      await rice.say_and_wait([
        '자, 자주 있는 건 아니야…… 상황은 다를지도 모르지만, 라이스도 아주 심한 말을 들은 적이 있어.',
      ]);
      if (era.get('cflag:30:殿堂') > 0) {
        await rice.say_and_wait([
          r_call_u,
          '도 들어 봤을 거야. 예전에 라이스가 누군가에게 정말 중요한 레이스에서 그만 이겨 버렸어.',
        ]);
        await rice.say_and_wait(
          '그랬더니 주위에서 실망한 한숨만 들리고, 화내는 사람도 많았어…… 이상하지?',
        );
        era.println();
        await urara_say_in_lines([
          '응. 그때 ',
          call_30,
          ', 정말 힘들었겠구나……',
        ]);
        era.println();
        await rice.say_and_wait(
          '예전의 라이스는 분명 흔들렸어. 하지만 그래도 라이스가 잘못했다고는 생각하지 않았어.',
        );
        await rice.say_and_wait([
          r_call_u,
          ', 놀랐지? 하지만 라이스 생각은 쭉 변하지 않았어.',
        ]);
        await rice.say_and_wait(
          '한숨 소리는 무섭지만, 계속 달리면 모두 언젠가는 네 모든 모습을 봐 줄 거야.',
        );
        await rice.say_and_wait([
          '그래서 라이스는 이긴 걸 사과한 적 없어. 비난에 쉽게 굴복하면 모두의 축복을 저버리는 거니까.',
        ]);
      } else {
        await rice.say_and_wait([
          r_call_u,
          '도 들어 봤을 거야. 라이스가 누군가에게 정말 중요한 승리를 그만 빼앗아 버렸어.',
        ]);
        await rice.say_and_wait(
          '그랬더니 주위에서 실망한 한숨만 들리고, 화내는 사람도 많았어…… 이상하지……',
        );
        era.println();
        await urara_say_in_lines([
          '응. 그때 ',
          call_30,
          ', 정말 힘들었겠구나……',
        ]);
        era.println();
        await rice.say_and_wait(['그래도 지금의 라이스는 역시 승자니까……']);
        await rice.say_and_wait([
          r_call_u,
          ', 이상하게 들릴지도 몰라. 하지만 라이스는 정말 그렇게 생각해.',
        ]);
        await rice.say_and_wait(
          '한숨 소리에 쓰러질 것 같았지만, 계속 달리다 보니 어느새 모두의 축복도 늘어났어.',
        );
        await rice.say_and_wait([
          '그래서 라이스를 축복해 주는 모두를 위해 지금의 라이스도 계속 이길 거야.',
        ]);
      }
      await rice.say_and_wait([
        '그런 거야.',
        r_call_u,
        ', 너무 걱정하지 않아도 돼. 그러니까 앞으로도 전처럼 계속 달리면 돼——',
      ]);

      era.drawLine({ content: '【5月XX日「ウララ」と「キング」11:01】' });
      await halo.say_and_wait([
        h_call_u,
        ', 이 시간까지 안 자는 거야? 내일 늦잠 자면 ',
        callname_61,
        '도 곤란하잖아?',
      ]);
      era.println();
      await urara_say_in_lines(['그런데,', call_61, '도 안 자고 있잖아?']);
      era.println();
      if (era.get('cflag:61:殿堂') > 0) {
        await halo.say_and_wait(
          '난 이제 그렇게 빡빡한 레이스 일정은 없어. 지금은 기숙사에 잠시 머무르는 셈이지.',
        );
        await halo.say_and_wait([
          '문제는 너야,',
          h_call_u,
          '. 맞은편 침대 이불 밑에서 휴대폰 불빛이 새어 나오고 있어.',
        ]);
        era.println();
        await urara_say_in_lines([call_61, ', 화났어……?']);
        era.println();
        await halo.say_and_wait([
          '화 안 났어. 다만 요즘,',
          h_call_u,
          '가 계속 딴생각에 잠겨 있잖아. 그날 일 때문에 아직도 울적한 거지?',
        ]);
      } else {
        await halo.say_and_wait(
          '사실 잘 자고 있었어. 그런데 새어 나오잖아, 이불 밑에서 휴대폰 불빛이.',
        );
        await halo.say_and_wait(
          '말했잖아. 밤에 휴대폰을 볼 거면 밝기를 그렇게 높이지 말라고.',
        );
        era.println();
        await urara_say_in_lines('미안해……');
        era.println();
        await halo.say_and_wait([
          '사과하라는 게 아니야. 다만 요즘 ',
          h_call_u,
          '는 몸도 제대로 챙기지 않잖아. 아직 힘든 거지?',
        ]);
      }
      era.println();
      await urara_say_in_lines('응, 사실은——');
      await urara_say_in_lines('——');

      era.drawLine({ content: '【5月XX日「ウララ」と「キング」11:13】' });
      await urara_say_in_lines(['그래서,', call_30, '는 그렇게 말했어……']);
      await urara_say_in_lines([
        call_61,
        ', 우라라가 더 열심히 하면 다들 슬퍼하지 않게 될까?',
      ]);
      await urara_say_in_lines(
        '우라라가 계속 달리면, 이제 아무도 『우라라는 레이스에 나가면 안 돼』라고 생각하지 않게 될까?',
      );
      era.println();
      await halo.say_and_wait([
        '……미안해,',
        h_call_u,
        '. 더 일찍 말했어야 했는데. 그리고 라이스의 방식은 네 상황에 완전히 들어맞지는 않아.',
      ]);
      era.println();
      await urara_say_in_lines(['어?', call_61, ', 무슨 뜻이야?']);
      era.println();
      await halo.say_and_wait([
        '……지금부터 할 이야기는,',
        h_call_u,
        '를 더 힘들게 할지도 몰라. 그래도 끝까지 들어 줘.',
      ]);
      await halo.say_and_wait(
        '——아무도 슬퍼하지 않는다는 건 불가능해. 지고도 승자에게 아무렇지 않게 『축하해』라고 할 수 있는 사람만 있는 건 아니니까.',
      );
      await halo.say_and_wait([
        '지금의 ',
        h_call_u,
        '는 이미 알잖아. 대부분의 ',
        urara.uma_sex_title,
        '에게 어떤 레이스는 평생 단 한 번뿐이라는 걸.',
      ]);
      await halo.say_and_wait(
        '꿈을 좇다가 쓰러지기도 하고, 목표조차 보지 못한 채 길을 잃기도 해. 그런 이야기는 셀 수도 없어.',
      );
      await halo.say_and_wait(
        '잔인하게 들리겠지만, 승리를 거머쥐려면 모두를 행복하게 할 수는 없어.',
      );
      era.println();
      await urara_say_in_lines(['그럴 수가…… 그럼 킹도?']);
      era.println();
      await halo.say_and_wait(
        '그래서 난 다른 사람의 저주를 받아 내며 당당하게 달려. 그게 공정하지 않더라도.',
      );
      await halo.say_and_wait([
        '일류 ',
        urara.uma_sex_title,
        '에게 다른 사람의 비난이나 원망은——화는 나지만——사실 중요하지 않아.',
      ]);
      await halo.say_and_wait([
        '중요한 건,',
        urara.sex,
        '가 자신의 승리를 어떻게 받아들이느냐야. 답할 수 있는 것도 ',
        urara.sex,
        ' 자신뿐이지.',
      ]);
      await halo.say_and_wait([h_call_u, ', 전에 이기고 싶다고 했지.']);
      era.println();
      await urara_say_in_lines(
        '응. 모두를 위해서만이 아니라, 지금의 우라라도 이기고 싶어. 그런데 그런 일이 생겨 버렸어.',
      );
      era.println();
      await halo.say_and_wait(
        '그렇다면 당분간은 그대로 있어도 돼. 당당하게 계속 이기다 보면 답을 찾을 거야.',
      );
      await halo.say_and_wait([
        '그러니까,',
        h_call_u,
        '도 이 일 때문에 계속 풀이 죽어 있을 필요는 없어.',
      ]);
      era.println();
      await urara_say_in_lines([
        call_61,
        ' 얘기는 언제나 어렵네. 그래도 ',
        call_61,
        '가 그렇게 말한다면 우라라도 해 볼게!',
      ]);
      era.println();
      await halo.say_and_wait([
        '그래, 고마워……',
        h_call_u,
        ', 너라면 괜찮을 거야.',
      ]);
      await halo.say_and_wait(['지금의 너도 『일류 우라라』니까——']);

      era.drawLine({ content: '【5月XX日「ウララ」と「ウララ？」??:??】' });
      await inner_urara.say_as_unknown_and_wait(
        '또인가요. 친구라는 분들은 여전히 걱정하는 말만 늘어놓는군요.',
      );
      era.println();
      await urara_say_in_lines('그렇게 말하면 안 돼. 너도 우라라 친구잖아.');
      era.println();
      await inner_urara.say_as_unknown_and_wait([
        '알고 있어요. 하지만 우라라도 알고 있잖아요.',
        urara.couple_title,
        '로는 실질적인 도움이 되지 못해요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '참고는 할 수 있어도 남의 답을 그대로 베낄 수는 없어요. 여기까지 걸어온 건 우라라와 트레이너잖아요?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '하지만 괴롭다면 제게 기대셔도 괜찮아요. 마침 제게 『해독제』가 있거든요.',
      );
      era.println();
      await urara_say_in_lines(
        '……에헤헤~ 또 그 얘기네. 치사해. 친구한테 그렇게 심한 속마음만 얘기하고.',
      );
      await urara_say_in_lines(
        '그리고 우라라가 부탁을 들어주면 넌 정말 기쁜 얼굴이 될 수 있어?',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait(
        '물론이죠. 몇 번이나 말씀드렸잖아요. 우라라의 행복은 제 행복……',
      );
      era.println();
      await urara_say_in_lines(
        '그래도 우라라가 답한다면, 네 방식이 옳다고는 생각하지 않아.',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait(
        '어머, 아쉽네요. 또 우라라에게 거절당했어요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '하지만 전 우라라를 해치고 싶다고 생각한 적은 한 번도 없어요. 적어도 그것만은 믿어 주세요.',
      );
      era.println();
      await urara_say_in_lines(
        '응. 계속 서로 믿고 있어. 그래서 우라라는 네 부탁을 언제나 들어줄 수는 없어.',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait(
        '역시 아무것도 못 한 채 끝인가요——',
      );

      era.drawLine();
      await urara.print_and_wait([
        '이상한 전류 소리와 함께, 「',
        urara.sex,
        '」도 사라졌다. 어둠이 다시 작은 이불 속으로 스며들어, 차갑고 불안하다.',
      ]);
      await urara.print_and_wait(
        '꼬리를 붙잡힌 것 같아. 지금 자면 우라라, 분명 악몽을 꿀 거야.',
      );
      await urara.print_and_wait([
        '하지만 빨리 안 자면 걱정할 거야. 지금의 우라라는 더 이상 ',
        callname,
        '를 걱정시키면 안 돼!',
      ]);
      await urara.say_and_wait([callname, '、', callname, '……'], true);
      await urara.print_and_wait(
        '눈가에서 떨어질 듯한 물방울을 닦았다. 꼭 여민 이불 속에서, 방금 내려놓은 휴대폰은 아직 따뜻했다.',
      );
      await urara.print_and_wait(
        '이러면 잔소리를 들을지도 몰라. 내일 잠이 부족해서 못 달릴지도 몰라. 하지만……',
      );
      await urara.print_and_wait(
        '오늘 밤 마지막 고집을 품고 귀를 접은 채, 어둠 속에서 손바닥만 한 화면을 다시 켰다.',
      );
      await urara.print_and_wait([
        '채팅이 아니야. 다른 무언가도 아니고…… 이 시간에 전화하면 ',
        callname,
        '에게 방해가 돼. 킹도 화낼지 몰라.',
      ]);
      await urara.print_and_wait([
        '그래도 부탁이야. 잔소리를 들어도 좋아——지금 당장 ',
        callname,
        '를 만나고 싶어. 우라라, 지금 당장 ',
        callname,
        ' 목소리가 듣고 싶어!',
      ]);
      await urara.print_and_wait(['그러니까,', callname, ', 받아 줘——']);
      era.drawLine({ content: `【5月XX日「ウララ」と「${callname}」11:50】` });
      await urara_say_in_lines('——');
      await urara_say_in_lines([callname, ', 아직 있어?']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '여름 합숙(시니어급) 시작';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        '이미 한 번 겪었다 해도, 작은 ',
        urara.uma_sex_title,
        '는 언젠가 성장해요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '사람은 같은 강에 두 번 들어갈 수 없어요. 같은 바닷가에 선 ',
        urara.sex,
        '도 예전과 같지는 않답니다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '오늘부터 삼 년 차 여름 합숙이다.',
        you.get_colored_name(),
        '와 담당은 다시 합숙지의 바다를 찾았다.',
      ]);
      await era.printAndWait([
        '드넓은 바다가 나그네의 고민을 데려간다.',
        urara.get_colored_name(),
        '도 자신을 계속 몰아붙이던 마음을 잠시 내려놓을 수 있었다.',
      ]);
      await era.printAndWait([
        '처음 백사장에 섰을 때의 신선함은 이제 없다. 그래도 작은 ',
        urara.uma_sex_title,
        '는 햇살 아래서 저 멀리 바라보는 걸 좋아했다.',
      ]);
      await era.printAndWait([
        '半脱げの上着の下は濃い青の学校水着。水を吸って張りついた生地が、',
        urara.sex,
        'の柔らかく健康でふっくらした体の線を描いていた。',
      ]);
      if (era.get('talent:52:乳房尺寸') > 0) {
        await era.printAndWait([
          '水着に張られた胸が、',
          urara.sex,
          'の小さな体に重くかかり、育ちすぎた尻の肉と一緒に、誘うように揺れていた。',
        ]);
        await era.printAndWait([
          '小さな',
          urara.uma_sex_title,
          'の豊かな体は、少し合わないタイトな生地の下で気が進まなそうに動き、柔らかい胸が、先に小さな突起を二つ浮かせていた。',
        ]);
      }
      await era.printAndWait([
        '분홍빛 귀와 꼬리가 햇살 아래 자연스레 흔들리고, 풀어 놓은 머리카락이 바닷바람에 실려 ',
        urara.sex,
        '의 작은 어깨를 스쳤다.',
      ]);
      await era.printAndWait([
        '햇살에 눈이 부신 탓일까,',
        you.get_colored_name(),
        '는 순간 그 모습이 자신의 ',
        urara.get_colored_name(),
        '인지 알아보지 못했다.',
      ]);
      await urara.say_and_wait([callname, ', 여기야!']);
      await era.printAndWait([
        you.get_colored_name(),
        '의 시선을 알아차린 작은 ',
        urara.uma_sex_title,
        '는 파도와 모래가 맞닿는 곳에서 물을 밟으며 달려왔다. 뒤로 얕은 발자국이 남았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 앞에 멈춰 서서 앞으로 흩어진 벚꽃빛 머리카락을 어깨 뒤로 넘기자,',
        urara.get_colored_name(),
        '의 눈동자 속 꽃이 햇살 아래 부드럽게 빛났다.',
      ]);
      await era.printAndWait([
        urara.teen_sex_title,
        '의 조금 어른스러워진 분위기와 아직 천진한 얼굴이 차와 우유처럼 섞여,',
        you.get_colored_name(),
        '의 눈 속에서 흐릿하게 겹쳐졌다.',
      ]);
      await era.printAndWait([urara.sex, '는…… 작은 어른이 된 걸까.']);
      era.println();
      if (high_relation) {
        await urara.say_and_wait([
          callname,
          '! 이번엔 좀 늦었네? 우라라는 아침 일찍 짐을 전부 정리했단 말이야!',
        ]);
        await era.printAndWait([
          '의욕 가득한 모습으로 ',
          you.get_colored_name(),
          ' 곁에 다가와 머리카락을 어깨 뒤로 넘긴 작은 ',
          urara.uma_sex_title,
          '는 웃으며 ',
          you.get_colored_name(),
          '의 손을 잡아끌었다.',
        ]);
        await urara.say_and_wait(
          '앞으로 중요한 레이스도 있으니까 열심히 해야지! 그러니까 지금부터 트레이닝하자!',
        );
      } else {
        await urara.say_and_wait([
          '이번에 땡땡이치고 싶은 건 ',
          callname,
          ' 쪽이었구나? 우라라, 계속 기다렸어!',
        ]);
        await era.printAndWait([
          '종종걸음으로 다가와 ',
          you.get_colored_name(),
          ' 곁에 선 ',
          urara.get_colored_name(),
          '는 웃으며 손목을 잡고 트레이닝장으로 걸음을 옮겼다.',
        ]);
        await urara.say_and_wait(
          '앞으로도 중요한 레이스가 있으니까 이번 트레이닝은 조금 힘들어도 괜찮아!',
        );
      }
      era.println();
      await era.printAndWait([
        urara.get_colored_name(),
        '의 지금 모습은 모두 진심이다.',
        urara.sex,
        '의 마음에는 아직 걱정이 남았지만, 담당의 기대에 부응하려면 ',
        callname,
        '로서도 힘을 낼 수밖에 없다.',
      ]);
      await era.printAndWait([
        'だが今、腕に触れている本物で柔らかい体を感じると、',
        you.get_colored_name(),
        ' の頭の中の何かが切れそうになる。',
      ]);
      await era.printAndWait([
        '幼かった',
        urara.sex,
        'は、いつからこんなに「誘う」ようになったのだ。少し感慨深い……',
      ]);

      if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          'ふたりきりのとき、ウララ、',
          callname,
          ' のところ、期待していい？',
        ]);
        await era.printAndWait('それは……保留にしておこう。');
        await era.printAndWait([
          urara.get_colored_name(),
          ' の熱い視線と色っぽい体を真正面から受ける勇気はなく、',
          you.get_colored_name(),
          ' は逸らした目を遠くの海へ向けた……',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  before_elm_sta_s: (() => {
    const title = '엘름 스테이크스로!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await era.printAndWait([
        '인파 너머, 관중석 맨 뒷줄.',
        you.get_colored_name(),
        '는 어두운 하늘 아래 또 하나의 벚꽃빛 존재와 말없이 맨 위에 서 있었다.',
      ]);
      await era.printAndWait([
        '눈앞의 풍경은 여전히 느리게 흔들린다. 하지만 「',
        urara.sex,
        '」에게 익숙해진 ',
        you.get_colored_name(),
        '는 다음 대화를 조용히 기다렸다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그날 밤, 당신은 ',
        urara.sex,
        '와 무슨 이야기를 나누셨나요?',
      ]);
      await era.printAndWait([
        '화제도 없는 답답함을 견디지 못한 걸까. 가라앉은 벚꽃빛 존재가 ',
        you.get_colored_name(),
        '에게 뜻밖의 질문을 던졌다.',
      ]);

      era.printButton(
        `「석 달이나 지났는데 아직도 몰라? 넌 ${urara.sex}의 『가장 가까운』 친구 아니었어?」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '말이 끝나기 무섭게 꿰뚫을 듯한 시선이 ',
        you.get_colored_name(),
        '에게 꽂혔다. 하지만 결국 신경 쓰지 않는 척,',
        urara.sex,
        '는 고개를 옆으로 돌렸다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……됐어요. 말씀하고 싶지 않으시다면 저도 꼭 알아야 하는 건 아니니까요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '그런데 이번에는 우라라와 함께 있지 않으신가요? 예전처럼 ',
        urara.sex,
        '가 있는 곳까지 데려다주지 않으시고요?',
      ]);

      era.printButton(
        '「우라라가 혼자 있고 싶다고 했어. 게다가 이쪽도 다른 계획이 있거든. 끝까지 볼래?」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '됐어요. 제게 그럴 인내심이 있다고 아직도 생각하시나요?',
      );

      era.printButton('「그거 아쉽네」', 1);
      await era.input();

      await era.printAndWait([
        '곁에서 들리던 목소리가 뒤도 돌아보지 않고 떠나갔다. 빛깔을 되찾은 하늘을 보며,',
        you.get_colored_name(),
        '는 어쩔 수 없다는 듯 고개를 저었다.',
      ]);
      await era.printAndWait([
        '날씨도 나쁘지 않은데, 또 다른 ',
        inner_urara.get_colored_name(),
        '가 있으면 왜 모든 게 잿빛으로 변하는 걸까.',
      ]);
      await era.printAndWait([
        '아무리 예의가 바르다 해도,',
        urara.sex,
        '의 까칠한 성격은 여전하다. 그러니 앞으로 있을 일은,',
        urara.sex,
        '가 없는 편이 나을지도 모른다.',
      ]);
      await era.printAndWait([
        '선수 입장 시간을 확인한 ',
        you.get_colored_name(),
        '는 앞줄에 있는 「모두」에게 신호를 보냈다——',
      ]);

      era.drawLine();
      await urara.print_and_wait('곧 입장이야. 지금 난 어떤 상태일까.');
      await urara.print_and_wait(
        '몸 상태는 쭉 문제없어. 우라라도 달리고 싶어. 그런데 자꾸 떠올라, 친구들의 슬픈 얼굴이……',
      );
      await urara.print_and_wait([
        '망설이며 통로 밖의 빛을 향해 발을 내딛고, 평소처럼 뒤돌아 손을 흔들었다. 하지만 ',
        callname,
        '는 곁에 없었다.',
      ]);
      await urara.print_and_wait([
        '맞아. 우라라가 이번에는 혼자서도 괜찮다고 해서,',
        callname,
        '도 보내 버렸지. 그런데도 마음이 진정되질 않아……',
      ]);
      await urara.print_and_wait(
        '모두도 없어. 혼자만의 레이스는 뭔가 빠진 것 같아. 하지만 지금은 생각할 시간도 없어.',
      );
      await urara.print_and_wait(
        '그런데 코스에 들어서서 밖에서 쏟아지는 햇살을 받았을 때, 우라라는 다시 익숙한 응원 소리를 들었다.',
      );
      await urara.print_and_wait([
        '매 레이스마다 들리던 모두와 ',
        callname,
        '의 목소리다.',
      ]);
      await era.printAndWait('응원하는 사람들 「어이——우라라——!」');
      await urara.print_and_wait(
        '잘못 들었나? 하지만 목소리는 바로 근처야. 이렇게 또렷하면 환청은 아닐 거야.',
      );
      await urara.print_and_wait(
        '그쪽을 바라보자 기대하지도 않았던 상상이 곧바로 현실이 되었다.',
      );
      await urara.print_and_wait(
        '높이 든 응원 현수막 아래, 익숙한 얼굴들이 평소의 미소를 지으며 가장 가까운 곳에서 우라라를 기다리고 있었다.',
      );
      await era.printAndWait('응원하는 사람들 「어이——우라라——여기야——!」');
      await urara.say_and_wait('어? 다들…… 잠깐, 여기 홋카이도잖아!? 어떻게——');
      await urara.print_and_wait(
        '소란 너머로 우라라의 의문을 읽은 걸까. 우라라를 지지하는 모두가 각자의 마음을 전하기 시작했다.',
      );
      await era.printAndWait(
        '응원하는 사람들 「홋카이도든 어디든, 우라라에게 도움이 된다면 날아와야지!」',
      );
      await era.printAndWait(
        '상점가 사람 「그리고——우라라, 미안해! 전에는 우라라가 달리기만 해도 기쁘다는 말만 해서……」',
      );
      await era.printAndWait(
        '상점가 사람 「그건 우라라를 못 믿는 거나 마찬가지잖아. 응원도 되지 않아!」',
      );
      await urara.print_and_wait(
        '괜찮은데. 우라라가 계속 달리면 그러지 않아도 모두 분명……',
      );
      await era.printAndWait(
        '상점가 사람 「하지만 이제는 달라……! 우라라, 이겨라. 꼭 이기는 거야!」',
      );
      await urara.say_and_wait('……！');
      await era.printAndWait(
        '응원하는 사람들 「힘내라, 우라라! 넌 우리의 꿈을 짊어지고 있잖아!」',
      );
      await era.printAndWait(
        '응원하는 사람들 「우라라가 1착을 위해 달리는 모습을 보여 줘!」',
      );
      await urara.print_and_wait(
        '지금 우라라를 지지하는 한 사람 한 사람이, 그 일이 있은 뒤로 좀처럼 보이지 않던 미소를 지으며 달리기로 한 우라라를 진심으로 축복하고 있었다.',
      );
      await urara.print_and_wait([
        '모두의 격려 너머에서는,',
        callname,
        '가 인파 속에서 힘껏 손을 흔들고 있었다.',
      ]);

      era.printButton('「우라라! 미소! 잊었잖아!」', 1);
      await era.input();

      await urara.print_and_wait(
        '미소…… 역시 뭔가 잊고 있었어. 오늘 우라라는 웃는 걸 잊었구나?',
      );
      await urara.print_and_wait(
        '맞아! 모두 아직 기다리고 있어. 해결하지 못한 일이 있어도, 적어도 지금은 우라라가 멈추면 안 돼.',
      );
      await urara.say_and_wait('……응! 알았어. 우라라——꼭 이길게!');
      await urara.print_and_wait(
        '모두의 기대에 부응하고 싶어서, 우라라도 모두를 향해 외치듯 감사 인사를 보냈다.',
      );
      await urara.print_and_wait([
        '우라라, 미소를 되찾았을까? 스스로는 안 보이지만 모두와 ',
        callname,
        '의 안도하는 얼굴을 보니——',
      ]);
      await urara.print_and_wait(
        '지금 우라라는 다시 모두의 기대를 짊어진 얼굴이야!',
      );
    };
    f.title = title;
    return f;
  })(),
  elm_sta_win_s: (() => {
    const title = '더 강해질 거야!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '또 이겼네요. 우라라의 상태도…… 저까지 당신에게 필요 이상의 믿음이 생겨 버렸어요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '다만,',
        urara.sex,
        '의 상태는…… 일단 축하드려요. 애초에 탓할 일도 아니었어요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '원만하게 끝맺고 싶으시다면,',
        urara.sex,
        '와 끝까지 버텨 보세요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그 전에,',
        urara.sex,
        '의 미소까지 잃지는 마시고요.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '선수 통로에 들어서자마자 승리를 거머쥔 작은 ',
        urara.uma_sex_title,
        '는 몸의 피로도 아랑곳하지 않고 곧바로 ',
        you.get_colored_name(),
        ' 곁으로 뛰어들었다.',
      ]);
      await era.printAndWait([
        '모두를 모은 계획은 성공한 모양이다.',
        urara.get_colored_name(),
        '의 미소를 맞이할 생각에,',
        you.get_colored_name(),
        '도 담당에게 다가갔다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '가 ',
        urara.get_colored_name(),
        '에게 레이스 뛰느라 수고했다고 말하기도 전에, 작은 ',
        urara.uma_sex_title,
        '는 곧바로 손을 잡아끌며 무대 뒤쪽으로 달리기 시작했다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 볼일이 다 끝났으면 오늘 안에 돌아가자!',
      ]);

      era.printButton('「서두르지 마. 모처럼 1착이잖아. 일단 좀 쉴까?」', 1);
      await era.input();
      await era.printAndWait([
        urara.get_colored_name(),
        '의 이상을 알아차린 ',
        you.get_colored_name(),
        '는 황급히 걸음을 멈췄지만,',
        urara.get_colored_name(),
        '에게 끌려가다 하마터면 휘청일 뻔했다.',
      ]);
      await era.printAndWait([
        '놀라 고개를 들자,',
        you.get_colored_name(),
        '는 분명 ',
        urara.get_colored_name(),
        '의 미소를 보았다. 하지만 상상했던 평온하고 마음이 놓이는 미소와는 아직 거리가 멀었다.',
      ]);
      await urara.say_and_wait(
        '그래도 트레이닝이 더 중요하잖아? 연말까지 이제 시간도 얼마 안 남았어. 우라라, 더 강해져야 해!',
      );
      await era.printAndWait([
        '지금 ',
        urara.get_colored_name(),
        '의 미소에서 가장 두드러지는 건 평소의 즐거움보다…… 지친 공허함이었다.',
      ]);
      await urara.say_and_wait(
        '계속 이기면 모두 인정해 주겠지! 인정받으면 다들 더 기뻐할 거야!',
      );
      await urara.say_and_wait(
        '우라라가 본의 아니게 상처 준 사람들도, 분명, 분명……',
      );
      era.printButton('「우라라, 진정해. 급할수록 돌아가라는 말도 있잖아」', 1);
      await era.input();
      await urara.say_and_wait(
        '응? 우라라, 진정했어! 괜찮아! 이대로 돌아가서 트레이닝 계획을 짜자!',
      );
      await era.printAndWait([
        '「그럼 다음에도 1착을」,',
        urara.get_colored_name(),
        '의 시들어 가는 벚꽃빛 눈동자를 보니 그런 말은 할 수 없었다.',
      ]);
      await era.printAndWait([
        '모두 함께 ',
        urara.get_colored_name(),
        '를 격려하는 계획은 성공했다. 하지만 겉으로 드러난 증상은 나아졌어도 남은 마음의 병은 너무 깊다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 이전과 다르다. 지금의 ',
        urara.sex,
        '는 오직 목표를 위해 이기겠다는 마음을 확고히 품고 있다. 하지만 그만큼 스스로를 벼랑 끝으로 몰아붙이고 있다.',
      ]);
      await era.printAndWait([
        '지금 ',
        urara.get_colored_name(),
        '의 속도를 늦추지 못하면,',
        urara.sex,
        '는 돌아간 뒤 무작정 내달릴 것이다.',
      ]);
      await era.printAndWait([
        '하지만 지금 ',
        urara.sex,
        '의 마음을 가라앉히려면, 작은 ',
        urara.uma_sex_title,
        '가 다음에는 어떻게 달리고 싶은지부터 끝까지 들어 줄 수밖에 없다.',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          '괜찮아,',
          callname,
          ', 걱정하지 마.',
          callname,
          '에게 이기는 모습을 보여 줄게!',
        ]);
        await urara.say_and_wait(
          '지금의 우라라라면 G1도 쉽게 이길 수 있을지도 몰라! 그러니까 다음에도 G1에 도전하게 해 줘!',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '의 품으로 뛰어들려 한 뒤에도,',
          urara.get_colored_name(),
          '의 살아가려는 마음은 여전히 절박하게 밀려왔다. 하지만 미소는 드디어 평소 모습으로 돌아오기 시작했다.',
        ]);
      } else {
        await urara.say_and_wait(
          '괜찮아. 다음에도 모두와 함께 1착을 위해 달릴게!',
        );
        await urara.say_and_wait(
          '그러니까 다음에도 G1에 나가게 해 줘! 지금의 우라라라면 이길 수 있어!',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '의 허리를 살며시 안은 ',
          urara.get_colored_name(),
          '의 말은 아직 팽팽했지만, 표정은 조금 부드러워졌다.',
        ]);
      }
      await era.printAndWait([
        '강한 출전 의지를 스스로 입에 담았다.',
        urara.get_colored_name(),
        '의 성장은 상상보다 훨씬 앞서 나가고 있었다.',
      ]);
      await era.printAndWait([
        '물론,',
        urara.sex,
        '가 자신을 쥐어짜겠다는 전제로 한 말만 아니었다면,',
        you.get_colored_name(),
        '는 더 기뻐할 수 있었을 것이다.',
      ]);
      await era.printAndWait([
        '하지만 지금의 「열광」을 생각하면,',
        urara.sex,
        '의 말이 진심이라 해도,',
        you.get_colored_name(),
        '에게는 무거움만 남았다.',
      ]);

      era.printButton(
        '「『JBC 스프린트』를 추천할게. 다음까지 시간도 있어. 서둘러도 소용없잖아?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '어? 응……',
        callname,
        '가 그렇게 말한다면 우라라, 일단 참을게……',
      ]);
      await era.printAndWait([
        '더트, 단거리. 지금 ',
        urara.get_colored_name(),
        '에게는 1착 가능성이 높은 레이스다. 동시에 ',
        you.get_colored_name(),
        '가 시간을 벌려는 것이기도 하다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 만족했을까. 적어도 지금의 작은 ',
        urara.uma_sex_title,
        '는 진정했고, 무리해서 돌아가려 하지도 않았다.',
      ]);
      await era.printAndWait([
        '다만 이번에는,',
        you.get_colored_name(),
        '도 조금 걱정이 되었다.',
        urara.get_colored_name(),
        '와 삼 년 차의 마지막 몇 달을 무사히 넘길 수 있을지.',
      ]);
      await era.printAndWait(
        '성패는 여기에 달렸다. 버티면 돌파구가 생길 것이다. 온 힘을 다하자.',
      );
    };
    f.title = title;
    return f;
  })(),
  elm_sta_lose_s: (() => {
    const title = '더 열심히 할 거야!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait(
        '또 졌나요. 하지만 우라라의 상태는 나쁘지 않아요. 저까지 당신에게 필요 이상의 믿음이 생겨 버렸어요.',
      );
      await inner_urara.say_as_unknown_and_wait([
        '다만,',
        urara.sex,
        '의 상태는…… 일단 축하드려요. 애초에 탓할 일도 아니었어요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '원만하게 끝맺고 싶으시다면,',
        urara.sex,
        '와 끝까지 버텨 보세요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그 전에,',
        urara.sex,
        '의 미소까지 잃지는 마시고요.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '선수 통로에 들어서자마자 레이스를 마친 작은 ',
        urara.uma_sex_title,
        '는 몸의 피로도 아랑곳하지 않고 곧바로 ',
        you.get_colored_name(),
        ' 곁으로 뛰어들었다.',
      ]);
      await era.printAndWait([
        '모두를 모은 계획은 성공했을 것이다.',
        urara.get_colored_name(),
        '를 위로할 준비를 하며,',
        you.get_colored_name(),
        '도 담당에게 서둘러 다가갔다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '가 ',
        urara.sex,
        '에게 첫 위로의 말을 건네기도 전에, 작은 ',
        urara.uma_sex_title,
        '는 곧바로 손을 잡아끌며 무대 뒤쪽으로 달리기 시작했다.',
      ]);

      era.printButton('「왜 그래? 모처럼 다 달렸잖아. 일단 좀 쉴까?」', 1);
      await era.input();
      await era.printAndWait([
        urara.get_colored_name(),
        '의 이상을 알아차린 ',
        you.get_colored_name(),
        '는 황급히 걸음을 멈췄지만,',
        urara.get_colored_name(),
        '에게 끌려가다 하마터면 휘청일 뻔했다.',
      ]);
      await era.printAndWait([
        '놀라 고개를 들자,',
        you.get_colored_name(),
        '는 분명 ',
        urara.get_colored_name(),
        '의 미소를 보았다. 하지만 상상했던 평온하고 마음이 놓이는 미소와는 아직 거리가 멀었다.',
      ]);
      await urara.say_and_wait(
        '그래도 트레이닝이 더 중요하잖아? 연말까지 이제 시간도 얼마 안 남았어. 우라라, 더 강해져야 해!',
      );
      await era.printAndWait([
        '지금 ',
        urara.get_colored_name(),
        '의 미소에서 가장 두드러지는 건 평소의 즐거움보다…… 지친 공허함이었다.',
      ]);
      await urara.say_and_wait(
        '모두 우라라가 이기길 바랐어. 그런데 보답하지 못했어. 그러니까 지금 더 열심히 해야 해!',
      );
      await urara.say_and_wait([
        '그리고 스스로를 증명하지 못하면……',
        urara.sex,
        '도……',
        urara.sex,
        '도 우라라를 용서해 주지 않겠지……',
      ]);
      era.printButton('「우라라, 진정해」', 1);
      await era.input();
      await urara.say_and_wait(
        '응? 우라라, 진정했어! 괜찮아! 이대로 돌아가서 트레이닝 계획을 짜자!',
      );
      await era.printAndWait([
        '「그럼 다음에도 1착을」,',
        urara.get_colored_name(),
        '의 시들어 가는 벚꽃빛 눈동자를 보니 그런 말은 할 수 없었다.',
      ]);
      await era.printAndWait([
        '모두 함께 ',
        urara.get_colored_name(),
        '를 격려하는 계획은 성공했다. 하지만 겉으로 드러난 증상은 나아졌어도 남은 마음의 병은 너무 깊다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 이전과 다르다. 지금의 ',
        urara.sex,
        '는 오직 목표를 위해 이기겠다는 마음을 확고히 품고 있다. 하지만 그만큼 스스로를 벼랑 끝으로 몰아붙이고 있다.',
      ]);
      await era.printAndWait([
        '지금 ',
        urara.get_colored_name(),
        '의 속도를 늦추지 못하면,',
        urara.sex,
        '는 돌아간 뒤 무작정 내달릴 것이다.',
      ]);
      await era.printAndWait([
        '하지만 지금 ',
        urara.sex,
        '의 마음을 가라앉히려면, 작은 ',
        urara.uma_sex_title,
        '가 다음에는 어떻게 달리고 싶은지부터 끝까지 들어 줄 수밖에 없다.',
      ]);
      if (high_relation) {
        await urara.say_and_wait([
          '괜찮아,',
          callname,
          ', 걱정하지 마. 다음엔 우라라가 이길게.',
        ]);
        await urara.say_and_wait(
          '그리고 지금은 더 많은 사람에게 우라라를 인정받아야 하잖아? 그러니까 다음에도 G1에 도전하게 해 줘!',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '의 품으로 뛰어들려 한 뒤에도,',
          urara.get_colored_name(),
          '의 살아가려는 마음은 여전히 절박하게 밀려왔다. 하지만 미소는 드디어 평소 모습으로 돌아오기 시작했다.',
        ]);
      } else {
        await urara.say_and_wait(
          '괜찮아. 다음 기회도 있잖아! 졌으니까 더더욱 방심하면 안 되지?',
        );
        await urara.say_and_wait(
          '그러니까 다음엔 G1에 나가게 해 줘! 지금은 모두에게 인정받아야 해.',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '의 허리를 살며시 안은 ',
          urara.get_colored_name(),
          '의 말은 아직 팽팽했지만, 표정은 조금 부드러워졌다.',
        ]);
      }
      await era.printAndWait([
        '강한 출전 의지를 스스로 입에 담았다.',
        urara.get_colored_name(),
        '의 성장은 상상보다 훨씬 앞서 나가고 있었다.',
      ]);
      await era.printAndWait([
        '물론,',
        urara.sex,
        '가 자신을 쥐어짜겠다는 전제로 한 말만 아니었다면,',
        you.get_colored_name(),
        '는 더 기뻐할 수 있었을 것이다.',
      ]);
      await era.printAndWait([
        '하지만 지금의 「열광」을 생각하면,',
        urara.sex,
        '의 말이 진심이라 해도,',
        you.get_colored_name(),
        '에게는 무거움만 남았다.',
      ]);

      era.printButton(
        '「『JBC 스프린트』를 추천할게. 다음까지 시간도 있어. 서둘러도 소용없잖아?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '어? 응……',
        callname,
        '가 그렇게 말한다면 우라라, 일단 참을게……',
      ]);
      await era.printAndWait([
        '더트, 단거리. 지금 ',
        urara.get_colored_name(),
        '에게는 1착 가능성이 높은 레이스다. 동시에 ',
        you.get_colored_name(),
        '가 시간을 벌려는 것이기도 하다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 만족했을까. 적어도 지금의 작은 ',
        urara.uma_sex_title,
        '는 진정했고, 무리해서 돌아가려 하지도 않았다.',
      ]);
      await era.printAndWait([
        '다만 이번에는,',
        you.get_colored_name(),
        '도 조금 걱정이 되었다.',
        urara.get_colored_name(),
        '와 삼 년 차의 마지막 몇 달을 무사히 넘길 수 있을지.',
      ]);
      await era.printAndWait(
        '성패는 여기에 달렸다. 버티면 돌파구가 생길 것이다. 온 힘을 다하자.',
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '여름 합숙(시니어급) 종료';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} accept_sex 性愛を受け入れるか
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      accept_sex,
      arim_kin,
    ) => {
      await urara.say_and_wait([
        callname,
        ', 지금 우라라, 전보다 더 강해졌어?',
      ]);
      await era.printAndWait([
        '트레이닝 도중 쉬는 시간, 오후의 백사장에 앉은 ',
        urara.get_colored_name(),
        '는 곁에 있는 ',
        you.get_colored_name(),
        '와 함께 저물기 시작한 햇살을 바라보고 있었다.',
      ]);

      era.printButton(
        '「물론이지. 지금의 우라라는 강해. 다만 더 중요한 게 부족해」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '무리해서 너무 강해져 버린 작은 ',
        urara.uma_sex_title,
        '에게,',
        you.get_colored_name(),
        '는 그래도 솔직하게 말하기로 했다.',
      ]);
      await era.printAndWait([
        '지금 ',
        urara.get_colored_name(),
        '에게는 이길 조건이 갖춰져 있다. 하지만 ',
        you.get_colored_name(),
        '는 그 일이 아직 끝나지 않았다는 것도 알고 있다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 원래 컨디션을 되찾았다. 하지만 돌아온 것은 겉으로 보이는 「달릴 수 있는」 상태뿐이다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '가 그날 밤 ',
        urara.sex,
        '에게 건넨 말을,',
        urara.get_colored_name(),
        '가 이해하지 못했다기보다는 답이 그렇게 간단하다는 걸 아직 믿지 못하는 것이겠지.',
      ]);
      await era.printAndWait([
        '이 아이도 엉뚱한 데서 고집이 세졌다며 ',
        you.get_colored_name(),
        '는 투덜거리려 했다. 하지만 서투르게 자라는 것 역시 성장의 일부라고 생각을 고쳐먹었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 솔직한 평가를 듣고,',
        urara.get_colored_name(),
        '는 작게 고개를 끄덕이며 여름 바닷바람보다 가느다란 목소리로 물었다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 얼마 전 그 일, 자세한 내용은 얼마나 기억해?',
      ]);

      era.printButton(
        '「잊을 수 있을 리가 없잖아. 왜 물어? 또 무슨 일 있어?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '……우라라, 나중에 ',
        urara.sex,
        '를 계속 찾아다녔어. 같은 반 친구들 말로는,',
        urara.sex,
        ', 역시 먼 곳으로 갔대.',
      ]);
      await urara.say_and_wait([
        '그런데 같은 반 친구들이 그랬어.',
        arim_kin,
        ' 때,',
        urara.sex,
        '도 우라라에게 한 표 주겠다고 했대.',
      ]);
      await urara.say_and_wait(
        '『그렇게 심한 말을 했으니 용서해 달라고는 안 할게. 하지만 사실은 우라라가 아리마에 나갔으면 좋겠어』.',
      );
      await urara.say_and_wait(
        '모두 그렇게 전해 줬어. 하지만 그 사람이 그렇게 말해도, 우라라는 남의 꿈을 가볍게 여겼잖아……',
      );

      era.printButton(
        `「그렇다면 ${urara.sex}는 처음부터 우라라를 탓하려던 게 아니었던 거 아닐까」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '우라라도 계속 그렇게 생각했어. 하지만 본의 아니게 상처를 줘서, 더는 달리지 않았으면 하는 사람도 더 있을 거야……',
      );

      era.printButton(
        '「그러니까 우라라는 처음부터 잘못하지 않았어. 그런 부정적인 감정을 혼자 떠안지 않는 게 좋아——」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '그래도 부정당하더라도 우라라는 모두의 미소를 짊어지고 싶어. 우라라를 향한 악의만이라도 좋아.',
      );
      await urara.say_and_wait(
        '지난 레이스가 끝나고 생각했어…… 에헤헤~ 이런 말 하면 미움받으려나?',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '도 예상하지 못한 대답을 한 뒤, 흠뻑 젖은 작은 ',
        urara.uma_sex_title,
        '는 요즘 보기 드물어졌지만 아직 희망을 품은 미소를 지었다.',
      ]);

      era.printButton(
        '「……그렇게 귀여운 『미움받는 역할』의 우라라라면 더 있어도 좋겠네」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '미소 아래 아직 남은 그늘을 바라보며,',
        you.get_colored_name(),
        '는 어쩔 수 없다는 듯 물방울이 맺힌 ',
        urara.teen_sex_title,
        '의 머리 위로 수건을 덮어 주었다.',
      ]);

      era.printButton(
        '「하지만 너무 많이 짊어지면 무너져. 처음부터 준비가 안 돼 있던 우라라는 지금 어때?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '어?',
        callname,
        ', 우라라 친구 같은 소리 하지 마! 우라라, 괜찮다니까——',
      ]);
      await era.printAndWait([
        '그래, 그래,',
        urara.get_colored_name(),
        '는 괜찮지. 작은 ',
        urara.uma_sex_title,
        '의 부드러운 귀와 작은 얼굴을 주무르며,',
        you.get_colored_name(),
        '는 조용히 한숨을 내쉬었다.',
      ]);
      await era.printAndWait([
        '또 예상대로 부정한다. 하지만 그렇다.',
        urara.get_colored_name(),
        ' 스스로 이 벽을 넘지 못하면 남이 무슨 말을 해도 소용없다.',
      ]);
      await urara.say_and_wait([
        '으으——',
        callname,
        '가 아직 못 믿겠다면……',
        callname,
        ', 그날 밤 했던 말, 적어 둬!',
      ]);
      await era.printAndWait('뭐? 갑자기 무슨……');
      await urara.say_and_wait([
        '지금은 아직 잘 모르겠지만, 딱 맞는 때에 ',
        callname,
        ' 말을 들으면 우라라, 분명 다시 일어설 수 있어!',
      ]);
      await you.say_and_wait(
        [
          '정말 이해하지 못한 건가. 딱 맞는 때는 또 언제란 말인가. 하지만 ',
          urara.get_colored_name(),
          '가 그렇게 말한다면,',
          urara.sex,
          ' 나름의 생각이 있겠지. 일단 적어 두자……',
        ],
        true,
      );
      await era.printAndWait(
        '어느새 대화는 끝나고 침묵이 다시 둘을 감쌌다. 하지만 적어도 지금은 이 느낌이 나쁘지 않다.',
      );
      await era.printAndWait([
        '다만, 지금의 ',
        urara.sex,
        '는 어떤 미래를 생각하고 있을까.',
      ]);
      era.drawLine();
      await urara.print_and_wait(
        '하지만 지금 우라라가 무슨 생각을 하는지 알면, 아무도 칭찬해 주지 않을 거야.',
      );
      await urara.print_and_wait([
        '지금의 우라라는 남의 행복을 빼앗기만 하는 걸지도 몰라. 하지만 그 생각을,',
        callname,
        '에게는 말할 수 없어.',
      ]);
      await urara.print_and_wait([
        callname,
        '가 우라라 때문에 울적해하는 얼굴을 떠올리면, 우라라도 속이 온통 우울해져서 내가 아닌 것 같아져.',
      ]);
      await urara.print_and_wait([
        '우라라가 ',
        callname,
        '에게 어떤 마음을 품고 있든, 우라라는 ',
        callname,
        ' 곁을 떠나고 싶지 않아.',
        callname,
        '가 슬퍼하지 않았으면 좋겠어.',
      ]);
      if (high_relation) {
        await urara.print_and_wait([
          callname,
          '에게 몸을 기대기만 해도 생각보다 따뜻한 느낌이 심장 소리와 함께 조금씩 전해져 와.',
        ]);
        await urara.print_and_wait(
          '안심이 돼. 지금 내 꿈을 내려놓고 한 사람의 품에 정박하면, 그대로 쭉 잠들 수 있을 것 같아.',
        );
        await urara.print_and_wait([
          '인정받으려고 노력할 필요도 없어. 비난받을 일도 없어.',
          callname,
          '와 모두의 사랑에 잠겨 있으면 돼……',
        ]);
      } else {
        await urara.print_and_wait([
          callname,
          ' 곁에서 몸을 웅크리면 다른 사람의 체온과 심장 소리가 느껴져.',
        ]);
        await urara.print_and_wait([
          callname,
          ' 품속은 분명 안심되겠지. 우라라 자리도 있어? 우라라가 안심하고 잠들 자리.',
        ]);
        await urara.print_and_wait([
          '무언가를 포기하면,',
          callname,
          '의 사랑을 받을 수 있을까? 신경 쓰지 않으면 모두도 계속 우라라를 응원해 줄 거야……',
        ]);
      }
      await urara.print_and_wait([
        '하지만 그건 절대 아니야.',
        callname,
        '와 모두를 배신하는 일이고, 나도 후회할 거야.',
      ]);
      await urara.print_and_wait([
        '우라라도 ',
        callname,
        '처럼 믿음직한 어른이 되면 좋겠다.',
        callname,
        '라면 우라라보다 훨씬 잘할 텐데.',
      ]);
      await urara.print_and_wait(
        '지쳤어. 그래도 우라라는 멈출 수 없어. 그러니까 조금만이라도 좋아. 좀 더 기대게 해 줘. 그러니까……',
      );
      await urara.say_and_wait([
        callname,
        '、帰る前に……ウララ、『大人の抱擁』、もらっていい？',
      ]);
      if (era.get('love:52') >= 50) {
        await urara.print_and_wait([
          'ウララの突然のお願いを聞いて、',
          callname,
          ' は一瞬眉を寄せて、少し揺れた顔をした。ウララの要求、やりすぎだった？',
        ]);

        era.printButton('「ウララ、やっぱりお前は……」', 1);
        await era.input();

        await urara.print_and_wait([
          'ん？',
          callname,
          '、もうウララの考え、わかってた？でも、それはもういい——',
        ]);
        await urara.print_and_wait(
          'もう普通の関係じゃないし、今のウララは、昔みたいなただの子どもでもない。',
        );
        await urara.print_and_wait([
          callname,
          ' はまだ断りきれない。今のウララも、',
          callname,
          ' に簡単には断らせない。',
        ]);
      } else {
        await urara.print_and_wait([
          'ウララの突然のお願いを聞いて、',
          callname,
          ' は案の定びっくりした。本当の恋人でも、こんな唐突なお願いはしないよね。',
        ]);

        era.printButton('「ウララ、それでもそれは……！」', 1);
        await era.input();

        await urara.print_and_wait([
          'え？',
          callname,
          '、もうウララの考え、見抜いてた？でも、それはもういい——',
        ]);
        await urara.print_and_wait([
          callname,
          ' なら、こうしてもいいってウララは思う。だからウララは、絶対に ',
          callname,
          ' に断らせない。',
        ]);
        await urara.print_and_wait([
          '恋人じゃなくてもいい。ウララに教えて……',
          callname,
          ' が、自分の担当をどれだけ好きか。',
        ]);
      }
      await urara.print_and_wait(
        '大丈夫。これからウララは、みんなの幸せのために進む。だから少なくとも今は、ウララを抱きしめて……',
      );
      await urara.say_and_wait(
        'ウララ、よくなるよ？すぐよくなる……だから、まずは抱っこからでいい？',
      );
      await urara.print_and_wait([
        '指一本で、言いかけた ',
        callname,
        ' の唇をそっと押さえただけなのに、',
        callname,
        ' はすぐ抵抗をなくした。',
      ]);
      await urara.print_and_wait([
        callname,
        ' と担当の抱っこだけだから、みんなの前の砂浜でこうして抱き合っても、大丈夫だよ？',
      ]);
      await urara.print_and_wait([
        '正面から ',
        callname,
        ' の膝に跨がり、緊張で固い首をそっと抱いて、ウララは体を ',
        callname,
        ' にぴったり寄せた。',
      ]);
      await urara.print_and_wait([
        callname,
        '、すぐ焦るよね。薄い布の向こうが、担当の柔らかい全部だから。',
      ]);
      await urara.print_and_wait([
        'あ、大人の匂いに当てられたのかな。ウララ、胸のそっちまで、先が立っちゃった……',
      ]);
      await urara.print_and_wait(
        'でも、まだだめだよ？いつもの「抱っこ」を何度もしてるだけだから、はみ出したことはしちゃだめ？',
      );
      await urara.print_and_wait(
        'ウララ、体が熱くてくらくらしても我慢してるよ？キスもだめ！だって、見られるもん～',
      );
      if (era.get('talent:52:乳房尺寸') > 0) {
        await urara.print_and_wait([
          '豊かな柔らかい実を ',
          callname,
          ' にそっと押し当てると、しびれる快感が立った先から全身へ広がる。',
        ]);
        await urara.print_and_wait([
          callname,
          ' も、ここ好きでしょ？こんなに大きくなってから、',
          callname,
          ' の目、いつもウララのここ、長く止まるんだよ。',
        ]);
        await urara.print_and_wait(
          'だから触ってみて？何気なくウララの胸に手を置いて、周りに視線がないとき、そっと搾る……',
        );
        await urara.print_and_wait([
          'はっん～！母乳まで出ちゃった……もう、そんな力で、',
          callname,
          '、子どもじゃないのに！',
        ]);
      }
      if (you.sex_code > 0) {
        await urara.print_and_wait([
          'あ、なんか硬いのがウララのお腹に当たってる……みんなの言うとおり、',
          callname,
          '、えっちだね～',
        ]);
        await urara.print_and_wait(
          'ウララ、知ってるよ？手で軽く揉んだら、白いのでウララ、全身べたべたになる。',
        );
        await urara.print_and_wait([
          'でも人前で大人を挑発しちゃだめだから、今 ',
          callname,
          ' がお願いしても、ウララは触らないよ？',
        ]);
      }
      if (you.sex_code !== 1) {
        await urara.print_and_wait([
          '今は ',
          callname,
          ' の胸まで立ってる。くっついて ',
          callname,
          ' の首を噛むとき、ちょうど柔らかさがわかる。',
        ]);
        await urara.print_and_wait(
          '歯と唇で胸と首に印を残しても、人には見えにくい。でも声が大きすぎるとだめだよ？',
        );
        await urara.print_and_wait([
          'もしウララがこっそり ',
          callname,
          ' の胸の先、二粒を噛んだら、',
          callname,
          '、どんな可愛い声出すのかな？',
        ]);
      }
      await urara.print_and_wait([
        callname,
        ' のぼんやりした顔は、驚きのほうが多い？それとも怖さ？どっちでも、',
        callname,
        ' はもう口が利けない。',
      ]);
      await urara.print_and_wait([
        'それに ',
        callname,
        ' が話せないなら、ウララのお願いも断れない。えへへ～ウララ、天才だね～',
      ]);
      await urara.print_and_wait([
        'どれくらい経ったんだろう。ウララと ',
        callname,
        '、くっついてほとんど離れられない体が、やっと名残惜しそうに離れた。',
      ]);
      await urara.print_and_wait([
        'ねだるのをいったん止めても、',
        callname,
        ' の目に映る欲に濡れた桜色の瞳は、夕日の下でまだ燃えてる……',
      ]);
      await urara.print_and_wait([
        callname,
        ' が断りきれなかったなら、ウララも',
        urara.sex,
        'の ',
        callname,
        ' を、そんなに簡単には逃がさない。',
      ]);
      await urara.say_and_wait([
        callname,
        '、ウララ、本当におかしい。だから普通に戻るまで、ただの愛、ずっとちょうだい？',
      ]);
      await urara.say_and_wait(
        '初めて会ったときみたいに……ウララを、心配のないいい子で、満たして……？',
      );
      await urara.say_and_wait([
        callname,
        '、みんなに見えないところ、行く？でも今なら、',
        callname,
        ' が断ってもいいよ……？',
      ]);
      you.say('……');
      era.printButton(`${urara.sex}の願いを受けてもいい……（恋慕+5）`, 1, {
        disabled: !accept_sex,
      });
      era.printButton(
        `지금이라면 아직 ${urara.sex}을(를) 밀어낼 수 있다……(호감+20)`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          'えへへ～',
          callname,
          '、やっぱり断れなかったね。じゃあウララと、おいで？',
        ]);
        await urara.print_and_wait([
          '断りきれなかった ',
          callname,
          ' を、人のいない隅へ引っ張って、ウララは薄い水着をそっと剥いだ。',
        ]);
        if (urara.sex_code !== 1) {
          if (era.get('exp:52:性爱次数') - era.get('exp:52:睡奸次数') >= 10) {
            await urara.print_and_wait([
              '気づいたら下、もうびしょびしょ。でもウララがどれだけえっちになっても、',
              callname,
              ' は断らないでしょ？',
            ]);
            await urara.print_and_wait([
              'そう。好きな人を悦ばせる技も、好きな人を見るとぼーっとなる頭も、全部 ',
              callname,
              ' が望んだ姿だよ？',
            ]);
            await urara.print_and_wait([
              '見て？見られるだけで服の上から立っちゃう乳首も、今もう止まらずに垂れてる幼い穴も、全部 ',
              callname,
              ' のせい……',
            ]);
          } else {
            await urara.print_and_wait([
              callname,
              ' に見られるだけで、下がこんなに濡れちゃう。',
              callname,
              '、ウララをどんな子にするの？',
            ]);
            await urara.print_and_wait([
              'でも ',
              callname,
              ' が好きなら、ウララのどこが欲しくても、',
              callname,
              ' の一番好きなおもちゃにしていいよ？',
            ]);
            await urara.print_and_wait(
              'ウララも決めたから。この体を、育ててくれた変態な大人に、あげたい……',
            );
          }
          await urara.print_and_wait([
            '裸のまま ',
            callname,
            ' に腕を開いて、ウララはママの真似で、注いでほしい子どもを抱きしめた。',
          ]);
          await urara.print_and_wait([
            'だから……',
            callname,
            ' が甘えたいなら、ウララが普通に戻る前に、早く抱いて？',
          ]);
          if (urara.sex_code !== 1) {
            await urara.print_and_wait([
              callname,
              ' にだけ喘ぐ唇も、',
              callname,
              ' にだけ弄ばせる二つの穴も、',
              callname,
              ' のためだけに孕む子宮も……',
            ]);
          }
          await urara.print_and_wait([
            callname,
            ' だけの体、全部の寸、いっぱいにしてね？',
          ]);
        }
      } else {
        await urara.say_and_wait([
          '……えへへ～',
          callname,
          '、断っちゃった？大人って、変なこだわりあるよね……',
        ]);
        await urara.say_and_wait(
          'じゃあその代わり、ウララの埋め合わせに、もっと抱き合おう？',
        );
        await urara.print_and_wait([
          callname,
          ' に意外と断られたけど、もっと驚いた顔が見られて、ウララは満足そうに笑った。',
        ]);
        await urara.print_and_wait([
          'ウララを断った ',
          callname,
          ' への仕返しに、のろまな太陽が沈むまで、ウララは離さない。',
        ]);
        await urara.print_and_wait('ウララが普通に戻るまで、離さないよ……');
      }
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  before_jbc_cls_s: (() => {
    const title = '지고 싶지 않으니까!';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} join_arim_kin_c ウララがクラシック年の有馬記念に出たか
     * @param {number} fans ファン数
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      join_arim_kin_c,
      fans,
    ) => {
      await urara.print_and_wait(
        '이 긴 터널을 벗어나면 아리마 기념까지 이제 몇 정거장만 남았을 거야.',
      );
      await urara.print_and_wait([
        '미소만으로 ',
        callname,
        '를 믿게 해 버렸어. 우라라, 이제 나쁜 아이가 됐네.',
      ]);
      await urara.print_and_wait([
        '그래도 괜찮아. 이기면 ',
        callname,
        '에게 사과하고, 그다음 푹 자면 돼. 이 레이스만 넘기면 돼.',
      ]);
      await urara.print_and_wait(
        '우라라…… 우라라는 누구에게도 지지 않아! 지금 우라라는 누구에게도 지고 싶지 않아. 지금 우라라는 누구에게도 질 수 없어!',
      );
      await urara.print_and_wait(
        '지지 않아…… 지지 않아…… 지지 않아…… 모두 아직 우라라를 기다리니까. 우라라는 아직 스스로를 증명해야 하니까……',
      );
      await urara.print_and_wait(
        '이러면 우라라도 용서받을 수 있겠지. 이러면 모두에게 인정받고 무대에 설 수 있어……',
      );
      await urara.print_and_wait(
        '몸이 무거워. 그래도 우라라는 달릴 수 있어. 가슴이 아파. 그래도 미소를 지으면 아무도 걱정하지 않아도 돼.',
      );
      await urara.print_and_wait(
        '무서워…… 나, 어떻게 되는 걸까? 우라라는 지금 정말 모두를 위해 여기 서 있는 걸까?',
      );
      await urara.print_and_wait('하지만 적어도 이번만큼은 꼭 이기게 해 줘……');
      era.drawLine();
      await you.say_and_wait(
        ['우라라를 내보내지 말았어야 했을지도 모른다. 하지만 이미 늦었나.'],
        true,
      );
      await you.say_and_wait(
        [
          urara.uma_sex_title,
          '들은 이미 게이트에 들어갔다. 트레이너는 담당을 배웅할 수밖에 없다.',
          urara.sex,
          '가 이 고비를 무사히 넘기기를.',
        ],
        true,
      );
      await you.say_and_wait(
        [
          '왜 우라라에게 속았을까? 마음 한구석에서 우라라가 보여 주는 겉모습을 아직 믿고 있었기 때문이겠지……',
        ],
        true,
      );
      await you.say_and_wait(
        '우라라는 아직 용기를 내지 못하고, 자신이 선택한 길이 줄곧 옳았다는 걸 믿지 못하는 걸까.',
        true,
      );
      await you.say_and_wait(
        [
          '너무나 다정한 ',
          urara.sex,
          '는 아직 남의 힘이 없으면 닫혀 가는 마음을 열지 못하는 걸까. 아니면,',
          urara.sex,
          '는 자신의 미래를 두려워하는 걸까……',
        ],
        true,
      );
      if (join_arim_kin_c && fans >= 25000) {
        await you.say_and_wait(
          [
            '내 탓일까. 조짐이 보였을 때 ',
            urara.sex,
            '를 말리지 않아서, 우라라를 자신이 다치는 것조차 신경 쓰지 않는 아이로 만들어 버렸다.',
          ],
          true,
        );
        await you.say_and_wait(
          [
            '이미 정상 바로 앞까지 왔는데. 나도 ',
            urara.sex,
            '도 변해 가는 동안 「미소」의 의미를 잊은 걸까……',
          ],
          true,
        );
      } else {
        await you.say_and_wait(
          [
            '내 탓일까. 내 실수 때문에,',
            urara.sex,
            '를 거의 스스로 무너질 지경까지 몰아붙였다.',
          ],
          true,
        );
        await you.say_and_wait(
          [
            '처음 만났을 때 내가 더 훌륭한 트레이너였다면.',
            urara.sex,
            '가 더 훌륭한 트레이너를 만났더라면……',
          ],
          true,
        );
      }
      await you.say_and_wait(
        '이제 와서 이런 터무니없는 상상을 입에 담아 봐야 소용없다.',
        true,
      );
      await you.say_and_wait(
        [
          '우라라가 이미 코스에 선 지금은,',
          urara.sex,
          '가 무너질 듯한 자신을 붙들고 이 레이스를 넘길 거라고 믿을 수밖에 없다.',
        ],
        true,
      );
      await you.say_and_wait(
        [
          '여기까지 왔으니 트레이너로서 더더욱 침착함을 잃어서는 안 된다. 상황이 아무리 나빠져도,',
          urara.sex,
          '를 도울 수 있는 건 나뿐……',
        ],
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_win_s: (() => {
    const title = '앞으로, 앞으로……';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.print_and_wait(
        '방금 옆을 지나간 거, 결승선 표지 맞지…… 우라라, 이겼어?',
      );
      await urara.print_and_wait(
        '다행이다. 오늘 우라라도 누구에게도 지지 않았어. 우라라, 모두에게 인정받았어? 모두 분명 기쁘겠지?',
      );
      await urara.print_and_wait(
        '오늘 컨디션, 역시 좋네. 몸은 조금 둔하지만 이제 안 아파. 온몸의 불쾌한 느낌도 사라졌어……',
      );
      await urara.print_and_wait(
        '그런데 다들 눈빛이 왜 이상해? 지금 우라라 얼굴이 많이 안 좋아서?',
      );
      await urara.print_and_wait(
        '괜찮아. 우라라, 조금 어지러울 뿐이야. 금방 웃을 테니까 다들 걱정하지 마……',
      );
      await urara.print_and_wait([
        '……',
        callname,
        '! 오늘도 우라라, 1착이야! 무서웠고 싫었지만 우라라가 이겼어!',
      ]);
      await urara.print_and_wait(
        '그러니까 그렇게 무서운 얼굴 하지 마. 울타리를 뛰어넘으면 위험해. 모두도 웃어 줘……',
      );

      era.printButton('「우라라! 괜찮아? 내 목소리 들려?——?!」', 1);
      await era.input();

      await urara.print_and_wait([
        callname,
        ', 너무 걱정하는 거 아냐? 우라라, 조금 지쳤을 뿐이야. 그렇게 급하게 달려오지 않아도 되는데……',
      ]);
      await urara.print_and_wait([
        '그런데,',
        callname,
        ' 목소리, 점점 작아지지 않아? 왜 우라라는,',
        callname,
        ' 말이 점점 안 들리는 거야?',
      ]);
      await urara.print_and_wait(
        '이상해. 왜 손이 안 올라가지? 왜 발이 안 움직이지? 왜 몸에 감각이 없지?',
      );
      await urara.print_and_wait(
        '이상해. 왜 시야가 좁아지는 거지? 왜 하늘이 어두워지는 거지?',
      );
      await urara.print_and_wait('이상해. 왜 목소리가 안 나오지?');
      await urara.print_and_wait('……');
      await urara.print_and_wait(
        '……아파, 어두워…… 우라라, 넘어진 거야? 무슨 일이야……',
      );
      await urara.print_and_wait(
        '……무서워…… 모두 우라라를 두고 가는 거야? 싫어……',
      );
      await urara.print_and_wait('……우라라, 아직 달릴 수 있는데……');
      await urara.print_and_wait(['……', callname, '……']);

      era.drawLine();
      await inner_urara.print_and_wait('무대 한가운데의 주인공에게:');
      await inner_urara.print_and_wait(
        '무대 소품으로 만든 날개는 역시 너무 약했네요. 하지만 추락해도 괜찮잖아요?',
      );
      await inner_urara.print_and_wait(
        '무섭다면 자신의 마음속으로 숨으세요. 지쳤다면 지친 꽃을 시들게 두면 돼요.',
      );
      await inner_urara.print_and_wait(
        '불안하다면 믿을 만한 사람에게 보호를 구하세요. 더는 버틸 수 없다면 도망쳐도 아무도 탓하지 않아요.',
      );
      await inner_urara.print_and_wait(
        '괜찮아요. 전 언제든 우라라를 지킬 거예요. 언제까지나. 진작 약속했잖아요?',
      );
      await inner_urara.print_and_wait('막 너머의 트레이너에게:');
      await inner_urara.print_and_wait([
        '아쉽네요. 조금만 더 가면 됐는데. 날개가 녹아 버려,',
        urara.sex,
        '는 결국 평범한 다른 사람과 같은 모습이 되었어요.',
      ]);
      await inner_urara.print_and_wait([
        '하지만 당신 탓은 아니에요. 당신과 ',
        urara.sex,
        '가 너무 무리했을 뿐이죠. 양분을 다 써 버렸잖아요?',
      ]);
      await inner_urara.print_and_wait(
        '그리고 말씀드렸죠. 이야기를 이어 쓸 권리는 제가 쥐겠다고요.',
      );
      await inner_urara.print_and_wait(
        '탓하지 않겠다고 말씀드렸어요. 다만 다음에 제대로 이야기할 때는 마음의 준비를 해 주세요.',
      );
    };
    f.title = title;
    return f;
  })(),
  jbc_cls_lose_s: (() => {
    const title = '앞으로, 앞으로……';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.print_and_wait(
        '레이스가 벌써 끝난 거야? 그렇다는 건…… 우라라가 또 진 걸까?',
      );
      await urara.print_and_wait(
        '이러면 안 되는데. 돌아가면 꼭 제대로 훈련해야지. 다음엔 분명 또 기회가 있을 거야……',
      );
      await urara.print_and_wait(
        '게다가 몸 상태도 회복됐어. 몸이 이제 아프지 않아. 온몸이 괴롭던 느낌도 다 사라졌어……',
      );
      await urara.print_and_wait(
        '근데 다들 왜 그렇게 이상한 눈으로 보는 걸까? 지금 우라라 표정이 너무 엉망이라서 그런가?',
      );
      await urara.print_and_wait(
        '괜찮아, 우라라는 그냥 조금 어지러울 뿐이야. 금방 웃어 보일 테니까 다들 걱정하지 마……',
      );
      await urara.print_and_wait([
        '……',
        callname,
        '! 오늘도 우라라, 끝까지 달렸어! 무서웠고 싫었지만 우라라, 레이스를 마쳤어!',
      ]);
      await urara.print_and_wait(
        '그러니까 그렇게 무서운 표정 짓지 마. 그렇게 경기장 울타리를 넘으면 위험하단 말이야. 다들 웃어줘……',
      );

      era.printButton('「우라라! 괜찮아? 내 목소리 들려?! ──?!」', 1);
      await era.input();

      await urara.print_and_wait([
        callname,
        ', 걱정이 너무 심해. 우라라는 그냥 좀 지친 것뿐이니까 그렇게 서둘러 달려오지 않아도……',
      ]);
      await urara.print_and_wait([
        '그런데, 왠지 ',
        callname,
        '의 목소리가 점점 작아지는 것 같아. 왜 우라라는 점점 ',
        callname,
        '가 무슨 말을 하는지 들리지 않는 걸까?',
      ]);
      await urara.print_and_wait(
        '이상해, 왜 손이 안 올라가지? 왜 다리가 안 움직여? 왜 내 몸이 느껴지지 않는 거야?',
      );
      await urara.print_and_wait(
        '이상해, 왜 시야가 점점 좁아지지? 왜 하늘이 점점 어두워지는 거야?',
      );
      await urara.print_and_wait('이상해, 왜 말이 안 나오지?');
      await urara.print_and_wait('……');
      await urara.print_and_wait(
        '……너무 아파, 너무 캄캄해…… 우라라가 넘어진 걸까? 대체 무슨 일이……',
      );
      await urara.print_and_wait(
        '……무서워…… 우라라는 이제 모두에게 버려지는 거야? 싫어……',
      );
      await urara.print_and_wait('……우라라는 분명 더 달릴 수 있는데……');
      await urara.print_and_wait(['……', callname, '……']);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_1: (() => {
    const title = (inner_urara) => [
      '「',
      inner_urara.get_colored_sex(),
      '」의 소원',
    ];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await you.say_and_wait(
        '무슨 일이지. 밤에는 방에서 잤을 텐데. 여기는…… 학원의 세 여신상 앞? 왜 여기서 자고 있지.',
        true,
      );
      await you.say_and_wait(
        '머리가 아프다. 어젯밤 몽유병이라도 도진 걸까. 하지만 옷차림은 단정하다. 지금 시간은…… 벌써 이렇게 됐나.',
        true,
      );
      await you.say_and_wait(
        '뭔가 잊은 것 같다. 하지만 오늘은 더 중요한 일이 있다. 놓친 것은 나중에 생각하자.',
        true,
      );
      await you.say_and_wait(
        '먼저 트레센에서 우라라와 만나야 한다. 오늘은 반드시……',
        true,
      );
      era.drawLine();
      era.printButton(
        '「우라라, 월말이면 아리마 기념이야. 지금 몸은 괜찮아?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '그러니까 이제 괜찮다니까! 지금 우라라, 하나도 안 아파!',
      );
      await urara.say_and_wait([
        callname,
        ', 오늘은 병원에 다시 안 데려가도 되지? 그날은 컨디션이 나빠서 넘어졌을 뿐이야!',
      ]);

      era.printButton(
        '「그거 다행이네. 그래서 오늘은 우라라의 몸을 진찰받으러 온 게 아니야.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '텅 빈 넓은 복도에 두 사람의 발소리만 떠돈다.',
        you.get_colored_name(),
        '와 우라라는 병원의 조용하고 단조로운 흰 풍경 속을 걸어간다.',
      ]);
      await era.printAndWait([
        '우라라가 코스에서 쓰러진 뒤 기적적으로 이상이 없다는 판정을 받고 나서, 정기적인 병원 방문은 최근 두 사람의 일상이 되었다.',
      ]);
      await era.printAndWait([
        '또래들이 번거로운 검사와 소독약 냄새를 싫어하듯 우라라도 매번 작게 불평했다.',
      ]);
      await era.printAndWait([
        '……적어도 처음에는 그랬다. 어느 날,',
        you.get_colored_name(),
        '는 눈에 잘 띄지 않는 구석에서 누군가 버린 작은 동물을 발견했다.',
      ]);
      await era.printAndWait([
        '잊힌 듯한 병실 문을 열고,',
        you.get_colored_name(),
        '는 곁에 있는 「하루 우라라」를 방 한가운데 놓인 침대 앞으로 데려갔다.',
      ]);
      await era.printAndWait([
        '하얀 병상에서 몸을 웅크린 벚꽃빛 ',
        urara.teen_sex_title,
        '가 귀와 꼬리를 살짝 흔들며 건강하고 고른 숨을 내쉬는 채 조용히 자고 있다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '의 침대 곁에는 의료 기기가 없다. 등교라도 하려는 듯 트레센 교복을 입었고, 분홍 리본도 방금 맨 것처럼 단정하다.',
      ]);
      await era.printAndWait([
        '평일에 늦잠을 자는 작은 ',
        urara.uma_sex_title,
        '로만 보이는 그 아이는, 지금 ',
        you.get_colored_name(),
        ' 곁에서 입을 다문 「',
        urara.sex,
        '」와 조금도 다르지 않다.',
      ]);

      era.printButton(
        '「쓰러지기 전에는 누가 봐도 상태가 이상했어. 그런데 일어나니까 아무 일도 없었다는 듯 몸도 마음도 건강하더군.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '하얀 시트 위에 웅크린 또 하나의 벚꽃빛을 바라보며,',
        you.get_colored_name(),
        '는 고개도 들지 않고 곁의 「',
        urara.sex,
        '」와 이야기를 이어 갔다.',
      ]);
      await era.printAndWait([
        '상대의 얼굴을 보지 않아도,',
        you.get_colored_name(),
        '는 최근 계속 곁에 있었던 「',
        inner_urara.get_colored_actual_name(),
        '」가 누구인지 진작 짐작하고 있었다.',
      ]);

      era.printButton(
        `「우라라가 튼튼한 아이인 건 맞지만,${urara.sex}가 당근 히어로였던 기억은 없는데.」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '분위기와 표정이 뒤바뀌었다. 병상 가장자리에 앉은,',
        urara.get_colored_name(),
        '를 닮은 「',
        urara.sex,
        '」는 위장을 벗고 근심 어린 본모습을 드러냈다.',
      ]);
      await inner_urara.say_as_unknown_and_wait('……언제 알아차리셨나요?');

      if (high_relation) {
        era.printButton(
          '「태도가 너무 눈에 띄게 달라졌어. 처음에는 우라라가 화난 줄 알았는데, 너무 오래가더라고.」',
          1,
        );
        await era.input();
        await you.say_and_wait(
          [
            '함께해 줘서 고마워. 하지만 흉내는 아직 조금 부족하네. 미안해,',
            urara.get_colored_name(),
            '가 이렇게 돼서 너도 힘들겠지……',
          ],
          true,
        );
        await era.printAndWait([
          '「',
          urara.get_colored_actual_name(),
          '」보다 훨씬 어두운 벚꽃빛 눈동자를 올려다보며,',
          you.get_colored_name(),
          '는 ',
          urara.sex,
          '와 눈을 맞췄다.',
        ]);
      } else {
        era.printButton(
          '「처음에는 알아차리지 못했어. 하지만 위화감은 있었지. 요즘 우라라도 무척 고립된 것처럼 보였고.」',
          1,
        );
        await era.input();
        await you.say_and_wait(
          '게다가 나도 많이 잘못했잖아. 네가 여기까지 할 필요는 없었을 텐데.',
          true,
        );
        await era.printAndWait([
          '죄책감으로 지친 얼굴을 문지른 뒤,',
          you.get_colored_name(),
          '는 그래도 그 어두운 벚꽃빛 눈동자를 마주했다.',
        ]);
      }
      await inner_urara.say_as_unknown_and_wait(
        '하지만 이렇게 할 수밖에 없었어요. 이제 마지막이에요. 우라라가 쓰러졌다는 걸 알려서는 안 돼요. 더 복잡해질 테니까요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '게다가 제가 그러지 않으면 당신이 무슨 짓을 할지 모르잖아요. 우라라가 깨어났을 때 당신이 없으면 곤란해요.',
      );
      await era.printAndWait([
        '곁에서 아직 잠든 ',
        urara.get_colored_name(),
        '를 쓰다듬자, 「',
        urara.sex,
        '」의 표정도 아이를 달래는 어머니처럼 부드러워졌다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        urara.sex,
        '도 마찬가지예요.',
        urara.sex,
        '는 언제까지 주무실 건가요. 아직 아리마에 나가실 거잖아요. 얼른 일어나세요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        callname,
        '도 이제 당신을 찾았어요. 이대로 일어나지 않으면 제가 언제 사라질지도 모른다고요?',
      ]);

      era.printButton(
        `「……사라진다고? 넌 실재하고, 완전히 ${urara.sex}인 것도 아니잖아. 그래도 『보이지 않는 친구』는 사라지는 거야?」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '의 나직한 물음에, 「',
        urara.sex,
        '」는 다시 눈앞의 ',
        you.get_colored_name(),
        '에게 돌아서서, 평소처럼 슬픔이 읽히는 미소를 지었다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '그런 예감이 들 뿐이에요. 저도 진짜가 아니라 누군가의 조각, 누군가의 그림자일지 모르죠.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '그러니 마지막에 우라라가 몸도 마음도 건강하게 이야기를 마칠 수 있다면, 제가 사라져도 괜찮아요.',
      );

      era.printButton(
        '「너도 진정해. 참견이 심하고 지배욕이 강한 건 인정하지만, 자신을 그렇게 단정하는 건 지나쳐.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '겉모습은 작은 ',
        urara.uma_sex_title,
        ' 그 자체인데 비관적인 말만 한다. 눈앞의 광경은 보기 괴로울 정도다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        'そうでしょうか。くどい',
        urara.sex_code === 1 ? 'ショタ' : 'ロリ',
        'コンの',
        you.adult_sex_title,
        '（あなた）に、まだ突っ込まれたくはありませんよ。',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '의 대답을 듣자,',
        urara.sex,
        '의 미소에서 자조적인 슬픔이 조금 줄었다. 그래도 자신을 부정하던 화제는 거의 그대로 둔 채 넘어갔다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '아까 하던 이야기를 이어 가자면……',
        urara.sex,
        '가 쓰러진 뒤 문득 생각났어요. 제가 잠시 ',
        urara.sex,
        '의 몸을 빌려,',
        urara.sex,
        ' 대신 계속 달릴 수 있을지도 모른다고요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그래서 잠시 ',
        urara.sex,
        '의 정신을 숨겼어요. 찾을 수 없을 줄 알았는데, 결국 당신에게 들키고 말았네요.',
      ]);
      await era.printAndWait([
        '「',
        urara.sex,
        '」가 ',
        urara.get_colored_name(),
        '를 쓰다듬던 손이 작은 ',
        urara.uma_sex_title,
        '의 몸속으로 천천히 가라앉았다. 영사기가 비추는 영상을 통과하듯이.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '게다가 이건 문제를 해결하는 방법도 아니에요. 제가 아리마에 가 봐야 의미는 없으니까요……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '그런데도 ',
        urara.sex,
        '는 잠든 채 아무것도 못 하는 제게 계속 달리는 법을 알려 줬어요. 그래서 지금까지 연기할 수 있었죠.',
      ]);

      era.printButton(
        '「우라라가 왜 이렇게 됐을까…… 그 질문은 스스로 생각해 봐야 할지도 모르겠네……」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        '하지만 분명히 말씀드릴게요. 당신 곁에서,',
        urara.sex,
        '는 자신이 무섭다는 것조차 잊고 있었어요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그래서 완전히 깨어난 ',
        urara.sex,
        '가 맨 처음 한 일은 숨는 것이었어요.',
        urara.sex,
        ' 자신도 언제 깨어날지 모르는 마음 깊은 곳으로요.',
      ]);
      await era.printAndWait([
        '그래서 「착한 아이는 자기 마음을 어느 정도 놓친다」는 거였구나…… 그래서 「',
        urara.sex,
        '」는 항상,',
        urara.get_colored_name(),
        '가 그만큼 강하지 않다고 말했던 것이다.',
      ]);
      await era.printAndWait(
        '너무 다정해서 남을 상처 입히는 게 무섭다. 남의 험담이 무섭다. 마음이 변하는 게 무섭다. 마침내 자신의 승리와 소원마저 무섭다.',
      );
      await era.printAndWait(
        '남에게 폐를 끼치기 싫어서 누구에게도 털어놓지 않는다. 너무 오래 외면한 탓에 막힌 마음은 점점 더 굳어진다.',
      );
      await era.printAndWait(
        '自己否定のあとの静けさを撫でたいあまり、理性をなくして傍の指導者に体の慰めまで求めてしまう……',
      );
      await era.printAndWait([
        '곤란하군. 이런 평가는 하고 싶지 않지만, 공감 능력이 너무 높아 마음이 꼬여 버린 이 우마무스메는 대체 ',
        urara.sex,
        '네 집안의 누구를 닮은 걸까.',
      ]);

      era.printButton(
        `「그래도 더 일찍 알아차리지 못했어. 우라라의 소원이 무거워진 건 ${urara.sex} 자신의 선택이기도 하지만, 나도……」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        '당신은 충분히 하셨어요. 게다가 우라라에게 정말 냉정해질 수 있나요? 당신이 곁에 없었다면,',
        urara.sex,
        '는 진작 꺾였을 거예요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '오히려 당신은 계속 옳았어요. 맺은 사람이 풀어야 하는 법이죠. 우라라는 스스로 『깨어나지』 못하고, 남도 마음의 매듭을 풀어 줄 수 없어요……',
      );

      era.printButton(
        `「그러니까 ${era.get('love:52') >= 75 ? '연인' : '친구'}로서도, 트레이너로서도, 결국 진정한 도움은 되지 못했다는 거야?!」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '는 곁의 협탁을 내리치고 싶었다. 하지만 ',
        urara.get_colored_name(),
        '의 평온한 옆얼굴을 보니 떨리는 손을 내리칠 수 없었다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '당신도 겉보기만큼 침착하지는 않군요. 뭐, 지금은 둘 다 비슷하네요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '능력이 늘 조금 부족하고 세상을 뒤흔들지도 못하는 평범한 트레이너. 아무것도 못 하면서 남에게 행복을 억지로 안겨 주려는 환상……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '……그리고 말없이 우리를 탓하는 듯한, 깨어나지 못하는 ',
        urara.sex,
        '. 모든 게 엉망진창이네요.',
      ]);

      era.printButton(
        `「무슨 소리야. 넌 ${urara.sex}의 불쌍한 트레이너에게 꽤 심한 짓도 했잖아?」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '그래서 이제는 더 하지 않을 거예요. 이야기의 결말은 제 손에 쥐겠다고 말씀드렸죠.',
      );

      era.printButton(
        '「이렇게 됐으니 더더욱 우라라를 포기할 수 없어. 네가 날 쫓아낼 수는 없어.」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '그렇게 경계하지 마세요. 쫓아내지 않을 거예요. 오히려 전 작은 잠자는 공주를 깨울 방법을 알고 있답니다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 경계가 대부분이고 당혹감이 조금 섞인 시선에, 「',
        urara.sex,
        '」는 오히려 가장 온화한 미소를 지었다. 그 태도가 더욱 ',
        you.get_colored_name(),
        '의 경보를 울렸다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '당신도 보셨잖아요. 쓰러진 우라라는 자기 피난처의 가장 깊은 곳으로 숨었어요……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '그렇다면 그 피난처의 풍경을 현실로 만들면, 우라라는 행복하게 깨어나 행복하게 살아갈 수 있겠죠?',
      );
      await inner_urara.say_as_unknown_and_wait([
        '그게 지금 제가 쓰는 결말이에요. 그리고 그게 우라라가 당신에게 ',
        urara.sex,
        '를 찾게 한 목적이기도 하고요.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '가 뒤로 물러선 순간, 주변 공간이 곧 익숙한 회백색으로 물들고 정체된 압박감이 다시 위에서 내려왔다.',
      ]);
      await era.printAndWait([
        '줄곧 침대 가장자리에 앉아 있던 「',
        urara.sex,
        '」가 일어서더니,',
        you.get_colored_name(),
        '가 거두려던 손을 붙잡고,',
        urara.uma_sex_title,
        '의 힘으로 손쉽게 병상 위로 끌어 넘어뜨렸다.',
      ]);
      await era.printAndWait([
        '시야가 뒤집히는 사이,',
        you.get_colored_name(),
        '는 두 그림자가 점점 하나로 녹아드는 ',
        urara.get_colored_name(),
        '가 천천히 눈을 뜨는 것을 보았다——',
      ]);
      era.drawLine();
      await inner_urara.print_and_wait([
        '今の姿、あなたとウララが出会ったときによく似ていませんか。物忘れの激しい',
        urara.sex_code === 1 ? 'ショタ' : 'ロリ',
        'コンの',
        you.adult_sex_title,
        '（あなた）。',
      ]);
      await inner_urara.print_and_wait(
        '왜 그렇게 무거운 눈빛을 하시나요. 아, 죄송해요. 지금 당신은 말을 할 수 없었지요. 지금의 저도 마찬가지예요.',
      );
      await inner_urara.print_and_wait([
        '그래요. 왜 당신일까요. 왜 ',
        urara.sex,
        '가 그렇게 무서워하면서도 함께 나아가려는 상대가, 하필 당신일까요.',
      ]);
      await inner_urara.print_and_wait(
        '저는 왜 이 이야기를 쓰는 걸까요. 당신은 왜 이 이야기를 끝내는 걸까요. 왜 이것이 우리들의 이야기일까요.',
      );
      await inner_urara.print_and_wait(
        '제 문제도 산더미인데, 지금 저는 그저 당신을 바라보고만 싶어요. 처음 당신에게 끌린 건 저였는지도 모르겠네요……',
      );
      await inner_urara.print_and_wait(
        '다행이에요. 당신의 몸은 예전처럼 따뜻하네요. 조금은 편안해지셨나요.',
      );
      await inner_urara.print_and_wait(
        '大丈夫です。触れても侵しても、あなたに惹かれた二人はもう離れません。だから、もう少し正直でもいいのですよ？',
      );
      await inner_urara.print_and_wait(
        'なぜ避けるのです。こんな幸福を受けたくないからですか。残念ですが、今のあなたに拒む権利はありません。',
      );
      await inner_urara.print_and_wait(
        '걱정하지 마세요. 우라라도, 당신도, 모두도 기뻐할 수 있는 세상을 만들 거예요.',
      );
      await inner_urara.print_and_wait(
        '내일 당신은 아무것도 기억하지 못할 거예요. 하지만 다음에 눈을 뜨면 우라라는 행복하게 당신 곁으로 돌아와 있을 거예요.',
      );
      await inner_urara.print_and_wait('그럼 푹 주무세요.');
      era.drawLine();
      await era.printAndWait([
        '악몽에서 벌떡 깨어난 ',
        you.get_colored_name(),
        '는 둔하게 아픈 이마를 짚고 흐릿한 시야로 주위를 둘러보았다.',
      ]);
      await era.printAndWait(
        '여기는 학원의 세 여신상 앞 벤치인 것 같다. 왜 여기서 자고 있었지. 방금 뭘 하려던 거였지.',
      );
      await era.printAndWait([
        '꽤 무서운 꿈을 꾼 것 같다. 하지만 ',
        you.get_colored_name(),
        '는 아무리 해도 내용을 하나도 떠올릴 수 없다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 앞에 서 있는 건 얼마나 기다렸는지 모르는데도 여전히 웃고 있는 ',
        urara.get_colored_name(),
        '。',
      ]);

      era.printButton('「잠들어서 미안해. 우라라, 오늘 병원에는 갔어……」', 1);
      await era.input();

      await you.say_and_wait(
        [
          '병원……? 왜 병원 얘기를 하는 거지. 눈앞의 담당은 건강하기만 한데, 왜 ',
          urara.sex,
          '를 병원에 데려가려 한 거지.',
        ],
        true,
      );
      await era.printAndWait(
        '이상해. 어딘가 이상해. 중요한 걸 잊고 있어. 하지만…… 뭘……?',
      );
      await urara.say_and_wait([
        '어? 병원?',
        callname,
        ', 잠이 덜 깼어? 우라라, 아직 건강검진 안 받아도 돼!',
      ]);
      await era.printAndWait([
        '비현실적일 만큼 부드러운 햇살을 등진 채, 활짝 웃는 ',
        urara.get_colored_name(),
        '가 그늘 속에서 반쯤 깨어난 ',
        you.get_colored_name(),
        '에게 도움의 손길을 내밀었다.',
      ]);

      era.printButton('「응, 아, 그렇네. 미안해. 정말 잠이 덜 깼나 봐——」', 1);
      await era.input();

      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '가 ',
        urara.get_colored_name(),
        '의 내민 손을 잡았을 때, 넓은 학원은 풀과 나무까지 소리를 잃고 있었다——',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_2: (() => {
    const title = '「공허」의 갈망';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        '는 어떻게 생각해? 우라라의 소원은 모두의 달리기에 걸맞아?',
      ]);
      await urara.say_and_wait([
        callname,
        '는 어떻게 생각해? 우라라의 소원은 모두의 도움에 걸맞아?',
      ]);
      await urara.say_and_wait([
        callname,
        ' 손은 우라라보다 훨씬 크네. 한 손만으로도 우라라 목을 감쌀 수 있어.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 두 손을 우라라 목에 올리고 힘껏 눌러 줄래?',
      ]);
      await urara.say_and_wait([
        callname,
        ', 모두 앞에 나서기 부끄러워 도망친 우라라를 네 인형으로 만들어 줘——',
      ]);
      era.drawLine();
      await era.printAndWait([
        '몇 번째인지 모를 악몽에서 벌떡 깨어난 ',
        you.get_colored_name(),
        '는 세 여신상 앞 벤치에서 둔하게 아픈 이마를 짚었다.',
      ]);
      await era.printAndWait(
        '오늘도 영문 모를 곳에서 눈을 떴다. 주위는 여전히 무서울 만큼 고요하다.',
      );
      await era.printAndWait(
        '사람이 사라진 것은 아니다. 주변 공간이 멈춘 것처럼 배경의 잡음만 사라져 있다.',
      );
      await era.printAndWait(
        '가장 괴로운 건 그게 아니다. 이번 주에 들어선 뒤로 시간도 말 그대로 멈춰 있다.',
      );
      await era.printAndWait(
        '길가의 시계뿐 아니라 손목시계, 휴대폰, 컴퓨터까지. 눈에 보이는 시간 표시는 모두 같은 순간에 멈춰 있다.',
      );
      await era.printAndWait(
        '다른 사람에게 시간을 묻는 방법만은 아직 통한다. 그래서 당장은 평범한 생활을 유지하고 있다.',
      );
      await era.printAndWait(
        '그렇기에 정상적인 시간 감각도 공간 감각도 잃은 뒤에도 평소대로 살아가는 다른 사람들이 오히려 이상해 보인다.',
      );
      await era.printAndWait([
        '상식적으로 보면 내가 미친 것이다. 지금 ',
        you.get_colored_name(),
        '에게는 세상과 내가 함께 미쳤다는 쪽이 더 가깝다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 악몽도, 주변의 기묘한 변화도 모두 이상하다. 그런데 왜 이렇게 됐는지는 잊고 있다……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '가 무거운 고개를 들려던 순간, 마음속의 희미한 위화감이 갑자기 커졌다——',
      ]);
      await era.printAndWait([
        '위화감과 함께 기시감도 찾아왔다.',
        you.get_colored_name(),
        ' 앞에 서 있는 건 얼마나 기다렸는지 모르는데도 여전히 웃고 있는 ',
        urara.get_colored_name(),
        '。',
      ]);
      await urara.say_and_wait([
        callname,
        '! 오늘은 같이 놀러 가기로 했잖아? 왜 또 여기서 자고 있어? 피곤해——',
      ]);

      era.printButton('「우라라, 지금 얼마나 지났어?」', 1);
      await era.input();

      await era.printAndWait([
        '갑자기 고개를 들어 ',
        urara.get_colored_name(),
        '의 인사를 끊은 뒤, 마침내 무슨 일이 일어나고 있는지 깨달은 ',
        you.get_colored_name(),
        '는 진지한 눈으로 ',
        urara.get_colored_name(),
        '를 바라보았다.',
      ]);
      await urara.say_and_wait([
        '아,',
        callname,
        ', 요즘 맨날 시간을 묻네. 그래도 그렇게 오래 잔 건 아니야! 어디 보자……',
      ]);

      era.printButton(
        `「오늘 시간이 아니야. 우라라, 네 ${callname}가 묻는 건 『시간이 멈춘 뒤로 얼마나 지났느냐』는 거야.」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('——');
      await era.printAndWait([
        '소리 없는 폭우가 지나간 듯 긴 침묵이 흐른 뒤,',
        urara.get_colored_name(),
        '는 벤치 반대편에 조용히 앉았다.',
      ]);
      await era.printAndWait([
        '다만 이번에는,',
        urara.sex,
        '의 작은 얼굴에 평소의 미소는 없고, 잘못을 저지른 아이 같은 미안함만 있었다.',
      ]);
      await urara.say_and_wait('미안해. 우라라도 이게 몇 주째인지 모르겠어……');
      await urara.say_and_wait([
        '『',
        urara.sex,
        '』가 여기는 얼마든지 있어도 된다고 했으니까. 그런데…… 역시 ',
        callname,
        '는 기억해 내는구나……',
      ]);
      await urara.say_and_wait(
        '우라라, 이러면 안 된다는 거 알아. 그런데도 거짓된 나날에 빠져 있어……',
      );
      await era.printAndWait([
        urara.sex,
        '는 이번에야말로 뭔가 착각한 모양이다. 애초에 ',
        you.get_colored_name(),
        '는 무언가 떠올랐기 때문에 ',
        urara.sex,
        '에게 물은 게 아니었다.',
      ]);

      era.printButton(
        '「사실 지금도 아무것도 기억나지 않아. 갑자기 어딘가 이상하다는 걸 깨달았을 뿐이야. 최근에 또 무슨 일 있었어?」',
        1,
      );

      await urara.say_and_wait([
        '없어. 다만,',
        callname,
        '가 뭔가 떠올릴 때마다 『',
        urara.sex,
        '』가 나와서 ',
        callname,
        '의 기억을 가져가니까……',
      ]);
      await era.printAndWait(
        '생각해 보면 당연하다. 저 과보호하는 보호자가 불안 요소를 내버려 둘 리 없다. 지금은 철저한 대비에 어쩌다 빈틈 하나가 생긴 것이겠지.',
      );
      await era.printAndWait([
        '게다가 ',
        you.get_colored_name(),
        '도 이 기회를 절대 놓치지 않을 것이다. 적어도 지금의 ',
        urara.get_colored_name(),
        '는 「지난달」보다 훨씬 정상적이다. 지금이라면……',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '가 입을 열기도 전에,',
        urara.get_colored_name(),
        ' 쪽이 먼저 가장 가까운 어른에게 애원하는 눈길을 보냈다.',
      ]);
      await urara.say_and_wait([
        '도망치지 말라고 ',
        callname,
        '는 분명 말하겠지. 하지만…… 우라라는 아직 여기 조금만 더 있고 싶어……',
      ]);

      era.printButton(
        `「지금의 모든 게 우라라의 친구가 ${urara.sex}를 위해 만든 종이 모형 세상이라는 걸 알면서도?」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '하지만 여기 있으면 정말 안심이 돼.',
        callname,
        '도 알잖아? 설령……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '가 말을 끊고 침묵하자,',
        you.get_colored_name(),
        '는 한숨을 내쉬며 그 뒤를 이었다.',
      ]);

      era.printButton(
        '「우라라, 내가 꾸는 이상한 꿈…… 내용은 말하지 않을게. 전부 실제로 있었던 일이지?」',
        1,
      );
      await era.input();

      await urara.say_and_wait('응……');
      await era.printAndWait([
        '예상은 맞았다. 하지만 ',
        urara.get_colored_name(),
        '가 인정한 순간, 오히려 마주하고 싶지 않아졌다.',
        urara.get_colored_name(),
        '는…… 그렇게 뒤틀린 「취향」을 가진 아이였나.',
      ]);

      era.printButton(
        `「마지막에는 매번 자기 ${callname}에게 상처받아도 괜찮다는 거야? 스스로를 그런 꼴로 만들지 마.」`,
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '그치만 우라라는 무서워. 언젠가 우라라가 실패하면. 언젠가 더는 일어서지 못하면……',
      );
      await urara.say_and_wait([
        '그래서 언젠가 모두도 ',
        callname,
        '도 우라라 곁에 없어지면……',
      ]);
      await urara.say_and_wait(
        '……아니야. 그런 일은 안 생긴다는 거, 우라라도 알아. 그런데도 무서워서 도망쳤어……',
      );
      await urara.say_and_wait('그건……');

      era.printButton(
        '「그건 원래 우라라에게 아무래도 좋은 일이 아니었기 때문이겠지. 하지만 전부 너무 무겁게 받아들였어. 조금은 힘을 빼는 게 좋아.」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '하지만,',
        callname,
        '는 우라라와 쭉 함께 있고 싶지 않아?',
        callname,
        ' 한 사람만이라도 만족시킬 수 있다면……',
      ]);

      era.printButton(
        '「그러면 우라라와 네 소극적인 친구가 하려는 일이 뭐가 달라.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '금방이라도 울 것 같은 ',
        urara.get_colored_name(),
        '의 눈을 똑바로 바라보며,',
        you.get_colored_name(),
        '는 마음이 꺾일 듯한 기분을 억누르고 다시 입을 열었다.',
      ]);
      await era.printAndWait([
        '적어도 이번에는 전과 다르다. 게다가,',
        urara.get_colored_name(),
        '의 ',
        callname,
        '는 이제 더는,',
        urara.get_colored_name(),
        '가 「',
        urara.sex,
        '」와 같은 비관적인 얼굴을 하는 것을 보고 싶지 않다.',
      ]);

      era.printButton(
        `「지금 우라라는 ${callname}가 맡긴 희망만 보고 있을지도 몰라. 하지만 내 희망은 우라라의 내일을 보는 거야.」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        '이번에도 햇살 아래였다. 다만 이번에는 각오를 다진 ',
        you.get_colored_name(),
        '가 눈빛이 밝아지는 ',
        urara.get_colored_name(),
        '에게 손을 내밀었다. 줄곧 이래 왔던 것 아닌가.',
      ]);
      await era.printAndWait(
        '아무리 헤매더라도 미래는 함께 넘어설 수 있다. 끝이 가까워졌더라도. 아무 결실 없는 침묵보다는 다시 한번 서로를 믿자.',
      );

      era.printButton(
        '「결과는 그다음이야. 난 언제나 우라라 뒤에 있을게. 그러니 모두에게도 보여 주자. 우라라가 아리마 기념에서 달리는 모습을.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '자신의 트레이너를 바라본 ',
        urara.get_colored_name(),
        '는 벤치에서 일어설 용기를 조금 되찾고, 손가락을 살며시 ',
        you.get_colored_name(),
        '의 손 위에 포갰다.',
      ]);
      await urara.say_and_wait([
        '그럼……',
        callname,
        ', 같이 『',
        urara.sex,
        '』에게 사과하러 가도 돼?',
      ]);

      era.printButton(
        `「물론이지. 게다가 ${inner_urara.sex}에게는 나도 하고 싶은 말이 산더미처럼 많거든.」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('응! 그럼 그렇게 하자……');
      await era.printAndWait([
        '그 뒤 시야가 회백색 압박감으로 물들고,',
        you.get_colored_name(),
        ' 앞에 있던 작은 ',
        urara.uma_sex_title,
        '를 「',
        urara.sex,
        '」가 강제로 대신했다. 화가 난 나머지,',
        you.get_colored_name(),
        '가 ',
        urara.get_colored_name(),
        '에게 내밀었던 손을 쳐 냈다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '잠시만 눈을 떼도 끼어드시는군요. 우라라를 몰아붙여서 무슨 의미가 있죠?',
        urara.sex,
        '의 소원을 지켜 주면 되잖아요.',
      ]);

      era.printButton(
        '「무슨 버섯처럼 말하지 마. 게다가 함께 사과하러 가기로 했잖아. 얼마나 속이 좁은 거야.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '자신을 겨냥한 「',
        urara.sex,
        '」를 앞에 두고,',
        you.get_colored_name(),
        '는 어쩔 수 없이 털을 곤두세운 분홍빛 새끼 고양이와 거리를 벌렸다.',
      ]);

      era.printButton(
        '「그리고 잘 생각해 봐. 지금 상황을 가장 불안해하는 것도 우라라가 아니라……」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        '맞아요! 그래서 싫은 거예요! 당신도 우라라도,',
        urara.sex,
        ' 주변 사람들도, 모두 똑같아요!',
      ]);
      await era.printAndWait([
        '참을 만큼 참은 끝의 폭발이었다. 한 발 내디디며,',
        you.get_colored_name(),
        '의 옷을 거세게 움켜쥔 ',
        urara.teen_sex_title,
        '가 울면서 마음 밑바닥에 쌓인 세상을 향한 염증을 토해 냈다.',
      ]);
      await era.printAndWait(
        '어느새 주위에서 유리를 깨뜨리는 듯한 날카로운 소리가 무수히 울려 퍼졌다. 눈물이 떨어질 때마다 배경 같던 세계도 산산이 부서졌다.',
      );
      await era.printAndWait([
        '이상의 한가운데 서 있어도 이제 막기에는 늦었다. 「',
        urara.sex,
        '」에게 끌려가면서도,',
        you.get_colored_name(),
        '는 침착하게 말을 이었다.',
      ]);

      era.printButton('「……싫다고 하면서도 넌 계속 우라라를 도와줬잖아?」', 1);
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        '그래요. 왜 그랬을까요.',
        urara.sex,
        '가 지는 걸 보고,',
        urara.sex,
        '에게 소원을 버리게 했으면 됐는데!',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그랬다면 ',
        urara.sex,
        '는 집으로 돌아가 평범하게 살 수 있었어…… 아니, 처음부터 ',
        urara.sex,
        '가 말을 걸었을 때 거절했으면 됐어요!',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '처음부터,',
        urara.sex,
        '의 미소에 마음이 흔들리지 않았으면 됐는데. 하지만 그건 저 자신의 선택이었어요……',
      ]);
      await era.printAndWait([
        '지금의 ',
        urara.sex,
        '를 어떻게 표현해야 할까. 모든 것을 거부하는 슬픔과 분노, 그 너머에 있는 것은…… 질투일까, 무력감일까.',
      ]);
      await era.printAndWait([
        '솔직해지지 못하는 ',
        urara.sex,
        '는 주위를 혐오하면서도, 아무것도 할 수 없는 탓에 세상에 대한 미련까지 품고 있다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '맞아요. 다시는 돕지 않을 거예요. 하나같이 바보들뿐이라……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '『희망과 번뜩임』이라는 공허함에 모든 걸 걸고, 그렇게 빼앗으려 들죠. 실패하면 전부 끝이잖아요?!',
      );

      era.printButton(
        '「인생은 한 번뿐이야. 내일로 나아가지 않는다고 과거에 붙들어 둘 수도 없어. 지금 네가 하는 일도 마찬가지야——」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '하! 당신은 아직도 부족한가요? 우라라는 당신을 위해 제가 꿈도 꾸지 못한 1착을 몇 번이고, 몇 번이고 해냈다고요!',
      );
      await inner_urara.say_as_unknown_and_wait(
        '여기까지 와서! 사심 없는 소원을 위해 나아가다 또 남을 상처 입힐 바에야 조금 욕심을 부려도 되잖아요!',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 말을 거칠게 끊은 ',
        urara.teen_sex_title,
        '가 눈물 속에서 억지로 지은 미소는 망가진 인형처럼 애처로웠다.',
      ]);
      await era.printAndWait([
        '이미 ',
        urara.sex,
        '에게 옷이 조여 숨이 막히는데도,',
        you.get_colored_name(),
        '는 또다시 ',
        urara.sex,
        '의 「모두 버리겠다」는 의지에 따를 생각은 없었다.',
      ]);

      era.printButton(
        `「우라라가 달리는 건 애초에 나를 위해서가 아니야. 이제 와서 그걸 내 뜻대로 이용하면,${urara.sex}의 노력은 전부 물거품이 돼.」`,
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '둘러대지 마세요! 물거품이 된다는 건 우라라인가요, 아니면 당신의 사업인가요?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '전…… 처음부터 당신을 사랑했는데…… 결국 당신도 다른 사람들과 똑같아요……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '우라라에게 계속 노력하게 해서, 또 남과 자신을 상처 입히게 할 바에는 지금 당장, 지금 당장……',
      );
      await era.printAndWait([
        '자신의 눈물에 말이 막혀 힘없이 ',
        you.get_colored_name(),
        '의 옷을 놓은 ',
        urara.teen_sex_title,
        '는 자포자기한 채 뒤쪽 벤치에 다시 앉았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '를 물리쳤다기보다는, 지금의 작은 ',
        urara.uma_sex_title,
        '는 쓰러질 듯한 ',
        urara.get_colored_name(),
        '와 마찬가지로 자신의 뒤틀림에 짓눌릴 지경이었다.',
      ]);

      era.printButton('「역시 가장 무서워하는 건 너였구나……」', 1);
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '……미안해요…… 계속 심한 짓만 해서…… 하지만 정말 무서워요……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '당신은 언제나 옳고, 옳은 답을 곧바로 말하죠. 미움받는 저는 절대로 당신이 바라는 모습이 될 수 없어요……',
      );
      await era.printAndWait(
        '아무것도 믿지 않으면서 사랑만은 뒤틀린 채 믿고 있다. 실로 세상에 둘도 없는 난제다.',
      );
      await era.printAndWait([
        '어떻게 답해야 할까. 이렇게 슬프고 세상을 싫어하는 사람에게 사랑받는 나는,',
        urara.sex,
        '가 받아들일 수 있도록 무슨 약속을 해야 할까.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '역시 아무 말도 안 하시는군요…… 마지막만큼은 제 고집에 조금쯤 응해서 거짓말로라도 남겠다고 해 주실 줄 알았는데……',
      );
      await urara.say_and_wait([
        '아니야! 네 마음이 너무 뜨거워서 원래 『시원시원』했던 ',
        callname,
        '가 『우물쭈물』하게 됐을 뿐이야!',
      ]);
      await era.printAndWait([
        '부서지는 소리가 정지와 흐름의 경계를 흐린다. 지금 ',
        you.get_colored_name(),
        ' 곁에 서 있는 건 언제 왔는지 모를 벚꽃빛 존재다.',
      ]);
      await era.printAndWait([
        '영웅의 등장인가. 적어도 이번에는,',
        urara.get_colored_name(),
        '는 드디어 ',
        you.get_colored_name(),
        '와 나란히 「',
        urara.sex,
        '」 앞에 섰다.',
      ]);
      await era.printAndWait(
        '아쉬운 것은 달려오자마자 자기 트레이너가 「우물쭈물하게 됐다」고 말하는 영웅도 있다는 점이다.',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '를 보자, 울어서 눈이 부었는데도 「',
        urara.sex,
        '」는 동생 앞에서 강한 척하는 언니처럼 눈물을 닦았다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '하아…… 결국 우라라도 모두의 영웅이 되고 싶은 거군요…… 당신은 참…… 맨 앞에서 달리는 게 그렇게 아름다운가요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '처음에 모두가 말했듯 즐겁게 자기답게 지내면 됐잖아요. 정말 그들을 구할 수 있다고 생각하나요?',
      );
      await era.printAndWait([
        '또 다른 자신이 다그치자,',
        urara.get_colored_name(),
        '는 오히려 처음 ',
        you.get_colored_name(),
        '와 이야기할 때보다 각오를 굳혔다.',
      ]);
      await urara.say_and_wait(
        '우라라는 그렇게 생각하지 않아. 모두 강하니까. 우라라는 보답하고 싶어. 그리고……',
      );
      await urara.say_and_wait(
        '방금 들었어. 너도 계속 힘들었구나. 그러니까 더더욱 도망치면 안 돼.',
      );
      await urara.say_and_wait(
        '미안해. 네 마음을 우라라는 처음 들었어. 그러니까 더 많이 달려야 해!',
      );
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '는 주먹을 꼭 쥐었다. 흔들리는 벚꽃빛 눈동자에,',
        urara.elder_sibling_sex_title,
        '를 닮은 또 다른 자신이 비친다.',
      ]);
      await urara.say_and_wait(
        '여기에 우라라가 더 필요한 사람이 있으니까. 그러니까 다시 한번 우라라를 믿어 줘……!',
      );
      await inner_urara.say_as_unknown_and_wait(
        '하아…… 우라라까지 저를 동정하려는 건가요……',
      );
      await urara.say_and_wait(
        '아니야. 다른 사람 눈에는 보이지 않아도 우라라와 함께 자라서 쭉 지켜 준 너도 우라라의 영웅이야!',
      );
      await urara.say_and_wait([
        '그러니까 우라라도 ',
        callname,
        '도 모두도, 그런 건 상관없어. 우리랑 함께 가자……!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        ' 앞에 서서 마음속에 숨어 있던 또 다른 ',
        urara.get_colored_name(),
        '와 마주한 벚꽃빛 ',
        urara.sex,
        '는 순식간에 예전의 천진함을 벗어던진 것처럼 보였다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 변화를 보고, 줄곧 노력해 온 ',
        you.get_colored_name(),
        '뿐 아니라 「',
        urara.sex,
        '」도 부은 눈을 크게 뜨며 잠깐 기쁨을 드러냈다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '하하…… 그랬군요. 우라라가 강해지는 데 필요한 마지막 조각은 저였어요……',
      );
      await era.printAndWait([
        '그런데도 고집 센 ',
        urara.sex,
        '는 공허하게 갈라진 세계에서 ',
        urara.get_colored_name(),
        '의 제안을 받아들이지 않았다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '당신들은 말이 통하지 않는 사람들이에요. 하지만 전 쉽게 끝내지 않을 거예요……',
      );
      await era.printAndWait([
        '말을 마치자 벤치에 앉아 있던 「',
        urara.sex,
        '」는 제멋대로인 선언만 남기고 사라졌고, 주위에서 계속 부서지던 소리도 동시에 멎었다.',
      ]);
      await era.printAndWait([
        '시간이 다시 흐르고 새소리와 바람도 두 사람 곁으로 돌아왔다. 하지만 ',
        urara.sex,
        '의 말로 미루어 보아 순환은 아직 계속될 것이다.',
      ]);
      await era.printAndWait(
        '문제는 아직 풀리지 않았다. 그래도 지금 남은 두 사람은 조금 진정해서, 마침내 서로를 살필 수 있었다.',
      );
      await era.printAndWait([
        '곁으로 눈길을 돌린 순간,',
        you.get_colored_name(),
        '는 ',
        urara.get_colored_name(),
        '가 두 손을 내밀고 당황한 채 뺨에서 떨어지는 눈물을 받아 내는 것을 보았다.',
      ]);
      await urara.say_and_wait([
        '어?',
        callname,
        ', 우라라 얼굴에 이거…… 우라라, 울어? 갑자기 너무 슬퍼졌어?',
      ]);
      await urara.say_and_wait([
        '이거,',
        urara.sex,
        ' 마음이야? 우라라가 더 일찍 알아챘더라면……',
      ]);

      era.printButton(
        `「괜찮아. 적어도 이번 주는 무사히 끝날 것 같아. 그다음에,${inner_urara.sex}를 찾으러 가자……」`,
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '……응! 그런데 우라라,',
        urara.sex,
        '가 느껴지지 않아.',
        urara.sex,
        ', 어디로 갔어?',
      ]);

      era.printButton(
        '「친애하는 여신님께 여쭤볼까. 학원의 여신상 앞에는 벤치 같은 건 없었던 것 같은데.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '그 뒤 ',
        you.get_colored_name(),
        '와 ',
        urara.get_colored_name(),
        '는 동시에, 모든 것을 지켜봤다는 듯 줄곧 조용히 눈을 가늘게 뜨고 미소 짓는 세 여신상을 바라보았다——',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_46_3: (() => {
    const title = (urara) => [
      '「모두」의 소원,',
      { color: urara.color, content: `「${urara.actual_name}」` },
      '의 소원',
    ];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, inner_urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        ', 먼저 갈 준비 됐어? 우라라도 금방 따라갈게! 오늘은 반드시 ',
        urara.sex,
        '를 데리고 돌아갈 거야!',
      ]);
      era.drawLine();

      era.printButton(
        '「오늘은 날씨가 안 좋네. 여기 앉아서 무슨 고민을 하고 있어?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '회백색 공간을 계속 걸어간 ',
        you.get_colored_name(),
        '는 드넓은 초원에서 그 작은 모습을 발견했다.',
      ]);
      await era.printAndWait(
        '자신도 처음 들어와 보는 곳이다. 신기하다. 방금까지는 여신상 앞에 있었는데……',
      );
      await era.printAndWait([
        '하지만 이곳의 주인은 손님을 극도로 거부한다. 엉뚱한 인사를 무시한 ',
        urara.sex,
        '는,',
        you.get_colored_name(),
        '가 다가오는 순간 풀밭에서 벌떡 일어났다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……여기는 어떻게 오셨나요. 하나같이 왜 남으려고 하지 않는 거죠……',
      );
      await era.printAndWait([
        '여기 있을 리 없는 「침입자」를 원망스럽게 바라보며, 눈앞의 작은 ',
        urara.uma_sex_title,
        '는 불안한 기색으로 ',
        you.get_colored_name(),
        '에게 따져 물었다.',
      ]);

      era.printButton(
        '「여기는 네 세계야. 바깥의 순환도 네가 만들었고. 그러니 적어도 양쪽은 이어져 있겠지. 길은 있잖아?」',
        1,
      );
      await era.input();

      await you.say_and_wait(
        '즉 손님이 오고 싶어 하고 주인에게도 조금이나마 허락할 마음이 있다면, 손님은 네 바람대로 여기에 나타나는 거지……',
      );
      await era.printAndWait([
        '어린이용 퍼즐을 푸는 듯한 말투로,',
        you.get_colored_name(),
        '는 어쩔 수 없다는 듯 어깨를 으쓱했다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '제가 묻는 건 그걸 어떻게 아느냐는 거예요……',
      );

      era.printButton(
        '「우라라가 세 여신께 조금 물어봤을 뿐이야. 그게 전부야. 그래서 조금 준비해서 들어왔지……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '가 어떻게 물어봤는지는 정말 모른다.',
        urara.uma_sex_title,
        '에 대해서도, 세 여신에 대해서도, 그렇게까지 밝혀낼 필요는 없겠지.',
      ]);
      await era.printAndWait([
        '의심 가득한 날카로운 시선을 견디지 못한 ',
        you.get_colored_name(),
        '는 말없이 눈을 돌렸다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '이번에도 남의 사랑을 강도가 문 따는 도구로 쓰신 건가요. 당신은 남의 마음을 소모시키는 최악의 사람이에요……!',
      );

      era.printButton(
        '「아직 말도 안 했는데 혼자서…… 으악! 알았어, 알았어! 때리지 마, 미안해. 이번만 용서해 줘.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '낯선 곳에서 발길질에 맞을 뻔했다. 아슬아슬한 거리에서 ',
        urara.uma_sex_title,
        '의 습격을 피한 ',
        you.get_colored_name(),
        '는 혼이 나갈 지경이었다.',
      ]);
      await era.printAndWait(
        '경찰이 없는 세계에서도 주인에게 재빨리 사과하는 건 도움이 된다.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '또 그렇게 남의 마음을 억지로 열고 다른 사람의 의미를 강요하는군요. 비열하지 않나요?',
      );

      era.printButton(
        '「그럴지도 모르지. 하지만 그게 어때서? 우라라도 내가 여기 설 수 있는 『의미』를 줬어.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '솔직한 ',
        you.get_colored_name(),
        ' 앞에서, 「',
        urara.sex,
        '」도 입을 다물었다. 모든 것은 말 너머에 있다. 첫 만남이 그랬다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '를 만나지 않았다면,',
        you.get_colored_name(),
        '는 지금도 그날의 방황에서 답을 얻지 못했을 것이고, 이곳에도 오지 않았을 것이다.',
      ]);
      await era.printAndWait([
        '「',
        urara.sex,
        '」의 선택이 없었다면,',
        urara.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '를 만나지 못했고, 삼 년 동안 함께 발맞춘 이야기도 여기까지 쓰이지 않았을 것이다.',
      ]);
      await era.printAndWait([
        '더 거슬러 올라가면, 시작은 아마도 ',
        urara.get_colored_name(),
        '가 「억지로」 외로운 인간을 자신의 삶에 끌어들인 순간이다.',
      ]);
      await era.printAndWait([
        '한숨을 내쉰 ',
        you.get_colored_name(),
        '는 말없이 회백색 풀밭에 다시 앉은 작은 ',
        urara.uma_sex_title,
        ' 곁에 조심스레 쪼그려 앉았다.',
      ]);

      era.printButton(
        '「이야기를 바꾸자. 널 만날 준비를 하던 날들 동안 시간은 흐르지 않았지만, 우라라는 꽤 즐거워 보였어.」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait([
        '그래서요? 충분히 쉬었으면 또 ',
        urara.sex,
        '를 떠밀어 앞으로 나아가게 할 건가요?',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '우라라도 알고 있잖아요. 이야기의 끝은 제가 쥐겠다고요.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 얼굴을 보고 싶지 않은 모양이다. 「',
        urara.sex,
        '」는 귀를 눕히고 뻣뻣한 움직임으로 고개를 ',
        you.get_colored_name(),
        '의 반대쪽으로 돌렸다.',
      ]);

      era.printButton(
        '「지금도 이렇게 앉아 있는 건 네가 이 이야기를 끝낼 수 없기 때문이야.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '표정은 보이지 않는다. 하지만 지금 ',
        urara.sex,
        '의 몸은 벼락이라도 맞은 듯 떨렸다. 정곡을 찌른 모양이다.',
      ]);
      await era.printAndWait([
        urara.sex,
        '가 어떻게 했는지는 모른다. 시간을 순환시킨 것도,',
        urara.sex,
        '가 정말 바라는 세계를 만들지 못했기 때문이다.',
      ]);
      await era.printAndWait(
        '무언가에 대한 집착으로 삼 년의 끝에서 시간을 멈출 수는 있어도, 진정으로 정체된 세계를 만들 수는 없다.',
      );
      await era.printAndWait(
        '내일이 오는 것은 세 여신도 막을 수 없다. 날마다 숨어 있어 봐야 아무것도 하지 못한다.',
      );
      await era.printAndWait([
        '너무 멀리 와 버린 지금의 「',
        urara.sex,
        '」에게는 자신을 조용히 지우는 것 말고는 순환을 멈출 방법이 없다.',
      ]);

      era.printButton('「——틀렸어?」', 1);
      await era.input();
      era.printButton('「『하루 우라라』.」', 1);
      era.printButton('「『하루 우라라』.」', 2);
      era.printButton('「『하루 우라라』.」', 3);
      await era.input();

      await era.printAndWait(
        '정말, 강한 척하는 데도 한도가 있지. 이래서는 아무도 기쁘지 않다. 문제도 해결되지 않는다.',
      );
      await era.printAndWait([
        '진작 짐작은 했지만 여신의 장난은 규모가 크다. 하나의 세계에 성격이 정반대인 두 ',
        urara.get_colored_actual_name(),
        '를 집어넣었다.',
      ]);
      await era.printAndWait([
        '아무것도 믿지 못하는 작은 ',
        urara.uma_sex_title,
        '를 조금이라도 행복하게 해 주려는 걸까. 아무래도 좋다. 오늘의 본론은 ',
        urara.sex,
        '를 데리고 돌아가는 것이다.',
      ]);

      era.printButton(
        '「그러니까 상황을 엉망으로 만들었다 해도, 이럴 필요는 없잖아. 모두 네가 돌아오길 기다리고 있어.」',
        1,
      );
      await era.input();

      await inner_urara.say_as_unknown_and_wait(
        '……네? 모두가 절 기다린다고요? 당신도 이상해지셨나요? 저를 아는 사람은——',
      );
      await era.printAndWait(
        '말이 끝나기도 전에 무수한 목소리가 공간 바깥에서 흘러들었다. 회백색 초원이 단숨에 사람들로 북적이는 문전처럼 변했다.',
      );
      await era.printAndWait([
        '줄곧 ',
        urara.get_colored_name(),
        '의 그늘에 숨어 있던 「',
        urara.sex,
        '」조차 몇 번이고 들었던, 가장 익숙한 사람들의 인도하는 목소리다.',
      ]);
      await era.printAndWait(
        '트레센의 같은 반 친구들, 상점가 사람들, 응원회 회원들, 그리고 잘 알지는 못하는 각지의 응원 소리……',
      );
      await era.printAndWait(
        '어두운 장막을 걷어 내듯, 누군가의 달리기를 응원하듯. 다정하면서도 큰 목소리가 초원 전체를 울렸다.',
      );

      era.printButton(
        '「너도 우라라라면 이곳이 어떻게 이어지는지 가장 잘 알겠지. 여기는 너 혼자만의 세계가 아닐 거야.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '충격을 받아 황급히 일어난 「',
        urara.sex,
        '」 앞에서,',
        you.get_colored_name(),
        '는 서두르지 않고 주머니에서 휴대폰을 꺼냈다.',
      ]);
      await era.printAndWait([
        '여기는 「',
        urara.get_colored_name(),
        '의 세계」.',
        urara.get_colored_name(),
        '가 받은 축복대로, 단 한 사람이라도 ',
        urara.get_colored_name(),
        '를 생각하고 있다면,',
        urara.sex,
        '는 어디든 갈 수 있다.',
      ]);
      await era.printAndWait([
        '지금은 작은 ',
        urara.uma_sex_title,
        '를 「승리로 이끈다」기보다는,',
        urara.get_colored_name(),
        '가 자신의 손으로 「마음의 벽을 허문다」는 쪽에 가깝다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 ',
        urara.sex,
        '를 지지하는 모두 덕분에 강해진다. 그래서 ',
        urara.sex,
        '를 좋아하는 모두에게,',
        urara.sex,
        '만 느낄 수 있는 것을 돌려줄 수 있다.',
      ]);
      await era.printAndWait([
        '기억은 없어도 모두 예전부터 어렴풋이 눈치채고 있었다. 「',
        urara.get_colored_actual_name(),
        '」라는 작은 ',
        urara.uma_sex_title,
        '에게는 또 다른 면이 있는 것 같다고.',
      ]);
      await era.printAndWait([
        '그래서 ',
        you.get_colored_name(),
        '의 도움으로,',
        urara.get_colored_name(),
        '는 이 순환 속을 뛰어다니며 「',
        urara.sex,
        '」에 관한 이야기를,',
        urara.sex,
        '를 돕고 싶은 사람들과 나누었다.',
      ]);
      await era.printAndWait([
        '그러니 또 다른 ',
        urara.sex,
        '가 어디에 숨어도,',
        urara.get_colored_name(),
        '는 「모두의 소원」에 실려 마음 가장 깊은 곳까지 닿을 수 있다.',
      ]);
      await era.printAndWait([
        '시간만 있다면 변화는 자연스레 일어난다.',
        urara.get_colored_name(),
        '와 ',
        urara.sex,
        '의 트레이너는 정말 운이 좋다.',
      ]);

      era.printButton(
        '「물론 모두 『우라라』를 믿어 준다면 트레이너로서도 분위기를 띄워야지.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '예전에 무심코 마련해 둔, 마지막 변화를 일으킬 요소를 꺼내어 「',
        urara.sex,
        '」 앞에서 ',
        you.get_colored_name(),
        '는 웃으며 통화 녹음을 재생했다.',
      ]);
      era.drawLine();
      await era.printAndWait([
        '준비 운동을 마치고 승부복을 정돈한 뒤, 회백색 공간 입구의 복도에 선 ',
        urara.get_colored_name(),
        '는 오늘의 달리기를 시작했다.',
      ]);
      await era.printAndWait([
        '앞으로 펼쳐진 길은 아리마의 코스보다 훨씬 길다.',
        urara.get_colored_name(),
        '의 직감일 뿐이다. 왜냐하면 ',
        urara.sex,
        '는 아직 두려워하니까.',
      ]);
      await urara.say_and_wait(
        '하지만 네가 두려워하는 건 상처받는 『우라라』야? 아니면 아무것도 못 하는 『우라라』야?',
      );
      await era.printAndWait([
        '혼자만의 레이스에서,',
        urara.get_colored_name(),
        '는 보이지 않는 친구와 이야기하듯 앞쪽의 텅 빈 회백색을 향해 작게 물음을 던졌다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '에게 답을 알려 주는 사람은 없다. 그런데도 주위를 이끄는 메아리는,',
        urara.get_colored_name(),
        '의 말에 응답하는 것 같았다.',
      ]);
      await era.printAndWait(
        '모두의 소원을 담은 목소리. 앞길이 밝혀질 때마다 레이스장 양쪽에 목소리가 늘어났다.',
      );
      await urara.say_and_wait(
        '노력해도 결과가 나오지 않을 때가 있어. 변하는 도중에 전부 잃을 때도 있어. 우라라도 알아.',
      );
      await urara.say_and_wait(
        '하지만 지켜보기만 하며 멈춰 서면 절대로 결과는 없어. 이치를 알아도 그것만으로 어른이 되지는 못해.',
      );
      await urara.say_and_wait(
        '더 빨리 달릴 방법은 눈물을 닦고 까진 무릎에 스스로 반창고를 붙이는 것뿐……',
      );
      await urara.say_and_wait(
        '그러니까 단 하나의 기회를 두고 다투더라도 두려워하지 마. 왜냐하면——',
      );
      await era.printAndWait([
        '양쪽으로 스쳐 가는 그림자 속에서,',
        urara.get_colored_name(),
        '는 레이스 때 언제나 관중석 맨 위에서 ',
        urara.sex,
        '를 지켜보는 그 사람을 보았다.',
      ]);
      await era.printAndWait([
        '그리고 모두의 소원을 담은 목소리는 저마다 달라도,',
        urara.get_colored_name(),
        '의 귓가에 있는 듯 또렷이 들리는 「통화 녹음」.',
      ]);
      await era.printAndWait(
        '얼마나 나아왔는지 모를 앞쪽의 회백색이 빛에 벗겨지고, 무수한 빛의 점이 이정표처럼 허공에 흩날렸다.',
      );
      await era.printAndWait([
        '얼마나 달렸는지 모르는데도 여전히 투지가 넘치는 몸을 움직여,',
        urara.get_colored_name(),
        '는 1착의 미소를 지은 채 앞쪽의 갈라진 거울 면으로 뛰어들었다——',
      ]);
      era.drawLine();
      await era.printAndWait([
        callname,
        '의 목소리 「모두 그렇게 강하지는 않아. 하지만 우라라가 걱정할 만큼 약하지도 않아.」',
      ]);
      await era.printAndWait([
        callname,
        '의 목소리 「부정하지는 않을게. 이 길은 잔혹해. 가족을 위해 나아가는 사람도 있어. 먹고살기 위해 달리는 사람도 있지.」',
      ]);
      await era.printAndWait([
        callname,
        '의 목소리 「산보다 무거운 꿈을 짊어진 사람도 있어. 소중한 사람과의 약속을 지키려는 사람도 있고……」',
      ]);
      await era.printAndWait([
        callname,
        '의 목소리 「누군가 말했듯 코스에 서서 이기면 모두를 웃게 할 수는 없어.」',
      ]);
      await era.printAndWait([
        callname,
        '의 목소리 「모두가 『만족』할 수 있는 건 결국 맨 뒤에서 달리는 것뿐이야.」',
      ]);
      await era.printAndWait([
        callname,
        '의 목소리 「그래도 모두가 바라는 『행복과 희망』은 남이 쉽게 정할 수 있는 게 아니야.」',
      ]);
      await era.printAndWait([
        callname,
        '의 목소리 「몇 번을 넘어져도 누구에게나 행복을 추구할 권리는 있어. 희망의 의미도 사람마다 다르고.」',
      ]);
      await era.printAndWait([
        callname,
        '의 목소리 「우라라가 하는 건 남을 상처 입히는 일이 아니야. 자신의 이상을 깃털처럼 가볍게 여기지 마.」',
      ]);
      await era.printAndWait([
        callname,
        '의 목소리 「『',
        urara.get_colored_actual_name(),
        '』가 모두의 미소를 맡는다는 무게는,',
        urara.sex,
        '만의 무게야. 다른 누구도 짊어질 수 없어.」',
      ]);
      await era.printAndWait([
        callname,
        '의 목소리 「져도 괜찮다는 건 없어. 남을 살리려고 자신의 꿈을 버리지도 않아.」',
      ]);
      await era.printAndWait([
        callname,
        '의 목소리 「그러니까 마음껏 달려. 모두의 희망을 싣고. 우라라 자신이 이기고 싶다는 신념도 싣고——」',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……！');
      await era.printAndWait(
        '재를 뒤집어쓴 환상이 순식간에 벗겨졌다. 공간의 파편이 눈보라처럼 스쳐 사라지자 가려져 있던 본모습이 드러났다.',
      );
      await era.printAndWait([
        '무수한 빛깔이 「',
        urara.sex,
        '」의 어두운 눈동자에 빛을 비췄다. 구름 한 점 없는 푸른 하늘 아래,',
        urara.sex,
        '는 신기하다는 듯 주위의 변화를 둘러보았다.',
      ]);
      await era.printAndWait(
        '중요한 레이스가 열리는 곳은 아니다. 그래도 이곳은 모든 것의 출발점이다——트레센의 트레이닝장.',
      );

      era.printButton(
        `「그러니 ${urara.sex}는 반드시 여기에 올 거야. 진짜 날개가 돋아난 『무적의 하루 우라라』가.」`,
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '의 말에 맞춰 시야 끝에서 코스로 뛰어드는 것은 봄바람 같은 벚꽃빛이었다.',
      ]);
      await era.printAndWait([
        '또 다른 자신 앞에 선, 눈 속에 꽃을 피운 작은 ',
        urara.uma_sex_title,
        '가 따뜻한 미소를 지었다.',
      ]);
      await urara.say_and_wait(
        '미안, 조금 늦었어! 오늘 우라라, 드디어 널 찾았어!',
      );
      await urara.say_and_wait(
        '있지, 무사히 나갈 방법은 이미 이야기해 뒀어! 모두 기다려. 같이 돌아가자!',
      );
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '의 미소를 어떻게 마주해야 할지 모르겠다는 듯, 「',
        urara.sex,
        '」는 겁먹고 물러났다. 그래도 눈앞의 사람에게 두 손을 붙잡혔다.',
      ]);
      await era.printAndWait([
        '자신을 꼭 붙잡은,',
        you.get_colored_name(),
        '와 ',
        urara.get_colored_name(),
        '의 손을 각각 내려다보며, 외로운 「',
        urara.sex,
        '」의 목소리가 떨리기 시작했다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '……왜 또 그렇게까지 하시는 건가요. 제가 사라지면 그걸로 끝인데……',
      );
      await urara.say_and_wait(
        '아니야! 말없이 꺾이기만 하는 건 진짜 끝이 아니야. 모두의 마음을 가둬 버릴 뿐이야!',
      );
      await urara.say_and_wait(
        '게다가 우라라는 네가 사라지게 두지 않을 거야! 자기 친구를 돕는 건 당연하잖아?',
      );
      await era.printAndWait([
        '자신을 놓아주지 않는 가장 소중한 두 사람을 보며, 「',
        urara.sex,
        '」는 이야기의 결말에서 각오를 다진 주인공처럼 입술을 깨물었다.',
      ]);
      await era.printAndWait([
        '무슨 말을 하고 싶든, 이야기의 주인공이 언제까지나 막 뒤에서 침울해 있을 수는 없다.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '역시 당신들은 내버려 둘 수 없는 바보들이에요……',
      );
      await era.printAndWait([
        '붙잡힌 손을 거세게 뿌리친 「',
        urara.sex,
        '」는 마지막 고집을 부리며 눈앞의 두 사람에게서 거리를 벌렸다.',
      ]);
      await era.printAndWait(
        '금속이 삐걱이는 소리와 함께 녹슬어 회백색만 남은 게이트가 곁의 코스 출발점에 나타났다.',
      );
      await era.printAndWait([
        '게이트 앞에서 검은 눈빛이 날카로워진 작은 ',
        urara.uma_sex_title,
        '는 또 다른 자신과 모양은 같지만 빛깔만 몹시 낡은 승부복을 여몄다.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '그렇게까지 말씀하신다면, 당신과 ',
        urara.sex,
        '에게 부탁할게요. 마지막까지 제 고집을 받아 주세요——',
      ]);
      await inner_urara.say_as_unknown_and_wait('저도 『하루 우라라』니까요!');
      era.drawLine();
      await urara.say_and_wait(
        '나 자신과 레이스라니! 응! 자신과의 싸움이니까 우라라는 지지 않아!',
      );
      await urara.say_and_wait([
        '게이트에 들어갈게! 괜찮아,',
        urara.sex,
        '를 데리고 돌아올 거야. 우라라도 제대로 내 소원을 세웠으니까!',
      ]);

      era.printButton(
        `「그 기세야.${inner_urara.sex}에게도 네 소원을 들려줘!」`,
        1,
      );
      await era.input();

      await urara.say_and_wait('오! 우라라 GO——!');
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} inner_urara 「ハルウララ」
   * @param {CharaTalk} bourbon ミホノブルボン
   * @param {CharaTalk} rice ライスシャワー
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ハルウララのプレイヤーへの呼び方
   */
  async ws_95_46_3_win(urara, inner_urara, bourbon, rice, you, callname) {
    await inner_urara.print_and_wait(
      '끝없이 뻗은 코스에서 날아오르는 벚꽃빛이 어두운 상대를 뒤로 남겨 둔다. 승부는 이미 결정되었다.',
    );
    await inner_urara.print_and_wait([
      '역시 저는 수많은 승부를 치러 온 ',
      urara.sex,
      '에게는 상대가 안 되네요. 아무리 앞으로 손을 뻗어도, 앞서가는 ',
      urara.sex,
      '에게는 이제 닿지 않아요……',
    ]);
    await inner_urara.print_and_wait([
      '앞에서, 한때 어리고 약했던 「또 다른 자신」이 시야에서 사라지는 것을 보며,',
      urara.teen_sex_title,
      '는 속도를 제어하지 못하기 시작했다.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '제가 보지 못한 곳에서……',
      urara.sex,
      '는 이미 이렇게 높이 날 수 있었군요……',
    ]);
    await inner_urara.print_and_wait(
      '성장하며 망가진 마음은 저절로 아물지 않아요. 「강해진다」는 반창고로 상처를 덮을 뿐이죠——',
    );
    await inner_urara.print_and_wait(
      '그래도 남의 시선을 빌려 자신을 사람들이 바라는 영웅으로 다시 만들어 갈 수 있다면, 그것도 용기예요.',
    );
    await inner_urara.print_and_wait([
      urara.get_colored_name(),
      '가 늘 넘어져 반창고투성이가 되어도 고집스럽게 계속 달리는 다리처럼요.',
    ]);
    await inner_urara.print_and_wait([
      urara.get_colored_actual_name(),
      '라는 ',
      urara.uma_sex_title,
      '는 사실 강하지 않아요.',
      urara.sex,
      '는 스스로 선택한 변화를 통해 조금씩 강해졌을 뿐이에요.',
    ]);
    await inner_urara.print_and_wait([
      '그래서 이제 강해진 ',
      urara.sex,
      '는 그것을 받아들이고, 가장 먼 그 코스에 다시 한번 섰어요.',
    ]);
    await inner_urara.say_as_unknown_and_wait([
      '지금의 ',
      urara.sex,
      '는 이제 보호받지 않아도 돼요. 저도 더는 필요하지 않아요……',
    ]);
    await inner_urara.say_as_unknown_and_wait(
      '역시 당신은 언제나 옳군요. 전 무력하고 지배욕만 강한, 나쁜 보호자이자 나쁜 친구예요……',
    );
    await inner_urara.print_and_wait([
      '승부가 끝났는데도 코스는 여전히 끝없이 앞으로 뻗는다. 결승선 대신 뒤에서 붕괴가 다가온다.',
    ]);
    await inner_urara.print_and_wait(
      '앞서 제멋대로 너무 많이 고쳐 썼어요. 마지막에 남은 건 조용히 어둠에 삼켜지는 길뿐이에요.',
    );
    await inner_urara.say_as_unknown_and_wait(
      '속여서 미안해요. 이제 돌아갈 수 없어요. 하지만 이러면 괜찮을 거예요……',
    );
    await inner_urara.say_as_unknown_and_wait(
      '제대로 작별 인사를 하는 건 다음으로 미뤄요……',
    );
    await inner_urara.print_and_wait([
      '뒤에서 다가오는 「결말」을 앞에 두고, 외로운 ',
      urara.teen_sex_title,
      '는 바닥난 근성을 놓아 버리고 혼자만의 레이스를 끝냈다——',
    ]);

    era.printButton(
      '「그래서 말했잖아! 완결된 이야기라면 내용이 아무리 끔찍해도 결말에는 책임을 져야지!」',
      1,
    );
    await era.input();
    era.printButton('「지금이야! 달려! 하루 우라라!」', 1);
    await era.input();
    await inner_urara.print_and_wait(
      '이 목소리가 누구를 향한 응원인지는 답이 필요 없을지도 몰라요.',
    );
    await inner_urara.print_and_wait([
      you.get_colored_name(),
      '의 마지막 온 힘을 다한 외침과 함께 다가온 것은, 작지만 다시 온기와 힘을 건넬 수 있는 손이었어요.',
    ]);
    await inner_urara.print_and_wait([
      '앞이 순식간에 다시 밝아지고,',
      urara.teen_sex_title,
      '의 정면에서, 다시는 듣지 못하리라 생각했던 또 다른 자신의 부름이 들려왔어요.',
    ]);
    await inner_urara.print_and_wait(
      '손을 뻗어 온 것은 이미 한계에 다다랐으면서도 미소를 버리지 않은 벚꽃빛이었어요.',
    );
    await urara.say_and_wait('포기하지 마, 조금만 더!');
    await inner_urara.print_and_wait(
      '흔히 말하는 유대도, 특별한 말도 아닌, 더 순수하고 진심 어린, 봄꽃 같은 무언가.',
    );
    await inner_urara.print_and_wait(
      '양쪽에서 사람들의 목소리가 일어났다. 어느새 뒤쪽의 붕괴는 멀어지고, 트레이닝장의 소박한 관중석은 가득 차 있었다.',
    );
    await inner_urara.print_and_wait([
      '달리는 동안 모든 것이 느려진 듯,',
      urara.get_colored_name(),
      '에게 이끌린 ',
      urara.sex,
      '는 주위에 펼쳐진 환상의 전체 모습을 마침내 보았다.',
    ]);
    await inner_urara.print_and_wait(
      '늘 함께인 「황금 세대」와 「패왕 세대」가 평소처럼 친구의 레이스 곁에 있다.',
    );
    await inner_urara.print_and_wait([
      bourbon.get_colored_name(),
      '와 수많은 같은 반 친구들 곁에 선 ',
      rice.get_colored_name(),
      '. 품 안의 아직 새것인 그림책에는 벚꽃빛 삽화가 인쇄되어 있다.',
    ]);
    await inner_urara.print_and_wait(
      '상점가와 응원회 사람들, 각지의 낯선 사람들이 트레이너를 따라 레이스에서 가장 익숙한 현수막을 들어 올린다.',
    );
    await inner_urara.print_and_wait([
      '그리고 아직 발걸음은 무거운데도 똑같이 웃으며 관중석 맨 앞줄에 서서,',
      urara.couple_title,
      '를 따라 앞으로 나아가는 ',
      urara.uma_sex_title,
      '……',
    ]);
    await inner_urara.print_and_wait([
      '무수한 축복 속에서,',
      urara.sex,
      '는 희미한 도움의 외침이 향하는 곳, 또 다른 자신이 뻗은 손을 힘껏 붙잡았다.',
    ]);
    await urara.say_and_wait(
      '떠나고 싶지 않다는 목소리가 들렸으니까. 우라라, 드디어 붙잡았어……',
    );
    await urara.say_and_wait('놓지 않을 거야…… 우라라와——함께 가자!');
    await inner_urara.say_as_unknown_and_wait(
      '하지만 응해 주실 필요는 없어요. 당신들에게 이런 건……',
    );

    era.printButton(
      '「한 번도 부정한 적 없어. 맨 처음 우라라를 지킨 것도, 우리를 모은 것도 너잖아?」',
      1,
    );
    await era.input();

    era.drawLine();
    await era.printAndWait([
      '함께 결승선 표지를 지나자 달리기는 코스를 걷는 산책으로 바뀌었다. 앞에서는 ',
      you.get_colored_name(),
      '가 이미 오래 기다리고 있었다.',
    ]);
    await urara.say_and_wait([
      '응! 우라라와 ',
      callname,
      '는 계속 정말 고맙다고 생각해!',
    ]);
    await urara.say_and_wait(
      '그리고 우리도 줄곧 그랬어! 혼자서는 다들 아무것도 못 해!',
    );
    await era.printAndWait([
      '오늘의 「기적」을 위해,',
      urara.get_colored_name(),
      '가 몇 사람을 움직였을까. 이제 세는 것은 의미가 없다.',
    ]);
    await era.printAndWait(
      '누구나 누군가에게는 길가의 소문이고, 누구나 누군가의 인생을 스쳐 가는 사람이며, 모두 아무것도 할 수 없는 별이다.',
    );
    await era.printAndWait(
      '그렇기에 서로 이어지려 한다면 짧은 불꽃이라도 밤하늘을 계속 밝힐 수 있다.',
    );
    await era.printAndWait([
      '지금 모두가 「',
      urara.get_colored_actual_name(),
      '」라는 ',
      urara.teen_sex_title,
      '로 이어져 아직도 함께 엮어 가는 이야기가, 어둠을 걷어 내는 기적일지도 모른다.',
    ]);

    era.printButton(
      '「넌 처음부터 구경꾼이 아니라 변화를 만드는 쪽이었어. 게다가…… 여기, 맑게 개었잖아?」',
      1,
    );
    await era.input();

    await urara.say_and_wait(
      '응! 타이밍은 좀 이상할지 몰라도, 넌 언제든 고맙다는 말을 받아도 돼!',
    );
    await you.say_and_wait(
      '——이 이야기를 열어 줘서 고마워. 작은 이들이 서로 만나게 해 줬어. 이제 널 집으로 데려갈게.',
    );
    await era.printAndWait(
      '몸의 떨림은 코맹맹이 훌쩍임이 되고, 마침내 숨기지 않는 눈물이 되었다.',
    );
    await inner_urara.say_as_unknown_and_wait(
      '당신들은…… 당신들은…… 정말, 모두……',
    );
    await era.printAndWait([
      '모두 앞에서 알아듣기 힘들게 중얼거리며, 회백색의 작은 ',
      urara.uma_sex_title,
      '는 가장 볼품없고도 가장 기쁜 소리로 크게 울었다.',
    ]);
    await era.printAndWait(
      '남의 신뢰를 거부하고 세상을 극도로 싫어하는 것은 결국 겁 많고 아무 쓸모도 없는 자신을 용서할 수 없기 때문이다.',
    );
    await era.printAndWait(
      '고통을 억지로 떼어 내고, 두려워서 진짜 자신을 마음 밑바닥에 숨긴 채 외면하면, 남는 것은 공허하고 무거운 빈 짐뿐이다.',
    );
    await era.printAndWait(
      '몇 번이고 넘어져 아픔을 알게 된 뒤라면, 상처투성이라도 더 용감해질 수 있다.',
    );
    await era.printAndWait([
      '퍼즐의 마지막 조각을 놓을까. 더없이 작은, 「',
      urara.get_colored_actual_name(),
      '」라는 ',
      urara.uma_sex_title,
      '의 이야기를.',
    ]);
    await era.printAndWait('이제는 변덕스러운 자신과 화해할 때다.');
    await era.printAndWait([
      '울던 ',
      urara.teen_sex_title,
      '가 미소 짓는 ',
      urara.teen_sex_title,
      '의 품으로 뛰어들고, 미소 짓던 ',
      urara.teen_sex_title,
      '는 울고 있는 ',
      urara.teen_sex_title,
      '를 다정하게 안아 주었다.',
    ]);
    await era.printAndWait([
      '두 「',
      urara.get_colored_actual_name(),
      '」의 그림자가 겹쳐져 새로운 햇살 아래 하나로 녹아들었다. 그러자 주위도 다시 녹아내렸다.',
    ]);
    await era.printAndWait([
      '기적조차 이루어지는 모습이란 저런 것일지도 모른다. 빛에 감싸이기 전,',
      you.get_colored_name(),
      '도 자신도 모르게 안도하는 미소를 지었다.',
    ]);
    era.drawLine();
    await era.printAndWait([
      '이것은 「',
      urara.get_colored_actual_name(),
      '의 소원」, 그리고 「모두의 소원」——',
    ]);
    await era.printAndWait([
      urara.get_colored_name(),
      '의 소원은——쉽게 끝나지 않을 미래에서 모두의 미소를 위해 계속 달리는 것.',
    ]);
    era.drawLine();
    await era.printAndWait([
      urara.get_colored_name(),
      '의 팔에 머리를 기댄 채,',
      you.get_colored_name(),
      '는 고개 숙여 미소 짓는 세 여신상 앞에서 눈을 떴다. 여느 때처럼 조용한 트레센에서, 곁의 담당이 웃으며 ',
      you.get_colored_name(),
      '를 기다리고 있었다.',
    ]);
    await urara.say_and_wait(['다음엔 뭐 할까?', callname, '！']);
  },
  we_95_47: (() => {
    const title = (urara, inner_urara) => [
      '「',
      { color: urara.color, content: urara.sex },
      { color: inner_urara.color, content: '들' },
      '」의 선물',
    ];
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} join_arim_kin_c ウララがクラシック年の有馬記念に出たか
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      join_arim_kin_c,
      arim_kin,
    ) => {
      const ret = [];
      await era.printAndWait([
        '오늘의 ',
        you.get_colored_name(),
        '는 어느새 다시 「',
        inner_urara.get_colored_name(),
        '」의 마음속 초원에 서 있었다.',
      ]);
      await era.printAndWait(
        '평소의 안개는 사라졌다. 밤하늘에는 구름 한 점 없이 짙은 보랏빛 하늘에 별이 반짝인다. 별 아래의 사람은 세계 한가운데 서 있는 듯했다.',
      );
      await era.printAndWait([
        '달리는 소리에 뒤돌아보니 밝은 달빛 아래, 얼굴이 닮은 두 ',
        urara.teen_sex_title,
        '가 이미 오래 기다리고 있었던 모양이다.',
      ]);
      era.drawLine();
      await urara.say_and_wait([
        callname,
        '! 와 줬구나! 에헤헤~ 같이 누워 보자. 풀밭, 하나도 안 차가워. 기분 좋아!',
      ]);
      await urara.say_and_wait(
        '지금 우리 마음속, 예쁘지? 뭐라고 하면 좋을까? 저기…… 그게……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '꾸미는 말이나 멋진 묘사는 필요 없어요. 그저 전에는 여기가 이렇게 아름다운 줄 몰랐네요……',
      );
      await urara.say_and_wait(
        '모두 기분이 좋잖아? 마치…… 아리마 다음에는 크리스마스! 기대된다~',
      );
      await inner_urara.say_as_unknown_and_wait([
        '기대되기는 하지만 주인공에게 긴장감이 없네요…… 이길 수 있을 것 같나요,',
        arim_kin,
        '。',
      ]);
      await urara.say_and_wait(
        '모르겠어. 다들 강하니까! 그래도 이기지 못하더라도 우라라는 달릴 거야!',
      );
      await inner_urara.say_as_unknown_and_wait(
        '네, 맞아요. 지금도 모두가 『우라라는 이길 수 있어』라고 기대하는 건 아니에요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '하지만 이건 혼자 달리는 이야기가 아니에요. 당신과 저뿐 아니라 우라라가 이어 준 모든 사람이 이 순간을 기다리고 있어요.',
      );

      inner_urara.say_as_unknown([
        '그러니…… 트레이너 ',
        you.adult_sex_title,
        ', 부디 뭐라도 말씀해 주세요.',
      ]);
      era.printButton(
        '「계속 그랬잖아. 기적이 찾아오길 믿는 것보다 우라라의 성장이 더 확실해.」（모든 능력치+5）',
        1,
      );
      era.printButton(
        '「이미 이 아름다운 초원을 가졌잖아. 이제는 계속 나아가면 돼.」（잔디 적성 상승）',
        2,
      );
      era.printButton(
        '「운도 기적도 실력이야. 모자란 만큼은 용기로 채우면 돼!」（중장거리 적성 상승）',
        3,
      );
      ret.push(await era.input());
      await urara.say_and_wait([
        '그런 거야? 그래도 ',
        callname,
        '의 조언이라면 우라라는 괜찮아!',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '맞아요. 만나고 난 뒤의 길이 즐겁든 아니든, 머리 위에서 이어진 별하늘은 이미 나아갈 지도가 되었어요……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '……하아. 저도 더 일찍 알았다면 우라라가 이렇게 멀리 돌아오지 않아도 됐을까요——',
      );
      await urara.say_and_wait(
        '자! 이제 그만 생각해! 더는 우울해하지 마. 모처럼 크리스마스잖아!',
      );
      if (join_arim_kin_c) {
        await urara.say_and_wait(
          '흐흥~ 크리스마스 선물이구나! 이미 한번 줬지만 우라라는 괜찮을 것 같아!',
        );
        await urara.say_and_wait(
          '이번에 1착을 할 수 있을지는 모르겠지만 모두 기뻐할 거야——',
        );
      } else {
        await urara.say_and_wait(
          '그러니까 크리스마스에 우라라도 모두에게 줄 선물을 준비해 뒀어!',
        );
        await urara.say_and_wait([
          '지금은 줄 수 없지만,',
          callname,
          ', 내일 꼭 볼 수 있을 거야——',
        ]);
      }
      await urara.say_and_wait([
        '『',
        arim_kin,
        '에서 달리는 모습』, 이 선물을 ',
        callname,
        '에게도, 모두에게도 주고 싶어!',
      ]);
      if (era.get('love:52') >= 50) {
        await inner_urara.say_as_unknown_and_wait([
          'せっかくのクリスマスです。小さなウララは、自分のトレーナー',
          you.adult_sex_title,
          'にだけ特別な贈り物をするかと思いましたが？',
        ]);
        await urara.say_and_wait([
          'うん！ウララはもう ',
          callname,
          ' のものだから、『体以外』しか送れないよ？',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          'ぷっ……ごほっ！そ、その言い方？！知らないわけではありませんが、見て見ぬふりはできません！',
        );
        await urara.say_and_wait(
          'えへへ～こんなに経っても、『ウララ』は純情なんだね。どうなってるの～？',
        );
        await inner_urara.say_as_unknown_and_wait(
          'あなたに言われたくありません！小さなウララは、なぜこうなったのです？！',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait([
          'みんなへの共通の贈り物、ですか。せっかくのクリスマスです。',
          callname,
          ' だけに何かあげないのですか。',
        ]);
        await urara.say_and_wait([
          'え？うーん……何がいいかわからない！そうだ、ウララが自分を ',
          callname,
          ' にあげればいい！',
        ]);
        await inner_urara.say_as_unknown_and_wait(
          '待って待って待って！その贈り物はママが許しても、わたくしは許しません。ウララには早すぎます……',
        );
        await urara.say_and_wait(
          'でもウララ、もう子どもじゃないよ？何が早いの？『ウララ』、えっちなこと考えてる？',
        );
        await inner_urara.say_as_unknown_and_wait(
          'ごほっ……！な、何を言っているのです小さなウララ。わたくしはそんなことしません！',
        );
      }
      inner_urara.say_as_unknown([
        '트레이너 ',
        you.adult_sex_title,
        '、あなたも何か言ってください——',
      ]);
      era.printButton('「……悪くないだろ？」（恋慕+2）', 1);
      era.printButton('「……仲がいいな？」（好感+10）', 2);
      ret.push(await era.input());
      await inner_urara.say_as_unknown_and_wait([
        '트레이너 ',
        you.adult_sex_title,
        '（あなた）——！！',
      ]);
      era.drawLine();
      await era.printAndWait([
        '억눌려 있던 「',
        inner_urara.get_colored_name(),
        '」가 본심을 드러낸 뒤, 두 우마무스메와 한 사람의 장난스러운 목소리는 넓은 초원에서 한참 이어졌다.',
      ]);
      await era.printAndWait(
        '실컷 즐긴 셋은 지쳐서 변함없는 밤하늘 아래 나란히 누웠고, 안심이 되는 짙은 빛깔 속으로 잠겼다.',
      );
      await era.printAndWait([
        '시간조차 의미를 잃는 별하늘과 초원에서, 벚꽃빛과 갈색빛의 「',
        urara.couple_title,
        '」 사이에 누운 ',
        you.get_colored_name(),
        '는 두 ',
        urara.teen_sex_title,
        '의 고른 숨소리를 듣고 있었다.',
      ]);
      await era.printAndWait(
        '벚꽃빛 쪽의 숨결은 점점 고르게 가라앉는다. 하지만 반대편, 좀처럼 잠들지 못하는 갈색빛 쪽에서 작은 부름이 들리는 듯했다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '가 다시 눈을 뜨자, 조금 빛이 바랜 「',
        urara.sex,
        '」가 꽃은 없어도 밝음을 되찾은 눈으로 곁의 사람을 지켜보고 있었다……',
      ]);
      era.println();

      await inner_urara.say_as_unknown_and_wait(
        '아하, 죄송해요. 전 조금…… 잠이 안 와서요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '우라라는 잠들었어요. 그래서 당신과만 이야기하고 싶어서…… 아, 일어나지 않으셔도 돼요. 누운 채로 들어 주세요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '하긴 계속 폐만 끼쳐 온 저와 단둘이 있는 건 기분 좋은 일이 아니겠죠……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '그래도 전 당신에게 거짓말한 적은 없어요. 처음부터 당신을 사랑했다는 것도요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '이유는…… 모르겠어요. 사랑이라기보다는 영혼의 본능에 가까울지도 몰라요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '우습죠. 오래 곁에 머물 수 없는 『하루 우라라』의 사랑에 무슨 의미가 있을까요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '말하고도 당신에게 보답하지 못하고, 그 뒤에는 당신의 대답도 받을 수 없어요……',
      );
      await inner_urara.say_as_unknown_and_wait(
        '기념일 선물조차 준비할 수 없네요. 덧없는 지켜봄과 공허한 주고받음도 사랑이라고 할 수 있나요?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '……결국 답할 수 없네요. 지금의 저는 처음 만났을 때의 당신보다 별로 더 깨어 있지 않아요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '하지만 유일하게 아는 답은, 의미가 없어도 이 연정은 단 하나뿐이라는 거예요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '당신 곁의 작은 우라라와도 상관없어요. 전 주인공이 아니죠. 하지만 이건 저만의 것이고, 당신에게만 향하는 마음이에요.',
      );
      if (high_relation) {
        await inner_urara.say_as_unknown_and_wait(
          '처음 우라라를 만난 당신. 우라라의 달리기를 지켜본 당신. 우라라와 함께 저를 구해 준 당신……',
        );
        await inner_urara.say_as_unknown_and_wait(
          '기적은 정말 일어났어요. 꿈처럼 아름답네요. 언젠가 혼자 깨어날까 두려울 만큼.',
        );
        await inner_urara.say_as_unknown_and_wait(
          '그러니 꿈에서 깨기 전에 마음을 제대로 전하고 싶어요. 거절당해도 괜찮아요.',
        );
      } else {
        await inner_urara.say_as_unknown_and_wait(
          '제멋대로 당신을 선택했어도, 그 여정이 잘못투성이였어도, 마지막에는 당신과 우라라가 저를 구했어요.',
        );
        await inner_urara.say_as_unknown_and_wait(
          '삼 년 동안 왜 당신을 선택했는지 몇 번이고 생각했어요. 이제는 그 모든 게 사랑받을 가치가 있었다고 생각해요.',
        );
        await inner_urara.say_as_unknown_and_wait(
          '그러니 마음을 제대로 전할 수 있다면, 언젠가 꿈에서 깨더라도 세상을 미워하던 때로 돌아가지 않을 거예요.',
        );
      }
      await inner_urara.say_as_unknown_and_wait(
        '영혼의 두근거림에 부추겨졌을 뿐이어도, 당신이 싫어하는 거짓된 정이라 해도 괜찮아요. 다시 한번 말하고 싶어요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '성인의 기념일이라면, 말로 다 할 수 없는 이 마음이 거짓이라 해도 특별히 용서받아도 되지 않을까요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '그럼 다시 한번, 들어 주세요……',
      );
      era.println();
      await inner_urara.say_as_unknown_and_wait(
        '처음은 아니에요. 아마 마지막도 아니겠죠. 하지만……',
      );
      await inner_urara.say_as_unknown_and_wait([
        '트레이너 ',
        you.adult_sex_title,
        ', 전 당신을 사랑해요.',
      ]);
      return ret;
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '결말을 향해——';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     */
    const f = async (urara, inner_urara) => {
      await inner_urara.say_as_unknown_and_wait(
        '……여보세요. 들리시나요? 역시 계속 듣고 계셨군요. 그럼 적당히 이 이야기를 이어 가죠.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '도중에 당신을 만족시키지 못했을지도 몰라요. 결말까지 부족한 점투성일지도 모르죠. 이별하는 법까지 배우게 할지도 몰라요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '그렇기에 우리와 함께 길을 걸어 주셔서 감사해요. 준비되셨나요?',
      );
      await inner_urara.say_as_unknown_and_wait([
        '더없이 작으면서도 누구도 대신할 수 없는, 『',
        urara.get_colored_actual_name(),
        '』라는 작은 ',
        urara.uma_sex_title,
        '의 이야기예요——',
      ]);
      era.drawLine();
      await era.printAndWait(
        `${era.get('flag:当前年')}년 12월 4주, 나카야마 경기장.`,
      );
      await era.printAndWait(
        '맑은 하늘 아래 축복에 둘러싸여 이야기는 결말을 넘어선다.',
      );
      await era.printAndWait(
        '들끓는 함성 속에서 늦봄의 벚꽃은 한겨울에 만개하기를 바란다.',
      );
      await era.printAndWait('이것은 「우리」가 함께 쓴 이야기——');

      era.printButton('그러니 달려라, 하루 우라라.', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  ws_143_1: (() => {
    const title = '완결을 넘어서는 이야기——';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {number|false} arim_kin_rank_s シニア年有馬記念の着順。false は未出走
     * @param {PrintedSpan} arim_kin 有馬記念（着色名）
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      arim_kin_rank_s,
      arim_kin,
    ) => {
      await era.printAndWait([
        '선수 통로에서,',
        you.get_colored_name(),
        '는 준비 운동 중인 ',
        urara.get_colored_name(),
        '에게 평소처럼 말을 걸고 있었다.',
      ]);

      era.printButton(
        '「우라라, 오늘 컨디션은 어때? 하고 싶은 말이 있으면 해.」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '없어. 전처럼 달리면 되잖아! 오늘도 『우라라』로 갈게!',
      );
      await era.printAndWait([
        '그렇다. 지금은 평소대로 하면 된다…… 다만 ',
        you.get_colored_name(),
        '의 기억 속에서 그 「전」은 지난달 말의 ',
        arim_kin,
        '였다.',
      ]);
      if (arim_kin_rank_s) {
        if (arim_kin_rank_s === 1) {
          await era.printAndWait([
            urara.get_colored_name(),
            '의 「기적의 우승」 덕분에 그 레이스의 열기는 아직 식지 않았다.',
          ]);
          await era.printAndWait([
            '마음을 뒤흔든 ',
            arim_kin,
            '의 1착에 더해,',
            urara.get_colored_name(),
            '는 모두의 도움으로 더욱 중요한 보물도 얻었다.',
          ]);
          await era.printAndWait([
            '레이스가 끝나고 모두 웃고 있는데,',
            urara.get_colored_name(),
            '와 ',
            you.get_colored_name(),
            '만은 가득 찬 관객 앞에서 서로 부둥켜안고 울음을 터뜨렸다.',
          ]);
          await era.printAndWait(
            '그 볼품없으면서도 눈부신 사진은 지금도 인터넷 곳곳에 돌아다닌다……',
          );
        } else if (arim_kin_rank_s <= 5) {
          await era.printAndWait(
            '착순은 조금 아쉬운 순위에 머물렀다. 그래도 모두의 마음속에서는 최고의 성적이었다.',
          );
          await era.printAndWait([
            '그전에,',
            urara.get_colored_name(),
            '는 모두의 도움으로 승리보다 소중한 것을 받았다.',
          ]);
          await era.printAndWait([
            '별것 아니라 말해도, 작은 ',
            urara.uma_sex_title,
            '가 결승선 표지를 지났을 때 모두 약속이라도 한 듯 울었다.',
          ]);
          await era.printAndWait([
            '눈물에 담긴 감정은 여러 가지다. 다만 변함없는 것은,',
            urara.get_colored_name(),
            '의 성장을 본 감동일 것이다……',
          ]);
        } else {
          await era.printAndWait([
            '착순은 예상대로였다. 그래도 ',
            urara.get_colored_name(),
            '는 모두의 축복을 받았다.',
          ]);
          await era.printAndWait([
            '그전에,',
            urara.get_colored_name(),
            '는 모두의 도움으로 승리보다 소중한 것을 받았다.',
          ]);
          await era.printAndWait([
            '입으로는 별것 아니라 해도, 작은 ',
            urara.uma_sex_title,
            '가 결승선 표지를 지났을 때 모두 약속이라도 한 듯 울었다.',
          ]);
          await era.printAndWait([
            '눈물에 담긴 감정은 여러 가지다. 다만 변함없는 것은,',
            urara.get_colored_name(),
            '의 성장을 본 감동일 것이다……',
          ]);
        }
      }
      await era.printAndWait([
        '그 뒤 시니어급이 끝났고, 지금 ',
        urara.get_colored_name(),
        '의 검사 결과는 더욱 놀라웠다.',
      ]);
      await era.printAndWait([
        '벌써 삼 년을 달렸는데,',
        urara.sex,
        '의 본격화는 쇠퇴하기는커녕 새로운 성장 가능성까지 보이고 있다.',
      ]);
      await era.printAndWait([
        '최근의 일들로 미루어,',
        urara.get_colored_name(),
        '와 가까운 사람이라면 이 현상의 근원을 짐작할 수 있을 것이다.',
      ]);
      await era.printAndWait([
        '「',
        urara.sex,
        '」는 아직 사람 만나는 것을 부끄러워한다. 그래도 예전의 「틀어박힘」과 달리 시야 한구석에 또 다른 분홍빛이 스치곤 한다.',
      ]);
      await era.printAndWait([
        '지금의 「아리마의 열기가 식기 전에」라는 건…… 사실 ',
        urara.get_colored_name(),
        '가 달리고 싶어 해서,',
        you.get_colored_name(),
        '가 ',
        urara.sex,
        '에게 져 준 것뿐이다.',
      ]);

      era.printButton(
        '「지금 생각해 보면 이야기에 마침표를 찍기에는 너무 일렀다는 건가……」',
        1,
      );
      await era.input();

      await era.printAndWait([
        urara.get_colored_name(),
        '의 결정에 맞춰,',
        you.get_colored_name(),
        '도 최근의 변화를 떠올렸다. 겨우 한 달이어도 많은 것이 바뀐다.',
      ]);
      await era.printAndWait(
        '트레센의 친구들은 말할 것도 없다. 다리 부상으로 은퇴한 같은 반 친구도 마음을 추스르고 다음 목표를 찾은 모양이다.',
      );
      await era.printAndWait([
        '트레이너가 되는 긴 길은 이제 막 시작됐지만,',
        you.get_colored_name(),
        '는 언젠가 다시 ',
        urara.sex,
        '를 만날 수 있으리라 생각한다.',
      ]);
      await era.printAndWait(
        '상점가 사람들은 현대적인 슈퍼마켓을 어떻게 들여올지 의논 중이다. 타협이 아니라 변화가 낳는 가능성을 찾는 것이다.',
      );
      await era.printAndWait([
        '예전의 대립과 부흥을 넘어, 지금 모두는 ',
        urara.get_colored_name(),
        '에게 자극받아 새로운 시대의 협력과 사람들의 편의를 도모하기 시작했다.',
      ]);
      await urara.say_and_wait(
        '맞아! 모두 나아가고 있으니까, 할 수 있는 한 우라라도 계속 달릴 거야!',
      );
      await urara.say_and_wait([
        '그리고,',
        urara.sex,
        '도 계속 이쪽을 보고 있어. 지금은 슬퍼서가 아니라 기뻐서야!',
      ]);
      await urara.say_and_wait([
        '그러니까 전에 무슨 일이 있었든, 지금은 ',
        callname,
        '도 우라라가 달리는 모습을 잘 봐 줘!',
      ]);

      era.printButton('「당연하지. 지금의 우라라는 『무적』이니까!」', 1);
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '의 긍정에 맞춰 호흡을 가다듬고 승부복을 정돈한 ',
        urara.get_colored_name(),
        '는 입장을 알리는 방송에 한 걸음 앞으로 나아갔다.',
      ]);

      era.printButton(
        '「나갈 차례야. 우라라 스스로는 이길 수 있을 것 같아?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '응! 오늘 우라라는 꼭 이길 거야! 가볍게 이겨 버릴게!',
      );
      await era.printAndWait([
        '햇살을 받으며,',
        urara.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '에게 출발점으로 돌아온 듯 티 없이 맑은 미소를 지었다.',
      ]);
      await urara.say_and_wait([
        '그럼 갈게! 질문!',
        callname,
        ', 우라라는 어떻게 달리면 돼——?',
      ]);
      await era.printAndWait([
        '빛 속에서 웃는 ',
        urara.get_colored_name(),
        '의 미소에,',
        you.get_colored_name(),
        '는 다시 한번 힘주어 ',
        urara.sex,
        '에게 답했다.',
      ]);

      era.printButton('「어떻게든 즐기고 와——!」', 1);
      await era.input();
    };
    f.title = title;
    return f;
  })(),
  ws_ticket: (() => {
    const title = '마음 놓이는 구름과 안개';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（親密以上、かつ3周回ループ中ではない）
     * @param {boolean} has_child ウララとの子どもがいるか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      high_relation,
      has_child,
    ) => {
      await era.printAndWait([
        urara.get_colored_name(),
        '와 여러 차례 레이스를 치른 어느 날,',
        you.get_colored_name(),
        '는 트레이너실 서랍에서 낯익은 경품권을 찾아냈다.',
      ]);
      await era.printAndWait([
        '동시에 트레이너실 문이 「쾅」 열리며 벚꽃빛 섬광이 안으로 뛰어들었다.',
      ]);
      await urara.say_and_wait([
        callname,
        '! 자율 트레이닝 끝났어──! 다음엔 뭐 할까?',
      ]);
      await era.printAndWait([
        '미소에 맺힌 물방울을 닦는, 땀에 젖은 체육복 차림의 ',
        urara.get_colored_name(),
        '는 오늘도 눈부시게 빛나고 있다.',
      ]);

      era.printButton('「그래! 수고했어. 일단 쉬어!」', 1);
      await era.input();

      await urara.say_and_wait(['네──!']);
      await era.printAndWait([
        '다른 잡동사니를 서랍에 넣은 ',
        you.get_colored_name(),
        '는 일어서서 평소보다 열심히 한 작은 ',
        urara.uma_sex_title,
        '를 맞이했다.',
      ]);
      await era.printAndWait([
        '뒤돌아 책상 위의 「작은 보상」을 보고 무언가 떠올린 ',
        you.get_colored_name(),
        '는 자신 주위를 맴도는 작은 ',
        urara.uma_sex_title,
        '에게 물었다.',
      ]);

      era.printButton(
        '「우라라, 슬슬 기분 전환할 때도 됐지. 온천 이용권 기억나?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '온천 이용권…… 아! 그때 상점가에서 당첨된 거? 우라라, 잊어버릴 뻔했어!',
      ]);
      await urara.say_and_wait([
        '그런데 왜 갑자기 지금 가는 거야?',
        callname,
        '도 잊고 있다가 이제 생각났어?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 점점 눈치가 빨라진다. 이용권의 사용 기한이 다가오는 것을 본 ',
        you.get_colored_name(),
        '는 어쩔 수 없이 웃었다.',
      ]);
      await era.printAndWait([
        '지금 ',
        urara.get_colored_name(),
        '의 일정은 예전보다 여유롭다. 기분 전환할 기회는 반갑다. 경품권을 묵혀 둘 이유는 없다.',
      ]);

      era.printButton(
        '「아무튼…… 뒤늦은 보상이야. 우라라는 어떤 친구를 부를래?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '응?',
        callname,
        '는 안 가? 친구보다 우라라는 ',
        callname,
        '와 온천에 가고 싶은데?',
      ]);

      era.printButton(
        '「어른과 가는 것보다 친구랑 가는 게 더 자유롭잖아?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '의 「어른」 입장에서 나온 물음에, 아직 「아이」를 대표할 수 있는 ',
        urara.get_colored_name(),
        '는 당연하다는 듯 답했다.',
      ]);

      if (high_relation) {
        await urara.say_and_wait([
          '하지만 ',
          callname,
          '도 쉬어야 하잖아? 우라라만 보상받으면 안 돼!',
        ]);
        await urara.say_and_wait([
          '방금 ',
          callname,
          '가 말한 것처럼,',
          callname,
          '에게도 뒤늦은 보상이잖아?',
        ]);
      } else {
        await urara.say_and_wait([
          '그리고 이건 우라라와 ',
          callname,
          '가 같이 당첨된 거야. 처음부터 우라라 혼자만의 것이 아니야!',
        ]);
        await urara.say_and_wait([
          '그러니까 이 이용권에는 ',
          callname,
          ' 몫도 있어.',
          callname,
          '와 같이 가야 한다고 생각해!',
        ]);
      }
      if (era.get('love:52') >= 75) {
        await era.printAndWait([
          '말을 마치고 잠시 뜸을 들인 뒤,',
          urara.get_colored_name(),
          '는 「연인」으로서의 미소도 지었다.',
        ]);
        await urara.say_and_wait([
          '게다가 좋아하는 사람과 온천에 가는데 이유가 그렇게 많이 필요해?',
        ]);
      }

      await era.printAndWait([
        '그렇게 열렬히 권한다면 더는 거절할 말을 찾기 어렵다. 담당의 기대 어린 눈빛을 받은 ',
        you.get_colored_name(),
        '는 의자 등받이의 겉옷을 집어 들었다.',
      ]);

      era.printButton(
        '「먼저 뭘 준비할지 생각해 볼게. 내일 출발해도 괜찮아?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(['응! 우라라도 준비할게. 내일 정문에서 만나——']);
      await era.printAndWait([
        '작은 ',
        urara.uma_sex_title,
        '는 ',
        you.get_colored_name(),
        '의 승낙을 듣고 다시 밖으로 뛰어나갔다. 별일만 없으면 좋겠다.',
        urara.get_colored_name(),
        '가 이렇게나 좋아하니까.',
      ]);
      await era.printAndWait([
        '하지만 두 사람이 짐을 들고 들뜬 마음으로 숙소 프런트에 도착하자, 예상했던 뜻밖의 상황이 기다리고 있었다.',
      ]);
      await you.say_as_passer_by_and_wait(
        '직원',
        '정말 죄송합니다. 저희 숙소의 싱글룸은 모두 차 있어서요……',
      );
      await you.say_as_passer_by_and_wait(
        '직원',
        '대신 작은 온천이 딸린 트윈룸을 준비해 드릴 수 있습니다. 어떠신가요?',
      );

      if (you.sex_code === 1) {
        await era.printAndWait([
          '도착하자마자 난처한 전개다. 여행 운이 너무 없다. 하지만 여기까지 왔으니 어쩔 수 없다.',
        ]);
        await era.printAndWait([
          '곁에서 아직도 기대에 가득 찬 작은 ',
          urara.get_colored_name(),
          '를 보니,',
          you.get_colored_name(),
          '에게는 돌아간다는 선택지도 없다.',
        ]);
        await era.printAndWait([
          '그나저나 이런 상황에서 밤에는 공간을 어떻게 나누지……',
        ]);
        await era.printAndWait([
          '프런트에서 열쇠를 받은 ',
          you.get_colored_name(),
          '는 조금 복잡한 표정으로 짐을 들고,',
          urara.get_colored_name(),
          '와 함께 여관 복도로 들어섰다.',
        ]);
        era.drawLine();
        await era.printAndWait([
          urara.get_colored_name(),
          '보다 먼저 방으로 돌아온 ',
          you.get_colored_name(),
          '은 옷을 벗고 수건을 챙겨 온천으로 통하는 미닫이문을 열었다.',
        ]);
        await era.printAndWait([
          '길게 숨을 내쉬며 따뜻한 물에 몸을 담그고, 달이 밝아 별이 드문 밤하늘을 올려다보던 ',
          you.get_colored_name(),
          '은 눈을 감았다.',
        ]);
        await era.printAndWait([
          '벌써 삼 년인가. 처음 만났을 때는 어린아이 같던 ',
          urara.get_colored_name(),
          '도 점점 어른스러운 모습이 되어 가는구나……',
        ]);
        await era.printAndWait([
          '그 고요한 분위기 속에서, 미닫이문이 ',
          urara.teen_sex_title,
          '의 즐거운 목소리와 함께 「폭주」하듯 열렸다.',
        ]);
        await urara.say_and_wait([
          '에헤헤~',
          callname,
          '가 아직 안 돌아왔으니까 우라라가 먼저 들어갈래——!',
        ]);
        await era.printAndWait([
          '눈을 뜰 새도 없이, 분위기를 깨뜨린 작은 ',
          urara.uma_sex_title,
          '이 가장자리에서 뛰어올라 물보라 속으로 풍덩 뛰어들었다.',
        ]);
        await era.printAndWait([
          '방금 한 말은 취소다. 전혀 자라지 않았잖아. 얼굴에 튄 물을 닦고, ',
          you.get_colored_name(),
          '은 어쩔 수 없다는 듯, 눈앞에서 규칙을 어기고 물에 뛰어든 ',
          urara.get_colored_name(),
          '을 바라보았다……',
        ]);
        await era.printAndWait([
          '……잠깐, ',
          urara.get_colored_name(),
          '이 들어왔다고?! 뭔가 이상하다는 걸 깨달은 ',
          you.get_colored_name(),
          '은 곧장 일어나 들어오기 전에 가장자리에 놓아 둔 수건을 둘렀다.',
        ]);
      } else {
        await era.printAndWait([
          '응? 이용권의 혜택보다 방도 호화롭고 온천 시간도 자유롭다. 운이 좋잖아.',
        ]);
        await urara.say_and_wait([
          '어? 조금 덜 북적일지는 몰라도 우라라와 ',
          callname,
          '뿐이면 안에서 헤엄쳐도 돼?',
        ]);
        era.printButton('「온천에서 헤엄치면 안 돼.」', 1);
        await era.input();

        await era.printAndWait([
          '너무 신이 난 작은 ',
          urara.uma_sex_title,
          '의 머리를 가볍게 쓰다듬고,',
          you.get_colored_name(),
          '는 웃으며 짐을 들고,',
          urara.get_colored_name(),
          '와 함께 여관 복도로 들어갔다.',
        ]);
        era.drawLine();
        await era.printAndWait([
          '밝은 달 아래에서 조금 오래 산책한 뒤, ',
          you.get_colored_name(),
          '은 방으로 돌아와 천천히 옷을 벗고 옆에 놓인 수건을 집었다.',
        ]);
        await era.printAndWait([
          urara.get_colored_name(),
          '은 벌써 들어가 있을 텐데. 얌전히 있으려나. 정말로 탕 안에서 장난치고 있지는 않을까.',
        ]);
        await era.printAndWait([
          '온천으로 통하는 미닫이문에 손을 얹는다. 무슨 생각을 하는 거야. 삼 년이나 지났는데.',
          urara.get_colored_name(),
          '도 이제 다 큰 아이가 됐을 텐데……',
        ]);
        await era.printAndWait([
          '미닫이문을 열자, ',
          you.get_colored_name(),
          '은 곧바로 ',
          urara.get_colored_name(),
          '이 온천을 수영장 삼아 요란하게 첨벙대는 소리를 들었다.',
        ]);
        await urara.say_and_wait(['에헤헤~ 왠지 엄청 재밌어——!']);
        await era.printAndWait([
          '방금 한 말은 취소다. 역시 전혀 자라지 않았잖아. 천천히 탕에 들어가며, ',
          you.get_colored_name(),
          '은 어쩔 수 없다는 듯, 눈앞에서 규칙을 어기고 물놀이를 하는 ',
          urara.get_colored_name(),
          '을 바라보았다.',
        ]);
      }
      await era.printAndWait([
        '立ちこめる湯気の向こうで、まだ他人に気づいていない小さな',
        urara.uma_sex_title,
        'は、健康で豊かな体を隠さず見せている。',
      ]);
      await era.printAndWait([
        '解けた桜色の髪が湿って',
        urara.teen_sex_title,
        'の滑らかな肌に寄り、落ちる露と一緒に',
        urara.sex,
        'の無邪気な笑顔へ、ぼんやりした色気をまとわせる。',
      ]);
      await era.printAndWait([
        '三年の鍛錬は柔らかさを硬くしなかった。むしろ小さな',
        urara.uma_sex_title,
        'のもともと肉感のある腰と尻と下腹を、さらに豊かにした。',
      ]);
      await era.printAndWait([
        '柔らかい曲線を上下へ辿ると、',
        urara.teen_sex_title,
        'の股の繊細な秘密の庭は、尻尾が揺らす波紋に水面で半分隠されている。',
      ]);
      await era.printAndWait([
        '水遊びでゆるく揺れる柔らかい双丘の上、愛らしい二つの蕊と実も霧の中で見え隠れする。',
      ]);
      await era.printAndWait([
        '無邪気で禁忌なこの景色に止めを刺すのは、灯火と水面と月が交わる照らしかただ。',
      ]);
      await era.printAndWait([
        '小さく可愛い耳を揺らし、',
        urara.teen_sex_title,
        'のいつもの桜の瞳は、色ガラスのように美しい色を放っている。',
      ]);
      await era.printAndWait([
        '惜しいのは、絵の中の爛漫で色っぽい小さな主役が、戸惑う ',
        you.get_colored_name(),
        ' へ視線を向け始めたことだ……',
      ]);

      if (you.sex_code === 1) {
        if (era.get('love:52') >= 50) {
          await urara.say_and_wait([
            'ん？あ……',
            callname,
            ' だ。もう入ってた。いつ来たの？',
          ]);
          await era.printAndWait([
            '体を見られても恥ずかしがらず、抜け駆けしようとした罪悪感もなく、小さな',
            urara.uma_sex_title,
            'は霧の中からゆっくり ',
            you.get_colored_name(),
            ' へ寄ってきた。',
          ]);
          await urara.say_and_wait([
            'えへへ～さっき ',
            callname,
            '、ウララ見てた？',
            callname,
            '、本当にした？',
          ]);
          await era.printAndWait([
            '立ち上がったばかりの ',
            callname,
            ' を大胆に湯へ押し戻し、',
            urara.teen_sex_title,
            'は愛情の微笑みのまま、一糸まとわず軽く ',
            you.get_colored_name(),
            ' に跨がった。',
          ]);
          await era.printAndWait([
            'いつから ',
            urara.get_colored_name(),
            ' はこんなに大胆になった……',
          ]);
        } else {
          await urara.say_and_wait([
            'え？',
            callname,
            '？なんで ',
            callname,
            '……あ、違う、これは……',
          ]);
          await era.printAndWait([
            '他人の視線の中で慌てて裸の体を隠し、',
            urara.get_colored_name(),
            ' の小さな顔は熱気で珍しく真っ赤になった。',
          ]);
          await urara.say_and_wait([
            callname,
            '……えっち……見ないで、早く後ろ向いて……ウララ、恥ずかしい……',
          ]);
          await era.printAndWait([
            '湯からすくったタオルで慌てて隠したあと、出会ったときのように無邪気だったウマ娘は、恋する',
            urara.teen_sex_title,
            'だけの文句を小さく吐いた。',
          ]);
          await era.printAndWait([
            'どう言っても、',
            urara.get_colored_name(),
            ' はいくらか成長したらしい……',
          ]);
        }
      } else if (era.get('love:52') >= 50) {
        await urara.say_and_wait([
          '응?',
          callname,
          ' 왔다! 우라라가 벌써 들어가 봤어! 물이 기분 좋아!',
        ]);
        await era.printAndWait([
          '먼저 들어온 이유는 설명하지 않은 채, ',
          urara.get_colored_name(),
          '은 수증기 속에서 물을 헤치며 ',
          you.get_colored_name(),
          '에게 천천히 다가왔다.',
        ]);
        await urara.say_and_wait([
          '그런데 ',
          callname,
          ', 발밑 조심해. 손 줘! 영차~',
        ]);
        await era.printAndWait([
          '手を取って ',
          you.get_colored_name(),
          ' を湯へ導き、',
          urara.get_colored_name(),
          ' は色っぽい笑顔のまま、大好きな ',
          callname,
          ' を入った瞬間に水へ押し倒した。',
        ]);
        await era.printAndWait([
          '「',
          urara.get_colored_name(),
          ' に誘われた」みたいだ。でもこれは危険動作だろ……',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          ' 来た！どうしたの？なんでずっとウララ見てるの……え？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          ' の視線の中で、',
          urara.get_colored_name(),
          ' は自分のタオルが体に巻かれておらず、底へ沈んでいるのに気づいた。',
        ]);
        await urara.say_and_wait([
          'いつ外れたの？でもここ、他の人いないよ！だから巻かなくても……え？だめ？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 도움으로 수건을 두르고 머리까지 감싸자마자, ',
          urara.get_colored_name(),
          '은 다시 탕으로 뛰어들었다.',
        ]);
        await era.printAndWait([
          '하아. 가끔은 아직 다 자라지 않은 아이 같다. 그래도 역시 귀엽네……',
        ]);
      }

      await era.printAndWait([
        '그 뒤 한바탕 소동…… 정확히는 어르고 달랜 끝에, ',
        you.get_colored_name(),
        '은 어떻게든 ',
        urara.get_colored_name(),
        '을 탕 안에서 얌전히 있게 했다.',
      ]);
      await era.printAndWait([
        '함께 쓰는 탕이라도 물을 온통 휘저어 놓는 건 절대 금지다.',
      ]);
      await era.printAndWait([
        '수증기가 나란히 붙어 있는 두 사람을 다시 감싸고 나서야, 이 탕도 겨우 본래 용도로 쓰일 수 있었다.',
      ]);
      await era.printAndWait([
        '따뜻한 김이 겨울에서 봄으로 넘어가는 추위를 감싸고, 밤하늘의 별도 알맞게 안개를 뚫고 빛난다.',
      ]);
      await era.printAndWait([
        '따뜻한 물에 둘러싸여 몸 대부분을 담근 채 담당과 편안함을 누리는 ',
        you.get_colored_name(),
        '는 온기 속에서 완전히 긴장을 풀었다.',
      ]);
      await era.printAndWait([
        '괜찮다.',
        urara.get_colored_name(),
        '와 단련한 삼 년 동안 체력이 꽤 좋아졌다. 쉽게 어지러워지지 않을 자신이 있다.',
      ]);
      await era.printAndWait([
        '그건 동시에, 아직 은퇴하지 않았더라도,',
        urara.get_colored_name(),
        '가 레이스 ',
        urara.uma_sex_title,
        '로서의 첫 삼 년을 마쳤다는 뜻이기도 하다.',
      ]);
      await era.printAndWait([
        '지금의 ',
        urara.sex,
        '는 앞으로의 레이스와 트레이닝을 스스로 정할 수 있다. 트레이너인 ',
        you.get_colored_name(),
        '도 더 많은 ',
        urara.uma_sex_title,
        '를 만나게 될 것이다.',
      ]);
      await era.printAndWait([
        '二人が疎遠になる心配ではない。良くも悪くも、無防備に春の景色を漏らす小さな',
        urara.uma_sex_title,
        'は、たぶんこの子だけだ。',
      ]);
      await era.printAndWait([
        'どうあれ、二人三脚でここまで来た以上、',
        you.get_colored_name(),
        ' に残る選択は、',
        urara.get_colored_name(),
        ' を傍に置き続けることだけだ。',
      ]);
      if (has_child) {
        await era.printAndWait([
          'それに、間違った時間と場所で禁断の実を摘んだ以上、今後が幸福でもなくても、',
          you.get_colored_name(),
          ' と ',
          urara.get_colored_name(),
          ' はもう戻れない……',
        ]);
      }
      await era.printAndWait([
        '하아, 무슨 생각을 하는 거지. 모처럼 담당과 온천에 왔는데 왜 갑자기 「탕 속의 엉뚱한 생각」에 잠기는 걸까.',
      ]);
      await era.printAndWait([
        '만난 뒤로 좋은 일이 많았잖아. 울적할 때 눈을 감으면 마음은 ',
        urara.get_colored_name(),
        '의 미소로 가득해진다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '와 떨어지고 싶지 않다. 일어나지도 않을 일인데 그렇게 중얼거리고 싶어진다.',
      ]);
      await era.printAndWait([
        '이제 와서 지난 일 몇 가지를 되짚어 보면 예전만큼 초조하지도 않다.',
      ]);
      await era.printAndWait([
        '안심과 충만함일까. 온천에서 생각에 잠기면 따뜻한 물결이 걱정을 옅게 해 주는지도 모른다.',
      ]);
      await era.printAndWait([
        '……그나저나 기분 탓인가. 물이 점점 뜨거워지지 않나.',
      ]);
      await urara.say_and_wait([
        '응?',
        callname,
        ', 얼굴 빨개! 온천에서 어지러워지는 건 체력과 별로 상관없어. 무리하지 마!',
      ]);
      await era.printAndWait([
        '왜 이러지. 몸에 힘이 풀린다. 갑자기 졸리다. 이대로 잠들 것 같다……',
      ]);
      await urara.say_and_wait([
        '그리고 더 가라앉으면 코가 잠기겠어!',
        callname,
        ', 듣고 있어?',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 목소리가 멀다. 점점 멀어진다……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '벌써 코로 물거품을 내는 사람이 들어 봐야 말을 할 수 있겠어요?!',
      ]);
      await era.printAndWait([
        '맞는 말이다. 또 자신의 내성을 과대평가했다. 가라앉을 것 같다……',
      ]);
      await urara.say_and_wait([
        '아! 왔구나. 온천 기분 좋아! 그런데…… 지금 ',
        callname,
        ', 조금 이상해?',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '온천은 나중이에요. 아무튼 빨리 트레이너 ',
        you.adult_sex_title,
        '를 끌어 올려요!',
      ]);
      await era.printAndWait([
        '미안하다. 오늘도 「당신」에게 수고를 끼쳤다. 느슨한 공기 속에서 여러 손이 자신을 끌어 올린다는 걸 깨달은 ',
        you.get_colored_name(),
        '는 안심하고 몸을 눕혔다.',
      ]);

      await era.printAndWait([
        '다음에 눈을 떴을 때 머리 위의 빛은 별하늘에서 따뜻한 색의 천장 조명으로 바뀌어 있었다.',
      ]);
      await era.printAndWait([
        '다행히 눈에 들어온 건 병원의 낯선 흰 벽이 아니라 온천 여관의 일본식 실내였다.',
      ]);
      await era.printAndWait([
        '얼마나 잔 걸까.',
        urara.get_colored_name(),
        '는 어디 있지. 일단 일어나서……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '가 조금 흐릿한 시야로 몸을 일으키려 하자, 아래에서 올라온 손이 부드럽게 뺨을 눌렀다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 아직 움직이지 마. 쉴 때는 무리하지 않아도 돼!',
      ]);
      await era.printAndWait([
        '다정한 목소리에 시선을 올리자 작은 ',
        urara.uma_sex_title,
        '가 위에서 웃어 보이고 있었다.',
      ]);
      await era.printAndWait([
        '얌전히 앉은 자세가 베개를 대신하고,',
        urara.teen_sex_title,
        '가 아까 물에 담갔던 탄탄한 다리가 지금은 부드럽게 ',
        you.get_colored_name(),
        '의 뒤통수를 받치고 있다.',
      ]);
      await era.printAndWait([
        '헐렁한 일본식 옷을 입은 ',
        urara.get_colored_name(),
        '는 아이를 달래는 어머니처럼 ',
        you.get_colored_name(),
        '의 뺨을 쓰다듬으며 손에 든 귀이개를 들어 올렸다.',
      ]);
      await urara.say_and_wait([
        '에헤헤~',
        callname,
        ', 지금 꼭 어린아이 같아. 계속 힘들어서 그랬어?',
      ]);
      await urara.say_and_wait([
        '모두에게 들었어. 이렇게 하면 편안해진대.',
        callname,
        ', 몸을 조금 옆으로 돌려 봐.',
      ]);
      await urara.say_and_wait([
        '괜찮아. 오늘의 ',
        callname,
        '는 응석 부려도 돼. 마음이 안 놓이면 우라라 꼬리를 잡아도 좋아!',
      ]);
      await era.printAndWait([
        '다정한 권유에 몸이 저절로 움직여,',
        you.get_colored_name(),
        '는 어머니에게 위로받는 아이처럼 눈앞의 부드러운 털을 쥐었다.',
      ]);
      await urara.say_and_wait(['우라라도 처음이니까 찔려서 아프면 말해 줘!']);
      await era.printAndWait([
        '가는 손가락이 귓바퀴를 쓰다듬고, 솜으로 바깥쪽의 이물질을 털어 낸 뒤,',
        urara.teen_sex_title,
        '는 귀이개로 귀 안을 조심스럽게 파기 시작했다.',
      ]);
      await era.printAndWait([
        '찌릿한 느낌이 온몸으로 퍼지고,',
        urara.teen_sex_title,
        '의 다정하고 맑은 품속에서 정신이 붕 뜨는 듯한 나른함으로 바뀌었다.',
      ]);
      await era.printAndWait([
        '아이의 무릎에 머리를 맡기고 응석을 부리는 게 어른이 할 일인가. 반박하고 싶어도 머리는 더 생각하기를 거부한다.',
      ]);
      await urara.say_and_wait([
        '전에 무슨 일이 있었든, 앞으로 무슨 일이 있든, 우라라는 ',
        callname,
        '에게 고마워하고 싶어.',
      ]);
      await urara.say_and_wait([
        callname,
        '가 앞으로도 안심한 미소를 지었으면 좋겠어. 그게 우라라의 선물이야.',
      ]);
      await urara.say_and_wait([
        '우라라 곁에는 언제든 ',
        callname,
        '가 쉴 자리가 있어. 그러니까 또 불안해지면 우라라에게 와 줘.',
      ]);
      await era.printAndWait([
        '부드럽게 입김을 불고 휴지로 귀의 이물질을 닦은 뒤,',
        urara.teen_sex_title,
        '는 웃으며 자신의 품으로 가라앉는 어른을 콕 찔렀다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 벌써 자면 안 돼! 반대쪽 귀도 남았어.',
      ]);
      await urara.say_and_wait(['오늘 밤은 아직 시간 있잖아?']);
      await era.printAndWait([
        urara.get_colored_name(),
        '가 만들어 준 다정함 속에서,',
        you.get_colored_name(),
        '는 안심하고 눈을 감았다.',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait([
        '후후~ 온천은 좋네요. 특히 한숨 돌린 뒤에는 제 마음까지 가벼워져요.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '불청객이기는 하지만, 두 분은 이제 쉬고 계시니 온천을 조금 빌려도 괜찮겠죠.',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '아! 그리고 이거…… 『이 시간을 통해 당신은 우라라와의 둘도 없는 정을 깊이 느꼈습니다~』',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '크흠…… 아무리 가볍게 들리더라도 둘도 없는 정이 이곳에 깃든 건 분명해요……',
      ]);
      await inner_urara.say_as_unknown_and_wait([
        '적어도 지금 이 순간은 마음 놓이고 행복하겠죠.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_teach: (() => {
    const title = '훌륭한 지도';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '상점가에서 장을 보고 돌아오는 길, 곁에서 ',
        you.get_colored_name(),
        '의 짐을 들어 주는 ',
        urara.get_colored_name(),
        '가 기분 좋게 무언가 콧노래를 부르고 있다.',
      ]);

      era.printButton('「기분이 무척 좋아 보이네. 무슨 좋은 일 있었어?」', 1);
      await era.input();

      await urara.say_and_wait(
        '에헤헤~ 맞아! 상점가 사람들이 『열심히 하고 있구나』라고 하면서 선물도 줬어! 대단하지!',
      );
      await urara.say_and_wait(
        '전에는 모두 『무리하지 마』라고 했는데, 이제는 『열심히 하고 있구나』라고 하는 사람도 늘었어!',
      );
      await era.printAndWait([
        '폴짝폴짝 뛰며 손에 든 봉투를 바스락거리는 작은 ',
        urara.uma_sex_title,
        '는 ',
        you.get_colored_name(),
        '에게 감사의 미소를 보였다.',
      ]);
      await urara.say_and_wait(
        '분명 전보다 빨리 달릴 수 있게 돼서 우라라를 인정해 주는 사람도 늘어난 거야!',
      );
      await urara.say_and_wait([
        '하지만 ',
        callname,
        '가 없었다면 우라라는 여기까지 못 왔어! 그러니까 고마워,',
        callname,
        '！',
      ]);

      era.printButton('「그렇다면 다음 레이스도——」', 1);
      await era.input();

      await urara.say_and_wait('응! 다음 레이스도 우라라, 힘낼게!');
      await era.printAndWait([
        urara.get_colored_name(),
        '의 햇살 어린 미소 속에서,',
        you.get_colored_name(),
        '는 ',
        urara.sex,
        '와 함께 다음을 향한 의욕을 키웠다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_dance: (() => {
    const title = '댄스 연습';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 잊고 온 물건을 찾으러 무용실에 갔을 때, ',
        urara.get_colored_name(),
        '가 오늘도 수업이 끝난 뒤 홀로 댄스 연습을 이어가는 것을 발견했다.',
      ]);
      await urara.say_and_wait([
        '——좋아, 끝! 후우~ 정말 그립네…… 아! ',
        callname,
        ', 왔구나!',
      ]);
      await era.printAndWait([
        '음악이 끝나고 얼굴의 땀을 닦던 중, 트레이너가 오는 것을 본 ',
        urara.get_colored_name(),
        '는 웃으며 ',
        you.get_colored_name(),
        '에게 다가왔다.',
      ]);

      era.printButton(
        '「응! 우라라도 수고했어! 그런데 그립다는 건 무슨 뜻이야?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '아, 그건 내가 어렸을 때 집의 작업실에서 자주 춤을 췄었거든! 고향 친구들이 나무로 마이크도 만들어 줬었어!',
      );
      await urara.say_and_wait(
        '트레센에 올 때도 다들 우라라랑 약속했어. 나중에 다 같이 내 위닝 라이브를 보러 오겠다고 말이야!',
      );
      await urara.say_and_wait(
        '그러니까 나도 연습을 열심히 해야 해. 친구들을 실망하게 할 수는 없으니까!',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '의 고향인 고치에 있는 친구들을 말하는 걸까? 그래서 ',
        urara.sex,
        '가 이렇게 열심히 위닝 라이브를 준비하고 있었던 모양이다.',
      ]);

      era.printButton('「음…… 우라라가 연습한 걸 보여줄 수 있을까?」', 1);
      await era.input();

      await urara.say_and_wait([
        '당연하지! 그럼 ',
        callname,
        ', 우라라를 위해서 카세트 버튼 좀 눌러줄래?',
      ]);
      await era.printAndWait([
        '익숙한 음악이 흐르기 시작하자, ',
        urara.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '의 시선 속에서 그동안 갈고닦은 실력을 당당하게 뽐냈다.',
      ]);
      await era.printAndWait([
        '가끔 가사를 틀리기도 했지만, ',
        urara.sex,
        '의 몸짓에는 감정이 충분히 실려 있어 무척이나 훌륭한 퍼포먼스였다.',
      ]);

      await urara.say_and_wait([
        callname,
        ', 우라라 어때? 다들 보면 기뻐해 줄까?',
      ]);
      era.printButton('「응, 다들 정말 기뻐할 거야.」（속도+10）', 1);
      era.printButton(
        '「가사를 완벽히 외우면 더 좋을 것 같아.」（지능+10）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait(
          '역시 그렇겠지! 우라라도 분명 그럴 거라고 생각해! 그러니까 실전에서는 더 열심히 공연할게!',
        );
        await urara.say_and_wait(
          '지금도, 그리고 예전부터 나를 응원해 주는 모두에게 우라라의 성장을 보여줄 거야!',
        );
        await era.printAndWait([
          '의욕이 넘치는 ',
          urara.get_colored_name(),
          '가 다시 자율 연습을 시작했다. 저렇게 노력하는 ',
          urara.sex,
          '라면 무대 위에서 결코 실패하지 않을 것이다.',
        ]);
      } else {
        await urara.say_and_wait(
          '맞는 말이야, 내가 가사를 자주 틀리는 것 같아! 하지만 가사만 제대로 외우면 콘서트가 훨씬 멋져지겠지?',
        );
        await urara.say_and_wait(
          '좋아! 그럼 우라라는 이제부터 가사 외우기에 집중할게!',
        );
        await era.printAndWait([
          '가사를 완벽히 숙지하자 ',
          urara.sex,
          '의 노랫소리에 감정이 더 정확하게 실렸고, 무대 위에서도 더욱 이목을 끌 수 있을 것 같았다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  op_fans_letr: (() => {
    const title = '팬레터';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        urara.get_colored_name(),
        '와 ',
        you.get_colored_name(),
        '은(는) 함께 팬들이 보낸 선물을 정리하던 중, 대부분 아는 사람들이 보낸 것들 사이에 끼어 있는 작은 편지 봉투 하나를 발견했다.',
      ]);
      await era.printAndWait([
        '평소처럼 모든 편지를 소중히 대하는 ',
        urara.get_colored_name(),
        '는 눈에 띄지 않는 그 편지도 조심스레 펴 보았고, 이내 기쁜 듯 눈을 크게 떴다……',
      ]);
      await urara.say_and_wait([
        callname,
        '! 이건 아주 멀리 사는 아이가 보낸 편지인가 봐!',
      ]);
      await urara.say_and_wait(
        '『포기하지 않는 모습을 보고 용기를 얻었어요』……라고 적혀 있어. 왠지 조금 부끄러운걸!',
      );
      await urara.say_and_wait(
        '그러니까 다음에는 꼭 이겨야겠어! 그때가 되면 이 아이가 나를 보며 더 기뻐해 줄까?',
      );

      era.printButton(
        '「당연하지, 우라라가 승리하는 모습을 보면 그 아이도 분명 기뻐할 거야.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '의 확신에 찬 대답에, ',
        urara.get_colored_name(),
        '는 웃으며 답장을 쓰기 시작했다. 멀리서 도착한 응원 덕분인지, ',
        urara.get_colored_name(),
        '의 의욕도 한층 더 솟아올랐다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_all_like: (() => {
    const title = '누구에게나 사랑받는';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '오늘의 일과를 마친 뒤, ',
        you.get_colored_name(),
        '은(는) 홀로 학원 주변을 산책하다가, 작은 공원을 지날 무렵 익숙한 실루엣을 발견했다.',
      ]);
      await era.printAndWait([
        '공원 잔디밭 위에는 깨끗한 돗자리가 깔려 있었고, ',
        urara.get_colored_name(),
        '는 도시락을 꺼내 든 어느 모자와 즐겁게 둘러앉아 이야기를 나누고 있었다.',
      ]);
      await urara.say_and_wait(
        '응? 내 이름? 하루 우라라! 내 이름은 하루 우라라야!',
      );
      await era.printAndWait(
        '아주머니A 「우라라……? 어머, 네가 바로 트레센 학원의 하루 우라라구나! 네 경기는 우리도 챙겨보고 있단다!」',
      );
      await urara.say_and_wait(
        '에헤? 우라라가 그렇게 대단해? 헤헤~ 왠지 조금 부끄럽네, 하지만……',
      );
      await urara.say_and_wait([
        '어! ',
        callname,
        '다!! 그러니까——',
        callname,
        '! 같이 도시락 먹을래?',
      ]);
      await era.printAndWait([
        '어느새 멀리 있는 ',
        you.get_colored_name(),
        '를 알아본 작은 ',
        urara.uma_sex_title,
        '는 귀를 흔들며 ',
        you.get_colored_name(),
        ' 쪽으로 손을 흔들고 있다.',
      ]);

      era.printButton('「응? 잠깐, 내가 껴도 괜찮은 거야?」', 1);
      await era.input();

      await era.printAndWait([
        '아주머니A 「사양하지 마세요, 트레이너 ',
        you.adult_sex_title,
        '. 담당 선수가 우리 아이와 놀아 준 답례예요!」',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '와 지나가던 아주머니의 열렬한 권유에,',
        you.get_colored_name(),
        '는 조금 사양하면서도 돗자리 한쪽에 앉았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '가 앉자,',
        urara.get_colored_name(),
        '는 다시 곁의 어린 남자아이에게 즐겁게 말을 걸었다.',
      ]);
      await urara.say_and_wait(
        '그런데 가위바위보 일곱 번째 판은 아직 승부가 안 났잖아! 계속할래?',
      );
      await era.printAndWait(
        '남자아이A 「에? 다 먹고 나서 계속하기로 약속했잖아! 어차피 다음에도 내가 이길 테지만 말이야!」',
      );
      await urara.say_and_wait(
        '말했겠다~! 하지만 나도 절대로 안 질 거야! 우라라는 가위바위보도 매번 이기고, 고개도 엄청나게 빨리 돌릴 수 있거든!',
      );
      await era.printAndWait([
        '아이의 어머니는 흐뭇한 눈빛으로 상호작용하는 두 사람을 바라보고 있었으나, 곁에 있던 ',
        you.get_colored_name(),
        '은(는) 남자아이의 표정에서 일말의 초조함을 읽어낼 수 있었다……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 밝고 사랑스러운 성격은 순식간에 누구와도 친구가 될 수 있게 해주었고, ',
        urara.sex,
        '는 덕분에 어린아이들에게도 인기가 매우 많았다.',
      ]);
      await era.printAndWait([
        '하지만 바로 그 점 때문에, ',
        urara.sex,
        '는 사춘기에 접어들려는 아이들에게 여타 「첫사랑 킬러」 못지않은 흡입력을 발휘하곤 했다. 그리하여……',
      ]);
      await era.printAndWait([
        '남자아이A 「저기…… 우라라 ',
        urara.elder_sibling_sex_title,
        ', 또…… 또 만날 수 있어요?」',
      ]);
      await urara.say_and_wait([
        '응? 나 앞으로도 이 공원에 올 거니까, 당연히 또 만날 수 있지! 그치, ',
        callname,
        '？',
      ]);
      await era.printAndWait([
        '헤어지기 전, 어머니 손을 잡은 남자아이는 이 ',
        urara.uma_sex_title,
        urara.elder_sibling_sex_title,
        '에게, 어렴풋하지만 용기 있는 마음을 전했다.',
      ]);
      await era.printAndWait([
        '용기는 훌륭하다. 하지만 사정을 모르는 ',
        urara.uma_sex_title,
        urara.elder_sibling_sex_title,
        '는 당연하다는 듯 답하고, 곁에 있는 어른에게 미소를 보냈다.',
      ]);
      await era.printAndWait([
        '전해지기는커녕 상황이 더 악화된 건가...? ',
        urara.get_colored_name(),
        '의 미소 속에서, 차마 소년의 눈을 똑바로 마주하지 못한 ',
        you.get_colored_name(),
        '은(는) 그저 묵묵히 고개를 끄덕였다.',
      ]);
      await era.printAndWait([
        '레이스 ',
        urara.uma_sex_title,
        '로서 인기가 있는 건 좋다. 하지만 무언가 모르는 사이에 나빠진 것 같다. 저 남자아이가 무사하기를……',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '의 손을 잡고 무언가 말하고 싶은 듯 망설이는 ',
        you.get_colored_name(),
        '과(와), 여전히 웃으며 뒤를 향해 손을 흔드는 ',
        urara.get_colored_name(),
        '는 함께 귀갓길에 올랐다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  os_food: (() => {
    const title = '붕어빵과 편식 대책';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '어느 날 야외 트레이닝 도중,',
        you.get_colored_name(),
        '와 ',
        urara.get_colored_name(),
        '는 강적을 앞둔 듯 붕어빵 가게 앞에 서 있었다.',
      ]);
      await urara.say_and_wait([
        callname,
        ', 준비됐어? 오늘은 같이 먹기로 약속했잖아!',
      ]);

      era.printButton(
        '「난 문제없어. 문제는 우라라지…… 저기요, 무작위 맛 붕어빵 두 개 주세요.」',
        1,
      );
      await era.input();

      await era.printAndWait([
        '곁에서 의욕을 불태우는 ',
        urara.get_colored_name(),
        '를 한번 보고,',
        you.get_colored_name(),
        '는 어쩔 수 없이 직원에게 「비밀 메뉴」 두 개를 주문했다.',
      ]);
      await urara.say_and_wait(
        '괜찮아! 싫어하는 맛이 나와도 우라라는 끝까지 다 먹을 거야!',
      );
      await urara.say_and_wait([
        '그럼 ',
        callname,
        ', 같이 한입 먹자…… 으악…… 와, 와사비……!',
      ]);
      await era.printAndWait([
        '앉은 벤치가 따뜻해지기도 전에 작은 ',
        urara.uma_sex_title,
        '는 손에 든 간식에게 되물리기라도 한 듯 펄쩍 뛰었다.',
      ]);
      await era.printAndWait([
        '어른으로서,',
        you.get_colored_name(),
        '는 매운맛에 얼굴이 새빨개진 ',
        urara.get_colored_name(),
        '를 침착하게 바라보며 피망 소가 든 자신의 기묘한 간식을 먹었다.',
      ]);

      era.printButton('「우라라, 괜찮아? 힘들면 그건 내가 먹어 줄게.」', 1);
      await era.input();

      await urara.say_and_wait(
        '으으~ 괜찮아! 우라라 혼자 다 먹을 거야! 간다…… 으악……',
      );
      await era.printAndWait([
        '얼굴은 새빨개도 의욕 가득한 작은 담당을 보며,',
        you.get_colored_name(),
        '는 말없이 조금 앞쪽에서 ',
        urara.sex,
        '에게 줄 달콤한 음료 두 잔을 샀다……',
      ]);
      await era.printAndWait([
        '아무튼 장난 같은 간식을 먹었는데도,',
        you.get_colored_name(),
        '의 격려에 ',
        urara.get_colored_name(),
        '의 의욕은 오히려 올라갔다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_stair: (() => {
    const title = '계단 트레이닝과 학생들의 소문';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '이사장실에서 돌아오는 길,',
        you.get_colored_name(),
        '는 교사 안의 어느 계단 입구에서 무슨 이유인지 오르락내리락하는 ',
        urara.get_colored_name(),
        '와 마주쳤다.',
      ]);
      await urara.say_and_wait('후…… 후…… 또…… 열두 계단뿐이네……');

      era.printButton(
        '「우라라, 뭐 해? 자율 트레이닝이면 트레이닝장이 더 좋잖아?」',
        1,
      );
      await era.input();

      await urara.say_and_wait([
        '아,',
        callname,
        '! 다들 여기 계단은 저녁이 되면 한 칸 늘어난대! 마법 같지!',
      ]);
      await urara.say_and_wait(
        '재미있을 것 같아서 세러 왔어. 벌써 한 시간 넘게 오르내리면서 세고 있어……',
      );
      await era.printAndWait([
        '학원 괴담인가. 트레센의 ',
        urara.uma_sex_title,
        '들도 사춘기의 ',
        urara.teen_sex_title,
        '다. 관심을 갖는 건 당연하다.',
      ]);
      await era.printAndWait([
        '트레이너인 ',
        you.get_colored_name(),
        '에게는 불확실한 심령 소문보다 지금도 수수께끼투성이인 ',
        urara.uma_sex_title,
        '들이 더 흥미롭다.',
      ]);

      era.printButton('「그래도 한 시간 넘게는 너무 오래 한 거 아니야?」', 1);
      await era.input();

      await urara.say_and_wait(
        '응! 몇 번을 세도…… 계단은 언제나 열두 칸이야……',
      );
      await urara.say_and_wait(
        '그러니까 우라라는 아직 포기 안 해. 모두 진짜라고 하니까 더 세어 볼래……',
      );
      await era.printAndWait(
        '아니, 그건 안 되겠지. 이 소문의 결말이 불운에 씌는 것이라는 점은 제쳐 두더라도, 심령 현상은 아무렇게나 마주칠 수 있는 것이 아니다.',
      );
      await era.printAndWait([
        '자, 다섯, 열, 열하나, 열둘, 열셋…… 잠깐?! 이상함을 깨달은 ',
        you.get_colored_name(),
        '는 서늘해지는 목덜미를 짚었다……',
      ]);
      await urara.say_and_wait(['……어?', callname, ', 뭐 하는 거야…… 으아——']);
      await era.printAndWait([
        '큰일이라고 느낀 ',
        you.get_colored_name(),
        '는 곧바로 작은 ',
        urara.uma_sex_title,
        '를 옆구리에 끼고 인간이 낼 수 있는 최고의 속도로 그 자리를 도망쳤다.',
      ]);
      await era.printAndWait([
        '이상 현상은 피했다. 하지만 나중에 ',
        urara.get_colored_name(),
        '는 과도한 운동으로 활력이 떨어졌다. 이것도…… 불운의 일종인가.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  bs_mother: (() => {
    const title = '「그 사람」과의 만남';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} high_relation 高好感か（特殊判定：熱意以上、かつ3周回ループ中ではない）
     */
    const f = async (urara, inner_urara, you, callname, high_relation) => {
      await inner_urara.say_as_unknown_and_wait([
        '아아~ 그분이군요. 트레이너 ',
        you.adult_sex_title,
        '(당신), 우연한 만남이기는 하지만 마음의 준비를 하세요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '아니, 그분에게는 우연이 아닐지도 모르겠네요.',
      );
      era.drawLine();
      await era.printAndWait([
        '이사장실 문 앞에서,',
        you.get_colored_name(),
        '가 눈앞의 검은 옷을 입은 우마무스메를 바라보자, 그녀도 지나가던 ',
        you.get_colored_name(),
        '를 차분히 살펴보고 있다.',
      ]);
      await era.printAndWait(
        '처음 보는 얼굴이다. 예전에 졸업한 사람일까. 트레센을 구경 온 보호자일까. 이사장의 지인일까. 아니면……',
      );
      await era.printAndWait([
        '어떻게 말을 꺼내야 할지 모르는 ',
        you.get_colored_name(),
        ' 앞에서, 단정한 얼굴의 성인 우마무스메는 노크하려던 손을 내리고 돌아서서 다정한 미소를 지었다.',
      ]);
      await era.printAndWait(
        '성인 우마무스메 「실례했습니다. 이곳의 트레이너시군요. 트레이닝장으로 안내해 주시겠어요?」',
      );

      era.printButton('「네? 아, 실례지만 누구……?」', 1);
      await era.input();

      await era.printAndWait([
        '성인 우마무스메 「일단 학생의 보호자랍니다. 제 ',
        urara.sex_code - 1 ? '딸' : '아들',
        '도 여기서 배우고 있고, 이미 데뷔했어요.」',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '는 그녀를 만난 적이 없다. 하지만 이 엄격한 분위기의 여성이 짓는 미소는,',
        you.get_colored_name(),
        '에게 오래 알고 지낸 듯한 친근함을 느끼게 했다.',
      ]);

      era.printButton('「……트레이닝장은 저쪽입니다. 따라오세요……」', 1);
      await era.input();

      await era.printAndWait([
        '영문 모를 만남 뒤 영문 모를 부탁을 받은 ',
        you.get_colored_name(),
        '는 갑자기 나타난 이 수수께끼의 여성과 트레이닝장으로 향했다.',
      ]);
      await era.printAndWait([
        '딱딱하게 대답할 수밖에 없는 ',
        you.get_colored_name(),
        '와 달리, 곁의 그녀는 처음 만난 ',
        you.get_colored_name(),
        '에게 묘한 관심을 보인다.',
      ]);
      // 特殊な高好感判定
      if (high_relation) {
        await era.printAndWait([
          you.get_colored_name(),
          '에게 ',
          urara.uma_sex_title,
          '와 트레센에 대해 많은 것을 묻고 나자, 그녀의 친근한 미소에 감사가 조금 더해졌다.',
        ]);
        await era.printAndWait(
          '성인 우마무스메 「당신도 고생이 많으시군요. 언제나 담당을 위해 곁에 있는 건 쉬운 일이 아니죠.」',
        );
        await era.printAndWait([
          '성인 우마무스메 「사실 제 ',
          urara.sex_code - 1 ? '딸' : '아들',
          '도 운이 좋았어요.',
          urara.sex,
          '는 강하지 않지만 당신처럼 훌륭한 트레이너를 만났거든요.」',
        ]);
        await era.printAndWait([
          '동행을 마치며 ',
          you.get_colored_name(),
          '와 함께 트레이닝장의 전망대에 선 그녀는, 모든 것을 안다는 듯 달리는 ',
          urara.teen_sex_title,
          '들을 향해 안도하는 미소를 지었다.',
        ]);
      } else {
        await era.printAndWait([
          '불량 학생에게 불시에 시험을 보듯 이것저것 물은 뒤, 그녀는 날카로워진 눈을 다시 ',
          you.get_colored_name(),
          '에게 돌렸다.',
        ]);
        await era.printAndWait(
          '성인 우마무스메 「중앙에 걸맞은 전문성은 있군요. 하지만 담당의 마음을 돌보는 데는 부족함이 있는 것 같아요……」',
        );
        await era.printAndWait([
          '성인 우마무스메 「그렇게 생각해도 이미 늦었죠. 코스에 선 ',
          urara.uma_sex_title,
          '는 달리기 시작하면 쉽게 포기하지 않으니까요.」',
        ]);
        await era.printAndWait([
          '동행을 마치며 ',
          you.get_colored_name(),
          '와 함께 트레이닝장의 전망대에 선 그녀의 얼굴에는, 모든 것을 안다는 듯 근심이 조금 더해졌다.',
        ]);
      }
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          '성인 우마무스메 「그런데 당신을 좋아하는 우마무스메는 몇 명이나…… 갑자기 물으면 당황스럽기만 하겠네요.」',
        ]);
        await era.printAndWait(
          '성인 우마무스메 「꿈을 달리기에 맡기는 시절, 뒤에서 언제까지나 지지해 주는 어른을 좋아하게 되는 건……」',
        );
        await era.printAndWait([
          '성인 우마무스메 「옳은 일은 아니죠. 하지만 한창때인 ',
          urara.couple_title,
          ' 중에 그런 마음에서 벗어날 수 있는 이가 얼마나 될까요. 그때의 저도 예외는 아니었어요……」',
        ]);
      }
      era.printButton('「저기…… 말씀 중에 죄송하지만, 대체 누구신가요……?」', 1);
      await era.input();

      await era.printAndWait(
        '성인 우마무스메 「아이를 보러 온 평범한 보호자랍니다.」',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '의 물음에 직접 답하지 않은 채, 트레이닝장 건너편에서 달려오는 벚꽃빛을 보고 수수께끼의 여성은 ',
        you.get_colored_name(),
        '에게 마지막 미소를 남겼다.',
      ]);
      await era.printAndWait([
        '성인 우마무스메 「당신의 담당이군요. 귀엽고 멋진 아이네요. 마중 가지 않으시나요,',
        urara.sex,
        '를?」',
      ]);

      era.printButton('「아, 네…… 어?」', 1);
      await era.input();

      await era.printAndWait(
        '눈을 한번 깜빡이자 검은 옷의 수수께끼 우마무스메는 십여 미터 떨어진 뒷모습만 남았다.',
      );
      await era.printAndWait([
        '반대편에서는 전망대로 뛰어 올라온 ',
        urara.get_colored_name(),
        '가 신이 나서 ',
        you.get_colored_name(),
        '의 품으로 뛰어들며,',
        you.get_colored_name(),
        '가 무언가 떠올리려던 생각을 다시 흐트러뜨렸다.',
      ]);
      await urara.say_and_wait([
        callname,
        '! 오늘 우라라, 컨디션 엄청 좋아! 모의 레이스에서도 이겼어! 어때? 대단하지?',
      ]);
      await era.printAndWait([
        '고개를 들어 아직 멍한 ',
        you.get_colored_name(),
        '의 얼굴을 똑바로 보자, 웃고 있던 작은 ',
        urara.uma_sex_title,
        '의 표정에 의문이 섞이기 시작했다.',
      ]);
      await urara.say_and_wait([
        '……어라? 이상하네. 왜 ',
        callname,
        '에게서 엄마 냄새가 나지——',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait(
        '어떠셨나요? 기묘한 만남이었죠. 하지만 정말 우연일까요? 아니면 모든 것이 필연이었을까요?',
      );
      await inner_urara.say_as_unknown_and_wait(
        '당신과 우라라에게도, 그분과 저에게도, 트레센에 들어왔을 때 주사위는 이미 던져져 있었어요.',
      );
    };
    f.title = title;
    return f;
  })(),
  sa_vs: (() => {
    const title = '팔씨름 대결';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} spe スペシャルウィーク
     * @param {CharaTalk} sky セイウンスカイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_1 ハルウララのスペシャルウィークへの呼び方
     * @param {PrintedSpan} callname_20 セイウンスカイのプレイヤーへの呼び方
     */
    const f = async (urara, spe, sky, you, callname, call_1, callname_20) => {
      await era.printAndWait([
        '점심시간,',
        you.get_colored_name(),
        '는 안뜰의 소란에 이끌렸다. 다가가 보니,',
        urara.get_colored_name(),
        '와 같은 반 친구들이 팔씨름을 하고 있었다.',
      ]);
      await era.printAndWait([
        '보면 알 수 있듯 지금의 강한 상대를 맞아,',
        urara.get_colored_name(),
        '는 밀리고 있었다……',
      ]);
      await spe.say_and_wait('우, 우라라! 이제…… 항복해도 돼!');
      await urara.say_and_wait([call_1, '야말로! 손이 떨리고 있잖아? 오——!']);
      await era.printAndWait([
        urara.get_colored_name(),
        '에게는 아직 말대꾸할 여유가 있다. 하지만 ',
        urara.sex,
        '의 손이 점점 밀리자 곁의 심판이 결과를 알렸다.',
      ]);
      await sky.say_and_wait('좋아! 끝! 대단하네, 스페 또 이겼어. 몇 번째야?');
      await spe.say_and_wait(
        '예전에 엄마 농사일을 자주 도와드려서 그런가 봐. 그래도 이렇게 오래 버틴 우라라도 대단해!',
      );
      await urara.say_and_wait([
        '하지만 또 졌어! 어떻게 해야 이길 수 있지…… 아,',
        callname,
        '! 팔씨름은 어떻게 해야 이겨?',
      ]);
      await era.printAndWait([
        '응? 들켰나? 언제부터지. 멀리서 지켜보던 ',
        you.get_colored_name(),
        '에게 손을 흔드는 ',
        urara.get_colored_name(),
        '를 보자, 그저 지나가던 ',
        you.get_colored_name(),
        '도 ',
        urara.uma_sex_title,
        '들에게 다가갈 수밖에 없었다.',
      ]);

      await era.printAndWait([
        urara.get_colored_name(),
        '가 기합만으로 ',
        spe.get_colored_name(),
        '를 이기기는 어렵다. 하지만 ',
        urara.sex,
        '가 물어봤으니……',
      ]);
      era.printButton('「팔씨름에 필요한 건 기술이야.」（지능+10）', 1);
      era.printButton('「열심히 하면 되지…… 않을까?」（파워+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await sky.say_and_wait([
          '아아~',
          callname_20,
          '가 말하는 건 받침점, 힘점, 작용점이야? 흔히 말하는 팔씨름 기술이네~',
        ]);
        await urara.say_and_wait(
          '받침점, 힘점, 작용점……? 잘 모르겠지만 힘내는 주문이야?',
        );
        await urara.say_and_wait('좋아! 알았어! 그럼 한 판 더! 스페!');
        await era.printAndWait([
          '아니, 그렇게 이해하면 안 되는데. 더 할 말은 없지만,',
          urara.get_colored_name(),
          '도 ',
          you.get_colored_name(),
          '도 정말 이해했으면 좋겠다……',
        ]);
        await spe.say_and_wait(
          '응! 그럼, 그럼 나도 힘내는 주문! 『이기면 오늘 저녁은 당근 햄버그』!',
        );
        await era.printAndWait(
          '아니 잠깐, 이쪽은 또 뭐야. 당근 햄버그를 좋아하는 건 알겠지만……',
        );
        await sky.say_and_wait('즐거우면 됐잖아~ 자, 양쪽 다 준비…… 시작!');
        await era.printAndWait([
          '예상대로,',
          urara.get_colored_name(),
          '는 또 졌다. 하지만 ',
          urara.sex,
          '의 기분은 좋다. 그 「주문」도 마음에 든 모양이다. 수확은 있는 건가.',
        ]);
      } else {
        await era.printAndWait([
          urara.get_colored_name(),
          '가 팔씨름 기술을 아는지는 제쳐 두더라도, 실력 차이가 너무 크다면 시도할 수 있는 건 더 힘을 쓰는 것뿐이다.',
        ]);
        await urara.say_and_wait(
          '오오, 그렇구나! 레이스랑 똑같네? 엄청 열심히 하면 꼭 이길 수 있어!',
        );
        await urara.say_and_wait(
          '좋아! 그럼 스페, 한 판 더! 이번에는 꼭 이길 거야!',
        );
        await spe.say_and_wait(
          '우라라가 그렇게 말한다면 나도 레이스 때의 의욕으로 할게! 간다, 우라라!',
        );
        await era.printAndWait([
          spe.get_colored_name(),
          '도 전력을 다한다면 결과는 또 뻔한 셈이다……',
        ]);
        await sky.say_and_wait(
          '이야, 그래도 우라라, 그때 밀어붙였잖아~ 깜짝 놀랐어.',
        );
        await spe.say_and_wait('나도 순간 당황했어! 우라라 대단하네. 또 하자!');
        await urara.say_and_wait([
          '에헤헤!',
          callname,
          ', 우라라 역시 대단하지? 다음에는 절대 안 져——',
        ]);
        await era.printAndWait([
          '결국 또 졌다. 하지만 전력을 다 쏟아낸 ',
          urara.get_colored_name(),
          '는 만족스러워 보였다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_lost_found: (() => {
    const title = '소중한 분실물';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {PrintedSpan} callname_30 ライスシャワーのプレイヤーへの呼び方
     * @param {PrintedSpan} r_call_u ライスシャワーのハルウララへの呼び方
     */
    const f = async (
      urara,
      rice,
      you,
      callname,
      call_30,
      callname_30,
      r_call_u,
    ) => {
      await urara.say_and_wait([
        '응?',
        call_30,
        '의 리본, 어디로 갔을까?',
        callname,
        ', 거기 있어?',
      ]);
      await era.printAndWait([
        '학원 화단의 덤불에서 얼굴을 내민 ',
        urara.get_colored_name(),
        '는 머리의 나뭇잎을 떼어 내며 ',
        you.get_colored_name(),
        '에게 물었다.',
      ]);

      era.printButton('「이쪽에도 아무것도 없어. 조금 더 앞을 보자.」', 1);
      await era.input();

      await era.printAndWait([
        '길가 쓰레기통 뚜껑을 닫은 ',
        you.get_colored_name(),
        '는 그렇게 말하며 ',
        urara.get_colored_name(),
        '를 덤불에서 안아 꺼냈다.',
      ]);
      await rice.say_and_wait(
        '괘, 괜찮아요. 리본 하나뿐이니까 라이스가 새로 사면……',
      );
      await urara.say_and_wait(
        '하지만 정말 좋아하는 리본이지? 좋아한다면 소중한 거야! 괜찮아, 꼭 찾을 수 있어!',
      );
      await era.printAndWait([
        '포기하려는 ',
        rice.get_colored_name(),
        '의 말을 몇 번째인지 모르게 끊은 ',
        urara.get_colored_name(),
        '는 믿음직한 미소로 곁의 친구에게 다시 엄지를 세웠다.',
      ]);
      await urara.say_and_wait([
        '괜찮아, 꼭 찾을 수 있어! 아, 맞다,',
        callname,
        ', 지금부터 흩어져서 찾자——',
      ]);
      await era.printAndWait([
        '셋이 흩어지려던 순간 발밑의 물 자국이 번지며 비가 한꺼번에 쏟아졌다.',
      ]);
      await rice.say_and_wait([
        '비인가요!? 호, 혹시 라이스 탓……! 죄, 죄송해요……!',
      ]);

      era.printButton(
        '「아니, 스스로를 그렇게 말하지 마. 오늘 일기예보는 원래 비였어.」',
        1,
      );
      await era.input();

      await rice.say_and_wait([
        callname_30,
        '가 그렇게 말해 주셔도……',
        r_call_u,
        ', 정말 이제 안 찾아도 돼요! 폐를 끼쳐서……!',
      ]);

      await urara.say_and_wait([
        '괜찮아. 소중한 건 빨리 찾는 게 좋아! 그렇지,',
        callname,
        '？',
      ]);
      era.printButton(
        '「맞아. 조금만 더 힘내자. 셋이나 있잖아.」（체력-100 근성+20）',
        1,
      );
      era.printButton('「벌써 비가 오네. 일단 돌아가자.」（스태미나+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          '응,',
          callname,
          ' 말대로야! 지금 포기하기는 일러! 같이 찾자!',
        ]);
        await era.printAndWait([
          '그 뒤 점점 거세지는 비 속에서,',
          you.get_colored_name(),
          '와 두 작은 ',
          urara.uma_sex_title,
          '는 흠뻑 젖기 직전에 ',
          rice.get_colored_name(),
          '의 리본을 되찾았다.',
        ]);
        await urara.say_and_wait(
          '에헤헤~ 다들 하마터면 흠뻑 젖을 뻔했네. 그래도 리본을 찾아서 다행이야!',
        );
        await rice.say_and_wait([
          '죄, 죄송해요. 리본을 잃어버리고 비까지 내리게 해서…… 라이스, 또 모두에게 폐를……',
        ]);
        await urara.say_and_wait([
          '어?',
          call_30,
          ' 말대로라면……',
          call_30,
          ', 하늘에서 비를 내리게 할 수 있어?',
          call_30,
          ' 능력, 대단하다!',
        ]);
        await rice.say_and_wait([
          '아, 아니에요. 라이스는 그런 뜻이 아니에요,',
          r_call_u,
          '……',
        ]);
        await era.printAndWait([
          '두 친구는 또 작은 난관에 빠진 모양이다. 그래도 ',
          rice.get_colored_name(),
          '의 굳은 표정은,',
          urara.get_colored_name(),
          ' 덕분에 완전히 풀렸다.',
        ]);
        await era.printAndWait([
          '잠시 뒤,',
          you.get_colored_name(),
          '의 도움으로 옷을 말린 ',
          urara.get_colored_name(),
          '와 ',
          rice.get_colored_name(),
          '는 다시 미소를 지었다——',
        ]);
      } else {
        await urara.say_and_wait([
          callname,
          ', 우라라는 괜찮아. 비도 즐거운걸! 그보다 빨리 리본을 찾아야 해!',
        ]);
        await rice.say_and_wait([
          '하지만 젖으면 감기에 걸려요! 라이스는 ',
          r_call_u,
          '도 감기에 걸리지 않았으면 좋겠어요……',
        ]);
        await urara.say_and_wait(
          '으음…… 그럼 비가 그치면 다시 찾자. 빨리 와야 해! 약속이야!',
        );
        await era.printAndWait([
          '헤어진 뒤에도 비는 다음 날까지 계속 내렸다. 하지만 ',
          you.get_colored_name(),
          '와 ',
          rice.get_colored_name(),
          '가 그곳에 도착하자,',
          urara.get_colored_name(),
          '는 이미 리본을 들고 기다리고 있었다.',
        ]);
        await urara.say_and_wait([
          call_30,
          '！',
          callname,
          '! 여기야! 우라라, 리본 찾았어——!',
        ]);
        await rice.say_and_wait(['……', r_call_u, '……！']);
        await era.printAndWait([
          urara.get_colored_name(),
          '가 기쁘게 달려오는 모습을 보자, 방금까지 걱정스러운 얼굴이던 ',
          rice.get_colored_name(),
          '도 웃음을 되찾았다.',
        ]);
        await era.printAndWait([
          '역시 ',
          urara.sex,
          '는 아침 일찍 나와 리본을 찾으러 갔던 것이다. 짐작이 맞자,',
          you.get_colored_name(),
          '는 작은 ',
          urara.uma_sex_title,
          '의 사감과 룸메이트에게 연락을 보냈다……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  op_race_clothe: (() => {
    const title = '승부복에 관하여';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '오늘,',
        urara.get_colored_name(),
        '는 얼마 전 사고로 찢어져 수선을 맡겼던 승부복을 드디어 돌려받았다.',
      ]);
      await urara.say_and_wait(
        '에헤헤~ 우라라 승부복, 드디어 돌아왔다! 승부복을 입고 레이스하는 게 언제나 멋지다고 생각했어──!',
      );
      await era.printAndWait([
        '수수하지만 처음부터 ',
        urara.sex,
        '와 함께한 첫 승부복을 끌어안고,',
        urara.get_colored_name(),
        '의 기분은 눈에 띄게 좋아졌다.',
      ]);
      await era.printAndWait([
        '원래 승부복 디자인은 대체로 ',
        urara.uma_sex_title,
        ' 스스로 참여해서 완성한다. 그래서 한 벌 한 벌이 유일하다.',
      ]);
      await era.printAndWait([
        '남들이 아름답다거나 못생겼다고 평하더라도, 이 개성 있는 옷은 「',
        urara.teen_sex_title,
        '들의 꿈을 싣는 예복」이라 불릴 자격이 있다.',
      ]);
      await era.printAndWait([
        '다만 ',
        urara.get_colored_name(),
        '가 직접 구성한 「꿈의 첫 형태」는,',
        urara.sex,
        '답지만 어딘가 「흔하디흔한」 느낌도 든다……',
      ]);

      era.printButton(
        '「……그러고 보니 물어봐도 될까? 우라라는 처음에 이 옷을 어떻게 디자인했어?」',
        1,
      );
      await era.input();

      await era.printAndWait([
        you.get_colored_name(),
        '의 조심스러운 물음에,',
        urara.get_colored_name(),
        '는 활짝 웃으며 답했다.',
      ]);
      await urara.say_and_wait(
        '응? 그렇게 대단한 건 없어! 이 옷 디자인은 어릴 때 처음 달렸던 체육복을 참고했을 뿐이야!',
      );
      await urara.say_and_wait(
        '하나도 못 이겼지만 아빠랑 엄마는 칭찬해 줬어. 그래서 이 옷을 입으면 우라라가 강해질 수 있을 것 같아!',
      );
      await urara.say_and_wait(
        '강해지면 이 옷을 입을 때의 마음으로 모두도 즐겁게 해 주고 싶어!',
      );
      await era.printAndWait([
        '그렇구나.',
        urara.get_colored_name(),
        '의 꿈은 줄곧 이렇게 단순하고 수수하다. 그래서 승부복도 그렇게 된 것이다. 「강해지면」이라……',
      ]);
      await era.printAndWait([
        '승부복이 있는 것과 평생 그걸 입을 기회가 있는 것은 별개다.',
        urara.get_colored_name(),
        '도 그것은 알고 있다.',
      ]);
      await era.printAndWait([
        '아직 미숙해도,',
        urara.get_colored_name(),
        '는 처음부터 마음의 준비를 하고 있었다——',
      ]);

      urara.say([
        '맞다,',
        callname,
        '! 모처럼 고쳤으니까…… 오늘은 입고 트레이닝해도 돼?',
      ]);
      era.printButton('「또 망가지면 곤란해.」（스피드+20）', 1);
      era.printButton('「우라라가 기쁘다면 괜찮겠지.」（파워+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait(
          '——그렇네. 또 망가지면 안 되지. 승부복이니까 소중히 해야 해.',
        );
        await urara.say_and_wait([
          '우라라는 계속 이길 거야! 그러니까 ',
          callname,
          ', 입을 때 말고는 우라라 대신 맡아 줄래?',
        ]);
        await era.printAndWait([
          '승부복을 입을 기대를 품은 채,',
          urara.get_colored_name(),
          '는 자신의 「꿈」을 접어 웃으며 ',
          you.get_colored_name(),
          '의 손에 건넸다.',
        ]);
      } else {
        await era.printAndWait([
          urara.get_colored_name(),
          '의 얼굴 가득한 기대 앞에서,',
          you.get_colored_name(),
          '는 작은 ',
          urara.uma_sex_title,
          '의 눈부신 미소를 거스를 수 없었다.',
        ]);
        await urara.say_and_wait([
          '정말? 고마워,',
          callname,
          '! 열심히 할게. 앞으로의 레이스에서도 입을 수 있도록!',
        ]);
        await era.printAndWait([
          '하지만 ',
          urara.get_colored_name(),
          '가 만족한 뒤,',
          urara.sex,
          '는 「다음에 입을 때까지 소중히 할게!」라며 스스로 승부복을 ',
          you.get_colored_name(),
          '에게 맡겼다.',
        ]);
      }
      await era.printAndWait([
        '그렇다. 트레이너는 달리기로 선택한 「',
        urara.couple_title,
        '」가 꿈을 붙잡도록 돕는 직업이다.',
        you.get_colored_name(),
        '는 ',
        urara.get_colored_name(),
        '가 「신뢰」하는 트레이너이기도 하다——',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '를 끝까지 달리게 하자. 작은 ',
        urara.uma_sex_title,
        '를 처음 만났을 때와 같은 두근거림을 가슴에 품고,',
        you.get_colored_name(),
        '는 손에 든 승부복을 보며 각오를 다졌다.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_interview: (() => {
    const title = '친구와 함께하는 취재';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} etsuko 乙名史悦子
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_30 ハルウララのライスシャワーへの呼び方
     * @param {PrintedSpan} callname_30 ライスシャワーのプレイヤーへの呼び方
     * @param {PrintedSpan} r_call_u ライスシャワーのハルウララへの呼び方
     */
    const f = async (
      urara,
      rice,
      etsuko,
      you,
      callname,
      call_30,
      callname_30,
      r_call_u,
    ) => {
      await era.printAndWait([
        '오늘,',
        urara.get_colored_name(),
        '와 ',
        rice.get_colored_name(),
        '는 인터넷 매체의 특별 취재를 받았다. 실릴 곳은 『사이좋은 레이스 ',
        urara.uma_sex_title,
        '』 코너다.',
      ]);
      await era.printAndWait([
        '하지만 학원에서 자주 보이는 ',
        etsuko.get_colored_name(),
        '와 달리 낯선 사람이 진행하는 취재에 두 작은 ',
        urara.uma_sex_title,
        '는 좀처럼 평소 모습을 보이지 못했다.',
      ]);
      await era.printAndWait(
        '기자A 「그럼 두 분이 함께 지내면서 기억에 남는 일이 있나요?」',
      );
      if (
        era.get('cflag:30:招募状态') === recruit_flags.yes &&
        era.get('love:30') >= 50 &&
        era.get('love:52') >= 52
      ) {
        await urara.say_and_wait([
          '印象に残ってる？',
          callname,
          ' と一緒のとき？',
        ]);
        await rice.say_and_wait([
          'はい、',
          callname_30,
          ' と一緒のときは確かに印象深いです。独り占めもいいのですが……',
        ]);
        await rice.say_and_wait([
          'ライスと ',
          r_call_u,
          ' が一緒に飛びついたとき、',
          callname_30,
          ' は意外と弱気になります。本当に可愛いです。',
        ]);
        await urara.say_and_wait(
          'でしょ！でもウララ、こっそりお菓子を持っていくのはだめだと思うよ？みんなに言わないと。',
        );
        await rice.say_and_wait([
          r_call_u,
          ' はまだ子どもですから。でもライスは高等部で、もう大人ですよ……？',
        ]);
        await urara.say_and_wait('え？そうなの～？');
        await era.printAndWait(
          '記者が聞きたかった方向かはさておき、二人の友だちの空気がおかしくないか……？',
        );
        await era.printAndWait([
          '同じ空気で震えている記者さんを横目に見て、',
          you.get_colored_name(),
          ' はすぐ、この切りは出せないと判断した——',
        ]);
      } else {
        await urara.say_and_wait(
          '기억에 남는 일? 어떤 게 기억에 남는 거야? 우라라는 매일 그런 것 같은데?',
        );
        await rice.say_and_wait([
          '기, 기억에 남는 일……! 그, 그게, 라이스도…… 저기……!',
        ]);
        await rice.say_and_wait([
          '기억에 남기는 하지만 라이스는 매일 모두에게 폐만 끼쳐서…… 죄송해요……',
        ]);
        await urara.say_and_wait([
          '어?',
          call_30,
          ', 왜 또 풀이 죽었어? 정말 괜찮다니까——',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '는 난처한 마음으로 앞에 있는 기자를 바라보았다. 그녀도 살며시, 익숙하지만 씁쓸한 눈빛을 돌려주었다.',
        ]);
        await era.printAndWait([
          '보다시피,',
          urara.get_colored_name(),
          ' ',
          urara.couple_title,
          '의 지금 모습은 취재진이 예상한 방향과 전혀 다르다.',
        ]);
      }
      await era.printAndWait([
        '취재가 멈춘 틈에 연락 창구이자 보호자 역할인 ',
        you.get_colored_name(),
        '는 취재진과 다음 진행을 의논하기 시작했다.',
      ]);
      await era.printAndWait([
        '기자A 「죄송합니다.',
        urara.couple_title,
        '를 더 잘 보여 드리기 위해 취재 방향을 다시 잡고 싶어서요…… 조금만 시간을 주세요.」',
      ]);

      era.printButton('「수고 많으시네요. 이쪽에서도 뭔가 생각해 볼게요.」', 1);
      await era.input();

      await era.printAndWait([
        '거듭 감사하다는 기자를 일단 보내고,',
        you.get_colored_name(),
        '는 다시 조금 떨어진 곳에서 이야기하는 라이스와 ',
        urara.get_colored_name(),
        '에게 눈을 돌렸다.',
      ]);
      await rice.say_and_wait([
        '정말 죄송해요. 아까 라이스는 조금 흥분해서…… 추억이 이렇게 많은데도……',
      ]);
      await rice.say_and_wait([
        r_call_u,
        '와 함께 취재를 받을 수 있어서 라이스는 정말 기뻐요…… 그냥 이야기하면 되는 거였는데……',
      ]);
      await urara.say_and_wait([
        '우라라도 그래!',
        call_30,
        '와 함께 특집 기사에 실리다니 꿈만 같아!',
      ]);
      await urara.say_and_wait([
        '그러니까 괜찮아.',
        call_30,
        '는 너답게 있으면 돼. 우라라는 ',
        call_30,
        ' 곁에 있을게!',
      ]);
      await rice.say_and_wait('하, 하지만……!');
      await era.printAndWait(
        '한눈에 알 수 있다. 한쪽은 생각이 너무 많아 불안이 앞서고, 다른 한쪽은 평소처럼 너무 들떠 있다.',
      );

      era.print([
        '다음 코너에서 ',
        urara.couple_title,
        '의 마음을 편안하게 해 줄 좋은 방법이 없을까……',
      ]);
      era.printButton(
        `${urara.couple_title}에게 간식을 가져다준다.（파워+20）`,
        1,
      );
      era.printButton(
        `${urara.couple_title}를 데리고 놀러 간다.（스태미나+20）`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          '어? 간식 먹어도 돼? 고마워,',
          callname,
          '——',
          call_30,
          '! 자, 아~!',
        ]);
        await rice.say_and_wait([
          '네?',
          rice.get_colored_name(),
          '도 먹어도 되나요…… 앗!',
          r_call_u,
          ', 너무 뜨거워요!',
          rice.get_colored_name(),
          '는 혼자 먹을 수 있어요……!',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '가 등을 밀어 주자,',
          urara.get_colored_name(),
          '와 ',
          rice.get_colored_name(),
          '는 떠들썩하게 간식을 나눠 먹기 시작했다. 곁의 스태프도 곧바로 카메라를 설치했다.',
        ]);
        await rice.say_and_wait(
          '……네. 간식에는 특별한 마법을 넣으니까 먹으면 행복해져요……',
        );
        await urara.say_and_wait(
          '맞아! 지난번에 같이 쿠키 만들었잖아? 모두의 마법 레시피를 넣었더니 정말 더 맛있어졌어!',
        );
        await era.printAndWait(
          '기자A 「그 추억, 정말 재미있네요. 저도 관심이 생겨요. 조금 더 자세히 말씀해 주시겠어요?」',
        );
        await urara.say_and_wait([
          '기자 언니도 관심 있어? 그럼 잠깐만……',
          call_30,
          '! 우라라, 가정 실습실 빌려 와도 돼?',
        ]);
        await rice.say_and_wait([
          '네? 지금요? 그럼 ',
          rice.get_colored_name(),
          ', 지난번에 남은 재료를 찾아올게요!',
        ]);
        await era.printAndWait([
          '다시 구성을 짜서 진행한 취재에서, 특별 방송은 마침내 두 작은 ',
          urara.uma_sex_title,
          '가 생기 있게 대답하는 모습을 모두 담아냈다.',
        ]);
        await era.printAndWait(
          '후반부가 갑자기 과자 만들기 방송이 된 이유는 모르겠지만, 모두 즐거우면 됐겠지.',
        );
      } else {
        await urara.say_and_wait([
          '어? 놀러 가도 돼? 취재는 괜찮아…… 아! 우라라, 알았어……',
          call_30,
          '！',
        ]);
        await rice.say_and_wait([
          '네, 네에!? 지금 뭐 하시는…… 와아! 자, 잠깐만요!',
          r_call_u,
          ', 그러시면 안 돼요~!',
        ]);
        await era.printAndWait([
          '하지만 어딘가 맞물리지 않는다. 그저 작은 ',
          urara.child_sex_title,
          '들의 놀이일 뿐인데 왜 이렇게 이상하게 들리는 걸까……',
        ]);
        await era.printAndWait(
          '기자A 「하지만 이 장면은 정말 좋네요. 잠시만요, 바로 찍을게요!」',
        );
        await era.printAndWait(
          '술래잡기하는 둘을 금세 알아본 기자가 카메라를 들고 연속 촬영을 시작했다——',
        );
        await rice.say_and_wait([
          '으으~',
          r_call_u,
          '! 더 그러시면 ',
          rice.get_colored_name(),
          '도 화낼 거예요——좋아요!',
          rice.get_colored_name(),
          '、',
          r_call_u,
          '를 따라잡았어요!',
        ]);
        await urara.say_and_wait([
          '잠깐, 잠깐!',
          call_30,
          ', 그러지 말자! 우라라가 잘못했어!?',
        ]);
        await era.printAndWait('……역시 뭔가 오해받고 있어!');
        await era.printAndWait(
          '며칠 뒤 특별 기사에 둘이 노는 사진이 실렸다. 최고의 사진이라 불리며 한때 화제도 된 모양이다.',
        );
        await era.printAndWait([
          'なぜか場を壊すような',
          urara.sex_code === 1 ? 'ショタ' : 'ロリ',
          '好き成分が混ざってはいるが、結果としてはちゃんと着地した……はずだ。',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_challenge: (() => {
    const title = '「레전드」에게 도전';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} spe スペシャルウィーク
     * @param {CharaTalk} grass グラスワンダー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} call_1 ハルウララのスペシャルウィークへの呼び方
     * @param {PrintedSpan} call_11 ハルウララのグラスワンダーへの呼び方
     * @param {PrintedSpan} callname_11 グラスワンダーのプレイヤーへの呼び方
     * @param {PrintedSpan} g_call_s グラスワンダーのスペシャルウィークへの呼び方
     * @param {PrintedSpan} g_call_u グラスワンダーのハルウララへの呼び方
     */
    const f = async (
      urara,
      spe,
      grass,
      you,
      callname,
      call_1,
      call_11,
      callname_11,
      g_call_s,
      g_call_u,
    ) => {
      await era.printAndWait([
        '어느 오후,',
        you.get_colored_name(),
        '가 트레이너실로 향하던 중 복도에서 누군가와 이야기하는 ',
        urara.get_colored_name(),
        '를 보았다.',
      ]);
      await urara.say_and_wait([
        call_11,
        '! 이번 기회에 같이 ',
        call_1,
        '를 이겨 보자!',
      ]);
      await grass.say_and_wait(
        '마음은 이해해요…… 하지만, 그게…… 싸움의 격이 너무 다르다고 해야 할까요……',
      );
      era.printButton(`「무슨 일이야? 스페와 레이스라도 해?」`, 1);
      await era.input();

      await urara.say_and_wait(
        '맞아! 상점가에서 곧 엄청난 대회를 연대! 이름은——',
      );
      await era.printAndWait([
        urara.get_colored_name(),
        '가 손에 든 포스터를 펼쳤다. 소박한 편집으로,',
        spe.get_colored_name(),
        '가 초대형 라멘에 도전한 「위업」이 실려 있다.',
      ]);
      await era.printAndWait([
        '거창한 포스터를 보고, 미소 속에 망설임을 띤 ',
        grass.get_colored_name(),
        '와 눈이 마주치자,',
        you.get_colored_name(),
        '는 다음 전개를 대충 짐작했다.',
      ]);
      await urara.say_and_wait(
        '『레전드☆스페셜 위크에게 도전! 초특대 라멘을 다 먹어라!』 어때? 멋지지!',
      );
      await urara.say_and_wait(
        '라멘 가게에도 물어보고 왔어. 마침 참가자 두 명을 모집하고 있었어!',
      );
      await urara.say_and_wait([
        '그러니까,',
        call_11,
        '~ 같이 도전하자! 분명 ',
        call_1,
        '를 이길 수 있어~',
      ]);
      await era.printAndWait([
        '하지만 ',
        urara.get_colored_name(),
        '의 응석 공세에도 빈틈없는 요조숙녀는 조금도 흔들리지 않았다.',
      ]);
      await grass.say_and_wait([
        '하지만,',
        g_call_u,
        '……다 드실 수 있겠어요? 점심은 늘 저보다 적게 드셨잖아요……',
      ]);
      if (era.get('cflag:11:招募状态') === recruit_flags.yes) {
        await you.say_and_wait(
          [
            '하지만,',
            grass.get_colored_name(),
            '의 식욕은 꽤 왕성한 편이지? 한 번에 가져오는 양은 적어도 몰래 여러 번 오가는 것 같던데……',
          ],
          true,
        );
        await you.say_and_wait(
          [
            '게다가 ',
            grass.get_colored_name(),
            ', 사실 먹으러 가고 싶은 거잖아?',
            grass.teen_sex_title,
            '로서의 자부심과 체중 관리 때문에 못 움직일 뿐, 몰래 침을 삼키고 있잖아?',
          ],
          true,
        );
        await era.printAndWait([
          '다만…… 그런 말은 마음속에만 두었다.',
          grass.get_colored_name(),
          '의 여전히 다정한 미소를 보며,',
          you.get_colored_name(),
          '는 목숨이 위험해질 것 같은 정보를 삼켰다.',
        ]);
      }
      await urara.say_and_wait(
        '괜찮아! 시합 전에 몇 끼 굶어 두면 문제없어! 많이 먹기 대회의 요령이야!',
      );
      await grass.say_and_wait([
        '음…… 정말 괜찮을까요? 그것만으로 ',
        g_call_s,
        '를 이길 수 있을 것 같지는 않은데요……?',
      ]);
      await urara.say_and_wait([
        '그렇네,',
        call_1,
        '는 레전드니까. 그래도…… 지금 이 기회를 포기하면 아깝지 않아?',
      ]);
      await grass.say_and_wait([g_call_u, '……']);
      era.print([
        '아까부터 ',
        grass.get_colored_name(),
        '의 눈짓을 계속 받던 ',
        you.get_colored_name(),
        '는 마침내 대화에 끼어들 틈을 잡았다.',
      ]);

      era.printButton(
        `「역시 레이스에서 ${urara.sex}를 이기자.」（체력+100 스킬 Pt+5）`,
        1,
      );
      era.printButton(
        '「그럼…… 도전해 볼까?」（체력+300 스킬 Pt+10 체중 증가）',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await grass.say_and_wait([
          callname_11,
          ' 말씀대로예요. 위장 크기로 겨루는 것보다 레이스가 분명 더 재미있을 거예요.',
        ]);
        await urara.say_and_wait(
          '그렇게까지 말한다면…… 응! 우라라, 알았어! 앞으로 레이스에서 더 대단한 레전드가 될게!',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '와 ',
          grass.get_colored_name(),
          '의 도움으로 오늘 ',
          urara.get_colored_name(),
          '는 체중 증가의 위기를 무사히 피했다.',
        ]);
        await era.printAndWait(
          '다만 「레이스에서 레전드가 된다」라. 나쁘지 않은 말이다……',
        );
      } else {
        await era.printAndWait([
          '이길 가능성은 희박하지만,',
          urara.get_colored_name(),
          '가 무언가 배울 수 있다면 그것도 나쁘지 않을지 모른다. 그러니까……',
        ]);
        await urara.say_and_wait([
          '응!',
          callname,
          '가 그렇게 말한다면 우라라, 꼭 갈래——',
        ]);
        await grass.say_and_wait(
          '후후, 그 굳은 마음은 훌륭하네요. 그럼 두 분 모두 힘내세요.',
        );

        era.printButton(
          '「응? 잠깐, 어딘가 이상하지 않아? 『두 분』이라니?」',
          1,
        );
        await era.input();

        await grass.say_and_wait(
          '아까 『우리 도전해 보자』고 하셨잖아요. 저는 두 분을 힘껏 응원할게요.',
        );
        await era.printAndWait([
          '역시 만만찮은 ',
          urara.uma_sex_title,
          '다. 얼굴색 하나 바꾸지 않고 포위망을 빠져나갔다…… 아니, 그게 아니다!',
          urara.sex,
          '는 다른 사람을 대신 밀어 넣었다!',
        ]);
        await urara.say_and_wait([
          '어?',
          callname,
          '가 ',
          urara.uma_sex_title,
          '급 대회에 나가는 거야? 대단해! 그럼 같이 힘내자,',
          callname,
          '！',
        ]);
        await era.printAndWait([
          '눈을 반짝이는 작은 ',
          urara.uma_sex_title,
          '와 「다정한 눈」으로 이쪽을 바라보는 ',
          grass.get_colored_name(),
          '……',
        ]);
        await era.printAndWait([
          '식은땀을 흘리는 ',
          you.get_colored_name(),
          '는 변명하려고 들었던 손을 내리고, 표정만이라도 「짓눌릴 것 같다」고 보이지 않도록 애썼다.',
        ]);
        await era.printAndWait([
          '그리고 며칠 뒤…… 뭐라고 해야 할까. 레전드가 진심을 내면 정말 엄청나서,',
          you.get_colored_name(),
          '는 당분간 라멘을 보고 싶지 않다고 생각했다……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_farthest: (() => {
    const title = '조금 돌아갈까?';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '외출하고 돌아오는 길. 너무 많이 놀아서인지,',
        urara.get_colored_name(),
        '가 조금 지쳐 보여 근처에서 쉬기로 했다.',
      ]);
      await era.printAndWait([
        '근처 공원 벤치에 앉아 앞으로 놀 계획을 조금 세운 뒤,',
        you.get_colored_name(),
        '는 가까운 자판기에서 캔 음료 두 개를 사 왔다.',
      ]);
      await era.printAndWait([
        '하지만 따뜻한 음료를 들고 공원에 돌아오자, 방금까지도 기운이 있던 ',
        urara.get_colored_name(),
        '는 벌써 벤치에 기대 잠들어 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '가 내민 팔을 끌어안고 벤치에서 몸을 웅크린 작은 ',
        urara.uma_sex_title,
        '는 꿈속에서 작게 중얼거리며 점점 ',
        you.get_colored_name(),
        '의 품을 차지해 갔다.',
      ]);
      await urara.say_and_wait([
        '에헤헤~',
        callname,
        '……같이 먹자…… 이거 우라라가 제일 좋아하는 과자야……',
      ]);

      era.print([
        urara.get_colored_name(),
        '는 좋은 꿈을 꾸는 걸까.',
        you.get_colored_name(),
        '는 바로 깨워야 할지 조금 망설였다……',
      ]);
      era.printButton('「그럼…… 우라라 몫도 먹어 버릴까?」（스킬 Pt+30）', 1);
      era.printButton(
        `우라라를 깨우지 않고, 잠든 ${urara.sex}를 업고 돌아간다.（스태미나+10）`,
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          urara.get_colored_name(),
          '의 귓가에 살며시 다가가,',
          you.get_colored_name(),
          '는 작은 ',
          urara.uma_sex_title,
          '의 귀 주변 솜털을 쓰다듬으며 작은 목소리로 ',
          urara.sex,
          '의 꿈을 흔들었다.',
        ]);
        await urara.say_and_wait([
          '어? 안 돼! 혼자 다 먹으면 안 돼,',
          callname,
          '！',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '에게 과자를 빼앗기는 꿈을 꾸고 벌떡 깨어난 ',
          urara.get_colored_name(),
          '는 꼬리까지 곤두서서 벤치에서 뛰어내릴 기세였다.',
        ]);
        await era.printAndWait([
          '하지만 작은 ',
          urara.uma_sex_title,
          '가 몽롱함에서 벗어나자 당황한 벚꽃빛 눈동자에는 똑같이 놀란 트레이너만 비쳤다.',
        ]);
        await urara.say_and_wait('어라? 과, 과자…… 아, 혹시……?');

        era.printButton('「맞아. 우라라는 꿈속에서도 기합이 넘치네.」', 1);
        await era.input();

        await urara.say_and_wait([
          '그렇구나.',
          callname,
          '는 우라라 과자를 뺏지 않지…… 그래도 좋은 꿈이었으니까 괜찮아!',
        ]);
        await urara.say_and_wait([
          '있지,',
          callname,
          '. 다음에 또 같이 있을 때 우라라랑 과자 먹어 줄래?',
        ]);

        era.printButton('「물론이지.」', 1);
        await era.input();

        await era.printAndWait([
          '아직 따뜻한 음료를 ',
          urara.get_colored_name(),
          '에게 건네고,',
          you.get_colored_name(),
          '는 「약속이야!」라고 말하는 ',
          urara.get_colored_name(),
          '와 또 하나의 약속을 나누었다.',
        ]);
        await era.printAndWait([
          '다 마신 캔을 쓰레기통에 제대로 넣은 뒤,',
          you.get_colored_name(),
          '와 ',
          urara.get_colored_name(),
          '는 노을을 받으며 다시 집으로 향했다.',
        ]);
      } else {
        await era.printAndWait([
          urara.get_colored_name(),
          '를 천천히 품에서 등으로 옮긴 뒤,',
          you.get_colored_name(),
          '는 ',
          urara.get_colored_name(),
          '를 깨우지 않도록 조심스레 일어났다.',
        ]);
        await urara.say_and_wait([
          '으응……?',
          callname,
          '……우라라, 아까 어떻게 된 거야?',
        ]);

        era.printButton('「깼어? 얼른 돌아가서 쉬자. 괜찮아?」', 1);
        await era.input();

        await era.printAndWait([
          urara.get_colored_name(),
          '는 걷는 흔들림에 문득 깨어난 모양이다. 하지만 지금의 ',
          you.get_colored_name(),
          '는 여기서 ',
          urara.sex,
          '를 내려놓을 생각이 없다.',
        ]);
        await urara.say_and_wait('어……? 우라라, 잠들었구나…… 후우……');
        await era.printAndWait([
          '작은 ',
          urara.uma_sex_title,
          '를 업고 조금 걷자,',
          urara.sex,
          '는 곧 다시 아까의 좋은 꿈으로 돌아갔다.',
        ]);
        await urara.say_and_wait([
          '에헤헤…… 맛있지…… 아직 많이 있어……',
          callname,
          '는 어른이잖아…… 이제 부끄러워하지 마……',
        ]);
        await era.printAndWait(
          '신경이 쓰이지 않을 수 없다. 대체 어떤 꿈을 꾸는 거지……',
        );
        await era.printAndWait([
          urara.sex,
          '를 깨우지 않도록,',
          you.get_colored_name(),
          '는 천천히 기숙사까지 걸었다. 기숙사에 도착해 당번 학생에게 ',
          urara.sex,
          '를 맡길 때까지,',
          urara.get_colored_name(),
          '는 눈을 뜨지 않았다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_park: (() => {
    const title = '옥상의 「놀이공원」';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await urara.say_and_wait([
        callname,
        ', 우라라랑 잠깐 가 줬으면 하는 곳이 있어. 괜찮아, 금방 끝나!',
      ]);
      await era.printAndWait([
        '상점가 특훈을 마치고 돌아오는 길, 곁의 ',
        urara.get_colored_name(),
        '는 조금 앞에 있는 건물을 보더니,',
        you.get_colored_name(),
        '의 소매를 붙잡았다.',
      ]);
      await era.printAndWait([
        '그 뒤 ',
        you.get_colored_name(),
        '는 ',
        urara.get_colored_name(),
        '를 따라 근처에 새로 생긴 복합 쇼핑몰로 가서 외부 전망 엘리베이터를 타고 옥상으로 올라갔다.',
      ]);
      await era.printAndWait(
        '철문이 맑은 종소리와 함께 천천히 열리자, 유리 지붕으로 덮인 옥상 위 작은 놀이공원이 두 사람 앞에 나타났다.',
      );
      await era.printAndWait(
        '평일이라 그런지 이 작은 놀이공원에는 지금 아무도 없다. 전자 발권기와 시설의 조명만 쓸쓸히 켜져 있다.',
      );
      await era.printAndWait([
        '하지만,',
        urara.get_colored_name(),
        '가 갑자기 놀이공원에서 놀고 싶어진 건…… 아니겠지.',
      ]);

      era.printButton('「뭔가 생각났어?」', 1);
      await era.input();

      await era.printAndWait([
        '함께 안으로 들어가자,',
        urara.get_colored_name(),
        '는 중앙의 작은 회전 찻잔을 바라보며 조용히 입을 열었다.',
      ]);
      await urara.say_and_wait(
        '주말이 되면 상점가 아이들은 모두 여기 놀러 와. 가깝고 큰 놀이공원보다 표도 싸니까.',
      );
      await urara.say_and_wait(
        '게다가 상점가를 되살리고 싶은 아저씨나 아주머니들은 싫어할지 모르지만, 여기는 뭘 하든 편리해.',
      );
      await urara.say_and_wait([
        '그래서 우라라, 생각했어. 상점가 사람들에게 필요한 건 모두가 말하는 부흥이 아니라 변할 계기라고……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '와 귀여운 찻잔들은 조용히 ',
        urara.teen_sex_title,
        '의 생각을 들었다. 번갈아 반짝이는 조명이,',
        urara.teen_sex_title,
        '의 벚꽃빛 눈동자를 더 짙게 물들였다.',
      ]);
      await urara.say_and_wait(
        '환경은 바꿀 수 있어. 문제는 많을지 몰라도 열심히 하면 분명 괜찮을 거야.',
      );
      await era.printAndWait([
        '맞는 말이다. 아마 어느 것도 서로 충돌하지 않을 것이다. 사람들이 있고,',
        urara.get_colored_name(),
        '가 ',
        urara.get_colored_name(),
        '인 한, 모든 것은 그대로다.',
      ]);
      await era.printAndWait([
        '뜻밖이기도 하다. 어려 보여도,',
        urara.get_colored_name(),
        '의 생각은 점점 깊어져서,',
        urara.sex,
        '의 많은 반 친구들보다 더 먼 곳까지 닿고 있다……',
      ]);

      urara.say(['맞다,', callname, '. 이왕 왔으니까 우라라랑 같이 탈래?']);
      era.printButton('「우라라가 피곤하지 않다면 괜찮아.」（스피드+10）', 1);
      era.printButton('「난 괜찮아. 우라라 혼자 타.」（파워+10）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await urara.say_and_wait([
          '응! 그러니까 오늘은 조금 늦게 돌아가도 되지,',
          callname,
          '？',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '의 대답을 듣고 작은 ',
          urara.uma_sex_title,
          '는 ',
          you.get_colored_name(),
          '에게 만족스러운 미소를 지은 뒤,',
          you.get_colored_name(),
          '와 함께 작고 정교한 놀이기구에 올라탔다.',
        ]);
        await era.printAndWait([
          '찻잔은 음악에 맞춰 부드럽게 돌고, 석양이 유리 지붕을 지나 멀리 바라보는 작은 ',
          urara.uma_sex_title,
          '의 얼굴을 비췄다.',
        ]);
        await era.printAndWait([
          '이 작은 사상가는 지금 무슨 생각을 할까. 아니면 얼굴의 미소처럼 그저 조금 기쁠 뿐일까.',
        ]);
      } else {
        await urara.say_and_wait(['왜?', callname, '는 이제 어른이라서?']);
        await era.printAndWait([
          you.get_colored_name(),
          '의 어쩔 수 없다는 듯한 대답을 듣고,',
          urara.teen_sex_title,
          '는 조금 쓸쓸해하면서도 웃으며 곁의 어른에게 농담을 건넸다.',
        ]);

        era.printButton('「이제 어른이니까.」', 1);
        await era.input();

        await urara.say_and_wait([
          '그럼 같이 돌아가자,',
          callname,
          '. 우라라도 얼른 어른이 돼야지!',
        ]);
        await era.printAndWait([
          '그래도 괜찮은 걸까. 웃고 있는 ',
          urara.get_colored_name(),
          '의 눈을 보며,',
          you.get_colored_name(),
          '는 그 질문을 입 밖에 내지 못했다.',
        ]);
        await era.printAndWait([
          '석양을 등지고 엘리베이터에 오른 ',
          you.get_colored_name(),
          '와 ',
          urara.get_colored_name(),
          '는 다시 집으로 향했다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_forget: (() => {
    const title = '먹는 걸 잊었어?';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ハルウララのプレイヤーへの呼び方
     */
    const f = async (urara, you, callname) => {
      await era.printAndWait([
        '하루 동안의 야외 특훈을 마치고,',
        you.get_colored_name(),
        '가 ',
        urara.get_colored_name(),
        '를 학원 정문까지 데려다줬을 때──',
      ]);
      await urara.say_and_wait(['아!', callname, '! 중요한 걸 잊었나 봐!']);

      era.printButton(
        '「무슨 일이야?! 갑자기 큰 소리를 내고. 중요한 걸 특훈한 곳에 두고 왔어?」',
        1,
      );
      await era.input();

      await urara.say_and_wait(
        '아니야! 돌아오는 길에 사는 걸 잊었어! 새로운 맛 붕어빵이랑 꿀 특제 음료!',
      );
      await urara.say_and_wait([
        callname,
        '도 말 안 해 준 것 같은데, 지금이면 아직 문 안 닫았을 거야. 하나만이라도……',
      ]);

      era.printButton('「어? 아아…… 응, 그래……」', 1);
      await era.input();

      await era.printAndWait([
        '이제 익숙해졌을 법도 한데,',
        urara.get_colored_name(),
        '의 호들갑스러운 고민을 듣자,',
        you.get_colored_name(),
        '는 자기도 모르게 맥 빠진 대답을 했다.',
      ]);
      await urara.say_and_wait([
        callname,
        '! 그 반응은 뭐야! 우라라도 화낼 거야!',
      ]);

      urara.say([
        '하지만 지금이면 아직 늦지 않았어!',
        callname,
        '、',
        you.get_colored_name(),
        '의 제안은……',
      ]);
      era.printButton(
        '「꿀 특제 음료 쪽이 더 가까워. 지금 뛰면 늦지 않아!」（근성+10）',
        1,
      );
      era.printButton(
        '「붕어빵은 조금 멀지만 아직 문을 닫지는 않았을 거야!」（스태미나+10）',
        2,
      );
      const ret = await era.input();
      await urara.say_and_wait([
        '좋아!',
        callname,
        '가 그렇게 말한다면 우라라, 얼른 갔다 올게! 잠깐 기다려——!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '를 교문에 남겨 둔 채 작은 ',
        urara.uma_sex_title,
        '는 본 적 없는 속도로 상점가를 향해 달려갔다.',
      ]);

      era.printButton('「천천히! 길 조심해!」', 1);
      await era.input();

      await era.printAndWait([
        '자신의 목소리보다 먼저 시야 끝으로 사라지는 작은 뒷모습을 바라보며,',
        you.get_colored_name(),
        '는 어쩔 수 없다는 듯 고개를 저었다.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '가 간식에 쏟는 집중력을 평소 트레이닝과 모의 레이스에도 조금 나눠 주면 좋을 텐데.',
      ]);
      if (ret === 1) {
        await era.printAndWait([
          '하지만 잠시 뒤,',
          you.get_colored_name(),
          '는 ',
          urara.get_colored_name(),
          '가 웃으며 손에 쥐여 준 꿀 특제 음료를 보고, 역시 정성껏 맛보기로 했다……',
        ]);
      } else {
        await era.printAndWait([
          '하지만 잠시 뒤,',
          you.get_colored_name(),
          '는 ',
          urara.get_colored_name(),
          '가 웃으며 손에 쥐여 준 붕어빵을 보고, 역시 정성껏 맛보기로 했다……',
        ]);
      }
      await era.printAndWait([
        '……다만 ',
        you.get_colored_name(),
        '의 혀에는 한두 번 먹은 것도 아닌데 여전히 너무 달다.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  be_crazy_fan: (() => {
    const title = '떠나가는 봄';
    /**
     * @param {CharaTalk} urara ハルウララ
     * @param {CharaTalk} inner_urara 「ハルウララ」
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname ハルウララのプレイヤーへの呼び方
     * @param {boolean} has_begun ウララはすでにデビューしているか
     * @param {boolean} join_arim_kin_c ウララはクラシック年の有馬記念に出走したか
     */
    const f = async (
      urara,
      inner_urara,
      you,
      callname,
      has_begun,
      join_arim_kin_c,
    ) => {
      await era.printAndWait(
        '너무나 갑작스레 끝난 여정이 무엇을 의미하는지 이제 와서 따져 봐야 소용없을지도 모른다.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '도 ',
        urara.get_colored_name(),
        '도 알고 있다. 두 사람이 헤어지는 결말은 원래 여기에 있어서는 안 됐다.',
      ]);
      await era.printAndWait([
        '여행 가방 손잡이를 꼭 쥔 ',
        urara.get_colored_name(),
        '는,',
        urara.sex,
        ' 곁에서 나올 리 없던 작은 한숨을 내쉬었다.',
      ]);
      await era.printAndWait([
        '아무도 ',
        urara.get_colored_name(),
        '를 탓하지 않는다. 트레이너도 수고했다는 말까지 듣는다. 하지만 ',
        you.get_colored_name(),
        '도 ',
        urara.get_colored_name(),
        '도 이야기가 이래서는 안 됐다는 걸 알고 있다.',
      ]);
      await era.printAndWait([
        '전학 절차는 이미 끝났다. 그래도 이것은 모두에게 숨긴 채 제멋대로 정한 이별이다. 배웅하러 온 것도 ',
        you.get_colored_name(),
        ' 혼자뿐이다.',
      ]);
      await era.printAndWait([
        '그런데도 곁의 작은 ',
        urara.uma_sex_title,
        '는 침울한 ',
        you.get_colored_name(),
        '를 오히려 위로해 준다.',
      ]);
      if (has_begun) {
        await urara.say_and_wait([
          '괜찮아. 이제 달릴 수 없어도 우라라는 어떻게든 할 거야! 그보다 ',
          callname,
          '는 괜찮아?',
        ]);
        await era.printAndWait([
          '남을 위로하는 말인데도,',
          urara.get_colored_name(),
          '의 얼굴에서도 침울함을 감출 수 없다.',
        ]);
        await era.printAndWait([
          '그 레이스에서 넘어진 뒤 몸에는 문제가 없는데도,',
          urara.get_colored_name(),
          '는 너무 이르게 ',
          urara.uma_sex_title,
          '로서의 힘을 잃었다.',
        ]);
        await era.printAndWait([
          '그것을 받아들이지 못한 사람들은 마지막에 ',
          urara.sex,
          '를 지키지 못한 ',
          you.get_colored_name(),
          '에게 비난의 화살을 돌렸다.',
        ]);
        await era.printAndWait([
          '하지만 개인을 향한 감정은 시간이 흐르면 흩어진다. 그래서 ',
          urara.get_colored_name(),
          '의 걱정에,',
          you.get_colored_name(),
          '는 말없이 고개를 저을 뿐이었다.',
        ]);
        await urara.say_and_wait([
          '……',
          callname,
          '가 정말 그렇게 생각한다면,',
          urara.get_colored_name(),
          '도 너무 걱정하지 않아도 되겠네. 모두도. 원래 아리마에는 나가지 못했으니까……',
        ]);
        if (join_arim_kin_c) {
          await urara.say_and_wait(
            '그래도 한 번 더 갈 수 있었으면 좋았을 텐데……',
          );
        } else {
          await urara.say_and_wait(
            '그래도 한 번만이라도 갈 수 있었으면 좋았을 텐데……',
          );
        }
      } else {
        await urara.say_and_wait([
          '괜찮아,',
          callname,
          '. 걱정하지 마. 고향에 돌아갈 뿐이야. 우라라는 앞으로도 달릴 거야!',
        ]);
        await era.printAndWait([
          '하지만 ',
          you.get_colored_name(),
          '는 알고 있다. 남을 위로하는 말이 아무리 밝아도 얼굴의 침울함은 감출 수 없다.',
          urara.get_colored_name(),
          '도 마찬가지다.',
        ]);
        await era.printAndWait([
          '그래도 쓸쓸함을 감추려고, 그리고 ',
          you.get_colored_name(),
          '를 깊이 슬프게 하지 않으려고 작은 ',
          urara.uma_sex_title,
          '는 무리해서 더듬더듬 말을 이었다.',
        ]);
        await urara.say_and_wait([
          '많은 사람이,',
          callname,
          '는 우라라를 속였을 뿐이라고 해. 하지만 우라라는 알아.',
          callname,
          '는 잘못 없어. 우라라가 너무 느렸을 뿐이야.',
        ]);
        await urara.say_and_wait(
          '다만 이대로 돌아가면 엄마는 뭐라고 할까. 엄마는 우라라에게 화낸 적 없지만……',
        );
        await urara.say_and_wait(
          '떠나기 전에 우라라도 한 번쯤 일등을 했으면 좋았을 텐데……',
        );
      }
      era.println();
      await era.printAndWait([
        '멀리서 승강장으로 들어오는 열차를 보며,',
        urara.get_colored_name(),
        '는 눈물을 참고 애써 씩씩한 척하며 ',
        you.get_colored_name(),
        '의 옷자락을 쥐고 있던 작은 손을 놓았다.',
      ]);
      await era.printAndWait([
        '그 뒤, 작은 ',
        urara.uma_sex_title,
        '가 마지막까지 참던 눈물은 결국 억누르지 못하고 먼저 흘러내렸다.',
      ]);
      era.println();
      if (era.get('love:52') >= 50) {
        await era.printAndWait([
          '눈물의 짠맛을 머금은 가벼운 입맞춤이 ',
          you.get_colored_name(),
          '의 입술에 내려앉았다. 발끝으로 선 ',
          urara.get_colored_name(),
          '의 얼굴은 이미 눈물범벅이다.',
        ]);
        await urara.say_and_wait([
          '미안해,',
          callname,
          '. 또 만날 수 있을 텐데…… 그래도 우라라는 역시 이렇게 하고 싶었어……',
        ]);
        await urara.say_and_wait(
          '괴로워…… 그래도 우라라는 제대로 작별 인사를 해야 하는데……',
        );
      } else {
        await urara.say_and_wait([
          '……우라라는 역시 ',
          callname,
          '와…… 더 먼 미래를 보고 싶었어……',
        ]);
        await urara.say_and_wait([
          '하지만 안 돼…… 이제 헤어질 건데 이런 말 하면 안 되지. 미안해,',
          callname,
          '……',
        ]);
        await urara.say_and_wait([
          '그러니까 배웅해 줘서 고마워. 안녕,',
          callname,
          '……',
        ]);
      }
      era.println();
      await era.printAndWait([
        '미련을 끊듯 작별 인사를 끝낸 ',
        urara.get_colored_name(),
        '는 울음소리를 억누르고 뒤돌아보지 않은 채 기다려 주지 않는 열차로 달려갔다.',
      ]);
      await era.printAndWait([
        '모여 있던 인파는 열차가 출발하자 흩어졌다. 낯선 흐름은 감정의 짐을 내려놓고,',
        you.get_colored_name(),
        '만이 텅 빈 승강장에 남겨졌다.',
      ]);
      await era.printAndWait([
        '소란이 잦아들자 주위는 고요해졌고, 세상 자체가 이 열차와 함께 ',
        you.get_colored_name(),
        '에게서 멀어진 것 같았다.',
      ]);
      await era.printAndWait([
        '말로는 「안녕」이었다. 근거는 없지만 지금 작은 ',
        urara.uma_sex_title,
        '가 떠나는 모습은 「다시는 만날 수 없다」는 것과 같을 것이다.',
      ]);
      await era.printAndWait([
        '돌아가면 상점가 사람들을 어떻게 마주할까.',
        urara.get_colored_name(),
        '의 친구들은 어떻게 마주할까.',
      ]);
      await era.printAndWait([
        urara.get_colored_name(),
        '는 처음에 그렇게나 ',
        you.get_colored_name(),
        '를 믿었다. 자신을 도와줄 「믿음직한 어른」에게 작은 ',
        urara.teen_sex_title,
        '의 마음까지 품었다.',
      ]);
      await era.printAndWait([
        '그런데 지금 미소를 잃은 ',
        urara.sex,
        '의 뒷모습이 차 안으로 사라지는 걸 보면서도,',
        you.get_colored_name(),
        '는 붙잡을 말 한마디조차 하지 못했다.',
      ]);
      await era.printAndWait([
        '지금의 ',
        you.get_colored_name(),
        '는 ',
        urara.get_colored_name(),
        '를 실망시켰을지도 모른다. 지금의 ',
        urara.get_colored_name(),
        '는 이제 ',
        you.get_colored_name(),
        '를 좋아하지 않을지도 모른다. 어쩌면 ',
        urara.sex,
        '는……',
      ]);
      await era.printAndWait([
        '하지만 「그럴지도 모른다」는 생각이 아무리 많아도 작은 ',
        urara.uma_sex_title,
        '를 붙잡을 조각은 되지 못한다.',
        urara.sex,
        '가 떠났다는 사실을 뒤집는 건 더더욱 불가능하다.',
      ]);
      await era.printAndWait([
        '멀어지는 열차를 보지 않으려, 출발점으로 도망쳐 돌아온 듯한 ',
        you.get_colored_name(),
        '는 마침내 눈을 감았다……',
      ]);
      era.drawLine();
      await inner_urara.say_as_unknown_and_wait('……');
      await inner_urara.say_as_unknown_and_wait([
        '하지만 죄송하네요, 얄미운 ',
        you.adult_sex_title,
        '(당신). 전 이야기를 이렇게 끝내지는 않을 거예요.',
      ]);
      await inner_urara.say_as_unknown_and_wait(
        '당신에게 화낼 생각은 없어요. 하지만 우라라의 지금 결말은 받아들일 수 없어요.',
      );
      await inner_urara.say_as_unknown_and_wait(
        '다시 만날 기회가 있다면 단단히 각오하세요.',
      );
    };
    f.title = title;
    return f;
  })(),
};
