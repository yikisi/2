/**
 * @file マヤノトップガン - 日常
 * @author 黑奴二号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');
const { get_random_value } = require('#/utils/value-utils');

module.exports = {
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {PrintedSpan} call_3 マヤノトップガンのトウカイテイオーへの呼び方
   */
  good_morning(maya, callname, call_3) {
    const buffer = [];
    if (era.get('base:24:体力') === era.get('maxbase:24:体力')) {
      if (era.get('relation:24:0') > 75) {
        buffer.push(
          () => maya.say('따르릉 따르릉──♪ 깨우러 왔어~🌟'),
          () =>
            maya.say([
              '좋은 아침! 에헤헤~ 아침부터 ',
              callname,
              ' 보고 싶어서 날아왔어!',
            ]),
        );
      } else {
        buffer.push(
          () => maya.say('좋은 아침~! 오늘도 힘차게 이륙할 거야!'),
          () =>
            maya.say([
              callname,
              ', 좋은 아침! 혹시~ 마야를 찾고 있었어? 에헤헤, 여기 있어~♪',
            ]),
        );
      }
    } else if (era.get('status:24:熬夜')) {
      if (era.get('relation:24:0') > 75) {
        buffer.push(() =>
          maya.say(
            '후아암…… 오늘 도시락 만드느라 일찍 일어났어…… 에헤헤, 점심때 기대해 줘♪',
          ),
        );
      } else {
        buffer.push(() =>
          maya.say([
            '후아암…… 어제 ',
            call_3,
            '하고 늦게까지 깨어 있었어~. 졸리지만 좀 어른이 된 기분이야……',
          ]),
        );
      }
    } else if (era.get('relation:24:0') > 75) {
      buffer.push(
        () =>
          maya.say(
            '있지, 있지! 트레이닝하자! 마야는 언제든 따라갈게🌟 오래오래 행복할 미래를 향해서!',
          ),
        () =>
          maya.say([
            '타깃, 록 온🌟 ',
            callname,
            '의 미소로 오늘의 연료 충전~♪',
          ]),
      );
    } else {
      buffer.push(
        () =>
          maya.say([
            callname,
            '~! 오늘은 무슨 트레이닝을 해? 마야는 언제든 긴급 이륙할 수 있어!',
          ]),
        () =>
          maya.say([
            '가자, ',
            callname,
            '! 오늘도 두근두근하고 반짝이는 일을 찾아 이륙이야!',
          ]),
      );
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async talk(maya, callname) {
    const buffer = [];
    switch (era.get('cflag:24:干劲')) {
      case -2:
        buffer.push(
          () =>
            maya.say_and_wait(
              '이상해……? 몸이 말을 안 들어……? 마야, 왜 이러지……?',
            ),
          () => maya.say_and_wait('으으음~? 의욕이 급강하하는 느낌……?'),
        );
        break;
      case -1:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait(
                '마야가 열심히 할 테니까, 나중에 상 줘야 해? 안 그러면 엔진이 안 걸릴지도……',
              ),
            () =>
              maya.say_and_wait(
                '걱정하지 마! 마야는 갑자기 컨디션이 돌아올 때가 많으니까! 조금 안 좋은 것쯤이야 끄떡없어!',
              ),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait(
                '으으…… 컨디션이 별로야. 마야, 추락할 것 같아~',
              ),
            () =>
              maya.say_and_wait(
                '지금은 열심히 하기 싫단 말이야! 누가 뭐래도! 하기 싫은 건 싫어~!',
              ),
          );
        }
        break;
      case 0:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                callname,
                '하고 함께하는 트레이닝은 즐거워! 그래서 열심히 하고 싶어져!',
              ]),
            () =>
              maya.say_and_wait([
                '마야를 지루하게 하면 안 돼? ',
                callname,
                '하고 있으면 지루할 것 같진 않지만.',
              ]),
          );
        } else {
          buffer.push(
            () => maya.say_and_wait('준비 OK!! 마야는 언제든 이륙할 수 있어'),
            () =>
              maya.say_and_wait(
                '시야 양호! 지시 대기 중! 지시 내려 줄래? 마야는 언제든 날 수 있어!',
              ),
          );
        }
        break;
      case 1:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                callname,
                '! 지금 마야, 반짝반짝하지 않아? 에헤헤♪',
              ]),
            () => maya.say_and_wait('마야, 열심히 할게~! 잘하면 칭찬해 줘🌟'),
          );
        } else {
          buffer.push(
            () => maya.say_and_wait('뭔가 두근두근할 만한 일 없을까~♪'),
            () =>
              maya.say_and_wait(
                '응, 응, 응! 몸이 가볍고 유연해! 마야, 멀리까지 달릴 수 있겠어~!',
              ),
          );
        }
        break;
      case 2:
        if (era.get('relation:24:0') > 75) {
          buffer.push(
            () =>
              maya.say_and_wait([
                callname,
                '하고 함께라면 뭘 해도 즐거울 것 같아! 이런 기분은 처음이야!',
              ]),
            () =>
              maya.say_and_wait([
                '마야는 꼭 반짝반짝 빛나는 어른 ',
                maya.uma_sex_title,
                '가 될 거야! 그러니까 가장 가까이에서 지켜봐 줘!',
              ]),
          );
        } else {
          buffer.push(
            () =>
              maya.say_and_wait(
                '어떤 트레이닝이든 맡겨 줘! 슈슉 끝내 버릴 테니까!',
              ),
            () =>
              maya.say_and_wait(
                '마야의 컨디션, 상승 중! 엄청 반짝이는 달리기를 보여 줄 수 있겠어!',
              ),
          );
        }
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} maya マヤノトップガン */
  async s_a_tree_hollow(maya) {
    await maya.say_and_wait([
      '마야는 어른 ',
      maya.get_colored_name(),
      '인걸. 아, 안 울 거야!',
    ]);
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async s_a_dating(maya, callname) {
    await maya.say_and_wait([
      '데이트하자! 마야는 ',
      callname,
      '하고 학원에서 제일 잘 어울리는 커플이 될 거니까!',
    ]);
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async s_r_lunch(maya, callname) {
    await maya.say_and_wait([
      '마야가 ',
      callname,
      '한테 도시락 만들어 왔어. 같이 먹자!',
    ]);
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {boolean|undefined} fish_success 釣り成功か。釣りのときだけ値がある
   */
  async out_river(maya, you, callname, fish_success) {
    if (fish_success !== void 0) {
      await era.printAndWait([
        maya.get_colored_name(),
        '하고 강으로 낚시를 하러 갔다.',
      ]);
      await maya.say_and_wait([
        callname,
        '하고 낚시 데이트…… 어른들 같아~ 슈웅',
      ]);
      if (fish_success) {
        await maya.say_and_wait('마야, 알았어! 이렇게 하면…… 앗! 잡혔다!');
        await era.printAndWait([
          maya.get_colored_name(),
          '은 금세 요령을 터득한 듯하다.',
        ]);
      } else {
        await maya.say_and_wait(
          '아아…… 재미없어…… 왜 이렇게 물고기가 안 잡혀?',
        );
        await era.printAndWait([
          '끈기가 부족한 탓에 ',
          maya.get_colored_name(),
          '은 거의 아무것도 잡지 못했다.',
        ]);
      }
      return;
    }
    const buffer = [
      async () => {
        await maya.say_and_wait([
          callname,
          ', 뭘로 할래~? 마야는 더 뜨겁게, 꿀이랑 생크림을 넣은 맞춤 스페셜로……',
        ]);
        era.printButton('무슨 이야기야?', 1);
        await era.input();
        await maya.say_and_wait(
          '음료수 말이야! 참, 이 길을 걸을 땐 손에 커피를 들고 있어야지!',
        );
        await maya.say_and_wait([
          '이 길을 다 걸으면 마야 커피는 ',
          callname,
          '한테 줄게♪',
        ]);
        await maya.say_and_wait([callname, '! 멋진 포즈 부탁해!']);
        await maya.say_and_wait('셋, 둘, 하나!');
        await maya.say_and_wait('……');
      },
      async () => {
        await maya.say_and_wait(
          '둑이 비행기 활주로 같아…… 여기서 달리면 날아오를 것 같아~',
        );
        await maya.say_and_wait([callname, ', 따라잡아 봐🌟']);
        era.printButton('떨어지지 않게 조심해', 1);
        await era.input();
        await maya.say_and_wait([
          '괜찮아. ',
          callname,
          '이(가) 받아 줄 거라고 믿으니까!',
        ]);
        await era.printAndWait([
          '그 뒤 ',
          you.get_colored_name(),
          '은(는) ',
          maya.get_colored_name(),
          '하고 데이트를 계속했다……',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async out_shopping(maya, you, callname) {
    const ret = [];
    era.print('상점가 어디로 갈까?');
    era.printButton('노래방으로', 1);
    era.printButton('게임 센터로', 2);
    era.printButton('쇼핑하러', 3);
    ret.push(await era.input());
    switch (ret[0]) {
      case 1:
        await era.printAndWait([
          maya.get_colored_name(),
          '하고 노래방에 갔다……',
        ]);
        await maya.say_and_wait([
          '오늘은 마야의 노랫소리로 ',
          callname,
          '의 마음을 사로잡을 거야!',
        ]);
        await maya.say_and_wait('어때, 마야의 매력이 전해졌어?');
        era.printButton('「귀여워!」', 1);
        era.printButton('「セクシーだ！」', 2);
        if ((await era.input()) === 1) {
          await maya.say_and_wait([
            '으으……! ',
            callname,
            ', 이 노래가 마야한테는 아직 이르다고 생각했어!?',
          ]);
          era.printButton('「그런 뜻은 아니야.」', 1);
          await era.input();
          await maya.say_and_wait(
            'うんうん……つまりマヤの魅力、セクシーだけじゃないってこと！',
          );
          await era.printAndWait([
            '조금 엇갈린 것 같지만, ',
            maya.get_colored_name(),
            '의 기분은 좋아졌다.',
          ]);
        } else {
          await maya.say_and_wait([
            '해냈다~♪ ',
            callname,
            '(이)라면 그렇게 말할 줄 알았어!',
          ]);
          await maya.say_and_wait([
            callname,
            '은(는) 마야를 엄청 좋아하는구나~♪',
          ]);
        }
        await era.printAndWait([
          maya.get_colored_name(),
          '하고 즐거운 시간을 보냈다.',
        ]);
        break;
      case 2:
        await era.printAndWait([
          maya.get_colored_name(),
          '하고 게임 센터에 갔다……',
        ]);
        await maya.say_and_wait(['와~~~! ', callname, ', 이것 좀 봐!']);
        await maya.say_and_wait('저기, 저 인형──');
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) ',
          maya.get_colored_name(),
          '이 가리킨 곳을 보니, ',
          maya.uma_sex_title,
          ' 모양의 인형이 든 인형 뽑기 기계가 있었다.',
        ]);
        await maya.say_and_wait(
          '저거 우마무스메 인형이지! 엄청 귀여워~ 갖고 싶어~!',
        );
        await maya.say_and_wait('그런데 용돈이 이제 거의 없어……');
        await era.printAndWait([
          '눈을 반짝이던 ',
          maya.get_colored_name(),
          '이 갑자기 풀이 죽었다.',
        ]);
        era.printButton('「뽑아 줄까?」', 1);
        await era.input();
        await maya.say_and_wait('정말!? 그럼 마야는 옆에서 응원할게!!');
        await maya.say_and_wait(['가라, 가라, 힘내, 힘내! ', callname, '♪']);
        ret.push(get_random_value(0, 2));
        switch (ret[1]) {
          case 0:
            await maya.say_and_wait('으으, 아까워~ 조금만 더 하면 됐는데……!');
            era.printButton('「미안……」', 1);
            await era.input();
            await maya.say_and_wait(['앗, 신경 쓰지 마, ', callname, '！！']);
            await maya.say_and_wait(
              '마야를 위해 애써 줬잖아. 그것만으로도 기뻐!',
            );
            await era.printAndWait([
              '아무것도 뽑지 못했지만, ',
              maya.get_colored_name(),
              '은 그래도 즐거워 보였다.',
            ]);
            break;
          case 1:
            await maya.say_and_wait(['해냈다! ', callname, ', 고마워!']);
            await maya.say_and_wait([
              callname,
              '이(가) 인형을 뽑을 때 진지한 표정, 두근거렸어……♪',
            ]);
            await maya.say_and_wait([
              '에헤헤, 어디에 장식할까~? 마야랑 ',
              callname,
              '의 추억이니까 고민되네!',
            ]);
            await era.printAndWait([
              maya.get_colored_name(),
              '은 기쁜 듯하다.',
            ]);
            break;
          case 2:
            await maya.say_and_wait('와~ 귀여워~! 이렇게나 많이! 대단해!!');
            await maya.say_and_wait([
              '에헤헤, 전부 ',
              callname,
              '이(가) 마야를 위해 애써 준 덕분이야.',
            ]);
            await maya.say_and_wait('마야, 지금 엄청…… 기뻐!!');
            await maya.say_and_wait([
              '이 인형을 ',
              callname,
              '(이)라고 생각하고 매일 꼭 껴안을래!',
            ]);
            await era.printAndWait([
              maya.get_colored_name(),
              '은 무척 기쁜 듯하다.',
            ]);
        }
        break;
      case 3:
        await era.printAndWait([
          maya.get_colored_name(),
          '하고 가게를 둘러보았다……',
        ]);
        if (Math.random() < 0.5) {
          await maya.say_and_wait(
            '와~ 귀여워~♪ 이건 너무 어른스럽나? 그래도 살짝 의외인 편이 더 귀엽지 않아?',
          );
          await maya.say_and_wait([
            '이럴 때는…… ',
            callname,
            '! 마야랑 같이 고민해 줘~!',
          ]);
          await maya.say_and_wait('지금 세일 중이래♪ 귀여운 옷 잔뜩 살 거야~♪');
          await maya.say_and_wait(
            '그, 그런데 고민돼~! 이번 달 용돈이 좀 빠듯해!',
          );
          await maya.say_and_wait(
            '이건 포인트가 되는 디자인에 최신 액세서리를 매치한 테크니컬 코디야!',
          );
          await maya.say_and_wait(
            '이건 귀여우면서도 움직이기 편해서 가게 언니가 실용성 만점이랬어!',
          );
          await maya.say_and_wait([
            '있지, ',
            callname,
            '! 어느 쪽이 마야한테 어울릴까~?',
          ]);
          era.printButton('「최신 기술이 들어간 코디!」', 1);
          era.printButton('「움직이기 편한 실용적인 코디!」', 2);
          if ((await era.input()) === 1) {
            await maya.say_and_wait(
              '그렇지~! 마야도 그렇게 생각했어! 유행의 선두를 달려야지♪',
            );
            await maya.say_and_wait('저기요, 점원 언니~!');
            await maya.say_and_wait([
              '마야, 어른 ',
              maya.phy_sex_title,
              '에 또 한 걸음 가까워졌어……!',
            ]);
          } else {
            await maya.say_and_wait(
              '맞아~! 움직이기 편하면 덜 피곤하고, 놀러 가서도 더 즐겁게 놀 수 있지♪',
            );
            await maya.say_and_wait('이걸로 정했어! 좋아, 사자♪');
            await maya.say_and_wait([
              '자, ',
              callname,
              ', 출발! 오늘 데이트는 아직 안 끝났어!',
            ]);
          }
        } else {
          await maya.say_and_wait(
            '와~ 과자 가게다! 마야, 먹어 보고 싶은 과자가 잔뜩 있어!',
          );
          era.printButton('「체중도 생각해서 하나만 사자.」', 1);
          await era.input();
          await maya.say_and_wait('으으…… 알았어…… 뭘로 하지~!?');
          await maya.say_and_wait(
            '계절 한정! 새로운 맛의 『자극 중독 당근칩』으로 할까~?',
          );
          await maya.say_and_wait(
            '아니면 마야가 강력 추천하는 필수 구매템 『엄청 달콤한 초콜릿』?',
          );
          await maya.say_and_wait([
            '으으~ 못 고르겠어~ ',
            callname,
            ', 마야 대신 골라 줘!',
          ]);
          era.printButton('「새로운 맛에 도전!」', 1);
          era.printButton('「필수 구매템이 최고지!」', 2);
          if ((await era.input()) === 1) {
            await maya.say_and_wait(
              '그렇지, 그렇지! 자극이 부족하면 안 되지♪ 매운 건 잘 못 먹지만 도전해 볼래!',
            );
            await era.printAndWait([
              '결국 ',
              maya.get_colored_name(),
              '은 매워서 얼굴이 새빨개지면서도 과자를 다 먹었다.',
            ]);
          } else {
            await maya.say_and_wait(
              '그렇구나~ 과자를 고를 땐 실패하지 않는 게 중요하지.',
            );
            await maya.say_and_wait(
              '싫어하는 맛이 나오면 속상하니까! 좋아, 이걸로 정했어!',
            );
            await maya.say_and_wait([
              '같이 나눠 먹자! ',
              callname,
              ', 아~————',
            ]);
            await era.printAndWait([
              '이름대로 ',
              maya.get_colored_name(),
              '이 고른 초콜릿은 무척 달았다.',
            ]);
          }
        }
    }
    return ret;
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   * @param {0|1|2} result おみくじの結果。数字が大きいほど好感の報酬が多い
   * @param {boolean} rm_debuff トレーニングdebuffを消すか
   */
  async out_church(maya, callname, result, rm_debuff) {
    await maya.say_and_wait([
      '여기는 인연을 점치는 제비뽑기가 유명하대♪',
      callname,
      ', 우리도 뽑자!——',
    ]);
    await maya.say_and_wait(
      '신에게 부탁하지 않아도 우린 잘 어울리지만🌟…… 그래도 두근거릴 것 같아!',
    );
    await era.printAndWait([
      maya.get_colored_name(),
      '의 바람대로 「인연 운세」를 뽑기로 했다.',
    ]);
    await maya.say_and_wait('뽑았어? 마야도 보여 줘!');
    switch (result) {
      case 0:
        await maya.say_and_wait('앞으로…… 진전이 있다고?');
        await maya.say_and_wait('어…… 마야가 노력한 게 하나도 안 전해진 거야?');
        break;
      case 1:
        await maya.say_and_wait('과…… 관계는 그럭저럭……!?');
        await maya.say_and_wait(
          '그럭저럭…… 그럭저럭…… 그럭저럭이…… 어느 정도인 거야……?',
        );
        break;
      case 2:
        await maya.say_and_wait(
          '……와!! 『뜨거운 사랑을 향해 일직선』!! 최고야~♪',
        );
        await maya.say_and_wait('에헤헤~~ 신도 인정해 준 거네~~~');
    }
    if (rm_debuff) {
      era.println();
      await era.printAndWait([
        maya.get_colored_name(),
        '의 트레이닝이 한층 순조로워지기 시작했다……',
      ]);
    }
  },
  /**
   * @param {CharaTalk} maya マヤノトップガン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname マヤノトップガンのプレイヤーへの呼び方
   */
  async out_station(maya, you, callname) {
    const buffer = [];
    era.print('역에서 무엇을 할까?');
    era.printButton('식사', 1);
    era.printButton('데이트', 2);
    era.printButton('영화', 3);
    const ret = await era.input();
    switch (ret) {
      case 1:
        await maya.say_and_wait([
          '데이트, 데이트🌟 ',
          callname,
          ', 어디로 갈까🎵',
        ]);
        buffer.push(
          async () => {
            await maya.say_and_wait('아와와와와와……');
            await maya.say_and_wait(
              '마야…… 마야는 어른이니까 다 먹을 수 있어!',
            );
            await era.printAndWait([
              maya.get_colored_name(),
              '하고 중국 요리를 먹었다. ',
              maya.sex,
              '는 매운 음식에 약하지만 전설의 마파두부에 도전했다……',
            ]);
          },
          async () => {
            await maya.say_and_wait([callname, ', 아~ 해 봐! 아……']);
            await era.printAndWait([
              maya.get_colored_name(),
              '하고 패밀리 레스토랑에 갔다. 평범한 메뉴로도 두 사람은 즐겁게 식사했다.',
            ]);
          },
          async () => {
            await maya.say_and_wait('이…… 이게 전설의 촛불 만찬!');
            await maya.say_and_wait(
              '마야, 오늘 드디어 어른의 계단을 오르는 거야?',
            );
            await era.printAndWait([
              maya.get_colored_name(),
              '하고 양식집에 갔다. 우아한 분위기에 ',
              maya.sex,
              '의 가슴은 아기 사슴처럼 두근거렸다.',
            ]);
          },
        );
        await get_random_entry(buffer)();
        break;
      case 2:
        if (Math.random() < 0.5) {
          await era.printAndWait([
            maya.get_colored_name(),
            '하고 역에서 만나기로 약속했다.',
          ]);
          await maya.say_and_wait([
            callname,
            ' 왔다, 왔어~! 그럼 같이 데이트하자♪',
          ]);
          await maya.say_and_wait(
            '있지, 이렇게 약속해서 만나는 거, 뭔가…… 커플 같지 않아?',
          );
          await maya.say_and_wait(
            '농담이야! 두근거렸어? 마야가 신경 쓰이기 시작했지?',
          );
          await maya.say_and_wait(
            '『어른의 매력으로 흔들기 작전』, 대성공이네🌟',
          );
          await era.printAndWait([
            '인정하기는 싫지만, ',
            you.get_colored_name(),
            '은(는) 정말로 ',
            maya.get_colored_name(),
            '한테 끌리는지도 모른다.',
          ]);
        } else {
          await era.printAndWait([
            maya.get_colored_name(),
            '하고 역 앞 대로를 걸었다.',
          ]);
          await maya.say_and_wait('와…… 오늘은 사람이 많네……');
          await maya.say_and_wait([callname, ', 서로 놓치지 않게 손잡자!']);
          await maya.say_and_wait('에헤헤…… 이렇게 손잡고 걸으니까 커플 같아♪');
          await era.printAndWait([
            '남들이 보기에는 어른이 아이를 데리고 걷는 것처럼 보일지도 모른다…… 어쨌든 ',
            maya.get_colored_name(),
            '이 즐겁다면 그걸로 됐다.',
          ]);
        }
        break;
      case 3:
        await era.printAndWait([
          maya.get_colored_name(),
          '하고 신작 영화를 보러 갔다.',
        ]);
        if (Math.random() < 0.5) {
          await maya.say_and_wait([callname, ' ', callname, '! 방금 봤어!']);
          await maya.say_and_wait('비행기야! 마야 아빠가 조종하고 있어!');
          await maya.say_and_wait('언젠가는 마야도 푸른 하늘을 날 거야🌟');
          await maya.say_and_wait([
            '그러니까 ',
            callname,
            ', 꼭 따라와 줘야 해!',
          ]);
          await era.printAndWait([
            '우연인지 마침 ',
            maya.get_colored_name(),
            '의 아버지가 출연하는 액션 영화를 보게 되어, ',
            maya.get_colored_name(),
            '은 무척 기뻐했다.',
          ]);
        } else {
          await maya.say_and_wait(
            '범인, 역시 저 사람이야! 마야는 처음부터 알았어!',
          );
          await maya.say_and_wait([
            '어때, 마야 똑똑하지♪ ',
            callname,
            ', 더 칭찬해도 돼!',
          ]);
          await era.printAndWait([
            maya.get_colored_name(),
            '은 결말을 맞혔지만 그래도 충분히 즐긴 듯하다?',
          ]);
        }
    }
    return ret;
  },
};
