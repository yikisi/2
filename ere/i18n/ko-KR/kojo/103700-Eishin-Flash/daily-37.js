/**
 * @file エイシンフラッシュ - 日常
 * @author 爱放箭的袁本初
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');
const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  good_morning(flash, callname) {
    const buffer = [
      () =>
        flash.say(
          `좋은 아침입니다, ${callname}. 새로운 하루, 새로운 여정, 새로운 희망이네요. 긍정적으로 나아가죠.`,
        ),
      () => flash.say(`Guten Tag、${callname}. 부디 좋은 하루 보내세요.`),
      () =>
        flash.say(
          `Guten Morgen、${callname}. 또 새로운 하루네요. 오늘의 계획은 준비되셨나요?`,
        ),
      () =>
        flash.say(
          `좋은 아침입니다, ${callname}. 바쁘시더라도 주변의 아름다움에 눈을 돌릴 여유는 잊지 마세요.`,
        ),
    ];
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  select(flash, callname) {
    const buffer = [];
    const relation = era.get(`relation:37:0`);
    if (relation < 0) {
      buffer.push(() => flash.say(`……하아. 무슨 일이신가요, ${callname}？`));
    } else {
      buffer.push(() =>
        flash.say(`여기 있습니다. ${callname}. 무슨 일이신가요?`),
      );
      if (relation > 75)
        buffer.push(() =>
          flash.say(
            `후우…… 조금 기다려지기 시작했네요. 자, 시작하죠, ${callname}。`,
          ),
        );
      if (relation > 225)
        buffer.push(() =>
          flash.say(
            '시간, 이상 없음. 장소, 정확함. 그리고…… 후훗. 계획 확인 완료. 에이신 플래시, 언제든 당신의 명령을 기다리고 있습니다.',
          ),
        );
      if (era.get('love:37') > 76) {
        buffer.push(
          () =>
            flash.say(
              `음, 긴말할 필요 없겠죠. 이미 준비는 끝났으니까요, ${callname}。`,
            ),
          () => flash.say(`후훗~ 여기 있습니다. ${callname}. 무슨 일이신가요?`),
          () =>
            flash.say(
              `후우…… 몹시 기다려지네요. 지금 바로 시작하죠, ${callname}。`,
            ),
        );
      }
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} flash エイシンフラッシュ */
  async office_study(flash) {
    const buffer = [
      () =>
        flash.say_and_wait(
          '알고 계셨나요? 독일에서는 「안녕하세요」에 해당하는 표현 대신 Guten Tag, 즉 「좋은 낮」이라고 인사한답니다.',
        ),
      () =>
        flash.say_and_wait(
          '알고 계셨나요? 독일에서는 돼지를 행운과 부를 가져다주는 길한 동물로 여겨요. 새해에는 소중한 분께 아기 돼지 모양의 선물을 드리곤 한답니다.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async office_prepare(flash, you, callname) {
    era.print(
      `${you.name}은(는) 에이신 플래시와 트레이닝실에서 레이스 전 준비를 했다.`,
    );
    const buffer = [
      async () => {
        await flash.say_and_wait(
          '현재 기상 상태, 예보와 일치. 경기장 상황, 예상 범위 내. 본인 컨디션…… 완벽.',
        );
        await flash.say_and_wait(
          `후우…… 모든 것이 계획대로군요. 그럼 다녀오겠습니다, ${callname}。`,
        );
      },
      () =>
        flash.say_and_wait(
          `toi, toi, toi…… 후우…… 좋아! ${callname}, 다녀올게요.`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async talk(flash, callname) {
    const buffer = [];
    const relation = era.get(`relation:37:0`);
    if (era.get('cflag:37:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:37:干劲')) {
        case -2:
          buffer.push(
            () =>
              flash.say_and_wait(
                '컨디션이…… 최악이네요. 다음 계획을 조정해야만 하는 단계에 온 걸까요?',
              ),
            () =>
              flash.say_and_wait(
                '인정하고 싶지는 않지만, 계획의 정상적인 수행에 지장을 줄 정도의 상태군요…… 정말 변화를 시도해야 할지도 모르겠어요.',
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              flash.say_and_wait(
                '상태가…… 조금 좋지 않네요. 하지만 이미 예정된 계획이 이런 일로 방해받아서는 안 되겠죠?',
              ),
            () => flash.say_and_wait('후우…… 끝까지 해내겠어요!'),
          );
          break;
        case 0:
          buffer.push(
            () =>
              flash.say_and_wait(
                '음, 지금 컨디션이라면 현재 계획을 수행하는 데 아무런 문제가 없습니다.',
              ),
            () =>
              flash.say_and_wait(
                '아무리 평범한 하루라도 실행해야 할 계획이 있는 법이죠. 성공이란 이런 매일의 성실함이 쌓여서 이루어지는 것 아닐까요?',
              ),
          );
          break;
        case 1:
          buffer.push(
            () =>
              flash.say_and_wait(
                '기분이 아주 좋네요. 이런 상태라면 계획한 일들을 수월하게 예상대로 마칠 수 있을 거예요.',
              ),
            () =>
              flash.say_and_wait(
                `충만한 하루를 맞이할 생각에 몸이 흥분하고 있어요. 어서 오늘의 계획을 시작하죠, ${callname}！`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              flash.say_and_wait(
                '지금 몸이 굉장히 가볍게 느껴져요. 정말 드문 경험이네요. 자, 다음 계획을 실행하러 가요!',
              ),
            () =>
              flash.say_and_wait(
                `이런 컨디션이라면 어떤 일을 해도 평소보다 배의 효율을 낼 수 있겠죠. 목표를 향해 노력해 봐요, ${callname}！`,
              ),
          );
      }
    }
    if (relation > 525)
      buffer.push(() =>
        flash.say_and_wait(
          '사실 저는 영원이라는 것을 믿지 않았어요. 영원함을 상징하는 다이아몬드조차 언젠가는 산화하기 마련이니까요. 하지만 당신과의 만남이 제 생각을 바꾸어 놓았답니다.',
        ),
      );
    if (era.get('love:37') >= 75) {
      buffer.push(
        () =>
          flash.say_and_wait(
            'To love and to be loved is the greatest happiness of existence. 이 말의 뜻을 아시나요? 저는 지금 그 의미를 뼈저리게 느끼고 있답니다.',
          ),
        () =>
          flash.say_and_wait(
            '후훗~ 당신을 볼 때마다 내면에서 달콤한 감정이 솟아나요. 이것이 어쩌면 『마음』의 맛일까요?',
          ),
      );
    }
    if (relation > 225)
      buffer.push(() =>
        flash.say_and_wait(
          '당신과 함께할 때마다 가슴에 특별한 감정이 생겨요. 고향 말로 표현하자면 『Schmetterlinge im Bauch haben』, 배 속에 나비가 날아다니는 느낌이겠네요.',
        ),
      );
    if (relation > 375)
      buffer.push(() =>
        flash.say_and_wait(
          '레시피가 곧 법이라고는 하지만, 그것이 디저트 제작 자체가 딱딱한 행위여야 함을 뜻하지는 않아요. 예를 들어, 누군가를 향한 강렬한 애정을 가미함으로써 완성품을 훨씬 맛있게 만들 수도 있죠. 후훗~ 묘하지만 확실히 효과가 있는 방법이랍니다.',
        ),
      );
    buffer.push(() =>
      flash.say_and_wait(
        '추첨에 대해 어떻게 생각하시나요? 다른 뜻은 없어요. 얼마 전 쉬는 시간에 목록대로 장을 봤더니 무료 추첨권을 주셔서 시험 삼아 해 봤거든요. 그런데 일등에 당첨되어서…… 기쁨보다 당혹스러움이 컸어요. 객관적으로 보면 종이 한 장으로 비싼 물건을 얻은 셈이잖아요. 제게는 전혀 공평하지 않은 대가처럼 느껴졌어요.',
      ),
    );
    if (relation > 375)
      buffer.push(() =>
        flash.say_and_wait(
          '레시피가 곧 법이라고는 하지만, 그것이 디저트 제작 자체가 딱딱한 행위여야 함을 뜻하지는 않아요. 예를 들어, 누군가를 향한 강렬한 애정을 가미함으로써 완성품을 훨씬 맛있게 만들 수도 있죠. 후훗~ 묘하지만 확실히 효과가 있는 방법이랍니다.',
        ),
      );
    if (era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5)
      buffer.push(
        () =>
          flash.say_and_wait(
            '『Der Frühling ist die Zeit der Pläne, der Vorsätze』. 봄은 제게 매우 중요한 계절이에요. 이 기간에 일 년의 계획을 세심하게 고민하고 세워야 하니까요.',
          ),
        () =>
          flash.say_and_wait(
            '봄이군요…… 만물이 소생하는 계절이 돌아왔어요. 아시나요? 저는 이 시기에 맞춰 정확히 피어나는 식물들에게 특별한 감정을 가지고 있답니다. 그렇게 하려면 겨울의 냉혹함을 견뎌내야만 하니까요…… 어떤 타격을 입더라도 결국 자신의 사명을 정확히 완수해 내는 모습은 정말 존경스러워요.',
          ),
      );
    if (era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8)
      buffer.push(
        () =>
          flash.say_and_wait(
            '여름은 언제든 열사병의 위험이 있으니 제때 수분을 보충하는 것을 잊지 마세요. 건강을 위해서 아주 중요한 일이랍니다.',
          ),
        () =>
          flash.say_and_wait(
            '여름이 왔네요…… 어릴 적 휴가 시즌마다 부모님이 저를 호숫가의 작은 오두막으로 데려가 피서를 즐겼던 기억이 나요. 후훗~ 정말 잊지 못할 즐거운 추억이죠.',
          ),
      );
    if (era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11)
      buffer.push(
        () =>
          flash.say_and_wait(
            '가을이 오면 독일 뮌헨의 옥토버페스트가 떠올라요. 놀이공원 같은 즐거움과 자유롭게 술을 마시는 분위기가 어우러진, 남녀노소 즐기는 축제죠. 무척 활기차답니다. 언젠가 당신과 함께 가고 싶어요.',
          ),
        () =>
          flash.say_and_wait(
            `역시 가을은 운동하기 딱 좋은 계절이에요. ${callname}, 저랑 같이 축구 한 판 어떠신가요?`,
          ),
      );
    if (era.get('flag:当前月') === 12 || era.get('flag:当前月') <= 2)
      buffer.push(
        () =>
          flash.say_and_wait(
            '평소보다 겨울에는 실내에 머무는 시간이 눈에 띄게 늘어나네요. 하지만 그게 나쁜 일만은 아니에요. 새로운 레시피를 연구하기에는 아주 좋은 기회니까요.',
          ),
        () =>
          flash.say_and_wait(
            '눈이 내리는 계절이 되면 고향의 독일식 크리스마스 케이크인 슈톨렌이 생각나요. 반죽에 말린 과일과 견과류를 듬뿍 넣은 크리스마스 디저트인데, 전 그 맛을 정말 좋아하거든요. 매년 크리스마스마다 가족들과 함께 만들곤 했죠. 그러니 당신도 관심이 있다면, 적당한 기회가 왔을 때 대접해 드릴 수도 있답니다. 후훗.',
          ),
      );
    if (era.get('cflag:49:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          `나카야마 씨는 승부에 임하는 태도가 저와 전혀 달라요. 그렇기에 ${flash.sex}에게서 새로운 관점을 배울 수 있어요…… 이건 정말 좋은 일이죠.`,
        ),
      );
    if (era.get('cflag:7:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          `그러고 보니 지난 일요일에는 골드 쉽 씨와 케이크 가게의 신제품을 맛보기로 했는데, 어느새 옛날 과자 품평회가 되어 있더군요…… 객관적으로 말씀드리자면, ${flash.sex}가 추천한 간식들도 맛은 꽤 훌륭했답니다, 후후~`,
        ),
      );
    if (era.get('cflag:48:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          '자신만의 방식으로 많은 사람과 자연스럽게 우정을 이어 가는 조던 씨의 솜씨에는 정말 감탄하게 돼요.',
        ),
      );
    if (era.get('cflag:38:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          `인형 말인가요? 아, 카렌 씨에게 받은 선물이에요. 후훗. 무척 정교하죠? ${flash.sex}의 취향은 ${flash.sex} 본인만큼이나 귀엽네요.`,
        ),
      );
    if (era.get('cflag:105:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          '네오 유니버스 씨는 제가 만드는 초코 쿠키를 무척 좋아하시는 것 같아요. 후훗. 제과사로서는 큰 격려가 되죠. 그러니 더 맛있는 디저트를 개발해야겠어요!',
        ),
      );
    if (era.get('cflag:46:招募状态') === 1)
      buffer.push(() =>
        flash.say_and_wait(
          '팔코 씨는 제 냄새만으로 오늘 어떤 디저트를 만들었는지 맞히세요. 솔직히 대단한 능력이지만…… 조금 부끄럽네요.',
        ),
      );
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} flash エイシンフラッシュ */
  async talk_about_gacha(flash) {
    await flash.say_and_wait(
      '추첨에 대해 어떻게 생각하시나요? 다른 뜻은 없어요. 얼마 전 쉬는 시간에 목록대로 장을 봤더니 무료 추첨권을 주셔서 시험 삼아 해 봤거든요. 그런데 일등에 당첨되어서…… 기쁨보다 당혹스러움이 컸어요. 객관적으로 보면 종이 한 장으로 비싼 물건을 얻은 셈이잖아요. 제게는 전혀 공평하지 않은 대가처럼 느껴졌어요.',
    );
  },
  /** @param {CharaTalk} flash エイシンフラッシュ */
  async talk_about_falcon_and_gacha(flash) {
    await flash.say_and_wait(
      `팔코 씨는 제가 추첨을 대하는 태도가 너무 특이하다고 하셨어요. ${flash.sex}는 불로소득이 아니라 제게 걸맞은 보상이니 안심하고 받으면 된다고…… 하아. ${flash.sex}의 말씀이 맞을지도 모르겠네요. 제 사고방식을 바꿔 봐야 할까요.`,
    );
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async office_gift(flash, callname) {
    const buffer = [
      () =>
        flash.say_and_wait(
          '네, 선물이라고요? 제게요? ……후훗, 알겠습니다. 마음 써 주셔서 감사해요. 이 호의에는 반드시 보답하겠어요. 약속드릴게요.',
        ),
      () =>
        flash.say_and_wait(
          `besten Dank！ ${callname}, 그 마음을 저버리지 않겠어요.`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async office_cook(flash, callname) {
    const buffer = [
      () =>
        flash.say_and_wait(
          `흰자 100그램, 노른자 60그램, 그리고…… 아! ${callname}, 설탕을 2그램이나 더 넣으셨잖아요.`,
        ),
      async () => {
        await flash.say_and_wait(
          '조금…… 적당히…… 대충…… 으음, 대체 어디서 보신 레시피인지는 모르겠지만, 만드는 사람을 꽤 곤란하게 만드는 설명이네요……',
        );
        await flash.say_and_wait(
          `하지만 그렇다고 포기할 수는 없죠. 자, 지금부터 완벽한 결과물을 만들기 위해 필요한 각 재료의 정확한 함량을 함께 찾아보도록 해요, ${callname}。`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async office_rest(flash, callname) {
    const buffer = [
      () =>
        flash.say_and_wait(
          `수고하셨습니다, ${callname}. 짧은 휴식을 잘 활용하면 다음 일도 충분한 기력으로 해낼 수 있어요.`,
        ),
      () =>
        flash.say_and_wait(
          `수고하셨습니다, ${callname}. 피곤하시다면 부디 제대로 쉬어 주세요. 『All work and no play makes Jack a dull boy』, 그렇잖아요?`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async office_game(flash, you, callname) {
    await era.printAndWait(
      `${you.name}과(와) 에이신 플래시는 트레이닝실에서 함께 게임을 했다.`,
    );
    flash.say(
      '어머, 저와 게임을 하고 싶으신가요? 당연히 좋죠, 초대해 주셔서 기뻐요. 그럼 어떤 장르의 게임을 하실지 생각하신 게 있나요?',
    );
    era.printButton('「당연히 2인 협동 게임이지」', 1);
    era.printButton('「2인 대전 게임은 어때?」', 2);
    if ((await era.input()) === 1) {
      await flash.say_and_wait('협동 게임이라니, 좋은 선택이네요.');
      await flash.say_and_wait(
        `그럼 바로 시작하죠. ${callname}하고 힘을 합쳐 어려움을 헤쳐 나갈 생각에 기대돼요. 후훗.`,
      );
    } else {
      await flash.say_and_wait('대전 게임이라니, 좋은 선택이네요.');
      await flash.say_and_wait(
        '음…… 하지만 플레이하기 전에 조건 하나를 거는 건 어떨까요?',
      );
      await flash.say_and_wait(
        '예를 들면 진 사람이 이긴 사람의 소원을 하나 들어준다든가 하는 식으로요.',
      );
      await flash.say_and_wait(
        '후훗~ 내기를 걸고 게임을 해야 훨씬 박진감이 넘치니까요. 이건 나카야마 양에게 배운 원칙이랍니다.',
      );
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   */
  async s_a_tree_hollow(flash, you) {
    await era.printAndWait(
      `${you.name}은(는) 에이신 플래시와 안뜰의 나무 구멍으로 갔다.`,
    );
    const buffer = [
      async () => {
        await flash.say_and_wait(
          '나무 구멍이라…… 좌절한 사람에게는 적절히 감정을 풀 수단이 필요하죠.',
        );
        await flash.say_and_wait(
          '다만 저는 개인적으로 소중한 분과 이야기하는 쪽을 더 좋아해요.',
        );
        await flash.say_and_wait(
          '털어놓는 것은 수단일 뿐, 좌절에서 벗어날 방법을 찾는 게 목적 아닐까요?',
        );
      },
      async () => {
        await flash.say_and_wait(
          '나무 구멍이라…… 이 작은 그루터기에 많은 사람의 마음이 담겨 있군요.',
        );
        await flash.say_and_wait(
          '슬플 때는 털어놓고, 기쁠 때는 나누는 거죠. 그런 분들에게 이 구멍은 둘도 없는 벗이에요.',
        );
        await flash.say_and_wait(
          '……네. 물론 저도 그중 하나예요. 다만 지금은 조금 달라요.',
        );
        await flash.say_and_wait(
          '지금은 더 믿고 마음을 맡길 분을 만났으니까요. 후훗.',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async s_a_dating(flash, you, callname) {
    await era.printAndWait(
      `${you.name}은(는) 에이신 플래시와 안뜰에서 데이트했다.`,
    );
    const buffer = [
      async () => {
        await flash.say_and_wait(
          `벤치에 앉아 따스한 햇볕을 쬐는 건 정말 기분 좋은…… 아! ${callname}, 등 뒤에 무당벌레가 붙어 있어요.`,
        );
        await flash.say_and_wait(
          '쉿, 너무 거칠게 쫓아버리지는 마세요…… 무당벌레는 아주 귀여운 생물이니까요, 안 그래요?',
        );
      },
      async () => {
        await flash.say_and_wait(
          `오늘의 도시락입니다, 마음껏 즐기…… 어머나, ${callname}, 머리 위에 낙엽이 떨어졌네요.`,
        );
        await flash.say_and_wait(
          '『큰 나무 아래가 시원하다』라는 말이 있지만, 가끔은 이런 귀여운 해프닝도 생기네요.',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async s_r_lunch(flash, you, callname) {
    await era.printAndWait(
      `${you.name}과(와) 에이신 플래시는 옥상에서 도시락을 먹었다.`,
    );
    const buffer = [
      async () => {
        await flash.say_and_wait(
          '민트 케이크인가요…… 이게 당신이 준비한 디저트군요.',
        );
        await flash.say_and_wait(
          '……아뇨, 아무것도 아니에요. 민트를 싫어하는 건 아니니까요. 굳이 말하자면 이 강한 향에 조금 익숙하지 않을 뿐이에요.',
        );
        await flash.say_and_wait(
          '하지만 당신의 정성이 담긴 것이니 기쁘게 먹을게요. 그리고 객관적으로 봐도 크림 케이크는 아주 맛있는 음식이니까요, 그렇죠?',
        );
      },
      async () => {
        await flash.say_and_wait(
          '플레이팅이 아주 근사하다고요? 후후. 칭찬 감사합니다.',
        );
        await flash.say_and_wait(
          '하지만 음식에 대한 평가는 겉모습만 보고 내려서는 안 돼요. 저는 내면의 맛이 더 중요하다고 생각하거든요.',
        );
        await flash.say_and_wait(
          `그러니 어서 드셔보세요, ${callname}. 식사 후에 들려주실 평가가 무척 기대되네요.`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_r_fishing(flash, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      flash.get_colored_name(),
      '는 강으로 낚시하러 갔다.',
    ]);
    const buffer = [
      async () => {
        await flash.say_and_wait(
          '마음 내키는 대로 낚시할 수 있다니 참 좋은 경험이네요.',
        );
        await flash.say_and_wait('네, 갑자기 왜 그런 말을 하느냐고요?');
        await flash.say_and_wait(
          '독일에서는 낚시를 하려면 별도의 면허가 필요하거든요.',
        );
        await flash.say_and_wait(
          '면허 시험은 이론 위주지만, 먼저 일본에서 실전 기술을 익혀 두는 것도 나쁘지 않겠죠.',
        );
        await flash.say_and_wait('그러니……');
        await flash.say_and_wait(
          `그때는 도움을 부탁드릴지도 모르겠네요, ${callname}。`,
        );
      },
      async () => {
        await flash.say_and_wait(
          '낚시라…… 어릴 적 피서철이 되면 부모님이 이름 없는 호숫가 오두막으로 데려가 주셨어요.',
        );
        await flash.say_and_wait(
          '그곳에서 아버지가 호숫가에 앉아 낚시에 열중하시는 모습을 지켜봤죠.',
        );
        await flash.say_and_wait(
          '아버지께 많은 기술을 배우지는 못했어요. 그래도 당신과 이 즐거움을 나누기에는 충분할 거예요.',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_r_walking(flash, you, callname) {
    await era.printAndWait([
      you.get_colored_name(),
      '과(와) ',
      flash.get_colored_name(),
      '는 함께 강변 산책을 하러 왔다.',
    ]);
    const buffer = [
      async () => {
        await flash.say_and_wait('bildschön! 아주 인상적인 경치예요.');
        await flash.say_and_wait(
          `음…… 기념사진을 찍어두는 게 좋을 것 같네요. 당신은 어떻게 생각하시나요? ${callname}。`,
        );
      },
      async () => {
        await flash.say_and_wait('오늘 나들이는 만족스러우신가요?');
        await flash.say_and_wait(
          '당신이 즐거워할 수 있도록 신중하게 고민해서 짠 계획이거든요. 기뻐하시는 모습을 보니 저도 보람차네요.',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_c_pray(flash, you, callname) {
    await era.printAndWait(
      `${you.name}과(와) 에이신 플래시는 함께 신사로 기도를 하러 왔다.`,
    );
    const buffer = [
      async () => {
        await flash.say_and_wait(
          `두 번 절하고, 두 번 박수 치고, 다시 한 번 절…… 후우, 세세한 디테일은 아직 좀 헷갈리지만, 전체적인 절차에서 실수는 없었겠죠? ${callname}`,
        );
        await era.printAndWait(
          `돌아오는 길에, 에이신 플래시는 ${you.name}에게 장난스러운 미소를 지었다. 이번 참배가 즐거웠던 모양이다.`,
        );
      },
      async () => {
        await flash.say_and_wait(
          '맑은 공기에 신성한 분위기까지. 저는 신사의 환경이 정말 마음에 들어요. 그곳에 있으면 들뜬 마음까지 차분해지거든요.',
        );
        await era.printAndWait(
          `돌아오는 길에, 에이신 플래시는 미소를 지으며 ${you.name}에게 감상을 이야기했다. 이번 나들이에 만족한 모양이다.`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_arcade(flash, you) {
    await era.printAndWait(
      `${you.name}과(와) 에이신 플래시는 상점가의 오락실로 갔다.`,
    );
    const buffer = [
      () =>
        flash.say_and_wait(
          '으음, 이론상으로는 기계 팔과 인형 사이의 거리와 각도만 계산하면 쉽게 출구로 떨어뜨릴 수 있어야 하는데, 왜 자꾸 도중에 놓치는 걸까요……',
        ),
      () =>
        flash.say_and_wait(
          '어머, 게임 속에 왜 갑자기 좀비가 나타나는 거죠?! 으으, 이왕 이렇게 된 거 용기를 내서 맞서 싸울 수밖에 없겠네요.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_s_drawing(flash, you, callname) {
    await era.printAndWait(
      `${you.name}은(는) 에이신 플래시와 상점가에서 경품 추첨에 참여했다.`,
    );
    await flash.say_and_wait(
      '추첨이라…… 으음. 이런 우연에 의지하는 일은 제게 그다지 매력적이지 않아요.',
    );
    await flash.say_and_wait('네, 구체적인 이유 말인가요?');
    await flash.say_and_wait(
      '복잡한 이유는 없어요. 통제할 수 없는 확률보다 노력한 만큼 돌아오는 공평한 규칙이 더 좋을 뿐이에요.',
    );
    await flash.say_and_wait(
      '……하지만 여기까지 와서 아무것도 하지 않고 돌아가면 조금 흥이 깨지겠죠.',
    );
    await flash.say_and_wait('그러니 오늘의 운세를 시험해 볼까요?');
    await era.printAndWait(
      '에이신 플래시는 룰렛을 돌렸다. 다음 순간을 기대하게 만드는 음악 속에서 화면에 결과가 천천히 나타났다.',
    );
    const buffer = [
      async () => {
        await flash.say_and_wait('특별상이라고요?');
        await era.printAndWait('가슴을 울리는 선율이 스피커에서 흘러나왔다.');
        await era.printAndWait(
          '동시에 화면의 선명한 글자를 본 에이신 플래시는 몇 초 동안 굳어 버렸다.',
        );
        await flash.say_and_wait('……정말…… 뜻밖이네요.');
        await era.printAndWait(
          `곧이어, ${flash.sex}의 얼굴에 찬란한 미소가 피어올랐다.`,
        );
        await flash.say_and_wait(
          '결과에 대해 전혀 기대하지 않았는데…… 이런 게 바로 운의 묘미라는 걸까요.',
        );
        await flash.say_and_wait(
          `후후. 오늘 운세가 아주 좋네요. 그럼 축하하는 의미로 같이 맛있는 케이크라도 먹으러 갈까요? ${callname}`,
        );
      },
      async () => {
        await flash.say_and_wait('일등이라고요?');
        await era.printAndWait('스피커에서 경쾌하고 즐거운 음악이 흘러나왔다.');
        await era.printAndWait(
          '동시에 화면의 선명한 글자를 본 에이신 플래시는 몇 초 동안 굳어 버렸다.',
        );
        await flash.say_and_wait('……와…… 정말 기쁘네요.');
        await era.printAndWait(
          `곧이어, ${flash.sex}의 얼굴에 즐거운 미소가 가득해졌다.`,
        );
        await flash.say_and_wait(
          '전혀 기대하지 않았는데…… 운이라는 건 참 신기하네요.',
        );
        await flash.say_and_wait(
          `후후. 오늘 운세가 꽤 좋네요. 그럼 기념으로 같이 맛있는 케이크라도 먹으러 갈까요? ${callname}。`,
        );
      },
      async () => {
        await flash.say_and_wait('이등이라고요?');
        await era.printAndWait('스피커에서 리드미컬한 음악이 흘러나왔다.');
        await era.printAndWait(
          '그와 동시에 화면에 뜬 글자를 보고 에이신 플래시는 잠시 고민하는 듯한 표정을 지었다.',
        );
        await flash.say_and_wait('……음…… 기대를 뛰어넘었네요.');
        await era.printAndWait(
          `곧이어, ${flash.sex}의 얼굴에 기분 좋은 미소가 번졌다.`,
        );
        await flash.say_and_wait(
          '전혀 예상치 못한 결과인데…… 이것도 운의 매력이겠죠.',
        );
        await flash.say_and_wait(
          `후훗~ 오늘 운세가 제법 괜찮네요. 그럼 축하하는 의미로 함께 맛있는 케이크를 먹으러 갈까요? ${callname}`,
        );
      },
      async () => {
        await flash.say_and_wait('삼등이라고요?');
        await era.printAndWait(
          '화면에 뜬 선명한 글자를 보며 에이신 플래시는 눈을 깜빡였다.',
        );
        await flash.say_and_wait('뭐, 예상했던 결과네요.');
        await era.printAndWait(
          `다음 순간, ${flash.sex}의 얼굴에 온화한 미소가 감돌았다.`,
        );
        await flash.say_and_wait(
          '지불한 만큼 돌아오는 법이죠. 역시 이런 공평한 결과가 마음 편해요. 어느 한쪽이 과했다면 오히려 불안했을지도 모르거든요.',
        );
        await flash.say_and_wait(
          `후훗~ 그럼 기분 좋게 마무리한 기념으로 같이 맛있는 케이크를 먹으러 갈까요? ${callname}`,
        );
      },
      async () => {
        await flash.say_and_wait('한 번 더, 말인가요?');
        await era.printAndWait(
          '스피커에서 나지막하고 차분한 곡조가 흘러나왔다.',
        );
        await era.printAndWait(
          '그와 동시에 화면에 뜬 글자를 보고 에이신 플래시는 잠시 침묵했다.',
        );
        await flash.say_and_wait('……뭐, 받아들일 수 있는 결과네요.');
        await era.printAndWait(
          `곧이어, ${flash.sex}의 얼굴에 시원스러운 미소가 떠올랐다.`,
        );
        await flash.say_and_wait(
          '확률적인 일이란 게 다 그렇죠. 기대에 부응하기보다는 어긋날 가능성이 더 높은 법이니까요.',
        );
        await flash.say_and_wait(
          `그럼 추첨에서 떨어진 아쉬움을 달래는 의미로, 같이 맛있는 케이크를 먹으러 가는 건 어떨까요? ${callname}`,
        );
      },
    ];
    await get_random_entry(buffer)();
    await era.printAndWait(
      `말로는 매력이 없다고 했지만, 이런 불확실성이 만들어 내는 미지의 결과에는 역시 ${flash.sex}도 어느 정도 신경을 쓰고 있었다.`,
    );
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_ktv(flash, you) {
    await era.printAndWait(
      `${you.name}은(는) 에이신 플래시와 상점가의 노래방으로 갔다.`,
    );
    if (Math.random() < 0.5) {
      await flash.say_and_wait(
        '나무 구멍이라니…… 좌절을 겪은 사람에게 적절한 분출구는 꼭 필요하죠.',
      );
    } else {
      await flash.say_and_wait(
        '나무 구멍인가요…… 그러고 보면 이 작은 나무 하나에 참 많은 사람의 감정이 담겨 있네요.',
      );
      await flash.say_and_wait(
        '슬플 때는 하소연하고, 기쁠 때는 기쁨을 나누고. 누군가에게 이 구멍은 이미 대체 불가능한 단짝 친구일 연인일 거예요.',
      );
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_s_movie(flash, you, callname) {
    await era.printAndWait(
      `${you.name}은(는) 에이신 플래시와 상점가에서 영화를 보았다.`,
    );
    if (era.get('love:37') >= 75 && Math.random() < 0.34) {
      await flash.say_and_wait(
        '《첫사랑 당근 케이크: 사랑은 당근보다 달콤해 2》?',
      );
      await era.printAndWait(
        '영화관 안에 즐비한 최근 개봉작 포스터들을 둘러보던 중, 에이신 플래시의 시선이 한 게시판 앞에서 멈췄다.',
      );
      await flash.say_and_wait(
        '들어본 적 있어요. 루돌프 회장님도 감상 후에 호평을 남기셨다는 청춘 로맨스 영화의 신작이군요.',
      );
      await flash.say_and_wait(
        `${callname}, 저와 함께 보러 가시겠어요? 마침 다음 데이트 계획을 위한 영감을 얻기에도 딱 좋을 것 같아서요.`,
      );
    } else if (Math.random() < 0.5) {
      await flash.say_and_wait(
        `『${flash.uma_sex_title}의 새벽, 정점에 서는 순간』이라고요?`,
      );
      await era.printAndWait(
        '영화관에 붙은 여러 포스터들을 살피던 에이신 플래시의 시선이 한곳에 고정되었다.',
      );
      await flash.say_and_wait(
        '소문은 들었답니다. 루돌프 회장님이 추천하신 전기 영화 시리즈의 신작이죠?',
      );
      await flash.say_and_wait(
        `${callname}, 같이 보러 가지 않을래요? 작중에서 묘사되는 레이스 중 우마무스메의 심경 변화에 대해 무척 흥미가 있거든요.`,
      );
    } else {
      await flash.say_and_wait('《5시간의 지옥》?');
      await era.printAndWait(
        '영화관 게시판을 둘러보던 에이신 플래시의 시선이 멈췄다.',
      );
      await flash.say_and_wait(
        '기억나요. 메지로 맥퀸 양이 언급했던, 관객의 인내심을 시험하기로 유명한 그 엄청난 길이의 영화죠?',
      );
      await flash.say_and_wait(
        `${callname}, 함께 보시겠어요? 당신이 곁에 계시면 삼백 분도 문제없을 것 같아요.`,
      );
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_restaurant(flash, you) {
    await era.printAndWait(
      `${you.name}과(와) 에이신 플래시는 역 근처로 식사를 하러 왔다.`,
    );
    if (Math.random() < 0.5) {
      await flash.say_and_wait('어머, 이번 식사 메뉴를 제가 결정해도 될까요?');
      await flash.say_and_wait(
        '음…… 그렇다면 평소 제가 즐겨 먹는 음식들로 구성된 식단을 골라도 괜찮을까요?',
      );
      await flash.say_and_wait(
        '말은 그렇게 했지만 영양과 맛, 두 마리 토끼를 다 잡을 수 있도록 구성했으니 실망하게 해드리지 않을 자신 있어요.',
      );
      await flash.say_and_wait('네, 알겠습니다. 그럼 기대해 주세요.');
      await flash.say_and_wait(
        '후훗~ 제 취향을 당신과 함께 공유할 수 있게 되어 무척 기쁘네요.',
      );
    } else {
      await flash.say_and_wait('당신은 낫토를 좋아하시나요?');
      await flash.say_and_wait(
        '아, 다른 뜻은 아니고 메뉴에 낫토가 있길래 문득 궁금해져서요.',
      );
      await flash.say_and_wait(
        '사실 저는 낫토를 아주 좋아해요. 몸에 좋은 건강식품이니까요.',
      );
      await flash.say_and_wait(
        '처음 시도할 때는 향 때문에 거부감이 들 수도 있지만, 익숙해지면 오히려 독특한 매력에 빠지게 된답니다.',
      );
      await flash.say_and_wait(
        '그러니 괜찮다면 당신께도 권해드리고 싶네요. 이를테면…… 지금 당장이라던가? 후후훗~',
      );
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_s_dating(flash, you, callname) {
    await era.printAndWait(
      `${you.name}은(는) 에이신 플래시와 역 근처에서 데이트했다.`,
    );
    if (Math.random() < 0.5) {
      await flash.say_and_wait(`제 손을 꼭 잡으세요, ${callname}。`);
      await flash.say_and_wait(
        '그리고 실례가 안 된다면 저에게 5센티미터만 더 가까이 붙어주시겠어요? 네, 좋아요.',
      );
      await flash.say_and_wait(
        '어머, 아뇨…… 딴마음이 있는 건 아니에요. 그저 유동 인구가 너무 많아서 당신의 안전이 걱정되어…… 네, 정말 그뿐이랍니다.',
      );
    } else {
      await flash.say_and_wait(
        '오늘 입은 옷이 예쁘다고요? 후후. 칭찬 감사합니다.',
      );
      await flash.say_and_wait(
        '당신과의 약속이니까, 당연히 이렇게 정성을 들여야죠.',
      );
      await flash.say_and_wait(
        `하지만 데이트란 게 단순히 차림새만 보는 건 아니잖아요? 그러니 저와 함께 무엇을 할지 계획은 세워두셨나요, ${callname}。`,
      );
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  async o_s_shopping(flash, you, callname) {
    await era.printAndWait(
      `${you.name}은(는) 에이신 플래시와 역 근처의 가게들을 둘러보았다.`,
    );
    if (Math.random() < 0.5) {
      await flash.say_and_wait(`살 물건은 미리 정해 두셨나요? ${callname}。`);
      await flash.say_and_wait('에, 왜 미리 계획해야 하느냐고요?');
      await flash.say_and_wait(
        '저에게 쇼핑이란 계획을 실행하는 것과 같아서, 정밀하게 대처해야 하는 행위거든요.',
      );
      await flash.say_and_wait(
        '당신께도 이 방법을 추천해 드리고 싶어요. 심사숙고 끝에 결정한 물건만 단호하게 구매함으로써 불필요한 지출을 최대한 억제하는 거죠. 장기적으로 보면 엄청난 비용을 절약할 수 있답니다.',
      );
      await flash.say_and_wait(
        '음…… 관심이 있으시다면 아예 오늘부터 시작해 보는 건 어떨까요? 이번 쇼핑 리스트를 같이 작성해 봐요.',
      );
    } else {
      await flash.say_and_wait('테디 베어 인형이네요.');
      await era.printAndWait(
        `도중에, ${you.name}은(는) ${flash.sex}가 어느 장난감 가게 진열장을 멍하니 바라보고 있는 것을 발견했다.`,
      );
      era.printButton('「왜 그래?」', 1);
      await era.input();
      await flash.say_and_wait(
        '……아뇨, 아무것도 아니에요. 그저 어릴 적 부모님이 선물해 주셨던 테디 베어 인형이 생각나서요. 겉모습이 꽤 닮아서 저도 모르게 추억에 잠겼나 봐요.',
      );
      await flash.say_and_wait(
        `어? 잠깐만요! ${callname}, 딱히 관심이 있다는 뜻은 아………`,
      );
      await flash.say_and_wait('…………');
      await flash.say_and_wait(
        '……하아, 참 당신도. 이 인형은 이번 쇼핑 리스트에 없었는데 말이죠.',
      );
      await flash.say_and_wait(
        '하지만……당신의 따뜻한 마음, 정말 고맙게 받을게요. 소중히 간직하겠습니다.',
      );
    }
  },
  /**
   * @param {CharaTalk} flash エイシンフラッシュ
   * @param {string} callname エイシンフラッシュのプレイヤーへの呼び方
   */
  good_night_normal(flash, callname) {
    const buffer = [
      () =>
        flash.say(
          `오늘 수고하셨습니다, ${callname}. 하루 일과를 마친 뒤에는 부디 몸을 풀어 주세요.`,
        ),
      () =>
        flash.say(`오늘 감사했습니다, ${callname}. 밤에는 달콤한 꿈 꾸세요.`),
    ];
    if (era.get('base:37:体力') < era.get('maxbase:37:体力') * 0.5) {
      buffer.push(
        () => flash.say('후우…… 『Aus nichts wird nichts』.'),
        () =>
          flash.say(
            '몸이…… 조금 무겁네요. 하지만 여기서 느슨해지면 원하는 결과를 얻지 못하겠죠?',
          ),
      );
    }
    if (era.get('base:37:体力') < era.get('maxbase:37:体力') * 0.25) {
      buffer.push(
        () =>
          flash.say(
            '후우…… 몸에 힘이 들어가지 않네요. 앞으로의 계획을 조금 수정하는 게 좋을까요?',
          ),
        () =>
          flash.say(
            '일과 휴식의 조화는 심오한 학문이네요. 이 말을 이해하려면 아직 갈 길이 멀겠죠.',
          ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * 読込会話 - 妊娠／出産済
   * @param {CharaTalk} flash エイシンフラッシュ
   */
  async load_talk_pregnant(flash) {
    await flash.say_and_wait('그런가요…… 당신은 결국 이런 선택을 내렸군요.');
    await era.printAndWait([
      flash.get_colored_name(),
      '가 나지막이 한숨을 내쉬었다. 그 목소리엔 실망감이 가득했다.',
    ]);
    await flash.say_and_wait(
      '……훗, 아무래도 이전에 느꼈던 그 가짜 아름다움에 제 눈이 멀었었나 봐요.',
    );
    await era.printAndWait(
      `다음 순간, 모든 것이 되돌릴 수 없음을 깨달은 ${flash.sex}는 자조적인 미소를 지으며 고개를 저었다.`,
    );
    await flash.say_and_wait('그럼, 마지막으로 한 가지만 물어볼게요.');
    await era.printAndWait(
      `${flash.teen_sex_title}은(는) 눈가에 맺힌 눈물을 닦아냈다. 슬픔은 어느새 서늘한 질문으로 변해 있었다.`,
    );
    await flash.say_and_wait(
      '처자식을 버리고, 믿음을 저버리다니. 당신에게 맹세란 건, 그렇게 아무런 가치도 없는 것이었나요?',
    );
  },
};
