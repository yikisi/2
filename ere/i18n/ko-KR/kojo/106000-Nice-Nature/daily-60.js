/**
 * @file ナイスネイチャ - 日常
 * @author 红红火火恍惚
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  good_morning(nature, callname, self_call) {
    const buffer = [
      () => nature.say(`오늘 트레이닝 일정은 뭐야? 목록 좀 보여 줘.`),
      () =>
        nature.say(
          `어제 고깃집 아저씨가 새 메뉴를 냈대. 이따 같이 가 볼래? 내가 살게~`,
        ),
      () =>
        nature.say(`쉿! 목소리 낮춰! 봐, 저기 고양이 자고 있어. 자리 옮길까?`),
      () =>
        nature.say(`오! ${callname}, 왠지 기분 좋아 보이네. 좋은 일 있었어?`),
      () =>
        nature.say(
          `그러고 보니 저녁 메뉴는 정했어? 아직이면 ${self_call}가 솜씨 좀 발휘해 볼까!`,
        ),
    ];
    if (era.get('status:60:熬夜') > 0) {
      buffer.push(() => {
        nature.say(`흐아아——암…… ${callname}? 왜 하품하냐고? 아하하하……`);
        nature.say(
          `더는 못 숨기겠네. 사실 ${self_call}, 만담 영상 하나만 보고 자려 했는데 너무 재미있어서 정신을 차려 보니……`,
        );
        nature.say(
          `어느새 새벽이더라. 그래도 정말 재미있었어! ${callname}도 볼래?`,
        );
      });
    } else if (era.get('base:60:体力') === era.get('maxbase:60:体力')) {
      buffer.push(() => {
        nature.say(
          `오~ ${callname}, 좋은 아침! 덕분에 ${self_call}, 푹 쉬었어! 맛있는 것도 잔뜩 먹고 푹 잤으니 지금은 기운이 넘친달까?`,
        );
        nature.say(
          `왠지 젊어진 기분이야! 딱 하나 아쉬운 건……아, 아무것도 아니야. 아무튼 다음 일정 알려 줄래?`,
        );
      });
    } else {
      buffer.push(() =>
        nature.say(
          `아, ${callname}, 좋은 아침~ 푹 잤더니 피로가 싹 풀렸어. 누가 마사지까지 해 주면 금상첨화겠지만~ 뭐, 그건 그렇고 다음 일정은?`,
        ),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} self_call ナイスネイチャの自称
   */
  select(nature, self_call) {
    if (Math.random() < 0.5) {
      nature.say(`왜, 왜? ${self_call}한테 볼일 있어?`);
    } else {
      nature.say(`응? 할 일 있어? 그럼 ${self_call}도 같이 갈게!`);
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async office_study(nature, callname) {
    await nature.say_and_wait(
      `헤에— ${callname}이(가) 이런 문제까지 풀 줄 알다니 의외인걸? 혹시 예전엔 수재였어?`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async office_prepare(nature, callname) {
    await nature.say_and_wait(
      `상점가 식구들이랑 ${callname}의 기대를 저버리지 않을게!`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async talk(nature, callname, self_call) {
    const buffer = [];
    switch (era.get('cflag:60:干劲')) {
      case -2:
        buffer.push(
          () => nature.say_and_wait('아아……몸이……안 움직여……'),
          () =>
            nature.say_and_wait(
              '아, 안 돼! 머릿속에 이상한 생각만 가득해……빨리 진정해야지……',
            ),
        );
        break;
      case -1:
        buffer.push(
          () => nature.say_and_wait('으음——왠지 의욕이 안 나네.'),
          () => nature.say_and_wait('온몸이 어딘가 불편해……쉬는 게 좋을까?'),
        );
        break;
      case 0:
        buffer.push(
          () => nature.say_and_wait(`안녕, ${callname}. 오늘 트레이닝은?`),
          () =>
            nature.say_and_wait(
              `트레이닝이든 레이스든 다른 일이든 ${callname}한테 맡길게~ 할 수 있는 만큼은 할 테니까.`,
            ),
          () => nature.say_and_wait(`흐냐——아, ${callname}. 오늘 일정은?`),
        );
        break;
      case 1:
        buffer.push(
          () =>
            nature.say_and_wait(
              '음~ 느낌 좋은데. 이 기세라면……아무것도 아니야! 하하하하……',
            ),
          () => nature.say_and_wait('날씨 좋네. 오늘은 무슨 일이 있을까?'),
          () =>
            nature.say_and_wait(
              `오~ 뭔가 좋은 일이 생길 것 같은데? 어떻게 생각해, ${callname}？`,
            ),
        );
        break;
      case 2:
        buffer.push(
          () =>
            nature.say_and_wait(
              '안녕~ 오늘도 전력을 다해——농담이야. 그래도 할 수 있는 만큼은 열심히 할게.',
            ),
          () =>
            nature.say_and_wait(
              `${self_call}, 절호조! 아예 두 바퀴 뛰어 볼까? 결과는 기대하지 말고.`,
            ),
          () =>
            nature.say_and_wait(
              `오? ${callname}, 좋은 아침~ 같이 아침 먹거나 산책할래? 내가 살게.`,
            ),
        );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async office_gift(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `어? 나한테? 고마워, ${callname}! 취향을 모르겠다고? 괜찮아, ${callname}의 마음만으로도 충분히 기뻐!`,
      );
    } else {
      await nature.say_and_wait(
        `뭔데, 뭔데? 선물? 와! 고마워, ${callname}! 지금 열어 봐도 돼?`,
      );
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async office_cook(nature, callname, self_call) {
    await nature.say_and_wait(
      `요리 같은 건 이 ${self_call}에게 맡기라고! ${callname}은(는) 저기 가서 좀 쉬고 있어! 자, 어서 어서!`,
    );
  },
  /** @param {CharaTalk} nature ナイスネイチャ */
  async office_rest(nature) {
    await nature.say_and_wait(
      '가끔은 이렇게 둘이서 아무것도 안 하고 멍하니 있는 것도 나쁘지 않네. 아주 가끔이라면 말이야.',
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} self_call ナイスネイチャの自称
   */
  async office_game(nature, self_call) {
    await nature.say_and_wait(
      `오? 이 ${self_call}에게 도전하겠다고? 배짱 좋은걸! 그럼 진 사람이 이긴 사람 소원 하나 들어주기다? 그래야 의욕이 생기지!`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async s_a_tree_hollow(nature, callname) {
    await nature.say_and_wait(
      `젠장!!!!! 다들, 그리고 ${callname}도 그렇게 기대해 주는데 나는——`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async s_a_dating(nature, callname) {
    await nature.say_and_wait(
      `학원 안에서 이렇게 있으니……역시 주변 시선이 신경 쓰이네……그래도 ${callname}만 괜찮다면——`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} self_call ナイスネイチャの自称
   */
  async s_r_lunch(nature, self_call) {
    await nature.say_and_wait(
      `짜잔! ${self_call}의 수제 도시락이야! 매일 영양 균형을 맞추는 건 중요하니까!`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   * @param {PrintedSpan} call_20 ナイスネイチャのセイウンスカイへの呼び方
   */
  async o_r_fishing(nature, callname, self_call, call_20) {
    await nature.say_and_wait([
      '그러고 보니 전에 ',
      call_20,
      '하고 몇 번 낚시하러 갔는데, ',
      nature.sex,
      '한테 요령도 많이 배웠거든! 어때, ',
      callname,
      '？ ',
      self_call,
      '가 가르쳐 줄까?',
    ]);
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async o_r_walking(nature, callname) {
    await nature.say_and_wait(
      `오늘 날씨 좋네~ 아예 점심도 이 강가에서 먹을까? ${callname}도 같이 먹을래?`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async out_river_talk(nature, callname) {
    await nature.say_and_wait('……그래서 채소 가게 아주머니가 또……');
    await era.printAndWait(
      `시원한 강바람을 느끼며 ${nature.name}가 들려주는 상점가 이야기에 귀를 기울였다.`,
    );
    await nature.say_and_wait(`……${callname}? 듣고 있어?`);
    await era.printAndWait(
      `대답이 없는 게 마음에 들지 않았는지 ${nature.name}가 토라진 목소리를 냈다.`,
    );
    await era.printAndWait(
      `대답하고 달래 주자 ${nature.name}는 다시 아까의 기세로 돌아왔다……`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async o_s_arcade(nature, callname, self_call) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `집게 힘이 약해 보이는데, 정말 잡을 수 있을까?……뭐? 예전에 특훈해서 익힌 비기라고? ${callname}한테도 그런 청춘이 있었구나. 그럼 ${self_call}한테도 보여 줄래?`,
      );
    } else {
      await nature.say_and_wait(
        `게임 센터라……젊은 애들이 자주 오지. 나? 난 여기 자주 올 만한 캐릭터 아니거든! ${self_call}는 집안일 파라구? 뭐, 가끔 같이 노는 건 나쁘지 않지. 가끔은.`,
      );
    }
  },
  /** @param {CharaTalk} nature ナイスネイチャ */
  async o_s_drawing(nature) {
    await nature.say_and_wait(
      `뭐가 나올까? 십중팔구 삼등상이겠지만……그래도 혹시 모르잖아?`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async o_s_ktv(nature, callname, self_call) {
    await era.printAndWait(`${nature.name}와 노래방에 갔다……`);
    await nature.say_and_wait('——어, 어땠어? 내 노래.');
    await era.printAndWait(
      `노래를 마친 ${nature.name}는 조금 긴장한 채 평가를 기다렸다.`,
    );
    await nature.say_and_wait(
      `천상의 목소리라니……너무 과장이잖아! ${callname}、${self_call}한테 듣기 좋은 말 해 봤자 떡고물은 없다구?` +
        `자! 다음은 ${callname} 차례!`,
    );
    await era.printAndWait(`${nature.name}와 즐거운 시간을 보냈다.`);
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async o_s_movie(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `로맨스 영화? ${callname}, 의외로 소녀 감성이네? 내가 좋아할 것 같다고? 하하하——`,
      );
      await nature.say_and_wait(
        `그런 건 어린 친구들이나 알콩달콩한 커플 취향이지. 그래도 ${callname}이(가) 보고 싶으면 같이 볼게.`,
      );
      await nature.say_and_wait(`${callname}하고 함께 볼 수 있다면……`, true);
    } else {
      await nature.say_and_wait(
        '우와……포스터 박력 있네. 거대 로봇과 닭 모양 괴수의 대결이라. 설정은 모르겠지만 재미있겠다. 오늘은 이걸로 할까?',
      );
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} self_call ナイスネイチャの自称
   * @param {number} dice おみくじの出目、0-1 の小数、小さいほど良い
   */
  async o_c_pray(nature, self_call, dice) {
    await nature.say_and_wait(`어디 보자, ${self_call}의 오늘 운세는——`);
    await era.printAndWait(
      `${nature.name}가 통을 가볍게 흔들자 잠시 뒤 운세 종이가 떨어졌다.`,
    );
    if (dice < 0.1) {
      await nature.say_and_wait(
        `오~ 대길! ${self_call}도 빛날 수 있다는 건가……농담이야. 그래도 이 운을 레이스 때까지 아껴 둘 수 있으면 좋을 텐데!`,
      );
    } else if (dice < 0.25) {
      await nature.say_and_wait(
        '중길——나쁘지 않네. 조만간 좋은 일이 생길지도?',
      );
    } else if (dice < 0.6) {
      await nature.say_and_wait(
        '으음, 소길. 뭐, 합격점이네. 위에서부터 세면……이것도 3등?',
      );
    } else {
      await nature.say_and_wait(
        '으악……설마 이게……뭐, 뭐, 제비뽑기 운만 나쁜 거야. 신경 쓰지 말자!……이상한 일은 안 생기겠……지……',
      );
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async o_s_restaurant(nature, callname) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `여기도 먹을 게 많네. ${callname}은(는) 뭐 먹고 싶어? 여기? 좋아, 가자!`,
      );
      await nature.say_and_wait(
        '일단 쌤이 좋아하는 음식을 메모해두고...',
        true,
      );
    } else {
      await nature.say_and_wait('으음……조금 배고프네. 이 근처에서 뭐 먹을래?');
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async o_s_dating(nature, callname, self_call) {
    if (Math.random() < 0.5) {
      await nature.say_and_wait(
        `저기……손잡지 않을래? 그게……그러는 편이 더 데이트 같잖아? 괜찮아!? 에헤헤…… ${callname} 손, 따뜻하네——`,
      );
    } else {
      await nature.say_and_wait(
        `피곤해? 그럼…… ${self_call} 무릎을 베고 누워 볼래? 아, 얼굴은 이쪽으로 돌리지 마! 부, 부끄럽잖아……`,
      );
    }
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async o_s_shopping(nature, callname, self_call) {
    await era.printAndWait(`${nature.name}와 가게들을 둘러보았다……`);
    await nature.say_and_wait('오~ 이 옷, 귀여운데——');
    await era.printAndWait(
      `${nature.name}는 쇼윈도에 걸린 옷을 보고 감탄했다.`,
    );
    await nature.say_and_wait(
      `그렇지? ${callname}도 그렇게 생각하지?……자, 잠깐. 입어 보고 싶다고는 안 했어!`,
    );
    await nature.say_and_wait(
      `이런 하늘하늘한 건 어린 애들한테 어울리잖아? ${self_call}한테는 안 어울린다구!`,
    );
    await era.printAndWait(
      `권유해도 ${nature.name}는 거듭 거절하다가 결국 도망쳤다.`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   */
  good_night_normal(nature, you, callname) {
    era.print(
      `바쁜 하루를 마치고 ${you.name}은(는) ${nature.name}를 기숙사 앞까지 바래다주었다.`,
    );
    nature.say(`오늘도 수고했어! 내일 봐, ${callname}！`);
    era.print(
      `손을 흔들며 ${nature.name}의 뒷모습을 배웅한 뒤, ${you.name}도 돌아서서 방으로 돌아가 쉬었다.`,
    );
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {number} check 求愛判定値。大成功なら既定で同意
   */
  async good_night_sex(nature, you, callname, check) {
    era.print(
      `바쁜 하루를 마치고 ${you.name}은(는) ${nature.name}를 기숙사 앞까지 바래다주었다.`,
    );
    era.print(
      `${you.name}이(가) 평소처럼 손을 흔들며 헤어지려는 순간, 나이스 네이처가 소매를 붙잡았다.`,
    );
    era.print(
      '내려다보니 석양 때문인지 고개를 숙인 나이스 네이처의 볼이 유난히 붉었다.',
    );
    era.print(
      `짧은 침묵 끝에 붉은 머리의 ${nature.teen_sex_title}이(가) 머뭇거리며 입을 열어 어색함을 깼다.`,
    );
    nature.say(
      '오늘……외박 신청해 뒀으니까……그러니까……조금 더 같이 있어도 괜찮아. 그게……만약……',
    );
    nature.say(`만약 ${callname}이(가) 원한다면……더, 더 진전해도——`);
    era.print(
      `이쯤 되자 ${nature.teen_sex_title}의 볼은 새빨갛게 달아올랐고, 촉촉한 눈은 ${
        you.name
      }의 눈을 바라보고 있었다. ${nature.sex}가 더 말하지 않아도 ${
        you.name
      }은(는) 이미 알고 있었다.`,
    );
    era.printButton('받아들인다', 1);
    era.printButton('거절한다', 2, { disabled: check === 2 });
    const ret = await era.input();
    if (ret === 1) {
      nature.say('저, 정말!');
      era.print(
        `부끄러워하던 나이스 네이처의 얼굴에 기쁨이 활짝 번졌다. ${you.name}이(가) 다시 확인할 틈도 없이 팔을 끌어안고 귓가에 작게 속삭였다.`,
      );
      nature.say(
        `오늘 밤 트레이닝도 잘 부탁해? 트・레・이・너・${you.adult_sex_title} ❤️`,
      );
      era.print(
        `그렇게 ${
          you.name
        }은(는) 나이스 네이처에게 손을 이끌려, 하교하던 ${nature.uma_sex_title}들의 따뜻한 배웅을 받으며 길 건너로 걸어갔다……`,
      );
    } else {
      nature.say('그렇구나……그렇겠지……');
      era.print(
        `${nature.teen_sex_title}은(는) 소매를 잡았던 손을 놓고, 얼굴에 숨기지 못한 쓸쓸함을 드러냈다.`,
      );
      nature.say(
        `응, 괜찮아. 나도 참, ${callname}, 오늘 그렇게 피곤했는데. 푹 쉬는 게 좋겠지. 아까 말은 못 들은 걸로 해 줘. 잘 자, ${callname}, 내일 봐!`,
      );
      era.print(
        `쓸쓸하게 떠나가는 ${nature.teen_sex_title}의 뒷모습을 보며 ${
          you.name
        }의 가슴에는 말로 할 수 없는 감정이 남았다.`,
      );
    }
    return ret;
  },
  cl_valentine: (() => {
    const title = '밸런타인데이';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(`안녕, ${callname}, 좋은 아침.`);
      await era.printAndWait(
        '이른 아침 학원에 도착하자, 나이스 네이처가 기다렸다는 듯 교문에서 나타났다.',
      );
      await nature.say_and_wait('그게……저……아무튼 이따 트레센에서 봐!');
      await era.printAndWait(
        `${nature.teen_sex_title}은(는) 할 말이 있는 듯했지만 끝내 입 밖에 내지 못하고 교문 안으로 뛰어갔다.`,
      );
      era.drawLine({ content: '⏰낮이 되었다⏰' });
      await nature.say_and_wait(`오~ ${callname}、${self_call}라구?`);
      await era.printAndWait(
        '식당에서 밥을 먹고 있는데 나이스 네이처가 불쑥 곁에 나타났다.',
      );
      await nature.say_and_wait(`${callname}한테 좋은 거 줄게. 이거, 초……`);
      await era.printAndWait(
        '나이스 네이처는 말을 더듬으며 좀처럼 말을 잇지 못했다.',
      );
      await nature.say_and_wait(
        `초……초특가 메밀국수 할인권! 전에 상점가 아주머니가 몇 장 주셨는데, 난 다 못 쓸 것 같아서 ${callname}한테 줄게! 하하하하……그럼 또 봐!`,
      );
      await era.printAndWait(
        '나이스 네이처는 여전히 어색한 모습으로 식당에서 도망쳤다.',
      );
      era.drawLine({ content: '⏰밤이 되었다⏰' });
      await nature.say_and_wait('여기까지만 바래다줘도 돼.');
      await era.printAndWait(
        '나이스 네이처를 릿토 기숙사 앞까지 바래다주고 돌아가려는 순간, 옷자락을 붙잡혔다.',
      );
      await nature.say_and_wait('이, 이거! 받아 줘!');
      await era.printAndWait(
        '나이스 네이처는 볼을 새빨갛게 물들이고 용기를 내어 등 뒤에서 초콜릿을 내밀었다.',
      );
      await nature.say_and_wait(
        '일단은……직접 만든 초콜릿이야. 싫으면 안 받아도 괜찮은데……?',
      );
      await era.printAndWait('이렇게 소중한 선물을 거절할 수 있을 리 없다.');
      await era.printAndWait('나이스 네이처와의 유대가 한층 깊어졌다.');
    };
    f.title = title;
    return f;
  })(),
  cl_fans: (() => {
    const title = '팬 감사제';
    /** @param {CharaTalk} nature ナイスネイチャ */
    const f = async (nature) => {
      await nature.say_and_wait('와——엄청 북적거리네?');
      await era.printAndWait(
        '방문객들로 가득 찬 학원을 보고 나이스 네이처가 감탄했다.',
      );
      await nature.say_and_wait(
        '그래도 대부분 테이오나 맥퀸 같은 반짝이는 대스타들의 팬이겠지?',
      );
      await nature.say_and_wait('나 같은 조연은 뒤에서 도와야——');
      await era.printAndWait('??? 「아! 네이처 찾았다!」');
      await era.printAndWait(
        `나이스 네이처가 돌아서서 떠나려던 순간, 여자의 목소리가 ${nature.sex}를 불러 세웠다.`,
      );
      await nature.say_and_wait(
        '어? 채소 가게 아주머니? 여긴 어떻게 오셨어요?',
      );
      await era.printAndWait(
        '채소 가게 아주머니 「당연히 네이처가 학원에서 어떻게 지내는지 보러 왔지! 나만 온 것도 아니야——」',
      );
      await nature.say_and_wait(
        '아! 고깃집 아저씨! 매점 할머니……다들 오셨네……',
      );
      await era.printAndWait(
        '채소 가게 아주머니 「당연히 와야지! 우린 네이처 팬이잖니!」',
      );
      await nature.say_and_wait(
        '으으……마음은 정말 고마운데요……그래도 이렇게 있으니……왠지 부끄럽네요……',
      );
      await era.printAndWait(
        '땋은 머리로 얼굴을 가린 나이스 네이처를 상점가 사람들이 둘러쌌다.',
      );
      await era.printAndWait(
        `아무래도 ${nature.sex}는 이번 팬 감사제를 아주 즐겁게 보낼 것 같다……`,
      );
    };
    f.title = title;
    return f;
  })(),
  cl_christmas: (() => {
    const title = '크리스마스';
    /**
     * @param {CharaTalk} nature ナイスネイチャ
     * @param {string} callname ナイスネイチャのプレイヤーへの呼び方
     * @param {string} self_call ナイスネイチャの自称
     */
    const f = async (nature, callname, self_call) => {
      await nature.say_and_wait(
        '여보세요? 나야. 보이스 피싱 아니고, 진짜 나라구?',
      );
      await era.printAndWait(
        '수화기 너머로 익숙한 목소리가 들렸다. 나이스 네이처였다.',
      );
      await nature.say_and_wait('저기, 공원으로 와 줄래? 지금……응, 이따 봐!');
      era.drawLine({ content: '⏰공원에 도착했다⏰' });
      await nature.say_and_wait(`아, 왔다 왔어. ${callname}! 여기, 여기~`);
      await era.printAndWait('멀리서도 손을 흔드는 나이스 네이처가 보였다.');
      await era.printAndWait('오늘은 크리스마스다.');
      await nature.say_and_wait(
        `뭐, 별일은 아니야. ${self_call}, 별다른 일정 없어 보여서 같이 크리스마스 보내자고 불렀어!`,
      );
      await nature.say_and_wait('안……될까?');
      await era.printAndWait(
        '좋다는 대답을 듣자 나이스 네이처는 다시 미소를 짓고 등 뒤에서 선물 상자를 내밀었다.',
      );
      await nature.say_and_wait(
        '이거! 메리 크리스마스! 직접 뜬 목도리야……잘 뜨지도 못했고 무늬도 수수하지만……',
      );
      await nature.say_and_wait('그래도! 괜찮으면 받아 줘!');
      await era.printAndWait(
        '상자 안에는 정성껏 뜬 목도리가 들어 있었다. 나이스 네이처의 배려가 고스란히 전해졌다.',
      );
      await nature.say_and_wait(
        '마음에 들어? 그, 그렇구나……날 생각해서 그냥 하는 말은 아니지?',
      );
      await era.printAndWait(
        '나이스 네이처의 걱정을 풀어 준 뒤, 두 사람은 평온한 크리스마스를 보냈다……',
      );
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {PrintedSpan} callname ナイスネイチャのプレイヤーへの呼び方
   * @param {string} self_call ナイスネイチャの自称
   */
  async load_talk_normal(nature, callname, self_call) {
    await nature.say_and_wait([
      callname,
      '(이)라면 분명 좋은 길을 찾을 거야…… ',
      self_call,
      '는 믿으니까. 지금도, 예전에도, 앞으로도……',
    ]);
  },
  /**
   * @param {CharaTalk} nature ナイスネイチャ
   * @param {PrintedSpan} callname ナイスネイチャのプレイヤーへの呼び方
   */
  async load_talk_pregnant(nature, callname) {
    await nature.say_and_wait([
      '아하, 그렇구나. 역시 네이처 씨는……하지만 잠깐, 안 돼, ',
      callname,
      ', 우리 아이에게 적어도, 적어도 이름만은……',
    ]);
    await nature.say_and_wait(
      '이 아이에게 아빠가 없어도 괜찮아. 나 혼자 키울게. 그래도 제발, 이름 하나만……',
    );
    await nature.say_and_wait([
      '「하나츠키 네이처」? 「엘레강스 네이처」? 그런 이름. 네이처 씨가 마지막으로 부탁하는 거야, ',
      callname,
      ', 이름을 지어 줘……',
    ]);
    await era.printAndWait(
      [nature.get_colored_name(), '「', callname, '————！！」'],
      { color: nature.color, fontSize: '3rem' },
    );
  },
};
