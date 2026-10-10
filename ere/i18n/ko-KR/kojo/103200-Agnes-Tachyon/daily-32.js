/**
 * @file アグネスタキオン - 日常
 * @author 幽白書
 * @author 黑奴一号 黑奴队长（改訂）
 * @author Claude (翻訳)
 */
const era = require('#/era-electron');

const { get_random_entry } = require('#/utils/list-utils');

const { pregnant_stage_enum } = require('#/data/ero/status-const');
const recruit_flags = require('#/data/event/recruit-flags');

const { degeneration_to_evil } = require('#/i18n/ko-KR/snippets');

module.exports = {
  /**
   * 地下室脱出後のおはよう／選択時の共通台詞
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  select_when_escape(tachyon, callname) {
    tachyon.say(['신기하군, ', callname, '']);
    tachyon.say([
      '지하실에 있을 때 자네 눈은 빛을 거의 잃었었는데…… 지금은 다시 사람을 빨아들일 듯한 빛을 되찾았어.',
    ]);
    tachyon.say([
      '『제 눈에 특별한 게 있다면 타키온의 빛이 반사된 거겠죠』라고? ……후후, ',
      callname,
      ', 웬일로 말솜씨가 좋군……',
    ]);
    tachyon.say([
      '그럼…… 내 눈동자가 다시 먼지에 덮이면, 자네가 한 번 더 닦아 주게나.',
    ]);
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  good_morning(tachyon) {
    tachyon.say(
      '왔는가, 그럼 온 김에 문 앞에 있는 쓰레기 봉투 세 개 좀 버려주게…… 실험을 돕겠다고? 자네가 필요해지면 자연스럽게 부를 테니 걱정 말게.',
    );
    era.print([
      tachyon.get_colored_name(),
      '은 실험으로 한창 바쁜 모양이었다.',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async office_study(tachyon, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          '아, ',
          callname,
          ', 실례지만 이 장을 좀 지도해줄 수 있겠나?',
        ]);
        await tachyon.say_and_wait(
          '『타키온에게도 모르는 게 있을 줄은 몰랐다』라니, 비행기도 정도껏 태우게. 나도 내 지식의 미천함 정도는 스스로 잘 알고 있네.',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          '아, ',
          callname,
          ', 미안하지만 이쪽 분야에 대해 가르쳐줄 수 있겠나?',
        ]);
        await tachyon.say_and_wait(
          '음음, 맞네, 바로 이 장이야. 과학 윤리. 왠지 모르게 이건 도무지 외워지질 않는군. 참 이상한 일이야……',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '시험을 위해 공부한다니, 그렇게 얻은 지식이 정말 쓸모가 있을까?',
        );
        await tachyon.say_and_wait([
          '자네도 내 뜻을 이해하겠지, ',
          callname,
          '.',
        ]);
        await tachyon.say_and_wait(
          '생활에서 전혀 쓸모없는 것을 공부하는 건 시간 낭비일 뿐이네.',
        );
        await tachyon.say_and_wait(
          '그러니까 윤리나 도덕같이 고리타분하고 케케묵은 사상만 가득한 과목은 배우지 않아도 상관없지 않겠나?',
        );
        await tachyon.say_and_wait('……안 되는 건가?');
      },
      async () => {
        await tachyon.say_and_wait([
          '지리? 아니, ',
          callname,
          '…… 자네는 내가 이런 간단한 과목조차 보충이 필요하다고 생각하는 건가?',
        ]);
        await tachyon.say_and_wait(
          '못 믿겠다면 시험해 보게. 스위스의 수도는 베른, 브라질의 공식 언어는 포르투갈어, 미국의 전신은 13개 식민지…… 보게나, 전부 대답하지 않았나?',
        );
        await tachyon.say_and_wait(
          '남쪽이 어디냐고? 흥, 우문이군. 당연히 땅속 아니겠나.',
        );
      },
      async () => {
        await tachyon.say_and_wait([
          callname,
          ', 이 작문에 대해서 말인데, 내 글의 어디가 문제인지 도무지 모르겠군.',
        ]);
        await tachyon.say_and_wait(
          '문제가 커튼이 왜 파란색인지를 묻지 않았나?',
        );
        await tachyon.say_and_wait(
          '그래서 색의 생성 원리와 인간이 원추세포를 통해 얻는 정보에 기반해 2만 자 분량의 분석을 썼는데, 이게 뭐가 문제라는 거지?',
        );
        await tachyon.say_and_wait(
          '……과연, 글자 수 초과였군. 다음번엔 2천 자 내외로 조절해 보도록 노력하지.',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async office_prepare(tachyon, callname) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '준비? 준비는 약자나 하는 것이네, ',
        callname,
        '. 자네는 사자가 훈련하는 걸 본 적이 있는가?',
      ]);
    } else {
      await tachyon.say_and_wait(
        '에이, 왜 굳이 레이스 전에 준비를 해야 하는 거지? 레이스도 시험과 마찬가지로 평소의 실력을 측정하는 것 아닌가……',
      );
      await tachyon.say_and_wait(
        '설마 자네, 시험 직전에야 벼락치기를 해서 낙제를 면하길 바라는 그런 부류인가?',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {PrintedSpan} call_9 アグネスタキオンからダイワスカーレットへの呼び方
   * @param {PrintedSpan} call_25 アグネスタキオンからマンハッタンカフェへの呼び方
   * @param {PrintedSpan} y_call_s プレイヤーからセイウンスカイへの呼び方
   * @param {number} relation アグネスタキオンのプレイヤーへの好感度
   * @param {number} love アグネスタキオンのプレイヤーへの恋慕
   * @param {number} talk_times 今週の会話回数
   * @param {number} cook_times アグネスタキオンに料理した回数
   */
  async talk(
    tachyon,
    coffee,
    you,
    callname,
    call_9,
    y_call_s,
    call_25,
    relation,
    love,
    talk_times,
    cook_times,
  ) {
    const buffer = [];
    if (relation < 75) {
      if (talk_times >= 10) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            '……',
            callname,
            ', 오늘 실험 보고서는 다 썼나?',
          ]);
          await tachyon.say_and_wait(
            '여기서 잡담할 틈이 있으면 할 일부터 끝내게나',
          );
        });
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait(
              '자, 이번 약이라네……… 『맛이 이상하다』고? 잊었나 보군. 자네는 실험동물이야. 실험동물이 약맛을 가릴 이유는 없지.',
            ),
          async () => {
            await tachyon.say_and_wait([
              '한계……',
              tachyon.uma_sex_title,
              '……다리…… 아니, 역시 안 돼……',
              callname,
              '? 언제부터 거기 서 있었나?',
            ]);
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) 무언가 골똘히 생각하고 있는 것 같았다.',
            ]);
          },
          () =>
            tachyon.say_and_wait([
              coffee.get_colored_name(),
              '? 그래, ',
              tachyon.sex,
              '은(는) 흥미로운 관찰 대상이지. 게다가 만일…… 아니, 아무것도 아니네. 방금 말은 잊어 주게.',
            ]),
          async () => {
            await tachyon.say_and_wait('옷……? 아아, 사흘쯤 목욕을 안 했군……');
            await tachyon.say_and_wait(
              '자네와 무슨 상관이지? 시간 낭비할 거면 실험이나 하게나……',
            );
            await tachyon.say_and_wait(
              '됐네. 자네는 모르모트야. 내가 뭘 하든 자네와는 상관없어.',
            );
          },
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) ',
              tachyon.get_colored_name(),
              '이(가) 믹서로 오늘 점심을 갈고 있는 모습을 보았다.',
            ]);
            await tachyon.say_and_wait([
              '식사? 필요 없다네. 인간이든 ',
              tachyon.uma_sex_title,
              '이든 최소한의 영양만 보충하면 충분해. 맛을 추구하는 건 쓸데없는 수고일 뿐이지.',
            ]);
          },
          () =>
            tachyon.say_and_wait(
              '고작 모르모트 주제에. 실험을 도우면서 내 비위도 맞춰 두게나. 쓸모가 없어졌을 때 자비를 베풀어 줄지도 모르니.',
            ),
          () =>
            tachyon.say_and_wait(
              '용건이 있으면 빨리 말하게. 실험할 시간 낭비하지 말고.',
            ),
          async () => {
            await tachyon.say_and_wait('후우……');
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) 한숨을 내쉬었다. 기분이 좋지 않아 보인다. 지금은 건드리지 않는 편이 좋겠다……',
            ]);
          },
          async () => {
            await tachyon.say_and_wait('흐흥흐흥～～흐흥～～');
            await era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) 기분이 좋은 모양이다. 하지만 ',
              tachyon.sex,
              '의 손에 들린, 위험한 짙은 녹색 빛을 띠는 약물을 보고 ',
              you.get_colored_name(),
              '은(는) 그 좋은 기분을 망치지 않기로 했다.',
            ]);
          },
        );
      }
    } else if (relation < 150) {
      if (talk_times >= 10) {
        if (cook_times < 5) {
          await tachyon.say_and_wait([
            callname,
            ', 한가하면 요리 실력이나 갈고닦게나. 사람이 먹을 만한 걸 하루빨리 만들 수 있도록',
          ]);
        } else {
          await tachyon.say_and_wait([
            callname,
            ', 정말 할 일이 없으면 실험 기구나 전부 씻게. 실험복을 빨든지, 쓰레기를 버리든지. 할 일은 얼마든지 있지 않나? 거기서 멍하니 서 있지 말고',
          ]);
        }
      } else {
        buffer.push(
          () =>
            tachyon.say_and_wait([
              callname,
              ', 오늘 약이라네…… 도망가나? 후후, ',
              tachyon.uma_sex_title,
              '의 손에서 벗어날 수 있을 거라 생각했나?',
            ]),
          async () => {
            await tachyon.say_and_wait([
              tachyon.uma_sex_title,
              '의 한계…… 스퍼트…… 진화…… 생존…… 인류보완계획…… 부패한 사회…… 구원…… 재생…… 닫힌 현실로부터의 탈출……',
            ]);
            await tachyon.say_and_wait(
              '아아, 알겠군. 모든 진실은 이집트에 있었어.',
            );
            await era.printAndWait([
              '……',
              tachyon.get_colored_name(),
              '이(가) 갑자기 이상한 소리를 하기 시작했다. 지금은 건드리지 않는 편이 좋겠다.',
            ]);
          },
          async () => {
            await tachyon.say_and_wait(
              '아아…… 마침 잘 왔네. 가운을 좀 빨아 주게. 지난번 실험 때 더러워졌거든…………',
            );
            await tachyon.say_and_wait(
              '왜 바로 안 줬냐고? 그냥 잊었을 뿐이네. 애초에 눈치채지 못한 건 모르모트로서의 태만 아닌가?',
            );
          },
          async () => {
            await tachyon.say_and_wait(
              '식사? ……내 견해는 변함없다네. 식사는 영양을 보충하기 위해 존재할 뿐, 그 이상도 이하도 아니지……',
            );
            await tachyon.say_and_wait(
              '다만, 그렇군. 요즘은 이 시간이 조금 기대되기도 해……',
            );
            await tachyon.say_and_wait(
              '아니, 넘겨짚지 말게. 하늘과 땅의 차이를 알려 주려는 것뿐이야. 그때의 굴욕은 그렇게 쉽게 잊히지 않아. 매일 약물 실험을 맡아 준다면 생각해 볼 수도 있겠지만……',
            );
            await you.say_and_wait('그거 지금이랑 똑같잖아?');
            await tachyon.say_and_wait(
              '듣고 보니…… 잠깐, 매일…… 아니, 아무것도 아니야. 잊게. 지금, 당장, 즉시.',
            );
          },
          () =>
            tachyon.say_and_wait(
              '요즘 식사는…… 뭐, 합격점이군. 조금 더 달면…… 아니, 아무것도 아니네',
            ),
          async () => {
            await tachyon.say_and_wait([
              '아아, ',
              call_9,
              '……『지난번 과자와 음료, 감사했습니다』라고?',
            ]);
            await tachyon.say_and_wait(
              '별것 아니네. 마음에 들었다면 또 가지러 오게나…………',
            );
            await tachyon.say_and_wait(
              '그 표정은 뭔가? 귀여운 후배에게 그런 걸 줄 리 없잖나',
            );
          },
          async () => {
            await tachyon.say_and_wait('흐흥～～흐흥흐흥～～');
            await tachyon.say_and_wait(
              '모르모트 열 마리 나들이 갔네～만에 빠져 아홉 마리～',
            );
            await tachyon.say_and_wait(
              '화산에 빠져 여덟 마리～보물 굴에서 길을 잃어 일곱 마리～',
            );
            await tachyon.say_and_wait(
              '성난 파도에 휩쓸려 여섯 마리～콘도르에게 습격당해 다섯 마리～',
            );
            await tachyon.say_and_wait(
              '과식해서 네 마리～정상을 향하다 세 마리～',
            );
            await tachyon.say_and_wait(
              '터보가 폭발해서 두 마리～커피를 너무 마셔 한 마리～',
            );
            await tachyon.say_and_wait(
              '혼자 남은 모르모트 찍찍～약을 마시고 펑 하고 폭발～～',
            );
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) ',
              tachyon.get_colored_name(),
              '이(가) 이상한 노래를 흥얼거리는 걸 들었다…… 가사의 뜻은 모르겠지만 지금의 ',
              tachyon.sex,
              '에게는 가까이 가지 않는 편이 좋을 것 같았다.',
            ]);
          },
        );
      }
    } else if (relation > 225 && love < 50) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            '이런, ',
            callname,
            ', 갑자기 무슨 일로 말을 거는 건가?',
          ]);
          await tachyon.say_and_wait('후후, 그냥 내켜서라고?');
          await tachyon.say_and_wait(
            '다른 목적이 있을 텐데. 아니, 아무것도 아니네. 무엇이든 호기심을 갖는 건 좋은 일이지',
          );
          await tachyon.say_and_wait([
            '대사를 찾아보는 것도 포함해서 말이야. 그렇지 않나, 화면 너머의 ',
            callname,
            '？',
          ]);
          await tachyon.say_and_wait('무슨 소리냐고? 후후, 글쎄, 누가 알겠나');
        },
        async () => {
          await tachyon.say_and_wait(['아아, ', callname, ', 위험해!']);
          await tachyon.say_and_wait(
            '후우, 갑자기 말을 거니까 그렇지. 약을 쏟을 뻔했잖나',
          );
          await tachyon.say_and_wait(
            '무슨 약이냐고? 후후, 전에 채취한 자네의 DNA, 기억하고 있겠지?',
          );
          await tachyon.say_and_wait(
            '냄새를 맡은 자가 자네에게 푹 빠지게 되는 약이라네…… 음? 안 쏟은 게 아쉬워졌나? ……음흉하군',
          );
          await tachyon.say_and_wait(
            '농담이야. 사실은 그 사람의 DNA를 바탕으로 만든 표적 독……',
          );
          await tachyon.say_and_wait(
            '증기만 맡아도 비강에 병변을 일으키고 암세포가 생기게 하지……',
          );
          await tachyon.say_and_wait(
            '자자, 그렇게 겁먹을 것 없네. 하하, 쏟지 않았으니 됐잖나',
          );
          await tachyon.say_and_wait(
            '음? 어느 쪽이 진짜냐고…… 그건 상상에 맡기지～～',
          );
        },
        async () => {
          await tachyon.say_and_wait([callname, '……오늘 옷……']);
          await tachyon.say_and_wait(
            '그리고 말이야, 생각해 봤는데. 빨래를 부탁하는 건 그렇다 쳐도 속옷까지 빨게 하는 건 좀 지나친 것 같군',
          );
          await tachyon.say_and_wait(
            '……아니, 냄새 이야기가 아니야. 애초에 냄새 같은 건 안 나네!',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            '이쯤 되니 자네 도시락에 완전히 익숙해졌군',
          );
          await tachyon.say_and_wait(
            '후후, 이제는 못 먹는 날이 더 신경 쓰일 정도야',
          );
          await tachyon.say_and_wait('이런 생활…… 이대로 유지하며……');
          await tachyon.say_and_wait('후후, 연구자에게 유지란 칭찬이 아니라네');
          await tachyon.say_and_wait(
            '유지만 생각해서는 돌파구를 찾을 수 없어……',
          );
          await tachyon.say_and_wait('그렇지…… 그런데……');
          await tachyon.say_and_wait(
            '왜일까. 지금 생활이 이대로 계속되어도 좋겠다는 생각이 들어서……',
          );
          await tachyon.say_and_wait('어째서……');
        },
      );
    } else if (relation > 375 && love < 50) {
      buffer.push(async () => {
        await tachyon.say_and_wait(['이런, 왔군, ', callname]);
        await tachyon.say_and_wait('오늘 실험은…… 음? 왜 그러나');
        await tachyon.say_and_wait(
          '너무 가깝다고? 그런가. 나는 딱 좋다고 생각하는데',
        );
        await tachyon.say_and_wait('아니면 부끄러운 건가?');
      });
    } else if (talk_times >= 10) {
      buffer.push(() =>
        tachyon.say_and_wait([
          callname,
          ', 이야기를 더 나누는 건 좋지만, 달리 해야 할 일이 있지 않나?',
        ]),
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait([
            callname,
            '! 오늘 약은 오른쪽의 초록색과 왼쪽의 빨간색, 어느 쪽으로 하겠나?',
          ]);
          await tachyon.say_and_wait(
            '둘 다 싫다고? 그럴 줄 알았네. 역시 세 번째 선택지, 무지개색이군!',
          );
        },
        async () => {
          await tachyon.say_and_wait([callname, '……내일 도시락']);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '에게 내일은 쉬는 날이라고 말하려 했다',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '그래……',
            callname,
            ', 쉬는 날이라고 밥을 안 먹어도 되는 건 아니잖나',
          ]);
          await era.printAndWait([
            tachyon.sex,
            '은(는) 걱정스러운 눈으로 ',
            you.get_colored_name(),
            '을(를) 보았다',
          ]);
          await you.say_and_wait('…………');
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 깨달았다. 이런 상황에서는 무슨 말을 해도 소용없다.',
            tachyon.sex,
            '의 도시락을 만들겠다고 약속하는 수밖에 없었다',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([callname, '～～오늘 옷도 부탁하네']);
          await tachyon.say_and_wait(
            '뭐? 직접 빨라고? 내 시간은 바람이 실어다 주는 줄 아나?',
          );
          await tachyon.say_and_wait(
            '게다가 이것도 자네에게 주는 상이라네～～',
          );
          await tachyon.say_and_wait('내가 입었던 속옷이잖나～～');
          await tachyon.say_and_wait(
            '냄새가 난다고!? 이봐! 무례하기도 정도가 있지!',
          );
        },
        async () => {
          await tachyon.say_and_wait(
            '뭐? 수업을 안 들으면 성적에 지장 없냐고?',
          );
          await tachyon.say_and_wait([
            callname,
            ', 입시 위주 교육은 범인을 키우기 위한 것이라네. 천재인 내게 필요할 리 없지',
          ]);
          await tachyon.say_and_wait([
            '『그럼 시험도 안 봐도 돼?』라고? 무슨 소린가, ',
            callname,
            '. 시험은 내일…… 오늘!?',
          ]);
        },
        async () => {
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 평소와 달리 말없이 몸을 기대어 왔다',
          ]);
          era.println();
          await tachyon.say_and_wait([callname, ', 무슨 일 있나?']);
          era.println();
          await you.say_and_wait('아무것도 아니야');
          await era.printAndWait([
            you.get_colored_name(),
            '이(가) 대답한 뒤에도 ',
            tachyon.sex,
            '은(는) 계속 ',
            you.get_colored_name(),
            '에게 기대어 있었다',
          ]);
          await era.printAndWait(
            '두 사람 사이에 대화는 없었고, 그대로 말없는 시간이 흘렀다',
          );
        },
        async () => {
          await tachyon.say_and_wait([
            callname,
            '? 마침 잘 왔네. 이것들을 전부 방염 특수 용지에 베껴 쓰게!',
          ]);
          await tachyon.say_and_wait([
            call_25,
            '그 녀석! ',
            tachyon.sex,
            '에서 실험을 좀 했을 뿐인데 실험 자료를 전부 태우겠다고 협박하더군!',
          ]);
          await tachyon.say_and_wait([
            '어떻게든 오후 세 시까지 기다려 달라고 했지만, 그때까지 다 베껴야 해!',
          ]);
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) ',
            tachyon.get_colored_name(),
            '의 재촉에 책상 앞에 앉아 베껴 쓰는 일에 합류했다',
          ]);
          await era.printAndWait([
            '하지만 ',
            you.get_colored_name(),
            '의 마음에 의문이 들었다. 정말 태울 작정이라면 미리 알려 주기나 할까……?',
          ]);
          era.println();
          await era.printAndWait(
            '아니나 다를까, 오후 세 시가 지나도 연구 자료는 불타지 않았다. 실험실은 평소처럼 평온했고, ',
          );
          await era.printAndWait([
            '피해를 입은 것은 반나절 동안 방 가득한 자료를 베껴 쓴 ',
            you.get_colored_name(),
            '와(과) ',
            tachyon.get_colored_name(),
            '의 손뿐이었다',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([call_9, '그 아이…… 귀엽지 않나?']);
          await tachyon.say_and_wait([
            '어째서인지 ',
            tachyon.sex,
            '을(를) 보면 부성애 비슷한 것이 솟아오른다네',
          ]);
          if (tachyon.sex_code - 1) {
            era.println();
            await you.say_and_wait('모성애가 아니라?');
          }
          era.println();
          if (era.get('cflag:0:种族') > 0) {
            await tachyon.say_and_wait([
              '벌써 ',
              you.uma_sex_title,
              '이(가) 됐는데도 모르겠나?',
              callname,
              '은(는) 둔감하군',
            ]);
            era.println();
            await you.say_and_wait('……무슨 소린지 모르겠는데');
          } else {
            await tachyon.say_and_wait([
              '아니야…… 이 느낌은 설명하기가 어렵군. 자네도 ',
              tachyon.uma_sex_title,
              '이(가) 되면 알게 될 거야',
            ]);
            era.println();
            await you.say_and_wait([
              '언젠가는 내가 ',
              tachyon.uma_sex_title,
              '이(가) 될 것처럼 말하지 말아 줄래!?',
            ]);
          }
        },
        async () => {
          await tachyon.say_and_wait('스카이 군은 좋은 아이로군……');
          era.println();
          await you.say_and_wait([
            '응? 타키온, ',
            y_call_s,
            '와(과) 아는 사이야?',
          ]);
          era.println();
          await tachyon.say_and_wait(
            '아니…… 내가 말하는 스카이 군과 자네가 말하는 스카이 군은 아마 다른 사람일 거야',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 고개를 갸웃하며 ',
            tachyon.get_colored_name(),
            '을(를) 보았다. 학원에 스카이가 또 있나?',
          ]);
          era.println();
          await tachyon.say_and_wait([
            '……아니, 그만두지, ',
            callname,
            '. 방금 말은 못 들은 걸로 해 주게',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * 会話 - 低やる気の膝枕
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async talk_hizamakura(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, ', 피곤하군. 좀 자겠네']);
    era.printButton('허락한다', 1);
    era.printButton('거절한다', 2);
    await era.input();
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 마음속으로 고르기도 전에 ',
      tachyon.get_colored_name(),
      '은(는) 이미 ',
      you.get_colored_name(),
      '의 무릎에 누워 있었다',
    ]);
    era.printButton('「이봐, 타키온」', 1);
    await era.input();
    await tachyon.say_and_wait('ZZZ');
    era.println();
    await era.printAndWait('너무 빠르잖아!?');
    await era.printAndWait([
      tachyon.sex,
      '을(를) 깨우지 않기 위해 ',
      you.get_colored_name(),
      '은(는) 꼼짝없이 원래 자세를 유지할 수밖에 없었다',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '이(가) 일어나면 제대로 주의를 줘야겠다. 민폐인 건 둘째치고 이성의 무릎에 갑자기 눕다니, 경계심이 너무 없잖아',
    ]);
    era.println();
    await tachyon.say_and_wait('으음……');
    era.println();
    await era.printAndWait([
      '잠이 얕은 듯 ',
      tachyon.sex,
      '은(는) 몸을 뒤척였다. ',
      you.get_colored_name(),
      '의 마음속에 맴돌던 잔소리는 ',
      tachyon.sex,
      '의 얼굴을 똑바로 본 순간 흔적도 없이 사라졌다',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '의 눈가에 내려앉은 다크서클, 쓰러지듯 잠든 지친 모습. ',
      tachyon.sex,
      '이(가) 얼마나 불안정하게 잠을 자는지 거듭 보여 주고 있었다',
    ]);
    await era.printAndWait([
      '생각해 보면 요즘 ',
      tachyon.sex,
      '은(는) 연구가 막혀 제대로 잠들지 못하는 것 같았다',
    ]);
    await era.printAndWait([
      '유일하게 안심되는 점은 ',
      you.get_colored_name(),
      '의 무릎에 있을 때만큼은 ',
      tachyon.sex,
      '의 미간이 펴져 있다는 것이었다',
    ]);
    await era.printAndWait([
      '……이렇게 해서 ',
      tachyon.sex,
      '이(가) 조금이라도 잘 수 있다면, 가끔은 이 정도쯤 괜찮을지도 모르겠다',
    ]);
  },
  /**
   * 会話 - 天皇賞（春）のあと
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} tenn_spr 天皇賞（春）（着色済みの名前）
   */
  async talk_tenn_spr(tachyon, you, tenn_spr) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '와(과) ',
      tenn_spr,
      '이야기를 하고 싶었지만, ',
      tachyon.sex,
      '은(는) 곧바로 자취를 감췄다',
    ]);
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {number} cook_times 料理回数
   * @param {boolean} plan_b Plan B に入っているか
   */
  async office_cook(tachyon, coffee, you, callname, cook_times, plan_b) {
    if (era.get('relation:32:0') <= 150 && cook_times === 0) {
      await tachyon.say_and_wait(
        '나에게 요리를 해주겠다고? 입에 대기도 힘든 음식이라면 거절하겠네.',
      );
      await era.printAndWait(
        '정말 까다로운 식객이었다…… 요리 실력을 좀 더 정진한 뒤에 다시 도전해야 할 것 같았다.',
      );
    } else {
      const buffer = [];
      if (!plan_b) {
        buffer.push(async () => {
          await tachyon.say_and_wait(['힘내게, ', callname, '～～']);
          await tachyon.say_and_wait(
            '음? 같이 만든다는 건 자네가 만들고 내가 말로 거든다는 뜻인데?',
          );
        });
        if (era.get('relation:32:0') > 375) {
          buffer.push(
            async () => {
              await tachyon.say_and_wait([
                callname,
                '! 오늘은 직접 달걀전을 부쳤다네! 어서 먹게!',
              ]);
              await you.say_and_wait('……');
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 눈앞의 조금 탄 데다 달걀이 죄다 삐져나와 제대로 싸이지도 않은, 달걀전보다는 볶은 전병에 달걀을 더한 것 같은 요리를 바라보았다……',
              ]);
              await era.printAndWait('뭐…… 맛만큼은 먹을 만하다');
            },
            async () => {
              await tachyon.say_and_wait([
                '……',
                callname,
                ', 알고 있겠지. 학원에서는 안전 때문에 인덕션 같은 것밖에 못 쓰잖나. 그래서 ',
              ]);
              await tachyon.say_and_wait(
                '그런데…… 인덕션은 익숙하지 않아서 말이야. 그러니까…… 내 잘못이 아니야. 인덕션이 쓰기 불편한 거지. 가스레인지였다면 절대 이렇게 안 됐을 텐데……',
              );
              await era.printAndWait([
                you.get_colored_name(),
                '은(는) 눈앞의 새까맣게 탄 달걀을 보았다.',
              ]);
              await era.printAndWait(
                '……조금 쓰고, 조금 짜다. 간신히 먹을 수는 있는 정도다.',
              );
            },
            async () => {
              await tachyon.say_and_wait(
                '생각해 보니 트레이너실에서 요리를 한다는 것 자체가 꽤 불합리하군',
              );
              await era.printAndWait([
                '오늘은 ',
                tachyon.sex,
                '인 자신이 직접 도시락을 만들겠다고 약속했던 ',
                tachyon.get_colored_name(),
                '은(는) 배달 음식 두 상자를 꺼냈다.',
              ]);
              await era.printAndWait(
                '……먹을 수 있는 건 확실하지만, 이미 처음 취지와는 어긋나 있다.',
              );
            },
          );
        }
      } else {
        buffer.push(
          async () => {
            await era.printAndWait([
              '원래 ',
              you.get_colored_name(),
              '와(과) ',
              tachyon.get_colored_name(),
              '은(는) 번갈아 도시락을 만들기로 했다.',
            ]);
            await era.printAndWait([
              '하지만 최근 ',
              coffee.get_colored_name(),
              '의 트레이닝 양이 늘어나, ',
              you.get_colored_name(),
              '이(가) 잠시 짬을 내어 도시락을 만들 여유가 없었고, ',
            ]);
            await era.printAndWait([
              '그래서 요즘은 대부분 ',
              tachyon.get_colored_name(),
              '이(가) 만들고 ',
              you.get_colored_name(),
              '이(가) 먹으며, 식사하는 동안 ',
              tachyon.sex,
              '와(과) 정보를 나누는 날들이 이어졌다.',
            ]);
            era.printButton('「맛있어!」', 1);
            await era.input();
            await tachyon.say_and_wait('후후, 나쁘지 않군');
            await era.printAndWait([
              you.get_colored_name(),
              '의 감탄에도 ',
              tachyon.get_colored_name(),
              '은(는) 끝까지 평온한 표정이었다.',
            ]);
            await tachyon.say_and_wait('달리 할 일도 없으니 말이야');
            await era.printAndWait([
              '그 한마디를 ',
              tachyon.sex,
              '은(는) 슬픔을 담아 말한 걸까.',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) 알 수 없었다.',
            ]);
          },
          () =>
            era.printAndWait([
              tachyon.get_colored_name(),
              '은(는) ',
              you.get_colored_name(),
              '의 도시락을 평소처럼 다 먹고 나서, ',
              coffee.get_colored_name(),
              '의 잠재력을 끌어낼 약물 연구로 돌아갔다.',
            ]),
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              '은(는) ',
              tachyon.get_colored_name(),
              '의 도시락을 먹었다.',
            ]);
            await era.printAndWait([
              '지금의 ',
              tachyon.sex,
              '은(는) 예전보다 말수가 적다. 시시한 이야기보다는 ',
              tachyon.sex,
              '은(는) ',
              coffee.get_colored_name(),
              '을(를) 어떻게 더 빨리 달리게 할지에 집중하고 있다.',
            ]);
            await era.printAndWait([
              '과묵하고, 집중력이 뛰어나고, 요리를 잘한다. 어떤 의미에서 지금의 ',
              tachyon.get_colored_name(),
              '은(는) 예전의 ',
              tachyon.sex,
              '보다 세간에서 말하는 훌륭한 여성상에 가깝다.',
            ]);
            await era.printAndWait([
              '하지만 역시…… 그 시절 기세와 열정으로 가득했던 ',
              tachyon.sex,
              '이(가) 그립다.',
            ]);
          },
        );
      }
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async office_rest(tachyon, you, callname) {
    if (era.get('cflag:32:干劲') === -2) {
      await tachyon.say_and_wait('나에게 휴식은 필요 없네.');
      await era.printAndWait([
        '상태가 눈에 띄게 좋지 않은 ',
        tachyon.get_colored_name(),
        '이 억지로 고집을 부리며 말했다.',
      ]);
      await tachyon.say_and_wait(
        '아직 할 일이 산더미처럼 쌓여 있는데, 쉴 여유 따위 있을 리가……',
      );
      if (era.get('love:32') >= 50) {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 실험대 앞에 고집스럽게 앉아 있는 ',
          tachyon.get_colored_name(),
          '을 뒤에서 껴안았다.',
        ]);
        await era.printAndWait([tachyon.sex, '의 몸이 가볍게 떨렸다.']);
        await tachyon.say_and_wait([
          '……',
          callname,
          ', 미인계를 써도 소용없네.',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 실험대 앞에 버티고 앉아 있는 ',
          tachyon.sex,
          '를 강제로 일으켜 세웠다.',
        ]);
      }
    } else {
      const buffer = [
        () =>
          tachyon.say_and_wait([
            '피곤하군, 피곤해. ',
            callname,
            ', 어서 홍차 한 잔 타 오게나.',
          ]),
        () =>
          era.printAndWait([
            you.get_colored_name(),
            '은(는) 직접 내린 홍차를 마시며 ',
            tachyon.get_colored_name(),
            '과 함께 소파에 앉아 한가로운 오후를 보냈다.',
          ]),
        async () => {
          await tachyon.say_and_wait('정말 한가하군.');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은 평화로운 일상에 대해 짤막한 감상을 남겼다.',
          ]);
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async office_game(tachyon) {
    if (Math.random() < 0.5) {
      await tachyon.say_and_wait([
        '쳇…… 이 기체, 너무 느리군.',
        tachyon.uma_sex_title,
        '의 출력을 전혀 따라오지 못하잖나!',
      ]);
    } else {
      await tachyon.say_and_wait(
        '격투 게임? 진 쪽이 상대의 말을 듣기로 하는 건가?',
      );
      await tachyon.say_and_wait(
        '후후, 커맨드 리스트를 전부 외운 나를 이길 방법이 있을 것 같은가?',
      );
      await tachyon.say_and_wait(
        '……잠깐! 구석에 박혀서 원거리 공격만 계속하는 건 너무 비겁하지 않은가!',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {boolean} plan_b Plan B に入っているか
   */
  async school_atrium(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(async () => {
        await tachyon.say_and_wait(
          '고민을 나무 구멍에 대고 외친다고? 그런다고 뭐가 달라지지?',
        );
        await tachyon.say_and_wait(
          '……시시하군. 푸념할 시간에 현실을 바꾸려 노력하게나.',
        );
        await tachyon.say_and_wait(
          '『털어놓으면 마음의 부담이 줄어든다』고? 내 곁에 있는데도 부담이 있나? 잠깐, 그 쓴웃음은 무슨 뜻이지?',
        );
      });
      if (
        era.get('love:32') > 80 &&
        tachyon.sex_code !== 1 &&
        you.sex_code > 0
      ) {
        buffer.push(
          async () => {
            await era.printAndWait([
              you.get_colored_name(),
              ' は ',
              tachyon.get_colored_name(),
              ' を枯れた樹洞の前へ連れていった。',
              tachyon.sex,
              'は自分から、洞の縁に身を預けた。',
            ]);
            await era.printAndWait([
              'だが今日遊ぶのはそれではない。',
              you.get_colored_name(),
              ' は首を振り、',
              tachyon.get_colored_name(),
              ' の肩に寄りかかった。',
            ]);
            await you.say_and_wait(
              '愚痴と圧を吐く場所なら、君も、悔しいことを叫んでみろ。',
            );
            await era.printAndWait([
              'そう言って ',
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の尻を軽く叩いた。聞きたいものが何か、それだけで十分だった。',
            ]);
            await era.printAndWait([
              '頭の回転が速い天才',
              tachyon.uma_sex_title,
              'は、即座に ',
              you.get_colored_name(),
              ' の意図を読んだ。',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'は責めるように ',
              you.get_colored_name(),
              ' を一目見て、それから樹洞へ『悔しい』を叫び始めた。',
            ]);
            await tachyon.say_and_wait([
              '乳頭を ',
              callname,
              ' に摘まれるだけでイってしまうのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              'お穴が雑魚すぎて、',
              callname,
              ' に触られただけで濡れるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              callname,
              ' の匂いを嗅いだだけで頭が交尾しか残らない痴女になるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              'おちんぽを含んだ瞬間、',
              callname,
              ' の一生オナホになりたくなるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait([
              '我慢しろと命じられているのに、',
              callname,
              ' が射精するたび飲み込んで罰せられるのが悔しいですわ❤️',
            ]);
            await tachyon.say_and_wait(
              '毎回薬に頼っても、おちんぽ様に勝てないのが悔しいですわ❤️',
            );
            await tachyon.say_and_wait(
              'おちんぽ様を満足させる前に自分が先にイってしまうのが悔しいですわ❤️',
            );
            await era.printAndWait([
              '一声叫ぶたびに ',
              you.get_colored_name(),
              ' はご褒美に',
              tachyon.sex,
              'の尻を叩いた。叩かれるたび',
              tachyon.sex,
              'はより熱心に腰を揺らし、さらに過激な『悔しい』を吐き出した。',
            ]);
            await era.printAndWait([
              '最後、周囲の',
              tachyon.uma_sex_title,
              'の羞恥に染まった視線の中、',
              you.get_colored_name(),
              ' は両脚を震わせて歩けなくなった ',
              tachyon.get_colored_name(),
              ' の手を引き、実験室へ戻った。',
            ]);
          },
          async () => {
            await era.printAndWait([
              tachyon.get_colored_name(),
              ' は枯れた樹洞に身を預け、中を退屈そうに覗いていた。',
            ]);
            await era.printAndWait([
              '外へ突き出した',
              tachyon.sex,
              'の尻を見て、',
              you.get_colored_name(),
              ' は欲を抑えきれなくなった。',
            ]);
            await tachyon.say_and_wait([callname, '……んっ❤️']);
            await era.printAndWait([
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の、まだ幼さを残す尻を叩いた。布越しの弾力が、打ち下ろした力を掌へ跳ね返した。',
            ]);
            await tachyon.say_and_wait([
              '……',
              callname,
              '、ここ、残響が……大きいですわ❤️……戻って、戻ってからにしましょう、いいですわね❤️',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' は',
              tachyon.sex,
              'の懇願を聞かず、もう一度強く叩いた。',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'は慌てて口を押さえたが、それでも声は漏れ出た。',
            ]);
            await tachyon.say_and_wait('んひぃ❤️❤️❤️');
            await tachyon.say_and_wait('ん……❤️');
            await tachyon.say_and_wait('んぅ……❤️');
            await tachyon.say_and_wait('待って、入れないでええええ❤️❤️❤️');
            await era.printAndWait([
              '最後、',
              you.get_colored_name(),
              ' は樹洞の上でぐったりし、顔を赤くした ',
              tachyon.get_colored_name(),
              ' を抱き、トレーナー室へ連れて帰った。',
            ]);
            await era.printAndWait([
              '道行く生徒たちは、思わず ',
              you.get_colored_name(),
              ' たちに注目した。',
            ]);
            await era.printAndWait([
              you.get_colored_name(),
              ' にとって、この視線はもう慣れたものだった。',
            ]);
            await era.printAndWait([
              '腕の中の ',
              tachyon.get_colored_name(),
              '……人目も構わず、力の抜けた両手で抱擁をねだる',
              tachyon.sex,
              'は、',
            ]);
            await era.printAndWait([
              tachyon.sex,
              'を満たすまで、そんなことに構う余裕などないだろう。',
            ]);
          },
        );
      }
      if (era.get('love:32') > 75) {
        buffer.push(async () => {
          await tachyon.say_and_wait([
            'ん……',
            callname,
            ' ❤️……人の気持ちを吐く樹洞の前で、こんなこと……聞かれたらどうしますの❤️',
          ]);
          await tachyon.say_and_wait('性欲を吐くのも、発散のうち？');
          await tachyon.say_and_wait(
            'まったく❤️……見つかっても知りませんわよ❤️',
          );
        });
      }
      await get_random_entry(buffer)();
    } else {
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 마른 나무 구멍 가장자리에 기대어 안을 향해 무언가 외치려는 듯했지만, 한참 망설인 끝에 그만두었다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 모습을 보며 ',
        you.get_colored_name(),
        '은(는) 어째서인지 슬픔과 약간의 안도감을 동시에 느꼈다',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {boolean} plan_b Plan B に入っているか
   */
  async school_rooftop(tachyon, coffee, you, callname, plan_b) {
    const buffer = [];
    if (!plan_b) {
      buffer.push(
        () =>
          tachyon.say_and_wait(
            '아아, 도시락은 놔두게. 풍속 측정이 끝나면 먹겠네.',
          ),
        async () => {
          await tachyon.say_and_wait([
            '옥상에서 도시락이라…… 그러고 보니 ',
            callname,
            ', 옥상이 원래 출입 금지였다는 건 알고 있나?',
          ]);
          await you.say_and_wait('어, 그랬어?');
          await tachyon.say_and_wait([
            '그래. 어떤 ',
            tachyon.uma_sex_title,
            '이(가) 옥상에서 실험하다가 실수로 유독 물질을 누출했다더군.',
          ]);
          await tachyon.say_and_wait('……그 표정은 뭔가?');
          await tachyon.say_and_wait('아니, 아니, 내가 아니야');
          await tachyon.say_and_wait(
            '물론 자네 말대로 이만큼 지났으면 잔류 물질은 없겠지.',
          );
          await tachyon.say_and_wait([
            '게다가 남아 있더라도…… 지금의 내 약으로 단련된 ',
            callname,
            '이(가) 예전의 내 약에 당할 리 없잖나.',
          ]);
          await you.say_and_wait('역시 너잖아!');
        },
        async () => {
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 도시락을 가지고 ',
            tachyon.get_colored_name(),
            '와(과) 옥상에서 점심을 먹었다.',
          ]);
          await era.printAndWait([
            '산들바람이 ',
            tachyon.get_colored_name(),
            '의 머리카락을 쓰다듬고, ',
            tachyon.sex,
            '은(는) 즐거운 듯 작게 웃었다.',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 이곳이 마음에 드는 모양이다. 기회가 되면 또 ',
            tachyon.sex,
            '을(를) 데려오자.',
          ]);
        },
      );
    } else {
      buffer.push(
        () =>
          era.printAndWait([
            tachyon.get_colored_name(),
            '은 옥상에서 조용히 선선한 바람을 느끼고 있었다. 무표정한 저 얼굴은, 다시 ',
            coffee.get_colored_name(),
            '의 훈련 플랜을 구상하고 있는 것일까.',
          ]),
        () =>
          era.printAndWait([
            you.get_colored_name(),
            '은(는) 기분 전환을 시켜 주려고 ',
            tachyon.get_colored_name(),
            '을(를) 옥상으로 데려가 도시락을 먹었지만, ',
            tachyon.sex,
            '은(는) 식사하는 동안에도 계속 ',
            coffee.get_colored_name(),
            '이야기만 했다.',
          ]),
        async () => {
          await era.printAndWait([
            tachyon.sex,
            '은(는) 어째서인지 울타리 너머 하늘만 바라보고 있었다',
          ]);
          await era.printAndWait(
            '눈에는 아무런 동요도 없이 그저 하늘 풍경만 비치고 있었다.',
          );
          await tachyon.say_and_wait(['……왜 그러나? ', callname, '？']);
          await era.printAndWait([
            '어째서인지 ',
            you.get_colored_name(),
            '은(는) 갑자기 두려워졌다',
          ]);
          await era.printAndWait([
            '그 두려움에 이끌려 ',
            you.get_colored_name(),
            '은(는) ',
            tachyon.sex,
            '의 손을 잡았다가 곧바로 놓았다',
          ]);
          await tachyon.say_and_wait([
            '……안심하게, ',
            callname,
            '. 어디에도 가지 않을 테니',
          ]);
        },
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {number} jpy 釣りで売ったウマコイン。0 は釣果なし
   */
  async o_r_fishing(tachyon, callname, jpy) {
    if (jpy > 0) {
      await tachyon.say_and_wait(
        '이런, 잡은 물고기는 내일 도시락 재료로 쓰면 되겠군',
      );
    } else {
      await tachyon.say_and_wait([
        '큭…… 왜 안 잡히는 거지……',
        callname,
        ', 이 물고기들이 『우연히』 물속의 『정체불명 물질』을 마시고 떠오르면 그것도 낚은 걸로 쳐 주겠지? 안 되나?',
      ]);
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {boolean} first2shop 売店に行ったことがないか
   */
  async o_r_walking(tachyon, callname, first2shop) {
    await tachyon.say_and_wait([
      callname,
      ', 빨리 따라오지 않으면 내일 약은 두 배라네',
    ]);
    if (first2shop) {
      await tachyon.say_and_wait(
        '그러고 보니 여기, 전에 가판대를 열었을 때…… 아니, 아무것도 아니네. 신경 쓰지 말게',
      );
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async o_s_arcade(tachyon, callname) {
    const buffer = [
      () =>
        tachyon.say_and_wait([
          '어라? 왜 ',
          callname,
          '은(는) 인형 뽑기를 그렇게 잘하는 거지? 의욕에 흰색, 파란색 회복…… 아니, 미안하네. 무슨 소린지 모르겠군',
        ]),
      () =>
        tachyon.say_and_wait([
          '이런, 내 인형도 있군? ……실물보다 귀엽다고? 잠깐, ',
          callname,
          ', 그 말이 무슨 뜻인지 설명하게',
        ]),
      async () => {
        await tachyon.say_and_wait('쳇…… 꼭 이렇게 활짝 웃어야 하나?');
        await tachyon.say_and_wait(
          '아니, 내가 귀찮다는 게 아니야. 이 스티커 사진이라는 기획 자체에 불합리한 점이 너무 많다는 거지! …………하아, 알겠네. 3, 2, 1, 치즈',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async o_s_drawing(tachyon, callname) {
    const buffer = [
      () =>
        tachyon.say_and_wait(
          '추첨…… 운처럼 믿을 수 없는 것보다는 돈이나 다른 힘으로 상품을 얻는 게 더 합당하지 않나?',
        ),
      () =>
        tachyon.say_and_wait([
          '어라～～이렇게 조작하기 쉬운 상자에서 정말로 제비를 뽑겠다고? ',
          callname,
          '? ……아니, 이견은 없다네. 다만 확인차 묻겠는데…… 상자 안에 정말 당첨 제비가 있긴 한가?',
        ]),
      async () => {
        await tachyon.say_and_wait(
          '추첨이군. 그럼 준비를……… 좋아, 해 보게나. 음? 갑자기 웬 안경이냐고?',
        );
        await tachyon.say_and_wait(
          '별것 아니네. 상자 안을 투시하는 안경이야. 설마 내가 운처럼 믿을 수 없는 것을 믿으리라 생각했나?',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async o_s_ktv(tachyon, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait('Winning the soul～～');
        await tachyon.say_and_wait([
          '……후훗, 어떤가, ',
          callname,
          '? 내 노래도 나쁘지 않지? ……뭐라고? NEXT FRONTIER가 듣고 싶다고? 아니면 Special Record?',
        ]);
        await tachyon.say_and_wait(['……', callname, ', 일부러 그러는 거지?']);
      },
      async () => {
        await tachyon.say_and_wait(
          'Выходила на берег Катюша,На высокий берег, на крутой……',
        );
        await tachyon.say_and_wait(
          '러시아어는 모를 텐데도 노래하다 보면 갑자기 읽을 수 있을 것 같단 말이지……',
        );
        await tachyon.say_and_wait(
          '역시 그런가. 태어나면서부터 알고 있다는 것도 천재의 고충이군',
        );
      },
      async () => {
        await tachyon.say_and_wait(['이런? ', callname, ', 제법 잘하는군……']);
        await tachyon.say_and_wait(
          '그런데 후렴에서 그렇게 흥분하지 말아 주겠나?',
        );
        await tachyon.say_and_wait(
          '자네가 흥분할 때마다 방이 너무 눈부셔서 아무것도 안 보인다네. 그런 와중에 가사는 잘도 읽는군……',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '허어…… 곡 분위기에 맞춰 색깔까지 바꾸나? 일곱 빛깔 네온 버전까지 있었군……',
        );
        await tachyon.say_and_wait(
          '아니, 발명자인 나조차 내 약에 그런 기능이 있을 줄은 몰랐다네. 무시무시하군……',
        );
      },
    ];
    await get_random_entry(buffer)();
  },
  /** @param {CharaTalk} tachyon アグネスタキオン */
  async o_s_movie(tachyon) {
    await tachyon.say_and_wait('……이 영화관…… 외관은 근사하군……');
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('이봐, 뭐라고 말 좀 해 보게……');
    await tachyon.say_and_wait(
      '동행인이 내는 빛이 너무 밝아서 입장을 거절당하다니, 이 아그네스 타키온도 처음 겪는 일이군……',
    );
    await tachyon.say_and_wait('뭐라고 말해 보게. 사과든 뭐든');
    era.printButton('「이렇게 된 건 너 때문이잖아!?」', 1);
    await era.input();
    await era.printAndWait(
      '결국 두 사람은 기분 좋게 실험실로 돌아가 NetFlOx를 보았다.',
    );
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {boolean} plan_b Plan B に入っているか
   */
  async out_church(tachyon, you, callname, plan_b) {
    const buffer = [];
    if (plan_b) {
      buffer.push(
        async () => {
          await tachyon.say_and_wait('……신이여');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 지루한 듯 신사를 바라보았다. 무슨 생각을 하는지 알 수 없었다',
          ]);
        },
        async () => {
          await tachyon.say_and_wait('만약…… 신이 있다면, 나는……');
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 혼잣말을 중얼거렸다',
          ]);
        },
      );
    } else {
      buffer.push(
        async () => {
          await tachyon.say_and_wait(
            '신 같은 게 정말 있는 걸까? 아니, 세 여신은 알고 있다네. 하지만…… 따지고 보면 세 여신도 더 강한 힘을 쥔 평범한 존재일 뿐……',
          );
          await era.printAndWait([
            you.get_colored_name(),
            '은(는) 황급히 ',
            tachyon.get_colored_name(),
            '의 입을 막았다.',
          ]);
        },
        () =>
          tachyon.say_and_wait([
            '자자, ',
            callname,
            ', 신보다는 실험으로 돌아가세',
          ]),
        () =>
          tachyon.say_and_wait(
            '대길이든 대흉이든? 상관없네. 그런 건 신이 정하는 게 아니라 내가 만드는 거야',
          ),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {number} cook_times 料理回数
   */
  async o_s_restaurant(tachyon, you, callname, cook_times) {
    if (cook_times < 10) {
      await tachyon.say_and_wait(
        '……맛없군. 전부 레토르트 기성품에, 간은 온통 향료와 화학조미료뿐. 평소 먹는 약만으로는 부족한가? 이런 걸 내게 먹이다니',
      );
      await era.printAndWait([
        '음식이 나오자마자 ',
        tachyon.get_colored_name(),
        '에게 하나부터 열까지 혹평을 들었다. 기분 전환을 시켜 주려다 오히려 ',
        tachyon.sex,
        '의 기분을 상하게 하고 말았다.',
      ]);
      await tachyon.say_and_wait('다만…… 이 디저트는 나쁘지 않군');
      await era.printAndWait('어…… 이가 아플 만큼 단 푸딩이? 정말로?');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 취향을 조금 알 것 같았다',
      ]);
    } else {
      const buffer = [
        async () => {
          await tachyon.say_and_wait([
            '이봐, ',
            callname,
            '……외식하러 데려와 준 건 고맙지만, 자네 요리보다 못한 음식을 굳이 먹으러 오는 이유가 뭔가?',
          ]);
          await era.printAndWait([
            tachyon.get_colored_name(),
            '은(는) 어리둥절한 눈으로 ',
            you.get_colored_name(),
            '을(를) 보았다',
          ]);
        },
        async () => {
          await tachyon.say_and_wait([
            '맛은 나쁘지 않네. 하지만 ',
            callname,
            '의 요리와 비교하면…… 뭔가 부족해…… 그래, 그거군. 단맛이 부족해',
          ]);
          await tachyon.say_and_wait([
            '설탕을 더 먹으면 당뇨병에 걸린다고? 걱정 말게. ',
            tachyon.uma_sex_title,
            '의 신진대사가 알아서 해 줄 테니',
          ]);
        },
        async () => {
          await era.printAndWait(
            '홍소육, 탕수육, 화과자, 치사량에 달할 만큼 설탕을 넣은 홍차, 마무리는 꿀 푸딩',
          );
          await tachyon.say_and_wait([callname, '? 안 먹나?']);
          await you.say_and_wait('……보기만 해도 이가 아파. 사양할게');
        },
      ];
      await get_random_entry(buffer)();
    }
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async o_s_dating(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait(
          '음? 실험 기구를 사러 가는 건 데이트라고 안 한다고?',
        );
        await tachyon.say_and_wait([
          callname,
          ', 데이트라는 말은 무척 추상적이라네. 자네가 데이트라고 생각하면 그게 데이트야. 알겠나?',
        ]);
        await tachyon.say_and_wait([
          '나 같은 절세미인 ',
          tachyon.teen_sex_title,
          '와(과) 외출할 수 있다는 것부터 이미 데이트나 다름없지 않나.',
        ]);
      },
      async () => {
        await tachyon.say_and_wait('거리 산책, 차 마시기, 잡담, 식사');
        await tachyon.say_and_wait('이게 보통 데이트인가? ……지루하군');
      },
    ];
    if (era.get('relation:32:0') < 50) {
      buffer.push(() =>
        tachyon.say_and_wait(
          '데이트가 실험 조수 겸 피험자의 의욕을 얼마나 끌어올리는지 분석하자고? 그래…… 연구 과제로 삼아 볼 가치는 있겠군',
        ),
      );
    } else if (era.get('relation:32:0') < 225) {
      buffer.push(() =>
        tachyon.say_and_wait([
          '데이트? ……',
          callname,
          ', 보통 과학자는 자기 실험동물과 데이트하지 않는다네. 무슨 말인지 알겠나?',
        ]),
      );
    }
    await get_random_entry(buffer)();
  },
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async o_s_shopping(tachyon, you, callname) {
    const buffer = [
      async () => {
        await tachyon.say_and_wait([
          '이봐, ',
          callname,
          '……옷은 인터넷으로 사면 충분하잖나. 인간 옷과 ',
          tachyon.uma_sex_title,
          '옷이 무슨 상관이지?',
        ]);
        await tachyon.say_and_wait(
          '꼬리 구멍이 없어서 옷자락이 들릴 때마다 보인다고?',
        );
        await tachyon.say_and_wait(['………그건 성희롱이라네, ', callname, '。']);
      },
      async () => {
        await tachyon.say_and_wait('조리 기구? 그렇게 많이 사서 뭘 하려고……');
        await tachyon.say_and_wait(
          '허어, 이만큼이나 요리를 할 수 있나…… 큭…… 실험비에 슬쩍 넣을 수만 있다면……',
        );
        await tachyon.say_and_wait(
          '괜찮네, 사게. 걱정하지 말고. 내가 서류를 작성하면 정당한 실험 기구로 신청할 수 있어…… 아마도',
        );
      },
      async () => {
        await tachyon.say_and_wait(
          '무료 시음…… 무료 체험. 역시 가장 강력한 홍보 문구는 『무료』로군. 판촉인 걸 알면서도 ',
        );
        await tachyon.say_and_wait([
          '무료라는 말을 듣는 순간 남이 주는 음식에 대한 경계를 잊어버리니……',
          callname,
          ', 좋은 생각이 났네. 약 무료 시음! ……안 되나?',
        ]);
      },
    ];
    await get_random_entry(buffer)();
  },
  /**
   * 週開始 - 低好感、料理回数 0〜4、2週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async ws_cook02(tachyon, you) {
    await era.printAndWait([
      '점심시간, 어째서인지 ',
      tachyon.get_colored_name(),
      '은(는) 일부러 ',
      tachyon.sex,
      '의 믹서를 실험대에 놓고 출력을 최대로 높여 요란한 소리를 내며 ',
      tachyon.sex,
      '의 「점심」을 갈기 시작했다',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 문득 떠올렸다. 지난주는 너무 바빠서 ',
      tachyon.sex,
      '의 도시락을 잊고 있었다…… 이번 주에는 반드시 기억하자',
    ]);
  },
  /**
   * 週開始 - 低好感、料理回数 0〜4、3週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_cook03(tachyon, you, callname) {
    await tachyon.say_and_wait([
      callname,
      ', 자네는 『거의 다 이룬 일을 마지막 한 조각이 모자라 완수하지 못하는』옛날 이야기를 알고 있나?',
    ]);
    await tachyon.say_and_wait(
      '다시 말해, 백 리를 가려는 자는 구십 리를 반으로 여겨야 하는 법. 오직 끈기 있게 노력하는 자만이 성공을 거머쥘 수 있다는 소리라네.',
    );
    await tachyon.say_and_wait(
      '레이스의 세계에서도 마찬가지네. 능력치가 부족할 수도 있고 스킬이 발동하지 않을 수도 있지. 하지만 자네가 우마무스메를 육성하며 배운 지식은 자네를 배신하지 않아.',
    );
    await tachyon.say_and_wait(
      '그래, 서포트 카드가 남들보다 뒤처지면 좀 어떤가. 6R 카드로도 SS 랭크의 우마무스메를 키워낼 수 있지. 모든 것은 그저 노력과 근성의 문제라네……',
    );
    era.println();
    await era.printAndWait([
      '오늘 트레이닝실에 들어서자마자, ',
      tachyon.get_colored_name(),
      '은 영문 모를 장광설을 늘어놓기 시작했다.',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '즉, 내가 하고 싶은 말은………… 노력이라는 건, 요리에 있어서도 마찬가지라는 뜻이라네.',
    );
    era.println();
    await era.printAndWait([
      '그 말을 듣고 나서야 ',
      you.get_colored_name(),
      '은(는) 겨우 상황을 파악했다. 과연 그렇군, 지난 2주간 일이 너무 많아서 ',
      you.get_colored_name(),
      '은(는) 또 잊어버리고 말았던 것이다. 안 돼, 이번에야말로 꼭 기억해야 한다……',
    ]);
  },
  /**
   * 週開始 - 低好感、料理回数 0〜4、4週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_cook04(tachyon, you, callname) {
    await tachyon.say_and_wait('…………');
    era.println();
    await era.printAndWait([
      '오늘 실험실에 도착한 순간, ',
      you.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '의 기분이 몹시 나쁘다는 것을 알아차렸다. 게다가 ',
      you.get_colored_name(),
      '은(는) 그 이유도 알고 있었다',
    ]);
    era.println();
    await era.printAndWait(['원인은 ', you.get_colored_name()]);
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 삼 주 동안 ',
      tachyon.get_colored_name(),
      '에게 요리를 해 주지 않았기 때문이다',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 황급히 ',
      tachyon.sex,
      '에게 지난 몇 주 동안은 정말 바빠서 시간이 나지 않았다고 변명했다……',
      you.get_colored_name(),
      '스스로도 믿을 수 없는 거짓말이었다',
    ]);
    await era.printAndWait([
      '그냥 잊었든, 다른 ',
      tachyon.uma_sex_title,
      '의 육성에 시간을 쏟았든, ',
    ]);
    await era.printAndWait(
      '아니면 아직 못 본 대사가 있는지 확인하고 싶었을 뿐이든. 「당신」에게 시간은 얼마든지 있다',
    );
    await era.printAndWait([
      '하지만 지금 ',
      you.get_colored_name(),
      '은(는) 그런 서투른 변명으로 용서를 구할 수밖에 없었다',
    ]);
    era.println();
    await tachyon.say_and_wait('…………용서하고 말고 할 것도 없네');
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '을(를) 슬쩍 보고 말했다',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '이것도 자네 가능성 중 하나지. 훌륭한 연구 표본이야. 자네의 노력을 부정하지는 않겠네, ',
    );
    await tachyon.say_and_wait(
      '마찬가지로 게으름을 비난하지도 않아. 어느 쪽이든 자네가 선택한 것이니. 나와는 아무 상관없다네',
    );
    era.println();
    await era.printAndWait('그래, 굳이 말하자면');
    await era.printAndWait([
      tachyon.sex,
      '은(는) 그제야 돌아보았다. 오늘 처음으로 ',
      tachyon.sex,
      '이(가) ',
      you.get_colored_name(),
      '을(를) 바라보았다',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '의 눈에는 실망도, 혐오도, 분노도 없었다',
    ]);
    await era.printAndWait(
      '형언하기 어려운 감정이었다. 굳이 이름을 붙인다면, 그것은──따분함',
    );
    era.println();
    await tachyon.say_and_wait('자네의 가능성은 이 정도였군');
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '은(는) 목표에 미치지 못한 실험동물을 보는 눈으로 ',
      you.get_colored_name(),
      '을(를) 바라보다가 입을 열었다',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '자신의 가치를 높이도록 계속 노력하게나, ',
      callname,
      '……안 그러면 심심해지는 날 버려 버릴지도 모르니',
    ]);
  },
  /**
   * 週開始 - 低好感、料理回数 5 以上、2週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   */
  async ws_cook12(tachyon, you) {
    await tachyon.say_and_wait('음……');
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 오늘 조금 안절부절못하는 모습이었다',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 긴장하며 ',
      tachyon.sex,
      '에게 무슨 일이 있느냐고 물었다',
    ]);
    era.println();
    await tachyon.say_and_wait('…………흥, 아무것도 아니네');
    era.println();
    await era.printAndWait([tachyon.sex, '은(는) 토라진 듯 괜찮다고 말했다']);
    await tachyon.say_and_wait('꼬르륵～～～～');
    await era.printAndWait([
      '그때, 기막히게도 ',
      tachyon.sex,
      '의 배에서 큰 소리가 났다',
    ]);
    era.println();
    await tachyon.say_and_wait('……………');
    await you.say_and_wait('……………');
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 문득 떠올렸다. 지난주 ',
      you.get_colored_name(),
      '은(는) 완전히 ',
      tachyon.sex,
      '의 도시락을 잊고 있었다',
    ]);
    await era.printAndWait('설마……');
    era.println();
    await tachyon.say_and_wait(
      '…………아무튼 식사는 활동에 필요한 최소한의 에너지만 유지할 수 있으면 충분해',
    );
    era.println();
    await era.printAndWait([
      tachyon.sex,
      '은(는) 여전히 강한 척하고 있었다. ',
      you.get_colored_name(),
      '은(는) 황급히 ',
      tachyon.sex,
      '에게 사과하며 오늘은 꼭 잊지 않겠다고 약속했다',
    ]);
  },
  /**
   * 週開始 - 低好感、料理回数 5 以上、3週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_cook13(tachyon, you, callname) {
    await tachyon.say_and_wait(['흥, ', callname, ', 오늘의 약이 왔네.']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 갑자기 트레이닝실로 들이닥치더니, ',
      you.get_colored_name(),
      '에게 기묘한 색깔의——사실 평소와 다름없는 색깔의——약 한 병을 강제로 먹였다.',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 약을 마시고 얼마 지나지 않아 깊은 잠에 빠졌다.',
    ]);
    await era.printAndWait([
      '꿈속에서 ',
      you.get_colored_name(),
      '은(는) 마치 사막을 걷는 듯했다. 며칠 밤낮을 먹지도 마시지도 못한 상태였다.',
    ]);
    await era.printAndWait([
      '갑자기 장면이 바뀌더니, 꿈속의 ',
      you.get_colored_name(),
      '은(는) 정체 모를 누군가에 의해 곤죽이 된 영양소를 억지로 입에 넣어야 했다. 도저히 삼키기 힘든 맛이었지만,',
    ]);
    await era.printAndWait([
      '조금 전 사막에서의 갈증을 생각하며 ',
      you.get_colored_name(),
      '은(는) 그것을 필사적으로 삼킬 수밖에 없었다…………',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 꿈에서 깨어났고, 눈앞에는 ',
      tachyon.get_colored_name(),
      '의 득의양양한 얼굴이 있었다.',
    ]);
    era.println();
    await tachyon.say_and_wait(['어이쿠, 악몽이라도 꾼 건가? ', callname]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 쓴웃음을 지으며 이 약이 무엇을 의미하는지 대강 짐작했다. 그리고 이번 주에는 꼭 ',
      tachyon.get_colored_name(),
      '의 도시락을 챙기겠다고 약속했다.',
    ]);
  },
  /**
   * 週開始 - 低好感、料理回数 5 以上、4週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} amazon ヒシアマゾン
   * @param {CharaTalk} tama タマモクロス
   * @param {CharaTalk} akebono ヒシアケボノ
   * @param {CharaTalk} taste 秋川やよい／ノースフライト
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_cook14(tachyon, amazon, tama, akebono, taste, you, callname) {
    await era.printAndWait([
      '오늘 아침 ',
      you.get_colored_name(),
      '이(가) 학원에 도착한 순간부터 뭔가 이상했다',
    ]);
    await era.printAndWait('학원 전체가 초조한 분위기에 휩싸여 있었다');
    await era.printAndWait(
      '그 분위기는 점심시간에 극에 달했고, 식사 중인 식당에서 절정을 이루었다',
    );
    era.println();
    await you.say_as_passer_by_and_wait('지나가던 트레이너 A', [
      '모든 ',
      tachyon.uma_sex_title,
      '이(가) 폭주하고 있어!',
      tachyon.couple_title,
      '이(가) 갑자기 담당 트레이너한테 도시락을 만들어 달라고 조르기 시작했다고!',
    ]);
    await you.say_as_passer_by_and_wait('지나가던 트레이너 A', [
      '직접 만든 게 아니면 안 된대! 젠장, ',
      tachyon.couple_title,
      '은(는) 트레이너가 만든 건지 아닌지 어떻게 구별하는 거야!',
    ]);
    era.println();
    await era.printAndWait([
      '단역 트레이너는 어째서인지 트레이너실에 들이닥쳐 상황 설명이라도 하듯 그렇게 말하더니, 문간으로 뛰어든 담당 ',
      tachyon.uma_sex_title,
      '에게 끌려 나갔다',
    ]);
    era.printButton('「대, 대체…… 무슨……」', 1);
    await era.input();
    await tachyon.say_and_wait('이런, 사정을 물으시는 분이 계시군?');
    await era.printAndWait([
      '갑자기 ',
      you.get_colored_name(),
      '의 뒤에서 익숙한 목소리가 들려왔다. 하지만 ',
      you.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '이(가) 언제 트레이너실에 들어왔는지조차 알지 못했다',
    ]);
    era.println();
    await tachyon.say_and_wait('그렇게 간절히 묻는다면, 자비롭게 알려 주지');
    await tachyon.say_and_wait([
      tachyon.uma_sex_title,
      '와(과) 도시락의 악을 관철하기 위해, 사랑스럽고 매혹적인 광기의 과학자',
    ]);
    await tachyon.say_and_wait([
      '너무 기니 이하 생략. 요컨대 아그네스 타키온이라네. 자, ',
      callname,
      ', 얌전히 도시락을 내놓게',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) ',
      you.get_colored_name(),
      '이(가) 앉은 의자 등받이에 기대어, 앉아 있는 ',
      you.get_colored_name(),
      '을(를) 내려다보며 도발적인 미소를 지었다',
    ]);
    era.printButton('「또 무슨 짓을 한 거야」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '이런, 너무하군. 곧바로 나부터 의심하다니. 피해자일 수도 있지 않나',
    );
    era.println();
    await era.printAndWait([tachyon.sex, '은(는) 가련한 목소리로 말했다']);
    era.printButton('「방금 네 입으로 인정했잖아」', 1);
    await era.input();
    await tachyon.say_and_wait('아아…… 그러고 보니 그런 일도 있었군');
    await era.printAndWait('그런 사소한 건 신경 쓰지 말게');
    await era.printAndWait([
      tachyon.sex,
      '은(는) 소매를 가볍게 휘두르며 말했다',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '중요한 건, ',
      callname,
      ', 도시락을 내놓는 거야',
    ]);
    era.printButton('「이렇게 강요하면 얌전히 따를 것 같아?」', 1);
    await era.input();
    await tachyon.say_and_wait(
      '…………후후, 물론이지. 결국 얌전히 도시락을 바치게 될 테니',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 수수께끼 같은 미소를 지었고, ',
      you.get_colored_name(),
      '은(는) 저도 모르게 찔리는 기분이 들었다',
    ]);
    await era.printAndWait([
      '오늘 ',
      you.get_colored_name(),
      '은(는) 분명 ',
      tachyon.get_colored_name(),
      '의 도시락을 만들었다. 하지만 일이 바빠 정말로 잊고 말았다',
    ]);
    await era.printAndWait(
      '그래도 여기서 물러설 수는 없다. 트레이너로서의 존엄을 위해! 자유를 위해! ……서다',
    );
    era.println();
    await taste.say_and_wait([
      '알립니다! 알 수 없는 원인으로 학원 내 모든 ',
      tachyon.uma_sex_title,
      '이(가) 트레이너가 직접 만든 도시락에 정체불명의 집착을 보이고 있습니다.',
    ]);
    await taste.say_and_wait([
      '각 트레이너는 즉시 담당의 도시락을 만들어 주십시오. 요리를 못 하는 트레이너는 사무국장, 가정 선생님 및 ',
      tama.get_colored_name(),
      '、',
      amazon.get_colored_name(),
      '또는 ',
      akebono.get_colored_name(),
      '에게 도움을 요청해 주십시오',
    ]);
    era.printButton('「……」', 1);
    await era.input();
    await era.printAndWait([
      '의기양양한 ',
      tachyon.get_colored_name(),
      '을(를) 보며 ',
      you.get_colored_name(),
      '은(는) 쓴웃음을 지을 수밖에 없었다',
    ]);
    await era.printAndWait([
      '역시 ',
      tachyon.sex,
      '에게는 이길 수 없다.',
      you.get_colored_name(),
      '은(는) 얌전히 도시락을 내밀었다',
    ]);
  },
  /**
   * 週開始 - 高好感、料理回数 10 以上、2週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {number} cook_times 料理回数
   */
  async ws_cook22(tachyon, you, callname, cook_times) {
    await era.printAndWait([
      '점심시간, ',
      you.get_colored_name(),
      '이(가) 자료를 입력하고 있는데 트레이너실 문이 벌컥 열렸다',
    ]);
    era.println();
    await tachyon.say_and_wait([callname, '! 내 밥은! 어서, 어서!']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 들어오자마자 책상에 달려들어 데굴데굴 뒹굴기 시작했다',
    ]);
    era.println();
    await era.printAndWait('위험해, 위험해');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 황급히 책상 위 컴퓨터를 치워 ',
      tachyon.get_colored_name(),
      '이(가) 떨어뜨리지 못하게 했다',
    ]);
    era.println();
    await tachyon.say_and_wait([
      '……',
      callname,
      '! 벌써 일주일째 도시락을 안 만들어 주지 않나! 굶어 죽겠어, 어서, 내 도시락은!',
    ]);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 소매를 흔들며 화난 얼굴로 ',
      you.get_colored_name(),
      '의 앞에서 발을 굴렀다. 건드리면 터질 듯한 뺨이 복어처럼 부풀어 있었다. 그렇지만 ',
    ]);
    era.printButton('「만들어 줬잖아?」', 1);
    await era.input();
    if (cook_times < 20) {
      await tachyon.say_and_wait(
        '그렇게 대충 만든 걸 도시락이라고 부를 수 있나!?',
      );
    } else {
      await tachyon.say_and_wait(
        '맛 차이는 모르겠지만…… 대충 만들었다고 직감이 말해 주고 있어',
      );
    }
    era.printButton('「……」', 1);
    await era.input();
    await tachyon.say_and_wait('지금 『귀찮은 녀석』이라고 생각했지?');
    await you.say_and_wait('……');
    await you.say_and_wait('어떻게 알았지', true);
    era.println();
    await tachyon.say_and_wait(
      '아무튼 내일은 도시락을 보여 주게! 안 그러면 후회할 거야',
    );
  },
  /**
   * 週開始 - 高好感、料理回数 10 以上、3週連続で料理なし
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_cook23(tachyon, you, callname) {
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은 벌써 2주 동안 ',
      you.get_colored_name(),
      '에게 그 어떤 실험도 하지 않았다.',
    ]);
    await era.printAndWait([
      '첫 주에는 솔직히 말해서, ',
      you.get_colored_name(),
      '은(는) 아쉽기는커녕 오히려 기쁘기까지 했다.',
    ]);
    await era.printAndWait([
      '매일 ',
      tachyon.get_colored_name(),
      '을 볼 수는 있었고, 모든 것이 평소와 같았지만 단지 ',
      tachyon.sex,
      '가 ',
      you.get_colored_name(),
      '에게 실험을 하지 않을 뿐이었으니까.',
    ]);
    await era.printAndWait([
      '하지만 둘째 주가 되자 ',
      you.get_colored_name(),
      '은(는) 어딘가 위화감을 느끼기 시작했다. 스톡홀름 증후군……',
    ]);
    await era.printAndWait([
      '까지는 아니더라도, 그저 ',
      tachyon.sex,
      '의 상태가 걱정되었고 왠지 모를 불길한 예감이 들었다.',
    ]);
    era.println();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '의 실험실 앞으로 가서 문을 두드렸다. 안에서는 아무런 대답이 없었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 사태가 심상치 않음을 느끼고 문을 박차고 들어갔다.',
    ]);
    era.println();
    await era.printAndWait([
      '분명 ',
      tachyon.get_colored_name(),
      '처럼 보였지만, 어째서인지 2등신이 되어버린, 왠지 귀엽게 생긴 생명체가 그곳에 있었다.',
    ]);
    await era.printAndWait(
      '등 뒤의 꼬리는 둥글고 포동포동해졌다. 마치…… 너구리 꼬리 같이.',
    );
    await era.printAndWait([
      '에?? 대체 어떻게 된 거지?? 이게 정말 ',
      tachyon.get_colored_name(),
      '인 건가???',
    ]);
    era.println();
    await era.printAndWait('…………그렇군, 이해했다.');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 모든 것을 완전히 이해했다.',
    ]);
    await era.printAndWait(
      '그래, 그 정체불명의 약물들, 실험체를 대하는 비인간적인 태도, 그리고 이제야 드러난 저 꼬리까지.',
    );
    await era.printAndWait([
      '틀림없어, ',
      tachyon.get_colored_name(),
      '은 처음부터 너구리가 변신한 것이었다!',
    ]);
    era.println();
    await era.printAndWait('…………아니, 이런 혼란스러운 망상은 일단 접어두자.');
    await era.printAndWait(
      '어디선가 기묘한 BGM이 흐르기 시작했다. 「아멜리아의 유언」인 듯했다. 매우 아름다운 음악이었지만, 지금의 처량한 상황과는 선명한 대조를 이루었다.',
    );
    await era.printAndWait([
      '당황한 와중에 ',
      you.get_colored_name(),
      '은(는) 이전에 ',
      tachyon.get_colored_name(),
      '이 도시락에 대해 했던 말을 떠올리고, 원래 자신이 먹으려던 도시락을 서둘러 꺼냈다.',
    ]);
    era.drawLine();
    await tachyon.say_and_wait([callname, '? 자네 거기서 뭘 하고 있나?']);
    await era.printAndWait([
      '제정신을 차린 ',
      tachyon.get_colored_name(),
      '은 순식간에 원래 모습으로 돌아와 있었고, 텅 빈 도시락통만이 방금 일어난 일이 꿈이 아니었음을 증명하고 있었다.',
    ]);
    await era.printAndWait([
      '꿈이 아니었다…… 어쨌든, 앞으로는 잊지 말고 ',
      tachyon.get_colored_name(),
      '에게 도시락을 만들어 주기로 결심했다.',
    ]);
  },
  /**
   * 週開始 - 反抗刻印3
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async ws_hate(tachyon, you, callname) {
    await era.printAndWait([
      '갑자기 ',
      tachyon.get_colored_name(),
      '이(가) ',
      you.get_colored_name(),
      '에게 입을 맞췄다',
    ]);
    await era.printAndWait([
      '뜨거운 액체가 두 사람의 입 사이를 건너갔고, 삼켜진 액체가 ',
      you.get_colored_name(),
      '의 목을 타고 내려갔다',
    ]);
    await era.printAndWait('지나간 자리마다 순식간에 타는 듯한 통증이 일었다');
    era.println();
    await tachyon.say_and_wait(['아픈가? ', callname]);
    await tachyon.say_and_wait(
      '나도 아파…… 내가 만든 약인데, 이렇게 잘 들을 줄은 몰랐군',
    );
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '의 얼굴은 웃고 있었다. 눈만은 웃지 않았다',
    ]);
    era.println();
    await tachyon.say_and_wait('탓하지는 않겠어…… 속은 쪽이 잘못이지');
    await tachyon.say_and_wait(
      '이건 자네에게 내리는 벌이자, 사람을 잘못 본 내게 내리는 벌이야',
    );
    await tachyon.say_and_wait(
      '나가라는 말도 하지 않겠네…… 인정하기 싫지만, 이런 일이 있었는데도 자네가 떠나는 건 싫어',
    );
    await tachyon.say_and_wait([
      '그러니 사랑하는 나의 ',
      callname,
      '……앞으로 남 · 은 · 생, 함께 서로를 탓하며 살아가지 않겠나?',
    ]);
  },
  /**
   * 雑談 - 呼び方についての連続イベント
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {number} talk_times 呼び方についての何回目の雑談か
   */
  async event_talk_callname(tachyon, you, callname, talk_times) {
    switch (talk_times) {
      case 1:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await you.say_and_wait('응?');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '이(가) ',
          you.get_colored_name(),
          '을(를) 부르는 것 같아서 돌아보았다',
        ]);
        era.println();
        await tachyon.say_and_wait('아무것도 아니네. 그냥 불러 봤어');
        era.println();
        await era.printAndWait([
          '그래서 ',
          you.get_colored_name(),
          '은(는) 다시 앞을 보고 하던 일로 돌아갔다',
        ]);
        era.println();
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        await tachyon.say_and_wait([callname]);
        era.println();
        await tachyon.say_and_wait([you.actual_name, '군']);
        await era.printAndWait('！？');
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 홱 돌아보았지만 눈앞의 ',
          tachyon.get_colored_name(),
          '은(는) 평소 같은 미소를 짓고 있었다',
        ]);
        await era.printAndWait('방금 아무 일도 없었던 것처럼');
        break;
      case 2:
        await tachyon.say_and_wait([callname, '……']);
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) ',
          you.get_colored_name(),
          '의 등에 다가가 어리광을 부리듯 속삭였다',
        ]);
        await era.printAndWait([
          '하지만 ',
          you.get_colored_name(),
          '은(는) 얼굴을 조금도 붉히지 않았다',
        ]);
        await era.printAndWait(
          '지난번에 여기에 넘어가 돌아본 순간 약을 먹었다',
        );
        await era.printAndWait('이번에는 아무리 불러도 절대 돌아보지 않겠다');
        era.println();
        await tachyon.say_and_wait([callname, '……']);
        await tachyon.say_and_wait([callname, '……❤']);
        await tachyon.say_and_wait([callname, '❤']);
        await tachyon.say_and_wait([callname, '❤']);
        era.println();
        await era.printAndWait([
          '어째서인지 ',
          tachyon.sex,
          '의 말투는 점점 더 달콤하고 끈적해졌다',
        ]);
        await era.printAndWait([
          '돌아볼 수 없는 ',
          you.get_colored_name(),
          '은(는) 초조함을 참으며 그 자리에 계속 앉아 있었다',
        ]);
        era.println();
        await tachyon.say_and_wait('…………바보');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '의 마지막 작은 콧소리를 듣고 ',
          you.get_colored_name(),
          '은(는) 결국 참지 못해 돌아보고 말았다',
        ]);
        await era.printAndWait('그리고……');
        era.println();
        await era.printAndWait('꿀꺽');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '의 손에는 빈 시험관이 들려 있었다',
        ]);
        await era.printAndWait([
          '내용물은? 방금 ',
          you.get_colored_name(),
          '이(가) 돌아본 순간 전부 ',
          you.get_colored_name(),
          '의 입에 쏟아 넣어진 뒤였다',
        ]);
        era.println();
        await tachyon.say_and_wait('정말이지…… 이번에는 꽤 끈질기군');
        era.println();
        await era.printAndWait(
          '약효가 돌기 시작했다. 이번에는 마비 작용인 모양이다',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 가까스로 돌아보았다. 눈앞에는 의기양양한 ',
          tachyon.get_colored_name(),
        ]);
        await era.printAndWait([
          '쏟아 내려던 불평은 ',
          tachyon.sex,
          '의 살짝 붉어진 뺨을 보는 순간 흔적도 없이 사라졌다',
        ]);
        era.println();
        await era.printAndWait(['역시 ', tachyon.sex, '에게는 당할 수 없다']);
        await era.printAndWait([
          '그런 생각을 품은 채 ',
          you.get_colored_name(),
          '은(는) 어둠 속으로 떨어졌다',
        ]);
        break;
      case 3:
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 실험 중인 것 같았다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 단정한 옆얼굴을 바라보다가 문득 장난기가 솟았다',
        ]);
        era.printButton('「아그네스 타키온」', 1);
        await era.input();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 조용히 말했다',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '의 등이 살짝 떨렸지만, 돌아보지 않고 아무 일도 없다는 듯 실험을 계속했다',
        ]);
        era.println();
        await era.printAndWait([
          '그 모습이 더욱 ',
          you.get_colored_name(),
          '의 장난기를 부추겼다',
        ]);
        era.println();
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        await you.say_and_wait(tachyon.name);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 목소리의 어조를 이리저리 바꿔 보았다',
        ]);
        await era.printAndWait([
          '부를 때마다 ',
          tachyon.sex,
          '의 몸은 전보다 더 오래 떨렸다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 옆에서 ',
          tachyon.sex,
          '의 얼굴이 점점 붉어지는 것을 보았다',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '의 뺨이 붉게 물드는 걸 보자 ',
          you.get_colored_name(),
          '도 부끄러워졌다',
        ]);
        await era.printAndWait(
          '하지만 이때의 욕심은 더 이상 멈추는 것을 허락하지 않았다',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 계속 이름을 불렀고, 목소리는 점점 더 다정해졌다',
        ]);
        await era.printAndWait([
          '이윽고 장난기는 사라지고, 지금의 ',
          you.get_colored_name(),
          '은(는) 그저 ',
          tachyon.sex,
          '이(가) 더욱 수줍어하며, 더욱 ',
          tachyon.teen_sex_title,
          '다운 표정을 짓는 것을 보고 싶을 뿐이었다',
        ]);
        era.println();
        await era.printAndWait([
          '…………',
          tachyon.get_colored_name(),
          '？',
          tachyon.teen_sex_title,
          '？',
        ]);
        await era.printAndWait(
          '원래는 어울리지 않을 두 단어가 지금은 묘하게 잘 맞았다',
        );
        await era.printAndWait('그렇게 한참 이어졌다');
        await era.printAndWait('한쪽은 계속 부르고, 다른 한쪽은 모르는 척했다');
        era.drawLine();
        await era.printAndWait([
          '갑자기 ',
          tachyon.sex,
          '의 얼굴이 붉은색에서 새하얀색으로 변했다',
        ]);
        await era.printAndWait([
          '계속 ',
          tachyon.sex,
          '을(를) 보고 있던 ',
          you.get_colored_name(),
          '은(는) 곧바로 알아차리고 ',
          tachyon.sex,
          '의 시선을 따라갔다',
        ]);
        era.println();
        await era.printAndWait([
          '시선 끝에는 ',
          tachyon.sex,
          '이(가) 쥔, 삼각형 위험 표지가 붙은 약병이 있었다',
        ]);
        await era.printAndWait('병은 이미 완전히 비어 있었다');
        await era.printAndWait('넣을 때 손이 떨려 한꺼번에 다 들어간 모양이다');
        await era.printAndWait([
          '그리고 ',
          tachyon.sex,
          '의 손에 들린, 위험한 약을 너무 많이 넣은 그 시험관은……',
        ]);
        await era.printAndWait(
          '액면이 눈에 보이는 속도로 부풀어 시험관 밖으로 넘쳐흘렀다. 더 치명적인 것은 뿜어져 나오는 증기였다.',
        );
        await era.printAndWait(
          '저 작은 시험관에서 나온다고는 믿기 어려울 만큼 많은 증기가 방 안을 가득 채우고 밖으로 흘러나갔다',
        );
        era.println();
        await era.printAndWait([
          '그때 ',
          tachyon.sex,
          '은(는) 그제야 돌아보았다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '의 얼굴이 다시 붉어지는 것을 보았다. 이번에는 ',
          you.get_colored_name(),
          '도 확신했다. 이것은 부끄러움이 아니다',
        ]);
        await era.printAndWait('이것은……………');
        era.println();
        await tachyon.say_and_wait([callname, '！！！！！！！！！！！！！！']);
        era.drawLine({ offset: 8, width: 8 });
        await era.printAndWait('【학원 공지】', { align: 'center' });
        await era.printAndWait(
          ['오후, ', tachyon.get_colored_name(), ', 약물, 종료'],
          { align: 'center' },
        );
    }
  },
  /**
   * 会話 - 紅茶を淹れる
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async event_talk_black_tea(tachyon, you, callname) {
    await tachyon.say_and_wait([callname, ', 마침 잘 왔네']);
    await tachyon.say_and_wait('오늘의 신약을 시험해 주게나');
    era.println();
    await era.printAndWait([
      '평소처럼 오늘의 약을 마셨다…… 응? 홍차 맛이 난다',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 손에 든 시험관을 의아하게 보았다. 수상한 빛을 내뿜어 한눈에도 ',
      tachyon.get_colored_name(),
      '이(가) 만든 줄 알 수 있는 약이다. 그런데 왜……',
    ]);
    era.println();
    await tachyon.say_and_wait('어떤가?');
    era.println();
    await era.printAndWait([
      '어리둥절한 상태에서 감상을 묻자 ',
      you.get_colored_name(),
      '은(는) 반사적으로 홍차 맛을 평가하고 말았다',
    ]);
    await era.printAndWait([
      '답을 마친 뒤에야 ',
      you.get_colored_name(),
      '은(는) 깨달았다. 이것은 약이지 홍차가 아니다. 아차, 한 소리 듣겠는데……',
    ]);
    era.println();
    await tachyon.say_and_wait(
      '……향이 부족하고, 너무 달고, 게다가 색…… 그렇군. 그래…… 참고가 되는 답이야……',
    );
    era.println();
    await era.printAndWait('어? 이걸로 넘어간 건가?');
    era.println();
    await tachyon.say_and_wait(
      '……그러고 보니 자네 신체 능력도 올랐으니, 앞으로 매일 먹는 약을 한 가지 늘리겠네, ',
    );
    await tachyon.say_and_wait(
      '기존 약에 더해 이것도…… 나중에는 자네가 불평할 수 없을 만큼 맛을 개선해 주지',
    );
    era.printButton('「설마……」', 1);
    era.printButton('「……설마……」', 2);
    const ret = await era.input();
    await era.printAndWait('홍차 맛');
    await era.printAndWait('맛에 대한 고찰과 개선');
    await era.printAndWait('즉, 그런 것이다');
    era.println();
    if (ret === 1) {
      await era.printAndWait(
        '생각해 보면 달긴 하지만, 향을 제외하면 그 「약」은 겉모습만 무시할 경우……',
      );
      await era.printAndWait([
        '아니, ',
        tachyon.sex,
        '이(가) 홍차를 끓이기만 했는데 어떻게 그런 색이 나오는지는 의문이지만, ',
      ]);
      await era.printAndWait([
        '곰곰이 생각하면 그건 ',
        tachyon.sex,
        '이(가) 평소 가장 좋아하는 홍차 맛 아닌가?',
      ]);
      era.println();
      await tachyon.say_and_wait('기대하고 있게나!');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 조금 오기가 섞인 듯한 목소리로 말했다',
      ]);
      await era.printAndWait([
        '그때 ',
        you.get_colored_name(),
        '은(는) 떠올렸다. 예전에 ',
        tachyon.sex,
        '에게 도시락을 내밀었다가 혹평을 들었을 때도 똑같이 오기를 부렸었다',
      ]);
      await era.printAndWait([
        '생각해 보면 그때 ',
        tachyon.sex,
        '은(는) 뭐라고 답했더라?',
      ]);
      era.printButton('「기대할게, 연구자 군」', 1);
      await era.input();
      await tachyon.say_and_wait('……고작 모르모트 주제에');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '의 작은 혼잣말을 듣고 저도 모르게 웃었다',
      ]);
    } else {
      await era.printAndWait([
        '이제는 ',
        tachyon.sex,
        '이(가) 자신을 약물 실험에 쓰는 것만으로는 부족해서 마수를 다른 사람에게까지 뻗으려 하고 있다!',
      ]);
      await era.printAndWait([
        '지금은 홍차 맛 약을 만들려고 하는 중이다. ',
        tachyon.sex,
        '이(가) 색깔까지 홍차처럼 만드는 방법을 찾아내면 정말 큰일이다!',
      ]);
      era.printButton('「타키온!」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 참지 못하고 외쳤다',
      ]);
      era.println();
      await tachyon.say_and_wait([callname, '? 뭘……']);
      era.printButton('「무슨 약이든 좋아, 얼마든지 가져와!」', 1);
      era.printButton('「딱 하나만 약속해 줘」', 2);
      await era.input();
      await tachyon.say_and_wait([
        '어어…… 잠깐, ',
        callname,
        '……자네, 뭔가 오해를……',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 무슨 말을 하려 했지만 ',
        you.get_colored_name(),
        '에게 가차 없이 가로막혔다',
      ]);
      await era.printAndWait(
        '그래…… 무슨 일이 있어도 이것만큼은 지금 말해야 한다',
      );
      era.printButton('「나만이, 영원히, 유일한 모르모트(피험자)야」', 1);
      await era.input();
      await era.printAndWait('그렇다…… 지금의 맛은 이미 홍차에 한없이 가깝다');
      await era.printAndWait([
        '만에 하나 ',
        tachyon.sex,
        '이(가) 남의 음료에, 혹은 더 나아가 식수에 섞는다면…… 상상도 하고 싶지 않다',
      ]);
      await era.printAndWait([
        '그러니 여기서 자신의 입장을 강조해 ',
        tachyon.sex,
        '이(가) 다른 사람을 피험자로 삼겠다는 망상을 포기하게 해야 한다',
      ]);
      era.println();
      await tachyon.say_and_wait('……자네…… 역시 오해하고………… 그래도…… 음……');
      era.println();
      await era.printAndWait([
        '어째서인지 ',
        tachyon.get_colored_name(),
        '은(는) 당황하며 등을 돌렸다. ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.sex,
        '이(가) 돌아서기 전에 새빨개진 얼굴을 보았다',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '……내 모르모트는 처음부터 끝까지 자네 한 마리뿐이라네…… 아무튼 매일 약물 실험을 하러 오게! 모르모트라면 말없이 약을 마시는 게 본업 아닌가!',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 씩씩거리며 가 버렸고, 실험실 뒷정리는 ',
        you.get_colored_name(),
        '혼자 떠맡게 되었다',
      ]);
      era.println();
      await era.printAndWait([
        '……왜 화가 난 걸까.',
        you.get_colored_name(),
        '은(는) 짐작조차 할 수 없었다',
      ]);
      await era.printAndWait([
        '다만……',
        tachyon.sex,
        '이(가) 다른 피험자를 찾는다면, 그 순간 ',
        you.get_colored_name(),
        '의 가슴은 그 가능성만으로도 조금 움츠러들었다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '이(가) 자신의 모르모트는 자신뿐이라고 했을 때, 그 긴장은 흔적도 없이 사라졌다',
      ]);
      era.println();
      await era.printAndWait('설마…… 약에 의존하게 된 걸까');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 황급히 고개를 저으며 그 무서운 가능성을 떨쳐 냈다',
      ]);
    }
    return [];
  },
  /**
   * 聊天 - 喜欢的饮品
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   * @param {PrintedSpan} y_call_c プレイヤーからマンハッタンカフェへの呼び方
   */
  async event_talk_drink(tachyon, you, callname, y_call_c) {
    await tachyon.say_and_wait([callname, '～～뭐 마시겠나?']);
    era.println();
    await era.printAndWait([
      tachyon.get_colored_name(),
      '은(는) 갑자기 짓궂은 미소를 띠며 ',
      you.get_colored_name(),
      '에게 물었다',
    ]);
    await era.printAndWait('아무 이유 없는 친절은 없다');
    await era.printAndWait([
      '그렇다고 대놓고 거절하면 ',
      tachyon.sex,
      '은(는) 틀림없이 화를 낼 것이다',
    ]);
    era.println();
    await tachyon.say_and_wait('어떤가, 뭘 마시겠나?');
    era.println();
    era.print('어쩌지……');
    era.printButton('홍차', 1);
    era.printButton('커피', 2);
    era.printButton('사르사파릴라', 3);
    era.printButton('안 마신다', 4);
    switch (await era.input()) {
      case 1:
        await era.printAndWait('역시 무난하게 홍차가 좋겠다');
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 고개를 끄덕였다. ',
          you.get_colored_name(),
          '이(가) 이것을 고를 줄 알았다는 듯 뒤에서 미리 준비한 홍차를 꺼냈다',
        ]);
        era.drawLine();
        await era.printAndWait([
          '…………',
          you.get_colored_name(),
          '은(는) 가루가 덜 녹은 홍차를 보고 얼굴을 찌푸렸다',
        ]);
        era.println();
        await tachyon.say_and_wait([
          '왜 그러나, ',
          callname,
          '? 내가 직접 우린 차라네. 어서 마시게',
        ]);
        era.println();
        await era.printAndWait([
          '……뭐, 됐다. 홍차를 고른 순간부터 ',
          you.get_colored_name(),
          '도 이런 전개는 각오했어야 한다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 홍차를 단숨에 비웠다',
        ]);
        await era.printAndWait('음, 맛있고 상쾌하다');
        break;
      case 2:
        if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
          await you.say_and_wait([
            '커피가 좋겠다. 요즘 자주 ',
            y_call_c,
            '이(가) 내려 준 커피를 마시고 있다',
          ]);
        } else {
          await you.say_and_wait('커피가 좋겠다. 요즘 일이 바빠서 자주 마신다');
        }
        era.println();
        await tachyon.say_and_wait('왜 그렇게 쓰고 흙탕물 같은 걸 마시는 거지');
        era.println();
        await you.say_and_wait(['그 말, ', y_call_c, '에게 사과해']);
        era.println();
        await tachyon.say_and_wait('뭐, 좋아. 마시고 싶다면 마시게');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 어쩔 수 없다는 듯 뒤에서 미리 준비한 음료를 꺼냈다',
        ]);
        era.drawLine();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 눈앞의 가루가 덜 녹은 짙은 붉은색 액체를 보고, 태클 걸 곳이 너무 많아 말이 안 나온다는 기분을 처음으로 맛보았다',
        ]);
        era.println();
        await you.say_and_wait('우선…… 커피?');
        await tachyon.say_and_wait('……카페인이 많다네. 커피인 셈이지');
        await tachyon.say_and_wait('…………');
        await you.say_and_wait('…………');
        era.println();
        await era.printAndWait([
          '둘 사이에 침묵이 흘렀고, ',
          you.get_colored_name(),
          '은(는) 체념한 채 그것을 마셨다',
        ]);
        break;
      case 3:
        await you.say_and_wait(
          '사르사파릴라가 좋겠다. 흔하진 않지만 확실히 맛있다',
        );
        era.println();
        await tachyon.say_and_wait('허어…… 왜 그런 기묘한 맛을 좋아하는 건가');
        era.println();
        await you.say_and_wait('좋은 걸 어떡해, 안 돼?');
        era.println();
        await tachyon.say_and_wait(
          '………아니, 그건 냄새도 맛도 약이잖나. 그러니까 내 약을 바로 마시면 되지 않나',
        );
        era.println();
        await you.say_and_wait('！？');
        await era.printAndWait([
          '아무래도 ',
          tachyon.sex,
          '은(는) 더 이상 숨길 생각이 없는 것 같다',
        ]);
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 약을 탄 홍차를 옆으로 치우고 흰 가운에서 형광빛 약을 꺼냈다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 형식적으로 두 번 저항했지만 곧바로 단숨에 들이켜게 되었다',
        ]);
        await era.printAndWait(
          '그런데 이 약, 약 맛이 안 난다. 왜 닭고기 달걀덮밥 맛이 나는 거야!?',
        );
        break;
      case 4:
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 거절했다. 저항해도 소용없겠지만 ',
          you.get_colored_name(),
          '은(는) 자신의 반항을 보여 줄 것이다',
        ]);
        era.println();
        await era.printAndWait(
          '이것이야말로, 이것이야말로, 인류의 각오다아아아아아아아아',
        );
        era.println();
        await tachyon.say_and_wait('시끄럽군');
        era.println();
        await era.printAndWait([
          '하지만 각오만으로는 ',
          you.get_colored_name(),
          '의 소우주가 폭발하지 않았다. 인간은 결국 ',
          tachyon.uma_sex_title,
          '에게 이길 수 없다. 오 초 뒤, ',
          you.get_colored_name(),
          '은(는) 얼굴을 붙잡히고 입이 벌려진 채 액체를 들이부어졌다',
        ]);
        era.println();
        await tachyon.say_and_wait('처음부터 이랬으면 수고를 덜었겠군');
    }
    await era.printAndWait('털썩');
    await era.printAndWait([
      '그것은 ',
      you.get_colored_name(),
      '이(가) 정신을 잃고 책상에 엎드리는 소리였다',
    ]);
  },
  /**
   * 日常ランダム - 中庭の営業
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async event_atrium_evil(tachyon, you, callname) {
    await you.say_and_wait('타키온───?');
    era.println();
    await era.printAndWait([
      '오늘은 아침부터 어째서인지 ',
      tachyon.get_colored_name(),
      '의 모습이 보이지 않는다.',
    ]);
    await era.printAndWait([
      '항상 연구에 몰두하던 ',
      tachyon.sex,
      '이(가) 어디로 갔는지 알 수 없었다.',
    ]);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 학원을 찾아다니다 지나가던 학생에게 ',
      tachyon.sex,
      '이(가) 마른 나무 구멍 근처에 있다는 말을 들었다.',
    ]);
    await era.printAndWait([
      '나무 구멍……',
      tachyon.sex,
      '에게도 털어놓고 싶은 고민이 있는 걸까?',
    ]);
    await era.printAndWait(
      '트레이너로서 기분을 읽지 못하다니, 직무 유기나 다름없다.',
    );
    era.drawLine();
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 중정으로 왔다. 수업 시간이라 사람은 적었고, 인적이 드문 틈을 타 마음을 털어놓는 ',
      tachyon.uma_sex_title,
      '몇 명만 있을 뿐이었다.',
    ]);
    await era.printAndWait([
      '사람이 적었기에 오히려 ',
      you.get_colored_name(),
      '은(는) 「그것」을 목격했다.',
    ]);
    await era.printAndWait([
      tachyon.uma_sex_title,
      '에게 다가가 ',
      tachyon.couple_title,
      '의 마음 약한 구석을 파고드는 검은 그림자.',
    ]);
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      '으아아아! 난 약해…… 왜, 아무리 해도 이길 수가 없는 거야……!',
    );
    await tachyon.say_as_unknown_and_wait('힘을…… 원하는가?');
    await you.say_as_passer_by_and_wait(`${tachyon.uma_sex_title}A`, '……힘?');
    await tachyon.say_as_unknown_and_wait(
      '누구보다 강해져 모두를 이길 수 있는 힘……',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}A`,
      '……저, 정말인가요? 대가는요?',
    );
    await tachyon.say_as_unknown_and_wait(
      '후후후…… 알고 싶다면 옛 과학 실험실로 오게나……',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}B`,
      '왜…… 고백할 용기가 안 나는 거야…… 저 둔감한 바보…… 이렇게까지 했는데 아직도 모르다니……!',
    );
    await tachyon.say_as_unknown_and_wait(
      '진심을 솔직하게 전하고 싶은가? 말하지 않아도 상대가 마음을 알아주길 바라나?',
    );
    await you.say_as_passer_by_and_wait(
      `${tachyon.uma_sex_title}B`,
      '다, 당신은……!',
    );
    await tachyon.say_as_unknown_and_wait(
      '옛 과학 실험실로 오게. 원하는 것은 전부 손에 넣을 수 있다네……',
    );
    await you.say_and_wait('……저 녀석, 뭐 하는 거야', true);
    await era.printAndWait([
      '마른 나무 구멍 옆에서 사람을 홀리는 악마처럼 계속 속삭이는 것은 틀림없이 ',
      you.get_colored_name(),
      '의 담당 ',
      tachyon.uma_sex_title,
      ' ',
      tachyon.get_colored_name(),
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은(는) 나무 구멍에 고민을 털어놓는 이들 앞에 나타나 타락을 유혹하는 말을 늘어놓았다. 신화 속 악마 그 자체였다',
    ]);
    await era.printAndWait([
      '그때 ',
      tachyon.sex,
      '은(는) ',
      you.get_colored_name(),
      '도 알아보았다',
    ]);
    await tachyon.say_and_wait([
      callname,
      ', 마침 잘 왔군. 손님 맞을 준비를 하세',
    ]);
    await you.say_and_wait('손님?');
    await tachyon.say_and_wait([
      '물론 저기 고민에 빠진 ',
      tachyon.uma_sex_title,
      '들이지.',
    ]);
    await tachyon.say_and_wait(
      '참, 예전의 나는 실례를 저질렀군. 나무 구멍 따위 필요 없다고 생각했으니 말이야.',
    );
    await tachyon.say_and_wait([
      '지금 생각해 보니 의지가 약한 ',
      tachyon.uma_sex_title,
      '을(를) 알아서 골라 주는, 내게 딱 맞는 장소 아닌가.',
    ]);
    await era.printAndWait(
      '의지가 약하기에 외부의 유도에 따라 마음을 털어놓는다.',
    );
    await era.printAndWait([
      '의지가 약하기에 목적을 위해서라면 악마(타키온)에게 영혼을 팔기 쉽다.',
    ]);
    await era.printAndWait([
      '어떤 의미에서 불순한 자들의 눈에는 이곳에 오는 ',
      tachyon.uma_sex_title,
      '들이야말로 가장 노리기 쉬운 순진한 아이들일 것이다.',
    ]);
    await era.printAndWait([
      '하지만 ',
      tachyon.get_colored_name(),
      '이라면 ',
      tachyon.couple_title,
      '을(를) 해치지는 않을……까?',
    ]);
    await tachyon.say_and_wait(['그건 그렇고, ', callname, ', 서두르세.']);
    await era.printAndWait('갑자기 왜 저러지…… 양심이 찔리는 건 아닐 테고.');
    await tachyon.say_and_wait(
      '자네에게 들켰다는 건 학생회 녀석들도 곧 올 거란 뜻이지. 잔소리를 듣기 전에 가세!',
    );
    await era.printAndWait([
      '…………가끔은 ',
      tachyon.sex,
      '도 붙잡혀 잔소리 좀 들어도 좋을 것 같다',
    ]);
  },
  /**
   * 日常ランダム - Plan A 屋上
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async event_rooftop_a(tachyon, you, callname) {
    await tachyon.say_and_wait('흐흥흐흥～～');
    await era.printAndWait([
      '오늘도 ',
      you.get_colored_name(),
      '은(는) 도시락을 가지고 ',
      tachyon.get_colored_name(),
      '와(과) 옥상에서 점심을 먹었다.',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은(는) 산들바람을 즐기며 기쁜 듯 도시락의 닭튀김을 집었다.',
    ]);
    await era.printAndWait('갑자기 산들바람이 순식간에 강풍으로 바뀌었다.');
    await tachyon.say_and_wait('아');
    await era.printAndWait(
      '젓가락에 집혀 있던 닭튀김이 거세진 바람에 땅으로 떨어졌다',
    );
    await era.printAndWait('아아…… 아깝다');
    await era.printAndWait('그래도 괜찮다. 도시락에는 아직……');
    await era.printAndWait([
      '그때 ',
      you.get_colored_name(),
      '은(는) ',
      tachyon.get_colored_name(),
      '이(가) 떨어진 닭튀김을 그대로 집는 것을 보았다',
    ]);
    await tachyon.say_and_wait('그럼, 잘 먹겠──');
    era.printButton('「잠깐!?」', 1);
    await era.input();
    await tachyon.say_and_wait([
      '음? 무슨 문제 있나, ',
      callname,
      '. 삼 초 규칙을 모르나?',
    ]);
    await era.printAndWait([
      '아니, 왜 ',
      tachyon.get_colored_name(),
      '이(가) 삼 초 규칙 같은 근거 없는 말을 믿는지는 둘째치고, 방금은 누가 봐도 삼 초가 넘었잖아!?',
    ]);
    await tachyon.say_and_wait([
      '……하아, ',
      callname,
      ', 과학적으로 말하자면 ',
      tachyon.uma_sex_title,
      '의 위장은 그런 걸로 탈이 날 만큼 연약하지 않다네',
    ]);
    await you.say_and_wait('그런 문제가 아니잖아!?');
    await tachyon.say_and_wait('아무튼 나는 닭튀김을 먹겠어!');
    await you.say_and_wait('도시락에 아직 있잖아!?');
    await era.printAndWait([
      you.get_colored_name(),
      '이(가) 고집을 부린 끝에 ',
      tachyon.get_colored_name(),
      '이(가) 떨어진 닭튀김을 먹는 것은 막았다',
    ]);
    await era.printAndWait([
      '그 대가로 오후 내내 ',
      tachyon.sex,
      '은(는) 원망스러운 눈으로 ',
      you.get_colored_name(),
      '을(를) 보았다',
    ]);
    await era.printAndWait([
      '밤에 잠자리에 들 때까지도 ',
      you.get_colored_name(),
      '의 귀에는 ',
      tachyon.get_colored_name(),
      '의 원망스러운 비명이 남아 있었다',
    ]);
    await tachyon.say_and_wait('내 닭튀김……');
    await you.say_and_wait(
      ['……내일 또 ', tachyon.sex, '에게 닭튀김을 만들어 주자'],
      true,
    );
  },
  /**
   * 日常ランダム - Plan B 屋上
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} you プレイヤー
   */
  async event_rooftop_b(tachyon, coffee, you) {
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) ',
      tachyon.sex,
      '을(를) 옥상으로 데려가 도시락을 먹으며 기분 전환을 시켜 주려 했다',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은(는) 기쁜 듯 ',
      you.get_colored_name(),
      '이(가) 들려주는 최근 ',
      coffee.get_colored_name(),
      '의 트레이닝 변화를 듣고 가끔 자신의 의견을 덧붙였다',
    ]);
    await era.printAndWait('그동안 자신의 이야기는 일절 하지 않았다');
    await era.printAndWait([
      '트레이닝에 나설 수 없는 ',
      tachyon.sex,
      '에게는, 아무리 시간을 내어 곁에 있어 주려 해도 다른 ',
      tachyon.uma_sex_title,
      '의 트레이닝을 하는 동안만큼은 곁에 있어 줄 수 없다',
    ]);
    await tachyon.say_and_wait(['요즘 ', tachyon.sex, '은(는) 어떤가']);
    era.printButton('「……」', 1);
    era.printButton('「……너는? 요즘 어때?」', 2);
    if ((await era.input()) === 1) {
      await era.printAndWait([
        coffee.get_colored_name(),
        '의 이야기가 끝나자 갑자기 침묵이 내려앉았고, 식사는 곧 끝났다',
      ]);
    } else {
      await tachyon.say_and_wait('나? ……뭐, 그렇지. 특별한 일은 없어.');
      await era.printAndWait([tachyon.sex, '은(는) 건성으로 대답했다']);
      await era.printAndWait([
        tachyon.sex,
        '와(과) 오래 함께해 온 ',
        you.get_colored_name(),
        '은(는) 알 수 있었다. ',
        tachyon.sex,
        '은(는) 얼버무리는 게 아니라, 정말 자신의 생활에는 이야기할 만한 화제가 없다고 생각하고 있었다',
      ]);
      await era.printAndWait([
        '그렇게 생각하니 ',
        you.get_colored_name(),
        '은(는) 가슴이 아팠다.',
      ]);
    }
  },
  /**
   * 日常ランダム - 幼児退行したタキオン
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {CharaTalk} coffee マンハッタンカフェ
   * @param {CharaTalk} bakushin サクラバクシンオー
   * @param {CharaTalk} urara ハルウララ
   * @param {CharaTalk} pocket ジャングルポケット
   * @param {CharaTalk} you プレイヤー
   * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
   */
  async event_river(tachyon, coffee, bakushin, urara, pocket, you, callname) {
    await tachyon.say_and_wait([callname, '! 봐! 오리야!']);
    await tachyon.say_and_wait('그리고 저거! 나비!');
    await tachyon.say_and_wait('여기 경치 예쁘다!');
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 어이없어하면서도 강둑을 뛰어다니는 ',
      tachyon.get_colored_name(),
      '을(를) 바라보았다.',
    ]);
    await era.printAndWait([
      '천진난만한 표정은 ',
      tachyon.get_colored_name(),
      '이라기보다는 ',
      urara,
      '나(이나) ',
      bakushin,
      '같은 ',
      tachyon.uma_sex_title,
      '에 가까웠다. 눈 속 블라인드마저 벚꽃잎으로 바뀐 듯했다',
    ]);

    await era.printAndWait([
      '발단은 언제나처럼 ',
      tachyon.get_colored_name(),
      '의 약이었다',
    ]);
    await tachyon.say_and_wait('지능을 낮추고 스피드를 높이는 약이라네');
    await era.printAndWait([
      '전혀 수지에 맞지 않는 약처럼 들리지만 ',
      tachyon.get_colored_name(),
      '은(는) 망설임 없이 그것을 마셨다',
    ]);
    await era.printAndWait([
      '그 결과 ',
      tachyon.get_colored_name(),
      '은(는) ',
      coffee,
      '나(이나) ',
      pocket,
      '등과의 모의 레이스에서 손쉽게 이겼다. 하지만 그 대가는……',
    ]);
    await tachyon.say_and_wait([callname, callname, '! 봐! 달팽이, 느려!']);
    await era.printAndWait([
      '뭐, 뇌를 쉬게 해 주는 행동이라고 못 할 것도 없다.',
      you.get_colored_name(),
      '은(는) 지금의 지나치게 순진한 ',
      tachyon.sex,
      '이(가) 사고를 당하거나…… 속지 않도록 ',
      tachyon.get_colored_name(),
      '에게서 눈을 떼지 않았다',
    ]);
    era.drawLine();
    await era.printAndWait([
      '하루 종일 놀고 나니 마침내 ',
      tachyon.get_colored_name(),
      '도 지쳤는지 걸음이 비틀거렸다',
    ]);
    await era.printAndWait([
      tachyon.sex,
      '은(는) ',
      you.get_colored_name(),
      '에게 두 팔을 뻗었다',
    ]);
    await tachyon.say_and_wait([callname, '～～업어 줘～～']);
    await era.printAndWait([
      you.get_colored_name(),
      '은(는) 하루 종일 실컷 논 초광속의 ',
      tachyon.sex_code - 1 ? '공주님' : '왕자님',
      '을(를) 업었다. ',
      tachyon.sex,
      '는 정말 피곤했던 모양이다. ',
      you.get_colored_name(),
      '의 등에 올라타자마자 잠들어 버렸다',
    ]);
    await era.printAndWait(
      '자신도 하루 동안 충분히 지쳤다. 돌아가면 쉬어야겠다',
    );
    await tachyon.say_and_wait([callname, '……고마워……']);
    await you.say_and_wait('……');
    await era.printAndWait('가끔은 이런 하루도 나쁘지 않을지 모른다.');
  },
  event_church: (() => {
    const title = '신 포획 작전';
    /**
     * 日常ランダム - 神社で猫を捕まえる
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンからプレイヤーへの呼び方
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        '오늘 ',
        you.get_colored_name(),
        '은(는) ',
        tachyon.get_colored_name(),
        '와(과) 신사로 향하는 중이다……',
      ]);
      era.println();
      await tachyon.say_and_wait([
        callname,
        '! 어서! 『신님』을 기다리게 해서는 안 되지!',
      ]);
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 신이 나서 신사의 돌계단을 뛰어 올라가다가 뒤돌아 불렀다',
      ]);
      await era.printAndWait([
        '인간의 몸으로 ',
        tachyon.uma_sex_title,
        '을(를) 따라잡을 가능성은 둘째치고, 물리적으로도 불가능한 데다 ',
      ]);
      await era.printAndWait([
        '심정적으로도 ',
        you.get_colored_name(),
        '은(는) 앞으로 할 짓을 죽어도 거절하고 싶었다. 하지만 담당의 고집에 ',
        you.get_colored_name(),
        '은(는) 쓴웃음을 지으며 따라가는 수밖에 없었다',
      ]);
      era.println();
      await era.printAndWait('발단은…… 복잡해 보이지만 사실 단순하다');
      await era.printAndWait('한마디로 말하자면');
      era.println();
      await tachyon.say_and_wait([
        callname,
        ', 알고 있겠지. 나는 원래 영혼이나 귀신 같은 존재를 믿지 않는다네',
      ]);
      await tachyon.say_and_wait(
        '하지만 확인도 않고 부정하는 것은 연구자의 태도가 아니지',
      );
      await you.say_and_wait('응, 응');
      await tachyon.say_and_wait(
        '그럼 어떻게 검증할 것인가. 사실 예전부터 이런 설이 있었다네',
      );
      await tachyon.say_and_wait(
        '소위 귀신이란 자연계에 떠도는 에너지 덩어리에 불과하다는 거야',
      );
      await tachyon.say_and_wait(
        '편향된 주장일 수는 있지만, 이것을 바탕으로 검증은 할 수 있지',
      );
      await you.say_and_wait('응, 응');
      era.println();
      await tachyon.say_and_wait(
        '그러니 이러쿵저러쿵해서, 신사에 가서 신을 잡아 보세!',
      );
      await you.say_and_wait('응…… 응?');
      era.println();
      await era.printAndWait(
        '만약 보통 인간은 감지하거나 알아차릴 수 없는 무언가가 정말 존재한다면, ',
      );
      await era.printAndWait('그 존재 자체에도 에너지가 필요하다');
      await era.printAndWait(
        '그러니 우선 비정상적인 에너지 소비를 탐지할 수 있는 곳을 기준으로 장소를 고른다.',
      );
      await era.printAndWait('하지만 도시 안에는 잡음이 너무 많다');
      await era.printAndWait('그에 비하면 조사하기에는 외딴 신사가 가장 좋다');
      await era.printAndWait(
        '게다가 신이라고 부를 정도라면 에너지 수준은 보통 유령과는 다를 테니, ',
      );
      await era.printAndWait(
        '신사에서조차 소위 신을 잡을 수 없다면 그런 것은 존재하지 않는다고 봐도 좋겠지………',
      );
      era.println();
      await era.printAndWait('요컨대 대략 이런 불경한 이유로');
      await era.printAndWait(['두 사람은 오늘 인적 드문 외딴 신사에 왔다']);
      await you.say_and_wait(
        '나무삼, 세 여신님 부디 너그러이 이런 사소한 일은 신경 쓰지 말아 주세요, 제발 부탁드립니다, 나무아미타불, 아멘',
        true,
      );
      era.println();
      await era.printAndWait([
        '내키지 않는 마음으로 ',
        you.get_colored_name(),
        '은(는) 어떻게든 신사까지 올라왔다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 죽을힘을 다해 간청한 끝에 ',
        tachyon.get_colored_name(),
        '은(는) 마지못해 ',
        tachyon.sex,
        '의 이상한 에너지 탐지기를 쓰기 전에 먼저 참배하여 경의를 표하겠다고 약속했다',
      ]);
      era.println();
      await era.printAndWait([
        '그렇게 두 사람은 합장하고 사당에 절을 올렸다……',
      ]);
      await tachyon.say_and_wait('좋아! 그럼 준비는 끝났으니 시작해 보세……');
      era.println();
      await era.printAndWait([
        '참배가 끝나자마자 ',
        tachyon.get_colored_name(),
        '은(는) 옆에 두었던 에너지 탐지기를 집어 들어 사당 쪽을 향해 측정하기 시작했다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 곁에서 쓴웃음을 지으며 신님께 아이의 장난을 부디 눈감아 달라고 빌었다',
      ]);
      era.println();
      if (Math.random() < 0.5) {
        await tachyon.say_and_wait([
          '어어…… 어어……! 잠깐!',
          callname,
          '! 여길 보게, 뭔가 있는 것 같아………',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '의 부름에 황급히 달려갔지만, ',
          tachyon.sex,
          '은(는) 어느 한 지점을 포착한 뒤 갑자기 움직이지 않고 있었다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 급히 어깨를 두드려 무사한지 확인하자 ',
          tachyon.sex,
          '은(는) 갑자기 ',
          you.get_colored_name(),
          '을(를) 땅에 밀어 넘어뜨렸다',
        ]);
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '은(는) ',
          you.get_colored_name(),
          '의 두 손을 땅에 눌렀고, ',
          you.get_colored_name(),
          '은(는) 반듯이 누운 채 자신의 위에 올라탄 ',
          tachyon.get_colored_name(),
          '을(를) 보았다',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '의 눈은 차가웠지만 그 안에는 열기가 숨은 듯했다',
        ]);
        await era.printAndWait(
          '먹잇감을 붙잡고 이제 막 먹어 치우려는 고양잇과 동물 같았다',
        );
        era.println();
        await you.say_and_wait(
          [
            '정말 천벌인가…… 아니, 왜 천벌을 받는 건 나고 ',
            tachyon.sex,
            '이(가) 아닌 거야!?',
          ],
          true,
        );
        era.println();
        await era.printAndWait(
          '하고 싶은 말은 산더미였지만 무력한 체념에 잠겼다',
        );
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그저 ',
          tachyon.sex,
          '의 다음 행동을 지켜볼 수밖에 없었다',
        ]);
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '이(가) 저항할 뜻을 잃었다고 확인하자 ',
          tachyon.sex,
          '은(는) 한 손을 놓고 ',
          you.get_colored_name(),
          '의 셔츠를 풀기 시작했다',
        ]);
        era.println();
        await you.say_and_wait('아아, 이걸로 트레이너 실격이구나', true);
        await era.printAndWait([
          tachyon.sex,
          '은(는) ',
          you.get_colored_name(),
          '의 상의를 벌렸다. 그리고……',
        ]);
        era.println();
        await tachyon.say_and_wait('냐아～～～');
        era.println();
        await era.printAndWait([
          tachyon.sex,
          '은(는) 아기 고양이 같은 소리를 내며 고양이처럼 ',
          you.get_colored_name(),
          '의 품으로 파고들어 기분 좋게 가르랑거렸다',
        ]);
        await era.printAndWait([
          '물론 아무리 움직임이 고양이 같아도 ',
          tachyon.sex,
          '의 몸이 ',
          tachyon.uma_sex_title,
          '의 몸이라는 사실은 변하지 않는다',
        ]);
        await era.printAndWait([
          '아기 고양이처럼 셔츠 안으로 들어가려는 생각이겠지만, ',
          you.get_colored_name(),
          '의 눈에는 ',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '이(가) 하는 짓은 상의를 벌린 뒤 ',
          you.get_colored_name(),
          '의 맨가슴에 누워 몸을 비비는 것으로 보일 뿐이었다',
        ]);
        era.println();
        await tachyon.say_and_wait('냐아～～냐아～냐');
        era.println();
        await era.printAndWait([
          '그렇게 닿는 방식이 조금 마음에 들지 않는지 ',
          tachyon.sex,
          '은(는) 방법을 바꿔 ',
          you.get_colored_name(),
          '의 두 손을 끌어 올리고, ',
          you.get_colored_name(),
          '의 두 손을 ',
          tachyon.sex,
          '의 배 위에 포갰다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 틈을 보아 일어나려 했지만, 움직임을 알아차리고 짓누르는 무게에 다시 꼼짝 못 하게 되었다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 그저 ',
          tachyon.sex,
          '이(가) 자신의 손을 끌어다 안는 자세로 만들도록 내버려 두었다',
        ]);
        await era.printAndWait([
          tachyon.sex,
          '은(는) ',
          you.get_colored_name(),
          '의 손을 고정한 뒤 몸을 빙글 돌려 뺨을 ',
          you.get_colored_name(),
          '의 가슴에 딱 붙이고 만족스러운 소리를 냈다',
        ]);
        era.printButton('「……타키온?」', 1);
        await era.input();
        await era.printAndWait([
          '아기 고양이는 답하지 않았다. 이윽고 ',
          tachyon.sex,
          '의 숨소리가 고르게 바뀌더니……',
        ]);
        era.println();
        await tachyon.say_and_wait('쿨쿨……냐……쿨쿨……');
        era.println();
        await era.printAndWait([
          '그렇게 ',
          you.get_colored_name(),
          '의 가슴 위에서 잠들어 버렸다',
        ]);
        await era.printAndWait([
          '지금이라면 ',
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '을(를) 떼어 낼 수 있겠지만……',
        ]);
        era.println();
        await era.printAndWait([
          '지금 ',
          tachyon.get_colored_name(),
          '의 모습은 누가 봐도 정상이 아니다',
        ]);
        await era.printAndWait('하지만 이만큼 휘둘렸으니');
        await era.printAndWait('잠든 지금, 보상을 조금 받아도 괜찮겠지?');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '을(를) 안은 팔을 살짝 풀고 한 손을 위로 뻗었다…………',
        ]);
        era.println();
        await era.printAndWait([
          '부드럽다, 기분 좋다…… 그렇구나, 이게 바로 ',
          tachyon.uma_sex_title,
          '의………',
        ]);
        era.println();
        await era.printAndWait('귀구나');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 아기 고양이의 머리를 다정하게 쓰다듬으며 가끔 머리 위로 늘어진 귀를 주물렀다. 부드럽고 탄력 있는 복슬복슬함에 자꾸만 손이 갔다',
        ]);
        era.println();
        await tachyon.say_and_wait('냐아……가르릉……냐냐');
        era.println();
        await era.printAndWait([
          '꿈속의 아기 고양이도 귀여운 소리를 내며 ',
          you.get_colored_name(),
          '의 손을 재촉하는 것 같았다',
        ]);
        await era.printAndWait(
          '큰일인데…… 이 복슬복슬함에…… 빠져들 것 같아………',
        );
        era.println();
        await era.printAndWait([
          '어느새 ',
          you.get_colored_name(),
          '도 꿈속으로 빠져들었다…………',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('아아아아아!!! 내 장치가아아아아아!!!');
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) 비명을 지르는 ',
          tachyon.get_colored_name(),
          '을(를) 보며 쓴웃음을 지었다',
        ]);
        await era.printAndWait([
          '방금 무슨 일이 있었는지는 모르겠다. 두 사람은 신사에서 갑자기 정신을 잃었고, 다시 눈을 떴을 때 ',
          tachyon.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '이(가) 비싼 값에 샀다는 장치가 작동하지 않는다는 것을 알아차렸다',
        ]);
        await era.printAndWait(
          '이상하게도 두 사람의 기억은 참배하던 순간에서 멈춰 있었다. 그 뒤에 무슨 일이 있었는지는 전혀 떠오르지 않았다',
        );
        await era.printAndWait([
          '그런데 어째서인지 ',
          you.get_colored_name(),
          '은(는) 몸이 개운했다. 정신을 잃기 전에 무언가로 스트레스를 푼 것 같은 기분이었다',
        ]);
        await era.printAndWait([
          '……',
          you.get_colored_name(),
          '은(는) 눈을 떴을 때 상의 단추가 전부 풀려 있었다는 것을 떠올렸다. 정신을 잃기 전에 대체 무슨 일이 있었던 걸까',
        ]);
        await era.printAndWait(
          '……역시 귀신 같은 것은 어느 정도 믿어 두는 편이 좋겠다',
        );
        era.println();
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.get_colored_name(),
          '을(를) 데리고 신사를 떠났다',
        ]);
      } else {
        await era.printAndWait([
          you.get_colored_name(),
          '은(는) ',
          tachyon.sex,
          '이(가) 탐지기를 들고 신사 곳곳을 쑤시는 모습을 지켜보았다. 이게 효과가 있는지도 모르겠다',
        ]);
        era.drawLine();
        await tachyon.say_and_wait('…………역시 아무것도 없군');
        era.println();
        await era.printAndWait([
          tachyon.get_colored_name(),
          '은(는) 실망한 얼굴로 말했다',
        ]);
        await era.printAndWait([
          you.get_colored_name(),
          '도 ',
          tachyon.sex,
          '이(가) 왜 그렇게 낙담하는지 알 수 없었다. 귀신이 없다는 걸 증명했으니 ',
          tachyon.sex,
          '에게는 좋은 일 아닌가?',
        ]);
        await era.printAndWait([
          '영문을 모른 채 두 사람은 그대로 산을 내려가 돌아왔다',
        ]);
      }
    };
    f.title = title;
    return f;
  })(),
  event_station: (() => {
    const title = '비밀 폭로';
    /**
     * 日常ランダムイベント - 駅前デートでネタバラシ
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      await era.printAndWait([
        '오늘은 ',
        you.get_colored_name(),
        '와(과) ',
        tachyon.get_colored_name(),
        '이(가) 함께 데이트하러 나가는 날이다',
      ]);
      await era.printAndWait([
        '오늘 상점가에서는 마술 퍼레이드가 열린다고 한다. 그래서 겸사겸사 ',
        tachyon.sex,
        '을(를) 데리고 가 구경시켜 줄 생각이었다',
      ]);
      await era.printAndWait('그런데……');
      era.println();
      await tachyon.say_and_wait('저 마술봉은 소매 안에 있다네');
      await tachyon.say_and_wait(
        '저 비둘기는 처음부터 끼워 숨겨 둔 것뿐이야. 별것 아니군',
      );
      await tachyon.say_and_wait(
        '마그네슘이 산화하며 타는 거라네. 연구실에서도 보여 줄 수 있어',
      );
      era.println();
      await era.printAndWait([
        '마술의 속임수는 매번 ',
        tachyon.get_colored_name(),
        '이(가) 크지도 작지도 않게, 주변에는 다 들리는 목소리로 즉시 폭로해 버렸다',
      ]);
      await era.printAndWait([
        '질렸다면 모를까, 말을 마칠 때마다 뜨거운 눈으로 ',
        you.get_colored_name(),
        '을(를) 바라보는 것이 칭찬받고 싶은 모양이었다',
      ]);
      await era.printAndWait([
        '칭찬받고 싶어 하는 강아지인가……',
        you.get_colored_name(),
        '은(는) 머릿속에 떠오른 모습을 떨쳐 냈다',
      ]);
      await era.printAndWait([
        '아무튼 두 사람을 노려보는 마술사가 인내심을 잃고 무대에서 내려와 주먹을 날리기 전에 ',
        tachyon.get_colored_name(),
        '을(를) 데리고 자리를 뜨자',
      ]);
      era.println();
      await tachyon.say_and_wait('에～～벌써 가는 건가?');
      era.println();
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '은(는) 아직 불만스러워 보였다',
      ]);
      await era.printAndWait([
        tachyon.sex,
        '의 관심을 돌릴 것이 필요하다…… 찾았다!',
      ]);
      era.printButton('「색이 변하는 채소 주스?」', 1);
      await era.input();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 놀란 척하며 가판대의 대표 상품을 소리 내어 읽고 ',
        tachyon.get_colored_name(),
        '의 관심을 돌리려 했다',
      ]);
      await era.printAndWait(
        '주인이 손에 든 보라색 액체를 컵에 붓자 액체는 순식간에 빨간색으로 바뀌었다',
      );
      await era.printAndWait(
        '……중학교 교과서에 나오는 산염기 반응, 적양배추 즙 아닌가',
      );
      await era.printAndWait([
        '상관없다. ',
        tachyon.get_colored_name(),
        '의 관심을 끌 수만 있다면 연기를 조금 해야겠다',
      ]);
      era.printButton('「저거 굉장한데!」', 1);
      await era.input();
      await era.printAndWait([
        '아니나 다를까, ',
        you.get_colored_name(),
        '의 과장된 목소리가 ',
        tachyon.get_colored_name(),
        '의 관심을 마술에서 돌려놓았다',
      ]);
      await tachyon.say_and_wait('………………');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 양배추 즙의 색이 변하는 모습을 보며 무언가 생각하는 듯했다',
      ]);
      await era.printAndWait([
        '이상하다. ',
        tachyon.get_colored_name(),
        '은(는) 본 적이 없는 걸까?',
      ]);
      await era.printAndWait([
        '……아니, 설마 그럴 리가. 가장 기본적인 산염기 지시약이다. ',
        tachyon.get_colored_name(),
        '이(가) 모를 리 없다',
      ]);
      await era.printAndWait([
        '하지만 만약 ',
        tachyon.sex,
        '이(가) 정말 접해 본 적이 없다면……',
      ]);
      era.printButton('「왠지 신기……하네?」', 1);
      await era.input();
      await era.printAndWait('안 되겠다. 더는 칭찬할 말이 떠오르지 않는다');
      await era.printAndWait([
        '하지만 ',
        tachyon.get_colored_name(),
        '의 관심은 이미 완전히 이쪽으로 옮겨졌다',
      ]);
      await era.printAndWait('이제 괜찮겠지……');
      era.println();
      await tachyon.say_and_wait('…………이런 것');
      era.println();
      await era.printAndWait('어');
      era.println();
      await tachyon.say_and_wait(
        '…………이런 걸 칭찬할 바에는 나를 칭찬해 주면 안 되나?',
      );
      era.println();
      await era.printAndWait([tachyon.get_colored_name(), '은(는) 화가 났다']);
      await era.printAndWait([
        '이유는 모르겠지만 ',
        tachyon.get_colored_name(),
        '은(는) 분명 화가 났다',
      ]);
      era.println();
      await tachyon.say_and_wait(
        '색이 더 많은 약도, 빛나는 약도, 나는 만들 수 있는데……',
      );
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '은(는) 영문도 모르게 울었다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 황급히 ',
        tachyon.sex,
        '을(를) 달랠 수밖에 없었다',
      ]);
      era.println();
      await era.printAndWait([
        '다음 날 ',
        tachyon.get_colored_name(),
        '은(는) 256RGB 색상을 담은 약을 만들어 보였다',
      ]);
      await era.printAndWait(
        '……어떻게 256색을 하나의 약 안에 나누어 배치한 걸까',
      );
      await era.printAndWait('모르모트는 저도 모르게 의문을 품었다');
    };
    f.title = title;
    return f;
  })(),
  slave_end: (() => {
    const title = '돈의 대가';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名前
     */
    const f = async (tachyon, you, callname) => {
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 마시다 만 위스키를 손에 든 채 다섯 번째 술집에서 비틀거리며 나왔다',
      ]);
      await era.printAndWait(
        '밤은 여전히 어둡다. 문란한 밤은 아직 끝나지 않았다',
      );
      era.println();
      await era.printAndWait('끝났군…… 그럼 다음에는 어디로 가야 하지');
      await era.printAndWait('비틀비틀 걷는 온몸에서 술 냄새가 풍겼다');
      await era.printAndWait([
        '행인들이 코를 막고 멀어지는 모습은 ',
        you.get_colored_name(),
        '이(가) 일부러 만들어 내려던 광경이었다',
      ]);
      era.println();
      await era.printAndWait('둘, 셋, 다섯……… 스물셋, 스물아홉. ');
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 머릿속으로 조용히 숫자를 셌다',
      ]);
      await era.printAndWait([
        '소수를 세며 마음을 가라앉히는 것이 아니다. 오늘 밤 ',
        you.get_colored_name(),
        '이(가) 마신 술의 양이다',
      ]);
      await era.printAndWait('합계 금액은…… 일곱 자리…… 아니면 여덟 자리인가?');
      await era.printAndWait([
        '놀라운 숫자지만 그것은 ',
        you.get_colored_name(),
        '이(가) 하룻밤 동안 마신 술값에 불과했다',
      ]);
      await era.printAndWait(
        '최고급 술집에서 비싼 것만 골라 휩쓸고 다닌 결과는 보통 사람이라면 상상하고 싶지도 않을 금액이었다',
      );
      era.println();
      await era.printAndWait('하지만……');
      await era.printAndWait('소용없다. 전혀 효과가 없다');
      await era.printAndWait([
        '가격도 도수도 상관없다. 오늘 밤 마신 술은 ',
        you.get_colored_name(),
        '을(를) 화장실에 몇 번 보내 놓은 것 말고는 아무런 쓸모가 없었다',
      ]);
      await era.printAndWait([
        '정신은 더없이 또렷하다. 너무 또렷해서 ',
        you.get_colored_name(),
        '은(는) 이틀 전 일이 떠올랐다',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('돈을 빌리고 싶나?');
      await tachyon.say_as_unknown_and_wait(['좋아, ', callname]);
      await tachyon.say_as_unknown_and_wait(
        '다만 늘 하던 대로라네…… 오늘 실험은 신경 억제제의 제거에 관한 것이야',
      );
      await tachyon.say_as_unknown_and_wait('그럼 실험을 시작하지');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 위스키를 입에 그대로 들이부었다',
      ]);
      await era.printAndWait([
        '보통 사람은 한 모금만 마셔도 취할 독한 술이 ',
        you.get_colored_name(),
        '의 머릿속을 한층 더 맑게 했다',
      ]);
      await era.printAndWait(
        '술로 시름을 잊는 것이 알코올로 신경을 마비시켜 현실에서 도망치는 일이라면, 그 마비조차 허락되지 않는 자신은 세상에서 가장 비참한 술꾼일 것이다',
      );
      era.println();
      await era.printAndWait(
        '번화한 밤거리에는 자신 같은 술꾼이 얼마든지 있다',
      );
      await era.printAndWait([
        '비틀거리는 사람들을 보며 ',
        you.get_colored_name(),
        '은(는) 진심으로 부러워했다',
      ]);
      era.println();
      await era.printAndWait([
        '걷고 있는데 눈앞에 갑자기 빛이 번쩍였고, ',
        you.get_colored_name(),
        '은(는) 저도 모르게 눈을 가늘게 떴다',
      ]);
      await era.printAndWait(
        '눈을 찌르는 것은 조명뿐만이 아니다. 번쩍이는 장식과 하룻밤 사이 부자가 되려는 숱한 꿈이 그곳에 있었다',
      );
      await era.printAndWait(
        '도박과 술, 술과 도박. 예로부터 이 둘은 떨어질 수 없는 사이였다',
      );
      await era.printAndWait(
        '술에 절은 주당들이 얼근히 취한 김에 도박에 손을 대는 것도 이제는 정해진 순서 같았다',
      );
      era.println();
      await era.printAndWait([
        '하지만 취객 차림의 ',
        you.get_colored_name(),
        '은(는) 도박장에는 눈길도 주지 않고 앞만 바라보았다',
      ]);
      await era.printAndWait('도박장의 판돈이 시시해서 외면한 것이 아니다───');
      await era.printAndWait([
        '이곳 도박장에서는 ',
        tachyon.uma_sex_title,
        '의 레이스에 돈을 거는, 발각되면 두 번 다시 장사하지 못할 짓까지 한다고 한다',
      ]);
      await era.printAndWait([
        you.get_colored_name(),
        '이(가) 결벽해서도 아니다──이런 시간에 이런 거리를 배회하는 사람이 얼마나 깨끗할 수 있겠는가',
      ]);
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 다시 한 모금 마시고 과거를 떠올렸다',
      ]);
      era.println();
      await tachyon.say_as_unknown_and_wait('돈을 빌리고 싶나?');
      await tachyon.say_as_unknown_and_wait(['좋아, ', callname]);
      await tachyon.say_as_unknown_and_wait(
        '다만 늘 하던 대로라네…… 오늘 실험은 뇌 보상 회로의 조절과 억제야',
      );
      await tachyon.say_as_unknown_and_wait('그럼 실험을 시작하지');
      era.println();
      await era.printAndWait('평범한 직장인의 연봉보다 많은 돈을 따도');
      await era.printAndWait('하룻밤에 바닷가 별장 한 채를 날려도');
      await era.printAndWait(
        '감정은 조금도 움직이지 않고 미간에 주름 하나 잡히지 않는다',
      );
      await era.printAndWait('이런 상태로 도박을 해서 무슨 재미가 있겠는가');
      era.println();
      await era.printAndWait(
        '도박장 안에서 자신만 세상 밖에 홀로 떨어진 것 같다',
      );
      await era.printAndWait('예전의 자신은 왜 여기에 빠졌는지 이해할 수 없다');
      await era.printAndWait('아니, 이해는 한다. 하지만 안 되는 것은 안 된다');
      await era.printAndWait('깨어난 사람이 꿈으로 돌아갈 수 없는 것과 같다');
      era.println();
      await tachyon.say_as_passer_by_and_wait(
        '立ちんぼの少女',
        'お客さん、ひとりは寂しそうですよ……ご一緒に、春のひとときを過ごしませんか？♡',
      );
      era.println();
      await era.printAndWait([
        'いつの間にか、華やかな賭場も後ろに捨て、風俗街へ入った ',
        you.get_colored_name(),
        ' のもとへ、夜の女たちの柔郷が訪れた',
      ]);
      await era.printAndWait(
        'このまま彼女たちの肢体に沈めたら、きっとこの上なく幸せだろう……',
      );
      era.println();
      await tachyon.say_as_unknown_and_wait('お金を借りたいですの？');
      await tachyon.say_as_unknown_and_wait(['いいですわ、', callname]);
      await tachyon.say_as_unknown_and_wait('ただしいつもの決まりですわ……');
      era.println();
      await era.printAndWait('ああ');
      await era.printAndWait([you.get_colored_name(), ' は少女の誘いを断った']);
      await era.printAndWait('反応はゼロだ');
      await era.printAndWait(
        '本来なら好みのはずの娘でも、今は体にわずかな反応すら起きない',
      );
      era.println();
      await era.printAndWait([
        '어느새 ',
        you.get_colored_name(),
        '은(는) 거리를 빠져나왔다',
      ]);
      await era.printAndWait([
        '드넓은 밤거리, 화려한 밤의 도시인데도 ',
        you.get_colored_name(),
        '에게 욕망을 일으키는 것은 하나도 찾을 수 없었다',
      ]);
      await era.printAndWait('한때 흥미를 가졌던 것들');
      await era.printAndWait('맛있는 음식, 술과 담배, 도박, 색욕……');
      await era.printAndWait('한때 빠져들어 신경을 마비시키는 데 쓰던 것들');
      await era.printAndWait('지금은 오히려 신경을 맑게 할 뿐이다');
      era.println();
      await era.printAndWait('그만 됐다. 이제 충분하다');
      await era.printAndWait(
        '뭐든 좋다. 취해 가라앉을 수만 있다면, 생각을 멈출 수만 있다면 뭐든 좋다',
      );
      await era.printAndWait('이성이 이토록 사람을 미치게 할 줄은 몰랐다');
      await era.printAndWait('폭력, 고통, 피, 상처');
      await era.printAndWait('그것들조차 더 이상의 자극이 되지 못한다');
      await era.printAndWait('어느 것을, 어느 실험에서 팔아 버렸더라');
      await era.printAndWait('이제는 잊었다. 그런 건 아무래도 좋다');
      era.println();
      await era.printAndWait(
        '인격이 벗겨지는 듯한 초조함으로 자극을 찾아도 아무것도 얻지 못한다',
      );
      await era.printAndWait(
        '이대로라면…… 망가진다. 신경도 몸도 반드시 망가지고, 끊어진다',
      );
      await era.printAndWait('그러니 그 전에 뭐든……');
      await era.printAndWait('뭐든, 좋으니까……');
      await tachyon.say_as_unknown_and_wait([callname, '? 왜 여기에 있나']);
      await tachyon.say_as_unknown_and_wait('……이런, 꼴이 말이 아니군');
      await tachyon.say_as_unknown_and_wait(
        '왜 그러나. 술값이 떨어졌나? 아니면 판돈이 없어 도박장에서 쫓겨났나…… 혹은 마음에 드는 상대라도 있나?',
      );
      await tachyon.say_as_unknown_and_wait('돈이…… 더 필요한가?');
      era.println();
      await era.printAndWait([
        you.get_colored_name(),
        '은(는) 멍하니 상대를 바라보았다',
      ]);
      await era.printAndWait([
        '악마의 속삭임처럼 ',
        you.get_colored_name(),
        '의 귓가에 솜처럼 가늘고 부드러운 목소리가 맴돌았다',
      ]);
      await era.printAndWait('돈');
      await era.printAndWait('아직 돈이 필요하다');
      await era.printAndWait('더 많은 돈이 필요하다');
      await era.printAndWait('더 빌려야 한다');
      era.println();
      await era.printAndWait('………………………왜?');
      await era.printAndWait('왜 돈을 원하지?');
      await era.printAndWait('왜 빌리지?');
      await era.printAndWait('술을 사려고?');
      await era.printAndWait('도박을 하려고?');
      await era.printAndWait('여자와 놀려고?');
      await era.printAndWait('왜?');
      await era.printAndWait('왜?');
      era.println();
      await era.printAndWait('뭐든 좋다');
      await era.printAndWait('무슨 짓이든 좋다');
      await era.printAndWait('생각해라');
      await era.printAndWait('어떻게 하면 생각을 멈출 수 있지');
      await era.printAndWait('어떻게 하면 머릿속을 완전히 마비시킬 수 있지');
      era.println();
      await era.printAndWait('아아……');
      await era.printAndWait('아아!');
      await era.printAndWait('찾았다');
      await era.printAndWait(
        '찾았다찾았다찾았다찾았다찾았다찾았다찾았다찾았다찾았다찾았다',
      );
      era.println();
      await you.say_and_wait('……그래, 돈을 빌려줄래?');
      await tachyon.say_as_unknown_and_wait([
        '물론이지…… 다만, ',
        callname,
        ', 빌린 돈으로 뭘 할 생각인가?',
      ]);
      era.println();
      await era.printAndWait('상대가 남겨 둔 유일한 빈틈');
      await era.printAndWait('자신에게 남겨진 마지막 자비');
      await era.printAndWait('함정? 음모? 계산?');
      await era.printAndWait('그런 건 이제 아무래도 좋다');
      era.println();
      await you.say_and_wait('타키온…… 이 돈으로…… 하룻밤만 나와 함께해 줄래?');
      era.println();
      await era.printAndWait(
        '입 밖으로 꺼낸 순간 한계까지 당겨진 용수철이 비로소 느슨해졌다',
      );
      await era.printAndWait('아아……');
      await era.printAndWait('상대를 생각할 때만 머릿속이 숨을 돌렸다');
      await era.printAndWait('상대를 떠올릴 때만 내면이 마비될 수 있었다');
      await era.printAndWait('왜 예전에는 눈치채지 못했을까');
      await era.printAndWait('왜 줄곧 의미 없는 일에 돈을 빌렸을까');
      await era.printAndWait('마음의 유일한 안식은 여기에 있었는데');
      era.println();
      await era.printAndWait([
        tachyon.get_colored_name(),
        '와(과) 함께 식사하고 싶다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '와(과) 함께 드라이브하고 싶다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '와(과) 함께 야경을 보고 싶다',
      ]);
      await era.printAndWait([
        tachyon.get_colored_name(),
        '와(과) 함께 러브호텔에 들어가고 싶다',
      ]);
      await era.printAndWait([
        '철저하게, 속부터 겉까지, 완전히 ',
        tachyon.get_colored_name(),
        '의 것이 되고 싶다',
      ]);
      await era.printAndWait('그렇게 생각할수록 가슴이 가벼워지고 편안해졌다');
      era.println();
      await tachyon.say_as_unknown_and_wait('후후…… 착하지, 착해');
      era.println();
      await era.printAndWait([
        '그렇게 ',
        you.get_colored_name(),
        '은(는) 진정한 행복을 얻었다',
      ]);
    };
    f.title = title;
    return f;
  })(),
  ws_punishment1: (() => {
    const title = '실험 기록: 우마무스메화';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      if (era.get('love:32') < 75) {
        await tachyon.say_and_wait(
          '이런, 모르모트…… 아니, 모르모트 양, 왔군……',
        );
        await tachyon.say_and_wait(
          '음? 어떻게 알았냐고? 후후, 그렇군. 그때는 의식이 없었으니.',
        );
        await tachyon.say_and_wait('수술을 집도한 건 바로 나라네.');
        await tachyon.say_and_wait(
          '트레이너로서 무능한 것은 가장 큰 죄야. 그런 점에서 자네는 용서받을 수 없다고 할 만하지.',
        );
        await tachyon.say_and_wait(
          '하지만 기뻐하게. 내 연구 덕분에 두 번째 기회를 얻었으니.',
        );
        await tachyon.say_and_wait(
          '애초에 중앙 트레센에 들어올 정도라면 남보다 뛰어난 점이 어딘가 있을 터. 발굴되느냐 마느냐의 차이일 뿐이야.',
        );
        await tachyon.say_and_wait(
          '우마무스메가 된 자네, 의외로 이쪽에 재능이 있을지도 모르지?',
        );
        await tachyon.say_and_wait(
          '부디 힘내게, 모르모트 양…… 다시 얻은 이 기회로 필사적으로 발버둥 쳐 보게나.',
        );
        await tachyon.say_and_wait(
          '그러지 않으면…… 다음에 수술대에서 나를 본 뒤에 벌어질 일은 절대 겪고 싶지 않을 거야…… 아니, 꼭 그렇지도 않으려나?',
        );
        await tachyon.say_and_wait('정말 그렇게 된다면 잔뜩 귀여워해 주지.');
      } else {
        await tachyon.say_and_wait(`모르모트…… 아니, ${you.actual_name}군.`);
        await tachyon.say_and_wait('미안하네. 하지만 규칙은 규칙이야……');
        await tachyon.say_and_wait(
          '아니…… 내 탓이지………… 자네 수술…… 집도한 건 나라네.',
        );
        await tachyon.say_and_wait('……그래, 후후.');
        await tachyon.say_and_wait(
          '안심하게…… 나는 상관없어. 어떤 모습이 되어도 자네 눈동자의 빛이 있는 한 똑같이 사랑할 테니.',
        );
        await tachyon.say_and_wait(
          '…………게다가 우마무스메가 되면 즐길 수 있는 것도 늘지 않겠나?',
        );
        await tachyon.say_and_wait('후후, 잔뜩 귀여워해 주지.');
      }
    };
    f.title = title;
    return f;
  })(),
  ws_punishment2: (() => {
    const title = '실험 기록: 성노예 개조';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk} you プレイヤー
     */
    const f = async (tachyon, you) => {
      const love = era.get('love:32');
      await era.printAndWait('「질척……질척……쪽……츄릅……」');
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait('쯧쯧쯧…… 모르모트 양, 경고했을 텐데?');
        await tachyon.say_and_wait('또 저지르면 어떤 말로를 맞는지…… 후후.');
      } else {
        await tachyon.say_and_wait('모르모트 군…… 꼴이 말이 아니군.');
        await tachyon.say_and_wait(
          '부끄럽군. 이런 상대가 연인이라니, 인정하고 싶지도 않아.',
        );
      }
      era.println();
      await era.printAndWait('아그네스 타키온의 연구실.');
      await era.printAndWait(
        '원래 이 시간에는 타키온이 약물을 조합하며 연구하고 있어야 한다.',
      );
      await era.printAndWait(
        `하지만 새로운 신분으로 돌아온 ${you.name}을(를) 맞이하기 위해 ${tachyon.sex}은(는) 오늘 일정을 일부러 취소하고 축하할 약까지 직접 조합했다.`,
      );
      era.println();
      await era.printAndWait('「츄릅……츄릅……쪽……질척……」');
      era.println();
      await tachyon.say_and_wait('아니면 이게 정말 자네가 바라던 것인가?');
      await tachyon.say_and_wait(
        '마음대로 유린당하며 자기 의지 따위는 없는 성노예가 되는 것이?',
      );
      era.println();
      await era.printAndWait(
        '타키온은 두 다리를 벌리고 평소 앉던 회전의자에 나른하게 몸을 기댔다.',
      );
      await era.printAndWait(
        `${tachyon.sex}의 두 다리 사이에는 말 귀가 돋은 여성이 웅크려 있었다. 입은 옷은 타키온과 같은 형태의 소매 긴 가운이었지만 몇 가지 차이가 있었다.`,
      );
      await era.printAndWait(
        '뒷자락이 일부러 잘려 있어 바람이 지날 때마다 둥근 엉덩이가 가운 밑으로 드러났다.',
      );
      await era.printAndWait(
        '가슴에는 약으로 녹인 듯한 불규칙한 구멍 두 개가 나 있어 유두가 공기에 노출되어 있었다.',
      );
      await era.printAndWait(
        '속옷? 단추를 잠그는 것조차 허락되지 않는 가운 사이로 드러나는 살빛만 봐도 그런 건 없다는 걸 알 수 있었다.',
      );
      await era.printAndWait(
        '성인용 의상보다 더 자극적인 옷을 입은 우마무스메가 머리를 앞뒤로 움직이며 타키온의 다리 사이 굵은 음경을 입에 물고 있었다.',
      );
      if (era.get('cflag:32:性别') === 0) {
        await era.printAndWait(
          '우마무스메의 몸에는 없을 기관. 그것이 생긴 이유는 물론 타키온의 약 때문이었다.',
        );
        era.println();
        await tachyon.say_and_wait(
          '후후…… 내 프론P 시리즈 덕분에 성노예의 일을 제대로 체험할 수 있겠군. 둘 다 암컷이면 즐길 수가 없잖나?',
        );
        era.println();
        await era.printAndWait(
          `바닥에 웅크린 우마무스메──즉, ${you.name}은(는) 못 들은 척하며 눈앞의 거대한 물건에 계속 봉사했다.`,
        );
        await era.printAndWait(
          '암컷 둘이라는 표현은 객관적으로는 조금 다를지 몰라도 결론은 대체로 같았다.',
        );
        await era.printAndWait(
          `누가 봐도 ${you.name}의 한껏 부풀었는데도 위에 묶인 진동기보다 짧은 생식기를, 정상적인 수컷이 암컷을 임신시키는 기관으로 인정하지는 않을 것이다. 굳이 말하자면…… 그래, 차라리 음핵이라고 부르는 편이 어울렸다.`,
        );
      }
      era.println();

      await era.printAndWait([
        `갑자기 온 정신을 쏟아 `,
        tachyon.uma_sex_title,
        `의 주인에게 봉사하던 ${you.name}의 온몸이 떨렸다.`,
      ]);
      await era.printAndWait([
        `${you.name}의 아래에서, 한계까지 발기해도 `,
        tachyon.uma_sex_title,
        `의 주인이 지닌 고환 한쪽보다 작은 「음핵」이 오늘 네 번째로 물처럼 묽은 액체를 뿜었다.`,
      ]);
      await era.printAndWait('그것은 눈앞의 주인을 불쾌하게 만들었다.');
      era.println();

      if (love < 75) {
        await tachyon.say_and_wait(
          '자기 쾌감에만 빠져 가장 기본적인 입 봉사조차 못 하다니…… 성노예로서도 이렇게 낙제일 줄은 몰랐군.',
        );
        era.println();

        await era.printAndWait([
          `${you.name}은(는) 황급히 정신을 가다듬고 담당 `,
          tachyon.uma_sex_title,
          `겸 주인에게 다시 봉사했다.`,
        ]);
        await era.printAndWait(
          `하지만 원래 인내심이 부족한 ${tachyon.sex}은(는) ${you.name}의 서투른 봉사에 이미 질려 있었다.`,
        );
        await era.printAndWait(
          `${tachyon.sex}은(는) 일어나 사타구니의 거대한 물건을 ${you.name}의 목구멍으로 더 깊이 밀어 넣었다.`,
        );
        await era.printAndWait([
          '커다란 음낭이 ',
          you.get_colored_name(),
          '의 턱에 부딪혔다. 묵직하고 따뜻한 것이 움직이는 감각은 ',
          you.get_colored_name(),
          '의 입에 쏟아질 정액의 양을 예고하고 있었다.',
        ]);
        era.println();

        await tachyon.say_and_wait(
          '그러고 보니 모르모트…… 아니, 성노예 군. 아직 기억하고 있나?',
        );
        era.println();

        await era.printAndWait(
          `일부러 성노예 「군」이라고 다시 부르자 ${you.name}은(는) 그 도착적인 호칭에 더욱 흥분했고, 아래의 「음핵」은 망가진 수도꼭지처럼 아까부터 물같이 맑은 액체를 계속 흘리고 있었다.`,
        );
        era.println();

        await tachyon.say_and_wait(
          '개조 수술은 전부 내가 했지. 그러니 자네 성감대를 이 세상에서 가장 잘 아는 사람은 틀림없이 나야.',
        );
        era.println();

        await era.printAndWait(
          `예를 들면, ${tachyon.sex}은(는) 갑자기 ${you.name}의 목구멍을 여러 번 찔러 무언가를 찾는 듯했다.`,
        );
        await era.printAndWait(
          `그런 거친 취급을 받으며 ${you.name}은(는) 다시금 자신이 단순한 물건, 성욕을 쏟아 내는 도구임을 깨달았다.`,
        );
        await era.printAndWait(
          `찌르던 도중 어딘가를 스친 것인지 ${you.name}의 목구멍이 갑자기 수축하고 하반신은 앞뒤 모두 액체를 뿜었다.`,
        );
        era.println();

        await tachyon.say_and_wait(
          '아아, 찾았군. 여기로군, 자네 목구멍의 성감대.',
        );
        await tachyon.say_and_wait(
          '여길 찌르면 수컷이 천 번 사정하는 것에 못지않은 쾌감…… 후후, 하지만 이제 수컷이던 시절의 일은 몰라도 되겠지.',
        );
        era.println();

        await era.printAndWait(
          `말을 들을 여유는 없었다. ${you.name}의 기력은 지금 밀물처럼 밀려오는 쾌감을 견디는 데만 쓰이고 있었다.`,
        );
        await era.printAndWait(
          `전력을 다해 버티지 않으면 파도 하나만으로도 ${you.name}은(는) 바닥에 무너져 멈추지 않는 분수가 될 것이다.`,
        );
        await era.printAndWait(
          '하지만 그 파도조차 주인의 육봉이 한 번 찌른 것에 불과했다.',
        );
        await era.printAndWait(
          `쌓여 가는 쾌감에 ${you.name}의 온몸 근육이 조여들었고, 목구멍마저 명기라고 부를 만큼 좁아졌다.`,
        );
        era.println();

        await tachyon.say_and_wait(
          '오오……! 이 조임이야! 싸겠어, 제대로 받아 내게!',
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex}은(는) ${you.name}의 머리를 세게 붙잡고 앞뒤로 거칠게 움직였다.`,
        );
        await era.printAndWait(
          '보통 인간의 몸이었다면 이런 취급은 목숨을 위협했을 것이다.',
        );
        await era.printAndWait(
          `다행인지 불행인지 지금 ${you.name}은(는) 우마무스메, 그것도 특별히 개조된 우마무스메였다.`,
        );
        await era.printAndWait(
          `그러니 아무리 거칠게 대해도 ${you.name}의 몸은 견뎌 내며 그 모든 것을 쾌감으로 바꾸었다.`,
        );
        await era.printAndWait(
          `질식하는 괴로움조차 ${you.name}의 몸이 멋대로 쾌감으로 바꾸었고, 이윽고 ${you.name}은(는) 스스로 그 감각을 즐기기 시작했다.`,
        );
        await era.printAndWait(
          `${you.name}의 목구멍은 주인의 드나듦에 맞춰 끊임없이 조임을 바꿨다. 마치 그런 것 같다는 수준이 아니라 ${you.name}의 목구멍 자체가 명기였다!`,
        );
        era.println();

        await tachyon.say_and_wait('받아 내게. 흘리면 끝장이야.');
        era.println();

        await era.printAndWait(
          '차가운 명령 뒤로 뜨거운 정액이 끓어오르듯 밀려왔다.',
        );
        await era.printAndWait(
          `엄청난 양이 ${you.name}의 입과 코, 목구멍과 혀를 채워 금방이라도 넘칠 듯했다……`,
        );
        await era.printAndWait([
          `${you.name}은(는) 황급히 입안 가득한 비릿한 액체를 삼켰지만 그 노력으로도 `,
          tachyon.uma_sex_title,
          `님의 은혜를 전부 담아낼 수 없었다.`,
        ]);
        await era.printAndWait([
          `결국……${you.name}은(는) 무력하게 두 손으로 `,
          tachyon.uma_sex_title,
          `님의 귀중한 씨를 받아 낼 수밖에 없었다.`,
        ]);
        era.println();

        await era.printAndWait(
          '그런데도 입안에서 쏘아 대는 굵은 포신은 멈추지 않았다.',
        );
        await era.printAndWait(
          `오랜 산소 부족은 그 쾌감까지 즐기는 ${you.name}에게도, 튼튼한 우마무스메의 몸에도 완전히 버틸 수 있는 것이 아니었고, 이윽고 ${you.name}의 의식이 흐려졌다……`,
        );
        era.println();

        await era.printAndWait('「쿵!」');
        era.println();

        await era.printAndWait([
          '문득 날카로운 통증에 ',
          you.get_colored_name(),
          '은(는) 눈을 떴다.',
        ]);
        await era.printAndWait(
          `${you.name}은(는) 저도 모르게 소리를 지르려 했지만 벌어진 목구멍으로 곧바로 다시 정액이 쏟아졌다.`,
        );
        await era.printAndWait([
          `${you.name}이(가) 고개를 들자 보인 것은 담당 `,
          tachyon.uma_sex_title,
          '겸 주인의 다리였다.',
        ]);
        await era.printAndWait(
          '자신이 무엇보다 아끼고 자신의 다리보다 소중히 여겼던 아름다운 발.',
        );
        await era.printAndWait(
          `그 발이 지금 가차 없이 ${you.name}의 배를 밟고 있었다.`,
        );
        era.println();

        await tachyon.say_and_wait('성노예로서의 능력…… 완전히 불합격이군.');
        await tachyon.say_and_wait('더 제대로 조교해야겠어……');
        era.println();

        await era.printAndWait(
          `다 삼키지 못한 정액이 ${you.name}의 온몸에 흘러내렸고 옷도 진한 액체로 뒤덮였다.`,
        );
        era.println();

        await tachyon.say_and_wait(
          '모처럼의 연구실을 이런 꼴로 만들다니…… 쳇, 참을 수 없군.',
        );
        era.println();

        await era.printAndWait(
          `타키온은 불쾌한 듯 말하다가 문득 생각난 것이 있는지 몸을 숙여 ${you.name}에게 속삭였다.`,
        );
      } else {
        await tachyon.say_and_wait(
          '이렇게 묽은 것밖에 못 내다니, 이 쓸모없는 기관이 아직 존재할 이유가 있나?',
        );
        await tachyon.say_and_wait(
          '이봐, 모르모트 군. 자네를 만족시킬 다른 수컷을 찾아야 할까…… 지금의 자네가 대체 누구를 만족시킬 수 있겠나?',
        );
        era.println();

        await era.printAndWait(
          `그 말을 듣고 ${you.name}은(는) 황급히 연인 겸 주인님에게 더 열심히 봉사하며 버리지 말아 달라고 빌었다.`,
        );
        await era.printAndWait(
          `${tachyon.sex}은(는) 만족스럽게 ${you.name}의 머리를 쓰다듬으며 더 부지런히 봉사하도록 재촉했다.`,
        );
        era.println();

        await tachyon.say_and_wait(
          '그렇게 버려지는 게 무서운가? 착하지, 착해.',
        );
        await tachyon.say_and_wait(
          '안심하게. 남에게 몸을 만지게 할 생각은 없어…… 하지만 연인이라면 상대의 성욕을 채워 주는 것도 의무 아닌가?',
        );
        era.println();

        await era.printAndWait(
          `다정한 말과 함께 ${tachyon.sex}은(는) ${you.name}의 엉덩이를 두드려 신호를 보냈다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 곧바로 순순히 주인에게 등을 돌리고 자신을 암컷으로 만든 입구를 스스로 벌렸다.`,
        );
        era.println();

        await era.printAndWait(
          `${tachyon.sex}은(는) 일어서서 사타구니의 거대한 물건으로 이미 젖은 ${you.name}의 구멍을 깊이 채웠다.`,
        );
        await era.printAndWait(
          `커다란 음낭이 ${you.name}의 둥근 엉덩이에 부딪혔다. 묵직하고 따뜻한 것이 움직이는 감각은 구멍 안에 쏟아질 정액의 양을 예고했다.`,
        );
        await era.printAndWait(
          `들어간 순간 ${you.name}은(는) 참지 못하고 달콤한 소리를 냈고, 뒤에 선 주인은 만족스럽게 숨을 내쉬었다.`,
        );
        era.println();

        await tachyon.say_and_wait(
          '후후, 성노예가 되어도 우리 몸은 가장 잘 맞는군.',
        );
        await tachyon.say_and_wait(
          '당연하지. 모르모트 군의 몸은 내가 개조했으니. 전부 내 기준에 맞춰 조정했다네.',
        );
        era.println();

        await era.printAndWait('자신의 몸은 주인에게 맞춰 개조되었다.');
        await era.printAndWait('자신은 주인의 전용 성노예다.');
        era.println();

        await era.printAndWait(
          `그 생각에 ${you.name}은(는) 더욱 흥분했고 구멍도 저절로 조여들었다.`,
        );
        era.println();

        await tachyon.say_and_wait(
          '음…… 갑자기 이렇게 조이다니. 왜 그러나? 방금 말에 흥분했나? 이런 상황에서도 이만큼 느끼다니, 예전의 내가 충분히 다정하지 못해 자네 소망을 놓쳤던 모양이군.',
        );
        era.println();

        await era.printAndWait(
          `말을 마칠 즈음 뒤에서 찌르는 힘은 갈수록 거세졌고, ${you.name}은(는) 눈치껏 허리를 뒤로 맞추며 주인의 포상을 맞이했다.`,
        );
        era.println();

        await tachyon.say_and_wait('싸겠어…… 제대로 받아 내게!');
        era.println();

        await era.printAndWait(
          `${tachyon.sex}의 손이 ${you.name}의 엉덩이를 세게 때리자 살이 파도처럼 흔들렸다.${you.name}이(가) 참지 못하고 흘리는 신음이 주인의 흥을 더욱 돋웠다.`,
        );
        await era.printAndWait(
          `마침내 ${you.name}이(가) 떨며 절정에 이르는 것과 동시에 뜨거운 육봉이 ${you.name}의 몸속으로 진한 정액을 쏟아 냈다.`,
        );
        await era.printAndWait(
          `${you.name}은(는) 몸속을 가득 채운 감각을 품은 채 의식을 어둠에 맡겼다……`,
        );
        era.println();

        await tachyon.say_and_wait(
          '이봐, 이봐, 자꾸 넘치잖나? 모처럼의 연구실을 이렇게 만들다니……',
        );
        era.println();

        await era.printAndWait(
          `주인의 언짢은 목소리에 ${you.name}은(는) 순식간에 정신을 차렸다.`,
        );
        await era.printAndWait(
          `바닥에 자신이 낭비한 주인의 정액을 보고 ${you.name}은(는) 당황해 가장 낭비가 적은 방법을 택할 수밖에 없었다……`,
        );
        era.println();

        await tachyon.say_and_wait('착하지, 착해. 깨끗이 치워야 착한 아이지.');
        era.println();

        await era.printAndWait(
          `주인은 바닥에서 강아지처럼 정액을 핥는 ${you.name}을(를) 쓰다듬었고, ${you.name}은(는) 기뻐서 더 열심히 핥았다.`,
        );
      }
      era.println();
      if (love < 75) {
        await tachyon.say_and_wait(
          `십 분 뒤에 돌아오겠네. 그때도 정리가 안 끝났으면 『벌』을 주지.`,
        );
      } else {
        await tachyon.say_and_wait('그래…… 그렇게 하겠어');
        await tachyon.say_and_wait(
          '착하지. 십 분 뒤에 돌아오겠네. 그때도 정리가 안 끝났으면 『벌』을 주지.',
        );
      }
      await tachyon.say_and_wait('이미 정리가 끝났다면 『상』을 주겠네.');
      if (love < 75) {
        await tachyon.say_and_wait(
          '어느 쪽으로 할지는 스스로 정하게, 성노예 『군』～',
        );
      } else {
        await tachyon.say_and_wait('어느 쪽으로 할지는 스스로 정하게～');
        await tachyon.say_and_wait(
          '하지만 안심하게. 어느 쪽이든 잔뜩 귀여워해 줄 테니❤️',
        );
      }
      era.println();

      await era.printAndWait('말을 마친 타키온은 바지를 입고 연구실을 나갔다.');

      if (love < 75) {
        await era.printAndWait(
          `바닥에 남겨진 ${you.name}은(는) 배가 풍선처럼 부풀고 입가에서 흰 액체를 흘린 채 힘없이 숨을 쉬고 있었다.`,
        );
        await era.printAndWait(
          `상인가, 벌인가……${you.name}은(는) 구석의 청소 도구함을 보았다.`,
        );
      } else {
        await era.printAndWait(
          `바닥에 남겨진 ${you.name}은(는) 배가 풍선처럼 부푼 채 아직도 흰 액체를 뿜으며 힘없이 바닥을 청소하고 있었다.`,
        );
        await era.printAndWait(`상인가, 벌인가……`);
      }
      await era.printAndWait('자, 어떻게 고르겠나?');
    };
    f.title = title;
    return f;
  })(),
  ws_punishment3: (() => {
    const title = '実験記録：孕袋と複数ウマ娘の体液研究';
    /**
     * @param {CharaTalk} tachyon アグネスタキオン
     * @param {CharaTalk|false} child アグネスタキオンとプレイヤーの子。いなければ false
     * @param {CharaTalk} you プレイヤー
     * @param {PrintedSpan} call_5 アグネスタキオンがフジキセキを呼ぶ名前
     * @param {PrintedSpan} call_9 アグネスタキオンがダイワスカーレットを呼ぶ名前
     * @param {PrintedSpan} call_25 アグネスタキオンがマンハッタンカフェを呼ぶ名前
     * @param {PrintedSpan} call_36 アグネスタキオンがエアシャカールを呼ぶ名前
     * @param {PrintedSpan} call_94 アグネスタキオンがジャングルポケットを呼ぶ名前
     */
    const f = async (
      tachyon,
      child,
      you,
      call_5,
      call_9,
      call_25,
      call_36,
      call_94,
    ) => {
      await tachyon.say_and_wait('흐흥, 흐흥~~');
      era.println();

      await era.printAndWait(
        '아그네스 타키온은 기분 좋게 콧노래를 흥얼거리며 익숙한 복도를 걷고 있었다.',
      );
      await era.printAndWait(
        '평소 이 층 복도는 기묘한 약이 뿜어져 나오는 연구실 때문에 학생들이 꺼리는 곳이다……하지만 최근에는 다시 조금씩 발길이 돌아온 모양이다.',
      );
      await era.printAndWait(
        `하지만 ${tachyon.sex}은 자신의 연구실을 지나쳐 어느 청소 도구함 앞에 멈춰 섰다.`,
      );
      era.println();

      await tachyon.say_and_wait([
        'ちっち……容赦ないですわね。一般的な',
        tachyon.uma_sex_title,
        'の性欲を、見くびっていたかしら。',
      ]);
      era.println();

      await era.printAndWait(
        `掃除道具棚の中には、目がとろんとし、口にボールギャグを填め、腹がぽっこり膨らみ、下の穴には二本の巨根が栓として刺さり、全身が愛液と精液にまみれ、正の字と下品な言葉を書き殴られた ${you.name} がいた。`,
      );
      era.println();

      await tachyon.say_and_wait('モルモット君？ 起きなさい。');
      era.println();

      await era.printAndWait(
        `${tachyon.sex}は ${you.name} への呼び方で声を掛けたが、三日三晩弄ばれた ${you.name} の目はまだとろんとしており、答えようともがいても、視線は虚空を泳ぐだけだった。`,
      );
      era.println();

      await era.printAndWait([
        'これほど惨めな光景を見ても、',
        tachyon.get_colored_name(),
        ' に憐れみも同情もなかった。',
      ]);
      await era.printAndWait(
        `${tachyon.sex}は容赦なく足を上げ、${you.name} の腹を踏んだ。`,
      );
      await era.printAndWait(
        `踏まれた瞬間、${you.name} はエビのように体を縮めたが、それでもしっかりと踏みつけられた。もともと膨らんだ腹を踏まれた瞬間、強制的に空気を抜かれた風船のように、栓にしていた二本の按摩棒を下の口から噴き出し、続いて腹いっぱいの愛液と精液が溢れた。縮こまる ${you.name} は全身を震わせ、その短い間にまた一度絶頂し、短い肉棒からも薄い種汁が漏れた。`,
      );
      era.println();

      await tachyon.say_and_wait(
        'いい量ですわ。これならしばらく実験に足りますわね。',
      );
      era.println();

      await era.printAndWait([
        `タキオンは、噴水が爆発した瞬間に間に合わせて取り出したビーカーを嬉しそうに見た。中は今集めた`,
        tachyon.uma_sex_title,
        `の体液で満たされている。だがこの一杯では ${you.name} の穴から出た量の三分の一にも満たず、残りは床に飛び散り、掃除係の厄介になった。`,
      ]);
      await era.printAndWait('まあ、汚した者が掃除する。当然のことだ。');
      era.println();

      await tachyon.say_and_wait('モルモット君～今回の実験は大成功ですわよ～');
      era.println();

      await era.printAndWait(
        'タキオンは何事もなかったように、興奮して実験の話を分け与えた。',
      );
      await era.printAndWait(
        `だが……何事もなかった、というのは ${you.name} の甘い錯覚にすぎない。`,
      );
      era.println();
      if (era.get('cflag:25:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_25,
          ` は意外と隠れスケベですわ……${tachyon.sex}ならこんな遊びは断ると思っていたのに、結果は……`,
        ]);
        era.println();
        await era.printAndWait(
          `タキオンは猟犬の痕跡が残る ${you.name} の首から肩まで撫で、それから……手を下ろし、歯形だらけの乳房に触れた。乳首の歯形が特に目立っていた。`,
        );
        await era.printAndWait(
          `触れた瞬間、${you.name} はまた体を震わせた。少し撫でただけと頭の中の想像で、今の ${you.name} は絶頂してしまう。`,
        );
        era.println();
      }
      if (era.get('cflag:94:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_94,
          ' も……最初はあんなに恥ずかしがっていたのに……',
        ]);
        era.println();

        await era.printAndWait(
          `${tachyon.sex}は、まだボールギャグで塞がれ声も出せない ${you.name} の唇を弄んだ。少し腫れた両唇が、この数日どれほど苛まれたかをタキオンに教えていた。`,
        );
        era.println();

        await tachyon.say_and_wait([
          call_94,
          ' の声は、研究室にいてもはっきり聞こえましたわ。',
        ]);
        era.println();
      }
      if (era.get('cflag:9:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          call_9,
          '……ふふ、さすが私が目をかけた子。この方面でも一位ですわ。',
        ]);
        era.println();

        await era.printAndWait(
          'まだ確かめてはいないが、今入れたビーカーの中身の七割くらいは、スカーレット一人が出した分だろう。',
        );
        await era.printAndWait([
          `閨でも一位でなければ気が済まない意地のおかげで、${tachyon.sex}はこの三日、いちばん長く ${you.name} に跨り続けた`,
          tachyon.uma_sex_title,
          'だった',
        ]);
        era.println();
      }
      if (era.get('cflag:5:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          'それに、',
          call_5,
          ' も私の提案を受けて実験に付き合ってくれましたわ。ちっち、うちのモルモット君の顔は大きいですわね。寮長まで魔の手から逃げられませんわ。',
        ]);
        era.println();

        await era.printAndWait(
          'タキオンはモルモットの太もも内側を撫でた。正の字だらけの両脚。そのうち四行は特別な筆跡で、微かに光っている。芸人はいつも大げさだ。正の字を書くときも例外ではない。',
        );
        era.println();
      }
      if (era.get('cflag:36:招募状态') === recruit_flags.yes) {
        await tachyon.say_and_wait([
          'ちっち。毎日論理だ論理だと言いながら、閨では理性を全部忘れますわね……',
          call_36,
        ]);
        era.println();

        await era.printAndWait(
          `タキオンは ${you.name} の菊穴に触れた。この数日こちらを腫れるまで突いた主因はシャカールの肉柱だ。本当にすべて合理的なら、生産の意味のない穴に出すのはいちばん論理に反する行為だろう。だがこの三日、${tachyon.sex}が休みなく耕す様子を見て、${you.name} は口に出す気にもなれなかった。もちろん、聞く暇もなかった。`,
        );
        era.println();
      }
      if (child) {
        const callname_c =
          era.get(`cflag:${child.id}:父方角色`) === 0 ? 'パパ' : 'ママ';
        await tachyon.say_and_wait([
          child.get_colored_name(),
          '……さすが私の',
          child.sex_code === 1 ? '息子' : '娘',
          'ですわ。こんなに早く独学で『',
          callname_c,
          '』の穴を使っていますわね……まあ子供ですもの、独占欲が強いのも分かりますわ。',
        ]);
        era.println();

        await era.printAndWait([
          'タキオンは ',
          you.get_colored_name(),
          ' の尻を叩いた。そこには幼い字で『',
          callname_c,
          'は私専用の便器』と書いてある。この子は本当に意味を分かっているのか……タキオンがその一文を読み上げ、もし理解したうえで書いたのだとしたら……',
          you.get_colored_name(),
          ' はまた堪らず絶頂した。',
        ]);
        era.println();
      }
      if (era.get('cflag:0:妊娠阶段') >> pregnant_stage_enum.embryo > 0) {
        await tachyon.say_and_wait(
          'お腹の子が哀れですわ……母親がこんな誰にでも股を開く娼婦だなんて。私なら精液で溺れた方がマシですわ。',
        );
        era.println();

        await era.printAndWait(
          'タキオンはまた強く一踏みし、嘲りと侮蔑を込めて言った。',
        );
        era.println();
        await tachyon.say_and_wait(
          '喜びなさい。ウマ娘の体は頑丈ですわ。こう踏んでも傷つくのはあなただけで、お腹の子には何もありません……でもそんなこと、どうでもいいのでしょうね。肉棒さえあればいい娼婦さん。',
        );
        era.println();
        await era.printAndWait(
          `${you.name} は反論したかったが、下から噴く潮がそれを許さなかった。`,
        );
        era.println();
      }
      await tachyon.say_and_wait(
        'こちらは、『かつて』あなたに恋慕していた子たちが残したものですわ。',
      );
      era.println();
      await era.printAndWait([
        `タキオンは ${you.name} の体に書かれた『雌犬』、『便器10円一回』、『`,
        tachyon.uma_sex_title,
        `さまの精便器』、『性愛ダービー18着』を撫でた。`,
      ]);
      await era.printAndWait([
        'どれも、憧れていたトレーナーが淫らな孕袋になったのを見て、愛が恨に、恨が欲に変わった',
        tachyon.uma_sex_title,
        'たちが残したものだ。',
      ]);
      era.println();
      await tachyon.say_and_wait('でも、気持ちよかったのでしょう？ ねえ？');
      era.println();
      await era.printAndWait('タキオンの顔に、嗜虐の笑みが広がった。');
      era.println();
      await tachyon.say_and_wait([
        'その浮かれた顔を見るに、字を書かれたとき、',
        tachyon.couple_title,
        'に一字一句読み上げさせたんじゃありませんこと？ ねえ？ 淫乱、駄犬、精液のためなら床に跪いて靴を舐める雌豚？',
      ]);
      era.println();
      await era.printAndWait(`一言ごとに、${you.name} の下から潮が湧いた。`);
      await era.printAndWait(
        `${you.name} がしようとした抵抗は、どれも見せかけの拒絶にしか見えなかった。`,
      );
      era.println();
      if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait('冗談ですわ。');
        era.println();
        await era.printAndWait(
          `ふいにタキオンは ${you.name} の顔を支え、${you.name} の口を塞いでいたボールギャグを優しく外した。`,
        );
        await era.printAndWait(
          `外した瞬間、先の衝撃と、${you.name} の腹にまだ残っていた精液のせいで、${you.name} は堪らずタキオンへ向かい、腹の中の精液、愛液、胃酸を残らず吐いた。`,
        );
        era.println();
        await era.printAndWait(
          `目の前のタキオンの白衣を汚してしまい、${you.name} の顔は青ざめた。先の責めだけでなく、その不敬のせいでもあった。`,
        );
        era.println();

        await tachyon.say_and_wait('……大丈夫ですわ、モルモット君。');
        era.println();
        await era.printAndWait(
          `タキオンは吐瀉物のついていない袖で、${you.name} の口元を優しく拭った。`,
        );
        era.println();
        await tachyon.say_and_wait(
          '言いましたわよね。あなたを捨てたりしません。どんな姿になっても同じですわ。',
        );
        era.println();
        await era.printAndWait(
          `${you.name} が反応する前に、${tachyon.sex}は ${you.name} の唇に口づけた。この数日どれほど苛まれ、どれだけの相手に汚され、今また何を吐いたかなど、構わずに。`,
        );
        await era.printAndWait('柔らかく、温かく、包み込むようなキス。');
        await era.printAndWait(
          `いつの間にか ${you.name} は、昔の日々に戻ったような気がした。`,
        );
        era.println();

        await era.printAndWait('……だが、それも『ような』だけだ。');
        era.println();

        await era.printAndWait(
          `${you.name} はタキオンの白衣の下で、ますます膨らむ膨らみを見て、自分の立場を思い出した。`,
        );
        await era.printAndWait(
          `タキオンも気づき、照れたように ${you.name} へ笑った。`,
        );
        era.println();

        await tachyon.say_and_wait('いいですの？ モルモット君？');
        era.println();

        await era.printAndWait(
          `${you.name} は答えず、ただ従順に地へ跪き、今日最初の奉仕を始めた。`,
        );
      } else {
        await tachyon.say_and_wait('これでまだ言い逃れするつもりですの？');
        era.println();

        await era.printAndWait(
          `タキオンは荒々しく ${you.name} のボールギャグを外した。`,
        );
        await era.printAndWait(
          `外した瞬間、先の衝撃と、${you.name} の腹にまだ残っていた精液のせいで、${you.name} は堪らずタキオンへ向かい、腹の中の精液、愛液、胃酸を残らず吐き出そうとした。`,
        );
        await era.printAndWait('だが……');
        era.println();

        await tachyon.say_and_wait('何をするつもりですの、モルモット君。');
        era.println();

        await era.printAndWait('ああ、とっくに分かっていたはずだ。');
        await era.printAndWait(
          `${tachyon.sex}がわざわざギャグを外して楽をさせてくれるはずがない。`,
        );
        await era.printAndWait(
          `${you.name} が口を開いた瞬間、${tachyon.sex}の下の巨根が、吐き出そうとしたものも言葉もすべて塞いだ。`,
        );
        era.println();
        await tachyon.say_and_wait(
          'この数日は実験で忙しくて、私自身はまだ使っていませんでしたわ。',
        );
        era.println();
        await era.printAndWait(
          `淫らな匂いと、尿の気配すらする巨根が ${you.name} の喉を塞いだ。`,
        );
        await era.printAndWait(
          `${tachyon.sex}は荒々しく ${you.name} の口と舌を使い、無機物のオナホールを扱うようだった。`,
        );
        await era.printAndWait('情はなく、ただ性欲を処理するためだけに使う。');
        era.println();
        await tachyon.say_and_wait(
          'ふう、出ますわ出ますわ。受け止めなさい。さもなくばあとで……まあいいわ。床を汚しても片付けるのはあなたですもの。',
        );
        era.println();
        await era.printAndWait(
          `タキオンは遠慮なく ${you.name} の口を満たすと、足を止めず研究室へ戻り、今日の研究を続けた。`,
        );
        await era.printAndWait(
          `今日最初の奉仕を終えた ${you.name} は虚ろな目で虚空を見つめ、いったい何がこうなるまで進んだのかを考えた。`,
        );
        await era.printAndWait(
          '……だが、そんな思考にも意味はない。改造手術のときに聞いた通り、もう戻れない。',
        );
        await era.printAndWait([
          you.get_colored_name(),
          ' は三日分溜まった白濁を懸命に飲み込み、自分が汚した廊下の床を見た……',
        ]);
        era.println();
        if ((await degeneration_to_evil('口で', '掃除道具で')) === 1) {
          await era.printAndWait(
            'どうせもう戻れない。なら思い切って理性を捨て、全部味わえばいい。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' は地に跪き、三日分の ',
            you.get_colored_name(),
            ' が残した痕を舐めた。',
          ]);
          await era.printAndWait('理由は何だろう。');
          await era.printAndWait([
            tachyon.uma_sex_title,
            'さまに道具で掃除しているところを見られたら、もっと惨めになるから？',
          ]);
          await era.printAndWait(
            'この惨めさで、こんな暮らしから抜け出そうと自分を戒めるため？',
          );
          await era.printAndWait(
            'それとも……タキオンの言う通り、精液と肉棒のためなら体面も捨てて床を舐める下衆なのか？',
          );
          era.println();
          await era.printAndWait('そんな理由は、もうどうでもよかった。');
          await era.printAndWait([
            '地に伏せた ',
            you.get_colored_name(),
            ' の目に映り、耳に入り、口に乗るのは、床にも、自分の体にも、挿れる穴から流れ出る白濁の精だけだった。',
          ]);
          era.println();
          await era.printAndWait('「たっ……たっ……」');
          await era.printAndWait([
            you.uma_sex_title,
            'の鋭い耳が、',
            you.get_colored_name(),
            ' に、廊下手前からこちらへ歩いてくる足音を拾わせた。',
          ]);
          await era.printAndWait([
            'では、今度はどの',
            tachyon.uma_sex_title,
            'さまが奉仕を要するのだろう。',
          ]);
          await era.printAndWait([
            'いつの間にか、',
            you.get_colored_name(),
            ' は自ら尻を上げ、次の賓客の使用を待っていた。',
          ]);
        } else {
          await era.printAndWait(
            '肉体は改造されても、せめて精神までは捨てられない。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はもがいて立ち上がった——',
            you.uma_sex_title,
            'の体でも、三日弄ばれたばかりの ',
            you.get_colored_name(),
            ' には辛い動作だ——掃除道具棚から、この数日 ',
            you.get_colored_name(),
            ' とさまざまな',
            tachyon.uma_sex_title,
            'の体液にまみれた掃除道具を取り出し、床に残した痕を拭いた。',
          ]);
          era.println();
          await era.printAndWait([
            '立ち上がっただけで足裏への刺激が、',
            you.get_colored_name(),
            ' を一度小さな絶頂へ連れていく。',
          ]);
          await era.printAndWait([
            '今も ',
            you.get_colored_name(),
            ' の穴と尻穴からは白濁と愛液の混じった粘液が流れ続け、',
            you.get_colored_name(),
            ' の掃除を邪魔する。',
          ]);
          await era.printAndWait(
            '先の丸い箒の柄を見て、その匂いを嗅いだだけで、五分しか空いていない穴をそれで満たしたくなる衝動が走る。',
          );
          era.println();
          await era.printAndWait([
            you.get_colored_name(),
            ' はそれでも意地を張って立ち、箒と塵取りで無駄な掃除を続けた。',
          ]);
          await era.printAndWait(
            '自分は人間だ。ウマ娘でも、性奴隷でも、孕袋でもない。',
          );
          await era.printAndWait([
            'その意地は、まだ ',
            you.get_colored_name(),
            ' の胸に残っている。',
          ]);
          await era.printAndWait('だが……');
          era.println();
          await era.printAndWait('「たっ……たっ……」');
          await era.printAndWait([
            you.uma_sex_title,
            'の鋭い耳が、',
            you.get_colored_name(),
            ' に、廊下手前からこちらへ歩いてくる足音を正確に捉えさせた。',
          ]);
          await era.printAndWait(
            '今日の使用者か。答えるまでもない。薬が漏れやすいこの廊下へ近づく理由など、それ以外に思いつかない。',
          );
          await era.printAndWait([
            'だが ',
            you.get_colored_name(),
            ' はそれでも意地を張って立ち、聞こえないふりをして、人間としての誇りを守った。',
          ]);
          era.println();
          await era.printAndWait([
            '——————たとえそれが、五分後には ',
            you.get_colored_name(),
            ' 自身が自ら捨てるものだとしても。',
          ]);
        }
        era.setColor();
      }
    };
    f.title = title;
    return f;
  })(),
  /**
   * @param {CharaTalk} tachyon アグネスタキオン
   * @param {PrintedSpan} callname アグネスタキオンがプレイヤーを呼ぶ名前
   * @param {boolean} hentai 倒錯行為があるか（あれば身敗名裂エンド、なければ追放）
   * @param {boolean} has_plan Plan A または B を選んだか
   * @param {boolean} plan_b Plan B に入ったか
   */
  async end_talk(tachyon, callname, hentai, has_plan, plan_b) {
    if (hentai) {
      if (
        !has_plan &&
        era.get('love:32') < 75 &&
        era.get('cflag:32:育成次数') === 0
      ) {
        await tachyon.say_and_wait(
          '하반신에 집착하는 건가? 어리석은 이유로군…… 그래도 다음에 또 뭔가 할 생각이라면 나를 찾아오게. 그 눈동자를 봐서라도 말이야.',
        );
      } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
        if (!plan_b) {
          await tachyon.say_and_wait(
            '가능성 너머를 향하는 꿈조차 자네의 시야를 채우지 못하나? 바보가 아니라면 전무후무한 야심가로군.',
          );
        } else {
          await tachyon.say_and_wait([
            '꿈이 무너진 뒤의 자포자기인가? 아니면 앞날을 잃은 ',
            tachyon.uma_sex_title,
            '에게서 달아나기 위한 구실인가?',
          ]);
        }
      } else if (era.get('love:32') >= 75) {
        await tachyon.say_and_wait([
          '미안하네, ',
          callname,
          '. 조금 지나치게 놀았던 모양이군…… 다음에는 더 신중하게 하지.',
        ]);
      } else if (era.get('cflag:32:育成次数') > 0) {
        await tachyon.say_and_wait([
          '이런, 이번에는 너무했군, ',
          callname,
          '……다음에는 조심하게.',
        ]);
      }
    } else if (
      !has_plan &&
      era.get('love:32') < 75 &&
      era.get('cflag:32:育成次数') === 0
    ) {
      await tachyon.say_and_wait(
        '시시한 모르모트로군…… 그래도 다음에 또 뭔가 할 생각이라면 나를 찾아오게. 그 눈동자를 봐서라도 말이야.',
      );
    } else if (era.get('cflag:32:育成回合计时') < 3 * 48) {
      if (!plan_b) {
        await tachyon.say_and_wait(
          '나를 이 길로 이끌어 놓고 혼자 떠나는 건가? 한계 너머는 결국 혼자 걷는 길이로군.',
        );
      } else {
        await tachyon.say_and_wait([
          '교훈으로 삼게나. 다음에는 쓸모없는 사람에게 집착하지 말도록……',
          tachyon.sex,
          '의 앞날은 자네 몫까지 지켜보겠네.',
        ]);
      }
    } else if (era.get('love:32') >= 75) {
      await tachyon.say_and_wait(
        '이 실험이 끝나면 자네를 찾아가겠네. 그때까지는 내가 준 긴 휴가라고 생각하게.',
      );
    } else if (era.get('cflag:32:育成次数') > 0) {
      await tachyon.say_and_wait([
        '이런, 이번에는 너무했군, ',
        callname,
        '……다음에는 조심하게.',
      ]);
    }
  },
};
