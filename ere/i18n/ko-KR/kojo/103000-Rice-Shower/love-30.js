/**
 * @file ライスシャワー - 恋慕
 * @author 梦露
 */
const era = require('#/era-electron');

module.exports = {
  49: (() => {
    const title = '애욕';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_call ライスの自称
     */
    const f = async (rice, you, callname, self_call) => {
      await rice.print_and_wait([
        '우선, ',
        callname,
        '는 정말 멋지고 상냥하고 믿음직스러워. 설령 ',
        self_call,
        '가 ',
        callname,
        '에게 많은 폐를 끼치더라도, 언제나 웃으며 ',
        self_call,
        '를 응원해 줘.',
      ]);
      await rice.print_and_wait([
        '……가끔은 귀엽기도 하고! 아무튼 ',
        self_call,
        '는 ',
        callname,
        '를 좋아해.',
      ]);
      await rice.print_and_wait([
        '몇 번이고, 몇 번이고, 몇 번이나, ',
        self_call,
        '는 ',
        callname,
        '를 덮치고 싶다고 생각했어.',
      ]);
      await rice.print_and_wait([
        '하지만 그러면 ',
        callname,
        '가 슬퍼할지도 모른다는 생각에, ',
        self_call,
        '는 꾹 참아왔어.',
      ]);
      era.printButton(
        `당연하지, ${callname}의 마음이 가장 소중하니까. (관계 진전 보류)`,
        1,
        { buttonType: '', color: rice.color },
      );
      era.printButton(
        `${callname}의 대답이 무엇이든, ${self_call}는 더 이상 참지 않을 거야! (관계 진전)`,
        2,
        { buttonType: '', color: rice.color },
      );
      const ret = await era.input();
      if (ret === 2) {
        await rice.print_and_wait([
          self_call,
          '에게 스스로를 믿으라고 가르쳐 준 사람은 바로 ',
          callname,
          '야. ',
          self_call,
          '는 이번에야말로 끝까지 노력할거야. 절대 포기하지 않아.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  74: (() => {
    const title = '고백';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_call ライスの自称
     * @param {PrintedSpan} y_call_r プレイヤーのライスへの呼び方
     */
    const f = async (rice, you, callname, self_call, y_call_r) => {
      await rice.print_and_wait([
        self_call,
        '는 ',
        callname,
        '를 가장 좋아해.',
      ]);
      await rice.print_and_wait(
        '가장 좋아하기 때문에, 이 사랑은 설령 결실을 보지 못하더라도 괜찮아.',
      );
      await rice.print_and_wait('그러니까, 이걸로 됐어.');
      await rice.print_and_wait([self_call, '는, 여기까지만 오면 돼.']);
      await rice.print_and_wait([self_call, '는, 본래 그렇게 기도했으니까.']);
      era.drawLine();
      await era.printAndWait([
        rice.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '에게, 무슨 일이 있어도 가보고 싶은 가게가 있다고 말했다.',
      ]);
      await era.printAndWait([
        '그래서 ',
        you.get_colored_name(),
        '은(는) ',
        rice.get_colored_name(),
        '를 데리고 이곳에 왔다. 학원에서 조금 떨어진 거리다.',
      ]);
      await era.printAndWait(
        '한 곳은 커다란 서점, 다른 한 곳은 예쁜 잡화점이다.',
      );
      await era.printAndWait(
        '화려한 조명이 빛나는 이곳은 연인들이 크리스마스를 즐기는 거리다.',
      );
      await era.printAndWait(
        '조금 떨어진 곳에는 네온사인이 반짝이는 어른들의 장소도 보인다.',
      );
      await rice.say_and_wait([
        self_call,
        '는, ',
        callname,
        '에게 주고 싶은 선물이 있어.',
      ]);
      await rice.say_and_wait([
        self_call,
        '의 모든 것은, ',
        callname,
        '가 준 것이나 다름없어.',
      ]);
      await rice.say_and_wait([
        '그래서 ',
        self_call,
        '는 ',
        callname,
        '에게, 지금까지 ',
        self_call,
        '를 돌봐 줘서 정말 고맙다는 말을 하고 싶었어.',
      ]);
      await rice.say_and_wait([
        callname,
        ', 라이스는 꼭 좋은 우마무스메가 될게. 그러니까 포기하지 말아 줘.',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        '가 고개를 들고, 갑자기 ',
        you.get_colored_name(),
        '에게 이렇게 말했다.',
      ]);
      await rice.say_and_wait([
        callname,
        '가 나의 트레이너가 되어 주겠다고 했을 때, 정말로 기뻤어.',
      ]);
      await rice.say_and_wait(
        '난 어릴 때부터 누군가에게 행복을 주는 사람이 되고 싶어 노력했거든.',
      );
      await rice.say_and_wait([
        '하지만, 부모님께는 분명 ',
        self_call,
        '가 걱정스러운 아이였을 거야.',
      ]);
      await era.printAndWait([
        rice.get_colored_name(),
        '는 한 자 한 자 목소리를 쥐어짜듯 내뱉었다.',
      ]);
      await rice.say_and_wait([
        '어릴 때부터 ',
        self_call,
        '는 ',
        you.elder_sibling_sex_title,
        '가 있었으면 했어. 정말 ',
        you.elder_sibling_sex_title,
        '가 있었다면, ',
        self_call,
        '는 ',
        you.sex,
        '에게 어리광을 부릴 수 있었을 텐데……',
      ]);
      await era.printAndWait('진실하고 순수한 눈망울.');
      await era.printAndWait([
        rice.get_colored_name(),
        '의 아름다운 두 눈이, 지금은 가만히 ',
        you.get_colored_name(),
        '을(를) 응시하고 있다.',
      ]);
      await rice.say_and_wait([
        callname,
        ', 혹시 이런 ',
        self_call,
        '.. 번거로워?',
      ]);
      era.printButton('「전혀 번거롭지 않아.」', 1);
      await era.input();
      await you.say_and_wait([
        y_call_r,
        '은(는) 언제든 나한테 어리광 부려도 돼.',
      ]);
      await rice.say_and_wait([
        '정말이야? 계속 ',
        self_call,
        '의 곁에 있어 줄 거야?',
      ]);
      await era.printAndWait('두 사람 사이의 거리가 순식간에 좁혀졌다.');
      era.printButton('「응, 내가 계속 곁에 있어 줄게.」', 1);
      await era.input();
      await rice.say_and_wait([
        '약속이야? ',
        callname,
        '는 계속 ',
        self_call,
        '의 곁에 있어야 해.',
      ]);
      await rice.say_and_wait(
        '인사도 없이 떠나버리거나, 갑자기 죽어서 곁을 떠나는 건 절대 안 돼.',
      );
      await you.say_and_wait(['난 언제나 ', y_call_r, '의 곁에 있을게.']);
      await rice.say_and_wait(['고마워, ', callname, '. 정말 좋아해.']);
      await era.printAndWait([
        rice.get_colored_name(),
        '가 두 팔로 ',
        you.get_colored_name(),
        '을(를) 꽉 껴안았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  89: (() => {
    const title = '좋은 인연';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_call ライスの自称
     */
    const f = async (rice, you, callname, self_call) => {
      await rice.print_and_wait('어느 휴일 아침');
      await rice.print_and_wait([
        rice.get_colored_name(),
        '는 타오르는 듯한 열기, 약간의 통증, 그리고 말로 표현할 수 없는 불안감에 잠에서 깼다.',
      ]);
      await rice.print_and_wait([
        '이런 감각을 ',
        rice.get_colored_name(),
        '가 겪은 것이 처음은 아니었다.',
      ]);
      await rice.print_and_wait(
        '평소라면 조금 더 자거나, 몸을 움직이다 보면 금방 나아지곤 했다.',
      );
      await rice.print_and_wait([
        '그래서 ',
        rice.get_colored_name(),
        '는 평소처럼 몸을 움직이고 옷을 갈아입은 뒤 밖으로 나갔다.',
      ]);
      era.drawLine();
      await rice.print_and_wait('하지만, 도무지 낫질 않았다.');
      await rice.print_and_wait('걷고, 뛰고, 앉아서 쉬어 보아도.');
      await rice.print_and_wait('불안하고 슬픈 마음은 걷잡을 수 없었다.');
      await rice.print_and_wait([
        rice.get_colored_name(),
        '는 초조한 마음으로 길가에 주저앉았다.',
      ]);
      await rice.print_and_wait([
        '우연히, ',
        callname,
        '가 길을 지나가고 있었다.',
      ]);
      await rice.print_and_wait([
        callname,
        '는 곤란한 표정으로 ',
        rice.get_colored_name(),
        '의 손을 잡아주었다.',
      ]);
      era.drawLine();
      await rice.print_and_wait([
        callname,
        '의 방에 도착했을 때, ',
        rice.get_colored_name(),
        '는 이미 한계였다.',
      ]);
      await rice.print_and_wait('열기, 슬픔, 불안.');
      await rice.print_and_wait([
        '하지만 마음 한구석은 ',
        callname,
        '에게 손을 잡힌 순간부터 새콤달콤하게 물들어 있었다.',
      ]);
      await rice.print_and_wait([
        rice.get_colored_name(),
        '는 ',
        callname,
        '의 품에 자신의 몸을 맡겼다.',
      ]);
      await rice.print_and_wait('거짓말처럼 조금 전의 불안이 사라졌다.');
      await rice.say_and_wait('후우…');
      await rice.print_and_wait(
        '깊게 숨을 들이쉴 때마다, 따스한 무언가가 차곡차곡 쌓여갔다.',
      );
      await rice.say_and_wait('하아……');
      await rice.print_and_wait(
        '천천히 숨을 내뱉으면, 쌓인 것들이 달콤한 행복으로 변해 온몸으로 퍼져나갔다.',
      );
      await rice.print_and_wait(
        '그저 숨을 쉬는 것만으로도 점점 더 행복해졌다.',
      );
      await rice.say_and_wait('응…… 아앗!');
      await rice.print_and_wait([
        rice.get_colored_name(),
        '는 이 쾌감에 몸이 녹아내릴 것만 같았다.',
      ]);
      await rice.print_and_wait([
        callname,
        '의 손이 ',
        rice.get_colored_name(),
        '의 등을 어루만졌다.',
      ]);
      await rice.print_and_wait(
        '마치 장난꾸러기처럼, 만지고, 부드럽게 쓰다듬는다.',
      );
      await rice.say_and_wait('아…… 응……');
      await rice.print_and_wait([
        '황홀함 속에 녹아내린 ',
        rice.get_colored_name(),
        '는, ',
        callname,
        '의 손길에 휘저어지며 즐거운 파도에 휩쓸렸다.',
      ]);
      await rice.print_and_wait([
        '그러자 ',
        callname,
        '는 손을 ',
        rice.get_colored_name(),
        '의 꼬리 뿌리 쪽에 가져다 댔다.',
      ]);
      await rice.print_and_wait('능숙하게, 계속해서 원을 그리며 만지작거렸다.');
      await rice.say_and_wait('아…… 응아앗!');
      await rice.print_and_wait([
        rice.get_colored_name(),
        '의 몸이 떨리며, 형체를 알아볼 수 없을 정도로 흐물흐물해졌다.',
      ]);
      await rice.say_and_wait([
        '아아, ',
        callname,
        '…… 조금 더, 조금만 더 해줘!',
      ]);
      await rice.print_and_wait(['그때, ', callname, '의 손이 갑자기 멈췄다.']);
      await rice.print_and_wait('용솟음치던 무언가도 한순간에 잠잠해졌다.');
      await rice.say_and_wait(callname);
      await rice.print_and_wait([
        '그리고 ',
        callname,
        '는 ',
        rice.get_colored_name(),
        '의 꼬리를 뿌리부터 잡아당겼다.',
      ]);
      await rice.print_and_wait([
        rice.get_colored_name(),
        '의 전신에 행복의 물결이 밀어닥쳤다.',
      ]);
      await rice.say_and_wait(['아아…… 아, ', callname, '……']);
      await rice.say_and_wait([self_call, '…… 너무 행복해!']);
      await rice.print_and_wait([
        '잠시 후, ',
        rice.get_colored_name(),
        '는 행복의 수렁에 푹 빠진 채 그대로 잠이 들었다.',
      ]);
      era.drawLine();
      await rice.print_and_wait([
        '잠에서 깨어나 개운해진 ',
        rice.get_colored_name(),
        '는 ',
        callname,
        '의 장난스러운 웃는 얼굴과 마주쳤다.',
      ]);
      await rice.print_and_wait([
        '부끄러움에 얼굴이 타버릴 것만 같았던 ',
        rice.get_colored_name(),
        '는 서둘러 이불 속으로 몸을 숨겼다.',
      ]);
      await rice.say_and_wait('하지만, 정말 행복해……', true);
    };
    f.title = title;
    return f;
  })(),
  99: (() => {
    const title = '의존';
    /**
     * @param {CharaTalk} rice ライスシャワー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname ライスのプレイヤーへの呼び方
     * @param {string} self_call ライスの自称
     */
    const f = async (rice, you, callname, self_call) => {
      await rice.say_and_wait([
        '왜 ',
        self_call,
        '를 봐주지 않아? ',
        self_call,
        '가 나쁜 아이라서 싫어진 거야?',
      ]);
      await rice.say_and_wait([
        '그렇구나…… 그럼 ',
        self_call,
        '가 나쁜 아이라는 증거를 새겨야겠네.',
      ]);
      await rice.say_and_wait([
        '그러니까 ',
        callname,
        '는 ',
        self_call,
        '에게 벌을 줘야 해. ',
        self_call,
        '가 나쁜 아이니까, 그래서 ',
        callname,
        '가 ',
        self_call,
        '에게 사랑을 주지 않는 거니까.',
      ]);
      await rice.say_and_wait([
        '왜? ',
        callname,
        '를 위해서라면 ',
        self_call,
        '는 매일 트레이닝하고, 매주 레이스에 나갈 수도 있어. 휴식 같은 건 필요 없어.',
      ]);
      await rice.say_and_wait([
        callname,
        '가 ',
        self_call,
        '를 사랑해 주기만 한다면, 설령 ',
        self_call,
        '가 더 이상 뛸 수 없게 되어도 계속 달릴게.',
      ]);
      await rice.say_and_wait([
        '부탁이야, ',
        self_call,
        '에겐 이제 ',
        callname,
        '뿐이야……',
      ]);
      await rice.say_and_wait([
        '그러니까, 제발 ',
        self_call,
        '를 사랑해 줘. ',
        self_call,
        '만 바라봐 줘.',
      ]);
      await rice.say_and_wait([
        callname,
        '、',
        self_call,
        '을(를) 쓰다듬어 줄래?',
      ]);
      await rice.say_and_wait(['에헤헤? 고마워, ', callname, '。']);
      await rice.say_and_wait('정말 좋아해!');
    };
    f.title = title;
    return f;
  })(),
};
