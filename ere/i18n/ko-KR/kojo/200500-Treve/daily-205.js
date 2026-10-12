/**
 * @file トレヴ - 日常
 * @author 梦露
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /** @param {CharaTalk} treve トレヴ */
  good_morning(treve) {
    const buffer = [
      () => treve.say('그럼 다음에는 뭐 하고 놀까요?'),
      () => treve.say('지금 기운이 너무 넘쳐서 주체가 안 될 정도예요.'),
    ];
    if (era.get('love:205') >= 50) {
      buffer.push(
        () =>
          treve.say(
            '저를 너무 응석받이로 만드시는 거 아니에요…… 좀 과하게 아끼시는 걸까요?',
          ),
        () => treve.say('아침부터 저녁까지, 매 순간 당신 생각뿐이에요.'),
      );
    }
    if (era.get('love:205') >= 75) {
      buffer.push(
        () =>
          treve.say(
            '저는 한결같은 사람이라고 생각했어요. 당신을 만나기 전까지는요.',
          ),
        () => treve.say('당신에게 걸어갈 때면 첫사랑처럼 가슴이 두근거려요.'),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {string} callname トレヴのプレイヤーへの呼び方
   */
  select(treve, callname) {
    const buffer = [() => treve.say(`봉주르~ 지시할 일 있으세요? ${callname}`)];
    if (era.get('love:205') >= 50) {
      buffer.push(() => treve.say('부르실 때 그런 데를 찌르지는 마세요.'));
    }
    if (era.get('love:205') >= 75) {
      buffer.push(() => treve.say('후후, 좋아요.'));
    }
    get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async office_study(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '이상하네요. 프랑스어를 배울 때도 이렇게 서투르셨나요? 아니었잖아요…… 얄미운 천재.',
        ),
      () =>
        treve.say_and_wait(
          '당신이 곁에 있으면 더 높이 날 수 있을 것 같아요…… 어때요, 나쁘지 않죠?',
        ),
      () => treve.say_and_wait('그만하세요. 변태라도 그런 지도는 안 돼요!'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {string} callname トレヴのプレイヤーへの呼び方
   */
  async office_prepare(treve, callname) {
    const buffer = [
      () => treve.say_and_wait('당신에게 가장 좋은 선물을 드릴게요.'),
      () =>
        treve.say_and_wait(
          `오늘의 승리는 제가 가져갈 거예요. ${callname}을(를) 위해서요.`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async talk(treve) {
    const buffer = [];
    if (era.get('base:205:体力') < 0.3 * era.get('maxbase:205:体力')) {
      buffer.push(
        () => treve.say_and_wait('당신 품을 잠깐 빌려도 될까요?'),
        () => treve.say_and_wait('지금은 걷는 것도 무리예요~'),
      );
    } else {
      switch (era.get('cflag:205:干劲')) {
        case 2:
          buffer.push(() =>
            treve.say_and_wait(
              '방금은 혼자 트레이닝하고 있었던 거예요. 트레이닝이라고요.',
            ),
          );
          era
            .getAddedCharacters()
            .some((cid) => cid !== 205 && era.get(`love:${cid}`) >= 50) &&
            buffer.push(() =>
              treve.say_and_wait(
                `당신과 ${treve.couple_title}이 어떻게 알게 됐는지 들려주실래요?`,
              ),
            );
          era.get('love:205') >= 50 &&
            buffer.push(() =>
              treve.say_and_wait(
                '당신에게 『내 연인』이라고 말할 수 있어서 정말 좋아요.',
              ),
            );
          break;
        case 1:
          buffer.push(
            () =>
              treve.say_and_wait(
                '사람마다 이야기가 다르잖아요. 저는 듣는 게 참 좋아요.',
              ),
            () => treve.say_and_wait('앞으로도 저를 잘 돌봐 주셨으면 해요.'),
          );
          break;
        case 0:
          buffer.push(
            () => treve.say_and_wait('당신을 기다리는 건 정말 힘들었어요.'),
            () =>
              treve.say_and_wait('『신입』 트레이너에게 모범을 보여 드릴게요.'),
          );
          break;
        case -1:
          buffer.push(
            () => treve.say_and_wait('안아 주시면 조금은 나아질지도 몰라요.'),
            () =>
              treve.say_and_wait('제 열정은 그림자도 형체도, 소리도 없어요……'),
          );
          break;
        case -2:
          buffer.push(
            () => treve.say_and_wait('쉬게 해 주시면 더 바랄 게 없겠는데요.'),
            () => treve.say_and_wait('죽음은 삶에 매겨진 세금……'),
            () =>
              treve.say_and_wait(
                '당신은 트레이너일 뿐만 아니라, 사랑을 찾아 떠도는 철새이기도 해요……',
              ),
          );
      }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async office_gift(treve) {
    const buffer = [
      () => treve.say_and_wait('세상은 변해도 사랑만은 흔적을 남기죠.'),
      () => treve.say_and_wait('이걸 사랑이라고 생각해도 될까요?'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async office_cook(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '프랑스 요리는 말이죠…… 아하하하, 지금은 넘어갈게요.',
        ),
      () =>
        treve.say_and_wait('으으, 나쁜 사람한테 입맛을 길들여 버릴 것 같아요.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async office_rest(treve) {
    const buffer = [
      () => treve.say_and_wait('앞으로 어떻게 될지는 모르겠어요.'),
      () => treve.say_and_wait('저랑 함께 쉬니까 즐거우세요?'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {string} callname トレヴのプレイヤーへの呼び方
   */
  async office_game(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(
          `${callname}! 왜 Umaisoft를 망겜 제작사라고 부르는 사람들이 있는 걸까요?`,
        ),
      () =>
        treve.say_and_wait(
          '『어○신 크리드: 트레센』…… 모든 의미에서 시리즈 전작을 완전히 뛰어넘었네요——',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async s_a_tree_hollow(treve) {
    const buffer = [
      () => treve.say_and_wait('멀리서 보내는 제 입맞춤은 씁쓸하고 애달파요.'),
      () => treve.say_and_wait('우리의 운명은 험하고 구불구불하네요.'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async s_a_dating(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '너무 능숙해서 무서울 정도예요…… 사실 이게 본업인 거 아니에요!',
        ),
      () =>
        treve.say_and_wait(
          '지금과 비교하면 예전의 삶은 그저 『죽음을 기다리는』 것뿐이었어요.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async s_r_lunch(treve) {
    const buffer = [
      () => treve.say_and_wait('짜잔! 오늘은 제법 잘됐죠?'),
      () =>
        treve.say_and_wait(
          '로브스터, 왕새우, 새우구이, 홍합, 오징어구이. 곁들임으로는 감자튀김과 해산물밥이에요. 제대로 몸보신하세요.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {CharaTalk} you プレイヤー
   */
  async o_r_fishing(treve, you) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '드디어 월척이 걸렸네요…… 당신도 얼마 전에 좋은 녀석을 낚았다면서요? 거짓말이에요. 전 못 봤는걸요.',
        ),
    ];
    if (you.sex_code === 1 && treve.sex_code !== 1) {
      buffer.push(() =>
        treve.say_and_wait(
          `안 낚이네요…… 흥, ${you.actual_name} 님, 은혜를 베풀어 주셔서 감사해요.`,
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async o_r_walking(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '안심하고 제 손을 잡으세요. 멀리 날아가도 괜찮으니까요.',
        ),
      () =>
        treve.say_and_wait(
          '으윽…… 낭만이라고는 모르는 고지식한 남자 때문에 죽겠어요.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname トレヴのプレイヤーへの呼び方
   * @param {PrintedSpan|false} call_target トレヴが見たぬいぐるみ原型への呼び方。隊内に他のウマ娘がいなければ false
   */
  async o_s_arcade(treve, you, callname, call_target) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '알고 계세요? 프랑스 오락실에는 연인들 말고도 소꿉친구끼리 온 어린아이들이 많아요.',
        ),
      () =>
        treve.say_and_wait([
          '네, 졌어요, 졌다고요…… ',
          you.get_colored_actual_name(),
          ', 저쪽 【펀치력 측정】으로 다시 겨뤄요.',
        ]),
    ];
    if (call_target) {
      buffer.push(() =>
        treve.say_and_wait([
          callname,
          '！',
          call_target,
          ' 인형이잖아요! 하나 뽑아 봐도 될까요?',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {string} callname トレヴのプレイヤーへの呼び方
   */
  async o_s_drawing(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(
          `와와와…… ${callname}! 용돈 좀 미리 받을 수 있을까요?`,
        ),
      () =>
        treve.say_and_wait('파리 5일 4박 호화 여행…… 당첨되면 어떻게 할까요?'),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async o_s_ktv(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '노랫소리가 정말 매력적이에요. 『멀어지는 기차』나 『장밋빛 인생』 같은 곡을 배워 보면 좋을지도……',
        ),
      () =>
        treve.say_and_wait(
          '미리 말씀드리는데, 목이 피곤해요. 여기서 당신과…… 그런 건 무리예요.',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async o_s_movie(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '몰입감이 뛰어난 수작이네요. 모든 면에서 흠잡을 데가 없어요.',
        ),
    ];
    if (treve.sex_code !== 1 && era.get('cflag:0:性别') === 1) {
      buffer.push(() =>
        treve.say_and_wait(
          '스승님이 우리에게 어울리는 옛날 영화가 있대요. 『Un homme et une femme』——남과 여. 제목이 묘하죠, 하하하……',
        ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname トレヴのプレイヤーへの呼び方
   * @param {number} dice 祈願のダイス。0-1の小数。小さいほど良い
   */
  async o_c_pray(treve, you, callname, dice) {
    await era.printAndWait([
      you.get_colored_name(),
      `은(는) ${treve.name}에게 근처 신사에 가자고 권했고, ${treve.sex}는 기쁘게 고개를 끄덕였다.`,
    ]);
    await treve.say_and_wait(
      '무슨 생각 하세요? 다른 데 정신이 팔린 것 같아요.',
    );
    await treve.say_and_wait('먼저 운세 뽑고 올게요!');
    if (dice < 0.5) {
      await treve.say_and_wait(
        `【대길】어, 한 번 더 뽑아도 될까요? 이건 ${callname}에게 드리고 싶어요.`,
      );
    } else {
      await treve.say_and_wait('으으, 이런 건 한 번이면 충분해요……');
    }
  },
  /** @param {CharaTalk} treve トレヴ */
  async o_s_restaurant(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '이런 가게에 오니까 연인끼리 데이트하는 것 같네요……',
        ),
      () =>
        treve.say_and_wait(
          '이렇게 좋은 가게는 어떻게 찾으셨어요!? 싸고 양도 많네요. 다 못 먹겠어요!',
        ),
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} treve トレヴ */
  async o_s_dating(treve) {
    const buffer = [
      () =>
        treve.say_and_wait(
          '당신이 평소에 하루를 어떻게 보내는지 잘 봐 두고 싶어요.',
        ),
      () => treve.say_and_wait('꽃은 안 주실 건가요? 저도 꽃 좋아하는데요.'),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} treve トレヴ
   * @param {string} callname トレヴのプレイヤーへの呼び方
   */
  async o_s_shopping(treve, callname) {
    const buffer = [
      () =>
        treve.say_and_wait(
          `수박…… 비싸잖아요!? 게다가 조각으로 파네요. 이거 말이 되나요? ${callname}`,
        ),
      () => treve.say_and_wait('저, 이것저것 고르는 건 별로 자신 없어서……'),
      () => treve.say_and_wait('오늘은 할인도 있네요. 운이 좋은걸요~'),
    ];
    await get_random_entry(buffer)();
  },
  basement_end: (() => {
    const title = '사랑의 감옥';
    /**
     * @param {CharaTalk} treve トレヴ
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname トレヴのプレイヤーへの呼び方
     */
    const f = async (treve, you, callname) => {
      await era.printAndWait('어느 날, 파리의 거리에서.');
      await treve.say_and_wait([callname, '！']);
      await era.printAndWait(
        `익숙한 목소리에 ${you.name}이(가) 돌아보자 ${treve.name}가 달려오고 있었다.`,
      );
      await era.printAndWait(
        `앳되고 사랑스러운 ${treve.sex}는 바다처럼 맑은 눈으로 ${you.name}을(를) 올려다보았다.`,
      );
      await era.printAndWait(
        '바람에 흔들리는 머리카락에서 은은한 샴푸 향기가 풍겨왔다.',
      );
      await era.printAndWait(
        `${treve.name}는 「안녕하세요!」 하며 ${you.name}에게 손을 흔들었다.`,
      );
      await treve.say_and_wait('정말 우연이네요.');
      await era.printAndWait(
        `그렇게 말하는 ${treve.name}의 눈이 어째서인지 반짝이고 있었다.`,
      );
      await treve.say_and_wait('제가 관광시켜 드릴게요!');
      await era.printAndWait(`${treve.name}는 당당하게 가슴을 폈다.`);
      era.printButton('「그래도 돼?」', 1);
      await era.input();
      await era.printAndWait(
        `밑져야 본전으로 물어보자, ${treve.name}는 활기차게 고개를 끄덕였다.`,
      );
      await treve.say_and_wait(
        '그럼 우선, 저기에 맛있는 가게가 있으니 들어가 봐요.',
      );
      await era.printAndWait(
        `그렇게 말하며 ${treve.name}가 ${you.name}의 손을 잡아끄는 순간, ${treve.sex}의 주머니에서 사진 한 장이 바람을 타고 펄럭이며 떨어졌다.`,
      );
      await era.printAndWait(
        `떨어진 사진을 주워 들자, ${treve.name}의 표정이 순식간에 새하얗게 질렸다.`,
      );
      await treve.say_and_wait('——앗!');
      await era.printAndWait(
        `사진을 줍기가 무섭게—— ${treve.name}가 즉시 손을 뻗어 그것을 빼앗으려 했다.`,
      );
      await era.printAndWait(
        `하얀 뒷면을 돌려 정면을 확인한 ${you.name}은(는) 그곳에 찍힌 사진을 보고 자신도 모르게 숨을 삼켰다.`,
      );
      await era.printAndWait(
        `그러나 사진은 눈 깜짝할 사이에 빼앗겼고, ${treve.name}는 서둘러 주머니에 집어넣으며 눈을 가늘게 떴다.`,
      );
      await treve.say_and_wait('보셨나요……?');
      await era.printAndWait(
        `${treve.name}의 질문에 ${you.name}은(는) 저도 모르게 고개를 가로저었다.`,
      );
      await era.printAndWait(
        `${treve.sex}는 이내 미소를 지으며 『다행이네요!』 라고 하더니, ${you.name}의 손을 잡고 달리기 시작했다.`,
      );
      await era.printAndWait(
        `${you.name}의 머릿속에서는 ${treve.name}가 숨기려던 사진이 떠나지 않았다. 한순간이었지만 틀림없었다.`,
      );
      await era.printAndWait(`——사진에 찍힌 것은 ${you.name} 본인이었다.`);
      await era.printAndWait(
        '이날은 별다른 일 없이 흘러갔고, 어느새 하늘이 붉게 물들어 있었다.',
      );
      await era.printAndWait(
        `${treve.name}의 안내로 프랑스의 명소를 둘러보고 맛있는 음식도 먹었다.`,
      );
      await era.printAndWait(`${treve.name}와 이야기도 잘 통해 즐거웠다.`);
      await era.printAndWait('하지만 그 사진만은 머릿속에서 떠나지 않았다.');
      await era.printAndWait(
        `그것은 ${you.name}이(가) 카메라를 보고 찍은 사진이 아니었다. 찍힌 기억 자체가 없었다.`,
      );
      await era.printAndWait(
        `어둠 속에서 몰래 찍은 사진이었다. 문제는 ${treve.name}가 왜 그런 짓을 했느냐는 것이었다.`,
      );
      await era.printAndWait('우연히 주운 걸까? 그래도 무섭다. 스토커인가?');
      await era.printAndWait(`하지만 ${treve.name}라면 괜찮겠지.`);
      await era.printAndWait(
        `아무튼 나중에 ${treve.sex} 본인에게 물어보면 될 일이었다.`,
      );
      await era.printAndWait(
        `${treve.name}는 고개를 숙였다가 ${you.name}을(를) 올려다보았다.`,
      );
      await era.printAndWait(
        `그 표정에는 한 줄기 슬픔이 어려 있었다. 하지만 ${treve.sex}의 얼굴에는 굳은 각오가 떠올라 있었다.`,
      );
      await treve.say_and_wait(['저는 ', callname, '이(가)——']);
      await era.printAndWait('그 순간——피부에 차가운 감촉이 와닿았다.');
      await era.printAndWait(
        '이어 하늘을 덮은 장막에서 빗방울이 한꺼번에 쏟아졌고, 사람들은 일제히 하늘을 올려다보았다.',
      );
      await treve.say_and_wait([callname, ', 이쪽이에요!']);
      await era.printAndWait(
        `가늘게 내리는 비 속에서 ${treve.name}는 황급히 ${you.name}의 손을 잡아끌었다.`,
      );
      await era.printAndWait(
        `${treve.name}에게 손을 이끌려 정신없이 달렸다. 고인 물웅덩이에 파문을 남기며 달리다 보니 어느 방 앞에 도착해 있었다.`,
      );
      era.printButton('「베누스 파크, 여긴?」', 1);
      await era.input();
      await era.printAndWait(
        `별로 낯익지 않은 길이었지만 ${you.name}도 이곳이 무엇인지는 알 수 있었다——아파트였다. 다만 누구의 방으로 데려온 것인지는 전혀 알 수 없었다.`,
      );
      await era.printAndWait(
        `고개를 돌려 옆에 선 ${treve.name}를 빤히 쳐다보자, ${treve.sex}는 황급히 시선을 회피했다.`,
      );
      await era.printAndWait(
        `갑작스러운 소나기 때문에 ${you.name}과(와) ${treve.name} 모두 물에 쫄딱 젖은 상태였다.`,
      );
      await era.printAndWait(
        `${treve.name}의 옷은 얇지 않았음에도 불구하고, 물에 젖어 살결이 투명하게 비치고 있었다.`,
      );
      era.printButton('「이거 누구 방이야?」', 1);
      await era.input();
      await treve.say_and_wait('제 방이에요. 잠시만 기다려 주세요.');
      await era.printAndWait(
        `${treve.name}는 생긋 웃으며 그렇게 말했다. 그러고는 문을 열고 ${you.name}에게 수건을 건넨 뒤, 황급히 문을 쾅 닫아버렸다. 방 안에서 무언가를 거칠게 정리하는 소리가 요란하게 들려왔다. ${you.name}이(가) 건네받은 수건으로 얼굴을 닦으며 기다리기를 몇 분, ${treve.name}가 문틈으로 슬그머니 얼굴을 내밀었다.`,
      );
      await treve.say_and_wait([
        '들어오세요, ',
        callname,
        '，어서 들어오세요.',
      ]);
      await treve.say_and_wait('조금 지저분하긴 하지만요.');
      await era.printAndWait(
        `등을 떠밀리듯 ${you.name}은(는) ${treve.name}의 방 안으로 발을 들여놓았다.`,
      );
      await era.printAndWait(
        `${treve.name}는 욕실로 향하려다 말고 급히 돌아서더니, 손가락으로 벽장을 가리켰다.`,
      );
      await treve.say_and_wait('저 벽장은 절대로 열어보시면 안 돼요.');
      era.printButton('「어, 어어. 알았어.」', 1);
      await era.input();
      await treve.say_and_wait('——절대로요!');
      await era.printAndWait(
        `${you.name}은(는) 영문을 모르겠다는 듯 고개를 끄덕였다.`,
      );
      await era.printAndWait(
        '하지만 바로 그 순간, 벽장 아래 틈새로 사진 같은 종이 한 장이 툭 떨어져 내렸다.',
      );
      await you.say_and_wait('이게 뭐야?');
      await era.printAndWait(
        `벽장을 연 것도 아니니 괜찮겠지. 그런 가벼운 마음으로 ${you.name}이(가) 틈새에 떨어진 사진을 집어 든 순간, 척추를 타고 극심한 오한이 내달렸다.`,
      );
      await era.printAndWait(
        `손이 떨리기 시작했다. 사진 속 내용물은 다름 아닌 ${you.name}을(를) 몰래 촬영한 사진들이었다.`,
      );
      await you.say_and_wait('어라, 왜 이런 게……');
      await era.printAndWait(
        `게다가 이것은 아까 전에 ${treve.name}가 가지고 있던 사진과는 또 다른 종류였다.`,
      );
      await era.printAndWait(
        `${you.name}은(는) 충동적으로 그 벽장을 열었다——순간 ${you.name}은(는) 그 안에 펼쳐진 광경에 숨이 멎었다.`,
      );
      await you.say_and_wait('왜 여기…… 전부 내 사진밖에 없는 거야……?');
      await era.printAndWait(
        `벽장 내부의 한쪽 벽면을 빼곡하게 채우고 있는 사진들은, 전부 ${you.name}의 일거수일투족을 찍은 것들이었다.`,
      );
      await era.printAndWait(
        `언제 어디서 찍힌 것인지 일일이 따질 겨를도 없었다. ${you.name}은(는) 척추를 타고 올라오는 강한 공포에 사로잡혔다.`,
      );
      await era.printAndWait(
        '마른침을 삼키며 그 기괴한 광경에 압도되어 서서히 시선을 내리자, 허리 높이의 서랍장 위에 일기장 한 권이 놓여 있었다.',
      );
      await era.printAndWait(
        `떨리는 손으로 일기장을 펼쳐 대충 내용을 넘겨보았다. 아기자기하고 예쁜 프랑스어로 매일의 일과가 상세히 기록되어 있었다—— 그리고 그 내용은 전부 ${you.name}에 관한 이야기뿐이었다. ${you.name}이(가) ${treve.name}를 처음 만난 날부터 단 하루도 빠짐없이.`,
      );
      await treve.used_to_say_and_wait(
        '일본에서 온 트레이너. 정말 멋있고 다정하고, 웃는 얼굴이 무척 귀여운 사람. 노력하는 모습도, 서툰 프랑스어도 좋아졌다.',
      );
      await treve.used_to_say_and_wait(
        '트레이너님은 밤색 털을 좋아하시는 모양이다. 나와 함께 있어 주셔서 기쁘다.',
      );
      await treve.used_to_say_and_wait(
        '트레이너님이 묵는 곳은 ○○ 호텔. 나도 함께 묵을 수는 없을까.',
      );
      await treve.used_to_say_and_wait([
        '오늘 ',
        callname,
        '이(가) 말을 걸어 주셨다! 이야기를 많이 들을 수 있어 기뻤다. 그 시간이 영원히 이어지면 좋을 텐데.',
      ]);
      await treve.used_to_say_and_wait(
        '좋아해. 정말 좋아해. 너무 좋아해. 먹어 버리고 싶을 만큼 좋아해, 좋아해 좋아해 좋아해 좋아해 좋아해 좋아해——',
      );
      await era.printAndWait(
        `${you.name}은(는) 소름 끼치는 공포에 급히 일기장을 덮고 손으로 입을 틀어막았다.`,
      );
      await era.printAndWait(
        '신변의 위협을 직감하고 이곳을 빠져나가기 위해 서둘러 뒤를 돌아보려던 찰나—— 머리 뒤쪽에서 둔기로 강하게 내리치는 듯한 충격이 전해졌다. 이내 시야가 사정없이 흔들리더니, 몸에 힘이 빠지며 그대로 바닥으로 쓰러졌다.',
      );
      await era.printAndWait(
        `의식을 잃어가며 마지막으로 들은 것은, 위에서 내려다보는 ${treve.name}의 가라앉은 목소리였다.`,
      );
      await treve.say_and_wait('결국 보셨군요……');
      await era.printAndWait(`그리고 ${you.name}의 의식은 암전되었다.`);
      era.drawLine();
      await era.printAndWait(
        `흐릿해지는 감각 속에서 깨어나 보니, ${you.name}은(는) 낯선 침대 위에 누워 있었다.`,
      );
      await era.printAndWait(
        '머리가 깨질 듯이 아팠다. 무슨 일이 일어난 건지 파악하기 위해, 일단 천장의 희미한 불빛을 응시하며 필사적으로 기억을 더듬었다.',
      );
      era.printButton(`「난 ${treve.name}의 방에 왔었고, 그리고……」`, 1);
      await era.input();
      await era.printAndWait(`${you.name}은(는) 그제야 모든 기억이 떠올랐다.`);
      await era.printAndWait(
        `${treve.name}가 보여준 광기 어린 이상성이 떠오르자, ${you.name}의 의식이 순식간에 또렷해졌다.`,
      );
      await era.printAndWait(
        `동시에, ${you.name}은(는) 자신의 사지가 수갑에 채여 침대 틀에 단단히 고정되어 있다는 사실을 깨달았다.`,
      );
      era.printButton('「이게 뭐야? 왜 이래……?」', 1);
      await era.input();
      await era.printAndWait(
        `아무리 몸부림을 쳐봐도 사지를 파고드는 날카로운 통증만 더해질 뿐이었다. ${you.name}이(가) 구조를 요청하기 위해 다급히 주위를 둘러보던 그때, 등 뒤에서 익숙한 목소리가 들려왔다.`,
      );
      await treve.say_and_wait(['일어나셨네요, ', callname, '。']);
      await era.printAndWait(`${treve.name}였다.`);
      await era.printAndWait(
        `${treve.sex}는 침대 맡에 선 채, 칠흑같이 어두운 심해를 닮은 눈동자로 ${you.name}을(를) 묵묵히 내려다보고 있었다.`,
      );
      era.printButton('「베누스 파크, 왜 이러는 거야!?」', 1);
      await era.input();
      await treve.say_and_wait([
        '보지 말라고 했잖아요…… ',
        callname,
        '이(가) 잘못하신 거예요.',
      ]);
      await era.printAndWait(
        `${treve.name}은(는) 움직일 수 없는 ${you.name}의 손에 손가락을 얽는다. 그리고 천천히 ${you.name}의 얼굴로 다가와, 숨이 막힐 듯한 거리에서 ${you.name}을(를) 응시했다.`,
      );
      await treve.say_and_wait([
        '저는 ',
        callname,
        '에게 첫눈에 반했어요. 그 후로 줄곧 ',
        callname,
        '만 생각하면 가슴이 답답하고, 정말 좋아해서.',
      ]);
      await era.printAndWait(
        `${you.name} 위에 올라탄 ${treve.name}이(가) 손을 ${you.name}의 가슴에 얹었다.`,
      );
      await era.printAndWait(
        `본능이 이대로는 위험하다고 외친다. 하지만 아무리 몸부림쳐도 수갑은 풀리지 않는다. ${treve.uma_sex_title}을(를) 힘으로 이기는 것 따위는, 더더욱 있을 수 없는 일이다.`,
      );
      await treve.say_and_wait([
        callname,
        ' 당신은 이제 일본의 것이 아니에요…… 영원히 저의 것. 저만을 위해 사는 사람이 될 거죠……?',
      ]);
      await era.printAndWait(
        `${treve.name}는 황홀한 미소를 지으며 요염한 눈빛을 보냈다. 발그레하게 상기된 뺨을 한 채 ${you.name}의 얼굴로 바짝 다가온 ${treve.sex}는, 이내 숨결마저 삼켜버릴 듯 밀착한 거리에서 나지막이 속삭였다.`,
      );
      await treve.say_and_wait([
        '전부 ',
        callname,
        ' 탓이라니까요? 절 이렇게 망가뜨려 놓은 ',
        callname,
        '가 나쁜 거예요.',
      ]);
      await era.printAndWait(
        `시선을 돌리려 해도, ${treve.name}의 손에 제지당한다. 그리고 ${treve.name}은(는) 가차 없이 ${you.name}의 입술에 자신의 입술을 겹쳤다`,
      );
      await treve.say_and_wait(['읍, 으응……', callname, '……']);
      await era.printAndWait(
        `질척한 타액 소리가 입안 가득 공허하게 울려 퍼졌다. 쾌감을 음미하듯, ${treve.name}는 집요하게 ${you.name}의 입술을 탐닉했다.`,
      );
      await era.printAndWait(
        `이윽고 숨이 가빠와 한계에 달했을 때가 되어서야, ${treve.sex}는 서서히 입술을 떼어냈다.`,
      );
      await treve.say_and_wait(`아, 아, ${treve.name}…… 이제 그만——`);
      await era.printAndWait(
        `생각이 멈추고, 입 밖으로 내뱉으려던 순간, ${treve.name}이(가) 다시 입술을 맞대며 ${you.name}의 말을 막았다.`,
      );
      await era.printAndWait(
        `숨이 막힌다. 도망치려 해도, ${treve.name}은(는) ${you.name}을(를) 놓아주지 않는다.`,
      );
      await era.printAndWait(
        `계속, 계속, 계속, ${treve.name}의 사랑은 끝이 없이, 입술을 맞대고, 혀를 얽으며, 사랑을 갈구한다.`,
      );
      await era.printAndWait(
        `${treve.name}은 물러나, 멀리 뻗은 혀에서 실처럼 늘어지는 침을 삼키며 웃는다.`,
      );
      await treve.say_and_wait([
        callname,
        '는 제 거예요. 저 말고 그 누구도 바라봐선 안 돼요. 일본 같은 곳엔 절대 안 보내줄 거니까요. 영원히, 언제까지나, 평생 당신만을 사랑할게요.',
      ]);
      await era.printAndWait(
        `${treve.name}는 ${you.name}의 뺨을 다정하게 감싸 안으며, 주체할 수 없는 격정의 여운을 담아 다시금 입술을 겹쳐왔다.`,
      );
      era.drawLine();
      await era.printAndWait(
        '며칠 뒤, 정적만이 감도는 방 안에 켜진 TV에서 뉴스가 흘러나왔다.',
      );
      await you.say_as_unknown_and_wait(
        '——프랑스를 방문 중이던 일본인 트레이너가 돌연 행방불명되었습니다. 현재 현지 경찰과 공조하여 행방을 쫓고 있으나, 이렇다 할 단서가 발견되지 않아 수사에 난항을 겪고 있습니다.',
      );
      await treve.say_as_unknown_and_wait('후후……');
    };
    f.title = title;
    return f;
  })(),
};
