/**
 * @file スマートファルコン - 日常
 * @author 黑奴一号
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

module.exports = {
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  good_morning(falcon, you, callname) {
    const buffer = [];
    if (era.get('base:46:体力') < era.get('maxbase:46:体力') / 3) {
      if (era.get('love:46') >= 75) {
        buffer.push(() => {
          falcon.say(`하아~ 아침엔 정말 졸리지.`);
          falcon.say('어제 라이브에서 그만 늦게까지 노래해 버렸어.');
          falcon.say(`오늘 트레이닝은 조금 늦춰도 될까?`);
          era.print([
            you.get_colored_name(),
            `은(는) 팔코의 동그란 머리를 자신의 허벅지에 눕혀 소파에서 조금이라도 편하게 잘 수 있도록 했다.`,
          ]);
        });
      } else {
        buffer.push(() => {
          falcon.say(
            `이 정도는 ${falcon.uma_sex_title} 아이돌 팔코에게 아무것도 아니야⭐`,
          );
          era.print([
            '말은 그렇게 해도 휘청이는 몸이 속마음을 드러내자 어쩔 수 없이 ',
            you.get_colored_name(),
            '은(는) ',
            falcon.sex,
            '를 소파에서 먼저 쉬게 했다.',
          ]);
        });
      }
    } else {
      buffer.push(
        () => {
          falcon.say(`${callname}, 팔코는 준비 완료야!`);
          era.print(`몸을 푸는 팔코는 컨디션이 무척 좋아 보인다.`);
        },
        () => {
          falcon.say(
            '더트를 달릴 때 묵직한 느낌은 귀여운 팔코랑 조금 안 어울릴지도……',
          );
          falcon.say(
            `강한 팔코도 귀엽다고? 역시 1호팬인 ${callname}답네! 평소 트레이닝에서도 팔코는 빛날 거야!`,
          );
          era.print(
            `고민을 털고 귀여운 미소를 되찾은 팔코는 다시 트레이닝에 열의를 불태웠다.`,
          );
        },
      );
      // 恋慕100の暗示
      if (era.get('love:46') === 100) {
        buffer.push(() => {
          falcon.say(`좋은 아침, 사랑해. 오늘은 뭐 할 거야?`);
          falcon.say(
            `아이돌이든, 그저 작은 ${falcon.uma_sex_title}든, ${callname}을(를) 만난 덕분에 붕 떠 있던 세상이 점점 실감 나기 시작했어.`,
          );
          era.print(
            `아침부터 기운 넘치는 ${falcon.name}가 ${you.name}에게 인사했다.`,
          );
        });
      } else if (era.get('love:46') >= 75) {
        buffer.push(() => {
          falcon.say(`${callname}, 좋은 아침⭐`);
          falcon.say(
            `${falcon.uma_sex_title} 아이돌 팔코, 오늘도 반짝반짝 힘낼게!`,
          );
          falcon.say(
            `그러니까 1호팬인 ${callname}도 열심히 하는 팔코를 잘 지켜봐 줘!`,
          );
          era.print(
            `팔코가 ${you.name} 주위에서 들뜬 모습으로 돌아다니자 주변의 시선이 모였다.`,
          );
        });
      } else if (era.get('love:46') >= 50) {
        buffer.push(
          () => {
            falcon.say(`플래시는 걸어 다니는 시간표 같아.`);
            falcon.say(
              `팔코도 ${falcon.sex}처럼 일을 척척 처리할 수 있으면 고민이 줄어들 텐데.`,
            );
            era.print(`트레이너실에서 팔코가 ${you.name}에게 말을 걸었다.`);
          },
          () => {
            falcon.say(`아이돌의 길은 늘 괴로움과 아픔으로 가득해.`);
            falcon.say('팔코도 가끔은 계속할 수 있을지 모르겠어.');
            era.print(
              `트레이너실에서 팔코와 잡담하던 중 ${falcon.sex}는 ${you.name}에게 고민을 털어놓았다.`,
            );
          },
        );
      } else {
        buffer.push(() => {
          falcon.say(`${callname}, 좋은 아침!`);
          falcon.say(
            `어젯밤엔 잘 잤어? 오늘도 빛나는 팔코를 보며 활짝 웃어 줘.`,
          );
          era.print(
            `트레센으로 가는 길에 ${falcon.name}와 우연히 만나 나란히 걷게 되었다.`,
          );
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   * @param {string} f_call_m スマートファルコンの駿川たづなへの呼び方
   */
  select(falcon, you, callname, f_call_m) {
    const buffer = [];
    if (era.get('base:46:体力') < era.get('maxbase:46:体力') / 3) {
      buffer.push(() => {
        falcon.say('으음, 조금 지쳤네.');
        falcon.say('기운 내야지! 팔코는 팬들의 기대에 응해야 하니까!');
        falcon.say('팔코, 힘낼게!');
        era.print([
          '억지로 기운을 짜낸 ',
          falcon.get_colored_name(),
          '가 조금 지친 얼굴로 ',
          you.get_colored_name(),
          '을(를) 본다.',
        ]);
      });
    } else {
      buffer.push(
        () => {
          falcon.say(`팔코는 바로 그런 ${falcon.uma_sex_title}야!`);
          falcon.say(`${callname}, 오늘 트레이닝 메뉴는 뭐야?`);
          era.print(
            `일찍 트레이너실에 온 ${falcon.name}가 ${you.name}의 지시를 기다리고 있다.`,
          );
        },
        () => {
          falcon.say(
            `……후우. 체력도 돌아왔으니 이제 팔코의 무대를 기다리는 팬들에게 보여 줘야지.`,
          );
          falcon.say(
            `……응? 아이돌 활동이 길어져 통금 시간을 못 맞출 것 같아서 이번 달에 ${callname}는 벌써 ${f_call_m}에게 세 번이나 혼났어.`,
          );
          falcon.say(`으음──그렇구나. 그럼 오늘 라이브는 시간을 잘 봐야겠네!`);
          era.print(
            `그 뒤 강변에서 연 게릴라 라이브는 또다시 통금 직전까지 이어졌다.`,
          );
        },
      );
      if (era.get('love:46') === 100) {
        buffer.push(() => {
          falcon.say(`${callname}을(를) 만나서 정말 다행이야!`);
          falcon.say(
            `팔코는 아직 아이돌이지만……아이돌이라면 1호팬에게 조금 특별한 선물을 줘도 되겠지?`,
          );
          falcon.say(
            `${falcon.uma_sex_title}아이돌이 되는 길, 그래도 1호팬인 ${you.adult_sex_title}와(과) 함께 힘내고 싶어.`,
          );
          era.print(
            `팔코는 ${you.name}이(가) 트레이너실에 들어오자마자 꼭 끌어안았다.`,
          );
        });
      } else if (era.get('love:46') >= 90) {
        buffer.push(() => {
          falcon.say(`응? ${callname}, 여긴 어떻게 알았어?`);
          falcon.say(
            `……물어볼 필요도 없나.${callname}이라면 분명 와 줄 테니까.`,
          );
          falcon.say(
            `……꿈꾸던 큰 무대에 벌써 손이 닿았는데 왜 팔코는 조금도 즐겁지 않을까?`,
          );
          era.print(
            `평소 활기찬 ${falcon.name}와는 딴사람처럼 팔코는 갈피를 잡지 못하고 있었다.`,
          );
        });
      } else if (era.get('love:46') >= 75) {
        buffer.push(() => {
          falcon.say(
            `요즘 길거리 라이브에 오는 팬이 늘었어. 팔코, 톱 아이돌도 머지않았을지 몰라.`,
          );
          falcon.say(`……그래도 ${callname}에게는 약한 소리 해도 되지?`);
          falcon.say(`……동작을 틀리면 팬들이 팔코에게 실망할까?`);
          era.print(`망설임과 괴로움.`);
        });
      } else if (era.get('love:46') >= 50) {
        buffer.push(
          () => {
            falcon.say(`${callname}！`);
            falcon.say(
              `팔코, 트레이너실에서 트레이너인 ${you.adult_sex_title}을(를) 기다렸어!`,
            );
            falcon.say(`오늘 트레이닝도 힘낼게!`);
            era.print(
              `생각나면 바로 행동하는 ${falcon.name}는 오늘도 ${you.name}이(가) 오기를 기다리고 있었다.`,
            );
          },
          () => {
            falcon.say(`오늘 흘린 땀은 내일 가장 빛나는 별이 될 거야.`);
            falcon.say(
              `무대 한가운데 서는 톱 아이돌이 되려면 팔코는 더 힘내야 해!`,
            );
            falcon.say(`좋아! 지금부터 트레이닝!`);
            era.print(
              `${falcon.name}는 트레이닝장에서 ${you.name}의 지시를 기다리고 있다.`,
            );
          },
        );
      } else {
        buffer.push(() => {
          falcon.say(`트레이닝 뒤 쉬는 시간엔 뭘 할까?`);
          falcon.say(
            `아이돌의 비결을 공부할까? 아니면 어제 배운 스텝부터 연습할까?`,
          );
          falcon.say(`어느 쪽이 좋을까? 으으~ 팔코가 둘로 나뉘면 좋을 텐데.`);
          era.print(
            `트레이닝 중에 한눈을 팔면 톱 ${falcon.uma_sex_title} 아이돌은 될 수 없다.`,
          );
        });
      }
    }
    get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   */
  select_after_recruit(falcon, you) {
    falcon.say(
      `하나, 둘, 노·려·라! TOP UMAIDOL(톱 ${falcon.uma_sex_title}돌)⭐`,
    );
    falcon.say(`가장 크고 가장 빛나는 무대 한가운데를 향해 단숨에 스퍼트♪`);
    falcon.say(`팔코는 그런 ${falcon.uma_sex_title}야!`);
    falcon.say(
      `지금은 아직 어디에나 있는 무명 아이돌. 그·래·도 팔코가 무대 한가운데 서면 관객들의 시선을 전부 사로잡을 수 있어!`,
    );
    falcon.say(`그러면 팔코 팬도 와아~ 하고 한꺼번에 늘어날 거야.`);
    falcon.say(
      `팬이 늘면 늘수록 팔코가 톱 ${falcon.uma_sex_title}돌이 된다는 목표도 단숨에 이뤄지는 거야!`,
    );
    falcon.say(`1호팬인 ${you.adult_sex_title}, 앞으로도 잘 부탁해⭐`);
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_study(falcon, callname) {
    const buffer = [];
    buffer.push(
      () =>
        falcon.say_and_wait(
          '으으, 팔코는 책 읽는 게 서툴러. 시험은 플래시가 준 요점 노트를 전날 벼락치기해서 겨우 통과하거든.',
        ),
      () =>
        falcon.say_and_wait(
          `${falcon.uma_sex_title}아이돌 역사가 시험 과목이면 팔코는 무조건 만점일 텐데! 왜 안 나올까?`,
        ),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `${callname}와(과) 이렇게 행복한 시간을 보내다니, 물거품 같은 꿈치고는 너무 호사스러운걸.`,
          ),
        () =>
          falcon.say_and_wait(
            `어! 아……아무것도 아니야⭐ 꺄! 그만……미안, 다음부턴 수학 교과서에 만화 안 끼워 놓을게!`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `${callname}이(가) 가르쳐 주면 가장 서툰 수학도 바닥은 벗어날 수 있을 것 같아⭐`,
          ),
        () =>
          falcon.say_and_wait(
            `전에는 늘 플래시가 가르쳐 줬는데 이제는 자기 트레이너에게 물어보래. 이상하지?`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_prepare(falcon, callname) {
    const buffer = [];
    buffer.push(
      () =>
        falcon.say_and_wait(
          `머리 모양 OK, 승부복 OK, 편자 모양도 문제없음! 준비는 전부 끝났어!`,
        ),
      () =>
        falcon.say_and_wait(
          `이제 팬들에게 더트의 톱 아이돌이 어떤 건지 보여 줄게!`,
        ),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `정말 정말 좋아하는 ${callname}이(가) 팔코가 출발해서 이길 때까지 매 순간을 꼭, 꼭 지켜봐 줬으면 해!`,
          ),
        () =>
          falcon.say_and_wait(
            `망설이고 헤맨 뒤에도 ${callname}이(가) 지지해 준 덕분에 가장 큰 무대에 섰어. 아이돌로서도 ${falcon.uma_sex_title}로서도 ${falcon.name}는 이~만큼(양팔을 벌려 커다란 하트를 그린다) 좋아해, ${callname}！`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `다음은 팔코가 잘하는 댄스야.${callname}, 팔코의 퍼포먼스 잘 지켜봐 줘!`,
          ),
        () =>
          falcon.say_and_wait(
            `레이스 준비는 아직 조금 긴장되네. 그래도 ${callname}이(가) 곁에 있어서 정말 다행이야!`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async talk(falcon, callname) {
    const buffer = [];
    if (era.get('cflag:46:育成回合计时') < 3 * 48) {
      switch (era.get('cflag:46:干劲')) {
        case -2:
          buffer.push(
            () =>
              falcon.say_and_wait(
                `으──머리가 어지러워. 아니야! 정신 차려야지, 팔코 힘내자!`,
              ),
            () =>
              falcon.say_and_wait(
                `이제 혼자 이렇게 외롭게 있고 싶지 않아……아, 아무것도 아니야! 팔코 힘낼게!`,
              ),
          );
          break;
        case -1:
          buffer.push(
            () =>
              falcon.say_and_wait(
                `팔코 얼굴에 뭐 묻었어? 응? 안색이 안 좋다고?`,
              ),
            () =>
              falcon.say_and_wait(
                `오늘은 컨디션이 별로야. 세상이 빙글빙글 도는 것 같아. 어! ${callname}, 언제 왔어?`,
              ),
          );
          break;
        case 0:
          buffer.push(() =>
            falcon.say_and_wait(`${callname}, 팔코 머리 장식이 궁금해?`),
          );
          break;
        case 1:
          buffer.push(
            () => falcon.say_and_wait(`오늘은 왠지 기분이 좋네♪`),
            () =>
              falcon.say_and_wait(
                `톱 아이돌이 되기로 했으니까 더트에서도 앞으로 나아갈 거야!`,
              ),
            () =>
              falcon.say_and_wait(
                `아이돌의 무대 퍼포먼스는 레이스보다 과할 정도여야겠지. 골드 시티에게 물어볼……까?`,
              ),
          );
          break;
        case 2:
          buffer.push(
            () =>
              falcon.say_and_wait(
                `최강의 ${falcon.uma_sex_title} 아이돌──${falcon.name}, 등장♪ 오늘이야말로 이 마음을 ${callname}에게 전할게⭐`,
              ),
            () =>
              falcon.say_and_wait(
                `${callname}, 귀여운 ${falcon.name}를 쫓아오지 않을래? 도망 안 갈게❤️`,
              ),
            () =>
              falcon.say_and_wait(
                `지평선 너머엔 뭐가 있을까~ 물론 팔코의 큰 무대지! 같이 팔코 무대를 보러 가지 않을래?`,
              ),
          );
      }
    }
    if (era.get('flag:当前月') >= 3 && era.get('flag:当前月') <= 5) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `만물이 싹트는 계절은 지금 팔코와 딱 맞아! 봄의 팔코도 쑥쑥 자랄 거야!`,
          ),
        () =>
          falcon.say_and_wait(
            '흙을 뚫고 돋아나는 작은 풀을 보면 팔코는 왠지 엄청 감동해!',
          ),
      );
    }
    if (era.get('flag:当前月') >= 6 && era.get('flag:当前月') <= 8) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `여름 하면 해변이지. 부드러운 바닷바람이 더위를 식혀 주고 파도의 촉촉한 냄새가 가슴을 두근거리게 해. 빨리 모래사장으로 뛰어들고 싶어!`,
          ),
        () =>
          falcon.say_and_wait(
            `여름에는 팔코가 모두에게 시원함과 즐거움을 전하는 라이브야! 여름 합숙 때 해변에서 공연하면 더 주목받을 거야!`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 9 && era.get('flag:当前月') <= 11) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `예술의 가을, 식욕의 가을……그리고 ${falcon.uma_sex_title} 아이돌의 가을⭐ 단풍 아래에서 라이브 하자!`,
          ),
        () =>
          falcon.say_and_wait(
            `${callname}, 같이 단풍 보러 가지 않을래? 가을은 다들 생각에 잠기는 계절이라지만……팔코는 모두를 웃게 할 거야!`,
          ),
      );
    }
    if (era.get('flag:当前月') >= 12 || era.get('flag:当前月') <= 2) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `겨울에는 팬들도 추위에 떨고 있겠지……그러니까 ${falcon.uma_sex_title} 아이돌 팔코가 겨울에게 빼앗긴 따뜻함을 팬들의 손에 돌려줄게! 지금 라이브 하러 가자!`,
          ),
        () =>
          falcon.say_and_wait(
            `겨울에는 따뜻한 코타츠에 앉아 귤을 먹으며 TV 예능을 보는 게 어울려. 그렇게 봄을 기다리는 거야.`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_gift(falcon, you, callname) {
    const buffer = [];
    buffer.push(
      () => falcon.say_and_wait(`이거 팔코에게 주는 거야? 고마워!`),
      () =>
        falcon.say_and_wait(
          `팬에게 선물을 받았으니까, 음──자, 팔코가 직접 만든 악수권이야!`,
        ),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `${you.actual_name}이(가) 준 선물보다 ${you.actual_name}의 다정함이 가슴에 와닿아. 그러니까 앞으로도 ${callname}와(과) 함께 지내고 싶어.`,
          ),
        () =>
          falcon.say_and_wait(
            `이 선물에서 ${you.actual_name}의 온 마음을 다한 사랑과 영혼의 무게가 전해졌어. 그러니까 팔코도 ${falcon.name}로서, ${falcon.uma_sex_title} 아이돌로서 온 마음과 영혼을 1호팬인 ${you.adult_sex_title}에게 줄게. 사랑해, ${callname}！`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `어! 1호팬인 ${you.adult_sex_title}에게 받은 선물! 팔코도 답례를 생각해야겠어!`,
          ),
        () =>
          falcon.say_and_wait(
            `사랑하는 1호팬의 선물이니까 팔코가 소중히 해야지~ 음, 쪽❤️ 답례는 이걸로 될까?`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_cook(falcon, you, callname) {
    const buffer = [];
    buffer.push(
      () =>
        falcon.say_and_wait(
          '레시피대로 만드는 것보다 팔코는 다른 방법도 시도하고 싶어. 자주 실패하지만……',
        ),
      () =>
        falcon.say_and_wait(
          `아이돌이 자신을 좋아하는 1호팬인 ${you.adult_sex_title}을(를) 위해 주방에 서는 건 팔코도 신선하게 느껴져.`,
        ),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `팔코에게는 늘 자신을 아껴 주는 사람을 위해 요리하는 게 세상에서 가장 행복한 일이야.`,
          ),
        () =>
          falcon.say_and_wait(
            `${falcon.name}를 정말 이해해 주는 사랑하는 ${callname}을(를) 위해서라면 몇 번이든 사랑을 듬뿍 담아 요리할게! 자, ${callname}, 입 벌려 봐, 아──`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `엄마의 요리 노트, 오늘은 팔코가 만들 차례야. 1호팬에게 엄청 맛있는 오므라이스를 만들어 줄게❤️`,
          ),
        () =>
          falcon.say_and_wait(
            `자──맛은 어때……정말? 야호! 팔코는 늘 서툴지만 ${callname}이(가) 기뻐해서 정말 다행이야!`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_rest(falcon, callname) {
    const buffer = [];
    buffer.push(
      () =>
        falcon.say_and_wait(
          `아이돌에게는 휴식도 중요해! 그러니까 ${callname}도 제대로 쉬어!`,
        ),
      () => falcon.say_and_wait(`가끔 골드 시티가 부러워. 아이돌로서 말이야.`),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `계속 이사를 다닌 팔코에게 고향이란 정말 먼 말이야.`,
          ),
        () =>
          falcon.say_and_wait(
            `어릴 때 자주 이사해서 친구도 적었고 조금 내성적이었어……길거리 라이브를 하는 아이돌을 만난 뒤로 조금씩 밝아질 수 있었지.`,
          ),
        () =>
          falcon.say_and_wait(
            `팔코의 반짝반짝 빛나는 세상에서 ${callname}은(는) 가장 빛나고 가장 소중한 보석이야. 그러니까 ${callname}, 인생길을 늘 함께 걸어 줄래?`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `${callname} 무릎에 앉아도 돼? ${callname}, 좋은 냄새가 나♪`,
          ),
        () =>
          falcon.say_and_wait(
            `팔코는 플래시에게 자주 잔소리를 듣거든~ 그래도 ${callname}이(가) 공부를 봐 주기 시작한 뒤로 플래시도 조금 안심한 것 같아.`,
          ),
        () =>
          falcon.say_and_wait(
            `팔코는 밤에 주로 아이돌 영상을 보고 인기 아이돌을 따라 꾸미곤 해.`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async office_game(falcon, callname) {
    const buffer = [];
    buffer.push(
      () =>
        falcon.say_and_wait(
          `팔코는 게임을 잘 못해……하지만 리듬 게임은 예외야⭐`,
        ),
      () =>
        falcon.say_and_wait(
          `그러고 보니 요즘 스트리머가 정말 인기네……응? ${callname}, 팔코도 방송했으면 좋겠어?`,
        ),
      () => falcon.say_and_wait(`그럼 유행에 안 올라탈 수 없지!`),
    );
    if (era.get('love:46') === 100) {
      buffer.push(
        () => falcon.say_and_wait(`에헤헤⭐……${callname}의 냄새, 좋네♪`),
        () =>
          falcon.say_and_wait(
            `연인끼리 하는 게임이라면, 음……오버쿡드 해 볼까?`,
          ),
        () =>
          falcon.say_and_wait(
            `매일 15분씩만 ${callname}와(과) 게임하는 모습을 방송해도 좋겠네. 그렇게 하자!`,
          ),
      );
    } else if (era.get('love:46') >= 75) {
      buffer.push(
        () =>
          falcon.say_and_wait(
            `팔코는 신나는 리듬에 맞춰 화면 두드리는 게임은 잘하거든……어, ${callname}, 휴대폰 들고 영상 찍고 있어?`,
          ),
        () =>
          falcon.say_and_wait(
            `그러고 보니 미소녀 게임은 텍스트 어드벤처로도 역사가 길지.${callname}도 관심 있어?`,
          ),
        () =>
          falcon.say_and_wait(
            `길거리 라이브로 쌓은 경험 덕분에 방송 시청자도 계속 늘고 있어!`,
          ),
        () =>
          falcon.say_and_wait(
            `온라인이든 오프라인이든 톱 아이돌 팔코는 팬들을 똑같이 대할 거야!`,
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} falcon スマートファルコン */
  async s_a_tree_hollow(falcon) {
    const buffer = [
      () => falcon.say_and_wait(`수학 너무 어려워! 또 보충 수업이야!`),
      () =>
        falcon.say_and_wait(
          `저 둔감한 트레이너는 왜 아직도 팔코의 신호를 모르는 거야!!!`,
        ),
      async () => {
        await falcon.say_and_wait(
          `……친구도 많이 생겼고 내 트레이너도 생겼는데.`,
        );
        await falcon.say_and_wait(`왜 가끔은 아직 무서울까?`);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async s_a_dating(falcon, callname) {
    const buffer = [
      () =>
        falcon.say_and_wait(
          `${falcon.name}식 첫 번째 원칙, 팬을 기다리게 하는 아이돌은 실격! 다음 목적지는?`,
        ),
      () =>
        falcon.say_and_wait(
          `맛은 어때, ${callname}? 오늘 데이트를 위해 가정 시간에 연습한 ${falcon.name}의 사랑 가득한 도시락이야! 듬뿍 담은 사랑이 전해졌어?`,
        ),
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async school_rooftop(falcon, callname) {
    const buffer = [
      async () => {
        await falcon.say_and_wait(
          `옥상에서 바람을 느끼니까……갑자기 노래하고 싶어졌어⭐`,
        );
        await falcon.say_and_wait(`이따 우마터에 올려야지♪`);
      },
      async () => {
        await era.printAndWait(
          [
            falcon.get_colored_name(),
            '「만약 언젠가 팬과 ',
            callname,
            ' 중에서 골라야 한다면……」',
          ],
          { color: falcon.color, fontSize: '0.75rem' },
        );
        await falcon.say_and_wait(`……팔코, 지금 아무 말도 안 했어⭐`);
      },
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} falcon スマートファルコン */
  async o_r_fishing(falcon) {
    const buffer = [
      async () => {
        await falcon.say_and_wait(`……! 대단해──이렇게 큰 물고기도 잡히는구나.`);
        await era.printAndWait(
          `옆에 앉은 팔코는 양동이에서 퍼덕이는 붕어를 처음부터 끝까지 지켜봤다.`,
        );
      },
      async () => {
        await falcon.say_and_wait(
          `초반에 선두를 다툴 때처럼 게이트가 열리는 순간을 차분히 기다리는 거야.`,
        );
        await falcon.say_and_wait(`그리고──이렇게!`);
        await era.printAndWait(
          `미끼를 문 욕심쟁이 물고기가 엄청난 힘에 수면 위로 끌려 올라와 양동이로 툭 떨어졌다.`,
        );
        await falcon.say_and_wait(`이게 팔코식 낚시야!`);
      },
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} falcon スマートファルコン */
  async o_r_walking(falcon) {
    const buffer = [
      async () => {
        await falcon.say_and_wait(
          `강변 잔디에서 라이브 하게 해 주는 데 대한 보답이야.`,
        );
        await falcon.say_and_wait(
          `팔코는 쉴 때 가끔 고가교 밑에서 봉사 활동을 하거든.`,
        );
      },
      async () => {
        await falcon.say_and_wait(
          `그러고 보니 도주 우마 자매들은 지금 뭘 하고 있을까?`,
        );
        await falcon.say_and_wait(`팔코, 궁금해!`);
      },
      async () => {
        await falcon.say_and_wait(
          `마루젠 선배는 실력도 있고 친절하게 가르쳐 주는데 어딘가 미묘하게 안 맞는 느낌이야.`,
        );
        await falcon.say_and_wait(
          `팔코가 마루젠 선배 입장이라면……으음, 팔코의 작은 머리로는 그런 부담을 감당 못 해.`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async o_s_arcade(falcon, you, callname) {
    const buffer = [
      async () => {
        await falcon.say_and_wait(
          `${callname}, 팔코가 활약하는 모습 잘 봐 줘!`,
        );
        await falcon.say_and_wait(`새로운 일도 전력을 다할게. 팔코, 힘낼게♪`);
        await era.printAndWait(
          `올 퍼펙트를 낸 ${falcon.name}와 간신히 완주한 자신을 보며 ${you.name}은(는) 말이 없어졌다.`,
        );
      },
      async () => {
        await falcon.say_and_wait(
          `이 기록을 깨면 더 많은 사람이 팔코를 알게 될지도 몰라!`,
        );
        await era.printAndWait(
          `신기록 앞에서 ${falcon.name}는 엉뚱한 데서 승부욕에 불이 붙었다.`,
        );
      },
      async () => {
        await falcon.say_and_wait(`……해냈다! ${callname}！`);
        await era.printAndWait(
          `인형 뽑기를 긴장하며 지켜보던 ${falcon.name}는 숨을 죽이다 인형을 잡고 나서야 환호하며 어깨에 힘을 풀었다.`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   * @param {boolean} hot_spring 温泉旅行券を引いたか
   */
  async o_s_drawing(falcon, you, callname, hot_spring) {
    // 商店街のイベントでスマートファルコンが抽選券を一枚もらった
    // プレイヤーが自分で引くか、スマートファルコンに引かせるかを決める
    await you.say_as_passer_by_and_wait(
      `잡화점 주인`,
      `어디 보자……포스터에 전단지, 음……이번에는 빈 그림엽서도 더 샀구나.`,
    );
    await you.say_as_passer_by_and_wait(
      `잡화점 주인`,
      `다 됐어. 조심해서 가렴.`,
    );
    await falcon.say_and_wait(`네⭐`);
    await you.say_as_passer_by_and_wait(
      `잡화점 주인`,
      `아, 맞다. 덤으로 주는 추첨권이야.`,
    );
    await era.printAndWait(
      `가게 주인은 웃으며 ${falcon.name}에게 추첨권 한 장을 건넸다.`,
    );
    await you.say_as_passer_by_and_wait(
      `잡화점 주인`,
      `들어온 입구 쪽에서 그 할아버지를 찾아 이 표를 드리면 돼.`,
    );
    await falcon.say_and_wait(`감사합니다. 오늘은 팔코의 행운의 날인가 봐⭐`);
    await you.say_as_passer_by_and_wait(
      `잡화점 주인`,
      `행운의 별 ${falcon.adult_sex_title}, 다음에도 기운차게 와. 조심해서 가고.`,
    );
    await falcon.say_and_wait(`다음에도 인쇄랑 작은 경품 잘 부탁해요⭐`);
    await era.printAndWait(
      `기념품을 잔뜩 안고 ${falcon.name}가 종종걸음으로 ${you.name} 곁에 왔다.`,
    );
    await falcon.say_and_wait(`${callname}, 다음에 사고 싶은 거 있어?`);
    await era.printAndWait(
      `${you.name}은(는) 고개를 젓고 ${falcon.name}가 꼭 쥔 추첨권을 보았다.`,
    );
    await falcon.say_and_wait(`……그럼 ${callname}에게 뽑아 달라고 하자!`);
    await era.printAndWait(`팔코는 ${you.name}을(를) 추첨기 옆으로 밀었다.`);
    era.printButton(`그렇다면 `, 1);
    await era.input();
    if (hot_spring) {
      await you.say_as_passer_by_and_wait(
        `가게 주인`,
        `특등상, 온천 여행권! 축하해!`,
      );
      await era.printAndWait(
        `추첨기에서 떨어진 분홍색 공을 집어 든 주인은 몇 번이나 확인하고 큰 소리로 결과를 외쳤다.`,
      );
      await era.printAndWait(`딸랑딸랑`);
      await falcon.say_and_wait(`어……`);
      await falcon.say_and_wait(`역시 오늘은 팔코의 행운의 날이네!`);
      era.printButton(`어? 정말 당첨됐어?`, 1);
      await era.input();
      await you.say_as_passer_by_and_wait(
        `가게 주인`,
        `이 온천 여행권에는 사용 기한이 없으니 잘 간직해.`,
      );
      await era.printAndWait(`주인은 활짝 웃으며 두 사람에게 여행권을 건넸다.`);
      await falcon.say_and_wait(`이건 언제 쓰면 좋을까?`);
      era.printButton(`세 번째 해가 끝나고 쓰자!`, 1);
      await era.input();
      await falcon.say_and_wait(
        `${callname}이(가) 그렇게 말한다면 ${callname}에게 맡길게.`,
      );
      await falcon.say_and_wait(`꼭 소중히 간직해야 해!`);
      await era.printAndWait(
        `트레이너실로 돌아와 ${falcon.name}가 지켜보는 가운데 ${you.name}은(는) 온천 여행권을 서랍 깊숙이 넣었다.`,
      );
    } else {
      const buffer = [
        async () => {
          await you.say_as_passer_by_and_wait(`가게 주인`, `사등상, 휴지!`);
          await era.printAndWait(
            `추첨기에서 떨어진 흰 공을 보고 주인은 손에 든 종을 울렸다.`,
          );
          await falcon.say_and_wait(
            `……휴지구나. 괜찮아! 팔코의 미소를 보고 기운 내자!`,
          );
          await era.printAndWait(
            `팔코는 열심히 분위기를 띄우려 했지만 휴지라니 역시 맥이 빠졌다.`,
          );
        },
        async () => {
          await you.say_as_passer_by_and_wait(
            `가게 주인`,
            `삼등상, 당근 한 개!`,
          );
          await era.printAndWait(
            `추첨기에서 떨어진 노란 공을 흘끗 보고 주인은 손에 든 종을 울렸다.`,
          );
          await falcon.say_and_wait(`음……이 당근, 마이크로 딱일지도.`);
          await era.printAndWait(
            `${falcon.name}는 쇼핑백에서 스티커를 꺼내 당근에 붙였다.`,
          );
          await falcon.say_and_wait(
            `내일 무대도 잘 부탁해~ 당근 ${you.adult_sex_title}！`,
          );
          era.printButton(`먹을 걸로 장난치지 마!`, 1);
          await era.input();
          await falcon.say_and_wait(`으음──팔코는 귀엽다고 생각했는데.`);
          await era.printAndWait(
            `오늘 저녁 반찬이 될 때까지 당근은 가느다란 끈으로 ${falcon.name}의 허리에 묶여 있었다.`,
          );
        },
        async () => {
          await you.say_as_passer_by_and_wait(
            `가게 주인`,
            `이등상, 당근 한가득!`,
          );
          await era.printAndWait(
            `추첨기에서 떨어진 당근색 공을 흘끗 보고 주인은 손에 든 종을 울렸다.`,
          );
          await era.printAndWait(
            `${you.name}은(는) 주인에게 당근 상자를 받고 어떻게 가져갈지 고민했다. 그때.`,
          );
          await era.printAndWait(`작은 손이 골칫거리를 가볍게 들어 올렸다.`);
          await falcon.say_and_wait(`와……당근이 생각보다 많네. 보름은 먹겠어.`);
          await falcon.say_and_wait(`다음 라이브에 오는 팬들에게 선물하자!`);
          era.printButton(
            `당근을 세워 가상 관객으로 삼고 아이돌 연습을 하자!`,
            1,
          );
          await era.input();
          await falcon.say_and_wait(
            `응? 가상 연습? 역시 ${callname}네. 그럼 그렇게 하자.`,
          );
          await era.printAndWait(`그날 밤`);
          era.println();
          await falcon.say_and_wait(
            `도주해도 계속 반짝이는 ${falcon.uma_sex_title} 아이돌──${falcon.name}, 등장♪`,
          );
          await you.say_as_passer_by_and_wait(
            `${you.name}와(과) 세워 놓은 당근들`,
            `오오오오오!`,
          );
          await falcon.say_and_wait(
            `응, 응! 팔코, 모두의 열기를 받았어! 그럼 Let’s go!`,
          );
          await you.say_as_passer_by_and_wait(
            `${you.name}와(과) 세워 놓은 당근들`,
            `(응원봉을 필사적으로 흔든다)`,
          );
          await falcon.say_and_wait(
            `……이렇게 뜨거울 줄 몰랐어. 팔코, 감동해서 울 것 같아……좋아! 팬들의 기대에 응해서 팔코의 진심을 보여 줄게!`,
          );
          await era.printAndWait(
            `얼마 뒤 한밤중 트레이너실에서 당근이 ${falcon.uma_sex_title}가 되어 라이브를 한다는 괴담이 학원에 퍼졌다.`,
          );
        },
        async () => {
          await you.say_as_passer_by_and_wait(
            `가게 주인`,
            `일등상, 당근 버거!`,
          );
          await era.printAndWait(
            `추첨기에서 떨어진 빨간 공을 조심스레 집어 들고 주인은 손에 든 종을 울렸다.`,
          );
          await falcon.say_and_wait(`어? 당근 버거……맛있겠다!`);
          await falcon.say_and_wait(`운이 좋네!`);
          await falcon.say_and_wait(`먼저 우마터에 올리자!`);
          await era.printAndWait(
            `#상점가_일등상_경품이_당근_버거?! #트레이너와_나눈_이야기 가 곧바로 실시간 인기 검색어를 차지했다.`,
          );
          await era.printAndWait(
            `그 뒤 트레이너까지 함께 찍힌 탓에 큰 소동이 벌어져 타즈나에게 불려 가 한바탕 잔소리를 들었다.`,
          );
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async o_s_ktv(falcon, you, callname) {
    await falcon.say_and_wait(
      `${callname}, 뭐 듣고 싶어? 여기 노래는 팔코가 전부 부를 수 있어⭐`,
    );
    await era.printAndWait(
      `흥이 오른 팔코를 보며 ${you.name}도 말없이 야광봉을 들었다.`,
    );
  },
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   * @param {string} callname スマートファルコンのプレイヤーへの呼び方
   */
  async o_s_movie(falcon, you, callname) {
    const buffer = [];
    buffer.push(
      async () => {
        await falcon.say_and_wait(
          `『아이돌의 고민』, ${callname}, 이거 같이 보자.`,
        );
        await era.printAndWait(
          `남성 아이돌이 평범한 ${falcon.uma_sex_title}를 좋아하게 되어 몇 번이나 신호를 보내지만 ${falcon.uma_sex_title}는 꿈쩍도 하지 않는다. 남자 배우가 포기하려 할 때 ${falcon.uma_sex_title} 쪽에서 먼저 고백한다.`,
        );
      },
      async () => {
        await falcon.say_and_wait(
          `『열혈! 아이돌 분투기!』, 재미있겠다! ${callname}, 같이 볼래?`,
        );
        await era.printAndWait(
          `무명 아이돌로 홀로 지내던 남자 배우가 다정한 ${falcon.uma_sex_title}의 보살핌으로 용기를 되찾고, 이야기의 마지막에 말없이 지지해 주던 그 ${falcon.uma_sex_title}에게 고백한다.`,
        );
      },
      async () => {
        await falcon.say_and_wait(
          `『백옥의 시』……가끔은 취향을 바꿔 보는 것도 좋네⭐`,
        );
        await era.printAndWait(
          `행복하게 살던 ${falcon.uma_sex_title}가 몰락한 외로운 시인에게 첫눈에 반해 적극적으로 다가간다. 두 사람은 불안정한 운명에 휘둘리며 떠돌아다닌다. 절정에서 소중한 원고를 잃고 절망한 시인이 거처에 불을 지르지만 ${falcon.uma_sex_title}가 구해 낸다.`,
        );
        await era.printAndWait(
          `생사의 경계에서 마침내 살아갈 용기를 얻은 시인과 ${falcon.uma_sex_title}가 서로를 꼭 끌어안는다.`,
        );
      },
    );
    if (era.get('love:46') === 100) {
      buffer.push(async () => {
        await falcon.say_and_wait(
          `『벚꽃은 쉬이 지고, 오늘 밤 그대를 기다리네』, ${callname}, 이 영화 볼래?`,
        );
        await era.printAndWait(
          `${you.actual_name}와 ${falcon.name}는 영화에 관해 열띤 이야기를 나누며 서로의 손을 꼭 잡고 있었다.`,
        );
      });
    } else if (era.get('love:46') >= 50) {
      buffer.push(
        async () => {
          await falcon.say_and_wait(
            `『도화월담』, 유명하대. ${callname}, 같이 볼래?`,
          );
          await era.printAndWait(
            `뜻밖에 우아한 분위기와 남녀의 사랑 이야기에 두 사람은 손수건으로 눈물을 닦았다.`,
          );
        },
        async () => {
          await falcon.say_and_wait(
            `팔코는 사실 어떤 영화든 좋아. ${callname}와(과) 함께라면.`,
          );
          await era.printAndWait(
            `${falcon.name}는 눈을 반짝이며 ${you.name}을(를) 보고 있다.`,
          );
        },
      );
    }
    await get_random_entry(buffer)();
  },
  church_idol: (() => {
    const title = '무녀 아르바이트';
    /**
     * @param {CharaTalk} falcon スマートファルコン
     * @param {CharaTalk} darley ダーレーアラビアン
     * @param {CharaTalk} godolphin ゴドルフィンバルブ
     * @param {CharaTalk} byerley バイヤーズターク
     * @param {CharaTalk} you プレイヤー
     * @param {string} callname スマートファルコンのプレイヤーへの呼び方
     */
    const f = async (falcon, darley, godolphin, byerley, you, callname) => {
      // 伝えられるところでは、三女神がこの地に降りたとき、ここの清水を啜った。それで山あいの小川は祝福を受けた
      // 古代の人々はその小川を囲んで神社を建て、参拝する人は事業や恋の成就を祈った
      // 宣伝するなら、なぜファル子はボランティアや巫女のバイトをしないのか？
      // こういう場所で活躍すれば、スマートファルコンの印象に残る人は多いはず
      darley.name = '다정한 여신';
      godolphin.name = '지혜의 여신';
      byerley.name = '엄숙한 여신';
      await era.printAndWait(`쉬는 날 오전.`);
      await era.printAndWait(
        `스스로 신사 봉사 활동을 신청한 ${falcon.name}가 ${you.name}의 손을 잡고 신사로 왔다.`,
      );
      await falcon.say_and_wait(`좋은 아침⭐`);
      await falcon.say_and_wait(
        `──도주해도 반짝반짝 귀여운 ${falcon.uma_sex_title}, 팔코♪ 신사의 초청을 받아 자원봉사자로서 뒤에 있는 명소를 소개할게요.`,
      );
      await era.printAndWait(
        `무녀복을 입은 일일 자원봉사자 ${falcon.name}가 손에 든 고헤이를 흔든다.`,
      );
      await falcon.say_and_wait(
        `그리고! 팔코는 매일 아침 강변 잔디에서 라이브를 하니까 응원 부탁해요♪`,
      );
      await era.printAndWait(
        `그렇게 말하며 ${falcon.name}는 팔을 크게 흔들었다. 손에 든 고헤이가 허공에 은빛 선을 그었다.`,
      );
      await you.say_as_passer_by_and_wait(
        `관광객 A`,
        `자원봉사자 ${falcon.adult_sex_title}, 여기 처음 왔는데 신사의 유래를 알려 주시겠어요?`,
      );
      await falcon.say_and_wait(
        `──맞아! 아이돌이라면 팬의 기대에 제대로 응해야지!`,
      );
      await falcon.say_and_wait(`팔코가 최선을 다해 대답할게요, ${callname}！`);
      await era.printAndWait(
        `갑작스러운 활기찬 목소리에 처음 온 관광객은 조금 놀란 듯했지만, 더 많은 사람이 호기심에 다가왔다.`,
      );
      await falcon.say_and_wait(
        `옛날 옛날에 이 시냇물은 지금보다 훨씬 컸어요.`,
      );
      await falcon.say_and_wait(
        `어느 날, 온 세상에 ${falcon.uma_sex_title}를 탄생시키기 위해 계속 걸어 다니던 삼여신이 이곳에 와서 ${falcon.couple_title}는 목이 말라 시냇가로 다가갔어요.`,
      );
      await falcon.say_and_wait(
        `이 시냇물에서 태어난 신이 ${falcon.couple_title}를 정중히 맞이했죠.`,
      );
      await falcon.say_and_wait(
        `진심 어린 환대에 만족한 삼여신은 시냇물의 신에게 제안했어요.`,
      );
      await you.say_as_passer_by_and_wait(
        `삼여신`,
        `우리는 ${callname}의 따뜻한 대접을 받았습니다. 부디 축복을 받아 주세요.`,
      );
      await falcon.say_and_wait(
        `하지만 신은 ${falcon.couple_title}의 호의를 사양했어요.`,
      );
      await you.say_as_passer_by_and_wait(
        `시냇물의 신`,
        `여신의 축복은 과분합니다. 부디 그 축복을 이 시냇물과 함께 살아가는 생명들에게 내려 주세요.`,
      );
      await you.say_as_passer_by_and_wait(
        `시냇물의 신`,
        `그 아이들이 저보다 훨씬 소중합니다.`,
      );
      await falcon.say_and_wait(
        `신의 무욕함에 감동한 삼여신은 소원을 들어주어 축복을 시냇물로 옮겼어요.`,
      );
      await falcon.say_and_wait(
        `그 뒤 이 시냇물을 마신 생명들은 삼여신의 축복을 받게 되었답니다.`,
      );
      await falcon.say_and_wait(
        `사심 없는 이 신을 기리며 옛사람들이 시냇물을 둘러싸고 신사를 지었어요. 환경이 변해 지금은 연못만큼 줄었지만요.`,
      );
      await falcon.say_and_wait(
        `그래도 지금도 일과 행복을 비는 사람들의 발길은 끊이지 않아요.`,
      );
      await falcon.say_and_wait(`이상, 이 신사의 유래였습니다.`);
      await you.say_as_passer_by_and_wait(`관광객 A`, `좋아, 한 번 더!`);
      await you.say_as_passer_by_and_wait(`관광객 B`, `역시 그렇지?`);
      await you.say_as_passer_by_and_wait(`관광객 C`, `말할 것도 없지!`);
      await era.printAndWait(
        `이야기에 빠져든 관광객들이 어느새 팔코를 빽빽하게 에워쌌다.`,
      );
      await falcon.say_and_wait(
        `여러분……이렇게 뜨겁다니! 팔코도 모두의 열정을 받았어요!`,
      );
      await falcon.say_and_wait(`그럼! ${falcon.name}의 게릴라 라이브──`);
      era.printButton(`크흠.`, 1);
      await era.input();
      await falcon.say_and_wait(`응? ${callname}？`);
      await era.printAndWait(
        `갑자기 제지당한 ${falcon.name}가 놀라서 ${you.name}을(를) 본다.`,
      );
      era.printButton(`여기 온 목적을 잊지 마!`, 1);
      await era.input();
      await falcon.say_and_wait(
        `──맞다! 팔코는 매일 아침 강변에서 게릴라 라이브를 하니까 응원 부탁해요♪`,
      );
      era.printButton(`팔코!`, 1);
      await era.input();
      await falcon.say_and_wait(`에이──`);
      await you.say_and_wait(
        `실례합니다. 신사는 이 귀여운 ${falcon.uma_sex_title} 바로 뒤에 있습니다. 지금 안 가시면 앞줄이 더 길어질 거예요.`,
      );
      await you.say_as_passer_by_and_wait(
        `관광객 D`,
        `그렇지! 빨리 줄 서지 않으면 더 오래 기다려야겠어!`,
      );
      await falcon.say_and_wait(`팔코의 안내를 따라와 주세요──`);
      await era.printAndWait(
        `모여든 관광객들은 ${you.name}와(과) ${falcon.name}의 안내를 따라 길게 줄을 섰다.`,
      );
      await era.printAndWait(`잠시 후`);
      era.println();
      await you.say_as_passer_by_and_wait(
        `신관`,
        `${falcon.name}, 그리고 트레이너님, 수고하셨습니다.`,
      );
      await falcon.say_and_wait(`팔코는 정말 즐거웠어요⭐`);
      await you.say_as_passer_by_and_wait(
        `신관`,
        `봉사해 주신 보답으로, 그렇군요──`,
      );
      await era.printAndWait(
        `잠시 준비한 뒤 그는 삼여신상에 기도하기 시작했다.`,
      );
      await you.say_as_passer_by_and_wait(
        `신관`,
        `아름답고 자비로운 삼여신이여, 종인 저의 말을 들어 주소서.`,
      );
      await era.printAndWait(
        `신관이 삼여신에게 기도하는 동안 두 사람은 곁에서 조용히 답을 기다렸다.`,
      );
      if (era.get('love:46') >= 75) {
        await you.say_as_passer_by_and_wait(`신관`, `……알겠습니다.`);
        await era.printAndWait(`의식이 끝나고 신관은 두 사람을 바라보았다.`);
        await you.say_as_passer_by_and_wait(
          `신관`,
          `삼여신께서 두 분에게 말씀을 남기셨습니다.`,
        );
        await falcon.say_and_wait(`응?`);
        await you.say_as_passer_by_and_wait(
          `신관`,
          `긴장하지 마세요. 삼여신께서는 그저 조금 관심을 가지셨을 뿐입니다.`,
        );
        await you.say_as_passer_by_and_wait(`신관`, `그럼 제 안내에 따라……`);
        await era.printAndWait(`능숙한 안내에 따라 두 사람은 눈을 감았다.`);
        const buffer = [
          () => darley.say_and_wait('……강한 아이구나.'),
          () =>
            godolphin.say_and_wait(
              '사랑스러운 아이야, 모든 것을 혼자 짊어지지 말거라.',
            ),
          () =>
            byerley.say_and_wait(
              '모든 물음의 끝, 그것은 에덴에 있다. 멈추지 말고 달려라.',
            ),
        ];
        await get_random_entry(buffer)();
        await era.printAndWait(`딸랑딸랑딸랑`);
        await era.printAndWait(`삼여신의 속삭임이 들린 것 같았다.`);
        await falcon.say_and_wait(`……팔코는 이미 충분히 행복해.`);
        await era.printAndWait(
          `예상과 달리 팔코의 얼굴에는 수심이 어려 있었다.`,
        );
        await falcon.say_and_wait(`${callname}은(는) 무슨 소원을 빌었어⭐`);
        await era.printAndWait(
          `수심은 곧 ${falcon.teen_sex_title}의 미소 뒤로 숨었다.`,
        );
      } else {
        await you.say_as_passer_by_and_wait(`신관`, `……알겠습니다.`);
        await era.printAndWait(
          `의식이 끝나고 신관은 품에서 부적 한 장을 꺼냈다.`,
        );
        await you.say_as_passer_by_and_wait(
          `신관`,
          `변변치 않지만 받아 주세요.`,
        );
        await era.printAndWait([
          falcon.get_colored_name(),
          '/',
          you.get_colored_name(),
          '「',
          { content: '정말 ', color: falcon.color },
          '감사합니다!」',
        ]);
        await you.say_as_passer_by_and_wait(
          `신관`,
          `두 분의 사이가 더 깊어지면 다시 찾아와 주세요. 부디 각자의 목표가 이루어지기를 바랍니다.`,
        );
        await era.printAndWait(
          `트레이너실로 돌아오자 ${you.name}은(는) ${falcon.name}와 조금 더 가까워진 것 같았다.`,
        );
      }
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} falcon スマートファルコン
   * @param {CharaTalk} you プレイヤー
   */
  async o_s_restaurant(falcon, you) {
    const buffer = [
      async () => {
        await you.say_as_passer_by_and_wait(
          `점원`,
          `오래 기다리셨습니다. 과일 파르페 두 개 나왔습니다.`,
        );
        await falcon.say_and_wait(`생각보다 맛있네.`);
      },
      async () => {
        await falcon.say_and_wait(`팔코는 이걸로 충분해!`);
        await era.printAndWait(
          `${falcon.name} 앞에는 약간의 당근과 채소만 놓여 있었다.`,
        );
        await you.say_and_wait(`……그렇게 적게 먹어도 괜찮아?`);
        await falcon.say_and_wait(`요즘 그만 예산을 초과해서……`);
        await era.printAndWait(`${you.name} 일행은 메뉴의 피자 세트를 보았다.`);
        await you.say_and_wait(`한 판 시킬까? 내가 살게.`);
        await falcon.say_and_wait(`고마워⭐`);
        await era.printAndWait(
          `다음 날 체중을 재고 두 킬로 늘었다며 허둥대는 ${falcon.name}는 의외로 귀여웠다.`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} falcon スマートファルコン */
  async o_s_dating(falcon) {
    const buffer = [
      async () => {
        await era.printAndWait(
          `아이돌과 팬이 데이트하면 화난 팬들한테 비난받는 거 아냐?`,
        );
        await falcon.say_and_wait(
          `트레이너와 담당 ${falcon.uma_sex_title}의 아주 건전한 관계인걸!`,
        );
        await era.printAndWait(`기분이 묘하다.`);
      },
      async () => {
        await era.printAndWait(
          `${falcon.name}는 현역 아이돌이다. 이렇게 누군가와 데이트하면.`,
        );
        await falcon.say_and_wait(`들키지 않은 것 같아.`);
        await era.printAndWait(
          `잔디를 달리는 ${falcon.uma_sex_title}에 비하면 더트의 아이돌은 관객들의 관심에서 멀리 있는 모양이다.`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} falcon スマートファルコン */
  async o_s_shopping(falcon) {
    const buffer = [
      async () => {
        await era.printAndWait(
          `쇼핑몰을 돌아다니다 ${falcon.uma_sex_title} 굿즈 가게 앞을 지났다.`,
        );
        await falcon.say_and_wait(`팔코 굿즈, 지난주보다 조금 늘었어♪`);
        await era.printAndWait(
          `더트 테마 진열대에는 ${falcon.name}의 인형이 줄지어 있었다.`,
        );
      },
      async () => {
        await falcon.say_and_wait(`셋, 둘, 하나, 자♪`);
        await falcon.say_and_wait(
          `트레이너와 함께 쇼핑몰 산책♪ 음──이 사진은 안 올리는 게 좋을까?`,
        );
        await era.printAndWait(
          `(자신의 생각으로는) 논란 하나를 피했다. 잘됐네, 잘됐어.`,
        );
      },
    ];
    await get_random_entry(buffer)();
  },
};
