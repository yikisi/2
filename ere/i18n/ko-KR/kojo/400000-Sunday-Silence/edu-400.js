/**
 * @file サンデーサイレンス - 育成
 * @author 黑衣剑士-星爆气流斩准备就绪
 */
const era = require('#/era-electron');

module.exports = {
  race_end_win: (() => {
    const title = '레이스 승리!';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ss, you) => {
      await ss.say_and_wait('응, 이겼어. 경기장에서 달리는 내 모습은 어땠어?');
      if (Math.random() < 0.5) {
        await you.say_and_wait('여유로웠어. 돌아가서 다음 레이스를 준비하자');
      } else {
        await you.say_and_wait(
          '어렵지는 않았던 것 같아. 그래도 앞으로 훈련을 게을리하면 안 돼',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '레이스 입착!';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ss, you) => {
      await ss.say_and_wait(
        '솔직히 조금 분하네. 뭐가 문제였을까. 나중에 같이 되짚어 보자.',
      );
      if (Math.random() < 0.5) {
        await you.say_and_wait('생각한 대로는 아니었지만, 충분히 잘 달렸어');
      } else {
        await you.say_and_wait(
          '지고 싶지 않다면 다음에는 더 높은 순위를 차지해야지',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  race_end_lose: (() => {
    const title = '레이스 패배!';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait([
        callname,
        ', 생각을 바꿔야겠어. 계속 이렇게 지다가는 곤란해질 거야.',
      ]);
      if (Math.random() < 0.5) {
        await you.say_and_wait(
          '맞아. 나도 생각을 바꿔야겠어. 다음에는 나아질 거야',
        );
      } else {
        await you.say_and_wait(
          '결과는 좋지 않았어. 그래도 여기서 자신을 몰아붙이는 건 좋지 않아',
        );
      }
    };
    f.title = title;
    return f;
  })(),
  we_beginning: (() => {
    const title = '선데이 사일런스 등장';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait(['안녕, 기분 좋아 보이네, ', callname, '。']);
      await ss.say_and_wait(
        '그럼 훈련을 시작할까. 네 목표도 하나씩 정상을 차지해 나가는 거겠지?',
      );
      await era.printAndWait([
        '아름다운 흑발의 ',
        ss.uma_sex_title,
        '가 ',
        you.get_colored_name(),
        '에게 손을 내밀었다. 자신감 넘치는 얼굴은 활짝 핀 꽃 같았고, ',
      ]);
      await era.printAndWait([
        '건강하고 풍만한 몸을 보며 ',
        you.get_colored_name(),
        '은(는) 본격화를 맞은 ',
        ss.uma_sex_title,
        '의 아름다움을 새삼 느꼈다.',
      ]);
      await era.printAndWait([
        '따스한 오전 햇살이 유리창을 지나 ',
        ss.sex,
        '와 ',
        you.get_colored_name(),
        '의 몸 위로 내려앉았다. 더없이 자연스러우면서도 따뜻한 풍경이었다.',
      ]);
      await ss.say_and_wait(
        '서로를 선택한 파트너니까 내 모든 걸 알아 둘 필요가 있어. 그러니 훈련장으로 갈까?',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 대화의 주도권을 완전히 쥐고 있었다. ',
        you.get_colored_name(),
        '도 이견은 없었기에 ',
        ss.sex,
        '의 제안대로 훈련장으로 향했다.',
      ]);
      await era.printAndWait([
        '이날, ',
        you.get_colored_name(),
        '은(는) ',
        ss.sex,
        '의 현재 상태를 전반적으로 점검하고, 자신의 경험을 바탕으로 훈련 계획을 세우기 시작했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_beginning: (() => {
    const title = '첫 의견 조율';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait('그래. 알겠어.');
      await ss.say_and_wait(
        '난 내 안목을 믿고, 네 재능도 믿어. 그래서 함께 앞으로 나아가고 싶어.',
      );
      await ss.say_and_wait(
        '하지만 미리 말해 둘게. 내 목표는 오직 승리야. 목표를 이루지 못한다면 ',
      );
      await ss.say_and_wait(
        '트레이너를 바꾸는 것도 마다하지 않겠어. 서로 발목을 잡는 일은 피하고 싶으니까.',
      );
      await ss.say_and_wait(
        '물론 내가 너를 따라가지 못한다면, 나를 버려도 괜찮아.',
      );
      await era.printAndWait([
        ss.sex,
        '는 진심으로 그렇게 생각하는 듯했다. ',
        you.get_colored_name(),
        '의 기분은 아랑곳하지 않고 거침없이 말을 꺼냈다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '은(는) 알아차렸다. ',
        you.get_colored_name(),
        '에게 ',
        ss.sex,
        '를 버려도 좋다고 말했을 때, ',
        ss.get_colored_name(),
        '의 꼬리가 조금 더 빠르게 흔들리고 있었다.',
      ]);
      await ss.say_and_wait(
        '처음에는 스피드 훈련? 아니면 스태미나? 준비 운동이 끝나면 확실한 답을 줬으면 해.',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 햇볕 아래서 몸을 풀기 시작했다. 햇살을 받아 이마에는 자잘한 땀방울이 맺혔고, 뺨도 살짝 붉어졌다.',
      ]);
      era.printButton(
        '「지금 네게는 파워와 스태미나가 먼저야. 그쪽을 중점적으로 단련할 생각이야.」',
        1,
      );
      await era.input();
      await ss.say_and_wait([
        callname,
        ', 지금 그 자신감, 마음에 들어. 그럼 전부 네 지시에 따를게.',
      ]);
      await era.printAndWait([
        '출발 신호와 함께 ',
        ss.get_colored_name(),
        '은(는) 힘찬 발걸음을 내디뎠다. 잔디 위에 옅은 발자국을 남기며 ',
        ss.get_colored_name(),
        '은(는) 서두르지 않고 준비 운동으로 이천 미터를 달렸다.',
      ]);
      await era.printAndWait([
        '누가 보아도 눈앞의 소녀에게는 평범한 ',
        ss.uma_sex_title,
        '로는 당해 낼 수 없는 천부적인 재능이 있었다. 게다가 ',
        ss.sex,
        '는 이미 스스로 그 재능의 일부를 끌어낸 상태였다. 광맥의 표면에 드러난 금처럼, 본격적으로 파헤쳐 보지 않고서는 ',
        you.get_colored_name(),
        '조차 그 가치가 얼마나 엄청날지 알 수 없었다.',
      ]);
      await era.printAndWait(
        '그렇다 해도 강자가 즐비한 중앙에서는 재능만으로 부족하다. 충분한 훈련과 전술이 없다면, 재능은 끝내 승리로 이어지는 힘이 되지 못한다.',
      );
      await era.printAndWait([
        '그렇기에 ',
        you.get_colored_name(),
        '와(과) ',
        ss.sex,
        '에게는 해야 할 일이 있었다. ',
        ss.sex,
        '가 바라는, 승리를 거머쥘 수 있는 경주 ',
        ss.uma_sex_title,
        '로 완성하는 일이었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  perfect_beginning: (() => {
    const title = '완벽한 출발';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 메이크 데뷔에서 무난하게 승리를 거뒀다.',
      ]);
      await era.printAndWait([
        ss.sex,
        '가 결승선을 통과하는 순간, ',
        you.get_colored_name(),
        '은(는) 비로소 긴장을 풀었다. 승리를 거머쥔 ',
        ss.sex,
        '는 그대로 자신의 트레이너인 ',
        you.get_colored_name(),
        ' 앞으로 걸어왔다.',
      ]);
      await ss.say_and_wait(
        '말했잖아. 승리는 너와 나누겠다고. 이제 첫걸음은 내디뎠네.',
      );
      await era.printAndWait([
        ss.sex,
        '는 ',
        you.get_colored_name(),
        '의 손을 꼭 잡았다. 흠잡을 데 없는 얼굴에 부드러운 미소가 떠올랐다.',
      ]);
      await ss.say_and_wait([callname, ', 우리의 목표를 향해 함께 나아가자……']);
      await era.printAndWait([
        '관중들의 환호와 찬사가 두 사람 뒤에서 끊임없이 울려 퍼졌다. ',
        ss.sex,
        '에게서 경기 전의 불안한 기색은 사라지고, 기쁨만이 남아 있었다.',
      ]);
      await era.printAndWait([
        '그때 ',
        you.get_colored_name(),
        '은(는) 알아차렸다. ',
        ss.sex,
        '의 몸은 이미 땀으로 흠뻑 젖어 있었고, 축축해진 운동복 위로 균형 잡힌 몸의 윤곽이 희미하게 드러나 있었다.',
      ]);
      era.printButton(
        '「정말, 굉장히…… 멋졌어. 그래도 먼저 머리랑 몸부터 닦아야 해. 이대로 있으면 몸에 좋지 않아.」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '수건이 ',
        ss.sex,
        '의 머리 위에 얹어졌다. ',
        ss.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '이(가) 이마의 땀을 닦아 주는 것을 거부하지 않았다.',
      ]);
      await ss.say_and_wait(
        '이번 레이스는 여기까지야. 되짚어 볼 게 있다면 시간을 잡아서 알려 줘. 없다면 다음 레이스 대책과 평소 훈련에 들어가면 되겠네.',
      );
      await era.printAndWait([
        ss.get_colored_name(),
        '의 미소는 오래 머물지 않았다. ',
        ss.sex,
        '는 진지한 눈으로 ',
        you.get_colored_name(),
        '을(를) 바라보았다. 그 눈빛에는 진지함과 승부욕이 가득했다.',
      ]);
      await era.printAndWait([
        '이렇게 ',
        ss.get_colored_name(),
        '은(는) 메이크 데뷔를 마쳤다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  good_beginning: (() => {
    const title = '좋은 출발';
    /** @param {CharaTalk} ss サンデーサイレンス */
    const f = async (ss) => {
      await ss.say_and_wait(
        '역시 그랬네. 지난번에는 조금 어긋났을 뿐이야. 우리가 손을 잡은 건 잘못된 선택이 아니었어.',
      );
      await ss.say_and_wait('함께 나아가자. 우리는 이겼으니까.');
    };
    f.title = title;
    return f;
  })(),
  ws_31: (() => {
    const title = '적란운';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        '오늘은 날씨가 좋지 않았다. ',
        ss.get_colored_name(),
        '도 상당히 짜증이 난 모양이었다. 휴게실 소파 위에서 꼬리가 쉴 새 없이 흔들렸다.',
      ]);
      era.printButton('「왜 그래? 비 오는 날이 싫어?」', 1);
      await era.input();
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 단호하게 고개를 저었다.',
      ]);
      await ss.say_and_wait([
        '아니. 그냥 이런 폭우가 조금 싫을 뿐이야. 밖에서 훈련할 수 없잖아. ',
        callname,
        '은(는) 폭우가 좋아?',
      ]);
      era.printButton('「좋아해.」', 1);
      era.printButton('「좋아하지 않아.」', 2);
      await era.input();
      await ss.say_and_wait([
        '그렇구나. 난 폭우가 싫어. 그뿐이야. 사람도 ',
        ss.uma_sex_title,
        '도, 딱히 이유 없이 싫어하는 게 있잖아.',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 그렇게 말하고는 조금 진정된 듯했다. 하지만 ',
        you.get_colored_name(),
        '은(는) 느낄 수 있었다. ',
        ss.sex,
        '는 일부러 이 화제를 피하고 있었다.',
      ]);
      await ss.say_and_wait([
        '그래도 실내에서 할 수 있는 훈련은 있으니까. ',
        callname,
        ', 괜찮다면 잠깐 봐 주겠어?',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 휴게실에 있던 덤벨을 집어 들고 준비 운동을 시작했다. ',
        ss.sex,
        '는 정말로 단 일 초도 허비하고 싶지 않은 듯했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_39: (() => {
    const title = '시작·약속';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait('올해도 곧 끝나네. 시간 감각이 무뎌진 것 같아.');
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 커피잔을 두 손으로 감싸 쥐고 천천히 입을 열었다. 어느새 동복으로 갈아입은 차림이었고, 검은 타이츠가 풍만한 허벅지를 감싸고 있었다.',
      ]);
      await era.printAndWait([
        '소파에 몸을 기댄 채 검은 타이츠를 신은 발끝을 꼬리 곁으로 오므렸다. 이따금 꼬리를 발 사이에 끼워 장난치는 모습에 ',
        you.get_colored_name(),
        '은(는) 침을 삼켰다.',
      ]);
      await ss.say_and_wait([
        '응, ',
        callname,
        '. 난 만족해. 네 담당이 될 수 있어서. 아마 그게 내게는 가장 큰 행운일 거야.',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 소파에 누워 있었다. 평소의 투지 넘치는 모습과 달리 조금 나른해 보였다. 그러고는 ',
        ss.sex,
        '가 ',
        you.get_colored_name(),
        '에게는 들리지 않을 만큼 작은 목소리로 말을 이었다.',
      ]);
      await ss.say_and_wait(
        '어쩌면 그 일을 이룰 마지막 기회일지도 몰라. 반드시 해내는 것…… 가장 높은 무대에 서는 것.',
      );
      await era.printAndWait([
        '어째서인지 ',
        ss.sex,
        '는 ',
        you.get_colored_name(),
        '에게 조금 다가왔다. 가슴에 기대고 싶은 것처럼 보였다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '이(가) ',
        ss.get_colored_name(),
        '을(를) 바라보는 순간, ',
        ss.sex,
        '는 곧바로 거리를 벌리고 ',
        you.get_colored_name(),
        '의 눈조차 마주치지 않았다.',
      ]);
      await ss.say_and_wait('난 여전히 운이 좋네…… 다들.', true);
    };
    f.title = title;
    return f;
  })(),
  ws_47: (() => {
    const title = '첫걸음';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 サンデーサイレンスのマンハッタンカフェへの呼び方
     */
    const f = async (ss, you, callname, call_25) => {
      await ss.say_and_wait('출전 등록은 끝났어?');
      era.printButton('응. 다른 문제만 없다면 3관에 도전할 수 있어', 1);
      await era.input();
      await ss.say_and_wait([
        '좋아. 그러고 보니 ',
        call_25,
        ' 쪽에서 새 커피 원두를 샀길래 ',
      ]);
      await ss.say_and_wait(
        '조금 받아 왔어. 다 마시면 같이 훈련장으로 가자. 지난번에는 수영장에서 발목을 삘 뻔했지만, 이번에는 괜찮겠지.',
      );
      await era.printAndWait([ss.sex, '는 김이 피어오르는 커피를 내왔다.']);
      await ss.say_and_wait([callname, ', 날 어떻게 생각해?']);
      era.printButton('「정말 열심히 하는 좋은 아이라고 생각해.」', 1);
      await era.input();
      await ss.say_and_wait(
        '그런 뜻이 아니야. 지금 내 상태 말이야. 앞으로 같은 세대끼리 3관을 두고 경쟁할 상대들과 비교하면 어떠냐는 거야.',
      );
      era.printButton(`「네가 ${ss.couple_title}보다 강하다고 생각해.」`, 1);
      era.printButton('「아직 훈련이 더 필요하다고 생각해.」', 2);
      await era.input();
      await ss.say_and_wait([
        '어느 쪽이든, ',
        callname,
        '. 난 앞으로도 널 믿을게.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_ny_1: (() => {
    const title = '새해 포부';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, coffee, you, callname) => {
      await era.printAndWait([
        '신사에서 ',
        ss.get_colored_name(),
        '와(과) 마주친 것은 신기한 인연이었다. 특히 ',
        you.get_colored_name(),
        '이(가) ',
        ss.sex,
        '와 쏙 빼닮은 ',
        ss.uma_sex_title,
        '와 즐겁게 이야기하는 ',
        ss.sex,
        '를 보았을 때는 더욱 그랬다.',
      ]);
      await era.printAndWait([
        '마치 같은 틀에서 나온 듯 닮은 두 ',
        ss.uma_sex_title,
        '가 ',
        you.get_colored_name(),
        ' 앞에 서 있었다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 다시는 ',
        ss.get_colored_name(),
        '을(를) 헷갈려서는 안 된다는 걸 알고 있었다. 새해 첫날부터 보건실 신세라니, 너무 불길하지 않은가.',
      ]);
      await era.printAndWait([
        '다행히 ',
        ss.get_colored_name(),
        '은(는) 여전히 조금 짜증이 난 표정이었다.',
      ]);
      await era.printAndWait(
        '사람이 많은 곳이 불편한 듯했다. 그것이 가장 확실한 단서가 되었다.',
      );
      await ss.say_and_wait([
        '새해에도 잘 부탁해…… ',
        callname,
        '. 올해는 클래식급에 들어서는 해니까. 훈련 지도는 조금도 느슨해지지 않게 해 줘……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '을(를) 옆으로 끌어당기고, ',
        ss.get_colored_name(),
        '은(는) 조금 다정하게 손을 잡았다. 하지만 ',
        ss.sex,
        '의 긴장한 표정을 보니, ',
        coffee.get_colored_name(),
        '에게 그 모습을 들키고 싶지는 않은 듯했다.',
      ]);
      era.printButton('「그럼 새해에도 잘 부탁해.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '의 그 말을 듣자 ',
        ss.get_colored_name(),
        '은(는) 기쁜 듯 기모노에 손을 댔다가, 갑자기 뺨을 붉혔다.',
      ]);
      await ss.say_and_wait(
        '저기, 기모노 허리띠가 풀려서…… 좀 도와줄 수 있을까……',
      );
      await era.printAndWait([
        '말을 할수록 ',
        ss.get_colored_name(),
        '의 목소리는 작아지고, 고개도 점점 아래로 향했다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        you.get_colored_name(),
        '에게는 그런 망설임이 없었다. 순식간에 기모노를 여며 주고는, 대단한 일도 아니라는 듯 머리를 쓸어 넘겼다.',
      ]);
      await era.printAndWait([
        '그 후 ',
        ss.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '을(를) 데리고 ',
        you.get_colored_name(),
        ' 혼자서는 엄두도 못 낼 만큼 호화로운 식사를 하러 갔다. 하지만 ',
        ss.sex,
        '는 그저 ',
        you.get_colored_name(),
        '이(가) 먹는 모습을 보고 싶었던 모양이다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  kent_der_win: (() => {
    const title = '승리의 큰 무대';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {PrintedSpan} prea_sta プリークネスステークス（色付き名前）
     * @param {PrintedSpan} belm_sta ベルモントステークス（色付き名前）
     */
    const f = async (ss, coffee, you, callname, prea_sta, belm_sta) => {
      await ss.say_and_wait(['이긴 거지? ', callname, '！！！']);
      await era.printAndWait([
        ss.sex,
        '에게서는 평소의 침착함이 사라져 있었다. 어린아이처럼 들떠서는, 흥분한 채 ',
        you.get_colored_name(),
        '에게 달려들어 안겼다.',
      ]);
      await ss.say_and_wait('3관 중 첫 번째…… 우리가 정말 해낸 거지?!');
      era.printButton('고개를 끄덕인다', 1);
      await era.input();
      await ss.say_and_wait(
        '다행이야…… 정말 다행이야. 역시 너야말로 나와 가장 잘 맞는 트레이너였어',
      );
      await ss.say_and_wait([
        '앞으로…… 아직 ',
        prea_sta,
        '와(과) ',
        belm_sta,
        '이(가) 남아 있어. 내 몸은 신경 쓰지 말고 훈련량을 늘려 줘. 그래야 더 확실하게 앞서 나갈 수 있어.',
      ]);
      await coffee.say_and_wait('축하해…… 경기장에서의 모습, 정말 멋졌어.');
      await ss.say_and_wait('응……');
      await era.printAndWait([
        ss.get_colored_name(),
        '이(가) 나간 뒤, ',
        coffee.get_colored_name(),
        '은(는) 말을 이었다.',
      ]);
      await coffee.say_and_wait([
        ss.sex,
        '를 잘 부탁해. ',
        ss.sex,
        '는 언제나 마음이 여린 사람이니까. 마음을 조금 살펴 줘.',
      ]);
      await era.printAndWait([
        '이후의 인터뷰에서도 ',
        ss.sex,
        '는 ',
        you.get_colored_name(),
        '에게 칭찬을 아끼지 않았다. ',
        you.get_colored_name(),
        '은(는) 알 수 있었다. ',
        ss.sex,
        '는 기뻐하기만 하는 것이 아니라, 안도하고 있었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  we_before_prea_sta: (() => {
    const title = '한밤중의 폭풍';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        '밤이 되자, 피로를 짊어진 ',
        ss.get_colored_name(),
        '이(가) ',
        ss.sex,
        '의 방으로 돌아왔다. ',
        you.get_colored_name(),
        '이(가) 돌아가려던 바로 그때, 창밖에 장대비가 쏟아지기 시작했다.',
      ]);
      await ss.say_and_wait([
        '하필 비가 오네. ',
        callname,
        ', 여기서 조금 쉬었다 가……',
      ]);
      await era.printAndWait([
        '창밖에서 천둥이 울리고, 거센 비바람이 호텔을 두드렸다. 귀를 찢는 듯한 천둥이 지나간 뒤, 호텔 전체가 정전된 듯했다.',
      ]);
      await ss.say_and_wait([
        '잠깐…… 잠깐, 잠깐, 잠깐, 하아…… 하아…… 하아…… ',
        callname,
        '！！',
        callname,
        ', 어디 있어?!',
      ]);
      await era.printAndWait([
        '어둠 속에서 ',
        ss.sex,
        '는 한동안 ',
        you.get_colored_name(),
        '을(를) 찾지 못했다. 목소리에서는 걷잡을 수 없는 공포가 묻어났다.',
      ]);
      await ss.say_and_wait('싫어…… 혼자 두지 마…… 제발, 모습을 보여 줘……');
      await era.printAndWait([
        '번개가 번쩍이는 순간, ',
        you.get_colored_name(),
        '은(는) ',
        ss.sex,
        '의 얼굴을 똑똑히 보았다. 이전의 ',
        ss.get_colored_name(),
        '와(과)는 전혀 다른 모습이었다.',
      ]);
      await era.printAndWait([
        '어찌할 수 없는 슬픔이 ',
        ss.sex,
        '를 집어삼킬 것만 같았다. 눈에 고인 눈물은 ',
        you.get_colored_name(),
        '이(가) ',
        ss.sex,
        '에게서 한 번도 본 적 없는 것이었다.',
      ]);
      await era.printAndWait([
        '번개 덕분에 어두운 방 안에서 ',
        ss.sex,
        '는 ',
        you.get_colored_name(),
        '의 위치를 알아냈다. 거의 몸을 던지듯 ',
        you.get_colored_name(),
        '에게 달려왔다.',
      ]);
      await era.printAndWait('쿵!');
      await era.printAndWait([
        '당연하게도 ',
        ss.sex,
        '의 눈은 아직 캄캄한 방에 익숙해지지 않았다. 무언가에 걸려 바닥으로 세게 넘어졌고, 희미하게 훌쩍이는 소리가 섞여 들었다.',
      ]);
      era.printButton('「당황하지 마. 여기 있어. 지금 갈게.」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 곧바로 달려갔다. 목소리를 따라 ',
        you.get_colored_name(),
        '은(는) ',
        ss.get_colored_name(),
        '의 손을 잡았다.',
      ]);
      await era.printAndWait([
        ss.sex,
        '는 ',
        you.get_colored_name(),
        '의 손을 필사적으로 움켜쥐었다. 손가락뼈가 비명을 지르는 듯했지만, ',
        ss.get_colored_name(),
        '은(는) 그 사실조차 깨닫지 못한 것 같았다.',
      ]);
      await ss.say_and_wait(
        '괜찮아…… 괜찮아. 금방 끝날 거야. 곧 끝날 테니까…… 같이 나갈 수 있어.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ss.sex,
        '의 상태가 심상치 않다고 느껴 손을 잡고 침대에 앉혔다.',
      ]);
      await era.printAndWait([
        '창밖의 비바람이 유리창을 두드렸다. ',
        you.get_colored_name(),
        '은(는) 휴대폰을 꺼냈다. 부드러운 빛이 ',
        ss.sex,
        '의 겁에 질린 뺨을 비췄다.',
      ]);
      era.printButton(
        '「아무 데도 안 가. 여기서 함께 있을게.」(호감+50, 의욕+1……)',
        1,
      );
      era.printButton(
        '「수건을 가져올게. 금방 돌아올 테니까.」(호감+20, 의욕-1)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await ss.say_and_wait('응…… 손, 놓지 마. 부탁이야……');
        await era.printAndWait([
          ss.sex,
          '는 마침내 조금 진정했고, 잔뜩 굳어 있던 몸도 서서히 풀렸다. 그러고는 ',
          ss.sex,
          '가 ',
          you.get_colored_name(),
          '을(를) 끌어당겨 자신의 침대 가장자리에 나란히 앉혔다.',
        ]);
        await ss.say_and_wait([
          callname,
          '……정말 무서웠어…… 그때도 이렇게 ',
          ss.sex,
          '의 손을 잡고 있었는데……',
        ]);
        await ss.say_and_wait(
          '……어떻게 버텼는지 나도 모르겠어. 차가 뒤집히고……',
        );
        await ss.say_and_wait([
          '나갈 수가 없었어…… 처음에는 ',
          ss.couple_title,
          '도 말을 걸고, 달래 주고, 손을 잡아 줬는데……',
        ]);
        await ss.say_and_wait(
          '그런데…… 그런데…… 조용해졌어. 난…… 뭔가를 마셨던 것 같아…… 점점 잠이 와서…… 놓지 않겠다고 했는데……',
        );
        await ss.say_and_wait([
          '손을 놓은 건 나야…… 내가 손을 놓지만 않았어도…… ',
          ss.couple_title,
          '은 어쩌면…… 어쩌면……',
        ]);
        await era.printAndWait([
          '그것은 ',
          ss.get_colored_name(),
          '이(가) 마음 가장 깊은 곳에 묻어 둔 상처였다. 인적 드문 곳에서 사고가 났고, 어른이었던 운전자는 그 자리에서 숨졌다.',
        ]);
        await era.printAndWait([
          '차 안에 남겨진 어린 ',
          ss.uma_sex_title,
          ' 몇 명은 구조를 기다릴 수밖에 없었다. 하지만 구조는 너무 늦었다.',
        ]);
        await era.printAndWait([
          '너무 늦어서, 살아서 나올 수 있었던 것은 ',
          ss.get_colored_name(),
          '뿐이었다. ',
          ss.sex,
          '는 그 누구에게도 이 일을 이야기하지 않았다. ',
          you.get_colored_name(),
          ' 말고는.',
        ]);
        era.printButton(
          '「괜찮아. 내 손을 잡아. 놓지 않을게. 너도 놓지 않을 거라고 믿어. 함께 앞으로 나아가자.」',
          1,
        );
        await era.input();
        await ss.say_and_wait(
          '응…… 좋아…… 평생 놓지 않을게. 약속이야…… 3관을 따낼 거야…… 나…… 앞으로 나아갈게.',
        );
        await era.printAndWait([
          ss.sex,
          '의 피로가 한꺼번에 밀려오며 눈꺼풀이 무거워졌다.',
        ]);
        await era.printAndWait([
          '그런데도 ',
          ss.sex,
          '는 ',
          you.get_colored_name(),
          '을(를) 붙잡은 손만은 놓지 않았다.',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          ss.sex,
          '의 손을 고쳐 잡고, ',
          ss.sex,
          '가 조금씩 잠들어 가는 모습을 바라보았다. 졸음이 밀려왔고, ',
          you.get_colored_name(),
          '은(는) 그대로 ',
          ss.sex,
          '와 함께 밤을 보냈다.',
        ]);
        await era.printAndWait([
          '다음 날 아침. ',
          you.get_colored_name(),
          '은(는) 침대 가장자리에 앉아 벽에 기대고 있었다. 자신이 ',
          ss.get_colored_name(),
          '의 방에서 잠들었다는 걸 깨닫고 고개를 들었다.',
        ]);
        await era.printAndWait([
          ss.sex,
          '는 이미 침대에 없었다. 돌아보니 운동복으로 갈아입은 ',
          ss.get_colored_name(),
          '이(가) 세면실에서 나오고 있었다.',
        ]);
        await ss.say_and_wait([
          callname,
          ', 일어났어? 조금 더 쉴래? 오늘 훈련은 어제 네가 짜 준 계획대로 할게. 걱정하지 마. 농땡이 피우진 않을 테니까.',
        ]);
        await era.printAndWait([
          ss.sex,
          '는 신경 써 주듯 ',
          you.get_colored_name(),
          '의 관자놀이를 주물렀다. 허리가 아픈 듯한 ',
          you.get_colored_name(),
          '이(가) 걱정되는 모양이었다.',
        ]);
        await era.printAndWait([
          '그러고는 ',
          you.get_colored_name(),
          '을(를) 방까지 바래다주었다. 문이 닫히기 직전, ',
          you.get_colored_name(),
          '은(는) 묘한 한마디를 들었다.',
        ]);
        await ss.say_and_wait([
          callname,
          ', 약속이야…… 넌 손을 놓지 않을 거야. 그러니까…… 그 일을 이루고 나면, 난…… 평생 네 손을 잡아도 되는 거지?',
        ]);
      } else {
        await era.printAndWait([
          ss.sex,
          '는 다급하게 손을 뻗었다. 하지만 어둠 속에서 ',
          you.get_colored_name(),
          '은(는) 그것을 알아차리지 못했다.',
        ]);
        await era.printAndWait([
          '돌아서서 달려가 수건을 찾아온 뒤, 삐어서 움직이기 힘들어진 ',
          ss.sex,
          '의 발을 돌봐 주었다.',
        ]);
        await era.printAndWait([
          ss.get_colored_name(),
          '은(는) 짜증과 두려움이 뒤섞인 표정이었다.',
        ]);
        await ss.say_and_wait('고마워. 늦은 시간에 미안해.');
        await era.printAndWait([
          ss.sex,
          '의 목소리는 심하게 잠겨 있었다. ',
          ss.sex,
          '는 ',
          you.get_colored_name(),
          '의 소매를 붙잡고 있었다. 떠나지 않았으면 하는 모양이었다. 그래서 ',
          you.get_colored_name(),
          '은(는) 어릴 적 들었던 자장가를 흥얼거리며 ',
          ss.sex,
          '를 재웠다.',
        ]);
        era.drawLine({ content: '다음 날 아침' });
        await ss.say_and_wait(
          '어젯밤에는…… 보기 안 좋은 모습을 보였네. 미안해.',
        );
        await era.printAndWait([
          ss.sex,
          '의 눈은 조금 붉게 부어 있었다. 어젯밤에 제대로 자지 못한 것이 분명했다. ',
          you.get_colored_name(),
          '은(는) ',
          ss.sex,
          '를 재운 뒤 자신의 방으로 돌아갔기에, 그 후에 무슨 일이 있었는지는 알 수 없었다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  double_crowns: (() => {
    const title = '두 번째 왕관';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {PrintedSpan} belm_sta ベルモントステークス（色付き名前）
     */
    const f = async (ss, you, callname, belm_sta) => {
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 승부복 차림으로 결승선 근처에 서서 멍하니 하늘을 바라보다가 손을 들어 올렸다. 그 모습에 경기장이 들끓었다.',
      ]);
      await era.printAndWait([
        '새로운 두 관왕. 누구도 막을 수 없을 듯한 승자. 모두가 ',
        ss.sex,
        '에게 축하를 보내며 새로운 3관마의 탄생을 바랐다.',
      ]);
      await era.printAndWait([
        '그 모습을 본 ',
        you.get_colored_name(),
        '은(는) 먼저 휴게실로 돌아가, ',
        ss.get_colored_name(),
        '이(가) 곧 쓸 물건들을 준비했다. 수건과 따뜻한 물, 과일, 그 밖의 자잘한 물건들이었다.',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        '이(가) 들어오자 ',
        you.get_colored_name(),
        '은(는) 우선 땀부터 닦게 하려 했다. 하지만 ',
        ss.sex,
        '는 아무 말 없이 ',
        you.get_colored_name(),
        '에게 달려들어 꼭 끌어안았다.',
      ]);
      await ss.say_and_wait([
        callname,
        '……꿈은 아니지? 첫 번째 목표까지, 이제 한 경기 남은 거지?',
      ]);
      await era.printAndWait([
        ss.sex,
        '의 목소리는 무척 들떠 있었다. ',
        you.get_colored_name(),
        '은(는) ',
        ss.sex,
        '의 등을 쓰다듬으며 ',
        ss.sex,
        '의 체온을 느꼈다.',
      ]);
      era.printButton(
        `「응. 첫 번째 목표까지 이제 한 걸음 남았어. 축하해, ${ss.name}」`,
        1,
      );
      await era.input();
      await ss.say_and_wait(
        '정말…… 정말 고마워. 트레이너로서 내 훈련도, 생활도 신경 써 줬잖아. 이 승리는 너와 내가 함께 얻은 거야. 이게 내 대답이야!',
      );
      await era.printAndWait([
        ss.sex,
        '는 고개를 들었다. 황금빛 눈동자에서 빛나는 자신감은 ',
        ss.sex,
        '를 타고난 주인공처럼 보이게 했다.',
      ]);
      await ss.say_and_wait([
        '그러니까, ',
        callname,
        '. 앞으로도 잘 부탁해. ',
        belm_sta,
        ', 3관의 마지막 경기야.',
      ]);
      await era.printAndWait([
        '오늘의 축승회에서 ',
        ss.get_colored_name(),
        '은(는) 무척 행복해 보였다. 말투도 평소보다 한결 부드러웠다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  triple_crowns: (() => {
    const title = '숙원 성취!';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ss, you) => {
      era.printButton(
        `「축하해, 3관왕 ${ss.name}. 올해 가장 강한 경주 ${ss.uma_sex_title}가 되었구나.」`,
        1,
      );
      await era.input();
      await ss.say_and_wait(
        '네 덕분에…… 이제야 한숨 돌릴 수 있겠어. 솔직히…… 이 고마움을 말로 다 표현할 수가 없어.',
      );
      await ss.say_and_wait(
        '네가 내 소원을 이뤄 줬어…… 가장 높은 무대에 서게 해 줬어.',
      );
      await era.printAndWait([
        ss.sex,
        '는 ',
        you.get_colored_name(),
        '에게 고개를 숙이고 한동안 들지 않았다.',
      ]);
      await ss.say_and_wait(
        '네 도움이 없었다면 여기까지 오지 못했을 거야. 그건 잘 알고 있어…… 그러니까 앞으로는 안심할 수 있어.',
      );
      await era.printAndWait([
        ss.sex,
        '는 고개를 들고 ',
        you.get_colored_name(),
        '에게 안겼다. 경기장 밖의 열기는 곧 터질 듯한 화산 같았지만, 경기장 복도에서 ',
        ss.get_colored_name(),
        '은(는) 평소보다 훨씬 다정했다.',
      ]);
      await era.printAndWait([
        ss.sex,
        '는 살며시 ',
        you.get_colored_name(),
        '에게 기대고는 ',
        you.get_colored_name(),
        '의 몸에 바짝 붙었다. ',
        you.get_colored_name(),
        '은(는) ',
        ss.sex,
        '의 숨결이 몸에 닿는 부드러운 감촉까지 느낄 수 있었다.',
      ]);
      await ss.say_and_wait(
        '조금만, 아주 조금만 기대도 될까? 네가 늘 말없이 날 의지하게 해 줬던 것처럼. 이번에는 당당하게 기대고 싶어.',
      );
    };
    f.title = title;
    return f;
  })(),
  ws_ss_1: (() => {
    const title = '즐겁고 무더운 여름의 시작';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {number} crowns 米国三冠の勝利数
     */
    const f = async (ss, coffee, you, callname, crowns) => {
      await era.printAndWait([
        '끝없이 펼쳐진 수평선과 짙푸른 바다가 마음을 편안하게 해 주었다.',
      ]);
      await ss.say_and_wait([
        '음, 해변에서 훈련해 본 적은 없어. ',
        callname,
        ', 정말 효과가 있는 거야?',
      ]);
      era.printButton(
        '「날 믿지 못해도 트레센 학원은 믿어 줘. 선배들이 경험으로 남긴 방법이니까.」',
        1,
      );
      await era.input();
      await ss.say_and_wait(
        '그것도 그렇네. 그럼 두 달 동안 잘 부탁해. 바다에서 하는 훈련은 전혀 경험이 없으니까.',
      );
      await ss.say_and_wait([
        '웃음거리가 되거나 사고가 나면 곤란하잖아. 그런 일이 없도록 ',
        you.get_colored_name(),
        '이(가) 잘 봐 줬으면 해.',
      ]);
      await era.printAndWait([
        ss.sex,
        '는 눈을 가늘게 떴다. 차가운 겉모습을 걷어 내면, 차분하고 단정하면서도 생기 넘치는 ',
        ss.uma_sex_title,
        '가 ',
        you.get_colored_name(),
        ' 앞에 있었다.',
      ]);
      await era.printAndWait([
        '입으로는 일 초도 허비하지 말고 훈련을 빽빽하게 잡으라고 하면서도, ',
        ss.get_colored_name(),
        '은(는) 해변에서 여러 가지를 즐겁게 시도해 보고 있었다.',
      ]);
      await era.printAndWait([
        '배구와 서핑, 모래놀이. 햇살 아래에서 ',
        ss.sex,
        '의 짙은 검정 비키니는 자랑스러운 몸매를 아름답게 받쳐 주었다.',
      ]);
      if (ss.sex_code !== 1) {
        await era.printAndWait([
          '비키니에 감싸인 하얀 가슴이 흔들릴 때마다, 친척인 ',
          coffee.get_colored_name(),
          '보다 훨씬 풍만하다는 것이 느껴졌다.',
        ]);
      }
      await era.printAndWait([
        '그리고 그날 오후, ',
        you.get_colored_name(),
        '은(는) 해변 의자에 축 늘어져 엎드린 ',
        ss.get_colored_name(),
        '을(를) 보게 되었다.',
      ]);
      await ss.say_and_wait([
        '후우, ',
        callname,
        '. 날씨가 정말 덥네. 훈련은 되도록 물속이나 그늘에서 하게 해 줘. 미안해.',
      ]);
      if (crowns === 3) {
        await era.printAndWait([
          '강한 3관왕도 자연을 이길 수는 없는 모양이라고, ',
          you.get_colored_name(),
          '은(는) 생각했다.',
        ]);
      } else {
        await era.printAndWait([
          '강한 두 관왕도 자연을 이길 수는 없는 모양이라고, ',
          you.get_colored_name(),
          '은(는) 생각했다.',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  ws_christmas: (() => {
    const title = '크리스마스 준비';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, coffee, you, callname) => {
      await ss.say_and_wait(
        '으음, 크리스마스에는 트레이너에게도 선물을 해야 하는 거야?',
      );
      await era.printAndWait([
        '가정 실습실에서 ',
        ss.get_colored_name(),
        '은(는) ',
        coffee.get_colored_name(),
        '와(과) 소곤소곤 이야기하고 있었다. 둘 사이에 거울이 있는 것 같았다. 한쪽은 다른 쪽의 그림자처럼 보이기도 했다.',
      ]);
      await ss.say_and_wait([
        '알았어, 알았어. 네 말이 맞아. ',
        callname,
        '에게 줄 선물을 생각해 봐야겠네.',
      ]);
      await era.printAndWait([
        ss.sex,
        '는 돌아서서 눈을 가늘게 뜨고 ',
        you.get_colored_name(),
        '을(를) 보며 생각에 잠겼다가, 기지개를 켰다.',
      ]);
      await ss.say_and_wait([
        '뭐, 좋아. 우선 ',
        callname,
        '에게 밥을 사는 걸로 고마움을 전해야겠어.',
      ]);
      await era.printAndWait([
        '이렇게 ',
        ss.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '을(를) 식당으로 데려가 푸짐한 식사를 대접했다. 다만 ',
        ss.sex,
        '가 주문한 음식에는 부추 같은 것이 유난히 많았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_classical: (() => {
    const title = '나만의 승리';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait('정말 꿈을 꾸는 것 같네……');
      await era.printAndWait([
        ss.get_colored_name(),
        '가 고개를 들어 ',
        you.get_colored_name(),
        '을(를) 바라보았다. 눈가에 눈물이 맺혀 금방이라도 울음을 터뜨릴 것 같았다.',
      ]);
      await ss.say_and_wait([
        '만약…… ',
        callname,
        ', 네가 없었다면, 오늘 같은 성취는 얻지 못했을 거야. 이건 나만의, 너에게 바치기 위한 승리야……',
      ]);
      await era.printAndWait([
        '그렇게 말하던 ',
        ss.get_colored_name(),
        '는 지금 이곳에 아무도 없다는 것을 눈치챈 듯, 단숨에 ',
        you.get_colored_name(),
        '의 멱살을 잡고 얼굴을 맞댄 채 끌어안았다.',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ss.sex,
        '의 몸에서 뿜어져 나오는 열기와 함께 그 뜨거운 감정을 고스란히 느낄 수 있었다.',
      ]);
      await ss.say_and_wait(
        '앞으로도, 『나』와 함께 걸어가 줄래? 우리가 서로의 담당이 되기로 확신했던 그날처럼, 함께 걸어가자.',
      );
      era.printButton('「넌 내 담당인데, 내가 널 어떻게 두고 가겠어?」', 1);
      await era.input();
      await era.printAndWait([
        ss.get_colored_name(),
        '는 ',
        you.get_colored_name(),
        '을(를) 보며 어쩔 수 없다는 듯 예쁜 미간을 찌푸렸고, 검은 스타킹에 감싸인 종아리로 ',
        you.get_colored_name(),
        '의 다리를 살짝 비비적거렸다.',
      ]);
      await ss.say_and_wait([
        callname,
        ', 네가 내 뜻을 이해했든 못 했든, 난 내가 하고 싶은 대로 밀어붙일 거야.',
      ]);
      await era.printAndWait([
        '뭔가 재미있는 생각이라도 난 듯, 가볍게 ',
        you.get_colored_name(),
        '을(를) 밀어내고는 돌아서서 뒤를 돌아보았다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_ny_2: (() => {
    const title = '선데이 사일런스와 신사로';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 다정하게 ',
        you.get_colored_name(),
        '의 손을 잡아끌었다.',
      ]);
      await era.printAndWait([
        ss.sex,
        '의 화려한 검정 기모노는 ',
        ss.sex,
        '를 속세를 벗어난 듯 아름다운 여인으로 보이게 했다.',
      ]);
      await era.printAndWait([
        '그리 춥지 않은 아침, ',
        ss.sex,
        '는 직접 ',
        you.get_colored_name(),
        '의 집 문을 두드리고는 ',
        you.get_colored_name(),
        '을(를) 밖으로 끌어냈다.',
      ]);
      await ss.say_and_wait([callname, ', 추우면 손을 넣어도 돼.']);
      await era.printAndWait([
        ss.sex,
        '는 몸에 꼭 맞는 자신의 기모노를 가리켰다. 뺨에 옅은 홍조를 띤 채 ',
        you.get_colored_name(),
        '의 반응을 기다리는 듯했다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        ss.sex,
        '는 조금 서둘렀던 걸까. 유혹하는 타이밍이 영 좋지 않았다. 일 분도 지나지 않아 둘은 신사 문 앞에 서 있었다.',
      ]);
      await ss.say_and_wait([
        '아, 이제 됐어. ',
        callname,
        '처럼 목석같은 사람은 이런 분위기도 모르겠지.',
      ]);
      await era.printAndWait([
        '그대로 신사로 들어가 평소 참배할 때처럼 새전함에 동전을 넣고, 손뼉을 친 뒤 소원을 빌었다.',
      ]);
      await ss.say_and_wait([callname, ', 무슨 소원을 빌었어?']);
      era.printButton(
        '「우리 둘 다 건강하고, 걱정 없이 행복하게 살게 해 달라고.」',
        1,
      );
      await era.input();
      await era.printAndWait([
        '말을 마친 ',
        you.get_colored_name(),
        '은(는) ',
        ss.sex,
        '의 작은 손을 잡았다. 검은 레이스 장갑 너머로 전해지는 감촉이 묘했다.',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 장갑 너머로 ',
        you.get_colored_name(),
        '의 온기를 느끼고는, ',
        you.get_colored_name(),
        '의 손을 ',
        ss.sex,
        '의 기모노 안으로 넣었다.',
      ]);
      await ss.say_and_wait([
        '음, 내 소원은 비밀이야. ',
        callname,
        '이(가) 굵은 막대로 내 입을 벌리지 않는 한, 말 안 할 거야.',
      ]);
      await era.printAndWait([
        '그렇게 말하고 ',
        ss.sex,
        '는 뺨에 입을 맞춘 뒤 도망치듯 신사를 빠져나갔다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_rainy: (() => {
    const title = '폭풍 전야';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {PrintedSpan} call_25 サンデーサイレンスのマンハッタンカフェへの呼び方
     */
    const f = async (ss, coffee, you, callname, call_25) => {
      await ss.say_and_wait('또 비네…… 정말 싫은 날씨야.');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 살며시 수건을 ',
        ss.get_colored_name(),
        '의 머리에 얹었다. ',
        ss.sex,
        '는 고개를 들고, ',
        you.get_colored_name(),
        '이(가) 얼굴을 닦아 주는 것을 무척 기쁘게 받아들였다.',
      ]);
      await era.printAndWait([
        '그 얼굴을 보며 ',
        you.get_colored_name(),
        '은(는) 목욕을 마친 아기 고양이를 떠올렸다. 물론 그런 말은 절대로 입 밖에 낼 수 없었다.',
      ]);
      await era.printAndWait([
        '문을 두드리는 소리가 들렸다. ',
        you.get_colored_name(),
        '이(가) 무심코 「들어오세요」라고 답하자, ',
        coffee.get_colored_name(),
        '이(가) 문을 열었다.',
      ]);
      await coffee.say_and_wait('오랜만이야. 잘 지내?');
      await ss.say_and_wait('응, 아주 잘 지내. 특히 저 사람과 함께 있을 때는.');
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '을(를) 가리켰다.',
      ]);
      await coffee.say_and_wait(
        '올 거야? 이제 보름 남았어. 장마는 다음 달까지 계속될 것 같지만.',
      );
      await ss.say_and_wait([
        '그거 알아? 폭풍이 와도, 폭우가 쏟아져도, ',
        callname,
        '이(가) 있으면 이젠 괜찮을 것 같아.',
      ]);
      await era.printAndWait([
        coffee.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '을(를) 한 번 보고는 고개를 끄덕이고 떠났다.',
      ]);
      await ss.say_and_wait([
        '이런, 곤란하네. ',
        call_25,
        '은(는) 진지한 성격이거든. 더 곤란한 건, 나도 그렇다는 거야.',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 뒤에서 ',
        you.get_colored_name(),
        '을(를) 끌어안았다. 정말 고양이를 만난 것 같은 기분이 점점 강해졌다.',
      ]);
      await ss.say_and_wait([
        callname,
        ', 도와줄 거지? 아무래도 ',
        call_25,
        ' ',
        ss.sex,
        '는 장거리에서는 적수가 없는 천재 경주 ',
        ss.uma_sex_title,
        '니까.',
      ]);
      await era.printAndWait([
        '창밖에서 다시 장대비가 쏟아지기 시작했다. ',
        ss.get_colored_name(),
        '의 목소리는 몹시 차분했다.',
      ]);
      await era.printAndWait([
        ss.sex,
        '는 그렇게 ',
        you.get_colored_name(),
        '을(를) 끌어안은 채, 시간이 멈추기라도 한 듯 이 순간을 음미했다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_spr_win: (() => {
    const title = '빗속의 승자';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} coffee マンハッタンカフェ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     * @param {string} y_call_s プレイヤーのサンデーサイレンスへの呼び方
     */
    const f = async (ss, coffee, you, callname, y_call_s) => {
      await era.printAndWait([
        '폭우 속에서 온몸이 흠뻑 젖은 ',
        ss.get_colored_name(),
        '의 표정은 담담했다. 방금 텐노상에서 1착을 차지한 사람처럼 보이지 않았다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        ss.sex,
        '의 맞은편에서 쏟아지는 환호와 해설자의 열띤 찬사는 물결처럼 ',
        ss.sex,
        '에게 밀려왔다.',
      ]);
      await ss.say_and_wait(['해냈어…… ', callname, ', 나, 정말…… 해낸 거지?']);
      await era.printAndWait([
        '돌아보니 ',
        coffee.get_colored_name(),
        '이(가) 박수를 치고 있었다. ',
        ss.sex,
        '는 혈육을 바라보며 미소를 지었다.',
      ]);
      await era.printAndWait([
        '자신이 이기지 못했어도 ',
        coffee.get_colored_name(),
        '은(는) 아낌없이 ',
        ss.get_colored_name(),
        '에게 축하를 보냈다.',
      ]);
      await ss.say_and_wait('다행이야…… 정말…… 정말로……');
      await era.printAndWait([
        ss.sex,
        '는 모두가 보는 앞에서 ',
        you.get_colored_name(),
        '의 품으로 뛰어들었다. 주위의 놀라움이나 들뜬 반응은 신경 쓰지 않았다.',
      ]);
      era.printButton(`「${y_call_s}……조금은 편해졌어?」`, 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        ss.sex,
        '의 등을 토닥였다. ',
        ss.sex,
        '에게 묻은 물과 진흙이 ',
        you.get_colored_name(),
        '의 옷까지 적셨다.',
      ]);
      await era.printAndWait([
        '하지만 ',
        ss.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '에게 대답하지 않고, 그저 품 안에서 거친 숨을 내쉬었다.',
      ]);
      await ss.say_and_wait(
        '잠깐…… 조금만 더 진정할 시간을 줘. 네 품 안이면 돼.',
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 주위의 시선을 신경 쓰지 않고 ',
        ss.get_colored_name(),
        '을(를) 안아 휴게실로 돌아갔다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_ss_2: (() => {
    const title = '올해도 여름 합숙';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (ss, you) => {
      await era.printAndWait([
        '또 한 해가 지나, 다시 바닷가였다. ',
        ss.get_colored_name(),
        '의 수영복은 학원에서 지급한 것에서 ',
        ss.sex,
        ' 취향의 과감한 검정 비키니로 바뀌어 있었다.',
      ]);
      await era.printAndWait([
        '균형 잡힌 풍만한 몸이 ',
        you.get_colored_name(),
        ' 앞에서 흔들릴 때마다 젊은 트레이너의 가슴에 불이 붙었다. 하지만 ',
        ss.get_colored_name(),
        '은(는) 전혀 눈치채지 못한 것 같았다. 무심코 하는 몸짓에서조차 ',
        ss.sex,
        '의 매력이 흘러나왔다.',
      ]);
      await ss.say_and_wait(
        '뭘 보고 있어? 계획대로라면 이제 자리를 잡으러 가야 하는 거 아니야?',
      );
      await era.printAndWait([
        '풍만하고 탄탄한 허벅지가 움직이며 모래를 밟았다. 햇살을 받은 ',
        ss.get_colored_name(),
        '은(는) 눈부시게 아름다웠다.',
      ]);
      await era.printAndWait([
        '말을 마친 ',
        ss.get_colored_name(),
        '은(는) ',
        you.get_colored_name(),
        '의 손을 잡아 해변으로 이끌었다. 올해 여름 합숙의 훈련과 놀이가 시작되었다.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_win: (() => {
    const title = '봄과 가을의 패자';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 담담하게 이마를 닦으며 휴게실의 대형 화면에서 반복 재생되는 마지막 추입 장면을 보고 있었다.',
      ]);
      await ss.say_and_wait(
        '너와 함께 있으면 승리가 일상이 되는 것 같아…… 봄과 가을 텐노상에서 1착이라. 듣기만 해도 대단한 업적 같네.',
      );
      era.printButton(
        `「하지만 넌 해냈잖아. 그게 ${ss.name}의 실력이야. 누구보다 강한 경주 ${ss.uma_sex_title}」`,
        1,
      );
      await era.input();
      await ss.say_and_wait([
        callname,
        ', 그렇게 말하면 부끄럽잖아. 지난 몇 년 동안 가장 열심히 한 건 ',
        callname,
        '였잖아. 난 전부 기억하고 있어.',
      ]);
      await era.printAndWait([
        ss.get_colored_name(),
        '의 검은 타이츠를 신은 발끝이 ',
        you.get_colored_name(),
        '의 다리를 사이에 끼우더니, 온몸으로 ',
        you.get_colored_name(),
        '에게 매달렸다. 레이스가 끝났는데도 ',
        ss.sex,
        '의 흥분은 아직 가라앉지 않은 모양이었다.',
      ]);
      era.printButton(
        '그래도 마지막이자 가장 큰 레이스가 남아 있어. 올해의 마지막 경기야',
        1,
      );
      await ss.say_and_wait([
        '당연히 이겨야 할 승부야. 반드시 이기겠어. ',
        callname,
        '. 처음에 말한 것처럼, 우린 이길 거야. 내가 네게 승리를 가져다줄게.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  arim_kin_senior: (() => {
    const title = '';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await ss.say_and_wait('칠흑의 제왕? 해설자들이 또 이상한 소리를 하네.');
      era.printButton(
        '네 별명인가 봐. 시리즈 역사를 통틀어도 너 같은 성적은 드무니까',
        1,
      );
      await era.input();
      await ss.say_and_wait([
        '차라리 신인들에게 관심을 주면 좋을 텐데. 그런데 ',
        callname,
        ', 같이 트로피를 받으러 가지 않을래?',
      ]);
      await era.printAndWait([
        ss.sex,
        '의 갑작스러운 권유에 ',
        you.get_colored_name(),
        '은(는) 조금 당황했다.',
      ]);
      await ss.say_and_wait(
        '말 그대로야. 이건 나 혼자 거둔 승리가 아니야. 너와 내가 함께 얻은 거지.',
      );
      await ss.say_and_wait('그러니까 찬사도 함께 받자. 이건 우리의 승리니까.');
      await ss.say_and_wait(
        '칠흑의 제왕이든 뭐든, 네가 싫지 않다면 하고 싶은 대로 부르게 두자.',
      );
      await ss.say_and_wait(
        '더 좋은 별명이 있다면 알려 줘도 좋아. 네 귀에 듣기 좋다면 그걸로 충분해.',
      );
      await era.printAndWait([
        ss.sex,
        '는 미소를 지으며 ',
        you.get_colored_name(),
        '의 손을 잡고 휴게실 밖으로 이끌었다. ',
        ss.sex,
        '와 함께, 더욱 먼 미래를 향해.',
      ]);
    };
    f.title = title;
    return f;
  })(),
  play_dice: (() => {
    const title = '운을 시험해 볼래?';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        '은(는) 트럼프 카드를 꺼내 들고 ',
        you.get_colored_name(),
        '에게 손짓했다.',
      ]);
      await ss.say_and_wait([
        callname,
        ', 도둑잡기 하지 않을래? 지금은 쉬는 시간이잖아.',
      ]);
      await era.printAndWait([
        '도둑잡기는 빠르게 진행되어, 어느새 ',
        ss.get_colored_name(),
        '의 손에는 카드 두 장만 남았다.',
      ]);
      await ss.say_and_wait(['후후후, ', callname, ', 신중하게 골라 봐.']);
      era.printButton('왼쪽 카드를 뽑는다(스태미나＆지능+10)', 1);
      era.printButton('오른쪽 카드를 뽑는다(스피드+10, 스킬 Pt+20)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await ss.say_and_wait(
          '내 운이 더 좋았나 봐. 이걸로 트레이너가 담당에게 졌네. 대가로 내 밥을 가져다주지 않을래?',
        );
        await era.printAndWait([
          '결국 식당에 가서 ',
          ss.get_colored_name(),
          '이(가) 좋아하는 음식과 간식을 가져다주었다.',
        ]);
      } else {
        await ss.say_and_wait([
          '어라, ',
          callname,
          ' 쪽이 더 잘했네…… 그럼 ',
          callname,
          '은(는) 점심으로 뭐 먹고 싶어? 내가 가져올게. 가는 김에 내 기록도 재 주지 않을래?',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 흔쾌히 부탁을 받아들였다. 하지만 ',
          ss.sex,
          '는 긴 줄에 걸려 한참을 기다린 뒤, 곤란한 표정으로 도시락을 들고 돌아왔다.',
        ]);
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  enjoy_cat: (() => {
    const title = '고양이와 친해져 보기';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname サンデーサイレンスのプレイヤーへの呼び方
     */
    const f = async (ss, you, callname) => {
      await era.printAndWait([
        ss.get_colored_name(),
        '는 수풀 옆에 서서 무언가 고민하는 듯했다.',
      ]);
      await ss.say_and_wait([
        callname,
        '!! 마침 잘 왔어. 나 좀 도와줄래? 여기 새끼 고양이가 숨어 있는데, 이따가 비 올 때 비 맞고 병이라도 나면 큰일이잖아!',
      ]);
      era.printButton('「역시 일단 먹이로 유인해 봐야지.」 (근성&지능+10)', 1);
      era.printButton(
        '「선수를 쳐서, 고양이를 붙잡아 봐.」 (스태미나&파워+10)',
        2,
      );
      const ret = await era.input();
      if (ret === 1) {
        await era.printAndWait([
          ss.get_colored_name(),
          '는 그 말을 듣고 고개를 끄덕이더니, ',
          you.get_colored_name(),
          '의 어이없어하는 눈빛을 뒤로한 채 빵으로 고양이를 꾀어내려 했다. ',
        ]);
        await era.printAndWait([
          '하지만 보나 마나 ',
          ss.sex,
          '의 방법은 씨알도 먹히지 않았다.',
        ]);
        await you.say_and_wait('내가 해볼게, 마침 간식거리를 좀 챙겨왔거든.');
        await era.printAndWait([
          '소시지 하나를 수풀 앞에 내려놓자, 아기 고양이가 경계하며 고개를 빼꼼 내밀었다. 인간 두 명을 발견하곤 번개같이 쏙 들어갔지만, 굶주림이 이성을 이겼는지 결국 참지 못하고 튀어나와 소시지를 물었다. 그러다 그만 ',
          ss.get_colored_name(),
          '의 손에 덥석 붙잡히고 말았다.',
        ]);
      } else {
        await ss.say_and_wait('그것도 그렇네, 이럴 땐 내 특기를 발휘해야지.');
        await era.printAndWait([
          ss.get_colored_name(),
          '는 기지개를 켜며 눈매를 날카롭게 빛냈다. 천천히 수풀을 헤치고 들어가자, 바짝 긴장한 채 털을 곤두세운 새끼 고양이가 보였다.',
        ]);
        await ss.say_and_wait('꽤나 경계하고 있네... 하지만 이 정도라면.');
        await era.printAndWait([
          ss.sex,
          '는 재빠르게 손을 뻗어 고양이의 목덜미를 낚아챘다. 방금 전까지만 해도 ',
          ss.get_colored_name(),
          '를 위협하려던 고양이는 순식간에 얌전해져서, ',
        ]);
        await era.printAndWait([
          '대롱대롱 매달린 채 얌전히 ',
          ss.get_colored_name(),
          '의 손안에 들어왔다.',
        ]);
      }
      await era.printAndWait([
        '고양이를 붙잡은 후, ',
        ss.get_colored_name(),
        '는 녀석을 휴게실 근처로 데려왔고, 창밖으로 쏟아지는 비를 보며 미소 지었다.',
      ]);
      await ss.say_and_wait(
        '이 억수 같은 비에 홀딱 젖었으면, 넌 정말 큰일 났을 거야, 꼬맹아.',
      );
      await era.printAndWait([
        '새끼 고양이는 사료에 코를 박고 허겁지겁 먹느라 ',
        ss.get_colored_name(),
        '의 말에 신경 쓸 겨를조차 없었다.',
      ]);
      await ss.say_and_wait('이따가 동물 병원에 데려가 봐야겠다...');
      await era.printAndWait(
        '그리고 이 새끼 고양이는 그 길로 구충제 투여와 중성화 수술까지 받게 되었고, 트레센으로 돌아왔을 땐 이미 세상 다 산 듯한 해탈한 표정이 되어 있었다.',
      );
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  sugar_or_milk: (() => {
    const title = '커피는 어떤 맛이 좋아?';
    /**
     * @param {CharaTalk} ss サンデーサイレンス
     * @param {CharaTalk} you プレイヤー
     * @param {string} call_25 サンデーサイレンスのマンハッタンカフェへの呼び方
     */
    const f = async (ss, you, call_25) => {
      await ss.say_and_wait('커피에 설탕? 우유? 아니면 아무것도 넣지 않을래?');
      era.printButton('「뭐라고?」', 1);
      await era.input();
      await ss.say_and_wait([
        '네 커피 말이야. 설탕이 좋아, 우유가 좋아? ',
        call_25,
        ' ',
        ss.sex,
        '에게 커피 내리는 법을 조금 배웠어. 지금 맛을 봐 줬으면 해. 뭘로 할래?',
      ]);
      era.printButton('「역시 각설탕을 듬뿍 넣어 줘.」(스태미나+20)', 1);
      era.printButton('「우유를 넣어도 좋을 것 같아.」(지능+20)', 2);
      const ret = await era.input();
      await ss.say_and_wait('그래? 그럼 맛봐. 내가 내린 커피, 어때?');
      await era.printAndWait([
        '입안에 감도는 느낌도 달콤함도 아주 좋았다. 처음 커피를 내리는 초보자의 솜씨라고는 믿기지 않았다. ',
        you.get_colored_name(),
        '의 얼굴을 본 ',
        ss.get_colored_name(),
        '은(는) 기분 좋게 입꼬리를 올렸다.',
      ]);
      await ss.say_and_wait(
        '맛있다면 다음에도 가져올게. 부족한 점이 있으면 바로 말해 줘.',
      );
      await era.printAndWait([
        '이렇게 ',
        ss.get_colored_name(),
        '은(는) 휴게실의 음료 공급을 독점하게 되었다.',
      ]);
      return [ret];
    };
    f.title = title;
    return f;
  })(),
};
