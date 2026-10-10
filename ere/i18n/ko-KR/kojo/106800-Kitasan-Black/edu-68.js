/**
 * @file キタサンブラック - 育成
 * @author 小黑
 */
const era = require('#/era-electron');

const recruit_flags = require('#/data/event/recruit-flags');

module.exports = {
  ts_add: (() => {
    const title = '추가 자율 트레이닝!';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, callname) => {
      await era.printAndWait([
        '훈련이 끝난 후에도, ',
        kita.get_colored_name(),
        '은 여전히 의욕이 넘치는 듯 보였다.',
      ]);
      await era.printAndWait([
        kita.sex,
        '는 저 멀리 지평선을 바라보았다. 석양이 지고 마지막 잔광이 대지를 적시고 있었다.',
      ]);
      await era.printAndWait(
        '곧 날이 어두워지겠지만, 아직 부족하다. 아직 한계에 도달하지 않았다.',
      );
      era.printButton('「계속 훈련하자!」', 1);
      era.printButton('「오늘은 여기까지 하자.」', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kita.say_and_wait([
          '알겠어요! 그럼 ',
          callname,
          ', 제대로 지켜봐 주세요!',
        ]);
      } else {
        await kita.say_and_wait(
          `그렇구나, 네~ 그럼 푹 쉬고 내일 또 단련할게요!`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  train_fail: (() => {
    const title = '몸을 소중히!';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`아야야야…… 삐었어요……`);
      await era.printAndWait(
        `보건실 의자에 앉은 ${kita.name}은 발목에 감은 찜질팩을 손끝으로 건드리며 못마땅한 듯 입을 삐죽였다.`,
      );
      await era.printAndWait(
        `오늘은 쉴 수밖에 없다고 ${you.name}은(는) ${kita.name}에게 말했다.`,
      );
      await kita.say_and_wait(`쉬어야 한다니…… 분해요……`);
      await kita.say_and_wait(
        `하지만 ${callname}이(가) 그렇게 말씀하시면 따를 수밖에 없겠죠……`,
      );
      await era.printAndWait(
        `${kita.name}은 몸을 돌려 이불을 둘둘 감고 눈을 감더니 잠들기 시작했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  train_fumble: (() => {
    const title = '무리는 금물!';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await kita.say_and_wait(`아얏…… 이번에는 조금 심각할지도……`);
      await era.printAndWait(
        `${kita.name}은 보건실 침대에 앉아 허리를 짚고 얼굴을 잔뜩 찌푸리고 있었다.`,
      );
      await era.printAndWait(
        `오늘은 쉴 수밖에 없다고 ${you.name}은(는) ${kita.name}에게 말했다.`,
      );
      await kita.say_and_wait(
        `네, 쉬라고요? 하지만…… 지금 다들 트레이닝하고 있잖아요……?`,
      );
      await kita.say_and_wait(
        `제가…… 쉬어도 괜찮을까요? 가벼운 메뉴라도 좋으니까 쉬고 싶지 않아요……`,
      );
      await era.printAndWait(
        `${you.name}은(는) 키타의 부어오른 곳을 살폈다. 아무리 봐도 휴식 외에는 답이 없다. 쉬지 않으면 오히려 악화될 것이다.`,
      );
      await kita.say_and_wait(
        `……그렇겠죠. 그럼 마음을 다잡고 푹 쉴 수밖에 없겠네요……`,
      );
      await era.printAndWait(
        `${kita.name}은 조금 쓸쓸한 표정으로 이불 속에 들어가 멍하니 천장을 바라보았다.`,
      );
      await kita.say_and_wait(
        `보건실은 이렇게 조용한 곳이었군요…… 조금 쓸쓸하네요……`,
        true,
      );
    };
    f.title = title;
    return f;
  })(),
  race_win: (() => {
    const title = '레이스 승리!';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`${callname}! 저, 이겼어요!`);
      await kita.say_and_wait(
        `보러 와 주신 여러분도 기뻐하시는 것 같아서 정말 다행이에요!`,
      );
      await era.printAndWait(
        `기쁜 듯 꼬리를 흔들며 ${kita.name}은 즐거운 표정을 지었다.`,
      );
      await era.printAndWait(
        `아까 키타가 고향의 아버지와 통화하는 것을 보았다. 칭찬을 듬뿍 받았고, 아버지는 저녁에 술로 축하하시겠다고 했다.`,
      );
      await era.printAndWait(
        `그럼 오늘은 주스로 축하하자며 ${you.name}은(는) 음료를 꺼내 주스 두 잔을 따랐다.`,
      );
      await kita.say_and_wait(`신난다, ${callname}, 건배!`);
      await era.printAndWait(
        `종이컵을 맞부딪치고 손목에 튄 주스 따위는 신경도 쓰지 않은 채 ${kita.name}은 승리를 기뻐했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_end_5: (() => {
    const title = '레이스 입상!';
    /**
     * 汎用・入着
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `대기실에서 ${kita.name}은 물을 벌컥벌컥 마시고 길게 숨을 내쉬었다.`,
      );
      await kita.say_and_wait(
        `푸하~ 한결 살겠네요! 고마워요, ${callname}……네? 왜 그런 표정이세요?`,
      );
      await era.printAndWait(
        `걱정스러운 표정의 ${you.name}을(를) 보고 ${kita.name}은 헤헤 웃으며 뚜껑을 닫았다.`,
      );
      await kita.say_and_wait(
        `우승을 못 했을 뿐이에요. ${callname}, 너무 걱정하지 마세요.`,
      );
      await kita.say_and_wait(
        `키타도 분하지만, 다음에는 두 배로 노력해서 꼭 이길 거예요!`,
      );
      await era.printAndWait(
        `오히려 이쪽을 위로해 주는 검은 ${kita.uma_sex_title}를 보며 ${
          you.name
        }은(는) 안도하는 동시에 마음 깊이 다짐했다.`,
      );
      await era.printAndWait('다음에는 반드시 이기겠다고.');
    };
    f.title = title;
    return f;
  })(),
  race_end_10: (() => {
    const title = '레이스 패배!';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `대기실에서 ${kita.name}의 휴대전화가 쉴 새 없이 울리고 있었다.`,
      );
      await kita.say_and_wait(
        `반 친구들이 격려해 주는 메시지예요. 다음에는 꼭 만회할 거라고 ${kita.sex}가 그러네요.`,
      );
      await kita.say_and_wait(
        `상점가 아주머니한테도 왔어요. 다음에도 응원하러 오신대요.`,
      );
      await era.printAndWait(
        `화면의 빛이 키타의 얼굴을 비췄다. ${you.name}은(는) 그 얼굴에 침울한 기색이 조금도 없다는 것을 알아차렸다.`,
      );
      await era.printAndWait(
        `오히려 이미 마음을 추스른 사람만이 지을 수 있는 표정이었다.`,
      );
      await kita.say_and_wait(
        `이렇게 많은 분이 응원하고 격려해 주시잖아요. 그런데 제가 풀이 죽어 있을 수는 없죠!`,
      );
      await kita.say_and_wait(`${callname}, 돌아가면 두 배로 트레이닝해요!`);
      await era.printAndWait(
        `그렇게 말하며 일어선 키타는 아까보다도 기운차 보였다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  race_lose: (() => {
    const title = '레이스 패배!';
    /** @param {CharaTalk} kita キタサンブラック */
    const f = async (kita) => {
      await kita.say_and_wait('으으으으…… 또 져 버렸어요……');
      await era.printAndWait(
        '축 처진 키타는 빨대로 주스에 거품을 만들며 시무룩한 표정을 짓고 있었다.',
      );
      await kita.say_and_wait('분하다…… 다음에는 꼭 만회할 거예요……');
    };
    f.title = title;
    return f;
  })(),
  we_beginning: (() => {
    const title = '키타산 블랙 등장';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        '새 학기를 앞둔 마지막 날. 봄볕이 기분 좋은 날이었다.',
      );
      await era.printAndWait(
        `트레센에서는 선수 생활의 시작이 이토록 좋은 날씨와 겹쳐 ${kita.uma_sex_title}들도 기분이 좋았다.`,
      );
      await era.printAndWait(
        `그 화창한 날, ${you.name}은(는) 옷매무새를 가다듬고 인사말을 생각하며 담당과 함께 삼 년을 달려 나갈 준비를 했다.`,
      );
      await era.printAndWait(`그리고 ${kita.sex}의 이름은————`);
      await kita.say_and_wait(`잘 부탁드립니다! ${callname}！`);
      await era.printAndWait(
        `키타산 블랙은 조직원처럼 벌떡 일어나 ${you.name}에게 깊이 고개를 숙였다. 짧고 검은 머리카락이 커다란 동작에 맞춰 흔들렸다.`,
      );
      await era.printAndWait(
        `건강해 보이는 그 모습에 ${you.name}은(는) 만족스럽게 고개를 끄덕였다. 튼튼한 몸은 승리의 결실을 맺기 위한 토대이며, 매일의 단련은 그 위에 쌓인다.`,
      );
      await era.printAndWait(
        `이 몸만 보아도 ${
          you.name
        }은(는) ${kita.teen_sex_title}의 힘을 믿을 수 있었다.`,
      );
      await era.printAndWait(
        '햇살이 내리쬐는 트레이닝장은 눈부셨고, 푸른 잔디 코스의 냄새가 가슴을 뛰게 했다.',
      );
      await era.printAndWait(
        `한창 사춘기인 ${kita.uma_sex_title}와 어떻게 지낼지, 앞으로의 트레이닝 메뉴와 출주 일정은 어떻게 짤지, 패배한 뒤에는 담당을 어떻게 대할지. 그런 일은 미래의 자신에게 맡기자.`,
      );
      await era.printAndWait(
        `지금 ${you.name}은(는) 코스에서 ${kita.name}이 달리는 모습을 지켜보기만 하면 된다. 그것으로 충분하다!`,
      );
      await kita.say_and_wait(
        `그럼 ${callname}, 달릴게요! 제대로, 똑똑히 지켜봐 주세요!`,
      );
      await era.printAndWait(
        `축제 그 자체 같은 ${kita.uma_sex_title}는 코스에 서서 ${
          you.name
        }에게 손을 흔들고는 몸을 낮췄다. 작은 몸에 힘을 모아 ${
          you.name
        }의 앞에서 아낌없이 첫발을 내디뎠다.`,
      );
      await era.printAndWait(
        `가슴을 울리는 발걸음. 축제 같은 열기. 아침에 피어나는 나팔꽃처럼 ${you.name}의 앞에서 활짝 피어났다.`,
      );
      await era.printAndWait(`이렇게 ${kita.name}의 이야기가 시작되었다.`);
    };
    f.title = title;
    return f;
  })(),
  ws_beginning: (() => {
    const title = (kita) => `지극히 평범한 ${kita.teen_sex_title}`;
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`${callname}! 오늘도 잘 부탁드려요!`);
      await era.printAndWait(
        `${you.name}에게 깊이 인사한 뒤 ${kita.name}은 울타리를 가볍게 넘고 아기 사슴처럼 뛰어 코스에 들어가 오늘의 트레이닝을 시작했다.`,
      );
      await era.printAndWait(
        `${kita.name}과 함께 단련하면서 트레이너인 ${you.name}은(는) 담당의 기본 역량을 대략 파악했다.`,
      );
      await era.printAndWait(
        `우선 가장 중요한 점은 ${kita.name}의 몸이 상당히 튼튼하다는 것이다.`,
      );
      await era.printAndWait(
        `코스에 들어온 지 이십 분도 지나지 않아 원래 삼십 분은 걸릴 것으로 예상했던 준비 운동을 ${kita.name}은 끝냈다.`,
      );
      await kita.say_and_wait(
        `${callname}, 준비 운동 끝났어요. 다음 메뉴는 뭔가요!?`,
      );
      await kita.say_and_wait(
        '스피드 트레이닝? 스태미나 트레이닝? 어느 쪽이든 괜찮아요.',
      );
      await era.printAndWait(
        `준비 운동으로 볼이 살짝 붉어진 ${kita.uma_sex_title}가 코스에 서서 이쪽을 향해 큰 소리로 물었다.`,
      );
      await era.printAndWait(
        `두 번째. ${kita.sex}는 계획을 세우는 데 아주 서툴다.`,
      );
      await era.printAndWait(
        '트레이닝 도중 한눈을 파는 것은 아니다. 좋게 말하면 그때그때 상황에 맞춰 움직일 줄 안다.',
      );
      await era.printAndWait(
        `하지만 ${
          kita.name
        }이라는 ${kita.uma_sex_title}는 자신의 조건을 토대로 작전이나 계획을 짜는 유형은 아니다.`,
      );
      era.println();

      era.printButton('「키타에게 맞는 달리기를 알아보는 트레이닝이야.」', 1);
      await era.input();
      await era.printAndWait(
        `그렇게 말하며 ${you.name}은(는) 노트로 시선을 돌렸다. 그리고 가장 큰 문제가 남아 있다.`,
      );
      await kita.say_and_wait(
        '적성을 알아보는 거군요? 알겠어요! 전력을 보여 드릴게요!',
      );
      await era.printAndWait(
        '의욕에 찬 키타는 꼬리를 흔들며 흰 페인트로 그어진 출발선 뒤로 가볍게 뛰어갔다.',
      );
      await era.printAndWait(
        `귀가 울릴 만큼 큰 출발 신호와 함께 검은 ${kita.uma_sex_title}는 첫발을 내디디고 앞으로 달려 나갔다.`,
      );
      await era.printAndWait(
        `짙은 색 운동화가 잔디에 얕은 발자국을 남겼고, ${kita.name}은 자세를 낮춰 큰 보폭으로 앞서 나갔다.`,
      );
      await era.printAndWait(
        `이것이 대열이라면 ${kita.sex}는 선행 주자 중에서도 앞쪽에 있을 것이다.`,
      );
      era.println();

      era.printButton('「하지만……」', 1);
      await era.input();
      await era.printAndWait(
        `하지만 확실하게 승리를 거머쥘 무기는 보이지 않는다.`,
      );
      await era.printAndWait(
        `${
          you.name
        }은(는) 불안한 시선으로 키타의 칠흑 같은 그림자를 쫓으며 ${kita.teen_sex_title}의 작은 몸속에 숨겨진 재능을 찾았다.`,
      );
      await era.printAndWait(
        `${kita.sex}의 기본 역량은 나무랄 데 없다. 하지만 중앙에는 실력자가 넘쳐난다. ${kita.sex}들을 뛰어넘을 무기가 없다면……`,
      );
      await kita.say_and_wait('후, 후, 후……');
      await era.printAndWait(
        `${
          you.name
        }은(는) ${kita.teen_sex_title}의 고른 호흡을 살폈다. 희고 탄탄한 다리가 잔디 위에 멋진 선을 그리며 ${
          kita.sex
        }의 모습이 ${you.name}의 망막 위로 점점 가까워졌다.`,
      );
      await era.printAndWait('기본 역량만으로는 멀리 갈 수 없다.');
      await era.printAndWait(
        `${you.name}은(는) 스톱워치를 멈췄다. 중상위권 정도의 기록이었다.`,
      );
      await era.printAndWait(
        `${kita.name}에게 ${kita.sex}만의 무기를 찾게 해 주어야 한다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win: (() => {
    const title = '처음으로!';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `${kita.name}이 결승선을 통과한 순간 ${you.name}은(는) 길게 숨을 내쉬었다. 치솟았던 심장이 그제야 제자리로 돌아왔다.`,
      );
      await era.printAndWait(
        `담당의 기본 역량을 믿고 있다. ${kita.sex}가 이길 수 있다는 확신도 있다.`,
      );
      await era.printAndWait(
        `그래도 정말로 우승하기 전까지 ${you.name}은(는) 무사히 이길 수 있을지, 그리고 자기 자신을 조금 의심하고 있었다.`,
      );
      await era.printAndWait(
        `이제 승부는 끝났다. 비틀거리며 이쪽으로 달려오는 담당을 보고 ${you.name}은(는) 수건과 물을 들고 다가갔다.`,
      );
      await kita.say_and_wait(
        `${callname}! 저…… 이겼죠! 이긴 거죠! 정말 이겼죠!`,
      );
      await era.printAndWait(
        `뜨거운 열기와 함께 바짝 다가온 ${kita.name}은 애타는 표정으로 ${you.name}에게 물었다.`,
      );
      await kita.say_and_wait('꿈이 아니죠!');
      era.println();

      era.printButton('「이겼어, 키타.」', 1);
      await era.input();
      await era.printAndWait(
        `경기장을 가득 채운 함성과 찬사를 들으며 ${you.name}은(는) 승리에 목말랐던 담당에게 그렇게 대답했다.`,
      );
      await era.printAndWait(
        `자신의 열정과 의지를 모두에게 전하고 싶었던 ${kita.name}은 이번 승리로 그것을 확실하게 전했다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 지켜보는 사이, 담당의 얼굴은 팽팽한 초조함에서 벗어나 평소의 따뜻한 미소를 되찾았다.`,
      );
      await kita.say_and_wait(
        `헤에…… 어쩐지 실감이 안 나요. 아직 머릿속이 텅 비어 있어요.`,
      );
      await era.printAndWait(
        `키타답다고 ${you.name}은 감탄하며 시선을 돌렸다. 그제야 키타의 옷이 땀에 흠뻑 젖어 완전히 비치고 있다는 것을 알아차렸다.`,
      );
      await kita.say_and_wait(`우와앗~ ${callname}！？`);
      await era.printAndWait(
        `위험해…… 변변치 못한 생각이 떠오르기 전에, ${you.name}은(는) 재빨리 수건을 펼쳐 키타에게 둘러 주고 ${kita.sex}의 몸을 꼼꼼히 가렸다.`,
      );
      await era.printAndWait(
        '???「오후 첫 번째 레이스가 종료되었습니다. 멋진 레이스였습니다.」',
      );
      await era.printAndWait(`???「그럼 다음 레이스는……」`);
      await era.printAndWait(
        `이렇게 ${kita.name}의 메이크 데뷔는 막을 내렸다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  begin_race_win_after: (() => {
    const title = '처음으로……';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await kita.say_and_wait('저…… 이겼어요? 이번에는 정말 이긴 거예요……?');
      await era.printAndWait(
        `결승선 너머에서 ${kita.name}은 크게 숨을 내쉬며 눈앞의 사실을 믿을 수 없다는 표정을 지었다.`,
      );
      await era.printAndWait(
        `한참 그 자리에 서 있던 끝에 드디어 ${you.name}의 담당은 웃었다.`,
      );
      await kita.say_and_wait('저, 이겼어요……');
      await era.printAndWait(
        `${kita.uma_sex_title}들과 경기장 출구를 향해 걸어가며 ${
          kita.name
        }은 승리의 미소를 지었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_38: (() => {
    const title = '나이스 네이처 등장';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, nature, you, callname) => {
      await era.printAndWait('시월 후반 어느 날 오전.');
      await era.printAndWait(
        `메이크 데뷔로부터 석 달 반이 지났다. ${you.name}와(과) 키타는 평소처럼 코스에서 병주 트레이닝을 하고 있었다.`,
      );
      await era.printAndWait(`오늘의 병주 상대는……`);
      await kita.say_and_wait(`아, 네이처 ${nature.adult_sex_title}！`);
      await nature.say_and_wait(
        `야호~ ${callname}, 나 왔어~ 키타, 많이 기다렸어?`,
      );
      await era.printAndWait(
        `손을 흔들며 천천히 달려온다. 시간이 빈 네이처 씨는 나른하게 실실 웃으며 키타와 잡담을 나누기 시작했다.`,
      );
      await era.printAndWait(
        `오늘의 메뉴는 악조건을 견디는 훈련. 내용은 두 사람이 더트 코스에서 함께 달리는 것이다.`,
      );
      await era.printAndWait(
        `${kita.name}에게 더트 적성은 없다. 그렇기에 단련이 될 것이다.`,
      );
      await kita.say_and_wait(
        `오늘 잘 부탁드려요, 네이처 ${nature.adult_sex_title}！`,
      );
      await nature.say_and_wait(
        `그렇게 격식 차리지 않아도 돼. 그냥 네이처라고 불러~`,
      );
      await era.printAndWait(
        `십 분쯤 가볍게 몸을 푼 뒤 ${nature.name}와 ${kita.name}은 차례로 코스에 들어가 오늘의 트레이닝을 시작했다.`,
      );
      era.drawLine({ content: '잠시 후' });
      await era.printAndWait(`결과부터 말하자면 그리 좋지 않았다.`);
      await nature.say_and_wait(`우와~ 키타, ${you.name}, 괜찮아~? 다리는?`);
      await kita.say_and_wait(
        `하아, 하아…… 괘, 괜찮아요…… 네이처 ${nature.adult_sex_title}！`,
      );
      await nature.say_and_wait(`그러니까 그냥 네이처라고 해도 된다니까……`);
      await era.printAndWait(
        `${nature.name}의 부축을 받으며 더트 코스에서 넘어진 ${kita.name}은 코스를 나와 누가 봐도 억지스러운 미소를 지었다.`,
      );
      await era.printAndWait(
        `담당이 너무 힘을 준 탓일까, 트레이너가 짠 메뉴가 잘못된 탓일까. 키타는 트레이닝을 마치고 크게 넘어졌다.`,
      );
      await era.printAndWait(
        `트레이닝 자체는 효과가 있다. 하지만 정규 메뉴 이외의 근성 트레이닝은 한동안 그만두는 편이 좋겠다.`,
      );
      await era.printAndWait(
        `무리해서 일어나 이쪽으로 다가오는 ${kita.name}을 보고 ${you.name}은(는) 노트의 해당 항목에 크게 가위표를 쳤다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sa_42: (() => {
    const title = '느긋한 오후';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `수업도 훈련 계획도 없던 어느 오후, ${you.name}은(는) 식당 옆 쪽문 근처에서 키타산을 발견했다.`,
      );
      await kita.say_and_wait(`아~ ${callname}, 안녕하세요!`);
      await era.printAndWait(
        '키타산은 캔음료 박스 두 개를 번쩍 들고, 꼬리를 살랑거리며 이쪽을 향해 인사했다.',
      );
      await era.printAndWait(
        `${
          you.name
        }은(는) ${kita.teen_sex_title}의 뒤를 보았다. 평소에는 닫혀 있는 식당 뒷문을 막대로 받쳐 놓았고, 음료 상자 일곱여덟 개가 산처럼 쌓여 있었다…… 뭘 하는 걸까.`,
      );
      await kita.say_and_wait(
        '아, 식당 매점 아주머니께서 음료 상자를 옮기다가 허리를 삐끗하셨거든요. 그래서 제가 대신 창고까지 옮겨 드리려고요.',
      );
      await kita.say_and_wait(
        `에헤헤…… ${callname}께 이런 모습을 들키다니, 조금 부끄럽네요……`,
      );
      await era.printAndWait(
        `${you.name}의 놀란 얼굴을 보고, ${kita.name}은 쑥스러운 듯 에헤헤 웃으며 상자로 얼굴을 가렸다.`,
      );
      await kita.say_and_wait(
        `${callname}, 나중에 다시 이야기해요! 저 마저 옮겨야 해서요.`,
      );
      await era.printAndWait(
        '그렇게 말하며 키타산은 박스 몇 개를 겹쳐 들고는, 아주 가뿐하게 쪽문 안으로 들어갔다.',
      );
      await era.printAndWait(
        `${you.name}은(는) 키타산의 작지만 듬직한 뒷모습을 보며, 묘한 생각에 잠겼다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  oc_47_1: (() => {
    const title = '새해 포부';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `신사의 토리이 옆 구석에서, ${you.name}은(는) 열의에 가득 찬 ${kita.name}을 발견했다. 꽤나 오랫동안 ${you.name}을(를) 기다린 듯한 기색이었다.`,
      );
      await kita.say_and_wait(`${callname}, 올해도 잘 부탁드려요! 에헤헤~`);
      await era.printAndWait(
        `${kita.name}은 ${you.name}에게 인사하며 타다닥 달려왔다. 작은 부츠가 돌바닥에 경쾌한 소리를 냈다.`,
      );
      await era.printAndWait(
        '클래식급 한 해가 무사히 지나가기를 비는 연례행사에 잔뜩 들뜬 모양이다.',
      );
      await kita.say_and_wait(
        '그럼 올해도 잘 풀리도록 얼른 신사에서 참배해요!',
      );
      await era.printAndWait(
        `짙은 색 유카타를 입은 ${kita.name}은 귀여운 말 귀를 움직이며 소매를 잡아당기고 웃으며 재촉했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 키타의 머리를 쓰다듬고 ${kita.sex}와 나란히 신전의 떠들썩한 소리를 들으며 이끼 낀 긴 돌계단을 올랐다.`,
      );
      await era.printAndWait('타닥, 타닥, 타닥……');
      await era.printAndWait(
        `두 사람의 조용하고 단조로운 발소리를 들으며 ${you.name}와(과) ${kita.name}은 모서리가 닳은 여든여덟 계단을 밟았다.`,
      );
      await era.printAndWait(
        `앞서 서두른 ${kita.teen_sex_title}을(를) 따라 마지막 몇 계단을 넘자 눈앞에는 웃음소리로 가득한 풍경이 펼쳐졌다.`,
      );
      await kita.say_and_wait(
        '우하하~ 도쿄 신사도 고향 신사랑 별로 다르지 않네요~',
      );
      await era.printAndWait(
        `${kita.name}은 장식 등롱이 늘어선 길을 지나 새전함 앞으로 가볍게 뛰어가 진지하게 손뼉을 두 번 치고 인사했다.`,
      );
      await kita.say_and_wait(
        '으음…… 내년 삼월에는 팬 수가 충분해서 레이스에 나갈 수 있게 해 주세요. 여러분, 꼭 보러 와 주세요……',
      );
      await era.printAndWait(
        `${kita.uma_sex_title}가 작게 소원을 비는 것을 들으며 ${
          you.name
        }도 손뼉을 치고 기도하기 시작했다.`,
      );
      era.printButton('（키타산이 더 빠르게 달릴 수 있기를）', 1);
      era.printButton('（키타산이 더 긴 레이스를 견딜 수 있기를）', 2);
      era.printButton('（키타산이 더 많은 기술을 익힐 수 있기를）', 3);
      return [await era.input()];
    };
    f.title = title;
    return f;
  })(),
  ws_47_7: (() => {
    const title = '가족은 소중해';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `어느 날 오전, ${you.name}은(는) ${kita.name}과 트레이너실에 있었다.`,
      );
      await era.printAndWait(
        `트레이닝 일정이 없어 키타는 심심한 듯 소파에 엎드려 고향에 전화를 걸고 ${you.name}이(가) 내일의 트레이닝 계획표를 정리하기를 기다리고 있었다.`,
      );
      await kita.say_and_wait(`응? 요즘 그런 일도 있었어? 대단하다……`);
      await kita.say_and_wait(`우헤헤. 엄마도 다들 너무 응석 받아 주지는 마.`);
      await era.printAndWait(
        `고향 식구들과 즐겁게 통화하는 ${kita.name}을 보며 ${you.name}은(는) 문득 키타의 어머니가 궁금해졌다.`,
      );
      await era.printAndWait(`${kita.name}의 어머니는 어떤 분일까.`);
      await kita.say_and_wait(`네, 저희 엄마요?`);
      await era.printAndWait(
        `호기심을 참지 못한 ${you.name}은(는) 키타가 전화를 끊자 먼저 물었다.`,
      );
      await kita.say_and_wait(
        `뭐라고 할까, 음…… 어떤 분이냐고 하시면, 아주 평범한 분이랄까요.`,
      );
      await kita.say_and_wait(
        `엄마도 은퇴한 우마무스메고 체격도 정말 좋으신데, 일상은 평범해요. 딱히 특별할 건 없다고 할까요.`,
      );
      await kita.say_and_wait(
        `아, 하지만 엔카는 잘 부르세요. ${callname}, 기회가 있으면 같이 들어 보실래요?`,
      );
      await era.printAndWait(
        `${kita.name}은 ${kita.sex}와 어머니의 일상을 들려주었고, ${you.name}은(는) 어느새 키타의 가족을 만날 날을 기대하게 되었다.`,
      );
      await era.printAndWait(
        `정신을 차려 보니 ${you.name}의 트레이닝 계획표도 완성되어 있었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_10: (() => {
    const title = '악의 없는 작은 장난';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `화이트데이. ${you.name}은(는) 이른 아침부터 잔디 코스에서 ${kita.name}을 기다리고 있었다.`,
      );
      await kita.say_and_wait(`${callname}! 일찍 오셨네요~`);
      await era.printAndWait(
        `얼마 기다리지 않아 키타가 잔디를 밟으며 달려왔다.`,
      );
      await era.printAndWait(
        `맑은 공기를 들이마시며 ${
          you.name
        }은(는) 운동복 차림의 ${kita.teen_sex_title}을(를) 바라보았다. 키타가 아직 선물을 모른다는 사실에 살짝 우쭐해하며 천천히 다가갔다.`,
      );
      await kita.say_and_wait(`？ ${callname}? 그 이상한 미소는 뭐예요?`);
      await era.printAndWait(
        `경계하는 아기 사슴처럼 ${you.name}의 앞에서 멈춘 ${kita.name}은 조심스럽게 자세를 낮추고 조금씩 다가왔다.`,
      );
      await era.printAndWait(
        `후후후. 도망치지 않고 다가오는 거냐. 역시 키타답군. 하지만 이미 늦었다!`,
      );
      era.println();
      era.printButton(
        '「화이트데이 축하해, 키타~ 트레이너가 주는 선물이야~」',
        1,
      );
      await era.input();
      await era.printAndWait(
        `큰 소리로 그렇게 말한 ${
          you.name
        }은(는) 선물을 꺼내 키타에게 건넸다. ${kita.teen_sex_title}은(는) 깜짝 놀라 가라테 자세를 취했다.`,
      );
      await era.printAndWait(
        `한동안 장난을 친 뒤 ${you.name}은(는) 키타가 포장을 뜯어 안에 든 초콜릿을 먹는 모습을 미소 지으며 지켜보았다.`,
      );
      await kita.say_and_wait(
        `고마워요, ${callname}, 잘 먹겠…… 셔, 셔요! 이거 매실장아찌…… 앗! 침, 침이!`,
      );
      await era.printAndWait(
        `입에 넣는 순간 톡 쏘는 신맛에 ${kita.teen_sex_title}의 얼굴이 반사적으로 일그러졌다.`,
      );
      await era.printAndWait(
        `신 매실장아찌 때문에 침이 왈칵 고였다. 그것이 ${you.name}이(가) 준비한 작은 장난이었다. 수북한 초콜릿 가운데 매실 초콜릿은 딱 두 개뿐이었다.`,
      );
      await era.printAndWait(
        `그 뒤 키타가 진지하게 복수해서 ${you.name}이(가) 남은 매실을 한입에 먹고 침을 흘리게 된 일 따위는.`,
      );
      await era.printAndWait(`뭐, 신경 쓰지 않아도 되겠지~`);
    };
    f.title = title;
    return f;
  })(),
  ws_47_11: (() => {
    const title = '든든한 버팀목과 사츠키상의 그늘';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} teio トウカイテイオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, teio, you, callname) => {
      await kita.say_and_wait(
        `${callname}! 서류는 다 쓰셨죠! 틀린 곳은 없죠? 이름이나 나이 같은 거요……`,
      );
      await kita.say_and_wait(
        `아아, 이제 이 분 뒤면 확인이 시작돼요, 무서워요! 테이오 ${teio.adult_sex_title} 때도 이랬나요!?`,
      );
      await era.printAndWait(
        `트레이너실 안을 고민하며 서성이는 ${kita.name}은 손에 든 출주 등록 서류를 초조하게 다시 살피며 불안해했다.`,
      );
      await era.printAndWait(
        `무리도 아니다. 팬 수를 충족해도 G1 출주 등록은 까다롭다.`,
      );
      await era.printAndWait(
        `처음 등록하는 키타가 긴장하는 것도 어쩔 수 없을 것이다.`,
      );
      await teio.say_and_wait(
        `진정해, 키타~ 이 테이오 님이 ${you.name}의 몫까지 열 번은 확인했으니까. 그렇게 굳어 있지 마.`,
      );
      await era.printAndWait(
        `소파에서 꿀 드링크를 느긋하게 마시는 ${kita.name}의 동경의 대상인 ${teio.name}는 짧은 다리를 까딱거리고 있었다.`,
      );
      await kita.say_and_wait(
        `하지만 테이오 ${teio.adult_sex_title}! 이제 곧 등록이 시작되는데, 제일 먼저——`,
      );
      await teio.say_and_wait(
        `등록 기간은 오늘부터 일주일 정도잖아. 서둘러도 심사는 일주일 뒤에 한꺼번에 한다고.`,
      );
      await era.printAndWait(
        `그렇게 말하며 ${teio.name}는 손짓으로 ${kita.name}을 불러 가까이 끌어당기고는 작은 팬의 손에 꿀 드링크를 쥐여 주었다.`,
      );
      await kita.say_and_wait(
        `응~ 진정하고 쉬면 돼…… 나머지는 ${callname}에게 맡기면 되는 거야.`,
      );
      await kita.say_and_wait(`으음…… 으으으…… 역시 불안해요……`);
      await era.printAndWait(
        `그런 키타를 보며 ${you.name}은(는) 조용히 전송 버튼을 눌렀다. 이미 제출했다는 것은 조금 뒤에 말하자.`,
      );
    };
    f.title = title;
    return f;
  })(),
  sats_sho_win: (() => {
    const title = '승리의 큰 무대';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`고마워요, ${callname}。`);
      await era.printAndWait(
        `『사츠키상』이 끝난 뒤 대기실에서 ${kita.name}은 ${you.name}에게 깊이 고개를 숙였다.`,
      );
      await kita.say_and_wait(
        `『사츠키상』 무대에서 달리고 두라멘테와 같은 레이스에서 겨뤘다니…… 솔직히 아직도 가슴이 두근거려요.`,
      );
      await era.printAndWait(
        `레이스 전에는 바쿠신 씨가 깜빡하셔서 신청서를 못 낼 뻔했고, 달리는 도중에도 몇 번이나 심장이 튀어나오는 줄 알았어요.`,
      );
      await era.printAndWait(
        `한바탕 파란이 지나간 뒤 노승 같은 고요함 속에서 ${you.name}은(는) 졸음 사이로 비로소 실감했다. ${kita.name}이 삼관 중 첫 번째 관을 차지한 것이다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  toky_yus_win: (() => {
    const title = '피로의 이유';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} baku サクラバクシンオー
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, baku, you, callname) => {
      await kita.say_and_wait(`하아…… 하아…… 어…… 다 달린 거예요?`);
      await era.printAndWait(
        `결승선을 통과한 뒤 ${kita.name}은 옆의 순위 게시판을 바라보았다.`,
      );
      await era.printAndWait(
        `거리가 맞지 않았던 걸까. 단순한 몸 상태 문제일까. 지금 키타는 이겼다는 실감이 나지 않았다.`,
      );
      await kita.say_and_wait(`저, 이겼어요? 그 두라멘테를 상대로요?`);
      await era.printAndWait(
        `우승했는데도 ${kita.name}은 지친 얼굴 그대로였다. 두라멘테라는 강적의 존재감이 ${kita.name}의 기력을 모두 소진시킨 모양이다.`,
      );
      await era.printAndWait(
        `대기실로 돌아온 지 한참 지나서야 ${kita.name}은 겨우 평소처럼 입을 열었다.`,
      );
      await kita.say_and_wait(`${callname}, 일본 더비는 정말 대단하네요……`);
      era.println();
      era.printButton('「좀 진정됐어, 키타?」', 1);
      await era.input();

      await kita.say_and_wait(
        `네, 이제 겨우요. 하지만 아직 이겼다는 실감은 안 나요.`,
      );
      await kita.say_and_wait(
        `이상해요, ${callname}. 키타는 끈기만큼은 자신 있었는데, 그런데……`,
      );
      await kita.say_and_wait(
        `이기고도 가시지 않는 이런 피로는 처음이에요. 혹시 이런 거리는 저한테 안 맞는 걸까요?`,
      );
      await era.printAndWait(
        `그렇게 말하는 ${kita.name}은 조금 풀이 죽은 표정이었다.`,
      );
      await era.printAndWait(
        `삼관의 무게. 2400미터라는 거리. 강적의 위압감. 이 끈기 있는 아이에게도 상당한 부담이 되고 있었다.`,
      );
      await era.printAndWait(
        `고민 끝에 ${you.name}이(가) 입을 열려는 순간 문밖에서 ${you.name}에게 익숙한 목소리가 들려왔다.`,
      );
      await baku.say_and_wait(`2400미터는 너무 길었던 겁니다, 키타산 씨!`);
      await era.printAndWait(
        `문을 열고 체육복 차림의 ${baku.name}가 바람처럼 들어와 자신만만하게 키타에게 말했다.`,
      );
      await era.printAndWait(
        `그러고 보니 관중석에서도 두 사람을 한꺼번에 응원하던 바쿠신 씨의 모습을 본 것 같다.`,
      );
      await baku.say_and_wait(
        `아뇨, 아뇨, 키타산 씨, 걱정할 것 없습니다! 그 피로는 아직 거리에 익숙하지 않아서 생긴 것! 그뿐입니다!`,
      );
      await baku.say_and_wait(
        `키타산 씨가 자주 달리는 2000미터와 2400미터. 차이는 겨우 400미터지만, 1200미터의 세 배 같은 단순한 계산으로 볼 일이 아닙니다!`,
      );
      await baku.say_and_wait(
        `그 작은 400미터 차이가 익숙해지기 전까지는 체력에도 스피드에도 영향을 줍니다! 그러니 자신을 의심하며 풀이 죽을 필요는 없습니다! 키타산 씨!`,
      );
      await kita.say_and_wait(`그…… 그런 거예요!? 익숙하지 않았을 뿐이군요!`);
      await era.printAndWait(
        `바쿠신 씨의 설명을 들은 ${kita.name}은 납득한 표정이 되어 목소리에도 활기가 돌았다.`,
      );
      await era.printAndWait(
        `평소의 빛을 되찾은 ${kita.name}을 보며 ${you.name}은(는) 평소의 바쿠신 씨와는 딴사람 같다는 감상을 속으로 삼켰다. 우연히 떠오른 생각이었으면 좋겠다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_summer_start: (() => {
    const title = '여름 합숙';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `어린 ${kita.uma_sex_title}들에게 중앙 학원이 해마다 팔월에 여는 여름 합숙은 ${
          kita.couple_title
        }은 몇몇 휴일 다음으로 이때를 손꼽아 기다린다.`,
      );
      await era.printAndWait(
        `트레센 합숙 하면 햇살과 모래사장, 남국의 쾌적한 기온과 짭짤한 바닷바람이 떠오른다.`,
      );
      await era.printAndWait(
        `하지만 베테랑 트레이너들에게 여름 합숙은 ${kita.uma_sex_title}의 실력을 키울 최고의 시간이다.`,
      );
      await era.printAndWait(
        `합숙지에 갖춰진 기구. 발목을 접지를 걱정이 적은 부드러운 모래. 수영 훈련에 알맞은 맑은 바다. 엄격한 트레이너도 저절로 행복한 표정을 짓게 된다.`,
      );
      await era.printAndWait(
        `${kita.name}에게도 여름 합숙은 자신의 실력을 다질 최고의 시간이다.`,
      );
      await kita.say_and_wait(
        `우와앗! 모래가 부드러워요! ${callname}, 보세요, 발이 푹 파묻혔어요!`,
      );
      await era.printAndWait(
        `흰 모래사장을 맨발로 밟으며 걷던 검은 ${kita.uma_sex_title}는 웃으며 두 손을 높이 들어 떡처럼 매끄러운 겨드랑이를 드러냈다.`,
      );
      await kita.say_and_wait(
        `하하, 대단하네요, ${callname}! 이러면 어떤 트레이닝도 버틸 수 있겠어요~`,
      );
      await era.printAndWait(
        `어린아이 같은 ${kita.name}을 보며 ${you.name}도 덩달아 신나게 뛰놀고 싶어졌다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_summer_end: (() => {
    const title = '여름 합숙 종료';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `한 달 내내 이어진 합숙 트레이닝 덕분에 ${kita.name}의 실력은 눈에 띄게 성장했다.`,
      );
      await era.printAndWait(
        `컨디션이 좋을 때 터져 나오는 기백. 트레이너의 지도 아래 얻은 용기. 그리고 게을리하지 않는 단련.`,
      );
      await era.printAndWait(
        `${kita.uma_sex_title}를 강하게 만드는 재료들이 물을 섞은 반죽처럼 눈에 보일 만큼 발효되고 형태를 갖추며 엄청난 열기를 내뿜었다.`,
      );
      await era.printAndWait(
        `여름 합숙이 끝나 갈 무렵 ${
          you.name
        }도 이 잘 익은 작은 ${kita.uma_sex_title}에게 휴식을 주었다.`,
      );
      await era.printAndWait(`${kita.sex}가 푹 쉬게 해 주자.`);
    };
    f.title = title;
    return f;
  })(),
  stli_kin_win: (() => {
    const title = '승천하는 용과 웅크린 용';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, daiya, you, callname) => {
      await era.printAndWait(
        `${kita.name}이 복도에서 ${you.name}에게 수건으로 꽁꽁 싸여 있다가 땀 냄새 나는 수건에서 겨우 빠져나왔을 때였다.`,
      );
      await era.printAndWait(
        `${kita.name}의 소꿉친구, 사토노 가문의 ${
          daiya.sex_code - 1 ? '아가씨' : '도련님'
        }인 다이아가 꿀 드링크 두 잔을 품에 안고 복도 저편에 서 있었다.`,
      );
      await era.printAndWait(
        `${you.name}의 품 안에서 수건으로 닦이고 있는 ${kita.name}을 말없이 바라보고 있었다.`,
      );
      await kita.say_and_wait(`아, 다이아짱! 레이스 보러 와 줬구나!`);
      await era.printAndWait(
        `머리카락이 땀으로 젖은 ${kita.name}은 돌아서 다이아를 부르고는 서둘러 ${daiya.name}에게 달려갔다.`,
      );
      await era.printAndWait(
        `二頭の子馬は親しげに抱き合い、豊かな体が密着して、淫らな肉の波を作る。`,
      );
      await daiya.say_and_wait(
        `응, 봤어, 키타야. 이렇게 멋진 레이스를 보여 줘서 고마워.`,
      );
      await daiya.say_and_wait(
        `가슴이 두근거려. 나도 더 열심히 단련해서 레이스에 나가고 싶어졌어.`,
      );
      if (era.get('cflag:67:招募状态') !== recruit_flags.yes) {
        await daiya.say_and_wait(
          `그리고 네 ${callname}에게도 감사드려야겠네. ${callname}의 트레이닝 방식 덕분에 관심이 생겼거든.`,
        );
        await era.printAndWait(
          `그렇게 말한 사토노 다이아몬드는 ${you.name}에게 작게 고개를 끄덕이며 인사했다.`,
        );
      }
      await kita.say_and_wait(`정말!? 정말이야, 다이아짱! 다행이다.`);
      await era.printAndWait(
        `키타는 강아지처럼 기쁜 듯 꼬리를 흔들었고, 다이아도 단짝의 볼에 가볍게 입을 맞췄다.`,
      );
      await daiya.say_and_wait(
        `응. 그러니까 키타야, 힘내. 『국화상』, 꼭 이겨야 해.`,
      );
      await kita.say_and_wait(
        `그럴게! 에헤헤, 다이아짱의 기대를 저버릴 수는 없지!`,
      );
      await era.printAndWait(
        `키타와 다이아의 편안한 수다를 들으며 ${you.name}은(는) 여자아이들끼리의 우정은 복잡하다고 중얼거리면서도 몰래 미소 지었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  three_crowns: (() => {
    const title = '갈채! 삼관의 축제!';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `${kita.name}이 결승선을 통과했을 때 경기장을 가득 채운 함성을 들으니 눈물이 날 것 같았다.`,
      );
      await era.printAndWait(
        `처음의 ${kita.name}은 팬 한 명 없는 평범한 ${kita.uma_sex_title}였다.`,
      );
      await era.printAndWait(
        `재능은 트레이너들도 인정했다. 하지만 화려함 없는 수수한 체격 때문에 달리기를 막 시작한 키타는 마땅히 받아야 할 인기를 얻지 못했다.`,
      );
      await era.printAndWait(
        `하지만 키타는 실력을 증명하고 『사츠키상』에서 우승한 뒤 강적에게서 일본 더비의 승리를 빼앗았다.`,
      );
      await era.printAndWait(
        `이제 이관을 거머쥔 ${kita.uma_sex_title}가 된 키타가 경기장을 가득 채운 함성 속을 달리고 있다.`,
      );
      await era.printAndWait(
        `모두가 키타의 이름을 외치며 결승선을 통과하는 순간 힘껏 발을 굴렀다. 마권과 입장권이 미친 듯이 허공을 날고, 라이브에서는 너무 기뻐하다가 넘어지는 사람까지 있었다.`,
      );
      await era.printAndWait(
        `치료비를 키타가 내게 되지만 않았으면 좋겠다고 ${
          you.name
        }은(는) 쓴웃음을 지으며 무대 위의 ${kita.teen_sex_title}을(를) 계속 바라보았다.`,
      );
      await era.printAndWait(
        `지금 ${kita.name}은 음악의 박자에 맞춰 마이크를 쥐고, 냉정하고 도도하게 느껴질 정도의 표정으로 객석을 가득 메운 팬들을 손끝으로 가리키고 있었다.`,
      );
      await era.printAndWait(
        `착각일지도 모른다. ${you.name}은(는) 키타가 이쪽을 볼 때마다 표정이 눈에 띄게 부드러워진다는 것을 알아차렸다.`,
      );
      await era.printAndWait(
        `……착각이겠지. 그렇게 생각하며 ${you.name}도 인파와 함께 구호를 외쳤다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  kiku_sho_win: (() => {
    const title = '보라! 키타산 축제!';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `${kita.name}이 결승선을 통과했을 때 경기장을 가득 채운 함성을 들으니 눈물이 날 것 같았다.`,
      );
      await era.printAndWait(
        `가장 빠른 ${kita.uma_sex_title}만이 이길 수 있는 레이스. 강자들도 한숨을 쉬고, 부상과 아쉬움에 운명을 원망하는 『국화상』.`,
      );
      await era.printAndWait(
        `지금 ${kita.name}이 자신의 다리로 그 승리를 거머쥐었다.`,
      );
      await era.printAndWait(
        `처음에는 수수한 성격과 몸밖에 없었던 ${kita.uma_sex_title}가 혹독한 단련 끝에 이길 수 있는 선수로 바뀌었다.`,
      );
      await era.printAndWait(
        `모두의 함성과 격려가 밀물처럼 밀려왔다. 키타가 달군 열기는 축제의 구호처럼 경기장에 계속 울려 퍼졌다.`,
      );
      await era.printAndWait(
        `키타가 복도 안쪽으로 사라진 뒤에도 그 여운은 들려왔다.`,
      );
      era.println();
      await kita.say_and_wait(`${callname}, 여기서 잠깐 같이 앉아 주실래요?`);
      await era.printAndWait(
        `복도 모퉁이에서 검은 ${kita.uma_sex_title}는 손으로 더듬어 플라스틱 의자에 앉았다.`,
      );
      await era.printAndWait(
        `그리고 땀으로 흠뻑 젖은 ${kita.name}은 멍하니 ${you.name}을(를) 바라보았다. 격한 운동으로 살짝 붉어진 귀여운 얼굴에는 알 수 없는 표정이 떠올라 있었다.`,
      );
      await kita.say_and_wait(
        `에헤헤, 역시 실감이 안 나요. 평소처럼 『축제』에서 달렸을 뿐인데……`,
      );
      await kita.say_and_wait(
        `그래도 역시…… ${callname}이(가) 없었다면 저 혼자서는 여기까지 오지 못했을 거예요.`,
      );
      await kita.say_and_wait(`그러니까 고마워요! ${callname}！`);
      await era.printAndWait(
        `그렇게 말한 ${kita.name}은 ${you.name}에게 깊이 고개를 숙였고, ${kita.sex}의 표정도 마침내 평소대로 돌아왔다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${kita.teen_sex_title}의 머리를 쓰다듬으며 저도 모르게 ${
          kita.sex
        }와 함께 웃었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_47_48: (() => {
    const title = '성야의 저녁 식사';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `크리스마스의 트레센은 지난 십여 년과 마찬가지로 떠들썩했다.`,
      );
      await era.printAndWait(
        `지금 ${you.name}와(과) ${kita.name}도 다른 사람들처럼 식당에서 축일을 기념하며 특별 메뉴를 즐기고 있었다.`,
      );
      await kita.say_and_wait(
        `으음…… 감자튀김 곱빼기 두 개, 치킨 너깃 네 개랑 치킨버거, 콜라 두 잔……`,
      );
      await era.printAndWait(
        `${you.name}의 옆에서 담당은 발끝으로 서서 카운터의 메뉴를 보며 열량 높은 음식을 거침없이 주문했다.`,
      );
      await era.printAndWait(
        `앞으로 트레이닝 메뉴를 늘려야겠네…… ${you.name}은(는) 마음속 노트에 조용히 적어 두었다.`,
      );
      await kita.say_and_wait(
        `우헤헤~ 고마워요, ${callname}. 모처럼 크리스마스인데 함께해 주셔서요.`,
      );
      await era.printAndWait(
        `커다란 쟁반을 안고 빈자리에 앉은 ${kita.name}은 쑥스러운 표정으로 콜라를 ${you.name}에게 건넸다.`,
      );
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 콜라를 마시며 주위를 둘러보았다. 똑같이 산더미처럼 쌓아 놓고 먹는 아이들이 드문드문 보였다. 젊다면 이 정도 주문해도 이상하지 않은 건가……',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 시선을 돌리자 ',
        kita.get_colored_name(),
        '은 ',
        you.get_colored_name(),
        '의 앞에서 감자튀김을 조금씩 먹고 있었다. 평범한 서민 음식일 뿐인데도 행복해 보였다.',
      ]);
      era.println();
      era.printButton('「키타는 감자튀김이 잘 어울리네.」(호감+10)', 1);
      era.printButton('「키타는 햄버거가 잘 어울리네.」(호감+5, 연모+2)', 2);
      const ret = await era.input();
      if (ret === 1) {
        await kita.say_and_wait(`네? 감자튀김이 잘 어울린다고요?`);
        await era.printAndWait(
          `뜨겁고 부드러운 감자튀김을 두 입에 먹은 ${kita.name}은 고개를 갸웃했다.`,
        );
        await era.printAndWait(
          `${
            you.name
          }은(는) 잠시 망설이다가 ${kita.uma_sex_title}의 입을 가만히 바라보았다. 얇고 가느다란 입술은 건강하게 붉었고 립밤의 윤기도 남아 있었다.`,
        );
        await you.say_and_wait(
          `아니, 키타가 감자튀김을 물고 있는 모습이 어린아이처럼 귀엽다고.`,
        );
        await kita.say_and_wait(`네? 그런가요……?`);
        await era.printAndWait(
          `${you.name}의 말대로 하나를 물자 손가락만 한 길이의 황금빛 막대가 자연스럽게 늘어졌다. ${kita.name}은 얼굴을 조금 가까이 가져왔다.`,
        );
        await era.printAndWait(
          `${kita.teen_sex_title}의 무방비한 얼굴이 ${
            you.name
          }의 바로 앞에 있었다. 아직 어린 티가 남은 ${kita.name}은 눈을 깜빡이며 ${
            you.name
          }의 태도를 의아하게 바라보았다.`,
        );
        await era.printAndWait(
          `${you.name}은 시선을 내렸다. 교복 옷깃 사이로 키타의 하얀 목이 보이고, 고혹적인 쇄골이 또렷하게 드러나 있었다.`,
        );
        await kita.say_and_wait(`으으음……`);
        await era.printAndWait(
          `감자튀김을 두세 입에 먹은 뒤 ${kita.teen_sex_title}은(는) 다시 의자 등받이에 등을 기대고 이번에는 크게 한입씩 먹기 시작했다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 콜라를 마시며 키타와 보내는 크리스마스를 즐겼다.`,
        );
      } else {
        await kita.say_and_wait(`햄버거요?`);
        await era.printAndWait(
          `감자튀김을 두세 입에 삼킨 ${kita.name}은 고개를 갸웃했다.`,
        );
        await era.printAndWait(
          `……아차, 말을 잘못했네…… ${
            you.name
          }은(는) 잠시 망설이다가 ${kita.uma_sex_title}의 입술을 바라본다. 가늘고 촉촉한 붉은 입술이었다.`,
        );
        await you.say_and_wait(
          `아니, 키타는 입이 크니까 햄버거 먹기에 좋겠다고.`,
        );
        await era.printAndWait(
          `${you.name}의 이유를 듣고 키타는 볼을 부풀리며 언짢은 표정을 지었다.`,
        );
        await era.printAndWait(
          `그럴 만하다. 그런 말을 듣고 기뻐할 ${kita.child_sex_title}가 있을 리 없지……`,
        );
        await kita.say_and_wait(
          `${callname}……모처럼 크리스마스잖아요? 키타를 기분 나쁘게 해도 되는 거예요?`,
        );
        await era.printAndWait(
          `입을 삐죽이고 감자튀김을 바삭바삭 씹으며 ${kita.name}은 으름장을 놓듯 말했다.`,
        );
        era.println();
        era.printButton(
          `「미안해, 내가 잘못했어…… 키타 님, 용서해 주세요……」`,
          1,
        );
        await era.input();
        await era.printAndWait(`흥~`);
        await era.printAndWait(
          `귀를 위아래로 움직이는 ${kita.name}은 몸을 돌리고 눈을 감은 채 손으로 더듬어 감자튀김을 집어 먹었다.`,
        );
        await kita.say_and_wait(
          `으으음…… 그런 말씀을 하시다니 키타는 ${callname}에게 실망했어요.`,
        );
        await era.printAndWait(
          `맞는 말이다…… 이런 실언에도 크게 화내지 않는다는 것만으로 키타는 너무 관대하다……`,
        );
        await era.printAndWait(
          `${you.name}은(는) 두 손을 모으고 토라진 키타의 기분을 풀어 주려고 온갖 말을 늘어놓았다.`,
        );
        await era.printAndWait(
          `하지만 사과하는 동안 키타는 몰래 몸을 돌려 ${you.name}의 태도를 살피며 득의양양한 짓궂은 미소를 짓고 있었다.`,
        );
        await era.printAndWait(
          `억지로 햄버거를 먹게 되어 ${callname}도 햄버거가 잘 어울린다는 것이 증명된 뒤에야 ${
            you.name
          }의 눈에 키타의 기분이 겨우 풀린 듯 보였다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 햄버거를 씹으며 벌을 받는 동시에 키타와 보내는 시간을 즐겼다.`,
        );
      }
      return [ret];
    };
    f.title = title;
    return f;
  })(),
  arim_kin_c: (() => {
    const title = '진짜 축제';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} daiya サトノダイヤモンド
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, daiya, you, callname) => {
      await era.printAndWait(
        `경기장을 가득 채운 함성 속에서 승리를 거머쥔 ${kita.name}은 모두에게 손을 흔들었다.`,
      );
      await era.printAndWait(
        `힘 있는 달리기. 눈에 보이는 열기. 그리고 ${kita.name}의 온갖 마음.`,
      );
      await era.printAndWait(
        `경기장에서 다시 키타를 지켜보는 모두에게 전해졌다.`,
      );
      await era.printAndWait(`${you.name}에게도.`);
      await daiya.say_and_wait(`멋진 승리예요, ${callname}。`);
      await era.printAndWait(
        `${you.name}의 옆에서 ${daiya.name}가 나지막이 찬사를 보냈다.`,
      );
      await daiya.say_and_wait(
        `키타 말이에요. ${kita.sex}가 『아리마 기념』에서 우승했네요. 후후~ 정말 축제 같아요.`,
      );
      await daiya.say_and_wait(
        `예전의 키타는 지금 같은 모습은 절대로 보여 주지 못했을 거예요. 그 분위기에 저도 조금 취해 버렸네요.`,
      );
      await era.printAndWait(
        `아아…… ${you.name}은(는) 마음속으로 말없이 ${daiya.name}에게 동의했다.`,
      );
      await era.printAndWait(
        `예전의 키타가 아무리 튼튼했어도 우승할 수 있는 것은 그때의 키타가 아니다. 지금의 키타다.`,
      );
      await era.printAndWait(
        `${you.name}와(과) 사토노 다이아몬드는 나란히 서서 여전히 손을 흔드는 키타를 배웅했다.`,
      );
      await era.printAndWait(
        `클래식급 마지막 레이스인 『아리마 기념』은 이렇게 막을 내렸다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_1: (() => {
    const title = '키타의 지인?';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} minoru 駿川たづな／ハーヴェストスカイ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, minoru, you, callname) => {
      await era.printAndWait('일 년은 순식간에 지나고 벌써 새해다.');
      await era.printAndWait(
        `${you.name}의 담당인 ${kita.name}에게 앞으로의 일 년은 강화된 트레이닝과 출주 일정 때문에 상당히 중요한 한 해가 될 것이다.`,
      );
      await kita.say_and_wait(`흥흥흥~ 흥흥흥~ 흥흥, 흥흥흥~`);
      await era.printAndWait(
        `잠옷 차림의 ${kita.name}이 문밖에서 콧노래를 부르며 무언가 하고 있었다. ${you.name}은(는) 방 안에서 새해맞이 전골을 준비하고 있었다.`,
      );
      await era.printAndWait(
        '새해 첫날만큼은 제대로 보내야 한다. 기대가 크다고 키타에게 너무 부담을 줘서는 안 된다.',
      );
      await era.printAndWait(
        '트레이너실에서 전골을 먹고 이불을 펴고 자는 것은 아무리 생각해도 조금 이상하지만.',
      );
      await era.printAndWait(
        `귤과 코타츠를 준비하던 ${
          you.name
        }은(는) ${kita.teen_sex_title}이(가) 문을 여는 소리와 여러 사람의 발소리를 들었다.`,
      );
      era.println();
      era.printButton('「어서 와, 키…… 키타!?」', 1);
      await era.input();
      await era.printAndWait(
        `${you.name}이(가) 돌아보니 서 있는 것은 덩치 큰 남자 두 명이었다.`,
      );
      await era.printAndWait(
        '두 사람 다 비정상적으로 건장한 체격에 흰 정장 차림이었다. 안경을 쓴 남자는 온 얼굴이 흉터투성이였고, 다른 한 명은 턱에 짧은 수염을 기르고 있었다.',
      );
      await era.printAndWait(
        `냉혹한 분위기와 상대를 가늠하는 눈빛…… 아무리 봐도 조직폭력배다! 하야카와 씨는 어떻게 이 사람들을 들여보낸 거지!? ${you.name}은(는) 의아했다.`,
      );
      await kita.say_and_wait(
        `아, 하나야마 형님, 키류 형님. 이분이 제 ${callname}입니다~`,
      );
      await era.printAndWait(
        `두 사람 뒤에서 담당이 웃으며 얼굴을 내밀었다. 선물이 든 종이봉투를 안고 ${you.name}에게 소개했다.`,
      );
      await kita.say_and_wait(
        `${callname}, 전에 말씀드린 하나야마 형님과 키류 형님이에요.`,
      );
      await kita.say_and_wait(
        `에헤헤, 얼굴은 무서워도 키타랑 친한 좋은 분들이니까 겁내지 마세요.`,
      );
      await era.printAndWait('하나야마「어.」');
      await era.printAndWait('키류「음.」');
      await era.printAndWait(
        `두 남자는 나란히 고개를 끄덕이고 키타의 뒤에서 ${you.name}에게 수수한 미소를 보이며 상점가에서 사 온 양고기 봉투 몇 개를 들어 올렸다.`,
      );
      await era.printAndWait(
        `키타의 말에 따라 ${you.name}은(는) 전설적인 조직폭력배들과 그들만의 편안한 시간을 보냈다.`,
      );
      era.drawLine({ content: '잠시 후' });
      await kita.say_and_wait(`내년에 또 만나요! 키류 형님, 하나야마 형님!`);
      await era.printAndWait(
        `전골을 먹고 몇 시간 동안 뒷세계의 전설을 이야기한 뒤 ${you.name}와(과) 키타는 두 형님이 교문으로 향하는 모습을 배웅했다.`,
      );
      await era.printAndWait(
        `……그리고 길가 정자에 앉은 ${minoru.name}에게 깊이 고개를 숙였다.`,
      );
      await era.printAndWait(
        `마지막 장면은 못 본 것으로 하자고 ${you.name}은(는) 생각하며 돌아서서 이 즐거운 밤을 만끽했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_95_1: (() => {
    const title = '새해 인사';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait('제자들「스승님, 새해 복 많이 받으십시오!!!」');
      await era.printAndWait(
        `오후 세 시 십오 분. 트레이너인 ${you.name}은(는) ${kita.name}의 아버지 제자들이 외치는 우렁찬 인사를 듣고 겨우 숨을 내쉬었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 검은 기모노 차림으로 다다미 위에서 몸을 일으켜 옆의 남자에게 인사했다.`,
      );
      await era.printAndWait(
        `옆에 앉은 키타의 아버지는 작게 고개를 끄덕였다. 덩치가 크고, 화를 내지 않아도 위엄이 있었다. ${you.name}은(는) 마치 조직폭력배에게 고용된 문화 자문가 같아 보였다.`,
      );
      await era.printAndWait(
        `연잎 무늬가 있는 똑같은 검은 기모노를 입고 환하게 웃으며 편하게 ${you.name}의 옆에 무릎 꿇고 앉은 키타가 없었다면 ${you.name}은(는) 진작 일어나 제자들의 대열에 끼어 있었을 것이다.`,
      );
      await kita.say_and_wait(
        `${callname}, 이렇게 많은 사람 앞에 서는 건 처음이라 긴장하셨죠~`,
      );
      await era.printAndWait(
        `미닫이문을 닫은 키타가 방긋 웃으며 ${you.name}의 곁으로 다가와 말했다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 담당의 머리를 쓰다듬고 까르르 웃는 가벼운 소란 속에서 새로운 한 해를 즐기기 시작했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ws_95_6: (() => {
    const title = '조금 부서진 감주의 맛';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `시니어급의 밸런타인데이, ${kita.name}과 트레이너실에서 만나기로 약속했다.`,
      );
      await era.printAndWait(
        `초콜릿을 주는 날이기는 하지만, 문을 열어 보니 키타가 드물게 옷을 차려입고 있었다.`,
      );
      await kita.say_and_wait(`앗! ${callname}, 벌써 오셨어요!`);
      await era.printAndWait(
        `고급 기모노를 입은 ${kita.name}은 황급히 책상을 정리하고 ${you.name}에게 긴장한 채 깊이 인사했다.`,
      );
      await kita.say_and_wait(
        `${callname}, 밸런타인데이 축하해요! 저, 이거, 이거요! 키타가 트레이너에게 드리는 선물이에요. 받아 주세요!`,
      );
      era.println();
      era.printButton(`「선물이야? 고마워, 키타.」`, 1);
      await era.input();
      await era.printAndWait(
        `기대하며 상자를 열자 고급스러운 상자 안에는 산산이 부서진 초콜릿이 들어 있었다.`,
      );
      await era.printAndWait(
        `작은 칸막이 안에는 무색투명한 액체의 흔적이…… 감주다!`,
      );
      await kita.say_and_wait(
        `으으…… ${callname}을(를) 놀라게 해 드리고 싶었는데 어째서인지 초콜릿이 전부 깨져 버렸어요……`,
      );
      await era.printAndWait(
        `상자 안을 들여다보며 이미 참상을 알고 있던 ${kita.name}은 불안한 표정을 지었다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 초콜릿 한 조각을 입에 넣고 부서진 속에서 은은한 술 향이 나는 소를 씹었다.`,
      );
      await era.printAndWait(
        `그래, 담당이 밸런타인데이에 선물해 준 아주 훌륭한 초콜릿이다. 키타의 머리를 쓰다듬으며 매끄러운 머리카락이 손바닥을 스치는 감촉을 느꼈다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) ${kita.name}의 손을 잡아 책상 앞에 앉히고 함께 밸런타인데이 초콜릿을 맛보기 시작했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_10: (() => {
    const title = '「상」';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `화이트데이 아침, 담당에게 선물을 주려고 일찍 트레이너실에 왔다.`,
      );
      await era.printAndWait(
        `아마 초콜릿 같은 단것을 바랄 뿐이겠지. 그래도 ${you.name}은(는) 키타에게 어떤 상을 받고 싶은지 물었다.`,
      );
      await kita.say_and_wait(
        `상이요? 평범한 초콜릿이면…… 아니, 그게…… 상이라면……`,
      );
      await kita.say_and_wait(`다른 방식으로, 칭찬해 주시면 안 될까요……?`);
      era.drawLine({ content: '밤' });
      await kita.say_and_wait(`트레이너…… 학원에서 이런 거… 들키지 않겠죠…♡`);
      await era.printAndWait([
        '밤의 트레센 학원 복도에서, ',
        you.get_colored_name(),
        '은 알몸인 ',
        kita.get_colored_name(),
        '과 오늘의 데이트를 즐기고 있다.',
      ]);
      await era.printAndWait(
        `발정한 체취가 밴 개 목줄이 ${kita.uma_sex_title}의 하얀 목에 단단히 채워져 있고, 이어진 줄은 ${
          you.name
        }이 쥐고 있다.`,
      );
      await era.printAndWait(
        `작고 분홍빛인 혀가 음란하게 입 밖으로 늘어져, ${kita.teen_sex_title}의 거친 숨결을 따라 달콤한 침이 끊임없이 흘렀다.`,
      );
      await era.printAndWait(
        `평소 당당하고 사랑스러운 ${kita.teen_sex_title}이 지금은 검고 비치는 천으로 눈이 가려진 채, 얼굴을 ${
          you.name
        }의 옷자락에 비비고 있다.`,
      );
      if (kita.sex_code !== 1) {
        await era.printAndWait(
          `${kita.uma_sex_title}의 가슴에서는 리본 한 가닥이 크고 분홍빛인 두 유두를 잇고 있었다. 가슴의 무게에 늘어져 바닥을 스치며 당겨지고 있었다.`,
        );
      }
      await kita.say_and_wait(
        `학원에서 트레이너가 줄을 잡고 계시니까… 반려동물 같아요… 하아…♡ 복도에서 한다고 생각하니… 아랫배 깊숙한 곳이… 뜨거워요… 굉장해…♡`,
      );
      await era.printAndWait(
        `${you.name}의 담당이 노출도 자위도 좋아하는 변태라는 사실이 알려지면, ${you.name}은 틀림없이 감옥행일 것이다.`,
      );
      await era.printAndWait(
        `${
          you.name
        }이 줄을 당겨 목줄을 가볍게 조이자, ${kita.teen_sex_title}은 작게 신음한 뒤 목을 죄는 감각에 볼을 붉혔다. 얼굴을 ${
          you.name
        }의 신발에 비비며 기쁘게 꼬리를 흔들었다.`,
      );
      await era.printAndWait(
        `어쩔 수 없지…… 그렇게 생각하며, ${you.name}은 ${kita.name}을 데리고 옆방으로 들어갔다.`,
      );
      await era.printAndWait(
        `그러자 ${kita.name}의 목소리라고는 믿기 어려운 음란한 신음과 살이 부딪치는 소리가 숨김없이 남자 화장실에서 흘러나왔다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  os_95_14: (() => {
    const title = '팬 감사제!';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `팬들의 성원에 보답하기 위해, ${you.name}과(와) 키타산은 상점가 식당에서 감사 이벤트를 열었다.`,
      );
      await era.printAndWait(
        '박스를 쌓아 만든 임시 무대 뒤에서, 키타산은 마이크를 잡고 경쾌한 목소리로 트레센 타령을 부르고 있었다.',
      );
      await kita.say_and_wait('흔ー들흔들 하ー늘하늘 휘날리는 유카타~♪');
      await era.printAndWait(
        `박자에 맞춰 몸을 흔들며 즐겁게 노래하는 키타산의 모습을, ${you.name}은(는) 무대 뒤에 앉아 묵묵히 지켜보았다. 오직 ${you.name}만이 볼 수 있는 소중한 모습이었다.`,
      );
      await era.printAndWait(
        '키타산이 평소 도와주던 상점가 사람들의 응원 덕분에, 이번 감사제도 무사히 막을 내렸다.',
      );
    };
    f.title = title;
    return f;
  })(),
  sank_hai: (() => {
    const title = '라이벌 없는 세계';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `레이스 전에는 사실 ${kita.name}이 『오사카배』에서 우승할 수 있을지 걱정도 했다.`,
      );
      await era.printAndWait(
        'G2에서 G1으로 승격된 레이스인 만큼 『오사카배』에는 불확실한 요소가 많다. 출주 선수들도 강적투성이다.',
      );
      await era.printAndWait('그래서 우승한 뒤 키타도 조금 놀란 듯 보였다.');
      await era.printAndWait(
        `놀라움 너머로 ${kita.name}의 얼굴에는 그보다 더 큰 기쁨과 흥분이 드러나 있었다.`,
      );
      await kita.say_and_wait(`${callname}, 저, 올해 목표를 뛰어넘었어요.`);
      await era.printAndWait(
        `트레이너의 손을 붙잡고 ${kita.name}은 흥분하며 말했다.`,
      );
      await era.printAndWait(
        '딱히 자랑할 만한 장점도 없고 눈에 띄는 실적을 가진 아이도 아니라고 생각했다.',
      );
      await era.printAndWait(
        `하지만 어려운 레이스도 ${kita.name}의 노력으로 ${kita.sex}는 극복했다.`,
      );
      await era.printAndWait(
        `지금 ${kita.name}은 그 마음을 자신의 트레이너에게 전하고 싶었다.`,
      );
      await kita.say_and_wait(
        `${callname}! 네! 못 할 일은 없어요! 끝까지 달리지 못할 레이스도 없고요!`,
      );
      await kita.say_and_wait(
        '이번에 해냈으니 다음에도 반드시 해낼 거예요! 그러니까 다음 『텐노상(봄)』도 기대해 주세요!',
      );
      await kita.say_and_wait(
        '다음 레이스에서는 승리의 영광을 바칠게요! 해내고 말 거예요! 노력하면 못 할 일은 없다는 것을 증명할게요!',
      );
      await era.printAndWait(
        `그 말의 열기가 가슴을 데웠다. 평소처럼 따뜻한 미소 속에서 ${you.name}은(는) 남몰래 결심했다.`,
      );
      await era.printAndWait('담당을 반드시 우승시키겠다고.');
    };
    f.title = title;
    return f;
  })(),
  tenn_spr: (() => {
    const title = '우뚝 솟은 절벽';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} ag エアグルーヴ
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, ag, you, callname) => {
      await era.printAndWait(
        `${kita.name}이 위너스 스테이지에서 팬들에게 손을 흔드는 동안 승리에 감동한 팬들의 함성이 지붕을 날려 버릴 듯 울려 퍼졌다.`,
      );
      await era.printAndWait(`팬 A「잘했어, ${kita.name}！」`);
      await era.printAndWait(
        `팬 B「이거야, 우리가 기다리던 ${kita.uma_sex_title}！」`,
      );
      await era.printAndWait(`팬 C「반드시 봄가을 연패를 달성해!」`);
      await era.printAndWait(
        `전력을 다하는 달리기에 ${kita.name}을 사랑하는 팬들도 점점 늘어나고 있었다.`,
      );
      await era.printAndWait(
        `이쪽을 바라보는 사람들 중에는 이번 승리 뒤에 ${kita.name}의 지기 싫어하며 노력하는 모습에 동경을 품고, 삶의 방식을 조금 바꾸는 사람도 있을 것이다.`,
      );
      await era.printAndWait(`하지만——`);
      await ag.say_and_wait(
        `${kita.name}의 ${callname}, 잠시 이야기할 수 있을까요?`,
      );
      await era.printAndWait(
        `음악이 울려 퍼지는 순간 ${you.name}의 귓가에 여성의 목소리가 들려왔다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) 돌아보니 눈앞에 있는 것은 트레센 학생회의 부회장이자 『여제』라는 별명을 가진 ${ag.name}였다.`,
      );
      await ag.say_and_wait(
        `${kita.name} 씨의 위닝 라이브를 즐기고 싶은 마음은 이해합니다. 그러니 두어 마디만 전하고 물러가겠습니다. 괜찮겠지요?`,
      );
      era.println();
      era.printButton('「괜찮습니다. 말씀하세요.」', 1);
      await era.input();
      await ag.say_and_wait(
        `감사합니다. 현 세대 최강이자 세대를 대표하는 ${kita.uma_sex_title} 중 한 명으로서 ${
          kita.name
        } 씨의 노력은 모두가 아는 사실입니다. 라이브가 시작되기 전에 짧게 끝내겠습니다.`,
      );
      await ag.say_and_wait(
        `지난해 『국화상』에서 성사되지 못한 두라멘테 씨와 ${kita.name} 씨의 대결에 대해 어떻게 생각하십니까?`,
      );
      await era.printAndWait(
        `격렬한 드럼 소리가 귓가에 울리고, 그 위로 키타의 힘 있고 또렷한 노랫소리가 퍼졌다.`,
      );
      await era.printAndWait(
        `지난해 『타카라즈카 기념』 이후 현 세대 최강의 ${kita.uma_sex_title} 중 한 명이자 키타의 강적인 두라멘테는 몸 상태 때문에 『국화상』을 피했다.`,
      );
      await era.printAndWait(
        `그 이후로 키타에게는 상대와 겨룰 기회가 거의 없었다. 상대에게도 아쉬움이 남을 것이다…… 하지만 혼자서 결정할 이야기는 아니다.`,
      );
      await ag.say_and_wait(
        `저는 말을 전하러 왔을 뿐입니다. 그 승부의 결말을 지을지는 당신과 ${kita.name}이 판단할 일입니다.`,
      );
      await era.printAndWait(
        `${you.name}이(가) ${kita.name}과 의논하고 싶어 한다는 것을 눈치챘는지 ${ag.name}는 미소를 지으며 한발 물러났다.`,
      );
      await era.printAndWait(
        `한마디를 남긴 뒤 ${you.name}에게 작별 인사를 하고 뒤돌아 떠났다.`,
      );
      await ag.say_and_wait(
        `관심이 있다면 다음에는 니가와로 오십시오. 『타카라즈카 기념』에서 상대와 겨뤄 보는 것은 어떻겠습니까.`,
      );
      await era.printAndWait(
        `무대 위에서는 ${kita.name}의 라이브가 새로운 절정에 이르고 있었다. ${you.name}은(는) 『타카라즈카 기념』에서 결판을 낼 구상을 하며 담당의 춤으로 시선을 돌렸다.`,
      );
      await era.printAndWait(
        `${ag.name}의 예상은 딱 한 가지 틀렸다. 처음부터 ${you.name}은(는) ${kita.name}이 피할 가능성 따위는 생각하지 않았다.`,
      );
      await era.printAndWait(
        `걱정은 어떻게 해야 이길 수 있을까, 오직 그것뿐이다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  takz_kin_s: (() => {
    const title = '건네받은 바통';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `${kita.name}과 두라멘테의 일대일 승부는 결국 ${kita.name}의 승리로 막을 내렸다.`,
      );
      await era.printAndWait(
        `화제성이 넘치는 이 승부에 한신 경기장은 만원이었고, 발매 시작 삼십 분 만에 표 쟁탈전이 벌어졌다.`,
      );
      await era.printAndWait(
        `전설적인 대결을 직접 보려는 사람들이 몰려들었다————그리고 두 명의 강한 ${kita.uma_sex_title}들은 그 기대를 확실히 저버리지 않았다.`,
      );
      await kita.say_and_wait(`한계였어요, 저.`);
      await era.printAndWait(
        `${kita.teen_sex_title}들의 발굽에 밟힌 잔디는 뒤집혀 아래의 축축한 흙을 드러내고 있었다.`,
      );
      await era.printAndWait(
        `이미 사람이 모두 떠난 한신 경기장에 앉은 ${kita.name}의 눈앞에는 여기저기 패인 잔디가 있었다. ${kita.sex}의 체력은 바닥났고, ${kita.sex}의 의지는 팽팽히 당겨진 채 한계에 다다랐다.`,
      );
      await era.printAndWait(
        `그래도 ${kita.name}은 발밑의 잔디를 바라보고 있었다.`,
      );
      await kita.say_and_wait(
        `은퇴를 앞둔 두라멘테 씨와의 승부는 즐거웠어요. 하지만 앞으로의 레이스는 분명 힘들겠죠.`,
      );
      await kita.say_and_wait(
        `텐노상, 재팬컵, 아리마 기념. 게다가 크라운 씨와 슈발 그랑 씨라는 두 강적…… 우와~ 생각만 해도 머리가 아파요……`,
      );
      await era.printAndWait(
        `한숨 섞인 원망 어린 목소리를 내며 ${kita.name}은 발끝으로 뒤집힌 흙을 툭툭 건드렸다.`,
      );
      await kita.say_and_wait(
        `하지만 이게 우리의 달리기예요. 승자는 패자의 몫까지 짊어지고 ${callname}와(과) 함께 계속 이겨 나가는 거죠. 두라멘테 씨와 그렇게 약속했으니까요.`,
      );
      await era.printAndWait(
        `${kita.name}은 두 팔을 벌리고 경기장을 등진 채 흔들림 없는 표정을 지었다.`,
      );
      await era.printAndWait(
        `합숙이 끝난 뒤 시월부터는 G1 연전이다. 앞으로의 레이스는 분명 더욱 치열해질 것이다.`,
      );
      await era.printAndWait(
        `경험 많은 시니어 선수와 두각을 드러내는 신예. 연전 자체만으로도 이미 체력을 갉아먹는다.`,
      );
      await era.printAndWait(`하지만 ${kita.name}이라면 분명……`);
      await kita.say_and_wait(`${callname}, 계속 이겨 나가요!`);
      await era.printAndWait(
        `그렇다. ${kita.sex}는 그렇게 말하며 따뜻한 미소를 지었다.`,
      );
      await era.printAndWait(`그것이 ${kita.name}. 검은 축제다.`);
    };
    f.title = title;
    return f;
  })(),
  tenn_sho_s: (() => {
    const title = '진흙 너머의 꽃길';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.print_and_wait(`이겼다. 이겼어. 이 레이스를 거머쥐었다.`);
      await kita.print_and_wait(
        `크게 숨을 내쉬며 거친 숨소리를 흘린 ${kita.name}은 결승선 너머에서 천천히 달리며 멈춰 섰다.`,
      );
      await kita.print_and_wait(
        `경련하는 두 다리는 이미 한계였고, 실제로 몇 번이나 서로 부딪쳤다.`,
      );
      await kita.print_and_wait(
        `떨림을 멈추려 해도 멈추지 않아 결국 모두가 지켜보는 가운데 두 손으로 다리를 붙잡을 수밖에 없었다……`,
      );
      await kita.say_and_wait(
        `큰일이다. 이거 부끄러운 거 아닌가…… 뭐라도 말해야겠어……`,
        true,
      );
      await kita.say_and_wait(`역시 G1, 소문대로네요~ 아하하~`, true);
      await kita.print_and_wait(
        `그런 감상으로 부끄러움을 지우고 싶었는데 그 말조차 꺼낼 여유가 없었다.`,
      );
      await kita.say_and_wait(
        `우와…… 이거 정말 좀 창피하다. 그리고 왜 웃는 거예요…… 다들 다가와서 보고 있잖아……`,
        true,
      );
      await era.printAndWait(
        `${kita.uma_sex_title}A「키타산 씨! 얼굴! 얼굴!」`,
      );
      await era.printAndWait(
        `${kita.uma_sex_title}B「멍하니 있지 말고 어른을 불러 와!」`,
      );
      await era.printAndWait(`${kita.uma_sex_title}C「으아앗!」`);
      await kita.print_and_wait(
        `응? 다들 왜 저렇게 당황하지. 얼굴에 흙이라도 묻었나?`,
      );
      await kita.print_and_wait(
        `아니, 만져 봐도 아무것도 없다. 끈적한 땀의 감촉뿐…… 달리느라 얼굴이 빨개져서 이상한 표정이라도 지었나?`,
      );
      await kita.print_and_wait(
        `우와, 싫어…… 다이아를 비롯한 ${kita.couple_title}처럼 반짝이는 ${
          kita.sex_code - 1 ? '아가씨' : '스타'
        }로 있고 싶었는데, 이래서야 어른스럽지 못하잖아……`,
      );
      await kita.say_and_wait(
        `『텐노상(가을)』의 ${kita.uma_sex_title}가 달려서 얼굴이 새빨개진 아이라니 싫어…… 으에에~ ${callname}, 어디 계세요?`,
        true,
      );
      await kita.print_and_wait(
        `두리번거리며 ${callname}의 모습을 찾던 ${
          kita.name
        }은 조금 떨어진 곳에서 ${you.name}이(가) 울타리를 넘어 이쪽으로 달려오는 모습을 발견했다.`,
      );
      era.println();
      era.printButton('「키타! 얼굴! 코! 괜찮아!」', 1);
      await era.input();
      await kita.print_and_wait(
        `？ ${callname}까지 무슨 말인지 모르겠는 소리를 하네……? 아, 레이스 감상이요?`,
      );
      await kita.print_and_wait(
        `${kita.name}은 힘껏 코를 훌쩍였다. 쇠처럼, 묘하게 구수한 흙냄새가 목까지 들어왔다.`,
      );
      await kita.print_and_wait(
        `게이트가 열릴 때 고장으로 튕겨 나온 철문에 이마와 코가 찢겨 온 얼굴이 피투성이인 ${kita.name}은 이쪽을 향해 웃으며 크게 말했다.`,
      );
      await kita.say_and_wait(`맛이 엄청 달아요!`);
    };
    f.title = title;
    return f;
  })(),
  japa_cup_s: (() => {
    const title = '하나로 만나는 물줄기';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (kita, you) => {
      await era.printAndWait(
        `${kita.name}이 가장 먼저 결승선을 통과한 뒤 ${you.name}은(는) 울타리를 넘어 서둘러 ${kita.name}의 곁으로 달려갔다.`,
      );
      await era.printAndWait(
        `불과 한 달 동안 요양한 뒤에도 ${you.name}의 담당은 『재팬컵』 출주를 선택했고, 모두의 걱정을 뒤로한 채 코스에 섰다.`,
      );
      await era.printAndWait(`하지만 결국 키타는 이겼다. 그것으로 충분하다.`);
      await kita.say_and_wait(
        `에헤헤, 달리는 도중에 편자가 떨어져서 맨발로 달릴 수밖에 없었어요!`,
      );
      await era.printAndWait(
        `얼굴에 아직 거즈를 붙인 ${kita.name}이 헤헤 웃는 것을 보며 ${you.name}은(는) 가슴이 저려 왔고 안쓰러워 견딜 수 없었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  arim_kin_s: (() => {
    const title = '미소라는 이름의 불꽃';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(`중계「${kita.name}! 골인!」`);
      await era.printAndWait(
        `관중의 박수와 함성 속에서 ${kita.name}은 승리를 알리듯 하늘 높이 팔을 들었다.`,
      );
      await era.printAndWait(
        `두 차례 『아리마 기념』에 도전한 이 ${kita.uma_sex_title}가 지금 경기장에서 『아리마 기념』의 승리를 거머쥐었다.`,
      );
      await era.printAndWait(
        `화려하지도 않고 상처마저 남은 모습으로 연말 무대에서 모두에게 최고의 마무리를 선사했다.`,
      );
      await era.printAndWait(
        `정신을 차려 보니 ${
          you.name
        }은(는) 이미 키타의 곁으로 다가가 수건으로 ${kita.teen_sex_title}의 이마에 맺힌 땀을 안쓰러운 듯 닦아 주고 있었다.`,
      );
      era.println();
      era.printButton('「키타, 상태는 어때?」', 1);
      await era.input();
      await kita.say_and_wait(
        `머릿속이 뒤죽박죽이에요. 솔직히 키타는 머리가 별로 좋지 않아서 달리기랑 생각하기 중 하나밖에 못 하거든요……`,
      );
      await kita.say_and_wait(
        `그래도 모두의 응원도, 전력을 다한 상대도, 제 자신의 노력도 저버리지 않았다고 생각해요.`,
      );
      await era.printAndWait(
        `긴장이 풀린 얼굴의 ${kita.name}은 발끝으로 서서 가느다란 손가락으로 ${you.name}의 팔을 붙잡았다.`,
      );
      await era.printAndWait(
        `타오르는 듯한 열기를 품은 맑은 눈동자가 웃음을 머금고 ${you.name}을(를) 마주했다.`,
      );
      await kita.say_and_wait(`그리고 ${callname}도 저버리지 않았어요.`);
      await kita.say_and_wait(
        `헤헤헤~ 이게 제 인생 마지막 레이스예요. 다행이다……`,
      );
      await era.printAndWait(
        `${kita.teen_sex_title}의 볼은 수줍음과 달리기 때문에 새빨갰고, 그 말을 입에 올린 ${
          kita.sex
        }도 조금 당황하고 있었다.`,
      );
      await era.printAndWait(
        `아직 어린아이구나, 하고 ${you.name}은(는) 생각하며 두 팔을 벌려 ${kita.name}을 힘껏 안았다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  we_95_48: (() => {
    const title = '키타산 블랙과 보내는 바의 밤';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `${you.name}의 담당과 어느 바에서 만나기로 약속했다.`,
      );
      await era.printAndWait(
        `${kita.name}과 삼 년을 보내고 마침내 끝이 다가왔다. 이번 달이 ${
          kita.sex
        }와 보내는 마지막 달이 될지도 모른다.`,
      );
      await era.printAndWait(
        `그런 쓸쓸한 생각을 품은 채 ${you.name}은(는) 검은 고양이 간판이 달린 지하 바의 문을 밀고 안으로 들어갔다.`,
      );
      await kita.say_and_wait(`아, ${callname}…… 어…… 어서 오세요~`);
      await era.printAndWait(
        `문을 열자 텅 빈 바에 교복 차림의 ${kita.name}만 카운터에 앉아 있었다.`,
      );
      await era.printAndWait(
        `${kita.teen_sex_title}은(는) 빈 잔을 흔들고 있었고 볼은 살짝 붉었다. 옆에는 뚜껑을 딴 탄산음료 한 병만 놓여 있었다.`,
      );
      await kita.say_and_wait(
        `저기…… 하하…… 엄마 지인이 운영하시는 가게인데 크리스마스에 고향으로 가신다고 해서, 조용한 곳이 필요하길래 빌렸어요.`,
      );
      await kita.say_and_wait(`그러니까…… 술은 없어요, ${callname}~ 아하하하~`);
      era.println();
      era.printButton(`「키타랑 같이 있는데 술은 안 마시지……」`, 1);
      await era.input();
      await kita.say_and_wait(`그렇겠죠……`);
      await era.printAndWait(
        `창가에서 굽 달린 잔에 담긴 탄산음료를 마시며 키타는 밖의 쓸쓸한 거리를 바라보고 생각에 잠겼다.`,
      );
      await era.printAndWait(
        `검은 말 귀가 차가운 유리에 닿아 톡톡 가볍게 두드리고 있었다……`,
      );
      await kita.say_and_wait(`${callname}, 이런 조용한 분위기 좋아하세요?`);
      era.println();
      era.printButton(`「조용한 분위기?」`, 1);
      await era.input();
      await kita.say_and_wait(
        `네. 창문을 두드리는 눈. 사람이 없는 거리. 희미한 바람 소리뿐인 곳이요.`,
      );
      await kita.say_and_wait(`키타는 이런 분위기, 꽤 좋아하거든요……`);
      await era.printAndWait(
        `늘 신나게 뛰노는 ${kita.name}이 이런 풍경을 좋아한다는 것은 조금 의외였다.`,
      );
      await era.printAndWait(
        `${you.name}도 ${kita.name}과 함께 유리창에 기대 성야의 고요함과 차가움을 느꼈다.`,
      );
      await era.printAndWait(`마지막 며칠을 보내기에 나쁘지 않다.`);
    };
    f.title = title;
    return f;
  })(),
  kitasan_touch: (() => {
    const title = '긴급 개점·키타 마사지!';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`${callname}! 어서 오세요, 키타 마사지점입니다!`);
      await era.printAndWait(
        `트레이너실 문을 열자 기모노 차림의 ${kita.name}이 문 안쪽에 무릎을 꿇고 있었다. 뒤쪽 책상에는 흰 천이 덮여 있었다.`,
      );
      await era.printAndWait(
        `뭘 하는 거지…… ${
          you.name
        }은(는) 오늘 트레이닝 일정이 없을 터인 ${kita.teen_sex_title}을(를) 멍하니 바라보았다.`,
      );
      await kita.say_and_wait(
        `헤헤헤~ ${callname}에게 늘 신세 지는 것도 감사드리고, 요즘 몸에서 삐걱삐걱 소리가 나시니까요.`,
      );
      await kita.say_and_wait(
        `그래서…… 네, 맞아요. 오늘 키타는 임시 마사지 담당이에요. ${callname}의 몸을 풀어 드릴 마사지점 ${
          kita.sex_code - 1 ? '여주인' : '주인장'
        }, 키타입니다!`,
      );
      await era.printAndWait(
        '그렇게 말한 키타는 이마를 바닥에 대고 그 앞에 세 손가락을 가지런히 모았다. 매끄럽고 부드러운 등이 드러났다.',
      );
      await era.printAndWait(
        `${
          you.name
        }은 그제야 알아차렸다. 키타가 입은 옷은 배가리개처럼 등이 트인 옷이라, 몸을 숙이면 ${kita.uma_sex_title}의 등이 자아내는 색기가 고스란히 드러났다.`,
      );
      era.printButton('「아니, 아니, 아무리 그래도 이건 이상하잖아……」', 1);
      era.printButton('「그럼 부탁할게.」', 2);
      if ((await era.input()) === 1) {
        await era.printAndWait(
          `${you.name}은(는) 뒤로 물러나 도망치려 했지만 척추가 삐걱거리는 소리와 감각에 ${you.name}은(는) 고통스럽게 허리를 굽혔다.`,
        );
        await era.printAndWait(
          `……안 되겠다. 키타의 마사지를 받을 수밖에 없다…… 키타는 둘째 치고 이 허리가 허락하지 않는다……`,
        );
        await era.printAndWait(
          `${you.name}은(는) 몸을 돌려 비틀거리며 키타에게 걸어갔다.`,
        );
        era.drawLine();
        await era.printAndWait(
          '몸 곳곳에서 삐걱거리는 소리가 나지만 가끔 아픈 것만 빼면 기분이 좋다.',
        );
        await era.printAndWait(
          `지친 몸이 키타의 손가락 아래에서 가벼워졌다. 부드러우면서도 힘 있는 마사지가 몸을 풀어 주었다. 역시 키타다…… 그렇게 생각하던 ${you.name}은(는) 졸음을 이기지 못하고 그대로 잠들었다.`,
        );
      } else {
        await era.printAndWait(
          `${kita.name}은 트레이너에게 우아한 미소를 보이고 개처럼 네 발로 기어가, ${you.name}이 옷을 벗기고 이어 붙인 책상에 엎드리게 하도록 맡겼다.`,
        );
        await era.printAndWait(
          `이 아이, 누구한테 배운 거지……? ${
            you.name
          }은(는) 의아한 표정으로 ${kita.teen_sex_title}이(가) 일어나 ${
            you.name
          }의 등에 올라타는 것을 느꼈다.`,
        );
        await era.printAndWait(
          `삼십 초쯤 기다리자 ${kita.name}의 가늘지만 힘 있는 손가락이 ${you.name}의 등에서 뭉친 곳을 차례로 눌렀다.`,
        );
        await kita.say_and_wait(
          `${callname}의 몸, 정말 많이 뭉쳤네요…… ${kita.uma_sex_title}와는 다르니까 몸은 제대로 쉬게 해 주세요.`,
        );
        await era.printAndWait(
          '몸 곳곳에서 삐걱거리는 소리가 나지만 가끔 아픈 것만 빼면 기분이 좋다.',
        );
        await era.printAndWait(
          `지친 몸이 키타의 손가락 아래에서 가벼워졌다. 부드러우면서도 힘 있는 마사지가 몸을 풀어 주었다. 역시 키타다…… 그렇게 생각하던 ${you.name}은(는) 졸음을 이기지 못하고 그대로 잠들었다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  hot_spring_event: (() => {
    const title = '온천 여행';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     * @param {boolean} has_ticket 温泉旅行券を持っている（商店街の抽選）
     */
    const f = async (kita, you, callname, has_ticket) => {
      await era.printAndWait(
        `${you.name}은(는) 트레이너실에서 서류를 정리하고 있었다……`,
      );
      await kita.say_and_wait(`${callname}! 저기, 온천 여행권 말인데요!`);
      await kita.say_and_wait(`지난 삼 년 동안 저, 열심히 했죠!`);
      await kita.say_and_wait(`그렇죠, ${callname}！`);

      await era.printAndWait(
        `갑자기 트레이너실로 뛰어 들어온 키타가 그렇게 큰 소리로 ${you.name}에게 물었다.`,
      );
      await era.printAndWait([
        '갑자기 무슨 말을 하는 거지? ',
        you.get_colored_name(),
        '은(는) 조금 놀라 눈앞의 ',
        kita.teen_sex_title,
        '을(를) 바라보았다.',
      ]);
      era.println();
      era.printButton('「응, 열심히 했지.」', 1);
      await era.input();
      await era.printAndWait(
        `어쨌든 지난 삼 년의 승리는 누구의 눈에도 분명했다.`,
      );
      await era.printAndWait(
        `${kita.name}의 노력에는 의심의 여지가 없다. 자신의 예상마저 뛰어넘었다. 결과도 눈에 보인다.`,
      );
      await kita.say_and_wait(
        `고마워요. 지난 삼 년 동안 키타는 쭉 참고 있었어요……`,
      );
      await kita.say_and_wait(
        `하지만 지금은 ${callname}의 노력도 있었으니까, 키타한테 조금쯤 상을 주셔도 되겠죠!`,
      );
      await era.printAndWait(
        `검은 머리의 ${kita.teen_sex_title}이(가) 한 걸음씩 다가와 가느다란 두 손으로 ${
          you.name
        }의 어깨를 눌러 움직이지 못하게 했다.`,
      );
      if (has_ticket) {
        await kita.say_and_wait([
          '그러니까 ',
          callname,
          ', 전에 받은 여행권으로 온천 가요!',
        ]);
        era.println();
        era.printButton(
          `「가자! 키타, 손 놓아 줘, 지금 당장 갈게! 그러니까 놓아 줘!」`,
          1,
        );
        await era.input();
        await era.printAndWait([
          '그렇게 말하며 ',
          you.get_colored_name(),
          '은(는) 서둘러 서랍에 넣어 두었던 온천 여행권을 꺼내 ',
          kita.get_colored_name(),
          '의 앞에서 흔들었다.',
        ]);
      } else {
        await kita.say_and_wait(['그러니까 ', callname, ', 온천 가요!']);
        await era.printAndWait([
          kita.get_colored_name(),
          '은 그렇게 말하며 온천 여행권 한 장을 보여 주었다. 희미하게 「키타」로 시작하는 글자가 찍혀 있었다……',
        ]);
      }
      era.drawLine({ content: '온천 여관' });
      await era.printAndWait(
        `상을 받고 싶어 안달 난 키타가 무슨 엄청난 일을 벌이기 전에 ${you.name}은(는) 키타와 온천 여관에 왔다.`,
      );
      await kita.say_and_wait(
        `후아아~ 여기 온천, 기분 좋네요~ 몸도 마음도 깨끗하고 상쾌해요~`,
      );
      await era.printAndWait(
        `하얀 목덜미를 수건으로 닦으며 ${kita.name}은 푹신한 방석에 무릎을 꿇었다. 매끄러운 말 꼬리가 부드럽고 힘 있는 두 다리 사이에서 흔들렸다.`,
      );
      await era.printAndWait(
        `평소의 긴장한 분위기는 사라졌고 온천을 마친 키타는 한결 편안해 보였다.`,
      );
      await era.printAndWait(`간질간질.`);
      await era.printAndWait(
        `${you.name}은(는) 몸을 움찔했다. 어느새 키타가 바닥에 엎드려 꼬리로 ${you.name}의 발바닥을 간질이고 있었다.`,
      );
      await era.printAndWait(
        `${you.name}에게 들키자 키타는 얼른 다다미 위를 구르며 까르르 웃기 시작했다.`,
      );
      await kita.say_and_wait(
        `후후후~ 평소에는 늘 긴장하고 있으니까, 마음이 풀리면 어린아이처럼 트레이너 앞에서 응석 부리고 싶어져요…… 앗!`,
      );
      await era.printAndWait(
        `구르고 있던 ${kita.name}은 어느새 벽에 부딪쳐 큰 소리를 내고는 얼빠진 미소를 지었다.`,
      );
      await era.printAndWait(
        `가끔은 바보처럼 떠들어도 나쁘지 않다. 그렇게 생각하며 ${you.name}은(는) ${kita.name}과 방 안에서 똑같이 바보처럼 웃고 장난치기 시작했다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ge_wife_end: (() => {
    const title = '당신만의 검은 석양';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `삼 년은 순식간에 지나고 ${you.name}와(과) ${kita.name}은 이별의 날을 맞았다.`,
      );
      await kita.say_and_wait(`며칠 뒤면 헤어지네요. 어쩐지 불안해요.`);
      await kita.say_and_wait(
        `${callname}, 몇 달 뒤면 새로운 아이를 맞아서 그 아이의 전담 트레이너가 되시겠죠.`,
      );
      await kita.say_and_wait(`헤헤, 조금 싫네요……`);
      await era.printAndWait(
        `트레이너실에 두었던 책과 짐을 안은 ${kita.teen_sex_title}은(는) 조금 쓸쓸한 표정을 지었다.`,
      );
      await era.printAndWait(
        `황혼의 고요함 속을 나란히 걸었다. 복도에는 키타의 타다닥거리는 발소리가 울리고, 아무도 없는 교실에 여운이 남았다.`,
      );
      await era.printAndWait(
        `몇 번이나 나란히 걸었는지 모를 길인데 오늘은 유난히 길었다.`,
      );
      await era.printAndWait(
        `아무래도 ${kita.name}은 고향으로 돌아갈 예정이니까.`,
      );
      await era.printAndWait(
        `연세가 드신 아버지에게 무사하다고 알리러 갈 뿐이고 돌아오지 않겠다고 정해진 것도 아니다. 하지만 트레센으로 돌아와도 ${kita.teen_sex_title}이(가) 당신과 계속 함께할 것이라는 보장은 없다.`,
      );
      await kita.say_and_wait(`저, ${callname}을(를) 좋아해요.`);
      await era.printAndWait(
        `모퉁이를 지나며 ${kita.teen_sex_title}은(는) 담담하게 말했다.`,
      );
      await era.printAndWait(
        `석양이 키타의 앳된 얼굴을 비추고 평소의 따뜻한 미소를 다른 빛깔로 물들였다.`,
      );
      await kita.say_and_wait(
        `아니, 세상에서 제일 좋아해요. ${callname}의 반려자가 되어 쭉 함께 있고 싶어요.`,
      );
      await era.printAndWait(
        `그제야 ${you.name}은(는) 알아차렸다. 키타의 볼이 붉은 것은 따뜻한 석양 때문만이 아니었다. 정돈한 검은 머리카락이 매끄럽게 흘러내리고 향수 냄새까지 났다.`,
      );
      await era.printAndWait(
        `${kita.teen_sex_title}은(는) 수줍은 표정을 지었고, 평소의 활기찬 모습과 달리 겁먹은 듯 조심스러운 목소리로 ${
          kita.name
        }은 ${you.name}에게 물었다.`,
      );
      await kita.say_and_wait(
        `${callname}, 앞으로도 계속 저를 좋아해 주실래요?`,
      );
      await era.printAndWait(`타닥, 타닥, 타닥.`);
      await era.printAndWait(
        `조용한 복도에는 두 사람의 발소리만 남았다. 볼을 물들인 석양은 아직 가시지 않은 모양이다.`,
      );
      era.println();
      era.printButton('「키타.」', 1);
      await era.input();
      await kita.say_and_wait(`네.`);
      era.println();
      era.printButton('「나도, 쭉, 네가 제일 좋았어.」', 1);
      await era.input();
      await era.printAndWait(
        `발소리는 뚝 멎었고, 석양의 심장만 더욱 세차게 뛰었다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  ge_love_end: (() => {
    const title = '키타산 블랙의 작은 축제';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `어린 ${kita.uma_sex_title}A「우와! 키타 ${
          kita.elder_sibling_sex_title
        }가 왔다! 도망가!」`,
      );
      await kita.say_and_wait(`거기 서라, 거기 서!`);
      await era.printAndWait(
        `초등학교의 잔디 운동장에서 ${
          kita.name
        }은 까르르 웃으며 어린 ${kita.uma_sex_title}들을 쫓아다니며 함께 뛰놀고 있었다.`,
      );
      await era.printAndWait(
        `지역 학교를 대상으로 하는 공익 레이스 간담회다. ${kita.name}의 출주 일정이 일단락된 뒤 트레센이 추진하는 공익 사업이다.`,
      );
      await era.printAndWait(
        `지역에 자금을 지원하는 것뿐 아니라 트레이너나 ${kita.uma_sex_title}가 되고 싶은 인재를 발굴하는 것도 목표다.`,
      );
      await era.printAndWait(
        `그리고 친선 대사로 지역 학교들을 돌게 된 사람이 키타산 블랙이었다.`,
      );
      await era.printAndWait(
        `무명에서 단숨에 주목받는 선수로 올라서기까지 지난 삼 년은 키타산 극장이라고 해도 좋다. 사람들 사이에서 쌓아 온 인기가 키타에게 무시할 수 없는 발언권을 주었다.`,
      );
      await era.printAndWait(
        `일 이외에 키타가 가장 좋아하는 것은 아이들과 즐겁게 술래잡기하는 일이었다.`,
      );
      await era.printAndWait(
        `키타는 대단한 ${kita.uma_sex_title}다. 느린 아이도 즐겁고 빠른 아이도 즐겁다. 선생님들도 한숨 돌릴 수 있다.`,
      );
      await kita.say_and_wait(
        `후아앗! 헤헤~ 정말 귀여운 아이들이네요, ${callname}。`,
      );
      await era.printAndWait(
        `수건으로 이마의 땀을 닦으며 ${kita.name}은 방긋 웃으며 아이들을 데리고 다가왔다.`,
      );
      await era.printAndWait(
        `외부인을 보고 신이 났는지 아이들은 저마다 무언가 재잘거렸다.`,
      );
      await era.printAndWait(
        `어린 ${kita.uma_sex_title}B「있잖아요! 트레이너${you.adult_sex_title}이랑 키타 ${
          kita.elder_sibling_sex_title
        }는 사귀는 거예요!」`,
      );
      await era.printAndWait(`그런 말을 꺼내는 아이가 나오기 전까지는……`);
      await kita.say_and_wait(`네!? 저, 그게…… 응, 사귀냐고?`);
      await kita.say_and_wait(
        `그건, 아하하…… 뭐라고 해야 할까…… 별로 말하고 싶지는 않은데……`,
      );
      await kita.say_and_wait(
        `하지만 나랑 ${callname}은(는) 매일 같이 있으니까, 사귀는 것과 비슷하려나?`,
      );
      await era.printAndWait(
        `아이들의 머리를 다정하게 쓰다듬으며 ${kita.name}은 조금 난처하게 웃었다.`,
      );
      await era.printAndWait(
        `대답하면 안 되는 질문도 있는 법이다…… 그렇게 생각하며 ${you.name}은(는) 키타의 트레이닝 이야기를 꺼내 아이들의 관심을 돌렸다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  be_back_home: (() => {
    const title = '고향으로 돌아가는 키타산 블랙';
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await kita.say_and_wait(`죄송해요, ${callname}。`);
      await era.printAndWait(
        `고향으로 향하는 정류장에 선 ${kita.name}은 ${you.name}에게 깊이 인사했다.`,
      );
      await era.printAndWait(
        `늘 활기차던 ${kita.teen_sex_title}은(는) 지금 창백했고, 눈가는 운 흔적처럼 눈에 띄게 부어 있었다.`,
      );
      await era.printAndWait(
        `레이스에서 진 탓에 분노한 팬들이 학원으로 몰려와 「원흉」인 ${you.name}을(를) 처분하라고 요구했다.`,
      );
      await era.printAndWait(
        '마지막에는 어째서인지 잠잠해졌다. 하지만 키타는 더는 트레센 학원에서 트레이닝을 이어 갈 수 없게 되었다.',
      );
      era.println();
      era.printButton(`「미안해, 키타.」`, 1);
      await era.input();
      await kita.say_and_wait(
        `아뇨, 사과해야 할 사람은 저예요. ${callname}에게는 아무 잘못도 없어요.`,
      );
      await era.printAndWait(
        `힘없는 미소를 지으며 ${kita.name}은 다시 눈물을 흘렸다.`,
      );
      await era.printAndWait(
        `이 짧은 며칠 동안 ${kita.teen_sex_title}은(는) 몇 번이나 울었을까.`,
      );
      await kita.say_and_wait(
        `역시 키타는 이길 수 있는 ${kita.uma_sex_title}가 아니었어요.`,
      );
      await kita.say_and_wait(
        '얼굴도 평범하고 튼튼한 것밖에 장점이 없어서요. 죄송해요, 이렇게 오랜 시간을 허비하게 해서.',
      );
      await kita.say_and_wait(
        `책임은 제가 질게요. 안녕히 계세요, ${callname}。`,
      );
      await era.printAndWait(
        `고향으로 가는 버스에 올라탄 ${kita.name}은 쉴 새 없이 울리는 휴대전화에 한마디를 중얼거렸다.`,
      );
      await era.printAndWait(
        `그 목소리는 바람에 흩어져 ${you.name}의 귀에는 닿지 않았다.`,
      );
      await era.printAndWait(
        `그 뒤 ${kita.name}을 향하던 열기는 어째서인지 가라앉았다.`,
      );
      await era.printAndWait(
        `${you.name}의 트레이너 생활은 ${kita.name}이 처음부터 없었던 것처럼 평범하게 이어졌다.`,
      );
      await era.printAndWait(
        `하지만 가끔 ${
          you.name
        }은(는) 그 ${kita.teen_sex_title}이(가) 뒤돌아섰을 때의 연약하고 쓸쓸한 뒷모습을 떠올렸다.`,
      );
    };
    f.title = title;
    return f;
  })(),
  be_hello: (() => {
    const title = (callname) => `${callname}, 요즘 잘 지내세요?`;
    /**
     * @param {CharaTalk} kita キタサンブラック
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname キタサンのプレイヤーへの呼び方
     */
    const f = async (kita, you, callname) => {
      await era.printAndWait(
        `${kita.name}이 졸업한 뒤 얼마나 시간이 지났을까.`,
      );
      await era.printAndWait(
        `이제 똑똑히 기억나지 않는다. 그 검은 ${kita.teen_sex_title}이(가) 떠난 뒤 ${
          you.name
        }은(는) 지금까지처럼 트레이너로 일했다.`,
      );
      await era.printAndWait(
        `새로운 아이의 트레이너가 되어 조금 가혹한 메뉴로 단련시킨다.`,
      );
      await era.printAndWait(`삼 년 뒤에는 그 아이들을 배웅한다.`);
      await era.printAndWait(
        `가끔 연락하는 아이도 있고 그러지 않는 아이도 있다. 하지만 해마다 어김없이 ${kita.name}은 ${you.name}의 손이 빌 때 전화를 걸어왔다.`,
      );
      await kita.say_and_wait(`${callname}, 요즘 어떠세요?`);
      await kita.say_and_wait(
        `새로운 담당이요? 힘들지는 않으세요? 생각해 보면 그때 키타는 정말 말을 잘 들었죠~`,
      );
      await kita.say_and_wait(
        `저요? 아아~ 엔카 가수 데뷔를 준비하고 있어요. 에헤헤~ 아빠도 연세가 있으시니까요.`,
      );
      await era.printAndWait(
        `그렇게 근황을 이야기하고 재미있는 일을 나누며 그 삼 년을 추억했다.`,
      );
      await era.printAndWait(
        `${kita.name}은 헤헤 웃고 ${you.name}와(과) 서로의 근황을 축하하며 평소처럼 통화를 마쳤다.`,
      );
      await you.say_and_wait(`이것으로 됐다.`);
      await you.say_and_wait(`이것으로 된 것이다.`);
    };
    f.title = title;
    return f;
  })(),
};
