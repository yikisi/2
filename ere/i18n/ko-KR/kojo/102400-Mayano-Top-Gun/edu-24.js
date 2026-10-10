/**
 * @file マヤノトップガン - 育成
 * @author 黑奴二号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

module.exports = {
  ts_add: (() => {
    const title = '추가 자율 트레이닝';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} call_17 マヤノトップガンのシンボリルドルフへの呼び方
     * @param {PrintedSpan} t_call_l トウカイテイオーのシンボリルドルフへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     */
    const f = async (
      maya,
      teio,
      you,
      callname,
      call_3,
      call_17,
      t_call_l,
      t_call_m,
    ) => {
      await maya.say_and_wait(
        '있지 있지! 트레이닝도 끝났는데~ 마야랑 좋은 곳에 가지 않을래?',
      );
      era.printButton('「좋은 곳이라니 어디?」', 1);
      await era.input();
      await maya.say_and_wait(
        '있잖아 있지! 엄청나게 반짝이는 야경을 볼 수 있는 곳이 있는데──',
      );
      await teio.say_and_wait(['영차, 영차…… 어라? ', t_call_m, '이잖아~!']);
      await maya.say_and_wait(['아, ', call_3, '! 안녕!']);
      await teio.say_and_wait(
        '딱 마침 찾고 있었어! 나 오늘 좀 늦게 돌아갈 것 같다고 말해주려고!',
      );
      await maya.say_and_wait([
        '와☆ 외박이라니, 뭔가 진전이 있나 보네~! ',
        call_3,
        '도 어른이구나~!',
      ]);
      await teio.say_and_wait([
        '응! 아까 ',
        t_call_l,
        '의 레이스를 보니까, 갑자기 막 뛰고 싶어져서!',
      ]);
      await teio.say_and_wait([
        t_call_m,
        '가 말하는 식으로 표현하자면…… 엄청 반짝반짝거린다고 해야 하나?',
      ]);
      await maya.say_and_wait([
        '와아……! 뭔지 알아 뭔지 알아! ',
        call_17,
        '의 달리는 모습은 진짜 멋지지!',
      ]);
      await maya.say_and_wait('으으~~ 나도 막 흥분되기 시작했어……');
      await maya.say_and_wait([
        callname,
        ', 역시 야경은 다음에 보자! 마야는 지금 당장 반짝거리고 싶어!',
      ]);
      era.printButton('「나도 같이할게!」', 1);
      era.printButton('「쉬는 것도 중요해」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait(['헤헤, 역시 ', callname, '！']);
        await teio.say_and_wait(
          '그럼 같이 병주 연습하자! 그래야 나도 투지가 솟을 것 같으니까!',
        );
        await maya.say_and_wait('문제없지! 마야, 이륙합니다☆');
        await era.printAndWait([
          maya.get_colored_name(),
          '은 전력을 다해 추가 트레이닝에 임했다.',
        ]);
      } else {
        await maya.say_and_wait(
          '응! 그것도 그래! 피부처럼, 쉬어야 광채가 나는 법이니까!',
        );
        await maya.say_and_wait(
          '알았어! 그럼 반짝이는 야경을 보면서 마야의 눈부심을 충전해야지♪',
        );
        await teio.say_and_wait('그럼 난 먼저 갈게! 통금 전엔 돌아올 거야~~!');
        await era.printAndWait([
          '그리하여 ',
          you.get_colored_name(),
          '은(는) ',
          maya.get_colored_name(),
          '과 함께 야경을 감상하며 ',
          maya.sex,
          '의 몸을 푹 쉬게 해주었다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '몸조심해!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張らせた場合に再失敗するか
     */
    const f = async (maya, you, callname, fail_again) => {
      await era.printAndWait([
        '마야노 탑건이 트레이닝 중 다치자 ',
        you.get_colored_name(),
        '은(는) 황급히 ',
        maya.sex,
        '를 보건실로 데려갔다.',
      ]);
      await maya.say_and_wait('아~ 아파! 이래서는 트레이닝을 못 할지도~');
      era.printButton('「얌전히 쉬자……!」', 1);
      await era.input();
      await maya.say_and_wait('응…… 좋아, 하지만……');
      await maya.say_and_wait([callname, '이(가) 간호해 주면 기운이 날지도♪']);
      era.printButton('「알았어」', 1);
      era.printButton('「아직 어린애구나」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('꺄☆ 신난다~!');
        await maya.say_and_wait('그럼 이마로 열을 재 줘……');
        era.printButton('「열? 다친 거잖아?」', 1);
        await era.input();
        await maya.say_and_wait(
          '신경 쓰지 마! 심장을 두근두근하게 해서 아픔을 『슉!』 날려 버리는 거야──',
        );
        await maya.say_and_wait('아얏!!!! 이, 이상하네? 정말로…… 아파.');
        await era.printAndWait([
          '들뜬 마야노 탑건을 황급히 간호해, 어떻게든 ',
          maya.sex,
          '를 쉬게 했다……',
        ]);
        era.println();
      } else if (fail_again) {
        await maya.say_and_wait(
          '어!? 아니야! 이건 『어른』답게 어리광 부리는 거야~!',
        );
        await maya.say_and_wait(
          '이상하네, 책에는 이러면 『한 방에 마음을 사로잡는다☆』고 쓰여 있었는데……',
        );
        await maya.say_and_wait(
          '알았다! 열이 없어서야! 열이 나면 책에서처럼──',
        );
        era.printButton('「얌·전·히·쉬·어!」', 1);
        await era.input();
        await maya.say_and_wait('으으…… 알았어~~');
        await era.printAndWait([
          maya.get_colored_name(),
          '은 불만스러워했지만 어떻게든 ',
          maya.sex,
          '를 쉬게 했다……',
        ]);
      } else {
        await maya.say_and_wait(['……혹시 ', callname, '의 취향이 아니야?']);
        await maya.say_and_wait([
          '그럼 ',
          callname,
          '! 마야가 뭘 하면 『두근두근』해~?',
        ]);
        era.printButton('「네가 건강한 게 제일 기뻐」', 1);
        await era.input();
        await maya.say_and_wait('건강……? 마야가 건강해지면 기뻐?');
        await maya.say_and_wait('에헤헤, 에헤헤헤…… 에헤헤헤헤헤!');
        await maya.say_and_wait('알았어! 푹 쉬고 건강해질게~!');
        await maya.say_and_wait('그럼 그때는! 또 같이 트레이닝하자☆');
        await era.printAndWait(
          '선언대로 마야노 탑건은 얌전히 쉬고…… 건강한 모습으로 트레이닝에 복귀했다!',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '무리는 금물!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {boolean} fail_again 頑張らせた場合に再失敗するか
     */
    const f = async (maya, you, callname, fail_again) => {
      await maya.say_and_wait('에헤헤, 실수해 버렸네~');
      await maya.say_and_wait([
        '하지만 ',
        callname,
        '은(는) 너무 호들갑이야~ 그렇게 심하게 다친 건 아니야!',
      ]);
      await maya.say_and_wait(
        '자, 빨리 트레이닝하러 돌아가자! 마야는 이제 어른이고, 이 정도는──',
      );
      await maya.say_and_wait('……아파~~!!');
      era.printButton('「괜찮아!?」', 1);
      await era.input();
      await maya.say_and_wait('괜찮아…… 아파도 안 아프다고 하는 게 어른이야.');
      await maya.say_and_wait('그러니까 마야는 아프다는 말 안 해!');
      await maya.say_and_wait('어린애 같고 멋없잖아…… 마야는 그런 거 싫어~~!');
      era.printButton('「그럼 『어른』답게 행동하자」', 1);
      era.printButton('「멋없지 않아!」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('어른답게……? 얌전히 쉬라는 거야?');
        await maya.say_and_wait('그렇구나…… 그것도 『어른』다운 거네.');
        await maya.say_and_wait(
          '……알았어! 마야는 안 아프지만 어른처럼 얌전히 쉴게.',
        );
        await maya.say_and_wait('하나도…… 안 아픈걸……');
        await era.printAndWait('그렇게 어떻게든 마야노 탑건을 쉬게 했다.');
        era.println();
      } else if (fail_again) {
        await maya.say_and_wait([callname, '……하지만……']);
        era.printButton('「무리해서 더 다치는 게 멋없는 거야」', 1);
        await era.input();
        await maya.say_and_wait('아! 그러네!');
        await maya.say_and_wait(
          '……그, 그래도 괜찮아! 조금 아플 뿐이니까 더 심해지진 않을──',
        );
        await maya.say_and_wait('으으~~!! 아파────!!');
        await era.printAndWait(
          '괜찮은 척하다가 부상이 악화되어 며칠이나 쉬게 되었다……',
        );
      } else {
        await maya.say_and_wait('……있지, 솔직히 말하면 다친 곳이 엄청 아파.');
        await maya.say_and_wait([
          '하지만, 하지만 ',
          callname,
          '하고 제대로 트레이닝하고 싶어……!',
        ]);
        era.printButton('「푹 쉬고 다시 힘내자」', 1);
        await era.input();
        await maya.say_and_wait('……응!');
        await era.printAndWait(
          '부상이 낫기까지 시간이 걸렸지만…… 어떻게든 건강을 되찾았다.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  race_start_low_sta: (() => {
    const title = '레이스 전에';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '레이스 전 대기실을 가보니…… ',
        maya.get_colored_name(),
        '이 머릿속으로 레이스 시뮬레이션을 하는 듯했다.',
      ]);
      await maya.say_and_wait(
        '그러고 나서 앞에 있는 사람이 오면 『슈웅!』 하고 돌파해서……',
      );
      era.printButton('（……엄청난 집중력이네）', 1);
      await era.input();
      await maya.say_and_wait(['……엣!? ', callname, '！？']);
      await maya.say_and_wait('아와와, 깜짝이야! 전혀 몰랐어! 어라 어라!?');
      era.printButton('「방금 엄청 집중하고 있었어」', 1);
      await era.input();
      await maya.say_and_wait('헤헤, 응! 아까부터 심장이 계속 쿵쾅거려.');
      await maya.say_and_wait(['그치만…… 이제 곧 ', callname, ' 차례야!']);
      await maya.say_and_wait('내가 달리는 모습에 푹 빠지게 만들어 줄게♪');
    };
    f.title = title;
    return f;
  })(),
  race_end_win: (() => {
    const title = '레이스 승리!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait('Victory☆ 승리한 마야노 탑건, 영광의 개선!');
      era.printButton('「축하해!」', 1);
      await era.input();
      await maya.say_and_wait(
        '헤헤! 즐거웠어?? 마야가 달리는 모습에 두근거렸어??',
      );
      era.printButton('「당연하지」', 1);
      era.printButton('「아직 부족해」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('와☆ 다행이다, 다행이야!');
        await maya.say_and_wait(
          '그치만 마야는 발견했어♪ 우린 더 많이 두근거릴 수 있다는 걸!',
        );
        await maya.say_and_wait('그·러·니·까! 다음 레이스도…… 각오해야 해☆');
      } else {
        await maya.say_and_wait('……！！');
        await maya.say_and_wait([
          '꺄☆ ',
          callname,
          ' 최고야! 마야도 그렇게 생각했어~!',
        ]);
        await maya.say_and_wait(
          '있지 있지! 마지막 직선…… 골 라인이 엄청나게 눈부셨어!',
        );
        await maya.say_and_wait(
          '하지만…… 골인하고 나니까, 그 눈부심이랑 두근거림이 사라져 버렸어……',
        );
        await maya.say_and_wait('그래서 깨달았지! 마야는 더 두근거릴 수 있어!');
        await maya.say_and_wait([
          '그·러·니·까! ',
          callname,
          ', 내가 훨씬 더~ 많이 두근거리게 해줄게♪',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '레이스 입착';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait([
        '아, ',
        callname,
        ', 드디어 왔구나! 레이스 끝났으니까 얼른 가자~!',
      ]);
      await maya.say_and_wait('있지 있지, 경기장 한정 디저트 같이 먹고 싶어♪');
      era.printButton('「그전에 레이스 복기부터……」', 1);
      await era.input();
      await maya.say_and_wait(
        '에? 이번엔 확실히 졌지만, 다음엔 이길 것 같은걸??',
      );
      await maya.say_and_wait(
        '다들 얼마나 강한지 알았고, 코스 잡는 법도 배웠으니까♪ 괜찮아, 괜찮아!',
      );
      era.printButton('「기대할게」', 1);
      era.printButton('「……연습하자!」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait(
          '나만 믿으라구☆ 기대 이상의 모습을 보여줄 테니까! 왜냐면──',
        );
        await maya.say_and_wait(
          '──좋은 의미로 기대를 배신하는 거, 그게 바로 성숙한 여자니까……',
        );
        await maya.say_and_wait('책에 그렇게 쓰여 있었어♪');
        await maya.say_and_wait([
          '다음엔 꼭 이겨서 ',
          callname,
          '이 내 말을 듣게 만들 거야! 꼭!',
        ]);
      } else {
        await maya.say_and_wait([
          '으음~ ',
          callname,
          '이 그렇게까지 말한다면 열심히 할게……',
        ]);
        await maya.say_and_wait([callname, '은 걱정이 너무 많다니까??']);
        era.printButton('「네가 1등 하는 걸 보고 싶으니까」', 1);
        await era.input();
        await maya.say_and_wait('……에? 그러니까, 나를 위해서야?');
        await maya.say_and_wait('야☆ 나 엄청 사랑받고 있네!');
        await maya.say_and_wait('알았어! 마야, 힘낼게♪');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = '레이스 패배';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait('아~ 졌다~ 이길 줄 알았는데.');
      era.printButton('「다른 애들도 대단했으니까」', 1);
      await era.input();
      await maya.say_and_wait('……다른 애들?');
      await maya.say_and_wait(
        '긴급 사태! 안 돼 안 돼, 지금 그런 말 하면 안 된다구~~!!',
      );
      await maya.say_and_wait([
        '난 ',
        callname,
        '의 눈에 오직 나만 담겼으면 좋겠어!',
      ]);
      await maya.say_and_wait(
        '있지 있지! 그렇게 말해도, 역시 LOVE☆마야노 탑건…… 맞지!? 그치!!',
      );
      era.printButton('「당연하지!」', 1);
      era.printButton('「……앞으로의 활약에 달렸을지도」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('휴…… 살았다……');
        await maya.say_and_wait(
          '……그러니까 말이야, 다음 레이스에선 1등 할 거야.',
        );
        await maya.say_and_wait('그러니까…… 응원해 줘야 해!');
        await maya.say_and_wait(
          '꼭…… 반드시 내가 다른 누구보다 대단하다는 걸 알게 해줄게!',
        );
      } else {
        await maya.say_and_wait(['흥~! ', callname, ' 너무해!']);
        await maya.say_and_wait(
          '좋아! 다음 레이스에선 진짜 엄청난 성적을 낼 거야!',
        );
        await maya.say_and_wait(
          '내가 얼마나 멋진 여자인지, 누구보다 귀여운지 깨닫게 해줄 테니까!',
        );
        await maya.say_and_wait('마음을 뺏어버리는 건 내 전문이라구!!');
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '다음에는 지지 않아!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await maya.say_and_wait(['또 졌어…… 어떡해, ', callname, '……마, 마야……']);
      era.printButton('「마야노……」', 1);
      await era.input();
      await maya.say_and_wait('──엄청~ 굉장히 두근두근해졌어~~!!');
      era.printButton('「어!?」', 1);
      await era.input();
      await maya.say_and_wait(
        '뭐라고 해야 할지 모르겠지만 엔진이 걸린 느낌이야!',
      );
      await maya.say_and_wait(
        '할 수 있을 줄 알았던 걸 못 했어! 심장이 두근거려서 터질 것 같아!',
      );
      await maya.say_and_wait(
        '맞다! 이대로 『슈웅──!』 하고 트레이닝하러 가자!',
      );
      era.printButton('「일단 진정하자」', 1);
      era.printButton('「트레이닝하자!」', 2);
      if ((await era.input()) === 1) {
        await maya.say_and_wait('에────────!?');
        await maya.say_and_wait(
          '엔진도 달아올랐으니까 언제든 이륙할 수 있다고!?',
        );
        era.printButton('「급하게 이륙하면 실속할 수 있어!」', 1);
        await era.input();
        await maya.say_and_wait('으으! 그러네! 그러면 마야, 추락하겠어……!');
        await maya.say_and_wait(
          '위험해, 위험해! 먼저 엔진을 제대로 정비해야…… 하는 거지!',
        );
        await era.printAndWait([
          '그 뒤 ',
          you.get_colored_name(),
          '은(는) ',
          maya.get_colored_name(),
          '하고 다음 레이스를 준비했다.',
        ]);
      } else {
        await maya.say_and_wait(['꺄☆ 역시 ', callname, '! 정말 좋아!']);
        await maya.say_and_wait('좋아! 마야, 진심으로 할게!');
        await maya.say_and_wait([
          '곡예비행을 보여 줄게. ',
          callname,
          ', 떨어지지 않게 조심해…… 알았지♪',
        ]);
        await era.printAndWait([
          '선언대로 ',
          maya.get_colored_name(),
          '은 전력을 다해 트레이닝에 임했고…… 실력이 한층 더 갈고닦아졌다!',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_16: (() => {
    const title = '나도 반짝이고 싶어!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        '이것은 데뷔전을 위해, 계속해서 트레이닝을 진행하던 어느 날에 일어난 일이다──',
      );
      await maya.say_and_wait([callname, '☆나 더트 코스 세 바퀴 다 돌았어!']);
      era.printButton('「수고했어!」', 1);
      await era.input();
      await maya.say_and_wait('헤헤~♪ 마야는 아직 지치지 않았다구~!');
      await maya.say_and_wait('저기저기, 다음은 뭐 트레이닝할 거야?');
      await maya.say_and_wait(
        '평소 트레이닝 메뉴로 봐서는, 이번에는 좀 가벼운 트레이닝인가?',
      );
      await era.printAndWait([
        '──',
        maya.sex,
        '가 말한 대로, 이번에는 부드러운 모래 위주로 트레이닝 내용을 짰다.',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        '의 몸은 아직 성장하는 중이다. ',
        you.get_colored_name(),
        '은(는) 원래 ',
        maya.sex,
        '의 다리에 너무 부담을 주지 않으려고 생각했지만……',
      ]);
      era.printButton('「조금 더 노력해 보고 싶어?」', 1);
      await era.input();
      await maya.say_and_wait('아니! 겨우 『조금』으로는 부족해!');
      await maya.say_and_wait('왜냐면 내가 나갈 곳은 트윙클 시리즈라구!');
      await maya.say_and_wait(
        '두근거리고, 알고 싶은 것투성이에, 경기장의 모두가 반짝반짝거리고……',
      );
      await maya.say_and_wait(
        '만약 트윙클 시리즈에 나갈 수 있다면, 먼저 나를 더 빨리 달리게 하고 싶어!',
      );
      await maya.say_and_wait('헤헤, 그·리·고~');
      await maya.say_and_wait([
        callname,
        '도 마야가 아직 『더 할 수 있다』고 생각하지? 그치?',
      ]);
      era.printButton('「그야 당연하지!」', 1);
      await era.input();
      await maya.say_and_wait('예이, 정답이야~☆');
      await era.printAndWait([
        '그리하여, ',
        you.get_colored_name(),
        '은(는) 기본 방침을 바꾸지 않는 선에서, ',
        maya.sex,
        '에게 여러 가지 다양한 트레이닝을 시도해 보았다──',
      ]);
      await maya.say_and_wait('……레이스 연구. 연구……인가……!');
      await maya.say_and_wait(
        '아하하♪ 왠지 어른의 계단을 향해, 대시하며 올라가는 기분이야☆',
      );
      era.printButton('「이것도 일종의 트레이닝이야」', 1);
      await era.input();
      await maya.say_and_wait(
        '네에 네에, 알고 있다구☆ 게다가 이런 건 마야가 전공이지!',
      );
      await maya.say_and_wait('……응?');
      await maya.say_and_wait('어, 영상 벌써 끝이야? 삼십 분밖에 안 지났잖아?');
      await maya.say_and_wait(
        '아, 알겠다! 이런 방식으로 마야를 애태우려는 작전이구나~',
      );
      await maya.say_and_wait('이·것·이…… 어른들이 쓰는 밀당☆……인가☆');
      await era.printAndWait('그렇긴 하지만──');
      await maya.say_and_wait([
        '아, ',
        callname,
        '. 이 비디오는 이제 안 봐도 돼!',
      ]);
      await maya.say_and_wait(
        '제삼 코너를 돌고 나면 1번 아이가 『슈웅──!』 하고 일찍 치고 나가겠지?',
      );
      era.printButton('「그래?」', 1);
      await era.input();
      await maya.say_and_wait(
        '응, 마야는 그냥 알 수 있거든. 내가 말한 게 맞는지 봐봐.',
      );
      await era.printAndWait([
        maya.sex,
        '가 재촉하는 바람에, ',
        you.get_colored_name(),
        '은(는) 비디오를 빨리 감기 하며 확인했다……',
      ]);
      await maya.say_and_wait('봐봐~☆ 마야가 말한 대로지~!');
      await maya.say_and_wait('헤헤, 그럼 다음 거 보자! 다음 거!!');
      await era.printAndWait([
        maya.sex,
        '는 그 기세를 몰아, ',
        you.get_colored_name(),
        '이(가) 준비한 모든 레이스 비디오를 다 보았다……',
      ]);
      await maya.say_and_wait(['어라? ', callname, '. 설마 벌써 끝이야?']);
      era.printButton('「……다른 트레이닝을 하러 가자」', 1);
      await era.input();
      await maya.say_and_wait(
        '아! 그렇구나~! 계속 트레이닝하는 것도 마야는 대환영이야☆',
      );
      await era.printAndWait(
        '──그리하여 심폐 기능을 단련하기 위해, 이어서 수영장에 왔다.',
      );
      await maya.say_and_wait(
        '그러니까, 내가 숨을 참은 채로 얼마나 멀리 헤엄칠 수 있는지 재는 거지!',
      );
      await maya.say_and_wait(
        '참고로 물어보는데! 대충 얼마나 헤엄쳐야 마야를 엄청 잘했다고 칭찬해 줄 거야?',
      );
      await era.printAndWait(
        '……평소 연습했다면 75미터는 헤엄칠 수 있다. 처음이라면…… 100미터 정도가 적당할 것이다.',
      );
      await era.printAndWait([
        '하지만 300미터를 헤엄친 ',
        maya.uma_sex_title,
        '도 있다. 모처럼 측정하는 거라면──',
      ]);
      era.printButton('「한번 300미터를 목표로 해보자」', 1);
      await era.input();
      await maya.say_and_wait('라져! 그럼 마야, 출발한다!');
      await maya.say_and_wait('하아……');
      await maya.say_and_wait('분해~ 왜~!? 절반밖에 못 갔는데 벌써 한계야~!');
      await era.printAndWait(
        '하지만 절반인 150미터도 대단한 기록이다. 나중에 조금씩 계속 연습하다 보면, 조만간 300미터도 가능하겠지……',
      );
      await maya.say_and_wait('으~ 한 번 더 할래!');
      await maya.say_and_wait('이번에는 꼭 300미터 갈 거야☆');
      era.printButton('「이제 겨우 두 번째인데!?」', 1);
      await era.input();
      await maya.say_and_wait('응, 벌써 두 번째야.');
      await maya.say_and_wait(
        '게다가, 힘을 쓰는 요령이라고 해야 하나? 헤엄치는 중간에 이미 깨달았다구☆',
      );
      await maya.say_and_wait('헤헤♪ 얼른 다시 해볼래!');
      await maya.say_and_wait('아!!');
      await maya.say_and_wait([
        callname,
        '! 내가 해내면, 또 새로운 과제 줘야 해! 알았지♪',
      ]);
      await maya.say_and_wait('히히☆ 알아들었어?');
      await era.printAndWait([
        '……그리하여, ',
        maya.sex,
        '의 요구를 충족시켜 주기 위해, ',
        you.get_colored_name(),
        '은(는) 필사적으로 머리를 쥐어짰다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_begin_race: (() => {
    const title = '데뷔전을 향해';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '드디어 ',
        maya.get_colored_name(),
        '의 데뷔전 당일이다!',
      ]);
      await maya.say_and_wait([
        '이것 봐! ',
        callname,
        '! 오늘은 체육복이 아니야!',
      ]);
      await maya.say_and_wait('왜 그런지 알겠어~?');
      era.printButton('「데뷔전이니까!」', 1);
      await era.input();
      await maya.say_and_wait(
        '딩동댕, 정답! 새끼손가락 약속이랑 최고라는 도장을 찍어 줄게!',
      );
      await maya.say_and_wait([
        '그러니까…… ',
        callname,
        '! 마야한테서 눈 떼면 안 돼.',
      ]);
      await maya.say_and_wait(
        '트윙클 시리즈에서 반짝이는 마야를 눈 크게 뜨고 봐 줘♪',
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '비행 연장 희망!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        maya.get_colored_name(),
        '의 데뷔전은 이렇게 무사히 끝났다──',
      ]);
      await maya.say_and_wait('으으…… 음……?');
      await maya.say_and_wait('으음음음……?');
      await era.printAndWait([
        '아까부터 ',
        maya.get_colored_name(),
        '의 상태가 조금 이상했다……',
      ]);
      era.printButton('「무슨 일 있어?」', 1);
      await era.input();
      await maya.say_and_wait('음…… 딱히 그런 건 아냐. 그냥 끝났구나~ 싶어서!');
      await maya.say_and_wait([
        '있지 있지, ',
        callname,
        '! 데뷔전은 정말 이걸로 끝이야?',
      ]);
      await maya.say_and_wait('나 몰래 숨겨둔 거 있는 거 아니지?');
      await era.printAndWait([
        '……설령 ',
        maya.sex,
        '가 그렇게 말해도, 데뷔전은 누구나 한 번밖에 겪을 수 없는 일이었다.',
      ]);
      await maya.say_and_wait('에엣……?');
      await era.printAndWait([
        '……하지만, ',
        maya.get_colored_name(),
        '은 전혀 만족하지 못한 기색이었다.',
      ]);
      era.printButton('「레이스에 더 많이 나가자」', 1);
      await era.input();
      await maya.say_and_wait('으음…………');
      await maya.say_and_wait('……응, 그렇게 하자.');
      await maya.say_and_wait(
        '드디어 성공적으로 데뷔했는걸. 드디어 여기까지 왔어.',
      );
      await maya.say_and_wait('트윙클 시리즈……');
      await maya.say_and_wait(
        '……분명 가슴이 두근거리고, 반짝반짝 빛나는 레이스일 거야.',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_date: (() => {
    const title = '데이트하자';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        '데뷔전이 끝나고 몇 달이 지났다. 다들 평소처럼 트레이닝하고 있을 때──',
      );
      await maya.say_and_wait('……');
      await maya.say_and_wait('……아.');
      era.printButton('「왜 그래?」', 1);
      await era.input();
      await maya.say_and_wait(['우와앗!? ', callname, '！？']);
      await maya.say_and_wait('아무것도 아냐, 진짜 아무 일도 없다구……');
      await maya.say_and_wait('……하아.');
      await era.printAndWait(
        '──입으로는 아무 일 없다고 하면서도, 깊은 한숨을 내쉬었다.',
      );
      era.printButton('「기분 전환하러 가자」', 1);
      await era.input();
      await maya.say_and_wait('기분 전환…… 그건 데이트하자는 거야?');
      era.printButton('「그래」', 1);
      await era.input();
      await maya.say_and_wait('진짜!?');
      await maya.say_and_wait([
        '신난다! 일 분만 줘, 준비할게! ',
        callname,
        '(이)랑 데이트, 데이트☆',
      ]);
      await maya.say_and_wait([
        '헤헤, ',
        callname,
        '은(는) 나에게 어떤 어른스러운 데이트를 시켜 주려나~♪',
      ]);
      await era.printAndWait([
        '……그렇게 밖으로 나가 기분을 전환하기로 했다. ',
        maya.sex,
        '가 기뻐할 만한 장소라면──',
      ]);
      await maya.say_and_wait(
        '데이트의 마무리는 역시 마야가 가장 반짝일 수 있는 곳이어야지!',
      );
      await era.printAndWait('──역시 그곳뿐인가.');
      await era.printAndWait('(와아아아아아아────!!)');
      await maya.say_and_wait('여기는……');
      era.printButton('「네가 가장 반짝일 수 있는 곳이야」', 1);
      await era.input();
      await maya.say_and_wait('…………');
      await maya.say_and_wait(['……', callname, '은(는) 지금도 그렇게 생각해?']);
      await maya.say_and_wait(
        '『사실은 내가 생각했던 거랑 좀 다른 것 같아』 만약 마야가 지금 이런 말을 한다면…… 너는 화낼 거야?',
      );
      era.printButton('「갑자기 왜 그래?」', 1);
      await era.input();
      await maya.say_and_wait('음…………');
      await maya.say_and_wait(
        '……마야는 말이야, 레이스에 나가기만 하면 분명히 계속 가슴 뛰는 기분을 느낄 수 있을 줄 알았어.',
      );
      await maya.say_and_wait([
        '경기장에서 달리는 ',
        maya.child_sex_title,
        ', 다들 반짝반짝하잖아?',
      ]);
      await maya.say_and_wait(
        '그래서 데뷔전이든 다른 레이스든 계속 엄청나게 기대했었어.',
      );
      await maya.say_and_wait(
        '그런데, 실제로 레이스에 나가 보니까, 뭐랄까…… 좀 다르더라고.',
      );
      await maya.say_and_wait(
        '……아, 겨우 이 정도였나. 왠지 좀 재미없네, 하고.',
      );
      await maya.say_and_wait(
        '나도 이런 말 하면 안 된다는 거 잘 알아. 하지만……',
      );
      await maya.say_and_wait('…………역시 그냥 지루하다고 느껴져.');
      era.printButton('「그렇구나」', 1);
      await era.input();
      await maya.say_and_wait('…………응.');
      await maya.say_and_wait('………………');
      era.printButton('「오히려 좋은 소식을 들었네!」', 1);
      await era.input();
      await maya.say_and_wait('어……?');
      await era.printAndWait([
        '트윙클 시리즈에서 ',
        maya.sex,
        '가 경험한 것은 아직 데뷔전 수준에 불과하니까.',
      ]);
      await era.printAndWait([
        '단순히 그 정도 수준으로는 ',
        maya.get_colored_name(),
        '을 만족시킬 수 없었을 뿐이다. 그렇다면, 더 높은 목표를 향해 나아가면 된다.',
      ]);
      await era.printAndWait([
        '앞으로 강자들과 경쟁할 기회는 더 많아질 것이고, 아직 ',
        maya.sex,
        '가 모르는 레이스도 잔뜩 남아 있다.',
      ]);
      await era.printAndWait([
        '그러니 만약 현재 ',
        maya.sex,
        '를 괴롭히는 원인이 「지루함」이라면──',
      ]);
      era.printButton('「앞으로 더 재미있게 만들면 돼!」', 1);
      await era.input();
      await maya.say_and_wait('……재미있게?');
      await maya.say_and_wait('정말…… 그게 가능할까? 나는 벌써──');
      era.printButton('「네가 반짝일 수 있도록, 내가 힘낼게」', 1);
      await era.input();
      await maya.say_and_wait(['……', callname, '。']);
      await era.printAndWait([
        maya.get_colored_name(),
        '에게는 분명 ',
        maya.sex,
        '만의, 유일무이한 반짝이는 방식이 있을 것이다.',
      ]);
      await era.printAndWait([
        '기왕 어렵게 ',
        maya.get_colored_name(),
        '처럼 재능 있는 ',
        maya.uma_sex_title,
        '의 담당이 되었으니──',
      ]);
      await era.printAndWait([
        '──',
        maya.sex,
        '를 위해 재능을 마음껏 발휘할 무대를 준비하고, ',
        maya.sex,
        '에게 딱 맞는 성장 방법을 찾아내는 것, 그것이 바로 트레이너의 책무겠지.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_1: (() => {
    const title = '새해 포부';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_5 マヤノトップガンのフジキセキへの呼び方
     */
    const f = async (maya, you, callname, call_5) => {
      await era.printAndWait([
        '올해부터 클래식급 도전이 시작된다. 새해 포부를 정하기 위해 두 사람은 만났다──',
      ]);
      await maya.say_and_wait('…………');
      await maya.say_and_wait([callname, ', 꼭 포부를 정해야만 해?']);
      era.printButton('「하기 싫어?」', 1);
      await era.input();
      await maya.say_and_wait('……네.');
      await maya.say_and_wait(
        '보통은 『힘내야지!』라거나 『꼭 해내겠어!』라고 생각될 때 포부를 세우는 거 아니야?',
      );
      await maya.say_and_wait(
        '그래서 마야는 여기 오는 길에 계속 생각했어. 클래식 시즌이 된 이후의 일들에 대해서.',
      );
      era.printButton('「마야」', 1);
      await era.input();
      await maya.say_and_wait([
        '하지만 같은 레이스에 나오는 건 마야랑 같은 해에 데뷔한 ',
        maya.uma_sex_title,
        '잖아?',
      ]);
      await maya.say_and_wait('……그럼 예전이랑 다를 게 없잖아.');
      await maya.say_and_wait('나, 또 지루해지면 어쩌지……');
      era.printButton('「그럼 레이스 말고 다른 포부는 어때?」', 1);
      await era.input();
      await maya.say_and_wait('……어?');
      await maya.say_and_wait('레이스 말고 다른 거…… 그래도 돼?');
      era.printButton('「괜찮아, 이건 『새해』 포부니까」', 1);
      await era.input();
      await maya.say_and_wait('！');
      await maya.say_and_wait('그, 그럼! 마야, 데이트를 많이 하고 싶어!');
      await maya.say_and_wait([
        '어른들에 관한 걸 ',
        callname,
        '한테 잔뜩 배우고 싶어!',
      ]);
      era.printButton('「그렇게 말할 줄 알았어」', 1);
      await era.input();
      await maya.say_and_wait([
        '응, 헤헤! ',
        callname,
        '이(가) 뭐든 괜찮다고 했으니까☆',
      ]);
      await maya.say_and_wait(
        '좋아, 결정했어! 마야의 포부는 『데이트 자주 하기』로 할래!',
      );
      await maya.say_and_wait(['하하, 나 ', callname, '이(가) 정말 좋아♪']);
      await era.printAndWait([
        '……',
        maya.get_colored_name(),
        '은 방금 전과는 딴판으로, 얼굴에 미소를 띠고 있다.',
      ]);
      await era.printAndWait([
        '이렇게 사물을 다른 시각으로 바라보는 경험은, 분명 ',
        maya.sex,
        '에게 큰 도움이 될 것이다. 그것 또한 언젠가 가슴 뛰는 순간을 만나기 위함이다.',
      ]);
      await era.printAndWait('그러니 지금은──');
      era.printButton('「지금 당장 데이트하러 가자!」', 1);
      await era.input();
      await maya.say_and_wait('와아……! 진짜!?');
      era.printButton('「소원을 들어줄게!」', 1);
      await era.input();
      await maya.say_and_wait('야호──! 가자 가자!');
      await maya.say_and_wait([
        '헤헤! 새해 데이트, 데이트☆ ',
        callname,
        ', 우리 어디 가♪',
      ]);
      era.printButton('「새해 첫 쇼핑 데이트」（스태미나+20）', 1);
      era.printButton('「설날 음식 데이트」（체력+400）', 2);
      era.printButton('「새해 참배 데이트」（스킬 포인트+40）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await maya.say_and_wait('와, 찬성!!');
          await maya.say_and_wait('그럼 빨리 가자~♪ 같이 복주머니 사러 가자☆');
          await maya.say_and_wait([
            '헤헤~♪ 오늘은 ',
            callname,
            '(이)랑 밤까지 데이트할 거야☆',
          ]);
          await era.printAndWait([
            maya.sex,
            '가 쇼핑을 시작하면, 정말로 밤까지 돌아다닐 것 같다──',
          ]);
          await maya.say_and_wait([
            '이야☆ ',
            call_5,
            '한테 『나 오늘 안 돌아가』라고 말해버릴까☆',
          ]);
          await era.printAndWait([
            '……',
            you.get_colored_name(),
            '은(는) 당연하다는 듯이 ',
            maya.sex,
            '를 말린 뒤, 나중에 ',
            maya.get_colored_name(),
            '을 기숙사까지 바래다주었다.',
          ]);
          break;
        case 2:
          await maya.say_and_wait('하하, 또 그런 표정 짓는다.');
          await maya.say_and_wait([
            '뭐 어때, 괜찮아! ',
            callname,
            '(이)랑 같이 있다면, 뭘 해도 즐거울 것 같으니까♪',
          ]);
          await maya.say_and_wait('…………');
          await maya.say_and_wait(
            '여기는 나한테 너무 어른스러운 곳 아닐까……? 괜찮을까?',
          );
          await you.say_as_passer_by_and_wait(
            '일식집 여주인',
            '어머나 어머나, 아주 귀여운 손님이 오셨네. 어서 오렴, 후훗.',
          );
          await maya.say_and_wait('후후, 좋아! 올해 첫 트레이닝을 하러 가자☆');
          await era.printAndWait([
            '그리하여 이날, ',
            you.get_colored_name(),
            '은(는) ',
            maya.get_colored_name(),
            '과 함께 새해 첫 트레이닝을 진행했다.',
          ]);
          break;
        case 3:
          await maya.say_and_wait([
            '후후후…… ',
            callname,
            ', 미숙해, 아직 멀었어!',
          ]);
          await maya.say_and_wait('나 착륙할게♪');
          await maya.say_and_wait([
            '그래서 그래서? ',
            callname,
            '이 될 거라구~☆',
          ]);
          era.printButton('「뭐가 다른데?」', 1);
          await era.input();
          await maya.say_and_wait('에이, 치사해 치사해. 가르쳐 줘!');
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 도서관에서 ',
            maya.get_colored_name(),
            '이 사전을 뚫어져라 쳐다보는 것을 발견했다.',
            maya.sex,
            '의 진짜 꿈을 이룰 수 있게 해달라고.',
          ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  ws_47_3: (() => {
    const title = '타깃, 록 온';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} callname_3 トウカイテイオーのプレイヤーへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} l_call_t シンボリルドルフのトウカイテイオーへの呼び方
     * @param {PrintedSpan} sats_sho 皐月賞（色付き名前）
     * @param {PrintedSpan} toky_yus 日本ダービー（色付き名前）
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      maya,
      teio,
      brian,
      luna,
      you,
      callname,
      call_3,
      call_16,
      callname_3,
      t_call_m,
      l_call_t,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await era.printAndWait('드디어 봄철 클래식 시즌이 왔다.');
      await era.printAndWait([
        '……클래식 삼관 노선, 트리플 티아라 노선. ',
        maya.uma_sex_title,
        '하고 트레이너가 평생 단 한 번 맞는 이 시기를 어떻게 보내느냐는 무척 중요하다──',
      ]);
      await maya.say_and_wait(['……', callname, '. 또 그 자료 보고 있어~']);
      await maya.say_and_wait('슬슬 나랑 좀 놀아주면 안 돼?');
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '하고 ',
        maya.sex,
        '는 이미 약속했다. 특히 출주할 레이스는 ',
        you.get_colored_name(),
        '이(가) 신중히 판단해야 한다.',
      ]);
      await era.printAndWait([
        maya.sex,
        '가 흥미를 느낄 만한 레이스이면서 라이벌들이 있는 환경에서, 다양한 기회를 접하게 해줘야 한다──',
      ]);
      await era.printAndWait('(똑똑)');
      await maya.say_and_wait('응? 누구지……');
      await teio.say_and_wait(['안녕! ', t_call_m, '！']);
      await maya.say_and_wait([
        '아! ',
        call_3,
        '이잖아♪ 웬일이야 웬일이야? 놀러 온 거야?',
      ]);
      await era.printAndWait([
        teio.get_colored_name(),
        '는 학생회장 ',
        luna.get_colored_actual_name(),
        '를 동경하는 ',
        maya.uma_sex_title,
        '이며, ',
        maya.get_colored_name(),
        '의 룸메이트이기도 하다.',
      ]);
      await teio.say_and_wait('응, 뭐 그렇지! 사실 회장님이 비디오를 주셨어.');
      await luna.used_to_say_and_wait([
        l_call_t,
        ', 나를 동경한다면 나만 보지 말고 주변에도 눈을 돌리렴.',
      ]);
      await luna.used_to_say_and_wait([
        '예를 들면── ',
        brian.get_colored_name(),
        '의 주법이라든가.',
      ]);
      await teio.say_and_wait([
        maya.sex,
        '라고 말씀하시더라고. 근데 혼자 보긴 좀 심심하잖아?',
      ]);
      era.printButton('（……나리타 브라이언）', 1);
      await era.input();
      await era.printAndWait([
        brian.get_colored_name(),
        '──',
        maya.sex,
        '는 압도적인 실력을 지닌 ',
        maya.uma_sex_title,
        '다.',
      ]);
      await era.printAndWait([
        maya.sex,
        '는 클래식급에서…… 삼관 노선을 모두 제패한 「삼관 ',
        maya.uma_sex_title,
        '」로 알려져 있다.',
      ]);
      await era.printAndWait([
        maya.sex,
        '는 ',
        maya.get_colored_name(),
        '보다 한 세대 위여서 공식 레이스에서 맞붙을 가능성은 아직 낮다. 하지만 앞으로 클래식에 도전한다면──',
      ]);
      era.printButton('「미리 봐 두는 게 좋을지도 모르겠어」', 1);
      await era.input();
      await teio.say_and_wait([
        '오, 좋은데~! ',
        callname_3,
        '도 관심이 좀 있나 본데?',
      ]);
      await maya.say_and_wait([
        '익!? ',
        callname,
        '!? 내가 바람피우는 건 안 된다고 했잖아!?',
      ]);
      await teio.say_and_wait([
        '아하하, 괜찮아 괜찮아! ',
        t_call_m,
        '도 궁금하면 다 같이 보자!',
      ]);
      await era.printAndWait([
        '그리하여 ',
        you.get_colored_name(),
        '은(는) ',
        maya.couple_title,
        '하고 함께 ',
        brian.get_colored_name(),
        '의 레이스 영상을 보게 되었다……',
      ]);
      era.drawLine();
      await you.say_as_passer_by_and_wait('해설', [
        '선두는 ',
        brian.get_colored_name(),
        '! 완전히 거리를 벌립니다!',
      ]);
      await you.say_as_passer_by_and_wait('해설', [
        '그 다릿심은 역시 강렬합니다! 그야말로 괴물! 경기장을 압도합니다!! 다른 ',
        maya.uma_sex_title,
        '를 따돌리고 골인──!!',
      ]);
      await you.say_as_passer_by_and_wait('중계', [
        '──제4 코너를 지나, 역시 또 ',
        maya.sex,
        '입니다! 단숨에 외곽에서 모두를 추월합니다!',
      ]);
      await you.say_as_passer_by_and_wait('해설', [
        brian.get_colored_name(),
        '을 따라잡을 선수가 있을까요!? 독주, 독주, 골인!',
      ]);
      await you.say_as_passer_by_and_wait('중계', [
        maya.sex,
        '에게는 이제 이 길뿐입니다!',
      ]);
      await you.say_as_passer_by_and_wait('중계', [
        '삼관 ',
        maya.uma_sex_title,
        '의 이름에 걸맞은 레이스입니다! ',
        brian.get_colored_name(),
        ', 정말 멋진 활약입니다!',
      ]);
      await you.say_as_passer_by_and_wait('아나운서', [
        '방송석! 방송석입니다! 지금 만나볼 분은 바로 ',
        brian.get_colored_name(),
        ' 선수입니다!',
      ]);
      await you.say_as_passer_by_and_wait(
        '아나운서',
        '이번에도 멋진 승리를 거두셨습니다! 혹시 달리기 전부터 이미 본인이 이길 거라는 확신이 있었나요──',
      );
      await brian.say_and_wait('네 눈에는 그렇게 보였나?');
      await you.say_as_passer_by_and_wait('아나운서', [
        '그, 그야 당연하죠! 아무래도 그 ',
        brian.get_colored_name(),
        ' 선수니까요!',
      ]);
      await brian.say_and_wait('……흥.');
      await brian.say_and_wait('설령 안다고 한들, 뭐가 달라지지?');
      await brian.say_and_wait('나는 그저 나를 만족시키기 위해 달릴 뿐이다.');
      await brian.say_and_wait([
        '출주하는 것은 이기고 싶어 하는 ',
        maya.uma_sex_title,
        '뿐이다.',
      ]);
      await brian.say_and_wait([
        '그렇기에 ',
        maya.couple_title,
        '을 쓰러뜨린다. 나의 갈증을 채우기 위해.',
      ]);
      await brian.say_and_wait('──다음 레이스도 마찬가지다.');
      era.drawLine();
      await you.say_as_passer_by_and_wait('2명', '……');
      await era.printAndWait([
        '──삼관 ',
        maya.uma_sex_title,
        '를 목표로 하는 노선에는 G1마다 격언이 있다.',
      ]);
      await era.printAndWait([
        '「',
        sats_sho,
        '」──가장 빠른 ',
        maya.uma_sex_title,
        '가 이긴다. 「',
        toky_yus,
        '」──가장 운이 좋은 ',
        maya.uma_sex_title,
        '가 이긴다. 「',
        kiku_sho,
        '」──가장 강한 ',
        maya.uma_sex_title,
        '가 이긴다.',
      ]);
      await era.printAndWait([
        '하지만 방금 본 ',
        brian.get_colored_name(),
        '의 달리기는 「규격 밖의 실력」으로 그 격언을 초월했다…… ',
        maya.sex,
        '는 그만큼 강하다.',
      ]);
      await maya.say_and_wait(['………………', callname, '。']);
      era.printButton('「왜 그래?」', 1);
      await era.input();
      await maya.say_and_wait('아무것도 아냐, 그냥 불러봤어!');
      await era.printAndWait([
        maya.get_colored_name(),
        '은 그 말을 남기고 다시 텔레비전을 뚫어지게 쳐다보았다.',
      ]);
      await era.printAndWait([
        '──만약 올해의 클래식 도전에서, ',
        brian.get_colored_name(),
        '에게 맞설 만한 호적수가 나타난다면 그때는 상황이 달라질지도 모른다.',
      ]);
      era.drawLine({ content: '翌日' });
      await you.say_as_passer_by_and_wait('텔레비전', [
        '얼마나 강한 ',
        maya.uma_sex_title,
        '인가요! ──',
        brian.get_colored_name(),
        ', 우선 첫 관을 차지합니다!!',
      ]);
      await maya.say_and_wait([
        '……',
        callname,
        ', 아직도 ',
        call_16,
        '의 레이스를 보고 있는 거야?',
      ]);
      await maya.say_and_wait([
        call_3,
        '한테는 다음 주에 돌려주기로 했으니까, 지금 그렇게 급하게 안 봐도 되지 않을까?',
      ]);
      era.printButton('「그렇긴 하네」', 1);
      await era.input();
      await maya.say_and_wait('으으으……!!');
      await era.printAndWait([
        '──하지만 ',
        you.get_colored_name(),
        '은(는) 도저히 눈을 뗄 수가 없었다.',
      ]);
      await era.printAndWait([
        '만약 지금의 ',
        maya.get_colored_name(),
        '한테 ',
        maya.sex,
        '만큼 강한 상대가 있다면……',
      ]);
      await era.printAndWait('（──팟）');
      await maya.say_and_wait([
        '싫어──! 싫어 싫어 싫어 싫어──!! ',
        callname,
        ', 마야는 여기 있어! 여길 봐!',
      ]);
      era.printButton('「어?」', 1);
      await era.input();
      await maya.say_and_wait('마야 지금 엄청 기분 안 좋거든!');
      await maya.say_and_wait([
        '지금 ',
        callname,
        ' 이(가)슴 뛰고 있지? 그치?',
      ]);
      await maya.say_and_wait([
        '그런 건 싫어! 너는 마야의 ',
        callname,
        '인걸!',
      ]);
      await maya.say_and_wait([
        call_16,
        '의 레이스보다, 마야의 레이스를 보고 더 가슴 설레했으면 좋겠어!',
      ]);
      era.printButton('「마야……」', 1);
      await era.input();
      await maya.say_and_wait([call_16, '이(가) 진짜 강하긴 해!']);
      await maya.say_and_wait([
        maya.sex,
        '하고 같이 달리면 두근거리고 반짝일 거야! 마야도 그건 알아!',
      ]);
      await maya.say_and_wait('데뷔 전에는 나도 똑같이 생각했었으니까.');
      await maya.say_and_wait(
        '……하지만 마야는 이제 데뷔했어! 예전보다 훨씬 더 많은 걸 알게 됐다구!',
      );
      await maya.say_and_wait([
        '지금의 마야라면! 더 강해져서 『슈웅──!』 하고 ',
        call_16,
        '을(를) 앞지를 수 있어!',
      ]);
      era.printButton('（……『추월』.）', 1);
      await era.input();
      await era.printAndWait('……맞아, 비록 지금 당장 직접 맞붙을 순 없어도.');
      await era.printAndWait([
        maya.sex,
        '를 따라잡는 것을 하나의 목표로 삼는다면, ',
        maya.get_colored_name(),
        '에게 좋은 자극제가 될지도 모른다.',
      ]);
      await maya.say_and_wait([
        '마야는 진심이야! 금방 ',
        call_16,
        '을(를) 이겨 보일 거니까!',
      ]);
      await maya.say_and_wait(
        '이긴 뒤에는, 마야만 바라보면서 『정말 가슴 뛰는 레이스였어!』라고 칭찬해 줄 거지?',
      );
      await maya.say_and_wait(
        '나한테 『너 정말 반짝거려』, 『마야노 탑건이 최고야』라고 말해줄 거지?',
      );
      era.printButton('「당연하지!」', 1);
      await era.input();
      await maya.say_and_wait('그럼 결정된 거다!!');
      await maya.say_and_wait(
        '마야는 엄청 진지하니까! 꼭 약속 지켜야 해! 각오하고 있으라구! 알아들었어!?',
      );
      await era.printAndWait([
        '……',
        maya.sex,
        '는 묘하게 의욕이 넘쳤고, 그리하여──',
      ]);
      await era.printAndWait([
        '바로 이날, ',
        maya.sex,
        '의 마음속에는 「',
        brian.get_colored_name(),
        '」이라는 목표가 생겨났다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_29: (() => {
    const title = '여름 합숙（클래식 시즌）';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait(
        '오늘부터는 「여름 합숙」── 실력 향상을 위한 강화 트레이닝이 시작된다.',
      );
      await maya.say_and_wait('와아……☆ 빨간 집 귀여워~! ');
      await maya.say_and_wait([
        '나랑 ',
        callname,
        '이랑 여기서 어른의 여름을 보내는 거지!',
      ]);
      era.printButton('「모두와 함께 보내는 『여름 합숙』이야」', 1);
      await era.input();
      await maya.say_and_wait('쳇──! 알고 있다구!');
      await maya.say_and_wait(
        '흥! 나를 어린애 취급할 수 있는 건 지금뿐이라니까!',
      );
      await era.printAndWait([
        '그렇게, ',
        you.get_colored_name(),
        '은(는) ',
        maya.get_colored_name(),
        '과 함께 여름 합숙을 시작했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_30: (() => {
    const title = '코드 : 버닝!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} sats_sho 皐月賞（色付き名前）
     * @param {PrintedSpan} toky_yus 日本ダービー（色付き名前）
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      maya,
      brian,
      you,
      callname,
      call_16,
      sats_sho,
      toky_yus,
      kiku_sho,
    ) => {
      await era.printAndWait(
        '오늘부터 「여름 합숙」── 실력 향상을 위한 강화 트레이닝이 시작된다.',
      );
      await era.printAndWait('그리고 여름 합숙의 첫째 주를 맞이했다.');
      await era.printAndWait([
        '바다, 산, 축제 등 온갖 유혹 속에서도, ',
        maya.get_colored_name(),
        '은──',
      ]);
      await maya.say_and_wait('하아…… 하아…… 후우……☆');
      await maya.say_and_wait(
        '헤헤, 마야 진짜로 예전보다 더 빨라진 거 같지 않아?',
      );
      await maya.say_and_wait([
        '이러면 올해의 ',
        maya.uma_sex_title,
        ' 중에서 제일 빨라! 아니, 모든 ',
        maya.uma_sex_title,
        ' 중에서 제일 빠르겠지?',
      ]);
      era.printButton('「너무 과장하는 거 아냐?」', 1);
      await era.input();
      await maya.say_and_wait('뭐 어때! 그냥 해본 말이지!');
      await maya.say_and_wait([
        '마야는 ',
        callname,
        '한테 『마야노 탑건이 제일 반짝여』라는 말을 꼭 들을 거니까!',
      ]);
      await maya.say_and_wait('그날 봤던──');
      await maya.say_and_wait(['──', call_16, '보다 훨씬 더 반짝이게 말이야.']);
      era.printButton(`「브라이언 말이구나」`, 1);
      await era.input();
      await maya.say_and_wait(['아, 싫어 싫어! ', callname, ', 그 이름 금지!']);
      await maya.say_and_wait('……정말, 한시도 방심할 수가 없다니까!');
      await maya.say_and_wait([
        '아~ 마야는 아직 클래식급이네. 시니어가 되면 바로 ',
        call_16,
        '이랑──',
      ]);
      await maya.say_and_wait('아!!');
      await maya.say_and_wait([
        callname,
        '. 삼관 노선에 이제 남은 레이스가 뭐뭐 있지?',
      ]);
      await era.printAndWait([
        '──삼관 노선. ',
        brian.get_colored_name(),
        '이 「삼관 ',
        maya.uma_sex_title,
        '」가 되었을 때 걸었던 길이다.',
      ]);
      await era.printAndWait([
        '봄의 ',
        sats_sho,
        '하고 ',
        toky_yus,
        '는 이미 끝났다. 삼관 노선의 마지막 레이스는……',
      ]);
      era.printButton('「남은 건 『국화상』이야」', 1);
      await era.input();
      await maya.say_and_wait('문제없지☆ 그러니까 그게 다음 목표라는 거지!');
      await maya.say_and_wait([
        call_16,
        '이(가) 그때 보여줬던 것보다 훨씬 더 가슴 뛰는 모습을 보여줄게!',
      ]);
      era.printButton('「투지가 정말 대단하네」', 1);
      await era.input();
      await maya.say_and_wait('히히☆ 그래?');
      await maya.say_and_wait('근데 이렇게 의욕 넘치는 마야, 싫지 않지? 그치♪');
      await era.printAndWait([
        '그리하여, 새로운 목표는 「',
        kiku_sho,
        '」으로 결정되었다──!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_47_31: (() => {
    const title = '축제';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} sunday マーベラスサンデー
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_55 マヤノトップガンのマーベラスサンデーへの呼び方
     * @param {PrintedSpan} call_60 マヤノトップガンのナイスネイチャへの呼び方
     * @param {PrintedSpan} s_call_m マーベラスサンデーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} s_call_n マーベラスサンデーのナイスネイチャへの呼び方
     * @param {PrintedSpan} n_call_s ナイスネイチャのマーベラスサンデーへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (
      maya,
      sunday,
      nature,
      you,
      callname,
      call_55,
      call_60,
      s_call_m,
      s_call_n,
      n_call_s,
      kiku_sho,
    ) => {
      await era.printAndWait('이것은 여름 합숙 중에 일어난 일이다──');
      await maya.say_and_wait(['아, ', callname, '! 오늘 밤에 시간 있어?']);
      await maya.say_and_wait('사실은……');
      await sunday.say_and_wait(['아, ', s_call_m, '☆']);
      await maya.say_and_wait(['와, ', call_55, '! 헬로 헬로☆']);
      await sunday.say_and_wait([
        '헬로 헬로＆마블러스☆ 아하하, ',
        s_call_m,
        '★',
      ]);
      await era.printAndWait([
        maya.sex,
        '는 ',
        sunday.get_colored_name(),
        '。',
      ]);
      await sunday.say_and_wait([
        '오늘 밤에 같이 축제 구경 가자☆ ',
        s_call_n,
        '도 불렀으니까 ',
        nature.sex,
        '도 올 거야★',
      ]);
      await nature.say_and_wait([
        '잠깐만. 거기 폭주하는 ',
        maya.child_sex_title,
        ', 멈춰. 나는 아직 『권유받았을』 뿐이잖아?',
      ]);
      await sunday.say_and_wait([
        '그런 사소한 건 신경 쓰지 마~☆ 그래서 ',
        s_call_m,
        ', 우리 몇 시에 모일까?',
      ]);
      await maya.say_and_wait('아, 맞다! 그 일인데……');
      await maya.say_and_wait([
        '나 이번에는 빠질게! 오늘 밤에는 ',
        callname,
        '(이)랑 비밀 특훈을 하고 싶거든!',
      ]);
      await sunday.say_and_wait('에에에────!?');
      await nature.say_and_wait('호오……?');
      era.printButton('「우리 그런 약속 했었나?」', 1);
      await era.input();
      await maya.say_and_wait('응, 지금 말하려던 참이야!');
      await maya.say_and_wait([
        '그렇게 됐으니까, ',
        call_55,
        '(이)랑 ',
        call_60,
        '은(는) 축제 가서 재밌게 놀아!',
      ]);
      await maya.say_and_wait([
        '고작 실험의 검산일 뿐인데 그렇게 기뻐하다니, ',
        callname,
        '. 가자♪',
      ]);
      await nature.say_and_wait([
        '호오……? 반짝반짝한 ',
        maya.child_sex_title,
        ', 정말 ',
        callname,
        '한테 푹 빠졌네~',
      ]);
      await sunday.say_and_wait('…………');
      await nature.say_and_wait(['저기, 야~? ', n_call_s, ', 듣고 있어?']);
      await sunday.say_and_wait([n_call_s, '────！']);
      await nature.say_and_wait('꺄악!?');
      await sunday.say_and_wait([
        s_call_m,
        ', 정말 아름다워☆ 내가 모르는 아름다움을 알려 줬어★',
      ]);
      await nature.say_and_wait('뭐, 뭐야……?');
      await sunday.say_and_wait([
        s_call_n,
        '! 우리도 뒤처지면 안 돼! ',
        s_call_m,
        '에게 지지 않을 특훈을 하는 거야!',
      ]);
      await sunday.say_and_wait('쇠뿔도 단김에 빼야 마블러스☆ 좋아, 가자!!');
      await nature.say_and_wait('뭐, 뭐야~~!? 잠깐만, 잡아당기지 마──!!');
      era.drawLine();
      await maya.say_and_wait('하아…… 후우……');
      await maya.say_and_wait([
        '좋아, 3세트 끝! ',
        callname,
        ', 다음에는 무슨 트레이닝을 해?',
      ]);
      await era.printAndWait('（슈웅……）');
      await maya.say_and_wait('응? 방금 그건──');
      await era.printAndWait('（콰앙…… 팡……）');
      await maya.say_and_wait([
        '와아! 불꽃놀이다! ',
        callname,
        ', 불꽃놀이야!!',
      ]);
      await maya.say_and_wait('아하하, 크다. 설마 여기서도 보일 줄은 몰랐네.');
      await maya.say_and_wait('헤헤. 행사장에서 보면 얼마나 예쁠까?');
      era.printButton('「역시 축제에 가고 싶어?」', 1);
      await era.input();
      await maya.say_and_wait('……음~ 괜찮아!');
      await maya.say_and_wait('축제는 나중에 가도 되잖아.');
      await maya.say_and_wait([
        '『',
        kiku_sho,
        '』에서 이겨서 ',
        callname,
        '의 마음을 꽉 사로잡은 다음에!',
      ]);
      era.printButton('「이미 내 마음은 네가 잡고 있어」（파워+20）', 1);
      era.printButton('「그럼 정말 열심히 노력해야겠네」（근성+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('에잇, 정말? 하지만……');
        await maya.say_and_wait(
          '분명 아직 부족할 거야! 마야는 그렇게 생각하거든!',
        );
        await maya.say_and_wait([
          '마야가 ',
          callname,
          '을(를) 완전히 사로잡아서, 나 없이는 안 되게 만들 거야!',
        ]);
        await maya.say_and_wait([
          '히히, ',
          callname,
          ', 각오 단단히 하고 있으라구♪',
        ]);
        await era.printAndWait([
          '──그 말을 남긴 채, ',
          maya.get_colored_name(),
          '은 다시 해변을 달리기 시작했다.',
        ]);
      } else {
        await maya.say_and_wait('후후. 나한테 그 정도는 아무것도 아니지♪');
        await maya.say_and_wait(
          '왜냐면 난 아직 성장기인걸! 금방 해낼 수 있어!',
        );
        await maya.say_and_wait([
          '『',
          kiku_sho,
          '』이랑 다른 레이스에서도 이겨서, ',
          callname,
          '이(가) 나한테 홀딱 반하게 만들 거야!',
        ]);
        await maya.say_and_wait([
          '다음 여름을 ',
          callname,
          '하고 또 맞이하면 바다에서 어른다운 상을 받아야겠어……',
        ]);
        await era.printAndWait('（슈웅…… 콰앙────!!）');
        await maya.say_and_wait(
          '어, 어어~!? 왜 하필 이 타이밍에 터지는 거야~!?',
        );
        await maya.say_and_wait(
          '불꽃놀이 이 바보바보──! 분위기 좀 파악하라구!',
        );
        await era.printAndWait('（콰앙────!!）');
        await maya.say_and_wait('으으~ 방금 분위기 좋았는데~! 정말이지~!!');
        await era.printAndWait([
          maya.get_colored_name(),
          '은 발을 동동 구르며, 불꽃놀이를 향해 화를 냈다……',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  we_47_32: (() => {
    const title = '여름 합숙 (클래식 시즌) 종료';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait('여름 합숙은 눈 깜짝할 사이에 끝났다.');
      await era.printAndWait([
        maya.get_colored_name(),
        '도 나름대로 상당히 노력했다──',
      ]);
      await you.say_as_passer_by_and_wait(
        '버스 기사',
        '자, 트레센 학원에 도착했습니다.',
      );
      await maya.say_and_wait('쿨…… 쿨……');
      era.printButton('「마야, 도착했어」', 1);
      await era.input();
      await maya.say_and_wait(['에……? ', callname, '…… 후우.']);
      await maya.say_and_wait('후아…… 괜찮아. 알고 있어……');
      await maya.say_and_wait('쿨…… 쿨……');
      await era.printAndWait([
        '……이번 여름에 ',
        maya.sex,
        '는 정말 열심히 했다. ',
        you.get_colored_name(),
        '은(는) 조금 더 재워 주기로 했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_kiku_sho: (() => {
    const title = '국화상을 향해';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     */
    const f = async (maya, you, callname, kiku_sho) => {
      await maya.say_and_wait([
        '좋은 아침, ',
        callname,
        '! 완벽한 비행을 볼 준비 됐어?',
      ]);
      await maya.say_and_wait([
        '오늘은 『',
        kiku_sho,
        '』이니까! 트레이닝이 아니라 실전 레이스야☆',
      ]);
      era.printButton('「그동안의 성과를 보여 줘!」', 1);
      await era.input();
      await maya.say_and_wait('I copy！');
      await maya.say_and_wait(
        '잔디에는 연기보다 빨리 사라지는 마야의 궤적만 남을 거야☆',
      );
      await maya.say_and_wait([callname, '의 눈도 마음도! 마야가 가져갈게♪']);
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '아직 착륙할 생각은 없어';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} etsuko 乙名史記者／乙名史悦子
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} kiku_sho 菊花賞（色付き名前）
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      etsuko,
      you,
      callname,
      call_16,
      kiku_sho,
      arim_kin,
    ) => {
      await maya.say_and_wait(
        '레이더 반응 포착! 타깃, 록 온! 앞으로 3, 2, 1……!',
      );
      await maya.say_and_wait([callname, ', 방금 봤어~? 마야의 활약~☆']);
      era.printButton('「정말 잘 달려줬어」', 1);
      await era.input();
      await maya.say_and_wait(
        '헤헤헤~☆ 그치 그치! 마야는 역시 주목받는 스타니까♪',
      );
      await etsuko.say_and_wait([
        '……',
        maya.get_colored_name(),
        ' 선수! ',
        maya.get_colored_name(),
        ' 선수!',
      ]);
      await etsuko.say_and_wait(
        '저는 『월간 트윙클』의 오토나시라고 합니다. 레이스 후 소감을 잠시 인터뷰해도 될까요?',
      );
      await maya.say_and_wait(
        '와아! 마야를 인터뷰하는 거야~!? 좋아~☆ 뭐든 대답해 줄게!',
      );
      await etsuko.say_and_wait('감사합니다. 그럼 곧바로──');
      await etsuko.say_and_wait([
        '여러 도전 끝에 맞이한 이번 『',
        kiku_sho,
        '』이었습니다만, 이번 레이스는 마치 본인에게 가장 적합한 거리가 장거리라는 점을 증명하는 듯한……',
      ]);
      await maya.say_and_wait('응?');
      await etsuko.say_and_wait(
        '아, 실례했습니다. 제 질문 방식이 조금 어려웠나요.',
      );
      await etsuko.say_and_wait([
        maya.get_colored_name(),
        ' 선수가 클래식급에서 도전할 진정한 목표는 역시 『',
        kiku_sho,
        '』──',
      ]);
      await maya.say_and_wait(
        '응? 질문을 바꿀 필요는 없어. 마야도 다 알아들었는걸.',
      );
      await maya.say_and_wait('다만 『어째서?』라고 생각했을 뿐이야.');
      await maya.say_and_wait([
        '마야는 그냥 『',
        kiku_sho,
        '』에 나가고 싶어서 나간 거야. 그리고 이곳은 ',
        call_16,
        '도 달렸던 레이스니까.',
      ]);
      await etsuko.say_and_wait([
        '……',
        call_16,
        '? 혹시 그 ',
        maya.get_colored_name(),
        ' 선수 말씀이신가요?',
      ]);
      await maya.say_and_wait([
        '응, 맞아! 기자인 ',
        etsuko.adult_sex_title,
        ', 물어볼게! 마야의 달리기는 ',
        call_16,
        '보다 더 두근거렸어? 어때?',
      ]);
      await etsuko.say_and_wait('오오…… 이거 놀랍군요.');
      await etsuko.say_and_wait([
        brian.get_colored_name(),
        ' 선수에게 도전하실 생각이군요! 이건……!',
      ]);
      await etsuko.say_and_wait([
        '그렇다면 단도직입적으로 묻겠습니다. ',
        maya.get_colored_name(),
        '씨도 올해 『',
        arim_kin,
        '』에 출주하실 건가요?',
      ]);
      await maya.say_and_wait(['『', arim_kin, '』? 마야가?']);
      await etsuko.say_and_wait([
        '네. 『삼관 ',
        maya.uma_sex_title,
        '』인 ',
        brian.get_colored_name(),
        '도 올해 아리마에 출주하니까요.',
      ]);
      await etsuko.say_and_wait(
        '상황이 이렇다면, 역시 정면 승부를 피할 수 없겠죠?',
      );
      await era.printAndWait([
        '「',
        arim_kin,
        '」……매년 연말에 열리는 레이스. ',
        maya.uma_sex_title,
        '의 팬 지지율과 당시 실력을 그대로 드러내는 무대다.',
      ]);
      await era.printAndWait([
        '「삼관 ',
        maya.uma_sex_title,
        '」',
        brian.get_colored_name(),
        '뿐 아니라 「여걸」 ',
        amazon.get_colored_name(),
        ' 등 이름난 ',
        maya.uma_sex_title,
        '도 이미 출주를 선언했을 것이다.',
      ]);
      await maya.say_and_wait('응응, 나갈게!');
      era.printButton('（대답이 너무 가볍잖아!）', 1);
      await era.input();
      await etsuko.say_and_wait([
        '후훗. 슈퍼스타와 뉴스타, 과연 누가 더 눈부실까요. 올해의 ',
        arim_kin,
        '이 정말 기대되는군요.',
      ]);
      era.drawLine();
      await maya.say_and_wait([
        '하하♪ 다음 레이스는 『',
        arim_kin,
        '』이구나! ',
        callname,
        ', 우리 힘내자☆',
      ]);
      era.printButton('「정말로 『아리마 기념』에 나갈 거야?」', 1);
      await era.input();
      await maya.say_and_wait([
        '응. 거기라면 ',
        call_16,
        '(이)랑 직접 대결할 수 있지?',
      ]);
      await maya.say_and_wait(
        '히히, 이 기회를 얼마나 기다렸다구! 이제야 드디어 증명할 수 있어!',
      );
      await maya.say_and_wait([
        call_16,
        '보다 마야가 더 두근거리게 한다는 걸♪',
      ]);
      await era.printAndWait([
        '이렇게 봄에 ',
        maya.sex,
        '가 말했던 목표가 마침내 손에 닿을 만큼 가까워졌다……!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_c: (() => {
    const title = '아리마 기념을 향해';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} b_call_a ナリタブライアンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (maya, amazon, brian, callname, b_call_a, arim_kin) => {
      await maya.say_and_wait(['왔어, 드디어 왔어, 『', arim_kin, '』～！！']);
      await maya.say_and_wait([
        '흐흥, ',
        callname,
        '. 잘 봐 줘. 마야, 이번 레이스에서──',
      ]);
      await maya.say_and_wait('응! 저 두 사람은 혹시……');
      await amazon.say_and_wait(
        '하! 올해도 너랑 붙다니…… 목 씻고 기다리고 있었나?',
      );
      await brian.say_and_wait('……');
      await brian.say_and_wait([
        '훗…… 무슨 말인지 도통 모르겠군, ',
        b_call_a,
        '。',
      ]);
      await amazon.say_and_wait(
        '뭐!? 방금 그건 작년에 네가 한 『각오해 둬』에 대한 답이다──',
      );
      await brian.say_and_wait('……의도를 설명하라는 뜻이 아니다.');
      await brian.say_and_wait('알고 있겠지. 나를 도발하고 싶다면──');
      await brian.say_and_wait(
        '말이 아니라 레이스로 보여라. 진짜 실력으로 나를 쓰러뜨려라.',
      );
      await amazon.say_and_wait('……호오.');
      await amazon.say_and_wait([
        '그럼 이번 『',
        arim_kin,
        '』에서 일대일로 결판을 내자.',
      ]);
      await brian.say_and_wait('흥…… 눈빛은 나쁘지 않군.');
      await era.printAndWait([
        '──',
        maya.get_colored_name(),
        '의 시선 끝에 서 있는 것은 「삼관 ',
        maya.uma_sex_title,
        '」',
        brian.get_colored_name(),
        '하고 「여걸」 ',
        amazon.get_colored_name(),
        ', 두 사람이었다.',
      ]);
      await maya.say_and_wait('…………');
      era.printButton('「마야노 탑건?」', 1);
      await era.input();
      await maya.say_and_wait('앗!');
      await maya.say_and_wait([
        '미안, 미안, ',
        callname,
        '! 잠깐 멍하니 있었어!',
      ]);
      era.printButton('「이렇게 보니 박력이 넘치네」', 1);
      await era.input();
      await maya.say_and_wait('아, 싫어, 싫어! 그런 말 하지 마! 마야는 안 져!');
      await maya.say_and_wait(
        '그러니까 레이스 중에는 꼭 마야만 봐야 해! 알았지?',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_c: (() => {
    const title = '연료 가득';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      you,
      callname,
      call_16,
      a_call_m,
      arim_kin,
      hans_dai,
    ) => {
      await you.say_as_passer_by_and_wait('해설', [
        '──대단합니다! 정말 대단해요! 올해 『',
        arim_kin,
        '』의 챔피언에게 박수를 보내주십시오!!',
      ]);
      await era.printAndWait('（와아아아────────!!）');
      await you.say_as_passer_by_and_wait('관중A', [
        '그나저나 ',
        maya.get_colored_name(),
        '은 대단하네. ',
        brian.get_colored_name(),
        '을 이길 줄이야……',
      ]);
      await you.say_as_passer_by_and_wait('관중B', '으음…… 정말이네. 하지만……');
      await you.say_as_passer_by_and_wait('관중B', [
        brian.get_colored_name(),
        '이 이대로 물러날 리 없어. 너도 그렇게 생각하지?',
      ]);
      await you.say_as_passer_by_and_wait('관중A', [
        '응, 나도 그렇게 생각해…… 다음에는 ',
        brian.get_colored_name(),
        '이 이길 거라고 믿어.',
      ]);
      await maya.say_and_wait('하아…… 후……! 후…… 하아……!');
      await amazon.say_and_wait([
        '어, 어이, ',
        a_call_m,
        '. 너 괜찮은 거냐? 안색이 좀 안 좋아 보이는데……',
      ]);
      era.printButton('「……마야노 탑건!」', 1);
      await era.input();
      await amazon.say_and_wait([
        '다행이다. ',
        maya.sex,
        '의 체력이 바닥나려는 것뿐이니 빨리 쉬게 하는 편이 좋겠다……',
      ]);
      await maya.say_and_wait('……난 괜찮아. 그것보다 훨씬 중요한 게 있어……!');
      await maya.say_and_wait('마야, 엄청 즐겁게 달렸어!!');
      await amazon.say_and_wait('──앙!?');
      await brian.say_and_wait('……');
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        '스태프',
        '저기, 그럼 이어서 다음 질문 받겠습니다. 질문하실 분은 손을 들어──',
      );
      await maya.say_and_wait('……저요! 저 질문 있어요!!');
      await you.say_as_passer_by_and_wait('스태프', [
        '네, 그럼 저기 계신…… ',
        maya.get_colored_name(),
        ' 선수!?',
      ]);
      await era.printAndWait('（웅성웅성……）');
      await maya.say_and_wait([
        '저기, ',
        call_16,
        '! 다음엔 어떤 레이스에 나갈 거야!?',
      ]);
      await maya.say_and_wait([
        '나, ',
        call_16,
        '(이)랑 한 번 더 달리고 싶어!',
      ]);
      await maya.say_and_wait(
        '골인하기 전까지 결과가 어떻게 될지, 내가 어떻게 해야 할지도 모른 채로 계속 가슴이 조마조마했어……',
      );
      await maya.say_and_wait('그게 너무나도 두근거려!');
      await you.say_as_passer_by_and_wait('스태프', [
        '저, 저기…… ',
        maya.get_colored_name(),
        ' 선수. 죄송하지만 지금은 기자들의 질문 시간이라……',
      ]);
      await maya.say_and_wait('싫어! 금방 끝나니까 잠깐만 기다려 줘!');
      await maya.say_and_wait(
        '저기저기, 우리 한 번 더 붙자! 마야가 또 이겨줄 테니까!',
      );
      await maya.say_and_wait([
        '부탁이야, 부탁해! ',
        call_16,
        '도 아직 만족 못 했지!?',
      ]);
      await brian.say_and_wait('……흥.');
      await you.say_as_passer_by_and_wait('기자A', [
        '너, 너 이 녀석! 적당히 좀 해! ',
        brian.get_colored_name(),
        ' 선수도──',
      ]);
      await brian.say_and_wait(['……『', hans_dai, '』。']);
      await maya.say_and_wait('！');
      await brian.say_and_wait('네 질문에 대답했다. 사회자, 다음으로 넘기지.');
      await you.say_as_passer_by_and_wait(
        '스태프',
        '에, 아…… 네! 그럼 다음 분──',
      );
      await amazon.say_and_wait([
        '오호~ ',
        a_call_m,
        '이(가) 일을 아주 재미있게 만드는걸.',
      ]);
      await amazon.say_and_wait([
        '스스로 호랑이 굴에 뛰어들다니. ',
        maya.sex,
        '가 하룻강아지 범 무서운 줄 모르는 건지, 아니면──',
      ]);
      era.printButton('「' + maya.sex + ' 쪽은 배짱이 있으니까」', 1);
      await era.input();
      await amazon.say_and_wait([
        '하하. 너는 ',
        maya.sex,
        '를 높이 평가하는군.',
      ]);
      await amazon.say_and_wait('좋아. 너희 둘을 기억해 두지.');
      era.drawLine();
      await maya.say_and_wait([callname, ' ────！！']);
      await maya.say_and_wait([
        '있지, 있지, 마야는! 다음에는 『',
        hans_dai,
        '』에 나가고 싶어!',
      ]);
      era.printButton('「그럴 줄 알았어」', 1);
      await era.input();
      await maya.say_and_wait('어, 어떻게 알았어? 텔레파시!? 운명의 붉은 실!?');
      era.printButton('「네가 두근거리고 있으니까」', 1);
      await era.input();
      await maya.say_and_wait('！');
      await maya.say_and_wait([
        '에헤헤. 그런 것까지 알아주다니 역시 ',
        callname,
        '。',
      ]);
      await maya.say_and_wait([
        '좋아, 『',
        hans_dai,
        '』에서 ',
        call_16,
        '한테 완승할게☆',
      ]);
      await maya.say_and_wait(
        '난기류에 뛰어들 거라면 정면 돌파! 그게 마야의 비행법이야!',
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_lose_c: (() => {
    const title = '연료 보충';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      you,
      callname,
      call_16,
      a_call_m,
      arim_kin,
      hans_dai,
    ) => {
      await you.say_as_passer_by_and_wait('해설', [
        '──대단합니다! 정말 대단해요! 올해 『',
        arim_kin,
        '』의 챔피언에게 박수를 보내주십시오!!',
      ]);
      await era.printAndWait('（와아아아────────!!）');
      await you.say_as_passer_by_and_wait('관중A', [
        '솔직히 ',
        maya.get_colored_name(),
        '이 이렇게 강할 줄은 몰랐어. 한순간 ',
        maya.sex,
        '가 ',
        brian.get_colored_name(),
        '을 이기는 줄 알았다고.',
      ]);
      await you.say_as_passer_by_and_wait(
        '관중B',
        '훗, 그렇게 생각했다면 아직 보는 눈이 부족한 거지. 이게 『실력 차』라는 거야.',
      );
      await you.say_as_passer_by_and_wait('관중B', [
        '하지만 ',
        maya.sex,
        '는 정말 실력이 있어. 일 년 뒤의 ',
        arim_kin,
        '이라면…… 가능성이 있을지도.',
      ]);
      await maya.say_and_wait('하아…… 후……! 후…… 하아……!');
      await amazon.say_and_wait([
        '어, 어이, ',
        a_call_m,
        '. 너 괜찮은 거냐? 안색이 좀 안 좋아 보이는데……',
      ]);
      era.printButton('「……마야노 탑건!」', 1);
      await era.input();
      await amazon.say_and_wait([
        '다행이다. ',
        maya.sex,
        '의 체력이 바닥나려는 것뿐이니 빨리 쉬게 하는 편이 좋겠다……',
      ]);
      await maya.say_and_wait('……난 괜찮아. 그것보다 훨씬 중요한 게 있어……!');
      await maya.say_and_wait('마야, 엄청 즐겁게 달렸어!!');
      await amazon.say_and_wait('──앙!?');
      await brian.say_and_wait('……');
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        '스태프',
        '저기, 그럼 이어서 다음 질문 받겠습니다. 질문하실 분은 손을 들어──',
      );
      await maya.say_and_wait('……저요! 저 질문 있어요!!');
      await you.say_as_passer_by_and_wait('스태프', [
        '네, 그럼 저기 계신…… ',
        maya.get_colored_name(),
        ' 선수!?',
      ]);
      await era.printAndWait('（웅성웅성……）');
      await maya.say_and_wait([
        '저기, ',
        call_16,
        '! 다음엔 어떤 레이스에 나갈 거야!?',
      ]);
      await maya.say_and_wait([
        '나, ',
        call_16,
        '(이)랑 한 번 더 달리고 싶어!',
      ]);
      await maya.say_and_wait(
        '골인하기 전까지 결과가 어떻게 될지, 내가 어떻게 해야 할지도 모른 채로 계속 가슴이 조마조마했어……',
      );
      await maya.say_and_wait('그게 너무나도 두근거려!');
      await brian.say_and_wait('──흥. 사회자, 다음 질문으로……');
      await maya.say_and_wait('앗, 기다려 봐! 치사해! 도망가지 마!!');
      await brian.say_and_wait('……호오?');
      await brian.say_and_wait('방금 뭐라고 했지? 내가 너에게서 도망친다고?');
      await maya.say_and_wait('응, 맞아! 마야의 도전을 피하려고 하잖아!');
      await maya.say_and_wait('그렇게 강하고 반짝반짝 빛나면서!');
      await maya.say_and_wait(
        '사실은 다음에 또 나랑 붙으면, 본인이 질지도 모른다는 게 무서운 거 아냐?',
      );
      await you.say_as_passer_by_and_wait('기자A', [
        '저, 저기…… ',
        maya.get_colored_name(),
        ' 선수? 이번에는 ',
        maya.sex,
        '에게 진 건데──',
      ]);
      await maya.say_and_wait('하지만 다음엔 이길 거야!');
      await maya.say_and_wait(
        '마야, 겨우 반짝반짝 빛날 수 있을 것 같은 기분이 들었는데, 이 정도로 만족할 리 없잖아!!',
      );
      await brian.say_and_wait('……');
      await you.say_as_passer_by_and_wait(
        '기자B',
        '이, 이봐요…… 다음이라니 그건 좀 무리죠, 실력 차이가 이렇게 명백한데──',
      );
      await brian.say_and_wait(['……『', hans_dai, '』。']);
      await maya.say_and_wait('！');
      await brian.say_and_wait('네 질문에 대답했다. 사회자, 다음으로 넘기지.');
      await you.say_as_passer_by_and_wait(
        '스태프',
        '에, 아…… 네! 그럼 다음 분──',
      );
      await amazon.say_and_wait([
        '오호~ ',
        a_call_m,
        '이(가) 일을 아주 재미있게 만드는걸.',
      ]);
      await amazon.say_and_wait([
        '이렇게 무모한 도전을 하다니. ',
        maya.sex,
        '가 하룻강아지 범 무서운 줄 모르는 건지, 아니면──',
      ]);
      era.printButton('「' + maya.sex + '는 담력이 세니까」', 1);
      await era.input();
      await amazon.say_and_wait([
        '하하. 너, ',
        maya.sex,
        '를 아주 높게 평가하고 있구나.',
      ]);
      await amazon.say_and_wait('좋아. 너희 두 사람을 기억해두지.');
      era.drawLine();
      await maya.say_and_wait([callname, ' ────！！']);
      await maya.say_and_wait([
        '있지 있지, 마야 말야! 다음엔 『',
        hans_dai,
        '』에 나가고 싶어!',
      ]);
      era.printButton('「그럴 줄 알았어」', 1);
      await era.input();
      await maya.say_and_wait(
        '어라, 어떻게 알았어? 텔레파시!? 아니면 우리 사이에 운명의 붉은 실이라도 있는 거야!?',
      );
      era.printButton('「네가 너무 신나 보였거든」', 1);
      await era.input();
      await maya.say_and_wait('！');
      await maya.say_and_wait([
        '헤헤. 그런 것까지 알아주다니, 역시 우리 ',
        callname,
        '。',
      ]);
      await maya.say_and_wait([
        '좋아, 『',
        hans_dai,
        '』에서 ',
        call_16,
        '을(를) 완전히 이겨버릴 거야☆',
      ]);
      await maya.say_and_wait(
        '난기류에 뛰어들 거라면 정면으로 돌파해야지! 그게 바로 마야의 비행 방식이라구!',
      );
    };
    f.title = title;
    return f;
  })(),
  oc_95_1: (() => {
    const title = '새해 참배';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     */
    const f = async (maya, you, callname, call_16) => {
      await era.printAndWait([
        '운명의 3년째.',
        maya.get_colored_name(),
        '은 올해 시니어 시즌에 도전한다.',
      ]);
      era.printButton('「시니어 시즌」', 1);
      await era.input();
      await era.printAndWait('──올해는 분명 중요한 한 해가 될 것이다.');
      await maya.say_and_wait([
        '헤헤♪ ',
        callname,
        ', 그렇게 심각한 표정 짓지 마~♪',
      ]);
      await maya.say_and_wait('모처럼 신사 데이트잖아! 웃어, 웃어☆');
      era.printButton('「참 태평하구나」', 1);
      await era.input();
      await maya.say_and_wait('아하하, 즐거우니까!');
      await maya.say_and_wait('흐흥. 마야는 말이야, 올해 목표를 벌써 정했어♪');
      await maya.say_and_wait([
        '꼭 앞지를 거야. ',
        maya.sex,
        '를…… 전력을 다하는 ',
        call_16,
        '을(를)!',
      ]);
      await maya.say_and_wait('많이 생각해 봤지만 마야한테는──');
      await maya.say_and_wait('──지금 가장 하고 싶은 일이야!');
      era.printButton('「너라면 할 수 있어」', 1);
      await era.input();
      await maya.say_and_wait('에헤헤…… 마야도 그렇게 생각해♪');
      await era.printAndWait([
        '──',
        you.get_colored_name(),
        '은(는) ',
        maya.sex,
        '의 미소를 보며 다시 한번 생각했다.',
      ]);
      era.println();
      era.printButton(
        '（' + maya.sex + '가 계속 건강하고 활기차기를）（체력 +300）',
        1,
      );
      era.printButton(
        '（' + maya.sex + '가 많은 것을 배우고 성장하기를）（전 능력치 +10）',
        2,
      );
      era.printButton(
        '（' + maya.sex + '가 멋진 어른이 되기를）（스킬 포인트 +70）',
        3,
      );
      const ret = await era.input();
      await maya.say_and_wait(['응? ', callname, ', 방금 뭐라고 했어?']);
      era.printButton('「방금 기도했어」', 1);
      await era.input();
      switch (ret) {
        case 1:
          await maya.say_and_wait(
            '엣!? 치사해, 치사하다고! 혼자서 먼저 기도하기 없기!',
          );
          await maya.say_and_wait([
            '정말이지, 다시 해! ',
            callname,
            '도 나랑 같이 기도해야 해!',
          ]);
          await maya.say_and_wait(
            '그러고 나서 기도 끝나면 우리 계속 데이트하는 거다♪ 알았지☆',
          );
          await era.printAndWait([
            '새해 참배를 마치고 포장마차 데이트를 한 뒤 돌아갔다.',
          ]);
          break;
        case 2:
          await maya.say_and_wait('하하, 또 그런 표정 짓는다.');
          era.printButton('「……어떤 표정?」', 1);
          await era.input();
          await maya.say_and_wait('헤헤, 그러니까……');
          await maya.say_and_wait(
            '『내가 마야노 탑건을 위해 뭘 할 수 있을까』 하는 표정. 그리고 『마야노 탑건을 소중히 해줘야지』 하는 표정!',
          );
          await maya.say_and_wait(
            '그런 표정을 보면 마야는 기운이 불끈불끈 솟아나♪',
          );
          await maya.say_and_wait('후후, 좋아! 올해 첫 트레이닝을 하러 가자☆');
          await era.printAndWait([
            '그리하여 이날, ',
            you.get_colored_name(),
            '은(는) ',
            maya.get_colored_name(),
            '과 함께 새해 첫 트레이닝을 진행했다.',
          ]);
          break;
        case 3:
          await maya.say_and_wait([
            '후후후…… ',
            callname,
            ', 미숙해, 아직 멀었어!',
          ]);
          await maya.say_and_wait([
            '마야는 멋진 어른 ',
            maya.phy_sex_title,
            '이 될 거니까~☆',
          ]);
          era.printButton('「뭐가 다른데?」', 1);
          await era.input();
          await maya.say_and_wait([
            '완전히 달라~! 정말!! 『어른』하고 『어른 ',
            maya.phy_sex_title,
            '』의 차이는……',
          ]);
          await maya.say_and_wait('……뭐였더라.');
          era.printButton('「역시 모르는 거구나……」', 1);
          await era.input();
          await maya.say_and_wait(
            '아와와!? 아니야, 아니라고!! 둘은 정말 다르단 말이야~!!',
          );
          await era.printAndWait([
            '며칠 뒤, ',
            you.get_colored_name(),
            '은(는) 도서관에서 ',
            maya.get_colored_name(),
            '이 사전을 뚫어져라 쳐다보는 것을 발견했다.',
          ]);
      }
      return ret;
    };
    f.title = title;
    return f;
  })(),
  os_95_2: (() => {
    const title = '경품 추첨으로 운 시험!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {number} dice 福引の結果
     */
    const f = async (maya, you, callname, call_3, call_16, dice) => {
      await era.printAndWait(['어느 날 저녁, 상점가를 지나던 중──']);
      await maya.say_and_wait([
        '있지, 있지, ',
        callname,
        '. 저기서 뭔가 하고 있어!',
      ]);
      await you.say_as_passer_by_and_wait(
        '상점가 직원',
        '이쪽으로 오세요, 지금 신춘 대추첨회를 개최 중입니다~! 특별상은 무려 『온천 여행권』!',
      );
      await you.say_as_passer_by_and_wait(
        '상점가 직원',
        '일등은 『고급 당근 함박스테이크』, 이등은 『당근 한 바구니』, 삼등은 『당근 한 개』!',
      );
      await you.say_as_passer_by_and_wait(
        '상점가 직원',
        '거기 두 분! 데이트하고 돌아가는 길에, 두 분의 사랑을 시험해 보지 않겠어요?',
      );
      await maya.say_and_wait('꺄☆ 할래 할래♪');
      era.printButton('「바로 결정해 버렸네」', 1);
      await era.input();
      await maya.say_and_wait('재미있을 것 같잖아! 그, 리, 고……');
      await maya.say_and_wait(
        '우리는 이렇게 사이가 좋으니까 특별상에 당첨될 거야! 그치, 그치♪',
      );
      await era.printAndWait(
        '……하지만 운과 사랑 사이에는 딱히 연관성이 없어 보였다.',
      );
      await era.printAndWait([
        maya.get_colored_name(),
        '의 기세에 밀려 상점가에서 쇼핑하고 경품 추첨에 도전하기로 했다.',
      ]);
      await maya.say_and_wait([
        callname,
        '! 추첨권 한 장 받았어! 기회는 딱 한 번뿐!',
      ]);
      await maya.say_and_wait('으음~ 제발 제발, 특별상 뽑게 해 주세요……!');
      await era.printAndWait([
        '두 사람은 함께 기도하며 손잡이를 잡고 추첨기를 돌렸다.',
      ]);
      await era.printAndWait('결과는──');
      switch (dice) {
        case 0:
          await you.say_as_passer_by_and_wait(
            '상점가 직원',
            '세상에! 축하합니다────!! 특별상 『온천 여행권』 당첨이에요~~~~!!',
          );
          await era.printAndWait('【온천 여행권】을 획득했다.');
          await maya.say_and_wait('해냈다~~!! 미션 완료~!');
          era.printButton('「정말 잘됐다!」', 1);
          await era.input();
          await maya.say_and_wait('응! 그럼, 당장 온천을 향해 이륙☆');
          era.printButton('「아직 아무것도 준비 안 했어!?」', 1);
          await era.input();
          await maya.say_and_wait('에~? 준비~?');
          await era.printAndWait(
            '지금 당장 출발하려면 짐만 챙겨서 될 일이 아니었다.',
          );
          await era.printAndWait(
            '앞으로의 레이스나 트레이닝 일정을 조정한 뒤에 가는 게──',
          );
          era.printButton('「이게 다 너를 위해서야」', 1);
          await era.input();
          await maya.say_and_wait('마야를 위해서?');
          era.printButton('「너의 목표를 이뤄주고 싶으니까」', 1);
          await era.input();
          await maya.say_and_wait('아──');
          await maya.say_and_wait(
            '흐흥. 마야는 말이야, 이미 올해의 목표를 정해뒀어♪',
          );
          await maya.say_and_wait([
            '꼭 앞지를 거야. ',
            maya.sex,
            '를…… 전력을 다하는 ',
            call_16,
            '을(를)!',
          ]);
          await maya.say_and_wait(['……고마워. ', callname, '。']);
          await maya.say_and_wait(
            '좋아, 결정했어! 그럼, 마야의 목표를 달성한 뒤에 같이 가자!',
          );
          await maya.say_and_wait('그때가 되면 같이 가 줄 거지?');
          era.printButton('「물론이지!」', 1);
          await era.input();
          await maya.say_and_wait('헤헤, 신난다! 그렇게 정한 거다!');
          await maya.say_and_wait('그때가 되면 마음껏 쉬고, 실컷 즐기자구!');
          await era.printAndWait([
            '두 사람은 온천 여행권을 사용할 날을 기대하며 기다리기로 했다.',
          ]);
          break;
        case 1:
          await you.say_as_passer_by_and_wait(
            '상점가 직원',
            '일등, 축하해요~! 상품은 『고급 당근 함박스테이크』!',
          );
          await era.printAndWait('【고급 당근 함박스테이크】를 얻었다.');
          await maya.say_and_wait('와! 일등이야! 대단해~!!');
          await maya.say_and_wait('아, 온천 여행권이 아니네~!!');
          era.printButton('「그래도 일등이잖아!」', 1);
          await era.input();
          await maya.say_and_wait([
            '그치만 그치만~ 마야는 ',
            callname,
            '하고 뜨거운 여행을 가고 싶었는데……',
          ]);
          await maya.say_and_wait([
            '으으으…… 함박스테이크로는 ',
            callname,
            '의 마음을 사로잡을 수 없겠지.',
          ]);
          era.printButton('「……정말 그렇게 생각해?」', 1);
          await era.input();
          await maya.say_and_wait('어라? 아냐?');
          era.printButton('「사실 나 지금 배가 엄청 고파!」', 1);
          await era.input();
          await maya.say_and_wait(
            '정말!? 그럼 그럼, 마야 함박스테이크를 줄게!',
          );
          await maya.say_and_wait('……헤헤, 어때? 마야가 더 좋아졌어?');
          era.printButton('「그런 것 같아!」', 1);
          await era.input();
          await maya.say_and_wait('만세!');
          await you.say_as_passer_by_and_wait(
            '상점가 직원',
            '하하, 정말 사이가 좋네! 좋아, 하나 더 덤으로 줄게! 둘이 먹으렴!',
          );
          await maya.say_and_wait('와아!! 고마워요, 아저씨!');
          await maya.say_and_wait(
            '헤헤, 우리 사이가 정말 좋아 보인대~! 우리 더 사랑하게 된 것 같지 않아?♪',
          );
          await era.printAndWait([
            '그날 밤, ',
            you.get_colored_name(),
            '은(는) ',
            maya.get_colored_name(),
            '하고 고급 당근 함박스테이크를 함께 먹었다.',
          ]);
          break;
        case 2:
        case 3:
        case 4:
          await you.say_as_passer_by_and_wait(
            '상점가 직원',
            '이등입니다~!! 상품은 『당근 한 바구니』!',
          );
          await era.printAndWait('【당근 한 바구니】를 얻었다.');
          await maya.say_and_wait('와아!? 당근이 한가득~!?');
          await you.say_as_passer_by_and_wait(
            '상점가 직원',
            '네! 그 바구니에 든 당근 전부 가져가세요!',
          );
          await era.printAndWait(
            '──상점가 직원이 가리킨 곳에는 당근이 가득 든 커다란 바구니가 놓여 있었다.',
          );
          await maya.say_and_wait('……마야 혼자서 다 먹을 수 있을까.');
          era.printButton('「나도 도와줄게」', 1);
          await era.input();
          await maya.say_and_wait([
            '엣! 정말!? 그럼 ',
            callname,
            '(이)랑 같이──',
          ]);
          await maya.say_and_wait('……아!? 마야한테 좋은 생각이 났어!');
          await maya.say_and_wait([
            '있지, ',
            callname,
            '. 이 당근들, 쌤 방에 둬도 돼?',
          ]);
          await maya.say_and_wait([
            '마야는 ',
            call_3,
            '(이)랑 방을 같이 쓰는데, 방이 좁아서 다 안 들어갈 것 같아! 그러니까, 괜찮지!?',
          ]);
          era.printButton('「뭐, 그러려무나……」', 1);
          await era.input();
          await maya.say_and_wait('아싸!');
          await maya.say_and_wait(
            '그럼 내일부터 마야가 쌤 방으로 가서 당근 요리 잔뜩 해줄게♪',
          );
          era.printButton('「어라!?」', 1);
          await era.input();
          await maya.say_and_wait(
            '헤헤, 마야가 직접 만든 요리로 쌤의 마음을 사로잡아 버리겠어~♪',
          );
          await era.printAndWait([
            '──이날 이후 ',
            maya.get_colored_name(),
            '이 ',
            you.get_colored_name(),
            '의 방에 들이닥치는 횟수가 늘었다……',
          ]);
          break;
        case 5:
        case 6:
        case 7:
        case 8:
          await you.say_as_passer_by_and_wait(
            '상점가 직원',
            '삼등입니다~! 상품은 『당근 한 개』!',
          );
          await era.printAndWait('【당근 한 개】를 얻었다.');
          await maya.say_and_wait('에에~!? 거짓말이지!');
          await maya.say_and_wait('아저씨, 특별상을 잘못 본 거 아냐? 그치~?');
          await you.say_as_passer_by_and_wait(
            '상점가 직원',
            '으음…… 삼등이 맞아.',
          );
          await maya.say_and_wait([
            '우우! ',
            callname,
            '(이)랑 온천 여행 가려던 계획이……',
          ]);
          await maya.say_and_wait('게다가 고작 당근 한 개라니……');
          era.printButton('「네 머리 색이랑 똑같은, 아주 활기찬 색이네」', 1);
          await era.input();
          await maya.say_and_wait('……！');
          await maya.say_and_wait([
            '하하, ',
            callname,
            '은(는) 정말 항상 마야 생각뿐이라니까~!',
          ]);
          await maya.say_and_wait(
            '당근 색깔을 보고 내 머리 색을 떠올리다니, 보통은 그런 생각 바로 안 든다구!',
          );
          await maya.say_and_wait('……헤헤헤♪');
          await era.printAndWait([
            maya.get_colored_name(),
            '의 얼굴에 환한 미소가 퍼졌다.',
          ]);
          break;
        case 9:
          await you.say_as_passer_by_and_wait(
            '상점가 직원',
            '아쉽네요, 꽝입니다! 참가상은 『휴지』예요~',
          );
          await era.printAndWait('【휴지】를 얻었다.');
          await maya.say_and_wait('에에────!?');
          await maya.say_and_wait('당연히 당첨될 줄 알았는데! 왜냐면 왜냐면~!');
          await maya.say_and_wait([
            '마야랑 ',
            callname,
            '은(는) 이렇게나 사이가 좋은걸? 안 그래?',
          ]);
          await era.printAndWait([
            '다시 말하지만 운과 사랑에 관계가 있을 것 같지는 않다. ',
            you.get_colored_name(),
            '은(는) 토라진 ',
            maya.get_colored_name(),
            '을 달래며 학원으로 돌아갔다……',
          ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_95_4: (() => {
    const title = '청춘의 반짝임';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} callname_12 ヒシアマゾンのプレイヤーへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} n_call_a ナイスネイチャのヒシアマゾンへの呼び方
     * @param {boolean} join_arim_kin_c マヤノトップガンがクラシック級の有馬記念に出たか
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      nature,
      you,
      callname,
      call_12,
      t_call_m,
      callname_12,
      a_call_m,
      n_call_a,
      join_arim_kin_c,
      arim_kin,
    ) => {
      await era.printAndWait([
        '시니어 시즌의 봄이 찾아왔다. 최근 ',
        maya.get_colored_name(),
        '의 트레이닝 상태는──',
      ]);
      await maya.say_and_wait([callname, '! 트랙 3바퀴는 재미없어!']);
      await maya.say_and_wait('마야는 이제 30바퀴는 달려야 해!');
      era.printButton('「그건 다리에 너무 부담이 가」', 1);
      await era.input();
      await maya.say_and_wait(
        '에에──!? 그럼그럼, 얼른 다음에 할 트레이닝 좀 생각해 봐.',
      );
      await maya.say_and_wait([
        '나는 알고 있거든, ',
        callname,
        '은(는) 분명 나를 즐겁게 해줄 거란 걸!',
      ]);
      await maya.say_and_wait(
        '아, 어제 준 과제 리스트는 벌써 전부 마스터했어! 그러니까 거기 없는 걸로 부탁해☆',
      );
      await era.printAndWait([
        '……그렇게 ',
        you.get_colored_name(),
        '은(는) 매일 새로운 트레이닝 메뉴를 요구받았다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        maya.get_colored_name(),
        '은 이미 목표를 정하고 노력하고 있다. ',
        maya.sex,
        '의 목표를 이루어 주는 것이 트레이너의 역할이다──',
      ]);
      await maya.say_and_wait(['좋은 아침! ', callname, '! 오늘도 힘내자!']);
      await maya.say_and_wait(['어라, ', callname, '. 안색이 새하얘……']);
      await maya.say_and_wait(['앗, ', callname, '！？']);
      await era.printAndWait('（……털썩）');
      await amazon.say_and_wait('……이런, 위험할 뻔했군.');
      await amazon.say_and_wait('하마터면 쓰러질 뻔했어.');
      era.printButton('「네가 잡아준 거야……?」', 1);
      await era.input();
      await amazon.say_and_wait('하하, 고마워할 거 없어. 별거 아니니까.');
      await amazon.say_and_wait(
        '그런데 다크서클이 심하군…… 잠을 제대로 못 잤구나.',
      );
      await amazon.say_and_wait(['내가 말하건데, ', a_call_m, '！']);
      await maya.say_and_wait('아, 아와와……');
      await amazon.say_and_wait([a_call_m, '! 겁먹지 말고 대답해!']);
      await maya.say_and_wait('네, 넵!!');
      await amazon.say_and_wait([
        '……좋아, 그거면 됐어. ',
        callname_12,
        ', 너는 여기서 쉬어.',
      ]);
      await amazon.say_and_wait('이 녀석은 내가 봐주지.');
      era.printButton('「에엣!?」', 1);
      await era.input();
      await amazon.say_and_wait([
        '하하, 그렇게 당황하지 마. ',
        maya.sex,
        '를 잡아먹기라도 하겠나.',
      ]);
      if (join_arim_kin_c) {
        await amazon.say_and_wait([
          '지난번 『',
          arim_kin,
          '』에서의 선전 포고…… 솔직히 인상 깊었거든.',
        ]);
      }
      await amazon.say_and_wait('그러니 나도 좀 돕게 해줘.');
      await amazon.say_and_wait(
        '이렇게 장래가 유망한 아이를 혼자 독차지하게 둘 수야 없지.',
      );
      await maya.say_and_wait(['에에──!? ', call_12, '……！？']);
      await maya.say_and_wait([
        '아와와와……!? 죄, 죄송해요. 제 마음엔 오로지 ',
        callname,
        ' 뿐이라서……!',
      ]);
      await amazon.say_and_wait(
        '……어이, 진정해 줄래? 제안일 뿐이야. 중요한 건 네가 『강해지고 싶은가』야.',
      );
      await amazon.say_and_wait([
        '어때, ',
        callname_12,
        '。',
        maya.sex,
        '를 잠시 나한테 맡길래?',
      ]);
      await era.printAndWait([
        '──「여걸」 ',
        amazon.get_colored_name(),
        '。',
        maya.sex,
        '는 작년에도 올해에도 「',
        arim_kin,
        '」에서 ',
        brian.get_colored_name(),
        '의 호적수라고 할 만한 존재다.',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        '을 위한다면 ',
        you.get_colored_name(),
        '은(는) 자기 방침만 고집하지 말고 ',
        maya.sex,
        '의 의견도 참고해야 한다……!',
      ]);
      era.printButton('「그럼 부탁할게!」', 1);
      await era.input();
      await amazon.say_and_wait(
        '좋아, 그래야지! 히시 아마존 식 트레이닝 시작이다!',
      );
      era.drawLine();
      await amazon.say_and_wait([
        '자, ',
        a_call_m,
        '. 넌 쉬지 말고 계속 달려야 해. 내가 꼬리를 잡지 못하도록 말이야.',
      ]);
      await maya.say_and_wait(
        '어라, 이거 그냥 『꼬리잡기 놀이』잖아? 나 유치원 때 해본 적 있는데……',
      );
      await maya.say_and_wait('이게 정말 훈련이 맞아? ……그냥 노는 거 같은데?');
      await amazon.say_and_wait('오호, 여유만만하군. 그럼 시작한다.');
      await maya.say_and_wait('으, 으으……');
      await amazon.say_and_wait(
        '어이 어이, 왜 그래? 벌써 열 번 넘게 잡혔다고!',
      );
      await maya.say_and_wait([
        '그건 ',
        call_12,
        '이(가) 너무 치사해서 그런 거잖아! 갑자기 술래 숫자를 늘리고!',
      ]);
      await teio.say_and_wait([
        '후훗! 이번엔 내가 ',
        t_call_m,
        '을(를) 잡으러 갈게!',
      ]);
      await nature.say_and_wait('오오, 다들 즐거워 보이네……');
      await nature.say_and_wait([
        '저기, ',
        n_call_a,
        '. 지금처럼 도와주면 돼?',
      ]);
      await amazon.say_and_wait([
        '그래, 그거면 돼! 고마워! ……그런데 말이야, ',
        a_call_m,
        '。',
      ]);
      await amazon.say_and_wait(
        '간단히 말해서, 너의 약점은 바로 관찰력 부족이야.',
      );
      await maya.say_and_wait('……관찰력?');
      await maya.say_and_wait(
        '관찰한다는 건 상황을 파악하는 거잖아? 그건 이미 알고 있어. 규칙이나 도망치는 방법 같은 거.',
      );
      await maya.say_and_wait([
        '하지만 ',
        call_12,
        '이(가) 바로 술래 숫자랑 규칙을 바꿔버렸잖아! 너무 비겁해──',
      ]);
      await amazon.say_and_wait(
        '정말이지, 그래서 관찰력…… 아니, 네가 관찰하려고 들지 않는다는 거야.',
      );
      await maya.say_and_wait('……어?');
      await amazon.say_and_wait(
        '내가 보기에 넌 아주 훌륭한 재능과 트레이너를 가졌어.',
      );
      await amazon.say_and_wait(
        '넌 정말로 뭐든 해낼 수 있겠지. 그래서 네 주변 어른들도 너에게 많은 걸 해주고 있고.',
      );
      await amazon.say_and_wait('다만 말이야, 넌 타인에게 너무 의지하고 있어.');
      await amazon.say_and_wait(
        '지금도 그래. 넌 일단 이해했다고 생각하면…… 아니, 이해했다고 착각하면……',
      );
      await amazon.say_and_wait(
        '『자신이 모르는 것을 이해하려 들지 않아』…… 너 스스로 그런 습관을 들여버린 거야.',
      );
      await amazon.say_and_wait(
        '난 지금 『꼬리잡기 놀이』를 하는 게 아냐. 이건 레이스를 위한 훈련이야.',
      );
      await amazon.say_and_wait(
        '머리를 더 써서 생각해 봐. 실제 경기장에서는 여러 우마무스메들이 널 노릴 거야. 도중에 전략도 바뀌겠지.',
      );
      await amazon.say_and_wait(
        '그럴 때 넌 어떻게 할 거지? 그때그때 상황에 맞춰 유연하게 빠져나가야 할 거 아냐…… 내 말이 틀려?',
      );
      await maya.say_and_wait('……으음.');
      await amazon.say_and_wait('……덧붙여서 말하자면, 오늘 아침 일도 그래.');
      await amazon.say_and_wait([
        '너, ',
        callname_12,
        '이(가) 널 위해 얼마나 무리하고 있었는지 눈치챘어?',
      ]);
      await maya.say_and_wait('……！');
      await amazon.say_and_wait(
        '모처럼 대단한 재능을 가졌으면 그걸 끝까지 발휘해야지.',
      );
      await amazon.say_and_wait([
        '아니면 『이제 안 달려!』 하고 울면서 ',
        callname_12,
        '을(를) 곤란하게 만드는 어린애로 남을 거야?',
      ]);
      await maya.say_and_wait('으으~~! 마야는 절대 안 그래!!');
      await maya.say_and_wait(
        '마야는 어른스러운 여자가 될 거야! 절대 안 울어!',
      );
      await maya.say_and_wait([
        call_12,
        '! 한 번 더 해!! 이번엔 절대 안 잡힐 거니까!',
      ]);
      await amazon.say_and_wait('하하, 좋군. 그럼 시작하자!!');
      await maya.say_and_wait('흥──! 다시 한번! 나 이제 『이해했다구』!!');
      await amazon.say_and_wait(
        '오! 좋아, 바로 그거야! 머리가 아니라 몸이 기억하게 만드는 거다!',
      );
      await era.printAndWait([
        '──눈부신 석양 아래 ',
        maya.teen_sex_title,
        ' 일행이 땀을 흘리며 트랙을 계속 달리고 있었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '발렌타인';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} yukino ユキノビジン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_29 マヤノトップガンのユキノビジンへの呼び方
     * @param {PrintedSpan} y_call_m ユキノビジンのマヤノトップガンへの呼び方
     */
    const f = async (maya, yukino, you, callname, call_29, y_call_m) => {
      await era.printAndWait([
        '점심시간, ',
        you.get_colored_name(),
        '이(가) 교내를 걷고 있을 때──',
      ]);
      await maya.say_and_wait(['음~♪ ', call_29, '의 초콜릿 정말 맛있다~♪']);
      await yukino.say_and_wait([
        '헤헤. ',
        y_call_m,
        '이(가) 준 초콜릿도 정말 맛있어요~',
      ]);
      await yukino.say_and_wait('포장도 반짝이고 화려해요! 어디서 사셨어요?');
      await maya.say_and_wait([
        '흐흥…… 나는 어른스러운 ',
        maya.phy_sex_title,
        '이니까! 유행하는 가게쯤은 금방 찾아내지☆',
      ]);
      await yukino.say_and_wait([
        '와아……! 『도시의 ',
        maya.child_sex_title,
        '』예요!',
      ]);
      await maya.say_and_wait('에헴! 쇼핑하다 고민될 때는 나한테 맡기라구!');
      await maya.say_and_wait(['……아! ', callname, '이다! 헬로☆']);
      await maya.say_and_wait(
        '히히, 혹시 마야의 초콜릿을 못 기다려서 마중 나온 거야? 못 말려, 정말 어쩔 수 없다니까♪',
      );
      await maya.say_and_wait([
        call_29,
        ', 나 먼저 갈게──! 지금부턴 어·른·의·시·간☆이야',
      ]);
      await yukino.say_and_wait(
        '어, 어른…… 어른의 시간!? 무, 무무, 뭘 하시려고요~!?',
      );
      await era.printAndWait([
        '특별히 뭘 할 생각은 없었지만…… 하지만 ',
        you.get_colored_name(),
        '은(는) ',
        yukino.get_colored_name(),
        '의 오해를 풀 겨를도 없이 곧장 ',
        maya.get_colored_name(),
        '에게 끌려갔다……',
      ]);
      await maya.say_and_wait('자, 여기! 이건 내가 주는 초콜릿이야.');
      await maya.say_and_wait('헤헤, 얼른 열어봐, 얼른☆');
      await era.printAndWait([
        maya.sex,
        '의 기대에 찬 시선 아래, ',
        you.get_colored_name(),
        '은(는) ',
        maya.sex,
        '한테 받은 작은 상자를 열었다. 그 안에는──',
      ]);
      await era.printAndWait(
        '……얼마나 넣으려 한 건지, 상자에 초콜릿이 가득 들어 있었다.',
      );
      await maya.say_and_wait(
        '별 모양이 붙은 건 백화점에서 샀고, 하트 모양은 역 안에 있는 전문점에서 샀어!',
      );
      era.printButton('「정말 많이도 샀네」', 1);
      await era.input();
      await maya.say_and_wait(
        '헤헤, 오늘을 위해서 나 혼자 여러 가게를 돌아다녔거든!',
      );
      await maya.say_and_wait('그·러·니·까……');
      await maya.say_and_wait(
        '초콜릿을 이만큼이나 줬으니까 나랑 꼭 데이트해 줘야 해, 답례로♪',
      );
      era.drawLine();
      await era.printAndWait([
        '그 뒤 이날은 ',
        maya.get_colored_name(),
        '의 희망에 따라 초콜릿 전문점으로 나갔다.',
      ]);
      await era.printAndWait(
        '……거기에는 수제 느낌이 물씬 풍기는 소박한 초코 컵케이크가 있었다.',
      );
      await era.printAndWait(
        '초콜릿이 종이컵 밖으로 삐져나온 것도 있지만, 모두 정성껏 만들어져 있다──',
      );
      era.printButton('「맛있어 보이네」', 1);
      await era.input();
      await maya.say_and_wait('와아…………!');
      await maya.say_and_wait([
        '헤헤…… ',
        callname,
        '. 다 먹고 나서도 꼭 그렇게 말해줘야 해☆',
      ]);
      await maya.say_and_wait([
        '히히, 이건 특별한 ',
        maya.name,
        ' 케이크니까 밖에서는 절대 못 사거든!',
      ]);
      await maya.say_and_wait('……정말 특별하니까.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 살짝 달콤한 초코 컵케이크를 먹으며 하루를 보냈다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_hans_dai: (() => {
    const title = '한신 대상전을 향해';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     */
    const f = async (maya, brian, you, callname, call_16, hans_dai) => {
      await era.printAndWait(['그리고 「', hans_dai, '」 당일.']);
      await maya.say_and_wait(['…………가자, ', callname, '。']);
      await maya.say_and_wait('준비 완료! 엔진도 연료 가득!');
      era.printButton('「레이스 힘내」', 1);
      await era.input();
      await maya.say_and_wait('응!');
      era.drawLine();
      await brian.say_and_wait('…………');
      await maya.say_and_wait(['응! ', call_16, '。']);
      await brian.say_and_wait('……왔군.');
      await maya.say_and_wait('응, 왔어.');
      await maya.say_and_wait('에헤헤, 마야는 약속을 잘 지키는 착한 아이야.');
      await brian.say_and_wait('……어린애인가.');
      await maya.say_and_wait([
        '어!? ',
        call_16,
        ', 너무해!! 그런 말 하지 마!',
      ]);
      await brian.say_and_wait('……스스로 어린애 취급한 건 너잖아. 흥……');
      await brian.say_and_wait('……먼저 가겠다.');
      await maya.say_and_wait('앗, 기다려!!');
      await brian.say_and_wait('……하아, 또 뭐지.');
      await maya.say_and_wait('응! 할 말 있어!');
      await maya.say_and_wait('오늘은 전력을 다해 줘!');
      await maya.say_and_wait([
        '봐주기는 없어. 마야는 전력을 다하는 ',
        call_16,
        '한테 이기고 싶어.',
      ]);
      await maya.say_and_wait('안 그러면 마야는 반짝일 수 없을 것 같거든.');
      await brian.say_and_wait('……전력이라고?');
      await brian.say_and_wait('……장난하지 마라.');
      await maya.say_and_wait('아! 너무해! 마야는 진심인데──!');
    };
    f.title = title;
    return f;
  })(),
  hans_dai_win: (() => {
    const title = '조종간은 아직 손안에';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      hans_dai,
      tenn_spr,
    ) => {
      await maya.say_and_wait('하아…… 하아……!');
      await era.printAndWait('（와아아아아아아아────!!）');
      await maya.say_and_wait('히히, 내가 이겼어! 승리 잡았다~☆');
      await maya.say_and_wait('후후, 이걸로──');
      await brian.say_and_wait('……');
      await brian.say_and_wait('……아직 부족한가.');
      await maya.say_and_wait('…………');
      await maya.say_and_wait('……어라?');
      await maya.say_and_wait('…………');
      era.drawLine();
      await amazon.say_and_wait([
        a_call_m,
        '! 멋진 달리기였어! 마지막 직선은 정말 대단했어!',
      ]);
      await maya.say_and_wait([
        '……어라, ',
        call_12,
        '? 혹시 내 레이스 보러 와 준 거야?',
      ]);
      await amazon.say_and_wait(
        '그래! 너희 두 사람의 결전이니 응원하러 왔다──',
      );
      await maya.say_and_wait('그럼 나한테 가르쳐 줬으면 하는 게 있어.');
      await maya.say_and_wait([
        call_16,
        '은(는) 다음엔 어떤 레이스에 나가? ',
        call_12,
        '은(는) 알고 있지?',
      ]);
      await amazon.say_and_wait('！');
      await amazon.say_and_wait('정말 못 말리겠네. 아직도 만족 못 한 거야?');
      await maya.say_and_wait('응. 왜냐면……');
      await maya.say_and_wait([
        '그 사람은 아직 분해하지 않는걸. 오히려 ',
        maya.sex,
        ', 슬퍼 보여.',
      ]);
      await maya.say_and_wait([
        '……난 그런 거 싫어. 모처럼 ',
        maya.sex,
        '와 대결했는데──',
      ]);
      await maya.say_and_wait([
        '마야는 좀 더 눈부시게 빛나서, ',
        maya.sex,
        '가 분해할 정도로 만들고 싶어.',
      ]);
      await amazon.say_and_wait('……그렇구나.');
      await amazon.say_and_wait([
        '하, 처음 ',
        maya.sex,
        '를 봤을 때가 생각나네. 그때도 레이스가 끝났는데 ',
        maya.sex,
        '는 전혀 만족하지 못한 표정이었거든.',
      ]);
      await amazon.say_and_wait([
        '그럼 가르쳐 주지. 내 직감으로는 『',
        tenn_spr,
        '』이야.',
      ]);
      await amazon.say_and_wait(
        '그 녀석은 강자들이 모이는 무대를 갈망하고 있어.',
      );
      await amazon.say_and_wait([
        maya.sex,
        '에게 이번 『',
        hans_dai,
        '』도 원래는 『',
        tenn_spr,
        '』으로 가기 위한 과정이었을 뿐이겠지.',
      ]);
      await era.printAndWait([
        '──「',
        tenn_spr,
        '」. 그것은 유구한 역사를 지닌, 장거리 최고봉을 가리는 레이스였다.',
      ]);
      await maya.say_and_wait(['……', callname, '。']);
      era.printButton(`「그래, 『텐노상(봄)』에 나가자」`, 1);
      await era.input();
      await maya.say_and_wait('I copy！');
      await amazon.say_and_wait('허…… 이 둘은 정말 대단하네.');
      await amazon.say_and_wait(
        '좋아, 도와주기로 한 거 끝까지 도와주지! 나도 끼워줘!',
      );
      await amazon.say_and_wait([
        call_12,
        ', 오늘 돌아가면 아주 빡세게 단련시켜 줄 테니까! 각오해 둬!',
      ]);
      await maya.say_and_wait('히히, 당연히 오케이지☆');
      await era.printAndWait([
        '이렇게 다음 목표는 「',
        tenn_spr,
        '」으로 정해졌다!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  hans_dai_lose: (() => {
    const title = '즉시 상승';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      hans_dai,
      tenn_spr,
    ) => {
      await maya.say_and_wait('하아…… 하아……!');
      await maya.say_and_wait('으으…… 분명 조금만 더 가면 됐는데……!!');
      await era.printAndWait('（와아아아아아아아────!!）');
      await brian.say_and_wait('흥……');
      await brian.say_and_wait('……겨우 이 정도인가?');
      await maya.say_and_wait('정말~~! 저 표정은 뭐야~!');
      await maya.say_and_wait('완전히 마야를 무시하는 느낌이야~!!');
      await maya.say_and_wait('으으…… 하지만──');
      era.drawLine();
      await maya.say_and_wait('……다녀왔어!!');
      era.printButton('「어서 와」', 1);
      await era.input();
      await amazon.say_and_wait('오, 벌써 돌아온 거야?');
      await maya.say_and_wait(['에엣!? 왜 ', call_12, '이(가) 여기 있어!?']);
      await amazon.say_and_wait('왜냐니, 응원하러 온 거지……');
      await maya.say_and_wait('그렇구나! 그럼 잘됐다!');
      await maya.say_and_wait(
        '마야를 좀 더 단련시켜 줘! 오늘부터라도 상관없어!',
      );
      await amazon.say_and_wait('뭐!? 내 사정도 좀 봐달라고──');
      await maya.say_and_wait(
        '싫어! 마야는 강해지고 싶단 말이야! 더 강해질 수 있다는 걸 안단 말이야!',
      );
      await maya.say_and_wait([
        '왜냐면 너무 분한걸! ',
        maya.sex,
        ' 때문에 또 두근거리기 시작했단 말이야!',
      ]);
      await maya.say_and_wait([
        call_16,
        '은(는) 아직도 번쩍번쩍 빛나고 있단 말이야!',
      ]);
      await maya.say_and_wait(
        '이대로 계속 지고 싶지 않아! 스스로 「끝났다」고 말하고 싶지 않아!!',
      );
      era.printButton('「나도 부탁할게!」', 1);
      await era.input();
      await amazon.say_and_wait('하아…… 이 고집불통 녀석들은 대체 뭐야.');
      await amazon.say_and_wait('……뭐, 대결이란 건 이런 뜨거움이 있어야지.');
      await amazon.say_and_wait(
        '좋아, 도와주기로 한 거 끝까지 도와주지! 나도 끼워줘!',
      );
      await amazon.say_and_wait([
        a_call_m,
        ', 아주 빡세게 단련시켜 줄 테니까! 각오해 둬!',
      ]);
      await maya.say_and_wait('응! 고마워!');
      await amazon.say_and_wait('대답 좋네! 그 기세 꺾이지 말고 유지해!');
      await amazon.say_and_wait(
        '언제라도 전력을 다하라고! 미래를 생각하느라 제대로 주먹도 못 휘두르는 녀석은, 처음부터 기권하는 놈이랑 다를 바 없으니까!',
      );
      await maya.say_and_wait('네!');
      await amazon.say_and_wait([
        '훗! 그럼 다음 작전 회의를 시작해 볼까. 그러니까, ',
        a_call_m,
        '。',
      ]);
      await amazon.say_and_wait([
        '다음번에 ',
        maya.sex,
        '와 맞붙게 될 무대는 『',
        tenn_spr,
        '』이야.',
      ]);
      await maya.say_and_wait(['『', tenn_spr, '』……！']);
      await era.printAndWait([
        '──「',
        tenn_spr,
        '」. 그것은 유구한 역사를 지닌, 장거리 최고봉을 가리는 레이스였다.',
      ]);
      await amazon.say_and_wait(
        '그 녀석은 강자들이 모이는 무대를 갈망하고 있어.',
      );
      await amazon.say_and_wait([
        maya.sex,
        '에게 이번 『',
        hans_dai,
        '』도 원래는 『',
        tenn_spr,
        '』으로 가기 위한 과정이었을 뿐이겠지.',
      ]);
      await maya.say_and_wait(['……알겠어. 그럼, ', callname, '。']);
      era.printButton(`「그래, 『텐노상(봄)』에 나가자」`, 1);
      await era.input();
      await maya.say_and_wait('I copy！');
      await era.printAndWait([
        '그리하여 다음 목표는 「',
        tenn_spr,
        '」으로 결정되었다!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_95_14: (() => {
    const title = '팬 감사제';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} oguri オグリキャップ
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} city ゴールドシチー
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     */
    const f = async (
      maya,
      oguri,
      amazon,
      city,
      falcon,
      you,
      callname,
      call_12,
    ) => {
      await era.printAndWait([
        '팬 감사제. 평소 ',
        maya.uma_sex_title,
        '를 응원해 주는 팬들을 초대하는 축제다.',
      ]);
      await era.printAndWait(
        '봄 감사제의 볼거리는 운동 대항전 등의 기획이다──',
      );
      await maya.say_and_wait(
        '아하하, 신나는 분위기네~☆ 있지, 있지, 다음 종목은 더트 2000미터야~!',
      );
      await amazon.say_and_wait('……어이, 너도 나가잖아! 빨리 가!');
      await maya.say_and_wait([
        '에~!? 싫어, 싫어! 지금 ',
        callname,
        '하고 데이트 중인데~!',
      ]);
      era.printButton('「다녀와!」', 1);
      await era.input();
      await maya.say_and_wait(['어, ', callname, '까지!?']);
      era.drawLine();
      await maya.say_and_wait([
        '정말…… ',
        call_12,
        ', 너무해~ 모처럼 데이트인데……',
      ]);
      await amazon.say_and_wait(
        '……정말이지. 오늘은 축제지만 너무 들뜨지는 마.',
      );
      await amazon.say_and_wait('잊었나? 주변을 잘 봐.');
      await amazon.say_and_wait('그리고 제대로 신경 써.');
      await maya.say_and_wait('……주변……?');
      await city.say_and_wait('……훗. 내 실력을 보여 줄게.');
      await oguri.say_and_wait('응…… 나쁘지 않아.');
      await falcon.say_and_wait(
        '으음~ 다들 팔코를 보고 있네☆ 이대로 시선을 독차지해 버릴까♪',
      );
      await amazon.say_and_wait('……어때.');
      await maya.say_and_wait('……저 사람들하고는 별로 달려 본 적 없어.');
      await amazon.say_and_wait(
        '그래. 평소에 좀처럼 맞붙지 않는 상대가 지금 여기 모여 있어.',
      );
      await amazon.say_and_wait(
        '이번에는 실전 레이스가 아니야. 하지만 그렇기에──',
      );
      await amazon.say_and_wait(
        '평소에는 만날 수 없는 상대와 정면으로 부딪칠 수 있지.',
      );
      await amazon.say_and_wait(
        '어떤 레이스든 저 녀석들과 같은 무대에 설 기회는 평생 한 번뿐이야.',
      );
      await amazon.say_and_wait('그러니까 어느 레이스든 목숨 걸고…… 즐겨.');
      await maya.say_and_wait('……목숨 걸고 즐긴다.');
      await amazon.say_and_wait(
        '그래. 그러니 이번 레이스에서도 넌 더 성장할 거야! 그리고──',
      );
      await maya.say_and_wait('……성장!? 어른!?');
      await maya.say_and_wait([
        '알겠어☆ 오늘은 ',
        call_12,
        '을(를) 뒤에 두고 골인할 거야!',
      ]);
      await amazon.say_and_wait('어이!? 너무 들떴잖아!?');
      await era.printAndWait('그리고 더트 2000미터가 시작되었다──');
      era.drawLine();
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} amazon ヒシアマゾン
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
   * @param {PrintedSpan} callname_12 ヒシアマゾンのプレイヤーへの呼び方
   * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
   * @param {number} rank マヤノトップガンの模擬レース着順
   */
  async ws_95_14_end(
    maya,
    amazon,
    falcon,
    you,
    callname,
    call_12,
    callname_12,
    a_call_m,
    rank,
  ) {
    if (rank === 1) {
      await maya.say_and_wait([callname, '────! 마야가 1등이야──☆']);
      era.printButton('「대단해!」', 1);
      await era.input();
      await maya.say_and_wait('에헤헤…… 더 칭찬해 줘☆');
      await amazon.say_and_wait([
        '……장래가 유망한 ',
        maya.child_sex_title,
        '군. 나뿐 아니라 저 녀석들까지 이기다니……',
      ]);
      await maya.say_and_wait([
        '에헤헤. ',
        call_12,
        ', 진지하게 달리게 해 줘서 고마워!',
      ]);
      await maya.say_and_wait('엄청 즐거웠어! 엄청…… 두근두근했어.');
      await maya.say_and_wait(
        '이 레이스에서만 할 수 있는 일을 생각하고, 작전도 잔뜩 생각했어.',
      );
      await maya.say_and_wait(
        '──가장 멋진 달리기를 이번 레이스에 전부 쏟아부었어.',
      );
      await amazon.say_and_wait('음……! 전부 그 자리에서 생각해 낸 거야?');
      await amazon.say_and_wait([
        '이 ',
        maya.child_sex_title,
        ', 정말 장래가 기대되는군……!',
      ]);
      await era.printAndWait([
        '마야노 탑건은 한 걸음씩 확실하게 강해지고 있다. ',
        you.get_colored_name(),
        '은(는) 그것을 뚜렷이 느낄 수 있는 하루를 보냈다.',
      ]);
    } else {
      await maya.say_and_wait(['으으…… ', callname, '……']);
      await amazon.say_and_wait(['하하하! ', a_call_m, '! 시원하게도 졌군.']);
      await amazon.say_and_wait(
        '하지만 이것도 좋은 기회야. 승자의 얼굴을 잘 보고 그 분함을 힘으로 바꿔.',
      );
      await amazon.say_and_wait('나도 그렇게 강해졌어…… 훗.');
      await maya.say_and_wait('으으으…… 강해지기 위해…… 성장하기 위해……!');
      await falcon.say_and_wait('모두~~! 고마워~~☆');
      await you.say_as_passer_by_and_wait('관중', '우오오오오오!! 팔코──!!');
      await maya.say_and_wait(
        '와~~ 싫어, 싫어, 싫어! 분해, 분해, 엄청 분해~!!',
      );
      await maya.say_and_wait([
        '마야도 저기에 서서 ',
        callname,
        '의 응원을 받고 싶어~!',
      ]);
      await amazon.say_and_wait([
        '하아…… 너는 정말 머릿속이 ',
        callname_12,
        ' 생각으로 가득하구나.',
      ]);
      await maya.say_and_wait([
        '으으…… 그야 ',
        callname,
        '한테 어른이 된 마야를 보여 주고 싶은걸.',
      ]);
      era.printButton('「이미 충분히 성장한 게 느껴져」', 1);
      await era.input();
      await maya.say_and_wait(['……', callname, '。']);
      await maya.say_and_wait('으으…… 한 번 더 할래~! 다음에는 꼭 이길 거야!');
      await amazon.say_and_wait('한 번뿐이라고 했잖아! ……정말이지!');
      await era.printAndWait([
        '그 뒤 ',
        you.get_colored_name(),
        '은(는) ',
        amazon.get_colored_name(),
        '하고 힘을 합쳐 날뛰는 ',
        maya.get_colored_name(),
        '을 진정시켰다.',
      ]);
    }
  },
  before_tenn_spr: (() => {
    const title = '텐노상(봄)을 향해';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} t_call_a トウカイテイオーのヒシアマゾンへの呼び方
     * @param {PrintedSpan} t_call_b トウカイテイオーのナリタブライアンへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} callname_12 ヒシアマゾンのプレイヤーへの呼び方
     * @param {PrintedSpan} hans_dai 阪神大賞典（色付き名前）
     * @param {PrintedSpan} tenn_spr 天皇賞（春）（色付き名前）
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      you,
      callname,
      call_3,
      t_call_a,
      t_call_b,
      t_call_m,
      callname_12,
      hans_dai,
      tenn_spr,
      arim_kin,
    ) => {
      await era.printAndWait(['그리고 「', tenn_spr, '」 당일──']);
      await teio.say_and_wait(['안녕~♪ ', t_call_m, '！']);
      await maya.say_and_wait(['와, ', call_3, '! 응원하러 와 줬어?']);
      await teio.say_and_wait([
        '응, ',
        t_call_a,
        '도 볼일 끝나면 바로 오겠대!',
      ]);
      await teio.say_and_wait('에헤헤, 다들 기대하고 있어! 네 레이스를!');
      await teio.say_and_wait('봐, 이것 좀 봐!');
      await you.say_as_passer_by_and_wait('신문', [
        '『',
        tenn_spr,
        '은 양강 대결인가!?』『',
        brian.get_colored_name(),
        '하고 ',
        maya.get_colored_name(),
        ', 누가 이길 것인가!』',
      ]);
      await you.say_as_passer_by_and_wait('신문', [
        '『',
        hans_dai,
        '의 격전을 거쳐 맞이하는 ',
        tenn_spr,
        '!』『빛나는 것은 거성 ',
        brian.get_colored_name(),
        '인가, 신성 ',
        maya.get_colored_name(),
        '인가!』',
      ]);
      await maya.say_and_wait('……！');
      await teio.say_and_wait('에헤헤, 어때? 긴장돼?');
      await maya.say_and_wait('………………후후후.');
      await maya.say_and_wait(
        '이런 걸로 마야가 겁먹을 리 없잖아! 벌써 두근두근해!',
      );
      await teio.say_and_wait(['와~! ', t_call_m, ', 어른스러워~! 멋져~!']);
      await maya.say_and_wait('아하하! 푸딩 주면 용서해 줄게☆');
      await maya.say_and_wait(['에헤헤. 그럼 ', callname, ', 마야 먼저 갈게!']);
      era.printButton('「오늘은 절대 지지 마」', 1);
      await era.input();
      await maya.say_and_wait('응, 안 져!');
      await maya.say_and_wait('이번에야말로 브라이언한테 완벽하게 이길 거야!');
      await maya.say_and_wait(['그러니까 ', callname, '도 기대해 줘!']);
      era.drawLine();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        maya.get_colored_name(),
        '을 배웅한 뒤──',
      ]);
      await era.printAndWait('(똑똑)');
      await teio.say_and_wait([
        '어라, ',
        t_call_a,
        '？ ',
        t_call_m,
        '은(는) 벌써 갔어.',
      ]);
      await amazon.say_and_wait('……너희, 그 영상 봤어?');
      await teio.say_and_wait([
        '어, ',
        t_call_b,
        '의 뉴스? 그건 ',
        t_call_m,
        '한테 보여 줬는데……',
      ]);
      await amazon.say_and_wait('아니야. 방금 나온 거야.');
      await amazon.say_and_wait(['……아무튼 ', callname_12, ', 먼저 봐.']);
      await era.printAndWait([
        '……',
        you.get_colored_name(),
        '이(가) 건네받은 스마트폰에는 뉴스가 나오고 있었다.',
      ]);
      await you.say_as_passer_by_and_wait('기자', [
        brian.get_colored_name(),
        ' 선수, 정말인가요!? 이번 『',
        tenn_spr,
        '』를 마친 뒤──',
      ]);
      await brian.say_and_wait(['그래, 『', arim_kin, '』를 목표로 조정한다.']);
      await you.say_as_passer_by_and_wait('기자', [
        '그, 그래도…… ',
        arim_kin,
        '은 겨울 레이스잖아요!? 지금 정하는 건 너무 이르지 않나요──',
      ]);
      await brian.say_and_wait('──이르지 않다.');
      await brian.say_and_wait(
        '확인하고 싶은 게 있다. 그러려면 시간이 필요해.',
      );
      await brian.say_and_wait([
        '──이 ',
        brian.get_colored_name(),
        '이 어디까지 달릴 수 있는지를……!',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '비상사태';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      arim_kin,
    ) => {
      await maya.say_and_wait('하아…… 하아……! ……좋아!');
      await maya.say_and_wait(['이걸로…… ', call_16, '한테……!']);
      await brian.say_and_wait('──어째서지.');
      await brian.say_and_wait('흥……! 아직 이 정도라니……!');
      await maya.say_and_wait('……정말, 마야는 보고 있지도 않은 것 같아.');
      era.drawLine();
      await maya.say_and_wait([call_16, ', 어디를 보고 있는 거야……']);
      era.printButton('「……어?」', 1);
      await era.input();
      await maya.say_and_wait(['……', call_16, ', 어디를 보고 있는 걸까……?']);
      await maya.say_and_wait(['……', callname, ', 있지. 부탁이 있어.']);
      await maya.say_and_wait([
        '한 번만 더 해도 좋아. 빨리 ',
        call_16,
        '하고 달리게 해 줘.',
      ]);
      era.printButton('「이번에는 이겼잖아」', 1);
      await era.input();
      await maya.say_and_wait('응, 한 번 더 달려야 해…… 왜인지는 모르겠지만.');
      await maya.say_and_wait(
        '게다가 이번에는 서둘러야 할 것 같은 예감이 들어……',
      );
      await amazon.say_and_wait([
        '음! ',
        a_call_m,
        '……이번 레이스에서 그렇게 느낀 건가.',
      ]);
      await maya.say_and_wait('……으, 응.');
      await amazon.say_and_wait('그래. 그렇다면 더더욱 내버려 둘 수 없겠군.');
      await amazon.say_and_wait(['──『', arim_kin, '』가 분명 마지막일 거야.']);
      era.printButton('「……마지막?」', 1);
      await era.input();
      await amazon.say_and_wait([
        '그래. 녀석은 ',
        arim_kin,
        '을 『마지막 레이스』로 삼아 선수 생활을 끝낼 생각이야.',
      ]);
      await amazon.say_and_wait('흥…… 너무 이른 퇴장이야……!');
      await maya.say_and_wait([call_12, '！？']);
      await maya.say_and_wait('……왜? 이상하잖아.');
      await maya.say_and_wait([
        '마지막일 리 없어…… ',
        call_16,
        ', 오늘도 강했잖아.',
      ]);
      await maya.say_and_wait('끝이라니. 싫어…… 마야는 인정 못 해!');
      await maya.say_and_wait([
        '레이스에서 이겨도 ',
        call_16,
        '한테 이긴 것 같지 않은걸!',
      ]);
      await maya.say_and_wait([
        '마야만이 아니야. ',
        maya.sex,
        '한테도 마야의 힘으로 두근거림을 느끼게 해 주고 싶어!',
      ]);
      era.printButton(
        '「' + brian.sex + ' 쪽을 두근거리게 하고 싶은 거구나」',
        1,
      );
      await era.input();
      await maya.say_and_wait('……응, 맞아. 분하니까.');
      await maya.say_and_wait([
        '레이스에서 반짝이는 ',
        maya.uma_sex_title,
        '는 함께 달린 상대도 관중도, 모두의 마음을 두근거리게 하는 존재야.',
      ]);
      await maya.say_and_wait([
        '그러니까 마야도 ',
        maya.sex,
        '를 두근거리게 하는 사람이 되고 싶어……!',
      ]);
      await maya.say_and_wait(['있지, ', callname, '. ……그러니까.']);
      await maya.say_and_wait([
        call_12,
        ', 아까 아리마 기념이 ',
        call_16,
        '의 마지막 레이스라고 했지.',
      ]);
      await maya.say_and_wait([
        '그러니까 『',
        arim_kin,
        '』까지 마야를 완벽하게 단련시켜 줘.',
      ]);
      era.printButton('「알았어」', 1);
      await era.input();
      await maya.say_and_wait('……고마워. 에헤헤, 기대돼.');
      await era.printAndWait([
        '──「',
        arim_kin,
        '」를 목표로 삼으면서 ',
        maya.sex,
        '가 바라는 강적과도 맞붙는다…… 그런 방침으로 G1 출주 계획을 세운다면──',
      ]);
      await era.printAndWait(
        '여름과 가을에 적어도 한 번씩은 출주하고 싶다. 아리마와 비슷한 중장거리나 중거리 G1이다.',
      );
      era.printButton('「『타카라즈카 기념』, 『텐노상(가을)』……」', 1);
      await era.input();
      await maya.say_and_wait(
        '알았어, 마야 나갈게. 레이스에 나가서…… 가장 빠르게 강해질 거야.',
      );
      await maya.say_and_wait('──그렇게 해야 할 것 같아.');
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_lose: (() => {
    const title = '비상사태';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_12 マヤノトップガンのヒシアマゾンへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      amazon,
      brian,
      callname,
      call_12,
      call_16,
      a_call_m,
      arim_kin,
    ) => {
      await maya.say_and_wait('하아…… 하아……! ……으으!');
      await maya.say_and_wait([call_16, '……역시…… 빨라……!!']);
      await brian.say_and_wait('──어째서지.');
      await brian.say_and_wait('어째서…… 아직도 닿지 않지……!');
      await maya.say_and_wait('……정말, 마야는 보고 있지도 않은 것 같아.');
      era.drawLine();
      await maya.say_and_wait([call_16, ', 어디를 보고 있는 거야……']);
      era.printButton('「……어?」', 1);
      await era.input();
      await maya.say_and_wait(['……', call_16, ', 어디를 보고 있는 걸까……?']);
      await maya.say_and_wait(['……', callname, ', 있지. 부탁이 있어.']);
      await maya.say_and_wait([
        '한 번만 더 해도 좋아. 빨리 ',
        call_16,
        '하고 달리게 해 줘.',
      ]);
      era.printButton('「또 ' + brian.sex + '한테 도전하려고?」', 1);
      await era.input();
      await maya.say_and_wait('응, 한 번 더 달려야 해…… 왜인지는 모르겠지만.');
      await maya.say_and_wait(
        '게다가 이번에는 서둘러야 할 것 같은 예감이 들어……',
      );
      await amazon.say_and_wait([
        '음! ',
        a_call_m,
        '……이번 레이스에서 그렇게 느낀 건가.',
      ]);
      await maya.say_and_wait('……으, 응.');
      await amazon.say_and_wait('그래. 그렇다면 더더욱 내버려 둘 수 없겠군.');
      await amazon.say_and_wait(['──『', arim_kin, '』가 분명 마지막일 거야.']);
      era.printButton('「……마지막?」', 1);
      await era.input();
      await amazon.say_and_wait([
        '그래. 녀석은 ',
        arim_kin,
        '을 『마지막 레이스』로 삼아 선수 생활을 끝낼 생각이야.',
      ]);
      await amazon.say_and_wait('흥…… 너무 이른 퇴장이야……!');
      await maya.say_and_wait([call_12, '！？']);
      await maya.say_and_wait('……왜? 이상하잖아.');
      await maya.say_and_wait([
        '마지막일 리 없어…… ',
        call_16,
        ', 오늘도 강했잖아.',
      ]);
      await maya.say_and_wait([maya.sex, ', 또 마야를 두근거리게 했잖아?']);
      await maya.say_and_wait('그런데 끝이라니. 싫어…… 마야는 인정 못 해!');
      await maya.say_and_wait([
        '마야는 ',
        maya.sex,
        '한테 계속 지고만 있고 싶지 않아!',
      ]);
      era.printButton('「……이기고 싶어?」', 1);
      await era.input();
      await maya.say_and_wait('이기고 싶어.');
      await maya.say_and_wait([
        '……마야만이 아니야. 이번에는 ',
        brian.sex,
        '한테도 제대로 두근거림을 느끼게 하고 싶어.',
      ]);
      await maya.say_and_wait([
        '레이스에서 반짝이는 ',
        maya.uma_sex_title,
        '는 함께 달린 상대도 관중도, 모두의 마음을 두근거리게 하는 존재야.',
      ]);
      await maya.say_and_wait([
        '그러니까 마야도 ',
        maya.sex,
        '를 두근거리게 하는 사람이 되고 싶어……!',
      ]);
      await maya.say_and_wait(['있지, ', callname, '. ……그러니까.']);
      await maya.say_and_wait([
        call_12,
        ', 아까 아리마 기념이 ',
        call_16,
        '의 마지막 레이스라고 했지.',
      ]);
      await maya.say_and_wait([
        '그러니까 『',
        arim_kin,
        '』까지 마야를 완벽하게 단련시켜 줘.',
      ]);
      era.printButton('「알았어」', 1);
      await era.input();
      await maya.say_and_wait('……고마워. 에헤헤, 기대돼.');
      await era.printAndWait([
        '──「',
        arim_kin,
        '」를 목표로 삼으면서 ',
        maya.sex,
        '가 바라는 강적과도 맞붙는다…… 그런 방침으로 G1 출주 계획을 세운다면──',
      ]);
      await era.printAndWait(
        '여름과 가을에 적어도 한 번씩은 출주하고 싶다. 아리마와 비슷한 중장거리나 중거리 G1이다.',
      );
      era.printButton('「『타카라즈카 기념』, 『텐노상(가을)』……」', 1);
      await era.input();
      await maya.say_and_wait(
        '알았어, 마야 나갈게. 레이스에 나가서…… 가장 빠르게 강해질 거야.',
      );
      await maya.say_and_wait('──그렇게 해야 할 것 같아.');
    };
    f.title = title;
    return f;
  })(),
  ws_95_20: (() => {
    const title = '일몰을 향해';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} t_call_a トウカイテイオーのヒシアマゾンへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（色付き名前）
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      teio,
      amazon,
      brian,
      callname,
      t_call_a,
      t_call_m,
      a_call_m,
      takz_kin,
      tenn_sho,
      arim_kin,
    ) => {
      await brian.print_and_wait([
        '처음엔 그저 ',
        brian.elder_sibling_sex_title,
        '하고 누가 더 빠른지 겨루는 것뿐이었다.',
      ]);
      await brian.print_and_wait([
        '지극히 평범한 ',
        brian.siblings_sex_title,
        '끼리의 경쟁…… 정말 지극히 평범했다.',
      ]);
      await brian.print_and_wait([
        '하지만 나는 ',
        brian.elder_sibling_sex_title,
        '의 등을 필사적으로 쫓았다. 기쁨에 떠는 짐승처럼.',
      ]);
      await brian.print_and_wait(
        '다리를 움직이고, 허파에 공기를 들이마신다. 그리고 다시 다리를 움직인다──',
      );
      await brian.print_and_wait('이것이 바로 나의 호흡.');
      await brian.print_and_wait(
        '──얼마 지나지 않아, 내가 쫓아야 할 등은 사라졌다.',
      );
      await brian.print_and_wait('나는 혼자가 되었다.');
      await brian.print_and_wait(
        '비록 외톨이가 되었어도 나는 나의 호흡을 기억한다.',
      );
      await brian.print_and_wait(
        '그리고 한 가지를 깨달았다. 나의 호흡은 나를 굶주리게 만든다는 것을.',
      );
      await brian.print_and_wait(
        '전력을 다해 숨을 쉴수록 목은 더욱 타오르고, 결코 만족할 수 없다는 것을 깨달았다.',
      );
      await brian.print_and_wait('하지만 호흡을 멈출 수는 없다.');
      await brian.print_and_wait(
        '설령 호흡이 고통을 가져올지라도, 그것은 살아가기 위함이다.',
      );
      await brian.print_and_wait('그러나 만약…… 만약 이 몸이──');
      await brian.print_and_wait(
        '언젠가 나의 호흡을 거부하게 되는 날이 온다면──',
      );
      await brian.print_and_wait('……아마도 그때겠지.');
      await brian.print_and_wait('허억…… 허억……!');
      await brian.print_and_wait('흥…… 나는…… 지지 않는다!');
      era.drawLine();
      await amazon.say_and_wait('저 녀석…… 아직도 더 달릴 수 있는 건가.');
      await amazon.say_and_wait([
        '흥…… ',
        arim_kin,
        '은 ',
        a_call_m,
        '뿐만이 아니라고. 나도 반드시 널 따라잡을 거다……!',
      ]);
      await teio.say_and_wait([
        '자 자, ',
        t_call_a,
        ' 이야기는 그만하고, ',
        t_call_m,
        '의 다음 레이스는 『',
        takz_kin,
        '』잖아? 제대로 쉬자.',
      ]);
      await teio.say_and_wait(['어라, ', t_call_m, '? 듣고 있어?']);
      await maya.say_and_wait('……알았어.');
      await amazon.say_and_wait(['……', a_call_m, '？']);
      await maya.say_and_wait(
        '그치만, 이건 사실이 아니지…… 어떻게 이런 일이 있을 수 있어……',
      );
      await maya.say_and_wait('왜냐하면, 그럴 리가 없잖아……!');
      await amazon.say_and_wait([a_call_m, '！？']);
      await maya.say_and_wait('하아…… 하아…… 하아……');
      era.printButton(`「……마야」`, 1);
      await era.input();
      await maya.say_and_wait([callname, '。']);
      era.printButton('「뭔가 알아낸 거야?」', 1);
      await era.input();
      await maya.say_and_wait('……');
      await maya.say_and_wait('한 가지 사실을 알아냈어.');
      await maya.say_and_wait('저 태양은 무척 눈부시지만, 사실은 석양이야.');
      await maya.say_and_wait(
        '서두르지 않으면 가라앉아 버릴 거야. 아무도 닿을 수 없는 곳으로.',
      );
      await maya.say_and_wait([
        '난 아직 ',
        maya.sex,
        '와 어깨를 나란히 해보지도 못했는데……!',
      ]);
      era.printButton(`「브라이언 말이야?」`, 1);
      await era.input();
      await maya.say_and_wait(['………………', callname, '도 눈치챘구나.']);
      await maya.say_and_wait('지난 일들을 떠올려 봤어.');
      await maya.say_and_wait('──그 사람도 가슴 뛰는 기분을 느끼고 싶어 해.');
      await maya.say_and_wait([
        maya.sex,
        '는 그저 전력으로 달리고 나서, 『즐거워』라는 말을 하고 싶을 뿐이야.',
      ]);
      await maya.say_and_wait([
        '그래서 ',
        maya.sex,
        '는 계속해서 발버둥 치고 있는 거야. 언젠가 그 말을 할 수 있을 거라 믿으면서.',
      ]);
      await maya.say_and_wait(
        '──설령 몸이 반짝이고 싶은 마음을 따라가지 못하더라도, 억지로 버텨가면서 말이야.',
      );
      await maya.say_and_wait([
        '……',
        callname,
        '! 나 이렇게 포기하고 싶지 않아.',
      ]);
      await maya.say_and_wait([
        '만약 그 사람이 정말로 『',
        arim_kin,
        '』를 마지막 은퇴 레이스로 생각하고 있다면!',
      ]);
      await maya.say_and_wait([
        '나는 그날 『마야노 탑건』으로서 출주해서, ',
        maya.sex,
        '한테 이기고 ',
        maya.sex,
        '한테 자랑할 거야!',
      ]);
      await maya.say_and_wait([
        maya.sex,
        '한테 말할 거야. 『마야의 전력이 더 강하지』라고.',
      ]);
      await maya.say_and_wait('『마야가 두근거리게 했지』라고!');
      era.printButton('「바로 그 기세야!」', 1);
      await era.input();
      await maya.say_and_wait('응! 난 꼭 해낼 거야!');
      await maya.say_and_wait([
        '『',
        takz_kin,
        '』에서 강해지고, 『',
        tenn_sho,
        '』에서 더 빨라질 거야.',
      ]);
      await maya.say_and_wait(['그리고 『', arim_kin, '』에서──']);
      await maya.say_and_wait(['──', maya.sex, '를 앞지를 수 있다면……']);
      await maya.say_and_wait([
        '그때는 ',
        callname,
        '은(는) 마야만 보고 『누구보다 반짝이고 있어』라고 칭찬해 줘.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_takz_kin_s: (() => {
    const title = '타카라즈카 기념을 향해';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} takz_kin 宝塚記念（色付き名前）
     */
    const f = async (maya, amazon, brian, call_16, a_call_m, takz_kin) => {
      await era.printAndWait(['「', takz_kin, '」 당일. 그리고 이번에는──']);
      await maya.say_and_wait(['……', call_16, '은(는) 출주하지 않는다.']);
      await maya.say_and_wait('아하하☆ 최고의 기회야! 마야만 나가니까!');
      await maya.say_and_wait(
        '그러니까 안 져. ──눈앞의 일에 최선을 다할 거야.',
      );
      era.printButton('「더 성장해서 돌아와!」', 1);
      await era.input();
      await maya.say_and_wait('알겠어☆ 지시대로 금방 성장할게♪');
      era.drawLine();
      await era.printAndWait('(와아아아아아아────!!)');
      await amazon.say_and_wait('오, 왔군.');
      await brian.say_and_wait('……흥, 거절할 이유가 없었을 뿐이다.');
      await brian.say_and_wait('그래서 용건은? 이렇게 먼 곳까지 불러내다니.');
      await brian.say_and_wait('별일 아니면 앞으로는 말도 안 하겠다.');
      await amazon.say_and_wait('일단 진정해. 눈치 빠른 너라면 알아챘겠지.');
      await amazon.say_and_wait([
        '이번 『',
        takz_kin,
        '』에 『',
        a_call_m,
        '』가 나간다.',
      ]);
      await brian.say_and_wait('……그게 어쨌다는 거지.');
      await amazon.say_and_wait('흥, 관심 없는 척하지 마.');
      await amazon.say_and_wait([
        '너는 ',
        maya.sex,
        '를 갈망하고 있어. 너를 해방해 줄 무언가를.',
      ]);
      await brian.say_and_wait('……눈치채고 있었나.');
      await amazon.say_and_wait('몇 년이나 네 등을 쫓아왔으니까.');
      await amazon.say_and_wait('네가 원하는 게 뭔지는 결국 모르겠더군.');
      await amazon.say_and_wait(
        '하지만 적어도 네가 무언가를 참고 있다는 건 보였어.',
      );
      await amazon.say_and_wait('이대로는 재미없다는 것도.');
      await brian.say_and_wait('흥, 그래서 저 녀석한테 기대를 건 건가.');
      await brian.say_and_wait([
        '너는 ',
        maya.sex,
        '를 특별하게 보고 키우는 모양이더군.',
      ]);
      await amazon.say_and_wait('호오, 알고 있었나.');
      await brian.say_and_wait([
        maya.sex,
        '의 끈질기고 성가신 달리기가 누구를 닮았으니까.',
      ]);
      await amazon.say_and_wait([
        '하하, 그렇군. ',
        maya.sex,
        '는 너를 닮았어. 둘 다 욕심이 많지.',
      ]);
      await brian.say_and_wait('……흥.');
      await amazon.say_and_wait([
        '덧붙여 말해 두지. ',
        maya.sex,
        '는 아직 더 성장한다.',
      ]);
      await amazon.say_and_wait([
        '『이게 마지막이다』라며 약한 소리를 하는 너한테 ',
        maya.sex,
        '는 분명 따끔하게 한 방 먹일 거야.',
      ]);
      await amazon.say_and_wait('그걸로 정신을 차리면──');
      await amazon.say_and_wait('다음에는 내가 너를 쓰러뜨린다.');
      await brian.say_and_wait('……흥, 아마 씨도 물러졌군. 적을 도와주다니.');
      await amazon.say_and_wait('무슨 소리야. 적이 아니라 호적수잖아.');
      await brian.say_and_wait('……훗.');
    };
    f.title = title;
    return f;
  })(),
  takz_kin_win_s: (() => {
    const title = '조종석으로';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, amazon, brian, callname) => {
      await era.printAndWait('（와아아아아아────!!）');
      await brian.say_and_wait('……');
      await amazon.say_and_wait('어때?');
      await brian.say_and_wait('……별로.');
      await brian.say_and_wait('볼일 끝났으니 학원으로 돌아가겠어.');
      await amazon.say_and_wait('훈련하러 가는 거야?');
      await brian.say_and_wait('……시끄러워.');
      era.drawLine();
      await maya.say_and_wait(['하아…… 하아…… 후우. ', callname, ', 어때?']);
      await maya.say_and_wait(
        '마야, 확실히 성장했어? 내가 낼 수 있는 최고의 속도로.',
      );
      era.printButton('「확실히 성장했어!」', 1);
      await era.input();
      await maya.say_and_wait('헤헤, 다행이다♪ 역시 마야는 대단하다니까☆');
      await maya.say_and_wait(
        '다른 사람의 기류에 휩쓸리는 평범한 조종은 싫으니까♪',
      );
      await maya.say_and_wait('그럼! 다음 타깃, 록 온! 목표는──');
      era.printButton(`「『텐노상(가을)』!」`, 1);
      await era.input();
      await maya.say_and_wait('I copy☆');
      await maya.say_and_wait('좋아, 다음에도 전속전진이야♪');
    };
    f.title = title;
    return f;
  })(),
  ws_95_29: (() => {
    const title = '여름 합숙 (시니어 시즌)';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, callname) => {
      await era.printAndWait('오늘부터 「여름 합숙」이 다시 시작된다!');
      await maya.say_and_wait([
        callname,
        ', 어서 와♪ 마야와의 휴양지에 온 걸 환영해~☆',
      ]);
      await maya.say_and_wait('올해도 둘이서 화끈한 여름을 보내자☆');
      era.printButton('「모두와 함께 뜨거운 여름을 보내는 거지」', 1);
      await era.input();
      await maya.say_and_wait('에잉──! 또 그런 소릴 하고~! ');
      await maya.say_and_wait('그래도 올해는 왠지──');
      await maya.say_and_wait(
        '정말로 지금까지 중에 가장 뜨거운 여름이 될 것 같아. 히히☆',
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_32: (() => {
    const title = '여름 합숙 (시니어 시즌) 종료';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, brian, you, callname) => {
      await maya.say_and_wait('후우…… 『여름 합숙』도 드디어 오늘로 끝이네……');
      await maya.say_and_wait('헤헤…… 마야도 엔진 전개로 열심히 훈련했어……');
      await maya.say_and_wait(
        '그러니까 돌아가는 버스에서는…… 아주 잠깐…… 쉴래……',
      );
      await maya.say_and_wait('도착하면…… 일어날 거니까……');
      await maya.say_and_wait('쿨…… 쿨………');
      await era.printAndWait([
        '……그리하여 ',
        you.get_colored_name(),
        '은(는) 올해도 ',
        maya.sex,
        '를 버스에서 푹 쉬게 해 주었다.',
      ]);
      era.drawLine();
      await maya.say_and_wait('으음…… 학원에 도착했어……? 쿨……… 응. 좋아.');
      await maya.say_and_wait(
        '헤헤. 차 안에서 푹 잤어. 그러니까 추가 트레이닝도 힘낼 수 있…… 을 것 같아……',
      );
      era.printButton('「아직 졸려 보이는데」', 1);
      await era.input();
      await maya.say_and_wait('우으…… 그렇지 않아………… 응?');
      await brian.say_and_wait('후우…… 후우………… 아직이야……!');
      await brian.say_and_wait('나…… 아직 더 할 수 있어……!');
      await maya.say_and_wait(['……！ ', callname, ', 방금 그건──']);
      era.printButton(`「브라이언이야」`, 1);
      await era.input();
      await maya.say_and_wait('응…… 그렇네……');
      await maya.say_and_wait([
        '……',
        maya.sex,
        '는 정말 눈부셔. 눈이 따가울 정도로 말이야.',
      ]);
      await maya.say_and_wait('전보다 훨씬 더…… 반짝거려.');
      await maya.say_and_wait([
        '……',
        callname,
        '. 나 역시 지금부터 트레이닝하고 싶어. 괜찮지?',
      ]);
      await era.printAndWait([
        '그렇게 ',
        maya.sex,
        '는 눈을 몇 번 비비더니, 훈련장으로 달려갔다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_tenn_sho_s: (() => {
    const title = '텐노상(가을)을 향해';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} amazon ヒシアマゾン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} t_call_a トウカイテイオーのヒシアマゾンへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} a_call_m ヒシアマゾンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} tenn_sho 天皇賞（秋）（色付き名前）
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      teio,
      amazon,
      callname,
      call_3,
      t_call_a,
      t_call_m,
      a_call_m,
      tenn_sho,
      arim_kin,
    ) => {
      await era.printAndWait([
        '──드디어 「',
        tenn_sho,
        '」. 이번 레이스를 넘으면 ',
        maya.get_colored_name(),
        '은……',
      ]);
      await maya.say_and_wait(['……다녀올게! ', callname, '！']);
      await maya.say_and_wait([
        '이 레이스에서 이기고 힘을 기를 거야! 반드시…… 『',
        arim_kin,
        '』에 나갈 거야!!',
      ]);
      era.printButton('「다녀와!」', 1);
      await era.input();
      await maya.say_and_wait('응!');
      await teio.say_and_wait('아, 아아…… 미안!');
      await maya.say_and_wait(['와, ', call_3, '！？']);
      await teio.say_and_wait('정답! 맞아!');
      await teio.say_and_wait([
        t_call_m,
        '한테 전할 말이 있어! 부탁한 사람은 ',
        t_call_a,
        '！',
      ]);
      await teio.say_and_wait([
        { color: amazon.color, content: '『' },
        a_call_m,
        { color: amazon.color, content: '! 봄부터 너는 나의──』' },
        '……이하 생략~',
      ]);
      era.printButton('「그래도 되는 거야!?」', 1);
      await era.input();
      await teio.say_and_wait('괜찮아, 괜찮아! 중요한 건 마지막이야!');
      await teio.say_and_wait([
        {
          color: amazon.color,
          content:
            '『강해진 너와 달리는 게 기대되는군. 오늘부터 나는──너의 호적수다.』',
        },
      ]);
      await teio.say_and_wait([
        maya.sex,
        '는 그렇게 말했어! 나도 그 마음 알아. 나도 너랑 달리고 싶으니까!',
      ]);
      await teio.say_and_wait(['그러니까 지지 마! 이기는 건 ', t_call_m, '！']);
      await teio.say_and_wait('정점에 서서 모두가 뒤쫓게 해 줘!');
      await maya.say_and_wait('아하하, 도망치면서 다들 따라오게 하라는 거야?');
      await teio.say_and_wait([
        '어라라. ',
        t_call_m,
        '은(는) 쫓아가기만 할 줄 알아?',
      ]);
      await maya.say_and_wait(['흐흥~ 그렇지 않아☆ 그치, ', callname, '！']);
      era.printButton(`「마야는 뭐든 할 수 있어」`, 1);
      await era.input();
      await maya.say_and_wait('에헤헤! 맞아☆');
      await maya.say_and_wait(
        '흐흥. 마야가 어떻게 달리는지, 둘 다 놓치면 안 돼♪',
      );
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win_s: (() => {
    const title = '하늘로 통하는 활주로';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} b_call_l ナリタブライアンのシンボリルドルフへの呼び方
     * @param {PrintedSpan} l_call_b シンボリルドルフのナリタブライアンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (
      maya,
      teio,
      brian,
      luna,
      callname,
      t_call_m,
      b_call_l,
      l_call_b,
      arim_kin,
    ) => {
      await era.printAndWait('（와아아아아아아아────!!）');
      await maya.say_and_wait([callname, '! 마야가 1등 했어! 1등!']);
      era.printButton('「정말 노력했구나!」', 1);
      await era.input();
      await maya.say_and_wait(
        '응! 마야 엄청 노력했어! 하지만 아직 더 할 수 있어!',
      );
      await maya.say_and_wait('헤헤, 왜냐면──');
      await teio.say_and_wait([
        '오오! ',
        t_call_m,
        ' 정말 대단해! 다음은 드디어 『',
        arim_kin,
        '』이구나!',
      ]);
      await era.printAndWait('（와아아아아아아아────!!）');
      await maya.say_and_wait(
        '모두들 분명 마야가 훨씬 더 빛날 수 있을 거라 생각할 거야♪',
      );
      era.drawLine({ content: '数日後' });
      await maya.say_and_wait('후우…… 후우…… 응, 또 기록 경신이야!');
      await maya.say_and_wait(['이걸로 『', arim_kin, '』도──']);
      await maya.say_and_wait('……아.');
      await luna.say_and_wait(['……', l_call_b, ', 방금 한 말은 정말인가?']);
      await luna.say_and_wait(['『', arim_kin, '』에서──']);
      await brian.say_and_wait([
        b_call_l,
        ', 미래 이야기를 하는 건 의미가 없다.',
      ]);
      await brian.say_and_wait(
        '나는 네게 병주 연습을 도와달라고 했을 뿐이다. 내 말이 틀린가?',
      );
      await luna.say_and_wait('그…… 그건 맞지만.');
      await brian.say_and_wait('……내가 저물 시기는 내가 정한다.');
      await brian.say_and_wait('내게 할 말이 있다면 곁에서 지켜보기나 해라.');
      await brian.say_and_wait(
        '……그때가 오면 모두를 따돌리고 승리를 거머쥐는 건 나일 테니까.',
      );
      await luna.say_and_wait('어이, 잠깐!');
      await luna.say_and_wait(
        '……자기 갈 길만 고집스럽게 가겠다는 건가. 하지만──',
      );
      await luna.say_and_wait('모두가 네 뒤에만 있을 거라 생각하지 마라!');
      await maya.say_and_wait(['……', maya.sex, '가 또 반짝반짝 빛나고 있어.']);
      await maya.say_and_wait([
        '볼수록 분해. 어째서 ',
        maya.sex,
        '는 계속 저렇게 빛날 수 있는 걸까.',
      ]);
      await maya.say_and_wait(
        '그 사람은 이제── 곧 가라앉으려고 하는데 말이야.',
      );
      era.printButton('「……석양은 붉은 빛을 내뿜으니까」', 1);
      await era.input();
      await maya.say_and_wait('……어라?');
      await era.printAndWait(
        '저녁의 태양은 아침이나 낮보다 훨씬 더 붉게 타오른다.',
      );
      await era.printAndWait(
        '석양이 지기 직전, 그 찰나의 눈부신 광채는 사람들의 마음을 사로잡는 법이다.',
      );
      era.printButton('「저 빛에 지지 마」', 1);
      await era.input();
      await maya.say_and_wait('……네.');
      await maya.say_and_wait(
        '저 빛에 진다면, 평생 이기지 못할 것 같은 기분이 들어.',
      );
      await maya.say_and_wait(['전력을 다할게. 『', arim_kin, '』에서──']);
      await maya.say_and_wait('전력을 다해서…… 그 사람을 이길 거야!!');
    };
    f.title = title;
    return f;
  })(),
  ws_95_48: (() => {
    const title = '크리스마스';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (maya, you, callname, arim_kin) => {
      await era.printAndWait([
        '「',
        arim_kin,
        '」을 앞둔 어느 날, ',
        maya.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '을(를) 불러냈다.',
      ]);
      await maya.say_and_wait([callname, ', 빨리 빨리☆']);
      await maya.say_and_wait(
        '이것 봐, 여기 눈사람도 있고 저기엔 크리스마스트리도 있어♪',
      );
      era.printButton('「정말 즐거워 보이네」', 1);
      await era.input();
      await maya.say_and_wait('응♪ 오늘은 특별한 데이트 날이니까!');
      await maya.say_and_wait('오늘은…… 연인들의 크리스마스이브☆');
      era.printButton('「아직 밤은 아니거든」', 1);
      await era.input();
      await era.printAndWait('게다가 오늘은──');
      await maya.say_and_wait('히히, 알고 있다구~');
      await maya.say_and_wait(
        '오늘은 『크리스마스 당일』도 아니고, 아직 밤도 아니지만…… 그치만 말이야.',
      );
      await maya.say_and_wait('그래서 내가 『예약』해두려고 한 거야!');
      era.printButton('「예약?」', 1);
      await era.input();
      await maya.say_and_wait(
        '맞아! 원래는 크리스마스 이브에 데이트하고 싶었지만…… 그날은 이미 중요한 일정이 있잖아?',
      );
      await maya.say_and_wait(['그러니까…… ', callname, '！']);
      await maya.say_and_wait(['마야 사진 찍어줘☆ ', callname, ' 휴대폰으로!']);
      era.printButton('「내 걸로?」', 1);
      await era.input();
      await maya.say_and_wait('응! 준비됐어? 셔터 찬스 놓치면 안 돼!');
      await maya.say_and_wait('3、2、1……');
      await era.printAndWait('（찰칵）');
      await maya.say_and_wait(
        '아하하, 나 귀엽게 찍혔어~? 이 사진 소중히 간직해야 해.',
      );
      await maya.say_and_wait(
        '크리스마스 이브 밤에는 내가 그 포즈 그대로 쌤의 선물이 되어줄 거니까!',
      );
      await era.printAndWait([
        maya.sex,
        '의 말을 듣고, ',
        you.get_colored_name(),
        '은(는) 사진을 확인했다──',
      ]);
      await era.printAndWait([
        '사진 속의 ',
        maya.get_colored_name(),
        '은 환하게 웃으며 활기차게 손을 흔들고 있었다.',
      ]);
      await maya.say_and_wait([
        '헤헤☆ 나는 ',
        arim_kin,
        '에서 무조건 1등 할 거야!',
      ]);
      await maya.say_and_wait([
        '올해 『크리스마스』에는 가장 빛나는 나를 ',
        callname,
        '에게 선물할게!',
      ]);
      await maya.say_and_wait([
        '그러니까 ',
        callname,
        '은 크리스마스이브를 나한테 줘!',
      ]);
      await maya.say_and_wait(['──내 『', arim_kin, '』에 맡겨달라구!!']);
      await era.printAndWait([
        '──',
        maya.sex,
        '의 선언을 보며, ',
        you.get_colored_name(),
        '은(는) 올해의 「',
        arim_kin,
        '」을 더욱 기대하게 되었다.',
      ]);
      await era.printAndWait([
        '……사진 속의 ',
        maya.get_colored_name(),
        '은 카메라를 향해 손키스를 날리고 있었다.',
      ]);
      await maya.say_and_wait([
        '히히, 올해 크리스마스이브…… 『',
        arim_kin,
        '』 레이스 끝난 뒤의 위닝 라이브를 기대하라구.',
      ]);
      await maya.say_and_wait('내가 꼭 센터가 되어서, 쌤에게만 『쪽』 해줄게☆');
      era.printButton('「뭐!?」', 1);
      await era.input();
      await maya.say_and_wait(
        '헤헤, 걱정 마 걱정 마~☆ 다른 사람들한테는 안 들키게 할 거니까!',
      );
      await maya.say_and_wait('히히…… 제법 어른스러운 느낌이지?');
      era.printButton('「야!」', 1);
      await era.input();
      await maya.say_and_wait(
        '에이~ 어때서 그래☆ 무대 조명이 꺼진 틈을 타서 몰래 할 건데!',
      );
      await maya.say_and_wait([
        '그·러·니·까~☆ 『',
        arim_kin,
        '』 라이브에서 센터인 나한테서 절대로 시선을 떼면 안 돼♪',
      ]);
      await maya.say_and_wait([
        '아니면…… ',
        callname,
        '은 내가 무대에서 내려온 다음에 『쪽』 해주는 게 좋아~?',
      ]);
      await maya.say_and_wait('……그것도 괜찮을 것 같네. 헤헤☆');
      await era.printAndWait([
        '……그런 말을 하는 ',
        maya.get_colored_name(),
        '에게, ',
        you.get_colored_name(),
        '은(는) 안무를 마음대로 바꾸지 말라고 엄중히 주의를 주기로 했다.',
      ]);
      await era.printAndWait(['하지만 올해의 「', arim_kin, '」에서──']);
      await era.printAndWait([
        maya.get_colored_name(),
        '는 반드시 1착을 거머쥐고…… 센터에 서게 될 것이다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  before_arim_kin_s: (() => {
    const title = '아리마 기념을 향해';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} b_call_m ナリタブライアンのマヤノトップガンへの呼び方
     * @param {PrintedSpan} arim_kin 有馬記念（色付き名前）
     */
    const f = async (maya, brian, callname, call_16, b_call_m, arim_kin) => {
      await maya.say_and_wait(['『', arim_kin, '』, 또 왔어.']);
      await maya.say_and_wait([
        '에헤헤, ',
        callname,
        '. 작년보다 마야, 성장했어?',
      ]);
      era.printButton('「많이 성장했어」', 1);
      await era.input();
      await maya.say_and_wait('후후…… 그렇구나. 그렇구나, 그렇구나☆');
      await maya.say_and_wait('하지만 변하지 않은 것도 있어.');
      await maya.say_and_wait(
        '마야는 아직 더 반짝이고 싶어! 이 트윙클 시리즈에서!!',
      );
      await maya.say_and_wait([
        '그러니까 ',
        callname,
        ', 끝까지 마야를 봐 줘☆',
      ]);
      await maya.say_and_wait('누구보다 반짝이는 마야를♪');
      era.drawLine();
      await maya.say_and_wait(['아, ', call_16, '! 헬로☆']);
      await brian.say_and_wait(['……', b_call_m, '인가.']);
      await maya.say_and_wait('어☆ 마야 이름을 기억해 줬어!? 와! 기뻐!!');
      await brian.say_and_wait(
        '흥…… 이렇게 여러 번 달렸으니 외우려 하지 않아도 남는다.',
      );
      await maya.say_and_wait(
        '에헤헤, 그렇구나. 그럼 오늘은 마야랑 달리는 데 집중해 줘.',
      );
      await maya.say_and_wait('답답함도 아픔도 잊을 만큼 두근거리게 해 줄게!');
      await maya.say_and_wait('마야만 봐 줘!');
      await brian.say_and_wait('……！');
      await maya.say_and_wait('에헤헤. 마야는 이해력이 좋거든!');
      await maya.say_and_wait([
        '하지만 모르는 것도 있어. 왜냐면 ',
        call_16,
        ', 계속 반짝이고 있으니까.',
      ]);
      await maya.say_and_wait(['그러니까 마야는 ', call_16, '한테 이길 거야.']);
      await maya.say_and_wait([call_16, '보다 더 전력을 다해서 반짝일 거야.']);
      await maya.say_and_wait('그러면 분명 두근거리게 만들 수 있어!');
      await brian.say_and_wait('……흥.');
      await brian.say_and_wait('좋아. 전력을 다해 와라. 짓눌러 주마.');
      await maya.say_and_wait('흐흥☆ 그 말 그대로 돌려줄게♪');
      await maya.say_and_wait('마야는 지지 않을 테니까!');
    };
    f.title = title;
    return f;
  })(),
  arim_kin_win_s: (() => {
    const title = '파이널 어프로치';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} brian ナリタブライアン
     * @param {CharaTalk} luna シンボリルドルフ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_16 マヤノトップガンのナリタブライアンへの呼び方
     * @param {PrintedSpan} l_call_b シンボリルドルフのナリタブライアンへの呼び方
     */
    const f = async (maya, brian, luna, you, callname, call_16, l_call_b) => {
      await you.say_as_passer_by_and_wait('관중들', [
        { color: maya.color, content: '마야노! 마야노! 마야노! 마야노!' },
      ]);
      await maya.say_and_wait('…………이겼다.');
      await maya.say_and_wait(['……내가 이겼어. ', call_16, '을(를) 이겼어.']);
      await maya.say_and_wait([callname, '! 나…… 나……!']);
      era.printButton(`「마야, 너 정말 대단했어」`, 1);
      await era.input();
      await maya.say_and_wait('응…… 응……!');
      await maya.say_and_wait('마야 대단하지? 반짝반짝 빛나지?');
      era.printButton('「너는 언제나 가장 빛나고 있었어」', 1);
      await era.input();
      await maya.say_and_wait(['와아앙~~~~!! ', callname, '～！！']);
      era.drawLine();
      await brian.say_and_wait(
        '……하…… 하하, 내가 아직도 숨을 헐떡이고 있다니.',
      );
      await brian.say_and_wait(
        '완패다. 전력을 다했는데…… 졌어. 하지만…… 기분이 나쁘진 않군.',
      );
      await brian.say_and_wait('훗, 이게 바로──');
      await luna.say_and_wait(['──', call_16, '！']);
      await luna.say_and_wait('……정말로 괜찮은 건가?');
      await brian.say_and_wait('……그래, 맞다. 아직 그게 남았었지.');
      await brian.say_and_wait('──나의 『은퇴식』 말이다.');
      await luna.say_and_wait('미동도 없군…… 정말 마음이 변하지 않은 건가?');
      await luna.say_and_wait(
        '……기자들이 이미 모여 있다. 너의 은퇴식이니, 적어도 성대하게 치러주마.',
      );
      await brian.say_and_wait('……고맙군.');
      await you.say_as_passer_by_and_wait('스태프', [
        '……',
        brian.get_colored_name(),
        ' 선수, 은퇴식은 5분 뒤에 시작할 예정입니다.',
      ]);
      await brian.say_and_wait('음…… 알겠다.');
      await brian.say_and_wait(
        '──내가 발을 멈추는 곳이 경기장이라 다행이군. 학원이 아니라, 이 잔디 위라서 말이야.',
      );
      await you.say_as_passer_by_and_wait('관중A', [
        '거짓말이지!? ',
        brian.get_colored_name(),
        '! 우리에게 전설을 더 보여달라고!!',
      ]);
      await you.say_as_passer_by_and_wait('관중B', '제발, 은퇴하지 마세요!');
      await brian.say_and_wait(
        '참 나…… 뭘 그렇게 슬퍼하고 있나. 너희는 곧 다음 꿈을 보게 될 텐데.',
      );
      await brian.say_and_wait('──바로 저 아이에게서 말이다.');
      await you.say_as_passer_by_and_wait('사회자', [
        '고작 실험의 검산일 뿐인데 그렇게 기뻐하다니, ',
        brian.get_colored_name(),
        '씨의 은퇴식을 거행하겠습니다──',
      ]);
      await maya.say_and_wait('잠깐만──!');
      await maya.say_and_wait([
        '마야는 인정 못 해! ',
        call_16,
        '의 은퇴식은 중지야!!',
      ]);
      await you.say_as_passer_by_and_wait('사회자', '에엣!? 하, 하지만……');
      await maya.say_and_wait(
        '하지만이고 뭐고 없어! 마야는 싫단 말야! 그러니까 안 돼!',
      );
      await brian.say_and_wait('……어이.');
      await brian.say_and_wait('갑자기 튀어나오지 마라. 오늘의 승자잖아.');
      await brian.say_and_wait(
        '네 영향력을 좀 생각하란 말이다. 꼬맹이가 어리광을 부릴 거면 다른 데 가서──',
      );
      await maya.say_and_wait('마야는 원래 꼬맹이인걸!!');
      await maya.say_and_wait([
        '마야는 앞으로 ',
        call_16,
        '하고 많이 달려서 어른 ',
        maya.uma_sex_title,
        '가 될 거니까!',
      ]);
      await maya.say_and_wait(
        '그러니까 이런 말 해도 상관없어! 제멋대로 굴어도 돼! 마야는 아직 어린애니까!',
      );
      await maya.say_and_wait([
        '나 아직 ',
        call_16,
        '(이)랑 실컷 달리지 못했어! 나랑 다음 레이스 약속해 줘!',
      ]);
      await brian.say_and_wait('뭐…… 뭐라고!?');
      await brian.say_and_wait('그건 너무 억지잖아! 정말이지, 오늘은 나의──');
      await maya.say_and_wait('당신의 은퇴식 따위가 아니야!!');
      await brian.say_and_wait('야!!');
      await you.say_as_passer_by_and_wait('관중C', '푸흡…… 하하!');
      await you.say_as_passer_by_and_wait('관중D', [
        '맞아, 맞아! ',
        brian.get_colored_name(),
        ', 은퇴하지 마! 1등이랑 달려!',
      ]);
      await you.say_as_passer_by_and_wait('관중E', [
        '도전을 받고 도망치다니, ',
        brian.get_colored_name(),
        '이라면 그럴 리 없지!',
      ]);
      await brian.say_and_wait('어이, 어째서 너희들까지 부추기는 거냐……');
      await maya.say_and_wait([
        '아하하, 다들 ',
        call_16,
        '을(를) 아주 잘 알고 있네!',
      ]);
      await maya.say_and_wait([
        '하지만 마야가 훨씬 더 잘 아는걸. 있잖아, 오늘의 ',
        call_16,
        '──',
      ]);
      await maya.say_and_wait(
        '──마야랑 한 번 더 달리고 싶지? 마음이 더 두근거리고 싶지?',
      );
      await brian.say_and_wait('……！');
      await maya.say_and_wait([
        '헤헤. 그러니까 마야가 ',
        call_16,
        '의 소원을 들어줄게!',
      ]);
      await maya.say_and_wait(
        '반짝반짝 빛나는 사람이랑 계속 대결해야, 마야도 훨씬 더 눈부신 어른이 될 수 있으니까!',
      );
      await brian.say_and_wait('……이게 대체 뭐냐.');
      await brian.say_and_wait('자기 고집을 위해 나보고 계속 달리라는 건가.');
      await maya.say_and_wait('응!');
      await brian.say_and_wait('……못 당하겠군. 참으로 앞날이 걱정되는 아이야.');
      await maya.say_and_wait('나, 금방 어른이 될 거야☆');
      await brian.say_and_wait('그런 뜻이 아니야……');
      await luna.say_and_wait(['후훗…… 그냥 항복해라, ', l_call_b, '。']);
      await luna.say_and_wait('여기 있는 누구도 네 은퇴를 바라지 않는다.');
      await luna.say_and_wait('──너 자신조차도 말이다.');
      await luna.say_and_wait('지금이라도 다른 행사로 바꾸는 건 가능하다만.');
      await maya.say_and_wait('좋아, 그럼! 나의 도전 선언식으로 바꿔줘!');
      await brian.say_and_wait(
        '어이!? 그렇게 바꾸면 행사의 주인공이 네가 되어버리잖아──',
      );
      await maya.say_and_wait('흥, 상관없잖아! 그쵸, 회장님!');
      await luna.say_and_wait(
        '음, 좋다. 훨씬 분위기를 띄울 수 있는 행사라면 기자들도 납득하겠지.',
      );
      await maya.say_and_wait('I copy☆');
      await brian.say_and_wait('……정말 어린애로군.');
      await maya.say_and_wait(
        '아하하☆ 그러니까 더더욱, 내가 자랐을 때의 모습이 기대되는 거지? 두근거리지?',
      );
      await brian.say_and_wait('……그래.');
      await brian.say_and_wait('분할 정도로 기대되는군.');
    };
    f.title = title;
    return f;
  })(),
  sa_adv_game: (() => {
    const title = '마야의 두근두근☆담력 시험!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} t_call_m トウカイテイオーのマヤノトップガンへの呼び方
     */
    const f = async (maya, teio, you, callname, call_3, t_call_m) => {
      await era.printAndWait([
        '통금 시간이 지나 정적만이 흐르는 교내. ',
        you.get_colored_name(),
        '이(가) 트레이닝실에 두고 온 물건을 찾으러 가던 도중──',
      ]);
      await maya.say_and_wait(['앗! ', callname, '이잖아! 정말 우연이네♪']);
      era.printButton('「이런 늦은 시간에 여기서 뭐 하니?」', 1);
      await era.input();
      await maya.say_and_wait('우리 말이야~ 유령을 보러 왔어☆');
      await maya.say_and_wait(
        'TV에서 심령 프로그램을 봤는데, 우리 학원에도 괴담이 있다고 하길래──',
      );
      await teio.say_and_wait([
        '아, 아무리 생각해도 거짓말 같은데, ',
        t_call_m,
        '이(가) 도무지 믿질 않아서……',
      ]);
      era.printButton('「이미 통금 시간도 지났으니 그만 돌아가렴」', 1);
      await era.input();
      await teio.say_and_wait(
        '그, 그그그그치!? 궁금한 곳은 다 둘러봤고, 난 이제 충분해!',
      );
      await maya.say_and_wait(
        '에에~!? 딱 한 군데만 더 가보자~! 마야는 트레이닝실에 가보고 싶어!',
      );
      await maya.say_and_wait([
        '아주 옛날, 승부복이 도착하기 전날 사고로 죽은 ',
        maya.uma_sex_title,
        '가 있었는데……',
      ]);
      await maya.say_and_wait([
        maya.sex,
        '의 유령은 밤마다 트레이닝실에 나타나서, 슬프게 물어본대. 『내 승부복은 어디에……』라고!',
      ]);
      await teio.say_and_wait('히이익────!?');
      await teio.say_and_wait('와, 아…… 그, 그건 분명 지어낸 이야기일 거야!');
      await maya.say_and_wait([
        '에이, 아닐지도 모르지! ',
        callname,
        ', 우리 데려다줘~!',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 막무가내인 마야노 탑건을 이기지 못하고, 세 사람이 함께 트레이닝실로 향했다.',
      ]);
      await maya.say_and_wait('이봐요~ 유령님~! 어디 있나요~?');
      await teio.say_and_wait([
        maya.sex,
        '는 부르지 않아도 돼! 정말 나타나면 어쩌려고~!',
      ]);
      await era.printAndWait(
        '한 번도 입지 못한 승부복을 찾아 여기를 떠도는 유령이라……',
      );

      era.printButton('「그 유령도 분명 아쉬웠겠지」 (파워 +20)', 1);
      era.printButton('「마야노 탑건 일행 뒤에……」 (근성+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '그 유령은 분명 승부복을 입고 경기장을 달리고 싶었을 것이다──그렇게 이야기하고 있자, ',
        ]);
        await maya.say_and_wait([
          '그렇지. ',
          maya.sex,
          '는 분명 달리는 걸 아주 좋아했을 거야……',
        ]);
        await maya.say_and_wait([
          '만약 내가 ',
          maya.sex,
          '였다면, 분명 외롭고 분해서라도 여기로 달려왔을 거야!',
        ]);
        era.printButton('「' + maya.sex + '의 아쉬움을 달래 주고 싶네」', 1);
        await era.input();
        await maya.say_and_wait('응……');
        await maya.say_and_wait('맞다! 마야가 유령 몫까지 대신 달릴래!');
        await maya.say_and_wait(
          '레이스에 나가지 못한 유령을 위해서, 내가 엄청 많이 나가서 좋은 성적을 낼게♪',
        );
        await era.printAndWait('(덜컹덜컹)');
        await teio.say_and_wait('히익!? 창문이 갑자기 소리를 냈어!!');
        era.printButton(
          '「' + maya.sex + '에게 고맙다고 인사하는 걸지도 몰라」',
          1,
        );
        await era.input();
        await teio.say_and_wait(
          '으으으~! 싫어, 이제 그만 돌아갈래~! 혹시라도 씌여버리면 어떡해~!!',
        );
        await maya.say_and_wait('에? 유령이랑 친구가 되면 재밌을 것 같은데♪');
        await maya.say_and_wait('그치, 유령님☆');
        await maya.say_and_wait('좋아! 유령님, 마야가 힘낼게!');
        await era.printAndWait([
          maya.get_colored_name(),
          '은 마치 등 뒤에서 순풍이 부는 것처럼 경쾌하게 달려 나갔다.',
        ]);
      } else {
        await teio.say_and_wait('꺄아아아!! 귀신이야~~~~~!!');
        await teio.say_and_wait('와아아아!! 사~ 람~ 살~ 려~!!');
        era.printButton('「쫓아가자!」', 1);
        await era.input();
        await maya.say_and_wait('아, 알았어!');
        await era.printAndWait([
          '서둘러 ',
          teio.get_colored_name(),
          '를 쫓았지만 완전히 놓쳤다.',
        ]);
        await maya.say_and_wait([
          call_3,
          '、',
          maya.sex,
          ', 유령을 무서워하는구나……',
        ]);
        era.printButton('「' + maya.sex + '는 어디로 간 걸까?」', 1);
        await era.input();
        await maya.say_and_wait(
          '음…… 적어도 어둡고 무서운 곳으로는 안 갔겠지?',
        );
        await maya.say_and_wait('그럼 답은 간단해! 가자!');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          teio.get_colored_name(),
          '의 도주 경로를 파악하고 있는 ',
          maya.get_colored_name(),
          '의 뒤를 따랐다──',
        ]);
        await maya.say_and_wait(['다행이다! 찾았어, ', call_3, '！！']);
        await teio.say_and_wait('……………………');
        era.printButton('「미안, 방금 겁줘서」', 1);
        await era.input();
        await era.printAndWait([
          '왜인지 침묵을 지키는 ',
          teio.get_colored_name(),
          '를 데리고 셋이 돌아갔다.',
        ]);
        era.drawLine();
        await maya.say_and_wait(['후아~ ', callname, ', 안녕~']);
        await maya.say_and_wait('결국 어제는 유령을 못 만났네~ 재미없게.');
        await teio.say_and_wait(
          '안 만난 게 다행이지! 정말이지, 내가 얼마나 걱정했다고!?',
        );
        await teio.say_and_wait(
          '너 계속 방에도 안 돌아오고, 핸드폰도 안 받았잖아!',
        );
        await maya.say_and_wait([
          '에? ',
          call_3,
          ', 너 우리랑 같이 돌아왔잖아, 그치?',
        ]);
        await teio.say_and_wait('에? 나 혼자 돌아왔는데.');
        await maya.say_and_wait([
          '……그럼 어제 우리 곁에 있었던 ',
          call_3,
          ' 는──',
        ]);
        await you.say_as_passer_by_and_wait('2명', '에~~~~~!?');
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_star_wish: (() => {
    const title = '별에 소원을';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} sunday マーベラスサンデー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_55 マヤノトップガンのマーベラスサンデーへの呼び方
     */
    const f = async (maya, sunday, you, callname, call_55) => {
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) 함께 돌아가던 길에, ',
        maya.sex,
        '가 가고 싶은 곳이 있다고 해서 이곳에 왔다……',
      ]);
      era.printButton('「교실에 뭐 두고 온 거라도 있니?」', 1);
      await era.input();
      await maya.say_and_wait([
        '아니! 있지 있지, 내가 오늘 ',
        call_55,
        '한테서 엄청난 소문을 들었어~!',
      ]);
      await sunday.used_to_say_and_wait(
        '별이 빛나는 밤, 옥상에서 가슴이 두근거리는 두 사람은 행복해질 수 있대',
      );
      await maya.say_and_wait('꺄☆ 너무 낭만적이고 멋지다!');
      await maya.say_and_wait('그치? 그치? 분명 재밌을 거야, 같이 가자!');
      era.printButton('「정말 못 말리겠구나」', 1);
      await era.input();
      await maya.say_and_wait(['신난다! 이제 ', callname, '(이)랑…… 헤헤!']);
      await maya.say_and_wait(
        '아, 맞다! 가는 도중에 누군가에게 들키면 실패야!',
      );
      await maya.say_and_wait('You copy？');
      era.printButton('「I copy！」', 1);
      await era.input();
      await maya.say_and_wait('좋아! 그럼, 스텔스 모드 가동…… 이륙☆');
      await maya.say_and_wait(
        '──대장기, 각 부대에 알림! 적기 그림자 없음…… 이상!',
      );
      await maya.say_and_wait(
        '헤헤! 이대로라면 『슈우웅~!』 하고 옥상까지 갈 수 있겠어……',
      );
      await era.printAndWait('(타다닥…… 타다닥……!)');
      await maya.say_and_wait(['……！！ ', callname, ', 방금 저건……']);
      era.printButton('「발소리야」', 1);
      await era.input();
      await maya.say_and_wait(
        '게다가…… 이쪽으로 오고 있지 않아!? 어, 어떡하지!',
      );
      era.printButton('「숨어서 상대가 가기를 기다리자」 (지능 +20)', 1);
      era.printButton('「옥상으로 대시하자!」 (스피드 +20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('아, 알았어! 그럼 저기 있는 교실로──');
        await era.printAndWait('(……뚜벅뚜벅…… 뚜벅……)');
        await maya.say_and_wait(
          '……헤헤, 꼭 숨바꼭질하는 것 같아서 스릴 넘치기 시작했어♪',
        );
        era.printButton('「조금만 조용히 해!」', 1);
        await era.input();
        await maya.say_and_wait('아와와! 안 돼 안 돼! 조용히 해야지, 쉿……');
        await maya.say_and_wait(
          ['후후…… ', callname, '은(는) 속눈썹이 살짝 말려 있어서 참 귀엽네♪'],
          true,
        );
        await maya.say_and_wait('게다가 평소보다 훨씬…… 멋있어……', true);
        await maya.say_and_wait('……후와…… 하와와.', true);
        era.printButton('「마야?」', 1);
        await era.input();
        await maya.say_and_wait('……아~~ 이제 한계야────!!');
        await sunday.say_and_wait([
          '와☆ 깜짝이야! ',
          maya.get_colored_name(),
          '도 교실에 뭐 두고 왔어??',
        ]);
        await maya.say_and_wait(['머, 뭐야? ', call_55, '！？']);
        era.printButton('「들켜버렸네」', 1);
        await era.input();
        await maya.say_and_wait(
          '아────!! 맞다! 너무 긴장해서 깜빡 잊어버렸어~~!',
        );
        await sunday.say_and_wait(
          '그렇구나! 그 마법을 써보려고 했던 거야?? 하지만 하지만……',
        );
        await sunday.say_and_wait(
          '마음이 두근거렸다면 이미 아름다운 거잖아☆ 그치★',
        );
        await maya.say_and_wait(
          '으음………… 아마 확실히 그럴지도. 마법 같은 건 안 써도……',
        );
        era.printButton('「무슨 소리니?」', 1);
        await era.input();
        await maya.say_and_wait(
          '아와와!! 아무것도 아냐, 아무 일도 없었어! 어차피 실패했으니까 빨리 돌아가자!!',
        );
        await era.printAndWait([
          '마야노 탑건의 재촉에 ',
          you.get_colored_name(),
          '은(는) 마법의 진짜 의미를 모른 채 돌아갔다……',
        ]);
      } else {
        await maya.say_and_wait(
          '그렇구나! 그냥 안 들키게 뛰어서 도망치면 되겠네!',
        );
        await maya.say_and_wait(['그럼 ', callname, '! 손 내밀어 봐.']);
        era.printButton('「응?」', 1);
        await era.input();
        await maya.say_and_wait(
          '마야가 훨씬 빠르니까 그렇지! 자자, 어서, 빨리빨리!',
        );
        await era.printAndWait([
          '점점 다가오는 발소리에 쫓기듯, ',
          maya.get_colored_name(),
          '은 ',
          you.get_colored_name(),
          '의 손을 꽉 잡았다──',
        ]);
        await maya.say_and_wait([callname, ', 힘내 힘내! 조금만 더──!']);
        await maya.say_and_wait(['도착!! 해냈어, ', callname, '！']);
        era.printButton('「다, 다행이다……」', 1);
        await era.input();
        await maya.say_and_wait('마지막은 여기서 별을 구경하고……');
        await maya.say_and_wait(['와……! ', callname, ', 하늘 봐! 하늘!!']);
        await maya.say_and_wait(
          '대단해, 완전 대단해! 밤하늘이 원래 이렇게 눈부셨나!?',
        );
        era.printButton('「우리의 노력이 보상을 받은 거야!」', 1);
        await era.input();
        await maya.say_and_wait(
          '그렇구나…… 맞아! 별이 이렇게 예쁜 건, 우리가 열심히 노력했기 때문일 거야!',
        );
        await maya.say_and_wait('……좋아! 그럼 이제 슬슬 돌아가자!');
        era.printButton('「벌써 돌아가게?」', 1);
        await era.input();
        await era.printAndWait(
          '소문에 따르면 「별이 빛나는 밤 옥상에서 가슴이 두근거려야」 한다고 했는데……',
        );
        await maya.say_and_wait('응! 돌아갈래! 마야는 방금 알았거든.');
        await maya.say_and_wait('굳이 아무것도 안 해도, 우리들은……');
        await maya.say_and_wait(
          '아, 아무튼! 그렇게 된 거야! 그러니까 얼른 가자, 응?',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 부끄러워하는 ',
          maya.get_colored_name(),
          '을 미소 지으며 바라보고…… 별이 가득한 하늘 아래 함께 돌아갔다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sa_sweet_present: (() => {
    const title = '당신에게 전하는 달콤한 마음♪';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} hishi ヒシアケボノ
     * @param {CharaTalk} flower ニシノフラワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_28 マヤノトップガンのヒシアケボノへの呼び方
     * @param {PrintedSpan} call_51 マヤノトップガンのニシノフラワーへの呼び方
     */
    const f = async (maya, hishi, flower, you, callname, call_28, call_51) => {
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 식당 앞을 지나던 중──',
      ]);
      await maya.say_and_wait(
        '오늘은 과자 만들기를 열심히 할 거야~♪ 두 분 다 잘 부탁드려요!',
      );
      await flower.say_and_wait(
        '네……♪ 지도 선생님으로서 저도 최선을 다할게요.',
      );
      await hishi.say_and_wait(
        '나도 과자 만드는 건 자신 있어~ 크고 맛있는 과자를 만들어 보자~♪',
      );
      era.printButton('「식당에서 과자를 만드는 거니?」', 1);
      await era.input();
      await maya.say_and_wait(['앗, ', callname, '이다~!']);
      await maya.say_and_wait([
        '있지, ',
        callname,
        '이(가) 늘 가르쳐 주는 게 고마워서 과자를 만들려고!',
      ]);
      await maya.say_and_wait([
        '주방 아주머니께 말씀드렸더니 ',
        maya.sex,
        '한테 여기 주방을 써도 된다고 하셨어♪',
      ]);
      await maya.say_and_wait([
        '맛있는 케이크를 만들면, ',
        callname,
        '의 마음도──',
      ]);
      era.printButton('「내 마음도?」', 1);
      await era.input();
      await maya.say_and_wait([
        '아, 아무것도 아냐! 괜찮다면 마야가 만드는 거 지켜봐 줘, ',
        callname,
        '♪',
      ]);
      await flower.say_and_wait('그다음에 백설탕을 넣고 잘 저어주면……');
      await maya.say_and_wait('으응~♪');
      await era.printAndWait([
        maya.get_colored_name(),
        '은 익숙하지 않은 요리에 고전하고 있었으나, 무척 즐거워 보였다.',
      ]);
      era.printButton(`「힘내, 마야!」 (스태미나+20)`, 1);
      era.printButton('「나도 한번 만들어 볼까」 (지능 +20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          maya.sex,
          '가 열심히 하는 모습을 보고 ',
          you.get_colored_name(),
          '은(는) 저도 모르게 말을 걸었다.',
        ]);
        await era.printAndWait(
          '──동시에, 배가 너무 고픈 나머지 꼬르륵 소리가 크게 울려 퍼졌다.',
        );
        await hishi.say_and_wait('아하하♪ 금방 다 되니까 조금만 더 기다려 줘~');
        await flower.say_and_wait(
          '저기, 틈틈이 만들어 둔 마시멜로가 있는데요…… 하나 드실래요?',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          flower.get_colored_name(),
          '와 ',
          hishi.get_colored_name(),
          '의 마시멜로를 감사히 받았다.',
        ]);
        era.printButton('「정말 맛있어! 내가 딱 좋아하는 맛이야!」', 1);
        await era.input();
        await flower.say_and_wait('정, 정말요? 다행이다…… 입에 맞으셔서.');
        await maya.say_and_wait('흥!!');
        await maya.say_and_wait(
          '맛있어…… 좋아하는 맛…… 그거, 마야가 듣고 싶은 말이야!',
          true,
        );
        await maya.say_and_wait('이렇게 된 이상……', true);
        await maya.say_and_wait([
          call_51,
          '、',
          call_28,
          '! 마야, 이제 혼자서 케이크 만들래!',
        ]);
        await hishi.say_and_wait('에? 혼자서 괜찮겠어~?');
        await maya.say_and_wait([
          '완전 괜찮아! ',
          callname,
          '의 취향을 제일 잘 아는 건 마야란 말이야!',
        ]);
        await maya.say_and_wait(
          [
            maya.couple_title,
            '한테 이기기 위해 마야 혼자 더 대단한 걸 만들 거야!',
          ],
          true,
        );
        await maya.say_and_wait('으, 으으으으~');
        await era.printAndWait([
          maya.get_colored_name(),
          '의 케이크가 완성되긴 했으나, 색깔과 모양이 참으로 형언하기 어려웠다……',
        ]);
        await maya.say_and_wait([
          '맛은 분명 마음에 쏙 들 거야! ',
          callname,
          '이(가) 좋아하는 음식들을 참고했거든!',
        ]);
        await maya.say_and_wait(
          '마야의 사랑도 듬뿍 담았는데…… 안 먹어줄 거야?',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 각오를 다지고, ',
          maya.get_colored_name(),
          '이 만든 케이크를 입에 넣었다──',
        ]);
        era.printButton('「마, 맛있어!」', 1);
        await era.input();
        await maya.say_and_wait('정말!?');
        await maya.say_and_wait([
          '정말 맛있어!? ',
          callname,
          '이(가) 좋아하는 맛이야!?',
        ]);
        era.printButton(`「응, 마야는 대단하네!」`, 1);
        await era.input();
        await maya.say_and_wait('와아~♪ 최고야, 정말 최고야~~~~~!!');
        await era.printAndWait([
          '자신의 요리를 칭찬받은 ',
          maya.get_colored_name(),
          '은 그 뒤로 내내 기분이 좋아 싱글벙글 웃으며 훈련을 마쳤다.',
        ]);
      } else {
        await era.printAndWait([
          maya.couple_title,
          '이 요리하는 모습을 보고 ',
          you.get_colored_name(),
          ' 자신도 한번 요리를 해보고 싶어졌다. ',
          you.get_colored_name(),
          '이(가) 그렇게 말하자──',
        ]);
        await flower.say_and_wait(
          '앗, 관심 있으시면 같이 만들어 보실래요? 제가 순서를 알려드릴게요……!',
        );
        await maya.say_and_wait([
          '잠깐잠깐! ',
          callname,
          '은(는) 마야가 요리하는 걸 지켜보는 담당이야~!',
        ]);
        era.printButton('「나도 너에게 고마운 마음을 전하고 싶어서 그래」', 1);
        await era.input();
        await maya.say_and_wait([callname, '……！']);
        await maya.say_and_wait('라져☆ 그렇다면 대환영이야♪');
        await hishi.say_and_wait(
          '다 같이 사이좋게 요리하기~ 그러면 과자가 더 맛있어지는 법이지♪',
        );
        await era.printAndWait(
          '우여곡절 끝에 케이크가 완성되었으나, 겉이 조금 타버리고 말았다……',
        );
        await maya.say_and_wait([
          '와아~! ',
          callname,
          '이(가) 나한테 케이크를 줬어~♪',
        ]);
        await maya.say_and_wait('먹어볼래 먹어볼래…… 냠!');
        await maya.say_and_wait(
          '조, 조금 쓰긴 하지만, 이게 바로 어른의 맛이라는 거겠지♪',
        );
        era.printButton('「그냥 탄 거야! 억지로 안 먹어도 돼!」', 1);
        await era.input();
        await maya.say_and_wait('싫어~!');
        await maya.say_and_wait([
          '마야는 ',
          callname,
          '의 마음을 다 먹어치울 거야!',
        ]);
        await maya.say_and_wait([
          '그러니까 ',
          callname,
          '도 마야가 만든 케이크 먹어봐.',
        ]);
        await maya.say_and_wait('아~ 해봐♪');
        await maya.say_and_wait('헤헤~! 마야의 고마운 마음이 전해졌어?');
        era.printButton('「당연하지!」', 1);
        await era.input();
        await maya.say_and_wait('신난다~♪');
        await flower.say_and_wait(
          '이, 이렇게나 가깝다니…… 옆에서 보는 것만으로도 가슴이 두근거려요!',
        );
        await hishi.say_and_wait('좋아 좋아. 경사로세, 경사야~♪');
        await era.printAndWait([
          '친구 둘의 도움으로 ',
          maya.get_colored_name(),
          '의 과자 만들기는 대성공이었다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_dokidoki_live: (() => {
    const title = '마야의 두근두근☆방송!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} sunday マーベラスサンデー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
     * @param {PrintedSpan} call_55 マヤノトップガンのマーベラスサンデーへの呼び方
     */
    const f = async (maya, sunday, you, callname, call_3, call_55) => {
      await era.printAndWait([
        you.get_colored_name(),
        '과(와) 함께 외출하고 돌아오는 길──',
      ]);
      await maya.say_and_wait(['있지, 있지! ', callname, ', 인터넷 방송 봐?']);
      era.printButton('「갑자기 왜 물어봐?」', 1);
      await era.input();
      await maya.say_and_wait('있잖아, 마야도 방송 시작했어!');
      await maya.say_and_wait([
        '요즘 유행하는 춤을 추기도 하고, ',
        call_3,
        '(이)랑 같이 게임도 하고~',
      ]);
      await maya.say_and_wait('즐거운 일을 잔뜩 할 거야!');
      await maya.say_and_wait([callname, '도 봐주면 안 돼? 응? 응?']);
      era.printButton('「알았어」', 1);
      await era.input();
      await era.printAndWait([
        maya.get_colored_name(),
        '의 열렬한 부탁에, ',
        you.get_colored_name(),
        '은(는) 다음 방송을 보기로 약속했다.',
      ]);
      era.drawLine({ content: '数日後' });
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        maya.get_colored_name(),
        '의 방송 채널을 켰다──',
      ]);
      await maya.say_and_wait('모두의 마음속에 착륙☆ 마야 채널 시작할게~♪');
      await maya.say_and_wait(['오늘의 게스트는 내 친구, ', call_55, '！']);
      await sunday.say_and_wait('헬로☆ 다들 마블러스한 하루 보내고 있어?');
      await you.say_as_passer_by_and_wait('시청자A', '마야, 기다리고 있었어!!');
      await you.say_as_passer_by_and_wait(
        '시청자B',
        '잘은 모르겠지만 마블러스☆하네!',
      );
      await maya.say_and_wait(
        '다들 댓글 고마워~! 마야도 다들 기다리고 있었어♪',
      );
      await sunday.say_and_wait('오늘은 둘이서 마블러스한 곳에 돌격☆');
      await maya.say_and_wait('간다~! 커피컵으로 초고속 회전 챌린지!');
      await sunday.say_and_wait('아하하하하~☆ 뱅글뱅글 돌아서 마블러스★');
      await maya.say_and_wait([
        '다음은 게임 센터! ',
        call_3,
        '의 점수를 넘어버릴 거야!',
      ]);
      await sunday.say_and_wait('예이☆ 엄청난 최고 점수, 마블러스★');
      await era.printAndWait(
        '그 후 두 사람은 여러 명소를 돌아다니며 활기차게 노는 모습으로 시청자들에게 즐거움을 선사했다.',
      );
      await era.printAndWait('태양 같은 밝음. 사람을 끌어당기는 매력──');
      await era.printAndWait([
        '방송을 보며, ',
        you.get_colored_name(),
        '은(는) ',
        maya.get_colored_name(),
        '의 매력을 다시금 깨달은 듯했다.',
      ]);
      await maya.say_and_wait(
        '아, 슬슬 작별 인사를 할 시간이야. 다들 즐거웠어?',
      );
      await era.printAndWait([
        maya.get_colored_name(),
        '이 던진 질문에, ',
        you.get_colored_name(),
        '은(는) 정신을 차려보니 이미 댓글을 보내고 있었다.',
      ]);
      era.printButton('「나도 아주 즐거웠어!」 (스태미나 & 파워 +10)', 1);
      era.printButton('「계속 응원할게. 레이스 힘내!」 (근성 +20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('헤헤, 고마워!');
        await maya.say_and_wait('설렘과 두근거림이 화면 너머까지 전해졌구나♪');
        await maya.say_and_wait('모두의 댓글을 받아서 마야도 정말정말 기뻐☆');
        await era.printAndWait([
          '웃으며 말하는 ',
          maya.get_colored_name(),
          '은 매우 눈부시게 빛나고 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 결심했다──앞으로도 이 미소를 보기 위해 ',
          you.get_colored_name(),
          '은(는) 계속 ',
          maya.sex,
          '의 편이 되어 주기로.',
        ]);
      } else {
        await maya.say_and_wait([
          '당연하지! 마야는 그냥 귀엽기만 한 ',
          maya.phy_sex_title,
          '이 아니니까♪',
        ]);
        await maya.say_and_wait([
          '레이스에서도 성숙한 ',
          maya.phy_sex_title,
          '의 여러 가지 모습을 보여줄게!',
        ]);
        await maya.say_and_wait(
          '그·러·니·까☆ 레이스도 방송도 전부 응원해줘야 해♪',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 레이스 우마무스메로서 ',
          maya.get_colored_name(),
          '이 가진 매력을 충분히 알고 있었다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 방송으로만 ',
          maya.sex,
          '를 알게 된 시청자들도 ',
          maya.sex,
          '가 레이스에서 빛나는 모습을 봐 주길 바랐다.',
        ]);
      }
      era.drawLine();
      await maya.say_and_wait(['와~! ', callname, ', 어제 방송 봤어?']);
      era.printButton('「댓글도 달았는걸」', 1);
      await era.input();
      await maya.say_and_wait('에엣~!? 설마 이 사람이야~!?');
      await era.printAndWait([
        maya.get_colored_name(),
        '이 가리키고 있는 댓글은 확실히 ',
        you.get_colored_name(),
        '이(가) 남긴 것이었다.',
      ]);
      await maya.say_and_wait('있지, 마야가 맞혔지?');
      era.printButton('「대단해! 그걸 알아봤네」', 1);
      await era.input();
      await maya.say_and_wait([
        '이 댓글, ',
        callname,
        '이(가) 옆에 있을 때랑 똑같이 마음이 편안하고 따뜻해지는 느낌이었거든!',
      ]);
      await maya.say_and_wait(
        '그나저나 우리 계속 같이 있는데, 그냥 직접 말해줘도 됐을 텐데~♪',
      );
      await era.printAndWait([
        '말은 그렇게 하면서도, ',
        maya.get_colored_name(),
        '은 기쁜 표정을 지었다.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_excited_live: (() => {
    const title = '마야의 룰루랄라☆방송!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        maya.get_colored_name(),
        '과 외출하고 돌아오는 길──',
      ]);
      await maya.say_and_wait([
        '맞다, ',
        callname,
        '! 저번에 인터넷 방송 얘기했었지?',
      ]);
      await maya.say_and_wait(
        '그 뒤로 시청자가 점점 늘어서, 마야 채널 지금 인기 폭발이야♪',
      );
      await era.printAndWait('스마트폰으로 방송 다시보기를 확인하자, 확실히──');
      await you.say_as_passer_by_and_wait(
        '시청자A',
        '마야는 언제 봐도 귀여워!!',
      );
      await you.say_as_passer_by_and_wait('시청자B', '마야가 제일 좋아☆');
      await era.printAndWait('열정적인 댓글들이 가득 보였다.');
      await maya.say_and_wait('그치? 마야의 인기는 수직 상승 중☆');
      await maya.say_and_wait(
        '그래서 말인데! 마야는 다음 방송에서 평소랑 다른 모습을 보여주고 싶어!',
      );
      await maya.say_and_wait([
        '……근데 뭘 하면 좋을까~? ',
        callname,
        ', 뭐 좋은 아이디어 없어?',
      ]);
      era.printButton('「연습하는 모습을 보여주는 건 어때?」', 1);
      await era.input();
      await maya.say_and_wait([
        '바로 그거야! 역시 ',
        callname,
        '은(는) 머리 회전이 빠르다니까!',
      ]);
      await maya.say_and_wait(
        '마야의 진지한 모습을 보면, 다들 분명 마야를 더 좋아하게 될 거야!',
      );
      await maya.say_and_wait([
        '그·러·니·까☆ 아이디어를 낸 ',
        callname,
        '이(가) 촬영해줄 수 있을까~?',
      ]);
      await maya.say_and_wait(
        '방송 인기가 많아지면 레이스에서의 활약도 주목받을 수 있을 테니까~',
      );

      era.printButton('「알았어. 노래하는 모습을 찍자!」 (스피드 +20)', 1);
      era.printButton('「알았어. 달리는 모습을 찍자!」 (근성 +20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('응! 바로 스테이지로 이륙☆');
        era.drawLine();
        await maya.say_and_wait('모두의 마음속에 착륙☆ 마야 채널 시작할게~♪');
        await you.say_as_passer_by_and_wait('시청자C', '오오오오오오오오!!');
        await you.say_as_passer_by_and_wait(
          '시청자D',
          '마야 오늘도 기운차네~☆',
        );
        await you.say_as_passer_by_and_wait('시청자E', '여긴 어디야~?');
        await maya.say_and_wait('헤헤♪ 다들 댓글 고마워!');
        await maya.say_and_wait(
          '오늘은 말이야, 라이브 연습하는 모습을 보여줄게!',
        );
        await maya.say_and_wait([
          '촬영을 맡아 줄 사람은 이분! 마야의 든든한 파트너, ',
          callname,
          '！',
        ]);
        await maya.say_and_wait([
          you.sex,
          ', 트레이닝도 도와주고 마야를 칭찬해 주기도 해♪',
        ]);
        await you.say_as_passer_by_and_wait('시청자F', '라이브 기대된다~');
        await you.say_as_passer_by_and_wait(
          '시청자G',
          '나도 트레이너 하고 싶어!!',
        );
        await you.say_as_passer_by_and_wait('시청자H', '진짜 부럽다.');
        await maya.say_and_wait(
          '어머, 다들 정말~♪ 그럼 마야의 라이브 시작한다!',
        );
        await maya.say_and_wait('いち、に☆キラ、キラ☆ヘビー☆セクシー☆');
        await maya.say_and_wait('마지막은 귀엽게 착지!');
        await you.say_as_passer_by_and_wait('시청자I', '너~무~ 귀~여~워~!!');
        await you.say_as_passer_by_and_wait(
          '시청자J',
          '노래랑 춤 전부 최고야!',
        );
        await maya.say_and_wait('역시 꽤…… 괜찮지?♪');
        await maya.say_and_wait(
          '마야가 레이스에서 우승하면, 위닝 라이브에서 진짜 마야를 보여줄게☆',
        );
        await maya.say_and_wait('그러니까 다들 응원해줘야 해!');
      } else {
        await maya.say_and_wait('응! 바로 운동장으로 이륙☆');
        era.drawLine();
        await maya.say_and_wait('모두의 마음속에 착륙☆ 마야 채널 시작할게~♪');
        await you.say_as_passer_by_and_wait('시청자C', '야후우우우우!!');
        await you.say_as_passer_by_and_wait('시청자D', '착륙 확인☆');
        await you.say_as_passer_by_and_wait('시청자E', '설마 체육복!?');
        await maya.say_and_wait('헤헤~♪ 다들 댓글 고마워!');
        await maya.say_and_wait('오늘은 말이야, 마야의 훈련 모습을 보여줄게!');
        await maya.say_and_wait([
          '촬영을 맡아 줄 사람은 이분! 마야의 든든한 파트너, ',
          callname,
          '！',
        ]);
        await maya.say_and_wait([
          you.sex,
          ', 트레이닝도 도와주고 마야를 칭찬해 주기도 해♪',
        ]);
        await you.say_as_passer_by_and_wait('시청자F', '트레이닝 힘내~');
        await you.say_as_passer_by_and_wait('시청자G', '나도 마야 편이야!');
        await you.say_as_passer_by_and_wait(
          '시청자H',
          '트레이너, 나랑 교대해 줘. 응?',
        );
        await maya.say_and_wait('어머, 다들 정말~♪ 그럼 트레이닝 시작할게!');
        await maya.say_and_wait('후우…… 후우……!');
        await maya.say_and_wait('골인! 다들, 마야 달리는 거 어땠어?');
        await you.say_as_passer_by_and_wait('시청자I', '엄청 빨라!');
        await you.say_as_passer_by_and_wait('시청자J', '진심으로 멋져!');
        await maya.say_and_wait('역시 꽤…… 괜찮지?♪');
        await maya.say_and_wait(
          '이왕 이렇게 된 거, 오늘은 마야의 멋진 모습을 실컷 보여줄게!',
        );
        await maya.say_and_wait('다들 눈 감으면 안 돼♪');
        await era.printAndWait([
          '본인도 의욕이 넘치기에, ',
          you.get_colored_name(),
          '은(는) 기회라고 생각해 ',
          maya.sex,
          '한테 평소의 두 배만큼 트레이닝을 시켰다.',
        ]);
      }
      era.drawLine({ content: '翌日' });
      await maya.say_and_wait('와~! 시청자가 또 늘었어♪');
      await maya.say_and_wait('댓글 수도 지금까지 중에 제일 많아!');
      era.printButton(`「잘됐네, 마야!」`, 1);
      await era.input();
      await maya.say_and_wait([
        '응♪ ',
        callname,
        '도 싱글벙글하니까 마야도 기뻐♪',
      ]);
      await maya.say_and_wait('좋아! 이대로 더 인기인이 될 거야!');
      await era.printAndWait([
        '인기가 점점 치솟는 ',
        maya.get_colored_name(),
        '은 더욱 방송에 몰두하게 되었다.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_kirakira_kessin: (() => {
    const title = '마야의 반짝반짝☆결심!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '방송을 시작한 ',
        maya.get_colored_name(),
        '은 타고난 매력으로 유명 방송인이 되었다.',
      ]);
      await era.printAndWait([
        '하지만 어째서인지 ',
        maya.sex,
        '는 더 이상 방송을 하지 않게 되었다. 오늘도 이렇게 하루 종일 외출만 하고──',
      ]);
      era.printButton('「……이제 방송 안 하니?」', 1);
      await era.input();
      await maya.say_and_wait(
        '그건…… 이제 질렸어! 밖에서 노는 게 더 재밌는걸!',
      );
      await maya.say_and_wait(
        '다들 칭찬해 주는 건 기쁘지만, 이제 충분하다고 생각해!',
      );
      era.printButton('「그렇게 즐겁게 방송했으면서」', 1);
      await era.input();
      await maya.say_and_wait('지, 진짜라니까! 이제 방송 얘기는 그만해!');
      await maya.say_and_wait(
        '마야는 오늘 발매되는 잡지 사러 가야 하니까, 이만 갈게!',
      );
      await era.printAndWait([
        maya.get_colored_name(),
        '은 이야기를 끝내고 돌아보지 않은 채 떠났다.',
      ]);
      era.printButton('「그래도 역시 신경 쓰이는데……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        maya.sex,
        '의 방송 다시보기를 열어 무슨 단서가 없는지 찾아보았다──',
      ]);
      era.printButton('「나를 비난하는 댓글이 늘었네……」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 예전에 ',
        maya.sex,
        '의 촬영을 도와준 적이 있었는데, 그때 이후로 ',
        you.get_colored_name(),
        '을(를) 질투하는 댓글이 점점 늘어나고 있었다.',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        '은 그걸 보고 풀이 죽은 건지도 모른다.',
      ]);
      era.printButton(`「마야랑 얘기를 좀 해봐야겠어……」`, 1);
      await era.input();
      await era.printAndWait([
        maya.sex,
        '가 있을 만한 곳이 너무 많았지만, ',
        you.get_colored_name(),
        '은(는) 하나씩 찾아보기로 했다.',
      ]);
      await maya.say_and_wait(['와앗, ', callname, '！？']);
      era.printButton('「겨우 찾았네……!」', 1);
      await era.input();
      await maya.say_and_wait('설마…… 계속 마야를 찾아다닌 거야?');
      era.printButton('「네가 방송을 그만둔 이유를 알았거든」', 1);
      await era.input();
      await maya.say_and_wait(
        '그, 그 얘기는 이제 안 해도 된다니까. 이유는 아까 말한 대로……',
      );
      era.printButton('「나를 배려해 줘서 고마워」（스피드&스태미나+10）', 1);
      era.printButton('「비난 댓글은 전혀 신경 쓰지 않아」（파워+20）', 2);
      era.printButton('「방송을 포기하는 건 너무 아까워」（지능+20）', 3);
      const ret = await era.input();
      switch (ret) {
        case 1:
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            maya.sex,
            '한테 ',
            you.get_colored_name(),
            '을(를) 비난하는 댓글을 봤다고 말하고, ',
            maya.sex,
            '의 다정함에 감사를 전했다──',
          ]);
          await maya.say_and_wait(
            '벼, 별로 배려 같은 거 아냐! 마야는 정말로 질린 거라구!',
          );
          await maya.say_and_wait(
            '방송을 그만두고 나니까, 마야가 진짜 빛날 곳은 역시 경기장이라는 걸 깨달았을 뿐이야!',
          );
          await maya.say_and_wait([
            '앞으로도 마야는 ',
            callname,
            ' 곁에서 수많은 레이스에 나가고, 좋은 성적을 거둬서──',
          ]);
          await maya.say_and_wait(
            '지금보다 훨씬 더 많은 사람을 마야한테 홀딱 반하게 만들 거야~!',
          );
          era.printButton(`「마야……」`, 1);
          await era.input();
          await maya.say_and_wait('저, 정말~! 그런 표정 짓지 마!');
          await maya.say_and_wait([
            callname,
            '하고 함께라면 뭘 해도 즐거운걸!',
          ]);
          await era.printAndWait([
            maya.get_colored_name(),
            '의 말을 듣고 ',
            you.get_colored_name(),
            '은(는) 조용히 고개를 끄덕였다.',
          ]);
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 깨달았다. ',
            maya.sex,
            '가 ',
            you.get_colored_name(),
            '을(를) 위해 한 다정한 거짓말을 굳이 들춰낼 필요는 없다.',
          ]);
          await era.printAndWait([
            '그 대신 ',
            you.get_colored_name(),
            '은(는) 트레이너로서 ',
            maya.sex,
            '의 소원을 이루어 주고 ',
            maya.sex,
            '를 반짝이게 해 줄 것이다──',
          ]);
          era.printButton('「내가 반드시 너를 행복하게 해 줄게!」', 1);
          await era.input();
          await maya.say_and_wait('엣!?');
          await maya.say_and_wait([callname, '! 방금 그 말은……!?']);
          era.printButton(
            '「너를 누구보다 빛나는 ' +
              maya.uma_sex_title +
              '로 만들어 줄게!」',
            1,
          );
          await era.input();
          await maya.say_and_wait('아…… 뭐야, 그런 뜻이었구나.');
          await maya.say_and_wait('그럼 마야도 맹세할래!');
          await maya.say_and_wait([
            '마야는 반드시 별보다 더 빛나는 최고의 ',
            era.get('cflag:24:性别') === 1 ? '신사' : '숙녀',
            '가 될 거야!',
          ]);
          await maya.say_and_wait(['──', callname, '하고 함께☆']);
          break;
        case 2:
          await era.printAndWait([
            '그러니 예전처럼 계속 방송을 해줬으면 좋겠다고 ',
            you.get_colored_name(),
            '이(가) ',
            maya.sex,
            '에게 말하자──',
          ]);
          await maya.say_and_wait('마야는 신경 쓰인단 말이야!');
          await maya.say_and_wait([
            '너무 화나고 분해! ',
            callname,
            '은(는) 항상 이렇게나 노력하고 있는데!',
          ]);
          await maya.say_and_wait([
            '훈련할 때도 촬영할 때도 ',
            callname,
            '이(가) 항상 마야를 도와줬는데──',
          ]);
          await maya.say_and_wait(
            '그런데 마야 때문에…… 마야 탓에 그런 말을 듣고……',
          );
          await maya.say_and_wait([
            callname,
            '이(가) 바보! 차라리 마야를 더 혼내란 말이야~~~~~!!',
          ]);
          await maya.say_and_wait('……으윽.');
          era.printButton('「미안해」', 1);
          await era.input();
          await maya.say_and_wait('으으~ 바로 그 점이 문제라구……');
          await maya.say_and_wait([
            callname,
            '의 그런 다정한 점을 좋아하지만, 그런 다정한 건 마야한테만 해 줘!',
          ]);
          await maya.say_and_wait(
            '『방해된다』느니 『꺼지라』느니 하는 댓글에는 마음껏 화내도 된단 말이야!',
          );
          era.printButton('「내가 방해가 되는지는 레이스로 증명하면 돼」', 1);
          await era.input();
          await maya.say_and_wait([callname, '……']);
          await maya.say_and_wait('……못 말려! 정말 어쩔 수 없다니까!');
          await maya.say_and_wait([
            '좋아. 이렇게 다정한 ',
            callname,
            '을(를) 위해서라도, 마야가 꼭 이겨 보일게!',
          ]);
          await maya.say_and_wait('그래서 다들 깜짝 놀라게 해 줄 거야!');
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 고개를 끄덕이며 밤하늘을 올려다보았다. 미래를 예고하듯 수많은 별이 반짝이고 있었다.',
          ]);
          break;
        case 3:
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            you.get_colored_name(),
            '을(를) 비난하는 댓글을 봤다. 하지만 그것 때문에 방송을 그만두는 건 아까웠다.',
          ]);
          await era.printAndWait([
            '「다들 네 방송을 보며 즐거워하잖아」라고 ',
            you.get_colored_name(),
            '이(가) ',
            maya.sex,
            '에게 말하자──',
          ]);
          await maya.say_and_wait([
            '그건 그렇지만, 마야는 사람들이 ',
            callname,
            '한테 못된 말을 하는 게 싫단 말이야……',
          ]);
          era.printButton(
            '「지금 네 마음을 전한다면 분명 다들 이해해 줄 거야」',
            1,
          );
          await era.input();
          await maya.say_and_wait(
            '……알았어. 마야가 다시 한번 제대로 얘기해 볼게.',
          );
          await maya.say_and_wait(
            '저기…… 다들 오랜만이야. 마야 채널에 어서 와.',
          );
          await you.say_as_passer_by_and_wait('시청자 A', '마야!? 본인이야!?');
          await you.say_as_passer_by_and_wait(
            '시청자 B',
            '못 봐서 너무 외로웠어!',
          );
          await you.say_as_passer_by_and_wait(
            '시청자 C',
            '별로 기운이 없어 보이네.',
          );
          await maya.say_and_wait(
            '에헤헤, 미안해. 오늘은 모두한테 하고 싶은 말이 있어서──',
          );
          await era.printAndWait([
            '거기까지 말하고 ',
            maya.get_colored_name(),
            '은 고개를 숙였다. ',
            maya.sex,
            '는 어떻게 말을 꺼내야 할지 망설이는 모양이다.',
          ]);
          era.printButton(`（마야, 힘내……!）`, 1);
          await era.input();
          await maya.say_and_wait(
            '……마야는 방송하는 동안 정말 즐거웠어. 여러분이 봐 주시는 것도 정말 기뻤고.',
          );
          await maya.say_and_wait([
            '그치만, ',
            callname,
            '한테 심한 말을 하는 댓글들을 보고 마야는 정말 슬펐어.',
          ]);
          await maya.say_and_wait([
            '마야랑 ',
            callname,
            '은(는) 둘 다 『레이스에서 이기고 싶어~!』라는 생각으로 계속 노력하고 있거든……',
          ]);
          await maya.say_and_wait(
            '마야는 여러분이 우리를 응원해 줬으면 좋겠는데, 여러분은 혹시…… 놀기만 하는 마야가 아니면 싫어하는 거야?',
          );
          await you.say_as_passer_by_and_wait('시청자 D', '완전 좋아해!!');
          await you.say_as_passer_by_and_wait('시청자 E', '마야, 정말 미안해.');
          await you.say_as_passer_by_and_wait('시청자 F', '말이 좀 심했네……');
          await maya.say_and_wait(
            '다행이다…… 하지만, 마야 채널은 잠시 동안 안녕이야.',
          );
          era.printButton('「어라!?」', 1);
          await era.input();
          await maya.say_and_wait(
            '쉬는 시간에 달리기 연습을 하다가 깨달았어! 마야가 가장 빛날 수 있는 곳은 경기장이라는 걸.',
          );
          await maya.say_and_wait(
            '조금 외롭겠지만…… 마야는 여러분께 더 멋진 모습을 보여드리고 싶어!',
          );
          await you.say_as_passer_by_and_wait('시청자 G', '정말 작별이야?');
          await you.say_as_passer_by_and_wait('시청자 H', '너무 아쉬워……');
          await maya.say_and_wait('여러분……');
          await you.say_as_passer_by_and_wait('시청자 I', '마야를 응원할게.');
          await you.say_as_passer_by_and_wait('시청자 J', '나도!');
          await you.say_as_passer_by_and_wait(
            '시청자 K',
            '마야, 꼭 보러 갈게!',
          );
          await maya.say_and_wait(
            '응! 레이스 때는 언제든 만날 수 있어! 마야도 경기장에서 여러분을 기다릴게!',
          );
          await era.printAndWait(
            '그 후 열린 모의 레이스에는 평소보다 훨씬 많은 팬이 응원을 하러 찾아왔다.',
          );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_taisecu_hito: (() => {
    const title = '마야의 소중한 사람!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} fuji フジキセキ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} f_call_m フジキセキのマヤノトップガンへの呼び方
     */
    const f = async (maya, fuji, you, callname, f_call_m) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 외출을 마친 ',
        maya.get_colored_name(),
        '을 기숙사 앞까지 배웅했다.',
      ]);
      await maya.say_and_wait([
        '헤헤! 오늘도 정말 즐거웠어! ',
        callname,
        '과의…… 데, 이트♪',
      ]);
      era.printButton('「즐거웠다니 다행이야」', 1);
      await era.input();
      await maya.say_and_wait(
        '맞다! 마야 방으로 와~! 드라마에 나오는 것처럼 같이 차라도 마시면서──',
      );
      await fuji.say_and_wait(
        '어머어머, 기숙사장으로서 그냥 지나칠 수가 없겠는걸.',
      );
      await maya.say_and_wait('앗! 아빠한테 들켰다~');
      era.printButton('「아빠……?」', 1);
      await era.input();
      await maya.say_and_wait(
        '그거 있잖아! 드라마에서 집 앞에서 아빠랑 딱 마주치는 장면 자주 나오잖아!',
      );
      await fuji.say_and_wait(
        '하하하, 아빠라니~ 기숙사장은 확실히 양부모 같은 존재이긴 하지.',
      );
      await maya.say_and_wait(
        '그럼…… 아빠, 소개할게! 이 사람은 나의 소중한 사람이야☆',
      );
      await fuji.say_and_wait([
        '뭐라고? 내 ',
        era.get('cflag:24:性别') === 1 ? '아들' : '딸',
        '의 소중한 사람이라고~? 그거 정말이니?',
      ]);
      era.printButton('「그게……」 (스피드 +20)', 1);
      era.printButton('「……실은 다른 소중한 사람이 있어」 (근성 +20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait([
          '꺄☆ ',
          callname,
          ', 부끄러워하고 있어! 귀여워!',
        ]);
        await fuji.say_and_wait(
          '후후, 장난은 여기까지 하자. 너희 정말 사이가 좋구나.',
        );
        await fuji.say_and_wait([
          f_call_m,
          '이(가) 저렇게 활기찬 것도, 다 그 때문일까?',
        ]);
        await maya.say_and_wait('헤헤! 우린 미래를 약속한 사이니까~♪');
        era.printButton('「계약이라고 해야겠지」', 1);
        await era.input();
        await maya.say_and_wait([
          '흥~! ',
          callname,
          '도 참, 이럴 때는 『응』이라고…… 해줘야지?',
        ]);
        await fuji.say_and_wait([
          '하하하, 그렇구나. ',
          f_call_m,
          '의 말이 맞네.',
        ]);
        await fuji.say_and_wait(['앞으로도 ', f_call_m, '을(를) 잘 부탁할게.']);
        await fuji.say_and_wait('……농담이야. 이러니까 진짜 아버지 같지? 후후.');
        await fuji.say_and_wait([
          '그럼 난 이만 가볼게. 곧 저녁 시간이니 ',
          f_call_m,
          '도 같이 가자.',
        ]);
        await maya.say_and_wait('응! ……아, 가기 전에.');
        await maya.say_and_wait([
          callname,
          ', 칭찬받았네! 이걸로 정식 인사 때도 문제없겠어☆',
        ]);
        era.printButton('「정식 인사……?」', 1);
        await era.input();
        await maya.say_and_wait('나 먼저 갈게! 내일 봐~♪');
        await era.printAndWait([
          '……어찌 됐든, 앞으로도 ',
          maya.get_colored_name(),
          '과 함께 노력할 생각을 하니, ',
          you.get_colored_name(),
          '은(는) 의욕이 솟구쳤다.',
        ]);
      } else {
        await maya.say_and_wait('에에에에에엑~~~!?');
        await maya.say_and_wait(
          '그게 무슨 소리야!? 마야는 모르는 일인데! 도대체 어떻게 된 거야──!?',
        );
        await fuji.say_and_wait(
          '그렇군. 사람 마음을 가지고 노는 데 능숙하구나~?',
        );
        await maya.say_and_wait('거, 거짓말…… 나랑은 그냥 장난이었던 거야……!?');
        era.printButton('「농담이야」', 1);
        await era.input();
        await maya.say_and_wait('……어? 농담?');
        await fuji.say_and_wait('하하하하! 그래. 놀리는 건 여기까지 하자구.');
        await maya.say_and_wait('엣!? 둘 다 방금 마야 놀린 거야!?');
        await maya.say_and_wait(
          '흥! 너무해, 진짜 너무해! 마야 방금 진심으로 슬펐다구~!',
        );
        era.printButton('「미안 미안」', 1);
        await era.input();
        await maya.say_and_wait('흥──! 아무리 사과해도 마야는 안 풀어질 거야!');
        await fuji.say_and_wait([
          '어머어머, ',
          maya.sex,
          '는 정말 널 좋아하는구나. 나도 너희 사이가 틀어지는 건 원치 않는데……',
        ]);
        await fuji.say_and_wait([
          '맞다! ',
          f_call_m,
          ', 식당에서 지금 케이크 카니발 하고 있는 거 아니?',
        ]);
        await maya.say_and_wait('……알아. 가고 싶은데 표를 못 구해서……');
        await fuji.say_and_wait(
          '나한테 마침 방에 남는 표가 두 장 있거든. 어때? 둘이서 화해의 차라도 한잔하러 가는 건.',
        );
        await maya.say_and_wait([
          '와아~~!! 갈래 갈래! 마야는 ',
          callname,
          '(이)랑 가고 싶어!',
        ]);
        await fuji.say_and_wait(
          '그것참 잘됐네. 표는 문 열고 바로 앞 탁자에 두었으니 가져가렴.',
        );
        await maya.say_and_wait('응♪');
        await fuji.say_and_wait('후우…… 좋아, 어떻게든 해결됐네.');
        era.printButton('「고마워……」', 1);
        await era.input();
        await fuji.say_and_wait(
          '별말씀을, 오히려 내가 고맙지. 사실 계속 감사를 표하고 싶었거든.',
        );
        await fuji.say_and_wait([
          f_call_m,
          ' ',
          maya.sex,
          '는 호기심이 왕성해서…… 여러모로 걱정되거든.',
        ]);
        await maya.say_and_wait([
          callname,
          '! 빨리빨리~! 안 그러면 식당 닫겠어!',
        ]);
        await fuji.say_and_wait('후후. 꼭 즐거운 시간 보내.');
        await era.printAndWait(
          '그 뒤 두 사람은 함께 차를 마시고…… 제대로 화해했다.',
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  bs_race_lesson: (() => {
    const title = '마야의 레이스 강좌☆';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} urara ハルウララ
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_52 マヤノトップガンのハルウララへの呼び方
     * @param {PrintedSpan} callname_52 ハルウララのプレイヤーへの呼び方
     * @param {PrintedSpan} u_call_m ハルウララのマヤノトップガンへの呼び方
     */
    const f = async (maya, urara, callname, call_52, callname_52, u_call_m) => {
      await era.printAndWait([
        maya.get_colored_name(),
        '과 함께 모의 레이스를 구경하고 돌아오는 길──',
      ]);
      await urara.say_and_wait([
        '아, ',
        u_call_m,
        '랑 ',
        callname_52,
        '이다~! 너희 혹시 나 응원하러 온 거야!?',
      ]);
      await maya.say_and_wait(['응! ', call_52, '는 정말 노력파라니까~☆']);
      await urara.say_and_wait('헤헤, 고마워~!');
      await urara.say_and_wait(
        '오늘도 정말 즐겁게 달렸어! 비록 꼴찌였지만 난 만족해♪',
      );
      await maya.say_and_wait([
        '그래? ',
        call_52,
        '는 대단해~! 마야는 지면 삐져버리는데☆',
      ]);
      await urara.say_and_wait('난 언제나 즐거워! 달리는 게 제일 좋으니까!');
      await urara.say_and_wait([
        '그치만…… 이기는 건 참 어렵네! ',
        u_call_m,
        '은 어떻게 레이스에서 이기는 거야?',
      ]);
      await maya.say_and_wait('나?');
      await urara.say_and_wait('응! 넌 항상 엄청 빠르잖아~?');
      await urara.say_and_wait([
        '우라라도 만약 ',
        u_call_m,
        '처럼 될 수 있다면, 이길 수 있을지도 몰라!',
      ]);
      era.printButton('「함께 연습해볼래?」', 1);
      await era.input();
      await maya.say_and_wait('좋은 생각이야☆');
      await maya.say_and_wait([
        call_52,
        ', 우리 같이 연습해서 다음에는 꼭 이기자!!',
      ]);
      await maya.say_and_wait([
        '마야와 ',
        callname,
        '의 레이스 강좌~☆ 학생은 ',
        call_52,
        ' 어린이♪',
      ]);
      await urara.say_and_wait('네! 하루 우라라입니다!');
      await maya.say_and_wait([
        '그럼 바로 시작하자~! 먼저 ',
        callname,
        '에게 질문할게☆',
      ]);
      await maya.say_and_wait([call_52, '에게 지금 필요한 건 뭐야!?']);
      era.println();
      era.printButton('「지치지 않도록 체력을 기른다!」 (스태미나 +20)', 1);
      era.printButton('「상대를 앞지르는 요령을 익힌다!」 (파워 +20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait(['정답☆ ', callname, '는 역시 대단해♪']);
        await maya.say_and_wait(['……흠흠! 저기, ', call_52, ' 학생!']);
        await maya.say_and_wait(
          '딱 잘라 말해서☆ 지난번 레이스 때, 너 중간에 힘 다 빠졌었지!?',
        );
        await urara.say_and_wait('응! 즐겁게 달렸지만 나중엔 정말 힘들었어~');
        await maya.say_and_wait(
          '체력이 더 있다면 훨씬 편하게 끝까지 달릴 수 있을 거야~☆',
        );
        await urara.say_and_wait(['그렇구나! ', u_call_m, '은 정말 똑똑해~♪']);
        await maya.say_and_wait(
          '뿌뿌! 오늘은 선생님이니까 『마야노 선생님』이라고 불러야지!',
        );
        await urara.say_and_wait(['네, ', maya.get_colored_name(), ' 선생님!']);
        await era.printAndWait([
          '그렇게 ',
          maya.get_colored_name(),
          '의 지도 아래, ',
          urara.get_colored_name(),
          '의 훈련이 진행되었다──',
        ]);
      } else {
        await maya.say_and_wait(
          '야~☆ 이게 바로 이심전심!? 마야도 똑같은 생각을 하고 있었어~♪',
        );
        await maya.say_and_wait([call_52, ', 너 평소에 어떻게 달려?']);
        await urara.say_and_wait('평소에? 난 항상 온 힘을 다해서 달려!');
        await maya.say_and_wait('응, 그렇구나…… 그럼 뭐 고민되는 건 없어?');
        await urara.say_and_wait(
          '음~ 앞질러 나가는 게 너무 어려워~ 다른 사람이랑 부딪칠 것 같으면 막 당황하게 돼!',
        );
        await maya.say_and_wait('오호, 그렇구나~!');
        await maya.say_and_wait('그럼 다음 레이스에선 앞만 보고 달려봐!');
        await maya.say_and_wait(
          '앞만 뚫어지게 보고 있으면, 언젠가 앞에 아무도 없을 때가 올 거야──',
        );
        await maya.say_and_wait('그때가 되면 그냥 쭉 앞으로 돌진☆');
        await urara.say_and_wait('알았어! 그렇게 해볼게♪');
      }
      era.drawLine({ content: '翌日' });
      await urara.say_and_wait('내 말 좀 들어봐! 나 한 명 앞질렀어!');
      await maya.say_and_wait('와, 대단해~! 한 명을 앞지르다니──');
      await maya.say_and_wait('한 명!?');
      await urara.say_and_wait(
        '헤헤~! 그렇게 한 명씩 다 앞질러서, 마지막엔 꼭 1등 할 거야~♪',
      );
      await maya.say_and_wait(
        '계속 앞지르다 보면 언젠가 꼭 1등이 되겠지! 반드시 1등을 따내는 거야~!!',
      );
      await urara.say_and_wait('오오~!!');
      await era.printAndWait([
        urara.get_colored_name(),
        '를 가르친 것이 ',
        maya.get_colored_name(),
        '에게도 긍정적인 영향을 준 듯했다.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_model_secret: (() => {
    const title = '어른스러운 모델의 비결!';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} yukino ユキノビジン
     * @param {CharaTalk} city ゴールドシチー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     * @param {PrintedSpan} call_29 マヤノトップガンのユキノビジンへの呼び方
     * @param {PrintedSpan} call_40 マヤノトップガンのゴールドシチーへの呼び方
     * @param {PrintedSpan} y_call_c ユキノビジンのゴールドシチーへの呼び方
     * @param {PrintedSpan} c_call_m ゴールドシチーのマヤノトップガンへの呼び方
     * @param {PrintedSpan} c_call_y ゴールドシチーのユキノビジンへの呼び方
     */
    const f = async (
      maya,
      yukino,
      city,
      you,
      callname,
      call_29,
      call_40,
      y_call_c,
      c_call_m,
      c_call_y,
    ) => {
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 마야노 탑건에게 ',
        you.get_colored_name(),
        '의 자료 정리를 도와 달라고 부탁하던 중──',
      ]);
      await maya.say_and_wait(['아! 이건 ', call_40, '이(가) 실린 잡지잖아!']);
      await maya.say_and_wait([
        call_40,
        '은(는) 역시 정말 예쁘네~♪ 노출이 좀 있는 옷도 정말 잘 어울려!',
      ]);
      await maya.say_and_wait('……맞다! 마야한테 좋은 생각이 났어~!');
      await era.printAndWait(['서류를 정리한 뒤 밖을 걷고 있자──']);
      await city.say_and_wait(['어, ', c_call_m, '。']);
      await yukino.say_and_wait('안녕하세요~!');
      await maya.say_and_wait([call_29, '하고 ', call_40, '~! 마침 잘 왔어☆']);
      await maya.say_and_wait([
        '있지 있지~! ',
        call_40,
        '은(는) 독자 모델이지?',
      ]);
      await maya.say_and_wait([
        call_40,
        '은(는) 성숙한 모델들을 많이 아는 멋진 어른이니까──',
      ]);
      await maya.say_and_wait([
        '마야한테 성숙한 ',
        maya.phy_sex_title,
        '이 되는 비결을 가르쳐 줬으면 좋겠어~♪',
      ]);
      await city.say_and_wait([
        '『성숙한 ',
        maya.phy_sex_title,
        '』이라니…… 너 정말 그거 좋아하는구나.',
      ]);
      await yukino.say_and_wait([
        '성, 성숙한 ',
        maya.phy_sex_title,
        '!? 와아……!',
      ]);
      await yukino.say_and_wait([
        '……그, 그래도 그게 『시티 ',
        maya.child_sex_title,
        '』가 되는 비결이라면…… 저한테도 가르쳐 주세요!',
      ]);
      await city.say_and_wait([
        '어라…… ',
        c_call_y,
        '까지 그렇게 말하는 거야?',
      ]);
      await city.say_and_wait(
        '……뭐, 괜찮긴 한데. 내 개인적인 생각이니까 참고만 해 둬.',
      );
      await city.say_and_wait(
        ' 내가 독자 모델을 할 때 신경 쓰는 건 두 가지야.',
      );
      await city.say_and_wait('첫 번째는 『컨디션』.');
      await city.say_and_wait(
        '언제나 최고의 상태를 유지해서, 자신의 가장 멋진 모습을 보여주는 것.',
      );
      await maya.say_and_wait('가장 멋진 모습…… 멋지다!! 그다음엔, 그다음엔!?');
      await city.say_and_wait('두 번째는 『스피드』.');
      await city.say_and_wait(
        '최신 유행을 빠르게 파악해서, 트렌드의 최첨단을 걷는 것.',
      );
      await yukino.say_and_wait('정, 정말 참고가 되네요~!');
      await maya.say_and_wait([
        call_40,
        '이(가) 언제나 반짝반짝 빛나는 건, 이 두 가지 덕분이었구나~!',
      ]);
      await maya.say_and_wait('마야도 익히면 어른에 한 걸음 가까워질지도♪');
      era.println();
      era.printButton('「컨디션 유지는 확실히 중요해」（스태미나+20）', 1);
      era.printButton('「스피드는 중요하지」 (스피드+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('그치 그치~♪ 컨디션이지~!');
        await maya.say_and_wait('컨디션…… 몸 만들기…… 응! 마야 알 것 같아!');
        await maya.say_and_wait([
          '체력을 기르면 되는 거지! 그치!? ',
          callname,
          '♪',
        ]);
        era.printButton('「어라?」', 1);
        await era.input();
        await maya.say_and_wait(
          '자, 가자 가자! 마야가 어른스러워지는 모습을 지켜봐 줘♪',
        );
        await city.say_and_wait('내 말은 그런 뜻이 아니었지만…… 뭐, 됐어.');
        await city.say_and_wait([
          maya.sex,
          '의 방식으로 어른이 된다는 거겠지.',
        ]);
        await yukino.say_and_wait([
          '머, 멋지다……! 저도 빨리 ',
          call_40,
          ' 처럼 되고 싶어요~',
        ]);
        await era.printAndWait([
          '최상의 컨디션을 유지하기 위해 훈련을 거듭한 ',
          maya.get_colored_name(),
          '은 체력이 꽤 붙었다.',
        ]);
      } else {
        await maya.say_and_wait('그치 그치~♪ 스피드지~!');
        await maya.say_and_wait('스피드라면…… 맞다!');
        await maya.say_and_wait(
          '쌤이 저번에 그랬잖아, 『셔틀런이 도움이 된다』고~!',
        );
        era.printButton('「그건 그렇지만……」', 1);
        await era.input();
        await maya.say_and_wait([
          '그럼 결정됐네♪ ',
          callname,
          '이(가) 보증한 거니까 틀림없어!',
        ]);
        await maya.say_and_wait(
          '운동장으로 이륙☆ 누구보다 빠르게 달려 보겠어♪',
        );
        await yukino.say_and_wait([
          y_call_c,
          '……저기, 저도 『시티 ',
          maya.child_sex_title,
          '』가 되고 싶어서……!',
        ]);
        await city.say_and_wait('응, 나는 신경 쓰지 말고…… 열심히 해 봐.');
        await yukino.say_and_wait('네! 좋아, 열심히 할게요~!');
        await era.printAndWait([
          '스피드를 높이기 위해 실시한 셔틀런은 ',
          maya.get_colored_name(),
          '한테 좋은 트레이닝이 된 듯하다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_maya_reading: (() => {
    const title = '공부는 마야에게 맡겨줘☆';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        '미팅 시간이 되었지만, ',
        maya.get_colored_name(),
        '은 아직 오지 않았다……',
      ]);
      await maya.say_and_wait('헬로 헬로~! 많이 기다렸어~!?');
      era.printButton('「아니, 방금 왔어」', 1);
      await era.input();
      await maya.say_and_wait('와와☆ 방금 그거 꼭 데이트 같았어!? 꺄~~~!');
      await maya.say_and_wait([
        '아니, 이게 아니고! ',
        callname,
        ', 미안해! 반 친구들한테 붙잡혀 있었어~',
      ]);
      era.drawLine();
      await you.say_as_passer_by_and_wait(
        '경주 ' + maya.uma_sex_title + 'A',
        '하아, 내일부터 시험인가~',
      );
      await you.say_as_passer_by_and_wait(
        '경주 ' + maya.uma_sex_title + 'B',
        '정말 우울해~ 그냥 확 쉬어버릴까?',
      );
      await maya.say_and_wait(
        '그 맘 알아 그 맘 알아! 마야도 시험 진짜 싫어~!!',
      );
      await maya.say_and_wait(
        '금방 다 풀어버리는데, 잘 수도 없고 놀 수도 없잖아! 정말이지, 그림이라도 그릴 수밖에 없다니까~!!',
      );
      await you.say_as_passer_by_and_wait('경주 ' + maya.uma_sex_title + 'A', [
        maya.get_colored_name(),
        ', 넌 정말~!',
      ]);
      await you.say_as_passer_by_and_wait(
        '경주 ' + maya.uma_sex_title + 'B',
        '부러워~ 다음 시험도 전부 『알겠는』 거지?',
      );
      await maya.say_and_wait('뭐, 그렇지~');
      await you.say_as_passer_by_and_wait('경주 ' + maya.uma_sex_title + 'A', [
        '있지, ',
        maya.get_colored_name(),
        '! 어디가 시험에 나올 것 같은지 좀 가르쳐 줘!',
      ]);
      await you.say_as_passer_by_and_wait(
        '경주 ' + maya.uma_sex_title + 'B',
        '부탁할게~! 친구 좋다는 게 뭐야! 응?',
      );
      await maya.say_and_wait('라져☆ 이 마야노 탑건님만 믿으라고♪');
      era.drawLine();
      await maya.say_and_wait([
        '그렇게 해서 ',
        maya.couple_title,
        '한테 마야가 아는 부분을 알려 줬어! ',
        maya.couple_title,
        ', 좋아하더라!',
      ]);
      await maya.say_and_wait([
        maya.couple_title,
        ', 『다음에도 부탁해』래! 에헤헤, 인기 많은 ',
        maya.phy_sex_title,
        '은 힘들다니까~♪',
      ]);
      await era.printAndWait([
        maya.get_colored_name(),
        '은 기쁜 듯하다. 하지만 ',
        maya.sex,
        '의 트레이너로서 ',
        you.get_colored_name(),
        '은(는) 이것이 ',
        maya.sex,
        '한테 부담이 되지는 않을까 조금 걱정되었다……',
      ]);
      era.printButton('「너도 답례를 요구해보는 건 어때?」（파워&근성+10）', 1);
      era.printButton('「하기 싫을 때는 거절해야 해」（지능+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          '가르쳐 주기만 하는 게 아니라 답례를 받으면 부담도 줄어들 것이다. ',
          you.get_colored_name(),
          '은(는) 그렇게 제안했다──',
        ]);
        await maya.say_and_wait('아!! 마야는 완전히 잊고 있었어!');
        await maya.say_and_wait('답례 말이지~♪ 뭘 해달라고 할까~?');
        await maya.say_and_wait([
          '……맞다! ',
          maya.couple_title,
          '들한테 마야랑 놀아달라고 해야지!',
        ]);
        await maya.say_and_wait(
          '시험 기간에는 다들 공부하느라 아무도 안 놀아준단 말이야~',
        );
        era.printButton(
          '「' +
            maya.sex +
            '들을 네가 가르쳐 준 덕분에 ' +
            maya.sex +
            '들도 시간이 남겠네」',
          1,
        );
        await era.input();
        await maya.say_and_wait([
          '맞아, 맞아! 내일 ',
          maya.couple_title,
          '한테 물어볼게♪',
        ]);
        era.drawLine();
        await you.say_as_passer_by_and_wait(
          '경주 ' + maya.uma_sex_title + 'A',
          '너한테 줄 답례?',
        );
        await maya.say_and_wait('응! 마야랑 같이 놀아줬으면 좋겠어♪');
        await maya.say_and_wait(
          '요즘 다들 시험 시험 거리면서 나랑 안 놀아줬잖아~',
        );
        await you.say_as_passer_by_and_wait(
          '경주 ' + maya.uma_sex_title + 'B',
          [
            '네가 말하는 건 『',
            maya.get_colored_name(),
            ' 신병 훈련소』…… 다 같이 지칠 때까지 전력을 다해 노는 거 말이지.',
          ],
        );
        await you.say_as_passer_by_and_wait(
          '경주 ' + maya.uma_sex_title + 'A',
          '좋지. 나도 마침 기분 전환이 필요했어!',
        );
        await you.say_as_passer_by_and_wait(
          '경주 ' + maya.uma_sex_title + 'B',
          ['나도! 얼마든지 와라, ', maya.get_colored_name(), ' 신병 훈련소♪'],
        );
        await maya.say_and_wait('야호~~~~~! 실컷 놀아보자!!');
        await era.printAndWait([
          '며칠 후, 통금 시간 직전까지 실컷 놀다 온 ',
          maya.get_colored_name(),
          '은 아주 활기찬 모습으로 돌아왔다.',
        ]);
      } else {
        await maya.say_and_wait([
          '정말이지! ',
          callname,
          '은(는) 걱정도 많다니까~♪',
        ]);
        await maya.say_and_wait(
          '마야는 의지 받는 게 기쁘고, 친구들도 문제를 이해해서 다들 좋아했는걸!',
        );
        await maya.say_and_wait('그치? 좋은 일뿐이라니까♪');
        era.printButton('「그럼 나도 기쁘게 해 줬으면 좋겠는데」', 1);
        await era.input();
        await maya.say_and_wait('그럼 그럼, 당연하지! 뭐든지 말만 해♪');
        await era.printAndWait([
          '약속을 받아낸 ',
          you.get_colored_name(),
          '은(는) ',
          maya.get_colored_name(),
          '에게 강도 높은 트레이닝 스케줄을 짜주었다.',
        ]);
        await maya.say_and_wait('와~! 이건 마야한테 하나도 안 즐겁잖아──────!');
        era.drawLine();
        await maya.say_and_wait(['으으~! ', callname, '은(는) 심술쟁이……']);
        await you.say_as_passer_by_and_wait(
          '경주 ' + maya.uma_sex_title + 'A',
          ['아하하, 고생이 많네, ', maya.get_colored_name(), '！'],
        );
        await you.say_as_passer_by_and_wait(
          '경주 ' + maya.uma_sex_title + 'B',
          [
            '저 트레이너님도 보통이 아니네~! ',
            maya.get_colored_name(),
            '을 어떻게 다뤄야 하는지 아주 잘 알고 있어.',
          ],
        );
        await maya.say_and_wait([
          '그치 그치! 우리 ',
          callname,
          '이(가) 얼마나 대단한데♪',
        ]);
        await you.say_as_passer_by_and_wait(
          '경주 ' + maya.uma_sex_title + 'A',
          '……너 말이야, 지금 짜증 난 거야, 아니면 즐거운 거야?',
        );
        await maya.say_and_wait('소, 소녀의 마음은 복잡한 거라구~!');
        await era.printAndWait([
          '혹독한 교훈을 얻은 덕분에 ',
          maya.get_colored_name(),
          '은 조금 더 영리한 ',
          maya.phy_sex_title,
          '이 된 모양이다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  os_maya_takeoff: (() => {
    const title = '마야노·이륙☆';
    /**
     * @param {CharaTalk} maya マヤノトップガン
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname マヤノトップガンのプレイヤーへの呼び方
     */
    const f = async (maya, you, callname) => {
      await era.printAndWait([
        maya.get_colored_name(),
        '의 승부복이 드디어 도착했다.',
      ]);
      await era.printAndWait([
        maya.sex,
        '가 ',
        you.get_colored_name(),
        '에게 「디자인은 도착할 때까지 비밀!」이라고 말했기에, ',
        you.get_colored_name(),
        '은(는) 이것을 처음 보게 되었다.',
      ]);
      await maya.say_and_wait('짠짜잔──☆');
      await maya.say_and_wait([
        '이것 봐 이것 봐, ',
        callname,
        '! 정말 예쁘지~♪',
      ]);
      era.printButton('「좀 더 하늘하늘할 줄 알았는데……」', 1);
      await era.input();
      await maya.say_and_wait('응, 그 점에 대해서 마야도 오랫동안 고민했어~');
      await maya.say_and_wait(
        '하지만 이런 느낌도 섹시하고 나한테 잘 어울린다고 생각해! 어때?',
      );
      era.printButton('「멋지고 좋은 것 같아」', 1);
      await era.input();
      await maya.say_and_wait('야호~!!');
      await maya.say_and_wait(
        '우리 아빠랑 엄마도 승부복 디자인 보고 칭찬해 주셨어~♪',
      );
      await maya.say_and_wait('『아빠가 젊었을 때처럼 멋지네』라고 하셨거든!');
      era.printButton('「네 아버지가 하시는 일이……」', 1);
      await era.input();
      await maya.say_and_wait('응! 하늘을 날아다니는 파일럿이셔☆');
      await maya.say_and_wait(
        '마야도 예전에 아빠가 운전하는 소형 제트기를 타본 적 있거든~♪',
      );
      await maya.say_and_wait(
        '하늘은 정말 넓고, 우리가 사는 마을은 멀고 작게 보였어!',
      );
      await maya.say_and_wait(
        '마야는 그렇게 넓은 풍경 속을 『슈웅──!』 하고 날아다니는 기분이 정말 좋아~♪',
      );
      await maya.say_and_wait(
        '하늘을 나는 건 경기장에서 달리는 거랑 똑같아! 정말 두근거리고 자극적이야♪',
      );
      await maya.say_and_wait('그래서 내 승부복도 이렇게 디자인한 거야☆');
      await maya.say_and_wait(
        '이렇게 입고 코스를 달리면, 마치 자유롭고 즐거운 하늘을 나는 것 같은 기분이 들거든~!',
      );
      era.println();
      era.printButton('「많은 레이스를 향해 이륙하자!」（스피드+20）', 1);
      era.printButton('「드디어 너의 원점을 알게 됐어」（스태미나+20）', 2);
      const ret = await era.input();
      if (ret === 1) {
        await maya.say_and_wait('응응! 그럴게~!');
        await maya.say_and_wait(
          '마야의 비행으로 모든 관객에게 아름다운 풍경을 보여줄 거야♪',
        );
        await maya.say_and_wait([
          callname,
          '도 늦어서 비행기 놓치지 않게 조심해!',
        ]);
        era.printButton('「기대하고 있을게」', 1);
        await era.input();
        await maya.say_and_wait(['고마워, ', callname, '！']);
        await maya.say_and_wait(
          '나 앞으로 훨씬 더 빨라질 테니까, 계속 마야만 지켜봐 줘야 해♪',
        );
        await maya.say_and_wait('알았지?');
        era.printButton('「라져!」', 1);
        await era.input();
        await maya.say_and_wait('헤헤~♪ 이건 우리 둘만의 약속이야!');
        await maya.say_and_wait(
          'OK Smile☆Lucky Peace! 마야노 탑건, 갑니다────♪',
        );
        await era.printAndWait([
          '승부복을 입은 뒤, ',
          maya.get_colored_name(),
          '의 승리에 대한 갈망이 더 커진 듯하다.',
        ]);
      } else {
        await maya.say_and_wait('정말? 정말로?');
        await maya.say_and_wait([
          callname,
          '이 점점 마야를 더 잘 알게 되는 것 같네~♪',
        ]);
        await maya.say_and_wait(
          '나중에는 우리 아빠 엄마보다 나를 더 잘 알게 될지도…… 꺄아~☆',
        );
        era.printButton('「그러고 보니 부모님께는 승부복 보여드렸어?」', 1);
        await era.input();
        await maya.say_and_wait('어? 아니, 아직!');
        await maya.say_and_wait([
          '오래전부터 가장 먼저 ',
          callname,
          '한테 보여주기로 결정했었거든♪',
        ]);
        await maya.say_and_wait('……맞다! 아빠랑 엄마한테 사진 보내줘야지!');
        await maya.say_and_wait([callname, '도 같이 찍자! 응?']);
        era.printButton('「내가 같이 찍어도 돼?」', 1);
        await era.input();
        await maya.say_and_wait('그거야 당연히 문제없지!');
        await maya.say_and_wait([
          '아빠랑 엄마도 ',
          callname,
          '을 보고 싶어 하셨는걸~!',
        ]);
        await maya.say_and_wait('자, 조금 더 가까이~! 하나, 둘…… 이륙☆');
        await maya.say_and_wait('헤헤, 잘 찍혔다♪ 전송!');
        await maya.say_and_wait('앗! 아빠한테 답장 왔다! 어디 보자……');
        await maya.say_and_wait('아하하♪ 인상이 정말 좋아 보인대!');
        await maya.say_and_wait([
          '『',
          maya.get_colored_name(),
          '을 잘 부탁합니다』라고 하셨어! 이제 부모님 공인 ',
          callname,
          '이네☆',
        ]);
        await era.printAndWait([
          '조금 쑥스럽긴 했지만, ',
          you.get_colored_name(),
          '은(는) 앞으로도 계속 ',
          maya.sex,
          '의 힘이 되어주겠다고 다시 한번 다짐했다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
